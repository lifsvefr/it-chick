/* Academic Language · Academic Japanese Unit 7 (e1u7) · Writing reports and theses in Japanese */
ICA.addUnit({
  id:"e1u7", track:"e1", n:7, title:"Writing reports and theses in Japanese", icon:"✍️",
  blurb:"From the task to the finished file: kinds of レポート, questions and claims, structure and outlines, paragraphs, quoting and reporting sources, reference lists, punctuation and full-width/half-width characters, 原稿用紙 rules, and writing honestly when plagiarism rules and AI tools are involved.",
  goals:[
    "Tell a レポート from a 感想文, recognise explanatory, argumentative and reporting tasks, and turn a topic into a question (問い) and a claim (主張)",
    "Plan a report in 序論・本論・結論 with an outline, and write paragraphs with a 中心文, supporting sentences and a one-character indent",
    "Quote directly with 「」 and report indirectly with ～によると or ～と指摘している, choose reporting verbs and avoid 孫引き",
    "Write reference entries in a common Japanese pattern, order them by 五十音順 when asked, and keep punctuation, numbers and full-width/half-width characters consistent",
    "Follow the main 原稿用紙 rules, recognise 剽窃 in its Japanese forms, use AI and translation tools only as your course allows, and check a draft with a checklist"
  ],
  read:[
    {book:"koyobun", where:"Part Ⅰ「表記の原則」, item 4「数字の使い方」 and item 5「符号の使い方」(1)「句読点や括弧の使い方」", note:"The Japanese government’s 2022 guidance on official writing. It is not a rulebook for university reports, but it is the clearest official statement on 「、」 vs 「，」, brackets and full-width/half-width numbers. In Japanese."},
    {book:"owg", where:"Section 10.6 “Editing Focus: Paragraphs and Transitions” and Section 12.6 “Editing Focus: Integrating Sources and Quotations”", note:"Background reading in English on paragraphs and on fitting quotations into your writing. The ideas carry over; the Japanese forms are in the lessons."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u7-l1", title:"Reports, questions and claims", minutes:50,
   hook:{q:"A teacher at a Japanese university sets a 「[期末]{きまつ}レポート」 (end-of-term report). Which of these is the teacher most likely **not** looking for?", options:["A clear question, and an answer to it","Evidence from sources, with citations","Your impressions of the class (「[感想]{かんそう}」)","Writing in である style"], answer:2, reveal:"**Your impressions.** Japanese university writing guides repeat one sentence again and again: 「レポートは[感想文]{かんそうぶん}ではない」 (a report is not an impressions essay). At school, many students write [読書]{どくしょ}[感想文]{かんそうぶん} about books they read, so the first university report often slips into “I learned a lot and was moved”. A report instead answers a question with evidence and reasoning. That surprises Japanese first-year students too, so you are in good company. This lesson shows what a report is, the main kinds, and how to turn a topic into a question and a claim."},
   goals:[
     "Explain how a レポート differs from a 感想文 and from a reflection sheet",
     "Recognise 説明型, 論証型 and 報告型 tasks from the wording of the assignment",
     "Read the conditions in a task: 字数, format, deadline and how to submit",
     "Turn a broad topic (テーマ) into a question (問い) you can answer in the length you have",
     "State a claim (主張) and plan the evidence (根拠) that supports it"
   ],
   learn:[
    {h:"A report is not an impressions essay", body:[
      {lead:"Imagine two people back from the same trip. One says “It was wonderful, I’ll never forget it.” The other says “The new train line cut the journey by forty minutes, and here are the timetables.” Both are honest; only the second is a report."},
      "In Japanese universities, a **[[repooto|レポート]]** (*repōto*) is a written assignment that answers a question using evidence and logical reasoning. It is the most common kind of writing you will do: weekly short reports, a [期末]{きまつ}レポート at the end of a course, and later perhaps a [卒業]{そつぎょう}[論文]{ろんぶん} (*sotsugyō ronbun*, or 卒論 *sotsuron*), the graduation thesis that many, but not all, departments require in the final year. After that comes the [修士]{しゅうし}[論文]{ろんぶん} for a master’s degree.",
      "Many learners (and many Japanese first-year students) first write something closer to a **[感想文]{かんそうぶん}**: a piece about personal impressions and feelings, the kind Japanese pupils write at school about books they read. Nothing is wrong with a 感想文; it simply answers a different question (“How did you feel?”).",
      {table:[["","感想文 (impressions essay)","レポート (report)"],["Answers…","How did I feel? What did I learn?","A question about the topic"],["Based on…","Personal experience and feelings","Sources, data and reasoning"],["Typical ending","～と思いました。～したいです。","～といえる。～と考えられる。"],["Style","Often です・ます","Usually [[dearu-tai|である体]]"]]},
      {ex:"✗ この授業を受けて、とても勉強になったと思いました。\n✓ 本レポートでは、大学生のアルバイト時間と学業成績の関係を検討する。", label:"The same course, two kinds of writing"},
      "The first sentence reports a feeling. The second announces what the report will examine ([検討]{けんとう}する, “examine”). Notice also the style: です・ます and ～と思いました in the first; である-style plain forms in the second. Unit 5 covers the styles themselves ({{desu-masu-and-dearu}}).",
      {tip:"Some courses do ask for feelings: a リアクションペーパー or コメントシート (a short reaction sheet after a lecture), or a 振り返り (reflection). Those are not reports, and the teacher’s instructions decide what they should contain. When the task says レポート, assume a question, evidence and reasoning unless told otherwise."}
    ]},
    {h:"Three kinds of report", body:[
      "Japanese writing guides often sort reports into three kinds. The names vary a little between guides, but the ideas are stable, and the task wording usually tells you which kind you have.",
      {table:[["Kind","What you do","Typical task wording"],["**説明型** (explanatory)","Explain or summarise something accurately and clearly","～について説明しなさい。～をまとめなさい。"],["**論証型** (argumentative)","Take a position on a question and support it with evidence","～について論じなさい。～の[是非]{ぜひ}を論じよ。"],["**報告型** (reporting)","Report what you did and found: an experiment, a survey, fieldwork, a visit","実験の方法と結果を報告しなさい。"]]},
      "**説明型** reports test understanding: can you explain a theory, a system or a debate in your own words, with sources? **論証型** reports test thinking: can you reach a defensible answer and show why? **報告型** reports test method and accuracy: what exactly did you do, what did you observe, and what does it mean? Science lab reports (実験レポート) follow a fixed pattern close to the structure of a paper (目的・方法・結果・[[kousatsu|考察]]); Unit 6 describes that structure in {{japanese-paper-structure}}.",
      "Many real tasks mix kinds. 「AとBを比較し、あなたの考えを述べなさい」 asks you to explain both, then argue. When the wording is unclear, ask the teacher. Japanese students ask this too; it is not a sign of weakness.",
      {tip:"The ending 「～せよ」 (as in 論じよ, 説明せよ) is a formal written imperative used in exam and task wording. It is not rude; it simply means “do ～”."}
    ]},
    {h:"Reading the task: verbs and conditions", body:[
      "Before writing, read the task ([課題]{かだい}, *kadai*) twice: once for **what to do**, once for **the conditions**. The verb is the key.",
      {table:[["Task verb","What it asks for"],["説明する","Explain how or why something is, accurately"],["要約する","Summarise a text in fewer words, keeping its main points ([[youyaku|要約]])"],["比較する","Compare: show similarities and differences, and what they mean"],["論じる","Argue: take a position and support it"],["考察する","Examine and interpret: think through what results or facts mean"],["述べる","State or set out (often your view: 「あなたの考えを述べなさい」)"]]},
      "Then the conditions. Japanese tasks are usually precise about them, and teachers do check.",
      {list:["**字数** (*jisū*, length in characters): 「2000字程度」 (about 2,000), 「2000字以内」 (no more than 2,000), 「2000字以上」 (at least 2,000). Japanese length is counted in characters, not words. Teachers differ on how far “about” stretches, so stay close to the number.","**Format** ([書式]{しょしき}): for example A4, 横書き (horizontal), 40字×30行, a 表紙 (cover page) or a header with your name and [学籍]{がくせき}[番号]{ばんごう} (student number).","**Deadline** ([提出]{ていしゅつ}[期限]{きげん} or [締]{し}め[切]{き}り) and **how to submit** (提出方法): on paper, by email, or on the university’s learning system.","**Sources**: 「参考文献を3点以上挙げること」 means “list at least three references”."]},
      {warn:"Character counts in Word or Google Docs may count spaces, line breaks or half-width letters differently from what your teacher expects. If the limit is tight, ask whether the title, headings and reference list count."}
    ]},
    {h:"From topic to question: 問い", body:[
      "A topic (テーマ) is an area: 「SNSと大学生」. A report needs something narrower: a **question** (問い, *toi*) that your report can answer in the space you have. Research Skills calls this a [[research-question|research question]]; the same thinking applies.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="u7a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">From topic to claim</text><rect class="d-soft" x="40" y="34" width="260" height="56" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">テーマ (topic)</text><text class="s" x="170" y="77" text-anchor="middle">SNSと大学生</text><path class="d-ink" d="M170 92 V112" stroke-width="2" marker-end="url(#u7a1)"/><rect class="d-lup" x="20" y="116" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="138" text-anchor="middle">問い (question)</text><text class="s" x="170" y="158" text-anchor="middle">SNSの利用時間が長い大学生ほど</text><text class="s" x="170" y="175" text-anchor="middle">学習時間は短いのか。</text><path class="d-ink" d="M170 188 V208" stroke-width="2" marker-end="url(#u7a1)"/><rect class="d-sage" x="20" y="212" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="234" text-anchor="middle">主張 (claim: the answer)</text><text class="s" x="170" y="254" text-anchor="middle">関係はあるが、利用の目的に</text><text class="s" x="170" y="271" text-anchor="middle">よって異なると考えられる。</text><text class="s" x="170" y="306" text-anchor="middle">Evidence (根拠) supports the claim:</text><text class="s" x="170" y="322" text-anchor="middle">surveys, studies, data, reasoning</text></svg>', alt:"Three boxes linked by arrows. Topic: SNSと大学生. Question: SNSの利用時間が長い大学生ほど学習時間は短いのか。 Claim: 関係はあるが、利用の目的によって異なると考えられる。 Below: evidence such as surveys, studies, data and reasoning supports the claim.", cap:"A topic is an area; a question is something you can answer; the claim is your answer, backed by evidence."},
      "Useful question patterns:",
      {list:["「なぜ～のか」 (why…?): なぜ地方の大学では留学生が増えているのか。","「～は…といえるか」 (can ～ be called…?): オンライン授業は対面授業と同じ効果があるといえるか。","「～はどのように…か」 (how…?): 自治体は外国人住民にどのように情報を伝えているか。","「～すべきか」 (should…?): 大学の授業は録画して公開すべきか。"]},
      "A good 問い is **answerable** with evidence you can actually find, **narrow** enough for the length (a 2,000-character report cannot cover the history of the world), and **open** enough to need thinking: 「SNSは便利か」 is too vague, and a question with a one-word factual answer leaves nothing to argue.",
      {tip:"Write your 問い as one sentence ending in 「か」, and keep it on a sticky note while you write. If a paragraph doesn’t help answer it, it probably doesn’t belong."}
    ]},
    {h:"Claim and evidence: 主張 and 根拠", body:[
      "Your **[主張]{しゅちょう}** (*shuchō*, claim) is your answer to the 問い. Your **[根拠]{こんきょ}** (*konkyo*, grounds or evidence) is what makes a reader accept it: data, findings from studies, documents, and the reasoning that connects them. Unit 6 shows how to find the [[shuchou|主張]] and [[konkyo|根拠]] when you read; here you build them yourself.",
      "In a report, state the claim early, usually in the introduction, then support it. Common ways to announce it:",
      {list:["本レポートでは、～と主張する。 (I argue that ～.)","本レポートの目的は、～を明らかにすることである。 (The aim is to make clear ～.)","結論から述べると、～。 (To give the conclusion first, ～.)"]},
      "Japanese reports rarely use 私 (I). Writers say 本レポートでは (in this report), [本稿]{ほんこう}では (*honkō*, in this paper) or [筆者]{ひっしゃ} (*hissha*, the writer). Some teachers accept 私, so check; 本レポートでは is safe in almost any report. Avoid ending claims with 「～と思う」, which sounds like a private feeling; use 「～と考えられる」 or 「～といえる」 instead (more in {{hedging-japanese}}).",
      "Evidence needs care. One friend’s story or your own experience is an example, not proof. A claim like 「若者は本を読まなくなった」 needs a source such as a published survey, and the source needs a citation (Lesson 3)."
    ]},
    {h:"Common slips, and how to avoid them", body:[
      {list:["**The report is a list of quotations.** Sources should support *your* answer, not replace it. After each source, say what it shows for your question.","**No question, just a topic.** 「SNSについて」 is a title, not a 問い. Without a question, the report wanders.","**The claim appears only at the end, as a surprise.** In reports, say where you are going in the introduction.","**Personal feelings as evidence.** 「私も疲れている」 does not show that students in general are tired.","**Ignoring the conditions.** A brilliant report at twice the 字数 or in the wrong format can lose marks."]},
      {key:"A レポート answers a question (問い) with a claim (主張) supported by evidence (根拠), in the format the task asks for."}
    ]}
   ],
   try:[
    {id:"e1u7-l1-x1", type:"sort", q:"Each sentence comes from a student’s writing about a course. Does it belong to a **感想文** (impressions essay) or a **レポート** (report)?", buckets:["感想文","レポート"], items:[
      {t:"この本を読んで、とても感動しました。", b:0, why:"A personal feeling (感動しました) in です・ます style: typical of an impressions essay."},
      {t:"本レポートでは、大学生の睡眠時間と成績の関係を検討する。", b:1, why:"States what the report will examine, in である style, with 本レポートでは."},
      {t:"私もこれから気をつけたいと思う。", b:0, why:"A personal resolution (～たいと思う). It tells the reader about the writer’s plans, not about the topic."},
      {t:"調査の結果、回答者の約6割が朝食をとっていなかった。", b:1, why:"Reports a finding with a number: evidence, as in a 報告型 report."},
      {t:"以上の点から、この制度には改善の余地があるといえる。", b:1, why:"Draws a conclusion from the points already made (以上の点から), with the report ending ～といえる."},
      {t:"先生の話がおもしろくて、あっという間の90分でした。", b:0, why:"An impression of the class, in conversational です・ます style. Fine on a reaction sheet, not in a report."}
    ]},
    {id:"e1u7-l1-x2", type:"match", q:"Match each task verb to what it asks you to do.", pairs:[
      ["説明する","Explain accurately how or why something is","説明 is about understanding: clear, accurate explanation with sources, not your opinion."],
      ["論じる","Take a position and argue for it","論じる means building an argument. A report that only lists facts doesn’t answer “論じなさい”."],
      ["要約する","Shorten a text, keeping its main points","要約 keeps the author’s main points in fewer words; your own opinion is usually not added."],
      ["比較する","Show similarities and differences","比較 means comparing; the best comparisons also say what the differences mean."],
      ["考察する","Examine and interpret what facts or results mean","考察 is interpretation: why the results came out this way, what they suggest, what their limits are."]
    ]},
    {id:"e1u7-l1-x3", type:"sort", q:"Which kind of report does each task most likely ask for?", buckets:["説明型","論証型","報告型"], items:[
      {t:"「ジェンダー」という概念について、教科書の内容をもとに説明しなさい。", b:0, why:"説明しなさい, based on the textbook: explain the concept accurately."},
      {t:"大学の授業をすべてオンラインにすることの是非を論じなさい。", b:1, why:"是非を論じなさい asks you to argue whether something is right or not: a position with support."},
      {t:"実験の目的、方法、結果を報告し、結果について考察しなさい。", b:2, why:"A lab report: report what you did and found, then interpret it."},
      {t:"博物館を見学し、展示の内容と気づいた点を報告しなさい。", b:2, why:"A report on a visit (見学): what you saw and noticed, presented in order."},
      {t:"少子化の主な原因を三つ挙げ、それぞれ説明しなさい。", b:0, why:"List three causes and explain each: an explanatory task. You may still compare them, but the main job is explaining."},
      {t:"地方の公共交通を維持すべきかについて、あなたの考えを論じなさい。", b:1, why:"～すべきか plus あなたの考えを論じなさい: a clear argumentative task."}
    ]},
    {id:"e1u7-l1-x4", type:"mcq", q:"Amara’s topic for a 2,000-character report is 「大学生とアルバイト」. Which is the best **問い**?", options:[
      {t:"アルバイトについて", why:"This is a topic or a title, not a question. It doesn’t tell the reader (or Amara) what she will find out."},
      {t:"アルバイトは楽しいか", why:"“Is part-time work fun?” depends on personal feelings and can’t be answered with evidence in a report."},
      {t:"週20時間を超えるアルバイトは、大学生の学業成績と関係があるのか", ok:true, why:"Narrow, answerable with published surveys or studies, and open enough to need thinking about what the evidence shows."},
      {t:"世界の若者の労働はどのように変化してきたか", why:"A real question, but far too broad for 2,000 characters: it would need a book."}
    ]},
    {id:"e1u7-l1-x5", type:"mcq", q:"Which sentence states a **主張** (claim) clearly, in a form suitable for a report?", options:[
      {t:"本レポートでは、大学の授業開始時刻を遅らせるべきだと主張する。", ok:true, why:"A clear position, announced with 本レポートでは and the plain form 主張する. The reader knows what the report will argue."},
      {t:"授業開始時刻については、いろいろな意見があると思う。", why:"No position, and ～と思う sounds like a private feeling. The reader still doesn’t know what the report argues."},
      {t:"私は朝が苦手なので、授業はもっと遅く始まってほしい。", why:"A personal wish (～てほしい) based on the writer’s own habits, not a claim that evidence could support."},
      {t:"授業開始時刻について調べてみた。", why:"This describes an activity, not a claim, and ～てみた is conversational. What did the writer find, and what do they argue?"}
    ]},
    {id:"e1u7-l1-x6", type:"spot", q:"Kim wrote the opening of a report. Tap each sentence that **doesn’t belong in a report** as written. Some sentences are fine.", ask:"doesn’t belong", parts:[
      "　",
      {t:"近年、大学生の生活費に占めるアルバイト収入の割合が高まっているといわれる。", flag:false, why:"Neutral background in である style. (In the final report it would need a source.)"},
      {t:"私も週に4日バイトをしていて、正直かなり疲れる。", flag:true, why:"Personal experience and feelings (正直, かなり疲れる), plus バイト, the clipped spoken form of アルバイト. One person’s tiredness is not evidence about students in general."},
      {t:"そこで本レポートでは、アルバイトの時間と学業成績の関係を検討する。", flag:false, why:"States the aim clearly with 本レポートでは and 検討する: exactly what an introduction needs."},
      {t:"アルバイトはやっぱり良くないと思う。", flag:true, why:"やっぱり is spoken, ～と思う is personal, and it announces a verdict before any evidence."},
      {t:"まず先行研究を整理し、次に公開されている調査結果を分析する。", flag:false, why:"Previews the structure with まず…次に…, a standard move in a report introduction."}
    ]},
    {id:"e1u7-l1-x7", type:"mcq", q:"A task says 「2000字以内」. Which draft is a problem?", options:[
      {t:"A draft of 2,150 characters", ok:true, why:"以内 means “within”: 2,000 is the maximum, so 2,150 breaks the condition. Cut it before submitting."},
      {t:"A draft of 1,950 characters", why:"Within the limit and close to it: a safe length."},
      {t:"A draft of exactly 2,000 characters", why:"以内 includes the number itself, so exactly 2,000 is allowed."},
      {t:"A draft of 1,880 characters", why:"Within the limit. Teachers expect you to use most of the space, and 1,880 does."}
    ]}
   ],
   apply:{
    intro:"Use a real or realistic task: from your own course, a university’s published sample tasks, or one you invent on a topic you care about. Keep your notes; you will build on them in Lesson 2.",
    tasks:[
     {t:"Decode a report task", how:[
       "Find or write a report task in Japanese (for example 「〇〇について、あなたの考えを2000字程度で論じなさい」).",
       "Circle the task verb and decide the kind: 説明型, 論証型 or 報告型 (or a mix).",
       "List the conditions: 字数, format, deadline, submission method, number of sources."
     ], write:"Task… verb… kind… 字数… format… deadline… sources…"},
     {t:"From テーマ to 問い", how:[
       "Choose a topic you know something about (your field, your town, a hobby).",
       "Write three possible questions using different patterns: なぜ～のか, ～といえるか, ～すべきか.",
       "Pick the one you could answer with evidence in about 2,000 characters, and write why."
     ], write:"テーマ… 問い1… 問い2… 問い3… chosen… because…"},
     {t:"Draft a claim and plan its evidence", how:[
       "Write a one-sentence 主張 that answers your chosen 問い, starting 本レポートでは….",
       "List two or three kinds of evidence you would need (a survey, a study, official statistics, a document).",
       "Note where you could look: Unit 6 lists CiNii Research and J-STAGE for Japanese research ({{finding-japanese-research}})."
     ], write:"主張… evidence 1… evidence 2… where to look…"}
    ],
    proof:"Notes with one decoded task, three candidate questions and your choice, and a one-sentence claim with a plan for its evidence."
   },
   read:[
    {book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”", note:"Background reading in English: how a thesis (claim), reasons and evidence fit together. The same logic underlies 問い・主張・根拠."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u7-l2", title:"Structure, outlines and paragraphs", minutes:55,
   hook:{q:"In a Japanese report, how do you usually show that a new [段落]{だんらく} (paragraph) begins?", options:["Leave a blank line, and nothing else","Start the first line one character in ([一字下]{いちじさ}げ)","Put a number in front of it","Write its first sentence in bold"], answer:1, reveal:"**One character in.** In Japanese reports, theses and handwritten essays, a new paragraph starts on a new line, one full character in from the left: [一字下]{いちじさ}げ (*ichiji sage*). Blogs and web pages often use blank lines instead, which is why many learners are unsure. Some report templates use both a blank line and the indent; a blank line alone is less usual. This lesson covers the three-part structure of a report, outlines, and how a Japanese paragraph is built."},
   goals:[
     "Plan a report in three parts, 序論・本論・結論 (or はじめに・本論・おわりに), and give each part its job",
     "Use standard phrases for stating the aim, previewing the structure and concluding",
     "Make an outline with numbered headings before writing",
     "Build a paragraph from a 中心文 and supporting sentences, on one topic",
     "Lay out paragraphs correctly: 一字下げ, and a line break only at the end of a paragraph"
   ],
   learn:[
    {h:"Three parts, two sets of names", body:[
      {lead:"A report is like a guided walk: tell people where you’re going, take them there, then remind them where they’ve been."},
      "Almost every Japanese report has three parts. Formal names are **[序論]{じょろん}** (*joron*, introduction), **[本論]{ほんろん}** (*honron*, main body) and **[結論]{けつろん}** (*ketsuron*, conclusion). Many reports and papers use friendlier headings for the first and last: **[[hajimeni|はじめに]]** (introduction) and **[[owarini|おわりに]]** (closing). The job is the same either way.",
      {fig:'<svg viewBox="0 0 340 360"><text x="170" y="20" text-anchor="middle">The three parts and their jobs</text><rect class="d-lup" x="70" y="34" width="200" height="78" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">序論 / はじめに</text><text class="s" x="170" y="76" text-anchor="middle">背景 → 問い → 目的</text><text class="s" x="170" y="94" text-anchor="middle">→ 構成の予告</text><rect class="d-sage" x="14" y="124" width="312" height="140" rx="8" stroke-width="2"/><text x="170" y="146" text-anchor="middle">本論</text><text class="s" x="170" y="164" text-anchor="middle">evidence and reasoning, one point per section</text><rect class="d-panel" x="30" y="176" width="88" height="72" rx="4"/><text class="s" x="74" y="208" text-anchor="middle">段落</text><text class="s" x="74" y="226" text-anchor="middle">point 1</text><rect class="d-panel" x="126" y="176" width="88" height="72" rx="4"/><text class="s" x="170" y="208" text-anchor="middle">段落</text><text class="s" x="170" y="226" text-anchor="middle">point 2</text><rect class="d-panel" x="222" y="176" width="88" height="72" rx="4"/><text class="s" x="266" y="208" text-anchor="middle">段落</text><text class="s" x="266" y="226" text-anchor="middle">point 3</text><rect class="d-gold" x="70" y="276" width="200" height="78" rx="8" stroke-width="2"/><text x="170" y="298" text-anchor="middle">結論 / おわりに</text><text class="s" x="170" y="318" text-anchor="middle">まとめ → 主張の再提示</text><text class="s" x="170" y="336" text-anchor="middle">→ 今後の課題</text></svg>', alt:"Three stacked boxes. The narrow top box, 序論 or はじめに, holds background, question, aim and a preview of the structure. The wide middle box, 本論, holds evidence and reasoning in several paragraphs, one point each. The narrow bottom box, 結論 or おわりに, holds a summary, the restated claim and remaining issues.", cap:"The body is the widest part: most of the length goes there."},
      "How long should each part be? A rough guide many teachers use is that the 本論 takes most of the space and the introduction and conclusion are short, often around a tenth each in a short report. It is a rule of thumb, not a rule.",
      "Longer theses add sections: a review of earlier research ([先行研究]{せんこうけんきゅう}), method, results and 考察. Unit 6 shows that fuller structure in {{japanese-paper-structure}}; a short report is a small version of it."
    ]},
    {h:"Phrases that do the jobs", body:[
      "Japanese reports use a small set of stock phrases for each job. Using them is not copying; it is what readers expect, and it makes your structure visible.",
      {table:[["Job","Typical phrase"],["Background (背景)","近年、～が注目されている。"],["Question (問い)","では、～はなぜ～のだろうか。"],["Aim (目的)","本レポートの目的は、～を明らかにすることである。"],["Preview (構成の予告)","以下、まず～を整理し、次に～を検討する。"],["Point in the body","第一に、～。第二に、～。"],["Summary (まとめ)","以上、本レポートでは～について検討した。"],["Remaining issues (今後の課題)","今後の課題として、～が挙げられる。"]]},
      "A question in the introduction can end in 「～のだろうか」: it is a rhetorical question that sets up what the report will answer, and it is normal in Japanese academic writing. The answer must come later, in the body and conclusion.",
      {ex:"　近年、大学生のアルバイト時間が長くなっているといわれる。では、長時間のアルバイトは学業にどのような影響を与えるのだろうか。本レポートの目的は、アルバイト時間と学業成績の関係を明らかにすることである。以下、第2節で先行研究を整理し、第3節で公開されている調査データを分析する。", label:"A short はじめに: background, question, aim, preview"},
      {warn:"The conclusion summarises and answers; it does not open a new topic. A sentence like 「また、留学生の問題も重要である」 at the end raises something the report never discussed. If it matters, it belongs in the body, or under 今後の課題 as a clearly labelled limitation."}
    ]},
    {h:"Outlines: plan before you write", body:[
      "An **アウトライン** (outline) is the skeleton of your report: numbered headings, each with a note of its point. Writing guides in Japan recommend it for the same reason everywhere: it is much easier to move a heading than to move five paragraphs.",
      {ex:"大学生のアルバイト時間と学業成績の関係\n1. はじめに（背景・問い・目的・構成）\n2. 先行研究\n3. 公開データの分析\n　3.1 アルバイト時間の分布\n　3.2 学業成績との関係\n4. 考察\n5. おわりに（まとめ・今後の課題）\n参考文献", label:"An outline for a 4,000-character report"},
      "Common numbering is **1. / 1.1 / (1)** in reports. Theses often use **第1章** (chapter 1) and **第1節** (section 1). Follow your department’s template if there is one. Headings (見出し) are short noun phrases, not sentences, and they are not indented.",
      "A useful next step is a **sentence outline**: under each heading, write the one sentence that the section must prove. If you can’t write that sentence, you are not ready to write the section.",
      {tip:"Titles: 「～について」 alone is vague. A title that names the relationship or question is clearer, and a subtitle can narrow it: 「大学生のアルバイト時間と学業成績 ― 公開調査データの分析から ―」. Subtitles between dashes like this are common in Japanese titles."}
    ]},
    {h:"The Japanese paragraph: 中心文 and 支持文", body:[
      "A **[[danraku|段落]]** (*danraku*, paragraph) is a unit of meaning: **one paragraph, one topic** (一つの段落に一つの話題). Academic writing guides describe its parts like this:",
      {list:["**[[chuushinbun|中心文]]** (*chūshinbun*): the sentence that states the paragraph’s point, like the [[topic-sentence|topic sentence]] in English. In academic writing it usually comes first.","**[支持文]{しじぶん}** (*shijibun*): supporting sentences, giving evidence, examples, explanation or citations.","Often a closing sentence that sums up or links to the next paragraph."]},
      {table:[["Part","Sentence"],["中心文","アルバイトの長時間化は、学習時間の減少につながる可能性がある。"],["支持文 1","佐藤（2021）の調査では、週20時間以上働く学生は、そうでない学生に比べて授業外の学習時間が短かった。"],["支持文 2","また、深夜のアルバイトは睡眠不足を招き、授業への集中を妨げると指摘されている（田中 2019）。"],["まとめ","したがって、アルバイトの時間だけでなく、時間帯にも注目する必要がある。"]]},
      "(The sources here are invented for the example.) Read only the first sentence and you know what the paragraph argues; the rest supports it. The paragraph’s closing 「したがって」 links the evidence to a conclusion, and 「また」 adds a second piece of evidence: these 接続詞 are the signposts from Unit 6 ({{japanese-signposts}}).",
      "Some Japanese writing, especially essays and newspaper columns, builds up to its point at the end of a paragraph. That is a real style, not an error. But in reports and theses, guides recommend the point first, because readers skim: they read the first sentence of each paragraph to follow the argument."
    ]},
    {h:"Paragraphs on the page", body:[
      "Two layout rules matter, and both are widely agreed:",
      {ol:["**Indent one character (一字下げ)** at the start of each paragraph. In Word or Google Docs, type one full-width space (全角スペース) or set a first-line indent of one character in the paragraph settings. Headings are not indented.","**Start a new line only at the end of a paragraph.** Inside a paragraph, sentences follow each other on the same line, with no spaces between them after 「。」."]},
      "The second rule catches many people who write mostly in chat apps, where every sentence goes on its own line. In a report, a new line tells the reader “new topic”. If every sentence starts a new line, the reader can’t see the topics at all.",
      {ex:"✗\n睡眠不足は成績に影響する可能性がある。\n中村（2020）は、睡眠時間が短い学生ほど得点が低い傾向を報告している。\nしたがって、睡眠時間の確保が重要である。\n\n✓\n　睡眠不足は成績に影響する可能性がある。中村（2020）は、睡眠時間が短い学生ほど得点が低い傾向を報告している。したがって、睡眠時間の確保が重要である。", label:"Chat-style lines, then one paragraph (source invented)"},
      "In the first version, each sentence looks like a separate topic and there is no indent. In the second, the indent shows where the paragraph starts, and the three sentences sit together as one unit: point, evidence, conclusion.",
      "How long is a paragraph? Guides avoid exact numbers, but a one-sentence paragraph is usually too short to make and support a point, and a paragraph that fills a whole page usually holds more than one topic. If you can’t state a paragraph’s point in one sentence, split it.",
      {tip:"To check structure, make a reverse outline ([[reverse-outline]]): copy only the first sentence of each paragraph into a list. If the list reads like a summary of your argument, your paragraphs work. If two items say the same thing, or one says nothing, revise."}
    ]},
    {h:"Linking paragraphs", body:[
      "Paragraphs link through [[setsuzokushi|接続詞]] (conjunctions) and through repeated key words. At the start of a paragraph you will often see:",
      {table:[["Function","Paragraph opener"],["Ordering points","まず、／次に、／最後に、"],["Numbered points","第一に、／第二に、／第三に、"],["Adding","さらに、／また、"],["Contrasting","一方、／しかし、"],["Concluding","以上のように、／このように、"]]},
      "Avoid spoken openers such as でも, だから and sentence-initial なので in a report; Unit 5 covers why ({{written-vs-spoken-japanese}}). And avoid stacking connectors: one per sentence is plenty.",
      {key:"Plan in three parts with an outline; write one topic per paragraph, point first, indented one character, with a new line only when the topic changes."}
    ]}
   ],
   try:[
    {id:"e1u7-l2-x1", type:"order", q:"Put these sentences into the usual order for a report’s はじめに.", items:[
      {t:"近年、大学生のアルバイト時間が長くなっているといわれる。", why:"Background (背景) comes first: why the topic matters now."},
      {t:"では、長時間のアルバイトは学業にどのような影響を与えるのだろうか。", why:"The question (問い) follows from the background; では signals the turn to the question."},
      {t:"本レポートの目的は、アルバイト時間と学業成績の関係を明らかにすることである。", why:"The aim (目的) says what the report will do about the question."},
      {t:"以下、第2節で先行研究を整理し、第3節で調査データを分析する。", why:"The preview of the structure (構成の予告) usually ends the introduction, leading into section 2."}
    ]},
    {id:"e1u7-l2-x2", type:"match", q:"Match each stock phrase to the job it does in a report.", pairs:[
      ["近年、～が注目されている。","Gives the background","近年 (in recent years) and 注目されている set the scene: why the topic matters now."],
      ["本レポートの目的は、～を明らかにすることである。","States the aim","目的は…ことである is the standard frame for the aim."],
      ["以下、まず～を整理し、次に～を検討する。","Previews the structure","以下 (below) plus まず…次に… tells the reader the order of what follows."],
      ["以上、本レポートでは～について検討した。","Sums up at the end","以上 (the above) looks back over the whole report: a typical first sentence of おわりに."],
      ["今後の課題として、～が挙げられる。","Names what remains to be done","今後の課題 (future issues) admits limits and points to further work, usually near the end."]
    ]},
    {id:"e1u7-l2-x3", type:"mcq", q:"These are the supporting sentences of a paragraph: 「図書館の利用者数は、開館時間を延長してからの2年間で約1.5倍に増えた。また、夜間の利用者の多くは、日中に授業やアルバイトがある学生であった。」 Which is the best **中心文** to start the paragraph?", options:[
      {t:"開館時間の延長は、図書館の利用を促したと考えられる。", ok:true, why:"States the point that both supporting sentences prove (more users, and evening users who couldn’t come by day), with a suitable cautious ending."},
      {t:"図書館は大学にとって大切な場所である。", why:"True, but far too general: it doesn’t tell the reader what this paragraph shows."},
      {t:"夜の図書館は静かで、とても勉強しやすい。", why:"A personal impression, and off the point: the evidence is about numbers of users, not quietness."},
      {t:"次に、図書館の歴史について述べる。", why:"This announces a different topic. The supporting sentences are not about history."}
    ]},
    {id:"e1u7-l2-x4", type:"spot", q:"Fatima’s paragraph should be about one topic: sleep and academic results. Tap each sentence that **breaks the paragraph’s unity or doesn’t belong in a report**. Some sentences are fine. (The sources are invented.)", ask:"doesn’t belong", parts:[
      "　",
      {t:"睡眠不足は、学業成績の低下と関係している可能性がある。", flag:false, why:"A clear 中心文 stating the paragraph’s point, with a cautious ending."},
      {t:"中村（2020）は、平均睡眠時間が6時間未満の学生は試験の得点が低い傾向にあると報告している。", flag:false, why:"Evidence with a citation, directly supporting the point."},
      {t:"また、学食のメニューが少ないことも学生の不満となっている。", flag:true, why:"A different topic (the cafeteria menu). It belongs in another paragraph, or another report."},
      {t:"私も徹夜した次の日は全然集中できなかった。", flag:true, why:"Personal experience, plus the spoken 全然. It doesn’t show anything about students in general."},
      {t:"これらの結果から、睡眠時間の確保が学習を支える一つの条件であるといえる。", flag:false, why:"A closing sentence that draws the evidence together and returns to the point."}
    ]},
    {id:"e1u7-l2-x5", type:"sort", q:"Which part of a report does each sentence most likely come from?", buckets:["序論","本論","結論"], items:[
      {t:"本レポートの目的は、地方の公共交通の課題を整理することである。", b:0, why:"States the aim: an introduction job."},
      {t:"第一に、利用者数の減少により、運賃収入が減っている。", b:1, why:"A numbered point with evidence: the body."},
      {t:"以上、本レポートでは地方の公共交通の課題について検討した。", b:2, why:"以上 + 検討した looks back over the report: conclusion."},
      {t:"以下、まず現状を確認し、次に二つの自治体の事例を比較する。", b:0, why:"Previews the structure: introduction."},
      {t:"A市の資料によると、市内を走る路線バスの本数は10年前より減っている。", b:1, why:"Evidence from a source, used to support a point: the body. (A real report would give the exact document and year.)"},
      {t:"今後の課題として、利用者への聞き取り調査が挙げられる。", b:2, why:"Remaining issues come at the end, in the conclusion."}
    ]},
    {id:"e1u7-l2-x6", type:"mcq", q:"Hasan types his report the way he writes messages: he presses Enter after every sentence. What should he do instead?", options:[
      {t:"Press Enter only at the end of a paragraph, and start each paragraph with a one-character indent", ok:true, why:"In Japanese reports, a new line means a new paragraph (a new topic), and paragraphs start with 一字下げ."},
      {t:"Keep the line breaks, but add a blank line after each sentence", why:"That makes every sentence look like its own paragraph. The reader can no longer see where topics begin and end."},
      {t:"Remove all line breaks so the report is one block", why:"Then there are no paragraphs at all. Each topic needs its own paragraph."},
      {t:"Put one half-width space after each 「。」 instead", why:"Japanese text doesn’t use spaces after 「。」. The fix is about paragraphs, not spacing."}
    ]},
    {id:"e1u7-l2-x7", type:"order", q:"Put the headings of this short report outline in the usual order.", items:[
      {t:"1. はじめに", why:"The introduction always comes first: background, question, aim, preview."},
      {t:"2. 先行研究", why:"What earlier studies found comes before your own analysis, so the reader sees the gap you address."},
      {t:"3. 調査の方法と結果", why:"Then what you did and what you found."},
      {t:"4. 考察", why:"Interpretation comes after the results: what they mean for the question."},
      {t:"5. おわりに", why:"The closing section sums up and names remaining issues."},
      {t:"参考文献", why:"The reference list comes last, after the text, usually without a section number."}
    ]}
   ],
   apply:{
    intro:"Build on your Lesson 1 notes: your 問い and 主張.",
    tasks:[
     {t:"Write an outline", how:[
       "Write a title that names your question or relationship (add a subtitle if it helps).",
       "Write numbered headings: 1. はじめに … おわりに, 参考文献.",
       "Under each body heading, write the one sentence that section must show."
     ], write:"Title… 1. はじめに… 2.… 3.… 4.… 5. おわりに… 参考文献"},
     {t:"Draft a はじめに with four moves", how:[
       "Write one sentence each for 背景, 問い, 目的 and 構成の予告, using the phrases in this lesson as frames.",
       "Join them into one paragraph with a one-character indent and no line breaks inside it.",
       "Check: does the reader know your question and where the report is going after these four sentences?"
     ], write:"背景… 問い… 目的… 構成の予告…"},
     {t:"Build one paragraph and test it", how:[
       "Write one body paragraph: a 中心文, two 支持文 (use real sources if you have them, or mark where a citation will go), and a closing sentence.",
       "Read only the first sentence. Does it state the point?",
       "Underline every sentence that is not about that point, and move or delete it."
     ], write:"中心文… 支持文1… 支持文2… まとめ…"}
    ],
    proof:"An outline with a title and headings, a four-sentence はじめに, and one checked body paragraph."
   },
   read:[
    {book:"owg", where:"Section 10.6 “Editing Focus: Paragraphs and Transitions”", note:"Background reading in English on paragraph unity and transitions. The 中心文 and 支持文 model matches the topic sentence and support described there."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u7-l3", title:"Quoting and reporting sources", minutes:55,
   hook:{q:"You mention a book in a Japanese report. Which marks usually go around the book’s title?", options:["「」","『』","“ ”","《》"], answer:1, reveal:"**『』.** In Japanese writing, 『』 marks the titles of books (and, in many fields, of journals and newspapers), while 「」 marks quotations and the titles of articles and chapters. So you write 『[大学]{だいがく}で[学]{まな}ぶということ』 for a book, but 「[大学生]{だいがくせい}の[学習]{がくしゅう}[時間]{じかん}」 for an article in a journal. Reference lists in some fields, especially sciences, drop these marks altogether. This lesson covers how to quote and report what sources say."},
   goals:[
     "Quote a source word for word with 「」, page number and citation, following the main conventions",
     "Change 「」 inside a quotation to 『』, and show omissions with （中略）",
     "Set out a long quotation as a block quotation",
     "Report a source in your own words with ～によると, ～と述べている or ～と指摘している, and choose a reporting verb that fits",
     "Recognise 孫引き and know what to do instead"
   ],
   learn:[
    {h:"Why reports quote, and the ground rules", body:[
      {lead:"A report is a conversation with other writers. Quoting is how you let them speak; citing is how you tell the reader who said what."},
      "In Japanese, **[引用]{いんよう}** (*in’yō*) means using someone else’s words or ideas in your writing with the source shown. It covers both quoting word for word and reporting an idea in your own words. Research Skills explains why and when to quote, paraphrase or summarise in any language: {{quote-paraphrase-summary}}. This lesson is about the Japanese forms.",
      "Japan’s Copyright Act ([著作権法]{ちょさくけんほう}) allows quotation in Article 32, as long as it fits fair practice and stays within what the purpose justifies. The Agency for Cultural Affairs’ explanation of the law, and many Japanese writing guides, sum up the conditions like this:",
      {list:["**The quotation is necessary** for your point.","**The quoted part is clearly marked** (with 「」 or as a block), so readers can tell it from your words.","**Your text is the main part**, and the quotation supports it, not the other way round.","**The source is shown** ([出所]{しゅっしょ}の[明示]{めいじ}, required by Article 48)."]},
      "Universities add their own rule on top: anything you take from a source, words or ideas, must be cited, or it counts as [[hyousetsu|剽窃]] (plagiarism; Lesson 5).",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="u7a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="40" y="10" width="260" height="72" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Source: 山田（2020）p. 15</text><text class="s" x="170" y="54" text-anchor="middle">大学の学びは、問いを持つ</text><text class="s" x="170" y="72" text-anchor="middle">ことから始まる。</text><path class="d-ink" d="M110 84 L80 118" stroke-width="2" marker-end="url(#u7a3)"/><path class="d-ink" d="M230 84 L260 118" stroke-width="2" marker-end="url(#u7a3)"/><rect class="d-lup" x="6" y="122" width="160" height="196" rx="8" stroke-width="2"/><text x="86" y="144" text-anchor="middle">直接引用</text><text class="s" x="86" y="164" text-anchor="middle">exact words in 「」</text><text class="s" x="14" y="196">山田（2020）は、</text><text class="s" x="14" y="216">「大学の学びは、問いを</text><text class="s" x="14" y="236">持つことから始まる」</text><text class="s" x="14" y="256">（p. 15）と述べている。</text><rect class="d-sage" x="174" y="122" width="160" height="196" rx="8" stroke-width="2"/><text x="254" y="144" text-anchor="middle">間接引用</text><text class="s" x="254" y="164" text-anchor="middle">your words, no 「」</text><text class="s" x="182" y="196">山田（2020）による</text><text class="s" x="182" y="216">と、大学での学習の</text><text class="s" x="182" y="236">出発点は、自ら問いを</text><text class="s" x="182" y="256">立てることだという。</text><text class="s" x="86" y="296" text-anchor="middle">source shown</text><text class="s" x="254" y="296" text-anchor="middle">source shown</text></svg>', alt:"A source sentence by 山田 (2020), page 15: 大学の学びは、問いを持つことから始まる。 Arrows lead to two boxes. Left, direct quotation: the exact words inside 「」 with the page number, ending と述べている. Right, indirect quotation: the idea restated in different words with ～によると…という, and no 「」. Both show the source.", cap:"Both kinds of 引用 show the source. Only a direct quotation uses 「」 and the exact words."}
    ]},
    {h:"Direct quotation with 「」", body:[
      "A **[[chokusetsu-inyou|直接引用]]** (*chokusetsu in’yō*, direct quotation; Research Skills calls it a [[direct-quotation|direct quotation]]) copies the source’s words exactly and puts them in 「」.",
      {ex:"山田（2020）は、「大学の学びは、問いを持つことから始まる」（p. 15）と述べている。", label:"A short direct quotation"},
      "The conventions most Japanese guides agree on:",
      {list:["**Copy exactly**: the same kanji, kana, punctuation and even mistakes. If the original has an error, keep it and add （ママ） (“as in the original”) after it.","**Drop the final 「。」 of the original** when the quotation sits inside your sentence before と: 「～始まる」と述べている, not 「～始まる。」と述べている.","**「」 inside a quotation becomes 『』.** If the original says 学生は「正解」を探しすぎている, you write 「学生は『正解』を探しすぎている」.","**Show omissions** with （中略） or with 「……」. Don’t change the meaning by what you leave out.","**Give the page** for a direct quotation. Common forms are （p. 15）, （15頁） or, inside the citation, （山田 2020: 15）. Your field’s style decides which."]},
      "If you add emphasis that isn’t in the original, say so, for example （[傍点]{ぼうてん}は[引用者]{いんようしゃ}による） (“dots for emphasis added by the quoter”). 引用者 means you, the person quoting.",
      {tip:"Quote only when the exact words matter: a definition, a striking phrase, words you will analyse. Otherwise report the idea in your own words. A report that is mostly quotations has no room for your argument."}
    ]},
    {h:"Long quotations: the block", body:[
      "When a quotation is long, guides recommend setting it apart as a **block quotation** ([[block-quotation]]; ブロック引用 or 独立引用). Guides differ on the exact threshold (often “more than two or three lines”) and on the indent, but the usual shape is:",
      {list:["a blank line before and after the block","the whole block indented, often by two characters","no 「」 around it (the layout already shows it is quoted)","the source and page after it, or in the sentence that introduces it"]},
      {ex:"山田（2020）は、大学での学び方について次のように述べている。\n\n　　高校までの学習では、多くの場合、答えはあらかじめ用意されている。しかし大学では、答えのない問いに取り組むことが求められる。そのためにはまず、自分で問いを立てる力が必要である。（山田 2020: 15）\n\nこの指摘は、本レポートの問いにも関わる。", label:"A block quotation, introduced and followed by the writer’s own sentences"},
      "Notice the writer’s sentence before the block (次のように述べている, “states as follows”) and after it (この指摘は…). A block never stands alone: you introduce it and then say what it shows."
    ]},
    {h:"Indirect quotation: in your own words", body:[
      "A **[[kansetsu-inyou|間接引用]]** (*kansetsu in’yō*, indirect quotation) reports an idea in your own words, without 「」 but with the source. Most citing in reports is indirect. These patterns are standard:",
      {table:[["Pattern","Example"],["～によると、…という。","山田（2020）によると、大学での学習の出発点は、自ら問いを立てることだという。"],["～は、…と述べている。","山田（2020）は、大学では答えのない問いに取り組む力が求められると述べている。"],["…と指摘されている（～）。","大学での学びには、自ら問いを立てる力が必要であると指摘されている（山田 2020）。"],["～が指摘するように、…","山田（2020）が指摘するように、問いを立てる力は大学での学習の基礎である。"]]},
      "Two cautions. First, the content must still be accurate: you may change the words, not the meaning. Second, changing a few endings of the original is not your own words; that is [[patchwriting]], and most universities treat it as a form of plagiarism. Read, close the source, write, then check against it ({{summarising-in-japanese}} in Unit 6 shows the method).",
      {warn:"Avoid the spoken hearsay forms ～らしい and ～とのことだ in reports. They sound like passing on gossip. Use ～という or ～とされる, with the source."}
    ]},
    {h:"Reporting verbs and their tense", body:[
      "Like English [[reporting-verb|reporting verbs]], Japanese ones carry meaning. Choosing one tells the reader what the source did and, sometimes, what you think of it.",
      {table:[["Verb","Meaning","Typical use"],["[述]{の}べる","state","Neutral: the safest default"],["[指摘]{してき}する","point out","A problem or a fact others missed; you treat it as worth noting"],["[主張]{しゅちょう}する","argue, claim","A position others might dispute"],["[論]{ろん}じる","discuss, argue at length","A developed argument"],["[報告]{ほうこく}する","report","Findings of a study or survey"],["[示]{しめ}す","show","Data or results: 調査の結果は～ことを示している"],["[明]{あき}らかにする","make clear, establish","A finding you accept as shown"],["[提唱]{ていしょう}する","propose","A new theory, concept or term"],["[批判]{ひはん}する","criticise","An objection to someone else’s view"]]},
      "Choose carefully. 「山田は～と主張している」 presents a position that could be debated; 「山田は～を明らかにした」 tells the reader you accept the finding. Don’t use 明らかにする for a claim you are about to reject.",
      "**Tense.** The ている form (述べている, 指摘している) is the most common choice for published work: the view is in the text and still stands. The past form (述べた, 明らかにした) is also correct. Writers use it for something done at a particular time, such as a statement in a speech, a finding of a past study, or an earlier view that has since changed. Both forms are grammatical; ている is the safe default for citing literature.",
      {tip:"Never use 言っている or 言った for written sources in a report. 言う sounds like speech; 述べる is the written equivalent."}
    ]},
    {h:"孫引き: quoting what you only saw quoted", body:[
      "**[[magobiki|孫引き]]** (*magobiki*, literally “grandchild citing”) means quoting a source that you only saw quoted in another source, and citing the original as if you had read it. Research Skills calls this a [[secondary-citation|secondary citation]].",
      "It is risky: the second writer may have shortened, mistranslated or misread the original, and you pass the mistake on. Japanese teachers dislike it, so:",
      {ol:["**Find and read the original** if you can. Libraries, CiNii Research or NDL Search (Unit 6, {{finding-japanese-research}}) may have it.","If you truly can’t, **show both sources**. Formats vary; one common way is: 鈴木（1985）は「読書は思考の土台である」と述べている（山田 2020: 34 より[再引用]{さいいんよう}）。","List the source you actually read (山田 2020) in your references. Follow your teacher’s style for whether the original is listed too."]},
      "The same logic applies to Wikipedia and AI answers: they can point you to sources, but cite the source you checked, not the summary. AI tools also invent references that look real ([[hallucinated-citation]]).",
      {key:"Mark quoted words with 「」 and give the page; report ideas in your own words with the source; choose the reporting verb deliberately; read the original instead of 孫引き."}
    ]},
    {h:"Keep your own voice next to the source", body:[
      "After citing, say what the source means for your question. That is where your thinking shows, and it is what marks a report out from a collection of quotations.",
      {table:[["Move","Phrase"],["Agree and build","この指摘は、～という点で重要である。"],["Limit","ただし、この調査は～に限られている。"],["Connect two sources","山田（2020）と佐藤（2021）の結果は、～という点で一致している。"],["Disagree politely","しかし、～を考えると、この主張には検討の余地がある。"]]},
      "Readers should always know who is speaking: the source (～によると, ～と述べている) or you (～と考えられる, ～といえる). Unit 5’s sentence endings ({{sentence-endings-japanese}}) are how you show it."
    ]}
   ],
   try:[
    {id:"e1u7-l3-x1", type:"mcq", q:"The original sentence in 山田（2020, p. 8） is: 学生は「正解」を探しすぎている。 Layla wants to quote it word for word inside her sentence. Which version follows the usual conventions?", options:[
      {t:"山田（2020）は、「学生は『正解』を探しすぎている」（p. 8）と述べている。", ok:true, why:"The quotation is in 「」, the inner 「」 becomes 『』, the final 「。」 is dropped before と, and the page is given."},
      {t:"山田（2020）は、「学生は「正解」を探しすぎている」（p. 8）と述べている。", why:"Brackets inside brackets of the same kind make it hard to see where the quotation ends. The inner pair becomes 『』."},
      {t:"山田（2020）は、『学生は「正解」を探しすぎている』（p. 8）と述べている。", why:"『』 is for titles and for quotations inside quotations, not for the outer marks of a quotation."},
      {t:"山田（2020）は、学生は正解を探しすぎていると述べている。", why:"These are the author’s exact words without quotation marks. Copying wording without 「」 hides that the words are not yours, even with the citation."}
    ]},
    {id:"e1u7-l3-x2", type:"sort", q:"Is each sentence a **直接引用** (direct) or a **間接引用** (indirect)?", buckets:["直接引用","間接引用"], items:[
      {t:"佐藤（2019）は、「地域の図書館は、情報の入り口である」（p. 42）と述べている。", b:0, why:"Exact words in 「」 with a page number."},
      {t:"佐藤（2019）によると、地域の図書館は住民が情報に出会う場所だという。", b:1, why:"The idea in the writer’s words with ～によると…という, no 「」."},
      {t:"地域の図書館の役割は、近年広がっていると指摘されている（佐藤 2019）。", b:1, why:"An idea reported with 指摘されている and a citation in brackets, no exact words."},
      {t:"佐藤（2019）が指摘するように、図書館は住民の学習を支えている。", b:1, why:"～が指摘するように introduces a reported idea, in the writer’s own words."},
      {t:"佐藤（2019）は図書館を「まちの居間」（p. 45）と呼んでいる。", b:0, why:"A short phrase copied exactly in 「」 with its page: still a direct quotation."}
    ]},
    {id:"e1u7-l3-x3", type:"match", q:"Match each reporting verb to what it usually tells the reader.", pairs:[
      ["述べる","The source states something (neutral)","述べる is the neutral default: it reports without judging."],
      ["指摘する","The source points out a problem or overlooked fact","指摘 suggests something worth noticing, often a problem; the writer treats it as valid."],
      ["主張する","The source argues for a position others may dispute","主張 marks a claim as a position, keeping some distance."],
      ["明らかにする","The source has shown something the writer accepts","明らかにした presents a finding as established. Don’t use it for claims you will reject."],
      ["提唱する","The source proposed a new theory or concept","提唱 is for introducing ideas, terms or models."]
    ]},
    {id:"e1u7-l3-x4", type:"mcq", q:"Lucía reads a study that noticed a problem other researchers had missed: survey questions were only in Japanese, so many international residents could not answer. Which sentence reports this best?", options:[
      {t:"李（2022）は、調査票が日本語のみで作成されていたため、多くの外国人住民が回答できなかったと指摘している。", ok:true, why:"指摘している fits a problem that others overlooked, and the sentence is in written style."},
      {t:"李（2022）は、調査票が日本語のみで作成されていたため、多くの外国人住民が回答できなかったと言っている。", why:"言っている sounds like speech. For written sources, use 述べている or a more precise verb."},
      {t:"李（2022）は、調査票が日本語のみで作成されていたため、多くの外国人住民が回答できなかったと感じている。", why:"感じている reports a feeling. The study identified a problem; it didn’t describe an emotion."},
      {t:"李（2022）は、調査票が日本語のみで作成されていたため、多くの外国人住民が回答できなかったと提唱している。", why:"提唱する is for proposing a theory or concept, not for pointing out a problem in a survey."}
    ]},
    {id:"e1u7-l3-x5", type:"spot", q:"Aya has read only 田中（2018）. She found the 鈴木（1975） quotation inside 田中’s book. Tap each sentence with a **citing problem**. Some sentences are fine. (The sources are invented.)", ask:"citing problem", parts:[
      "　",
      {t:"田中（2018）によると、大学生の読書時間は減少傾向にあるという。", flag:false, why:"An indirect quotation with ～によると…という and the source: fine."},
      {t:"また、本を読まない学生は文章力が低いらしい。", flag:true, why:"らしい is spoken hearsay, and there is no source. Either cite where this comes from, with ～という or ～とされる, or leave it out."},
      {t:"鈴木（1975）も「読書は思考の土台である」と述べている。", flag:true, why:"孫引き: Aya never read 鈴木（1975）. She should read the original, or show that she found it in 田中（2018）, e.g. （田中 2018: 34 より再引用）."},
      {t:"一方、佐藤（2021）は、電子書籍やウェブ記事を含めると、学生の読む量はむしろ増えていると指摘している。", flag:false, why:"An indirect quotation with a suitable verb (指摘している) and the source: fine."},
      {t:"この違いは、「読書」の定義の違いによると考えられる。", flag:false, why:"Aya’s own interpretation, clearly marked by ～と考えられる. 「読書」 is in 「」 to show she is discussing the word itself: fine."}
    ]},
    {id:"e1u7-l3-x6", type:"mcq", q:"Grace wants to quote six lines from a book. What do most Japanese writing guides recommend?", options:[
      {t:"Set it apart as a block: blank lines before and after, indented, without 「」, with the source", ok:true, why:"A long quotation is easier to read as a block, and the layout itself shows it is quoted."},
      {t:"Keep it in the paragraph inside 「」, like a short quotation", why:"Six lines in running text make the paragraph hard to read and blur where the quotation ends. Guides recommend a block for long quotations."},
      {t:"Put it in 『』 so it stands out", why:"『』 marks titles and quotations inside quotations, not long quotations."},
      {t:"Rewrite it in your own words but keep it in 「」", why:"「」 means “these are the exact words”. Your own wording must not be in 「」."}
    ]},
    {id:"e1u7-l3-x7", type:"mcq", q:"Which statement about 「山田（2020）は～と述べている」 and 「山田（2020）は～と述べた」 is correct?", options:[
      {t:"Both are grammatical; the ている form is the most common default for citing published work", ok:true, why:"ている presents the view as standing in the text. The past form is also correct, often for a statement at a particular time."},
      {t:"述べた is always wrong in reports", why:"Not so. The past form is used, for example for a past statement or an earlier view."},
      {t:"述べている means 山田 is speaking right now", why:"Here ている describes a state: the statement exists in the text. It doesn’t mean a speech in progress."},
      {t:"Reports must use 述べています", why:"Reports are written in である style, so the plain form 述べている is used, not です・ます."}
    ]}
   ],
   apply:{
    intro:"Use one real academic text in Japanese: a 新書, a textbook chapter, or an article from J-STAGE or a university 紀要 (Unit 6 shows where to find them).",
    tasks:[
     {t:"Quote it three ways", how:[
       "Choose one sentence that says something important.",
       "Write a short direct quotation of it with 「」, the page and the citation.",
       "Write an indirect version with ～によると…という, then another with ～と指摘している or ～と述べている. Check that the meaning is unchanged and the wording is really yours."
     ], write:"Original… 直接引用… 間接引用 1… 間接引用 2…"},
     {t:"Collect reporting verbs", how:[
       "Skim the same text, or another article, for sentences that report other writers.",
       "Copy five reporting verbs with their sentences (述べている, 指摘している, 示している, 明らかにした…).",
       "For each, note what the verb tells you about the writer’s attitude to the source."
     ], write:"Verb… sentence… what it signals…"},
     {t:"Check for 孫引き", how:[
       "Find a place in your text where the author quotes another writer.",
       "Note the original source from the reference list, and check (in your library, CiNii Research or NDL Search) whether you could get the original.",
       "Write how you would cite it if you could not read the original."
     ], write:"Quoted writer… original source… available?… my citation…"}
    ],
    proof:"One sentence quoted directly and reported indirectly twice, five reporting verbs with notes, and a plan for one secondary citation."
   },
   read:[
    {book:"owg", where:"Section 12.6 “Editing Focus: Integrating Sources and Quotations”", note:"Background reading in English on introducing, fitting and commenting on quotations. The Japanese forms differ; the reasons are the same."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u7-l4", title:"References, punctuation and notation", minutes:55,
   hook:{q:"Which pair of punctuation marks might you find in a science paper written in Japanese?", options:["、 and 。","， and ．","， and 。","Any of these, depending on the field and the journal"], answer:3, reveal:"**Any of these.** 、。 is the most common pair in general Japanese writing. Many science and engineering journals use ，． in horizontal text, and some textbooks and offices use ，。. Japan’s 2022 official guidance on writing keeps 「、」 as the main comma but allows 「，」 in horizontal writing, as long as a document doesn’t mix them. That is the theme of this lesson: Japanese referencing and notation vary, so you learn the common patterns, keep one consistently, and let your teacher’s or journal’s rules decide."},
   goals:[
     "Explain why there is no single Japanese referencing standard, and find the rules that apply to you",
     "Write in-text citations and reference entries in a common Japanese author–year pattern, with 『』 and 「」",
     "Order Japanese references by 五十音順 using the reading of the names",
     "Choose a punctuation pair (、。 / ，． / ，。) and use it consistently",
     "Use full-width (全角) and half-width (半角) characters consistently, and know what changes in 縦書き"
   ],
   learn:[
    {h:"No single standard, so find yours", body:[
      {lead:"English-language writers often name a style: APA, MLA, Chicago. Ask Japanese writers which style they use and many will say “the journal’s” or “my department’s”."},
      "There is no single national standard for references in Japanese academic writing. Each journal publishes its own [執筆要領]{しっぴつようりょう} or 投稿規定 (author guidelines), many departments have their own rules, and many fields follow an international style such as APA ([[citation-style|citation styles]] are explained in {{citation-styles}}).",
      "One national guideline that libraries still mention is **SIST 02** (参照文献の書き方), part of the Japan Science and Technology Agency’s SIST standards for science and technology information. Its last edition is from 2007, and the SIST project **ended in fiscal year 2011**; JST says the documents will no longer be updated. Some university libraries still use it as a model, but it is not an active standard.",
      {key:"For a course report, the instructor’s format decides. For a thesis, your department’s rules decide. For a journal, its 執筆要領 decides. Find the rules first, then follow one format consistently."},
      "Japanese reports usually end with a list headed **[[sankou-bunken|参考文献]]**（さんこうぶんけん, *sankō bunken*）. Some teachers distinguish **[[inyou-bunken|引用文献]]**（いんようぶんけん; works you cited in the text) from 参考文献 (works you consulted). Others use 参考文献 for everything. Whatever the heading, every source you cite in the text must be in the list, and the details must match."
    ]},
    {h:"Citing in the text", body:[
      "Most Japanese reports in the humanities and social sciences use an **author–year** system ([[author-date]]), with the author’s family name only:",
      {table:[["Situation","Common forms"],["Author in your sentence","山田（2020）は、～と述べている。"],["Author in brackets","～と指摘されている（山田 2020）。"],["With a page","（山田 2020: 45） or （山田 2020, p. 45）"],["Two authors","山田・佐藤（2019）"],["Three or more (in many styles)","山田ほか（2018）"],["Non-Japanese author","Smith（2019） or スミス（2019）, as the list has it"]]},
      "In Japanese, brackets around the year are usually full-width （）, and ほか replaces the English “et al.” ([[et-al]]). Sciences and engineering often use **numbered** citations instead: a number in brackets or superscript after the sentence, and a list in order of first citation.",
      {ex:"…と報告されている[3]。\n…と報告されている3)。", label:"Two numbered forms you may see in science papers"}
    ]},
    {h:"Reference entries: one common pattern", body:[
      "Here is one common pattern in Japanese humanities and social sciences. Its key marks: 『』 for books and journal names, 「」 for articles and chapters. (The works are invented.)",
      {table:[["Type","Example entry"],["Book","山田花子（2020）『大学で学ぶということ』〇〇出版。"],["Journal article","佐藤健（2021）「大学生の学習時間とアルバイト」『〇〇大学教育研究紀要』第12号、45–60頁。"],["Chapter in an edited book","田中一郎（2019）「地域の図書館の役割」鈴木明編『学びの場を考える』〇〇書房、23–41頁。"],["Web page","〇〇市（2024）「外国人住民のための生活ガイド」https://www.example.jp/guide（2026年10月1日閲覧）"]]},
      "Look at what is fixed and what varies. Fixed in almost every Japanese style: author, year, title, where it appeared (publisher, or journal with volume, issue and pages), and for web pages the URL with the date you viewed it ([閲覧日]{えつらんび} or 参照日). What varies: whether the year goes in brackets or at the end, commas or full stops between parts, 頁 or pp., and whether 『』「」 are used at all.",
      "For comparison, entries in the style of SIST 02 put the parts in a fixed order separated by full stops and commas, roughly like this (check the guide itself before using it):",
      {ex:"山田花子. 大学で学ぶということ. 〇〇出版, 2020, 210p.\n佐藤健. 大学生の学習時間とアルバイト. 〇〇大学教育研究紀要. 2021, no.12, p.45-60.", label:"SIST 02-style entries (approximate)", mono:true},
      "Sources in other languages are usually written in their own conventions (for example an English book in APA form, with half-width punctuation), and Japanese books in Japanese conventions.",
      {tip:"A reference manager such as Zotero can produce Japanese-style references with the right citation style file, but check every entry: names, readings and 『』 often come out wrong. Research Skills covers reference managers in {{reference-managers}}."}
    ]},
    {h:"Ordering the list: 五十音順 or alphabetical", body:[
      "How are the entries ordered? Three systems are common, and your guidelines say which:",
      {list:["**Japanese works in [五十音]{ごじゅうおん}[順]{じゅん}** (the あいうえお order of the authors’ names, by *reading*), followed by works in other languages in alphabetical order. Common in the humanities and social sciences.","**Everything in alphabetical order**, with Japanese names placed by their romanised spelling.","**In order of citation**, numbered, in many science and engineering fields."]},
      "五十音順 goes by how a name is **read**, not how it is written: [伊藤]{いとう} (い) comes before [小川]{おがわ} (お), and [長谷川]{はせがわ} (は) comes after [中村]{なかむら} (な), even though 長 can also be read ちょう. Names with the same kanji can be read differently (角田, for example, is read かくた by some families and つのだ by others), so check the reading in the book’s colophon ([奥付]{おくづけ}), on the journal’s site, or in a library catalogue such as NDL Search ({{finding-japanese-research}}).",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">五十音順 sorts by reading</text><rect class="d-panel" x="20" y="34" width="300" height="250" rx="8"/><text class="s" x="40" y="58">あ い う え お</text><text class="s" x="40" y="76">か き く け こ ……</text><rect class="d-lup" x="36" y="92" width="268" height="30" rx="4"/><text x="50" y="112">伊藤（いとう）</text><text class="s" x="290" y="112" text-anchor="end">い</text><rect class="d-lup" x="36" y="128" width="268" height="30" rx="4"/><text x="50" y="148">小川（おがわ）</text><text class="s" x="290" y="148" text-anchor="end">お</text><rect class="d-lup" x="36" y="164" width="268" height="30" rx="4"/><text x="50" y="184">中村（なかむら）</text><text class="s" x="290" y="184" text-anchor="end">な</text><rect class="d-gold" x="36" y="200" width="268" height="30" rx="4" stroke-width="2"/><text x="50" y="220">長谷川（はせがわ）</text><text class="s" x="290" y="220" text-anchor="end">は</text><rect class="d-lup" x="36" y="236" width="268" height="30" rx="4"/><text x="50" y="256">渡辺（わたなべ）</text><text class="s" x="290" y="256" text-anchor="end">わ</text></svg>', alt:"A list sorted in 五十音順: 伊藤 (いとう), 小川 (おがわ), 中村 (なかむら), 長谷川 (はせがわ), 渡辺 (わたなべ), with the first kana of each reading shown on the right. 長谷川 is highlighted: it sorts under は by its reading.", cap:"Sort by the kana reading of the family name, then the given name."}
    ]},
    {h:"Punctuation: 、。 ，． and ，。", body:[
      "Japanese has two main punctuation marks: the **[[kuten|句点]]**（くてん, *kuten*） 「。」, which ends a sentence, and the **[[touten|読点]]**（とうてん, *tōten*） 「、」, which marks a pause inside it. Together they are 句読点 (*kutōten*). In horizontal writing, some writers replace them with the comma 「，」 and full stop 「．」.",
      {table:[["Pair","Where you often see it"],["、。","Most general writing, newspapers, humanities and social sciences"],["，．","Many science and engineering papers and journals"],["，。","Some textbooks and official documents (the older official guideline, 公用文作成の要領 of 1952, said to use 「，」 as the comma in horizontal writing)"]]},
      "Japan’s current official guidance, **公用文作成の考え方** (Council for Cultural Affairs, 2022), says: use 「。」 and 「、」 as the rule, but in horizontal writing 「，」 may be used for the comma, and **a document should not mix the two**. It adds that 「．」 is not used as a full stop except where academic or specialist needs call for it, and that text in Western languages uses 「,」 and 「.」. This is guidance for government writing, but it reflects wider practice.",
      {key:"Pick one pair (the one your teacher, department or journal uses) and use it everywhere in the document, including captions and notes."},
      "Other marks ([[kakko|括弧]] and more) you will use: 「」 for quotations and article titles; 『』 for book and journal titles and for quotations inside quotations; full-width （） for brackets in Japanese text; 「・」 (中黒, *nakaguro*) to separate parallel nouns or the parts of a foreign name (ジョン・スミス); 「～」 for ranges (10～20人). Japanese text has no spaces between words, and none after 「、」 or 「。」.",
      {tip:"Most Japanese input methods let you choose which punctuation pair your keyboard types. Look for a setting named 句読点 in your keyboard or IME settings, and set it once instead of fixing every mark by hand."}
    ]},
    {h:"Full-width and half-width: 全角 and 半角", body:[
      "Computers draw Japanese characters in squares of equal width: **[[zenkaku-hankaku|全角]]**（ぜんかく, *zenkaku*, full-width）. Latin letters and digits normally take half that width: **[半角]{はんかく}** (*hankaku*, half-width). Many characters exist in both forms: ２０２６ and 2026, ＡＩ and AI.",
      {fig:'<svg viewBox="0 0 340 210"><text x="170" y="20" text-anchor="middle">全角 vs 半角</text><text class="s" x="20" y="50">全角 (each in a full square)</text><rect class="d-lup" x="20" y="58" width="30" height="30" stroke-width="1.5"/><rect class="d-lup" x="50" y="58" width="30" height="30" stroke-width="1.5"/><rect class="d-lup" x="80" y="58" width="30" height="30" stroke-width="1.5"/><rect class="d-lup" x="110" y="58" width="30" height="30" stroke-width="1.5"/><rect class="d-lup" x="140" y="58" width="30" height="30" stroke-width="1.5"/><text x="35" y="78" text-anchor="middle">２</text><text x="65" y="78" text-anchor="middle">０</text><text x="95" y="78" text-anchor="middle">２</text><text x="125" y="78" text-anchor="middle">６</text><text x="155" y="78" text-anchor="middle">年</text><text class="s" x="20" y="120">半角 digits (half a square each)</text><rect class="d-sage" x="20" y="128" width="15" height="30" stroke-width="1.5"/><rect class="d-sage" x="35" y="128" width="15" height="30" stroke-width="1.5"/><rect class="d-sage" x="50" y="128" width="15" height="30" stroke-width="1.5"/><rect class="d-sage" x="65" y="128" width="15" height="30" stroke-width="1.5"/><rect class="d-lup" x="80" y="128" width="30" height="30" stroke-width="1.5"/><text x="27.5" y="148" text-anchor="middle">2</text><text x="42.5" y="148" text-anchor="middle">0</text><text x="57.5" y="148" text-anchor="middle">2</text><text x="72.5" y="148" text-anchor="middle">6</text><text x="95" y="148" text-anchor="middle">年</text><text class="s" x="20" y="186">Choose one for digits and keep it.</text><text class="s" x="20" y="202">Kanji, kana and 、。 are always 全角.</text></svg>', alt:"Two rows of boxes. Top: 2026年 written with full-width digits, each digit in a full square. Bottom: the same with half-width digits, each digit in half a square, and 年 in a full square. Notes: choose one width for digits and keep it; kanji, kana and 、。 are always full-width.", cap:"Full-width digits look like kanji-sized blocks; half-width digits are narrow."},
      "The rules most guides agree on:",
      {list:["**Kanji, kana and Japanese punctuation** are always full-width.","**Katakana** is always full-width. Half-width katakana (ﾚﾎﾟｰﾄ) is for old systems, not reports.","**Digits and Latin letters**: many guides and journals prefer half-width (2026年, 45%, SNS), and some prefer full-width, especially for single digits. Either way, **be consistent**.","**Brackets** in Japanese text are usually full-width （）."]},
      "公用文作成の考え方 (2022) also sets no fixed rule for full-width or half-width digits but asks writers to be consistent within a document, notes that mixing them can look uneven, and recommends half-width digits for data and amounts, partly because computers may not read full-width digits as numbers.",
      {ex:"✗ ２０２６年の調査では、45％の学生が…\n✓ 2026年の調査では、45%の学生が…", label:"Mixed widths, then consistent half-width"}
    ]},
    {h:"縦書き and 横書き", body:[
      "Japanese can be written horizontally (**[横書]{よこが}き**, *yokogaki*, left to right) or vertically (**[縦書]{たてが}き**, *tategaki*, top to bottom, columns right to left). Most university reports today are typed 横書き on A4. 縦書き is still used in some humanities fields, for some handwritten essays and exams, and in many books and newspapers.",
      {table:[["","横書き","縦書き"],["Numbers","Arabic digits: 2026年、45%","Usually kanji numerals: 二〇二六年、四五パーセント or 四十五パーセント"],["Comma and full stop","、。 or ，． or ，。","Always 、。"],["Brackets","「」 （）","Rotated forms, drawn by the font: ﹁﹂ ︵︶"]]},
      "When you choose vertical layout in a word processor, the font draws brackets and punctuation in their vertical forms for you, but digits are not converted: in 縦書き, type kanji numerals yourself.",
      {key:"References and notation vary by field, journal and teacher. Learn the common patterns, find your rules, and above all be consistent: one citation format, one punctuation pair, one width for digits."}
    ]}
   ],
   try:[
    {id:"e1u7-l4-x1", type:"order", q:"Put these authors into **五十音順** for a reference list. (Readings are shown above the names.)", items:[
      {t:"[伊藤]{いとう}", why:"い comes first among these: あ、い、う、え、お."},
      {t:"[小川]{おがわ}", why:"お comes after い."},
      {t:"[木村]{きむら}", why:"き is in the か row, after the あ row."},
      {t:"[中村]{なかむら}", why:"な comes after the か, さ and た rows."},
      {t:"[長谷川]{はせがわ}", why:"Sorted by its reading は, after な. Sorting by the kanji 長 (ちょう) would wrongly put it in the た row."},
      {t:"[渡辺]{わたなべ}", why:"わ is the last row of the 五十音."}
    ]},
    {id:"e1u7-l4-x2", type:"mcq", q:"In the common Japanese humanities and social-science pattern, which reference entry uses the brackets correctly? (The works are invented.)", options:[
      {t:"佐藤健（2021）「大学生の学習時間とアルバイト」『〇〇大学教育研究紀要』第12号、45–60頁。", ok:true, why:"The article title is in 「」 and the journal name in 『』: articles in 「」, books and journals in 『』."},
      {t:"佐藤健（2021）『大学生の学習時間とアルバイト』「〇〇大学教育研究紀要」第12号、45–60頁。", why:"The marks are swapped: the journal is the larger publication and takes 『』, the article inside it takes 「」."},
      {t:"佐藤健（2021）『大学生の学習時間とアルバイト』『〇〇大学教育研究紀要』第12号、45–60頁。", why:"An article is not a book. With 『』 on both, the reader can’t tell the article from the journal."},
      {t:"佐藤健（2021）“大学生の学習時間とアルバイト”〇〇大学教育研究紀要 第12号、45–60頁。", why:"English quotation marks are not used for Japanese titles, and the journal name is unmarked."}
    ]},
    {id:"e1u7-l4-x3", type:"sort", q:"Hana is checking her report. Is each choice **fine** (consistent with common rules) or a **problem**?", buckets:["Fine","Problem"], items:[
      {t:"「、」and「。」 throughout the report", b:0, why:"The most common pair, used consistently."},
      {t:"「，」and「．」 throughout the report, as her science department asks", b:0, why:"Common in science fields; fine when used consistently and when the department asks for it."},
      {t:"「、」in chapter 1 and「，」in chapter 2", b:1, why:"Mixing commas within one document is exactly what guides warn against. Pick one."},
      {t:"Half-width digits throughout: 2026年, 45%", b:0, why:"Consistent half-width digits, the choice many guides and journals prefer."},
      {t:"２０２６年 in the text but 2026 in the tables", b:1, why:"Mixed widths for digits. Use one width everywhere, including tables and captions."},
      {t:"Half-width katakana in a heading: ｱﾝｹｰﾄ調査", b:1, why:"Half-width katakana is not used in reports. Write アンケート in full-width katakana."}
    ]},
    {id:"e1u7-l4-x4", type:"mcq", q:"What does 公用文作成の考え方 (2022) say about 「，」?", options:[
      {t:"「、」 is the rule, but 「，」 may be used in horizontal writing, without mixing the two in one document", ok:true, why:"That is the guidance: 「、」 as the rule, 「，」 allowed in horizontal writing, and no mixing within a document."},
      {t:"「，」 must be used in all horizontal writing", why:"That is closer to the older guideline, 公用文作成の要領 (1952), which said to use 「，」 in horizontal writing. The 2022 guidance makes 「、」 the rule and 「，」 an option."},
      {t:"「，」 is no longer allowed in any official writing", why:"The 2022 guidance explicitly allows 「，」 in horizontal writing."},
      {t:"「，」 is for vertical writing only", why:"The reverse: vertical writing uses 「、」. The option of 「，」 is for horizontal writing."}
    ]},
    {id:"e1u7-l4-x5", type:"match", q:"Match each mark to its main use in Japanese academic writing.", pairs:[
      ["「」","Quotations, and titles of articles or chapters","「」 is the basic quotation mark, also used for shorter works such as articles."],
      ["『』","Book and journal titles, and quotations inside quotations","『』 marks whole publications and replaces 「」 inside a quotation."],
      ["（）","Notes and in-text citations such as （山田 2020）","Full-width round brackets hold supplementary information and citations."],
      ["・","Separating parallel nouns or parts of a foreign name","中黒 separates items (日本・韓国・中国) and names (ジョン・スミス)."]
    ]},
    {id:"e1u7-l4-x6", type:"mcq", q:"Raúl is writing a 横書き report and has to give a statistic. Which sentence follows the common advice for numbers?", options:[
      {t:"2023年の調査では、回答者の38%がオンライン授業を希望した。", ok:true, why:"Half-width Arabic digits used consistently: the usual choice for data in horizontal writing."},
      {t:"２０２３年の調査では、回答者の38%がオンライン授業を希望した。", why:"The year is full-width and the percentage half-width. Mixed widths in one sentence look uneven and break consistency."},
      {t:"二〇二三年の調査では、回答者の三十八パーセントがオンライン授業を希望した。", why:"Kanji numerals are the usual choice in 縦書き. In horizontal writing, statistics are normally in Arabic digits."},
      {t:"2023年の調査では、回答者の三十八%がオンライン授業を希望した。", why:"Kanji numerals mixed with Arabic digits and a % sign: inconsistent and hard to read."}
    ]},
    {id:"e1u7-l4-x7", type:"spot", q:"Kofi’s teacher asked for the common humanities pattern with 、。 throughout. Tap each part of his reference list that **breaks the pattern or is inconsistent**. Some parts are fine. (The works are invented.)", ask:"problem", parts:[
      {t:"山田花子（2020）『大学で学ぶということ』〇〇出版。", flag:false, why:"Author, year in brackets, book title in 『』, publisher, 。: fine."},
      "\n",
      {t:"佐藤健（2021）「大学生の学習時間とアルバイト」『〇〇大学教育研究紀要』第12号，45–60頁．", flag:true, why:"This entry uses ，． while the rest uses 、。. Use one pair throughout, here 、。."},
      "\n",
      {t:"田中一郎『地域の図書館とまちづくり』〇〇書房。", flag:true, why:"The year is missing. Every entry needs one, or the reader can’t match it to the citation in the text."},
      "\n",
      {t:"〇〇市（2024）「外国人住民のための生活ガイド」https://www.example.jp/guide（2026年10月1日閲覧）", flag:false, why:"A web page with author, year, title, URL and the date viewed: fine."}
    ]}
   ],
   apply:{
    intro:"Find the rules that apply to you, then practise them on real sources.",
    tasks:[
     {t:"Find your rules", how:[
       "Look for your course’s or department’s guidelines on reports or theses (often in a 履修の手引き, a writing guide on the university site, or a thesis template).",
       "If you are writing for a journal, find its 執筆要領 or 投稿規定.",
       "Note: the citation format, the reference-list order, the punctuation pair, and anything said about digits."
     ], write:"Where I found the rules… citation format… order… punctuation… digits…"},
     {t:"Write five reference entries", how:[
       "Choose five real sources you might use: at least one book, one journal article and one web page in Japanese.",
       "Write each one in your rules’ format (or the common pattern in this lesson).",
       "Check each author’s reading in the 奥付 or a library catalogue, then put the list in 五十音順."
     ], write:"Entry 1… Entry 2… Entry 3… Entry 4… Entry 5… order…"},
     {t:"Set up your keyboard and check a draft", how:[
       "In your Japanese input settings, find the 句読点 option and set the pair you need.",
       "In a draft (yours or the sample from Lesson 2), search for 「，」 and 「、」 to find any mixing.",
       "Search for full-width digits (０ to ９) and make the digits consistent."
     ], write:"Setting changed… marks found… digits fixed…"}
    ],
    proof:"A note of the rules that apply to you, five reference entries in one consistent format and 五十音順, and a checked draft."
   },
   read:[
    {book:"koyobun", where:"Part Ⅰ「表記の原則」, item 4「数字の使い方」 and item 5「符号の使い方」(1)「句読点や括弧の使い方」", note:"The official guidance on 「、」 and 「，」, brackets, and full-width and half-width digits, with explanations. In Japanese."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u7-l5", title:"原稿用紙, honesty and the final check", minutes:55,
   hook:{q:"You are writing on Japanese [原稿用紙]{げんこうようし} (squared manuscript paper). A 「。」 would fall in the first square of a new line. What do you do?", options:["Write it in the first square anyway","Put it in the last square of the line above, with the last character (or just outside the grid)","Leave that line empty and start the next one","Leave the 「。」 out"], answer:1, reveal:"**Put it with the last character of the line above.** On [原稿用紙]{げんこうようし}, 「、」 and 「。」 never start a line. When one would, it shares the last square with the final character, or sits just outside the grid at the end of that line. Japanese pupils learn this in primary school, and it still matters in handwritten exams and essays at university. This lesson gives the main [原稿用紙]{げんこうようし} rules, then turns to writing honestly: plagiarism in its Japanese forms, AI and translation tools, and a checklist for the final read."},
   goals:[
     "Follow the main 原稿用紙 rules: indents, one character per square, small kana, punctuation at line ends",
     "Count how many squares a sentence takes",
     "Recognise 剽窃 in its common forms, including translating a source without citing it",
     "Use AI and translation tools only as your course allows, disclose them when required, and keep your own voice",
     "Check a draft against a final checklist before submitting"
   ],
   learn:[
    {h:"Where 原稿用紙 still matters", body:[
      {lead:"Typed reports have replaced most handwriting, but squared paper hasn’t disappeared. It is still the page for many exams."},
      "**[[genkou-youshi-term|原稿用紙]]**（げんこうようし, *genkō yōshi*） is paper printed with a grid of squares, one character per square. The usual sheet is **400字詰め**: 20 squares × 20 lines. You may meet it in:",
      {list:["**[小論文]{しょうろんぶん}** (*shōronbun*, short essays) in entrance exams, including some for international students and graduate schools","**[[ronbun-shiken|論文試験]]** (essay exams), for example in some course exams or public-service exams","handwritten essays and assignments in some classes","exam answer sheets that are printed as grids, even when they don’t say 原稿用紙"]},
      "Because each square holds one character, a 400-character limit on 原稿用紙 is easy to see at a glance, and markers notice layout mistakes at once. The rules below are the ones standard guides agree on. Some details (where to write the title and name, how to number) depend on the sheet’s own instructions, which always come first."
    ]},
    {h:"The main rules", body:[
      {ol:["**One character, one square.** This includes kana, kanji, and the long-vowel mark 「ー」.","**Small kana take a full square**: っ, ゃ, ゅ, ょ and small katakana such as ァ. In 横書き they sit in the lower left of the square; in 縦書き, in the upper right.","**Punctuation and brackets take a square each**: the marks 、 and 。, and each opening or closing bracket such as 「 and 」.","**Never start a line with 「、」 or 「。」** (or a closing bracket). Put it in the last square together with the final character, or just outside the grid at the end of the line.","**Indent one square** at the very start of the text and at the start of every paragraph (一字下げ).","**When a quotation ends a sentence**, many guides write the 。 and the closing bracket together in one square: 。」","**「……」 and 「――」 take two squares** each.","**Numbers**: in 縦書き, use kanji numerals (二〇二六年). In 横書き, Arabic digits are used, and many guides put two digits in one square."]},
      "Title and name: a common layout puts the title on the first line, starting a few squares in, and the name on the second line, ending one square from the bottom. But exam sheets often have separate boxes for names, and essays for a class may need no title at all. Follow the sheet.",
      {fig:'<svg viewBox="0 0 340 200"><text x="170" y="18" text-anchor="middle">Two lines of 原稿用紙 (横書き, 20 squares)</text><rect class="d-lup" x="20" y="34" width="15" height="15"/><g class="d-ink" stroke-width="1"><rect x="20" y="34" width="300" height="15"/><rect x="20" y="64" width="300" height="15"/></g><path class="d-ink" stroke-width="0.6" d="M35 34V49M50 34V49M65 34V49M80 34V49M95 34V49M110 34V49M125 34V49M140 34V49M155 34V49M170 34V49M185 34V49M200 34V49M215 34V49M230 34V49M245 34V49M260 34V49M275 34V49M290 34V49M305 34V49M35 64V79M50 64V79M65 64V79M80 64V79M95 64V79M110 64V79M125 64V79M140 64V79M155 64V79M170 64V79M185 64V79M200 64V79M215 64V79M230 64V79M245 64V79M260 64V79M275 64V79M290 64V79M305 64V79"/><text class="s" x="42.5" y="46" text-anchor="middle">近</text><text class="s" x="57.5" y="46" text-anchor="middle">年</text><text class="s" x="72.5" y="46" text-anchor="middle">、</text><text class="s" x="87.5" y="46" text-anchor="middle">オ</text><text class="s" x="102.5" y="46" text-anchor="middle">ン</text><text class="s" x="117.5" y="46" text-anchor="middle">ラ</text><text class="s" x="132.5" y="46" text-anchor="middle">イ</text><text class="s" x="147.5" y="46" text-anchor="middle">ン</text><text class="s" x="162.5" y="46" text-anchor="middle">授</text><text class="s" x="177.5" y="46" text-anchor="middle">業</text><text class="s" x="192.5" y="46" text-anchor="middle">を</text><text class="s" x="207.5" y="46" text-anchor="middle">受</text><text class="s" x="222.5" y="46" text-anchor="middle">け</text><text class="s" x="237.5" y="46" text-anchor="middle">る</text><text class="s" x="252.5" y="46" text-anchor="middle">人</text><text class="s" x="267.5" y="46" text-anchor="middle">が</text><text class="s" x="282.5" y="46" text-anchor="middle">増</text><text class="s" x="297.5" y="46" text-anchor="middle">え</text><text class="s" x="312.5" y="46" text-anchor="middle">た</text><text class="s" x="327" y="48" text-anchor="middle">。</text><text class="s" x="27.5" y="76" text-anchor="middle">そ</text><text class="s" x="42.5" y="76" text-anchor="middle">の</text><text class="s" x="57.5" y="76" text-anchor="middle">多</text><text class="s" x="72.5" y="76" text-anchor="middle">く</text><text class="s" x="87.5" y="76" text-anchor="middle">は</text><text class="s" x="102.5" y="76" text-anchor="middle">、</text><text class="s" x="117.5" y="76" text-anchor="middle">通</text><text class="s" x="132.5" y="76" text-anchor="middle">学</text><text class="s" x="147.5" y="76" text-anchor="middle">の</text><text class="s" x="162.5" y="76" text-anchor="middle">時</text><text class="s" x="177.5" y="76" text-anchor="middle">間</text><text class="s" x="192.5" y="76" text-anchor="middle">を</text><text class="s" x="207.5" y="76" text-anchor="middle">減</text><text class="s" x="222.5" y="76" text-anchor="middle">ら</text><text class="s" x="237.5" y="76" text-anchor="middle">し</text><text class="s" x="252.5" y="76" text-anchor="middle">た</text><text class="s" x="267.5" y="76" text-anchor="middle">い</text><text class="s" x="282.5" y="76" text-anchor="middle">と</text><text class="s" x="297.5" y="76" text-anchor="middle">答</text><text class="s" x="312.5" y="76" text-anchor="middle">え</text><path class="d-ink" d="M27 104 V52" stroke-width="1.5"/><text class="s" x="20" y="120">① first square blank: paragraph indent</text><path class="d-ink" d="M327 140 V54" stroke-width="1.5"/><text class="s" x="320" y="156" text-anchor="end">② 「。」 would start line 2, so it</text><text class="s" x="320" y="172" text-anchor="end">goes at the end of line 1 instead</text><text class="s" x="20" y="194">Line 2 continues the paragraph: no indent.</text></svg>', alt:"Two rows of 20 squares. Row 1: a blank first square (the paragraph indent), then 近年、オンライン授業を受ける人が増えた, with 「。」 written just outside the last square because it would otherwise start row 2. Row 2 continues the same paragraph without an indent: その多くは、通学の時間を減らしたいと答え. Labels: the blank first square is the paragraph indent; the 「。」 that would start a line goes at the end of the previous line.", cap:"The 「。」 after 増えた would fall in the first square of line 2, so it goes at the end of line 1."}
    ]},
    {h:"Counting squares", body:[
      "Because everything takes a square, you can count exactly. Take this paragraph opening:",
      {ex:"　調査では、留学生の約半数が「日本語の授業が役に立った」と答えた。", label:"How many squares?"},
      "Count: 1 for the indent, then every character, including the comma 、, both brackets 「 and 」, the small っ and the final 。. The total is 33 squares: the whole first line of 20, and 13 squares of the second. (Line 2 starts with 業, so no punctuation needs to move.)",
      "In exams, the limit usually means the squares you use, including punctuation and indents. Many guides advise filling at least about eight tenths of the space when a limit is given as 「～字以内」, but follow your teacher’s advice. Never go past the last square of the limit."
    ]},
    {h:"剽窃: plagiarism in its Japanese forms", body:[
      "**[[hyousetsu|剽窃]]**（ひょうせつ, *hyōsetsu*） and **[盗用]{とうよう}** (*tōyō*) mean presenting other people’s words or ideas as your own. Research Skills explains plagiarism in general: {{plagiarism}} and [[plagiarism-term]]. In Japanese universities you will meet it in these forms:",
      {table:[["Form","What it looks like"],["コピペ (copy-paste)","Pasting sentences from websites or papers without 「」 and a source"],["Translation without citing","Translating a passage from an English (or any) source into Japanese and presenting it as your own"],["Changing only the endings","Swapping です for である or a few words, keeping the original structure ([[patchwriting]])"],["Reusing your own work","Submitting a report you wrote for another course without permission ([[self-plagiarism]], 自己剽窃)"],["Someone else writes it","A friend, paid service or AI writes the report and you submit it as yours"]]},
      "Translation deserves a warning because it feels like your own work: you chose the words. But the ideas, structure and evidence are someone else’s, so a translated passage needs a citation exactly like a quotation or paraphrase. Universities in Japan treat plagiarism as misconduct ([不正行為]{ふせいこうい}); consequences depend on the university and range from failing the assignment to, at some universities, losing the credits for every course taken that term, or suspension (停学).",
      "Facts that are general knowledge (日本の首都は東京である) need no citation ([[common-knowledge]]). Specific figures, findings, arguments and wording do."
    ]},
    {h:"AI and translation tools, honestly", body:[
      "Generative AI ([生成]{せいせい}AI) and machine translation ([機械]{きかい}[翻訳]{ほんやく}) are everywhere, and universities’ rules differ. Some courses forbid them for assignments, some allow certain uses if you say so, and some encourage them for specific tasks. Many universities now publish a policy, and individual teachers may set stricter rules. Research Skills covers research policies in {{ai-research-policies}}, and Academic English covers language tools in {{ai-language-tools}}.",
      "Whatever the rules, four principles hold:",
      {ol:["**Follow your course’s rules**, and ask if they are unclear. Not knowing the rule is rarely accepted as an excuse.","**Never submit machine-translated or AI-generated text as your own writing.** Writing in your first language and translating it with a tool is still not your Japanese writing, and in most courses it is treated as dishonest unless explicitly allowed.","**Check everything a tool tells you.** AI tools invent sources ([[hallucinated-citation]]) and make errors of register: a translation may mix です・ます and である, or use 話し言葉 in a report.","**Keep your own voice.** Simple, correct Japanese that is yours is better than polished Japanese that isn’t. Teachers know learners’ writing; they expect, and value, your own words."]},
      "If your course allows a tool and asks you to say how you used it ([[ai-disclosure]]), a short note at the end is common. For example:",
      {ex:"本レポートの作成にあたり、表現の確認に生成AI（ツール名）を使用した。内容および最終的な文章は、すべて筆者が確認し、修正した。", label:"A disclosure note (use only if your course allows the tool and asks for disclosure)"},
      {tip:"Uses that many courses allow, if any are allowed: looking up a word, checking whether a phrase is 話し言葉, or asking for example sentences that you then check in a dictionary. Uses that are almost never allowed: having the tool write or rewrite paragraphs you submit."}
    ]},
    {h:"The final check: 提出前チェックリスト", body:[
      "Before you submit, read the whole report once more, ideally the next day and aloud. Japanese first-year students are taught to do this too, and everyone finds something. Check one thing at a time:",
      {table:[["Area","Check"],["Question and claim","Is the 問い clear in the はじめに? Does the conclusion answer it?"],["Paragraphs","One topic each? 中心文 first? 一字下げ? New lines only between paragraphs?"],["Style","である style throughout ([[dearu-tai|である体]])? No 話し言葉 ([[hanashikotoba|話し言葉]])? Few or no ～と思う?"],["Sources","Every quotation in 「」 with a page? Every idea cited? No 孫引き?"],["References","Does every citation appear in the list, and every entry in the text? One format? Right order?"],["Notation","One punctuation pair? Consistent 全角・半角? Typos and kanji conversion errors?"],["Conditions","字数, format, cover or header (授業名, 学籍番号, 氏名), page numbers, file name, deadline"],["Tools","Used only as allowed, and disclosed if required?"]]},
      "Conversion errors deserve their own check: Japanese input converts kana to kanji, and the wrong kanji (変換ミス, such as 以外 for 意外, or 機会 for 機械) passes every spell-checker. Reading aloud slowly catches many of them. Research Skills and Academic English give general [[proofreading]] advice in {{editing-proofreading}}.",
      {key:"Write by the rules the sheet or course sets, cite everything you take, use tools only as allowed and say so, keep your own voice, and check one thing at a time before you submit."}
    ]}
   ],
   try:[
    {id:"e1u7-l5-x1", type:"match", q:"Match each item on 原稿用紙 to the rule for it.", pairs:[
      ["The first line of a paragraph","Leave the first square blank","一字下げ applies on 原稿用紙 just as in typed reports."],
      ["A small 「っ」","Give it a square of its own","Small kana take a full square, placed in a corner of it."],
      ["A 「。」 that would start a new line","Put it at the end of the line above","Punctuation never starts a line; it goes with the last character of the previous line, or just outside the grid."],
      ["「……」","Use two squares","The ellipsis (and the dash 「――」) is written across two squares."]
    ]},
    {id:"e1u7-l5-x2", type:"number", q:"On 400字詰め原稿用紙 (20 squares per line), how many squares does this paragraph opening use, including the one-square indent at the start?\n\n　調査では、留学生の約半数が「日本語の授業が役に立った」と答えた。", answer:33, tol:0, unit:"squares", why:"1 square for the indent, plus 32 characters, each in its own square: 調・査・で・は・、・留・学・生・の・約・半・数・が・「・日・本・語・の・授・業・が・役・に・立・っ・た・」・と・答・え・た・。. That is 33. Line 2 starts with 業, so no punctuation has to move.", wrongs:[
      {v:32, tol:0, why:"One short: either the indent was left out, or the small 「っ」 wasn’t counted. Both take a full square."},
      {v:31, tol:0, why:"Two short: most likely the brackets 「 and 」 weren’t counted (or both the indent and the small 「っ」 were missed). Each bracket, the indent and small kana all take a full square."},
      {v:29, tol:0, why:"Four short: punctuation and brackets (、「」。) weren’t counted. On 原稿用紙 every mark takes a square."}
    ]},
    {id:"e1u7-l5-x3", type:"sort", q:"Is each action **honest practice** or **plagiarism or dishonest**, in a course that has not allowed AI writing?", buckets:["Honest practice","Plagiarism or dishonest"], items:[
      {t:"Quoting one sentence in 「」 with the author, year and page", b:0, why:"A correctly marked and cited direct quotation."},
      {t:"Translating three sentences from an English article into Japanese with no citation", b:1, why:"The ideas and evidence are someone else’s. A translation needs a citation, like any paraphrase."},
      {t:"Summarising an article in your own words, with its source", b:0, why:"An indirect quotation with the source: the normal way to use sources."},
      {t:"Taking a classmate’s report and changing the sentence endings", b:1, why:"Changing endings keeps someone else’s words and structure: plagiarism, and possibly collusion."},
      {t:"Stating 「日本の首都は東京である」 without a source", b:0, why:"General knowledge that any reader can check needs no citation."},
      {t:"Asking an AI tool to write the 考察 section and submitting it as written", b:1, why:"Submitting generated text as your own writing is dishonest, especially when the course hasn’t allowed it."}
    ]},
    {id:"e1u7-l5-x4", type:"mcq", q:"Sione’s course policy says: “AI tools may be used to check language, not to write content. Say how you used them.” Which plan fits the policy?", options:[
      {t:"Write the report himself, ask an AI tool to flag 話し言葉, check each suggestion in a dictionary, and add a short note saying how he used it", ok:true, why:"Language checking only, with his own judgement on each suggestion and the disclosure the policy asks for."},
      {t:"Ask the tool to write the report in English, then translate it into Japanese himself", why:"The content was written by the tool. Translating it doesn’t make it his work, and the policy forbids AI-written content."},
      {t:"Use the tool to check language, but leave out the note because the changes were small", why:"The policy asks for disclosure. Small or not, the use should be stated."},
      {t:"Ask the tool for a reference list on his topic and copy it into his report", why:"That is content, not language checking, and AI tools often invent references that don’t exist. Find and read real sources."}
    ]},
    {id:"e1u7-l5-x5", type:"spot", q:"Maria’s teacher asked for 、。 and である style. Tap each sentence that **needs fixing** before she submits. Some sentences are fine. (The source is invented.)", ask:"needs fixing", parts:[
      "　",
      {t:"本レポートでは、大学図書館の夜間開館について検討する。", flag:false, why:"Clear aim, である style, 、。: fine."},
      {t:"結論から言うと、夜間開館は必要だと思います。", flag:true, why:"です・ます (思います) in an である-style report, and ～と思う is personal. For example: 結論から述べると、夜間開館は必要であると考えられる。"},
      {t:"第一に、開館時間を延長した後、夜間の利用者数は増加した（中村 2022）。", flag:false, why:"A point with evidence and a citation: fine."},
      {t:"第二に、アルバイトをする学生にとって、夜は貴重な学習時間である．", flag:true, why:"The sentence ends with 「．」 while the rest of the report uses 「。」. Mixed punctuation must be made consistent."},
      {t:"でも、人件費の問題もある。", flag:true, why:"でも is spoken. In a report, use しかし or 一方, and say what the cost problem is."},
      {t:"以上のことから、夜間開館には一定の意義があると考えられる。", flag:false, why:"A cautious conclusion that follows from the points: fine."}
    ]},
    {id:"e1u7-l5-x6", type:"mcq", q:"Dmitri writes his report in Russian, puts it through a translation tool, corrects a few words and submits the Japanese version. His course hasn’t said anything about translation tools. What is the best advice?", options:[
      {t:"Ask the teacher first: in most courses, submitting machine-translated text as your own Japanese writing is not acceptable", ok:true, why:"When rules are unclear, ask. The usual expectation is that a Japanese report is written in Japanese by the student, so a translated text is not his own writing."},
      {t:"It’s fine, because the ideas are his own", why:"His ideas, yes, but the Japanese text is the tool’s. Courses that assess Japanese writing assess the student’s own Japanese."},
      {t:"It’s fine if he corrects enough words to change the style", why:"Editing a machine translation doesn’t make it his writing, and the problem isn’t the number of changes."},
      {t:"It’s fine as long as he uses である style", why:"Style doesn’t decide honesty. The question is who wrote the text, and what the course allows."}
    ]},
    {id:"e1u7-l5-x7", type:"mcq", q:"Which final-check habit catches **kanji conversion errors** (such as 以外 typed for 意外) best?", options:[
      {t:"Reading the report aloud slowly, ideally the next day", ok:true, why:"Wrong kanji with the right reading pass spell-checkers, but reading slowly for meaning makes them stand out, especially after a break."},
      {t:"Running a spell-checker once", why:"以外 and 意外 are both real words, so a spell-checker usually won’t flag them."},
      {t:"Checking the character count", why:"The count is the same whichever kanji you chose."},
      {t:"Looking only at the headings", why:"Conversion errors can appear anywhere in the text, so headings alone miss most of them."}
    ]}
   ],
   apply:{
    intro:"Finish the unit by producing and checking a short piece of your own.",
    tasks:[
     {t:"Write 400 characters on 原稿用紙", how:[
       "Print a 400字詰め sheet (free templates are easy to find) or draw a 20 × 20 grid.",
       "Write a 400-character opinion piece by hand on a question you choose, in である style, following the rules in this lesson.",
       "Check: indents, small kana, punctuation never at the start of a line, and the total within 400 squares."
     ], write:"Question… rules I almost broke… final count…"},
     {t:"Read your course’s AI and plagiarism rules", how:[
       "Find your university’s or course’s policy on generative AI and on plagiarism (often on the university website or in the syllabus).",
       "Write down what is allowed, what must be disclosed, and how.",
       "If something is unclear, write the question you would ask your teacher (Unit 8 shows how to email a teacher politely)."
     ], write:"Allowed… not allowed… disclosure… my question…"},
     {t:"Run the checklist on a full draft", how:[
       "Take your report draft from Lessons 1–4 (or any Japanese text you wrote).",
       "Go through the checklist in this lesson one row at a time, ideally after a break.",
       "Read it aloud slowly once, marking any conversion errors and spoken words."
     ], write:"Problems found in each area… fixes…"}
    ],
    proof:"A handwritten 400-character piece checked against the 原稿用紙 rules, notes on your course’s AI and plagiarism rules, and a checked draft."
   },
   read:[
    {book:"owg", where:"Section 12.5 “Writing Process: Integrating Research”", note:"Background reading in English on integrating sources honestly; the same principles apply to Japanese reports."}
   ]
  }
  ],
  checkpoint:["e1u7-q02","e1u7-q05","e1u7-q11","e1u7-q14","e1u7-q19","e1u7-q22","e1u7-q25","e1u7-q29","e1u7-q32","e1u7-q37","e1u7-q40","e1u7-q44"],
  codex:[
   {id:"japanese-report-structure", title:"Japanese reports: kinds, questions and structure", aka:["レポートの書き方","序論・本論・結論","はじめに・おわりに","期末レポート","卒業論文"], tags:["academic Japanese","writing","reports"], summary:"What a レポート is (and how it differs from a 感想文), the three common kinds, reading the task, building a 問い and 主張, and the three-part structure with its stock phrases.",
    levels:{
     starter:[
      "A **レポート** is the most common writing assignment at Japanese universities. It answers a question with evidence and reasoning. It is not a 感想文 (an essay about your impressions), which is what many students write at school, and what many first reports accidentally become.",
      "Reports come in three common kinds: **説明型** (explain something accurately), **論証型** (argue a position) and **報告型** (report an experiment, survey or visit). The task verb tells you which: 説明しなさい, 論じなさい, 報告しなさい.",
      "Every report has three parts: **序論** (or はじめに), **本論** and **結論** (or おわりに). The introduction gives the background, the question and the aim; the body gives evidence; the conclusion sums up and answers the question.",
      {key:"A report answers a question (問い) with a claim (主張) backed by evidence (根拠), in three parts."}
     ],
     builder:[
      {table:[["Part","Jobs","Typical phrases"],["序論 / はじめに","背景, 問い, 目的, 構成の予告","近年、～が注目されている。本レポートの目的は、～を明らかにすることである。以下、まず～、次に～。"],["本論","Evidence and reasoning, one point per section or paragraph","第一に、～。～によると、～。この結果から、～ことがわかる。"],["結論 / おわりに","まとめ, answer to the question, 今後の課題","以上、本レポートでは～について検討した。今後の課題として、～が挙げられる。"]]},
      "Read the task twice: once for the verb (説明する, 論じる, 考察する, 比較する, 要約する), once for the conditions: 字数 (程度, 以内, 以上), format (A4, 横書き, a cover or header with 学籍番号 and name), deadline and submission method, number of sources.",
      "Turn the topic (テーマ) into a question (問い) that evidence can answer in the length you have: なぜ～のか, ～といえるか, ～すべきか. Then decide your answer, the 主張, and state it early: 本レポートでは、～と主張する.",
      "Japanese reports rarely use 私; 本レポートでは, 本稿では and 筆者は are the usual ways to refer to the report and the writer. Plan with an outline (1. / 1.1 / (1), or 第1章・第1節 in theses) before writing paragraphs.",
      "Common slips: a list of quotations with no argument of your own; a topic but no question; a claim that appears only at the end; personal feelings used as evidence; a conclusion that opens a new topic; ignoring the 字数 or format. Each is easy to catch if you reread with the 問い in front of you."
     ],
     pro:[
      "The 説明型・論証型・報告型 classification is a teaching tool used in many Japanese writing guides and first-year writing courses; the names vary (for example 調査報告型 or 意見論述型), and real tasks often combine types. Lab reports (実験レポート) follow a fixed order close to a paper: 目的・方法・結果・考察, sometimes with 原理 or 結論. Longer theses (卒業論文, 修士論文) add a literature review (先行研究) and a methods section, and are usually organised into chapters (章) and sections (節); see {{japanese-paper-structure}}.",
      "Proportions are a matter of judgement. A common rule of thumb gives the introduction and conclusion about a tenth each in a short report, with the rest in the body; it is not a fixed rule. What is consistently taught is that the conclusion introduces nothing new except clearly labelled limitations (今後の課題).",
      "Japanese essays and columns sometimes delay the main point (起承転結 is often cited as a traditional pattern for essays and stories). Academic writing guides in Japan generally advise against it for reports: state the question and the aim in the introduction, and the answer clearly in the conclusion. Learners from writing traditions that build slowly towards a point, and learners from English-medium traditions that state a thesis early, both find this familiar in parts.",
      "Length rules use characters (字), not words. 「～字以内」 is a maximum; 「～字程度」 is approximate, and teachers differ on how much variation they accept; 「～字以上」 is a minimum. Word processors count spaces and half-width characters in their own ways, so ask what counts if the limit is tight."
     ]},
    related:["japanese-paragraphs","quoting-in-japanese","japanese-paper-structure","academic-writing"],
    read:[{book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”"}],
    sources:[{t:"大阪大学 全学教育推進機構『阪大生のためのアカデミック・ライティング入門』(3rd ed., 2018 printing)", url:"https://ir.library.osaka-u.ac.jp/repo/ouka/all/54607/2018_academicwriting_large_bwrev.pdf"}], checked:"2026-11"},

   {id:"japanese-paragraphs", title:"Paragraphs in Japanese academic writing", aka:["段落","パラグラフ","中心文","支持文","一字下げ"], tags:["academic Japanese","writing","paragraphs"], summary:"How a Japanese academic paragraph is built (中心文, 支持文, closing sentence), one topic per paragraph, the one-character indent, and linking paragraphs with 接続詞.",
    levels:{
     starter:[
      "A **段落** (*danraku*, paragraph) holds one topic. In academic Japanese it usually starts with a **中心文** (the sentence that states the point, like an English topic sentence), followed by **支持文** (supporting sentences: evidence, examples, explanation), and sometimes a closing sentence.",
      "On the page, each paragraph starts on a new line, **one character in** (一字下げ). Inside a paragraph, sentences run on without line breaks and without spaces after 「。」. A new line means a new topic.",
      "Why it matters: readers of academic Japanese, like readers of English, often skim the first sentence of each paragraph to follow the argument. If each paragraph has one clear point at its start, a reader can follow your whole report in a minute.",
      {key:"One topic per paragraph, point first, indented one character, new line only when the topic changes."}
     ],
     builder:[
      {table:[["Part","Example"],["中心文","アルバイトの長時間化は、学習時間の減少につながる可能性がある。"],["支持文","佐藤（2021）の調査では、週20時間以上働く学生は、授業外の学習時間が短かった。"],["支持文","また、深夜のアルバイトは睡眠不足を招くと指摘されている（田中 2019）。"],["Closing","したがって、アルバイトの時間帯にも注目する必要がある。"]]},
      "(Sources invented.) Test a paragraph by reading only its first sentence: does it say what the paragraph shows? Then check every other sentence supports that point. A sentence on a different topic goes to another paragraph.",
      "In a word processor, indent by typing one full-width space or by setting a one-character first-line indent. Headings are not indented. Avoid pressing Enter after every sentence, a habit from chat apps that hides the structure.",
      "Link paragraphs with 接続詞 at their start: まず・次に・最後に, 第一に・第二に, さらに・また, 一方・しかし, 以上のように. Avoid spoken openers (でも, だから, sentence-initial なので). A reverse outline (the first sentence of every paragraph, listed) shows whether the argument flows.",
      "Length: no fixed number, but a one-sentence paragraph rarely makes and supports a point, and a paragraph that fills a page usually holds two topics. If you can’t state a paragraph’s point in one sentence, split it."
     ],
     pro:[
      "Japanese university writing guides teach the paragraph (パラグラフ) explicitly, often using both the Japanese terms 中心文・支持文 and the English-derived トピック・センテンス・サポート・センテンス. The closing sentence (結びの文 or コンクルーディング・センテンス) is usually presented as optional. This is partly an import from English composition teaching; traditional Japanese prose divides 段落 more loosely and may place the main point late.",
      "Guides avoid fixed lengths, but a one-sentence paragraph rarely makes and supports a point, and a paragraph that fills a page usually holds two topics. In handwritten 原稿用紙 essays, very short paragraphs also waste squares, since each new paragraph leaves the rest of the line blank.",
      "Some templates and web texts separate paragraphs with a blank line instead of an indent. In reports and theses, the indent is standard; a blank line on its own is less usual, though some templates use both. Follow the template if there is one.",
      "Cohesion inside a paragraph comes from [[shiji-shi|指示語]] (この, その, こうした) and repeated key terms as much as from [[setsuzokushi|接続詞]]; Unit 5 introduces both."
     ]},
    related:["japanese-report-structure","japanese-signposts","paragraph-structure"],
    read:[{book:"owg", where:"Section 10.6 “Editing Focus: Paragraphs and Transitions”"}],
    sources:[{t:"大阪大学 全学教育推進機構『阪大生のためのアカデミック・ライティング入門』(paragraph section)", url:"https://ir.library.osaka-u.ac.jp/repo/ouka/all/54607/2018_academicwriting_large_bwrev.pdf"},{t:"OpenStax Writing Guide with Handbook, 10.6 Editing Focus: Paragraphs and Transitions", url:"https://openstax.org/books/writing-guide/pages/10-6-editing-focus-paragraphs-and-transitions"}], checked:"2026-11"},

   {id:"quoting-in-japanese", title:"Quoting and reporting sources in Japanese", aka:["引用","直接引用","間接引用","孫引き","ブロック引用"], tags:["academic Japanese","writing","sources"], summary:"Direct quotation with 「」, 『』 inside quotations, block quotations, indirect quotation with ～によると and ～と述べている, reporting verbs and their tense, 孫引き, and the conditions for quotation in Japanese copyright law.",
    levels:{
     starter:[
      "**引用** (*in’yō*) means using someone else’s words or ideas with the source shown. A **直接引用** copies the exact words inside 「」: 山田（2020）は、「大学の学びは、問いを持つことから始まる」（p. 15）と述べている。 A **間接引用** reports the idea in your own words, without 「」 but with the source: 山田（2020）によると、～という。",
      "Most citing in reports is indirect. Quote word for word only when the exact words matter. Either way, the source must be shown, or it is plagiarism.",
      "Reporting verbs such as 述べる (state), 指摘する (point out) and 主張する (argue) tell the reader what the source did. Quoting what you only saw quoted in another book (孫引き) is avoided: read the original, or show both sources.",
      {key:"Exact words go in 「」 with a page; ideas in your own words still need the source."}
     ],
     builder:[
      {list:["Copy direct quotations exactly; mark an error in the original with （ママ）.","Drop the original’s final 「。」 before と: 「～始まる」と述べている.","Change 「」 inside a quotation to 『』.","Show omissions with （中略） or 「……」.","Long quotations (often more than two or three lines): a block with blank lines around it, indented, no 「」, source after."]},
      {table:[["Verb","Signals"],["述べる","neutral statement"],["指摘する","a problem or overlooked fact, treated as valid"],["主張する","a position others may dispute"],["示す","what data or results show"],["明らかにする","a finding the writer accepts"],["提唱する","a new theory or concept"]]},
      "The ている form (述べている) is the usual default for published work; the past (述べた) is also correct, often for a statement at a particular time. Avoid 言っている and the hearsay forms ～らしい and ～とのことだ in reports.",
      "**孫引き** (quoting what you only saw quoted elsewhere) passes on others’ mistakes. Read the original; if you can’t, show both, for example （山田 2020: 34 より再引用）.",
      "After a source, add your own comment so readers can tell who is speaking: この指摘は～という点で重要である (agree and build), ただし、この調査は～に限られている (limit), しかし、～を考えると、この主張には検討の余地がある (disagree politely)."
     ],
     pro:[
      "Japan’s Copyright Act (著作権法) permits quotation of published works in Article 32 when it conforms to fair practice and stays within a scope justified by the purpose, such as reporting, criticism or research. The Agency for Cultural Affairs’ explanation lists practical points: the quotation must be necessary; the quoted part must be clearly distinguished from your own text (for example with 「」); your own text must be the main part and the quotation subordinate (主従関係); and the source must be indicated (出所の明示), as required by Article 48. University rules on plagiarism go further: they require citation of ideas and data too, not only quoted words.",
      "Formats for page numbers and secondary citations vary by field: （p. 15）, （15頁）, （山田 2020: 15）, （山田, 2020, p. 15）; and for 孫引き, 「…より再引用」, 「…による」 or the patterns of an international style such as APA’s “as cited in”. Some styles list only the source you read; others list both. Follow your style guide.",
      "Emphasis that you add must be marked (傍点は引用者による, 強調は引用者); translations you make from a foreign-language source should be marked as yours (引用者訳 or 筆者訳) in many styles.",
      "Choosing reporting verbs is part of your stance. 明らかにした commits you to the finding; 主張している keeps distance; 指摘している accepts that the point deserves attention. Unit 6 shows how to read these signals in others’ writing."
     ]},
    related:["japanese-references","quote-paraphrase-summary","using-sources-in-language","japanese-plagiarism-ai"],
    read:[{book:"owg", where:"Section 12.6 “Editing Focus: Integrating Sources and Quotations”"}],
    sources:[{t:"文化庁「著作物が自由に使える場合」(explanation of Copyright Act Article 32 on quotation)", url:"https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/gaiyo/chosakubutsu_jiyu.html"},{t:"大阪大学 全学教育推進機構『阪大生のためのアカデミック・ライティング入門』(quotation section)", url:"https://ir.library.osaka-u.ac.jp/repo/ouka/all/54607/2018_academicwriting_large_bwrev.pdf"}], checked:"2026-11"},

   {id:"japanese-references", title:"Reference lists in Japanese", aka:["参考文献","引用文献","文献リスト","SIST 02","五十音順"], tags:["academic Japanese","writing","citation"], summary:"Why there is no single Japanese referencing standard, a common author–year pattern with 『』 and 「」, numbered systems, SIST 02 and its status, and ordering by 五十音順.",
    levels:{
     starter:[
      "Japanese reports end with a list of sources, usually headed **参考文献**. There is no single national style: your teacher, department or journal decides the format.",
      "A common pattern in the humanities and social sciences: author, year in brackets, then the title, with **『』 for books and journals** and **「」 for articles and chapters**: 山田花子（2020）『大学で学ぶということ』〇〇出版。 In the text you cite 山田（2020） or （山田 2020）.",
      "Japanese entries are often listed in **五十音順**, the あいうえお order of the authors’ names by their reading, followed by other-language works in alphabetical order.",
      {key:"Find your rules, follow one format consistently, and make the list match the citations in the text."}
     ],
     builder:[
      {table:[["Type","Example (invented works)"],["Book","山田花子（2020）『大学で学ぶということ』〇〇出版。"],["Article","佐藤健（2021）「大学生の学習時間とアルバイト」『〇〇大学教育研究紀要』第12号、45–60頁。"],["Chapter","田中一郎（2019）「地域の図書館の役割」鈴木明編『学びの場を考える』〇〇書房、23–41頁。"],["Web page","〇〇市（2024）「外国人住民のための生活ガイド」URL（2026年10月1日閲覧）"]]},
      "In-text forms: 山田（2020）は…, （山田 2020）, with a page （山田 2020: 45）; two authors 山田・佐藤（2019）; three or more often 山田ほか（2018）. Sciences often use numbers instead: …と報告されている[3]。 with a list in citation order.",
      "Some teachers separate **引用文献** (works cited) from **参考文献** (works consulted); others use one list. Either way, every citation must appear in the list with matching author and year.",
      "五十音順 goes by reading, so check readings you are unsure of (the book’s 奥付, the journal’s site, or NDL Search). Sorting by another reading of the first kanji puts names such as 長谷川 (はせがわ) in the wrong place.",
      "Elements that almost every Japanese style requires: author, year, title, and where the work appeared (publisher; or journal with volume or issue and pages); for web pages, the URL and the date viewed. Elements that vary: where the year goes, the separators between parts, 頁 or pp., and whether 『』 and 「」 are used."
     ],
     pro:[
      "**SIST 02** (参照文献の書き方), one of the SIST standards issued by the Japan Science and Technology Agency (JST) for science and technology information, was last revised in 2007. JST states that the SIST project ended at the end of fiscal year 2011 and that the documents will not be updated. Many university libraries still cite it in guides, and some journals’ rules derive from it, but it is no longer maintained; refer to it only when your rules point to it.",
      "Japanese journals publish their own 執筆要領 or 投稿規定, which often differ in small details: year in brackets after the author or at the end; commas, full stops or 、。 between elements; 頁 or pp.; whether 『』 and 「」 are used. Many fields use an international style (APA in psychology, for example), sometimes with a Japanese adaptation. A reference manager with the right citation style file (CSL) helps, but Japanese metadata often comes out with errors: missing readings, wrong name order, wrong brackets.",
      "Mixed-language lists: one common practice lists Japanese works first in 五十音順 and then other-language works alphabetically; another sorts everything alphabetically by romanised name. Romanisation itself varies (Hepburn and other systems; long vowels marked or not), which is one reason guides prefer 五十音順 for Japanese works.",
      "Web sources need a date of access (閲覧日 or 参照日) in most Japanese styles, because pages change. Where a DOI exists (J-STAGE articles often have one), many styles prefer it to a URL."
     ]},
    related:["quoting-in-japanese","japanese-punctuation-numbers","citation-styles","finding-japanese-research"],
    sources:[{t:"JST SIST (科学技術情報流通技術基準): SIST 02 参照文献の書き方 (SIST project ended FY2011)", url:"https://jipsti.jst.go.jp/sist/pdf/SIST02.pdf"},{t:"新潟大学附属図書館「参考文献の書き方」(SIST 02 examples, based on the 2007 edition; PDF)", url:"https://www.lib.niigata-u.ac.jp/learning_support/doc/20210709-3.pdf"}], checked:"2026-11"},

   {id:"japanese-punctuation-numbers", title:"Japanese punctuation, numbers and character widths", aka:["句読点","句点","読点","全角・半角","縦書き・横書き","公用文作成の考え方"], tags:["academic Japanese","writing","notation"], summary:"The punctuation pairs 、。 ，． and ，。, what the 2022 official guidance says, brackets and other marks, full-width and half-width characters, and what changes in vertical writing.",
    levels:{
     starter:[
      "Japanese ends sentences with the **句点** 「。」 and marks pauses with the **読点** 「、」. In horizontal writing, some fields use 「，」 and 「．」 instead, and some use 「，」 with 「。」. All three pairs are in real use; **mixing them in one document is the mistake**.",
      "Japanese characters are **全角** (full-width, a square each). Digits and Latin letters are normally **半角** (half-width) but also exist in full-width forms. Choose one width for digits and keep it.",
      "Japanese also uses its own brackets: 「」 for quotations and article titles, 『』 for book titles and quotations inside quotations. And it can be written horizontally (横書き, most reports) or vertically (縦書き, some humanities work and many exams), which changes how numbers are written.",
      {key:"One punctuation pair, one width for digits, everywhere in the document."}
     ],
     builder:[
      {table:[["Pair","Common in"],["、。","most writing, humanities, social sciences"],["，．","many science and engineering papers"],["，。","some textbooks and official documents"]]},
      "Japan’s current guidance for official writing, 公用文作成の考え方 (2022), uses 「。」 and 「、」 as the rule, allows 「，」 in horizontal writing, and asks that a document not mix them. It also says 「．」 is not used as a full stop except where academic or specialist needs require it.",
      "Other marks: 「」 quotations and article titles; 『』 book and journal titles and quotations inside quotations; （） full-width brackets; ・ (中黒) between parallel nouns and parts of foreign names; ～ for ranges. No spaces between Japanese words or after 、。.",
      "Widths: kanji, kana and Japanese punctuation are full-width; never use half-width katakana (ｱｲｳ) in reports. For digits and Latin letters, many guides prefer half-width (2026年, 45%), some full-width; be consistent. In 縦書き, use kanji numerals (二〇二六年) and always 、。."
     ],
     pro:[
      "公用文作成の考え方 (文化審議会建議, 7 January 2022) replaced 公用文作成の要領 (a 1951 recommendation, sent to ministries by the Cabinet Secretariat in 1952) as the government’s reference for official documents; a Cabinet notice of 11 January 2022 abolished the old guideline. Part Ⅰ, 5 (1) of the 建議 states: 句点には「。」（マル）読点には「、」（テン）を用いることを原則とする。横書きでは、読点に「，」（コンマ）を用いてもよい。ただし、一つの文書内でどちらかに統一する。 Its explanation adds that 「，」 may be used in horizontal writing depending on circumstances, that the two should not be mixed, that 「．」 is not used as a full stop except where academic or specialist needs require it, and that Western-language text uses 「,」 and 「.」. The old 要領 had said that horizontal official writing uses 「，」 as the comma (with 「。」), which is one reason the ，。 combination is still seen in official documents and some textbooks.",
      "On digits (item 4「数字の使い方」), the guidance uses Arabic numerals in horizontal writing, sets no fixed rule for full-width vs half-width, asks for consistency within a document, notes that mixing can produce uneven spacing depending on the font, and recommends half-width digits for data and amounts, partly because full-width digits may not be processed as numbers.",
      "These are rules for government writing, not for universities or journals, but they show the current official view and are widely referenced. Science and engineering journals often specify ，． in their 投稿規定; humanities journals more often specify 、。. Japanese input methods have a setting for the punctuation pair (look for 句読点 in the IME settings), which prevents accidental mixing.",
      "In 縦書き, fonts draw rotated forms of brackets and dashes, numbers are written in kanji (either 二〇二六 digit by digit or 二千二十六 with place values; styles differ), and short Latin sequences may be set upright with 縦中横. Word processors do not convert digits to kanji automatically."
     ]},
    related:["japanese-references","genkou-youshi","written-vs-spoken-japanese"],
    read:[{book:"koyobun", where:"Part Ⅰ, item 4「数字の使い方」 and item 5「符号の使い方」"}],
    sources:[{t:"文化審議会「公用文作成の考え方（建議）」2022 (PDF)", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf"},{t:"文化庁「公用文作成の考え方」 (建議 and 解説, PDF)", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf"}], checked:"2026-11"},

   {id:"genkou-youshi", title:"原稿用紙 (Japanese manuscript paper)", aka:["genkō yōshi","400字詰め原稿用紙","manuscript paper rules","小論文"], tags:["academic Japanese","writing","exams"], summary:"The squared paper used for handwritten essays and exams, and the rules standard guides agree on: one character per square, indents, small kana, punctuation never at the start of a line, and more.",
    levels:{
     starter:[
      "**原稿用紙** is paper with a grid of squares, one character per square. The usual sheet is **400字詰め** (20 × 20). It is still used for 小論文 in entrance exams, essay exams and some handwritten assignments.",
      {list:["Leave the first square blank at the start of the text and of each paragraph.","Every character takes a square, including small kana (っ, ゃ), 「ー」, and punctuation and brackets.","Never start a line with 「、」 or 「。」: put it with the last character of the line above, or just outside the grid."]},
      {key:"One character per square, indent each paragraph, and keep punctuation off the start of a line."}
     ],
     builder:[
      {table:[["Item","Rule"],["Paragraph start","Leave one square blank"],["Small kana (っ ゃ ゅ ょ)","One square; lower left in 横書き, upper right in 縦書き"],["、。 and closing brackets","One square; never the first square of a line"],["。 before 」","Many guides write them together in one square (。」)"],["…… and ――","Two squares each"],["Numbers","縦書き: kanji numerals; 横書き: Arabic digits, often two per square"]]},
      "Counting is exact: a sentence of 32 characters, plus an indent, uses 33 squares, whatever the characters are. Exam limits such as 「400字以内」 usually mean the squares used, including punctuation and indents.",
      "A new paragraph leaves the rest of the previous line empty. Because many exams read the limit straight off the grid, those empty squares often count towards the space you have used, so very short paragraphs cost space in a tight limit.",
      "Title and name: a common layout puts the title on line 1 a few squares in and the name on line 2 ending one square from the bottom, but exam sheets often provide separate boxes. The sheet’s instructions come first."
     ],
     pro:[
      "Japanese pupils learn 原稿用紙 conventions in primary school 国語, so markers at every level notice errors quickly. The rules above are those standard guides agree on. Details vary: where exactly the title starts, whether a 「。」 at the end of a line is written inside the last square with the character or just outside the grid (ぶら下げ), how digits and Latin letters are fitted in 横書き, and how dialogue is laid out in creative writing.",
      "Rules about opening brackets at the end of a line, about 「ー」 orientation in vertical writing (it is drawn vertically), and about correcting mistakes in exams (erase cleanly; insertion marks vary) are taught differently in different guides; follow your teacher or the exam’s instructions.",
      "Word processors can emulate 原稿用紙 (for example a manuscript-paper layout in Japanese versions of Word), which helps practise counting, but typed reports follow typed conventions: no rule against punctuation at line starts is needed, because the software handles line-breaking rules (禁則処理) automatically.",
      "For exam practice: many guides advise filling most of the allowed space (often at least about eight tenths) and never exceeding the last square. Teachers vary, so check their advice."
     ]},
    related:["japanese-punctuation-numbers","japanese-paragraphs"],
    sources:[{t:"York University, “How to use genkooyooshi” (Japanese language homework sheet, PDF)", url:"https://buna.yorku.ca/japanese/ejlt/homework/hw22_how_genkooyooshi.pdf"},{t:"さいたま市 国語ワークシート「原稿用紙の使い方」(primary school, PDF)", url:"https://www.city.saitama.lg.jp/003/002/008/006/p031346_d/fil/13-shou34-gennkoyoshi.pdf"}], checked:"2026-11"},

   {id:"japanese-plagiarism-ai", title:"Plagiarism, AI and translation tools in Japanese writing", aka:["剽窃","盗用","コピペ","自己剽窃","生成AI","機械翻訳"], tags:["academic Japanese","writing","integrity"], summary:"Plagiarism in the forms Japanese universities name (コピペ, translation without citation, changing endings, self-plagiarism, ghost-writing), and honest use of generative AI and machine translation.",
    levels:{
     starter:[
      "**剽窃** (*hyōsetsu*) or **盗用** means presenting others’ words or ideas as your own. In Japanese universities it includes copy-paste (コピペ) without citation, translating a source without citing it, changing a few endings of someone else’s text, reusing your own earlier report without permission, and having someone (or something) else write your work.",
      "Generative AI (生成AI) and machine translation (機械翻訳) are allowed in some courses and forbidden in others. Follow your course’s rules, say how you used a tool if asked, and never submit a tool’s text as your own writing.",
      {key:"Cite everything you take, use tools only as allowed and disclose them, and keep your own voice."}
     ],
     builder:[
      {table:[["Form","Why it counts"],["コピペ without 「」 and source","Someone else’s words presented as yours"],["Translation without citation","Someone else’s ideas, structure and evidence"],["Changing only endings","The original’s wording and structure remain (patchwriting)"],["自己剽窃","Earlier work presented as new, without permission"],["代筆 (ghost-writing), including AI-written text","The writing is not yours"]]},
      "Honest uses of tools, where a course allows them, usually involve your judgement at every step: looking up a word, checking whether a phrase is 話し言葉, asking for example sentences and confirming them in a dictionary. Check every output: AI tools invent references and mix registers.",
      "When disclosure is required, a short note is common: 本レポートの作成にあたり、表現の確認に生成AI（ツール名）を使用した。 Follow the exact form your course asks for.",
      "Translation needs special care. A passage translated from an English source needs a citation like any paraphrase, and a report written in another language and machine-translated is not your Japanese writing. When the rules are unclear, ask before you submit, not after."
     ],
     pro:[
      "Universities in Japan treat plagiarism in assignments and exams as 不正行為 (misconduct); sanctions vary between institutions and range from a failed assignment to loss of the credits for all courses taken that term or suspension (停学) at some universities, and in research to formal misconduct findings (捏造・改ざん・盗用 are the three named forms of research misconduct; see [[fabrication]]). Many universities also use similarity-checking software, especially for theses.",
      "Since 2023 many Japanese universities have issued statements or guidelines on generative AI. They differ: some leave decisions to each course, some require disclosure, some forbid AI in assessed writing unless allowed. Language courses often have stricter rules than content courses because the writing itself is being assessed. Ask when unclear; Unit 8 shows how to write to a teacher.",
      "Machine translation raises a specific problem for learners. Writing in your first language and translating it means the Japanese is not yours, even if the ideas are. Most courses that assess Japanese writing do not accept this unless they say so. Translation tools also choose register poorly, mixing です・ます and である, and render technical terms inconsistently.",
      "Research Skills covers plagiarism and AI policies in research in more depth: {{plagiarism}}, {{ai-research-policies}}; Academic English covers language tools in {{ai-language-tools}}."
     ]},
    related:["quoting-in-japanese","plagiarism","ai-research-policies","ai-language-tools"],
    sources:[{t:"文化庁「著作物が自由に使える場合」(quotation and source attribution)", url:"https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/gaiyo/chosakubutsu_jiyu.html"},{t:"OpenStax Writing Guide with Handbook, 12.5 Writing Process: Integrating Research", url:"https://openstax.org/books/writing-guide/pages/12-5-writing-process-integrating-research"}], checked:"2026-11"}
  ],
  terms:[
   {id:"repooto", term:"レポート (repōto)", def:"A written university assignment that answers a question with evidence and reasoning, usually in である style. Not the same as a 感想文 (an essay about personal impressions).", codex:"japanese-report-structure"},
   {id:"ronbun-shiken", term:"論文試験 and 小論文 (ronbun shiken, shōronbun)", def:"An essay exam, and the short essay written in one. Common in entrance and some course or public-service exams, often handwritten on 原稿用紙 within a character limit.", codex:"genkou-youshi"},
   {id:"hajimeni", term:"はじめに (hajimeni)", def:"“Introduction”: a common heading for the first part of a report or paper, used instead of 序論. It gives the background, question, aim and structure.", codex:"japanese-report-structure"},
   {id:"owarini", term:"おわりに (owarini)", def:"“Closing”: a common heading for the last part of a report or paper, used instead of 結論. It sums up, answers the question and names remaining issues (今後の課題).", codex:"japanese-report-structure"},
   {id:"danraku", term:"段落 (danraku)", def:"A paragraph: a group of sentences on one topic, starting on a new line with a one-character indent (一字下げ).", codex:"japanese-paragraphs"},
   {id:"chuushinbun", term:"中心文 (chūshinbun)", def:"The sentence that states a paragraph’s main point, like an English topic sentence. In academic Japanese it usually comes first, followed by supporting sentences (支持文).", codex:"japanese-paragraphs"},
   {id:"chokusetsu-inyou", term:"直接引用 (chokusetsu in’yō)", def:"Direct quotation: copying a source’s exact words, inside 「」 (or as an indented block if long), with the source and page.", codex:"quoting-in-japanese"},
   {id:"kansetsu-inyou", term:"間接引用 (kansetsu in’yō)", def:"Indirect quotation: reporting a source’s idea in your own words, without 「」 but with the source, often with ～によると or ～と述べている.", codex:"quoting-in-japanese"},
   {id:"magobiki", term:"孫引き (magobiki)", def:"Quoting a source you only saw quoted in another source, as if you had read the original. Avoid it; read the original, or show both sources.", codex:"quoting-in-japanese"},
   {id:"sankou-bunken", term:"参考文献 (sankō bunken)", def:"The list of sources at the end of a Japanese report or paper. Its format and order depend on the teacher, department or journal.", codex:"japanese-references"},
   {id:"inyou-bunken", term:"引用文献 (in’yō bunken)", def:"Works cited in the text. Some teachers want them listed separately from 参考文献 (works consulted); others use one list for everything.", codex:"japanese-references"},
   {id:"genkou-youshi-term", term:"原稿用紙 (genkō yōshi)", def:"Japanese manuscript paper with a grid of squares, one character per square; the usual sheet has 400 squares (20 × 20).", codex:"genkou-youshi"},
   {id:"kuten", term:"句点 (kuten)", def:"The Japanese full stop 「。」, which ends a sentence. Some science fields use 「．」 instead in horizontal writing.", codex:"japanese-punctuation-numbers"},
   {id:"touten", term:"読点 (tōten)", def:"The Japanese comma 「、」, which marks a pause inside a sentence. In horizontal writing 「，」 is also used; a document should use only one.", codex:"japanese-punctuation-numbers"},
   {id:"kakko", term:"括弧 (kakko)", def:"Brackets. In academic Japanese, 「」 marks quotations and article titles, 『』 book and journal titles and quotations inside quotations, and （） notes and citations.", codex:"japanese-punctuation-numbers"},
   {id:"zenkaku-hankaku", term:"全角・半角 (zenkaku, hankaku)", def:"Full-width characters take a square the size of a kanji; half-width ones take half of it. Digits and Latin letters exist in both; use one width consistently.", codex:"japanese-punctuation-numbers"},
   {id:"hyousetsu", term:"剽窃 (hyōsetsu)", def:"Plagiarism: presenting someone else’s words or ideas as your own, including by copy-paste, translation without citation or only changing sentence endings.", codex:"japanese-plagiarism-ai"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e1u7-q01", lesson:"e1u7-l1", level:1, q:"What is the main difference between a レポート and a 感想文?", options:[
     {t:"A レポート answers a question with evidence and reasoning; a 感想文 describes personal impressions", ok:true, why:"That is the core difference Japanese writing guides stress: 「レポートは感想文ではない」."},
     {t:"A レポート is longer; otherwise they are the same", why:"Length isn’t the difference. A short report still needs a question, evidence and reasoning."},
     {t:"A 感想文 uses sources; a レポート doesn’t", why:"The reverse: reports rely on sources, while impressions essays rely on personal experience."},
     {t:"A レポート is always about a book", why:"Reports can be about any topic. Writing about a book you read is typical of the school 読書感想文."}
   ]},
   {id:"e1u7-q02", lesson:"e1u7-l1", level:2, q:"A task says: 「地方自治体は外国人住民向けの情報をやさしい日本語で発信すべきか。あなたの考えを論じなさい。」 What kind of report is this?", options:[
     {t:"論証型: take a position and support it", ok:true, why:"～すべきか plus あなたの考えを論じなさい asks for an argued position."},
     {t:"説明型: explain what やさしい日本語 is", why:"You may explain the term briefly, but the task asks whether something should be done, which needs an argument."},
     {t:"報告型: report on a visit or experiment", why:"Nothing in the task asks you to report on something you did."},
     {t:"感想文: say how you feel about the topic", why:"論じなさい asks for reasoning and evidence, not feelings."}
   ]},
   {id:"e1u7-q03", lesson:"e1u7-l1", level:1, q:"What does 考察する ask you to do in a task or report?", options:[
     {t:"Examine and interpret: think through what results or facts mean", ok:true, why:"考察 is interpretation: why results came out this way, what they suggest, and their limits."},
     {t:"Copy the results into a table", why:"Presenting results is 報告. 考察 comes after: interpreting them."},
     {t:"Summarise a text in fewer words", why:"That is 要約する."},
     {t:"Describe your feelings about the topic", why:"考察 is analytical, not emotional."}
   ]},
   {id:"e1u7-q04", lesson:"e1u7-l1", level:1, q:"A task says 「1600字以上」. What does this mean?", options:[
     {t:"At least 1,600 characters", ok:true, why:"以上 means “or more”: 1,600 is the minimum."},
     {t:"No more than 1,600 characters", why:"That would be 以内."},
     {t:"About 1,600 characters, a little over or under", why:"That would be 程度."},
     {t:"At least 1,600 words", why:"Japanese length is counted in characters (字), not words."}
   ]},
   {id:"e1u7-q05", lesson:"e1u7-l1", level:3, q:"Tomás’s topic is 「日本の大学と留学生」. He has a 3,000-character report to write. Which is the strongest 問い?", options:[
     {t:"地方の大学における留学生向けの日本語サポートは、留学生の学業継続にどう関わっているか", ok:true, why:"Narrow (support in regional universities), answerable with studies and reports, and open enough to need analysis."},
     {t:"日本の大学と留学生について", why:"A topic, not a question. It gives no direction for research or argument."},
     {t:"留学生は日本が好きか", why:"Vague and about feelings; it can’t be answered with evidence in a report."},
     {t:"世界の留学の歴史はどのように変化してきたか", why:"Far too broad for 3,000 characters, and it drifts away from Japanese universities."}
   ]},
   {id:"e1u7-q06", lesson:"e1u7-l1", level:2, q:"Which way of referring to the report and the writer is safest in a Japanese report?", options:[
     {t:"本レポートでは、～を検討する。", ok:true, why:"本レポートでは is standard and widely accepted; it keeps the focus on the report."},
     {t:"僕は、～を検討します。", why:"僕 is casual, and です・ます doesn’t fit an である-style report."},
     {t:"自分的には、～を検討する。", why:"自分的には is very colloquial."},
     {t:"私は～を検討したいと思います。", why:"Polite style plus ～たいと思います sounds like a speech or a plan, not a report."}
   ]},
   {id:"e1u7-q07", lesson:"e1u7-l1", level:3, q:"Mei’s report argues that her university should extend library hours. Her only evidence is that she herself finds the library closes too early. What is the main problem?", options:[
     {t:"Personal experience is an example, not evidence about students in general; she needs data or sources", ok:true, why:"A report’s 根拠 must support a general claim: usage figures, a survey, studies from other universities."},
     {t:"She should write in です・ます style", why:"Style isn’t the problem here; reports are usually in である style anyway."},
     {t:"Her claim is too clear", why:"A clear claim is a strength. The weakness is the evidence."},
     {t:"She should not mention the library at all", why:"The topic is fine. It needs better evidence."}
   ]},
   {id:"e1u7-q08", lesson:"e1u7-l1", level:2, q:"Which sentence best states a claim (主張) in a report?", options:[
     {t:"本レポートでは、授業の録画公開は学生の復習を支える有効な手段であると主張する。", ok:true, why:"A clear, arguable position introduced with 本レポートでは and 主張する."},
     {t:"授業の録画については、賛成の人も反対の人もいると思う。", why:"No position, and ～と思う is personal."},
     {t:"録画があると、正直とても助かります。", why:"A personal feeling in conversational style (正直, です・ます)."},
     {t:"授業の録画について、いろいろ調べてみた。", why:"Describes an activity, not a claim; ～てみた is conversational."}
   ]},
   {id:"e1u7-q09", lesson:"e1u7-l1", level:3, q:"Oluwaseun has to write a short reaction sheet (リアクションペーパー) after a lecture, and the teacher asks “What did you find interesting?” Which is true?", options:[
     {t:"Personal reactions are what the teacher asked for, so they are appropriate here", ok:true, why:"Reaction sheets and reflections are not reports. The teacher’s instructions decide what they contain."},
     {t:"He must write a full 論証型 report with references", why:"That isn’t what the task asks. Answer the question you were given."},
     {t:"Personal reactions are never acceptable at a Japanese university", why:"They are fine where the task asks for them, as here."},
     {t:"He must write in 原稿用紙 format", why:"Nothing in the task says so; the format follows the teacher’s instructions."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e1u7-q10", lesson:"e1u7-l2", level:1, q:"What are the usual jobs of a report’s 序論 (はじめに)?", options:[
     {t:"Background, question, aim and a preview of the structure", ok:true, why:"These four moves let the reader know why the topic matters, what is asked and how the report proceeds."},
     {t:"All the evidence and data", why:"Evidence belongs in the 本論."},
     {t:"A summary and remaining issues", why:"That is the job of the 結論 (おわりに)."},
     {t:"Only the title and the writer’s name", why:"Those belong on the cover or header, not in the introduction."}
   ]},
   {id:"e1u7-q11", lesson:"e1u7-l2", level:2, q:"Which sentence would most likely open a report’s おわりに?", options:[
     {t:"以上、本レポートでは地方の公共交通の課題について検討した。", ok:true, why:"以上 and the past 検討した look back over the whole report: a standard opening for the conclusion."},
     {t:"近年、地方の公共交通が注目されている。", why:"This sets out background: a typical introduction sentence."},
     {t:"第一に、利用者数が減少している。", why:"A numbered point with evidence belongs in the body."},
     {t:"以下、まず現状を確認し、次に事例を比較する。", why:"A preview of what follows belongs in the introduction."}
   ]},
   {id:"e1u7-q12", lesson:"e1u7-l2", level:1, q:"How do you mark the start of a new paragraph in a Japanese report?", options:[
     {t:"Start a new line and indent it by one character", ok:true, why:"一字下げ on a new line is the standard paragraph mark."},
     {t:"Leave a blank line, with no indent", why:"Common online, but in reports the one-character indent is standard."},
     {t:"Underline the first word", why:"Underlining doesn’t mark paragraphs."},
     {t:"Continue on the same line after 「。」", why:"Then there is no paragraph break at all."}
   ]},
   {id:"e1u7-q13", lesson:"e1u7-l2", level:2, q:"Where does the 中心文 usually go in a paragraph in a Japanese report?", options:[
     {t:"At the start, so the reader knows the point first", ok:true, why:"Guides recommend point-first paragraphs in academic writing; readers skim first sentences to follow the argument."},
     {t:"Always at the very end, like a surprise", why:"Some essays build to the point, but report guides advise point first."},
     {t:"In the middle, between two examples", why:"A point hidden in the middle is easy to miss."},
     {t:"In a footnote", why:"The main point belongs in the paragraph itself."}
   ]},
   {id:"e1u7-q14", lesson:"e1u7-l2", level:3, q:"Ahmed’s paragraph starts 「オンライン授業には、通学時間を節約できるという利点がある。」 Which sentence does **not** belong in this paragraph?", options:[
     {t:"また、大学の学食は値段が安い。", ok:true, why:"A different topic (cafeteria prices). It breaks the one-topic rule."},
     {t:"調査では、回答者の多くが片道1時間以上かけて通学していた。", why:"Supports the point by showing how much time commuting takes."},
     {t:"オンライン授業では、その時間を学習や休息に充てることができる。", why:"Explains how the saved time can be used: supports the point."},
     {t:"このように、通学時間の節約は学生にとって大きな利点といえる。", why:"A closing sentence that returns to the point."}
   ]},
   {id:"e1u7-q15", lesson:"e1u7-l2", level:2, q:"Which connector is most suitable for opening a contrasting paragraph in a report?", options:[
     {t:"一方、", ok:true, why:"一方 introduces the other side or a contrast, in written style."},
     {t:"でも、", why:"でも is spoken; use しかし or 一方 in a report."},
     {t:"なので、", why:"なので shows a cause, not a contrast, and at the start of a sentence it is avoided in formal reports."},
     {t:"あと、", why:"あと is a spoken way to add a point, and it doesn’t show contrast."}
   ]},
   {id:"e1u7-q16", lesson:"e1u7-l2", level:1, q:"In a thesis, what does 「第2章 第3節」 mean?", options:[
     {t:"Chapter 2, section 3", ok:true, why:"章 is a chapter and 節 a section within it."},
     {t:"Page 2, line 3", why:"Pages are 頁 or ページ; lines are 行."},
     {t:"Section 2, paragraph 3", why:"章 is a chapter, not a section; paragraphs are 段落."},
     {t:"Version 2, draft 3", why:"章 and 節 are parts of the text, not versions."}
   ]},
   {id:"e1u7-q17", lesson:"e1u7-l2", level:3, q:"Kenji’s conclusion ends: 「また、留学生の就職問題も重要である。」 His report never discussed employment. What is the best advice?", options:[
     {t:"Remove it, or move it to the body, or present it clearly as a remaining issue (今後の課題)", ok:true, why:"A conclusion shouldn’t open a new topic. If it matters, it belongs in the body or as a labelled limitation."},
     {t:"Keep it: conclusions should end with a new idea", why:"New topics in the conclusion confuse the reader and suggest the report is unfinished."},
     {t:"Expand it into three more paragraphs in the conclusion", why:"That turns the conclusion into a second body on a new topic."},
     {t:"Move it to the title", why:"The title should reflect what the report discusses, which this isn’t."}
   ]},
   {id:"e1u7-q18", lesson:"e1u7-l2", level:2, q:"What is a reverse outline used for?", options:[
     {t:"Listing the first sentence of each paragraph to check that the argument flows", ok:true, why:"If the list reads like a summary of your argument, the paragraphs work; gaps and repeats show up at once."},
     {t:"Writing the conclusion first", why:"That is a drafting choice, not a reverse outline."},
     {t:"Reversing the order of all paragraphs", why:"A reverse outline checks the order; it doesn’t reverse it."},
     {t:"Translating the outline into English", why:"Not what the term means."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e1u7-q19", lesson:"e1u7-l3", level:1, q:"In a direct quotation, the original contains 「」. What happens to them inside your quotation?", options:[
     {t:"They become 『』", ok:true, why:"Quotations inside quotations use 『』, so the reader can see where your quotation ends."},
     {t:"They stay as 「」", why:"Nested 「」 make it unclear where the quotation ends."},
     {t:"They are removed", why:"A direct quotation copies the original exactly; the inner marks change form but stay."},
     {t:"They become English quotation marks", why:"English marks are not used in Japanese text for this."}
   ]},
   {id:"e1u7-q20", lesson:"e1u7-l3", level:2, q:"Which is a correct **indirect** quotation?", options:[
     {t:"佐藤（2019）によると、地域の図書館は住民が情報に出会う場所だという。", ok:true, why:"The idea is in the writer’s words, with ～によると…という and the source, and no 「」."},
     {t:"佐藤（2019）によると、「地域の図書館は、情報の入り口である」。", why:"Exact words in 「」 make this a direct quotation, and the sentence has no reporting ending."},
     {t:"地域の図書館は住民が情報に出会う場所らしい。", why:"No source, and らしい is spoken hearsay."},
     {t:"佐藤さんが言うには、図書館は情報の入り口っぽい。", why:"Spoken (言うには, っぽい), no year, and さん is not used for cited authors."}
   ]},
   {id:"e1u7-q21", lesson:"e1u7-l3", level:1, q:"What is 孫引き?", options:[
     {t:"Citing a source you only saw quoted in another source, as if you had read the original", ok:true, why:"孫 (grandchild) refers to taking the quotation second-hand."},
     {t:"Quoting your own earlier work", why:"Reusing your own work without saying so is self-plagiarism, a different issue."},
     {t:"Quoting more than three lines", why:"That is a long quotation, set as a block."},
     {t:"Citing a source by its page number", why:"Page numbers are a normal part of citing."}
   ]},
   {id:"e1u7-q22", lesson:"e1u7-l3", level:3, q:"Ana found a quotation from 鈴木（1985） in 山田（2020）, page 34. Her library doesn’t have 鈴木’s book. What should she do?", options:[
     {t:"Show that she took it from 山田, for example （山田 2020: 34 より再引用）, and list 山田 2020 in her references", ok:true, why:"When the original can’t be read, showing both sources is honest and lets readers check."},
     {t:"Cite only 鈴木（1985） as if she had read it", why:"That is 孫引き: it hides that she relies on 山田’s reading of 鈴木."},
     {t:"Cite nothing, since the quotation is famous", why:"A quotation always needs a source."},
     {t:"Change a few words so it doesn’t need a citation", why:"That would be patchwriting and still plagiarism."}
   ]},
   {id:"e1u7-q23", lesson:"e1u7-l3", level:2, q:"A study showed, with clear data, that a policy reduced waiting times, and you accept its finding. Which verb fits best?", options:[
     {t:"明らかにした", ok:true, why:"明らかにする presents a finding as established, signalling that you accept it."},
     {t:"主張している", why:"主張 frames the result as a position others might dispute, which undersells a finding you accept."},
     {t:"感じている", why:"Studies don’t “feel”; the verb reports emotion."},
     {t:"言っている", why:"Spoken style; not used for written sources in reports."}
   ]},
   {id:"e1u7-q24", lesson:"e1u7-l3", level:1, q:"How do Japanese guides usually recommend presenting a long quotation?", options:[
     {t:"As a separate block, indented, without 「」, with the source", ok:true, why:"Layout shows it is quoted, and the paragraph stays readable."},
     {t:"Inside 「」 in the middle of a paragraph, however long", why:"Long quotations in running text are hard to read; guides recommend a block."},
     {t:"In 『』", why:"『』 is for titles and inner quotations."},
     {t:"In bold type", why:"Bold doesn’t mark quotations."}
   ]},
   {id:"e1u7-q25", lesson:"e1u7-l3", level:3, q:"Which sentence quotes a source correctly in **direct** form? (Original in 田中 2018, p. 12: 「大学は、学び方を学ぶ場所である。」)", options:[
     {t:"田中（2018）は、「大学は、学び方を学ぶ場所である」（p. 12）と述べている。", ok:true, why:"Exact words in 「」, final 「。」 dropped before と, page and citation given."},
     {t:"田中（2018）は、「大学は、学び方を学ぶ場所である。」と述べている。", why:"The original’s final 「。」 is usually dropped before と, and the page is missing."},
     {t:"田中（2018）は、「大学は学ぶ場所だ」（p. 12）と述べている。", why:"The wording has been changed. A direct quotation must copy exactly."},
     {t:"田中は、大学は学び方を学ぶ場所であると言っている。", why:"Exact words without 「」, no year, and spoken 言っている."}
   ]},
   {id:"e1u7-q26", lesson:"e1u7-l3", level:2, q:"Which statement about 述べている and 述べた is correct?", options:[
     {t:"Both are correct; 述べている is the usual default for citing published work", ok:true, why:"ている presents the view as standing in the text; the past form is also used, for example for a past statement."},
     {t:"Only 述べた is correct in academic Japanese", why:"述べている is very common for published work."},
     {t:"述べている is spoken style", why:"It is fully written style."},
     {t:"Reports must use 述べています", why:"です・ます is not used in である-style reports."}
   ]},
   {id:"e1u7-q27", lesson:"e1u7-l3", level:2, q:"Which ending is best for reporting a cited idea in a report?", options:[
     {t:"～とされる", ok:true, why:"A written, neutral way to report a view, used with a source."},
     {t:"～らしい", why:"Spoken hearsay; it sounds like passing on rumours."},
     {t:"～とのことだ", why:"Conversational, typical of passing on a message."},
     {t:"～って言われてる", why:"Very colloquial (って, contracted ている)."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e1u7-q28", lesson:"e1u7-l4", level:1, q:"Who usually decides the reference format for a course report in Japan?", options:[
     {t:"The instructor (or the department’s rules)", ok:true, why:"There is no single national standard, so the instructor’s or department’s format decides."},
     {t:"A single national standard that every university must follow", why:"No such standard exists for university reports."},
     {t:"Whatever the student prefers, changing between entries", why:"Whatever format you use must be consistent."},
     {t:"SIST 02, which is updated every year", why:"SIST 02 was last revised in 2007 and the SIST project ended in fiscal year 2011."}
   ]},
   {id:"e1u7-q29", lesson:"e1u7-l4", level:2, q:"In the common humanities pattern, which marks go around a journal name and around an article title?", options:[
     {t:"Journal 『』, article 「」", ok:true, why:"The larger publication (book, journal) takes 『』; the item inside it takes 「」."},
     {t:"Journal 「」, article 『』", why:"Swapped: the journal is the larger publication and takes 『』."},
     {t:"Both 「」", why:"Then readers can’t tell the article from the journal."},
     {t:"Both in English quotation marks", why:"English marks aren’t used for Japanese titles."}
   ]},
   {id:"e1u7-q30", lesson:"e1u7-l4", level:2, q:"Which list is in correct 五十音順?", options:[
     {t:"[石井]{いしい}、[加藤]{かとう}、[高橋]{たかはし}、[松本]{まつもと}", ok:true, why:"い → か → た → ま: the order of the kana readings."},
     {t:"[加藤]{かとう}、[石井]{いしい}、[松本]{まつもと}、[高橋]{たかはし}", why:"か comes after い, and ま after た."},
     {t:"[高橋]{たかはし}、[松本]{まつもと}、[石井]{いしい}、[加藤]{かとう}", why:"This ignores the あいうえお order of the readings."},
     {t:"[松本]{まつもと}、[高橋]{たかはし}、[加藤]{かとう}、[石井]{いしい}", why:"This is the reverse order."}
   ]},
   {id:"e1u7-q31", lesson:"e1u7-l4", level:1, q:"What does 公用文作成の考え方 (2022) say about using 「，」 as a comma?", options:[
     {t:"It may be used in horizontal writing, but a document should not mix it with 「、」", ok:true, why:"「、」 is the rule; 「，」 is allowed in horizontal writing; no mixing."},
     {t:"It is required in all horizontal writing", why:"The 2022 guidance makes 「、」 the rule and 「，」 an option."},
     {t:"It is banned", why:"It is explicitly allowed in horizontal writing."},
     {t:"It should be mixed with 「、」 for variety", why:"The guidance warns against mixing."}
   ]},
   {id:"e1u7-q32", lesson:"e1u7-l4", level:3, q:"Sun-hee’s draft uses 「、」 in the text but 「，」 in the figure captions. Her department doesn’t specify a pair. What should she do?", options:[
     {t:"Choose one pair and use it everywhere, including captions", ok:true, why:"Consistency across the whole document is the rule every guide agrees on."},
     {t:"Leave it: captions don’t count", why:"Captions are part of the document; mixed punctuation is visible there too."},
     {t:"Use 「，」 in odd-numbered pages only", why:"Arbitrary variation is exactly what to avoid."},
     {t:"Remove all commas from the captions", why:"That can make captions hard to read; the fix is consistency, not removal."}
   ]},
   {id:"e1u7-q33", lesson:"e1u7-l4", level:2, q:"Which is never appropriate in a Japanese report?", options:[
     {t:"Half-width katakana such as ﾚﾎﾟｰﾄ", ok:true, why:"Half-width katakana is a leftover from old systems; reports use full-width katakana."},
     {t:"Half-width digits such as 2026年", why:"Many guides and journals prefer half-width digits."},
     {t:"Full-width brackets （） around a citation", why:"Full-width brackets are normal in Japanese text."},
     {t:"「」 around a short quotation", why:"That is the standard quotation mark."}
   ]},
   {id:"e1u7-q34", lesson:"e1u7-l4", level:1, q:"In 縦書き (vertical writing), how are numbers usually written?", options:[
     {t:"In kanji numerals, such as 二〇二六年", ok:true, why:"Vertical text normally uses kanji numerals."},
     {t:"In half-width Arabic digits only", why:"Arabic digits are the norm in horizontal writing; vertical text usually uses kanji."},
     {t:"In Roman numerals", why:"Not used for ordinary numbers in Japanese text."},
     {t:"Spelled out in katakana", why:"Numbers aren’t written in katakana."}
   ]},
   {id:"e1u7-q35", lesson:"e1u7-l4", level:3, q:"Ravi cites 「長谷川（2019）」 in his text. Where does 長谷川 go in a reference list ordered by 五十音順?", options:[
     {t:"Under は, by its reading はせがわ", ok:true, why:"五十音順 follows the reading, and 長谷川 is read はせがわ."},
     {t:"Under ち, because 長 can be read ちょう", why:"Sorting goes by how the name is actually read, not by another reading of its first kanji."},
     {t:"At the end, because it has three kanji", why:"The number of kanji doesn’t affect the order."},
     {t:"Under な, because 長 can be read なが", why:"The family name is read はせがわ, so it goes under は."}
   ]},
   {id:"e1u7-q36", lesson:"e1u7-l4", level:2, q:"What should a reference to a web page include in most Japanese styles?", options:[
     {t:"Author or organisation, year, page title, URL and the date you viewed it", ok:true, why:"Pages change, so the viewing date (閲覧日) matters, along with who published it and where."},
     {t:"Only the URL", why:"A bare URL doesn’t tell the reader who wrote it or when you saw it."},
     {t:"Only the search words you used", why:"Search words don’t identify a source."},
     {t:"The name of your browser", why:"Not part of a citation."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e1u7-q37", lesson:"e1u7-l5", level:1, q:"How many squares does a small 「ゃ」 take on 原稿用紙?", options:[
     {t:"One full square", ok:true, why:"Small kana take a full square, placed in a corner of it."},
     {t:"Half a square", why:"Small kana are smaller characters but still take a full square."},
     {t:"None: it shares a square with the kana before it", why:"Small kana never share a square. Only punctuation shares one: a 「、」 or 「。」 that would start a line, or 。 written together with a closing 」."},
     {t:"Two squares", why:"Two squares are for 「……」 and 「――」."}
   ]},
   {id:"e1u7-q38", lesson:"e1u7-l5", level:2, q:"On 400字詰め原稿用紙, how many lines and squares per line does one sheet have?", options:[
     {t:"20 lines of 20 squares", ok:true, why:"20 × 20 = 400."},
     {t:"40 lines of 10 squares", why:"That multiplies to 400 but isn’t the standard layout."},
     {t:"10 lines of 40 squares", why:"Not the standard layout."},
     {t:"25 lines of 16 squares", why:"Not the standard layout."}
   ]},
   {id:"e1u7-q39", lesson:"e1u7-l5", level:2, q:"Which is plagiarism in a Japanese report?", options:[
     {t:"Translating a paragraph from an English article into Japanese without citing it", ok:true, why:"The ideas and evidence belong to the original author; translation needs a citation."},
     {t:"Quoting one sentence in 「」 with author, year and page", why:"A correctly marked and cited quotation."},
     {t:"Summarising an article in your own words with its source", why:"Normal, honest use of a source."},
     {t:"Stating that Tokyo is Japan’s capital without a source", why:"General knowledge needs no citation."}
   ]},
   {id:"e1u7-q40", lesson:"e1u7-l5", level:3, q:"Priya’s course allows AI for checking language if students disclose it. She used an AI tool to flag spoken expressions in her own draft. What should she do?", options:[
     {t:"Check each suggestion herself and add a short note saying how she used the tool", ok:true, why:"That follows the policy: language checking only, her own judgement, and disclosure."},
     {t:"Nothing: small language checks never need disclosure", why:"This course asks for disclosure, so she should give it."},
     {t:"Let the tool rewrite every paragraph, since language checking is allowed", why:"Rewriting paragraphs goes beyond checking; the text would no longer be hers."},
     {t:"Delete her draft and start again without any tools", why:"Not necessary: her use was allowed. She just needs to check and disclose."}
   ]},
   {id:"e1u7-q41", lesson:"e1u7-l5", level:1, q:"On 原稿用紙, what do you do at the start of each paragraph?", options:[
     {t:"Leave the first square blank", ok:true, why:"One-square indent (一字下げ) marks every new paragraph, and the start of the text."},
     {t:"Leave the first line blank", why:"A blank line isn’t the paragraph mark on 原稿用紙, and it wastes squares."},
     {t:"Write a number in the first square", why:"Paragraphs aren’t numbered."},
     {t:"Start in the first square with a 「、」", why:"Punctuation never starts a line."}
   ]},
   {id:"e1u7-q42", lesson:"e1u7-l5", level:3, q:"Luis writes his report in Spanish, translates it with a tool, edits a few words and submits it. The course is a Japanese writing course and says nothing about tools. What is the main problem?", options:[
     {t:"The Japanese text isn’t his own writing, which the course assesses; he should ask the teacher before using a tool like this", ok:true, why:"A Japanese writing course assesses the student’s Japanese. A machine translation is not that, so he should check the rules."},
     {t:"There is no problem, because the ideas are his", why:"The ideas are, but the Japanese writing is the tool’s."},
     {t:"The problem is only that he didn’t use である style", why:"Style is not the main issue; authorship is."},
     {t:"The problem is that he edited a few words", why:"Editing isn’t the problem; submitting machine-translated text as his own is."}
   ]},
   {id:"e1u7-q43", lesson:"e1u7-l5", level:2, q:"Why do kanji conversion errors (変換ミス) such as 機会 for 機械 survive spell-checking?", options:[
     {t:"Both are real words, so the checker sees nothing wrong", ok:true, why:"The kanji are valid; only the meaning is wrong, which slow reading catches."},
     {t:"Spell-checkers don’t work on Japanese at all", why:"They can flag some errors, but not a real word in the wrong place."},
     {t:"Because they are always in katakana", why:"They are kanji words."},
     {t:"Because they only appear in headings", why:"They can appear anywhere."}
   ]},
   {id:"e1u7-q44", lesson:"e1u7-l5", level:3, q:"Grace is checking her report before submitting. Which of these is **not** on a sensible final checklist?", options:[
     {t:"Replacing every である with です to sound more polite", ok:true, why:"Reports are usually in である style throughout; switching would create mixed or wrong style."},
     {t:"Checking that every in-text citation appears in the reference list", why:"Matching citations and list is a key final check."},
     {t:"Checking that one punctuation pair is used throughout", why:"Consistency of 、。 or ，． is part of the check."},
     {t:"Reading the report aloud slowly to catch conversion errors", why:"A good habit for finding wrong kanji and spoken expressions."}
   ]},
   {id:"e1u7-q45", lesson:"e1u7-l5", level:1, q:"What does 自己剽窃 mean?", options:[
     {t:"Reusing your own earlier work as new without permission or acknowledgement", ok:true, why:"Submitting a report written for one course in another, without permission, counts as self-plagiarism."},
     {t:"Quoting yourself in a presentation", why:"Referring openly to your earlier work, with a citation, is fine."},
     {t:"Writing about yourself in a report", why:"That is a style question, not plagiarism."},
     {t:"Checking your own report for plagiarism", why:"That is responsible practice, not misconduct."}
   ]}
  ]
});
