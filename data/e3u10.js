/* Japanese Foundations · Unit 10 (e3u10) · N3 grammar II */
/* N3 furigana rule (JFOUND_BRIEF §2): furigana on kanji above N4 and on irregular readings. */
ICA.addUnit({
 id: "e3u10",
 track: "e3",
 n: 10,
 title: "N3 grammar II",
 icon: "🧩",
 blurb: "“Even if” with ～ても and ～としても, “even” with ～さえ, and “not only” with ～だけでなく; time clauses with ～うちに, ～[間]{あいだ}, ～たびに and ～[最中]{さいちゅう}に; ～かわりに, ～に[比]{くら}べて, ～ほど and ～くらい; ～わけではない, ～ことはない, ～ものだ and ～っけ; the suffixes ～っぽい, ～がち and ～[気味]{ぎみ}; and keigo in real situations.",
 goals: [
  "Say “even if”, “even though” and “no matter how” with ～ても and ～としても, and tell them from ～たら and ～のに",
  "Point to an extreme example with ～さえ, set a single condition with ～さえ～ば, and add a second point with ～だけでなく～も",
  "Place events in time with ～うちに, ～[間]{あいだ} and ～[間]{あいだ}に, ～たびに and ～[最中]{さいちゅう}に",
  "Say “instead of” with ～かわりに, compare with ～に[比]{くら}べて, and show degree with ～ほど and ～くらい",
  "Deny part of an idea with ～わけではない, say “no need” with ～ことはない, use ～ものだ for what is natural, advisable or remembered, and check facts with ～っけ",
  "Describe tendencies and signs with ～っぽい, ～がち and ～[気味]{ぎみ}",
  "Use respectful and humble language in shops, on the phone, with visitors and in requests"
 ],
 read: [
  {
   book: "taekim",
   where: "Advanced Topics: “The minimum expectation” (さえ) and “Tendencies” (～がち); Special Expressions: “Expressing Amounts” (ほど) and “Honorific and Humble Forms”"
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
    q: "Kenji yawns and says: 「いくら[寝]{ね}ても、[眠]{ねむ}いんです。」 ([寝]{ね}る = sleep; [眠]{ねむ}い = sleepy) What is his problem?",
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
         "いくら[練習]{れんしゅう}しても、[上手]{じょうず}になりません。\nHowever much I practise, I don’t get any better."
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
      "**たとえ** in front of ～ても adds weight, like “even if” said with emphasis: たとえ[反対]{はんたい}されても、[留学]{りゅうがく}します (Even if they’re against it, I’m going to study abroad). たとえ doesn’t change the grammar; it warns the listener that a ～ても is coming.",
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
      "Notice that としても can follow a **past** form: [当]{あ}たったとしても, 急いだとしても. ～ても can’t: there is no *急いだても. Often both patterns are possible, and ～としても simply makes the “suppose” stronger: 今から急いでも[間]{ま}に[合]{あ}わない is also natural.",
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
         "[練習]{れんしゅう}さえすれば、[上手]{じょうず}になります。\nAs long as you practise, you’ll improve."
        ]
       ]
      },
      "Two more you will hear: [住所]{じゅうしょ}さえわかれば、送れます (as long as I know the address, I can send it) and あなたさえよければ (if it’s all right with you). The verb form is easy to get wrong: 飲みさえ**すれば**, not *飲みさえば."
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
       ex: "ミンさんは英語だけでなく、中国語も話せます。\nMin speaks not only English but also Chinese.\n\nこの店は安いだけでなく、味もいいです。\nThis restaurant isn’t just cheap; the food is good too.\n\nこの町は[静]{しず}かなだけでなく、[交通]{こうつう}も[便利]{べんり}です。\nThis town is not only quiet, it also has good transport.\n\n見るだけでなく、[実際]{じっさい}に作ってみましょう。\nLet’s not just watch; let’s actually make one.",
       label: "～だけでなく～も"
      },
      "In conversation you will hear **だけじゃなくて**; in writing, **だけではなく**. ～ばかりでなく means the same and is a little more formal.",
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
     q: "Sara writes: 「[昨日]{きのう}は[忙]{いそが}しくて、水を飲む時間さえなかった。」 What does she mean?",
     options: [
      {
       t: "She was so busy she didn’t even have time to drink water.",
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
     q: "Ana describes her new town. Tap each form that is **wrong**.",
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
       lead: "You already have ～とき (when), ～前に (before), ～てから (after) and ～ながら (while doing). N3 adds four patterns that say more exactly **how** an event sits in a stretch of time."
      },
      {
       fig: "<svg viewBox=\"0 0 340 352\"><text x=\"170\" y=\"20\" text-anchor=\"middle\">Where the event sits in time</text><text x=\"12\" y=\"48\">～あいだ: all through</text><rect class=\"d-soft\" x=\"40\" y=\"58\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><rect class=\"d-gold\" x=\"40\" y=\"78\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><text class=\"s\" x=\"170\" y=\"108\" text-anchor=\"middle\">the main action fills the period</text><text x=\"12\" y=\"136\">～あいだに: at one point inside</text><rect class=\"d-soft\" x=\"40\" y=\"146\" width=\"260\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"150\" cy=\"174\" r=\"8\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"198\" text-anchor=\"middle\">one event, somewhere in the period</text><text x=\"12\" y=\"226\">～うちに: before it changes</text><rect class=\"d-sage\" x=\"40\" y=\"236\" width=\"170\" height=\"14\" rx=\"4\" stroke-width=\"1.5\"/><path class=\"d-ink\" d=\"M218 236V252\" stroke-width=\"2.5\"/><text class=\"s\" x=\"258\" y=\"248\" text-anchor=\"middle\">change</text><circle class=\"d-rose\" cx=\"130\" cy=\"264\" r=\"8\" stroke-width=\"2\"/><text x=\"12\" y=\"296\">～たびに: every time</text><circle class=\"d-rose\" cx=\"70\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"140\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"210\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><circle class=\"d-rose\" cx=\"280\" cy=\"312\" r=\"7\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"340\" text-anchor=\"middle\">the same result each time it happens</text></svg>",
       alt: "Four timelines. あいだ: a background bar with a second bar of the same length beneath it; the main action fills the period. あいだに: a background bar with one dot under it; one event somewhere in the period. うちに: a shorter bar that ends at a vertical line labelled change, with a dot before the line. たびに: four dots in a row; the same result each time it happens.",
       cap: "Ask: does the main action fill the period, happen once inside it, beat a change, or repeat?"
      },
      "Each section below takes one pattern. The last section puts them side by side with their nearest neighbours."
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
       ex: "夏休みの[間]{あいだ}、ずっと国に帰っていました。\nI was back home the whole summer holiday.\n\n私が料理している[間]{あいだ}、[夫]{おっと}はテレビを見ていました。\nWhile I was cooking, my husband was watching TV.",
       label: "～あいだ: all through the period"
      },
      {
       ex: "夏休みの[間]{あいだ}に、[運転免許]{うんてんめんきょ}を[取]{と}りました。\nI got my driving licence during the summer holiday.\n\n母が[寝]{ね}ている[間]{あいだ}に、[部屋]{へや}を[掃除]{そうじ}しました。\nI cleaned the room while my mother was asleep.",
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
      "[最中]{さいちゅう} is for an **activity** with a busy peak: a meeting, a meal, a shower, a game. It doesn’t suit long states: for “while I was living in Tokyo”, say 東京に住んでいた[間]{あいだ}に or 住んでいたとき, not *住んでいる[最中]{さいちゅう}に.",
      {
       h: "Near neighbours"
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
       "all through the summer holiday",
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
     q: "Min writes about a weekend visit. Tap each phrase that is **wrong**.",
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
     q: "Kenji wants to say: “I want to see a lot of Japan while I’m a student.” Which is correct?",
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
       t: "You can’t use the lift at any time while the inspection is going on.",
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
    q: "Lucía says: 「[今年]{ことし}の夏は、去年ほど[暑]{あつ}くないですね。」 Which summer was hotter?",
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
      "が or けど would also join these sentences. かわりに adds the idea of a **trade-off**: one side pays for the other.",
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
       warn: "In a positive sentence, ほど can’t mean “as … as”: *姉は母ほど[背]{せ}が高い is wrong. Use くらい for “as … as” (next section), or より for “more … than”."
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
      "ほど can’t do this: *自分の[部屋]{へや}ほど自分で[掃除]{そうじ}しなさい makes no sense. With a person, this くらい can sound dismissive (“it’s only…”), so it suits advice and complaints.",
      {
       h: "All four in a review"
      },
      "Reviews and comparisons of products are a natural home for this lesson’s patterns. Here Dmitri writes about his new phone:",
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
       "A flat far from the station is cheaper: the low rent makes up for the distance."
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
     q: "A friend stayed at your flat for a week, and you are annoyed. Which sentence says “At least wash your own dishes”?",
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
     q: "Hana reviews her new camera. Tap each phrase that is **wrong**.",
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
    q: "Min’s friend offers her some nattō (fermented soybeans). Min says: 「[嫌]{きら}いなわけではないんですが…」 What does she mean?",
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
      "The listener expects something (money brings happiness; every Japanese person likes sushi), and ～わけではない says “not necessarily”. It is softer than a plain negative, which is why it is so useful for polite refusals and for disagreeing gently."
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
      "Unit 9 taught ～わけだ, “so that’s why” ([[wake]], {{hazu-wake-beki}}). Two more look similar but mean something quite different, so learn to recognise them:",
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
       ex: "[心配]{しんぱい}することはありませんよ。\nThere’s no need to worry.\n\nわざわざ[来]{く}ることはないよ。電話で[十分]{じゅうぶん}だから。\nYou don’t need to come all this way. A phone call is enough.\n\n[謝]{あやま}ることはないよ。あなたのせいじゃないんだから。\nThere’s no need to apologise. It isn’t your fault.",
       label: "～ことはない"
      },
      "It is close to ～なくてもいい ([[nakute-mo-ii]], Unit 6), but more emphatic: ～なくてもいい simply gives permission not to do something; ～ことはない says firmly that it isn’t necessary, usually to reassure or encourage the listener. わざわざ (go to the trouble of) and そんなに (that much) often come with it.",
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
      "The last example adds feeling: ～ものだ often comes with a sigh of wonder or reflection, especially with adjectives such as 早い, [不思議]{ふしぎ}だ (strange) or [嬉]{うれ}しい."
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
      "Compare ～べきだ ([[beki]], Unit 9). べき gives **your own** judgment of what is right: もっと勉強するべきだ (you ought to study more). ものだ presents the advice as a general rule of good behaviour."
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
       ex: "[会議]{かいぎ}は何時からだっけ？\nWhat time does the meeting start again?\n\nあの人の名前、何だっけ。\nWhat was that person’s name? (to yourself)\n\nもう[払]{はら}ったっけ？\nDid I already pay?\n\n[明日]{あした}は休みでしたっけ？\nTomorrow is a day off, isn’t it? (just checking)\n\n田中さんも[来]{く}るんでしたっけ？\nIs Tanaka coming too? (I think I heard that)",
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
      "These patterns often turn up together in friendly talk. Min and Sara are colleagues:",
      {
       ex: "ミン：来週の[発表]{はっぴょう}、何曜日だっけ？\nサラ：水曜日だよ。\nミン：[準備]{じゅんび}が[全然]{ぜんぜん}終わらなくて…。日本語で話すのが[嫌]{いや}なわけじゃないんだけど、すごく[緊張]{きんちょう}する。\nサラ：そんなに[心配]{しんぱい}することはないよ。[最初]{さいしょ}はだれでも[緊張]{きんちょう}するものだよ。私も一年目は、[発表]{はっぴょう}の前の日によく[眠]{ねむ}れなくなったものだよ。\nミン：そうなんだ。ちょっと安心した。\n\nMin: What day is next week’s presentation again?\nSara: Wednesday.\nMin: I’m nowhere near ready… It’s not that I don’t like speaking in Japanese, but I get really nervous.\nSara: There’s no need to worry that much. Everyone gets nervous at first. In my first year, I often couldn’t sleep the night before a presentation.\nMin: Really? That makes me feel a bit better.",
       label: "Two colleagues"
      },
      {
       list: [
        "**何曜日だっけ**: Min was told the day and has half forgotten it.",
        "**[嫌]{いや}なわけじゃない**: she denies the conclusion Sara might draw, that she dislikes speaking Japanese.",
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
      "The full reference is in {{partial-negation}}, and ～ものだ and ～っけ are summarised in {{n3-grammar-patterns-2}}.",
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
     q: "After a lecture in Japanese, Tomás says: 「[全部]{ぜんぶ}わかったわけではありません。」 What does he mean?",
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
     q: "A friend keeps apologising for being five minutes late. You want to reassure her. Complete: 「[謝]{あやま}る（　）よ。」",
     options: [
      {
       t: "ことはない",
       ok: true,
       why: "Right. ～ことはない: “there’s no need to apologise.”"
      },
      {
       t: "ものだ",
       why: "～ものだ would mean “you should apologise”, the opposite of reassuring her."
      },
      {
       t: "わけではない",
       why: "“It’s not that you apologise” makes no sense as reassurance."
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
     q: "Ana is asked if she can eat raw fish. She can, but she doesn’t enjoy it. Which answer fits best?",
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
       t: "Being expensive doesn’t necessarily make food good.",
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
    "Recognise and use keigo in shops, on the phone, with visitors and in announcements",
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
         "colour or substance noun",
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
      "**～っぽい is mostly casual.** It belongs to everyday speech. A few っぽい words are ordinary vocabulary in any style (白っぽい服, “whitish clothes”, even appears in news reports), but in formal speech and writing choose another word for most of them: [風邪]{かぜ}[気味]{ぎみ} rather than [風邪]{かぜ}っぽい. In very casual speech, especially among younger speakers, it can even follow a whole sentence: [彼]{かれ}、[来]{こ}ないっぽい (looks like he isn’t coming). Recognise this, but don’t use it in polite speech.",
      {
       tip: "子どもっぽい (childish) criticises an adult; 子どもらしい (just as a child should be) praises a child. That らしい is the “typical of” use from Unit 7 ([[rashii]])."
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
      "For **good** habits, がち usually sounds wrong. Use ～ことが多い or よく instead: [週末]{しゅうまつ}は[公園]{こうえん}に行くことが多い (I often go to the park at weekends)."
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
       tip: "You don’t need to produce every form. Start by **recognising** them, and use a few set phrases well. Respect shows more in a careful です・ます than in a shaky special verb."
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
      "You will also hear shop phrases such as 「こちら、カレーになります」 for 「カレーでございます」 and 「千円からお[預]{あず}かりします」 for 「千円お[預]{あず}かりします」. They are very common, but many people and guides criticise them as “part-time-job keigo” (バイト[敬語]{けいご}). You don’t need to copy them: ～でございます and 千円お[預]{あず}かりします are always safe."
     ]
    },
    {
     h: "On the phone",
     body: [
      "A caller from another company phones Hinata Trading (an invented company). The receptionist’s colleague, Tanaka, is away from his desk.",
      {
       ex: "[受付]{うけつけ}：はい、ひなた[商事]{しょうじ}でございます。\nリー：こもれび[物産]{ぶっさん}のリーと[申]{もう}します。いつもお世話になっております。[営業部]{えいぎょうぶ}の[田中様]{たなかさま}はいらっしゃいますか。\n[受付]{うけつけ}：リー[様]{さま}ですね。いつもお世話になっております。[申]{もう}し[訳]{わけ}ございません。田中はただいま[席]{せき}を外しております。[戻]{もど}りましたら、こちらからお電話いたしましょうか。\nリー：はい、お[願]{ねが}いいたします。\n[受付]{うけつけ}：[念]{ねん}のため、お[電話番号]{でんわばんごう}を[伺]{うかが}ってもよろしいでしょうか。\nリー：はい。（[番号]{ばんごう}を言う）\n[受付]{うけつけ}：[承知]{しょうち}いたしました。田中に[申]{もう}し[伝]{つた}えます。[失礼]{しつれい}いたします。",
       label: "A business phone call"
      },
      {
       list: [
        "**いつもお世話になっております**: the standard greeting between business contacts, roughly “thank you for your continued support”. Both sides say it.",
        "**[田中様]{たなかさま} and 田中**: the caller raises Tanaka with [様]{さま}; the receptionist, speaking to an outsider about her own colleague, uses no さん and the humble おります. This is [[uchi-soto|ウチ・ソト]].",
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
      "～ていただけますか is the humble potential of いただく: “could I receive the favour of…?”. A negative question (～ていただけませんか) or でしょうか softens it further. Add a cushion phrase ([[kushion-kotoba]]) for a bigger request: [恐]{おそ}れ入りますが、こちらにお名前をご[記入]{きにゅう}いただけますか (Excuse me, could you write your name here?).",
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
         "(to a visitor) [部長]{ぶちょう}の田中さんがいらっしゃいます。",
         "[部長]{ぶちょう}の田中が[参]{まい}ります。",
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
      "Keigo takes years for everyone, including Japanese speakers starting their first job. People forgive small slips when your respect is clear, so keep practising the set phrases until they come out on their own.",
      "That completes the N3 grammar in this track. Unit 11 turns to the N3 kanji, which you have been reading with furigana in this unit. Short daily review pays off, and forgetting and relearning is a normal part of it.",
      {
       lab: "kl-n3",
       t: "Practise: the N3 kanji, many of which appear in this unit’s examples"
      },
      {
       lab: "kl-n3-vocab",
       t: "Practise: N3 vocabulary, including the words in this unit"
      },
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
     q: "Mei says about her brother: 「兄は[忘]{わす}れっぽいんです。」 What does she mean?",
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
       "Colour + っぽい: close to white."
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
     q: "Kenji often leaves his umbrella on the train. Which sentence says this correctly?",
     options: [
      {
       t: "ケンジさんは[傘]{かさ}を[忘]{わす}れがちです。",
       ok: true,
       why: "Right. Verb stem + がち keeps the object: he tends to forget his umbrella."
      },
      {
       t: "ケンジさんは[傘]{かさ}を[忘]{わす}れっぽいです。",
       why: "[忘]{わす}れっぽい is an adjective about the person, so it can’t take [傘]{かさ}を. ケンジさんは[忘]{わす}れっぽいです alone would be fine."
      },
      {
       t: "ケンジさんは[傘]{かさ}を[忘]{わす}れ[気味]{ぎみ}です。",
       why: "[気味]{ぎみ} means a slight condition right now, not something that keeps happening."
      },
      {
       t: "ケンジさんは[傘]{かさ}を[忘]{わす}れらしいです。",
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
       t: "はい、ひなた[商事]{しょうじ}でございます。",
       why: "She answers with the company name and でございます."
      },
      {
       t: "いつもお世話になっております。",
       why: "Once the caller gives his name, she returns the standard business greeting."
      },
      {
       t: "[申]{もう}し[訳]{わけ}ございません。田中はただいま[席]{せき}を外しております。",
       why: "She apologises and explains that her colleague is away, without さん."
      },
      {
       t: "[念]{ねん}のため、お[電話番号]{でんわばんごう}を[伺]{うかが}ってもよろしいでしょうか。",
       why: "She offers a call back, then asks for the number."
      },
      {
       t: "[承知]{しょうち}いたしました。田中に[申]{もう}し[伝]{つた}えます。",
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
      "、ありがとうございます。[部長]{ぶちょう}の",
      {
       t: "田中さん",
       flag: true,
       why: "Wrong. Speaking to an outsider about her own boss, she should say 田中, with no さん."
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
       why: "This is polite: “could I receive the favour of…?”."
      },
      {
       t: "すみません、写真を[撮]{と}ってくださいませんか。",
       why: "This is polite too: くださる is the respectful verb for くれる."
      }
     ]
    }
   ],
   apply: {
    intro: "Practise the suffixes on yourself, and rehearse keigo for situations you will really meet. Keep the notes for yourself.",
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
     "**さえ～ば and ～ば～ほど.** Both use ば, but they say different things: [練習]{れんしゅう}さえすれば[上手]{じょうず}になる (practice is all it takes) against [練習]{れんしゅう}すればするほど[上手]{じょうず}になる (the more you practise, the better you get; see [[ba-hodo]]).",
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
     "**～[間]{あいだ}** means “all through a period”: 夏休みの[間]{あいだ}、ずっと[働]{はたら}いていた (I worked all through the summer holiday). **～[間]{あいだ}に** means “at some point during it”: 夏休みの[間]{あいだ}に[免許]{めんきょ}を[取]{と}った (I got my licence during the summer holiday).",
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
     "**～うちに with a negative.** ～ないうちに can’t be replaced by a positive ～うちに with the opposite meaning: *[暗]{くら}くなるうちに is wrong for “before it gets dark”. The negative literally means “while it hasn’t yet…”. Note also ～うちに use (2) can take a dictionary form with repeated actions: 何度も会ううちに[仲良]{なかよ}くなった (we became friends as we kept meeting).",
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
     "**Positive ほど.** ほど can appear in positive sentences, but only for degree (～ほど[疲]{つか}れた) or amount (三十人ほど), not for “as … as”. *姉は母ほど[背]{せ}が高い is not natural Japanese.",
     "**ほど in fixed phrases.** それほど～ない (not that…), 思ったほど～ない (not as … as I thought) and ～ほどではない (not to the point of) are very common. [驚]{おどろ}くほど (surprisingly) and 死ぬほど (casual: incredibly) are set intensifiers.",
     "**～ば～ほど** (the more…, the more…) is a separate pattern, taught in Unit 9 ([[ba-hodo]]). Don’t read 安ければ安いほど as a comparison with a standard.",
     "**～に[比]{くら}べて in writing.** Reports and news prefer ～に[比]{くら}べて, ～と[比]{くら}べると and the more formal ～に[比]{ひ}して (often listed at N1). In academic Japanese, a phrase like 前年に[比]{くら}べて[増加]{ぞうか}した is typical; see {{written-vs-spoken-japanese}}.",
     "**くらい after こ・そ・あ・ど.** これくらい, それぐらい and どのくらい (how much, how long) are very common in speech. どのくらいかかりますか (How long does it take?) is the everyday question about time and distance.",
     "**～かわりに.** A related pattern, ～かわりに (instead of; in exchange for; but to make up for it), is summarised in {{n3-grammar-patterns-2}}."
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
     "**っぽい and らしい.** 子どもっぽい criticises an adult as childish; 子どもらしい praises a child for being just as a child should be ([[rashii]])."
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
     "Start by recognising these forms and learning a few set phrases well. Everyone, including Japanese speakers in their first job, takes years to feel at home in keigo."
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
     "**Shops.** [何名様]{なんめいさま}ですか, ご注文はお[決]{き}まりですか, かしこまりました, お待たせいたしました, ～でございます. Common shop phrases such as 「～になります」 and 「～からお[預]{あず}かりします」 are often criticised as “part-time-job keigo”; the safe standard forms are ～でございます and 千円お[預]{あず}かりします.",
     "**The phone.** いつもお世話になっております; 田中はただいま[席]{せき}を外しております (no さん for your colleague to an outsider); お電話いたしましょうか; [伺]{うかが}ってもよろしいでしょうか; [申]{もう}し[伝]{つた}えます.",
     "**Visitors.** お[越]{こ}しいただき、ありがとうございます; [担当]{たんとう}の者が[参]{まい}ります (者 for your side, [方]{かた} for theirs).",
     "**Requests.** ～ていただけますか (humble potential of いただく), ～ていただけませんか (softer), お～いただけますか, お～いただけないでしょうか, with a cushion phrase such as [恐]{おそ}れ入りますが ([[kushion-kotoba]])."
    ],
    pro: [
     "**Special verbs and regular patterns.** Respectful: special verbs such as いらっしゃる, おっしゃる, なさる, [召]{め}し上がる and くださる, and regular patterns such as お～になる, ～れる・～られる, お～です and お～ください. Humble: special verbs such as [伺]{うかが}う, [申]{もう}し上げる, [存]{ぞん}じ上げる, [差]{さ}し上げる, いただく, お目にかかる, [拝見]{はいけん}する and [拝借]{はいしゃく}する, and regular お～する and お～いただく. The 2007 [敬語]{けいご}の[指針]{ししん} sort these into five kinds; {{keigo-system}} explains the system.",
     "**Accepted doubles.** お見えになる (お～になる on 見える) is technically double keigo but accepted by custom, as is お[召]{め}し上がりになる. おっしゃられる and お帰りになられる are not; see {{keigo-mistakes}}.",
     "**Potential forms.** ご～できる is the potential of humble ご～する, so 「ご[利用]{りよう}できます」 for customers is a common slip. The guidelines’ fix is ご[利用]{りよう}になれます; ご[利用]{りよう}いただけます is also widely used.",
     "**[参]{まい}る for trains.** 電車が[参]{まい}ります uses [参]{まい}る as [丁重語]{ていちょうご} ([謙譲語]{けんじょうご}Ⅱ): polite to the listeners, raising no one. That is why it can describe a train.",
     "**～させていただく** has spread widely and is often felt to be overused. The guidelines treat it as fitting when you act with the other person’s permission and benefit from it; e1u8 covers this in {{keigo-mistakes}}.",
     "**Manual keigo.** The set phrases taught in shop and call-centre manuals (マニュアル[敬語]{けいご}), such as 「～になります」 for 「～でございます」, are widely discussed and often criticised in Japan. Learners can rely on the standard forms and simply recognise the others."
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
     "Unit 9 covers purpose, decisions, ～ところ, ～はず・～わけ・～べき, wishes, causes with feeling and compound particles ({{n3-grammar-patterns-1}}). Unit 10 covers concession ({{concession-temo}}), time clauses ({{time-clauses-uchi-ni}}), comparison and degree ({{degree-hodo-kurai}}), partial negation ({{partial-negation}}), tendencies ({{feelings-and-tendencies}}) and keigo in practice ({{keigo-in-practice}}).",
     "The JLPT publishes no official grammar list, so N3 lists differ slightly between textbooks. The patterns here appear in all the common lists.",
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
       ]
      ]
     },
     "**～かわりに.** Noun + の代わりに or verb + かわりに: (1) instead of ([部長]{ぶちょう}の代わりに[会議]{かいぎ}に出た); (2) in exchange (…教えるかわりに、…教えてもらう); (3) to make up for it, with adjectives ([狭]{せま}いかわりに安い, [不便]{ふべん}なかわりに[静]{しず}か). At the start of a sentence: その代わり."
    ],
    pro: [
     "**～ものだ** has three main uses. (1) What is natural: 人は[間違]{まちが}えるものだ, often with feeling: 時間がたつのは早いものだ. (2) What one should do, by common sense: 話は[最後]{さいご}まで聞くものだ; negative ～ものではない. (3) With the た-form, fond memories of a past habit: よくこの川で[泳]{およ}いだものだ. Casual: もんだ. Compare ～べきだ (Unit 9), the speaker’s own judgment. Don’t confuse it with the casual excuse ～もん (だって知らなかったんだもん).",
     "**～っけ** checks something you half remember. Casual: ～だっけ, ～だったっけ, ～たっけ, ～んだっけ; polite: ～でしたっけ, ～ましたっけ, ～んでしたっけ. It suits conversation with friends, colleagues and teachers, but not customers or formal settings, where a direct polite question is better (お名前をもう一度[伺]{うかが}ってもよろしいでしょうか). In stories, ～たっけ can also look back with nostalgia.",
     "**Choosing between near neighbours** is the hard part of N3: ～ても or ～のに, ～[間]{あいだ} or ～[間]{あいだ}に, ほど or くらい, っぽい or [気味]{ぎみ}. Each lesson has a comparison table; when real overlap exists, the lessons say so, and good test questions give a context that leaves only one answer.",
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
     t: "However much I begged, my father wouldn’t allow it.",
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
   q: "Mei is tired of calling a friend who never answers. She wants to say: “Whenever I call, he’s out.” Which is correct?",
   options: [
    {
     t: "いつ電話しても、[彼]{かれ}は[留守]{るす}です。",
     ok: true,
     why: "Question word + ～ても: “whenever I call, it makes no difference”."
    },
    {
     t: "いつ電話したら、[彼]{かれ}は[留守]{るす}です。",
     why: "A question word like いつ needs ～ても for “whenever”; ～たら gives an “if, then” link."
    },
    {
     t: "いつ電話するのに、[彼]{かれ}は[留守]{るす}です。",
     why: "のに can’t follow a question word to mean “whenever”, and it needs a single real fact."
    },
    {
     t: "いつ電話して、[彼]{かれ}は[留守]{るす}です。",
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
   q: "Kenji says: 「せっかく作ったのに、だれも食べなかった。」 (せっかく = with all the effort) How does he feel?",
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
   q: "Which is the correct way to say “As long as you practise, you’ll improve”?",
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
   q: "Ana wants to recommend a café: it is cheap, and the coffee is good as well. Which sentence says this?",
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
   q: "Kenji’s mother wants him home before dark. What does she say?",
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
   q: "Sara phones a friend, who answers: 「ごめん、今、[晩]{ばん}ごはんの[最中]{さいちゅう}なんだ。あとでかけ[直]{なお}すね。」 What is happening?",
   options: [
    {
     t: "The friend is in the middle of dinner and will call back.",
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
     t: "The friend eats dinner every time Sara calls.",
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
   q: "Min wants to say: “As we kept meeting, before I knew it I had come to like her.” Which is natural?",
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
   q: "Lucía describes her flat to a friend: it is small, but the low rent makes up for it. Which sentence says this?",
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
     t: "I don’t cook every day (but I do sometimes).",
     ok: true,
     why: "～わけではない denies only the “every day” part: partial negation."
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
   q: "A friend invites Tomás to karaoke. He doesn’t dislike karaoke, but he is tired today and wants to say no gently. What does he say?",
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
     t: "You don’t need to go to the trouble of coming to meet me.",
     ok: true,
     why: "Dictionary form + ことはない: there’s no need to."
    },
    {
     t: "You have never come to meet me.",
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
     t: "I could come if I had to, but I’d rather not.",
     ok: true,
     why: "～ないことはない is a double negative, a weak yes; the trailing が… shows reluctance."
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
     why: "Growing old isn’t a choice or a rule of behaviour."
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
     t: "When he was young, he often used to climb this mountain.",
     ok: true,
     why: "た-form + ものだ with よく: a fond memory of a past habit."
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
     why: "A bare request with ください sounds blunt to a guest, and it doesn’t apologise for asking again."
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
   q: "Before a presentation at work, Priya tells her manager she is a little nervous. Which fits best?",
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
   q: "A caller from another company asks for your manager, Suzuki, who is out. What do you say?",
   options: [
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[鈴木]{すずき}はただいま外出しております。",
     ok: true,
     why: "To an outsider, your own manager is your side: no title or さん, and humble おります."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[鈴木部長]{すずきぶちょう}はただいま外出していらっしゃいます。",
     why: "A title works like an honorific, and いらっしゃる raises him. Both are wrong for your own side."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[鈴木]{すずき}さんはただいま外出しております。",
     why: "さん raises your colleague in front of an outsider; use just the family name."
    },
    {
     t: "[申]{もう}し[訳]{わけ}ございません。[鈴木]{すずき}はただいま外出していらっしゃいます。",
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
  }
 ]
});
