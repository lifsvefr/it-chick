/* Japanese Foundations · Unit 10 (e3u10) · N3 grammar II */
/* N3 furigana rule (JFOUND_BRIEF §2): furigana on kanji above N4 and on irregular readings. */
ICA.addUnit({
 id: "e3u10",
 track: "e3",
 n: 10,
 title: "N3 grammar II",
 icon: "🧩",
 blurb: "“Even if” with ～ても and ～としても, “even” with ～さえ, and “not only” with ～だけでなく; time clauses with ～うちに, ～[間]{あいだ}, ～たびに and ～[最中]{さいちゅう}に; ～かわりに, ～に[比]{くら}べて, ～ほど and ～くらい; ～わけではない, ～ことはない, ～ものだ and ～っけ; the suffixes ～っぽい, ～がち and ～[気味]{ぎみ}; keigo in real situations; and fifteen more everyday N3 patterns, from ～まま, ～ずに and ～しかない to ～とたん, ～に[関]{かん}して and ～わりに.",
 goals: [
  "Say “even if”, “even though” and “no matter how” with ～ても and ～としても, and tell them from ～たら and ～のに",
  "Point to an extreme example with ～さえ, set a single condition with ～さえ～ば, and add a second point with ～だけでなく～も",
  "Place events in time with ～うちに, ～[間]{あいだ} and ～[間]{あいだ}に, ～たびに and ～[最中]{さいちゅう}に",
  "Say “instead of” with ～かわりに, compare with ～に[比]{くら}べて, and show degree with ～ほど and ～くらい",
  "Deny part of an idea with ～わけではない, say “no need” with ～ことはない, use ～ものだ for what is natural, advisable or remembered, and check facts with ～っけ",
  "Describe tendencies and signs with ～っぽい, ～がち and ～[気味]{ぎみ}",
  "Use respectful and humble language in shops, on the phone, with visitors and in requests",
  "Describe states and manner with ～まま, ～っぱなし, ～ずに, ～とおりに and ～ふりをする, and say “no choice but” and “I’m sure” with ～しかない, ～に[違]{ちが}いない and ～に[決]{き}まっている",
  "Link events and set a range or focus with ～たとたん, ～ついでに, ～て以来, ～から～にかけて, ～を中心に and ～に[関]{かん}して",
  "Weigh a result against expectations with ～わりに and ～にしては, and go further than ～だけでなく with ～ばかりか"
 ],
 read: [
  {
   book: "taekim",
   where: "Advanced Topics: “The minimum expectation” (さえ) and “Tendencies” (～がち); Special Expressions: “Expressing Amounts” (ほど, しか), “Honorific and Humble Forms”, “Expressing a lack of change” (まま, っぱなし), “More negative verbs” (～ずに) and “Time-specific actions” (とたん)"
  },
  {
   book: "imabi",
   where: "Lessons 149, 223, 260, 262, 272, 334, 343 and 361 (～とおりに, ～に関して, ～に違いない, ～て以来, ～にかけて, わりに・にしては, ～を中心に, ～ついでに)",
   note: "For Lessons 6 and 7. Detailed and advanced: look up one pattern at a time."
  },
  {
   book: "irodori",
   where: "Elementary 2, Lessons 13 and 16 (～ても, ～だけじゃなくて), and Pre-Intermediate, Lessons 1, 3, 6, 7 and 9 (～っけ, ～っぽい, ～がち, ～うちに, ～[間]{あいだ}に) and the lessons with respectful and humble expressions (4, 8, 11, 12, 13, 16, 17 and 18)",
   note: "Each lesson’s Read section names the exact lessons. Not every pattern in this unit is in IRODORI; the lessons here teach them fully."
  }
 ],
 lessons: [
  {
   id: "e3u10-l1",
   title: "Even if, even, and not only: ～ても, ～としても, ～さえ and ～だけでなく",
   minutes: 60,
   hook: {
    q: "Kaito yawns and says: 「いくら[寝]{ね}ても、[眠]{ねむ}いんです。」 ([寝]{ね}る = sleep; [眠]{ねむ}い = sleepy) What is his problem?",
    options: [
     "However much he sleeps, he is still sleepy",
     "He can’t get to sleep, however hard he tries",
     "He sleeps a lot because he is always sleepy",
     "He is sleepy because he hasn’t slept for days"
    ],
    answer: 0,
    reveal: "**However much he sleeps, he is still sleepy.** [寝]{ね}ても is the て-form of [寝]{ね}る plus も: “even if I sleep”. With いくら in front, it becomes “however much I sleep”. The pattern says that the first part, however big, doesn’t change the second. This lesson builds ～ても for every kind of word, and adds three relatives: ～としても, ～さえ and ～だけでなく."
   },
   goals: [
    "Build the ても-form of verbs, adjectives and nouns, including the negative ～なくても",
    "Say “no matter how” or “whatever” with question words and ～ても",
    "Tell ～ても from ～たら and ～のに, and use ～としても for a supposition",
    "Use ～さえ for an extreme example, and ～さえ～ば for “as long as”",
    "Add a second point with ～だけでなく～も, and tell it from ～ではなく"
   ],
   learn: [
    {
     h: "～ても: the result doesn’t change",
     body: [
      {
       lead: "You already know ～てもいいです (you may). Without いいです, the て-form + も means “even if” or “even though”: whatever happens in the first half, the second half stays the same."
      },
      {
       ex: "雨が[降]{ふ}っても、サッカーの[練習]{れんしゅう}はあります。\nEven if it rains, there is football practice.\n\n高くても、この[辞書]{じしょ}を買います。\nEven if it’s expensive, I’ll buy this dictionary.\n\n[薬]{くすり}を飲んでも、[熱]{ねつ}が下がりません。\nEven though I’ve taken medicine, my fever won’t go down.",
       label: "～ても"
      },
      "The first two sentences are about something that **may** happen: it may rain, the dictionary may be expensive. The third is about something that **did** happen: I took the medicine. English needs two words for this, “even if” and “even though”. Japanese uses the same [[temo|～ても]] for both, and the context tells you which.",
      "The idea is always the same: you might expect the first part to change the second, and it doesn’t. Rain might cancel practice, but it won’t. Medicine should bring a fever down, but it hasn’t.",
      {
       tip: "Listen for the end of the sentence. A plan, a rule or a habit (あります, 買います) usually means “even if”. A report of what actually happened, or is happening, usually means “even though”."
      }
     ]
    },
    {
     h: "Building the ても-form",
     body: [
      "Make the [[te-form|て-form]] (Unit 3) and add も. The negative is ～なくても, from the ない-form.",
      {
       table: [
        [
         "Word",
         "～ても (even if)",
         "～なくても (even if not)"
        ],
        [
         "書く (godan)",
         "書いても",
         "書かなくても"
        ],
        [
         "食べる (ichidan)",
         "食べても",
         "食べなくても"
        ],
        [
         "する・[来]{く}る",
         "しても・[来]{き}ても",
         "しなくても・[来]{こ}なくても"
        ],
        [
         "高い (い-adj.)",
         "高くても",
         "高くなくても"
        ],
        [
         "いい",
         "よくても",
         "よくなくても"
        ],
        [
         "[静]{しず}か (な-adj.)",
         "[静]{しず}かでも",
         "[静]{しず}かじゃなくても"
        ],
        [
         "雨 (noun)",
         "雨でも",
         "雨じゃなくても"
        ]
       ]
      },
      {
       key: "Verbs: て-form + も. い-adjectives: ～くても. な-adjectives and nouns: ～でも. Negatives: ～なくても."
      },
      "In writing, the negative of nouns and な-adjectives is often ～でなくても: [静]{しず}かでなくても, 雨でなくても. いい follows its usual rule and becomes よくても.",
      "～ても has no past form of its own. The tense comes from the end of the sentence: [昨日]{きのう}は、いくら電話しても出ませんでした (Yesterday, however many times I called, she didn’t answer).",
      {
       warn: "Don’t confuse noun + でも (“even if it’s…”) with the でも of invitations, which means “or something”: お茶でも飲みませんか (How about a tea or something?). The sentence tells you which: a suggestion ending in ませんか is the “or something” でも."
      }
     ]
    },
    {
     h: "No matter what: question words + ～ても",
     body: [
      "With a question word in front, ～ても means “no matter what, who, how…”. The choice in the first half makes no difference to the second.",
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "いくら～ても",
         "however much",
         "いくら[練習]{れんしゅう}しても、[上手]{じょうず}になりません。\nHowever much I practice, I don’t get any better."
        ],
        [
         "どんなに～ても",
         "however (+ adjective)",
         "どんなに[忙]{いそが}しくても、朝ごはんは食べます。\nHowever busy I am, I eat breakfast."
        ],
        [
         "何を～ても",
         "whatever",
         "何を着ても、よく[似合]{にあ}いますね。\nWhatever you wear, it suits you."
        ],
        [
         "だれに～ても",
         "whoever",
         "だれに聞いても、答えは同じでした。\nWhoever I asked, the answer was the same."
        ],
        [
         "いつ～ても",
         "whenever",
         "いつ[来]{き}ても、この店は[混]{こ}んでいます。\nWhenever I come, this shop is crowded."
        ]
       ]
      },
      "**たとえ** in front of ～ても adds weight. It is like saying “even if” with emphasis: たとえ[反対]{はんたい}されても、[留学]{りゅうがく}します (Even if they’re against it, I’m going to study abroad). たとえ doesn’t change the grammar; it warns the listener that a ～ても is coming.",
      {
       tip: "どんなに and いくら almost always need ～ても (or ～でも) later in the sentence. If you start with どんなに, you have promised your listener a ～ても."
      }
     ]
    },
    {
     h: "～ても, ～たら or ～のに?",
     body: [
      "Three patterns join a condition and a result, and learners often mix them up. Compare them with the same rain:",
      {
       fig: "<svg viewBox=\"0 0 340 336\"><defs><marker id=\"e3u10a1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">One condition, three results</text><rect class=\"d-sage\" x=\"6\" y=\"32\" width=\"328\" height=\"92\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"54\">～たら: if A, then B</text><rect class=\"d-panel\" x=\"16\" y=\"64\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"82\" y=\"86\" text-anchor=\"middle\">あめがふったら</text><path class=\"d-ink\" d=\"M152 81H186\" stroke-width=\"2\" marker-end=\"url(#e3u10a1)\"/><rect class=\"d-panel\" x=\"192\" y=\"64\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"258\" y=\"86\" text-anchor=\"middle\">いきません</text><text class=\"s\" x=\"170\" y=\"116\" text-anchor=\"middle\">B follows from A</text><rect class=\"d-gold\" x=\"6\" y=\"136\" width=\"328\" height=\"92\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"158\">～ても: even if A, still B</text><rect class=\"d-panel\" x=\"16\" y=\"168\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"82\" y=\"190\" text-anchor=\"middle\">あめがふっても</text><path class=\"d-ink\" d=\"M152 185H186\" stroke-width=\"2\" marker-end=\"url(#e3u10a1)\"/><path class=\"d-ink\" d=\"M163 176L175 194M175 176L163 194\" stroke-width=\"2.5\"/><rect class=\"d-panel\" x=\"192\" y=\"168\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"258\" y=\"190\" text-anchor=\"middle\">いきます</text><text class=\"s\" x=\"170\" y=\"220\" text-anchor=\"middle\">A does not change B (may or may not happen)</text><rect class=\"d-rose\" x=\"6\" y=\"240\" width=\"328\" height=\"92\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"262\">～のに: A is a fact, B goes against it</text><rect class=\"d-panel\" x=\"16\" y=\"272\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"82\" y=\"294\" text-anchor=\"middle\">あめなのに</text><path class=\"d-ink\" d=\"M152 289H186\" stroke-width=\"2\" marker-end=\"url(#e3u10a1)\"/><text x=\"169\" y=\"280\" text-anchor=\"middle\">!</text><rect class=\"d-panel\" x=\"192\" y=\"272\" width=\"132\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"258\" y=\"294\" text-anchor=\"middle\">でかけた</text><text class=\"s\" x=\"170\" y=\"324\" text-anchor=\"middle\">a real event, with surprise or complaint</text></svg>",
       alt: "Three panels. ～たら: if A, then B; あめがふったら with an arrow to いきません; B follows from A. ～ても: even if A, still B; あめがふっても with a crossed-out arrow to いきます; A does not change B, and A may or may not happen. ～のに: A is a fact and B goes against it; あめなのに with an arrow and an exclamation mark to でかけた; a real event, with surprise or complaint.",
       cap: "～たら links A to B; ～ても cuts the link; ～のに reports a real A and a B that goes against it."
      },
      {
       table: [
        [
         "",
         "～ても",
         "～のに"
        ],
        [
         "Can A be something that might happen?",
         "Yes: [明日]{あした}雨が[降]{ふ}っても",
         "No: A must be a fact"
        ],
        [
         "Feeling",
         "Neutral",
         "Surprise, disappointment or complaint"
        ],
        [
         "Can B be a request or a plan?",
         "Yes: 雨でも[来]{き}てください",
         "No (use けど)"
        ]
       ]
      },
      "**Real overlap.** With past facts, both are natural: [薬]{くすり}を飲んだのに[治]{なお}らなかった and [薬]{くすり}を飲んでも[治]{なお}らなかった both mean that the medicine didn’t work. のに adds your disappointment; ても reports it more calmly. When A is something that hasn’t happened yet, only ても works. ～のに is reviewed from Unit 7 ([[noni]]).",
      "And ～たら says the opposite of ～ても: 雨が[降]{ふ}ったら行きません (if it rains, I won’t go) against 雨が[降]{ふ}っても行きます (even if it rains, I’ll go). See {{conditionals-to-ba-tara-nara}} for ～たら."
     ]
    },
    {
     h: "～としても: even supposing",
     body: [
      {
       lead: "Plain form + [[to-shite-mo|としても]] means “even supposing that…”. It makes the condition clearly a supposition, often one you think unlikely or untrue."
      },
      {
       table: [
        [
         "Before としても",
         "Example"
        ],
        [
         "verb (present or past)",
         "行くとしても・行ったとしても"
        ],
        [
         "い-adjective",
         "高いとしても"
        ],
        [
         "な-adjective + だ",
         "[便利]{べんり}だとしても"
        ],
        [
         "noun + だ",
         "[冗談]{じょうだん}だとしても"
        ]
       ]
      },
      {
       ex: "[宝]{たから}くじが[当]{あ}たったとしても、仕事は[辞]{や}めません。\nEven if I won the lottery, I wouldn’t quit my job.\n\n今から急いだとしても、[間]{ま}に[合]{あ}わないでしょう。\nEven if we hurried now, we probably wouldn’t make it.\n\nたとえ[冗談]{じょうだん}だとしても、そんなことを言ってはいけません。\nEven if it was a joke, you shouldn’t say things like that.",
       label: "～としても"
      },
      "Notice that としても can follow a **past** form: [当]{あ}たったとしても, 急いだとしても. ～ても can’t: there is no ✗ 急いだても. Often both patterns are possible, and ～としても simply makes the “suppose” stronger: 今から急いでも[間]{ま}に[合]{あ}わない is also natural.",
      {
       warn: "A **noun directly + としても**, with no だ, is a different pattern: として (“as”, Unit 9) + も (“too”). 親としても[心配]{しんぱい}です means “As a parent, I’m worried too”, not “even if I’m a parent”. Look for だ: 親だとしても = “even if I am a parent”. See [[to-shite]]."
      }
     ]
    },
    {
     h: "～さえ: even, and if only",
     body: [
      {
       lead: "[[sae|さえ]] points to an extreme example: “even X”, so of course everything else too. It is stronger than も."
      },
      {
       ex: "[忙]{いそが}しくて、昼ごはんを食べる時間さえありませんでした。\nI was so busy I didn’t even have time to eat lunch.\n\nこの問題は、先生でさえわかりませんでした。\nEven the teacher couldn’t solve this problem.\n\n[息子]{むすこ}は、まだひらがなさえ読めません。\nMy son can’t even read hiragana yet.",
       label: "～さえ"
      },
      {
       table: [
        [
         "Usual particle",
         "With さえ",
         "Example"
        ],
        [
         "が・を",
         "replaced by さえ",
         "水さえ飲めなかった (couldn’t even drink water)"
        ],
        [
         "に・と・から…",
         "kept: にさえ, とさえ",
         "家族にさえ話していない (haven’t told even my family)"
        ],
        [
         "subject (person)",
         "often でさえ",
         "子どもでさえ知っている (even children know)"
        ]
       ]
      },
      "さえ and でも overlap: 子どもでも知っている also means “even children know”. でも is the everyday choice; さえ is stronger and a little more formal.",
      {
       h: "～さえ～ば: as long as, if only"
      },
      "With a ば-form later in the sentence ([[conditional-ba]]), さえ marks the **one thing** that is needed: “as long as X”, or “if only X”.",
      {
       table: [
        [
         "Before さえ",
         "Pattern",
         "Example"
        ],
        [
         "noun",
         "N さえ ～ば",
         "時間さえあれば、もっと旅行したいです。\nIf only I had the time, I’d travel more."
        ],
        [
         "verb (ます stem)",
         "stem + さえ すれば",
         "この[薬]{くすり}を飲みさえすれば、すぐ[治]{なお}りますよ。\nJust take this medicine and you’ll soon be better."
        ],
        [
         "する-noun",
         "N さえ すれば",
         "[練習]{れんしゅう}さえすれば、[上手]{じょうず}になります。\nAs long as you practice, you’ll improve."
        ]
       ]
      },
      "Two more you will hear: [住所]{じゅうしょ}さえわかれば、送れます (as long as I know the address, I can send it) and あなたさえよければ (if it’s all right with you). The verb form is easy to get wrong: 飲みさえ**すれば**, not ✗ 飲みさえば."
     ]
    },
    {
     h: "～だけでなく～も: not only… but also",
     body: [
      {
       lead: "[[dake-de-naku|だけでなく]] adds a second point to the first: “not only A, but also B”. B usually has も."
      },
      {
       table: [
        [
         "Before だけでなく",
         "Example"
        ],
        [
         "noun",
         "英語だけでなく"
        ],
        [
         "verb (plain)",
         "見るだけでなく"
        ],
        [
         "い-adjective",
         "安いだけでなく"
        ],
        [
         "な-adjective + な",
         "[静]{しず}か**な**だけでなく"
        ]
       ]
      },
      {
       ex: "イエンさんは英語だけでなく、日本語も話せます。\nYến speaks not only English but also Japanese.\n\nこの店は安いだけでなく、味もいいです。\nThis restaurant isn’t just cheap; the food is good too.\n\nこの町は[静]{しず}かなだけでなく、[交通]{こうつう}も[便利]{べんり}です。\nThis town is not only quiet, it also has good transport.\n\n見るだけでなく、[実際]{じっさい}に作ってみましょう。\nLet’s not just watch; let’s actually make one.",
       label: "～だけでなく～も"
      },
      "In conversation you will hear **だけじゃなくて**; in writing, **だけではなく**. ～ばかりでなく means the same and is a little more formal. Its stronger, more written relative ～ばかりか (“not only… but even”) comes in Lesson 7 ({{time-range-focus-contrast}}).",
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "A だけでなく B も",
         "not only A, but also B",
         "肉だけでなく魚も食べます。(I eat both.)"
        ],
        [
         "A ではなく B",
         "not A, but B",
         "肉ではなく魚を食べます。(Fish instead of meat.)"
        ]
       ]
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
         "[静]{しず}かだても",
         "[静]{しず}かでも",
         "な-adjectives and nouns take でも."
        ],
        [
         "急いだても",
         "急いでも・急いだとしても",
         "ても follows the て-form; only としても follows the past."
        ],
        [
         "[明日]{あした}雨が[降]{ふ}るのに、行きます。",
         "[明日]{あした}雨が[降]{ふ}っても、行きます。",
         "のに needs a fact; tomorrow’s rain isn’t one yet."
        ],
        [
         "飲みさえば",
         "飲みさえすれば",
         "With verbs, さえ goes on the stem and すれば follows."
        ],
        [
         "[静]{しず}かだけでなく",
         "[静]{しず}かなだけでなく",
         "な-adjectives take な before だけでなく."
        ]
       ]
      },
      "The full reference is in {{concession-temo}}.",
      {
       terms: [
        "temo",
        "to-shite-mo",
        "sae",
        "dake-de-naku"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l1-x1",
     type: "match",
     q: "Make the ても-form (“even if”) of each word.",
     pairs: [
      [
       "行く",
       "行っても",
       "行く has the irregular て-form 行って, so 行っても."
      ],
      [
       "[来]{く}る",
       "[来]{き}ても",
       "[来]{く}る → [来]{き}て → [来]{き}ても, read きても."
      ],
      [
       "いい",
       "よくても",
       "いい conjugates from よい: よくても."
      ],
      [
       "[静]{しず}か",
       "[静]{しず}かでも",
       "な-adjectives take でも."
      ],
      [
       "食べない",
       "食べなくても",
       "Negative: ない → なくても."
      ]
     ]
    },
    {
     id: "e3u10-l1-x2",
     type: "mcq",
     q: "Complete the sentence: どんなに[忙]{いそが}しく（　）、毎日日本語を勉強します。",
     options: [
      {
       t: "ても",
       ok: true,
       why: "Right. どんなに… ても: “however busy I am, I study Japanese every day.” The busyness doesn’t change the habit."
      },
      {
       t: "たら",
       why: "[忙]{いそが}しかったら would be the form, and “if I’m busy, I study” contradicts どんなに, which promises a ～ても."
      },
      {
       t: "て",
       why: "[忙]{いそが}しくて means “I’m busy, and so…”. It can’t follow どんなに, and the meaning would be “because I’m busy, I study”."
      },
      {
       t: "ないで",
       why: "い-adjectives don’t take ないで, and どんなに needs ～ても."
      }
     ]
    },
    {
     id: "e3u10-l1-x3",
     type: "mcq",
     q: "The club says the outdoor match will go ahead whatever the weather. Complete the notice: [明日]{あした}雨が（　）、[試合]{しあい}は[行]{おこな}われます。 ([試合]{しあい} = match; [行]{おこな}われる = be held)",
     options: [
      {
       t: "[降]{ふ}っても",
       ok: true,
       why: "Right. Tomorrow’s rain is a possibility, and the match goes ahead anyway: ～ても."
      },
      {
       t: "[降]{ふ}るのに",
       why: "のに needs a real fact. Tomorrow’s rain hasn’t happened, so のに can’t be used."
      },
      {
       t: "[降]{ふ}ったら",
       why: "～たら would make the rain the reason the match is held: “if it rains, the match will be held”, which makes no sense here."
      },
      {
       t: "[降]{ふ}るから",
       why: "から gives a reason: the match is held **because** it rains."
      }
     ]
    },
    {
     id: "e3u10-l1-x4",
     type: "sort",
     q: "Each sentence uses ～ても, ～としても or ～のに. Is the first part something that **may** happen (even if) or something that **really happened** (even though)?",
     buckets: [
      "Even if: it may happen",
      "Even though: it really happened"
     ],
     items: [
      {
       t: "[明日]{あした}雨が[降]{ふ}っても、行きます。",
       b: 0,
       why: "Tomorrow’s rain is only a possibility."
      },
      {
       t: "[薬]{くすり}を飲んでも、[熱]{ねつ}が下がらなかった。",
       b: 1,
       why: "The past ending shows that you really took the medicine."
      },
      {
       t: "たとえ[反対]{はんたい}されても、[留学]{りゅうがく}します。",
       b: 0,
       why: "たとえ and the plan in します show a supposition."
      },
      {
       t: "いくら[探]{さが}しても、[鍵]{かぎ}が見つかりませんでした。",
       b: 1,
       why: "You really searched; the past ending reports what happened."
      },
      {
       t: "[宝]{たから}くじが[当]{あ}たったとしても、仕事は[辞]{や}めません。",
       b: 0,
       why: "としても marks a supposition: you haven’t won."
      },
      {
       t: "[約束]{やくそく}したのに、[来]{こ}なかった。",
       b: 1,
       why: "のに always reports a fact: the promise was made."
      }
     ]
    },
    {
     id: "e3u10-l1-x5",
     type: "mcq",
     q: "Cheska writes: 「[昨日]{きのう}は[忙]{いそが}しくて、水を飲む時間さえなかった。」 What does she mean?",
     options: [
      {
       t: "She didn’t even have time to drink water.",
       ok: true,
       why: "Right. さえ points to the extreme example: if there was no time even for water, there was no time for anything."
      },
      {
       t: "She only had time to drink water.",
       why: "That would be 水を飲む時間しかなかった. さえ means “even”, and the verb is negative."
      },
      {
       t: "If only she had time to drink water.",
       why: "“If only” needs a ば-form after さえ: 時間さえあれば. Here the verb is なかった."
      },
      {
       t: "She was busy, but at least she drank water.",
       why: "さえ + negative means “not even”, so she didn’t manage to drink water."
      }
     ]
    },
    {
     id: "e3u10-l1-x6",
     type: "mcq",
     q: "Complete the sentence: [住所]{じゅうしょ}さえ（　）、[荷物]{にもつ}を送れます。 (As long as I know the address, I can send the parcel.)",
     options: [
      {
       t: "わかれば",
       ok: true,
       why: "Right. さえ～ば marks the one condition you need: “as long as I know the address”."
      },
      {
       t: "わかっても",
       why: "“Even if I know the address, I can send it” doesn’t make sense, and さえ for “as long as” needs a ば-form."
      },
      {
       t: "わかるのに",
       why: "のに means “even though”, which doesn’t fit a condition."
      },
      {
       t: "わからなくて",
       why: "This means “I don’t know the address, so…”, the opposite of the condition."
      }
     ]
    },
    {
     id: "e3u10-l1-x7",
     type: "spot",
     q: "Dewi describes her new town. Tap each form that is **wrong**.",
     ask: "is wrong",
     parts: [
      "この町は",
      {
       t: "[静]{しず}かだけでなく",
       flag: true,
       why: "Wrong. な-adjectives take な: [静]{しず}かなだけでなく."
      },
      "、[交通]{こうつう}も[便利]{べんり}です。冬は",
      {
       t: "[寒]{さむ}くても",
       flag: false,
       why: "Correct: い-adjective くて + も. The cold doesn’t stop the walks."
      },
      "、町を歩くのが楽しいです。駅から少し[遠]{とお}いですが、雨が",
      {
       t: "[降]{ふ}ったても",
       flag: true,
       why: "Wrong. ～ても follows the て-form: [降]{ふ}っても."
      },
      "、自転車で行きます。時間",
      {
       t: "さえあれば",
       flag: false,
       why: "Correct: さえ～ば, “as long as I have time”."
      },
      "、毎日[公園]{こうえん}を[散歩]{さんぽ}したいです。どんなに",
      {
       t: "[疲]{つか}れていても",
       flag: false,
       why: "Correct: どんなに + ～ても, with ている → ていても."
      },
      "、[散歩]{さんぽ}すると元気になります。"
     ]
    },
    {
     id: "e3u10-l1-x8",
     type: "type",
     q: "Rodrigo cycles to his language school whatever the weather. Type the missing ending (雨 is a noun): 「雨（　）、[自転車]{じてんしゃ}で行きます。」 (“Even if it rains, I go by bike.”)",
     answer: [
      "でも",
      "がふっても"
     ],
     wrongs: [
      {
       v: "だても",
       why: "Nouns and な-adjectives take でも, not だても: 雨でも."
      },
      {
       v: "だから",
       why: "雨だから means “because it’s raining”, which doesn’t fit “whatever the weather”. For “even if”, use でも."
      }
     ],
     why: "Nouns and な-adjectives make the “even if” form with でも: 雨でも, “even if it rains, even in the rain”. (雨が[降]{ふ}っても says the same with a verb.)"
    },
    {
     id: "e3u10-l1-x9",
     type: "type",
     q: "Type the missing form of する: 「いくら[説明]{せつめい}（　）、わかってもらえません。」 (“However much I explain, they don’t understand.”)",
     answer: "しても",
     wrongs: [
      {
       v: "すれば",
       why: "すれば means “if I explain”. With いくら, use ～ても: “however much…”."
      },
      {
       v: "したら",
       why: "したら is “if or when I explain”. “However much” is いくら～ても."
      },
      {
       v: "すても",
       why: "ても joins the て-form: して → しても."
      }
     ],
     why: "Question word + ～ても means “no matter…”: いくら[説明]{せつめい}しても, “however much I explain”."
    },
    {
     id: "e3u10-l1-x10",
     type: "type",
     q: "Type the missing words for “not only … but also”: 「かいとさんは料理（　）、プログラミングも[得意]{とくい}です。」",
     answer: [
      "だけでなく",
      "だけではなく",
      "だけじゃなく",
      "だけじゃなくて",
      "ばかりでなく"
     ],
     wrongs: [
      {
       v: "ではなく",
       why: "ではなく means “not A but B”: it would say Kaito is good at programming *instead of* cooking. For “not only… but also”, use だけでなく."
      },
      {
       v: "だけ",
       why: "だけ alone means “only”. Add でなく: だけでなく～も."
      }
     ],
     why: "A だけでなく B も: “not only A but also B”. Kaito is good at both."
    }
   ],
   apply: {
    intro: "Use the patterns about your own life. Keep the notes for yourself.",
    tasks: [
     {
      t: "Things that don’t change",
      how: [
       "Write three sentences about habits you keep whatever happens: どんなに[忙]{いそが}しくても…, 雨が[降]{ふ}っても…, いくら[疲]{つか}れていても….",
       "Write one sentence with ～なくても: something you can do even without something else (e.g. [辞書]{じしょ}がなくても…).",
       "Check each form against the table: て-form + も; い-adjectives くても; nouns and な-adjectives でも."
      ],
      write: "1 どんなに… 2 … 3 … ～なくても: …"
     },
     {
      t: "Suppose…",
      how: [
       "Write two sentences with ～としても about things that are unlikely: [宝]{たから}くじが[当]{あ}たったとしても…, 時間がたくさんあったとしても….",
       "Write one ～のに sentence about something that really happened and annoyed you, and say why ～ても would sound calmer."
      ],
      write: "としても 1… 2… のに: …"
     },
     {
      t: "Even, as long as, not only",
      how: [
       "Write one ～さえ sentence about a very busy day (… さえなかった).",
       "Write one ～さえ～ば sentence about what you need to be happy (… さえあれば).",
       "Describe a friend or a place with ～だけでなく～も, using a noun, a verb and a な-adjective once each."
      ],
      write: "さえ… さえ～ば… だけでなく 1… 2… 3…"
     }
    ],
    proof: "Four ～ても sentences (one negative), two ～としても and one ～のに sentence, one ～さえ and one ～さえ～ば sentence, and three ～だけでなく sentences of your own."
   },
   read: [
    {
     book: "irodori",
     where: "Elementary 2, Lesson 13 “They display a lot of materials.” (【interrogative】V-ても and N1だけじゃなくて、N2も) and Lesson 16 “Do not panic in case of an earthquake.” (Sても、～)",
     note: "With audio."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 14 “I’m troubled about a friend.” (S（plain-form）のに、～)",
     note: "A review of ～のに in conversation."
    },
    {
     book: "taekim",
     where: "Advanced Topics, “The minimum expectation”, section “Using 「（で）さえ」 to describe the minimum requirement”"
    },
    {
     book: "taekim",
     where: "Special Expressions, “Hypothesizing and Concluding”, section “Making hypotheses with 「とする」”",
     note: "Background: としても is とする in its ても-form."
    }
   ]
  },
  {
   id: "e3u10-l2",
   title: "While, during, every time: ～うちに, ～あいだ・～あいだに, ～たびに and ～さいちゅうに",
   minutes: 60,
   hook: {
    q: "In a sweet shop you see the label 「[最中]{もなか}」. In a sentence like 「[会議]{かいぎ}の[最中]{さいちゅう}に電話が[鳴]{な}った」, the same two kanji are read さいちゅう. What is a もなか?",
    options: [
     "A crisp wafer filled with sweet bean paste",
     "A light midday meal",
     "A kind of green tea",
     "A summer festival"
    ],
    answer: 0,
    reveal: "**A crisp wafer filled with sweet bean paste.** Read もなか, [最中]{もなか} is a traditional Japanese sweet. Read さいちゅう, it means “right in the middle of”: [会議]{かいぎ}の[最中]{さいちゅう}に電話が[鳴]{な}った (the phone rang in the middle of the meeting). This lesson covers ～[最中]{さいちゅう}に and three other ways to place an event in time: ～うちに, ～[間]{あいだ}・～[間]{あいだ}に and ～たびに."
   },
   goals: [
    "Use ～うちに to act while a situation lasts, and to describe a change that happens while something goes on",
    "Tell ～[間]{あいだ} (all through a period) from ～[間]{あいだ}に (at some point within it)",
    "Say “every time” with ～たびに",
    "Say “right in the middle of” with ～[最中]{さいちゅう}に, usually for an interruption",
    "Choose between ～うちに, ～前に, ～[間]{あいだ}, ～[間]{あいだ}に and ～ながら"
   ],
   learn: [
    {
     h: "Four ways to place an event in time",
     body: [
      {
       lead: "You already have ～とき (when, Unit 5, Lesson 6), ～前に (before, Unit 5, Lesson 7), ～てから (after, Unit 3, Lesson 1) and ～ながら (while doing, Unit 7, Lesson 5). N3 adds four patterns that say more exactly **how** an event sits in a stretch of time."
      },
      {
       fig: "<svg viewBox=\"0 0 340 352\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">Where the event sits in time</text><text x=\"12\" y=\"48\">～あいだ: all through</text><rect class=\"d-soft\" x=\"40\" y=\"58\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-gold\" x=\"40\" y=\"78\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"108\" text-anchor=\"middle\">the main action fills the period</text><text x=\"12\" y=\"136\">～あいだに: at one point inside</text><rect class=\"d-soft\" x=\"40\" y=\"146\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"150\" cy=\"174\" r=\"8\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"198\" text-anchor=\"middle\">one event, somewhere in the period</text><text x=\"12\" y=\"226\">～うちに: before it changes</text><rect class=\"d-sage\" x=\"40\" y=\"236\" width=\"170\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><path class=\"d-ink\" d=\"M218 236V252\" stroke-width=\"2.5\"/><text class=\"s\" x=\"258\" y=\"248\" text-anchor=\"middle\">change</text><circle class=\"d-rose\" cx=\"130\" cy=\"264\" r=\"8\" stroke-width=\"2\"/><text x=\"12\" y=\"296\">～たびに: every time</text><circle class=\"d-rose\" cx=\"70\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"140\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"210\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"280\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"340\" text-anchor=\"middle\">the same result each time it happens</text></svg>",
       alt: "Four timelines. あいだ: a background bar with a second bar of the same length beneath it; the main action fills the period. あいだに: a background bar with one dot under it; one event somewhere in the period. うちに: a shorter bar that ends at a vertical line labeled change, with a dot before the line. たびに: four dots in a row; the same result each time it happens.",
       cap: "Ask: does the main action fill the period, happen once inside it, beat a change, or repeat?"
      },
      "Each section below takes one pattern. The last section puts them side by side with their nearest neighbors."
     ]
    },
    {
     h: "～うちに (1): while you still can",
     body: [
      {
       lead: "[[uchi-ni|～うちに]] means “while…”: a situation will end, so you act before it does."
      },
      {
       table: [
        [
         "Before うちに",
         "Example"
        ],
        [
         "verb: dictionary form or ～ている",
         "日本にいるうちに・[働]{はたら}いているうちに"
        ],
        [
         "verb: ない-form",
         "[忘]{わす}れないうちに"
        ],
        [
         "い-adjective",
         "[温]{あたた}かいうちに・明るいうちに"
        ],
        [
         "な-adjective + な",
         "元気なうちに"
        ],
        [
         "noun + の",
         "学生のうちに"
        ]
       ]
      },
      {
       ex: "[温]{あたた}かいうちに、どうぞ[召]{め}し上がってください。\nPlease eat it while it’s warm.\n\n[若]{わか}いうちに、いろいろな国に行ってみたいです。\nI want to visit many countries while I’m young.\n\n日本にいるうちに、[富士山]{ふじさん}に[登]{のぼ}りたいです。\nI want to climb Mount Fuji while I’m in Japan.\n\n[忘]{わす}れないうちに、メモしておきます。\nI’ll make a note before I forget.",
       label: "～うちに: while you can"
      },
      "The food will get cold, you won’t always be young, your time in Japan will end. ～うちに says: use the time before that happens.",
      "With the **negative**, ～ないうちに means “before (something unwanted) happens”: [忘]{わす}れないうちに (before I forget), [暗]{くら}くならないうちに (before it gets dark). It is still literally “while it hasn’t yet…”.",
      {
       h: "～うちに or ～前に?"
      },
      "[暗]{くら}くならないうちに帰りましょう and [暗]{くら}くなる前に帰りましょう are both natural, and they mean almost the same. ～うちに stresses using the time that is left, often with a little urgency. ～前に simply puts one event before another.",
      "So for a plain order of events, use ～前に: [寝]{ね}る前に[歯]{は}を[磨]{みが}きます (I brush my teeth before I go to bed). ～うちに wouldn’t fit: it isn’t about a situation running out."
     ]
    },
    {
     h: "～うちに (2): while…, before you knew it",
     body: [
      "The second use of ～うちに describes a **change that happened while something went on**, often without your noticing. The first half is usually ～ている; the second half is a change, with words such as なる, ～てくる or ～てしまう.",
      {
       ex: "何度も聞いているうちに、歌を[覚]{おぼ}えてしまいました。\nAfter hearing it again and again, I found I’d learned the song.\n\n話しているうちに、気分がよくなってきました。\nAs we talked, I began to feel better.\n\n本を読んでいるうちに、[眠]{ねむ}ってしまいました。\nI fell asleep while I was reading.",
       label: "～うちに: a change happens"
      },
      "The second half reports something that **happened**, not something you decided to do. To say that you did something on purpose during a period, use ～[間]{あいだ}に, which comes next.",
      {
       tip: "Think of the second use as “before I knew it”: 読んでいるうちに[眠]{ねむ}ってしまった. The ～てしまう from Unit 6 often comes with it."
      }
     ]
    },
    {
     h: "～[間]{あいだ} and ～[間]{あいだ}に: the whole time, or at some point",
     body: [
      {
       lead: "[[aida-ni|[間]{あいだ}]] means “a period”. Without に, the main action fills the whole period. With に, the main event happens once, somewhere inside it."
      },
      {
       table: [
        [
         "Before 間 / 間に",
         "Example"
        ],
        [
         "verb: ～ている (or dictionary form)",
         "待っている[間]{あいだ}"
        ],
        [
         "noun + の",
         "夏休みの[間]{あいだ}"
        ]
       ]
      },
      {
       ex: "夏休みの[間]{あいだ}、ずっと国に帰っていました。\nI was back home the whole summer vacation.\n\n私が料理している[間]{あいだ}、[夫]{おっと}はテレビを見ていました。\nWhile I was cooking, my husband was watching TV.",
       label: "～あいだ: all through the period"
      },
      {
       ex: "夏休みの[間]{あいだ}に、[運転免許]{うんてんめんきょ}を[取]{と}りました。\nI got my driving license during the summer vacation.\n\n母が[寝]{ね}ている[間]{あいだ}に、[部屋]{へや}を[掃除]{そうじ}しました。\nI cleaned the room while my mother was asleep.",
       label: "～あいだに: once, inside the period"
      },
      {
       key: "～[間]{あいだ} + an action that lasts (often ～ていた, ずっと). ～[間]{あいだ}に + a single event (～た)."
      },
      "The two actions can belong to different people, as in the second and fourth examples. That is the main difference from [[nagara|～ながら]] (Unit 7), where one person does both: 音楽を聞きながら料理した (I cooked while listening to music).",
      {
       h: "～[間]{あいだ}に or ～うちに?"
      },
      "子どもが[寝]{ね}ている[間]{あいだ}に[掃除]{そうじ}した and 子どもが[寝]{ね}ているうちに[掃除]{そうじ}した are both natural. ～[間]{あいだ}に just places the cleaning inside the time; ～うちに adds “before they woke up”. With a clear time span such as 夏休み or [授業]{じゅぎょう}, ～[間]{あいだ}に is the usual choice.",
      "Notice the reading: [間]{あいだ} here, but [間]{ま} in [間]{ま}に[合]{あ}う (be in time) and [間]{かん} in [時間]{じかん} and [一週間]{いっしゅうかん}."
     ]
    },
    {
     h: "～たびに: every time",
     body: [
      {
       lead: "Dictionary form + [[tabi-ni|たびに]], or noun + のたびに, means “every time”: the same thing happens on each occasion."
      },
      {
       ex: "この写真を見るたびに、子どもの[頃]{ころ}を思い出します。\nEvery time I look at this photo, I remember my childhood.\n\n旅行のたびに、家族にお[土産]{みやげ}を買います。\nEvery time I travel, I buy presents for my family.\n\n[祖母]{そぼ}は、会うたびに「大きくなったね」と言います。\nEvery time we meet, my grandmother says, “You’ve grown!”\n\n[引]{ひ}っ[越]{こ}すたびに、[荷物]{にもつ}が[増]{ふ}えます。\nEvery time I move house, I have more things.",
       label: "～たびに"
      },
      "～たびに is about **repeated** occasions, so it can’t describe a one-off: for “when I looked at the photo yesterday”, use ～とき: [昨日]{きのう}写真を見たとき.",
      "It is close to ～と for things that always happen ([[conditional-to]], Unit 6): この写真を見ると、子どもの[頃]{ころ}を思い出します. ～たびに stresses “every single time, without exception”."
     ]
    },
    {
     h: "～[最中]{さいちゅう}に: right in the middle of",
     body: [
      {
       lead: "～ている + [[saichuu|[最中]{さいちゅう}]]に, or noun + の[最中]{さいちゅう}に, means “right in the middle of”. Usually something interrupts."
      },
      {
       ex: "[会議]{かいぎ}の[最中]{さいちゅう}に、電話が[鳴]{な}りました。\nThe phone rang right in the middle of the meeting.\n\nシャワーを[浴]{あ}びている[最中]{さいちゅう}に、お[湯]{ゆ}が出なくなりました。\nThe hot water stopped right in the middle of my shower.\n\n今、食事の[最中]{さいちゅう}なので、後でかけ[直]{なお}します。\nI’m in the middle of a meal right now, so I’ll call you back later.",
       label: "～さいちゅうに and ～さいちゅうだ"
      },
      "At the end of a sentence, ～[最中]{さいちゅう}だ (～[最中]{さいちゅう}です) says that you are in the thick of something right now, as in the last example.",
      "[最中]{さいちゅう} is for an **activity** with a busy peak: a meeting, a meal, a shower, a game. It doesn’t suit long states: for “while I was living in Tokyo”, say 東京に住んでいた[間]{あいだ}に or 住んでいたとき, not ✗ 住んでいる[最中]{さいちゅう}に.",
      {
       h: "Near neighbors"
      },
      {
       list: [
        "**～ているところ** (Unit 9, {{tokoro-and-bakari}}) also means “in the middle of doing”, but it is calmer: 今、作っているところです (I’m making it now). ～[最中]{さいちゅう}です stresses that you are right in the thick of it.",
        "**～中** after a noun, as in [会議中]{かいぎちゅう}, 食事中 or 工事中 (under construction), is a simple label you see on signs and doors. [最中]{さいちゅう} is stronger and is used in sentences."
       ]
      }
     ]
    },
    {
     h: "In notices and messages",
     body: [
      "You will meet these patterns every day in notices, signs and messages. Read each one and ask what the time clause does.",
      {
       ex: "工事の[間]{あいだ}、[正面入口]{しょうめんいりぐち}はご[利用]{りよう}いただけません。\nThe main entrance cannot be used during the construction work.\n\nお休みの[間]{あいだ}に[届]{とど}いた[荷物]{にもつ}は、[受付]{うけつけ}でお[預]{あず}かりしています。\nParcels that arrived while you were away are being kept at reception.\n\n雨が[降]{ふ}らないうちに、[洗濯物]{せんたくもの}を入れておいて！\nBring the washing in before it rains!\n\n[実家]{じっか}に帰るたびに、駅前が[変]{か}わっている。\nEvery time I go back to my parents’ home, the area in front of the station has changed.",
       label: "Real-life time clauses"
      },
      {
       list: [
        "**工事の[間]{あいだ}**: no に, because the entrance stays closed for the **whole** period of the work.",
        "**お休みの[間]{あいだ}に**: に, because each parcel arrived at **one point** during your time away.",
        "**[降]{ふ}らないうちに**: the negative ～ないうちに, “before it rains”, with a little urgency. ～ておいて (Unit 6) adds “do it in advance”.",
        "**帰るたびに**: a repeated occasion, with a change noticed each time."
       ]
      },
      "On doors and screens you will also see the short noun + 中 labels: [会議中]{かいぎちゅう} (in a meeting), [準備中]{じゅんびちゅう} (getting ready, so not open yet) and 通話中 (on a call). They say what is going on now, without a sentence."
     ]
    },
    {
     h: "Which one? A quick guide",
     body: [
      {
       table: [
        [
         "Pattern",
         "The main event…",
         "Example"
        ],
        [
         "～[間]{あいだ}",
         "lasts the whole period",
         "[授業]{じゅぎょう}の[間]{あいだ}、ずっと[寝]{ね}ていた。"
        ],
        [
         "～[間]{あいだ}に",
         "happens once inside it",
         "[留守]{るす}の[間]{あいだ}に、[荷物]{にもつ}が[届]{とど}いた。"
        ],
        [
         "～うちに",
         "beats a change, or is a change",
         "[温]{あたた}かいうちに食べて。"
        ],
        [
         "～たびに",
         "repeats each time",
         "この歌を聞くたびに[泣]{な}く。"
        ],
        [
         "～[最中]{さいちゅう}に",
         "cuts into the peak of an activity",
         "[試合]{しあい}の[最中]{さいちゅう}に雨が[降]{ふ}り出した。"
        ],
        [
         "～ながら",
         "is a second action by the same person",
         "歩きながら話す。"
        ]
       ]
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
         "[若]{わか}いのうちに",
         "[若]{わか}いうちに",
         "い-adjectives attach directly; only nouns take の."
        ],
        [
         "[暗]{くら}くなるうちに帰ろう。",
         "[暗]{くら}くならないうちに帰ろう。",
         "“Before it gets dark” is ～ないうちに (or [暗]{くら}くなる前に)."
        ],
        [
         "夏休みの[間]{あいだ}に、ずっと[働]{はたら}いていた。",
         "夏休みの[間]{あいだ}、ずっと[働]{はたら}いていた。",
         "ずっと means the whole time: no に."
        ],
        [
         "[昨日]{きのう}写真を見るたびに…",
         "[昨日]{きのう}写真を見たとき…",
         "たびに is for repeated occasions."
        ],
        [
         "料理する[最中]{さいちゅう}に",
         "料理している[最中]{さいちゅう}に",
         "Verbs take ～ている before [最中]{さいちゅう}."
        ]
       ]
      },
      "The full reference is in {{time-clauses-uchi-ni}}.",
      {
       terms: [
        "uchi-ni",
        "aida-ni",
        "tabi-ni",
        "saichuu"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l2-x1",
     type: "mcq",
     q: "Your host puts a bowl of soup in front of you and says: 「[温]{あたた}かいうちに、どうぞ。」 What does she mean?",
     options: [
      {
       t: "Please eat it while it’s still warm.",
       ok: true,
       why: "Right. ～うちに: the soup will cool, so eat it before it does."
      },
      {
       t: "Please wait until it warms up.",
       why: "That would be [温]{あたた}かくなるまで待って. うちに means “while it is (still) warm”."
      },
      {
       t: "It is warm inside the house.",
       why: "うち here isn’t “house”; ～うちに is a time pattern meaning “while”."
      },
      {
       t: "Please warm it up before eating.",
       why: "That would be [温]{あたた}めてから食べて. The soup is already warm."
      }
     ]
    },
    {
     id: "e3u10-l2-x2",
     type: "sort",
     q: "Complete each sentence with ～[間]{あいだ} (the whole time) or ～[間]{あいだ}に (once, at some point).",
     buckets: [
      "～[間]{あいだ}",
      "～[間]{あいだ}に"
     ],
     items: [
      {
       t: "電車に[乗]{の}っている（　）、ずっと音楽を聞いていた。",
       b: 0,
       why: "ずっと and ～ていた: the listening filled the whole journey."
      },
      {
       t: "電車に[乗]{の}っている（　）、[財布]{さいふ}を[盗]{ぬす}まれた。",
       b: 1,
       why: "The theft happened once, at some point during the journey."
      },
      {
       t: "母が買い物に行っている（　）、[部屋]{へや}を[片付]{かたづ}けた。",
       b: 1,
       why: "One completed job, done somewhere inside the time she was out."
      },
      {
       t: "[授業]{じゅぎょう}の（　）、学生たちは[静]{しず}かに話を聞いていた。",
       b: 0,
       why: "The listening lasted through the whole lesson."
      },
      {
       t: "[留守]{るす}の（　）、[友達]{ともだち}が[訪]{たず}ねてきた。",
       b: 1,
       why: "One visit, at some point while you were out."
      },
      {
       t: "待っている（　）、ずっと本を読んでいた。",
       b: 0,
       why: "ずっと: the reading filled the whole wait."
      }
     ]
    },
    {
     id: "e3u10-l2-x3",
     type: "mcq",
     q: "Complete the sentence: 毎日ニュースを聞いている（　）、少しずつわかるようになってきた。",
     options: [
      {
       t: "うちに",
       ok: true,
       why: "Right. ～うちに + a gradual change (～ようになってきた): “as I kept listening, I gradually began to understand.”"
      },
      {
       t: "[最中]{さいちゅう}に",
       why: "[最中]{さいちゅう}に is for an interruption at the peak of an activity, not a slow change over weeks."
      },
      {
       t: "たびに",
       why: "たびに follows the dictionary form (聞くたびに), and it describes the same result each time, not a gradual change."
      },
      {
       t: "ながら",
       why: "ながら follows the ます stem (聞きながら) and joins two actions by one person at the same moment."
      }
     ]
    },
    {
     id: "e3u10-l2-x4",
     type: "match",
     q: "Match each meaning to the Japanese.",
     pairs: [
      [
       "before it gets cold",
       "[冷]{さ}めないうちに",
       "～ないうちに: before the unwanted change."
      ],
      [
       "every time I see this photo",
       "この写真を見るたびに",
       "Dictionary form + たびに: each time."
      ],
      [
       "right in the middle of the meeting",
       "[会議]{かいぎ}の[最中]{さいちゅう}に",
       "Noun + の[最中]{さいちゅう}に."
      ],
      [
       "(once) while I was out",
       "[留守]{るす}の[間]{あいだ}に",
       "～[間]{あいだ}に: one event inside the period."
      ],
      [
       "all through the summer vacation",
       "夏休みの[間]{あいだ}",
       "～[間]{あいだ}: the whole period."
      ]
     ]
    },
    {
     id: "e3u10-l2-x5",
     type: "mcq",
     q: "Which sentence is natural Japanese?",
     options: [
      {
       t: "料理をしている[最中]{さいちゅう}に、[停電]{ていでん}になった。",
       ok: true,
       why: "Right. ～ている + [最中]{さいちゅう}に: the power went off right in the middle of cooking."
      },
      {
       t: "東京に住んでいる[最中]{さいちゅう}に、[結婚]{けっこん}した。",
       why: "Living somewhere is a long state with no peak. Use 住んでいた[間]{あいだ}に or 住んでいたとき."
      },
      {
       t: "料理をする[最中]{さいちゅう}に、[停電]{ていでん}になった。",
       why: "Verbs take ～ている before [最中]{さいちゅう}: 料理をしている[最中]{さいちゅう}に."
      },
      {
       t: "料理をしているの[最中]{さいちゅう}に、[停電]{ていでん}になった。",
       why: "The の is only for nouns: 料理の[最中]{さいちゅう}に, or 料理をしている[最中]{さいちゅう}に."
      }
     ]
    },
    {
     id: "e3u10-l2-x6",
     type: "spot",
     q: "A student writes about a weekend visit to her grandmother. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "[週末]{しゅうまつ}、[祖母]{そぼ}の家に行きました。[祖母]{そぼ}は、会う",
      {
       t: "たびに",
       flag: false,
       why: "Correct: dictionary form + たびに, for something she says every time."
      },
      "「大きくなったね」と言います。[祖母]{そぼ}が[昼寝]{ひるね}をしている",
      {
       t: "[間]{あいだ}に",
       flag: false,
       why: "Correct: one job done somewhere inside her nap."
      },
      "、[庭]{にわ}の[掃除]{そうじ}をしました。[祖母]{そぼ}は「",
      {
       t: "[若]{わか}いのうちに",
       flag: true,
       why: "Wrong. い-adjectives attach directly: [若]{わか}いうちに."
      },
      "、いろいろな[経験]{けいけん}をしなさい」と言いました。夕方、",
      {
       t: "[暗]{くら}くなるうちに",
       flag: true,
       why: "Wrong. “Before it gets dark” is [暗]{くら}くならないうちに (or [暗]{くら}くなる前に)."
      },
      "帰りました。電車で本を読んでいる",
      {
       t: "うちに",
       flag: false,
       why: "Correct: a change that happened without her noticing."
      },
      "、[眠]{ねむ}ってしまいました。"
     ]
    },
    {
     id: "e3u10-l2-x7",
     type: "mcq",
     q: "Toby wants to say: “I want to see a lot of Japan while I’m a student.” Which is correct?",
     options: [
      {
       t: "学生のうちに、日本のいろいろな[所]{ところ}を見たいです。",
       ok: true,
       why: "Right. Noun + のうちに: being a student will end, so he wants to use the time."
      },
      {
       t: "学生うちに、日本のいろいろな[所]{ところ}を見たいです。",
       why: "Nouns need の before うちに: 学生のうちに."
      },
      {
       t: "学生のたびに、日本のいろいろな[所]{ところ}を見たいです。",
       why: "たびに means “every time”, which doesn’t fit being a student."
      },
      {
       t: "学生の[最中]{さいちゅう}に、日本のいろいろな[所]{ところ}を見たいです。",
       why: "[最中]{さいちゅう} is for the peak of an activity, not for a stage of life."
      }
     ]
    },
    {
     id: "e3u10-l2-x8",
     type: "mcq",
     q: "A notice by the lift in your building says: 「[点検]{てんけん}の[間]{あいだ}、エレベーターはご[利用]{りよう}いただけません。」 ([点検]{てんけん} = inspection) What does it tell you?",
     options: [
      {
       t: "You can’t use the lift during the inspection.",
       ok: true,
       why: "Right. ～[間]{あいだ} with no に: the “can’t use” lasts the whole period of the inspection."
      },
      {
       t: "At some point during the inspection, the lift will stop once.",
       why: "That idea, one event inside the period, would need ～[間]{あいだ}に, and the sentence would describe an event, not a state."
      },
      {
       t: "You can’t use the lift after the inspection.",
       why: "“After” would be [点検]{てんけん}の後. [間]{あいだ} is the time while the inspection lasts."
      },
      {
       t: "Use the lift quickly, before the inspection starts.",
       why: "That would be [点検]{てんけん}が始まらないうちに or [点検]{てんけん}の前に."
      }
     ]
    },
    {
     id: "e3u10-l2-x9",
     type: "type",
     q: "Type the missing form of なる: 「[暗]{くら}く（　）うちに、帰りましょう。」 (“Let’s go home before it gets dark.”)",
     answer: "ならない",
     wrongs: [
      {
       v: "なる",
       why: "[暗]{くら}くなるうちに sounds like “while it is getting dark”. For “before” an unwanted change, use the ない-form: [暗]{くら}くならないうちに."
      },
      {
       v: "なった",
       why: "うちに doesn’t follow a past form. For “before it gets dark”, use the ない-form: ならないうちに."
      }
     ],
     why: "～ないうちに means “before (something unwanted) happens”: [暗]{くら}くならないうちに, while it is still light."
    },
    {
     id: "e3u10-l2-x10",
     type: "type",
     q: "Kaito was cooking, and all that time Toby was watching a film. Type the missing word in hiragana: 「かいとさんが料理している（　）、トビーさんはずっと映画を見ていました。」",
     answer: ["あいだ", "あいだじゅう"],
     wrongs: [
      {
       v: "あいだに",
       why: "～[間]{あいだ}に is for something that happens once, at some point in the period. Toby watched the whole time (ずっと), so ～[間]{あいだ}."
      },
      {
       v: "うちに",
       why: "～うちに means “while you still can”, or a change that happened gradually. For one action lasting the whole period, use ～[間]{あいだ}."
      }
     ],
     why: "～[間]{あいだ} (written 間, typed あいだ) means “the whole time”: Toby watched for the whole time Kaito was cooking."
    },
    {
     id: "e3u10-l2-x11",
     type: "type",
     q: "Sōta comes to the house most weekends. Type the missing words for “every time”: 「そうたくんは[来]{く}る（　）、ねこを[探]{さが}します。」 (“Every time Sōta comes, he looks for the cat.”)",
     answer: [
      "たびに",
      "たび"
     ],
     wrongs: [
      {
       v: "うちに",
       why: "～うちに is “while” (while you can, or while something changes). “Every time” is ～たびに."
      },
      {
       v: "あいだに",
       why: "～[間]{あいだ}に places one event inside a period. For something that happens again and again, use ～たびに."
      }
     ],
     why: "Dictionary form + たびに means “every time”: [来]{く}るたびに, every time he comes."
    }
   ],
   apply: {
    intro: "Use the four patterns about your own time. Keep the notes for yourself.",
    tasks: [
     {
      t: "While you still can",
      how: [
       "Write three things you want to do while a situation lasts: [若]{わか}いうちに…, 元気なうちに…, 今の仕事をしているうちに….",
       "Write one sentence with ～ないうちに (before you forget, before it rains…).",
       "Write one sentence about a change that crept up on you: …ているうちに、…ようになった."
      ],
      write: "1 … 2 … 3 … ないうちに: … ているうちに: …"
     },
     {
      t: "The whole time, or once?",
      how: [
       "Write two pairs about the same period, one with ～[間]{あいだ} (what you did all through it) and one with ～[間]{あいだ}に (one thing you did during it). For example: 夏休みの[間]{あいだ}、… / 夏休みの[間]{あいだ}に、….",
       "Check: does ～[間]{あいだ} go with a lasting action, and ～[間]{あいだ}に with one event?"
      ],
      write: "Pair 1: …[間]{あいだ}… / …[間]{あいだ}に… Pair 2: …"
     },
     {
      t: "Every time, and right in the middle",
      how: [
       "Write two ～たびに sentences about things that always happen to you (a song, a place, a person).",
       "Write one ～[最中]{さいちゅう}に sentence about a real interruption: a phone call, a power cut, a sudden shower."
      ],
      write: "たびに 1… 2… [最中]{さいちゅう}に: …"
     }
    ],
    proof: "Five ～うちに sentences (one with ～ないうちに, one about a change), two ～あいだ / ～あいだに pairs, two ～たびに sentences and one ～さいちゅうに sentence of your own."
   },
   read: [
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 7 “I hope I can become friends with many people.” (V-ているうちに、～)",
     note: "With audio."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 9 “What made you interested in studying Japanese?” (V-る[間]{あいだ}に、～)"
    },
    {
     book: "taekim",
     where: "Special Expressions, “Time-specific actions”",
     note: "Background: ～ばかり, とたん and ながら, other ways of placing actions in time. ～うちに and ～[最中]{さいちゅう} are taught in this lesson."
    }
   ]
  },
  {
   id: "e3u10-l3",
   title: "Instead of, compared with, and how much: ～かわりに, ～にくらべて, ～ほど and ～くらい",
   minutes: 60,
   hook: {
    q: "Mariya says: 「[今年]{ことし}の夏は、去年ほど[暑]{あつ}くないですね。」 Which summer was hotter?",
    options: [
     "Last year’s",
     "This year’s",
     "They were equally hot",
     "You can’t tell from the sentence"
    ],
    answer: 0,
    reveal: "**Last year’s.** In A は B ほど～ない, B is the standard: “A is not as hot as B”. So last year was hotter. ほど always comes with a negative in this pattern; for “as hot as” Japanese uses くらい instead. This lesson sorts out ほど and くらい, and adds two more ways of relating one thing to another: ～かわりに (instead of) and ～に[比]{くら}べて (compared with)."
   },
   goals: [
    "Say “instead of”, “in exchange for” and “but to make up for it” with ～かわりに",
    "Compare with ～に[比]{くら}べて (～と[比]{くら}べて), and know how it differs from ～より",
    "Say “not as … as” with ～ほど～ない, and “as … as” with ～くらい",
    "Show degree (“so … that”) with ～ほど and ～くらい",
    "Use ～くらい for “at least” and for something small"
   ],
   learn: [
    {
     h: "～かわりに (1): instead of",
     body: [
      {
       lead: "[[kawari-ni|～かわりに]] means “instead of”: one thing takes the place of another. It is written かわりに or 代わりに."
      },
      {
       table: [
        [
         "Before かわりに",
         "Example"
        ],
        [
         "noun + の",
         "[砂糖]{さとう}の代わりに"
        ],
        [
         "verb (plain)",
         "バスに[乗]{の}るかわりに"
        ]
       ]
      },
      {
       ex: "[部長]{ぶちょう}の代わりに、私が[会議]{かいぎ}に出ました。\nI went to the meeting in place of the department manager.\n\n[今日]{きょう}はバスに[乗]{の}るかわりに、歩いて帰りました。\nToday I walked home instead of taking the bus.\n\n[砂糖]{さとう}の代わりに、はちみつを入れます。\nI use honey instead of sugar.",
       label: "～かわりに: instead of"
      },
      "The first example shows one person standing in for another; the other two show one thing replacing another. In each case, the thing before かわりに **doesn’t** happen: the manager didn’t go, I didn’t take the bus, there’s no sugar."
     ]
    },
    {
     h: "～かわりに (2): in exchange, and to make up for it",
     body: [
      "かわりに can also join two things that **both** happen, as a trade:",
      {
       ex: "英語を教えるかわりに、日本語を教えてもらっています。\nI teach English, and in exchange I get taught Japanese.\n\n[引]{ひ}っ[越]{こ}しを[手伝]{てつだ}ってもらうかわりに、[晩]{ばん}ごはんをごちそうします。\nIn return for help with the move, I’ll treat them to dinner.",
       label: "In exchange for"
      },
      "Or it can balance a good point against a bad one: “…, but to make up for it…”. Here い-adjectives attach directly, and な-adjectives take な.",
      {
       ex: "この[部屋]{へや}は[狭]{せま}いかわりに、[家賃]{やちん}が安いです。\nThis room is small, but the rent is cheap to make up for it.\n\nこの仕事は[給料]{きゅうりょう}がいいかわりに、[残業]{ざんぎょう}が多いです。\nThis job pays well, but there’s a lot of overtime.\n\nこの町は[不便]{ふべん}なかわりに、[自然]{しぜん}が[豊]{ゆた}かです。\nThis town is inconvenient, but it has plenty of nature.",
       label: "To make up for it"
      },
      "が or けど would also join these sentences. かわりに adds the idea of a **trade-off**: one side pays for the other. Don’t confuse it with ～わりに (“for…, considering…”, Lesson 7, {{time-range-focus-contrast}}), which measures a result against what you would expect.",
      {
       tip: "At the start of a sentence, use その代わり: 「[手伝]{てつだ}うよ。その代わり、今度ごはんをおごってね。」 (I’ll help. In return, buy me dinner next time.)"
      }
     ]
    },
    {
     h: "～に[比]{くら}べて: compared with",
     body: [
      {
       lead: "Noun + [[ni-kurabete|に[比]{くら}べて]] (or と[比]{くら}べて) sets up a comparison: “compared with X”. [比]{くら}べる means “compare”."
      },
      {
       ex: "去年に[比]{くら}べて、[今年]{ことし}は[雪]{ゆき}が多いです。\nCompared with last year, there’s more snow this year.\n\n[都会]{とかい}に[比]{くら}べて、この町は[物価]{ぶっか}が安いです。\nCompared with the city, prices are low in this town.\n\n以前と[比]{くら}べると、日本語がずいぶん[上手]{じょうず}になりましたね。\nYour Japanese has got much better compared with before.",
       label: "～にくらべて"
      },
      "Verbs take の first: 電車で行くのに[比]{くら}べて、車は時間がかかります (Compared with going by train, the car takes longer).",
      {
       h: "～に[比]{くら}べて or ～より?"
      },
      "Often both work: 去年より[雪]{ゆき}が多い and 去年に[比]{くら}べて[雪]{ゆき}が多い say the same thing. The differences are of style and focus:",
      {
       list: [
        "**～より** ([[comparison-yori]], Unit 3) is the basic, everyday way to say “more … than”, and it can sit right before the adjective: 姉は私より[背]{せ}が高い.",
        "**～に[比]{くら}べて** usually opens the sentence and frames what follows. It sounds a little more formal and is common in news, reports and descriptions of change ([増]{ふ}えた, [減]{へ}った, 上がった).",
        "と[比]{くら}べて means the same as に[比]{くら}べて. ～に[比]{くら}べると and ～と[比]{くら}べると are also common."
       ]
      }
     ]
    },
    {
     h: "～ほど～ない: not as … as",
     body: [
      {
       lead: "A は B ほど～ない means “A is not as … as B”. B, before ほど, is the standard, and the sentence is always negative."
      },
      {
       fig: "<svg viewBox=\"0 0 340 344\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">Three ways to compare A and B</text><rect class=\"d-panel\" x=\"6\" y=\"32\" width=\"328\" height=\"96\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"16\" y=\"52\">A は B ほど～ない: not as … as</text><text class=\"s\" x=\"16\" y=\"78\">A ことし</text><rect class=\"d-gold\" x=\"100\" y=\"66\" width=\"110\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"16\" y=\"102\">B きょねん</text><rect class=\"d-rose\" x=\"100\" y=\"90\" width=\"200\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"122\" text-anchor=\"middle\">ことしは きょねんほど あつくない</text><rect class=\"d-panel\" x=\"6\" y=\"140\" width=\"328\" height=\"96\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"16\" y=\"160\">A は B くらい～: as … as</text><text class=\"s\" x=\"16\" y=\"186\">A おとうと</text><rect class=\"d-gold\" x=\"100\" y=\"174\" width=\"170\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"16\" y=\"210\">B ちち</text><rect class=\"d-rose\" x=\"100\" y=\"198\" width=\"170\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"230\" text-anchor=\"middle\">おとうとは ちちくらい せがたかい</text><rect class=\"d-panel\" x=\"6\" y=\"248\" width=\"328\" height=\"96\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"16\" y=\"268\">A は B より～: more … than</text><text class=\"s\" x=\"16\" y=\"294\">A あね</text><rect class=\"d-gold\" x=\"100\" y=\"282\" width=\"210\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"16\" y=\"318\">B わたし</text><rect class=\"d-rose\" x=\"100\" y=\"306\" width=\"130\" height=\"16\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"338\" text-anchor=\"middle\">あねは わたしより せがたかい</text></svg>",
       alt: "Three panels with pairs of bars. A は B ほど～ない, not as … as: bar A (this year) is shorter than bar B (last year); ことしは きょねんほど あつくない. A は B くらい～, as … as: bars A (younger brother) and B (father) are the same length; おとうとは ちちくらい せがたかい. A は B より～, more … than: bar A (older sister) is longer than bar B (me); あねは わたしより せがたかい.",
       cap: "ほど with a negative: A falls short of B. くらい: A matches B. より: A goes beyond B."
      },
      {
       ex: "この問題は、思ったほど[難]{むずか}しくなかったです。\nThis question wasn’t as hard as I thought.\n\n私は姉ほど料理が[上手]{じょうず}じゃありません。\nI’m not as good a cook as my older sister.\n\n[今日]{きょう}は[昨日]{きのう}ほど[寒]{さむ}くないです。\nToday isn’t as cold as yesterday.",
       label: "～ほど～ない"
      },
      {
       warn: "In a positive sentence, ほど can’t mean “as … as”: ✗ 姉は母ほど[背]{せ}が高い is wrong. Use くらい for “as … as” (next section), or より for “more … than”."
      },
      {
       h: "Nothing is as … as"
      },
      "B ほど～ものはない (or ～人はいない) means “nothing (no one) is as … as B”: B is the best of all. くらい works here too.",
      {
       ex: "家族ほど大切なものはありません。\nNothing is as precious as family.\n\n[彼女]{かのじょ}くらい親切な人はいません。\nThere’s no one as kind as her.",
       label: "No one, nothing"
      }
     ]
    },
    {
     h: "～くらい: as … as",
     body: [
      "For an **equal** comparison, use A は B くらい～ (also written ぐらい):",
      {
       ex: "弟は父くらい[背]{せ}が高くなりました。\nMy younger brother has grown as tall as my father.\n\nこのパンは、お店のパンと同じくらいおいしいです。\nThis bread is just as good as bread from a shop.",
       label: "～くらい: as … as"
      },
      "と同じくらい (“about the same as”) is very common. くらい and ぐらい mean the same in all the uses in this lesson; both are correct."
     ]
    },
    {
     h: "Degree: so … that",
     body: [
      "Both ほど and くらい can show **how much**: “so … that…”, “to the point of…”. The first half describes the degree.",
      {
       ex: "[泣]{な}きたいほど[痛]{いた}かったです。\nIt hurt so much I wanted to cry.\n\n[声]{こえ}が出なくなるくらい[笑]{わら}いました。\nWe laughed so much we lost our voices.\n\n歩けないほど足が[疲]{つか}れました。\nMy legs were so tired I couldn’t walk.\n\n死ぬほど[疲]{つか}れた！\nI’m dead tired! (casual exaggeration)",
       label: "So … that"
      },
      "Here ほど and くらい can usually swap. ほど sounds a little stronger and more formal; くらい is more casual.",
      {
       h: "About: amounts"
      },
      "You already know くらい / ぐらい for “about” with numbers ([十分]{じゅっぷん}くらい, Unit 3). ほど does the same job in polite or formal speech: [十分]{じゅっぷん}ほどお待ちください (Please wait about ten minutes).",
      {
       tip: "Don’t confuse these with ～ば～ほど (“the more…, the more…”), which you met in Unit 9 ([[ba-hodo]])."
      }
     ]
    },
    {
     h: "～くらい for the least you can do",
     body: [
      {
       lead: "くらい has one job that ほど doesn’t: it marks something as **small, easy or the minimum**. “At least…”, “just…”."
      },
      {
       ex: "自分の[部屋]{へや}くらい、自分で[掃除]{そうじ}しなさい。\nAt least clean your own room yourself.\n\nお[礼]{れい}のメールくらい送ったほうがいいですよ。\nYou should at least send a thank-you email.\n\n少しくらい[遅]{おく}れても[大丈夫]{だいじょうぶ}ですよ。\nIt’s fine if you’re a little late.\n\nひらがなくらいなら読めます。\nI can read hiragana, at least.",
       label: "～くらい: the least"
      },
      "ほど can’t do this: ✗ 自分の[部屋]{へや}ほど自分で[掃除]{そうじ}しなさい makes no sense. With a person, this くらい can sound dismissive (“it’s only…”), so it suits advice and complaints.",
      {
       h: "All four in a review"
      },
      "Reviews and comparisons of products are a natural home for this lesson’s patterns. Here Toby writes about his new phone:",
      {
       ex: "新しいスマホは、前の[機種]{きしゅ}に[比]{くら}べてずいぶん[軽]{かる}くなりました。[画面]{がめん}は前ほど大きくありませんが、その代わり、[片手]{かたて}で使いやすいです。[電池]{でんち}は前と同じくらいもちます。カメラは、[友達]{ともだち}に[自慢]{じまん}したいくらいきれいに[撮]{と}れます。\nMy new phone is much lighter than the previous model. The screen isn’t as big as before, but to make up for it, it’s easy to use with one hand. The battery lasts about as long as before. The camera takes pictures so good I want to show them off to my friends.",
       label: "A short review"
      },
      {
       list: [
        "**に[比]{くら}べて** opens the comparison with the old model, and goes with a change (なりました).",
        "**ほど大きくありません**: “not as big as”, with the negative that ほど needs.",
        "**その代わり** starts a sentence: a weak point is balanced by a strong one.",
        "**と同じくらい**: an equal comparison.",
        "**[自慢]{じまん}したいくらい**: degree, “so good that I want to show it off”."
       ]
      },
      {
       table: [
        [
         "Job",
         "ほど",
         "くらい・ぐらい"
        ],
        [
         "not as … as (with a negative)",
         "✓ the usual choice",
         "rare: use ほど"
        ],
        [
         "as … as",
         "✗",
         "✓"
        ],
        [
         "nothing is as … as",
         "✓",
         "✓"
        ],
        [
         "so … that",
         "✓ (a little stronger)",
         "✓ (more casual)"
        ],
        [
         "about (an amount)",
         "✓ (polite)",
         "✓"
        ],
        [
         "at least, just",
         "✗",
         "✓"
        ]
       ]
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
         "姉は母ほど[背]{せ}が高い。",
         "姉は母くらい[背]{せ}が高い。",
         "Positive “as … as” takes くらい."
        ],
        [
         "[部屋]{へや}ほど自分で[掃除]{そうじ}しなさい。",
         "[部屋]{へや}くらい自分で[掃除]{そうじ}しなさい。",
         "Only くらい means “at least”."
        ],
        [
         "[砂糖]{さとう}かわりに",
         "[砂糖]{さとう}の代わりに",
         "Nouns take の before かわりに."
        ],
        [
         "去年を[比]{くら}べて",
         "去年に[比]{くら}べて",
         "The thing you compare with takes に (or と)."
        ]
       ]
      },
      "The full reference is in {{degree-hodo-kurai}}.",
      {
       terms: [
        "kawari-ni",
        "ni-kurabete",
        "hodo-kurai"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l3-x1",
     type: "mcq",
     q: "「英語を教えるかわりに、日本語を教えてもらっています。」 What is the arrangement?",
     options: [
      {
       t: "She teaches English, and in return she is taught Japanese.",
       ok: true,
       why: "Right. Both things happen: かわりに here is a trade, “in exchange for”."
      },
      {
       t: "She teaches Japanese instead of English.",
       why: "The person who teaches Japanese is someone else (～てもらう: she receives the teaching)."
      },
      {
       t: "She stopped teaching English and now learns Japanese.",
       why: "Nothing has stopped. In a trade, both sides happen at the same time."
      },
      {
       t: "She teaches both English and Japanese.",
       why: "～てもらう means she receives the Japanese lessons; she doesn’t give them."
      }
     ]
    },
    {
     id: "e3u10-l3-x2",
     type: "mcq",
     q: "「この本は、前の本ほど[面白]{おもしろ}くなかった。」 Which is true?",
     options: [
      {
       t: "The previous book was more interesting.",
       ok: true,
       why: "Right. A は B ほど～ない: this book didn’t reach the standard of the previous one."
      },
      {
       t: "This book was more interesting.",
       why: "That would be この本は前の本より[面白]{おもしろ}かった."
      },
      {
       t: "Both books were equally interesting.",
       why: "That would be 前の本と同じくらい[面白]{おもしろ}かった."
      },
      {
       t: "Neither book was interesting.",
       why: "The sentence only says this book was less interesting than the last one."
      }
     ]
    },
    {
     id: "e3u10-l3-x3",
     type: "sort",
     q: "What does ほど or くらい do in each sentence?",
     buckets: [
      "About (an amount)",
      "So … that (degree)",
      "At least, just",
      "Not as … as"
     ],
     items: [
      {
       t: "駅まで[十分]{じゅっぷん}くらいです。",
       b: 0,
       why: "A number + くらい: about ten minutes."
      },
      {
       t: "三十人ほど集まりました。",
       b: 0,
       why: "A number + ほど: about thirty people (a little formal)."
      },
      {
       t: "[泣]{な}きたいくらい[痛]{いた}かった。",
       b: 1,
       why: "The first half says how much it hurt."
      },
      {
       t: "[声]{こえ}が出なくなるほど[笑]{わら}った。",
       b: 1,
       why: "The first half shows the degree of laughing."
      },
      {
       t: "あいさつくらいしなさい。",
       b: 2,
       why: "The minimum you should do: “at least say hello”."
      },
      {
       t: "[今年]{ことし}は去年ほど[暑]{あつ}くない。",
       b: 3,
       why: "A は B ほど + negative."
      }
     ]
    },
    {
     id: "e3u10-l3-x4",
     type: "mcq",
     q: "Complete the sentence from a news report: 去年（　）、[今年]{ことし}は[観光客]{かんこうきゃく}が[二割]{にわり}[増]{ふ}えました。 ([観光客]{かんこうきゃく} = tourists; [二割]{にわり} = 20%)",
     options: [
      {
       t: "に[比]{くら}べて",
       ok: true,
       why: "Right. に[比]{くら}べて opens a comparison and suits a report of change ([増]{ふ}えました)."
      },
      {
       t: "ほど",
       why: "ほど for comparisons needs a negative: 去年ほど多くない."
      },
      {
       t: "くらい",
       why: "くらい would compare equal amounts; here the number went up."
      },
      {
       t: "の代わりに",
       why: "かわりに means “instead of”: this year didn’t replace last year."
      }
     ]
    },
    {
     id: "e3u10-l3-x5",
     type: "match",
     q: "Match each beginning to the ending that makes sense with かわりに.",
     pairs: [
      [
       "このアパートは駅から[遠]{とお}いかわりに、",
       "[家賃]{やちん}が安いです。",
       "An apartment far from the station is cheaper: the low rent makes up for the distance."
      ],
      [
       "このレストランは[値段]{ねだん}が高いかわりに、",
       "料理がとてもおいしいです。",
       "A high price is balanced by excellent food."
      ],
      [
       "[今日]{きょう}は私が料理するかわりに、",
       "[明日]{あした}はあなたが作ってね。",
       "A trade between two people: you cook tomorrow in exchange."
      ],
      [
       "[砂糖]{さとう}の代わりに、",
       "はちみつを入れました。",
       "Noun + の代わりに: honey replaces sugar."
      ]
     ]
    },
    {
     id: "e3u10-l3-x6",
     type: "mcq",
     q: "Which sentence is **wrong**?",
     options: [
      {
       t: "姉は母ほど[背]{せ}が高いです。",
       ok: true,
       why: "Right, this is the wrong one. ほど only means “as … as” with a negative. For an equal comparison, use くらい: 姉は母くらい[背]{せ}が高いです."
      },
      {
       t: "姉は母くらい[背]{せ}が高いです。",
       why: "Correct: “my sister is as tall as my mother”."
      },
      {
       t: "姉は母ほど[背]{せ}が高くないです。",
       why: "Correct: “my sister isn’t as tall as my mother”."
      },
      {
       t: "姉は母より[背]{せ}が高いです。",
       why: "Correct: “my sister is taller than my mother”."
      }
     ]
    },
    {
     id: "e3u10-l3-x7",
     type: "mcq",
     q: "A friend stayed at your apartment for a week, and you are annoyed. Which sentence says “At least wash your own dishes”?",
     options: [
      {
       t: "自分のお[皿]{さら}くらい[洗]{あら}ってよ。",
       ok: true,
       why: "Right. くらい marks the minimum: “your own dishes, at least”."
      },
      {
       t: "自分のお[皿]{さら}ほど[洗]{あら}ってよ。",
       why: "ほど can’t mean “at least”. Only くらい has this use."
      },
      {
       t: "自分のお[皿]{さら}の代わりに[洗]{あら}ってよ。",
       why: "This would mean “wash (something) instead of your own dishes”."
      },
      {
       t: "自分のお[皿]{さら}に[比]{くら}べて[洗]{あら}ってよ。",
       why: "に[比]{くら}べて compares two things; it makes no sense here."
      }
     ]
    },
    {
     id: "e3u10-l3-x8",
     type: "spot",
     q: "Cheska reviews her new camera. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "新しいカメラは、前のカメラ",
      {
       t: "に[比]{くら}べて",
       flag: false,
       why: "Correct: noun + に[比]{くら}べて, comparing with the old camera."
      },
      "[軽]{かる}いです。[画面]{がめん}は前",
      {
       t: "ほど大きいです",
       flag: true,
       why: "Wrong. ほど means “as … as” only with a negative: 前ほど大きくありません. For an equal size, say 前と同じくらい大きいです."
      },
      "。[値段]{ねだん}は",
      {
       t: "高いのかわりに",
       flag: true,
       why: "Wrong. い-adjectives attach directly: 高いかわりに."
      },
      "、写真がとてもきれいです。[友達]{ともだち}に[自慢]{じまん}したい",
      {
       t: "くらい",
       flag: false,
       why: "Correct: くらい shows degree, “so good that I want to show it off”."
      },
      "です。[説明書]{せつめいしょ}",
      {
       t: "くらい",
       flag: false,
       why: "Correct: くらい for the minimum, “at least the manual”."
      },
      "は読んでから使ったほうがいいですね。"
     ]
    },
    {
     id: "e3u10-l3-x9",
     type: "type",
     q: "Kaito is the best cook in the house. Rodrigo says: 「ぼくはかいとさん（　）料理が[上手]{じょうず}じゃありません。」 (“I’m not as good a cook as Kaito.”) Type the missing word.",
     answer: "ほど",
     wrongs: [
      {
       v: "くらい",
       why: "くらい is mainly for a positive “as … as”. The standard pattern for “not as … as” is ほど with a negative."
      },
      {
       v: "ぐらい",
       why: "ぐらい is mainly for a positive “as … as”. The standard pattern for “not as … as” is ほど with a negative."
      },
      {
       v: "より",
       why: "より compares in a positive sentence (A is more … than B). For “not as … as”, Japanese uses ほど with a negative."
      }
     ],
     why: "A は B ほど～ない: “A is not as … as B”. ほど goes with a negative."
    },
    {
     id: "e3u10-l3-x10",
     type: "type",
     q: "Kaito baked bread. Type the missing word: 「かいとさんのパンは、お店のパンと同じ（　）おいしいです。」 (“Kaito’s bread is just as good as bread from a shop.”)",
     answer: [
      "くらい",
      "ぐらい"
     ],
     wrongs: [
      {
       v: "ほど",
       why: "ほど means “as … as” only with a negative (not as … as). For a positive “just as good as”, use くらい."
      },
      {
       v: "より",
       why: "より would mean “better than”, and it doesn’t follow 同じ. 同じくらい is “just as”."
      }
     ],
     why: "同じくらい (or ぐらい) + an adjective means “just as … as”. A positive “as … as” takes くらい."
    },
    {
     id: "e3u10-l3-x11",
     type: "type",
     q: "Cheska hates cooking, so she has a deal with the house. Type the missing words: 「チェスカさんは料理をする（　）、[掃除]{そうじ}を二[回]{かい}しています。」 (“Instead of cooking, Cheska does the cleaning twice.”)",
     answer: "かわりに",
     wrongs: [
      {
       v: "のかわりに",
       why: "Only nouns take の before かわりに ([砂糖]{さとう}の代わりに). A verb attaches directly: するかわりに."
      },
      {
       v: "ために",
       why: "ために gives a purpose (“in order to”), not a replacement. “Instead of” is かわりに."
      }
     ],
     why: "Plain verb + かわりに means “instead of doing” or “in exchange for”: 料理をするかわりに, cleaning twice in place of cooking."
    }
   ],
   apply: {
    intro: "Compare and trade things from your own life. Keep the notes for yourself.",
    tasks: [
     {
      t: "Trade-offs",
      how: [
       "Write three ～かわりに sentences: one “instead of” (noun + の代わりに), one trade (…するかわりに、…てもらう) and one trade-off about a place you know (…かわりに、…).",
       "Check: nouns take の; い-adjectives attach directly; な-adjectives take な."
      ],
      write: "Instead of: … Trade: … Trade-off: …"
     },
     {
      t: "Compare two things",
      how: [
       "Choose two things you know well: two cities, two jobs, two seasons, two phones.",
       "Write one sentence with ～に[比]{くら}べて, one with ～ほど～ない and one with ～くらい (as … as).",
       "Write one “nothing is as … as” sentence: …ほど…ものはない."
      ],
      write: "に[比]{くら}べて: … ほど～ない: … くらい: … ほど…ものはない: …"
     },
     {
      t: "How much?",
      how: [
       "Write two “so … that” sentences about a real experience: a long walk, a funny film, a hot day.",
       "Write one piece of advice with ～くらい meaning “at least” (…くらい…したほうがいいよ)."
      ],
      write: "1 …ほど… 2 …くらい… Advice: …"
     }
    ],
    proof: "Three ～かわりに sentences of different kinds, four comparison sentences about two things you know, and three ほど/くらい sentences about degree and “at least”."
   },
   read: [
    {
     book: "taekim",
     where: "Special Expressions, “Expressing Amounts”, section “Using 「ほど」 to express the extent of something”",
     note: "Also covers ～ば～ほど (Unit 9)."
    },
    {
     book: "taekim",
     where: "Special Expressions, “Using 「方」 and 「よる」”, section “Using 「より」 for comparisons”",
     note: "Background for comparing with より."
    }
   ]
  },
  {
   id: "e3u10-l4",
   title: "Not exactly, no need, that’s how it is, and what was it again?: ～わけではない, ～ことはない, ～ものだ and ～っけ",
   minutes: 60,
   hook: {
    q: "Cheska’s friend offers her some nattō (fermented soybeans). Cheska says: 「[嫌]{きら}いなわけではないんですが…」 What does she mean?",
    options: [
     "It’s not that she dislikes it, but she’d rather not have it now",
     "She really hates nattō",
     "She loves nattō and wants more",
     "She has never tried nattō"
    ],
    answer: 0,
    reveal: "**It’s not that she dislikes it, but…** ～わけではない denies a conclusion the listener might draw (“she hates it”) without saying the opposite (“she loves it”). With the trailing んですが…, it is a gentle way to refuse. This lesson covers four patterns you will hear every day in conversation: ～わけではない, ～ことはない, ～ものだ and ～っけ."
   },
   goals: [
    "Deny part of an idea, or an expected conclusion, with ～わけではない",
    "Say “there’s no need to” with ～ことはない, and tell it from ～たことはない and ～ないことはない",
    "Use ～ものだ for what is natural, what people should do, and (with ～た) what you used to do",
    "Check something you have half forgotten with ～っけ, in casual and polite speech"
   ],
   learn: [
    {
     h: "～わけではない: it’s not that…",
     body: [
      {
       lead: "Plain form + [[wake-de-wa-nai|わけではない]] denies a conclusion that someone might draw, without saying the opposite. In conversation it is わけじゃない; politely, わけではありません."
      },
      {
       table: [
        [
         "Before わけではない",
         "Example"
        ],
        [
         "verb (plain)",
         "行くわけではない・行ったわけではない"
        ],
        [
         "い-adjective",
         "高いわけではない"
        ],
        [
         "な-adjective + な",
         "[嫌]{きら}いなわけではない"
        ],
        [
         "noun + な or + という",
         "[専門家]{せんもんか}なわけではない・[専門家]{せんもんか}というわけではない"
        ]
       ]
      },
      "**というわけではない** can follow any plain form, too, and it is a little softer: 高いからいいというわけではない (Being expensive doesn’t make it good).",
      {
       ex: "[嫌]{きら}いなわけではないんですが、[今日]{きょう}はちょっと…\nIt’s not that I don’t like it, but today…\n\nお金があれば[幸]{しあわ}せになれるわけではありません。\nHaving money doesn’t mean you can be happy.\n\n日本人がみんな[寿司]{すし}が[好]{す}きなわけではありません。\nNot every Japanese person likes sushi.\n\n私は[専門家]{せんもんか}というわけではありませんが、少しお話しします。\nI’m not exactly an expert, but let me say a few words.",
       label: "～わけではない"
      },
      "The listener expects something (money brings happiness; every Japanese person likes sushi), and ～わけではない says “not necessarily”. It is softer than a plain negative. That is why it is so useful for polite refusals and for disagreeing gently."
     ]
    },
    {
     h: "Partial negation: not all, not always",
     body: [
      "With words like [全部]{ぜんぶ} (all), みんな (everyone), いつも (always) and [必]{かなら}ずしも (necessarily), ～わけではない denies **part** of the statement, not all of it.",
      {
       fig: "<svg viewBox=\"0 0 340 268\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">How much did you understand?</text><text x=\"16\" y=\"50\">ぜんぶ わかった</text><rect class=\"d-sage\" x=\"32\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"60\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"88\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"116\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"144\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"172\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"200\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"228\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"256\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"284\" y=\"60\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"102\" text-anchor=\"middle\">all of it</text><text x=\"16\" y=\"132\">ぜんぶ わかったわけではない</text><rect class=\"d-sage\" x=\"32\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"60\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"88\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"116\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"144\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-sage\" x=\"172\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"200\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"228\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"256\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"284\" y=\"142\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"184\" text-anchor=\"middle\">some, not all (part is denied)</text><text x=\"16\" y=\"214\">ぜんぜん わからなかった</text><rect class=\"d-panel\" x=\"32\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"60\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"88\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"116\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"144\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"172\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"200\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"228\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"256\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"284\" y=\"224\" width=\"24\" height=\"24\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"264\" text-anchor=\"middle\">none of it (all is denied)</text></svg>",
       alt: "Three rows of ten squares. ぜんぶ わかった: all ten filled, all of it. ぜんぶ わかったわけではない: six filled and four empty, some but not all, part is denied. ぜんぜん わからなかった: all ten empty, none of it, all is denied.",
       cap: "～わけではない with [全部]{ぜんぶ} leaves room for “some”."
      },
      {
       ex: "[全部]{ぜんぶ}わかったわけではありません。\nI didn’t understand all of it. (I understood some.)\n\nいつも自分で料理するわけではありません。\nI don’t always cook for myself.\n\n高いものが[必]{かなら}ずしもいいわけではない。\nExpensive things aren’t necessarily good.",
       label: "Not all, not always, not necessarily"
      },
      "[必]{かなら}ずしも is almost always followed by a negative like this: [必]{かなら}ずしも～わけではない or [必]{かなら}ずしも～とは[限]{かぎ}らない (not necessarily).",
      {
       h: "Other わけ patterns"
      },
      "Unit 9 taught ～わけだ, “so that’s why” ([[wake]], {{hazu-wake-beki}}). Two more look similar but mean something quite different, so learn to recognize them:",
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "～わけではない",
         "it’s not (necessarily) that…",
         "[嫌]{きら}いなわけではない。It’s not that I dislike it."
        ],
        [
         "～わけがない",
         "there’s no way that…",
         "[彼]{かれ}が[嘘]{うそ}をつくわけがない。There’s no way he’d lie."
        ],
        [
         "～わけにはいかない",
         "I can’t (it wouldn’t be right)",
         "[約束]{やくそく}したから、休むわけにはいかない。I promised, so I can’t take the day off."
        ]
       ]
      }
     ]
    },
    {
     h: "～ことはない: there’s no need to",
     body: [
      {
       lead: "Dictionary form + [[koto-wa-nai|ことはない]] means “there’s no need to”. It reassures or advises: don’t bother, don’t worry. Politely: ことはありません."
      },
      {
       ex: "[心配]{しんぱい}することはありませんよ。\nThere’s no need to worry.\n\nわざわざ[来]{く}ることはないよ。電話で[十分]{じゅうぶん}だから。\nYou don’t need to come all this way. A phone call is enough.\n\n[謝]{あやま}ることはないよ。あなたのせいじゃないんだから。\nThere’s no need to apologize. It isn’t your fault.",
       label: "～ことはない"
      },
      "It is close to ～なくてもいい ([[nakute-mo-ii]], Unit 6), but more emphatic. ～なくてもいい simply gives permission not to do something. ～ことはない says firmly that it isn’t necessary, usually to reassure or encourage the listener. わざわざ (go to the trouble of) and そんなに (that much) often come with it.",
      {
       h: "Three look-alikes"
      },
      {
       table: [
        [
         "Pattern",
         "Meaning",
         "Example"
        ],
        [
         "dictionary form + ことはない",
         "there’s no need to",
         "行くことはない。You don’t need to go."
        ],
        [
         "た-form + ことはない",
         "have never (done)",
         "行ったことはない。I’ve never been."
        ],
        [
         "ない-form + ことはない",
         "it’s not that I can’t; I could",
         "行けないことはない。I could go (if I had to)."
        ]
       ]
      },
      "The middle one is the experience pattern ～たことがある, with は for contrast. The last is a double negative that means a weak yes: 食べられないことはないけど、あまり[好]{す}きじゃない (I can eat it, but I don’t really like it).",
      "One more thing: when no advice is being given, the same words can simply mean “it never happens”: [彼]{かれ}が時間に[遅]{おく}れることはない (He is never late). The context, advice to the listener or a description, tells you which."
     ]
    },
    {
     h: "～ものだ (1): that’s how things are",
     body: [
      {
       lead: "Plain form + [[mono-da|ものだ]] (casually もんだ) presents something as natural, as the way people or things are."
      },
      {
       ex: "人は[誰]{だれ}でも[間違]{まちが}えるものです。\nEveryone makes mistakes.\n\n新しい[環境]{かんきょう}に[慣]{な}れるには、時間がかかるものです。\nIt takes time to get used to a new place; that’s natural.\n\n時間がたつのは早いものですね。\nTime really flies, doesn’t it?",
       label: "～ものだ: the way things are"
      },
      "The last example adds feeling. ～ものだ often comes with a sigh of wonder or reflection, especially with adjectives such as 早い, [不思議]{ふしぎ}だ (strange) or [嬉]{うれ}しい."
     ]
    },
    {
     h: "～ものだ (2): what people should do",
     body: [
      "The same ending can give advice: “one should”, “that’s what you do”. The negative ～ものではない (casually ～もんじゃない) means “one shouldn’t”.",
      {
       ex: "人の話は[最後]{さいご}まで聞くものです。\nYou should hear people out.\n\n夜[遅]{おそ}くに電話をかけるものではありません。\nYou shouldn’t phone people late at night.\n\n食べ物で[遊]{あそ}ぶもんじゃないよ。\nDon’t play with your food. (said to a child)",
       label: "～ものだ: advice"
      },
      "This ものだ appeals to **common sense**: everyone knows that’s how you behave. It is what parents, teachers and older colleagues say, and it can sound preachy between equals.",
      "Compare ～べきだ ([[beki]], Unit 9). べき gives **your own** judgment of what is right: もっと勉強するべきだ (you ought to study more). ものだ presents the advice as a general rule of good behavior."
     ]
    },
    {
     h: "～たものだ: what you used to do",
     body: [
      "With the た-form, ～たものだ looks back fondly on something you **often** did in the past.",
      {
       ex: "子どもの[頃]{ころ}、よくこの川で[泳]{およ}いだものです。\nWhen I was a child, I often used to swim in this river.\n\n学生の[頃]{ころ}は、朝まで[友達]{ともだち}と話したものだ。\nWhen I was a student, I would talk with friends until morning.",
       label: "～たものだ: used to"
      },
      "It is for repeated habits, not for one event: for “I swam in this river last week”, just say 先週この川で[泳]{およ}ぎました. よく (often) and [頃]{ころ} (the days when) often come with it.",
      {
       warn: "Don’t confuse ものだ with the casual excuse もの or もん at the end of a sentence: だって、知らなかったんだもん (“But I didn’t know!”). That one gives a reason, sounds childish or very casual, and isn’t used in polite speech."
      }
     ]
    },
    {
     h: "～っけ: what was it again?",
     body: [
      {
       lead: "[[kke|っけ]] at the end of a sentence checks something you once knew or were told and have half forgotten. You can say it to someone else or to yourself."
      },
      {
       table: [
        [
         "Word",
         "Casual",
         "Polite"
        ],
        [
         "noun or な-adj.",
         "休みだっけ・休みだったっけ",
         "休みでしたっけ"
        ],
        [
         "い-adjective (past)",
         "高かったっけ",
         "高かったんでしたっけ"
        ],
        [
         "verb (past)",
         "言ったっけ",
         "言いましたっけ"
        ],
        [
         "verb (now or future)",
         "[来]{く}るんだっけ",
         "[来]{く}るんでしたっけ"
        ]
       ]
      },
      {
       ex: "[会議]{かいぎ}は何時からだっけ？\nWhat time does the meeting start again?\n\nあの人の名前、何だっけ。\nWhat was that person’s name? (to yourself)\n\nもう[払]{はら}ったっけ？\nDid I already pay?\n\n[明日]{あした}は休みでしたっけ？\nTomorrow is a day off, isn’t it? (just checking)\n\nあおいさんも[来]{く}るんでしたっけ？\nIs Aoi coming too? (I think I heard that)",
       label: "～っけ"
      },
      "Notice that verbs about now or the future usually take **んだっけ / んでしたっけ**, from ～んです ([[n-desu]], Unit 5). For the polite form of an い-adjective, add ん too: 高かったんでしたっけ. Polite ～でしたっけ and ～ましたっけ are fine with teachers and colleagues in conversation.",
      {
       warn: "～っけ is conversational. In formal situations, such as with customers, in interviews or in business emails, ask directly: [恐]{おそ}れ入りますが、お名前をもう一度[伺]{うかが}ってもよろしいでしょうか (Excuse me, may I ask your name once more?)."
      },
      "You may also hear ～たっけ in stories, looking back with nostalgia: [昔]{むかし}はよくここで[遊]{あそ}んだっけ (We used to play here a lot, didn’t we).",
      {
       h: "All four in one conversation"
      },
      "These patterns often turn up together in friendly talk. Cheska and Aoi are in the same seminar:",
      {
       ex: "チェスカ：来週の[発表]{はっぴょう}、何曜日だっけ？\nあおい：水曜日だよ。\nチェスカ：[準備]{じゅんび}が[全然]{ぜんぜん}終わらなくて…。日本語で話すのが[嫌]{いや}なわけじゃないんだけど、すごく[緊張]{きんちょう}する。\nあおい：そんなに[心配]{しんぱい}することはないよ。[最初]{さいしょ}はだれでも[緊張]{きんちょう}するものだよ。私も大学に入ったころは、[発表]{はっぴょう}の前の日によく[眠]{ねむ}れなくなったものだよ。\nチェスカ：そうなんだ。ちょっと安心した。\n\nCheska: What day is next week’s presentation again?\nAoi: Wednesday.\nCheska: I’m nowhere near ready… It’s not that I don’t like speaking in Japanese, but I get really nervous.\nAoi: There’s no need to worry that much. Everyone gets nervous at first. When I started university, I often couldn’t sleep the night before a presentation.\nCheska: Really? That makes me feel a bit better.",
       label: "Two colleagues"
      },
      {
       list: [
        "**何曜日だっけ**: Cheska was told the day and has half forgotten it.",
        "**[嫌]{いや}なわけじゃない**: she denies the conclusion Aoi might draw, that she dislikes speaking Japanese.",
        "**[心配]{しんぱい}することはない**: reassurance, made warmer by そんなに.",
        "**[緊張]{きんちょう}するものだ**: a general truth about people, offered as comfort.",
        "**[眠]{ねむ}れなくなったものだ**: a past habit remembered, with よく."
       ]
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
         "[嫌]{きら}いだわけではない",
         "[嫌]{きら}いなわけではない",
         "な-adjectives take な before わけ."
        ],
        [
         "[心配]{しんぱい}したことはない (to mean “no need to worry”)",
         "[心配]{しんぱい}することはない",
         "The た-form gives “have never worried”."
        ],
        [
         "先週この川で[泳]{およ}いだものだ。",
         "先週この川で[泳]{およ}いだ。",
         "～たものだ is for habits in the past, not one event."
        ],
        [
         "(to a customer) お名前、何でしたっけ？",
         "お名前をもう一度[伺]{うかが}ってもよろしいでしょうか。",
         "～っけ is too casual for customers and formal situations."
        ]
       ]
      },
      "The full reference is in {{partial-negation}}, and ～ものだ and ～っけ are summarized in {{n3-grammar-patterns-2}}.",
      {
       terms: [
        "wake-de-wa-nai",
        "koto-wa-nai",
        "mono-da",
        "kke"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l4-x1",
     type: "mcq",
     q: "After a lecture in Japanese, Rodrigo says: 「[全部]{ぜんぶ}わかったわけではありません。」 What does he mean?",
     options: [
      {
       t: "He understood some of it, but not all.",
       ok: true,
       why: "Right. [全部]{ぜんぶ} + ～わけではない denies “all”, leaving room for “some”."
      },
      {
       t: "He understood none of it.",
       why: "That would be [全然]{ぜんぜん}わかりませんでした. ～わけではない only denies part."
      },
      {
       t: "He understood all of it.",
       why: "The sentence is negative: he is denying that he understood all of it."
      },
      {
       t: "He didn’t go to the lecture.",
       why: "わかった is about understanding, and the sentence says nothing about missing it."
      }
     ]
    },
    {
     id: "e3u10-l4-x2",
     type: "mcq",
     q: "A friend keeps apologizing for being five minutes late. You want to reassure her. Complete: 「[謝]{あやま}る（　）よ。」",
     options: [
      {
       t: "ことはない",
       ok: true,
       why: "Right. ～ことはない: “there’s no need to apologize.”"
      },
      {
       t: "ものだ",
       why: "～ものだ would mean “you should apologize”, the opposite of reassuring her."
      },
      {
       t: "わけではない",
       why: "“It’s not that you apologize” makes no sense as reassurance."
      },
      {
       t: "っけ",
       why: "っけ checks a fact you’ve forgotten, and it doesn’t follow the dictionary form like this."
      }
     ]
    },
    {
     id: "e3u10-l4-x3",
     type: "sort",
     q: "Which use of ～ものだ is each sentence?",
     buckets: [
      "The way things are",
      "What people should (not) do",
      "What I used to do"
     ],
     items: [
      {
       t: "人は[誰]{だれ}でも[間違]{まちが}えるものだ。",
       b: 0,
       why: "A general truth about people."
      },
      {
       t: "時間がたつのは早いものだ。",
       b: 0,
       why: "A reflection on how things are, with feeling."
      },
      {
       t: "人の話は[最後]{さいご}まで聞くものだ。",
       b: 1,
       why: "Advice based on common sense: you should hear people out."
      },
      {
       t: "夜[遅]{おそ}くに電話をかけるものではない。",
       b: 1,
       why: "～ものではない: you shouldn’t."
      },
      {
       t: "子どもの[頃]{ころ}、よくこの川で[泳]{およ}いだものだ。",
       b: 2,
       why: "た-form + ものだ with よく: a fond memory of a habit."
      },
      {
       t: "学生の[頃]{ころ}は、よく[友達]{ともだち}と朝まで話したものだ。",
       b: 2,
       why: "Another repeated habit in the past."
      }
     ]
    },
    {
     id: "e3u10-l4-x4",
     type: "match",
     q: "Make the ～っけ form that checks each fact.",
     pairs: [
      [
       "休み (casual)",
       "休みだっけ",
       "Nouns take だっけ (or だったっけ)."
      ],
      [
       "休み (polite)",
       "休みでしたっけ",
       "Polite: でしたっけ."
      ],
      [
       "言った (casual)",
       "言ったっけ",
       "Past verb + っけ."
      ],
      [
       "言いました (polite)",
       "言いましたっけ",
       "Polite past: ましたっけ."
      ],
      [
       "[来]{く}る (casual)",
       "[来]{く}るんだっけ",
       "Verbs about now or the future usually take んだっけ."
      ]
     ]
    },
    {
     id: "e3u10-l4-x5",
     type: "mcq",
     q: "Rodrigo is asked if he can eat raw fish. He can, but he doesn’t enjoy it. Which answer fits best?",
     options: [
      {
       t: "食べられないことはないですけど、あまり[好]{す}きじゃないです。",
       ok: true,
       why: "Right. ～ないことはない is a weak yes: “it’s not that I can’t eat it”."
      },
      {
       t: "食べることはないです。",
       why: "This means “there’s no need to eat it”, which doesn’t answer the question."
      },
      {
       t: "食べたことはないです。",
       why: "This means “I’ve never eaten it”, which isn’t true."
      },
      {
       t: "食べるわけがないです。",
       why: "～わけがない means “there’s no way I’d eat it”, much too strong and not true."
      }
     ]
    },
    {
     id: "e3u10-l4-x6",
     type: "spot",
     q: "Two friends talk about an exam. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "A: [明日]{あした}の試験、何時から",
      {
       t: "だっけ",
       flag: false,
       why: "Correct: noun phrase + だっけ, checking a time you’ve forgotten."
      },
      "？\nB: 十時からだよ。そんなに",
      {
       t: "[心配]{しんぱい}したことはない",
       flag: true,
       why: "Wrong. The た-form gives “(I) have never worried”. To reassure a friend, use [心配]{しんぱい}することはない."
      },
      "よ。\nA: うん。試験が",
      {
       t: "[嫌]{きら}いだわけじゃない",
       flag: true,
       why: "Wrong. な-adjectives take な: [嫌]{きら}いなわけじゃない."
      },
      "んだけど、漢字が[苦手]{にがて}で…。先生も[明日]{あした}",
      {
       t: "[来]{く}るんだっけ",
       flag: false,
       why: "Correct: a verb about the future takes んだっけ."
      },
      "？\nB: うん、[来]{く}るよ。漢字は[全部]{ぜんぶ}",
      {
       t: "出るわけじゃない",
       flag: false,
       why: "Correct: partial negation, “not all the kanji will come up”."
      },
      "から、[大丈夫]{だいじょうぶ}だよ。"
     ]
    },
    {
     id: "e3u10-l4-x7",
     type: "mcq",
     q: "「高いからおいしいというわけではない。」 What does this mean?",
     options: [
      {
       t: "Expensive food isn’t always good.",
       ok: true,
       why: "Right. というわけではない denies the conclusion “expensive, so tasty” without saying that expensive food is bad."
      },
      {
       t: "Expensive food is never good.",
       why: "That would be much stronger. ～わけではない only says “not necessarily”."
      },
      {
       t: "It’s good because it’s expensive.",
       why: "The sentence denies exactly this idea."
      },
      {
       t: "It’s expensive, so I won’t eat it.",
       why: "Nothing here is about choosing not to eat."
      }
     ]
    },
    {
     id: "e3u10-l4-x8",
     type: "match",
     q: "Match each pattern to what it does in conversation.",
     pairs: [
      [
       "～わけではない",
       "softly denies a conclusion the listener might draw",
       "[嫌]{きら}いなわけではない: it’s not that I dislike it."
      ],
      [
       "～ことはない (after the dictionary form)",
       "tells someone there’s no need to do something",
       "[心配]{しんぱい}することはない: there’s no need to worry."
      ],
      [
       "～ものだ (after the dictionary form)",
       "presents something as natural or as common sense",
       "人は[間違]{まちが}えるものだ: people make mistakes."
      ],
      [
       "～っけ",
       "checks a fact you have half forgotten",
       "何時だっけ？: what time was it again?"
      ],
      [
       "～わけがない",
       "says there’s no way something is true",
       "[彼]{かれ}が[嘘]{うそ}をつくわけがない: there’s no way he’d lie."
      ]
     ]
    },
    {
     id: "e3u10-l4-x9",
     type: "type",
     q: "A friend offers to come all the way over just to return a book. You tell her there’s no need. Type the missing words: 「わざわざ[来]{く}る（　）よ。今度会うときで[十分]{じゅうぶん}だから。」",
     answer: [
      "ことはない",
      "ことない"
     ],
     wrongs: [
      {
       v: "ことがない",
       why: "ことがない after a verb talks about how often something happens (or, after a た-form, “have never”). “There’s no need to” is ことはない."
      },
      {
       v: "わけではない",
       why: "～わけではない softly denies a conclusion (“it’s not that…”). To tell someone they needn’t do something, use ことはない."
      }
     ],
     why: "Dictionary form + ことはない means “there’s no need to”. It reassures the listener: わざわざ[来]{く}ることはないよ. (In casual speech は often drops: [来]{く}ることないよ.)"
    },
    {
     id: "e3u10-l4-x10",
     type: "type",
     q: "A friend invites you to a horror film. You’d rather not go today, but it isn’t that you dislike horror. Type the missing word: 「ホラー映画が[嫌]{きら}い（　）わけではないんですが、[今日]{きょう}はちょっと…。」",
     answer: [
      "な",
      "という",
      "だという"
     ],
     wrongs: [
      {
       v: "だ",
       why: "な-adjectives take な before わけ: [嫌]{きら}いなわけではない."
      },
      {
       v: "の",
       why: "の doesn’t come before わけ. [嫌]{きら}い is a な-adjective, so it takes な."
      }
     ],
     why: "な-adjective + な + わけではない: “it’s not that…”. [嫌]{きら}いなわけではない softly denies what the listener might conclude. ([嫌]{きら}いというわけではない is also correct.)"
    },
    {
     id: "e3u10-l4-x11",
     type: "type",
     q: "Rodrigo can’t remember which day the burnable garbage goes out. He asks Mariya casually. Type the ending that means “…again?”: 「[燃]{も}えるごみの日、何曜日（　）？」",
     answer: [
      "だっけ",
      "だったっけ",
      "でしたっけ"
     ],
     wrongs: [
      {
       v: "っけ",
       why: "After a noun or a question word, っけ needs だ (or だった): 何曜日だっけ."
      },
      {
       v: "ですか",
       why: "何曜日ですか is an ordinary question. ～っけ adds “…again?”: you knew it once and have forgotten. Casually it is だっけ; politely, でしたっけ."
      }
     ],
     why: "～っけ checks something you knew once but have forgotten. After a noun: だっけ (casual) or でしたっけ (polite)."
    }
   ],
   apply: {
    intro: "These four patterns live in conversation. Write them about your own life, and say them aloud. Keep the notes for yourself.",
    tasks: [
     {
      t: "Not exactly",
      how: [
       "Write two gentle refusals with ～わけではないんですが…, as if a friend offered food or an invitation you don’t want.",
       "Write two partial negations about yourself with いつも～わけではない and [全部]{ぜんぶ}～わけではない."
      ],
      write: "Refusals: 1… 2… Partial: 1… 2…"
     },
     {
      t: "No need, and the way things are",
      how: [
       "Imagine a friend who is worried about a test or a mistake. Write two sentences of comfort with ～ことはない.",
       "Write one ～ものだ sentence about how people are, and one piece of advice someone older once gave you (…ものだ / …ものではない).",
       "Write one ～たものだ sentence about something you often did as a child."
      ],
      write: "ことはない: 1… 2… ものだ: … Advice: … Used to: …"
     },
     {
      t: "Checking with っけ",
      how: [
       "Think of three things you often half forget: a time, a name, whether you did something.",
       "Write a casual っけ question and a polite one for each.",
       "Say them aloud. Notice that verbs about the future need んだっけ or んでしたっけ."
      ],
      write: "1 casual… polite… 2 … 3 …"
     }
    ],
    proof: "Four ～わけではない sentences, two ～ことはない sentences, three ～ものだ sentences (one about the past) and six ～っけ questions of your own."
   },
   read: [
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 1 “What is futsal again?” (Nでしたっけ？)",
     note: "With audio of ～っけ in a real conversation."
    },
    {
     book: "taekim",
     where: "Special Expressions, “Hypothesizing and Concluding”, section “Coming to a conclusion with 「わけ」”",
     note: "Background on わけ, including ～わけない and ～わけにはいかない."
    }
   ]
  },
  {
   id: "e3u10-l5",
   title: "Tendencies and signs, and keigo in real life: ～っぽい, ～がち, ～ぎみ",
   minutes: 65,
   hook: {
    q: "A colleague tells you: 「ちょっと[風邪]{かぜ}[気味]{ぎみ}なので、[今日]{きょう}は早めに帰ります。」 How is she?",
    options: [
     "She feels a slight cold coming on",
     "She has a very bad flu",
     "She often catches colds",
     "She is worried about catching a cold from someone"
    ],
    answer: 0,
    reveal: "**She feels a slight cold coming on.** ～[気味]{ぎみ} means “a touch of”: a slight sign of something, felt now. ちょっと makes it gentler still. “Often catches colds” would need a different suffix, ～がち. This lesson sorts out three small suffixes for tendencies and signs, ～っぽい, ～がち and ～[気味]{ぎみ}, and then puts keigo to work in shops, on the phone and at work."
   },
   goals: [
    "Use ～っぽい for “-ish”, “like” and “easily”, and know that it is mostly casual",
    "Use ～がち for things that tend to happen (usually unwelcome), and ～[気味]{ぎみ} for “a touch of”",
    "Choose between words like [忘]{わす}れっぽい, [忘]{わす}れがち and [疲]{つか}れ[気味]{ぎみ}",
    "Recognize and use keigo in shops, on the phone, with visitors and in announcements",
    "Make requests at several levels of politeness, from ～てください to お～いただけないでしょうか"
   ],
   learn: [
    {
     h: "～っぽい: -ish, like, and easily",
     body: [
      {
       lead: "[[ppoi|～っぽい]] turns a word into an い-adjective meaning “-ish”, “-like” or “tends to”. It conjugates like any い-adjective: っぽくない, っぽかった."
      },
      {
       table: [
        [
         "Attaches to",
         "Meaning",
         "Examples"
        ],
        [
         "color or substance noun",
         "-ish, has a touch of",
         "白っぽい (whitish), 水っぽい (watery)"
        ],
        [
         "noun for a kind of person",
         "seems like (but isn’t)",
         "子どもっぽい (childish), [大人]{おとな}っぽい (grown-up)"
        ],
        [
         "verb ます stem",
         "does it easily, by nature",
         "[忘]{わす}れっぽい (forgetful), [怒]{おこ}りっぽい (quick to anger), [飽]{あ}きっぽい (easily bored)"
        ],
        [
         "noun for a condition",
         "feels like",
         "[風邪]{かぜ}っぽい (like a cold), [熱]{ねつ}っぽい (feverish)"
        ]
       ]
      },
      {
       ex: "白っぽいシャツを[探]{さが}しています。\nI’m looking for a whitish shirt.\n\nこのスープ、ちょっと水っぽいね。\nThis soup is a bit watery.\n\n妹は高校生なのに、[大人]{おとな}っぽい。\nMy younger sister is only in high school, but she seems very grown-up.\n\n[最近]{さいきん}、[忘]{わす}れっぽくなりました。\nI’ve become forgetful lately.",
       label: "～っぽい"
      },
      "Note the reading [怒]{おこ}りっぽい, from [怒]{おこ}る (get angry).",
      "**～っぽい is mostly casual.** It belongs to everyday speech. A few っぽい words are ordinary vocabulary in any style. For example, 白っぽい服 (“whitish clothes”) even appears in news reports. But in formal speech and writing, choose another word for most of them: [風邪]{かぜ}[気味]{ぎみ} rather than [風邪]{かぜ}っぽい. In very casual speech, especially among younger speakers, it can even follow a whole sentence: [彼]{かれ}、[来]{こ}ないっぽい (looks like he isn’t coming). Recognize this, but don’t use it in polite speech.",
      {
       tip: "子どもっぽい (childish) criticizes an adult; 子どもらしい (just as a child should be) praises a child. That らしい is the “typical of” use from Unit 7 ([[rashii]])."
      }
     ]
    },
    {
     h: "～がち: tends to (and it’s a problem)",
     body: [
      {
       lead: "Verb ます stem + [[gachi|がち]], or a few nouns + がち, means “tends to”, “is prone to”. It is usually about something unwelcome. It works like a な-adjective: がちな, がちだ, がちです."
      },
      {
       ex: "冬は運動不足になりがちです。\nIn winter, people tend not to get enough exercise.\n\n[一人]{ひとり}[暮]{ぐ}らしだと、[野菜]{やさい}が不足しがちです。\nWhen you live alone, you tend not to eat enough vegetables.\n\n[最近]{さいきん}は[曇]{くも}りがちな天気が[続]{つづ}いています。\nWe’ve had a lot of cloudy weather lately.\n\n父は年を[取]{と}ってから、病気がちになりました。\nSince he got older, my father has often been ill.",
       label: "～がち"
      },
      "A verb with がち keeps its object: [傘]{かさ}を[忘]{わす}れがちだ (I tend to forget my umbrella). That is one difference from [忘]{わす}れっぽい, which is an adjective about the person and can’t take を.",
      "For **good** habits, がち usually sounds wrong. Use ～ことが多い or よく instead: [週末]{しゅうまつ}は[公園]{こうえん}に行くことが多い (I often go to the park on weekends)."
     ]
    },
    {
     h: "～[気味]{ぎみ}: a touch of",
     body: [
      {
       lead: "Noun or verb ます stem + [[kimi-suffix|[気味]{ぎみ}]] means “a touch of”, “slightly”: there is a sign of something now, usually unwelcome. It works like a noun: [気味]{ぎみ}だ, [気味]{ぎみ}の, [気味]{ぎみ}で."
      },
      {
       ex: "[最近]{さいきん}、ちょっと[疲]{つか}れ[気味]{ぎみ}です。\nI’ve been a bit tired lately.\n\n電車が[遅]{おく}れ[気味]{ぎみ}なので、早めに出ましょう。\nThe trains are running a little late, so let’s leave early.\n\n少し[太]{ふと}り[気味]{ぎみ}なので、毎朝歩いています。\nI’ve put on a bit of weight, so I walk every morning.\n\n[面接]{めんせつ}の前は、[緊張]{きんちょう}[気味]{ぎみ}の学生もいました。\nSome students were a little nervous before the interview.",
       label: "～ぎみ"
      },
      "Notice the reading: as a suffix it is **ぎみ**. On its own, [気味]{きみ} means “feeling”, as in [気味]{きみ}が悪い (creepy).",
      "～[気味]{ぎみ} is neutral in style, so it suits work and polite speech. That is why the colleague in the warm-up said [風邪]{かぜ}[気味]{ぎみ} rather than the more casual [風邪]{かぜ}っぽい."
     ]
    },
    {
     h: "っぽい, がち or [気味]{ぎみ}?",
     body: [
      {
       fig: "<svg viewBox=\"0 0 340 330\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">Three suffixes, three ideas</text><rect class=\"d-gold\" x=\"6\" y=\"32\" width=\"328\" height=\"88\" rx=\"10\" stroke-width=\"1.5\"/><circle class=\"d-panel\" cx=\"34\" cy=\"62\" r=\"13\" stroke-width=\"2\"/><circle class=\"d-panel\" cx=\"50\" cy=\"62\" r=\"13\" stroke-width=\"2\"/><text x=\"76\" y=\"56\">～っぽい: like, -ish</text><text class=\"s\" x=\"76\" y=\"78\">looks or feels like; does easily</text><text class=\"s\" x=\"76\" y=\"98\">こどもっぽい・しろっぽい</text><text class=\"s\" x=\"76\" y=\"112\">わすれっぽい (casual)</text><rect class=\"d-sage\" x=\"6\" y=\"132\" width=\"328\" height=\"88\" rx=\"10\" stroke-width=\"1.5\"/><circle class=\"d-panel\" cx=\"24\" cy=\"162\" r=\"6\" stroke-width=\"2\"/><circle class=\"d-panel\" cx=\"42\" cy=\"162\" r=\"6\" stroke-width=\"2\"/><circle class=\"d-panel\" cx=\"60\" cy=\"162\" r=\"6\" stroke-width=\"2\"/><text x=\"76\" y=\"156\">～がち: tends to happen</text><text class=\"s\" x=\"76\" y=\"178\">often, and usually unwelcome</text><text class=\"s\" x=\"76\" y=\"198\">わすれがち・くもりがち</text><text class=\"s\" x=\"76\" y=\"212\">びょうきがち</text><rect class=\"d-rose\" x=\"6\" y=\"232\" width=\"328\" height=\"88\" rx=\"10\" stroke-width=\"1.5\"/><rect class=\"d-panel\" x=\"18\" y=\"254\" width=\"48\" height=\"14\" rx=\"3\" stroke-width=\"1.5\"/><rect class=\"d-inkf\" x=\"18\" y=\"254\" width=\"14\" height=\"14\" rx=\"3\"/><text x=\"76\" y=\"256\">～ぎみ: a touch of</text><text class=\"s\" x=\"76\" y=\"278\">a slight sign of it, now</text><text class=\"s\" x=\"76\" y=\"298\">かぜぎみ・つかれぎみ</text><text class=\"s\" x=\"76\" y=\"312\">ふとりぎみ</text></svg>",
       alt: "Three panels. ～っぽい, like or -ish, shown as two overlapping circles: looks or feels like, does easily; こどもっぽい, しろっぽい, わすれっぽい (casual). ～がち, tends to happen, shown as three dots in a row: often, and usually unwelcome; わすれがち, くもりがち, びょうきがち. ～ぎみ, a touch of, shown as a bar with only a small part filled: a slight sign of it, now; かぜぎみ, つかれぎみ, ふとりぎみ.",
       cap: "っぽい: what it is like. がち: how often. [気味]{ぎみ}: a little, right now."
      },
      {
       table: [
        [
         "",
         "～っぽい",
         "～がち",
         "～[気味]{ぎみ}"
        ],
        [
         "Idea",
         "like; -ish; easily",
         "tends to happen",
         "a touch of, now"
        ],
        [
         "Works like",
         "い-adjective",
         "な-adjective",
         "noun"
        ],
        [
         "Style",
         "mostly casual",
         "neutral",
         "neutral"
        ],
        [
         "Example",
         "[忘]{わす}れっぽい人",
         "[忘]{わす}れがちなこと",
         "[疲]{つか}れ[気味]{ぎみ}の人"
        ]
       ]
      },
      {
       list: [
        "[忘]{わす}れっぽい describes a **person**: someone who forgets things, by nature.",
        "[忘]{わす}れがち describes **what tends to happen**, often to a particular thing: [傘]{かさ}を[忘]{わす}れがちだ, [忘]{わす}れがちな[手続]{てつづ}き (a procedure people tend to forget).",
        "[疲]{つか}れ[気味]{ぎみ} describes **how you are now**: a little tired these days."
       ]
      },
      "**Real overlap.** [風邪]{かぜ}っぽい and [風邪]{かぜ}[気味]{ぎみ} both mean that you feel a cold coming on. The difference is style: っぽい with friends, [気味]{ぎみ} at work. Not every word takes all three suffixes, so learn the common combinations as words."
     ]
    },
    {
     h: "Keigo in practice: more of the forms you will hear",
     body: [
      {
       lead: "Unit 7 introduced [[sonkeigo|[尊敬語]{そんけいご}]] (respectful: their actions) and [[kenjougo|[謙譲語]{けんじょうご}]] (humble: your actions), with the most common special verbs ({{polite-speech-basics}}). At N3 you meet more of them in daily life."
      },
      {
       table: [
        [
         "Verb",
         "[尊敬語]{そんけいご} (they)",
         "[謙譲語]{けんじょうご} (I, my side)"
        ],
        [
         "[来]{く}る",
         "いらっしゃる・お見えになる・お[越]{こ}しになる",
         "[参]{まい}る"
        ],
        [
         "会う",
         "お会いになる",
         "お目にかかる"
        ],
        [
         "あげる",
         "—",
         "[差]{さ}し上げる"
        ],
        [
         "言う (to someone)",
         "おっしゃる",
         "[申]{もう}す・[申]{もう}し上げる"
        ],
        [
         "借りる",
         "お借りになる",
         "[拝借]{はいしゃく}する・お借りする"
        ],
        [
         "知っている",
         "ご[存]{ぞん}じだ",
         "[存]{ぞん}じております・[存]{ぞん}じ上げております (a person)"
        ],
        [
         "もらう",
         "—",
         "いただく"
        ]
       ]
      },
      "Respectful **お～です** describes the other person’s state: [部長]{ぶちょう}がお待ちです (the manager is waiting for you), お急ぎですか (are you in a hurry?), ポイントカードはお持ちですか (do you have a points card?). Like お～になる, it is a regular pattern: お + ます stem + です.",
      "お見えになる stacks two forms (お～になる on 見える, which already means “come” respectfully), but it is accepted by custom. The Academic Japanese track explains the five kinds of keigo and these fine points in {{keigo-system}} and {{keigo-mistakes}}.",
      {
       tip: "You don’t need to produce every form. Start by **recognizing** them, and use a few set phrases well. Respect shows more in a careful です・ます than in a shaky special verb."
      }
     ]
    },
    {
     h: "In shops and restaurants",
     body: [
      {
       ex: "店員：いらっしゃいませ。[何名様]{なんめいさま}ですか。\n[客]{きゃく}：[二人]{ふたり}です。\n店員：こちらへどうぞ。……ご注文はお[決]{き}まりですか。\n[客]{きゃく}：カレーを二つお[願]{ねが}いします。\n店員：かしこまりました。少々お待ちください。……お待たせいたしました。カレーでございます。",
       label: "At a restaurant"
      },
      {
       list: [
        "**[何名様]{なんめいさま}**: [様]{さま} is the very polite さん, used for customers. 名 is a formal counter for people.",
        "**お[決]{き}まりですか**: respectful お～です, “have you decided?”.",
        "**かしこまりました**: “certainly”, a humble way of saying “I understand” to a customer.",
        "**お待たせいたしました**: お + 待たせ (causative stem, “make wait”) + いたす: “I have kept you waiting.”",
        "**でございます**: the very polite です ([[teineigo|[丁寧語]{ていねいご}]])."
       ]
      },
      "You will also hear shop phrases such as 「こちら、カレーになります」 for 「カレーでございます」 and 「千円からお[預]{あず}かりします」 for 「千円お[預]{あず}かりします」. They are very common, but many people and guides criticize them as “part-time-job keigo” (バイト[敬語]{けいご}). You don’t need to copy them: ～でございます and 千円お[預]{あず}かりします are always safe."
     ]
    },
    {
     h: "On the phone",
     body: [
      "Aoi phones Shioura City Office from the university about the alert page. The person she wants, Mr. Matsumoto of the disaster-prevention section, is away from his desk.",
      {
       ex: "[受付]{うけつけ}：はい、[汐浦市役所]{しおうらしやくしょ}[防災課]{ぼうさいか}でございます。\n[平川]{ひらかわ}：[汐浦大学]{しおうらだいがく}の[平川]{ひらかわ}と[申]{もう}します。いつもお世話になっております。[松本様]{まつもとさま}はいらっしゃいますか。\n[受付]{うけつけ}：[平川様]{ひらかわさま}ですね。いつもお世話になっております。[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}はただいま[席]{せき}を外しております。[戻]{もど}りましたら、こちらからお電話いたしましょうか。\n[平川]{ひらかわ}：はい、お[願]{ねが}いいたします。\n[受付]{うけつけ}：[念]{ねん}のため、お[電話番号]{でんわばんごう}を[伺]{うかが}ってもよろしいでしょうか。\n[平川]{ひらかわ}：はい。（[番号]{ばんごう}を言う）\n[受付]{うけつけ}：[承知]{しょうち}いたしました。[松本]{まつもと}に[申]{もう}し[伝]{つた}えます。[失礼]{しつれい}いたします。",
       label: "A business phone call"
      },
      {
       list: [
        "**いつもお世話になっております**: the standard greeting between business contacts, roughly “thank you for your continued support”. Both sides say it.",
        "**[松本様]{まつもとさま} and [松本]{まつもと}**: the caller raises Matsumoto with [様]{さま}; the receptionist, speaking to an outsider about her own colleague, uses no さん and the humble おります. This is [[uchi-soto|ウチ・ソト]].",
        "**お電話いたしましょうか**: お + noun + いたす, humble: “shall I (we) call you?”.",
        "**[伺]{うかが}ってもよろしいでしょうか**: humble “ask” + a very polite “may I?”.",
        "**[申]{もう}し[伝]{つた}えます**: humble “I’ll pass the message on”, about her own colleague."
       ]
      }
     ]
    },
    {
     h: "Visitors and announcements",
     body: [
      {
       ex: "お[越]{こ}しいただき、ありがとうございます。どうぞおかけください。ただいま[担当]{たんとう}の者が[参]{まい}りますので、少々お待ちください。\nThank you for coming. Please take a seat. The person in charge will be with you shortly, so please wait a moment.",
       label: "Greeting a visitor at work"
      },
      "**[担当]{たんとう}の者** (the person in charge) uses the humble 者 for someone on your side. For someone on the visitor’s side, the respectful word is [方]{かた}: [担当]{たんとう}の[方]{かた}.",
      {
       ex: "まもなく、[二番線]{にばんせん}に電車が[参]{まい}ります。[危]{あぶ}ないですから、[黄色]{きいろ}い[線]{せん}の[内側]{うちがわ}までお下がりください。\nA train will shortly arrive at platform 2. For your safety, please stand behind the yellow line.",
       label: "A station announcement"
      },
      "A train can’t be humble, so why [参]{まい}ります? This [参]{まい}る raises no one; it is simply polite to the listeners. The official guidelines, [[keigo-no-shishin|[敬語]{けいご}の[指針]{ししん}]] (2007), call this kind of keigo [[teichougo|[丁重語]{ていちょうご}]] ([謙譲語]{けんじょうご}Ⅱ).",
      {
       h: "A ladder of requests"
      },
      {
       fig: "<svg viewBox=\"0 0 340 300\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">A ladder of requests: “please wait”</text><rect class=\"d-panel\" x=\"10\" y=\"240\" width=\"320\" height=\"40\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"22\" y=\"265\">まって</text><text class=\"s\" x=\"318\" y=\"265\" text-anchor=\"end\">friends</text><rect class=\"d-soft\" x=\"34\" y=\"196\" width=\"296\" height=\"40\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"46\" y=\"221\">まってください</text><text class=\"s\" x=\"318\" y=\"221\" text-anchor=\"end\">polite</text><rect class=\"d-sage\" x=\"58\" y=\"152\" width=\"272\" height=\"40\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"70\" y=\"177\">まっていただけますか</text><text class=\"s\" x=\"318\" y=\"177\" text-anchor=\"end\">softer</text><rect class=\"d-gold\" x=\"82\" y=\"108\" width=\"248\" height=\"40\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"94\" y=\"133\">おまちいただけますか</text><rect class=\"d-rose\" x=\"106\" y=\"64\" width=\"224\" height=\"40\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"116\" y=\"89\">おまちいただけないでしょうか</text><text class=\"s\" x=\"12\" y=\"52\">more respect, more distance</text><path class=\"d-ink\" d=\"M18 230V64\" stroke-width=\"2\"/><path class=\"d-inkf\" d=\"M12 70L18 58L24 70z\"/></svg>",
       alt: "A staircase of five steps, rising to the right. From the bottom: まって (friends), まってください (polite), まっていただけますか (softer), おまちいただけますか, おまちいただけないでしょうか. An arrow up the side reads more respect, more distance.",
       cap: "Each step up adds respect, and distance. Choose the step that fits the person and the request."
      },
      "～ていただけますか is the humble potential of いただく: “could I receive the favor of…?”. A negative question (～ていただけませんか) or でしょうか softens it further. Add a cushion phrase ([[kushion-kotoba]]) for a bigger request: [恐]{おそ}れ入りますが、こちらにお名前をご[記入]{きにゅう}いただけますか (Excuse me, could you write your name here?).",
      "The levels are a guide, not a rule: tone, the size of the request and your relationship matter too. With friends, the top steps sound cold or even sarcastic."
     ]
    },
    {
     h: "Safe habits and common slips",
     body: [
      {
       table: [
        [
         "✗ Slip",
         "✓ Better",
         "Why"
        ],
        [
         "(to a guest) どうぞいただいてください。",
         "どうぞ[召]{め}し上がってください。",
         "いただく is humble: it is for your own eating."
        ],
        [
         "(to a visitor) [課長]{かちょう}の[松本]{まつもと}さんがいらっしゃいます。",
         "[課長]{かちょう}の[松本]{まつもと}が[参]{まい}ります。",
         "To outsiders, your colleagues are your side."
        ],
        [
         "こちらでご[利用]{りよう}できます。",
         "こちらでご[利用]{りよう}いただけます。",
         "ご～できる is the potential of humble ご～する; for customers use ご[利用]{りよう}いただけます or ご[利用]{りよう}になれます."
        ],
        [
         "先生がおっしゃられました。",
         "先生がおっしゃいました。",
         "おっしゃる + られる is double keigo ([[nijuu-keigo]])."
        ],
        [
         "(to a visitor, about your colleague) [担当]{たんとう}の[方]{かた}が[参]{まい}ります。",
         "[担当]{たんとう}の者が[参]{まい}ります。",
         "[方]{かた} is respectful; for your own side, use 者."
        ]
       ]
      },
      "Keigo takes years for everyone, including Japanese speakers starting their first job. People forgive small slips when your respect is clear, so keep practicing the set phrases until they come out on their own.",
      "Lessons 6 and 7 finish the N3 grammar of this track with fifteen more patterns that you will meet in almost every N3 text, from ～まま and ～しかない to ～とたん and ～わりに.",
      "The keigo in this lesson is collected in {{keigo-in-practice}}, the suffixes in {{feelings-and-tendencies}}, and all the patterns of the unit in {{n3-grammar-patterns-2}}.",
      {
       terms: [
        "ppoi",
        "gachi",
        "kimi-suffix"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l5-x1",
     type: "mcq",
     q: "A colleague says about her older brother: 「兄は[忘]{わす}れっぽいんです。」 What does she mean?",
     options: [
      {
       t: "Her brother is forgetful by nature.",
       ok: true,
       why: "Right. Verb stem + っぽい: someone who forgets things easily."
      },
      {
       t: "Her brother forgot something just now.",
       why: "That would be 兄は[忘]{わす}れました. っぽい describes a tendency, not one event."
      },
      {
       t: "Her brother looks as if he has forgotten something.",
       why: "“Looks as if” would be [忘]{わす}れたみたい or [忘]{わす}れたようだ."
      },
      {
       t: "Her brother is a little tired.",
       why: "That would be [疲]{つか}れ[気味]{ぎみ}. っぽい here is about forgetting."
      }
     ]
    },
    {
     id: "e3u10-l5-x2",
     type: "match",
     q: "Match each word to its meaning.",
     pairs: [
      [
       "子どもっぽい",
       "childish (said of an adult)",
       "Noun + っぽい: like a child, but not one."
      ],
      [
       "[大人]{おとな}っぽい",
       "grown-up, mature-looking",
       "Like an adult, said of someone younger."
      ],
      [
       "白っぽい",
       "whitish",
       "Color + っぽい: close to white."
      ],
      [
       "[曇]{くも}りがち",
       "often cloudy",
       "Noun + がち: tends to be cloudy."
      ],
      [
       "[疲]{つか}れ[気味]{ぎみ}",
       "a bit tired these days",
       "Verb stem + [気味]{ぎみ}: a slight sign of tiredness, now."
      ]
     ]
    },
    {
     id: "e3u10-l5-x3",
     type: "mcq",
     q: "Toby often leaves his umbrella on the train. Which sentence says this correctly?",
     options: [
      {
       t: "トビーさんは[傘]{かさ}を[忘]{わす}れがちです。",
       ok: true,
       why: "Right. Verb stem + がち keeps the object: he tends to forget his umbrella."
      },
      {
       t: "トビーさんは[傘]{かさ}を[忘]{わす}れっぽいです。",
       why: "[忘]{わす}れっぽい is an adjective about the person, so it can’t take [傘]{かさ}を. トビーさんは[忘]{わす}れっぽいです alone would be fine."
      },
      {
       t: "トビーさんは[傘]{かさ}を[忘]{わす}れ[気味]{ぎみ}です。",
       why: "[気味]{ぎみ} means a slight condition right now, not something that keeps happening."
      },
      {
       t: "トビーさんは[傘]{かさ}を[忘]{わす}れらしいです。",
       why: "らしい follows a plain form ([忘]{わす}れたらしい), and it means “apparently”, not “tends to”."
      }
     ]
    },
    {
     id: "e3u10-l5-x4",
     type: "sort",
     q: "Sort these keigo forms: respectful (for what others do) or humble (for what you or your side do)?",
     buckets: [
      "[尊敬語]{そんけいご} (respectful: they)",
      "[謙譲語]{けんじょうご} (humble: I, my side)"
     ],
     items: [
      {
       t: "お見えになる",
       b: 0,
       why: "Respectful for [来]{く}る."
      },
      {
       t: "お[越]{こ}しになる",
       b: 0,
       why: "Respectful for [来]{く}る and 行く."
      },
      {
       t: "ご[存]{ぞん}じだ",
       b: 0,
       why: "Respectful for 知っている."
      },
      {
       t: "お待ちです",
       b: 0,
       why: "Respectful お～です: the other person is waiting."
      },
      {
       t: "お目にかかる",
       b: 1,
       why: "Humble for 会う: you meet someone you respect."
      },
      {
       t: "[差]{さ}し上げる",
       b: 1,
       why: "Humble for あげる: you give to someone you respect."
      },
      {
       t: "[拝借]{はいしゃく}する",
       b: 1,
       why: "Humble for 借りる."
      },
      {
       t: "[申]{もう}し上げる",
       b: 1,
       why: "Humble for 言う, to someone you respect."
      }
     ]
    },
    {
     id: "e3u10-l5-x5",
     type: "order",
     q: "Put the receptionist’s side of a business phone call in order.",
     items: [
      {
       t: "はい、[汐浦市役所]{しおうらしやくしょ}[防災課]{ぼうさいか}でございます。",
       why: "She answers with the company name and でございます."
      },
      {
       t: "いつもお世話になっております。",
       why: "Once the caller gives her name, she returns the standard business greeting."
      },
      {
       t: "[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}はただいま[席]{せき}を外しております。",
       why: "She apologizes and explains that her colleague is away, without さん."
      },
      {
       t: "[念]{ねん}のため、お[電話番号]{でんわばんごう}を[伺]{うかが}ってもよろしいでしょうか。",
       why: "She offers a call back, then asks for the number."
      },
      {
       t: "[承知]{しょうち}いたしました。[松本]{まつもと}に[申]{もう}し[伝]{つた}えます。",
       why: "She confirms and promises to pass on the message before saying goodbye."
      }
     ]
    },
    {
     id: "e3u10-l5-x6",
     type: "mcq",
     q: "A guest at your home hesitates to start eating. What do you say?",
     options: [
      {
       t: "どうぞ、[召]{め}し上がってください。",
       ok: true,
       why: "Right. [召]{め}し上がる is the respectful verb for the guest’s eating."
      },
      {
       t: "どうぞ、いただいてください。",
       why: "いただく is humble, for your own eating or receiving. It would lower your guest."
      },
      {
       t: "どうぞ、お食べしてください。",
       why: "お～する is humble, for your own actions. It doesn’t fit the guest’s eating."
      },
      {
       t: "どうぞ、[召]{め}し上がられてください。",
       why: "[召]{め}し上がる is already respectful; adding られる makes double keigo."
      }
     ]
    },
    {
     id: "e3u10-l5-x7",
     type: "spot",
     q: "A receptionist welcomes a visitor from another company. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "本日は",
      {
       t: "お[越]{こ}しいただき",
       flag: false,
       why: "Correct: お[越]{こ}しいただき、ありがとうございます is the standard thanks for coming."
      },
      "、ありがとうございます。[課長]{かちょう}の",
      {
       t: "[松本]{まつもと}さん",
       flag: true,
       why: "Wrong. Speaking to an outsider about her own boss, she should say [松本]{まつもと}, with no さん."
      },
      "はただいま[会議中]{かいぎちゅう}ですので、こちらで",
      {
       t: "お待ちください",
       flag: false,
       why: "Correct: お + stem + ください, a respectful request."
      },
      "。[資料]{しりょう}はこちらを",
      {
       t: "ご[覧]{らん}ください",
       flag: false,
       why: "Correct: the respectful request for the visitor’s looking."
      },
      "。[会議室]{かいぎしつ}のWi-Fiも",
      {
       t: "ご[利用]{りよう}できます",
       flag: true,
       why: "Wrong. ご～できる is the potential of humble ご～する. For the visitor, say ご[利用]{りよう}いただけます (or ご[利用]{りよう}になれます)."
      },
      "。のちほど[担当]{たんとう}の",
      {
       t: "者",
       flag: false,
       why: "Correct: the humble 者 for someone on her own side."
      },
      "がご[案内]{あんない}いたします。"
     ]
    },
    {
     id: "e3u10-l5-x8",
     type: "mcq",
     q: "You want a stranger at a station to take your photo. Which request is **too casual** for this situation?",
     options: [
      {
       t: "写真、[撮]{と}って。",
       ok: true,
       why: "Right. A bare て-form request is for friends and family; to a stranger it sounds rude."
      },
      {
       t: "すみません、写真を[撮]{と}っていただけませんか。",
       why: "This is polite and soft: a negative question with いただけませんか."
      },
      {
       t: "すみません、写真を[撮]{と}っていただけますか。",
       why: "This is polite: “could I receive the favor of…?”."
      },
      {
       t: "すみません、写真を[撮]{と}ってくださいませんか。",
       why: "This is polite too: くださる is the respectful verb for くれる."
      }
     ]
    },
    {
     id: "e3u10-l5-x9",
     type: "type",
     q: "Type the missing word for “tends to (and it’s a problem)”: 「[一人]{ひとり}[暮]{ぐ}らしだと、食事が[不規則]{ふきそく}になり（　）です。」 (“When you live alone, your meals tend to become irregular.”)",
     answer: ["がち", "やすい"],
     wrongs: [
      {
       v: "ぎみ",
       why: "[気味]{ぎみ} is “a touch of”, a slight state you notice now. For something that tends to happen again and again, use ～がち."
      },
      {
       v: "っぽい",
       why: "～っぽい is “-ish” or “easily”, and mostly casual. For a tendency with a negative feel, use ～がち."
      }
     ],
     why: "ます stem + がち: something tends to happen, and it’s a problem. なりがち, “tend to become”. (なりやすい, from Unit 7, also works.)"
    },
    {
     id: "e3u10-l5-x10",
     type: "type",
     q: "Type the missing word for “a touch of”: 「[風邪]{かぜ}（　）なので、[今日]{きょう}は早く[寝]{ね}ます。」 (“I have a bit of a cold, so I’m going to bed early today.”)",
     answer: "ぎみ",
     wrongs: [
      {
       v: "がち",
       why: "[風邪]{かぜ}がち means “prone to colds”, a tendency. For a slight cold right now, use [風邪]{かぜ}[気味]{ぎみ}."
      },
      {
       v: "っぽい",
       why: "っぽい works like an い-adjective, so it can’t take なので. (Casually, [風邪]{かぜ}っぽいので is fine.) Before なので, use [気味]{ぎみ}."
      }
     ],
     why: "Noun or ます stem + [気味]{ぎみ}: “a touch of, slightly”. [風邪]{かぜ}[気味]{ぎみ}, “a bit of a cold”, is one of the commonest uses."
    },
    {
     id: "e3u10-l5-x11",
     type: "type",
     q: "A caller asks for Mr Matsumoto of the city office, who is away from his desk. The receptionist is talking about her own colleague to an outsider. Type the missing verb: 「[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}はただいま[席]{せき}を外して（　）。」",
     answer: "おります",
     wrongs: [
      {
       v: "います",
       why: "います is polite but not humble. Talking to an outsider about her own colleague, the receptionist lowers her side with おります."
      },
      {
       v: "いらっしゃいます",
       why: "いらっしゃる is respectful. You never raise your own colleague when speaking to someone outside: [松本]{まつもと}は…おります."
      }
     ],
     why: "Talking to an outsider, your own colleagues are on your side (ウチ), so you use humble おります and no さん: [松本]{まつもと}はただいま[席]{せき}を外しております."
    }
   ],
   apply: {
    intro: "Practice the suffixes on yourself, and rehearse keigo for situations you will really meet. Keep the notes for yourself.",
    tasks: [
     {
      t: "Describe yourself and your week",
      how: [
       "Write one sentence about yourself with ～っぽい ([忘]{わす}れっぽい, [飽]{あ}きっぽい…), as you would say it to a friend.",
       "Write two sentences with ～がち about things that tend to go wrong in your life (… になりがち, …しがち).",
       "Write one sentence with ～[気味]{ぎみ} about how you feel this week, as you would say it at work."
      ],
      write: "っぽい: … がち: 1… 2… [気味]{ぎみ}: …"
     },
     {
      t: "Your shop and phone phrases",
      how: [
       "Read the restaurant and phone models aloud three times, taking both parts.",
       "Write your own version of the phone call, with your name and an invented company, asking for someone who isn’t there.",
       "Mark each keigo form: respectful (theirs) or humble (yours)."
      ],
      write: "My phone call: …"
     },
     {
      t: "A ladder of requests",
      how: [
       "Choose one request you might make: borrow a pen, ask someone to wait, ask for a photo.",
       "Write it at four levels, from a friend to a stranger to a customer, using the ladder.",
       "Add a cushion phrase ([恐]{おそ}れ入りますが, すみませんが) to the top two."
      ],
      write: "Friend: … Polite: … Softer: … Very polite: …"
     },
     {
      t: "Review the N3 kanji",
      how: [
       "Open the Kanji Lab and choose the N3 kanji deck. Review for five minutes a day this week.",
       "Notice kanji from this unit: [最中]{さいちゅう}, [比]{くら}べる, [忘]{わす}れる, [疲]{つか}れる, [様]{さま}."
      ]
     }
    ],
    proof: "Four suffix sentences about yourself, a phone call of your own with each keigo form marked, one request at four levels, and a week of N3 kanji review."
   },
   read: [
    {
     book: "irodori",
     where: "Pre-Intermediate, Lesson 3 “How are preparations for your move going?” (Nっぽい) and Lesson 6 “I cook for myself every day.” (Vがち)",
     note: "With audio."
    },
    {
     book: "irodori",
     where: "Pre-Intermediate, Lessons 11 “This is a scam email.”, 12 “I need an ambulance.”, 13 “Congratulations on your marriage.”, 16 “I was able to take lots of good photos.”, 17 “I will explain the work of the floor staff.” and 18 “I would be happy if you would allow me to work there.”",
     note: "Respectful and humble expressions in real situations: お～になる, お～です, ～ていただけますか, お～する, ～でございます."
    },
    {
     book: "taekim",
     where: "Advanced Topics, “Tendencies”, section “Saying something is prone to occur using 「～がち」”"
    },
    {
     book: "taekim",
     where: "Special Expressions, “Honorific and Humble Forms”"
    },
    {
     book: "keigo",
     where: "第3章「敬語の具体的な使い方」: worked questions on choosing polite expressions in real situations",
     note: "The official guidelines (in Japanese). Challenging at N3; read it with a dictionary, or come back to it with the keigo units of the Academic Japanese track."
    }
   ]
  },
  {
   id: "e3u10-l6",
   title: "States, manner and limits: ～まま, ～っぱなし, ～ずに, ～とおりに, ～ふりをする, ～しかない and ～にちがいない",
   minutes: 65,
   hook: {
    q: "At the door of a small clinic you see this sign: 「[靴]{くつ}のままお入りください。」 What should you do?",
    options: [
     "Go in with your shoes on",
     "Take your shoes off, then go in",
     "Put your shoes in a plastic bag first",
     "Change into the slippers by the door"
    ],
    answer: 0,
    reveal: "**Go in with your shoes on.** まま means “as it is, unchanged”: [靴]{くつ}のまま is “just as you are, in your shoes”. In homes you take your shoes off, so many clinics, offices and restaurants put up this sign to tell you that you don’t need to. This lesson starts with ～まま and its untidy cousin ～っぱなし. Then it adds five more patterns: doing something without something else, just as told, pretending, having no other choice, and being sure."
   },
   goals: [
    "Describe a state that carries on with ～まま, and a state carelessly left as it is with ～っぱなし",
    "Say “without doing” with ～ずに, and tell it from ～ないで and ～なくて",
    "Do something “just as” told or planned with ～とおりに and ～どおり",
    "Say that someone is pretending with ～ふりをする",
    "Say “only” with しか～ない, and “there’s no choice but” with ～しかない",
    "Say you are sure with ～に[違]{ちが}いない and ～に[決]{き}まっている, and place them next to ～かもしれない, ～でしょう and ～はず"
   ],
   learn: [
    {
     h: "～まま: just as it is",
     body: [
      {
       lead: "[[mama|まま]] means “as it is, unchanged”. A state carries on, often when you would expect it to change."
      },
      {
       table: [
        [
         "Before まま",
         "Example"
        ],
        [
         "verb た-form",
         "[靴]{くつ}をはいたまま・電気をつけたまま"
        ],
        [
         "verb ない-form",
         "意味がわからないまま"
        ],
        [
         "い-adjective",
         "[若]{わか}いまま"
        ],
        [
         "な-adjective + な",
         "きれいなまま"
        ],
        [
         "noun + の",
         "[靴]{くつ}のまま・子どものまま"
        ],
        [
         "この・その・あの",
         "このまま・そのまま"
        ]
       ]
      },
      {
       ex: "[昨日]{きのう}は、電気をつけたまま[寝]{ね}てしまいました。\nYesterday I fell asleep with the light on.\n\n[窓]{まど}を開けたまま、出かけないでください。\nPlease don’t go out and leave the window open.\n\nその夜、チェスカさんは[靴]{くつ}をはいたまま、[階段]{かいだん}に[座]{すわ}っていた。\nThat night, Cheska was sitting on the stairs with her shoes still on.\n\n意味がわからないまま、[書類]{しょるい}にサインしてはいけません。\nDon’t sign a document while you still don’t understand it.",
       label: "～まま"
      },
      "For a state that carries on, the verb before まま is in the **た-form**. The action is finished, and its result is still there. 電気をつけたまま means you switched the light on and it is **still** on. ✗ 電気をつけるまま is wrong.",
      "The second half is usually something that happens while that state lasts. It is often something you wouldn’t normally do in that state, such as sleeping with the light on, going out with the window open, or sitting indoors in your shoes. That is why まま often sounds like “still”, “just as it was” or “without changing”.",
      "To say “leave it as it is”, use ～ままにする, often with ～ておく (Unit 6): そのままにしておいてください (Please leave it as it is). このまま means “like this, as things are”: このままでいいですか (Is it all right like this?).",
      {
       h: "～たまま, ～ておく or ～てある?"
      },
      {
       table: [
        [
         "Pattern",
         "What it stresses",
         "Example"
        ],
        [
         "～たまま",
         "a state carries on while something else happens",
         "[窓]{まど}を開けたまま[寝]{ね}た。"
        ],
        [
         "～ておく",
         "done on purpose, ready for later (Unit 6)",
         "[窓]{まど}を開けておく。"
        ],
        [
         "～てある",
         "someone did it, and you see the result now (Unit 7)",
         "[窓]{まど}が開けてある。"
        ]
       ]
      },
      "So ～ておく ([[te-oku]]) and ～てある ([[te-aru]]) are about a plan or a result; ～たまま is about a state that hasn’t changed when you might expect it to."
     ]
    },
    {
     h: "～っぱなし: left that way (and it shouldn’t be)",
     body: [
      {
       lead: "Verb ます stem + [[ppanashi|っぱなし]] means that something was done and then left that way, usually through carelessness. It works like a noun: っぱなしだ, っぱなしにする, っぱなしで."
      },
      {
       ex: "ロドリゴさん、またおふろの電気がつけっぱなしだよ。\nRodrigo, you’ve left the bathroom light on again.\n\n水を出しっぱなしにしないでください。\nPlease don’t leave the water running.\n\n[窓]{まど}を開けっぱなしにしていたら、[蚊]{か}がたくさん入ってきた。\nI’d left the window open, and lots of mosquitoes came in.",
       label: "～っぱなし: left that way"
      },
      "The second use is “all the time, without a break”. 立ちっぱなし is “standing the whole time”, and [負]{ま}けっぱなし is “losing again and again”: 工場の仕事は、[一日中]{いちにちじゅう}立ちっぱなしです (At the plant, I’m on my feet all day).",
      {
       fig: "<svg viewBox=\"0 0 340 300\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">A state that carries on</text><rect class=\"d-sage\" x=\"6\" y=\"32\" width=\"328\" height=\"122\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"54\">～たまま: the state lasts</text><rect class=\"d-panel\" x=\"190\" y=\"62\" width=\"64\" height=\"24\" rx=\"6\" stroke-width=\"1.5\"/><text x=\"222\" y=\"79\" text-anchor=\"middle\">ねた</text><path class=\"d-ink\" d=\"M222 86V96\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"34\" cy=\"102\" r=\"7\" stroke-width=\"2\"/><text class=\"s\" x=\"34\" y=\"80\" text-anchor=\"middle\">つけた</text><rect class=\"d-gold\" x=\"44\" y=\"96\" width=\"280\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"184\" y=\"126\" text-anchor=\"middle\">でんきが ついている (still on)</text><text class=\"s\" x=\"170\" y=\"144\" text-anchor=\"middle\">B happens while A’s result is still there</text><rect class=\"d-rose\" x=\"6\" y=\"166\" width=\"328\" height=\"122\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"188\">～っぱなし: left that way</text><circle class=\"d-rose\" cx=\"34\" cy=\"226\" r=\"7\" stroke-width=\"2\"/><text class=\"s\" x=\"34\" y=\"208\" text-anchor=\"middle\">あけた</text><rect class=\"d-soft\" x=\"44\" y=\"220\" width=\"250\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"312\" y=\"232\" text-anchor=\"middle\">!</text><text class=\"s\" x=\"170\" y=\"256\" text-anchor=\"middle\">done, then nobody changed it back</text><text class=\"s\" x=\"170\" y=\"276\" text-anchor=\"middle\">(and it shouldn’t have been left)</text></svg>",
       alt: "Two panels. ～たまま, the state lasts: a dot labeled つけた starts a long bar labeled でんきが ついている (still on), and a box labeled ねた sits above the middle of the bar; B happens while A’s result is still there. ～っぱなし, left that way: a dot labeled あけた starts a bar that runs on to an exclamation mark; done, then nobody changed it back (and it shouldn’t have been left).",
       cap: "まま: a state carries on while something else happens. っぱなし: something was left that way, and someone should have dealt with it."
      },
      {
       table: [
        [
         "",
         "～たまま",
         "～っぱなし"
        ],
        [
         "Form",
         "た-form + まま",
         "ます stem + っぱなし"
        ],
        [
         "Feeling",
         "neutral, or surprised",
         "a complaint: it shouldn’t be like that"
        ],
        [
         "Style",
         "any style",
         "mostly spoken"
        ],
        [
         "Example",
         "電気をつけたまま[寝]{ね}た。",
         "電気がつけっぱなしだ。"
        ]
       ]
      },
      {
       warn: "っぱなし follows the ます stem: 開けっぱなし, 出しっぱなし, つけっぱなし. ✗ 開けたっぱなし is wrong. Some lists put ～っぱなし at N2; you will hear it every day, so it is here."
      }
     ]
    },
    {
     h: "～ずに: without doing",
     body: [
      {
       lead: "[[zu-ni|～ずに]] means “without doing”. It says the same as ～ないで, and is a little more formal: you see it in writing and hear it in careful speech."
      },
      {
       table: [
        [
         "Verb",
         "ない-form",
         "～ずに"
        ],
        [
         "食べる",
         "食べない",
         "食べずに"
        ],
        [
         "言う",
         "言わない",
         "言わずに"
        ],
        [
         "使う",
         "使わない",
         "使わずに"
        ],
        [
         "する",
         "しない",
         "**せ**ずに"
        ],
        [
         "[来]{く}る",
         "[来]{こ}ない",
         "[来]{こ}ずに"
        ]
       ]
      },
      {
       key: "Take the ない-form and change ない to ずに. The two exceptions: する → せずに, [来]{く}る → [来]{こ}ずに."
      },
      {
       ex: "[今朝]{けさ}は時間がなくて、朝ごはんを食べずに家を出ました。\nI had no time this morning, so I left home without eating breakfast.\n\n[辞書]{じしょ}を使わずに、この[記事]{きじ}を読んでみましょう。\nLet’s try reading this article without using a dictionary.\n\n[彼]{かれ}は何も言わずに帰ってしまった。\nHe went home without saying a word.\n\n[予約]{よやく}せずに行ったら、[満席]{まんせき}でした。\nI went without booking, and it was full.",
       label: "～ずに"
      },
      "In conversation, ～ないで (from the ない-form, [[nai-form]]) is more common: 朝ごはんを食べないで出かけた. Both mean “without doing”, and both can also mean “instead of doing”: バスに[乗]{の}らずに歩いた (I walked instead of taking the bus).",
      "Only ～ないで makes a request: [忘]{わす}れないでください, never ✗ [忘]{わす}れずにください. But ～ずに can come before a request verb: [忘]{わす}れずに持ってきてください (Please remember to bring it).",
      "And ～なくて (Unit 3) is different again: it gives a **reason**. [傘]{かさ}を持たずに出かけた (I went out without an umbrella) against 道が分からなくて[困]{こま}った (I didn’t know the way, so I was stuck).",
      {
       warn: "✗ しずに is a common slip. The ず-form of する is せず: [連絡]{れんらく}せずに休んだ (was absent without letting anyone know)."
      }
     ]
    },
    {
     h: "～とおりに: just as",
     body: [
      {
       lead: "[[toori-ni|～とおり(に)]] means “just as”, “exactly the way”: you follow a model, a plan or what someone said."
      },
      {
       table: [
        [
         "Before とおり",
         "Example"
        ],
        [
         "verb dictionary form",
         "私が言うとおりに"
        ],
        [
         "verb た-form",
         "言われたとおりに・思ったとおり"
        ],
        [
         "noun + の",
         "[説明書]{せつめいしょ}のとおりに"
        ],
        [
         "noun directly → どおり",
         "[予定]{よてい}どおり・[説明書]{せつめいしょ}どおり"
        ]
       ]
      },
      {
       ex: "[説明書]{せつめいしょ}のとおりに、やってみてください。\nTry doing it just as the instructions say.\n\nさとうさんに教えてもらったとおりに、みそしるを作りました。\nI made miso soup exactly the way Mrs. Satō taught me.\n\n思ったとおり、雨が[降]{ふ}ってきました。\nJust as I thought, it’s started to rain.\n\n電車は[予定]{よてい}どおりに着きました。\nThe train arrived on schedule.",
       label: "～とおりに"
      },
      "とおり is often written 通り, the same word as 通り (street). Straight after a noun, without の, it becomes **どおり**: [予定]{よてい}どおり (as planned), 時間どおり (on time).",
      "に is often left out, especially in 思ったとおり and after どおり. At the end of a sentence it becomes とおりだ: そのとおりです (That’s exactly right).",
      "A near neighbor is ～ように: 前にも言ったように (as I said before) also means “as”. ように points back to something; とおり matches it exactly, step by step. For “so that” ([[you-ni]], Unit 9), only ように works."
     ]
    },
    {
     h: "～ふりをする: pretending",
     body: [
      {
       lead: "[[furi-o-suru|～ふりをする]] means “pretend to”, “act as if”. Someone shows a state that isn’t real, on purpose."
      },
      {
       table: [
        [
         "Before ふり",
         "Example"
        ],
        [
         "verb (plain: ～ている, ～た, ～ない)",
         "[寝]{ね}ているふり・聞こえないふり"
        ],
        [
         "noun + の",
         "病気のふり"
        ],
        [
         "な-adjective + な",
         "[平気]{へいき}なふり"
        ],
        [
         "い-adjective",
         "[忙]{いそが}しいふり"
        ]
       ]
      },
      {
       ex: "雨の夜、かいとさんはリビングで、勉強しているふりをしていた。\nOn the rainy night, Kaito sat in the living room, pretending to study.\n\nそうたは、おじいちゃんの[声]{こえ}が聞こえないふりをした。\nSōta pretended he couldn’t hear his grandfather.\n\nその話は前にも聞いたけど、[初]{はじ}めて聞くふりをした。\nI’d heard the story before, but I acted as if it was the first time.\n\n[本当]{ほんとう}は[心配]{しんぱい}なのに、母は[平気]{へいき}なふりをしている。\nMy mother is really worried, but she’s acting as if she’s fine.",
       label: "～ふりをする"
      },
      "The person who pretends knows the truth. That is the difference from the appearance patterns of Unit 7 ({{appearance-sou-you-rashii}}): 勉強しているようだ and 勉強しているみたい (it seems he’s studying) are **your** impressions, and you might be wrong. 勉強しているふりをしている means he isn’t studying, and he knows it.",
      "And ～っぽい (Lesson 5, [[ppoi]]) is “-ish, like”: 子どもっぽい describes how someone seems, not an act.",
      {
       tip: "ふり is a noun (written [振]{ふ}り), so it takes の after nouns and を before する. [寝]{ね}たふり and [寝]{ね}ているふり both mean “pretending to be asleep”."
      }
     ]
    },
    {
     h: "しか～ない and ～しかない: only, and no other way",
     body: [
      {
       lead: "First, a building block. [[shika-nai|しか]] means “only”, but it always comes with a **negative** verb: literally “nothing except”."
      },
      {
       ex: "[財布]{さいふ}に、百円しかありません。\nI only have a hundred yen in my wallet.\n\nこの店では、[現金]{げんきん}しか使えません。\nThis shop only takes cash.\n\n[昨日]{きのう}は三時間しか[寝]{ね}ていません。\nI only slept three hours last night.",
       label: "しか～ない: only"
      },
      "しか replaces が and を, like さえ (Lesson 1). It comes after other particles: 日本でしか買えない (you can only buy it in Japan). だけ also means “only”, but with a positive verb: 百円だけあります. しか～ない adds the feeling “and that’s not enough”. だけ is neutral.",
      {
       h: "Verb + しかない: there’s no choice but"
      },
      "Put a dictionary-form verb before しかない, and the meaning becomes “there is nothing to do but…”: every other way is closed.",
      {
       ex: "終電が出てしまった。歩いて帰るしかない。\nThe last train has gone. There’s nothing for it but to walk home.\n\n[直]{なお}らないなら、新しいのを買うしかないですね。\nIf it can’t be fixed, you’ll just have to buy a new one.\n\nバスもタクシーもない。待つしかありません。\nNo buses, no taxis. All we can do is wait.",
       label: "～しかない: no choice but"
      },
      "The polite form is ～しかありません (in speech, also ～しかないです). In writing you will meet ～ほかない, with the same meaning.",
      "Compare ～なければならない ([[nakereba-naranai]], Unit 6): a rule or a duty says you must. ～しかない says there is no other way left, often with a sigh."
     ]
    },
    {
     h: "～に[違]{ちが}いない and ～に[決]{き}まっている: I’m sure",
     body: [
      {
       lead: "Both mean “must be”, “I’m sure that…”. [[ni-chigainai|～に[違]{ちが}いない]] is a firm conclusion from what you see or know. [[ni-kimatte-iru|～に[決]{き}まっている]] is stronger: “of course, obviously”. It is conversational and often emotional."
      },
      {
       table: [
        [
         "Before に[違]{ちが}いない / に[決]{き}まっている",
         "Example"
        ],
        [
         "verb (plain)",
         "[来]{く}るに[違]{ちが}いない・[来]{こ}ないに[決]{き}まっている"
        ],
        [
         "い-adjective",
         "高いに[違]{ちが}いない"
        ],
        [
         "な-adjective (no だ)",
         "[静]{しず}かに[違]{ちが}いない"
        ],
        [
         "noun (no だ)",
         "うそに[決]{き}まっている"
        ]
       ]
      },
      {
       ex: "[部屋]{へや}の電気がついている。トビーさんは、まだ起きているに[違]{ちが}いない。\nThe light is on in his room. Toby must still be awake.\n\nあの店は、いつも[行列]{ぎょうれつ}ができている。おいしいに[違]{ちが}いない。\nThere’s always a line at that shop. It must be good.\n\n一万円でブランドのバッグ？にせものに[決]{き}まってるよ。\nA designer bag for ten thousand yen? It’s obviously a fake.\n\n毎日[練習]{れんしゅう}しているんだから、[上手]{じょうず}になるに[決]{き}まっています。\nYou practice every day, so of course you’ll get better.",
       label: "Being sure"
      },
      "Polite forms: ～に[違]{ちが}いありません, ～に[決]{き}まっています. ～に[違]{ちが}いない sounds a little written; in conversation people often say きっと～と思う, or ～に[決]{き}まってる.",
      {
       fig: "<svg viewBox=\"0 0 340 300\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">How sure are you?</text><text x=\"12\" y=\"48\">もしかしたら～かもしれない</text><text class=\"s\" x=\"328\" y=\"48\" text-anchor=\"end\">maybe</text><rect class=\"d-soft\" x=\"12\" y=\"56\" width=\"70\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"12\" y=\"96\">たぶん～でしょう・だろう</text><text class=\"s\" x=\"328\" y=\"96\" text-anchor=\"end\">probably</text><rect class=\"d-sage\" x=\"12\" y=\"104\" width=\"130\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"12\" y=\"144\">～はずだ</text><text class=\"s\" x=\"328\" y=\"144\" text-anchor=\"end\">should (from facts)</text><rect class=\"d-gold\" x=\"12\" y=\"152\" width=\"190\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"12\" y=\"192\">～にちがいない</text><text class=\"s\" x=\"328\" y=\"192\" text-anchor=\"end\">must be (from signs)</text><rect class=\"d-rose\" x=\"12\" y=\"200\" width=\"250\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"12\" y=\"240\">～にきまっている</text><text class=\"s\" x=\"328\" y=\"240\" text-anchor=\"end\">of course! (casual)</text><rect class=\"d-inkf\" x=\"12\" y=\"248\" width=\"316\" height=\"12\" rx=\"4\"/><text class=\"s\" x=\"170\" y=\"288\" text-anchor=\"middle\">longer bar = more sure (a rough guide)</text></svg>",
       alt: "Five bars, each longer than the one above. もしかしたら～かもしれない, maybe; たぶん～でしょう・だろう, probably; ～はずだ, should (from facts); ～にちがいない, must be (from signs); ～にきまっている, of course (casual). Longer bar means more sure; a rough guide.",
       cap: "A rough guide only: tone and context change how sure each one sounds."
      },
      "How is this different from ～はず ([[hazu]], Unit 9)? はず is reasoning from facts or plans: バスは十時に着くはずです (the schedule says so). ～に[違]{ちが}いない is a conclusion drawn from signs, with conviction: 電気がついているから、起きているに[違]{ちが}いない. ～に[決]{き}まっている is “obviously, no question”, and it can sound pushy. ～かもしれない and ～でしょう ([[kamoshirenai]], [[deshou-darou]], Unit 6) are much less sure.",
      "These are guesses about things you can’t check directly, so they don’t describe your own plans: for “I’ll definitely go”, say [必]{かなら}ず行きます, not ✗ 行くに[違]{ちが}いない.",
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
         "電気をつけるまま[寝]{ね}た。",
         "電気をつけたまま[寝]{ね}た。",
         "A state that carries on: た-form + まま."
        ],
        [
         "開けたっぱなし",
         "開けっぱなし",
         "っぱなし follows the ます stem."
        ],
        [
         "[連絡]{れんらく}しずに",
         "[連絡]{れんらく}せずに",
         "The ず-form of する is せず."
        ],
        [
         "[説明書]{せつめいしょ}とおりに",
         "[説明書]{せつめいしょ}のとおりに・[説明書]{せつめいしょ}どおりに",
         "Nouns take の, or どおり straight after."
        ],
        [
         "百円しかあります。",
         "百円しかありません。",
         "しか always needs a negative."
        ],
        [
         "学生だに[違]{ちが}いない。",
         "学生に[違]{ちが}いない。",
         "No だ before に[違]{ちが}いない."
        ]
       ]
      },
      "The full reference is in {{state-manner-certainty}}.",
      {
       terms: [
        "mama",
        "ppanashi",
        "zu-ni",
        "toori-ni",
        "furi-o-suru",
        "shika-nai",
        "ni-chigainai",
        "ni-kimatte-iru"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l6-x1",
     type: "match",
     q: "Match each verb with its ～ずに form (“without doing”).",
     pairs: [
      [
       "食べる",
       "食べずに",
       "Ichidan: 食べない → ない becomes ずに."
      ],
      [
       "言う",
       "言わずに",
       "Godan う-verbs change う to わ in the ない-form: 言わない → 言わずに."
      ],
      [
       "する",
       "せずに",
       "The exception: する becomes せず, not ✗ しず."
      ],
      [
       "[来]{く}る",
       "[来]{こ}ずに",
       "[来]{く}る → [来]{こ}ない → [来]{こ}ずに, read こずに."
      ],
      [
       "使う",
       "使わずに",
       "使わない → 使わずに."
      ]
     ]
    },
    {
     id: "e3u10-l6-x2",
     type: "mcq",
     q: "Kaito writes in the house chat: 「エアコンをつけたまま、出かけてしまった。」 What happened?",
     options: [
      {
       t: "He went out and left the air conditioner on.",
       ok: true,
       why: "Right. た-form + まま: he switched it on, and it was still on when he went out. てしまった adds “oops”."
      },
      {
       t: "He turned the air conditioner on on purpose before leaving, so the room would be cool when he got back.",
       why: "Doing it on purpose, ready for later, is ～ておく: エアコンをつけておいた. まま just says the state didn’t change."
      },
      {
       t: "He went out before he could turn the air conditioner on.",
       why: "That would be エアコンをつける前に出かけた. つけたまま means it was already on."
      },
      {
       t: "He turned it off and went out.",
       why: "Turning it off is [消]{け}す: エアコンを[消]{け}して出かけた. つけたまま means it stayed on."
      }
     ]
    },
    {
     id: "e3u10-l6-x3",
     type: "sort",
     q: "In which sentences does the speaker say the state is **not real** (someone is pretending)?",
     buckets: [
      "The speaker thinks it is true",
      "Pretending: it isn’t true"
     ],
     items: [
      {
       t: "かいとさんは[寝]{ね}ているみたい。",
       b: 0,
       why: "みたい is the speaker’s impression: Kaito seems to be asleep."
      },
      {
       t: "かいとさんは[寝]{ね}ているふりをしている。",
       b: 1,
       why: "ふりをする: Kaito is awake and acting asleep."
      },
      {
       t: "そうたは、何も知らないようだ。",
       b: 0,
       why: "ようだ is a guess from signs that Sōta really doesn’t know."
      },
      {
       t: "そうたは、何も知らないふりをした。",
       b: 1,
       why: "He knows, but acts as if he doesn’t."
      },
      {
       t: "兄は、病気のふりをして学校を休んだ。",
       b: 1,
       why: "Noun + のふり: he wasn’t really ill."
      },
      {
       t: "兄は、病気らしい。",
       b: 0,
       why: "らしい: the speaker has heard that he is ill and believes it."
      }
     ]
    },
    {
     id: "e3u10-l6-x4",
     type: "mcq",
     q: "Yến calls down the hallway: 「だれ？[台所]{だいどころ}の水、出しっぱなしだよ！」 What is she saying?",
     options: [
      {
       t: "Someone has left the kitchen tap running.",
       ok: true,
       why: "Right. ます stem + っぱなし: the water was turned on and left on, and she isn’t happy about it."
      },
      {
       t: "Someone has just turned the kitchen tap on for her.",
       why: "っぱなし is about something left that way, usually carelessly, not a favor."
      },
      {
       t: "The water in the kitchen has stopped coming out.",
       why: "出しっぱなし means the opposite: the water keeps running."
      },
      {
       t: "Someone is running the water on purpose to clean the sink.",
       why: "On purpose would be ～ておく or a reason. っぱなし is a complaint about something left."
      }
     ]
    },
    {
     id: "e3u10-l6-x5",
     type: "spot",
     q: "Rodrigo writes an apology to Mrs. Satō. Tap each form that is **wrong**.",
     ask: "is wrong",
     parts: [
      "さとうさん、[昨日]{きのう}はすみませんでした。[窓]{まど}を",
      {
       t: "開けたまま",
       flag: false,
       why: "Correct: た-form + まま, “with the window still open”."
      },
      "出かけてしまいました。[台所]{だいどころ}の電気も",
      {
       t: "つけたっぱなし",
       flag: true,
       why: "Wrong. っぱなし follows the ます stem: つけっぱなし."
      },
      "でした。それに、[連絡]{れんらく}",
      {
       t: "しずに",
       flag: true,
       why: "Wrong. The ず-form of する is せず: [連絡]{れんらく}せずに."
      },
      "[遅]{おそ}く帰ってしまいました。これからは、さとうさんが",
      {
       t: "言うとおりに",
       flag: false,
       why: "Correct: dictionary form + とおりに, “just as you say”."
      },
      "します。ごみも、",
      {
       t: "[忘]{わす}れずに",
       flag: false,
       why: "Correct: [忘]{わす}れない → [忘]{わす}れずに, “without forgetting”."
      },
      "出します。"
     ]
    },
    {
     id: "e3u10-l6-x6",
     type: "mcq",
     q: "Complete the sentence so it means “I only have a thousand yen in my wallet”: [財布]{さいふ}に千円（　）ない。",
     options: [
      {
       t: "しか",
       ok: true,
       why: "Right. しか + a negative verb means “only”, with the feeling that it isn’t much."
      },
      {
       t: "だけ",
       why: "だけ also means “only”, but it takes a positive verb: 千円だけある. With ない it doesn’t work here."
      },
      {
       t: "が",
       why: "千円がない would mean “I don’t have the thousand yen”, not “only a thousand”."
      },
      {
       t: "ほど",
       why: "ほど～ない compares degree (“not as … as”, Lesson 3); it doesn’t mean “only”."
      }
     ]
    },
    {
     id: "e3u10-l6-x7",
     type: "mcq",
     q: "A typhoon has stopped the trains, and there are no taxis. Which sentence says “we have no choice but to stay at a hotel”?",
     options: [
      {
       t: "ホテルに[泊]{と}まるしかない。",
       ok: true,
       why: "Right. Dictionary form + しかない: there is no other way left."
      },
      {
       t: "ホテルに[泊]{と}まるはずだ。",
       why: "はず is an expectation from facts (“we are expected to stay”). It doesn’t say every other option is closed."
      },
      {
       t: "ホテルに[泊]{と}まらないしかない。",
       why: "Wrong form. しかない follows the dictionary form: [泊]{と}まるしかない."
      },
      {
       t: "ホテルに[泊]{と}まりそうだ。",
       why: "～そう is “looks like”, a guess from appearance (Unit 7), not “no choice”."
      }
     ]
    },
    {
     id: "e3u10-l6-x8",
     type: "match",
     q: "Four housemates guess whether Toby is in his room. Match each sentence to how sure the speaker sounds.",
     pairs: [
      [
       "トビーさんは[部屋]{へや}にいるかもしれない。",
       "maybe",
       "～かもしれない: only a possibility."
      ],
      [
       "トビーさんは[部屋]{へや}にいるでしょう。",
       "probably",
       "～でしょう: a fair guess."
      ],
      [
       "トビーさんは[部屋]{へや}にいるに[違]{ちが}いない。",
       "must be, judging from the signs",
       "～に[違]{ちが}いない: a firm conclusion from what you can see or hear."
      ],
      [
       "トビーさんは[部屋]{へや}にいるに[決]{き}まってるよ。",
       "obviously, no question (casual)",
       "～に[決]{き}まってる: very strong and conversational."
      ]
     ]
    },
    {
     id: "e3u10-l6-x9",
     type: "type",
     q: "Type the ～ずに form of する that fits: 「[連絡]{れんらく}（　）休むのは、よくないですよ。」 (“Being absent without letting anyone know isn’t good.”)",
     answer: "せずに",
     wrongs: [
      {
       v: "せず",
       why: "Close: せず is the ず-form itself. For “without doing” before 休む, add に: せずに."
      },
      {
       v: "しずに",
       why: "する is the exception: its ず-form is せず, so せずに."
      },
      {
       v: "しないで",
       why: "しないで means the same and is fine in speech, but the question asks for the ず-form: せずに."
      }
     ],
     why: "～ずに means “without doing”. For する, ない → ず gives せず: [連絡]{れんらく}せずに休む."
    },
    {
     id: "e3u10-l6-x10",
     type: "type",
     q: "Type the missing words for “just as the instructions say”: 「[説明書]{せつめいしょ}（　）、[組]{く}み立ててください。」",
     answer: [
      "のとおりに",
      "どおりに",
      "のとおり",
      "どおり"
     ],
     wrongs: [
      {
       v: "とおりに",
       why: "After a noun, add の (のとおりに) or join it directly as どおり (どおりに)."
      },
      {
       v: "のように",
       why: "ように points back to something (“as”, “like”), but to follow instructions step by step, use のとおりに."
      }
     ],
     why: "Noun + のとおりに, or noun + どおりに: “exactly as”. [説明書]{せつめいしょ}のとおりに[組]{く}み立てる, “put it together just as the instructions say”."
    },
    {
     id: "e3u10-l6-x11",
     type: "type",
     q: "Type the missing word: 「そうたは、[宿題]{しゅくだい}をしている（　）をして、ゲームをしていた。」 (“Sōta was pretending to do his homework, but he was playing a game.”)",
     answer: "ふり",
     wrongs: [
      {
       v: "よう",
       why: "ようだ is the speaker’s impression and can’t take をする. For pretending, use ふりをする."
      },
      {
       v: "まま",
       why: "まま is “as it is, unchanged” and doesn’t take をする. Pretending is ふりをする."
      }
     ],
     why: "Plain verb + ふりをする: Sōta acted as if he was doing his homework. He knew he wasn’t."
    }
   ],
   apply: {
    intro: "Use the patterns about your own life. Keep the notes for yourself.",
    tasks: [
     {
      t: "Left as it is",
      how: [
       "Write two ～たまま sentences about things you sometimes do: [寝]{ね}る, 出かける, 食べる with something still on, open or unfinished.",
       "Write one ～っぱなし sentence, as a housemate or family member might complain to you (… がつけっぱなしだよ).",
       "Write one ～ずに sentence about something you did without something else (… を使わずに, … を食べずに)."
      ],
      write: "まま 1… 2… っぱなし: … ずに: …"
     },
     {
      t: "Just as told, and pretending",
      how: [
       "Find a recipe, a set of instructions or a schedule (in any language). Write two sentences with ～とおりに or ～どおり about following it, or about something that went as planned.",
       "Write one sentence about a time you pretended something: 聞こえないふり, [寝]{ね}たふり, 知らないふり…."
      ],
      write: "とおり 1… 2… ふり: …"
     },
     {
      t: "No choice, and how sure",
      how: [
       "Write one しか～ない sentence about what you have only a little of today, and one ～しかない sentence about a problem with only one way out.",
       "Look out of the window or at today’s news. Write three guesses with ～かもしれない, ～でしょう and ～に[違]{ちが}いない, and one ～に[決]{き}まってる as you would say it to a friend.",
       "Check: no だ before に[違]{ちが}いない after a noun or a な-adjective."
      ],
      write: "しか… しかない… かもしれない… でしょう… [違]{ちが}いない… [決]{き}まってる…"
     }
    ],
    proof: "Two ～たまま, one ～っぱなし and one ～ずに sentence, two ～とおり and one ～ふり sentence, one しか～ない and one ～しかない sentence, and four guesses at different levels of certainty, all your own."
   },
   read: [
    {
     book: "taekim",
     where: "Special Expressions, “Expressing a lack of change” (「まま」 and 「っぱなし」)"
    },
    {
     book: "taekim",
     where: "Special Expressions, “More negative verbs”, section “Doing something without doing something else” (～ずに)"
    },
    {
     book: "taekim",
     where: "Special Expressions, “Expressing Amounts”, section on 「しか」 (“Indication that there’s nothing else”)"
    },
    {
     book: "imabi",
     where: "第149課 “～とおりに” and 第260課 “No Doubt that: ～に違いない & ～に相違ない”",
     note: "Detailed and advanced: read the sections on the pattern you want and skip the rest."
    }
   ]
  },
  {
   id: "e3u10-l7",
   title: "Time, range, focus and contrast: ～とたん, ～ついでに, ～ていらい, ～から～にかけて, ～をちゅうしんに, ～にかんして, ～わりに・～にしては, ～ばかりか",
   minutes: 65,
   hook: {
    q: "A colleague reads your first email in Japanese and says: 「日本語を始めて一年にしては、とても[上手]{じょうず}ですね。」 What does she mean?",
    options: [
     "It’s very good for someone who has studied for only a year",
     "It’s good, but after a whole year it should be better",
     "It’s as good as anyone’s after a year of study",
     "It will be very good once you have studied for a year"
    ],
    answer: 0,
    reveal: "**It’s very good for someone who has studied for only a year.** ～にしては means “for…, considering…”: you take a known fact (one year of study) as the standard. Then you say the result is better or worse than you would expect from it. Here it is better, so it is praise. This lesson pairs ～にしては with ～わりに. It also adds six patterns for time, range, focus and “not only… but even”. These fill N3 notices, news and conversation."
   },
   goals: [
    "Say “the moment that” for something sudden with ～たとたん(に), and use ～てすぐ for your own actions",
    "Do something extra “while you’re at it” with ～ついでに",
    "Say “ever since” with ～て以来, and spread an event over a period or an area with ～から～にかけて",
    "Name the main focus with ～を中心に, and a topic formally with ～に[関]{かん}して and ～に[関]{かん}する",
    "Say “for…” or “considering…” with ～わりに and ～にしては",
    "Go one step further than ～だけでなく with ～ばかりか"
   ],
   learn: [
    {
     h: "Four ways to place an event",
     body: [
      {
       lead: "Lesson 2 placed events inside a stretch of time with ～うちに, ～[間]{あいだ} and ～たびに. Four more patterns say how an event connects to another, or how widely it spreads."
      },
      {
       fig: "<svg viewBox=\"0 0 340 392\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">Four ways to place an event</text><text x=\"12\" y=\"48\">～たとたん: the instant after</text><path class=\"d-ink\" d=\"M20 74H320\" stroke-width=\"1.5\"/><circle class=\"d-sage\" cx=\"110\" cy=\"74\" r=\"8\" stroke-width=\"2\"/><text class=\"s\" x=\"110\" y=\"98\" text-anchor=\"middle\">A</text><circle class=\"d-rose\" cx=\"134\" cy=\"74\" r=\"8\" stroke-width=\"2\"/><text class=\"s\" x=\"140\" y=\"98\" text-anchor=\"middle\">B!</text><text class=\"s\" x=\"170\" y=\"118\" text-anchor=\"middle\">B comes at once, often as a surprise</text><text x=\"12\" y=\"146\">～ついでに: on the same trip</text><path class=\"d-ink\" d=\"M20 178H140V158H200V178H320\" stroke-width=\"2\" fill=\"none\"/><rect class=\"d-gold\" x=\"148\" y=\"150\" width=\"44\" height=\"18\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"164\" text-anchor=\"middle\">B</text><text class=\"s\" x=\"60\" y=\"196\" text-anchor=\"middle\">A (main)</text><text class=\"s\" x=\"280\" y=\"196\" text-anchor=\"middle\">A (main)</text><text class=\"s\" x=\"170\" y=\"214\" text-anchor=\"middle\">a small extra (B) on the way</text><text x=\"12\" y=\"242\">～ていらい: ever since</text><circle class=\"d-rose\" cx=\"40\" cy=\"268\" r=\"8\" stroke-width=\"2\"/><rect class=\"d-sage\" x=\"50\" y=\"262\" width=\"240\" height=\"12\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"308\" y=\"272\" text-anchor=\"middle\">now</text><text class=\"s\" x=\"170\" y=\"294\" text-anchor=\"middle\">from a turning point up to now</text><text x=\"12\" y=\"322\">から～にかけて: spread over</text><rect class=\"d-soft\" x=\"40\" y=\"334\" width=\"260\" height=\"20\" rx=\"8\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/><circle class=\"d-inkf\" cx=\"80\" cy=\"344\" r=\"3\"/><circle class=\"d-inkf\" cx=\"130\" cy=\"344\" r=\"3\"/><circle class=\"d-inkf\" cx=\"150\" cy=\"344\" r=\"3\"/><circle class=\"d-inkf\" cx=\"215\" cy=\"344\" r=\"3\"/><circle class=\"d-inkf\" cx=\"262\" cy=\"344\" r=\"3\"/><text class=\"s\" x=\"170\" y=\"378\" text-anchor=\"middle\">somewhere over the span, roughly</text></svg>",
       alt: "Four timelines. ～たとたん, the instant after: dot A, and right beside it dot B with an exclamation mark; B comes at once, often as a surprise. ～ついでに, on the same trip: a line labeled A (main) with a small step up to a box B in the middle; a small extra on the way. ～ていらい, ever since: a dot followed by a long bar to now; from a turning point up to now. から～にかけて, spread over: a dashed box with dots scattered inside; somewhere over the span, roughly.",
       cap: "とたん: at once. ついでに: on the same trip. 以来: ever since. にかけて: spread over a span."
      },
      "Each section below takes one pattern. Then come three patterns for focus and topic, and three for contrast."
     ]
    },
    {
     h: "～たとたん(に): the moment that",
     body: [
      {
       lead: "た-form + [[totan-ni|とたん(に)]] means “the moment that”, “just as”: B happens immediately after A, and usually B is sudden or unexpected."
      },
      {
       ex: "ドアを開けたとたん、ねこが入ってきた。\nThe moment we opened the door, the cat came in.\n\n立ち上がったとたんに、めまいがした。\nAs soon as I stood up, I felt dizzy.\n\n駅を出たとたん、雨が[降]{ふ}り出した。\nJust as I came out of the station, it started to rain.\n\n有名になったとたん、友だちが[増]{ふ}えた。\nThe moment he became famous, he suddenly had lots of friends.",
       label: "～たとたん(に)"
      },
      "The verb before とたん is always in the **た-form**: A has just happened. ✗ 開けるとたん is wrong.",
      "B is something that **happens**, not something you decide to do. So you can’t use とたん for your own planned action, or for a request: ✗ 家に帰ったとたん、シャワーを[浴]{あ}びた sounds wrong, because showering is your choice. Say 家に帰って、すぐシャワーを[浴]{あ}びた. For a request, use ～たら、すぐ: 着いたら、すぐ電話してください.",
      {
       h: "Near neighbors"
      },
      {
       list: [
        "**～たら** ([[conditional-tara]], Unit 6) can report what you found: ドアを開けたら、ねこがいた (when I opened the door, the cat was there). とたん says that something **moved or changed** at that instant.",
        "**～たところ** and **～たばかり** ({{tokoro-and-bakari}}, Unit 9) say how recently something finished, not what happened at that moment."
       ]
      }
     ]
    },
    {
     h: "～ついでに: while you’re at it",
     body: [
      {
       lead: "[[tsuide-ni|ついでに]] means “while you’re at it”, “on the same trip”: you are doing A anyway, so you take the chance to do B too."
      },
      {
       table: [
        [
         "Before ついでに",
         "Example"
        ],
        [
         "verb dictionary form",
         "コンビニに行くついでに"
        ],
        [
         "verb た-form",
         "東京に行ったついでに"
        ],
        [
         "noun + の",
         "買い物のついでに"
        ]
       ]
      },
      {
       ex: "コンビニに行くついでに、[牛乳]{ぎゅうにゅう}を買ってきてくれる？\nSince you’re going to the convenience store, could you get some milk?\n\n買い物のついでに、図書館に[寄]{よ}って本を[返]{かえ}した。\nWhile I was out shopping, I stopped at the library and returned a book.\n\n東京に[出張]{しゅっちょう}したついでに、大学の友だちに会った。\nWhile I was in Tokyo on business, I met a friend from university.",
       label: "～ついでに"
      },
      "A, before ついでに, is the main plan; B is the extra. With the dictionary form (行くついでに), B happens on the way, as part of the trip. With the た-form (行ったついでに), B happens once you are there.",
      "ついでに also stands alone at the start of a sentence: ついでに、ごみも出しておいて (While you’re at it, take the garbage out too).",
      "Compare ～ながら ([[nagara]], Unit 7): one person does two things **at the same moment** (歩きながら話す). With ついでに, the two actions are on the same trip, usually one after the other."
     ]
    },
    {
     h: "～て以来 and ～から～にかけて: since, and over a span",
     body: [
      {
       lead: "て-form + [[te-irai|以来]], or noun + 以来, means “ever since”: from a turning point in the past, a situation has continued up to now."
      },
      {
       ex: "日本に来て以来、毎日日本語で[日記]{にっき}を書いています。\nEver since I came to Japan, I’ve kept a diary in Japanese every day.\n\n[卒業]{そつぎょう}して以来、[彼]{かれ}には一度も会っていません。\nI haven’t seen him once since we graduated.\n\nあの大雨の夜以来、かもめ[荘]{そう}では[防災]{ぼうさい}の話がよく出る。\nEver since that night of heavy rain, disaster preparedness often comes up at Kamome House.",
       label: "～て以来"
      },
      "After a noun, 以来 comes directly: あの日以来, 去年の春以来, and それ以来 (since then). The second half is a continuing state or a repeated habit, often with ずっと or a negative (一度も会っていない).",
      "～てから ([[te-form]], Unit 3) can also mean “since”: 日本に来てから、ずっと[日記]{にっき}を書いています. But ～てから is also “after” for a single next event ([宿題]{しゅくだい}をしてから[寝]{ね}ます), and 以来 can’t do that: ✗ [宿題]{しゅくだい}をして以来、[寝]{ね}ました. 以来 is more formal, and it is used for a turning point some time ago, not for something that happened a few minutes ago.",
      {
       h: "～から～にかけて: from … through …"
      },
      "[[kara-ni-kakete|から～にかけて]] means that something is spread over a span of time or an area, roughly, and not always the whole time.",
      {
       ex: "今夜から[明日]{あした}の朝にかけて、強い雨が[降]{ふ}るでしょう。\nHeavy rain is expected from tonight into tomorrow morning.\n\n三月の終わりから四月にかけて、[桜]{さくら}が[咲]{さ}きます。\nThe cherry trees blossom from late March into April.\n\n[関東]{かんとう}から東北にかけて、[雪]{ゆき}が[降]{ふ}っています。\nIt is snowing over a wide area, from Kantō to Tōhoku.",
       label: "から～にかけて"
      },
      "Compare から～まで ([[particle-kara-made]], Unit 2), which gives an exact start and end: 九時から五時まで[働]{はたら}く (I work from nine to five). A schedule needs まで; a weather forecast, with rain at times over a period, uses にかけて. にかけて can also stand alone: [年末]{ねんまつ}にかけて (toward the end of the year)."
     ]
    },
    {
     h: "～を中心に: centered on",
     body: [
      {
       lead: "Noun + [[o-chuushin-ni|を中心に(して)]] means “centered on”, “mainly”: the noun is the main part of a wider set. Before another noun, use を中心とした."
      },
      {
       ex: "この町は、[港]{みなと}を中心に[発展]{はってん}してきた。\nThis town grew up around its harbor.\n\nこのアプリは、[若]{わか}い人を中心に人気がある。\nThis app is popular, mainly among young people.\n\n[今日]{きょう}の[授業]{じゅぎょう}では、N3の[文法]{ぶんぽう}を中心に[復習]{ふくしゅう}します。\nIn today’s class, we’ll review, focusing mainly on N3 grammar.",
       label: "～を中心に"
      },
      "Other things are included too: older people may use the app, and the class may review some kanji. を中心に just tells you where the weight is. You will also see N を中心とした N: 駅を中心とした[地域]{ちいき} (the area around the station).",
      "Compare について ([[ni-tsuite]], Unit 9): について gives the topic you talk or write about; を中心に gives the main part of something wider."
     ]
    },
    {
     h: "～に[関]{かん}して and ～に[関]{かん}する: about, concerning",
     body: [
      {
       lead: "Noun + [[ni-kanshite|に[関]{かん}して]] means “about”, “concerning”. It is a more formal relative of について. Before a noun, it becomes に[関]{かん}する."
      },
      {
       ex: "この[件]{けん}に[関]{かん}して、ご質問があれば、メールでお[願]{ねが}いします。\nIf you have any questions about this matter, please email us.\n\n[市役所]{しやくしょ}で、[防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}をもらった。\nI got some leaflets on disaster preparedness at the city office.\n\n料金に[関]{かん}しては、[受付]{うけつけ}にお問い[合]{あ}わせください。\nFor questions about fees, please ask at reception.",
       label: "～に[関]{かん}して・～に[関]{かん}する"
      },
      {
       table: [
        [
         "",
         "について",
         "に[関]{かん}して"
        ],
        [
         "Style",
         "everyday, spoken and written",
         "more formal: notices, reports, business"
        ],
        [
         "Before a noun",
         "についての + noun",
         "に[関]{かん}する + noun"
        ],
        [
         "Example",
         "日本の[歴史]{れきし}についての本",
         "日本の[歴史]{れきし}に[関]{かん}する本"
        ]
       ]
      },
      "With は, に[関]{かん}しては sets a topic apart from others: “as for…”, as in the last example. In speech about everyday things, について is the natural choice; save に[関]{かん}して for notices, emails at work and reports. The other compound particles are in {{compound-particles}}."
     ]
    },
    {
     h: "～わりに and ～にしては: for…, considering…",
     body: [
      {
       lead: "Both say that a result is different from what you would expect. [[wari-ni|わりに]] weighs it against a quality or amount (price, age, effort). [[ni-shite-wa|にしては]] weighs it against one known fact."
      },
      {
       table: [
        [
         "Before",
         "～わりに",
         "～にしては"
        ],
        [
         "noun",
         "[値段]{ねだん}のわりに",
         "[初]{はじ}めてにしては"
        ],
        [
         "verb (plain)",
         "よく食べるわりに",
         "一年勉強したにしては"
        ],
        [
         "い-adjective",
         "高いわりに",
         "—"
        ],
        [
         "な-adjective",
         "[静]{しず}かなわりに",
         "—"
        ]
       ]
      },
      {
       ex: "この店は、[値段]{ねだん}のわりにおいしい。\nThe food here is good for the price.\n\n父は、年のわりに[若]{わか}く見える。\nMy father looks young for his age.\n\nよく食べるわりに、[太]{ふと}らない。\nConsidering how much I eat, I don’t put on weight.\n\n[初]{はじ}めてにしては、[上手]{じょうず}ですね。\nThat’s good for a first try.\n\n十一月にしては、[暖]{あたた}かいですね。\nIt’s warm for November, isn’t it?",
       label: "～わりに and ～にしては"
      },
      "わりに can take adjectives; にしては can’t: ✗ 高いにしては is wrong, but 高いわりに is fine. にしては needs a specific standard (the first time, November, one year of study), and it often adds a little surprise. With age and price both work: 六十[歳]{さい}にしては[若]{わか}い, 年のわりに[若]{わか}い.",
      {
       h: "Four ways to say “expensive, and…”"
      },
      {
       table: [
        [
         "Sentence",
         "Meaning"
        ],
        [
         "高いわりに、おいしくない。",
         "It isn’t as good as the price promises."
        ],
        [
         "高いのに、おいしくない。",
         "It’s expensive, and yet it isn’t good! (a complaint, Unit 7)"
        ],
        [
         "高いかわりに、おいしい。",
         "It’s expensive, but good to make up for it (a trade-off, Lesson 3)."
        ],
        [
         "千円にしては、おいしい。",
         "Good, for only a thousand yen."
        ]
       ]
      },
      "～のに ([[noni]]) reports a fact with feeling. ～かわりに ([[kawari-ni]]) is a trade. ～に[比]{くら}べて ([[ni-kurabete]]) simply compares two things. わりに and にしては measure a result against what you expected."
     ]
    },
    {
     h: "～ばかりか: not only… but even",
     body: [
      {
       lead: "Noun or plain form + [[bakari-ka|ばかりか]] means “not only A, but even B”. B goes further than you would expect, so it often has も, まで or さえ."
      },
      {
       ex: "大雨で、電車ばかりか、バスまで止まった。\nThe heavy rain stopped not only the trains but even the buses.\n\n[彼]{かれ}は[約束]{やくそく}の時間に[遅]{おく}れたばかりか、[謝]{あやま}りもしなかった。\nNot only was he late, he didn’t even apologize.\n\nこの本は、子どもばかりか[大人]{おとな}にも人気がある。\nThis book is popular not only with children but with adults too.",
       label: "～ばかりか"
      },
      "な-adjectives take な: [静]{しず}かなばかりか. Compare ～だけでなく (Lesson 1, [[dake-de-naku]]): ばかりか is stronger and more written, and the second part is the surprising one. It can’t end in a request, an order or your own plan: ✗ [野菜]{やさい}ばかりか[果物]{くだもの}も食べてください is wrong; say [野菜]{やさい}だけでなく[果物]{くだもの}も食べてください. Don’t confuse it with ～ばかり (“nothing but”, [[bakari]], Unit 9). Some lists put ～ばかりか at N2.",
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
         "家に帰ったとたん、シャワーを[浴]{あ}びた。",
         "家に帰って、すぐシャワーを[浴]{あ}びた。",
         "とたん is for what happens, not your own choice."
        ],
        [
         "開けるとたん",
         "開けたとたん",
         "とたん follows the た-form."
        ],
        [
         "九時から五時にかけて[働]{はたら}く。",
         "九時から五時まで[働]{はたら}く。",
         "Exact times need から～まで."
        ],
        [
         "[防災]{ぼうさい}に[関]{かん}して[資料]{しりょう}",
         "[防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}",
         "Before a noun: に[関]{かん}する."
        ],
        [
         "高いにしては",
         "高いわりに",
         "にしては doesn’t follow adjectives."
        ],
        [
         "[野菜]{やさい}ばかりか[果物]{くだもの}も食べてください。",
         "[野菜]{やさい}だけでなく[果物]{くだもの}も食べてください。",
         "ばかりか can’t end in a request."
        ]
       ]
      },
      "That completes the N3 grammar in this track. Unit 11 turns to the N3 kanji, which you have been reading with furigana in this unit. Short daily review pays off, and forgetting and relearning is a normal part of it.",
      {
       lab: "kl-n3",
       t: "Practice: the N3 kanji, many of which appear in this unit’s examples"
      },
      {
       lab: "kl-n3-vocab",
       t: "Practice: N3 vocabulary, including the words in this unit"
      },
      "The patterns of this lesson are collected in {{time-range-focus-contrast}}, and all the patterns of the unit in {{n3-grammar-patterns-2}}.",
      {
       terms: [
        "totan-ni",
        "tsuide-ni",
        "te-irai",
        "kara-ni-kakete",
        "o-chuushin-ni",
        "ni-kanshite",
        "wari-ni",
        "ni-shite-wa",
        "bakari-ka"
       ]
      }
     ]
    }
   ],
   try: [
    {
     id: "e3u10-l7-x1",
     type: "match",
     q: "Match each pattern to its meaning.",
     pairs: [
      [
       "～たとたん",
       "the moment that (and suddenly)",
       "B happens at once after A, often unexpectedly."
      ],
      [
       "～ついでに",
       "while you’re at it",
       "You do A anyway, so you add B on the same trip."
      ],
      [
       "～て以来",
       "ever since",
       "From a turning point in the past up to now."
      ],
      [
       "～から～にかけて",
       "spread over, roughly",
       "Over a span of time or an area, not always the whole time."
      ],
      [
       "～を中心に",
       "mainly, centered on",
       "The main part of a wider set."
      ]
     ]
    },
    {
     id: "e3u10-l7-x2",
     type: "mcq",
     q: "Which sentence uses ～とたん correctly?",
     options: [
      {
       t: "ドアを開けたとたん、ねこが入ってきた。",
       ok: true,
       why: "Right. た-form + とたん, and the cat’s coming in is something that happened, not the speaker’s choice."
      },
      {
       t: "家に帰ったとたん、シャワーを[浴]{あ}びた。",
       why: "Showering is your own choice. Say 家に帰って、すぐシャワーを[浴]{あ}びた."
      },
      {
       t: "ドアを開けるとたん、ねこが入ってきた。",
       why: "とたん follows the た-form: 開けたとたん."
      },
      {
       t: "着いたとたんに、電話してください。",
       why: "とたん can’t lead to a request. Say 着いたら、すぐ電話してください."
      }
     ]
    },
    {
     id: "e3u10-l7-x3",
     type: "sort",
     q: "Which fits each situation better: から～まで (exact start and end) or から～にかけて (spread over a span, roughly)?",
     buckets: [
      "から～まで",
      "から～にかけて"
     ],
     items: [
      {
       t: "The bank is open from 9:00 to 15:00.",
       b: 0,
       why: "Opening hours are exact: 九時から三時まで."
      },
      {
       t: "Heavy rain is expected from tonight into tomorrow morning.",
       b: 1,
       why: "A forecast: rain at times over the period. 今夜から朝にかけて."
      },
      {
       t: "The test runs from 9:00 to 10:30.",
       b: 0,
       why: "A test has an exact start and end."
      },
      {
       t: "The cherry trees blossom from late March into April.",
       b: 1,
       why: "Blossom spreads over the weeks, roughly."
      },
      {
       t: "It’s snowing over a wide area, from Kantō to Tōhoku.",
       b: 1,
       why: "An area spread over a region: [関東]{かんとう}から東北にかけて."
      },
      {
       t: "My shift is from 6 a.m. to 2 p.m.",
       b: 0,
       why: "A shift has fixed times: 六時から二時まで."
      }
     ]
    },
    {
     id: "e3u10-l7-x4",
     type: "mcq",
     q: "Mariya says to Toby: 「コンビニに行くついでに、[牛乳]{ぎゅうにゅう}を買ってきてくれる？」 What is she asking?",
     options: [
      {
       t: "Since he’s going anyway, to get milk too",
       ok: true,
       why: "Right. The trip to the store is the main plan; the milk is the extra, done on the same trip."
      },
      {
       t: "To go to the convenience store just to buy milk for her",
       why: "That would make the milk the main purpose: [牛乳]{ぎゅうにゅう}を買いにコンビニに行ってくれる？ ついでに means he is going anyway."
      },
      {
       t: "To buy milk somewhere else instead of at the convenience store",
       why: "“Instead of” is ～かわりに (Lesson 3)."
      },
      {
       t: "To drink milk while he walks to the store",
       why: "Doing two things at the same moment is ～ながら (Unit 7)."
      }
     ]
    },
    {
     id: "e3u10-l7-x5",
     type: "mcq",
     q: "Which sentence is **not** natural?",
     options: [
      {
       t: "[宿題]{しゅくだい}をして以来、[寝]{ね}ました。",
       ok: true,
       why: "Right, this one is wrong. 以来 needs a situation that has continued since a turning point; for one next event, use ～てから: [宿題]{しゅくだい}をしてから[寝]{ね}ました."
      },
      {
       t: "日本に来て以来、ずっと[日記]{にっき}を書いています。",
       why: "Natural: a habit that has continued since coming to Japan."
      },
      {
       t: "日本に来てから、ずっと[日記]{にっき}を書いています。",
       why: "Natural: ～てから with ずっと can also mean “since”."
      },
      {
       t: "[宿題]{しゅくだい}をしてから[寝]{ね}ました。",
       why: "Natural: ～てから for “after”, one event and then the next."
      }
     ]
    },
    {
     id: "e3u10-l7-x6",
     type: "spot",
     q: "A notice from the city office’s disaster-prevention section. Tap each phrase that is **wrong**.",
     ask: "is wrong",
     parts: [
      "[防災課]{ぼうさいか}からのお知らせ：今夜",
      {
       t: "から[明日]{あした}の朝にかけて",
       flag: false,
       why: "Correct: rain at times over a span, so にかけて."
      },
      "、強い雨が[降]{ふ}るでしょう。川の近くの方は、[暗]{くら}く",
      {
       t: "ならないうちに",
       flag: false,
       why: "Correct: ～ないうちに from Lesson 2, “before it gets dark”."
      },
      "[避難]{ひなん}してください。[避難所]{ひなんじょ}",
      {
       t: "に[関]{かん}して[資料]{しりょう}",
       flag: true,
       why: "Wrong. Before a noun, use に[関]{かん}する: [避難所]{ひなんじょ}に[関]{かん}する[資料]{しりょう}."
      },
      "は、[市]{し}のホームページにあります。また、お[年寄]{としよ}り",
      {
       t: "に中心に",
       flag: true,
       why: "Wrong. The pattern is を中心に: お[年寄]{としよ}りを中心に (mainly older people)."
      },
      "、電話でもお知らせします。この[件]{けん}",
      {
       t: "に[関]{かん}して",
       flag: false,
       why: "Correct: に[関]{かん}して before a clause (ご質問があれば…), the formal “about” of a notice."
      },
      "、ご質問があれば、[防災課]{ぼうさいか}までお[願]{ねが}いします。"
     ]
    },
    {
     id: "e3u10-l7-x7",
     type: "mcq",
     q: "Complete the sentence: 十一月（　）、[暖]{あたた}かいですね。 (It’s warm for November.)",
     options: [
      {
       t: "にしては",
       ok: true,
       why: "Right. Noun + にしては: November is the standard, and the warmth is more than you’d expect from it."
      },
      {
       t: "わりに",
       why: "A noun needs の before わりに: 十一月のわりに also works. Without の, the form is wrong."
      },
      {
       t: "かわりに",
       why: "かわりに is “instead of” or a trade-off: “instead of November” makes no sense."
      },
      {
       t: "ばかりか",
       why: "ばかりか is “not only… but even”, which needs a second, stronger point."
      }
     ]
    },
    {
     id: "e3u10-l7-x8",
     type: "sort",
     q: "Is each comment praise or a complaint?",
     buckets: [
      "Praise",
      "Complaint"
     ],
     items: [
      {
       t: "[初]{はじ}めてにしては、[上手]{じょうず}だね。",
       b: 0,
       why: "Better than you’d expect for a first try."
      },
      {
       t: "[値段]{ねだん}のわりに、おいしくない。",
       b: 1,
       why: "Not as good as the price promises."
      },
      {
       t: "年のわりに、[若]{わか}く見えますね。",
       b: 0,
       why: "Looks younger than you’d expect for that age."
      },
      {
       t: "高いわりに、[量]{りょう}が少ない。",
       b: 1,
       why: "Expensive, but the portion is smaller than you’d expect."
      },
      {
       t: "よく[練習]{れんしゅう}したわりに、うまくいかなかった。",
       b: 1,
       why: "A disappointing result for so much practice."
      },
      {
       t: "一年にしては、日本語がうまいですね。",
       b: 0,
       why: "Good Japanese for only one year: praise."
      }
     ]
    },
    {
     id: "e3u10-l7-x9",
     type: "type",
     q: "Type the missing word for “the moment that”: 「[席]{せき}を立った（　）、電話が[鳴]{な}った。」 (“The moment I stood up from my seat, the phone rang.”)",
     answer: [
      "とたん",
      "とたんに"
     ],
     wrongs: [
      {
       v: "ら",
       why: "立ったら (when I stood up) is natural too, but it doesn’t say “the very moment”. For that, use とたん(に)."
      },
      {
       v: "ばかり",
       why: "～たばかり says how recently something happened (Unit 9) and can’t join two events like this."
      },
      {
       v: "あいだに",
       why: "あいだに needs a stretch of time (～ている[間]{あいだ}に). Standing up is a single moment."
      }
     ],
     why: "た-form + とたん(に): the phone rang at the very moment you stood up, and you didn’t plan it."
    },
    {
     id: "e3u10-l7-x10",
     type: "type",
     q: "Type the missing words for a formal leaflet title: 「[防災]{ぼうさい}（　）[資料]{しりょう}」 (“Materials on disaster preparedness”)",
     answer: [
      "にかんする",
      "についての",
      "にかんしての"
     ],
     wrongs: [
      {
       v: "にかんして",
       why: "に[関]{かん}して goes before a verb phrase. Before a noun, use に[関]{かん}する."
      },
      {
       v: "について",
       why: "Before a noun, について needs の: についての. In a formal title, に[関]{かん}する is the usual choice."
      }
     ],
     why: "Noun + に[関]{かん}する + noun: [防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}. It is the formal way to say “about” before a noun (についての is the everyday one)."
    },
    {
     id: "e3u10-l7-x11",
     type: "type",
     q: "Type the missing word for “not only… but even”: 「大雨で、電車（　）、バスまで止まった。」",
     answer: [
      "ばかりか",
      "だけでなく",
      "だけではなく",
      "だけじゃなく",
      "だけじゃなくて"
     ],
     wrongs: [
      {
       v: "ばかり",
       why: "ばかり alone means “nothing but”. Add か: ばかりか, “not only… but even”."
      },
      {
       v: "ではなく",
       why: "ではなく is “not A but B”: it would say the buses stopped instead of the trains."
      }
     ],
     why: "A ばかりか B まで: not only the trains but even the buses. ～だけでなく (Lesson 1) also works; ばかりか is stronger and more written, and fits まで well."
    }
   ],
   apply: {
    intro: "Use the patterns about your own life. Keep the notes for yourself.",
    tasks: [
     {
      t: "Your own timeline",
      how: [
       "Write two ～て以来 sentences about something that has changed in your life since a turning point (… を始めて以来, … に[引]{ひ}っ[越]{こ}して以来).",
       "Write one ～たとたん sentence about something sudden that happened to you.",
       "Look at a weather forecast for where you live and write one sentence with ～から～にかけて."
      ],
      write: "以来 1… 2… とたん: … にかけて: …"
     },
     {
      t: "Errands, focus and topics",
      how: [
       "Write two ～ついでに sentences about errands this week (… に行くついでに, … のついでに).",
       "Write one ～を中心に sentence about what you study, or what your town is known for.",
       "Write the title of a notice or leaflet you might make, with ～に[関]{かん}する (… に[関]{かん}するお知らせ)."
      ],
      write: "ついでに 1… 2… 中心に: … に[関]{かん}する: …"
     },
     {
      t: "For…, considering…, and even",
      how: [
       "Write two ～わりに sentences: one about a shop or a meal, one about a person.",
       "Write one ～にしては sentence of praise for someone (… にしては、[上手]{じょうず}だ).",
       "Write one ～ばかりか sentence about a day when everything went wrong (… ばかりか、… まで…)."
      ],
      write: "わりに 1… 2… にしては: … ばかりか: …"
     },
     {
      t: "Review the whole unit",
      how: [
       "Open {{n3-grammar-patterns-2}} and cover the example column. Say or write your own example for each pattern from Lessons 6 and 7.",
       "Mark any pattern you hesitate over, and review it again in three days. Forgetting and relearning is how it sticks."
      ]
     }
    ],
    proof: "Two ～て以来, one ～とたん and one ～にかけて sentence, two ～ついでに, one ～を中心に and one ～に[関]{かん}する phrase, two ～わりに, one ～にしては and one ～ばかりか sentence, and your own examples for the unit’s patterns, all your own."
   },
   read: [
    {
     book: "taekim",
     where: "Special Expressions, “Time-specific actions”, section “Express what occurred immediately after with 「とたん」”"
    },
    {
     book: "imabi",
     where: "第223課 “About: ～について, ～に関して, & ～をめぐって” and 第334課 “Considering…: わりに（は） & にしては”",
     note: "Detailed and advanced: read the sections on the pattern you want and skip the rest."
    },
    {
     book: "imabi",
     where: "第262課 “After II” (～て以来), 第272課 “Span” (～にかけて), 第343課 (～を中心に（して）) and 第361課 “Incidental” (～ついでに)",
     note: "For reference when you want more examples of one pattern."
    }
   ]
  }
 ],
 checkpoint: [
  "e3u10-q04",
  "e3u10-q05",
  "e3u10-q10",
  "e3u10-q13",
  "e3u10-q15",
  "e3u10-q20",
  "e3u10-q23",
  "e3u10-q26",
  "e3u10-q33",
  "e3u10-q36",
  "e3u10-q43",
  "e3u10-q48"
 ],
  cpBank:[
    {id:"e3u10-cp01", lesson:"e3u10-l1", level:1, q:"Complete: 「明日、天気が＿＿、ピクニックに行きます。」 (Even if the weather isn’t good tomorrow, we’ll go on the picnic.)", options:[
      {t:"いくなくても", why:"いい changes on よ in its other forms: よくない, so the ても-form is よくなくても."},
      {t:"よくないでも", why:"Negatives make their ても-form from ～なくても. ないでも is not the pattern."},
      {t:"よくなくても", ok:true, why:"いい → よくない (not good) → よくなくても (even if it isn’t good). The plan stays the same."},
      {t:"よくなくて", why:"The て-form alone joins or gives a reason: “The weather isn’t good, so…”. “Even if” needs も."}]},
    {id:"e3u10-cp02", lesson:"e3u10-l1", level:2, q:"After work, Dewi says to Rodrigo 「お[茶]{ちゃ}でも飲みませんか。」 What is she doing?", options:[
      {t:"Asking whether he drinks tea at all", why:"That would be お茶を飲みますか. ～ませんか is an invitation."},
      {t:"Saying that even tea is not allowed", why:"でも here isn’t “even”. In an invitation ending in ませんか, noun + でも means “or something”."},
      {t:"Inviting him for a tea or something", ok:true, why:"In a suggestion ending in ませんか, noun + でも means “or something”: “How about a tea or something?”"},
      {t:"Telling him to drink tea even if he dislikes it", why:"For “even if it’s…” you would expect a result that stays the same. A ませんか ending makes it an invitation."}]},
    {id:"e3u10-cp03", lesson:"e3u10-l1", level:3, q:"Nobody knows who wrote a strange rule on the board. How does Cheska say “Even if a teacher wrote it, it’s wrong”?", options:[
      {t:"「たとえ先生が書いたても、おかしいと思う。」", why:"ても follows the て-form, never the past: 書いても. Only としても can follow 書いた."},
      {t:"「たとえ先生が書いたとしても、おかしいと思う。」", ok:true, why:"Past + としても is “even supposing…”. Nobody knows who wrote it, so a teacher writing it is only a supposition."},
      {t:"「先生としても、それはおかしいと思う。」", why:"Noun + として + も is “as a teacher, too”: Cheska would be speaking as a teacher. “Even supposing” needs a clause: 先生が書いたとしても."},
      {t:"「先生が書いたのに、おかしいと思う。」", why:"のに reports a real fact: a teacher really did write it. Here nobody knows who did."}]},
    {id:"e3u10-cp04", lesson:"e3u10-l2", level:1, q:"A sign on a door at the city office says 「[会議]{かいぎ}中」. What does it tell you?", options:[
      {t:"The meeting room is free to use", why:"Noun + 中 says what is going on now. [会議]{かいぎ}中 means the room is in use."},
      {t:"A meeting is going on in there now", ok:true, why:"Noun + 中 is a short label for what is happening now: in a meeting, like [準備]{じゅんび}中 and 通話中."},
      {t:"The meeting has just finished", why:"“Just finished” would be [会議]{かいぎ}が終わったところ. 中 means it is still going on."},
      {t:"The meeting will start soon", why:"“About to start” would be [会議]{かいぎ}が始まるところ. 中 means it has already started."}]},
    {id:"e3u10-cp05", lesson:"e3u10-l2", level:2, q:"Which sentence is natural?", options:[
      {t:"「[昨日]{きのう}[駅]{えき}で会ったたびに、少し話しました。」", why:"たびに is for repeated occasions, after the dictionary form. For one meeting yesterday, use とき: 会ったとき."},
      {t:"「この歌を聞いたたびに、海を思い出します。」", why:"たびに follows the dictionary form (or noun + の): 聞くたびに."},
      {t:"「この歌を聞くたびに、[島]{しま}の海を思い出します。」", ok:true, why:"Dictionary form + たびに: every time she hears the song, the same thing happens."},
      {t:"「この歌を聞くたびに、一度だけ海を思い出しました。」", why:"たびに means the same thing happens every time, so “only once” contradicts it."}]},
    {id:"e3u10-cp06", lesson:"e3u10-l3", level:2, q:"Kaito wants to say “Compared with cooking at home, eating out costs money.” Which is correct?", options:[
      {t:"「家で料理するに[比]{くら}べて、外で食べるのはお金がかかります。」", why:"A verb needs の before に[比]{くら}べて: 料理するのに[比]{くら}べて."},
      {t:"「家で料理するのを[比]{くら}べて、外で食べるのはお金がかかります。」", why:"The pattern is に[比]{くら}べて (or と[比]{くら}べて), not を[比]{くら}べて."},
      {t:"「家で料理するより[比]{くら}べて、外で食べるのはお金がかかります。」", why:"より and に[比]{くら}べて are two ways to compare. Use one of them: 料理するより, or 料理するのに[比]{くら}べて."},
      {t:"「家で料理するのに[比]{くら}べて、外で食べるのはお金がかかります。」", ok:true, why:"Verb + の + に[比]{くら}べて sets up the comparison: “compared with cooking at home”."}]},
    {id:"e3u10-cp07", lesson:"e3u10-l5", level:1, q:"Kaito’s new T-shirt has cartoon bears on it. Toby teases him that it looks like a child’s. Which word fits? 「そのTシャツ、ちょっと＿＿ね。」", options:[
      {t:"子どもっぽい", ok:true, why:"Noun + っぽい is “seems like (but isn’t)”: 子どもっぽい criticizes something of an adult’s for looking childish."},
      {t:"子どもらしい", why:"らしい here means “just as a child should be”. It praises a real child, and Kaito is 19."},
      {t:"子どもがち", why:"がち follows a verb stem or a few nouns for unwelcome habits, as in 病気がち. It doesn’t say what something looks like."},
      {t:"子ども気味", why:"気味 is “a touch of” a state you feel now, as in [風邪]{かぜ}気味. It doesn’t describe how something looks."}]},
    {id:"e3u10-cp08", lesson:"e3u10-l4", level:2, q:"Sōta keeps interrupting. Fumiko tells him 「人の話は、[最]{さい}後まで聞くものよ。」 What is she doing?", options:[
      {t:"Remembering what she used to do as a child", why:"That would be the past ～たものだ: 聞いたものだ, “I used to listen”."},
      {t:"Telling him there is no need to listen", why:"“No need to” is ～ことはない. ～ものだ here says what people should do."},
      {t:"Telling him what people should do", ok:true, why:"Dictionary form + ものだ can state what people are expected to do: “You should listen to the end.”"},
      {t:"Asking him what the person said again", why:"Checking something you forgot is ～っけ. ～ものよ is advice."}]},
    {id:"e3u10-cp09", lesson:"e3u10-l4", level:3, q:"Aoi says 「[松本]{まつもと}さんは、[約束]{やくそく}を[忘]{わす}れることはありません。」 What does she mean?", options:[
      {t:"Mr Matsumoto never forgets an appointment", ok:true, why:"When no advice is being given, ～ことはない simply means “it never happens”."},
      {t:"There’s no need to worry if Mr Matsumoto forgets", why:"Advice would be about the listener: [心配]{しんぱい}することはありません. This sentence describes Mr Matsumoto."},
      {t:"It isn’t that Mr Matsumoto always remembers", why:"That would be partial negation: いつも[覚]{おぼ}えているわけではない."},
      {t:"Mr Matsumoto sometimes forgets appointments", why:"“It sometimes happens” is ～ことがあります, with が. ～ことはありません rules it out."}]},
    {id:"e3u10-cp10", lesson:"e3u10-l5", level:3, q:"At the city office, Ms Kimura greets a visitor who has come to see her colleague, Mr Matsumoto. How does she say he will come right away?", options:[
      {t:"「[松本]{まつもと}さんはすぐにいらっしゃいます。」", why:"To an outsider, your colleague is on your side: no さん and no respectful verb."},
      {t:"「[松本]{まつもと}さんはすぐに[参]{まい}ります。」", why:"[参]{まい}ります is right, but drop さん for your own side when you speak to outsiders."},
      {t:"「[松本]{まつもと}はすぐにいらっしゃいます。」", why:"いらっしゃる raises the person. For someone on your side, use humble [参]{まい}る."},
      {t:"「[松本]{まつもと}はすぐに[参]{まい}ります。」", ok:true, why:"ウチ・ソト: to a visitor, your colleague is on your side, so no さん and the humble [参]{まい}ります."}]},
    {id:"e3u10-cp11", lesson:"e3u10-l5", level:2, q:"Mr Matsumoto asks Aoi 「[平]{ひら}川さんは、この地図のことをご[存]{ぞん}じですか。」 What is he asking?", options:[
      {t:"Whether she has the map with her", why:"“Do you have” is お持ちですか. ご[存]{ぞん}じ is about knowing."},
      {t:"Whether she knows about this map", ok:true, why:"ご[存]{ぞん}じだ is the respectful form of 知っている: “Do you know about this map?”"},
      {t:"Whether she made this map herself", why:"Nothing in the sentence is about making. ご[存]{ぞん}じ means “know”."},
      {t:"Whether she will look at this map", why:"Respectful “look” is ご[覧]{らん}になる. ご[存]{ぞん}じ means “know”."}]},
    {id:"e3u10-cp12", lesson:"e3u10-l2", level:3, q:"While Sōta was asleep, Megumi quietly wrapped his birthday present. Which word fits? 「そうたが[寝]{ね}ている（　）、プレゼントを[包]{つつ}んだ。」", options:[
      {t:"間", why:"Without に, the main action fills the whole period: she would have been wrapping all the time he slept."},
      {t:"間に", ok:true, why:"～間に places one event somewhere inside a period, and the two actions can belong to different people."},
      {t:"ながら", why:"～ながら is for one person doing two things at once. Here Sōta sleeps and Megumi wraps."},
      {t:"たびに", why:"～たびに means “every time”, for repeated occasions. This happened once."}]}
  ],
 codex: [
  {
   id: "concession-temo",
   title: "Even if and even: ～ても, ～としても, ～さえ and ～だけでなく",
   aka: [
    "～ても",
    "～でも",
    "even if",
    "even though",
    "no matter how",
    "いくら～ても",
    "どんなに～ても",
    "たとえ～ても",
    "～としても",
    "even supposing",
    "～さえ",
    "～さえ～ば",
    "as long as",
    "～だけでなく",
    "～だけじゃなくて",
    "not only but also",
    "concession"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "conjunctions"
   ],
   summary: "How to say “even if”, “even though” and “no matter how” with ～ても, “even supposing” with ～としても, “even” and “as long as” with ～さえ, and “not only… but also” with ～だけでなく, with the contrast with ～たら and ～のに.",
   levels: {
    starter: [
     "**～ても** means “even if” or “even though”: the first part doesn’t change the second. Make the て-form and add も: 雨が[降]{ふ}っても行きます (Even if it rains, I’ll go). い-adjectives take くても (高くても), and nouns and な-adjectives take でも (雨でも, [静]{しず}かでも).",
     "With a question word, it means “no matter…”: いくら[寝]{ね}ても[眠]{ねむ}い (however much I sleep, I’m sleepy), 何を着ても[似合]{にあ}う (whatever you wear suits you).",
     "**～としても** is “even supposing”: [宝]{たから}くじが[当]{あ}たったとしても、仕事は[辞]{や}めない (Even if I won the lottery, I wouldn’t quit).",
     "**～さえ** means “even”: 水を飲む時間さえなかった (I didn’t even have time to drink water). With ば, it means “as long as”: 時間さえあれば (if only I have time).",
     "**～だけでなく～も** means “not only… but also”: 英語だけでなく中国語も話せる."
    ],
    builder: [
     {
      table: [
       [
        "Word",
        "～ても",
        "～なくても"
       ],
       [
        "verb",
        "書いても・食べても・しても・[来]{き}ても",
        "書かなくても・食べなくても"
       ],
       [
        "い-adjective",
        "高くても・よくても",
        "高くなくても"
       ],
       [
        "な-adjective / noun",
        "[静]{しず}かでも・雨でも",
        "[静]{しず}かじゃなくても・雨でなくても"
       ]
      ]
     },
     "**Hypothetical or factual.** ～ても covers both: [明日]{あした}雨が[降]{ふ}っても (if it rains tomorrow) and [薬]{くすり}を飲んでも[治]{なお}らなかった (even though I took medicine, I didn’t get better). The end of the sentence tells you which.",
     "**～ても, ～たら, ～のに.** ～たら: if A, then B. ～ても: even if A, B anyway. ～のに: A is a fact and B goes against it, with surprise or complaint. ～のに can’t take a supposition or be followed by a request or plan; ～ても can. With past facts, both ～のに and ～ても are possible; のに adds feeling.",
     "**～としても** follows any plain form, including the past (急いだとしても), with だ after nouns and な-adjectives ([冗談]{じょうだん}だとしても). It makes the supposition explicit, often an unlikely one. たとえ can introduce both ～ても and ～としても.",
     "**～さえ** replaces が and を (水さえ), follows other particles (にさえ, とさえ), and often appears as でさえ after a person (先生でさえ). **～さえ～ば** marks the single condition you need: noun + さえ + ば-form ([住所]{じゅうしょ}さえわかれば), verb stem + さえすれば (飲みさえすれば), する-noun + さえすれば ([練習]{れんしゅう}さえすれば).",
     "**～だけでなく** follows nouns, plain verbs, い-adjectives and な-adjective + な ([静]{しず}かなだけでなく). Casual: だけじゃなくて. Formal: だけではなく, ばかりでなく. Don’t confuse it with ～ではなく (not A but B)."
    ],
    pro: [
     "**ても and でも.** The でも after nouns is the same ending (で + も). It is distinct from the でも that softens suggestions (お茶でもどうですか, tea or something) and from sentence-initial でも (but). Context separates them easily.",
     "**Concessive question words.** いくら, どんなに, 何, だれ, どこ, いつ with ～ても are common in speech and writing. In formal writing you will also meet ～ようとも and ～にしても (usually taught after N3), which you can read as relatives of ～としても.",
     "**としても and として.** A bare noun + としても is として (“as”, Unit 9) + も: 親としても[心配]{しんぱい}だ (as a parent too, I’m worried). The concessive needs だ: 親だとしても. Look for だ, た or a dictionary form before と.",
     "**さえ and すら.** Written Japanese also uses ～すら and ～ですら, an older equivalent of さえ. ～さえ also has a less common “on top of that” use in narrative: 雨が[降]{ふ}り出し、風さえ[吹]{ふ}いてきた (it began to rain, and the wind even started to blow). Learners mostly need “even” and “as long as”.",
     "**さえ～ば and ～ば～ほど.** Both use ば, but they say different things: [練習]{れんしゅう}さえすれば[上手]{じょうず}になる (practice is all it takes) against [練習]{れんしゅう}すればするほど[上手]{じょうず}になる (the more you practice, the better you get; see [[ba-hodo]]).",
     "**Tests and textbooks.** Questions on these patterns usually hinge on form (でも after nouns, な before だけでなく, すれば after さえ) or on のに against ても with a future or a request. When a sentence could take more than one, a careful question gives a context that leaves only one."
    ]
   },
   related: [
    "n3-grammar-patterns-2",
    "conditionals-to-ba-tara-nara",
    "te-form",
    "n4-grammar-patterns",
    "compound-particles",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "IRODORI Elementary 2 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: The minimum expectation (さえ)",
     url: "https://guidetojapanese.org/learn/grammar/even"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Hypothesizing and Concluding (とする, としても)",
     url: "https://guidetojapanese.org/learn/grammar/reasoning"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "time-clauses-uchi-ni",
   title: "Time clauses: ～うちに, ～あいだ・～あいだに, ～たびに and ～さいちゅうに",
   aka: [
    "～うちに",
    "while",
    "before it changes",
    "～ないうちに",
    "～間",
    "～間に",
    "あいだ",
    "あいだに",
    "during",
    "～たびに",
    "every time",
    "～最中に",
    "さいちゅう",
    "in the middle of",
    "time clauses"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "time"
   ],
   summary: "Four N3 patterns that place an event in time: ～うちに (while it lasts, or a change that crept up), ～[間]{あいだ} and ～[間]{あいだ}に (all through, or once inside a period), ～たびに (every time) and ～[最中]{さいちゅう}に (right in the middle of).",
   levels: {
    starter: [
     "**～うちに** means “while (it lasts)”: do something before a situation ends. [温]{あたた}かいうちに食べてください (Eat it while it’s warm). With a negative, “before”: [忘]{わす}れないうちにメモする (make a note before I forget).",
     "**～[間]{あいだ}** means “all through a period”: 夏休みの[間]{あいだ}、ずっと[働]{はたら}いていた (I worked all through the summer vacation). **～[間]{あいだ}に** means “at some point during it”: 夏休みの[間]{あいだ}に[免許]{めんきょ}を[取]{と}った (I got my license during the summer vacation).",
     "**～たびに** means “every time”: この歌を聞くたびに[泣]{な}いてしまう (Every time I hear this song, I cry).",
     "**～[最中]{さいちゅう}に** means “right in the middle of”, usually when something interrupts: [会議]{かいぎ}の[最中]{さいちゅう}に電話が[鳴]{な}った (The phone rang right in the middle of the meeting).",
     "A quick test: does the main action fill the period (～[間]{あいだ}), happen once in it (～[間]{あいだ}に), beat a change (～うちに), repeat (～たびに) or interrupt (～[最中]{さいちゅう}に)?"
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Verbs",
        "Adjectives",
        "Nouns"
       ],
       [
        "～うちに",
        "行く・行っている・行かない + うちに",
        "[若]{わか}いうちに・元気なうちに",
        "学生のうちに"
       ],
       [
        "～[間]{あいだ}(に)",
        "～ている + [間]{あいだ}(に)",
        "(rare)",
        "夏休みの[間]{あいだ}(に)"
       ],
       [
        "～たびに",
        "会うたびに",
        "—",
        "旅行のたびに"
       ],
       [
        "～[最中]{さいちゅう}に",
        "～ている + [最中]{さいちゅう}に",
        "—",
        "食事の[最中]{さいちゅう}に"
       ]
      ]
     },
     "**Two uses of ～うちに.** (1) Act while a state lasts: [若]{わか}いうちに, 日本にいるうちに, ～ないうちに. (2) A change happens while something goes on, often unnoticed: 聞いているうちに[覚]{おぼ}えた, 読んでいるうちに[眠]{ねむ}ってしまった. In use (2), the second half reports a change, not a decision.",
     "**～うちに and ～前に.** [暗]{くら}くならないうちに and [暗]{くら}くなる前に overlap; うちに stresses the time that is left. For a fixed order of events, use ～前に: [寝]{ね}る前に[歯]{は}を[磨]{みが}く.",
     "**～[間]{あいだ} and ～[間]{あいだ}に.** ～[間]{あいだ} goes with a lasting action (～ていた, ずっと); ～[間]{あいだ}に with a single event (～た). The two halves can have different subjects, unlike ～ながら.",
     "**～たびに** is for repeated occasions, not a one-off (use ～とき), and is close to ～と for things that always happen.",
     "**～[最中]{さいちゅう}** is for an activity with a peak (a meeting, a meal, a match), not a long state such as living somewhere. It also ends sentences: 今、食事の[最中]{さいちゅう}です."
    ],
    pro: [
     "**Readings.** [間]{あいだ} is read あいだ in these patterns; the same kanji is ま in [間]{ま}に[合]{あ}う and かん in [時間]{じかん} and [一週間]{いっしゅうかん}. [最中]{さいちゅう} is also read さなか in literary style (夏の[最中]{さなか}), and もなか is a wafer sweet.",
     "**～うちに with a negative.** ～ないうちに can’t be replaced by a positive ～うちに with the opposite meaning: ✗ [暗]{くら}くなるうちに is wrong for “before it gets dark”. The negative literally means “while it hasn’t yet…”. Note also ～うちに use (2) can take a dictionary form with repeated actions: 何度も会ううちに[仲良]{なかよ}くなった (we became friends as we kept meeting).",
     "**～[間]{あいだ}に and ～うちに.** With a sleeping child, both are natural: [寝]{ね}ている[間]{あいだ}に just places the action; [寝]{ね}ているうちに adds “before they wake”. With fixed periods such as [授業]{じゅぎょう} or 夏休み, ～[間]{あいだ}に is the normal choice. Notices and formal writing also use noun + 中に and ～[期間中]{きかんちゅう} (during the period): [休業期間中]{きゅうぎょうきかんちゅう}.",
     "**～[最中]{さいちゅう} and ～ているところ.** Both describe an action in progress. ～[最中]{さいちゅう} stresses being in the thick of it and is typical when something interrupts; ～ているところ (Unit 9) is neutral. Signs and messages use the shorter noun + 中: [会議中]{かいぎちゅう}, 工事中, [準備中]{じゅんびちゅう}.",
     "**～たびに and ～ごとに.** ～ごとに means “every”, as in 一時間ごとに (every hour), and is about regular intervals, while ～たびに is about each occurrence of an event."
    ]
   },
   related: [
    "n3-grammar-patterns-2",
    "tokoro-and-bakari",
    "n4-grammar-patterns",
    "conditionals-to-ba-tara-nara",
    "time-and-dates"
   ],
   sources: [
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "degree-hodo-kurai",
   title: "Degree and comparison: ～ほど, ～くらい and ～にくらべて",
   aka: [
    "～ほど",
    "～くらい",
    "～ぐらい",
    "not as … as",
    "as … as",
    "～ほど～ない",
    "so … that",
    "at least",
    "～に比べて",
    "～と比べて",
    "compared with",
    "degree"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "comparison"
   ],
   summary: "Comparisons and degree: A は B ほど～ない (not as … as), A は B くらい～ (as … as), ～に[比]{くら}べて (compared with), ほど and くらい for “so … that” and “about”, and くらい for “at least”.",
   levels: {
    starter: [
     "**Not as … as.** A は B ほど～ない: [今年]{ことし}の夏は去年ほど[暑]{あつ}くない (This summer isn’t as hot as last year’s). B is the standard, and the sentence is negative.",
     "**As … as.** A は B くらい～ (or ぐらい): 弟は父くらい[背]{せ}が高い (My brother is as tall as my father). ほど doesn’t work in this positive sentence.",
     "**Compared with.** ～に[比]{くら}べて: 去年に[比]{くら}べて、[雪]{ゆき}が多い (Compared with last year, there is more snow). It often opens a sentence in news and reports.",
     "**So … that.** Both work: [泣]{な}きたいほど[痛]{いた}い・[泣]{な}きたいくらい[痛]{いた}い (it hurts so much I want to cry).",
     "**At least.** Only くらい: あいさつくらいしなさい (At least say hello)."
    ],
    builder: [
     {
      table: [
       [
        "Job",
        "ほど",
        "くらい・ぐらい"
       ],
       [
        "not as … as (negative)",
        "✓ usual",
        "rare: use ほど"
       ],
       [
        "as … as",
        "✗",
        "✓"
       ],
       [
        "nothing is as … as (～ほど～ものはない)",
        "✓",
        "✓"
       ],
       [
        "so … that",
        "✓ a little stronger",
        "✓ more casual"
       ],
       [
        "about (amount)",
        "✓ polite: [十分]{じゅっぷん}ほど",
        "✓ [十分]{じゅっぷん}くらい"
       ],
       [
        "at least, just",
        "✗",
        "✓"
       ]
      ]
     },
     "**～に[比]{くら}べて and ～より.** Both compare. ～より is the everyday “than” and can sit right before the adjective; ～に[比]{くら}べて frames the comparison and is a little more formal, common with words of change ([増]{ふ}えた, [減]{へ}った). ～と[比]{くら}べて means the same; verbs take の first (行くのに[比]{くら}べて).",
     "**Nothing is as … as.** B ほど (くらい) ～ものはない / ～人はいない: 家族ほど大切なものはない.",
     "**くらい for the minimum** marks something small or easy: 自分の[部屋]{へや}くらい自分で[掃除]{そうじ}しなさい; 少しくらい[遅]{おく}れても[大丈夫]{だいじょうぶ}. It can sound dismissive, so it fits advice and complaints.",
     "**くらい or ぐらい?** Both are correct and mean the same in these uses."
    ],
    pro: [
     "**Positive ほど.** ほど can appear in positive sentences, but only for degree (～ほど[疲]{つか}れた) or amount (三十人ほど), not for “as … as”. ✗ 姉は母ほど[背]{せ}が高い is not natural Japanese.",
     "**ほど in fixed phrases.** それほど～ない (not that…), 思ったほど～ない (not as … as I thought) and ～ほどではない (not to the point of) are very common. [驚]{おどろ}くほど (surprisingly) and 死ぬほど (casual: incredibly) are set intensifiers.",
     "**～ば～ほど** (the more…, the more…) is a separate pattern, taught in Unit 9 ([[ba-hodo]]). Don’t read 安ければ安いほど as a comparison with a standard.",
     "**～に[比]{くら}べて in writing.** Reports and news prefer ～に[比]{くら}べて, ～と[比]{くら}べると and the more formal ～に[比]{ひ}して (often listed at N1). In academic Japanese, a phrase like 前年に[比]{くら}べて[増加]{ぞうか}した is typical; see {{written-vs-spoken-japanese}}.",
     "**くらい after こ・そ・あ・ど.** これくらい, それぐらい and どのくらい (how much, how long) are very common in speech. どのくらいかかりますか (How long does it take?) is the everyday question about time and distance.",
     "**～かわりに.** A related pattern, ～かわりに (instead of; in exchange for; but to make up for it), is summarized in {{n3-grammar-patterns-2}}."
    ]
   },
   related: [
    "n3-grammar-patterns-2",
    "n5-grammar-patterns",
    "n3-grammar-patterns-1",
    "counters"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Expressing Amounts (ほど)",
     url: "https://guidetojapanese.org/learn/grammar/amount"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Using 方 and よる (comparisons with より)",
     url: "https://guidetojapanese.org/learn/grammar/comparison"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "partial-negation",
   title: "Partial negation: ～わけではない and ～ことはない",
   aka: [
    "～わけではない",
    "～わけじゃない",
    "～というわけではない",
    "it's not that",
    "not necessarily",
    "必ずしも",
    "partial negation",
    "部分否定",
    "～ことはない",
    "no need to",
    "～ないことはない",
    "～わけがない",
    "～わけにはいかない"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "negation"
   ],
   summary: "～わけではない for “it’s not that…” and “not all, not always”, ～ことはない for “there’s no need to”, and the look-alikes ～たことはない, ～ないことはない, ～わけがない and ～わけにはいかない.",
   levels: {
    starter: [
     "**～わけではない** means “it’s not that…”. It denies a conclusion someone might draw, without saying the opposite: [嫌]{きら}いなわけではないんですが… (It’s not that I dislike it, but…). It is a gentle way to refuse or disagree. Casual: わけじゃない.",
     "With [全部]{ぜんぶ} (all), いつも (always) or [必]{かなら}ずしも (necessarily), it denies **part** of an idea: [全部]{ぜんぶ}わかったわけではない (I didn’t understand all of it: I understood some).",
     "**～ことはない** means “there’s no need to”: [心配]{しんぱい}することはないよ (There’s no need to worry). It reassures, and is more emphatic than ～なくてもいい.",
     "Watch the verb form: 行くことはない (no need to go), 行ったことはない (have never been), 行けないことはない (I could go, if I had to)."
    ],
    builder: [
     {
      table: [
       [
        "Before わけではない",
        "Example"
       ],
       [
        "verb (plain)",
        "行くわけではない・行ったわけではない"
       ],
       [
        "い-adjective",
        "高いわけではない"
       ],
       [
        "な-adjective + な",
        "[嫌]{きら}いなわけではない"
       ],
       [
        "noun / any plain form + という",
        "[専門家]{せんもんか}というわけではない・高いからいいというわけではない"
       ]
      ]
     },
     "**Two jobs.** ～わけではない can deny an **inference** (お金があれば[幸]{しあわ}せになれるわけではない: money doesn’t automatically bring happiness) or give a **partial denial** ([全部]{ぜんぶ}～わけではない, いつも～わけではない). Words such as 特に, 別に, [必]{かなら}ずしも and だからといって often come with it.",
     "**Related わけ patterns.** ～わけだ: so that’s why (Unit 9). ～わけがない: there’s no way that… ([彼]{かれ}が[嘘]{うそ}をつくわけがない). ～わけにはいかない: I can’t, for social or moral reasons ([約束]{やくそく}したから休むわけにはいかない).",
     "**～ことはない** follows the dictionary form: わざわざ[来]{く}ることはない, [謝]{あやま}ることはない. Polite: ことはありません. It gives advice or comfort to the listener, often with わざわざ or そんなに.",
     "**～ないことはない** is a weak yes: 食べられないことはない (I can eat it, though I’m not keen). **～たことはない** is the experience pattern with は: 食べたことはない (I’ve never eaten it)."
    ],
    pro: [
     "**Scope of negation.** [全部]{ぜんぶ}わからなかった is ambiguous in speech between “I understood none of it” and “I didn’t understand all of it”, depending on stress; [全部]{ぜんぶ}わかったわけではない is unambiguous partial negation, and [全然]{ぜんぜん}わからなかった is unambiguous total negation. This is one reason ～わけではない is so common in careful speech and writing.",
     "**Softening.** Because it denies a conclusion rather than a fact, ～わけではない lets speakers disagree or decline without contradicting anyone directly. With a trailing が or けど (～わけではないんですが…), it often introduces a reason or a gentle refusal.",
     "**というわけではない.** というわけではない can follow nouns and whole clauses, and it adds a little distance. Noun + なわけではない is also heard in speech.",
     "**ことはない: the other reading.** When the sentence describes someone else and gives no advice, ～ことはない can simply mean “it never happens”: [彼]{かれ}が[遅]{おく}れることはない (he is never late). Advice to the listener is the usual reading in conversation.",
     "**In writing.** Reports prefer ～わけではない and ～とは[限]{かぎ}らない (is not necessarily) for careful claims; see {{hedging-japanese}} in the Academic Japanese track. ～ことはない is mostly conversational."
    ]
   },
   related: [
    "hazu-wake-beki",
    "n3-grammar-patterns-2",
    "must-and-dont-have-to",
    "hedging-japanese",
    "n3-grammar-patterns-1"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Hypothesizing and Concluding (～わけがない, ～わけにはいかない)",
     url: "https://guidetojapanese.org/learn/grammar/reasoning"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "feelings-and-tendencies",
   title: "Tendencies and signs: ～っぽい, ～がち and ～ぎみ",
   aka: [
    "～っぽい",
    "-ish",
    "忘れっぽい",
    "子どもっぽい",
    "～がち",
    "prone to",
    "tends to",
    "忘れがち",
    "～気味",
    "ぎみ",
    "a touch of",
    "風邪気味",
    "疲れ気味",
    "suffixes"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "suffixes",
    "vocabulary"
   ],
   summary: "Three suffixes for tendencies and signs: ～っぽい (-ish, like, easily; mostly casual), ～がち (tends to happen, usually unwelcome) and ～[気味]{ぎみ} (a touch of, now), with how they conjugate and where they overlap.",
   levels: {
    starter: [
     "**～っぽい** means “-ish” or “like”: 白っぽい (whitish), 子どもっぽい (childish), [大人]{おとな}っぽい (grown-up). After a verb stem, it means “does it easily”: [忘]{わす}れっぽい (forgetful), [怒]{おこ}りっぽい (quick to anger). It is mostly casual and works like an い-adjective.",
     "**～がち** means “tends to”, usually about something unwelcome: [忘]{わす}れがち (tend to forget), [遅]{おく}れがち (often late), [曇]{くも}りがち (often cloudy), 病気がち (often ill). It works like a な-adjective: [忘]{わす}れがちなこと.",
     "**～[気味]{ぎみ}** means “a touch of”, a slight sign of something now: [風邪]{かぜ}[気味]{ぎみ} (a bit of a cold), [疲]{つか}れ[気味]{ぎみ} (a bit tired), [太]{ふと}り[気味]{ぎみ} (putting on a little weight). Note the reading ぎみ.",
     "In short: っぽい is what something is like, がち is how often it happens, and [気味]{ぎみ} is a little, right now."
    ],
    builder: [
     {
      table: [
       [
        "",
        "～っぽい",
        "～がち",
        "～[気味]{ぎみ}"
       ],
       [
        "Attaches to",
        "nouns, verb stems, a few adjective stems (安っぽい)",
        "verb stems, a few nouns",
        "nouns, verb stems"
       ],
       [
        "Works like",
        "い-adjective",
        "な-adjective",
        "noun (～[気味]{ぎみ}だ, ～[気味]{ぎみ}の)"
       ],
       [
        "Style",
        "mostly casual",
        "neutral, also written",
        "neutral, also written"
       ],
       [
        "Feeling",
        "often critical",
        "usually unwelcome",
        "usually unwelcome"
       ]
      ]
     },
     "**Objects.** ～がち keeps the verb’s object ([傘]{かさ}を[忘]{わす}れがちだ); ～っぽい makes an adjective about the person and can’t ([忘]{わす}れっぽい人).",
     "**Good habits.** がち usually sounds wrong for good habits; use よく or ～ことが多い: [週末]{しゅうまつ}は[公園]{こうえん}に行くことが多い.",
     "**Overlap.** [風邪]{かぜ}っぽい and [風邪]{かぜ}[気味]{ぎみ} both mean you feel a cold coming on; っぽい is for friends, [気味]{ぎみ} for work. Learn the common combinations as words rather than building new ones freely.",
     "**っぽい and らしい.** 子どもっぽい criticizes an adult as childish; 子どもらしい praises a child for being just as a child should be ([[rashii]])."
    ],
    pro: [
     "**Very casual っぽい.** Among younger speakers, っぽい also follows whole plain clauses as a casual “seems”: 雨、[降]{ふ}るっぽい. This is informal and is avoided in polite speech and writing; ようだ, みたい or らしい ({{appearance-sou-you-rashii}}) cover the same ground in standard Japanese.",
     "**Readings and meanings.** [怒]{おこ}りっぽい is read おこりっぽい. 水っぽい means watery; [熱]{ねつ}っぽい can mean feverish or, of a person or speech, passionate. 安っぽい (cheap-looking) is critical, unlike 安い.",
     "**～がち with nouns.** Only a few nouns take がち: 病気がち, [曇]{くも}りがち, [留守]{るす}がち (often away from home), [遠慮]{えんりょ}がち (hesitant). [遠慮]{えんりょ}がちに話す shows that がち can also form an adverb with に.",
     "**[気味]{ぎみ} as a separate word.** [気味]{きみ} alone means feeling or sensation, as in [気味]{きみ}が悪い (creepy) and いい[気味]{きみ}だ (serves them right). As a suffix it is always ぎみ, with the sound change (rendaku).",
     "**In writing and news.** ～[気味]{ぎみ} and ～がち appear in reports and news: 円高[気味]{ぎみ} (the yen running a little high), 不足しがち. ～っぽい is rare there outside quoted speech, except in set words such as 白っぽい (白っぽい服を着た男, a man in whitish clothes)."
    ]
   },
   related: [
    "appearance-sou-you-rashii",
    "n3-grammar-patterns-2",
    "casual-conversation",
    "n4-grammar-patterns"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Tendencies (～がち)",
     url: "https://guidetojapanese.org/learn/grammar/tendency"
    },
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "keigo-in-practice",
   title: "Keigo in practice: shops, phone calls, visitors and requests",
   aka: [
    "keigo in real life",
    "business Japanese",
    "phone Japanese",
    "shop Japanese",
    "お～です",
    "お～いただく",
    "～ていただけますか",
    "いただけませんか",
    "お見えになる",
    "お越しになる",
    "お目にかかる",
    "差し上げる",
    "拝借する",
    "でございます",
    "かしこまりました",
    "お世話になっております",
    "バイト敬語",
    "manual keigo"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "politeness",
    "keigo"
   ],
   summary: "Keigo at N3 in the situations where you meet it: more special verbs, お～です, set phrases in shops and restaurants, a model business phone call, visitors and station announcements, a ladder of requests, and the slips to avoid.",
   levels: {
    starter: [
     "Keigo is not only for formal speeches. You hear it every day in shops (いらっしゃいませ, 少々お待ちください), on the phone (はい、〇〇でございます), at work and in announcements (まもなく電車が[参]{まい}ります).",
     "The rule from Unit 7 still holds: **respectful** forms ([尊敬語]{そんけいご}) for what others do, **humble** forms ([謙譲語]{けんじょうご}) for what you and your side do.",
     "Useful new forms: お見えになる and お[越]{こ}しになる (they come), お目にかかる (I meet you), [差]{さ}し上げる (I give), お待ちです (they are waiting).",
     "For requests, there is a ladder: 待って → 待ってください → 待っていただけますか → お待ちいただけないでしょうか. Each step adds respect and distance.",
     "Start by recognizing these forms and learning a few set phrases well. Everyone, including Japanese speakers in their first job, takes years to feel at home in keigo."
    ],
    builder: [
     {
      table: [
       [
        "Verb",
        "[尊敬語]{そんけいご}",
        "[謙譲語]{けんじょうご}"
       ],
       [
        "[来]{く}る",
        "いらっしゃる・お見えになる・お[越]{こ}しになる",
        "[参]{まい}る"
       ],
       [
        "会う",
        "お会いになる",
        "お目にかかる"
       ],
       [
        "あげる",
        "—",
        "[差]{さ}し上げる"
       ],
       [
        "借りる",
        "お借りになる",
        "[拝借]{はいしゃく}する・お借りする"
       ],
       [
        "知っている",
        "ご[存]{ぞん}じだ",
        "[存]{ぞん}じております・[存]{ぞん}じ上げております (a person)"
       ]
      ]
     },
     "**お～です** (お待ちです, お持ちですか, お急ぎですか) is a respectful way to describe the other person’s state. It is a regular pattern, like お～になる: Tae Kim’s guide teaches it as “お + stem + です”, and IRODORI Pre-Intermediate teaches it in Lesson 12.",
     "**Shops.** [何名様]{なんめいさま}ですか, ご注文はお[決]{き}まりですか, かしこまりました, お待たせいたしました, ～でございます. Common shop phrases such as 「～になります」 and 「～からお[預]{あず}かりします」 are often criticized as “part-time-job keigo”; the safe standard forms are ～でございます and 千円お[預]{あず}かりします.",
     "**The phone.** いつもお世話になっております; [松本]{まつもと}はただいま[席]{せき}を外しております (no さん for your colleague to an outsider); お電話いたしましょうか; [伺]{うかが}ってもよろしいでしょうか; [申]{もう}し[伝]{つた}えます.",
     "**Visitors.** お[越]{こ}しいただき、ありがとうございます; [担当]{たんとう}の者が[参]{まい}ります (者 for your side, [方]{かた} for theirs).",
     "**Requests.** ～ていただけますか (humble potential of いただく), ～ていただけませんか (softer), お～いただけますか, お～いただけないでしょうか, with a cushion phrase such as [恐]{おそ}れ入りますが ([[kushion-kotoba]])."
    ],
    pro: [
     "**Special verbs and regular patterns.** Respectful: special verbs such as いらっしゃる, おっしゃる, なさる, [召]{め}し上がる and くださる, and regular patterns such as お～になる, ～れる・～られる, お～です and お～ください. Humble: special verbs such as [伺]{うかが}う, [申]{もう}し上げる, [存]{ぞん}じ上げる, [差]{さ}し上げる, いただく, お目にかかる, [拝見]{はいけん}する and [拝借]{はいしゃく}する, and regular お～する and お～いただく. The 2007 [敬語]{けいご}の[指針]{ししん} sort these into five kinds; {{keigo-system}} explains the system.",
     "**Accepted doubles.** お見えになる (お～になる on 見える) is technically double keigo but accepted by custom, as is お[召]{め}し上がりになる. おっしゃられる and お帰りになられる are not; see {{keigo-mistakes}}.",
     "**Potential forms.** ご～できる is the potential of humble ご～する, so 「ご[利用]{りよう}できます」 for customers is a common slip. The guidelines’ fix is ご[利用]{りよう}になれます; ご[利用]{りよう}いただけます is also widely used.",
     "**[参]{まい}る for trains.** 電車が[参]{まい}ります uses [参]{まい}る as [丁重語]{ていちょうご} ([謙譲語]{けんじょうご}Ⅱ): polite to the listeners, raising no one. That is why it can describe a train.",
     "**～させていただく** has spread widely and is often felt to be overused. The guidelines treat it as fitting when you act with the other person’s permission and benefit from it; e1u8 covers this in {{keigo-mistakes}}.",
     "**Manual keigo.** The set phrases taught in shop and call-center manuals (マニュアル[敬語]{けいご}), such as 「～になります」 for 「～でございます」, are widely discussed and often criticized in Japan. Learners can rely on the standard forms and simply recognize the others."
    ]
   },
   related: [
    "polite-speech-basics",
    "keigo-system",
    "keigo-mistakes",
    "emailing-japanese-professors",
    "giving-and-receiving",
    "n3-grammar-patterns-2"
   ],
   read: [
    {
     book: "keigo",
     where: "第2章「敬語の仕組み」 (the five kinds and the notes on 二重敬語) and 第3章「敬語の具体的な使い方」 (worked questions on real situations)"
    }
   ],
   sources: [
    {
     t: "文化審議会「敬語の指針」(Agency for Cultural Affairs, 2007, PDF)",
     url: "https://www.bunka.go.jp/seisaku/bunkashingikai/sokai/sokai_6/pdf/keigo_tousin.pdf"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: Honorific and Humble Forms",
     url: "https://guidetojapanese.org/learn/grammar/honorific"
    },
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "n3-grammar-patterns-2",
   title: "N3 grammar patterns at a glance (II)",
   aka: [
    "N3 grammar",
    "JLPT N3 grammar",
    "N3 grammar list",
    "～かわりに",
    "instead of",
    "～ものだ",
    "～たものだ",
    "used to",
    "～ものではない",
    "～っけ",
    "what was it again",
    "～でしたっけ"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3",
    "jlpt"
   ],
   summary: "A one-page map of the N3 grammar in Unit 10, with the patterns that have no entry of their own (～かわりに, ～ものだ, ～っけ) in detail.",
   levels: {
    starter: [
     "N3 is the middle level of the five-level Japanese-Language Proficiency Test, the bridge between everyday basics (N5, N4) and the Japanese of newspapers and work (N2, N1). Its grammar is mostly about **nuance**: how you feel about a fact, how sure you are, how events relate in time.",
     "Unit 9 covers purpose, decisions, ～ところ, ～はず・～わけ・～べき, wishes, causes with feeling and compound particles ({{n3-grammar-patterns-1}}). Unit 10 covers concession ({{concession-temo}}), time clauses ({{time-clauses-uchi-ni}}), comparison and degree ({{degree-hodo-kurai}}), partial negation ({{partial-negation}}), tendencies ({{feelings-and-tendencies}}), keigo in practice ({{keigo-in-practice}}), states, manner and certainty ({{state-manner-certainty}}), and time, range, focus and contrast ({{time-range-focus-contrast}}).",
     "The JLPT publishes no official grammar list, so N3 lists differ slightly between textbooks. The patterns here appear in the common N3 lists, though a few (such as ～っぱなし and ～ばかりか) are placed at N2 in some.",
     "Use this page for review: read a pattern, make your own example, and go back to the lesson if you are unsure."
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
        "～ても・～としても",
        "even if",
        "雨が[降]{ふ}っても行く。"
       ],
       [
        "～さえ・～さえ～ば",
        "even; as long as",
        "時間さえあれば行ける。"
       ],
       [
        "～だけでなく～も",
        "not only… but also",
        "安いだけでなく、おいしい。"
       ],
       [
        "～うちに",
        "while (it lasts)",
        "[温]{あたた}かいうちに食べて。"
       ],
       [
        "～[間]{あいだ}・～[間]{あいだ}に",
        "all through; at some point during",
        "待っている[間]{あいだ}に[寝]{ね}た。"
       ],
       [
        "～たびに",
        "every time",
        "会うたびに思う。"
       ],
       [
        "～[最中]{さいちゅう}に",
        "right in the middle of",
        "[会議]{かいぎ}の[最中]{さいちゅう}に[鳴]{な}った。"
       ],
       [
        "～かわりに",
        "instead of; in exchange",
        "バスのかわりに歩いた。"
       ],
       [
        "～に[比]{くら}べて",
        "compared with",
        "去年に[比]{くら}べて[暑]{あつ}い。"
       ],
       [
        "～ほど～ない・～くらい",
        "not as … as; as … as",
        "去年ほど[暑]{あつ}くない。"
       ],
       [
        "～わけではない",
        "it’s not that…",
        "[嫌]{きら}いなわけではない。"
       ],
       [
        "～ことはない",
        "no need to",
        "[心配]{しんぱい}することはない。"
       ],
       [
        "～ものだ",
        "that’s how it is; should; used to",
        "よく[泳]{およ}いだものだ。"
       ],
       [
        "～っけ",
        "what was it again?",
        "何時だっけ？"
       ],
       [
        "～っぽい・～がち・～[気味]{ぎみ}",
        "-ish; tends to; a touch of",
        "[疲]{つか}れ[気味]{ぎみ}だ。"
       ],
       [
        "～まま・～っぱなし",
        "as it is; left that way",
        "電気をつけたまま[寝]{ね}た。"
       ],
       [
        "～ずに",
        "without doing",
        "何も言わずに帰った。"
       ],
       [
        "～とおりに・～どおり",
        "just as",
        "[予定]{よてい}どおりに着いた。"
       ],
       [
        "～ふりをする",
        "pretend",
        "[寝]{ね}たふりをした。"
       ],
       [
        "しか～ない・～しかない",
        "only; no choice but",
        "歩いて帰るしかない。"
       ],
       [
        "～に[違]{ちが}いない・～に[決]{き}まっている",
        "must be; obviously",
        "うそに[決]{き}まっている。"
       ],
       [
        "～たとたん(に)",
        "the moment that",
        "立ったとたん、電話が[鳴]{な}った。"
       ],
       [
        "～ついでに",
        "while you’re at it",
        "駅に行くついでに買った。"
       ],
       [
        "～て以来",
        "ever since",
        "[卒業]{そつぎょう}して以来、会っていない。"
       ],
       [
        "～から～にかけて",
        "from … through (roughly)",
        "夜から朝にかけて[降]{ふ}る。"
       ],
       [
        "～を中心に",
        "centered on, mainly",
        "[若]{わか}い人を中心に人気がある。"
       ],
       [
        "～に[関]{かん}して・～に[関]{かん}する",
        "about (formal)",
        "[防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}"
       ],
       [
        "～わりに・～にしては",
        "for…, considering…",
        "[初]{はじ}めてにしては[上手]{じょうず}だ。"
       ],
       [
        "～ばかりか",
        "not only… but even",
        "電車ばかりか、バスも止まった。"
       ]
      ]
     },
     "**～かわりに.** Noun + の代わりに or verb + かわりに: (1) instead of ([部長]{ぶちょう}の代わりに[会議]{かいぎ}に出た); (2) in exchange (…教えるかわりに、…教えてもらう); (3) to make up for it, with adjectives ([狭]{せま}いかわりに安い, [不便]{ふべん}なかわりに[静]{しず}か). At the start of a sentence: その代わり."
    ],
    pro: [
     "**～ものだ** has three main uses. (1) What is natural: 人は[間違]{まちが}えるものだ, often with feeling: 時間がたつのは早いものだ. (2) What one should do, by common sense: 話は[最後]{さいご}まで聞くものだ; negative ～ものではない. (3) With the た-form, fond memories of a past habit: よくこの川で[泳]{およ}いだものだ. Casual: もんだ. Compare ～べきだ (Unit 9), the speaker’s own judgment. Don’t confuse it with the casual excuse ～もん (だって知らなかったんだもん).",
     "**～っけ** checks something you half remember. Casual: ～だっけ, ～だったっけ, ～たっけ, ～んだっけ; polite: ～でしたっけ, ～ましたっけ, ～んでしたっけ. It suits conversation with friends, colleagues and teachers, but not customers or formal settings, where a direct polite question is better (お名前をもう一度[伺]{うかが}ってもよろしいでしょうか). In stories, ～たっけ can also look back with nostalgia.",
     "**Choosing between near neighbors** is the hard part of N3: ～ても or ～のに, ～[間]{あいだ} or ～[間]{あいだ}に, ほど or くらい, っぽい or [気味]{ぎみ}, まま or っぱなし, わりに or にしては. Each lesson has a comparison table; when real overlap exists, the lessons say so, and good test questions give a context that leaves only one answer.",
     "**What comes next.** N2 grammar (in most published lists) adds more formal and written patterns, many built on the ones here: ～にしても, ～ようとも, ～ものの, ～ものなら, ～に[際]{さい}して. The Academic Japanese track (from {{academic-japanese}}) uses many of them."
    ]
   },
   related: [
    "n3-grammar-patterns-1",
    "n4-grammar-patterns",
    "concession-temo",
    "time-clauses-uchi-ni",
    "degree-hodo-kurai",
    "partial-negation",
    "feelings-and-tendencies",
    "keigo-in-practice",
    "state-manner-certainty",
    "time-range-focus-contrast",
    "jlpt-overview"
   ],
   sources: [
    {
     t: "JLPT official site: N1–N5 level summary",
     url: "https://www.jlpt.jp/e/about/levelsummary.html"
    },
    {
     t: "IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    },
    {
     t: "IRODORI Elementary 2 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url: "https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "state-manner-certainty",
   title: "States, manner and certainty: ～まま, ～っぱなし, ～ずに, ～とおり, ～ふり, ～しかない and ～にちがいない",
   aka: [
    "～まま",
    "～たまま",
    "このまま",
    "そのまま",
    "～っぱなし",
    "～ずに",
    "～ず",
    "without doing",
    "～とおりに",
    "～どおり",
    "just as",
    "～ふりをする",
    "pretend",
    "しか～ない",
    "～しかない",
    "no choice but",
    "～ほかない",
    "～に違いない",
    "～に決まっている",
    "must be",
    "certainty"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "How to describe a state that carries on (～まま) or was carelessly left (～っぱなし), say “without doing” (～ずに), “just as” (～とおりに), “pretend” (～ふりをする), “only” and “no choice but” (しか～ない, ～しかない), and “I’m sure” (～に[違]{ちが}いない, ～に[決]{き}まっている).",
   levels: {
    starter: [
     "**～まま** means “as it is, unchanged”: 電気をつけたまま[寝]{ね}た (I fell asleep with the light on). **～っぱなし** says something was left that way and shouldn’t have been: 水が出しっぱなしだ (the water has been left running).",
     "**～ずに** means “without doing”, a little more formal than ～ないで: 朝ごはんを食べずに出かけた. する becomes せずに.",
     "**～とおりに** means “just as”: [説明書]{せつめいしょ}のとおりに (just as the instructions say), [予定]{よてい}どおり (as planned).",
     "**～ふりをする** means “pretend”: [寝]{ね}たふりをする (pretend to be asleep).",
     "**しか～ない** means “only”: 百円しかない. With a verb, **～しかない** means “there’s no choice but”: 歩いて帰るしかない.",
     "**～に[違]{ちが}いない** means “must be”, a firm conclusion: 起きているに[違]{ちが}いない. **～に[決]{き}まっている** is “of course, obviously”, stronger and more casual."
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
        "～まま",
        "た-form / ない-form / い-adj / な-adj + な / N + の",
        "[靴]{くつ}をはいたまま"
       ],
       [
        "～っぱなし",
        "ます stem + っぱなし",
        "開けっぱなし"
       ],
       [
        "～ずに",
        "ない → ずに (する → せずに, [来]{く}る → [来]{こ}ずに)",
        "言わずに"
       ],
       [
        "～とおりに",
        "dictionary / た-form; N + の; N + どおり",
        "言われたとおりに"
       ],
       [
        "～ふりをする",
        "plain verb / N + の / な-adj + な / い-adj",
        "知らないふり"
       ],
       [
        "～しかない",
        "dictionary form + しかない",
        "待つしかない"
       ],
       [
        "～に[違]{ちが}いない",
        "plain form; N and な-adj without だ",
        "学生に[違]{ちが}いない"
       ]
      ]
     },
     "**まま, ておく, てある.** [窓]{まど}を開けたまま[寝]{ね}た: the state carried on. [窓]{まど}を開けておく: on purpose, for later. [窓]{まど}が開けてある: someone did it, and you see the result.",
     "**まま and っぱなし.** まま is neutral and needs the た-form; っぱなし follows the ます stem and almost always complains. っぱなし also means “without a break”: 立ちっぱなし.",
     "**ずに, ないで, なくて.** ずに = ないで (“without”, “instead of”), but only ないで makes requests (～ないでください). なくて gives a reason: 道が分からなくて[困]{こま}った.",
     "**しか and だけ.** しか needs a negative and suggests “not enough”; だけ is neutral and takes a positive verb.",
     "**Certainty, roughly:** かもしれない < でしょう < はず < に[違]{ちが}いない < に[決]{き}まっている. はず reasons from facts or plans; に[違]{ちが}いない concludes from signs; に[決]{き}まっている insists."
    ],
    pro: [
     "**まま with the dictionary form.** In set phrases まま follows a dictionary or passive form: 言われるまま(に) (just as one is told, without question), 思うまま (as one pleases). For a state that carries on, use the た-form.",
     "**っぱなし and its level.** Several published N3 lists include ～っぱなし; others place it at N2. It is common in speech (つけっぱなし, 出しっぱなし, 開けっぱなし) and in phrases like [勝]{か}ちっぱなし or [負]{ま}けっぱなし (a winning or losing streak).",
     "**～ず alone.** In writing, ～ず without に joins clauses like a て-form: [彼]{かれ}は何も言わず、帰った. It also survives in set phrases such as [相変]{あいか}わらず (as always) and 知らず知らず (without realizing).",
     "**とおり and ように.** 前に[述]{の}べたように (as stated before) points back to something; [説明書]{せつめいしょ}のとおりに matches a model step by step. The reading changes after a bare noun: [予定]{よてい}どおり, 時間どおり.",
     "**ふりをする.** The subject acts on purpose, so it is a person or an animal (死んだふりをする動物, animals that play dead), not a thing. ～ような[顔]{かお}をする (look as if) and the more written ～そぶりを見せる (show signs of) are close relatives.",
     "**しかない, ほかない, ざるを[得]{え}ない.** ～ほかない (and ～ほかはない) is a written equivalent of ～しかない. ～ざるを[得]{え}ない (N2) says you are forced to do something against your will.",
     "**に[違]{ちが}いない, に[相違]{そうい}ない, に[決]{き}まっている.** ～に[相違]{そうい}ない is a stiffer written version of ～に[違]{ちが}いない. ～に[決]{き}まっている is spoken and can sound pushy or scolding ([無理]{むり}に[決]{き}まってるでしょ). None of them describes your own intentions."
    ]
   },
   related: [
    "n3-grammar-patterns-2",
    "te-shimau-te-oku",
    "transitive-intransitive",
    "appearance-sou-you-rashii",
    "hazu-wake-beki",
    "guessing-trying-advice",
    "must-and-dont-have-to"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Expressing a lack of change (まま, っぱなし)",
     url: "https://guidetojapanese.org/learn/grammar/nochange"
    },
    {
     t: "Tae Kim’s Guide to Learning Japanese: More negative verbs (～ず, ～ずに)",
     url: "https://guidetojapanese.org/learn/grammar/negativeverbs2"
    },
    {
     t: "IMABI, 第260課: No Doubt that: ～に違いない & ～に相違ない",
     url: "https://imabi.org/no-doubt-that/"
    }
   ],
   checked: "2026-11"
  },
  {
   id: "time-range-focus-contrast",
   title: "Time, range, focus and contrast: ～とたん, ～ついでに, ～ていらい, ～から～にかけて, ～をちゅうしんに, ～にかんして, ～わりに・～にしては and ～ばかりか",
   aka: [
    "～とたん",
    "～たとたんに",
    "the moment that",
    "as soon as",
    "～ついでに",
    "while you’re at it",
    "～て以来",
    "以来",
    "ever since",
    "～から～にかけて",
    "～にかけて",
    "～を中心に",
    "～を中心として",
    "～に関して",
    "～に関する",
    "concerning",
    "～わりに",
    "～わりには",
    "～にしては",
    "considering",
    "for its price",
    "～ばかりか",
    "not only but even"
   ],
   tags: [
    "japanese",
    "grammar",
    "n3"
   ],
   summary: "How to say “the moment that” (～たとたん), “while you’re at it” (～ついでに), “ever since” (～て以来), “from … through” (～から～にかけて), “centered on” (～を中心に), “concerning” (～に[関]{かん}して), “for…, considering…” (～わりに, ～にしては) and “not only… but even” (～ばかりか).",
   levels: {
    starter: [
     "**～たとたん(に)**: the moment that. ドアを開けたとたん、ねこが入ってきた. The second part happens by itself, often by surprise.",
     "**～ついでに**: while you’re at it. コンビニに行くついでに、[牛乳]{ぎゅうにゅう}を買ってきて.",
     "**～て以来**: ever since. 日本に来て以来、[日記]{にっき}を書いている.",
     "**～から～にかけて**: from … through …, roughly. 今夜から[明日]{あした}の朝にかけて雨.",
     "**～を中心に**: mainly, centered on. [若]{わか}い人を中心に人気がある.",
     "**～に[関]{かん}して / ～に[関]{かん}する**: about, in formal language. [防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}.",
     "**～わりに / ～にしては**: for…, considering…. [値段]{ねだん}のわりにおいしい; [初]{はじ}めてにしては[上手]{じょうず}だ.",
     "**～ばかりか**: not only… but even. 電車ばかりか、バスまで止まった."
    ],
    builder: [
     {
      table: [
       [
        "Pattern",
        "Form",
        "Watch out"
       ],
       [
        "～たとたん(に)",
        "た-form",
        "not for your own choices or requests"
       ],
       [
        "～ついでに",
        "dictionary / た-form; N + の",
        "A is the main plan, B the extra"
       ],
       [
        "～て以来",
        "て-form; N + 以来",
        "a continuing state, not one next event"
       ],
       [
        "～から～にかけて",
        "N から N にかけて",
        "rough span; exact times use まで"
       ],
       [
        "～を中心に",
        "N を中心に(して); N を中心とした N",
        "other things are included too"
       ],
       [
        "～に[関]{かん}して",
        "N に[関]{かん}して; N に[関]{かん}する N",
        "formal; before a noun, に[関]{かん}する"
       ],
       [
        "～わりに",
        "plain form; N + の; な-adj + な",
        "measures against an expected degree"
       ],
       [
        "～にしては",
        "N or plain verb + にしては",
        "not after adjectives"
       ],
       [
        "～ばかりか",
        "N or plain form; な-adj + な",
        "not with requests or plans"
       ]
      ]
     },
     "**とたん, たら, てすぐ.** ドアを開けたとたん、ねこが入ってきた (something moved at that instant); ドアを開けたら、ねこがいた (you found it there); 家に帰って、すぐシャワーを[浴]{あ}びた (your own quick action).",
     "**以来 and てから.** Both can mean “since” with ずっと, but only てから means “after” for one next event: [宿題]{しゅくだい}をしてから[寝]{ね}た.",
     "**わりに, のに, かわりに.** 高いわりにおいしくない (less than the price promises); 高いのにおいしくない (and yet, with feeling); 高いかわりにおいしい (a trade-off).",
     "**ばかりか and だけでなく.** Same idea; ばかりか is stronger and more written, and its second part goes further (も, まで, さえ)."
    ],
    pro: [
     "**とたん.** It is written [途端]{とたん} in kanji. Guides agree that the second clause is not the speaker’s own deliberate act; it is usually an event, a change or a reaction (めまいがした, [泣]{な}き出した). ～か～ないかのうちに and ～や[否]{いな}や (N2–N1) are close relatives.",
     "**ついでに.** The noun ついで ([序]{つい}で) means “an opportunity”. In casual speech の is often dropped after an action noun (買い物ついでに); keep it in writing. With the dictionary form, B happens on the way; with the た-form, once A is done.",
     "**以来 with time words.** あの日以来, 去年の春以来 and それ以来 are common; with a short, recent time (さっき) 以来 sounds odd, because it implies a turning point some time ago.",
     "**にかけて and にわたって.** ～にわたって (N2) stresses that something covers the whole span: 三日にわたって雨が[降]{ふ}り[続]{つづ}いた. ～にかけて only marks a rough span.",
     "**に[関]{かん}して and について.** Some guides describe に[関]{かん}して as taking in the surrounding context as well as the topic itself; in practice the main difference is formality. Before a noun, に[関]{かん}しての also occurs, but に[関]{かん}する is far more common. The polite forms ～につきまして and ～に[関]{かん}しまして appear in business speech. ～をめぐって (N2) is used for topics of debate or conflict.",
     "**わりに and にしては.** にしては needs a specific, known standard and can take a person (プロにしては); わりに works with general qualities and adjectives. With age and price, both are common.",
     "**ばかりか.** Several N3 lists include it; others place it at N2. The second clause can’t be a request, an order or the speaker’s own intention; use ～だけでなく there."
    ]
   },
   related: [
    "n3-grammar-patterns-2",
    "time-clauses-uchi-ni",
    "compound-particles",
    "tokoro-and-bakari",
    "concession-temo",
    "degree-hodo-kurai",
    "conditionals-to-ba-tara-nara"
   ],
   sources: [
    {
     t: "Tae Kim’s Guide to Learning Japanese: Time-specific actions (とたん)",
     url: "https://guidetojapanese.org/learn/grammar/timeactions"
    },
    {
     t: "IMABI, 第223課: About: ～について, ～に関して, & ～をめぐって",
     url: "https://imabi.org/about-2/"
    },
    {
     t: "IMABI, 第334課: Considering…: わりに（は） & にしては",
     url: "https://imabi.org/considering-%e3%82%8f%e3%82%8a%e3%81%ab%ef%bc%88%e3%81%af%ef%bc%89-%e3%81%ab%e3%81%97%e3%81%a6%e3%81%af/"
    }
   ],
   checked: "2026-11"
  }
 ],
 terms: [
  {
   id: "temo",
   term: "～ても (even if, even though)",
   def: "The て-form + も: the first part doesn’t change the second. 雨が[降]{ふ}っても行きます (Even if it rains, I’ll go). い-adjectives take ～くても; nouns and な-adjectives take ～でも; with いくら or どんなに it means “no matter how”.",
   codex: "concession-temo"
  },
  {
   id: "to-shite-mo",
   term: "～としても (even supposing)",
   def: "Plain form + としても makes a condition clearly a supposition, often an unlikely one: [宝]{たから}くじが[当]{あ}たったとしても (even if I won the lottery). Nouns and な-adjectives take だ first: [冗談]{じょうだん}だとしても.",
   codex: "concession-temo"
  },
  {
   id: "sae",
   term: "～さえ (even; as long as)",
   def: "Marks an extreme example: 水を飲む時間さえなかった (I didn’t even have time to drink water). With a ば-form it marks the one thing needed: 時間さえあれば (as long as I have time); with verbs, stem + さえすれば.",
   codex: "concession-temo"
  },
  {
   id: "dake-de-naku",
   term: "～だけでなく (not only)",
   def: "“Not only A, but also B”, with も on B: 英語だけでなく中国語も話せる. な-adjectives take な first. Casual: だけじゃなくて; written: だけではなく.",
   codex: "concession-temo"
  },
  {
   id: "uchi-ni",
   term: "～うちに (while; before it changes)",
   def: "Do something while a situation lasts: [温]{あたた}かいうちに食べて (eat it while it’s warm); ～ないうちに means “before (it happens)”. After ～ている, it can also describe a change that happened gradually: 聞いているうちに[覚]{おぼ}えた.",
   codex: "time-clauses-uchi-ni"
  },
  {
   id: "aida-ni",
   term: "～[間]{あいだ} and ～[間]{あいだ}に (while, during)",
   def: "～[間]{あいだ}: the main action lasts the whole period (夏休みの[間]{あいだ}、ずっと[働]{はたら}いていた). ～[間]{あいだ}に: one event happens at some point inside it (夏休みの[間]{あいだ}に[免許]{めんきょ}を[取]{と}った).",
   codex: "time-clauses-uchi-ni"
  },
  {
   id: "tabi-ni",
   term: "～たびに (every time)",
   def: "Dictionary form or noun + の + たびに: the same thing happens on each occasion. この写真を見るたびに思い出す (Every time I see this photo, I remember).",
   codex: "time-clauses-uchi-ni"
  },
  {
   id: "saichuu",
   term: "～[最中]{さいちゅう}に (right in the middle of)",
   def: "～ている or noun + の + [最中]{さいちゅう}に: right in the middle of an activity, usually when something interrupts. [会議]{かいぎ}の[最中]{さいちゅう}に電話が[鳴]{な}った. Read さいちゅう here (もなか is a wafer sweet).",
   codex: "time-clauses-uchi-ni"
  },
  {
   id: "kawari-ni",
   term: "～かわりに (instead of; in exchange)",
   def: "Noun + の代わりに or a plain form + かわりに: “instead of” ([砂糖]{さとう}の代わりに), “in exchange for” (教えるかわりに), or “but to make up for it” ([狭]{せま}いかわりに安い).",
   codex: "n3-grammar-patterns-2"
  },
  {
   id: "ni-kurabete",
   term: "～に[比]{くら}べて (compared with)",
   def: "Noun + に[比]{くら}べて (or と[比]{くら}べて) opens a comparison: 去年に[比]{くら}べて、[雪]{ゆき}が多い. A little more formal than より, and common in news and reports.",
   codex: "degree-hodo-kurai"
  },
  {
   id: "hodo-kurai",
   term: "～ほど and ～くらい (degree)",
   def: "A は B ほど～ない: not as … as B. A は B くらい～: as … as B. Both show degree (“so … that”) and “about” with amounts; only くらい (ぐらい) means “at least”: あいさつくらいしなさい.",
   codex: "degree-hodo-kurai"
  },
  {
   id: "wake-de-wa-nai",
   term: "～わけではない (it’s not that…)",
   def: "Denies a conclusion someone might draw, without saying the opposite: [嫌]{きら}いなわけではない (it’s not that I dislike it). With [全部]{ぜんぶ} or いつも it denies only part: [全部]{ぜんぶ}わかったわけではない. Casual: わけじゃない.",
   codex: "partial-negation"
  },
  {
   id: "koto-wa-nai",
   term: "～ことはない (there’s no need to)",
   def: "Dictionary form + ことはない reassures or advises: [心配]{しんぱい}することはない (there’s no need to worry). Don’t confuse it with ～たことはない (have never) or ～ないことはない (it’s not that I can’t).",
   codex: "partial-negation"
  },
  {
   id: "mono-da",
   term: "～ものだ (that’s how it is; should; used to)",
   def: "Presents something as natural (人は[間違]{まちが}えるものだ), as what people should do (～ものだ, ～ものではない), or, after the た-form, as a fond memory of a past habit (よく[泳]{およ}いだものだ). Casual: もんだ.",
   codex: "n3-grammar-patterns-2"
  },
  {
   id: "kke",
   term: "～っけ (what was it again?)",
   def: "A sentence ending that checks something you half remember: 何時からだっけ？, 休みでしたっけ？, [来]{く}るんだっけ？. Conversational: with customers or in formal settings, ask directly instead.",
   codex: "n3-grammar-patterns-2"
  },
  {
   id: "ppoi",
   term: "～っぽい (-ish, like, easily)",
   def: "A mostly casual suffix that makes an い-adjective: 白っぽい (whitish), 子どもっぽい (childish), and after a verb stem “does it easily”: [忘]{わす}れっぽい (forgetful), [怒]{おこ}りっぽい (quick to anger).",
   codex: "feelings-and-tendencies"
  },
  {
   id: "gachi",
   term: "～がち (tends to)",
   def: "Verb stem or a few nouns + がち: something tends to happen, usually something unwelcome. [忘]{わす}れがち (tend to forget), [曇]{くも}りがち (often cloudy), 病気がち (often ill). Works like a な-adjective.",
   codex: "feelings-and-tendencies"
  },
  {
   id: "kimi-suffix",
   term: "～[気味]{ぎみ} (a touch of)",
   def: "Noun or verb stem + [気味]{ぎみ}: a slight sign of something now, usually unwelcome. [風邪]{かぜ}[気味]{ぎみ} (a bit of a cold), [疲]{つか}れ[気味]{ぎみ} (a bit tired). As a suffix it is read ぎみ; alone, [気味]{きみ} means “feeling”.",
   codex: "feelings-and-tendencies"
  },
  {
   id: "mama",
   term: "～まま (as it is, unchanged)",
   def: "A state carries on while something else happens: 電気をつけたまま[寝]{ね}た (fell asleep with the light on). Verbs take the た-form, nouns の: [靴]{くつ}のまま.",
   codex: "state-manner-certainty"
  },
  {
   id: "ppanashi",
   term: "～っぱなし (left that way)",
   def: "ます stem + っぱなし: something was done and carelessly left, as in つけっぱなし (left on); also “without a break”, as in 立ちっぱなし (standing the whole time). Mostly spoken.",
   codex: "state-manner-certainty"
  },
  {
   id: "zu-ni",
   term: "～ずに (without doing)",
   def: "The ない-form with ない changed to ずに: 食べずに (without eating). Means the same as ～ないで, a little more formally. する → せずに, [来]{く}る → [来]{こ}ずに.",
   codex: "state-manner-certainty"
  },
  {
   id: "toori-ni",
   term: "～とおりに (just as)",
   def: "Exactly the way something says or shows: 言われたとおりに, [説明書]{せつめいしょ}のとおりに. Straight after a noun it becomes どおり: [予定]{よてい}どおり (as planned).",
   codex: "state-manner-certainty"
  },
  {
   id: "furi-o-suru",
   term: "～ふりをする (pretend)",
   def: "Act as if something were true when it isn’t: [寝]{ね}たふりをする (pretend to be asleep), 知らないふりをする. Nouns take の: 病気のふり.",
   codex: "state-manner-certainty"
  },
  {
   id: "shika-nai",
   term: "しか～ない and ～しかない (only; no choice but)",
   def: "しか + a negative verb means “only”: 百円しかない. A dictionary-form verb + しかない means “there’s no choice but”: 歩いて帰るしかない.",
   codex: "state-manner-certainty"
  },
  {
   id: "ni-chigainai",
   term: "～に[違]{ちが}いない (must be)",
   def: "A firm conclusion from what you see or know: おいしいに[違]{ちが}いない (it must be good). Nouns and な-adjectives take no だ. Polite: ～に[違]{ちが}いありません.",
   codex: "state-manner-certainty"
  },
  {
   id: "ni-kimatte-iru",
   term: "～に[決]{き}まっている (of course, obviously)",
   def: "Very strong, conversational certainty, often emotional: うそに[決]{き}まってる (it’s obviously a lie). Same forms as ～に[違]{ちが}いない.",
   codex: "state-manner-certainty"
  },
  {
   id: "totan-ni",
   term: "～たとたん(に) (the moment that)",
   def: "た-form + とたん(に): B happens at the very moment A happens, usually by surprise. ドアを開けたとたん、ねこが入ってきた. Not for your own planned actions or requests.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "tsuide-ni",
   term: "～ついでに (while you’re at it)",
   def: "You are doing A anyway, so you add B: コンビニに行くついでに[牛乳]{ぎゅうにゅう}を買う. Verb or noun + の + ついでに; alone, ついでに means “while you’re at it”.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "te-irai",
   term: "～て以来 (ever since)",
   def: "て-form or noun + 以来: from a turning point in the past up to now. 日本に来て以来 (ever since I came to Japan), あの日以来, それ以来.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "kara-ni-kakete",
   term: "～から～にかけて (from … through …)",
   def: "Spread over a span of time or an area, roughly: 今夜から[明日]{あした}の朝にかけて雨が[降]{ふ}る. For exact start and end times, use から～まで.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "o-chuushin-ni",
   term: "～を中心に (centered on, mainly)",
   def: "Noun + を中心に(して): the noun is the main part of a wider set. [若]{わか}い人を中心に人気がある. Before a noun: を中心とした.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "ni-kanshite",
   term: "～に[関]{かん}して / ～に[関]{かん}する (concerning)",
   def: "A formal “about”, used in notices, reports and business: この[件]{けん}に[関]{かん}して. Before a noun, に[関]{かん}する: [防災]{ぼうさい}に[関]{かん}する[資料]{しりょう}.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "wari-ni",
   term: "～わりに (for…, considering…)",
   def: "The result differs from what a quality or amount would lead you to expect: [値段]{ねだん}のわりにおいしい (good for the price). Takes nouns + の, verbs and both kinds of adjectives.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "ni-shite-wa",
   term: "～にしては (for…)",
   def: "Weighs a result against one specific fact: [初]{はじ}めてにしては[上手]{じょうず}だ (good for a first try). Follows nouns and verbs, not adjectives.",
   codex: "time-range-focus-contrast"
  },
  {
   id: "bakari-ka",
   term: "～ばかりか (not only… but even)",
   def: "A ばかりか B (も・まで・さえ): B goes further than you’d expect. 電車ばかりか、バスまで止まった. Stronger and more written than ～だけでなく; not for requests.",
   codex: "time-range-focus-contrast"
  }
 ],
 bank: [
  {
   id: "e3u10-q01",
   lesson: "e3u10-l1",
   level: 1,
   q: "What is the ても-form (“even if it’s…”) of the な-adjective [静]{しず}か?",
   options: [
    {
     t: "[静]{しず}かでも",
     ok: true,
     why: "な-adjectives and nouns take でも."
    },
    {
     t: "[静]{しず}かだても",
     why: "ても follows a て-form; for な-adjectives that is で, so でも."
    },
    {
     t: "[静]{しず}かくても",
     why: "くても is for い-adjectives such as 高い → 高くても."
    },
    {
     t: "[静]{しず}かなでも",
     why: "な is used before nouns and some patterns (なのに, なだけでなく), not before でも."
    }
   ]
  },
  {
   id: "e3u10-q02",
   lesson: "e3u10-l1",
   level: 1,
   q: "What is the negative ても-form (“even if I don’t write”) of 書く?",
   options: [
    {
     t: "書かなくても",
     ok: true,
     why: "Take the ない-form 書かない and change ない to なくても."
    },
    {
     t: "書かないても",
     why: "ない conjugates like an い-adjective: ない → なくても."
    },
    {
     t: "書きなくても",
     why: "The negative is built on the ない-form stem 書か, not the ます stem 書き."
    },
    {
     t: "書かなかっても",
     why: "ても has no past form; the tense comes from the end of the sentence."
    }
   ]
  },
  {
   id: "e3u10-q03",
   lesson: "e3u10-l1",
   level: 2,
   q: "「どんなに[頼]{たの}んでも、父は[許]{ゆる}してくれませんでした。」 ([頼]{たの}む = ask, beg; [許]{ゆる}す = allow) What happened?",
   options: [
    {
     t: "My father said no, however much I begged.",
     ok: true,
     why: "どんなに～ても: the begging, however much, didn’t change the result."
    },
    {
     t: "My father didn’t allow it, so I begged him.",
     why: "ても doesn’t give a reason or an order of events; it says the first part made no difference."
    },
    {
     t: "If I begged, my father would allow it.",
     why: "That would be [頼]{たの}めば[許]{ゆる}してくれる. The sentence says the opposite."
    },
    {
     t: "I didn’t beg, but my father allowed it.",
     why: "The verb [許]{ゆる}してくれませんでした is negative: he didn’t allow it."
    }
   ]
  },
  {
   id: "e3u10-q04",
   lesson: "e3u10-l1",
   level: 3,
   q: "Mariya is tired of calling a friend who never answers. She wants to say: “Whenever I call, he doesn’t answer.” Which is correct?",
   options: [
    {
     t: "いつ電話しても、出ません。",
     ok: true,
     why: "Question word + ～ても: “whenever I call, it makes no difference”."
    },
    {
     t: "いつ電話したら、出ません。",
     why: "A question word like いつ needs ～ても for “whenever”; ～たら gives an “if, then” link."
    },
    {
     t: "いつ電話するのに、出ません。",
     why: "のに can’t follow a question word to mean “whenever”, and it needs a single real fact."
    },
    {
     t: "いつ電話して、出ません。",
     why: "A bare て-form only links two events; it doesn’t give “whenever”."
    }
   ]
  },
  {
   id: "e3u10-q05",
   lesson: "e3u10-l1",
   level: 3,
   q: "You tell your manager that you will come to work tomorrow even if it snows. Complete: [明日]{あした}[雪]{ゆき}が（　）、[出勤]{しゅっきん}します。 ([出勤]{しゅっきん}する = go to work)",
   options: [
    {
     t: "[降]{ふ}っても",
     ok: true,
     why: "Tomorrow’s snow is only a possibility, and you will come anyway: ～ても."
    },
    {
     t: "[降]{ふ}るのに",
     why: "のに needs a fact that has already happened or is true now, and it can’t be followed by a plan like [出勤]{しゅっきん}します."
    },
    {
     t: "[降]{ふ}ったら",
     why: "～たら links the snow to your coming (“if it snows, I’ll come”), which isn’t what you mean."
    },
    {
     t: "[降]{ふ}るから",
     why: "から makes the snow the reason you come to work."
    }
   ]
  },
  {
   id: "e3u10-q06",
   lesson: "e3u10-l1",
   level: 2,
   q: "Kaito says: 「せっかく作ったのに、だれも食べなかった。」 (せっかく = with all the effort) How does he feel?",
   options: [
    {
     t: "Disappointed: he made it, and nobody ate it.",
     ok: true,
     why: "～のに reports a real fact (he cooked) and a result against it, with disappointment."
    },
    {
     t: "Calm: he is just reporting that nobody ate.",
     why: "のに adds feeling. A calmer report would use ～たけど or ～ても."
    },
    {
     t: "Hopeful: maybe someone will eat it later.",
     why: "The sentence is about what already happened (なかった), with regret."
    },
    {
     t: "Relieved: he didn’t want anyone to eat it.",
     why: "せっかく and のに show that he wanted it eaten."
    }
   ]
  },
  {
   id: "e3u10-q07",
   lesson: "e3u10-l1",
   level: 2,
   q: "Complete with the correct form: たとえ[本当]{ほんとう}（　）、人に言ってはいけません。(Even if it’s true, you mustn’t tell anyone.)",
   options: [
    {
     t: "だとしても",
     ok: true,
     why: "Nouns and な-adjectives take だ before としても: [本当]{ほんとう}だとしても."
    },
    {
     t: "としても",
     why: "Noun + としても without だ is として (as) + も: “as the truth, too”. The concessive needs だ."
    },
    {
     t: "だっても",
     why: "ても follows a て-form; for nouns that is で: [本当]{ほんとう}でも. だっても isn’t a form."
    },
    {
     t: "なのに",
     why: "のに needs a fact, and the speaker isn’t saying it is true; たとえ also calls for ～ても or ～としても."
    }
   ]
  },
  {
   id: "e3u10-q08",
   lesson: "e3u10-l1",
   level: 1,
   q: "「この漢字は、日本人でさえ読めない。」 What does it say?",
   options: [
    {
     t: "Even Japanese people can’t read this kanji.",
     ok: true,
     why: "でさえ marks the extreme example: if even native speakers can’t, it is very hard."
    },
    {
     t: "Only Japanese people can read this kanji.",
     why: "“Only” would be 日本人しか読めない. さえ means “even”."
    },
    {
     t: "As long as you’re Japanese, you can read this kanji.",
     why: "“As long as” needs a ば-form after さえ: 日本人でさえあれば読める."
    },
    {
     t: "Japanese people can read this kanji, too.",
     why: "も would add one more group; さえ with a negative means “not even”."
    }
   ]
  },
  {
   id: "e3u10-q09",
   lesson: "e3u10-l1",
   level: 1,
   q: "Which is the correct way to say “As long as you practice, you’ll improve”?",
   options: [
    {
     t: "[練習]{れんしゅう}さえすれば、[上手]{じょうず}になります。",
     ok: true,
     why: "With a する-noun, put さえ after the noun and use すれば."
    },
    {
     t: "[練習]{れんしゅう}さえば、[上手]{じょうず}になります。",
     why: "さえ needs a ば-form of a verb after it: すれば."
    },
    {
     t: "[練習]{れんしゅう}すればさえ、[上手]{じょうず}になります。",
     why: "さえ comes before the ば-form, not after it."
    },
    {
     t: "[練習]{れんしゅう}しさえば、[上手]{じょうず}になります。",
     why: "After a verb stem, さえ is followed by すれば: しさえすれば."
    }
   ]
  },
  {
   id: "e3u10-q10",
   lesson: "e3u10-l1",
   level: 3,
   q: "Mariya wants to recommend a café: it is cheap, and the coffee is good as well. Which sentence says this?",
   options: [
    {
     t: "このカフェは安いだけでなく、コーヒーもおいしいです。",
     ok: true,
     why: "～だけでなく～も adds a second good point to the first: not only cheap, the coffee is good too."
    },
    {
     t: "このカフェは安いではなく、コーヒーがおいしいです。",
     why: "～ではなく means “not A but B”, so it denies that the café is cheap (and い-adjectives don’t take ではなく like this)."
    },
    {
     t: "このカフェは安いだけ、コーヒーもおいしいです。",
     why: "だけ alone means “only”; you need だけでなく for “not only”."
    },
    {
     t: "このカフェは安いので、コーヒーもおいしいです。",
     why: "ので makes the low price the reason the coffee is good, which isn’t what she means."
    }
   ]
  },
  {
   id: "e3u10-q11",
   lesson: "e3u10-l2",
   level: 1,
   q: "「[若]{わか}いうちに、いろいろな国へ行きたい。」 What does it mean?",
   options: [
    {
     t: "I want to visit many countries while I’m young.",
     ok: true,
     why: "～うちに: youth won’t last, so act before it ends."
    },
    {
     t: "When I was young, I visited many countries.",
     why: "たい shows a wish for the future, not a memory."
    },
    {
     t: "I want to visit many countries to stay young.",
     why: "Purpose would be ために or ように; うちに is about time."
    },
    {
     t: "Every time I feel young, I want to travel.",
     why: "“Every time” is たびに."
    }
   ]
  },
  {
   id: "e3u10-q12",
   lesson: "e3u10-l2",
   level: 1,
   q: "Complete: 朝の[静]{しず}か（　）、勉強します。(I study while it’s quiet in the morning.)",
   options: [
    {
     t: "なうちに",
     ok: true,
     why: "な-adjectives take な before うちに: [静]{しず}かなうちに."
    },
    {
     t: "のうちに",
     why: "の is for nouns (学生のうちに); [静]{しず}か is a な-adjective."
    },
    {
     t: "うちに",
     why: "な-adjectives need な before うちに."
    },
    {
     t: "だうちに",
     why: "だ ends a sentence; before うちに the form is な."
    }
   ]
  },
  {
   id: "e3u10-q13",
   lesson: "e3u10-l2",
   level: 3,
   q: "Megumi-san wants her son Sōta home before dark. What does she say?",
   options: [
    {
     t: "[暗]{くら}くならないうちに帰ってきなさい。",
     ok: true,
     why: "～ないうちに means “before (it happens)”: while it hasn’t yet got dark."
    },
    {
     t: "[暗]{くら}くなるうちに帰ってきなさい。",
     why: "A positive [暗]{くら}くなるうちに doesn’t mean “before it gets dark”. “Before” needs the negative, or [暗]{くら}くなる前に."
    },
    {
     t: "[暗]{くら}くなったうちに帰ってきなさい。",
     why: "うちに doesn’t follow the た-form, and “after dark” is the opposite of what she wants."
    },
    {
     t: "[暗]{くら}くなるたびに帰ってきなさい。",
     why: "たびに means “every time”, which doesn’t fit a single evening."
    }
   ]
  },
  {
   id: "e3u10-q14",
   lesson: "e3u10-l2",
   level: 2,
   q: "Complete: 私が電話している（　）、子どもはずっとおとなしく待っていた。",
   options: [
    {
     t: "[間]{あいだ}",
     ok: true,
     why: "ずっと and 待っていた fill the whole period: ～[間]{あいだ}, with no に."
    },
    {
     t: "[間]{あいだ}に",
     why: "～[間]{あいだ}に is for one event at some point in the period, not an action that lasts all through it."
    },
    {
     t: "ながら",
     why: "ながら joins two actions by the same person; here the speaker phones and the child waits."
    },
    {
     t: "たびに",
     why: "たびに follows the dictionary form and means “every time”; it doesn’t fit ずっと."
    }
   ]
  },
  {
   id: "e3u10-q15",
   lesson: "e3u10-l2",
   level: 2,
   q: "Complete: [留守]{るす}の（　）、[宅配便]{たくはいびん}が[来]{き}ていた。([留守]{るす} = being out; [宅配便]{たくはいびん} = a parcel delivery)",
   options: [
    {
     t: "[間]{あいだ}に",
     ok: true,
     why: "The delivery came once, at some point while you were out: ～[間]{あいだ}に."
    },
    {
     t: "[間]{あいだ}",
     why: "Without に, the main action would have to last the whole time you were out."
    },
    {
     t: "たびに",
     why: "たびに means “every time”; this is one delivery."
    },
    {
     t: "[最中]{さいちゅう}に",
     why: "[最中]{さいちゅう} is for the busy peak of an activity; being out isn’t an activity."
    }
   ]
  },
  {
   id: "e3u10-q16",
   lesson: "e3u10-l2",
   level: 1,
   q: "Which meaning does ～たびに have?",
   options: [
    {
     t: "every time",
     ok: true,
     why: "会うたびに: every time we meet."
    },
    {
     t: "right in the middle of",
     why: "That is ～[最中]{さいちゅう}に."
    },
    {
     t: "while it lasts",
     why: "That is ～うちに."
    },
    {
     t: "instead of",
     why: "That is ～かわりに."
    }
   ]
  },
  {
   id: "e3u10-q17",
   lesson: "e3u10-l2",
   level: 2,
   q: "Which sentence is **wrong**?",
   options: [
    {
     t: "[昨日]{きのう}、駅で先生に会うたびに、あいさつしました。",
     ok: true,
     why: "This is the wrong one. Yesterday’s meeting was one occasion; たびに is for repeated ones. Use 会ったとき."
    },
    {
     t: "この歌を聞くたびに、国を思い出します。",
     why: "Correct: something that happens each time you hear the song."
    },
    {
     t: "[出張]{しゅっちょう}のたびに、お[土産]{みやげ}を買ってきます。",
     why: "Correct: noun + のたびに, every business trip."
    },
    {
     t: "会うたびに、[祖母]{そぼ}は「大きくなったね」と言います。",
     why: "Correct: repeated meetings, the same words each time."
    }
   ]
  },
  {
   id: "e3u10-q18",
   lesson: "e3u10-l2",
   level: 3,
   q: "Mariya phones a friend, who answers: 「ごめん、今、[晩]{ばん}ごはんの[最中]{さいちゅう}なんだ。あとでかけ[直]{なお}すね。」 What is happening?",
   options: [
    {
     t: "The friend is having dinner and will call back.",
     ok: true,
     why: "～の[最中]{さいちゅう}だ: right in the middle of an activity now; かけ[直]{なお}す = call back."
    },
    {
     t: "The friend has just finished dinner.",
     why: "“Just finished” would be 食べたところ or 食べたばかり."
    },
    {
     t: "The friend is about to start dinner.",
     why: "“About to” would be 食べるところ."
    },
    {
     t: "The friend eats dinner every time Mariya calls.",
     why: "“Every time” would need たびに."
    }
   ]
  },
  {
   id: "e3u10-q19",
   lesson: "e3u10-l2",
   level: 1,
   q: "Complete: [試合]{しあい}（　）、雨が[降]{ふ}り出した。(It started to rain right in the middle of the match.)",
   options: [
    {
     t: "の[最中]{さいちゅう}に",
     ok: true,
     why: "Noun + の[最中]{さいちゅう}に."
    },
    {
     t: "する[最中]{さいちゅう}に",
     why: "Verbs take ～ている before [最中]{さいちゅう}: [試合]{しあい}をしている[最中]{さいちゅう}に."
    },
    {
     t: "な[最中]{さいちゅう}に",
     why: "な is for な-adjectives; [試合]{しあい} is a noun and takes の."
    },
    {
     t: "が[最中]{さいちゅう}に",
     why: "が marks a subject; before [最中]{さいちゅう} a noun takes の."
    }
   ]
  },
  {
   id: "e3u10-q20",
   lesson: "e3u10-l2",
   level: 3,
   q: "A friend wants to say: “As we kept meeting, before I knew it I had come to like her.” Which is natural?",
   options: [
    {
     t: "何度も会っているうちに、[好]{す}きになった。",
     ok: true,
     why: "～ているうちに + a change (なった): a change that crept up while something went on."
    },
    {
     t: "何度も会っている[間]{あいだ}、[好]{す}きになった。",
     why: "～[間]{あいだ} needs a main action that lasts the whole time, not a change."
    },
    {
     t: "何度も会っている[最中]{さいちゅう}に、[好]{す}きになった。",
     why: "[最中]{さいちゅう} is for one activity at its peak, interrupted; it doesn’t suit many meetings and a slow change."
    },
    {
     t: "何度も会っている前に、[好]{す}きになった。",
     why: "前に follows the dictionary form (会う前に) and means “before”, not “as”."
    }
   ]
  },
  {
   id: "e3u10-q21",
   lesson: "e3u10-l3",
   level: 1,
   q: "「[部長]{ぶちょう}の代わりに、私が[会議]{かいぎ}に出ました。」 Who went to the meeting?",
   options: [
    {
     t: "I did, in place of the manager.",
     ok: true,
     why: "～の代わりに: one person stands in for another; the manager didn’t go."
    },
    {
     t: "The manager and I both went.",
     why: "That would be [部長]{ぶちょう}と[一緒]{いっしょ}に. かわりに means the manager didn’t go."
    },
    {
     t: "The manager went in my place.",
     why: "The person before かわりに is the one who is replaced: the manager."
    },
    {
     t: "Nobody went.",
     why: "私が出ました says that I went."
    }
   ]
  },
  {
   id: "e3u10-q22",
   lesson: "e3u10-l3",
   level: 1,
   q: "Complete: バター（　）、オリーブオイルを使います。(I use olive oil instead of butter.)",
   options: [
    {
     t: "の代わりに",
     ok: true,
     why: "Nouns take の before かわりに."
    },
    {
     t: "な代わりに",
     why: "な is for な-adjectives ([不便]{ふべん}なかわりに); バター is a noun."
    },
    {
     t: "だ代わりに",
     why: "だ doesn’t come before かわりに."
    },
    {
     t: "に代わりに",
     why: "Before かわりに a noun takes の, not に."
    }
   ]
  },
  {
   id: "e3u10-q23",
   lesson: "e3u10-l3",
   level: 3,
   q: "Yến describes her room to a friend: it is small, but the low rent makes up for it. Which sentence says this?",
   options: [
    {
     t: "[部屋]{へや}は[狭]{せま}いかわりに、[家賃]{やちん}が安いんです。",
     ok: true,
     why: "い-adjective + かわりに: a trade-off, one side pays for the other."
    },
    {
     t: "[部屋]{へや}は[狭]{せま}いのかわりに、[家賃]{やちん}が安いんです。",
     why: "い-adjectives attach directly to かわりに, without の."
    },
    {
     t: "[部屋]{へや}は[狭]{せま}いほど、[家賃]{やちん}が安いんです。",
     why: "This would mean “the room is small to the degree that the rent is cheap”, not a trade-off."
    },
    {
     t: "[部屋]{へや}は[狭]{せま}いに[比]{くら}べて、[家賃]{やちん}が安いんです。",
     why: "に[比]{くら}べて compares with a noun; it doesn’t follow an adjective like this."
    }
   ]
  },
  {
   id: "e3u10-q24",
   lesson: "e3u10-l3",
   level: 1,
   q: "Complete the weather report: 去年（　）[比]{くら}べて、[今年]{ことし}は雨が少ないです。",
   options: [
    {
     t: "に",
     ok: true,
     why: "The thing you compare with takes に (or と): 去年に[比]{くら}べて."
    },
    {
     t: "を",
     why: "を would make last year the thing you are examining, not the standard: “comparing last year”."
    },
    {
     t: "で",
     why: "で marks a place or means, not the standard of comparison."
    },
    {
     t: "が",
     why: "が would make last year the subject of [比]{くら}べる, which doesn’t fit."
    }
   ]
  },
  {
   id: "e3u10-q25",
   lesson: "e3u10-l3",
   level: 2,
   q: "「このかばんは、あのかばんほど重くない。」 Which bag is heavier?",
   options: [
    {
     t: "That bag (あのかばん)",
     ok: true,
     why: "A は B ほど～ない: A doesn’t reach B. B, あのかばん, is heavier."
    },
    {
     t: "This bag (このかばん)",
     why: "This bag is the one that is “not as heavy”."
    },
    {
     t: "They are the same weight.",
     why: "That would be あのかばんと同じくらい重い."
    },
    {
     t: "Neither is heavy.",
     why: "The sentence only compares the two; it doesn’t say neither is heavy."
    }
   ]
  },
  {
   id: "e3u10-q26",
   lesson: "e3u10-l3",
   level: 2,
   q: "Which sentence is **wrong**?",
   options: [
    {
     t: "[今日]{きょう}は[昨日]{きのう}ほど[寒]{さむ}いです。",
     ok: true,
     why: "This is the wrong one. ほど only means “as … as” with a negative: [昨日]{きのう}ほど[寒]{さむ}くない. For “as cold as”, use くらい."
    },
    {
     t: "[今日]{きょう}は[昨日]{きのう}ほど[寒]{さむ}くないです。",
     why: "Correct: “today isn’t as cold as yesterday”."
    },
    {
     t: "[今日]{きょう}は[昨日]{きのう}と同じくらい[寒]{さむ}いです。",
     why: "Correct: “today is as cold as yesterday”."
    },
    {
     t: "[今日]{きょう}は[昨日]{きのう}より[寒]{さむ}いです。",
     why: "Correct: “today is colder than yesterday”."
    }
   ]
  },
  {
   id: "e3u10-q27",
   lesson: "e3u10-l3",
   level: 1,
   q: "「[健康]{けんこう}ほど大切なものはない。」 What does it mean?",
   options: [
    {
     t: "Nothing is as important as health.",
     ok: true,
     why: "B ほど～ものはない: nothing reaches B, so B is the most important."
    },
    {
     t: "Health is not very important.",
     why: "The negative belongs to ものはない (there is nothing), not to health."
    },
    {
     t: "Health is about as important as other things.",
     why: "The pattern puts health above everything else."
    },
    {
     t: "The healthier you are, the more important things become.",
     why: "That would need ～ば～ほど."
    }
   ]
  },
  {
   id: "e3u10-q28",
   lesson: "e3u10-l3",
   level: 3,
   q: "Your teenage son never tells you when he will be late. You say: “At least get in touch!” Complete: [連絡]{れんらく}（　）してよ。",
   options: [
    {
     t: "くらい",
     ok: true,
     why: "くらい marks the minimum: getting in touch is the least he can do."
    },
    {
     t: "ほど",
     why: "ほど shows degree or a standard; it can’t mean “at least”."
    },
    {
     t: "より",
     why: "より means “than”; there is no comparison here."
    },
    {
     t: "に[比]{くら}べて",
     why: "に[比]{くら}べて compares two things; it makes no sense here."
    }
   ]
  },
  {
   id: "e3u10-q29",
   lesson: "e3u10-l3",
   level: 2,
   q: "「[涙]{なみだ}が出るほど[笑]{わら}いました。」 ([涙]{なみだ} = tears) What does it mean?",
   options: [
    {
     t: "I laughed so much that tears came.",
     ok: true,
     why: "ほど shows degree: the first half says how much I laughed."
    },
    {
     t: "I laughed, then I cried.",
     why: "ほど doesn’t give an order of events; it shows how much."
    },
    {
     t: "I laughed less than I cried.",
     why: "There is no comparison of two amounts here."
    },
    {
     t: "I laughed about as much as usual.",
     why: "The first half describes an extreme degree, not an ordinary one."
    }
   ]
  },
  {
   id: "e3u10-q30",
   lesson: "e3u10-l3",
   level: 3,
   q: "At a clinic, the receptionist tells you: 「[十分]{じゅっぷん}ほどお待ちください。」 What does she mean?",
   options: [
    {
     t: "Please wait about ten minutes.",
     ok: true,
     why: "Number + ほど means “about”, a little more polite than くらい."
    },
    {
     t: "Please wait at least ten minutes.",
     why: "ほど doesn’t mean “at least”; only くらい has that use, and with a number both mean “about”."
    },
    {
     t: "Please wait no more than ten minutes.",
     why: "“No more than” would be [十分]{じゅっぷん}[以内]{いない}. ほど means “about”."
    },
    {
     t: "It is not as long as ten minutes.",
     why: "“Not as … as” needs ほど + a negative; here ほど simply follows a number."
    }
   ]
  },
  {
   id: "e3u10-q31",
   lesson: "e3u10-l4",
   level: 1,
   q: "「毎日料理するわけではありません。」 What does it mean?",
   options: [
    {
     t: "I don’t cook every day.",
     ok: true,
     why: "～わけではない denies only the “every day” part: partial negation. I do cook sometimes."
    },
    {
     t: "I never cook.",
     why: "That would be [全然]{ぜんぜん}料理しません. ～わけではない leaves room for “sometimes”."
    },
    {
     t: "I have to cook every day.",
     why: "That would be 料理しなければならない."
    },
    {
     t: "There’s no need to cook every day.",
     why: "That would be 料理することはない."
    }
   ]
  },
  {
   id: "e3u10-q32",
   lesson: "e3u10-l4",
   level: 1,
   q: "Complete with the correct form: 肉が[好]{す}き（　）わけではない。",
   options: [
    {
     t: "な",
     ok: true,
     why: "な-adjectives take な before わけ: [好]{す}きなわけではない."
    },
    {
     t: "だ",
     why: "だ doesn’t come before わけ; the form is な."
    },
    {
     t: "の",
     why: "の is not used here; な-adjectives take な."
    },
    {
     t: "で",
     why: "で would be the て-form of だ; before わけ, use な."
    }
   ]
  },
  {
   id: "e3u10-q33",
   lesson: "e3u10-l4",
   level: 3,
   q: "A friend invites Kaito to karaoke. He doesn’t dislike karaoke, but he is tired today and wants to say no gently. What does he say?",
   options: [
    {
     t: "カラオケが[嫌]{きら}いなわけじゃないんだけど、[今日]{きょう}はちょっと[疲]{つか}れてて…。",
     ok: true,
     why: "～わけじゃない denies the conclusion “he hates karaoke” and softens the refusal."
    },
    {
     t: "カラオケが[嫌]{きら}いなわけがないんだけど、[今日]{きょう}はちょっと[疲]{つか}れてて…。",
     why: "～わけがない means “there’s no way I’d dislike it”, far too strong for a gentle refusal."
    },
    {
     t: "カラオケは[嫌]{きら}いなんだけど、[今日]{きょう}はちょっと[疲]{つか}れてて…。",
     why: "This says he does dislike karaoke, which isn’t true, and it isn’t a gentle refusal."
    },
    {
     t: "カラオケが[嫌]{きら}いなものだけど、[今日]{きょう}はちょっと[疲]{つか}れてて…。",
     why: "～ものだ presents a general truth; it doesn’t make a gentle refusal."
    }
   ]
  },
  {
   id: "e3u10-q34",
   lesson: "e3u10-l4",
   level: 2,
   q: "Your friend offers to drive two hours to meet you at the airport. You say: 「わざわざ[迎]{むか}えに[来]{く}ることはないよ。」 What do you mean?",
   options: [
    {
     t: "There’s no need to come and meet me.",
     ok: true,
     why: "Dictionary form + ことはない: there’s no need to. わざわざ adds “go to the trouble of”."
    },
    {
     t: "You have never come to meet me before.",
     why: "That would be [来]{き}たことはない, with the た-form."
    },
    {
     t: "You must not come to meet me.",
     why: "That would be [来]{き}てはいけない; ことはない is reassurance, not a ban."
    },
    {
     t: "It’s not that you can’t come.",
     why: "That would be [来]{こ}られないことはない."
    }
   ]
  },
  {
   id: "e3u10-q35",
   lesson: "e3u10-l4",
   level: 2,
   q: "Which sentence means “I’ve never been to Okinawa”?",
   options: [
    {
     t: "[沖縄]{おきなわ}に行ったことはない。",
     ok: true,
     why: "た-form + ことはない is the experience pattern with は: have never done."
    },
    {
     t: "[沖縄]{おきなわ}に行くことはない。",
     why: "Dictionary form + ことはない means “there’s no need to go”."
    },
    {
     t: "[沖縄]{おきなわ}に行けないことはない。",
     why: "This is a weak yes: “it’s not that I can’t go”."
    },
    {
     t: "[沖縄]{おきなわ}に行くわけではない。",
     why: "This means “it’s not that I’m going”, denying a conclusion."
    }
   ]
  },
  {
   id: "e3u10-q36",
   lesson: "e3u10-l4",
   level: 3,
   q: "Your manager asks if you can work on Saturday. You say: 「行けないことはないんですが…」 What are you telling her?",
   options: [
    {
     t: "I can come, but I’d rather not.",
     ok: true,
     why: "～ないことはない is a double negative, a weak yes (“I could if I had to”); the trailing が… shows reluctance."
    },
    {
     t: "I definitely can’t come.",
     why: "The double negative means you can, at least in principle."
    },
    {
     t: "I’m very happy to come.",
     why: "A happy yes would be direct: はい、行けます. The weak yes and the trailing が… show reluctance."
    },
    {
     t: "There’s no need for me to come.",
     why: "That would be 行くことはない, about need, not ability."
    }
   ]
  },
  {
   id: "e3u10-q37",
   lesson: "e3u10-l4",
   level: 1,
   q: "「人は[誰]{だれ}でも年をとるものだ。」 Which use of ～ものだ is this?",
   options: [
    {
     t: "A general truth: that’s how things are",
     ok: true,
     why: "Everyone grows old: ～ものだ presents it as natural."
    },
    {
     t: "Advice: what you should do",
     why: "Growing old isn’t a choice or a rule of behavior."
    },
    {
     t: "A memory: what I used to do",
     why: "That use needs the た-form: ～たものだ."
    },
    {
     t: "A question about something forgotten",
     why: "That would be ～っけ."
    }
   ]
  },
  {
   id: "e3u10-q38",
   lesson: "e3u10-l4",
   level: 3,
   q: "Looking at an old photo, a grandfather says: 「[若]{わか}い[頃]{ころ}は、よくこの山に[登]{のぼ}ったものだ。」 What does he mean?",
   options: [
    {
     t: "He often climbed this mountain when young.",
     ok: true,
     why: "た-form + ものだ with よく: a fond memory of a past habit, something he used to do."
    },
    {
     t: "Young people should climb this mountain.",
     why: "Advice would use the dictionary form: [登]{のぼ}るものだ."
    },
    {
     t: "He climbed this mountain once when he was young.",
     why: "～たものだ is for repeated habits, not a single event."
    },
    {
     t: "He can’t remember whether he climbed it.",
     why: "That would be [登]{のぼ}ったっけ."
    }
   ]
  },
  {
   id: "e3u10-q39",
   lesson: "e3u10-l4",
   level: 1,
   q: "Which is a correctly formed polite ～っけ question?",
   options: [
    {
     t: "[会議]{かいぎ}は三時からでしたっけ？",
     ok: true,
     why: "Noun + でしたっけ is the polite form."
    },
    {
     t: "[会議]{かいぎ}は三時からっけ？",
     why: "Nouns need だ or でした before っけ."
    },
    {
     t: "[会議]{かいぎ}は三時からますっけ？",
     why: "ます attaches to verbs, not nouns."
    },
    {
     t: "[会議]{かいぎ}は三時からだっけです？",
     why: "です doesn’t follow っけ; the polite form is でしたっけ."
    }
   ]
  },
  {
   id: "e3u10-q40",
   lesson: "e3u10-l4",
   level: 3,
   q: "A hotel receptionist has forgotten a guest’s name. Which question is the most appropriate?",
   options: [
    {
     t: "[恐]{おそ}れ入りますが、お名前をもう一度[伺]{うかが}ってもよろしいでしょうか。",
     ok: true,
     why: "A cushion phrase, humble [伺]{うかが}う and a very polite “may I?”: right for a guest."
    },
    {
     t: "お名前、何でしたっけ？",
     why: "～でしたっけ is polite enough for colleagues, but too conversational for a guest."
    },
    {
     t: "名前、何だっけ？",
     why: "Casual ～だっけ is for friends and family."
    },
    {
     t: "お名前を言ってください。",
     why: "A bare request with ください sounds blunt to a guest, and it doesn’t apologize for asking again."
    }
   ]
  },
  {
   id: "e3u10-q41",
   lesson: "e3u10-l5",
   level: 1,
   q: "How is [風邪気味]{かぜぎみ} read?",
   options: [
    {
     t: "かぜぎみ",
     ok: true,
     why: "As a suffix, [気味]{ぎみ} is read ぎみ."
    },
    {
     t: "かぜきみ",
     why: "[気味]{きみ} alone is read きみ, but as a suffix the sound changes to ぎみ."
    },
    {
     t: "かぜけみ",
     why: "気 is read き (or け in some words), but [気味]{ぎみ} as a suffix is ぎみ."
    },
    {
     t: "ふうじゃぎみ",
     why: "[風邪]{かぜ} is a word with a special reading, かぜ."
    }
   ]
  },
  {
   id: "e3u10-q42",
   lesson: "e3u10-l5",
   level: 1,
   q: "What does [飽]{あ}きっぽい mean? ([飽]{あ}きる = get tired of something)",
   options: [
    {
     t: "quick to lose interest",
     ok: true,
     why: "Verb stem + っぽい: someone who gets bored easily, by nature."
    },
    {
     t: "looks bored right now",
     why: "っぽい after a verb stem describes a tendency, not how someone looks at one moment."
    },
    {
     t: "never gets bored",
     why: "っぽい means the person does it easily, not that they never do."
    },
    {
     t: "a little bored these days",
     why: "“A touch of, now” is ～[気味]{ぎみ}."
    }
   ]
  },
  {
   id: "e3u10-q43",
   lesson: "e3u10-l5",
   level: 2,
   q: "Complete with the correct form: 冬は運動不足に（　）です。(In winter, people tend not to get enough exercise.)",
   options: [
    {
     t: "なりがち",
     ok: true,
     why: "Verb ます stem + がち: なる → なり → なりがち."
    },
    {
     t: "なるがち",
     why: "がち follows the ます stem, not the dictionary form."
    },
    {
     t: "なりっぽい",
     why: "っぽい after a verb stem describes a person’s nature ([忘]{わす}れっぽい); なりっぽい isn’t a word."
    },
    {
     t: "なりらしい",
     why: "らしい follows a plain form, and it means “apparently”, not “tends to”."
    }
   ]
  },
  {
   id: "e3u10-q44",
   lesson: "e3u10-l5",
   level: 2,
   q: "Which sentence sounds **wrong**?",
   options: [
    {
     t: "姉は毎朝ジョギングしがちです。",
     ok: true,
     why: "This is the odd one. がち is for unwelcome tendencies; for a good habit, say ジョギングすることが多い or よくジョギングする."
    },
    {
     t: "姉は[最近]{さいきん}、[約束]{やくそく}を[忘]{わす}れがちです。",
     why: "Fine: forgetting promises is an unwelcome tendency."
    },
    {
     t: "[最近]{さいきん}は[曇]{くも}りがちな天気です。",
     why: "Fine: noun + がち, with な before a noun."
    },
    {
     t: "[祖父]{そふ}は冬になると病気がちです。",
     why: "Fine: 病気がち is one of the nouns that take がち."
    }
   ]
  },
  {
   id: "e3u10-q45",
   lesson: "e3u10-l5",
   level: 3,
   q: "Before a presentation at her internship, Aoi tells her manager she is a little nervous. Which fits best?",
   options: [
    {
     t: "少し[緊張]{きんちょう}[気味]{ぎみ}です。",
     ok: true,
     why: "～[気味]{ぎみ}: a slight sign of something now, in a neutral style that suits work."
    },
    {
     t: "少し[緊張]{きんちょう}がちです。",
     why: "がち is about something that tends to happen again and again, not how she feels now."
    },
    {
     t: "少し[緊張]{きんちょう}っぽいです。",
     why: "っぽい is casual, and [緊張]{きんちょう}っぽい sounds like a guess about someone else."
    },
    {
     t: "少し[緊張]{きんちょう}らしいです。",
     why: "らしい reports hearsay (“apparently”), which is strange for her own feelings."
    }
   ]
  },
  {
   id: "e3u10-q46",
   lesson: "e3u10-l5",
   level: 1,
   q: "Which is the humble verb for 会う, used when you meet someone you respect?",
   options: [
    {
     t: "お目にかかる",
     ok: true,
     why: "お目にかかる: I (humbly) meet you."
    },
    {
     t: "お会いになる",
     why: "お～になる is respectful, for the other person’s meeting."
    },
    {
     t: "ご[覧]{らん}になる",
     why: "ご[覧]{らん}になる is respectful for 見る."
    },
    {
     t: "[召]{め}し上がる",
     why: "[召]{め}し上がる is respectful for 食べる and 飲む."
    }
   ]
  },
  {
   id: "e3u10-q47",
   lesson: "e3u10-l5",
   level: 2,
   q: "A client is going to visit your office. You ask her politely when she will come. Which is correct?",
   options: [
    {
     t: "いつお[越]{こ}しになりますか。",
     ok: true,
     why: "お[越]{こ}しになる is respectful for the client’s coming."
    },
    {
     t: "いつ[参]{まい}りますか。",
     why: "[参]{まい}る is humble or [丁重語]{ていちょうご}, for your own side’s coming and going."
    },
    {
     t: "いつ[伺]{うかが}いますか。",
     why: "[伺]{うかが}う is humble, for your own visit to her."
    },
    {
     t: "いつお[来]{き}になりますか。",
     why: "[来]{く}る has no お～になる form; use いらっしゃる, お見えになる or お[越]{こ}しになる."
    }
   ]
  },
  {
   id: "e3u10-q48",
   lesson: "e3u10-l5",
   level: 3,
   q: "At the city office, a caller from the university asks for your section chief, Mr. Matsumoto, who is out. What do you say?",
   options: [
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}はただいま外出しております。",
     ok: true,
     why: "To an outsider, your own manager is your side: no title or さん, and humble おります."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[松本課長]{まつもとかちょう}はただいま外出していらっしゃいます。",
     why: "A title works like an honorific, and いらっしゃる raises him. Both are wrong for your own side."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}さんはただいま外出しております。",
     why: "さん raises your colleague in front of an outsider; use just the family name."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[松本]{まつもと}はただいま外出していらっしゃいます。",
     why: "いらっしゃる is respectful; for your own side, use the humble おります."
    }
   ]
  },
  {
   id: "e3u10-q49",
   lesson: "e3u10-l5",
   level: 2,
   q: "In a hotel, you tell a guest that the Wi-Fi is available to use. Which is correct?",
   options: [
    {
     t: "Wi-Fiをご[利用]{りよう}いただけます。",
     ok: true,
     why: "ご～いただける: “you can (kindly) use it”, a standard form for customers."
    },
    {
     t: "Wi-Fiをご[利用]{りよう}できます。",
     why: "ご～できる is the potential of humble ご～する, so it describes your own action. A common slip."
    },
    {
     t: "Wi-Fiをご[利用]{りよう}になられます。",
     why: "ご～になる + られる is double keigo. ご[利用]{りよう}になれます would be correct."
    },
    {
     t: "Wi-Fiを[利用]{りよう}いたします。",
     why: "いたす is humble: this means “I will use the Wi-Fi”."
    }
   ]
  },
  {
   id: "e3u10-q50",
   lesson: "e3u10-l5",
   level: 3,
   q: "At a service counter, you need a customer to wait a few minutes. Which request is the most polite?",
   options: [
    {
     t: "少々お待ちいただけないでしょうか。",
     ok: true,
     why: "お～いただく, a negative question and でしょうか: the top of the ladder."
    },
    {
     t: "ちょっと待って。",
     why: "A bare て-form is for friends and family."
    },
    {
     t: "待ってください。",
     why: "Polite, but a direct request; with customers it sounds too plain."
    },
    {
     t: "待っていただけますか。",
     why: "Polite and soft, but less respectful than お待ちいただけないでしょうか."
    }
   ]
  },
  {
   id: "e3u10-q51",
   lesson: "e3u10-l6",
   level: 1,
   q: "What is the ず-form (“without doing”) of する?",
   options: [
    {
     t: "せずに",
     ok: true,
     why: "する is the exception: ない → ず gives せず, so せずに."
    },
    {
     t: "しずに",
     why: "A common slip. The ず-form of する is せず, not しず."
    },
    {
     t: "さずに",
     why: "さず would come from a godan verb in す (話さない → 話さずに), not from する."
    },
    {
     t: "すずに",
     why: "ずに replaces ない in the ない-form, and する is the exception: しない, but せずに."
    }
   ]
  },
  {
   id: "e3u10-q52",
   lesson: "e3u10-l6",
   level: 3,
   q: "Before a party, Yến switched the air conditioner on so the room would be cool when the guests came. Kaito, on the other hand, forgot to switch his off when he went out. Which pair of sentences describes them correctly?",
   options: [
    {
     t: "Yến: エアコンをつけておいた。 Kaito: エアコンをつけたまま出かけた。",
     ok: true,
     why: "～ておく is done on purpose, ready for later; ～たまま is a state that carried on unchanged: he never switched it off."
    },
    {
     t: "Yến: エアコンをつけたまま出かけた。 Kaito: エアコンをつけておいた。",
     why: "The other way round: Kaito didn’t plan it, so ～ておく doesn’t fit him."
    },
    {
     t: "Yến: エアコンをつけっぱなしにした。 Kaito: エアコンをつけておいた。",
     why: "っぱなし is a careless state, which doesn’t fit Yến’s plan, and ～ておく doesn’t fit Kaito’s mistake."
    },
    {
     t: "Yến: エアコンをつけずに待った。 Kaito: エアコンをつけておいた。",
     why: "つけずに means Yến didn’t switch it on at all."
    }
   ]
  },
  {
   id: "e3u10-q53",
   lesson: "e3u10-l6",
   level: 2,
   q: "Megumi, a nurse, says: 「[夜勤]{やきん}の日は、ほとんど立ちっぱなしです。」 What does she mean?",
   options: [
    {
     t: "She is on her feet almost the whole time.",
     ok: true,
     why: "ます stem + っぱなし can mean “all the time, without a break”: 立ちっぱなし, standing the whole time."
    },
    {
     t: "She stands up and leaves the ward early.",
     why: "Nothing here is about leaving. っぱなし says the standing goes on and on."
    },
    {
     t: "She can hardly stand up after a night shift.",
     why: "That would need a potential: 立てない. 立ちっぱなし is standing for a long time."
    },
    {
     t: "She leaves things lying around on the ward.",
     why: "っぱなし can mean “left that way”, but here it follows 立つ (stand): she is the one standing."
    }
   ]
  },
  {
   id: "e3u10-q54",
   lesson: "e3u10-l6",
   level: 2,
   q: "「[本当]{ほんとう}は聞こえているのに、聞こえないふりをしている。」 What is the person doing?",
   options: [
    {
     t: "Pretending not to hear",
     ok: true,
     why: "ふりをする: they can hear, but act as if they can’t."
    },
    {
     t: "Really unable to hear",
     why: "[本当]{ほんとう}は聞こえている says they can hear. ふり is an act."
    },
    {
     t: "Seeming, as far as the speaker can tell, not to hear",
     why: "That would be 聞こえないようだ or 聞こえないみたい, the speaker’s impression. The speaker here knows the truth."
    },
    {
     t: "Refusing to listen because they’re upset",
     why: "Refusing would be 聞こうとしない. ふり is pretending, whatever the reason."
    }
   ]
  },
  {
   id: "e3u10-q55",
   lesson: "e3u10-l6",
   level: 2,
   q: "「地図のとおりに行ったら、[迷]{まよ}わずに着きました。」 What happened?",
   options: [
    {
     t: "I followed the map exactly and got there without getting lost.",
     ok: true,
     why: "のとおりに: just as the map showed. [迷]{まよ}わずに: without getting lost."
    },
    {
     t: "I didn’t follow the map, and I got lost.",
     why: "とおりに means you followed it, and [迷]{まよ}わずに means you didn’t get lost."
    },
    {
     t: "I went the opposite way to the map, but got there anyway.",
     why: "とおり is “just as”, not “against”."
    },
    {
     t: "I got lost, so I had to look at the map.",
     why: "～ずに is “without”: [迷]{まよ}わずに means no getting lost."
    }
   ]
  },
  {
   id: "e3u10-q56",
   lesson: "e3u10-l6",
   level: 1,
   q: "Which sentence means “I only have 500 yen”?",
   options: [
    {
     t: "五百円しかありません。",
     ok: true,
     why: "しか + a negative verb: only 500 yen, and that’s not much."
    },
    {
     t: "五百円しかあります。",
     why: "しか always needs a negative verb: しかありません."
    },
    {
     t: "五百円だけありません。",
     why: "だけ goes with a positive verb: 五百円だけあります."
    },
    {
     t: "五百円もありません。",
     why: "も + negative after an amount means “not even 500 yen”: you have less than that."
    }
   ]
  },
  {
   id: "e3u10-q57",
   lesson: "e3u10-l6",
   level: 3,
   q: "Rodrigo missed the last bus home from the plant, and his phone has died. He says: 「もう歩いて帰るしかない。」 What does he mean?",
   options: [
    {
     t: "There’s no other way: he’ll have to walk home.",
     ok: true,
     why: "Dictionary form + しかない: every other option is closed."
    },
    {
     t: "He only ever walks home; he never takes the bus.",
     why: "That would be a habit: いつも歩いて帰る. しかない here is about tonight’s lack of choice."
    },
    {
     t: "A rule at the plant says that staff must walk home.",
     why: "A rule would be ～なければならない. しかない means there is simply no other way."
    },
    {
     t: "He would like to walk home tonight.",
     why: "Wanting is ～たい. しかない says he has no choice."
    }
   ]
  },
  {
   id: "e3u10-q58",
   lesson: "e3u10-l6",
   level: 2,
   q: "「あの店はいつも人が[並]{なら}んでいる。おいしいに[違]{ちが}いない。」 How sure is the speaker, and why?",
   options: [
    {
     t: "Very sure, from what they have seen",
     ok: true,
     why: "～に[違]{ちが}いない is a firm conclusion drawn from signs: the lines."
    },
    {
     t: "Not sure at all: it’s only a possibility",
     why: "That would be おいしいかもしれない. に[違]{ちが}いない is much surer."
    },
    {
     t: "Sure, because a friend told them",
     why: "Hearsay would be おいしいそうだ or おいしいらしい. Here the evidence is the line."
    },
    {
     t: "Certain, because they have eaten there",
     why: "If they had eaten there, they would just say おいしい. に[違]{ちが}いない is a guess about something they haven’t checked."
    }
   ]
  },
  {
   id: "e3u10-q59",
   lesson: "e3u10-l6",
   level: 3,
   q: "A friend shows you a designer bag she bought online for 10,000 yen and says it’s real. You’re sure it isn’t. Which reply sounds natural between friends?",
   options: [
    {
     t: "「にせものに[決]{き}まってるよ。」",
     ok: true,
     why: "～に[決]{き}まってる: “obviously”, strong and conversational, right for a friend."
    },
    {
     t: "「にせものだに[違]{ちが}いない。」",
     why: "No だ before に[違]{ちが}いない: にせものに[違]{ちが}いない. It would also sound rather written."
    },
    {
     t: "「にせものかもしれないです。」",
     why: "かもしれない is only “maybe”, but you are sure."
    },
    {
     t: "「にせもののふりをしているよ。」",
     why: "ふりをする is pretending, which a bag can’t do."
    }
   ]
  },
  {
   id: "e3u10-q60",
   lesson: "e3u10-l6",
   level: 3,
   q: "Which sentence is **not** correct?",
   options: [
    {
     t: "[忘]{わす}れずにください。",
     ok: true,
     why: "Right, this one is wrong. Only ～ないで makes a request: [忘]{わす}れないでください."
    },
    {
     t: "[忘]{わす}れないでください。",
     why: "Correct: the usual “please don’t forget”."
    },
    {
     t: "[忘]{わす}れずに持ってきてください。",
     why: "Correct: ～ずに before a request verb, “please remember to bring it”."
    },
    {
     t: "[忘]{わす}れないで持ってきてください。",
     why: "Correct: the everyday version with ～ないで."
    }
   ]
  },
  {
   id: "e3u10-q61",
   lesson: "e3u10-l7",
   level: 1,
   q: "Which form comes before とたん?",
   options: [
    {
     t: "開けたとたん",
     ok: true,
     why: "とたん follows the た-form: A has just happened."
    },
    {
     t: "開けるとたん",
     why: "The dictionary form doesn’t work with とたん."
    },
    {
     t: "開けてとたん",
     why: "とたん doesn’t follow the て-form."
    },
    {
     t: "開けとたん",
     why: "とたん doesn’t follow the ます stem (that is っぱなし’s form)."
    }
   ]
  },
  {
   id: "e3u10-q62",
   lesson: "e3u10-l7",
   level: 2,
   q: "「ドアを開けたとたん、ねこが入ってきた。」 What happened?",
   options: [
    {
     t: "The cat came in the instant the door opened.",
     ok: true,
     why: "～たとたん: B happens immediately after A, often by surprise."
    },
    {
     t: "The cat was already inside when I opened the door.",
     why: "Finding something is ～たら: ドアを開けたら、ねこがいた."
    },
    {
     t: "I opened the door so that the cat could come in.",
     why: "Purpose would be ～ように (Unit 9): ねこが入れるように."
    },
    {
     t: "The cat came in some time after I opened the door.",
     why: "とたん means “at that very moment”, not later."
    }
   ]
  },
  {
   id: "e3u10-q63",
   lesson: "e3u10-l7",
   level: 3,
   q: "Toby is going to the station anyway. Mariya wants him to buy stamps there too. What does she say?",
   options: [
    {
     t: "「駅に行くついでに、切手を買ってきてくれる？」",
     ok: true,
     why: "ついでに: he is going anyway, so the stamps are an extra on the same trip."
    },
    {
     t: "「駅に行くかわりに、切手を買ってきてくれる？」",
     why: "かわりに means “instead of going”, but he still goes to the station."
    },
    {
     t: "「駅に行きながら、切手を買ってきてくれる？」",
     why: "ながら is two actions at the same moment; you can’t buy stamps while walking."
    },
    {
     t: "「駅に行ったとたん、切手を買ってきてくれる？」",
     why: "とたん is for sudden events, never a request."
    }
   ]
  },
  {
   id: "e3u10-q64",
   lesson: "e3u10-l7",
   level: 1,
   q: "「日本に来て以来、ずっとこのアパートに住んでいます。」 What does it mean?",
   options: [
    {
     t: "I have lived in this apartment ever since I came to Japan.",
     ok: true,
     why: "～て以来: from coming to Japan up to now, with ずっと for the whole time."
    },
    {
     t: "I lived in this apartment before I came to Japan.",
     why: "以来 starts at the turning point and runs forward to now."
    },
    {
     t: "I will live in this apartment after I come to Japan.",
     why: "以来 looks back from now; it isn’t used for the future."
    },
    {
     t: "I came to Japan and moved into this apartment much later.",
     why: "ずっと and 以来 say you have lived there the whole time since coming."
    }
   ]
  },
  {
   id: "e3u10-q65",
   lesson: "e3u10-l7",
   level: 2,
   q: "The forecast says: 「今夜から[明日]{あした}の朝にかけて、強い雨が[降]{ふ}るでしょう。」 Which description is closest?",
   options: [
    {
     t: "Heavy rain at times over tonight and tomorrow morning",
     ok: true,
     why: "から～にかけて: spread over the span, roughly, not necessarily all the time."
    },
    {
     t: "Heavy rain from exactly midnight until exactly 6 a.m.",
     why: "Exact times would use から～まで. にかけて is rough."
    },
    {
     t: "Heavy rain tonight, and a dry morning tomorrow",
     why: "にかけて says the span reaches into tomorrow morning."
    },
    {
     t: "Heavy rain only tomorrow morning",
     why: "The span starts tonight (今夜から)."
    }
   ]
  },
  {
   id: "e3u10-q66",
   lesson: "e3u10-l7",
   level: 2,
   q: "「この町は、[港]{みなと}を中心に[発展]{はってん}してきた。」 What does it say about the town?",
   options: [
    {
     t: "It grew up around its harbor.",
     ok: true,
     why: "～を中心に: the harbor is the center, and the town grew around it."
    },
    {
     t: "It was built in place of a harbor.",
     why: "“In place of” is ～かわりに."
    },
    {
     t: "It is about to build a harbor in the center.",
     why: "～てきた reports growth up to now; nothing is about to be built."
    },
    {
     t: "It grew everywhere except near the harbor.",
     why: "を中心に puts the harbor at the center of the growth."
    }
   ]
  },
  {
   id: "e3u10-q67",
   lesson: "e3u10-l7",
   level: 3,
   q: "Mr. Matsumoto is writing the title of a formal notice: 「[防災]{ぼうさい}（　）[説明会]{せつめいかい}のお知らせ」 (“Notice of a briefing on disaster preparedness”). Which fits?",
   options: [
    {
     t: "に[関]{かん}する",
     ok: true,
     why: "Before a noun, in formal writing: [防災]{ぼうさい}に[関]{かん}する[説明会]{せつめいかい}."
    },
    {
     t: "に[関]{かん}して",
     why: "に[関]{かん}して goes before a verb phrase. Before the noun [説明会]{せつめいかい}, use に[関]{かん}する."
    },
    {
     t: "について",
     why: "Before a noun, について needs の: についての. And a formal notice usually uses に[関]{かん}する."
    },
    {
     t: "ばかりか",
     why: "ばかりか is “not only… but even” and needs a second point."
    }
   ]
  },
  {
   id: "e3u10-q68",
   lesson: "e3u10-l7",
   level: 2,
   q: "「この店は、[値段]{ねだん}のわりにおいしいです。」 What is the speaker saying?",
   options: [
    {
     t: "The food is better than you’d expect at that price.",
     ok: true,
     why: "～わりに: the result goes beyond what the price would lead you to expect."
    },
    {
     t: "The food is good, and so it is expensive.",
     why: "That would be a reason: おいしいから高い. わりに measures against expectation."
    },
    {
     t: "The food is good, but it’s expensive to make up for it.",
     why: "A trade-off is ～かわりに (Lesson 3): 高いかわりに、おいしい."
    },
    {
     t: "The food is exactly as good as the price.",
     why: "わりに says the result is different from what you’d expect, not the same."
    }
   ]
  },
  {
   id: "e3u10-q69",
   lesson: "e3u10-l7",
   level: 3,
   q: "Which sentence is **not** correct?",
   options: [
    {
     t: "この[部屋]{へや}は広いにしては安い。",
     ok: true,
     why: "Right, this one is wrong. にしては doesn’t follow adjectives; say 広いわりに安い."
    },
    {
     t: "この[部屋]{へや}は広いわりに安い。",
     why: "Correct: い-adjective + わりに."
    },
    {
     t: "[初]{はじ}めてにしては[上手]{じょうず}だ。",
     why: "Correct: noun + にしては, with a specific standard."
    },
    {
     t: "父は年のわりに[若]{わか}く見える。",
     why: "Correct: noun + のわりに."
    }
   ]
  },
  {
   id: "e3u10-q70",
   lesson: "e3u10-l7",
   level: 3,
   q: "After the storm, Cheska writes to her family: 「大雨で、電車ばかりか、バスまで止まった。」 What happened?",
   options: [
    {
     t: "Not only the trains but even the buses stopped.",
     ok: true,
     why: "A ばかりか B まで: the second point goes further than you’d expect."
    },
    {
     t: "Only the trains stopped; the buses kept running.",
     why: "ばかりか adds the buses; it doesn’t leave them out."
    },
    {
     t: "The trains kept stopping, again and again.",
     why: "“Again and again” would be ～てばかり or ～たびに. ばかりか joins two things."
    },
    {
     t: "The buses stopped, but the trains didn’t.",
     why: "Both stopped: 電車ばかりか、バスまで."
    }
   ]
  }
 ]
});
