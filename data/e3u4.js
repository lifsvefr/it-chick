/* Japanese Foundations · Unit 4 (e3u4) · N5 kanji, vocabulary and reading */
ICA.addUnit({
  id:"e3u4", track:"e3", n:4, title:"N5 kanji, vocabulary and reading", icon:"✍️",
  blurb:"How kanji work (pictures, parts, radicals and stroke order), on and kun readings, all 80 kanji on common N5 lists in themed groups with their main readings and everyday words, the core N5 vocabulary, and how to read short real texts: signs, messages, notices and a simple email. It ends with what the JLPT is and a daily study plan with the Kanji Lab.",
  read:[
    {book:"irodori", where:"Starter (A1): the [漢字]{かんじ}のことば (Kanji Words) sections of Lessons 3–18"},
    {book:"taekim", where:"Grammar Guide › The Writing System › “Kanji”"}
  ],
  goals:[
    "Explain how kanji were built and find the radical and other parts in a kanji",
    "Write kanji in the standard stroke order and count their strokes",
    "Tell on readings from kun readings, read okurigana, and recognise common special readings",
    "Read and write the 80 kanji on common N5 lists, with their meanings, main readings and everyday words",
    "Learn N5 vocabulary in useful groups, with the particles and opposites that go with each word",
    "Read short N5 texts (signs, messages, notices, a simple email) with a clear strategy",
    "Describe the JLPT’s levels, sections, scoring and test dates, and plan daily review in the Kanji Lab"
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e3u4-l1", title:"How kanji work: pictures, parts and stroke order", minutes:50,
   hook:{q:"How many kanji are on Japan’s official list of kanji for everyday use, the [常用漢字表]{じょうようかんじひょう}?", options:["About 80","About 500","2,136","About 50,000"], answer:2,
     reveal:"**2,136**, in the current list from 2010. That sounds like a lot, but nobody learns them all at once. JLPT N5 lists contain only about 80, and most kanji are built from a much smaller set of repeating parts. This lesson shows you those parts, and how to write kanji in the standard order."},
   goals:[
     "Explain what kanji are and how they share a sentence with hiragana and katakana",
     "Recognise four ways kanji were built: pictures, signs, combined meanings, and meaning plus sound",
     "Find the radical and other parts of a kanji, and name the common radical positions",
     "Write kanji in the standard stroke order, count strokes, and look kanji up"
   ],
   learn:[
    {h:"What kanji are", body:[
      {lead:"[[kanji-term|Kanji]] ([漢字]{かんじ}) are characters that Japan borrowed from Chinese writing many centuries ago. A kanji usually stands for a meaning, and it has one or more readings (ways to pronounce it)."},
      "You already know the other two scripts from Unit 1: [[hiragana]] and [[katakana]]. A normal Japanese sentence mixes all three, and each script has its own job.",
      {table:[["Script","Main job","In the sentence below"],["Kanji","The core of words: nouns and the stems of verbs and adjectives","[毎朝]{まいあさ} (every morning), [駅]{えき} (station), [前]{まえ} (front), [買]{か} (buy)"],["Hiragana","Grammar: particles and word endings","、の、で、を、います"],["Katakana","Loanwords and some names","コーヒー (coffee)"]]},
      {ex:"[毎朝]{まいあさ}、[駅]{えき}の[前]{まえ}でコーヒーを[買]{か}います。\nEvery morning I buy coffee in front of the station.", label:"One sentence, three scripts"},
      "Notice that 買います is half kanji, half hiragana. The kanji 買 carries the meaning “buy”; the hiragana います carries the grammar (polite, present). When the verb changes to 買いました (bought) or 買いません (don’t buy), only the hiragana changes.",
      "Why keep kanji at all? Japanese is written without spaces, and kanji show at a glance where the important words are. They also separate words that sound the same: き can be [木]{き} (tree) or [気]{き} (spirit, feeling). Once you know some kanji, a text full of them is faster to read than the same text in hiragana only.",
      "How many do you need? The official [常用漢字表]{じょうようかんじひょう} (2010) lists 2,136 kanji for everyday use, and Japanese children learn 1,026 of them in primary school. You start much smaller. Common JLPT N5 lists contain about 80 kanji, and this unit teaches all 80 of the list used in this course and its Kanji Lab. Every one of them is taught in the first two years of Japanese primary school, so you will see them everywhere."
    ]},
    {h:"Four ways kanji were built", body:[
      "Chinese scholars traditionally sorted characters into six types (the [六書]{りくしょ}, described in a dictionary from about 100 CE). Four of the six describe how characters were built, and they make kanji much less mysterious.",
      {table:[["Type","How it works","N5 examples"],["[[pictograph|Pictures]] ([象形]{しょうけい})","A simplified drawing of a thing","[山]{やま} mountain, [川]{かわ} river, [木]{き} tree, [日]{ひ} sun, [月]{つき} moon, [雨]{あめ} rain"],["Signs ([指事]{しじ})","A mark or line that points to an idea","[一]{いち}・[二]{に}・[三]{さん}; [上]{うえ} above and [下]{した} below; [本]{ほん}: 木 with a mark at the root"],["Combined meanings ([会意]{かいい})","Two meaningful parts put together","[休]{やす}む rest: person 亻 + tree 木 (the usual explanation: a person resting by a tree); [林]{はやし} grove: two trees"],["Meaning + sound ([形声]{けいせい})","One part hints at the meaning, another at the sound","[時]{じ}: 日 (sun, time) + 寺 (sound じ); [聞]{き}く: 耳 (ear) + 門 (sound モン)"]]},
      {fig:'<svg viewBox="0 0 340 452"><text x="170" y="18" text-anchor="middle">Four ways kanji were built</text><rect class="d-panel" x="6" y="30" width="328" height="96" rx="8" stroke-width="1.5"/><text x="18" y="50">1 Picture</text><path class="d-ink" d="M24 112 L50 74 L66 98 L88 62 L110 98 L124 80 L146 112" stroke-width="2"/><path class="d-ink" d="M160 92 L196 92" stroke-width="2" marker-end="url(#a1)"/><text transform="translate(250 106) scale(2.6)" text-anchor="middle">山</text><text class="s" x="300" y="118" text-anchor="middle">mountain</text><rect class="d-panel" x="6" y="134" width="328" height="96" rx="8" stroke-width="1.5"/><text x="18" y="154">2 Sign</text><text transform="translate(70 214) scale(2.6)" text-anchor="middle">木</text><path class="d-ink" d="M118 194 L154 194" stroke-width="2" marker-end="url(#a1)"/><text transform="translate(210 214) scale(2.6)" text-anchor="middle">本</text><text class="s" x="210" y="226" text-anchor="middle">mark at the root</text><text class="s" x="292" y="190" text-anchor="middle">root,</text><text class="s" x="292" y="206" text-anchor="middle">origin; book</text><rect class="d-panel" x="6" y="238" width="328" height="96" rx="8" stroke-width="1.5"/><text x="18" y="258">3 Meaning + meaning</text><text transform="translate(52 318) scale(2.4)" text-anchor="middle">亻</text><text x="92" y="306" text-anchor="middle">+</text><text transform="translate(132 318) scale(2.4)" text-anchor="middle">木</text><path class="d-ink" d="M168 300 L198 300" stroke-width="2" marker-end="url(#a1)"/><text transform="translate(240 318) scale(2.6)" text-anchor="middle">休</text><text class="s" x="52" y="330" text-anchor="middle">person</text><text class="s" x="132" y="330" text-anchor="middle">tree</text><text class="s" x="300" y="306" text-anchor="middle">rest</text><rect class="d-lup" x="6" y="342" width="328" height="104" rx="8" stroke-width="1.5"/><text x="18" y="362">4 Meaning + sound (most kanji)</text><text transform="translate(52 422) scale(2.4)" text-anchor="middle">日</text><text x="92" y="410" text-anchor="middle">+</text><text transform="translate(132 422) scale(2.4)" text-anchor="middle">寺</text><path class="d-ink" d="M168 404 L198 404" stroke-width="2" marker-end="url(#a1)"/><text transform="translate(240 422) scale(2.6)" text-anchor="middle">時</text><text class="s" x="52" y="436" text-anchor="middle">meaning</text><text class="s" x="132" y="436" text-anchor="middle">sound じ</text><text class="s" x="298" y="404" text-anchor="middle">time,</text><text class="s" x="298" y="420" text-anchor="middle">read じ</text><defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"Four panels. 1 Picture: a mountain outline with three peaks becomes the kanji 山. 2 Sign: the kanji 木 (tree) with a mark at the root becomes 本 (root, origin; book). 3 Meaning plus meaning: person 亻 plus tree 木 becomes 休 (rest). 4 Meaning plus sound, the most common type: 日 (meaning) plus 寺 (sound じ) becomes 時 (time, read じ).", cap:"Most kanji are type 4. Their shapes changed over 3,000 years, so pictures are often hard to see now."},
      "**Pictures** are the famous type, but they are a small minority. The shapes have also changed over about 3,000 years of writing: 日 was once a circle with a mark inside, and 月 a crescent moon.",
      "**Meaning + sound** is by far the largest type. Estimates differ with the set of characters counted, but most common kanji are of this kind, and the share is even higher among rarer characters. The [[phonetic-component|sound part]] shows how the character sounded in Chinese long ago, so it helps with the on reading only sometimes. It works for 時 (寺 is also read じ) and for 聞 (門 is read モン, and 聞 can be read モン or ブン).",
      {warn:"Memory stories are not history. Many apps and books explain kanji with stories, and that is a fine way to remember them. Just know that a story is not always the real history. 明 (bright) is often explained as sun 日 + moon 月, but an ancient Chinese dictionary explains it as window + moon (moonlight through a window), and scholars still discuss its origin. Use stories as memory aids, and check a good dictionary if you want the real origin."}
    ]},
    {h:"Parts, radicals and positions", body:[
      "Look at enough kanji and you start to see the same parts again and again. 日 appears in 時, 間, 明 and 曜; 言 (words) appears in 語, 話 and 読; 木 appears in 本, 来, 校 and 林. These building blocks are called [[kanji-component|components]]. Learning a new kanji as “a part I know + a part I know” is much easier than learning a tangle of lines.",
      "One component of each kanji is its [[radical]] ([部首]{ぶしゅ}): the part a dictionary uses to file the kanji. Traditional dictionaries use a set of 214 radicals, and the radical often hints at the meaning. That is why so many kanji about speaking have 言 on the left, and why [電]{でん} (electricity) has rain 雨 on top: it first meant lightning.",
      "Radicals have names that say where they sit. The position words are worth knowing, because Japanese people use them to describe kanji to each other: the 言 on the left of 語 is called ごんべん, for example.",
      {fig:'<svg viewBox="0 0 340 286"><text x="170" y="18" text-anchor="middle">Where a radical can sit</text><rect class="d-panel" x="14" y="32" width="64" height="64" rx="4" stroke-width="1.5"/><rect class="d-lup" x="14" y="32" width="24" height="64" rx="4" stroke-width="1.5"/><text x="46" y="114" text-anchor="middle">へん</text><text class="s" x="46" y="130" text-anchor="middle">left: 休 語</text><rect class="d-panel" x="96" y="32" width="64" height="64" rx="4" stroke-width="1.5"/><rect class="d-lup" x="136" y="32" width="24" height="64" rx="4" stroke-width="1.5"/><text x="128" y="114" text-anchor="middle">つくり</text><text class="s" x="128" y="130" text-anchor="middle">right: 顔</text><rect class="d-panel" x="178" y="32" width="64" height="64" rx="4" stroke-width="1.5"/><rect class="d-lup" x="178" y="32" width="64" height="22" rx="4" stroke-width="1.5"/><text x="210" y="114" text-anchor="middle">かんむり</text><text class="s" x="210" y="130" text-anchor="middle">top: 電 家</text><rect class="d-panel" x="260" y="32" width="64" height="64" rx="4" stroke-width="1.5"/><rect class="d-lup" x="260" y="74" width="64" height="22" rx="4" stroke-width="1.5"/><text x="292" y="114" text-anchor="middle">あし</text><text class="s" x="292" y="130" text-anchor="middle">bottom: 先</text><rect class="d-panel" x="40" y="160" width="64" height="64" rx="4" stroke-width="1.5"/><path class="d-lup" d="M40 160 H104 V178 H58 V224 H40 Z" stroke-width="1.5"/><text x="72" y="242" text-anchor="middle">たれ</text><text class="s" x="72" y="258" text-anchor="middle">top + left: 店</text><rect class="d-panel" x="138" y="160" width="64" height="64" rx="4" stroke-width="1.5"/><path class="d-lup" d="M138 160 H156 V206 H202 V224 H138 Z" stroke-width="1.5"/><text x="170" y="242" text-anchor="middle">にょう</text><text class="s" x="170" y="258" text-anchor="middle">left + bottom: 近</text><rect class="d-lup" x="236" y="160" width="64" height="64" rx="4" stroke-width="1.5"/><rect class="d-panel" x="252" y="176" width="32" height="32" stroke-width="1.5"/><text x="268" y="242" text-anchor="middle">かまえ</text><text class="s" x="268" y="258" text-anchor="middle">around: 国 間</text><text class="s" x="170" y="280" text-anchor="middle">Shaded = where the radical sits</text></svg>', alt:"Seven squares, each with a shaded area showing where a radical sits. へん: left side, as in 休 and 語. つくり: right side, as in 顔. かんむり: top, as in 電 and 家. あし: bottom, as in 先. たれ: top and left, as in 店. にょう: left and bottom, as in 近. かまえ: around the outside, as in 国 and 間.", cap:"The seven positions. The ones you will see most often are へん (left) and かんむり (top)."},
      {table:[["Radical","Name","Meaning hint","In"],["亻","にんべん","person","[休]{やす}む, [何]{なに}"],["言","ごんべん","words, speech","[語]{ご}, [話]{はな}す, [読]{よ}む"],["木","きへん","tree, wood","[校]{こう}, [林]{はやし}"],["日","ひへん","sun, day","[時]{じ}"],["雨","あめかんむり","rain, weather","[電]{でん}"],["囗","くにがまえ","enclosure","[国]{くに}, [四]{よん}"],["門","もんがまえ","gate","[間]{あいだ}"]]},
      {warn:"The obvious part is not always the radical. 聞 (hear) looks as if it belongs with the gate 門, but most dictionaries file it under its ear 耳, the part that carries the meaning. And 今 (now) is filed under 人, the roof-like shape on top. If you can’t find a kanji under the part you expected, try another part, or search by reading or handwriting instead."}
    ]},
    {h:"Stroke order: seven rules of thumb and a famous pair", body:[
      "Each kanji is written with a fixed number of strokes ([画]{かく}) in a standard order, its [[stroke-order]] ([筆順]{ひつじゅん}). The orders taught in Japanese schools are based on a 1958 Ministry of Education guide for teachers ([筆順指導]{ひつじゅんしどう}の[手]{て}びき). The guide says it chose one order per kanji so that teaching would be consistent, not to call other orders wrong, and some kanji have more than one accepted order. But the standard order makes your kanji balanced and readable, and it makes counting strokes reliable.",
      "You don’t have to memorise an order for every kanji. A handful of rules of thumb covers most of them. They are a simplified version of the guide’s principles, so each one has exceptions.",
      {table:[["Rule","Example"],["1 Top to bottom","三: the three lines from the top down"],["2 Left to right","川: left stroke first; 休: 亻 before 木"],["3 Horizontal before a vertical that crosses it","十: 一 first, then the vertical"],["4 Left-falling ノ before right-falling ㇏","人, 八, 入"],["5 Centre first in small symmetrical kanji","小 and 水: the middle stroke first"],["6 Outside before inside, close the box last","日 and 国: the bottom line is the last stroke"],["7 A stroke that cuts through everything comes last","中: the long vertical goes last"]]},
      {fig:'<svg viewBox="0 0 340 236"><text x="170" y="18" text-anchor="middle">Numbers show the order of strokes</text><rect class="d-panel" x="6" y="30" width="78" height="150" rx="6" stroke-width="1.5"/><path class="d-ink" d="M18 92 H72" stroke-width="4"/><path class="d-ink" d="M45 52 V152" stroke-width="4"/><text x="14" y="84">1</text><text x="50" y="58">2</text><text x="45" y="200" text-anchor="middle">十</text><text class="s" x="45" y="218" text-anchor="middle">rule 3</text><rect class="d-panel" x="90" y="30" width="78" height="150" rx="6" stroke-width="1.5"/><path class="d-ink" d="M129 56 C126 100 118 128 98 152" stroke-width="4"/><path class="d-ink" d="M130 96 C140 124 150 140 162 150" stroke-width="4"/><text x="112" y="62">1</text><text x="148" y="122">2</text><text x="129" y="200" text-anchor="middle">人</text><text class="s" x="129" y="218" text-anchor="middle">rule 4</text><rect class="d-panel" x="174" y="30" width="78" height="150" rx="6" stroke-width="1.5"/><path class="d-ink" d="M213 46 V146 L204 138" stroke-width="4"/><path class="d-ink" d="M198 80 L184 120" stroke-width="4"/><path class="d-ink" d="M228 80 L244 118" stroke-width="4"/><text x="218" y="52">1</text><text x="184" y="80">2</text><text x="236" y="80">3</text><text x="213" y="200" text-anchor="middle">小</text><text class="s" x="213" y="218" text-anchor="middle">rule 5</text><rect class="d-panel" x="258" y="30" width="78" height="150" rx="6" stroke-width="1.5"/><path class="d-ink" d="M272 74 V122" stroke-width="4"/><path class="d-ink" d="M272 74 H322 V122" stroke-width="4"/><path class="d-ink" d="M272 116 H322" stroke-width="4"/><path class="d-ink" d="M297 44 V164" stroke-width="4"/><text x="262" y="100">1</text><text x="306" y="68">2</text><text x="306" y="112">3</text><text x="302" y="160">4</text><text x="297" y="200" text-anchor="middle">中</text><text class="s" x="297" y="218" text-anchor="middle">rule 7</text></svg>', alt:"Four kanji with numbered strokes. 十: 1 the horizontal, 2 the vertical. 人: 1 the left-falling stroke, 2 the right-falling stroke. 小: 1 the centre stroke with a hook, 2 the left dot, 3 the right dot. 中: 1 the left side of the box, 2 the top and right side, 3 the bottom, 4 the long vertical through the middle.", cap:"Check any kanji’s order in a dictionary such as Jisho, which shows a stroke-order diagram."},
      "A famous pair shows why you should check: [右]{みぎ} (right) starts with the slanting ノ stroke, but [左]{ひだり} (left) starts with the horizontal 一. They look almost the same, so they are often taught side by side.",
      "Strokes also end in three different ways, and your teacher or a dictionary diagram will show which: a stop (とめ), a little hook (はね), or a sweep that fades out (はらい). In 小, the centre stroke ends with a hook. You can see the same hook at the bottom of 水 and 何."
    ]},
    {h:"Counting strokes and looking kanji up", body:[
      "Stroke counts follow from the rules, with one surprise for beginners: a box is **3** strokes, not 4. In 口 (mouth), the left side is one stroke, the top and right side together are one stroke (it turns the corner without lifting), and the bottom is one stroke. So 日 has 4 strokes, 国 has 8, and 何 (亻 + 可) has 7.",
      "Knowing the radical and the stroke count lets you find a kanji you can’t read. You have four ways to look one up:",
      {list:["**By reading**: if you know one reading, type it in a dictionary (very fast).","**By handwriting**: draw it on a phone keyboard or in a dictionary app; this works best in the standard stroke order.","**By parts**: choose its components from a list (Jisho.org has this; see [[jisho-tool]]).","**By radical and stroke count**: the traditional way in paper dictionaries."]},
      {tip:"Search a kanji on Jisho.org and add “#kanji” (for example, “休 #kanji”). The kanji page shows its meanings, on and kun readings, stroke count, radical, parts, a stroke-order diagram and words that use it. No account is needed."},
      "How to learn kanji without burning out:",
      {list:["**Learn kanji through words.** [電車]{でんしゃ} (train) teaches you two kanji and a word you can use today.","**Learn the parts.** Once you know 言, you have a head start on 語, 話 and 読.","**Write each new kanji a few times by hand**, saying a word that uses it. Writing helps memory even if you mostly type.","**Review a little every day.** You will forget some kanji: that is normal and expected. [[spaced-review|Spaced review]], seeing each kanji again just as you start to forget it, fixes this better than long cramming sessions."]},
      {lab:"kl-n5", t:"Practise: start the N5 kanji deck (10 new kanji a day is plenty)"}
    ]}
   ],
   try:[
    {id:"e3u4-l1-x1", type:"sort", q:"Which script is each part of this sentence written in? [毎朝]{まいあさ}、[駅]{えき}の[前]{まえ}でコーヒーを[買]{か}います。", buckets:["Kanji","Hiragana","Katakana"], items:[
      {t:"毎朝", b:0, why:"[毎朝]{まいあさ} (every morning) is two kanji: 毎 (every) and 朝 (morning). Kanji carry the core meaning of words."},
      {t:"駅", b:0, why:"駅 (station) is a kanji. A noun like this is normally written in kanji."},
      {t:"の", b:1, why:"の is a particle, and particles are written in hiragana."},
      {t:"コーヒー", b:2, why:"コーヒー (coffee) is a loanword, so it is written in katakana. The ー shows a long vowel."},
      {t:"を", b:1, why:"を is the object particle, written in hiragana."},
      {t:"います (in 買います)", b:1, why:"The kanji 買 carries the meaning; the ending います carries the grammar, so it is hiragana. It changes in 買いました or 買いません while 買 stays the same."}
    ]},
    {id:"e3u4-l1-x2", type:"match", q:"Match each kanji to the way it was built.", pairs:[
      ["山 (mountain)","A picture of a thing","山 is a simplified drawing of a mountain with peaks."],
      ["上 (above)","A sign that points to an idea","上 marks a position above a base line: an idea, not a thing you can draw."],
      ["林 (grove)","Two meanings combined","林 puts two trees 木 side by side: a grove, a small wood."],
      ["時 (time)","A meaning part plus a sound part","時 combines 日 (sun, time: the meaning) with 寺 (read じ: the sound). 時 is also read じ."]
    ]},
    {id:"e3u4-l1-x3", type:"mcq", q:"聞 (hear) is a meaning + sound kanji. Which statement is right?", options:[
      {t:"耳 (ear) gives the meaning, and 門 (gate, read モン) gives the sound", ok:true, why:"Right. You hear with your ear, and 聞 can be read モン, like 門. This is the most common way kanji were built."},
      {t:"門 (gate) gives the meaning, and 耳 gives the sound", why:"Hearing has nothing to do with gates. The gate 門 is there for its sound (モン), not its meaning."},
      {t:"It is a picture of an ear at a gate", why:"It is not a single drawing. It joins two existing characters, one for meaning and one for sound."},
      {t:"Both parts give the meaning: “listening at a gate”", why:"That is a nice memory story, but it is not how 聞 was built. Memory stories are useful, but they are not history."}
    ]},
    {id:"e3u4-l1-x4", type:"spot", q:"Tap every kanji that has にんべん (亻, the person radical) on its left side.", ask:"has 亻 on the left", parts:[
      {t:"休", flag:true, why:"休 (rest) is 亻 + 木: a person and a tree."},
      " ",
      {t:"校", flag:false, why:"校 (school) has 木 on the left (きへん), not 亻."},
      " ",
      {t:"何", flag:true, why:"何 (what) is 亻 + 可. It has the person radical on the left."},
      " ",
      {t:"話", flag:false, why:"話 (talk) has 言 on the left: ごんべん, the speech radical."},
      " ",
      {t:"時", flag:false, why:"時 (time) has 日 on the left: ひへん, the sun radical."},
      " ",
      {t:"人", flag:false, why:"人 is the full kanji for person. 亻 is the narrow form of 人 used on the left of other kanji, so 人 has no にんべん of its own."}
    ]},
    {id:"e3u4-l1-x5", type:"mcq", q:"Leila wants to look up 聞 in a paper dictionary that sorts kanji by radical. Under which radical will most dictionaries list it?", options:[
      {t:"耳 (ear)", ok:true, why:"Right. The ear is the meaning part, and most dictionaries file 聞 under 耳, even though the gate 門 is bigger."},
      {t:"門 (gate)", why:"This is the natural guess, and it catches many people. 門 is only the sound part here; most dictionaries use the ear 耳."},
      {t:"日 (sun)", why:"聞 does not contain 日. You may be thinking of 間 (interval), which is 門 + 日 and is listed under 門."},
      {t:"口 (mouth)", why:"聞 has no 口. 問 (question) is 門 + 口 and is listed under 口; that is a different kanji."}
    ]},
    {id:"e3u4-l1-x6", type:"order", q:"Put the four strokes of 中 (middle) in the standard order.", items:[
      {t:"The short vertical on the left of the box", why:"Rule 6: start the box with its left side."},
      {t:"The top and right side of the box, in one stroke that turns the corner", why:"The second stroke of a box goes across the top and turns down the right side without lifting."},
      {t:"The bottom of the box", why:"The bottom closes the box, so it comes after the top and right side."},
      {t:"The long vertical through the middle", why:"Rule 7: a stroke that cuts through everything comes last."}
    ]},
    {id:"e3u4-l1-x7", type:"mcq", q:"右 (right) and 左 (left) look almost the same. How do their first strokes differ?", options:[
      {t:"右 starts with the slanting ノ; 左 starts with the horizontal 一", ok:true, why:"Right. This is the famous pair: 右 breaks the usual pattern, so it is worth practising both."},
      {t:"Both start with the horizontal 一, as rule 3 says", why:"That is true for 左 only. 右 starts with the slanting stroke."},
      {t:"Both start with the slanting ノ", why:"That is true for 右 only. 左 starts with the horizontal."},
      {t:"The order doesn’t matter for these two", why:"Japanese schools teach a standard order for both, and the two are often taught side by side because they differ."}
    ]},
    {id:"e3u4-l1-x8", type:"number", q:"How many strokes does 何 (what) have? It is 亻 on the left and 可 on the right.", answer:7, tol:0, unit:"strokes", why:"亻 is 2 strokes. The right part 可 is 5: the top horizontal, the 口 (3 strokes: left side, top-and-right, bottom) and the long vertical with a hook. 2 + 5 = 7.", wrongs:[
      {v:8, tol:0, why:"You probably counted 口 as 4 strokes. The top and right side of a box are one stroke that turns the corner, so 口 is 3."},
      {v:6, tol:0, why:"You probably counted 亻 as 1 stroke. It has 2: a short slanting stroke and a vertical."}
    ], hint2:"Count 亻 (2), then the right side: one horizontal, a box (3) and a long hooked vertical."}
   ],
   apply:{
    intro:"Short tasks to do with paper, a pen and the things around you. Keep your notes for yourself.",
    tasks:[
     {t:"Find five kanji in your world", how:[
       "Look at food packaging, a shop sign, a Japanese website or a photo of Japan. Copy five kanji you see.",
       "For each one, guess its type (picture, sign, combined meanings, meaning + sound) and the part that might be its radical.",
       "Look each one up on Jisho.org (type the kanji, then “#kanji”) and check your guesses."
     ], write:"Kanji 1… my guess… what Jisho says… Kanji 2…"},
     {t:"Write ten kanji in the standard order", how:[
       "On paper, write 一 二 三 十 人 大 小 中 日 国, each three times, following the rules in this lesson.",
       "Check each order in a dictionary’s stroke-order diagram. Note any you got wrong.",
       "Write 右 and 左 side by side five times, saying みぎ and ひだり."
     ], write:"Kanji I wrote in a different order… the rule I forgot… how 右 and 左 feel now…"},
     {t:"Start daily review", how:[
       "Open the Kanji Lab and start the N5 kanji deck. Keep the default of 10 new cards a day.",
       "Do one session today and one tomorrow. Answer honestly: choose Again when you didn’t know a card."
     ], write:"Date I started… how many cards… which kanji were hardest…"}
    ],
    proof:"Five kanji from your surroundings with their type and radical checked, a page of handwritten kanji in the standard order, and your first two Kanji Lab sessions done."},
   read:[
    {book:"taekim", where:"Grammar Guide › The Writing System › “Kanji” (sections “What is Kanji?”, “Learning Kanji” and “Why Kanji?”)"},
    {book:"irodori", where:"Starter, Lesson 3 “Nice to meet you.”: the [漢字]{かんじ}のことば (Kanji Words) section", note:"The course’s first kanji section ([名前]{なまえ}, [国]{くに}, [私]{わたし}). Starter Lessons 3–18 each have one."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e3u4-l2", title:"On and kun readings; kanji for numbers and time", minutes:55,
   hook:{q:"The same kanji is read いち in [一月]{いちがつ} (January) but ひと in [一]{ひと}つ (one thing). Why?", options:["One of them is a mistake that became normal","いち came from Chinese; ひと is the old Japanese word that was matched to the kanji","いち is used in Tokyo and ひと in the rest of Japan","ひと is the reading for children"], answer:1,
     reveal:"**Most kanji have two kinds of reading.** When Japan borrowed kanji, it borrowed a Chinese pronunciation (いち, the *on* reading) and also matched each kanji to a Japanese word with the same meaning (ひと, the *kun* reading). Both are correct; the word decides which one you use. This lesson shows you how to tell which reading a word needs."},
   goals:[
     "Explain on readings and kun readings and use clues to choose between them",
     "Read okurigana and recognise common special readings such as 今日 and [大人]{おとな}",
     "Read and write the 14 number kanji and the 14 time kanji with their main readings and words",
     "Read prices and times written in kanji, including sound changes such as さんびゃく and ろっぷん"
   ],
   learn:[
    {h:"Two kinds of reading", body:[
      {lead:"Most kanji have an **on reading** ([音読]{おんよ}み, from Chinese) and a **kun reading** ([訓読]{くんよ}み, a native Japanese word). Dictionaries write on readings in katakana and kun readings in hiragana."},
      "An [[on-yomi|on reading]] ([音読]{おんよ}み) is based on how the kanji was pronounced in Chinese when Japan borrowed it. A [[kun-yomi|kun reading]] ([訓読]{くんよ}み) is the Japanese word that already existed for that meaning. The mountain kanji 山 is read サン (from Chinese) in [富士山]{ふじさん} and やま (the Japanese word for mountain) when it stands alone.",
      {fig:'<svg viewBox="0 0 340 258"><text x="170" y="18" text-anchor="middle">One kanji, two kinds of reading</text><text transform="translate(170 92) scale(3.2)" text-anchor="middle">山</text><rect class="d-lup" x="8" y="122" width="156" height="128" rx="8" stroke-width="1.5"/><text x="86" y="144" text-anchor="middle">On reading 音読み</text><text x="86" y="170" text-anchor="middle">サン</text><text class="s" x="86" y="190" text-anchor="middle">from Chinese</text><text class="s" x="86" y="210" text-anchor="middle">富士山 ふじさん</text><text class="s" x="86" y="228" text-anchor="middle">火山 かざん</text><rect class="d-sage" x="176" y="122" width="156" height="128" rx="8" stroke-width="1.5"/><text x="254" y="144" text-anchor="middle">Kun reading 訓読み</text><text x="254" y="170" text-anchor="middle">やま</text><text class="s" x="254" y="190" text-anchor="middle">a Japanese word</text><text class="s" x="254" y="210" text-anchor="middle">山 やま (alone)</text><path class="d-ink" d="M146 106 L100 120" stroke-width="2"/><path class="d-ink" d="M194 106 L240 120" stroke-width="2"/></svg>', alt:"The kanji 山 in the centre. On the left, the on reading サン, from Chinese, used in 富士山 (ふじさん) and 火山 (かざん). On the right, the kun reading やま, a Japanese word, used when 山 stands alone.", cap:"Dictionaries and the Kanji Lab show on readings in katakana and kun readings in hiragana."},
      "Some kanji have more than one on reading, because Japan borrowed Chinese pronunciations at different times and from different regions. 生 is セイ in [先生]{せんせい} but ショウ in [一生]{いっしょう} (a lifetime). Some kanji have no kun reading at all (校 has only on readings, and コウ is the one you need; 電 is only デン), and a few, such as 何, are nearly always read with their kun readings.",
      {key:"A kanji is not one sound. It is a meaning with several possible readings, and the word around it tells you which one to use."}
    ]},
    {h:"Which reading? Clues that work most of the time", body:[
      "You will learn readings word by word, but three clues help you guess, and they are right most of the time:",
      {table:[["What you see","Usual reading","Examples"],["Two or more kanji together, no kana","On","[電車]{でんしゃ} train, [学生]{がくせい} student, [毎日]{まいにち} every day"],["A kanji followed by kana (okurigana)","Kun","[食]{た}べる eat, [高]{たか}い high, [休]{やす}む rest"],["A kanji standing alone as a noun","Usually kun","[山]{やま} mountain, [水]{みず} water, [人]{ひと} person"]]},
      "These are tendencies, not rules. Some compounds use kun readings: [出口]{でぐち} (exit) and [名前]{なまえ} (name) are kun + kun. Some mix the two: [毎朝]{まいあさ} (every morning) is マイ (on) + あさ (kun). And some kanji standing alone use their on reading: [本]{ほん} (book), [円]{えん} (yen), [気]{き} (spirit, feeling).",
      {tip:"When you learn a new kanji, don’t try to memorise every reading on its dictionary page. Learn the readings that come in words you need, one word at a time. The rest will come with new words."}
    ]},
    {h:"Okurigana: kana that finish the word", body:[
      "[[okurigana|Okurigana]] ([送]{おく}り[仮名]{がな}) are the hiragana written after a kanji to complete a word, usually a verb or an adjective. The kanji holds the part that never changes; the okurigana carry the part that does.",
      {table:[["Word","Kanji part","Okurigana changes"],["[食]{た}べる (eat)","食 (た)","[食]{た}べます、[食]{た}べない、[食]{た}べた"],["[高]{たか}い (high, expensive)","高 (たか)","[高]{たか}くない、[高]{たか}かった"],["[分]{わ}かる (understand)","分 (わ)","[分]{わ}かります、[分]{わ}かりません"]]},
      "Okurigana also tell you that the kanji takes its kun reading: 食べる is たべる, never “しょくべる”. And the okurigana can tell two verbs apart that share a kanji: [分]{わ}かる (understand) and [分]{わ}ける (divide) both use 分.",
      "You will see a few words written with or without okurigana. Entrance is written both [入口]{いりぐち} and [入]{い}り[口]{ぐち}; both are correct and read the same. Many people also write わかる in hiragana only."
    ]},
    {h:"Special readings and sound changes", body:[
      "A few common words are read as a whole, and the reading doesn’t come from the readings of the separate kanji. These are called [[jukujikun|special readings]] ([熟字訓]{じゅくじくん} and similar). The official kanji list has an appendix of them, and several are N5 words you need right away:",
      {table:[["Word","Reading","Meaning"],["今日","きょう","today"],["今年","ことし","this year"],["大人","おとな","adult"],["一人 / 二人","ひとり / ふたり","one person (alone) / two people"],["時計","とけい","clock, watch"],["上手 / 下手","じょうず / へた","good at / bad at"],["お土産","おみやげ","souvenir, small gift"],["友達","ともだち","friend (often written 友だち)"],["八百屋","やおや","greengrocer"]]},
      "Readings also change a little when kanji join. Three changes are very common:",
      {list:["**Voicing ([[rendaku]])**: the first sound of the second part becomes voiced. くち (mouth, opening) becomes ぐち in [出口]{でぐち} (exit) and [東口]{ひがしぐち} (east exit).","**Small っ**: the end of the first kanji shrinks to っ. がく + こう → [学校]{がっこう}; いち + ほん → [一本]{いっぽん}.","**ひゃく becomes びゃく or ぴゃく** after some numbers: [三百]{さんびゃく}, [六百]{ろっぴゃく}, [八百]{はっぴゃく}. Counters change in similar ways ({{counters}})."]},
      {warn:"今日 is also read こんにち in a few formal words (and in こんにちは, which is normally written in hiragana). When you see 今日 on its own in everyday writing, read it きょう."}
    ]},
    {h:"Number kanji and money", body:[
      "Here are the 14 kanji for numbers and money. ★ marks a word with a special reading. Unit 3 taught you to count; now you can read the numbers in kanji.",
      {table:[["Kanji","Meaning","Main readings","Common words"],["一","one","On イチ · Kun ひと(つ)","[一]{ひと}つ one (thing) · [一月]{いちがつ} January · ★[一人]{ひとり} one person, alone"],["二","two","On ニ · Kun ふた(つ)","[二]{ふた}つ two (things) · [二月]{にがつ} February · ★[二人]{ふたり} two people"],["三","three","On サン · Kun み, みっ(つ)","[三]{みっ}つ three (things) · [三人]{さんにん} three people · [三月]{さんがつ} March"],["四","four","On シ · Kun よん, よ, よっ(つ)","[四]{よっ}つ four (things) · [四月]{しがつ} April · [四人]{よにん} four people"],["五","five","On ゴ · Kun いつ(つ)","[五]{いつ}つ five (things) · [五月]{ごがつ} May · [五日]{いつか} the 5th; five days"],["六","six","On ロク · Kun む, むっ(つ)","[六]{むっ}つ six (things) · [六月]{ろくがつ} June · [六百]{ろっぴゃく} 600"],["七","seven","On シチ · Kun なな(つ)","[七]{なな}つ seven (things) · [七月]{しちがつ} July · [七時]{しちじ} seven o’clock"],["八","eight","On ハチ · Kun や, やっ(つ)","[八]{やっ}つ eight (things) · [八月]{はちがつ} August · ★[八百屋]{やおや} greengrocer"],["九","nine","On キュウ, ク · Kun ここの(つ)","[九]{ここの}つ nine (things) · [九月]{くがつ} September · [九時]{くじ} nine o’clock"],["十","ten","On ジュウ (ジュッ, ジッ) · Kun とお","[十]{とお} ten (things) · [十月]{じゅうがつ} October · [十分]{じゅっぷん} ten minutes"],["百","hundred","On ヒャク","[百]{ひゃく} 100 · [三百]{さんびゃく} 300 · [八百]{はっぴゃく} 800"],["千","thousand","On セン","[千]{せん} 1,000 · [三千]{さんぜん} 3,000 · [八千]{はっせん} 8,000"],["万","ten thousand","On マン","[一万]{いちまん} 10,000 · [百万]{ひゃくまん} 1,000,000"],["円","yen; circle","On エン · Kun まる(い)","[百円]{ひゃくえん} 100 yen · [千円]{せんえん} 1,000 yen"]]},
      "Japanese counts big numbers in groups of four digits, not three. 万 (10,000) is a unit of its own, so 100,000 is [十万]{じゅうまん} (“ten 万”) and one million is [百万]{ひゃくまん} (“a hundred 万”). Say いちまん for 10,000: unlike 百 and 千, which can stand alone as 100 and 1,000, 万 needs a number in front when you count.",
      {ex:"[三千八百円]{さんぜんはっぴゃくえん} = 3,000 + 800 = 3,800 yen\n[二万五千円]{にまんごせんえん} = 20,000 + 5,000 = 25,000 yen", label:"Reading a price"},
      "Prices on menus and in shops are usually written in Arabic numerals (800円). You will meet kanji numbers in vertical writing, on some menus and signs, in dates on formal documents and in the JLPT. Two kanji words with 十分 look the same but are different: [十分]{じゅっぷん} (ten minutes) and [十分]{じゅうぶん} (enough). The sentence tells you which."
    ]},
    {h:"Time kanji", body:[
      "These 14 kanji cover the calendar and the clock. Dates have many special readings (ついたち, ふつか…), which Unit 3 taught ({{time-and-dates}}).",
      {table:[["Kanji","Meaning","Main readings","Common words"],["年","year","On ネン · Kun とし","[来年]{らいねん} next year · [毎年]{まいとし} every year · ★[今年]{ことし} this year"],["月","moon; month","On ゲツ, ガツ · Kun つき","[月]{つき} moon · [一月]{いちがつ} January · [月曜日]{げつようび} Monday"],["日","sun; day","On ニチ, ジツ · Kun ひ, か","[毎日]{まいにち} every day · [日本]{にほん} Japan · ★[今日]{きょう} today"],["時","time; hour","On ジ · Kun とき","[時間]{じかん} time; hours · [一時]{いちじ} one o’clock · [時々]{ときどき} sometimes"],["分","minute; part; understand","On フン, ブン · Kun わ(かる), わ(ける)","[五分]{ごふん} five minutes · [半分]{はんぶん} half · [分]{わ}かる understand"],["半","half","On ハン","[半分]{はんぶん} half · [三時半]{さんじはん} half past three · [半年]{はんとし} half a year"],["午","noon","On ゴ","[午前]{ごぜん} a.m.; morning · [午後]{ごご} p.m.; afternoon"],["前","front; before","On ゼン · Kun まえ","[前]{まえ} front; before · [名前]{なまえ} name · [午前]{ごぜん} a.m."],["後","after; behind","On ゴ, コウ · Kun あと, うし(ろ)","[後]{あと}で later · [後]{うし}ろ behind · [午後]{ごご} p.m."],["今","now","On コン · Kun いま","[今]{いま} now · [今月]{こんげつ} this month · [今晩]{こんばん} this evening"],["毎","every","On マイ","[毎日]{まいにち} every day · [毎朝]{まいあさ} every morning · [毎月]{まいつき} every month"],["何","what","Kun なに, なん","[何]{なに} what · [何時]{なんじ} what time · [何人]{なんにん} how many people"],["間","interval; between","On カン · Kun あいだ, ま","[時間]{じかん} time; hours · [一週間]{いっしゅうかん} a week · [間]{あいだ} between; during"],["先","ahead; earlier","On セン · Kun さき","[先週]{せんしゅう} last week · [先月]{せんげつ} last month · [先生]{せんせい} teacher"]]},
      "Watch 分 after numbers: it is ふん or ぷん depending on the number before it. [五分]{ごふん} and [九分]{きゅうふん}, but [一分]{いっぷん}, [三分]{さんぷん}, [六分]{ろっぷん} and [十分]{じゅっぷん}. And watch 四, 七 and 九 on the clock: [四時]{よじ}, [七時]{しちじ} and [九時]{くじ}.",
      "Time words come in sets. Learn them together: [先週]{せんしゅう} (last week), [今週]{こんしゅう} (this week), [来週]{らいしゅう} (next week); [先月]{せんげつ}, [今月]{こんげつ}, [来月]{らいげつ}. Year is the odd one out: [去年]{きょねん} (last year), ★[今年]{ことし}, [来年]{らいねん}.",
      {lab:"kl-n5", t:"Practise: the number and time kanji in your daily N5 review"}
    ]}
   ],
   try:[
    {id:"e3u4-l2-x1", type:"sort", q:"Is the kanji in bold read with its on reading or its kun reading?", buckets:["On reading (音読み)","Kun reading (訓読み)"], items:[
      {t:"**山** in 富士山 (ふじさん)", b:0, why:"サン is the on reading of 山, from Chinese. It is common in names of mountains."},
      {t:"**山** alone: 山 (やま)", b:1, why:"やま is the Japanese word for mountain: the kun reading."},
      {t:"**一** in 一月 (いちがつ)", b:0, why:"イチ is the on reading. Month names use on readings: いちがつ, にがつ…"},
      {t:"**一** in 一つ (ひとつ)", b:1, why:"ひと(つ) is the kun reading. The okurigana つ is a clue."},
      {t:"**食** in 食べる (たべる)", b:1, why:"A kanji followed by okurigana usually takes its kun reading: た(べる)."},
      {t:"**学** in 学生 (がくせい)", b:0, why:"ガク is the on reading. Two kanji together with no kana are usually read with on readings."}
    ]},
    {id:"e3u4-l2-x2", type:"mcq", q:"How is 食べます read?", options:[
      {t:"たべます", ok:true, why:"Right. 食 + okurigana べます: the okurigana tell you to use the kun reading た."},
      {t:"しょくべます", why:"ショク is the on reading of 食, used in compounds like 食堂 (しょくどう). With okurigana, use the kun reading."},
      {t:"くべます", why:"く(う) is a rarer kun reading of 食 (in 食う, a casual word for eat). The verb in polite speech is たべます."},
      {t:"じきべます", why:"ジキ is a rare on reading of 食. It never goes with the okurigana べます."}
    ]},
    {id:"e3u4-l2-x3", type:"match", q:"Match each word to its special reading.", pairs:[
      ["今日","きょう","今日 is read きょう as a whole word. It is in the official list of special readings."],
      ["大人","おとな","大人 (adult) is おとな, not だいにん or たいじん."],
      ["一人","ひとり","一人 (one person, alone) is ひとり. Three people is さんにん, with the regular reading."],
      ["時計","とけい","時計 (clock, watch) is とけい; the kanji were chosen for the word’s meaning."],
      ["今年","ことし","今年 (this year) is ことし. Compare 来年 (らいねん), which uses regular on readings."]
    ]},
    {id:"e3u4-l2-x4", type:"number", q:"A price tag at a market says [二万五千円]{にまんごせんえん}. How many yen is that?", answer:25000, tol:0, unit:"yen", why:"[二万]{にまん} = 2 × 10,000 = 20,000, and [五千]{ごせん} = 5,000. 20,000 + 5,000 = 25,000 yen.", wrongs:[
      {v:2500, tol:0, why:"You read 万 as if it were 千. 万 is 10,000, so [二万]{にまん} is 20,000."},
      {v:250000, tol:0, why:"You may have read 万 as 100,000. One 万 is 10,000 (four zeros)."},
      {v:7000, tol:0, why:"You added the numbers 2 and 5 as thousands. [二万]{にまん} and [五千]{ごせん} are different units: 20,000 and 5,000."}
    ], hint2:"万 = 10,000 and 千 = 1,000. Work out each part, then add."},
    {id:"e3u4-l2-x5", type:"mcq", q:"How is 四時 (four o’clock) read?", options:[
      {t:"よじ", ok:true, why:"Right. On the clock, 四 is よ: よじ. Compare 四人 (よにん) and 四月 (しがつ)."},
      {t:"しじ", why:"し is used in 四月 (しがつ), but not for the hour. Four o’clock is よじ."},
      {t:"よんじ", why:"よん is the usual way to say four, but the hour is the shorter よじ."},
      {t:"よっじ", why:"There is no small っ here. よっつ (four things) has one, but four o’clock is よじ."}
    ]},
    {id:"e3u4-l2-x6", type:"number", q:"A class runs from [午前十時半]{ごぜんじゅうじはん} to [午後一時]{ごごいちじ}. How many minutes long is it?", answer:150, tol:0, unit:"minutes", why:"[午前十時半]{ごぜんじゅうじはん} is 10:30 a.m. and [午後一時]{ごごいちじ} is 1:00 p.m. (13:00). From 10:30 to 12:30 is 120 minutes, and 12:30 to 13:00 is 30 more: 150 minutes.", wrongs:[
      {v:90, tol:0, why:"You may have stopped at 12:00. [午後一時]{ごごいちじ} is one hour after noon: 13:00."},
      {v:2.5, tol:0, why:"That is the length in hours. The question asks for minutes: 2.5 × 60 = 150."},
      {v:180, tol:0, why:"You may have read [十時半]{じゅうじはん} as 10:00. 半 means half past: 10:30."}
    ], hint2:"[午前]{ごぜん} = a.m., [午後]{ごご} = p.m., 半 = half past. Turn both times into a 24-hour clock first."},
    {id:"e3u4-l2-x7", type:"spot", q:"Minh wrote readings for these words. Tap the readings that are wrong.", ask:"has a wrong reading", parts:[
      {t:"三月 (さんがつ)", flag:false, why:"Correct: March is さんがつ."},
      " · ",
      {t:"九時 (きゅうじ)", flag:true, why:"Nine o’clock is くじ. 九 is く on the clock and in 九月 (くがつ)."},
      " · ",
      {t:"四人 (よにん)", flag:false, why:"Correct: four people is よにん."},
      " · ",
      {t:"六百 (ろくひゃく)", flag:true, why:"600 has a sound change: ろっぴゃく."},
      " · ",
      {t:"七月 (しちがつ)", flag:false, why:"Correct: July is しちがつ."},
      " · ",
      {t:"二月 (ふたがつ)", flag:true, why:"Month names use on readings: February is にがつ. ふた is the kun reading, used in 二つ (ふたつ)."},
      " · ",
      {t:"三百 (さんびゃく)", flag:false, why:"Correct: 300 is さんびゃく, with the sound change to びゃく."}
    ]}
   ],
   apply:{
    intro:"Practise readings with numbers and times from your own life.",
    tasks:[
     {t:"Write your week in kanji", how:[
       "Write five times you do something regularly, in kanji with furigana, for example [午前七時]{ごぜんしちじ}, [午後六時半]{ごごろくじはん}.",
       "Add a time word to each: [毎日]{まいにち}, [毎朝]{まいあさ}, [毎週]{まいしゅう}, [今晩]{こんばん}.",
       "Read each one aloud, checking the readings of 四, 七 and 九 and of 分 after numbers."
     ], write:"[毎朝]{まいあさ} [午前七時]{ごぜんしちじ}… (what I do)…"},
     {t:"Read three prices", how:[
       "Find three prices in yen: on a Japanese shopping site, a menu photo or a price list.",
       "Write each one in kanji (for example 1,280円 → [千二百八十円]{せんにひゃくはちじゅうえん}) and then in hiragana.",
       "Check the sound changes: 三百 さんびゃく, 六百 ろっぴゃく, 八百 はっぴゃく, 三千 さんぜん, 八千 はっせん."
     ], write:"Price 1… in kanji… in hiragana… Price 2…"},
     {t:"Learn the special readings as words", how:[
       "Make a small card for each of 今日, [今年]{ことし}, [大人]{おとな}, [一人]{ひとり}, [二人]{ふたり}, [時計]{とけい}, [上手]{じょうず}, [下手]{へた}.",
       "On the back, write the reading, the meaning and a short sentence, such as [今日]{きょう}は[暑]{あつ}いです。",
       "Review them in your next two Kanji Lab sessions."
     ], write:"今日 – きょう – today – my sentence…"}
    ],
    proof:"Five times of your week written in kanji with correct readings, three prices converted to kanji and hiragana, and a set of cards for the special readings."},
   read:[
    {book:"taekim", where:"Grammar Guide › The Writing System › “Kanji”, section “Reading Kanji” (on and kun readings, okurigana)"},
    {book:"taekim", where:"Complete Guide › Numbers, amounts, and directions › “The Numeric System” and “Dates and Time”"},
    {book:"irodori", where:"Starter, Lessons 16 “How much is this?” and 17 “I went to see a movie.”: [漢字]{かんじ}のことば (Kanji Words)", note:"一 to 十, then 百, 千, 万 and 円. Lessons 10 and 12 add 時, 分, 半 and 年, 月, 日, [今日]{きょう}."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e3u4-l3", title:"Kanji for people, places, directions and nature", minutes:55,
   hook:{q:"You arrive at a big station and your friend’s message says 「[北口]{きたぐち}で[会]{あ}いましょう」. Where do you meet?", options:["At the north exit","At the big entrance","At the north platform","At the ticket machines"], answer:0,
     reveal:"**At the north exit.** 北 means north, and 口 (mouth) means an opening, an exit, in words like this. Big stations have exits named by direction, so [北口]{きたぐち}, [南口]{みなみぐち}, [東口]{ひがしぐち} and [西口]{にしぐち} are some of the most useful kanji words in Japan. This lesson teaches the kanji for people, places, directions and nature."},
   goals:[
     "Read and write the kanji for people and family, and use 父・母 and お父さん・お母さん correctly",
     "Read the kanji for school, names, countries and languages, including the patterns ～人 and ～語",
     "Use the position kanji (上・下・中・外・右・左) and the four directions (東・西・南・北), for example on station signs",
     "Read the nature kanji and the days of the week"
   ],
   learn:[
    {h:"People and family", body:[
      {lead:"Seven kanji cover people and family. ★ marks a special reading."},
      {table:[["Kanji","Meaning","Main readings","Common words"],["人","person","On ジン, ニン · Kun ひと","[人]{ひと} person · [日本人]{にほんじん} Japanese person · [三人]{さんにん} three people · ★[大人]{おとな} adult"],["男","man; male","On ダン, ナン · Kun おとこ","[男]{おとこ}の[人]{ひと} man · [男]{おとこ}の[子]{こ} boy · [男性]{だんせい} man (formal)"],["女","woman; female","On ジョ · Kun おんな","[女]{おんな}の[人]{ひと} woman · [女]{おんな}の[子]{こ} girl · [女性]{じょせい} woman (formal)"],["子","child","On シ · Kun こ","[子]{こ}ども child · [女]{おんな}の[子]{こ} girl · [帽子]{ぼうし} hat"],["父","father","On フ · Kun ちち","[父]{ちち} (my) father · ★お[父]{とう}さん father · [父母]{ふぼ} parents (formal)"],["母","mother","On ボ · Kun はは","[母]{はは} (my) mother · ★お[母]{かあ}さん mother · [母語]{ぼご} mother tongue"],["友","friend","On ユウ · Kun とも","★[友達]{ともだち} friend (often written [友]{とも}だち) · [友人]{ゆうじん} friend (formal)"]]},
      "人 has two on readings with different jobs. **じん** follows a country to make a nationality: [日本人]{にほんじん}, ブラジル[人]{じん}, ベトナム[人]{じん}. **にん** follows a number to count people: [三人]{さんにん}, [何人]{なんにん} (how many people). But one and two people are special: ★[一人]{ひとり}, ★[二人]{ふたり}.",
      "Family words come in two sets, and the choice depends on whose family you mean. This idea of inside and outside (your group and other people’s) runs through Japanese ([[uchi-soto]]).",
      {table:[["","My own family (talking to others)","Someone else’s family, or calling your own"],["Father","[父]{ちち}","お[父]{とう}さん"],["Mother","[母]{はは}","お[母]{かあ}さん"]]},
      {ex:"[先生]{せんせい}：お[父]{とう}さんはお[元気]{げんき}ですか。\nアナ：はい、[父]{ちち}は[元気]{げんき}です。", label:"Inside and outside in one exchange"},
      "The teacher asks about Ana’s father with お父さん; Ana answers about her own father with 父. At home, Ana calls him お父さん (or a casual word her family uses)."
    ]},
    {h:"School, names, countries and languages", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["生","life; birth; raw","On セイ, ショウ · Kun い(きる), う(まれる), なま","[学生]{がくせい} student · [先生]{せんせい} teacher · [生]{う}まれる be born · [誕生日]{たんじょうび} birthday"],["学","study","On ガク · Kun まな(ぶ)","[大学]{だいがく} university · [学生]{がくせい} student · [学校]{がっこう} school"],["校","school","On コウ","[学校]{がっこう} school · [高校]{こうこう} high school · [校長]{こうちょう} head teacher"],["名","name","On メイ, ミョウ · Kun な","[名前]{なまえ} name · [有名]{ゆうめい} famous"],["国","country","On コク · Kun くに","[国]{くに} country · [外国]{がいこく} foreign country · [中国]{ちゅうごく} China"],["語","language; word","On ゴ","[日本語]{にほんご} Japanese · [英語]{えいご} English · [単語]{たんご} word (vocabulary)"]]},
      "生 has more readings than almost any other kanji, so learn it through words. At N5 you need three: セイ in [学生]{がくせい} and [先生]{せんせい}, う(まれる) in [生]{う}まれる, and じょう in [誕生日]{たんじょうび}, where the on reading ショウ becomes voiced after ん. This is exactly why readings are best learned word by word.",
      "Two patterns let you name almost any country’s people and language. Add [人]{じん} for a person and [語]{ご} for a language: スペイン[人]{じん}, スペイン[語]{ご}; [中国人]{ちゅうごくじん}, [中国語]{ちゅうごくご}. Watch out for English: the language is [英語]{えいご}, while a British person is イギリス[人]{じん}, and an American is アメリカ[人]{じん}.",
      {tip:"[日本]{にほん} can also be read にっぽん. Both readings are accepted. にほん is the one you hear most in everyday speech and in [日本語]{にほんご}, while にっぽん is often chosen for official and international uses, such as Japanese banknotes and stamps (which say NIPPON) and sports events."}
    ]},
    {h:"Where things are: six position kanji", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["上","up; above; top","On ジョウ · Kun うえ, あ(がる), あ(げる)","[上]{うえ} top; above · ★[上手]{じょうず} good at · [上]{あ}がる go up"],["下","down; below","On カ, ゲ · Kun した, さ(がる), お(りる), くだ(さる)","[下]{した} under; below · [地下鉄]{ちかてつ} subway · [下]{くだ}さい please give me · ★[下手]{へた} bad at"],["中","middle; inside","On チュウ · Kun なか","[中]{なか} inside · [中国]{ちゅうごく} China · [一日中]{いちにちじゅう} all day"],["外","outside","On ガイ · Kun そと, ほか","[外]{そと} outside · [外国]{がいこく} foreign country · [外国人]{がいこくじん} foreigner"],["右","right","On ウ, ユウ · Kun みぎ","[右]{みぎ} right · [右手]{みぎて} right hand · [左右]{さゆう} left and right"],["左","left","On サ · Kun ひだり","[左]{ひだり} left · [左手]{ひだりて} left hand · [左右]{さゆう} left and right"]]},
      "In sentences, these kanji usually follow の: “X の 上” means “on top of X” or “above X”. They combine with あります and います (Unit 2) to say where things and people are.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Position words around a box (はこ)</text><rect class="d-gold" x="120" y="110" width="100" height="80" rx="4" stroke-width="2"/><text x="170" y="156" text-anchor="middle">中 なか</text><text x="170" y="98" text-anchor="middle">上 うえ</text><path class="d-ink" d="M170 74 V60" stroke-width="2" marker-end="url(#a3)"/><text x="170" y="214" text-anchor="middle">下 した</text><path class="d-ink" d="M170 226 V240" stroke-width="2" marker-end="url(#a3)"/><text x="64" y="156" text-anchor="middle">左 ひだり</text><path class="d-ink" d="M30 150 H16" stroke-width="2" marker-end="url(#a3)"/><text x="276" y="156" text-anchor="middle">右 みぎ</text><path class="d-ink" d="M310 150 H324" stroke-width="2" marker-end="url(#a3)"/><text x="170" y="270" text-anchor="middle">外 そと: anywhere outside the box</text><text class="s" x="170" y="290" text-anchor="middle">Left and right are from your point of view</text><defs><marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"A box. 中 (なか) is inside it, 上 (うえ) above it, 下 (した) below it, 左 (ひだり) to its left and 右 (みぎ) to its right; 外 (そと) is anywhere outside the box. Left and right are from the viewer’s point of view.", cap:"「はこの[上]{うえ}」 on the box · 「はこの[中]{なか}」 in the box · 「はこの[右]{みぎ}」 to the right of the box"},
      {ex:"[本]{ほん}はかばんの[中]{なか}にあります。 The book is in the bag.\nねこはいすの[下]{した}にいます。 The cat is under the chair.\n[駅]{えき}の[右]{みぎ}に[銀行]{ぎんこう}があります。 There is a bank to the right of the station.", label:"Positions in sentences"},
      "上 and 下 have many kun readings because they also make verbs: [上]{あ}がる (go up), and くださる, whose request form [下]{くだ}さい means “please give me” (in “please do…” after a て-form, it is usually written in hiragana: ～てください). Two everyday adjectives use them with special readings: [上手]{じょうず} (good at) and [下手]{へた} (bad at). [上手]{じょうず} is mostly used to praise other people’s skills. Saying that you yourself are [上手]{じょうず} can sound like boasting, so when someone says 「[日本語]{にほんご}が[上手]{じょうず}ですね」, a modest answer such as 「いいえ、まだまだです」 is common."
    ]},
    {h:"Directions and the station", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["東","east","On トウ · Kun ひがし","[東]{ひがし} east · [東口]{ひがしぐち} east exit · [東京]{とうきょう} Tokyo"],["西","west","On セイ, サイ · Kun にし","[西]{にし} west · [西口]{にしぐち} west exit · [関西]{かんさい} the Kansai region"],["南","south","On ナン · Kun みなみ","[南]{みなみ} south · [南口]{みなみぐち} south exit · [南北]{なんぼく} north and south"],["北","north","On ホク · Kun きた","[北]{きた} north · [北口]{きたぐち} north exit · [東北]{とうほく} north-east; the Tōhoku region"]]},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Station exits are named by direction</text><rect class="d-lup" x="110" y="110" width="120" height="70" rx="6" stroke-width="2"/><text x="170" y="142" text-anchor="middle">駅 えき</text><text class="s" x="170" y="162" text-anchor="middle">station</text><rect class="d-panel" x="135" y="58" width="70" height="40" rx="6" stroke-width="1.5"/><text x="170" y="83" text-anchor="middle">北口</text><rect class="d-panel" x="135" y="192" width="70" height="40" rx="6" stroke-width="1.5"/><text x="170" y="217" text-anchor="middle">南口</text><rect class="d-panel" x="244" y="125" width="70" height="40" rx="6" stroke-width="1.5"/><text x="279" y="150" text-anchor="middle">東口</text><rect class="d-panel" x="26" y="125" width="70" height="40" rx="6" stroke-width="1.5"/><text x="61" y="150" text-anchor="middle">西口</text><text x="170" y="48" text-anchor="middle">北 きた (north)</text><text x="170" y="252" text-anchor="middle">南 みなみ (south)</text><text x="279" y="190" text-anchor="middle">東 ひがし</text><text x="61" y="190" text-anchor="middle">西 にし</text><text class="s" x="170" y="282" text-anchor="middle">口 (くち → ぐち) = opening, exit</text></svg>', alt:"A station in the middle with four exits: 北口 (north exit) at the top, 南口 (south exit) at the bottom, 東口 (east exit) on the right and 西口 (west exit) on the left. 口, read ぐち here, means opening or exit.", cap:"On maps, north is at the top. The reading of 口 changes from くち to ぐち (voicing)."},
      "The four directions are often listed in the fixed order [東西南北]{とうざいなんぼく} (east, west, south, north), so you may hear them in that order instead of the English “north, south, east, west”.",
      "For in-between directions, modern Japanese usually puts 北 or 南 first, as in weather forecasts: [北東]{ほくとう} (north-east), [南西]{なんせい} (south-west). The older order also exists: [東北]{とうほく} means north-east too, but you will mostly see it as the name of the [東北]{とうほく} region in the north-east of Japan’s main island.",
      {tip:"In a big station, follow the exit signs: they show the exit name in kanji ([北口]{きたぐち}), often with English (North Exit) too. Agreeing on an exit is the normal way to meet someone at a station."}
    ]},
    {h:"Nature, weather and the days of the week", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["山","mountain","On サン · Kun やま","[山]{やま} mountain · [富士山]{ふじさん} Mount Fuji · [火山]{かざん} volcano"],["川","river","On セン (rare) · Kun かわ","[川]{かわ} river · [小川]{おがわ} stream"],["天","sky; heaven","On テン","[天気]{てんき} weather · [天気予報]{てんきよほう} weather forecast · [天国]{てんごく} heaven"],["気","spirit; air; feeling","On キ, ケ","[天気]{てんき} weather · [元気]{げんき} well, lively · [電気]{でんき} electricity; lights"],["雨","rain","On ウ · Kun あめ","[雨]{あめ} rain · [大雨]{おおあめ} heavy rain · [雨天]{うてん} rainy weather"],["水","water","On スイ · Kun みず","[水]{みず} water · [水曜日]{すいようび} Wednesday · [水道]{すいどう} water supply; tap water"],["火","fire","On カ · Kun ひ","[火]{ひ} fire · [火曜日]{かようび} Tuesday · [火山]{かざん} volcano"],["木","tree; wood","On モク, ボク · Kun き","[木]{き} tree · [木曜日]{もくようび} Thursday"],["金","gold; metal; money","On キン, コン · Kun かね","お[金]{かね} money · [金曜日]{きんようび} Friday · [料金]{りょうきん} fee; fare"],["土","soil; earth","On ド, ト · Kun つち","[土]{つち} soil · [土曜日]{どようび} Saturday · ★お[土産]{みやげ} souvenir"]]},
      "The days of the week use these kanji with 日 (sun) and 月 (moon), all with on readings, plus [曜日]{ようび} (day of the week). Learn them in order:",
      {table:[["Day","Kanji","Reading","Element"],["Monday","[月曜日]{げつようび}","げつようび","moon"],["Tuesday","[火曜日]{かようび}","かようび","fire"],["Wednesday","[水曜日]{すいようび}","すいようび","water"],["Thursday","[木曜日]{もくようび}","もくようび","wood"],["Friday","[金曜日]{きんようび}","きんようび","metal, gold"],["Saturday","[土曜日]{どようび}","どようび","earth"],["Sunday","[日曜日]{にちようび}","にちようび","sun"]]},
      "Calendars, timetables and shop signs often use just the first kanji in brackets: (月), (火), (水) and so on. A notice saying 「(土)・(日) [休]{やす}み」 means closed on Saturdays and Sundays.",
      "気 appears in many words about feelings and conditions as well as weather: [天気]{てんき} (weather), [元気]{げんき} (well, full of energy), [電気]{でんき} (electricity, the lights) and [人気]{にんき} (popularity). On its own, 気 is read き (its on reading), the same sound as 木 (tree, read with its kun reading). This is one of the places where kanji make reading clearer than kana."
    ]},
    {h:"Read it: a short self-introduction", body:[
      "Here is a short text that uses many of this lesson’s kanji. Read it once for the main idea, then again for details. Every kanji has furigana, as it will in all N5 units.",
      {ex:"はじめまして。サラ・ロペスです。フィリピンから[来]{き}ました。[父]{ちち}はフィリピン[人]{じん}で、[母]{はは}は[日本人]{にほんじん}です。[今]{いま}、[大学生]{だいがくせい}です。[日本語]{にほんご}の[先生]{せんせい}は[山川]{やまかわ}[先生]{せんせい}です。[毎週]{まいしゅう}[土曜日]{どようび}に、[友]{とも}だちと[山]{やま}に[行]{い}きます。", label:"Sara’s self-introduction"},
      {list:["Where is Sara’s mother from? (母は**[日本人]{にほんじん}**です: she is Japanese.)","What does Sara do? (**[大学生]{だいがくせい}**です: she is a university student.)","What does she do on Saturdays? ([毎週土曜日]{まいしゅうどようび}に、友だちと**山**に[行]{い}きます: she goes to the mountains with friends every Saturday.)"]},
      "Notice how much the kanji helped: the people (父, 母, [大学生]{だいがくせい}, [先生]{せんせい}), the place (山) and the time ([毎週土曜日]{まいしゅうどようび}) all stand out from the hiragana grammar around them. That is the skill Lesson 5 builds on.",
      {lab:"kl-n5", t:"Practise: people, places, directions and nature kanji"}
    ]}
   ],
   try:[
    {id:"e3u4-l3-x1", type:"match", q:"Match each kanji to its meaning.", pairs:[
      ["東","east","東 (ひがし): east, as in 東口 (east exit)."],
      ["西","west","西 (にし): west, as in 西口 (west exit)."],
      ["南","south","南 (みなみ): south, as in 南口 (south exit)."],
      ["北","north","北 (きた): north, as in 北口 (north exit)."],
      ["外","outside","外 (そと): outside, as in 外国 (foreign country)."],
      ["中","inside, middle","中 (なか): inside, as in かばんの中 (in the bag)."]
    ]},
    {id:"e3u4-l3-x2", type:"mcq", q:"Kenji texts you: 「[駅]{えき}の[西口]{にしぐち}にいます。」 Where is he?", options:[
      {t:"At the station’s west exit", ok:true, why:"Right. 西 is west, and 口 here means exit."},
      {t:"At the station’s east exit", why:"East is 東 (ひがし). 西 (にし) is west."},
      {t:"Inside the station, at the west platform", why:"口 means an opening or exit, not a platform. Kenji is at the west exit."},
      {t:"At the station’s south exit", why:"South is 南 (みなみ). Kenji wrote 西, west."}
    ]},
    {id:"e3u4-l3-x3", type:"mcq", q:"In class, your teacher asks about your family. Which word do you use for **your own** father when you talk to your teacher?", options:[
      {t:"[父]{ちち}", ok:true, why:"Right. When you speak to people outside your family, you use the plain word 父 for your own father."},
      {t:"お[父]{とう}さん", why:"お父さん is for someone else’s father, or for calling your own father at home. To your teacher, say 父."},
      {t:"お[父様]{とうさま}", why:"お[父様]{とうさま} is a very polite word for someone else’s father. You never use it for your own."},
      {t:"[父]{とう}さん", why:"[父]{とう}さん is a casual way to call your own father at home. To a teacher, use 父."}
    ]},
    {id:"e3u4-l3-x4", type:"mcq", q:"How is 人 read in 日本人 (a Japanese person)?", options:[
      {t:"じん", ok:true, why:"Right. After a country name, 人 is じん: にほんじん, ブラジルじん."},
      {t:"にん", why:"にん is used after numbers to count people: さんにん (three people)."},
      {t:"ひと", why:"ひと is the reading when 人 stands alone: あの人 (that person)."},
      {t:"り", why:"り appears only in the special readings 一人 (ひとり) and 二人 (ふたり)."}
    ]},
    {id:"e3u4-l3-x5", type:"order", q:"Put these days in order, from Monday to Friday.", items:[
      {t:"[月曜日]{げつようび}", why:"Monday: the moon day."},
      {t:"[火曜日]{かようび}", why:"Tuesday: the fire day."},
      {t:"[水曜日]{すいようび}", why:"Wednesday: the water day."},
      {t:"[木曜日]{もくようび}", why:"Thursday: the wood day."},
      {t:"[金曜日]{きんようび}", why:"Friday: the metal (gold) day. Then come [土曜日]{どようび} (Saturday) and [日曜日]{にちようび} (Sunday)."}
    ]},
    {id:"e3u4-l3-x6", type:"spot", q:"Ali added furigana to his homework. Tap the words with **wrong** readings.", ask:"has a wrong reading", parts:[
      {t:"[外国]{がいこく}", flag:false, why:"Correct: 外国 is がいこく, foreign country."},
      " · ",
      {t:"[先生]{さきせい}", flag:true, why:"先生 is せんせい. さき is the kun reading of 先 (ahead), used when 先 stands alone."},
      " · ",
      {t:"[女]{おんな}の[子]{こ}", flag:false, why:"Correct: 女の子 is おんなのこ, girl."},
      " · ",
      {t:"[北口]{きたくち}", flag:true, why:"北口 is きたぐち: くち becomes ぐち after another word (voicing, rendaku)."},
      " · ",
      {t:"[天気]{てんき}", flag:false, why:"Correct: 天気 is てんき, weather."},
      " · ",
      {t:"[学校]{がくこう}", flag:true, why:"学校 is がっこう: がく + こう shrinks to がっこう with a small っ."},
      " · ",
      {t:"[土曜日]{どようび}", flag:false, why:"Correct: Saturday is どようび."}
    ]},
    {id:"e3u4-l3-x7", type:"mcq", q:"Which word means **weather**?", options:[
      {t:"天気", ok:true, why:"Right. 天気 (てんき): sky + air. [天気予報]{てんきよほう} is the weather forecast."},
      {t:"元気", why:"元気 (げんき) means well, healthy, full of energy, as in お[元気]{げんき}ですか (How are you?)."},
      {t:"電気", why:"電気 (でんき) means electricity, or the lights in a room."},
      {t:"人気", why:"人気 (にんき) means popularity, as in [人気]{にんき}があります (it is popular)."}
    ]}
   ],
   apply:{
    intro:"Use the new kanji to describe your own home, family and neighbourhood.",
    tasks:[
     {t:"Label five things at home", how:[
       "Choose five objects at home. For each, write where it is with a position kanji, for example [本]{ほん}はテーブルの[上]{うえ}にあります。 or ねこはベッドの[下]{した}にいます。",
       "Use あります for things and います for people and animals.",
       "If you like, write the kanji word on a sticky note and put it on the object (上, 下, 中, 右, 左)."
     ], write:"1 … は … の 上 に あります。 2 …"},
     {t:"Draw a map of your nearest station or bus stop", how:[
       "Draw a simple map with north at the top. Label 北, 南, 東 and 西.",
       "Mark two or three places near it, and write where each is: [駅]{えき}の[北]{きた}にコンビニがあります。",
       "If it has more than one exit or entrance, name them as a Japanese station would: [北口]{きたぐち}, [南口]{みなみぐち}…"
     ], write:"My map (describe it)… sentences…"},
     {t:"Introduce your family in three sentences", how:[
       "Write three sentences about your family using 父, 母 or other family words, such as [母]{はは}は[先生]{せんせい}です。",
       "Then write one question you could ask a friend about their family, using お父さん or お母さん.",
       "Check every reading, especially 人 (じん / にん / ひと)."
     ], write:"Sentence 1… 2… 3… My question to a friend…"}
    ],
    proof:"Five position sentences about your home, a labelled map with the four directions, and three family sentences that use the inside/outside words correctly."},
   read:[
    {book:"irodori", where:"Starter, Lessons 3 “Nice to meet you.” and 4 “I live in Tokyo.”: [漢字]{かんじ}のことば (Kanji Words)", note:"[名前]{なまえ}, [国]{くに}, [父]{ちち}, [母]{はは}, [子]{こ}ども, [日本]{にほん}."},
    {book:"irodori", where:"Starter, Lessons 8 “Where is Yamada-san?”, 9 “Lunch is from noon to 1 o’clock.” and 13 “Does this bus go to the airport?”: [漢字]{かんじ}のことば (Kanji Words)", note:"上, 下, 中; the days of the week; 東, 西, 南, 北."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e3u4-l4", title:"Kanji for actions and descriptions, and core N5 words", minutes:55,
   hook:{q:"「この[時計]{とけい}は[高]{たか}いです。」 means “This watch is expensive.” Which word means the opposite: “This watch is cheap”?", options:["[安]{やす}い","[低]{ひく}い","[小]{ちい}さい","[短]{みじか}い"], answer:0,
     reveal:"**[安]{やす}い (やすい).** [高]{たか}い means both “expensive” and “high, tall”, so it has two opposites: [安]{やす}い (cheap) for prices and 低い (low) for height. Words don’t map one-to-one between languages, which is why this lesson teaches words in pairs and groups, not as single translations."},
   goals:[
     "Read and write the 11 verb kanji with their okurigana, including the readings of 来る",
     "Read the kanji for describing words (大・小・高・長・白) and things (車・電・本)",
     "Learn core N5 vocabulary in groups: food, places, family, everyday verbs, adjective pairs and katakana words",
     "Learn each verb with the particle it needs and each adjective with its opposite"
   ],
   learn:[
    {h:"Verb kanji", body:[
      {lead:"Eleven N5 kanji are mainly verbs. Each one is written with okurigana, and most also appear in common compounds with their on reading."},
      {table:[["Kanji","Meaning","Main readings","Common words"],["行","go","On コウ, ギョウ · Kun い(く)","[行]{い}く go · [銀行]{ぎんこう} bank · [旅行]{りょこう} trip"],["来","come","On ライ · Kun く(る), き(ます), こ(ない)","[来]{く}る come · [来年]{らいねん} next year · [来週]{らいしゅう} next week"],["出","go out; put out","On シュツ · Kun で(る), だ(す)","[出]{で}る leave, go out · [出口]{でぐち} exit · [出]{だ}す take out, send"],["入","enter; put in","On ニュウ · Kun はい(る), い(れる)","[入]{はい}る enter · [入口]{いりぐち} entrance · [入]{い}れる put in"],["見","see","On ケン · Kun み(る), み(せる)","[見]{み}る see, watch · [見]{み}せる show · [見学]{けんがく} study visit, tour"],["聞","hear; ask","On ブン, モン · Kun き(く)","[聞]{き}く hear, listen, ask · [新聞]{しんぶん} newspaper"],["読","read","On ドク · Kun よ(む)","[読]{よ}む read · [読書]{どくしょ} reading (books)"],["書","write","On ショ · Kun か(く)","[書]{か}く write · [辞書]{じしょ} dictionary · [図書館]{としょかん} library"],["話","talk; story","On ワ · Kun はな(す), はなし","[話]{はな}す speak, talk · [話]{はなし} talk, story · [電話]{でんわ} telephone"],["食","eat; food","On ショク · Kun た(べる)","[食]{た}べる eat · [食]{た}べ[物]{もの} food · [食堂]{しょくどう} cafeteria, dining hall"],["休","rest","On キュウ · Kun やす(む)","[休]{やす}む rest, take time off · [休]{やす}み holiday, break · [休日]{きゅうじつ} day off"]]},
      "Four details catch many learners:",
      {list:["**来る changes its reading as it conjugates.** The kanji stays the same, but it is く in [来]{く}る, き in [来]{き}ます and [来]{き}て, and こ in [来]{こ}ない. It is one of the two irregular verbs ([[irregular-verb]], Unit 2).","**入る is a godan verb**, even though it ends in -iru like the [[ichidan-verb|ichidan verb]] 見る: [入]{はい}ります, [入]{はい}らない ([[godan-verb]]).","**[聞]{き}く has three meanings**: hear ([音]{おと}を[聞]{き}く, hear a sound), listen ([音楽]{おんがく}を[聞]{き}く, listen to music) and ask ([先生]{せんせい}に[聞]{き}く, ask the teacher). Context tells you which.","**行く has an irregular て-form**: [行]{い}って, not 行いて (and the past is [行]{い}った) ([[te-form]], Unit 3)."]},
      "The okurigana pattern helps you tell related verbs apart. [出]{で}る (go out) and [出]{だ}す (take something out) share 出; [入]{はい}る (enter) and [入]{い}れる (put in) share 入. In each pair, one verb is about you moving and the other is about you moving something."
    ]},
    {h:"Describing words", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["大","big","On ダイ, タイ · Kun おお(きい)","[大]{おお}きい big · [大学]{だいがく} university · [大切]{たいせつ} important · ★[大人]{おとな} adult"],["小","small","On ショウ · Kun ちい(さい), こ, お","[小]{ちい}さい small · [小学校]{しょうがっこう} primary school · [小川]{おがわ} stream"],["高","high; expensive","On コウ · Kun たか(い)","[高]{たか}い high, tall, expensive · [高校]{こうこう} high school"],["長","long; chief","On チョウ · Kun なが(い)","[長]{なが}い long · [社長]{しゃちょう} company president · [校長]{こうちょう} head teacher"],["白","white","On ハク · Kun しろ, しろ(い)","[白]{しろ}い white · [白]{しろ} white (the colour) · [面白]{おもしろ}い interesting"]]},
      "大 and 小 have a second adjective form that only goes before a noun: [大]{おお}きな[家]{いえ} (a big house), [小]{ちい}さな[店]{みせ} (a small shop). [大]{おお}きい[家]{いえ} means the same. At the end of a sentence, only 大きい and 小さい work: [家]{いえ}は[大]{おお}きいです.",
      "長 is also a noun meaning “head, chief”, which is why it ends many job titles: [社長]{しゃちょう} (company president), [校長]{こうちょう} (head teacher). And 白 is hidden inside [面白]{おもしろ}い (interesting), a word you will use often."
    ]},
    {h:"Things: 車, 電 and 本, and word families", body:[
      {table:[["Kanji","Meaning","Main readings","Common words"],["車","car; vehicle","On シャ · Kun くるま","[車]{くるま} car · [電車]{でんしゃ} train · [自転車]{じてんしゃ} bicycle"],["電","electricity","On デン","[電気]{でんき} electricity; lights · [電車]{でんしゃ} train · [電話]{でんわ} telephone"],["本","book; origin; main","On ホン · Kun もと","[本]{ほん} book · [日本]{にほん} Japan · [一本]{いっぽん} one (long, thin thing)"]]},
      "Kanji form families of words ([[jukugo|kanji compounds]]), and you can often guess a new word from kanji you know. 電 (electricity) + 車 (vehicle) is a train; 電 + 話 (talk) is a telephone; 自 (self) + 転 (turn) + 車 is a bicycle. Learning one kanji well opens up several words at once.",
      {fig:'<svg viewBox="0 0 340 226"><text x="170" y="18" text-anchor="middle">Two kanji, one shared word</text><circle class="d-lup" cx="50" cy="66" r="28" stroke-width="2"/><text transform="translate(50 77) scale(1.9)" text-anchor="middle">電</text><text class="s" x="50" y="112" text-anchor="middle">electricity</text><circle class="d-sage" cx="290" cy="66" r="28" stroke-width="2"/><text transform="translate(290 77) scale(1.9)" text-anchor="middle">車</text><text class="s" x="290" y="112" text-anchor="middle">vehicle</text><rect class="d-gold" x="115" y="36" width="110" height="62" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">電車</text><text class="s" x="170" y="74" text-anchor="middle">でんしゃ</text><text class="s" x="170" y="90" text-anchor="middle">train</text><path class="d-ink" d="M78 66 H115" stroke-width="1.5"/><path class="d-ink" d="M225 66 H262" stroke-width="1.5"/><rect class="d-panel" x="4" y="150" width="78" height="64" rx="8" stroke-width="1.5"/><text x="43" y="170" text-anchor="middle">電気</text><text class="s" x="43" y="188" text-anchor="middle">でんき</text><text class="s" x="43" y="205" text-anchor="middle">electricity</text><rect class="d-panel" x="88" y="150" width="78" height="64" rx="8" stroke-width="1.5"/><text x="127" y="170" text-anchor="middle">電話</text><text class="s" x="127" y="188" text-anchor="middle">でんわ</text><text class="s" x="127" y="205" text-anchor="middle">telephone</text><rect class="d-panel" x="174" y="150" width="78" height="64" rx="8" stroke-width="1.5"/><text x="213" y="170" text-anchor="middle">車</text><text class="s" x="213" y="188" text-anchor="middle">くるま</text><text class="s" x="213" y="205" text-anchor="middle">car</text><rect class="d-panel" x="258" y="150" width="78" height="64" rx="8" stroke-width="1.5"/><text x="297" y="170" text-anchor="middle">自転車</text><text class="s" x="297" y="188" text-anchor="middle">じてんしゃ</text><text class="s" x="297" y="205" text-anchor="middle">bicycle</text><path class="d-ink" d="M44 120 L43 150" stroke-width="1.5"/><path class="d-ink" d="M58 120 L127 150" stroke-width="1.5"/><path class="d-ink" d="M282 120 L213 150" stroke-width="1.5"/><path class="d-ink" d="M296 120 L297 150" stroke-width="1.5"/></svg>', alt:"Two circles: 電 (electricity) on the left and 車 (vehicle) on the right. Lines from 電 go to 電気 (でんき, electricity) and 電話 (でんわ, telephone); lines from 車 go to 車 (くるま, car) and 自転車 (じてんしゃ, bicycle). Both circles connect to the shared word 電車 (でんしゃ, train) in the middle.", cap:"When you learn a kanji, collect the words that share it."},
      "本 is also a [[counter]] for long, thin things (pens, bottles, trains), with sound changes: [一本]{いっぽん}, [二本]{にほん}, [三本]{さんぼん}. Unit 3 covered these ({{counters}})."
    ]},
    {h:"Core N5 vocabulary in groups", body:[
      "N5 vocabulary is the everyday core: food, places, family, daily actions and common descriptions. Learning words in groups like these is easier than learning a random list, because each group is a situation you can picture.",
      {table:[["Group","Words"],["Food and drink","ご[飯]{はん} cooked rice; meal · [朝]{あさ}ご[飯]{はん} breakfast · パン bread · [肉]{にく} meat · [魚]{さかな} fish · [野菜]{やさい} vegetables · [卵]{たまご} egg · お[茶]{ちゃ} tea · コーヒー coffee · [牛乳]{ぎゅうにゅう} milk"],["Places in town","[駅]{えき} station · [店]{みせ} shop · [銀行]{ぎんこう} bank · [病院]{びょういん} hospital · [図書館]{としょかん} library · [郵便局]{ゆうびんきょく} post office · [会社]{かいしゃ} company, office · コンビニ convenience store · レストラン restaurant"],["Family","[兄]{あに} / お[兄]{にい}さん older brother · [姉]{あね} / お[姉]{ねえ}さん older sister · [弟]{おとうと} younger brother · [妹]{いもうと} younger sister · [家族]{かぞく} family"],["At home","[部屋]{へや} room · テレビ TV · パソコン computer · シャワー shower · トイレ toilet · ノート notebook · ペン pen"],["Getting around","[電車]{でんしゃ} train · バス bus · タクシー taxi · [車]{くるま} car · [自転車]{じてんしゃ} bicycle · [地下鉄]{ちかてつ} subway"]]},
      "For family words, the pairs work like 父・お父さん in Lesson 3: 兄 and 姉 for your own older siblings when you talk to others, お兄さん and お姉さん for someone else’s. For someone else’s younger siblings, add さん: [弟]{おとうと}さん, [妹]{いもうと}さん.",
      "**Verbs: learn each one with its particle.** The particle is part of the word, and it often differs from English. In English you “meet a friend” and “ride a train” with no preposition; in Japanese both take に.",
      {table:[["Verb","Learn it as","Meaning"],["[会]{あ}う","[友]{とも}だち**に**[会]{あ}う","meet a friend"],["[乗]{の}る","[電車]{でんしゃ}**に**[乗]{の}る","get on, ride a train"],["[入]{はい}る","[部屋]{へや}**に**[入]{はい}る","go into a room"],["[出]{で}る","[家]{いえ}**を**[出]{で}る","leave the house"],["[待]{ま}つ","[友]{とも}だち**を**[待]{ま}つ","wait for a friend"],["[買]{か}う","パン**を**[買]{か}う","buy bread"],["[飲]{の}む","[水]{みず}**を**[飲]{の}む","drink water"],["[働]{はたら}く","[会社]{かいしゃ}**で**[働]{はたら}く","work at a company"]]},
      "**Adjectives: learn each one with its opposite.** Notice how the English words don’t line up one-to-one.",
      {table:[["Word","Opposite","Note"],["[大]{おお}きい big","[小]{ちい}さい small",""],["[高]{たか}い expensive","[安]{やす}い cheap","for prices"],["[高]{たか}い high, tall","[低]{ひく}い low, short","for height"],["[長]{なが}い long","[短]{みじか}い short","for length"],["[新]{あたら}しい new","[古]{ふる}い old","古い is for things, not people’s age"],["[暑]{あつ}い hot","[寒]{さむ}い cold","weather, air temperature"],["[熱]{あつ}い hot","[冷]{つめ}たい cold","things you touch or drink"],["[多]{おお}い many","[少]{すく}ない few",""]]},
      {warn:"To say “many people”, don’t put 多い straight before the noun: ✗[多]{おお}い[人]{ひと}. Say [人]{ひと}が[多]{おお}いです (there are a lot of people), or use たくさんの[人]{ひと}. 少ない works the same way. When you say what there is a lot of, 多い can describe a noun: [雨]{あめ}の[多]{おお}い[国]{くに} (a country with a lot of rain)."}
    ]},
    {h:"How to learn words that stick", body:[
      "How many words is N5? There is no official list (Lesson 5 explains why), and common lists differ. Most contain several hundred words; the N5 words deck in this course’s Kanji Lab has 630. Don’t worry about the exact number: the words in this unit and in Units 2 and 3 are the heart of it.",
      {list:["**Learn words in a phrase, not alone.** [電車]{でんしゃ}に[乗]{の}る teaches the word, its particle and a picture at once.","**Learn both directions.** Seeing [安]{やす}い and remembering “cheap” is easier than seeing “cheap” and producing [安]{やす}い. Practise both.","**Collect families.** When you learn 電, gather [電気]{でんき}, [電車]{でんしゃ} and [電話]{でんわ}.","**Use pairs and groups**: opposites, family words, the days of the week, [先週]{せんしゅう}・[今週]{こんしゅう}・[来週]{らいしゅう}.","**Meet words again in reading.** Short texts at your level, such as graded readers (Lesson 5), show words in context and fix them in memory.","**Review a little every day.** Forgetting is normal; the Kanji Lab brings each word back just as you start to forget it."]},
      {tip:"Katakana words are some of the easiest N5 vocabulary, because many come from English: テレビ, バス, タクシー. But the meaning sometimes shifts. パソコン is a personal computer, and コンビニ is a convenience store: shortened words that English speakers might not guess."},
      {lab:"kl-n5-vocab", t:"Practise: the N5 words deck (start with 10 new words a day)"}
    ]}
   ],
   try:[
    {id:"e3u4-l4-x1", type:"match", q:"Match each verb to its meaning.", pairs:[
      ["[行]{い}く","go","行く: go. Its on reading コウ appears in 銀行 (bank)."],
      ["[来]{く}る","come","来る: come. Its reading changes: きます, こない."],
      ["[出]{で}る","go out, leave","出る: go out, leave. 出口 is an exit."],
      ["[入]{はい}る","enter","入る: enter. 入口 is an entrance."],
      ["[見]{み}る","see, watch","見る: see, look, watch."],
      ["[聞]{き}く","hear, listen, ask","聞く: hear, listen, and also ask, as in [先生]{せんせい}に[聞]{き}く (ask the teacher)."]
    ]},
    {id:"e3u4-l4-x2", type:"mcq", q:"How is 来ない (does not come) read?", options:[
      {t:"こない", ok:true, why:"Right. 来る is irregular: く in 来る, き in 来ます, こ in 来ない."},
      {t:"きない", why:"き is the reading in 来ます. The ない-form uses こ: こない."},
      {t:"くない", why:"く is only for the dictionary form 来る. The ない-form is こない."},
      {t:"らいない", why:"ライ is the on reading, used in compounds like 来年 (らいねん). With okurigana, use the kun reading."}
    ]},
    {id:"e3u4-l4-x3", type:"sort", q:"Sort these verbs into their groups (Unit 2).", buckets:["Godan (u-verbs)","Ichidan (ru-verbs)","Irregular"], items:[
      {t:"[入]{はい}る enter", b:0, why:"入る is godan even though it ends in -iru: 入ります, 入らない. It is one of the common exceptions."},
      {t:"[出]{で}る go out", b:1, why:"出る is ichidan: drop る and add ます: 出ます."},
      {t:"[見]{み}る see", b:1, why:"見る is ichidan: 見ます, 見ない."},
      {t:"[食]{た}べる eat", b:1, why:"食べる is ichidan: 食べます, 食べない."},
      {t:"[行]{い}く go", b:0, why:"行く is godan: [行]{い}きます, 行かない. Only its て-form and past form (行って, 行った) are irregular."},
      {t:"[話]{はな}す speak", b:0, why:"話す is godan: 話します, 話さない."},
      {t:"[来]{く}る come", b:2, why:"来る is one of the two irregular verbs (with する): 来ます, 来ない (こない)."},
      {t:"[休]{やす}む rest", b:0, why:"休む is godan: [休]{やす}みます, 休まない."}
    ]},
    {id:"e3u4-l4-x4", type:"mcq", q:"「この[山]{やま}は[高]{たか}いです。」 means “This mountain is high.” Which word means the opposite, “low”?", options:[
      {t:"[低]{ひく}い", ok:true, why:"Right. For height, the opposite of [高]{たか}い is 低い."},
      {t:"[安]{やす}い", why:"[安]{やす}い (cheap) is the opposite of [高]{たか}い only for prices. A mountain isn’t cheap."},
      {t:"[小]{ちい}さい", why:"小さい means small in size, the opposite of 大きい. A low mountain is 低い."},
      {t:"[短]{みじか}い", why:"短い (short) is the opposite of 長い (long), for length."}
    ]},
    {id:"e3u4-l4-x5", type:"mcq", q:"Choose the particle: 「[毎朝]{まいあさ}[電車]{でんしゃ}（　）[乗]{の}ります。」 (Every morning I take the train.)", options:[
      {t:"に", ok:true, why:"Right. [乗]{の}る takes に for the vehicle you get on: [電車]{でんしゃ}に乗ります."},
      {t:"を", why:"In English you “take the train” with an object, but [乗]{の}る marks the vehicle with に. [電車]{でんしゃ}を乗ります is a common learner mistake."},
      {t:"で", why:"で marks the means ([電車]{でんしゃ}で[行]{い}きます, I go by train), but with [乗]{の}る the vehicle takes に."},
      {t:"が", why:"が marks a subject. The vehicle you board is marked with に."}
    ]},
    {id:"e3u4-l4-x6", type:"order", q:"Put these prices in order from cheapest to most expensive. (No furigana: read the number kanji.)", items:[
      {t:"九百円", why:"[九百]{きゅうひゃく} = 900 yen, the cheapest."},
      {t:"千二百円", why:"[千二百]{せんにひゃく} = 1,000 + 200 = 1,200 yen."},
      {t:"三千円", why:"[三千]{さんぜん} = 3,000 yen."},
      {t:"一万円", why:"[一万]{いちまん} = 10,000 yen, the most expensive. Remember that 万 is 10,000."}
    ]},
    {id:"e3u4-l4-x7", type:"spot", q:"Tap the words written with the **wrong** okurigana.", ask:"has wrong okurigana", parts:[
      {t:"[見]{み}ます", flag:false, why:"Correct: 見ます. 見 is み, followed by ます."},
      " · ",
      {t:"[高]{たか}かい", flag:true, why:"[高]{たか}い is written 高 + い. The kanji already covers たか, so 高かい adds an extra か."},
      " · ",
      {t:"[行]{い}きます", flag:false, why:"Correct: [行]{い}きます."},
      " · ",
      {t:"[話]{はな}なします", flag:true, why:"話す is 話 + す: 話します. The kanji covers はな, so 話なします repeats な."},
      " · ",
      {t:"[大]{おお}きい", flag:false, why:"Correct: 大きい. 大 covers おお, and きい is the okurigana."},
      " · ",
      {t:"[休]{やす}みます", flag:false, why:"Correct: [休]{やす}みます."},
      " · ",
      {t:"[書]{か}きます", flag:false, why:"Correct: 書きます."}
    ]},
    {id:"e3u4-l4-x8", type:"mcq", q:"Which sentence is natural Japanese for “There are a lot of people at the station”?", options:[
      {t:"[駅]{えき}は[人]{ひと}が[多]{おお}いです。", ok:true, why:"Right. 多い works as a predicate: 人が多い (people are many)."},
      {t:"[駅]{えき}に[多]{おお}い[人]{ひと}がいます。", why:"To mean “many people”, 多い doesn’t go straight before the noun, so 多い人 sounds wrong here. Use 人が多い, or たくさんの人."},
      {t:"[駅]{えき}は[人]{ひと}が[大]{おお}きいです。", why:"大きい means big in size. This says the people are big!"},
      {t:"[駅]{えき}は[人]{ひと}が[高]{たか}いです。", why:"[高]{たか}い means high, tall or expensive, not many."}
    ]}
   ],
   apply:{
    intro:"Build vocabulary from your own day, not from a random list.",
    tasks:[
     {t:"Map the words of your day", how:[
       "List ten things you do on a normal day. For each, write the Japanese verb with its particle and object, for example [電車]{でんしゃ}に[乗]{の}る, [水]{みず}を[飲]{の}む, [友]{とも}だちに[会]{あ}う.",
       "Check each particle in a dictionary example sentence (Jisho.org shows example sentences for many words).",
       "Turn three of them into ます sentences with a time word: [毎朝]{まいあさ}[電車]{でんしゃ}に[乗]{の}ります。"
     ], write:"1 … に [乗]{の}る… 2 … を 飲む… my three sentences…"},
     {t:"Describe your home with opposites", how:[
       "Choose five things at home and describe each with an adjective: [部屋]{へや}は[小]{ちい}さいです。 [時計]{とけい}は[古]{ふる}いです。",
       "For each, write the opposite sentence too.",
       "Check that you used 暑い/寒い for weather and 熱い/冷たい for things you touch."
     ], write:"1 … は … です / opposite… 2 …"},
     {t:"Start the N5 words deck", how:[
       "Open the Kanji Lab and start the N5 words deck, 10 new words a day (the default).",
       "Each time a word comes up, say a short phrase with it, not just the meaning."
     ], write:"Date started… words that keep coming back…"}
    ],
    proof:"Ten verbs from your day with their particles, five pairs of opposite sentences about your home, and the N5 words deck started."},
   read:[
    {book:"taekim", where:"Grammar Guide › Basic Grammar › “Adjectives”, “Verb Basics” and “Transitive and Intransitive Verbs”"},
    {book:"irodori", where:"Starter, Lessons 11 “What kind of manga do you like?”, 13 “Does this bus go to the airport?” and 14 “It’s a big building, isn’t it.”: [漢字]{かんじ}のことば (Kanji Words)", note:"[読]{よ}みます, [聞]{き}きます, [見]{み}ます; [来]{き}ます, [行]{い}きます, [乗]{の}ります; [大]{おお}きい, [小]{ちい}さい, [高]{たか}い, [低]{ひく}い."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e3u4-l5", title:"Reading short N5 texts, the JLPT and your study plan", minutes:55,
   hook:{q:"Does the JLPT publish official lists of the kanji and words you need for each level?", options:["Yes, for every level","Only for N5","No: it has published no official lists since the test was revised in 2010","Only for N1"], answer:2,
     reveal:"**No.** Since the 2010 revision, the JLPT has not published lists of vocabulary, kanji or grammar; it says the goal is communication, not memorising lists. The N5 lists in textbooks, websites and this course are estimates, mostly based on the old test’s lists and on textbooks. That is why lists differ a little, and why reading real texts matters as much as any list."},
   goals:[
     "Use a step-by-step strategy to read a short text: type, question, kanji you know, grammar clues",
     "Read common signs, a text message, a notice and a simple email at N5 level",
     "Describe the JLPT: its five levels, the N5 sections and times, scoring and pass marks, and the 2026 test dates",
     "Plan daily study with the Kanji Lab, free graded readers and official sample questions"
   ],
   learn:[
    {h:"A strategy for short texts", body:[
      {lead:"You can read more than you think. Short real texts are full of kanji you already know, numbers, times and set phrases. A clear strategy helps you use all of it."},
      {fig:'<svg viewBox="0 0 340 384"><text x="170" y="18" text-anchor="middle">Five steps for a short text</text><rect class="d-lup" x="20" y="30" width="300" height="52" rx="8" stroke-width="1.5"/><text x="34" y="52">1 What kind of text is it?</text><text class="s" x="34" y="70">sign, message, notice, email: the layout tells you</text><rect class="d-lup" x="20" y="102" width="300" height="52" rx="8" stroke-width="1.5"/><text x="34" y="124">2 What do I need to find?</text><text class="s" x="34" y="142">read the question first, then scan for it</text><rect class="d-lup" x="20" y="174" width="300" height="52" rx="8" stroke-width="1.5"/><text x="34" y="196">3 Find kanji, numbers and times</text><text class="s" x="34" y="214">days, 時, 分, 円, places, people</text><rect class="d-lup" x="20" y="246" width="300" height="52" rx="8" stroke-width="1.5"/><text x="34" y="268">4 Read the endings</text><text class="s" x="34" y="286">～てください, ～ません, ～ませんか, ～ましょう</text><rect class="d-sage" x="20" y="318" width="300" height="52" rx="8" stroke-width="1.5"/><text x="34" y="340">5 Guess, then check</text><text class="s" x="34" y="358">skip unknown words, use context, re-read</text><path class="d-ink" d="M170 82 V100" stroke-width="2" marker-end="url(#a5)"/><path class="d-ink" d="M170 154 V172" stroke-width="2" marker-end="url(#a5)"/><path class="d-ink" d="M170 226 V244" stroke-width="2" marker-end="url(#a5)"/><path class="d-ink" d="M170 298 V316" stroke-width="2" marker-end="url(#a5)"/><defs><marker id="a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"Five steps from top to bottom: 1 What kind of text is it (sign, message, notice, email; the layout tells you). 2 What do I need to find (read the question first, then scan for it). 3 Find kanji, numbers and times (days, 時, 分, 円, places, people). 4 Read the endings (～てください, ～ません, ～ませんか, ～ましょう). 5 Guess, then check (skip unknown words, use context, re-read).", cap:"Steps 2 and 3 are scanning: looking only for what you need."},
      "Step 2 is the one most learners skip. If you know you need a time, you can [[scanning|scan]] for 時 and 分 and ignore everything else. If you need the main idea, [[skimming|skim]]: read the title and the first and last lines.",
      "Step 4 matters because Japanese puts the verb, and with it the meaning of the whole sentence, at the end. [入]{はい}ります (goes in), [入]{はい}りません (doesn’t go in), [入]{はい}らないでください (please don’t go in) and [入]{はい}りませんか (won’t you come in?) differ only in their last few kana.",
      {tip:"Unknown words are normal, even for advanced learners. Underline them, keep going, and see whether the rest of the text explains them. Look up only the words you still need at the end."}
    ]},
    {h:"Signs", body:[
      "Signs use short, set words, often with kanji above N5. You don’t need to know every kanji: learn these as whole shapes, the way you recognise a logo.",
      {table:[["Sign","Reading","Meaning"],["[入口]{いりぐち} / [出口]{でぐち}","いりぐち / でぐち","entrance / exit"],["[押]{お}す / [引]{ひ}く","おす / ひく","push / pull (on doors)"],["お[手洗]{てあら}い","おてあらい","toilets (with [男]{おとこ} and [女]{おんな} on the doors)"],["[営業中]{えいぎょうちゅう}","えいぎょうちゅう","open (for business)"],["[準備中]{じゅんびちゅう}","じゅんびちゅう","not open yet (preparing)"],["[本日休業]{ほんじつきゅうぎょう}","ほんじつきゅうぎょう","closed today"],["[禁煙]{きんえん}","きんえん","no smoking"],["[立入禁止]{たちいりきんし}","たちいりきんし","no entry"]]},
      "Look at what the N5 kanji tell you even in the harder signs. 中 in [営業中]{えいぎょうちゅう} and [準備中]{じゅんびちゅう} means “in the middle of”; [本日休業]{ほんじつきゅうぎょう} contains [本日]{ほんじつ} (today, formal) and 休 (rest); 入 in [立入禁止]{たちいりきんし} tells you the sign is about going in.",
      {warn:"[準備中]{じゅんびちゅう} on a restaurant door means it is **not** open, even if you can see people inside. It is often shown between lunch and dinner. [営業中]{えいぎょうちゅう} means you can go in."}
    ]},
    {h:"A message from a friend", body:[
      "Ana gets this message from Kenji. Read it once, then answer the questions below.",
      {ex:"アナさん\nこんにちは。[今週]{こんしゅう}の[土曜日]{どようび}、[時間]{じかん}がありますか。[午後]{ごご}[二時]{にじ}に[駅]{えき}の[東口]{ひがしぐち}で[会]{あ}いませんか。いっしょに[映画]{えいが}を[見]{み}ましょう。\nケンジ", label:"Kenji’s message"},
      {list:["**When?** [今週]{こんしゅう}の[土曜日]{どようび}、[午後]{ごご}[二時]{にじ}: this Saturday at 2 p.m.","**Where?** [駅]{えき}の[東口]{ひがしぐち}: at the station’s east exit.","**What?** [映画]{えいが}を[見]{み}ましょう: let’s watch a film.","**What does Kenji want?** The endings tell you: ～ませんか (won’t you…?) is an invitation, and ～ましょう (let’s…) is a suggestion."]},
      "Ana can answer with phrases from Unit 2: 「いいですね。[二時]{にじ}に[東口]{ひがしぐち}に[行]{い}きます。」 (Sounds good. I’ll be at the east exit at two.)"
    ]},
    {h:"A notice", body:[
      "This is a notice on the door of a town library. The weekdays in brackets use the first kanji of each day.",
      {ex:"[図書館]{としょかん}からのお[知]{し}らせ\n[十二月]{じゅうにがつ}[二十九日]{にじゅうくにち}（[火]{か}）から[一月]{いちがつ}[三日]{みっか}（[日]{にち}）まで、[図書館]{としょかん}は[休]{やす}みです。\n[本]{ほん}は[入口]{いりぐち}の[右]{みぎ}のブックポストに[返]{かえ}してください。\n[一月]{いちがつ}[四日]{よっか}（[月]{げつ}）は[午前]{ごぜん}[九時]{くじ}からです。", label:"A notice from the library"},
      {list:["**Title**: お[知]{し}らせ means “notice, announcement”; [図書館]{としょかん}から means “from the library”.","**When is it closed?** From 29 December (Tuesday) to 3 January (Sunday): ～から～まで (from… until…).","**What should you do with books?** ～てください is a request: return them to the book drop (ブックポスト) to the right of the entrance.","**When does it open again?** 4 January (Monday), from 9 a.m."]},
      "Strategy check: to answer “When does it open again?”, you only needed to scan for the last date and 時. You didn’t need to understand ブックポスト to get that answer."
    ]},
    {h:"A simple email", body:[
      "Japanese emails have a fixed shape, even short ones: the subject ([件名]{けんめい}), the person’s name, a greeting that says who you are, the message, a set closing phrase and your name.",
      {ex:"[件名]{けんめい}：[土曜日]{どようび}のクラス\n\nアナさん\n\nこんにちは。〇〇[日本語]{にほんご}[学校]{がっこう}のキムです。\n[今週]{こんしゅう}の[土曜日]{どようび}のクラスは、[午前]{ごぜん}[十時]{じゅうじ}から[十一時半]{じゅういちじはん}までです。[教室]{きょうしつ}は[三階]{さんがい}の305です。\n[教科書]{きょうかしょ}と[辞書]{じしょ}を[持]{も}ってきてください。\n\nよろしくお[願]{ねが}いします。\nキム・ジウ", label:"An email from a language school"},
      {table:[["Part","In the email","What it does"],["Subject","[件名]{けんめい}：[土曜日]{どようび}のクラス","Says what the email is about"],["Name","アナさん","さん for a classmate or colleague; [先生]{せんせい} for a teacher"],["Who I am","〇〇[日本語]{にほんご}[学校]{がっこう}のキムです","Your group + の + your name (〇〇, read まるまる, stands for a name)"],["Message","…から…までです。…てください。","The facts and the request"],["Closing","よろしくお[願]{ねが}いします","A set phrase: thanks in advance, please treat this kindly"]]},
      "Questions to try: How long is the class? (10:00 to 11:30: 90 minutes.) Where is it? (Room 305 on the third floor, [三階]{さんがい}.) What should Ana bring? ([教科書]{きょうかしょ} and [辞書]{じしょ}: her textbook and a dictionary.)",
      {tip:"よろしくお願いします has no exact English equivalent. It closes almost every request, introduction and work email. You will write it many times, so it is worth learning to write 願 now."}
    ]},
    {h:"The JLPT in brief", body:[
      "The [[jlpt|Japanese-Language Proficiency Test]] ([日本語能力試験]{にほんごのうりょくしけん}, JLPT) is the best-known test of Japanese as a foreign language. It is run by the Japan Foundation (outside Japan) and Japan Educational Exchanges and Services (JEES, in Japan). It has five levels, from [[jlpt-n5|N5]] (easiest) to N1 (hardest). The official one-line descriptions:",
      {table:[["Level","Official summary"],["N1","The ability to understand Japanese used in a variety of circumstances"],["N2","The ability to understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree"],["N3","The ability to understand Japanese used in everyday situations to a certain degree"],["N4","The ability to understand basic Japanese"],["N5","The ability to understand some basic Japanese"]]},
      "For reading, the JLPT says an N5 learner “is able to read and understand typical expressions and sentences written in hiragana, katakana, and basic kanji”: exactly what this unit practises. Units 5–8 of this course aim at [[jlpt-n4|N4]] and Units 9–12 at [[jlpt-n3|N3]].",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="18" text-anchor="middle">The N5 test (paper, multiple choice)</text><rect class="d-lup" x="10" y="34" width="80" height="70" rx="6" stroke-width="1.5"/><text x="50" y="56" text-anchor="middle">Vocabulary</text><text class="s" x="50" y="76" text-anchor="middle">kanji, words</text><text x="50" y="96" text-anchor="middle">20 min</text><rect class="d-lup" x="98" y="34" width="150" height="70" rx="6" stroke-width="1.5"/><text x="173" y="56" text-anchor="middle">Grammar · Reading</text><text class="s" x="173" y="76" text-anchor="middle">sentences, short texts</text><text x="173" y="96" text-anchor="middle">40 min</text><rect class="d-sage" x="256" y="34" width="74" height="70" rx="6" stroke-width="1.5"/><text x="293" y="56" text-anchor="middle">Listening</text><text class="s" x="293" y="76" text-anchor="middle">audio</text><text x="293" y="96" text-anchor="middle">30 min</text><text x="170" y="134" text-anchor="middle">Scored in two parts</text><rect class="d-gold" x="10" y="146" width="238" height="56" rx="6" stroke-width="1.5"/><text x="129" y="170" text-anchor="middle">Vocabulary/Grammar · Reading</text><text x="129" y="190" text-anchor="middle">0–120 (need 38+)</text><rect class="d-gold" x="256" y="146" width="74" height="56" rx="6" stroke-width="1.5"/><text x="293" y="170" text-anchor="middle">Listening</text><text x="293" y="190" text-anchor="middle">0–60 (19+)</text><rect class="d-panel" x="10" y="216" width="320" height="58" rx="6" stroke-width="1.5"/><text x="170" y="240" text-anchor="middle">Total 0–180: pass with 80 or more,</text><text x="170" y="260" text-anchor="middle">and the minimum in both parts</text></svg>', alt:"The N5 test has three sections: Vocabulary (kanji and words), 20 minutes; Grammar and Reading, 40 minutes; Listening, 30 minutes. It is scored in two parts: Language Knowledge (Vocabulary/Grammar) and Reading together, 0 to 120, with a minimum of 38; and Listening, 0 to 60, with a minimum of 19. The total is 0 to 180, and you pass with 80 or more and the minimum in both parts.", cap:"Times and pass marks from jlpt.jp (checked November 2026). Times changed in December 2020; check before you book."},
      {list:["**Kanji in the test.** The vocabulary section includes kanji reading (choose the reading of an underlined kanji word) and orthography (choose the right kanji for a word written in hiragana). Both need the readings and words in Lessons 2–4.","**Scores are scaled.** The JLPT says it uses a scaled score system based on item response theory, not simply points per correct answer.","**Sectional pass marks.** You must reach the total pass mark *and* the minimum in each part. A high total with a very low Listening score is a fail.","**N4** has the same structure (25, 55 and 35 minutes) with a total pass mark of 90. **N3** has three scoring parts (0–60 each, 19 needed in each) and a total pass mark of 95."]},
      "**When and where.** The test is held twice a year, in July and December. In 2026 the dates are Sunday 5 July and Sunday 6 December. Some cities outside Japan hold only one of the two. Outside Japan you apply through the local host institution listed on jlpt.jp, and applications close well before the test date. Details such as test times have changed before, so always check [jlpt.jp](https://www.jlpt.jp/e/) for your own test.",
      {warn:"There are no official word or kanji lists. Any “complete N5 list” is an estimate. Use lists as a guide, and spend time reading and listening as well."}
    ]},
    {h:"Your study plan with the Kanji Lab", body:[
      "Kanji and vocabulary are learned by meeting them again and again over weeks. A small daily habit beats a big weekly session. Here is a plan that works for most people:",
      {table:[["When","What","Time"],["Every day","A Kanji Lab session: N5 kanji, then N5 words","10–15 min"],["Every day","Read something short: a sign, a message, a page of a graded reader","5–10 min"],["Twice a week","Write five new kanji by hand in a word, saying it aloud","10 min"],["Before the test","Try the official sample questions on jlpt.jp","1 hour"]]},
      "**How the Kanji Lab works.** Choose a deck (N5 kanji, N5 words, and later N4 and N3). Each day a deck shows you the cards that are due, then a few new cards: you choose 5, 10 or 20 new cards a day for each deck (10 is the default). Every card sits in a box. After each card, say how well you knew it. **Again** puts it back in box 1: you see it once more at the end of today’s session, and again tomorrow. **Good** moves it up one box, and **Easy** skips a box. The boxes come back after 1, 3, 7, 14 and 30 days, so a card you keep getting right waits longer each time: tomorrow, then 3 days, a week, two weeks and a month. This is [[spaced-review|spaced review]]: each card returns just as you start to forget it.",
      {list:["**Be honest with Again.** Pressing Good on a card you half knew only makes it come back too late.","**Keep new cards low.** 10 new cards a day is about 70 a week in each deck. Reviews grow as you add cards, so 20 a day can become hard to keep up.","**Missed a day? Just continue.** Due cards simply wait for you, and each session shows them before any new cards. If there are a lot, do the reviews and stop there for the day; the new cards will still be waiting."]},
      "**Free reading at your level.** A [[graded-reader]] is a short book written for learners, with limited kanji and vocabulary. The non-profit group NPO多言語多読 (Tadoku) offers [free graded readers](https://tadoku.org/japanese/en/free-books-en/) that you can read online or download as PDFs; start at their lowest levels (Level Start and Level 0). The Japan Foundation’s course [*IRODORI: Japanese for Life in Japan*](https://www.irodori.jpf.go.jp/en/index.html) is free to download, with audio, and covers everyday situations from the Starter (A1) level up. From Lesson 3 of Starter, each lesson has a short [漢字]{かんじ}のことば (Kanji Words) section of everyday kanji.",
      {key:"Forgetting is part of learning, not a sign of failure. Come back tomorrow, press Again without guilt, and the kanji will stick."},
      {lab:"kl-n5", t:"Practise: today’s N5 kanji review"},
      {lab:"kl-n5-vocab", t:"Practise: today’s N5 vocabulary review"}
    ]}
   ],
   try:[
    {id:"e3u4-l5-x1", type:"order", q:"Put the reading strategy in order for a question like “What time does the shop open?”", items:[
      {t:"Look at the layout: is it a sign, a notice, a message?", why:"First decide what kind of text it is. The layout often tells you before you read a word."},
      {t:"Note what you need: a time", why:"Knowing the question tells you what to look for."},
      {t:"Scan for 時, 分, 午前 or 午後 and the numbers around them", why:"Scanning finds the answer without reading everything."},
      {t:"Check the ending of that sentence (～からです, ～までです, ～ません)", why:"The ending tells you whether it is an opening time, a closing time or a negative."},
      {t:"Re-read the sentence to confirm your answer", why:"A final check catches mistakes, such as mixing up [午前]{ごぜん} and [午後]{ごご}."}
    ]},
    {id:"e3u4-l5-x2", type:"mcq", q:"At 3 p.m. you find a restaurant door with a sign saying 「[準備中]{じゅんびちゅう}」. What does it mean?", options:[
      {t:"It is not open now; the staff are preparing", ok:true, why:"Right. [準備中]{じゅんびちゅう} means “in preparation”: closed for now, often between lunch and dinner."},
      {t:"It is open: come in", why:"That would be 営業中 (えいぎょうちゅう). [準備中]{じゅんびちゅう} means not open yet."},
      {t:"It is closed all day", why:"Closed for the day is 本日休業 (ほんじつきゅうぎょう). [準備中]{じゅんびちゅう} means closed for now, opening later."},
      {t:"Seats inside are reserved", why:"[準備中]{じゅんびちゅう} is about the restaurant not being open yet, not about reservations."}
    ]},
    {id:"e3u4-l5-x3", type:"mcq", q:"In Kenji’s message, 「[午後]{ごご}[二時]{にじ}に[駅]{えき}の[東口]{ひがしぐち}で[会]{あ}いませんか。」 What is he doing?", options:[
      {t:"Inviting Ana to meet at the station’s east exit at 2 p.m.", ok:true, why:"Right. ～ませんか is an invitation (won’t you…?), [午後二時]{ごごにじ} is 2 p.m. and [東口]{ひがしぐち} is the east exit."},
      {t:"Saying he can’t meet Ana at 2 p.m.", why:"～ませんか looks negative, but with か it is a polite invitation, not a refusal."},
      {t:"Asking Ana to meet at the west exit at 2 a.m.", why:"東 is east, not west, and [午後]{ごご} is p.m. (afternoon)."},
      {t:"Telling Ana the station closes at 2 p.m.", why:"The verb is 会う (meet). The sentence is about meeting, not about the station’s hours."}
    ]},
    {id:"e3u4-l5-x4", type:"mcq", q:"Read the library notice in this lesson again. Bilal wants to return a book on 2 January. What should he do?", options:[
      {t:"Put it in the book drop to the right of the entrance", ok:true, why:"Right. The library is closed from 29 December to 3 January, and the notice asks you to return books to the ブックポスト to the right (右) of the entrance ([入口]{いりぐち})."},
      {t:"Go in and hand it to the staff", why:"The library is closed ([休]{やす}み) from 29 December until 3 January, so nobody will be at the desk."},
      {t:"Wait until 4 January, because returns are not possible", why:"Returns are possible: ～てください asks you to use the book drop."},
      {t:"Put it in the book drop to the left of the exit", why:"Check the kanji: [入口]{いりぐち} is the entrance and 右 is right."}
    ]},
    {id:"e3u4-l5-x5", type:"number", q:"In the email from the language school, the class runs from [午前十時]{ごぜんじゅうじ} to [十一時半]{じゅういちじはん}. How many minutes is it?", answer:90, tol:0, unit:"minutes", why:"10:00 to 11:00 is 60 minutes, and 11:00 to 11:30 is 30 more: 90 minutes.", wrongs:[
      {v:60, tol:0, why:"You may have missed 半 (half past). The class ends at 11:30, not 11:00."},
      {v:1.5, tol:0, why:"That is the length in hours. In minutes it is 1.5 × 60 = 90."},
      {v:130, tol:0, why:"You may have treated the times like decimal numbers (11.30 − 10.00). An hour has 60 minutes, not 100."}
    ], hint2:"半 means half past. Count the minutes from 10:00 to 11:30."},
    {id:"e3u4-l5-x6", type:"sort", q:"It is a weekday afternoon. Can you go in now?", buckets:["Yes, you can go in","No, not now"], items:[
      {t:"[営業中]{えいぎょうちゅう}", b:0, why:"[営業中]{えいぎょうちゅう} means open for business."},
      {t:"[準備中]{じゅんびちゅう}", b:1, why:"[準備中]{じゅんびちゅう} means not open yet; staff are preparing."},
      {t:"[本日休業]{ほんじつきゅうぎょう}", b:1, why:"[本日休業]{ほんじつきゅうぎょう} means closed today."},
      {t:"[営業時間]{えいぎょうじかん} [午前]{ごぜん}[十時]{じゅうじ}～[午後]{ごご}[八時]{はちじ}", b:0, why:"[営業時間]{えいぎょうじかん} means opening hours: 10 a.m. to 8 p.m., so on a weekday afternoon it is open."},
      {t:"[立入禁止]{たちいりきんし}", b:1, why:"[立入禁止]{たちいりきんし} means no entry, at any time."},
      {t:"(土)・(日) [休]{やす}み", b:0, why:"Closed on Saturdays and Sundays only, so on a weekday it is open."}
    ]},
    {id:"e3u4-l5-x7", type:"mcq", q:"Sione takes JLPT N5. His scores: Language Knowledge (Vocabulary/Grammar)・Reading 70/120, Listening 15/60, total 85/180. Does he pass?", options:[
      {t:"No: his Listening score is below the sectional minimum of 19", ok:true, why:"Right. You need 80 in total and at least 38 and 19 in the two parts. 15 in Listening is a fail, even with a total of 85."},
      {t:"Yes: 85 is above the pass mark of 80", why:"The total is enough, but each part also has a minimum. Listening needs 19 or more."},
      {t:"Yes: only the total counts at N5", why:"Every level has sectional pass marks. Failing one part means failing the test."},
      {t:"No: the N5 pass mark is 90", why:"90 is the N4 pass mark. N5 needs 80, but Sione fails because of his Listening score."}
    ]},
    {id:"e3u4-l5-x8", type:"mcq", q:"A website sells a “complete official JLPT N5 kanji list”. What is true?", options:[
      {t:"No official list exists; it is an estimate based on old lists and textbooks", ok:true, why:"Right. The JLPT has published no kanji, vocabulary or grammar lists since the 2010 revision. Lists are useful guides, but not official."},
      {t:"It must be accurate, because the JLPT publishes the lists every year", why:"The JLPT does not publish lists. Its FAQ says a list of vocabulary, kanji and grammar was judged not necessarily appropriate, because the goal is to use Japanese to communicate."},
      {t:"The list is official, but only for tests held in Japan", why:"There are no official lists for any country."},
      {t:"Official lists exist but are secret", why:"The JLPT simply does not use published lists; it tests the ability to communicate."}
    ]}
   ],
   apply:{
    intro:"Bring the reading strategy into your own world, and set up a study routine you can keep.",
    tasks:[
     {t:"Read a real sign or notice", how:[
       "Find a photo of a Japanese sign, a shop’s opening hours or a short notice (a travel site, a map’s street view, or a photo you took).",
       "Use the five steps: type, question, kanji and numbers, endings, check.",
       "Write what it says in English, and list the kanji you recognised."
     ], write:"What it was… what I worked out… kanji I knew… words I looked up…"},
     {t:"Write a short invitation", how:[
       "Write a message to a friend like Kenji’s: day, time, place and activity, with ～ませんか and ～ましょう.",
       "Use kanji you know, with furigana: [土曜日]{どようび}、[午後]{ごご}[三時]{さんじ}に[駅]{えき}の[北口]{きたぐち}で…",
       "Read it aloud. If you like, record yourself privately and listen back."
     ], write:"〇〇さん、こんにちは。…"},
     {t:"Try official JLPT N5 sample questions", how:[
       "Go to jlpt.jp, choose “Let’s Try Sample Questions!”, then N5. One sample question is shown for each type of test item.",
       "Try the vocabulary items (kanji reading and orthography) first.",
       "Note which question types felt easy and which you need to practise."
     ], write:"Easy types… hard types… what I’ll practise…"},
     {t:"Set your daily routine", how:[
       "Choose a time of day for your Kanji Lab session (for example, after breakfast).",
       "Decide on your new cards a day (the Lab offers 5, 10 or 20; 10 is a good start) and one short reading source.",
       "After one week, write how many days you managed and adjust the plan."
     ], write:"My time… my decks… my reading source… after one week…"}
    ],
    proof:"One real sign or notice read and explained, a short invitation in Japanese, notes on the official sample questions, and a written daily routine with your first week’s result."},
   read:[
    {book:"irodori", where:"Starter, Lesson 15 “I need some batteries.”: [漢字]{かんじ}のことば (Kanji Words)", note:"Signs you meet in shops and stations: [入口]{いりぐち}, [出口]{でぐち}, [押]{お}す, [引]{ひ}く."},
    {book:"irodori", where:"Starter, Lesson 12 “Do you want to go for a drink together?”", note:"Inviting someone with ～ませんか, like Kenji’s message in this lesson."}
   ]
  }
  ],
  checkpoint:["e3u4-q02","e3u4-q05","e3u4-q08","e3u4-q11","e3u4-q14","e3u4-q17","e3u4-q20","e3u4-q24","e3u4-q28","e3u4-q32","e3u4-q38","e3u4-q42"],
  codex:[
   {id:"how-kanji-work", title:"How kanji work", aka:["漢字","kanji","Chinese characters"], tags:["japanese","kanji","writing system"],
    summary:"Kanji are characters borrowed from Chinese writing. Each stands for a meaning and has one or more readings, and most are built from smaller, repeating parts.",
    levels:{
     starter:[
      "**Kanji** ([漢字]{かんじ}) are characters that Japan borrowed from Chinese writing many centuries ago. Each one usually stands for a meaning, such as “mountain” (山) or “eat” (食), and has one or more readings.",
      "Japanese sentences mix kanji with hiragana and katakana. Kanji carry the core of words (nouns and the stems of verbs and adjectives), hiragana carry the grammar, and katakana are used mainly for loanwords: [毎朝]{まいあさ}コーヒーを[買]{か}います (I buy coffee every morning).",
      "There are many kanji (2,136 on the official list for everyday use), but beginners need far fewer: common JLPT N5 lists contain about 80. And kanji are not random tangles of lines. Most are built from a few hundred repeating parts, like words built from letters. Once you know 言 (words), you can spot it in 語 (language), 話 (talk) and 読 (read).",
      {key:"A kanji is a meaning with readings, built from parts you will see again and again."}
     ],
     builder:[
      "Four ways of building characters explain most kanji. They come from a traditional Chinese classification into six types ([六書]{りくしょ}), described in a dictionary from about 100 CE.",
      {table:[["Type","How it works","Examples"],["Pictures (象形)","A simplified drawing","山 mountain, 川 river, 木 tree, 日 sun, 月 moon"],["Signs (指事)","A mark pointing to an idea","一 二 三, 上 above, 下 below, 本 root (木 with a mark)"],["Combined meanings (会意)","Two meaningful parts","休 rest (亻 person + 木 tree), 林 grove (two trees)"],["Meaning + sound (形声)","A meaning part and a sound part","時 time (日 + 寺 じ), 聞 hear (耳 + 門 モン)"]]},
      "The last type is by far the largest. Estimates vary with the set of characters counted, but meaning + sound compounds are the majority of common characters and an even larger share of rare ones. The sound part reflects Chinese pronunciation from long ago, so it is a clue to the on reading, not a rule.",
      "Kanji combine into words. A [[jukugo|kanji compound]] such as [電車]{でんしゃ} (electricity + vehicle: train) or [学生]{がくせい} (study + life: student) usually uses on readings. Learning kanji through words like these is more useful than learning them alone, because you learn a reading you will actually say.",
      "The parts of a kanji are its [[kanji-component|components]], and one of them is the [[radical]] that dictionaries use to file it ({{radicals}}). The readings are covered in {{on-and-kun-readings}}."
     ],
     pro:[
      "The six-type classification ([六書]{りくしょ}) was set out by Xu Shen in the *Shuowen Jiezi* (about 100 CE). Modern scholars treat its categories as principles rather than a strict classification, and some characters once explained as “combined meanings” are now thought to be meaning + sound compounds whose sound part was obscured. 明 (bright) is often taught as 日 + 月, but the *Shuowen Jiezi* gives it as 囧 (window) + 月 (moon), and early forms are still debated. Popular mnemonic stories are useful memory aids, but they are not etymology.",
      "Shapes have changed over about 3,000 years of writing, and modern Japan uses simplified shapes for many kanji, adopted after the Second World War. The older forms ([旧字体]{きゅうじたい}) still appear in names and some signs: 國 for 国, 學 for 学, 氣 for 気, 來 for 来, 讀 for 読, 圓 for 円, 萬 for 万. Simplified Chinese, used in mainland China, simplified differently, so Japanese and Chinese often differ: Japanese 車, 東, 話, 電 and 門 are 车, 东, 话, 电 and 门 in simplified Chinese, while 国 and 学 happen to be the same in both.",
      "Numbers for scale: the [常用漢字表]{じょうようかんじひょう} (Cabinet notice of 30 November 2010) lists 2,136 kanji, and Japanese primary schools teach 1,026 of them across six years. All 80 kanji on the N5 list used in this course are taught in the first two years. KANJIDIC2, the free kanji dictionary from the Electronic Dictionary Research and Development Group (EDRDG), records meanings, readings, stroke counts, school grades and radicals for over 10,000 kanji, and it is the main data source for the Kanji Lab.",
      {tip:"For real origins rather than mnemonics, look at a kanji’s glyph-origin notes in a good dictionary (Wiktionary’s Chinese entries give them for most characters)."}
     ]
    },
    related:["radicals","on-and-kun-readings","n5-kanji","japanese-writing-system"],
    sources:[{t:"Chinese character classification (Wikipedia)", url:"https://en.wikipedia.org/wiki/Chinese_character_classification"},{t:"文化庁『ぶんかる』: 常用漢字表は，どのように決められたか (Agency for Cultural Affairs, 2016, on the 2010 list of 2,136 kanji)", url:"https://www.bunka.go.jp/prmagazine/rensai/kotoba/kotoba_010.html"},{t:"EDRDG licence statement (KANJIDIC and JMdict, CC BY-SA 4.0)", url:"https://www.edrdg.org/edrdg/licence.html"}],
    checked:"2026-11"},

   {id:"radicals", title:"Radicals and components (部首)", aka:["部首","bushu","radical","kanji parts"], tags:["japanese","kanji","dictionaries"],
    summary:"Kanji are built from components; one of them, the radical, is the part a dictionary uses to file the kanji, and it often hints at the meaning.",
    levels:{
     starter:[
      "Look closely at kanji and you see the same parts again and again. These parts are called [[kanji-component|components]]. 木 (tree) appears in 本, 林, 校 and 来; 日 (sun) appears in 時, 間 and 曜.",
      "One component of each kanji is its [[radical]] ([部首]{ぶしゅ}). Dictionaries use the radical to sort kanji, like the first letter of a word in an alphabetical dictionary. The radical often hints at the meaning: kanji about speech have 言 (ごんべん) on the left (語, 話, 読), and kanji about people often have 亻 (にんべん) (休, 何).",
      "Learning kanji as combinations of parts you already know makes them far easier to remember. 休 is simply “person + tree”; 間 is “gate + sun”.",
      {key:"Know the parts, and new kanji become familiar pieces in a new arrangement."}
     ],
     builder:[
      "Radicals are named partly by their position. Japanese speakers use these names to describe kanji, and dictionaries group radicals by position too.",
      {table:[["Position","Name","N5 examples"],["Left","へん","亻 にんべん (休, 何); 言 ごんべん (語, 話, 読); 木 きへん (校); 日 ひへん (時)"],["Right","つくり","頁 おおがい ([顔]{かお}, [頭]{あたま})"],["Top","かんむり","雨 あめかんむり (電); 宀 うかんむり ([家]{いえ})"],["Bottom","あし","儿 ひとあし (先)"],["Top and left","たれ","广 まだれ ([店]{みせ})"],["Left and bottom","にょう","辶 しんにょう ([近]{ちか}い, [週]{しゅう})"],["Around","かまえ","囗 くにがまえ (国, 四); 門 もんがまえ (間)"]]},
      "Some components are kanji in their own right (日, 木, 口, 言), and some exist only as parts (亻, 辶, 宀). Japanese speakers often spell out a kanji by its parts, for example 「にんべんに[木]{き}」 (person radical plus tree) for 休, which is handy when you hear a name and need to know how it is written.",
      "Several radicals change shape depending on where they sit. 人 becomes 亻 on the left; 水 becomes 氵 (さんずい), as in [海]{うみ} (sea); 手 becomes 扌 (てへん). Knowing both forms helps you recognise the family.",
      "To look up a kanji you can’t read, use a dictionary’s parts search: on Jisho.org you pick the components you can see, and the list narrows to the kanji that contain them ([[jisho-tool]]). Handwriting input is another option, and works best in the standard [[stroke-order|stroke order]]."
     ],
     pro:[
      "The standard set of 214 radicals comes from the Chinese *Kangxi Dictionary* (1716), and most Japanese kanji dictionaries still use it, sometimes with small changes. KANJIDIC2 records each kanji’s “classical” Kangxi radical number.",
      "The radical is not always the most obvious part, and dictionaries occasionally disagree. Two N5 traps: 聞 (hear) is usually filed under 耳 (ear, radical 128), not under the gate 門 that surrounds it, because 耳 carries the meaning; and 今 (now) is filed under 人 (radical 9). By contrast, 間 is filed under 門 (radical 169). When a lookup fails, try another component or search by reading.",
      "The radical is usually, but not always, the meaning part of a meaning + sound kanji. In 時 the radical 日 is the meaning part and 寺 the [[phonetic-component|sound part]]. Learning the common sound parts helps with on readings later (寺 ジ in 時; 門 モン in 聞 and 問), though many sound parts have drifted.",
      "Paper dictionaries have a radical index ([部首索引]{ぶしゅさくいん}): you find the radical by its stroke count, then the kanji by the number of strokes left. Electronic dictionaries make this much faster, but knowing the system helps you use any dictionary, and the radical names help you talk about kanji with teachers and friends.",
      "Component data with stroke order is freely available from KanjiVG (Creative Commons BY-SA 3.0), which many dictionaries and apps use for their stroke-order diagrams."
     ]
    },
    related:["how-kanji-work","n5-kanji","japanese-reading-tools"],
    sources:[{t:"KanjiVG: kanji stroke order and components", url:"https://kanjivg.tagaini.net/"},{t:"Chinese character classification (Wikipedia)", url:"https://en.wikipedia.org/wiki/Chinese_character_classification"}],
    checked:"2026-11"},

   {id:"on-and-kun-readings", title:"On and kun readings (音読み・訓読み)", aka:["音読み","訓読み","on'yomi","kun'yomi","okurigana","送り仮名","special readings"], tags:["japanese","kanji","readings"],
    summary:"Most kanji have Chinese-based on readings and native Japanese kun readings; the word, the okurigana and a few special readings decide which one you say.",
    levels:{
     starter:[
      "Most kanji have two kinds of reading. The [[on-yomi|on reading]] ([音読]{おんよ}み) comes from how the kanji was pronounced in Chinese when Japan borrowed it. The [[kun-yomi|kun reading]] ([訓読]{くんよ}み) is the native Japanese word with that meaning. 山 is サン in [富士山]{ふじさん} (on) and やま when it means mountain on its own (kun).",
      "Dictionaries write on readings in katakana and kun readings in hiragana, so you can tell them apart at a glance.",
      "Three clues help you choose. Two or more kanji together usually take on readings ([電車]{でんしゃ}). A kanji followed by hiragana, called [[okurigana]], usually takes its kun reading ([食]{た}べる). A kanji alone as a noun is often kun ([水]{みず}). These are tendencies, so learn each word’s reading with the word.",
      {key:"The word decides the reading. Learn readings word by word, not kanji by kanji."}
     ],
     builder:[
      "**Okurigana** ([送]{おく}り[仮名]{がな}) are the kana after a kanji. They carry the changing part of verbs and adjectives: [食]{た}べる, [食]{た}べます, [食]{た}べない; [高]{たか}い, [高]{たか}くない. They also separate verbs that share a kanji: [分]{わ}かる (understand) and [分]{わ}ける (divide).",
      "**Shared on readings.** Many kanji share the same on reading: 校, 高, 行 and 後 can all be コウ. That is one reason Japanese keeps kanji: they separate words that sound alike. It also means you should learn compounds as whole words, with their meaning, rather than guessing from sound.",
      "**Mixed and kun compounds.** Some compounds use kun readings ([出口]{でぐち}, [名前]{なまえ}) and some mix on and kun ([毎朝]{まいあさ}: マイ + あさ).",
      "**Special readings.** A few words are read as a whole, and the reading can’t be built from the kanji: [[jukujikun|special readings]] such as 今日 (きょう), 今年 (ことし), 大人 (おとな), 一人 (ひとり), 二人 (ふたり), 時計 (とけい), 上手 (じょうず), 下手 (へた), 土産 (みやげ), 友達 (ともだち) and 八百屋 (やおや). The official [常用漢字表]{じょうようかんじひょう} lists words like these in an appendix ([付表]{ふひょう}).",
      "**Sound changes.** When kanji join, sounds often change: voicing, called [[rendaku]] (くち → ぐち in [出口]{でぐち}); a small っ (がく + こう → [学校]{がっこう}; いち + ほん → [一本]{いっぽん}); and h-sounds becoming b or p after some numbers ([三百]{さんびゃく}, [六百]{ろっぴゃく}). Counters show many of these ({{counters}})."
     ],
     pro:[
      "Kanji often have several on readings because Japan borrowed Chinese pronunciations in different periods. **Go-on** ([呉音]{ごおん}) readings came earliest (5th–6th centuries) and survive in Buddhist and some everyday words; **kan-on** ([漢音]{かんおん}), from Tang-dynasty Chinese, are the most common; **tō-on** ([唐音]{とうおん}) came later and are rare. 行 shows all three: ギョウ (go-on, [行事]{ぎょうじ}, event), コウ (kan-on, [銀行]{ぎんこう}) and アン (tō-on, [行灯]{あんどん}, a paper lantern).",
      "Mixed compounds have names in Japanese: on + kun is 重箱読み (じゅうばこよみ), as in [毎朝]{まいあさ} or [台所]{だいどころ} (kitchen); kun + on is 湯桶読み (ゆとうよみ), as in [場所]{ばしょ} (place) or [夕刊]{ゆうかん} (evening paper).",
      "A few kanji were created in Japan ([国字]{こくじ}); most of them have only kun readings, such as 畑 (はたけ, field). Others, such as 校 and 電, have only on readings.",
      "Rendaku has many exceptions and no rule that predicts it perfectly, so learn sound-changed words as words. Dictionaries such as JMdict list each word’s readings; when a word has two accepted readings ([毎年]{まいとし}: まいとし or まいねん; 十分 meaning ten minutes: じゅっぷん or じっぷん), both are correct.",
      {warn:"[[furigana|Furigana]] in learner materials show the reading of that word in that place. They are not the kanji’s “real” reading; the same kanji may be read differently in the next word."}
     ]
    },
    related:["how-kanji-work","n5-kanji","counters","time-and-dates"],
    sources:[{t:"On'yomi (Wikipedia): go-on, kan-on and tō-on readings", url:"https://en.wikipedia.org/wiki/On%27yomi"},{t:"文化庁『ぶんかる』: 常用漢字表は，どのように決められたか (Agency for Cultural Affairs, on the 2010 常用漢字表)", url:"https://www.bunka.go.jp/prmagazine/rensai/kotoba/kotoba_010.html"},{t:"jmdict-simplified: JMdict and KANJIDIC2 in JSON (EDRDG data)", url:"https://github.com/scriptin/jmdict-simplified"}],
    checked:"2026-11"},

   {id:"n5-kanji", title:"The N5 kanji", aka:["JLPT N5 kanji","N5 kanji list","80 kanji"], tags:["japanese","kanji","jlpt","n5"],
    summary:"The 80 kanji on common JLPT N5 lists, grouped by theme: numbers, time, people, places and directions, nature, verbs and descriptions.",
    levels:{
     starter:[
      "Common JLPT N5 lists contain about 80 kanji. The list used in this course and its Kanji Lab has exactly 80, all of them taught in the first two years of Japanese primary school. You will see them everywhere: on station signs, calendars, menus and packaging.",
      "They fall into natural groups, which is the easiest way to learn them: numbers and money (一 to 十, 百, 千, 万, 円), time (年, 月, 日, 時, 分 and more), people (人, 男, 女, 子, 父, 母, 友), school and language (学, 校, 生, 名, 国, 語), positions and directions (上, 下, 中, 外, 右, 左, 東, 西, 南, 北), nature and the days of the week (山, 川, 天, 気, 雨, 水, 火, 木, 金, 土), verbs (行, 来, 出, 入, 見, 聞, 読, 書, 話, 食, 休) and descriptions and things (大, 小, 高, 長, 白, 車, 電, 本).",
      "The JLPT itself publishes no official list, so other lists differ slightly ({{jlpt-overview}}).",
      {key:"Learn the N5 kanji in themed groups and through words, and review them daily."}
     ],
     builder:[
      {table:[["Group","Kanji and core meanings"],["Numbers, money","一 one · 二 two · 三 three · 四 four · 五 five · 六 six · 七 seven · 八 eight · 九 nine · 十 ten · 百 hundred · 千 thousand · 万 ten thousand · 円 yen, circle"],["Time","年 year · 月 moon, month · 日 sun, day · 時 time, hour · 分 minute, part · 半 half · 午 noon · 前 before · 後 after · 今 now · 毎 every · 何 what · 間 interval · 先 ahead, previous"],["People","人 person · 男 man · 女 woman · 子 child · 父 father · 母 mother · 友 friend"],["School, language","生 life, birth · 学 study · 校 school · 名 name · 国 country · 語 language"],["Positions, directions","上 above · 下 below · 中 inside · 外 outside · 右 right · 左 left · 東 east · 西 west · 南 south · 北 north"],["Nature, week","山 mountain · 川 river · 天 sky · 気 spirit, air · 雨 rain · 水 water · 火 fire · 木 tree · 金 gold, money · 土 soil"],["Verbs","行 go · 来 come · 出 go out · 入 enter · 見 see · 聞 hear, ask · 読 read · 書 write · 話 talk · 食 eat · 休 rest"],["Descriptions, things","大 big · 小 small · 高 high, expensive · 長 long, chief · 白 white · 車 vehicle · 電 electricity · 本 book, origin"]]},
      "Each kanji’s main readings and two or three everyday words are in Lessons 2–4 of Japanese Foundations Unit 4. Special readings to know at N5 include 一人 (ひとり), 二人 (ふたり), 大人 (おとな), 今日 (きょう), 今年 (ことし), 時計 (とけい), 上手 (じょうず), 下手 (へた) and お土産 (おみやげ)."
     ],
     pro:[
      "Stroke counts in the N5 set run from 1 (一) to 14 (聞, 語 and 読). Many N5 kanji are themselves radicals or common components (人, 日, 月, 木, 水, 火, 金, 土, 山, 川, 女, 子, 小, 大, 雨, 門 in 間 and 聞), which makes them the foundation for later kanji.",
      "Look-alikes worth practising side by side:",
      {table:[["Pair","How to tell them apart"],["人 / 入 / 八","人 (person): the right stroke starts on the left one. 入 (enter): the left stroke starts on the right one. 八 (eight): the strokes don’t touch."],["右 / 左","Same shape on top; 右 has 口 below, 左 has 工. Different first strokes."],["日 / 白 / 百","白 adds a short stroke on top of 日; 百 adds 一 on top of 白."],["大 / 天","天 adds 一 on top of 大."],["休 / 体","休 is 亻 + 木; 体 (body, N4) is 亻 + 本."],["間 / 聞","間 has 日 inside the gate; 聞 has 耳 (ear)."],["午 / 牛","午 (noon) has no stroke poking through the top; 牛 (cow) does."]]},
      "Lists differ: the JLPT has published no official kanji list since 2010, and the N5 lists in circulation are mostly based on the pre-2010 test’s lists. This course uses an 80-kanji list, cross-checked against KANJIDIC2 for meanings, readings and stroke counts."
     ]
    },
    related:["how-kanji-work","on-and-kun-readings","n5-vocabulary","jlpt-overview"],
    sources:[{t:"EDRDG licence statement (KANJIDIC2 data used under CC BY-SA 4.0)", url:"https://www.edrdg.org/edrdg/licence.html"},{t:"JLPT FAQ (no official kanji or vocabulary lists)", url:"https://www.jlpt.jp/e/faq/index.html"},{t:"KanjiVG (stroke order data)", url:"https://kanjivg.tagaini.net/"}],
    checked:"2026-11"},

   {id:"n5-vocabulary", title:"N5 vocabulary", aka:["N5 words","JLPT N5 vocabulary","core vocabulary"], tags:["japanese","vocabulary","jlpt","n5"],
    summary:"The everyday core of Japanese: several hundred words for food, places, family, daily actions, time and common descriptions, best learned in groups, with particles and opposites.",
    levels:{
     starter:[
      "N5 vocabulary is the everyday core of Japanese: words for food and drink, places in town, family, daily actions, time and simple descriptions. Common lists contain several hundred words; the N5 words deck in this course’s Kanji Lab has 630.",
      "Learn words in groups you can picture (a meal, a station, your family) rather than as a random list. Learn verbs with the particle they need ([電車]{でんしゃ}に[乗]{の}る, ride a train) and adjectives with their opposites ([高]{たか}い / [安]{やす}い, expensive / cheap).",
      "Many N5 words are katakana loanwords from English, such as テレビ, バス and コーヒー, which makes them easier, though some are shortened or shifted in meaning (パソコン, a personal computer; コンビニ, a convenience store).",
      {key:"Words in groups, verbs with particles, adjectives with opposites, and a little review every day."}
     ],
     builder:[
      {table:[["Group","Examples"],["Food and drink","ご[飯]{はん}, パン, [肉]{にく}, [魚]{さかな}, [野菜]{やさい}, [卵]{たまご}, お[茶]{ちゃ}, [牛乳]{ぎゅうにゅう}"],["Places","[駅]{えき}, [店]{みせ}, [銀行]{ぎんこう}, [病院]{びょういん}, [図書館]{としょかん}, [郵便局]{ゆうびんきょく}, [会社]{かいしゃ}"],["Family","[父]{ちち}・お[父]{とう}さん, [母]{はは}・お[母]{かあ}さん, [兄]{あに}・お[兄]{にい}さん, [姉]{あね}・お[姉]{ねえ}さん, [弟]{おとうと}, [妹]{いもうと}"],["Time","[先週]{せんしゅう}・[今週]{こんしゅう}・[来週]{らいしゅう}, [毎日]{まいにち}, [午前]{ごぜん}・[午後]{ごご}"],["Verbs with particles","[友]{とも}だちに[会]{あ}う, [電車]{でんしゃ}に[乗]{の}る, [家]{いえ}を[出]{で}る, [友]{とも}だちを[待]{ま}つ"],["Adjective pairs","[大]{おお}きい・[小]{ちい}さい, [高]{たか}い・[安]{やす}い / [低]{ひく}い, [暑]{あつ}い・[寒]{さむ}い, [熱]{あつ}い・[冷]{つめ}たい"]]},
      "Watch the places where English and Japanese don’t line up. [高]{たか}い has two opposites ([安]{やす}い for price, 低い for height). Hot weather is 暑い, but a hot drink is 熱い. 古い (old) is for things, not people. And family words change with whose family it is: 父 for your own father when talking to others, お父さん for someone else’s ([[uchi-soto]]).",
      "**Set phrases** are vocabulary too: greetings and everyday expressions such as おはようございます, いただきます, すみません and よろしくお[願]{ねが}いします. Learn them as whole units, with the situation in which each one is used.",
      "**Katakana words** are often shortened: パソコン (personal computer), コンビニ (convenience store), エアコン (air conditioner). Pronounce them the Japanese way, giving each beat ([[mora]]) its full length, and you will be understood far better than with the English pronunciation.",
      "Learn grammar words such as particles, ～ます forms and adjective forms in Units 2 and 3 ({{masu-verbs}}, {{i-and-na-adjectives}}); this entry is about content words."
     ],
     pro:[
      "Japanese vocabulary has three main layers: native words ([和語]{わご}, [[wago]], such as [食]{た}べる), Sino-Japanese words built from on readings ([漢語]{かんご}, [[kango]], such as [食堂]{しょくどう}) and loanwords ([外来語]{がいらいご}, [[gairaigo]], such as レストラン). N5 has all three; the [漢語]{かんご} share grows at higher levels ({{kango-and-wago}}).",
      "There is no official N5 word list: the JLPT stopped publishing lists with the 2010 revision. Lists in circulation are estimates based on the old test and on textbooks, so a word may be N5 in one list and N4 in another. That matters little: if a word is everyday and you need it, learn it.",
      "Research on vocabulary learning consistently supports spaced retrieval (testing yourself at growing intervals) over massed study, and learning words in context ([[spaced-review]]). In practice: a small daily review, words met again in reading, and a few words used in your own sentences.",
      "For checking a word, JMdict (free, from the EDRDG) is the dictionary behind Jisho.org and many apps. Check the reading, whether the word is marked common, and the example sentences, which show the particles it takes."
     ]
    },
    related:["n5-kanji","reading-n5-texts","masu-verbs","i-and-na-adjectives","kango-and-wago"],
    sources:[{t:"JLPT FAQ (lists of vocabulary, kanji and grammar)", url:"https://www.jlpt.jp/e/faq/index.html"},{t:"jmdict-simplified: JMdict data in JSON (EDRDG, CC BY-SA 4.0)", url:"https://github.com/scriptin/jmdict-simplified"}],
    checked:"2026-11"},

   {id:"reading-n5-texts", title:"Reading short texts at N5", aka:["N5 reading","reading signs","reading Japanese messages"], tags:["japanese","reading","n5"],
    summary:"A five-step strategy for signs, messages, notices and simple emails: identify the text, know what you need, scan for kanji and numbers, read the endings, then check.",
    levels:{
     starter:[
      "Real Japanese texts at N5 level are short and practical: signs, text messages, notices and simple emails. You can read more of them than you might think, because they are full of kanji you know, numbers, times and set phrases.",
      "Use five steps: (1) decide what kind of text it is; (2) know what you need to find; (3) look for kanji, numbers and times; (4) read the sentence endings, because Japanese puts the verb last; (5) guess unknown words from context and check.",
      "Signs are worth learning as whole shapes: [入口]{いりぐち} (entrance), [出口]{でぐち} (exit), [営業中]{えいぎょうちゅう} (open), [準備中]{じゅんびちゅう} (not open yet), [本日休業]{ほんじつきゅうぎょう} (closed today), [禁煙]{きんえん} (no smoking).",
      {key:"Know what you are looking for, and let the kanji and the endings guide you."}
     ],
     builder:[
      "**Endings carry the message.** ～てください is a request; ～ないでください asks you not to do something; ～ませんか is an invitation; ～ましょう is a suggestion; ～ません is a negative. ～から～まで gives a range (from… until…).",
      "**Notices** often show the weekday as one kanji in brackets: (月) Monday, (火), (水), (木), (金), (土), (日) Sunday. 「(土)・(日) [休]{やす}み」 means closed at weekends.",
      "**Emails** follow a shape, even short ones: subject ([件名]{けんめい}), the reader’s name with さん or [先生]{せんせい}, a greeting with who you are (〇〇[日本語]{にほんご}[学校]{がっこう}のキムです), the message, the closing よろしくお[願]{ねが}いします and your name.",
      "**Menus and price lists** are an information-retrieval task: scan for the item and the 円. Prices are usually in Arabic numerals (ラーメン 800円), but some traditional menus use kanji numbers ([八百円]{はっぴゃくえん}).",
      "Use [[scanning]] for a specific fact (a time, a price, a place) and [[skimming]] for the main idea (title, first and last lines). Unknown words are normal: mark them and keep going."
     ],
     pro:[
      "The JLPT describes N5 reading as being able to “read and understand typical expressions and sentences written in hiragana, katakana, and basic kanji”. N5 reading items are short passages, a slightly longer passage, and an information-retrieval task (finding facts in a notice or timetable).",
      "For practice beyond textbooks, use [[graded-reader|graded readers]]: books written for learners with controlled vocabulary and kanji. The non-profit NPO多言語多読 (Tadoku) offers free graded readers at tadoku.org, readable online or as PDFs. The Japan Foundation’s free *IRODORI* course has texts and audio for everyday situations from A1 (Starter).",
      "Some texts are written vertically ([縦書]{たてが}き): read each column from top to bottom, and the columns from right to left. Books, newspapers and some signs use vertical writing; most websites, messages and textbooks for learners are horizontal ([横書]{よこが}き), read left to right like English.",
      "Reading a lot of easy text ([多読]{たどく}, extensive reading) is widely recommended for building reading speed and vocabulary, alongside slower, careful study. A good rule is to choose texts where you understand most words without a dictionary, and to stop and choose an easier text if you need to look up several words on every line."
     ]
    },
    related:["n5-vocabulary","jlpt-overview","japanese-reading-tools"],
    sources:[{t:"JLPT: N1–N5 level summary", url:"https://www.jlpt.jp/e/about/levelsummary.html"},{t:"NPO多言語多読 (Tadoku): free Japanese graded readers", url:"https://tadoku.org/japanese/en/free-books-en/"},{t:"IRODORI: Japanese for Life in Japan (Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/index.html"},{t:"Japan Foundation 日本語教育ニュース (2021): IRODORI is free to use", url:"https://www.jpf.go.jp/j/project/japanese/teach/tsushin/news/202104.html"}],
    checked:"2026-11"},

   {id:"jlpt-overview", title:"The JLPT (Japanese-Language Proficiency Test)", aka:["JLPT","日本語能力試験","Japanese-Language Proficiency Test","N5","N4","N3"], tags:["japanese","jlpt","tests"],
    summary:"A five-level Japanese test (N5 easiest to N1 hardest) held twice a year; N5 has three sections, two scoring parts and a pass mark of 80 out of 180.",
    levels:{
     starter:[
      "The [[jlpt|JLPT]] ([日本語能力試験]{にほんごのうりょくしけん}) is a Japanese test for people whose first language is not Japanese. It has five levels: [[jlpt-n5|N5]] is the easiest and N1 the hardest. The official summary for N5 is “the ability to understand some basic Japanese”.",
      "It is a paper test with multiple-choice answers. There is no speaking or writing section. It is held twice a year, in July and December; in 2026 the dates are Sunday 5 July and Sunday 6 December. Some cities outside Japan hold only one of them.",
      "The JLPT publishes no official lists of words or kanji, so every N5 list is an estimate. The official sample questions on jlpt.jp are free and show what each kind of question looks like.",
      {key:"Five levels, two dates a year, no official lists: check jlpt.jp for your own test."}
     ],
     builder:[
      {table:[["Level","Sections and times","Scoring"],["N5","Vocabulary 20 min · Grammar and Reading 40 min · Listening 30 min","Vocabulary/Grammar and Reading 0–120 (min. 38) · Listening 0–60 (min. 19) · pass 80/180"],["N4","Vocabulary 25 min · Grammar and Reading 55 min · Listening 35 min","Same parts and minimums as N5 · pass 90/180"],["N3","Vocabulary 30 min · Grammar and Reading 70 min · Listening 40 min","Vocabulary/Grammar 0–60 · Reading 0–60 · Listening 0–60 (min. 19 each) · pass 95/180"]]},
      "You pass only if you reach the total pass mark **and** the minimum in every scoring part. The N4 and N5 times were shortened from the December 2020 test.",
      "The N5 vocabulary section includes kanji reading (choose the reading of an underlined kanji word) and orthography (choose the kanji for a word in hiragana). Grammar items include choosing a grammar form and putting words in order; reading items include short passages and finding information in a notice. Listening includes understanding a task, catching key points, choosing what to say and quick responses."
     ],
     pro:[
      "The current test dates from the 2010 revision. The JLPT says it uses a scaled score system based on item response theory, so your score is not a simple total of points for correct answers.",
      "The test is run by the Japan Foundation (outside Japan, with local host institutions) and Japan Educational Exchanges and Services (JEES, in Japan). Outside Japan, you apply through the local host institution for your city, listed on jlpt.jp, and applications close well before the test date.",
      "Each level has a can-do self-evaluation list and an official summary of linguistic competence on jlpt.jp; for N4 the summary is “the ability to understand basic Japanese”, and for N3 “the ability to understand Japanese used in everyday situations to a certain degree”. Since the December 2025 test, the score reports of examinees who pass also show a CEFR level as reference information (a pass at N5 is shown as A1, at N4 as A2); it covers only the reading and listening skills the test measures.",
      "Every scoring part is required: missing one test section means failing, and the Score Report then shows no scores for any section, even those you took. Everyone who sits the test receives a Score Report, and those who pass also receive a Certificate of Proficiency.",
      "Changes are possible: test times have changed before (N4 and N5 from the December 2020 test, N1 Listening from December 2022). Always check the official site, not a blog, before you plan."
     ]
    },
    related:["n5-kanji","n5-vocabulary","reading-n5-texts"],
    sources:[{t:"JLPT: Test Sections and Test Times", url:"https://www.jlpt.jp/e/guideline/testsections.html"},{t:"JLPT: Scoring Sections, Pass or Fail, Score Report", url:"https://www.jlpt.jp/e/guideline/results.html"},{t:"JLPT: FAQ", url:"https://www.jlpt.jp/e/faq/index.html"},{t:"Japan Foundation: CEFR level to be added for reference to JLPT score reports (2026)", url:"https://www.jpf.go.jp/e/project/japanese/teach/tsushin/news/202601.html"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"radical", term:"Radical (部首, bushu)", def:"The component a dictionary uses to file a kanji, such as 言 in 語 or 亻 in 休. It often hints at the meaning. Traditional dictionaries use 214 radicals.", codex:"radicals"},
   {id:"kanji-component", term:"Kanji component", def:"A recurring part that kanji are built from, such as 日, 木, 口 or 言. One component of each kanji is its radical.", codex:"radicals"},
   {id:"stroke-order", term:"Stroke order (筆順, hitsujun)", def:"The standard order in which a kanji’s strokes are written, for example the horizontal before the vertical in 十. It keeps kanji balanced and stroke counts reliable.", codex:"how-kanji-work"},
   {id:"pictograph", term:"Pictograph (象形文字)", def:"A character that began as a simplified drawing of a thing, such as 山 (mountain) or 木 (tree). Only a small share of kanji are pictographs.", codex:"how-kanji-work"},
   {id:"phonetic-component", term:"Phonetic (sound) component", def:"The part of a meaning + sound kanji that hints at its on reading, such as 寺 (じ) in 時 (じ). It is a clue, not a rule.", codex:"radicals"},
   {id:"on-yomi", term:"On reading (音読み, on’yomi)", def:"A kanji reading based on the Chinese pronunciation borrowed with the kanji, such as サン for 山. Written in katakana in dictionaries; common in compounds.", codex:"on-and-kun-readings"},
   {id:"kun-yomi", term:"Kun reading (訓読み, kun’yomi)", def:"A kanji reading that is the native Japanese word for its meaning, such as やま for 山. Written in hiragana in dictionaries; common with okurigana and for kanji alone.", codex:"on-and-kun-readings"},
   {id:"okurigana", term:"Okurigana (送り仮名)", def:"The hiragana written after a kanji to complete a word, such as べる in 食べる. They carry the changing ending of verbs and adjectives.", codex:"on-and-kun-readings"},
   {id:"jukugo", term:"Jukugo (熟語)", def:"The Japanese name for a [[kanji-compound|kanji compound]]: a word written with two or more kanji, such as [電車]{でんしゃ} (train) or [学生]{がくせい} (student). Most are read with on readings.", codex:"how-kanji-work"},
   {id:"jukujikun", term:"Special reading (熟字訓, jukujikun)", def:"A reading given to a whole word that can’t be built from the readings of its kanji, such as きょう for 今日 or おとな for [大人]{おとな}.", codex:"on-and-kun-readings"},
   {id:"rendaku", term:"Rendaku (連濁)", def:"Voicing of the first sound of the second part of a compound, such as くち becoming ぐち in 出口 (でぐち). Common but not predictable, so learn such words as words.", codex:"on-and-kun-readings"},
   {id:"jlpt", term:"JLPT (日本語能力試験)", def:"The Japanese-Language Proficiency Test: a five-level multiple-choice test of Japanese for non-native speakers, held twice a year, in July and December.", codex:"jlpt-overview"},
   {id:"jlpt-n5", term:"JLPT N5", def:"The easiest JLPT level: “the ability to understand some basic Japanese”. Common lists put about 80 kanji and several hundred words at this level.", codex:"jlpt-overview"},
   {id:"jlpt-n4", term:"JLPT N4", def:"The second level of the JLPT: “the ability to understand basic Japanese”. Units 5–8 of Japanese Foundations aim at N4.", codex:"jlpt-overview"},
   {id:"jlpt-n3", term:"JLPT N3", def:"The middle JLPT level: “the ability to understand Japanese used in everyday situations to a certain degree”. A bridge between basic and advanced levels.", codex:"jlpt-overview"},
   {id:"graded-reader", term:"Graded reader", def:"A short book written for learners at a set level, with controlled vocabulary and kanji, so you can read a lot without a dictionary.", codex:"reading-n5-texts"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e3u4-q01", lesson:"e3u4-l1", level:1, q:"In the sentence [毎朝]{まいあさ}コーヒーを[買]{か}います, why is います written in hiragana?", options:[
     {t:"It is the grammar ending; the kanji 買 carries the meaning", ok:true, why:"Right. Hiragana carry particles and endings, which change (買いました, 買いません) while the kanji stays."},
     {t:"Because います has no kanji at all", why:"The point is not whether a kanji exists; endings that conjugate are written in hiragana as okurigana."},
     {t:"Because it is a loanword", why:"Loanwords are written in katakana, like コーヒー. います is Japanese grammar."},
     {t:"Hiragana is used for the polite style only", why:"Hiragana is used for grammar in every style, polite or plain."}
   ]},
   {id:"e3u4-q02", lesson:"e3u4-l1", level:1, q:"Which is the most common way kanji were built?", options:[
     {t:"A meaning part combined with a sound part", ok:true, why:"Right. Meaning + sound compounds such as 時 (日 + 寺) are the largest group by far."},
     {t:"Pictures of things", why:"Pictures such as 山 and 木 are famous, but they are a small minority."},
     {t:"Signs that point to an idea", why:"Signs such as 上 and 下 are a small group."},
     {t:"Two meanings combined", why:"Combined-meaning kanji such as 休 exist, but meaning + sound kanji are far more numerous."}
   ]},
   {id:"e3u4-q03", lesson:"e3u4-l1", level:2, q:"語 (language), 話 (talk) and 読 (read) share the part 言 on the left. What does that tell you?", options:[
     {t:"They share the radical ごんべん, which hints at words and speech", ok:true, why:"Right. 言 on the left is ごんべん, the speech radical, and all three are about language."},
     {t:"They are all read ごん", why:"The radical hints at meaning, not reading. The three are read ご, わ and どく (or はな, よ in verbs)."},
     {t:"They are all verbs", why:"語 is not a verb (it means language or word). The shared part is about meaning, not word type."},
     {t:"They were all pictures of mouths", why:"They are combinations of parts, not single pictures."}
   ]},
   {id:"e3u4-q04", lesson:"e3u4-l1", level:2, q:"Hana can’t find 聞 under 門 (gate) in a paper kanji dictionary. What should she try?", options:[
     {t:"Look under 耳 (ear), the part that carries the meaning", ok:true, why:"Right. Most dictionaries file 聞 under 耳. If one part fails, try another, or search by reading."},
     {t:"Look under 日 (sun)", why:"聞 has no 日. Hana may be thinking of 間, which is 門 + 日."},
     {t:"Give up: 聞 is not in kanji dictionaries", why:"聞 is a common N5 kanji, in every dictionary. It is just filed under a less obvious part."},
     {t:"Look under 口 (mouth)", why:"聞 has no 口; 問 (question) does, and that is a different kanji."}
   ]},
   {id:"e3u4-q05", lesson:"e3u4-l1", level:1, q:"Which stroke of 十 is written first?", options:[
     {t:"The horizontal", ok:true, why:"Right. When a horizontal and a vertical cross, the horizontal usually comes first."},
     {t:"The vertical", why:"The vertical comes second in 十. A vertical that cuts through everything goes last (as in 中)."},
     {t:"Either one; there is no standard", why:"Japanese schools teach a standard order, and for 十 it is horizontal first."},
     {t:"The bottom half of the vertical", why:"A stroke is written in one movement; the vertical is a single stroke, written second."}
   ]},
   {id:"e3u4-q06", lesson:"e3u4-l1", level:1, q:"How many strokes does 口 (mouth) have?", options:[
     {t:"3", ok:true, why:"Right. Left side, then top and right side in one stroke, then the bottom."},
     {t:"4", why:"The top and right side are a single stroke that turns the corner, so 口 has 3."},
     {t:"2", why:"The bottom is a separate stroke, closing the box last: 3 in all."},
     {t:"1", why:"A box can’t be written in one stroke in standard Japanese order. It has 3."}
   ]},
   {id:"e3u4-q07", lesson:"e3u4-l1", level:3, q:"A memory app says 明 (bright) is “sun 日 + moon 月, the two brightest things in the sky”. What is the best way to treat this?", options:[
     {t:"As a useful memory aid that may not be the real history", ok:true, why:"Right. An ancient Chinese dictionary explains 明 as window + moon, and scholars still discuss its origin. Stories help memory, but they are not etymology."},
     {t:"As the proven origin of 明", why:"A memory story is not proof. For 明, an ancient dictionary gives a different explanation (window + moon), and the origin is still discussed."},
     {t:"As something to avoid, because stories make kanji harder", why:"Stories are a fine memory tool. Just don’t treat them as history."},
     {t:"As proof that all kanji are pictures", why:"Most kanji are meaning + sound compounds, not pictures."}
   ]},
   {id:"e3u4-q08", lesson:"e3u4-l1", level:2, q:"右 (right) and 左 (left) look almost the same. Which statement about writing them is correct?", options:[
     {t:"右 starts with the slanting ノ; 左 starts with the horizontal 一", ok:true, why:"Right. This is the famous stroke-order pair, worth practising side by side."},
     {t:"Both start with 一", why:"Only 左 starts with 一. 右 starts with ノ."},
     {t:"Both start with ノ", why:"Only 右 starts with ノ. 左 starts with 一."},
     {t:"Both start with the box or the 工 at the bottom", why:"Both start with the top strokes; the parts below come after."}
   ]},
   {id:"e3u4-q09", lesson:"e3u4-l1", level:3, q:"Dmitri wants to learn the 80 N5 kanji. Which plan fits what research and this lesson suggest?", options:[
     {t:"About 10 new kanji a day in words, with a short daily review", ok:true, why:"Right. Small daily sessions with spaced review, learning kanji through words, beat cramming."},
     {t:"All 80 in one long weekend, then no review", why:"Cramming without review leads to fast forgetting. Spaced review over weeks works better."},
     {t:"Every reading of each kanji first, then words later", why:"Learn the readings that come in words you need. Learning every reading at once is slow and confusing."},
     {t:"Only reading them, never writing any by hand", why:"Reading is essential, but writing some kanji by hand helps memory. A mix works best."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e3u4-q10", lesson:"e3u4-l2", level:1, q:"What is an on reading (音読み)?", options:[
     {t:"A reading based on the Chinese pronunciation borrowed with the kanji", ok:true, why:"Right. For 山 it is サン. Dictionaries write on readings in katakana."},
     {t:"The native Japanese word for the kanji’s meaning", why:"That is the kun reading ([訓読]{くんよ}み), such as やま for 山."},
     {t:"A reading used only in names", why:"On readings are used in everyday words like 電車 (でんしゃ) and 学生 (がくせい)."},
     {t:"The reading written in small kana above a kanji", why:"That is furigana, which can show any reading."}
   ]},
   {id:"e3u4-q11", lesson:"e3u4-l2", level:2, q:"You see 高い. Which reading of 高 should you expect, and why?", options:[
     {t:"The kun reading たか, because okurigana follow the kanji", ok:true, why:"Right. A kanji followed by okurigana usually takes its kun reading: たかい."},
     {t:"The on reading コウ, because it is a single kanji", why:"コウ is used in compounds like 高校 (こうこう). With okurigana, use たか."},
     {t:"Either reading: こうい and たかい are both correct", why:"こうい is not how [高]{たか}い is read. The adjective is たかい."},
     {t:"The reading たか, because adjectives always use on readings", why:"たか is the kun reading, not an on reading. Okurigana point to the kun reading."}
   ]},
   {id:"e3u4-q12", lesson:"e3u4-l2", level:1, q:"How is 今日 (today) read in everyday writing?", options:[
     {t:"きょう", ok:true, why:"Right. 今日 is a special reading, read as a whole word: きょう."},
     {t:"いまひ", why:"The kun readings of 今 and 日 are not combined here. The whole word is きょう."},
     {t:"こんび", why:"This mixes readings that don’t go together. 今日 is きょう."},
     {t:"きんにち", why:"きん is not a reading of 今 in this word. In formal words 今日 can be こんにち, but on its own it is きょう."}
   ]},
   {id:"e3u4-q13", lesson:"e3u4-l2", level:2, q:"Which word shows rendaku (voicing) when two parts join?", options:[
     {t:"[出口]{でぐち} (exit): くち becomes ぐち", ok:true, why:"Right. The k-sound of くち becomes the voiced g-sound: でぐち."},
     {t:"[学校]{がっこう}: がく becomes がっ", why:"That is a small っ, not voicing. The end of がく shrinks to っ."},
     {t:"[一本]{いっぽん}: いち becomes いっ", why:"That is a small っ (and ほ becomes ぽ). Rendaku is voicing, such as く → ぐ."},
     {t:"[電車]{でんしゃ}: no change", why:"でん + しゃ joins with no change."}
   ]},
   {id:"e3u4-q14", lesson:"e3u4-l2", level:2, q:"A ticket costs 三千八百円. How do you read it?", options:[
     {t:"さんぜんはっぴゃくえん", ok:true, why:"Right. 三千 is さんぜん and 八百 is はっぴゃく, both with sound changes."},
     {t:"さんせんはちひゃくえん", why:"The sounds change after these numbers: さんぜん and はっぴゃく."},
     {t:"さんぜんはちひゃくえん", why:"[三千]{さんぜん} is right, but 八百 is はっぴゃく, with a small っ and ぴゃ."},
     {t:"みっせんやおえん", why:"Prices use on readings. やお appears only in the special word 八百屋 (やおや)."}
   ]},
   {id:"e3u4-q15", lesson:"e3u4-l2", level:1, q:"What does 万 mean?", options:[
     {t:"ten thousand (10,000)", ok:true, why:"Right. Japanese counts big numbers in groups of four digits, and 万 is the unit for 10,000."},
     {t:"one thousand (1,000)", why:"That is 千 (せん)."},
     {t:"one hundred (100)", why:"That is 百 (ひゃく)."},
     {t:"one million (1,000,000)", why:"One million is 百万 (ひゃくまん): a hundred 万."}
   ]},
   {id:"e3u4-q16", lesson:"e3u4-l2", level:2, q:"How is 九時 (nine o’clock) read?", options:[
     {t:"くじ", ok:true, why:"Right. On the clock, 九 is く: くじ. The same く is in 九月 (くがつ)."},
     {t:"きゅうじ", why:"きゅう is used for many things with nine, but nine o’clock is くじ."},
     {t:"ここのじ", why:"ここの is the kun reading in 九つ (ここのつ). Times use on readings: くじ."},
     {t:"くうじ", why:"There is no long vowel: くじ."}
   ]},
   {id:"e3u4-q17", lesson:"e3u4-l2", level:3, q:"A shop sign says 「[午前]{ごぜん}[十時]{じゅうじ}から[午後]{ごご}[七時]{しちじ}まで」. Ji-woo arrives at 18:30. Is the shop open?", options:[
     {t:"Yes: it is open from 10 a.m. to 7 p.m., and 18:30 is 6:30 p.m.", ok:true, why:"Right. [午後七時]{ごごしちじ} is 19:00, so at 18:30 there are 30 minutes left."},
     {t:"No: it closes at 7 a.m.", why:"[午後]{ごご} means p.m. The shop closes at 7 p.m. (19:00)."},
     {t:"No: it closes at 6 p.m.", why:"[七時]{しちじ} is seven o’clock, not six. Check the reading しちじ."},
     {t:"Only if it is a weekday", why:"The sign gives only the hours, with no weekday limit."}
   ]},
   {id:"e3u4-q18", lesson:"e3u4-l2", level:3, q:"Priya reads 「[十分]{じゅうぶん}です」 in a reply to “Do you need more coffee?” What does it mean?", options:[
     {t:"I have enough", ok:true, why:"Right. 十分 read じゅうぶん means enough. Read じゅっぷん (or じっぷん), it means ten minutes; here the furigana and context show “enough”."},
     {t:"Ten minutes, please", why:"Ten minutes is じゅっぷん. じゅうぶん is “enough”."},
     {t:"Ten cups", why:"Cups are counted with a counter like 杯; 十分 is not about cups."},
     {t:"Yes, ten more", why:"じゅうぶんです politely says you have enough: no more needed."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e3u4-q19", lesson:"e3u4-l3", level:1, q:"What does 南口 on a station sign mean?", options:[
     {t:"South exit", ok:true, why:"Right. 南 is south, and 口 means an opening, an exit."},
     {t:"North exit", why:"North is 北 (きた). 南 (みなみ) is south."},
     {t:"South platform", why:"口 means opening or exit, not platform."},
     {t:"Main entrance", why:"[南口]{みなみぐち} is the south exit; many stations also have a central exit, [中央口]{ちゅうおうぐち}."}
   ]},
   {id:"e3u4-q20", lesson:"e3u4-l3", level:2, q:"Talking to a colleague, Tomás wants to say “My mother is a teacher.” Which is correct?", options:[
     {t:"[母]{はは}は[先生]{せんせい}です。", ok:true, why:"Right. For your own mother, talking to others, use 母."},
     {t:"お[母]{かあ}さんは[先生]{せんせい}です。", why:"お母さん is for someone else’s mother, or for calling your own at home. To a colleague, say 母."},
     {t:"[母]{はは}さんは[先生]{せんせい}です。", why:"はは doesn’t take さん. Use 母 alone for your own mother."},
     {t:"お[母様]{かあさま}は[先生]{せんせい}です。", why:"お[母様]{かあさま} is a very polite word for someone else’s mother, never for your own."}
   ]},
   {id:"e3u4-q21", lesson:"e3u4-l3", level:1, q:"How is 人 read in 三人 (three people)?", options:[
     {t:"にん", ok:true, why:"Right. After a number, 人 is にん: さんにん."},
     {t:"じん", why:"じん follows a country: 日本人 (にほんじん)."},
     {t:"ひと", why:"ひと is used when 人 stands alone."},
     {t:"り", why:"り is only in 一人 (ひとり) and 二人 (ふたり)."}
   ]},
   {id:"e3u4-q22", lesson:"e3u4-l3", level:2, q:"Which word means the English language?", options:[
     {t:"[英語]{えいご}", ok:true, why:"Right. 英 + 語 (language): English."},
     {t:"イギリス[人]{じん}", why:"That is a British person. 人 makes a person, 語 makes a language."},
     {t:"アメリカ[語]{ご}", why:"This isn’t used. The English language is [英語]{えいご}, wherever it is spoken."},
     {t:"[英国]{えいこく}", why:"[英国]{えいこく} is a formal word for Britain (the country), not the language."}
   ]},
   {id:"e3u4-q23", lesson:"e3u4-l3", level:1, q:"What does [左]{ひだり} mean?", options:[
     {t:"left", ok:true, why:"Right. 左 (ひだり) is left; 右 (みぎ) is right."},
     {t:"right", why:"Right is 右 (みぎ). The two look similar: 右 has 口 below, 左 has 工."},
     {t:"outside", why:"Outside is 外 (そと)."},
     {t:"below", why:"Below is 下 (した)."}
   ]},
   {id:"e3u4-q24", lesson:"e3u4-l3", level:3, q:"A café calendar shows 「(水) [休]{やす}み」. Lucía wants to go on Wednesday. What should she do?", options:[
     {t:"Choose another day: the café is closed on Wednesdays", ok:true, why:"Right. (水) is short for [水曜日]{すいようび} (Wednesday), and [休]{やす}み means closed or a day off."},
     {t:"Go: (水) means water is served free", why:"In a calendar, a single kanji in brackets stands for the weekday: (水) = Wednesday."},
     {t:"Go: 休み means there is a rest area", why:"On a shop calendar, [休]{やす}み means the shop is closed that day."},
     {t:"Choose another day: the café is closed on Thursdays", why:"Thursday is (木). (水) is Wednesday."}
   ]},
   {id:"e3u4-q25", lesson:"e3u4-l3", level:2, q:"Which day is [金曜日]{きんようび}?", options:[
     {t:"Friday", ok:true, why:"Right. 金 (metal, gold) day is Friday."},
     {t:"Saturday", why:"Saturday is 土曜日 (どようび), the earth day."},
     {t:"Thursday", why:"Thursday is 木曜日 (もくようび), the wood day."},
     {t:"Monday", why:"Monday is 月曜日 (げつようび), the moon day."}
   ]},
   {id:"e3u4-q26", lesson:"e3u4-l3", level:2, q:"[本]{ほん}はかばんの（　）にあります。 Which word completes “The book is **in** the bag”?", options:[
     {t:"[中]{なか}", ok:true, why:"Right. かばんの中: inside the bag."},
     {t:"[外]{そと}", why:"外 is outside. The book is in the bag."},
     {t:"[上]{うえ}", why:"かばんの上 means on top of the bag."},
     {t:"[下]{した}", why:"かばんの下 means under the bag."}
   ]},
   {id:"e3u4-q27", lesson:"e3u4-l3", level:3, q:"Oluwaseun reads 「お[元気]{げんき}ですか」 at the start of an email from a friend. What is the friend asking?", options:[
     {t:"How are you?", ok:true, why:"Right. [元気]{げんき} means well, healthy, full of energy, so お[元気]{げんき}ですか asks how you are."},
     {t:"How is the weather?", why:"The weather is 天気 (てんき). [元気]{げんき} is about a person."},
     {t:"Is the electricity on?", why:"Electricity is 電気 (でんき)."},
     {t:"Are you popular?", why:"Popularity is 人気 (にんき)."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e3u4-q28", lesson:"e3u4-l4", level:1, q:"How is 来ます read?", options:[
     {t:"きます", ok:true, why:"Right. 来る is irregular: くる, きます, こない."},
     {t:"くます", why:"く is only in the dictionary form 来る. The ます form is きます."},
     {t:"らいます", why:"ライ is the on reading, used in 来年 (らいねん). With okurigana, use the kun reading."},
     {t:"こます", why:"こ is the reading in 来ない (こない), not in the ます form."}
   ]},
   {id:"e3u4-q29", lesson:"e3u4-l4", level:2, q:"Which verb is godan even though it ends in -iru?", options:[
     {t:"[入]{はい}る (enter)", ok:true, why:"Right. 入る is godan: 入ります, 入らない. It is a common exception."},
     {t:"[見]{み}る (see)", why:"見る is a regular ichidan verb: 見ます."},
     {t:"[起]{お}きる (get up)", why:"起きる is ichidan: 起きます."},
     {t:"[出]{で}る (go out)", why:"出る ends in -eru and is ichidan: 出ます."}
   ]},
   {id:"e3u4-q30", lesson:"e3u4-l4", level:1, q:"What does [聞]{き}く mean?", options:[
     {t:"hear, listen, or ask", ok:true, why:"Right. Context tells you which: [音楽]{おんがく}を[聞]{き}く (listen to music), [先生]{せんせい}に[聞]{き}く (ask the teacher)."},
     {t:"read", why:"Read is 読む (よむ)."},
     {t:"speak", why:"Speak is 話す (はなす)."},
     {t:"write", why:"Write is 書く (かく)."}
   ]},
   {id:"e3u4-q31", lesson:"e3u4-l4", level:2, q:"Which word means telephone?", options:[
     {t:"[電話]{でんわ}", ok:true, why:"Right. 電 (electricity) + 話 (talk)."},
     {t:"[電車]{でんしゃ}", why:"[電車]{でんしゃ} is a train: electricity + vehicle."},
     {t:"[電気]{でんき}", why:"[電気]{でんき} is electricity, or the lights."},
     {t:"[会話]{かいわ}", why:"[会話]{かいわ} is a conversation."}
   ]},
   {id:"e3u4-q32", lesson:"e3u4-l4", level:2, q:"Choose the natural sentence for “I meet a friend at the station.”", options:[
     {t:"[駅]{えき}で[友]{とも}だちに[会]{あ}います。", ok:true, why:"Right. 会う marks the person you meet with に, and で marks where it happens."},
     {t:"[駅]{えき}で[友]{とも}だちを[会]{あ}います。", why:"In English you “meet a friend” with no preposition, but 会う takes に for the person."},
     {t:"[駅]{えき}に[友]{とも}だちを[会]{あ}います。", why:"Both particles are off: the place of an action takes で, and the person takes に."},
     {t:"[駅]{えき}が[友]{とも}だちに[会]{あ}います。", why:"が would make the station the one doing the meeting."}
   ]},
   {id:"e3u4-q33", lesson:"e3u4-l4", level:2, q:"Which word fits 「この[部屋]{へや}は（　）です。」 to say “This room is cold” on a winter morning?", options:[
     {t:"[寒]{さむ}い", ok:true, why:"Right. 寒い is for cold air and weather, including a cold room."},
     {t:"[冷]{つめ}たい", why:"冷たい is for things you touch or drink, such as cold water or a cold hand."},
     {t:"[低]{ひく}い", why:"低い means low (height, level), not cold."},
     {t:"[古]{ふる}い", why:"古い means old (for things), not cold."}
   ]},
   {id:"e3u4-q34", lesson:"e3u4-l4", level:1, q:"What does [大]{おお}きい mean, and what is its opposite?", options:[
     {t:"big; opposite [小]{ちい}さい (small)", ok:true, why:"Right. 大きい and 小さい are the pair for size."},
     {t:"tall; opposite [低]{ひく}い (low)", why:"Tall or high is [高]{たか}い. 大きい is big in size."},
     {t:"long; opposite [短]{みじか}い (short)", why:"Long is 長い (ながい); its opposite is 短い. 大きい is about size."},
     {t:"many; opposite [少]{すく}ない (few)", why:"Many is 多い (おおい), which sounds similar but is a different word."}
   ]},
   {id:"e3u4-q35", lesson:"e3u4-l4", level:3, q:"Fatima writes 「[多]{おお}い[人]{ひと}が[駅]{えき}にいます。」 Her teacher marks it unnatural. Why?", options:[
     {t:"多い doesn’t normally go straight before a noun; say [駅]{えき}は[人]{ひと}が[多]{おお}いです", ok:true, why:"Right. 多い works as a predicate (人が多い). To mean “many people” before a noun, Japanese uses other words, such as たくさんの人."},
     {t:"多い is the wrong reading; it should be たい", why:"The reading おおい is correct. The problem is where the word goes."},
     {t:"Japanese has no word for “many”", why:"It does: 多い. It is just used as a predicate."},
     {t:"いる can’t be used for people", why:"いる is exactly right for people and animals. The problem is 多い人."}
   ]},
   {id:"e3u4-q36", lesson:"e3u4-l4", level:3, q:"Mei wants N5 vocabulary to stick. Which method best fits this lesson?", options:[
     {t:"Learn words in phrases with their particles, with opposites, and review daily", ok:true, why:"Right. Phrases like [電車]{でんしゃ}に[乗]{の}る, pairs like [高]{たか}い/[安]{やす}い and a short daily review make words stick."},
     {t:"Memorise a long English–Japanese list once, in alphabetical order", why:"Random lists learned once are quickly forgotten. Groups and spaced review work better."},
     {t:"Learn only the kanji, and the words will follow", why:"Kanji help, but words, their readings and particles need learning as words."},
     {t:"Wait until N4 to learn katakana words", why:"Katakana loanwords are core N5 vocabulary and often the easiest to learn."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e3u4-q37", lesson:"e3u4-l5", level:1, q:"What does 営業中 on a shop door mean?", options:[
     {t:"Open for business", ok:true, why:"Right. 営業中 (えいぎょうちゅう): in business, open."},
     {t:"Closed today", why:"Closed today is 本日休業 (ほんじつきゅうぎょう)."},
     {t:"Not open yet", why:"Not open yet is 準備中 (じゅんびちゅう)."},
     {t:"No entry", why:"No entry is 立入禁止 (たちいりきんし)."}
   ]},
   {id:"e3u4-q38", lesson:"e3u4-l5", level:2, q:"In a message, a friend writes 「[一緒]{いっしょ}に[映画]{えいが}を[見]{み}ませんか。」 What is the friend doing?", options:[
     {t:"Inviting you to watch a film together", ok:true, why:"Right. ～ませんか is a polite invitation: won’t you…?"},
     {t:"Saying they won’t watch the film", why:"～ません alone is negative, but with か it becomes an invitation."},
     {t:"Telling you they watched a film", why:"That would be 見ました (past)."},
     {t:"Asking you to stop watching", why:"Asking someone not to do something is ～ないでください."}
   ]},
   {id:"e3u4-q39", lesson:"e3u4-l5", level:2, q:"You need to find what time a notice says a library opens. Which reading approach fits?", options:[
     {t:"Scan for 時, 分, 午前 and 午後 and the numbers near them", ok:true, why:"Right. Scanning finds one fact quickly without reading everything."},
     {t:"Read every word slowly, looking up each one", why:"For one fact, that is slow. Scan first; read closely only around the answer."},
     {t:"Read only the title", why:"The title tells you the topic (お[知]{し}らせ, notice), not the opening time."},
     {t:"Look only for katakana words", why:"Times are written with numbers and kanji such as 時, not katakana."}
   ]},
   {id:"e3u4-q40", lesson:"e3u4-l5", level:1, q:"Which phrase closes almost every Japanese request email?", options:[
     {t:"よろしくお[願]{ねが}いします", ok:true, why:"Right. It thanks the reader in advance and asks for their kindness, a set closing."},
     {t:"いただきます", why:"いただきます is said before eating."},
     {t:"おやすみなさい", why:"おやすみなさい means good night."},
     {t:"いってきます", why:"いってきます is said when leaving home."}
   ]},
   {id:"e3u4-q41", lesson:"e3u4-l5", level:1, q:"Which JLPT level is the easiest?", options:[
     {t:"N5", ok:true, why:"Right. N5 is the easiest and N1 the hardest."},
     {t:"N1", why:"N1 is the hardest level."},
     {t:"N3", why:"N3 is the middle level, a bridge between basic and advanced."},
     {t:"N0", why:"There is no N0. The levels are N1 to N5."}
   ]},
   {id:"e3u4-q42", lesson:"e3u4-l5", level:3, q:"Kenji scores 40/120 in Language Knowledge・Reading and 30/60 in Listening on JLPT N5. Total: 70/180. Does he pass?", options:[
     {t:"No: the total is below the pass mark of 80", ok:true, why:"Right. Both parts are above their minimums (38 and 19), but the total must also reach 80."},
     {t:"Yes: both parts are above their minimums", why:"Sectional minimums are not enough on their own; the total must reach 80 too."},
     {t:"Yes: the N5 pass mark is 60", why:"The N5 pass mark is 80 out of 180."},
     {t:"No: Listening needs at least 38", why:"38 is the minimum for the Language Knowledge・Reading part. Listening needs 19."}
   ]},
   {id:"e3u4-q43", lesson:"e3u4-l5", level:2, q:"When is the JLPT held?", options:[
     {t:"Twice a year, in July and December (in 2026: 5 July and 6 December)", ok:true, why:"Right. Some cities outside Japan hold only one of the two sessions."},
     {t:"Every month, online", why:"The JLPT is a paper test held twice a year, not monthly."},
     {t:"Once a year, in April", why:"It is held in July and December."},
     {t:"Whenever you book it, at a test centre", why:"There are fixed dates, twice a year, and you apply well in advance."}
   ]},
   {id:"e3u4-q44", lesson:"e3u4-l5", level:3, q:"Amara pressed Good on a Kanji Lab card she had only half remembered. What is the likely effect?", options:[
     {t:"The card waits longer before coming back, so she may forget it by then", ok:true, why:"Right. Good moves a card to a longer gap. If she didn’t really know it, Again (once more at the end of the session, then tomorrow) would serve her better."},
     {t:"Nothing: Good and Again do the same thing", why:"They differ: Again brings the card back tomorrow; Good makes it wait longer."},
     {t:"The card is deleted from the deck", why:"No answer deletes a card; it only changes when the card comes back."},
     {t:"She gets more new cards that day", why:"New cards depend on the daily setting, not on how she answers."}
   ]},
   {id:"e3u4-q45", lesson:"e3u4-l5", level:2, q:"What is a graded reader?", options:[
     {t:"A book written for learners at a set level, with controlled vocabulary and kanji", ok:true, why:"Right. Graded readers let you read a lot at your level, often with little or no dictionary use."},
     {t:"A test that gives you a grade", why:"That would be a test like the JLPT. A graded reader is a book."},
     {t:"A Japanese school textbook for children", why:"Graded readers are written for language learners, not for Japanese school subjects."},
     {t:"An app that reads texts aloud", why:"A graded reader is a book (print or online), though some have audio."}
   ]}
  ]
});
