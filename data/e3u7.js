/* Japanese Foundations · Unit 7 (e3u7) · N4 grammar II */
/* Built from source parts with the N4 furigana rule applied (JFOUND_BRIEF §2). */
ICA.addUnit({
 id:"e3u7",
 track:"e3",
 n:7,
 title:"N4 grammar II",
 icon:"🧩",
 blurb:"The passive (including the “suffering” passive), the causative and the causative-passive; four ways to say how you know something (～そう, ～そうだ, ～ようだ・みたい, ～らしい); transitive and intransitive verb pairs with ～てある and ～ている; ～ながら, ～のに and ～し; and a first look at respectful and humble speech; then degree and ease with ～すぎる, ～やすい and ～にくい, ways of doing with ～[方]{かた}, other people’s wishes with ～たがる, direction and change with ～てくる and ～ていく, and questions inside sentences with ～か and ～かどうか.",
 goals:[
  "Build the passive, causative and causative-passive forms of any verb, group by group, including する and [来]{く}る",
  "Use the passive for things done to people and things, and the “suffering” passive for events that affect you",
  "Say “make someone do”, “let someone do” and “be made to do” with the right particles",
  "Choose between ～そう, ～そうだ, ～ようだ, ～みたい and ～らしい according to how you know something",
  "Use transitive and intransitive pairs such as [開]{あ}ける and [開]{あ}く with を and が, and tell ～てある from ～ている",
  "Join ideas with ～ながら, ～のに and ～し",
  "Recognise the most common respectful and humble verbs, and use a few of them safely",
  "Say “too much”, “easy to”, “hard to” and “the way to” on the ます stem, describe others’ wishes with ～たがる, use ～てくる and ～ていく for direction and change, and put questions inside sentences with ～か and ～かどうか"
 ],
 read:[
  {book:"taekim", where:"Special Expressions: “Causative and Passive Verbs”, “Honorific and Humble Forms” and “Similarity or hearsay”"},
  {
   book:"irodori",
   where:"Elementary 2 (A2) and Pre-Intermediate: the lessons on the passive, ～てあります, ～ながら and ～し (Elementary 2), and on the causative, ～みたい, ～ようだ, ～らしい, ～のに and keigo (Pre-Intermediate)",
   note:"The free textbooks’ tables of contents list each grammar point by lesson; the lessons are named in each lesson’s Read section here."
  }
 ],
 lessons:[
  {
   id:"e3u7-l1",
   title:"The passive: things done to people and things",
   minutes:60,
   hook:{
    q:"Cheska writes in her diary: 「[電車]{でんしゃ}で[足]{あし}を[踏]{ふ}まれました。」 [踏]{ふ}む means “step on”. What happened?",
    options:[
     "She stepped on someone’s foot",
     "Someone stepped on her foot",
     "She hurt her foot on the station steps",
     "She walked all the way instead of taking the train"
    ],
    answer:1,
    reveal:"**Someone stepped on her foot.** [踏]{ふ}まれました is the passive of [踏]{ふ}む: “was stepped on”. Japanese makes the person who is affected the topic, even when the thing acted on is only her foot, and it can leave out who did it. English would rather say “someone stepped on my foot”. This lesson shows how to build the passive for every verb group and when Japanese reaches for it, which is more often than English does."
   },
   goals:[
    "Build the passive form of godan, ichidan and irregular verbs, and conjugate it like an ichidan verb",
    "Say what was done to someone with は, に and the passive, including actions on someone’s body or belongings",
    "Use the passive with things as the subject, and によって for the creator of a work",
    "Recognise the “suffering” passive, which shows that an event affected you, usually badly",
    "Tell the passive apart from the potential form and from respectful speech, which can look the same"
   ],
   learn:[
    {
     h:"Turning a sentence around",
     body:[
      {lead:"In a passive sentence, the person or thing that an action happens to becomes the topic. The doer moves to the background, marked with に."},
      {
       ex:"[先生]{せんせい}がまりやさんをほめました。\nThe teacher praised Mariya. (active)\n\nまりやさんは先生にほめられました。\nMariya was praised by the teacher. (passive)",
       label:"Active and passive"
      },
      "Three things change. Mariya, the person who was praised, becomes the topic with は. The teacher, the doer, takes に. And the verb ほめる (praise) takes its [[passive|passive]] form, ほめられる. The event itself is the same: the teacher still praised Mariya.",
      {
       fig:"<svg viewBox=\"0 0 340 292\"><defs><marker id=\"e3u7a1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">One event, two viewpoints</text><rect class=\"d-panel\" x=\"6\" y=\"32\" width=\"328\" height=\"108\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"54\">Active: the doer is the topic</text><rect class=\"d-gold\" x=\"16\" y=\"66\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"72\" y=\"91\" text-anchor=\"middle\">せんせいが</text><path class=\"d-ink\" d=\"M132 86H206\" stroke-width=\"2\" marker-end=\"url(#e3u7a1)\"/><rect class=\"d-lup\" x=\"212\" y=\"66\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"268\" y=\"91\" text-anchor=\"middle\">まりやさんを</text><text class=\"s\" x=\"170\" y=\"128\" text-anchor=\"middle\">ほめました (praised)</text><rect class=\"d-panel\" x=\"6\" y=\"152\" width=\"328\" height=\"108\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"18\" y=\"174\">Passive: the receiver is the topic</text><rect class=\"d-lup\" x=\"16\" y=\"186\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"72\" y=\"211\" text-anchor=\"middle\">まりやさんは</text><path class=\"d-ink\" d=\"M208 206H134\" stroke-width=\"2\" marker-end=\"url(#e3u7a1)\"/><rect class=\"d-gold\" x=\"212\" y=\"186\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"268\" y=\"211\" text-anchor=\"middle\">せんせいに</text><text class=\"s\" x=\"170\" y=\"248\" text-anchor=\"middle\">ほめられました (was praised)</text><text class=\"s\" x=\"170\" y=\"284\" text-anchor=\"middle\">The arrow, who acts on whom, stays the same.</text></svg>",
       alt:"Two panels. Top, active: せんせいが with an arrow pointing to まりやさんを, labeled ほめました (praised). Bottom, passive: まりやさんは comes first, and the arrow still points from せんせいに to まりやさん, labeled ほめられました (was praised).",
       cap:"The passive changes the starting point of the sentence, not the event."
      },
      "English speakers are often taught to avoid the passive. Japanese uses it a lot, and especially with people as the topic: “I was scolded”, “I was asked the way”, “I got rained on”. It lets you tell a story from the point of view of the person it happened to, usually yourself."
     ]
    },
    {
     h:"Building the passive form",
     body:[
      "The passive is built from the same stem as the [[nai-form|ない-form]] you learned in Unit 3. Follow the verb group ([[verb-group]]):",
      {
       table:[
        ["Group", "Rule", "Examples"],
        [
         "[[godan-verb|Godan]]",
         "last sound → あ-row, then れる",
         "[書]{か}く → 書かれる\n[読]{よ}む → 読まれる\n[呼]{よ}ぶ → [呼]{よ}ばれる\n[待]{ま}つ → [待]{ま}たれる\n[話]{はな}す → 話される\n[取]{と}る → [取]{と}られる"
        ],
        ["Godan ending in う", "う → わ, then れる", "[言]{い}う → [言]{い}われる\n[笑]{わら}う → [笑]{わら}われる\n[使]{つか}う → [使]{つか}われる"],
        ["[[ichidan-verb|Ichidan]]", "drop る, add られる", "[食]{た}べる → 食べられる\n[見]{み}る → 見られる\n[建]{た}てる → [建]{た}てられる"],
        ["[[irregular-verb|Irregular]]", "learn by heart", "する → される\n[来]{く}る → [来]{こ}られる (read こられる)"]
       ]
      },
      {
       key:"A shortcut: take the ない-form and swap the ending. Godan: ない → れる (書かない → 書かれる, [言]{い}わない → [言]{い}われる). Ichidan: ない → られる (食べない → 食べられる). Then learn the two irregular verbs: される and [来]{こ}られる."
      },
      "Notice that godan verbs take **れる**, not られる. The ら in [取]{と}られる belongs to the stem ([取]{と}ら), as in [取]{と}らない. Writing 書かられる for 書かれる is a common slip.",
      "Every passive verb is itself an ichidan verb, so you already know how to conjugate it:",
      {
       table:[
        ["Form", "Example"],
        ["plain (dictionary)", "書かれる"],
        ["polite", "書かれます"],
        ["polite past", "書かれました"],
        ["negative", "書かれない・書かれません"],
        ["て-form", "書かれて"],
        ["～ている", "書かれている (is written)"]
       ]
      },
      {tip:"A little chant helps: “godan: あ-row + れる; ichidan: られる; する → される; [来]{く}る → [来]{こ}られる”."}
     ]
    },
    {
     h:"Things done to people",
     body:[
      "The basic pattern is: **person は doer に passive verb**. It reports something that someone did to the person.",
      {
       ex:"[私]{わたし}は[毎朝]{まいあさ}、[母]{はは}に[起]{お}こされます。\nMy mother wakes me up every morning. (I am woken by my mother.)\n\nあおいさんは[部長]{ぶちょう}に[呼]{よ}ばれました。\nAoi was called in by the department manager (at her internship).\n\nトビーさんは[知]{し}らない[人]{ひと}に[道]{みち}を[聞]{き}かれました。\nToby was asked the way by a stranger.\n\nまりやさんは[友達]{ともだち}の[結婚式]{けっこんしき}に[招待]{しょうたい}されました。\nMariya was invited to her friend’s wedding.",
       label:"Person は doer に passive"
      },
      "The doer can be left out when it is unknown, obvious or unimportant, as in the last example: we don’t need to know exactly who sent the invitation.",
      "With verbs of saying and giving, the doer is often marked with から instead of に: 先生から[注意]{ちゅうい}されました (I was warned by the teacher). に is also correct with verbs like [注意]{ちゅうい}する and [言]{い}う, so use に when you are unsure.",
      {h:"Done to your body or your things"},
      "When someone acts on a part of your body or something you own, Japanese still makes **you** the topic. The body part or the thing keeps を:",
      {
       ex:"電車で[隣]{となり}の人に[足]{あし}を[踏]{ふ}まれました。\nThe person next to me on the train stepped on my foot.\n\n[旅行中]{りょこうちゅう}に[財布]{さいふ}を[盗]{ぬす}まれました。\nMy wallet was stolen while I was traveling.",
       label:"Your body and your things"
      },
      "Saying [私]{わたし}の[足]{あし}は[踏]{ふ}まれました (“my foot was stepped on”) sounds unnatural: in Japanese, it happened to **you**. With belongings both versions are heard: [財布]{さいふ}を[盗]{ぬす}まれました puts the focus on you, and [財布]{さいふ}が[盗]{ぬす}まれました on the wallet."
     ]
    },
    {
     h:"Things done to things: notices, news and descriptions",
     body:[
      "The topic of a passive can also be a thing. This is the kind of passive English uses too, and you will meet it in news, notices and descriptions. The doer is usually left out.",
      {
       ex:"この[寺]{てら}は[八百]{はっぴゃく}[年前]{ねんまえ}に[建]{た}てられました。\nThis temple was built 800 years ago.\n\n[日本語]{にほんご}は[世界]{せかい}の[多]{おお}くの[国]{くに}で[勉強]{べんきょう}されています。\nJapanese is studied in many countries around the world.\n\n[会議]{かいぎ}は[三階]{さんがい}の[会議室]{かいぎしつ}で[行]{おこな}われます。\nThe meeting will be held in the meeting room on the third floor.\n\nこの本はやさしい日本語で書かれています。\nThis book is written in easy Japanese.",
       label:"Things as the topic"
      },
      "[行]{おこな}われる is the passive of [行]{おこな}う (hold, carry out). The kanji is the same as in [行]{い}く, but the reading is different, and it appears on many notices about events.",
      "The last example uses ～ている for a state: the book **is** written in easy Japanese (it was written that way, and it still is).",
      {h:"The creator: によって"},
      "When the topic is something that someone created, such as a book, a building, an invention or a painting, the creator takes **によって**, not に:",
      {
       ex:"「[源氏物語]{げんじものがたり}」は[紫式部]{むらさきしきぶ}によって書かれました。\nThe Tale of Genji was written by Murasaki Shikibu.\n\nこの[橋]{はし}は[有名]{ゆうめい}な[建築家]{けんちくか}によって[設計]{せっけい}されました。\nThis bridge was designed by a famous architect.",
       label:"によって for creators"
      },
      "によって also appears in formal writing and news with other verbs. In everyday stories about people, に is the normal choice."
     ]
    },
    {
     h:"The “suffering” passive",
     body:[
      "Here is something English can’t do. Japanese can make a passive even from verbs with no object, like [降]{ふ}る (fall, of rain) and [泣]{な}く (cry). The meaning is: this happened, and **I was affected by it**, usually in a bad way. This is often called the [[suffering-passive|“suffering” passive]] ([迷惑]{めいわく}の[受身]{うけみ}, “nuisance passive”).",
      {
       ex:"[帰]{かえ}りに[雨]{あめ}に[降]{ふ}られました。\nI got caught in the rain on the way home.\n\n[夜中]{よなか}に[赤]{あか}ちゃんに[泣]{な}かれて、[大変]{たいへん}でした。\nThe baby cried in the night, and it was hard on me.\n\n[隣]{となり}の[席]{せき}の人にたばこを[吸]{す}われました。\nThe person in the next seat smoked, and I had to put up with it.\n\n[弟]{おとうと}にケーキを食べられました。\nMy little brother ate my cake (and I wasn’t happy about it).",
       label:"The suffering passive"
      },
      "Compare [弟]{おとうと}がケーキを食べました, a neutral report of what happened, with [弟]{おとうと}にケーキを食べられました, which tells the listener that it was your cake, or that you minded. English needs extra words such as “on me” or “and I…” to say the same thing.",
      "Not every passive with a person is negative: ほめられる (be praised), [招待]{しょうたい}される (be invited) and [助]{たす}けられる (be helped, be rescued) are fine. But for a kindness you wanted, Japanese uses [[morau|～てもらう]] instead:",
      {
       table:[
        ["✓ Natural", "✗ Sounds wrong"],
        [
         "[友達]{ともだち}に[引]{ひ}っ[越]{こ}しを[手伝]{てつだ}ってもらいました。\nA friend helped me move.",
         "[友達]{ともだち}に[引]{ひ}っ[越]{こ}しを[手伝]{てつだ}われました。\n(sounds as if you didn’t want the help)"
        ]
       ]
      }
     ]
    },
    {
     h:"One shape, three jobs",
     body:[
      "For ichidan verbs, the passive looks exactly like the [[potential-form|potential form]] from Unit 6: 食べられる can mean “be eaten” or “can eat”. The rest of the sentence tells you which.",
      {
       table:[
        ["Sentence", "Meaning", "Clue"],
        ["[魚]{さかな}が[猫]{ねこ}に食べられました。", "The fish was eaten by the cat.", "に marks a doer: passive"],
        ["[私]{わたし}は[生]{なま}の[魚]{さかな}が食べられます。", "I can eat raw fish.", "が marks what you can eat: potential"]
       ]
      },
      "Godan verbs keep the two apart: 書ける means “can write”, 書かれる means “be written”. And the shortened forms 見れる and 食べれる that you hear in casual speech ([[ra-nuki-kotoba|ら[抜]{ぬ}き[言葉]{ことば}]]) are only ever potential, never passive.",
      "The same れる and られる endings have a third job: they make verbs **respectful**. [先生]{せんせい}はもう[帰]{かえ}られました means “The teacher has already gone home”, said with respect, not “was returned”. You will meet this in Lesson 5. [来]{こ}られる can do all three jobs: “be come to” (suffering passive), “can come” and “come” (respectful).",
      {h:"Common mistakes"},
      {
       table:[
        ["✗ Mistake", "✓ Correct", "Why"],
        ["書かられる", "書かれる", "Godan verbs add れる to the あ-row: か + れる."],
        ["[言]{い}あれる", "[言]{い}われる", "Verbs ending in う use わ, as in [言]{い}わない."],
        ["[来]{く}られる", "[来]{こ}られる", "The reading of [来]{く}る changes to こ, as in [来]{こ}ない."],
        ["まりやさんは先生がほめられました。", "まりやさんは先生にほめられました。", "The doer takes に in a passive sentence."],
        ["[私]{わたし}の[足]{あし}は[踏]{ふ}まれました。", "[私]{わたし}は[足]{あし}を[踏]{ふ}まれました。", "It happened to you; the body part keeps を."],
        [
         "この[絵]{え}は[有名]{ゆうめい}な[画家]{がか}に[描]{か}かれました。",
         "この[絵]{え}は[有名]{ゆうめい}な[画家]{がか}によって[描]{か}かれました。",
         "With the creator of a work, に sounds wrong to most speakers and textbooks; use によって."
        ]
       ]
      },
      "The full reference is in {{passive-form}}.",
      {terms:["passive", "suffering-passive"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l1-x1",
     type:"mcq",
     q:"読む (read) is a godan verb. What is its passive form?",
     options:[
      {t:"読まれる", ok:true, why:"Right. む moves to the あ-row (ま), and godan verbs add れる: 読まれる, as in 読まない → 読まれる."},
      {t:"読まられる", why:"られる is for ichidan verbs. Godan verbs add only れる to the あ-row: 読まれる."},
      {t:"読める", why:"This is the potential form, “can read”. The passive needs the あ-row: 読まれる."},
      {t:"読みられる", why:"The passive isn’t built on the ます stem (読み). Use the ない-form stem: 読ま + れる."}
     ]
    },
    {
     id:"e3u7-l1-x2",
     type:"match",
     q:"Match each verb to its passive form, written in hiragana.",
     pairs:[
      ["[呼]{よ}ぶ (call)", "よばれる", "Godan: ぶ → ば, then れる."],
      ["[言]{い}う (say)", "いわれる", "Godan ending in う: う → わ, then れる."],
      ["[建]{た}てる (build)", "たてられる", "Ichidan: drop る, add られる."],
      ["する (do)", "される", "Irregular: learn される by heart."],
      ["[来]{く}る (come)", "こられる", "Irregular: the reading changes to こ, as in [来]{こ}ない."],
      ["[盗]{ぬす}む (steal)", "ぬすまれる", "Godan: む → ま, then れる."]
     ]
    },
    {
     id:"e3u7-l1-x3",
     type:"order",
     q:"Put the steps for making the polite past passive of [言]{い}う (say) in order.",
     items:[
      {t:"Decide the group: [言]{い}います shows that [言]{い}う is a godan verb.", why:"The group decides which rule to use, so it comes first."},
      {t:"Make the ない-form: [言]{い}わない (う becomes わ).", why:"The passive is built on the ない-form stem, so you need it before you can add anything."},
      {t:"Swap ない for れる: [言]{い}われる.", why:"Godan verbs take れる in place of ない. This gives the plain passive."},
      {t:"Conjugate the passive like an ichidan verb: [言]{い}われました.", why:"Every passive verb is ichidan, so drop る and add ました last."}
     ]
    },
    {
     id:"e3u7-l1-x4",
     type:"mcq",
     q:"Rodrigo had his wallet stolen. Which sentence says this naturally, with Rodrigo as the topic?",
     options:[
      {
       t:"ロドリゴさんは[財布]{さいふ}を[盗]{ぬす}まれました。",
       ok:true,
       why:"Right. Rodrigo is the person affected, so he is the topic; the stolen thing keeps を, and the verb is passive."
      },
      {t:"ロドリゴさんは[財布]{さいふ}に[盗]{ぬす}まれました。", why:"に marks the doer, so this says the wallet stole from him."},
      {t:"ロドリゴさんは[財布]{さいふ}を[盗]{ぬす}みました。", why:"This is active: it says Rodrigo stole a wallet."},
      {
       t:"ロドリゴさんの[財布]{さいふ}は[盗]{ぬす}みました。",
       why:"The verb is active, so someone else (perhaps the speaker) did the stealing: “Rodrigo’s wallet, I stole it.” For what happened to Rodrigo, you need the passive with Rodrigo as the topic: [盗]{ぬす}まれました."
      }
     ]
    },
    {
     id:"e3u7-l1-x5",
     type:"mcq",
     q:"Complete the museum label: この[建物]{たてもの}は[百年前]{ひゃくねんまえ}、イタリアの[建築家]{けんちくか}（　）[設計]{せっけい}されました。",
     options:[
      {t:"によって", ok:true, why:"Right. The building is something the architect created, so the creator takes によって."},
      {t:"に", why:"に marks the doer when something is done to a person. For the creator of a work, Japanese uses によって."},
      {t:"を", why:"を marks an object. The architect did the designing; the building is the topic."},
      {t:"で", why:"で marks a place or a means, such as a material or a language, not the person who created it."}
     ]
    },
    {
     id:"e3u7-l1-x6",
     type:"mcq",
     q:"Cheska says: 「[帰]{かえ}りに雨に[降]{ふ}られました。」 What does she mean?",
     options:[
      {
       t:"She got caught in the rain on the way home.",
       ok:true,
       why:"Right. This is the suffering passive of [降]{ふ}る: it rained, and she was affected by it."
      },
      {
       t:"She was told it would rain on the way home.",
       why:"Hearing news would need a verb of telling or ～そうです (Lesson 3). [降]{ふ}られる means the rain fell on her."
      },
      {t:"The rain stopped just as she went home.", why:"Nothing here says “stop” (やむ). The passive shows that the rain affected her."},
      {t:"She was glad it rained on the way home.", why:"The suffering passive usually shows the opposite: the event was a nuisance."}
     ]
    },
    {
     id:"e3u7-l1-x7",
     type:"sort",
     q:"These ichidan verbs end in られる. Decide from the context whether each one is a passive (“is done to”) or a potential (“can”).",
     buckets:["Passive", "Potential"],
     items:[
      {t:"[猫]{ねこ}に[魚]{さかな}を食べられました。", b:0, why:"The cat (に) is the doer, and the fish kept を: the cat ate the fish on me. A passive."},
      {t:"[私]{わたし}は[納豆]{なっとう}が食べられます。", b:1, why:"が marks what I can eat. A potential: “I can eat natto.”"},
      {t:"先生にほめられて、うれしかったです。", b:0, why:"The teacher (に) praised me: “I was praised, and I was happy.” A passive."},
      {t:"この[漢字]{かんじ}は[子]{こ}どもでも[覚]{おぼ}えられます。", b:1, why:"でも means “even”: “Even children can learn this kanji.” A potential."},
      {t:"[知]{し}らない人に[写真]{しゃしん}を見られました。", b:0, why:"A stranger (に) saw my photos, and I minded. A passive."},
      {t:"ここから[富士山]{ふじさん}が見られます。", b:1, why:"“You can see Mt Fuji from here.” が marks what can be seen: a potential."}
     ]
    },
    {
     id:"e3u7-l1-x8",
     type:"spot",
     q:"Cheska wrote about a bad day. Tap each passive form that is **wrong**.",
     ask:"is wrong",
     parts:[
      "[今日]{きょう}は[大変]{たいへん}な[日]{ひ}でした。[朝]{あさ}、電車で[足]{あし}を",
      {t:"[踏]{ふ}まれました", flag:false, why:"Correct: [踏]{ふ}む → [踏]{ふ}まない → [踏]{ふ}まれる."},
      "。[会社]{かいしゃ}では[部長]{ぶちょう}に",
      {t:"[呼]{よ}ばられて", flag:true, why:"Wrong. [呼]{よ}ぶ is godan, so it takes れる: [呼]{よ}ばれて."},
      "、[仕事]{しごと}のミスを",
      {t:"[注意]{ちゅうい}されました", flag:false, why:"Correct: [注意]{ちゅうい}する → [注意]{ちゅうい}される."},
      "。[帰]{かえ}りは雨に",
      {t:"[降]{ふ}られて", flag:false, why:"Correct: the suffering passive of [降]{ふ}る, [降]{ふ}られる."},
      "、[家]{いえ}に[着]{つ}いたら、ケーキを[弟]{おとうと}に",
      {t:"食べれていました", flag:true, why:"Wrong. The passive of the ichidan verb 食べる is 食べられる: 食べられていました. 食べれる is a casual potential, never a passive."},
      "。[夜]{よる}は[急]{きゅう}に[友達]{ともだち}に",
      {t:"[来]{く}られて", flag:true, why:"Wrong reading. The passive of [来]{く}る is read こられる: [来]{こ}られて."},
      "、[勉強]{べんきょう}できませんでした。"
     ]
    },
    {
     id:"e3u7-l1-x9",
     type:"type",
     q:"Rodrigo tells a colleague what happened on his way to work: “This morning a stranger asked me the way.” Type the passive in hiragana, polite past: 「[今朝]{けさ}、[知]{し}らない人に[道]{みち}を（　）。」 (聞く, ask)",
     answer:"きかれました",
     wrongs:[
      {v:"ききました", why:"That is active: Rodrigo asked the way. He was on the receiving end, and the stranger takes に, so use the passive: 聞かれました."},
      {v:"きかられました", why:"聞く is godan, so it takes れる after the a-sound: 聞か + れる → 聞かれる. られる is for ichidan verbs."},
      {v:"きけました", why:"聞ける is the potential (“could ask”). The passive uses the a-sound: 聞かれる."}
     ],
     why:"聞く → 聞かない → 聞かれる → 聞かれました. The doer, the stranger, takes に."
    },
    {
     id:"e3u7-l1-x10",
     type:"type",
     q:"A guidebook says: “This temple was built 800 years ago.” Type the passive in hiragana, polite past: 「このお[寺]{てら}は[八百年前]{はっぴゃくねんまえ}に（　）。」 ([建]{た}てる, build)",
     answer:"たてられました",
     wrongs:[
      {v:"たてれました", why:"[建]{た}てる is ichidan, so drop る and add られる: [建]{た}てられる. Without ら it isn’t a passive."},
      {v:"たてました", why:"That is active: the temple would be doing the building. The temple is what was built: [建]{た}てられました."}
     ],
     why:"Ichidan: [建]{た}てる → [建]{た}て + られる → [建]{た}てられました. This passive about things, with no doer named, is common in guides and the news."
    },
    {
     id:"e3u7-l1-x11",
     type:"type",
     q:"Type the particle that marks the doer: 「トビーさんは[犬]{いぬ}（　）かまれました。」 (“Toby was bitten by a dog.”)",
     answer:"に",
     wrongs:[
      {v:"が", why:"In a passive the doer takes に. が would make the dog the one that was bitten."},
      {v:"を", why:"を marks the object of an active verb. In a passive about a person, the doer takes に."}
     ],
     why:"Passive: the person it happens to is the topic (トビーさんは), and the doer takes に: [犬]{いぬ}にかまれました."
    }
   ],
   apply:{
    intro:"Use the passive about your own life. Keep the notes for yourself.",
    tasks:[
     {
      t:"Write about a bad day",
      how:[
       "Think of a day when several things went wrong (a real one, or invent it).",
       "Write four sentences with the passive: one with a person as the doer (～に～られました), one about your body or belongings (～を～られました), and two with the suffering passive (雨に[降]{ふ}られました, 子どもに[泣]{な}かれました…).",
       "Check each form with the table in this lesson: godan verbs take れる, ichidan verbs take られる."
      ],
      write:"1 … 2 … 3 … 4 …"
     },
     {
      t:"Make a passive table for ten verbs",
      how:[
       "Choose ten verbs: five godan (one ending in う), three ichidan, する and [来]{く}る.",
       "For each, write the dictionary form, the ない-form and the passive.",
       "Check them in a dictionary that lists verb forms. On Jisho.org, open a verb and choose “Show inflections”; the table includes the passive."
      ],
      write:"[言]{い}う・[言]{い}わない・[言]{い}われる …"
     },
     {
      t:"Find passives in real Japanese",
      how:[
       "Open NHK’s free news site for learners, NEWS WEB EASY (search for “NHK NEWS WEB EASY”). It is free to read.",
       "Read the headlines and find three verbs ending in ～れました, ～られました or ～されました.",
       "For each, write the dictionary form of the verb and what was done to whom."
      ],
      write:"Passive I found… dictionary form… what happened…"
     }
    ],
    proof:"Four passive sentences about a day of your own, a checked table of ten passive forms, and three passives you found and understood in real news."
   },
   read:[
    {
     book:"taekim",
     where:"Special Expressions, “Causative and Passive Verbs”, section “Passive Verbs”, with its conjugation rules",
     note:"Tae Kim calls godan verbs u-verbs and ichidan verbs ru-verbs."
    },
    {
     book:"irodori",
     where:"Elementary 2, Lessons 7 “If it rains, it will be held at the hall.”, 10 “What kind of clothes should I wear?”, 11 “I forgot to bring my point card.” and 13 “They display a lot of materials.”",
     note:"Passive ① to ④ in the book, including your belongings as the object (Lesson 11) and notices and descriptions of events and places, with audio."
    },
    {
     book:"irodori",
     where:"Pre-Intermediate, Lesson 4 “It seems like the air conditioner is broken…”",
     note:"The suffering passive (Passive ⑤ in the book), with audio."
    }
   ]
  },
  {
   id:"e3u7-l2",
   title:"Make, let and be made to: the causative and causative-passive",
   minutes:60,
   hook:{
    q:"「お[母]{かあ}さんは[子]{こ}どもに[野菜]{やさい}を[食]{た}べさせました。」 Who ate the vegetables?",
    options:["The mother", "The child", "Both of them", "Nobody: the mother cooked them"],
    answer:1,
    reveal:"**The child.** [食]{た}べさせる is the causative of [食]{た}べる: “make (or let) someone eat”. The mother is the topic because she caused it; the child, marked with に, did the eating. If you guessed the mother, that’s a very natural reading of a sentence that starts with her. This lesson shows how to build the causative, how to mark the person who does the action, and how to say “I was made to…”."
   },
   goals:[
    "Build the causative form (～せる・～させる) of any verb, including する and [来]{く}る",
    "Say “make someone do” and “let someone do”, marking the person with に or を correctly",
    "Ask for permission with ～させてください and ～させていただけませんか",
    "Build the causative-passive, including the short godan form ～される and its limits",
    "Say “I was made to…” and avoid the most common form and particle mistakes"
   ],
   learn:[
    {
     h:"Making and letting",
     body:[
      {
       lead:"The [[causative|causative]] form means “make someone do” or “let someone do”. The person who causes the action is the topic; the person who actually does it takes に (or を)."
      },
      {
       ex:"[先生]{せんせい}は[学生]{がくせい}に[作文]{さくぶん}を[書]{か}かせました。\nThe teacher made the students write an essay.\n\n[母]{はは}は[弟]{おとうと}に[部屋]{へや}を[掃除]{そうじ}させました。\nMy mother made my little brother clean his room.\n\n[父]{ちち}は[私]{わたし}に[車]{くるま}を[運転]{うんてん}させてくれました。\nMy father let me drive his car.\n\n子どもたちを[公園]{こうえん}で[自由]{じゆう}に[遊]{あそ}ばせました。\nWe let the children play freely in the park.",
       label:"The causative"
      },
      "“Make” or “let”? The form is the same, so the context decides. Something people don’t want to do (cleaning, homework) usually means “make”. Something they want to do, or a form with ～てくれる or ～てあげる (a favor, from Unit 6), usually means “let”: [運転]{うんてん}させてくれました is a kindness, so it means “let me drive”.",
      {
       fig:"<svg viewBox=\"0 0 340 236\"><defs><marker id=\"e3u7a2\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Three roles in a causative sentence</text><rect class=\"d-gold\" x=\"12\" y=\"36\" width=\"96\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"60\" y=\"58\" text-anchor=\"middle\">はは は</text><text class=\"s\" x=\"60\" y=\"77\" text-anchor=\"middle\">causer</text><path class=\"d-ink\" d=\"M112 62H130\" stroke-width=\"2\" marker-end=\"url(#e3u7a2)\"/><rect class=\"d-lup\" x=\"134\" y=\"36\" width=\"96\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"182\" y=\"58\" text-anchor=\"middle\">おとうと に</text><text class=\"s\" x=\"182\" y=\"77\" text-anchor=\"middle\">doer</text><path class=\"d-ink\" d=\"M234 62H252\" stroke-width=\"2\" marker-end=\"url(#e3u7a2)\"/><rect class=\"d-sage\" x=\"256\" y=\"36\" width=\"76\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"294\" y=\"58\" text-anchor=\"middle\">へや を</text><text class=\"s\" x=\"294\" y=\"77\" text-anchor=\"middle\">object</text><rect class=\"d-panel\" x=\"12\" y=\"104\" width=\"320\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"172\" y=\"131\" text-anchor=\"middle\">そうじ させました (made … clean)</text><text class=\"s\" x=\"170\" y=\"176\" text-anchor=\"middle\">The causer is the topic, but the person</text><text class=\"s\" x=\"170\" y=\"194\" text-anchor=\"middle\">marked with に is the one who cleans.</text><text class=\"s\" x=\"170\" y=\"222\" text-anchor=\"middle\">Mother → little brother → cleans the room</text></svg>",
       alt:"Three boxes in a row: はは は (causer), an arrow to おとうと に (doer), an arrow to へや を (object). Below them, そうじ させました (made … clean). A note says the causer is the topic, but the person marked with に (the doer) is the one who cleans: mother, then little brother, who cleans the room.",
       cap:"In a causative sentence, the topic causes the action and the person with に does it."
      }
     ]
    },
    {
     h:"Building the causative",
     body:[
      "The causative is built exactly like the passive from Lesson 1, with **せ** in place of れ:",
      {
       table:[
        ["Group", "Rule", "Examples"],
        [
         "Godan",
         "last sound → あ-row, then せる",
         "書く → 書かせる\n[読]{よ}む → 読ませる\n[行]{い}く → 行かせる\n[待]{ま}つ → [待]{ま}たせる\n[話]{はな}す → 話させる\n[遊]{あそ}ぶ → [遊]{あそ}ばせる\n[帰]{かえ}る → [帰]{かえ}らせる"
        ],
        ["Godan ending in う", "う → わ, then せる", "[言]{い}う → [言]{い}わせる\n[手伝]{てつだ}う → [手伝]{てつだ}わせる\n[歌]{うた}う → [歌]{うた}わせる"],
        ["Ichidan", "drop る, add させる", "食べる → 食べさせる\n[見]{み}る → 見させる\n[考]{かんが}える → [考]{かんが}えさせる"],
        ["Irregular", "learn by heart", "する → させる\n[来]{く}る → [来]{こ}させる (read こさせる)"]
       ]
      },
      {
       key:"From the ない-form: godan ない → せる (書かない → 書かせる); ichidan ない → させる (食べない → 食べさせる). It is the passive pattern with せ for れ: 書かれる / 書かせる, 食べられる / 食べさせる, される / させる, [来]{こ}られる / [来]{こ}させる."
      },
      "Like the passive, every causative verb is an ichidan verb: 書かせます, 書かせました, 書かせて, 書かせない.",
      "話させる looks as if it has an extra さ, but it doesn’t: the さ belongs to the stem, as in 話さない. Only ichidan verbs, する and [来]{く}る add さ themselves.",
      {warn:"見せる (show) is a separate everyday verb, not the causative of 見る. The regular causative of 見る is 見させる."}
     ]
    },
    {
     h:"に or を for the person?",
     body:[
      "The person who does the action is marked with に or を. One rule covers the most important case:",
      {key:"If the verb already has an object with を, the person takes **に**. Japanese avoids two を in the same clause."},
      {ex:"母は[弟]{おとうと}に[部屋]{へや}を[掃除]{そうじ}させました。\n先生は学生にレポートを書かせました。", label:"Object with を, so the person takes に"},
      "If the verb has no object, as with 行く, [来]{く}る, [帰]{かえ}る, [走]{はし}る, [泣]{な}く and [笑]{わら}う, the person usually takes **を**:",
      {
       ex:"先生は学生を[早]{はや}く[帰]{かえ}らせました。\nThe teacher sent the students home early.\n\nロドリゴさんはいつもみんなを[笑]{わら}わせます。\nRodrigo always makes everyone laugh.\n\n[遅]{おく}れて、[友達]{ともだち}を[三十分]{さんじゅっぷん}も[待]{ま}たせてしまいました。\nI was late and kept my friend waiting for thirty minutes.",
       label:"No object, so the person usually takes を"
      },
      "[待]{ま}たせる (keep someone waiting) also takes を for the person who waits: the object of [待]{ま}つ (you) is simply left unsaid.",
      "With verbs of deliberate action such as 行く, [帰]{かえ}る and [走]{はし}る, you will also hear に, especially when the person wanted to do it (“let”): 子どもに[一人]{ひとり}で行かせました. Both are correct, but at this level を is the safe choice. With feeling verbs such as [泣]{な}く and [笑]{わら}う, and with [待]{ま}たせる, use を. And when a movement verb already has を for the place ([道]{みち}を[歩]{ある}く, [公園]{こうえん}を[走]{はし}る), the person takes に, to avoid two を: 子どもに[公園]{こうえん}を[走]{はし}らせました.",
      "Causatives of feeling verbs are very common: [笑]{わら}わせる (make laugh), [泣]{な}かせる (make cry), [心配]{しんぱい}させる (make worry), びっくりさせる (surprise). And one everyday phrase hides a causative: お[待]{ま}たせしました (“Sorry to have kept you waiting”) comes from [待]{ま}たせる, “make wait”, in a humble pattern you will meet in Lesson 5."
     ]
    },
    {
     h:"“Please let me”: ～させてください",
     body:[
      "Put the causative in the て-form and add ください, and you have a polite way to ask to be allowed to do something: “please let me…”.",
      {
       ex:"[私]{わたし}にやらせてください。\nPlease let me do it.\n\n[少]{すこ}し[考]{かんが}えさせてください。\nLet me think about it a little.\n\n[今日]{きょう}は[早]{はや}く[帰]{かえ}らせてください。\nPlease let me go home early today.",
       label:"～させてください"
      },
      "To ask more politely, for example a manager or a teacher, use ～させていただけませんか (“could you possibly let me…?”), with いただく, the humble verb for “receive”:",
      {ex:"[明日]{あした}、[休]{やす}ませていただけませんか。\nCould I possibly take tomorrow off?", label:"More polite"},
      "Compare ～てもいいですか from Unit 3: [帰]{かえ}ってもいいですか asks “May I go home?”. [帰]{かえ}らせてください is a request to be allowed, and it sounds a little more insistent. Both are polite.",
      "You will also hear ～させていただきます in formal speech: [説明]{せつめい}させていただきます (“allow me to explain”). It is correct, but used too often it sounds stiff; {{keigo-mistakes}} in the Academic Japanese track discusses this."
     ]
    },
    {
     h:"Being made to: the causative-passive",
     body:[
      "Put the causative and the passive together and you get the [[causative-passive|causative-passive]]: “be made to do”, usually something you didn’t want to do. Build the causative first, then make it passive. The causative is ichidan, so it takes られる: ～せる → ～せられる.",
      {
       table:[
        ["Verb", "Causative", "Causative-passive", "Short form (godan)"],
        ["書く", "書かせる", "書かせられる", "書かされる"],
        ["[飲]{の}む", "[飲]{の}ませる", "[飲]{の}ませられる", "[飲]{の}まされる"],
        ["[待]{ま}つ", "[待]{ま}たせる", "[待]{ま}たせられる", "[待]{ま}たされる"],
        ["[歌]{うた}う", "[歌]{うた}わせる", "[歌]{うた}わせられる", "[歌]{うた}わされる"],
        ["話す", "話させる", "話させられる", "none"],
        ["食べる", "食べさせる", "食べさせられる", "none"],
        ["する", "させる", "させられる", "none"],
        ["[来]{く}る", "[来]{こ}させる", "[来]{こ}させられる", "none"]
       ]
      },
      "Godan verbs also have a **short form**: あ-row + される (書かされる, [飲]{の}まされる). It is the more common form in speech, and both forms are correct. But godan verbs ending in す have no short form: 話させられる, never 話さされる. Ichidan and irregular verbs have only the long form.",
      {
       fig:"<svg viewBox=\"0 0 340 300\"><defs><marker id=\"e3u7a3\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Causative first, then passive</text><rect class=\"d-panel\" x=\"70\" y=\"34\" width=\"200\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"61\" text-anchor=\"middle\">かく (write)</text><path class=\"d-ink\" d=\"M170 80V102\" stroke-width=\"2\" marker-end=\"url(#e3u7a3)\"/><text class=\"s\" x=\"182\" y=\"96\">+ せる</text><rect class=\"d-gold\" x=\"70\" y=\"106\" width=\"200\" height=\"44\" rx=\"8\" stroke-width=\"2\"/><text x=\"170\" y=\"133\" text-anchor=\"middle\">かかせる (make write)</text><path class=\"d-ink\" d=\"M150 152L96 182\" stroke-width=\"2\" marker-end=\"url(#e3u7a3)\"/><path class=\"d-ink\" d=\"M190 152L244 182\" stroke-width=\"2\" marker-end=\"url(#e3u7a3)\"/><text class=\"s\" x=\"96\" y=\"168\" text-anchor=\"end\">+ られる</text><text class=\"s\" x=\"246\" y=\"168\">short</text><rect class=\"d-lup\" x=\"8\" y=\"186\" width=\"156\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"86\" y=\"210\" text-anchor=\"middle\">かかせられる</text><text class=\"s\" x=\"86\" y=\"228\" text-anchor=\"middle\">every verb</text><rect class=\"d-sage\" x=\"176\" y=\"186\" width=\"156\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"254\" y=\"210\" text-anchor=\"middle\">かかされる</text><text class=\"s\" x=\"254\" y=\"228\" text-anchor=\"middle\">godan, not す verbs</text><text class=\"s\" x=\"170\" y=\"266\" text-anchor=\"middle\">Both mean “be made to write”.</text><text class=\"s\" x=\"170\" y=\"286\" text-anchor=\"middle\">はなす → はなさせられる only</text></svg>",
       alt:"かく (write), plus せる, gives かかせる (make write). From there, plus られる gives かかせられる, which works for every verb; a shorter path gives かかされる, for godan verbs except those ending in す. Both mean be made to write. はなす has only はなさせられる.",
       cap:"The causative-passive stacks two endings; godan verbs (except す verbs) also have a short form."
      },
      "The person who is made to act is the topic, and the person who made them takes に:",
      {
       ex:"子どものころ、母に[毎日]{まいにち}ピアノを[練習]{れんしゅう}させられました。\nAs a child, I was made to practice the piano every day by my mother.\n\n[駅]{えき}で[一時間]{いちじかん}も[待]{ま}たされました。\nI was kept waiting at the station for a whole hour.\n\n[飲]{の}み[会]{かい}で[歌]{うた}を[歌]{うた}わされました。\nI was made to sing at the drinking party.\n\n[嫌]{きら}いな[野菜]{やさい}を食べさせられました。\nI was made to eat vegetables I don’t like.",
       label:"The causative-passive"
      },
      "も after an amount, as in 一時間も, means “as much as”: it adds to the feeling that the wait was too long.",
      {
       table:[
        ["Sentence", "Who did what"],
        ["母が[私]{わたし}にピアノを[練習]{れんしゅう}させました。", "My mother made me practice. (causative)"],
        ["[私]{わたし}は母にピアノを[練習]{れんしゅう}させられました。", "I was made to practice by my mother. (causative-passive)"],
        ["[私]{わたし}はピアノを[練習]{れんしゅう}しました。", "I practiced. (plain)"]
       ]
      }
     ]
    },
    {
     h:"Common mistakes",
     body:[
      {
       table:[
        ["✗ Mistake", "✓ Correct", "Why"],
        [
         "[書]{か}かさせる",
         "書かせる",
         "Godan verbs take せる after the あ-row. An extra さ (さ入れ[言葉]{ことば}) is a common slip, even among native speakers, in forms like 休まさせていただく."
        ],
        ["食べせる", "食べさせる", "Ichidan verbs take させる."],
        ["[来]{き}させる", "[来]{こ}させる", "[来]{く}る uses こ, as in [来]{こ}ない."],
        ["話さされる", "話させられる", "Verbs ending in す have no short causative-passive."],
        ["母は[弟]{おとうと}を[部屋]{へや}を[掃除]{そうじ}させました。", "母は[弟]{おとうと}に[部屋]{へや}を[掃除]{そうじ}させました。", "The verb already has an object with を, so the person takes に."],
        [
         "[私]{わたし}は母に[野菜]{やさい}を食べさせました。 (meaning “I was made to eat”)",
         "[私]{わたし}は母に[野菜]{やさい}を食べさせられました。",
         "The causative alone says that **you** made your mother eat vegetables."
        ]
       ]
      },
      "When you read a causative or causative-passive sentence, ask two questions: who caused it, and who actually did it? The topic with a causative is the causer. The topic with a causative-passive is the person who had to do it.",
      "The full tables are in {{causative-form}}.",
      {terms:["causative", "causative-passive"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l2-x1",
     type:"mcq",
     q:"What is the causative form of 行く (go)?",
     options:[
      {t:"行かせる", ok:true, why:"Right. 行く is godan: く → か, then せる."},
      {t:"行かさせる", why:"Godan verbs add せる only. The extra さ is a common slip (さ[入]{い}れ[言葉]{ことば})."},
      {t:"行きさせる", why:"The causative is built on the ない-form stem (行か), not the ます stem (行き)."},
      {t:"行かれる", why:"This is the passive (or respectful) form. The causative has せ: 行かせる."}
     ]
    },
    {
     id:"e3u7-l2-x2",
     type:"match",
     q:"Match each verb to its causative form, written in hiragana.",
     pairs:[
      ["[待]{ま}つ (wait)", "またせる", "Godan: つ → た, then せる."],
      ["話す (speak)", "はなさせる", "Godan: す → さ, then せる. The さ is part of the stem."],
      ["食べる (eat)", "たべさせる", "Ichidan: drop る, add させる."],
      ["[言]{い}う (say)", "いわせる", "Godan ending in う: う → わ, then せる."],
      ["する (do)", "させる", "Irregular."],
      ["[来]{く}る (come)", "こさせる", "Irregular: read こさせる."]
     ]
    },
    {
     id:"e3u7-l2-x3",
     type:"mcq",
     q:"「母は[弟]{おとうと}に[部屋]{へや}を[掃除]{そうじ}させました。」 Who cleaned the room?",
     options:[
      {t:"The little brother", ok:true, why:"Right. The person marked with に in a causative sentence is the one who does the action."},
      {t:"The mother", why:"The mother is the topic, but she caused the cleaning; she didn’t do it."},
      {t:"The speaker", why:"The speaker isn’t in the sentence. 母 and [弟]{おとうと} are family words for the speaker’s own mother and brother."},
      {
       t:"The mother and the brother together",
       why:"Then the sentence would say 母と[弟]{おとうと}が[掃除]{そうじ}しました. The causative separates the causer from the doer."
      }
     ]
    },
    {
     id:"e3u7-l2-x4",
     type:"mcq",
     q:"Choose the particle: 先生は学生（　）レポートを書かせました。",
     options:[
      {t:"に", ok:true, why:"Right. 書く already has an object with を (レポートを), so the person who writes takes に."},
      {t:"を", why:"There is already a を (レポートを). Japanese avoids two を in one clause, so the person takes に."},
      {t:"が", why:"が would make the students the subject of the causative, so they would be the ones causing it."},
      {t:"で", why:"で marks a place or a means, not the person who does the action."}
     ]
    },
    {
     id:"e3u7-l2-x5",
     type:"mcq",
     q:"Rodrigo wants to ask his supervisor at the seafood plant for permission to leave early today. Which sentence fits?",
     options:[
      {t:"[今日]{きょう}は[早]{はや}く[帰]{かえ}らせてください。", ok:true, why:"Right. Causative て-form + ください: “please let me go home early”."},
      {t:"[今日]{きょう}は[早]{はや}く[帰]{かえ}らせられてください。", why:"The causative-passive means “be made to”; it doesn’t fit a request for permission."},
      {t:"[今日]{きょう}は[早]{はや}く[帰]{かえ}られてください。", why:"[帰]{かえ}られる is the passive or respectful form, not “let me”."},
      {t:"[今日]{きょう}は[早]{はや}く[帰]{かえ}させてください。", why:"The causative of the godan verb [帰]{かえ}る is [帰]{かえ}らせる, so the request is [帰]{かえ}らせてください."}
     ]
    },
    {
     id:"e3u7-l2-x6",
     type:"sort",
     q:"Sort the verbs: which ones have a short causative-passive form (～される)?",
     buckets:["Short form ～される exists", "Only ～させられる"],
     items:[
      {t:"[飲]{の}む", b:0, why:"Godan: [飲]{の}まされる (short) and [飲]{の}ませられる (long)."},
      {t:"[待]{ま}つ", b:0, why:"Godan: [待]{ま}たされる and [待]{ま}たせられる."},
      {t:"[歌]{うた}う", b:0, why:"Godan: [歌]{うた}わされる and [歌]{うた}わせられる."},
      {t:"行く", b:0, why:"Godan: 行かされる and 行かせられる."},
      {t:"話す", b:1, why:"A godan verb ending in す: only 話させられる."},
      {t:"食べる", b:1, why:"Ichidan: only 食べさせられる."},
      {t:"する", b:1, why:"Irregular: only させられる."},
      {t:"[来]{く}る", b:1, why:"Irregular: only [来]{こ}させられる."}
     ]
    },
    {
     id:"e3u7-l2-x7",
     type:"order",
     q:"Put the steps for making the polite past causative-passive of 食べる in order.",
     items:[
      {t:"食べます shows that 食べる is ichidan: the stem is 食べ.", why:"The group decides the endings, so it comes first."},
      {t:"Make the causative: 食べさせる.", why:"The causative always comes before the passive, never the other way round."},
      {t:"Make the causative passive. It is ichidan, so add られる: 食べさせられる.", why:"Only now can the passive ending go on."},
      {t:"Conjugate it like any ichidan verb: 食べさせられました.", why:"Tense and politeness go on last."}
     ]
    },
    {
     id:"e3u7-l2-x8",
     type:"spot",
     q:"Cheska wrote about her childhood. Tap each form that is **wrong**.",
     ask:"is wrong",
     parts:[
      "子どものころ、父に[毎朝]{まいあさ}",
      {t:"[走]{はし}らされました", flag:false, why:"Correct: the short causative-passive of the godan verb [走]{はし}る."},
      "。テストの[前]{まえ}は母に",
      {t:"[勉強]{べんきょう}さされました", flag:true, why:"Wrong. する has no short form: [勉強]{べんきょう}させられました."},
      "。でも、父はときどき[私]{わたし}にゲームを",
      {t:"させてくれました", flag:false, why:"Correct: the causative of する with ～てくれる, “let me play games” as a kindness."},
      "。[兄]{あに}はいつも[私]{わたし}を",
      {t:"[笑]{わら}わせました", flag:false, why:"Correct: [笑]{わら}う → [笑]{わら}わせる, with を because [笑]{わら}う has no object."},
      "。[学校]{がっこう}では先生によく[作文]{さくぶん}を",
      {t:"書かさせられました", flag:true, why:"Wrong. The causative of 書く is 書かせる, with no extra さ: 書かせられました, or the short form 書かされました."},
      "。"
     ]
    },
    {
     id:"e3u7-l2-x9",
     type:"type",
     q:"Type the causative in hiragana, polite past: 「先生は[学生]{がくせい}に[教科書]{きょうかしょ}を（　）。」 (“The teacher had the students read the textbook.” 読む, read)",
     answer:"よませました",
     wrongs:[
      {v:"よまれました", why:"読まれる is the passive (“was read”). The causative of a godan verb is the a-sound + せる: 読ませる."},
      {v:"よみさせました", why:"させる doesn’t attach to the ます stem. For godan verbs: 読ま + せる → 読ませる."},
      {v:"よまさせました", why:"Godan verbs take せる, with no extra さ: 読ませる."}
     ],
     why:"読む → 読まない → 読ませる → 読ませました. The person who is made to do it, the students, takes に."
    },
    {
     id:"e3u7-l2-x10",
     type:"type",
     q:"Mariya and Toby are at a café. Toby paid last time, so Mariya says: “Let me pay today.” Type the missing part in hiragana: 「[今日]{きょう}は[私]{わたし}に（　）ください。」 ([払]{はら}う, pay)",
     answer:"はらわせて",
     wrongs:[
      {v:"はらさせて", why:"Verbs ending in う use わ before せる, as in the ない-form [払]{はら}わない: [払]{はら}わせて."},
      {v:"はらいさせて", why:"させる doesn’t attach to the ます stem. Godan verbs take the a-sound + せる: [払]{はら}わせる."},
      {v:"はらって", why:"[払]{はら}ってください asks Toby to pay. To ask to be allowed to pay yourself, use the causative: [払]{はら}わせてください."}
     ],
     why:"Causative て-form + ください asks to be allowed to do something: [払]{はら}う → [払]{はら}わせる → [払]{はら}わせてください, “please let me pay”."
    },
    {
     id:"e3u7-l2-x11",
     type:"type",
     q:"Yến talks about her childhood: “When I was a child, my mother made me practice the piano every day.” Type the causative-passive in hiragana, polite past: 「子どものころ、母に毎日ピアノを（　）。」 ([練習]{れんしゅう}する, practice)",
     answer:"れんしゅうさせられました",
     wrongs:[
      {v:"れんしゅうさせました", why:"That is the causative: Yến made someone else practice. She was the one made to practice, so add the passive: させられました."},
      {v:"れんしゅうされました", why:"される is the passive of する (“was practiced”). Being made to do something is させられる."},
      {v:"れんしゅうさされました", why:"The short form ～される is only for godan verbs. する always becomes させられる."}
     ],
     why:"する → させる (causative) → させられる (causative-passive): [練習]{れんしゅう}させられました, “was made to practice”. The person who made her do it takes に."
    }
   ],
   apply:{
    intro:"Use the causative about your own life. Keep the notes for yourself.",
    tasks:[
     {
      t:"What were you made to do, and allowed to do?",
      how:[
       "Think about your childhood, school or a job.",
       "Write three sentences about things you were made to do, with the causative-passive: 母に[野菜]{やさい}を食べさせられました。",
       "Write two sentences about things someone let you do, with ～させてくれました: [祖父]{そふ}は[私]{わたし}に車を[運転]{うんてん}させてくれました。",
       "Check each form against the tables: the causative first, then the passive."
      ],
      write:"Made to… Let me…"
     },
     {
      t:"Ask for permission politely",
      how:[
       "Think of three things you might need to ask a teacher, manager or host: leaving early, taking a day off, using something, explaining something.",
       "Write each request with ～させてください, then rewrite it more politely with ～させていただけませんか.",
       "Read them aloud. Choose which version you would use with whom."
      ],
      write:"1 … させてください → … させていただけませんか 2 …"
     },
     {
      t:"A causative table for eight verbs",
      how:[
       "Choose eight verbs: four godan (include one ending in す and one ending in う), two ichidan, する and [来]{く}る.",
       "Write the causative, the causative-passive, and the short form where one exists.",
       "Check them in a dictionary that lists verb forms. Jisho.org’s “Show inflections” table includes the causative and the long causative-passive."
      ],
      write:"[飲]{の}む・[飲]{の}ませる・[飲]{の}ませられる・[飲]{の}まされる …"
     }
    ],
    proof:"Five sentences about what you were made or allowed to do, three permission requests at two politeness levels, and a checked table of eight causative forms."
   },
   read:[
    {
     book:"taekim",
     where:"Special Expressions, “Causative and Passive Verbs”, sections “Causative Verbs”, “Causative-Passive Forms” and “A Shorter Alternative”",
     note:"Tae Kim also shows a rough, slangy short causative (～す) that textbooks usually skip; you don’t need it."
    },
    {
     book:"irodori",
     where:"Pre-Intermediate, Lessons 8 “May I sit next to you?” and 12 “I need an ambulance.”",
     note:"The causative (Causative ① and ② in the book), with audio."
    },
    {
     book:"irodori",
     where:"Pre-Intermediate, Lessons 13 “Congratulations on your marriage.” and 16 “I was able to take lots of good photos.”",
     note:"～させていただく (Lesson 13) and the causative-passive (Lesson 16)."
    }
   ]
  },
  {
   id:"e3u7-l3",
   title:"Looks like, I hear, it seems: そう, よう, みたい and らしい",
   minutes:60,
   hook:{
    q:"You look out of the window at dark, heavy clouds. Nobody has told you anything about the weather. Which sentence fits?",
    options:["[雨]{あめ}が[降]{ふ}りそうです。", "[雨]{あめ}が[降]{ふ}るそうです。", "Both mean the same thing.", "Neither: you need a forecast to say anything."],
    answer:0,
    reveal:"**[雨]{あめ}が[降]{ふ}りそうです** (“It looks like rain”). [降]{ふ}りそう, built on the ます stem, describes what you can see: the clouds tell you rain is coming. [降]{ふ}るそう, built on the dictionary form, means “I hear it will rain”: someone told you, or you read a forecast. One small change of form tells the listener **how you know**. This lesson covers the four ways Japanese does this: ～そう, ～そうだ, ～ようだ・みたい and ～らしい."
   },
   goals:[
    "Say that something looks a certain way or is about to happen with ～そう, including よさそう and なさそう",
    "Pass on what you heard or read with ～そうだ, and name the source with によると",
    "Draw your own conclusions from clues with ～ようだ and ～みたい, and use both for “like”",
    "Use ～らしい for “apparently” and for “typical of”",
    "Choose the right pattern from a comparison table, and avoid the common form mistakes"
   ],
   learn:[
    {
     h:"How do you know?",
     body:[
      {
       lead:"Japanese often shows where a statement comes from: something you can see, something you were told, or something you worked out from clues. Four patterns do most of this work."
      },
      {
       fig:"<svg viewBox=\"0 0 340 300\"><defs><marker id=\"e3u7a4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Where does your information come from?</text><rect class=\"d-gold\" x=\"6\" y=\"34\" width=\"104\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"58\" y=\"56\" text-anchor=\"middle\">I can see it</text><text class=\"s\" x=\"58\" y=\"75\" text-anchor=\"middle\">looks, about to</text><rect class=\"d-lup\" x=\"118\" y=\"34\" width=\"104\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"170\" y=\"56\" text-anchor=\"middle\">I was told</text><text class=\"s\" x=\"170\" y=\"75\" text-anchor=\"middle\">or I read it</text><rect class=\"d-sage\" x=\"230\" y=\"34\" width=\"104\" height=\"52\" rx=\"8\" stroke-width=\"2\"/><text x=\"282\" y=\"56\" text-anchor=\"middle\">I worked it</text><text x=\"282\" y=\"75\" text-anchor=\"middle\">out from clues</text><path class=\"d-ink\" d=\"M58 90V118\" stroke-width=\"2\" marker-end=\"url(#e3u7a4)\"/><path class=\"d-ink\" d=\"M170 90V118\" stroke-width=\"2\" marker-end=\"url(#e3u7a4)\"/><path class=\"d-ink\" d=\"M282 90V118\" stroke-width=\"2\" marker-end=\"url(#e3u7a4)\"/><rect class=\"d-panel\" x=\"6\" y=\"122\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"58\" y=\"148\" text-anchor=\"middle\">stem + そう</text><text class=\"s\" x=\"58\" y=\"170\" text-anchor=\"middle\">ふりそう</text><text class=\"s\" x=\"58\" y=\"188\" text-anchor=\"middle\">おいしそう</text><rect class=\"d-panel\" x=\"118\" y=\"122\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"148\" text-anchor=\"middle\">plain + そうだ</text><text class=\"s\" x=\"170\" y=\"170\" text-anchor=\"middle\">ふるそうだ</text><text class=\"s\" x=\"170\" y=\"188\" text-anchor=\"middle\">(also らしい)</text><rect class=\"d-panel\" x=\"230\" y=\"122\" width=\"104\" height=\"80\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"282\" y=\"148\" text-anchor=\"middle\">ようだ</text><text x=\"282\" y=\"168\" text-anchor=\"middle\">みたい</text><text class=\"s\" x=\"282\" y=\"188\" text-anchor=\"middle\">(also らしい)</text><text class=\"s\" x=\"170\" y=\"232\" text-anchor=\"middle\">らしい sits between the last two:</text><text class=\"s\" x=\"170\" y=\"250\" text-anchor=\"middle\">a conclusion based on what you heard</text><text class=\"s\" x=\"170\" y=\"268\" text-anchor=\"middle\">or read, said with some distance.</text><text class=\"s\" x=\"170\" y=\"292\" text-anchor=\"middle\">Real use overlaps; the boxes are a guide.</text></svg>",
       alt:"Three sources of information, each with an arrow to its patterns. I can see it (looks, about to): stem + そう, as in ふりそう and おいしそう. I was told or I read it: plain form + そうだ, as in ふるそうだ, and also らしい. I worked it out from clues: ようだ and みたい, and also らしい. A note says らしい sits between the last two: a conclusion based on what you heard or read, said with some distance. Real use overlaps; the boxes are a guide.",
       cap:"Choose the pattern by how you know, not by how sure you are."
      },
      "The same sentence about rain can come in four flavors:",
      {
       table:[
        ["Japanese", "How you know", "English"],
        ["雨が[降]{ふ}りそうです。", "You can see the clouds.", "It looks like rain."],
        ["雨が[降]{ふ}るそうです。", "The forecast said so.", "I hear it’s going to rain."],
        ["雨が[降]{ふ}ったようです。", "The road is wet.", "It seems it rained."],
        ["雨が[降]{ふ}るらしいです。", "People are saying so.", "Apparently it’s going to rain."]
       ]
      },
      "The patterns overlap in real use, especially ようだ, みたい and らしい, and native speakers don’t always agree on the borders. The sections below give the core of each, which is all you need at N4."
     ]
    },
    {
     h:"～そう: it looks like…, it’s about to…",
     body:[
      "[[sou-appearance|Appearance ～そう]] attaches to a **stem**, not to a full word:",
      {
       table:[
        ["Word type", "Rule", "Examples"],
        ["Verb", "ます stem + そう", "[降]{ふ}ります → [降]{ふ}りそう\n[落]{お}ちます → [落]{お}ちそう"],
        ["い-adjective", "drop い + そう", "おいしい → おいしそう\n[高]{たか}い → 高そう"],
        ["な-adjective", "stem + そう", "[元気]{げんき} → [元気]{げんき}そう\n[便利]{べんり} → [便利]{べんり}そう"],
        ["Two irregulars", "さ is added", "いい → よさそう\nない → なさそう"],
        ["Negative adjective", "ない → なさそう", "高くない → 高くなさそう"]
       ]
      },
      "With **adjectives**, ～そう means “looks…, judging by its appearance”. You haven’t tasted the cake or asked Mariya how she feels; you are going by what you see.",
      {
       ex:"このケーキ、おいしそうですね。\nThis cake looks delicious.\n\nまりやさんは[今日]{きょう}、[元気]{げんき}そうです。\nMariya looks well today.\n\nこの[靴]{くつ}は高そうです。\nThese shoes look expensive.\n\nその[映画]{えいが}、よさそうですね。\nThat film looks good.",
       label:"Adjective + そう"
      },
      "With **verbs**, ～そう means “looks as if it is about to happen”: a prediction from the signs in front of you.",
      {
       ex:"雨が[降]{ふ}りそうです。\nIt looks like it’s going to rain.\n\nあ、[棚]{たな}から[箱]{はこ}が[落]{お}ちそうです！\nOh, that box is about to fall off the shelf!\n\n[今日]{きょう}は[仕事]{しごと}が[早]{はや}く[終]{お}わりそうです。\nIt looks like work will finish early today.",
       label:"Verb + そう"
      },
      "～そう works like a な-adjective. Before a noun it takes な, and before a verb it takes に: おいしそうなパン (bread that looks delicious), [子]{こ}どもたちが[楽]{たの}しそうに[遊]{あそ}んでいます (the children are playing happily, by the look of it).",
      {h:"Where そう doesn’t work"},
      {
       list:[
        "**Not with nouns.** [学生]{がくせい}そう is wrong. To say someone looks like a student, use みたい or よう (below): 学生みたいです.",
        "**Not for what you can plainly see.** If the flower in front of you is pretty or red, just say so: この[花]{はな}はきれいですね, [赤]{あか}いですね. きれいそう and [赤]{あか}そう usually sound odd here.",
        "**かわいそう is a different word.** It means “poor thing, pitiful”, not “looks cute”. To say a puppy looks cute, say かわいいですね."
       ]
      }
     ]
    },
    {
     h:"～そうだ: I hear that…",
     body:[
      "[[sou-hearsay|Hearsay ～そうだ]] passes on what someone told you or what you read. It attaches to the **plain form**, so the verb or adjective keeps its full shape:",
      {
       table:[
        ["Before そうです", "Example", "English"],
        ["verb", "雨が[降]{ふ}るそうです。\n雨が[降]{ふ}ったそうです。", "I hear it will rain.\nI hear it rained."],
        ["い-adjective", "あの[店]{みせ}は高いそうです。", "I hear that shop is expensive."],
        ["な-adjective + だ", "まりやさんは[元気]{げんき}だそうです。", "I hear Mariya is well."],
        ["noun + だ", "[明日]{あした}は休みだそうです。", "I hear tomorrow is a day off."]
       ]
      },
      "To name the source, start with **によると** (according to) or **の[話]{はなし}では** (from what … says):",
      {
       ex:"[天気予報]{てんきよほう}によると、[明日]{あした}は雨が[降]{ふ}るそうです。\nAccording to the forecast, it will rain tomorrow.\n\nチェスカさんの話では、あの[店]{みせ}のラーメンはとてもおいしいそうです。\nCheska says the ramen at that shop is very good.",
       label:"Naming the source"
      },
      {
       key:"Hearsay そうです never changes. Put the tense or the negative on the word before it: [降]{ふ}ったそうです (I hear it rained), [降]{ふ}らないそうです (I hear it won’t rain). [降]{ふ}るそうでした and [降]{ふ}るそうじゃありません are wrong."
      },
      "Appearance そう is different: it does change, like any な-adjective. 雨が[降]{ふ}りそうでした means “It looked like rain”.",
      {
       table:[
        ["Appearance (stem + そう)", "Hearsay (plain + そうだ)"],
        ["[降]{ふ}りそうです\nIt looks like rain.", "[降]{ふ}るそうです\nI hear it will rain."],
        ["おいしそうです\nIt looks delicious.", "おいしいそうです\nI hear it’s delicious."],
        ["[元気]{げんき}そうです\nShe looks well.", "[元気]{げんき}だそうです\nI hear she’s well."]
       ]
      },
      {
       tip:"Listen for the form before そう. A complete plain form ([降]{ふ}る, [降]{ふ}った), an adjective that keeps its い, or だ means hearsay. A shortened stem means appearance."
      }
     ]
    },
    {
     h:"～ようです and ～みたいです: it seems…",
     body:[
      "[[you-da|～ようです]] and [[mitai|～みたいです]] give **your own conclusion** from clues you notice: sounds, smells, how people behave, how your body feels. They mean almost the same thing; みたい is the conversational version, and ようです is a little more formal and the usual choice in writing.",
      {
       table:[
        ["Word type", "～ようです", "～みたいです"],
        ["verb", "[降]{ふ}った ようです", "[降]{ふ}った みたいです"],
        ["い-adjective", "高い ようです", "高い みたいです"],
        ["な-adjective", "[静]{しず}か**な** ようです", "[静]{しず}か みたいです"],
        ["noun", "学生**の** ようです", "学生 みたいです"]
       ]
      },
      {key:"よう needs な after a な-adjective and の after a noun. みたい attaches directly: [静]{しず}かみたい, 学生みたい."},
      {
       ex:"[道]{みち}がぬれています。[夜]{よる}、雨が[降]{ふ}ったようです。\nThe road is wet. It seems it rained in the night.\n\n[電気]{でんき}が[消]{き}えています。トビーさんはもう[帰]{かえ}ったみたいです。\nThe lights are off. It looks like Toby has gone home.\n\nのどが[痛]{いた}いです。かぜをひいたみたいです。\nMy throat hurts. I think I’ve caught a cold.",
       label:"Conclusions from clues"
      },
      "Both also mean **“like”**, for comparisons. Before a noun they become ような / みたいな, and before a verb or adjective ように / みたいに:",
      {
       ex:"[夢]{ゆめ}のようです。／[夢]{ゆめ}みたいです。\nIt’s like a dream.\n\n[雪]{ゆき}のような[白]{しろ}い[花]{はな}\n[雪]{ゆき}みたいな白い[花]{はな}\na flower as white as snow\n\nロドリゴさんは[歌手]{かしゅ}みたいに[上手]{じょうず}に[歌]{うた}います。\nRodrigo sings beautifully, like a professional singer.",
       label:"よう and みたい for “like”"
      },
      "In reports and academic writing you will see ～ようである, the written form of ～ようです, as a careful way to present a conclusion. The Academic Japanese track covers this as [[suiryou|[推量]{すいりょう}]] ({{hedging-japanese}})."
     ]
    },
    {
     h:"～らしい: apparently…; typical of…",
     body:[
      "[[rashii|～らしい]] attaches to the plain form; nouns and な-adjectives take it directly, with no だ: 学生らしい, [静]{しず}からしい. It conjugates like an い-adjective: らしくない, らしかった.",
      "**Meaning 1: apparently.** You are passing on a conclusion based on what you heard or read, without taking responsibility for it. It is often used for rumors and for news you can’t check:",
      {
       ex:"[来月]{らいげつ}、[駅前]{えきまえ}に[新]{あたら}しいカフェができるらしいです。\nApparently a new café is opening in front of the station next month.\n\nあおいさんは[今日]{きょう}、[来]{こ}ないらしいです。\nApparently Aoi isn’t coming today.",
       label:"らしい: apparently"
      },
      "Compare [来]{こ}ないそうです: with そうです you are reporting a message more directly, often from a source you could name. With らしい you are less committed: it’s what people say, or what seems to be the case from what you heard.",
      "**Meaning 2: typical of, a real…** After a noun, らしい can describe something that has the qualities you expect of it:",
      {
       ex:"[今日]{きょう}は[春]{はる}らしい天気ですね。\nIt’s real spring weather today.\n\nイエンさんが[遅]{おく}れるのは[珍]{めずら}しいですね。[今日]{きょう}はイエンさんらしくないです。\nIt’s unusual for Yến to be late. It’s not like her today.",
       label:"らしい: typical of"
      },
      "Sometimes both meanings are possible: 学生らしい can mean “apparently a student” or “student-like”. The context, and whether a noun follows, tells you which."
     ]
    },
    {
     h:"Choosing the right pattern",
     body:[
      {
       table:[
        ["Pattern", "Based on", "Attaches to", "Example"],
        ["～そう (appearance)", "what you see now; a prediction", "ます stem; adjective stem", "[降]{ふ}りそうです"],
        ["～そうだ (hearsay)", "what you were told or read", "plain form; noun / な-adj + だ", "[降]{ふ}るそうです"],
        ["～ようだ", "your conclusion from clues; “like”", "plain form; な-adj + な; noun + の", "[降]{ふ}ったようです"],
        ["～みたい", "the same as ようだ, in conversation", "plain form; noun / な-adj directly", "[降]{ふ}ったみたいです"],
        ["～らしい", "what you heard or read suggests; “typical of”", "plain form; noun / な-adj directly", "[降]{ふ}るらしいです"]
       ]
      },
      {h:"Common mistakes"},
      {
       table:[
        ["✗ Mistake", "✓ Correct", "Why"],
        ["(looking at a cake) おいしいそうです", "おいしそうです", "After a full い-adjective, そうです means “I hear”. Appearance drops the い."],
        ["[元気]{げんき}なそうです", "[元気]{げんき}そうです (looks)\n[元気]{げんき}だそうです (I hear)", "Appearance takes the bare stem; hearsay takes だ. な is never used before そう."],
        ["学生そうです", "学生みたいです\n学生のようです", "Appearance そう doesn’t attach to nouns."],
        ["学生ようです", "学生のようです", "よう needs の after a noun."],
        ["[静]{しず}かなみたいです", "[静]{しず}かみたいです", "みたい attaches directly to な-adjectives."],
        ["雨が[降]{ふ}るそうでした。", "雨が[降]{ふ}ったそうです。", "Hearsay そうです doesn’t change; put the past on the verb."],
        ["(about a puppy) かわいそうですね", "かわいいですね", "かわいそう means “poor thing”."]
       ]
      },
      "The full comparison, with notes for later levels, is in {{appearance-sou-you-rashii}}.",
      {terms:["sou-appearance", "sou-hearsay", "you-da", "mitai", "rashii"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l3-x1",
     type:"mcq",
     q:"You see a beautiful cake in a shop window. How do you say “It looks delicious”?",
     options:[
      {t:"おいしそうですね。", ok:true, why:"Right. Appearance そう attaches to the adjective stem: おいし + そう."},
      {t:"おいしいそうですね。", why:"After the full adjective, そうです means “I hear”: “I hear it’s delicious”."},
      {t:"おいしさそうですね。", why:"Only いい and ない add さ (よさそう, なさそう). For other adjectives, drop the い."},
      {t:"おいしなそうですね。", why:"There is no な before そう. Drop the い and add そう: おいしそう."}
     ]
    },
    {
     id:"e3u7-l3-x2",
     type:"match",
     q:"Match each word to its appearance form (“looks…”).",
     pairs:[
      ["いい (good)", "よさそう", "いい is irregular: よさそう."],
      ["ない (there isn’t)", "なさそう", "ない adds さ too: なさそう."],
      ["[元気]{げんき} (well)", "[元気]{げんき}そう", "A な-adjective: the stem + そう, with no な."],
      ["高い (expensive)", "高そう", "An い-adjective: drop い, add そう."],
      ["高くない (not expensive)", "高くなさそう", "A negative adjective: ない → なさそう."],
      ["[降]{ふ}る (fall, of rain)", "[降]{ふ}りそう", "A verb: the ます stem [降]{ふ}り + そう."]
     ]
    },
    {
     id:"e3u7-l3-x3",
     type:"sort",
     q:"Appearance or hearsay? Sort each sentence by its meaning.",
     buckets:["It looks… (appearance)", "I hear… (hearsay)"],
     items:[
      {t:"雨が[降]{ふ}りそうです。", b:0, why:"The ます stem [降]{ふ}り + そう: it looks like rain."},
      {t:"雨が[降]{ふ}るそうです。", b:1, why:"The dictionary form [降]{ふ}る + そうです: I hear it will rain."},
      {t:"高そうな[時計]{とけい}ですね。", b:0, why:"高 + そう: an expensive-looking watch."},
      {t:"あの[店]{みせ}は高いそうです。", b:1, why:"The full adjective 高い + そうです: I hear that shop is expensive."},
      {t:"まりやさんは[元気]{げんき}そうです。", b:0, why:"The bare stem [元気]{げんき} + そう: Mariya looks well."},
      {t:"まりやさんは[元気]{げんき}だそうです。", b:1, why:"[元気]{げんき}だ + そうです: I hear Mariya is well."},
      {t:"その[本]{ほん}、よさそうですね。", b:0, why:"いい → よさそう: that book looks good."},
      {t:"[来週]{らいしゅう}は[休]{やす}みだそうです。", b:1, why:"Noun + だ + そうです: I hear next week is a holiday."}
     ]
    },
    {
     id:"e3u7-l3-x4",
     type:"mcq",
     q:"Aoi told you that her summer internship is busy. How do you pass this on to another friend?",
     options:[
      {t:"あおいさんの[新]{あたら}しい[仕事]{しごと}は[忙]{いそが}しいそうです。", ok:true, why:"Right. You are reporting what Aoi told you: the full adjective + そうです."},
      {t:"あおいさんの[新]{あたら}しい[仕事]{しごと}は[忙]{いそが}しそうです。", why:"This describes how the job looks to you. You haven’t seen it; Aoi told you."},
      {t:"あおいさんの[新]{あたら}しい[仕事]{しごと}は[忙]{いそが}しいそうでした。", why:"Hearsay そうです doesn’t change for tense."},
      {t:"あおいさんの[新]{あたら}しい[仕事]{しごと}は[忙]{いそが}しだそうです。", why:"い-adjectives don’t take だ: [忙]{いそが}しいそうです."}
     ]
    },
    {
     id:"e3u7-l3-x5",
     type:"mcq",
     q:"This morning the road outside is wet, though it was dry last night. Nobody has told you anything. Complete the sentence: [夜]{よる}の[間]{あいだ}に雨が（　）。",
     options:[
      {t:"[降]{ふ}ったようです", ok:true, why:"Right. You are drawing your own conclusion from a clue (the wet road) about something that already happened."},
      {t:"[降]{ふ}りそうです", why:"Appearance そう on a verb predicts what is about to happen. The rain has already fallen."},
      {t:"[降]{ふ}るそうです", why:"Hearsay, and about the future. Nobody told you, and the rain is in the past."},
      {t:"[降]{ふ}ったそうです", why:"Hearsay: it needs someone who told you. You worked it out yourself."}
     ]
    },
    {
     id:"e3u7-l3-x6",
     type:"mcq",
     q:"What does 「[今日]{きょう}は[春]{はる}らしい天気ですね。」 mean?",
     options:[
      {t:"It’s real spring weather today.", ok:true, why:"Right. Noun + らしい before a noun means “typical of”: weather that is just what spring should be."},
      {t:"It looks like spring will come soon.", why:"That would be [春]{はる}が[来]{き}そうです or [春]{はる}が[近]{ちか}いようです."},
      {t:"I hear the weather will be spring-like today.", why:"Hearsay would be ～そうです. らしい before a noun, as here, describes a typical quality."},
      {t:"Today’s weather doesn’t feel like spring.", why:"That would be [春]{はる}らしくない, the negative."}
     ]
    },
    {
     id:"e3u7-l3-x7",
     type:"spot",
     q:"Aoi wrote a message to her team at her internship. Tap each form that is **wrong**.",
     ask:"is wrong",
     parts:[
      "[天気予報]{てんきよほう}によると、[明日]{あした}は雨が",
      {t:"[降]{ふ}るそうです", flag:false, why:"Correct: hearsay from the forecast, plain form + そうです."},
      "。[今日]{きょう}の[部長]{ぶちょう}は",
      {t:"[元気]{げんき}なそうでした", flag:true, why:"Wrong. Appearance そう takes the bare stem: [元気]{げんき}そうでした (she looked well)."},
      "。[駅前]{えきまえ}の[新]{あたら}しい[店]{みせ}は",
      {t:"[安]{やす}くておいしいらしいです", flag:false, why:"Correct: らしい after the plain form, “apparently cheap and good”."},
      "。[会議室]{かいぎしつ}の電気が[消]{き}えているので、[会議]{かいぎ}はもう",
      {t:"[終]{お}わったみたいです", flag:false, why:"Correct: a conclusion from a clue, plain past + みたいです."},
      "。[隣]{となり}の[部屋]{へや}は[今日]{きょう}、",
      {t:"[静]{しず}かなみたいです", flag:true, why:"Wrong. みたい attaches directly to a な-adjective: [静]{しず}かみたいです (or [静]{しず}かなようです)."},
      "。[受付]{うけつけ}の[新]{あたら}しい[人]{ひと}は",
      {t:"学生そうです", flag:true, why:"Wrong. Appearance そう doesn’t attach to nouns: 学生みたいです or 学生のようです."},
      "。"
     ]
    },
    {
     id:"e3u7-l3-x8",
     type:"mcq",
     q:"In a formal written report, which ending is the usual choice for “it seems that…”?",
     options:[
      {t:"～ようです (or ～ようである)", ok:true, why:"Right. ようです is the more formal of the pair and the usual choice in writing."},
      {t:"～みたいです", why:"みたい means the same, but it belongs to conversation."},
      {t:"～そうです after the ます stem", why:"This is appearance そう, “it looks as if…”, which describes what you see, not a conclusion in a report."},
      {t:"～っぽいです", why:"っぽい is casual slang for “-ish, seems like”, not for reports."}
     ]
    },
    {
     id:"e3u7-l3-x9",
     type:"type",
     q:"Rodrigo sees Fumiko carrying a big box: “That box looks heavy. Shall I carry it?” Type the appearance form in hiragana: 「ふみこさん、その[箱]{はこ}、（　）ですね。[持]{も}ちましょうか。」 ([重]{おも}い, heavy)",
     answer:"おもそう",
     wrongs:[
      {v:"おもいそう", why:"For appearance, drop the い: [重]{おも}そう. With the い, [重]{おも}いそうです is hearsay: “I hear it’s heavy”."},
      {v:"おもさそう", why:"Only いい and ない add さ (よさそう, なさそう). Other い-adjectives just drop い: [重]{おも}そう."}
     ],
     why:"Appearance: い-adjective minus い + そう. Rodrigo is judging by what he sees, so [重]{おも}そうですね."
    },
    {
     id:"e3u7-l3-x10",
     type:"type",
     q:"Kaito and Mariya walk past a new café. Kaito says: “This place looks good. Let’s try it.” Type the appearance form of いい in hiragana: 「この[店]{みせ}、（　）だね。[入]{はい}ってみよう。」",
     answer:"よさそう",
     wrongs:[
      {v:"いいそう", why:"いいそうだ is hearsay: “I hear it’s good”. For appearance, いい changes to よ and adds さ: よさそう."},
      {v:"よそう", why:"いい is irregular: よ + さ + そう. Without さ, よそう is a different word ([予想]{よそう}, a guess or forecast)."}
     ],
     why:"いい → よさそう, one of the two irregulars (with ない → なさそう). Kaito is going by how the café looks."
    },
    {
     id:"e3u7-l3-x11",
     type:"type",
     q:"Aoi told you about a new café. You pass the news on: “According to Aoi, a new café is opening in front of the station.” Type the missing verb in hiragana: 「あおいさんの話では、[駅前]{えきまえ}に[新]{あたら}しいカフェが（　）そうです。」 (できる, open, be built)",
     answer:["できる", "できた"],
     wrongs:[
      {v:"でき", why:"The ます stem + そう is appearance: できそう means “it looks as if it will be possible”. For what you heard, use the plain form: できるそうです."},
      {v:"できるだ", why:"Hearsay そうだ follows the plain form directly. Only nouns and な-adjectives take だ before it."}
     ],
     why:"Hearsay: plain form + そうです. ～の話では (from what … says) names the source. できるそうです is “is opening”; できたそうです is “has opened”."
    }
   ],
   apply:{
    intro:"Notice how you know things, and say it in Japanese. Keep the notes for yourself.",
    tasks:[
     {
      t:"Describe three photos",
      how:[
       "Choose three photos: food, a person (with their permission, or a stranger in a public photo), and the sky or a street.",
       "For each, write a sentence with appearance そう: おいしそう, [楽]{たの}しそう, 雨が[降]{ふ}りそう…",
       "Add one sentence with よさそう or なさそう."
      ],
      write:"Photo 1… Photo 2… Photo 3…"
     },
     {
      t:"Pass on the news",
      how:[
       "Read a weather forecast, a news headline or a message from a friend (in any language).",
       "Write three sentences in Japanese that pass it on, with ～によると、～そうです.",
       "Check the form before そうです: the full plain form, with だ after nouns and な-adjectives."
      ],
      write:"[天気予報]{てんきよほう}によると、… そうです。…"
     },
     {
      t:"Be a detective at home",
      how:[
       "Look around your home, street or workplace for clues: a wet umbrella, a light left on, an empty plate.",
       "Write three conclusions with ～ようです and say each one again with ～みたいです.",
       "Check the forms for nouns (の / nothing) and な-adjectives (な / nothing)."
      ],
      write:"Clue… → … ようです / … みたいです"
     }
    ],
    proof:"Sentences about three photos with ～そう, three pieces of news passed on with ～そうです, and three conclusions from clues with ～ようです and ～みたいです."
   },
   read:[
    {
     book:"taekim",
     where:"Special Expressions, “Similarity or hearsay”: the sections on よう, みたい, ～そう, ～そうだ and ～らしい",
     note:"The page also covers っぽい, a slangy “-ish” you will hear in casual speech."
    },
    {
     book:"irodori",
     where:"Elementary 1, Lessons 12 “Your bento looks delicious.”, 13 “It will probably end in about ten minutes.” and 18 “How about giving something as a gift?”",
     note:"Appearance そう with adjectives (12) and verbs (13), and hearsay そうです (18), with audio."
    },
    {
     book:"irodori",
     where:"Pre-Intermediate, Lessons 4 “It seems like the air conditioner is broken…”, 12 “I need an ambulance.” and 13 “Congratulations on your marriage.”",
     note:"～みたいだ (4), ～ようだ (12) and ～らしい (13), with audio."
    }
   ]
  },
  {
   id:"e3u7-l4",
   title:"Doing and happening: transitive and intransitive pairs, and ～てある",
   minutes:60,
   hook:{
    q:"You come home to an empty apartment and find the window open. Which sentence describes the window and tells you that someone opened it **on purpose**, for example to air the room?",
    options:["[窓]{まど}が[開]{あ}いています。", "[窓]{まど}が[開]{あ}けてあります。", "[窓]{まど}を[開]{あ}けています。", "[窓]{まど}が[開]{あ}きます。"],
    answer:1,
    reveal:"**[窓]{まど}が[開]{あ}けてあります.** Japanese has two verbs for opening: [開]{あ}ける, when someone opens something, and [開]{あ}く, when something opens. [開]{あ}いています only describes the state: the window is open, for whatever reason. [開]{あ}けてあります adds that someone opened it deliberately, and it has stayed that way. [窓]{まど}を[開]{あ}けています is about a person, not the window: someone is opening it, or is keeping it open. This lesson teaches the verb pairs and these three ways of describing a scene."
   },
   goals:[
    "Explain the difference between transitive verbs (someone does something) and intransitive verbs (something happens)",
    "Recognise and use about twenty common pairs such as [開]{あ}ける・[開]{あ}く and [消]{け}す・[消]{き}える, with their readings",
    "Use を with transitive verbs and が with intransitive verbs, and know why [部屋]{へや}を[出]{で}る is not an exception",
    "Describe states with intransitive verb + ている",
    "Use ～てある for the result of a deliberate action, and choose between ～てある, ～ている and ～ておく"
   ],
   learn:[
    {
     h:"Two verbs for one event",
     body:[
      {lead:"In English, “open” works both ways: “I opened the window” and “the window opened”. Japanese usually uses two different verbs."},
      {
       ex:"[私]{わたし}は[窓]{まど}を[開]{あ}けました。\nI opened the window.\n\n[風]{かぜ}で[窓]{まど}が[開]{あ}きました。\nThe window opened in the wind.",
       label:"One event, two verbs"
      },
      "[開]{あ}ける is a [[transitive-verb|transitive verb]]: someone does something **to** something, and that thing takes を. [開]{あ}く is an [[intransitive-verb|intransitive verb]]: something **happens**, with no doer in the sentence, and the thing that changes takes が. ([風]{かぜ}で means “because of the wind”.)",
      {
       fig:"<svg viewBox=\"0 0 340 250\"><defs><marker id=\"e3u7a5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Who does it, or what happens?</text><rect class=\"d-panel\" x=\"6\" y=\"32\" width=\"328\" height=\"92\" rx=\"10\" stroke-width=\"1.5\"/><rect class=\"d-gold\" x=\"16\" y=\"44\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"72\" y=\"69\" text-anchor=\"middle\">わたしが</text><path class=\"d-ink\" d=\"M132 64H206\" stroke-width=\"2\" marker-end=\"url(#e3u7a5)\"/><rect class=\"d-lup\" x=\"212\" y=\"44\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"268\" y=\"69\" text-anchor=\"middle\">まどを</text><text class=\"s\" x=\"170\" y=\"110\" text-anchor=\"middle\">あけました: someone acts (transitive)</text><rect class=\"d-panel\" x=\"6\" y=\"136\" width=\"328\" height=\"92\" rx=\"10\" stroke-width=\"1.5\"/><rect class=\"d-lup\" x=\"16\" y=\"148\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"72\" y=\"173\" text-anchor=\"middle\">まどが</text><path class=\"d-ink\" d=\"M132 168H206\" stroke-width=\"2\" marker-end=\"url(#e3u7a5)\"/><rect class=\"d-sage\" x=\"212\" y=\"148\" width=\"112\" height=\"40\" rx=\"8\" stroke-width=\"2\"/><text x=\"268\" y=\"173\" text-anchor=\"middle\">あきました</text><text class=\"s\" x=\"170\" y=\"214\" text-anchor=\"middle\">it happens, no doer (intransitive)</text><text class=\"s\" x=\"170\" y=\"244\" text-anchor=\"middle\">Same kanji 開, different ending and particle.</text></svg>",
       alt:"Top panel: わたしが with an arrow to まどを, labeled あけました: someone acts (transitive). Bottom panel: まどが with an arrow to あきました, labeled it happens, no doer (intransitive). A note says: same kanji 開, different ending and particle.",
       cap:"A transitive verb has a doer and an object with を; an intransitive verb describes a change, with the thing marked by が."
      },
      "Most pairs share a kanji and differ in their endings. Learning them as pairs is the key to this lesson."
     ]
    },
    {
     h:"Common pairs",
     body:[
      "Here are the pairs you need most at N4, grouped by the pattern of their endings. Watch the readings: a few change more than the ending.",
      {
       table:[
        ["Transitive (を)", "Intransitive (が)", "Meaning"],
        ["[閉]{し}める", "[閉]{し}まる", "close"],
        ["[始]{はじ}める", "[始]{はじ}まる", "begin, start"],
        ["[止]{と}める", "[止]{と}まる", "stop"],
        ["[決]{き}める", "[決]{き}まる", "decide; be decided"],
        ["[集]{あつ}める", "[集]{あつ}まる", "collect; gather"],
        ["[変]{か}える", "[変]{か}わる", "change"],
        ["[見]{み}つける", "見つかる", "find; be found"]
       ]
      },
      "These all follow one pattern: the transitive verb ends in -eru and the intransitive verb in -aru. The pairs below follow other patterns:",
      {
       table:[
        ["Transitive (を)", "Intransitive (が)", "Meaning"],
        ["[開]{あ}ける", "[開]{あ}く", "open"],
        ["つける", "つく", "switch on (a light); come on"],
        ["[並]{なら}べる", "[並]{なら}ぶ", "line up"],
        ["[届]{とど}ける", "[届]{とど}く", "deliver; arrive"],
        ["[消]{け}す", "[消]{き}える", "switch off; go out (a light, a fire)"],
        ["[出]{だ}す", "[出]{で}る", "take out, send; come out, leave"],
        ["[壊]{こわ}す", "[壊]{こわ}れる", "break"],
        ["[汚]{よご}す", "[汚]{よご}れる", "make dirty; get dirty"],
        ["[割]{わ}る", "[割]{わ}れる", "break (glass, plates)"],
        ["[落]{お}とす", "[落]{お}ちる", "drop; fall"],
        ["[起]{お}こす", "[起]{お}きる", "wake (someone) up; wake up"],
        ["[直]{なお}す", "[直]{なお}る", "repair; be repaired"],
        ["[戻]{もど}す", "[戻]{もど}る", "put back; go back"],
        ["[入]{い}れる", "[入]{はい}る", "put in; enter"]
       ]
      },
      {
       warn:"Some readings change: [消]{け}す but [消]{き}える, [出]{だ}す but [出]{で}る, [入]{い}れる but [入]{はい}る. The kanji alone won’t tell you; learn each verb with its reading."
      },
      "The endings show tendencies, not rules you can apply blindly. Verbs in -aru ([閉]{し}まる, [始]{はじ}まる) are almost always intransitive (a few, such as [預]{あず}かる “look after” and [教]{おそ}わる “be taught”, take を), and verbs in ～す are very often transitive. Other endings go either way: [変]{か}える is transitive but [消]{き}える is intransitive; [入]{い}れる is transitive but [壊]{こわ}れる is intransitive. So you can’t always guess the partner: learn each new verb with its pair."
     ]
    },
    {
     h:"を with transitive verbs, が with intransitive verbs",
     body:[
      "The particle follows the verb type. With a transitive verb, the thing acted on takes を and there is a doer, stated or not. With an intransitive verb, the thing that changes takes が.",
      {
       table:[
        ["Transitive", "Intransitive"],
        ["電気をつけます。\nI turn the light on.", "電気がつきます。\nThe light comes on."],
        ["[先生]{せんせい}が[授業]{じゅぎょう}を[始]{はじ}めます。\nThe teacher starts the class.", "[授業]{じゅぎょう}が[始]{はじ}まります。\nThe class starts."],
        ["[運転手]{うんてんしゅ}がバスのドアを[閉]{し}めます。\nThe driver closes the bus doors.", "ドアが[閉]{し}まります。ご[注意]{ちゅうい}ください。\nThe doors are closing. Please be careful."]
       ]
      },
      "The last example is an announcement you hear on buses and trains in Japan. Notices and announcements often use intransitive verbs, because what matters is the event, not who causes it.",
      {h:"What about [部屋]{へや}を[出]{で}る?"},
      "出る is intransitive, yet you say [部屋]{へや}を出る (leave the room) and [道]{みち}を[歩]{ある}く (walk along the road). Here を marks the **place** you move out of or through, not an object that changes. This use of を comes with verbs of movement, so it isn’t an exception to the pairs.",
      {h:"Who broke the plate?"},
      "The choice between the two verbs can matter socially. お[皿]{さら}が[割]{わ}れました (“the plate broke”) describes the event. お[皿]{さら}を[割]{わ}ってしまいました (“I broke the plate”) says who did it. When you are apologizing for something you did, use the transitive verb: すみません、お[皿]{さら}を[割]{わ}ってしまいました。 With only the intransitive version, it can sound as if you are avoiding responsibility. (You met [[te-shimau|～てしまう]] in Unit 6.)"
     ]
    },
    {
     h:"States: intransitive verb + ている",
     body:[
      "In Unit 3 you learned that [[te-iru|～ている]] can describe a state that continues after a change. Intransitive verbs are where you use this most: the change happened, and the result is still there.",
      {
       ex:"[窓]{まど}が[開]{あ}いています。\nThe window is open.\n\n電気がついています。\nThe light is on.\n\n[道]{みち}に[財布]{さいふ}が[落]{お}ちています。\nThere’s a wallet lying on the road.\n\nこの[時計]{とけい}は[壊]{こわ}れています。\nThis clock is broken.",
       label:"Intransitive + ている: a state"
      },
      "English uses an adjective (“open”, “on”, “broken”), but Japanese uses the verb: [落]{お}ちています is literally “has fallen and is there”.",
      "With a **transitive** verb, ～ている describes what a person is doing: [窓]{まど}を[開]{あ}けています means someone **is opening** the window, or (with a quick action like this) is keeping it open, as in [暑]{あつ}いので、[窓]{まど}を[開]{あ}けています. So [窓]{まど}が[開]{あ}いています and [窓]{まど}を[開]{あ}けています describe quite different scenes."
     ]
    },
    {
     h:"～てある: done on purpose, and still that way",
     body:[
      {
       lead:"[[te-aru|～てある]] is the て-form of a **transitive** verb + ある. It describes a state that is the result of someone’s deliberate action, usually done for a reason. The thing acted on takes が (or は), and the doer is not mentioned."
      },
      {
       ex:"[窓]{まど}が[開]{あ}けてあります。\nThe window has been opened. (Someone opened it, perhaps to air the room.)\n\n[机]{つくえ}の[上]{うえ}に[花]{はな}が[飾]{かざ}ってあります。\nFlowers have been put on the desk as a decoration.\n\n[黒板]{こくばん}に[名前]{なまえ}が[書]{か}いてあります。\nA name is written on the blackboard.\n\nビールが[冷]{ひ}やしてあります。\nThe beer has been chilled. (It’s ready for you.)\n\nホテルはもう[予約]{よやく}してあります。\nThe hotel is already booked.",
       label:"～てあります"
      },
      "A very useful question for signs and notices: ここに[何]{なん}と書いてありますか (What does it say here? Literally: what has been written here?).",
      {
       table:[
        ["Sentence", "What it tells you"],
        ["[窓]{まど}が[開]{あ}いています。", "The window is open. Nothing about why."],
        ["[窓]{まど}が[開]{あ}けてあります。", "Someone opened it on purpose, and it is still open."],
        ["[窓]{まど}を[開]{あ}けています。", "About a person: someone is opening it, or keeps it open."]
       ]
      },
      {
       fig:"<svg viewBox=\"0 0 340 318\"><defs><marker id=\"e3u7a6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Describing the open window</text><rect class=\"d-panel\" x=\"40\" y=\"32\" width=\"260\" height=\"40\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"57\" text-anchor=\"middle\">Is someone doing it right now?</text><path class=\"d-ink\" d=\"M120 74L84 100\" stroke-width=\"2\" marker-end=\"url(#e3u7a6)\"/><path class=\"d-ink\" d=\"M220 74L256 100\" stroke-width=\"2\" marker-end=\"url(#e3u7a6)\"/><text class=\"s\" x=\"92\" y=\"88\" text-anchor=\"end\">yes</text><text class=\"s\" x=\"250\" y=\"88\">no</text><rect class=\"d-gold\" x=\"8\" y=\"104\" width=\"150\" height=\"56\" rx=\"8\" stroke-width=\"2\"/><text x=\"83\" y=\"128\" text-anchor=\"middle\">まどを</text><text x=\"83\" y=\"148\" text-anchor=\"middle\">あけています</text><rect class=\"d-panel\" x=\"182\" y=\"104\" width=\"150\" height=\"56\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"257\" y=\"128\" text-anchor=\"middle\">Done on purpose,</text><text x=\"257\" y=\"148\" text-anchor=\"middle\">and you say so?</text><path class=\"d-ink\" d=\"M226 162L130 202\" stroke-width=\"2\" marker-end=\"url(#e3u7a6)\"/><path class=\"d-ink\" d=\"M270 162V202\" stroke-width=\"2\" marker-end=\"url(#e3u7a6)\"/><text class=\"s\" x=\"168\" y=\"176\" text-anchor=\"end\">yes</text><text class=\"s\" x=\"280\" y=\"186\">no</text><rect class=\"d-lup\" x=\"8\" y=\"206\" width=\"150\" height=\"56\" rx=\"8\" stroke-width=\"2\"/><text x=\"83\" y=\"230\" text-anchor=\"middle\">まどが</text><text x=\"83\" y=\"250\" text-anchor=\"middle\">あけてあります</text><rect class=\"d-sage\" x=\"182\" y=\"206\" width=\"150\" height=\"56\" rx=\"8\" stroke-width=\"2\"/><text x=\"257\" y=\"230\" text-anchor=\"middle\">まどが</text><text x=\"257\" y=\"250\" text-anchor=\"middle\">あいています</text><text class=\"s\" x=\"170\" y=\"290\" text-anchor=\"middle\">てある: transitive verbs only (あける).</text><text class=\"s\" x=\"170\" y=\"310\" text-anchor=\"middle\">A state with ている: intransitive (あく).</text></svg>",
       alt:"A decision chart. Is someone doing it right now? Yes: まどを あけています. No: done on purpose, and you want to say so? Yes: まどが あけてあります. No: まどが あいています. Notes: てある goes with transitive verbs only (あける); a state with ている uses the intransitive verb (あく).",
       cap:"Three ways to describe one window, depending on what you want to say."
      },
      {h:"～てある and ～ておく"},
      "In Unit 6 you met [[te-oku|～ておく]], “do something in advance”. The two fit together: ～ておく describes the action from the doer’s side, and ～てある describes the result that is left.",
      {
       ex:"[窓]{まど}を[開]{あ}けておきました。\nI opened the window (in advance, for a reason).\n\n→ だから、[窓]{まど}が[開]{あ}けてあります。\nSo the window has been opened.",
       label:"ておく → てある"
      },
      "You will sometimes hear を with ～てある, when the speaker is talking about their own preparations (ホテルを[予約]{よやく}してあります). At this level, use が or は, which is what textbooks teach first."
     ]
    },
    {
     h:"Common mistakes",
     body:[
      {
       table:[
        ["✗ Mistake", "✓ Correct", "Why"],
        ["[窓]{まど}を[開]{あ}きました。", "[窓]{まど}を[開]{あ}けました。\n[窓]{まど}が[開]{あ}きました。", "[開]{あ}く is intransitive and can’t take an object with を."],
        ["[授業]{じゅぎょう}を[始]{はじ}まります。", "[授業]{じゅぎょう}が[始]{はじ}まります。", "[始]{はじ}まる is intransitive: the class takes が."],
        ["電気が[消]{け}しています。", "電気が[消]{き}えています。", "For a state (the light is off), use the intransitive verb + ている."],
        ["[窓]{まど}が[開]{あ}けています。", "[窓]{まど}が[開]{あ}いています。\n[窓]{まど}が[開]{あ}けてあります。", "[開]{あ}けている with が would mean the window is opening something."],
        ["[窓]{まど}が[開]{あ}いてあります。", "[窓]{まど}が[開]{あ}けてあります。", "～てある needs a transitive verb."],
        ["[入]{はい}れる (put in)", "[入]{い}れる", "“Put in” is read いれる. はいれる is the potential of [入]{はい}る: “can enter”."]
       ]
      },
      "A good habit: when you learn a new verb, ask “does someone do this to something, or does it just happen?”, and learn its partner at the same time. Dictionaries mark this: Jisho.org, for example, labels verbs “Transitive verb” or “Intransitive verb”.",
      "The full list of pairs, with more patterns, is in {{transitive-intransitive}}.",
      {terms:["transitive-verb", "intransitive-verb", "te-aru"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l4-x1",
     type:"sort",
     q:"Sort these verbs: transitive (someone does it to something, を) or intransitive (it happens, が)?",
     buckets:["Transitive (を)", "Intransitive (が)"],
     items:[
      {t:"[開]{あ}ける", b:0, why:"[窓]{まど}を[開]{あ}ける: someone opens something."},
      {t:"[開]{あ}く", b:1, why:"[窓]{まど}が[開]{あ}く: the window opens."},
      {t:"[消]{け}す", b:0, why:"[電気]{でんき}を[消]{け}す: someone switches the light off."},
      {t:"[消]{き}える", b:1, why:"電気が[消]{き}える: the light goes out."},
      {t:"[始]{はじ}める", b:0, why:"[授業]{じゅぎょう}を[始]{はじ}める: someone starts the class."},
      {t:"[始]{はじ}まる", b:1, why:"[授業]{じゅぎょう}が[始]{はじ}まる: the class starts."},
      {t:"[落]{お}とす", b:0, why:"[財布]{さいふ}を[落]{お}とす: someone drops a wallet."},
      {t:"[落]{お}ちる", b:1, why:"[財布]{さいふ}が[落]{お}ちる: the wallet falls."}
     ]
    },
    {
     id:"e3u7-l4-x2",
     type:"match",
     q:"Match each transitive verb to its intransitive partner.",
     pairs:[
      ["[閉]{し}める (close something)", "[閉]{し}まる", "-eru / -aru: [閉]{し}める・[閉]{し}まる."],
      ["[出]{だ}す (take out)", "[出]{で}る", "The reading changes: だす・でる."],
      ["[壊]{こわ}す (break something)", "[壊]{こわ}れる", "～す / ～れる: [壊]{こわ}す・[壊]{こわ}れる."],
      ["[入]{い}れる (put in)", "[入]{はい}る", "The reading changes: いれる・はいる."],
      ["[起]{お}こす (wake someone up)", "[起]{お}きる", "-osu / -iru: [起]{お}こす・[起]{お}きる."],
      ["見つける (find)", "見つかる", "-eru / -aru: 見つける・見つかる."]
     ]
    },
    {
     id:"e3u7-l4-x3",
     type:"mcq",
     q:"Choose the particle: [授業]{じゅぎょう}（　）[九時]{くじ}に[始]{はじ}まります。",
     options:[
      {t:"が", ok:true, why:"Right. [始]{はじ}まる is intransitive: the class is what starts, and it takes が."},
      {t:"を", why:"を goes with the transitive [始]{はじ}める: 先生が[授業]{じゅぎょう}を[始]{はじ}めます."},
      {t:"で", why:"で marks a place or a means. The class is what starts, not where."},
      {t:"へ", why:"へ marks a direction of movement."}
     ]
    },
    {
     id:"e3u7-l4-x4",
     type:"mcq",
     q:"You dropped and broke a friend’s cup. Which sentence takes responsibility for it?",
     options:[
      {t:"すみません、カップを[割]{わ}ってしまいました。", ok:true, why:"Right. The transitive [割]{わ}る with を says that you broke it, and ～てしまう adds regret."},
      {
       t:"すみません、カップが[割]{わ}れてしまいました。",
       why:"This is correct Japanese, but the intransitive describes the cup breaking, as if by itself. It can sound like avoiding responsibility."
      },
      {t:"すみません、カップを[割]{わ}れました。", why:"[割]{わ}れる is intransitive, so it can’t take an object with を."},
      {t:"すみません、カップが[割]{わ}ってありました。", why:"～てある describes something done on purpose and left that way, which is the opposite of an accident."}
     ]
    },
    {
     id:"e3u7-l4-x5",
     type:"mcq",
     q:"You want to say that the window is open (right now). Which sentence says that?",
     options:[
      {t:"[窓]{まど}が[開]{あ}いています。", ok:true, why:"Right. Intransitive [開]{あ}く + ている describes the state after the change: the window is open."},
      {
       t:"[窓]{まど}を[開]{あ}けています。",
       why:"Transitive + ている is about a person: someone is opening the window, or keeping it open. It doesn’t describe the window’s own state."
      },
      {t:"[窓]{まど}が[開]{あ}きました。", why:"This reports the change itself, “the window opened”, rather than the state now."},
      {t:"[窓]{まど}を[開]{あ}いています。", why:"[開]{あ}く is intransitive, so it can’t take an object with を. The window takes が: [窓]{まど}が[開]{あ}いています."}
     ]
    },
    {
     id:"e3u7-l4-x6",
     type:"mcq",
     q:"Cheska opens the door of the seminar room and says: 「あ、[窓]{まど}が[開]{あ}けてありますね。」 What does she understand?",
     options:[
      {
       t:"Someone opened the window on purpose, and it is still open.",
       ok:true,
       why:"Right. Transitive [開]{あ}ける + てある: the result of a deliberate action."
      },
      {t:"The window blew open by itself.", why:"That would be the intransitive: [窓]{まど}が[開]{あ}いています, or [開]{あ}きました."},
      {t:"Someone is opening the window right now.", why:"That would be [窓]{まど}を[開]{あ}けています."},
      {t:"The window should be opened.", why:"Nothing here gives advice; ～てある describes a state."}
     ]
    },
    {
     id:"e3u7-l4-x7",
     type:"spot",
     q:"Cheska describes the seminar room as she found it this morning. Tap each verb form that is **wrong**.",
     ask:"is wrong",
     parts:[
      "[事務所]{じむしょ}に[着]{つ}くと、ドアが",
      {t:"[開]{あ}いていました", flag:false, why:"Correct: intransitive [開]{あ}く + ている for a state: the door was open."},
      "。電気も",
      {t:"ついていました", flag:false, why:"Correct: intransitive つく + ている: the light was on."},
      "。[机]{つくえ}の上にメモが",
      {t:"[置]{お}いてありました", flag:false, why:"Correct: transitive [置]{お}く + てある: someone had left a note there on purpose."},
      "。メモには「[会議]{かいぎ}は[十時]{じゅうじ}からです」と",
      {t:"書いてありました", flag:false, why:"Correct: 書いてある, “was written”."},
      "。でも、[窓]{まど}が",
      {
       t:"[閉]{し}めていました",
       flag:true,
       why:"Wrong. With が and no doer, use the intransitive: [閉]{し}まっていました, or [閉]{し}めてありました if someone had shut it on purpose."
      },
      "。エアコンも",
      {t:"[消]{き}えてありました", flag:true, why:"Wrong. ～てある needs a transitive verb: [消]{け}してありました (someone had turned it off), or [消]{き}えていました (it was off)."},
      "。"
     ]
    },
    {
     id:"e3u7-l4-x8",
     type:"mcq",
     q:"The hall light has a sensor and comes on by itself when you walk in. Complete the sentence: 電気が（　）。",
     options:[
      {t:"つきました", ok:true, why:"Right. つく is intransitive: the light comes on, and nobody does it."},
      {t:"つけました", why:"つける is transitive: it needs a doer and an object with を (電気をつけました)."},
      {t:"つけてありました", why:"～てある means someone switched it on deliberately and left it on. Here it came on by itself."},
      {t:"ついてありました", why:"～てある goes only with transitive verbs, and つく is intransitive."}
     ]
    },
    {
     id:"e3u7-l4-x9",
     type:"type",
     q:"Type the verb in hiragana, polite past: “The door closed in the wind.” 「[風]{かぜ}で、ドアが（　）。」 ([閉]{し}める / [閉]{し}まる)",
     answer:"しまりました",
     wrongs:[
      {v:"しめました", why:"[閉]{し}める is transitive: someone closes something (を). Nobody closed the door; it closed by itself, so use the intransitive [閉]{し}まる."},
      {v:"しまいました", why:"[閉]{し}まる is godan: [閉]{し}まります, [閉]{し}まりました. (しまいました is the ending of ～てしまう.)"}
     ],
     why:"ドアが + intransitive [閉]{し}まる: the door closed, with no one doing it. The wind is the cause (で), not a doer."
    },
    {
     id:"e3u7-l4-x10",
     type:"type",
     q:"Before a trip, Mariya checks her bag: “The map is already in the bag (I put it there).” Type the て-form in hiragana: 「[地図]{ちず}は、もうかばんに（　）あります。」 ([入]{い}れる / [入]{はい}る)",
     answer:"いれて",
     wrongs:[
      {v:"はいって", why:"～てある needs a transitive verb, one that someone does to something: [入]{い}れる. With [入]{はい}る, say かばんに[入]{はい}っています."},
      {v:"いれって", why:"[入]{い}れる is ichidan, so its て-form is just 入れて, with no small っ."}
     ],
     why:"Transitive 入れる + てある: someone put it in on purpose, and it is still there: [地図]{ちず}は、もうかばんに入れてあります."
    },
    {
     id:"e3u7-l4-x11",
     type:"type",
     q:"Cheska takes a glass out of the cupboard: “Oh, this glass is broken.” Type the て-form in hiragana: 「あ、このコップ、（　）いますね。」 ([割]{わ}る / [割]{わ}れる)",
     answer:"われて",
     wrongs:[
      {v:"わって", why:"[割]{わ}っています uses the transitive [割]{わ}る: someone is breaking it. For the state of the glass, use the intransitive: [割]{わ}れています."},
      {v:"われって", why:"[割]{わ}れる is ichidan, so its て-form is just [割]{わ}れて, with no small っ."}
     ],
     why:"Intransitive verb + ている describes the state after a change: [割]{わ}れています, “is broken”."
    }
   ],
   apply:{
    intro:"Learn the pairs with the things around you. Keep the notes for yourself.",
    tasks:[
     {
      t:"Make pair cards",
      how:[
       "Make twelve cards (paper or an app). On each, write a pair with its readings and particles: 電気をつける・電気がつく.",
       "Add a tiny drawing or an example from your home to each card.",
       "Review them for two minutes a day this week. Say the transitive verb, then its partner."
      ],
      write:"1 … を … ・ … が … 2 …"
     },
     {
      t:"Describe a room",
      how:[
       "Stand in one room of your home, a classroom or an office.",
       "Write five sentences about states with intransitive verbs + ている: 電気がついています, [窓]{まど}が[閉]{し}まっています, ドアが[開]{あ}いています…",
       "Write two sentences with ～てあります for things someone did on purpose: [壁]{かべ}にカレンダーがかけてあります。"
      ],
      write:"State 1… 2… 3… 4… 5… Done on purpose: 1… 2…"
     },
     {
      t:"Get ready for guests",
      how:[
       "Imagine friends are coming to visit. Write three things you did to prepare, with ～ておきました: [部屋]{へや}を[掃除]{そうじ}しておきました。",
       "For each, write the result with ～てあります: [飲]{の}み[物]{もの}が[冷]{ひ}やしてあります。",
       "Check that every ～てある verb is transitive."
      ],
      write:"I did… → so now… てあります"
     }
    ],
    proof:"Twelve pair cards, seven sentences describing a real room, and three ～ておきました / ～てあります pairs."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Transitive and Intransitive Verbs” (with the section “Pay attention to particles!”)"},
    {book:"taekim", where:"Essential Grammar, “Other uses of the te-form”, section “Using 「～てある」 for resultant states”"},
    {
     book:"irodori",
     where:"Elementary 1, Lesson 12 “Your bento looks delicious.” (intransitive and transitive verbs) and Elementary 2, Lesson 13 “They display a lot of materials.” (V-てあります)",
     note:"Both with audio."
    }
   ]
  },
  {
   id:"e3u7-l5",
   title:"～ながら, ～のに, ～し, and polite speech basics",
   minutes:65,
   hook:{
    q:"When you walk into a shop in Japan, the staff call out 「いらっしゃいませ！」. The word comes from the verb いらっしゃる. What does いらっしゃる mean?",
    options:["to buy (said politely)", "to come, go or be (said with respect)", "to thank (said humbly)", "to sell (said politely)"],
    answer:1,
    reveal:"**To come, go or be, said with respect.** いらっしゃる is the respectful verb for [来]{く}る, [行]{い}く and いる, used for the actions of people you want to honor, such as customers. いらっしゃいませ is a very polite “please come in”: in effect, “welcome”. It is part of [[keigo|[敬語]{けいご}]], Japan’s system of respectful language. This lesson ends with the keigo verbs you will hear most, after three useful ways of joining ideas: ～ながら, ～のに and ～し."
   },
   goals:[
    "Say that one person does two things at once with ～ながら, with the main action last",
    "Express “even though” with ～のに, with its feeling of surprise or disappointment, and know what can’t follow it",
    "List reasons and points with ～し、～し",
    "Explain what respectful ([尊敬語]{そんけいご}) and humble ([謙譲語]{けんじょうご}) language do, and recognize the most common special verbs",
    "Use お～ください, お～になる and お～する safely, and avoid using respectful forms about yourself"
   ],
   learn:[
    {
     h:"～ながら: two things at once",
     body:[
      {lead:"ます stem + [[nagara|ながら]] joins two actions that one person does at the same time. The main action comes last."},
      {table:[["ます-form", "～ながら"], ["[聞]{き}きます", "聞きながら"], ["[食]{た}べます", "食べながら"], ["[歩]{ある}きます", "[歩]{ある}きながら"], ["します", "しながら"]]},
      {
       ex:"[音楽]{おんがく}を聞きながら[勉強]{べんきょう}します。\nI study while listening to music.\n\n[歩]{ある}きながらスマホを[見]{み}ないでください。\nPlease don’t look at your phone while you walk.\n\nコーヒーを[飲]{の}みながら[話]{はな}しましょう。\nLet’s talk over a coffee.\n\n[働]{はたら}きながら[大学]{だいがく}で[勉強]{べんきょう}しています。\nI’m studying at university while working.",
       label:"～ながら"
      },
      "The last example shows that ながら also works for longer periods: two things that are going on side by side, over months.",
      {
       list:[
        "**Tense and politeness go on the last verb only.** The ながら verb never changes: 聞きながら[勉強]{べんきょう}しました (I studied while listening).",
        "**The last verb is the main action.** [音楽]{おんがく}を聞きながら[勉強]{べんきょう}します is about studying, with music in the background. [勉強]{べんきょう}しながら[音楽]{おんがく}を聞きます puts the music first.",
        "**One person does both.** For two people, use [間]{あいだ} (while) instead: [私]{わたし}が[料理]{りょうり}している間、[夫]{おっと}はテレビを見ていました (While I was cooking, my husband was watching TV). ～ながら would be wrong here."
       ]
      }
     ]
    },
    {
     h:"～のに: even though…",
     body:[
      {
       lead:"Plain form + [[noni|のに]] means “even though”: the result is the opposite of what you expected, and you feel surprised, disappointed or annoyed."
      },
      {
       table:[
        ["Before のに", "Example"],
        ["verb", "[約束]{やくそく}した のに"],
        ["い-adjective", "[高]{たか}い のに"],
        ["な-adjective + な", "[静]{しず}か**な** のに"],
        ["noun + な", "[日曜日]{にちようび}**な** のに"]
       ]
      },
      {
       ex:"[毎日]{まいにち}[練習]{れんしゅう}しているのに、なかなか[上手]{じょうず}になりません。\nEven though I practice every day, I’m just not getting better.\n\n[約束]{やくそく}したのに、トビーさんは[来]{き}ませんでした。\nToby promised, but he didn’t come.\n\nこの[店]{みせ}は高いのに、あまりおいしくないです。\nThis restaurant is expensive, and yet it isn’t very good.\n\n[日曜日]{にちようび}なのに、[会社]{かいしゃ}に行かなければなりません。\nIt’s Sunday, and I still have to go to work.",
       label:"～のに"
      },
      "Nouns and な-adjectives take **な** before のに, just as they do before ので: [学生]{がくせい}なのに, [静]{しず}かなのに.",
      {
       key:"The second half of a のに sentence states a fact: what happened, or what is the case. It can’t be your request, suggestion, invitation or plan. For those, use けど or が."
      },
      {table:[["✗ Wrong", "✓ Right"], ["[雨]{あめ}が[降]{ふ}っているのに、[出]{で}かけましょう。", "雨が[降]{ふ}っているけど、出かけましょう。\nIt’s raining, but let’s go out anyway."]]},
      "**のに or けど?** けど and が are a neutral “but”. のに adds feeling: 高いけど、おいしいです (It’s expensive, but good) is a calm comment; 高いのに、おいしくないです carries a complaint.",
      {h:"Two other のに"},
      "Don’t confuse this のに with **dictionary form + のに + an evaluation word**, which means “for (doing)”: このナイフは[野菜]{やさい}を[切]{き}るのに[便利]{べんり}です (This knife is handy for cutting vegetables). Words like [便利]{べんり}, いい, [使]{つか}う and [必要]{ひつよう} after it give it away.",
      "And at the very end of a sentence, のに expresses regret or a complaint: もっと[早]{はや}く[言]{い}ってくれればよかったのに (I wish you had told me sooner). This uses ～ば from Unit 6."
     ]
    },
    {
     h:"～し、～し: and what’s more",
     body:[
      {lead:"Plain form + [[shi-listing|し]] lists reasons or points one after another: “…, and…, and besides…”. Often a conclusion follows."},
      {
       table:[["Before し", "Example"], ["verb", "雨が[降]{ふ}っているし"], ["い-adjective", "[安]{やす}いし"], ["な-adjective + だ", "[静]{しず}か**だ**し"], ["noun + だ", "雨**だ**し"]]
      },
      {
       ex:"この[店]{みせ}は[安]{やす}いし、おいしいし、よく[来]{き}ます。\nThis restaurant is cheap, and it’s good, so I come here a lot.\n\n[今日]{きょう}は雨だし、[寒]{さむ}いし、[家]{いえ}にいます。\nIt’s raining and it’s cold today, so I’m staying at home.\n\n[駅]{えき}から[近]{ちか}いし、[部屋]{へや}も[広]{ひろ}いし、このアパートにします。\nIt’s close to the station, and the rooms are spacious too, so I’ll take this apartment.",
       label:"～し、～し"
      },
      "Notice the だ after nouns and な-adjectives, the opposite of のに, which takes な. And notice も: it often appears with し, meaning “also”.",
      "A single し hints that there are other reasons you aren’t saying: [時間]{じかん}もないし、[今日]{きょう}はやめておきます (I don’t have time anyway, so I’ll give it a miss today). It sounds softer than giving one reason with から.",
      "In polite speech you can use です and ます before し: [安]{やす}いですし、[駅]{えき}からも[近]{ちか}いですし…"
     ]
    },
    {
     h:"Polite speech: what keigo does",
     body:[
      {
       lead:"You already speak politely with です and ます. Japanese also has [[keigo|keigo]] ([敬語]{けいご}): special verbs and patterns for showing respect, used with customers, teachers, bosses and people you don’t know well."
      },
      "Traditionally, keigo is divided into three kinds:",
      {
       fig:"<svg viewBox=\"0 0 340 262\"><defs><marker id=\"e3u7a7\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Three kinds of polite language</text><rect class=\"d-gold\" x=\"8\" y=\"34\" width=\"324\" height=\"64\" rx=\"10\" stroke-width=\"2\"/><path class=\"d-ink\" d=\"M36 88V48\" stroke-width=\"3\" marker-end=\"url(#e3u7a7)\"/><text x=\"60\" y=\"58\">そんけいご: their actions</text><text class=\"s\" x=\"60\" y=\"78\">raise the other person</text><text class=\"s\" x=\"60\" y=\"92\">いらっしゃる, おっしゃる</text><rect class=\"d-lup\" x=\"8\" y=\"108\" width=\"324\" height=\"64\" rx=\"10\" stroke-width=\"2\"/><path class=\"d-ink\" d=\"M36 118V158\" stroke-width=\"3\" marker-end=\"url(#e3u7a7)\"/><text x=\"60\" y=\"132\">けんじょうご: my actions</text><text class=\"s\" x=\"60\" y=\"152\">lower yourself and your side</text><text class=\"s\" x=\"60\" y=\"166\">まいる, もうす, うかがう</text><rect class=\"d-sage\" x=\"8\" y=\"182\" width=\"324\" height=\"64\" rx=\"10\" stroke-width=\"2\"/><path class=\"d-ink\" d=\"M20 214H52\" stroke-width=\"3\" marker-end=\"url(#e3u7a7)\"/><text x=\"60\" y=\"206\">ていねいご: to the listener</text><text class=\"s\" x=\"60\" y=\"226\">polite endings</text><text class=\"s\" x=\"60\" y=\"240\">です, ます, ございます</text></svg>",
       alt:"Three bands. そんけいご, their actions, with an upward arrow: raise the other person, for example いらっしゃる and おっしゃる. けんじょうご, my actions, with a downward arrow: lower yourself and your side, for example まいる, もうす and うかがう. ていねいご, to the listener, with an arrow pointing across: polite endings です, ます and ございます.",
       cap:"Respect goes up for their actions and down for yours; です・ます are polite to whoever you are talking to."
      },
      {
       list:[
        "**[[teineigo|[丁寧語]{ていねいご}]] (polite language):** です, ます and the very formal ございます. Polite to the listener. You already use it.",
        "**[[sonkeigo|[尊敬語]{そんけいご}]] (respectful language):** raises **the other person** when they act: いらっしゃる (come, go, be), おっしゃる (say).",
        "**[[kenjougo|[謙譲語]{けんじょうご}]] (humble language):** lowers **your own** actions, or your side’s, in relation to the other person: [参]{まい}る (come, go), [申]{もう}す (say), [伺]{うかが}う (visit, ask)."
       ]
      },
      {key:"Respectful verbs for what **they** do; humble verbs for what **you** do. Never use a respectful verb about yourself."},
      "The official guidelines of 2007 ([[keigo-no-shishin|[敬語]{けいご}の[指針]{ししん}]]) divide these into five kinds, splitting humble language and polite language into two each. The Academic Japanese track explains them in {{keigo-system}}. At N4, the three kinds above are all you need.",
      {
       tip:"Keigo is hard for Japanese speakers too: many learn business keigo in their first job. At N4 the aim is to **recognize** the common forms and to use a few safely. Polite です・ます with a handful of keigo verbs is plenty."
      }
     ]
    },
    {
     h:"Special verbs to know first",
     body:[
      "The most common verbs have special keigo forms. Learn these as words in their own right:",
      {
       table:[
        ["Verb", "[尊敬語]{そんけいご} (they do)", "[謙譲語]{けんじょうご} (I do)"],
        ["いる", "いらっしゃる", "おる"],
        ["行く・[来]{く}る", "いらっしゃる", "[参]{まい}る"],
        ["[言]{い}う", "おっしゃる", "[申]{もう}す"],
        ["食べる・[飲]{の}む", "[召]{め}し[上]{あ}がる", "いただく"],
        ["見る", "ご[覧]{らん}になる", "[拝見]{はいけん}する"],
        ["する", "なさる", "いたす"],
        ["[知]{し}っている", "ご[存]{ぞん}じだ", "[存]{ぞん}じている"],
        ["くれる", "くださる", "—"],
        ["もらう", "—", "いただく"],
        ["聞く (ask)・[訪]{たず}ねる (visit)", "—", "[伺]{うかが}う"]
       ]
      },
      {
       ex:"[先生]{せんせい}は[明日]{あした}、いらっしゃいますか。\nWill the professor be in tomorrow?\n\n[何]{なに}を[召]{め}し上がりますか。\nWhat would you like to eat (or drink)?\n\nはじめまして。イエンと[申]{もう}します。\nHow do you do? My name is Yến.\n\n[明日]{あした}、[三時]{さんじ}に[伺]{うかが}います。\nI’ll come to see you tomorrow at three.",
       label:"Special keigo verbs"
      },
      {
       warn:"いらっしゃる, おっしゃる, なさる and くださる are godan verbs, but their ます-forms use い, not り: いらっしゃいます, おっしゃいます, なさいます, くださいます. ございます (from ござる) works the same way. The same い appears in いらっしゃいませ and in ください, the command form of くださる."
      },
      "[存]{ぞん}じている is usually heard in its more humble form [存]{ぞん}じております (“I know”), with おる in place of いる."
     ]
    },
    {
     h:"Patterns for other verbs",
     body:[
      "Verbs without a special form use regular patterns built on the ます stem:",
      {
       table:[
        ["Pattern", "Kind", "Example"],
        ["お + stem + になる", "[尊敬語]{そんけいご}", "先生はもうお[帰]{かえ}りになりました。\nThe professor has already gone home."],
        ["お + stem + ください", "respectful request", "[少々]{しょうしょう}お[待]{ま}ちください。\nPlease wait a moment."],
        ["ご + する-noun + ください", "respectful request", "ご[注意]{ちゅうい}ください。\nPlease be careful."],
        ["passive form (～れる・～られる)", "lighter [尊敬語]{そんけいご}", "[社長]{しゃちょう}は[何時]{なんじ}に[来]{こ}られますか。\nWhat time is the company president coming?"],
        ["お + stem + する", "[謙譲語]{けんじょうご}", "お[荷物]{にもつ}をお[持]{も}ちします。\nLet me carry your bag."],
        ["ご + する-noun + する", "[謙譲語]{けんじょうご}", "[会場]{かいじょう}までご[案内]{あんない}します。\nI’ll show you to the venue."]
       ]
      },
      "The passive-form [尊敬語]{そんけいご} is the one you met in Lesson 1: in [来]{こ}られますか, nobody is “being come to”; it is simply a respectful [来]{き}ますか.",
      {
       list:[
        "**お or ご?** Usually お with native Japanese words (お[待]{ま}ち, お[持]{も}ち) and ご with words borrowed from Chinese, many of them する-nouns (ご[案内]{あんない}, ご[注意]{ちゅうい}, ご[連絡]{れんらく}). There are exceptions, such as お[電話]{でんわ}.",
        "**One-syllable stems don’t take お～になる.** For 見る, [寝]{ね}る and いる, use the special verbs: ご[覧]{らん}になる, お[休]{やす}みになる, いらっしゃる. お見になる is wrong.",
        "**お～する is for actions that affect the other person**, such as carrying, sending or showing something for them: お[持]{も}ちします, お[送]{おく}りします. It doesn’t work for actions that only concern you, like walking."
       ]
      }
     ]
    },
    {
     h:"Using polite speech safely",
     body:[
      {
       table:[
        ["✗ Mistake", "✓ Correct", "Why"],
        ["[明日]{あした}、[私]{わたし}が先生の[研究室]{けんきゅうしつ}にいらっしゃいます。", "[明日]{あした}、[私]{わたし}が先生の[研究室]{けんきゅうしつ}に[伺]{うかが}います。", "Respectful verbs are never for yourself."],
        ["先生が[参]{まい}りました。", "先生がいらっしゃいました。", "A humble verb would lower the person you want to respect."],
        ["いらっしゃります", "いらっしゃいます", "The ます-form uses い."],
        ["お見になりますか。", "ご[覧]{らん}になりますか。", "見る has a special respectful verb."],
        ["[私]{わたし}はケーキを[召]{め}し上がりました。", "[私]{わたし}はケーキをいただきました。", "[召]{め}し上がる is for others; your own eating is いただく."]
       ]
      },
      {h:"Your side and their side"},
      "Keigo also depends on **groups**. When you speak to someone outside your group, such as a customer or a caller from another company, you treat your own colleagues, your boss and your family as part of your side: no respectful verbs and no さん for them. This is the idea of [[uchi-soto|ウチ・ソト]] (inside and outside).",
      {
       ex:"[浜田]{はまだ}はただいま出かけております。\nMrs Hamada is out at the moment.\n(said by Aoi at her grandmother's tea shop, to a supplier on the phone)",
       label:"ウチ・ソト"
      },
      "Inside the family, Aoi says おばあちゃん, and with neighbors she might say [浜田]{はまだ}さん. To an outside caller, the owner is on Aoi's side, so the name goes bare. Schools and universities are looser: there, people usually keep 先生 even when they speak to outsiders. The common traps are collected in {{keigo-mistakes}}.",
      "That completes the N4 grammar in this track. The forms in this unit (passive, causative, transitive and intransitive pairs) use many N4 kanji, so daily review pays off. Forgetting and relearning is normal; short, spaced sessions fix it.",
      {lab:"kl-n4", t:"Practice: the N4 kanji, many of which appear in this unit’s verbs"},
      {lab:"kl-n4-vocab", t:"Practice: N4 vocabulary, including verb pairs"},
      "The patterns from this unit are collected in {{n4-grammar-patterns}}, and the keigo basics in {{polite-speech-basics}}.",
      {terms:["nagara", "noni", "shi-listing"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l5-x1",
     type:"mcq",
     q:"Choose the sentence in which **studying** is the main activity and music is in the background.",
     options:[
      {t:"[音楽]{おんがく}を聞きながら[勉強]{べんきょう}します。", ok:true, why:"Right. The last verb is the main action: studying, while listening to music."},
      {t:"[勉強]{べんきょう}しながら[音楽]{おんがく}を聞きます。", why:"This is grammatical, but the main action is listening to music, with studying on the side."},
      {t:"[音楽]{おんがく}を聞くながら[勉強]{べんきょう}します。", why:"ながら attaches to the ます stem: 聞きながら, not the dictionary form."},
      {t:"[音楽]{おんがく}を聞いてながら[勉強]{べんきょう}します。", why:"ながら attaches to the ます stem, not the て-form."}
     ]
    },
    {
     id:"e3u7-l5-x2",
     type:"mcq",
     q:"Complete the sentence: [一生懸命]{いっしょうけんめい}[勉強]{べんきょう}した（　）、[試験]{しけん}に[落]{お}ちました。 ([一生懸命]{いっしょうけんめい} = very hard; [落]{お}ちる = fail)",
     options:[
      {t:"のに", ok:true, why:"Right. “Even though I studied very hard, I failed the exam”: the result is the opposite of what was expected."},
      {t:"から", why:"から gives a reason: “I failed because I studied hard”, which makes no sense."},
      {t:"し", why:"し lists reasons or points that point the same way; studying hard isn’t a reason to fail."},
      {t:"ながら", why:"ながら attaches to the ます stem ([勉強]{べんきょう}しながら), not the た-form, and it means “while”."}
     ]
    },
    {
     id:"e3u7-l5-x3",
     type:"mcq",
     q:"Which sentence is **wrong**?",
     options:[
      {
       t:"雨が[降]{ふ}っているのに、出かけましょう。",
       ok:true,
       why:"Right. After のに, the second half must be a fact, not an invitation. Use けど: [降]{ふ}っているけど、出かけましょう."
      },
      {t:"雨が[降]{ふ}っているのに、ロドリゴさんは出かけました。", why:"Correct: a fact that goes against expectation, with a note of surprise."},
      {t:"雨が[降]{ふ}っているけど、出かけましょう。", why:"Correct: けど is a neutral “but” and can be followed by an invitation."},
      {t:"雨が[降]{ふ}っているから、出かけません。", why:"Correct: から gives the reason for not going out."}
     ]
    },
    {
     id:"e3u7-l5-x4",
     type:"match",
     q:"Join each word to the pattern correctly.",
     pairs:[
      ["[静]{しず}か + のに", "[静]{しず}かなのに", "な-adjectives take な before のに."],
      ["[学生]{がくせい} + のに", "[学生]{がくせい}なのに", "Nouns take な before のに, too."],
      ["[静]{しず}か + し", "[静]{しず}かだし", "な-adjectives take だ before し."],
      ["[安]{やす}い + し", "[安]{やす}いし", "い-adjectives attach directly."],
      ["[歩]{ある}く + ながら", "[歩]{ある}きながら", "ながら attaches to the ます stem."]
     ]
    },
    {
     id:"e3u7-l5-x5",
     type:"mcq",
     q:"「このアパートは[駅]{えき}から[近]{ちか}いし、[家賃]{やちん}も[安]{やす}いし、いいですね。」 ([家賃]{やちん} = rent) What is the speaker doing?",
     options:[
      {t:"Giving several reasons why the apartment is good", ok:true, why:"Right. し lists reasons one after another, and も adds “also”."},
      {t:"Saying the apartment is close but expensive", why:"[安]{やす}い means cheap, and し lists points that point the same way."},
      {t:"Asking whether the apartment is close and cheap", why:"There is no question here; ね asks for agreement with a statement."},
      {t:"Complaining that the apartment is close but still not good", why:"That kind of contrast would use のに. し lists positive points here."}
     ]
    },
    {
     id:"e3u7-l5-x6",
     type:"sort",
     q:"Sort these keigo verbs: respectful (for what others do) or humble (for what you do)?",
     buckets:["[尊敬語]{そんけいご} (respectful: they)", "[謙譲語]{けんじょうご} (humble: I)"],
     items:[
      {t:"いらっしゃる", b:0, why:"Respectful for 行く, [来]{く}る and いる."},
      {t:"おっしゃる", b:0, why:"Respectful for [言]{い}う."},
      {t:"[召]{め}し上がる", b:0, why:"Respectful for 食べる and [飲]{の}む."},
      {t:"ご[覧]{らん}になる", b:0, why:"Respectful for [見]{み}る."},
      {t:"[参]{まい}る", b:1, why:"Humble for 行く and [来]{く}る."},
      {t:"[申]{もう}す", b:1, why:"Humble for [言]{い}う."},
      {t:"[拝見]{はいけん}する", b:1, why:"Humble for 見る."},
      {t:"[伺]{うかが}う", b:1, why:"Humble for visiting or asking."}
     ]
    },
    {
     id:"e3u7-l5-x7",
     type:"spot",
     q:"Aoi, a new intern at a company in Tokyo, greets a visitor from another company. Tap each keigo form that is **wrong**.",
     ask:"is wrong",
     parts:[
      "いらっしゃいませ。[私]{わたし}は[平川]{ひらかわ}と",
      {t:"[申]{もう}します", flag:false, why:"Correct: the humble verb for your own name."},
      "。[部長]{ぶちょう}はすぐに",
      {t:"[参]{まい}ります", flag:false, why:"Correct: to an outside visitor, Aoi treats her own boss as her side (ウチ), so she uses the humble verb, with no [様]{さま} or さん after [部長]{ぶちょう}."},
      "。どうぞ、こちらに",
      {t:"お[座]{すわ}りください", flag:false, why:"Correct: お + stem + ください, a respectful request."},
      "。コーヒーを",
      {t:"お[飲]{の}みしますか", flag:true, why:"Wrong. お～する is humble, for your own actions. For the visitor’s drinking, use [召]{め}し上がりますか (or お[飲]{の}みになりますか)."},
      "。[資料]{しりょう}はもう",
      {t:"ご[覧]{らん}になりましたか", flag:false, why:"Correct: the respectful verb for the visitor’s looking."},
      "。[明日]{あした}は[私]{わたし}がそちらに",
      {t:"いらっしゃいます", flag:true, why:"Wrong. Respectful verbs are never for yourself. Aoi should say [伺]{うかが}います or [参]{まい}ります."},
      "。"
     ]
    },
    {
     id:"e3u7-l5-x8",
     type:"mcq",
     q:"A salesclerk needs a customer to wait a moment. What is the polite thing to say?",
     options:[
      {t:"[少々]{しょうしょう}お[待]{ま}ちください。", ok:true, why:"Right. お + stem + ください is the respectful request you hear in every shop."},
      {t:"[少々]{しょうしょう}お[待]{ま}ちします。", why:"お～する is humble: this means “I will wait a moment”."},
      {t:"[少々]{しょうしょう}お[待]{ま}ちになります。", why:"This describes the customer waiting, as a statement; it isn’t a request."},
      {t:"[少々]{しょうしょう}[待]{ま}たれてください。", why:"The passive-form respect doesn’t combine with ください. Use お[待]{ま}ちください."}
     ]
    },
    {
     id:"e3u7-l5-x9",
     type:"type",
     q:"Fumiko warns Rodrigo: “Walking while looking at your phone is dangerous.” Type the missing part in hiragana: 「スマホを（　）[歩]{ある}くのは[危]{あぶ}ないですよ。」 (見る, look)",
     answer:"みながら",
     wrongs:[
      {v:"みるながら", why:"ながら attaches to the ます stem, not the dictionary form: 見ます → 見 + ながら."},
      {v:"みてながら", why:"No て-form here. ます stem + ながら: 見ながら."}
     ],
     why:"ます stem + ながら: one person doing two things at once. The main action, walking, comes last."
    },
    {
     id:"e3u7-l5-x10",
     type:"type",
     q:"Type the missing part in hiragana: “Yến is good at Japanese, and yet she always says ‘I’ve still got a long way to go’.” 「イエンさんは[日本語]{にほんご}が[上手]{じょうず}（　）、いつも「まだまだです」と[言]{い}います。」",
     answer:"なのに",
     wrongs:[
      {v:"のに", why:"[上手]{じょうず} is a な-adjective, and な-adjectives and nouns take な before のに: [上手]{じょうず}なのに."},
      {v:"だのに", why:"だ changes to な before のに, just as before ので: [上手]{じょうず}なのに."}
     ],
     why:"のに means “even though”: Yến is good, so you would expect her to say so, but she doesn’t. な-adjectives and nouns take な before のに."
    },
    {
     id:"e3u7-l5-x11",
     type:"type",
     q:"At Aoi’s internship, a colleague in her own team asks where the department head is. Aoi answers with respect: “He’s in the meeting room now.” Type the respectful verb in hiragana: 「[部長]{ぶちょう}は[今]{いま}、[会議室]{かいぎしつ}に（　）。」 (いる, be)",
     answer:"いらっしゃいます",
     wrongs:[
      {v:"いらっしゃります", why:"いらっしゃる is one of the special godan verbs whose ます-form uses い: いらっしゃいます."},
      {v:"おります", why:"おる is humble, for what you or your side do. Inside the team, the department head is someone to respect. (To a caller from another company, Aoi would treat him as her side and say おります: that is ウチ・ソト.)"},
      {v:"います", why:"います is polite but not respectful. For a superior, use the special respectful verb いらっしゃる."}
     ],
     why:"いる → respectful いらっしゃる → いらっしゃいます. Respectful verbs are for what the people you respect do."
    }
   ],
   apply:{
    intro:"Use the new patterns about your own life, and prepare a few keigo phrases you will really need. Keep the notes for yourself.",
    tasks:[
     {
      t:"Two things at once",
      how:[
       "Write three sentences about things you do at the same time: on the way to work, while cooking, while studying.",
       "Check that one person does both actions and that the main action is the last verb.",
       "Write one sentence about two people with [間]{あいだ} instead of ながら."
      ],
      write:"1 …ながら… 2 … 3 … 間: …"
     },
     {
      t:"Complaints and reasons",
      how:[
       "Write two sentences with ～のに about real small frustrations: something that should have worked but didn’t.",
       "Write two sentences with ～し、～し giving reasons for a choice: a café you like, a place you’d live, a hobby.",
       "Check the forms: な before のに, だ before し, for nouns and な-adjectives."
      ],
      write:"のに 1… 2… し 1… 2…"
     },
     {
      t:"Your keigo starter kit",
      how:[
       "Write a self-introduction with humble verbs: [私]{わたし}は…と[申]{もう}します。…から[参]{まい}りました。どうぞよろしくお[願]{ねが}いいたします。",
       "Write three polite questions for a teacher, host or customer with respectful verbs: [何]{なに}を[召]{め}し[上]{あ}がりますか, いついらっしゃいますか…",
       "Read them aloud until they feel natural. Check every verb against the table: respectful for them, humble for you."
      ],
      write:"Self-introduction… Three questions…"
     },
     {
      t:"Review the N4 kanji",
      how:[
       "Open the Kanji Lab and choose the N4 kanji deck. Review for five minutes a day this week.",
       "Notice the kanji from this unit’s verbs: [開]{あ}ける, [始]{はじ}める, [待]{ま}つ, [飲]{の}む, [着]{つ}く."
      ]
     }
    ],
    proof:"Three ながら sentences and one with 間, two のに and two し sentences of your own, a keigo self-introduction with three respectful questions, and a week of N4 kanji review."
   },
   read:[
    {book:"taekim", where:"Special Expressions, “Time-specific actions”, section “Using 「ながら」 for two concurrent actions”"},
    {book:"taekim", where:"Essential Grammar, “Compound Sentences”, sections “Using 「のに」 to mean ‘despite’” and “Expressing multiple reasons using 「し」”"},
    {book:"taekim", where:"Special Expressions, “Honorific and Humble Forms”", note:"Tables of the special verbs and the お～になる / お～する patterns."},
    {
     book:"irodori",
     where:"Elementary 2, Lessons 2 “He looks a serious person.” and 6 “I am glad that I went to a lot of different places.” (～し), and 9 “What do people do on Coming-of-Age Day?” (～ながら)",
     note:"With audio."
    },
    {
     book:"irodori",
     where:"Pre-Intermediate, Lesson 14 “I’m troubled about a friend.” (～のに), and Lessons 8, 11, 12, 16 and 18 on respectful and humble expressions",
     note:"Lesson 18 “I would be happy if you would allow me to work there.” brings keigo together in a job interview."
    }
   ]
  },
  {
   id:"e3u7-l6",
   title:"Too much, easy or hard, how to, wants to: ～すぎる, ～やすい・～にくい, ～かた and ～たがる",
   minutes:55,
   hook:{
    q:"Kaito tastes the curry he is making and says: 「ちょっと[辛]{から}すぎる。」 What does he mean?",
    options:["It’s a bit too spicy.", "It’s spicy enough now.", "It isn’t spicy at all.", "It was spicy before."],
    answer:0,
    reveal:"**It’s a bit too spicy.** すぎる means “go past, exceed”. After the stem of an adjective or a verb it means “too much”: [辛]{から}すぎる (too spicy), [食]{た}べすぎる (eat too much). This lesson covers five patterns that all attach to the same stem: ～すぎる, ～やすい (easy to), ～にくい (hard to), ～[方]{かた} (the way to) and ～たがる (someone else wants to)."
   },
   goals:[
    "Say “too much” with ～すぎる after verb and adjective stems, including よすぎる and なさすぎる",
    "Say that something is easy or hard to do with ～やすい and ～にくい, and conjugate them as い-adjectives",
    "Name the way of doing something with ～[方]{かた} ([書]{か}き[方]{かた}, [使]{つか}い[方]{かた}), changing を to の",
    "Describe what someone else wants with ～たがる and ～たがっている, and use it with care",
    "Build all five patterns from the ます stem without mixing up the forms"
   ],
   learn:[
    {
     h:"One stem, five patterns",
     body:[
      {lead:"Each pattern in this lesson attaches to the ます stem you know from Unit 2: 書きます → 書き. Learn the stem once and you have all five."},
      {
       fig:"<svg viewBox=\"0 0 340 294\"><defs><marker id=\"e3u7a9\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">One stem, five patterns</text><rect class=\"d-gold\" x=\"6\" y=\"124\" width=\"100\" height=\"60\" rx=\"8\" stroke-width=\"2\"/><text x=\"56\" y=\"148\" text-anchor=\"middle\">かきます</text><text x=\"56\" y=\"170\" text-anchor=\"middle\">→ かき</text><path class=\"d-ink\" d=\"M106 136L148 58\" stroke-width=\"1.5\" marker-end=\"url(#e3u7a9)\"/><path class=\"d-ink\" d=\"M106 146L148 108\" stroke-width=\"1.5\" marker-end=\"url(#e3u7a9)\"/><path class=\"d-ink\" d=\"M106 154L148 160\" stroke-width=\"1.5\" marker-end=\"url(#e3u7a9)\"/><path class=\"d-ink\" d=\"M106 162L148 210\" stroke-width=\"1.5\" marker-end=\"url(#e3u7a9)\"/><path class=\"d-ink\" d=\"M106 172L148 262\" stroke-width=\"1.5\" marker-end=\"url(#e3u7a9)\"/><rect class=\"d-panel\" x=\"150\" y=\"34\" width=\"184\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"52\">かきすぎる</text><text class=\"s\" x=\"160\" y=\"70\">write too much</text><rect class=\"d-panel\" x=\"150\" y=\"86\" width=\"184\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"104\">かきやすい</text><text class=\"s\" x=\"160\" y=\"122\">easy to write</text><rect class=\"d-panel\" x=\"150\" y=\"138\" width=\"184\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"156\">かきにくい</text><text class=\"s\" x=\"160\" y=\"174\">hard to write</text><rect class=\"d-panel\" x=\"150\" y=\"190\" width=\"184\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"208\">かきかた</text><text class=\"s\" x=\"160\" y=\"226\">the way to write (a noun)</text><rect class=\"d-panel\" x=\"150\" y=\"242\" width=\"184\" height=\"44\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"160\" y=\"260\">かきたがる</text><text class=\"s\" x=\"160\" y=\"278\">someone wants to write</text></svg>",
       alt:"The ます form かきます gives the stem かき. Arrows lead from the stem to five patterns: かきすぎる, write too much; かきやすい, easy to write; かきにくい, hard to write; かきかた, the way to write (a noun); かきたがる, someone wants to write.",
       cap:"[書]{か}きすぎる, [書]{か}きやすい, [書]{か}きにくい, [書]{か}き[方]{かた}, [書]{か}きたがる: one stem, five meanings. ～すぎる also attaches to adjective stems."
      },
      "The [[masu-stem]] is the form before ます: 食べます → 食べ, [飲]{の}みます → [飲]{の}み, します → し, [来]{き}ます → [来]{き}. Only ～すぎる also takes adjectives, so it comes first."
     ]
    },
    {
     h:"Too much: ～すぎる",
     body:[
      "[[sugiru|すぎる]] is an ichidan verb meaning “go past, exceed”. Attach it like this:",
      {table:[["Word type", "Rule", "Examples"], ["verb", "ます stem + すぎる", "食べすぎる, [飲]{の}みすぎる, [働]{はたら}きすぎる"], ["い-adjective", "drop い + すぎる", "[高]{たか}すぎる, [辛]{から}すぎる"], ["な-adjective", "stem + すぎる", "[静]{しず}かすぎる, [複雑]{ふくざつ}すぎる"], ["いい, ない", "add さ", "よすぎる, ([時間]{じかん}が) なさすぎる"]]},
      "Like any ichidan verb it conjugates: すぎます, すぎた, すぎない, すぎて. Its stem すぎ also works as a noun: 食べすぎ (overeating), [飲]{の}みすぎ (drinking too much).",
      {
       ex:"[昨日]{きのう}は[飲]{の}みすぎました。[頭]{あたま}が[痛]{いた}いです。\nI drank too much yesterday. My head hurts.\n\nこの[部屋]{へや}は、[一人]{ひとり}には[広]{ひろ}すぎます。\nThis room is too big for one person.\n\nテストが[簡単]{かんたん}すぎて、つまらなかったです。\nThe test was too easy, so it was boring.\n\nまりや：このかばん、[重]{おも}すぎ！\nMariya: This bag is way too heavy!",
       label:"～すぎる"
      },
      "すぎる is usually negative: “too much” means there is a problem. For a positive “very”, use とても: とてもおいしい. (Young people do say おいしすぎる as strong praise, but that is slang.)",
      "One pair to watch: [少]{すく}ない (few) is an ordinary い-adjective, so it becomes [少]{すく}なすぎる. Only ない meaning “there isn’t” takes さ, like いい: 時間がなさすぎる (there’s far too little time).",
      "Two more patterns you will hear every day. For “too many” or “too much” of something, use [多]{おお}すぎる: [人]{ひと}が[多]{おお}すぎる (there are too many people). And ～すぎて gives a reason for a problem that follows: [忙]{いそが}しすぎて、[寝]{ね}る時間がない (I’m so busy I have no time to sleep), [辛]{から}すぎて食べられない (too spicy to eat)."
     ]
    },
    {
     h:"Easy and hard to do: ～やすい and ～にくい",
     body:[
      "Add [[yasui-nikui|やすい]] (easy) or にくい (hard) to the ます stem. The result is an い-adjective, so it conjugates like one: [読]{よ}みやすくない, 読みにくかった, 読みやすくて.",
      {
       ex:"この[辞書]{じしょ}は[字]{じ}が[大]{おお}きくて、[読]{よ}みやすいです。\nThis dictionary has large print, so it’s easy to read.\n\nこのペンは[書]{か}きにくいです。\nThis pen is hard to write with.\n\n[汐浦]{しおうら}は[静]{しず}かで、[住]{す}みやすい[町]{まち}です。\nShioura is quiet and an easy place to live.\n\nこの[靴]{くつ}は[軽]{かる}くて、[歩]{ある}きやすいですね。\nThese shoes are light and easy to walk in, aren’t they?",
       label:"～やすい and ～にくい"
      },
      "やすい has a second meaning: “likely to, tends to”. It is used for things that happen easily, often unwelcome ones:",
      {
       ex:"このコップは[割]{わ}れやすいので、[気]{き}をつけてください。\nThis glass breaks easily, so please be careful.\n\n[冬]{ふゆ}は[風邪]{かぜ}をひきやすいです。\nIt’s easy to catch a cold in winter.",
       label:"やすい: tends to"
      },
      {list:[
        "**Hard, or impossible?** にくい means difficult but possible: この[字]{じ}は読みにくい (this handwriting is hard to read). The potential negative from Unit 6 means you can’t at all: この[字]{じ}は読めない (I can’t read this handwriting).",
        "**Not the same やすい.** [安]{やす}い (cheap) and [易]{やさ}しい (easy) are different words. After a stem, やすい is usually written in hiragana.",
        "**More at N3.** ～づらい also means “hard to”, with a feeling that it is uncomfortable for you: [言]{い}いづらい (awkward to say)."
      ]}
     ]
    },
    {
     h:"The way to do it: ～[方]{かた}",
     body:[
      "[方]{かた} after a ます stem makes a noun meaning “the way of doing”: 書き[方]{かた} (how to write), 読み[方]{かた} (how to read), [使]{つか}い[方]{かた} (how to use), [行]{い}き[方]{かた} (how to get there), [作]{つく}り[方]{かた} (how to make). The glossary entry is [[kata-way]].",
      "Because the result is a noun, the particles change. The object takes の instead of を: [漢字]{かんじ}を書く → [漢字]{かんじ}の書き[方]{かた}. A destination keeps its particle and adds の: [駅]{えき}までの行き[方]{かた}, [駅]{えき}への行き[方]{かた} (how to get to the station).",
      {
       ex:"この[漢字]{かんじ}の読み[方]{かた}を[教]{おし}えてください。\nPlease tell me how to read this kanji.\n\n[駅]{えき}までの行き[方]{かた}が[分]{わ}かりません。\nI don’t know how to get to the station.\n\nかいとさんに、そばの[作]{つく}り[方]{かた}を[習]{なら}いました。\nI learned how to make soba from Kaito.\n\n[洗濯機]{せんたくき}の[使]{つか}い[方]{かた}、分かる？\nDo you know how to use the washing machine?",
       label:"～[方]{かた}"
      },
      "する verbs work a little differently: [勉強]{べんきょう}する becomes [勉強]{べんきょう}の[仕方]{しかた} (or [勉強]{べんきょう}のしかた), the way of studying. ✗ [勉強]{べんきょう}し[方]{かた}. The set phrase [仕方]{しかた}がない means “it can’t be helped”.",
      {warn:"Don’t confuse this [方]{かた} (way) with [方]{ほう} (side) in ～より～のほうが and ～たほうがいい. Same kanji, different reading and meaning: [書]{か}き[方]{かた} (how to write), [書]{か}いたほうがいい (you’d better write)."}
     ]
    },
    {
     h:"What others want: ～たがる",
     body:[
      "In Unit 3 you learned ～たい (want to). It describes **your own** wish, or asks about the listener’s: 行きたいですか. Japanese is careful about stating what is going on in someone else’s mind, so for a third person ～たいです sounds odd: ✗ そうたくんは[猫]{ねこ}に[会]{あ}いたいです.",
      "Instead, describe what you can see, or what you were told:",
      {list:[
        "**～たがる / ～たがっている** (shows signs of wanting): [[tagaru]]. Add たがる to the ます stem; it conjugates as a godan verb. ～たがっている describes a particular person now; ～たがる describes a habit or people in general.",
        "**～たいと[言]{い}っていました** (said they want to), from Unit 5.",
        "**～たいそうです / ～たいらしいです** (I hear they want to), from Lesson 3."
      ]},
      {table:[["Form", "Example", "Meaning"], ["～たがっている", "そうたくんは[猫]{ねこ}に[会]{あ}いたがっています。", "Sōta wants to see the cat."], ["～たがる (habit)", "[子]{こ}どもは[何]{なん}でも[自分]{じぶん}でやりたがります。", "Children want to do everything themselves."], ["～たがらない", "[弟]{おとうと}は[歯医者]{はいしゃ}に行きたがりません。", "My little brother doesn’t want to go to the dentist."]]},
      "With たい, the object can take が or を ([水]{みず}が[飲]{の}みたい / 水を[飲]{の}みたい). With たがる it is always を: 水を[飲]{の}みたがっている (✗ 水が[飲]{の}みたがっている). The same がる turns some feeling adjectives into verbs: [寒]{さむ}がる (feel cold, act cold), [欲]{ほ}しがる (want something): そうたくんは[新]{あたら}しいゲームを[欲]{ほ}しがっています.",
      {warn:"～たがる describes wanting from the outside, the way you might describe a child, so it can sound rude about people above you, and you never use it to the person themselves. Ask ～たいですか, or offer something (コーヒーはいかがですか). About someone above you, the polite choice is ～たいとおっしゃっていました, from Lesson 5."}
     ]
    },
    {
     h:"Putting the patterns together",
     body:[
      "The five patterns combine with each other and with patterns from earlier units. A few combinations are so common that they are worth learning whole:",
      {list:[
        "**[使]{つか}い[方]{かた}が[分]{わ}かりにくい**: the way to use it is hard to understand. ～[方]{かた} is a noun, so it can be the subject of another pattern.",
        "**食べすぎないほうがいい**: you’d better not eat too much. すぎる is a verb, so it has a ない-form: すぎない.",
        "**読みやすくなりました**: it has become easier to read. やすい is an い-adjective, so it takes く before なる.",
        "**行きたがらない**: doesn’t want to go. たがる is a godan verb: たがらない, たがった, たがっている."
      ]}
     ]
    },
    {
     h:"In conversation: the soba lesson",
     body:[
      "Kaito grew up in his family’s soba shop, and Rodrigo has asked him to teach him. They speak casually, as friends do.",
      {
       ex:"ロドリゴ：かいと、これ、[切]{き}りにくいよ。\nかいと：[包丁]{ほうちょう}の[持]{も}ち[方]{かた}がちょっと[違]{ちが}う。こう[持]{も}つと、[切]{き}りやすいよ。\nロドリゴ：あ、ほんとだ！でも、ちょっと[太]{ふと}すぎる？\nかいと：[大丈夫]{だいじょうぶ}。[最初]{さいしょ}はみんなそうだから。\nロドリゴ：メキシコの[妹]{いもうと}も、[日本]{にほん}のそばを食べたがってるんだ。[作]{つく}り[方]{かた}、[送]{おく}ってもいい？\nかいと：いいよ。[今度]{こんど}、ゆっくり[説明]{せつめい}する。\nRodrigo: Kaito, this is hard to cut.\nKaito: You’re holding the knife slightly wrong. If you hold it like this, it’s easier to cut.\nRodrigo: Oh, you’re right! But is it a bit too thick?\nKaito: It’s fine. Everyone does that at first.\nRodrigo: My sister in Mexico wants to try Japanese soba too. Can I send her the recipe?\nKaito: Sure. Next time I’ll explain it properly.",
       label:"The soba lesson"
      },
      {list:[
        "**[切]{き}りにくい / [切]{き}りやすい**: hard and easy to cut, on the ます stem [切]{き}り.",
        "**[持]{も}ち[方]{かた}**: the way of holding; **[作]{つく}り[方]{かた}**: the way of making, here “the recipe”.",
        "**[太]{ふと}すぎる？**: too thick, with a rising voice as a casual question.",
        "**食べたがってる**: Rodrigo describes his sister’s wish with ～たがっている (casual ～たがってる), not ～たい."
      ]}
     ]
    },
    {
     h:"Common mistakes",
     body:[
      {table:[["✗ Mistake", "✓ Correct", "Why"], ["高いすぎる", "高すぎる", "Drop the い before すぎる."], ["[静]{しず}かなすぎる", "[静]{しず}かすぎる", "な-adjectives use the bare stem."], ["いすぎる", "よすぎる", "いい changes to よ and adds さ."], ["[少]{すく}なさすぎる", "[少]{すく}なすぎる", "[少]{すく}ない is an ordinary い-adjective."], ["書くやすい", "書きやすい", "やすい and にくい follow the ます stem."], ["[漢字]{かんじ}を書き[方]{かた}", "[漢字]{かんじ}の書き[方]{かた}", "[方]{かた} makes a noun, so を becomes の."], ["[勉強]{べんきょう}し[方]{かた}", "[勉強]{べんきょう}の[仕方]{しかた}", "する verbs use noun + の[仕方]{しかた}."], ["(about a friend) ミンさんは行きたいです", "ミンさんは行きたがっています / 行きたいと[言]{い}っていました", "For other people, avoid a bare ～たいです."]]},
      "All five patterns hang on the ます stem, so if a form looks wrong, check the stem first. The full reference, with notes for later levels, is in {{degree-ease-way-wants}}.",
      {terms:["sugiru", "yasui-nikui", "kata-way", "tagaru"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l6-x1",
     type:"mcq",
     q:"How do you say “This bag is too expensive”?",
     options:[
      {t:"このかばんは高すぎます。", ok:true, why:"Right. An い-adjective drops い before すぎる: 高 + すぎます."},
      {t:"このかばんは高いすぎます。", why:"The い has to go: 高すぎます."},
      {t:"このかばんは高くすぎます。", why:"く is the adverb form. すぎる attaches to the bare stem: 高すぎます."},
      {t:"このかばんは高さすぎます。", why:"Only いい and ない add さ (よすぎる, なさすぎる). 高い just drops い."}
     ]
    },
    {
     id:"e3u7-l6-x2",
     type:"match",
     q:"Match each word with its すぎる form.",
     pairs:[
      ["いい (good)", "よすぎる", "いい changes to よ and adds さ."],
      ["[静]{しず}か (quiet)", "しずかすぎる", "A な-adjective: bare stem + すぎる."],
      ["食べる (eat)", "たべすぎる", "A verb: ます stem 食べ + すぎる."],
      ["[少]{すく}ない (few)", "すくなすぎる", "An ordinary い-adjective: drop い."],
      ["(時間が) ない (there isn’t)", "なさすぎる", "ない meaning “there isn’t” adds さ, like いい."]
     ]
    },
    {
     id:"e3u7-l6-x3",
     type:"type",
     q:"Type the noun in hiragana: “how to use” ([使]{つか}う, use) → ＿＿＿＿",
     answer:"つかいかた",
     hint:"Take the ます stem of [使]{つか}う, then add [方]{かた} (read かた).",
     wrongs:[
      {v:"つかうかた", why:"[方]{かた} attaches to the ます stem: [使]{つか}い + [方]{かた} = [使]{つか}い[方]{かた}."},
      {v:"つかいほう", why:"When [方]{かた} means “the way of doing”, it is read かた. ほう is the “side” in ～ほうがいい."},
      {v:"つかったかた", why:"[方]{かた} attaches to the ます stem, not the た-form: [使]{つか}い[方]{かた}."}
     ],
     why:"[使]{つか}います → stem [使]{つか}い → [使]{つか}い[方]{かた} (つかいかた), “how to use”."
    },
    {
     id:"e3u7-l6-x4",
     type:"type",
     q:"Type the missing word in hiragana: “This pen is hard to write with.” 「このペンは＿＿＿＿＿です。」 (書く, write)",
     answer:"かきにくい",
     hint:"ます stem + にくい.",
     wrongs:[
      {v:"かくにくい", why:"にくい follows the ます stem: 書き + にくい."},
      {v:"かけない", why:"書けない means “can’t write” at all. にくい means it is possible but hard: 書きにくい."},
      {v:"かきやすい", why:"That’s the opposite: easy to write with."},
      {v:"かきにくいだ", why:"にくい words are い-adjectives, so no だ. Before です, just 書きにくい."}
     ],
     why:"書きます → stem 書き → 書きにくい, an い-adjective: このペンは書きにくいです."
    },
    {
     id:"e3u7-l6-x5",
     type:"mcq",
     q:"What does 「このコップは[割]{わ}れやすいです。」 mean?",
     options:[
      {t:"This glass breaks easily.", ok:true, why:"Right. With a verb like [割]{わ}れる (break), やすい means “tends to”."},
      {t:"This glass is cheap.", why:"Cheap is [安]{やす}い, a different word. [割]{わ}れやすい is the stem of [割]{わ}れる + やすい."},
      {t:"This glass is hard to break.", why:"That would be [割]{わ}れにくい."},
      {t:"This glass has broken.", why:"That would be [割]{わ}れました. やすい describes a tendency, not an event."}
     ]
    },
    {
     id:"e3u7-l6-x6",
     type:"mcq",
     q:"You want to tell a friend that Sōta wants to play with the cat. Which sentence is natural?",
     options:[
      {t:"そうたくんは[猫]{ねこ}と[遊]{あそ}びたがっています。", ok:true, why:"Right. ～たがっている describes another person’s wish as you can see it."},
      {t:"そうたくんは[猫]{ねこ}と[遊]{あそ}びたいです。", why:"A bare ～たいです about someone else sounds as if you could read his mind. Use ～たがっています."},
      {t:"そうたくんの[猫]{ねこ}が[遊]{あそ}びたがっています。", why:"This says that Sōta’s cat wants to play. It changes who wants what."},
      {t:"そうたくんは[猫]{ねこ}と[遊]{あそ}びたがりです。", why:"たがり is not the form here. Use the verb: [遊]{あそ}びたがっています."}
     ]
    },
    {
     id:"e3u7-l6-x7",
     type:"sort",
     q:"Natural or not natural? Sort the sentences.",
     buckets:["Natural", "Not natural"],
     items:[
      {t:"この[町]{まち}は[住]{す}みやすいです。", b:0, why:"ます stem [住]{す}み + やすい."},
      {t:"[漢字]{かんじ}を書き[方]{かた}が分かりません。", b:1, why:"[方]{かた} makes a noun, so the object takes の: [漢字]{かんじ}の書き[方]{かた}."},
      {t:"[昨日]{きのう}、食べすぎました。", b:0, why:"ます stem 食べ + すぎました."},
      {t:"この[部屋]{へや}は[静]{しず}かなすぎます。", b:1, why:"な-adjectives use the bare stem: [静]{しず}かすぎます."},
      {t:"[勉強]{べんきょう}の[仕方]{しかた}を[教]{おし}えてください。", b:0, why:"する verb: noun + の[仕方]{しかた}."},
      {t:"(to your teacher) [先生]{せんせい}、コーヒーを[飲]{の}みたがっていますか。", b:1, why:"Never use たがる to the person themselves. Ask コーヒーはいかがですか."},
      {t:"[弟]{おとうと}は[新]{あたら}しいゲームを[欲]{ほ}しがっています。", b:0, why:"[欲]{ほ}しがる describes someone else’s wanting, with を."},
      {t:"この[字]{じ}は[小]{ちい}さくて、読みにくいです。", b:0, why:"ます stem 読み + にくい."}
     ]
    },
    {
     id:"e3u7-l6-x8",
     type:"spot",
     q:"Rodrigo writes in his Japanese class diary. Tap each part that is **wrong**.",
     ask:"is wrong",
     parts:[
      "[昨日]{きのう}、かいとさんに",
      {t:"カレーの[作]{つく}り[方]{かた}", flag:false, why:"Correct: noun + の + ます stem + [方]{かた}."},
      "を[教]{おし}えてもらいました。でも、",
      {t:"[辛]{から}いすぎて", flag:true, why:"Drop the い before すぎる: [辛]{から}すぎて."},
      "、[全部]{ぜんぶ}は食べられませんでした。かいとさんのレシピは",
      {t:"分かりやすい", flag:false, why:"Correct: ます stem 分かり + やすい."},
      "ですが、[漢字]{かんじ}が[多]{おお}くて",
      {t:"読むにくい", flag:true, why:"にくい follows the ます stem: 読みにくい."},
      "です。メキシコの[妹]{いもうと}も、日本の[料理]{りょうり}を",
      {t:"[作]{つく}りたいです", flag:true, why:"For someone else, a bare ～たいです sounds odd. Use [作]{つく}りたがっています or [作]{つく}りたいと[言]{い}っていました."},
      "。"
     ]
    }
   ],
   apply:{
    intro:"Describe your own things and people with these patterns. Keep the notes for yourself.",
    tasks:[
     {t:"Too much, too little", how:["Write five sentences with ～すぎる about your life: food, weather, prices, work or study, sleep.", "Include one verb (～すぎました), one い-adjective, one な-adjective and one with よすぎる or なさすぎる.", "Check each one: is “too much” really a problem in that sentence?"], write:"…すぎます。…すぎました。"},
     {t:"Review three things", how:["Pick three things you use: an app, a pen, a pair of shoes, a bag, a website.", "For each, write one sentence with ～やすい or ～にくい and a reason with ～て or ので.", "Add one sentence with やすい meaning “tends to”, such as ～は[壊]{こわ}れやすい."], write:"…は…やすいです。…は…にくいです。"},
     {t:"Ask how", how:["Write four questions with ～[方]{かた}: 読み[方]{かた}, 行き[方]{かた}, [使]{つか}い[方]{かた}, [作]{つく}り[方]{かた}.", "Write one more with a する verb: ～の[仕方]{しかた}.", "Check that every object takes の: ～の～[方]{かた}."], write:"…の…[方]{かた}を[教]{おし}えてください。"},
     {t:"What do they want?", how:["Think of three people or pets you know.", "Describe what each one wants with ～たがっています, ～たがりません or ～たいと[言]{い}っていました.", "Mark any that are about someone above you, and rewrite them politely."], write:"…は…たがっています。…と[言]{い}っていました。"}
    ],
    proof:"Five ～すぎる sentences, three product reviews with ～やすい and ～にくい, five “how to” questions, and three sentences about what other people want."
   },
   read:[
    {book:"taekim", where:"“Expressing Amounts”, section “Saying there's too much of something using 「すぎる」”", note:"Includes よすぎる, なさすぎる and すぎ as a noun."},
    {book:"taekim", where:"“Actions that are easy or hard to do”: 「～やすい、～にくい」, and the variations 「～がたい」 and 「～づらい」", note:"The last part goes beyond N4."},
    {book:"taekim", where:"“Using 「方」 and 「よる」”, section “Using 「方」 to express a way to do something”"},
    {book:"taekim", where:"“Showing signs of something”, section “Showing outward signs of an emotion using 「～がる」”", note:"Covers ～たがる and ～がる with feeling adjectives."},
    {book:"irodori", where:"Elementary 1, Lessons 9 “Will you tell me how to read this?” (V-[方]{かた}) and 16 “I try not to eat too much.” (V-すぎます)", note:"With audio."},
    {book:"irodori", where:"Elementary 2, Lessons 11 “I forgot to bring my point card.” (ナA- ／イA- すぎます) and 12 “This vacuum cleaner is light and easy to move around.” (V-やすいです / V-にくいです)", note:"With audio."}
   ]
  },
  {
   id:"e3u7-l7",
   title:"Coming and going, and asking indirectly: ～てくる, ～ていく, ～か and ～かどうか",
   minutes:60,
   hook:{
    q:"Aoi posts in the house group chat: 「コンビニ[行]{い}ってくるね。」 What does she mean?",
    options:["I’m popping out to the convenience store (and I’ll be back).", "Please come to the convenience store.", "I’ve just come back from the convenience store.", "I’m going to the convenience store and staying there."],
    answer:0,
    reveal:"**I’m popping out to the convenience store.** ～てくる after a verb can mean “go and do something, then come back”. It is the same くる as in いってきます, which literally means “I’ll go and come back”. This lesson covers ～てくる and ～ていく, which add direction and change over time, and then shows how to put a question inside a sentence: [何時]{なんじ}か[分]{わ}かりません, [来]{く}るかどうか[分]{わ}かりません."
   },
   goals:[
    "Use ～てくる and ～ていく for direction: toward you ([持]{も}ってくる) and away ([持]{も}っていく)",
    "Say “go and do something, then come back” with ～てくる",
    "Describe change over time with ～てきた (up to now) and ～ていく (from now on)",
    "Put a question-word question inside a sentence: [何時]{なんじ}に[始]{はじ}まるか、[知]{し}っていますか",
    "Put a yes-no question inside a sentence with ～かどうか"
   ],
   learn:[
    {
     h:"Toward you and away: ～てくる and ～ていく",
     body:[
      {lead:"くる (come) is movement toward where the speaker is; いく (go) is movement away. After a て-form they add that direction to another verb."},
      {table:[["Verb", "～てくる (toward here)", "～ていく (away from here)"], ["[持]{も}つ (hold)", "[持]{も}ってくる: bring (a thing)", "[持]{も}っていく: take (a thing)"], ["[連]{つ}れる (take along)", "[連]{つ}れてくる: bring (a person)", "[連]{つ}れていく: take (a person)"], ["[帰]{かえ}る (return)", "[帰]{かえ}ってくる: come back (here)", "[帰]{かえ}っていく: go back (there)"], ["[走]{はし}る (run)", "[走]{はし}ってくる: come running", "[走]{はし}っていく: run off"]]},
      "As helpers, くる and いく are usually written in hiragana, and they conjugate as usual: [持]{も}ってきます, [持]{も}ってきた, [持]{も}ってこない; [持]{も}っていきます, [持]{も}っていった. The glossary entry is [[te-kuru-te-iku]].",
      {
       ex:"[明日]{あした}のパーティーに、[飲]{の}み[物]{もの}を[持]{も}っていきます。\nI’ll take some drinks to tomorrow’s party.\n\n[友]{とも}だちを[連]{つ}れてきてもいいですか。\nMay I bring a friend?\n\n[猫]{ねこ}が[庭]{にわ}に[入]{はい}ってきました。\nThe cat came into the garden.\n\n[駅]{えき}から[歩]{ある}いてきました。\nI walked here from the station.",
       label:"Direction"
      },
      "The choice depends on where **you** are, or will be. If you are hosting a party, you say [飲]{の}み[物]{もの}を[持]{も}ってきてください (please bring drinks). If you are a guest talking about it beforehand, you say [持]{も}っていきます (I’ll take some).",
      {warn:"English “bring” often follows the listener: “I’ll bring snacks to your place.” Japanese usually follows the speaker: unless you are already there, it is お[菓子]{かし}を[持]{も}っていきます. When you ask a host about their own party, you will hear both: [連]{つ}れていってもいいですか (from where you are now) and [連]{つ}れてきてもいいですか (from the host’s side)."},
      "～てくる also marks actions that come **toward you** from someone else: 友だちがメッセージを[送]{おく}ってきました (A friend sent me a message), [母]{はは}が[電話]{でんわ}をかけてきました (My mother called me)."
     ]
    },
    {
     h:"Go and do, then come back: ～てくる",
     body:[
      "～てくる has an everyday meaning that English expresses with “go and…”: go somewhere, do something, and come back.",
      {
       ex:"ちょっと[郵便局]{ゆうびんきょく}に行ってきます。\nI’m just going to the post office (and I’ll be back).\n\n[飲]{の}み[物]{もの}を[買]{か}ってくるね。\nI’ll go and get some drinks.\n\nちょっと[外]{そと}を[見]{み}てきます。\nI’ll go and take a look outside.",
       label:"Go and do"
      },
      "This is why you say いってきます (I’ll go and come back) when you leave home, and いってらっしゃい (go and come back) to someone who is leaving. When they return: ただいま and おかえりなさい.",
      "At work you will hear the same pattern when someone steps out for a short while: [昼]{ひる}ご[飯]{はん}を[食]{た}べてきます (I’m going to get lunch), ちょっと[銀行]{ぎんこう}に[行]{い}ってきます (I’m just popping to the bank). Both promise that the speaker will be back, which is exactly what ～てくる says.",
      "Compare [買]{か}ってくる (go and buy, then come back) with [買]{か}っていく (buy and take it with you, somewhere else): ケーキを[買]{か}っていきます means you will buy a cake on the way and take it there."
     ]
    },
    {
     h:"Change over time",
     body:[
      "With verbs of change, such as なる (become), [増]{ふ}える (increase), [慣]{な}れる (get used to) and 分かる (understand), くる and いく move along a timeline instead of a map. ～てくる shows a change that has been happening **up to now**, or has just started. ～ていく shows a change that will continue **from now on**.",
      {
       fig:"<svg viewBox=\"0 0 340 204\"><defs><marker id=\"e3u7b1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0L10 5L0 10z\"/></marker></defs><text x=\"170\" y=\"20\" text-anchor=\"middle\">Change over time</text><path class=\"d-ink\" d=\"M8 100H332\" stroke-width=\"2\" marker-end=\"url(#e3u7b1)\"/><rect class=\"d-lup\" x=\"14\" y=\"86\" width=\"144\" height=\"28\" rx=\"6\" stroke-width=\"2\"/><text x=\"86\" y=\"105\" text-anchor=\"middle\">なってきた</text><rect class=\"d-sage\" x=\"182\" y=\"86\" width=\"136\" height=\"28\" rx=\"6\" stroke-width=\"2\"/><text x=\"250\" y=\"105\" text-anchor=\"middle\">なっていく</text><path class=\"d-ink\" d=\"M170 68V132\" stroke-width=\"2\"/><text class=\"s\" x=\"170\" y=\"60\" text-anchor=\"middle\">now</text><text class=\"s\" x=\"86\" y=\"140\" text-anchor=\"middle\">up to now</text><text class=\"s\" x=\"250\" y=\"140\" text-anchor=\"middle\">from now on</text><text class=\"s\" x=\"86\" y=\"158\" text-anchor=\"middle\">～てくる</text><text class=\"s\" x=\"250\" y=\"158\" text-anchor=\"middle\">～ていく</text><text class=\"s\" x=\"86\" y=\"188\" text-anchor=\"middle\">さむく なってきた</text><text class=\"s\" x=\"250\" y=\"188\" text-anchor=\"middle\">もっと さむく なっていく</text></svg>",
       alt:"A timeline with a mark for now in the middle. Before now: なってきた, up to now, ～てくる, with the example さむく なってきた (it has been getting colder). After now: なっていく, from now on, ～ていく, with the example もっと さむく なっていく (it will get colder and colder).",
       cap:"Stand at “now”: a change coming toward you takes くる, a change going on ahead of you takes いく."
      },
      {
       ex:"だんだん[寒]{さむ}くなってきましたね。\nIt’s been getting colder, hasn’t it?\n\n[日本]{にほん}の[生活]{せいかつ}に、[少]{すこ}しずつ[慣]{な}れてきました。\nI’ve been getting used to life in Japan, little by little.\n\nこれからも、[日本語]{にほんご}の[勉強]{べんきょう}を[続]{つづ}けていきたいです。\nI want to keep on studying Japanese from now on.\n\nあ、[雨]{あめ}が[降]{ふ}ってきました。\nOh, it’s started to rain.",
       label:"Change over time"
      },
      "With weather and the body, ～てきた often means “has started to”: 雨が[降]{ふ}ってきました (It’s started to rain), おなかがすいてきた (I’m getting hungry). ✗ 雨が[降]{ふ}っていきました.",
      {table:[["Use of ～てくる", "Example", "English"], ["direction: toward here", "本を[持]{も}ってきた", "brought a book"], ["go, do, come back", "パンを[買]{か}ってくる", "go and buy bread"], ["an action toward me", "メッセージを[送]{おく}ってきた", "sent me a message"], ["change up to now", "日本の[生活]{せいかつ}に[慣]{な}れてきた", "have got used to life in Japan"], ["a start", "雨が[降]{ふ}ってきた", "it’s started to rain"]]},
      "The same verb くる does all five jobs, so the context decides. If there is movement in the sentence, think direction; if there is a verb of change, think time."
     ]
    },
    {
     h:"Questions inside sentences: ～か",
     body:[
      {lead:"Sometimes a question is part of a bigger sentence: “I don’t know **what time it starts**”, “Do you remember **where you put it**?” Japanese puts the question, in the plain form, followed by か, in front of the main verb."},
      "This is an [[embedded-question]]. The question keeps its question word ([何]{なに}, いつ, どこ, [誰]{だれ}, どう…), the verb goes into the plain form, and か closes it. After a noun or な-adjective, だ is dropped: [何時]{なんじ}か, どこか. Inside, は often becomes が, as in other clauses: [会議]{かいぎ}**が**[何時]{なんじ}に[始]{はじ}まるか. (は is also heard when the noun is the topic of the whole sentence: [会議]{かいぎ}は[何時]{なんじ}に[始]{はじ}まるか、[知]{し}っていますか.)",
      {table:[["Direct question", "Inside a sentence"], ["[会議]{かいぎ}は何時に[始]{はじ}まりますか。", "[会議]{かいぎ}が何時に[始]{はじ}まるか、[知]{し}っていますか。"], ["[駅]{えき}はどこですか。", "[駅]{えき}がどこか、分かりません。"], ["どこに[置]{お}きましたか。", "どこに[置]{お}いたか、[覚]{おぼ}えていません。"], ["これは何ですか。", "これが何か、[教]{おし}えてください。"]]},
      {
       ex:"イエンさんがいつ[帰]{かえ}ってくるか、[聞]{き}いてみます。\nI’ll ask when Yến is coming back.\n\n[何]{なに}を[買]{か}えばいいか、分かりません。\nI don’t know what I should buy.\n\nこの[漢字]{かんじ}をどう[読]{よ}むか、[教]{おし}えてください。\nPlease tell me how to read this kanji.",
       label:"Question word + か"
      },
      "Common main verbs: 分かる, [知]{し}っている, [覚]{おぼ}えている, [忘]{わす}れる, 聞く, [教]{おし}える, [考]{かんが}える, [決]{き}める. Particles such as を and が after か are usually left out in speech: [何時]{なんじ}に[始]{はじ}まるか(を)[知]{し}っていますか."
     ]
    },
    {
     h:"Whether or not: ～かどうか",
     body:[
      "For a yes-no question there is no question word, so Japanese adds どうか: [[ka-dou-ka|～かどうか]], “whether (or not)”. Nouns and な-adjectives again drop だ: [本当]{ほんとう}かどうか, [大丈夫]{だいじょうぶ}かどうか.",
      {
       ex:"[明日]{あした}、パーティーに行けるかどうか、まだ分かりません。\nI don’t know yet whether I can go to the party tomorrow.\n\nあおいさんが[来]{く}るかどうか、聞いてみてくれる？\nCould you ask whether Aoi is coming?\n\nこの[答]{こた}えが[正]{ただ}しいかどうか、[確]{たし}かめてください。\nPlease check whether this answer is correct.\n\nその[話]{はなし}が[本当]{ほんとう}かどうか、[誰]{だれ}も[知]{し}りません。\nNobody knows whether that story is true.",
       label:"～かどうか"
      },
      "Two other ways you will meet: どうか can be left out ([来]{く}るか、[分]{わ}かりません), and you can list both answers: [来]{く}るか[来]{こ}ないか、[分]{わ}かりません (whether they’ll come or not).",
      "Any plain form can go inside, including the past and the negative: [宿題]{しゅくだい}を[出]{だ}したかどうか[覚]{おぼ}えていません (I don’t remember whether I handed in the homework), [誰]{だれ}が[来]{こ}なかったか[知]{し}っていますか (Do you know who didn’t come?).",
      {key:"A question word inside → ～か. No question word (yes or no) → ～かどうか. Never both: ✗ 何時かどうか."},
      "Embedded questions are also a polite way to ask, because they leave the listener room: [会議]{かいぎ}が何時か、[教]{おし}えてもらえませんか sounds softer than [会議]{かいぎ}は何時ですか."
     ]
    },
    {
     h:"In conversation: the barbecue",
     body:[
      "Mariya and Aoi are getting ready for a university barbecue tomorrow. Listen for direction, change and indirect questions.",
      {
       ex:"まりや：あおいさん、[明日]{あした}のバーベキュー、[何]{なに}か[持]{も}っていく？\nあおい：うん、[飲]{の}み[物]{もの}を[買]{か}っていくつもり。まりやちゃんは？\nまりや：[島]{しま}の[母]{はは}が[魚]{さかな}を[送]{おく}ってきたから、それを[持]{も}っていこうかな。\nあおい：いいね。でも、[会場]{かいじょう}で[魚]{さかな}を[焼]{や}いてもいいかどうか、[分]{わ}からないよね。\nまりや：じゃあ、トビーさんに[聞]{き}いてくる。[何時]{なんじ}に[始]{はじ}まるかも[聞]{き}いておくね。\nあおい：ありがとう。だんだん[暑]{あつ}くなってきたから、[魚]{さかな}は[冷]{ひ}やして[持]{も}っていったほうがいいよ。\nMariya: Aoi, are you taking anything to tomorrow’s barbecue?\nAoi: Yes, I’m going to buy some drinks on the way. What about you, Mariya?\nMariya: My mom on the island sent me some fish, so maybe I’ll take that.\nAoi: Nice. But we don’t know whether we’re allowed to grill fish there, do we?\nMariya: I’ll go and ask Toby, then. I’ll ask him what time it starts, too.\nAoi: Thanks. It’s been getting hotter, so you’d better keep the fish cold when you take it.",
       label:"The barbecue"
      },
      {list:[
        "**[持]{も}っていく, [買]{か}っていく**: they are at home, talking about taking things to the barbecue.",
        "**[送]{おく}ってきた**: the fish came toward Mariya, from her mother on the island.",
        "**[焼]{や}いてもいいかどうか** and **何時に[始]{はじ}まるか**: a yes-no question and a question-word question inside sentences.",
        "**聞いてくる**: Mariya will go to Toby’s room, ask, and come back.",
        "**[暑]{あつ}くなってきた**: a change that has been happening up to now."
      ]},
      "One false friend: どうか on its own, as in どうかよろしくお[願]{ねが}いします, is a different word meaning “please, I beg you”. In ～かどうか it always follows か."
     ]
    },
    {
     h:"Common mistakes",
     body:[
      {table:[["✗ Mistake", "✓ Correct", "Why"], ["[会議]{かいぎ}は何時ですか[知]{し}っていますか", "[会議]{かいぎ}が何時か[知]{し}っていますか", "Inside a sentence: plain form + か, with no です."], ["[来]{き}ますかどうか", "[来]{く}るかどうか", "Use the plain form inside."], ["[本当]{ほんとう}だかどうか", "[本当]{ほんとう}かどうか", "Nouns and な-adjectives drop だ before か."], ["どこかどうか分かりません", "どこか分かりません", "With a question word, no どうか."], ["(you are the host) [飲]{の}み[物]{もの}を[持]{も}っていってください", "[飲]{の}み[物]{もの}を[持]{も}ってきてください", "Toward where you are: くる."], ["雨が[降]{ふ}っていきました", "雨が[降]{ふ}ってきました", "A change that has started: ～てきた."]]},
      "With this lesson you have met the core grammar of N4. Unit 8 turns to N4 kanji and reading, where all of these patterns appear again in real texts. The full reference for this lesson, with notes for later levels, is in {{direction-and-embedded-questions}}.",
      {terms:["te-kuru-te-iku", "embedded-question", "ka-dou-ka"]}
     ]
    }
   ],
   try:[
    {
     id:"e3u7-l7-x1",
     type:"mcq",
     q:"You are hosting a party at your place. You ask your guests: 「[飲]{の}み[物]{もの}を＿＿＿ください。」 Which form fits?",
     options:[
      {t:"[持]{も}ってきて", ok:true, why:"Right. The drinks come toward you, the host: [持]{も}ってきてください (please bring)."},
      {t:"[持]{も}っていって", why:"[持]{も}っていってください means “please take (them) away from here”."},
      {t:"[持]{も}ちてきて", why:"The て-form of [持]{も}つ is [持]{も}って (つ → って)."},
      {t:"[持]{も}ってみて", why:"～てみる means “try”: “please try holding the drinks”."}
     ]
    },
    {
     id:"e3u7-l7-x2",
     type:"mcq",
     q:"Kaito says: 「ちょっとパン[買]{か}ってくる。」 What will he do?",
     options:[
      {t:"Go out, buy some bread and come back.", ok:true, why:"Right. ～てくる here means go and do something, then come back."},
      {t:"Buy bread on the way and take it somewhere else.", why:"That would be パンを[買]{か}っていく."},
      {t:"He has already bought the bread.", why:"[買]{か}ってくる is non-past: he is about to go."},
      {t:"He is asking you to buy bread.", why:"A request would be パン[買]{か}ってきて."}
     ]
    },
    {
     id:"e3u7-l7-x3",
     type:"sort",
     q:"Up to now, or from now on? Sort the sentences.",
     buckets:["Change up to now (～てきた)", "Change from now on (～ていく)"],
     items:[
      {t:"だんだん[暑]{あつ}くなってきました。", b:0, why:"～てきました: it has been getting hotter up to now."},
      {t:"日本語が[少]{すこ}しずつ分かってきました。", b:0, why:"～てきました: understanding has grown up to now."},
      {t:"雨が[降]{ふ}ってきました。", b:0, why:"～てきました: the rain has just started."},
      {t:"これからも[練習]{れんしゅう}を[続]{つづ}けていきます。", b:1, why:"～ていきます with これからも: from now on."},
      {t:"これから、もっと[寒]{さむ}くなっていくでしょう。", b:1, why:"～ていく with これから: the change will continue."},
      {t:"この[町]{まち}で、友だちを[増]{ふ}やしていきたいです。", b:1, why:"～ていきたい: a change you want to keep making from now on."}
     ]
    },
    {
     id:"e3u7-l7-x4",
     type:"type",
     q:"Kaito tells the house chat that he will go and buy drinks, then come back. Type the missing part in hiragana: 「[飲]{の}み[物]{もの}、＿＿＿＿＿ね。」 ([買]{か}う, buy)",
     answer:["かってくる","かってきます"],
     hint:"The て-form of [買]{か}う, then くる.",
     wrongs:[
      {v:"かっていく", why:"[買]{か}っていく means buying them and taking them somewhere else. He is coming back: [買]{か}ってくる."},
      {v:"かいてくる", why:"かいて is the て-form of [書]{か}く (write). [買]{か}う → [買]{か}って."},
      {v:"かってきる", why:"くる is irregular: its dictionary form is くる, not きる."}
     ],
     why:"[買]{か}う → [買]{か}って (う → って) + くる: go and buy, then come back. In the casual house chat, [買]{か}ってくるね; politely, [買]{か}ってきますね."
    },
    {
     id:"e3u7-l7-x5",
     type:"type",
     q:"Type the missing part in hiragana, using ～かどうか: “I don’t know whether Aoi is coming tomorrow.” 「あおいさんが[明日]{あした}＿＿＿＿＿＿、分かりません。」 ([来]{く}る, come)",
     answer:["くるかどうか", "くるのかどうか"],
     hint:"Plain form of [来]{く}る + かどうか.",
     wrongs:[
      {v:"きますかどうか", why:"Inside a sentence, use the plain form: [来]{く}るかどうか."},
      {v:"くるどうか", why:"You need か before どうか: [来]{く}るかどうか."},
      {v:"くるか", why:"That is also correct Japanese (どうか can be left out), but this question asks for ～かどうか: [来]{く}るかどうか."},
      {v:"こないかどうか", why:"The negative changes the question to “whether she isn’t coming”. Use [来]{く}るかどうか."}
     ],
     why:"[来]{く}る (plain) + かどうか: whether she is coming. [来]{く}るのかどうか, with explanatory の, is also natural."
    },
    {
     id:"e3u7-l7-x6",
     type:"mcq",
     q:"You want to say “I don’t remember where I put my key.” Which sentence is correct?",
     options:[
      {t:"[鍵]{かぎ}をどこに[置]{お}いたか、[覚]{おぼ}えていません。", ok:true, why:"Right. Question word + plain form + か, then the main verb."},
      {t:"[鍵]{かぎ}をどこに[置]{お}きましたか、[覚]{おぼ}えていません。", why:"Inside a sentence, the question takes the plain form: [置]{お}いたか."},
      {t:"[鍵]{かぎ}をどこに[置]{お}いたかどうか、[覚]{おぼ}えていません。", why:"With a question word (どこ), use か alone, not かどうか."},
      {t:"[鍵]{かぎ}をどこに[置]{お}いた、[覚]{おぼ}えていません。", why:"Without か, the question part doesn’t work. Add か: [置]{お}いたか."}
     ]
    },
    {
     id:"e3u7-l7-x7",
     type:"match",
     q:"Match each sentence with its meaning.",
     pairs:[
      ["本を[持]{も}ってきました。", "I brought a book (here).", "～てくる: toward the speaker."],
      ["本を[持]{も}っていきました。", "I took a book (there).", "～ていく: away from the speaker."],
      ["本を[買]{か}ってきました。", "I went and bought a book (and came back).", "～てくる: go, do something, come back."],
      ["[漢字]{かんじ}が分かってきました。", "I’ve started to understand kanji.", "～てきた with a change: up to now."]
     ]
    },
    {
     id:"e3u7-l7-x8",
     type:"type",
     q:"Type the missing verb form in hiragana: “Oh, it’s started to rain.” 「あ、雨が＿＿＿きました。」 ([降]{ふ}る, fall)",
     answer:"ふって",
     hint:"～てくる needs the て-form.",
     wrongs:[
      {v:"ふり", why:"～てくる follows the て-form, not the ます stem: [降]{ふ}って."},
      {v:"ふった", why:"Before きました use the て-form: [降]{ふ}ってきました."},
      {v:"ふて", why:"[降]{ふ}る is a godan verb, so る → って: [降]{ふ}って."}
     ],
     why:"[降]{ふ}る → [降]{ふ}って (godan: る → って) + きました: the rain has started, up to now."
    },
    {
     id:"e3u7-l7-x9",
     type:"spot",
     q:"Cheska writes to Yến about a study session at the university library. Tap each part that is **wrong**.",
     ask:"is wrong",
     parts:[
      "イエンさん、[明日]{あした}の[勉強会]{べんきょうかい}は[大学]{だいがく}の[図書館]{としょかん}ですね。",
      {t:"何時に[始]{はじ}まるか", flag:false, why:"Correct: question word + plain form + か."},
      "、[教]{おし}えてもらえませんか。[私]{わたし}はお[菓子]{かし}を",
      {t:"[持]{も}ってきます", flag:true, why:"Cheska is at home, talking about taking snacks to the library, away from where she is: [持]{も}っていきます. English “bring” misleads here."},
      "。トビーさんが",
      {t:"[来]{き}ますかどうか", flag:true, why:"Inside a sentence, use the plain form: [来]{く}るかどうか."},
      "、まだ分かりません。それから、",
      {t:"[図書館]{としょかん}で食べてもいいかどうか", flag:false, why:"Correct: a yes-no question in the plain form + かどうか."},
      "、[知]{し}っていますか。"
     ]
    }
   ],
   apply:{
    intro:"Use direction, change and indirect questions about your own life. Keep the notes for yourself.",
    tasks:[
     {t:"Bring and take", how:["Imagine a party or a visit to a friend’s home.", "Write four sentences: what you will take (～ていきます), what the host asks guests to bring (～てきてください), who you will take with you ([連]{つ}れていきます), and something you will go and buy first (～てきます).", "Check each one: where are you when you say it?"], write:"…を[持]{も}っていきます。…を[持]{も}ってきてください。"},
     {t:"How things have changed", how:["Write three sentences with ～てきました about changes in your life or your Japanese.", "Write three with ～ていきたいです about what you want to keep doing from now on.", "Add one weather sentence with ～てきました meaning “has started to”."], write:"…てきました。…ていきたいです。"},
     {t:"Things I don’t know yet", how:["Write five sentences about things you are unsure of this week.", "Use a question word + か in three of them, and ～かどうか in two.", "Check that every embedded question is in the plain form, with no だ after nouns."], write:"…か、分かりません。…かどうか、…"}
    ],
    proof:"Four sentences about bringing and taking, seven about change over time, and five embedded questions, each checked for the plain form."
   },
   read:[
    {book:"taekim", where:"“Other uses of the te-form”, section “Using motion verbs （行く、来る） with the te-form”", note:"Direction, and change over time, with examples."},
    {book:"taekim", where:"“The Question Marker”, section “「か」 used in relative clauses”", note:"Embedded questions, including どうか and 行ったか行かなかったか."},
    {book:"irodori", where:"Elementary 1, Lesson 11 “I will bring meat and vegetables.” (V-て[行]{い}きます／[来]{き}ます)", note:"Bringing things to a party, with audio."},
    {book:"irodori", where:"Elementary 2, Lessons 8 “Do you know where the food stands are?” (【interrogative】＋S（plain-form）か、～) and 16 “Do not panic in case of an earthquake.” (V（plain-form）かどうか、～)", note:"Embedded questions in everyday situations, with audio."},
    {book:"irodori", where:"Pre-Intermediate, Lesson 10 “How do you study Japanese?” (V-てくる)", note:"～てくる for change over time."}
   ]
  }
 ],
 checkpoint:["e3u7-q01", "e3u7-q05", "e3u7-q11", "e3u7-q13", "e3u7-q20", "e3u7-q23", "e3u7-q26", "e3u7-q31", "e3u7-q34", "e3u7-q41", "e3u7-q45", "e3u7-q47"],
  cpBank:[
    {id:"e3u7-cp01", lesson:"e3u7-l1", level:1, q:"[呼]{よ}ぶ (call) is a godan verb. What is its passive form (“be called”)?", options:[
      {t:"[呼]{よ}べる", why:"This is the potential form, “can call”. The passive uses the あ row + れる."},
      {t:"[呼]{よ}ばせる", why:"This is the causative, “make or let someone call”."},
      {t:"[呼]{よ}ばれる", ok:true, why:"Godan verbs move to the あ row and add れる: ぶ → ば + れる."},
      {t:"[呼]{よ}びられる", why:"られる is for ichidan verbs, added to the stem. [呼]{よ}ぶ is godan: [呼]{よ}ばれる."}]},
    {id:"e3u7-cp02", lesson:"e3u7-l2", level:1, q:"What is the causative form of する (make or let someone do)?", options:[
      {t:"される", why:"される is the passive of する: “be done”."},
      {t:"させる", ok:true, why:"する is irregular: its causative is させる, as in [掃除]{そうじ}させる (make someone clean)."},
      {t:"できる", why:"できる is the potential of する: “can do”."},
      {t:"しさせる", why:"させる replaces する completely. You don’t keep し."}]},
    {id:"e3u7-cp03", lesson:"e3u7-l6", level:1, q:"Mariya’s new bag is light, with a good handle. How does she say “It’s easy to carry”?", options:[
      {t:"[持]{も}ちにくいです", why:"～にくい means “hard to do”: the opposite."},
      {t:"[持]{も}ちすぎます", why:"～すぎる means “too much”: “I carry too much.”"},
      {t:"[持]{も}ちたがります", why:"～たがる describes what someone else wants to do."},
      {t:"[持]{も}ちやすいです", ok:true, why:"ます stem + やすい means “easy to do”: [持]{も}ちやすい, easy to carry."}]},
    {id:"e3u7-cp04", lesson:"e3u7-l1", level:2, q:"A poster says 「この[町]{まち}の[夏祭]{なつまつ}りは、[毎年]{まいとし}[八月]{はちがつ}に[開]{ひら}かれます。」 What does it mean?", options:[
      {t:"The summer festival is held in August every year", ok:true, why:"[開]{ひら}く (hold an event) in the passive, [開]{ひら}かれる: notices use the passive for events, without naming who holds them."},
      {t:"The town opens its doors in August every year", why:"[開]{ひら}かれる here goes with [夏祭]{なつまつ}り: it is the festival that is held."},
      {t:"The summer festival can be held in August", why:"“Can be held” would be a potential form. [開]{ひら}かれます here is the passive of an event: it is held."},
      {t:"Someone opened the festival last August", why:"毎年 (every year) and the non-past ます describe what happens each year, not one past event."}]},
    {id:"e3u7-cp05", lesson:"e3u7-l3", level:2, q:"Aoi told Cheska that today’s seminar is canceled ([休講]{きゅうこう}, a noun). How does Cheska pass this on?", options:[
      {t:"「[今日]{きょう}のゼミは[休講]{きゅうこう}だそうです。」", ok:true, why:"Hearsay そうだ follows plain forms, and a noun takes だ: [休講]{きゅうこう}だそうです, “I hear the seminar is canceled”."},
      {t:"「[今日]{きょう}のゼミは[休講]{きゅうこう}そうです。」", why:"Appearance そう doesn’t attach to nouns, and hearsay needs だ: [休講]{きゅうこう}だそうです."},
      {t:"「[今日]{きょう}のゼミは[休講]{きゅうこう}のそうです。」", why:"そうだ doesn’t take の. After a noun, use だ: [休講]{きゅうこう}だそうです."},
      {t:"「[今日]{きょう}のゼミは[休講]{きゅうこう}でそうです。」", why:"There is no で here. Plain noun + だ + そうです."}]},
    {id:"e3u7-cp06", lesson:"e3u7-l4", level:2, q:"Fumiko set out chairs in rows for the neighborhood meeting. When Cheska comes in, which sentence shows it was done on purpose?", options:[
      {t:"「あ、いすが[並]{なら}んでいます。」", why:"Intransitive + ている says only that the chairs are in rows now. It doesn’t say anyone did it on purpose."},
      {t:"「あ、いすが[並]{なら}びました。」", why:"[並]{なら}ぶ is intransitive, “line up”, as people do in a line. It doesn’t show that someone set the chairs out."},
      {t:"「あ、いすが[並]{なら}べてあります。」", ok:true, why:"Transitive + てある (with が) describes a state that someone created on purpose."},
      {t:"「あ、いすが[並]{なら}べています。」", why:"[並]{なら}べる is transitive and needs を: いすを[並]{なら}べています, “someone is setting out the chairs”."}]},
    {id:"e3u7-cp07", lesson:"e3u7-l5", level:3, q:"Rodrigo’s teacher offers to show him her photos of Mexico. How does he say, humbly, “May I look at them?”", options:[
      {t:"「ご[覧]{らん}になってもいいですか。」", why:"ご[覧]{らん}になる is respectful ([尊敬語]{そんけいご}), for what the other person does. For your own action, use the humble form."},
      {t:"「[拝見]{はいけん}してもいいですか。」", ok:true, why:"[拝見]{はいけん}する is the humble ([謙譲語]{けんじょうご}) verb for [見]{み}る: it lowers Rodrigo’s own action."},
      {t:"「[見]{み}られてもいいですか。」", why:"見られる here would be the passive, “May I be seen?”"},
      {t:"「[拝見]{はいけん}されてもいいですか。」", why:"[拝見]{はいけん}する is already humble. Making it passive turns it into nonsense."}]},
    {id:"e3u7-cp08", lesson:"e3u7-l7", level:2, q:"A report says the town’s population will keep getting smaller from now on. Which form fits? 「これから、[町]{まち}の[人口]{じんこう}は[少]{すく}なく＿＿でしょう。」", options:[
      {t:"なってきた", why:"～てきた describes a change up to now. これから points to the future."},
      {t:"なっていく", ok:true, why:"～ていく describes a change that continues from now on: “will go on getting smaller”."},
      {t:"なってある", why:"～てある is for states that someone created on purpose. なる is intransitive."},
      {t:"なっておく", why:"～ておく is doing something ahead of time. A population can’t prepare."}]},
    {id:"e3u7-cp09", lesson:"e3u7-l6", level:2, q:"Toby says 「このかばんは[重]{おも}すぎて、[持]{も}てません。」 What does he mean?", options:[
      {t:"The bag is a little heavy, but he can carry it", why:"[持]{も}てません is the negative potential: he can’t carry it."},
      {t:"The bag is so heavy that he can’t carry it", ok:true, why:"い-adjective stem + すぎる means “too”: [重]{おも}すぎて gives the reason, and [持]{も}てません says he can’t."},
      {t:"The bag is easy to carry", why:"“Easy to carry” is [持]{も}ちやすい. すぎる means “too much”."},
      {t:"Someone made him carry the heavy bag", why:"“Made to carry” would be the causative-passive, [持]{も}たされる."}]},
    {id:"e3u7-cp10", lesson:"e3u7-l2", level:3, q:"Kaito’s manager at the convenience store made him work late, though he didn’t want to. Which fits? 「[店長]{てんちょう}に[夜]{よる}[遅]{おそ}くまで[働]{はたら}＿＿。」", options:[
      {t:"かせました", why:"[働]{はたら}かせました is the causative: Kaito would be making someone else work."},
      {t:"かれました", why:"[働]{はたら}かれました is the passive. It doesn’t say that someone made him do it."},
      {t:"かされました", ok:true, why:"The causative-passive (here the short form [働]{はたら}かされる) says he was made to work, against his wishes."},
      {t:"かせてもらいました", why:"～させてもらう means he was allowed to, and is grateful. He didn’t want to work late."}]},
    {id:"e3u7-cp11", lesson:"e3u7-l3", level:3, q:"Nobody has told Kaito anything, but he sees Toby’s shoes at the door and the light on in his room. What does he say?", options:[
      {t:"「トビーさんは[帰]{かえ}っているそうです。」", why:"Hearsay そうだ needs a source: someone told you. Kaito is judging from what he sees."},
      {t:"「トビーさんは[帰]{かえ}りそうです。」", why:"Stem + そう means something looks about to happen: “Toby looks about to go home.”"},
      {t:"「トビーさんは[帰]{かえ}ってくるようです。」", why:"[帰]{かえ}ってくる is about coming back later. The shoes and the light show he is already home."},
      {t:"「トビーさんは[帰]{かえ}っているようです。」", ok:true, why:"～ようです is a judgment from what you see yourself: the shoes and the light."}]},
    {id:"e3u7-cp12", lesson:"e3u7-l7", level:3, q:"Mariya says 「パン[屋]{や}が[開]{あ}いているかどうか、[見]{み}てくるね。」 What will she do?", options:[
      {t:"Look up the bakery’s opening hours on her phone", why:"見てくる is “go and look, then come back”. She is going there."},
      {t:"Go and check whether the bakery is open, then come back", ok:true, why:"～かどうか is “whether or not”, and ～てくる is “go and do, then come back”."},
      {t:"Buy bread if it is open and take it to a friend", why:"Taking something away to somewhere else would be ～ていく. She will come back."},
      {t:"Wait in front of the bakery until it opens", why:"Nothing here says she will wait. ～てくる means she comes back after checking."}]}
  ],
 codex:[
  {
   id:"passive-form",
   title:"The passive (～れる・～られる)",
   aka:["passive", "passive voice in Japanese", "ukemi", "受身", "うけみ", "～れる", "～られる", "suffering passive", "迷惑の受身", "indirect passive"],
   tags:["japanese", "grammar", "n4", "verbs"],
   summary:"How to build the passive of any verb, and its uses: things done to people, actions on your body or belongings, things as the subject, によって for creators, and the “suffering” passive.",
   levels:{
    starter:[
     "The **passive** turns a sentence around so that the person or thing an action happens to becomes the topic. [先生]{せんせい}がまりやさんをほめました (The teacher praised Mariya) becomes まりやさんは先生にほめられました (Mariya was praised by the teacher). The doer takes に, or can be left out.",
     "To build it, take the ない-form stem. Godan verbs add れる ([書]{か}かない → 書かれる, [言]{い}わない → [言]{い}われる); ichidan verbs add られる ([食]{た}べられる). する becomes される and [来]{く}る becomes [来]{こ}られる.",
     "Japanese uses the passive more than English does, especially to tell a story from the point of view of the person it happened to: [電車]{でんしゃ}で[足]{あし}を[踏]{ふ}まれました (Someone stepped on my foot on the train). It can even say that an event was a nuisance for you: [雨]{あめ}に[降]{ふ}られました (I got caught in the rain).",
     "The forms take a little practice. Make a table of ten verbs you know, say the passive of each aloud, and review it for a few days."
    ],
    builder:[
     {
      table:[
       ["Group", "Rule", "Examples"],
       ["Godan", "あ-row + れる (う → わ)", "[書]{か}かれる, [読]{よ}まれる, [呼]{よ}ばれる, [話]{はな}される, [言]{い}われる"],
       ["Ichidan", "drop る + られる", "[食]{た}べられる, [見]{み}られる, [建]{た}てられる"],
       ["Irregular", "by heart", "する → される, [来]{く}る → [来]{こ}られる"]
      ]
     },
     "Every passive verb conjugates as an ichidan verb: 書かれます, 書かれた, 書かれて, 書かれている.",
     "**Sentence patterns**",
     {
      list:[
       "**Done to a person:** person は doer に passive. あおいさんは[部長]{ぶちょう}に[呼]{よ}ばれました. With verbs of saying and giving, から is also common: [先生]{せんせい}から[注意]{ちゅうい}されました.",
       "**Done to your body or belongings:** you are still the topic, and the thing keeps を. [財布]{さいふ}を[盗]{ぬす}まれました; [足]{あし}を[踏]{ふ}まれました. [私]{わたし}の[足]{あし}は[踏]{ふ}まれました sounds unnatural.",
       "**A thing as the topic:** common in news, notices and descriptions, usually without a doer. [会議]{かいぎ}は[三階]{さんがい}で[行]{おこな}われます.",
       "**Creators take によって:** 「[源氏物語]{げんじものがたり}」は[紫式部]{むらさきしきぶ}によって書かれました.",
       "**The suffering passive:** even verbs with no object can be passive, to show that an event affected you, usually badly. [赤]{あか}ちゃんに[泣]{な}かれました; [弟]{おとうと}にケーキを食べられました."
      ]
     },
     "For kindnesses you wanted, use ～てもらう rather than the passive: [友達]{ともだち}に[手伝]{てつだ}ってもらいました (A friend helped me).",
     "**When to choose it.** Use the passive when the person affected is what your sentence is about, very often “I”: [知]{し}らない[人]{ひと}に話しかけられました (A stranger spoke to me). Leave the doer out when it doesn’t matter or isn’t known. For things that simply happen, with nobody in view, Japanese prefers an intransitive verb to a passive: ドアが[開]{あ}きました (the door opened), not ドアが[開]{あ}けられました, which stresses that someone opened it.",
     "**Reading tip.** When you meet ～れる or ～られる, ask three questions: is there a doer with に (passive)? does が mark something you can do (potential)? is the subject someone being respected (respect)?"
    ],
    pro:[
     "**Names for the types.** Japanese grammars often distinguish the [直接受身]{ちょくせつうけみ} (direct passive: someone is acted on), the [持]{も}ち[主]{ぬし}の[受身]{うけみ} (possessor passive: your body or belongings are acted on, and you are the topic), and the [間接受身]{かんせつうけみ} (indirect passive), also called the [迷惑]{めいわく}の[受身]{うけみ} because it usually expresses a nuisance. The indirect passive is the one with no English equivalent.",
     "**One ending, three jobs.** れる・られる also form the respectful verbs of [尊敬語]{そんけいご} ([先生]{せんせい}が[来]{こ}られました, the professor came), and for ichidan verbs and [来]{く}る the passive has the same shape as the potential ([食]{た}べられる: be eaten, or can eat). Context separates them: a doer with に points to the passive, が marking the thing you can do points to the potential, and a respected person as the subject points to respect. The shortened ら[抜]{ぬ}き forms ([見]{み}れる, [来]{こ}れる) are only potential, never passive or respectful.",
     "**Verbs without a passive.** Verbs that describe states or abilities, such as ある, [要]{い}る, [分]{わ}かる and できる, have no passive, and potential verbs ([書]{か}ける) can’t be made passive either.",
     "**Another によって.** Noun + によって also means “depending on” ([人]{ひと}によって[違]{ちが}います, it differs from person to person) and “by means of”. With a passive verb and a creator, it marks the doer.",
     "**Style.** Thing-as-topic passives are frequent in written Japanese, news and formal notices. In conversation, people more often use a person as the topic, or an intransitive verb ([窓]{まど}が[開]{あ}きました) where English would use a passive."
    ]
   },
   related:[
    "causative-form",
    "transitive-intransitive",
    "polite-speech-basics",
    "n4-grammar-patterns",
    "potential-form",
    "giving-and-receiving",
    "nai-and-ta-forms"
   ],
   sources:[
    {
     t:"Tae Kim’s Guide to Learning Japanese: Causative and Passive Verbs (passive conjugation rules)",
     url:"https://guidetojapanese.org/learn/grammar/causepass"
    },
    {
     t:"IRODORI Elementary 2 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"
    },
    {
     t:"IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"causative-form",
   title:"The causative and causative-passive (～させる・～させられる)",
   aka:[
    "causative",
    "causative passive",
    "shieki",
    "使役",
    "しえき",
    "～せる",
    "～させる",
    "～させられる",
    "～される (causative-passive short form)",
    "make someone do",
    "let someone do",
    "be made to"
   ],
   tags:["japanese", "grammar", "n4", "verbs"],
   summary:"Making and letting people do things with ～せる・～させる, asking permission with ～させてください, and being made to do things with the causative-passive.",
   levels:{
    starter:[
     "The **causative** means “make someone do” or “let someone do”: [母]{はは}は[弟]{おとうと}に[部屋]{へや}を[掃除]{そうじ}させました (My mother made my brother clean his room). The topic is the person who causes it; the person marked with に (or を) does the action.",
     "It is built like the passive, with せ in place of れ: godan verbs add せる to the あ-row ([書]{か}かせる, [言]{い}わせる), ichidan verbs add させる ([食]{た}べさせる), する becomes させる and [来]{く}る becomes [来]{こ}させる.",
     "Two everyday uses: asking permission, [少]{すこ}し[考]{かんが}えさせてください (Let me think about it a little), and complaining about what you were made to do, with the **causative-passive**: [駅]{えき}で[一時間]{いちじかん}も[待]{ま}たされました (I was kept waiting an hour at the station).",
     "When you read one of these sentences, always ask: who caused it, and who actually did it?"
    ],
    builder:[
     {
      table:[
       ["Verb", "Causative", "Causative-passive", "Short form"],
       ["[書]{か}く", "書かせる", "書かせられる", "書かされる"],
       ["[待]{ま}つ", "[待]{ま}たせる", "[待]{ま}たせられる", "[待]{ま}たされる"],
       ["[話]{はな}す", "話させる", "話させられる", "none"],
       ["[食]{た}べる", "食べさせる", "食べさせられる", "none"],
       ["する", "させる", "させられる", "none"],
       ["[来]{く}る", "[来]{こ}させる", "[来]{こ}させられる", "none"]
      ]
     },
     "Causative and causative-passive verbs both conjugate as ichidan verbs. The short causative-passive (あ-row + される) exists only for godan verbs, and not for those ending in す. It is common in speech; both forms are correct.",
     "**Marking the person.** If the verb has its own object with を, the person takes に: [先生]{せんせい}は[学生]{がくせい}にレポートを書かせました. If it has no object, the person usually takes を: 学生を[帰]{かえ}らせました, みんなを[笑]{わら}わせました.",
     "**Make or let?** Context decides. With ～てくれる or ～てあげる it is usually “let”: [父]{ちち}は[私]{わたし}に[運転]{うんてん}させてくれました (My father let me drive).",
     "**Permission:** ～させてください (please let me), ～させていただけませんか (could you possibly let me), and in formal speech ～させていただきます (allow me to).",
     "**Causative-passive:** person は causer に ～させられる: [母]{はは}にピアノを[練習]{れんしゅう}させられました (I was made to practice the piano by my mother).",
     "**Everyday uses.** At home and school: [子]{こ}どもに[野菜]{やさい}を食べさせる, 学生に[発表]{はっぴょう}させる. At work, “let me” requests are very common: [確認]{かくにん}させてください (let me check), [少]{すこ}し[考]{かんが}えさせてください. And feelings: [友達]{ともだち}を[笑]{わら}わせる, [親]{おや}を[心配]{しんぱい}させる.",
     "**Three viewpoints on one event.** 母が[私]{わたし}に[練習]{れんしゅう}させた (causative: the mother is the topic), [私]{わたし}は母に[練習]{れんしゅう}させられた (causative-passive: I am the topic, and I didn’t want to), [私]{わたし}は[練習]{れんしゅう}した (plain: just what I did)."
    ],
    pro:[
     "**を or に with intransitive verbs.** With verbs that have no object, を tends to suggest that the person was made to act, and に that they were allowed to do what they wanted. Many grammars describe it this way, but usage varies, and を is the safe default. When the verb already has a を for a place you move through ([道]{みち}を[歩]{ある}く), the person takes に, because Japanese avoids two を in one clause.",
     "**Letting things happen.** The causative can also describe letting something happen to a thing through neglect: [野菜]{やさい}を[腐]{くさ}らせてしまいました (I let the vegetables go bad).",
     "**さ[入]{い}れ[言葉]{ことば}.** Adding an extra さ to godan verbs, as in [休]{やす}まさせていただきます for 休ませていただきます, is widely heard but generally treated as an error, especially in writing and formal speech.",
     "**A shorter causative.** Godan-style causatives ending in す ([書]{か}かす, [食]{た}べさす) exist in casual and regional speech. Tae Kim describes them as rough slang; textbooks use ～せる・～させる. He explains the short causative-passive 書かされる as the passive of this short causative (書かす → 書かされる), which is why verbs whose short causative would end in さす ([話]{はな}す → 話さす) don’t form it: there is no 話さされる.",
     "**Humble causatives.** お[待]{ま}たせしました (sorry to keep you waiting) is お + [待]{ま}たせ (causative stem) + する, a humble pattern. ～させていただく is correct when you are really asking for, or acknowledging, permission; overused, it sounds stiff ({{keigo-mistakes}})."
    ]
   },
   related:["passive-form", "polite-speech-basics", "n4-grammar-patterns", "giving-and-receiving", "requests-and-permission"],
   sources:[
    {
     t:"Tae Kim’s Guide to Learning Japanese: Causative and Passive Verbs (causative, shortened forms, causative-passive)",
     url:"https://guidetojapanese.org/learn/grammar/causepass"
    },
    {
     t:"IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"appearance-sou-you-rashii",
   title:"Looks, hearsay and conjecture: そう, そうだ, ようだ, みたい, らしい",
   aka:[
    "～そう",
    "～そうだ",
    "～ようだ",
    "～みたい",
    "～らしい",
    "appearance",
    "hearsay",
    "conjecture",
    "it seems",
    "looks like",
    "I hear",
    "sou da",
    "you da",
    "mitai",
    "rashii"
   ],
   tags:["japanese", "grammar", "n4"],
   summary:"Four ways to show how you know something, by sight, by report or by inference, with their forms, their differences and the common mistakes.",
   levels:{
    starter:[
     "Japanese often shows **how you know** something. Four patterns do most of the work:",
     {
      table:[
       ["Pattern", "How you know", "Example"],
       ["stem + そう", "you can see it", "[雨]{あめ}が[降]{ふ}りそうです。"],
       ["plain + そうだ", "you were told", "雨が[降]{ふ}るそうです。"],
       ["～ようだ・～みたい", "you worked it out", "雨が[降]{ふ}ったようです。"],
       ["～らしい", "you heard it, apparently", "雨が[降]{ふ}るらしいです。"]
      ]
     },
     "The first two are easy to mix up because they both use そう. Appearance そう takes a shortened stem ([降]{ふ}り, おいし, [元気]{げんき}); hearsay そうだ takes a full plain form ([降]{ふ}る, おいしい, [元気]{げんき}だ).",
     "Native speakers overlap ようだ, みたい and らしい a good deal, so don’t worry about fine shades at first. Learn the forms well and the core meaning of each."
    ],
    builder:[
     {
      table:[
       ["Pattern", "Verb", "い-adjective", "な-adjective / noun"],
       ["そう (looks)", "[降]{ふ}りそう", "[高]{たか}そう", "[元気]{げんき}そう / (none)"],
       ["そうだ (I hear)", "[降]{ふ}るそうだ", "高いそうだ", "[元気]{げんき}だそうだ / [雨]{あめ}だそうだ"],
       ["ようだ", "[降]{ふ}るようだ", "高いようだ", "[元気]{げんき}なようだ / 雨のようだ"],
       ["みたい", "[降]{ふ}るみたい", "高いみたい", "[元気]{げんき}みたい / 雨みたい"],
       ["らしい", "[降]{ふ}るらしい", "高いらしい", "[元気]{げんき}らしい / 雨らしい"]
      ]
     },
     "**Appearance そう:** いい → よさそう, ない → なさそう, 高くない → 高くなさそう. It conjugates like a な-adjective (おいしそうなパン, [楽]{たの}しそうに). Not with nouns, and usually not for what you can plainly see (この[花]{はな}はきれいです rather than きれいそう). かわいそう is a separate word: “poor thing”.",
     "**Hearsay そうだ:** name the source with によると or の[話]{はなし}では. そうだ itself never changes: [降]{ふ}ったそうです, [降]{ふ}らないそうです, never [降]{ふ}るそうでした.",
     "**ようだ and みたい:** your conclusion from clues; also “like” in comparisons ([夢]{ゆめ}のようです, [夢]{ゆめ}みたいです; ような / みたいな before nouns). みたい is conversational, ようだ more formal.",
     "**らしい:** a conclusion from what you heard or read, said with some distance; after a noun, also “typical of” ([春]{はる}らしい[天気]{てんき}). It conjugates like an い-adjective.",
     "**Before nouns and verbs.** そう and みたい work like な-adjectives (おいしそうなパン, [楽]{たの}しそうに, [夢]{ゆめ}みたいな話); よう does too ([夢]{ゆめ}のような話, [雪]{ゆき}のように); らしい works like an い-adjective ([春]{はる}らしい天気, らしくない).",
     "**How to choose.** Ask how you know. If you are looking at it, use appearance そう. If someone told you, use hearsay そうだ. If you worked it out from clues, use ようだ (or みたい in conversation). If it is something going around, or you want some distance, use らしい."
    ],
    pro:[
     "**Negatives of appearance そう.** For adjectives, ～なさそう ([高]{たか}くなさそう). For verbs, textbooks give ～そうにない or ～そうもない ([雨]{あめ}は[降]{ふ}りそうにない, it doesn’t look like it will rain); in speech you will also hear [降]{ふ}らなそう, the form most guides accept, and, more and more, [降]{ふ}らなさそう.",
     "**ようだ or らしい?** Both can present an inference. ようだ leans on the speaker’s own observation and judgment; らしい leans on information from outside (what people say, what you read) and sounds more detached. So a doctor examining you would say かぜのようですね, while you would pass on a rumor with らしい. Many sentences allow either.",
     "**みたい in casual speech** covers both: it can report a conclusion from clues and pass on something heard (～みたいよ). In writing, use ようだ or a hearsay pattern.",
     "**Written equivalents.** In reports and academic writing, ～ようである and ～と[考]{かんが}えられる present careful conclusions, and ～とのことだ or ～という reports hearsay. See {{hedging-japanese}} in the Academic Japanese track.",
     "**Other ように.** Don’t confuse these with ～ように meaning “so that” ([忘]{わす}れないように[書]{か}きます) or ～ようにする (make an effort to). Nor with ～っぽい, a casual suffix meaning “-ish, seems”.",
     "**Tests and textbooks.** Learners’ materials mostly practice the forms and the clear cases: appearance against hearsay, よう against みたい after nouns and な-adjectives, and らしい for “typical of”. Where native speakers would accept more than one pattern, a well-made question gives a context that leaves only one."
    ]
   },
   related:["n4-grammar-patterns", "plain-form-grammar", "hedging-japanese", "sentence-endings-japanese"],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Similarity or hearsay (よう, みたい, そう, そうだ, らしい)", url:"https://guidetojapanese.org/learn/grammar/similarity"},
    {
     t:"IRODORI Elementary 1 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_contents_en.pdf"
    },
    {
     t:"IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"transitive-intransitive",
   title:"Transitive and intransitive verb pairs, ～ている and ～てある",
   aka:["transitive", "intransitive", "jidoushi", "tadoushi", "自動詞", "他動詞", "じどうし", "たどうし", "verb pairs", "～てある", "te-aru", "開ける 開く"],
   tags:["japanese", "grammar", "n4", "verbs"],
   summary:"Pairs such as あける・あく and けす・きえる, the particles を and が, and three ways to describe a scene: ～ている after intransitive verbs, ～てある after transitive verbs, and ～ている as an action in progress.",
   levels:{
    starter:[
     "Japanese often has **two verbs for one event**. A transitive verb ([他動詞]{たどうし}, *tadōshi*) means someone does something to something: [窓]{まど}を[開]{あ}ける, I open the window. An intransitive verb ([自動詞]{じどうし}, *jidōshi*) means something happens: [窓]{まど}が[開]{あ}く, the window opens. English often uses the same verb for both.",
     "The particle follows the verb: を with transitive verbs, が with intransitive verbs.",
     "To describe how things are now, use the intransitive verb + ている: [窓]{まど}が[開]{あ}いています (the window is open). To say someone did it on purpose and it has stayed that way, use the transitive verb + てある: [窓]{まど}が[開]{あ}けてあります.",
     "The pairs must be learned two at a time. Make cards with both verbs and their particles, and review them a few minutes a day."
    ],
    builder:[
     {
      table:[
       ["Pattern", "Transitive (を)", "Intransitive (が)"],
       [
        "-eru / -aru",
        "[閉]{し}める, [始]{はじ}める, [止]{と}める, [決]{き}める, [集]{あつ}める, [変]{か}える, [見]{み}つける",
        "[閉]{し}まる, [始]{はじ}まる, [止]{と}まる, [決]{き}まる, [集]{あつ}まる, [変]{か}わる, 見つかる"
       ],
       ["-eru / -u", "[開]{あ}ける, つける, [並]{なら}べる, [届]{とど}ける", "[開]{あ}く, つく, [並]{なら}ぶ, [届]{とど}く"],
       ["-su / -eru", "[消]{け}す, [出]{だ}す, [壊]{こわ}す, [汚]{よご}す", "[消]{き}える, [出]{で}る, [壊]{こわ}れる, [汚]{よご}れる"],
       ["-u / -eru", "[割]{わ}る", "[割]{わ}れる"],
       ["-osu / -iru", "[落]{お}とす, [起]{お}こす", "[落]{お}ちる, [起]{お}きる"],
       ["-su / -ru", "[直]{なお}す, [戻]{もど}す", "[直]{なお}る, [戻]{もど}る"],
       ["other", "[入]{い}れる", "[入]{はい}る"]
      ]
     },
     "Watch readings that change: [消]{け}す・[消]{き}える, [出]{だ}す・[出]{で}る, [入]{い}れる・[入]{はい}る.",
     {
      table:[
       ["Sentence", "Meaning"],
       ["[窓]{まど}が[開]{あ}いている", "the window is open (a state)"],
       ["[窓]{まど}が[開]{あ}けてある", "someone opened it on purpose; it is still open"],
       ["[窓]{まど}を[開]{あ}けている", "about a person: someone is opening it, or keeps it open"]
      ]
     },
     "～てある goes only with transitive verbs, and the thing takes が (or は). It often suggests preparation, so it pairs with ～ておく: [窓]{まど}を[開]{あ}けておきました → [窓]{まど}が[開]{あ}けてあります.",
     "Movement verbs take を for the place you leave or pass through ([部屋]{へや}を出る, [道]{みち}を[歩]{ある}く); this を doesn’t make them transitive.",
     "**How to learn them.** Make cards with both verbs, their particles and a picture: [電気]{でんき}をつける・電気がつく. When you meet a new verb in a dictionary, check its label and look for its partner. Say the pair aloud as one unit.",
     "**Which one to use.** For an event with no doer in view (notices, news, what you noticed), use the intransitive verb. For what someone did, especially you, use the transitive verb. For how things are now, use the intransitive verb + ている, or the transitive verb + てある if the deliberate action matters."
    ],
    pro:[
     "**Tendencies, not rules.** Verbs in -aru are almost always intransitive (exceptions such as [預]{あず}かる and [教]{おそ}わる take を), and most verbs in ～す are transitive, but -eru can go either way ([変]{か}える is transitive, [消]{き}える intransitive) and some verbs have no partner at all. A few verbs work both ways: [開]{ひら}く (open: [本]{ほん}を[開]{ひら}く, [花]{はな}が[開]{ひら}く), and [終]{お}わる, which is mainly intransitive but also used with を ([授業]{じゅぎょう}を[終]{お}わります); [終]{お}える is the textbook transitive.",
     "**Responsibility.** Because intransitive verbs describe events without a doer, they are the natural choice for notices and neutral reports (ドアが[閉]{し}まります). When you caused an accident, the transitive verb owns it: お[皿]{さら}を[割]{わ}ってしまいました. Using only the intransitive in an apology can sound evasive.",
     "**～てある with を.** Besides the が pattern, you will hear ～をVてある when the speaker focuses on their own preparations (ホテルを[予約]{よやく}してある). Textbooks teach the が pattern first.",
     "**Passives and pairs.** Intransitive verbs can only form the suffering passive ([雨]{あめ}に[降]{ふ}られた). Don’t use the passive of a transitive verb where an intransitive partner exists: ドアが[開]{あ}きました is the natural “the door opened”, while ドアが[開]{あ}けられました stresses that someone opened it.",
     "**Dictionaries** mark each verb: JMdict-based dictionaries such as Jisho.org label verbs “Transitive verb” or “Intransitive verb”. Note that the potential of [入]{はい}る, [入]{はい}れる, is spelled like [入]{い}れる (put in)."
    ]
   },
   related:["passive-form", "te-form", "te-shimau-te-oku", "n4-grammar-patterns"],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Transitive and Intransitive Verbs", url:"https://guidetojapanese.org/learn/grammar/in-transitive"},
    {t:"Tae Kim’s Guide: Other uses of the te-form (～てある for resultant states, ～ておく)", url:"https://guidetojapanese.org/learn/grammar/teform"},
    {
     t:"IRODORI Elementary 2 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"polite-speech-basics",
   title:"Polite speech basics: respectful and humble verbs",
   aka:["keigo basics", "honorific verbs", "humble verbs", "尊敬語", "謙譲語", "丁寧語", "いらっしゃる", "おっしゃる", "召し上がる", "参る", "申す", "お～になる", "お～する", "お～ください"],
   tags:["japanese", "grammar", "n4", "politeness", "keigo"],
   summary:"A first look at keigo for N4: the three traditional kinds, the special verbs you hear most, the regular patterns お～になる, お～ください and お～する, and the mistakes to avoid.",
   levels:{
    starter:[
     "Besides です and ます, Japanese has **keigo**: special verbs and patterns that show respect. Traditionally there are three kinds. [丁寧語]{ていねいご} (polite language) is です・ます, polite to the listener. [尊敬語]{そんけいご} (respectful language) raises the other person when **they** act: いらっしゃる (come, go, be). [謙譲語]{けんじょうご} (humble language) lowers **your** actions toward them: [参]{まい}る (come, go).",
     "You hear keigo in shops (いらっしゃいませ, [少々]{しょうしょう}お[待]{ま}ちください), at work, on the phone and with teachers.",
     "The golden rule: respectful forms for what others do, humble forms for what you do, and never respectful forms about yourself.",
     "Keigo is hard for Japanese speakers too, and people forgive mistakes when your respect is clear. At N4, aim to recognize the common forms and use a few safely."
    ],
    builder:[
     {
      table:[
       ["Verb", "[尊敬語]{そんけいご}", "[謙譲語]{けんじょうご}"],
       ["いる / [行]{い}く / [来]{く}る", "いらっしゃる", "おる / [参]{まい}る"],
       ["[言]{い}う", "おっしゃる", "[申]{もう}す"],
       ["[食]{た}べる・[飲]{の}む", "[召]{め}し[上]{あ}がる", "いただく"],
       ["[見]{み}る", "ご[覧]{らん}になる", "[拝見]{はいけん}する"],
       ["する", "なさる", "いたす"],
       ["[知]{し}っている", "ご[存]{ぞん}じだ", "[存]{ぞん}じている"],
       ["くれる / もらう", "くださる", "いただく"],
       ["[聞]{き}く・[訪]{たず}ねる", "—", "[伺]{うかが}う"]
      ]
     },
     "いらっしゃる, おっしゃる, なさる and くださる have ます-forms in い: いらっしゃいます, おっしゃいます, なさいます, くださいます. So does ござる: ございます.",
     "**Regular patterns:** お + stem + になる (お[帰]{かえ}りになる) and the passive form ([来]{こ}られる) for respect; お + stem + ください (お[待]{ま}ちください) and ご + noun + ください (ご[注意]{ちゅうい}ください) for respectful requests; お + stem + する (お[持]{も}ちします) and ご + noun + する (ご[案内]{あんない}します) for humble actions that affect the other person.",
     "**Limits:** one-syllable stems ([見]{み}る, [寝]{ね}る, いる) use special verbs, not お～になる. お generally goes with native words and ご with Chinese-origin words, with exceptions such as お[電話]{でんわ}.",
     "**ウチ・ソト:** to outsiders, treat your own colleagues and family as your side: [浜田]{はまだ}はただいま[出]{で}かけております.",
     "**Where you hear it.** Shops and restaurants (いらっしゃいませ, かしこまりました, [少々]{しょうしょう}お[待]{ま}ちください), stations and announcements (ご[注意]{ちゅうい}ください), the phone, offices and schools. Start by understanding these set phrases; using them comes later.",
     "**A ladder for requests.** From casual to very polite: [待]{ま}って → [待]{ま}ってください → お[待]{ま}ちください → お[待]{ま}ちいただけますか. The higher you go, the more respect you show, and the more distance."
    ],
    pro:[
     "**Five categories.** The 2007 guidelines [敬語]{けいご}の[指針]{ししん} split [謙譲語]{けんじょうご} into [謙譲語]{けんじょうご}Ⅰ, which raises the person your action is directed at ([伺]{うかが}う, お[送]{おく}りする), and [謙譲語]{けんじょうご}Ⅱ or [丁重語]{ていちょうご}, which is polite to the listener about your own actions ([参]{まい}る, [申]{もう}す, いたす, おる); and they separate [美化語]{びかご} (お[茶]{ちゃ}, ご[飯]{はん}) from [丁寧語]{ていねいご}. {{keigo-system}} in the Academic Japanese track explains them.",
     "**Double keigo.** Stacking two respectful forms, as in おっしゃられる (おっしゃる + られる), is generally treated as a mistake ([[nijuu-keigo|[二重敬語]{にじゅうけいご}]]), although a few such forms are accepted by custom.",
     "**The lightest respect.** The passive-form [尊敬語]{そんけいご} ([行]{い}かれる, [書]{か}かれる) is common in speech and news, and it is usually felt to be lighter than お～になる. Because it looks like the passive, choose お～になる or a special verb when there could be confusion.",
     "**Fixed phrases first.** Many keigo forms are best learned as set phrases: お[待]{ま}たせしました, [失礼]{しつれい}いたします, よろしくお[願]{ねが}いいたします, かしこまりました (certainly, I understand), [少々]{しょうしょう}お[待]{ま}ちください. They are used every day at work and in shops.",
     "**Writing to teachers and offices** brings its own conventions; the Academic Japanese unit on emailing professors covers them ({{emailing-japanese-professors}}).",
     "**くださる and ください.** ください, which you have used since N5, is the imperative of くださる, the respectful verb for くれる. So ～てください is already a little keigo: a respectful way of asking someone to do something for you. お～ください raises it one step further."
    ]
   },
   related:["keigo-system", "keigo-mistakes", "causative-form", "passive-form", "n4-grammar-patterns", "plain-and-polite-speech"],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Honorific and Humble Forms", url:"https://guidetojapanese.org/learn/grammar/honorific"},
    {t:"文化審議会「敬語の指針」(Agency for Cultural Affairs, 2007, PDF)", url:"https://www.bunka.go.jp/seisaku/bunkashingikai/sokai/sokai_6/pdf/keigo_tousin.pdf"},
    {
     t:"IRODORI Pre-Intermediate (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/pre-intermediate/pdf/ZZ_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"n4-grammar-patterns",
   title:"N4 grammar patterns at a glance",
   aka:["N4 grammar", "JLPT N4 grammar", "N4 grammar list", "～ながら", "～のに", "～し"],
   tags:["japanese", "grammar", "n4", "jlpt"],
   summary:"A one-page map of the N4 grammar in Units 5–7, with the patterns of Unit 7 in detail: passive, causative, そう・よう・らしい, verb pairs and ～てある, ～ながら, ～のに, ～し and keigo basics.",
   levels:{
    starter:[
     "N4 is the second-easiest of the five levels of the Japanese-Language Proficiency Test. Its grammar builds on N5 by using **plain forms** inside sentences and by adding new verb forms.",
     "In this track, Unit 5 covers plain forms and casual speech ({{plain-form-grammar}}), Unit 6 covers the potential, volitional, conditionals, giving and receiving, ～てしまう, ～ておく and “must” ({{potential-form}}, {{conditionals-to-ba-tara-nara}}, {{giving-and-receiving}}), and Unit 7 covers the passive, causative, appearance and hearsay, verb pairs, three joining patterns and keigo basics.",
     "The JLPT publishes no official grammar list, so N4 lists differ slightly between textbooks. The core is the same everywhere.",
     "Use this page for review: read a pattern, make an example of your own, and check the lesson if you are unsure."
    ],
    builder:[
     {
      table:[
       ["Pattern", "Meaning", "Example"],
       ["～れる・～られる", "passive", "[先生]{せんせい}にほめられました。"],
       ["～に～を V-passive", "suffering passive", "[弟]{おとうと}にケーキを[食]{た}べられました。"],
       ["～せる・～させる", "make, let", "[弟]{おとうと}に[掃除]{そうじ}させました。"],
       ["～させてください", "please let me", "[少]{すこ}し[考]{かんが}えさせてください。"],
       ["～させられる・～される", "be made to", "[一時間]{いちじかん}も[待]{ま}たされました。"],
       ["stem + そう", "looks; about to", "おいしそうです。[落]{お}ちそうです。"],
       ["plain + そうだ", "I hear", "[雨]{あめ}が[降]{ふ}るそうです。"],
       ["～ようだ・～みたい", "it seems; like", "[帰]{かえ}ったようです。"],
       ["～らしい", "apparently; typical of", "[春]{はる}らしい[天気]{てんき}です。"],
       ["intransitive + ている", "a state", "[窓]{まど}が[開]{あ}いています。"],
       ["transitive + てある", "done on purpose, still so", "[窓]{まど}が[開]{あ}けてあります。"],
       ["stem + ながら", "while", "[聞]{き}きながら[勉強]{べんきょう}します。"],
       ["～のに", "even though", "[約束]{やくそく}したのに、[来]{き}ませんでした。"],
       ["～し、～し", "and what’s more", "[安]{やす}いし、おいしいし。"],
       ["お～になる・お～する", "respectful, humble", "お[待]{ま}ちください。お[持]{も}ちします。"]
      ]
     },
     "The details are in {{passive-form}}, {{causative-form}}, {{appearance-sou-you-rashii}}, {{transitive-intransitive}} and {{polite-speech-basics}}.",
     "**Using the table.** Cover the Example column, read the pattern and its meaning, and make your own example. Then check the form against the lesson. The patterns that cause most mistakes are the ones that look alike: そう after a stem or after a full form, ～ている or ～てある, のに or けど.",
     "**What they share.** Most of these patterns attach to plain forms or to verb stems, which is why Unit 5’s plain forms matter so much at this level. Nouns and な-adjectives are the usual trouble spots: check whether the pattern wants だ, な, の or nothing."
    ],
    pro:[
     "**Near neighbors to keep apart.** Passive and potential ([食]{た}べられる), appearance and hearsay (おいしそう / おいしいそう), ～ている and ～てある, ～のに and ～けど, ～ながら (one person) and ～[間]{あいだ} (two people), and respectful and humble verbs. JLPT grammar questions ask you to choose the right form for a gap or to put parts of a sentence in order ({{jlpt-overview}}), so practice choosing between such pairs in context.",
     "**Form families.** The passive, causative and potential are all built on verb stems in similar ways and all become ichidan verbs: [書]{か}かれる, 書かせる, 書ける. Practicing them side by side, verb by verb, is more efficient than learning them one at a time.",
     "**Particles before のに and し.** Nouns and な-adjectives take な before のに (and ので) but だ before し (and から). It is a small detail that tests like to check.",
     "**Edges of the list.** Some patterns appear at N4 in one source and at N3 in another, for example the causative-passive, ～らしい meaning “typical of”, and keigo beyond the basic verbs. This track teaches them at N4 at a recognition level. Don’t worry if your textbook draws the line elsewhere.",
     "**Next steps.** Unit 8 covers N4 kanji and reading. For listening practice with these patterns, the Japan Foundation’s free Irodori Elementary 2 and Pre-Intermediate books cover the passive, ～ながら, ～し, the causative, ～らしい, ～のに and keigo, each in an everyday situation."
    ]
   },
   related:[
    "passive-form",
    "causative-form",
    "appearance-sou-you-rashii",
    "transitive-intransitive",
    "polite-speech-basics",
    "n5-grammar-patterns",
    "jlpt-overview"
   ],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Compound Sentences (のに, し)", url:"https://guidetojapanese.org/learn/grammar/compound"},
    {t:"Tae Kim’s Guide: Time-specific actions (ながら)", url:"https://guidetojapanese.org/learn/grammar/timeactions"},
    {
     t:"IRODORI Elementary 2 (The Japan Foundation): table of contents with grammar points by lesson (PDF)",
     url:"https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"
    }
   ],
   checked:"2026-11"
  },
  {
   id:"degree-ease-way-wants",
   title:"Too much, easy or hard, how to, wants to: ～すぎる, ～やすい・～にくい, ～かた, ～たがる",
   aka:["sugiru","すぎる","too much","yasui","nikui","やすい","にくい","easy to","hard to","kata","方","かた","how to","way of doing","tagaru","たがる","がる","someone wants"],
   tags:["japanese","grammar","n4"],
   summary:"Five patterns on the ます stem: ～すぎる (too much; also after adjectives), ～やすい and ～にくい (easy and hard to), ～[方]{かた} (the way to do), and ～たがる for what someone else wants.",
   levels:{
    starter:[
      "Take the ます stem ([書]{か}きます → 書き) and add an ending:",
      {ex:"[食]{た}べすぎました。\nI ate too much.\n\nこの[本]{ほん}は[読]{よ}みやすいです。\nThis book is easy to read.\n\nこのペンは書きにくいです。\nThis pen is hard to write with.\n\n[漢字]{かんじ}の読み[方]{かた}を[教]{おし}えてください。\nPlease tell me how to read this kanji.\n\n[弟]{おとうと}は[犬]{いぬ}を[飼]{か}いたがっています。\nMy little brother wants to keep a dog.", label:"Examples"},
      {list:[
        "**～すぎる**: too much. Also after adjectives: [高]{たか}すぎる, [静]{しず}かすぎる.",
        "**～やすい / ～にくい**: easy / hard to. They work like い-adjectives.",
        "**～[方]{かた}**: the way to. It makes a noun, so を becomes の.",
        "**～たがる**: someone else wants to. Not for yourself."
      ]},
      {key:"Check the stem first: 書き, 食べ, し, [来]{き}."},
      "～たいです is for your own wishes. For other people, use ～たがっています or ～たいと[言]{い}っていました."
    ],
    builder:[
      {h:"Forms"},
      {table:[["Pattern","Attaches to","Notes"],["～すぎる","ます stem; い-adj minus い; な-adj stem","いい → よすぎる; ない → なさすぎる; [少]{すく}ない → [少]{すく}なすぎる"],["～やすい / ～にくい","ます stem","conjugate as い-adjectives: [読]{よ}みにくかった"],["～[方]{かた}","ます stem","noun; object + の: [漢字]{かんじ}の[書]{か}き[方]{かた}; する → の[仕方]{しかた}"],["～たがる","ます stem","godan verb; usually ～たがっている; object takes を"]]},
      {h:"Meaning points"},
      "～すぎる means a problem (too much). Its stem すぎ is a noun ([飲]{の}みすぎ). For positive “very”, use とても.",
      "～やすい also means “tends to”: [割]{わ}れやすい (breaks easily), [風邪]{かぜ}をひきやすい. ～にくい is “hard but possible”; the potential negative (読めない) is “can’t”. Don’t confuse やすい with [安]{やす}い (cheap) or [易]{やさ}しい (easy).",
      "～[方]{かた} (かた) is not ～ほう in ～たほうがいい. A destination keeps its particle and adds の: [駅]{えき}への[行]{い}き[方]{かた}.",
      {h:"Talking about other people’s wishes"},
      "Japanese avoids stating someone else’s feelings as fact. Use ～たがっている (signs you can see), ～たいと[言]{い}っていました (what they said) or ～たいそうです / ～たいらしいです (what you heard). ～たがる sounds as if you are describing a child, so avoid it about people above you, and never use it to the person themselves.",
      "The same がる appears with some feeling adjectives: [寒]{さむ}がる, [怖]{こわ}がる, [欲]{ほ}しがる. With all of them, the object takes を: [新]{あたら}しいゲームを[欲]{ほ}しがっている."
    ],
    pro:[
      "**すぎる with negatives.** For a verb, “not … enough” is usually said another way ([野菜]{やさい}が[足]{た}りない, not enough vegetables), though ～なさすぎる exists in speech ([寝]{ね}なさすぎ, not sleeping enough). With adjectives, なさすぎる is standard: [自信]{じしん}がなさすぎる (far too little confidence).",
      "**Slang praise.** Younger speakers use ～すぎる as an intensifier: かわいすぎる, おいしすぎ. It is informal and can sound childish in serious contexts.",
      "**～づらい and ～がたい.** Two more “hard to” endings appear at N3. ～づらい adds discomfort for the speaker: [言]{い}いづらい (awkward to say), [歩]{ある}きづらい (uncomfortable to walk in). ～がたい is formal and means “almost impossible”, mostly with verbs of thinking and feeling: [信]{しん}じがたい (hard to believe).",
      "**[方]{かた} in compounds.** [仕方]{しかた}がない / しかたない (it can’t be helped) and やり[方]{かた} (way of doing it) are everyday words. In formal writing, ～[方法]{ほうほう} (method) replaces ～[方]{かた} for procedures: [申請]{しんせい}の[方法]{ほうほう} (how to apply).",
      "**たがる and the speaker.** ～たがる can describe yourself only when you look at yourself from outside, for example when you retell what others said about you as a child: [子]{こ}どものころ、[私]{わたし}はいつも[外]{そと}で[遊]{あそ}びたがっていたそうです (I’m told I always wanted to play outside). In everyday speech, keep it for others.",
      "**Respect.** About someone above you, report their wish with keigo: ～たいとおっしゃっていました. To the listener, ask ～たいですか only in casual or neutral situations; with guests, offer instead: お[茶]{ちゃ}はいかがですか, [何]{なに}かお[飲]{の}みになりますか."
    ]
   },
   related:["polite-speech-basics","appearance-sou-you-rashii","potential-form","guessing-trying-advice"],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Expressing Amounts (“Saying there's too much of something using 「すぎる」”)", url:"https://guidetojapanese.org/learn/grammar/amount"},
    {t:"Tae Kim’s Guide to Learning Japanese: Actions that are easy or hard to do (～やすい, ～にくい, ～づらい, ～がたい)", url:"https://guidetojapanese.org/learn/grammar/easyhard"},
    {t:"Tae Kim’s Guide to Learning Japanese: Showing signs of something (～がる, including ～たがる)", url:"https://guidetojapanese.org/learn/grammar/signs"}
   ],
   checked:"2026-11"
  },
  {
   id:"direction-and-embedded-questions",
   title:"Coming, going and indirect questions: ～てくる, ～ていく, ～か and ～かどうか",
   aka:["te kuru","te iku","てくる","ていく","てきた","bring","take","come back","change over time","embedded question","indirect question","か","kadouka","かどうか","whether"],
   tags:["japanese","grammar","n4"],
   summary:"～てくる and ～ていく add direction (toward or away from the speaker), “go and do, then come back”, and change over time; question word + plain form + か and ～かどうか put questions inside sentences.",
   levels:{
    starter:[
      "Two sets of patterns: one for direction and time, one for questions inside sentences.",
      {ex:"[飲]{の}み[物]{もの}を[持]{も}っていきます。\nI’ll take some drinks (there).\n\nパンを[買]{か}ってきます。\nI’ll go and buy some bread (and come back).\n\n[寒]{さむ}くなってきました。\nIt’s getting colder.\n\n[会議]{かいぎ}が[何時]{なんじ}か、[知]{し}っていますか。\nDo you know what time the meeting is?\n\n[明日]{あした}[来]{く}るかどうか、[分]{わ}かりません。\nI don’t know whether they’re coming tomorrow.", label:"Examples"},
      {list:[
        "**～てくる**: toward me; or go, do and come back; or a change up to now.",
        "**～ていく**: away from me; or a change from now on.",
        "**～か**: a question with a question word, inside a sentence.",
        "**～かどうか**: a yes-no question inside a sentence."
      ]},
      {key:"Inside a sentence, questions use the plain form, and nouns drop だ: 何時か, [本当]{ほんとう}かどうか."},
      "いってきます (I’ll go and come back) is ～てくる in action."
    ],
    builder:[
      {h:"Direction"},
      "[持]{も}ってくる / [持]{も}っていく (bring / take a thing), [連]{つ}れてくる / [連]{つ}れていく (bring / take a person), [帰]{かえ}ってくる (come back here). Japanese follows the speaker’s position more strictly than English: to a friend’s party you are going to, お[菓子]{かし}を[持]{も}っていきます, even where English says “I’ll bring”. ～てくる also marks actions toward you: [電話]{でんわ}をかけてきた (called me).",
      {h:"Go and come back"},
      "[買]{か}ってくる, [見]{み}てくる, [行]{い}ってくる: do something elsewhere and return. Compare [買]{か}っていく: buy on the way and take it with you.",
      {h:"Change over time"},
      "With verbs of change (なる, [増]{ふ}える, [慣]{な}れる, [分]{わ}かる), ～てきた means up to now, and ～ていく means from now on: [慣]{な}れてきました, [続]{つづ}けていきます. With weather and the body, ～てきた often means “has started to”: [雨]{あめ}が[降]{ふ}ってきた.",
      {h:"Embedded questions"},
      {table:[["Kind","Form","Example"],["question word","plain form + か","どこに[置]{お}いたか[覚]{おぼ}えていない"],["yes-no","plain form + かどうか","行けるかどうか分からない"],["noun / な-adj","no だ","[何時]{なんじ}か, [大丈夫]{だいじょうぶ}かどうか"]]},
      "Inside the question, は often becomes が. どうか can be dropped ([来]{く}るか[分]{わ}からない), or both answers can be listed ([来]{く}るか[来]{こ}ないか)."
    ],
    pro:[
      "**Viewpoint.** Japanese takes the speaker’s position by default. Even going toward the listener is [行]{い}く, where English says “come”: あとでそっちに行くね (I’ll come over to you later). The listener, speaking from their side, says [来]{き}てね. With ～てくる and ～ていく the same rule holds, although in conversations about the listener’s own place both viewpoints can be heard.",
      "**くる for things coming at you.** Besides physical movement, ～てくる marks actions and feelings directed at the speaker: [急]{きゅう}に[話]{はな}しかけてきた (suddenly started talking to me), [悲]{かな}しくなってきた (I started to feel sad). This is one way Japanese shows the speaker’s viewpoint without saying [私]{わたし}.",
      "**ていく for disappearing.** ～ていく can describe something moving away out of sight or out of existence: [鳥]{とり}が[飛]{と}んでいった (the bird flew off), [人]{ひと}が[減]{へ}っていく (people keep decreasing).",
      "**Written forms.** In writing, embedded questions often keep the particle: [何]{なに}が[問題]{もんだい}なのかを[考]{かんが}える (consider what the problem is). The explanatory の (～のか, ～のかどうか) is common in both speech and writing and adds a feeling of “what the situation is”.",
      "**Politeness.** An embedded question softens a request because it asks about the listener’s knowledge rather than demanding an answer: [何時]{なんじ}に[着]{つ}くか[教]{おし}えていただけますか. ～かどうか[分]{わ}かりませんが… is a common cushion before a suggestion: うまくいくかどうか分かりませんが、やってみます (I don’t know whether it will work, but I’ll try).",
      "**Next steps.** At N3, change over time continues with ～ようになる (come to do, reach the point where) and ～ようにする (make a point of), in Unit 9 ({{purpose-you-ni-tame-ni}})."
    ]
   },
   related:["te-form","guessing-trying-advice","polite-speech-basics","purpose-you-ni-tame-ni","question-sentences"],
   sources:[
    {t:"Tae Kim’s Guide to Learning Japanese: Other uses of the te-form (“Using motion verbs （行く、来る） with the te-form”)", url:"https://guidetojapanese.org/learn/grammar/teform"},
    {t:"Tae Kim’s Guide to Learning Japanese: The Question Marker (“「か」 used in relative clauses”)", url:"https://guidetojapanese.org/learn/grammar/question"},
    {t:"The Japan Foundation, いろどり IRODORI Elementary 2: table of contents with grammar points by lesson (PDF)", url:"https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"}
   ],
   checked:"2026-11"
  }
 ],
 terms:[
  {
   id:"passive",
   term:"Passive (～れる・～られる)",
   def:"The verb form for things done to someone or something: [書]{か}かれる (be written), [食]{た}べられる (be eaten), される, [来]{こ}られる. The doer takes に: [先生]{せんせい}にほめられました (I was praised by the teacher).",
   codex:"passive-form"
  },
  {
   id:"suffering-passive",
   term:"Suffering passive",
   def:"A passive that shows an event affected you, usually badly, even with verbs that have no object: [雨]{あめ}に[降]{ふ}られました (I got caught in the rain). Also called the [迷惑]{めいわく}の[受身]{うけみ} or indirect passive.",
   codex:"passive-form"
  },
  {
   id:"causative",
   term:"Causative (～せる・～させる)",
   def:"The verb form for making or letting someone do something: [書]{か}かせる, [食]{た}べさせる, させる, [来]{こ}させる. The person who does the action takes に (or を): [弟]{おとうと}に[掃除]{そうじ}させました.",
   codex:"causative-form"
  },
  {
   id:"causative-passive",
   term:"Causative-passive (～させられる)",
   def:"Causative + passive: “be made to do”, usually unwillingly. [食]{た}べさせられる, させられる; godan verbs also have a short form, [待]{ま}たされる, except those ending in す ([話]{はな}させられる only).",
   codex:"causative-form"
  },
  {
   id:"sou-appearance",
   term:"～そう (looks like)",
   def:"Stem + そう: “looks…” or “looks about to…”, judging by what you see. [雨]{あめ}が[降]{ふ}りそうです, おいしそう, [元気]{げんき}そう; いい → よさそう, ない → なさそう. Not used with nouns.",
   codex:"appearance-sou-you-rashii"
  },
  {
   id:"sou-hearsay",
   term:"～そうだ (I hear)",
   def:"Plain form + そうだ: passing on what you were told or read. [雨]{あめ}が[降]{ふ}るそうです (I hear it will rain); nouns and な-adjectives take だ: [休]{やす}みだそうです. そうだ itself doesn’t change.",
   codex:"appearance-sou-you-rashii"
  },
  {
   id:"you-da",
   term:"～ようだ (it seems; like)",
   def:"Your own conclusion from clues: [雨]{あめ}が[降]{ふ}ったようです (It seems it rained). Also “like”: [夢]{ゆめ}のようです. な-adjectives take な and nouns take の before it. More formal than みたい.",
   codex:"appearance-sou-you-rashii"
  },
  {
   id:"mitai",
   term:"～みたい (it seems; like)",
   def:"The conversational equivalent of ～ようだ. It attaches directly to nouns and な-adjectives: [学生]{がくせい}みたい, [静]{しず}かみたい. It conjugates like a な-adjective (みたいな, みたいに).",
   codex:"appearance-sou-you-rashii"
  },
  {
   id:"rashii",
   term:"～らしい (apparently; typical of)",
   def:"A conclusion from what you heard or read, said with some distance: [新]{あたら}しい[店]{みせ}ができるらしいです. After a noun, also “typical of”: [春]{はる}らしい[天気]{てんき}. Conjugates like an い-adjective.",
   codex:"appearance-sou-you-rashii"
  },
  {
   id:"transitive-verb",
   term:"Transitive verb (tadōshi)",
   def:"A verb ([他動詞]{たどうし}) in which someone does something to something, marked with を: [窓]{まど}を[開]{あ}ける (open the window), [電気]{でんき}を[消]{け}す. Many have an intransitive partner.",
   codex:"transitive-intransitive"
  },
  {
   id:"intransitive-verb",
   term:"Intransitive verb (jidōshi)",
   def:"A verb ([自動詞]{じどうし}) in which something happens, with no object; the thing that changes takes が: [窓]{まど}が[開]{あ}く (the window opens), [電気]{でんき}が[消]{き}える. With ～ている it describes a state.",
   codex:"transitive-intransitive"
  },
  {
   id:"te-aru",
   term:"～てある",
   def:"Transitive て-form + ある: the result of a deliberate action is still there. [窓]{まど}が[開]{あ}けてあります (someone has opened the window, on purpose). The doer isn’t mentioned.",
   codex:"transitive-intransitive"
  },
  {
   id:"nagara",
   term:"～ながら (while)",
   def:"ます stem + ながら: one person does two things at once, with the main action last. [音楽]{おんがく}を[聞]{き}きながら[勉強]{べんきょう}します (I study while listening to music).",
   codex:"n4-grammar-patterns"
  },
  {
   id:"noni",
   term:"～のに (even though)",
   def:"Plain form + のに: the result is the opposite of what you expected, often with surprise or disappointment. Nouns and な-adjectives take な: [日曜日]{にちようび}なのに. A request or invitation can’t follow it.",
   codex:"n4-grammar-patterns"
  },
  {
   id:"shi-listing",
   term:"～し (and what’s more)",
   def:"Plain form + し lists reasons or points: [安]{やす}いし、おいしいし、よく[来]{き}ます. Nouns and な-adjectives take だ: [雨]{あめ}だし. A single し hints at other reasons.",
   codex:"n4-grammar-patterns"
  },
  {id:"sugiru", term:"～すぎる (too much)", def:"The ます stem or an adjective stem + すぎる: “too…, …too much”. [食]{た}べすぎる, [高]{たか}すぎる, [静]{しず}かすぎる; いい → よすぎる. It is an ichidan verb, and すぎ is also a noun: [飲]{の}みすぎ.", codex:"degree-ease-way-wants"},
  {id:"yasui-nikui", term:"～やすい / ～にくい (easy / hard to)", def:"The ます stem + やすい (easy to, tends to) or にくい (hard to): [読]{よ}みやすい, [書]{か}きにくい, [割]{わ}れやすい. The result is an い-adjective. にくい means hard but possible, unlike the potential negative.", codex:"degree-ease-way-wants"},
  {id:"kata-way", term:"～[方]{かた} (the way to do)", def:"The ます stem + [方]{かた} makes a noun meaning “the way of doing”: [読]{よ}み[方]{かた}, [使]{つか}い[方]{かた}. The object takes の: [漢字]{かんじ}の[書]{か}き[方]{かた}. する verbs use noun + の[仕方]{しかた}.", codex:"degree-ease-way-wants"},
  {id:"tagaru", term:"～たがる (someone else wants to)", def:"The ます stem + たがる (a godan verb): someone else shows signs of wanting to. Usually ～たがっている for a person now: [行]{い}きたがっています. Not for yourself, the listener, or people above you.", codex:"degree-ease-way-wants"},
  {id:"te-kuru-te-iku", term:"～てくる / ～ていく", def:"The て-form + くる (toward here, or a change up to now) or いく (away from here, or a change from now on): [持]{も}ってくる (bring), [持]{も}っていく (take), [寒]{さむ}くなってきた (it has got colder). ～てくる also means “go and do, then come back”.", codex:"direction-and-embedded-questions"},
  {id:"embedded-question", term:"Embedded question", def:"A question inside a larger sentence, in the plain form + か, keeping its question word: [何時]{なんじ}に[始]{はじ}まるか[知]{し}っていますか (Do you know what time it starts?). Nouns and な-adjectives drop だ.", codex:"direction-and-embedded-questions"},
  {id:"ka-dou-ka", term:"～かどうか (whether or not)", def:"A plain form + かどうか puts a yes-no question inside a sentence: [来]{く}るかどうか[分]{わ}かりません (I don’t know whether they’re coming). Nouns and な-adjectives drop だ: [本当]{ほんとう}かどうか.", codex:"direction-and-embedded-questions"}
 ],
 bank:[
  {
   id:"e3u7-q01",
   lesson:"e3u7-l1",
   level:1,
   q:"What is the passive form of [待]{ま}つ (wait)?",
   options:[
    {t:"[待]{ま}たれる", ok:true, why:"Godan: つ → た, then れる."},
    {t:"[待]{ま}たられる", why:"Godan verbs add れる, not られる: [待]{ま}たれる."},
    {t:"[待]{ま}てる", why:"This is the potential, “can wait”."},
    {t:"[待]{ま}ちられる", why:"The passive is built on the ない-form stem [待]{ま}た, not the ます stem [待]{ま}ち."}
   ]
  },
  {
   id:"e3u7-q02",
   lesson:"e3u7-l1",
   level:1,
   q:"In a passive sentence about something done to a person, which particle usually marks the doer?",
   options:[
    {t:"に", ok:true, why:"The doer takes に: [先生]{せんせい}にほめられました."},
    {t:"を", why:"を marks an object. In a passive it can mark a body part or belonging ([足]{あし}を[踏]{ふ}まれた), but not the doer."},
    {t:"が", why:"が would make the doer the subject of a passive verb, which changes the meaning or makes the sentence wrong."},
    {t:"で", why:"で marks a place or a means, not the doer."}
   ]
  },
  {
   id:"e3u7-q03",
   lesson:"e3u7-l1",
   level:2,
   q:"Choose the passive that completes the sentence: まりやさんは[先生]{せんせい}に（　）。 (Mariya was praised by the teacher.)",
   options:[
    {t:"ほめられました", ok:true, why:"ほめる is ichidan: drop る, add られる, then ました."},
    {t:"ほめました", why:"This is active: “Mariya praised the teacher”, which doesn’t fit に and the meaning."},
    {t:"ほめさせました", why:"This is the causative (Lesson 2): “made someone praise”."},
    {t:"ほめれました", why:"ほめれる is a casual potential (ら[抜]{ぬ}き), never a passive. The passive is ほめられる."}
   ]
  },
  {
   id:"e3u7-q04",
   lesson:"e3u7-l1",
   level:1,
   q:"What is the passive of [招待]{しょうたい}する (invite)?",
   options:[
    {t:"[招待]{しょうたい}される", ok:true, why:"する-verbs follow する: する → される."},
    {t:"[招待]{しょうたい}しられる", why:"する is irregular; its passive is される, not しられる."},
    {t:"[招待]{しょうたい}させる", why:"させる is the causative of する: “make someone invite”."},
    {t:"[招待]{しょうたい}できる", why:"できる is the potential of する: “can invite”."}
   ]
  },
  {
   id:"e3u7-q05",
   lesson:"e3u7-l1",
   level:3,
   q:"Cheska writes: 「[昨日]{きのう}は[友達]{ともだち}に[来]{こ}られて、[勉強]{べんきょう}できませんでした。」 What does she mean?",
   options:[
    {
     t:"A friend came over, and because of that she couldn’t study.",
     ok:true,
     why:"[来]{こ}られて is the suffering passive of [来]{く}る: the visit affected her, and the second half says how."
    },
    {
     t:"She could visit her friend, but couldn’t study.",
     why:"Visiting her friend would be [友達]{ともだち}の[家]{いえ}に[行]{い}って. に + passive shows the friend came, and she was affected."
    },
    {t:"She made her friend come, so they couldn’t study.", why:"“Made someone come” would be the causative, [来]{こ}させて."},
    {
     t:"Her friend kindly came to help her study.",
     why:"A welcome visit would be ～てくれて or ～てもらって. The passive, plus “couldn’t study”, shows a nuisance."
    }
   ]
  },
  {
   id:"e3u7-q06",
   lesson:"e3u7-l1",
   level:2,
   q:"Complete the sentence: 「[源氏物語]{げんじものがたり}」は[紫式部]{むらさきしきぶ}（　）[書]{か}かれました。",
   options:[
    {t:"によって", ok:true, why:"The creator of a work takes によって in a passive sentence."},
    {t:"に", why:"に marks the doer when something is done to a person, but with works that someone created, Japanese uses によって."},
    {t:"を", why:"を marks an object; Murasaki Shikibu is the writer, not the thing written."},
    {t:"で", why:"で marks a place or means (a pen, a language), not the author."}
   ]
  },
  {
   id:"e3u7-q07",
   lesson:"e3u7-l1",
   level:2,
   q:"In 「[私]{わたし}は[辛]{から}いものが[食]{た}べられません。」, what does 食べられません mean?",
   options:[
    {t:"can’t eat (potential)", ok:true, why:"が marks what you can or can’t eat, and there is no doer with に: “I can’t eat spicy food.”"},
    {t:"isn’t eaten (passive)", why:"A passive would need a different topic and usually a doer with に. Here [私]{わたし} is the eater."},
    {t:"doesn’t eat (respectful)", why:"Speakers don’t use respectful forms about themselves."},
    {t:"isn’t made to eat (causative-passive)", why:"That would be 食べさせられません (Lesson 2)."}
   ]
  },
  {
   id:"e3u7-q08",
   lesson:"e3u7-l1",
   level:1,
   q:"Which of these is **not** a passive form?",
   options:[
    {t:"[書]{か}ける", ok:true, why:"書ける is the potential of 書く, “can write”. The passive is 書かれる."},
    {t:"[書]{か}かれる", why:"This is the passive of 書く: “be written”."},
    {t:"[見]{み}られる", why:"This can be the passive of 見る (it can also be the potential)."},
    {t:"される", why:"This is the passive of する."}
   ]
  },
  {
   id:"e3u7-q09",
   lesson:"e3u7-l1",
   level:3,
   q:"Cheska says: 「[隣]{となり}の[人]{ひと}に[夜]{よる}[遅]{おそ}くまで[騒]{さわ}がれて、[眠]{ねむ}れませんでした。」 ([騒]{さわ}ぐ = make a noise). What happened?",
   options:[
    {
     t:"Her neighbors were noisy until late, and she couldn’t sleep.",
     ok:true,
     why:"[騒]{さわ}がれて is the suffering passive of [騒]{さわ}ぐ: the noise affected her."
    },
    {
     t:"She was noisy until late and her neighbors couldn’t sleep.",
     why:"The passive puts Cheska on the receiving end; [隣]{となり}の人に marks the people who made the noise."
    },
    {t:"Her neighbors told her to be quiet.", why:"That would be [注意]{ちゅうい}されました or [言]{い}われました. [騒]{さわ}ぐ means “make a noise”."},
    {
     t:"She was made to make a noise by her neighbors.",
     why:"“Made to” is the causative-passive ([騒]{さわ}がされる or [騒]{さわ}がせられる). [騒]{さわ}がれる is the plain passive."
    }
   ]
  },
  {
   id:"e3u7-q10",
   lesson:"e3u7-l2",
   level:1,
   q:"What is the causative form of [読]{よ}む (read)?",
   options:[
    {t:"読ませる", ok:true, why:"Godan: む → ま, then せる."},
    {t:"読まさせる", why:"Godan verbs add せる only; the extra さ is a common slip."},
    {t:"読まれる", why:"This is the passive, “be read”."},
    {t:"読みさせる", why:"The causative uses the ない-form stem 読ま, not the ます stem."}
   ]
  },
  {
   id:"e3u7-q11",
   lesson:"e3u7-l2",
   level:1,
   q:"How is the causative of [来]{く}る (come) read?",
   options:[
    {t:"こさせる", ok:true, why:"[来]{く}る uses こ in the causative, as in [来]{こ}ない: [来]{こ}させる."},
    {t:"きさせる", why:"き is the reading in [来]{き}ます and [来]{き}て, not in the causative."},
    {t:"くさせる", why:"く is the reading only in the dictionary form [来]{く}る."},
    {t:"こられる", why:"This is the passive (or potential, or respectful) form of [来]{く}る."}
   ]
  },
  {
   id:"e3u7-q12",
   lesson:"e3u7-l2",
   level:2,
   q:"「[部長]{ぶちょう}はあおいさんを[大阪]{おおさか}へ[出張]{しゅっちょう}させました。」 What happened?",
   options:[
    {t:"The manager sent Aoi on a business trip to Osaka.", ok:true, why:"The causative: the manager (topic) caused Aoi (を) to go on the trip."},
    {t:"Aoi sent the manager on a business trip to Osaka.", why:"The topic, [部長]{ぶちょう}は, is the causer. Aoi is the one who went."},
    {t:"The manager went on a business trip with Aoi.", why:"“With Aoi” would be あおいさんと. The causative means the manager made Aoi go."},
    {
     t:"The manager was sent on a business trip by Aoi.",
     why:"That would need the causative-passive with the manager as the topic: [部長]{ぶちょう}はあおいさんに[出張]{しゅっちょう}させられました."
    }
   ]
  },
  {
   id:"e3u7-q13",
   lesson:"e3u7-l2",
   level:2,
   q:"「[先輩]{せんぱい}にお[酒]{さけ}を[飲]{の}まされました。」 What does the speaker mean?",
   options:[
    {t:"A senior made me drink alcohol.", ok:true, why:"[飲]{の}まされる is the short causative-passive of [飲]{の}む: “be made to drink”."},
    {t:"I made a senior drink alcohol.", why:"That would be the causative: [先輩]{せんぱい}にお[酒]{さけ}を[飲]{の}ませました."},
    {t:"A senior drank my alcohol.", why:"That would be the suffering passive: [先輩]{せんぱい}にお[酒]{さけ}を[飲]{の}まれました."},
    {t:"A senior let me drink alcohol.", why:"“Let me” is the causative with ～てくれる: [飲]{の}ませてくれました. The causative-passive means “be made to”."}
   ]
  },
  {
   id:"e3u7-q14",
   lesson:"e3u7-l2",
   level:2,
   q:"Which of these causative-passive forms is **wrong**?",
   options:[
    {t:"[話]{はな}さされる", ok:true, why:"Godan verbs ending in す have no short form. The only causative-passive is 話させられる."},
    {t:"[話]{はな}させられる", why:"This is correct: 話させる + られる."},
    {t:"[待]{ま}たされる", why:"This is correct: the short form, common in speech, of [待]{ま}たせられる."},
    {t:"[待]{ま}たせられる", why:"This is correct: the long form, [待]{ま}たせる + られる."}
   ]
  },
  {
   id:"e3u7-q15",
   lesson:"e3u7-l2",
   level:1,
   q:"What is the short form of [書]{か}かせられる (be made to write)?",
   options:[
    {t:"書かされる", ok:true, why:"Godan verbs (except those ending in す) can use あ-row + される."},
    {t:"書かれる", why:"This is the plain passive, “be written”, which has lost the “made to” meaning."},
    {t:"書かせる", why:"This is the causative, “make someone write”."},
    {t:"書かさせる", why:"This isn’t a correct form: the causative has no extra さ."}
   ]
  },
  {
   id:"e3u7-q16",
   lesson:"e3u7-l2",
   level:2,
   q:"How do you say “Let me think about it a little” politely?",
   options:[
    {t:"[少]{すこ}し[考]{かんが}えさせてください。", ok:true, why:"The causative て-form [考]{かんが}えさせて + ください asks to be allowed to think."},
    {t:"[少]{すこ}し[考]{かんが}えられてください。", why:"[考]{かんが}えられる is the passive or potential; it can’t ask for permission."},
    {t:"[少]{すこ}し[考]{かんが}えさせられてください。", why:"The causative-passive means “be made to”, which makes no sense as a request."},
    {t:"[少]{すこ}し[考]{かんが}えてさせてください。", why:"The て-form and the causative don’t stack like this. The causative て-form is [考]{かんが}えさせて."}
   ]
  },
  {
   id:"e3u7-q17",
   lesson:"e3u7-l2",
   level:3,
   q:"Cheska’s professor made her rewrite her report, which she didn’t want to do. She tells a friend: 「[先生]{せんせい}にレポートを（　）。」 ([書]{か}き[直]{なお}す = rewrite)",
   options:[
    {
     t:"書き[直]{なお}させられました",
     ok:true,
     why:"The causative-passive: she was made to rewrite it. 書き[直]{なお}す ends in す, so it has only the long form."
    },
    {t:"書き[直]{なお}させました", why:"The causative alone would mean she made the teacher rewrite it."},
    {t:"書き[直]{なお}されました", why:"The passive would mean the teacher rewrote her report himself or herself, to her annoyance."},
    {t:"書き[直]{なお}してもらいました", why:"～てもらう would mean the teacher kindly rewrote it for her."}
   ]
  },
  {
   id:"e3u7-q18",
   lesson:"e3u7-l2",
   level:3,
   q:"A waiter brings your food after a long wait and says お[待]{ま}たせしました. What does it literally contain?",
   options:[
    {
     t:"The causative [待]{ま}たせる (make wait) in a humble pattern: “I have made you wait”",
     ok:true,
     why:"お + [待]{ま}たせ + する is a humble form built on the causative of [待]{ま}つ, so it apologizes for keeping you waiting."
    },
    {t:"The passive of [待]{ま}つ: “I was kept waiting”", why:"The passive would be [待]{ま}たれる, and the waiter isn’t complaining about waiting."},
    {t:"The potential of [待]{ま}つ: “I could wait”", why:"The potential is [待]{ま}てる; it doesn’t appear here."},
    {t:"An order: “Please wait”", why:"“Please wait” would be お[待]{ま}ちください. お[待]{ま}たせしました is past: the waiting is over."}
   ]
  },
  {
   id:"e3u7-q19",
   lesson:"e3u7-l3",
   level:1,
   q:"How do you say “looks good” with appearance そう?",
   options:[
    {t:"よさそう", ok:true, why:"いい is irregular: よさそう."},
    {t:"いいそう", why:"いいそう is hearsay: “I hear it’s good”."},
    {t:"よそう", why:"よそう is a different word ([予想]{よそう}, a guess or forecast). Appearance needs さ: よさそう."},
    {t:"いさそう", why:"The stem of いい for そう is よ, not い."}
   ]
  },
  {
   id:"e3u7-q20",
   lesson:"e3u7-l3",
   level:1,
   q:"What does 「[雨]{あめ}が[降]{ふ}るそうです。」 mean?",
   options:[
    {t:"I hear it’s going to rain.", ok:true, why:"The dictionary form [降]{ふ}る + そうです is hearsay."},
    {t:"It looks like it’s going to rain.", why:"That is [降]{ふ}りそうです, with the ます stem."},
    {t:"It seems it rained.", why:"That would be [降]{ふ}ったようです, a conclusion about the past."},
    {t:"It’s about to stop raining.", why:"Nothing here means “stop”."}
   ]
  },
  {
   id:"e3u7-q21",
   lesson:"e3u7-l3",
   level:1,
   q:"Which is the correct way to join [学生]{がくせい} (student) and ようです?",
   options:[
    {t:"学生のようです", ok:true, why:"よう needs の after a noun."},
    {t:"学生ようです", why:"A noun can’t attach directly to よう; it needs の."},
    {t:"学生なようです", why:"な is for な-adjectives. Nouns take の."},
    {t:"学生だようです", why:"だ doesn’t go before よう."}
   ]
  },
  {
   id:"e3u7-q22",
   lesson:"e3u7-l3",
   level:1,
   q:"Which is the correct way to join [静]{しず}か (quiet) and みたいです?",
   options:[
    {t:"[静]{しず}かみたいです", ok:true, why:"みたい attaches directly to な-adjectives and nouns."},
    {t:"[静]{しず}かなみたいです", why:"な is used with よう ([静]{しず}かなようです), not with みたい."},
    {t:"[静]{しず}かのみたいです", why:"の is never used before みたい."},
    {t:"[静]{しず}かそうみたいです", why:"This stacks two patterns. Choose one: [静]{しず}かそうです or [静]{しず}かみたいです."}
   ]
  },
  {
   id:"e3u7-q23",
   lesson:"e3u7-l3",
   level:2,
   q:"A heavy bag is sliding toward the edge of a shelf. What do you shout?",
   options:[
    {t:"あ、[落]{お}ちそう！", ok:true, why:"Verb stem + そう: “it’s about to fall”, a prediction from what you see."},
    {t:"あ、[落]{お}ちるそう！", why:"Dictionary form + そう is hearsay: “I hear it will fall”."},
    {t:"あ、[落]{お}ちたようだ！", why:"This concludes that it has already fallen, but it hasn’t yet."},
    {t:"あ、[落]{お}ちるらしい！", why:"らしい passes on what you heard or worked out with some distance; it doesn’t fit a warning about what you can see."}
   ]
  },
  {
   id:"e3u7-q24",
   lesson:"e3u7-l3",
   level:1,
   q:"What does かわいそう mean?",
   options:[
    {t:"Poor thing; pitiful", ok:true, why:"かわいそう is a separate word that expresses pity."},
    {t:"Looks cute", why:"A common trap. To say something looks cute, just say かわいい."},
    {t:"I hear it’s cute", why:"That would be かわいいそうです."},
    {t:"Not cute at all", why:"That would be ぜんぜんかわいくない."}
   ]
  },
  {
   id:"e3u7-q25",
   lesson:"e3u7-l3",
   level:2,
   q:"In which sentence does らしい mean “typical of”?",
   options:[
    {t:"[今日]{きょう}は[春]{はる}らしい[天気]{てんき}です。", ok:true, why:"Noun + らしい before a noun: weather that is typical of spring."},
    {t:"[来月]{らいげつ}、[新]{あたら}しい[店]{みせ}ができるらしいです。", why:"Here らしい means “apparently”, after a plain verb."},
    {t:"あおいさんは[今日]{きょう}、[来]{こ}ないらしいです。", why:"“Apparently Aoi isn’t coming”: the hearsay meaning."},
    {t:"[昨日]{きのう}、[雨]{あめ}が[降]{ふ}ったらしいです。", why:"“Apparently it rained yesterday”: the hearsay meaning."}
   ]
  },
  {
   id:"e3u7-q26",
   lesson:"e3u7-l3",
   level:2,
   q:"Which sentence is **wrong**?",
   options:[
    {t:"[雨]{あめ}が[降]{ふ}るそうでした。", ok:true, why:"Hearsay そうです never changes. To report past rain, say [降]{ふ}ったそうです."},
    {t:"[雨]{あめ}が[降]{ふ}ったそうです。", why:"Correct: “I hear it rained.” The past is on the verb."},
    {t:"[雨]{あめ}が[降]{ふ}らないそうです。", why:"Correct: “I hear it won’t rain.” The negative is on the verb."},
    {t:"[雨]{あめ}が[降]{ふ}りそうでした。", why:"Correct: “It looked like rain.” Appearance そう can change like a な-adjective."}
   ]
  },
  {
   id:"e3u7-q27",
   lesson:"e3u7-l3",
   level:2,
   q:"Your friend arrives smiling from ear to ear. What do you say?",
   options:[
    {t:"[楽]{たの}しそうですね。", ok:true, why:"Appearance そう: she looks happy, judging by her face."},
    {t:"[楽]{たの}しいそうですね。", why:"This is hearsay, “I hear you’re having fun”, which is odd to say to her face."},
    {t:"[楽]{たの}しらしいですね。", why:"らしい attaches to the full adjective, [楽]{たの}しいらしい, and it would sound like gossip anyway."},
    {t:"[楽]{たの}しいのようですね。", why:"い-adjectives attach directly to よう, without の. And appearance そう fits better here."}
   ]
  },
  {
   id:"e3u7-q28",
   lesson:"e3u7-l3",
   level:3,
   q:"A friend says: 「トビーさんは[日本人]{にほんじん}みたいに[日本語]{にほんご}を[話]{はな}しますね。」 What does she mean?",
   options:[
    {t:"Toby speaks Japanese like a Japanese person.", ok:true, why:"みたいに before a verb means “like, in the manner of”: a comparison."},
    {t:"It seems that Toby is Japanese.", why:"That would end in 日本人みたいです. Here みたいに describes how he speaks."},
    {t:"I hear Toby speaks Japanese.", why:"Hearsay would be 話すそうです."},
    {t:"Toby speaks Japanese with Japanese people.", why:"“With” would be 日本人と."}
   ]
  },
  {
   id:"e3u7-q29",
   lesson:"e3u7-l4",
   level:1,
   q:"What is the intransitive partner of [開]{あ}ける (open something)?",
   options:[
    {t:"[開]{あ}く (あく)", ok:true, why:"[窓]{まど}を[開]{あ}ける・[窓]{まど}が[開]{あ}く."},
    {t:"[開]{あ}かる", why:"Not a real verb: it doesn’t exist. The -aru pattern fits [閉]{し}まる, not [開]{あ}く."},
    {t:"[開]{あ}けれる", why:"This is a casual potential of [開]{あ}ける (“can open”), not a different verb."},
    {t:"[開]{あ}まる", why:"Not a real verb: it was made up for this question."}
   ]
  },
  {
   id:"e3u7-q30",
   lesson:"e3u7-l4",
   level:1,
   q:"What is the transitive partner of [消]{き}える (go out, of a light)?",
   options:[
    {t:"[消]{け}す (けす)", ok:true, why:"[電気]{でんき}を[消]{け}す・[電気]{でんき}が[消]{き}える. Note the reading change."},
    {t:"[消]{き}えす", why:"Not a real verb: it doesn’t exist. The transitive is [消]{け}す."},
    {t:"[消]{け}せる", why:"This is the potential of [消]{け}す, “can switch off”."},
    {
     t:"[消]{き}らす",
     why:"Not a real verb: it was made up for this question. (There is a real きらす, written [切]{き}らす, “run out of”, but it has nothing to do with lights.)"
    }
   ]
  },
  {
   id:"e3u7-q31",
   lesson:"e3u7-l4",
   level:1,
   q:"On a train you hear: 「ドアが[閉]{し}まります。ご[注意]{ちゅうい}ください。」 What does it mean?",
   options:[
    {
     t:"The doors are closing. Please be careful.",
     ok:true,
     why:"[閉]{し}まる is intransitive: the doors close. The announcement describes the event, not who closes them."
    },
    {t:"Please close the door carefully.", why:"That would need the transitive in a request: ドアを[閉]{し}めてください."},
    {t:"The doors have been closed on purpose.", why:"That would be ドアが[閉]{し}めてあります."},
    {t:"The doors are broken. Please be careful.", why:"“Broken” would be [壊]{こわ}れています."}
   ]
  },
  {
   id:"e3u7-q32",
   lesson:"e3u7-l4",
   level:2,
   q:"Your host left the light on for you so that you wouldn’t come home to a dark house. How do you describe what you find?",
   options:[
    {t:"[電気]{でんき}がつけてありました。", ok:true, why:"Transitive つける + てある: someone switched it on deliberately, and it stayed on."},
    {t:"[電気]{でんき}がついてありました。", why:"～てある needs a transitive verb; つく is intransitive."},
    {t:"[電気]{でんき}がつけていました。", why:"With が and no doer, つけている would mean the light was switching something on."},
    {t:"[電気]{でんき}をついていました。", why:"つく is intransitive and can’t take を."}
   ]
  },
  {
   id:"e3u7-q33",
   lesson:"e3u7-l4",
   level:1,
   q:"Choose the particle: [道]{みち}に[財布]{さいふ}（　）[落]{お}ちています。",
   options:[
    {t:"が", ok:true, why:"[落]{お}ちる is intransitive: the wallet is what has fallen, so it takes が."},
    {t:"を", why:"を goes with the transitive [落]{お}とす: [財布]{さいふ}を[落]{お}としました."},
    {t:"で", why:"The place is already marked with に; で would mark where an action takes place."},
    {t:"と", why:"と means “and” or “with”, which doesn’t fit."}
   ]
  },
  {
   id:"e3u7-q34",
   lesson:"e3u7-l4",
   level:2,
   q:"Which sentence is **wrong**?",
   options:[
    {t:"[窓]{まど}が[開]{あ}いてあります。", ok:true, why:"～てある goes only with transitive verbs. Say [窓]{まど}が[開]{あ}けてあります or [窓]{まど}が[開]{あ}いています."},
    {t:"[窓]{まど}が[開]{あ}いています。", why:"Correct: intransitive + ている, the window is open."},
    {t:"[窓]{まど}が[開]{あ}けてあります。", why:"Correct: transitive + てある, someone opened it on purpose."},
    {t:"[窓]{まど}を[開]{あ}けています。", why:"Correct: transitive + ている, about a person who is opening the window (or keeping it open)."}
   ]
  },
  {
   id:"e3u7-q35",
   lesson:"e3u7-l4",
   level:1,
   q:"How is [入]{い}れる, meaning “put in”, read?",
   options:[
    {t:"いれる", ok:true, why:"“Put in” is いれる; its intransitive partner [入]{はい}る (enter) is read はいる."},
    {t:"はいれる", why:"はいれる is the potential of [入]{はい}る, “can enter”. It is written the same way, so context and reading matter."},
    {t:"にゅうれる", why:"にゅう is the on-reading of this kanji, used in compounds such as [入学]{にゅうがく}, not in this verb."},
    {t:"いりる", why:"Not a real word: there is no such reading. The verb is いれる."}
   ]
  },
  {
   id:"e3u7-q36",
   lesson:"e3u7-l4",
   level:3,
   q:"At a party the host says: 「[飲]{の}み[物]{もの}は[冷蔵庫]{れいぞうこ}に[冷]{ひ}やしてあります。」 What is she telling you?",
   options:[
    {
     t:"The drinks have been chilled for you.",
     ok:true,
     why:"[冷]{ひ}やしてある: someone chilled them on purpose, and they are ready in the fridge. ～てある often suggests preparation."
    },
    {t:"The drinks are being chilled right now.", why:"That would be [冷]{ひ}やしています."},
    {t:"Please put the drinks in the fridge.", why:"A request would be [冷]{ひ}やしてください or [冷蔵庫]{れいぞうこ}に[入]{い}れてください."},
    {t:"The drinks got cold by themselves.", why:"That would use the intransitive [冷]{ひ}える: [冷]{ひ}えています."}
   ]
  },
  {
   id:"e3u7-q37",
   lesson:"e3u7-l4",
   level:2,
   q:"[出]{で}る is intransitive. Why can you still say [部屋]{へや}を出る (leave the room)?",
   options:[
    {
     t:"Here を marks the place you leave.",
     ok:true,
     why:"With verbs of movement, を can mark the place you move out of or through, not an object that changes, as in [道]{みち}を[歩]{ある}く."
    },
    {t:"Because 出る is transitive when it means “leave”.", why:"[出]{で}る stays intransitive. Its transitive partner is [出]{だ}す, “take out”."},
    {t:"It is a mistake that everyone makes.", why:"It isn’t a mistake: [部屋]{へや}を[出]{で}る is standard Japanese."},
    {t:"Because を can replace が after any verb.", why:"It can’t: [授業]{じゅぎょう}を[始]{はじ}まる is wrong. This を is special to verbs of movement."}
   ]
  },
  {
   id:"e3u7-q38",
   lesson:"e3u7-l4",
   level:2,
   q:"In front of a sign, Rodrigo asks a friend: 「ここに[何]{なん}と[書]{か}いてありますか。」 What is he asking?",
   options:[
    {t:"What does it say here?", ok:true, why:"Right. 書いてある describes writing that is there: literally, “what has been written here?”"},
    {t:"What should I write here?", why:"That would be 何と書けばいいですか."},
    {t:"Who wrote this here?", why:"～てある leaves out the doer. “Who wrote it” would be [誰]{だれ}が書きましたか."},
    {t:"Is someone writing here now?", why:"That would be 書いています, with a doer."}
   ]
  },
  {
   id:"e3u7-q39",
   lesson:"e3u7-l5",
   level:1,
   q:"What is the ながら form of する?",
   options:[
    {t:"しながら", ok:true, why:"ます stem し + ながら."},
    {t:"するながら", why:"ながら attaches to the ます stem, not the dictionary form."},
    {t:"してながら", why:"ながら doesn’t attach to the て-form."},
    {t:"さながら", why:"さながら is a different, literary word meaning “just like”."}
   ]
  },
  {
   id:"e3u7-q40",
   lesson:"e3u7-l5",
   level:2,
   q:"Which is a rule of ～ながら?",
   options:[
    {
     t:"The same person does both actions, and the last verb is the main one.",
     ok:true,
     why:"ながら joins two actions of one person; for two people, use [間]{あいだ}."
    },
    {t:"The ながら verb carries the tense.", why:"The tense goes on the last verb only; the ながら verb never changes."},
    {t:"The two actions must be done by different people.", why:"The opposite: one person does both."},
    {t:"ながら can only describe a few seconds.", why:"It can also describe long periods: [働]{はたら}きながら[大学]{だいがく}で[勉強]{べんきょう}しています."}
   ]
  },
  {
   id:"e3u7-q41",
   lesson:"e3u7-l5",
   level:2,
   q:"Mariya says: 「[約束]{やくそく}したのに、トビーさんは[来]{き}ませんでした。」 What does のに add?",
   options:[
    {
     t:"It went against what she expected.",
     ok:true,
     why:"のに means “even though”, with feeling: he promised, yet he didn’t come, and she is disappointed."
    },
    {t:"Toby didn’t come because he had promised.", why:"That would be から. のに shows the opposite of what was expected."},
    {t:"She is asking Toby to keep his promise.", why:"A request can’t follow のに; this is a statement about what happened."},
    {t:"Toby came, as he had promised.", why:"[来]{き}ませんでした means he didn’t come."}
   ]
  },
  {
   id:"e3u7-q42",
   lesson:"e3u7-l5",
   level:1,
   q:"How do you join [日曜日]{にちようび} (Sunday) and のに?",
   options:[
    {t:"[日曜日]{にちようび}なのに", ok:true, why:"Nouns take な before のに."},
    {t:"[日曜日]{にちようび}のに", why:"A noun can’t attach directly to のに; it needs な."},
    {t:"[日曜日]{にちようび}だのに", why:"だ goes before し, not before のに."},
    {t:"[日曜日]{にちようび}ないのに", why:"ない would make it negative, “not Sunday”."}
   ]
  },
  {
   id:"e3u7-q43",
   lesson:"e3u7-l5",
   level:2,
   q:"In 「[今日]{きょう}は[雨]{あめ}だし、[寒]{さむ}いし、[家]{いえ}にいます。」, why is there だ after 雨?",
   options:[
    {t:"Nouns and な-adjectives need だ before し.", ok:true, why:"し attaches to plain forms, and the plain form of 雨です is 雨だ."},
    {t:"だ makes the sentence past.", why:"The past would be だった. だ is the plain present."},
    {t:"It is a mistake; it should be 雨なし.", why:"な is used before のに and ので, not before し."},
    {t:"だ shows that the speaker heard it from someone.", why:"Hearsay would need そうだ. This だ is just the plain form of です."}
   ]
  },
  {
   id:"e3u7-q44",
   lesson:"e3u7-l5",
   level:1,
   q:"What is the respectful ([尊敬語]{そんけいご}) verb for [言]{い}う (say)?",
   options:[
    {t:"おっしゃる", ok:true, why:"おっしゃる raises the person who speaks: [先生]{せんせい}がおっしゃいました."},
    {t:"[申]{もう}す", why:"[申]{もう}す is humble, for your own speaking: [私]{わたし}はイエンと[申]{もう}します."},
    {t:"いたす", why:"いたす is the humble verb for する."},
    {t:"[拝見]{はいけん}する", why:"[拝見]{はいけん}する is the humble verb for [見]{み}る."}
   ]
  },
  {
   id:"e3u7-q45",
   lesson:"e3u7-l5",
   level:1,
   q:"What is the ます-form of いらっしゃる?",
   options:[
    {t:"いらっしゃいます", ok:true, why:"いらっしゃる, おっしゃる, なさる and くださる use い in the ます-form."},
    {t:"いらっしゃります", why:"A natural guess for a godan verb ending in る, but these keigo verbs use い."},
    {t:"いらっしゃます", why:"The ます-form needs the stem いらっしゃい."},
    {t:"いらっしゃれます", why:"This looks like a potential form; it isn’t the polite present."}
   ]
  },
  {
   id:"e3u7-q46",
   lesson:"e3u7-l5",
   level:2,
   q:"You offer to carry a guest’s bag. Which sentence is right?",
   options:[
    {t:"お[荷物]{にもつ}をお[持]{も}ちします。", ok:true, why:"お + stem + する is humble: “I will carry your bag (for you)”."},
    {t:"お[荷物]{にもつ}をお[持]{も}ちになります。", why:"お～になる is respectful: it describes the guest carrying it."},
    {t:"お[荷物]{にもつ}をお[持]{も}ちください。", why:"This asks the guest to hold the bag."},
    {t:"お[荷物]{にもつ}を[持]{も}たれます。", why:"The passive-form respect describes the guest’s action, not yours."}
   ]
  },
  {
   id:"e3u7-q47",
   lesson:"e3u7-l5",
   level:3,
   q:"Aoi is answering the phone at her grandmother's tea shop. A supplier asks for the owner, Mrs Hamada ([浜田さん]{はまださん}). She is out. What is the right reply?",
   options:[
    {t:"[浜田]{はまだ}はただいま[出]{で}かけております。", ok:true, why:"To an outsider, the owner of your own shop is on your side (ウチ): no さん, and a humble form (おります)."},
    {t:"[浜田さん]{はまださん}はいらっしゃいません。", why:"Respectful verbs and さん for your own side are for family and friends, not for an outside caller."},
    {t:"[浜田]{はまだ}さんはおりません。", why:"The verb is humble, but さん still raises your own side in front of an outsider."},
    {t:"[浜田さん]{はまださん}は[出]{で}かけていらっしゃいます。", why:"This uses さん and a respectful verb for your own side when speaking to an outsider."}
   ]
  },
  {
   id:"e3u7-q48",
   lesson:"e3u7-l5",
   level:2,
   q:"Your teacher puts a plate of snacks on the table and says: 「どうぞ、[召]{め}し[上]{あ}がってください。」 What does she mean?",
   options:[
    {t:"Please help yourself (eat).", ok:true, why:"[召]{め}し上がる is the respectful verb for eating and drinking; ～てください makes it an invitation."},
    {t:"Please pass the plate up.", why:"上がる alone can mean “go up”, but [召]{め}し上がる is a single verb: “eat, drink”."},
    {t:"I will eat, thank you.", why:"Your own eating would be いただきます."},
    {t:"Please come in.", why:"That would be どうぞ、お[入]{はい}りください or いらっしゃい."}
   ]
  },
  {id:"e3u7-q49", lesson:"e3u7-l6", level:1, q:"What is the すぎる form of [静]{しず}か (quiet)?", options:[
   {t:"[静]{しず}かすぎる", ok:true, why:"A な-adjective adds すぎる to its bare stem."},
   {t:"[静]{しず}かなすぎる", why:"No な before すぎる: [静]{しず}かすぎる."},
   {t:"[静]{しず}かだすぎる", why:"No だ before すぎる: [静]{しず}かすぎる."},
   {t:"[静]{しず}かさすぎる", why:"Only いい and ない add さ (よすぎる, なさすぎる)."}
  ]},
  {id:"e3u7-q50", lesson:"e3u7-l6", level:1, q:"What does [使]{つか}い[方]{かた} mean?", options:[
   {t:"how to use (the way of using)", ok:true, why:"ます stem + [方]{かた} (かた): the way of doing."},
   {t:"the person who uses it", why:"That would be [使]{つか}う[人]{ひと}. [方]{かた} here means “way”."},
   {t:"easy to use", why:"That would be [使]{つか}いやすい."},
   {t:"using it too much", why:"That would be [使]{つか}いすぎ."}
  ]},
  {id:"e3u7-q51", lesson:"e3u7-l6", level:1, q:"Which is the correct way to say “easy to read”?", options:[
   {t:"[読]{よ}みやすい", ok:true, why:"やすい follows the ます stem: 読み + やすい."},
   {t:"[読]{よ}むやすい", why:"やすい doesn’t follow the dictionary form. Use the ます stem: 読みやすい."},
   {t:"[読]{よ}んでやすい", why:"やすい doesn’t follow the て-form. Use the ます stem: 読みやすい."},
   {t:"[読]{よ}みやすいだ", why:"読みやすい is an い-adjective, so it never takes だ."}
  ]},
  {id:"e3u7-q52", lesson:"e3u7-l6", level:2, q:"How do you say “how to make curry”?", options:[
   {t:"カレーの[作]{つく}り[方]{かた}", ok:true, why:"[方]{かた} makes a noun, so the object takes の: カレーの[作]{つく}り[方]{かた}."},
   {t:"カレーを[作]{つく}り[方]{かた}", why:"[作]{つく}り[方]{かた} is a noun, so を changes to の."},
   {t:"カレーが[作]{つく}り[方]{かた}", why:"[作]{つく}り[方]{かた} is a noun, so the object takes の: カレーの[作]{つく}り[方]{かた}."},
   {t:"カレーの[作]{つく}る[方]{かた}", why:"[方]{かた} (way) follows the ます stem: [作]{つく}り[方]{かた}."}
  ]},
  {id:"e3u7-q53", lesson:"e3u7-l6", level:2, q:"Kaito says: 「[昨日]{きのう}、[寝]{ね}すぎた。」 What happened?", options:[
   {t:"He slept too long.", ok:true, why:"ます stem [寝]{ね} + すぎた: slept too much."},
   {t:"He couldn’t sleep.", why:"That would be [寝]{ね}られなかった."},
   {t:"He slept well.", why:"That would be よく[寝]{ね}た. すぎる means too much, which is a problem."},
   {t:"He wanted to sleep.", why:"That would be [寝]{ね}たかった."}
  ]},
  {id:"e3u7-q54", lesson:"e3u7-l6", level:2, q:"Yến says a certain word is hard for her to pronounce, though she can say it if she goes slowly. Which sentence fits?", options:[
   {t:"この[言葉]{ことば}は[言]{い}いにくいです。", ok:true, why:"にくい: hard but possible."},
   {t:"この[言葉]{ことば}は[言]{い}えません。", why:"[言]{い}えません means she can’t say it at all, but she can say it slowly."},
   {t:"この[言葉]{ことば}は[言]{い}いやすいです。", why:"That is the opposite: easy to say."},
   {t:"この[言葉]{ことば}は[言]{い}いすぎです。", why:"[言]{い}いすぎ means “saying too much, going too far”, which is a different idea."}
  ]},
  {id:"e3u7-q55", lesson:"e3u7-l6", level:3, q:"You tell a colleague that your manager said he wants to attend the meeting. Which sentence is most appropriate?", options:[
   {t:"[部長]{ぶちょう}は[会議]{かいぎ}に[出]{で}たいとおっしゃっていました。", ok:true, why:"It reports what the manager said, with the respectful verb おっしゃる."},
   {t:"[部長]{ぶちょう}は[会議]{かいぎ}に[出]{で}たがっています。", why:"たがる describes wanting from the outside, like describing a child, which sounds rude about a superior."},
   {t:"[部長]{ぶちょう}は[会議]{かいぎ}に[出]{で}たいです。", why:"A bare ～たいです about someone else sounds as if you could read his mind."},
   {t:"[部長]{ぶちょう}は[会議]{かいぎ}に[出]{で}たがります。", why:"This describes a habit, and たがる about a superior sounds disrespectful."}
  ]},
  {id:"e3u7-q56", lesson:"e3u7-l6", level:3, q:"Megumi tells a friend: 「そうたは、[何]{なん}でも[自分]{じぶん}でやりたがるの。」 What does she mean?", options:[
   {t:"Sōta always wants to do everything by himself.", ok:true, why:"～たがる (plain) describes a habit of wanting, seen from outside."},
   {t:"Sōta can do everything by himself.", why:"“Can do” would be できる or the potential form. たがる is about wanting."},
   {t:"Sōta doesn’t want to do anything himself.", why:"That would be やりたがらない."},
   {t:"Sōta did everything by himself.", why:"That would be [自分]{じぶん}でやった."}
  ]},
  {id:"e3u7-q57", lesson:"e3u7-l6", level:3, q:"Which sentence is correct?", options:[
   {t:"[白]{しろ}い[服]{ふく}は[汚]{よご}れやすいです。", ok:true, why:"ます stem [汚]{よご}れ + やすい: white clothes get dirty easily."},
   {t:"[白]{しろ}い[服]{ふく}は[汚]{よご}れるやすいです。", why:"やすい follows the ます stem: [汚]{よご}れやすい."},
   {t:"[白]{しろ}い[服]{ふく}は[汚]{よご}れやすいでした。", why:"やすい is an い-adjective, so its polite past is [汚]{よご}れやすかったです."},
   {t:"[白]{しろ}い[服]{ふく}は[汚]{よご}れやすくです。", why:"Before です, an い-adjective keeps い: [汚]{よご}れやすいです."}
  ]},
  {id:"e3u7-q58", lesson:"e3u7-l7", level:1, q:"Which verb means “bring (a thing)”?", options:[
   {t:"[持]{も}ってくる", ok:true, why:"～てくる: toward where the speaker is."},
   {t:"[持]{も}っていく", why:"～ていく: away from the speaker, “take”."},
   {t:"[持]{も}っている", why:"[持]{も}っている means “have, be holding”."},
   {t:"[持]{も}ってみる", why:"～てみる means “try holding”."}
  ]},
  {id:"e3u7-q59", lesson:"e3u7-l7", level:1, q:"What does いってきます literally mean?", options:[
   {t:"I’ll go and come back.", ok:true, why:"[行]{い}って + きます: go, then come back. It is said when leaving home."},
   {t:"I have come.", why:"That would be [来]{き}ました. いってきます starts with going."},
   {t:"Please go.", why:"That would be いってください. The reply to いってきます is いってらっしゃい."},
   {t:"I went.", why:"That would be 行きました."}
  ]},
  {id:"e3u7-q60", lesson:"e3u7-l7", level:1, q:"Which sentence means “It has started to rain”?", options:[
   {t:"[雨]{あめ}が[降]{ふ}ってきました。", ok:true, why:"～てきた with weather: a change that has started up to now."},
   {t:"[雨]{あめ}が[降]{ふ}っていきました。", why:"～ていく points into the future, away from now. A start of rain is ～てきた."},
   {t:"[雨]{あめ}が[降]{ふ}ってみました。", why:"～てみる means “try”. Rain doesn’t try anything."},
   {t:"[雨]{あめ}が[降]{ふ}っておきました。", why:"～ておく means doing something in advance, which doesn’t fit rain."}
  ]},
  {id:"e3u7-q61", lesson:"e3u7-l7", level:2, q:"How do you ask “Do you know where Mariya is?”", options:[
   {t:"まりやさんがどこにいるか、[知]{し}っていますか。", ok:true, why:"Question word + plain form + か, then the main verb."},
   {t:"まりやさんがどこにいますか、[知]{し}っていますか。", why:"Inside a sentence, the question takes the plain form: いるか."},
   {t:"まりやさんがどこにいるかどうか、[知]{し}っていますか。", why:"With a question word (どこ), use か alone, not かどうか."},
   {t:"まりやさんがどこにいる、[知]{し}っていますか。", why:"The embedded question needs か: どこにいるか."}
  ]},
  {id:"e3u7-q62", lesson:"e3u7-l7", level:2, q:"How do you say “I’ll ask whether the shop is open tomorrow”?", options:[
   {t:"[明日]{あした}、[店]{みせ}が[開]{あ}いているかどうか、[聞]{き}いてみます。", ok:true, why:"A yes-no question in the plain form + かどうか."},
   {t:"[明日]{あした}、[店]{みせ}が[開]{あ}いていますかどうか、[聞]{き}いてみます。", why:"Inside a sentence, use the plain form: [開]{あ}いているかどうか."},
   {t:"[明日]{あした}、[店]{みせ}が[開]{あ}いているどうか、[聞]{き}いてみます。", why:"か is needed before どうか."},
   {t:"[明日]{あした}、[店]{みせ}が[開]{あ}いているだかどうか、[聞]{き}いてみます。", why:"だ never goes before か here. Verbs simply take かどうか."}
  ]},
  {id:"e3u7-q63", lesson:"e3u7-l7", level:2, q:"Rodrigo says: 「[日本]{にほん}の[生活]{せいかつ}に、だいぶ[慣]{な}れてきました。」 What does he mean?", options:[
   {t:"I’ve got quite used to life in Japan (over time, up to now).", ok:true, why:"～てきた with a change: it has been happening up to now."},
   {t:"I will get used to life in Japan from now on.", why:"That would be [慣]{な}れていくでしょう. ～てきた looks back to now."},
   {t:"I came to Japan to get used to life here.", why:"きました here is the helper ～てくる, not the verb “come” with a purpose."},
   {t:"I can’t get used to life in Japan.", why:"That would be [慣]{な}れられません. [慣]{な}れてきました is positive."}
  ]},
  {id:"e3u7-q64", lesson:"e3u7-l7", level:3, q:"You are going to a friend’s home for dinner. On the phone, your friend asks what you will bring. You will take a cake. What do you say?", options:[
   {t:"ケーキを[持]{も}っていきます。", ok:true, why:"You are not there yet, so the cake goes away from where you are: [持]{も}っていきます."},
   {t:"ケーキを[持]{も}ってきます。", why:"English “I’ll bring” misleads here. Japanese usually follows the speaker’s position: [持]{も}っていきます."},
   {t:"ケーキを[持]{も}ってきてください。", why:"That asks your friend to bring a cake."},
   {t:"ケーキを[持]{も}っていってください。", why:"That asks your friend to take a cake somewhere."}
  ]},
  {id:"e3u7-q65", lesson:"e3u7-l7", level:3, q:"Megumi texts: 「そうたが[熱]{ねつ}を[出]{だ}したので、[病院]{びょういん}に[連]{つ}れていきます。」 What will she do?", options:[
   {t:"Take Sōta to the hospital.", ok:true, why:"[連]{つ}れていく: take a person along, away from where she is now."},
   {t:"Bring Sōta home from the hospital.", why:"That would be [病院]{びょういん}から[連]{つ}れて[帰]{かえ}ります."},
   {t:"Ask you to take Sōta to the hospital.", why:"That would be [連]{つ}れていってくれませんか. Megumi says what she will do."},
   {t:"Wait for Sōta to come to the hospital.", why:"[連]{つ}れていく means she goes with him."}
  ]},
  {id:"e3u7-q66", lesson:"e3u7-l7", level:3, q:"Which sentence is correct?", options:[
   {t:"その[話]{はなし}が[本当]{ほんとう}かどうか、[分]{わ}かりません。", ok:true, why:"A noun takes かどうか directly, with no だ."},
   {t:"その[話]{はなし}が[本当]{ほんとう}だかどうか、[分]{わ}かりません。", why:"Nouns and な-adjectives drop だ before か."},
   {t:"その[話]{はなし}が[本当]{ほんとう}ですかどうか、[分]{わ}かりません。", why:"Inside a sentence, use the plain form, not です."},
   {t:"その[話]{はなし}が[本当]{ほんとう}なかどうか、[分]{わ}かりません。", why:"な doesn’t go before か. Say [本当]{ほんとう}かどうか (or [本当]{ほんとう}なのかどうか, with の)."}
  ]}
 ]
});
