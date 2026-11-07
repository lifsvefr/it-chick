/* Japanese Foundations · Unit 6 (e3u6) · N4 grammar I */
ICA.addUnit({
  id:"e3u6", track:"e3", n:6, title:"N4 grammar I", icon:"🧭",
  blurb:"Saying what you can do (the potential form and ～ことができる), what you will do (the volitional form, ～ようと[思]{おも}う and つもり), what happens if (と, ば, たら and なら, with a guide for choosing), who gives what to whom (あげる, くれる, もらう and their ～て forms), and what you must or don’t have to do, plus ～てしまう and ～ておく.",
  goals:[
    "Build the potential form of any verb, use ～ことができる, and recognise ら[抜]{ぬ}き forms such as [見]{み}れる in speech",
    "Build the volitional form, and talk about plans with ～ようと[思]{おも}う and つもり",
    "Build and use the conditionals と, ば, たら and なら, and choose between them with a step-by-step guide",
    "Describe giving, receiving and favours with あげる, くれる and もらう, from the right point of view",
    "Say what you must and don’t have to do, from formal ～なければなりません to casual ～なきゃ",
    "Use ～てしまう for finishing and for regret, and ～ておく for doing things in advance"
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e3u6-l1", title:"Can do: the potential form and ～ことができる", minutes:55,
   hook:{q:"You want to say “I can eat [納豆]{なっとう}” in a test or a formal email. Which form of [食]{た}べる (eat) do textbooks use for “can eat”?", options:["食べれる","食べられる","食べける","食べできる"], answer:1, reveal:"**食べられる.** You will often hear 食べれる in conversation, so it is a very sensible guess. It is a spoken shortcut with the ら dropped. Textbooks, tests and careful writing use the full form, 食べられる. This lesson shows how to build the “can” form of every verb, and when the short spoken version is fine."},
   goals:[
     "Build the potential form of godan and ichidan verbs, and of する and [来]{く}る",
     "Conjugate potential verbs as ichidan verbs: [書]{か}けます, 書けない, 書けた",
     "Use が (or を) and other particles with potential verbs",
     "Say “can” with ～ことができる and with noun + ができる",
     "Recognise ら[抜]{ぬ}き forms such as [見]{み}れる in speech, and use 見られる in writing",
     "Tell 見える and [聞]{き}こえる from 見られる and 聞ける"
   ],
   learn:[
    {h:"Two ways to say “can”", body:[
      {lead:"Japanese has two main ways to say that you can do something: a special verb form, the potential form, and the longer phrase ～ことができる."},
      "The [[potential-form]] changes the verb itself. [話]{はな}す (speak) becomes 話せる (can speak), and [食]{た}べる (eat) becomes 食べられる (can eat). The phrase [[koto-ga-dekiru|～ことができる]] keeps the dictionary form and adds “the thing of doing it is possible”: 話すことができる.",
      {table:[["Way","Example","Meaning"],["potential form","[日本語]{にほんご}が話せます。","I can speak Japanese."],["～ことができる","日本語を話すことができます。","I can speak Japanese."]]},
      "Both mean the same. The potential form is shorter and far more common in conversation. ～ことができる sounds a little more formal, and you see it in notices, rules and writing.",
      "“Can” covers two ideas, in Japanese as in English. One is **ability**: what a person is able to do. The other is **possibility**: what the situation allows.",
      {ex:"ミンさんは[漢字]{かんじ}が[読]{よ}めます。\nMin can read kanji. (ability)\n\n[私]{わたし}は[泳]{およ}げません。\nI can’t swim. (ability)\n\nこの[店]{みせ}ではカードが[使]{つか}えます。\nYou can use a card in this shop. (possibility)\n\n[駅]{えき}まで[歩]{ある}いて[行]{い}けます。\nYou can walk to the station. (possibility)", label:"Ability and possibility"}
    ]},
    {h:"Godan verbs: move to the え row and add る", body:[
      "For [[godan-verb|godan verbs]], change the last kana from its う-row sound to the matching え-row sound, then add る. く becomes け, む becomes め, う becomes え, and so on.",
      {table:[["Dictionary form","Potential form","Meaning"],["書く","書ける","can write"],["行く","行ける","can go"],["[泳]{およ}ぐ","[泳]{およ}げる","can swim"],["話す","話せる","can speak"],["[待]{ま}つ","[待]{ま}てる","can wait"],["[遊]{あそ}ぶ","[遊]{あそ}べる","can play"],["読む","読める","can read"],["[帰]{かえ}る","[帰]{かえ}れる","can go home"],["[買]{か}う","[買]{か}える","can buy"]]},
      "Watch verbs ending in う: the え-row partner of う is え, so [買]{か}う becomes [買]{か}える and [会]{あ}う (meet) becomes [会]{あ}える. And good news: 行く, the exception in the て-form, is regular here: 行ける.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="e3u6a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Godan potential: う row → え row + る</text><text class="s" x="62" y="44" text-anchor="middle">last kana</text><text class="s" x="200" y="44" text-anchor="middle">potential ending</text><rect class="d-lup" x="30" y="52" width="64" height="300" rx="8" stroke-width="2"/><rect class="d-sage" x="160" y="52" width="80" height="300" rx="8" stroke-width="2"/><text x="62" y="80" text-anchor="middle">う</text><text x="200" y="80" text-anchor="middle">える</text><text x="62" y="112" text-anchor="middle">く</text><text x="200" y="112" text-anchor="middle">ける</text><text x="62" y="144" text-anchor="middle">ぐ</text><text x="200" y="144" text-anchor="middle">げる</text><text x="62" y="176" text-anchor="middle">す</text><text x="200" y="176" text-anchor="middle">せる</text><text x="62" y="208" text-anchor="middle">つ</text><text x="200" y="208" text-anchor="middle">てる</text><text x="62" y="240" text-anchor="middle">ぬ</text><text x="200" y="240" text-anchor="middle">ねる</text><text x="62" y="272" text-anchor="middle">ぶ</text><text x="200" y="272" text-anchor="middle">べる</text><text x="62" y="304" text-anchor="middle">む</text><text x="200" y="304" text-anchor="middle">める</text><text x="62" y="336" text-anchor="middle">る</text><text x="200" y="336" text-anchor="middle">れる</text><path class="d-ink" d="M100 76H152M100 108H152M100 140H152M100 172H152M100 204H152M100 236H152M100 268H152M100 300H152M100 332H152" stroke-width="1.5" marker-end="url(#e3u6a1)"/><text class="s" x="250" y="80">かう</text><text class="s" x="250" y="112">かく</text><text class="s" x="250" y="144">およぐ</text><text class="s" x="250" y="176">はなす</text><text class="s" x="250" y="208">まつ</text><text class="s" x="250" y="240">しぬ</text><text class="s" x="250" y="272">あそぶ</text><text class="s" x="250" y="304">よむ</text><text class="s" x="250" y="336">かえる</text></svg>', alt:"Two columns. On the left, the last kana of godan verbs: う, く, ぐ, す, つ, ぬ, ぶ, む, る. Arrows lead to the right column of potential endings: える, ける, げる, せる, てる, ねる, べる, める, れる. Example verbs beside them: かう, かく, およぐ, はなす, まつ, しぬ, あそぶ, よむ, かえる.", cap:"Every godan verb follows the same move: the last kana slides from the う row to the え row of the kana table, and る is added."}
    ]},
    {h:"Ichidan verbs, する and くる", body:[
      "For [[ichidan-verb|ichidan verbs]], drop る and add られる.",
      {table:[["Dictionary form","Potential form","Meaning"],["食べる","食べられる","can eat"],["見る","見られる","can see, can watch"],["[起]{お}きる","[起]{お}きられる","can get up"],["[着]{き}る","[着]{き}られる","can wear"],["[教]{おし}える","[教]{おし}えられる","can teach"]]},
      "The two [[irregular-verb|irregular verbs]] need learning by heart:",
      {table:[["Dictionary form","Potential form","Note"],["する","できる","a different verb altogether"],["[来]{く}る","[来]{こ}られる","read こられる"]]},
      "できる also replaces する in compound verbs: [勉強]{べんきょう}する → [勉強]{べんきょう}できる, [運転]{うんてん}する (drive) → [運転]{うんてん}できる. And it works straight after a noun with が: [運転]{うんてん}ができます (I can drive), テニスができます (I can play tennis), 日本語ができます (I can speak Japanese).",
      "As with the て-form, the group decides everything, and the ます-form tells you the group. 見ます has lost its る, so 見る is ichidan: 見られる. [帰]{かえ}ります keeps a り, so [帰]{かえ}る is godan: [帰]{かえ}れる. If you need a reminder, see {{verb-groups}}."
    ]},
    {h:"Potential verbs are ichidan verbs", body:[
      "Here is a piece of good news. Every potential verb, whatever group it came from, is itself an ichidan verb: it conjugates by dropping る. So you already know all its forms.",
      {table:[["Form","From 書く","From 食べる"],["polite","書けます","食べられます"],["polite negative","書けません","食べられません"],["polite past","書けました","食べられました"],["plain negative","書けない","食べられない"],["plain past","書けた","食べられた"],["て-form","書けて","食べられて"]]},
      {ex:"[昨日]{きのう}の[夜]{よる}は、あまり[寝]{ね}られませんでした。\nI couldn’t sleep much last night.\n\nやっと[自転車]{じてんしゃ}に[乗]{の}れた！\nI could finally ride a bike! (casual)\n\n[明日]{あした}のパーティーに[来]{こ}られますか。\nCan you come to the party tomorrow?", label:"Potential verbs in sentences"},
      {tip:"Practise potential forms in pairs: 書く → 書ける → 書けません. Saying the negative out loud is useful, because “I can’t…” is one of the things you will need most."}
      ,{ex:"[面接官]{めんせつかん}：[何語]{なにご}が話せますか。\nオルワ：[英語]{えいご}とフランス[語]{ご}が話せます。日本語も[少]{すこ}し話せます。\n[面接官]{めんせつかん}：[車]{くるま}の[運転]{うんてん}はできますか。\nオルワ：はい、できます。\n[面接官]{めんせつかん}：[土曜日]{どようび}も[来]{こ}られますか。\nオルワ：すみません、[土曜日]{どようび}は[来]{こ}られません。\n\nInterviewer: Which languages can you speak?\nOluwa: I can speak English and French. I can speak a little Japanese too.\nInterviewer: Can you drive?\nOluwa: Yes, I can.\nInterviewer: Can you also come on Saturdays?\nOluwa: I’m sorry, I can’t come on Saturdays.", label:"Worked example: a job interview"},
      "Notice how the answers reuse the verb from the question: 話せますか → 話せます, できますか → できます. That is the natural way to say yes or no in Japanese. Notice also that the interviewer, who is at the workplace, asks [来]{こ}られますか (can you come here?)."
    ]},
    {h:"Particles: が, を and the rest", body:[
      "With a potential verb, the thing you can do is often marked with が instead of を. Both are used today.",
      {ex:"日本語が話せます。\n日本語を話せます。\nBoth: I can speak Japanese.", label:"が or を"},
      "Many textbooks teach が first, and it is correct in sentences like these, so use が when you are not sure. を is also very common, especially in conversation. You don’t need to correct anyone who uses it.",
      "Other particles do not change. A place stays a place, a person stays a person:",
      {ex:"[一人]{ひとり}で[病院]{びょういん}へ行けます。\nI can go to the hospital on my own.\n\n[週末]{しゅうまつ}は[友達]{ともだち}に[会]{あ}えません。\nI can’t meet my friends at the weekend.", label:"Other particles stay"},
      "In negative sentences, は is common for contrast: [肉]{にく}は食べられませんが、[魚]{さかな}は食べられます (I can’t eat meat, but I can eat fish)."
    ]},
    {h:"～ことができる, and noun + ができる", body:[
      "To build ～ことができる, take the [[dictionary-form]], add こと (“the act of”), and then ができる. Inside the こと part, the object keeps its normal を.",
      {ex:"[漢字]{かんじ}を書くことができます。\nI can write kanji.\n\nこのカードで[電車]{でんしゃ}に[乗]{の}ることができます。\nYou can ride trains with this card.\n\n[館内]{かんない}では[写真]{しゃしん}をとることができません。\nPhotography is not permitted inside the building. (a notice)", label:"～ことができる"},
      "Notice the last example. In notices and announcements, ～ことができません sounds polite and official, so you will see it often on signs, websites and rules.",
      "～ことができる also helps when you are not sure of a potential form. It works with almost every verb, because it uses the dictionary form, which you already know. (The exceptions are verbs like [分]{わ}かる that already mean “can”; see the end of this lesson.) Just don’t mix the two: ✗ 書けることができる says “can” twice.",
      {key:"Potential form: short and everyday. ～ことができる: a little more formal, common in writing and notices. Noun + ができる: “can do” a skill or activity, such as [料理]{りょうり}ができる (can cook)."}
    ]},
    {h:"Spoken short forms, and みえる vs みられる", body:[
      "In conversation, many people drop the ら from the potential of ichidan verbs and [来]{く}る: 見れる for 見られる, 食べれる for 食べられる, [来]{こ}れる for [来]{こ}られる. These are called [[ra-nuki-kotoba|ら[抜]{ぬ}き[言葉]{ことば}]] (*ra-nuki kotoba*, “words with the ら removed”).",
      "They are extremely common in speech, and many linguists describe them as a natural change in the language. But textbooks, the JLPT and careful writing use the full forms with ら. Learn the full forms first, and recognise the short ones when you hear them. Academic Japanese covers this in {{written-vs-spoken-japanese}}.",
      {warn:"Godan potentials such as [帰]{かえ}れる, [走]{はし}れる and [入]{はい}れる are **not** ら[抜]{ぬ}き. They come from godan verbs ([帰]{かえ}ります), so る → れる is the standard rule. Only verbs that take られる (ichidan verbs and [来]{く}る) can lose a ら."},
      "Two pairs of verbs deserve a special note. 見える (be visible) and 聞こえる (be audible) describe what reaches your eyes or ears on its own, without effort. 見られる and 聞ける mean that you are able to watch or listen because the situation allows it.",
      {table:[["Verb","Meaning","Example"],["見える","is visible, can see","[窓]{まど}から[山]{やま}が見えます。\nI can see the mountains from the window."],["見られる","can watch (it is possible)","この[映画]{えいが}はネットで見られます。\nYou can watch this film online."],["聞こえる","is audible, can hear","[隣]{となり}の[部屋]{へや}から[音楽]{おんがく}が聞こえます。\nI can hear music from the next room."],["聞ける","can listen; can ask","このアプリでラジオが聞けます。\nYou can listen to the radio with this app."]]},
      "Some verbs have no potential form, because they already contain the idea of “can”. 分かる (understand) is the most common: 日本語が分かります means “I understand Japanese”. There is no form ✗ わかれる meaning “can understand”. (分かれる, read わかれる, is a different verb: “split, divide”.)"
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["書けれる","書ける","Godan: just え row + る. Don’t add れ twice."],["食べれる (in writing)","食べられる","Ichidan: る → られる. The short form is spoken ら[抜]{ぬ}き."],["すられる, するできる","できる","The potential of する is できる."],["[来]{き}られる","[来]{こ}られる","Read こられる."],["書くができる","書くことができる","A verb needs こと before ができる."],["話せることができる","話せる or 話すことができる","Use one “can”, not two."],["わかれる (= can understand)","分かる","分かる already means “can understand”."]]},
      "One more thing to watch for later: the ichidan potential 食べられる looks exactly like the passive “is eaten”. Unit 7 teaches the passive ({{passive-form}}); context almost always tells you which is meant.",
      {terms:["potential-form","koto-ga-dekiru","ra-nuki-kotoba"]}
    ]}
   ],
   try:[
    {id:"e3u6-l1-x1", type:"mcq", q:"話す (speak) is a godan verb. What is its potential form?", options:[
      {t:"話せる", ok:true, why:"Right. す moves to the え row (せ) and る is added."},
      {t:"話される", why:"This is the passive (“is spoken”), which Unit 7 teaches. The potential of a godan verb is え row + る: 話せる."},
      {t:"話すられる", why:"られる is for ichidan verbs, and it replaces る. 話す is godan: 話せる."},
      {t:"話しれる", why:"し is the い-row sound (as in 話します). The potential uses the え row: せ."}
    ]},
    {id:"e3u6-l1-x2", type:"sort", q:"Sort these verbs by how their potential form is made. (Check the ます-form if you are unsure of the group.)", buckets:["え row + る (godan)","る → られる (ichidan)","becomes できる"], items:[
      {t:"書く (write)", b:0, why:"Godan: く → け + る: 書ける."},
      {t:"[帰]{かえ}る (go home)", b:0, why:"Godan, because the ます-form is [帰]{かえ}ります. る → れ + る: [帰]{かえ}れる. This is standard, not ら[抜]{ぬ}き."},
      {t:"[泳]{およ}ぐ (swim)", b:0, why:"Godan: ぐ → げ + る: [泳]{およ}げる."},
      {t:"見る (see)", b:1, why:"Ichidan (見ます): 見られる."},
      {t:"[起]{お}きる (get up)", b:1, why:"Ichidan ([起]{お}きます): [起]{お}きられる."},
      {t:"[教]{おし}える (teach)", b:1, why:"Ichidan ([教]{おし}えます): [教]{おし}えられる."},
      {t:"する (do)", b:2, why:"The irregular する has the potential できる."},
      {t:"[勉強]{べんきょう}する (study)", b:2, why:"Compound する verbs follow する: [勉強]{べんきょう}できる."}
    ]},
    {id:"e3u6-l1-x3", type:"match", q:"Match each verb with its potential form, written in hiragana.", pairs:[
      ["行く (go)","いける","Godan: く → け + る. 行く has no exception here."],
      ["[待]{ま}つ (wait)","まてる","Godan: つ → て + る."],
      ["[買]{か}う (buy)","かえる","Godan: う → え + る. (In kana it looks like [帰]{かえ}る, but it is a different word.)"],
      ["[着]{き}る (wear)","きられる","Ichidan ([着]{き}ます): る → られる."],
      ["[来]{く}る (come)","こられる","Irregular: [来]{こ}られる, read こ."]
    ]},
    {id:"e3u6-l1-x4", type:"order", q:"Put the steps for saying “I can’t swim” politely with [泳]{およ}ぐ in order.", items:[
      {t:"Check the group: the ます-form is [泳]{およ}ぎます, so [泳]{およ}ぐ is godan.", why:"The group comes first, because it decides the rule."},
      {t:"Godan rule: ぐ moves to the え row and る is added: [泳]{およ}げる.", why:"Second: build the potential form."},
      {t:"[泳]{およ}げる is now an ichidan verb: drop る.", why:"Every potential verb is ichidan, so it conjugates by dropping る."},
      {t:"Add ません: [泳]{およ}げません.", why:"Last: the polite negative ending."}
    ]},
    {id:"e3u6-l1-x5", type:"mcq", q:"Rewrite [漢字]{かんじ}が書けます (I can write kanji) with ～ことができる.", options:[
      {t:"[漢字]{かんじ}を書くことができます。", ok:true, why:"Right. Dictionary form + こと + ができます, and the object of 書く keeps を inside the こと part."},
      {t:"[漢字]{かんじ}を書くができます。", why:"A verb can’t go straight before ができる. It needs こと: 書くことができます."},
      {t:"[漢字]{かんじ}を書けることができます。", why:"This says “can” twice: the potential 書ける and ～ことができる. Use the dictionary form 書く."},
      {t:"[漢字]{かんじ}を書きことができます。", why:"こと follows the dictionary form (書く), not the ます stem (書き)."}
    ]},
    {id:"e3u6-l1-x6", type:"spot", q:"Sara is writing a polite email to her teacher. Tap each form that should be changed for careful writing.", ask:"should change", parts:[
      "[先生]{せんせい}、[明日]{あした}の[授業]{じゅぎょう}には",
      {t:"[出]{で}れます", flag:true, why:"ら[抜]{ぬ}き: 出る (attend, go out) is ichidan (出ます), so the written potential is 出られます."},
      "。でも、[朝]{あさ}[早]{はや}く",
      {t:"[起]{お}きれない", flag:true, why:"ら[抜]{ぬ}き: [起]{お}きる is ichidan, so the written form is [起]{お}きられない (polite: [起]{お}きられません)."},
      "ので、[少]{すこ}し[遅]{おく}れるかもしれません。[宿題]{しゅくだい}は[全部]{ぜんぶ}",
      {t:"できました", flag:false, why:"Fine: the past of できる, the potential of する."},
      "。[今]{いま}は[漢字]{かんじ}が[百]{ひゃく}ぐらい",
      {t:"読めます", flag:false, why:"Fine: 読める is the standard potential of the godan verb 読む."},
      "。[授業]{じゅぎょう}の[後]{あと}、[七時]{しちじ}までに[家]{いえ}に",
      {t:"[帰]{かえ}れます", flag:false, why:"Fine: [帰]{かえ}る is godan ([帰]{かえ}ります), so [帰]{かえ}れる is the standard potential, not ら[抜]{ぬ}き."},
      "。"
    ]},
    {id:"e3u6-l1-x7", type:"mcq", q:"Kenji is reading in his room when he notices a strange sound from the flat next door. He wasn’t trying to listen. How does he say “I can hear a strange sound”?", options:[
      {t:"[変]{へん}な[音]{おと}が聞こえます。", ok:true, why:"Right. 聞こえる is for sounds that reach your ears on their own."},
      {t:"[変]{へん}な[音]{おと}が聞けます。", why:"聞ける means you are able to listen because the situation allows it, as with an app or a concert ticket. For a sound that just reaches you, use 聞こえる."},
      {t:"[変]{へん}な[音]{おと}が聞かれます。", why:"聞かれる is the passive of 聞く (“is asked”, “is heard by someone”), not “can hear”."},
      {t:"[変]{へん}な[音]{おと}が聞きられます。", why:"There is no such form. 聞く is godan, so its potential is 聞ける, and for sounds that reach you, 聞こえる."}
    ]}
   ],
   apply:{
    intro:"Keep these notes for yourself. A few minutes a day works better than one long session.",
    tasks:[
     {t:"Write your “can and can’t” list", how:[
       "Write five things you can do and three things you can’t do yet, each as a polite potential sentence, for example: [自転車]{じてんしゃ}に[乗]{の}れます。[納豆]{なっとう}は食べられません。",
       "Use at least two godan verbs, two ichidan verbs and one する verb (with できる).",
       "Rewrite two of the sentences with ～ことができる.",
       "Check each potential form in a dictionary that lists verb forms, such as Jisho.org (“Show inflections”, where the potential is listed)."
     ], write:"できること… まだできないこと…"},
     {t:"Listen for ら[抜]{ぬ}き", how:[
       "Watch or listen to something in casual Japanese: a drama, a vlog, a podcast or friends talking.",
       "Each time you hear a potential form, note it. Was it a full form (見られる) or a ら[抜]{ぬ}き form (見れる)?",
       "For each ら[抜]{ぬ}き form you note, write the full written form next to it."
     ], write:"見れる → 見られる …"},
     {t:"Read a sign or rules page", how:[
       "Find a Japanese notice or rules page online, for example a museum, library or park page with 「ご[利用]{りよう}について」 or 「[注意]{ちゅうい}[事項]{じこう}」.",
       "Look for ～ことができます and ～ことができません, and translate three of them."
     ], write:"[館内]{かんない}では…ことができません = …"}
    ],
    proof:"Eight “can and can’t” sentences with checked forms, a short list of ら[抜]{ぬ}き forms you heard with their written forms, and three notice sentences translated."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Potential Form” (sections “Rules for creating potential form”, “Potential forms do not have direct objects” and “Are 「見える」 and 「聞こえる」 exceptions?”)", note:"Tae Kim recommends が or は rather than を with potential verbs, and calls the shortened ～れる forms of ru-verbs common but slang. (This lesson notes that を is also common in speech.)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e3u6-l2", title:"Let’s and I’m going to: the volitional form and つもり", minutes:55,
   hook:{q:"In a comic, a character alone in his room yawns and says 「よし、[寝]{ね}よう。」 Who is he talking to?", options:["His friend: he is inviting him to sleep","Himself: he is deciding to go to bed","His mother: he is asking permission","Nobody: [寝]{ね}よう is a question"], answer:1, reveal:"**Himself.** [寝]{ね}よう is the volitional form of [寝]{ね}る (go to bed). To a friend it can mean “let’s go to bed”, but said alone it is a decision: “Right, I’ll go to bed.” One form covers “let’s”, “shall I?” and “I’ll…”. This lesson shows how to build it and how to use it to talk about plans."},
   goals:[
     "Build the volitional form of godan and ichidan verbs, and of する and [来]{く}る",
     "Use the volitional form for casual “let’s”, “shall I?” and decisions made to yourself, and match it to polite ～ましょう",
     "Say what you intend to do with ～ようと[思]{おも}います and ～ようと[思]{おも}っています",
     "Talk about plans with つもり, and about schedules with [予定]{よてい}",
     "Choose between ～たい, ～ようと[思]{おも}う, つもり and [予定]{よてい}"
   ],
   learn:[
    {h:"One form, three jobs", body:[
      {lead:"The [[volitional-form]] is the plain, casual partner of ～ましょう. It shows the speaker’s will: what you suggest doing, offer to do, or decide to do."},
      {table:[["Job","Example","Meaning"],["“let’s” (to a friend)","[一緒]{いっしょ}に[帰]{かえ}ろう。","Let’s go home together."],["“shall I?” (an offer, with か)","[荷物]{にもつ}、[持]{も}とうか。","Shall I carry your bag?"],["“I’ll…” (a decision, to yourself)","そろそろ[寝]{ね}よう。","I’d better go to bed now."]]},
      "You already know the polite versions from Unit 2: ～ましょう (let’s), ～ましょうか (shall I?, shall we?) and ～ませんか (won’t you…?). See [[mashou-masenka]] if you need a reminder. The volitional form is what friends and family use instead, and it is also the base for two very useful patterns: ～ようと[思]{おも}う (I’m thinking of doing) later in this lesson, and many N3 patterns after that.",
      "The volitional form has no past tense, because you can only decide or suggest something now. In everyday Japanese it has no negative either: to say “let’s not”, people use other patterns, such as [行]{い}くのはやめよう (let’s not go; literally “let’s stop the going”)."
    ]},
    {h:"Godan verbs: move to the お row and add う", body:[
      "For godan verbs, change the last kana to the matching お-row sound and add う. In the potential form (Lesson 1) the last kana moved to the え row. Here it moves to the お row.",
      {table:[["Dictionary form","Volitional","Meaning"],["[書]{か}く","書こう","let’s write"],["行く","行こう","let’s go"],["[泳]{およ}ぐ","[泳]{およ}ごう","let’s swim"],["[話]{はな}す","話そう","let’s talk"],["[待]{ま}つ","[待]{ま}とう","let’s wait"],["[遊]{あそ}ぶ","[遊]{あそ}ぼう","let’s play"],["[飲]{の}む","[飲]{の}もう","let’s drink"],["[帰]{かえ}る","[帰]{かえ}ろう","let’s go home"],["[買]{か}う","[買]{か}おう","let’s buy"]]},
      "In speech, the う lengthens the vowel before it: 行こう sounds like “ikō”, with a long o, just like ありがとう.",
      "This is a good moment to see the whole system. A godan verb runs through all five vowel rows of the kana table, and each row feeds a different form:",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">One godan verb, five rows: かく</text><text class="s" x="40" y="46" text-anchor="middle">row</text><text class="s" x="110" y="46" text-anchor="middle">kana</text><text class="s" x="240" y="46" text-anchor="middle">form it builds</text><rect class="d-panel" x="16" y="56" width="308" height="50" rx="8" stroke-width="1.5"/><text x="40" y="86" text-anchor="middle">あ</text><rect class="d-lup" x="88" y="64" width="44" height="34" rx="6" stroke-width="2"/><text x="110" y="86" text-anchor="middle">か</text><text x="150" y="78">かかない</text><text class="s" x="150" y="96">ない-form: doesn’t write</text><rect class="d-panel" x="16" y="112" width="308" height="50" rx="8" stroke-width="1.5"/><text x="40" y="142" text-anchor="middle">い</text><rect class="d-lup" x="88" y="120" width="44" height="34" rx="6" stroke-width="2"/><text x="110" y="142" text-anchor="middle">き</text><text x="150" y="134">かきます</text><text class="s" x="150" y="152">ます-form: writes (polite)</text><rect class="d-panel" x="16" y="168" width="308" height="50" rx="8" stroke-width="1.5"/><text x="40" y="198" text-anchor="middle">う</text><rect class="d-gold" x="88" y="176" width="44" height="34" rx="6" stroke-width="2"/><text x="110" y="198" text-anchor="middle">く</text><text x="150" y="190">かく</text><text class="s" x="150" y="208">dictionary form: writes</text><rect class="d-panel" x="16" y="224" width="308" height="50" rx="8" stroke-width="1.5"/><text x="40" y="254" text-anchor="middle">え</text><rect class="d-sage" x="88" y="232" width="44" height="34" rx="6" stroke-width="2"/><text x="110" y="254" text-anchor="middle">け</text><text x="150" y="246">かける ・ かけば</text><text class="s" x="150" y="264">potential (can) ・ ば (if): Lesson 3</text><rect class="d-panel" x="16" y="280" width="308" height="50" rx="8" stroke-width="1.5"/><text x="40" y="310" text-anchor="middle">お</text><rect class="d-rose" x="88" y="288" width="44" height="34" rx="6" stroke-width="2"/><text x="110" y="310" text-anchor="middle">こ</text><text x="150" y="302">かこう</text><text class="s" x="150" y="320">volitional: let’s write</text></svg>', alt:"Five rows for the godan verb かく. あ row: か gives かかない, the ない-form. い row: き gives かきます, the ます-form. う row: く gives かく, the dictionary form. え row: け gives かける, the potential, and かけば, the ば conditional. お row: こ gives かこう, the volitional.", cap:"The five vowel rows of a godan verb. Japanese school grammar names these stems differently, but the idea is the same: each row is the base for a family of forms. (Verbs ending in う use わ for the あ row: かわない.)"}
    ]},
    {h:"Ichidan verbs, する and くる", body:[
      "For ichidan verbs, drop る and add よう.",
      {table:[["Dictionary form","Volitional","Meaning"],["[食]{た}べる","食べよう","let’s eat"],["[見]{み}る","見よう","let’s watch"],["[寝]{ね}る","[寝]{ね}よう","let’s go to bed; I’ll go to bed"],["[始]{はじ}める","[始]{はじ}めよう","let’s begin"]]},
      "The irregular verbs are short:",
      {table:[["Dictionary form","Volitional","Note"],["する","しよう","[勉強]{べんきょう}しよう, [掃除]{そうじ}しよう"],["[来]{く}る","[来]{こ}よう","read こよう"]]},
      {tip:"Notice that [来]{く}る uses こ in three forms you now know: [来]{こ}ない (Unit 3), [来]{こ}られる (Lesson 1) and [来]{こ}よう. It uses き in [来]{き}ます, [来]{き}て and [来]{き}た."}
    ]},
    {h:"Talking with friends: “let’s” and “shall I?”", body:[
      "Between friends and family, the volitional form replaces ～ましょう. Adding よ makes a suggestion more eager (“come on, let’s…”); adding か turns it into an offer or a question.",
      {table:[["Polite","Casual","Meaning"],["行きましょう。","行こう。 / 行こうよ。","Let’s go."],["[手伝]{てつだ}いましょうか。","[手伝]{てつだ}おうか。","Shall I help?"],["[何]{なに}を食べましょうか。","何食べようか。","What shall we eat?"],["行きませんか。","行かない？","Won’t you come? / Do you want to go?"]]},
      {ex:"ハナ：[週末]{しゅうまつ}、[映画]{えいが}を見に行かない？\nトマス：いいね。何を見ようか。\nハナ：[新]{あたら}しいアニメはどう？\nトマス：うん、それにしよう。", label:"Making plans with a friend"},
      "In the last line, それにしよう means “let’s go with that” (literally “let’s make it that”). ～にする means “decide on”, and you will hear it whenever people choose food, times or places.",
      "Use these casual forms with friends, family and people younger than you who you know well. With a teacher, a boss or someone you have just met, use ～ましょう and ～ませんか. Unit 5 explains when casual speech fits ({{casual-conversation}})."
    ]},
    {h:"～ようとおもう: saying what you intend", body:[
      "To tell someone about your intention, put the volitional form before と[思]{おも}います: “I think I’ll…”, “I’m thinking of…”. This is the same と[思]{おも}う for thoughts that Unit 5 teaches ([[to-omou]]).",
      {ex:"[今日]{きょう}は[早]{はや}く[寝]{ね}ようと[思]{おも}います。\nI think I’ll go to bed early today.\n\n[来年]{らいねん}、[日本]{にほん}で[働]{はたら}こうと[思]{おも}っています。\nI’m thinking of working in Japan next year.\n\n[夏休]{なつやす}みは何をしようと[思]{おも}っていますか。\nWhat are you thinking of doing in the summer holidays?", label:"～ようとおもう"},
      "There are two endings:",
      {list:[
        "**～ようと[思]{おも}います**: an intention you state now, often one you have just decided.",
        "**～ようと[思]{おも}っています**: an intention you have had for a while and still have. It is also the form to use for **other people**: アナさんは[車]{くるま}を[買]{か}おうと[思]{おも}っています (Ana is thinking of buying a car). ✗ アナさんは車を[買]{か}おうと[思]{おも}います sounds wrong, because you can’t state someone else’s thoughts directly."
      ]},
      "The past, ～ようと[思]{おも}いました, often comes before “but”: 行こうと[思]{おも}いましたが、[雨]{あめ}で行けませんでした (I meant to go, but I couldn’t because of the rain).",
      {warn:"Don’t confuse ～ようと[思]{おも}う with the dictionary form + と[思]{おも}う. 行こうと[思]{おも}います means “I intend to go”. 行くと[思]{おも}います means “I think (someone) will go”: a guess, not a plan."}
    ]},
    {h:"つもり: a firmer plan, and よてい for schedules", body:[
      "[[tsumori|つもり]] is a noun meaning “intention”. Put the dictionary form or the ない-form before it, and です after it.",
      {ex:"[来年]{らいねん}、[大学院]{だいがくいん}に[入]{はい}るつもりです。\nI intend to go on to graduate school next year.\n\n[今年]{ことし}はお[酒]{さけ}を[飲]{の}まないつもりです。\nI intend not to drink alcohol this year.\n\n[仕事]{しごと}をやめるつもりはありません。\nI have no intention of quitting my job.", label:"つもり"},
      "～つもりはありません (“have no intention of”) is stronger than ～ないつもりです. It firmly rules something out.",
      "Because つもり is a noun, it changes like one: plain つもりだ, past つもりでした. The past often means a plan that didn’t happen: [電話]{でんわ}するつもりでしたが、[忘]{わす}れてしまいました (I meant to call, but I forgot). You will meet ～てしまいました in Lesson 5.",
      "[予定]{よてい} (plan, schedule) is different: it is something arranged or timetabled, not only your own wish. It also follows the dictionary form, or a noun with の.",
      {ex:"[電車]{でんしゃ}は[三時]{さんじ}に[着]{つ}く[予定]{よてい}です。\nThe train is due to arrive at three.\n\n[来週]{らいしゅう}は[出張]{しゅっちょう}の[予定]{よてい}です。\nI’m scheduled to go on a business trip next week.", label:"よてい (schedule)"}
    ]},
    {h:"Putting it together: talking about plans", body:[
      "Here is how these patterns sound together in a polite conversation between two colleagues.",
      {ex:"ミン：[夏休]{なつやす}みは何をしますか。\nサラ：[北]{きた}の[方]{ほう}へ[旅行]{りょこう}に行こうと[思]{おも}っています。ミンさんは？\nミン：[国]{くに}へ[帰]{かえ}るつもりです。もう[飛行機]{ひこうき}を[予約]{よやく}しました。[八月]{はちがつ}[三日]{みっか}に[出発]{しゅっぱつ}する[予定]{よてい}です。\nサラ：いいですね。じゃあ、その[前]{まえ}に[一度]{いちど}、[一緒]{いっしょ}に[食事]{しょくじ}しませんか。\nミン：ええ、そうしましょう。\n\nMin: What are you doing in the summer holidays?\nSara: I’m thinking of travelling up north. And you, Min?\nMin: I intend to go back to my country. I’ve already booked the flight; I’m due to leave on 3 August.\nSara: Sounds good. Then shall we have a meal together once before that?\nMin: Yes, let’s do that.", label:"Worked example: summer plans"},
      "Look at how certain each speaker is. Sara’s trip is still an idea, so she uses ～ようと[思]{おも}っています. Min has decided, so つもりです; and his flight has a date, so [予定]{よてい}です. Sara’s invitation uses polite ～ませんか, and Min accepts with ～ましょう.",
      "Between close friends the same exchange would use the volitional form directly: [一緒]{いっしょ}にごはん食べない？ — うん、そうしよう。"
    ]},
    {h:"Which one? ～たい, ～ようとおもう, つもり and よてい", body:[
      "These four express different degrees of “I’m going to”. There are real overlaps, especially between ～ようと[思]{おも}っています and つもりです, which are often both fine. As a rough guide:",
      {table:[["Pattern","How sure","Example"],["～たい","a wish","日本へ行きたいです。\nI want to go to Japan."],["～ようと[思]{おも}う","an intention, softly stated","日本へ行こうと[思]{おも}っています。\nI’m thinking of going to Japan."],["つもり","a firm personal plan","日本へ行くつもりです。\nI intend to go to Japan."],["[予定]{よてい}","arranged or scheduled","日本へ行く[予定]{よてい}です。\nI’m scheduled to go to Japan."]]},
      "Only people have intentions. For a train, a meeting or an event, use [予定]{よてい}, not つもり or ～ようと[思]{おも}う.",
      {tip:"Many teachers advise not asking a teacher or a boss 「～つもりですか」 directly, because asking about a superior’s intentions can sound blunt. 「～ますか」 or 「～[予定]{よてい}ですか」 is safer: [明日]{あした}の[会議]{かいぎ}に[出]{で}ますか。"},
      {h:"Common mistakes"},
      {table:[["✗ Mistake","✓ Correct","Why"],["食べろう","食べよう","Ichidan verbs take よう."],["[帰]{かえ}よう","[帰]{かえ}ろう","[帰]{かえ}る is godan ([帰]{かえ}ります): お row + う."],["すろう","しよう","The volitional of する is しよう."],["[来]{こ}よう read きよう","[来]{こ}よう read こよう","[来]{く}る uses こ here."],["行こうです","行きましょう","The volitional form has no polite version with です. Use ～ましょう."],["行こうつもりです","行くつもりです","つもり follows the dictionary form."],["サラさんは行こうと[思]{おも}います","サラさんは行こうと[思]{おも}っています","For other people, use ～と[思]{おも}っています."]]},
      {terms:["volitional-form","tsumori","to-omou"]}
    ]}
   ],
   try:[
    {id:"e3u6-l2-x1", type:"mcq", q:"[帰]{かえ}る (go home) is a godan verb ([帰]{かえ}ります). What is its volitional form?", options:[
      {t:"[帰]{かえ}ろう", ok:true, why:"Right. Godan: る moves to the お row (ろ) and う is added."},
      {t:"[帰]{かえ}よう", why:"よう is for ichidan verbs. [帰]{かえ}る only looks like one; its ます-form [帰]{かえ}ります shows it is godan."},
      {t:"[帰]{かえ}りよう", why:"The volitional doesn’t use the ます stem. Godan: お row + う: [帰]{かえ}ろう."},
      {t:"[帰]{かえ}れよう", why:"[帰]{かえ}れ is the え row, used for the potential [帰]{かえ}れる. The volitional uses the お row."}
    ]},
    {id:"e3u6-l2-x2", type:"match", q:"Match each verb with its volitional form, written in hiragana.", pairs:[
      ["書く (write)","かこう","Godan: く → こ + う."],
      ["[待]{ま}つ (wait)","まとう","Godan: つ → と + う."],
      ["見る (watch)","みよう","Ichidan: る → よう."],
      ["する (do)","しよう","Irregular: しよう."],
      ["[来]{く}る (come)","こよう","Irregular: [来]{こ}よう, read こ."]
    ]},
    {id:"e3u6-l2-x3", type:"sort", q:"Sort these forms: volitional (let’s, I’ll) or potential (can)?", buckets:["Volitional","Potential"], items:[
      {t:"書こう", b:0, why:"お row + う: “let’s write”."},
      {t:"書ける", b:1, why:"え row + る: “can write”."},
      {t:"[泳]{およ}ごう", b:0, why:"お row + う: “let’s swim”."},
      {t:"[泳]{およ}げる", b:1, why:"え row + る: “can swim”."},
      {t:"見よう", b:0, why:"Ichidan + よう: “let’s watch”."},
      {t:"見られる", b:1, why:"Ichidan + られる: “can watch”."},
      {t:"[来]{こ}よう", b:0, why:"The volitional of [来]{く}る."},
      {t:"[来]{こ}られる", b:1, why:"The potential of [来]{く}る."}
    ]},
    {id:"e3u6-l2-x4", type:"mcq", q:"Your friend Luca is struggling with three heavy bags. You want to offer, casually, to carry one. What do you say?", options:[
      {t:"[一]{ひと}つ[持]{も}とうか。", ok:true, why:"Right. Volitional + か is a casual offer: “Shall I carry one?”"},
      {t:"一つ[持]{も}てる？", why:"[持]{も}てる is the potential: “Can you carry one?” That asks about Luca’s ability rather than offering help."},
      {t:"一つ[持]{も}ちたい。", why:"～たい says what you want. It sounds as if you want a bag for yourself, not that you are offering help."},
      {t:"一つ[持]{も}つつもり。", why:"つもり states a plan. It doesn’t offer anything or ask Luca whether he would like help."}
    ]},
    {id:"e3u6-l2-x5", type:"mcq", q:"How do you say “Mei is thinking of buying a car”?", options:[
      {t:"メイさんは車を[買]{か}おうと[思]{おも}っています。", ok:true, why:"Right. Volitional + と[思]{おも}っています is used for someone else’s intention."},
      {t:"メイさんは車を[買]{か}おうと[思]{おも}います。", why:"～と[思]{おも}います states your own thoughts now. For other people, use ～と[思]{おも}っています."},
      {t:"メイさんは車を[買]{か}うと[思]{おも}っています。", why:"With the dictionary form, this means “Mei thinks (someone) will buy a car”, a guess rather than her plan. The intention needs the volitional [買]{か}おう."},
      {t:"メイさんは車を[買]{か}おうつもりです。", why:"つもり follows the dictionary form: [買]{か}うつもりです. The volitional form can’t go before つもり."}
    ]},
    {id:"e3u6-l2-x6", type:"spot", q:"Ana wrote about her plans. Tap each form that is **wrong**.", ask:"is wrong", parts:[
      "[来年]{らいねん}の[春]{はる}、日本へ",
      {t:"行くつもりです", flag:false, why:"Correct: dictionary form + つもりです."},
      "。[向]{む}こうでは[料理]{りょうり}を",
      {t:"[習]{なら}おうと[思]{おも}っています", flag:false, why:"Correct: [習]{なら}う (learn) is godan, so う → お + う: [習]{なら}おう."},
      "。[毎日]{まいにち}、[新]{あたら}しい[漢字]{かんじ}を[五]{いつ}つ",
      {t:"[覚]{おぼ}えろうと[思]{おも}います", flag:true, why:"Wrong. [覚]{おぼ}える (memorise) is ichidan ([覚]{おぼ}えます), so it takes よう: [覚]{おぼ}えようと[思]{おも}います."},
      "。[週末]{しゅうまつ}は[山]{やま}に",
      {t:"[登]{のぼ}ろうと[思]{おも}っています", flag:false, why:"Correct: [登]{のぼ}る (climb) is godan ([登]{のぼ}ります): [登]{のぼ}ろう."},
      "。[兄]{あに}も[一緒]{いっしょ}に",
      {t:"きようと[思]{おも}っています", flag:true, why:"Wrong. The volitional of [来]{く}る is [来]{こ}よう, read こよう: [兄]{あに}も[一緒]{いっしょ}に[来]{こ}ようと[思]{おも}っています."},
      "。"
    ]},
    {id:"e3u6-l2-x7", type:"order", q:"Put the pieces in order to say “I’m thinking of studying” ([勉強]{べんきょう}する).", items:[
      {t:"[勉強]{べんきょう}し", why:"The verb stem comes first: する → し."},
      {t:"よう", why:"する + よう makes the volitional しよう."},
      {t:"と", why:"と marks what you think (the quoted thought)."},
      {t:"[思]{おも}って", why:"The て-form of [思]{おも}う, ready for います."},
      {t:"います", why:"～と[思]{おも}っています: an intention you have had for a while."}
    ]},
    {id:"e3u6-l2-x8", type:"mcq", q:"How do you say “The train is due to arrive at three”?", options:[
      {t:"電車は三時に[着]{つ}く[予定]{よてい}です。", ok:true, why:"Right. [予定]{よてい} is for schedules and arrangements, and a train has a timetable, not a will of its own."},
      {t:"電車は三時に[着]{つ}くつもりです。", why:"つもり is a person’s intention. A train can’t intend anything, so this sounds like a joke."},
      {t:"電車は三時に[着]{つ}こうと[思]{おも}っています。", why:"～ようと[思]{おも}う is also a person’s intention. For a timetable, use [予定]{よてい}."},
      {t:"電車は三時に[着]{つ}きたいです。", why:"～たい is a wish, and only people have wishes. Use [予定]{よてい}."}
    ]}
   ],
   apply:{
    intro:"Plans are easy to practise, because you make them every day. Keep these notes for yourself.",
    tasks:[
     {t:"Talk yourself through your evening", how:[
       "Tonight, say your next actions to yourself in the volitional form as you do them: [晩]{ばん}ごはんを[作]{つく}ろう。お[風呂]{ふろ}に入ろう。[寝]{ね}よう。",
       "Write down five that you used, and check that godan verbs end in -ō and ichidan verbs in よう."
     ], write:"[作]{つく}ろう、…"},
     {t:"Write about three plans", how:[
       "Write one sentence each about a wish (～たいです), an intention (～ようと[思]{おも}っています) and a firm plan (～つもりです).",
       "Add one schedule sentence with [予定]{よてい}: a class, a meeting or a trip that is already arranged.",
       "Add one thing you have no intention of doing, with ～つもりはありません."
     ], write:"～たいです。～ようと[思]{おも}っています。～つもりです。～[予定]{よてい}です。"},
     {t:"Turn polite invitations into casual ones", how:[
       "Write three polite invitations or offers with ～ませんか, ～ましょう and ～ましょうか.",
       "Rewrite each as you would say it to a close friend: ～ない？, the volitional, and the volitional + か.",
       "Read both versions aloud, and notice how the casual ones are shorter."
     ], write:"行きませんか → 行かない？ …"}
    ],
    proof:"Five volitional forms from your evening, five plan sentences from wish to schedule, and three invitations in both polite and casual form."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Desire and Suggestions”, sections “Making a motion to do something using the volitional form (casual)” and “(polite)”", note:"The conjugation rules for ～よう/～おう, the exceptions しよう and こよう, and the polite ～ましょう."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e3u6-l3", title:"If and when: と, ば, たら and なら", minutes:65,
   hook:{q:"A friend says to you: 「[駅]{えき}に[着]{つ}いたら、[電話]{でんわ}してね。」 When should you call?", options:["Before you leave for the station","Once you have arrived at the station","Only if you never get to the station","Every time you pass a station"], answer:1, reveal:"**Once you have arrived.** ～たら here means “when” or “once”, not “if”: your friend is sure you will arrive. Japanese doesn’t split “if” and “when” the way English does. Instead it has four forms, と, ば, たら and なら, which overlap a lot but differ at the edges. This lesson teaches all four and ends with a step-by-step guide for choosing."},
   goals:[
     "Build the と, ば, たら and なら forms of verbs, adjectives and nouns",
     "Use と for results that always or naturally follow, and know that it can’t end in a request or a plan",
     "Use ば for conditions, including advice questions such as どうすればいいですか",
     "Use たら for “if” and for “once”, and for past surprises",
     "Use なら to pick up a topic or what someone has just said, and when the result comes first",
     "Recognise where two or three forms are equally natural, and choose with a step-by-step guide"
   ],
   learn:[
    {h:"Four ways to say “if”", body:[
      {lead:"English has “if” and “when”. Japanese has four conditional forms, and none of them matches “if” exactly."},
      {table:[["Form","Built from","Core idea"],["と","dictionary or ない-form + と\n[押]{お}すと","Whenever X happens, Y follows: natural, automatic results."],["ば","the ば-form\n[押]{お}せば","If X (is true), Y. The focus is on the condition."],["たら","past form + ら\n[押]{お}したら","If or once X has happened, Y. The most flexible."],["なら","plain form or noun + なら\n[押]{お}すなら","If (it is the case that) X. It takes up a topic."]]},
      "Many sentences accept two or three of these with almost no change in meaning. That is a real feature of Japanese, not a gap in your knowledge, and textbooks disagree a little on how to describe the differences. The differences that matter show up at the edges: what kind of sentence follows, and which event comes first in time. This lesson takes each form in turn, then shows the overlaps, then gives you a guide.",
      "You will often see もし (“if by any chance”) at the start of a conditional sentence. もし doesn’t make a condition by itself; it adds a feeling of “suppose”, and it goes most naturally with たら, ば and なら: もし[時間]{じかん}があったら…, “if by any chance you have time…”."
    ]},
    {h:"と: whenever, automatically", body:[
      "Build [[conditional-to|と]] from the plain non-past: the dictionary form or the ない-form, then と. い-adjectives add と directly; nouns and な-adjectives need だ first.",
      {table:[["Word","と form","Meaning"],["[押]{お}す (press)","[押]{お}すと","if/when you press"],["ない (there isn’t)","ないと","without, if there isn’t"],["[寒]{さむ}い (cold)","[寒]{さむ}いと","when it is cold"],["[雨]{あめ} (rain)","雨だと","when it rains"]]},
      "と says that Y follows X every time, or as a natural result: laws of nature, habits, machines, directions.",
      {ex:"[春]{はる}になると、[暖]{あたた}かくなります。\nWhen spring comes, it gets warm.\n\nこのボタンを[押]{お}すと、[切符]{きっぷ}が[出]{で}ます。\nWhen you press this button, a ticket comes out.\n\nまっすぐ[行]{い}くと、[右]{みぎ}に[銀行]{ぎんこう}があります。\nIf you go straight on, there’s a bank on the right.\n\n[眼鏡]{めがね}がないと、[何]{なに}も[見]{み}えません。\nWithout my glasses, I can’t see anything.", label:"と: natural results"},
      {warn:"The part after と describes what happens. It can’t be a request, an invitation, an offer or your own plan. ✗ [駅]{えき}に[着]{つ}くと、[電話]{でんわ}してください。 Use たら instead: [駅]{えき}に[着]{つ}いたら、電話してください (Call me when you get to the station)."},
      "With a past ending, ～と、～た tells a story: “when I did X, I found Y”. [窓]{まど}を[開]{あ}けると、[雪]{ゆき}が[降]{ふ}っていました (When I opened the window, it was snowing). The verb before と stays in the non-past even here: ✗ [開]{あ}けたと."
    ]},
    {h:"ば: the condition itself", body:[
      "The ば-form ([[conditional-ba]]) has its own conjugation. For godan verbs it uses the え row again, as the potential form did.",
      {table:[["Word type","Rule","Examples"],["godan verb","え row + ば","[書]{か}けば, 行けば, [待]{ま}てば, [買]{か}えば"],["ichidan verb","る → れば","[食]{た}べれば, 見れば"],["する, [来]{く}る","すれば, [来]{く}れば","[来]{く}れば is read くれば"],["い-adjective","い → ければ","[高]{たか}ければ; いい → よければ"],["negative","ない → なければ","行かなければ, 食べなければ"],["noun, な-adjective","なら (formal: であれば)","[学生]{がくせい}なら, [静]{しず}かなら"]]},
      "ば puts the spotlight on the condition: if X is true, Y. It is common for general conditions, for what is needed to get a result, and for advice.",
      {ex:"[薬]{くすり}を[飲]{の}めば、よくなりますよ。\nIf you take the medicine, you’ll get better.\n\n[急]{いそ}げば、[間]{ま}に[合]{あ}います。\nIf you hurry, you’ll make it.\n\n[安]{やす}ければ、[買]{か}います。\nIf it’s cheap, I’ll buy it.\n\nどうすればいいですか。\nWhat should I do? (literally: if I do what, will it be good?)", label:"ば"},
      "Can a request follow ば? It depends on the condition. When the ば part is a **state**, such as ある, いる, [分]{わ}かる, an adjective or a ない-form, a request or invitation is fine: 時間があれば、[来]{き}てください (If you have time, please come). 分からなければ、[聞]{き}いてください (If you don’t understand, please ask). よければ、どうぞ (Help yourself, if you like).",
      "When the ば part is an **action**, such as arriving or going, and the same person then does the request, invitation or plan, most speakers find the sentence unnatural: ✗ [駅]{えき}に[着]{つ}けば、電話してください. Use たら instead: [駅]{えき}に[着]{つ}いたら、電話してください.",
      "This limit is softer when the two parts have different people: あなたが行けば、[私]{わたし}も行きます (If you go, I’ll go too) is natural. Grammars describe these details in different ways, so when you are unsure whether a request or plan can follow ば, use たら.",
      "ば also expresses regret: もっと[早]{はや}く[起]{お}きればよかった (I wish I’d got up earlier; literally “if I had got up earlier, it would have been good”)."
    ]},
    {h:"たら: if, and once", body:[
      "[[conditional-tara|たら]] is the easiest to build: take the plain past (the [[ta-form]]) and add ら.",
      {table:[["Word","Past","たら form"],["書く","書いた","書いたら"],["行く","行った","行ったら"],["食べる","食べた","食べたら"],["する / [来]{く}る","した / [来]{き}た","したら / [来]{き}たら (きたら)"],["高い / いい","高かった / よかった","高かったら / よかったら"],["雨 / [静]{しず}か","雨だった / [静]{しず}かだった","雨だったら / [静]{しず}かだったら"],["行かない","行かなかった","行かなかったら"]]},
      "The “past” in the form doesn’t make the condition past. It means that X is complete before Y happens. That gives たら three uses:",
      {ex:"雨だったら、[家]{いえ}で[映画]{えいが}を見ましょう。\nIf it rains, let’s watch a film at home. (if)\n\n[十時]{じゅうじ}になったら、出かけましょう。\nLet’s go out when it gets to ten. (once: ten o’clock will surely come)\n\n[家]{いえ}に[帰]{かえ}ったら、[荷物]{にもつ}が[届]{とど}いていました。\nWhen I got home, a parcel had arrived. (past: what I found)", label:"Three uses of たら"},
      "たら has none of the limits on requests and plans that と and ば have: requests, invitations, offers and plans can all follow it. That is why, in conversation, たら is the safest choice when you are unsure.",
      {tip:"よかったら (“if it’s good for you”) is a set phrase for a gentle offer or invitation: よかったら、[一緒]{いっしょ}に行きませんか (Would you like to come with us?). よければ is a slightly more formal version."}
    ]},
    {h:"なら: if that’s the case", body:[
      "[[conditional-nara|なら]] follows the plain form of a verb or い-adjective. Nouns and な-adjectives take なら directly, with no だ: 学生なら, [静]{しず}かなら (✗ 学生だなら).",
      "なら takes something as given, often something the other person has just said, and adds advice, an opinion or an offer about it: “if that’s so…”, “if it’s X you’re talking about…”.",
      {ex:"A：[週末]{しゅうまつ}、[大阪]{おおさか}へ行きます。\nB：[大阪]{おおさか}へ行くなら、[新幹線]{しんかんせん}が[便利]{べんり}ですよ。\nA: I’m going to Osaka at the weekend.\nB: If you’re going to Osaka, the bullet train is convenient.\n\nラーメンなら、[駅]{えき}の[前]{まえ}の[店]{みせ}がおいしいですよ。\nIf it’s ramen you want, the place in front of the station is good.\n\n[寒]{さむ}いなら、[窓]{まど}を[閉]{し}めましょうか。\n(Since you say you’re) cold, shall I close the window?", label:"なら"},
      "なら has one more special power: the result can happen **before** the condition. With たら, the condition always comes first.",
      {fig:'<svg viewBox="0 0 340 222"><defs><marker id="e3u6a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Which happens first?</text><text class="s" x="16" y="48">りょこうに いくなら、ガイドブックを かいます。</text><path class="d-ink" d="M16 92H324" stroke-width="2" marker-end="url(#e3u6a3)"/><text class="s" x="318" y="110" text-anchor="end">time</text><rect class="d-gold" x="24" y="62" width="128" height="22" rx="6" stroke-width="2"/><text class="s" x="88" y="78" text-anchor="middle">1 buy a guidebook</text><rect class="d-lup" x="186" y="62" width="120" height="22" rx="6" stroke-width="2"/><text class="s" x="246" y="78" text-anchor="middle">2 the trip</text><text class="s" x="16" y="150">りょこうに いったら、おみやげを かいます。</text><path class="d-ink" d="M16 194H324" stroke-width="2" marker-end="url(#e3u6a3)"/><text class="s" x="318" y="212" text-anchor="end">time</text><rect class="d-lup" x="24" y="164" width="128" height="22" rx="6" stroke-width="2"/><text class="s" x="88" y="180" text-anchor="middle">1 the trip</text><rect class="d-gold" x="186" y="164" width="120" height="22" rx="6" stroke-width="2"/><text class="s" x="246" y="180" text-anchor="middle">2 buy souvenirs</text></svg>', alt:"Two timelines. Top: りょこうに いくなら、ガイドブックを かいます. First, buy a guidebook; second, the trip. Bottom: りょこうに いったら、おみやげを かいます. First, the trip; second, buy souvenirs.", cap:"[旅行]{りょこう}に行くなら、ガイドブックを[買]{か}います: if I’m going on a trip, I’ll buy a guidebook (before I go). [旅行]{りょこう}に行ったら、おみやげを[買]{か}います: when I go on the trip, I’ll buy souvenirs (while I’m there)."}
    ]},
    {h:"Real overlaps: when more than one is right", body:[
      "Here are three common situations where two or three forms are natural. Don’t let anyone tell you only one is correct in these.",
      {table:[["Situation","Natural choices","Example"],["A general truth","と, ば, たら","[春]{はる}になると / なれば / なったら、[暖]{あたた}かくなります。"],["Asking for advice","ば, たら (often と too)","どうすればいいですか。\nどうしたらいいですか。\nどうするといいですか。"],["A state, then a request","ば, たら, なら","時間があれば / あったら / あるなら、[手伝]{てつだ}ってください。"]]},
      "In each row the meaning hardly changes. If you want a feel for the small differences: ば can sound a little more general or bookish, たら a little more conversational and focused on the result, and なら (in the last row) sounds like “if, as it seems, you have time”. In each row, the forms left out are the ones that sound wrong: と can’t take the request in the last row, and なら doesn’t fit general truths or advice questions.",
      {key:"When several forms are possible, the choice is about style, not right and wrong. The rules that matter most are the limits: no requests or plans after と (or after an action with ば), and なら when the result comes first or you are taking up a topic."}
    ]},
    {h:"Which one? A step-by-step guide", body:[
      "When you need to choose, ask these questions in order. Stop at the first “yes”.",
      {ol:[
        "Are you taking up a topic, or something the other person just said (“if that’s so”, “if it’s X”)? Or must the result happen **before** the condition? → **なら**.",
        "Is it “once” or “when” for something that will surely happen (ten o’clock, getting home)? → **たら**.",
        "Does the result ask, invite, offer, or say what you will do? → **たら**. ば is fine too if the condition is a state (あれば, よければ, なければ). Never と.",
        "Does the result always or naturally follow (nature, habits, machines, directions)? → **と**. ば and たら are often fine too.",
        "Is it the past: “when I did X, I found Y”? → **たら** or **と**, not ば or なら.",
        "Still not sure, in conversation? → **たら** is the most widely usable."
      ]},
      {fig:'<svg viewBox="0 0 340 480"><defs><marker id="e3u6a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="22" text-anchor="middle">Choosing と, ば, たら or なら</text><rect class="d-panel" x="8" y="36" width="196" height="64" rx="8" stroke-width="1.5"/><text class="s" x="16" y="56">1. A topic, or what someone</text><text class="s" x="16" y="72">just said? Or must the</text><text class="s" x="16" y="88">result happen first?</text><path class="d-ink" d="M204 68H224" stroke-width="2" marker-end="url(#e3u6a4)"/><text class="s" x="214" y="60" text-anchor="middle">yes</text><rect class="d-sage" x="228" y="46" width="104" height="44" rx="8" stroke-width="2"/><text x="280" y="73" text-anchor="middle">なら</text><path class="d-ink" d="M106 100V114" stroke-width="2" marker-end="url(#e3u6a4)"/><text class="s" x="114" y="112">no</text><rect class="d-panel" x="8" y="118" width="196" height="50" rx="8" stroke-width="1.5"/><text class="s" x="16" y="138">2. “Once”, for something</text><text class="s" x="16" y="154">that will surely happen?</text><path class="d-ink" d="M204 143H224" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-sage" x="228" y="121" width="104" height="44" rx="8" stroke-width="2"/><text x="280" y="148" text-anchor="middle">たら</text><path class="d-ink" d="M106 168V182" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-panel" x="8" y="186" width="196" height="64" rx="8" stroke-width="1.5"/><text class="s" x="16" y="206">3. Does the result ask,</text><text class="s" x="16" y="222">invite, offer, or say what</text><text class="s" x="16" y="238">you will do?</text><path class="d-ink" d="M204 218H224" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-sage" x="228" y="190" width="104" height="56" rx="8" stroke-width="2"/><text x="280" y="212" text-anchor="middle">たら</text><text class="s" x="280" y="228" text-anchor="middle">ば with states</text><text class="s" x="280" y="242" text-anchor="middle">never と</text><path class="d-ink" d="M106 250V264" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-panel" x="8" y="268" width="196" height="64" rx="8" stroke-width="1.5"/><text class="s" x="16" y="288">4. Does the result always</text><text class="s" x="16" y="304">follow: nature, machines,</text><text class="s" x="16" y="320">directions?</text><path class="d-ink" d="M204 300H224" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-sage" x="228" y="272" width="104" height="56" rx="8" stroke-width="2"/><text x="280" y="294" text-anchor="middle">と</text><text class="s" x="280" y="310" text-anchor="middle">ば, たら often</text><text class="s" x="280" y="324" text-anchor="middle">fine too</text><path class="d-ink" d="M106 332V346" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-panel" x="8" y="350" width="196" height="50" rx="8" stroke-width="1.5"/><text class="s" x="16" y="370">5. Past: “when I did X,</text><text class="s" x="16" y="386">I found Y”?</text><path class="d-ink" d="M204 375H224" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-sage" x="228" y="353" width="104" height="44" rx="8" stroke-width="2"/><text x="280" y="380" text-anchor="middle">たら or と</text><path class="d-ink" d="M106 400V414" stroke-width="2" marker-end="url(#e3u6a4)"/><rect class="d-gold" x="8" y="418" width="324" height="50" rx="8" stroke-width="2"/><text class="s" x="170" y="438" text-anchor="middle">Still not sure? In conversation,</text><text class="s" x="170" y="456" text-anchor="middle">たら is the most widely usable.</text></svg>', alt:"A flowchart with five questions in order. 1: a topic, what someone just said, or must the result happen first? Yes: なら. 2: once, for something that will surely happen? Yes: たら. 3: does the result ask, invite, offer or say what you will do? Yes: たら, or ば with states, never と. 4: does the result always follow, as with nature, machines or directions? Yes: と, with ば and たら often fine too. 5: past, when I did X I found Y? Yes: たら or と. At the bottom: still not sure? In conversation, たら is the most widely usable.", cap:"A guide, not a law: real Japanese has overlaps, and native speakers sometimes choose differently. But following these steps will keep you away from the combinations that sound wrong."}
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[着]{つ}くと、電話してください","[着]{つ}いたら、電話してください","No requests after と."],["学生だなら","学生なら","Nouns take なら directly."],["高いければ","高ければ","い → ければ: drop the い."],["いいければ","よければ","いい changes to よ: よければ, よかったら."],["[来]{く}れば read きれば","[来]{く}れば read くれば","[来]{く}る keeps く in the ば-form."],["[開]{あ}けたと、…","[開]{あ}けると、…","と follows the non-past, even in stories."],["行ったら、ビザを[取]{と}ってください (meaning before going)","行くなら、ビザを[取]{と}ってください","When the result must come first, use なら."]]},
      "Conditionals are one of the hardest parts of N4, and even advanced learners hesitate. You don’t have to master every nuance now. Start with たら for everyday speech, add と for machines and directions, and なら for responding to what people say. ば will grow on you through set phrases like どうすればいいですか.",
      "The full comparison, with notes for later levels, is in {{conditionals-to-ba-tara-nara}}.",
      {terms:["conditional-to","conditional-ba","conditional-tara","conditional-nara"]}
    ]}
   ],
   try:[
    {id:"e3u6-l3-x1", type:"mcq", q:"What is the ば-form of 行く (go)?", options:[
      {t:"行けば", ok:true, why:"Right. Godan: く moves to the え row (け) and ば is added."},
      {t:"行ければ", why:"This is a real form, but of the potential 行ける: “if (you) can go”. The plain ば-form is 行けば."},
      {t:"行くば", why:"ば doesn’t attach to the dictionary form. The last kana moves to the え row first: 行けば."},
      {t:"行ったば", why:"ば doesn’t follow the past. You may be thinking of たら: 行ったら."}
    ]},
    {id:"e3u6-l3-x2", type:"match", q:"Match each word with its たら form, written in hiragana.", pairs:[
      ["書く (write)","かいたら","Past 書いた + ら."],
      ["[来]{く}る (come)","きたら","Past [来]{き}た (read きた) + ら."],
      ["する (do)","したら","Past した + ら."],
      ["高い (expensive)","たかかったら","Past 高かった + ら."],
      ["いい (good)","よかったら","いい changes to よ: よかった + ら."]
    ]},
    {id:"e3u6-l3-x3", type:"mcq", q:"You want to tell a friend: “Call me once you’ve arrived at the station.” Which ending fits [駅]{えき}に___、電話してね。?", options:[
      {t:"[着]{つ}いたら", ok:true, why:"Right. たら means “once X has happened”, and a request can follow it."},
      {t:"[着]{つ}くと", why:"と can’t be followed by a request such as 電話してね."},
      {t:"[着]{つ}けば", why:"[着]{つ}く is an action, and your friend would both arrive and call. Most speakers find a request after an action + ば unnatural when the same person does both. Use たら."},
      {t:"[着]{つ}くなら", why:"なら lets the result come first, so this suggests calling before arriving: “if you’re going to arrive…”. That isn’t what you mean."}
    ]},
    {id:"e3u6-l3-x4", type:"mcq", q:"A colleague says 「[来週]{らいしゅう}、[大阪]{おおさか}へ[出張]{しゅっちょう}します。」 You want to recommend how to get there: “If you’re going to Osaka, the bullet train is convenient.” Which do you say?", options:[
      {t:"[大阪]{おおさか}へ行くなら、[新幹線]{しんかんせん}が[便利]{べんり}ですよ。", ok:true, why:"Right. なら takes up what your colleague just said and gives advice about it. The advice (how to travel) applies before the trip."},
      {t:"[大阪]{おおさか}へ行ったら、[新幹線]{しんかんせん}が[便利]{べんり}ですよ。", why:"たら means “once you are in Osaka”, which doesn’t fit advice about how to get there."},
      {t:"[大阪]{おおさか}へ行くと、[新幹線]{しんかんせん}が[便利]{べんり}ですよ。", why:"と describes what always follows from going to Osaka. It doesn’t take up your colleague’s words as a topic for advice."},
      {t:"[大阪]{おおさか}へ行けば、[新幹線]{しんかんせん}が[便利]{べんり}ですよ。", why:"ば makes going to Osaka a condition for the train being convenient, which sounds odd. To respond to what someone said, use なら."}
    ]},
    {id:"e3u6-l3-x5", type:"mcq", q:"Choose **all** the endings that sound natural: 「[春]{はる}に___、[桜]{さくら}が[咲]{さ}きます。」 (When spring comes, the cherry trees bloom.)", options:[
      {t:"なると", ok:true, why:"Natural. と is made for things that happen every time, like the seasons."},
      {t:"なれば", ok:true, why:"Natural. ば also works for general truths."},
      {t:"なったら", ok:true, why:"Natural. たら works too: once spring has come, the trees bloom."},
      {t:"なるなら", why:"なら takes up a topic or someone’s words (“if it’s the case that spring comes”). That doesn’t fit a law of nature."}
    ]},
    {id:"e3u6-l3-x6", type:"sort", q:"Sort these sentences: natural or not natural?", buckets:["Natural","Not natural"], items:[
      {t:"[駅]{えき}に[着]{つ}いたら、電話してください。", b:0, why:"たら can be followed by a request."},
      {t:"[駅]{えき}に[着]{つ}くと、電話してください。", b:1, why:"No requests after と. Use [着]{つ}いたら."},
      {t:"時間があれば、[手伝]{てつだ}ってください。", b:0, why:"The condition 時間がある is a state, so a request after ば is fine."},
      {t:"学生なら、[半額]{はんがく}です。", b:0, why:"A noun takes なら directly: “If you are a student, it’s half price.”"},
      {t:"学生だなら、[半額]{はんがく}です。", b:1, why:"The form is wrong: nouns take なら without だ."},
      {t:"このボタンを[押]{お}すと、ドアが[開]{あ}きます。", b:0, why:"A machine’s automatic result: a typical use of と."},
      {t:"ドアを[開]{あ}けたと、[猫]{ねこ}がいました。", b:1, why:"と follows the non-past even in a story: ドアを[開]{あ}けると (or [開]{あ}けたら)、[猫]{ねこ}がいました."},
      {t:"十時になったら、出かけましょう。", b:0, why:"たら for “once”: ten o’clock will surely come, and an invitation can follow."}
    ]},
    {id:"e3u6-l3-x7", type:"spot", q:"Min and Sara are making plans. Tap each conditional that is **wrong**.", ask:"is wrong", parts:[
      "ミン：[明日]{あした}、雨が",
      {t:"[降]{ふ}ったら", flag:false, why:"Fine: たら for “if”, followed by a question."},
      "、どうしますか。\nサラ：",
      {t:"雨なら", flag:false, why:"Fine: noun + なら, taking up what Min just mentioned."},
      "、[家]{いえ}で[映画]{えいが}を見ます。でも、[天気]{てんき}が",
      {t:"いいければ", flag:true, why:"Wrong form. いい changes to よ: 天気がよければ. (After a state like this, a wish such as ～たいです is fine.)"},
      "、[公園]{こうえん}へ行きたいです。\nミン：いいですね。[公園]{こうえん}へ",
      {t:"行くなら", flag:false, why:"Fine: なら takes up Sara’s plan, and making lunch happens before going."},
      "、お[弁当]{べんとう}を[作]{つく}りましょうか。\nサラ：ありがとう！じゃあ、[公園]{こうえん}に",
      {t:"[着]{つ}くと", flag:true, why:"Wrong: a request (～てください) can’t follow と. Use [着]{つ}いたら."},
      "、電話してください。"
    ]},
    {id:"e3u6-l3-x8", type:"mcq", q:"Fatima tells you her plan: she will buy a guidebook **before** her trip. Which sentence does she say?", options:[
      {t:"[旅行]{りょこう}に行くなら、ガイドブックを[買]{か}います。", ok:true, why:"Right. With なら, the result (buying the guidebook) can happen before the condition (the trip)."},
      {t:"[旅行]{りょこう}に行ったら、ガイドブックを[買]{か}います。", why:"With たら, the trip comes first: she would buy the guidebook once she is travelling."},
      {t:"[旅行]{りょこう}に行くと、ガイドブックを[買]{か}います。", why:"With と this can only be a habit (“whenever I travel, I buy a guidebook”), with the buying after setting off. と can’t state a one-time plan, and it doesn’t put the buying first."},
      {t:"[旅行]{りょこう}に行けば、ガイドブックを[買]{か}います。", why:"Going on a trip is an action, and Fatima does both things, so a plan after ば sounds unnatural here. ば doesn’t put the buying first either."}
    ]}
   ],
   apply:{
    intro:"Conditionals become natural through lots of small, real examples. Keep these notes for yourself.",
    tasks:[
     {t:"Write a “how to” for a machine or an app", how:[
       "Choose something you use every day: a kettle, a ticket machine, a phone app.",
       "Write three steps with と: このボタンを[押]{お}すと、～。",
       "Read them back and check that each result happens automatically, without anyone being asked to do anything."
     ], write:"～と、～ます。"},
     {t:"Plan a weekend with たら and なら", how:[
       "Write two plans that depend on the weather with たら: [晴]{は}れたら～。雨だったら～。",
       "Imagine a friend tells you three things (“I’m going to the sea”, “I’m hungry”, “I want to learn guitar”). Answer each with なら and a piece of advice or an offer.",
       "Write one “once” sentence with たら about something that will surely happen today."
     ], write:"[晴]{は}れたら… 雨だったら… …なら、…"},
     {t:"Collect set phrases", how:[
       "Learn these whole, as phrases: どうすればいいですか、よかったら、時間があれば、もし時間があったら.",
       "Say each one aloud in a short sentence of your own.",
       "Over the next week, note any conditional you see in a sign, a song or a show, and which of the four it is."
     ], write:"どうすればいいですか… よかったら…"}
    ],
    proof:"Three と sentences about a machine or app, a weekend plan with たら and three なら replies, and a short list of conditionals you noticed in real Japanese."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Conditionals” (the page is headed “How to say ‘if’ in Japanese”; sections “Expressing natural consequence using 「と」”, “Contextual conditionals using 「なら(ば)」”, “General conditionals using 「ば」”, “Past conditional using 「たら(ば)」” and “How does 「もし」 fit into all of this?”)", note:"Tae Kim’s explanation of the four conditionals. He describes ば as focusing on the condition and たら on the result, and suggests learners treat them as near-equals with verbs and い-adjectives."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e3u6-l4", title:"Giving and receiving: あげる, くれる and もらう", minutes:60,
   hook:{q:"Ana’s friend gave her a book. Ana tells you: 「[友達]{ともだち}が[本]{ほん}を___。」 Which verb fills the gap?", options:["あげました","くれました","もらいました","やりました"], answer:1, reveal:"**くれました.** English has one verb, “give”, but Japanese has two, and the choice depends on direction. When something comes **to** you (or to someone on your side, like your family), the verb is くれる. When it goes away from you, or between other people, it is あげる. もらう (receive) needs a different sentence: [友達]{ともだち}に本をもらいました. This lesson untangles all three."},
   goals:[
     "Choose あげる, くれる or もらう by the direction of the giving, from your point of view",
     "Mark the giver and the receiver with the right particles (は/が, に, から)",
     "Treat family and your own group as “your side” (ウチ) when choosing くれる",
     "Recognise the polite forms さしあげる, くださる and いただく, and casual やる",
     "Describe favours with ～てあげる, ～てくれる and ～てもらう, and ask for favours politely",
     "Avoid offering help with ～てあげる to people above you"
   ],
   learn:[
    {h:"Three verbs, one event", body:[
      {lead:"Japanese describes giving from a point of view. The same event can be told with three different verbs, depending on whose side you take."},
      "Imagine that Sara gives Kenji a book. You can describe it from Sara’s side or from Kenji’s side:",
      {ex:"サラさんはケンジさんに[本]{ほん}をあげました。\nSara gave Kenji a book. (the giver’s side: [[ageru|あげる]])\n\nケンジさんはサラさんに本をもらいました。\nKenji received a book from Sara. (the receiver’s side: [[morau|もらう]])", label:"One event, two views"},
      "Now imagine that **you** are Kenji. Something has come to you, and Japanese uses a third verb, [[kureru|くれる]]:",
      {ex:"サラさんが本をくれました。\nSara gave me a book.\n\n[私]{わたし}はサラさんに本をもらいました。\nI received a book from Sara.", label:"When the receiver is you"},
      "You usually don’t need to say [私]{わたし}に (to me) with くれる: the verb itself tells the listener that the book came to you.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e3u6a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Which way is it going?</text><rect class="d-lup" x="16" y="34" width="308" height="80" rx="10" stroke-width="2"/><text class="s" x="28" y="52">others (ソト)</text><rect class="d-panel" x="44" y="66" width="56" height="30" rx="6" stroke-width="1.5"/><text x="72" y="86" text-anchor="middle">A</text><rect class="d-panel" x="240" y="66" width="56" height="30" rx="6" stroke-width="1.5"/><text x="268" y="86" text-anchor="middle">B</text><path class="d-ink" d="M104 81H234" stroke-width="2" marker-end="url(#e3u6a5)"/><text x="170" y="74" text-anchor="middle">あげる</text><rect class="d-sage" x="16" y="196" width="308" height="64" rx="10" stroke-width="2"/><text class="s" x="28" y="214">me and my side (ウチ)</text><text x="170" y="240" text-anchor="middle">わたし ・ かぞく</text><path class="d-ink" d="M84 118V190" stroke-width="2.5" marker-end="url(#e3u6a5)"/><text x="96" y="152">くれる</text><text class="s" x="96" y="170">others → me</text><path class="d-ink" d="M256 192V120" stroke-width="2.5" marker-end="url(#e3u6a5)"/><text x="244" y="152" text-anchor="end">あげる</text><text class="s" x="244" y="170" text-anchor="end">me → others</text><text class="s" x="170" y="282" text-anchor="middle">もらう: told from the receiver’s side, either way</text></svg>', alt:"Two areas. At the top, others (ソト), with person A giving to person B: あげる. At the bottom, me and my side (ウチ): わたし and かぞく. A downward arrow from others to me is labelled くれる, others to me. An upward arrow from me to others is labelled あげる, me to others. A note at the bottom: もらう is told from the receiver’s side, either way.", cap:"あげる goes outward or sideways; くれる comes inward, to you or your side. もらう tells the same events from the receiver’s side."}
    ]},
    {h:"あげる: giving away from you, or between others", body:[
      "Use あげる when you (or your side) give something to someone else, or when one person gives to another and neither is on your side. The giver is marked with は or が, the receiver with に, and the thing with を.",
      {ex:"[私]{わたし}はミンさんにお[土産]{みやげ}をあげました。\nI gave Min a souvenir.\n\n[母]{はは}の[誕生日]{たんじょうび}に、[花]{はな}をあげました。\nI gave my mother flowers for her birthday.\n\nアナさんはトマスさんにチョコレートをあげました。\nAna gave Tomás some chocolate.", label:"あげる"},
      "The one thing you can’t do with あげる is give **to yourself**: ✗ [友達]{ともだち}が[私]{わたし}にあげました. Anything that comes to you takes くれる.",
      {tip:"Giving to your own family (like your mother in the second example) still uses あげる, because the gift goes away from you. Your family is on your side when **they receive from outsiders**, which is the next section."}
    ]},
    {h:"くれる: giving to you and your side", body:[
      "Use くれる when someone gives something to you, or to someone on your side: your family, and often your own group, team or company when you talk to outsiders. This idea of an inside group (ウチ) and an outside group (ソト) runs through Japanese; see [[uchi-soto]].",
      {ex:"[友達]{ともだち}が[誕生日]{たんじょうび}のプレゼントをくれました。\nMy friend gave me a birthday present.\n\n[隣]{となり}の[人]{ひと}が[弟]{おとうと}にお[菓子]{かし}をくれました。\nThe neighbour gave my little brother some sweets.\n\nこれ、[父]{ちち}がくれた[時計]{とけい}です。\nThis is a watch my father gave me.", label:"くれる"},
      "In the second example, the sweets went to your brother, not to you, but he is on your side, so くれる is natural. (You may sometimes hear あげる in sentences like this when people tell a story from outside, but くれる is what textbooks teach and what most speakers use.) In the third, くれた is the plain past in a noun-modifying clause, a pattern from Unit 5 ([[noun-modifier-clause]]).",
      {warn:"The opposite mistake is just as common: ✗ [私]{わたし}は[友達]{ともだち}に本をくれました. When you are the giver, the verb is あげる: [私]{わたし}は[友達]{ともだち}に本をあげました."}
    ]},
    {h:"もらう: receiving", body:[
      "もらう means “receive” or “get”. The **receiver** is the subject, and the giver is marked with に or から.",
      {ex:"[私]{わたし}はケンジさんに本をもらいました。\nI got a book from Kenji.\n\nミンさんは[先生]{せんせい}から[手紙]{てがみ}をもらいました。\nMin received a letter from her teacher.\n\n[会社]{かいしゃ}からボーナスをもらいました。\nI got a bonus from the company.", label:"もらう"},
      "With a person, に and から are both fine. With an organisation, such as a company, a school or a city office, から is the usual choice, and it is what textbooks teach.",
      "くれる and もらう often describe the same event. Compare: [友達]{ともだち}が本をくれました (My friend gave me a book) and [友達]{ともだち}に本をもらいました (I got a book from my friend). The first starts from the friend; the second starts from you. Both are correct and common.",
      {key:"Find the giver and the receiver. If the receiver is you or your side, use くれる (giver が) or もらう (receiver は, giver に). Otherwise, use あげる (giver は, receiver に) or もらう."}
    ]},
    {h:"Polite verbs, and やる", body:[
      "When someone above you is involved, such as a teacher, a boss or a customer, Japanese has polite versions of all three verbs. You will meet them often, even if at first you only need to understand them.",
      {table:[["Plain","Polite","Example"],["あげる","さしあげる","先生にお[土産]{みやげ}をさしあげました。\nI gave the teacher a souvenir."],["くれる","くださる","先生が本をくださいました。\nThe teacher gave me a book."],["もらう","いただく","先生に本をいただきました。\nI received a book from the teacher."]]},
      "くださる has an irregular ます-form: くださいます, not くださります. (The ください of ～てください is another form of the same verb.) いただく is the same verb as the いただきます you say before a meal.",
      "さしあげる and いただく lower yourself, and くださる raises the other person. These are kinds of [[keigo]]: さしあげる and いただく belong to [[kenjougo]], and くださる to [[sonkeigo]]. Unit 7 previews the common polite forms ({{polite-speech-basics}}).",
      "At the other end, やる means “give” to animals and plants: [犬]{いぬ}にえさをやる (feed the dog), [花]{はな}に[水]{みず}をやる (water the flowers). Some people also use it casually for younger family members, but used for people it can sound rough or looking down, so it is safest to keep it for animals and plants. Many people now say あげる here too, as in [花]{はな}に水をあげる, and you will hear both."
    ]},
    {h:"Favours: ～てあげる, ～てくれる, ～てもらう", body:[
      "All three verbs combine with the [[te-form]] to describe favours: doing something for someone, or having someone do something for you. The direction rules stay exactly the same.",
      {table:[["Pattern","Meaning","Example"],["～てあげる","do for someone else","[妹]{いもうと}に本を[読]{よ}んであげました。\nI read a book to my little sister."],["～てくれる","someone does for me","ケンジさんが[駅]{えき}まで[送]{おく}ってくれました。\nKenji took me to the station."],["～てもらう","I have someone do","ミンさんに[写真]{しゃしん}をとってもらいました。\nI had Min take a photo (of me)."]]},
      "With ～てもらう, the helper is marked with に: ミンさんに. With ～てあげる, use the particle the verb itself takes for the person: [妹]{いもうと}に読む (read to), [友達]{ともだち}を[手伝]{てつだ}う (help a friend). Verbs that hand something over, such as [買]{か}う or [作]{つく}る, can add the person with に: [妹]{いもうと}に本を[買]{か}ってあげました. Otherwise, use の: [友達]{ともだち}の[荷物]{にもつ}を[持]{も}ってあげました (I carried my friend’s bag as a favour).",
      "These patterns add feeling. ～てくれる and ～てもらう show that you are grateful. Compare:",
      {ex:"母が[弁当]{べんとう}を[作]{つく}ってくれました。\nMy mother made me a packed lunch. (warm: I’m grateful)\n\n母が[弁当]{べんとう}を[作]{つく}りました。\nMy mother made a packed lunch. (a plain fact)", label:"Adding gratitude"},
      "When someone does something for you, Japanese speakers usually add ～てくれる or ～てもらう. Leaving it out can sound cool or distant, as if you didn’t notice the kindness.",
      {ex:"ケンジさんは[私]{わたし}に[地図]{ちず}を[書]{か}いてくれました。\nKenji drew me a map. (from Kenji’s side, coming to me)\n\n[私]{わたし}はケンジさんに[地図]{ちず}を書いてもらいました。\nI had Kenji draw me a map. (from my side)\n\nケンジさんはサラさんに[地図]{ちず}を書いてあげました。\nKenji drew Sara a map. (between two other people)", label:"Worked example: one favour, three sentences"},
      "The first two describe the same event and are both polite and grateful. ～てもらう can also suggest that you asked for the favour, while ～てくれる often suggests that the other person offered. Both are common, so don’t worry about choosing perfectly."
    ]},
    {h:"Asking for favours, and a warning about ～てあげる", body:[
      "To ask someone to do something for you, turn ～てくれる or ～てもらう into a question. From casual to most polite:",
      {table:[["Request","Style"],["ちょっと[手伝]{てつだ}ってくれない？","casual, to friends"],["[手伝]{てつだ}ってくれませんか。","polite"],["[手伝]{てつだ}ってもらえませんか。","polite (literally “can’t I have you help?”)"],["[手伝]{てつだ}っていただけませんか。","very polite: to a teacher, a boss, a stranger"]]},
      "The negative question (～ませんか) is softer than the positive one (～ますか), because it leaves the other person room to say no. ～てもらえませんか uses the potential form of もらう from Lesson 1.",
      {warn:"Be careful with ～てあげる when you speak **to** the person you are helping. 「[持]{も}ってあげましょうか」 (Shall I carry it for you, as a favour?) stresses the favour you are doing, which can sound condescending, especially to someone above you. To offer help, use ～ましょうか: 「[持]{も}ちましょうか」 (Shall I carry it?)."},
      "～てあげる is fine for talking about favours between other people, or about what you did for a friend or a younger family member."
    ]},
    {h:"Common mistakes", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["[友達]{ともだち}が[私]{わたし}に本をあげました","[友達]{ともだち}が本をくれました","Things that come to you take くれる."],["[私]{わたし}は[友達]{ともだち}に本をくれました","[私]{わたし}は[友達]{ともだち}に本をあげました","When you give, use あげる."],["母が[弁当]{べんとう}を[作]{つく}ってあげました (meaning for me)","母が[弁当]{べんとう}を[作]{つく}ってくれました","A favour coming to you takes ～てくれる."],["先生に[持]{も}ってあげましょうか","先生、[持]{も}ちましょうか","Offer help with ～ましょうか, not ～てあげる."],["[友達]{ともだち}に[手伝]{てつだ}ってあげました","[友達]{ともだち}を[手伝]{てつだ}ってあげました","[手伝]{てつだ}う takes を for the person helped."],["くださります","くださいます","くださる has an irregular ます-form."]]},
      "If you mix up くれる and あげる at first, you are in good company: it is one of the most common N4 mistakes. Each time you describe a gift or a favour, ask yourself one question: is it coming to my side? If yes, くれる.",
      {terms:["ageru","kureru","morau","uchi-soto"]}
    ]}
   ],
   try:[
    {id:"e3u6-l4-x1", type:"mcq", q:"Kenji wants to say “My older sister gave me a scarf.” Which sentence is right?", options:[
      {t:"[姉]{あね}がマフラーをくれました。", ok:true, why:"Right. The scarf came to Kenji, so the verb is くれる, and the giver is marked with が."},
      {t:"[姉]{あね}がマフラーをあげました。", why:"あげる is for giving away from you or between others. Something that comes to you takes くれる."},
      {t:"[姉]{あね}がマフラーをもらいました。", why:"With もらう the subject is the receiver, so this says his sister received a scarf. For “I got it from my sister”, say [姉]{あね}にマフラーをもらいました."},
      {t:"[姉]{あね}がマフラーをやりました。", why:"やる is “give” to animals, plants or younger people, from your side. It can’t describe a gift coming to you."}
    ]},
    {id:"e3u6-l4-x2", type:"sort", q:"Sort these sentences: natural, or wrong direction?", buckets:["Natural","Wrong direction"], items:[
      {t:"[友達]{ともだち}が[私]{わたし}に本をくれました。", b:0, why:"The book came to me: くれる."},
      {t:"[友達]{ともだち}が[私]{わたし}に本をあげました。", b:1, why:"あげる can’t describe something coming to me. Use くれました."},
      {t:"[私]{わたし}は[友達]{ともだち}に本をあげました。", b:0, why:"I gave it away: あげる."},
      {t:"[私]{わたし}は[友達]{ともだち}に本をくれました。", b:1, why:"くれる is for things coming to me or my side. When I give, use あげました."},
      {t:"[私]{わたし}は[友達]{ともだち}から本をもらいました。", b:0, why:"I received it: もらう, with the giver marked by から."},
      {t:"サラさんはケンジさんに[花]{はな}をあげました。", b:0, why:"Between two other people: あげる."},
      {t:"先生が[弟]{おとうと}に[辞書]{じしょ}をくれました。", b:0, why:"My brother is on my side, so the gift coming to him takes くれる."}
    ]},
    {id:"e3u6-l4-x3", type:"match", q:"Match each plain form with its polite version.", pairs:[
      ["あげる","さしあげる","The humble version: you give to someone above you."],
      ["くれる","くださる","The respectful version: someone above you gives to you."],
      ["もらう","いただく","The humble version: you receive from someone above you."],
      ["～てくれませんか","～てくださいませんか","くださる’s ます-form is くださいます, so the request becomes ～てくださいませんか."],
      ["～てもらえませんか","～ていただけませんか","The potential of いただく is いただける: a very polite request."]
    ]},
    {id:"e3u6-l4-x4", type:"mcq", q:"On a rainy day, your neighbour carried your heavy shopping home for you. Telling a friend later, you want to show you are grateful. Which sentence fits best?", options:[
      {t:"[隣]{となり}の人が[荷物]{にもつ}を[持]{も}ってくれました。", ok:true, why:"Right. ～てくれる says someone did something for you, and it shows your gratitude."},
      {t:"[隣]{となり}の人が[荷物]{にもつ}を[持]{も}ちました。", why:"This is grammatical, but it is a plain fact: “The neighbour carried the bags.” It doesn’t show that it was a kindness to you."},
      {t:"[隣]{となり}の人が[荷物]{にもつ}を[持]{も}ってあげました。", why:"～てあげる is for favours going away from you. This says the neighbour carried bags for somebody else."},
      {t:"[隣]{となり}の人が[荷物]{にもつ}を[持]{も}ってもらいました。", why:"With ～てもらう the subject is the person who receives the favour, so this says the neighbour had someone carry the bags. You would need [隣]{となり}の人に[持]{も}ってもらいました."}
    ]},
    {id:"e3u6-l4-x5", type:"mcq", q:"Choose the particle: [私]{わたし}はミンさん___[写真]{しゃしん}をとってもらいました。 (I had Min take my photo.)", options:[
      {t:"に", ok:true, why:"Right. With ～てもらう, the person who does the favour is marked with に."},
      {t:"が", why:"が would make Min the subject, but the subject of もらう is the receiver of the favour, [私]{わたし}."},
      {t:"を", why:"を already marks the thing ([写真]{しゃしん}). The helper takes に."},
      {t:"で", why:"で marks places and means, not the person who helps you."}
    ]},
    {id:"e3u6-l4-x6", type:"spot", q:"Hana wrote about her birthday in her diary. Tap each verb that has the **wrong direction**.", ask:"has the wrong direction", parts:[
      "[昨日]{きのう}は[私]{わたし}の[誕生日]{たんじょうび}でした。母がケーキを",
      {t:"[作]{つく}ってくれました", flag:false, why:"Correct: her mother did it for her, so ～てくれる."},
      "。[友達]{ともだち}のアナさんは[私]{わたし}に[花]{はな}を",
      {t:"あげました", flag:true, why:"Wrong: the flowers came to Hana, so the verb is くれました."},
      "。ケンジさんにはかわいいカードを",
      {t:"もらいました", flag:false, why:"Correct: Hana is the receiver, and the giver is marked with に."},
      "。[夜]{よる}、[私]{わたし}は[妹]{いもうと}にケーキを[少]{すこ}し",
      {t:"くれました", flag:true, why:"Wrong: Hana gave the cake to her sister, so the verb is あげました."},
      "。父は[駅]{えき}まで[車]{くるま}で",
      {t:"[送]{おく}ってくれました", flag:false, why:"Correct: her father drove her to the station, a favour to her."},
      "。"
    ]},
    {id:"e3u6-l4-x7", type:"order", q:"Put the pieces in order to ask a stranger, very politely: “Could you take our photo?”", items:[
      {t:"[写真]{しゃしん}を", why:"The object comes first, before the verb."},
      {t:"とって", why:"The て-form of とる (take a photo) carries the action."},
      {t:"いただけ", why:"いただける, the potential of いただく, turns the favour into “could I receive it?”"},
      {t:"ませんか", why:"The negative question ending makes the request soft and polite."}
    ]},
    {id:"e3u6-l4-x8", type:"mcq", q:"Your teacher is carrying a heavy box down the corridor. How do you offer to help?", options:[
      {t:"先生、[持]{も}ちましょうか。", ok:true, why:"Right. ～ましょうか is the polite, natural way to offer help."},
      {t:"先生、[持]{も}ってあげましょうか。", why:"～てあげる stresses the favour you are doing, which can sound condescending to someone above you."},
      {t:"先生、[持]{も}ってくれませんか。", why:"This asks the teacher to carry something for you: the opposite of an offer."},
      {t:"先生、[持]{も}ってもらいましょうか。", why:"This means “Shall I have someone carry it?” It doesn’t offer your own help."}
    ]}
   ],
   apply:{
    intro:"Gifts and favours happen every day, so there is plenty to practise with. Keep these notes for yourself.",
    tasks:[
     {t:"Map the gifts in your life", how:[
       "Think of three things you have been given (a present, a meal, some advice) and three things you have given.",
       "Write each one twice: with くれる or あげる, and then with もらう. For example: [祖母]{そぼ}がセーターをくれました。[祖母]{そぼ}にセーターをもらいました。",
       "Check each sentence with the question: is it coming to my side?"
     ], write:"…がくれました。…にもらいました。…にあげました。"},
     {t:"A thank-you diary", how:[
       "Each evening for a week, write one sentence about something someone did for you, with ～てくれました.",
       "Add one sentence about something you did for someone, with ～てあげました (in your own diary, this is fine).",
       "At the end of the week, read them back. This is good practice, and a nice record too."
     ], write:"[今日]{きょう}、…が～てくれました。"},
     {t:"Practise asking for help", how:[
       "Write the same request four ways, from ～てくれない？ to ～ていただけませんか.",
       "Decide who you would say each one to: a sibling, a classmate, a colleague, a stranger, a teacher.",
       "Say the most polite one aloud until it feels smooth."
     ], write:"[手伝]{てつだ}ってくれない？ → … → [手伝]{てつだ}っていただけませんか。"}
    ],
    proof:"Six gift sentences written two ways, a week of thank-you sentences with ～てくれました, and one request in four levels of politeness."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Giving and Receiving” (sections “When to use 「あげる」”, “When to use 「くれる」”, “When to use 「もらう」” and “Asking favors with 「くれる」 or 「もらえる」”)", note:"Tae Kim’s guide to the three verbs, やる, the ～て versions and requests with ～てくれる and ～てもらえる."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e3u6-l5", title:"Must, don’t have to, and getting things done: ～なければならない, ～てしまう, ～ておく", minutes:60,
   hook:{q:"Your teacher says: 「[明日]{あした}は[学校]{がっこう}に[来]{こ}なくてもいいですよ。」 What does she mean?", options:["You must come to school tomorrow.","You must not come to school tomorrow.","You don’t have to come to school tomorrow.","You can’t come to school tomorrow."], answer:2, reveal:"**You don’t have to come.** ～なくてもいい means “not doing is OK”. It isn’t a ban: you may still come if you want to. “Must”, “must not”, “don’t have to” and “may” are four separate patterns in Japanese, and they fit together neatly. This lesson builds all four, then adds two everyday helpers: ～てしまう (finished, or oops) and ～ておく (done in advance)."},
   goals:[
     "Build ～なければなりません and ～なくてはいけません from the ない-form, and understand why they mean “must”",
     "Choose between formal, polite and casual ways to say “must”, including ～ないと and ～なきゃ",
     "Say “don’t have to” with ～なくてもいい, and tell it apart from “must not” (～てはいけない)",
     "Use ～てしまう for finishing completely and for regret, and recognise casual ～ちゃう",
     "Use ～ておく for doing something in advance or leaving something as it is, and recognise casual ～とく"
   ],
   learn:[
    {h:"“Must” is a double negative", body:[
      {lead:"Japanese doesn’t have a single word for “must”. Instead it says “if you don’t do it, it won’t do”."},
      "Take [行]{い}かなければなりません (I must go). Break it into pieces:",
      {table:[["Piece","Meaning"],["行かな(い)","not go (the [[nai-form]])"],["～ければ","if (the ば-form from Lesson 3)"],["なりません","it won’t do, it’s not acceptable"]]},
      "So 行かなければなりません is literally “if I don’t go, it won’t do”, which is to say “I must go”. Once you see this, the long form stops being frightening.",
      "To build it, take the ない-form, drop the final い, and add ければ. Then add なりません or いけません.",
      {table:[["Verb","ない-form","must"],["行く","行かない","行かなければなりません"],["[飲]{の}む","[飲]{の}まない","[飲]{の}まなければなりません"],["[食]{た}べる","食べない","食べなければなりません"],["する","しない","しなければなりません"],["[来]{く}る","[来]{こ}ない","[来]{こ}なければなりません (こなければ)"]]},
      {ex:"[毎日]{まいにち}、[薬]{くすり}を[飲]{の}まなければなりません。\nI have to take medicine every day.\n\n[明日]{あした}は[六時]{ろくじ}に[起]{お}きなければいけません。\nI have to get up at six tomorrow.\n\nこのレポートは[金曜日]{きんようび}までに[出]{だ}さなければなりません。\nThis report must be handed in by Friday.", label:"Saying “must”"},
      "There is a second shape with the same meaning: the ない-form’s て-form, ～なくて, plus は and いけません: 行かなくてはいけません, literally “not going is not OK”."
    ]},
    {h:"From formal to casual: five ways to say “must”", body:[
      "Japanese speakers switch between several versions depending on the situation. You need to recognise all of them, and use two or three.",
      {table:[["Form","Style","Example"],["～なければなりません","formal; rules, notices, writing","[申込書]{もうしこみしょ}を出さなければなりません。"],["～なければいけません","polite; very common in speech","[今日]{きょう}は[早]{はや}く[帰]{かえ}らなければいけません。"],["～なくてはいけません\n～なくてはなりません","polite; common","[宿題]{しゅくだい}をしなくてはいけません。"],["～ないといけません","polite; spoken","もう行かないといけません。"],["～なきゃ(いけない)\n～なくちゃ(いけない)\n～ないと","casual: friends and family","もう[帰]{かえ}らなきゃ。\n[宿題]{しゅくだい}、やらなくちゃ。\nそろそろ行かないと。"]]},
      "[[nakereba-naranai|～なければならない]] and ～なければいけない mean the same. Some textbooks say that ならない suits general rules and duties and いけない suits one person’s situation, but in everyday speech the difference is small. Use ～なければなりません in formal writing and either one in polite speech.",
      "The casual forms are contractions: ～なきゃ comes from ～なければ, and ～なくちゃ from ～なくては. In casual speech the end is often dropped altogether: もう[帰]{かえ}らなきゃ (I have to go home now), with いけない understood. These belong to [[casual-speech]]; Unit 5 explains contractions like these ([[contraction-casual]]).",
      {warn:"Don’t use ～なきゃ or ～なくちゃ in an email to a teacher, in a report or in a job interview. They are fine with friends, and in your own notes."}
    ]},
    {h:"“Don’t have to”: ～なくてもいい", body:[
      "To say that something is **not necessary**, take the ない-form, change ない to なくて, and add もいいです: “even not doing it is fine”.",
      {ex:"[名前]{なまえ}は[書]{か}かなくてもいいです。\nYou don’t have to write your name.\n\n[明日]{あした}は[来]{こ}なくてもいいですよ。\nYou don’t need to come tomorrow.\n\n[急]{いそ}がなくても[大丈夫]{だいじょうぶ}です。\nThere’s no need to hurry.", label:"～なくてもいい"},
      "[大丈夫]{だいじょうぶ}です (it’s all right) and かまいません (I don’t mind; a little more formal) can replace いいです. In casual speech, も is often dropped: [来]{こ}なくていいよ.",
      "～なくてもいいです is the usual “no” answer to a “must I?” question:",
      {ex:"A：[靴]{くつ}を[脱]{ぬ}がなければなりませんか。\nB：いいえ、[脱]{ぬ}がなくてもいいですよ。\nA: Do I have to take my shoes off?\nB: No, you don’t have to.", label:"Must I? No, you don’t have to"},
      "[[nakute-mo-ii|～なくてもいい]] is the negative partner of ～てもいい (may), which you learned in Unit 3 ({{requests-and-permission}})."
    ]},
    {h:"Four patterns in one picture", body:[
      "“May”, “must not”, “must” and “don’t have to” fit together in a neat square. One side asks whether you do the action or not. The other asks whether that is OK or not.",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="20" text-anchor="middle">Doing or not doing: OK or not OK?</text><text class="s" x="149" y="48" text-anchor="middle">is OK (いい)</text><text class="s" x="275" y="48" text-anchor="middle">is not OK</text><text class="s" x="44" y="100" text-anchor="middle">doing</text><text class="s" x="44" y="116" text-anchor="middle">～て</text><text class="s" x="44" y="196" text-anchor="middle">not doing</text><text class="s" x="44" y="212" text-anchor="middle">～なくて</text><rect class="d-sage" x="88" y="60" width="122" height="90" rx="8" stroke-width="2"/><text class="s" x="149" y="86" text-anchor="middle">～てもいい</text><text x="149" y="108" text-anchor="middle">may</text><text class="s" x="149" y="132" text-anchor="middle">してもいい</text><rect class="d-rose" x="214" y="60" width="122" height="90" rx="8" stroke-width="2"/><text class="s" x="275" y="86" text-anchor="middle">～てはいけない</text><text x="275" y="108" text-anchor="middle">must not</text><text class="s" x="275" y="132" text-anchor="middle">してはいけない</text><rect class="d-sage" x="88" y="156" width="122" height="90" rx="8" stroke-width="2"/><text class="s" x="149" y="182" text-anchor="middle">～なくてもいい</text><text x="149" y="204" text-anchor="middle">don’t have to</text><text class="s" x="149" y="228" text-anchor="middle">しなくてもいい</text><rect class="d-rose" x="214" y="156" width="122" height="90" rx="8" stroke-width="2"/><text class="s" x="275" y="182" text-anchor="middle">～なければならない</text><text x="275" y="204" text-anchor="middle">must</text><text class="s" x="275" y="228" text-anchor="middle">しなければならない</text><text class="s" x="170" y="274" text-anchor="middle">いい = OK · いけない / ならない = not OK</text></svg>', alt:"A two-by-two square. Rows: doing (～て) and not doing (～なくて). Columns: is OK (いい) and is not OK. Doing is OK: ～てもいい, may, してもいい. Doing is not OK: ～てはいけない, must not, してはいけない. Not doing is OK: ～なくてもいい, don’t have to, しなくてもいい. Not doing is not OK: ～なければならない, must, しなければならない.", cap:"Each pattern combines “doing” or “not doing” with “OK” or “not OK”. Must is “not doing is not OK”."},
      "English speakers often mix up “must not” and “don’t have to”, because both contain a “not”. Japanese keeps them clearly apart:",
      {table:[["Japanese","English","Meaning"],["ここで[写真]{しゃしん}をとってはいけません。","You must not take photos here.","a ban: it is not allowed"],["ここで[写真]{しゃしん}をとらなくてもいいです。","You don’t have to take photos here.","no need, but you may"]]},
      {key:"～てはいけない: doing it is not OK (a ban). ～なくてもいい: not doing it is OK (no need). ～なければならない: not doing it is not OK (an obligation)."}
    ]},
    {h:"～てしまう: finished, or oops", body:[
      "[[te-shimau|～てしまう]] is the て-form plus しまう, a godan verb that also means “put away”. It has two meanings, and very often both are present at once.",
      "**1. Completely finished.** The action is done, all of it.",
      {ex:"[宿題]{しゅくだい}はもうやってしまいました。\nI’ve already finished my homework.\n\nこの[本]{ほん}、[一日]{いちにち}で[読]{よ}んでしまいました。\nI read this whole book in a day.\n\n[今日]{きょう}、[全部]{ぜんぶ}やってしまおう。\nLet’s get it all done today.", label:"Finished"},
      "**2. Regret, or something that happened without meaning to.** The speaker feels it was unfortunate.",
      {ex:"[電車]{でんしゃ}に[傘]{かさ}を[忘]{わす}れてしまいました。\nI left my umbrella on the train. (oops)\n\n[寝坊]{ねぼう}してしまいました。すみません。\nI overslept. I’m sorry.\n\nケーキを[全部]{ぜんぶ}食べてしまった……。\nI ate the whole cake… (and I wish I hadn’t)", label:"Regret"},
      "The last example shows both meanings together: the cake is completely gone, and the speaker regrets it. Context and tone tell you which feeling is stronger.",
      "しまう conjugates like any godan verb ending in う: しまいます, しまいました, しまった, しまおう. Only しまう changes; the て-form stays the same.",
      "In casual speech, ～てしまう shrinks to ～ちゃう, and ～でしまう (after verbs whose て-form ends in で) to ～じゃう. They conjugate as godan verbs too.",
      {table:[["Full form","Casual form"],["食べてしまった","食べちゃった"],["[忘]{わす}れてしまった","[忘]{わす}れちゃった"],["[飲]{の}んでしまった","[飲]{の}んじゃった"],["行ってしまう","行っちゃう"]]}
    ]},
    {h:"～ておく: doing it ahead, or leaving it", body:[
      "[[te-oku|～ておく]] is the て-form plus おく (put, place), written in hiragana in this pattern. It means doing something now so that it is ready for later.",
      {ex:"[旅行]{りょこう}の[前]{まえ}に、ホテルを[予約]{よやく}しておきます。\nI’ll book the hotel before the trip.\n\n[会議]{かいぎ}の前に、[資料]{しりょう}を読んでおいてください。\nPlease read the materials before the meeting.\n\nお[客]{きゃく}さんが[来]{く}るから、[飲]{の}み[物]{もの}を[冷]{ひ}やしておこう。\nGuests are coming, so let’s chill some drinks.", label:"Doing it in advance"},
      "It can also mean leaving something in a state on purpose: [窓]{まど}は[開]{あ}けておいてください (Please leave the window open). そのままにしておいてください (Please leave it as it is).",
      "おく is a godan verb ending in く, so its forms are おきます, おいて, おいた. In casual speech, ～ておく becomes ～とく and ～でおく becomes ～どく: [買]{か}っとく (I’ll buy it in advance), 読んどく (I’ll read it beforehand), やっとくね (I’ll get it done).",
      "Unit 7 teaches ～てある, which describes the state that results: [窓]{まど}が[開]{あ}けてある (the window has been opened and is open). ～ておく is the action done with a purpose; ～てある is the result you can see ([[te-aru]]).",
      {ex:"アナ：[明日]{あした}のパーティー、[飲]{の}み[物]{もの}は[買]{か}っておいた？\nルカ：うん、[買]{か}っといたよ。でも、ケーキを[頼]{たの}むのを[忘]{わす}れちゃった……。\nアナ：じゃあ、[今日]{きょう}[私]{わたし}が[頼]{たの}んでおくね。\nルカ：ありがとう！[助]{たす}かる。\n\nAna: Did you buy the drinks for tomorrow’s party?\nLuca: Yes, I got them. But I forgot to order the cake…\nAna: Then I’ll order it today.\nLuca: Thanks! That’s a big help.", label:"Worked example: getting ready for a party"},
      "The two friends mix full forms (Ana’s [買]{か}っておいた and [頼]{たの}んでおく) and casual forms (Luca’s [買]{か}っといた and [忘]{わす}れちゃった), which is exactly how friends talk. In a message to a teacher, you would use the full forms throughout.",
      {tip:"～ておく and ～てしまう both often translate as English perfect tenses (“I’ve booked it”, “I’ve finished it”). Ask what the speaker cares about: being ready for later (～ておく) or the action being over, perhaps with regret (～てしまう)."}
    ]},
    {h:"Common mistakes, and keep going", body:[
      {table:[["✗ Mistake","✓ Correct","Why"],["行かないければ","行かなければ","Drop い from ない, then add ければ."],["[来]{こ}なければ read きなければ","[来]{こ}なければ read こなければ","Like [来]{こ}ない, it uses こ."],["行かなくてはいいです","行かなくてもいいです","“Don’t have to” uses ても."],["[写真]{しゃしん}をとらなくてもいいです (meaning “must not”)","[写真]{しゃしん}をとってはいけません","A ban is ～てはいけません."],["食べてしまうました","食べてしまいました","しまう conjugates: しまいます, しまいました."],["読んどいてください (in a work email)","読んでおいてください","～とく is casual; write the full form."]]},
      "You have now met all the main grammar of this unit: the potential and volitional forms, the four conditionals, giving and receiving, obligation, ～てしまう and ～ておく. Unit 7 continues with the passive, the causative and ways of saying “it seems”. {{n4-grammar-patterns}} collects the N4 patterns on one page.",
      "New grammar slips away if you don’t use it, and that is normal. Short, spaced review brings it back, and so does reading: N4 grammar is everywhere in simple stories, messages and signs. Keep up your kanji and vocabulary alongside it in the Kanji Lab.",
      {lab:"kl-n4", t:"Practise: the N4 kanji, including the verbs in this unit"},
      {lab:"kl-n4-vocab", t:"Practise: N4 vocabulary"},
      "For more free practice, [Irodori](https://www.irodori.jpf.go.jp/en/) (the Japan Foundation) has free textbooks with audio up to Pre-Intermediate (A2/B1), built around everyday situations, and [Tae Kim’s Guide to Learning Japanese](https://guidetojapanese.org/learn/grammar) explains each pattern in this unit in its own words.",
      {terms:["nakereba-naranai","nakute-mo-ii","te-shimau","te-oku"]}
    ]}
   ],
   try:[
    {id:"e3u6-l5-x1", type:"mcq", q:"You have an early train tomorrow, so you have to get up at six. Which sentence says that?", options:[
      {t:"[明日]{あした}は六時に[起]{お}きなければなりません。", ok:true, why:"Right. ～なければなりません: “if I don’t get up, it won’t do”, which is to say, I must."},
      {t:"[明日]{あした}は六時に[起]{お}きなくてもいいです。", why:"～なくてもいい means “don’t have to”, the opposite of what you need."},
      {t:"[明日]{あした}は六時に[起]{お}きてはいけません。", why:"～てはいけません is a ban: “you must not get up at six”."},
      {t:"[明日]{あした}は六時に[起]{お}きないければなりません。", why:"The form is wrong: drop い from ない before adding ければ: [起]{お}きなければ."}
    ]},
    {id:"e3u6-l5-x2", type:"match", q:"Match each full form with its casual contraction.", pairs:[
      ["～なければ","～なきゃ","行かなければ → 行かなきゃ."],
      ["～なくては","～なくちゃ","やらなくては → やらなくちゃ."],
      ["～てしまう","～ちゃう","食べてしまう → 食べちゃう."],
      ["～でしまう","～じゃう","[飲]{の}んでしまう → [飲]{の}んじゃう."],
      ["～ておく","～とく","[買]{か}っておく → [買]{か}っとく."]
    ]},
    {id:"e3u6-l5-x3", type:"sort", q:"Sort these sentences about a library by meaning.", buckets:["may","must not","must","don’t have to"], items:[
      {t:"ここで[勉強]{べんきょう}してもいいです。", b:0, why:"～てもいい: doing it is OK."},
      {t:"本を[三冊]{さんさつ}まで[借]{か}りてもいいです。", b:0, why:"～てもいい: you may borrow up to three books."},
      {t:"[中]{なか}で食べてはいけません。", b:1, why:"～てはいけません: a ban."},
      {t:"[大]{おお}きい[声]{こえ}で[話]{はな}してはいけません。", b:1, why:"～てはいけません: talking loudly is not allowed."},
      {t:"本は[二週間]{にしゅうかん}で[返]{かえ}さなければなりません。", b:2, why:"～なければなりません: an obligation."},
      {t:"カードを[見]{み}せなくてはいけません。", b:2, why:"～なくてはいけません: “not showing it is not OK”, so you must."},
      {t:"[予約]{よやく}しなくてもいいです。", b:3, why:"～なくてもいい: no booking needed."},
      {t:"名前を書かなくてもいいです。", b:3, why:"～なくてもいい: writing your name isn’t necessary."}
    ]},
    {id:"e3u6-l5-x4", type:"mcq", q:"A: 「この[書類]{しょるい}にはんこを[押]{お}さなければなりませんか。」 (Do I have to stamp this form?) The answer is no, it isn’t necessary. B: 「いいえ、___。」", options:[
      {t:"[押]{お}さなくてもいいです", ok:true, why:"Right. The answer to “must I?” is “you don’t have to”: ～なくてもいいです."},
      {t:"[押]{お}してはいけません", why:"This bans stamping (“you must not”). The question was only whether it is necessary."},
      {t:"[押]{お}さなければいけません", why:"This means “yes, you must”, which contradicts いいえ."},
      {t:"[押]{お}さないでください", why:"This is a request not to stamp it. It doesn’t answer whether stamping is necessary."}
    ]},
    {id:"e3u6-l5-x5", type:"mcq", q:"A friend messages you: 「[財布]{さいふ}を[落]{お}としてしまった……。」 What is she telling you?", options:[
      {t:"She dropped her wallet by accident, and she is upset about it.", ok:true, why:"Right. ～てしまう here shows regret about something unintended."},
      {t:"She dropped her wallet on purpose.", why:"～てしまう suggests the opposite: it happened without her meaning it to, and she regrets it."},
      {t:"She is going to drop her wallet.", why:"しまった is past: it has already happened."},
      {t:"She has to drop off her wallet somewhere.", why:"That would need ～なければならない. ～てしまう is about something finished or regretted."}
    ]},
    {id:"e3u6-l5-x6", type:"mcq", q:"Guests are coming tonight. This afternoon you will buy drinks so that everything is ready. Which sentence says that?", options:[
      {t:"[午後]{ごご}、[飲]{の}み[物]{もの}を[買]{か}っておきます。", ok:true, why:"Right. ～ておく is doing something in advance, so it is ready for later."},
      {t:"午後、[飲]{の}み[物]{もの}を[買]{か}ってしまいます。", why:"～てしまう stresses getting it over with, or regret. It doesn’t say “so that it’s ready”."},
      {t:"午後、[飲]{の}み[物]{もの}を[買]{か}わなくてもいいです。", why:"This says you don’t have to buy drinks, the opposite of the plan."},
      {t:"午後、[飲]{の}み[物]{もの}を[買]{か}ってくれます。", why:"～てくれる means someone else does it for you, not that you will buy them."}
    ]},
    {id:"e3u6-l5-x7", type:"spot", q:"Priya is writing a polite work email. Tap each casual short form that should be written out in full.", ask:"should be written in full", parts:[
      "[山田]{やまだ}さん\n[明日]{あした}の[会議]{かいぎ}の[資料]{しりょう}は、もう",
      {t:"[作]{つく}っておきました", flag:false, why:"Fine: the full form of ～ておく, polite past."},
      "。[会議]{かいぎ}の前に",
      {t:"読んどいて", flag:true, why:"Casual ～どく. In a work email write 読んでおいてください."},
      "ください。[私]{わたし}は午後、[病院]{びょういん}に",
      {t:"行かなければなりません", flag:false, why:"Fine: the full, formal “must”."},
      "ので、[少]{すこ}し[遅]{おく}れます。[時間]{じかん}の[変更]{へんこう}は、[部長]{ぶちょう}にもう",
      {t:"話しちゃいました", flag:true, why:"Casual ～ちゃう. In a work email write 話してしまいました (or simply 話しました)."},
      "。[会議]{かいぎ}の[後]{あと}は、[残]{のこ}らなくても",
      {t:"いいです", flag:false, why:"Fine: ～なくてもいいです, “you don’t have to stay”."},
      "。"
    ]},
    {id:"e3u6-l5-x8", type:"order", q:"Put the steps for building “must come” from [来]{く}る in order.", items:[
      {t:"Make the ない-form: [来]{こ}ない (read こない).", why:"Start from the plain negative."},
      {t:"Drop the final い: [来]{こ}な.", why:"ない behaves like an い-adjective, so the い comes off before ければ."},
      {t:"Add ければ: [来]{こ}なければ.", why:"This is the ば-form of ない: “if (you) don’t come”."},
      {t:"Add なりません: [来]{こ}なければなりません.", why:"“If you don’t come, it won’t do”: you must come."}
    ]}
   ],
   apply:{
    intro:"Rules, chores and plans give you daily material for these patterns. Keep these notes for yourself.",
    tasks:[
     {t:"Write the rules of a place you know", how:[
       "Choose a place: your home, a gym, a library, a workplace or a club.",
       "Write two rules for each corner of the square: ～てもいいです, ～てはいけません, ～なければなりません and ～なくてもいいです.",
       "Read them aloud. Check that the “must not” and “don’t have to” sentences really say different things."
     ], write:"…てもいいです。…てはいけません。…なければなりません。…なくてもいいです。"},
     {t:"Tomorrow’s to-do list", how:[
       "Write tomorrow’s tasks with ～なければなりません, and one or two with casual ～なきゃ, as you might say them to yourself.",
       "For two tasks, add what you will do in advance tonight with ～ておきます: [明日]{あした}の[服]{ふく}を出しておきます。"
     ], write:"[明日]{あした}は…なければなりません。[今夜]{こんや}…ておきます。"},
     {t:"Tell an “oops” story", how:[
       "Remember a small mishap: missing a bus, breaking a cup, forgetting a password.",
       "Tell it in three or four sentences with ～てしまいました, then retell it casually with ～ちゃった or ～じゃった.",
       "Finish with what you will do in advance next time, with ～ておきます."
     ], write:"…てしまいました。…ちゃった。[次]{つぎ}は…ておきます。"}
    ],
    proof:"Eight rules sorted into may, must not, must and don’t have to; a to-do list with ～なければなりません and ～ておきます; and a short mishap story told in polite and casual Japanese."
   },
   read:[
    {book:"taekim", where:"Essential Grammar, “Expressing ‘must’ or ‘have to’”", note:"The forms of “must” from ～なければならない to casual ～なきゃ, and “don’t have to”."},
    {book:"taekim", where:"Special Expressions, “Unintended Actions” (sections “Using 「しまう」 with other verbs”, “Using the casual version of 「～てしまう」” and “Another meaning of 「しまう」”)", note:"～てしまう for unintended actions, the casual ～ちゃう/～じゃう, and しまう meaning “finish completely”."},
    {book:"taekim", where:"Essential Grammar, “Other uses of the te-form”, section “Using the 「～ておく」 form as preparation for the future”", note:"～ておく and casual ～とく; the same page also covers ～てある."}
   ]
  }
  ],
  checkpoint:["e3u6-q02","e3u6-q05","e3u6-q09","e3u6-q12","e3u6-q16","e3u6-q22","e3u6-q23","e3u6-q27","e3u6-q31","e3u6-q35","e3u6-q40","e3u6-q44"],
  codex:[
   {id:"potential-form", title:"The potential form (can do)", aka:["potential","kanou-kei","can","～れる","～られる","～える","できる","～ことができる","ra-nuki"], tags:["japanese","grammar","n4","verbs"],
    summary:"The verb form for “can”: [書]{か}ける, [食]{た}べられる, できる, [来]{こ}られる; with ～ことができる as a more formal alternative.",
    levels:{
     starter:[
      "The **potential form** turns a verb into “can do it”. [話]{はな}す (speak) becomes 話せる (can speak); 食べる (eat) becomes 食べられる (can eat).",
      "It covers ability (ミンさんは[漢字]{かんじ}が[読]{よ}めます, Min can read kanji) and possibility (この[店]{みせ}ではカードが[使]{つか}えます, you can use a card in this shop).",
      "How you build it depends on the verb group. Godan verbs move their last kana to the え row and add る: 書く → 書ける, [行]{い}く → 行ける. Ichidan verbs swap る for られる: [見]{み}る → 見られる. する becomes できる, and [来]{く}る becomes [来]{こ}られる.",
      "Every potential verb then behaves like an ichidan verb: 書けます, 書けません, 書けない, 書けた.",
      "There is a second way to say “can”: dictionary form + ことができる, as in [漢字]{かんじ}を書くことができます. It means the same and sounds a little more formal."
     ],
     builder:[
      {table:[["Verb","Rule","Examples"],["godan","last kana → え row + る","書ける, [泳]{およ}げる, 話せる, [待]{ま}てる, [遊]{あそ}べる, 読める, [帰]{かえ}れる, [買]{か}える"],["ichidan","る → られる","食べられる, 見られる, [起]{お}きられる"],["する","→ できる","[勉強]{べんきょう}できる; noun + ができる"],["[来]{く}る","→ [来]{こ}られる","read こられる"]]},
      "**Particles.** The thing you can do is often marked with が: [日本語]{にほんご}が話せます. を is also widely used, especially in speech; textbooks usually teach が. Other particles stay as they are: [一人]{ひとり}で行けます.",
      "**～ことができる** uses the dictionary form, and keeps を inside: [漢字]{かんじ}を書くことができます. It is common in notices and formal writing (～ことができません, “is not permitted”). With nouns, use noun + ができる: [運転]{うんてん}ができます, テニスができます.",
      "**ら[抜]{ぬ}き[言葉]{ことば}.** In speech, many people say 見れる, 食べれる, [来]{こ}れる for 見られる, 食べられる, [来]{こ}られる. These are common in conversation; writing and tests use the full forms. Godan potentials like [帰]{かえ}れる are standard, not ら[抜]{ぬ}き.",
      "**Perception verbs.** 見える and [聞]{き}こえる mean “be visible” and “be audible”: what reaches your eyes and ears by itself. 見られる and 聞ける mean you are able to watch or listen because the situation allows it.",
      "**No potential.** [分]{わ}かる (understand) already includes “can”, so it isn’t made potential: 日本語が分かります."
     ],
     pro:[
      "**Grammar terms.** Japanese school grammar calls godan potentials [可能動詞]{かのうどうし} (potential verbs): [五段]{ごだん} verbs turned into [下一段]{しもいちだん} (ichidan) verbs, such as 書く → 書ける and [打]{う}つ → [打]{う}てる. The ichidan and [来]{く}る forms use the auxiliary ～られる.",
      "**History.** Potential verbs appeared in the Muromachi period and gradually replaced the older pattern with the auxiliary ～れる (行かれる for “can go”); they became common only in modern Japanese. 行かれる survives, but it can also be passive, honorific or spontaneous, while 行ける means only “can go”.",
      "**ら[抜]{ぬ}き and ambiguity.** For ichidan verbs, ～られる is also the passive and an honorific: 食べられる can mean “can eat”, “is eaten” or (honorific) “eats”. ら[抜]{ぬ}き forms such as 食べれる occur only with the potential meaning, so they separate “can” from the other meanings; linguists often point to this when explaining why the change has spread. Standard writing still uses ～られる.",
      "**できる.** As a verb, できる also means “be ready”, “be made” and “be good at”: [勉強]{べんきょう}ができる usually means “is a good student”, while [勉強]{べんきょう}できる means “is able to study (now, here)”.",
      "**Forms to watch.** Potential verbs are rarely used in the command form. ある has no ordinary potential; to say “can exist, is possible”, Japanese uses ありうる or ありえる. Double potentials such as ✗ 書けれる are errors.",
      "**Requests.** The potential of もらう and いただく makes polite requests: ～てもらえませんか, ～ていただけませんか (see {{giving-and-receiving}})."
     ]},
    related:["verb-groups","te-form","volitional-form","giving-and-receiving","written-vs-spoken-japanese","passive-form"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Potential Form", url:"https://guidetojapanese.org/learn/grammar/potential"},{t:"可能動詞 (Japanese Wikipedia): formation, history and ら抜き言葉", url:"https://ja.wikipedia.org/wiki/可能動詞"}],
    checked:"2026-11"},
   {id:"volitional-form", title:"The volitional form and つもり", aka:["volitional","ikou-kei","let's","～よう","～おう","～ようとおもう","tsumori","yotei"], tags:["japanese","grammar","n4","verbs"],
    summary:"The casual “let’s / shall I / I’ll” form ([行]{い}こう, [食]{た}べよう), and talking about intentions with ～ようと[思]{おも}う, つもり and [予定]{よてい}.",
    levels:{
     starter:[
      "The **volitional form** is the casual version of ～ましょう. It shows your will: what you suggest, offer or decide to do: 行こう (let’s go), 食べよう (let’s eat).",
      "It has three jobs. To a friend, it suggests: [一緒]{いっしょ}に[帰]{かえ}ろう (let’s go home together). With か, it offers: [持]{も}とうか (shall I carry it?). Said to yourself, it decides: そろそろ[寝]{ね}よう (I’d better go to bed).",
      "Godan verbs move their last kana to the お row and add う: [書]{か}く → 書こう, [待]{ま}つ → [待]{ま}とう, [帰]{かえ}る → [帰]{かえ}ろう. Ichidan verbs swap る for よう: [見]{み}る → 見よう. する becomes しよう, and [来]{く}る becomes [来]{こ}よう.",
      "To tell people about your plans, add と[思]{おも}います: [来年]{らいねん}、[日本]{にほん}へ行こうと[思]{おも}います (I’m thinking of going to Japan next year). For a firmer plan, use つもり: 行くつもりです (I intend to go)."
     ],
     builder:[
      {table:[["Verb","Volitional","Polite equivalent"],["書く (godan)","書こう","書きましょう"],["[買]{か}う (godan)","[買]{か}おう","[買]{か}いましょう"],["食べる (ichidan)","食べよう","食べましょう"],["する","しよう","しましょう"],["[来]{く}る","[来]{こ}よう","[来]{き}ましょう"]]},
      "**Casual and polite.** Friends say 行こう, 行こうよ, [手伝]{てつだ}おうか and 行かない？. With teachers, bosses and new people, use ～ましょう, ～ましょうか and ～ませんか.",
      "**～ようと[思]{おも}う.** ～ようと[思]{おも}います states an intention now; ～ようと[思]{おも}っています is an intention held for a while, and is required for other people: アナさんは[車]{くるま}を[買]{か}おうと[思]{おも}っています. Don’t confuse it with 行くと[思]{おも}います, “I think (someone) will go”.",
      "**つもり** follows the dictionary form or the ない-form: 行くつもりです, 行かないつもりです. ～つもりはありません (“no intention of”) is stronger. The past ～つもりでした often means a plan that didn’t happen.",
      "**[予定]{よてい}** is for arrangements and timetables: [電車]{でんしゃ}は[三時]{さんじ}に[着]{つ}く[予定]{よてい}です. Only people have つもり.",
      "**A rough scale:** ～たい (wish) → ～ようと[思]{おも}っている (intention) → つもり (firm plan) → [予定]{よてい} (arranged). The middle two overlap a lot."
     ],
     pro:[
      "**Grammar terms.** The volitional form is called [意向形]{いこうけい} in many textbooks for learners. In Japanese school grammar it is analysed as a stem plus the auxiliary う or よう, which in older Japanese also expressed conjecture. That older meaning survives in written phrases and in だろう, which comes from であろう (である + う).",
      "**The negative volitional.** Formal and literary Japanese has ～まい: [二度]{にど}と行くまい (I will never go again). Everyday speech uses other patterns, such as 行くのはやめよう or もう行かない.",
      "**～ようか and ～ようかな.** In self-talk, the volitional + か or かな wonders aloud: どうしようか (what shall I do?), [帰]{かえ}ろうかな (maybe I’ll go home).",
      "**～ようとする** (N3) means “try to” or “be about to”: [出]{で}かけようとしたとき、[電話]{でんわ}が[鳴]{な}った (Just as I was about to go out, the phone rang).",
      "**More on つもり.** After a past or ～ている form, つもり means “believe that one has done or is doing”: [鍵]{かぎ}をかけたつもりでした (I thought I had locked it). With a noun it takes の: [冗談]{じょうだん}のつもりで[言]{い}いました (I meant it as a joke).",
      "**Politeness.** Many teachers advise against asking a superior 「～つもりですか」 directly, because questioning their intentions can sound blunt; ～ますか or ～[予定]{よてい}ですか is safer. The polite volitional ～ましょう is a ます form; でしょう is not its partner, but the polite form of だろう (conjecture)."
     ]},
    related:["masu-verbs","potential-form","conditionals-to-ba-tara-nara","casual-conversation","quoting-to-iu"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Desire and Suggestions (the volitional form, casual and polite)", url:"https://www.guidetojapanese.org/learn/grammar/desire"}],
    checked:"2026-11"},
   {id:"conditionals-to-ba-tara-nara", title:"Conditionals: と, ば, たら and なら", aka:["conditionals","if","when","～と","～ば","～たら","～なら","もし","jouken"], tags:["japanese","grammar","n4"],
    summary:"The four ways to say “if” or “when”: と (natural results), ば (the condition), たら (if and once), なら (if that’s the case); their limits, their overlaps and a guide for choosing.",
    levels:{
     starter:[
      "Japanese has four common ways to say “if” or “when”, and they overlap a lot.",
      "**と**: whenever X, Y follows naturally. このボタンを[押]{お}すと、ドアが[開]{あ}きます (When you press this button, the door opens).",
      "**ば**: if X is true, Y. The focus is on the condition. [急]{いそ}げば、[間]{ま}に[合]{あ}います (If you hurry, you’ll make it).",
      "**たら**: if or once X has happened, Y. [雨]{あめ}だったら、[行]{い}きません (If it rains, I won’t go). [家]{いえ}に[着]{つ}いたら、[電話]{でんわ}します (I’ll call when I get home).",
      "**なら**: if (it is the case that) X. It takes up a topic or what someone has just said: [大阪]{おおさか}へ行くなら、[新幹線]{しんかんせん}が[便利]{べんり}ですよ (If you’re going to Osaka, the bullet train is convenient).",
      "Two limits matter most: no requests or plans after と, and なら when the result must happen first. When unsure in conversation, たら is the safest choice."
     ],
     builder:[
      {table:[["Form","Verbs","Adjectives and nouns"],["と","行くと, 行かないと","[寒]{さむ}いと; 雨だと, [静]{しず}かだと"],["ば","行けば, [食]{た}べれば, すれば, [来]{く}れば, 行かなければ","[高]{たか}ければ, よければ; [学生]{がくせい}なら (であれば)"],["たら","行ったら, 食べたら, したら, [来]{き}たら","高かったら, よかったら; 雨だったら"],["なら","行くなら, 行ったなら","高いなら; 学生なら, [静]{しず}かなら"]]},
      "**Limits.** After と, the result can’t be a request, invitation, offer or plan. After ば, the same is usually true when the condition is an action and the same person does both ([着]{つ}けば, 行けば); with a state (あれば, よければ, なければ) a request is fine. たら has no such limit. With たら the condition comes first; with なら the result can come first: [旅行]{りょこう}に行くなら、ガイドブックを[買]{か}います (buy before going).",
      "**Past events.** “When I did X, I found Y” uses たら or と: [家]{いえ}に[帰]{かえ}ったら／[帰]{かえ}ると、[荷物]{にもつ}が[届]{とど}いていました.",
      "**Overlaps.** General truths accept と, ば and たら ([春]{はる}になると／なれば／なったら). Advice questions accept ば and たら, and often と (どうすればいい？ どうしたらいい？ どうするといい？). A state plus a request accepts ば, たら and なら.",
      "**Choosing:** (1) topic, the other person’s words, or result first → なら; (2) “once” → たら; (3) request or plan → たら (ば with states); (4) always follows → と; (5) past discovery → たら or と; (6) unsure → たら."
     ],
     pro:[
      "**Where the forms come from.** ば attaches to the form school grammar calls the [仮定形]{かていけい}, which descends from the classical [已然形]{いぜんけい}. In Classical Japanese, [已然形]{いぜんけい} + ば meant “because” or “when”, and the [未然形]{みぜんけい} + ば meant “if”; modern ば took over the “if” meaning. たら comes from たらば (the old auxiliary たり), and なら from ならば (the copula なり). ならば and たらば survive as formal variants.",
      "**Describing the differences.** Grammars agree on the limits above but describe the core meanings in different words. Tae Kim, for example, says ば focuses on the condition and たら on the result, and that learners can treat them as nearly the same with verbs and い-adjectives. Corpus work finds that なら is used most for hypothetical conditions and, with nouns, often as a topic marker (“if it’s X…”) (Nara 2020).",
      "**Counterfactuals and regret.** ～ばよかった and ～たらよかった (I should have…), ～ば／～たら…のに (if only…): もっと[早]{はや}く[出]{で}れば間に[合]{あ}ったのに.",
      "**Patterns built on conditionals.** ～ばいい／～たらいい／～といい (you should, it would be good to), ～たらどうですか (how about…?), ～ないと (warning: [早]{はや}くしないと[遅]{おく}れるよ; also “must”, see {{must-and-dont-have-to}}), ～ば～ほど (N3: the more…, the more…: [練習]{れんしゅう}すればするほど[上手]{じょうず}になる), and casual ～んだったら for なら.",
      "**Narrative と.** In stories, ～と、～た moves the action on: [部屋]{へや}に[入]{はい}ると、電話が[鳴]{な}った (As I entered the room, the phone rang). This is common in novels and less common in conversation, where たら is preferred.",
      "**Limits are about the main clause.** The restriction on ば depends on whether the condition is an action or a state, and grammars describe extra factors (such as whether the two clauses share a subject). Learners rarely need these details: たら avoids the problem."
     ]},
    related:["potential-form","volitional-form","must-and-dont-have-to","nai-and-ta-forms","plain-form-grammar"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: How to say “if” in Japanese (と, なら, ば, たら, もし)", url:"https://guidetojapanese.org/learn/grammar/conditionals"},{t:"奈良夕里枝 (2020) 「日本語教育の現場における条件表現ナラの効果的な提示のしかた」『人文』19 (university repository PDF)", url:"https://glim-re.repo.nii.ac.jp/record/4891/files/jinbun_19_39_52.pdf"}],
    checked:"2026-11"},
   {id:"giving-and-receiving", title:"Giving and receiving: あげる, くれる, もらう", aka:["giving","receiving","ageru","kureru","morau","jujuhyougen","～てあげる","～てくれる","～てもらう","くださる","いただく","さしあげる","やる"], tags:["japanese","grammar","n4","verbs"],
    summary:"Three verbs for giving and receiving, chosen by direction and point of view, with their polite forms and their ～て forms for favours.",
    levels:{
     starter:[
      "English has one verb, “give”. Japanese chooses by direction.",
      "**あげる**: you (or your side) give to someone else, or one person gives to another: [私]{わたし}はミンさんに[本]{ほん}をあげました.",
      "**くれる**: someone gives to you or to someone on your side, such as your family: [友達]{ともだち}が本をくれました (my friend gave me a book).",
      "**もらう**: receive. The receiver is the subject, and the giver takes に or から: [私]{わたし}は[友達]{ともだち}に本をもらいました.",
      "The same verbs follow a て-form to describe favours: [妹]{いもうと}に本を[読]{よ}んであげました (I read a book to my sister), [母]{はは}が[弁当]{べんとう}を[作]{つく}ってくれました (my mother made me lunch), ミンさんに[写真]{しゃしん}をとってもらいました (I had Min take my photo). ～てくれる and ～てもらう also show you are grateful."
     ],
     builder:[
      {table:[["Verb","Subject","Direction","Polite"],["あげる","giver","away from me, or between others","さしあげる"],["くれる","giver","to me or my side","くださる"],["もらう","receiver","from anyone (giver に/から)","いただく"]]},
      "**My side.** Your family, and often your own group when you speak to outsiders, count as “your side” (ウチ). Gifts coming to them take くれる: [隣]{となり}の[人]{ひと}が[弟]{おとうと}にお[菓子]{かし}をくれました. Gifts you give them still take あげる.",
      "**Particles.** Giver は/が, receiver に, thing を. With もらう, the giver is に or から; from an organisation, から is the usual choice: [会社]{かいしゃ}からボーナスをもらいました.",
      "**Polite forms.** さしあげる and いただく are humble ([[kenjougo]]); くださる is respectful ([[sonkeigo]]), with the irregular ます-form くださいます. やる is used for animals and plants (and casually for younger family); many people use あげる there too.",
      "**Favours.** With ～てもらう, the helper takes に. With ～てあげる, the person keeps the verb’s own particle ([友達]{ともだち}を[手伝]{てつだ}う, [妹]{いもうと}に読む); verbs that hand something over can add に ([妹]{いもうと}に本を[買]{か}ってあげる); otherwise use の ([友達]{ともだち}の[荷物]{にもつ}を[持]{も}ってあげる).",
      "**Requests**, from casual to very polite: ～てくれない？, ～てくれませんか, ～てもらえませんか, ～ていただけませんか.",
      "**Offering help.** Say [持]{も}ちましょうか, not [持]{も}ってあげましょうか, which stresses the favour."
     ],
     pro:[
      "**Point of view.** Linguists group these as the three series of [授受表現]{じゅじゅひょうげん}: もらう, くれる and あげる. With もらう the subject is the receiver, and the speaker’s point of view is with the receiver. With くれる the subject is the giver, but the point of view is with the receiver, who must be on the speaker’s side (ウチ), so the giver must be outside it. With あげる the subject is the giver, the point of view is neutral or with the giver, and the receiver can’t be closer to the speaker than the giver is (Inaguma 2004). This is why ✗ [友達]{ともだち}が[私]{わたし}にあげた and ✗ [私]{わたし}が[友達]{ともだち}にくれた are impossible.",
      "**Difficulty.** An earlier error study cited by Inaguma (2004) (Sakamoto and Okada 1996) found that learners acquire あげる first, then もらう, then くれる. Inaguma’s own study of Korean-speaking learners found that ～てもらう and ～ていただく took especially long to acquire, and found no significant difference between もらう and くれる. Mistakes here are normal for a long time.",
      "**～てあげる to the listener.** Inaguma (2004) notes that ～てあげる is not normally used towards the person you are talking to unless you are close, and cites Horiguchi (1983), who found that learners’ overuse of ～てあげる often sounds pushy. For superiors, humble forms such as お[持]{も}ちしましょうか are used (see {{polite-speech-basics}}).",
      "**Honorific favours.** ～てくださる and ～ていただく describe favours from superiors: [先生]{せんせい}が[推薦状]{すいせんじょう}を[書]{か}いてくださいました / 先生に[推薦状]{すいせんじょう}を書いていただきました (The teacher wrote me a recommendation). ください itself is the command form of くださる.",
      "**Causative + いただく.** You will hear ～させていただきます (“allow me to…”) everywhere in business Japanese. It combines the causative (Unit 7) with いただく, and style guides debate when it is overused."
     ]},
    related:["polite-speech-basics","keigo-system","te-form","requests-and-permission","potential-form"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Giving and Receiving (あげる, くれる, もらう, やる, favours and requests)", url:"https://guidetojapanese.org/learn/grammar/favors"},{t:"稲熊美保 (2004) 「韓国人日本語学習者の授受表現の習得について」『国際開発研究フォーラム』26, Nagoya University repository", url:"https://nagoya.repo.nii.ac.jp/record/4712/files/02.pdf"}],
    checked:"2026-11"},
   {id:"te-shimau-te-oku", title:"～てしまう and ～ておく", aka:["te-shimau","te-oku","～ちゃう","～じゃう","～とく","～どく","shimau","oku"], tags:["japanese","grammar","n4","verbs"],
    summary:"Two て-form helpers: ～てしまう (finished completely, or regret) and ～ておく (done in advance, or left as it is), with their casual forms ～ちゃう and ～とく.",
    levels:{
     starter:[
      "**～てしまう** is the て-form plus しまう (put away). It has two meanings, often at once.",
      "Finished completely: [宿題]{しゅくだい}はもうやってしまいました (I’ve already finished my homework).",
      "Regret, or something that happened without meaning to: [傘]{かさ}を[忘]{わす}れてしまいました (I left my umbrella behind, oops).",
      "In casual speech it shortens to ～ちゃう (～じゃう after で): [食]{た}べちゃった, [飲]{の}んじゃった.",
      "**～ておく** is the て-form plus おく (put). It means doing something now so that it is ready later: [旅行]{りょこう}の[前]{まえ}に、ホテルを[予約]{よやく}しておきます (I’ll book the hotel before the trip). It can also mean leaving something as it is: [窓]{まど}を[開]{あ}けておいてください (Please leave the window open).",
      "In casual speech it shortens to ～とく (～どく after で): [買]{か}っとく, [読]{よ}んどく."
     ],
     builder:[
      {table:[["Pattern","Meaning","Casual","Example"],["～てしまう","finish completely","～ちゃう / ～じゃう","[全部]{ぜんぶ}読んでしまった。"],["～てしまう","regret, accident","～ちゃう / ～じゃう","[財布]{さいふ}を[落]{お}としちゃった。"],["～ておく","do in advance","～とく / ～どく","[飲]{の}み[物]{もの}を[冷]{ひ}やしておく。"],["～ておく","leave as it is","～とく / ～どく","そのままにしておいて。"]]},
      "**Conjugation.** Only the helper changes. しまう is a godan verb in う (しまいます, しまった, しまおう); おく is a godan verb in く (おきます, おいて, おいた). The casual ～ちゃう and ～とく conjugate the same way: 食べちゃった, 食べちゃおう; [買]{か}っといて, [買]{か}っとかない.",
      "**Writing.** ～てしまう and ～ておく are fine in polite speech and writing. Their contractions are casual: write 読んでおいてください, not 読んどいてください, in a work email.",
      "**Choosing.** Both often translate as English “have done”. ～ておく looks ahead: it is done so that something is ready. ～てしまう looks at the action being over, often with regret.",
      "**Apologies.** ～てしまって is common in apologies: [遅]{おそ}くなってしまって、すみません (Sorry I’m late)."
     ],
     pro:[
      "**Meaning.** The main verb しまう means “put away, finish”. As a helper it marks completion, and from there the sense of something irreversible and regrettable. Tae Kim presents “unintended action” as the main meaning and “finish completely” as a separate one; most learner grammars present both together, as in this unit.",
      "**Rough forms.** ～ちまう / ～じまう are even more colloquial contractions of ～てしまう. Tae Kim says they call up the image of a rough, coarse speaker; learners should recognise them, not use them.",
      "**Deliberately not doing.** ～ないでおく means choosing not to do something for now: [彼]{かれ}には[言]{い}わないでおこう (Let’s not tell him yet).",
      "**～ておく, ～てある and ～ている.** ～ておく is the purposeful action (someone does it, for later). ～てある describes the resulting state of a transitive verb’s action, often prepared for later: [窓]{まど}が[開]{あ}けてある (Unit 7, [[te-aru]]). ～ている with an intransitive verb describes a state with no implied doer: [窓]{まど}が[開]{あ}いている. See {{transitive-intransitive}}.",
      "**Spoken sounds.** In fast speech, ～ておく after a verb in で gives ～どく: 読んでおく → 読んどく; ～てしまう after で gives ～じゃう: [死]{し}んでしまう → [死]{し}んじゃう."
     ]},
    related:["te-form","must-and-dont-have-to","casual-conversation","transitive-intransitive"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Unintended Actions (～てしまう, ～ちゃう/～じゃう, ～ちまう)", url:"https://guidetojapanese.org/learn/grammar/unintended"},{t:"Tae Kim’s Guide: Other uses of the te-form (～ておく as preparation for the future, ～とく, ～てある)", url:"https://guidetojapanese.org/learn/grammar/teform"}],
    checked:"2026-11"},
   {id:"must-and-dont-have-to", title:"Must and don’t have to", aka:["must","have to","obligation","～なければならない","～なければいけない","～なくてはいけない","～ないといけない","～なきゃ","～なくちゃ","～なくてもいい"], tags:["japanese","grammar","n4"],
    summary:"Saying “must” (～なければなりません, ～なくてはいけません, ～ないと, ～なきゃ) and “don’t have to” (～なくてもいいです), and keeping them apart from “may” and “must not”.",
    levels:{
     starter:[
      "Japanese says “must” with a double negative: “if you don’t do it, it won’t do”. [行]{い}かなければなりません (I must go) is 行かな(い) (not go) + ければ (if) + なりません (it won’t do).",
      "To build it, drop い from the ない-form and add ければ, then なりません or いけません: [食]{た}べない → 食べなければなりません.",
      "In casual speech, friends say ～なきゃ, ～なくちゃ or ～ないと: もう[帰]{かえ}らなきゃ (I have to go home now).",
      "“Don’t have to” is ～なくてもいいです (“even not doing it is fine”): [名前]{なまえ}は[書]{か}かなくてもいいです (You don’t have to write your name).",
      "Don’t confuse it with “must not”, ～てはいけません: ここで[写真]{しゃしん}をとってはいけません (You must not take photos here)."
     ],
     builder:[
      {table:[["Form","Style"],["～なければなりません","formal; rules, notices, writing"],["～なければいけません","polite; very common in speech"],["～なくてはいけません / なりません","polite; common"],["～ないといけません","polite; spoken"],["～なきゃ, ～なくちゃ, ～ないと","casual"]]},
      "**ならない or いけない?** Some textbooks link ならない with general rules and duties and いけない with one person’s situation; in everyday speech the two are largely interchangeable.",
      "**Irregular verbs.** する → しなければ; [来]{く}る → [来]{こ}なければ (read こなければ).",
      "**Don’t have to.** ～なくてもいいです, ～なくても[大丈夫]{だいじょうぶ}です, ～なくてもかまいません (a little more formal); casual ～なくていい. It is the usual “no” answer to ～なければなりませんか.",
      "**The square.** ～てもいい (may) · ～てはいけない (must not) · ～なければならない (must) · ～なくてもいい (don’t have to): doing or not doing, combined with OK or not OK.",
      "**Adjectives and nouns** follow the same pattern: [静]{しず}かでなければなりません (must be quiet), [学生]{がくせい}でなければなりません (must be a student), [新]{あたら}しくなくてもいいです (doesn’t have to be new)."
     ],
     pro:[
      "**Inside the forms.** ～なければならない is the ば-form of ない + the negative of なる (“it doesn’t come out right”). ～なくてはいけない is the て-form of ない + は + いけない (“not doing is no good”). ～なきゃ contracts ～なければ, and ～なくちゃ contracts ～なくては; in speech the ending (いけない, ならない) is often dropped.",
      "**Formal and literary.** ～ねばならない (～ねばならぬ) is a literary form of ～なければならない, still found in speeches and serious writing. ～なければならない is the normal form in rules, contracts and reports.",
      "**Related patterns at higher levels.** ～べきだ (N3, “should”), ～ざるを[得]{え}ない (N2, “have no choice but to”), ～[必要]{ひつよう}はない (“there is no need to”), and なくてはならない as “indispensable”: なくてはならない[存在]{そんざい} (something you couldn’t do without).",
      "**～ないと.** It comes from the と conditional (“if you don’t…”). It works as a warning, [早]{はや}くしないと[遅]{おく}れるよ (If you don’t hurry, you’ll be late), and, with いけない understood, as “must”: そろそろ行かないと (I’d better get going).",
      "**Don’t have to, variants.** ～ないでもいい exists but is less common than ～なくてもいい. ～なくていい (without も) is frequent in casual speech."
     ]},
    related:["requests-and-permission","conditionals-to-ba-tara-nara","nai-and-ta-forms","casual-conversation"],
    sources:[{t:"Tae Kim’s Guide to Learning Japanese: Expressing “must” or “have to” (linked from the conditionals page)", url:"https://guidetojapanese.org/learn/grammar/must"},{t:"Tae Kim’s Guide: How to say “if” in Japanese (the ば-form, including ～なければ)", url:"https://guidetojapanese.org/learn/grammar/conditionals"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"potential-form", term:"Potential form", def:"The verb form for “can”: godan verbs move to the え row + る ([書]{か}く → 書ける), ichidan verbs take られる ([食]{た}べる → 食べられる), する → できる, [来]{く}る → [来]{こ}られる. Potential verbs conjugate as ichidan verbs.", codex:"potential-form"},
   {id:"koto-ga-dekiru", term:"～ことができる (can)", def:"Dictionary form + ことができる: another way to say “can”, a little more formal than the potential form ([漢字]{かんじ}を[書]{か}くことができます). With a noun: [運転]{うんてん}ができます.", codex:"potential-form"},
   {id:"volitional-form", term:"Volitional form", def:"The casual “let’s / shall I / I’ll” form: godan verbs move to the お row + う ([行]{い}く → 行こう), ichidan verbs take よう ([食]{た}べる → 食べよう), する → しよう, [来]{く}る → [来]{こ}よう. Polite equivalent: ～ましょう.", codex:"volitional-form"},
   {id:"tsumori", term:"つもり (intention)", def:"A noun meaning “intention”, used after the dictionary form or ない-form: [行]{い}くつもりです (I intend to go), 行かないつもりです (I intend not to go). Firmer than ～ようと[思]{おも}う; for schedules, use [予定]{よてい}.", codex:"volitional-form"},
   {id:"conditional-to", term:"Conditional と", def:"Non-past plain form + と: whenever X, Y follows naturally or automatically ([押]{お}すと、[開]{あ}きます). The result can’t be a request, invitation or plan.", codex:"conditionals-to-ba-tara-nara"},
   {id:"conditional-ba", term:"Conditional ば", def:"The ば-form ([行]{い}けば, [食]{た}べれば, [高]{たか}ければ, よければ, 行かなければ): if X (is true), Y, with the focus on the condition. Common in advice: どうすればいいですか.", codex:"conditionals-to-ba-tara-nara"},
   {id:"conditional-tara", term:"Conditional たら", def:"Plain past + ら ([行]{い}ったら, [雨]{あめ}だったら): if X, or once X has happened, Y. The most flexible conditional; requests and plans can follow it.", codex:"conditionals-to-ba-tara-nara"},
   {id:"conditional-nara", term:"Conditional なら", def:"Plain form or noun + なら ([行]{い}くなら, [学生]{がくせい}なら): if (it is the case that) X. Takes up a topic or what someone just said; the result can happen before the condition.", codex:"conditionals-to-ba-tara-nara"},
   {id:"ageru", term:"あげる (give)", def:"To give, away from the speaker or between other people: [私]{わたし}は[友達]{ともだち}に[本]{ほん}をあげました. Never used for things coming to you. Polite: さしあげる. ～てあげる: do a favour for someone.", codex:"giving-and-receiving"},
   {id:"kureru", term:"くれる (give to me)", def:"To give to the speaker or the speaker’s side (family, own group): [友達]{ともだち}が[本]{ほん}をくれました. Polite: くださる. ～てくれる: someone does a favour for you.", codex:"giving-and-receiving"},
   {id:"morau", term:"もらう (receive)", def:"To receive; the receiver is the subject and the giver takes に or から: [友達]{ともだち}に[本]{ほん}をもらいました. Polite: いただく. ～てもらう: have someone do something for you.", codex:"giving-and-receiving"},
   {id:"te-shimau", term:"～てしまう", def:"て-form + しまう: the action is completely finished, or it happened with regret or by accident ([傘]{かさ}を[忘]{わす}れてしまいました). Casual: ～ちゃう / ～じゃう.", codex:"te-shimau-te-oku"},
   {id:"te-oku", term:"～ておく", def:"て-form + おく: do something in advance so it is ready for later ([予約]{よやく}しておきます), or leave something as it is. Casual: ～とく / ～どく.", codex:"te-shimau-te-oku"},
   {id:"nakereba-naranai", term:"～なければならない (must)", def:"“Must”, literally “if you don’t, it won’t do”: [行]{い}かなければなりません. Variants: ～なければいけない, ～なくてはいけない, ～ないといけない; casual ～なきゃ, ～なくちゃ, ～ないと.", codex:"must-and-dont-have-to"},
   {id:"nakute-mo-ii", term:"～なくてもいい (don’t have to)", def:"“Don’t have to”, literally “even not doing it is fine”: [書]{か}かなくてもいいです. Not the same as “must not” (～てはいけない).", codex:"must-and-dont-have-to"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e3u6-q01", lesson:"e3u6-l1", level:1, q:"What is the potential form of [待]{ま}つ (wait)?", options:[
     {t:"[待]{ま}てる", ok:true, why:"Godan: つ moves to the え row (て) and る is added."},
     {t:"[待]{ま}たれる", why:"This is the passive (“be waited for”). The potential is え row + る: [待]{ま}てる."},
     {t:"[待]{ま}ちられる", why:"られる is for ichidan verbs, and it doesn’t attach to the ます stem. [待]{ま}つ is godan: [待]{ま}てる."},
     {t:"[待]{ま}つられる", why:"られる replaces the る of ichidan verbs; it isn’t added to a godan verb’s dictionary form."}
   ]},
   {id:"e3u6-q02", lesson:"e3u6-l1", level:1, q:"Which is the standard potential form of [来]{く}る (come), as used in textbooks and writing?", options:[
     {t:"こられる", ok:true, why:"[来]{こ}られる, read こられる, is the standard potential of the irregular verb [来]{く}る."},
     {t:"これる", why:"This is the ら[抜]{ぬ}き form, very common in speech but not used in careful writing or tests."},
     {t:"きられる", why:"[来]{く}る uses こ, not き, in its potential form."},
     {t:"くれる", why:"くれる is a different verb (“give to me”), not a form of [来]{く}る."}
   ]},
   {id:"e3u6-q03", lesson:"e3u6-l1", level:2, q:"Fatima has an allergy. How does she say “I can’t eat eggs”?", options:[
     {t:"[卵]{たまご}は[食]{た}べられません。", ok:true, why:"The potential negative of 食べる: she is not able to eat them."},
     {t:"[卵]{たまご}は食べません。", why:"This means “I don’t eat eggs”, a habit or choice, not an inability."},
     {t:"[卵]{たまご}は食べてはいけません。", why:"This is a rule: “You must not eat eggs.” It is not about her own ability."},
     {t:"[卵]{たまご}は食べたくないです。", why:"This means “I don’t want to eat eggs”: a wish, not an inability."}
   ]},
   {id:"e3u6-q04", lesson:"e3u6-l1", level:2, q:"Which of these is a standard potential form, **not** a ら[抜]{ぬ}き form?", options:[
     {t:"[帰]{かえ}れる", ok:true, why:"[帰]{かえ}る is godan ([帰]{かえ}ります), so る → れる is the normal rule. Nothing has been dropped."},
     {t:"[見]{み}れる", why:"見る is ichidan, so the standard form is 見られる. 見れる is ら[抜]{ぬ}き."},
     {t:"[起]{お}きれる", why:"[起]{お}きる is ichidan; the standard form is [起]{お}きられる."},
     {t:"[来]{こ}れる", why:"The standard potential of [来]{く}る is [来]{こ}られる; [来]{こ}れる is ら[抜]{ぬ}き."}
   ]},
   {id:"e3u6-q05", lesson:"e3u6-l1", level:3, q:"Priya is writing a formal report. Which phrase correctly says “we were able to collect the data”?", options:[
     {t:"データを[集]{あつ}めることができた", ok:true, why:"Dictionary form + ことができた, with を inside the こと part: correct and suitably formal."},
     {t:"データが[集]{あつ}めれた", why:"[集]{あつ}める is ichidan, so [集]{あつ}めれた is ら[抜]{ぬ}き. A formal report would use [集]{あつ}められた."},
     {t:"データを[集]{あつ}めるができた", why:"A verb needs こと before ができる: [集]{あつ}めることができた."},
     {t:"データを[集]{あつ}められることができた", why:"This says “can” twice. Use either [集]{あつ}められた or [集]{あつ}めることができた."}
   ]},
   {id:"e3u6-q06", lesson:"e3u6-l1", level:2, q:"How do you say “With this app, you can listen to Japanese radio”?", options:[
     {t:"このアプリで[日本]{にほん}のラジオが[聞]{き}けます。", ok:true, why:"聞ける, the potential of 聞く: the app makes listening possible."},
     {t:"このアプリで日本のラジオが聞こえます。", why:"聞こえる is for sounds that reach your ears by themselves. Here the app makes something possible, so use 聞ける."},
     {t:"このアプリで日本のラジオが聞かれます。", why:"聞かれる is the passive of 聞く, not “can listen”."},
     {t:"このアプリで日本のラジオが聞きます。", why:"聞きます is just “listen”, and が doesn’t fit with it. “Can” needs the potential 聞けます."}
   ]},
   {id:"e3u6-q07", lesson:"e3u6-l1", level:1, q:"How do you say “Tomás can drive”?", options:[
     {t:"トマスさんは[運転]{うんてん}ができます。", ok:true, why:"Noun + ができる: the potential of する, used straight after a noun."},
     {t:"トマスさんは[運転]{うんてん}がします。", why:"します is “do”, not “can do”, and it doesn’t take が like this."},
     {t:"トマスさんは[運転]{うんてん}がしられます。", why:"There is no such form. The potential of する is できる."},
     {t:"トマスさんは[運転]{うんてん}ができることができます。", why:"This says “can” twice. [運転]{うんてん}ができます is enough."}
   ]},
   {id:"e3u6-q08", lesson:"e3u6-l1", level:2, q:"How do you say “I couldn’t swim” politely?", options:[
     {t:"[泳]{およ}げませんでした。", ok:true, why:"[泳]{およ}げる (potential) conjugates as ichidan: drop る, add ませんでした."},
     {t:"[泳]{およ}がれませんでした。", why:"[泳]{およ}がれる is the passive or honorific form, not the potential."},
     {t:"[泳]{およ}ぎられませんでした。", why:"There is no such form. [泳]{およ}ぐ is godan: [泳]{およ}げる."},
     {t:"[泳]{およ}げるませんでした。", why:"ませんでした replaces る; it isn’t added after it."}
   ]},
   {id:"e3u6-q09", lesson:"e3u6-l1", level:3, q:"Kenji says 「[日本語]{にほんご}が[少]{すこ}し[話]{はな}せます」 to a friend, and writes 「日本語を[少]{すこ}し話すことができます」 in a job application. What is the difference?", options:[
     {t:"They mean the same; the second sounds a little more formal.", ok:true, why:"The potential form and ～ことができる both mean “can”; ～ことができる suits formal writing well."},
     {t:"The first is about ability; the second is about permission.", why:"Neither is about permission. Both describe what Kenji is able to do."},
     {t:"The second is in the past tense.", why:"Both are non-past. The past would be 話せました or 話すことができました."},
     {t:"The first is wrong, because potential verbs must take を.", why:"が is the particle textbooks usually teach with potential verbs, and を is also used. Both sentences are correct."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e3u6-q10", lesson:"e3u6-l2", level:1, q:"What is the volitional form of [飲]{の}む (drink)?", options:[
     {t:"[飲]{の}もう", ok:true, why:"Godan: む moves to the お row (も) and う is added."},
     {t:"[飲]{の}みよう", why:"よう is for ichidan verbs, and it doesn’t attach to the ます stem. [飲]{の}む is godan: [飲]{の}もう."},
     {t:"[飲]{の}めよう", why:"め is the え row, used for the potential [飲]{の}める. The volitional uses the お row."},
     {t:"[飲]{の}むよう", why:"よう isn’t added to the dictionary form. For a godan verb, the last kana moves to the お row: [飲]{の}もう."}
   ]},
   {id:"e3u6-q11", lesson:"e3u6-l2", level:1, q:"What is the volitional form of する?", options:[
     {t:"しよう", ok:true, why:"The irregular する becomes しよう."},
     {t:"すろう", why:"する is irregular, not a godan verb, so it doesn’t take the お row + う rule."},
     {t:"しろう", why:"There is no such form. (しろ is the blunt command form of する.)"},
     {t:"できよう", why:"できる is the potential of する. The volitional is しよう."}
   ]},
   {id:"e3u6-q12", lesson:"e3u6-l2", level:1, q:"What is the polite equivalent of 「[一緒]{いっしょ}に[帰]{かえ}ろう」?", options:[
     {t:"[一緒]{いっしょ}に[帰]{かえ}りましょう。", ok:true, why:"～ましょう is the polite “let’s”, matching the casual volitional."},
     {t:"[一緒]{いっしょ}に[帰]{かえ}ろうです。", why:"です can’t follow the volitional form. The polite version is ～ましょう."},
     {t:"[一緒]{いっしょ}に[帰]{かえ}れます。", why:"[帰]{かえ}れます is the potential: “(we) can go home together”."},
     {t:"[一緒]{いっしょ}に[帰]{かえ}りたいです。", why:"This says “I want to go home together”, a wish rather than a suggestion."}
   ]},
   {id:"e3u6-q13", lesson:"e3u6-l2", level:2, q:"Hana switches off the TV and says to herself: “Right, I’ll study.” What does she say?", options:[
     {t:"よし、[勉強]{べんきょう}しよう。", ok:true, why:"The volitional said to yourself is a decision: “I’ll study.”"},
     {t:"よし、[勉強]{べんきょう}できる。", why:"できる is “can study”, a statement of ability, not a decision."},
     {t:"よし、[勉強]{べんきょう}された。", why:"This is a passive past form (“was studied”), not a decision."},
     {t:"よし、[勉強]{べんきょう}すろう。", why:"The volitional of する is しよう, not すろう."}
   ]},
   {id:"e3u6-q14", lesson:"e3u6-l2", level:2, q:"Which sentence correctly says that your friend Luca is thinking of changing jobs?", options:[
     {t:"ルカさんは[仕事]{しごと}を[変]{か}えようと[思]{おも}っています。", ok:true, why:"For someone else’s intention, use the volitional + と[思]{おも}っています."},
     {t:"ルカさんは[仕事]{しごと}を[変]{か}えようと[思]{おも}います。", why:"～と[思]{おも}います states your own thoughts. For another person, use ～と[思]{おも}っています."},
     {t:"ルカさんは[仕事]{しごと}を[変]{か}えろうと[思]{おも}っています。", why:"[変]{か}える (change) is ichidan, so the volitional is [変]{か}えよう."},
     {t:"ルカさんは[仕事]{しごと}を[変]{か}えようつもりです。", why:"つもり follows the dictionary form: [変]{か}えるつもりです."}
   ]},
   {id:"e3u6-q15", lesson:"e3u6-l2", level:2, q:"How do you say “I intend not to eat sweets this month”?", options:[
     {t:"[今月]{こんげつ}は[甘]{あま}いものを[食]{た}べないつもりです。", ok:true, why:"ない-form + つもりです: “intend not to”."},
     {t:"今月は[甘]{あま}いものを食べようつもりです。", why:"The volitional can’t go before つもり, and this has no negative anyway."},
     {t:"今月は[甘]{あま}いものを食べなかったつもりです。", why:"The past before つもり means “I believe I didn’t eat”, not a plan for this month."},
     {t:"今月は[甘]{あま}いものを食べないのつもりです。", why:"つもり follows a verb directly, with no の."}
   ]},
   {id:"e3u6-q16", lesson:"e3u6-l2", level:2, q:"What does 「[来年]{らいねん}、[引]{ひ}っ[越]{こ}そうと[思]{おも}います。」 mean?", options:[
     {t:"I’m thinking of moving house next year.", ok:true, why:"Volitional ([引]{ひ}っ[越]{こ}そう) + と[思]{おも}います: the speaker’s intention."},
     {t:"I think someone will move house next year.", why:"That would be the dictionary form: [引]{ひ}っ[越]{こ}すと[思]{おも}います. The volitional shows the speaker’s own intention."},
     {t:"I moved house last year.", why:"The sentence is about next year ([来年]{らいねん}), and it describes an intention, not a past event."},
     {t:"I can move house next year.", why:"“Can” would need the potential [引]{ひ}っ[越]{こ}せる."}
   ]},
   {id:"e3u6-q17", lesson:"e3u6-l2", level:1, q:"What is the casual version of 「[一緒]{いっしょ}に[食]{た}べましょう」 (Let’s eat together)?", options:[
     {t:"[一緒]{いっしょ}に食べよう。", ok:true, why:"食べる is ichidan: る → よう."},
     {t:"[一緒]{いっしょ}に食べろう。", why:"Ichidan verbs take よう, not ろう: 食べよう."},
     {t:"[一緒]{いっしょ}に食べれる。", why:"This is a ら[抜]{ぬ}き potential (“can eat”), not “let’s eat”."},
     {t:"[一緒]{いっしょ}に食べこう。", why:"The お row + う rule is for godan verbs. 食べる is ichidan: 食べよう."}
   ]},
   {id:"e3u6-q18", lesson:"e3u6-l2", level:3, q:"A notice says the meeting is scheduled to start at three. Which sentence describes that?", options:[
     {t:"[会議]{かいぎ}は[三時]{さんじ}に[始]{はじ}まる[予定]{よてい}です。", ok:true, why:"[予定]{よてい} is for arrangements and timetables."},
     {t:"[会議]{かいぎ}は三時に[始]{はじ}まるつもりです。", why:"つもり is a person’s intention. A meeting can’t intend anything."},
     {t:"[会議]{かいぎ}は三時に[始]{はじ}まろうと[思]{おも}います。", why:"This makes the meeting think about starting. Only people have intentions; use [予定]{よてい}."},
     {t:"[会議]{かいぎ}は三時に[始]{はじ}まりたいです。", why:"～たい is a person’s wish. Use [予定]{よてい} for schedules."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e3u6-q19", lesson:"e3u6-l3", level:1, q:"What is the ば-form of [食]{た}べる (eat)?", options:[
     {t:"食べれば", ok:true, why:"Ichidan: る → れば."},
     {t:"食べば", why:"Ichidan verbs keep the れ: 食べれば."},
     {t:"食べるば", why:"ば doesn’t attach to the dictionary form. る becomes れば."},
     {t:"食べられば", why:"There is no such form. (The potential 食べられる would give 食べられれば, “if (you) can eat”.)"}
   ]},
   {id:"e3u6-q20", lesson:"e3u6-l3", level:1, q:"What is the ば-form of いい (good)?", options:[
     {t:"よければ", ok:true, why:"いい changes to よ in its other forms: よければ, よかったら."},
     {t:"いいければ", why:"いい is irregular: it uses よ, as in よくない and よかった."},
     {t:"いいれば", why:"れば is for ichidan verbs. いい is an い-adjective with the irregular stem よ: よければ."},
     {t:"いいなら", why:"いいなら is the なら form (“if, as you say, it’s fine”), not the ば-form."}
   ]},
   {id:"e3u6-q21", lesson:"e3u6-l3", level:1, q:"How do you say “if you are a student” with a noun conditional?", options:[
     {t:"[学生]{がくせい}なら", ok:true, why:"Nouns take なら directly."},
     {t:"学生だなら", why:"No だ before なら."},
     {t:"学生ければ", why:"ければ is for い-adjectives. Nouns use なら (or, formally, であれば)."},
     {t:"学生れば", why:"There is no such form. Nouns use なら."}
   ]},
   {id:"e3u6-q22", lesson:"e3u6-l3", level:2, q:"Which sentence sounds **unnatural**?", options:[
     {t:"[駅]{えき}に[着]{つ}くと、メールしてください。", ok:true, why:"Unnatural: a request can’t follow と. Use [着]{つ}いたら."},
     {t:"[窓]{まど}を[開]{あ}けると、[寒]{さむ}くなりますよ。", why:"Natural: getting cold follows naturally from opening the window."},
     {t:"[右]{みぎ}に[曲]{ま}がると、[病院]{びょういん}があります。", why:"Natural: と is common in directions."},
     {t:"お[酒]{さけ}を[飲]{の}むと、[顔]{かお}が[赤]{あか}くなります。", why:"Natural: a result that always follows."}
   ]},
   {id:"e3u6-q23", lesson:"e3u6-l3", level:3, q:"Kenji is out visiting customers. He tells his manager on the phone: “I’ll call the client once I’m back at the office.” Which sentence fits?", options:[
     {t:"[会社]{かいしゃ}に[戻]{もど}ったら、お[客様]{きゃくさま}に[電話]{でんわ}します。", ok:true, why:"たら for “once”: Kenji will surely get back, and a plan can follow たら."},
     {t:"[会社]{かいしゃ}に[戻]{もど}ると、お[客様]{きゃくさま}に電話します。", why:"A one-time plan like 電話します can’t follow と."},
     {t:"[会社]{かいしゃ}に[戻]{もど}れば、お[客様]{きゃくさま}に電話します。", why:"Getting back is an action, and Kenji does both things, so a plan after ば sounds unnatural. ば also makes his return sound like an “if”, not a “once”."},
     {t:"[会社]{かいしゃ}に[戻]{もど}るなら、お[客様]{きゃくさま}に電話します。", why:"なら treats his return as a topic (“if it’s the case that I go back”) and lets the call come first. That isn’t what Kenji means."}
   ]},
   {id:"e3u6-q24", lesson:"e3u6-l3", level:1, q:"A friend says 「パソコンを[買]{か}いたいんです。」 You answer: “If it’s a computer you want, the shop in front of the station is cheap.” Which form starts your answer?", options:[
     {t:"パソコンなら、", ok:true, why:"Noun + なら takes up the topic your friend raised."},
     {t:"パソコンだなら、", why:"なら follows a noun directly, without だ."},
     {t:"パソコンば、", why:"ば can’t attach to a noun. Use なら."},
     {t:"パソコンたら、", why:"たら follows a past form (パソコンだったら). With a bare noun the form is wrong."}
   ]},
   {id:"e3u6-q25", lesson:"e3u6-l3", level:2, q:"Which sentence naturally says “When I opened the box, there was a cat inside”?", options:[
     {t:"[箱]{はこ}を[開]{あ}けたら、[猫]{ねこ}がいました。", ok:true, why:"たら + a past ending describes what you found (と would also work: [開]{あ}けると)."},
     {t:"[箱]{はこ}を[開]{あ}ければ、[猫]{ねこ}がいました。", why:"ば isn’t used for a one-time past discovery like this."},
     {t:"[箱]{はこ}を[開]{あ}けるなら、[猫]{ねこ}がいました。", why:"なら isn’t used to tell what happened when you did something."},
     {t:"[箱]{はこ}を[開]{あ}けたと、[猫]{ねこ}がいました。", why:"と follows the non-past: [開]{あ}けると."}
   ]},
   {id:"e3u6-q26", lesson:"e3u6-l3", level:3, q:"Mei asks 「どうすればいいですか。」 and her friend asks 「どうしたらいいですか。」 Which statement is true?", options:[
     {t:"Both are natural and mean “What should I do?”", ok:true, why:"Advice questions are one of the real overlaps: ば and たら are both common here."},
     {t:"Only the ば version is correct.", why:"Both are correct and very common."},
     {t:"The たら version asks about the past.", why:"The た in たら doesn’t make the question past. Both ask what to do now."},
     {t:"The ば version is rude.", why:"Neither is rude. Both are polite with です."}
   ]},
   {id:"e3u6-q27", lesson:"e3u6-l3", level:3, q:"Your friend will visit Japan next month and needs a visa first. You say: “If you’re going to Japan, get a visa.” Which sentence fits?", options:[
     {t:"[日本]{にほん}へ[行]{い}くなら、ビザを[取]{と}ってください。", ok:true, why:"With なら, the result (getting a visa) can happen before the condition (the trip)."},
     {t:"日本へ行ったら、ビザを[取]{と}ってください。", why:"With たら, the trip comes first, so this says to get a visa after arriving."},
     {t:"日本へ行くと、ビザを[取]{と}ってください。", why:"A request can’t follow と."},
     {t:"日本へ行けば、ビザを[取]{と}ってください。", why:"Going is an action, and your friend would do both things, so a request after ば sounds unnatural. It doesn’t put the visa first either."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e3u6-q28", lesson:"e3u6-l4", level:1, q:"How do you say “My friend gave me some chocolate”?", options:[
     {t:"[友達]{ともだち}がチョコレートをくれました。", ok:true, why:"It came to you, so くれる, with the giver marked by が."},
     {t:"[友達]{ともだち}がチョコレートをあげました。", why:"あげる can’t describe something coming to you."},
     {t:"[友達]{ともだち}がチョコレートをもらいました。", why:"This says your friend received chocolate."},
     {t:"[友達]{ともだち}がチョコレートをさしあげました。", why:"さしあげる is the humble form of あげる, so the direction is still wrong."}
   ]},
   {id:"e3u6-q29", lesson:"e3u6-l4", level:1, q:"How do you say “I gave my little brother a book”?", options:[
     {t:"[弟]{おとうと}に[本]{ほん}をあげました。", ok:true, why:"You are the giver, so あげる; the receiver takes に."},
     {t:"[弟]{おとうと}に本をくれました。", why:"くれる is for things coming to you. When you give, use あげる."},
     {t:"[弟]{おとうと}に本をもらいました。", why:"This means you received a book from your brother."},
     {t:"[弟]{おとうと}に本をくださいました。", why:"くださる is the respectful form of くれる, so the direction is wrong, and it is too polite for your own brother."}
   ]},
   {id:"e3u6-q30", lesson:"e3u6-l4", level:1, q:"Choose the particle this lesson teaches for an organisation: [市]{し}___[手紙]{てがみ}をもらいました。 (I got a letter from the city office.)", options:[
     {t:"から", ok:true, why:"From an organisation, から is the usual choice and the one textbooks teach."},
     {t:"に", why:"に is fine for a person who gives. With an organisation such as a city office or a company, から is the usual choice."},
     {t:"が", why:"が would make the city the subject, but the subject of もらう is the receiver."},
     {t:"で", why:"で marks a place of action or a means, not the giver."}
   ]},
   {id:"e3u6-q31", lesson:"e3u6-l4", level:2, q:"How do you say, respectfully, “The teacher gave me a dictionary”?", options:[
     {t:"[先生]{せんせい}が[辞書]{じしょ}をくださいました。", ok:true, why:"くださる is the respectful form of くれる; its ます-form is くださいます."},
     {t:"先生が[辞書]{じしょ}をさしあげました。", why:"さしあげる is the humble form of あげる: the direction is wrong."},
     {t:"先生が[辞書]{じしょ}をいただきました。", why:"With いただく the subject is the receiver: this would say the teacher received a dictionary. You could say 先生に[辞書]{じしょ}をいただきました."},
     {t:"先生が[辞書]{じしょ}をくださりました。", why:"くださる has an irregular ます-form: くださいます, くださいました."}
   ]},
   {id:"e3u6-q32", lesson:"e3u6-l4", level:2, q:"What does 「ミンさんに[日本語]{にほんご}を[教]{おし}えてもらいました。」 mean?", options:[
     {t:"Min taught me Japanese (and I’m grateful).", ok:true, why:"～てもらう: I received the favour of Min teaching me. The helper takes に."},
     {t:"I taught Min Japanese.", why:"That would be ミンさんに日本語を[教]{おし}えてあげました."},
     {t:"Min was taught Japanese by someone.", why:"The subject of もらう is the receiver of the favour, which is the speaker here, not Min."},
     {t:"I asked Min to teach me, but she refused.", why:"The sentence says the favour happened: もらいました is past and positive."}
   ]},
   {id:"e3u6-q33", lesson:"e3u6-l4", level:3, q:"Sara tells a colleague that Tanaka-san helped her, and she wants to show she is grateful. Which sentence fits?", options:[
     {t:"[田中]{たなか}さんが[手伝]{てつだ}ってくれました。", ok:true, why:"～てくれる: someone did something for you, with gratitude."},
     {t:"[田中]{たなか}さんが[手伝]{てつだ}ってあげました。", why:"～てあげる is for favours going away from you: this says Tanaka helped someone else."},
     {t:"[田中]{たなか}さんが[手伝]{てつだ}ってもらいました。", why:"With ～てもらう, the subject receives the help: this says Tanaka was helped."},
     {t:"[田中]{たなか}さんが[手伝]{てつだ}ってさしあげました。", why:"さしあげる is humble “give”, going away from Sara: wrong direction."}
   ]},
   {id:"e3u6-q34", lesson:"e3u6-l4", level:2, q:"You are lost and want to ask a stranger, very politely, to tell you the way. Which do you say?", options:[
     {t:"すみません、[道]{みち}を[教]{おし}えていただけませんか。", ok:true, why:"～ていただけませんか is a very polite request, right for a stranger."},
     {t:"すみません、[道]{みち}を[教]{おし}えてくれない？", why:"～てくれない？ is casual, for friends and family."},
     {t:"すみません、[道]{みち}を[教]{おし}えてあげませんか。", why:"～てあげる is a favour going away from you, so this asks the stranger to teach someone else."},
     {t:"すみません、[道]{みち}を[教]{おし}えてもらいますか。", why:"This asks whether the stranger will have someone teach them. Requests use ～てもらえませんか or ～ていただけませんか."}
   ]},
   {id:"e3u6-q35", lesson:"e3u6-l4", level:3, q:"Your neighbour brought vegetables for you and your mother. Telling a friend, which verb do you use? [隣]{となり}の[人]{ひと}が[母]{はは}と[私]{わたし}に[野菜]{やさい}を___。", options:[
     {t:"くれました", ok:true, why:"The vegetables came to you and to your mother, who is on your side (ウチ). A gift coming to your side from an outsider takes くれる."},
     {t:"あげました", why:"あげる can’t describe a gift coming to you. Use くれました."},
     {t:"もらいました", why:"With もらう the receiver is the subject; this would need 母と[私]{わたし}は[隣]{となり}の人に[野菜]{やさい}をもらいました."},
     {t:"いただきました", why:"いただく is humble “receive”, with the receiver as the subject, so the sentence doesn’t fit."}
   ]},
   {id:"e3u6-q36", lesson:"e3u6-l4", level:2, q:"Ana lent Min a dictionary. Neither is your family. Which sentence describes this?", options:[
     {t:"アナさんはミンさんに[辞書]{じしょ}を[貸]{か}してあげました。", ok:true, why:"A favour between two other people: ～てあげる."},
     {t:"アナさんはミンさんに[辞書]{じしょ}を[貸]{か}してくれました。", why:"～てくれる needs the receiver to be you or your side. Min is neither."},
     {t:"アナさんはミンさんに[辞書]{じしょ}を[貸]{か}してもらいました。", why:"This means Ana had Min lend her a dictionary: the opposite direction."},
     {t:"アナさんはミンさんに[辞書]{じしょ}を[貸]{か}していただきました。", why:"いただく is humble “receive”: it would mean Ana received the favour, the opposite direction."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e3u6-q37", lesson:"e3u6-l5", level:1, q:"How do you say “I must write (it)” politely, with [書]{か}く?", options:[
     {t:"書かなければなりません", ok:true, why:"ない-form 書かない → drop い → ければ → なりません."},
     {t:"書かないければなりません", why:"The い of ない must be dropped before ければ."},
     {t:"書きなければなりません", why:"The ない-form of 書く is 書かない (あ row), not 書きない."},
     {t:"書けなければなりません", why:"This is built on the potential 書ける: “must be able to write”."}
   ]},
   {id:"e3u6-q38", lesson:"e3u6-l5", level:1, q:"What does ～なくてもいいです mean?", options:[
     {t:"You don’t have to…", ok:true, why:"Literally “even not doing it is fine”."},
     {t:"You must not…", why:"That is ～てはいけません."},
     {t:"You must…", why:"That is ～なければなりません."},
     {t:"Please don’t…", why:"That is ～ないでください."}
   ]},
   {id:"e3u6-q39", lesson:"e3u6-l5", level:1, q:"Your friend looks at her watch and says 「あ、もう[帰]{かえ}らなきゃ。」 What does she mean?", options:[
     {t:"Oh, I have to go home now.", ok:true, why:"～なきゃ is the casual contraction of ～なければ, with いけない understood."},
     {t:"Oh, I don’t have to go home yet.", why:"That would be まだ[帰]{かえ}らなくてもいい."},
     {t:"Oh, I can’t go home now.", why:"That would be the potential: もう[帰]{かえ}れない."},
     {t:"Oh, I went home already.", why:"なきゃ is about obligation now, not a past action."}
   ]},
   {id:"e3u6-q40", lesson:"e3u6-l5", level:2, q:"A museum sign forbids photography. Which sentence matches it?", options:[
     {t:"[写真]{しゃしん}をとってはいけません。", ok:true, why:"～てはいけません is a ban: you must not."},
     {t:"[写真]{しゃしん}をとらなくてもいいです。", why:"This says photos aren’t necessary, which is not a ban."},
     {t:"[写真]{しゃしん}をとらなければなりません。", why:"This says you must take photos."},
     {t:"[写真]{しゃしん}をとってもいいです。", why:"This gives permission: you may take photos."}
   ]},
   {id:"e3u6-q41", lesson:"e3u6-l5", level:1, q:"What does 「[宿題]{しゅくだい}はもう[全部]{ぜんぶ}やってしまいました。」 mean?", options:[
     {t:"I’ve already finished all my homework.", ok:true, why:"～てしまう here means completely finished, helped by もう and [全部]{ぜんぶ}."},
     {t:"I’ll do my homework in advance.", why:"That would be ～ておきます."},
     {t:"I have to do all my homework.", why:"That would be ～なければなりません."},
     {t:"I don’t have to do my homework.", why:"That would be ～なくてもいいです."}
   ]},
   {id:"e3u6-q42", lesson:"e3u6-l5", level:2, q:"What is the casual form of [忘]{わす}れてしまった (I forgot, oops)?", options:[
     {t:"[忘]{わす}れちゃった", ok:true, why:"～てしまった → ～ちゃった."},
     {t:"[忘]{わす}れじゃった", why:"～じゃう is only for verbs whose て-form ends in で, such as [飲]{の}んで → [飲]{の}んじゃう."},
     {t:"[忘]{わす}れとった", why:"～とく is the contraction of ～ておく, not ～てしまう (and its past is ～といた)."},
     {t:"[忘]{わす}れてちゃった", why:"The contraction replaces てしま with ちゃ; the て doesn’t stay."}
   ]},
   {id:"e3u6-q43", lesson:"e3u6-l5", level:2, q:"Before a party, you ask a housemate to put the drinks in the fridge so they are cold in time. Which do you say?", options:[
     {t:"[飲]{の}み[物]{もの}を[冷蔵庫]{れいぞうこ}に[入]{い}れておいてください。", ok:true, why:"～ておく: do it now so it’s ready for later."},
     {t:"[飲]{の}み[物]{もの}を[冷蔵庫]{れいぞうこ}に入れなくてもいいです。", why:"This says it isn’t necessary, the opposite of your request."},
     {t:"[飲]{の}み[物]{もの}を[冷蔵庫]{れいぞうこ}に入れてはいけません。", why:"This forbids it."},
     {t:"[飲]{の}み[物]{もの}を[冷蔵庫]{れいぞうこ}に入れてしまいました。", why:"This is a past statement (“I’ve put them in”, perhaps with regret), not a request."}
   ]},
   {id:"e3u6-q44", lesson:"e3u6-l5", level:3, q:"Ana arrives late to a meeting and says 「[遅]{おそ}くなってしまって、すみません。」 What does ～てしまって add?", options:[
     {t:"Regret: being late happened, and she is sorry about it.", ok:true, why:"～てしまう often shows regret for something unfortunate, which suits an apology."},
     {t:"That she was late on purpose.", why:"～てしまう suggests the opposite: it happened against her wishes."},
     {t:"That she prepared in advance to be late.", why:"That idea belongs to ～ておく, and it doesn’t fit here."},
     {t:"That she must be late.", why:"Obligation would need ～なければならない."}
   ]},
   {id:"e3u6-q45", lesson:"e3u6-l5", level:3, q:"Which sentence would sound too casual in an email to a teacher?", options:[
     {t:"[明日]{あした}までにレポートを[出]{だ}さなきゃいけません。", ok:true, why:"～なきゃ is a casual contraction. In an email to a teacher, write ～なければなりません."},
     {t:"[明日]{あした}までにレポートを出さなければなりません。", why:"The full form: suitable for a polite email."},
     {t:"[明日]{あした}までにレポートを[書]{か}いておきます。", why:"～ておきます is the full form and fine in polite writing."},
     {t:"[明日]{あした}までにレポートを出さなくてもいいですか。", why:"～なくてもいいですか (“Is it all right if I don’t…?”) is polite and fine in an email."}
   ]}
  ]
});
