/* Japanese Foundations · Unit 9 (e3u9) · N3 grammar I */
/* N3 furigana rule (JFOUND_BRIEF §2): furigana on kanji above N4 and on irregular readings. */
ICA.addUnit({
 id: "e3u9",
 track: "e3",
 n: 9,
 title: "N3 grammar I",
 icon: "🎯",
 blurb: "Saying why and what for (～ために, ～ように), how habits and abilities change (～ようにする, ～ようになる), who made a decision (～ことにする, ～ことになる), where you are in an action (～ところ, ～たばかり), what you expect, conclude and think is right (～はず, ～わけ, ～べき), wishes and causes (～てほしい, ～ばいい, ～おかげで, ～せいで, ～ば～ほど), and five compound particles: について, に[対]{たい}して, として, にとって and によって.",
 goals: [
  "Say “in order to” and “so that” with ～ために and ～ように, and choose between them",
  "Describe efforts and changes with ～ようにする and ～ようになる",
  "Report your own decisions with ～ことにする and decisions made for you with ～ことになる",
  "Say where you are in an action with ～るところ, ～ているところ and ～たところ, and use ～たばかり for things that happened recently",
  "Express expectations with ～はず, conclusions with ～わけだ, and what is right with ～べき",
  "Say what you want others to do (～てほしい), give advice and wishes with ～ばいい, credit or blame a cause (～おかげで, ～せいで), and say “the more…, the more…” (～ば～ほど)",
  "Use について, に[対]{たい}して, として, にとって and によって, and keep them apart"
 ],
 read: [
  {
   book: "taekim",
   where: "Essential Grammar: “Using する and なる with the に particle” (ようにする, ようになる, ことにする, ことになる); Special Expressions: “Hypothesizing and Concluding” (わけ), “Time-specific actions” (～たばかり), “Using 「方」 and 「よる」” and “Expressing Amounts” (～ば～ほど); Advanced Topics: “Things that should be a certain way” (はず, べき)"
  },
  {
   book: "irodori",
   where: "Elementary 2, Lessons 1, 9, 10, 14, 16, 17 and 18, and Pre-Intermediate, Lessons 1, 7, 11, 12, 14, 16 and 18",
   note: "Each lesson’s Read section names the exact lessons. Several patterns in this unit (～わけ, ～べき, ～おかげで, ～せいで, ～ば～ほど and most compound particles) are not in IRODORI; the lessons here teach them fully."
  }
 ],
 lessons: [
  {
   id: "e3u9-l1",
   title: "In order to, so that, and change: ～ために, ～ように, ～ようにする, ～ようになる",
   minutes: 60,
   hook: {
    q: "Ana practises every day. She wants to say: “I practise every day so that I can speak Japanese.” Which word fits? 「日本語が話せる（　）、毎日[練習]{れんしゅう}しています。」",
    options: [
     "ために",
     "ように",
     "ことに",
     "ところ"
    ],
    answer: 1,
    reveal: "**ように.** Both ために and ように can mean “in order to” or “so that”, so ために is a very natural guess. But 話せる is a potential form, “can speak”. Being able to do something is a state you can’t simply decide to be in, and states like that take ように. This lesson gives you a two-question test for choosing, then two patterns built on ように: ～ようにする (making an effort) and ～ようになる (a change)."
   },
   goals: [
    "Use ～ために for a goal you act on, and noun + のために for “for” someone or something",
    "Use ～ように with potential forms, ない-forms and verbs like 分かる and [間]{ま}に[合]{あ}う",
    "Choose between ために and ように with a two-question test",
    "Describe efforts and habits with ～ようにする and ～ようにしている",
    "Describe changes in ability or habit with ～ようになる, and say “stopped doing” with ～なくなる",
    "Recognise ように in requests, wishes and “as”"
   ],
   learn: [
    {
     h: "Two ways to say “in order to”",
     body: [
      {
       lead: "English has “in order to” and “so that”. Japanese has [[tame-ni|～ために]] and [[you-ni|～ように]]. They look like translations of each other, but they divide the work differently."
      },
      "～ために joins a **goal** to the action you take to reach it. ～ように joins a **result you hope for** to the action that should help it happen. The difference is in the first half: is it something a person sets out to do, or a state that comes about?",
      {
       table: [
        [
         "Pattern",
         "Example",
         "Meaning"
        ],
        [
         "～ために",
         "家を買うために、お金を[貯]{た}めています。",
         "I’m saving money (in order) to buy a house."
        ],
        [
         "～ように",
         "後ろの人にも聞こえるように、大きい[声]{こえ}で話します。",
         "I speak loudly so that the people at the back can hear too."
        ]
       ]
      },
      "Buying a house is an action you decide to do. Being heard is not something you do: it happens, if your voice is loud enough. That is the heart of the choice, and the rest of the lesson builds on it.",
      "Both patterns come at the end of the first half of the sentence, after a plain-form verb, and they are usually followed by a comma. The second half is the action you take."
     ]
    },
    {
     h: "～ために: a goal you act on",
     body: [
      "To build ～ために, use the [[dictionary-form]] of a verb, or a noun + の.",
      {
       table: [
        [
         "Before ために",
         "Example",
         "Meaning"
        ],
        [
         "verb (dictionary form)",
         "日本の大学で勉強するために、日本語を習っています。",
         "I’m learning Japanese in order to study at a university in Japan."
        ],
        [
         "noun + の",
         "[健康]{けんこう}のために、毎朝歩いています。",
         "I walk every morning for my health."
        ],
        [
         "person + の",
         "家族のために、[一生懸命]{いっしょうけんめい}[働]{はたら}いています。",
         "I work hard for my family."
        ]
       ]
      },
      "Two conditions make ために work. First, the verb before it is a **volitional** action: something a person chooses to do, such as 買う, 習う, 行く or 作る. Second, the **same person** does both halves: I study, and I learn Japanese.",
      "With a noun, のために has two meanings, and both are common: a purpose ([健康]{けんこう}のために, for my health) and a beneficiary, the person or thing you do it for (家族のために, for my family).",
      "Add は to say what a goal requires: 大学に入るためには、試験を[受]{う}けなければなりません (To get into university, you have to take an exam).",
      {
       warn: "In news, notices and announcements, ため can also mean “because of”: [事故]{じこ}のため、電車が[遅]{おく}れています (Trains are delayed because of an accident). If the first half is a cause rather than a goal, read ため as “because”. Lesson 4 and the Codex entry {{purpose-you-ni-tame-ni}} say more."
      }
     ]
    },
    {
     h: "～ように: so that something happens",
     body: [
      "To build ～ように, use the dictionary form or the ない-form of a verb. ように is used when the first half is **not** something the subject simply does at will:",
      {
       list: [
        "**Potential forms** (can do): 読める, 話せる, 食べられる",
        "**Verbs that happen to you** rather than verbs you do: 分かる (understand), 見える (be visible), 聞こえる (be audible), [間]{ま}に[合]{あ}う (be in time), [治]{なお}る (get better), なる (become)",
        "**ない-forms**: [忘]{わす}れない (not forget), [遅]{おく}れない (not be late), [風邪]{かぜ}をひかない (not catch a cold)",
        "**A different subject** in each half: you act so that someone else can do or know something"
       ]
      },
      {
       ex: "子どもにも分かるように、やさしい[言葉]{ことば}で[説明]{せつめい}しました。\nI explained in simple words so that even children could understand.\n\n電車に[間]{ま}に[合]{あ}うように、早く家を出ました。\nI left home early so that I would be in time for the train.\n\n[忘]{わす}れないように、カレンダーに書いておきます。\nI’ll write it on the calendar so that I don’t forget.\n\n[風邪]{かぜ}をひかないように、[暖]{あたた}かくして[寝]{ね}てください。\nKeep warm when you go to bed, so that you don’t catch a cold.",
       label: "～ように"
      },
      "In each example the first half is a result you hope for, and the second half is what you do to help it happen. You can’t decide to understand, to be in time or not to forget; you can only act so that it happens.",
      {
       tip: "With ない-forms, ～ないように is the everyday choice. You may also meet ～ないために in writing, but if you are unsure, ～ないように is always safe."
      }
     ]
    },
    {
     h: "Choosing: a two-question test",
     body: [
      "When you are not sure, ask two questions about the first half of the sentence.",
      {
       fig: "<svg viewBox=\"0 0 340 380\"><defs><marker id=\"e3u9a1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">ために or ように?</text><rect class=\"d-panel\" x=\"16\" y=\"32\" width=\"308\" height=\"66\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"56\" text-anchor=\"middle\">Q1: Can the subject just do it?</text><text class=\"s\" x=\"170\" y=\"80\" text-anchor=\"middle\">yes: 買う, 習う, 行く · no: 読める, 分かる, ～ない</text><path class=\"d-ink\" d=\"M80 98V136\" stroke-width=\"2\" marker-end=\"url(#e3u9a1)\"/><text class=\"s\" x=\"88\" y=\"122\">yes</text><path class=\"d-ink\" d=\"M286 98V238\" stroke-width=\"2\" marker-end=\"url(#e3u9a1)\"/><text class=\"s\" x=\"294\" y=\"160\">no</text><rect class=\"d-panel\" x=\"16\" y=\"138\" width=\"210\" height=\"62\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"121\" y=\"164\" text-anchor=\"middle\">Q2: Is it the same person</text><text x=\"121\" y=\"186\" text-anchor=\"middle\">in both halves?</text><path class=\"d-ink\" d=\"M80 200V238\" stroke-width=\"2\" marker-end=\"url(#e3u9a1)\"/><text class=\"s\" x=\"88\" y=\"224\">yes</text><path class=\"d-ink\" d=\"M200 200L240 238\" stroke-width=\"2\" marker-end=\"url(#e3u9a1)\"/><text class=\"s\" x=\"226\" y=\"214\">no</text><rect class=\"d-sage\" x=\"16\" y=\"240\" width=\"150\" height=\"62\" rx=\"8\" stroke-width=\"2\"/><text x=\"91\" y=\"266\" text-anchor=\"middle\">～ために</text><text class=\"s\" x=\"91\" y=\"288\" text-anchor=\"middle\">a goal you act on</text><rect class=\"d-lup\" x=\"184\" y=\"240\" width=\"140\" height=\"62\" rx=\"8\" stroke-width=\"2\"/><text x=\"254\" y=\"266\" text-anchor=\"middle\">～ように</text><text class=\"s\" x=\"254\" y=\"288\" text-anchor=\"middle\">so that it happens</text><text class=\"s\" x=\"16\" y=\"330\">家を買うために、お金をためます。</text><text class=\"s\" x=\"16\" y=\"354\">子どもにも分かるように、話します。</text><text class=\"s\" x=\"16\" y=\"376\">おくれないように、早く出ます。</text></svg>",
       alt: "A decision chart. Question 1: can the subject just do it? Examples of yes: 買う, 習う, 行く. Examples of no: 読める, 分かる, and ない-forms. If no, the arrow goes straight to ～ように. If yes, question 2 asks whether the same person does both halves. If yes, ～ために (a goal you act on). If no, ～ように (so that it happens). Examples underneath: 家を買うために、お金をためます; 子どもにも分かるように、話します; おくれないように、早く出ます.",
       cap: "Two questions about the first half of the sentence settle most choices between ために and ように."
      },
      {
       table: [
        [
         "",
         "～ために",
         "～ように"
        ],
        [
         "Verb before it",
         "an action you choose: 買う, 行く",
         "a state or result: 読める, 分かる, ～ない"
        ],
        [
         "Subjects",
         "the same in both halves",
         "often different"
        ],
        [
         "After a noun",
         "のために (for)",
         "not used this way"
        ],
        [
         "Feel",
         "a clear goal",
         "a hoped-for result"
        ]
       ]
      },
      "Compare a minimal pair. 日本語を習うために日本に[来]{き}ました: I came to Japan to learn Japanese (a goal, my own action). 日本語が話せるように毎日[練習]{れんしゅう}しています: I practise every day so that I can speak Japanese (a result I hope for).",
      {
       tip: "Real speech is a little looser than the test. You will hear phrases like [上手]{じょうず}になるために, because many people feel that getting better is a goal they work on. The test gives you a safe, natural choice; it doesn’t make every other sentence wrong."
      }
     ]
    },
    {
     h: "～ようにする: making an effort, making it a habit",
     body: [
      "Add する to ように and you get [[you-ni-suru|～ようにする]]: “make sure to”, “try to”, “make a point of”. It describes an effort you keep making, not a single action.",
      {
       ex: "毎日三十分は歩くようにしています。\nI make sure I walk for at least thirty minutes every day.\n\n夜は[遅]{おそ}くまでスマホを見ないようにしています。\nI try not to look at my phone late at night.\n\nこれからは気をつけるようにします。\nI’ll be careful from now on.",
       label: "～ようにする"
      },
      "～ようにしている (with ている) is the most common form: it describes a habit you keep up. ～ようにします is a promise about the future, often in apologies, as in the last example.",
      "～ようにしてください is a polite instruction: “please make sure to”. It is softer than a direct ～てください, and very common in notices, at work and at school.",
      {
       ex: "[明日]{あした}は八時までに[来]{く}るようにしてください。\nPlease make sure you come by eight tomorrow.\n\n[貴重品]{きちょうひん}は[置]{お}いていかないようにしてください。\nPlease make sure you don’t leave valuables behind.",
       label: "～ようにしてください"
      }
     ]
    },
    {
     h: "～ようになる: a change that happens over time",
     body: [
      "Add なる and you get [[you-ni-naru|～ようになる]]: “come to”, “reach the point where”. It describes a change: something that wasn’t true before is true now. It is used with verbs; for adjectives and nouns you already know ～くなる and ～になる ([寒]{さむ}くなる, [静]{しず}かになる, 医者になる).",
      "With a **potential form**, it means “become able to”:",
      {
       ex: "一年[練習]{れんしゅう}して、[泳]{およ}げるようになりました。\nAfter a year of practice, I can swim now.\n\n日本に[来]{き}てから、[納豆]{なっとう}が食べられるようになりました。\nSince coming to Japan, I’ve become able to eat natto.",
       label: "Became able to"
      },
      "With an ordinary verb, it means that a habit or situation has started:",
      {
       ex: "[最近]{さいきん}、父はよく運動するようになりました。\nRecently my father has started exercising regularly.\n\nこのアプリで、駅の[混]{こ}み[具合]{ぐあい}が分かるようになりました。\nWith this app, you can now see how crowded the station is.",
       label: "Started to"
      },
      "To say that something **stopped**, use ～なくなる with the ない-form: [最近]{さいきん}、テレビを見なくなりました (I’ve stopped watching TV recently). ～ないようになる also exists, but ～なくなる is the everyday way.",
      {
       key: "～ようにする: you make an effort (your choice). ～ようになる: a change comes about (a result)."
      }
     ]
    },
    {
     h: "Other ように you will meet",
     body: [
      "Three more uses of ように are worth recognising now.",
      "**Reported requests and instructions.** ～ように言う, ～ように[頼]{たの}む and ～ように[伝]{つた}える report what someone told or asked someone to do. They are softer than quoting the command itself.",
      {
       ex: "医者にお[酒]{さけ}を飲まないように言われました。\nThe doctor told me not to drink alcohol.\n\n[部長]{ぶちょう}に[資料]{しりょう}を送るように[頼]{たの}まれました。\nMy manager asked me to send the documents.\n\nミンさんに、[明日]{あした}電話するように[伝]{つた}えてください。\nPlease tell Min to call tomorrow.",
       label: "Requests"
      },
      "**Wishes and prayers.** ～ますように on its own, at the end of a sentence, is a wish: [合格]{ごうかく}しますように (I hope I pass; may I pass). You will see it written on wooden prayer plaques ([絵馬]{えま}) at shrines and on New Year cards.",
      "**“As”.** ように also comes from ようだ (“like”): 前にも言ったように (as I said before), [次]{つぎ}のように (as follows). Here it means “in the way that”, not “so that”.",
      {
       terms: [
        "tame-ni",
        "you-ni",
        "you-ni-suru",
        "you-ni-naru"
       ]
      }
     ]
    },
    {
     h: "Common mistakes",
     body: [
      {
       table: [
        [
         "✗ Mistake",
         "✓ Correct",
         "Why"
        ],
        [
         "話せるために",
         "話せるように",
         "A potential form is a state, not an action you do: ように."
        ],
        [
         "見えるために、大きく書く",
         "見えるように、大きく書く",
         "見える happens to the reader: ように."
        ],
        [
         "[健康]{けんこう}ために",
         "[健康]{けんこう}のために",
         "A noun needs の before ために."
        ],
        [
         "[健康]{けんこう}のように歩く",
         "[健康]{けんこう}のために歩く",
         "Noun + のように means “like”, not “for”."
        ],
        [
         "[泳]{およ}げるになりました",
         "[泳]{およ}げるようになりました",
         "A verb needs よう before になる."
        ],
        [
         "見ないようになった",
         "見なくなった",
         "～ないようになる exists, but the natural everyday way to say “stopped doing” is ～なくなる."
        ]
       ]
      },
      "One more thing to watch: ～ようにする and ～ようになる look alike, but the difference is who is in control. 早く[寝]{ね}るようにしています: I make a point of going to bed early (my effort). 早く[寝]{ね}るようになりました: I’ve started going to bed early (a change, perhaps because of a new job). Lesson 2 adds a third look-alike, ～ことになる."
     ]
    }
   ],
   try: [
    {
     id: "e3u9-l1-x1",
     type: "mcq",
     q: "Fatima is giving a talk in a large room. She says: 「後ろの[席]{せき}の人にも見える（　）、字を大きく書きます。」 Which word fits the gap?",
     options: [
      {
       t: "ように",
       ok: true,
       why: "Right. 見える (be visible) is not something the people at the back do on purpose; it happens if the writing is big enough. And the subjects differ: they see, she writes."
      },
      {
       t: "ために",
       why: "ために needs an action the subject chooses, done by the same person in both halves. 見える happens to the people at the back, so ように fits."
      },
      {
       t: "のために",
       why: "のために follows a noun ([健康]{けんこう}のために). After a verb, の is not used, and the meaning here needs ように anyway."
      },
      {
       t: "ようになる",
       why: "～ようになる describes a change over time and ends a clause or sentence. Here the first half is the reason for writing big: ように."
      }
     ]
    },
    {
     id: "e3u9-l1-x2",
     type: "sort",
     q: "Choose the word for each gap, using the two-question test.",
     buckets: [
      "ために",
      "ように"
     ],
     items: [
      {
       t: "家を買う（　）、お金を[貯]{た}めています。",
       b: 0,
       why: "買う is an action you choose, and the same person saves and buys: ために."
      },
      {
       t: "[留学]{りゅうがく}する（　）、アルバイトをしています。",
       b: 0,
       why: "Studying abroad is a goal the speaker acts on, and the same person does both: ために."
      },
      {
       t: "[健康]{けんこう}の（　）、毎朝歩いています。",
       b: 0,
       why: "After noun + の, only ために works: [健康]{けんこう}のために (for my health)."
      },
      {
       t: "子どもが[一人]{ひとり}で読める（　）、ひらがなで書きました。",
       b: 1,
       why: "読める is a potential form, and the child reads while the adult writes: ように."
      },
      {
       t: "道が分かる（　）、地図を送ります。",
       b: 1,
       why: "分かる (understand, know) happens to you; you can’t choose to understand: ように."
      },
      {
       t: "電車に[間]{ま}に[合]{あ}う（　）、タクシーに[乗]{の}りました。",
       b: 1,
       why: "[間]{ま}に[合]{あ}う (be in time) is a result, not an action: ように."
      }
     ]
    },
    {
     id: "e3u9-l1-x3",
     type: "match",
     q: "Match each sentence with its meaning.",
     pairs: [
      [
       "[野菜]{やさい}を食べるようにしています。",
       "I make a point of eating vegetables.",
       "～ようにしている: an effort you keep up."
      ],
      [
       "[野菜]{やさい}が食べられるようになりました。",
       "I’ve become able to eat vegetables.",
       "Potential + ようになる: “become able to”."
      ],
      [
       "[野菜]{やさい}を食べるようになりました。",
       "I’ve started eating vegetables.",
       "Ordinary verb + ようになる: a new habit."
      ],
      [
       "[野菜]{やさい}を食べるように言われました。",
       "I was told to eat vegetables.",
       "～ように言う reports an instruction; here in the passive, “I was told”."
      ],
      [
       "[野菜]{やさい}を食べなくなりました。",
       "I’ve stopped eating vegetables.",
       "～なくなる: a habit has stopped."
      ]
     ]
    },
    {
     id: "e3u9-l1-x4",
     type: "mcq",
     q: "When Min arrived in Japan, she couldn’t read a newspaper. Now, after two years, she can. How does she say this?",
     options: [
      {
       t: "新聞が読めるようになりました。",
       ok: true,
       why: "Right. Potential form + ようになりました describes a change in ability: “I’ve become able to read newspapers.”"
      },
      {
       t: "新聞が読めるようにしました。",
       why: "～ようにする means making an effort or arranging things so that something is possible. It doesn’t describe a change that came about over two years."
      },
      {
       t: "新聞が読めることになりました。",
       why: "～ことになる reports a decision made by others or by circumstances (Lesson 2). An ability isn’t decided."
      },
      {
       t: "新聞が読めるになりました。",
       why: "A verb can’t go straight before になる. It needs よう: 読めるようになりました."
      }
     ]
    },
    {
     id: "e3u9-l1-x5",
     type: "spot",
     q: "Luca wrote about his running. Tap each mistake with ために, ように, ようにする or ようになる.",
     ask: "is wrong",
     parts: [
      "去年から、[健康]{けんこう}の",
      {
       t: "ように",
       flag: true,
       why: "After a noun + の, “for” is のために: [健康]{けんこう}のために. Noun + のように means “like”."
      },
      "、毎朝走る",
      {
       t: "ようにしています",
       flag: false,
       why: "Fine: ～ようにしている describes a habit he keeps up on purpose."
      },
      "。[最初]{さいしょ}は五分しか走れませんでしたが、今は三十分走れる",
      {
       t: "ようになりました",
       flag: false,
       why: "Fine: potential + ようになりました, a change in ability."
      },
      "。来年はマラソンに出る",
      {
       t: "ために",
       flag: false,
       why: "Fine: entering a marathon is a goal he acts on, and he is the subject of both halves."
      },
      "、[週末]{しゅうまつ}も[練習]{れんしゅう}しています。夜は車からよく見える",
      {
       t: "ために",
       flag: true,
       why: "見える (be visible) is not an action he does; drivers see him if his clothes are bright. Use ように: よく見えるように."
      },
      "、明るい色の服を着ています。"
     ]
    },
    {
     id: "e3u9-l1-x6",
     type: "order",
     q: "Build the polite instruction “Please make sure you don’t forget your passport” from [忘]{わす}れる. Put the steps in order.",
     items: [
      {
       t: "Start with the verb: パスポートを[忘]{わす}れる.",
       why: "First the plain verb and its object."
      },
      {
       t: "Make the ない-form: [忘]{わす}れない.",
       why: "“Don’t forget” needs the negative, and ichidan [忘]{わす}れる drops る and adds ない."
      },
      {
       t: "Add ように: [忘]{わす}れないように.",
       why: "ない-forms take ように, “so that… not”."
      },
      {
       t: "Add して: [忘]{わす}れないようにして.",
       why: "ようにする in the て-form, ready for a request."
      },
      {
       t: "Add ください: パスポートを[忘]{わす}れないようにしてください。",
       why: "Last, ください makes it a polite instruction."
      }
     ]
    },
    {
     id: "e3u9-l1-x7",
     type: "mcq",
     q: "Sara moved to a flat with a nice kitchen. She didn’t plan it, but now she cooks every day. Which sentence describes this change?",
     options: [
      {
       t: "毎日料理するようになりました。",
       ok: true,
       why: "Right. ～ようになる describes a new habit that came about, without stressing a decision or an effort."
      },
      {
       t: "毎日料理するようにしました。",
       why: "～ようにする stresses a deliberate effort: “I made a point of cooking”. Sara didn’t plan it, so ～ようになる fits."
      },
      {
       t: "毎日料理することにしました。",
       why: "～ことにする means “I decided to” (Lesson 2). The question says she didn’t plan it."
      },
      {
       t: "毎日料理するために、なりました。",
       why: "This isn’t a sentence: ために needs a second half that says what you do for the goal."
      }
     ]
    }
   ],
   apply: {
    intro: "Keep these notes for yourself. Short, real sentences about your own life are the fastest way to make these patterns stick.",
    tasks: [
     {
      t: "Goals and hoped-for results",
      how: [
       "Write three sentences with ～ために about real goals: 日本へ行くために、お金を[貯]{た}めています。",
       "Write three sentences with ～ように, using a potential form, a verb like 分かる or [間]{ま}に[合]{あ}う, and a ない-form.",
       "For each sentence, run the two-question test and write “Q1 yes/no, Q2 yes/no” beside it."
      ],
      write: "〜ために… 〜ように…"
     },
     {
      t: "Then and now",
      how: [
       "Think of how your life has changed in the last few years. Write four sentences with ～ようになりました: two with potential forms (things you can do now) and two with ordinary verbs (new habits).",
       "Write one sentence with ～なくなりました about something you have stopped doing.",
       "Then write three habits you keep up with ～ようにしています, including one with ～ないようにしています."
      ],
      write: "前は…。今は…ようになりました。"
     },
     {
      t: "Find ように in the wild",
      how: [
       "Look at Japanese notices: a station or library website, a product manual, or the rules page of a gym or shop.",
       "Find two examples of ～ようにしてください or ～ないようにしてください and translate them.",
       "If you visit a shrine or see photos of [絵馬]{えま} online, read a few wishes ending in ～ますように."
      ],
      write: "〜ようにしてください = Please make sure…"
     }
    ],
    proof: "Six purpose sentences with the test marked, four “then and now” sentences, three habit sentences, and two translated instructions from real notices."
   },
   read: [
    {
     book: "taekim",
     where: "Essential Grammar, “Using する and なる with the に particle”, section “Using 「なる」 and 「する」 with verbs”",
     note: "ようになる for changes (with potential verbs) and ようにする for making an effort; the same section covers ことになる and ことにする from Lesson 2."
    },
    {
     book: "irodori",
     where: "Elementary 2, Lessons 10 “What kind of clothes should I wear?” (V-るように、～ / V-ないように、～), 14 “Will you cut my bangs a little shorter?” (Nのために、～), 16 “Do not panic in case of an earthquake.” (V-ないようにしてください), 17 “I can speak Japanese better than before.” (V-（られ）るようになりました) and 18 “I am thinking about starting my own company in the future.” (V-るために、～)",
     note: "Each pattern in an everyday situation, with audio."
    }
   ]
  },
  {
   id: "e3u9-l2",
   title: "Decisions and timing: ～ことにする, ～ことになる, ～ところ, ～たばかり",
   minutes: 60,
   hook: {
    q: "A colleague tells you: 「来月から[大阪]{おおさか}の[支社]{ししゃ}で[働]{はたら}くことになりました。」 (I’m going to be working at the Osaka branch from next month.) Who most likely made this decision?",
    options: [
     "She did, entirely on her own",
     "Most likely her company",
     "You, the person she is talking to",
     "Nobody yet: it is only an idea"
    ],
    answer: 1,
    reveal: "**Most likely her company.** ～ことになりました means “it has been decided that…” or “it has turned out that…”: the decision is presented as coming from outside the speaker, here probably her employer. Had she decided by herself, the usual choice would be ～ことにしました, “I decided to…”. People do sometimes use ～ことになりました for their own decisions, to announce them modestly; this lesson shows when. Then it turns to timing: “about to”, “in the middle of” and “just did”."
   },
   goals: [
    "Say what you decided with ～ことにする, and what was decided for you with ～ことになる",
    "Describe personal rules with ～ことにしている and official rules or arrangements with ～ことになっている",
    "Describe the moment of an action with ～るところ, ～ているところ and ～たところ",
    "Say “almost happened” with ～るところだった",
    "Use ～たばかり for something that happened only a short time ago, and tell it from ～たところ",
    "Tell ～たばかり (just did) from ～てばかりいる (does nothing but)"
   ],
   learn: [
    {
     h: "Who decided?",
     body: [
      {
       lead: "English “decide” and “it was decided” are easy to tell apart. Japanese does the same job with two tiny verbs after こと: する (do, make) and なる (become)."
      },
      "You met the pair する and なる in Lesson 1: ～ようにする (you steer) and ～ようになる (it changed). こと works the same way. こと turns a verb into “the matter of doing it”, and then:",
      {
       table: [
        [
         "Pattern",
         "Literal idea",
         "Meaning"
        ],
        [
         "～ことにする",
         "make it the matter of doing",
         "I (we) decide to"
        ],
        [
         "～ことになる",
         "it becomes the matter of doing",
         "it is decided; it turns out that"
        ],
        [
         "noun + にする",
         "make it X",
         "choose X, go with X"
        ]
       ]
      },
      "You already know the last row from ordering and making plans: コーヒーにします (I’ll have coffee), それにしよう (let’s go with that) in {{volitional-form}}. ～ことにする is the same idea with a whole action as the choice.",
      "Both patterns take the dictionary form or the ない-form before こと: 行くことにした, 行かないことにした."
     ]
    },
    {
     h: "～ことにする: I decided",
     body: [
      "[[koto-ni-suru|～ことにする]] reports a decision by the speaker (or by “we”, a group the speaker belongs to). The past ～ことにしました is the most common form: “I decided to”, “I’ve decided to”.",
      {
       ex: "来年、大学院に[進]{すす}むことにしました。\nI’ve decided to go on to graduate school next year.\n\n[今日]{きょう}は早く[寝]{ね}ることにします。\nI think I’ll go to bed early today. (deciding now)\n\nもうお[酒]{さけ}は飲まないことにしました。\nI’ve decided not to drink alcohol any more.\n\n雨なので、買い物には[明日]{あした}行くことにしました。\nIt’s raining, so we’ve decided to go shopping tomorrow instead.",
       label: "ことにする"
      },
      "The non-past ～ことにします often means you are deciding right now, as you speak: [今日]{きょう}は早く[寝]{ね}ることにします sounds like “Right, I’ll go to bed early today.”",
      "Compare this with つもり ([[tsumori]]). つもりです describes an intention you hold; ～ことにしました reports the moment a choice was made. They often appear together: 日本で[働]{はたら}くことにしました。来年から仕事を[探]{さが}すつもりです (I’ve decided to work in Japan. I intend to start looking for a job next year)."
     ]
    },
    {
     h: "～ことになる: it was decided, it turned out",
     body: [
      "[[koto-ni-naru|～ことになる]] presents a decision or arrangement as something that came about: decided by other people (a company, a school, a group) or by circumstances.",
      {
       ex: "来月から[大阪]{おおさか}の[支社]{ししゃ}で[働]{はたら}くことになりました。\nI’m going to be working at the Osaka branch from next month. (the company decided)\n\n[次]{つぎ}の[会議]{かいぎ}は木曜日にすることになりました。\nIt’s been decided that the next meeting will be on Thursday.\n\n雨のため、運動会は来週に[延期]{えんき}することになりました。\nBecause of the rain, it’s been decided to postpone the sports day until next week.",
       label: "ことになる"
      },
      "There is one important extra use. People often announce their **own** decisions with ～ことになりました, especially big personal news, to sound modest: the news is presented as the way things worked out, not as “I, I, I”.",
      {
       ex: "[実]{じつ}は、[結婚]{けっこん}することになりました。\nActually, we’re getting married.\n\nこのたび、国へ帰ることになりました。\nI’m going back to my home country.",
       label: "Modest announcements"
      },
      "So ～ことになりました doesn’t prove that someone else decided. But for a personal resolution, such as starting to run or giving up sweets, ～ことにしました is the natural choice, and it is what textbooks recommend for “I decided”."
     ]
    },
    {
     h: "Rules and routines: ～ことにしている, ～ことになっている",
     body: [
      "Add ～ている and both patterns describe something that holds over time.",
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "～ことにしている",
         "a personal rule: I make it a rule to",
         "毎朝三十分歩くことにしています。\nI make it a rule to walk for thirty minutes every morning."
        ],
        [
         "～ことになっている",
         "an official rule, custom or arrangement: is supposed to",
         "この[寮]{りょう}では、夜十時からは[静]{しず}かにすることになっています。\nIn this dormitory, you’re supposed to be quiet from ten at night."
        ]
       ]
      },
      {
       ex: "[寝]{ね}る前は、スマホを見ないことにしています。\nI make it a rule not to look at my phone before bed.\n\n[会議]{かいぎ}は三時に始まることになっています。\nThe meeting is scheduled to start at three.\n\nこの[事務所]{じむしょ}では、入る前に[靴]{くつ}を[脱]{ぬ}ぐことになっています。\nIn this office, you’re supposed to take your shoes off before you go in.",
       label: "Rules and arrangements"
      },
      {
       fig: "<svg viewBox=\"0 0 340 282\"><text x=\"170\" y=\"22\" text-anchor=\"middle\">こと + する / なる</text><text class=\"s\" x=\"118\" y=\"48\" text-anchor=\"middle\">one decision</text><text class=\"s\" x=\"252\" y=\"48\" text-anchor=\"middle\">a rule that holds</text><text class=\"s\" x=\"10\" y=\"104\">I decide</text><text class=\"s\" x=\"10\" y=\"120\">(する)</text><text class=\"s\" x=\"10\" y=\"208\">it is decided</text><text class=\"s\" x=\"10\" y=\"224\">(なる)</text><rect class=\"d-lup\" x=\"74\" y=\"60\" width=\"122\" height=\"96\" rx=\"8\" stroke-width=\"2\"/><text x=\"135\" y=\"98\" text-anchor=\"middle\">ことにした</text><text class=\"s\" x=\"135\" y=\"122\" text-anchor=\"middle\">I decided to</text><rect class=\"d-lup\" x=\"206\" y=\"60\" width=\"126\" height=\"96\" rx=\"8\" stroke-width=\"2\"/><text x=\"269\" y=\"98\" text-anchor=\"middle\">ことにしている</text><text class=\"s\" x=\"269\" y=\"122\" text-anchor=\"middle\">my own rule</text><rect class=\"d-sage\" x=\"74\" y=\"166\" width=\"122\" height=\"96\" rx=\"8\" stroke-width=\"2\"/><text x=\"135\" y=\"204\" text-anchor=\"middle\">ことになった</text><text class=\"s\" x=\"135\" y=\"228\" text-anchor=\"middle\">it was decided</text><rect class=\"d-sage\" x=\"206\" y=\"166\" width=\"126\" height=\"96\" rx=\"8\" stroke-width=\"2\"/><text x=\"269\" y=\"204\" text-anchor=\"middle\">ことになっている</text><text class=\"s\" x=\"269\" y=\"228\" text-anchor=\"middle\">the rule, the plan</text></svg>",
       alt: "A two-by-two grid. Rows: I decide (する) and it is decided (なる). Columns: one decision and a rule that holds. ことにした: I decided to. ことにしている: my own rule. ことになった: it was decided. ことになっている: the rule, the plan.",
       cap: "Two choices make four patterns: who decides (する or なる), and whether it is one decision (～た) or a rule that holds (～ている)."
      },
      "～ことになっている is how Japanese explains rules politely without naming who made them: the rule simply exists. You will see it on websites, in school and workplace rules, and when someone explains a schedule."
     ]
    },
    {
     h: "～ところ: the exact moment",
     body: [
      "[所]{ところ} means “place”. In grammar it is usually written in kana, ところ, and it can mark a **point in time**: where you are in an action. The verb form before it says which point.",
      {
       table: [
        [
         "Form",
         "Point in time",
         "Example"
        ],
        [
         "dictionary form + ところ",
         "just about to",
         "これから出かけるところです。\nI’m just about to go out."
        ],
        [
         "～ている + ところ",
         "right in the middle of",
         "今、[晩]{ばん}ご飯を作っているところです。\nI’m making dinner right now."
        ],
        [
         "～た + ところ",
         "have just done",
         "ちょうど今、駅に着いたところです。\nI’ve just this moment arrived at the station."
        ]
       ]
      },
      {
       fig: "<svg viewBox=\"0 0 340 232\"><defs><marker id=\"e3u9a3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"22\" text-anchor=\"middle\">One action, three moments: たべる</text><path class=\"d-ink\" d=\"M14 112H326\" stroke-width=\"2\" marker-end=\"url(#e3u9a3)\"/><text class=\"s\" x=\"320\" y=\"132\" text-anchor=\"end\">time</text><rect class=\"d-gold\" x=\"118\" y=\"96\" width=\"104\" height=\"32\" rx=\"6\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"117\" text-anchor=\"middle\">eating</text><path class=\"d-ink\" d=\"M108 88V108\" stroke-width=\"2\" marker-end=\"url(#e3u9a3)\"/><text x=\"108\" y=\"56\" text-anchor=\"middle\">たべる</text><text x=\"108\" y=\"74\" text-anchor=\"middle\">ところ</text><path class=\"d-ink\" d=\"M170 88V94\" stroke-width=\"2\"/><text x=\"170\" y=\"56\" text-anchor=\"middle\">たべている</text><text x=\"170\" y=\"74\" text-anchor=\"middle\">ところ</text><path class=\"d-ink\" d=\"M232 88V108\" stroke-width=\"2\" marker-end=\"url(#e3u9a3)\"/><text x=\"244\" y=\"56\" text-anchor=\"middle\">たべた</text><text x=\"244\" y=\"74\" text-anchor=\"middle\">ところ</text><text class=\"s\" x=\"108\" y=\"160\" text-anchor=\"middle\">about to</text><text class=\"s\" x=\"170\" y=\"178\" text-anchor=\"middle\">in the middle</text><text class=\"s\" x=\"244\" y=\"160\" text-anchor=\"middle\">just finished</text><text class=\"s\" x=\"170\" y=\"214\" text-anchor=\"middle\">いま, ちょうど and これから often come with ところ</text></svg>",
       alt: "A timeline with a box labelled eating. An arrow before the box: たべるところ, about to. An arrow at the middle of the box: たべているところ, in the middle. An arrow just after the box: たべたところ, just finished. A note: いま, ちょうど and これから often come with ところ.",
       cap: "The verb form before ところ moves the moment: before the action (dictionary form), during it (～ている) or just after it (～た)."
      },
      "～ところ is often an answer to “what are you doing?” or “can you talk?”, so it comes with time words: 今 (now), ちょうど (just, exactly), これから (from now). It ends in です or だ: [寝]{ね}るところです, [寝]{ね}ているところだ, [寝]{ね}たところです.",
      {
       ex: "A：もしもし、今、[大丈夫]{だいじょうぶ}？\nB：ごめん、今、電車を[降]{お}りるところなの。あとで電話するね。\nA: Hello, is now OK?\nB: Sorry, I’m just about to get off the train. I’ll call you later.",
       label: "On the phone"
      }
     ]
    },
    {
     h: "～ところだった: it almost happened",
     body: [
      "The dictionary form + ところだった (polite ところでした) means something **almost** happened, but didn’t. It often comes with もう少しで (a little more and…) or あぶなく (nearly).",
      {
       ex: "もう少しで電車に[乗]{の}り[遅]{おく}れるところでした。\nI very nearly missed the train.\n\nあぶなく大事なメールを[消]{け}すところだった。\nI nearly deleted an important email.",
       label: "ところだった"
      },
      "Be careful with the tense here. The verb before ところ stays in the dictionary form; only だった shows the past. [乗]{の}り[遅]{おく}れたところでした would mean “I had just missed it”: it really happened."
     ]
    },
    {
     h: "～たばかり: only just (it feels)",
     body: [
      "[[bakari|～たばかり]] follows the た-form, like ～たところ, and also means “just did”. The difference is in **how** recent it is. ～たところ points at the moment straight after an action: seconds or minutes. ～たばかり says that, **to the speaker**, only a short time has passed. That can be minutes, but it can also be weeks or months.",
      {
       ex: "先月買ったばかりのスマホが[壊]{こわ}れました。\nMy phone, which I only bought last month, broke.\n\n日本に[来]{き}たばかりなので、まだ[友達]{ともだち}がいません。\nI’ve only just come to Japan, so I don’t have any friends yet.\n\nさっき食べたばかりなのに、もうお[腹]{なか}がすきました。\nI only just ate, but I’m already hungry.",
       label: "たばかり"
      },
      "Notice what ばかり can do that ところ can’t. It works like a noun: before another noun with の (買ったばかりのスマホ), and with なので, なのに and だから to explain or complain.",
      {
       table: [
        [
         "",
         "～たところ",
         "～たばかり"
        ],
        [
         "How long ago?",
         "right this moment",
         "a short time, as the speaker feels it"
        ],
        [
         "With 先月, 先週…",
         "✗",
         "✓ 先週[引]{ひ}っ[越]{こ}してきたばかりです"
        ],
        [
         "Before a noun",
         "✗",
         "✓ [焼]{や}いたばかりのパン"
        ],
        [
         "Right now",
         "✓ 今、着いたところです",
         "✓ 今、着いたばかりです"
        ]
       ]
      },
      "The last row is a real overlap: for something that has just this moment happened, both are natural. ところ focuses on the timing (“I’m at the point just after arriving”); ばかり on how fresh it is.",
      {
       h: "Don’t mix up ～たばかり and ～てばかり"
      },
      "ばかり has another meaning: “nothing but”, “only”. After a noun, or after a て-form with いる, it describes too much of one thing: 弟はゲームばかりしています (My brother does nothing but play games), 兄は[遊]{あそ}んでばかりいます (My brother does nothing but have fun). The form tells you which: た + ばかり is “just did”; て + ばかりいる is “does nothing but”."
     ]
    },
    {
     h: "Common mistakes",
     body: [
      {
       table: [
        [
         "✗ Mistake",
         "✓ Correct",
         "Why"
        ],
        [
         "行くことをしました",
         "行くことにしました",
         "The pattern is ことにする, with に."
        ],
        [
         "行ったことにしました",
         "行くことにしました",
         "For “decided to go”, use the dictionary form. (～たことにする exists, but it means “pretend that”: 行ったことにする, treat it as if I went.)"
        ],
        [
         "先月[来]{き}たところです",
         "先月[来]{き}たばかりです",
         "たところ is only for “this very moment”."
        ],
        [
         "買ったところのかばん",
         "買ったばかりのかばん",
         "ばかり, not ところ, can modify a noun this way."
        ],
        [
         "[乗]{の}り[遅]{おく}れたところでした (meaning “almost missed”)",
         "[乗]{の}り[遅]{おく}れるところでした",
         "“Almost” uses the dictionary form + ところだった."
        ],
        [
         "食べてばかりです (meaning “just ate”)",
         "食べたばかりです",
         "て + ばかり means “nothing but”."
        ]
       ]
      },
      "The full comparison is in {{koto-ni-suru-naru}} and {{tokoro-and-bakari}}.",
      {
       terms: [
        "koto-ni-suru",
        "koto-ni-naru",
        "ru-tokoro",
        "te-iru-tokoro",
        "ta-tokoro",
        "bakari"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u9-l2-x1",
     type: "mcq",
     q: "Lucía has made up her own mind to start running every morning. She tells a friend about her new resolution: 「[明日]{あした}から毎朝走る___。」",
     options: [
      {
       t: "ことにしました",
       ok: true,
       why: "Right. ～ことにしました reports a decision Lucía made herself."
      },
      {
       t: "ことになりました",
       why: "～ことになりました presents the decision as coming from outside (a coach, a doctor, circumstances). For a personal resolution, use ～ことにしました."
      },
      {
       t: "ところです",
       why: "走るところです means “I’m just about to run”. It describes a moment, not a decision about every morning."
      },
      {
       t: "ばかりです",
       why: "走るばかりです would mean something like “all I do is run”. It isn’t a decision. (～たばかり, after a た-form, means “just did”.)"
      }
     ]
    },
    {
     id: "e3u9-l2-x2",
     type: "sort",
     q: "Sort these sentences by the ending that fits. (Each has its context in brackets.)",
     buckets: [
      "～ことにした",
      "～ことになった",
      "～ことにしている",
      "～ことになっている"
     ],
     items: [
      {
       t: "もう[甘]{あま}いものは食べない___。 (I’ve made up my mind.)",
       b: 0,
       why: "One decision by the speaker: ことにした."
      },
      {
       t: "来年、[留学]{りゅうがく}する___。 (I decided this myself, after thinking for a long time.)",
       b: 0,
       why: "The speaker decided: ことにした."
      },
      {
       t: "四月から[大阪]{おおさか}に[転勤]{てんきん}する___。 (The company has told me.)",
       b: 1,
       why: "Decided by the company: ことになった."
      },
      {
       t: "雨なので、[試合]{しあい}は中止する___。 (The organisers have announced it.)",
       b: 1,
       why: "Decided by other people because of circumstances: ことになった."
      },
      {
       t: "夜八時からはメールを見ない___。 (It’s my own rule.)",
       b: 2,
       why: "A personal rule that holds over time: ことにしている."
      },
      {
       t: "[週末]{しゅうまつ}は[必]{かなら}ず家族に電話する___。 (I always do this; it’s my habit.)",
       b: 2,
       why: "A personal rule: ことにしている."
      },
      {
       t: "この[事務所]{じむしょ}では、[靴]{くつ}を[脱]{ぬ}ぐ___。 (It’s the office rule.)",
       b: 3,
       why: "An official rule: ことになっている."
      },
      {
       t: "[会議]{かいぎ}は三時に始まる___。 (That’s the schedule.)",
       b: 3,
       why: "An arrangement or schedule: ことになっている."
      }
     ]
    },
    {
     id: "e3u9-l2-x3",
     type: "match",
     q: "Match each sentence with its meaning.",
     pairs: [
      [
       "食べるところです",
       "I’m just about to eat.",
       "Dictionary form + ところ: the moment before the action."
      ],
      [
       "食べているところです",
       "I’m in the middle of eating.",
       "～ている + ところ: during the action."
      ],
      [
       "食べたところです",
       "I’ve just this moment finished eating.",
       "～た + ところ: straight after the action."
      ],
      [
       "食べたばかりです",
       "I ate not long ago (and it still feels recent).",
       "～たばかり: the speaker feels little time has passed."
      ],
      [
       "食べてばかりいます",
       "I do nothing but eat.",
       "～てばかりいる: nothing but, too much of one thing."
      ]
     ]
    },
    {
     id: "e3u9-l2-x4",
     type: "mcq",
     q: "Your friend phones just as you are putting your shoes on to go out. She asks if you are at home. You say: 「うん、でも今ちょうど___。」",
     options: [
      {
       t: "出かけるところ",
       ok: true,
       why: "Right. Dictionary form + ところ: you are just about to go out."
      },
      {
       t: "出かけたところ",
       why: "～たところ means you have just gone out. You are still at home."
      },
      {
       t: "出かけているところ",
       why: "出かけている means “is out”, so this doesn’t fit someone who is still at home."
      },
      {
       t: "出かけたばかり",
       why: "～たばかり means you went out a short time ago. You haven’t left yet."
      }
     ]
    },
    {
     id: "e3u9-l2-x5",
     type: "mcq",
     q: "Tomás bought a phone last month, and it has already broken. Which sentence fits? 「先月買った___のスマホが[壊]{こわ}れました。」",
     options: [
      {
       t: "ばかり",
       ok: true,
       why: "Right. ～たばかり covers a period that feels short to the speaker, and it can come before a noun with の."
      },
      {
       t: "ところ",
       why: "～たところ is only for the moment straight after an action, and it isn’t used before a noun like this."
      },
      {
       t: "ことにした",
       why: "～ことにした means “decided to”, and it doesn’t follow the past 買った."
      },
      {
       t: "ようになった",
       why: "～ようになる describes a change in ability or habit. It doesn’t follow the past 買った, and it doesn’t fit the meaning."
      }
     ]
    },
    {
     id: "e3u9-l2-x6",
     type: "spot",
     q: "Sione is messaging a new friend. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "はじめまして！三か月前に日本に",
      {
       t: "[来]{き}たところ",
       flag: true,
       why: "Three months ago is not “this very moment”. Use ～たばかり: 三か月前に日本に[来]{き}たばかりなので…"
      },
      "なので、まだ日本語が[下手]{へた}です。今、",
      {
       t: "[宿題]{しゅくだい}をしているところ",
       flag: false,
       why: "Fine: ～ているところ for something he is in the middle of right now."
      },
      "です。来週から、日本語学校に",
      {
       t: "通うことをしました",
       flag: true,
       why: "The pattern is ～ことにする: 通うことにしました."
      },
      "。学校では、[授業]{じゅぎょう}中は英語を",
      {
       t: "使わないことになっています",
       flag: false,
       why: "Fine: a school rule, so ～ことになっている."
      },
      "。"
     ]
    },
    {
     id: "e3u9-l2-x7",
     type: "mcq",
     q: "Hana says: 「もう少しで大事な[書類]{しょるい}を[捨]{す}てるところでした。」 What happened?",
     options: [
      {
       t: "She very nearly threw away an important document, but didn’t.",
       ok: true,
       why: "Right. Dictionary form + ところだった: it almost happened."
      },
      {
       t: "She had just thrown away an important document.",
       why: "That would be [捨]{す}てたところでした, with the た-form before ところ."
      },
      {
       t: "She was in the middle of throwing it away.",
       why: "That would be [捨]{す}てているところでした."
      },
      {
       t: "She decided to throw it away.",
       why: "That would be [捨]{す}てることにしました."
      }
     ]
    }
   ],
   apply: {
    intro: "These patterns are everywhere in real conversation and in messages. Keep your notes for yourself.",
    tasks: [
     {
      t: "A decisions diary",
      how: [
       "Write three things you decided recently, big or small, with ～ことにしました: [今年]{ことし}は～ことにしました。",
       "Write one thing that was decided for you (by work, school, family or the weather) with ～ことになりました.",
       "Add one sentence with つもり about how you will carry out one of your decisions."
      ],
      write: "～ことにしました… ～ことになりました…"
     },
     {
      t: "Your rules and theirs",
      how: [
       "Write two personal rules with ～ことにしています.",
       "Write two rules or arrangements at your home, workplace, school or a place you know, with ～ことになっています."
      ],
      write: "[寝]{ね}る前は～ことにしています… ～では～ことになっています…"
     },
     {
      t: "Three moments of your day",
      how: [
       "Imagine a friend messages you at three times today. Write your reply each time with ところ: これから～ところ、今～ているところ、ちょうど～たところ.",
       "Write one sentence with ～たばかりなので and one with ～たばかりなのに about something in your own life."
      ],
      write: "これから～ところ… 今～ているところ… ～たばかりなので…"
     }
    ],
    proof: "Four or five decision sentences, four rule sentences, and five timing sentences with ところ and ばかり."
   },
   read: [
    {
     book: "taekim",
     where: "“Using する and なる with the に particle”, section “Using 「なる」 and 「する」 with verbs” (～ことにする, ～ことになる)"
    },
    {
     book: "taekim",
     where: "“Special Expressions with Generic Nouns”, section “Using 「ところ」 as an abstract place”",
     note: "ところ for a point in time: 行くところ (about to go), 終わったところ (just finished)."
    },
    {
     book: "taekim",
     where: "Special Expressions, “Time-specific actions”, section “Expressing what just happened with 「～ばかり」”"
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lessons 1 “What is futsal again?” (V-ることになった), 12 “I need an ambulance.” (V-ることにする) and 16 “I was able to take lots of good photos.” (V-たところだ); Elementary 2, Lesson 1 “I just came to Japan last week.” (V-たばかりです)",
     note: "Each pattern in an everyday situation, with audio."
    }
   ]
  },
  {
   id: "e3u9-l3",
   title: "Should, no wonder, ought to: ～はず, ～わけ, ～べき",
   minutes: 65,
   hook: {
    q: "English “should” has two jobs. In “The train should arrive at three”, it means “I expect it to”. Which Japanese sentence says that?",
    options: [
     "電車は三時に着くはずです。",
     "電車は三時に着くべきです。",
     "電車は三時に着くつもりです。",
     "電車は三時に着くところです。"
    ],
    answer: 0,
    reveal: "**着くはずです.** はず is for what you have good reason to expect. べき is the other “should”, what ought to be done, as in “you should keep your promises”; a train has no duties, so 着くべき sounds odd. つもり is a person’s intention, and ところ marks the moment of an action. This lesson untangles はず, べき, and a third word, わけ, which says that something follows logically."
   },
   goals: [
    "Use ～はず for what you expect from what you know, with its forms for nouns and adjectives",
    "Use ～はずがない (no way) and ～はずだった (was supposed to)",
    "Use ～わけだ to draw a conclusion, to say “no wonder”, and to sum up",
    "Tell ～わけがない (no way) from ～わけではない (it’s not that)",
    "Use ～べき and ～べきではない for what ought (not) to be done, and know when it sounds too strong",
    "Choose between はず, わけ and べき, and recognise where はず and わけ overlap"
   ],
   learn: [
    {
     h: "Three kinds of “should”",
     body: [
      {
       lead: "English “should” and “that means” cover several ideas that Japanese keeps apart. Three N3 words do most of the work: はず, わけ and べき."
      },
      {
       table: [
        [
         "Word",
         "Question it answers",
         "Example"
        ],
        [
         "はず",
         "What do I expect, from what I know?",
         "電車は三時に着くはずです。\nThe train should arrive at three."
        ],
        [
         "わけ",
         "What follows? Why is it so?",
         "[窓]{まど}が開いていた。[寒]{さむ}いわけだ。\nThe window was open. No wonder it’s cold."
        ],
        [
         "べき",
         "What is the right thing to do?",
         "[約束]{やくそく}は[守]{まも}るべきです。\nYou should keep your promises."
        ]
       ]
      },
      "All three behave like nouns: they follow plain forms, and they end in です or だ (or である in writing). That makes their forms easy once you know one of them. In these grammar uses they are usually written in kana, though you will sometimes see the kanji [筈]{はず} and [訳]{わけ}.",
      "Two of them, はず and わけ, are about **reasoning**: they connect facts to a conclusion. The third, べき, is about **values**: what you think is right. Keep that split in mind, and most choices become clear."
     ]
    },
    {
     h: "～はず: what you have reason to expect",
     body: [
      "[[hazu|～はず]] says that, from what you know, something should be the case. It is your judgement, based on facts, timetables or memory, but you haven’t checked yet.",
      {
       table: [
        [
         "Before はず",
         "Form",
         "Example"
        ],
        [
         "verb",
         "plain form",
         "着くはず, 着いたはず, [来]{こ}ないはず"
        ],
        [
         "い-adjective",
         "plain form",
         "安いはず"
        ],
        [
         "な-adjective",
         "な",
         "[静]{しず}かなはず"
        ],
        [
         "noun",
         "の",
         "休みのはず"
        ]
       ]
      },
      {
       ex: "電車は三時に着くはずです。\nThe train should arrive at three. (that’s the timetable)\n\n[鍵]{かぎ}はかばんに入れたはずです。\nI’m sure I put the key in my bag. (from memory)\n\nミンさんは十年日本に住んでいるから、日本語が[上手]{じょうず}なはずです。\nMin has lived in Japan for ten years, so her Japanese must be good.\n\n[今日]{きょう}は日曜日だから、銀行は休みのはずです。\nIt’s Sunday today, so the bank should be closed.",
       label: "はず"
      },
      "はず is about expectation, not intention. For your own plans, use つもり ([[tsumori]]): [明日]{あした}は早く起きるつもりです (I intend to get up early tomorrow). はず about yourself means a schedule or a fact you are relying on: [明日]{あした}は九時に出発するはずです (We’re supposed to leave at nine tomorrow)."
     ]
    },
    {
     h: "はずがない and はずだった",
     body: [
      "**No way.** To say that something can’t be true, put the negative on the whole judgement: ～はずがない (or ～はずはない). It is strong: “there’s no way”, “it can’t be”.",
      {
       ex: "あの[優]{やさ}しい人が、そんなことを言うはずがありません。\nThere’s no way someone that kind would say a thing like that.\n\nこんなに[難]{むずか}しい問題が、[一日]{いちにち}でできるはずがない。\nThere’s no way anyone can do such a hard problem in a day.",
       label: "はずがない"
      },
      "Compare the weaker ～ないはず: ケンさんは[来]{こ}ないはずです (I expect Ken isn’t coming) is a calm expectation. ケンさんが[来]{く}るはずがありません (there’s no way Ken is coming) rules it out.",
      "**Was supposed to.** The past ～はずだった (～はずでした) describes an expectation that didn’t come true. It is very common with が or のに after it.",
      {
       ex: "[荷物]{にもつ}は[昨日]{きのう}[届]{とど}くはずでしたが、まだ[来]{き}ません。\nThe parcel was supposed to arrive yesterday, but it hasn’t come yet.\n\n三時に着くはずだったのに、[事故]{じこ}で一時間[遅]{おく}れた。\nWe were supposed to arrive at three, but we were an hour late because of an accident.",
       label: "はずだった"
      },
      {
       tip: "こんなはずじゃなかった (this isn’t how it was supposed to go) is a set phrase you will hear in dramas when plans fall apart. Apart from set phrases like this, use はずがない (no way) or ないはず (I expect not) for the negative. はずじゃない is mainly used in questions that confirm something, such as ～はずじゃないですか (Isn’t it supposed to…?)."
      }
     ]
    },
    {
     h: "～わけ: it follows, that explains it",
     body: [
      "[[wake|～わけ]] means “reason, meaning, the way things are”. As ～わけだ (～わけです), it presents a conclusion that **follows naturally** from facts that are already on the table, facts the listener could connect too.",
      "It attaches like はず: plain forms, な after な-adjectives. Nouns take な too (学生なわけだ), or ～というわけだ; in writing, ～であるわけだ. Note the difference: with はず a noun takes の (学生のはず), but with わけ it takes な.",
      {
       table: [
        [
         "Use",
         "Example",
         "Meaning"
        ],
        [
         "a conclusion that follows",
         "[一日]{いちにち}に二時間勉強するなら、一週間で十四時間勉強するわけですね。",
         "If you study two hours a day, that means fourteen hours a week."
        ],
        [
         "“no wonder”: finding the reason",
         "[窓]{まど}が開いていたのか。どうりで[寒]{さむ}いわけだ。",
         "Oh, the window was open. No wonder it’s cold."
        ],
        [
         "summing up: “so you mean…”",
         "つまり、来月から東京で[働]{はたら}くわけですね。",
         "So that means you’ll be working in Tokyo from next month."
        ]
       ]
      },
      "In the “no wonder” use, notice the order. You already know the fact (it’s cold). You discover the reason (the window). わけだ says “that explains it”. Words like どうりで (no wonder) and それで (that’s why) often come first.",
      {
       ex: "A：ハナさんのお母さんは日本人なんですよ。\nB：そうなんですか。それで日本語が[上手]{じょうず}なわけですね。\nA: Hana’s mother is Japanese, you know.\nB: Really? So that’s why her Japanese is so good.",
       label: "Worked example: that explains it"
      },
      "Is はず possible here? Yes, in this one use: どうりで[寒]{さむ}いはずだ is also natural for “no wonder it’s cold”. This is a real overlap. The difference shows elsewhere: only はず predicts something you haven’t checked (電車は三時に着くはずです), and only わけ sums up what someone has just told you (つまり、～わけですね).",
      "In written Japanese you will also meet ～わけである, the written form of ～わけだ, when a writer draws a conclusion from their own explanation. Sentence endings like this matter a lot in reports ({{sentence-endings-japanese}})."
     ]
    },
    {
     h: "わけがない and わけではない",
     body: [
      "Two negatives of わけ look similar but mean very different things.",
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "～わけがない",
         "no way, it can’t be",
         "そんなに[簡単]{かんたん}に[直]{なお}せるわけがない。\nThere’s no way it can be fixed that easily."
        ],
        [
         "～わけではない",
         "it’s not (necessarily) that…",
         "日本料理が[嫌]{きら}いなわけではありません。\nIt’s not that I dislike Japanese food."
        ]
       ]
      },
      "**～わけがない** is close to ～はずがない, and in most sentences both are natural. Some speakers feel わけがない is a little more emotional and conversational, and はずがない a little more like a judgement from facts, but the meanings overlap heavily.",
      "**～わけではない** is a partial negation: it denies a conclusion the listener might draw, without denying everything. It often comes before an explanation with ただ (it’s just that) or が.",
      {
       ex: "日本料理が[嫌]{きら}いなわけではありません。ただ、生の魚が[苦手]{にがて}なんです。\nIt’s not that I dislike Japanese food. It’s just that I’m not good with raw fish.\n\nいつも[暇]{ひま}なわけではないけど、[今日]{きょう}は時間がある。\nIt’s not as if I’m always free, but today I have time.",
       label: "わけではない"
      },
      "Unit 10 looks at partial negation in more depth, with ～わけではない and ～ことはない ([[wake-de-wa-nai]], {{partial-negation}}). You may also meet ～わけにはいかない, “I can’t very well…”: [明日]{あした}は大事な試験だから、休むわけにはいきません (I have an important exam tomorrow, so I can’t very well take the day off)."
     ]
    },
    {
     h: "～べき: what ought to be done",
     body: [
      "[[beki|～べき]] says what is right or proper: “should”, “ought to”. Put the dictionary form before it. With する, both するべき and すべき are used.",
      {
       table: [
        [
         "Meaning",
         "Form",
         "Example"
        ],
        [
         "should",
         "dictionary form + べきだ",
         "[約束]{やくそく}は[守]{まも}るべきです。"
        ],
        [
         "should (する)",
         "するべき / すべき",
         "もっと[練習]{れんしゅう}するべきだ。 / もっと[練習]{れんしゅう}すべきだ。"
        ],
        [
         "should not",
         "dictionary form + べきではない",
         "人の悪口を言うべきではありません。"
        ],
        [
         "should have",
         "dictionary form + べきだった",
         "もっと早く[予約]{よやく}するべきだった。"
        ]
       ]
      },
      {
       ex: "[約束]{やくそく}は[守]{まも}るべきです。\nYou should keep your promises.\n\n[若]{わか}いうちに、いろいろな[経験]{けいけん}をするべきだと思います。\nI think people should have all kinds of experiences while they’re young.\n\nもっと早く[予約]{よやく}するべきだった。\nI should have booked earlier.",
       label: "べき"
      },
      "The negative is べきではない, “should not”. Textbooks teach this form; avoid ✗ ～ないべきです.",
      {
       warn: "べき is strong. It states a duty or a principle, so it is mostly used about yourself, about people in general, or in opinions. Said directly to someone, especially a superior, it can sound like a lecture. For friendly advice, use ～たほうがいい: 病院に行ったほうがいいですよ (You’d better see a doctor). Tae Kim notes that べき doesn’t fit a suggestion like “you should go to the doctor”; it sounds more like “you are supposed to”."
      },
      "Softening helps when you give an opinion: ～べきだと思います (I think we should) is far more common in polite speech than a bare ～べきです."
     ]
    },
    {
     h: "Which one? はず, わけ, べき",
     body: [
      {
       fig: "<svg viewBox=\"0 0 340 330\"><defs><marker id=\"e3u9a4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"22\" text-anchor=\"middle\">Facts, conclusions and values</text><rect class=\"d-panel\" x=\"10\" y=\"40\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text class=\"s\" x=\"62\" y=\"66\" text-anchor=\"middle\">what I know</text><text class=\"s\" x=\"62\" y=\"84\" text-anchor=\"middle\">(timetable,</text><text class=\"s\" x=\"62\" y=\"100\" text-anchor=\"middle\">memory)</text><path class=\"d-ink\" d=\"M116 80H150\" stroke-width=\"2\" marker-end=\"url(#e3u9a4)\"/><rect class=\"d-lup\" x=\"154\" y=\"40\" width=\"176\" height=\"80\" rx=\"8\" stroke-width=\"2\"/><text x=\"242\" y=\"68\" text-anchor=\"middle\">はず</text><text class=\"s\" x=\"242\" y=\"88\" text-anchor=\"middle\">an expectation,</text><text class=\"s\" x=\"242\" y=\"104\" text-anchor=\"middle\">not checked yet</text><rect class=\"d-panel\" x=\"10\" y=\"136\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text class=\"s\" x=\"62\" y=\"162\" text-anchor=\"middle\">facts on</text><text class=\"s\" x=\"62\" y=\"180\" text-anchor=\"middle\">the table</text><text class=\"s\" x=\"62\" y=\"196\" text-anchor=\"middle\">(what I see)</text><path class=\"d-ink\" d=\"M116 176H150\" stroke-width=\"2\" marker-end=\"url(#e3u9a4)\"/><rect class=\"d-sage\" x=\"154\" y=\"136\" width=\"176\" height=\"80\" rx=\"8\" stroke-width=\"2\"/><text x=\"242\" y=\"164\" text-anchor=\"middle\">わけ</text><text class=\"s\" x=\"242\" y=\"184\" text-anchor=\"middle\">it follows; that</text><text class=\"s\" x=\"242\" y=\"200\" text-anchor=\"middle\">explains it</text><rect class=\"d-panel\" x=\"10\" y=\"232\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text class=\"s\" x=\"62\" y=\"262\" text-anchor=\"middle\">what I think</text><text class=\"s\" x=\"62\" y=\"280\" text-anchor=\"middle\">is right</text><path class=\"d-ink\" d=\"M116 272H150\" stroke-width=\"2\" marker-end=\"url(#e3u9a4)\"/><rect class=\"d-gold\" x=\"154\" y=\"232\" width=\"176\" height=\"80\" rx=\"8\" stroke-width=\"2\"/><text x=\"242\" y=\"260\" text-anchor=\"middle\">べき</text><text class=\"s\" x=\"242\" y=\"280\" text-anchor=\"middle\">what ought to</text><text class=\"s\" x=\"242\" y=\"296\" text-anchor=\"middle\">be done</text></svg>",
       alt: "Three rows. What I know, such as a timetable or memory, leads to はず: an expectation, not checked yet. Facts on the table, what I see, lead to わけ: it follows; that explains it. What I think is right leads to べき: what ought to be done.",
       cap: "はず and わけ both reason from facts: はず looks ahead to something not yet confirmed, わけ makes sense of what is already known. べき is about values, not facts."
      },
      {
       h: "Common mistakes"
      },
      {
       table: [
        [
         "✗ Mistake",
         "✓ Correct",
         "Why"
        ],
        [
         "休みなはずです",
         "休みのはずです",
         "Nouns take の before はず."
        ],
        [
         "安いなはずです",
         "安いはずです",
         "い-adjectives attach directly."
        ],
        [
         "行かないべきです",
         "行くべきではありません",
         "The negative is べきではない."
        ],
        [
         "[来]{く}るはずではない (meaning “no way”)",
         "[来]{く}るはずがない",
         "“No way” is はずがない."
        ],
        [
         "[明日]{あした}は早く起きるはずです (as a resolution)",
         "[明日]{あした}は早く起きるつもりです",
         "はず is expectation; つもり is intention."
        ],
        [
         "病院に行くべきですよ (gentle advice)",
         "病院に行ったほうがいいですよ",
         "べき is too strong for friendly advice."
        ],
        [
         "[嫌]{きら}いなわけがない (meaning “it’s not that I dislike it”)",
         "[嫌]{きら}いなわけではない",
         "わけがない = no way; わけではない = it’s not that."
        ]
       ]
      },
      "These three words make your Japanese sound much more natural, because they let you show **how** you know something and **why** you think it. The full comparison is in {{hazu-wake-beki}}.",
      {
       terms: [
        "hazu",
        "wake",
        "beki",
        "tsumori"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u9-l3-x1",
     type: "mcq",
     q: "It’s Sunday, and you expect the bank to be closed. Choose the ending: 「[今日]{きょう}は日曜日だから、銀行は休み___。」",
     options: [
      {
       t: "のはずです",
       ok: true,
       why: "Right. An expectation from what you know, and a noun (休み) takes の before はず."
      },
      {
       t: "なはずです",
       why: "な is for な-adjectives. 休み is a noun, so it takes の: 休みのはずです."
      },
      {
       t: "のべきです",
       why: "べき is about what ought to be done, and it follows a verb’s dictionary form, not a noun with の."
      },
      {
       t: "べきです",
       why: "べき means “ought to”. A bank being closed on Sunday is an expectation, not a duty."
      }
     ]
    },
    {
     id: "e3u9-l3-x2",
     type: "mcq",
     q: "A parcel was supposed to arrive yesterday, but it hasn’t. Choose the ending: 「[荷物]{にもつ}は[昨日]{きのう}[届]{とど}く___が、まだ[来]{き}ません。」",
     options: [
      {
       t: "はずでした",
       ok: true,
       why: "Right. ～はずだった (～はずでした) is an expectation that didn’t come true."
      },
      {
       t: "べきでした",
       why: "～べきだった means “should have (done the right thing)”, a regret about duty. A parcel arriving isn’t a duty."
      },
      {
       t: "わけでした",
       why: "わけ draws a conclusion from facts; it isn’t used for a broken expectation like this."
      },
      {
       t: "ところでした",
       why: "Dictionary form + ところでした means “almost”: the parcel almost arrived. That isn’t what happened."
      }
     ]
    },
    {
     id: "e3u9-l3-x3",
     type: "sort",
     q: "Which word fits each sentence? (The context is in brackets.)",
     buckets: [
      "はず",
      "わけ",
      "べき"
     ],
     items: [
      {
       t: "[鍵]{かぎ}はかけた___です。 (I’m sure I locked it; I remember.)",
       b: 0,
       why: "An expectation from memory: はず."
      },
      {
       t: "ミンさんは十年日本に住んでいるから、この[言葉]{ことば}を知っている___です。 (I expect so.)",
       b: 0,
       why: "An expectation from facts you know: はず."
      },
      {
       t: "つまり、四月から新しい仕事を始める___ですね。 (Summing up what a friend just told you.)",
       b: 1,
       why: "Summing up what you have just heard: つまり～わけですね."
      },
      {
       t: "つまり、会社をやめる___ですか。 (Checking what your colleague means.)",
       b: 1,
       why: "“So you mean…?”: わけ restates the conclusion of what was said."
      },
      {
       t: "[約束]{やくそく}は[守]{まも}る___です。 (A principle.)",
       b: 2,
       why: "What ought to be done: べき."
      },
      {
       t: "人の悪口は言う___ではありません。 (What people shouldn’t do.)",
       b: 2,
       why: "Should not: べきではない."
      },
      {
       t: "もっと勉強する___でした。 (My regret.)",
       b: 2,
       why: "Should have: べきだった."
      }
     ]
    },
    {
     id: "e3u9-l3-x4",
     type: "mcq",
     q: "A friend offers you sushi, and you don’t want it. You explain: “It’s not that I dislike Japanese food. It’s just raw fish I can’t handle.” 「日本料理が[嫌]{きら}いな___。ただ、生の魚が[苦手]{にがて}なんです。」",
     options: [
      {
       t: "わけではありません",
       ok: true,
       why: "Right. ～わけではない denies a conclusion your friend might draw (that you dislike all Japanese food) without denying everything."
      },
      {
       t: "わけがありません",
       why: "～わけがない means “there’s no way”. “There’s no way I dislike Japanese food” doesn’t fit the explanation that follows."
      },
      {
       t: "はずがありません",
       why: "～はずがない also means “there’s no way”. You are not ruling something out; you are correcting a wrong impression."
      },
      {
       t: "べきではありません",
       why: "～べきではない means “shouldn’t”, and it follows a verb’s dictionary form. It doesn’t fit here."
      }
     ]
    },
    {
     id: "e3u9-l3-x5",
     type: "spot",
     q: "Kenji wrote these notes for a debate. Tap each phrase that is **wrong** in form.",
     ask: "is wrong",
     parts: [
      "このレストランは駅から[遠]{とお}いので、",
      {
       t: "安いなはず",
       flag: true,
       why: "い-adjectives attach directly to はず: 安いはず."
      },
      "です。でも、味はいい",
      {
       t: "はず",
       flag: false,
       why: "Fine: an い-adjective + はず."
      },
      "です。店の人はもっと[宣伝]{せんでん}",
      {
       t: "すべき",
       flag: false,
       why: "Fine: すべき is a standard short form of するべき."
      },
      "だと思います。でも、[値段]{ねだん}は",
      {
       t: "上げないべき",
       flag: true,
       why: "The negative of べき is べきではない: 上げるべきではない."
      },
      "です。それに、月曜日は",
      {
       t: "休みのはず",
       flag: false,
       why: "Fine: a noun takes の before はず."
      },
      "です。"
     ]
    },
    {
     id: "e3u9-l3-x6",
     type: "mcq",
     q: "Your friend Priya has had a cough for two weeks. You want to suggest, kindly, that she sees a doctor. Which is the best choice?",
     options: [
      {
       t: "病院に行ったほうがいいよ。",
       ok: true,
       why: "Right. ～たほうがいい is the usual way to give friendly advice."
      },
      {
       t: "病院に行くべきだよ。",
       why: "べき states a duty or principle. To a friend with a cough it can sound like a lecture, not a kind suggestion."
      },
      {
       t: "病院に行くはずだよ。",
       why: "はず is an expectation: “you’re expected to go (by some plan)”. It isn’t advice."
      },
      {
       t: "病院に行くわけだよ。",
       why: "わけ draws a conclusion (“that means you go”). It doesn’t make a suggestion."
      }
     ]
    },
    {
     id: "e3u9-l3-x7",
     type: "mcq",
     q: "The room is freezing. Then you notice the heating is switched off. What do you say?",
     options: [
      {
       t: "どうりで[寒]{さむ}いわけだ。",
       ok: true,
       why: "Right. You knew it was cold and have just found the reason: わけだ, “no wonder”. (どうりで[寒]{さむ}いはずだ is also natural here.)"
      },
      {
       t: "どうりで[寒]{さむ}いべきだ。",
       why: "べき is about what ought to be done. Coldness isn’t a duty."
      },
      {
       t: "どうりで[寒]{さむ}いはずがない。",
       why: "はずがない means “there’s no way it’s cold”, the opposite of what you mean."
      },
      {
       t: "どうりで[寒]{さむ}いところだ。",
       why: "ところ marks the moment of an action. It doesn’t say “no wonder”."
      }
     ]
    }
   ],
   apply: {
    intro: "Keep these notes for yourself. Try to use real facts from your own week.",
    tasks: [
     {
      t: "Expectations",
      how: [
       "Write three はず sentences about things you expect today or this week, from timetables, plans or memory: ～から、～はずです。",
       "Write one ～はずだったのに sentence about something that didn’t go to plan.",
       "Check the form before はず: noun + の, な-adjective + な, everything else plain."
      ],
      write: "～から、～はずです… ～はずだったのに…"
     },
     {
      t: "That explains it",
      how: [
       "Write two short exchanges: someone tells you a fact, and you answer with それで～わけですね or どうりで～わけだ.",
       "Write one つまり～わけですね that sums up something a friend told you."
      ],
      write: "A：… B：それで～わけですね。"
     },
     {
      t: "Your opinions",
      how: [
       "Write three opinions with ～べきだと思います and one with ～べきではないと思います, about your town, school, work or the internet.",
       "Rewrite one of them as friendly advice to a friend with ～たほうがいいよ."
      ],
      write: "～べきだと思います… ～べきではないと思います…"
     }
    ],
    proof: "Four はず sentences, three わけ sentences, and four opinions with べき, one rewritten as friendly advice."
   },
   read: [
    {
     book: "taekim",
     where: "Advanced Topics, “Things that should be a certain way” (sections “Using 「はず」 to describe an expectation” and “Using 「べき」 to describe actions one should do”)",
     note: "Tae Kim explains that べき can’t be used for suggestions like “you should go to the doctor”, and that すべき is the short form of するべき."
    },
    {
     book: "taekim",
     where: "Special Expressions, “Hypothesizing and Concluding”, section “Coming to a conclusion with 「わけ」”",
     note: "Covers わけ for conclusions anyone could reach from the facts, ～わけがない and ～わけにはいかない."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 18 “I would be happy if you would allow me to work there.” (S（plain-form）はずだ)",
     note: "はず in a job-interview setting, with audio. IRODORI doesn’t teach わけ or べき."
    }
   ]
  },
  {
   id: "e3u9-l4",
   title: "Wishes, credit and blame: ～てほしい, ～ばいい, おかげで, せいで, ～ば～ほど",
   minutes: 60,
   hook: {
    q: "A friend “helped” Kenji decorate a cake, and it collapsed. Kenji says, half-laughing: 「[君]{きみ}のおかげで、[全部]{ぜんぶ}だめになったよ。」 How does this sound?",
    options: [
     "Sincerely grateful",
     "Sarcastic: a playful complaint",
     "Neutral: he is just stating the cause",
     "An apology"
    ],
    answer: 1,
    reveal: "**Sarcastic.** おかげで usually means “thanks to”, for good results, so “gratitude” is the natural first guess. With a bad result, though, it turns ironic: “thanks a lot for that”. A Japan Foundation teaching column describes this ironic おかげで as half-joking, while せいで, the word for openly blaming a cause, is a stronger criticism. This lesson covers both, along with wishes about other people (～てほしい), advice and hopes with ～ばいい, and “the more…, the more…”."
   },
   goals: [
    "Say what you want someone else to do, or not do, with ～てほしい and ～ないでほしい",
    "Know why ～てほしい is not a polite request, and what to use instead",
    "Use ～ばいい for “all you need to do”, for hopes, and ～ばいいのに for wishes and gentle complaints",
    "Credit a cause for a good result with おかげで, and blame a cause with せいで (and guess at one with せいか)",
    "Choose between から, ので, ために, おかげで and せいで for causes",
    "Say “the more…, the more…” with ～ば～ほど, for verbs and adjectives"
   ],
   learn: [
    {
     h: "Wanting someone else to do something: ～てほしい",
     body: [
      {
       lead: "You know ～たい for what you want to do (Unit 3) and ほしい for things you want. Put them together with a て-form, and you can say what you want **someone else** to do."
      },
      "Build [[te-hoshii|～てほしい]] from the て-form of the other person’s action + ほしい. The person you want to act takes に. ほしい is an い-adjective, so it conjugates like one: ほしかった, ほしくない.",
      {
       table: [
        [
         "You want",
         "Pattern",
         "Example"
        ],
        [
         "to do it yourself",
         "ます stem + たい",
         "[手伝]{てつだ}いたい (I want to help)"
        ],
        [
         "a thing",
         "noun が ほしい",
         "時間がほしい (I want time)"
        ],
        [
         "someone else to do it",
         "person に + て-form + ほしい",
         "[友達]{ともだち}に[手伝]{てつだ}ってほしい (I want my friend to help)"
        ],
        [
         "someone not to do it",
         "person に + ない-form + でほしい",
         "弟に[部屋]{へや}に入らないでほしい (I don’t want my brother to come into my room)"
        ]
       ]
      },
      {
       ex: "母にはいつまでも元気でいてほしいです。\nI want my mother to stay well for ever.\n\n[友達]{ともだち}に、もっと早く[連絡]{れんらく}してほしかった。\nI wish my friend had got in touch sooner.\n\n子どもには、うそをつかないでほしい。\nI don’t want my children to tell lies.\n\n早く春が[来]{き}てほしいなあ。\nI wish spring would hurry up and come.",
       label: "てほしい"
      },
      "The last example shows that the “other” doesn’t have to be a person. For weather, seasons and events, the thing takes が: 雨がやんでほしい (I want the rain to stop).",
      "For a third person’s wish, use ～てほしがっている or ～てほしいと言っている, just as with ～たい: ミンさんは[両親]{りょうしん}に[来]{き}てほしがっています (Min wants her parents to come)."
     ]
    },
    {
     h: "～てほしい is a wish, not a request",
     body: [
      "～てほしいです tells someone what you want. Said directly to the person who has to act, it can sound like a demand, especially to a teacher, a customer or a boss. To **ask** politely, use the request forms from Unit 6 ({{giving-and-receiving}}):",
      {
       table: [
        [
         "Situation",
         "Natural choice"
        ],
        [
         "to a friend",
         "ちょっと[手伝]{てつだ}ってくれない？"
        ],
        [
         "polite",
         "[手伝]{てつだ}っていただけませんか。"
        ],
        [
         "very polite, formal",
         "[確認]{かくにん}していただきたいのですが…"
        ]
       ]
      },
      "The last row, ～ていただきたい, is the humble partner of ～てほしい; with のですが it becomes a soft, indirect request. Among friends and family, ～てほしいんだけど… is a common, gentle way to ask: ちょっと[手伝]{てつだ}ってほしいんだけど (I’d like you to help a bit, if that’s OK).",
      {
       tip: "～てほしい is perfect for talking **about** people to someone else, and for wishes that can’t be requests at all: [両親]{りょうしん}には長生きしてほしい (I want my parents to live long)."
      }
     ]
    },
    {
     h: "～ばいい: all you need to do, and I hope",
     body: [
      "[[ba-ii|～ばいい]] is the ば-form ([[conditional-ba]]) + いい: literally “if you do X, it’s good”. It has two everyday jobs and a useful extension.",
      {
       table: [
        [
         "Use",
         "Example",
         "Meaning"
        ],
        [
         "“all you need to do”, advice",
         "分からないときは、先生に聞けばいいですよ。",
         "If you don’t understand, just ask the teacher."
        ],
        [
         "asking what to do",
         "この紙に名前を書けばいいですか。",
         "Do I just write my name on this form?"
        ],
        [
         "a hope",
         "[明日]{あした}、[晴]{は}れればいいなあ。",
         "I hope it’s sunny tomorrow."
        ],
        [
         "a wish against reality, or a complaint: ～ばいいのに",
         "もっと早く[寝]{ね}ればいいのに。",
         "You should just go to bed earlier, honestly."
        ]
       ]
      },
      "You met the advice question どうすればいいですか in Unit 6. ～ばいい in answers works the same way: it suggests that one easy step is enough.",
      "For **hopes about other people**, Japanese very often uses と instead of ば: 早く元気になるといいですね (I hope you get well soon), 試験、[合格]{ごうかく}するといいね (I hope you pass). ～たらいい is also common. These overlap a lot; ～といいですね is the most usual when wishing someone well.",
      "**～ばいいのに** adds のに (“but”, Unit 7, [[noni]]): it wishes for something that isn’t so. About yourself it is a wish: 私にも兄弟がいればいいのに (I wish I had brothers and sisters). Said about the listener it often sounds like a mild complaint, so use it with care.",
      "The past version is the regret you met in Unit 6: もっと早く出ればよかった (I should have left earlier)."
     ]
    },
    {
     h: "Credit: ～おかげで",
     body: [
      "[[okage-de|～おかげで]] means “thanks to”. It gives a cause and shows that you are grateful for the good result. The word おかげ originally meant divine grace or protection, which is why it carries a feeling of thanks.",
      {
       table: [
        [
         "Before おかげで",
         "Form",
         "Example"
        ],
        [
         "noun",
         "の",
         "先生のおかげで"
        ],
        [
         "verb",
         "plain form",
         "[薬]{くすり}を飲んだおかげで"
        ],
        [
         "い-adjective",
         "plain form",
         "駅が近いおかげで"
        ],
        [
         "な-adjective",
         "な",
         "[静]{しず}かなおかげで"
        ]
       ]
      },
      {
       ex: "先生のおかげで、試験に[合格]{ごうかく}できました。\nThanks to my teacher, I was able to pass the exam.\n\n[薬]{くすり}を飲んだおかげで、[熱]{ねつ}が下がりました。\nThanks to the medicine, my fever went down.\n\n駅が近いおかげで、[通勤]{つうきん}が楽です。\nThanks to the station being close, my commute is easy.\n\n[合格]{ごうかく}できたのは、先生のおかげです。\nIt’s thanks to my teacher that I passed.",
       label: "おかげで"
      },
      "**おかげさまで** is a set phrase. When someone asks お元気ですか, answering はい、おかげさまで (Yes, thank you) politely thanks them for their concern, even if they did nothing in particular. It is used for good news about yourself: おかげさまで、[無事]{ぶじ}に[卒業]{そつぎょう}できました."
     ]
    },
    {
     h: "Blame: ～せいで, and ～せいか",
     body: [
      "[[sei-de|～せいで]] means “because of”, for a **bad** result, and it puts the blame on the cause. It attaches exactly like おかげで: noun + の, plain forms, な-adjective + な.",
      {
       ex: "[雪]{ゆき}のせいで、電車が[遅]{おく}れました。\nThe train was late because of the snow.\n\n[寝]{ね}る前にコーヒーを飲んだせいで、ゆうべは[眠]{ねむ}れませんでした。\nBecause I drank coffee before bed, I couldn’t sleep last night.\n\n私のせいで、チームが[負]{ま}けてしまいました。\nThe team lost because of me.",
       label: "せいで"
      },
      "The second and third examples show that you can blame yourself, too; the Japan Foundation’s teaching notes give self-criticism as a normal use of せいで. The noun せい also appears in ～のせいにする, “blame it on”: 人のせいにしないでください (Don’t blame other people).",
      "**～せいか** (“perhaps because”) is softer: you suspect a cause but aren’t sure. [疲]{つか}れているせいか、[最近]{さいきん}よく[頭]{あたま}が[痛]{いた}くなる (Maybe because I’m tired, I often get headaches lately)."
     ]
    },
    {
     h: "Choosing a word for “because”",
     body: [
      "Japanese has several ways to give a cause. They differ in how the speaker feels about the result.",
      {
       fig: "<svg viewBox=\"0 0 340 300\"><defs><marker id=\"e3u9a5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker><marker id=\"e3u9a6\" viewBox=\"0 0 10 10\" refX=\"1\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M10 0L0 5L10 10z\"/></marker></defs><text x=\"170\" y=\"22\" text-anchor=\"middle\">How do you feel about the result?</text><path class=\"d-ink\" d=\"M24 60H316\" stroke-width=\"2\" marker-start=\"url(#e3u9a6)\" marker-end=\"url(#e3u9a5)\"/><text class=\"s\" x=\"24\" y=\"48\">bad result</text><text class=\"s\" x=\"316\" y=\"48\" text-anchor=\"end\">good result</text><text class=\"s\" x=\"170\" y=\"48\" text-anchor=\"middle\">no feeling</text><rect class=\"d-rose\" x=\"10\" y=\"78\" width=\"100\" height=\"72\" rx=\"8\" stroke-width=\"2\"/><text x=\"60\" y=\"106\" text-anchor=\"middle\">せいで</text><text class=\"s\" x=\"60\" y=\"126\" text-anchor=\"middle\">blame</text><text class=\"s\" x=\"60\" y=\"142\" text-anchor=\"middle\">せいか: maybe</text><rect class=\"d-panel\" x=\"120\" y=\"78\" width=\"100\" height=\"72\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"104\" text-anchor=\"middle\">から・ので</text><text class=\"s\" x=\"170\" y=\"124\" text-anchor=\"middle\">neutral</text><text class=\"s\" x=\"170\" y=\"140\" text-anchor=\"middle\">ために: formal</text><rect class=\"d-sage\" x=\"230\" y=\"78\" width=\"100\" height=\"72\" rx=\"8\" stroke-width=\"2\"/><text x=\"280\" y=\"106\" text-anchor=\"middle\">おかげで</text><text class=\"s\" x=\"280\" y=\"126\" text-anchor=\"middle\">thanks</text><rect class=\"d-gold\" x=\"10\" y=\"176\" width=\"320\" height=\"104\" rx=\"8\" stroke-width=\"2\"/><text x=\"24\" y=\"202\">おかげで + a bad result</text><text class=\"s\" x=\"24\" y=\"224\">sarcastic, half-joking:</text><text class=\"s\" x=\"24\" y=\"242\">きみの おかげで ぜんぶ だめに なった</text><text class=\"s\" x=\"24\" y=\"262\">milder than せいで</text><path class=\"d-ink\" d=\"M280 150C280 170 200 170 170 176\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#e3u9a5)\"/></svg>",
       alt: "A scale from bad result to good result. On the bad side, せいで: blame; せいか: maybe. In the middle, から and ので: neutral; ために: formal. On the good side, おかげで: thanks. Below, an arrow from おかげで to a box: おかげで with a bad result is sarcastic or half-joking, as in きみの おかげで ぜんぶ だめに なった, and milder than せいで.",
       cap: "から and ので give a cause with no feeling attached. おかげで and せいで always add the speaker’s evaluation: thanks or blame."
      },
      {
       table: [
        [
         "Word",
         "Feeling",
         "Example"
        ],
        [
         "から, ので",
         "neutral",
         "[雪]{ゆき}が[降]{ふ}ったので、電車が[遅]{おく}れました。"
        ],
        [
         "ために",
         "neutral, formal (news, notices)",
         "[大雪]{おおゆき}のために、電車が[遅]{おく}れています。"
        ],
        [
         "おかげで",
         "good result, thanks",
         "先生のおかげで[合格]{ごうかく}できました。"
        ],
        [
         "せいで",
         "bad result, blame",
         "[雪]{ゆき}のせいで電車が[遅]{おく}れました。"
        ]
       ]
      },
      "Choose by the result and your attitude. If you don’t want to blame or thank anyone, ので is always safe. Using おかげで for a plainly bad result, without a joking tone, sounds strange: ✗ 台風のおかげで、家が[壊]{こわ}れました (unless you mean it sarcastically)."
     ]
    },
    {
     h: "The more…, the more…: ～ば～ほど",
     body: [
      "[[ba-hodo|～ば～ほど]] says that as one thing increases, so does another. Say the word twice: first in the ば-form, then in its plain form + ほど.",
      {
       table: [
        [
         "Word type",
         "Pattern",
         "Example"
        ],
        [
         "verb",
         "ば-form + dictionary form + ほど",
         "[練習]{れんしゅう}すればするほど"
        ],
        [
         "い-adjective",
         "～ければ + ～いほど",
         "新しければ新しいほど"
        ],
        [
         "な-adjective",
         "～なら + ～なほど (less common)",
         "[静]{しず}かなら[静]{しず}かなほど"
        ],
        [
         "な-adjective or noun, formal",
         "～であればあるほど",
         "有名であればあるほど"
        ]
       ]
      },
      {
       ex: "日本語は、勉強すればするほど[面白]{おもしろ}くなります。\nThe more you study Japanese, the more interesting it gets.\n\n[野菜]{やさい}は、新しければ新しいほどおいしい。\nThe fresher vegetables are, the better they taste.\n\n考えれば考えるほど、分からなくなりました。\nThe more I thought about it, the less I understood.\n\n話は[短]{みじか}ければ[短]{みじか}いほどいい。\nThe shorter a speech is, the better.",
       label: "ば～ほど"
      },
      "The first part can be dropped, leaving just ～ほど: 考えるほど分からなくなる means the same as the full pattern. You may also hear ～たら～ほど (歩いたら歩くほど), which Tae Kim mentions as a possible variant for verbs; ば is the usual textbook form.",
      "ほど on its own is also a word for degree (“to the extent that”, “as… as”); Unit 10 covers it with くらい ([[hodo-kurai]])."
     ]
    },
    {
     h: "Common mistakes",
     body: [
      {
       table: [
        [
         "✗ Mistake",
         "✓ Correct",
         "Why"
        ],
        [
         "弟は新しいゲームがほしいです",
         "弟は新しいゲームをほしがっています",
         "For a third person, use ほしがっている."
        ],
        [
         "先生、[確認]{かくにん}してほしいです (as a request)",
         "先生、[確認]{かくにん}していただけませんか",
         "～てほしい states your wish; to ask, use a request form."
        ],
        [
         "雨のおかげで、[試合]{しあい}が中止になって[残念]{ざんねん}です",
         "雨のせいで、[試合]{しあい}が中止になって[残念]{ざんねん}です",
         "A bad result you regret: せいで (or neutral ので)."
        ],
        [
         "先生おかげで",
         "先生のおかげで",
         "Nouns take の."
        ],
        [
         "高いほど高ければ",
         "高ければ高いほど",
         "The ば-form comes first, then ほど."
        ],
        [
         "[練習]{れんしゅう}すればしたほど",
         "[練習]{れんしゅう}すればするほど",
         "The second verb is in the dictionary form."
        ]
       ]
      },
      "The full comparison is in {{wishes-and-causes}}.",
      {
       terms: [
        "te-hoshii",
        "ba-ii",
        "okage-de",
        "sei-de",
        "ba-hodo"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u9-l4-x1",
     type: "mcq",
     q: "Your flatmate plays loud music late at night. In a calm talk, you say: “I’d like you not to play music late at night.” Which sentence says that?",
     options: [
      {
       t: "夜[遅]{おそ}くに音楽をかけないでほしいです。",
       ok: true,
       why: "Right. ない-form + でほしい: you want the other person not to do something."
      },
      {
       t: "夜[遅]{おそ}くに音楽をかけたくないです。",
       why: "～たくない is about yourself: “I don’t want to play music.” The person playing it is your flatmate."
      },
      {
       t: "夜[遅]{おそ}くに音楽がほしくないです。",
       why: "Noun + がほしい is about wanting a thing. This says “I don’t want music”, not what you want your flatmate to do."
      },
      {
       t: "夜[遅]{おそ}くに音楽をかけないでほしがっています。",
       why: "～てほしがっている describes a third person’s wish. For your own wish, use ～てほしい."
      }
     ]
    },
    {
     id: "e3u9-l4-x2",
     type: "sort",
     q: "おかげで or せいで? Look at the result in each sentence.",
     buckets: [
      "おかげで",
      "せいで"
     ],
     items: [
      {
       t: "先生が[手伝]{てつだ}ってくれた___、レポートが早く終わりました。",
       b: 0,
       why: "A good result, with thanks to the teacher: おかげで."
      },
      {
       t: "毎日[練習]{れんしゅう}した___、[上手]{じょうず}になりました。",
       b: 0,
       why: "A good result of your own effort: おかげで."
      },
      {
       t: "新しいエアコンの___、夏も[快適]{かいてき}です。",
       b: 0,
       why: "A good result: おかげで."
      },
      {
       t: "台風の___、[飛行機]{ひこうき}が[欠航]{けっこう}になりました。",
       b: 1,
       why: "A bad result, blamed on the typhoon: せいで."
      },
      {
       t: "夜[遅]{おそ}くまでゲームをした___、[授業]{じゅぎょう}中に[眠]{ねむ}くなりました。",
       b: 1,
       why: "A bad result you blame on yourself: せいで."
      },
      {
       t: "[隣]{となり}の工事の___、ゆうべは[眠]{ねむ}れませんでした。",
       b: 1,
       why: "A bad result blamed on the building work: せいで."
      }
     ]
    },
    {
     id: "e3u9-l4-x3",
     type: "match",
     q: "Match each sentence with what the speaker is doing.",
     pairs: [
      [
       "分からなければ、聞けばいいですよ。",
       "giving advice: that’s all you need to do",
       "～ばいい: one easy step is enough."
      ],
      [
       "[明日]{あした}、[晴]{は}れればいいなあ。",
       "hoping for something in the future",
       "～ばいい + なあ: a hope."
      ],
      [
       "もっと早く言えばよかった。",
       "regretting something in the past",
       "～ばよかった: “I should have…”"
      ],
      [
       "もっと早く言えばいいのに。",
       "wishing things were different, with a mild complaint",
       "～ばいいのに: wishing for what isn’t so."
      ],
      [
       "どうすればいいですか。",
       "asking what to do",
       "The advice question from Unit 6."
      ]
     ]
    },
    {
     id: "e3u9-l4-x4",
     type: "mcq",
     q: "Fill the gap to say “The more you practise, the better you get.” 「[練習]{れんしゅう}___、[上手]{じょうず}になります。」",
     options: [
      {
       t: "すればするほど",
       ok: true,
       why: "Right. The ば-form first (すれば), then the dictionary form + ほど (するほど)."
      },
      {
       t: "すればしたほど",
       why: "The second verb stays in the dictionary form: するほど."
      },
      {
       t: "するほどすれば",
       why: "The order is reversed. The ば-form comes first: すればするほど."
      },
      {
       t: "すれば[練習]{れんしゅう}ほど",
       why: "ほど follows a verb or adjective here, not the noun [練習]{れんしゅう}. Repeat the verb: すればするほど."
      }
     ]
    },
    {
     id: "e3u9-l4-x5",
     type: "mcq",
     q: "You need your manager to check a document. Which is the most polite and safest way to ask?",
     options: [
      {
       t: "この[書類]{しょるい}を[確認]{かくにん}していただけませんか。",
       ok: true,
       why: "Right. ～ていただけませんか is a polite request from Unit 6, and suitable for a manager."
      },
      {
       t: "この[書類]{しょるい}を[確認]{かくにん}してほしいです。",
       why: "～てほしいです states your wish directly. To a manager it can sound like a demand rather than a request."
      },
      {
       t: "この[書類]{しょるい}を[確認]{かくにん}したいです。",
       why: "～たい is about yourself: “I want to check this document.” Your manager is the one who should check it."
      },
      {
       t: "この[書類]{しょるい}を[確認]{かくにん}してほしがっています。",
       why: "～てほしがっている describes a third person’s wish, not your own request."
      }
     ]
    },
    {
     id: "e3u9-l4-x6",
     type: "spot",
     q: "Amara wrote a short diary entry. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "[今日]{きょう}は雨の",
      {
       t: "おかげで",
       flag: true,
       why: "The result (a cancelled match) is bad, and Amara is disappointed. Use せいで, or neutral ので: 雨のせいで."
      },
      "、[試合]{しあい}が中止になって[残念]{ざんねん}だった。でも、[友達]{ともだち}が電話をくれた",
      {
       t: "おかげで",
       flag: false,
       why: "Fine: a good result (feeling better) thanks to a friend."
      },
      "、元気が出た。[友達]{ともだち}には、また[試合]{しあい}を",
      {
       t: "見に[来]{き}てほしい",
       flag: false,
       why: "Fine: Amara wants her friend to come and watch: ～てほしい."
      },
      "。[練習]{れんしゅう}は",
      {
       t: "するほどすれば",
       flag: true,
       why: "The order is reversed. The ば-form comes first, then the dictionary form + ほど: すればするほど."
      },
      "、[上手]{じょうず}になると思う。"
     ]
    },
    {
     id: "e3u9-l4-x7",
     type: "mcq",
     q: "Mei says: 「[疲]{つか}れているせいか、[最近]{さいきん}よく[頭]{あたま}が[痛]{いた}くなる。」 What does she mean?",
     options: [
      {
       t: "Maybe because she’s tired, she often gets headaches lately.",
       ok: true,
       why: "Right. ～せいか gives a cause the speaker suspects but isn’t sure of."
      },
      {
       t: "Thanks to being tired, she often gets headaches lately.",
       why: "“Thanks to” is おかげで. せいか points to a cause of a bad result, with doubt."
      },
      {
       t: "She gets headaches so that she can rest.",
       why: "A purpose would use ように or ために. せいか gives a cause."
      },
      {
       t: "She is definitely tired because of her headaches.",
       why: "The cause is tiredness, not the headaches, and か adds doubt: “perhaps because”."
      }
     ]
    }
   ],
   apply: {
    intro: "These patterns are about people and feelings, so they are best practised with your own life. Keep your notes for yourself.",
    tasks: [
     {
      t: "A thank-you message",
      how: [
       "Think of someone who helped you recently.",
       "Write a short message of thanks in Japanese with ～のおかげで: ～さんのおかげで、～ことができました。[本当]{ほんとう}にありがとうございました。",
       "You don’t have to send it, but if the person reads Japanese, it would make a lovely surprise."
      ],
      write: "～さんのおかげで…"
     },
     {
      t: "Wishes for people you care about",
      how: [
       "Write three kind wishes about people in your life with ～てほしい: 家族にはいつも元気でいてほしい。",
       "Write two hopes for a friend with ～といいですね, such as for an exam, a trip or a new job.",
       "Write one ～ばいいのに about your town or your life."
      ],
      write: "～てほしい… ～といいですね… ～ばいいのに…"
     },
     {
      t: "“The more…” slogans",
      how: [
       "Write three ～ば～ほど sentences about learning Japanese or a hobby: 聞けば聞くほど～。",
       "Include one with an い-adjective, and say them aloud."
      ],
      write: "～ば～ほど…"
     }
    ],
    proof: "A thank-you message with おかげで, five or six wishes and hopes, and three ～ば～ほど sentences."
   },
   read: [
    {
     book: "taekim",
     where: "“Desire and Suggestions”, section “Indicating things you want or want done using 「[欲]{ほ}しい」”",
     note: "ほしい with the て-form for things you want done. Tae Kim points to “Making Requests” for polite ways to ask."
    },
    {
     book: "taekim",
     where: "Special Expressions, “Expressing Amounts”, section “Using 「ほど」 to express the extent of something”",
     note: "Includes ～ば～ほど with verbs and い-adjectives, and the rare な-adjective form with なら."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lessons 7 “I hope I can become friends with many people.” (ways to state a hope with ～ば) and 11 “This is a scam email.” (V-てほしいんですが); Elementary 2, Lesson 10 “What kind of clothes should I wear?” (【interrogative】V-ばいいですか？)",
     note: "With audio. IRODORI doesn’t teach おかげで, せいで or ～ば～ほど."
    }
   ]
  },
  {
   id: "e3u9-l5",
   title: "Compound particles: について, にたいして, として, にとって, によって",
   minutes: 65,
   hook: {
    q: "Which particle fills the gap? 「この本は[留学生]{りゅうがくせい}___、とても[役]{やく}に立ちます。」 (This book is very useful for international students.)",
    options: [
     "について",
     "に[対]{たい}して",
     "にとって",
     "として"
    ],
    answer: 2,
    reveal: "**にとって.** English uses “for” here, and Japanese has no single word for “for”. にとって means “for, from the point of view of”, and it goes with words that judge or evaluate, like [役]{やく}に立つ (useful), 大切 (important) or [難]{むずか}しい (difficult). について means “about”, に[対]{たい}して “towards”, and として “as (a role)”. This lesson teaches five of these compound particles and gives you a table for choosing between them."
   },
   goals: [
    "Recognise compound particles: に or と + a verb in its て-form, working like one particle",
    "Use について for the topic of talking, thinking and researching",
    "Use に[対]{たい}して for the target of an attitude or action, and for contrasts",
    "Use として for a role, and としては for “for a…”",
    "Use にとって with evaluations, and know why it can’t go with action verbs",
    "Use によって for “depending on”, means and causes, and recognise によっては and による",
    "Choose between the five with a contrast table, and use their forms before nouns"
   ],
   learn: [
    {
     h: "Particles built from verbs",
     body: [
      {
       lead: "English uses prepositions like “about”, “towards”, “as” and “for”. Japanese often uses compound particles: に or と followed by the て-form of a verb, frozen into one unit."
      },
      "Linguists call these [[fukugou-joshi|compound particles]] ([複合助詞]{ふくごうじょし}). They feel like single particles: you don’t conjugate the verb inside them, and most are written in kana. Here are the five every N3 learner needs.",
      {
       table: [
        [
         "Particle",
         "Built from",
         "Core meaning"
        ],
        [
         "について",
         "に + つく (attach)",
         "about (a topic)"
        ],
        [
         "に[対]{たい}して",
         "に + [対]{たい}する (face)",
         "towards, against; in contrast to"
        ],
        [
         "として",
         "と + する",
         "as (a role or status)"
        ],
        [
         "にとって",
         "に + とる (take)",
         "for, from the point of view of"
        ],
        [
         "によって",
         "に + よる (depend on)",
         "depending on; by means of; because of; by"
        ]
       ]
      },
      "Only に[対]{たい}して is normally written with a kanji. The others are written in kana, because the original verb meanings have faded.",
      {
       h: "Before a noun"
      },
      "Because they end in a て-form, these particles can’t go straight before a noun. Each has a noun-modifying form:",
      {
       table: [
        [
         "Particle",
         "Before a noun",
         "Example"
        ],
        [
         "について",
         "についての",
         "[環境]{かんきょう}についての本 (a book about the environment)"
        ],
        [
         "に[対]{たい}して",
         "に[対]{たい}する (に[対]{たい}しての)",
         "子どもに[対]{たい}する[愛情]{あいじょう} (love for children)"
        ],
        [
         "として",
         "としての",
         "親としての[責任]{せきにん} (responsibility as a parent)"
        ],
        [
         "にとって",
         "にとっての",
         "私にとってのふるさと (what home means to me)"
        ],
        [
         "によって",
         "による",
         "台風による[被害]{ひがい} (damage caused by the typhoon)"
        ]
       ]
      }
     ]
    },
    {
     h: "について: about",
     body: [
      "[[ni-tsuite|について]] marks the **topic or content** of talking, thinking, writing, asking, researching and learning.",
      {
       ex: "日本の[歴史]{れきし}について[調]{しら}べています。\nI’m researching Japanese history.\n\nこの問題について、どう思いますか。\nWhat do you think about this problem?\n\n[将来]{しょうらい}について、[両親]{りょうしん}と話しました。\nI talked with my parents about my future.\n\n[環境]{かんきょう}についての本を読みました。\nI read a book about the environment.",
       label: "について"
      },
      "について goes with verbs of speaking, thinking and knowing: 話す, 考える, [調]{しら}べる, 知る, 聞く, 書く. It doesn’t go with feelings like [好]{す}き or [嫌]{きら}い, which take が: 日本の音楽が[好]{す}きです, not ✗ 日本の音楽について[好]{す}きです.",
      "In very polite speech and business emails, について becomes につきまして: [会議]{かいぎ}の[日程]{にってい}につきまして、ご[連絡]{れんらく}いたします (I’m writing regarding the meeting schedule). See {{keigo-system}} for more."
     ]
    },
    {
     h: "に[対]{たい}して: towards, against, in contrast",
     body: [
      "[[ni-taishite|に[対]{たい}して]] comes from [対]{たい}する, “to face”. It marks the **target** that an attitude, feeling or action is aimed at, often a person.",
      {
       ex: "先生に[対]{たい}して[失礼]{しつれい}なことを言ってはいけません。\nYou mustn’t say rude things to your teacher.\n\nお[客様]{きゃくさま}に[対]{たい}しては、[丁寧]{ていねい}な[言葉]{ことば}を使います。\nWith customers, we use polite language.\n\n新しい[規則]{きそく}に[対]{たい}して、[反対]{はんたい}の意見が多く出ています。\nMany objections have been raised to the new rules.",
       label: "にたいして: the target"
      },
      "It goes naturally with attitudes and reactions: 親切だ (kind), [厳]{きび}しい (strict), [失礼]{しつれい}だ (rude), [反対]{はんたい}する (oppose), [抗議]{こうぎ}する (protest), 答える (answer).",
      "**In contrast.** After a plain form + の, ～のに[対]{たい}して sets two facts against each other. This use is common in writing.",
      {
       ex: "兄は[背]{せ}が高いのに[対]{たい}して、弟は[低]{ひく}い。\nMy older brother is tall, whereas my younger brother is short.",
       label: "にたいして: whereas"
      },
      {
       h: "について or に[対]{たい}して?"
      },
      "について gives the **content**; に[対]{たい}して gives the **target**. A well-known pair from Japanese usage guides makes the difference clear: [息子]{むすこ}について[説明]{せつめい}する is “explain about my son” (he is the content), while [息子]{むすこ}に[対]{たい}して[説明]{せつめい}する is “explain to my son” (he is the person you are explaining to).",
      "With a few verbs, such as 答える, both are possible with a small difference: [生徒]{せいと}の[疑問]{ぎもん}について答える (answer on the content of the students’ questions) and [生徒]{せいと}の[疑問]{ぎもん}に[対]{たい}して答える (answer in response to the questions). With research verbs only について works: ✗ [歴史]{れきし}に[対]{たい}して[調]{しら}べる."
     ]
    },
    {
     h: "として: as (a role)",
     body: [
      "[[to-shite|として]] gives the **role, status or capacity** in which someone or something acts.",
      {
       ex: "[通訳]{つうやく}として[働]{はたら}いています。\nI work as an interpreter.\n\n[交換留学生]{こうかんりゅうがくせい}として日本に[来]{き}ました。\nI came to Japan as an exchange student.\n\n[趣味]{しゅみ}として[絵]{え}を[描]{か}いています。\nI paint as a hobby.",
       label: "として"
      },
      "**としては** adds a comparison with what you would expect from that role: “for a…”, “as far as… goes”.",
      {
       ex: "一年目の学生としては、とても[上手]{じょうず}です。\nFor a first-year student, she is very good.\n\n私としては、来週のほうがいいです。\nAs for me, next week would be better.",
       label: "としては"
      },
      "Before a noun, として becomes としての: 親としての[責任]{せきにん} (my responsibility as a parent). You will also see として in Unit 10’s ～としても (even if, [[to-shite-mo]]), which is a different pattern built from the same pieces."
     ]
    },
    {
     h: "にとって: for, from someone’s point of view",
     body: [
      "[[ni-totte|にとって]] gives the **point of view from which something is judged**. The noun is usually a person or group, and the predicate is an evaluation: 大切, 大事, [必要]{ひつよう}, [難]{むずか}しい, [便利]{べんり}, [役]{やく}に立つ, 問題だ.",
      {
       ex: "私にとって、家族が[一番]{いちばん}大切です。\nFor me, my family is the most important thing.\n\nこの漢字は[初心者]{しょしんしゃ}にとって[難]{むずか}しい。\nThis kanji is hard for beginners.\n\n[留学生]{りゅうがくせい}にとって、アルバイトの[情報]{じょうほう}は大事だ。\nFor international students, information about part-time jobs is important.",
       label: "にとって"
      },
      "**The limit.** にとって introduces a judgement, so it can’t go with action verbs or with stating your own opinion. Say 私はその意見に[賛成]{さんせい}です (I agree with that opinion), not ✗ 私にとって、その意見に[賛成]{さんせい}です. And for kindness shown to someone, use に[対]{たい}して.",
      {
       table: [
        [
         "Sentence",
         "Particle",
         "Why"
        ],
        [
         "私にとって大切な人",
         "にとって",
         "important, from my point of view"
        ],
        [
         "私に[対]{たい}して親切な人",
         "に[対]{たい}して",
         "kind, aimed at me"
        ],
        [
         "[留学生]{りゅうがくせい}にとって[便利]{べんり}なアプリ",
         "にとって",
         "convenient, judged from the students’ side"
        ],
        [
         "[留学生]{りゅうがくせい}として[来]{き}た人",
         "として",
         "came in the role of a student"
        ]
       ]
      }
     ]
    },
    {
     h: "によって: depending on, by means of, because of",
     body: [
      "[[ni-yotte|によって]] comes from よる, “depend on, be based on”. You met one use in Unit 7: the creator of a work in a passive sentence ({{passive-form}}). It has three more.",
      {
       table: [
        [
         "Meaning",
         "Example",
         "Translation"
        ],
        [
         "depending on",
         "国によって、[習慣]{しゅうかん}が[違]{ちが}います。",
         "Customs differ from country to country."
        ],
        [
         "by means of (formal)",
         "インターネットによって、世界中の人と[簡単]{かんたん}に話せるようになった。",
         "The internet has made it easy to talk with people all over the world."
        ],
        [
         "because of (formal, news)",
         "台風によって、多くの家が[壊]{こわ}れました。",
         "Many houses were destroyed by the typhoon."
        ],
        [
         "by (creator, Unit 7)",
         "この[絵]{え}はピカソによって[描]{か}かれました。",
         "This picture was painted by Picasso."
        ]
       ]
      },
      "**によっては** means “in some cases, depending on”: 店によっては、カードが使えません (Some shops don’t take cards). It picks out some members of a group, not all.",
      "Before a noun, によって becomes による: 台風による[被害]{ひがい} (damage from the typhoon), AIによる[翻訳]{ほんやく} (machine translation by AI).",
      "In everyday speech, “by means of” is usually just で: 電話で話す, バスで行く. によって for means and causes is typical of writing and the news.",
      {
       tip: "Don’t confuse によって with によると, “according to”, which gives a source of information: [天気予報]{てんきよほう}によると、[明日]{あした}は雨だそうです (According to the forecast, it’s going to rain tomorrow). It often ends with ～そうだ or ～らしい from Unit 7."
      }
     ]
    },
    {
     h: "Which one? A contrast table",
     body: [
      {
       fig: "<svg viewBox=\"0 0 340 360\"><defs><marker id=\"e3u9a7\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"22\" text-anchor=\"middle\">Five ways to relate to a noun X</text><circle class=\"d-gold\" cx=\"44\" cy=\"190\" r=\"30\" stroke-width=\"2\"/><text x=\"44\" y=\"195\" text-anchor=\"middle\">X</text><path class=\"d-ink\" d=\"M74 180L126 66\" stroke-width=\"1.5\" marker-end=\"url(#e3u9a7)\"/><path class=\"d-ink\" d=\"M76 184L126 128\" stroke-width=\"1.5\" marker-end=\"url(#e3u9a7)\"/><path class=\"d-ink\" d=\"M76 190H126\" stroke-width=\"1.5\" marker-end=\"url(#e3u9a7)\"/><path class=\"d-ink\" d=\"M76 196L126 252\" stroke-width=\"1.5\" marker-end=\"url(#e3u9a7)\"/><path class=\"d-ink\" d=\"M74 200L126 314\" stroke-width=\"1.5\" marker-end=\"url(#e3u9a7)\"/><rect class=\"d-lup\" x=\"130\" y=\"40\" width=\"200\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"142\" y=\"62\">について</text><text class=\"s\" x=\"142\" y=\"80\">X is what you talk about</text><rect class=\"d-rose\" x=\"130\" y=\"102\" width=\"200\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"142\" y=\"124\">にたいして</text><text class=\"s\" x=\"142\" y=\"142\">X is the target you face</text><rect class=\"d-sage\" x=\"130\" y=\"164\" width=\"200\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"142\" y=\"186\">として</text><text class=\"s\" x=\"142\" y=\"204\">X is the role you play</text><rect class=\"d-panel\" x=\"130\" y=\"226\" width=\"200\" height=\"52\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"142\" y=\"248\">にとって</text><text class=\"s\" x=\"142\" y=\"266\">X is whose view judges</text><rect class=\"d-lup\" x=\"130\" y=\"288\" width=\"200\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"142\" y=\"310\">によって</text><text class=\"s\" x=\"142\" y=\"328\">it depends on, or comes from, X</text></svg>",
       alt: "A noun X in a circle with five arrows to five boxes. について: X is what you talk about. にたいして: X is the target you face. として: X is the role you play. にとって: X is whose view judges. によって: it depends on, or comes from, X.",
       cap: "The same noun can take any of the five, with a different relation each time: 先生について (about the teacher), 先生に[対]{たい}して (towards the teacher), 先生として (as a teacher), 先生にとって (for the teacher), 先生によって (depending on the teacher)."
      },
      {
       table: [
        [
         "Particle",
         "Typical predicates",
         "Example"
        ],
        [
         "について",
         "talk, think, research, write, ask",
         "[歴史]{れきし}について[調]{しら}べる"
        ],
        [
         "に[対]{たい}して",
         "attitudes, reactions: kind, strict, oppose, answer",
         "先生に[対]{たい}して[失礼]{しつれい}だ"
        ],
        [
         "として",
         "roles: work, come, use",
         "[通訳]{つうやく}として[働]{はたら}く"
        ],
        [
         "にとって",
         "evaluations: important, hard, useful",
         "私にとって大切だ"
        ],
        [
         "によって",
         "differ, change; formal means and causes",
         "国によって[違]{ちが}う"
        ]
       ]
      },
      "When two seem possible, ask what the noun **is** in the sentence: the content, the target, the role, the judge, or the thing everything depends on.",
      {
       h: "Common mistakes"
      },
      {
       table: [
        [
         "✗ Mistake",
         "✓ Correct",
         "Why"
        ],
        [
         "私にとって、その意見に[賛成]{さんせい}です",
         "私はその意見に[賛成]{さんせい}です",
         "にとって needs an evaluation, not an action or opinion."
        ],
        [
         "日本の[文化]{ぶんか}に[対]{たい}して[調]{しら}べました",
         "日本の[文化]{ぶんか}について[調]{しら}べました",
         "Research is about content: について."
        ],
        [
         "私にとって親切な人 (meaning “kind to me”)",
         "私に[対]{たい}して親切な人",
         "Kindness aimed at someone: に[対]{たい}して."
        ],
        [
         "台風によっての[被害]{ひがい}",
         "台風による[被害]{ひがい}",
         "Before a noun, によって becomes による."
        ],
        [
         "[環境]{かんきょう}について本",
         "[環境]{かんきょう}についての本",
         "Before a noun, について needs の."
        ]
       ]
      },
      "Compound particles are everywhere in news, notices and N3 reading passages, so learning to spot them will make reading much easier. The full table, with more on overlaps, is in {{compound-particles}}, and a map of the whole unit is in {{n3-grammar-patterns-1}}.",
      {
       lab: "kl-n3",
       t: "Practise: the N3 kanji, including many from this unit such as [対]{たい}, [調]{しら}べる, [違]{ちが}う and [経験]{けいけん}"
      },
      {
       lab: "kl-n3-vocab",
       t: "Practise: N3 vocabulary, with many of the words in this unit’s examples"
      },
      {
       terms: [
        "ni-tsuite",
        "ni-taishite",
        "to-shite",
        "ni-totte",
        "ni-yotte",
        "fukugou-joshi"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u9-l5-x1",
     type: "mcq",
     q: "Kenji is writing a report on Japan’s ageing society. Choose the particle: 「日本の[高齢化]{こうれいか}___レポートを書いています。」",
     options: [
      {
       t: "についての",
       ok: true,
       why: "Right. The ageing society is the content of the report, and before a noun (レポート) について becomes についての."
      },
      {
       t: "に[対]{たい}する",
       why: "に[対]{たい}する marks a target that an attitude or action is aimed at. A report is about its content: についての."
      },
      {
       t: "にとっての",
       why: "にとって gives the point of view of a judgement (“for”). The report is not judged from the ageing society’s point of view."
      },
      {
       t: "としての",
       why: "として gives a role (“as”). The report is not written “as” the ageing society."
      }
     ]
    },
    {
     id: "e3u9-l5-x2",
     type: "match",
     q: "Match each sentence with the particle that fills the gap.",
     pairs: [
      [
       "[通訳]{つうやく}___[働]{はたら}いています。 (I work as an interpreter.)",
       "として",
       "A role: として."
      ],
      [
       "この町の[歴史]{れきし}___[調]{しら}べています。 (I’m researching this town’s history.)",
       "について",
       "The content of research: について."
      ],
      [
       "私___、この写真は[宝物]{たからもの}です。 (To me, this photo is a treasure.)",
       "にとって",
       "An evaluation from my point of view: にとって."
      ],
      [
       "国___、[習慣]{しゅうかん}が[違]{ちが}います。 (Customs differ from country to country.)",
       "によって",
       "Depending on: によって."
      ],
      [
       "お[客様]{きゃくさま}___、[丁寧]{ていねい}に話してください。 (Please speak politely to customers.)",
       "に[対]{たい}して",
       "The target of your manner: に[対]{たい}して."
      ]
     ]
    },
    {
     id: "e3u9-l5-x3",
     type: "sort",
     q: "にとって or に[対]{たい}して?",
     buckets: [
      "にとって",
      "に[対]{たい}して"
     ],
     items: [
      {
       t: "子ども___、この本は少し[難]{むずか}しい。",
       b: 0,
       why: "An evaluation (difficult) from the children’s point of view: にとって."
      },
      {
       t: "私___大切な人",
       b: 0,
       why: "Important, judged from my point of view: にとって."
      },
      {
       t: "[留学生]{りゅうがくせい}___、[部屋]{へや}を[探]{さが}すのは[大変]{たいへん}だ。",
       b: 0,
       why: "Hard, from the students’ point of view: にとって."
      },
      {
       t: "子ども___親切な先生",
       b: 1,
       why: "Kindness aimed at the children: に[対]{たい}して."
      },
      {
       t: "上の人___[失礼]{しつれい}な[態度]{たいど}",
       b: 1,
       why: "A rude attitude aimed at someone: に[対]{たい}して."
      },
      {
       t: "新しい[制度]{せいど}___、[反対]{はんたい}の[声]{こえ}が上がっている。",
       b: 1,
       why: "Objections aimed at the new system: に[対]{たい}して marks the target."
      }
     ]
    },
    {
     id: "e3u9-l5-x4",
     type: "mcq",
     q: "Choose the particle: 「[交換留学生]{こうかんりゅうがくせい}___日本に[来]{き}ました。」 (I came to Japan as an exchange student.)",
     options: [
      {
       t: "として",
       ok: true,
       why: "Right. として gives the role or status in which you came."
      },
      {
       t: "にとって",
       why: "にとって gives the point of view of a judgement, and it needs an evaluation such as 大切 or [難]{むずか}しい, not an action like coming."
      },
      {
       t: "について",
       why: "について gives the topic of talking or thinking. Coming to Japan isn’t “about” being a student."
      },
      {
       t: "によって",
       why: "によって means “depending on” or “by means of”. You didn’t come by means of being a student."
      }
     ]
    },
    {
     id: "e3u9-l5-x5",
     type: "spot",
     q: "Lucía wrote part of a report. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "私は日本の[文化]{ぶんか}",
      {
       t: "に[対]{たい}して[調]{しら}べました",
       flag: true,
       why: "Research is about content, so use について: 日本の[文化]{ぶんか}について[調]{しら}べました."
      },
      "。[習慣]{しゅうかん}は地方",
      {
       t: "によって[違]{ちが}います",
       flag: false,
       why: "Fine: によって for “depending on”."
      },
      "。外国人",
      {
       t: "にとって、日本の電車はとても[便利]{べんり}です",
       flag: false,
       why: "Fine: にとって with an evaluation (convenient)."
      },
      "。でも、[地震]{じしん}",
      {
       t: "による[被害]{ひがい}",
       flag: false,
       why: "Fine: によって becomes による before a noun."
      },
      "も多いです。私",
      {
       t: "にとって、[防災]{ぼうさい}の[教育]{きょういく}に[賛成]{さんせい}です",
       flag: true,
       why: "にとって needs an evaluation, not a statement of your own opinion. Use は: 私は、[防災]{ぼうさい}の[教育]{きょういく}に[賛成]{さんせい}です."
      },
      "。"
     ]
    },
    {
     id: "e3u9-l5-x6",
     type: "mcq",
     q: "A sign at a tourist office says: 「店によっては、カードが使えません。」 What does it mean?",
     options: [
      {
       t: "Some shops don’t accept cards.",
       ok: true,
       why: "Right. によっては means “in some cases, depending on”: it picks out some shops, not all."
      },
      {
       t: "No shops accept cards.",
       why: "によっては doesn’t cover the whole group. “No shops” would be どの店でもカードが使えません."
      },
      {
       t: "Because of the shops, cards can’t be used.",
       why: "によっては isn’t a cause here. It means “depending on the shop”."
      },
      {
       t: "You can’t use cards to pay for shops.",
       why: "The shops are the variable (“depending on the shop”), not the thing being paid for."
      }
     ]
    },
    {
     id: "e3u9-l5-x7",
     type: "mcq",
     q: "Choose the form before the noun: 「[地震]{じしん}___[被害]{ひがい}は大きかった。」 (The damage from the earthquake was severe.)",
     options: [
      {
       t: "による",
       ok: true,
       why: "Right. Before a noun, によって becomes による."
      },
      {
       t: "によって",
       why: "によって is a て-form, so it links to a verb or a clause, not straight to a noun such as [被害]{ひがい}."
      },
      {
       t: "にとる",
       why: "にとって comes from とる, but its form before a noun is にとっての, and it means “for”, not “caused by”."
      },
      {
       t: "によるの",
       why: "による goes straight before the noun, with no の."
      }
     ]
    }
   ],
   apply: {
    intro: "Compound particles are easiest to learn in real texts. Keep your notes for yourself.",
    tasks: [
     {
      t: "Hunt them in the news",
      how: [
       "Open a Japanese news site for learners or a short news article and find three compound particles from this lesson.",
       "Copy each phrase with the noun before it and the word after it, for example 台風による[被害]{ひがい}.",
       "Write which meaning each one has."
      ],
      write: "～について… ～によって…"
     },
     {
      t: "Five sentences about you",
      how: [
       "Write one sentence about yourself with each particle: what you like reading about (について), how you treat someone (に[対]{たい}して), a role you have (として), what is important to you (にとって), and something that differs by person or place (によって).",
       "Check each with the contrast table: what is the noun in the sentence: content, target, role, judge, or the thing everything depends on?"
      ],
      write: "～について… ～に[対]{たい}して… ～として… ～にとって… ～によって…"
     },
     {
      t: "Review the whole unit",
      how: [
       "Read {{n3-grammar-patterns-1}} and cover the example column. Make your own example for each pattern.",
       "Do ten minutes of the Kanji Lab’s N3 kanji or N3 vocabulary deck. Little and often works better than long sessions."
      ],
      write: "[今日]{きょう}の[復習]{ふくしゅう}…"
     }
    ],
    proof: "Three compound particles copied from a real text with their meanings, five sentences of your own, and a short review of the unit’s patterns."
   },
   read: [
    {
     book: "taekim",
     where: "Special Expressions, “Using 「方」 and 「よる」”, sections “Using 「によって」 to express dependency” and “Indicating a source of information using 「によると」”"
    },
    {
     book: "taekim",
     where: "Special Expressions, “Hypothesizing and Concluding”, section “Making hypotheses with 「とする」”",
     note: "The end of the section shows として ([観客]{かんきゃく}として, “as a spectator”) and としては, as well as ～としても (Unit 10)."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 14 “I’m troubled about a friend.” (Nにとって) and Elementary 2, Lesson 9 “What do people do on Coming-of-Age Day?” (Nによって)",
     note: "With audio. The other compound particles are not in IRODORI."
    }
   ]
  }
 ],
 checkpoint: [
  "e3u9-q03",
  "e3u9-q07",
  "e3u9-q11",
  "e3u9-q15",
  "e3u9-q20",
  "e3u9-q24",
  "e3u9-q27",
  "e3u9-q30",
  "e3u9-q34",
  "e3u9-q38",
  "e3u9-q42",
  "e3u9-q45"
 ],
 codex: [
  {
   id: "purpose-you-ni-tame-ni",
   title: "Purpose: ～ように and ～ために (with ～ようにする, ～ようになる)",
   aka: [
    "purpose",
    "so that",
    "in order to",
    "～ように",
    "～ために",
    "～のために",
    "～ようにする",
    "～ようになる",
    "you ni",
    "tame ni"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "Two ways to say “so that / in order to”: ために for the aim of a deliberate action, ように for a result you hope to bring about; plus ～ようにする (make a point of) and ～ようになる (come to, become able to).",
   levels: {
    starter: [
     "Japanese has two common ways to give a purpose, and the choice depends on the verb before them.",
     "**～ために** (in order to) follows an action that a person does **on purpose**, and the same person does both parts: [留学]{りゅうがく}するために、お金をためています (I’m saving money in order to study abroad). With a noun, use のために: [健康]{けんこう}のために歩いています (I walk for my health).",
     "**～ように** (so that) follows a **state or result** you hope to bring about, which you can’t simply do: a potential form, a ない-form, or a verb like 見える or 分かる. 後ろの人にも見えるように、大きく書きます (I’ll write it big so that the people at the back can see). [忘]{わす}れないように、メモします (I’ll make a note so I don’t forget).",
     "Two patterns grow from ように. **～ようにする** means “make a point of doing”: 毎日[野菜]{やさい}を食べるようにしています. **～ようになる** reports a change: [泳]{およ}げるようになりました (I can swim now)."
    ],
    builder: [
     {
      table: [
       [
        "Before it",
        "Choose",
        "Example"
       ],
       [
        "noun",
        "のために",
        "家族のために"
       ],
       [
        "deliberate action, same person",
        "ために",
        "[合格]{ごうかく}するために勉強する"
       ],
       [
        "potential form",
        "ように",
        "読めるように"
       ],
       [
        "ない-form",
        "ように",
        "[遅]{おく}れないように"
       ],
       [
        "verb for something that happens (分かる, 見える, [治]{なお}る, [間]{ま}に[合]{あ}う)",
        "ように",
        "[間]{ま}に[合]{あ}うように"
       ],
       [
        "a different person in the second half",
        "usually ように",
        "子どもが読めるように、ふりがなをつける"
       ]
      ]
     },
     "**Real overlaps.** With なる, both appear: 医者になるために (a goal you work towards) is standard, and [上手]{じょうず}になるように / [上手]{じょうず}になるために are both common. Use ように for negative purposes; a past ～なかったために is usually a cause.",
     "**ために as a cause.** After a past form or a state, ために means “because of” (formal): [事故]{じこ}のために電車が[遅]{おく}れています. Context decides with nouns.",
     "**Other ように.** “Like” (noun + のように, Unit 7), “as follows” ([次]{つぎ}のように), reported requests (～ように言う), and wishes (～ますように).",
     "**～ようにする / ～ようにしている** is a continuing effort or making sure: [遅]{おく}れないようにしてください. Not the same as ～てみる (try and see) or ～ようとする (attempt at one moment).",
     "**～ようになる** follows verbs, often potential forms: 読めるようになった, 毎朝歩くようになった. For “no longer”, use ～なくなる. With adjectives, just なる: [上手]{じょうず}になった."
    ],
    pro: [
     "**Volitional and non-volitional verbs.** Textbooks describe the choice as [意志動詞]{いしどうし} (volitional verbs) → ために and [無意志動詞]{むいしどうし} (non-volitional verbs, including potentials) → ように, with the same subject for ために. Umeoka and Iori (2000) show that this holds as a general principle but that the boundary is fuzzy, and that dictionaries rarely mark which verbs are which. Their pair [間]{ま}に[合]{あ}う (non-volitional) and [遅刻]{ちこく}する (volitional) shows that the line isn’t always intuitive.",
     "**ように with another person’s action.** 子どもが食べるように、パンを[机]{つくえ}の上に[置]{お}いた is natural: ように presents the child’s eating as an event the speaker arranged, not as the child’s will. When the other person’s will matters, a causative + ために is used: 子どもに食べさせるために.",
     "**Negatives.** The same study treats ✗ [花瓶]{かびん}を[割]{わ}らないために as unacceptable for purpose: ～ないために tends to be read as a cause, as in メンバーが[全員]{ぜんいん}[来]{こ}なかったために、[試合]{しあい}に出られなかった. You will still meet ～ないために for purpose in real writing, but ように is the safe choice.",
     "**Purpose のに.** A third purpose pattern, dictionary form + のに, goes with 使う, [必要]{ひつよう}だ, [便利]{べんり}だ and いい: このはさみは紙を切るのに使います (I use these scissors for cutting paper). It is different from the “even though” のに of Unit 7 ([[noni]]).",
     "**ように in commands.** Teachers, notices and announcements use ～ように as an indirect order: [廊下]{ろうか}は走らないように (No running in the corridors). In reported speech, ～ように言う／[頼]{たの}む／[伝]{つた}える report requests and instructions.",
     "**Gradual change.** ～ようになってきた adds a sense of a change still in progress: 日本語が少し話せるようになってきた (I’m gradually becoming able to speak a little Japanese)."
    ]
   },
   related: [
    "koto-ni-suru-naru",
    "appearance-sou-you-rashii",
    "potential-form",
    "quoting-to-iu",
    "wishes-and-causes",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "梅岡巳香・庵功雄 (2000) 「「ために」と「ように」に関する一考察」『一橋大学留学生センター紀要』3 (repository PDF)",
     url: "https://hermes-ir.lib.hit-u.ac.jp/hermes/ir/re/8584/ryugaku0000301030.pdf"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Using する and なる with the に particle (～ようにする, ～ようになる)",
     url: "https://guidetojapanese.org/learn/grammar/surunaru"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "koto-ni-suru-naru",
   title: "Decisions: ～ことにする and ～ことになる",
   aka: [
    "decide",
    "it was decided",
    "～ことにする",
    "～ことになる",
    "～ことにしている",
    "～ことになっている",
    "koto ni suru",
    "koto ni naru",
    "にする"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "Saying who made a decision: ～ことにする (I decide), ～ことになる (it was decided, it turned out), and their ～ている forms for personal rules and official arrangements.",
   levels: {
    starter: [
     "こと turns a verb into “the matter of doing it”. Add する (do) or なる (become), and you can say who made a decision.",
     "**～ことにする**: the speaker decides. 来年、[留学]{りゅうがく}することにしました (I’ve decided to study abroad next year). もうお[酒]{さけ}は飲まないことにしました (I’ve decided not to drink any more).",
     "**～ことになる**: the decision comes from outside, from other people or circumstances. 来月から[大阪]{おおさか}で[働]{はたら}くことになりました (I’m going to be working in Osaka from next month: the company decided).",
     "People also announce big personal news with ～ことになりました, to sound modest: [結婚]{けっこん}することになりました (We’re getting married).",
     "Add ～ている for things that hold over time. **～ことにしている** is your own rule: 毎朝歩くことにしています. **～ことになっている** is an official rule or plan: [会議]{かいぎ}は三時に始まることになっています."
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Who decides",
        "Time",
        "Example"
       ],
       [
        "～ことにした",
        "the speaker",
        "one decision",
        "[引]{ひ}っ[越]{こ}すことにした"
       ],
       [
        "～ことになった",
        "others, circumstances (or modest)",
        "one decision",
        "[転勤]{てんきん}することになった"
       ],
       [
        "～ことにしている",
        "the speaker",
        "a personal rule",
        "[寝]{ね}る前はスマホを見ないことにしている"
       ],
       [
        "～ことになっている",
        "a rule, custom or plan",
        "holds over time",
        "[靴]{くつ}を[脱]{ぬ}ぐことになっている"
       ]
      ]
     },
     "**Form.** Dictionary form or ない-form + ことにする/なる: 行くことにした, 行かないことにした. With a noun, just にする: コーヒーにします (I’ll have coffee), それにしよう (let’s go with that).",
     "**Deciding now.** The non-past ～ことにします often means you are deciding as you speak: じゃあ、[今日]{きょう}は帰ることにします.",
     "**Choosing.** For a personal resolution (giving up sweets, starting to run), ～ことにしました is the natural choice; guides for teachers advise it for decisions you made yourself. ～ことになりました is for decisions made by others, or for modest announcements of big news.",
     "**With つもり.** ～ことにした reports the moment of choosing; つもり describes the intention you then hold: 日本で[働]{はたら}くことにしました。来年から仕事を[探]{さが}すつもりです.",
     "**Rules without a rule-maker.** ～ことになっている lets you explain rules politely without saying who made them, which is common in schools, offices and websites."
    ],
    pro: [
     "**Literal meanings.** Tae Kim glosses ～ことにする as “I did toward the event of…”, and ～ことになる as “it’s been decided that…”. The same する/なる contrast runs through ～ようにする and ～ようになる, and through noun + にする (choose) and noun + になる (become).",
     "**The modest ことになる.** A reference site for Japanese teachers lists two meanings: plans decided regardless of the speaker’s will, and a way to state one’s own decision indirectly ([婉曲]{えんきょく}的に). It adds that for stating a decision you made yourself, ～ことにする is the form to use. In practice, you will hear ～ことになりました in speeches, letters and workplace announcements (このたび、[退職]{たいしょく}することになりました) even when the speaker chose.",
     "**Other uses of ことになる.** It also states a logical consequence, “that means”, “it amounts to”: [三回]{さんかい}休むと、試験を[受]{う}けられないことになる (If you miss three times, that means you can’t take the exam). This is close to ～わけだ ({{hazu-wake-beki}}).",
     "**Other uses of ことにする.** With a past form, ～たことにする means “treat as if”, “pretend”: 聞かなかったことにします (I’ll pretend I didn’t hear that). [今日]{きょう}の話はなかったことにしてください (Please forget we had this conversation).",
     "**ことになっている and [予定]{よてい}.** Both describe arrangements. ～ことになっている stresses that it is the rule or the agreed plan; [予定]{よてい}だ ({{volitional-form}}) simply says it is scheduled.",
     "**In textbooks.** The Japan Foundation’s free Irodori Pre-Intermediate course practises ～ことになった (Lesson 1) and ～ことにする (Lesson 12) in everyday situations."
    ]
   },
   related: [
    "purpose-you-ni-tame-ni",
    "volitional-form",
    "tokoro-and-bakari",
    "hazu-wake-beki",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Using する and なる with the に particle (～ことにする, ～ことになる)",
     url: "https://guidetojapanese.org/learn/grammar/surunaru"
    },
    {
     t: "【JLPT N4】文法・例文：〜ことになる (nihongokyoshi-net.com, a reference site for Japanese teachers)",
     url: "https://nihongokyoshi-net.com/2019/05/02/jlptn4-grammar-kotoninaru/"
    },
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "tokoro-and-bakari",
   title: "Timing: ～ところ and ～たばかり",
   aka: [
    "about to",
    "in the middle of",
    "have just",
    "just did",
    "～ところ",
    "～るところ",
    "～ているところ",
    "～たところ",
    "～ところだった",
    "～たばかり",
    "～てばかり",
    "tokoro",
    "bakari"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "Pinning down the moment of an action: ～るところ (about to), ～ているところ (in the middle of), ～たところ (have just), ～ところだった (almost), and ～たばかり (only a short time ago, as the speaker feels it).",
   levels: {
    starter: [
     "ところ means “place”, but in grammar it can mark a point in time: where you are in an action. The verb form before it chooses the point.",
     "**Dictionary form + ところ**: about to. これから出かけるところです (I’m just about to go out).",
     "**～ている + ところ**: in the middle of. 今、[晩]{ばん}ご飯を作っているところです (I’m making dinner right now).",
     "**～た + ところ**: have just. ちょうど今、駅に着いたところです (I’ve just this moment arrived at the station).",
     "**～たばかり** also means “just did”, but it is about how recent it **feels**: it can be minutes or months. 先月買ったばかりのスマホが[壊]{こわ}れました (My phone, which I only bought last month, broke).",
     "Don’t confuse it with **～てばかりいる**, “do nothing but”: [遊]{あそ}んでばかりいる (does nothing but play)."
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Meaning",
        "Example"
       ],
       [
        "～るところだ",
        "just about to",
        "[寝]{ね}るところだ"
       ],
       [
        "～ているところだ",
        "in the middle of",
        "[寝]{ね}ているところだ"
       ],
       [
        "～たところだ",
        "have just",
        "[寝]{ね}たところだ"
       ],
       [
        "～るところだった",
        "almost (but didn’t)",
        "[乗]{の}り[遅]{おく}れるところだった"
       ],
       [
        "～たばかりだ",
        "only a short time ago (subjective)",
        "[来]{き}たばかりだ"
       ],
       [
        "noun / ～てばかりいる",
        "nothing but",
        "ゲームばかり, [遊]{あそ}んでばかりいる"
       ]
      ]
     },
     "**Time words.** ところ often comes with 今, ちょうど and これから, and is common as an answer to “what are you doing?” or “can you talk?”.",
     "**たところ or たばかり?** ～たところ points objectively at the moment just after an action. ～たばかり adds the speaker’s feeling that little time has passed, so it works with 先週 or 先月, and it carries a reason or a complaint: [来]{き}たばかりなので (because I’ve only just come), 買ったばかりなのに (even though I only just bought it). For “just this moment”, both are natural.",
     "**Forms.** ～たばかり works like a noun: ～たばかりの + noun, ～たばかりだ, ～たばかりなので, ～たばかりなのに. ～たところ isn’t used before a noun in this sense.",
     "**Almost.** The verb before ところだった stays in the dictionary form: もう少しで[忘]{わす}れるところだった (I nearly forgot). ～たところだった would mean “had just done”."
    ],
    pro: [
     "**Research on ～たばかり.** Nakamura (1999) reviews earlier accounts: ～たところ marks the time just after an action, while ～たばかり adds psychological immediacy, the speaker’s feeling that not enough time has passed to move on. In the examples he collected and had native speakers judge, most ～たばかり examples (102 of 141) came before a noun, as in ～たばかりの + noun, and several of the rest came with のに, けど or が, often with a negative judgement. He notes that textbooks rarely teach these patterns.",
     "**ところ + particles.** ～ところに / ～ところへ (just when): 出かけようとしたところに、電話がかかってきた (Just as I was about to go out, the phone rang). ～ているところを (while someone was in the middle of): [寝]{ね}ているところを起こされた (I was woken up while I was sleeping).",
     "**Another ～たところ.** In formal writing, ～たところ also means “when I did X, (I found that)…”, reporting a result: [調]{しら}べたところ、[原因]{げんいん}が分かった (When we investigated, we found the cause). Many textbooks teach it at N2.",
     "**Casual forms.** In speech, ばかり often becomes ばっかり or ばっか: 食べたばっかり, ゲームばっか.",
     "**More ばかり patterns.** ～ばかりでなく (not only… but also) works like ～だけでなく ([[dake-de-naku]], Unit 10). ～たばかりに (just because, with regret) is N2.",
     "**In textbooks.** Irodori Pre-Intermediate practises ～たところだ in Lesson 16; Tae Kim covers ところ as an abstract place and ～ばかり for recent actions."
    ]
   },
   related: [
    "koto-ni-suru-naru",
    "te-form",
    "nai-and-ta-forms",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "中村重穂 (1999) 「再び、『〜たばかり』について ―意味論的観点から―」『北海道大学留学生センター紀要』3 (repository PDF)",
     url: "https://eprints.lib.hokudai.ac.jp/repo/huscap/all/45576/BISC003_004.pdf"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Special Expressions with Generic Nouns (ところ as an abstract place)",
     url: "https://guidetojapanese.org/learn/grammar/genericnouns"
    },
    {
     t: "Tae Kim’s Guide: Time-specific actions (～ばかり for what just happened)",
     url: "https://guidetojapanese.org/learn/grammar/timeactions"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "hazu-wake-beki",
   title: "Expectation, conclusion and duty: ～はず, ～わけ, ～べき",
   aka: [
    "should",
    "expected to",
    "no wonder",
    "that means",
    "ought to",
    "～はず",
    "～はずがない",
    "～はずだった",
    "～わけ",
    "～わけだ",
    "～わけがない",
    "～わけではない",
    "～わけにはいかない",
    "～べき",
    "～べきではない",
    "hazu",
    "wake",
    "beki"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "Three N3 words for reasoning and values: はず (what you expect from what you know), わけ (what follows, what explains it), べき (what ought to be done), with their negatives.",
   levels: {
    starter: [
     "English “should” covers two ideas, and Japanese splits them.",
     "**はず** is for what you have good reason to expect: 電車は三時に着くはずです (The train should arrive at three). [鍵]{かぎ}はかばんに入れたはずです (I’m sure I put the key in my bag).",
     "**べき** is for what ought to be done: [約束]{やくそく}は[守]{まも}るべきです (You should keep your promises). It is strong, so for friendly advice use ～たほうがいい.",
     "**わけ** says that something follows from the facts, or that a fact explains something: [窓]{まど}が開いていた。どうりで[寒]{さむ}いわけだ (The window was open. No wonder it’s cold). つまり、来月から東京で[働]{はたら}くわけですね (So that means you’ll be working in Tokyo from next month).",
     "Each has a useful negative: はずがない (no way), べきではない (shouldn’t), and わけではない (it’s not that…)."
    ],
    builder: [
     {
      table: [
       [
        "Form",
        "Meaning",
        "Example"
       ],
       [
        "plain + はずだ",
        "should, is expected to",
        "休みのはずだ / [静]{しず}かなはずだ"
       ],
       [
        "～はずがない",
        "there’s no way",
        "そんなはずがない"
       ],
       [
        "～はずだった",
        "was supposed to (but)",
        "着くはずだったのに"
       ],
       [
        "～わけだ",
        "it follows; no wonder; so you mean",
        "それで[上手]{じょうず}なわけだ"
       ],
       [
        "～わけがない",
        "there’s no way",
        "分かるわけがない"
       ],
       [
        "～わけではない",
        "it’s not (necessarily) that",
        "[嫌]{きら}いなわけではない"
       ],
       [
        "dictionary form + べきだ",
        "ought to (する: すべき)",
        "[謝]{あやま}るべきだ"
       ],
       [
        "～べきではない",
        "ought not to",
        "言うべきではない"
       ],
       [
        "～べきだった",
        "should have",
        "[予約]{よやく}するべきだった"
       ]
      ]
     },
     "**Attaching.** All three work like nouns. はず and わけ take plain forms, な after な-adjectives; nouns take の before はず, but な (or という) before わけ: 休みのはず, 休みなわけ. べき follows only the dictionary form.",
     "**はず or わけ?** はず predicts something not yet checked. わけ makes sense of facts already on the table, or sums up what someone said (つまり～わけですね). In the “no wonder” use they overlap: どうりで[寒]{さむ}いわけだ / [寒]{さむ}いはずだ.",
     "**はずがない or わけがない?** Both mean “no way”, and both are usually natural. わけがない can feel a little more emotional and conversational.",
     "**べき and politeness.** べき states a duty or a principle. Used about people in general, or in opinions (～べきだと思います), it is fine; aimed at a listener, especially a superior, it can sound preachy."
    ],
    pro: [
     "**はず and intention.** はず reports a judgement based on facts, so it isn’t used for your own intentions; use つもり. About yourself it signals an external plan: [明日]{あした}は九時に出発するはずだ (we’re supposed to leave at nine).",
     "**Negatives of はず.** Tae Kim notes that the expected negative is ～はずがない or ～はずはない, and that はずじゃない is mainly used when confirming something positively (～はずじゃないか？, “shouldn’t it be…?”). Set phrases such as こんなはずじゃなかった (this isn’t how it was supposed to be) are the main exception.",
     "**More わけ.** Tae Kim defines わけ as “meaning; reason; can be deduced”, used for conclusions anyone could reach from the information given, and distinguishes it from the explanatory の ([[n-desu]]). He also covers ～わけにはいかない (can’t possibly, a stronger and more formal “must not”: 今度は[負]{ま}けるわけにはいかない) and わけない meaning “easy”. Other common phrases: というわけで (and so, that’s how), [申]{もう}し[訳]{わけ}ない (I’m terribly sorry), 言い[訳]{わけ} (an excuse).",
     "**Partial negation.** ～わけではない and ～ことはない are taught together in Unit 10 ({{partial-negation}}).",
     "**べき in detail.** べき comes from the classical auxiliary べし. With する, both するべき and すべき are standard; Tae Kim notes the short form applies to する only. Before a noun, べき modifies directly: するべきこと (things you should do), 注意すべき[点]{てん} (points to watch). Written Japanese also has べく (in order to) and べからず (must not), seen on old-style signs. Tae Kim defines べき as “not absolute, but strongly recommended” and warns that it can’t be used for suggestions like “you should go to the doctor”.",
     "**In writing.** Reports use ～はずである, ～わけである and ～べきである; ～べきだ is common in opinion essays. See {{sentence-endings-japanese}}."
    ]
   },
   related: [
    "koto-ni-suru-naru",
    "volitional-form",
    "explaining-n-desu",
    "appearance-sou-you-rashii",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Things that should be a certain way (はず, べき, べく, べからず)",
     url: "https://guidetojapanese.org/learn/grammar/should"
    },
    {
     t: "Tae Kim’s Guide: Hypothesizing and Concluding (わけ, ～わけがない, ～わけにはいかない)",
     url: "https://guidetojapanese.org/learn/grammar/reasoning"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "wishes-and-causes",
   title: "Wishes and causes: ～てほしい, ～ばいい, おかげで, せいで, ～ば～ほど",
   aka: [
    "want someone to",
    "I hope",
    "I wish",
    "thanks to",
    "because of",
    "the more the more",
    "～てほしい",
    "～ないでほしい",
    "～ばいい",
    "～ばいいのに",
    "おかげで",
    "おかげさまで",
    "せいで",
    "せいか",
    "～ば～ほど",
    "okage de",
    "sei de"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "Wishing others would act (～てほしい), advice and hopes (～ばいい, ～といい, ～ばいいのに), crediting or blaming a cause (おかげで, せいで, せいか), and “the more…, the more…” (～ば～ほど).",
   levels: {
    starter: [
     "**～てほしい** says what you want someone else to do: [友達]{ともだち}に[手伝]{てつだ}ってほしい (I want my friend to help). The negative is ～ないでほしい. It states a wish; to ask politely, use ～ていただけませんか.",
     "**～ばいい** has two jobs: advice (“all you need to do is”): 分からなければ、聞けばいいですよ; and hopes: [明日]{あした}[晴]{は}れればいいなあ. For wishing someone well, ～といいですね is the most common: 早く元気になるといいですね.",
     "**おかげで** (thanks to) gives a cause of a good result, with thanks: 先生のおかげで[合格]{ごうかく}できました. **せいで** (because of) gives a cause of a bad result, with blame: [雪]{ゆき}のせいで電車が[遅]{おく}れました. For no feeling either way, use から or ので.",
     "**～ば～ほど** means “the more…, the more…”: [練習]{れんしゅう}すればするほど[上手]{じょうず}になる."
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Form",
        "Example"
       ],
       [
        "～てほしい",
        "person に + て-form + ほしい",
        "弟に早く帰ってきてほしい"
       ],
       [
        "～ないでほしい",
        "ない-form + でほしい",
        "うそをつかないでほしい"
       ],
       [
        "～ばいい",
        "ば-form + いい",
        "ここを[押]{お}せばいい"
       ],
       [
        "～ばいいのに",
        "ば-form + いいのに",
        "もっと休めばいいのに"
       ],
       [
        "おかげで",
        "noun の / plain / な-adj な",
        "駅が近いおかげで"
       ],
       [
        "せいで",
        "noun の / plain / な-adj な",
        "[寝]{ね}不足のせいで"
       ],
       [
        "～ば～ほど",
        "ば-form + plain form + ほど",
        "高ければ高いほど"
       ]
      ]
     },
     "**～てほしい.** The person who should act takes に; for weather and events, が: 雨がやんでほしい. For a third person, ～てほしがっている. Among friends, ～てほしいんだけど is a gentle way to ask.",
     "**Advice and hopes.** ～ばいい, ～といい and ～たらいい overlap; ～といいですね is the usual good wish. ～ばいいのに wishes for what isn’t so; aimed at the listener it can sound like a complaint. ～ばよかった is regret (Unit 6).",
     "**おかげで and せいで.** Both carry the speaker’s evaluation; から and ので are neutral, and ために (because of) is neutral and formal. おかげで with a bad result is sarcastic. おかげさまで is a polite set reply about your own good news.",
     "**～ば～ほど.** Verbs: すればするほど; い-adjectives: 安ければ安いほど; な-adjectives, less often: [簡単]{かんたん}なら[簡単]{かんたん}なほど, or [簡単]{かんたん}であればあるほど. The first part can be dropped: 考えるほど分からなくなる."
    ],
    pro: [
     "**Evaluation in cause expressions.** The Japan Foundation’s teaching column on expressing reasons describes おかげで as used for a benefit, often with gratitude, and also for a disadvantage with criticism or sarcasm, which is milder than せいで. せいで always marks a disadvantage and blame, and can be self-critical: [寝]{ね}る前にコーヒーを飲んだせいで、ゆうべは[眠]{ねむ}れなかった. から and ので are the neutral choices.",
     "**More forms.** ～おかげだ and ～せいだ end a sentence: [合格]{ごうかく}できたのは先生のおかげだ. ～せいか and ～おかげか hedge the cause (“perhaps because”). ～のせいにする means “blame it on”.",
     "**～てほしい and its neighbours.** ～てもらいたい is close in meaning to ～てほしい, and ～ていただきたい is its humble, more polite form, common in announcements: [列]{れつ}に[並]{なら}んでいただきたいと思います. Both ～ないでほしい and ～てほしくない are used for “I don’t want you to”. Tae Kim notes that ～てほしい is not used very often as a request, and points to request forms instead.",
     "**～ばいいのに and ～たらいいのに.** Both express a wish against reality. About other people they can sound like criticism, so they are best used with close friends or about situations: 駅がもっと近ければいいのに.",
     "**～ば～ほど details.** Tae Kim describes the pattern with verbs and い-adjectives, notes ～たら～ほど as possible for verbs, and says the な-adjective version with なら is rarely seen, although many textbooks teach it alongside ～であればあるほど. With nouns, ～であればあるほど is used: 有名であればあるほど[忙]{いそが}しくなる. ほど alone, for degree (“to the extent that”), is covered in Unit 10 ({{degree-hodo-kurai}})."
    ]
   },
   related: [
    "giving-and-receiving",
    "conditionals-to-ba-tara-nara",
    "purpose-you-ni-tame-ni",
    "degree-hodo-kurai",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "国際交流基金『日本語教育通信』文法を楽しく「表現意図 -理由-」(Japan Foundation teaching column on おかげで, せいで, から, ので)",
     url: "https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201612.html"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Desire and Suggestions (欲しい with the て-form)",
     url: "https://www.guidetojapanese.org/learn/grammar/desire"
    },
    {
     t: "Tae Kim’s Guide: Expressing Amounts (ほど and ～ば～ほど)",
     url: "https://guidetojapanese.org/learn/grammar/amount"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "compound-particles",
   title: "Compound particles: について, にたいして, として, にとって, によって",
   aka: [
    "compound particles",
    "fukugou joshi",
    "複合助詞",
    "about",
    "towards",
    "as",
    "for",
    "depending on",
    "について",
    "に対して",
    "にたいして",
    "として",
    "にとって",
    "によって",
    "による",
    "によっては"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "particles"
   ],
   summary: "Five particles built from a particle + a verb’s て-form: について (about), に[対]{たい}して (towards, against; whereas), として (as), にとって (for, from the point of view of) and によって (depending on, by, because of), with their noun-modifying forms.",
   levels: {
    starter: [
     "Some Japanese “particles” are really a particle plus a frozen verb. They work like English prepositions.",
     "**について** (about): the topic of talking, thinking or research. [歴史]{れきし}について[調]{しら}べる (research history).",
     "**に[対]{たい}して** (towards, against): the target of an attitude or action. 先生に[対]{たい}して[失礼]{しつれい}だ (rude to the teacher). It also means “whereas”.",
     "**として** (as): a role. [通訳]{つうやく}として[働]{はたら}く (work as an interpreter).",
     "**にとって** (for): the point of view of a judgement. 私にとって大切だ (important to me).",
     "**によって** (depending on, by means of, because of): 国によって[違]{ちが}う (differs from country to country).",
     "Before a noun they change: についての, に[対]{たい}する, としての, にとっての, による."
    ],
    builder: [
     {
      table: [
       [
        "Particle",
        "Noun relates as",
        "Goes with",
        "Before a noun"
       ],
       [
        "について",
        "content",
        "speak, think, research",
        "についての"
       ],
       [
        "に[対]{たい}して",
        "target; contrast",
        "attitudes, reactions",
        "に[対]{たい}する"
       ],
       [
        "として",
        "role",
        "work, come, use",
        "としての"
       ],
       [
        "にとって",
        "judge (viewpoint)",
        "evaluations",
        "にとっての"
       ],
       [
        "によって",
        "what it depends on; means; cause",
        "differ, change; formal",
        "による"
       ]
      ]
     },
     "**Content or target?** [息子]{むすこ}について[説明]{せつめい}する: explain about my son. [息子]{むすこ}に[対]{たい}して[説明]{せつめい}する: explain to my son. Research verbs take only について.",
     "**Viewpoint or target?** 私にとって大切な人 (important to me) vs 私に[対]{たい}して親切な人 (kind to me). にとって needs an evaluation; ✗ 私にとって[賛成]{さんせい}です.",
     "**Role or viewpoint?** [留学生]{りゅうがくせい}として (in the role of a student) vs [留学生]{りゅうがくせい}にとって (for students, from their point of view).",
     "**Useful extras.** としては (for a…, as far as… goes); によっては (in some cases); によると (according to, a source); ～のに[対]{たい}して (whereas). In everyday speech, “by means of” is usually で."
    ],
    pro: [
     "**What the research shows.** Sugimura compared native speakers and Chinese-speaking learners choosing between について, に[対]{たい}して and にとって. Native speakers chose consistently for each type of predicate; intermediate learners split their choices, and について remained hard even for advanced learners (except with 考える). The study follows earlier work: について keeps a sense of closeness to its object and suits thinking, speaking and research; に[対]{たい}して marks a target with a sense of direction or counter-action, and suits opposing and responding; にとって marks the standpoint of an evaluation, usually a person.",
     "**Overlaps.** Some predicates accept two particles with a small difference: [生徒]{せいと}の[疑問]{ぎもん}について／に[対]{たい}して答える. Evaluative words that also describe an effect, such as [有害]{ゆうがい}だ (harmful), accept にとって and, a little less naturally, に[対]{たい}して, while [難]{むずか}しすぎる accepts only にとって (Yokota 2006, cited by Sugimura).",
     "**Formal and written variants.** に[関]{かん}して / に[関]{かん}する (about; more formal than について), において / における (in, at), に[対]{たい}し and により (written forms without て), につき (per: [一人]{ひとり}につき千円, ¥1,000 per person; also “due to” on notices), につきまして (polite について). The Academic Japanese track lists more ([[fukugou-joshi]]).",
     "**として in more patterns.** として～ない with “one” means “not a single”: [誰一人]{だれひとり}として[来]{こ}なかった (not a single person came). Tae Kim presents として as と + する, alongside ～としたら and ～としても (Unit 10).",
     "**によって and the passive.** For the creator of a work, the passive uses によって rather than に ({{passive-form}}). For causes in the news, によって and により are common: 大雨により、運転を[見合]{みあ}わせています."
    ]
   },
   related: [
    "passive-form",
    "particles-o-ni-de",
    "keigo-system",
    "reading-kanji-compounds",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "杉村泰「日本語の複合助詞「について」「に対して」「にとって」の選択──日本語母語話者と中国人日本語学習者の比較──」『名古屋大学人文学研究論集』2 (repository PDF)",
     url: "https://nagoya.repo.nii.ac.jp/record/27802/files/jouhunu_2_147.pdf"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Using 「方」 and 「よる」 (によって, によると)",
     url: "https://guidetojapanese.org/learn/grammar/comparison"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "n3-grammar-patterns-1",
   title: "N3 grammar patterns I at a glance",
   aka: [
    "N3 grammar",
    "JLPT N3 grammar",
    "N3 grammar list",
    "N3 patterns"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "jlpt"
   ],
   summary: "A one-page map of the N3 grammar in Unit 9: purpose and change, decisions, timing, expectation and duty, wishes and causes, and five compound particles.",
   levels: {
    starter: [
     "N3 is the middle of the JLPT’s five levels. The official description says that at N3 you can understand everyday written materials with specific content, grasp newspaper headlines, and follow everyday conversations at near-natural speed.",
     "N3 grammar is mostly **patterns**: ready-made combinations that join ideas, built on forms you learned at N5 and N4 (dictionary, ない, た, て and potential forms).",
     "This unit covers the first half: why you do something (ように, ために), how things change (ようにする, ようになる), who decides (ことにする, ことになる), when exactly (ところ, ばかり), how you know (はず, わけ, べき), wishes and causes (てほしい, ばいい, おかげで, せいで, ば～ほど) and compound particles (について, に[対]{たい}して, として, にとって, によって). Unit 10 continues.",
     "The JLPT publishes no official grammar list, so N3 lists differ between textbooks ({{jlpt-overview}})."
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Meaning",
        "Example"
       ],
       [
        "～ために",
        "in order to",
        "[留学]{りゅうがく}するために"
       ],
       [
        "～ように",
        "so that",
        "[忘]{わす}れないように"
       ],
       [
        "～ようにする",
        "make a point of",
        "毎日歩くようにしている"
       ],
       [
        "～ようになる",
        "come to; become able to",
        "読めるようになった"
       ],
       [
        "～ことにする",
        "decide to",
        "やめることにした"
       ],
       [
        "～ことになる",
        "it is decided",
        "[転勤]{てんきん}することになった"
       ],
       [
        "～ところ",
        "about to / in the middle / just did",
        "出かけるところだ"
       ],
       [
        "～たばかり",
        "only just",
        "[来]{き}たばかりだ"
       ],
       [
        "～はず",
        "should (expectation)",
        "着くはずだ"
       ],
       [
        "～わけ",
        "it follows; no wonder",
        "それで[寒]{さむ}いわけだ"
       ],
       [
        "～べき",
        "ought to",
        "[守]{まも}るべきだ"
       ],
       [
        "～てほしい",
        "want someone to",
        "[来]{き}てほしい"
       ],
       [
        "～ばいい",
        "all you need to do; I hope",
        "聞けばいい"
       ],
       [
        "おかげで / せいで",
        "thanks to / because of",
        "[雪]{ゆき}のせいで"
       ],
       [
        "～ば～ほど",
        "the more…, the more",
        "すればするほど"
       ],
       [
        "について, に[対]{たい}して, として, にとって, によって",
        "about, towards, as, for, depending on",
        "国によって[違]{ちが}う"
       ]
      ]
     },
     "The details are in {{purpose-you-ni-tame-ni}}, {{koto-ni-suru-naru}}, {{tokoro-and-bakari}}, {{hazu-wake-beki}}, {{wishes-and-causes}} and {{compound-particles}}.",
     "**Using the table.** Cover the example column, read the pattern and its meaning, and make an example of your own. Then check the form in the lesson."
    ],
    pro: [
     "**Near neighbours.** The pairs that cause most mistakes, and that tests like to check: ために vs ように (deliberate action vs hoped-for result), ようにする vs ようになる (effort vs change), ことにする vs ことになる, たところ vs たばかり (and てばかり), はず vs べき (expectation vs duty), わけがない vs わけではない, おかげで vs せいで, にとって vs に[対]{たい}して, and について vs に[対]{たい}して.",
     "**Real overlaps.** Some choices are genuinely open: [上手]{じょうず}になるために／ように, ～たところ／～たばかり for “this very moment”, どうりで～わけだ／～はずだ, ～はずがない／～わけがない, and a few predicates with について or に[対]{たい}して. When native speakers accept both, the choice is about nuance, not right and wrong.",
     "**Edges of the list.** Because there is no official list, several patterns here (～ように, ～ことにする, ～ことになる, ～ところ, ～はず, ～てほしい) appear at N4 in some textbooks and reference sites, and in the Japan Foundation’s Irodori Pre-Intermediate course. This track teaches them at N3 with fuller contrasts. Don’t worry if your textbook draws the line elsewhere.",
     "**Practice.** Irodori Pre-Intermediate (free from the Japan Foundation) practises several of these patterns in everyday situations, with audio: ～ことになった (Lesson 1), ～てほしいんですが (Lesson 11), ～ことにする (Lesson 12), にとって (Lesson 14), ～たところだ (Lesson 16) and ～はずだ (Lesson 18). For kanji and vocabulary at this level, the Kanji Lab has N3 decks."
    ]
   },
   related: [
    "n4-grammar-patterns",
    "n5-grammar-patterns",
    "jlpt-overview",
    "purpose-you-ni-tame-ni",
    "koto-ni-suru-naru",
    "tokoro-and-bakari",
    "hazu-wake-beki",
    "wishes-and-causes",
    "compound-particles"
   ],
   sources: [
    {
     t: "JLPT (Japan Foundation and JEES): N1–N5 Summary of Linguistic Competence Required for Each Level",
     url: "https://www.jlpt.jp/e/about/levelsummary.html"
    },
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  }
 ],
 terms: [
  {
   id: "tame-ni",
   term: "～ために (in order to; because of)",
   def: "Dictionary form or noun + の + ために: in order to, for the sake of, when the same person does a deliberate action ([留学]{りゅうがく}するために、[健康]{けんこう}のために). After a past form or a state it means “because of” (formal).",
   codex: "purpose-you-ni-tame-ni"
  },
  {
   id: "you-ni",
   term: "～ように (so that)",
   def: "Dictionary form or ない-form + ように: so that a hoped-for result comes about, usually after potential forms, ない-forms and verbs for things that happen by themselves ([忘]{わす}れないように、見えるように).",
   codex: "purpose-you-ni-tame-ni"
  },
  {
   id: "you-ni-suru",
   term: "～ようにする (make a point of)",
   def: "Dictionary form or ない-form + ようにする: make an ongoing effort to do, or to make sure of, something (毎日歩くようにしています; [遅]{おく}れないようにしてください).",
   codex: "purpose-you-ni-tame-ni"
  },
  {
   id: "you-ni-naru",
   term: "～ようになる (come to, become able to)",
   def: "Verb + ようになる: a change in habit or ability has come about ([泳]{およ}げるようになりました). For “no longer”, ～なくなる is usual.",
   codex: "purpose-you-ni-tame-ni"
  },
  {
   id: "koto-ni-suru",
   term: "～ことにする (decide to)",
   def: "Dictionary form or ない-form + ことにする: the speaker decides ([留学]{りゅうがく}することにしました). ～ことにしている: a personal rule.",
   codex: "koto-ni-suru-naru"
  },
  {
   id: "koto-ni-naru",
   term: "～ことになる (it is decided)",
   def: "Dictionary form or ない-form + ことになる: a decision or arrangement presented as coming from others or circumstances ([転勤]{てんきん}することになりました); also used modestly for one’s own big news. ～ことになっている: an official rule or plan.",
   codex: "koto-ni-suru-naru"
  },
  {
   id: "ru-tokoro",
   term: "～るところ (about to)",
   def: "Dictionary form + ところだ: just about to do something (これから出かけるところです). With だった it means “almost (but didn’t)”.",
   codex: "tokoro-and-bakari"
  },
  {
   id: "te-iru-tokoro",
   term: "～ているところ (in the middle of)",
   def: "～ている + ところだ: right in the middle of doing something (今、[晩]{ばん}ご飯を作っているところです).",
   codex: "tokoro-and-bakari"
  },
  {
   id: "ta-tokoro",
   term: "～たところ (have just)",
   def: "た-form + ところだ: have just this moment done something (ちょうど今、着いたところです). Only for the moment straight after an action.",
   codex: "tokoro-and-bakari"
  },
  {
   id: "bakari",
   term: "～ばかり (just did; nothing but)",
   def: "After a た-form, “only a short time ago”, as the speaker feels it (先月買ったばかりのスマホ). After a noun, or in ～てばかりいる, “nothing but” (ゲームばかりしている).",
   codex: "tokoro-and-bakari"
  },
  {
   id: "hazu",
   term: "～はず (should, is expected to)",
   def: "Plain form (noun + の, な-adjective + な) + はずだ: what you expect from what you know (着くはずです). ～はずがない: there’s no way. ～はずだった: was supposed to.",
   codex: "hazu-wake-beki"
  },
  {
   id: "wake",
   term: "～わけ (it follows; no wonder)",
   def: "Plain form + わけだ: a conclusion that follows from known facts, a reason that explains something (どうりで[寒]{さむ}いわけだ), or a summing-up (つまり～わけですね). ～わけがない: no way; ～わけではない: it’s not that.",
   codex: "hazu-wake-beki"
  },
  {
   id: "beki",
   term: "～べき (ought to)",
   def: "Dictionary form + べきだ (する: するべき or すべき): what ought to be done. Negative: ～べきではない; past: ～べきだった (should have). Strong; for friendly advice, use ～たほうがいい.",
   codex: "hazu-wake-beki"
  },
  {
   id: "te-hoshii",
   term: "～てほしい (want someone to)",
   def: "Person に + て-form + ほしい: you want someone else to do something ([手伝]{てつだ}ってほしい); ～ないでほしい: you want them not to. A wish, not a polite request.",
   codex: "wishes-and-causes"
  },
  {
   id: "ba-ii",
   term: "～ばいい (all you need to do; I hope)",
   def: "ば-form + いい: advice that one step is enough (聞けばいいですよ), a hope ([晴]{は}れればいいなあ), or, with のに, a wish against reality (～ばいいのに).",
   codex: "wishes-and-causes"
  },
  {
   id: "okage-de",
   term: "おかげで (thanks to)",
   def: "Noun + の, or a plain form, + おかげで: gives the cause of a good result, with thanks (先生のおかげで). With a bad result it is sarcastic. おかげさまで: a polite set reply.",
   codex: "wishes-and-causes"
  },
  {
   id: "sei-de",
   term: "せいで (because of, to blame)",
   def: "Noun + の, or a plain form, + せいで: gives the cause of a bad result and blames it ([雪]{ゆき}のせいで). ～せいか: perhaps because.",
   codex: "wishes-and-causes"
  },
  {
   id: "ba-hodo",
   term: "～ば～ほど (the more…, the more…)",
   def: "The same word twice: ば-form, then plain form + ほど ([練習]{れんしゅう}すればするほど、安ければ安いほど).",
   codex: "wishes-and-causes"
  },
  {
   id: "ni-tsuite",
   term: "について (about)",
   def: "Noun + について: the topic or content of talking, thinking, writing or research ([歴史]{れきし}について[調]{しら}べる). Before a noun: についての.",
   codex: "compound-particles"
  },
  {
   id: "ni-taishite",
   term: "にたいして (towards, against; whereas)",
   def: "Noun + に[対]{たい}して: the target of an attitude, feeling or action (先生に[対]{たい}して[失礼]{しつれい}だ); after ～の, “whereas”. Before a noun: に[対]{たい}する.",
   codex: "compound-particles"
  },
  {
   id: "to-shite",
   term: "として (as)",
   def: "Noun + として: in the role, status or capacity of ([通訳]{つうやく}として[働]{はたら}く). としては: for a… Before a noun: としての.",
   codex: "compound-particles"
  },
  {
   id: "ni-totte",
   term: "にとって (for, to)",
   def: "Noun + にとって: the point of view from which something is judged, with evaluations such as 大切 or [難]{むずか}しい (私にとって大切だ). Not used with action verbs. Before a noun: にとっての.",
   codex: "compound-particles"
  },
  {
   id: "ni-yotte",
   term: "によって (depending on; by; because of)",
   def: "Noun + によって: depending on (国によって[違]{ちが}う), by means of or because of (formal), and the creator in a passive. によっては: in some cases. Before a noun: による.",
   codex: "compound-particles"
  }
 ],
 bank: [
  {
   id: "e3u9-q01",
   lesson: "e3u9-l1",
   level: 1,
   q: "Choose the word for the gap: 「家族の（　）、毎日[働]{はたら}いています。」 (I work every day for my family.)",
   options: [
    {
     t: "ために",
     ok: true,
     why: "Noun + のために means “for (the sake of)”: 家族のために."
    },
    {
     t: "ように",
     why: "Noun + のように means “like”: “I work like my family”. That isn’t the meaning here."
    },
    {
     t: "ことに",
     why: "ことに follows a verb in ～ことにする, not a noun + の."
    },
    {
     t: "ところ",
     why: "ところ marks a moment in an action; it doesn’t mean “for”."
    }
   ]
  },
  {
   id: "e3u9-q02",
   lesson: "e3u9-l1",
   level: 2,
   q: "Choose the word for the gap: 「電車に[間]{ま}に[合]{あ}う（　）、タクシーで駅へ行きました。」",
   options: [
    {
     t: "ように",
     ok: true,
     why: "[間]{ま}に[合]{あ}う (be in time) is a result, not an action you choose, so ように: “so that I would be in time”."
    },
    {
     t: "ために",
     why: "ために needs an action the subject chooses to do. Being in time is a result, so ように fits."
    },
    {
     t: "ようになる",
     why: "～ようになる describes a change and can’t join two halves of a sentence like this."
    },
    {
     t: "ことにして",
     why: "～ことにする means “decide”; “decided to be in time” doesn’t fit, because being in time can’t be decided."
    }
   ]
  },
  {
   id: "e3u9-q03",
   lesson: "e3u9-l1",
   level: 2,
   q: "Min studies kanji every day. Her goal is being able to read the newspaper. Choose the word: 「新聞が読める（　）、毎日漢字を勉強しています。」",
   options: [
    {
     t: "ように",
     ok: true,
     why: "読める is a potential form, a state rather than an action, so ように: “so that I can read”."
    },
    {
     t: "ために",
     why: "ために follows an action you choose. A potential form such as 読める takes ように."
    },
    {
     t: "のために",
     why: "のために follows a noun. After a verb there is no の, and the potential form needs ように anyway."
    },
    {
     t: "ばかり",
     why: "～たばかり means “just did”; ばかり after a potential form doesn’t give a purpose."
    }
   ]
  },
  {
   id: "e3u9-q04",
   lesson: "e3u9-l1",
   level: 1,
   q: "What does ～ようにしています express, as in 毎日[野菜]{やさい}を食べるようにしています?",
   options: [
    {
     t: "An effort or habit you keep up on purpose",
     ok: true,
     why: "Right: “I make a point of eating vegetables every day.”"
    },
    {
     t: "A change that came about by itself",
     why: "That is ～ようになる: 食べるようになりました (I’ve started eating them)."
    },
    {
     t: "A decision someone else made for you",
     why: "That is ～ことになる (Lesson 2)."
    },
    {
     t: "Something you are just about to do",
     why: "That is dictionary form + ところ (Lesson 2)."
    }
   ]
  },
  {
   id: "e3u9-q05",
   lesson: "e3u9-l1",
   level: 2,
   q: "Ken’s doctor told him to sleep more. Ken says: 「医者に、もっと[寝]{ね}る（　）言われました。」 Choose the word.",
   options: [
    {
     t: "ように",
     ok: true,
     why: "～ように言う reports an instruction; in the passive, ～ように言われる means “was told to”."
    },
    {
     t: "ために",
     why: "ために gives a purpose. “I was told in order to sleep more” isn’t the meaning; a reported instruction uses ように."
    },
    {
     t: "ことに",
     why: "～ことに言われる is not a pattern. Reported instructions use ～ように言う."
    },
    {
     t: "ところ",
     why: "ところ marks a moment in an action, not the content of an instruction."
    }
   ]
  },
  {
   id: "e3u9-q06",
   lesson: "e3u9-l1",
   level: 3,
   q: "Priya couldn’t ride a bicycle as a child. At thirty she took lessons, and now she can. Which sentence describes this?",
   options: [
    {
     t: "自転車に[乗]{の}れるようになりました。",
     ok: true,
     why: "Potential form + ようになる: a change in ability, “I’ve become able to ride a bike”."
    },
    {
     t: "自転車に[乗]{の}れるようにしました。",
     why: "～ようにする means making an effort or arranging things so that something is possible. It doesn’t report the change in her ability."
    },
    {
     t: "自転車に[乗]{の}ることになりました。",
     why: "～ことになる reports a decision made by others or by circumstances: “it was decided that I’d ride”."
    },
    {
     t: "自転車に[乗]{の}るようにしています。",
     why: "This means “I make a point of riding my bike”, a habit she keeps up, not a new ability."
    }
   ]
  },
  {
   id: "e3u9-q07",
   lesson: "e3u9-l1",
   level: 3,
   q: "Hana used to drink coffee every day. Recently she has lost interest and doesn’t drink it any more. She didn’t decide this; it just happened. Which sentence fits?",
   options: [
    {
     t: "[最近]{さいきん}、コーヒーを飲まなくなりました。",
     ok: true,
     why: "～なくなる is the everyday way to say a habit has stopped by itself."
    },
    {
     t: "[最近]{さいきん}、コーヒーを飲まないようにしています。",
     why: "This is a deliberate effort: “I try not to drink coffee”. Hana made no effort; she just lost interest."
    },
    {
     t: "[最近]{さいきん}、コーヒーが飲めるようになりました。",
     why: "This says she has become able to drink coffee, the opposite direction."
    },
    {
     t: "[最近]{さいきん}、コーヒーを飲まないことにしました。",
     why: "～ことにしました means “I decided not to”. The question says she didn’t decide it."
    }
   ]
  },
  {
   id: "e3u9-q08",
   lesson: "e3u9-l1",
   level: 2,
   q: "A notice at a sports centre says: 「[貴重品]{きちょうひん}は[置]{お}いていかないようにしてください。」 What does it ask?",
   options: [
    {
     t: "Please make sure you don’t leave valuables behind.",
     ok: true,
     why: "ない-form + ようにしてください: a polite “please make sure not to”."
    },
    {
     t: "Please leave your valuables here.",
     why: "That would be [置]{お}いていってください, without the negative."
    },
    {
     t: "Valuables can no longer be left here.",
     why: "That would be ～[置]{お}いていけなくなりました, a change. ～ようにしてください is an instruction."
    },
    {
     t: "Valuables are left here so that they are safe.",
     why: "The sentence asks you to do something; it doesn’t describe what happens to valuables."
    }
   ]
  },
  {
   id: "e3u9-q09",
   lesson: "e3u9-l1",
   level: 3,
   q: "On a station display you read: 「[事故]{じこ}のため、電車が[遅]{おく}れています。」 What does it mean?",
   options: [
    {
     t: "Trains are delayed because of an accident.",
     ok: true,
     why: "In notices and announcements, noun + のため often means “because of”."
    },
    {
     t: "Trains are delayed in order to cause an accident.",
     why: "ため can mean “in order to”, but an accident is not a goal. Here it gives a cause."
    },
    {
     t: "Trains are delayed for the accident victims’ benefit.",
     why: "のために can mean “for the benefit of” a person, but an accident is not someone you help."
    },
    {
     t: "Trains are delayed so that there will be no accident.",
     why: "“So that there will be no accident” would be [事故]{じこ}が起きないように."
    }
   ]
  },
  {
   id: "e3u9-q10",
   lesson: "e3u9-l2",
   level: 1,
   q: "What does ～ことにする tell you about a decision?",
   options: [
    {
     t: "The speaker made it.",
     ok: true,
     why: "～ことにする reports the speaker’s own decision: [留学]{りゅうがく}することにしました (I’ve decided to study abroad)."
    },
    {
     t: "Other people or circumstances made it.",
     why: "That is ～ことになる."
    },
    {
     t: "It is an official rule.",
     why: "That is ～ことになっている."
    },
    {
     t: "It almost happened.",
     why: "That is dictionary form + ところだった."
    }
   ]
  },
  {
   id: "e3u9-q11",
   lesson: "e3u9-l2",
   level: 2,
   q: "Kenji’s company has told him he will move to its Fukuoka office. He tells a friend: 「来月から[福岡]{ふくおか}に[転勤]{てんきん}する（　）。」",
   options: [
    {
     t: "ことになりました",
     ok: true,
     why: "The company decided, so ～ことになりました: “it’s been decided that I’ll transfer”."
    },
    {
     t: "ことにしました",
     why: "～ことにしました says that Kenji decided himself. His company made the decision."
    },
    {
     t: "ところです",
     why: "[転勤]{てんきん}するところです means he is about to transfer at this very moment, which doesn’t fit “from next month”."
    },
    {
     t: "ばかりです",
     why: "ばかり after a dictionary form doesn’t mean “will”. ～たばかり means “just did”."
    }
   ]
  },
  {
   id: "e3u9-q12",
   lesson: "e3u9-l2",
   level: 2,
   q: "Sione has his own rule: he doesn’t eat after nine at night. He says: 「夜九時を[過]{す}ぎたら食べない（　）。」",
   options: [
    {
     t: "ことにしています",
     ok: true,
     why: "A personal rule that holds over time: ～ことにしている."
    },
    {
     t: "ことになっています",
     why: "～ことになっている is an official rule or arrangement, made by others. This is his own rule."
    },
    {
     t: "ようになっています",
     why: "～ようになっている describes how a system works or a change that has come about, not a personal rule."
    },
    {
     t: "ところです",
     why: "ところ marks a moment in an action, not a rule."
    }
   ]
  },
  {
   id: "e3u9-q13",
   lesson: "e3u9-l2",
   level: 1,
   q: "Which word makes the sentence mean “The meeting is just about to start”? 「これから[会議]{かいぎ}が始まる（　）です。」",
   options: [
    {
     t: "ところ",
     ok: true,
     why: "Dictionary form + ところ: just about to."
    },
    {
     t: "はず",
     why: "始まるはずです means “the meeting should start (I expect)”, not “is just about to”."
    },
    {
     t: "ばかり",
     why: "ばかり after a dictionary form doesn’t mean “about to”."
    },
    {
     t: "ことに",
     why: "ことに needs する or なる after it, and it is about decisions."
    }
   ]
  },
  {
   id: "e3u9-q14",
   lesson: "e3u9-l2",
   level: 2,
   q: "A friend calls and asks if you are free to talk. You are busy cooking at this moment. You say: 「ごめん、今料理を（　）。」",
   options: [
    {
     t: "しているところ",
     ok: true,
     why: "～ているところ: right in the middle of doing something."
    },
    {
     t: "したところ",
     why: "～たところ means you have just finished cooking, so you would be free."
    },
    {
     t: "するところ",
     why: "Dictionary form + ところ means you are about to start, not busy right now."
    },
    {
     t: "したばかり",
     why: "～たばかり means you cooked a short time ago; it doesn’t say you are busy now."
    }
   ]
  },
  {
   id: "e3u9-q15",
   lesson: "e3u9-l2",
   level: 2,
   q: "Which sentence is natural?",
   options: [
    {
     t: "先週[引]{ひ}っ[越]{こ}してきたばかりです。",
     ok: true,
     why: "～たばかり works for a period that feels short to the speaker, even a week."
    },
    {
     t: "先週[引]{ひ}っ[越]{こ}してきたところです。",
     why: "～たところ is only for the moment straight after an action. Last week is too long ago."
    },
    {
     t: "先週[引]{ひ}っ[越]{こ}してくるところです。",
     why: "Dictionary form + ところ means “about to”, which clashes with 先週 (last week)."
    },
    {
     t: "先週[引]{ひ}っ[越]{こ}してきてばかりいます。",
     why: "～てばかりいる means “does nothing but”, which doesn’t fit a single move."
    }
   ]
  },
  {
   id: "e3u9-q16",
   lesson: "e3u9-l2",
   level: 3,
   q: "Lucía was leaving for the airport when she saw her passport still on the table. She grabbed it just in time. She says: 「もう少しでパスポートを（　）。」",
   options: [
    {
     t: "[忘]{わす}れるところでした",
     ok: true,
     why: "Dictionary form + ところでした: it almost happened, but didn’t."
    },
    {
     t: "[忘]{わす}れたところでした",
     why: "With the た-form, this would mean “I had just forgotten it”, not “I nearly forgot”."
    },
    {
     t: "[忘]{わす}れたばかりでした",
     why: "～たばかり means it happened a short time before; she didn’t actually forget it."
    },
    {
     t: "[忘]{わす}れることにしました",
     why: "This means “I decided to forget it”."
    }
   ]
  },
  {
   id: "e3u9-q17",
   lesson: "e3u9-l2",
   level: 1,
   q: "What does 「弟はゲームをしてばかりいます。」 mean?",
   options: [
    {
     t: "My younger brother does nothing but play games.",
     ok: true,
     why: "て-form + ばかりいる: nothing but, too much of one thing."
    },
    {
     t: "My younger brother has just played a game.",
     why: "“Just did” is ～たばかり, with the た-form: ゲームをしたばかりです."
    },
    {
     t: "My younger brother is about to play a game.",
     why: "“About to” is dictionary form + ところ: するところです."
    },
    {
     t: "My younger brother is supposed to play games.",
     why: "“Supposed to” would use はず."
    }
   ]
  },
  {
   id: "e3u9-q18",
   lesson: "e3u9-l2",
   level: 3,
   q: "On your first day at a new office, a colleague tells you: 「ここでは、入る前に名前を書くことになっています。」 What is he telling you?",
   options: [
    {
     t: "It is the rule here to write your name before going in.",
     ok: true,
     why: "～ことになっている: an official rule or arrangement."
    },
    {
     t: "He has decided to write his name before going in.",
     why: "His own decision would be ～ことにしました, and he is explaining a rule to you."
    },
    {
     t: "He is just about to write his name.",
     why: "That would be 書くところです."
    },
    {
     t: "People have recently become able to write their names.",
     why: "A change would be ～ようになりました."
    }
   ]
  },
  {
   id: "e3u9-q19",
   lesson: "e3u9-l3",
   level: 1,
   q: "How does a noun such as 休み attach to はず?",
   options: [
    {
     t: "With の: 休みのはず",
     ok: true,
     why: "Nouns take の before はず."
    },
    {
     t: "With な: 休みなはず",
     why: "な is for な-adjectives ([静]{しず}かなはず). 休み is a noun."
    },
    {
     t: "With だ: 休みだはず",
     why: "だ doesn’t come before はず."
    },
    {
     t: "Directly: 休みはず",
     why: "A noun can’t attach directly; it needs の."
    }
   ]
  },
  {
   id: "e3u9-q20",
   lesson: "e3u9-l3",
   level: 2,
   q: "The shop opens at ten, and it is now eleven. You say: 「もう十一時だから、店は開いている（　）です。」",
   options: [
    {
     t: "はず",
     ok: true,
     why: "An expectation from what you know (the opening time): はず."
    },
    {
     t: "べき",
     why: "べき is about what ought to be done. A shop being open isn’t a duty here."
    },
    {
     t: "ところ",
     why: "ところ marks a moment in an action; it doesn’t give your expectation."
    },
    {
     t: "ばかり",
     why: "ばかり after ～ている doesn’t express an expectation."
    }
   ]
  },
  {
   id: "e3u9-q21",
   lesson: "e3u9-l3",
   level: 1,
   q: "How do you say “should not say” with べき?",
   options: [
    {
     t: "言うべきではない",
     ok: true,
     why: "The negative goes on the end: dictionary form + べきではない."
    },
    {
     t: "言わないべきだ",
     why: "Textbooks don’t use ない + べき. The negative is べきではない."
    },
    {
     t: "言うべきない",
     why: "べき works like a noun, so its negative is ではない (or じゃない), not ない alone."
    },
    {
     t: "言ったべきではない",
     why: "べき follows the dictionary form, not the た-form."
    }
   ]
  },
  {
   id: "e3u9-q22",
   lesson: "e3u9-l3",
   level: 2,
   q: "Your team has practised hard all year. You say, confidently: “There’s no way we’ll lose.” 「あんなに[練習]{れんしゅう}したんだから、[負]{ま}ける（　）。」",
   options: [
    {
     t: "はずがない",
     ok: true,
     why: "～はずがない: there’s no way."
    },
    {
     t: "はずだ",
     why: "This says “we should lose”, the opposite of what you mean."
    },
    {
     t: "べきだ",
     why: "This says “we ought to lose”, which makes no sense here."
    },
    {
     t: "わけではない",
     why: "This means “it’s not that we’ll lose”, a partial denial, not a confident “no way”."
    }
   ]
  },
  {
   id: "e3u9-q23",
   lesson: "e3u9-l3",
   level: 2,
   q: "A classmate says: 「[明日]{あした}から一週間、国に帰ります。」 You sum up: “So that means you’ll miss next week’s classes.” 「じゃあ、来週の[授業]{じゅぎょう}は休む（　）ね。」",
   options: [
    {
     t: "わけです",
     ok: true,
     why: "わけ sums up a conclusion that follows from what you’ve just heard."
    },
    {
     t: "べきです",
     why: "べき says what someone ought to do. You are drawing a conclusion, not giving advice."
    },
    {
     t: "はずがありません",
     why: "This means “there’s no way you’ll miss them”, the opposite of the conclusion."
    },
    {
     t: "ところでした",
     why: "Dictionary form + ところでした means “almost”, which doesn’t fit."
    }
   ]
  },
  {
   id: "e3u9-q24",
   lesson: "e3u9-l3",
   level: 3,
   q: "Ana has always been a great cook. Today she tells you her mother runs a restaurant. You say: “So that’s why you’re such a good cook!” 「それで料理が[上手]{じょうず}な（　）ね。」",
   options: [
    {
     t: "わけです",
     ok: true,
     why: "You knew the fact (she cooks well) and have just learned the reason: わけだ, “that explains it”."
    },
    {
     t: "べきです",
     why: "べき would say she ought to be a good cook, as a duty."
    },
    {
     t: "ところです",
     why: "ところ marks the moment of an action; it doesn’t explain a reason."
    },
    {
     t: "ようにします",
     why: "～ようにする is making an effort, and it follows a verb, not an adjective with な."
    }
   ]
  },
  {
   id: "e3u9-q25",
   lesson: "e3u9-l3",
   level: 2,
   q: "Choose the ending: “It’s not that I have no money, but I don’t want to buy it now.” 「お金がない（　）が、今は買いたくない。」",
   options: [
    {
     t: "わけではない",
     ok: true,
     why: "～わけではない denies a conclusion the listener might draw, without denying everything."
    },
    {
     t: "わけがない",
     why: "～わけがない means “there’s no way I have no money”, which doesn’t lead into “but I don’t want to buy it”."
    },
    {
     t: "はずだ",
     why: "This would mean “I expect I have no money”."
    },
    {
     t: "べきだ",
     why: "べき follows the dictionary form of a verb and means “ought to”."
    }
   ]
  },
  {
   id: "e3u9-q26",
   lesson: "e3u9-l3",
   level: 3,
   q: "Dmitri didn’t book a hotel for the festival weekend. He never planned to, and now every hotel is full. He regrets it: 「もっと早く[予約]{よやく}する（　）。」",
   options: [
    {
     t: "べきだった",
     ok: true,
     why: "～べきだった: should have (done the right thing), a regret."
    },
    {
     t: "はずだった",
     why: "～はずだった means “was supposed to”, an expectation or plan that didn’t happen. Dmitri never planned to book."
    },
    {
     t: "ところだった",
     why: "Dictionary form + ところだった means “almost booked”, which isn’t what happened."
    },
    {
     t: "わけだった",
     why: "わけ draws a conclusion; it doesn’t express regret."
    }
   ]
  },
  {
   id: "e3u9-q27",
   lesson: "e3u9-l3",
   level: 2,
   q: "Sara is talking about her own plan: “I intend to study in Japan next year.” 「来年、日本に[留学]{りゅうがく}する（　）です。」",
   options: [
    {
     t: "つもり",
     ok: true,
     why: "つもり is a person’s own intention."
    },
    {
     t: "はず",
     why: "はず is an expectation based on facts, not a statement of your own intention."
    },
    {
     t: "べき",
     why: "べき says what ought to be done, a duty, not a personal plan."
    },
    {
     t: "わけ",
     why: "わけ draws a conclusion from facts."
    }
   ]
  },
  {
   id: "e3u9-q28",
   lesson: "e3u9-l4",
   level: 1,
   q: "In ～てほしい, which particle usually marks the person you want to do the action?",
   options: [
    {
     t: "に",
     ok: true,
     why: "[友達]{ともだち}に[手伝]{てつだ}ってほしい: the person who should act takes に."
    },
    {
     t: "を",
     why: "を marks the object of the action, not the person you want to act."
    },
    {
     t: "で",
     why: "で marks a place or a means."
    },
    {
     t: "と",
     why: "と means “with” or “and” here, not the person who should act."
    }
   ]
  },
  {
   id: "e3u9-q29",
   lesson: "e3u9-l4",
   level: 2,
   q: "Complete the wish: “I want my parents to stay well for ever.” 「[両親]{りょうしん}にはいつまでも元気で（　）。」",
   options: [
    {
     t: "いてほしい",
     ok: true,
     why: "いる in the て-form + ほしい: you want someone else to be or do something."
    },
    {
     t: "いたい",
     why: "～たい is about yourself: “I want to stay well”."
    },
    {
     t: "いてほしがる",
     why: "～てほしがる describes a third person’s wish, not your own."
    },
    {
     t: "いるほしい",
     why: "ほしい follows the て-form, not the dictionary form."
    }
   ]
  },
  {
   id: "e3u9-q30",
   lesson: "e3u9-l4",
   level: 3,
   q: "Fatima needs her professor to write a recommendation letter. What should she say to the professor?",
   options: [
    {
     t: "[推薦状]{すいせんじょう}を書いていただけませんか。",
     ok: true,
     why: "A polite request with ～ていただけませんか suits a professor."
    },
    {
     t: "[推薦状]{すいせんじょう}を書いてほしいです。",
     why: "～てほしいです states her wish directly. To a professor it can sound like a demand."
    },
    {
     t: "[推薦状]{すいせんじょう}を書きたいです。",
     why: "～たい is about herself: “I want to write a recommendation letter”."
    },
    {
     t: "[推薦状]{すいせんじょう}を書いてほしがっています。",
     why: "～てほしがっている describes a third person’s wish."
    }
   ]
  },
  {
   id: "e3u9-q31",
   lesson: "e3u9-l4",
   level: 2,
   q: "Choose the word: 「[友達]{ともだち}が[手伝]{てつだ}ってくれた（　）、[引]{ひ}っ[越]{こ}しが早く終わりました。」",
   options: [
    {
     t: "おかげで",
     ok: true,
     why: "A good result, with thanks to the friend: おかげで."
    },
    {
     t: "せいで",
     why: "せいで blames a cause for a bad result. Finishing early is good."
    },
    {
     t: "のに",
     why: "のに means “even though”, which contradicts the good result."
    },
    {
     t: "ように",
     why: "ように gives a purpose (“so that”), not a cause."
    }
   ]
  },
  {
   id: "e3u9-q32",
   lesson: "e3u9-l4",
   level: 3,
   q: "Building work next door kept Ji-ho awake all night, and he is annoyed. Which word puts the blame on the building work? 「[隣]{となり}の工事の（　）、ぜんぜん[眠]{ねむ}れなかった。」",
   options: [
    {
     t: "せいで",
     ok: true,
     why: "せいで gives the cause of a bad result and blames it."
    },
    {
     t: "おかげで",
     why: "おかげで means “thanks to”. With a bad result it sounds sarcastic or half-joking, not a plain complaint."
    },
    {
     t: "ために",
     why: "Noun + のために can give a cause, but it is neutral and formal: it doesn’t blame."
    },
    {
     t: "ように",
     why: "Noun + のように means “like”, not “because of”."
    }
   ]
  },
  {
   id: "e3u9-q33",
   lesson: "e3u9-l4",
   level: 1,
   q: "A neighbour asks you 「お元気ですか。」 Which reply politely thanks them for their concern?",
   options: [
    {
     t: "はい、おかげさまで。",
     ok: true,
     why: "おかげさまで is the set phrase for this: “Yes, thank you (for asking)”."
    },
    {
     t: "はい、せいで。",
     why: "せいで blames a cause and can’t stand alone as a reply."
    },
    {
     t: "はい、おかげで。",
     why: "おかげで needs a cause before it (先生のおかげで). The set reply is おかげさまで."
    },
    {
     t: "はい、ばいい。",
     why: "ばいい follows a ば-form and gives advice or a hope."
    }
   ]
  },
  {
   id: "e3u9-q34",
   lesson: "e3u9-l4",
   level: 2,
   q: "How do you say “the cheaper, the better” with 安い?",
   options: [
    {
     t: "安ければ安いほどいい",
     ok: true,
     why: "い-adjective: ば-form (～ければ), then the plain form + ほど."
    },
    {
     t: "安いば安いほどいい",
     why: "The ば-form of an い-adjective is ～ければ, not ～いば."
    },
    {
     t: "安ければ安ければほどいい",
     why: "The second word is in the plain form: 安いほど."
    },
    {
     t: "安いほど安ければいい",
     why: "The order is reversed: the ば-form comes first."
    }
   ]
  },
  {
   id: "e3u9-q35",
   lesson: "e3u9-l4",
   level: 2,
   q: "You ask a passer-by for directions: “How do I get to the station?” 「駅までどうやって行け（　）ですか。」",
   options: [
    {
     t: "ばいい",
     ok: true,
     why: "どうやって～ばいいですか asks what you should do."
    },
    {
     t: "てほしい",
     why: "ほしい follows a て-form (行って), and “want someone to” doesn’t fit a request for directions."
    },
    {
     t: "ばよかった",
     why: "～ばよかった is regret about the past: “I should have gone”."
    },
    {
     t: "ばほど",
     why: "ほど needs the word repeated: 行けば行くほど, “the more you go”."
    }
   ]
  },
  {
   id: "e3u9-q36",
   lesson: "e3u9-l4",
   level: 3,
   q: "Your friend only told you about the party after it had ended. You say: 「もっと早く言ってくれればよかったのに。」 What do you mean?",
   options: [
    {
     t: "I wish you had told me sooner.",
     ok: true,
     why: "～ばよかったのに: a wish about the past, often with a mild complaint."
    },
    {
     t: "Thank you for telling me so early.",
     why: "That would use おかげで or ありがとう; ～ばよかったのに expresses regret."
    },
    {
     t: "Tell me early next time, or else.",
     why: "The sentence is about the past (よかった), not an instruction for next time."
    },
    {
     t: "I’m glad you told me early.",
     why: "They didn’t tell you early; のに shows the wish didn’t come true."
    }
   ]
  },
  {
   id: "e3u9-q37",
   lesson: "e3u9-l5",
   level: 1,
   q: "Which compound particle means “about”, giving the topic of talking, thinking or research?",
   options: [
    {
     t: "について",
     ok: true,
     why: "について marks the topic or content: [歴史]{れきし}について話す."
    },
    {
     t: "として",
     why: "として means “as”, a role."
    },
    {
     t: "にとって",
     why: "にとって means “for, from the point of view of”, with evaluations."
    },
    {
     t: "によって",
     why: "によって means “depending on”, “by means of” or “because of”."
    }
   ]
  },
  {
   id: "e3u9-q38",
   lesson: "e3u9-l5",
   level: 2,
   q: "Choose the form before the noun: 「[環境]{かんきょう}（　）本を読みました。」 (I read a book about the environment.)",
   options: [
    {
     t: "についての",
     ok: true,
     why: "Before a noun, について becomes についての."
    },
    {
     t: "について",
     why: "について ends in a て-form, so it can’t go straight before a noun: add の."
    },
    {
     t: "に[対]{たい}する",
     why: "に[対]{たい}する marks a target of an attitude, not the content of a book."
    },
    {
     t: "にとっての",
     why: "にとっての gives a point of view, “for”. The book is about the environment, not judged from its point of view."
    }
   ]
  },
  {
   id: "e3u9-q39",
   lesson: "e3u9-l5",
   level: 2,
   q: "Choose the particle: 「[留学生]{りゅうがくせい}（　）、アルバイトの[情報]{じょうほう}は大切だ。」 (For international students, information about part-time jobs is important.)",
   options: [
    {
     t: "にとって",
     ok: true,
     why: "An evaluation (大切) from the students’ point of view: にとって."
    },
    {
     t: "に[対]{たい}して",
     why: "に[対]{たい}して marks the target of an attitude or action, not the point of view of a judgement."
    },
    {
     t: "として",
     why: "として gives a role (“as international students”), which doesn’t fit an evaluation like this."
    },
    {
     t: "について",
     why: "について gives the topic of talking or thinking. The sentence judges importance from the students’ side."
    }
   ]
  },
  {
   id: "e3u9-q40",
   lesson: "e3u9-l5",
   level: 2,
   q: "Tomás works in Japan as an engineer. Choose the particle: 「エンジニア（　）[働]{はたら}いています。」",
   options: [
    {
     t: "として",
     ok: true,
     why: "として gives the role in which someone acts."
    },
    {
     t: "にとって",
     why: "にとって needs an evaluation, and it can’t go with an action like working."
    },
    {
     t: "について",
     why: "について means “about”; he isn’t working “about” an engineer."
    },
    {
     t: "によって",
     why: "によって means “depending on” or “by means of”."
    }
   ]
  },
  {
   id: "e3u9-q41",
   lesson: "e3u9-l5",
   level: 2,
   q: "Choose the particle: 「田中先生は学生（　）とても親切です。」 (Ms Tanaka is very kind to her students.)",
   options: [
    {
     t: "に[対]{たい}して",
     ok: true,
     why: "Kindness is an attitude aimed at someone: に[対]{たい}して marks the target."
    },
    {
     t: "にとって",
     why: "にとって gives the point of view of an evaluation. For kindness aimed at someone, use に[対]{たい}して."
    },
    {
     t: "として",
     why: "として means “as”: “kind as a student”, which isn’t the meaning."
    },
    {
     t: "によって",
     why: "によって means “depending on”: “kind depending on the student”, which isn’t the meaning."
    }
   ]
  },
  {
   id: "e3u9-q42",
   lesson: "e3u9-l5",
   level: 3,
   q: "A sign at a tourist information centre says: 「店によっては、[現金]{げんきん}しか使えません。」 What does it mean?",
   options: [
    {
     t: "Some shops accept only cash.",
     ok: true,
     why: "によっては means “depending on”, “in some cases”: some shops, not all."
    },
    {
     t: "No shop accepts cash.",
     why: "しか～ません means “only”: some shops accept nothing but cash."
    },
    {
     t: "Every shop accepts only cash.",
     why: "によっては picks out some members of a group, not every one."
    },
    {
     t: "Because of the shops, cash can’t be used.",
     why: "によっては isn’t a cause here; it means “depending on the shop”."
    }
   ]
  },
  {
   id: "e3u9-q43",
   lesson: "e3u9-l5",
   level: 1,
   q: "Choose the particle: 「人（　）考え[方]{かた}が[違]{ちが}います。」 (Ways of thinking differ from person to person.)",
   options: [
    {
     t: "によって",
     ok: true,
     why: "によって means “depending on”, and it goes naturally with [違]{ちが}う."
    },
    {
     t: "にとって",
     why: "にとって gives the point of view of an evaluation, not what something depends on."
    },
    {
     t: "について",
     why: "について gives a topic, “about people”, which doesn’t fit [違]{ちが}う here."
    },
    {
     t: "として",
     why: "として gives a role: “as a person”."
    }
   ]
  },
  {
   id: "e3u9-q44",
   lesson: "e3u9-l5",
   level: 1,
   q: "What does によると mean, as in [天気予報]{てんきよほう}によると、[明日]{あした}は雨だそうです?",
   options: [
    {
     t: "according to (a source of information)",
     ok: true,
     why: "によると gives the source, often with ～そうだ or ～らしい at the end."
    },
    {
     t: "depending on",
     why: "That is によって."
    },
    {
     t: "in the role of",
     why: "That is として."
    },
    {
     t: "from the point of view of",
     why: "That is にとって."
    }
   ]
  },
  {
   id: "e3u9-q45",
   lesson: "e3u9-l5",
   level: 3,
   q: "Hana is writing a report on her research. Which sentence is correct?",
   options: [
    {
     t: "日本の[祭]{まつ}りについて[調]{しら}べました。",
     ok: true,
     why: "Research is about content, so について."
    },
    {
     t: "日本の[祭]{まつ}りに[対]{たい}して[調]{しら}べました。",
     why: "に[対]{たい}して marks the target of an attitude or reaction. With research verbs, only について works."
    },
    {
     t: "日本の[祭]{まつ}りにとって[調]{しら}べました。",
     why: "にとって needs an evaluation, not an action like researching."
    },
    {
     t: "日本の[祭]{まつ}りとして[調]{しら}べました。",
     why: "として gives a role: “researched as a festival”, which isn’t the meaning."
    }
   ]
  }
 ]
});
