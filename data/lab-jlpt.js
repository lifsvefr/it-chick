/* JLPT Practice Room data (labs/jlpt.html). Original questions in JLPT format; never copy real JLPT items.
   Written as dev/jlpt/<id>.js parts (one JLAB.mocks.push({...}); each) and joined by tools/build_jlpt.py.
   mock: {id:"n4-a", level:"N4", title, note?, sections:[{id, title:"言語知識（文字・語彙）", en:"Vocabulary", minutes,
     parts:[{instr:"Japanese instructions as on the test", en:"English gloss", passage?:"text (for text grammar/reading)",
       items:[{id:"n4a-v01", q:"question (markdown; __word__ underlines; [漢字]{かな} furigana)", options:[4 strings],
               ok:0-3, why:"why the answer is right and the others wrong (English, with Japanese as needed)"}]}]}]} */
var JLAB = window.JLAB = {mocks: []};
JLAB.mocks.push({
id: "n3-a", level: "N3", title: "N3 Practice Test A",
note: "About half a real N3 test, without listening: vocabulary 15 min, grammar 20 min, reading 35 min. Grammar from N3 grammar I and II (e3u9, e3u10); kanji from the Kanji Lab N5–N3 decks.",
sections: [
{id: "moji", title: "言語知識（文字・語彙）", en: "Vocabulary", minutes: 15, parts: [
 {instr: "問題１　＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best reading for the underlined word from 1, 2, 3 and 4.",
  items: [
   {id: "n3a-v01", q: "来月から__給料__が少し上がるそうだ。",
    options: ["きゅうりょう", "きゅりょう", "きゅうりょ", "きょうりょう"], ok: 0,
    why: "給料 (pay, salary) is **きゅうりょう**: 給 has a long vowel (きゅう) and so does 料 (りょう). 「きゅりょう」 and 「きゅうりょ」 each drop one of the long vowels, and 「きょうりょう」 changes きゅう to きょう. Long vowels are a favourite trap in this question type."},
   {id: "n3a-v02", q: "祖父は入院していたが、昨日やっと__退院__した。",
    options: ["たいにん", "たいいん", "だいいん", "たいえん"], ok: 1,
    why: "退院 (leaving hospital) is **たいいん**, the opposite of 入院 (にゅういん) earlier in the sentence. 退 is たい, not voiced だい, and 院 is いん, as in 病院 (びょういん). 「たいにん」 and 「たいえん」 are not readings of 退院: 院 is いん."},
   {id: "n3a-v03", q: "夕方、駅まで母を__迎え__に行った。",
    options: ["こたえ", "ささえ", "そなえ", "むかえ"], ok: 3,
    why: "迎える (to meet, pick someone up) gives 迎え, read **むかえ**: 「むかえに行く」 = to go and pick someone up. 「こたえ」 is 答え (answer), 「ささえ」 is 支え (support) and 「そなえ」 is 備え (preparation): all real words ending in え, but none is written 迎え."},
   {id: "n3a-v04", q: "この川は、見た目より__深い__ので、気をつけてください。",
    options: ["あさい", "ひろい", "ふかい", "こわい"], ok: 2,
    why: "深い is **ふかい** (deep), which also explains the warning 「気をつけてください」. 「あさい」 is its opposite 浅い (shallow), the classic trap. 「ひろい」 is 広い (wide) and 「こわい」 is 怖い (scary)."}
  ]},
 {instr: "問題２　＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best way to write the underlined word in kanji.",
  items: [
   {id: "n3a-v05", q: "外国で働いた__けいけん__を、今の仕事に生かしている。",
    options: ["経険", "経験", "計験", "計険"], ok: 1,
    why: "けいけん (experience) is **経験**: 経 (けい, pass through) + 験 (けん, test). 験 (with 馬, horse) and 険 (with 阝, as in 危険) look alike and are both けん, and 計 is also けい (as in 時計), so the other three mix up those look-alikes and sound-alikes."},
   {id: "n3a-v06", q: "弟は毎晩、__ねっしん__にピアノをひいている。",
    options: ["熱信", "熱身", "熱真", "熱心"], ok: 3,
    why: "ねっしん (eager, keen) is **熱心**: 熱 (heat) + 心 (heart), a hot heart. 信, 身 and 真 can all be read しん, so they are tempting, but 「熱信」, 「熱身」 and 「熱真」 are not words."},
   {id: "n3a-v07", q: "かさを電車の中に__わすれて__しまった。",
    options: ["忘れて", "忙れて", "亡れて", "望れて"], ok: 0,
    why: "わすれる (to forget, leave behind) is **忘れる**: 亡 on top of 心. 忙 (いそがしい, busy) has the same two parts side by side, so it is the look-alike trap. 亡 alone (な・い) and 望 (のぞ・む) contain 亡 too, but none of them is read わすれる."}
  ]},
 {instr: "問題３　（　　）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best word to fill the gap.",
  items: [
   {id: "n3a-v08", q: "最近あまり寝ていないので、一日中頭が（　　）している。",
    options: ["すっきり", "ぼんやり", "にっこり", "そっくり"], ok: 1,
    why: "**ぼんやり** is hazy, foggy: 「頭がぼんやりする」 is how a short night feels. 「すっきり」 is the opposite (clear, refreshed). 「にっこり」 is a smile and 「そっくり」 means looking exactly alike: neither describes a head after too little sleep."},
   {id: "n3a-v09", q: "この電車は次の駅で、特急の（　　）を待ちます。",
    options: ["通勤", "通信", "通過", "通行"], ok: 2,
    why: "**通過** is passing through without stopping: a local train waits for the express to pass (「特急の通過を待つ」). 「通勤」 is commuting, 「通信」 is communication and 「通行」 is people or cars going along a road (as in 通行止め): all 通 words, but only 通過 fits a train passing a station."},
   {id: "n3a-v10", q: "旅行の（　　）が決まったら、早めに教えてね。",
    options: ["スケジュール", "スタイル", "サービス", "スイッチ"], ok: 0,
    why: "A trip’s plan of days and times is its **スケジュール** (schedule), something you decide and tell people. 「スタイル」 is a style or figure, 「サービス」 is service (or something free from a shop) and 「スイッチ」 is a switch: none of them is “decided” for a trip."},
   {id: "n3a-v11", q: "部屋がむしあつかったので、窓を開けて空気を（　　）。",
    options: ["取りかえた", "取り出した", "出し入れした", "入れかえた"], ok: 3,
    why: "「空気を**入れかえる**」 is the set phrase for airing a room: letting fresh air in for the old. 「取りかえる」 is exchanging an object (a broken cup for a new one), 「取り出す」 is taking something out of a bag or box, and 「出し入れする」 is putting things in and out of storage."},
   {id: "n3a-v12", q: "駅の前の新しい建物は、来年の春に（　　）する予定だ。",
    options: ["完全", "成長", "完成", "生産"], ok: 2,
    why: "A building that is finished is **完成**する (completed). 「完全」 (perfect, complete) is a な-adjective and does not take する. 「成長する」 is for people, plants or companies growing, and 「生産する」 is producing goods in a factory."},
   {id: "n3a-v13", q: "急いで家を出たので、（　　）窓を閉めるのを忘れてしまった。",
    options: ["がっかり", "うっかり", "ぐっすり", "ゆっくり"], ok: 1,
    why: "**うっかり** is doing (or forgetting) something by mistake, without paying attention: 「うっかり…忘れてしまった」 is the typical pairing, and the hurry (急いで) explains it. 「がっかり」 is being disappointed, a feeling, not a way of forgetting. 「ぐっすり」 is sleeping soundly, and 「ゆっくり」 (slowly, taking your time) clashes with leaving in a hurry."}
  ]},
 {instr: "問題４　＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the option closest in meaning to the underlined words.",
  items: [
   {id: "n3a-v14", q: "このかばんは__じょうぶだ__。",
    options: ["かるい", "やすい", "つかいやすい", "こわれにくい"], ok: 3,
    why: "じょうぶ (丈夫) of a thing means strong, hard-wearing: it **does not break easily** (こわれにくい). A bag can also be light (「かるい」), cheap (「やすい」) or easy to use (「つかいやすい」), but those are different qualities."},
   {id: "n3a-v15", q: "会議は__突然__始まった。",
    options: ["急に", "静かに", "予定どおりに", "おくれて"], ok: 0,
    why: "突然 (とつぜん) is suddenly, without warning: **急に**. 「静かに」 (quietly) describes the sound, not the timing. 「予定どおりに」 (as planned) is almost the opposite of 突然, and 「おくれて」 means it started late."},
   {id: "n3a-v16", q: "レポートは__ほぼ__書き終わった。",
    options: ["すっかり", "やっと", "だいたい", "ちょうど"], ok: 2,
    why: "ほぼ means almost, nearly all: **だいたい**. 「すっかり」 means completely, which says more than ほぼ. 「やっと」 (at last) is about how long it took, and 「ちょうど」 (just, exactly) is about timing."}
  ]},
 {instr: "問題５　つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the sentence that uses the word correctly.",
  items: [
   {id: "n3a-v17", q: "**ふだん**",
    options: ["今日はふだん寒いので、コートを着て出かけよう。", "ふだんは自転車で通っているが、雨の日はバスに乗る。", "昨日、駅の前で、ふだん古い友だちに会った。", "宿題はふだん終わったので、遊びに行こう。"], ok: 1,
    why: "ふだん (usually, on ordinary days) contrasts normal days with an exception: **「ふだんは自転車…雨の日はバス」** is exactly that. 1 needs 「ふだん**より**寒い」 (colder than usual) or 「とても寒い」: ふだん on its own can’t mean “very”. In 3 a chance meeting needs 「ぐうぜん」, and in 4 the meaning is 「もう」 (already)."},
   {id: "n3a-v18", q: "**とどく**",
    options: ["毎朝7時に、会社にとどくようにしている。", "熱が39度までとどいたので、病院へ行った。", "先週注文した本が、今日やっととどいた。", "この電車は、空港までとどきます。"], ok: 2,
    why: "とどく (届く) is for things that are sent and arrive, like a parcel or a letter: **「注文した本が…とどいた」**. A person arriving at work is 「着く」 (1); a fever rising is 「上がる」 (2); a train going as far as the airport is 「行く」 (4)."},
   {id: "n3a-v19", q: "**似合う**",
    options: ["その青いシャツ、山田さんによく似合っていますね。", "兄と私は、声がよく似合っていると言われる。", "このふたは、びんの口に似合わないので、うまくしまらない。", "原田さんの意見は、私の考えと似合っている。"], ok: 0,
    why: "似合う is for clothes, colours or styles that suit a person: **「青いシャツ…よく似合っています」**. Two voices that sound alike are 「似ている」 (2); a lid that doesn’t fit a bottle 「合わない」 (3); and opinions that agree are 「同じだ」 or 「近い」 (4)."}
  ]}
]},
{id: "bunpo", title: "言語知識（文法）", en: "Grammar", minutes: 20, parts: [
 {instr: "問題１　つぎの文の（　　）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best words to fill the gap.",
  items: [
   {id: "n3a-g01", q: "日本語のニュースがわかる（　　）、毎日少しずつ聞いている。",
    options: ["ために", "ほど", "ように", "まま"], ok: 2,
    why: "わかる (be able to understand) is not something you do on purpose, so the goal takes **ように**, not ために: 「わかるように」 = so that I can understand. ために needs a verb you control (「ニュースを聞くために」). 「わかるほど」 (to the point of understanding) and 「わかるまま」 do not give a reason for listening."},
   {id: "n3a-g02", q: "家を出た（　　）、急に雨が降ってきた。",
    options: ["とたん", "うちに", "あいだ", "たびに"], ok: 0,
    why: "～た**とたん** is “the moment I…”, for something unexpected that happens right after: 「家を出たとたん、雨が降ってきた」. うちに and あいだ need a state that lasts (「家にいるうちに」), not a one-off past action, and たびに (every time) takes the dictionary form: 「家を出るたびに」."},
   {id: "n3a-g03", q: "くつを（　　）まま、部屋に入らないでください。",
    options: ["はいて", "はく", "はき", "はいた"], ok: 3,
    why: "～**たまま** is “with something left as it is”: 「くつをはいたまま」 = with your shoes still on. まま takes the た-form here (or ない-form, or a noun + の); 「はいてまま」, 「はくまま」 and 「はきまま」 are not possible."},
   {id: "n3a-g04", q: "部屋の電気がついているから、原田さんはもう帰ってきている（　　）。",
    options: ["わけがない", "に違いない", "ことはない", "ものだ"], ok: 1,
    why: "The light is on, so the speaker is sure he is home: **に違いない** (must be, I’m sure). 「わけがない」 (there’s no way) says the opposite of what the evidence shows. 「ことはない」 means “there’s no need to”, and 「ものだ」 states what is natural or what people should do, which doesn’t fit a guess about one person."},
   {id: "n3a-g05", q: "肉がきらいな（　　）が、今日はあまり食べたくない。",
    options: ["わけではない", "わけだ", "はずがない", "ところだ"], ok: 0,
    why: "**わけではない** denies a conclusion someone might draw: “It’s not that I dislike meat, but…”. The が clause that follows gives the real reason. 「はずがない」 means “there’s no way”, a strong judgement about something you can’t know for sure, not about your own tastes; 「ところだ」 (just about to / just now) is about timing and doesn’t follow an adjective like きらいな; and 「わけだ」 (so that’s why, naturally) draws a conclusion, which can’t lead into the contrast with が."},
   {id: "n3a-g06", q: "先生が何度も説明してくれた（　　）、やっとわかるようになった。",
    options: ["せいで", "くせに", "おかげで", "のに"], ok: 2,
    why: "The teacher’s help led to a good result, so it takes **おかげで** (thanks to). 「せいで」 blames a cause for a bad result. 「くせに」 (even though, with criticism) and 「のに」 (even though, with surprise) would mean the explanations should have stopped you understanding."},
   {id: "n3a-g07", q: "弟は、母に呼ばれても聞こえない（　　）をして、ゲームを続けていた。",
    options: ["よう", "まま", "はず", "ふり"], ok: 3,
    why: "～**ふりをする** is to pretend: 「聞こえないふりをする」 = pretend not to hear. Only ふり goes with をする in this way. 「ようをする」, 「ままをする」 and 「はずをする」 are not Japanese."}
  ]},
 {instr: "問題２　つぎの文の　★　に入る最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Put the four pieces in order and choose the one that goes in ★.",
  items: [
   {id: "n3a-g08", q: "この町は、＿＿ ＿＿ ★ ＿＿ 静かで住みやすい。",
    options: ["まわりも", "ばかりか", "駅に", "近い"], ok: 1,
    why: "The sentence is 「この町は、駅に 近い **ばかりか** まわりも 静かで住みやすい。」 (This town is not only close to the station, the area is quiet and easy to live in too.) ～ばかりか (not only) follows the plain form 「近い」, and 「まわりも」 adds the second point, so ★ is ばかりか."},
   {id: "n3a-g09", q: "体のために、わたしは ＿＿ ＿＿ ★ ＿＿ している。",
    options: ["ことに", "駅まで", "歩く", "毎朝"], ok: 2,
    why: "The sentence is 「わたしは 毎朝 駅まで **歩く** ことに している。」 (I make a point of walking to the station every morning.) ～ことにしている (a personal rule) follows the dictionary form, so 「歩く ことに」 must come just before している. 毎朝 and 駅まで come first; ★ is 歩く."},
   {id: "n3a-g10", q: "この ＿＿ ＿＿ ★ ＿＿ 思い出す。",
    options: ["見る", "子どものころを", "写真を", "たびに"], ok: 3,
    why: "The sentence is 「この 写真を 見る **たびに** 子どものころを 思い出す。」 (Every time I look at this photo, I remember my childhood.) この needs a noun, so 写真を comes first; ～たびに follows the dictionary form 見る; and 子どものころを is the object of 思い出す. ★ is たびに."}
  ]},
 {instr: "問題３　つぎの文章を読んで、文章全体の内容を考えて、（11）から（13）の中に入る最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Read the text and, thinking about the whole text, choose the best words for gaps (11) to (13).",
  passage: "　わたしは毎週土曜日に、近所の図書館へ行きます。日本に来たばかりのころは、日本語の本は難しくて読めないと思っていたので、図書館には一度も行きませんでした。\n　ある日、友だちに「子ども向けの本から読んでみたら？」と言われて、初めて図書館に行ってみました。（11）、子ども向けの本はやさしい日本語で書かれていて、絵もたくさんあるので、わたしにも楽しく読めました。\n　それ以来、毎週三さつずつ借りています。最近は、子ども向けの本（12）、大人向けの小説も少しずつ読めるようになりました。わからない言葉があっても、辞書を使わずに最後まで読むことにしています。\n　図書館は本を借りる（13）ではありません。週末には、日本語で本を読んでもらえる会や、町のイベントも開かれています。これからも、いろいろな形で図書館を利用したいと思います。",
  items: [
   {id: "n3a-g11", q: "（11）",
    options: ["すると", "それに", "ところで", "つまり"], ok: 0,
    why: "The writer tried something and then found out what happened: **すると** (and then, when I did). 「それに」 adds another point of the same kind, 「ところで」 changes the subject, and 「つまり」 restates what came before. None of them links trying the library with what the writer discovered."},
   {id: "n3a-g12", q: "（12）",
    options: ["のかわりに", "だけでなく", "にくらべて", "として"], ok: 1,
    why: "The sentence ends with 「小説**も**…読めるようになりました」, so it adds a second kind of book: 「子ども向けの本**だけでなく**」 (not only children’s books). 「のかわりに」 (instead of) clashes with も, 「にくらべて」 (compared with) needs a comparison, and 「として」 (as) gives a role."},
   {id: "n3a-g13", q: "（13）",
    options: ["ような場所", "ための場所", "ためだけの場所", "ほどの場所"], ok: 2,
    why: "The next sentence lists other things the library offers, so the point is “a library is not **only** for borrowing books”: **ためだけの場所ではありません**. 「ための場所ではありません」 would say the library is not for borrowing books at all, and 「ような場所」 would say it is not that kind of place: both contradict the text. 「ほどの場所」 does not make sense here."}
  ]}
]},
{id: "dokkai", title: "読解", en: "Reading", minutes: 35, parts: [
 {instr: "問題４　つぎの（１）と（２）の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Short texts. Read text (1) and answer the question.",
  passage: "（１）\nこれは、中山さんが同じ会社の木下さんに送ったメールである。\n\n木下さん\n\nお疲れさまです。中山です。\n明日の会議の資料ですが、さっき見直したら、3ページ目のグラフの数字が古いままでした。新しい数字に直した資料を、共有フォルダに入れておきました。会議の前に、そちらをいんさつしていただけますか。古い資料はもういんさつしてあると聞きましたが、それは使わないでください。\nなお、会議室は予定どおり、305会議室です。\nよろしくお願いします。\n\n中山",
  items: [
   {id: "n3a-r01", q: "木下さんは、会議の前に何をしなければならないか。",
    options: ["3ページ目のグラフの数字を新しくする。", "共有フォルダに入っている資料をいんさつする。", "もういんさつしてある資料を会議室に持っていく。", "会議室を305会議室に変えてもらう。"], ok: 1,
    why: "中山さん asks 「会議の前に、そちらをいんさつしていただけますか」, and そちら is the corrected file in the shared folder: answer 2. 中山さん has already fixed the graph (1). The copies already printed should not be used (3). The room is the one that was planned all along (「予定どおり」), so nothing needs changing (4)."}
  ]},
 {instr: "問題４　つぎの（１）と（２）の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Short texts. Read text (2) and answer the question.",
  passage: "（２）\n　最近は、メモも予定もスマホに入れる人が多い。わたしも前はそうだった。しかし、去年から、大事なことは紙のノートに手で書くようにしている。スマホに入力するのは速くて便利だが、入力したことをすぐに忘れてしまうことが多かったからだ。手で書くと時間はかかるが、書いているあいだに内容をもう一度考えるので、頭に残りやすい。\n　もちろん、スマホを使うのをやめたわけではない。調べものやれんらくにはスマホを使い、覚えておきたいことだけをノートに書いている。",
  items: [
   {id: "n3a-r02", q: "この人が、大事なことをノートに書くようになったのは、なぜか。",
    options: ["スマホに入力するのは、時間がかかるから", "スマホを使うのを、やめたかったから", "スマホに入力したことを、忘れることが多かったから", "紙のノートのほうが、調べものに便利だから"], ok: 2,
    why: "The reason is given with から: 「入力したことをすぐに忘れてしまうことが多かったからだ」 (answer 3). Typing is called fast (「速くて便利」), so 1 is the reverse. The writer says 「やめたわけではない」 (I haven’t stopped using it), so 2 is wrong, and the phone, not the notebook, is used for looking things up (4)."}
  ]},
 {instr: "問題５　つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Mid-length text. Read the text and answer the questions.",
  passage: "　わたしは3年前から、市の国際交流センターで、外国から来た人に日本語を教えるボランティアをしている。始めたきっかけは、駅で道に迷っていた外国人の家族を、あんないしたことだった。そのとき、かんたんな英語さえうまく話せなくて、とても困った。その家族は「ありがとう」と日本語で言ってくれたが、わたしはもっときちんと手伝えたはずだと思い、①__くやしかった__。\n　ボランティアを始めたころは、日本語を教えるのはかんたんだと思っていた。ところが、ある日、「『あげる』と『くれる』はどう違うのですか」と聞かれて、うまく答えられなかった。毎日使っている言葉なのに、説明しようとすると、言葉が出てこないのだ。それからは、教える前に文法の本で調べてから、教室に行くようにしている。\n　教室には、工場で働く人、留学生、日本人とけっこんした人など、いろいろな人が来る。教えているのはわたしのほうだが、②__学ぶことのほうが多い__と感じている。それぞれの国の料理や習慣の話を聞くたびに、自分が知らなかった世界が見えてくるからだ。",
  items: [
   {id: "n3a-r03", q: "①__くやしかった__とあるが、なぜか。",
    options: ["外国人の家族に、日本語で話しかけられたから", "外国人の家族を、駅まであんないできなかったから", "外国人の家族が、お礼を言ってくれなかったから", "思っていたほど、外国人の家族を助けられなかったから"], ok: 3,
    why: "The writer felt they 「もっときちんと手伝えたはずだ」 (should have been able to help better), because even simple English didn’t come out: answer 4. The family did say ありがとう (so 3 is wrong), and the writer did guide them (2 is wrong). Being spoken to in Japanese (1) is not what hurt."},
   {id: "n3a-r04", q: "ボランティアを始めてから、この人がするようになったことは何か。",
    options: ["教える前に、文法を本で調べておく。", "毎日、英語で説明する勉強をする。", "「あげる」と「くれる」の違いを、学生に質問する。", "教室で、いろいろな国の料理を作る。"], ok: 0,
    why: "After failing to explain あげる and くれる, the writer says 「教える前に文法の本で調べてから、教室に行くようにしている」: answer 1. English practice (2) is never mentioned. It was a learner who asked about あげる/くれる (3), and the writer hears about other countries’ food but doesn’t cook it (4)."},
   {id: "n3a-r05", q: "②__学ぶことのほうが多い__とあるが、どういうことか。",
    options: ["学生から、日本語の文法を教えてもらうことが多い。", "学生の話から、知らなかった国の生活や文化を知ることができる。", "教える時間より、外国語を勉強する時間のほうが長い。", "いろいろな仕事をしている人と、友だちになれる。"], ok: 1,
    why: "The next sentence explains it: hearing about each country’s food and customs shows the writer 「自分が知らなかった世界」: answer 2. The writer looks grammar up in books, not from learners (1). The text says nothing about time spent on foreign languages (3) or about making friends (4)."}
  ]},
 {instr: "問題６　つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Long text. Read the text and answer the questions.",
  passage: "　先月、友人と二人で、古い家が多く残る山の中の町へ旅行に行った。駅に着いたとたん、友人はスマホを出して写真をとり始めた。古い家、川、店の前のかんばん、食べた料理まで、友人は何でもとった。夜、ホテルで数えてみると、一日で三百まい以上もあったそうだ。\n　わたしも写真をとるのはきらいではない。でも、その日わたしがとったのは、十まいほどだった。写真をとっていると、画面ばかり見ていて、目の前の景色をきちんと見ていないような気がするからだ。\n　帰ってから、友人とその旅行の話をしたとき、おもしろいことに気がついた。友人は写真を見せながら「ここ、きれいだったよね」と言うのだが、わたしが覚えているのは、写真には写っていないことばかりなのだ。古い家の庭で聞いた鳥の声、川の水の冷たさ、店のおばあさんが話してくれた町の昔の話。友人はそれらをほとんど覚えていなかった。\n　もちろん、写真にもいいところはある。時間がたって忘れてしまったことも、写真を見れば思い出せる。友人の写真のおかげで、わたしも旅行をもう一度楽しむことができた。ただ、写真は自分の目で見ることの代わりにはならない、とわたしは思う。スマホを向ける前に、まず自分の目と耳で、その場所を感じたい。写真をとるのは、そのあとでいい。",
  items: [
   {id: "n3a-r06", q: "この人が、旅行で写真をあまりとらなかったのは、なぜか。",
    options: ["写真をとるのが、あまり好きではないから", "友人がたくさん写真をとっていたから", "スマホの画面が小さくて、景色がよく見えないから", "写真をとっていると、景色をよく見なくなると思うから"], ok: 3,
    why: "The reason is in the second paragraph: 「画面ばかり見ていて、目の前の景色をきちんと見ていないような気がするからだ」: answer 4. The writer says 「写真をとるのはきらいではない」, so 1 is wrong. The friend’s many photos (2) are not given as the reason, and the screen size (3) is never mentioned."},
   {id: "n3a-r07", q: "この人が最も言いたいことは何か。",
    options: ["旅行では、写真をできるだけたくさんとっておいたほうがいい。", "写真があれば、旅行のことを忘れてしまっても困らない。", "写真をとる前に、まず自分でその場所を感じることが大切だ。", "写真をとる人は、旅行のことをほとんど覚えていない。"], ok: 2,
    why: "The writer’s point comes at the end: 「まず自分の目と耳で、その場所を感じたい。写真をとるのは、そのあとでいい」: answer 3. The writer admits photos help you remember, but says they are 「代わりにはならない」 (no substitute), so 1 and 2 go against the point. 4 turns one friend into a rule about everyone."}
  ]},
 {instr: "問題７　つぎのページは、市民センターの秋の教室のお知らせである。これを読んで、下の質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Information search. Read the notice and answer the questions.",
  passage: "**みなみ市民センター　秋の教室のごあんない**\n\n**①はじめてのパン作り**\n　土曜日　10:00～12:00（2回）\n　料金：3,000円（ざいりょう代も入っています）\n\n**②親子で作るおやつ**\n　日曜日　13:00～15:00（1回）\n　料金：親子1組1,500円\n　※小学生と、その親が一緒に参加する教室です。\n\n**③夜のヨガ**\n　水曜日　19:00～20:00（4回）\n　料金：4,000円\n\n**④スマホで写真をとろう**\n　金曜日　14:00～16:00（2回）\n　料金：2,000円\n\n【申し込み】\n・10月20日（月）から、電話か、センターの受付で申し込んでください。先に申し込んだ人から決まります。\n・市内に住んでいる人と、市内で働いている人が参加できます。\n・市内に住んでいない人は、料金が500円高くなります（市内で働いている人も同じです）。",
  items: [
   {id: "n3a-r08", q: "石川さんは市内の会社で働いていて、月曜日から金曜日まで、毎日19時まで仕事がある。子どもはいない。石川さんが参加できる教室はどれか。",
    options: ["①はじめてのパン作り", "②親子で作るおやつ", "③夜のヨガ", "④スマホで写真をとろう"], ok: 0,
    why: "On weekdays 石川さん works until 19:00, so the Wednesday 19:00 yoga (③) and the Friday afternoon photo class (④) are out. ② is on Sunday but is for a primary-school child with a parent, and 石川さん has no children. That leaves the Saturday bread class: **①**."},
   {id: "n3a-r09", q: "石川さんは市内に住んでいない。石川さんがその教室に申し込むと、料金はいくらになるか。",
    options: ["3,000円", "3,500円", "4,000円", "6,500円"], ok: 1,
    why: "Course ① costs 3,000円, and people who don’t live in the city pay 500円 more, even if they work there (「市内で働いている人も同じです」): **3,500円**. 3,000円 forgets the extra charge, 4,000円 is the yoga price, and 6,500円 wrongly doubles the fee for two sessions (the 3,000円 already covers both)."}
  ]}
]}
]});
JLAB.mocks.push({
id: "n3-b", level: "N3", title: "N3 Practice Test B",
note: "About half a real N3 test, without listening: vocabulary 15 min, grammar 20 min, reading 35 min. Different words, grammar points and texts from Test A; grammar from N3 grammar I and II (e3u9, e3u10).",
sections: [
{id: "moji", title: "言語知識（文字・語彙）", en: "Vocabulary", minutes: 15, parts: [
 {instr: "問題１　＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best reading for the underlined word from 1, 2, 3 and 4.",
  items: [
   {id: "n3b-v01", q: "弟は、サッカーの__選手__になるのが夢だ。",
    options: ["せんて", "ぜんしゅ", "せんしゅ", "せんしょう"], ok: 2,
    why: "選手 (player, athlete) is **せんしゅ**: 選 (せん, choose) + 手 (しゅ, person skilled at something, as in 歌手 かしゅ). 手 is usually て, which makes 「せんて」 tempting, but here it has its on reading. 「ぜんしゅ」 wrongly voices せ, and 「せんしょう」 is a different word (戦勝, victory)."},
   {id: "n3b-v02", q: "日曜日のパーティーには、クラスの全員が__出席__するそうだ。",
    options: ["しゅっせき", "しゅうせき", "しゅせき", "しゅっせい"], ok: 0,
    why: "出席 (attending) is **しゅっせき**: 出 (しゅつ) becomes しゅっ before せ, and 席 is せき (as in 欠席 けっせき). 「しゅせき」 drops the small っ, 「しゅうせき」 adds a long vowel that isn’t there, and 「しゅっせい」 changes 席 to せい."},
   {id: "n3b-v03", q: "たんじょう日にケーキを作ってあげたら、母はとても__喜んで__くれた。",
    options: ["たのしんで", "よろこんで", "うらんで", "なやんで"], ok: 1,
    why: "喜ぶ (to be glad, pleased) is **よろこぶ**, so 喜んで is よろこんで. 「たのしんで」 is 楽しんで (enjoying), close in meaning but written with 楽. 「うらんで」 (resenting) and 「なやんで」 (worrying) have the same んで ending but other kanji."},
   {id: "n3b-v04", q: "警察は、その男が犯人ではないかと__疑って__いる。",
    options: ["うやまって", "うしなって", "うばって", "うたがって"], ok: 3,
    why: "疑う (to suspect, doubt) is **うたがう**, so 疑って is うたがって, which fits police and a suspect (犯人). The others also start with う: 「うやまって」 is 敬って (respecting), 「うしなって」 is 失って (losing) and 「うばって」 is 奪って (taking by force)."}
  ]},
 {instr: "問題２　＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best way to write the underlined word in kanji.",
  items: [
   {id: "n3b-v05", q: "この時計は古いが、時間はいつも__せいかく__だ。",
    options: ["正確", "正格", "性確", "性格"], ok: 0,
    why: "せいかく meaning accurate is **正確** (正 correct + 確 certain). 「性格」 is also read せいかく, but it means a person’s character, which doesn’t fit a clock’s time. 「正格」 and 「性確」 mix the two words up and are not words."},
   {id: "n3b-v06", q: "初めて行く町で、道に__まよって__しまった。",
    options: ["送って", "逃って", "迷って", "返って"], ok: 2,
    why: "まよう (to get lost, be unsure) is **迷う**: 米 inside 辶. All four kanji share the 辶 “road” part, which is the trap. 送る is おくる, 逃げる is にげる (so 「逃って」 is not a word) and 返る is かえる."},
   {id: "n3b-v07", q: "花火を見に、川の近くにたくさんの人が__あつまって__いた。",
    options: ["進まって", "雑まって", "難まって", "集まって"], ok: 3,
    why: "あつまる (to gather) is **集まる**: birds (隹) on a tree (木). The other three also contain 隹, so they look right at a glance, but 進む is すすむ, and 雑 and 難 are not verbs with まる endings."}
  ]},
 {instr: "問題３　（　　）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best word to fill the gap.",
  items: [
   {id: "n3b-v08", q: "今朝は道がひどく（　　）いて、いつもより30分も遅く会社に着いた。",
    options: ["つんで", "こんで", "ならんで", "あいて"], ok: 1,
    why: "A road full of traffic is 「道が**こんで**いる」 (込む, to be crowded), which explains arriving late. 「あいて」 (empty) gives the opposite result. 「ならんで」 is for people or things in a line, and 「つんで」 is loading or piling things up."},
   {id: "n3b-v09", q: "すみません、明日は（　　）が悪いので、ほかの日にしてもらえませんか。",
    options: ["都合", "用事", "注意", "予定"], ok: 0,
    why: "「**都合**が悪い」 is the set phrase for “that time doesn’t work for me”. You can have a 「用事」 (an errand) or a 「予定」 (a plan) that day, but they don’t go with が悪い; and 「注意」 (care, warning) doesn’t fit at all."},
   {id: "n3b-v10", q: "このレストランは人気があるので、週末に行くなら（　　）しておいたほうがいい。",
    options: ["予定", "予習", "予報", "予約"], ok: 3,
    why: "Booking a table is **予約**する. All four start with 予 (before), which is the trap: 「予定」 is a plan, 「予習」 is studying before a class and 「予報」 is a forecast, as in 天気予報."},
   {id: "n3b-v11", q: "部屋が暗いので、電気の（　　）を入れた。",
    options: ["エンジン", "ブレーキ", "スイッチ", "コード"], ok: 2,
    why: "You turn on a light with its **スイッチ** (switch): 「スイッチを入れる」. An 「エンジン」 (engine) and a 「ブレーキ」 (brake) belong to cars, and a 「コード」 is a cable: you plug it in, but you don’t 入れる it to turn the light on."},
   {id: "n3b-v12", q: "長い間使っていた電子レンジが（　　）しまったので、新しいのを買った。",
    options: ["やぶれて", "こわれて", "われて", "くずれて"], ok: 1,
    why: "All four mean “break”, but for different things. A machine that stops working is **こわれる**. 「やぶれる」 is for paper or cloth tearing, 「われる」 for glass or plates cracking, and 「くずれる」 for a pile, a wall or a cake collapsing."},
   {id: "n3b-v13", q: "台風で電車が止まったので、会議は来週に（　　）になった。",
    options: ["中止", "欠席", "遅刻", "変更"], ok: 3,
    why: "「来週に」 tells you the meeting moved to another date: **変更**になった (was changed). 「中止」 (cancelled) is tempting, but a cancelled meeting doesn’t move to next week. 「欠席」 (being absent) and 「遅刻」 (being late) are about a person, not a meeting."}
  ]},
 {instr: "問題４　＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the option closest in meaning to the underlined words.",
  items: [
   {id: "n3b-v14", q: "父は__たまに__料理を作る。",
    options: ["ときどき", "よく", "毎日", "いつも"], ok: 0,
    why: "たまに means once in a while, not often: closest is **ときどき** (sometimes). 「よく」 (often), 「毎日」 (every day) and 「いつも」 (always) all say it happens much more often."},
   {id: "n3b-v15", q: "駅で__ぐうぜん__、高校のときの先生に会った。",
    options: ["約束して", "やっと", "たまたま", "ちょうど"], ok: 2,
    why: "ぐうぜん (偶然) is by chance: **たまたま**. 「約束して」 (by arrangement) is the opposite. 「やっと」 (finally) means you waited a long time, and 「ちょうど」 (just, exactly) is about timing, not luck."},
   {id: "n3b-v16", q: "この仕事は__きつい__。",
    options: ["かんたんだ", "大変だ", "つまらない", "楽しい"], ok: 1,
    why: "きつい work is hard and tiring: **大変だ**. 「かんたんだ」 (easy) and 「楽しい」 (fun) point the other way. 「つまらない」 (boring) is a negative too, but boring work isn’t necessarily hard."}
  ]},
 {instr: "問題５　つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the sentence that uses the word correctly.",
  items: [
   {id: "n3b-v17", q: "**さっぱり**",
    options: ["この部屋は、さっぱり広くて明るい。", "毎日さっぱり運動するようにしている。", "あせをかいたので、おふろに入ってさっぱりした。", "先生の説明を聞いて、さっぱりわかった。"], ok: 2,
    why: "さっぱりする is to feel fresh and clean: **「おふろに入ってさっぱりした」**. With a negative, さっぱり means “not at all” (「さっぱりわからない」), so 4 with 「わかった」 is wrong. In 1 it should be 「とても」, and in 2 「しっかり」 or 「きちんと」."},
   {id: "n3b-v18", q: "**まとめる**",
    options: ["雨が強くなってきたので、急いでかさをまとめた。", "ご飯をたくさんまとめたので、おなかがいっぱいだ。", "走る前に、くつのひもをしっかりまとめた。", "会議で出た意見をまとめて、みんなにメールで送った。"], ok: 3,
    why: "まとめる is to bring many things together into one: opinions, a report, luggage. **「意見をまとめて」** is the typical use. Opening an umbrella is 「さす」 (1), eating a lot is 「食べた」 (2), and tying shoelaces is 「むすぶ」 (3)."},
   {id: "n3b-v19", q: "**ぴったり**",
    options: ["このくつは、私の足の大きさにぴったりだ。", "帰る途中で、ぴったり雨が降ってきた。", "駅で、ぴったり昔の友だちに会った。", "父は毎朝、ぴったり新聞を読んでいる。"], ok: 0,
    why: "ぴったり is a perfect fit: **「足の大きさにぴったりだ」**. Sudden rain is 「急に」 (2). Running into someone by chance is 「ばったり」, a sound-alike trap (3). Reading the paper every morning needs no ぴったり (4)."}
  ]}
]},
{id: "bunpo", title: "言語知識（文法）", en: "Grammar", minutes: 20, parts: [
 {instr: "問題１　つぎの文の（　　）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Choose the best words to fill the gap.",
  items: [
   {id: "n3b-g01", q: "最後の電車に乗れなかったので、タクシーで帰る（　　）。",
    options: ["ことはない", "しかない", "わけがない", "ものだ"], ok: 1,
    why: "With no train left, taxi is the only choice: ～**しかない** (there’s nothing for it but to…). 「ことはない」 (there’s no need to) contradicts the situation, 「わけがない」 (no way) makes no sense about your own plan, and 「ものだ」 states a general truth."},
   {id: "n3b-g02", q: "先生に教えてもらった（　　）にやってみたら、うまくできた。",
    options: ["ほど", "うち", "ばかり", "とおり"], ok: 3,
    why: "～た**とおり**に is “exactly as”: 「教えてもらったとおりにやってみた」 = I did it just as I was taught. 「ほどに」, 「うちに」 and 「ばかりに」 can’t follow 教えてもらった with this meaning; うちに needs a state that lasts, and ばかりに means “just because”."},
   {id: "n3b-g03", q: "昨日は疲れていたので、宿題を（　　）に寝てしまった。",
    options: ["しず", "さず", "せず", "しなず"], ok: 2,
    why: "～ずに means “without doing” (= ないで). It is made from the ない-form minus ない (食べない → 食べず), but する is irregular: **せず**. 「しず」, 「さず」 and 「しなず」 are all wrong guesses at that exception."},
   {id: "n3b-g04", q: "去年の夏に日本に来て（　　）、一度も国に帰っていない。",
    options: ["以来", "とたん", "うちに", "あいだ"], ok: 0,
    why: "～て**以来** is “ever since”, for a state that has lasted from then to now, and it goes well with 一度も…ていない. 「とたん」 needs the た-form (来たとたん) and is for one sudden event. 「うちに」 and 「あいだ」 don’t follow the て-form."},
   {id: "n3b-g05", q: "この店の料理は、値段が安い（　　）、とてもおいしい。",
    options: ["せいで", "かわりに", "とおり", "わりに"], ok: 3,
    why: "～**わりに** is “for (what you’d expect from)…”: cheap food is expected to be so-so, but it’s very good. 「かわりに」 (to make up for it) needs a minus balanced by a plus, as in 「安いかわりに、量が少ない」; here both facts are good. 「せいで」 blames a cause for something bad, and 「とおり」 means “as”."},
   {id: "n3b-g06", q: "コンビニへ行く（　　）、この手紙を出してきてくれない？",
    options: ["たびに", "ついでに", "うちに", "とおりに"], ok: 1,
    why: "～**ついでに** is “while you’re at it”: since you’re going to the shop anyway, post this letter too. 「たびに」 (every time) makes a one-off request odd, 「うちに」 needs a lasting state (行っているうちに), and 「とおりに」 (just as) doesn’t fit."},
   {id: "n3b-g07", q: "新しい計画（　　）質問がある方は、メールでお送りください。",
    options: ["に関して", "にとって", "として", "によって"], ok: 0,
    why: "～**に関して** (about, concerning) is a more formal について: questions about the new plan. 「にとって」 (for, from the point of view of) needs a judgement such as 大切だ; 「として」 (as) gives a role; 「によって」 (by, depending on) gives a means or a cause."}
  ]},
 {instr: "問題２　つぎの文の　★　に入る最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Put the four pieces in order and choose the one that goes in ★.",
  items: [
   {id: "n3b-g08", q: "水を ＿＿ ＿＿ ★ ＿＿ 母にしかられた。",
    options: ["いたので", "出し", "して", "っぱなしに"], ok: 2,
    why: "The sentence is 「水を 出し っぱなしに **して** いたので 母にしかられた。」 (I left the tap running, so my mother told me off.) っぱなし follows the ます-stem 出し, and 「っぱなしにしている」 is “leave it on”; ていたので gives the reason. ★ is して."},
   {id: "n3b-g09", q: "明日は、＿＿ ＿＿ ★ ＿＿ 雨が強く降るでしょう。",
    options: ["夜", "にかけて", "夕方", "から"], ok: 0,
    why: "The sentence is 「明日は、夕方 から **夜** にかけて 雨が強く降るでしょう。」 (Tomorrow it will rain hard from the evening into the night.) The pattern is A から B にかけて, with the earlier time first, so ★ is 夜."},
   {id: "n3b-g10", q: "この町の夏のイベントは、＿＿ ＿＿ ★ ＿＿ 行われる。",
    options: ["して", "中心に", "駅前の", "広場を"], ok: 1,
    why: "The sentence is 「駅前の 広場を **中心に** して 行われる。」 (The summer event is held mainly around the square in front of the station.) 駅前の must come before a noun, so 「駅前の 広場を」; then 「を中心にして」 (centred on). ★ is 中心に."}
  ]},
 {instr: "問題３　つぎの文章を読んで、文章全体の内容を考えて、（11）から（13）の中に入る最もよいものを、１・２・３・４から一つえらびなさい。",
  en: "Read the text and, thinking about the whole text, choose the best words for gaps (11) to (13).",
  passage: "　一年ほど前から、毎朝30分早く起きて、家の近くの川のそばの道を散歩しています。始めたのは、医者に「もう少し体を動かしたほうがいいですよ」と言われたからです。最初の一週間は、早く起きるのがつらくて、何度もやめようと思いました。（11）、続けているうちに、少しずつ朝の空気が気持ちよく感じられるようになりました。\n　今では、散歩をしないと一日が始まらない（12）気がします。毎朝同じ人とすれちがうので、最近はあいさつもするようになりました。犬の名前まで覚えてしまった人もいます。\n　散歩を始めてから、体がかるくなりました。それに、夜もよく（13）。早起きは苦手だと思っていましたが、やってみれば、意外とできるものです。",
  items: [
   {id: "n3b-g11", q: "（11）",
    options: ["だから", "たとえば", "また", "しかし"], ok: 3,
    why: "The writer wanted to quit, but then began to enjoy the morning air: a turn, so **しかし** (however). 「だから」 (so) would make enjoying it the result of wanting to quit. 「たとえば」 gives an example and 「また」 adds a similar point."},
   {id: "n3b-g12", q: "（12）",
    options: ["ように", "らしい", "ような", "そうな"], ok: 2,
    why: "Before the noun 気 you need the noun-modifying form: 「始まらない**ような**気がします」 (I feel as if the day doesn’t start). 「ように」 is the adverb form and can’t come before a noun. 「らしい気がする」 isn’t used, and with そうな the negative would be 始まらなそうな, not 始まらないそうな (which is hearsay)."},
   {id: "n3b-g13", q: "（13）",
    options: ["眠れるようになりました", "眠ることにしました", "眠るはずでした", "眠ったばかりです"], ok: 0,
    why: "The paragraph lists changes since starting to walk, so it needs a change in ability: 「よく**眠れるようになりました**」 (I have come to sleep well). 「ことにしました」 is a decision, and you can’t decide to sleep well. 「はずでした」 (was supposed to) and 「たばかりです」 (just did) don’t describe a change."}
  ]}
]},
{id: "dokkai", title: "読解", en: "Reading", minutes: 35, parts: [
 {instr: "問題４　つぎの（１）と（２）の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Short texts. Read text (1) and answer the question.",
  passage: "（１）\nこれは、マンションの入口にはってあるお知らせである。\n\n**お知らせ**\n来月から、ごみを出す日が次のように変わります。\n・もえるごみ：月曜日と木曜日（今までどおり）\n・プラスチック：水曜日 → 金曜日\n・びん、かん：毎月2回の土曜日 → 毎週火曜日\nごみは、出す日の朝8時までに出してください。前の日の夜に出すと、カラスにごみを散らかされることがあるので、やめてください。\n\nかんりにん",
  items: [
   {id: "n3b-r01", q: "来月から、プラスチックのごみはいつ出せばいいか。",
    options: ["水曜日の朝8時までに出す。", "木曜日の夜に出す。", "毎週火曜日の朝8時までに出す。", "金曜日の朝8時までに出す。"], ok: 3,
    why: "Plastic moves from Wednesday to Friday (「水曜日 → 金曜日」), and rubbish goes out by 8 a.m. on the day: answer 4. Wednesday (1) is the old day. Thursday night (2) is the night before, which the notice asks people not to do. Tuesday (3) is the new day for bottles and cans."}
  ]},
 {instr: "問題４　つぎの（１）と（２）の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Short texts. Read text (2) and answer the question.",
  passage: "（２）\n　日本では、人に何かしてもらったとき、「ありがとう」ではなく「すみません」と言う人が多い。たとえば、落とした物をひろってもらったときなどだ。わたしは日本に来たばかりのころ、これがふしぎだった。お礼を言うべきときに、なぜあやまるのだろうか。\n　しかし、日本人の友人によると、この「すみません」には、「わたしのために、手間をかけさせて悪かった」という気持ちが入っているのだそうだ。つまり、一つの言葉で、相手にめいわくをかけたことを気にする気持ちと、ありがたいと思う気持ちを、同時に表しているのである。",
  items: [
   {id: "n3b-r02", q: "友人の話によると、日本人がお礼を言う場面で「すみません」と言うのは、なぜか。",
    options: ["お礼の気持ちを言葉にするのは、相手に失礼だと思っているから", "相手に悪いと思う気持ちと、お礼の気持ちを一度に表したいから", "「ありがとう」という言葉を使うのは、子どもっぽくてはずかしいから", "相手のほうが何か悪いことをしたので、それを知らせたいから"], ok: 1,
    why: "The friend explains that this すみません carries two feelings at once: sorry for the trouble (「めいわくをかけたことを気にする気持ち」) and thanks (「ありがたいと思う気持ち」): answer 2. Nothing says thanking is rude (1) or childish (3), and the speaker is the one who caused the trouble, not the other person (4)."}
  ]},
 {instr: "問題５　つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Mid-length text. Read the text and answer the questions.",
  passage: "　わたしの会社では、2年前から、一週間に3日まで、家で仕事をしてもいいことになった。それ以来、わたしは月曜日と金曜日以外は、ほとんど家で働いている。\n　家で働くようになって、いちばんよかったのは、通勤の時間がなくなったことだ。前は毎日、満員電車に1時間以上乗っていた。今はその時間に、朝ご飯をゆっくり食べたり、子どもをほいくえんに送ったりできる。\n　①__困ったこと__もあった。最初のころは、どこまでが仕事の時間で、どこからが自分の時間なのか、わからなくなってしまったのだ。夜遅くまでパソコンの前に座りっぱなしの日も多かった。そこで、仕事は午後6時までに終わらせる、仕事の部屋には仕事以外のときは入らない、という二つのルールを決めた。それからは、気持ちの切りかえが上手にできるようになった。\n　ただ、会社へ行く日も大切だと思う。メールやオンライン会議だけでは、ちょっとした相談がしにくいからだ。同じ部屋にいれば、「これ、どう思う？」とすぐに聞ける。②__家と会社、それぞれのいいところを生かして__働きたい。",
  items: [
   {id: "n3b-r03", q: "家で働くようになって、この人の生活はどう変わったか。",
    options: ["通勤に使っていた時間を、家族や自分のために使えるようになった。", "毎日、満員電車に1時間以上乗るようになった。", "子どもをほいくえんに送らなくてもよくなった。", "一週間に5日、家で働けるようになった。"], ok: 0,
    why: "The commuting time is now spent on a slow breakfast and taking the child to nursery: answer 1. The crowded train (2) was the old life. Taking the child to nursery is something the writer can now do, not stop doing (3). The rule allows up to three days a week at home (4 is wrong)."},
   {id: "n3b-r04", q: "①__困ったこと__とあるが、どんなことか。",
    options: ["家に、仕事をするための部屋がなかったこと", "パソコンが古くて、仕事に時間がかかったこと", "仕事の時間と自分の時間を、分けられなくなったこと", "会社の人と、メールでれんらくできなかったこと"], ok: 2,
    why: "The next sentence explains it: the writer couldn’t tell where work time ended and personal time began (「どこまでが仕事の時間で、どこからが自分の時間なのか、わからなくなってしまった」): answer 3. The writer has a work room (1 is wrong); an old computer (2) and email problems (4) are never mentioned."},
   {id: "n3b-r05", q: "②__家と会社、それぞれのいいところを生かして__とあるが、会社のいいところは何か。",
    options: ["仕事の部屋と、ほかの部屋を分けられること", "通勤の時間を、自分のために使えること", "オンライン会議に参加しやすいこと", "近くにいる人に、すぐに相談できること"], ok: 3,
    why: "In the office you can ask 「これ、どう思う？」 straight away, while email and online meetings make small questions hard: answer 4. Separate rooms (1) and free commuting time (2) are good points of working at home, and online meetings (3) are what makes quick questions harder."}
  ]},
 {instr: "問題６　つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Long text. Read the text and answer the questions.",
  passage: "　わたしの祖父は、物を大切にする人だった。いすの足がこわれれば自分で直し、服にあながあけばぬって、また着ていた。子どものころのわたしは、そんな祖父を見て、新しいのを買えばいいのに、と思っていた。\n　先日、十年以上使ってきた電気ポットが、急に動かなくなった。いつものように新しいものを買おうとして、ふと祖父のことを思い出した。調べてみると、メーカーに頼めば、しゅうりしてもらえることがわかった。しゅうりにかかるお金は、新しいポットを買うのと、ほとんど変わらなかった。それでも、わたしはしゅうりを頼んだ。\n　二週間後、ポットが戻ってきた。箱の中には、どこを直したかを説明する紙が入っていた。それを読みながら、わたしは、このポットで毎朝お茶をいれてきた十年の時間を思った。新しいものを買っていたら、こんな気持ちにはならなかっただろう。\n　安くて新しい物がすぐ手に入る今、こわれた物を直して使うのは、お金や時間のことだけを考えれば、むだなことかもしれない。しかし、物を直すことは、その物と過ごしてきた時間を大切にすることでもある。祖父が古い物を使い続けていたのは、お金がなかったからではなく、①__そのこと__を知っていたからなのだと、今になってわかった。",
  items: [
   {id: "n3b-r06", q: "ポットのしゅうりについて、正しいものはどれか。",
    options: ["しゅうりにかかるお金は、新しいポットよりずっと安かった。", "メーカーに頼んだが、古いポットなので、しゅうりはしてもらえなかった。", "しゅうりにかかるお金は、新しいポットを買うのとあまり変わらなかった。", "祖父に教えてもらったとおりに、自分でポットを直した。"], ok: 2,
    why: "The text says 「新しいポットを買うのと、ほとんど変わらなかった」, and ほとんど変わらない = あまり変わらない: answer 3. So 1 (much cheaper) is wrong. The maker did repair it and sent it back with a note (2 is wrong), and the writer only remembered the grandfather; he didn’t teach the repair (4)."},
   {id: "n3b-r07", q: "①__そのこと__とは、何か。",
    options: ["新しい物を買うより、直して使うほうが安いということ", "物を直すことは、その物と過ごした時間を大切にすることだということ", "安くて新しい物が、いつでもすぐに手に入るということ", "物を直して使うのは、お金と時間のむだだということ"], ok: 1,
    why: "そのこと points back to the sentence just before: 「物を直すことは、その物と過ごしてきた時間を大切にすることでもある」: answer 2. The writer says the grandfather didn’t do it for money (「お金がなかったからではなく」), so 1 is wrong. 3 describes life today, and 4 is the view the writer argues against."}
  ]},
 {instr: "問題７　つぎのページは、市民プールのごあんないである。これを読んで、下の質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。",
  en: "Information search. Read the guide and answer the questions.",
  passage: "**みどり市民プール　ご利用のごあんない**\n\n■開いている時間\n　火曜日～金曜日　10:00～21:00\n　土曜日・日曜日・しゅくじつ　9:00～18:00\n　月曜日は休みです。（月曜日がしゅくじつのときは開いていて、次の火曜日が休みになります。）\n\n■料金（1回）\n　大人（高校生以上）　500円\n　小学生・中学生　200円\n　65歳以上　300円\n　小学校に入る前の子ども　無料\n\n■注意\n・小学3年生までの子どもは、大人と一緒に入ってください。\n・水泳用のぼうしを、かならずかぶってください。\n・毎月、最初の水曜日は、10:00から13:00まで、プールのそうじをするため、泳げません。",
  items: [
   {id: "n3b-r08", q: "しゅくじつの月曜日に、大学生の兄と小学2年生の弟が、二人でプールに行く。二人の料金は、合わせていくらか。",
    options: ["700円", "1,000円", "400円", "その日は休みなので、泳げない。"], ok: 0,
    why: "On a Monday that is a public holiday the pool is open (it closes on the Tuesday instead). The university student pays the adult price, 500円, and the primary-school child 200円: **700円**. The younger brother can go in because his brother is an adult. 1,000円 charges both as adults and 400円 both as children."},
   {id: "n3b-r09", q: "毎週水曜日にプールに行っている野口さんは、今月の最初の水曜日にも行くつもりだ。その日は、何時から泳げるか。",
    options: ["9:00", "13:00", "10:00", "その日は一日中泳げない。"], ok: 1,
    why: "On weekdays the pool opens at 10:00, but on the first Wednesday of the month it is cleaned from 10:00 to 13:00, so swimming starts at **13:00**. 9:00 is the weekend opening time, 10:00 forgets the cleaning, and the pool is only closed for three hours, not all day."}
  ]}
]}
]});
/* N4 practice test A (Pass 25). Original items in JLPT format; written for IT CHICK Academy. */
JLAB.mocks.push({
 "id": "n4-a",
 "level": "N4",
 "title": "N4 practice test A",
 "note": "About half the length of the real N4 test, without the listening section. Take it in one sitting with the timer if you can.",
 "sections": [
  {
   "id": "moji",
   "title": "言語知識（文字・語彙）",
   "en": "Vocabulary",
   "minutes": 15,
   "parts": [
    {
     "instr": "もんだい１　＿＿＿の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 1: How is the underlined word written in hiragana? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-v01",
       "q": "駅の 前で 友だちを __待って__ います。",
       "options": ["もって", "たって", "まって", "かって"],
       "ok": 2,
       "why": "待つ (まつ) means \"to wait\", so 待って is まって: \"I'm waiting for a friend in front of the station.\" もって is 持って (\"hold, carry\"): 持 looks like 待 but has the hand part 扌 on the left, while 待 has 彳. たって is 立って (\"stand\") and かって is 買って (\"buy\")."
      },
      {
       "id": "n4a-v02",
       "q": "わたしの __兄__は 銀行で はたらいて います。",
       "options": ["あに", "あね", "おとうと", "いもうと"],
       "ok": 0,
       "why": "兄 is あに, \"my older brother\" (when you talk about your own family). あね is 姉 (older sister), おとうと is 弟 (younger brother) and いもうと is 妹 (younger sister). All four are family words, so read the kanji, not the context."
      },
      {
       "id": "n4a-v03",
       "q": "この __料理__は 母に 教えて もらいました。",
       "options": ["りょり", "りょうり", "りようり", "りゅうり"],
       "ok": 1,
       "why": "料理 is りょうり (cooking, a dish): りょう with a long う, then り. りょり drops the long vowel, りようり uses a big よ (り・よ・う instead of りょ・う), and りゅうり has the wrong small kana (ゅ instead of ょ)."
      },
      {
       "id": "n4a-v04",
       "q": "かぜを ひいたので、__病院__へ 行きました。",
       "options": ["びよういん", "びょうき", "びょういん", "へいいん"],
       "ok": 2,
       "why": "病院 is びょういん, \"hospital, clinic\". Watch the small ょ: びよういん with a big よ is 美容院, a hair salon. びょうき is 病気 (illness), which shares the kanji 病 but ends in 気. へいいん is not a reading of these kanji."
      },
      {
       "id": "n4a-v05",
       "q": "__黒い__ かばんを 買いました。",
       "options": ["くらい", "かるい", "ふるい", "くろい"],
       "ok": 3,
       "why": "黒い is くろい, \"black\": \"I bought a black bag.\" くらい is 暗い (dark), close in sound and meaning but a different word. かるい is 軽い (light, not heavy) and ふるい is 古い (old)."
      },
      {
       "id": "n4a-v06",
       "q": "この ビルの __入口__は どこですか。",
       "options": ["いりくち", "いりぐち", "でぐち", "にゅうぐち"],
       "ok": 1,
       "why": "入口 is いりぐち, \"entrance\". The く of くち becomes ぐ in this word, so いりくち is wrong. でぐち is 出口 (exit), the opposite word, and にゅうぐち mixes the on reading にゅう with the kun reading ぐち."
      }
     ]
    },
    {
     "instr": "もんだい２　＿＿＿の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 2: How is the underlined word written (in kanji)? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-v07",
       "q": "この にもつは とても __おもい__です。",
       "options": ["思い", "重い", "動い", "主い"],
       "ok": 1,
       "why": "おもい meaning \"heavy\" is 重い: \"This luggage is very heavy.\" 思い is also read おもい, but it is the noun \"thought, feeling\" (from 思う), not \"heavy\". 動い and 主い are not words: 動 is used in 動く (move), which contains 重, and 主 looks a little like 重."
      },
      {
       "id": "n4a-v08",
       "q": "日曜日に 友だちと __えいが__を 見ました。",
       "options": ["英画", "映図", "英図", "映画"],
       "ok": 3,
       "why": "えいが (\"film\") is written 映画. 英 is also read えい, but it means \"English, outstanding\" (英語). 図 (as in 地図) looks a little like 画 but is read ず or と."
      },
      {
       "id": "n4a-v09",
       "q": "毎日 駅まで __あるいて__ 行きます。",
       "options": ["走いて", "止いて", "足いて", "歩いて"],
       "ok": 3,
       "why": "あるく (walk) is 歩く, so あるいて is 歩いて. 走 is はしる (run: 走って), 止 is とまる/とめる (stop), and 足 is あし (foot, leg). They are all about legs and moving, but none is read ある."
      },
      {
       "id": "n4a-v10",
       "q": "先生に __しつもん__が あります。",
       "options": ["質聞", "買問", "質問", "買聞"],
       "ok": 2,
       "why": "しつもん (question) is 質問. 聞 (きく, listen/ask) is close in meaning to 問 and both contain 門, but 問 is the one in 質問. 買 (かう, buy) looks a little like 質 because both have 貝 at the bottom."
      }
     ]
    },
    {
     "instr": "もんだい３　（　　）に なにを いれますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 3: What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-v11",
       "q": "さむいので、まどを （　　） ください。",
       "options": ["あけて", "しめて", "つけて", "けして"],
       "ok": 1,
       "why": "It's cold, so the natural request is まどを しめて ください (\"please close the window\"). あけて (open) is the opposite of what a cold person wants. つけて (turn on) and けして (turn off) are used for lights and machines, not windows."
      },
      {
       "id": "n4a-v12",
       "q": "この 道を まっすぐ 行って、二つ目の かどを 右に （　　） ください。",
       "options": ["わたって", "とおって", "のって", "まがって"],
       "ok": 3,
       "why": "You turn at a corner: かどを 右に まがる (\"turn right at the corner\"). わたる is to cross (a road, a bridge), とおる is to pass along or through, and のる is to get on a vehicle. None of these goes with かどを 右に."
      },
      {
       "id": "n4a-v13",
       "q": "パーティーの 時間が かわったので、メールで みんなに （　　）しました。",
       "options": ["けんぶつ", "よやく", "うんてん", "れんらく"],
       "ok": 3,
       "why": "When the party time changes, you let everyone know: みんなに れんらく しました (連絡, \"contact, inform\"). けんぶつ (見物) is sightseeing, よやく (予約) is booking something, and うんてん (運転) is driving. None fits みんなに or \"by email\"."
      },
      {
       "id": "n4a-v14",
       "q": "へやが （　　）ので、そうじを しました。",
       "options": ["きたない", "すずしい", "せまい", "うるさい"],
       "ok": 0,
       "why": "You clean a room because it is dirty: へやが きたない ので、そうじを しました. すずしい (cool), せまい (small, narrow) and うるさい (noisy) are not reasons to clean. A narrow room doesn't get bigger when you clean it."
      },
      {
       "id": "n4a-v15",
       "q": "もう 12時ですね。（　　） 帰りましょう。",
       "options": ["だんだん", "そろそろ", "ときどき", "なかなか"],
       "ok": 1,
       "why": "そろそろ means \"it's about time (to)\": \"It's already 12. Let's start heading home.\" だんだん is \"gradually\" (だんだん さむく なる), ときどき is \"sometimes\", and なかなか goes with a negative (\"not easily\") or means \"quite\". None of them works with 帰りましょう here."
      },
      {
       "id": "n4a-v16",
       "q": "パソコンの （　　）を 入れましたが、動きません。",
       "options": ["スイッチ", "ガソリン", "テキスト", "ハンドル"],
       "ok": 0,
       "why": "スイッチを 入れる means \"switch on\": \"I switched on the computer, but it doesn't work.\" ガソリン (petrol) goes in a car, テキスト is a textbook or text, and ハンドル is a steering wheel or handle."
      }
     ]
    },
    {
     "instr": "もんだい４　＿＿＿の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 4: One sentence has roughly the same meaning as the underlined sentence. Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-v17",
       "q": "__きのうは ひまでした。__",
       "options": ["きのうは いそがしかったです。", "きのうは つかれて いました。", "きのうは いそがしくなかったです。", "きのうは 天気が よかったです。"],
       "ok": 2,
       "why": "ひま means \"free, not busy\", so ひまでした = いそがしくなかったです (\"I wasn't busy\"). いそがしかったです says the opposite. つかれて いました (I was tired) and 天気が よかったです (the weather was good) don't say anything about being free."
      },
      {
       "id": "n4a-v18",
       "q": "__父は たばこを やめました。__",
       "options": ["父は 今も たばこを すって います。", "父は たばこが 大すきです。", "父は 今は たばこを すって いません。", "父は たばこを 買いに 行きました。"],
       "ok": 2,
       "why": "やめました means he stopped (quit), so now he doesn't smoke: 今は たばこを すって いません. 今も すって います (he still smokes) is the opposite. 大すきです (he loves it) and 買いに 行きました (he went to buy some) don't mean that he quit."
      },
      {
       "id": "n4a-v19",
       "q": "__この 道は せまいです。__",
       "options": ["この 道は あかるくないです。", "この 道は ひろくないです。", "この 道は ながくないです。", "この 道は あぶなくないです。"],
       "ok": 1,
       "why": "せまい (narrow) is the opposite of ひろい (wide), so せまい = ひろくない. あかるくない is \"not bright\", ながくない is \"not long\" (that would be みじかい), and あぶなくない is \"not dangerous\"."
      },
      {
       "id": "n4a-v20",
       "q": "__中川さんは 山下さんに かさを 貸しました。__",
       "options": ["中川さんは 山下さんに かさを 借りました。", "山下さんは 中川さんに かさを 貸しました。", "山下さんは 中川さんに かさを 借りました。", "山下さんは 中川さんに かさを あげました。"],
       "ok": 2,
       "why": "If 中川さん lent (貸しました) the umbrella to 山下さん, then 山下さん borrowed (借りました) it from 中川さん: 山下さんは 中川さんに かさを 借りました. 中川さんは…借りました and 山下さんは…貸しました turn the direction round. あげました means \"gave\", so the umbrella would not come back."
      }
     ]
    },
    {
     "instr": "もんだい５　つぎの ことばの つかいかたで いちばん いい ものを １・２・３・４から ひとつ えらんで ください。",
     "en": "Problem 5: Choose the sentence that uses the word best, from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-v21",
       "q": "しんせつ",
       "options": ["この 店の 人は みんな しんせつです。", "この へやは しんせつで ひろいです。", "今日は しんせつな 天気ですね。", "この パンは しんせつで おいしいです。"],
       "ok": 0,
       "why": "しんせつ (親切) means \"kind\" and describes people and what they do: この 店の 人は みんな しんせつです. A room should be きれい or あかるい, the weather いい or おだやか, and bread やわらかい, not しんせつ."
      },
      {
       "id": "n4a-v22",
       "q": "おくれる",
       "options": ["友だちに 手紙を おくれました。", "ねぼうして、じゅぎょうに おくれました。", "この 本は おくれて おもしろいです。", "くつが 小さくて、足が おくれます。"],
       "ok": 1,
       "why": "おくれる (遅れる) means \"to be late\": ねぼうして、じゅぎょうに おくれました (\"I overslept and was late for class\"). 手紙を おくれました mixes it up with おくる (送る, send: 手紙を おくりました). An interesting book is not \"late\", and tight shoes make your feet いたい, not おくれる."
      },
      {
       "id": "n4a-v23",
       "q": "ひっこす",
       "options": ["つくえを となりの へやに ひっこしました。", "毎朝 8時に 家を ひっこします。", "駅で 電車を ひっこして 会社へ 行きます。", "来月、駅の 近くに ひっこします。"],
       "ok": 3,
       "why": "ひっこす (引っ越す) means \"to move house\": 来月、駅の 近くに ひっこします. Moving a desk is つくえを はこぶ or うごかす. Leaving home every morning is 家を 出ます, and changing trains is 電車を のりかえる."
      }
     ]
    }
   ]
  },
  {
   "id": "bunpo",
   "title": "言語知識（文法）・読解",
   "en": "Grammar and reading",
   "minutes": 35,
   "parts": [
    {
     "instr": "もんだい１　（　　）に 何を 入れますか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 1: What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-g01",
       "q": "先週 ひっこしを した とき、友だちが にもつを 運んで （　　）。",
       "options": ["あげました", "くれました", "もらいました", "さしあげました"],
       "ok": 1,
       "why": "The friend (友だちが) did something for me, so it's ～て くれました: \"When I moved house last week, a friend carried my things for me.\" あげました and さしあげました are for doing something for someone else, not for me. もらいました needs me as the subject (わたしは 友だちに 運んで もらいました), but here the subject is 友だちが."
      },
      {
       "id": "n4a-g02",
       "q": "ハンナ「あした ゆうびんきょくへ 行きます。」\nキム「ゆうびんきょくへ 行く（　　）、この 手紙も 出して きて くれませんか。」",
       "options": ["なら", "と", "ば", "たら"],
       "ok": 0,
       "why": "なら picks up what the other person just said (\"If you're going to the post office, …\") and can be followed by a request. 行くと can't be followed by a request like くれませんか. 行くば and 行くたら are not correct forms: the ば form is 行けば and the たら form is 行ったら."
      },
      {
       "id": "n4a-g03",
       "q": "電車の 中で 足を （　　）、とても いたかったです。",
       "options": ["ふんで", "ふませて", "ふまれて", "ふませられて"],
       "ok": 2,
       "why": "Someone stepped on my foot and I suffered for it: the passive ふまれて (\"my foot was stepped on\"). ふんで would mean I stepped on something myself. ふませて is causative (I made someone step), and ふませられて is causative-passive (I was made to step). Neither fits \"it hurt a lot\"."
      },
      {
       "id": "n4a-g04",
       "q": "この ケーキ、とても おいし（　　）ですね。一つ 食べても いいですか。",
       "options": ["らしい", "そう", "よう", "みたい"],
       "ok": 1,
       "why": "Looking at the cake: おいしそう (\"it looks delicious\"). そう for appearance joins the adjective stem おいし-. らしい, よう and みたい join the full form (おいしいらしい, おいしいよう, おいしいみたい), so おいしらしい, おいしよう and おいしみたい are not possible."
      },
      {
       "id": "n4a-g05",
       "q": "あした 友だちが 来るので、きのう へやを そうじして （　　）。",
       "options": ["いきました", "みせました", "ありました", "おきました"],
       "ok": 3,
       "why": "～て おく is doing something in advance to get ready: \"A friend is coming tomorrow, so I cleaned the room yesterday (in advance).\" ～て ありました describes a state and doesn't sit well with へやを and a time like きのう in a sentence about what I did. ～て いきました and ～て みせました (\"showed\") don't fit getting ready."
      },
      {
       "id": "n4a-g06",
       "q": "たくさん 勉強した（　　）、テストの てんが よくなかったです。",
       "options": ["のに", "ので", "から", "ために"],
       "ok": 0,
       "why": "のに means \"even though\", for a result you didn't expect: \"Even though I studied a lot, my test score wasn't good.\" ので and から mean \"because\", and studying a lot is not a reason for a bad score. ために here would mean \"because of\" or \"for\", which doesn't make sense either."
      },
      {
       "id": "n4a-g07",
       "q": "弟は やさいが きらいですが、母は 毎日 弟に 少し やさいを 食べ（　　）。",
       "options": ["させます", "られます", "させられます", "たがります"],
       "ok": 0,
       "why": "The mother makes the younger brother eat vegetables: causative 食べさせます (母は 弟に やさいを 食べさせます). 食べられます here would mean the mother has her vegetables eaten by him. 食べさせられます would mean the mother is made to eat them. たがります is for someone else's wishes and can't take 弟に here; it also clashes with \"he hates vegetables\"."
      },
      {
       "id": "n4a-g08",
       "q": "先生は 何時ごろ 学校に （　　）か。",
       "options": ["まいります", "うかがいます", "いらっしゃいます", "おります"],
       "ok": 2,
       "why": "For a teacher's action you use respectful language (尊敬語): いらっしゃいます (= 来ます/います). まいります, うかがいます and おります are humble forms (謙譲語) for your own actions, so they are wrong for the teacher."
      }
     ]
    },
    {
     "instr": "もんだい２　★ に 入る ものは どれですか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 2: Put the four pieces in order to make a correct sentence. Which piece goes in the ★ slot? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4a-g09",
       "q": "田中さんは いつも 音楽を ＿＿ ＿＿ ★ ＿＿ います。",
       "options": ["聞き", "ながら", "しゅくだいを", "して"],
       "ok": 2,
       "why": "The sentence is 田中さんは いつも 音楽を 聞き ながら しゅくだいを して います (\"Tanaka always does homework while listening to music\"). ながら joins the ます stem (聞き), and しゅくだいを comes before して. The ★ is the third slot: しゅくだいを."
      },
      {
       "id": "n4a-g10",
       "q": "出かける ＿＿ ★ ＿＿ ＿＿ ください。",
       "options": ["まどを", "まえに", "しめて", "おいて"],
       "ok": 0,
       "why": "The sentence is 出かける まえに まどを しめて おいて ください (\"Please close the windows before you go out\"). まえに follows the dictionary form 出かける, then the object まどを, then しめて おいて (do it in advance). The ★ is the second slot: まどを."
      },
      {
       "id": "n4a-g11",
       "q": "山下さんが ＿＿ ★ ＿＿ ＿＿ まだ わかりません。",
       "options": ["パーティーに", "来る", "どうか", "か"],
       "ok": 1,
       "why": "The sentence is 山下さんが パーティーに 来る か どうか まだ わかりません (\"I don't know yet whether Yamashita is coming to the party\"). パーティーに goes with 来る, and ～か どうか follows the plain form 来る. The ★ is the second slot: 来る."
      }
     ]
    },
    {
     "instr": "もんだい３　（１）から（３）に 何を 入れますか。ぶんしょうの 意味を 考えて、１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 3: What goes in blanks (1) to (3)? Think about the meaning of the text, and choose the best answer from 1, 2, 3 and 4.",
     "passage": "下の 文は、りゅうがくせいの ナディアさんが 書いた 作文です。\n\n　　　　　わたしの 朝\n　　　　　　ナディア・カリム\n\n　わたしは 毎朝 アパートの 近くの こうえんを 三十分ぐらい 歩いて います。日本に 来た ころは、朝 早く 起きるのが たいへんでした。（１）、今は 毎日 六時に 起きて います。\n　こうえんでは、犬と さんぽを する 人や 体そうを する 人を よく 見ます。はじめは だれとも 話しませんでした。ある日、ベンチで 休んで （２）、白い 犬を つれた おばあさんが 「おはよう」と 言いました。それから、毎朝 おばあさんと 少し 話して います。おばあさんは こうえんの 花や 木の 名前を 教えて くれます。\n　来年の 春は、おばあさんと いっしょに こうえんの さくらを （３）。",
     "items": [
      {
       "id": "n4a-g12",
       "q": "（１）",
       "options": ["でも", "だから", "それに", "たとえば"],
       "ok": 0,
       "why": "Getting up early was hard at first, but now Nadia gets up at six every day. That is a contrast, so でも (\"but\"). だから (\"so\") would make the hard start the reason she now gets up early. それに (\"also\") adds a similar point, and たとえば (\"for example\") gives an example."
      },
      {
       "id": "n4a-g13",
       "q": "（２）",
       "options": ["いれば", "いるなら", "いても", "いたら"],
       "ok": 3,
       "why": "～たら can describe what happened when you were doing something in the past: ベンチで 休んで いたら、…おばあさんが 「おはよう」と 言いました (\"When I was resting on a bench, an old lady said good morning\"). ば (いれば) and なら (いるなら) are for conditions about the future or in general, not one real past event. いても means \"even though I was\", which makes no sense here."
      },
      {
       "id": "n4a-g14",
       "q": "（３）",
       "options": ["見に 行った ことが あります", "見に 行って しまいました", "見に 行って いました", "見に 行こうと 思って います"],
       "ok": 3,
       "why": "来年の 春 is in the future, so Nadia talks about a plan: 見に 行こうと 思って います (\"I'm thinking of going to see\"). 行った ことが あります (experience), 行って しまいました (finished) and 行って いました (was going) all talk about the past and clash with 来年."
      }
     ]
    },
    {
     "instr": "もんだい４　つぎの（１）と（２）のぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 4: Read texts (1) and (2) and answer the questions. Choose the best answer from 1, 2, 3 and 4. This is text (1).",
     "passage": "（１）\nホセさんが学校から帰ると、テーブルの上にこのメモがありました。\n\nホセさんへ\n　山本先生から電話がありました。あしたの料理教室は、ばしょが２かいの教室から１かいの食堂にかわるそうです。時間は同じです。エプロンは自分で持ってきてください。料理に使うものは先生が用意するので、持ってこなくてもいいそうです。\n　　　　　　ワン",
     "items": [
      {
       "id": "n4a-r01",
       "q": "ホセさんは、あした何をしなければなりませんか。",
       "options": ["２かいの教室に、エプロンを持って行く。", "１かいの食堂に、料理に使うものを持って行く。", "１かいの食堂に、エプロンを持って行く。", "２かいの教室で、山本先生に電話をする。"],
       "ok": 2,
       "why": "The note says the class moves from the 2nd-floor classroom to the 1st-floor dining hall (１かいの食堂にかわる), and Jose must bring his own apron (エプロンは自分で持ってきてください). The teacher prepares what is used for cooking (先生が用意する), so Jose doesn't need to bring it. The 2nd-floor classroom is the old place, and the phone call was from the teacher, not to her."
      }
     ]
    },
    {
     "instr": "（２）　つぎのぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Text (2): read it and answer the question. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "これは、エマさんが小川さんに送ったメールです。\n\n小川さん\n\n　きのうは、ばんごはんをごちそうしてくださって、ありがとうございました。お母さんの料理は、とてもおいしかったです。\n　そのとき話した日本語のじしょですが、わたしはもう使わないので、小川さんの妹さんにあげたいと思います。あしたの昼、わたしが大学の食堂に持って行きます。妹さんがいらなかったら、ほかの人にあげますから、こんばんまでに、いるかどうか教えてください。\n\nエマ",
     "items": [
      {
       "id": "n4a-r02",
       "q": "小川さんは、こんばんまでに何をしなければなりませんか。",
       "options": ["妹さんがじしょをほしいかどうか、エマさんに知らせる。", "エマさんに、じしょをかえす。", "大学の食堂に、じしょを持って行く。", "妹さんといっしょに、エマさんの家へ行く。"],
       "ok": 0,
       "why": "Emma asks こんばんまでに、いるかどうか教えてください: Ogawa must tell her whether his sister wants the dictionary. Emma is the one who brings the dictionary to the dining hall (わたしが…持って行きます), the dictionary is Emma's, so there is nothing to return, and no one is visiting Emma's home."
      }
     ]
    },
    {
     "instr": "もんだい５　つぎのぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 5: Read the text and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "　わたしは去年の秋から、駅の近くのパン屋でアルバイトをしています。毎週土曜日と日曜日の朝、７時から１２時まではたらいています。\n　はじめは、おきゃくさんの日本語がはやくて、よくわかりませんでした。パンの名前もなかなかおぼえられなくて、何度も店長に聞きました。\n　ある日、小さい男の子とお母さんが店に来ました。男の子はわたしに「いちばんおいしいパンはどれ？」と聞きました。わたしはまだ店のパンをぜんぶは食べたことがなかったので、答えられませんでした。\n　その日から、わたしは毎週一つずつ、店のパンを買って食べています。今は、どのパンにも何が入っているか、おきゃくさんに話すことができます。\n　先週、あの男の子がまた来ました。わたしがチーズのパンをえらんであげると、男の子は「おいしい！」と言って、わらいました。アルバイトはたいへんですが、おきゃくさんと話すのが楽しくなりました。\n　　　　　　グエン・ラン",
     "items": [
      {
       "id": "n4a-r03",
       "q": "どうして、「わたし」は男の子の質問に答えられませんでしたか。",
       "options": ["男の子の日本語がはやくて、わからなかったから。", "パンの名前を、まだおぼえていなかったから。", "店長に聞かなければならなかったから。", "店のパンを、まだぜんぶは食べたことがなかったから。"],
       "ok": 3,
       "why": "The text gives the reason directly: わたしはまだ店のパンをぜんぶは食べたことがなかったので、答えられませんでした. Fast Japanese and forgetting the names of the bread were problems \"at first\" (はじめは), with customers in general, not the reason here. The writer asked the manager about names at first, but not about this question."
      },
      {
       "id": "n4a-r04",
       "q": "「わたし」は今、どうしていますか。",
       "options": ["毎週、あの男の子にパンをえらんであげている。", "月曜日から金曜日も、アルバイトをしている。", "毎週、店のパンを一つ買って食べている。", "今も、おきゃくさんの日本語がよくわからない。"],
       "ok": 2,
       "why": "その日から、わたしは毎週一つずつ、店のパンを買って食べています: one bread a week. The writer chose a cheese bread for the boy only once, last week. The job is on Saturdays and Sundays only, and now the writer enjoys talking with customers (話すのが楽しくなりました), so they don't still fail to understand them."
      }
     ]
    },
    {
     "instr": "もんだい６　つぎのお知らせを見て、下の質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 6: Look at the notice and answer the questions below it. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "みどり町スポーツセンター\nプールのごあんない\n\n■ 時間\n　月曜日～金曜日：10:00～21:00\n　土曜日・日曜日：9:00～18:00\n　※毎月１日は休みです。\n\n■ 料金（２時間まで／１日）\n　大人（高校生以上）：\n　　400円／600円\n　子ども（小学生・中学生）：\n　　200円／300円\n　小学生より小さい子ども：0円\n　※17時からは、大人も子どもも、料金が半分になります。\n　※小学生より小さい子どもは、大人といっしょに入ってください。\n\n■ 持ってくるもの\n　水着、ぼうし\n　（ぼうしがない人は、うけつけで100円で買えます。）",
     "items": [
      {
       "id": "n4a-r05",
       "q": "ジョンさんは高校生です。土曜日の午後3時から5時まで、弟（小学4年生）と二人でプールに入ります。二人でいくらはらいますか。",
       "options": ["600円", "400円", "300円", "900円"],
       "ok": 0,
       "why": "A high-school student pays the adult price (大人（高校生以上）): 400 yen for up to 2 hours. His brother is in primary school: 200 yen. 3 to 5 o'clock is exactly 2 hours, and the half price starts only at 17:00, so 400 + 200 = 600 yen. 400 yen is the total if both paid the child's price, 300 yen is 600 halved, and 900 yen uses the full-day prices."
      },
      {
       "id": "n4a-r06",
       "q": "アリさんは、水曜日の夜7時から1時間プールに入りたいです。ぼうしを持っていません。いくらかかりますか。",
       "options": ["200円", "300円", "400円", "500円"],
       "ok": 1,
       "why": "An adult pays 400 yen for up to 2 hours, but from 17:00 the price is half: 200 yen. He has no swimming cap, so he buys one at reception for 100 yen: 200 + 100 = 300 yen. 200 yen forgets the cap, 400 yen forgets the evening half price, and 500 yen forgets the half price but adds the cap."
      }
     ]
    }
   ]
  }
 ]
});
/* N4 practice test B (Pass 25). Original items in JLPT format; written for IT CHICK Academy. */
JLAB.mocks.push({
 "id": "n4-b",
 "level": "N4",
 "title": "N4 practice test B",
 "note": "About half the length of the real N4 test, without the listening section. Different words, grammar and texts from test A.",
 "sections": [
  {
   "id": "moji",
   "title": "言語知識（文字・語彙）",
   "en": "Vocabulary",
   "minutes": 15,
   "parts": [
    {
     "instr": "もんだい１　＿＿＿の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 1: How is the underlined word written in hiragana? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-v01",
       "q": "あしたは 朝 早く __出発__します。",
       "options": ["しゅうぱつ", "しゅぱつ", "でぱつ", "しゅっぱつ"],
       "ok": 3,
       "why": "出発 is しゅっぱつ (departure, set off), with a small っ: しゅつ + はつ becomes しゅっぱつ. しゅうぱつ has a long う instead of っ, しゅぱつ drops the っ, and でぱつ uses the kun reading で of 出 (as in 出る), which is not used in this word."
      },
      {
       "id": "n4b-v02",
       "q": "この __建物__は 百年前に できました。",
       "options": ["けんぶつ", "たてぶつ", "たてもの", "けんもの"],
       "ok": 2,
       "why": "建物 is たてもの (building): the kun readings たて (from 建てる) and もの. けんぶつ is a different word, 見物 (sightseeing). たてぶつ and けんもの mix the readings and are not words."
      },
      {
       "id": "n4b-v03",
       "q": "夏休みに __家族__で 海へ 行きました。",
       "options": ["かそく", "がぞく", "かぞう", "かぞく"],
       "ok": 3,
       "why": "家族 is かぞく (family), with ぞ (voiced) and short く. かそく has no voicing (it is a different word, 加速, \"acceleration\"). がぞく voices the wrong sound, and かぞう ends in the wrong sound."
      },
      {
       "id": "n4b-v04",
       "q": "じゅぎょうは 9時に __始まります__。",
       "options": ["しまります", "はじまります", "はしまります", "はじめます"],
       "ok": 1,
       "why": "始まる is はじまる (to begin, intransitive), so 始まります is はじまります: \"Class begins at nine.\" しまります is 閉まります (to close), a different verb. はしまります has no voicing on じ. はじめます is 始めます (to begin something, transitive), which is written with め, not まり."
      },
      {
       "id": "n4b-v05",
       "q": "__夕方__に なると、すずしく なります。",
       "options": ["ゆうがた", "ゆうほう", "ゆがた", "ゆうかた"],
       "ok": 0,
       "why": "夕方 is ゆうがた (evening, early evening). The か of かた becomes が here, so ゆうかた is wrong. ゆうほう uses the on reading ほう of 方 (as in 方法), and ゆがた has a short ゆ instead of ゆう."
      },
      {
       "id": "n4b-v06",
       "q": "わたしは スポーツの 中で、__特に__ サッカーが すきです。",
       "options": ["とくに", "とっくに", "どくに", "とうに"],
       "ok": 0,
       "why": "特に is とくに (especially). とっくに is a different word meaning \"long ago\". どくに starts with a voiced ど, and とうに is \"long ago\" in older Japanese. Only とくに is the reading of 特に."
      }
     ]
    },
    {
     "instr": "もんだい２　＿＿＿の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 2: How is the underlined word written (in kanji)? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-v07",
       "q": "駅の 前で __しゃしん__を とりました。",
       "options": ["字真", "写員", "字員", "写真"],
       "ok": 3,
       "why": "しゃしん (photo) is 写真. 字 (じ, letter) looks a little like 写 because both have a roof on top, and 員 (いん, member) looks a little like 真 (both have 目-shaped middles). Only 写真 is the word."
      },
      {
       "id": "n4b-v08",
       "q": "__としょかん__は 何時まで あいて いますか。",
       "options": ["図書間", "地書館", "図書館", "地書間"],
       "ok": 2,
       "why": "としょかん (library) is 図書館: 図 (と), 書 (しょ), 館 (かん, building). 間 is also read かん but means \"between, interval\". 地 is read ち or じ (地図), not と."
      },
      {
       "id": "n4b-v09",
       "q": "時間が ないので、__いそいで__ ください。",
       "options": ["思いで", "急いで", "悪いで", "意いで"],
       "ok": 1,
       "why": "いそぐ (hurry) is 急ぐ, so いそいで is 急いで. 思, 悪 and 意 all have 心 (heart) at the bottom like 急, but they are read おも (思う), わる (悪い) and い (意味)."
      },
      {
       "id": "n4b-v10",
       "q": "学校は 駅から __ちかい__です。",
       "options": ["近い", "通い", "送い", "運い"],
       "ok": 0,
       "why": "ちかい (near) is 近い. 通, 送 and 運 have the same \"road\" part 辶, but they are read とお/かよ (通る, 通う), おく (送る) and はこ/うん (運ぶ, 運転). 通い, 送い and 運い are not words."
      }
     ]
    },
    {
     "instr": "もんだい３　（　　）に なにを いれますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 3: What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-v11",
       "q": "この シャツは 小さいので、もう 少し 大きい サイズと （　　） ください。",
       "options": ["のりかえて", "まちがえて", "つたえて", "とりかえて"],
       "ok": 3,
       "why": "You exchange something in a shop: 大きい サイズと とりかえて ください (\"please exchange it for a bigger size\"). のりかえる is to change trains or buses, まちがえる is to make a mistake, and つたえる is to pass on a message."
      },
      {
       "id": "n4b-v12",
       "q": "サッカーを して いて、足に （　　）を しました。",
       "options": ["けが", "びょうき", "ねつ", "かぜ"],
       "ok": 0,
       "why": "An injury is けが, and the expression is けがを する: \"I hurt my leg playing football.\" びょうき (illness), ねつ (fever) and かぜ (a cold) don't happen to a leg, and びょうきを する is not used like this."
      },
      {
       "id": "n4b-v13",
       "q": "こうえんで 犬が 2（　　） あそんで います。",
       "options": ["ほん", "まい", "ひき", "だい"],
       "ok": 2,
       "why": "Small animals such as dogs, cats and fish are counted with ひき (匹): 2ひき (にひき). ほん is for long thin things, まい for flat things like paper and shirts, and だい for machines and cars."
      },
      {
       "id": "n4b-v14",
       "q": "いそいで 行きましたが、電車に （　　）。",
       "options": ["まにあいませんでした", "まちがえませんでした", "しらべませんでした", "わたりませんでした"],
       "ok": 0,
       "why": "が (\"but\") shows a bad result: \"I went in a hurry, but I didn't make it in time for the train\" (電車に まにあう, to be in time for). まちがえる and しらべる take を, not 電車に, and わたる (cross) is for roads and bridges."
      },
      {
       "id": "n4b-v15",
       "q": "この 店は いつも 人が 多くて、（　　）です。",
       "options": ["ていねい", "たいせつ", "ふくざつ", "にぎやか"],
       "ok": 3,
       "why": "A place with many people is にぎやか (lively, busy). ていねい (polite, careful) describes people or work, たいせつ (important) and ふくざつ (complicated) don't follow from \"there are always many people\"."
      },
      {
       "id": "n4b-v16",
       "q": "ホテルの （　　）で へやの かぎを もらいました。",
       "options": ["カーテン", "エレベーター", "フロント", "テーブル"],
       "ok": 2,
       "why": "At a hotel you get your room key at the front desk: フロント. カーテン (curtain) and テーブル (table) are things, not places where someone gives you a key, and you don't get a key in the エレベーター (lift)."
      }
     ]
    },
    {
     "instr": "もんだい４　＿＿＿の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
     "en": "Problem 4: One sentence has roughly the same meaning as the underlined sentence. Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-v17",
       "q": "__この 店は いつも すいて います。__",
       "options": ["この 店は いつも 人が 多いです。", "この 店は いつも 人が 少ないです。", "この 店は いつも ねだんが 安いです。", "この 店は いつも きれいです。"],
       "ok": 1,
       "why": "すいて いる (空いている) means a place is not crowded: 人が 少ない. 人が 多い is the opposite (こんで いる). Cheap prices and being clean are not what すいて いる means."
      },
      {
       "id": "n4b-v18",
       "q": "__父は 会社員です。__",
       "options": ["父は 会社を 休んで います。", "父は 会社で はたらいて います。", "父は 会社を 作りました。", "父は 会社へ 行きませんでした。"],
       "ok": 1,
       "why": "会社員 means \"company employee\", someone who works at a company: 会社で はたらいて います. 会社を 休んで います (he is off work) and 会社へ 行きませんでした (he didn't go to work) describe a day, not his job. 会社を 作りました means he started a company, which makes him its founder, not just an employee."
      },
      {
       "id": "n4b-v19",
       "q": "__あの 人は うそを つきました。__",
       "options": ["あの 人は ほんとうの ことを 言いませんでした。", "あの 人は ほんとうの ことを 言いました。", "あの 人は 何も 言いませんでした。", "あの 人は 大きい こえで 話しました。"],
       "ok": 0,
       "why": "うそを つく is \"to tell a lie\", so the person did not say what was true: ほんとうの ことを 言いませんでした. ほんとうの ことを 言いました is the opposite. 何も 言いませんでした means he said nothing at all, but a lie is something you say. Speaking loudly has nothing to do with lying."
      },
      {
       "id": "n4b-v20",
       "q": "__リンさんは その ニュースを 聞いて びっくりしました。__",
       "options": ["リンさんは その ニュースを 聞いて よろこびました。", "リンさんは その ニュースを 聞いて おこりました。", "リンさんは その ニュースを 聞いて おどろきました。", "リンさんは その ニュースを 聞いて ねむく なりました。"],
       "ok": 2,
       "why": "びっくりする and おどろく both mean \"to be surprised\". よろこぶ is to be glad, おこる is to get angry, and ねむく なる is to get sleepy. News can make you glad or angry too, but those are different feelings."
      }
     ]
    },
    {
     "instr": "もんだい５　つぎの ことばの つかいかたで いちばん いい ものを １・２・３・４から ひとつ えらんで ください。",
     "en": "Problem 5: Choose the sentence that uses the word best, from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-v21",
       "q": "こしょう",
       "options": ["かぜで こしょうして、学校を 休みました。", "テストで 名前を こしょうしました。", "古い くつが こしょうして、足が いたいです。", "パソコンが こしょうして、動かなく なりました。"],
       "ok": 3,
       "why": "こしょう (故障) is a breakdown of a machine: パソコンが こしょうして、動かなく なりました. When you catch a cold you are びょうき, a wrong name on a test is まちがえる, and old shoes get やぶれる or こわれる. こしょう is for machines such as computers, cars and lifts."
      },
      {
       "id": "n4b-v22",
       "q": "ねっしん",
       "options": ["この スープは ねっしんで おいしいです。", "かぜを ひいて、ねっしんが あります。", "今日は ねっしんな 天気ですね。", "妹は 毎日 ねっしんに 日本語を 勉強して います。"],
       "ok": 3,
       "why": "ねっしん (熱心) means \"keen, hard-working\" and describes how someone does something: ねっしんに 勉強する. The wrong sentences mix it up with words that use 熱 (heat): hot soup is あつい, a fever is ねつが ある, and hot weather is あつい 天気."
      },
      {
       "id": "n4b-v23",
       "q": "つつむ",
       "options": ["出かける 前に くつを つつみました。", "プレゼントを きれいな 紙で つつみました。", "さむいので、まどを つつんで ください。", "しゅくだいを つつんで、先生に 出しました。"],
       "ok": 1,
       "why": "つつむ (包む) means \"to wrap\": プレゼントを きれいな 紙で つつみました. You put on shoes (くつを はく), close a window (まどを しめる), and do or hand in homework (しゅくだいを する／出す)."
      }
     ]
    }
   ]
  },
  {
   "id": "bunpo",
   "title": "言語知識（文法）・読解",
   "en": "Grammar and reading",
   "minutes": 35,
   "parts": [
    {
     "instr": "もんだい１　（　　）に 何を 入れますか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 1: What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-g01",
       "q": "大切な 本を 電車の 中に わすれて （　　）。",
       "options": ["しまいました", "おきました", "みました", "ありました"],
       "ok": 0,
       "why": "～て しまう shows something done by mistake that you regret: わすれて しまいました (\"I (accidentally) left my precious book on the train\"). ～て おきました is for things done on purpose to prepare, ～て みました is \"tried doing\", and ～て ありました describes a state left by someone, not my own forgetting."
      },
      {
       "id": "n4b-g02",
       "q": "わたしは まだ 一度も ひこうきに のった （　　）。",
       "options": ["ことが ありません", "ことが できません", "ことに しません", "ことは いりません"],
       "ok": 0,
       "why": "Experience is た form + ことが ある; with まだ 一度も (\"not even once yet\") it is negative: のった ことが ありません (\"I have never been on a plane\"). ことが できる (can) takes the dictionary form (のる ことが できる), so のった ことが できません is wrong. ことに しません and ことは いりません don't express experience."
      },
      {
       "id": "n4b-g03",
       "q": "きのうの 夜、ケーキを 食べ（　　）、おなかが いたく なりました。",
       "options": ["ながら", "やすくて", "すぎて", "たがって"],
       "ok": 2,
       "why": "食べすぎて means \"I ate too much, so…\": a stomach ache is the result. 食べながら (\"while eating\") needs two actions by the same person, and getting a stomach ache is not an action. 食べやすくて (\"easy to eat\") and 食べたがって (\"someone else wants to eat\") don't explain the stomach ache."
      },
      {
       "id": "n4b-g04",
       "q": "テレビの ニュースに よると、あしたは ゆきが ふる （　　）。",
       "options": ["そうです", "つもりです", "ところです", "ことです"],
       "ok": 0,
       "why": "～に よると (\"according to\") goes with hearsay そうです: ゆきが ふる そうです (\"I hear it will snow\"). つもりです is someone's plan, and snow can't plan. ふる ところです means \"it's just about to snow\" right now, which doesn't fit あした, and ふる ことです is not a natural way to report news."
      },
      {
       "id": "n4b-g05",
       "q": "あしたは 休みですから、早く 起き（　　）。",
       "options": ["なければ なりません", "なくても いいです", "ては いけません", "た ほうが いいです"],
       "ok": 1,
       "why": "Tomorrow is a day off, so you don't have to get up early: 起きなくても いいです. なければ なりません (must) and た ほうが いいです (you'd better) don't follow from a day off. ては いけません (you must not) is too strong: no one forbids getting up early on a holiday."
      },
      {
       "id": "n4b-g06",
       "q": "妹は 6さいですが、まだ 自転車に （　　）。今、れんしゅうして います。",
       "options": ["のれません", "のらせません", "のられません", "のりましょう"],
       "ok": 0,
       "why": "She is practising, so she can't ride a bike yet: the potential form のれません (のる → のれる). のらせません is causative (\"doesn't make someone ride\"), and のられません is the passive form, which doesn't fit 妹は … 自転車に. のりましょう (\"let's ride\") doesn't fit まだ or the sentence about her."
      },
      {
       "id": "n4b-g07",
       "q": "ねつが あるなら、今日は 早く 帰った （　　）よ。",
       "options": ["ことが あります", "ほうが いいです", "ところです", "つもりです"],
       "ok": 1,
       "why": "Advice is た form + ほうが いい: 早く 帰った ほうが いいですよ (\"If you have a fever, you'd better go home early today\"). 帰った ことが あります is about experience, 帰った ところです means \"I've just gone home\", and つもりです follows the dictionary form (帰る つもり). None of them gives advice."
      },
      {
       "id": "n4b-g08",
       "q": "あした 何時に 駅に 着く（　　）、メールで 教えて ください。",
       "options": ["と", "ので", "か", "のに"],
       "ok": 2,
       "why": "A question inside a sentence uses ～か: 何時に 駅に 着くか 教えて ください (\"please tell me what time you'll arrive\"). The question word 何時 needs か. と (\"when, if\") can't be followed by a request like ください, and ので (because) and のに (although) don't make sense with 何時."
      }
     ]
    },
    {
     "instr": "もんだい２　★ に 入る ものは どれですか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 2: Put the four pieces in order to make a correct sentence. Which piece goes in the ★ slot? Choose the best answer from 1, 2, 3 and 4.",
     "items": [
      {
       "id": "n4b-g09",
       "q": "店員「どうぞ。」\nアナ「すみません、この スカート、＿＿ ＿＿ ★ ＿＿ いいですか。」",
       "options": ["ちょっと", "みて", "はいて", "も"],
       "ok": 1,
       "why": "The sentence is この スカート、ちょっと はいて みて も いいですか (\"May I try this skirt on?\"). ちょっと comes first, はいて みる is \"try wearing\", and みて も いいですか asks permission. The ★ is the third slot: みて."
      },
      {
       "id": "n4b-g10",
       "q": "日本へ ＿＿ ★ ＿＿ ＿＿ この かばんを 買いました。",
       "options": ["来る", "国の", "店で", "とき"],
       "ok": 3,
       "why": "The sentence is 日本へ 来る とき 国の 店で この かばんを 買いました (\"When I was coming to Japan, I bought this bag at a shop in my country\"). 来る とき (dictionary form) means the bag was bought before the trip. The ★ is the second slot: とき."
      },
      {
       "id": "n4b-g11",
       "q": "子どもの とき、母に ＿＿ ＿＿ ★ ＿＿ いました。",
       "options": ["毎日", "れんしゅう", "ピアノを", "させられて"],
       "ok": 1,
       "why": "The sentence is 子どもの とき、母に 毎日 ピアノを れんしゅう させられて いました (\"As a child, my mother made me practise the piano every day\"). The causative-passive れんしゅう させられる shows I had to do it. 毎日 and ピアノを can change places, but れんしゅう is always in the third slot, the ★."
      }
     ]
    },
    {
     "instr": "もんだい３　（１）から（３）に 何を 入れますか。ぶんしょうの 意味を 考えて、１・２・３・４から いちばん いい ものを 一つ えらんで ください。",
     "en": "Problem 3: What goes in blanks (1) to (3)? Think about the meaning of the text, and choose the best answer from 1, 2, 3 and 4.",
     "passage": "下の 文は、りゅうがくせいの ラウルさんが 書いた 作文です。\n\n　　　　　せんとう\n　　　　　　ラウル・ガルシア\n\n　先月、日本人の 友だちに 「せんとうに 行った ことが ある？」と 聞かれました。せんとうは 町の 大きい おふろです。わたしは 一度も 行った ことが なかったので、行って みたいと 思いました。（１）、つぎの 日曜日に 友だちと いっしょに 行きました。\n　せんとうの おふろは 家の おふろより ずっと 広くて、気持ちが よかったです。かべには 大きな 山の えが かいて （２）。おふろの あとで、友だちが 「これ、飲んで みて」と 言って、つめたい ジュースを 買って くれました。\n　日本の せんとうは、一人 ５００円ぐらいで 入れます。みなさんも 一度 （３）。",
     "items": [
      {
       "id": "n4b-g12",
       "q": "（１）",
       "options": ["しかし", "たとえば", "それとも", "それで"],
       "ok": 3,
       "why": "Raul had never been to a sentō and wanted to try it, and so he went with his friend the next Sunday. The first sentence is the reason for the second, so それで (\"so, and so\"). しかし (\"however\") would need a contrast, but he wanted to go and then went, たとえば gives an example, and それとも (\"or\") is used in questions."
      },
      {
       "id": "n4b-g13",
       "q": "（２）",
       "options": ["いました", "ありました", "おきました", "しまいました"],
       "ok": 1,
       "why": "A picture was painted on the wall, and it is still there: えが かいて ありました (transitive verb + て ある, describing a state). えが かいて いました would mean the picture itself was painting something. かいて おきました and かいて しまいました need someone as the subject who did the painting (を, not が)."
      },
      {
       "id": "n4b-g14",
       "q": "（３）",
       "options": ["行って しまいました", "行って みて ください", "行った ことが あります", "行く つもりでした"],
       "ok": 1,
       "why": "Raul ends by recommending the sentō to his readers (みなさんも 一度): 行って みて ください (\"please try going\"). 行って しまいました and 行った ことが あります talk about the past, and 行く つもりでした (\"I had planned to go\") is about his own old plan, not advice to みなさん."
      }
     ]
    },
    {
     "instr": "もんだい４　つぎの（１）と（２）のぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 4: Read texts (1) and (2) and answer the questions. Choose the best answer from 1, 2, 3 and 4. This is text (1).",
     "passage": "（１）\nこれは、アパートの入口にある、お知らせです。\n\nアパートのみなさんへ\n　来週の月曜日から、ごみの日がかわります。今までは月曜日と木曜日でしたが、来週からは火曜日と金曜日になります。\n　ごみは、その日の朝８時までに出してください。前の日の夜は出さないでください。\n　　　　　　さくらアパート",
     "items": [
      {
       "id": "n4b-r01",
       "q": "来週、ごみは、いつ出しますか。",
       "options": ["月曜日と木曜日の朝８時まで", "火曜日と金曜日の夜", "火曜日と金曜日の朝８時まで", "月曜日と金曜日の朝８時から"],
       "ok": 2,
       "why": "From next week (来週の月曜日から) rubbish day changes to Tuesday and Friday (火曜日と金曜日になります), and it must be out by 8 a.m. (朝８時までに出してください). Monday and Thursday are the old days, and the notice asks people not to put rubbish out the night before (夜は出さないでください)."
      }
     ]
    },
    {
     "instr": "（２）　つぎのぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Text (2): read it and answer the question. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "これは、パクさんがクラスの友だちに送ったメッセージです。\n\nみなさん\n　あしたのクラスのパーティーですが、レストランのよやくができなかったので、ばしょを学校の近くのこうえんにします。時間は同じ１２時です。\n　飲み物はわたしが持って行きますから、みなさんは食べ物を一つずつ持ってきてください。\n　雨がふったら、パーティーは来週にします。\nパク",
     "items": [
      {
       "id": "n4b-r02",
       "q": "雨がふらなかったら、パーティーに行く人は何をしますか。",
       "options": ["１２時に、こうえんへ飲み物を持って行く。", "１２時に、レストランへ食べ物を持って行く。", "来週、こうえんへ食べ物を一つ持って行く。", "１２時に、こうえんへ食べ物を一つ持って行く。"],
       "ok": 3,
       "why": "Park couldn't book the restaurant, so the party moves to the park near school at the same time, 12:00. Park brings the drinks (飲み物はわたしが持って行きます), and everyone brings one kind of food (食べ物を一つずつ). The party moves to next week only if it rains (雨がふったら)."
      }
     ]
    },
    {
     "instr": "もんだい５　つぎのぶんしょうを読んで、質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 5: Read the text and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "　先週の金曜日、わたしは大学からの帰りに、電車の中にかばんをわすれてしまいました。家に着いてから気がついて、すぐ駅へ行きました。\n　駅の人に話すと、「何時ごろの、どの電車にのりましたか。」と聞かれました。でも、わたしは日本語がまだ上手ではないので、うまく言えませんでした。すると、駅の人は紙に電車の時間を書いて、ゆっくり話してくれました。わたしはその紙を見て、自分がのった電車がわかりました。\n　一時間ぐらいあとで、駅の人から電話があって、「かばんは、さいごの駅にありました。」と言われました。つぎの日、わたしはその駅までかばんをとりに行きました。中のものは、何もなくなっていませんでした。\n　わたしの国では、電車にわすれたものは、ほとんどかえってきません。ですから、とてもびっくりしました。そして、ゆっくり話してくれた駅の人のやさしさが、とてもうれしかったです。これからは、わたしもこまっている人がいたら、てつだいたいと思います。\n　　　　　　ソフィア・ロペス",
     "items": [
      {
       "id": "n4b-r03",
       "q": "駅の人は、どうして紙に電車の時間を書きましたか。",
       "options": ["「わたし」が、かばんの中に紙を入れたかったから。", "「わたし」が、日本語の字を読めなかったから。", "「わたし」が、のった電車をうまく言えなかったから。", "駅の人が、いそがしくて話す時間がなかったから。"],
       "ok": 2,
       "why": "Asked which train they had taken (どの電車にのりましたか), the writer couldn't explain it well (うまく言えませんでした), so the station worker wrote the train times on paper to help. The writer could read the paper (その紙を見て…わかりました), so reading was not the problem, and the worker spoke slowly, so they were not too busy to talk."
      },
      {
       "id": "n4b-r04",
       "q": "「わたし」について、正しいものはどれですか。",
       "options": ["かばんの中のものは、何もなくなっていなかった。", "電車の中で、かばんがないことに気がついた。", "かばんは、駅の人が家に持ってきてくれた。", "国でも、わすれたものはよくかえってくる。"],
       "ok": 0,
       "why": "中のものは、何もなくなっていませんでした: nothing in the bag was missing. The writer noticed only after getting home (家に着いてから), went to the station to collect the bag (とりに行きました), and says that in their country forgotten things almost never come back (ほとんど…かえってきません)."
      }
     ]
    },
    {
     "instr": "もんだい６　つぎのお知らせを見て、下の質問に答えてください。答えは、１・２・３・４から、いちばんいいものを一つえらんでください。",
     "en": "Problem 6: Look at the notice and answer the questions below it. Choose the best answer from 1, 2, 3 and 4.",
     "passage": "あおば町\n日本語クラスのごあんない\n\n■ クラス\n　Ａ　月・水　10:00～12:00\n　　はじめて日本語を勉強する人\n　Ｂ　火・木　17:00～19:00\n　　ひらがな・カタカナが読める人\n　Ｃ　土　10:00～12:00\n　　ひらがな・カタカナが読める人\n　Ｄ　土　13:00～15:00\n　　漢字を200ぐらい知っている人\n\n■ お金\n　１か月　1,000円です。\n　テキストは、べつに800円です。（一度買えば、ずっと使えます。）\n\n■ はじめての人へ\n　クラスの日の１週間前までに、電話で名前を教えてください。\n　電話：012-345-6789\n　（月曜日～金曜日　9:00～17:00）",
     "items": [
      {
       "id": "n4b-r05",
       "q": "リーさんは会社員です。月曜日から金曜日まで、朝9時から夜6時まで仕事があります。ひらがなとカタカナは読めますが、漢字はまだ少ししか知りません。リーさんが入れるクラスはどれですか。",
       "options": ["Aクラス", "Bクラス", "Cクラス", "Dクラス"],
       "ok": 2,
       "why": "Li works on weekdays until 6 p.m., so he can't come to A (weekday mornings) or B (Tuesday and Thursday from 5 p.m.). D is for people who know about 200 kanji, and he knows only a few. C is on Saturday morning and is for people who can read hiragana and katakana: that fits."
      },
      {
       "id": "n4b-r06",
       "q": "ジャンさんは、Dクラスに4月と5月の二か月行きたいです。テキストは持っていません。ぜんぶでいくらはらいますか。",
       "options": ["1,800円", "2,000円", "2,800円", "3,600円"],
       "ok": 2,
       "why": "The class costs 1,000 yen a month (1か月1,000円), so two months is 2,000 yen. Jean has no textbook, and the textbook is 800 yen extra (べつに800円): 2,000 + 800 = 2,800 yen. 2,000 yen forgets the textbook, 1,800 yen pays for only one month, and 3,600 yen buys the textbook twice."
      }
     ]
    }
   ]
  }
 ]
});
JLAB.mocks.push({id:"n5-a", level:"N5", title:"N5 practice test A",
note:"About half a real N5 test, without listening: 20 vocabulary questions in 15 minutes, then 19 grammar and reading questions in 25 minutes. As on the real test, words are spaced out, the vocabulary section has no furigana, and the grammar and reading section has furigana over every kanji.",
sections:[
{id:"moji", title:"言語知識（文字・語彙）", en:"Vocabulary", minutes:15, parts:[
 {instr:"もんだい１　＿＿＿の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"How is the underlined word written in hiragana? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-v01", q:"この かばんは __外国__で かいました。", options:["かいこく","がいこく","がいごく","かいごく"], ok:1,
   why:"外国 (foreign country) is がいこく: 外 is がい and 国 is こく. 「かいこく」 drops the dakuten on が. 国 does become ごく in 中国 (ちゅうごく), which makes 「がいごく」 look possible, but in 外国 it stays こく. 「かいごく」 gets both sounds wrong."},
  {id:"n5a-v02", q:"ケーキを __半分__ たべました。", options:["はんふん","ばんぶん","はんぷん","はんぶん"], ok:3,
   why:"半分 (half) is はんぶん. 分 as a counter for minutes is ふん or ぷん (五分 ごふん, 三分 さんぷん), so 「はんぷん」 and 「はんふん」 are tempting, but 半分 (half) is read はんぶん. 半 itself is はん, never 「ばん」."},
  {id:"n5a-v03", q:"あには __来年__ 大学を 出ます。", options:["らいねん","らいげつ","らいにち","らいとし"], ok:0,
   why:"来年 (next year) is らいねん. 「らいげつ」 is 来月 (next month) and 「らいにち」 is 来日 (coming to Japan): same first kanji, different second one. 年 is read とし on its own, but after 来 it uses the on-reading ねん, so 「らいとし」 is wrong."},
  {id:"n5a-v04", q:"__今月__は とても いそがしいです。", options:["こんがつ","いまげつ","こんげつ","いまつき"], ok:2,
   why:"今月 (this month) is こんげつ. 月 is げつ in 今月, 先月 and 来月, but がつ in the names of months (一月 いちがつ), which is the trap in 「こんがつ」. いま is the reading of 今 on its own, so 「いまげつ」 and 「いまつき」 are wrong."},
  {id:"n5a-v05", q:"まいばん ラジオを __聞きます__。", options:["かきます","ひきます","ききます","きします"], ok:2,
   why:"聞きます (listen) is ききます: you listen to the radio. 「かきます」 is 書きます (write) and 「ひきます」 is “play (an instrument)”; neither is the reading of 聞. 「きします」 is not a word."},
  {id:"n5a-v06", q:"あの __白い__ くるまは 先生のです。", options:["しろい","くろい","あおい","あかい"], ok:0,
   why:"白い is しろい (white). 「くろい」 (black), 「あおい」 (blue) and 「あかい」 (red) are other colour words, but none of them is written with 白."}
 ]},
 {instr:"もんだい２　＿＿＿の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"How is the underlined word written? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-v07", q:"__でんしゃ__で 学校へ 行きます。", options:["雨車","電東","雨東","電車"], ok:3,
   why:"でんしゃ (train) is 電車: 電 (electricity) + 車 (vehicle). 電 is 雨 squeezed on top of a part with a hooked tail, so 雨 (rain) alone is a common slip, and 東 (east) looks like 車 with extra strokes; 「雨車」, 「電東」 and 「雨東」 are not words."},
  {id:"n5a-v08", q:"こうえんは えきの __みなみ__がわに あります。", options:["北","南","東","西"], ok:1,
   why:"みなみ (south) is 南. The other three are also directions: 「北」 is きた (north), 「東」 is ひがし (east) and 「西」 is にし (west)."},
  {id:"n5a-v09", q:"__しゃわー__を あびてから ねます。", options:["シャワー","ツャワー","シャウー","シャワ"], ok:0,
   why:"しゃわー (shower) in katakana is シャワー. 「ツャワー」 uses ツ (tsu) instead of シ (shi): ツ’s strokes go down from the top, シ’s go up from the left. 「シャウー」 has ウ (u) for ワ (wa), and 「シャワ」 leaves out the long-vowel mark ー."},
  {id:"n5a-v10", q:"ともだちと 一時間 __はなしました__。", options:["語しました","読しました","話しました","話りました"], ok:2,
   why:"はなしました (talked) is 話しました: the verb 話す is written 話 + す. 「語」 (language, as in 日本語) and 「読」 (read) share the 言 side and look alike, but they aren’t read はな. 「話りました」 has the wrong okurigana: the kana after 話 is し, not り."}
 ]},
 {instr:"もんだい３　（　　）に なにが はいりますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-v11", q:"さむいですから、（　　）を きて 出かけます。", options:["スプーン","ノート","テープ","セーター"], ok:3,
   why:"It’s cold, so you put on (きて) a セーター (sweater). You can’t wear 「スプーン」 (a spoon), 「ノート」 (a notebook) or 「テープ」 (tape), and きる is the verb for clothes on the upper body."},
  {id:"n5a-v12", q:"この にもつは とても （　　）です。いっしょに もって ください。", options:["かるい","おもい","ひろい","あまい"], ok:1,
   why:"The speaker asks for help carrying the bag, so it is おもい (heavy). 「かるい」 (light) is the opposite: you wouldn’t need help. 「ひろい」 (wide, spacious) is for rooms and places, and 「あまい」 (sweet) is a taste."},
  {id:"n5a-v13", q:"えきで でんしゃの （　　）を かいました。", options:["きって","はがき","ふうとう","きっぷ"], ok:3,
   why:"At a station you buy a train きっぷ (ticket). 「きって」 (a stamp) sounds very close but is for letters, as are 「はがき」 (a postcard) and 「ふうとう」 (an envelope)."},
  {id:"n5a-v14", q:"あには めがねを （　　） います。", options:["かけて","きて","はいて","しめて"], ok:0,
   why:"Glasses take the verb かける: めがねを かけて います (is wearing glasses). Japanese uses different verbs for wearing: 「きて」 for shirts and coats, 「はいて」 for shoes, trousers and skirts, 「しめて」 for a tie or belt."},
  {id:"n5a-v15", q:"わたしの へやは この ビルの ５（　　）に あります。", options:["ばん","かい","まい","ほん"], ok:1,
   why:"Floors of a building are counted with かい: ５かい is the fifth floor. 「ばん」 is for numbers in a list (５ばん, number five), 「まい」 for flat things like paper, and 「ほん」 for long thin things like pens."},
  {id:"n5a-v16", q:"しゅくだいは （　　） おわりました。いまから あそびに 行きます。", options:["まだ","よく","もう","あまり"], ok:2,
   why:"The homework is done and the speaker is going out to play, so it’s もう (already) おわりました. 「まだ」 (not yet) goes with a negative: まだ おわって いません. 「あまり」 also needs a negative (あまり ～ません). 「よく おわりました」 isn’t natural Japanese."}
 ]},
 {instr:"もんだい４　＿＿＿の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"Which sentence means about the same as the underlined sentence? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-v17", q:"__この へやは くらいです。__", options:["この へやは あかるいです。","この へやは あかるくないです。","この へやは ひろくないです。","この へやは しずかじゃ ないです。"], ok:1,
   why:"くらい (dark) means the same as あかるくない (not bright). 「あかるいです」 is the opposite. 「ひろくないです」 (not spacious) is about size and 「しずかじゃ ないです」 (not quiet) is about noise."},
  {id:"n5a-v18", q:"__わたしは まいあさ ７時に おきます。__", options:["わたしは あさは ときどき ７時に おきます。","わたしは よるは いつも ７時に ねます。","わたしは あさ ７時に ねます。","わたしは あさは いつも ７時に おきます。"], ok:3,
   why:"まいあさ (every morning) = あさは いつも (always in the morning). 「ときどき」 means only sometimes. The other two change the verb to ねます (go to bed) and the time of day."},
  {id:"n5a-v19", q:"__あの 人は わたしの おばです。__", options:["あの 人は わたしの ははの あねです。","あの 人は わたしの ちちの おとうとです。","あの 人は わたしの ははの おかあさんです。","あの 人は わたしの ちちの あにです。"], ok:0,
   why:"おば is an aunt, so “my mother’s older sister” (ははの あね) fits. 「ちちの おとうと」 and 「ちちの あに」 are uncles (おじ), and 「ははの おかあさん」 is a grandmother (そぼ)."},
  {id:"n5a-v20", q:"__おととい ゆうびんきょくに 行きました。__", options:["きのう ゆうびんきょくに 行きました。","みっか まえに ゆうびんきょくに 行きました。","ふつか まえに ゆうびんきょくに 行きました。","いっしゅうかん まえに ゆうびんきょくに 行きました。"], ok:2,
   why:"おととい is the day before yesterday, which is ふつか まえ (two days ago). 「きのう」 is one day ago, 「みっか まえ」 three days ago and 「いっしゅうかん まえ」 a week ago."}
 ]}
]},
{id:"bunpo-dokkai", title:"言語知識（文法）・読解", en:"Grammar and reading", minutes:25, parts:[
 {instr:"もんだい１　（　　）に [何]{なに}を [入]{い}れますか。１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"What do you put in the brackets? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-g01", q:"わたしは まいにち としょかん（　）べんきょうします。", options:["に","を","で","へ"], ok:2,
   why:"で marks the place where an action happens: としょかんで べんきょうします (study at the library). 「に」 is for where something is (あります/います) or where you go, 「へ」 is for direction (としょかんへ 行きます), and 「を」 marks the object."},
  {id:"n5a-g02", q:"「もう ひるごはんを [食]{た}べましたか。」「いいえ、（　　）。」", options:["まだです","もう [食]{た}べました","まだ [食]{た}べました","もう [食]{た}べません"], ok:0,
   why:"The answer to もう ～ましたか (have you … yet?) after いいえ is まだです (not yet), or まだ たべて いません. 「もう 食べました」 contradicts いいえ, 「まだ 食べました」 is ungrammatical (まだ needs a negative here), and 「もう 食べません」 means “I won’t eat any more”."},
  {id:"n5a-g03", q:"すみません、この ペンを （　　） いいですか。", options:["つかっては","つかって","つかった","つかっても"], ok:3,
   why:"Asking permission is て-form + も いいですか: つかっても いいですか (may I use …?). 「つかっては」 belongs to the rule pattern ～ては いけません (you must not), and 「つかって」 or 「つかった」 without も can’t join いいですか."},
  {id:"n5a-g04", q:"「いぬと ねこと どちらが すきですか。」「ねこ（　）ほうが すきです。」", options:["が","の","より","を"], ok:1,
   why:"In comparisons, a noun joins ほう with の: ねこの ほうが すきです (I prefer cats). 「より」 marks the thing you like less (いぬより ねこの ほうが…), and 「が」 or 「を」 can’t join a noun to ほう."},
  {id:"n5a-g05", q:"なつやすみに うみへ （　　）です。", options:["[行]{い}きます","[行]{い}って","[行]{い}きたい","[行]{い}った"], ok:2,
   why:"ます stem + たい + です says what you want to do: うみへ 行きたいです (I want to go to the sea). The others can’t stand before です: 「行きますです」, 「行ってです」 and 「行ったです」 are not correct Japanese."},
  {id:"n5a-g06", q:"あたまが いたい（　　）、きょうは [学校]{がっこう}を [休]{やす}みます。", options:["から","まで","より","でも"], ok:0,
   why:"から after a reason means “because”: my head hurts, so I’m staying home. 「まで」 (until) and 「より」 (than) don’t give a reason, and 「でも」 (but) can’t follow いたい directly and would give the wrong meaning anyway."},
  {id:"n5a-g07", q:"「この かばんは （　　）ですか。」「３０００[円]{えん}です。」", options:["いくつ","なん","どれ","いくら"], ok:3,
   why:"The answer is a price, so the question word is いくら (how much). 「いくつ」 asks how many or how old, 「なん」 asks what, and 「どれ」 asks which one."},
  {id:"n5a-g08", q:"テストの ときは、[本]{ほん}や ノートを （　　） ください。じしょも だめです。", options:["[見]{み}て","[見]{み}ないで","[見]{み}なくて","[見]{み}ない"], ok:1,
   why:"じしょも だめです (dictionaries aren’t allowed either) shows this is a rule against looking, so it’s ない-form + で ください: 見ないで ください (please don’t look). 「見て ください」 says the opposite, and 「見なくて」 and 「見ない」 can’t come before ください."}
 ]},
 {instr:"もんだい２　★に [入]{はい}る ものは どれですか。１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Which piece goes in the ★ space when the sentence is put in the right order? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5a-g09", q:"つくえの ＿＿ ＿＿ ★ ＿＿ ですか。", options:["[本]{ほん}は","だれの","[上]{うえ}に","ある"], ok:0,
   why:"The sentence is 「つくえの 上に ある 本は だれのですか。」 (Whose is the book on the desk?). 上に ある describes 本, so it comes before 本は, and だれの joins ですか at the end. The third piece, in the ★, is 「本は」."},
  {id:"n5a-g10", q:"わたしは きのう デパートへ ＿＿ ＿＿ ★ ＿＿ [行]{い}きました。", options:["くつを","に","あたらしい","かい"], ok:3,
   why:"The sentence is 「わたしは きのう デパートへ あたらしい くつを かいに 行きました。」 (Yesterday I went to the department store to buy new shoes). あたらしい describes くつ, and ます stem + に + 行く means “go to do”, so かい comes just before に. The ★ is 「かい」."},
  {id:"n5a-g11", q:"やまださんは ＿＿ ＿＿ ★ ＿＿ せが [高]{たか}いです。", options:["いちばん","の","[中]{なか}で","クラス"], ok:2,
   why:"The sentence is 「やまださんは クラスの 中で いちばん せが 高いです。」 (Yamada is the tallest in the class). ～の 中で (among …) follows the group, クラスの, and いちばん comes last, right before せが 高い. The ★ is the third piece, 「中で」."}
 ]},
 {instr:"もんだい３　［１］から ［３］に [何]{なに}を [入]{い}れますか。ぶんしょうの いみを かんがえて、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"What goes in gaps 1 to 3? Think about the meaning of the text and choose the best answer from 1, 2, 3 and 4.",
  passage:"ミゲルさんは [日本語]{にほんご}[学校]{がっこう}の [学生]{がくせい}です。クラスで この ぶんしょうを よみました。\n\n「[日]{にち}よう[日]{び}の あさ」\n　わたしは [日]{にち}よう[日]{び}の あさ、いつも こうえんを はしります。こうえんは うちから すこし とおいです。［１］、ひろくて きれいですから、わたしは この こうえんが [大]{だい}すきです。\n　うちへ かえって［２］、シャワーを あびて、あさごはんを [食]{た}べます。[午後]{ごご}は [友]{とも}だちと [日本語]{にほんご}を べんきょうします。\n　らいしゅうの [日]{にち}よう[日]{び}は、クラスの キムさんも いっしょに はしります。みなさんも ［３］。",
  items:[
  {id:"n5a-g12", q:"［１］", options:["だから","でも","それから","じゃ"], ok:1,
   why:"The park is a bit far (a minus), but it’s big and pretty (a plus): a contrast, so でも (but). 「だから」 (so) would make “far” the reason he loves it. 「それから」 (and then) is for the next event, and 「じゃ」 (well then) starts a conclusion in conversation."},
  {id:"n5a-g13", q:"［２］", options:["から","まで","ので","より"], ok:0,
   why:"て-form + から means “after doing”: うちへ かえってから、シャワーを あびて… (after I get home, I shower). 「まで」 and 「より」 can’t follow a て-form, and 「ので」 (because) follows a plain form, not a て-form."},
  {id:"n5a-g14", q:"［３］", options:["いっしょに はしりましたか","いっしょに はしりたいです","いっしょに はしりませんか","いっしょに はしって いますか"], ok:2,
   why:"Miguel is inviting his classmates, so it’s ～ませんか: みなさんも いっしょに はしりませんか (won’t you run with us?). 「はしりましたか」 asks about the past, 「はしって いますか」 asks what they are doing now, and 「はしりたいです」 can’t speak for what other people want."}
 ]},
 {instr:"もんだい４　つぎの （１）と （２）の ぶんしょうを よんで、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Read texts (1) and (2) and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
  passage:"（１）\n（[学校]{がっこう}で）\nクラスの みなさんへ\nあしたは [学校]{がっこう}の [外]{そと}で [日本語]{にほんご}の じゅぎょうを します。いつもより はやく、８[時]{じ}[半]{はん}に [山下]{やました}えきの [前]{まえ}に [来]{き}て ください。えきから バスで [行]{い}きます。\nひるごはんは みんなで レストランで [食]{た}べますから、おべんとうは いりません。のみものは もって [来]{き}て ください。\n[中山]{なかやま}",
  items:[
  {id:"n5a-r01", q:"あした、[学生]{がくせい}は どう しますか。", options:["８[時]{じ}[半]{はん}に えきへ [行]{い}って、のみものを もって いきます。","８[時]{じ}[半]{はん}に [学校]{がっこう}へ [行]{い}って、のみものを もって いきます。","８[時]{じ}[半]{はん}に えきへ [行]{い}って、おべんとうを もって いきます。","８[時]{じ}[半]{はん}に [学校]{がっこう}へ [行]{い}って、おべんとうを もって いきます。"], ok:0,
   why:"The class meets at 8:30 in front of 山下えき (not at school: the lesson is 学校の 外で), and students bring a drink: のみものは もって 来て ください. Lunch is at a restaurant, so おべんとうは いりません: no packed lunch. Only option 1 has both the station and the drink."}
 ]},
 {instr:"もんだい４（２）",
  en:"Text (2): read it and answer the question.",
  passage:"（２）\n（ソフィアさんが リンさんに メールを [書]{か}きました。）\nリンさん\nきょう、いっしょに えいがを [見]{み}に [行]{い}きませんか。えいがは ６[時]{じ}からです。その [前]{まえ}に、いっしょに ばんごはんを [食]{た}べましょう。５[時]{じ}に えきの [前]{まえ}で まって います。えいがの チケットは きのう わたしが ２まい かいました。\nソフィア",
  items:[
  {id:"n5a-r02", q:"ソフィアさんは [何時]{なんじ}に どこで リンさんを まちますか。", options:["５[時]{じ}に えいがかんの [前]{まえ}で まちます。","６[時]{じ}に えきの [前]{まえ}で まちます。","５[時]{じ}に えきの [前]{まえ}で まちます。","６[時]{じ}に えいがかんの [前]{まえ}で まちます。"], ok:2,
   why:"「５時に えきの 前で まって います」: Sophia waits at the station at 5:00, because they will eat dinner before the film. 6:00 is when the film starts, so the options with ６時 are traps, and the cinema (えいがかん) is never named as the meeting place."}
 ]},
 {instr:"もんだい５　つぎの ぶんしょうを よんで、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Read the text and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
  passage:"「となりの [中川]{なかがわ}さん」\nエマ・ロペス\n\n　わたしは きょねんの ９[月]{がつ}から [日本]{にほん}に すんで います。アパートの となりの へやの [中川]{なかがわ}さんは、７５さいの おばあさんです。ひとりで すんで います。\n　はじめは、あさの 「おはようございます」だけでした。でも、１０[月]{がつ}の ある [日]{ひ}、[雨]{あめ}が たくさん ふりました。わたしは かさが なくて、えきの [前]{まえ}で こまって いました。その とき、[中川]{なかがわ}さんが [来]{き}ました。わたしは [中川]{なかがわ}さんに かさを かりました。\n　つぎの [日]{ひ}、わたしは かさを かえしに [行]{い}きました。[中川]{なかがわ}さんは 「おちゃを のみませんか」と いいました。わたしは [中川]{なかがわ}さんの へやで おちゃを のんで、たくさん [話]{はな}しました。[中川]{なかがわ}さんは まえは [小学校]{しょうがっこう}の [先生]{せんせい}でした。\n　いまは、まいしゅう [日]{にち}よう[日]{び}に [中川]{なかがわ}さんと いっしょに ばんごはんを つくります。[中川]{なかがわ}さんは [日本]{にほん}の たべものを つくって、わたしは メキシコの たべものを つくります。とても たのしいです。",
  items:[
  {id:"n5a-r03", q:"エマさんは どうして [中川]{なかがわ}さんの へやへ [行]{い}きましたか。", options:["かさを かりに [行]{い}きました。","おちゃを のみに [行]{い}きました。","[日本語]{にほんご}を ならいに [行]{い}きました。","かさを かえしに [行]{い}きました。"], ok:3,
   why:"「つぎの 日、わたしは かさを かえしに 行きました」: Emma went to give back the umbrella she had borrowed the day before. She did drink tea there, but only because Mrs Nakagawa invited her after she arrived, so 「おちゃを のみに」 is a trap. She borrowed (かりました) the umbrella the day before, in front of the station (えきの 前で), not by going to her room, and nothing is said about learning Japanese."},
  {id:"n5a-r04", q:"エマさんは いま、[日]{にち}よう[日]{び}に [何]{なに}を して いますか。", options:["[中川]{なかがわ}さんと いっしょに アパートを そうじして います。","[中川]{なかがわ}さんと いっしょに ばんごはんを つくって います。","[中川]{なかがわ}さんと いっしょに [日本語]{にほんご}を べんきょうして います。","[中川]{なかがわ}さんの [小学校]{しょうがっこう}で べんきょうして います。"], ok:1,
   why:"The last paragraph says that every Sunday Emma and Mrs Nakagawa cook dinner together (いっしょに ばんごはんを つくります). Cleaning and studying Japanese are never mentioned, and the 小学校 is where Mrs Nakagawa used to teach (まえは … 先生でした), not a place Emma goes."}
 ]},
 {instr:"もんだい６　[下]{した}の ページを [見]{み}て、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Look at the page below and answer the question. Choose the best answer from 1, 2, 3 and 4. (On the real test the page is on the right.)",
  passage:"レストラン みどり　ランチ メニュー\n（[月]{げつ}よう[日]{び}～[金]{きん}よう[日]{び}　[午前]{ごぜん}１１[時]{じ}～[午後]{ごご}２[時]{じ}）\n\n・Ａランチ（ハンバーグと サラダ）　８００[円]{えん}\n・Ｂランチ（さかなと ごはん）　７００[円]{えん}\n・Ｃランチ（さかなと やさいの てんぷら）　９００[円]{えん}\n・カレーライス　６００[円]{えん}\n\n※ ランチの [人]{ひと}は、コーヒーか こうちゃが １００[円]{えん}です。",
  items:[
  {id:"n5a-r05", q:"マリアさんは ひるごはんに さかなを [食]{た}べたいです。コーヒーも のみたいです。お[金]{かね}は ８５０[円]{えん} あります。マリアさんは どれを [食]{た}べますか。", options:["Ａランチ","Ｂランチ","Ｃランチ","カレーライス"], ok:1,
   why:"Maria wants fish and a coffee, and she has 850 yen. Ｂランチ is fish: 700 + 100 for the coffee = 800 yen, so she can pay. 「Ｃランチ」 is fish too, but 900 + 100 = 1000 yen is more than she has. 「Ａランチ」 is a hamburger steak, not fish, and 「カレーライス」 is cheap enough but has no fish."}
 ]}
]}
]});
JLAB.mocks.push({id:"n5-b", level:"N5", title:"N5 practice test B",
note:"About half a real N5 test, without listening: 20 vocabulary questions in 15 minutes, then 19 grammar and reading questions in 25 minutes. As on the real test, words are spaced out, the vocabulary section has no furigana, and the grammar and reading section has furigana over every kanji.",
sections:[
{id:"moji", title:"言語知識（文字・語彙）", en:"Vocabulary", minutes:15, parts:[
 {instr:"もんだい１　＿＿＿の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"How is the underlined word written in hiragana? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-v01", q:"きょうは __天気__が いいですね。", options:["でんき","てんぎ","てんき","でんぎ"], ok:2,
   why:"天気 (weather) is てんき, with no dakuten on either kana. 「でんき」 is a different word, 電気 (electricity, a light), and 「てんぎ」 and 「でんぎ」 put a dakuten where there isn’t one."},
  {id:"n5b-v02", q:"この シャツは __千円__でした。", options:["せんえん","ぜんえん","せんねん","ぜんねん"], ok:0,
   why:"千円 (1,000 yen) is せんえん. 千 is せん (ぜん only after さん: 三千 さんぜん). 「せんねん」 runs ん and え together into ね; it is how 千年 (a thousand years) is read, not 千円."},
  {id:"n5b-v03", q:"ゆうびんきょくは ぎんこうの __前__に あります。", options:["うしろ","よこ","となり","まえ"], ok:3,
   why:"前 is まえ (in front of). 「うしろ」 (behind, 後ろ), 「よこ」 (beside) and 「となり」 (next door) are other position words, but none is written 前."},
  {id:"n5b-v04", q:"かぜを ひいて、きのう かいしゃを __休みました__。", options:["すみました","やすみました","のみました","よみました"], ok:1,
   why:"休みました is やすみました (took a day off, was absent): 休む. 「すみました」 drops the や, and 「のみました」 (drank) and 「よみました」 (read) are other verbs that end in む."},
  {id:"n5b-v05", q:"__午後__ ３時に えきで あいましょう。", options:["ごご","ごこ","ごぜん","こうご"], ok:0,
   why:"午後 (afternoon, p.m.) is ごご, both with dakuten. 「ごぜん」 is 午前 (morning, a.m.), the other half of the day. 後 is ご here; 「ごこ」 drops the second dakuten and 「こうご」 is not this word."},
  {id:"n5b-v06", q:"この ビルは とても __高い__です。", options:["ながい","ひろい","ふるい","たかい"], ok:3,
   why:"高い is たかい (tall, high; also expensive). 「ながい」 is 長い (long), 「ひろい」 is “spacious” and 「ふるい」 is “old”: all い-adjectives, but not readings of 高."}
 ]},
 {instr:"もんだい２　＿＿＿の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"How is the underlined word written? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-v07", q:"えきの __みぎ__に ほんやが あります。", options:["左","友","右","名"], ok:2,
   why:"みぎ (right) is 右: a ナ shape with 口 underneath. 「左」 (ひだり, left) has 工 underneath instead, 「友」 (とも, friend) has 又, and 「名」 (な, name) is 夕 over 口. They look alike at a glance, so check the bottom part."},
  {id:"n5b-v08", q:"__おおきい__ かばんを かいました。", options:["天きい","大きい","人きい","火きい"], ok:1,
   why:"おおきい (big) is 大きい. 「天」 (sky) is 大 with an extra line on top, 「人」 (person) has no crossing line, and 「火」 (fire) is 人 with two dots beside it and no crossing line. 大 is a person with arms spread wide: big."},
  {id:"n5b-v09", q:"__ぼーるぺん__で なまえを かいて ください。", options:["ボールペソ","ポールペン","ボーレペン","ボールペン"], ok:3,
   why:"ぼーるぺん is ボールペン (ballpoint pen). 「ボールペソ」 has ソ (so) for ン (n): ソ’s strokes go down from the top, ン’s main stroke goes up. 「ポールペン」 has ポ (po) instead of ボ (bo), and 「ボーレペン」 has レ (re) instead of ル (ru)."},
  {id:"n5b-v10", q:"わたしは __まいにち__ にほんごを べんきょうします。", options:["毎日","母日","毎白","母白"], ok:0,
   why:"まいにち (every day) is 毎日. 毎 (every) has a short stroke and a line on top of the shape that 母 (mother) has, so 「母日」 is a common slip. 日 (day) and 白 (white) differ by the small stroke on top of 白."}
 ]},
 {instr:"もんだい３　（　　）に なにが はいりますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"What goes in the brackets? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-v11", q:"くらいですから、でんきを （　　） ください。", options:["けして","しめて","つけて","あけて"], ok:2,
   why:"It’s dark, so please turn the light on: でんきを つけて ください. 「けして」 (turn off) is the opposite, and 「しめて」 (close) and 「あけて」 (open) are for doors and windows, not lights."},
  {id:"n5b-v12", q:"わたしは まいばん ９時ごろ おふろに （　　）。", options:["あびます","はいります","あらいます","でかけます"], ok:1,
   why:"In Japanese you “enter” a bath: おふろに はいります. 「あびます」 goes with シャワーを (シャワーを あびます), 「あらいます」 (wash) needs an object with を, and 「でかけます」 (go out) doesn’t fit おふろに."},
  {id:"n5b-v13", q:"コーヒーに （　　）を 入れますか。", options:["しお","しょうゆ","ソース","さとう"], ok:3,
   why:"The usual thing to put in coffee is さとう (sugar). 「しお」 (salt), 「しょうゆ」 (soy sauce) and 「ソース」 (sauce) are seasonings for food, not for coffee."},
  {id:"n5b-v14", q:"この カレーは とても （　　）です。みずを ください。", options:["からい","あまい","つめたい","ぬるい"], ok:0,
   why:"Asking for water after curry suggests it is からい (spicy, hot). 「あまい」 (sweet) and 「ぬるい」 (lukewarm) are no reason to need water, and 「つめたい」 (cold) curry wouldn’t make you thirsty either."},
  {id:"n5b-v15", q:"としょかんで 本を ３（　　） かりました。", options:["まい","ほん","さつ","だい"], ok:2,
   why:"Books are counted with さつ: ３さつ (three books). 「まい」 is for flat things like paper and shirts, 「ほん」 for long thin things like pens and bottles, and 「だい」 for machines like cars."},
  {id:"n5b-v16", q:"この みせは （　　） たかくないですから、よく 来ます。", options:["とても","あまり","もっと","たくさん"], ok:1,
   why:"あまり + negative means “not very”: あまり たかくないです (not very expensive), a good reason to come often. 「とても」 and 「もっと」 go with positive adjectives (とても たかいです), and 「たくさん」 (a lot) is for amounts, not adjectives."}
 ]},
 {instr:"もんだい４　＿＿＿の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。",
  en:"Which sentence means about the same as the underlined sentence? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-v17", q:"__山川さんは うたが へたです。__", options:["山川さんは うたが じょうずです。","山川さんは うたが あまり すきじゃ ありません。","山川さんは うたを よく うたいます。","山川さんは うたが じょうずじゃ ありません。"], ok:3,
   why:"へた (bad at) = じょうずじゃ ありません (not good at). 「じょうずです」 is the opposite. Liking (すき) and how often you sing (よく うたいます) are different from skill: someone can be bad at singing and still love it."},
  {id:"n5b-v18", q:"__中山さんは ほんやに つとめて います。__", options:["中山さんは ほんやで はたらいて います。","中山さんは ほんやで かいものを して います。","中山さんは ほんやの ちかくに すんで います。","中山さんは ほんやで 本を よんで います。"], ok:0,
   why:"つとめて います (is employed at) = はたらいて います (works). Note the particles: に つとめる but で はたらく. Shopping (かいもの), living nearby (すんで います) and reading there are not the same as working there."},
  {id:"n5b-v19", q:"__けさ シャワーを あびました。__", options:["きのうの あさ シャワーを あびました。","きょうの よる シャワーを あびました。","きょうの あさ シャワーを あびました。","きのうの よる シャワーを あびました。"], ok:2,
   why:"けさ (今朝) means this morning: きょうの あさ. The other options change the day (きのう, yesterday) or the time (よる, evening)."},
  {id:"n5b-v20", q:"__わたしは 木下さんに ペンを かしました。__", options:["木下さんは わたしに ペンを かしました。","木下さんは わたしに ペンを かりました。","わたしは 木下さんに ペンを かりました。","わたしは 木下さんに ペンを かえしました。"], ok:1,
   why:"If I lend (かす) Ms Kinoshita a pen, she borrows (かりる) it from me: 木下さんは わたしに ペンを かりました. 「木下さんは わたしに ペンを かしました」 and 「わたしは 木下さんに ペンを かりました」 both turn the direction round, and 「かえしました」 means I gave it back."}
 ]}
]},
{id:"bunpo-dokkai", title:"言語知識（文法）・読解", en:"Grammar and reading", minutes:25, parts:[
 {instr:"もんだい１　（　　）に [何]{なに}を [入]{い}れますか。１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"What do you put in the brackets? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-g01", q:"わたしは まいあさ ６[時]{じ}（　）おきます。", options:["に","で","を","が"], ok:0,
   why:"A clock time takes に: ６時に おきます (I get up at six). 「で」 marks a place or a means, 「を」 an object and 「が」 a subject; none of them marks a point in time."},
  {id:"n5b-g02", q:"この みちを まっすぐ [行]{い}って、はし（　）わたって ください。", options:["に","で","が","を"], ok:3,
   why:"With verbs of moving through or across a place (わたる, cross; あるく, walk; とおる, go through), the place takes を: はしを わたって ください (please cross the bridge). 「に」 would be where you arrive, 「で」 where an action happens, and 「が」 a subject."},
  {id:"n5b-g03", q:"てを （　　）から、ごはんを [食]{た}べましょう。", options:["あらう","あらって","あらった","あらい"], ok:1,
   why:"て-form + から means “after doing”: てを あらってから (after washing our hands). 「あらうから」 and 「あらったから」 would mean “because (we) wash/washed”, which doesn’t fit, and 「あらいから」 is not a correct form."},
  {id:"n5b-g04", q:"あの めがねを かけて （　　） [人]{ひと}は だれですか。", options:["ある","する","いる","なる"], ok:2,
   why:"～て いる describes a state, here what someone is wearing: めがねを かけて いる 人 (the person who is wearing glasses). ～て ある (an N4 pattern) is for things someone has prepared, never for what a person is wearing; 「かけて する」 and 「かけて なる」 are not Japanese."},
  {id:"n5b-g05", q:"きのうの パーティーは （　　）。", options:["とても たのしかったです","とても たのしいでした","とても たのしかったでした","とても たのしくでした"], ok:0,
   why:"The past of an い-adjective changes い to かった, then adds です: たのしかったです. 「たのしいでした」 is a very common mistake: でした is only for nouns and な-adjectives. 「たのしかったでした」 marks the past twice, and 「たのしくでした」 is not a form."},
  {id:"n5b-g06", q:"ここは とても （　　） こうえんですね。", options:["しずかの","しずか","しずかに","しずかな"], ok:3,
   why:"A な-adjective takes な before a noun: しずかな こうえん (a quiet park). 「しずかの」 uses the noun pattern, bare 「しずか」 can’t come directly before a noun, and 「しずかに」 describes how an action is done (しずかに して ください)."},
  {id:"n5b-g07", q:"としょかんで おかしを [食]{た}べては （　　）。", options:["いいです","いけません","ください","あります"], ok:1,
   why:"て-form + は いけません states a rule: たべては いけません (you must not eat). Permission is ～ても いいです, with も, so 「たべては いいです」 is wrong. 「ください」 and 「あります」 can’t follow ～ては."},
  {id:"n5b-g08", q:"「えきから [学校]{がっこう}まで （　　） かかりますか。」「あるいて １０ぷんです。」", options:["いくら","いくつ","どのぐらい","どれ"], ok:2,
   why:"The answer is a length of time, so the question is どのぐらい かかりますか (how long does it take?). 「いくら かかりますか」 asks how much it costs, 「いくつ」 asks how many, and 「どれ」 asks which one."}
 ]},
 {instr:"もんだい２　★に [入]{はい}る ものは どれですか。１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Which piece goes in the ★ space when the sentence is put in the right order? Choose the best answer from 1, 2, 3 and 4.",
  items:[
  {id:"n5b-g09", q:"すみません、＿＿ ＿＿ ★ ＿＿ ください。", options:["３つ","その","あかい","りんごを"], ok:3,
   why:"The sentence is 「すみません、その あかい りんごを ３つ ください。」 (Excuse me, three of those red apples, please). その and あかい both describe りんご, so they come first, and the number ３つ goes after りんごを, just before ください. The ★ is 「りんごを」."},
  {id:"n5b-g10", q:"この ちかくに ＿＿ ＿＿ ★ ＿＿ か。", options:["レストランは","ありません","やすくて","おいしい"], ok:0,
   why:"The sentence is 「この ちかくに やすくて おいしい レストランは ありませんか。」 (Is there a cheap, tasty restaurant near here?). The くて form やすくて joins two adjectives, and both describe レストラン, which comes before ありません. The ★ is 「レストランは」."},
  {id:"n5b-g11", q:"わたしの へやは ＿＿ ＿＿ ★ ＿＿ です。", options:["３かい","ビルの","あの","しろい"], ok:1,
   why:"The sentence is 「わたしの へやは あの しろい ビルの ３かいです。」 (My room is on the third floor of that white building). あの and しろい both describe ビル, and ビルの ３かい means “the building’s third floor”. The ★ is 「ビルの」."}
 ]},
 {instr:"もんだい３　［１］から ［３］に [何]{なに}を [入]{い}れますか。ぶんしょうの いみを かんがえて、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"What goes in gaps 1 to 3? Think about the meaning of the text and choose the best answer from 1, 2, 3 and 4.",
  passage:"グエンさんは [日本語]{にほんご}[学校]{がっこう}の [学生]{がくせい}です。「[休]{やす}みの [日]{ひ}」の ぶんしょうを [書]{か}きました。\n\n「[休]{やす}みの [日]{ひ}」\n　わたしは １[年]{ねん} まえに ベトナムから [日本]{にほん}へ [来]{き}ました。\n　[学校]{がっこう}が [休]{やす}みの [日]{ひ}は、よく [川]{かわ}の そばを さんぽします。[川]{かわ}の そばには [大]{おお}きい [木]{き}が たくさん あります。４[月]{がつ}は [木]{き}の はなが とても きれいでした。\n　きのうは [雨]{あめ}でした。［１］、さんぽに [行]{い}きませんでした。うちで [日本語]{にほんご}の しゅくだいを しました。それから、ベトナムの [母]{はは}［２］ てがみを [書]{か}きました。\n　つぎの [休]{やす}みの [日]{ひ}は、[友]{とも}だちと いっしょに [川]{かわ}へ [行]{い}きます。[川]{かわ}の そばで ［３］。",
  items:[
  {id:"n5b-g12", q:"［１］", options:["でも","それから","だから","じゃ"], ok:2,
   why:"It rained, so she didn’t go for a walk: the first sentence is the reason for the second, so だから (so, that’s why). 「でも」 (but) would need a surprise (it rained, but she went anyway). 「それから」 (and then) is for the next event, and 「じゃ」 (well then) is for conversation."},
  {id:"n5b-g13", q:"［２］", options:["に","を","で","が"], ok:0,
   why:"The person you write a letter to takes に: 母に てがみを 書きました (I wrote a letter to my mother). 「を」 is already used for てがみ, 「で」 would mark a place or a means, and 「が」 would make her mother the writer."},
  {id:"n5b-g14", q:"［３］", options:["おべんとうを [食]{た}べました","おべんとうを [食]{た}べて いました","おべんとうを [食]{た}べませんでした","おべんとうを [食]{た}べます"], ok:3,
   why:"つぎの 休みの 日 is in the future, and the ます form is used for plans: おべんとうを 食べます (we will eat a packed lunch). 「食べました」, 「食べて いました」 and 「食べませんでした」 are all about the past."}
 ]},
 {instr:"もんだい４　つぎの （１）と （２）の ぶんしょうを よんで、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Read texts (1) and (2) and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
  passage:"（１）\n（ゆうたくんが [学校]{がっこう}から かえりました。テーブルの [上]{うえ}に この メモが ありました。）\nゆうたへ\nきょう、おかあさんは おばあちゃんの うちへ [行]{い}きます。７[時]{じ}ごろ かえります。ばんごはんは れいぞうこに ありますから、[先]{さき}に [食]{た}べて ください。それから、いぬの さんぽを わすれないで ください。\n[母]{はは}より",
  items:[
  {id:"n5b-r01", q:"ゆうたくんは きょう [何]{なに}を しますか。", options:["おばあちゃんの うちへ [行]{い}きます。","ばんごはんを つくります。","いぬの さんぽを します。","おかあさんと いっしょに ばんごはんを [食]{た}べます。"], ok:2,
   why:"「いぬの さんぽを わすれないで ください」 asks Yuta to walk the dog. It is his mother who goes to grandma’s. Dinner is already in the fridge, so he doesn’t cook, and 「先に 食べて ください」 (eat first, without waiting) means he eats before his mother gets home, not with her."}
 ]},
 {instr:"もんだい４（２）",
  en:"Text (2): read it and answer the question.",
  passage:"（２）\nせんしゅうの [土]{ど}よう[日]{び}に、[友]{とも}だちと [山]{やま}へ [行]{い}きました。あさ ７[時]{じ}に えきで あって、[電車]{でんしゃ}で [山]{やま}の ちかくの えきまで [行]{い}きました。そこから [山]{やま}の [上]{うえ}まで あるきました。[山]{やま}の [上]{うえ}は さむかったですが、とても きれいでした。かえりは つかれましたから、バスで えきまで かえりました。",
  items:[
  {id:"n5b-r02", q:"この [人]{ひと}は [山]{やま}の [上]{うえ}まで どうやって [行]{い}きましたか。", options:["[電車]{でんしゃ}で えきまで [行]{い}って、そこから バスに のりました。","[電車]{でんしゃ}で えきまで [行]{い}って、そこから あるきました。","バスで えきまで [行]{い}って、そこから あるきました。","バスで えきまで [行]{い}って、そこから [電車]{でんしゃ}に のりました。"], ok:1,
   why:"On the way there, the writer took the train to the station near the mountain (電車で … えきまで 行きました) and walked from there to the top (そこから 山の 上まで あるきました). The bus was only for the way back (かえりは … バスで), which is the trap in the options with バス."}
 ]},
 {instr:"もんだい５　つぎの ぶんしょうを よんで、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Read the text and answer the questions. Choose the best answer from 1, 2, 3 and 4.",
  passage:"「レストランの しごと」\nキム・ジウ\n\n　わたしは [先月]{せんげつ}から、まいしゅう [金]{きん}よう[日]{び}と [土]{ど}よう[日]{び}の よる、[大学]{だいがく}の ちかくの レストランで はたらいて います。\n　わたしは りょうりが [大]{だい}すきです。[国]{くに}では、よく [母]{はは}と いっしょに りょうりを つくりました。\n　しごとは よる １１[時]{じ}までです。とても おそいですから、はじめは たいへんでした。でも、いまは もう だいじょうぶです。\n　りょうりは みせの [人]{ひと}が つくります。わたしは りょうりを テーブルへ はこびます。それから、さらを あらう しごとも します。みせの [人]{ひと}は みんな やさしいです。ときどき わたしに [日本]{にほん}の りょうりを おしえます。\n　わたしは [大学]{だいがく}を [出]{で}てから、[日本]{にほん}の レストランで はたらきたいです。ですから、いまは [日本語]{にほんご}を たくさん べんきょうして います。",
  items:[
  {id:"n5b-r03", q:"ジウさんは はじめ、どうして しごとが たいへんでしたか。", options:["みせが うちから とおかったからです。","りょうりを つくる しごとが むずかしかったからです。","みせの [人]{ひと}が やさしくなかったからです。","しごとが よる おそかったからです。"], ok:3,
   why:"「しごとは よる １１時までです。とても おそいですから、はじめは たいへんでした」: the late finish made it hard at first. The restaurant staff cook, not Ji-woo (りょうりは みせの 人が つくります), the staff are kind (みんな やさしいです), and the distance from home is never mentioned."},
  {id:"n5b-r04", q:"ジウさんは みせで [何]{なに}を しますか。", options:["りょうりを はこんで、さらも あらいます。","りょうりを つくって、はこびます。","りょうりを つくって、さらも あらいます。","さらを あらう しごとだけ します。"], ok:0,
   why:"「わたしは りょうりを テーブルへ はこびます。それから、さらを あらう しごとも します」: she carries the food to the tables and also washes the dishes. Any option with りょうりを つくって is wrong because the restaurant staff cook (she loves cooking, which makes it tempting), and 「だけ」 (only) leaves out carrying the food."}
 ]},
 {instr:"もんだい６　[下]{した}の ページを [見]{み}て、しつもんに こたえて ください。こたえは、１・２・３・４から いちばん いい ものを [一]{ひと}つ えらんで ください。",
  en:"Look at the page below and answer the question. Choose the best answer from 1, 2, 3 and 4. (On the real test the page is on the right.)",
  passage:"みなみまち [日本語]{にほんご}きょうしつ\nお[金]{かね}は いりません。だれでも [来]{き}て ください。\n\n・はじめての [日本語]{にほんご}クラス（ひらがな・カタカナ）\n　[月]{げつ}よう[日]{び}　[午後]{ごご}７[時]{じ}～８[時]{じ}[半]{はん}\n・かんじクラス A\n　[火]{か}よう[日]{び}　[午後]{ごご}７[時]{じ}～８[時]{じ}[半]{はん}\n・かんじクラス B\n　[土]{ど}よう[日]{び}　[午前]{ごぜん}１０[時]{じ}～１１[時]{じ}[半]{はん}\n・[話]{はな}す れんしゅうクラス\n　[土]{ど}よう[日]{び}　[午後]{ごご}２[時]{じ}～３[時]{じ}[半]{はん}\n・[子]{こ}どもの クラス（[小学生]{しょうがくせい}）\n　[日]{にち}よう[日]{び}　[午前]{ごぜん}１０[時]{じ}～１１[時]{じ}",
  items:[
  {id:"n5b-r05", q:"ケイトさんは かんじを べんきょうしたいです。[月]{げつ}よう[日]{び}から [金]{きん}よう[日]{び}までは、[午後]{ごご}８[時]{じ}まで しごとが あります。ケイトさんは どの クラスに [行]{い}きますか。", options:["はじめての [日本語]{にほんご}クラス","かんじクラス A","かんじクラス B","[話]{はな}す れんしゅうクラス"], ok:2,
   why:"Kate wants a kanji class. かんじクラス A is on Tuesday at 7 p.m., when she is still at work (weekdays until 8 p.m.), so it has to be かんじクラス B on Saturday morning. 「話す れんしゅうクラス」 also fits her free time, but it is a speaking class, and 「はじめての 日本語クラス」 teaches kana on Monday evenings."}
 ]}
]}
]});
