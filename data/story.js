/* Kamome House, Season 1: one optional episode per Japanese Foundations unit (story bible Draft 3).
   Parts: narr (Mugi's English narration) · line (who, ja, en, gl = gloss for words above level) · note (Mugi's one inline note)
   · plates (tap-to-read cards) · ex (an ordinary exercise, any engine type) · lang (language in context) · reflect.
   draft:true episodes show only with #story-<unit>?draft (for the owner's review). */
window.ICA_STORY = {
  cast: {
    cheska:{name:"Cheska", ja:"チェスカ"}, yen:{name:"Yến", ja:"イエン"}, rodrigo:{name:"Rodrigo", ja:"ロドリゴ"}, toby:{name:"Toby", ja:"トビー"},
    aoi:{name:"Aoi", ja:"あおい"}, mariya:{name:"Mariya", ja:"まりや"}, kaito:{name:"Kaito", ja:"かいと"},
    fumiko:{name:"Mrs Satō", ja:"さとうさん"}, shoichi:{name:"Mr Satō", ja:"さとうさん"}
  },
  episodes: [
  {unit:"e3u1", n:1, title:"Names on the mailboxes", month:"April", level:"Kana only", parts:[
    {t:"narr", text:"Before anything else happens at Kamome House, there are mailboxes. It is April in Shioura, a harbour town on the Sea of Japan coast, and eight nameplates hang by the gate of an old wooden share house. In Japan a mailbox usually shows only the family name. Can you read them?"},
    {t:"mailboxes", title:"The mailboxes", hint:"Tap a mailbox to check your reading.", items:[
      {room:"101", ja:"ベルガラ", ro:"Vergara", old:true, who:"Cheska Vergara, from the Philippines. She has lived here since last October, so her label has had a winter of sea air. Japanese has no *v*, so katakana usually writes it with the ば row."},
      {room:"102", ja:"モンドラゴン", ro:"Mondragón", who:"Rodrigo Mondragón, from Mexico. New this April. Two ン in one name."},
      {room:"103", ja:"せと", ro:"Seto", old:true, who:"Mariya Seto, from an island an hour away by ferry. She moved in a year ago, in her first year at university."},
      {room:"201", ja:"ウィットロック", ro:"Whitlock", old:true, who:"Toby Whitlock, from Australia. He moved in last October, the same week as Cheska. ウィ is a katakana combination for *wi*, and each small ッ is a one-beat pause."},
      {room:"202", ja:"とがわ", ro:"Togawa", who:"Aoi Togawa, a master's student from Saitama. New this April."},
      {room:"203", ja:"くぜ", ro:"Kuze", who:"Kaito Kuze, a first-year student from a mountain town. New this April."},
      {room:"204", ja:"ゴー", ro:"Ngô", who:"Ngô Hải Yến, from Vietnam. New this April. Katakana can't spell the *ng* at the start, so it becomes ゴー, with a long vowel."},
      {room:"205", ja:"", ro:"(empty)", who:"Room 205 has no name on it. For now."}],
      cottage:{ja:"さとう", ro:"Satō", who:"The owners, Mr and Mrs Satō, in the cottage across the garden. Three beats: さ・と・う, a long *o*."}},
    {t:"narr", text:"Above the gate, a wooden sign: かもめそう. *Kamome* is a seagull, and *-sō* is a common ending for the name of a small apartment house. Next to the gate is the neighbourhood's rubbish station, and Mariya, who has lived here a year, is already explaining it to Yến."},
    {t:"gomi", title:"The rubbish station", hint:"Tap a bag to see what goes in it. Every town has its own rules (some have more than twenty types); these are Shioura's main ones.", items:[
      {icon:"bag", ja:"もえるごみ", ro:"moeru gomi", en:"burnable rubbish", when:"Mon and Thu", note:"Food waste (なまごみ: drain it and wrap it in newspaper first), paper tissues and anything else that burns, in the city's own see-through bags."},
      {icon:"cup", ja:"もえないごみ", ro:"moenai gomi", en:"non-burnable rubbish", when:"2nd and 4th Wed", note:"Broken crockery, small metal things, light bulbs. Wrap anything sharp and write きけん (danger) on the bag."},
      {icon:"pla", ja:"プラ", ro:"pura", en:"plastic packaging", when:"Tue", note:"Anything with the プラ mark: wrappers, trays, bags, bottle caps. Rinse it first."},
      {icon:"pet", ja:"ペットボトル", ro:"petto botoru", en:"plastic (PET) drink bottles", when:"1st and 3rd Wed", note:"Bottles with the PET mark. Caps and labels off (they go in プラ), rinsed and squashed."},
      {icon:"can", ja:"びん・かん", ro:"bin, kan", en:"glass bottles and cans", when:"1st and 3rd Wed", note:"Glass bottles and drink or food cans, rinsed. Spray cans must be completely empty."},
      {icon:"box", ja:"ダンボール・しんぶん", ro:"danbōru, shinbun", en:"cardboard and newspaper", when:"Fri", note:"Flattened cardboard boxes, newspapers and magazines, tied with string. Paper is a resource, so it isn't burnable rubbish here."},
      {icon:"chair", ja:"そだいごみ", ro:"sodai gomi", en:"oversized items", when:"By booking", note:"Furniture, bikes, big appliances. Book a pickup with the city and buy a fee sticker at a convenience store. Air conditioners, TVs, fridges and washing machines follow a separate recycling law."}],
      calendar:[["月","げつ","もえるごみ"],["火","か","プラ"],["水","すい","びん・かん・ペットボトル (1st and 3rd), もえないごみ (2nd and 4th)"],["木","もく","もえるごみ"],["金","きん","ダンボール・しんぶん"]],
      calnote:"Days of the week are written with kanji; the small kana above them show the reading. Rubbish goes out by 8 in the morning on its day, never the night before. Food waste goes out twice a week, with the burnables."},
    {t:"note", text:"People think the first Japanese they'll read in a new town is a menu. It's the mailboxes. Then the rubbish calendar. Then, much later, the menu."},
    {t:"narr", text:"Mr Satō looks up at the grey sky and says あめ (rain). Yến, who has just arrived with two suitcases, hears あめ (candy) and looks around for it. Same kana, different melody. A black-and-white cat walks along the wall. Yến calls her ミウ. Mariya, a few minutes later, calls her ムゥ. The cat answers to both."},
    {t:"ex", ex:{id:"story-e3u1-x1", type:"mcq", q:"Which mailbox belongs to Toby Whitlock?", options:[
      {t:"ウィットロック", ok:true, why:"Right: ウィ (*wi*), ッ (a pause), ト, ロ, ッ, ク."},
      {t:"ウイトロク", why:"Close, but this has no pauses. Whitlock has two: the small ッ before ト and before ク."},
      {t:"モンドラゴン", why:"That's Rodrigo Mondragón."},
      {t:"ゴー", why:"That's Yến's family name, Ngô."}]}},
    {t:"ex", ex:{id:"story-e3u1-x2", type:"mcq", q:"The cottage plate says さとう. How many beats (morae) does it have?", options:[
      {t:"Three", ok:true, why:"さ・と・う: the long *o* takes a beat of its own."},
      {t:"Two", why:"That would be せと (Seto). In さとう the う after と lengthens the vowel and counts as a beat."},
      {t:"Four", why:"There are only three kana, and each is one beat."}]}},
    {t:"ex", ex:{id:"story-e3u1-x4", type:"mcq", q:"Yến has an empty plastic tray from the supermarket with the プラ mark on it. Which bag does it go in?", options:[
      {t:"プラ", ok:true, why:"Right: the プラ mark means plastic packaging, and that has its own collection day (火, *ka*, Tuesday, on this calendar)."},
      {t:"もえるごみ", why:"Not in Shioura: plastic packaging with the プラ mark is collected separately. Some cities do burn it, which is why you always check the local rules."},
      {t:"ペットボトル", why:"That bag is only for PET drink bottles. A tray isn't a bottle."},
      {t:"びん・かん", why:"That's for glass bottles and cans."}]}},
    {t:"ex", ex:{id:"story-e3u1-x3", type:"type", q:"The sign by the gate says *Kamome-sō*. Type it in hiragana.", book:"Write *Kamome-sō* in hiragana.", answer:"かもめそう",
      hint:"The long *o* is written with う in hiragana.",
      wrongs:[{v:"かもめそ", why:"The *o* in *sō* is long, so it needs a second kana: そう."},{v:"かもめそお", why:"A long *o* is usually written with う, not お: そう."}],
      why:"かもめそう: か・も・め・そ・う, five beats. Hiragana writes the long *o* with う."}},
    {t:"lang", items:["Long vowels: さとう (*Satō*, three beats) and せと (*Seto*, two beats) sound similar, but the extra beat changes the name.", "Small ッ: the pause in ウィットロック counts as a beat, just like the one in きって."]},
    {t:"reflect", q:"Which nameplate took you longest to read, and what made it hard?"}
  ]},
  {unit:"e3u2", n:2, draft:true, title:"はじめまして", month:"April", level:"N5", parts:[
    {t:"narr", text:"The first Sunday in April. Mrs Satō has decided that the residents, old and new, will eat together, whether they like it or not. Rodrigo has lived here since October, so he is setting the table. Cheska arrived on Friday, and she is helping, mostly by holding things."},
    {t:"line", who:"rodrigo", ja:"はじめまして。ロドリゴです。メキシコから[来]{き}ました。", en:"Nice to meet you. I'm Rodrigo. I came from Mexico."},
    {t:"line", who:"cheska", ja:"はじめまして。チェスカです。フィリピンから[来]{き}ました。[学生]{がくせい}です。", en:"Nice to meet you. I'm Cheska. I came from the Philippines. I'm a student."},
    {t:"line", who:"rodrigo", ja:"よろしくお[願]{ねが}いします。", en:"Pleased to meet you.", gl:"よろしくお願いします: a set phrase for meeting someone, roughly \"please treat me kindly\"."},
    {t:"narr", text:"Mrs Satō comes in carrying three bowls and sets them down without a word of explanation."},
    {t:"line", who:"rodrigo", ja:"すみません、これは[何]{なん}ですか。", en:"Excuse me, what is this?"},
    {t:"line", who:"fumiko", ja:"それは[肉]{にく}じゃがです。", en:"That's nikujaga.", gl:"肉じゃが: a home-style stew of meat and potatoes."},
    {t:"line", who:"cheska", ja:"あれも[肉]{にく}じゃがですか。", en:"Is that one nikujaga too?"},
    {t:"line", who:"fumiko", ja:"いいえ、あれは[肉]{にく}じゃがじゃありません。おでんです。", en:"No, that isn't nikujaga. It's oden.", gl:"おでん: things simmered in a light broth, such as radish, egg and fish cakes."},
    {t:"line", who:"rodrigo", ja:"おいしいですか。", en:"Is it good?"},
    {t:"line", who:"fumiko", ja:"はい。とてもおいしいです。", en:"Yes. Very good."},
    {t:"note", text:"Mrs Satō has never once asked a new resident whether they like oden. She has also never once been wrong."},
    {t:"narr", text:"The others drift in one by one, with names the house will learn over the coming weeks. For now, at the end of the table, the first two are still talking."},
    {t:"line", who:"rodrigo", ja:"チェスカさん、[料理]{りょうり}をしますか。", en:"Cheska, do you cook?"},
    {t:"line", who:"cheska", ja:"いいえ、しません。", en:"No, I don't."},
    {t:"narr", text:"She does not explain. She will be doing a great deal of washing up this year."},
    {t:"line", who:"rodrigo", ja:"じゃあ、いっしょに[食]{た}べましょう。", en:"Well then, let's eat together.", gl:"いっしょに: together."},
    {t:"line", who:"fumiko", ja:"いただきます。", en:"(Said before eating.)", gl:"いただきます: said before a meal; it thanks everyone and everything that went into the food."},
    {t:"lang", items:["これ・それ・あれ: Rodrigo points at the bowl near him (これ), Mrs Satō answers about the one near him (それ), and Cheska asks about the one across the table (あれ).", "～ましょう: いっしょに[食]{た}べましょう (*let's eat together*) invites someone to do something with you."]},
    {t:"reflect", q:"Think of the first meal you shared with people you didn't know. What did you talk about, and what did you point at?"}
  ]}
  ]
};
