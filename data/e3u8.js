/* Japanese Foundations · Unit 8 (e3u8) · N4 kanji and reading */

ICA.addUnit({
  id:"e3u8", track:"e3", n:8, title:"N4 kanji and reading", icon:"📖",
  blurb:"All 167 kanji on the N4 list used in this course and its Kanji Lab, grouped by meaning and by the parts they share, each with its main readings and everyday words. Then homophones and kanji with several readings, dictionary skills, and how to read N4 notices, emails, stories and instructions. It ends with the JLPT N4 sections and a study plan.",
  read:[
    {book:"irodori", where:"Elementary 1 (A2): Lessons 1–18", note:"A free course at about the level of this unit. Use its everyday topics (seasons, your town, studying Japanese, health, work) as extra reading and listening practice."},
    {book:"taekim", where:"Grammar Guide › The Writing System › “Kanji”"}
  ],
  goals:[
    "Use meaning parts and sound parts to learn, remember and look up new kanji",
    "Tell apart N4 look-alikes such as 待, 持 and 特",
    "Read and write the 167 N4 kanji with their meanings, main readings and common words",
    "Use verb pairs that share a kanji ([開]{あ}ける and [開]{あ}く) and する verbs made from kanji words",
    "Choose the right kanji for homophones and the right reading for kanji with several readings",
    "Look up any word or kanji by reading, handwriting or parts, and read a dictionary entry well",
    "Read N4 notices, emails, short stories and instructions with a clear strategy",
    "Describe the JLPT N4 sections and scoring, and plan daily review in the Kanji Lab"
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  
  {id:"e3u8-l1", title:"Kanji families: meaning parts, sound parts and people", minutes:55,
   hook:{q:"海 (sea), 洋 (ocean), 注 (pour) and 漢 (China, Han) all have 氵 on the left. 氵 is a narrow form of which N5 kanji?", options:["水 (water)","川 (river)","雨 (rain)","火 (fire)"], answer:0,
     reveal:"**水 (water).** On the left of a kanji, 水 shrinks to 氵, called さんずい, and it points to water and liquids: the sea, an ocean, pouring. Even 漢 began with water: it was the name of the Han River in China, which later gave its name to the Han dynasty. Parts like 氵 are your best tool for the 167 N4 kanji, and this lesson shows the most useful ones."},
   goals:[
     "Say what changes from N5 to N4 and how this unit groups the 167 N4 kanji",
     "Use meaning parts such as 亻, 氵 and 辶 to guess what a kanji is about",
     "Use sound parts such as 寺 and 主 to guess an on reading, and know when the guess fails",
     "Tell apart look-alikes, and read the N4 kanji for people, family and the body"
   ],
   learn:[
    {h:"From N5 to N4: 167 new kanji", body:[
      {lead:"You already know the 80 N5 kanji from Unit 4. Common JLPT N4 lists add about 170 more. The list used in this course and its Kanji Lab has exactly 167, so by the end of this unit you will have met about 250 kanji."},
      "What does N4 reading look like? The JLPT describes it like this: at N4 you can “read and understand passages on familiar daily topics written in basic vocabulary and kanji”. That means notices, short emails, simple stories and instructions, which is exactly where this unit ends, in Lesson 5.",
      "The new kanji are friendly. According to the kanji dictionary KANJIDIC, 150 of the 167 are taught in the first three years of Japanese primary school. Many of them write words you can already say: [私]{わたし} (I), [家]{いえ} (house), [駅]{えき} (station), [魚]{さかな} (fish), [映]{えい}[画]{が} (film). Learning the kanji for a word you already know is the easiest kind of kanji study.",
      {table:[["Lesson","Groups","Kanji"],["1","People and family; the body and health","22"],["2","Seasons and time; nature, colours and animals; the town and work","51"],["3","Actions: thinking and studying, moving, daily life","51"],["4","Describing words; things, food and ideas","43"]]},
      "Each group comes as a table: the kanji, its core meaning, its main readings and two or three common words. [[on-yomi|On readings]] are in katakana and [[kun-yomi|kun readings]] in hiragana, with the [[okurigana]] in brackets: はや(い) means the word is [早]{はや}い. ★ marks a special reading ([[jukujikun]]).",
      {tip:"[[furigana|Furigana]] in this unit: N4 kanji, and anything harder, always have furigana. N5 kanji have furigana the first time they appear in a lesson, and none after that, because you know them already."},
      {warn:"The JLPT has published no official kanji list since 2010, so every “N4 list” is an estimate, and lists differ by a few kanji ({{jlpt-overview}}). If another book puts one of these kanji at N3, don’t worry: you will need it either way."}
    ]},
    {h:"Meaning parts: what the side or the top tells you", body:[
      "Most kanji are built from [[kanji-component|parts]] you have seen before ({{how-kanji-work}}). One part often hints at what the kanji is about. This is its [[kanji-semantic-component|meaning part]], and very often it is also the kanji’s [[radical]], the part a dictionary files it under.",
      {table:[["Part","Name","Hint","N4 kanji with it"],["亻","にんべん","person","体 作 仕 代 住 使 借"],["氵","さんずい","water","海 注 洋 漢"],["言","ごんべん","words, speech","計 試 (and N5 語 話 読)"],["辶","しんにょう","moving, roads","近 通 道 週 送 運"],["宀","うかんむり","roof, house","家 室 安 字"],["艹","くさかんむり","plants","花 茶 英"],["女","おんなへん","woman","姉 妹 始"],["心","(on the bottom)","heart, feelings","思 急 意 悪"],["糸","いとへん","thread","紙 終"],["飠","しょくへん","food","飲 飯 館"],["日","(left, top or bottom)","sun, day","明 早 春 昼 曜 映"],["貝","(on the bottom)","shell, money","買 貸 質"],["馬","うまへん","horse","駅 験"],["疒","やまいだれ","illness","病"]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Three families of N4 kanji</text><rect class="d-panel" x="6" y="30" width="104" height="292" rx="8" stroke-width="1.5"/><rect class="d-panel" x="118" y="30" width="104" height="292" rx="8" stroke-width="1.5"/><rect class="d-panel" x="230" y="30" width="104" height="292" rx="8" stroke-width="1.5"/><rect class="d-lup" x="14" y="38" width="88" height="74" rx="6" stroke-width="1.5"/><rect class="d-lup" x="126" y="38" width="88" height="74" rx="6" stroke-width="1.5"/><rect class="d-lup" x="238" y="38" width="88" height="74" rx="6" stroke-width="1.5"/><text transform="translate(58 86) scale(2.4)" text-anchor="middle">亻</text><text transform="translate(170 86) scale(2.4)" text-anchor="middle">氵</text><text transform="translate(282 86) scale(2.4)" text-anchor="middle">辶</text><text class="s" x="58" y="106" text-anchor="middle">person</text><text class="s" x="170" y="106" text-anchor="middle">water</text><text class="s" x="282" y="106" text-anchor="middle">moving</text><text transform="translate(36 152) scale(1.6)" text-anchor="middle">体</text><text class="s" x="58" y="148">body</text><text transform="translate(36 202) scale(1.6)" text-anchor="middle">作</text><text class="s" x="58" y="198">make</text><text transform="translate(36 252) scale(1.6)" text-anchor="middle">住</text><text class="s" x="58" y="248">live</text><text transform="translate(36 302) scale(1.6)" text-anchor="middle">使</text><text class="s" x="58" y="298">use</text><text transform="translate(148 152) scale(1.6)" text-anchor="middle">海</text><text class="s" x="170" y="148">sea</text><text transform="translate(148 202) scale(1.6)" text-anchor="middle">注</text><text class="s" x="170" y="198">pour</text><text transform="translate(148 252) scale(1.6)" text-anchor="middle">洋</text><text class="s" x="170" y="248">ocean</text><text transform="translate(148 302) scale(1.6)" text-anchor="middle">漢</text><text class="s" x="170" y="298">Han</text><text transform="translate(260 152) scale(1.6)" text-anchor="middle">近</text><text class="s" x="282" y="148">near</text><text transform="translate(260 202) scale(1.6)" text-anchor="middle">通</text><text class="s" x="282" y="198">pass</text><text transform="translate(260 252) scale(1.6)" text-anchor="middle">送</text><text class="s" x="282" y="248">send</text><text transform="translate(260 302) scale(1.6)" text-anchor="middle">運</text><text class="s" x="282" y="298">carry</text></svg>', alt:"Three columns. Person 亻: 体 body, 作 make, 住 live, 使 use. Water 氵: 海 sea, 注 pour, 洋 ocean, 漢 Han. Moving 辶: 近 near, 通 pass, 送 send, 運 carry.", cap:"The part is a hint, not the meaning: 近 (near) is about distance, and 漢 began as the name of a river."},
      "Use the meaning part as a memory hook, not as a definition. 待 (wait) has 彳, a part linked to going and roads; 持 (hold) has 扌, the hand; 特 (special) has 牛, the cow. The parts don’t explain what 特 means, but they stop you mixing up three kanji that share the same right side, 寺.",
      "Some hints come from history. 英 (English) has 艹 (plants) because in old Chinese it meant a flower or blossom, and later something outstanding, as in [英]{えい}[雄]{ゆう} (hero). It came to mean “English” because it is short for [英吉利]{イギリス}, an old way of writing イギリス (Britain, England) in kanji.",
      {warn:"The part that catches your eye is not always the radical. 問 (question) sits inside the gate 門, but dictionaries file it under 口 (mouth). 字 (character) has 宀 on top, but it is filed under 子 (child). If a radical search fails, try another part, or search by reading or handwriting (Lesson 5)."}
    ]},
    {h:"Sound parts: kanji that rhyme", body:[
      "The other big helper is the [[phonetic-component|sound part]]: a part that hints at the on reading. Many N4 kanji are a kanji you know plus a meaning part on the left.",
      {table:[["Sound part","Kanji with it","Their on readings"],["寺 (ジ)","時 (N5), 持, 待, 特","ジ, ジ, タイ, トク"],["主 (シュ)","住, 注","ジュウ, チュウ"],["未 (ミ)","味, 妹","ミ, マイ"],["反 (ハン)","飯","ハン"],["官 (カン)","館","カン"],["化 (カ)","花","カ"],["代 (ダイ, タイ)","貸","タイ"],["門 (モン)","問","モン"],["央 (オウ)","英, 映","エイ, エイ"]]},
      {list:["**Sometimes the match is exact.** 飯, 館, 花, 問 and 貸 are read like their sound part. Knowing 反 (ハン) gives you [夕]{ゆう}[飯]{はん} for free.","**Sometimes it is close.** 主 is シュ, while 住 is ジュウ and 注 is チュウ. 未 is ミ: 味 matches, but 妹 is マイ.","**Sometimes it has drifted away.** 待 (タイ) and 特 (トク) share 寺 with 時 and 持 (ジ). Chinese and Japanese pronunciation changed over many centuries, so old sound links don’t always survive.","**A family can match itself better than its base.** 英 and 映 are both エイ, although 央 itself is オウ."]},
      {key:"A sound part gives you a good first guess at an on reading. Check the guess in a real word, and learn the word."}
    ]},
    {h:"Look-alikes to keep apart", body:[
      "Similar kanji cause more mistakes than difficult ones. These N4 pairs and trios are worth practising side by side.",
      {table:[["Kanji","How to tell them apart"],["待 · 持 · 特","彳 (going) in 待 wait; 扌 (hand) in 持 hold; 牛 (cow) in 特 special"],["体 · 休","Both have 亻. 体 (body) has 本 on the right, with a short line near the bottom; 休 (rest, N5) has 木"],["牛 · 午","In 牛 (cow) the vertical stroke sticks out at the top; in 午 (noon, N5) it doesn’t"],["犬 · 大","犬 (dog) has a dot at the top right; 大 (big) has none"],["夕 · 多","多 (many) is two 夕 (evening) stacked"],["目 · 自","自 (self) is 目 (eye) with a short stroke on top"],["字 · 学","字 (character) has the roof 宀 over 子; 学 (study, N5) has three short strokes and a cover over 子"],["問 · 間 · 開 · 聞","門 with 口 (問 question), 日 (間 interval), 开 (開 open) or 耳 (聞 hear)"],["貸 · 借","貸 (lend) has 貝, shell money, at the bottom; 借 (borrow) has 亻 on the left"]]},
      {tip:"For each pair, write both kanji three times, side by side, and say a word for each: まつ for 待, もつ for 持. Your hand learns the difference faster than your eyes."}
    ]},
    {h:"People and family", body:[
      "The first group of N4 kanji covers people. The main readings in the table are the ones in common words; dictionaries list more.",
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["私", "I, me; private", "On シ · Kun わたし", "[私]{わたし} I, me · [私]{わたくし} I (formal) · [私]{し}[立]{りつ} private (school, university)"], ["自", "self", "On ジ, シ · Kun みずか(ら)", "[自]{じ}[分]{ぶん} oneself · [自]{じ}[転]{てん}[車]{しゃ} bicycle · [自]{じ}[動]{どう} automatic"], ["者", "person (in words)", "On シャ · Kun もの", "[医]{い}[者]{しゃ} doctor · [学]{がく}[者]{しゃ} scholar · [研]{けん}[究]{きゅう}[者]{しゃ} researcher"], ["員", "member, staff", "On イン", "[会]{かい}[社]{しゃ}[員]{いん} company employee · [店]{てん}[員]{いん} shop assistant · [駅]{えき}[員]{いん} station staff"], ["主", "main; master, owner", "On シュ · Kun おも, ぬし", "[主]{おも}に mainly · ご[主]{しゅ}[人]{じん} (your, her) husband · [主]{しゅ}人[公]{こう} main character"], ["兄", "older brother", "On キョウ, ケイ · Kun あに", "[兄]{あに} my older brother · お[兄]{にい}さん (someone’s) older brother · [兄]{きょう}[弟]{だい} brothers and sisters"], ["弟", "younger brother", "On ダイ, デ, テイ · Kun おとうと", "[弟]{おとうと} my younger brother · [弟]{おとうと}さん (someone’s) younger brother · [弟]{で}[子]{し} pupil, apprentice"], ["姉", "older sister", "On シ · Kun あね", "[姉]{あね} my older sister · お[姉]{ねえ}さん (someone’s) older sister · [姉]{し}[妹]{まい} sisters"], ["妹", "younger sister", "On マイ · Kun いもうと", "[妹]{いもうと} my younger sister · [妹]{いもうと}さん (someone’s) younger sister · [姉]{し}[妹]{まい} sisters"], ["親", "parent; close, intimate", "On シン · Kun おや, した(しい)", "[両]{りょう}[親]{しん} parents · [親]{しん}[切]{せつ} kind · [親]{した}しい close (friend)"], ["族", "family, group", "On ゾク", "[家]{か}[族]{ぞく} family · [水]{すい}[族]{ぞく}[館]{かん} aquarium"], ["家", "house, home; family; -ist", "On カ, ケ · Kun いえ, うち, や", "[家]{いえ} house · [家]{か}[族]{ぞく} family · [作]{さっ}[家]{か} writer · [大]{おお}[家]{や} landlord"]]},
      "Family words come in two sets ([[uchi-soto]]). For your own family you use the plain words: [兄]{あに}, [姉]{あね}, [弟]{おとうと}, [妹]{いもうと}. For someone else’s family you use お[兄]{にい}さん and お[姉]{ねえ}さん, and add さん to the younger ones: [弟]{おとうと}さん, [妹]{いもうと}さん. You met [父]{ちち} and お父さん the same way in Unit 4.",
      "Two kanji turn other words into people. 〜員 is a member of staff: [会]{かい}[社]{しゃ}[員]{いん}, [店]{てん}[員]{いん}, [駅]{えき}[員]{いん}. 〜者 is a person who does something: [医]{い}[者]{しゃ}, [研]{けん}[究]{きゅう}[者]{しゃ}. 家 can also mean a professional: [作]{さっ}[家]{か} (writer) and [画]{が}[家]{か} (painter).",
      "私 has two readings for “I”: わたし for everyday use, and わたくし for very formal speech, such as a speech or formal business. It is the same kanji and the same word."
    ]},
    {h:"The body and health", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["体", "body", "On タイ · Kun からだ", "[体]{からだ} body · [体]{たい}[重]{じゅう} body weight · [大]{だい}[体]{たい} roughly, mostly"], ["心", "heart, mind", "On シン · Kun こころ", "[心]{こころ} heart, mind · [安]{あん}[心]{しん} relief, peace of mind · [心]{しん}[配]{ぱい} worry"], ["手", "hand", "On シュ · Kun て", "[手]{て} hand · [手]{て}[紙]{がみ} letter · [歌]{か}[手]{しゅ} singer"], ["足", "foot, leg; be enough", "On ソク · Kun あし, た(りる), た(す)", "[足]{あし} foot, leg · [足]{た}りる be enough · [不]{ふ}[足]{そく} shortage"], ["口", "mouth; opening", "On コウ, ク · Kun くち", "[口]{くち} mouth · [入]{いり}[口]{ぐち} entrance · 人[口]{こう} population"], ["目", "eye; -th (in order)", "On モク · Kun め", "[目]{め} eye · [二]{ふた}つ[目]{め} the second one · [目]{もく}[的]{てき} purpose"], ["力", "power, strength", "On リョク, リキ · Kun ちから", "[力]{ちから} strength · [体]{たい}[力]{りょく} physical strength · [努]{ど}[力]{りょく} effort"], ["医", "medicine, doctor", "On イ", "[医]{い}[者]{しゃ} doctor · [医]{い}学 medicine (the subject) · [歯]{は}[医]{い}[者]{しゃ} dentist"], ["病", "illness", "On ビョウ · Kun やまい", "[病]{びょう}[気]{き} illness · [病]{びょう}[院]{いん} hospital · [病]{びょう}[人]{にん} sick person"], ["死", "death, die", "On シ · Kun し(ぬ)", "[死]{し}ぬ die · [死]{し} death · [必]{ひっ}[死]{し} desperate, all-out"]]},
      "目 also counts things in order: [一]{ひと}つ[目]{め} is the first one, 二つ[目]{め} the second. And 力 (power) appears in kanji about effort and moving: 動 (move) and 勉 (effort) both have 力 on the right, and 男 (man) at N5 has it at the bottom.",
      {warn:"[病]{びょう}[院]{いん} (hospital) and [美]{び}[容]{よう}[院]{いん} (hair salon) sound alike, and mixing them up is a classic mistake. びょういん has a small ょ: びょ・う・い・ん, four [[mora|morae]]. びよういん has a full-size よ: び・よ・う・い・ん, five morae. If someone with a new haircut says びよういんに[行]{い}きました, they went to the hairdresser."},
      "Read this short text about a family. It uses many of the kanji in this lesson.",
      {ex:"[私]{わたし}の[家]{か}[族]{ぞく}は[五]{ご}人です。父と[母]{はは}と[兄]{あに}と[妹]{いもうと}がいます。[兄]{あに}は[医]{い}[者]{しゃ}で、[駅]{えき}の[近]{ちか}くの[病]{びょう}[院]{いん}で[働]{はたら}いています。[妹]{いもうと}は[高]{こう}[校]{こう}[生]{せい}です。[体]{からだ}が[強]{つよ}くて、[毎]{まい}[朝]{あさ}[走]{はし}っています。[私]{わたし}は[会]{かい}[社]{しゃ}[員]{いん}です。","label":"Rui’s family"},
      {list:["**How many people are in Rui’s family?** 五人: five (his father, mother, older brother, younger sister and Rui).","**What does his brother do?** He is a [医]{い}[者]{しゃ} and works at a hospital near the station.","**Who runs every morning?** His younger sister, the 高校生 (high-school student): [体]{からだ}が[強]{つよ}い means she is strong and healthy."]},
      {lab:"kl-n4", t:"Practise: start the N4 kanji deck (10 new kanji a day is plenty)"}
    ]}
   ],
   try:[
    {id:"e3u8-l1-x1", type:"match", q:"Match each meaning part to the hint it usually gives.", pairs:[
      ["氵 (さんずい)","water","氵 is the narrow form of 水. It appears in 海 (sea), 洋 (ocean) and 注 (pour)."],
      ["亻 (にんべん)","person","亻 is the narrow form of 人. It appears in 体 (body), 住 (live) and 使 (use)."],
      ["辶 (しんにょう)","moving, roads","辶 runs along the bottom left of 近 (near), 通 (pass), 送 (send) and 運 (carry)."],
      ["宀 (うかんむり)","roof, house","宀 is a roof on top: 家 (house), 室 (room), 安 (calm, cheap)."],
      ["糸 (いとへん)","thread","糸 is a thread or fibre: 紙 (paper) and 終 (end)."],
      ["貝","shell, money","Shells were once used as money, so 貝 appears in money kanji: 買 (buy), 貸 (lend)."]
    ]},
    {id:"e3u8-l1-x2", type:"sort", q:"Sort these N4 kanji by the meaning part they share.", buckets:["亻 person","氵 water","辶 moving"], items:[
      {t:"住 (live)", b:0, why:"住 is 亻 + 主: a person living somewhere."},
      {t:"使 (use)", b:0, why:"使 has 亻 on the left."},
      {t:"代 (generation; replace)", b:0, why:"代 has 亻 on the left. The meaning part is a hint, not a definition."},
      {t:"海 (sea)", b:1, why:"海 is 氵 + 毎: water."},
      {t:"注 (pour)", b:1, why:"注 is 氵 + 主: pouring liquid."},
      {t:"漢 (Han)", b:1, why:"漢 has 氵 because it began as the name of a river."},
      {t:"送 (send)", b:2, why:"送 has 辶 along the bottom: sending something on its way."},
      {t:"週 (week)", b:2, why:"週 has 辶 too. It first meant going round, and a week is one round of days: the link to moving is old, which is why parts are hints, not rules."}
    ]},
    {id:"e3u8-l1-x3", type:"mcq", q:"英 and 映 share the sound part 央. 英 is read えい in [英]{えい}[語]{ご} (English). How is 映 read in 映画 (film)?", options:[
      {t:"えい: えいが", ok:true, why:"Right. 英 and 映 are both エイ. Here the sound part works, even though 央 on its own is read オウ."},
      {t:"おう: おうが", why:"おう is the reading of 央 itself. The family members 英 and 映 kept a different sound, エイ, which is why you check a guess in a real word."},
      {t:"うつ: うつが", why:"うつ is a kun reading of 映, as in [映]{うつ}る (be reflected). In a two-kanji word like [映]{えい}[画]{が}, the on reading is far more likely."},
      {t:"あお: あおが", why:"あお is the kun reading of 青 (blue). It has nothing to do with 映."}
    ]},
    {id:"e3u8-l1-x4", type:"spot", q:"These three look alike. Tap the kanji that means “wait”.", ask:"means wait", parts:[
      {t:"持", flag:false, why:"持 (hold, もつ) has 扌, the hand: you hold things in your hand."},
      " ",
      {t:"待", flag:true, why:"Right. 待 (wait, まつ) has 彳, a part linked to going and roads: waiting by the road."},
      " ",
      {t:"特", flag:false, why:"特 (special, とく) has 牛, the cow, on the left."},
      " ",
      {t:"時", flag:false, why:"時 (time) is the N5 kanji in this family: 日 + 寺."}
    ]},
    {id:"e3u8-l1-x5", type:"mcq", q:"Mei is writing about her own family: 「＿は高校生です。」 She means her younger sister. Which word fits?", options:[
      {t:"妹 (いもうと)", ok:true, why:"Right. 妹 is “my younger sister”. For your own family you use the plain word, without さん."},
      {t:"姉 (あね)", why:"姉 is an older sister. 姉 and 妹 both have 女; learn them as a pair."},
      {t:"弟 (おとうと)", why:"弟 is a younger brother."},
      {t:"[妹]{いもうと}さん (いもうとさん)", why:"[妹]{いもうと}さん is someone else’s younger sister. About your own family, you don’t add さん."}
    ]},
    {id:"e3u8-l1-x6", type:"match", q:"Match each word to its reading. (No furigana here: that is the point.)", pairs:[
      ["家族","かぞく","家 is カ here (on reading) and 族 is ゾク."],
      ["兄弟","きょうだい","兄 is キョウ and 弟 is ダイ: brothers and sisters, siblings."],
      ["医者","いしゃ","医 (medicine) + 者 (person): a doctor."],
      ["病気","びょうき","病 (illness) + 気: being ill."],
      ["自分","じぶん","自 (self) + 分: oneself."]
    ]},
    {id:"e3u8-l1-x7", type:"mcq", q:"A friend with a new haircut says: 「きのう、びよういんに行きました。」 Where did she go?", options:[
      {t:"To a hair salon ([美]{び}[容]{よう}[院]{いん})", ok:true, why:"Right. びよういん has a full-size よ: five morae, び・よ・う・い・ん. That is [美]{び}[容]{よう}[院]{いん}, a hair or beauty salon."},
      {t:"To a hospital ([病]{びょう}[院]{いん})", why:"A hospital is びょういん, with a small ょ: four morae. The haircut is your clue too."},
      {t:"To a library ([図]{と}[書]{しょ}[館]{かん})", why:"A library is [図]{と}書[館]{かん}. It sounds quite different."},
      {t:"To a beauty-products shop (〜屋)", why:"Shops are often 〜屋 or 〜店. 〜院 is an institution, such as a hospital or a salon."}
    ]},
    {id:"e3u8-l1-x8", type:"number", q:"How many strokes does 親 (parent) have? It is 立 (top left), 木 (bottom left) and 見 (right).", answer:16, tol:0, unit:"strokes", why:"立 has 5 strokes, 木 has 4 and 見 has 7 (目 is 5, and the two legs 儿 are 2). 5 + 4 + 7 = 16.", wrongs:[
      {v:17, tol:0, why:"You probably counted the box in 目 as 4 strokes. The top and right side of a box are one stroke, so 目 is 5 and 見 is 7."},
      {v:15, tol:0, why:"Check 立: it has 5 strokes (a dot, a horizontal, two short strokes and the long bottom line)."}
    ], hint2:"Count 立 (5) and 木 (4), then 見: 目 (5) plus two legs (2)."}
   ],
   apply:{
    intro:"Short tasks with paper, a pen and a dictionary. Keep your notes for yourself.",
    tasks:[
     {t:"Find the parts in ten kanji", how:[
       "Choose ten kanji from this lesson’s tables.",
       "For each one, circle the part you think is the meaning part, and write its hint (person, water, moving…).",
       "Check the radical on Jisho.org: type the kanji, then “#kanji” (for example, “住 #kanji”). Note any surprises, like 問 under 口."
     ], write:"Kanji… my meaning part… Jisho’s radical… surprise?"},
     {t:"Write about a family", how:[
       "Write four sentences about your family, or about a family from a book or film: [兄]{あに}は…, [妹]{いもうと}は…",
       "Use at least four kanji from this lesson, with furigana where you’re unsure.",
       "Then write one question you could ask a friend about their family, using お[兄]{にい}さん, お[姉]{ねえ}さん, [弟]{おとうと}さん or [妹]{いもうと}さん."
     ], write:"Sentence 1… 2… 3… 4… My question…"},
     {t:"Start the N4 deck", how:[
       "Open the Kanji Lab and choose the N4 kanji deck. Keep the default of 10 new cards a day.",
       "Do one session today and one tomorrow. Choose Again whenever you didn’t really know a card."
     ], write:"Date I started… cards today… kanji I mixed up…"}
    ],
    proof:"Ten kanji with their meaning parts checked against a dictionary, four sentences about a family, and your first two N4 sessions in the Kanji Lab."},
   read:[
    {book:"taekim", where:"Grammar Guide › The Writing System › “Kanji” (section “Learning Kanji”)"},
    {book:"irodori", where:"Elementary 1, Lesson 15 “I have a fever, and my throat is sore.” and Lesson 17 “This is a personal amulet my older brother gave me.”", note:"Health and family topics, with many of this lesson’s words."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  
  {id:"e3u8-l2", title:"Kanji for time, nature and the town", minutes:55,
   hook:{q:"今朝 means “this morning”: 今 (now) + 朝 (morning). How is it usually read?", options:["けさ","こんちょう","いまあさ","こんあさ"], answer:0,
     reveal:"**けさ.** [今朝]{けさ} has a special reading for the whole word, like [今日]{きょう} and [今年]{ことし}, which you met at N5. Time words are full of sets and a few specials like this, so this lesson teaches them together with the kanji for nature and for places in town."},
   goals:[
     "Read the N4 kanji for seasons, times of day, the calendar and eras",
     "Read the N4 kanji for nature, colours and animals",
     "Read the N4 kanji for places and buildings, and use endings such as 〜屋, 〜館 and 〜院 to guess what a place is",
     "Read a short invitation that uses these kanji"
   ],
   learn:[
    {h:"Seasons and times of day", body:[
      {lead:"Time kanji come in sets: four seasons, and the parts of the day from morning to night. Learn each set together."},
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["春", "spring", "On シュン · Kun はる", "[春]{はる} spring · [春]{はる}[休]{やす}み spring break · [青]{せい}[春]{しゅん} youth"], ["夏", "summer", "On カ · Kun なつ", "[夏]{なつ} summer · [夏]{なつ}休み summer holidays · [真]{ま}[夏]{なつ} midsummer"], ["秋", "autumn", "On シュウ · Kun あき", "[秋]{あき} autumn · [秋]{しゅう}[分]{ぶん}の[日]{ひ} Autumn Equinox Day (a holiday)"], ["冬", "winter", "On トウ · Kun ふゆ", "[冬]{ふゆ} winter · [冬]{ふゆ}休み winter holidays · [冬]{とう}[眠]{みん} hibernation"], ["朝", "morning", "On チョウ · Kun あさ", "[朝]{あさ}ご[飯]{はん} breakfast · ★[今朝]{けさ} this morning · [朝]{ちょう}[食]{しょく} breakfast (formal)"], ["昼", "noon, daytime", "On チュウ · Kun ひる", "[昼]{ひる} noon, daytime · [昼]{ひる}休み lunch break · [昼]{ちゅう}食 lunch (formal)"], ["夕", "evening", "Kun ゆう", "[夕]{ゆう}[方]{がた} early evening · [夕]{ゆう}[飯]{はん} dinner · ★[七夕]{たなばた} the Star Festival"], ["夜", "night", "On ヤ · Kun よる, よ", "[夜]{よる} night · [今]{こん}[夜]{や} tonight · [夜]{よ}[中]{なか} the middle of the night"]]},
      "The seasons and the times of day pair up with useful words. 休み (break) gives [春]{はる}休み, [夏]{なつ}休み and [冬]{ふゆ}休み. ご[飯]{はん} (meal) gives [朝]{あさ}ご[飯]{はん} (breakfast) and [昼]{ひる}ご[飯]{はん} (lunch). For the evening meal people say [晩]{ばん}ご[飯]{はん} or [夕]{ゆう}[飯]{はん}. In notices and menus you will also see the formal words [朝]{ちょう}食 and [昼]{ちゅう}食.",
      "夜 is よる on its own, but よ in [夜]{よ}中 (the middle of the night) and ヤ in 今[夜]{や} (tonight). That pattern is normal: one kanji, a few readings, and the word tells you which.",
      {tip:"★ marks special readings: [今朝]{けさ} is read as a whole word, and so is [七夕]{たなばた}, the Star Festival held in July (or August in some places). Learn them as words."}
    ]},
    {h:"The calendar, eras and the world", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["曜", "day of the week", "On ヨウ", "[曜]{よう}[日]{び} day of the week · [日]{にち}[曜]{よう}[日]{び} Sunday · [何]{なん}[曜]{よう}[日]{び} what day of the week"], ["週", "week", "On シュウ", "今[週]{しゅう} this week · [毎]{まい}[週]{しゅう} every week · [週]{しゅう}[末]{まつ} weekend"], ["早", "early; fast", "On ソウ, サッ · Kun はや(い)", "[早]{はや}い early · [早]{はや}く early, quickly · [早]{さっ}[速]{そく} straight away"], ["世", "world; generation", "On セ, セイ · Kun よ", "[世]{せ}[界]{かい} the world · [世]{せ}[話]{わ} care, help · [世]{よ}の中 society, the world"], ["界", "world; boundary", "On カイ", "[世]{せ}[界]{かい} the world · [世]{せ}[界]{かい}[中]{じゅう} all over the world"], ["代", "generation, era; fee; replace", "On ダイ, タイ · Kun か(わる), か(わり)", "[時]{じ}[代]{だい} era, period · [二]{に}[十]{じゅう}[代]{だい} (one’s) twenties · [代]{か}わり substitute, instead"], ["元", "origin; former", "On ゲン, ガン · Kun もと", "[元]{げん}[気]{き} well, lively · [元]{がん}[日]{じつ} New Year’s Day · [元]{もと} former, origin"], ["去", "leave; past", "On キョ, コ · Kun さ(る)", "[去]{きょ}[年]{ねん} last year · [過]{か}[去]{こ} the past"]]},
      "曜 has 18 strokes, which makes it one of the longest kanji at this level. You have read it in every day of the week since Units 3 and 4: [月]{げつ}[曜]{よう}日, [火]{か}[曜]{よう}日… Calendars and notices often shorten the days to one kanji in brackets, such as (月) or (土).",
      "代 has three useful jobs. It means an era (時[代]{だい}) or an age group (二十[代]{だい}, one’s twenties). It means a charge for something, as in [電]{でん}気[代]{だい} (the electricity bill). And as a kun word it means a replacement: [代]{か}わりに means “instead”.",
      "世 and 界 together make [世]{せ}[界]{かい}, the world, and [世]{せ}[界]{かい}[中]{じゅう} is “all over the world”. 世 alone, read よ, appears in [世]{よ}の中, society or “the way the world is”."
    ]},
    {h:"Nature", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["空", "sky; empty", "On クウ · Kun そら, から, あ(く)", "[空]{そら} sky · [空]{くう}気 air · [空]{くう}[港]{こう} airport"], ["海", "sea", "On カイ · Kun うみ", "[海]{うみ} sea · [海]{かい}[外]{がい} abroad · [北]{ほっ}[海]{かい}[道]{どう} Hokkaido"], ["風", "wind; style", "On フウ, フ · Kun かぜ", "[風]{かぜ} wind · [台]{たい}[風]{ふう} typhoon · お[風]{ふ}[呂]{ろ} bath"], ["野", "field; wild", "On ヤ · Kun の", "[野]{や}[菜]{さい} vegetables · [野]{や}[球]{きゅう} baseball · [野]{の}[原]{はら} open field"], ["田", "rice field", "On デン · Kun た", "[田]{た}んぼ rice field · ★[田舎]{いなか} the countryside · [水]{すい}[田]{でん} paddy field"], ["地", "ground, earth; place", "On チ, ジ", "[地]{ち}[図]{ず} map · [地]{ち}[下]{か}[鉄]{てつ} underground railway · [地]{じ}[震]{しん} earthquake"], ["花", "flower", "On カ · Kun はな", "[花]{はな} flower · [花]{はな}[見]{み} cherry-blossom viewing · [花]{はな}[火]{び} fireworks"]]},
      "空 has two kun words that look the same in kanji: [空]{そら} (the sky) and [空]{から} (empty, as in an empty box). Lesson 4 shows how to tell them apart, along with the verbs [空]{あ}く and [空]{す}く.",
      "田 is very common in family names, such as [田]{た}中 (たなか) and [山]{やま}[田]{だ} (やまだ). In ordinary words it means a rice field: [田]{た}んぼ, and the special reading ★[田舎]{いなか} (the countryside).",
      {tip:"お[風]{ふ}[呂]{ろ} (bath) uses 風 (wind) for its sound ふ, together with a kanji above N3. Most people simply learn the whole word."}
    ]},
    {h:"Colours and animals", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["赤", "red", "On セキ · Kun あか, あか(い)", "[赤]{あか}い red · [赤]{あか}ちゃん baby · [赤]{せき}[道]{どう} the equator"], ["青", "blue; green", "On セイ · Kun あお, あお(い)", "[青]{あお}い blue · [青]{あお}[信]{しん}[号]{ごう} green (traffic) light · [青]{せい}年 young man"], ["黒", "black", "On コク · Kun くろ, くろ(い)", "[黒]{くろ}い black · [白]{しろ}[黒]{くろ} black and white · [黒]{こく}[板]{ばん} blackboard"], ["色", "colour", "On ショク, シキ · Kun いろ", "[色]{いろ} colour · [茶]{ちゃ}[色]{いろ} brown · ★[景色]{けしき} scenery, view"], ["犬", "dog", "On ケン · Kun いぬ", "[犬]{いぬ} dog · [子]{こ}[犬]{いぬ} puppy · [愛]{あい}[犬]{けん} pet dog"], ["牛", "cow, cattle", "On ギュウ · Kun うし", "[牛]{うし} cow · [牛]{ぎゅう}[肉]{にく} beef · [牛]{ぎゅう}[乳]{にゅう} milk"], ["鳥", "bird", "On チョウ · Kun とり", "[鳥]{とり} bird · [小]{こ}[鳥]{とり} small bird · [焼]{や}き[鳥]{とり} grilled chicken skewers"], ["魚", "fish", "On ギョ · Kun さかな, うお", "[魚]{さかな} fish · [金]{きん}[魚]{ぎょ} goldfish · [魚]{さかな}[屋]{や} fish shop"]]},
      "The colour kanji are nouns, and 赤, 青 and 黒 add い to become い-adjectives, like 白 (white) at N5: [赤]{あか}い[花]{はな} (a red flower), [黒]{くろ}い[犬]{いぬ} (a black dog). [茶]{ちゃ}[色]{いろ} (brown) usually joins a noun with の: [茶]{ちゃ}[色]{いろ}のかばん.",
      "青 covers blue and also some greens. The “go” light at a crossing is called [青]{あお}[信]{しん}[号]{ごう}, and leafy green vegetables are [青]{あお}[菜]{な}. When you need a clear green, Japanese has the word [緑]{みどり}.",
      "Animal kanji often show up inside food words: 牛 in [牛]{ぎゅう}[肉]{にく} (beef) and [牛]{ぎゅう}[乳]{にゅう} (milk), 鳥 in [焼]{や}き[鳥]{とり}. Two-kanji words like [牛]{ぎゅう}[肉]{にく} usually take the on reading (ギュウ), while the animal on its own takes the kun reading: [牛]{うし} (a cow). Words with kana or a kun partner keep the kun reading, as in [焼]{や}き[鳥]{とり} and [子]{こ}[犬]{いぬ}."
    ]},
    {h:"Places in town", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["町", "town", "On チョウ · Kun まち", "[町]{まち} town · [下]{した}[町]{まち} old downtown area · [町]{ちょう}[長]{ちょう} town mayor"], ["京", "capital", "On キョウ, ケイ", "[東]{とう}[京]{きょう} Tokyo · [上]{じょう}[京]{きょう} moving to Tokyo"], ["駅", "station", "On エキ", "[駅]{えき} station · [駅]{えき}[前]{まえ} in front of the station · [駅]{えき}[員]{いん} station staff"], ["道", "road; way", "On ドウ · Kun みち", "[道]{みち} road, way · 水[道]{どう} water supply · [歩]{ほ}[道]{どう} pavement, sidewalk"], ["店", "shop", "On テン · Kun みせ", "[店]{みせ} shop · [店]{てん}[員]{いん} shop assistant · [喫]{きっ}[茶]{さ}[店]{てん} café"], ["屋", "shop; roof", "On オク · Kun や", "[本]{ほん}[屋]{や} bookshop · ★[部屋]{へや} room · [屋]{おく}上 rooftop"], ["場", "place", "On ジョウ · Kun ば", "[場]{ば}[所]{しょ} place · [会]{かい}[場]{じょう} venue · [駐]{ちゅう}[車]{しゃ}[場]{じょう} car park"], ["図", "drawing, plan", "On ズ, ト", "[地]{ち}[図]{ず} map · [図]{と}[書]{しょ}[館]{かん} library · [図]{ず} figure, diagram"], ["台", "stand; counter for machines", "On ダイ, タイ", "[台]{だい}[所]{どころ} kitchen · [台]{たい}[風]{ふう} typhoon · [一]{いち}[台]{だい} one (car, machine)"], ["銀", "silver", "On ギン", "[銀]{ぎん}[行]{こう} bank · [銀]{ぎん} silver · [銀]{ぎん}[色]{いろ} silver (colour)"]]},
      "駅 combines with N5 kanji you know: [駅]{えき}前 (in front of the station), [北]{きた}[口]{ぐち} (north exit), [駅]{えき}[員]{いん} (station staff). 道 is a road or a way, and 北[海]{かい}[道]{どう} shows its on reading ドウ.",
      "屋 and 店 both mean “shop”. 〜屋 joins everyday words for small shops: 本[屋]{や} (bookshop), [花]{はな}[屋]{や} (florist), パン[屋]{や} (bakery). With さん it can also mean the person who runs the shop: 本[屋]{や}さん. 〜店 is a little more formal and appears in on-reading words: 書[店]{てん} (bookshop), [喫]{きっ}[茶]{さ}[店]{てん} (café)."
    ]},
    {h:"Buildings and work", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["室", "room", "On シツ", "[教]{きょう}[室]{しつ} classroom · [和]{わ}[室]{しつ} Japanese-style room · [会]{かい}[議]{ぎ}[室]{しつ} meeting room"], ["館", "large building, hall", "On カン", "[図]{と}書[館]{かん} library · [映]{えい}[画]{が}[館]{かん} cinema · [旅]{りょ}[館]{かん} Japanese-style inn"], ["院", "institution", "On イン", "[病]{びょう}[院]{いん} hospital · [大]{だい}[学]{がく}[院]{いん} graduate school · [入]{にゅう}[院]{いん} going into hospital"], ["堂", "hall", "On ドウ", "食[堂]{どう} canteen, dining hall · [講]{こう}[堂]{どう} auditorium"], ["社", "company; shrine", "On シャ", "[会]{かい}[社]{しゃ} company · [社]{しゃ}[会]{かい} society · [神]{じん}[社]{じゃ} shrine"], ["会", "meet; meeting", "On カイ · Kun あ(う)", "[会]{あ}う meet · [会]{かい}[議]{ぎ} meeting · [会]{かい}話 conversation"], ["公", "public", "On コウ", "[公]{こう}[園]{えん} park · [公]{こう}[立]{りつ} public (school etc.)"], ["工", "craft, construction", "On コウ, ク", "[工]{こう}[場]{じょう} factory · [工]{こう}[事]{じ} construction work · 大[工]{く} carpenter"], ["仕", "serve; do", "On シ · Kun つか(える)", "[仕]{し}[事]{ごと} work, job · [仕]{し}[方]{かた} way, method · [仕]{し}[方]{かた}がない it can’t be helped"], ["業", "business, industry; studies", "On ギョウ", "[授]{じゅ}[業]{ぎょう} class, lesson · [卒]{そつ}[業]{ぎょう} graduation · [工]{こう}[業]{ぎょう} industry"]]},
      "The last kanji of a place word often tells you what kind of place it is. That is a strong clue when you meet a new word on a sign.",
      {table:[["Ending","Kind of place","Examples"],["〜屋 / 〜店","a shop, café or restaurant","本[屋]{や}, [魚]{さかな}[屋]{や}, [喫]{きっ}[茶]{さ}[店]{てん}"],["〜館","a large building for the public","[図]{と}書[館]{かん}, [映]{えい}[画]{が}[館]{かん}, [旅]{りょ}[館]{かん}, [大]{たい}[使]{し}[館]{かん}"],["〜院","an institution, often medical","[病]{びょう}[院]{いん}, [美]{び}[容]{よう}[院]{いん}, 大学[院]{いん}"],["〜場","a place or area for an activity","[会]{かい}[場]{じょう}, [駐]{ちゅう}車[場]{じょう}, [売]{う}り[場]{ば}"],["〜室","a room","[教]{きょう}[室]{しつ}, [会]{かい}[議]{ぎ}[室]{しつ}, [研]{けん}[究]{きゅう}[室]{しつ}"],["〜堂","a hall","食[堂]{どう}, [講]{こう}[堂]{どう}"]]},
      "Two of these kanji make a famous pair: [会]{かい}[社]{しゃ} is a company, and [社]{しゃ}[会]{かい}, with the same kanji the other way round, is society. In kanji words the order matters, just as “house boat” and “boat house” are different things in English.",
      "仕 and 業 are about work. [仕]{し}[事]{ごと} is work or a job; [授]{じゅ}[業]{ぎょう} is a class at school; [卒]{そつ}[業]{ぎょう} is graduating. [仕]{し}[方]{かた}がない (it can’t be helped) is an everyday phrase you will hear often."
    ]},
    {h:"Read it: a weekend invitation", body:[
      "Min sends this message to Sara. Read it once for the main idea, then again for the details.",
      {ex:"サラさん\n今[週]{しゅう}の[土]{ど}[曜]{よう}日、[天]{てん}気がよかったら、[海]{うみ}の[近]{ちか}くの水[族]{ぞく}[館]{かん}に行きませんか。水[族]{ぞく}[館]{かん}は[午]{ご}前[九]{く}時から午[後]{ご}[五]{ご}時[半]{はん}までです。\n[朝]{あさ}十時に[駅]{えき}の北[口]{ぐち}で[会]{あ}いましょう。[昼]{ひる}ご[飯]{はん}は、[駅]{えき}前の[魚]{さかな}[料]{りょう}[理]{り}の[店]{みせ}で食べたいです。[夜]{よる}は[雨]{あめ}が[降]{ふ}るそうなので、[夕]{ゆう}[方]{がた}には[帰]{かえ}りましょう。\nミン", label:"Min’s message"},
      {list:["**What is Min suggesting?** A trip to the aquarium (水[族]{ぞく}[館]{かん}) near the sea this Saturday, if the weather is good: 〜たら is “if”, and 〜ませんか is an invitation.","**When and where do they meet?** At 10 a.m. at the station’s north exit (北[口]{ぐち}).","**Lunch?** At a fish restaurant in front of the station ([駅]{えき}前).","**Why come back by early evening?** 〜そうなので: “because they say” it will rain at night."]},
      "Notice how the kanji carried the meaning: the times (土[曜]{よう}日, 九時, 十時, [夕]{ゆう}[方]{がた}), the places ([海]{うみ}, 水[族]{ぞく}[館]{かん}, 北[口]{ぐち}, [駅]{えき}前, [店]{みせ}) and the food ([魚]{さかな}[料]{りょう}[理]{り}) all stand out from the hiragana grammar.",
      {lab:"kl-n4", t:"Practise: today’s N4 kanji review"}
    ]}
   ],
   try:[
    {id:"e3u8-l2-x1", type:"match", q:"Match each word to its reading. (No furigana: that is the practice.)", pairs:[
      ["夕方","ゆうがた","夕 is ゆう, and 方 (かた) voices to がた in this word."],
      ["今夜","こんや","今 is コン and 夜 is ヤ: tonight."],
      ["世界","せかい","世 is セ and 界 is カイ: the world."],
      ["時代","じだい","時 is ジ and 代 is ダイ: an era."],
      ["曜日","ようび","曜 is ヨウ, and 日 (ひ) voices to び: day of the week."]
    ]},
    {id:"e3u8-l2-x2", type:"mcq", q:"Which of these words has a special reading for the whole word (it can’t be built from the readings of its kanji)?", options:[
      {t:"今朝 (けさ)", ok:true, why:"Right. Neither け nor さ is a reading of 今 or 朝 on its own: けさ belongs to the whole word, like きょう for 今日."},
      {t:"今夜 (こんや)", why:"今[夜]{や} is regular: コン (今) + ヤ (夜), both on readings."},
      {t:"毎朝 (まいあさ)", why:"毎[朝]{あさ} is マイ (on) + あさ (kun). It mixes reading types, but each part is a normal reading."},
      {t:"夕方 (ゆうがた)", why:"[夕]{ゆう}[方]{がた} is ゆう + かた, with かた voiced to がた. Voicing ([[rendaku]]) is a normal sound change, not a special reading."}
    ]},
    {id:"e3u8-l2-x3", type:"mcq", q:"At a crossing in Japan, the light changes to [青]{あお}[信]{しん}[号]{ごう}. What should you do?", options:[
      {t:"Cross: it is the green “go” light", ok:true, why:"Right. 青 covers blue and some greens, and the “go” light is called [青]{あお}[信]{しん}[号]{ごう}."},
      {t:"Wait: 青 means blue, and blue means stop", why:"There is no blue stop light. The red light, [赤]{あか}[信]{しん}[号]{ごう}, means stop."},
      {t:"Get ready to stop: it is the amber light", why:"The amber light is yellow, [黄]{き}[色]{いろ}. [青]{あお}[信]{しん}[号]{ごう} is the go light."},
      {t:"Nothing: [青]{あお}[信]{しん}[号]{ごう} is a street name", why:"[信]{しん}[号]{ごう} is a traffic light, and [青]{あお}[信]{しん}[号]{ごう} is its go signal."}
    ]},
    {id:"e3u8-l2-x4", type:"sort", q:"Sort these place words by their last kanji.", buckets:["〜屋 or 〜店: a shop or café","〜館: a large public building","〜院: an institution"], items:[
      {t:"本[屋]{や}", b:0, why:"〜屋 is a shop: a bookshop."},
      {t:"[喫]{きっ}[茶]{さ}[店]{てん}", b:0, why:"〜店 is a shop or café: a coffee shop."},
      {t:"パン[屋]{や}", b:0, why:"〜屋 again: a bakery."},
      {t:"[図]{と}書[館]{かん}", b:1, why:"〜館 is a large building for the public: a library."},
      {t:"[旅]{りょ}[館]{かん}", b:1, why:"〜館 also names a Japanese-style inn: a building where guests stay."},
      {t:"[大]{たい}[使]{し}[館]{かん}", b:1, why:"〜館: an embassy."},
      {t:"[病]{びょう}[院]{いん}", b:2, why:"〜院 is an institution: a hospital."},
      {t:"大学[院]{いん}", b:2, why:"〜院: graduate school, the institution after a first degree."}
    ]},
    {id:"e3u8-l2-x5", type:"mcq", q:"[会]{かい}[社]{しゃ} means “company”. [社]{しゃ}[会]{かい} uses the same two kanji the other way round. What does it mean?", options:[
      {t:"Society", ok:true, why:"Right. [社]{しゃ}[会]{かい} is society. In kanji words the order matters."},
      {t:"Company (the same word, written another way)", why:"Swapping the kanji makes a different word, not another spelling. [会]{かい}[社]{しゃ} and [社]{しゃ}[会]{かい} are both common, with different meanings."},
      {t:"A company meeting", why:"A meeting is [会]{かい}[議]{ぎ}. [社]{しゃ}[会]{かい} is society."},
      {t:"Nothing: [社]{しゃ}[会]{かい} is not a word", why:"[社]{しゃ}[会]{かい} is a very common word: society."}
    ]},
    {id:"e3u8-l2-x6", type:"spot", q:"Tap every word that names a place.", ask:"names a place", parts:[
      {t:"[駅]{えき}前", flag:true, why:"In front of the station: a place."},
      "・",
      {t:"午後", flag:false, why:"午後 is a time: the afternoon."},
      "・",
      {t:"[銀]{ぎん}行", flag:true, why:"A bank: a place."},
      "・",
      {t:"[夕]{ゆう}[方]{がた}", flag:false, why:"[夕]{ゆう}[方]{がた} is a time: early evening."},
      "・",
      {t:"[店]{てん}[員]{いん}", flag:false, why:"[店]{てん}[員]{いん} is a person: a shop assistant (〜員 is staff)."},
      "・",
      {t:"[公]{こう}[園]{えん}", flag:true, why:"A park: a place."},
      "・",
      {t:"[週]{しゅう}[末]{まつ}", flag:false, why:"[週]{しゅう}[末]{まつ} is a time: the weekend."}
    ]},
    {id:"e3u8-l2-x7", type:"mcq", q:"In Min’s message, why does he want to come back by early evening?", options:[
      {t:"Because he has heard it will rain at night", ok:true, why:"Right. [夜]{よる}は雨が[降]{ふ}るそうなので: 〜そう after a plain verb reports what someone said, and ので gives the reason."},
      {t:"Because the aquarium closes at 5 p.m.", why:"The aquarium closes at 午後五時半, 5:30 p.m., and that is not the reason he gives."},
      {t:"Because he has work in the evening", why:"The message doesn’t mention work. Look at the sentence that ends in 〜ので: it gives the reason."},
      {t:"Because Sara doesn’t like the dark", why:"Nothing in the message says this. Answer from the text only."}
    ]},
    {id:"e3u8-l2-x8", type:"number", q:"Min’s message says the aquarium is open 午前九時から午後五時半まで. How many hours is it open?", answer:8.5, tol:0, unit:"hours", why:"From 9:00 a.m. to 5:30 p.m. (17:30): 17.5 − 9 = 8.5 hours. 半 means half past, so 五時半 is 5:30.", wrongs:[
      {v:8, tol:0, why:"You may have missed 半 (half): 五時半 is 5:30, not 5:00."},
      {v:3.5, tol:0, why:"午後 means p.m., so 五時半 is 17:30, not 5:30 in the morning. Count from 9:00 to 17:30."}
    ], hint2:"Change 午後五時半 to the 24-hour clock first."}
   ],
   apply:{
    intro:"Bring the time and place kanji into your own week and neighbourhood.",
    tasks:[
     {t:"Your year in four sentences", how:[
       "Write one sentence for each season, using the kanji: [春]{はる}は…, [夏]{なつ}は…, [秋]{あき}は…, [冬]{ふゆ}は…",
       "Add one time word to each: [朝]{あさ}, [昼]{ひる}, [夕]{ゆう}[方]{がた} or [夜]{よる}.",
       "If you live somewhere without four seasons, write about the seasons you do have, or about a place you would like to visit."
     ], write:"[春]{はる}は… [夏]{なつ}は… [秋]{あき}は… [冬]{ふゆ}は…"},
     {t:"Label your neighbourhood", how:[
       "List six places near your home or work and write each one in kanji: [駅]{えき}, [銀]{ぎん}行, [病]{びょう}[院]{いん}, [図]{と}書[館]{かん}, 本[屋]{や}, [公]{こう}[園]{えん}…",
       "Write where each is: [駅]{えき}の[近]{ちか}くに[銀]{ぎん}行があります。",
       "Circle the last kanji of each place word and say what kind of place it is (shop, large building, institution, room)."
     ], write:"1 … 2 … 3 … 4 … 5 … 6 …"},
     {t:"Read a real calendar or timetable", how:[
       "Find a Japanese calendar, event poster or opening-hours sign online (or a photo you took).",
       "Find the days of the week, the times (午前, 午後, 時, 分, 半) and any season or month words.",
       "Write in English what it tells you, and list the N4 kanji you recognised."
     ], write:"What it was… what it says… N4 kanji I knew…"}
    ],
    proof:"Four season sentences, six labelled places with sentences, and one real calendar or sign read and explained."},
   read:[
    {book:"irodori", where:"Elementary 1, Lessons 3 “It gets very cold in winter.” and 4 “It rained heavily yesterday.”", note:"Seasons and weather."},
    {book:"irodori", where:"Elementary 1, Lessons 5 “It is very lively and convenient.” and 6 “Please tell me how to get to the post office.”", note:"Your town: places, and asking the way."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  
  {id:"e3u8-l3", title:"Kanji for actions: verbs, verb pairs and する words", minutes:55,
   hook:{q:"Which sentence means “I open the door”?", options:["ドアを[開]{あ}けます。","ドアを[開]{あ}きます。","ドアが[開]{あ}けます。","ドアが[開]{あ}きます。"], answer:0,
     reveal:"**ドアを[開]{あ}けます.** [開]{あ}ける is something you do to a thing, so it takes を. [開]{あ}く is something that happens, so it takes が: ドアが[開]{あ}きます means “the door opens”, without saying who opened it. One kanji, two verbs, and the okurigana tell you which. Many N4 verb kanji work like this, and this lesson shows the most common pairs."},
   goals:[
     "Read the N4 kanji for thinking, studying, moving and everyday actions, with their verbs and words",
     "Use verb pairs that share a kanji, such as [始]{はじ}める and [始]{はじ}まる, with the right particle",
     "Make and use する verbs from kanji words, such as [勉]{べん}[強]{きょう}する and [運]{うん}[転]{てん}する",
     "Follow a short text about someone’s day"
   ],
   learn:[
    {h:"Thinking, studying and words", body:[
      {lead:"Most N4 verb kanji take their kun reading with okurigana when they stand as a verb ([思]{おも}う), and their on reading inside kanji words ([意]{い}[思]{し}, intention). The tables show both."},
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["言", "say; word", "On ゲン, ゴン · Kun い(う), こと", "[言]{い}う say · [言]{こと}[葉]{ば} word, language · [方]{ほう}[言]{げん} dialect"], ["思", "think, feel", "On シ · Kun おも(う)", "[思]{おも}う think, feel · [思]{おも}い[出]{で} memory · [不]{ふ}[思]{し}[議]{ぎ} strange, mysterious"], ["考", "think, consider", "On コウ · Kun かんが(える)", "[考]{かんが}える think about · [考]{かんが}え idea · [参]{さん}[考]{こう} reference"], ["知", "know", "On チ · Kun し(る)", "[知]{し}る get to know · お[知]{し}らせ notice, announcement · [知]{ち}[人]{じん} acquaintance"], ["教", "teach", "On キョウ · Kun おし(える), おそ(わる)", "[教]{おし}える teach · [教]{きょう}[室]{しつ} classroom · [教]{きょう}[科]{か}[書]{しょ} textbook"], ["習", "learn", "On シュウ · Kun なら(う)", "[習]{なら}う learn (from someone) · [練]{れん}[習]{しゅう} practice · [学]{がく}[習]{しゅう} study, learning"], ["勉", "effort", "On ベン", "[勉]{べん}[強]{きょう} study · [勉]{べん}[強]{きょう}になる learn a lot (from something)"], ["研", "polish; study", "On ケン · Kun と(ぐ)", "[研]{けん}[究]{きゅう} research · [研]{けん}[修]{しゅう} training course"], ["究", "research", "On キュウ", "[研]{けん}[究]{きゅう} research · [研]{けん}[究]{きゅう}[者]{しゃ} researcher · [研]{けん}[究]{きゅう}[室]{しつ} laboratory, research room"], ["答", "answer", "On トウ · Kun こた(える), こた(え)", "[答]{こた}える answer · [答]{こた}え an answer · [回]{かい}[答]{とう} reply (to a survey, request)"], ["問", "question", "On モン · Kun と(う), と(い)", "[問]{もん}[題]{だい} problem; exam question · [質]{しつ}[問]{もん} question · 学[問]{もん} learning, scholarship"], ["試", "try, test", "On シ · Kun ため(す)", "[試]{し}[験]{けん} exam · [試]{し}[合]{あい} match, game · [試]{ため}す try out"], ["験", "test; effect", "On ケン", "[試]{し}[験]{けん} exam · [経]{けい}[験]{けん} experience · [体]{たい}[験]{けん} hands-on experience"]]},
      "[思]{おも}う and [考]{かんが}える both translate as “think”. [思]{おも}う is for feelings, opinions and impressions: [楽]{たの}しいと[思]{おも}います (I think it’s fun). [考]{かんが}える is for thinking something through: [計]{けい}[画]{かく}を[考]{かんが}えます (I think about the plan). You will use 〜と[思]{おも}います for opinions ([[to-omou]]).",
      "Teaching and learning have three verbs. The teacher [教]{おし}える (teaches); the learner [習]{なら}う (learns from someone) or [教]{おそ}わる (is taught). Both people are in the sentence with に: アナさんはケンジさんに[英]{えい}[語]{ご}を[教]{おし}えます, and ケンジさんはアナさんに[英]{えい}語を[習]{なら}います.",
      {warn:"For “I know”, Japanese uses the ている form: [知]{し}っています. But “I don’t know” is usually just [知]{し}りません, not [知]{し}っていません. はい、[知]{し}っています。/ いいえ、[知]{し}りません。"}
    ]},
    {h:"Moving, going and stopping", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["始", "begin", "On シ · Kun はじ(める), はじ(まる)", "[始]{はじ}める begin (something) · [始]{はじ}まる (something) begins · [開]{かい}[始]{し} start"], ["終", "end", "On シュウ · Kun お(わる), お(える)", "[終]{お}わる end · [終]{お}わり the end · [終]{しゅう}[電]{でん} the last train"], ["起", "get up; happen", "On キ · Kun お(きる), お(こす), お(こる)", "[起]{お}きる get up · [起]{お}こす wake (someone) up · [起]{お}こる happen"], ["帰", "return home", "On キ · Kun かえ(る)", "[帰]{かえ}る go home · [帰]{き}[国]{こく} going back to one’s country · [日]{ひ}[帰]{がえ}り day trip"], ["走", "run", "On ソウ · Kun はし(る)", "[走]{はし}る run · [競]{きょう}[走]{そう} race"], ["歩", "walk", "On ホ, ブ · Kun ある(く)", "[歩]{ある}く walk · [散]{さん}[歩]{ぽ} a walk, stroll · [歩]{ほ}[道]{どう} pavement, sidewalk"], ["動", "move", "On ドウ · Kun うご(く), うご(かす)", "[動]{うご}く move · [動]{どう}[物]{ぶつ} animal · [運]{うん}[動]{どう} exercise"], ["運", "carry; luck", "On ウン · Kun はこ(ぶ)", "[運]{はこ}ぶ carry · [運]{うん}[転]{てん} driving · [運]{うん}[動]{どう} exercise"], ["転", "roll, turn", "On テン · Kun ころ(ぶ)", "[転]{ころ}ぶ fall over · [運]{うん}[転]{てん} driving · [自]{じ}[転]{てん}[車]{しゃ} bicycle"], ["送", "send", "On ソウ · Kun おく(る)", "[送]{おく}る send; see someone off · [送]{そう}[料]{りょう} postage, shipping · [放]{ほう}[送]{そう} broadcast"], ["通", "pass through; commute", "On ツウ · Kun とお(る), かよ(う)", "[通]{とお}る pass · [通]{かよ}う go regularly, commute · [普]{ふ}[通]{つう} normal, usual"], ["急", "hurry; sudden", "On キュウ · Kun いそ(ぐ)", "[急]{いそ}ぐ hurry · [急]{きゅう}に suddenly · [特]{とっ}[急]{きゅう} limited express (train)"], ["止", "stop", "On シ · Kun と(まる), と(める), や(める)", "[止]{と}まる (come to a) stop · [止]{と}める stop (something) · [中]{ちゅう}[止]{し} cancellation"], ["旅", "travel", "On リョ · Kun たび", "[旅]{りょ}[行]{こう} trip · [旅]{たび} journey · [旅]{りょ}[館]{かん} Japanese-style inn"]]},
      "[通]{とお}る and [通]{かよ}う share a kanji but not a meaning. [通]{とお}る is to pass through or by a place: [公]{こう}[園]{えん}を[通]{とお}ります. [通]{かよ}う is to go somewhere regularly, such as school or work: [大]{だい}学に[通]{かよ}っています (I go to university).",
      "Train types are written with these kanji. A [普]{ふ}[通]{つう} train usually stops at every station; an [急]{きゅう}行 (express) skips some; a [特]{とっ}[急]{きゅう} (limited express) skips more, and on many lines, including JR, it needs an extra limited-express ticket. Rail companies use more names than these, so check the board at the station.",
      "[止]{と}まる is to come to a stop, as a bus or a clock does. With 止める, read the sentence: 車を[止]{と}める is to stop a car, but the same kanji is also read やめる, “to stop doing something”, which is usually written in kana: たばこをやめました (I gave up smoking)."
    ]},
    {h:"Hands and things", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["着", "wear; arrive", "On チャク · Kun き(る), つ(く)", "[着]{き}る put on, wear (a shirt, coat) · [着]{つ}く arrive · [着]{き}[物]{もの} kimono"], ["持", "hold, have", "On ジ · Kun も(つ)", "[持]{も}つ hold, have · [気]{き}[持]{も}ち feeling · [金]{かね}[持]{も}ち rich person"], ["待", "wait", "On タイ · Kun ま(つ)", "[待]{ま}つ wait · [待]{まち}[合]{あい}[室]{しつ} waiting room · [招]{しょう}[待]{たい} invitation"], ["使", "use", "On シ · Kun つか(う)", "[使]{つか}う use · [使]{し}[用]{よう} use (formal) · [大]{たい}[使]{し}[館]{かん} embassy"], ["借", "borrow", "On シャク · Kun か(りる)", "[借]{か}りる borrow · [借]{しゃっ}[金]{きん} debt"], ["貸", "lend", "On タイ · Kun か(す)", "[貸]{か}す lend · [貸]{か}し出し lending (at a library)"], ["写", "copy; photograph", "On シャ · Kun うつ(す), うつ(る)", "[写]{しゃ}[真]{しん} photo · [写]{うつ}す copy · [写]{うつ}る appear (in a photo)"], ["映", "reflect; project", "On エイ · Kun うつ(る), うつ(す)", "[映]{えい}[画]{が} film · [映]{えい}[画]{が}[館]{かん} cinema · [映]{うつ}る be reflected"], ["売", "sell", "On バイ · Kun う(る)", "[売]{う}る sell · [売]{う}り[場]{ば} sales floor, counter · [売]{ばい}[店]{てん} kiosk"], ["買", "buy", "On バイ · Kun か(う)", "[買]{か}う buy · [買]{か}い[物]{もの} shopping · [売]{ばい}[買]{ばい} buying and selling"], ["作", "make", "On サク, サ · Kun つく(る)", "[作]{つく}る make · [作]{さく}[文]{ぶん} composition, essay · [作]{さっ}[家]{か} writer"], ["開", "open", "On カイ · Kun あ(ける), あ(く), ひら(く)", "[開]{あ}ける open (something) · [開]{あ}く (something) opens · [開]{かい}[店]{てん} opening (of a shop)"], ["集", "gather", "On シュウ · Kun あつ(まる), あつ(める)", "[集]{あつ}まる (people) gather · [集]{あつ}める collect · [集]{しゅう}[合]{ごう} meeting up (at a set place)"]]},
      "Borrowing and lending point in opposite directions, and so do buying and selling. [借]{か}りる is to borrow (the thing comes to you), [貸]{か}す is to lend (it goes away from you): [友]{とも}だちに[本]{ほん}を[貸]{か}しました, and 友だちに本を[借]{か}りました. Remember 貸 by its 貝, the old shell money, leaving at the bottom.",
      "着 is both “wear” and “arrive”. [着]{き}る is for clothes on the upper body or the whole body, such as a shirt, a coat or a dress; for shoes, trousers and skirts Japanese uses はく. [着]{つ}く is to arrive: [駅]{えき}に[着]{つ}きました. The okurigana and the particles tell you which verb it is.",
      "開 has two kun readings. [開]{あ}く (open) is the everyday intransitive verb; [開]{ひら}く (open, unfold; hold an event), which can take を or が, is used for books, flowers, shops and meetings: [会]{かい}を[開]{ひら}く (hold a party or meeting). In a few phrases either reading is possible, so let the words around it guide you."
    ]},
    {h:"Home, food and plans", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["住", "live (somewhere)", "On ジュウ · Kun す(む)", "[住]{す}む live · [住]{じゅう}[所]{しょ} address · [住]{じゅう}[民]{みん} resident"], ["切", "cut", "On セツ · Kun き(る)", "[切]{き}る cut · [切]{きっ}[手]{て} postage stamp · [大]{たい}[切]{せつ} important, precious"], ["立", "stand", "On リツ · Kun た(つ), た(てる)", "[立]{た}つ stand · [役]{やく}に[立]{た}つ be useful · 国[立]{りつ} national (run by the state)"], ["飲", "drink", "On イン · Kun の(む)", "[飲]{の}む drink; take (medicine) · [飲]{の}み[物]{もの} a drink · [飲]{いん}[食]{しょく}[店]{てん} restaurant, eating place"], ["歌", "song; sing", "On カ · Kun うた, うた(う)", "[歌]{うた} song · [歌]{うた}う sing · [歌]{か}[手]{しゅ} singer"], ["用", "use; business", "On ヨウ · Kun もち(いる)", "[用]{よう}[事]{じ} errand, something to do · [用]{よう}[意]{い} preparation · [利]{り}[用]{よう} use (of a service)"], ["注", "pour; pay attention", "On チュウ · Kun そそ(ぐ)", "[注]{ちゅう}[意]{い} care, warning · [注]{ちゅう}[文]{もん} order (in a shop or restaurant) · [注]{そそ}ぐ pour"], ["建", "build", "On ケン · Kun た(てる), た(つ)", "[建]{た}てる build · [建]{たて}[物]{もの} building · [建]{た}つ be built"], ["発", "depart; emit", "On ハツ, ホツ", "[出]{しゅっ}[発]{ぱつ} departure · [発]{はつ}[音]{おん} pronunciation · [発]{はっ}[表]{ぴょう} presentation, announcement"], ["計", "measure; plan", "On ケイ · Kun はか(る)", "[計]{けい}[画]{かく} plan · [合]{ごう}[計]{けい} total · ★[時計]{とけい} clock, watch"], ["有", "have; exist", "On ユウ, ウ · Kun あ(る)", "[有]{ゆう}[名]{めい} famous · [有]{ゆう}[料]{りょう} paid, not free"]]},
      "[飲]{の}む is also the verb for taking medicine: [薬]{くすり}を[飲]{の}みます. [住]{す}む is used with に and the ている form for where someone lives: [東]{とう}[京]{きょう}に[住]{す}んでいます.",
      "[立]{た}つ (stand) and [建]{た}つ (be built) sound the same, and [立]{た}てる and [建]{た}てる (build) do too. Lesson 4 looks at sound-alikes like these."
    ]},
    {h:"One kanji, two verbs", body:[
      "Many N4 kanji write a pair of verbs. One verb is [[transitive-verb|transitive]]: someone does it to something, marked with を. The other is [[intransitive-verb|intransitive]]: it just happens, and the thing takes が. The kanji is the same; the okurigana are different ({{transitive-intransitive}}).",
      {table:[["Kanji","を: you do it to something","が: it happens"],["開","[開]{あ}ける open (a door)","[開]{あ}く (a door) opens"],["始","[始]{はじ}める begin (a class)","[始]{はじ}まる (a class) begins"],["止","[止]{と}める stop (a car)","[止]{と}まる (a car) stops"],["集","[集]{あつ}める collect (stamps)","[集]{あつ}まる (people) gather"],["動","[動]{うご}かす move (a desk)","[動]{うご}く (a train) moves"],["起","[起]{お}こす wake (someone)","[起]{お}きる wake up, get up"],["立","[立]{た}てる stand (something) up","[立]{た}つ stand"],["建","[建]{た}てる build (a house)","[建]{た}つ (a house) is built"],["帰","[帰]{かえ}す send (someone) home","[帰]{かえ}る go home"],["終","[終]{お}える finish (work)","[終]{お}わる (work) ends"]]},
      {ex:"[先]{せん}[生]{せい}が[授]{じゅ}[業]{ぎょう}を[始]{はじ}めます。 The teacher starts the class.\n[授]{じゅ}[業]{ぎょう}が[始]{はじ}まります。 The class starts.\n[駅]{えき}の[前]{まえ}に車を[止]{と}めました。 I stopped the car in front of the station.\n車が[止]{と}まりました。 The car stopped.", label:"Same kanji, different verb"},
      {tip:"When you learn one verb of a pair, learn the other with it, each in a short phrase with its particle: ドアを[開]{あ}ける / ドアが[開]{あ}く. The particle is the part people forget."}
    ]},
    {h:"する verbs made from kanji words", body:[
      "Many kanji words become verbs when you add する. These [[kanji-compound-verbs|kanji compound verbs]] are everywhere at N4, because one kanji word plus する gives you a verb you can use in every form you know: します, しました, して, したい… ([[sahen-doushi]]).",
      {table:[["Verb","Meaning","Example"],["[勉]{べん}[強]{きょう}する","study","[毎]{まい}日[漢]{かん}[字]{じ}を[勉]{べん}[強]{きょう}しています。"],["[運]{うん}[転]{てん}する","drive","[父]{ちち}は車を[運]{うん}[転]{てん}しません。"],["[出]{しゅっ}[発]{ぱつ}する","depart","バスは[九]{く}時に[出]{しゅっ}[発]{ぱつ}します。"],["[注]{ちゅう}[意]{い}する","be careful; warn","車に[注]{ちゅう}[意]{い}してください。"],["[質]{しつ}[問]{もん}する","ask a question","先生に[質]{しつ}[問]{もん}しました。"],["[旅]{りょ}行する","travel","[夏]{なつ}に[北]{ほっ}[海]{かい}[道]{どう}を[旅]{りょ}行しました。"],["[研]{けん}[究]{きゅう}する","research","大学で[日本]{にほん}の[音]{おん}[楽]{がく}を[研]{けん}[究]{きゅう}しています。"],["[練]{れん}[習]{しゅう}する","practise","毎[晩]{ばん}ギターを[練]{れん}[習]{しゅう}します。"]]},
      "Two patterns are both correct: 日本語を[勉]{べん}[強]{きょう}する and 日本語の[勉]{べん}[強]{きょう}をする. Both mean “study Japanese”.",
      {warn:"Not every kanji word takes する. 時[代]{だい} (era), [世]{せ}[界]{かい} (world) and [研]{けん}[究]{きゅう}[室]{しつ} (laboratory) are only nouns. Dictionaries mark the words that do, and the Kanji Lab’s word cards show the tag “takes する”."}
    ]},
    {h:"Read it: Kenji’s day", body:[
      "This text describes a day in the life of Kenji, a researcher. Read it for the order of events.",
      {ex:"ケンジさんは毎[朝]{あさ}[六]{ろく}時[半]{はん}に[起]{お}きて、[近]{ちか}くの[公]{こう}[園]{えん}を[三]{さん}[十]{じゅっ}[分]{ぷん}[走]{はし}ります。それから、シャワーを[浴]{あ}びて、[朝]{あさ}ご[飯]{はん}を[作]{つく}ります。[八]{はち}時に[家]{いえ}を出て、[駅]{えき}まで[歩]{ある}きます。\n[会]{かい}[社]{しゃ}では、[新]{あたら}しい[自]{じ}[転]{てん}車の[研]{けん}[究]{きゅう}をしています。[昼]{ひる}[休]{やす}みには、[同]{おな}じ[研]{けん}[究]{きゅう}[室]{しつ}の人と食[堂]{どう}で[昼]{ひる}ご[飯]{はん}を食べます。\n[仕]{し}[事]{ごと}は六時に[終]{お}わりますが、[火]{か}[曜]{よう}日と[木]{もく}[曜]{よう}日は、[家]{いえ}に[帰]{かえ}る前に[英]{えい}[会]{かい}[話]{わ}の[教]{きょう}[室]{しつ}に[通]{かよ}っています。", label:"Kenji’s day"},
      {list:["**What does Kenji do before breakfast?** He runs in the park near his home for 30 minutes, then showers.","**What does he research?** New bicycles ([自]{じ}[転]{てん}車).","**Where does he eat lunch?** In the canteen (食[堂]{どう}), with people from the same laboratory.","**What does he do on Tuesdays and Thursdays?** He goes to an English conversation class before going home: 〜に[通]{かよ}っています is going somewhere regularly."]},
      "Look at the verbs: [起]{お}きる, [走]{はし}る, [作]{つく}る, [歩]{ある}く, [終]{お}わる, [帰]{かえ}る, [通]{かよ}う, and the する word [研]{けん}[究]{きゅう}. With the kanji of this lesson, you can read the whole story of a day.",
      {lab:"kl-n4", t:"Practise: today’s N4 kanji review"},
      {lab:"kl-n4-vocab", t:"Practise: N4 words, including verb pairs and する verbs"}
    ]}
   ],
   try:[
    {id:"e3u8-l3-x1", type:"match", q:"Match each verb to its meaning.", pairs:[
      ["[借]{か}りる","borrow","[借]{か}りる: the thing comes to you. It has 亻 on the left."],
      ["[貸]{か}す","lend","[貸]{か}す: the thing goes away from you. It has 貝 (shell money) at the bottom."],
      ["[売]{う}る","sell","[売]{う}る: you give something and get money. [売]{う}り[場]{ば} is a sales counter."],
      ["[送]{おく}る","send","[送]{おく}る: send a letter or a parcel, or see someone off. It has 辶 (moving)."],
      ["[待]{ま}つ","wait","[待]{ま}つ has 彳 (going, roads) on the left: waiting by the road."],
      ["[運]{はこ}ぶ","carry","[運]{はこ}ぶ: carry or transport something. Its on reading ウン appears in [運]{うん}[転]{てん} and [運]{うん}[動]{どう}."]
    ]},
    {id:"e3u8-l3-x2", type:"mcq", q:"Ana teaches English, and Kenji learns English from her. Which sentence says this correctly?", options:[
      {t:"ケンジさんはアナさんに[英]{えい}語を[習]{なら}っています。", ok:true, why:"Right. [習]{なら}う is to learn from someone, and the teacher is marked with に."},
      {t:"ケンジさんはアナさんに[英]{えい}語を[教]{おし}えています。", why:"This says Kenji teaches Ana. [教]{おし}える is the teacher’s verb."},
      {t:"アナさんはケンジさんに[英]{えい}語を[習]{なら}っています。", why:"This says Ana learns from Kenji: the roles are the wrong way round."},
      {t:"ケンジさんはアナさんを[英]{えい}語に[習]{なら}っています。", why:"The particles are swapped. The teacher takes に, and what you learn takes を."}
    ]},
    {id:"e3u8-l3-x3", type:"sort", q:"Does each verb take を (you do it to something) or が (it happens)?", buckets:["を: you do it to something","が: it happens"], items:[
      {t:"[開]{あ}ける", b:0, why:"ドアを[開]{あ}ける: you open the door."},
      {t:"[始]{はじ}まる", b:1, why:"[授]{じゅ}[業]{ぎょう}が[始]{はじ}まる: the class begins."},
      {t:"[止]{と}める", b:0, why:"車を[止]{と}める: you stop the car."},
      {t:"[集]{あつ}まる", b:1, why:"人が[集]{あつ}まる: people gather."},
      {t:"[動]{うご}かす", b:0, why:"つくえを[動]{うご}かす: you move a desk."},
      {t:"[起]{お}きる", b:1, why:"[起]{お}きる is getting up yourself; waking someone else is [起]{お}こす, with を."},
      {t:"[建]{た}つ", b:1, why:"[家]{いえ}が[建]{た}つ: a house is built (goes up)."},
      {t:"[終]{お}える", b:0, why:"[仕]{し}[事]{ごと}を[終]{お}える: you finish your work."}
    ]},
    {id:"e3u8-l3-x4", type:"mcq", q:"Choose the particle for the gap: 「[会]{かい}[議]{ぎ}＿[始]{はじ}まります。」 (The meeting begins.)", options:[
      {t:"が", ok:true, why:"Right. [始]{はじ}まる is intransitive: the meeting itself begins, so it takes が."},
      {t:"を", why:"を goes with [始]{はじ}める (you begin something): [会]{かい}[議]{ぎ}を[始]{はじ}めます."},
      {t:"に", why:"に marks a time or a destination: 十時に[始]{はじ}まります. It can’t mark the thing that begins."},
      {t:"で", why:"で marks a place or a means: [会]{かい}[議]{ぎ}[室]{しつ}で[始]{はじ}まります. It can’t mark the thing that begins."}
    ]},
    {id:"e3u8-l3-x5", type:"mcq", q:"How do you read 出発 in 「バスは九時に出発します」? (No furigana: that is the question.)", options:[
      {t:"しゅっぱつ", ok:true, why:"Right. 出 is しゅつ and 発 is はつ; together they change to しゅっ + ぱつ."},
      {t:"しゅつはつ", why:"Close: these are the two on readings, but in this word しゅつ shrinks to しゅっ and はつ becomes ぱつ."},
      {t:"でぱつ", why:"で is the kun reading of 出 (出[口]{ぐち}). Two-kanji words like 出[発]{ぱつ} normally use on readings."},
      {t:"しゅっぽつ", why:"ホツ is another on reading of 発, but this word uses ハツ: しゅっぱつ."}
    ]},
    {id:"e3u8-l3-x6", type:"order", q:"Put Kenji’s day in the order of the text.", items:[
      {t:"He gets up at 6:30.", why:"The text starts with 六時半に[起]{お}きて."},
      {t:"He runs in the park for 30 minutes.", why:"〜て joins the actions in order: [起]{お}きて, then [公]{こう}[園]{えん}を[走]{はし}ります."},
      {t:"He makes breakfast.", why:"それから (after that) he showers and makes breakfast."},
      {t:"He walks to the station.", why:"At eight he leaves home and walks to the station."},
      {t:"He eats lunch in the canteen.", why:"[昼]{ひる}休み: in the lunch break."},
      {t:"He goes to his English class (on Tuesdays and Thursdays).", why:"After work, [帰]{かえ}る前に: before going home."}
    ]},
    {id:"e3u8-l3-x7", type:"spot", q:"Tap every word that can take する to become a verb.", ask:"can take する", parts:[
      {t:"[勉]{べん}[強]{きょう}", flag:true, why:"[勉]{べん}[強]{きょう}する: to study."},
      "・",
      {t:"時[代]{だい}", flag:false, why:"時[代]{だい} (era) is only a noun. 時[代]{だい}する is not a word."},
      "・",
      {t:"[運]{うん}[転]{てん}", flag:true, why:"[運]{うん}[転]{てん}する: to drive."},
      "・",
      {t:"[研]{けん}[究]{きゅう}[室]{しつ}", flag:false, why:"[研]{けん}[究]{きゅう}[室]{しつ} is a place, a laboratory. [研]{けん}[究]{きゅう} takes する, but [研]{けん}[究]{きゅう}[室]{しつ} doesn’t."},
      "・",
      {t:"出[発]{ぱつ}", flag:true, why:"出[発]{ぱつ}する: to depart."},
      "・",
      {t:"[図]{と}書[館]{かん}", flag:false, why:"[図]{と}書[館]{かん} is a building. Places don’t take する."},
      "・",
      {t:"[注]{ちゅう}[意]{い}", flag:true, why:"[注]{ちゅう}[意]{い}する: to be careful, or to warn someone."}
    ]},
    {id:"e3u8-l3-x8", type:"mcq", q:"Sara asks: 「[山]{やま}[下]{した}さんを[知]{し}っていますか。」 You have never heard of Ms Yamashita. What is the natural answer?", options:[
      {t:"いいえ、[知]{し}りません。", ok:true, why:"Right. “I know” is [知]{し}っています, but “I don’t know” is normally [知]{し}りません."},
      {t:"いいえ、[知]{し}っていません。", why:"This is a very common learner mistake. The negative of [知]{し}っています is normally [知]{し}りません."},
      {t:"いいえ、[知]{し}りませんでした。", why:"[知]{し}りませんでした means “I didn’t know (until now)”. It fits when you have just learned something, not here."},
      {t:"はい、[知]{し}りません。", why:"はい agrees with the question; here you are saying no, you don’t know her, so start with いいえ."}
    ]}
   ],
   apply:{
    intro:"Use the action kanji to describe your own routine. Paper or a notes app is fine.",
    tasks:[
     {t:"Your day in ten verbs", how:[
       "Write your usual day in eight to ten short sentences, using verbs from this lesson: [起]{お}きる, [着]{き}る, [飲]{の}む, [作]{つく}る, [歩]{ある}く, [使]{つか}う, [待]{ま}つ, [帰]{かえ}る…",
       "Join some of them with 〜て, as Kenji’s text does: [起]{お}きて、[朝]{あさ}ご[飯]{はん}を[作]{つく}ります。",
       "Underline every kanji you used from this lesson."
     ], write:"毎[朝]{あさ}… それから… …"},
     {t:"Four verb pairs at home", how:[
       "Choose four pairs from the table ([開]{あ}ける/[開]{あ}く, [始]{はじ}める/[始]{はじ}まる, [止]{と}める/[止]{と}まる, [集]{あつ}める/[集]{あつ}まる…).",
       "Write one sentence with を and one with が for each pair, about something in your home or your day.",
       "Read them aloud. Check each particle against the table."
     ], write:"ドアを[開]{あ}けます。/ ドアが[開]{あ}きます。 …"},
     {t:"Collect eight する verbs", how:[
       "In the Kanji Lab’s N4 words deck (or a textbook), find eight kanji words that take する. The Lab’s word cards show the tag “takes する” after you answer.",
       "Write each one in a short sentence about yourself."
     ], write:"1 … 2 … 3 … 4 … 5 … 6 … 7 … 8 …"}
    ],
    proof:"A day described in eight to ten sentences, four verb pairs with the right particles, and eight する verbs in your own sentences."},
   read:[
    {book:"irodori", where:"Elementary 1, Lessons 9 “Will you tell me how to read this?” and 10 “I would like to take a Japanese-language class.”", note:"Studying Japanese: asking how to read and write things."},
    {book:"irodori", where:"Elementary 1, Lesson 13 “It will probably end in about ten minutes.”", note:"Work and daily routines."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  
  {id:"e3u8-l4", title:"Kanji for descriptions, things and ideas; one sound, many kanji", minutes:55,
   hook:{q:"[以]{い}[外]{がい} and [意]{い}外 are both read いがい. Which one means “unexpected”?", options:["[以]{い}外","[意]{い}外","Both: they are two spellings of one word","Neither"], answer:1,
     reveal:"**[意]{い}外.** 意 is “mind” and 外 is “outside”: something outside what you had in mind. [以]{い}外 means “except” or “apart from”: [日]{にち}[曜]{よう}日[以]{い}外 is every day except Sunday. Japanese has many words that sound the same, and in writing the kanji tell them apart. This lesson finishes the N4 kanji and then looks at these sound-alikes, and at kanji with several readings."},
   goals:[
     "Read the N4 kanji for describing, judging and comparing, including [以]{い}[上]{じょう}, [以]{い}[下]{か} and the prefix 不",
     "Read the N4 kanji for things, food, language and ideas",
     "Choose the right kanji for common homophones such as [以]{い}外 and [意]{い}外, or [早]{はや}い and [速]{はや}い",
     "Choose the right reading for kanji words with several readings, such as 人気 and 空いて"
   ],
   learn:[
    {h:"Size, amount and feeling", body:[
      {lead:"Many N4 describing words are い-adjectives with okurigana, and they come in opposite pairs. Learn the pairs together."},
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["新", "new", "On シン · Kun あたら(しい)", "[新]{あたら}しい new · [新]{しん}[聞]{ぶん} newspaper · [新]{しん}[年]{ねん} the New Year"], ["古", "old", "On コ · Kun ふる(い)", "[古]{ふる}い old · [中]{ちゅう}[古]{こ} second-hand · [古]{ふる}[本]{ほん} second-hand book"], ["多", "many, much", "On タ · Kun おお(い)", "[多]{おお}い many · [多]{た}[分]{ぶん} probably · [多]{た}[少]{しょう} a little, somewhat"], ["少", "few, a little", "On ショウ · Kun すく(ない), すこ(し)", "[少]{すこ}し a little · [少]{すく}ない few · [少]{しょう}年 boy"], ["強", "strong", "On キョウ, ゴウ · Kun つよ(い)", "[強]{つよ}い strong · [勉]{べん}[強]{きょう} study · [強]{きょう}[力]{りょく} powerful"], ["重", "heavy; important", "On ジュウ, チョウ · Kun おも(い)", "[重]{おも}い heavy · [体]{たい}[重]{じゅう} body weight · [重]{じゅう}[要]{よう} important"], ["広", "wide", "On コウ · Kun ひろ(い)", "[広]{ひろ}い wide, spacious · [広]{ひろ}[場]{ば} town square · [広]{こう}[告]{こく} advertisement"], ["近", "near", "On キン · Kun ちか(い)", "[近]{ちか}い near · [近]{きん}[所]{じょ} neighbourhood · [最]{さい}[近]{きん} recently"], ["明", "bright, clear", "On メイ, ミョウ · Kun あか(るい), あ(ける)", "[明]{あか}るい bright · [説]{せつ}[明]{めい} explanation · ★[明日]{あした} tomorrow"], ["楽", "fun; easy; music", "On ガク, ラク · Kun たの(しい)", "[楽]{たの}しい fun · [音]{おん}[楽]{がく} music · [楽]{らく} easy, comfortable"]]},
      {table:[["Word","Opposite"],["[新]{あたら}しい new","[古]{ふる}い old"],["[多]{おお}い many","[少]{すく}ない few"],["[強]{つよ}い strong","[弱]{よわ}い weak"],["[重]{おも}い heavy","[軽]{かる}い light"],["[近]{ちか}い near","[遠]{とお}い far"],["[明]{あか}るい bright","[暗]{くら}い dark"]]},
      "To say “many people” before a noun, Japanese uses [多]{おお}くの人 (or たくさんの人), not ✗[多]{おお}い人. [多]{おお}い works at the end: この[町]{まち}は人が[多]{おお}いです (this town has a lot of people). As in Unit 4, 多い can describe a noun when you say what there is a lot of: [雨]{あめ}の[多]{おお}い[国]{くに} (a country with a lot of rain).",
      "★[明日]{あした} (tomorrow) has three readings for the same word: あした in everyday speech, あす when a little more formal, and みょうにち in formal speech and business. All three are correct."
    ]},
    {h:"Judging and comparing", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["安", "cheap; calm, safe", "On アン · Kun やす(い)", "[安]{やす}い cheap · [安]{あん}[心]{しん} relief, peace of mind · [安]{あん}[全]{ぜん} safety"], ["悪", "bad", "On アク · Kun わる(い)", "[悪]{わる}い bad · [最]{さい}[悪]{あく} the worst"], ["正", "correct, proper", "On セイ, ショウ · Kun ただ(しい)", "[正]{ただ}しい correct · お[正]{しょう}[月]{がつ} the New Year holidays · [正]{せい}[解]{かい} the right answer"], ["同", "same", "On ドウ · Kun おな(じ)", "[同]{おな}じ same · [同]{どう}[時]{じ} the same time · [同]{どう}[級]{きゅう}[生]{せい} classmate"], ["真", "true; exact", "On シン · Kun ま", "[写]{しゃ}[真]{しん} photo · [真]{ま}ん中 the very middle · [真]{ま}っ[白]{しろ} pure white"], ["特", "special", "On トク", "[特]{とく}に especially · [特]{とく}[別]{べつ} special · [特]{とっ}[急]{きゅう} limited express (train)"], ["別", "separate; other", "On ベツ · Kun わか(れる)", "[別]{べつ} separate, another · [特]{とく}[別]{べつ} special · [別]{わか}れる part, split up"], ["不", "not, un-", "On フ, ブ", "[不]{ふ}[便]{べん} inconvenient · [不]{ふ}[安]{あん} worry, anxiety · [不]{ふ}[親]{しん}[切]{せつ} unkind"], ["以", "from (a point)", "On イ", "[以]{い}上 or more; that is all · [以]{い}下 or less · [以]{い}外 except, apart from"], ["的", "target; -ic, -al", "On テキ · Kun まと", "[目]{もく}[的]{てき} purpose · [的]{まと} target · [具]{ぐ}[体]{たい}[的]{てき} concrete, specific"]]},
      "[以]{い}上 and [以]{い}下 appear on signs, prices and rules, and they **include** the number. [十]{じゅう}[八]{はっ}[歳]{さい}[以]{い}上 means 18 and over; [三]{さん}[千]{ぜん}[円]{えん}[以]{い}下 means 3,000 yen or less. To say “under 18”, without 18 itself, Japanese uses [未]{み}[満]{まん}: 十八[歳]{さい}[未]{み}[満]{まん}. [以]{い}上 also ends a speech, a report or a list of points: “that is all”.",
      {table:[["Phrase","Includes the number?","Meaning"],["十八[歳]{さい}[以]{い}上","yes","18 and over"],["十[二]{に}[歳]{さい}[以]{い}下","yes","12 and under"],["十八[歳]{さい}[未]{み}[満]{まん}","no","under 18 (17 and younger)"]]},
      "不 works like “un-” or “in-” in English: [不]{ふ}[便]{べん} (inconvenient), [不]{ふ}[安]{あん} (worried), [不]{ふ}[足]{そく} (shortage), [不]{ふ}[親]{しん}[切]{せつ} (unkind), [不]{ふ}[思]{し}[議]{ぎ} (strange, mysterious). 的 works at the other end of a word: 〜的 turns a noun into a [[na-adjective|な-adjective]], like “-ic” or “-al”: [具]{ぐ}[体]{たい}[的]{てき}な[例]{れい} (a concrete example)."
    ]},
    {h:"Things and food", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["物", "thing", "On ブツ, モツ · Kun もの", "[食]{た}べ[物]{もの} food · [動]{どう}[物]{ぶつ} animal · [荷]{に}[物]{もつ} luggage"], ["品", "goods, item", "On ヒン · Kun しな", "[品]{しな}[物]{もの} goods · [食]{しょく}[品]{ひん} food products · [作]{さく}[品]{ひん} work (of art)"], ["紙", "paper", "On シ · Kun かみ", "[紙]{かみ} paper · [手]{て}[紙]{がみ} letter · [和]{わ}[紙]{し} Japanese paper"], ["服", "clothes", "On フク", "[服]{ふく} clothes · [洋]{よう}[服]{ふく} (Western-style) clothes · [和]{わ}[服]{ふく} Japanese clothes"], ["茶", "tea", "On チャ, サ", "お[茶]{ちゃ} tea · [紅]{こう}[茶]{ちゃ} black tea · [喫]{きっ}[茶]{さ}[店]{てん} café"], ["飯", "cooked rice; meal", "On ハン · Kun めし", "ご[飯]{はん} rice; a meal · [夕]{ゆう}[飯]{はん} dinner · [飯]{めし} a meal (casual)"], ["肉", "meat", "On ニク", "[肉]{にく} meat · [牛]{ぎゅう}[肉]{にく} beef · [豚]{ぶた}[肉]{にく} pork"], ["音", "sound", "On オン, イン · Kun おと", "[音]{おと} sound · [音]{おん}[楽]{がく} music · [発]{はつ}[音]{おん} pronunciation"], ["画", "picture; stroke", "On ガ, カク", "[映]{えい}[画]{が} film · [計]{けい}[画]{かく} plan · [画]{かく}[数]{すう} number of strokes"], ["方", "direction; way; person (polite)", "On ホウ · Kun かた", "[方]{ほう} direction, side · [話]{はな}し[方]{かた} way of speaking · あの[方]{かた} that person (polite)"], ["度", "degree; time (occasion)", "On ド · Kun たび", "[今]{こん}[度]{ど} next time; this time · [一]{いち}[度]{ど} once · [何]{なん}[度]{ど} how many times"], ["事", "thing, matter", "On ジ · Kun こと", "[仕]{し}[事]{ごと} work · [食]{しょく}[事]{じ} meal · [大]{だい}[事]{じ} important"]]},
      "物 shows how one kanji can have three readings in three common words: 食べ[物]{もの} (もの, kun), [動]{どう}[物]{ぶつ} (ブツ, on), [荷]{に}[物]{もつ} (モツ, on). The word decides, so learn the words.",
      "方 has three jobs. [方]{ほう} is a direction or a side, and it is the 方 in comparisons: こちらの[方]{ほう}が[安]{やす}いです ([[comparison-yori]]). 〜[方]{かた} after a verb stem is “the way of doing”: 話し[方]{かた} (way of speaking), [使]{つか}い[方]{かた} (how to use). And [方]{かた} alone is a polite word for a person: あの[方]{かた}.",
      "事 (こと) and 物 (もの) are also grammar words, and then they are usually written in kana: [日本]{にほん}[語]{ご}を話すことができます ([[koto-ga-dekiru]]). Write them in kanji when they mean a real thing or matter."
    ]},
    {h:"Language and ideas", body:[
      {table:[["Kanji", "Meaning", "Main readings", "Common words"], ["意", "mind; meaning", "On イ", "[意]{い}[味]{み} meaning · [意]{い}[見]{けん} opinion · [注]{ちゅう}[意]{い} care, warning"], ["味", "taste", "On ミ · Kun あじ", "[味]{あじ} taste · [意]{い}[味]{み} meaning · [趣]{しゅ}[味]{み} hobby"], ["理", "reason, logic", "On リ", "[料]{りょう}[理]{り} cooking, dish · [理]{り}[由]{ゆう} reason · [無]{む}[理]{り} impossible, too much"], ["料", "fee; ingredients", "On リョウ", "[料]{りょう}[金]{きん} fee, charge · [無]{む}[料]{りょう} free of charge · [料]{りょう}[理]{り} cooking, dish"], ["質", "quality; ask (in [質]{しつ}[問]{もん})", "On シツ", "[質]{しつ}[問]{もん} question · [品]{ひん}[質]{しつ} quality (of a product)"], ["題", "title, topic", "On ダイ", "[問]{もん}[題]{だい} problem · [宿]{しゅく}[題]{だい} homework · [話]{わ}[題]{だい} topic of conversation"], ["文", "writing; sentence", "On ブン, モン · Kun ふみ", "[文]{ぶん} sentence · [文]{ぶん}[化]{か} culture · [注]{ちゅう}[文]{もん} order (in a shop)"], ["字", "character, letter", "On ジ", "[字]{じ} character, handwriting · [漢]{かん}[字]{じ} kanji · [文]{も}[字]{じ} letter, character"], ["漢", "China, Han", "On カン", "[漢]{かん}[字]{じ} kanji · [漢]{かん}語 word of Chinese origin"], ["英", "English; outstanding", "On エイ", "[英]{えい}語 English · [英]{えい}[会]{かい}[話]{わ} English conversation · [英]{えい}[雄]{ゆう} hero"], ["洋", "ocean; Western", "On ヨウ", "[洋]{よう}[服]{ふく} (Western-style) clothes · [西]{せい}[洋]{よう} the West · [太]{たい}[平]{へい}[洋]{よう} the Pacific Ocean"]]},
      "料 makes money words: [料]{りょう}金 (fee), [無]{む}[料]{りょう} (free of charge), [有]{ゆう}[料]{りょう} (not free), [送]{そう}[料]{りょう} (postage). On a sign, [無]{む}[料]{りょう} is the one you hope to see.",
      "洋 (Western) and [和]{わ} (Japanese) make useful pairs: [洋]{よう}[服]{ふく} and [和]{わ}[服]{ふく} (Western and Japanese clothes), [洋]{よう}[食]{しょく} and [和]{わ}[食]{しょく} (Western and Japanese food), [洋]{よう}[室]{しつ} and [和]{わ}[室]{しつ} (Western-style and Japanese-style rooms). And 漢 gives [漢]{かん}[字]{じ} and [漢]{かん}語, the words of Chinese origin that are usually read with on readings ([[kango]])."
    ]},
    {h:"One sound, different kanji", body:[
      "Japanese has a small set of sounds, so many words sound the same. These [[homophone|homophones]] are easy to tell apart in writing, because the kanji are different. In speech, the situation does most of the work.",
      {table:[["Sound","Words","Meanings"],["いがい","[以]{い}外 · [意]{い}外","except · unexpected"],["しりつ","[私]{し}[立]{りつ} · [市]{し}[立]{りつ}","private (school) · run by the city"],["かがく","[科]{か}[学]{がく} · [化]{か}学","science · chemistry"],["しゅうかん","[週]{しゅう}[間]{かん} · [習]{しゅう}[慣]{かん}","week(s) · habit"],["こうえん","[公]{こう}[園]{えん} · [講]{こう}[演]{えん}","park · lecture, talk"],["はやい","[早]{はや}い · [速]{はや}い","early · fast"],["たつ","[立]{た}つ · [建]{た}つ","stand · be built"],["うつる","[写]{うつ}る · [映]{うつ}る","appear (in a photo) · be reflected (in a mirror); be shown (on a screen)"],["あける","[開]{あ}ける · [空]{あ}ける · [明]{あ}ける","open (a door) · make empty, make free · (night) end; (a new year) begin"]]},
      "When the difference matters, Japanese speakers have tricks. They sometimes say わたくしりつ for [私]{し}[立]{りつ} and いちりつ for [市]{し}[立]{りつ}, using other readings of the same kanji, and ばけがく for [化]{か}学.",
      {ex:"[朝]{あさ}[早]{はや}く[起]{お}きます。 I get up early in the morning. (early: 早)\nこの[電]{でん}[車]{しゃ}は[速]{はや}いです。 This train is fast. (speed: [速]{はや})\n[窓]{まど}を[開]{あ}けてください。 Please open the window. (open: 開)\n金[曜]{よう}日の[午]{ご}[後]{ご}を[空]{あ}けておきます。 I’ll keep Friday afternoon free. (make free: 空)\n[夜]{よ}が[明]{あ}けました。 Day broke. (night ends: 明)", label:"Choosing the kanji"},
      {tip:"When you type Japanese, you type the reading and then choose the kanji from a list. Homophones are the main cause of wrong choices, called [誤]{ご}[変]{へん}[換]{かん}. Read your message once before you send it."}
    ]},
    {h:"One kanji, several readings", body:[
      "The opposite problem also exists: the same kanji spelling can have different readings, sometimes with different meanings. The sentence tells you which.",
      {table:[["Spelling","Readings","Meanings"],["人気","[人気]{にんき} · [人気]{ひとけ}","popularity · signs of people: [人気]{ひとけ}のない[道]{みち} is a deserted road"],["色紙","[色]{しき}[紙]{し} · [色]{いろ}[紙]{がみ}","a square card for autographs or poems · coloured paper"],["市場","[市]{いち}[場]{ば} · [市]{し}[場]{じょう}","a market you walk around (a fish market) · a market in economics (the job market)"],["止める","[止]{と}める · [止]{や}める","stop (a car, a machine) · stop doing, give up (usually written やめる)"],["開く","[開]{あ}く · [開]{ひら}く","(a door) opens · open (a book); hold (a party)"],["空いている","[空]{あ}いている · [空]{す}いている","free, vacant (a seat, a time) · not crowded (a train, a shop)"]]},
      {list:["**Look at the okurigana and the particles.** ドアが[開]{あ}く, but [会]{かい}を[開]{ひら}く.","**Look at what the word describes.** A seat is [空]{あ}いている (free); a train is usually [空]{す}いている (not crowded).","**When you can’t decide, look it up** with the whole phrase. Dictionaries list each reading with its own meaning."]},
      {key:"In writing, the kanji tell homophones apart. In reading, the context tells you which reading a kanji word has."},
      {lab:"kl-n4", t:"Practise: today’s N4 kanji review"}
    ]}
   ],
   try:[
    {id:"e3u8-l4-x1", type:"mcq", q:"A museum sign says: 「中学生[以]{い}下は[無]{む}[料]{りょう}です。」 Who gets in free?", options:[
      {t:"Junior high school students and anyone younger", ok:true, why:"Right. [以]{い}下 includes the group named: junior high school students and below."},
      {t:"Only children younger than junior high school age", why:"That would need a word that excludes the group itself. [以]{い}下 includes it."},
      {t:"Junior high school students and anyone older", why:"That would be [以]{い}上 (and above). [以]{い}下 is “and below”."},
      {t:"Only junior high school students", why:"[以]{い}下 adds everyone younger, too."}
    ]},
    {id:"e3u8-l4-x2", type:"match", q:"Match each word to its meaning.", pairs:[
      ["[不]{ふ}[便]{べん}","inconvenient","不 (not) + 便 (convenience)."],
      ["[不]{ふ}[安]{あん}","worried, anxious","不 (not) + 安 (calm): not at ease."],
      ["[特]{とく}[別]{べつ}","special","特 (special) + 別 (separate)."],
      ["[最]{さい}[近]{きん}","recently","最 (most) + 近 (near): the most recent time."],
      ["[同]{おな}じ","the same","同 is “same”: [同]{どう}時 is the same time."],
      ["[正]{ただ}しい","correct","正 is “correct”: [正]{せい}[解]{かい} is the right answer."]
    ]},
    {id:"e3u8-l4-x3", type:"sort", q:"Which あける fits each phrase?", buckets:["[開]{あ}ける: open","[空]{あ}ける: make empty, make free","[明]{あ}ける: (night) ends, (a year) begins"], items:[
      {t:"[窓]{まど}を＿ (the window)", b:0, why:"Opening a window: [開]{あ}ける."},
      {t:"[箱]{はこ}を＿ (a box)", b:0, why:"Opening a box: [開]{あ}ける."},
      {t:"[席]{せき}を＿ (free up a seat, make room)", b:1, why:"Making a seat free: [空]{あ}ける."},
      {t:"[家]{いえ}を＿ (be away from home)", b:1, why:"Leaving the house empty for a while: [空]{あ}ける."},
      {t:"[夜]{よ}が＿ (day breaks)", b:2, why:"The night ending: [明]{あ}ける, the kanji of brightness."},
      {t:"年が＿ (the new year begins)", b:2, why:"A new year beginning: [明]{あ}ける. You will hear [明]{あ}けましておめでとう (Happy New Year)."}
    ]},
    {id:"e3u8-l4-x4", type:"mcq", q:"Choose the kanji: 「[鏡]{かがみ}に[顔]{かお}が＿＿。」 (My face is reflected in the mirror.)", options:[
      {t:"[映]{うつ}ります", ok:true, why:"Right. [映]{うつ}る is to be reflected, in a mirror or on water, or to be shown on a screen."},
      {t:"[写]{うつ}ります", why:"[写]{うつ}る is to appear in a photo: [写]{しゃ}[真]{しん}に[写]{うつ}る. A mirror reflects, so [映]{うつ}る."},
      {t:"[移]{うつ}ります", why:"[移]{うつ}る is another うつる: to move to a new place. It has nothing to do with mirrors."},
      {t:"[建]{た}ちます", why:"[建]{た}つ is “be built”, and its reading is たつ, not うつる."}
    ]},
    {id:"e3u8-l4-x5", type:"mcq", q:"How is 人気 read in 「人気のある[歌]{か}[手]{しゅ}」 (a ___ singer)?", options:[
      {t:"にんき: a popular singer", ok:true, why:"Right. [人気]{にんき}がある, with にんき, means popular."},
      {t:"ひとけ: a singer with people around", why:"ひとけ is “signs of people”, used mostly about places: [人気]{ひとけ}のない[道]{みち} (a deserted road). It doesn’t describe a singer."},
      {t:"じんき: a singer with a local mood", why:"じんき is a rare word for the mood of a place. It doesn’t fit."},
      {t:"ひとき: a singer with energy", why:"ひとき is not a reading of 人気."}
    ]},
    {id:"e3u8-l4-x6", type:"mcq", q:"In which word is 物 read もつ? (No furigana: that is the question.)", options:[
      {t:"荷物 (luggage)", ok:true, why:"Right. [荷]{に}[物]{もつ} is にもつ: モツ is one of the on readings of 物."},
      {t:"動物 (animal)", why:"[動]{どう}[物]{ぶつ} is どうぶつ: 物 is ブツ here."},
      {t:"食べ物 (food)", why:"食べ[物]{もの} is たべもの: 物 is もの, its kun reading."},
      {t:"買い物 (shopping)", why:"[買]{か}い[物]{もの} is かいもの: もの again."}
    ]},
    {id:"e3u8-l4-x7", type:"spot", q:"Lina typed this message, and her phone chose two wrong kanji. Tap them.", ask:"wrong kanji", parts:[
      {t:"[来]{らい}[週]{しゅう}の[月]{げつ}[曜]{よう}日は、", flag:false, why:"Correct: next Monday."},
      {t:"[山]{やま}[田]{だ}さん", flag:false, why:"A name: correct."},
      {t:"[意]{い}外", flag:true, why:"Wrong kanji. She means “everyone except Ms Yamada”, which is [以]{い}外. [意]{い}外 means “unexpected”."},
      {t:"の人は[休]{やす}みです。", flag:false, why:"Correct: (everyone) else is off."},
      {t:"[駅]{えき}[前]{まえ}の", flag:false, why:"Correct: in front of the station."},
      {t:"[講]{こう}[演]{えん}", flag:true, why:"Wrong kanji. A place in front of the station where people meet is a park, [公]{こう}[園]{えん}. [講]{こう}[演]{えん} is a lecture, not a place."},
      {t:"で[会]{あ}いましょう。", flag:false, why:"Correct: let’s meet."}
    ]},
    {id:"e3u8-l4-x8", type:"mcq", q:"On a train, you point to a seat and ask: 「この[席]{せき}、空いていますか。」 How is 空いて read here?", options:[
      {t:"あいて: Is this seat free?", ok:true, why:"Right. A seat, a room or a time that is free is [空]{あ}いている, read あいている."},
      {t:"すいて: Is this seat not crowded?", why:"すく (not crowded) describes a train, a shop or a road with few people. One seat can’t be crowded."},
      {t:"そらいて", why:"そら is the noun “sky”. It isn’t a verb reading of 空."},
      {t:"からいて", why:"から is the noun “empty” ([空]{から}の[箱]{はこ}). The verb here is あく."}
    ]}
   ],
   apply:{
    intro:"Make the sound-alikes and the many-reading kanji your own. Paper, a notes app and your Japanese keyboard from Unit 1 are all you need.",
    tasks:[
     {t:"Start a homophone notebook", how:[
       "Choose five sets from the tables in this lesson.",
       "For each set, write one short sentence for each kanji: [朝]{あさ}[早]{はや}く[起]{お}きます。/ 電車が[速]{はや}いです。",
       "Add a new set whenever you meet one. Review the page once a week."
     ], write:"Set 1… Set 2… Set 3… Set 4… Set 5…"},
     {t:"Type it and choose the kanji", how:[
       "Switch on the Japanese keyboard you added in Unit 1.",
       "Type いがい, こうえん, しりつ and はやい. Look at the list of kanji your keyboard offers for each (on a computer, press the space bar; on a phone, look at the row above the keyboard).",
       "Write one correct sentence for two of the kanji choices of each word, and check them against this lesson."
     ], write:"いがい: … こうえん: … しりつ: … はやい: …"},
     {t:"Describe things around you", how:[
       "Choose five objects or places near you and describe each with an adjective from this lesson: この[部屋]{へや}は[明]{あか}るいです。",
       "Use at least one opposite pair, one word with 不 and one with [以]{い}上 or [以]{い}下."
     ], write:"1 … 2 … 3 … 4 … 5 …"}
    ],
    proof:"A homophone notebook with five sets, typed sentences that choose the right kanji, and five descriptions using this lesson’s adjectives."},
   read:[
    {book:"irodori", where:"Elementary 1, Lessons 11 “I will bring meat and vegetables.” and 12 “Your bento looks delicious.”", note:"Food words and describing things."},
    {book:"irodori", where:"Elementary 1, Lesson 2 “I like playing video games.”", note:"Hobbies ([趣]{しゅ}[味]{み}) and likes."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  
  {id:"e3u8-l5", title:"Reading N4 texts, dictionaries, the JLPT N4 and your plan", minutes:60,
   hook:{q:"A medicine box says: 「1[日]{にち}3[回]{かい}、[食]{しょく}[後]{ご}に[飲]{の}んでください。」 When do you take it?", options:["Three times a day, after meals","Three times a day, before meals","Once a day, for three days","Once every three days"], answer:0,
     reveal:"**Three times a day, after meals.** 1日 is “per day”, 3回 is “three times”, and 食後 is 食 (eat) + 後 (after). Instructions like this are typical N4 reading: short, full of set phrases, numbers and kanji you know. This lesson gives you a strategy for notices, emails, stories and instructions, shows how to look up what you can’t read, and ends with the JLPT N4 and a study plan."},
   goals:[
     "Look up a word or kanji by reading, handwriting, parts or copy and paste, and read the dictionary entry well",
     "Read an N4 text in two passes: first for the gist, then for the details you need",
     "Read a notice, an email and its reply, a short story and a medicine label",
     "Describe the JLPT N4 sections, item types and scoring",
     "Plan daily N4 review in the Kanji Lab, with reading at your level"
   ],
   learn:[
    {h:"Looking up what you can’t read", body:[
      {lead:"Real texts always contain words you don’t know. The skill is not knowing every word: it is finding the important ones quickly."},
      "There are four ways to look something up, and each fits a different moment ([[dictionary-lookup]]).",
      {table:[["Method","Use it when","How"],["By reading","you can say the word","Type it in kana. Jisho.org ([[jisho-tool]]) also accepts romaji."],["By handwriting","you can see a kanji but can’t read it","Draw it in a dictionary’s handwriting box or on a handwriting keyboard. The standard stroke order gives the best results."],["By parts","handwriting fails, or the kanji is complicated","Choose the parts you can see from a list, such as Jisho.org’s radical search. The list narrows to the kanji that contain them."],["Copy and paste","the text is on a screen","Paste the word into a dictionary. On a computer, a pop-up reader such as 10ten Japanese Reader or Yomitan shows the reading when you point at a word."]]},
      "Before you look up a verb or an adjective, take it back to its [[dictionary-form]]: [待]{ま}っていた → [待]{ま}つ, [起]{お}きられない → [起]{お}きる, [高]{たか}くなかった → 高い. Some tools do this for you, but if you know the form yourself, you can always check.",
      "When the entry appears, read it like this:",
      {ol:["**Check the match.** Are the kanji and the reading the same as in your text? Some spellings have several readings (Lesson 4).","**Read all the meanings**, and choose the one that fits your sentence, not just the first one.","**Look at the tags.** Common word or rare? Noun, verb or adjective? Does it take する? Is it usually written in kana?","**Read an example sentence.** It shows the particles the word takes: [電]{でん}[車]{しゃ}に[乗]{の}る, not 電車を[乗]{の}る."]},
      {tip:"Some dictionaries, such as Jisho.org, show a JLPT level on many words. Like every N4 list, these levels are unofficial estimates, so treat them as a guide."},
      {warn:"Camera translation and machine translation give you a quick idea of a sign, but they can get readings, names and polite meanings wrong. For learning, use them as a first look, then check the words that matter in a dictionary ({{japanese-reading-tools}})."}
    ]},
    {h:"A strategy for N4 texts: two passes", body:[
      "Unit 4 gave you five steps for short texts ({{reading-n5-texts}}). N4 texts are longer, so add one idea: read in two passes. First [[reading-for-gist|read for the gist]], the main idea; then go back for the details the question asks about.",
      {fig:'<svg viewBox="0 0 340 336"><text x="170" y="18" text-anchor="middle">Read an N4 text in two passes</text><defs><marker id="u8a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-panel" x="6" y="30" width="328" height="56" rx="8" stroke-width="1.5"/><text x="18" y="52">Before: read the question</text><text class="s" x="18" y="72">What kind of text is it? What do I need?</text><path class="d-ink" d="M170 88 V102" stroke-width="2" marker-end="url(#u8a)"/><rect class="d-lup" x="6" y="106" width="328" height="70" rx="8" stroke-width="1.5"/><text x="18" y="128">Pass 1: the gist</text><text class="s" x="18" y="148">Title, first sentence, last sentence</text><text class="s" x="18" y="166">Skip words you don’t know</text><path class="d-ink" d="M170 178 V192" stroke-width="2" marker-end="url(#u8a)"/><rect class="d-sage" x="6" y="196" width="328" height="70" rx="8" stroke-width="1.5"/><text x="18" y="218">Pass 2: the details</text><text class="s" x="18" y="238">Scan for numbers, times, names, 以上, 以下</text><text class="s" x="18" y="256">Check each sentence ending</text><path class="d-ink" d="M170 268 V282" stroke-width="2" marker-end="url(#u8a)"/><rect class="d-panel" x="6" y="286" width="328" height="42" rx="8" stroke-width="1.5"/><text x="18" y="312">Answer, then find the proof in the text</text></svg>', alt:"A flow of four boxes. Before: read the question; what kind of text is it and what do I need? Pass 1, the gist: title, first sentence, last sentence; skip words you don’t know. Pass 2, the details: scan for numbers, times, names, 以上 and 以下; check each sentence ending. Finally: answer, then find the proof in the text.", cap:"Most mistakes come from answering after pass 1. The details, and the endings, decide the answer."},
      "Sentence endings matter even more at N4, because they carry the grammar of Units 5–7. These are the ones that change what a notice or an email asks you to do:",
      {table:[["Ending","Meaning","Example"],["〜てください","please do","[入]{いり}[口]{ぐち}で[待]{ま}ってください。"],["〜ないでください","please don’t","ここで[写]{しゃ}[真]{しん}を[撮]{と}らないでください。"],["〜てはいけません","you must not","[中]{なか}で食べてはいけません。"],["〜なければなりません","you must ([[nakereba-naranai]])","[名]{な}[前]{まえ}を[書]{か}かなければなりません。"],["〜てもいいです","you may","[鉛]{えん}[筆]{ぴつ}で書いてもいいです。"],["〜なくてもいいです","you don’t have to","[予]{よ}[約]{やく}しなくてもいいです。"]]},
      "Connecting words show how the ideas fit together: それで and だから (so), でも (but), それから (and then), たとえば (for example), and 〜ので or 〜から after a reason. When you see でも, the important part usually comes next."
    ]},
    {h:"A notice: the pool rules", body:[
      "Notices are for scanning: you rarely read every word. Read the question first, then look for the line that answers it.",
      {ex:"みどり[市]{し}スポーツセンター　プールのご[利]{り}[用]{よう}について\n・[利]{り}[用]{よう}[時]{じ}[間]{かん}：[午]{ご}前9時～午後8時（[月]{げつ}[曜]{よう}日は[休]{きゅう}[館]{かん}日です）\n・[料]{りょう}[金]{きん}：[大人]{おとな}400[円]{えん}、[中]{ちゅう}[学]{がく}[生]{せい}[以]{い}[下]{か}200円。65[歳]{さい}[以]{い}[上]{じょう}の[方]{かた}は[無]{む}[料]{りょう}です。\n・[小]{しょう}学生[以]{い}下のお[子]{こ}さんは、大人といっしょに入ってください。\n・プールの中で食べたり[飲]{の}んだりしないでください。\n・[毎]{まい}[月]{つき}[第]{だい}[一]{いち}日[曜]{よう}日の午前は、子ども[水]{すい}[泳]{えい}[教]{きょう}[室]{しつ}のため、[使]{つか}えません。", label:"A notice at a sports centre"},
      {list:["**When is the pool closed?** On Mondays (休[館]{かん}日: closing day), and on the first Sunday morning of every month, because of a children’s swimming class (〜のため: because of).","**How much does it cost?** Adults 400 yen; junior high school students and younger 200 yen; people aged 65 and over are free. [以]{い}上 and [以]{い}下 include the number (Lesson 4).","**Can a primary school child swim alone?** No: 〜てください asks them to come in with an adult.","**What is not allowed?** Eating and drinking in the pool: 〜たり〜たりしないでください."]},
      "Strategy check: to answer “How much for a 70-year-old?”, you only needed the line with [料]{りょう}金 and the word [以]{い}上. You didn’t need [第]{だい}一 or 水[泳]{えい} for that question."
    ]},
    {h:"An email and a reply", body:[
      "Min, a student at a Japanese school, writes to his teacher. The shape is the one from Unit 4: subject, name, who I am, message, closing.",
      {ex:"[件]{けん}[名]{めい}：[来]{らい}[週]{しゅう}の[授]{じゅ}[業]{ぎょう}について\n\n[山]{やま}[下]{した}[先]{せん}生\n\nこんにちは。[火]{か}[曜]{よう}日のクラスのミン・ジュンです。\n来[週]{しゅう}の火[曜]{よう}日は、[仕]{し}[事]{ごと}で[出]{しゅっ}[張]{ちょう}があるので、[授]{じゅ}[業]{ぎょう}を休みます。すみません。\n[宿]{しゅく}[題]{だい}は月[曜]{よう}日までにメールで[送]{おく}ってもいいですか。\n\nよろしくお[願]{ねが}いします。\nミン・ジュン", label:"Min’s email"},
      {ex:"[件]{けん}名：Re: 来[週]{しゅう}の[授]{じゅ}[業]{ぎょう}について\n\nミンさん\n\nメールをありがとうございます。わかりました。[宿]{しゅく}[題]{だい}は月[曜]{よう}日までに[送]{おく}ってください。\n[次]{つぎ}の[授]{じゅ}[業]{ぎょう}では[第]{だい}5[課]{か}の[会]{かい}[話]{わ}を[練]{れん}[習]{しゅう}しますから、[読]{よ}んでおいてください。\nお[仕]{し}[事]{ごと}、がんばってください。\n\n山下", label:"The teacher’s reply"},
      {table:[["Part","In the emails","What it does"],["Reason","出[張]{ちょう}があるので","〜ので gives a polite reason before the main point"],["Asking permission","[送]{おく}ってもいいですか","〜てもいいですか: may I…?"],["The answer","[送]{おく}ってください","The teacher says yes with a request"],["Getting ready","読んでおいてください","〜ておく: do something in advance ([[te-oku]])"],["Kind words","お[仕]{し}[事]{ごと}、がんばってください","A friendly closing: good luck with your work"]]},
      "Questions to try: Why will Min miss class? (He has a business trip, 出[張]{ちょう}, for work.) What does he ask? (Whether he may send his homework by email by Monday.) What should he do before the next class? (Read the conversation in Lesson 5, [第]{だい}5[課]{か}.)"
    ]},
    {h:"A short story", body:[
      "Stories at N4 are often written in the plain form ([[plain-form]], Unit 5), with past tense for the events. Read it once for the gist: who, where, what happened. Then read again for the details.",
      {ex:"アナは先月、[新]{あたら}しい[町]{まち}に[引]{ひ}っ[越]{こ}した。[会]{かい}[社]{しゃ}まで電車で[三]{さん}[十]{じゅっ}[分]{ぷん}かかる。\nある日[曜]{よう}日の[朝]{あさ}、アナは[町]{まち}のことを[知]{し}りたいと[思]{おも}って、[地]{ち}[図]{ず}を[持]{も}たないで[散]{さん}[歩]{ぽ}に出かけた。[古]{ふる}い[店]{みせ}や小さい[神]{じん}[社]{じゃ}があって、とても[楽]{たの}しかった。でも、一時間ぐらい[歩]{ある}いて、[帰]{かえ}り[道]{みち}が分からなくなってしまった。\nアナが[困]{こま}っていると、[犬]{いぬ}を[連]{つ}れた[男]{おとこ}の人が「どうしましたか」と[声]{こえ}をかけてくれた。男の人は[駅]{えき}までいっしょに[歩]{ある}いて、[近]{ちか}くのおいしいパン[屋]{や}も[教]{おし}えてくれた。\n[次]{つぎ}の[週]{しゅう}[末]{まつ}、アナはそのパン[屋]{や}に[行]{い}った。[店]{みせ}に入ると、あの男の人がいた。パン[屋]{や}の[主]{しゅ}人だったのだ。", label:"The new town"},
      {list:["**Gist:** Ana moved to a new town, got lost on a walk, and a man with a dog helped her.","**Why did she go for a walk without a map?** She wanted to get to know the town: [町]{まち}のことを[知]{し}りたいと[思]{おも}って.","**What went wrong?** After about an hour she couldn’t find the way back: 〜てしまった shows it was a problem ([[te-shimau]]).","**The surprise at the end:** the man was the owner of the bakery. 〜のだ explains what she suddenly understood ({{explaining-n-desu}})."]},
      {tip:"でも in the second paragraph is the turning point of the story. In stories and in JLPT passages, the sentence after でも or しかし is often the one the question is about."}
    ]},
    {h:"Instructions: a medicine label", body:[
      "Instructions use short set phrases, numbers and a few endings. Here is the kind of text you find with medicine from a pharmacy.",
      {ex:"【[飲]{の}み[方]{かた}】\n1日3[回]{かい}、食後に1[回]{かい}2[錠]{じょう}を水かお[湯]{ゆ}で[飲]{の}んでください。\n【[注]{ちゅう}[意]{い}】\n・15[歳]{さい}[未]{み}[満]{まん}の[方]{かた}は[飲]{の}まないでください。\n・この[薬]{くすり}を[飲]{の}んだ後は、車の[運]{うん}[転]{てん}をしないでください。\n・[3日]{みっか}[飲]{の}んでもよくならないときは、[医]{い}[者]{しゃ}に[相]{そう}[談]{だん}してください。", label:"How to take the medicine"},
      {list:["**How much, and when?** Two tablets ([錠]{じょう}) at a time, three times a day, after meals, with water or hot water.","**Who must not take it?** Anyone under 15: [未]{み}[満]{まん} does **not** include 15 itself, so a 15-year-old may take it.","**What should you avoid after taking it?** Driving: [運]{うん}[転]{てん}をしないでください.","**When should you see a doctor?** If you are no better after taking it for three days: 〜ても (even if) + よくならない (doesn’t get better)."]},
      {warn:"This is a learning example, not medical advice. Always follow the instructions on your own medicine and ask a pharmacist when you are unsure. Some real labels and leaflets write rules with 〜こと instead, as in [飲]{の}まないこと (do not take), which means the same as 〜ないでください here."}
    ]},
    {h:"The JLPT N4", body:[
      "The [[jlpt-n4|N4]] test checks “the ability to understand basic Japanese” ({{jlpt-overview}}). It has three sections, and the times below are the current ones on jlpt.jp (the first two changed from the December 2020 test):",
      {table:[["Section","Time","Item types"],["Language Knowledge (Vocabulary)","25 min","Kanji reading · Orthography (choosing the kanji) · Contextually-defined expressions · Paraphrases · Usage"],["Language Knowledge (Grammar) · Reading","55 min","Sentential grammar 1 (choosing the grammar form) and 2 (sentence composition) · Text grammar · Comprehension (short and mid-size passages) · Information retrieval"],["Listening","35 min","Task-based comprehension · Comprehension of key points · Verbal expressions · Quick response"]]},
      "The reading items are the kinds of texts in this lesson. The official guide describes short passages of about 100–200 characters on study, daily life and work, a mid-size passage of about 450 characters, and information retrieval from a notice of about 400 characters.",
      {list:["**Scoring.** Two scoring sections: Language Knowledge (Vocabulary/Grammar) and Reading together, 0–120 points, and Listening, 0–60. The pass mark is 90 out of 180, and you also need at least 38 in the first section and 19 in Listening.","**Kanji in the test.** Kanji reading asks for the reading of an underlined word; orthography asks you to choose the right kanji for a word in hiragana. Both use exactly the skills of Lessons 1–4.","**CEFR.** Since the December 2025 test, the score reports of people who pass N4 also show the CEFR level A2 as reference information. It covers only reading and listening, the skills the test measures.","**Dates.** The JLPT is held in July and December, but some places hold only one of the two. Apply through the host institution listed on [jlpt.jp](https://www.jlpt.jp/e/), and check the dates and deadlines there for your own test."]},
      {tip:"On jlpt.jp, “Let’s Try Sample Questions!” has one free sample question for each item type at every level. Try the N4 set when you finish this unit, to see the question formats."}
    ]},
    {h:"Your N4 study plan with the Kanji Lab", body:[
      "The plan from Unit 4 still works: a little every day, honest answers, and some real reading. At N4 there is simply more to review, so keep the daily habit small enough to keep.",
      {table:[["When","What","Time"],["Every day","Kanji Lab: the N4 kanji deck, then the N4 words deck","10–20 min"],["Every day","Read something short: a notice, a message, a page of a graded reader","5–10 min"],["Twice a week","Write five kanji by hand in words; practise one look-alike set","10 min"],["Once a week","Read one longer text (a story or an email) in two passes","15 min"],["Before the test","The official sample questions on jlpt.jp","1 hour"]]},
      "**How the Lab’s N4 decks work.** The N4 kanji deck has 167 cards and the N4 words deck has 697. Each day a deck shows the cards that are due, then a few new ones (5, 10 or 20 a day, as you choose; 10 is the default). New kanji come in the deck’s own order, which starts with simple, common kanji such as 力, 口, 字 and 手, not in the groups of these lessons; meeting them in two orders helps. A new kanji card asks for its meaning; on later reviews it alternates between its meaning and one of its main readings. Word cards alternate between “How do you read this word?” and “Which word has this reading and meaning?”, where you pick the word that matches a reading and a meaning (words written only in kana ask for the meaning). After you answer, the full card shows everything: for a kanji, its meanings, on and kun readings and example words with furigana; for a word, its reading, meanings and tags such as “takes する”.",
      "Then you rate the card. **Again** brings it back tomorrow, and once more at the end of today’s session; **Good** moves it up one box; **Easy** skips a box. The boxes come back after 1, 3, 7, 14 and 30 days. If you don’t know a card at all, tap “I don’t know: show me” instead of guessing. Your progress is saved in this browser only, and the backup and “Erase all progress” in Progress on the desk include it.",
      {list:["**At 10 new kanji a day, you meet all 167 N4 kanji in 17 days.** The words deck takes about ten weeks at the same pace. Reviews grow as you add cards, so don’t raise the number if your daily reviews already feel heavy.","**Finished today’s cards?** The deck offers “Learn 5 more new cards now”. Use it on good days only.","**Missed a few days?** Due cards wait for you, and each session shows them before any new cards. Do the reviews first and stop there if there are many."]},
      "**Free reading at your level.** The [[graded-reader|graded readers]] from NPO[多]{た}[言]{げん}[語]{ご}[多]{た}読 (Tadoku) that you met in Unit 4 have higher levels too; move up a level when a book feels easy ({{n4-study-plan}}). The Japan Foundation’s free [*IRODORI*](https://www.irodori.jpf.go.jp/en/index.html) course continues with Elementary 1 and 2 (A2), which matches this stage.",
      {key:"Forgetting is part of learning. Press Again without guilt, come back tomorrow, and the kanji will stay."},
      {lab:"kl-n4", t:"Practise: today’s N4 kanji review"},
      {lab:"kl-n4-vocab", t:"Practise: today’s N4 words review"}
    ]}
   ],
   try:[
    {id:"e3u8-l5-x1", type:"order", q:"You read 「[駅]{えき}で[友]{とも}だちを待っていた。」 and don’t know 待. Put the steps for looking it up in order.", items:[
      {t:"Find the word you don’t know and where it ends: 待っていた (待 + っていた)", why:"First pick out the unknown word, so you know exactly what to look up."},
      {t:"Draw 待 in a handwriting box, or pick its parts (彳 and 寺)", why:"You can’t read 待 yet, so search by its shape."},
      {t:"Choose the entry for the dictionary form, with matching kanji and reading: [待]{ま}つ (まつ)", why:"Dictionaries list verbs in the dictionary form (待っていた → 待つ). Check that the spelling matches your text before you trust the meaning."},
      {t:"Choose the meaning that fits the sentence: “I was waiting for my friend at the station”", why:"Read all the meanings and pick the one that makes sense in context."}
    ]},
    {id:"e3u8-l5-x2", type:"number", q:"At the sports centre pool, Ana (35) comes with her son (10) and her mother (70). Using the notice, how much do they pay in total?", answer:600, tol:0, unit:"yen", why:"Ana pays the adult price, 400 yen. Her son is a primary school student, so 中学生[以]{い}下 applies: 200 yen. Her mother is 65 or over: [無]{む}[料]{りょう}, free. 400 + 200 + 0 = 600 yen.", wrongs:[
      {v:1000, tol:0, why:"You charged Ana’s mother the adult price. 65[歳]{さい}[以]{い}上 is free."},
      {v:800, tol:0, why:"Check each person once: Ana 400, her son 200 (中学生[以]{い}下), her mother 0 (65 and over)."}
    ], hint2:"Find the [料]{りょう}金 line, then decide which price applies to each person."},
    {id:"e3u8-l5-x3", type:"mcq", q:"An 8-year-old wants to swim at the pool alone. According to the notice, can she?", options:[
      {t:"No: primary school children and younger must come in with an adult", ok:true, why:"Right. 小学生[以]{い}下のお子さんは、大人といっしょに入ってください. An 8-year-old is a primary school student."},
      {t:"Yes, if she pays 200 yen", why:"The price is 200 yen, but the rule about coming in with an adult still applies."},
      {t:"Yes, except on Mondays", why:"Mondays are the closing day for everyone. The adult rule is a separate line."},
      {t:"No: children can only swim on the first Sunday of the month", why:"The first Sunday morning is when the pool is closed to the public for a class."}
    ]},
    {id:"e3u8-l5-x4", type:"mcq", q:"Why does Min write to his teacher?", options:[
      {t:"To say he will miss next Tuesday’s class for a business trip, and to ask if he may email his homework", ok:true, why:"Right. 〜ので gives the reason (出[張]{ちょう}), and 〜てもいいですか asks permission."},
      {t:"To ask the teacher to move the class to Monday", why:"月[曜]{よう}日 is the homework deadline he suggests, not a new class day."},
      {t:"To say he can’t do the homework", why:"He plans to send the homework by email; he isn’t refusing it."},
      {t:"To ask which lesson to read", why:"The teacher tells him to read Lesson 5 in the reply, but Min didn’t ask about it."}
    ]},
    {id:"e3u8-l5-x5", type:"mcq", q:"In the story, who was the man with the dog?", options:[
      {t:"The owner of the bakery", ok:true, why:"Right. パン[屋]{や}の[主]{しゅ}人だったのだ: he was the bakery’s owner. 〜のだ explains the surprise."},
      {t:"A station employee", why:"He walked with Ana to the station, but the text doesn’t say he worked there."},
      {t:"Ana’s new colleague", why:"The text doesn’t connect him with Ana’s company."},
      {t:"A customer at the bakery", why:"He was in the shop, but the last sentence says he was its [主]{しゅ}人, the owner."}
    ]},
    {id:"e3u8-l5-x6", type:"mcq", q:"Leo is exactly 15. The medicine label says 「15[歳]{さい}[未]{み}[満]{まん}の[方]{かた}は[飲]{の}まないでください。」 May he take it?", options:[
      {t:"Yes: [未]{み}[満]{まん} means “under”, so 15 itself is not included", ok:true, why:"Right. 15[歳]{さい}[未]{み}[満]{まん} is 14 and younger. With [以]{い}下 it would include 15."},
      {t:"No: [未]{み}[満]{まん} includes 15", why:"That is [以]{い}下 (15 and under). [未]{み}[満]{まん} is “less than”, without the number itself."},
      {t:"No: [未]{み}[満]{まん} means “over”", why:"Over 15 would be [以]{い}上 (15 and over). [未]{み}[満]{まん} is “under”."},
      {t:"Only after meals", why:"After meals is when to take it, not who may take it."}
    ]},
    {id:"e3u8-l5-x7", type:"sort", q:"In which section of the JLPT N4 is each item type?", buckets:["Vocabulary (25 min)","Grammar · Reading (55 min)","Listening (35 min)"], items:[
      {t:"Kanji reading", b:0, why:"Kanji reading is the first item in Language Knowledge (Vocabulary)."},
      {t:"Orthography (choosing the kanji)", b:0, why:"Orthography is in Vocabulary."},
      {t:"Paraphrases", b:0, why:"Paraphrases (words with similar meanings) are in Vocabulary."},
      {t:"Sentential grammar", b:1, why:"Both sentential grammar items are in the Grammar · Reading section."},
      {t:"Information retrieval", b:1, why:"Finding information in a notice is part of Reading."},
      {t:"Text grammar", b:1, why:"Text grammar is in the Grammar · Reading section."},
      {t:"Quick response", b:2, why:"Choosing a reply to a short utterance is in Listening."},
      {t:"Task-based comprehension", b:2, why:"Deciding what to do from a conversation is in Listening."}
    ]},
    {id:"e3u8-l5-x8", type:"number", q:"The Kanji Lab’s N4 kanji deck has 167 cards. At 10 new cards a day, on which day do you meet the last new card?", answer:17, tol:0, unit:"days", why:"167 ÷ 10 = 16.7. Sixteen days give you 160 cards, and the last 7 come on day 17.", wrongs:[
      {v:16, tol:0, why:"After 16 days you have met 160 cards; the last 7 come on the 17th day. Round up, not down."},
      {v:34, tol:0, why:"That would be the pace at 5 new cards a day (167 ÷ 5 = 33.4, so day 34). At 10 a day it is 17."}
    ], hint2:"Divide 167 by 10, then think about the leftover cards."}
   ],
   apply:{
    intro:"Use the strategy and the tools on real Japanese, and set a plan you can keep.",
    tasks:[
     {t:"Look up five words three ways", how:[
       "Find five words you don’t know in a real Japanese text (a website, a product package, a graded reader).",
       "Look up each one by reading if you can, by handwriting, and by parts. Use Jisho.org or another dictionary you trust.",
       "Note which method was fastest for each word, and what the dictionary’s tags told you."
     ], write:"Word… how I found it… the meaning that fits… tags…"},
     {t:"Read a real notice or set of instructions", how:[
       "Find a Japanese notice, a timetable or the instructions on a product (a photo or a website is fine).",
       "Write the question you want answered first, then read in two passes: gist, then details.",
       "Write what it says in English, and underline every N4 kanji you recognised."
     ], write:"My question… the gist… the details… N4 kanji I knew…"},
     {t:"Write an email like Min’s", how:[
       "Write a short email to a teacher or a colleague (real or imaginary) saying you will miss something, with a reason using 〜ので.",
       "Ask permission for one thing with 〜てもいいですか, and finish with よろしくお[願]{ねが}いします.",
       "Check the shape: subject, name, who you are, message, closing, your name."
     ], write:"[件]{けん}名：… 〇〇先生 …"},
     {t:"Try the N4 sample questions and set your plan", how:[
       "On jlpt.jp, open “Let’s Try Sample Questions!” and choose N4. Try the vocabulary and reading items first.",
       "Choose your daily time and your new cards a day in the Kanji Lab (N4 kanji, then N4 words).",
       "After one week, write how many days you managed, and adjust the plan."
     ], write:"Sample questions: easy… hard… My time… my decks… after one week…"}
    ],
    proof:"Five words looked up with notes on each method, one real text read in two passes, a short email with a reason and a request, notes on the official N4 samples, and a written study plan with your first week’s result."},
   read:[
    {book:"irodori", where:"Elementary 1, Lesson 7 “I will be a bit late because I got lost.”", note:"Getting lost and asking for help, like Ana in the story."},
    {book:"irodori", where:"Elementary 1, Lesson 14 “May I take a day off?”", note:"Asking permission and giving reasons at work, like Min’s email."}
   ]
  }
  ],
  checkpoint:["e3u8-q02","e3u8-q05","e3u8-q07","e3u8-q12","e3u8-q15","e3u8-q20","e3u8-q24","e3u8-q29","e3u8-q31","e3u8-q38","e3u8-q41","e3u8-q43"],
  codex:[
   {id:"n4-kanji", title:"The N4 kanji", aka:["JLPT N4 kanji","N4 kanji list","167 kanji"], tags:["japanese","kanji","jlpt","n4"],
    summary:"The 167 kanji that common JLPT N4 lists add to the 80 N5 kanji, grouped by meaning, with how they build on what you know.",
    levels:{
     starter:[
      
      "Common JLPT N4 lists add about 170 kanji to the 80 of N5. The list used in this course and its Kanji Lab has exactly 167, so at N4 you know about 250 kanji in all. With them you can read short, everyday texts: notices, messages, simple stories and instructions.",
      "They are friendly kanji. Most are taught in the first three years of Japanese primary school, and many write words you can already say in Japanese: [私]{わたし}, [家]{いえ}, [駅]{えき}, [魚]{さかな}, [映]{えい}[画]{が}. Learning the kanji for a word you know is the fastest kind of kanji study.",
      "Learn them in groups of meaning (people, time, town, actions, descriptions), through words rather than alone, and with their parts: many N4 kanji are an N5 kanji plus a part such as 亻 (person) or 氵 (water) ({{kanji-by-component}}).",
      "The JLPT itself has published no official kanji list since 2010, so other lists differ by a few kanji ({{jlpt-overview}}).",
      {key:"Learn N4 kanji in meaning groups, through words, and review them a little every day."}
     ],
     builder:[
      
      {table:[["Group","Kanji and core meanings"],["People, family","私 I · 自 self · 者 person (in words) · 員 member · 主 main · 兄 older brother · 弟 younger brother · 姉 older sister · 妹 younger sister · 親 parent · 族 family · 家 house"],["Body, health","体 body · 心 heart · 手 hand · 足 foot · 口 mouth · 目 eye · 力 power · 医 medicine · 病 illness · 死 death"],["Seasons, times of day","春 spring · 夏 summer · 秋 autumn · 冬 winter · 朝 morning · 昼 noon · 夕 evening · 夜 night"],["Calendar, eras, world","曜 day of the week · 週 week · 早 early · 世 world · 界 world · 代 generation · 元 origin · 去 leave"],["Nature","空 sky · 海 sea · 風 wind · 野 field · 田 rice field · 地 ground · 花 flower"],["Colours, animals","赤 red · 青 blue · 黒 black · 色 colour · 犬 dog · 牛 cow · 鳥 bird · 魚 fish"],["Places in town","町 town · 京 capital · 駅 station · 道 road · 店 shop · 屋 shop · 場 place · 図 drawing · 台 stand · 銀 silver"],["Buildings, work","室 room · 館 large building · 院 institution · 堂 hall · 社 company · 会 meet · 公 public · 工 craft · 仕 serve · 業 business"],["Thinking, studying","言 say · 思 think · 考 think · 知 know · 教 teach · 習 learn · 勉 effort · 研 polish · 究 research · 答 answer · 問 question · 試 try · 験 test"],["Moving, stopping","始 begin · 終 end · 起 get up · 帰 return home · 走 run · 歩 walk · 動 move · 運 carry · 転 roll · 送 send · 通 pass through · 急 hurry · 止 stop · 旅 travel"],["Hands and things","着 wear · 持 hold · 待 wait · 使 use · 借 borrow · 貸 lend · 写 copy · 映 reflect · 売 sell · 買 buy · 作 make · 開 open · 集 gather"],["Home, food, plans","住 live (somewhere) · 切 cut · 立 stand · 飲 drink · 歌 song · 用 use · 注 pour · 建 build · 発 depart · 計 measure · 有 have"],["Size, amount, feeling","新 new · 古 old · 多 many · 少 few · 強 strong · 重 heavy · 広 wide · 近 near · 明 bright · 楽 fun"],["Judging, comparing","安 cheap · 悪 bad · 正 correct · 同 same · 真 true · 特 special · 別 separate · 不 not · 以 from (a point) · 的 target"],["Things, food","物 thing · 品 goods · 紙 paper · 服 clothes · 茶 tea · 飯 cooked rice · 肉 meat · 音 sound · 画 picture · 方 direction · 度 degree · 事 thing"],["Language, ideas","意 mind · 味 taste · 理 reason · 料 fee · 質 quality · 題 title · 文 writing · 字 character · 漢 China · 英 English · 洋 ocean"]]},
      "Each kanji’s main readings and two or three common words are in Lessons 1–4 of Japanese Foundations Unit 8. Special readings to know at N4 include ★[今朝]{けさ} (this morning), [七夕]{たなばた} (the Star Festival), [田舎]{いなか} (the countryside), [景色]{けしき} (scenery), [部屋]{へや} (room), [時計]{とけい} (clock) and [明日]{あした} (tomorrow), and the family words お[兄]{にい}さん and お[姉]{ねえ}さん."
     ],
     pro:[
      
      "**Numbers.** In the KANJIDIC dictionary data, 150 of the 167 are taught in grades 1–3 of Japanese primary school (19 in grade 1, 73 in grade 2, 58 in grade 3) and the other 17 in grades 4–6. Stroke counts run from 2 (力) to 18 (曜, 題 and 験). The most common radicals in the set are 人 (亻), 口, 日, 辶 and 心.",
      "**Where the lists come from.** The JLPT published official kanji and word lists for its old four-level test, and stopped with the 2010 revision. The lists used today, including the one behind this course’s Kanji Lab, are estimates based on the old lists and on textbooks. A few kanji move between N4 and N3 from list to list, and real test passages can contain words and kanji that a given list does not include.",
      "**Look-alikes.** The classic N4 confusions are 待/持/特, 体/休, 牛/午, 犬/大, 目/自, 字/学, 貸/借 and the 門 family 問/間/開/聞. Practise them side by side, in words.",
      "**Readings that need care.** 物 (もの, ブツ, モツ), 家 (いえ, うち, カ, ケ, や), 重 (おも(い), ジュウ, チョウ) and 明 (あか(るい), メイ, ミョウ, and the special [明日]{あした}) each have several common readings; learn them in words. Words such as 人気 (にんき or ひとけ), 市場 (いちば or しじょう) and 空いて (あいて or すいて) change reading with meaning.",
      "**Kana for grammar words.** When 事, 物, 時 and 方 are grammar words rather than real things, they are usually written in kana: 〜ことができる, 〜ものです, 〜とき. Reading N4 texts means expecting both."
     ]},
    related:["n5-kanji","kanji-by-component","n4-vocabulary","jlpt-overview","on-and-kun-readings"],
    sources:[{t:"JLPT: N1–N5 level summary", url:"https://www.jlpt.jp/e/about/levelsummary.html"},{t:"JLPT FAQ (no official kanji or vocabulary lists)", url:"https://www.jlpt.jp/e/faq/index.html"},{t:"EDRDG licence statement (KANJIDIC2 data used under CC BY-SA 4.0)", url:"https://www.edrdg.org/edrdg/licence.html"}],
    checked:"2026-11"},
   {id:"kanji-by-component", title:"Learning kanji by their parts", aka:["Kanji components","Meaning and sound parts","Kanji families"], tags:["japanese","kanji","radicals","n4"],
    summary:"How meaning parts (such as 氵 and 亻) and sound parts (such as 寺 and 主) group N4 kanji into families, and where the hints fail.",
    levels:{
     starter:[
      
      "Most kanji are made of smaller parts, and the same parts come back again and again. Once you know a part, every new kanji that contains it is half learned.",
      "Two kinds of part help most. A [[kanji-semantic-component|meaning part]] hints at what a kanji is about: 氵 (water) in 海 (sea) and 注 (pour), 亻 (person) in 住 (live) and 使 (use), 辶 (moving) in 近 (near) and 送 (send). A [[phonetic-component|sound part]] hints at the on reading: 反 (ハン) in 飯 (ハン), 官 (カン) in 館 (カン).",
      "Think of them like word families in English: “photo” in photograph and photocopy. The family helps you guess, and then you check the guess in a real word.",
      {key:"Learn the part once, and use it for every kanji in its family."}
     ],
     builder:[
      
      {table:[["Meaning part","Hint","N4 kanji"],["亻 にんべん","person","体 作 仕 代 住 使 借"],["氵 さんずい","water","海 注 洋 漢"],["辶 しんにょう","moving, roads","近 通 道 週 送 運"],["宀 うかんむり","roof, house","家 室 安 字"],["艹 くさかんむり","plants","花 茶 英"],["女","woman","姉 妹 始"],["心","heart, feelings","思 急 意 悪"],["飠 しょくへん","food","飲 飯 館"],["貝","shell, money","買 貸 質"],["馬 うまへん","horse","駅 験"]]},
      {table:[["Sound part","Kanji","On readings"],["寺 (ジ)","時 持 待 特","ジ ジ タイ トク"],["主 (シュ)","住 注","ジュウ チュウ"],["未 (ミ)","味 妹","ミ マイ"],["央 (オウ)","英 映","エイ エイ"],["代 (ダイ, タイ)","貸","タイ"]]},
      "How to use them: when you meet a new kanji, find a part you know. If it is on the left or the top, it is often the meaning part; the rest is often the sound part. Make a short memory phrase from the parts (待: wait by the road, 彳), and learn the kanji in a word.",
      "When you can’t read a kanji, the parts also find it for you: a dictionary’s parts search (such as Jisho.org’s radical search) lists the kanji that contain the parts you choose ({{dictionary-skills}})."
     ],
     pro:[
      
      "**Meaning part and radical.** Dictionaries file each kanji under one [[radical]] from the traditional set of 214. It is usually the meaning part, but not always the part that catches your eye: in KANJIDIC, 問 is filed under 口 (not 門), 字 under 子 (not 宀) and 員 under 口 (not 貝). When a radical search fails, try another part.",
      "**Why sound parts drift.** Most kanji are meaning + sound characters, but the sound part reflects Chinese pronunciation from a very long time ago, and both Chinese and Japanese have changed since. So a family can match exactly (飯, 館, 花), roughly (住 ジュウ and 注 チュウ from 主 シュ), or not at all (待 タイ and 特 トク from 寺). Family members sometimes match each other better than their base: 英 and 映 are both エイ, while 央 is オウ.",
      "**Meaning parts are historical too.** 英 has 艹 because in old Chinese it meant a flower or blossom; 漢 has 氵 because it first named the Han River; 週 has 辶 because it first meant going round (a week is one round of seven days). Treat meaning parts as memory hooks, and check the real meaning in a dictionary.",
      "**Memory stories.** Stories built from parts are useful, but they are not etymology. Use them freely for memory; for the history of a character, use a good kanji dictionary."
     ]},
    related:["radicals","how-kanji-work","n4-kanji","dictionary-skills"],
    sources:[{t:"Chinese character classification (Wikipedia)", url:"https://en.wikipedia.org/wiki/Chinese_character_classification"},{t:"KanjiVG: kanji stroke order and components", url:"https://kanjivg.tagaini.net/"},{t:"EDRDG licence statement (KANJIDIC and JMdict, CC BY-SA 4.0)", url:"https://www.edrdg.org/edrdg/licence.html"}],
    checked:"2026-11"},
   {id:"n4-vocabulary", title:"N4 vocabulary", aka:["JLPT N4 words","N4 word list"], tags:["japanese","vocabulary","jlpt","n4"],
    summary:"How N4 words are built (kanji words, する verbs, verb pairs, homophones) and how to learn the roughly 700 words in the Kanji Lab’s N4 deck.",
    levels:{
     starter:[
      
      "N4 vocabulary is the language of everyday life: work and school, travel, health, shopping, hobbies and polite conversation. The Kanji Lab’s N4 words deck has 697 words. Like all N4 lists, it is an estimate, because the JLPT publishes no official list.",
      "Many N4 words are built from kanji you know. [勉]{べん}[強]{きょう}, [運]{うん}[転]{てん} and [旅]{りょ}[行]{こう} become verbs with する, and many verbs come in pairs that share a kanji: [始]{はじ}める (begin something) and [始]{はじ}まる (something begins).",
      "Learn words in short phrases, with their particles: [駅]{えき}に[着]{つ}く, ドアを[開]{あ}ける. Review a little every day, and meet the words again in real reading.",
      {key:"Learn N4 words in phrases, with their particles, and review them daily."}
     ],
     builder:[
      
      {table:[["Kind of word","Examples","Tip"],["Kanji words (on readings)","[会]{かい}[議]{ぎ}, [料]{りょう}[金]{きん}, [問]{もん}[題]{だい}","Learn the parts: 料 is fees, 題 is a topic"],["する verbs","[勉]{べん}[強]{きょう}する, [出]{しゅっ}[発]{ぱつ}する, [注]{ちゅう}[意]{い}する","Not every kanji word takes する; the dictionary says"],["Verb pairs","[開]{あ}ける / [開]{あ}く, [集]{あつ}める / [集]{あつ}まる","Learn both, each with を or が"],["Words with prefixes and endings","[不]{ふ}[便]{べん}, [具]{ぐ}[体]{たい}[的]{てき}, [本]{ほん}[屋]{や}, [図]{と}[書]{しょ}[館]{かん}","不 = not; 〜的 = -ic; 〜屋 = shop; 〜館 = building"],["Katakana words","コンビニ, アルバイト, パソコン","Often shortened from English or other languages"]]},
      "[[homophone|Homophones]] grow at N4: [以]{い}[外]{がい} (except) and [意]{い}外 (unexpected), [早]{はや}い (early) and [速]{はや}い (fast). Learn them as pairs, with one sentence each.",
      "In the Kanji Lab, word cards alternate between reading the word and choosing the word for a reading and a meaning. After you answer, the card shows the meanings and tags such as “takes する” or “usually written in kana”."
     ],
     pro:[
      
      "**Kana or kanji?** Some words have kanji but are usually written in kana, especially grammar words (こと, もの, とき, ところ) and some common verbs and adverbs (やめる, ある, ちょうど). Dictionaries based on JMdict mark these as “usually written using kana alone”; the Kanji Lab shows the note on the card. Write them in kana in your own texts too.",
      "**Several readings, several meanings.** A spelling can stand for different words: 人気 (にんき, popularity; ひとけ, signs of people), 市場 (いちば, a market place; しじょう, a market in economics), 空いて (あいて, free; すいて, not crowded). Dictionaries list each reading as its own word; use the sentence to choose.",
      "**How lists differ.** Common N4 lists are estimates based on the old official lists (before 2010) and on textbooks, and they disagree by many words. That matters little: if a word is everyday and you need it, learn it. The JLPT may use words outside a list, and the test’s own guide describes the level by what learners can do, not by a list ({{jlpt-overview}}).",
      "**Evidence for daily review.** A large review of spacing studies (Cepeda and colleagues, 2006) found that spreading study over time helps long-term memory, and that the best gap grows the longer you want to remember ([[spaced-review]])."
     ]},
    related:["n5-vocabulary","n4-kanji","kango-and-wago","transitive-intransitive","n4-study-plan"],
    sources:[{t:"JLPT FAQ (lists of vocabulary, kanji and grammar)", url:"https://www.jlpt.jp/e/faq/index.html"},{t:"Cepeda et al. (2006), “Distributed practice in verbal recall tasks”, Psychological Bulletin 132(3) (PubMed)", url:"https://pubmed.ncbi.nlm.nih.gov/16719566/"},{t:"jmdict-simplified: JMdict data in JSON (EDRDG, CC BY-SA 4.0)", url:"https://github.com/scriptin/jmdict-simplified"}],
    checked:"2026-11"},
   {id:"reading-n4-texts", title:"Reading N4 texts", aka:["N4 reading","JLPT N4 reading strategies"], tags:["japanese","reading","jlpt","n4"],
    summary:"A two-pass strategy for N4 notices, emails, stories and instructions, and the reading items of the JLPT N4.",
    levels:{
     starter:[
      
      "At N4, the JLPT says, you can “read and understand passages on familiar daily topics written in basic vocabulary and kanji”. In real life that means notices, short emails, simple stories and instructions.",
      "Read in two passes. First [[reading-for-gist|for the gist]]: the title, the first sentence and the last sentence, skipping words you don’t know. Then for the details the question asks about: numbers, times, names and the ends of sentences.",
      "Don’t stop at every unknown word. Underline it, keep going, and look it up only if you still need it at the end.",
      {key:"Read the question first, then read for the gist, then go back for the details."}
     ],
     builder:[
      
      {table:[["Text","What to look for","Watch out for"],["Notice","The line that answers your question; times, prices, days","[以]{い}[上]{じょう} and [以]{い}[下]{か} include the number; [未]{み}[満]{まん} doesn’t"],["Email","Subject, who writes, the request, the reason (〜ので)","〜てもいいですか asks permission; 〜ておいてください asks you to prepare"],["Story","Who, where, what happened, the turning point","The sentence after でも or しかし"],["Instructions","How much, when, who may not","〜ないでください (don’t), 〜てはいけません (must not)"]]},
      "Sentence endings carry the meaning in Japanese, so read them carefully: 〜ています or 〜てしまいました, 〜なければなりません or 〜なくてもいいです. One kana can change an instruction into its opposite.",
      "For practice, use [[graded-reader|graded readers]] (the free NPO[多]{た}[言]{げん}[語]{ご}[多]{た}[読]{どく} books have several levels), the Japan Foundation’s free *IRODORI* course, and real texts such as signs and product labels."
     ],
     pro:[
      
      "**The JLPT N4 reading items.** The reading part of the 55-minute Language Knowledge (Grammar) · Reading section has three item types: comprehension of short passages (about 100–200 characters, on study, daily life and work), comprehension of a mid-size passage (about 450 characters, an easy everyday text) and information retrieval (finding what you need in a notice of about 400 characters).",
      "**Text grammar** in the same section asks whether sentences fit the flow of a text, so connectors (それで, でも, それから) and pointing words (この, その) matter as much as vocabulary.",
      "**Kanji without furigana.** The kanji reading items show words without furigana, and passages use kanji at the level, so practise reading N4 kanji bare too: cover the furigana in your own materials, or review in the Kanji Lab, whose cards show no furigana until you answer.",
      "**Plain style.** Stories and some passages use the plain form (だ・である style for description, plain past for events); emails and notices use です・ます. Read both ({{plain-and-polite-speech}})."
     ]},
    related:["reading-n5-texts","dictionary-skills","n4-study-plan","jlpt-overview"],
    sources:[{t:"JLPT: N1–N5 level summary", url:"https://www.jlpt.jp/e/about/levelsummary.html"},{t:"JLPT: N4 test items and what they measure (PDF)", url:"https://www.jlpt.jp/e/guideline/pdf/n4_e_revised.pdf"},{t:"NPO[多]{た}[言]{げん}[語]{ご}[多]{た}[読]{どく} (Tadoku): free Japanese graded readers", url:"https://tadoku.org/japanese/en/free-books-en/"}],
    checked:"2026-11"},
   {id:"dictionary-skills", title:"Dictionary skills for Japanese", aka:["Looking up kanji","Using a Japanese dictionary"], tags:["japanese","dictionary","kanji","tools"],
    summary:"Four ways to find a word or kanji (reading, handwriting, parts, copy and paste) and how to read the entry you find.",
    levels:{
     starter:[
      
      "When you can’t read a word, you have four ways to find it ([[dictionary-lookup]]):",
      {list:["**By reading**: type it in kana (Jisho.org also accepts romaji).","**By handwriting**: draw the kanji in a handwriting box.","**By parts**: choose the parts you can see, and the dictionary lists the kanji that contain them.","**By copy and paste**: if the text is on a screen, paste it into the dictionary."]},
      "Verbs and adjectives are listed in their [[dictionary-form]], so take [待]{ま}っていた back to [待]{ま}つ before you search.",
      "Free dictionaries such as Jisho.org ([[jisho-tool]]) need no account.",
      {key:"Find the word, check that the kanji and the reading match, then choose the meaning that fits your sentence."}
     ],
     builder:[
      
      {table:[["Method","Best for","Tip"],["Reading","Words you have heard","Type the kana exactly: long vowels and small っ matter"],["Handwriting","A single kanji you can see","Write in the standard stroke order; try again if the list is wrong"],["Parts (radical search)","Complicated kanji","Choose two or three clear parts; the list narrows fast"],["Copy and paste","Text on a screen","On a computer, pop-up readers such as 10ten Japanese Reader and Yomitan show readings as you point"]]},
      "Reading an entry: check that the kanji and reading match your text; read all the senses and choose the one that fits; look at the tags (common word, part of speech, “usually written in kana”, する verb); read an example sentence to see the particles.",
      "Some dictionaries also show a JLPT level on each word. These come from the same unofficial lists as everyone else’s, so use them as a guide only."
     ],
     pro:[
      
      "**Where the data comes from.** Many free Japanese–English tools, including Jisho.org and this course’s Kanji Lab, draw on JMdict and KANJIDIC from the Electronic Dictionary Research and Development Group, shared under a Creative Commons licence. They are broad and regularly updated, but definitions are short glosses: for nuance, read example sentences or a Japanese–Japanese dictionary later on.",
      "**Conjugated forms.** Some tools find the dictionary form for you (a pop-up reader usually does), but not always. Knowing the forms from Units 2–7 is what makes every tool work: [待]{ま}たされた → [待]{ま}つ, [来]{こ}られる → 来る.",
      "**Machine translation and camera tools** are good for a first look at a sign or a long message, and weak on readings, names and politeness. Check important words yourself.",
      "**Phones.** On a phone, a dictionary website or a trusted dictionary app works everywhere; copy a word and paste it in. Handwriting keyboards for Japanese exist on many phones, but names and settings differ by device ({{japanese-reading-tools}})."
     ]},
    related:["japanese-reading-tools","kanji-by-component","radicals","reading-n4-texts"],
    sources:[{t:"10ten Japanese Reader (GitHub)", url:"https://github.com/birchill/10ten-ja-reader"},{t:"Yomitan (GitHub)", url:"https://github.com/yomidevs/yomitan"},{t:"EDRDG licence statement (KANJIDIC and JMdict, CC BY-SA 4.0)", url:"https://www.edrdg.org/edrdg/licence.html"}],
    checked:"2026-11"},
   {id:"n4-study-plan", title:"An N4 study plan", aka:["Studying for the JLPT N4","N4 daily routine"], tags:["japanese","study","jlpt","n4"],
    summary:"A daily routine for N4 kanji and words in the Kanji Lab, reading at your level, and the JLPT N4 sections and scoring.",
    levels:{
     starter:[
      
      "N4 is a big step from N5: 167 more kanji and roughly 700 more words. The way to get there is the same as before: a small daily review, a little reading every day, and patience.",
      "In the Kanji Lab, review the N4 kanji deck and then the N4 words deck each day. Keep new cards at 10 a day (the default) unless your reviews feel light. Answer honestly: press Again when you didn’t know a card.",
      "Read something short every day: a notice, a message, a page of a graded reader. Once a week, read something longer in two passes.",
      {key:"Small, daily and honest beats long, weekly and hopeful."}
     ],
     builder:[
      
      {table:[["When","What","Time"],["Every day","Kanji Lab: N4 kanji, then N4 words","10–20 min"],["Every day","Short reading: a notice, a message, a graded reader page","5–10 min"],["Twice a week","Write five kanji in words; one look-alike set","10 min"],["Once a week","One longer text in two passes","15 min"],["Before the test","Official sample questions on jlpt.jp","1 hour"]]},
      "At 10 new cards a day, the 167 kanji take 17 days and the 697 words about ten weeks. Reviews grow as you add cards: if your daily reviews take more than 20 minutes, add fewer new cards for a while.",
      "The JLPT N4 has three sections: Vocabulary (25 minutes), Grammar · Reading (55 minutes) and Listening (35 minutes). There are two scoring sections, Language Knowledge (Vocabulary/Grammar) · Reading (0–120) and Listening (0–60). To pass you need 90 of 180 overall, at least 38 in the first and at least 19 in Listening."
     ],
     pro:[
      
      "**Why daily works.** A large review of spacing research (Cepeda and colleagues, 2006, 317 experiments) found that spacing study over time improves long-term memory, and that the best gap grows with how long you want to remember. The Lab’s boxes (1, 3, 7, 14 and 30 days) follow that idea.",
      "**Test planning.** The JLPT is held in July and December, though some places hold only one of the two. Applications close well before the test, through the local host institution listed on jlpt.jp; check the dates there, since details change. Since the December 2025 test, score reports for people who pass N4 also show the CEFR level A2 as reference information for reading and listening.",
      "**Balance.** The Lab trains recognition; the test also needs grammar in context and listening. Pair it with the grammar units (5–7), the official sample questions, and listening practice such as the audio of the free *IRODORI* course.",
      "**After N4.** Units 9–12 of this course aim at N3, with 370 more kanji in the Lab’s N3 deck. Keep the same routine and raise the reading."
     ]},
    related:["jlpt-overview","n4-kanji","n4-vocabulary","reading-n4-texts"],
    sources:[{t:"JLPT: Test Sections and Test Times", url:"https://www.jlpt.jp/e/guideline/testsections.html"},{t:"JLPT: Scoring Sections, Pass or Fail, Score Report", url:"https://www.jlpt.jp/e/guideline/results.html"},{t:"Japan Foundation: CEFR level to be added for reference to JLPT score reports (2026)", url:"https://www.jpf.go.jp/e/project/japanese/teach/tsushin/news/202601.html"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"jlpt-n4-term", term:"N4 kanji", def:"The kanji that common JLPT N4 lists add to the N5 set: 167 in this course and its Kanji Lab, about 250 in all with the 80 N5 kanji. The JLPT itself has published no kanji list since 2010.", codex:"n4-kanji"},
   {id:"kanji-semantic-component", term:"Meaning component (意符, ifu)", def:"The part of a kanji that hints at its meaning, such as 氵 (water) in [海]{うみ} or 亻 (person) in [住]{す}む. It is often, but not always, the radical.", codex:"kanji-by-component"},
   {id:"homophone", term:"Homophone (同音異義語, dōon igigo)", def:"Words that sound the same but mean different things, such as [以]{い}[外]{がい} (except) and [意]{い}外 (unexpected). In writing, the kanji tell them apart.", codex:"n4-vocabulary"},
   {id:"dictionary-lookup", term:"Dictionary look-up", def:"Finding a word or kanji in a dictionary: by its reading, by drawing it, by choosing its parts, or by pasting it. Verbs and adjectives are listed under their dictionary form.", codex:"dictionary-skills"},
   {id:"reading-for-gist", term:"Reading for gist", def:"Reading quickly for the main idea (who, what, where) before the details, for example by reading the title and the first and last sentences. Compare [[skimming]].", codex:"reading-n4-texts"},
   {id:"kanji-compound-verbs", term:"Kanji compound verb (する verb)", def:"A verb made from a kanji word plus する, such as [勉]{べん}[強]{きょう}する (study) or [出]{しゅっ}[発]{ぱつ}する (depart). Not every kanji word takes する; dictionaries mark the ones that do.", codex:"n4-vocabulary"}
  ],
  bank:[
   {id:"e3u8-q01", lesson:"e3u8-l1", level:1, q:"Which part, on the left of 海, 洋 and 注, hints at their meaning?", options:[
     {t:"氵 (water)", ok:true, why:"Right. 氵 (さんずい) is the narrow form of 水: the sea, an ocean, pouring."},
     {t:"亻 (person)", why:"亻 is the person part, in kanji such as 体 and 住. The kanji here have 氵."},
     {t:"辶 (moving)", why:"辶 runs along the bottom left, as in 近 and 送. These kanji have 氵 on the left."},
     {t:"宀 (roof)", why:"宀 sits on top, as in 家 and 室. These kanji have 氵 on the left."}]},
   {id:"e3u8-q02", lesson:"e3u8-l1", level:2, q:"Kai meets a new kanji with 辶 along its bottom left. What is the best first guess about it?", options:[
     {t:"It is probably about moving, roads or distance", ok:true, why:"Right. 辶 (しんにょう) is in 近, 通, 道, 送 and 運. It is a hint to check, not a rule."},
     {t:"It is about water", why:"Water is 氵 on the left, as in 海."},
     {t:"It is always read シン", why:"しんにょう is the name of the part, not a reading. The sound usually comes from the other part."},
     {t:"It is about a person", why:"A person is 亻 on the left, as in 住 and 使."}]},
   {id:"e3u8-q03", lesson:"e3u8-l1", level:2, q:"時, 持, 待 and 特 all contain 寺. What does this family show about sound parts?", options:[
     {t:"A sound part gives a first guess at the on reading, but it can fail: 待 is タイ and 特 is トク", ok:true, why:"Right. 時 and 持 are ジ like 寺, but 待 and 特 drifted. Check the guess in a real word."},
     {t:"Every kanji with 寺 is read ジ", why:"待 (タイ) and 特 (トク) show that this isn’t true."},
     {t:"A sound part gives the kun reading", why:"Sound parts come from Chinese pronunciation, so they hint at on readings, not kun readings."},
     {t:"A sound part tells you the meaning", why:"That is the meaning part’s job (彳, 扌, 牛 here). The shared 寺 is about sound."}]},
   {id:"e3u8-q04", lesson:"e3u8-l1", level:1, q:"Which kanji means “body”?", options:[
     {t:"体", ok:true, why:"Right. 体 (からだ, タイ): 亻 with 本 on the right."},
     {t:"休", why:"休 is the N5 kanji for rest: 亻 with 木. It looks like 体 but has one line fewer."},
     {t:"本", why:"本 is book or origin. It is the right side of 体, but not the whole kanji."},
     {t:"作", why:"作 (つくる) means make."}]},
   {id:"e3u8-q05", lesson:"e3u8-l1", level:2, q:"In a polite self-introduction, Mei mentions her own older sister. Which word does she use?", options:[
     {t:"[姉]{あね}", ok:true, why:"Right. About your own family to other people, you use the plain word: 姉."},
     {t:"お[姉]{ねえ}さん", why:"お[姉]{ねえ}さん is for someone else’s older sister (and family members also use it to call her). In a self-introduction, Mei says 姉."},
     {t:"[妹]{いもうと}", why:"妹 is a younger sister."},
     {t:"[兄]{あに}", why:"兄 is an older brother."}]},
   {id:"e3u8-q06", lesson:"e3u8-l1", level:1, q:"How is 医者 (doctor) read?", options:[
     {t:"いしゃ", ok:true, why:"Right. 医 (イ, medicine) + 者 (シャ, person)."},
     {t:"いじゃ", why:"者 is シャ here, without voicing."},
     {t:"いもの", why:"もの is the kun reading of 者, used alone. In a two-kanji word like [医]{い}[者]{しゃ}, the on reading シャ is used."},
     {t:"えしゃ", why:"医 is イ, not エ."}]},
   {id:"e3u8-q07", lesson:"e3u8-l1", level:3, q:"A colleague says: 「[妹]{いもうと}はびょういんで[働]{はたら}いています。[看]{かん}[護]{ご}[師]{し}です。」 Where does her sister work?", options:[
     {t:"At a hospital", ok:true, why:"Right. びょういん, with a small ょ, is [病]{びょう}[院]{いん}, and a [看]{かん}[護]{ご}[師]{し} is a nurse."},
     {t:"At a hair salon", why:"A hair salon is びよういん, with a full-size よ (five morae). The colleague said びょういん, and a nurse works at a hospital."},
     {t:"At a library", why:"A library is [図]{と}[書]{しょ}[館]{かん}."},
     {t:"At a bookshop", why:"A bookshop is [本]{ほん}[屋]{や}."}]},
   {id:"e3u8-q08", lesson:"e3u8-l1", level:2, q:"Leo looks for 問 (question) in a radical index under 門 (gate) and can’t find it. Why?", options:[
     {t:"Most dictionaries file 問 under 口 (mouth)", ok:true, why:"Right. The obvious part is not always the radical. KANJIDIC lists 問 under 口."},
     {t:"問 has no radical", why:"Every kanji is filed under one radical. For 問 it is 口."},
     {t:"問 is filed under 耳 (ear)", why:"That is 聞 (hear), another kanji in the 門 family."},
     {t:"問 is filed under 日 (sun)", why:"問 has no 日. You may be thinking of 間, which is filed under 門."}]},
   {id:"e3u8-q09", lesson:"e3u8-l1", level:1, q:"How many kanji are on the N4 list used in this course and in the Kanji Lab’s N4 deck?", options:[
     {t:"167", ok:true, why:"Right. Together with the 80 N5 kanji, that makes about 250."},
     {t:"80", why:"80 is the N5 list."},
     {t:"370", why:"370 is the N3 deck in the Kanji Lab."},
     {t:"2,136", why:"2,136 is the official [常]{じょう}[用]{よう}[漢]{かん}[字]{じ}[表]{ひょう} list for everyday use, far beyond N4."}]},
   {id:"e3u8-q10", lesson:"e3u8-l2", level:1, q:"How is 今朝 (this morning) read?", options:[
     {t:"けさ", ok:true, why:"Right. けさ is a special reading for the whole word."},
     {t:"こんちょう", why:"These are on readings of the two kanji, but the word is read けさ."},
     {t:"いまあさ", why:"These are the kun readings of each kanji. The word has its own reading, けさ."},
     {t:"こんあさ", why:"This mixes readings. [今朝]{けさ} is けさ."}]},
   {id:"e3u8-q11", lesson:"e3u8-l2", level:1, q:"Which word means “summer holidays”?", options:[
     {t:"[夏]{なつ}[休]{やす}み", ok:true, why:"Right. 夏 (summer) + 休み (break)."},
     {t:"[冬]{ふゆ}休み", why:"[冬]{ふゆ}休み is the winter holidays."},
     {t:"[昼]{ひる}休み", why:"[昼]{ひる}休み is the lunch break."},
     {t:"[春]{はる}休み", why:"[春]{はる}休み is the spring break."}]},
   {id:"e3u8-q12", lesson:"e3u8-l2", level:2, q:"Ana wants to borrow a book for free. Which place should she look for?", options:[
     {t:"[図]{と}[書]{しょ}[館]{かん}", ok:true, why:"Right. A library: 〜館 is a large public building."},
     {t:"[本]{ほん}[屋]{や}", why:"A bookshop sells books; 〜屋 is a shop."},
     {t:"[映]{えい}[画]{が}[館]{かん}", why:"A cinema shows films."},
     {t:"[病]{びょう}[院]{いん}", why:"A hospital: 〜院 is an institution."}]},
   {id:"e3u8-q13", lesson:"e3u8-l2", level:1, q:"What does the ending 〜院 usually tell you about a place?", options:[
     {t:"It is an institution, such as a hospital or a graduate school", ok:true, why:"Right: [病]{びょう}[院]{いん}, [大]{だい}[学]{がく}[院]{いん}, [美]{び}[容]{よう}[院]{いん}."},
     {t:"It is a shop", why:"Shops are usually 〜屋 or 〜店."},
     {t:"It is a room", why:"A room is 〜室: [教]{きょう}[室]{しつ}."},
     {t:"It is a park", why:"A park is [公]{こう}[園]{えん}."}]},
   {id:"e3u8-q14", lesson:"e3u8-l2", level:2, q:"Which statement about [会]{かい}[社]{しゃ} and [社]{しゃ}[会]{かい} is right?", options:[
     {t:"[会]{かい}[社]{しゃ} means company and [社]{しゃ}[会]{かい} means society", ok:true, why:"Right. The same two kanji in a different order make a different word."},
     {t:"They are two spellings of the same word", why:"Kanji order matters: these are two different, very common words."},
     {t:"[会]{かい}[社]{しゃ} means society and [社]{しゃ}[会]{かい} means company", why:"The other way round: [会]{かい}[社]{しゃ} is a company, [社]{しゃ}[会]{かい} is society."},
     {t:"Only [会]{かい}[社]{しゃ} is a real word", why:"[社]{しゃ}[会]{かい} (society) is a very common word too."}]},
   {id:"e3u8-q15", lesson:"e3u8-l2", level:3, q:"Min writes: 「[夜]{よる}は[雨]{あめ}が[降]{ふ}るそうなので、[夕]{ゆう}[方]{がた}には[帰]{かえ}りましょう。」 What is he suggesting?", options:[
     {t:"Going home by early evening, because rain is expected at night", ok:true, why:"Right. 〜そう after a plain verb reports what he heard, ので gives the reason, and [夕]{ゆう}[方]{がた}には[帰]{かえ}りましょう is the suggestion."},
     {t:"Going home at night, after the rain", why:"He suggests [夕]{ゆう}[方]{がた}, early evening, before the rain at night."},
     {t:"Staying in because it is raining now", why:"The rain is expected at night (夜); it isn’t raining now."},
     {t:"Meeting in the evening", why:"[帰]{かえ}りましょう is “let’s go home”, not “let’s meet”."}]},
   {id:"e3u8-q16", lesson:"e3u8-l2", level:2, q:"Which reading of 夜 is used in 今夜 (tonight)?", options:[
     {t:"ヤ (こんや)", ok:true, why:"Right. [今]{こん}[夜]{や} is コン + ヤ, two on readings."},
     {t:"よる (こんよる)", why:"よる is 夜 on its own. In the compound 今[夜]{や} it is ヤ."},
     {t:"よ (こんよ)", why:"よ is used in [夜]{よ}[中]{なか}, not in 今[夜]{や}."},
     {t:"ゆう (こんゆう)", why:"ゆう is the reading of 夕 (evening), a different kanji."}]},
   {id:"e3u8-q17", lesson:"e3u8-l2", level:1, q:"What is [青]{あお}[信]{しん}[号]{ごう}?", options:[
     {t:"The green “go” traffic light", ok:true, why:"Right. 青 covers blue and some greens, and the go light is called [青]{あお}[信]{しん}[号]{ごう}."},
     {t:"A blue stop light", why:"There is no blue stop light; red (赤) means stop."},
     {t:"A blue road sign", why:"[信]{しん}[号]{ごう} is a traffic light, not a sign."},
     {t:"A warning for young drivers", why:"青 can mean young or inexperienced in some words, but [青]{あお}[信]{しん}[号]{ごう} is the go light."}]},
   {id:"e3u8-q18", lesson:"e3u8-l2", level:2, q:"Sara reads a sign in a station: 「[地]{ち}[下]{か}[鉄]{てつ}→」. Where does the arrow lead?", options:[
     {t:"To the underground (subway) trains", ok:true, why:"Right. [地]{ち}下 is underground and 鉄 is iron: [地]{ち}下[鉄]{てつ} is the subway or metro."},
     {t:"To the exit", why:"An exit is [出]{で}[口]{ぐち}."},
     {t:"To the ticket office", why:"The sign names a railway, not an office."},
     {t:"To the car park", why:"A car park is [駐]{ちゅう}[車]{しゃ}[場]{じょう}."}]},
   {id:"e3u8-q19", lesson:"e3u8-l3", level:1, q:"Which verb means “to lend”?", options:[
     {t:"[貸]{か}す", ok:true, why:"Right. [貸]{か}す: the thing goes away from you. It has 貝 (shell money) at the bottom."},
     {t:"[借]{か}りる", why:"[借]{か}りる is to borrow: the thing comes to you."},
     {t:"[売]{う}る", why:"[売]{う}る is to sell."},
     {t:"[送]{おく}る", why:"[送]{おく}る is to send."}]},
   {id:"e3u8-q20", lesson:"e3u8-l3", level:2, q:"Which sentence correctly says “The class begins at nine”?", options:[
     {t:"[授]{じゅ}[業]{ぎょう}が[九]{く}[時]{じ}に[始]{はじ}まります。", ok:true, why:"Right. [始]{はじ}まる is intransitive: the class itself begins, with が."},
     {t:"[授]{じゅ}[業]{ぎょう}を九時に[始]{はじ}まります。", why:"を needs a transitive verb. With [始]{はじ}まる, the class takes が."},
     {t:"[授]{じゅ}[業]{ぎょう}が九時に[始]{はじ}めます。", why:"[始]{はじ}める needs someone who starts something (with を): [先]{せん}[生]{せい}が[授]{じゅ}[業]{ぎょう}を[始]{はじ}めます."},
     {t:"[授]{じゅ}[業]{ぎょう}で九時に[始]{はじ}まります。", why:"で marks a place or means; it can’t mark the thing that begins."}]},
   {id:"e3u8-q21", lesson:"e3u8-l3", level:2, q:"Ken says: 「[毎]{まい}[朝]{あさ}、[会]{かい}[社]{しゃ}まで[自]{じ}[転]{てん}[車]{しゃ}で＿＿います。」 (I go to work by bicycle every morning.) Which verb fits?", options:[
     {t:"[通]{かよ}って", ok:true, why:"Right. [通]{かよ}う is to go somewhere regularly, such as work or school."},
     {t:"[通]{とお}って", why:"[通]{とお}る is to pass through or by a place: [公]{こう}[園]{えん}を[通]{とお}る. It doesn’t mean going to work regularly."},
     {t:"[送]{おく}って", why:"[送]{おく}る is to send, or to see someone off."},
     {t:"[運]{はこ}んで", why:"[運]{はこ}ぶ is to carry something."}]},
   {id:"e3u8-q22", lesson:"e3u8-l3", level:1, q:"How is 運転 (driving) read?", options:[
     {t:"うんてん", ok:true, why:"Right. 運 is ウン and 転 is テン."},
     {t:"はこてん", why:"はこ(ぶ) is the kun reading of 運. In [運]{うん}[転]{てん}, both kanji use on readings."},
     {t:"うんころ", why:"ころ(ぶ) is the kun reading of 転. In [運]{うん}[転]{てん} it is テン."},
     {t:"うんでん", why:"転 is テン in this word, without voicing."}]},
   {id:"e3u8-q23", lesson:"e3u8-l3", level:2, q:"Which of these words does NOT take する to make a verb?", options:[
     {t:"[世]{せ}[界]{かい}", ok:true, why:"Right. [世]{せ}[界]{かい} (the world) is only a noun."},
     {t:"[勉]{べん}[強]{きょう}", why:"[勉]{べん}[強]{きょう}する (study) is a very common する verb."},
     {t:"[旅]{りょ}[行]{こう}", why:"[旅]{りょ}行する is to travel."},
     {t:"[質]{しつ}[問]{もん}", why:"[質]{しつ}[問]{もん}する is to ask a question."}]},
   {id:"e3u8-q24", lesson:"e3u8-l3", level:3, q:"Lina asks a colleague: 「この[資]{し}[料]{りょう}のこと、[知]{し}っていますか。」 He has never heard of the document. What is the most natural reply?", options:[
     {t:"いいえ、[知]{し}りません。", ok:true, why:"Right. “I know” is [知]{し}っています, but “I don’t know” is normally [知]{し}りません."},
     {t:"いいえ、[知]{し}っていません。", why:"A common learner mistake: the negative of [知]{し}っています is normally [知]{し}りません."},
     {t:"いいえ、[知]{し}りませんでした。", why:"[知]{し}りませんでした means “I didn’t know (until now)”, for something you have just learned."},
     {t:"はい、[知]{し}りません。", why:"He is saying no, he doesn’t know it, so he starts with いいえ."}]},
   {id:"e3u8-q25", lesson:"e3u8-l3", level:1, q:"The kanji 着 writes two common verbs. Which two?", options:[
     {t:"[着]{き}る (wear) and [着]{つ}く (arrive)", ok:true, why:"Right. The okurigana and the particles tell you which: [服]{ふく}を[着]{き}る, [駅]{えき}に[着]{つ}く."},
     {t:"[着]{き}る (wear) and [切]{き}る (cut)", why:"[切]{き}る is a different kanji with the same sound."},
     {t:"[着]{つ}く (arrive) and [付]{つ}く (stick to)", why:"[付]{つ}く is a different kanji with the same sound."},
     {t:"[着]{き}る (wear) and [聞]{き}く (hear)", why:"聞く is a different kanji that happens to start with き."}]},
   {id:"e3u8-q26", lesson:"e3u8-l3", level:2, q:"Ana is an English teacher. Choose the verb: 「アナさんは[学]{がく}[生]{せい}に[英]{えい}[語]{ご}を＿＿。」", options:[
     {t:"[教]{おし}えています", ok:true, why:"Right. [教]{おし}える is the teacher’s verb: Ana teaches English to students."},
     {t:"[習]{なら}っています", why:"[習]{なら}う is the learner’s verb. This would mean Ana learns English from students."},
     {t:"[教]{おそ}わっています", why:"[教]{おそ}わる is also the learner’s verb: to be taught."},
     {t:"[借]{か}りています", why:"[借]{か}りる is to borrow."}]},
   {id:"e3u8-q27", lesson:"e3u8-l3", level:3, q:"Kenji’s text says: 「[火]{か}[曜]{よう}[日]{び}と[木]{もく}[曜]{よう}日は、[家]{いえ}に[帰]{かえ}る[前]{まえ}に[英]{えい}[会]{かい}[話]{わ}の[教]{きょう}[室]{しつ}に[通]{かよ}っています。」 What does he do on Tuesdays?", options:[
     {t:"He goes to an English conversation class before going home", ok:true, why:"Right. [帰]{かえ}る前に is “before going home”, and 〜に[通]{かよ}っています is going somewhere regularly."},
     {t:"He teaches English at home", why:"[教]{きょう}[室]{しつ} here is a class he goes to ([通]{かよ}っています), not one he gives at home."},
     {t:"He goes home early and studies English", why:"He goes to the class before he goes home."},
     {t:"He goes to an English class in the morning", why:"The text says [帰]{かえ}る前に: after work, before going home."}]},
   {id:"e3u8-q28", lesson:"e3u8-l4", level:1, q:"What does [以]{い}[外]{がい} mean?", options:[
     {t:"Except, apart from", ok:true, why:"Right: [日]{にち}[曜]{よう}日[以]{い}外 is every day except Sunday."},
     {t:"Unexpected", why:"That is [意]{い}外, which sounds the same but has 意 (mind)."},
     {t:"Outside", why:"Outside is 外. [以]{い}外 means except."},
     {t:"And more", why:"“And more, and over” is [以]{い}[上]{じょう}."}]},
   {id:"e3u8-q29", lesson:"e3u8-l4", level:2, q:"A sign says 「[十]{じゅう}[八]{はっ}[歳]{さい}[以]{い}[上]{じょう}」. Can an 18-year-old enter?", options:[
     {t:"Yes: [以]{い}上 includes 18", ok:true, why:"Right. [以]{い}上 is “and over”, including the number itself."},
     {t:"No: only people older than 18", why:"[以]{い}上 includes the number. “Older than 18” would need different wording."},
     {t:"No: it means under 18", why:"Under 18 is 十八[歳]{さい}[未]{み}[満]{まん}."},
     {t:"Only with an adult", why:"The sign gives only an age limit, and 18 is included."}]},
   {id:"e3u8-q30", lesson:"e3u8-l4", level:2, q:"Choose the kanji: 「この[電]{でん}[車]{しゃ}はとても＿＿です。」 (This train is very fast.)", options:[
     {t:"[速]{はや}い", ok:true, why:"Right. For speed, use [速]{はや}い."},
     {t:"[早]{はや}い", why:"[早]{はや}い is early (in time): [朝]{あさ}[早]{はや}く. For speed, use [速]{はや}い."},
     {t:"[安]{やす}い", why:"[安]{やす}い is cheap, not fast."},
     {t:"[近]{ちか}い", why:"[近]{ちか}い is near, not fast."}]},
   {id:"e3u8-q31", lesson:"e3u8-l4", level:3, q:"Two friends both say their school is しりつ. One goes to a school run by the city, the other to a private school. How might they make the difference clear when speaking?", options:[
     {t:"Say いちりつ for [市]{し}[立]{りつ} and わたくしりつ for [私]{し}[立]{りつ}", ok:true, why:"Right. Using other readings of the same kanji (市 いち, 私 わたくし) is a common trick to tell these homophones apart."},
     {t:"Say しりつ more slowly", why:"Speed doesn’t change the word; both are しりつ."},
     {t:"There is no way: they must write it", why:"Writing helps, but speakers also use the trick of other readings."},
     {t:"Say こうりつ for both", why:"[公]{こう}[立]{りつ} means public in general, and it would hide the difference."}]},
   {id:"e3u8-q32", lesson:"e3u8-l4", level:1, q:"食べ物, 動物 and 荷物 all contain 物. How many different readings of 物 do they show?", options:[
     {t:"Three: もの, ぶつ and もつ", ok:true, why:"Right: たべもの, どうぶつ, にもつ. The word decides the reading."},
     {t:"One: もの", why:"Only [食]{た}べ[物]{もの} uses もの. [動]{どう}[物]{ぶつ} uses ブツ and [荷]{に}[物]{もつ} uses モツ."},
     {t:"Two: もの and ぶつ", why:"[荷]{に}[物]{もつ} adds a third: モツ."},
     {t:"Four", why:"There are three here: もの, ぶつ and もつ."}]},
   {id:"e3u8-q33", lesson:"e3u8-l4", level:2, q:"How is 人気 read in 「[夜]{よる}は人気のない[道]{みち}を[歩]{ある}かないでください」 (please don’t walk on a ___ road at night)?", options:[
     {t:"ひとけ: a deserted road, with nobody around", ok:true, why:"Right. [人気]{ひとけ}がない with ひとけ means there are no signs of people. That fits a warning about walking at night."},
     {t:"にんき: an unpopular road", why:"にんき is popularity. Roads aren’t popular or unpopular in this sense; the warning is about nobody being around."},
     {t:"じんき: a road with a bad mood", why:"じんき is a rare word for the mood of a place. It doesn’t fit."},
     {t:"ひとき", why:"ひとき is not a reading of 人気."}]},
   {id:"e3u8-q34", lesson:"e3u8-l4", level:1, q:"What does [不]{ふ}[便]{べん} mean?", options:[
     {t:"Inconvenient", ok:true, why:"Right. 不 (not) + 便 (convenience)."},
     {t:"Worried", why:"Worried is [不]{ふ}[安]{あん}."},
     {t:"A shortage", why:"A shortage is [不]{ふ}[足]{そく}."},
     {t:"Unkind", why:"Unkind is [不]{ふ}[親]{しん}[切]{せつ}."}]},
   {id:"e3u8-q35", lesson:"e3u8-l4", level:2, q:"A colleague asks: 「[来]{らい}[週]{しゅう}の[水]{すい}[曜]{よう}[日]{び}、[空]{あ}いていますか。」 What is she asking?", options:[
     {t:"Whether you are free next Wednesday", ok:true, why:"Right. A time that is [空]{あ}いている is free."},
     {t:"Whether the office is open next Wednesday", why:"A shop or office being open is [開]{あ}いている, with 開."},
     {t:"Whether next Wednesday will be crowded", why:"Not crowded is すいている, and it describes trains or shops, not a day in your diary."},
     {t:"Whether the sky will be clear", why:"空 alone, read そら, is the sky, but [空]{あ}いていますか is about free time."}]},
   {id:"e3u8-q36", lesson:"e3u8-l4", level:1, q:"Which word means “free of charge”?", options:[
     {t:"[無]{む}[料]{りょう}", ok:true, why:"Right. [無]{む} (no) + 料 (fee)."},
     {t:"[有]{ゆう}[料]{りょう}", why:"[有]{ゆう}[料]{りょう} is the opposite: you have to pay."},
     {t:"[料]{りょう}[理]{り}", why:"[料]{りょう}[理]{り} is cooking or a dish."},
     {t:"[料]{りょう}[金]{きん}", why:"[料]{りょう}金 is the fee itself."}]},
   {id:"e3u8-q37", lesson:"e3u8-l5", level:1, q:"You meet [起]{お}きられない and want to look it up. Which form do you search for?", options:[
     {t:"[起]{お}きる", ok:true, why:"Right. Dictionaries list verbs in the dictionary form. [起]{お}きられない is the negative of the potential form of [起]{お}きる."},
     {t:"[起]{お}きられ", why:"That is not a form a dictionary lists. Go back to the dictionary form."},
     {t:"[起]{お}こす", why:"[起]{お}こす (wake someone up) is the other verb of the pair, not the one in the text."},
     {t:"[起]{お}きない", why:"[起]{お}きない is the negative form. The dictionary lists [起]{お}きる."}]},
   {id:"e3u8-q38", lesson:"e3u8-l5", level:2, q:"Kai sees a kanji he can’t read on a paper poster. What is the best way to look it up?", options:[
     {t:"Draw it in a handwriting box, or choose its parts in a parts search", ok:true, why:"Right. When you can see a kanji but can’t read it, search by its shape."},
     {t:"Type its reading", why:"He doesn’t know the reading, so he can’t type it."},
     {t:"Copy and paste it", why:"The text is on paper, not on a screen."},
     {t:"Guess the meaning and move on, always", why:"Skipping is fine for unimportant words, but here he wants to look it up."}]},
   {id:"e3u8-q39", lesson:"e3u8-l5", level:2, q:"In the JLPT N4, which section contains the kanji reading and orthography items?", options:[
     {t:"Language Knowledge (Vocabulary), 25 minutes", ok:true, why:"Right. Kanji reading and orthography are the first items in the Vocabulary section."},
     {t:"Language Knowledge (Grammar) · Reading, 55 minutes", why:"That section has the grammar and reading items."},
     {t:"Listening, 35 minutes", why:"Listening has task-based comprehension, key points, verbal expressions and quick response."},
     {t:"A separate kanji writing section", why:"There is no writing section: the JLPT is multiple choice."}]},
   {id:"e3u8-q40", lesson:"e3u8-l5", level:1, q:"What is the overall pass mark for the JLPT N4?", options:[
     {t:"90 out of 180", ok:true, why:"Right, together with the minimums of 38 and 19 in the two scoring sections."},
     {t:"80 out of 180", why:"80 is the N5 pass mark."},
     {t:"95 out of 180", why:"95 is the N3 pass mark."},
     {t:"100 out of 180", why:"The N4 pass mark is 90."}]},
   {id:"e3u8-q41", lesson:"e3u8-l5", level:3, q:"Sam takes the N4: 85 in Language Knowledge (Vocabulary/Grammar) · Reading and 15 in Listening, 100 in total. Does Sam pass?", options:[
     {t:"No: 15 is below the Listening minimum of 19", ok:true, why:"Right. You need 90 overall and at least 38 and 19 in the two scoring sections. One section below its minimum means a fail."},
     {t:"Yes: 100 is above the pass mark of 90", why:"The total is enough, but every section must also reach its minimum."},
     {t:"Yes: 85 is above the minimum of 38", why:"That section passes, but Listening (15) is below 19."},
     {t:"No: the total must be at least 120", why:"The overall pass mark is 90 out of 180."}]},
   {id:"e3u8-q42", lesson:"e3u8-l5", level:2, q:"A notice says 「[月]{げつ}[曜]{よう}[日]{び}は[休]{きゅう}[館]{かん}日です」. What does it tell you?", options:[
     {t:"The building is closed on Mondays", ok:true, why:"Right. 休 (rest) + 館 (building) + 日 (day): the day the building is closed."},
     {t:"The building opens late on Mondays", why:"休[館]{かん}日 is a closing day, not a late opening."},
     {t:"Mondays are free of charge", why:"Free would be [無]{む}[料]{りょう}."},
     {t:"There is an event in the hall on Mondays", why:"館 is the building, and 休 means it is closed."}]},
   {id:"e3u8-q43", lesson:"e3u8-l5", level:3, q:"A medicine label says: 「1[日]{にち}2[回]{かい}、[朝]{あさ}と[夜]{よる}の[食]{しょく}[後]{ご}に[飲]{の}んでください。」 When do you take it?", options:[
     {t:"After breakfast and after the evening meal", ok:true, why:"Right. 2回 is twice, [朝]{あさ}と[夜]{よる} is morning and night, and 食後 is after a meal."},
     {t:"Before breakfast and before the evening meal", why:"Before a meal is 食[前]{ぜん}. 食後 is after."},
     {t:"Twice in the morning", why:"The label says [朝]{あさ}と[夜]{よる}: morning and night."},
     {t:"Every two days, after meals", why:"1日2回 is twice a day, not every two days."}]},
   {id:"e3u8-q44", lesson:"e3u8-l5", level:2, q:"In the story: 「…とても[楽]{たの}しかった。でも、[帰]{かえ}り[道]{みち}が[分]{わ}からなくなってしまった。」 Which word signals the turning point?", options:[
     {t:"でも", ok:true, why:"Right. でも (but) turns the story from a good walk to a problem; the sentence after it is often the key one."},
     {t:"とても", why:"とても (very) only makes [楽]{たの}しかった stronger."},
     {t:"なって", why:"なって is part of 分からなくなってしまった; it describes the change, but でも signals the turn."},
     {t:"しかった", why:"That is just the end of the adjective [楽]{たの}しかった (was fun)."}]},
   {id:"e3u8-q45", lesson:"e3u8-l5", level:2, q:"In the Kanji Lab, what happens when you press Again after a card?", options:[
     {t:"The card comes back once more at the end of today’s session, and again tomorrow", ok:true, why:"Right. Again puts the card back in box 1, so it returns tomorrow, with one more try today."},
     {t:"The card is deleted from the deck", why:"Cards are never deleted; Again just brings them back sooner."},
     {t:"The card moves up one box", why:"That is Good. Again sends it back to box 1."},
     {t:"The card comes back in 30 days", why:"30 days is the last box, for cards you know very well."}]}
  ]
});
