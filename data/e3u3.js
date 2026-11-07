/* Japanese Foundations · Unit 3 (e3u3) · N5 grammar II */
ICA.addUnit({
  id:"e3u3", track:"e3", n:3, title:"N5 grammar II", icon:"🧩",
  blurb:"The て-form and everything built on it (requests, permission, rules and ～ています), the plain ない and た forms, ～たい and ～ないでください, reasons with から, numbers and counters with their sound changes, comparisons, and time, dates, durations and how often.",
  goals:[
    "Build the て-form of any verb, including the exception [行]{い}く → [行]{い}って, and join actions and descriptions with it",
    "Make requests, ask for and give permission, and state rules with ～てください, ～てもいいです and ～てはいけません",
    "Use ～ています for actions in progress, habits and continuing states",
    "Build the plain ない-form and た-form, and use ～たい, ～ないでください and から",
    "Count people, things, animals, floors, times and minutes with the right counter and its sound changes",
    "Compare things with より, のほう and いちばん",
    "Tell the time, say days, months and dates (with their special readings), and talk about how long and how often"
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e3u3-l1", title:"The て-form: one form, many jobs", minutes:55,
   hook:{q:"The verb [書]{か}く (write) becomes [書]{か}いて in its て-form. What is the て-form of [行]{い}く (go)?", options:["[行]{い}いて","[行]{い}って","[行]{い}きて","[行]{い}くて"], answer:1, reveal:"**[行]{い}って.** Almost every verb that ends in く follows [書]{か}く → [書]{か}いて, so [行]{い}いて is a very sensible guess. But [行]{い}く is the one common exception: its て-form is [行]{い}って, and its past form is [行]{い}った. This lesson gives you the whole system, exception included, so that you can build the て-form of any verb you meet."},
   goals:[
     "Explain what the て-form is and name the jobs it does in this unit",
     "Build the て-form of ichidan verbs and of the irregular verbs する and [来]{く}る",
     "Build the て-form of any godan verb from its last kana, including the exception [行]{い}く → [行]{い}って",
     "Tell godan verbs that end in -iru or -eru (such as [帰]{かえ}る) from ichidan verbs by looking at the ます-form",
     "Join actions and descriptions in one sentence with the て-form"
   ],
   learn:[
    {h:"One form, many jobs", body:[
      {lead:"Japanese verbs change their endings to do different jobs. One of the most useful endings is the て-form: the form that ends in て or で, such as [食]{た}べて, [書]{か}いて and [飲]{の}んで."},
      "On its own, the [[te-form]] has no tense and no politeness. It is a connecting piece, like the joint on a building toy: you snap something onto it. Snap on ください and you have a polite request. Snap on います and you have an action in progress. Put it between two verbs and it means “and then”.",
      {table:[["Built on the て-form","Meaning","Example"],["～て、～","and (then)","[朝]{あさ}ごはんを[食]{た}べて、[学校]{がっこう}へ[行]{い}きます。\nI eat breakfast and then go to school."],["～てください","please do","ちょっと[待]{ま}ってください。\nPlease wait a moment."],["～てもいいです","you may","ここに[座]{すわ}ってもいいですよ。\nYou can sit here."],["～てはいけません","you must not","ここで[写真]{しゃしん}をとってはいけません。\nYou must not take photos here."],["～ています","is doing; is (in a state)","[今]{いま}、[本]{ほん}を[読]{よ}んでいます。\nI’m reading a book now."]]},
      "This lesson teaches how to build the て-form and how to join sentences with it. Lesson 2 uses it for requests, permission, rules and ～ています. The rules take a little practice, but there are only a handful of them, and they work for every verb you will meet.",
      "Before you start, make sure you know the three [[verb-group|verb groups]] and the [[dictionary-form]] from Unit 2 ({{verb-groups}}). Everything below depends on them."
    ]},
    {h:"Ichidan verbs and the two irregular verbs", body:[
      "[[ichidan-verb|Ichidan verbs]] are the easy group. Their dictionary form ends in -iru or -eru, and the final る simply drops off before ます. The て-form works the same way: drop る, add て.",
      {table:[["Dictionary form","ます-form","て-form"],["[食]{た}べる (eat)","[食]{た}べます","[食]{た}べて"],["[見]{み}る (see, watch)","[見]{み}ます","[見]{み}て"],["[起]{お}きる (get up)","[起]{お}きます","[起]{お}きて"],["[寝]{ね}る (go to bed, sleep)","[寝]{ね}ます","[寝]{ね}て"],["[着]{き}る (put on, wear)","[着]{き}ます","[着]{き}て"]]},
      "A shortcut for this group: take the ます-form, remove ます and add て. [食]{た}べます → [食]{た}べ → [食]{た}べて.",
      "The two [[irregular-verb|irregular verbs]] must be learned by heart. Luckily they are short:",
      {table:[["Dictionary form","ます-form","て-form"],["する (do)","します","して"],["[来]{く}る (come)","[来]{き}ます","[来]{き}て"]]},
      "Watch the reading of [来]{く}る. The kanji stays the same, but its reading changes: く in the dictionary form, き in [来]{き}ます and [来]{き}て. Reading it as くて is a common beginner’s slip.",
      "する also makes many compound verbs from nouns, and they all follow it: [勉強]{べんきょう}する → [勉強]{べんきょう}して, [電話]{でんわ}する → [電話]{でんわ}して, [料理]{りょうり}する → [料理]{りょうり}して."
    ]},
    {h:"Godan verbs: the last kana decides", body:[
      "[[godan-verb|Godan verbs]] are the large group, and here the て-form changes shape. Long ago these verbs simply added て to the ます stem: [書]{か}き + て. Over the centuries speakers smoothed the sounds, and [書]{か}きて became [書]{か}いて. This kind of sound smoothing is called [[onbin|おんびん]], written [音便]{おんびん}. You don’t need the history. You only need to know that the result depends on the verb’s **last kana**.",
      {table:[["Last kana","て-form ending","Examples"],["う・つ・る","って","[会]{あ}う → [会]{あ}って (meet)\n[待]{ま}つ → [待]{ま}って (wait)\n[帰]{かえ}る → [帰]{かえ}って (go home)"],["む・ぶ・ぬ","んで","[飲]{の}む → [飲]{の}んで (drink)\n[遊]{あそ}ぶ → [遊]{あそ}んで (play, hang out)\n[死]{し}ぬ → [死]{し}んで (die)"],["く","いて","[書]{か}く → [書]{か}いて (write)\n[聞]{き}く → [聞]{き}いて (listen, ask)"],["ぐ","いで","[泳]{およ}ぐ → [泳]{およ}いで (swim)\n[急]{いそ}ぐ → [急]{いそ}いで (hurry)"],["す","して","[話]{はな}す → [話]{はな}して (speak)\n[貸]{か}す → [貸]{か}して (lend)"]]},
      "Notice which rows end in で: verbs ending in む, ぶ, ぬ and ぐ all give で. The others give て.",
      "[死]{し}ぬ is the only common verb that ends in ぬ, so the ぬ row is short. It is still worth knowing, because it follows the same pattern as む and ぶ.",
      {fig:'<svg viewBox="0 0 340 432"><defs><marker id="e3u3a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Godan verbs: the last kana decides</text><rect class="d-lup" x="8" y="34" width="100" height="46" rx="8" stroke-width="2"/><text x="58" y="62" text-anchor="middle">う・つ・る</text><path class="d-ink" d="M112 57H134" stroke-width="2" marker-end="url(#e3u3a1)"/><rect class="d-sage" x="140" y="34" width="72" height="46" rx="8" stroke-width="2"/><text x="176" y="62" text-anchor="middle">って</text><text class="s" x="222" y="53">かう → かって</text><text class="s" x="222" y="71">まつ → まって</text><rect class="d-lup" x="8" y="88" width="100" height="46" rx="8" stroke-width="2"/><text x="58" y="116" text-anchor="middle">む・ぶ・ぬ</text><path class="d-ink" d="M112 111H134" stroke-width="2" marker-end="url(#e3u3a1)"/><rect class="d-sage" x="140" y="88" width="72" height="46" rx="8" stroke-width="2"/><text x="176" y="116" text-anchor="middle">んで</text><text class="s" x="222" y="107">のむ → のんで</text><text class="s" x="222" y="125">よぶ → よんで</text><rect class="d-lup" x="8" y="142" width="100" height="46" rx="8" stroke-width="2"/><text x="58" y="170" text-anchor="middle">く</text><path class="d-ink" d="M112 165H134" stroke-width="2" marker-end="url(#e3u3a1)"/><rect class="d-sage" x="140" y="142" width="72" height="46" rx="8" stroke-width="2"/><text x="176" y="170" text-anchor="middle">いて</text><text class="s" x="222" y="161">かく → かいて</text><text class="s" x="222" y="179">きく → きいて</text><rect class="d-lup" x="8" y="196" width="100" height="46" rx="8" stroke-width="2"/><text x="58" y="224" text-anchor="middle">ぐ</text><path class="d-ink" d="M112 219H134" stroke-width="2" marker-end="url(#e3u3a1)"/><rect class="d-sage" x="140" y="196" width="72" height="46" rx="8" stroke-width="2"/><text x="176" y="224" text-anchor="middle">いで</text><text class="s" x="222" y="215">およぐ → およいで</text><text class="s" x="222" y="233">いそぐ → いそいで</text><rect class="d-lup" x="8" y="250" width="100" height="46" rx="8" stroke-width="2"/><text x="58" y="278" text-anchor="middle">す</text><path class="d-ink" d="M112 273H134" stroke-width="2" marker-end="url(#e3u3a1)"/><rect class="d-sage" x="140" y="250" width="72" height="46" rx="8" stroke-width="2"/><text x="176" y="278" text-anchor="middle">して</text><text class="s" x="222" y="269">はなす → はなして</text><text class="s" x="222" y="287">かす → かして</text><rect class="d-rose" x="8" y="308" width="324" height="44" rx="8" stroke-width="2"/><text x="170" y="335" text-anchor="middle">Exception: いく → いって (not いいて)</text><rect class="d-panel" x="8" y="362" width="324" height="62" rx="8" stroke-width="1.5"/><text x="20" y="386">Ichidan: たべる → たべて (drop る)</text><text x="20" y="410">Irregular: する → して, くる → きて</text></svg>', alt:"A chart of godan verb endings and their て-forms: う, つ and る give って (かう, かって; まつ, まって); む, ぶ and ぬ give んで (のむ, のんで; よぶ, よんで); く gives いて (かく, かいて; きく, きいて); ぐ gives いで (およぐ, およいで; いそぐ, いそいで); す gives して (はなす, はなして; かす, かして). The exception いく gives いって. Ichidan verbs drop る and add て; する becomes して and くる becomes きて.", cap:"The whole て-form system on one card: five godan rows, one exception, and the two other groups."},
      {tip:"Many learners memorise the table as a little chant: “う・つ・る → って, む・ぶ・ぬ → んで, く → いて, ぐ → いで, す → して”, and then “[行]{い}く → [行]{い}って”. Say it aloud a few times a day for a week, and it will stick."}
    ]},
    {h:"The exceptions (there are very few)", body:[
      "**[行]{い}く (go)** is the only common verb ending in く that does not follow the く → いて rule. Its て-form is [行]{い}って, and its past form is [行]{い}った. Every other common く verb is regular: [書]{か}いて, [聞]{き}いて, [歩]{ある}いて (walk), [働]{はたら}いて (work).",
      "**ある (there is; to have)** is regular in the て-form: あって. Its only irregular form is its plain negative, which you meet in Lesson 3.",
      "**Godan verbs in disguise.** Some godan verbs end in -iru or -eru, so they look like ichidan verbs. Their て-form ends in って, not just て:",
      {table:[["Verb","ます-form","て-form"],["[帰]{かえ}る (go home)","[帰]{かえ}ります","[帰]{かえ}って"],["[入]{はい}る (enter)","[入]{はい}ります","[入]{はい}って"],["[走]{はし}る (run)","[走]{はし}ります","[走]{はし}って"],["[知]{し}る (come to know)","[知]{し}ります","[知]{し}って"],["[切]{き}る (cut)","[切]{き}ります","[切]{き}って"]]},
      {key:"The ます-form tells you the group. Put the dictionary form and the ます-form side by side. If る has simply been swapped for ます (たべる → たべます), the verb is ichidan and the て-form ends in て. If る has turned into り (かえる → かえります), the verb is godan and the て-form ends in って."},
      "Pairs such as [着]{き}る (wear: [着]{き}ます, [着]{き}て) and [切]{き}る (cut: [切]{き}ります, [切]{き}って) are both read きる in the dictionary form, but they belong to different groups. The ます-form tells them apart.",
      {warn:"You can’t always tell the group from the dictionary form alone. When you learn a new verb that ends in -iru or -eru, learn its ます-form with it. A dictionary such as [Jisho.org](https://jisho.org/word/%E8%A1%8C%E3%81%8F) labels each verb’s group (for [行]{い}く it says “Godan verb - Iku/Yuku special class”) and has a “Show inflections” button that lists its forms."}
    ]},
    {h:"Joining actions and descriptions", body:[
      "The first job of the て-form is joining. Put the て-form of one verb before another, and the sentence describes the actions in order: first this, then that.",
      {ex:"[朝]{あさ}[起]{お}きて、シャワーをあびます。\nI get up in the morning and take a shower.\n\n[昨日]{きのう}は[友達]{ともだち}に[会]{あ}って、[映画]{えいが}を[見]{み}ました。\nYesterday I met a friend and watched a film.\n\n[駅]{えき}まで[歩]{ある}いて、[電車]{でんしゃ}に[乗]{の}りました。\nI walked to the station and got on a train.", label:"Joining actions"},
      "Only the **last** verb shows tense and politeness. In the second example, ました at the end makes the whole sentence past and polite; [会]{あ}って itself has no tense. So the sentence doesn’t need two past verbs.",
      "Adjectives and nouns have a て-form too, so you can join descriptions:",
      {table:[["Word type","How","Example"],["い-adjective","drop い, add くて","[安]{やす}い → [安]{やす}くて\nこの[店]{みせ}は[安]{やす}くて、おいしいです。\nThis restaurant is cheap and good."],["いい (good)","irregular: よくて","[天気]{てんき}がよくて、[暖]{あたた}かいです。\nThe weather is nice and warm."],["な-adjective","add で","[静]{しず}か → [静]{しず}かで\n[図書館]{としょかん}は[静]{しず}かで、きれいです。\nThe library is quiet and clean."],["noun","add で","アナさんはブラジル[人]{じん}で、[看護師]{かんごし}です。\nAna is Brazilian and a nurse."]]},
      "One more pattern: ～てから means “after doing”. It stresses that the first action is finished before the second begins.",
      {ex:"[宿題]{しゅくだい}をしてから、テレビを[見]{み}ます。\nI watch TV after doing my homework.\n\n[手]{て}を[洗]{あら}ってから、[食]{た}べましょう。\nLet’s wash our hands before we eat. (Literally: after washing our hands, let’s eat.)", label:"～てから"}
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[書]{か}って","[書]{か}いて","く → いて. Only [行]{い}く is an exception."],["[行]{い}いて","[行]{い}って","[行]{い}く is the exception: [行]{い}って."],["[帰]{かえ}て","[帰]{かえ}って","[帰]{かえ}る is godan ([帰]{かえ}ります), so る → って."],["[泳]{およ}いて","[泳]{およ}いで","ぐ → いで: the voiced ぐ gives で."],["[飲]{の}んて","[飲]{の}んで","む・ぶ・ぬ always give で."],["[話]{はな}いて","[話]{はな}して","す → して."],["[来]{き}て read as くて","[来]{き}て read as きて","The reading of [来]{く}る changes to き."]]},
      "Most mistakes come from using a real rule on the wrong verb. When you are unsure, ask two questions in order: which group is this verb in (check the ます-form), and what is its last kana?",
      "You may also see verbs in the ます-form joined with まして, as in very formal speeches. That is a real form, but you don’t need it yet: in everyday Japanese, join actions with the plain て-form and let the last verb carry the politeness."
    ]},
    {h:"Practise little and often", body:[
      "The て-form is the first big hurdle in Japanese grammar, and almost everyone mixes up the rows at first. That is normal. Forgetting and relearning is how memory works; short, spaced review fixes it far better than one long session.",
      {list:[
        "Say the chant once a day for a week.",
        "Each time you learn a new verb, say its dictionary form, ます-form and て-form together: [買]{か}う, [買]{か}います, [買]{か}って.",
        "Check forms in a dictionary that lists them. Jisho.org has a “Show inflections” button on verb entries, and the [Online Japanese Accent Dictionary (OJAD)](https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home), hosted by the University of Tokyo, lists the conjugated forms of verbs with recorded audio. Both can be used without an account.",
        "When you read Japanese, notice the て-forms. Work backwards to the dictionary form: [読]{よ}んで could come from a verb ending in む, ぶ or ぬ, and with the kanji [読]{よ}, only [読]{よ}む exists. (Written in kana, よんで could also be [呼]{よ}んで, from [呼]{よ}ぶ, call: the kanji or the context tells you which.)"
      ]},
      "The full reference, with notes for later levels, is in {{te-form}}.",
      {terms:["te-form","onbin"]}
    ]}
   ],
   try:[
    {id:"e3u3-l1-x1", type:"mcq", q:"[飲]{の}む (drink) is a godan verb. What is its て-form?", options:[
      {t:"[飲]{の}んで", ok:true, why:"Right. む is in the む・ぶ・ぬ row, which always becomes んで."},
      {t:"[飲]{の}みて", why:"This adds て to the ます stem ([飲]{の}み). Godan verbs don’t do that any more: the sound has changed to んで."},
      {t:"[飲]{の}って", why:"って is for verbs ending in う, つ or る. [飲]{の}む ends in む, so it takes んで."},
      {t:"[飲]{の}んて", why:"The ん comes with a voiced で, not て: む・ぶ・ぬ → んで."}
    ]},
    {id:"e3u3-l1-x2", type:"sort", q:"Sort these godan verbs by the ending of their て-form.", buckets:["～って","～んで","～いて / ～いで","～して"], items:[
      {t:"[待]{ま}つ (wait)", b:0, why:"つ → って: [待]{ま}って."},
      {t:"[帰]{かえ}る (go home)", b:0, why:"A godan verb ([帰]{かえ}ります), so る → って: [帰]{かえ}って."},
      {t:"[行]{い}く (go)", b:0, why:"The exception: [行]{い}って, not [行]{い}いて."},
      {t:"[読]{よ}む (read)", b:1, why:"む → んで: [読]{よ}んで."},
      {t:"[遊]{あそ}ぶ (play)", b:1, why:"ぶ → んで: [遊]{あそ}んで."},
      {t:"[書]{か}く (write)", b:2, why:"く → いて: [書]{か}いて."},
      {t:"[泳]{およ}ぐ (swim)", b:2, why:"ぐ → いで: [泳]{およ}いで."},
      {t:"[話]{はな}す (speak)", b:3, why:"す → して: [話]{はな}して."}
    ]},
    {id:"e3u3-l1-x3", type:"match", q:"Match each verb to its て-form, written in hiragana.", pairs:[
      ["[着]{き}る (wear)","きて","Ichidan ([着]{き}ます): drop る, add て."],
      ["[切]{き}る (cut)","きって","Godan ([切]{き}ります): る → って. It sounds like [着]{き}る in the dictionary form, but it is in a different group."],
      ["[聞]{き}く (listen)","きいて","く → いて."],
      ["[行]{い}く (go)","いって","The one exception among く verbs."],
      ["[死]{し}ぬ (die)","しんで","ぬ → んで, like む and ぶ."]
    ]},
    {id:"e3u3-l1-x4", type:"spot", q:"Kenji wrote these て-forms in his notebook. Tap each one that is **wrong**.", ask:"is wrong", parts:[
      {t:"[会]{あ}う → [会]{あ}って", flag:false, why:"Correct: う → って."},"\n",
      {t:"[書]{か}く → [書]{か}って", flag:true, why:"Wrong. く → いて: [書]{か}いて. Only [行]{い}く becomes って."},"\n",
      {t:"[起]{お}きる → [起]{お}きて", flag:false, why:"Correct: an ichidan verb ([起]{お}きます), so drop る and add て."},"\n",
      {t:"[入]{はい}る → [入]{はい}て", flag:true, why:"Wrong. [入]{はい}る is godan ([入]{はい}ります), so る → って: [入]{はい}って."},"\n",
      {t:"[呼]{よ}ぶ → [呼]{よ}んで", flag:false, why:"Correct: ぶ → んで. ([呼]{よ}ぶ means “call”.)"},"\n",
      {t:"[急]{いそ}ぐ → [急]{いそ}いて", flag:true, why:"Wrong. ぐ → いで, with a voiced で: [急]{いそ}いで."},"\n",
      {t:"[来]{く}る → [来]{き}て", flag:false, why:"Correct: the irregular [来]{く}る becomes [来]{き}て, read きて."},"\n",
      {t:"[貸]{か}す → [貸]{か}して", flag:false, why:"Correct: す → して."}
    ]},
    {id:"e3u3-l1-x5", type:"order", q:"Put the steps for finding the て-form of [帰]{かえ}る (go home) in order.", items:[
      {t:"Find the ます-form: [帰]{かえ}ります.", why:"Start with the ます-form, because it tells you the group."},
      {t:"る has turned into り, so [帰]{かえ}る is a godan verb, not an ichidan verb.", why:"Decide the group second, from the ます-form."},
      {t:"Because it is godan, use the godan table and find the row for its last kana, る.", why:"Only godan verbs use the table of rows, so this step needs the group from the step before."},
      {t:"The う・つ・る row gives って: [帰]{かえ}って.", why:"Apply the rule last."}
    ]},
    {id:"e3u3-l1-x6", type:"mcq", q:"Join two facts about Hana’s room in one sentence: it is quiet ([静]{しず}か, a な-adjective) and bright ([明]{あか}るい).", options:[
      {t:"ハナさんの[部屋]{へや}は[静]{しず}かで、[明]{あか}るいです。", ok:true, why:"Right. な-adjectives (and nouns) join with で."},
      {t:"ハナさんの[部屋]{へや}は[静]{しず}かくて、[明]{あか}るいです。", why:"くて is for い-adjectives. [静]{しず}か is a な-adjective, so it takes で."},
      {t:"ハナさんの[部屋]{へや}は[静]{しず}かです、[明]{あか}るいです。", why:"です can’t be used in the middle to mean “and”. Join with the て-form, [静]{しず}かで."},
      {t:"ハナさんの[部屋]{へや}は[静]{しず}かて、[明]{あか}るいです。", why:"There is no form [静]{しず}かて: な-adjectives and nouns take で."}
    ]},
    {id:"e3u3-l1-x7", type:"mcq", q:"How do you say “Yesterday I went to the library and studied” in one sentence?", options:[
      {t:"[昨日]{きのう}、[図書館]{としょかん}へ[行]{い}って、[勉強]{べんきょう}しました。", ok:true, why:"Right. [行]{い}って joins the actions, and ました at the end makes the whole sentence past."},
      {t:"[昨日]{きのう}、[図書館]{としょかん}へ[行]{い}って、[勉強]{べんきょう}します。", why:"します at the end makes the sentence non-past, which clashes with [昨日]{きのう} (yesterday). The last verb carries the tense."},
      {t:"[昨日]{きのう}、[図書館]{としょかん}へ[行]{い}いて、[勉強]{べんきょう}しました。", why:"[行]{い}く is the exception: [行]{い}って, not [行]{い}いて."},
      {t:"[昨日]{きのう}、[図書館]{としょかん}へ[行]{い}くて、[勉強]{べんきょう}しました。", why:"The て-form isn’t the dictionary form plus て. [行]{い}く becomes [行]{い}って."}
    ]}
   ],
   apply:{
    intro:"Short, regular practice beats one long session. Keep these notes for yourself.",
    tasks:[
     {t:"Make a て-form card set of 15 verbs", how:[
       "List 15 verbs you know or want to know: at least one from each godan row, three ichidan verbs, する, [来]{く}る and [行]{い}く.",
       "For each, write the dictionary form, the ます-form and the て-form.",
       "Check each one in a dictionary that lists verb forms (for example Jisho.org’s “Show inflections” or OJAD), and correct any mistakes.",
       "Review the cards for two minutes a day this week. Look first at the ones you got wrong last time."
     ], write:"[買]{か}う・[買]{か}います・[買]{か}って …"},
     {t:"Describe your morning in one sentence chain", how:[
       "Think of three things you do every morning, in order.",
       "Join them with て-forms and end with a ます verb, for example: [起]{お}きて、[顔]{かお}を[洗]{あら}って、コーヒーを[飲]{の}みます。",
       "Write a second chain about yesterday, ending in ました."
     ], write:"Every morning… Yesterday…"},
     {t:"Write the table from memory", how:[
       "Say the chant aloud three times.",
       "Cover the godan table in this lesson and write it from memory, with one example verb per row.",
       "Check it, and note which rows you mixed up. Try again in two days."
     ], write:"What I got wrong from memory…"}
    ],
    proof:"A set of 15 verbs with their ます- and て-forms checked in a dictionary, two て-form sentence chains about your mornings, and the godan table written from memory."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Past Tense” (rules by verb ending, and the 行く exception: the て-form follows the same pattern)", note:"Tae Kim teaches the past tense first; swap た for て and you have the て-form rules."},
    {book:"taekim", where:"Essential Grammar, “Compound Sentences”, section “Expressing a sequence of verbs with the te-form”", note:"Joining actions with the て-form; the last verb carries the tense."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e3u3-l2", title:"Requests, permission, rules and ～ています", minutes:55,
   hook:{q:"A friend texts you: 「[今]{いま}、[駅]{えき}に[来]{き}ています。」 Where is she?", options:["On her way to the station","Already at the station","She comes to the station every day","She will come to the station later"], answer:1, reveal:"**She is already at the station.** With verbs of moving, such as [来]{く}る (come) and [行]{い}く (go), ～ています describes the state after the movement: she has come, and she is there now. It does not mean “is coming”. ～ています has two main meanings, an action in progress and a state that continues, and this lesson shows you how to tell them apart. It also shows how to make requests, ask permission and state rules with the て-form."},
   goals:[
     "Ask someone to do something with ～てください, and know when to soften it",
     "Ask for and give permission with ～てもいいですか and ～てもいいです",
     "State rules with ～てはいけません, and refuse a request politely",
     "Use ～ています for actions in progress, habits and jobs, and continuing states",
     "Avoid common mistakes such as [知]{し}っていません and reading [来]{き}ています as “is coming”"
   ],
   learn:[
    {h:"Asking someone to do something: ～てください", body:[
      {lead:"Put ください after a て-form and you have a polite request: “please do…”. It is one of the most useful patterns in Japanese."},
      {ex:"ちょっと[待]{ま}ってください。\nPlease wait a moment.\n\nここに[名前]{なまえ}を[書]{か}いてください。\nPlease write your name here.\n\nもう[一度]{いちど}[言]{い}ってください。\nPlease say it once more.\n\nゆっくり[話]{はな}してください。\nPlease speak slowly.", label:"～てください"},
      "[言]{い}う (say) ends in う, so its て-form is [言]{い}って. It sounds just like [行]{い}って, but the kanji and the meaning are different.",
      "You have probably met ください with a noun already: [水]{みず}をください (Water, please). With a noun, ください means “please give me”. With a て-form, it means “please do”. Compare [本]{ほん}をください (Please give me the book) with [本]{ほん}を[読]{よ}んでください (Please read the book).",
      "～てください is polite, but it is still a request or an instruction. Teachers use it with students, shops use it on signs, and you can use it with friends, strangers and staff. When you ask a favour of a teacher or a boss, Japanese speakers often soften it, for example to ～てくださいませんか (“would you please…?”). You will meet more of these softer forms at N4. The glossary entry [[kudasai]] sums up the pattern."
    ]},
    {h:"Asking permission: ～てもいいですか", body:[
      "～てもいいです means “it’s all right to…” or “you may…”. Add か, and you are asking for permission: “May I…?”",
      {ex:"[窓]{まど}を[開]{あ}けてもいいですか。\nMay I open the window?\n\nここに[座]{すわ}ってもいいですか。\nMay I sit here?\n\n[写真]{しゃしん}をとってもいいですか。\nMay I take a photo?\n\nこのペンを[使]{つか}ってもいいですよ。\nYou can use this pen. (よ adds a friendly “go ahead”.)", label:"～てもいいです(か)"},
      "These are the usual answers:",
      {table:[["Answer","Meaning","When"],["はい、どうぞ。","Yes, go ahead.","Very common and friendly."],["はい、いいですよ。","Yes, that’s fine.","Common and friendly."],["すみません、ちょっと…。","Sorry, that’s a bit… (no)","The usual polite way to refuse. The sentence is left unfinished on purpose."],["いいえ、～てはいけません。","No, you must not.","Strong. It sounds like a rule or a telling-off."]]},
      {tip:"Japanese speakers often refuse indirectly. A trailing ちょっと… with an apologetic tone is a clear “no”, and it is kinder than saying いいえ outright. When you hear it, don’t ask again."}
    ]},
    {h:"Rules: ～てはいけません", body:[
      "～てはいけません means “you must not”. It states a rule or a firm prohibition. You see it in rules for schools, pools, museums and workplaces, and parents use it with children.",
      {ex:"ここでたばこを[吸]{す}ってはいけません。\nYou must not smoke here.\n\n[図書館]{としょかん}で[食]{た}べてはいけません。\nYou must not eat in the library.\n\nプールで[走]{はし}ってはいけません。\nNo running at the pool.", label:"～てはいけません"},
      "The は in ～ては is the particle は, so it is pronounced わ: てはいけません sounds like “te wa ikemasen”. After a て-form that ends in で, it is ～ではいけません, pronounced “de wa”: [飲]{の}んではいけません (you must not drink).",
      "Because it sounds firm, don’t use ～てはいけません to refuse a friend’s polite request. If a friend asks [写真]{しゃしん}をとってもいいですか and you would rather not, すみません、ちょっと… is much softer. Save ～てはいけません for real rules.",
      {warn:"In casual speech, ～てはいけない is often shortened to ～ちゃいけない or ～ちゃだめ, and ～ではいけない to ～じゃいけない or ～じゃだめ. These are **casual**: you will hear them between friends and from parents to children, but use the full form in polite speech. Unit 5 covers casual speech."},
      "The three patterns side by side, with one verb:",
      {table:[["Pattern","Meaning","Example"],["～てください","please do","[入]{はい}ってください。\nPlease come in."],["～てもいいですか","may I?","[入]{はい}ってもいいですか。\nMay I come in?"],["～てはいけません","you must not","[入]{はい}ってはいけません。\nYou must not go in."]]},
      "Lesson 3 adds a fourth: ～ないでください, “please don’t”. The reference page {{requests-and-permission}} collects all of them."
    ]},
    {h:"～ています (1): actions in progress, habits and jobs", body:[
      "～ています is the て-form plus います. Its most familiar meaning is an action in progress, like English “-ing”.",
      {ex:"A: [今]{いま}、[何]{なに}をしていますか。\nB: [音楽]{おんがく}を[聞]{き}いています。\nA: What are you doing now? B: I’m listening to music.\n\n[雨]{あめ}が[降]{ふ}っています。\nIt’s raining.\n\nサラさんは[台所]{だいどころ}で[料理]{りょうり}をしています。\nSara is cooking in the kitchen.", label:"In progress"},
      "It also describes things you do regularly at this stage of your life, including your job:",
      {ex:"[毎朝]{まいあさ}ジョギングをしています。\nI go jogging every morning (these days).\n\nケンジさんは[銀行]{ぎんこう}で[働]{はたら}いています。\nKenji works at a bank.\n\n[日本語]{にほんご}を[勉強]{べんきょう}しています。\nI’m studying Japanese (these days).", label:"Habits and jobs"},
      "Compare plain ～ます: [毎朝]{まいあさ}ジョギングをします states a habit as a simple fact. ～ています presents it as something that is going on in your life now. Both are correct.",
      "In this pattern, いる is an ichidan verb, so it has the usual ます forms: ～ています, ～ていません (is not doing), ～ていました (was doing), ～ていませんでした. The glossary entry is [[te-iru]]."
    ]},
    {h:"～ています (2): states that continue", body:[
      "With some verbs, ～ています describes the **state after a change**. The change has already happened, and its result is still true now.",
      {table:[["Sentence","Meaning"],["[結婚]{けっこん}しています。","is married (not “is getting married”)"],["[大阪]{おおさか}に[住]{す}んでいます。","lives in Osaka"],["[駅]{えき}に[来]{き}ています。","has come to the station and is there now (not “is coming”)"],["[兄]{あに}はアメリカに[行]{い}っています。","My older brother has gone to the US and is there now"],["[車]{くるま}を[持]{も}っています。","has (owns) a car"],["[田中]{たなか}さんを[知]{し}っています。","knows Tanaka-san"]]},
      {fig:'<svg viewBox="0 0 340 324"><text x="170" y="20" text-anchor="middle">Two meanings of ～ています</text><rect class="d-panel" x="8" y="32" width="324" height="124" rx="8" stroke-width="1.5"/><text x="20" y="56">いま たべています</text><text class="s" x="20" y="74">an action in progress</text><path class="d-ink" d="M20 116H320" stroke-width="2"/><rect class="d-lup" x="90" y="104" width="170" height="24" rx="4" stroke-width="2"/><text class="s" x="175" y="121" text-anchor="middle">eating</text><path class="d-rose" d="M175 92V140" stroke-width="3"/><text class="s" x="175" y="152" text-anchor="middle">now: in the middle</text><rect class="d-panel" x="8" y="166" width="324" height="150" rx="8" stroke-width="1.5"/><text x="20" y="190">けっこんしています</text><text class="s" x="20" y="208">the state after a change</text><path class="d-ink" d="M20 256H320" stroke-width="2"/><circle class="d-rose" cx="80" cy="256" r="7" stroke-width="2"/><text class="s" x="80" y="236" text-anchor="middle">wedding</text><rect class="d-sage" x="87" y="248" width="233" height="16" rx="4" stroke-width="2"/><text class="s" x="200" y="244" text-anchor="middle">married (the result)</text><path class="d-rose" d="M250 228V280" stroke-width="3"/><text class="s" x="250" y="294" text-anchor="middle">now</text><text class="s" x="20" y="310">also: きています, しっています, すんでいます</text></svg>', alt:"Two timelines. Top: いま たべています, an action in progress; the bar for eating has a start and an end, and now is in the middle of it. Bottom: けっこんしています, the state after a change; the wedding is a single point in the past, and a bar for the result, being married, runs from that point through now. The same pattern covers きています, しっています and すんでいます.", cap:"Activity verbs give “in the middle of it”; change verbs give “the result is still true”."},
      "Verbs such as [結婚]{けっこん}する, [来]{く}る, [行]{い}く and [知]{し}る describe a change that happens in a moment, so their ～ています form describes the result. Verbs such as [食]{た}べる, [読]{よ}む and [聞]{き}く describe an activity that lasts, so their ～ています form describes the activity in progress.",
      "[知]{し}る has one more surprise. “I know” is [知]{し}っています, but “I don’t know” is [知]{し}りません, not [知]{し}っていません.",
      {ex:"A: リーさんの[電話番号]{でんわばんごう}を[知]{し}っていますか。\nB: はい、[知]{し}っています。 / いいえ、[知]{し}りません。\nA: Do you know Lee’s phone number? B: Yes, I do. / No, I don’t.", label:"[知]{し}っています"},
      "For other verbs, the negative ～ていません is normal: [結婚]{けっこん}していません (I’m not married), [雨]{あめ}は[降]{ふ}っていません (It isn’t raining).",
      {warn:"In casual speech, ～ている often drops い: [食]{た}べてる, [知]{し}ってる. That is **casual** spoken Japanese; keep the い in polite speech and in writing."}
    ]},
    {h:"Which ～ています is it? Working it out", body:[
      "When you meet a ～ています sentence, ask what kind of verb it is, then let the context decide. Here are four worked examples.",
      {ex:"[姉]{あね}は[今]{いま}、[手紙]{てがみ}を[書]{か}いています。\n[書]{か}く is an activity that lasts, and [今]{いま} (now) points to this moment: “My sister is writing a letter now.”\n\n[姉]{あね}は[二年前]{にねんまえ}に[結婚]{けっこん}しました。[今]{いま}、[大阪]{おおさか}に[住]{す}んでいます。\nThe wedding is one past event (～ました). Being married and living in Osaka are the results that are still true: “My sister got married two years ago. She lives in Osaka now.”\n\nミンさんは[赤]{あか}いシャツを[着]{き}ています。\n[着]{き}る (put on) is a change, so ～ています usually describes the result: “Min is wearing a red shirt.” If you were watching Min pull the shirt on, the same sentence could mean “is putting on”. Context decides.\n\nA: もう[昼]{ひる}ごはんを[食]{た}べましたか。\nB: いいえ、まだ[食]{た}べていません。\nA: Have you had lunch yet? B: No, not yet.", label:"Worked examples"},
      "The last example shows a very useful pair. To ask whether something has happened, use もう (already) with ～ましたか. To answer “not yet”, use まだ (still, yet) with ～ていません: the state of “not having eaten” continues. ✗ まだ[食]{た}べません would mean “I won’t eat yet”, a different idea.",
      {table:[["Question and answer","Meaning"],["もう[宿題]{しゅくだい}をしましたか。","Have you done your homework yet?"],["はい、もうしました。","Yes, I’ve already done it."],["いいえ、まだしていません。","No, not yet."]]},
      "One more contrast: ～ています versus ～ます. ～ます is non-past, so it covers habits and the future: [毎日]{まいにち}[働]{はたら}きます (I work every day), [明日]{あした}[働]{はたら}きます (I’ll work tomorrow). It does **not** describe what is happening right now. For “I’m working (at the moment)”, you need [今]{いま}、[働]{はたら}いています."
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[大阪]{おおさか}に[住]{す}みます。 (for “I live in Osaka”)","[大阪]{おおさか}に[住]{す}んでいます。","Where you live is a continuing state: ～ています. [住]{す}みます sounds like a plan (“I will live”)."],["いいえ、[知]{し}っていません。","いいえ、[知]{し}りません。","[知]{し}っています has the negative [知]{し}りません."],["[今]{いま}、[駅]{えき}に[来]{き}ています。 (meaning “I’m on my way”)","[今]{いま}、[駅]{えき}に[向]{む}かっています。","[来]{き}ています means you have arrived. [向]{む}かっています means you are heading there."],["[水]{みず}を[飲]{の}むてください。","[水]{みず}を[飲]{の}んでください。","ください follows the て-form, not the dictionary form."],["[友達]{ともだち}に「いいえ、[使]{つか}ってはいけません」","すみません、ちょっと…。","Correct grammar, but too harsh for refusing a friend. Keep ～てはいけません for rules."]]},
      {key:"～てください asks someone to do something, ～てもいいですか asks permission, ～てはいけません forbids, and ～ています describes either an action in progress or a state that continues."},
      "When you meet a new verb, ask yourself which kind it is: an activity that lasts, or a change that happens in a moment. That tells you what its ～ています form will mean."
    ]}
   ],
   try:[
    {id:"e3u3-l2-x1", type:"mcq", q:"On a busy train, there is one empty seat next to a woman. You want to ask her whether you may sit there. What do you say?", options:[
      {t:"ここに[座]{すわ}ってもいいですか。", ok:true, why:"Right. ～てもいいですか asks for permission: “May I sit here?”"},
      {t:"ここに[座]{すわ}ってください。", why:"This asks **her** to sit here (“Please sit here”). It doesn’t ask permission for yourself."},
      {t:"ここに[座]{すわ}ってはいけません。", why:"This says “You must not sit here”: a rule, not a question."},
      {t:"ここに[座]{すわ}っています。", why:"This says “I am sitting here” (or “someone is sitting here”). It isn’t a request at all."}
    ]},
    {id:"e3u3-l2-x2", type:"sort", q:"Which pattern fits each situation?", buckets:["～てください (please do)","～てもいいですか (may I?)","～てはいけません (must not)"], items:[
      {t:"You want a shop assistant to wait a moment.", b:0, why:"You are asking someone else to do something: ちょっと[待]{ま}ってください。"},
      {t:"A teacher tells the class to write their names.", b:0, why:"An instruction to others: [名前]{なまえ}を[書]{か}いてください。"},
      {t:"You want to know whether you can open the window.", b:1, why:"You are asking permission for yourself: [窓]{まど}を[開]{あ}けてもいいですか。"},
      {t:"You’d like to take a photo of a friend’s cake.", b:1, why:"Permission again: [写真]{しゃしん}をとってもいいですか。"},
      {t:"A sign at the pool says running is not allowed.", b:2, why:"A rule: プールで[走]{はし}ってはいけません。"},
      {t:"A library rule says no eating.", b:2, why:"A rule: [図書館]{としょかん}で[食]{た}べてはいけません。"}
    ]},
    {id:"e3u3-l2-x3", type:"match", q:"Match each ～ています sentence to what it means.", pairs:[
      ["[今]{いま}、[本]{ほん}を[読]{よ}んでいます。","is reading a book right now","[読]{よ}む is an activity that lasts, so ～ています means it is in progress."],
      ["[結婚]{けっこん}しています。","is married","[結婚]{けっこん}する is a change; ～ています describes the result."],
      ["[銀行]{ぎんこう}で[働]{はたら}いています。","works at a bank","～ています for a job or a regular activity in your life now."],
      ["[駅]{えき}に[来]{き}ています。","has arrived at the station and is there","[来]{く}る is a change of place; ～ています describes being there now."],
      ["[田中]{たなか}さんを[知]{し}っています。","knows Tanaka-san","[知]{し}る (come to know) + ～ています = know."]
    ]},
    {id:"e3u3-l2-x4", type:"mcq", q:"A colleague asks: [田中]{たなか}さんのメールアドレスを[知]{し}っていますか。 You don’t know it. What is the correct polite answer?", options:[
      {t:"いいえ、[知]{し}りません。", ok:true, why:"Right. The negative of [知]{し}っています is [知]{し}りません."},
      {t:"いいえ、[知]{し}っていません。", why:"A very common mistake. With other verbs ～ていません is normal, but [知]{し}る uses [知]{し}りません for “I don’t know”."},
      {t:"いいえ、[知]{し}るません。", why:"ません attaches to the ます stem: [知]{し}り + ません. [知]{し}るません is not a form."},
      {t:"はい、[知]{し}りません。", why:"はい (yes) contradicts [知]{し}りません (I don’t know). Answer いいえ."}
    ]},
    {id:"e3u3-l2-x5", type:"spot", q:"Mei is helping write the rules for a children’s class at a community centre. Tap each rule that has a **grammar mistake**.", ask:"has a grammar mistake", parts:[
      {t:"[教室]{きょうしつ}で[食]{た}べてはいけません。", flag:false, why:"Correct: ～てはいけません states a rule."},"\n",
      {t:"[大]{おお}きい[声]{こえ}で[話]{はな}さってはいけません。", flag:true, why:"A mistake. [話]{はな}す → [話]{はな}して, so the rule is [話]{はな}してはいけません."},"\n",
      {t:"くつを[脱]{ぬ}いでください。", flag:false, why:"Correct: [脱]{ぬ}ぐ (take off) → [脱]{ぬ}いで, because ぐ → いで."},"\n",
      {t:"[写真]{しゃしん}をとるてはいけません。", flag:true, why:"A mistake. ～てはいけません follows the て-form: とって. とる is godan (とります), so る → って."},"\n",
      {t:"[質問]{しつもん}は[先生]{せんせい}に[聞]{き}いてください。", flag:false, why:"Correct: [聞]{き}く → [聞]{き}いて."},"\n",
      {t:"[休]{やす}み[時間]{じかん}は[外]{そと}で[遊]{あそ}んでもいいです。", flag:false, why:"Correct: [遊]{あそ}ぶ → [遊]{あそ}んで, plus もいいです (you may)."},"\n",
      {t:"ここに[座]{すわ}てもいいです。", flag:true, why:"A mistake. [座]{すわ}る is godan ([座]{すわ}ります), so the て-form is [座]{すわ}って: [座]{すわ}ってもいいです."}
    ]},
    {id:"e3u3-l2-x6", type:"mcq", q:"A friend phones and asks: [今]{いま}、[何]{なに}をしていますか。 You are in the middle of making dinner. How do you answer?", options:[
      {t:"[晩]{ばん}ごはんを[作]{つく}っています。", ok:true, why:"Right. [作]{つく}る is an activity that lasts, so ～ています says you are in the middle of it."},
      {t:"[晩]{ばん}ごはんを[作]{つく}ります。", why:"～ます describes a habit or a plan (“I make / I’ll make dinner”), not what you are doing at this moment."},
      {t:"[晩]{ばん}ごはんを[作]{つく}ってください。", why:"This asks your friend to make dinner."},
      {t:"[晩]{ばん}ごはんを[作]{つく}りました。", why:"This says you made dinner (finished). Your friend asked what you are doing now."}
    ]},
    {id:"e3u3-l2-x7", type:"mcq", q:"Your neighbour asks: ここに[自転車]{じてんしゃ}を[止]{と}めてもいいですか。 There is no rule against it, but you would rather they didn’t. What is the most natural polite reply?", options:[
      {t:"すみません、ちょっと…。", ok:true, why:"Right. This is the usual soft refusal: apologetic and clear without saying no outright."},
      {t:"いいえ、[止]{と}めてはいけません。", why:"Grammatically correct, but it sounds like announcing a rule or telling someone off. Too harsh for a neighbour’s polite question."},
      {t:"はい、どうぞ。", why:"This means “Yes, go ahead”: the opposite of what you want."},
      {t:"[止]{と}めてください。", why:"This asks them to park there."}
    ]}
   ],
   apply:{
    intro:"Use the patterns about your own life and surroundings. Keep the notes for yourself.",
    tasks:[
     {t:"Write the rules of a place you know", how:[
       "Choose a place: your home, a workplace, a gym, a library or a café.",
       "Write three rules with ～てはいけません and three instructions with ～てください. For example: ここで[走]{はし}ってはいけません。 / くつを[脱]{ぬ}いでください。",
       "Check each て-form against the table in Lesson 1."
     ], write:"Place… Rules (～てはいけません)… Instructions (～てください)…"},
     {t:"Practise asking permission", how:[
       "Write four ～てもいいですか questions you might really need: in a class, at a friend’s home, in a shop, at work.",
       "For each, write one friendly yes answer and one polite refusal (すみません、ちょっと…)."
     ], write:"Question… Yes… Polite no…"},
     {t:"Describe what people are doing", how:[
       "Look around you, out of a window, or at a photo. Write four sentences about what people are doing now, with ～ています.",
       "Then write three sentences about yourself that describe states: where you live (～に[住]{す}んでいます), what you own (～を[持]{も}っています) and whom or what you know (～を[知]{し}っています)."
     ], write:"What people are doing… My states…"}
    ],
    proof:"Three rules and three instructions for a real place, four permission questions with answers, and seven ～ています sentences that show both meanings."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Other uses of the te-form” (～ている for enduring states, and casual ～てる)", note:"Another explanation of the two meanings of ～ています."},
    {book:"taekim", where:"Essential Grammar, “Making Requests”, section “「～ください」－ a special conjugation of 「くださる」”", note:"～てください and ～ないでください, with casual versions."},
    {book:"irodori", where:"Starter, topic “Daily Life”, Lesson 10 “Please lend me the stapler.”", note:"Free listening and speaking practice for everyday requests, with audio."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e3u3-l3", title:"Plain forms, ～たい, ～ないでください and reasons with から", minutes:60,
   hook:{q:"[書]{か}く → [書]{か}かない and [飲]{の}む → [飲]{の}まない are plain negatives (“don’t write”, “don’t drink”). What is the plain negative of ある (there is; to have)?", options:["あらない","ない","ありない","あるない"], answer:1, reveal:"**ない.** Following the pattern, you would expect あらない, and that is a very sensible guess. But ある is irregular here: its plain negative is simply ない (the polite form ありません is regular). Everything else in the pattern is regular. This lesson shows you how to build the plain negative and past of any verb, and then puts them to work in ～ないでください, alongside ～たい and reasons with から."},
   goals:[
     "Explain what plain forms are and where you will meet them",
     "Build the ない-form of any verb, including ある → ない and [来]{く}る → [来]{こ}ない",
     "Build the plain past (た-form) and the plain past negative from what you know about the て-form",
     "Say what you want to do with ～たい, and use it politely",
     "Ask people not to do something with ～ないでください",
     "Give reasons with から"
   ],
   learn:[
    {h:"Polite forms and plain forms", body:[
      {lead:"So far you have used polite verbs that end in ます, the [[desu-masu-tai|polite style]]. Every verb also has plain forms, which carry the same meaning without the politeness."},
      "You already know one plain form: the [[dictionary-form]], such as [食]{た}べる, is the plain non-past. The other [[plain-form|plain forms]] fill the remaining boxes:",
      {table:[["Meaning","Polite","Plain"],["non-past (eat, will eat)","[食]{た}べます","[食]{た}べる"],["non-past negative (don’t eat)","[食]{た}べません","[食]{た}べない"],["past (ate)","[食]{た}べました","[食]{た}べた"],["past negative (didn’t eat)","[食]{た}べませんでした","[食]{た}べなかった"]]},
      "Plain forms appear in three places:",
      {list:[
        "**Casual speech** with friends and family: [何]{なに}[食]{た}べる？ (What are you going to eat?). This is **casual**. With people you don’t know well, keep using です and ます. Unit 5 teaches casual speech properly.",
        "**Inside longer sentences and before grammar patterns.** In this lesson, the ない-form builds ～ないでください (please don’t), and plain forms can go before から (because).",
        "**Writing** such as diaries, notes and articles, in the [[futsuu-tai|plain style]] ([普通体]{ふつうたい})."
      ]},
      "Learning the plain forms now pays off twice: they are the building blocks of most N4 grammar, and they are how your Japanese friends will talk to you."
    ]},
    {h:"The ない-form (plain negative)", body:[
      "**Godan verbs:** change the last u-sound to the matching a-sound, then add ない. Verbs ending in う are the one surprise: う becomes わ, not あ.",
      {table:[["Dictionary form","ない-form","Change"],["[書]{か}く (write)","[書]{か}かない","く → か"],["[泳]{およ}ぐ (swim)","[泳]{およ}がない","ぐ → が"],["[話]{はな}す (speak)","[話]{はな}さない","す → さ"],["[待]{ま}つ (wait)","[待]{ま}たない","つ → た"],["[死]{し}ぬ (die)","[死]{し}なない","ぬ → な"],["[遊]{あそ}ぶ (play)","[遊]{あそ}ばない","ぶ → ば"],["[飲]{の}む (drink)","[飲]{の}まない","む → ま"],["[帰]{かえ}る (go home)","[帰]{かえ}らない","る → ら"],["[買]{か}う (buy)","[買]{か}わない","う → わ (not あ)"]]},
      "**Ichidan verbs:** drop る and add ない: [食]{た}べる → [食]{た}べない, [見]{み}る → [見]{み}ない, [起]{お}きる → [起]{お}きない.",
      "**Irregular verbs:** する → しない; [来]{く}る → [来]{こ}ない. The kanji in [来]{こ}ない is read こ, so [来]{く}る now has three readings: く ([来]{く}る), き ([来]{き}ます, [来]{き}て) and こ ([来]{こ}ない).",
      "**ある** (there is; to have) → ない. Not あらない. Its polite negative, ありません, is regular.",
      "And [行]{い}く, the て-form exception, is perfectly regular here: [行]{い}かない.",
      "The ない-form ends in い, and it conjugates like an [[i-adjective]]. To make it past, change ない to なかった: [食]{た}べなかった (didn’t eat), [行]{い}かなかった (didn’t go), なかった (there wasn’t; didn’t have). The glossary entry is [[nai-form]].",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Four plain forms of たべる</text><text class="s" x="87" y="42" text-anchor="middle">affirmative</text><text class="s" x="253" y="42" text-anchor="middle">negative</text><rect class="d-lup" x="8" y="50" width="158" height="84" rx="8" stroke-width="2"/><text class="s" x="18" y="68">non-past</text><text x="87" y="98" text-anchor="middle">たべる</text><text class="s" x="87" y="122" text-anchor="middle">polite: たべます</text><rect class="d-rose" x="174" y="50" width="158" height="84" rx="8" stroke-width="2"/><text class="s" x="184" y="68">non-past</text><text x="253" y="98" text-anchor="middle">たべない</text><text class="s" x="253" y="122" text-anchor="middle">polite: たべません</text><rect class="d-lup" x="8" y="142" width="158" height="84" rx="8" stroke-width="2"/><text class="s" x="18" y="160">past</text><text x="87" y="190" text-anchor="middle">たべた</text><text class="s" x="87" y="214" text-anchor="middle">polite: たべました</text><rect class="d-rose" x="174" y="142" width="158" height="84" rx="8" stroke-width="2"/><text class="s" x="184" y="160">past</text><text x="253" y="190" text-anchor="middle">たべなかった</text><text class="s" x="253" y="214" text-anchor="middle">たべませんでした</text><rect class="d-panel" x="8" y="236" width="324" height="56" rx="8" stroke-width="1.5"/><text class="s" x="20" y="258">た-form = て-form with た or だ</text><text class="s" x="20" y="280">ない → なかった, like an い-adjective</text></svg>', alt:"A two-by-two grid of the plain forms of たべる. Non-past affirmative たべる (polite たべます); non-past negative たべない (polite たべません); past affirmative たべた (polite たべました); past negative たべなかった (polite たべませんでした). Notes: the た-form is the て-form with た or だ; ない becomes なかった like an い-adjective.", cap:"Every verb has these four plain forms, each matching a polite ます form."}
    ]},
    {h:"The た-form (plain past)", body:[
      "Good news: if you know the て-form, you know the [[ta-form]]. Change the final て to た, and で to だ. Every rule and every exception is the same.",
      {table:[["Dictionary form","て-form","た-form"],["[買]{か}う","[買]{か}って","[買]{か}った"],["[飲]{の}む","[飲]{の}んで","[飲]{の}んだ"],["[書]{か}く","[書]{か}いて","[書]{か}いた"],["[泳]{およ}ぐ","[泳]{およ}いで","[泳]{およ}いだ"],["[話]{はな}す","[話]{はな}して","[話]{はな}した"],["[行]{い}く","[行]{い}って","[行]{い}った"],["[食]{た}べる","[食]{た}べて","[食]{た}べた"],["する / [来]{く}る","して / [来]{き}て","した / [来]{き}た"]]},
      "Adjectives and nouns have plain forms too. You will need them for から later in this lesson, and all the time in Unit 5:",
      {table:[["Word type","Non-past","Negative","Past"],["い-adjective","[高]{たか}い","[高]{たか}くない","[高]{たか}かった"],["いい (good)","いい","よくない","よかった"],["な-adjective","[静]{しず}かだ","[静]{しず}かじゃない","[静]{しず}かだった"],["noun","[雨]{あめ}だ","[雨]{あめ}じゃない","[雨]{あめ}だった"]]},
      "Past negatives follow the ない pattern: [高]{たか}くなかった, よくなかった, [静]{しず}かじゃなかった, [雨]{あめ}じゃなかった. In writing and careful speech, じゃ is often replaced by では: [静]{しず}かではない."
    ]},
    {h:"Saying what you want: ～たい", body:[
      "To say you want to do something, take the ます-form, remove ます, and add たい. What is left after removing ます is the [[masu-stem|ます stem]]; the result is the [[tai-form]].",
      {table:[["ます-form","～たい","Meaning"],["[行]{い}きます","[行]{い}きたい","want to go"],["[食]{た}べます","[食]{た}べたい","want to eat"],["します","したい","want to do"],["[来]{き}ます","[来]{き}たい","want to come"]]},
      "～たい ends in い and conjugates exactly like an い-adjective. Add です to make it polite:",
      {list:["[行]{い}きたいです: I want to go.","[行]{い}きたくないです: I don’t want to go.","[行]{い}きたかったです: I wanted to go.","[行]{い}きたくなかったです: I didn’t want to go."]},
      {ex:"[来年]{らいねん}、[日本]{にほん}へ[行]{い}きたいです。\nI want to go to Japan next year.\n\n[今日]{きょう}は[何]{なに}も[食]{た}べたくないです。\nI don’t want to eat anything today.\n\n[冷]{つめ}たい[水]{みず}が[飲]{の}みたいです。 / [冷]{つめ}たい[水]{みず}を[飲]{の}みたいです。\nI want to drink some cold water. (Both が and を are fine here.)", label:"～たい"},
      "Three points about using it:",
      {list:[
        "**For your own wishes, or a question to a friend.** [何]{なに}が[食]{た}べたいですか (What do you want to eat?) is fine with friends and people at your own level.",
        "**Not for other people’s minds.** Japanese doesn’t normally state someone else’s wishes as a fact, because you can’t see inside their head. Instead of ✗ “サラさんはすしが[食]{た}べたいです” (it sounds as if you can read her mind), report what you know: サラさんはすしが[食]{た}べたいと[言]{い}っています (Sara says she wants to eat sushi). You will meet another way, ～たがっています, later (this track teaches it at N4).",
        "**Not as an offer to someone senior.** [先生]{せんせい}、コーヒーが[飲]{の}みたいですか sounds as if you are probing your teacher’s private wishes. Offer instead: [先生]{せんせい}、コーヒーはいかがですか (Would you like some coffee?)."
      ]}
    ]},
    {h:"Please don’t: ～ないでください", body:[
      "Add でください to the ない-form to ask someone **not** to do something.",
      {ex:"ここでたばこを[吸]{す}わないでください。\nPlease don’t smoke here.\n\n[忘]{わす}れないでください。\nPlease don’t forget.\n\n[心配]{しんぱい}しないでください。\nPlease don’t worry.", label:"～ないでください"},
      "[吸]{す}う (smoke, breathe in) ends in う, so its ない-form uses わ: [吸]{す}わない. Watch out for that one.",
      "Compare it with ～てはいけません from Lesson 2. ～てはいけません states a rule (“you must not”); ～ないでください makes a request (“please don’t”). Both appear on signs, but ～ないでください is softer. To someone who is worrying about you, [心配]{しんぱい}しないでください is kind; [心配]{しんぱい}してはいけません would sound like an order."
    ]},
    {h:"Giving reasons with から", body:[
      "After a sentence, から means “because” or “so”. The reason comes first, then から, then the result.",
      {ex:"[雨]{あめ}が[降]{ふ}っていますから、タクシーで[行]{い}きます。\nIt’s raining, so I’ll go by taxi.\n\n[明日]{あした}テストがありますから、[今晩]{こんばん}は[勉強]{べんきょう}します。\nI have a test tomorrow, so I’ll study tonight.\n\n[暑]{あつ}いですから、[窓]{まど}を[開]{あ}けてください。\nIt’s hot, so please open the window.", label:"Reason から result"},
      "Before から you can use the polite form ([暑]{あつ}いですから) or the plain form ([暑]{あつ}いから). Both are correct in a polite sentence; the polite form sounds a little more careful.",
      "After a noun or a な-adjective in the plain form, you need だ: [雨]{あめ}だから, [暇]{ひま}だから. Without it, [雨]{あめ}から means “from the rain”, which is a different から.",
      "To ask why, use どうして. To answer, put からです at the end:",
      {ex:"A: どうして[昨日]{きのう}[来]{き}ませんでしたか。\nB: [頭]{あたま}が[痛]{いた}かったからです。\nA: Why didn’t you come yesterday? B: Because I had a headache.", label:"どうして…？ …からです"},
      "Don’t confuse the two から. After a time or a place, から means “from”: [九時]{くじ}から (from nine o’clock), [駅]{えき}から (from the station). After a sentence, it means “because”. The glossary has both: [[particle-kara-made]] and [[kara-reason]].",
      {tip:"You will also hear ので for “because”. It sounds softer and is common in polite explanations and requests. Many N5 lists leave it for N4, though some textbooks teach it earlier; for now, から works in everyday situations."}
    ]},
    {h:"Near neighbours: ～たい and ほしい, polite and plain", body:[
      "～たい is for **actions** you want to do. For **things** you want to have, use ほしい, an い-adjective, with が:",
      {table:[["Want","Pattern","Example"],["a thing","noun が ほしいです","[新]{あたら}しいパソコンがほしいです。\nI want a new computer."],["to do something","ます stem + たいです","[新]{あたら}しいパソコンを[買]{か}いたいです。\nI want to buy a new computer."]]},
      "Both behave like い-adjectives: ほしくないです (don’t want), ほしかったです (wanted). And the same caution applies: they describe **your own** wishes, so don’t use them to state someone else’s.",
      "When should you use plain forms in your own speech? For now, a simple rule works: in a sentence you say to someone, keep the **end** of the sentence polite (です or ます). Inside the sentence, before から or でください, the plain form is fine and normal:",
      {ex:"[明日]{あした}は[休]{やす}みだから、[映画]{えいが}を[見]{み}に[行]{い}きます。\nI have tomorrow off, so I’m going to see a film. (Plain だから inside, polite ます at the end.)\n\n[大事]{だいじ}な[書類]{しょるい}ですから、なくさないでください。\nIt’s an important document, so please don’t lose it. (Polite ですから inside; the ない-form before でください.)", label:"Plain inside, polite at the end"},
      "Ending a sentence in the plain form (“[行]{い}く。”, “[食]{た}べた？”) makes it casual. That is how friends talk, and Unit 5 shows you how to do it well. Until then, a sentence that ends politely will never sound rude."
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[買]{か}あない","[買]{か}わない","う → わ in the ない-form."],["あらない","ない","The plain negative of ある is ない."],["[来]{く}ない (for [来]{く}る)","[来]{こ}ない","[来]{く}る → [来]{こ}ない, read こない."],["[行]{い}くたいです","[行]{い}きたいです","たい joins the ます stem: [行]{い}き."],["[行]{い}きたいでした","[行]{い}きたかったです","～たい is an い-adjective: its past is ～たかった."],["[走]{はし}るないでください","[走]{はし}らないでください","でください follows the ない-form."],["[休]{やす}みから、…","[休]{やす}みだから / [休]{やす}みですから","After a noun, add だ or です before から."]]},
      "These forms take a while to become automatic. Mixing them up is part of learning, and each mistake you notice and fix makes the right form stronger. Reference: {{nai-and-ta-forms}}."
    ]}
   ],
   try:[
    {id:"e3u3-l3-x1", type:"match", q:"Match each verb to its ない-form, written in hiragana.", pairs:[
      ["[買]{か}う (buy)","かわない","う → わ, not あ."],
      ["[行]{い}く (go)","いかない","く → か: regular here, even though [行]{い}く is irregular in the て-form."],
      ["[来]{く}る (come)","こない","Irregular: [来]{こ}ない."],
      ["ある (there is)","ない","Irregular: ある → ない."],
      ["[話]{はな}す (speak)","はなさない","す → さ."]
    ]},
    {id:"e3u3-l3-x2", type:"sort", q:"Is each one a correct plain form? The furigana shows how it is read.", buckets:["Correct","Not a correct form"], items:[
      {t:"[帰]{かえ}らない (don’t go home)", b:0, why:"[帰]{かえ}る is godan, so る → ら + ない."},
      {t:"[帰]{かえ}ない (don’t go home)", b:1, why:"That is the ichidan pattern. [帰]{かえ}る is godan ([帰]{かえ}ります), so it is [帰]{かえ}らない."},
      {t:"[食]{た}べなかった (didn’t eat)", b:0, why:"[食]{た}べない → [食]{た}べなかった, like an い-adjective."},
      {t:"[飲]{の}んだ (drank)", b:0, why:"The て-form is [飲]{の}んで, so the た-form is [飲]{の}んだ."},
      {t:"[飲]{の}みた (drank)", b:1, why:"Godan verbs don’t add た to the ます stem. む → んだ: [飲]{の}んだ."},
      {t:"[書]{か}いた (wrote)", b:0, why:"く → いた, just like く → いて."},
      {t:"[行]{い}いた (went)", b:1, why:"[行]{い}く is the exception in both forms: [行]{い}って, [行]{い}った."},
      {t:"[来]{く}ない (don’t come)", b:1, why:"The kanji is read こ here: [来]{こ}ない."}
    ]},
    {id:"e3u3-l3-x3", type:"mcq", q:"What is the plain past (た-form) of [泳]{およ}ぐ (swim)?", options:[
      {t:"[泳]{およ}いだ", ok:true, why:"Right. The て-form is [泳]{およ}いで, so the た-form is [泳]{およ}いだ."},
      {t:"[泳]{およ}いた", why:"ぐ gives a voiced で in the て-form, so it gives だ in the た-form: [泳]{およ}いだ."},
      {t:"[泳]{およ}んだ", why:"んだ belongs to verbs ending in む, ぶ and ぬ. ぐ → いだ."},
      {t:"[泳]{およ}った", why:"った belongs to verbs ending in う, つ and る."}
    ]},
    {id:"e3u3-l3-x4", type:"mcq", q:"How do you say “I want to go to Japan next year” politely?", options:[
      {t:"[来年]{らいねん}、[日本]{にほん}へ[行]{い}きたいです。", ok:true, why:"Right. ます stem [行]{い}き + たい, plus です for politeness."},
      {t:"[来年]{らいねん}、[日本]{にほん}へ[行]{い}くたいです。", why:"たい joins the ます stem ([行]{い}き), not the dictionary form."},
      {t:"[来年]{らいねん}、[日本]{にほん}へ[行]{い}きたいだです。", why:"～たい is an い-adjective, so it takes です directly, with no だ."},
      {t:"[来年]{らいねん}、[日本]{にほん}へ[行]{い}きたかったです。", why:"～たかったです is past (“I wanted to go”), which doesn’t fit “next year”."}
    ]},
    {id:"e3u3-l3-x5", type:"mcq", q:"A school wants a sign that says “Please don’t run in the corridor” ([廊下]{ろうか}, corridor). Which is correct?", options:[
      {t:"[廊下]{ろうか}を[走]{はし}らないでください。", ok:true, why:"Right. [走]{はし}る is godan, so the ない-form is [走]{はし}らない, plus でください."},
      {t:"[廊下]{ろうか}を[走]{はし}るないでください。", why:"でください follows the ない-form, not the dictionary form."},
      {t:"[廊下]{ろうか}を[走]{はし}りないでください。", why:"There is no form [走]{はし}りない. Godan verbs change る to ら: [走]{はし}らない."},
      {t:"[廊下]{ろうか}を[走]{はし}ってください。", why:"This means “Please run in the corridor”: the opposite of the sign’s message."}
    ]},
    {id:"e3u3-l3-x6", type:"spot", q:"Mei sent this message to a friend. Tap each part with a **grammar mistake**.", ask:"has a grammar mistake", parts:[
      {t:"[昨日]{きのう}は[頭]{あたま}が[痛]{いた}いでしたから、", flag:true, why:"A mistake. The past of an い-adjective uses かった: [痛]{いた}かったですから (or plain [痛]{いた}かったから). [痛]{いた}いでした is a very common slip."},
      {t:"[電話]{でんわ}しませんでした。", flag:false, why:"Correct: the polite past negative of [電話]{でんわ}する."},
      {t:"すみません。", flag:false, why:"Correct and natural."},"\n",
      {t:"[今日]{きょう}は[雨]{あめ}から、", flag:true, why:"A mistake. After a noun, add だ or です before から: [雨]{あめ}だから or [雨]{あめ}ですから. [雨]{あめ}から would mean “from the rain”."},
      {t:"[公園]{こうえん}へ[行]{い}きません。", flag:false, why:"Correct: the result, after the reason."},
      {t:"[家]{いえ}で[映画]{えいが}を[見]{み}たいです。", flag:false, why:"Correct: ます stem [見]{み} + たいです."},"\n",
      {t:"[明日]{あした}は[暇]{ひま}ですから、", flag:false, why:"Correct: a polite form before から."},
      {t:"[一緒]{いっしょ}に[買]{か}い[物]{もの}に[行]{い}きませんか。", flag:false, why:"Correct: ～ませんか is a polite invitation (Unit 2)."}
    ]},
    {id:"e3u3-l3-x7", type:"mcq", q:"Which sentence means “I’m tired, so I’m going home”? ([疲]{つか}れました is the usual way to say “I’m tired”: the change has happened.)", options:[
      {t:"[疲]{つか}れましたから、[帰]{かえ}ります。", ok:true, why:"Right. The reason ([疲]{つか}れました) comes before から, and the result ([帰]{かえ}ります) comes after."},
      {t:"[帰]{かえ}りますから、[疲]{つか}れました。", why:"This reverses cause and result: “I’m going home, so I’m tired”. The reason goes before から."},
      {t:"[疲]{つか}れましたから、[帰]{かえ}りました。", why:"Grammatical, but it means “I was tired, so I went home”: the going home is already over."},
      {t:"[疲]{つか}れましたまで、[帰]{かえ}ります。", why:"まで means “until”, not “because”."}
    ]}
   ],
   apply:{
    intro:"Write about your own life, using the forms from this lesson. Keep the notes for yourself.",
    tasks:[
     {t:"Fill in a plain-form table for ten verbs", how:[
       "Choose ten verbs: at least four godan verbs (include one ending in う), three ichidan verbs, する and [来]{く}る.",
       "For each, write the four plain forms (dictionary form, ない, た, なかった) and the matching polite forms.",
       "Check them in a dictionary that lists verb forms, such as Jisho.org (“Show inflections”) or OJAD."
     ], write:"[買]{か}う・[買]{か}わない・[買]{か}った・[買]{か}わなかった …"},
     {t:"Write five wishes, with reasons", how:[
       "Write five sentences about things you want (or don’t want) to do this year, with ～たいです or ～たくないです.",
       "Add a reason with から to at least three of them, for example: [日本語]{にほんご}が[好]{す}きですから、[日本]{にほん}へ[行]{い}きたいです。"
     ], write:"1… 2… 3… 4… 5…"},
     {t:"Make three “please don’t” signs", how:[
       "Think of three things you would like people not to do at home, at work or in a shared space.",
       "Write each as a sign with ～ないでください. Then rewrite one as a rule with ～てはいけません and notice how much firmer it sounds."
     ], write:"Sign 1… Sign 2… Sign 3… As a rule…"}
    ],
    proof:"A checked table of plain forms for ten verbs, five wishes (three with reasons), and three signs with ～ないでください."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Negative Verbs” and “Past Tense”", note:"The plain negative and plain past, with the ある → ない exception."},
    {book:"taekim", where:"Essential Grammar, “Desire and Suggestions”, section “Verbs you want to do with 「たい」”", note:"～たい and its い-adjective conjugation."},
    {book:"irodori", where:"Starter, topic “Holidays”, Lessons 17 “I went to see a movie.” and 18 “I want to go to a hot spring.”", note:"Talking about what you did and what you want to do, with audio."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e3u3-l4", title:"Numbers, counters and comparisons", minutes:60,
   hook:{q:"Pencils ([鉛筆]{えんぴつ}) are counted with the counter ～ほん, written [本]{ほん}. How do you say “three pencils”?", options:["さんほん","さんぼん","さんぽん","みっつほん"], answer:1, reveal:"**さんぼん.** The counter [本]{ほん} changes its first sound after some numbers: いっぽん (1), にほん (2), さんぼん (3), ろっぽん (6)… It looks chaotic, but it follows a few patterns that also apply to other counters. This lesson gives you the numbers, the most common counters with their sound changes, and how to compare things."},
   goals:[
     "Read and say numbers into the tens of thousands, including 300, 600, 800, 3,000 and 8,000, and prices in [円]{えん}",
     "Count with the right counter: ～つ, [人]{にん}, [枚]{まい}, [本]{ほん}, [匹]{ひき}, [階]{かい}, [回]{かい}, [分]{ふん} and [時]{じ}",
     "Predict the counter sound changes such as いっぽん, さんぼん and ろっぽん",
     "Put a number and counter in the right place in a sentence, including with あります and います",
     "Compare two or more things with より, のほう and いちばん"
   ],
   learn:[
    {h:"Numbers 1 to 10, and two ways of counting", body:[
      {lead:"Japanese has two sets of numbers. Most counting uses numbers borrowed from Chinese long ago (いち, に, さん…). A few words keep the older native Japanese numbers (ひとつ, ふたつ…)."},
      {table:[["Number","Usual reading","Other reading","Native (～つ)"],["1 [一]{いち}","いち","—","ひとつ"],["2 [二]{に}","に","—","ふたつ"],["3 [三]{さん}","さん","—","みっつ"],["4 [四]{よん}","よん","し, よ","よっつ"],["5 [五]{ご}","ご","—","いつつ"],["6 [六]{ろく}","ろく","—","むっつ"],["7 [七]{なな}","なな","しち","ななつ"],["8 [八]{はち}","はち","—","やっつ"],["9 [九]{きゅう}","きゅう","く","ここのつ"],["10 [十]{じゅう}","じゅう","—","とお"]]},
      "Zero is ゼロ or れい. 4, 7 and 9 have two readings each. When you count on your own, よん, なな and きゅう are the usual choices. But some words fix the reading, and you simply learn them: [四時]{よじ} (four o’clock), [九時]{くじ}, [四月]{しがつ} (April). Seven o’clock is usually [七時]{しちじ}, though ななじ is also heard. Lesson 5 covers time and dates.",
      "The native numbers with ～つ count general things, such as apples, boxes, ideas or questions, up to ten: りんごを[三]{みっ}つください (Three apples, please). From eleven on, people use the ordinary numbers without つ: じゅういち, じゅうに. To ask how many, say いくつ."
    ]},
    {h:"Big numbers and prices", body:[
      "Numbers above ten are built like a calculator display: [二十]{にじゅう} is “two tens”, [三十五]{さんじゅうご} is “three tens and five”. Then come [百]{ひゃく} (100), [千]{せん} (1,000) and [万]{まん} (10,000).",
      {table:[["Number","Reading","Note"],["100 [百]{ひゃく}","ひゃく","not いちひゃく"],["300 [三百]{さんびゃく}","さんびゃく","ひ → び after さん"],["600 [六百]{ろっぴゃく}","ろっぴゃく","small っ, ひ → ぴ"],["800 [八百]{はっぴゃく}","はっぴゃく","small っ, ひ → ぴ"],["1,000 [千]{せん}","せん","usually not いっせん"],["3,000 [三千]{さんぜん}","さんぜん","せ → ぜ after さん"],["8,000 [八千]{はっせん}","はっせん","small っ"],["10,000 [一万]{いちまん}","いちまん","always いち before まん"]]},
      "The big difference from English is that Japanese groups large numbers in **fours**, not threes. 10,000 is one [万]{まん}, so 100,000 is [十万]{じゅうまん} (“ten man”) and 1,000,000 is [百万]{ひゃくまん}. 25,000 is [二万五千]{にまんごせん}. When you see a long number, count four digits from the right to find the まん.",
      "[何百]{なんびゃく} (how many hundreds) and [何千]{なんぜん} change like 3, because なん also ends in ん.",
      "Prices use [円]{えん} (yen): [百円]{ひゃくえん}, [千円]{せんえん}, [一万円]{いちまんえん}. Note [四円]{よえん} (4 yen). To ask the price, say いくらですか.",
      {ex:"A: このかばんはいくらですか。\nB: [八千円]{はっせんえん}です。\nA: How much is this bag? B: It’s 8,000 yen.\n\nコーヒーは[一]{ひと}つ[三百五十円]{さんびゃくごじゅうえん}です。\nCoffee is 350 yen a cup.", label:"Prices"}
    ]},
    {h:"Counters: what they are and how to use them", body:[
      "In English you say “two sheets of paper” or “three cups of coffee”. Japanese does this with almost everything: a number is followed by a [[counter]] that shows what kind of thing is being counted.",
      {table:[["Counter","Counts","Examples"],["～つ","general things (up to 10)","りんご, [箱]{はこ}, [質問]{しつもん}"],["～[人]{にん}","people","[学生]{がくせい}, [友達]{ともだち}"],["～[枚]{まい}","flat, thin things","[紙]{かみ}, [切手]{きって}, シャツ, [皿]{さら}, チケット"],["～[本]{ほん}","long, thin things","[鉛筆]{えんぴつ}, [傘]{かさ}, ペットボトル, [木]{き}"],["～[匹]{ひき}","small animals, fish, insects","[猫]{ねこ}, [犬]{いぬ}, [魚]{さかな}"],["～[階]{かい}","floors of a building","[三階]{さんがい} (third floor)"],["～[回]{かい}","times (how often)","[二回]{にかい} (twice)"],["～[分]{ふん}","minutes","[五分]{ごふん} (five minutes)"],["～[時]{じ}","o’clock","[三時]{さんじ} (three o’clock)"]]},
      "The number and counter usually come **after** the noun and its particle, just before the verb:",
      {ex:"りんごを[三]{みっ}つ[買]{か}いました。\nI bought three apples.\n\n[切手]{きって}を[五枚]{ごまい}ください。\nFive stamps, please.\n\n[学生]{がくせい}が[二十人]{にじゅうにん}います。\nThere are twenty students.", label:"Where the number goes"},
      "To ask how many, put [何]{なん} in front of the counter: [何人]{なんにん}, [何枚]{なんまい}, [何本]{なんぼん}, [何匹]{なんびき}, [何階]{なんがい}, [何回]{なんかい}, [何分]{なんぷん}, [何時]{なんじ}. For ～つ, ask いくつ.",
      "People have special native readings for one and two: [一人]{ひとり} and [二人]{ふたり}. From three on, it’s regular: [三人]{さんにん}, [四人]{よにん} (not よんにん), [五人]{ごにん}…"
    ]},
    {h:"The sound changes", body:[
      "Some counters change their first sound after certain numbers. The changes look random at first, but they follow a pattern.",
      {list:[
        "**1, 6, 8 and 10** shrink to a small っ (a [[sokuon]]) before the counters in this unit that start with a k sound or an h/f sound: いっかい, ろっかい, はっかい, じゅっかい. With 8, both forms are correct: はっかい and はちかい. (Counters starting with other sounds can behave differently; you will learn them as you meet them.)",
        "After that small っ, an **h-sound becomes p**: いっぽん, ろっぴき, じゅっぷん.",
        "After **3** and **[何]{なん}**, which end in ん, an h-sound becomes **b** with [本]{ほん} and [匹]{ひき} (さんぼん, なんびき), but **p** with [分]{ふん} (さんぷん, なんぷん). [分]{ふん} also becomes ぷん after 4: よんぷん. [階]{かい} (floor) can also voice after ん: さんがい, なんがい (さんかい and なんかい are also used).",
        "Counters that start with an m or n sound, such as [枚]{まい} and [人]{にん}, never change."
      ]},
      {fig:'<svg viewBox="0 0 340 364"><text x="170" y="20" text-anchor="middle">Why いっぽん but さんぼん?</text><rect class="d-lup" x="8" y="32" width="324" height="88" rx="8" stroke-width="2"/><text x="20" y="58">いち + ほん → いっぽん</text><text class="s" x="20" y="82">1, 6, 8, 10 shrink to a small っ</text><text class="s" x="20" y="104">after っ, h → p: ほ → ぽ</text><rect class="d-sage" x="8" y="128" width="324" height="88" rx="8" stroke-width="2"/><text x="20" y="154">さん + ほん → さんぼん</text><text class="s" x="20" y="178">after ん (3 and なん)</text><text class="s" x="20" y="200">h → b: ほ → ぼ (but ふん → ぷん)</text><rect class="d-panel" x="8" y="224" width="324" height="66" rx="8" stroke-width="1.5"/><text x="20" y="250">に + ほん → にほん</text><text class="s" x="20" y="274">2, 5, 7, 9: no change</text><rect class="d-panel" x="8" y="298" width="324" height="58" rx="8" stroke-width="1.5"/><text x="20" y="322">まい, にん: never change</text><text class="s" x="20" y="344">いちまい, ろくまい, はちまい</text></svg>', alt:"Four panels. One: いち plus ほん gives いっぽん; 1, 6, 8 and 10 shrink to a small っ, and after っ an h-sound becomes p. Two: さん plus ほん gives さんぼん; after ん (in 3 and なん) an h-sound becomes b, but ふん becomes ぷん. Three: に plus ほん gives にほん; 2, 5, 7 and 9 cause no change. Four: まい and にん never change, as in いちまい, ろくまい, はちまい.", cap:"Two kinds of change: a small っ with h → p, and ん with h → b. Some counters never change."},
      "Here are the counters of this unit in full. The question form is in the last row.",
      {table:[["","～[本]{ほん}","～[匹]{ひき}","～[分]{ふん}"],["1","いっぽん","いっぴき","いっぷん"],["2","にほん","にひき","にふん"],["3","さんぼん","さんびき","さんぷん"],["4","よんほん","よんひき","よんぷん"],["5","ごほん","ごひき","ごふん"],["6","ろっぽん","ろっぴき","ろっぷん"],["7","ななほん","ななひき","ななふん"],["8","はっぽん (はちほん)","はっぴき (はちひき)","はっぷん (はちふん)"],["9","きゅうほん","きゅうひき","きゅうふん"],["10","じゅっぽん","じゅっぴき","じゅっぷん"],["how many?","なんぼん","なんびき","なんぷん"]]},
      {table:[["","～[階]{かい} (floor)","～[回]{かい} (times)","～[枚]{まい}"],["1","いっかい","いっかい","いちまい"],["2","にかい","にかい","にまい"],["3","さんがい (also さんかい)","さんかい","さんまい"],["4","よんかい","よんかい","よんまい"],["5","ごかい","ごかい","ごまい"],["6","ろっかい","ろっかい","ろくまい"],["7","ななかい","ななかい","ななまい"],["8","はっかい (はちかい)","はっかい (はちかい)","はちまい"],["9","きゅうかい","きゅうかい","きゅうまい"],["10","じゅっかい","じゅっかい","じゅうまい"],["how many?","なんがい (also なんかい)","なんかい","なんまい"]]},
      {table:[["","～つ","～[人]{にん}","～[時]{じ}"],["1","ひとつ","ひとり","いちじ"],["2","ふたつ","ふたり","にじ"],["3","みっつ","さんにん","さんじ"],["4","よっつ","よにん","よじ"],["5","いつつ","ごにん","ごじ"],["6","むっつ","ろくにん","ろくじ"],["7","ななつ","ななにん (also しちにん)","しちじ (also ななじ)"],["8","やっつ","はちにん","はちじ"],["9","ここのつ","きゅうにん","くじ"],["10","とお","じゅうにん","じゅうじ"],["how many?","いくつ","なんにん","なんじ"]]},
      "With 10, modern speech mostly says じゅっ (じゅっぽん, じゅっぷん). Older materials and many dictionaries write じっ (じっぽん, じっぷん). The official list of everyday kanji readings ([常用漢字表]{じょうようかんじひょう}, 2010) accepts both, so both are correct.",
      {tip:"Don’t try to learn every cell at once. Learn the patterns, then learn ～つ, [人]{にん} and [本]{ほん} first: they are the ones you will use most. Come back to the tables when you need them."}
    ]},
    {h:"Counting what is there: あります and います", body:[
      "Counters are often used with [[aru-iru|あります and います]], the verbs of existence from Unit 2. Remember the split: あります for things and plants, います for people and animals.",
      {ex:"[机]{つくえ}の[上]{うえ}に[鉛筆]{えんぴつ}が[三本]{さんぼん}あります。\nThere are three pencils on the desk.\n\n[家]{いえ}に[猫]{ねこ}が[二匹]{にひき}います。\nWe have two cats at home. (Literally: at home there are two cats.)\n\nA: [教室]{きょうしつ}に[学生]{がくせい}が[何人]{なんにん}いますか。\nB: [十二人]{じゅうににん}います。\nA: How many students are in the classroom? B: There are twelve.", label:"Counting with あります and います"},
      "One + counter + も + a negative verb means “not even one”: [一人]{ひとり}もいません (there isn’t a single person), [一枚]{いちまい}もありません (there isn’t a single sheet).",
      "For a building, the floor uses [階]{かい} with に: トイレは[二階]{にかい}にあります (The toilet is on the second floor). In Japan the ground floor is [一階]{いっかい}, so [二階]{にかい} is the floor above it. The reference page is {{existence-aru-iru}}."
    ]},
    {h:"Comparing things: より, のほう and いちばん", body:[
      "To compare two things, use より (than):",
      {ex:"このかばんはあのかばんより[高]{たか}いです。\nThis bag is more expensive than that bag.\n\n[今日]{きょう}は[昨日]{きのう}より[寒]{さむ}いです。\nToday is colder than yesterday.", label:"A は B より…"},
      "To ask about two things, use どちら, the ど-word for choosing between two (see [[ko-so-a-do]]). Answer with のほう (“the side of…”):",
      {ex:"A: [電車]{でんしゃ}とバスと、どちらが[速]{はや}いですか。\nB: [電車]{でんしゃ}のほうが[速]{はや}いです。\nA: Which is faster, the train or the bus? B: The train is faster.\n\nA: [犬]{いぬ}と[猫]{ねこ}と、どちらが[好]{す}きですか。\nB: どちらも[好]{す}きです。\nA: Which do you like better, dogs or cats? B: I like both.", label:"どちら and のほう"},
      "You can also combine より and のほう in one statement: バスより[電車]{でんしゃ}のほうが[速]{はや}いです (The train is faster than the bus).",
      "For three or more, use ～の[中]{なか}で (“among…”) and いちばん (“the most”), with a question word that fits: [何]{なに} for things, だれ for people, どこ for places, いつ for times.",
      {ex:"A: [果物]{くだもの}の[中]{なか}で、[何]{なに}がいちばん[好]{す}きですか。\nB: いちごがいちばん[好]{す}きです。\nA: Which fruit do you like best? B: I like strawberries best.\n\nA: [家族]{かぞく}の[中]{なか}で、だれがいちばん[背]{せ}が[高]{たか}いですか。\nB: [父]{ちち}がいちばん[高]{たか}いです。\nA: Who is the tallest in your family? B: My father is.", label:"いちばん"},
      "Question words take が, never は: どちらが, [何]{なに}が, だれが. The answer keeps が: [電車]{でんしゃ}のほうが, いちごが. The glossary entry is [[comparison-yori]]."
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[猫]{ねこ}が[三本]{さんぼん}います。","[猫]{ねこ}が[三匹]{さんびき}います。","Animals use [匹]{ひき}; [本]{ほん} is for long, thin things."],["[鉛筆]{えんぴつ}を[六本]{ろくほん}","[鉛筆]{えんぴつ}を[六本]{ろっぽん}","6 + an h-sound: small っ and p."],["[四人]{よんにん}","[四人]{よにん}","Four people is よにん."],["[三百]{さんひゃく}","[三百]{さんびゃく}","After さん, ひ → び."],["[電車]{でんしゃ}とバスと、どれが[速]{はや}いですか。","…どちらが[速]{はや}いですか。","For a choice between two, use どちら."],["[何]{なに}はいちばん[好]{す}きですか。","[何]{なに}がいちばん[好]{す}きですか。","Question words take が."]]},
      "Counters are a classic area of forgetting, even for advanced learners. If you get one wrong, people will still understand you. Say the number with the most common counter you know, and pick up the right one when you hear it. More in {{counters}}."
    ]}
   ],
   try:[
    {id:"e3u3-l4-x1", type:"mcq", q:"Ana wants six bottles of water. Bottles (ペットボトル) are counted with ～ほん. How does she say six bottles?", options:[
      {t:"ろっぽん", ok:true, why:"Right. 6 shrinks to ろっ, and after the small っ, ほ becomes ぽ."},
      {t:"ろくほん", why:"With h-sound counters, 6 changes: ろく → ろっ, and ほ → ぽ."},
      {t:"ろくぼん", why:"The b-sound comes after ん (さんぼん). After 6 it is the small っ with p: ろっぽん."},
      {t:"むっつほん", why:"The native numbers (ひとつ, むっつ…) aren’t combined with counters like [本]{ほん}."}
    ]},
    {id:"e3u3-l4-x2", type:"match", q:"Match each thing to the counter you use for it.", pairs:[
      ["[傘]{かさ} (umbrellas)","～ほん (long, thin things)","Umbrellas are long and thin: [傘]{かさ}が[二本]{にほん}."],
      ["[切手]{きって} (stamps)","～まい (flat, thin things)","Stamps are flat and thin: [切手]{きって}を[五枚]{ごまい}."],
      ["[猫]{ねこ} (cats)","～ひき (small animals)","Cats are small animals: [猫]{ねこ}が[三匹]{さんびき}."],
      ["[友達]{ともだち} (friends)","～にん (people)","People: [友達]{ともだち}が[三人]{さんにん}, or [一人]{ひとり}, [二人]{ふたり}."],
      ["りんご (apples)","～つ (general things)","Round, everyday objects can use the general counter: [三]{みっ}つ."]
    ]},
    {id:"e3u3-l4-x3", type:"sort", q:"How does the counter ～ほん sound after each number? Sort them.", buckets:["～ぽん","～ぼん","～ほん"], items:[
      {t:"1 + ほん", b:0, why:"いっぽん: small っ, then h → p."},
      {t:"6 + ほん", b:0, why:"ろっぽん: small っ, then h → p."},
      {t:"10 + ほん", b:0, why:"じゅっぽん (or じっぽん): small っ, then h → p."},
      {t:"3 + ほん", b:1, why:"さんぼん: after ん, h → b."},
      {t:"なん + ほん (how many?)", b:1, why:"なんぼん: なん ends in ん, like さん."},
      {t:"2 + ほん", b:2, why:"にほん: 2 causes no change."},
      {t:"5 + ほん", b:2, why:"ごほん: 5 causes no change."},
      {t:"9 + ほん", b:2, why:"きゅうほん: 9 causes no change."}
    ]},
    {id:"e3u3-l4-x4", type:"number", q:"At a market, the seller tells Priya the price of a bicycle: にまんさんぜんごひゃくえん. Type the price as a number of yen.", answer:23500, tol:0, unit:"yen", why:"にまん = 2 × 10,000 = 20,000; さんぜん = 3,000; ごひゃく = 500. 20,000 + 3,000 + 500 = 23,500 yen.", wrongs:[
      {v:2350, tol:0, why:"This treats まん as 1,000. In Japanese, まん is 10,000, so にまん is 20,000."},
      {v:235000, tol:0, why:"This treats まん as 100,000. まん is 10,000: にまん is 20,000."},
      {v:20350, tol:0, why:"さんぜん is 3,000 (three thousand), not 300 (さんびゃく)."}
    ]},
    {id:"e3u3-l4-x5", type:"mcq", q:"How do you ask “Which is bigger, Tokyo or Osaka?”", options:[
      {t:"[東京]{とうきょう}と[大阪]{おおさか}と、どちらが[大]{おお}きいですか。", ok:true, why:"Right. どちら asks about a choice between two, and it takes が."},
      {t:"[東京]{とうきょう}と[大阪]{おおさか}と、どれが[大]{おお}きいですか。", why:"どれ is for choosing among three or more. For two, use どちら."},
      {t:"[東京]{とうきょう}と[大阪]{おおさか}と、どちらは[大]{おお}きいですか。", why:"Question words take が, not は: どちらが."},
      {t:"[東京]{とうきょう}は[大阪]{おおさか}より[大]{おお}きいですか。", why:"This is a correct sentence, but it is a yes/no question (“Is Tokyo bigger than Osaka?”), not “Which is bigger?”."}
    ]},
    {id:"e3u3-l4-x6", type:"spot", q:"Kenji wrote notes about his home. The furigana shows how he says each number. Tap each part with a **counter mistake**.", ask:"has a counter mistake", parts:[
      {t:"[家族]{かぞく}は[四人]{よにん}です。", flag:false, why:"Correct: four people is よにん."},"\n",
      {t:"[猫]{ねこ}が[二本]{にほん}います。", flag:true, why:"A mistake. Cats are counted with [匹]{ひき}: [二匹]{にひき}."},"\n",
      {t:"[部屋]{へや}は[三階]{さんがい}にあります。", flag:false, why:"Correct: さんがい (also heard as さんかい)."},"\n",
      {t:"[机]{つくえ}に[鉛筆]{えんぴつ}が[六本]{ろくほん}あります。", flag:true, why:"A mistake in the reading. 6 + [本]{ほん} is ろっぽん."},"\n",
      {t:"[切手]{きって}が[十枚]{じゅうまい}あります。", flag:false, why:"Correct: [枚]{まい} never changes, so it is じゅうまい."},"\n",
      {t:"[週]{しゅう}に[三回]{さんがい}ジムへ[行]{い}きます。", flag:true, why:"A mistake in the reading. [回]{かい} (times) is read さんかい; only [階]{かい} (floor) has the さんがい reading."},"\n",
      {t:"りんごが[三]{みっ}つあります。", flag:false, why:"Correct: [三]{みっ}つ with the general counter."}
    ]},
    {id:"e3u3-l4-x7", type:"mcq", q:"A friend asks: [夏]{なつ}と[冬]{ふゆ}と、どちらが[好]{す}きですか。 You prefer winter. What do you answer?", options:[
      {t:"[冬]{ふゆ}のほうが[好]{す}きです。", ok:true, why:"Right. Answer a どちら question with のほう: “I like winter better.”"},
      {t:"[冬]{ふゆ}より[好]{す}きです。", why:"より means “than”, so this says “I like (it) more than winter”: the opposite of what you mean."},
      {t:"[冬]{ふゆ}のほうが[好]{す}きじゃないです。", why:"This says you like winter **less**."},
      {t:"どちらも[好]{す}きです。", why:"This says you like both equally, but you prefer winter."}
    ]}
   ],
   apply:{
    intro:"Count real things around you. Saying numbers aloud helps them stick. Keep the notes for yourself.",
    tasks:[
     {t:"Count things at home or at work", how:[
       "Pick eight kinds of things around you: pens, sheets of paper, people, plates, plants, pets, chairs, bottles.",
       "For each, write a sentence with the right counter and あります or います, for example: [机]{つくえ}の[上]{うえ}にペンが[三本]{さんぼん}あります。",
       "Check every reading against the tables in this lesson. Say each sentence aloud."
     ], write:"1… 2… 3… 4… 5… 6… 7… 8…"},
     {t:"Read prices aloud", how:[
       "Find six prices: on a receipt, a menu or a shopping website (any currency is fine; say it as if it were yen).",
       "Write each one in hiragana and say it aloud. Include at least one number with 300, 600, 800, 3,000 or 8,000, and one over 10,000.",
       "Check the sound changes in the table of big numbers."
     ], write:"¥680 → ろっぴゃくはちじゅうえん …"},
     {t:"Compare things you know", how:[
       "Write three sentences comparing two things with より or のほう (two cities, two foods, two seasons).",
       "Write two いちばん questions and answer them, for example: [果物]{くだもの}の[中]{なか}で、[何]{なに}がいちばん[好]{す}きですか。"
     ], write:"Comparisons… いちばん questions and answers…"}
    ],
    proof:"Eight counter sentences about real things, six prices written in hiragana, and five comparison sentences."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Numbers and Counting”, sections “The Number System” and “Counting and Counters”", note:"Numbers, big numbers and counters, with sound-change tables."},
    {book:"taekim", where:"“Using 「方」 and 「よる」”, section “Using 「より」 for comparisons”", note:"Comparisons with のほう and より."},
    {book:"irodori", where:"Starter, topic “At Stores”, Lesson 16 “How much is this?”", note:"Prices and shopping, with audio."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e3u3-l5", title:"Time, dates, how long and how often", minutes:60,
   hook:{q:"On a Japanese calendar, the 20th of the month has a special reading. Which is it?", options:["はつか","はたち","ふたとおか","にじゅうか"], answer:0, reveal:"**はつか.** The first ten days of the month, the 14th, the 20th and the 24th have special readings, most of them built on the native Japanese numbers, such as ふつか (2nd) and みっか (3rd). はたち is a different word: it means twenty years old. Most other dates are regular: じゅうごにち (15th), にじゅういちにち (21st). This lesson gives you the time, days, months, dates, durations and frequency words you need for N5."},
   goals:[
     "Tell the time with [時]{じ}, [分]{ふん}, [半]{はん}, [午前]{ごぜん} and [午後]{ごご}",
     "Say the days of the week, the months and the dates, including the special readings such as ついたち and はつか",
     "Use に with times and dates, leave it out with words such as [明日]{あした}, and use から～まで for ranges",
     "Say how long something takes with [時間]{じかん}, [週間]{しゅうかん}, か[月]{げつ} and [年]{ねん}",
     "Say how often you do things with frequency words and ～に～[回]{かい}"
   ],
   learn:[
    {h:"Telling the time", body:[
      {lead:"Time uses two counters you met in Lesson 4: [時]{じ} for the hour and [分]{ふん} for the minutes."},
      {ex:"A: [今]{いま}、[何時]{なんじ}ですか。\nB: [三時十五分]{さんじじゅうごふん}です。\nA: What time is it now? B: It’s 3:15.", label:"[何時]{なんじ}ですか"},
      {table:[["Time","Reading","Watch out"],["4:00","[四時]{よじ}","not よんじ"],["7:00","[七時]{しちじ}","usually しち (ななじ is also heard)"],["9:00","[九時]{くじ}","く, not きゅう"],["4:04","[四時四分]{よじよんぷん}","よ for the hour, よん for the minutes"],["9:09","[九時九分]{くじきゅうふん}","く for the hour, きゅう for the minutes"],["10:10","[十時十分]{じゅうじじゅっぷん}","also じっぷん"]]},
      "[半]{はん} means half past: [六時半]{ろくじはん} (6:30). [午前]{ごぜん} (a.m.) and [午後]{ごご} (p.m.) come **before** the time: [午後二時]{ごごにじ} (2 p.m.). Timetables and many digital displays also use the 24-hour clock: [十八時]{じゅうはちじ} is 6 p.m.",
      "ごろ after a time means “at about”: [七時]{しちじ}ごろ[起]{お}きます (I get up at about seven).",
      "Words for times, days and dates, such as [三時]{さんじ}, [明日]{あした} and [毎朝]{まいあさ}, are called [[time-expression|time expressions]]. Where they go and which particle they take is explained below."
    ]},
    {h:"Days of the week and nearby days", body:[
      {table:[["Day","Reading","Kanji meaning"],["[月曜日]{げつようび}","げつようび","moon"],["[火曜日]{かようび}","かようび","fire"],["[水曜日]{すいようび}","すいようび","water"],["[木曜日]{もくようび}","もくようび","tree, wood"],["[金曜日]{きんようび}","きんようび","gold, metal"],["[土曜日]{どようび}","どようび","earth, soil"],["[日曜日]{にちようび}","にちようび","sun"]]},
      "Ask with [何曜日]{なんようび}ですか (What day of the week is it?). The kanji of the days are also some of the first N5 kanji, so this table doubles as kanji practice for Unit 4.",
      {table:[["","Last","This","Next"],["day","[昨日]{きのう} (yesterday)","[今日]{きょう} (today)","[明日]{あした} (tomorrow)"],["week","[先週]{せんしゅう}","[今週]{こんしゅう}","[来週]{らいしゅう}"],["month","[先月]{せんげつ}","[今月]{こんげつ}","[来月]{らいげつ}"],["year","[去年]{きょねん}","[今年]{ことし}","[来年]{らいねん}"]]},
      "[今日]{きょう}, [明日]{あした}, [昨日]{きのう} and [今年]{ことし} have special readings for the whole word, so you can’t build them from the readings of each kanji. Just learn them as words. (In formal speech you may also hear あす for [明日]{あした}.)"
    ]},
    {h:"Months and dates", body:[
      "Months are easy: the number plus [月]{がつ}. Only three need care: [四月]{しがつ} (April), [七月]{しちがつ} (July) and [九月]{くがつ} (September). Ask with [何月]{なんがつ}.",
      "Dates use [日]{にち} after the number, but the first ten days and three later dates have old native readings:",
      {fig:'<svg viewBox="0 0 340 306"><text x="170" y="20" text-anchor="middle">Dates with special readings</text><rect class="d-lup" x="8" y="32" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="18" y="54">1st</text><text x="64" y="54">ついたち</text><rect class="d-lup" x="8" y="70" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="18" y="92">2nd</text><text x="64" y="92">ふつか</text><rect class="d-lup" x="8" y="108" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="18" y="130">3rd</text><text x="64" y="130">みっか</text><rect class="d-lup" x="8" y="146" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="18" y="168">4th</text><text x="64" y="168">よっか</text><rect class="d-lup" x="8" y="184" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="18" y="206">5th</text><text x="64" y="206">いつか</text><rect class="d-lup" x="174" y="32" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="184" y="54">6th</text><text x="230" y="54">むいか</text><rect class="d-lup" x="174" y="70" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="184" y="92">7th</text><text x="230" y="92">なのか</text><rect class="d-lup" x="174" y="108" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="184" y="130">8th</text><text x="230" y="130">ようか</text><rect class="d-lup" x="174" y="146" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="184" y="168">9th</text><text x="230" y="168">ここのか</text><rect class="d-lup" x="174" y="184" width="158" height="34" rx="6" stroke-width="1.5"/><text class="s" x="184" y="206">10th</text><text x="230" y="206">とおか</text><rect class="d-rose" x="8" y="228" width="104" height="52" rx="6" stroke-width="1.5"/><text class="s" x="60" y="248" text-anchor="middle">14th</text><text x="60" y="270" text-anchor="middle">じゅうよっか</text><rect class="d-rose" x="118" y="228" width="104" height="52" rx="6" stroke-width="1.5"/><text class="s" x="170" y="248" text-anchor="middle">20th</text><text x="170" y="270" text-anchor="middle">はつか</text><rect class="d-rose" x="228" y="228" width="104" height="52" rx="6" stroke-width="1.5"/><text class="s" x="280" y="248" text-anchor="middle">24th</text><text x="280" y="270" text-anchor="middle">にじゅうよっか</text><text class="s" x="170" y="298" text-anchor="middle">All other dates: number + にち</text></svg>', alt:"Dates with special readings: 1st ついたち, 2nd ふつか, 3rd みっか, 4th よっか, 5th いつか, 6th むいか, 7th なのか, 8th ようか, 9th ここのか, 10th とおか; and 14th じゅうよっか, 20th はつか, 24th にじゅうよっか. All other dates are the number plus にち.", cap:"Thirteen dates to learn by heart. Everything else is regular."},
      "The other dates are regular: [十一日]{じゅういちにち}, [十五日]{じゅうごにち}, [三十日]{さんじゅうにち}. Two of them use the readings you know from the clock: [十七日]{じゅうしちにち} and [十九日]{じゅうくにち}. Ask with [何日]{なんにち}.",
      "Dates go from big to small: year, month, day, then the day of the week. For example, Saturday 7 November 2026 is written [2026年]{にせんにじゅうろくねん}[11月]{じゅういちがつ}[7日]{なのか}([土]{ど}). Numbers in dates are usually written with ordinary digits like these.",
      {warn:"The same kanji [一日]{ついたち} are read ついたち when they mean “the 1st” and いちにち when they mean “one day” (a period of time): [一日]{いちにち}[中]{じゅう}[雨]{あめ}でした (It rained all day). The other native forms do both jobs: [二日]{ふつか} is both “the 2nd” and “two days”."}
    ]},
    {h:"When: に, and from when to when: から～まで", body:[
      "Use に with clock times, dates, months and years: [七時]{しちじ}に[起]{お}きます, [五月]{ごがつ}に[日本]{にほん}へ[行]{い}きます, [2020年]{にせんにじゅうねん}に[結婚]{けっこん}しました. With days of the week, に is common, but people often leave it out in conversation: [日曜日]{にちようび}(に)[会]{あ}いましょう.",
      "Do **not** use に with words that are relative to now: [今日]{きょう}, [明日]{あした}, [昨日]{きのう}, [今]{いま}, [毎日]{まいにち}, [来週]{らいしゅう}, [今年]{ことし}. ✗ [明日]{あした}に[行]{い}きます → ✓ [明日]{あした}[行]{い}きます.",
      "から (from) and まで (until, as far as) mark the start and the end of a range, in time or in space. The glossary entry is [[particle-kara-made]].",
      {ex:"[銀行]{ぎんこう}は[九時]{くじ}から[三時]{さんじ}までです。\nThe bank is open from nine to three.\n\n[月曜日]{げつようび}から[金曜日]{きんようび}まで[働]{はたら}きます。\nI work from Monday to Friday.\n\n[家]{いえ}から[駅]{えき}まで[歩]{ある}いて[十分]{じゅっぷん}です。\nIt’s a ten-minute walk from my house to the station.", label:"から～まで"},
      {tip:"[十分]{じゅっぷん} (ten minutes) is written with the same kanji as [十分]{じゅうぶん} (enough). Context, and the long う in じゅうぶん, tell them apart."}
    ]},
    {h:"How long: durations", body:[
      "To say how long something lasts, use these words. Several can add [間]{かん} (“interval”) to make it clear that you mean a length of time, as in [三日間]{みっかかん} (for three days).",
      {table:[["Unit","Word","Example"],["minutes","～[分]{ふん} (or ～[分]{ふん}[間]{かん})","[三十分]{さんじゅっぷん}: thirty minutes"],["hours","～[時間]{じかん}","[二時間]{にじかん}: two hours"],["days","ふつか, みっか… (from 11: ～にち)","[三日]{みっか}: three days; [十五日]{じゅうごにち}: fifteen days"],["weeks","～[週間]{しゅうかん}","[一週間]{いっしゅうかん}: one week"],["months","～か[月]{げつ}","[六]{ろっ}か[月]{げつ}: six months"],["years","～[年]{ねん} (or ～[年]{ねん}[間]{かん})","[一年]{いちねん}: one year"]]},
      "Compare [三時]{さんじ} (three o’clock) with [三時間]{さんじかん} (three hours). [四時間]{よじかん} and [九時間]{くじかん} keep the clock readings よ and く.",
      "か[月]{げつ} starts with a k-sound, so the Lesson 4 changes apply in full: [一]{いっ}か[月]{げつ}, [六]{ろっ}か[月]{げつ}, [十]{じゅっ}か[月]{げつ} (8 is はっかげつ or はちかげつ). [週間]{しゅうかん} starts with an s-sound, where only 1, 8 and 10 shrink: [一週間]{いっしゅうかん}, [八週間]{はっしゅうかん}, [十週間]{じゅっしゅうかん}, but [六週間]{ろくしゅうかん}. The か in か[月]{げつ} is written in several ways (か, カ, ヶ), but it is always read か.",
      "Use ぐらい or くらい for “about” with an amount, and ごろ for a point in time: [二時間]{にじかん}ぐらい (about two hours), [二時]{にじ}ごろ (at about two o’clock).",
      "Durations don’t take に: [二時間]{にじかん}[勉強]{べんきょう}しました (I studied for two hours). For how long something takes, use かかります: [駅]{えき}まで[十五分]{じゅうごふん}ぐらいかかります (It takes about fifteen minutes to the station)."
    ]},
    {h:"How often: frequency words", body:[
      {table:[["Word","Meaning","Example"],["いつも","always","いつも[七時]{しちじ}に[起]{お}きます。"],["よく","often","よく[映画]{えいが}を[見]{み}ます。"],["ときどき","sometimes","ときどき[料理]{りょうり}をします。"],["あまり ＋ negative","not often, not much","あまりテレビを[見]{み}ません。"],["ぜんぜん ＋ negative","not at all, never","ぜんぜんお[酒]{さけ}を[飲]{の}みません。"]]},
      "These are [[frequency-word|frequency words]]. あまり and ぜんぜん go with a **negative** verb: ✗ あまり[見]{み}ます. In casual speech you will hear ぜんぜん with positive words too, as in ぜんぜん[大丈夫]{だいじょうぶ} (“totally fine”). It is very common, but many people feel it is casual, and some consider it incorrect, so in polite speech, writing and tests, pair ぜんぜん with a negative.",
      "For an exact frequency, use a period of time + に + a number with [回]{かい}:",
      {ex:"[一日]{いちにち}に[三回]{さんかい}[薬]{くすり}を[飲]{の}みます。\nI take medicine three times a day.\n\n[週]{しゅう}に[二回]{にかい}ジムへ[行]{い}きます。\nI go to the gym twice a week.\n\n[年]{ねん}に[一回]{いっかい}、[国]{くに}へ[帰]{かえ}ります。\nI go back to my home country once a year.", label:"～に～[回]{かい}"},
      "[毎]{まい} means “every”: [毎日]{まいにち} (every day), [毎朝]{まいあさ} (every morning), [毎晩]{まいばん} (every evening), [毎週]{まいしゅう} (every week), [毎月]{まいつき} (every month; also まいげつ), [毎年]{まいとし} (every year; also まいねん). Like [明日]{あした}, they don’t take に."
    ]},
    {h:"Worked example: reading a notice", body:[
      "Time words come together in notices and timetables. Here is a notice of the kind you might see at a library entrance, followed by how to read it.",
      {ex:"[図書館]{としょかん}のお[知]{し}らせ\n[開館]{かいかん}[時間]{じかん}：[午前]{ごぜん}[九時]{くじ}～[午後]{ごご}[八時]{はちじ}\n[休館日]{きゅうかんび}：[毎週]{まいしゅう}[月曜日]{げつようび}\n[12月]{じゅうにがつ}[29日]{にじゅうくにち}～[1月]{いちがつ}[3日]{みっか}はお[休]{やす}みです。", label:"A notice"},
      {ol:[
        "お[知]{し}らせ means “notice” or “announcement”. The heading tells you it is the library’s notice.",
        "[開館]{かいかん}[時間]{じかん} is “opening hours”. The wave dash ～ between two times is read から…まで: [午前]{ごぜん}[九時]{くじ}から[午後]{ごご}[八時]{はちじ}まで, 9 a.m. to 8 p.m.",
        "[休館日]{きゅうかんび} is “closed day”. [毎週]{まいしゅう}[月曜日]{げつようび} means every Monday.",
        "The last line uses ～ again for a range of dates: from 29 December to 3 January (じゅうにがつにじゅうくにちから、いちがつみっかまで) the library is closed. This is the New Year holiday, when many offices in Japan close."
      ]},
      "Notice that you didn’t need every kanji to get the meaning. The numbers, [時]{じ}, [月]{がつ}, [日]{にち} and the day of the week carried most of it. That is a useful reading strategy for signs and timetables, and Unit 4 practises it with more real-world texts."
    ]},
    {h:"Keep it going: review and the Kanji Lab", body:[
      "You have now met most of the N5 grammar: Unit 2’s sentence basics, particles and ます verbs, and this unit’s て-form, plain forms, counters and time. {{n5-grammar-patterns}} puts all the patterns on one page, and {{time-and-dates}} collects this lesson’s words.",
      "Counters and dates have many irregular readings, and everyone forgets some. That is normal. A few minutes of spaced review every day, where you see an item again just as you are about to forget it, works much better than cramming. The Kanji Lab does this for you.",
      {lab:"kl-n5", t:"Practise: the N5 kanji, including numbers, days and time words"},
      {lab:"kl-n5-vocab", t:"Practise: N5 vocabulary, including counters and time words"},
      "Unit 4 teaches the N5 kanji themselves, including the kanji for numbers, days of the week and time, so the words in this lesson will soon become easier to read.",
      "For more practice in everyday situations, [Irodori](https://www.irodori.jpf.go.jp/en/) is a free course from the Japan Foundation: you can download its textbooks as PDFs, with audio, from Starter (A1) through Elementary 1 and 2 (A2) to Pre-Intermediate (A2/B1). It is built around everyday situations in Japan. [Tae Kim’s Guide to Learning Japanese](https://www.guidetojapanese.org/learn/grammar/past) is a free online grammar guide that covers the forms in this unit."
    ]}
   ],
   try:[
    {id:"e3u3-l5-x1", type:"mcq", q:"How do you say “4:00” (four o’clock)?", options:[
      {t:"よじ", ok:true, why:"Right. Four o’clock uses よ: よじ."},
      {t:"よんじ", why:"よん is the usual reading of 4, but with [時]{じ} it is always よ: よじ."},
      {t:"しじ", why:"し is the other reading of 4, but it isn’t used for the time."},
      {t:"よっつじ", why:"The native number よっつ isn’t combined with [時]{じ}."}
    ]},
    {id:"e3u3-l5-x2", type:"match", q:"Match each date to its reading.", pairs:[
      ["the 1st","ついたち","A special native reading. (いちにち means “one day”.)"],
      ["the 2nd","ふつか","Native reading: ふつか."],
      ["the 8th","ようか","Native reading: ようか, with a long よう."],
      ["the 14th","じゅうよっか","じゅう + よっか: one of the three later special dates."],
      ["the 20th","はつか","A special reading; はたち means twenty years old."]
    ]},
    {id:"e3u3-l5-x3", type:"sort", q:"In a plain statement, does each time expression take に?", buckets:["Takes に","No に"], items:[
      {t:"[七時]{しちじ} (seven o’clock)", b:0, why:"A clock time: [七時]{しちじ}に[起]{お}きます."},
      {t:"[十一月三日]{じゅういちがつみっか} (3 November)", b:0, why:"A date: [十一月三日]{じゅういちがつみっか}に."},
      {t:"[2025年]{にせんにじゅうごねん} (2025)", b:0, why:"A year: [2025年]{にせんにじゅうごねん}に."},
      {t:"[明日]{あした} (tomorrow)", b:1, why:"Relative to now, so no に: [明日]{あした}[行]{い}きます."},
      {t:"[毎朝]{まいあさ} (every morning)", b:1, why:"[毎]{まい}～ words don’t take に: [毎朝]{まいあさ}[走]{はし}ります."},
      {t:"[今]{いま} (now)", b:1, why:"Relative to now: [今]{いま}[行]{い}きます."},
      {t:"[来週]{らいしゅう} (next week)", b:1, why:"Relative to now: [来週]{らいしゅう}[会]{あ}いましょう."}
    ]},
    {id:"e3u3-l5-x4", type:"number", q:"A film starts at [午後二時半]{ごごにじはん} and ends at [午後四時十五分]{ごごよじじゅうごふん}. How many minutes long is it?", answer:105, tol:0, unit:"minutes", why:"[二時半]{にじはん} is 2:30 and [四時十五分]{よじじゅうごふん} is 4:15. From 2:30 to 4:00 is 90 minutes, and from 4:00 to 4:15 is 15 more: 105 minutes (1 hour 45 minutes).", wrongs:[
      {v:145, tol:0, why:"That is “1 hour 45” written as one number. Convert the hour to 60 minutes: 60 + 45 = 105."},
      {v:135, tol:0, why:"This adds the extra 15 minutes instead of taking them away. 2:30 to 4:30 is 120 minutes, but the film ends 15 minutes **before** 4:30, so subtract: 120 − 15 = 105."}
    ]},
    {id:"e3u3-l5-x5", type:"order", q:"Put these lengths of time in order, from shortest to longest.", items:[
      {t:"[三十分]{さんじゅっぷん}", why:"Thirty minutes: the shortest."},
      {t:"[二時間]{にじかん}", why:"Two hours."},
      {t:"[二日]{ふつか}", why:"Two days (ふつか is both “the 2nd” and “two days”)."},
      {t:"[一週間]{いっしゅうかん}", why:"One week: seven days."},
      {t:"[三]{さん}か[月]{げつ}", why:"Three months."},
      {t:"[一年]{いちねん}", why:"One year: the longest."}
    ]},
    {id:"e3u3-l5-x6", type:"mcq", q:"How do you say “I don’t drink coffee much”?", options:[
      {t:"コーヒーはあまり[飲]{の}みません。", ok:true, why:"Right. あまり + a negative verb means “not much, not often”."},
      {t:"コーヒーはあまり[飲]{の}みます。", why:"あまり needs a negative verb: [飲]{の}みません."},
      {t:"コーヒーはよく[飲]{の}みます。", why:"This means “I often drink coffee”: the opposite."},
      {t:"コーヒーはいつも[飲]{の}みます。", why:"This means “I always drink coffee”."}
    ]},
    {id:"e3u3-l5-x7", type:"mcq", q:"How do you say “I work from nine to five”?", options:[
      {t:"[九時]{くじ}から[五時]{ごじ}まで[働]{はたら}きます。", ok:true, why:"Right. から marks the start and まで marks the end."},
      {t:"[九時]{くじ}まで[五時]{ごじ}から[働]{はたら}きます。", why:"This swaps the particles: “until nine, from five”."},
      {t:"[九時]{くじ}から[五時]{ごじ}に[働]{はたら}きます。", why:"に marks a point in time (“at five”), not the end of a range. Use まで."},
      {t:"[九時]{くじ}に[五時]{ごじ}まで[働]{はたら}きます。", why:"The start of a range takes から, not に."}
    ]}
   ],
   apply:{
    intro:"Use time words about your own week. Say them aloud as you write. Keep the notes for yourself.",
    tasks:[
     {t:"Write your weekly timetable", how:[
       "Write five sentences about your normal week with days, times and から～まで, for example: [月曜日]{げつようび}から[金曜日]{きんようび}まで、[九時]{くじ}から[五時]{ごじ}まで[働]{はたら}きます。",
       "Add when you get up and go to bed, with に and ごろ.",
       "Check every reading of 4, 7 and 9 against the tables."
     ], write:"[月曜日]{げつようび}… [毎朝]{まいあさ}…"},
     {t:"Dates that matter to you", how:[
       "Write five dates that matter to you (a birthday, a holiday, a deadline) in Japanese order: year, month, day, day of the week.",
       "Write the reading of each in hiragana. At least two should use a special reading (1st–10th, 14th, 20th or 24th). If none do, add a friend’s birthday or a festival that does."
     ], write:"[2027年]{にせんにじゅうななねん}[1月]{いちがつ}[1日]{ついたち} …"},
     {t:"How often and how long", how:[
       "Write five sentences about your habits with いつも, よく, ときどき, あまり～ません and ぜんぜん～ません.",
       "Write three sentences with ～に～[回]{かい} and two with a duration, for example: [毎日]{まいにち}[三十分]{さんじゅっぷん}[日本語]{にほんご}を[勉強]{べんきょう}します。"
     ], write:"Frequency… ～に～[回]{かい}… Durations…"},
     {t:"Start a daily Kanji Lab habit", how:[
       "Open the N5 kanji and N5 vocabulary decks in the Kanji Lab.",
       "Review for five minutes a day for the next week, at the same time each day.",
       "Note which numbers, days or time words you keep forgetting, and say them aloud in a sentence."
     ], write:"Days I reviewed… Words I keep forgetting…"}
    ],
    proof:"A weekly timetable with times and days, five important dates with their readings, ten sentences about how often and how long, and a week of five-minute Kanji Lab reviews."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Numbers and Counting”, sections “Dates”, “Time” and “A Span of Time”", note:"Dates with their special readings, clock times and durations."},
    {book:"irodori", where:"Starter, topic “Daily Life”, Lesson 9 “Lunch is from noon to 1 o’clock.”", note:"Times and から～まで in everyday schedules, with audio."}
   ]
  }
  ],
  checkpoint:["e3u3-q02","e3u3-q05","e3u3-q07","e3u3-q12","e3u3-q15","e3u3-q20","e3u3-q23","e3u3-q29","e3u3-q32","e3u3-q36","e3u3-q41","e3u3-q44"],
  codex:[
   {id:"te-form", title:"The て-form", aka:["te-form","te form","てけい","～て","～ています","te-iru"], tags:["japanese","grammar","n5","verbs"],
    summary:"The verb form ending in て or で: the connector behind “and then”, ～てください, ～てもいいです, ～てはいけません and ～ています.",
    levels:{
     starter:[
      "The **て-form** is the verb form that ends in て or で: [食]{た}べて (eat), [書]{か}いて (write), [読]{よ}んで (read). It has no tense and no politeness of its own. Think of it as a connector: other words snap onto it.",
      "It does many jobs. Between two verbs it means “and then”: [起]{お}きて、[朝]{あさ}ごはんを[食]{た}べます (I get up and eat breakfast). With ください it makes a polite request: [待]{ま}ってください (please wait). With います it describes an action in progress or a continuing state: [読]{よ}んでいます (is reading), [結婚]{けっこん}しています (is married). With もいいです and はいけません it gives and refuses permission.",
      "How you build it depends on the verb group. Ichidan verbs drop る and add て. Godan verbs change according to their last kana. The irregular verbs する and [来]{く}る become して and [来]{き}て. One common verb, [行]{い}く, is an exception: [行]{い}って.",
      "Everyone mixes up the rows at first. A few minutes of practice a day for a week or two makes them automatic."
     ],
     builder:[
      {table:[["Verb","Rule","Examples"],["godan ending in う・つ・る","→ って","[会]{あ}って, [待]{ま}って, [帰]{かえ}って"],["godan ending in む・ぶ・ぬ","→ んで","[飲]{の}んで, [遊]{あそ}んで, [死]{し}んで"],["godan ending in く","→ いて","[書]{か}いて, [聞]{き}いて"],["godan ending in ぐ","→ いで","[泳]{およ}いで, [急]{いそ}いで"],["godan ending in す","→ して","[話]{はな}して, [貸]{か}して"],["exception","[行]{い}く → [行]{い}って","not [行]{い}いて"],["ichidan","drop る + て","[食]{た}べて, [見]{み}て"],["irregular","する → して, [来]{く}る → [来]{き}て","[来]{き}て is read きて"]]},
      "**Which group?** For a verb ending in -iru or -eru, compare the dictionary form with the ます-form. If る is simply replaced by ます ([見]{み}る → [見]{み}ます), the verb is ichidan. If る becomes り ([帰]{かえ}る → [帰]{かえ}ります), it is godan. Common godan verbs of this kind are [帰]{かえ}る, [入]{はい}る, [走]{はし}る, [知]{し}る, [切]{き}る and [要]{い}る (need).",
      "**Adjectives and nouns** have て-forms too: [安]{やす}い → [安]{やす}くて, いい → よくて, [静]{しず}か → [静]{しず}かで, [学生]{がくせい} → [学生]{がくせい}で.",
      "**Patterns at N5:** ～て、～ (and then), ～てから (after doing), ～てください (please do), ～てもいいです (you may), ～てはいけません (you must not) and ～ています (is doing; is in a state). In a chain, only the last verb carries tense and politeness: [起]{お}きて、[食]{た}べて、[出]{で}かけました (I got up, ate and went out).",
      "**～ています** has two main meanings. With activity verbs ([食]{た}べる, [読]{よ}む) it means an action in progress. With change verbs ([結婚]{けっこん}する, [来]{く}る, [知]{し}る) it means the result is still true. It also describes habits and jobs. Note [知]{し}っています (know) but [知]{し}りません (don’t know), and まだ～ていません (not yet).",
      "The plain past (た-form) is built the same way, with た or だ in place of て or で."
     ],
     pro:[
      "**Where the shapes come from.** The て-form was originally the ます stem ([連用形]{れんようけい}) followed by the particle て. In godan verbs, sound changes called [音便]{おんびん} reshaped it over centuries: イ[音便]{おんびん} ([書]{か}きて → [書]{か}いて, [泳]{およ}ぎて → [泳]{およ}いで), [促音便]{そくおんびん}, a doubled consonant ([待]{ま}ちて → [待]{ま}って), and [撥音便]{はつおんびん}, a change to ん ([読]{よ}みて → [読]{よ}んで). Verbs ending in す did not change ([話]{はな}して).",
      "**[行]{い}く** takes the doubled consonant (って) instead of the イ sound that other く verbs take. Dictionaries based on JMdict, such as Jisho.org, label it “Godan verb - Iku/Yuku special class”. A few formal, written-style verbs ending in う keep the う: [問]{と}う → [問]{と}うて (ask), [請]{こ}う → [請]{こ}うて (beg). You will rarely need them.",
      "**Dialects.** In western Japan, some dialects change う verbs differently: [買]{か}うて (read こうて) for standard [買]{か}って, [言]{い}うて (read ゆうて) for [言]{い}って. Standard Japanese, and the JLPT, use って.",
      "**Formal speech** sometimes joins clauses with the ます-form’s own て-form, ～まして: お[集]{あつ}まりいただきまして、ありがとうございます (Thank you for gathering here). Learners don’t need to produce it at N5.",
      "**Casual contractions** built on the て-form are everywhere in speech: ～ている → ～てる, ～ておく → ～とく, ～てしまう → ～ちゃう, ～ては → ～ちゃ (～では → ～じゃ). They belong to casual speech (Unit 5 and N4).",
      "**The negative て-form** has two shapes, ～なくて and ～ないで, with different uses ([食]{た}べないで[寝]{ね}た, went to bed without eating; [分]{わ}からなくて[困]{こま}った, was stuck because I didn’t understand). ～ないでください belongs to the second. The full contrast is an N4 topic."
     ]},
    related:["nai-and-ta-forms","requests-and-permission","n5-grammar-patterns","verb-groups","masu-verbs"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Past Tense (rules by verb ending and exceptions)", url:"https://www.guidetojapanese.org/learn/grammar/past"},{t:"Tae Kim’s Guide: Other uses of the te-form (～ている, enduring states, casual ～てる)", url:"https://guidetojapanese.org/learn/grammar/teform"},{t:"Jisho.org (JMdict): 行く, “Godan verb - Iku/Yuku special class”", url:"https://jisho.org/word/%E8%A1%8C%E3%81%8F"}],
    checked:"2026-11"},
   {id:"nai-and-ta-forms", title:"Plain ない and た forms", aka:["nai-form","ta-form","plain negative","plain past","plain forms"], tags:["japanese","grammar","n5","verbs"],
    summary:"The plain negative (～ない) and plain past (～た) of verbs, with adjectives and nouns: the building blocks of casual speech and of most later grammar.",
    levels:{
     starter:[
      "Every Japanese verb has polite forms (with ます) and **plain forms** (without). They mean the same thing; only the politeness differs.",
      {table:[["Meaning","Polite","Plain"],["eat","[食]{た}べます","[食]{た}べる"],["don’t eat","[食]{た}べません","[食]{た}べない"],["ate","[食]{た}べました","[食]{た}べた"],["didn’t eat","[食]{た}べませんでした","[食]{た}べなかった"]]},
      "You use plain forms in casual speech with friends and family, inside longer sentences (for example before から, “because”), and before patterns such as ～ないでください (please don’t). The ない-form changes the verb’s last sound; the た-form is made just like the て-form, with た or だ.",
      "Until you study casual speech, keep the end of each sentence polite. Plain forms inside the sentence are fine."
     ],
     builder:[
      "**ない-form.** Godan verbs change the last u-sound to an a-sound and add ない: [書]{か}く → [書]{か}かない, [泳]{およ}ぐ → [泳]{およ}がない, [話]{はな}す → [話]{はな}さない, [待]{ま}つ → [待]{ま}たない, [死]{し}ぬ → [死]{し}なない, [遊]{あそ}ぶ → [遊]{あそ}ばない, [飲]{の}む → [飲]{の}まない, [帰]{かえ}る → [帰]{かえ}らない. Verbs ending in う use わ: [買]{か}う → [買]{か}わない. Ichidan verbs drop る: [食]{た}べない, [見]{み}ない. Irregular: しない, [来]{こ}ない (read こない), and ある → ない.",
      "The ない-form conjugates like an い-adjective: past negative ～なかった, polite equivalents ～ません and ～ませんでした.",
      "**た-form.** Replace the て of the て-form with た, and で with だ: [買]{か}った, [飲]{の}んだ, [書]{か}いた, [泳]{およ}いだ, [話]{はな}した, [行]{い}った, [食]{た}べた, した, [来]{き}た.",
      {table:[["Word type","Non-past","Negative","Past"],["い-adjective","[高]{たか}い","[高]{たか}くない","[高]{たか}かった"],["いい","いい","よくない","よかった"],["な-adjective","[静]{しず}かだ","[静]{しず}かじゃない","[静]{しず}かだった"],["noun","[雨]{あめ}だ","[雨]{あめ}じゃない","[雨]{あめ}だった"]]},
      "Past negatives: [高]{たか}くなかった, よくなかった, [静]{しず}かじゃなかった, [雨]{あめ}じゃなかった. In writing, じゃ is often では.",
      "**N5 uses:** ～ないでください (please don’t); plain forms before から ([雨]{あめ}だから, because it’s raining); and casual speech, which Unit 5 covers."
     ],
     pro:[
      "**Why う → わ?** Verbs such as [買]{か}う once ended in a ふ-like sound (older spelling かふ), and the negative was spelled かはない. Over time this consonant softened to w and then disappeared before every vowel except a, so modern Japanese has [買]{か}わない but [買]{か}います.",
      "**Why ある → ない?** Standard Japanese uses the adjective ない as the negative of ある, and あらない is not used. The classical negative あらず survives in a few set expressions.",
      "**Older negatives.** ～ず and ～ぬ are the classical negative endings. They survive in set phrases and written styles: [知]{し}らず (without knowing), [知]{し}らぬ[間]{ま}に (before you know it), and the pattern ～ずに (without doing), which lists place at N4 or N3.",
      "**ない as an adjective** gives a whole family of forms you will meet at N4: ～なくて, ～なければ (if not), ～なくてもいい (don’t have to), ～なければならない (must).",
      "**Polite negatives in speech.** Besides ～ません, conversation often uses ～ないです ([食]{た}べないです). It is common and accepted in everyday speech, but ～ません is the standard polite form and the safer choice in formal situations and tests.",
      "**Plain forms before nouns** (relative clauses, such as [昨日]{きのう}[買]{か}った[本]{ほん}, the book I bought yesterday) and before と[思]{おも}います (I think) are N4 topics. They are the main reason plain forms matter so much."
     ]},
    related:["te-form","requests-and-permission","n5-grammar-patterns","masu-verbs","i-and-na-adjectives"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Past Tense", url:"https://www.guidetojapanese.org/learn/grammar/past"},{t:"Jisho.org (JMdict): ある, “Godan verb with ‘ru’ ending (irregular verb)”", url:"https://jisho.org/search/%E5%9C%A8%20%E3%81%82%E3%82%8B"},{t:"OJAD, Online Japanese Accent Dictionary (verb forms with audio)", url:"https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home"}],
    checked:"2026-11"},
   {id:"requests-and-permission", title:"Requests, permission and rules", aka:["～てください","～ないでください","～てもいいですか","～てはいけません","kudasai"], tags:["japanese","grammar","n5","politeness"],
    summary:"Asking someone to do or not do something, asking for and giving permission, and stating rules, with the て- and ない-forms.",
    levels:{
     starter:[
      "Four N5 patterns cover most everyday requests and rules:",
      {table:[["Pattern","Meaning","Example"],["～てください","please do","ちょっと[待]{ま}ってください。"],["～ないでください","please don’t","[忘]{わす}れないでください。"],["～てもいいですか","may I?","[窓]{まど}を[開]{あ}けてもいいですか。"],["～てはいけません","you must not","ここで[食]{た}べてはいけません。"]]},
      "The first three are polite and useful almost anywhere: in shops, classes, offices and homes. ～てはいけません is firm. It is right for rules and signs, but it sounds like a telling-off if you use it to refuse a friend. A soft すみません、ちょっと… (“sorry, that’s a bit…”) is the usual polite refusal.",
      "With a noun, ください means “please give me”: [水]{みず}をください (Water, please)."
     ],
     builder:[
      "**Forms.** ～てください and ～てもいいです use the て-form ([書]{か}いてください, [座]{すわ}ってもいいです). ～ないでください uses the ない-form ([吸]{す}わないでください). ～てはいけません uses the て-form + は, pronounced わ; after a で-form it is ～ではいけません ([飲]{の}んではいけません).",
      {table:[["Question","Yes","Polite no"],["[写真]{しゃしん}をとってもいいですか。","はい、どうぞ。 / はい、いいですよ。","すみません、ちょっと…。"]]},
      "**Rule or request?** ～てはいけません states a rule (“you must not”); ～ないでください asks (“please don’t”). Signs use both. To someone who is worried about you, [心配]{しんぱい}しないでください is kind; [心配]{しんぱい}してはいけません would sound like an order.",
      "**～てください is still a request.** It is polite, but with a teacher or a boss, speakers often soften it: ～てくださいませんか (would you please…?).",
      "**Casual forms.** ～てはいけない → ～ちゃいけない or ～ちゃだめ; ～ではいけない → ～じゃいけない or ～じゃだめ. In casual requests, the て-form alone is enough: ちょっと[待]{ま}って (wait a sec). These are casual and belong with friends and family."
     ],
     pro:[
      "**A politeness ladder for requests.** From casual to very polite: [待]{ま}って → [待]{ま}ってください → [待]{ま}ってくださいませんか → [待]{ま}っていただけませんか → お[待]{ま}ちいただけませんか. The last two use keigo ([[keigo]]), which N4–N3 and the Academic Japanese units cover. Asking as a question (～ませんか) is softer than an instruction.",
      "**Permission and obligation at N4.** ～てもかまいません (it’s no problem if…) is a more formal ～てもいいです. ～なくてもいいです means “you don’t have to”, and ～なければなりません means “you must”. Learners often confuse “must not” (～てはいけません) with “don’t have to” (～なくてもいいです): they are very different.",
      "**Signs.** Public signs often use short kanji compounds with [禁止]{きんし} (prohibited): [撮影禁止]{さつえいきんし} (no photography), [立入禁止]{たちいりきんし} (no entry). They are the written equivalents of ～てはいけません, and you will read them long before you need to say them.",
      "**Indirect refusals.** Japanese speakers tend to avoid a direct いいえ in reply to requests. An unfinished ちょっと…, a pause, or an apology usually means no. When you hear one, accept it and don’t press: that is the polite response."
     ]},
    related:["te-form","nai-and-ta-forms","n5-grammar-patterns"],
    sources:[{t:"Tae Kim’s Guide: Other uses of the te-form", url:"https://guidetojapanese.org/learn/grammar/teform"},{t:"Tae Kim’s Guide: Compound Sentences (the て-form for joining)", url:"https://guidetojapanese.org/learn/grammar/compound"},{t:"IRODORI Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/"}],
    checked:"2026-11"},
   {id:"counters", title:"Counters and their sound changes", aka:["counter words","josuushi","じょすうし","measure words","～つ","～ほん","～ひき","～まい","～にん"], tags:["japanese","numbers","n5","vocabulary"],
    summary:"The words added to numbers to count people, things, animals, floors, times and minutes, and the sound changes such as いっぽん, さんぼん and ろっぽん.",
    levels:{
     starter:[
      "In Japanese you can’t just say “three cats”. You add a **counter** to the number, a little word that shows what kind of thing you are counting: [猫]{ねこ}が[三匹]{さんびき}います (there are three cats).",
      "N5 counters: ～つ (general things up to ten: ひとつ, ふたつ…), [人]{にん} (people: [一人]{ひとり}, [二人]{ふたり}, [三人]{さんにん}…), [枚]{まい} (flat things: paper, stamps, shirts), [本]{ほん} (long things: pens, bottles, umbrellas), [匹]{ひき} (small animals), [階]{かい} (floors), [回]{かい} (times), [分]{ふん} (minutes) and [時]{じ} (o’clock).",
      "Some counters change sound after certain numbers: いっぽん, にほん, さんぼん, ろっぽん. It looks random, but it follows patterns, and people will understand you even if you get one wrong.",
      "The number usually goes after the noun and its particle: りんごを[三]{みっ}つ[買]{か}いました (I bought three apples)."
     ],
     builder:[
      "**Sound-change patterns** (for the counters of this unit):",
      {list:["1, 6, 8 and 10 shrink to a small っ before k- and h/f-sound counters: いっかい, ろっかい, はっかい, じゅっかい.","After that っ, h becomes p: いっぽん, ろっぴき, はっぷん, じゅっぷん.","After 3 and [何]{なん} (ending in ん), h becomes b with [本]{ほん} and [匹]{ひき} (さんぼん, なんびき) but p with [分]{ふん} (さんぷん, なんぷん). [分]{ふん} also gives よんぷん.","[枚]{まい} and [人]{にん} never change."]},
      {table:[["","[本]{ほん}","[匹]{ひき}","[分]{ふん}"],["1","いっぽん","いっぴき","いっぷん"],["3","さんぼん","さんびき","さんぷん"],["4","よんほん","よんひき","よんぷん"],["6","ろっぽん","ろっぴき","ろっぷん"],["8","はっぽん (はちほん)","はっぴき (はちひき)","はっぷん (はちふん)"],["10","じゅっぽん","じゅっぴき","じゅっぷん"],["?","なんぼん","なんびき","なんぷん"]]},
      "**People:** ひとり, ふたり, さんにん, よにん, ごにん, ろくにん, ななにん (also しちにん), はちにん, きゅうにん, じゅうにん. **Time:** よじ (4:00), しちじ (7:00; ななじ is also heard), くじ (9:00). **Floors:** さんがい (also さんかい), なんがい (also なんかい). **Times ([回]{かい}):** さんかい only.",
      "**Big numbers:** さんびゃく, ろっぴゃく, はっぴゃく; さんぜん, はっせん; いちまん. Japanese groups digits in fours: 10,000 = [一万]{いちまん}, 100,000 = [十万]{じゅうまん}.",
      "**Existence:** counters often go with あります and います: [教室]{きょうしつ}に[学生]{がくせい}が[五人]{ごにん}います."
     ],
     pro:[
      "**Variants that are both correct.** With 8, both the shrunk and the full forms are used: はっぽん and はちほん, はっかい and はちかい. With 10, じっ is the traditional form and じゅっ is now the usual one in speech; the [常用漢字表]{じょうようかんじひょう} (2010) lists ジッ for [十]{じゅう} with the note that ジュッ is also used, and JMdict lists both じっぽん and じゅっぽん. Teach and test whichever your materials use, and accept the other.",
      "**Three-floor and how-many-floors.** [三階]{さんがい} and [何階]{なんがい} are the traditional readings; さんかい and なんかい are also common now. [三回]{さんかい} (three times) is only さんかい.",
      "**Native counting** (ひとつ…とお) stops at ten; above that, use plain numbers. Two counters keep native forms for low numbers: [人]{にん} (ひとり, ふたり) and the days of the month (ふつか…とおか, はつか).",
      "**Other common counters** you will meet soon: [個]{こ} for small objects (いっこ, ろっこ, はっこ, じゅっこ), [冊]{さつ} for books (いっさつ, はっさつ, じゅっさつ; but ろくさつ), [歳]{さい} for age (いっさい, はっさい, じゅっさい; 20 is usually [二十歳]{はたち}), [杯]{はい} for cups and glasses (いっぱい, さんばい, ろっぱい), and [台]{だい} for machines and vehicles. Notice that 6 shrinks before k- and h-sounds but not before s-sounds (ろくさつ, ろくさい).",
      "**In practice**, native speakers sometimes fall back on ～つ or [個]{こ} for objects whose counter they aren’t sure of, and they will understand you if you do the same. Learn the common ones well rather than every rare counter."
     ]},
    related:["time-and-dates","existence-aru-iru","n5-grammar-patterns","long-vowels-and-small-tsu"],
    sources:[{t:"Wikipedia: Japanese counter word (sound changes and variants)", url:"https://en.wikipedia.org/wiki/Japanese_counter_word"},{t:"Wiktionary (Japanese): 十 (ジッ and ジュッ; 常用漢字表 note)", url:"https://ja.wiktionary.org/wiki/%E5%8D%81"}],
    checked:"2026-11"},
   {id:"time-and-dates", title:"Time, dates and durations", aka:["telling the time","days of the week","months","dates","duration","ついたち","はつか","frequency words"], tags:["japanese","numbers","n5","vocabulary"],
    summary:"Clock times, days of the week, months, dates with their special readings, durations, から～まで, and how-often words.",
    levels:{
     starter:[
      "Time is a number plus [時]{じ} (o’clock) and [分]{ふん} (minutes): [三時十五分]{さんじじゅうごふん} (3:15), [六時半]{ろくじはん} (6:30). Watch [四時]{よじ}, [七時]{しちじ} and [九時]{くじ}.",
      "Months are a number plus [月]{がつ}: [一月]{いちがつ}… but [四月]{しがつ}, [七月]{しちがつ}, [九月]{くがつ}. Dates are a number plus [日]{にち}, except the 1st–10th, the 14th, the 20th and the 24th, which have special readings: ついたち, ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか; じゅうよっか, はつか, にじゅうよっか.",
      "For how long, use [時間]{じかん} (hours), [週間]{しゅうかん} (weeks), か[月]{げつ} (months) and [年]{ねん} (years). For how often, use いつも, よく, ときどき, and あまり or ぜんぜん with a negative verb.",
      "These readings take time to learn for everyone. Daily review, a few minutes at a time, is the way to fix them."
     ],
     builder:[
      "**Particles.** Clock times, dates, months and years take に: [七時]{しちじ}に, [五月]{ごがつ}に. Days of the week often take に, but it is commonly dropped in conversation. Words relative to now take no に: [今日]{きょう}, [明日]{あした}, [昨日]{きのう}, [今]{いま}, [毎日]{まいにち}, [来週]{らいしゅう}, [今年]{ことし}. Durations take no に: [二時間]{にじかん}[勉強]{べんきょう}しました.",
      "**Ranges** use から (from) and まで (until): [九時]{くじ}から[五時]{ごじ}まで. On notices, the wave dash ～ between two times or dates is read から…まで.",
      {table:[["Last","This","Next"],["[昨日]{きのう}","[今日]{きょう}","[明日]{あした}"],["[先週]{せんしゅう}","[今週]{こんしゅう}","[来週]{らいしゅう}"],["[先月]{せんげつ}","[今月]{こんげつ}","[来月]{らいげつ}"],["[去年]{きょねん}","[今年]{ことし}","[来年]{らいねん}"]]},
      "**Durations and sound changes:** [一週間]{いっしゅうかん}, [八週間]{はっしゅうかん}, [十週間]{じゅっしゅうかん}; [一]{いっ}か[月]{げつ}, [六]{ろっ}か[月]{げつ}, [十]{じゅっ}か[月]{げつ}; [四時間]{よじかん}, [九時間]{くじかん}. [一日]{いちにち} means one day; [一日]{ついたち} means the 1st. [二日]{ふつか} to [十日]{とおか} mean both the date and the number of days.",
      "**About:** ごろ for a point in time ([二時]{にじ}ごろ), ぐらい or くらい for an amount ([二時間]{にじかん}ぐらい).",
      "**Frequency:** いつも, よく, ときどき, あまり～ません, ぜんぜん～ません; ～に～[回]{かい} ([週]{しゅう}に[二回]{にかい}, twice a week); [毎日]{まいにち}, [毎朝]{まいあさ}, [毎晩]{まいばん}, [毎週]{まいしゅう}, [毎月]{まいつき}, [毎年]{まいとし}."
     ],
     pro:[
      "**Variant readings.** [七日]{なのか} is also read なぬか. [毎月]{まいつき} is also まいげつ, and [毎年]{まいとし} is also まいねん. [明日]{あした} is あす in formal speech. In business, [一日]{いっぴ} is sometimes used for the 1st, to avoid confusion with [一日]{いちにち} (one day). JMdict also lists にじゅうにち for [二十日]{はつか}, marked as an irregular reading; はつか is the standard reading for the 20th.",
      "**The 24-hour clock** is standard in timetables, schedules and many digital displays: [十八時]{じゅうはちじ} is 6 p.m. Midnight is [午前零時]{ごぜんれいじ}, and noon is [正午]{しょうご} or [午後零時]{ごごれいじ}.",
      "**Era years.** Official forms in Japan often use era names alongside, or instead of, the Western year: the Reiwa era ([令和]{れいわ}) began in 2019, so 2026 is [令和]{れいわ}8[年]{ねん}. Expect both on documents.",
      "**The school and business year** ([年度]{ねんど}) in Japan usually runs from April to March, so [新年度]{しんねんど} (the new school or business year) starts in April.",
      "**ぜんぜん + positive.** In casual modern speech, ぜんぜん often intensifies positive words (ぜんぜん[大丈夫]{だいじょうぶ}, totally fine). It is common, but opinions on it differ, so keep the negative pairing in polite speech, writing and tests.",
      "**Weekdays.** The kanji of the days come from the sun, the moon and the five planets visible to the naked eye, which are named after the five classical elements: [日]{にち}, [月]{げつ}, [火]{か}, [水]{すい}, [木]{もく}, [金]{きん}, [土]{ど}. They are also some of the first kanji in the Kanji Lab’s N5 deck."
     ]},
    related:["counters","n5-grammar-patterns","n5-vocabulary"],
    sources:[{t:"Wikipedia: Japanese counter word (days of the month, 時, 月 readings)", url:"https://en.wikipedia.org/wiki/Japanese_counter_word"},{t:"IRODORI Japanese for Life in Japan (The Japan Foundation): course materials, A1 to A2/B1", url:"https://www.irodori.jpf.go.jp/en/"},{t:"The Japan Foundation: Free! New Teaching Materials “Irodori: Japanese for Life in Japan”", url:"https://www.jpf.go.jp/e/project/japanese/teach/tsushin/news/202105.html"}],
    checked:"2026-11"},
   {id:"n5-grammar-patterns", title:"N5 grammar patterns at a glance", aka:["N5 grammar","JLPT N5 grammar","beginner grammar list"], tags:["japanese","grammar","n5","jlpt"],
    summary:"A one-page map of the main N5 grammar patterns taught in Units 2 and 3, with meanings and examples.",
    levels:{
     starter:[
      "N5 is the first level of the Japanese-Language Proficiency Test. Its grammar is the base of everything that follows: polite sentences with です and ます, the main particles, adjectives, the て-form, plain forms, counters and time.",
      "Units 2 and 3 of this track teach these patterns. Unit 2 covers sentence basics, particles, adjectives and ます verbs. Unit 3 covers the て-form and what is built on it, the plain ない and た forms, ～たい, reasons with から, counters, comparisons, and time.",
      "The JLPT doesn’t publish an official grammar list, so N5 lists from textbooks and websites differ slightly at the edges (see {{jlpt-overview}}). The core is the same everywhere, and the table in the Builder level covers it.",
      "Use this page for review: read a pattern, say an example of your own, and check the lesson if you are unsure."
     ],
     builder:[
      {table:[["Pattern","Meaning","Example"],["X は Y です","X is Y","[私]{わたし}は[学生]{がくせい}です。"],["～か","question","[学生]{がくせい}ですか。"],["～ましょう / ～ませんか","let’s / won’t you…?","[行]{い}きませんか。"],["あります / います","there is; have","[猫]{ねこ}がいます。"],["～て、～","and then","[起]{お}きて、[食]{た}べます。"],["～てから","after doing","[食]{た}べてから、[出]{で}かけます。"],["～てください","please do","[待]{ま}ってください。"],["～てもいいです","may","[入]{はい}ってもいいですか。"],["～てはいけません","must not","[走]{はし}ってはいけません。"],["～ています","is doing; state","[読]{よ}んでいます。"],["まだ～ていません","not yet","まだ[食]{た}べていません。"],["～たい(です)","want to","[行]{い}きたいです。"],["～がほしい(です)","want (a thing)","[車]{くるま}がほしいです。"],["～ないでください","please don’t","[忘]{わす}れないでください。"],["～から、～","because, so","[暑]{あつ}いですから、[窓]{まど}を[開]{あ}けます。"],["A は B より～","A is more ～ than B","[今日]{きょう}は[昨日]{きのう}より[寒]{さむ}いです。"],["A のほうが～","A is the more ～ one","バスより[電車]{でんしゃ}のほうが[速]{はや}いです。"],["～の[中]{なか}で～がいちばん～","the most","[何]{なに}がいちばん[好]{す}きですか。"],["～から～まで","from … until","[九時]{くじ}から[五時]{ごじ}まで"],["～に～[回]{かい}","… times per …","[週]{しゅう}に[二回]{にかい}"]]},
      "Unit 2’s pages ({{japanese-sentence-basics}}, {{particles-wa-ga}}, {{particles-o-ni-de}}, {{i-and-na-adjectives}}, {{masu-verbs}}) give the details for the first rows; this unit’s pages ({{te-form}}, {{nai-and-ta-forms}}, {{requests-and-permission}}, {{counters}}, {{time-and-dates}}) cover the rest."
     ],
     pro:[
      "**Edges of the N5 list.** Because there is no official list, some patterns appear at N5 in one source and at N4 in another. Common border cases: ～てから (after doing), ほしい (want), まだ～ていません (not yet), ～たことがあります (have done), ～たり～たりします (do things like…), ～ながら (while), ～たほうがいいです (had better), ～ので (because) and ～たがる (someone else wants). This track teaches the first three at N5 and leaves the others for N4. Other textbooks and lists draw the line in different places, so don’t worry if yours differs.",
      "**What the test does with grammar.** At N5, grammar has its own part of the test, in the section “Language Knowledge (Grammar)・Reading”: questions ask you to choose the right particle or form for a gap, to put parts of a sentence in order, and to choose words that fit a short text. Reading and listening questions then use the same grammar in context. Knowing a form passively is not enough; practise choosing between near neighbours (は/が, に/で, ～ています/～ます, どちら/どれ).",
      "**Why the て-form and plain forms matter so much.** Almost all N4 grammar is built on them: ～てみる, ～てしまう, ～ておく, ～と[思]{おも}う, ～つもり, relative clauses, conditionals. Time spent making them automatic now pays back many times.",
      "**Next steps.** Unit 4 covers N5 kanji, vocabulary and reading. Unit 5 turns the plain forms into natural casual speech. For more practice with audio, the Japan Foundation’s Irodori course (A1–A2) and Tae Kim’s free online guide are good companions."
     ]},
    related:["te-form","nai-and-ta-forms","requests-and-permission","counters","time-and-dates","existence-aru-iru","japanese-sentence-basics","jlpt-overview"],
    sources:[{t:"Tae Kim’s Guide: Desire and Suggestions (～たい)", url:"https://www.guidetojapanese.org/learn/grammar/desire"},{t:"Tae Kim’s Guide: Using 「方」 and 「よる」 (comparisons with 方 and より)", url:"https://www.guidetojapanese.org/learn/grammar/comparison"},{t:"IRODORI Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"te-form", term:"て-form", def:"The verb form ending in て or で ([食]{た}べて, [書]{か}いて, [読]{よ}んで). It has no tense of its own and joins onto other words: another verb (“and then”), ください, います and more.", codex:"te-form"},
   {id:"onbin", term:"Onbin (おんびん)", def:"The sound changes that reshaped godan verbs over the centuries: [書]{か}きて became [書]{か}いて, [待]{ま}ちて became [待]{ま}って, [読]{よ}みて became [読]{よ}んで. They explain the shapes of the て- and た-forms.", codex:"te-form"},
   {id:"te-iru", term:"～ています", def:"て-form + います. It describes an action in progress ([読]{よ}んでいます, is reading), a habit or job, or a state that continues after a change ([結婚]{けっこん}しています, is married).", codex:"te-form"},
   {id:"kudasai", term:"～てください", def:"て-form + ください: a polite request, “please do…” ([待]{ま}ってください). After a noun with を, ください means “please give me”. The negative request is ～ないでください.", codex:"requests-and-permission"},
   {id:"nai-form", term:"ない-form", def:"The plain negative of a verb: [書]{か}かない, [食]{た}べない, しない, [来]{こ}ない, and ある → ない. It conjugates like an い-adjective (past: ～なかった).", codex:"nai-and-ta-forms"},
   {id:"ta-form", term:"た-form", def:"The plain past of a verb, made like the て-form but with た or だ: [書]{か}いた, [飲]{の}んだ, [行]{い}った, [食]{た}べた, した, [来]{き}た.", codex:"nai-and-ta-forms"},
   {id:"plain-form", term:"Plain form", def:"A verb or adjective form without です or ます, such as [食]{た}べる, [食]{た}べない, [食]{た}べた, [食]{た}べなかった. Used in casual speech, inside longer sentences and before many grammar patterns.", codex:"nai-and-ta-forms"},
   {id:"tai-form", term:"～たい (want to)", def:"ます stem + たい: [行]{い}きたい (want to go). It conjugates like an い-adjective (～たくない, ～たかった) and describes your own wishes.", codex:"n5-grammar-patterns"},
   {id:"kara-reason", term:"から (because)", def:"After a sentence, から gives a reason: [雨]{あめ}ですから、[行]{い}きません (It’s raining, so I won’t go). After a plain noun or な-adjective, add だ: [雨]{あめ}だから.", codex:"n5-grammar-patterns"},
   {id:"comparison-yori", term:"より and のほう (comparison)", def:"A は B より～: A is more ～ than B. To answer which of two: A のほうが～. For three or more: ～の[中]{なか}で～がいちばん～ (the most).", codex:"n5-grammar-patterns"},
   {id:"counter", term:"Counter", def:"A word added to a number to show what kind of thing is counted: [三人]{さんにん} (three people), [二枚]{にまい} (two flat things), [五本]{ごほん} (five long things). Some cause sound changes, as in いっぽん.", codex:"counters"},
   {id:"time-expression", term:"Time expression", def:"A word or phrase for when something happens: [三時]{さんじ}, [月曜日]{げつようび}, [明日]{あした}, [毎朝]{まいあさ}. Clock times, dates and years take に; words relative to now, such as [今日]{きょう} and [来週]{らいしゅう}, don’t.", codex:"time-and-dates"},
   {id:"frequency-word", term:"Frequency word", def:"A word for how often: いつも (always), よく (often), ときどき (sometimes), あまり (not often) and ぜんぜん (not at all, never). あまり and ぜんぜん go with a negative verb.", codex:"time-and-dates"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e3u3-q01", lesson:"e3u3-l1", level:1, q:"Which of these is the て-form of [食]{た}べる (eat)?", options:[
     {t:"[食]{た}べて", ok:true, why:"[食]{た}べる is ichidan: drop る and add て."},
     {t:"[食]{た}べって", why:"って is for godan verbs ending in う, つ or る. [食]{た}べる is ichidan ([食]{た}べます), so it simply takes て."},
     {t:"[食]{た}べんで", why:"んで is for godan verbs ending in む, ぶ or ぬ."},
     {t:"[食]{た}べいて", why:"いて is for godan verbs ending in く."}
   ]},
   {id:"e3u3-q02", lesson:"e3u3-l1", level:1, q:"What does the て-form show on its own?", options:[
     {t:"No tense or politeness: it connects to other words or verbs", ok:true, why:"The て-form is a connector. Tense and politeness come from what follows, such as ました or ください."},
     {t:"The past tense", why:"That is the た-form or ～ました. In [行]{い}って、[見]{み}ました the past comes from ました at the end."},
     {t:"Politeness", why:"The て-form itself is neither polite nor plain; ～てください and ～ています get their politeness from ください and ます."},
     {t:"The negative", why:"The negative is the ない-form or ～ません."}
   ]},
   {id:"e3u3-q03", lesson:"e3u3-l1", level:2, q:"What is the て-form of [待]{ま}つ (wait)?", options:[
     {t:"[待]{ま}って", ok:true, why:"つ is in the う・つ・る row: って."},
     {t:"[待]{ま}ちて", why:"Godan verbs don’t add て to the ます stem any more: つ → って."},
     {t:"[待]{ま}んで", why:"んで is for む, ぶ and ぬ."},
     {t:"[待]{ま}いて", why:"いて is for く."}
   ]},
   {id:"e3u3-q04", lesson:"e3u3-l1", level:2, q:"[脱]{ぬ}ぐ means “take off (clothes, shoes)”. What is its て-form?", options:[
     {t:"[脱]{ぬ}いで", ok:true, why:"ぐ → いで, with a voiced で."},
     {t:"[脱]{ぬ}いて", why:"That is the く pattern. ぐ gives the voiced で: [脱]{ぬ}いで."},
     {t:"[脱]{ぬ}って", why:"って is for う, つ and る."},
     {t:"[脱]{ぬ}んで", why:"んで is for む, ぶ and ぬ."}
   ]},
   {id:"e3u3-q05", lesson:"e3u3-l1", level:2, q:"[走]{はし}る (run) ends in -iru, and its ます-form is [走]{はし}ります. What is its て-form?", options:[
     {t:"[走]{はし}って", ok:true, why:"る became り in the ます-form, so the verb is godan: る → って."},
     {t:"[走]{はし}て", why:"That is the ichidan pattern. [走]{はし}ります shows it is godan."},
     {t:"[走]{はし}りて", why:"Godan verbs don’t add て to the ます stem."},
     {t:"[走]{はし}んで", why:"んで is for む, ぶ and ぬ."}
   ]},
   {id:"e3u3-q06", lesson:"e3u3-l1", level:3, q:"Priya writes: [日曜日]{にちようび}に[公園]{こうえん}へ[行]{い}いて、[友達]{ともだち}と[遊]{あそ}びました。 What should she fix?", options:[
     {t:"[行]{い}いて → [行]{い}って", ok:true, why:"[行]{い}く is the exception: its て-form is [行]{い}って. The rest of the sentence is correct."},
     {t:"[遊]{あそ}びました → [遊]{あそ}んで", why:"The last verb must carry the tense and politeness, so [遊]{あそ}びました is right."},
     {t:"[行]{い}いて → [行]{い}きました", why:"Two finished clauses can’t be joined with a comma like this; the first verb should be a て-form."},
     {t:"Nothing: the sentence is correct", why:"[行]{い}いて is a mistake: [行]{い}く → [行]{い}って."}
   ]},
   {id:"e3u3-q07", lesson:"e3u3-l1", level:3, q:"Tomás wants to say “This café is cheap and the coffee is good.” Which sentence is correct?", options:[
     {t:"この[喫茶店]{きっさてん}は[安]{やす}くて、コーヒーがおいしいです。", ok:true, why:"[安]{やす}い is an い-adjective: drop い and add くて."},
     {t:"この[喫茶店]{きっさてん}は[安]{やす}いで、コーヒーがおいしいです。", why:"で is for な-adjectives and nouns. い-adjectives use くて."},
     {t:"この[喫茶店]{きっさてん}は[安]{やす}くで、コーヒーがおいしいです。", why:"The ending is くて, with て, not で."},
     {t:"この[喫茶店]{きっさてん}は[安]{やす}いて、コーヒーがおいしいです。", why:"い-adjectives drop the い: [安]{やす}くて."}
   ]},
   {id:"e3u3-q08", lesson:"e3u3-l1", level:1, q:"The て-form of [来]{く}る is written 来て. How is it read?", options:[
     {t:"きて", ok:true, why:"[来]{く}る changes its reading: [来]{き}ます, [来]{き}て."},
     {t:"くて", why:"く is the reading only in the dictionary form, [来]{く}る."},
     {t:"こて", why:"こ appears in the negative, [来]{こ}ない, not in the て-form."},
     {t:"きって", why:"There is no small っ: [来]{き}て."}
   ]},
   {id:"e3u3-q09", lesson:"e3u3-l1", level:2, q:"Mei says: [宿題]{しゅくだい}をしてから、テレビを[見]{み}ます。 What does she mean?", options:[
     {t:"She watches TV after doing her homework.", ok:true, why:"～てから means “after doing”: the homework comes first."},
     {t:"She does her homework while watching TV.", why:"“While” is a different pattern (～ながら, which this track teaches at N4). ～てから puts one action after the other."},
     {t:"She watched TV before doing her homework.", why:"The order is reversed, and ～ます at the end is non-past, not past."},
     {t:"She does her homework because she watches TV.", why:"～てから shows order in time, not a reason. Reasons use から after a full sentence."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e3u3-q10", lesson:"e3u3-l2", level:1, q:"What does ～てもいいですか ask?", options:[
     {t:"Permission: “May I…?”", ok:true, why:"～てもいいです means “it’s all right to…”; with か it asks permission."},
     {t:"A request for someone else to act: “Please…”", why:"That is ～てください."},
     {t:"Whether something is forbidden by a rule", why:"Rules are stated with ～てはいけません."},
     {t:"Whether someone is doing something now", why:"That would be ～ていますか."}
   ]},
   {id:"e3u3-q11", lesson:"e3u3-l2", level:1, q:"What does [雨]{あめ}が[降]{ふ}っています mean?", options:[
     {t:"It’s raining (now).", ok:true, why:"[降]{ふ}る is an activity that lasts, so ～ています means it is in progress."},
     {t:"It will rain.", why:"That would be [雨]{あめ}が[降]{ふ}ります (with a time word such as [明日]{あした})."},
     {t:"It rained yesterday.", why:"That would be [昨日]{きのう}[雨]{あめ}が[降]{ふ}りました."},
     {t:"Please make it rain.", why:"～ています is not a request. Requests use ～てください."}
   ]},
   {id:"e3u3-q12", lesson:"e3u3-l2", level:2, q:"Lucía wants to ask a stranger to speak more slowly. Which is correct?", options:[
     {t:"もう[少]{すこ}しゆっくり[話]{はな}してください。", ok:true, why:"[話]{はな}す → [話]{はな}して, plus ください: “Please speak a little more slowly.”"},
     {t:"もう[少]{すこ}しゆっくり[話]{はな}すください。", why:"ください follows the て-form, not the dictionary form."},
     {t:"もう[少]{すこ}しゆっくり[話]{はな}してはいけません。", why:"This says “You must not speak slowly”: the opposite, and far too strong."},
     {t:"もう[少]{すこ}しゆっくり[話]{はな}してもいいですか。", why:"This asks permission for yourself (“May I speak more slowly?”)."}
   ]},
   {id:"e3u3-q13", lesson:"e3u3-l2", level:2, q:"How do you say “My older sister is married”?", options:[
     {t:"[姉]{あね}は[結婚]{けっこん}しています。", ok:true, why:"[結婚]{けっこん}する is a change; ～ています describes the result that is still true."},
     {t:"[姉]{あね}は[結婚]{けっこん}します。", why:"This means “My sister will get married”."},
     {t:"[姉]{あね}は[結婚]{けっこん}してください。", why:"This is a request (“Please get married”), and it doesn’t fit with は."},
     {t:"[姉]{あね}は[結婚]{けっこん}してはいけません。", why:"This says “My sister must not get married”."}
   ]},
   {id:"e3u3-q14", lesson:"e3u3-l2", level:3, q:"Fatima sees this sign at a museum: [館内]{かんない}で[写真]{しゃしん}をとってはいけません。 What does it tell her?", options:[
     {t:"Taking photos inside the building is not allowed.", ok:true, why:"～てはいけません states a rule: you must not."},
     {t:"Please take photos inside.", why:"That would be ～てください."},
     {t:"You may take photos inside.", why:"That would be ～てもいいです."},
     {t:"Someone is taking photos inside.", why:"That would be ～ています."}
   ]},
   {id:"e3u3-q15", lesson:"e3u3-l2", level:2, q:"A colleague asks: リーさんを[知]{し}っていますか。 You have never heard of Lee. What do you answer?", options:[
     {t:"いいえ、[知]{し}りません。", ok:true, why:"The negative of [知]{し}っています is [知]{し}りません."},
     {t:"いいえ、[知]{し}っていません。", why:"A very common mistake. [知]{し}る is special: “I don’t know” is [知]{し}りません."},
     {t:"いいえ、[知]{し}りませんでした。", why:"This is past (“I didn’t know”), which suggests you know now."},
     {t:"はい、[知]{し}りません。", why:"はい contradicts the negative answer. Use いいえ."}
   ]},
   {id:"e3u3-q16", lesson:"e3u3-l2", level:3, q:"Oluwaseun texts a friend: [今]{いま}、[空港]{くうこう}に[来]{き}ています。 What should the friend understand?", options:[
     {t:"He has arrived at the airport and is there now.", ok:true, why:"With [来]{く}る, ～ています describes the state after arriving."},
     {t:"He is on his way to the airport.", why:"That would be [空港]{くうこう}に[向]{む}かっています. [来]{き}ています means he has arrived."},
     {t:"He comes to the airport every day for work.", why:"～ています can describe a habit, but [今]{いま} (now) points to the present moment."},
     {t:"He wants the friend to come to the airport.", why:"That would be a request such as [空港]{くうこう}に[来]{き}てください."}
   ]},
   {id:"e3u3-q17", lesson:"e3u3-l2", level:1, q:"How is the は in ～てはいけません pronounced?", options:[
     {t:"わ, because it is the particle は", ok:true, why:"The particle は is always pronounced わ, so てはいけません sounds like “te wa ikemasen”."},
     {t:"は, as in はな (flower)", why:"Inside a word, は is read “ha”, but here it is the particle, read わ."},
     {t:"ば, because it follows て", why:"There is no sound change to ば here."},
     {t:"It is silent", why:"The particle is pronounced: わ."}
   ]},
   {id:"e3u3-q18", lesson:"e3u3-l2", level:2, q:"A friend asks: このノートを[使]{つか}ってもいいですか。 You are happy to say yes. Which reply fits?", options:[
     {t:"はい、どうぞ。", ok:true, why:"“Yes, go ahead”: the natural friendly yes."},
     {t:"いいえ、[使]{つか}ってはいけません。", why:"This is a firm no, and you wanted to say yes."},
     {t:"すみません、ちょっと…。", why:"This is a polite refusal."},
     {t:"はい、[使]{つか}っています。", why:"This means “Yes, I’m using it”, which doesn’t answer the question."}
   ]},
   {id:"e3u3-q19", lesson:"e3u3-l2", level:3, q:"A friend asks: もう[昼]{ひる}ごはんを[食]{た}べましたか。 You haven’t eaten yet. What do you answer?", options:[
     {t:"いいえ、まだ[食]{た}べていません。", ok:true, why:"まだ + ～ていません is “not yet”: the state of not having eaten continues."},
     {t:"いいえ、まだ[食]{た}べません。", why:"This sounds like “I won’t eat yet”, a statement about the future, not “I haven’t eaten yet”."},
     {t:"いいえ、もう[食]{た}べました。", why:"いいえ and もう[食]{た}べました (I’ve already eaten) contradict each other."},
     {t:"はい、まだ[食]{た}べていません。", why:"Answer the question “Have you eaten?” with いいえ when you haven’t."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e3u3-q20", lesson:"e3u3-l3", level:1, q:"What is the ない-form of [飲]{の}む (drink)?", options:[
     {t:"[飲]{の}まない", ok:true, why:"Godan: む → ま + ない."},
     {t:"[飲]{の}みない", why:"Godan verbs use the a-sound before ない: [飲]{の}まない."},
     {t:"[飲]{の}むない", why:"ない doesn’t attach to the dictionary form."},
     {t:"[飲]{の}めない", why:"[飲]{の}めない exists, but it is the negative of a different form ([飲]{の}める, can drink): “can’t drink”."}
   ]},
   {id:"e3u3-q21", lesson:"e3u3-l3", level:1, q:"What is the plain past of [行]{い}く (go)?", options:[
     {t:"[行]{い}った", ok:true, why:"The た-form follows the て-form: [行]{い}って → [行]{い}った."},
     {t:"[行]{い}いた", why:"[行]{い}く is the exception in the た-form too."},
     {t:"[行]{い}きた", why:"Godan verbs don’t add た to the ます stem."},
     {t:"[行]{い}くた", why:"た doesn’t attach to the dictionary form."}
   ]},
   {id:"e3u3-q22", lesson:"e3u3-l3", level:2, q:"What is the plain past negative of [食]{た}べる?", options:[
     {t:"[食]{た}べなかった", ok:true, why:"[食]{た}べない conjugates like an い-adjective: ない → なかった."},
     {t:"[食]{た}べないでした", why:"い-adjective forms don’t take でした. Use なかった."},
     {t:"[食]{た}べたない", why:"The negative is built on the ない-form, not the た-form."},
     {t:"[食]{た}べませんだ", why:"This mixes polite ません with plain だ; no such form exists."}
   ]},
   {id:"e3u3-q23", lesson:"e3u3-l3", level:2, q:"What is the ない-form of [会]{あ}う (meet)?", options:[
     {t:"[会]{あ}わない", ok:true, why:"Verbs ending in う use わ before ない."},
     {t:"[会]{あ}あない", why:"う becomes わ, not あ."},
     {t:"[会]{あ}ない", why:"[会]{あ}う is godan, not ichidan, so it doesn’t just drop a sound."},
     {t:"[会]{あ}いない", why:"The ない-form uses the a-row: わ."}
   ]},
   {id:"e3u3-q24", lesson:"e3u3-l3", level:3, q:"Sione told Hana that he wants to go to Osaka. Which is the most natural way for Hana to report this?", options:[
     {t:"シオネさんは[大阪]{おおさか}へ[行]{い}きたいと[言]{い}っています。", ok:true, why:"Japanese usually reports another person’s wishes as something they said, rather than stating their feelings directly."},
     {t:"シオネさんは[大阪]{おおさか}へ[行]{い}きたいです。", why:"This states Sione’s inner wish as a fact, as if Hana could read his mind. Japanese normally avoids that."},
     {t:"シオネさんは[大阪]{おおさか}へ[行]{い}くたいと[言]{い}っています。", why:"たい joins the ます stem: [行]{い}きたい."},
     {t:"シオネさんは[大阪]{おおさか}へ[行]{い}きたくないと[言]{い}っています。", why:"This reports the opposite: that he doesn’t want to go."}
   ]},
   {id:"e3u3-q25", lesson:"e3u3-l3", level:2, q:"How do you say “I wanted to see the film” politely?", options:[
     {t:"[映画]{えいが}が[見]{み}たかったです。", ok:true, why:"～たい is an い-adjective: past ～たかった, plus です."},
     {t:"[映画]{えいが}が[見]{み}たいでした。", why:"い-adjectives don’t make their past with でした: ～たかったです."},
     {t:"[映画]{えいが}が[見]{み}たいかったです。", why:"Drop the い before かった: [見]{み}たかった."},
     {t:"[映画]{えいが}が[見]{み}たかったでした。", why:"The past is already in かった; add です, not でした."}
   ]},
   {id:"e3u3-q26", lesson:"e3u3-l3", level:1, q:"A sign on a door says: [押]{お}さないでください。 What does it mean?", options:[
     {t:"Please don’t push.", ok:true, why:"ない-form + でください is “please don’t”."},
     {t:"Please push.", why:"That would be [押]{お}してください."},
     {t:"You may push.", why:"That would be [押]{お}してもいいです."},
     {t:"Someone is pushing.", why:"That would be [押]{お}しています."}
   ]},
   {id:"e3u3-q27", lesson:"e3u3-l3", level:3, q:"Dmitri says: [暇]{ひま}から、[手伝]{てつだ}います。 (I’m free, so I’ll help.) What should he fix?", options:[
     {t:"Add だ or です before から: [暇]{ひま}だから or [暇]{ひま}ですから.", ok:true, why:"After a な-adjective in the plain form, から needs だ."},
     {t:"Change から to まで.", why:"まで means “until”. He wants “because”."},
     {t:"Change [手伝]{てつだ}います to [手伝]{てつだ}って.", why:"The result clause should end the sentence with a full verb: [手伝]{てつだ}います is right."},
     {t:"Nothing: the sentence is correct.", why:"[暇]{ひま}から is missing だ or です."}
   ]},
   {id:"e3u3-q28", lesson:"e3u3-l3", level:1, q:"The plain negative of [来]{く}る (come) is written 来ない. How is it read?", options:[
     {t:"こない", ok:true, why:"[来]{く}る has three readings: く, き and こ. The ない-form uses こ."},
     {t:"くない", why:"く is the reading in the dictionary form only."},
     {t:"きない", why:"き is used in [来]{き}ます and [来]{き}て, not in the ない-form."},
     {t:"らない", why:"That isn’t a reading of [来]{く}る."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e3u3-q29", lesson:"e3u3-l4", level:1, q:"How is 300 (三百) read?", options:[
     {t:"さんびゃく", ok:true, why:"After さん, ひゃく becomes びゃく."},
     {t:"さんひゃく", why:"3 changes ひ to び: さんびゃく."},
     {t:"さんぴゃく", why:"ぴゃく appears after a small っ (ろっぴゃく, はっぴゃく), not after ん."},
     {t:"みっつひゃく", why:"Native numbers aren’t used with ひゃく."}
   ]},
   {id:"e3u3-q30", lesson:"e3u3-l4", level:1, q:"Which counter do you use for sheets of paper?", options:[
     {t:"～[枚]{まい}", ok:true, why:"[枚]{まい} counts flat, thin things."},
     {t:"～[本]{ほん}", why:"[本]{ほん} counts long, thin things such as pens."},
     {t:"～[匹]{ひき}", why:"[匹]{ひき} counts small animals."},
     {t:"～[人]{にん}", why:"[人]{にん} counts people."}
   ]},
   {id:"e3u3-q31", lesson:"e3u3-l4", level:1, q:"How do you say “four people”?", options:[
     {t:"よにん", ok:true, why:"Four people is よにん."},
     {t:"よんにん", why:"よん is the usual 4, but with [人]{にん} it is よ."},
     {t:"しにん", why:"し is not used for people (and しにん sounds like a word for the dead)."},
     {t:"よっつにん", why:"Native numbers aren’t combined with [人]{にん}."}
   ]},
   {id:"e3u3-q32", lesson:"e3u3-l4", level:2, q:"How do you say 100,000 yen?", options:[
     {t:"じゅうまんえん", ok:true, why:"Japanese counts in units of 10,000 (まん): 100,000 = 10 × 10,000 = じゅうまん."},
     {t:"ひゃくせんえん", why:"Japanese doesn’t say “a hundred thousand”; it counts まん: じゅうまん."},
     {t:"いちまんえん", why:"いちまん is 10,000."},
     {t:"ひゃくまんえん", why:"ひゃくまん is 1,000,000."}
   ]},
   {id:"e3u3-q33", lesson:"e3u3-l4", level:3, q:"Sione writes: [家]{いえ}に[犬]{いぬ}が[二本]{にほん}います。 What should he fix?", options:[
     {t:"[二本]{にほん} → [二匹]{にひき}", ok:true, why:"Dogs are small animals, counted with [匹]{ひき}."},
     {t:"[二本]{にほん} → [二人]{ふたり}", why:"[人]{にん} is for people."},
     {t:"[二本]{にほん} → [二枚]{にまい}", why:"[枚]{まい} is for flat things."},
     {t:"Nothing: the sentence is correct.", why:"[本]{ほん} is for long, thin things, not animals."}
   ]},
   {id:"e3u3-q34", lesson:"e3u3-l4", level:2, q:"How do you say “I bought two umbrellas”?", options:[
     {t:"[傘]{かさ}を[二本]{にほん}[買]{か}いました。", ok:true, why:"Umbrellas use [本]{ほん}, and the number goes after を, before the verb."},
     {t:"[傘]{かさ}を[二人]{ふたり}[買]{か}いました。", why:"[人]{にん} is for people."},
     {t:"[傘]{かさ}が[二本]{にほん}[買]{か}いました。", why:"The thing you buy takes を, not が."},
     {t:"[傘]{かさ}を[二本]{にほん}ありました。", why:"ありました means “there were”, not “bought”, and it doesn’t take を."}
   ]},
   {id:"e3u3-q35", lesson:"e3u3-l4", level:3, q:"You want to ask a friend which season they like best (out of the four). Which question fits?", options:[
     {t:"[季節]{きせつ}の[中]{なか}で、いつがいちばん[好]{す}きですか。", ok:true, why:"For three or more, use ～の[中]{なか}で + a question word + が + いちばん. Seasons are times, so いつ fits."},
     {t:"[季節]{きせつ}の[中]{なか}で、どちらがいちばん[好]{す}きですか。", why:"どちら is for a choice between two. There are four seasons."},
     {t:"[季節]{きせつ}の[中]{なか}で、いつはいちばん[好]{す}きですか。", why:"Question words take が, not は."},
     {t:"[季節]{きせつ}の[中]{なか}で、いつのほうが[好]{す}きですか。", why:"のほう is for comparing two things. For the most of several, use いちばん."}
   ]},
   {id:"e3u3-q36", lesson:"e3u3-l4", level:2, q:"In Japan, what does [二階]{にかい} mean in トイレは[二階]{にかい}にあります？", options:[
     {t:"The floor directly above the ground floor", ok:true, why:"In Japan the ground floor is [一階]{いっかい}, so [二階]{にかい} is the next floor up."},
     {t:"Two floors above the ground floor", why:"That is the British “second floor”. In Japan the ground floor is already [一階]{いっかい}."},
     {t:"Twice", why:"“Twice” is [二回]{にかい}, written with a different kanji ([回]{かい})."},
     {t:"Two toilets", why:"[階]{かい} counts floors, not things."}
   ]},
   {id:"e3u3-q37", lesson:"e3u3-l4", level:2, q:"Lucía hears a price: ろっぴゃくごじゅうえん. How much is it?", options:[
     {t:"650 yen", ok:true, why:"ろっぴゃく = 600, ごじゅう = 50."},
     {t:"6,050 yen", why:"6,000 would be ろくせん. ろっぴゃく is 600."},
     {t:"6,500 yen", why:"That would be ろくせんごひゃく."},
     {t:"605 yen", why:"605 would be ろっぴゃくご. ごじゅう is 50."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e3u3-q38", lesson:"e3u3-l5", level:1, q:"How do you say September?", options:[
     {t:"くがつ", ok:true, why:"September uses く: くがつ."},
     {t:"きゅうがつ", why:"9 is usually きゅう, but the month is くがつ."},
     {t:"ここのがつ", why:"Native numbers aren’t used for months."},
     {t:"くつき", why:"Months are read がつ, not つき."}
   ]},
   {id:"e3u3-q39", lesson:"e3u3-l5", level:1, q:"What does [半]{はん} mean in [六時半]{ろくじはん}?", options:[
     {t:"Half past: 6:30", ok:true, why:"[半]{はん} after the hour means thirty minutes past."},
     {t:"Half an hour before: 5:30", why:"[半]{はん} means half past the hour, not before it."},
     {t:"About: around six", why:"“About” is ごろ: [六時]{ろくじ}ごろ."},
     {t:"Sharp: exactly six", why:"[半]{はん} adds thirty minutes."}
   ]},
   {id:"e3u3-q40", lesson:"e3u3-l5", level:2, q:"How do you read “the 4th” (of the month)?", options:[
     {t:"よっか", ok:true, why:"The 4th has a special native reading: よっか."},
     {t:"よんにち", why:"The 1st–10th use native readings; よんにち isn’t used for the 4th."},
     {t:"しにち", why:"し isn’t used here: よっか."},
     {t:"よっつか", why:"The date is よっか, not よっつ + か."}
   ]},
   {id:"e3u3-q41", lesson:"e3u3-l5", level:2, q:"Which sentence is correct?", options:[
     {t:"[明日]{あした}、[友達]{ともだち}に[会]{あ}います。", ok:true, why:"[明日]{あした} is relative to now, so it takes no に."},
     {t:"[明日]{あした}に、[友達]{ともだち}に[会]{あ}います。", why:"Words relative to now, such as [明日]{あした}, don’t take に."},
     {t:"[明日]{あした}で、[友達]{ともだち}に[会]{あ}います。", why:"で isn’t used to mark when something happens."},
     {t:"[明日]{あした}から、[友達]{ともだち}に[会]{あ}いました。", why:"から means “from”, and ました (past) clashes with [明日]{あした} (tomorrow)."}
   ]},
   {id:"e3u3-q42", lesson:"e3u3-l5", level:2, q:"How do you say “I studied for two hours”?", options:[
     {t:"[二時間]{にじかん}[勉強]{べんきょう}しました。", ok:true, why:"[二時間]{にじかん} is a duration, and durations take no particle."},
     {t:"[二時]{にじ}に[勉強]{べんきょう}しました。", why:"This means “I studied at two o’clock”."},
     {t:"[二時間]{にじかん}に[勉強]{べんきょう}しました。", why:"Durations don’t take に."},
     {t:"[二時]{にじ}から[勉強]{べんきょう}しました。", why:"This means “I studied from two o’clock”."}
   ]},
   {id:"e3u3-q43", lesson:"e3u3-l5", level:3, q:"Amara works 9:30 to 5:00, Monday to Friday. Which sentence says this?", options:[
     {t:"[月曜日]{げつようび}から[金曜日]{きんようび}まで、[九時半]{くじはん}から[五時]{ごじ}まで[働]{はたら}きます。", ok:true, why:"から marks each start and まで each end."},
     {t:"[月曜日]{げつようび}まで[金曜日]{きんようび}から、[九時半]{くじはん}まで[五時]{ごじ}から[働]{はたら}きます。", why:"The particles are swapped: this says “until Monday from Friday”."},
     {t:"[月曜日]{げつようび}に[金曜日]{きんようび}まで、[九時半]{くじはん}に[五時]{ごじ}まで[働]{はたら}きます。", why:"The start of a range takes から, not に."},
     {t:"[月曜日]{げつようび}から[金曜日]{きんようび}に、[九時半]{くじはん}から[五時]{ごじ}に[働]{はたら}きます。", why:"The end of a range takes まで, not に."}
   ]},
   {id:"e3u3-q44", lesson:"e3u3-l5", level:3, q:"Tomás says ぜんぜん[肉]{にく}を[食]{た}べます to mean “I never eat meat.” How should he say it?", options:[
     {t:"ぜんぜん[肉]{にく}を[食]{た}べません。", ok:true, why:"ぜんぜん + a negative verb means “not at all, never”."},
     {t:"よく[肉]{にく}を[食]{た}べます。", why:"よく means “often”: the opposite."},
     {t:"ぜんぜん[肉]{にく}を[食]{た}べました。", why:"This is past and still not negative."},
     {t:"いつも[肉]{にく}を[食]{た}べます。", why:"いつも means “always”."}
   ]},
   {id:"e3u3-q45", lesson:"e3u3-l5", level:2, q:"How do you say “three times a week”?", options:[
     {t:"[週]{しゅう}に[三回]{さんかい}", ok:true, why:"Period + に + number + [回]{かい}."},
     {t:"[週]{しゅう}で[三回]{さんかい}", why:"The period takes に in this pattern."},
     {t:"[三回]{さんかい}に[週]{しゅう}", why:"The order is period first: [週]{しゅう}に[三回]{さんかい}."},
     {t:"[週]{しゅう}に[三階]{さんがい}", why:"[三階]{さんがい} is the third floor. Times use [回]{かい}."}
   ]},
   {id:"e3u3-q46", lesson:"e3u3-l5", level:3, q:"Kenji wants to say “It takes about twenty minutes to the station.” Which is correct?", options:[
     {t:"[駅]{えき}まで[二十分]{にじゅっぷん}ぐらいかかります。", ok:true, why:"まで (as far as) + duration + ぐらい (about) + かかります (takes)."},
     {t:"[駅]{えき}まで[二十分]{にじゅっぷん}ごろかかります。", why:"ごろ is “about” for a point in time (at about two o’clock). For an amount of time, use ぐらい."},
     {t:"[駅]{えき}まで[二十分]{にじゅっぷん}にかかります。", why:"Durations don’t take に."},
     {t:"[駅]{えき}まで[二十時間]{にじゅうじかん}ぐらいかかります。", why:"[時間]{じかん} is hours: this says twenty hours."}
   ]},
   {id:"e3u3-q47", lesson:"e3u3-l5", level:1, q:"Which reading means “the 1st of the month”?", options:[
     {t:"ついたち", ok:true, why:"The 1st has the special reading ついたち."},
     {t:"いちにち", why:"いちにち means “one day” (a length of time), not the date."},
     {t:"いっか", why:"There is no such reading for the date."},
     {t:"ひとつか", why:"Native ひとつ isn’t used here; the 1st is ついたち."}
   ]}
  ]
});
