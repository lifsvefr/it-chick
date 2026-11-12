/* Japanese Foundations · Unit 2 (e3u2) · N5 grammar I */
ICA.addUnit({
  id:"e3u2", track:"e3", n:2, title:"N5 grammar I", icon:"🧩",
  blurb:"Your first real Japanese sentences: X は Y です and its negative and past, questions with か, の, the pointing words これ・それ・あれ, a first look at は and が, polite verbs with ます and the three verb groups, the particles を, に, で, へ, と, も, から and まで, あります and います, and い- and な-adjectives.",
  goals:[
    "Say what something or someone is, is not, was and was not with です, ではありません/じゃありません, でした and ではありませんでした",
    "Ask and answer yes–no questions with か and simple question words, and join nouns with の",
    "Point to things and places with これ・それ・あれ・どれ, この・その・あの・どの and ここ・そこ・あそこ・どこ, and use が after question words",
    "Sort verbs into the three groups, change a dictionary form into its ます form, and use ます, ません, ました, ませんでした, ～ましょう and ～ませんか",
    "Choose the right particle among を, に, で, へ, と, も, から and まで for time, place, people and means, and say what exists with あります and います",
    "Use い-adjectives and な-adjectives in polite sentences, before nouns and in the present, negative, past and past negative, including the irregular いい"
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e3u2-l1", title:"Your first sentences: は, です, か and の", minutes:50,
   hook:{q:"In the sentence 「アナさんは[学生]{がくせい}です。」 (“Ana is a student.”), how is the は pronounced?", options:["は, as at the start of はな (flower)","わ","ば","It isn’t pronounced at all"], answer:1, reveal:"**It is pronounced わ.** When は is a particle, the little word that marks the topic, it is read わ, even though it is written with the kana は. This spelling was kept from older Japanese. Two other particles work the same way: へ is read え and を is read お. Inside ordinary words, は is read normally. This lesson builds your first sentences around this particle."},
   goals:[
     "Build the sentence X は Y です and say what someone or something is",
     "Make the negative and past: ではありません, じゃありません, でした and ではありませんでした",
     "Ask yes–no questions with か and answer them with はい and いいえ",
     "Join two nouns with の (my book, Sara’s bag, a Japanese teacher)",
     "Introduce yourself politely without common beginner mistakes"
   ],
   learn:[
    {h:"Before you start: how this unit is written", body:[
      {lead:"In Unit 1 you learned the [[kana]]. From now on, Japanese is written the way Japanese people write it: hiragana, katakana and kanji, without romaji."},
      "Every kanji in this unit has small kana over it, called [[furigana]], so you can always read it: [学生]{がくせい} is read がくせい and means “student”. You don’t need to learn the kanji yet. Unit 4 teaches the N5 kanji, and the Kanji Lab has daily review decks.",
      "If reading kana still feels slow, that is normal. Go back to {{hiragana}} and {{katakana}} whenever you need to, and keep a few minutes of kana review in the Kanji Lab each day. Speed comes from short, regular practice, not from one long session.",
      "This unit teaches the polite style that ends in です and ます ([[desu-masu-tai]]). It is the safe choice with anyone you don’t know well: shop staff, teachers, colleagues, new neighbours. The casual style comes in Units 3 and 5.",
      {tip:"Forgetting is part of learning. You will meet every pattern in this unit again in exercises, in the Check questions and in later units. Each time you meet it again, it sticks a little better."}
    ]},
    {h:"The basic sentence: X は Y です", body:[
      "The simplest Japanese sentence says that one thing is another:",
      {ex:"アナさんは[学生]{がくせい}です。\nAna is a student.", label:"The pattern"},
      "**アナさん** is the [[topic-marker|topic]]: what the sentence is about. **は** is a [[particle]]: a small word that comes after a noun and shows its job in the sentence. Here it marks the topic, a bit like “as for Ana…”. **[学生]{がくせい}** is what you say about the topic. **です** is the polite [[copula]]: it works like “is”, “am” or “are”.",
      "Remember the hook: the particle は is pronounced **わ**. Inside words it keeps its normal sound: はな (flower), はい (yes).",
      {tip:"**Listening to patterns.** When a pattern has a blank, like X は Y です, the audio reads X and Y as **ほにゃらら**: a playful word Japanese speakers use for “something or other” when a word is left out, a bit like “so-and-so” or “blah”. You’ll hear it on TV and in everyday talk all over Japan. It’s casual, so keep it out of formal writing. A and B are read the way Japanese teachers do: エー and ビー."},
      {table:[["Japanese","English"],["[私]{わたし}はアナです。","I’m Ana."],["ケンジさんは[先生]{せんせい}です。","Kenji is a teacher."],["ミンさんは[会社員]{かいしゃいん}です。","Min is an office worker."],["[今日]{きょう}は[休]{やす}みです。","Today is a day off."]]},
      "Three things that surprise English speakers:",
      {list:["**です doesn’t change for the person.** I am, you are, she is, they are: all です.","**There are no words for “a” or “the”,** and most nouns have no plural ending. [学生]{がくせい} can mean “a student”, “the student” or “students”. The situation tells you which.","**The verb part comes last.** です closes the sentence. Everything about the topic comes before it."]},
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="20" text-anchor="middle">One pattern, three sentences</text><rect class="d-lup" x="8" y="34" width="84" height="36" rx="6" stroke-width="2"/><text x="50" y="57" text-anchor="middle">アナさん</text><rect class="d-gold" x="98" y="34" width="32" height="36" rx="6" stroke-width="2"/><text x="114" y="57" text-anchor="middle">は</text><rect class="d-sage" x="136" y="34" width="84" height="36" rx="6" stroke-width="2"/><text x="178" y="57" text-anchor="middle">がくせい</text><rect class="d-rose" x="226" y="34" width="106" height="36" rx="6" stroke-width="2"/><text x="279" y="57" text-anchor="middle">です</text><text class="s" x="50" y="88" text-anchor="middle">topic</text><text class="s" x="114" y="88" text-anchor="middle">particle</text><text class="s" x="178" y="88" text-anchor="middle">comment</text><text class="s" x="279" y="88" text-anchor="middle">polite “is”</text><text x="170" y="110" text-anchor="middle">Ana is a student.</text><rect class="d-lup" x="8" y="124" width="84" height="36" rx="6" stroke-width="2"/><text x="50" y="147" text-anchor="middle">アナさん</text><rect class="d-gold" x="98" y="124" width="32" height="36" rx="6" stroke-width="2"/><text x="114" y="147" text-anchor="middle">は</text><rect class="d-sage" x="136" y="124" width="84" height="36" rx="6" stroke-width="2"/><text x="178" y="147" text-anchor="middle">がくせい</text><rect class="d-rose" x="226" y="124" width="106" height="36" rx="6" stroke-width="2"/><text x="279" y="147" text-anchor="middle">じゃありません</text><text x="170" y="182" text-anchor="middle">Ana is not a student.</text><rect class="d-lup" x="8" y="196" width="84" height="36" rx="6" stroke-width="2"/><text x="50" y="219" text-anchor="middle">アナさん</text><rect class="d-gold" x="98" y="196" width="32" height="36" rx="6" stroke-width="2"/><text x="114" y="219" text-anchor="middle">は</text><rect class="d-sage" x="136" y="196" width="84" height="36" rx="6" stroke-width="2"/><text x="178" y="219" text-anchor="middle">がくせい</text><rect class="d-rose" x="226" y="196" width="106" height="36" rx="6" stroke-width="2"/><text x="279" y="219" text-anchor="middle">ですか</text><text x="170" y="254" text-anchor="middle">Is Ana a student?</text><text class="s" x="170" y="280" text-anchor="middle">Only the ending changes. The particle は is read わ.</text></svg>', alt:"Three rows of four boxes. Row one: アナさん (topic), は (particle), がくせい (comment), です (polite is): Ana is a student. Row two ends in じゃありません: Ana is not a student. Row three ends in ですか: Is Ana a student?", cap:"The topic, は and the comment stay the same. The ending carries “is”, “is not” or the question."}
    ]},
    {h:"Names, さん and leaving things out", body:[
      "[[honorific-san|さん]] goes after other people’s names, family name or given name: [山田]{やまだ}さん, ケンジさん, サラさん. It works for everyone, whatever their age or gender, a little like “Mr” or “Ms” but much more common. **Never put さん after your own name.** For teachers and doctors, people use [先生]{せんせい} after the name instead: [山田]{やまだ}[先生]{せんせい}.",
      "Japanese leaves out words that are already clear. Once everyone knows who you are talking about, the topic and は disappear. Saying [私]{わたし}は in every sentence sounds heavy, like starting every English sentence with “As for me…”. Here is a natural self-introduction:",
      {ex:"はじめまして。\nサラです。\n[学生]{がくせい}です。\nよろしくおねがいします。\n\nHello, nice to meet you. I’m Sara. I’m a student. I look forward to getting to know you.", label:"A self-introduction"},
      "はじめまして is said only the first time you meet someone. よろしくおねがいします has no exact English partner. It asks the other person for their goodwill, and people use it to close an introduction.",
      "Japanese has a word for “you”, あなた, but people use it much less than English speakers use “you”. When you know the person’s name, use the name with さん: 「サラさんは[学生]{がくせい}ですか。」 (“Are you a student, Sara?”). Calling someone あなた to their face can sound distant or too direct."
    ]},
    {h:"Saying “is not”, and talking about the past", body:[
      "To say that something is **not** something, replace です with a negative ending. Japanese has several, all polite, at slightly different levels of formality:",
      {table:[["Japanese","Feel","Where you meet it"],["[学生]{がくせい}ではありません。","Most formal","Writing, announcements, formal speech"],["[学生]{がくせい}じゃありません。","Polite","Everyday polite conversation"],["[学生]{がくせい}じゃないです。","Polite, conversational","Everyday polite conversation"]]},
      "じゃ is the spoken short form of では. When you write, choose ではありません. When you speak, じゃありません and じゃないです are both fine.",
      "For the past, です becomes **でした**, and ありません adds でした:",
      {table:[["","Present","Past"],["Affirmative","[休]{やす}みです (is a day off)","[休]{やす}みでした (was a day off)"],["Negative","[休]{やす}みではありません (is not)","[休]{やす}みではありませんでした (was not)"]]},
      {ex:"[昨日]{きのう}は[休]{やす}みでした。\nYesterday was a day off.\n\n[昨日]{きのう}は[雨]{あめ}じゃありませんでした。\nIt wasn’t rainy yesterday. (literally “Yesterday wasn’t rain.”)", label:"Past sentences"},
      {warn:"ありません is already polite. Don’t add です after it: 「✗ [学生]{がくせい}ではありませんです」 is a common beginner mistake."}
    ]},
    {h:"Questions with か", body:[
      "To ask a yes–no question, add the [[question-particle-ka|question particle か]] to the end of the sentence. The word order doesn’t change. In speech, your voice rises a little on か.",
      {ex:"アナさんは[学生]{がくせい}です。 → アナさんは[学生]{がくせい}ですか。\nAna is a student. → Is Ana a student?", label:"Statement to question"},
      "In standard writing, a sentence ending in か usually takes the normal full stop 。, because か already shows it’s a question. The question mark ？ is common in casual writing, messages and learner books.",
      "To answer a question about a noun (“Is it X?”), you have two short options for each answer:",
      {table:[["","Short answer","Full answer"],["Yes","はい、そうです。","はい、[学生]{がくせい}です。"],["No","いいえ、ちがいます。","いいえ、[学生]{がくせい}じゃありません。"]]},
      "そうです (“that’s right”) and ちがいます (“that’s not right”) fit questions about nouns. For questions about verbs and adjectives, which you’ll meet in Lessons 3 and 5, you answer with the verb or adjective itself.",
      "You can also put a [[question-word]] where the answer will go: 「お[仕事]{しごと}は[何]{なん}ですか。」「[医者]{いしゃ}です。」 (“What do you do?” “I’m a doctor.”). Lesson 2 adds more question words.",
      "か is one of several [[sentence-final-particle|sentence-final particles]]. Two others you will hear all the time: **ね** checks that the listener agrees (「いい[天気]{てんき}ですね。」 “Nice weather, isn’t it?”), and **よ** tells the listener something they may not know (「[明日]{あした}は[休]{やす}みですよ。」 “Tomorrow’s a day off, you know.”). Use よ lightly: too much of it can sound pushy."
    ]},
    {h:"の: joining two nouns", body:[
      "The [[particle-no|particle の]] joins two nouns. The first noun tells you something about the second: who owns it, what kind it is, or where it belongs.",
      {table:[["Japanese","English","What the first noun does"],["[私]{わたし}の[本]{ほん}","my book","owner"],["サラさんのかばん","Sara’s bag","owner"],["[日本語]{にほんご}の[先生]{せんせい}","a teacher of Japanese","what kind"],["[大学]{だいがく}の[友]{とも}だち","a friend from university","where from"]]},
      "The order is fixed: the describing noun comes **first**, the main noun last, as in English “Sara’s bag”, never like “the bag of Sara”. You can chain の: [私]{わたし}の[友]{とも}だちの[名前]{なまえ} means “my friend’s name”.",
      "When the main noun is obvious, you can drop it and keep の, like English “mine” or “Sara’s”:",
      {ex:"「このかばんは[先生]{せんせい}のですか。」\n「いいえ、[私]{わたし}のです。」\n“Is this bag yours?” (literally “the teacher’s”) “No, it’s mine.”", label:"の without the second noun"},
      "(この means “this”; Lesson 2 teaches it.) Japanese often uses a title such as [先生]{せんせい} instead of “you” when speaking to a teacher, which is why the question says 「[先生]{せんせい}の」."
    ]},
    {h:"Common mistakes", body:[
      {table:[["Mistake","Better","Why"],["✗ アナさんです。 (about yourself)","アナです。","さん is for other people, never for yourself."],["✗ [学生]{がくせい}ではありませんです。","[学生]{がくせい}ではありません。","ありません is already polite."],["✗ かばんのサラさん (for “Sara’s bag”)","サラさんのかばん","The owner comes first."],["✗ はい、[学生]{がくせい}じゃありません。 (to 「[学生]{がくせい}ですか」)","いいえ、[学生]{がくせい}じゃありません。","はい means “that’s right”; it can’t start a “no” answer here."],["✗ Reading the particle は as は","Read it わ","The topic particle is pronounced わ."],["✗ [私]{わたし}は in every sentence","Leave it out once it’s clear","Repeating the topic sounds heavy and unnatural."]]},
      "Every pattern here is in the Codex: {{japanese-sentence-basics}} for は, です and の, and {{question-sentences}} for questions and answers.",
      {terms:["particle","topic-marker","copula","honorific-san","question-particle-ka","question-word","sentence-final-particle","particle-no"]}
    ]}
   ],
   try:[
    {id:"e3u2-l1-x1", type:"mcq", q:"Sara is meeting her new neighbours for the first time. Which self-introduction is correct?", options:[
      {t:"はじめまして。サラです。よろしくおねがいします。", ok:true, why:"Right. はじめまして for a first meeting, her name with です, and よろしくおねがいします to close."},
      {t:"はじめまして。サラさんです。よろしくおねがいします。", why:"さん is only for other people’s names. About yourself, say サラです."},
      {t:"はじめまして。サラはです。よろしくおねがいします。", why:"は marks a topic, and then something must be said about it. 「サラはです」 has no comment between は and です. Say サラです."},
      {t:"はじめまして。ですサラ。よろしくおねがいします。", why:"です comes at the end of the sentence, after the noun: サラです."}
    ]},
    {id:"e3u2-l1-x2", type:"order", q:"Put the pieces in order to say “Kenji is not a teacher.”", items:[
      {t:"ケンジさん", why:"The topic, the person the sentence is about, comes first."},
      {t:"は", why:"The particle は comes straight after the topic it marks."},
      {t:"[先生]{せんせい}", why:"Then the comment: what Kenji is not."},
      {t:"じゃありません", why:"The negative ending closes the sentence, where です would be."}
    ]},
    {id:"e3u2-l1-x3", type:"mcq", q:"Which way of saying “is not a student” is the most formal, the one you would choose in writing?", options:[
      {t:"[学生]{がくせい}ではありません", ok:true, why:"Right. ではありません is the full, most formal form, used in writing and formal speech."},
      {t:"[学生]{がくせい}じゃありません", why:"This is polite and very common in conversation, but じゃ is a spoken short form of では, so it is less formal."},
      {t:"[学生]{がくせい}じゃないです", why:"Polite and common in conversation, but less formal than ではありません, so it isn’t the best choice for writing."},
      {t:"[学生]{がくせい}ではありませんです", why:"This is a mistake: ありません is already polite, so です is not added."}
    ]},
    {id:"e3u2-l1-x4", type:"mcq", q:"How do you turn 「サラさんは[先生]{せんせい}です。」 into a question that asks whether Sara is a teacher?", options:[
      {t:"サラさんは[先生]{せんせい}ですか。", ok:true, why:"Right. Add か to the end. The word order stays the same."},
      {t:"ですかサラさんは[先生]{せんせい}。", why:"です and か stay at the end of the sentence. Japanese doesn’t move words to make a question."},
      {t:"かサラさんは[先生]{せんせい}です。", why:"か is a sentence-final particle: it goes at the end, after です."},
      {t:"サラさんは[先生]{せんせい}かです。", why:"か comes after です, not before it."}
    ]},
    {id:"e3u2-l1-x5", type:"mcq", q:"A new colleague asks you 「アナさんは[学生]{がくせい}ですか。」. You are Ana, and you are a teacher, not a student. Which answer is right?", options:[
      {t:"いいえ、[学生]{がくせい}じゃありません。[先生]{せんせい}です。", ok:true, why:"Right. いいえ, then the negative, then the correct information."},
      {t:"はい、そうです。", why:"This means “Yes, that’s right”: you would be saying you are a student."},
      {t:"はい、[学生]{がくせい}じゃありません。", why:"はい means “that’s right”, so it can’t start a “no” answer to this question. Use いいえ."},
      {t:"いいえ、そうです。", why:"いいえ (no) and そうです (that’s right) contradict each other."}
    ]},
    {id:"e3u2-l1-x6", type:"match", q:"Match each phrase with の to its meaning.", pairs:[
      ["[先生]{せんせい}の[本]{ほん}","the teacher’s book","The owner ([先生]{せんせい}) comes first, the thing owned ([本]{ほん}) last."],
      ["[日本語]{にほんご}の[先生]{せんせい}","a teacher of Japanese","Here の shows what kind of teacher: one who teaches Japanese."],
      ["[友]{とも}だちのかさ","a friend’s umbrella","[友]{とも}だち owns the かさ (umbrella)."],
      ["[私]{わたし}の[名前]{なまえ}","my name","[私]{わたし}の is “my”: [私]{わたし} (I) + の."],
      ["[大学]{だいがく}の[友]{とも}だち","a friend from university","の shows where the friend belongs: from university."]
    ]},
    {id:"e3u2-l1-x7", type:"spot", q:"Mr Tanaka meets someone at a station. Tap the lines with **a mistake**.", ask:"has a mistake", parts:[
      "A: ",{t:"「すみません、[山田]{やまだ}さんですか。」", flag:false, why:"Correct. A polite yes–no question: name + さん + ですか."},
      "\nB: ",{t:"「いいえ、ちがいます。」", flag:false, why:"Correct. The short polite “no” to a question about a noun."},
      " ",{t:"「[田中]{たなか}さんです。」", flag:true, why:"B is talking about himself, so no さん: 「[田中]{たなか}です。」"},
      "\nA: ",{t:"「[田中]{たなか}さんは[先生]{せんせい}ですか。」", flag:false, why:"Correct. A uses B’s name with さん instead of あなた, which is natural."},
      "\nB: ",{t:"「いいえ、[先生]{せんせい}ではありませんです。」", flag:true, why:"ありません is already polite, so です is not added: 「[先生]{せんせい}ではありません。」"},
      " ",{t:"「[会社員]{かいしゃいん}です。」", flag:false, why:"Correct: “I’m an office worker.” The topic (I) is clear, so it is left out."}
    ]}
   ],
   apply:{
    intro:"Write in Japanese, using kana and any kanji you like. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Write your own self-introduction", how:[
       "Start with はじめまして。",
       "Say your name with です (no さん), and one more sentence with です about you: what you do, or where you are from (for example [学生]{がくせい}です or [会社員]{かいしゃいん}です).",
       "Close with よろしくおねがいします。",
       "Read it aloud three times. Remember: no [私]{わたし}は in every sentence."
     ], write:"はじめまして。…です。…です。よろしくおねがいします。"},
     {t:"Five sentences about people and things you know", how:[
       "Write five X は Y です sentences about people you know or things around you (use names with さん, never あなた).",
       "Make one of them negative with じゃありません and one past with でした.",
       "Use の at least twice (for example [友]{とも}だちのかばん).",
       "Then turn two of your sentences into questions with か, and write a short answer for each."
     ], write:"1… 2… 3… 4… 5… Questions and answers…"},
     {t:"Record yourself (privately) reading your sentences", how:[
       "Use any voice recorder on your phone or computer. Nobody else needs to hear it.",
       "Read your introduction and your sentences. Check that you read the particle は as わ.",
       "Listen back once and note one thing to improve."
     ], write:"What I noticed when I listened back…"}
    ],
    proof:"A short self-introduction, five sentences with は, です and の (one negative, one past), two questions with answers, and a private recording."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Expressing state-of-being”", note:"X は Y だ/です and its negative and past forms (Tae Kim starts with the plain だ; this unit uses です)."},
    {book:"taekim", where:"Basic Grammar, “Noun-related Particles”", note:"の for possession and linking nouns."},
    {book:"irodori", where:"Starter, topic “About Myself”, Lesson 3 “Nice to meet you.”", note:"Self-introductions with は and です, with audio."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e3u2-l2", title:"これ, それ, あれ: pointing, asking, and は vs が", minutes:50,
   hook:{q:"Kenji is holding a pen in his hand. He asks you 「これは[何]{なん}ですか。」 (“What is this?”). The pen is near him, not you. How do you begin your answer?", options:["これは…","それは…","あれは…","どれは…"], answer:1, reveal:"**それは…** Kenji says これ because the pen is near him. From where you stand, it is near the listener, so you say それ: 「それはペンです。」 Japanese pointing words depend on who the thing is close to, and they change as the speaker changes. This lesson maps all of them."},
   goals:[
     "Choose これ, それ, あれ or どれ by who the thing is close to",
     "Tell これ (stands alone) from この (needs a noun), and use ここ, そこ, あそこ and どこ for places",
     "Ask questions with [何]{なん}, だれ, どこ, いつ, どれ, どの and いくら",
     "Use が after a question word and in its answer, and は for a known topic"
   ],
   learn:[
    {h:"Three distances: こ, そ, あ, and ど for questions", body:[
      {lead:"English has two pointing words, “this” and “that”. Japanese has three, and the choice depends on who the thing is close to."},
      {table:[["Word","Meaning","Close to…"],["これ","this one","the speaker (me)"],["それ","that one","the listener (you)"],["あれ","that one over there","neither of us"],["どれ","which one?","(question)"]]},
      "These words start with こ, そ, あ and ど, and the same four sounds build whole families of pointing words. Teachers call them the [[ko-so-a-do|こそあど]] words. Once you know the pattern, you can guess the meaning of new members.",
      "When you and the listener stand **side by side**, looking at the same things, the rule shifts a little: これ is for things near both of you, それ for things a little away, and あれ for things far away.",
      {fig:'<svg viewBox="0 0 340 332"><text x="170" y="18" text-anchor="middle">Who is it close to?</text><rect class="d-gold" x="8" y="30" width="324" height="70" rx="10" stroke-width="2"/><text x="170" y="60" text-anchor="middle">あれ・あの・あそこ</text><text class="s" x="170" y="84" text-anchor="middle">far from both of us</text><rect class="d-lup" x="8" y="112" width="158" height="150" rx="10" stroke-width="2"/><text x="87" y="136" text-anchor="middle">これ・この・ここ</text><text class="s" x="87" y="156" text-anchor="middle">near me</text><circle class="d-ink" cx="87" cy="190" r="13" stroke-width="2" fill="none"/><path class="d-ink" d="M70 236 Q87 204 104 236" stroke-width="2" fill="none"/><text class="s" x="87" y="252" text-anchor="middle">me (speaker)</text><rect class="d-sage" x="174" y="112" width="158" height="150" rx="10" stroke-width="2"/><text x="253" y="136" text-anchor="middle">それ・その・そこ</text><text class="s" x="253" y="156" text-anchor="middle">near you</text><circle class="d-ink" cx="253" cy="190" r="13" stroke-width="2" fill="none"/><path class="d-ink" d="M236 236 Q253 204 270 236" stroke-width="2" fill="none"/><text class="s" x="253" y="252" text-anchor="middle">you (listener)</text><rect class="d-panel" x="8" y="274" width="324" height="50" rx="10" stroke-width="1.5"/><text x="170" y="296" text-anchor="middle">どれ・どの・どこ</text><text class="s" x="170" y="314" text-anchor="middle">questions: which one? which? where?</text></svg>', alt:"A diagram with three zones. Near the speaker: これ, この, ここ. Near the listener: それ, その, そこ. Far from both, at the top: あれ, あの, あそこ. At the bottom, the question words どれ, どの, どこ.", cap:"こ is near me, そ is near you, あ is far from both of us, and ど asks."}
    ]},
    {h:"これ or この?", body:[
      "これ, それ, あれ and どれ **stand alone**. They are like nouns: 「これは[本]{ほん}です。」 (“This is a book.”).",
      "この, その, あの and どの **must have a noun after them**. They work like “this book”, “that umbrella”:",
      {table:[["Stands alone","Needs a noun","Example with a noun"],["これ","この","この[本]{ほん}は[私]{わたし}のです。 (This book is mine.)"],["それ","その","そのかさはサラさんのですか。 (Is that umbrella Sara’s?)"],["あれ","あの","あの[人]{ひと}は[田中]{たなか}さんです。 (That person is Ms Tanaka.)"],["どれ","どの","どの[本]{ほん}ですか。 (Which book is it?)"]]},
      "So 「✗ これ[本]{ほん}」 and 「✗ このは…」 are both wrong. A quick test: if a noun follows, use the の-word; if not, use the れ-word.",
      {ex:"A (holding a cup): 「これは[日本]{にほん}のお[茶]{ちゃ}です。」\nB: 「そのお[茶]{ちゃ}はおいしいですか。」\nA: “This is Japanese tea.” B: “Is that tea nice?”", label:"The speaker changes, so the word changes"},
      {warn:"Don’t point at people with これ, それ or あれ: it sounds rude, as if the person were a thing. Use この[人]{ひと}, その[人]{ひと}, あの[人]{ひと}. In polite situations, [方]{かた} replaces [人]{ひと}: あの[方]{かた}. To introduce someone, say こちらは…です: 「こちらは[山田]{やまだ}さんです。」 (“This is Mr Yamada.”)."}
    ]},
    {h:"Places: ここ, そこ, あそこ, どこ", body:[
      "The same pattern gives four place words:",
      {table:[["Word","Meaning"],["ここ","here (near me)"],["そこ","there (near you)"],["あそこ","over there (far from both of us)"],["どこ","where?"]]},
      {ex:"「すみません、トイレはどこですか。」\n「あそこです。」\n“Excuse me, where’s the toilet?” “It’s over there.”", label:"Asking the way"},
      {ex:"「[駅]{えき}はどこですか。」\n「あの[銀行]{ぎんこう}の[隣]{となり}です。」\n“Where is the station?” “It’s next to that bank over there.”", label:"Another answer"},
      "The pattern X は どこですか (“Where is X?”) is one of the most useful in the language. Put the place you’re looking for before は, and listen for ここ, そこ or あそこ in the answer.",
      "You will also hear こちら, そちら, あちら and どちら. They are politer words for direction and place, and shop staff use them all the time: 「こちらへどうぞ。」 (“This way, please.”)."
    ]},
    {h:"Question words", body:[
      "A [[question-word]] goes exactly where the answer will go. You don’t move it to the front as English does:",
      {ex:"「それは[何]{なん}ですか。」 → 「これは[辞書]{じしょ}です。」\n“What is that?” → “This is a dictionary.”", label:"The answer fills the same slot"},
      {table:[["Question word","Meaning","Example"],["[何]{なん} / [何]{なに}","what","それは[何]{なん}ですか。"],["だれ","who","あの[人]{ひと}はだれですか。"],["どこ","where","[駅]{えき}はどこですか。"],["いつ","when","テストはいつですか。"],["どれ","which one (of three or more)","サラさんのかさはどれですか。"],["どの + noun","which (noun)","どの[人]{ひと}ですか。"],["いくら","how much (price)","このかさはいくらですか。"]]},
      "[何]{なん} or [何]{なに}? Before です and の, it is read なん: [何]{なん}ですか, [何]{なん}の[本]{ほん}ですか (“What kind of book is it?”). Before particles such as を and が, it is usually read なに: [何]{なに}を[食]{た}べますか (“What will you eat?”, Lesson 3).",
      "だれ has a politer partner, どなた, used by staff and in formal situations: 「どなたですか。」 (“Who is it, please?”).",
      "Prices use いくら and [円]{えん} (yen): 「このかさはいくらですか。」「[八百円]{はっぴゃくえん}です。」 (“How much is this umbrella?” “It’s 800 yen.”). Unit 3 teaches numbers and their sound changes."
    ]},
    {h:"は and が: a gentle first look", body:[
      "Japanese has two particles that can sit after the “who” or “what” of a sentence: は and が. Learners worry about them for years, so here is a gentle start, enough for N5. You will add more uses later.",
      "**は marks the topic**: something already in the conversation, which you now say something about. **が marks the** [[subject-marker|subject]] when that subject is the new or important information, the thing that answers “who?” or “which?”.",
      {h:"Rule 1: a question word as the subject takes が"},
      "A question word is new information by definition, so it can’t be a topic. It takes が, never は:",
      {ex:"「どれがサラさんのかさですか。」\n「あれがサラさんのかさです。」\n“Which one is Sara’s umbrella?” “That one over there is Sara’s umbrella.”", label:"が after どれ, and in the answer"},
      "「✗ どれはサラさんのかさですか」 is wrong. And notice the answer: the word that answers the question word takes が too, because it is the new information.",
      {h:"Rule 2: for a known topic, use は"},
      "When the person or thing is already known and you are adding information about it, use は:",
      {table:[["Sentence","What it answers"],["[山田]{やまだ}さんは[先生]{せんせい}です。","“What about Mr Yamada?” → He is a teacher."],["[山田]{やまだ}さんが[先生]{せんせい}です。","“Who is the teacher?” → Mr Yamada is (he’s the one)."]]},
      "The two sentences have the same words but answer different questions. With は, the new part comes after は. With が, the new part comes before が.",
      "You will meet が again with あります and います (Lesson 4) and with [好]{す}き, “to like” (Lesson 5). For the whole picture so far, see {{particles-wa-ga}}.",
      {tip:"Can’t decide? Ask yourself which word is the new information. If it comes **before** the particle, use が. If the new information comes **after** the particle, use は."}
    ]},
    {h:"Putting it together: at a lost-and-found counter", body:[
      "Here is a short conversation that uses almost everything in this lesson. Hana has lost her umbrella at a station and goes to the lost-and-found counter. The staff member shows her several umbrellas on a shelf behind the counter.",
      {ex:"[係]{かかり}の[人]{ひと}: 「お[客]{きゃく}さまのかさはどれですか。」\nハナ: 「あれです。あの[青]{あお}いかさです。」\n[係]{かかり}の[人]{ひと}: 「これですか。」 (holding it up)\nハナ: 「はい、それです。」\n[係]{かかり}の[人]{ひと}: 「お[名前]{なまえ}は？」\nハナ: 「キムです。キム・ハナです。」\n\nStaff: “Which one is your umbrella?” Hana: “That one over there. That blue umbrella.” Staff: “This one?” Hana: “Yes, that one.” Staff: “Your name?” Hana: “Kim. Kim Hana.”", label:"A conversation"},
      "Follow the pointing words. While the umbrella is on the far shelf, Hana says **あれ** and **あの** + noun. When the staff member picks it up, it is near the speaker, so she says **これ**, and Hana, looking at it in the other person’s hand, answers **それ**. The umbrella hasn’t moved far, but the speaker has changed.",
      "Notice also that どれ asks “which one” among several umbrellas, and that the staff member says お[客]{きゃく}さま (a very polite word for a customer) instead of “you”. 「お[名前]{なまえ}は？」 leaves out the end of the question (です and か): a short form staff often use. The お before [名前]{なまえ} makes it polite, because it is the other person’s name. ([係]{かかり}の[人]{ひと} means “the person in charge”.)"
    ]},
    {h:"Common mistakes", body:[
      {table:[["Mistake","Better","Why"],["✗ これ[本]{ほん}は[私]{わたし}のです。","この[本]{ほん}は[私]{わたし}のです。","A noun follows, so use この."],["✗ (pointing at a person) あれはだれですか。","あの[人]{ひと}はだれですか。","Pointing at people with あれ is rude."],["✗ (answering 「これは[何]{なん}ですか」 about a thing in the asker’s hand) これは…","それは…","The thing is near the listener now: you."],["✗ [何]{なに}ですか。","[何]{なん}ですか。","Before です, 何 is read なん."],["✗ だれは[先生]{せんせい}ですか。","だれが[先生]{せんせい}ですか。","A question word as subject takes が."],["✗ どこですか。 (for “which one?”)","どれですか。","どこ asks about places; どれ asks which thing."]]},
      "More examples of every pointing word and question word are in {{question-sentences}}.",
      {terms:["ko-so-a-do","question-word","topic-marker","subject-marker"]}
    ]}
   ],
   try:[
    {id:"e3u2-l2-x1", type:"mcq", q:"Min and Sara are standing together, looking at a tall building in the distance. Min asks Sara about it: 「＿＿は[何]{なん}ですか。」 Which word fills the blank?", options:[
      {t:"あれ", ok:true, why:"Right. The building is far from both of them: あれ, “that one over there”."},
      {t:"これ", why:"これ is for things close to the speaker. The building is far away."},
      {t:"それ", why:"それ is for things near the listener, or a little away when you stand side by side. A distant building is あれ."},
      {t:"あの", why:"あの needs a noun after it (あのビル). Before は on its own, use あれ."}
    ]},
    {id:"e3u2-l2-x2", type:"mcq", q:"In a shop, the assistant is holding up a bag to show you. You ask the price: 「＿＿かばんはいくらですか。」", options:[
      {t:"その", ok:true, why:"Right. The bag is near the listener (the assistant), and a noun (かばん) follows, so その."},
      {t:"この", why:"この is for things near you, the speaker. The bag is in the assistant’s hands."},
      {t:"それ", why:"The distance is right, but それ stands alone. Before the noun かばん you need その."},
      {t:"どの", why:"どの asks “which bag?”. You already know which bag you mean."}
    ]},
    {id:"e3u2-l2-x3", type:"sort", q:"Is each sentence correct, or does it need fixing?", buckets:["Correct","Needs fixing"], items:[
      {t:"この[本]{ほん}は[私]{わたし}のです。", b:0, why:"Correct: この + noun ([本]{ほん})."},
      {t:"これ[本]{ほん}は[私]{わたし}のです。", b:1, why:"これ can’t be followed by a noun. Use この[本]{ほん}."},
      {t:"どの[人]{ひと}が[山田]{やまだ}さんですか。", b:0, why:"Correct: どの + noun, and が after the question phrase."},
      {t:"だれは[先生]{せんせい}ですか。", b:1, why:"A question word as subject takes が: だれが[先生]{せんせい}ですか。"},
      {t:"トイレはどこですか。", b:0, why:"Correct: X は どこですか asks where X is."},
      {t:"それは[何]{なに}ですか。", b:1, why:"Before です, 何 is read なん: [何]{なん}ですか。"},
      {t:"そのは[何]{なん}ですか。", b:1, why:"その needs a noun after it. On its own, use それ: それは[何]{なん}ですか。"},
      {t:"あの[人]{ひと}はだれですか。", b:0, why:"Correct: あの[人]{ひと} is the right way to point at a person."}
    ]},
    {id:"e3u2-l2-x4", type:"match", q:"Match each question word to its meaning.", pairs:[
      ["だれ","who","だれ asks about people; the politer form is どなた."],
      ["どこ","where","どこ asks about places: [駅]{えき}はどこですか。"],
      ["いつ","when","いつ asks about time: テストはいつですか。"],
      ["いくら","how much (price)","いくら asks for a price, answered with [円]{えん}."],
      ["どれ","which one","どれ asks which thing, out of three or more."],
      ["[何]{なん}","what","何 is read なん before です and の, and なに before を and が."]
    ]},
    {id:"e3u2-l2-x5", type:"mcq", q:"Looking at a class photo, you want to ask which person is Ken. 「どの[人]{ひと}＿＿ケンさんですか。」", options:[
      {t:"が", ok:true, why:"Right. どの[人]{ひと} is a question phrase and the subject, so it takes が."},
      {t:"は", why:"A question word or phrase is new information, so it can’t be the topic. どの[人]{ひと}は is wrong here."},
      {t:"を", why:"を marks the object of a verb (Lesson 3). This sentence has no action verb, just です."},
      {t:"の", why:"「どの[人]{ひと}のケンさん」 would mean “Ken of which person”, which makes no sense here."}
    ]},
    {id:"e3u2-l2-x6", type:"order", q:"Put the pieces in order to ask “Where is the station?”", items:[
      {t:"[駅]{えき}", why:"The place you are asking about is the topic, so it comes first."},
      {t:"は", why:"は marks [駅]{えき} as the topic."},
      {t:"どこ", why:"The question word sits where the answer will go (ここ, そこ or あそこ)."},
      {t:"ですか", why:"です + the question particle か close the sentence."}
    ]},
    {id:"e3u2-l2-x7", type:"spot", q:"Leila is buying tea. The tin of tea is on the counter right in front of the shop assistant, an arm’s length from Leila. Tap the pointing words that are **wrong**.", ask:"is wrong", parts:[
      "Leila: 「すみません、",{t:"それ", flag:false, why:"Correct. The tea is near the listener (the assistant), so Leila says それ."},"は[何]{なん}ですか。」\nAssistant: 「",{t:"これ", flag:false, why:"Correct. For the assistant, the tea is close to her, the speaker: これ."},"ですか。[日本]{にほん}のお[茶]{ちゃ}です。」\nLeila: 「",{t:"これ", flag:true, why:"Wrong. The tea is still near the assistant, the listener, so Leila should say それ: 「それはいくらですか。」"},"はいくらですか。」\nAssistant: 「",{t:"この", flag:false, why:"Correct. The tea is near the assistant, and a noun (お[茶]{ちゃ}) follows, so この."},"お[茶]{ちゃ}は[八百円]{はっぴゃくえん}です。」\nLeila: 「じゃ、",{t:"その", flag:true, why:"Wrong. その must have a noun after it. On its own, Leila should say それ: 「じゃ、それをください。」 (“Then I’ll take that, please.”)"},"をください。」"
    ]}
   ],
   apply:{
    intro:"Use the things around you. You can do these tasks anywhere: at home, at work or on a walk.",
    tasks:[
     {t:"Label five things around you", how:[
       "Pick five things: some within reach, one across the room, one you can see through a window.",
       "For each, write a sentence with これ, それ or あれ, imagining a friend sitting across from you: これは[本]{ほん}です。 あれは…",
       "Rewrite two of them with この, その or あの and a noun: この[本]{ほん}は[私]{わたし}のです。"
     ], write:"これは…です。それは…です。あれは…です。この…は…です。"},
     {t:"Ask about places", how:[
       "Write three questions with X は どこですか about places you know: a station, a shop, the toilet.",
       "Write an answer for each with ここ, そこ or あそこ, or a short description."
     ], write:"…はどこですか。—…です。"},
     {t:"Practise は and が with a photo", how:[
       "Choose a photo with several people or things in it.",
       "Write one question with どれが or どの[人]{ひと}が, and answer it with が.",
       "Then write one sentence with は about the same person or thing."
     ], write:"どの…が…ですか。—…が…です。…は…です。"}
    ],
    proof:"Five labelled things (three with これ・それ・あれ and two with この・その・あの + noun), three where-questions with answers, and one question and answer with が plus a sentence with は."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Introduction to Particles”", note:"は, も and が, including が after question words."},
    {book:"irodori", where:"Starter, topic “Homes and Workplaces”, Lesson 8 “Where is Yamada-san?”", note:"Asking where people and things are, with audio."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e3u2-l3", title:"Verbs with ます: tenses, groups and the dictionary form", minutes:55,
   hook:{q:"[帰]{かえ}る means “to go home”. What is its polite ます form?", options:["かえます","かえります","かえるます","かえりです"], answer:1, reveal:"**かえります ([帰]{かえ}ります).** [帰]{かえ}る looks like the verbs that simply drop る (たべる → たべます), but it belongs to the other big group, so る becomes り. かえます is a real word too, but it comes from a different verb, [変]{か}える (to change). This lesson shows you how to tell the groups apart, and which few verbs break the pattern."},
   goals:[
     "Use the four polite forms ます, ません, ました and ませんでした for habits, plans and the past",
     "Mark the object of a verb with を",
     "Sort verbs into the three groups (godan, ichidan, irregular) from their dictionary form, including the common exceptions",
     "Change a dictionary form into its ます form for every group",
     "Invite with ～ませんか, agree with ～ましょう, and offer with ～ましょうか"
   ],
   learn:[
    {h:"Verbs come last, and ます makes them polite", body:[
      {lead:"In a Japanese sentence the verb comes at the end, just like です in Lesson 1. Everything else (who, when, where, what) comes before it."},
      {ex:"[毎朝]{まいあさ}コーヒーを[飲]{の}みます。\nI drink coffee every morning.\n\n[明日]{あした}、[本]{ほん}を[買]{か}います。\nI’ll buy a book tomorrow.", label:"One form for habits and plans"},
      "The ending ます makes a verb polite: this is the [[masu-form]]. It is the verb form to use with anyone you would speak to with です.",
      "Japanese verbs have two tenses: past and non-past. The non-past ます form covers **habits** (“I drink coffee every morning”) and the **future** (“I’ll buy a book tomorrow”). Time words such as [毎日]{まいにち} (every day), [明日]{あした} (tomorrow) and [今晩]{こんばん} (this evening) make the meaning clear.",
      {warn:"The ます form does **not** mean “I am doing it right now”. 「[今]{いま}テレビを[見]{み}ます」 sounds like “I’ll watch TV now”, not “I’m watching TV”. For actions in progress, Japanese uses ～ています, which Unit 3 teaches."},
      "As with です, the verb doesn’t change for the person: [飲]{の}みます can mean “I drink”, “you drink”, “she drinks” or “they drink”. The topic or the situation tells you who."
    ]},
    {h:"Four polite forms", body:[
      "Every verb has four polite forms. The ending changes; the front part (the [[masu-stem]]) stays the same.",
      {table:[["","Non-past","Past"],["Affirmative","[食]{た}べます (eat, will eat)","[食]{た}べました (ate)"],["Negative","[食]{た}べません (don’t eat, won’t eat)","[食]{た}べませんでした (didn’t eat)"]]},
      "The same endings work for every verb in the language. Here are three more:",
      {table:[["ます","ません","ました","ませんでした"],["[行]{い}きます","[行]{い}きません","[行]{い}きました","[行]{い}きませんでした"],["[見]{み}ます","[見]{み}ません","[見]{み}ました","[見]{み}ませんでした"],["します","しません","しました","しませんでした"]]},
      {ex:"[昨日]{きのう}は[映画]{えいが}を[見]{み}ました。\nI saw a film yesterday.\n\n[肉]{にく}を[食]{た}べません。\nI don’t eat meat.\n\n[昨日]{きのう}は[勉強]{べんきょう}しませんでした。\nI didn’t study yesterday.", label:"In sentences"},
      "Notice ませんでした: the negative ません plus でした, the past of です. It is one of the few places where です appears inside a verb ending.",
      "To ask a question, add か as usual: 「[明日]{あした}[来]{き}ますか。」 (“Are you coming tomorrow?”). Answer with the verb, not with そうです: 「はい、[来]{き}ます。」「いいえ、[来]{き}ません。」"
    ]},
    {h:"を: the object of the verb", body:[
      "The [[object-marker|particle を]] marks the **object**: the thing the action is done to. It is pronounced お, like the particle は is pronounced わ.",
      {table:[["Japanese","English"],["パンを[食]{た}べます。","I eat bread."],["[水]{みず}を[飲]{の}みます。","I drink water."],["[手紙]{てがみ}を[書]{か}きます。","I write a letter."],["[日本語]{にほんご}を[勉強]{べんきょう}します。","I study Japanese."]]},
      "Only verbs that act on something take を. Verbs of movement such as [行]{い}きます (go), [来]{き}ます (come) and [帰]{かえ}ります (go home) take a destination with に or へ instead (Lesson 4): 「✗ [学校]{がっこう}を[行]{い}きます」 is wrong; say [学校]{がっこう}に[行]{い}きます.",
      {tip:"Typical word order: topic → time → object → verb. 「[私]{わたし}は[毎朝]{まいあさ}パンを[食]{た}べます。」 Japanese word order is fairly free because particles show each word’s job, but the verb stays at the end."}
    ]},
    {h:"The dictionary form and the three verb groups", body:[
      "Dictionaries list verbs in their [[dictionary-form]]: the plain non-past form. Every dictionary form ends in an う-row sound: う, く, ぐ, す, つ, ぬ, ぶ, む or る. To make the ます form (and later every other form), you first need the verb’s [[verb-group|group]]. There are three:",
      {table:[["Group","Other names in textbooks","Examples"],["[[godan-verb|Godan]] ([五段]{ごだん})","Group 1, u-verbs","[書]{か}く, [飲]{の}む, [買]{か}う, [帰]{かえ}る"],["[[ichidan-verb|Ichidan]] ([一段]{いちだん})","Group 2, ru-verbs","[食]{た}べる, [見]{み}る, [起]{お}きる, [寝]{ね}る"],["[[irregular-verb|Irregular]]","Group 3","する, [来]{く}る"]]},
      {h:"How to tell"},
      {ol:["**する and くる** are irregular. So are verbs made of a noun + する: [勉強]{べんきょう}する (study), [料理]{りょうり}する (cook).","**If the verb doesn’t end in る**, it is godan: [書]{か}く, [話]{はな}す, [待]{ま}つ, [読]{よ}む.","**If it ends in る** and the sound before る is an **i-sound or e-sound** (み, き, べ, ね…), it is usually ichidan: [見]{み}る, [起]{お}きる, [食]{た}べる, [寝]{ね}る.","**If it ends in る** after an a-, u- or o-sound, it is godan: [分]{わ}かる, [作]{つく}る, [乗]{の}る."]},
      "Step 3 says “usually”, because some common verbs look ichidan but are godan. Learn these as a list:",
      {table:[["Godan exception","Meaning","ます form"],["[帰]{かえ}る","go home","[帰]{かえ}ります"],["[入]{はい}る","enter","[入]{はい}ります"],["[知]{し}る","get to know","[知]{し}ります (rare; Unit 3 teaches [知]{し}っています)"],["[切]{き}る","cut","[切]{き}ります"],["[走]{はし}る","run","[走]{はし}ります"],["[要]{い}る","need","[要]{い}ります"]]},
      {fig:'<svg viewBox="0 0 340 396"><defs><marker id="e3u2ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L8 4 L0 8z"/></marker></defs><text x="170" y="18" text-anchor="middle">Which group is this verb?</text><rect class="d-panel" x="8" y="30" width="204" height="48" rx="8" stroke-width="1.5"/><text x="110" y="50" text-anchor="middle">する or くる?</text><text class="s" x="110" y="68" text-anchor="middle">(also noun + する)</text><path class="d-ink" d="M212 54 L232 54" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="222" y="46" text-anchor="middle">yes</text><rect class="d-rose" x="236" y="34" width="96" height="40" rx="8" stroke-width="2"/><text x="284" y="59" text-anchor="middle">Irregular</text><path class="d-ink" d="M110 78 L110 104" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="124" y="96">no</text><rect class="d-panel" x="8" y="108" width="204" height="62" rx="8" stroke-width="1.5"/><text x="110" y="128" text-anchor="middle">Ends in る, with an</text><text x="110" y="146" text-anchor="middle">i- or e-sound before it?</text><text class="s" x="110" y="162" text-anchor="middle">(みる, たべる…)</text><path class="d-ink" d="M212 139 L232 139" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="222" y="131" text-anchor="middle">no</text><rect class="d-lup" x="236" y="119" width="96" height="40" rx="8" stroke-width="2"/><text x="284" y="144" text-anchor="middle">Godan</text><path class="d-ink" d="M110 170 L110 196" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="124" y="188">yes</text><rect class="d-panel" x="8" y="200" width="204" height="62" rx="8" stroke-width="1.5"/><text x="110" y="220" text-anchor="middle">On the exception list?</text><text class="s" x="110" y="238" text-anchor="middle">かえる, はいる, しる,</text><text class="s" x="110" y="254" text-anchor="middle">きる (cut), はしる, いる (need)</text><path class="d-ink" d="M212 231 L232 231" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="222" y="223" text-anchor="middle">yes</text><rect class="d-lup" x="236" y="211" width="96" height="40" rx="8" stroke-width="2"/><text x="284" y="236" text-anchor="middle">Godan</text><path class="d-ink" d="M110 262 L110 288" stroke-width="2" marker-end="url(#e3u2ah)"/><text class="s" x="124" y="280">no</text><rect class="d-sage" x="8" y="292" width="204" height="40" rx="8" stroke-width="2"/><text x="110" y="317" text-anchor="middle">Ichidan</text><text class="s" x="8" y="356">Godan: かく → かきます, かえる → かえります</text><text class="s" x="8" y="374">Ichidan: たべる → たべます, みる → みます</text><text class="s" x="8" y="392">Irregular: する → します, くる → きます</text></svg>', alt:"A flowchart. First question: is it する or くる (or noun + する)? Yes: irregular. No: does it end in る with an i- or e-sound before it? No: godan. Yes: is it on the exception list (かえる, はいる, しる, きる meaning cut, はしる, いる meaning need)? Yes: godan. No: ichidan.", cap:"Three questions sort almost every verb. The exception list is short: learn it by heart."}
    ]},
    {h:"From the dictionary form to ます", body:[
      "**Ichidan:** take off る and add ます. [食]{た}べる → [食]{た}べます, [見]{み}る → [見]{み}ます, [起]{お}きる → [起]{お}きます.",
      "**Godan:** change the last sound from the う-row to the い-row of the same column, then add ます:",
      {table:[["Ending","Becomes","Example"],["う","います","[買]{か}う → [買]{か}います"],["く","きます","[書]{か}く → [書]{か}きます"],["ぐ","ぎます","[泳]{およ}ぐ → [泳]{およ}ぎます"],["す","します","[話]{はな}す → [話]{はな}します"],["つ","ちます","[待]{ま}つ → [待]{ま}ちます"],["ぬ","にます","[死]{し}ぬ → [死]{し}にます (the only common ぬ verb)"],["ぶ","びます","[遊]{あそ}ぶ → [遊]{あそ}びます"],["む","みます","[読]{よ}む → [読]{よ}みます"],["る","ります","[帰]{かえ}る → [帰]{かえ}ります"]]},
      "**Irregular:** する → します, [来]{く}る → [来]{き}ます. Notice that the kanji 来 is read く in the dictionary form and き in the ます form.",
      "[行]{い}く is completely regular here: [行]{い}きます. Its one irregular form, the て-form, comes in Unit 3 ({{te-form}}).",
      {h:"Going backwards is harder"},
      "From a ます form you can’t always tell the dictionary form. きます could be [来]{き}ます (come, from くる) or [着]{き}ます (wear, from the ichidan verb きる). かえります comes from [帰]{かえ}る (go home), but かえます comes from [変]{か}える (change). When you learn a new verb, learn its dictionary form and its ます form together, and look up new ます forms in a dictionary."
    ]},
    {h:"Inviting: ～ませんか and ～ましょう", body:[
      "Two endings built on the ます stem let you make plans with people:",
      {table:[["Ending","Meaning","Example"],["～ませんか","Won’t you…? Would you like to…? (an invitation)","いっしょに[映画]{えいが}を[見]{み}ませんか。"],["～ましょう","Let’s…","[見]{み}ましょう。"],["～ましょうか","Shall we…? Shall I…? (a suggestion or an offer)","[何時]{なんじ}に[会]{あ}いましょうか。"]]},
      {ex:"ミン: 「[土曜日]{どようび}、いっしょに[映画]{えいが}を[見]{み}ませんか。」\nサラ: 「いいですね。[見]{み}ましょう。」\nミン: 「[何時]{なんじ}に[会]{あ}いましょうか。」\n\nMin: “Would you like to see a film together on Saturday?” Sara: “Sounds good. Let’s.” Min: “What time shall we meet?”", label:"Making a plan"},
      "～ませんか looks negative, but it is a friendly invitation, like English “Won’t you join us?”. It leaves the other person room to say no, so it is the polite way to invite someone. ～ましょう is more direct: use it once the other person has agreed, or with people you know well.",
      "～ましょうか can also offer help: 「[荷物]{にもつ}を[持]{も}ちましょうか。」 (“Shall I carry your bags?”).",
      "To decline politely, Japanese speakers rarely say a flat no. A common pattern is to say sorry and leave the sentence unfinished: 「すみません、[土曜日]{どようび}はちょっと…。」 (“Sorry, Saturday is a little…”). The listener understands."
    ]},
    {h:"Common mistakes", body:[
      {table:[["Mistake","Better","Why"],["✗ [帰]{かえ}ます","[帰]{かえ}ります","[帰]{かえ}る is a godan exception."],["✗ [見]{み}ります","[見]{み}ます","[見]{み}る is ichidan: drop る, add ます."],["✗ [来]{く}ます","[来]{き}ます","くる is irregular: きます."],["✗ [飲]{の}まないでした","[飲]{の}みませんでした","The polite past negative is ませんでした."],["✗ [学校]{がっこう}を[行]{い}きます","[学校]{がっこう}に[行]{い}きます","Movement verbs take a destination with に or へ, not を."],["✗ [今]{いま}テレビを[見]{み}ます (for “I’m watching”)","[今]{いま}テレビを[見]{み}ています","For an action in progress, use ～ています (Unit 3)."]]},
      "The Codex has the full tables: {{masu-verbs}} and {{verb-groups}}.",
      {terms:["masu-form","masu-stem","object-marker","dictionary-form","verb-group","godan-verb","ichidan-verb","irregular-verb","mashou-masenka"]}
    ]}
   ],
   try:[
    {id:"e3u2-l3-x1", type:"mcq", q:"Choose the sentence that means “I didn’t drink coffee yesterday.”", options:[
      {t:"[昨日]{きのう}はコーヒーを[飲]{の}みませんでした。", ok:true, why:"Right. ませんでした is the polite past negative: didn’t drink."},
      {t:"[昨日]{きのう}はコーヒーを[飲]{の}みません。", why:"ません is non-past: “I don’t (or won’t) drink”. Yesterday needs the past."},
      {t:"[昨日]{きのう}はコーヒーを[飲]{の}みました。", why:"ました is past affirmative: “I drank coffee”. The sentence needs the negative."},
      {t:"[昨日]{きのう}はコーヒーを[飲]{の}まないでした。", why:"This form doesn’t exist. The polite past negative is ませんでした."}
    ]},
    {id:"e3u2-l3-x2", type:"sort", q:"Sort these dictionary forms into their verb groups.", buckets:["Godan","Ichidan","Irregular"], items:[
      {t:"[飲]{の}む", b:0, why:"It ends in む, not る, so it is godan: [飲]{の}みます."},
      {t:"[食]{た}べる", b:1, why:"る after an e-sound (べ): ichidan, [食]{た}べます."},
      {t:"[帰]{かえ}る", b:0, why:"It looks ichidan (え-sound before る) but is a godan exception: [帰]{かえ}ります."},
      {t:"[見]{み}る", b:1, why:"る after an i-sound (み): ichidan, [見]{み}ます."},
      {t:"する", b:2, why:"する is one of the two irregular verbs: します."},
      {t:"[来]{く}る", b:2, why:"くる is irregular: [来]{き}ます."},
      {t:"[起]{お}きる", b:1, why:"る after an i-sound (き): ichidan, [起]{お}きます."},
      {t:"[入]{はい}る", b:0, why:"It looks ichidan (い-sound before る) but is a godan exception: [入]{はい}ります."}
    ]},
    {id:"e3u2-l3-x3", type:"match", q:"Match each dictionary form to its ます form.", pairs:[
      ["[書]{か}く","かきます","Godan: く becomes き, then ます."],
      ["[話]{はな}す","はなします","Godan: す becomes し, then ます."],
      ["[待]{ま}つ","まちます","Godan: つ becomes ち, then ます."],
      ["[買]{か}う","かいます","Godan: う becomes い, then ます."],
      ["[寝]{ね}る","ねます","Ichidan (e-sound before る): drop る, add ます."],
      ["[来]{く}る","きます","Irregular: くる becomes きます."]
    ]},
    {id:"e3u2-l3-x4", type:"order", q:"Put the steps in order to make the ます form of [待]{ま}つ (to wait).", items:[
      {t:"Look at the last sound: つ.", why:"Start with the ending, because it tells you the group."},
      {t:"It isn’t る, so the verb is godan.", why:"Only verbs ending in る can be ichidan. Any other ending means godan."},
      {t:"Change つ to the い-row sound of its column: ち.", why:"Godan verbs move their last sound from the う-row to the い-row: [待]{ま}ち."},
      {t:"Add ます: [待]{ま}ちます.", why:"ます goes on last, after the stem."}
    ]},
    {id:"e3u2-l3-x5", type:"mcq", q:"What is the ます form of [入]{はい}る (to enter)?", options:[
      {t:"[入]{はい}ります", ok:true, why:"Right. [入]{はい}る is one of the godan exceptions, so る becomes り."},
      {t:"[入]{はい}ます", why:"This would be right for an ichidan verb, but [入]{はい}る is a godan exception."},
      {t:"[入]{はい}るます", why:"ます never goes straight onto the dictionary form. Change る to り first."},
      {t:"[入]{はい}れます", why:"This is a different form (the potential, “can enter”), taught at N4."}
    ]},
    {id:"e3u2-l3-x6", type:"mcq", q:"Tomás wants to invite a colleague he doesn’t know well to lunch, and leave her room to say no. What should he say?", options:[
      {t:"いっしょにお[昼]{ひる}を[食]{た}べませんか。", ok:true, why:"Right. ～ませんか is the polite invitation: “Would you like to have lunch together?”"},
      {t:"いっしょにお[昼]{ひる}を[食]{た}べましょう。", why:"～ましょう (“Let’s…”) is more direct and assumes she wants to. It fits once she has agreed, or with close friends."},
      {t:"いっしょにお[昼]{ひる}を[食]{た}べませんでしたか。", why:"This is past: “Didn’t you have lunch together?” It isn’t an invitation."},
      {t:"いっしょにお[昼]{ひる}を[食]{た}べました。", why:"This is a past statement: “We had lunch together.”"}
    ]},
    {id:"e3u2-l3-x7", type:"spot", q:"Priya wrote about her day yesterday. Tap the verb forms that are **wrong**.", ask:"is wrong", parts:[
      "[昨日]{きのう}は[六時]{ろくじ}に",{t:"[起]{お}きました", flag:false, why:"Correct. [起]{お}きる is ichidan: [起]{お}きます → [起]{お}きました."},"。コーヒーを",{t:"[飲]{の}みました", flag:false, why:"Correct. [飲]{の}む is godan: む → み, [飲]{の}みました."},"。[朝]{あさ}、[日本語]{にほんご}を",{t:"[勉強]{べんきょう}しました", flag:false, why:"Correct. Noun + する: [勉強]{べんきょう}します → [勉強]{べんきょう}しました."},"。[五時]{ごじ}にうちに",{t:"[帰]{かえ}ました", flag:true, why:"Wrong. [帰]{かえ}る is a godan exception: [帰]{かえ}りました."},"。[夜]{よる}、テレビを",{t:"[見]{み}りました", flag:true, why:"Wrong. [見]{み}る is ichidan: drop る and add ました, [見]{み}ました."},"。[十一時]{じゅういちじ}に",{t:"[寝]{ね}ました", flag:false, why:"Correct. [寝]{ね}る is ichidan: [寝]{ね}ます → [寝]{ね}ました."},"。"
    ]}
   ],
   apply:{
    intro:"Use your own days. Short, true sentences are the best practice.",
    tasks:[
     {t:"Write five sentences about your day", how:[
       "Write five sentences with ます forms: three about what you usually do ([毎朝]{まいあさ}…), one about yesterday (ました or ませんでした) and one about tomorrow.",
       "Use を in at least three of them.",
       "Underline each verb and write its dictionary form and group next to it."
     ], write:"1… (dictionary form, group) 2… 3… 4… 5…"},
     {t:"Build your verb list", how:[
       "Make a list of ten verbs you would use every day (eat, drink, go, come, sleep, read, buy…).",
       "For each, write the dictionary form, the ます form and the group. Star any godan exceptions.",
       "Review the list for a few minutes on three different days this week."
     ], write:"[食]{た}べる / [食]{た}べます / ichidan… "},
     {t:"Invite someone (on paper)", how:[
       "Write a short invitation with ～ませんか to do something on a day of your choice.",
       "Write an answer that accepts with ～ましょう, and a second answer that declines politely with ちょっと….",
       "If you have a Japanese-speaking friend or a language partner who agrees, send them your invitation."
     ], write:"Invitation… Accepting… Declining…"}
    ],
    proof:"Five sentences about your day with ます forms and を, a ten-verb list with groups and ます forms, and an invitation with an acceptance and a polite refusal."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Verb Basics”", note:"Verb groups (Tae Kim calls them ru-verbs and u-verbs) and the dictionary form."},
    {book:"taekim", where:"Essential Grammar, “Polite Form and Verb Stems”, section “Using 「～ます」 to make verbs polite”", note:"The ます stem and the polite verb forms."},
    {book:"irodori", where:"Starter, topic “What I Like to Do”, Lesson 12 “Do you want to go for a drink together?”", note:"Invitations with ～ませんか, with audio."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e3u2-l4", title:"Particles for time, place and people, and あります・います", minutes:55,
   hook:{q:"Which particle fits? 「[図書館]{としょかん}＿＿[勉強]{べんきょう}します。」 (“I study at the library.”)", options:["に","で","を","へ"], answer:1, reveal:"**で.** Both に and で can translate as “at”, but they do different jobs. で marks the place where an action happens (studying), while に marks where something simply is: 「[図書館]{としょかん}にいます。」 (“I’m at the library.”). Choosing between them is one of the first big particle decisions in Japanese, and this lesson gives you a clear test for it."},
   goals:[
     "Use に for points in time and destinations, and know which time words take no particle",
     "Use へ for direction, and know where it can and can’t replace に",
     "Use で for the place of an action and for means (by bus, with chopsticks, in Japanese)",
     "Use と (with, and), も (also) and から…まで (from…until)",
     "Say what exists and where with あります and います"
   ],
   learn:[
    {h:"Particles: the job labels of Japanese", body:[
      {lead:"English shows each word’s job mostly by word order and small words like “at”, “to” and “with”. Japanese puts a [[particle]] after the noun instead, like a label that says what the noun is doing."},
      "Because the labels travel with the nouns, Japanese word order is fairly free. The verb stays at the end, but the labelled pieces before it can move. A common, neutral order is: topic → time → place → people → object → verb.",
      {table:[["Particle","Core job","Example"],["を","object (Lesson 3)","パンを[食]{た}べます。"],["に","point in time; destination; where something is","[六時]{ろくじ}に[起]{お}きます。"],["へ","direction: towards","[駅]{えき}へ[行]{い}きます。"],["で","place of an action; means","[図書館]{としょかん}で[勉強]{べんきょう}します。"],["と","with (a person); and (between nouns)","[友]{とも}だちと[行]{い}きます。"],["も","also, too","[私]{わたし}も[行]{い}きます。"],["から","from (time or place)","[九時]{くじ}から"],["まで","until, as far as","[五時]{ごじ}まで"]]},
      {ex:"[私]{わたし}は[土曜日]{どようび}に[友]{とも}だちとバスで[公園]{こうえん}へ[行]{い}きます。\nOn Saturday I’m going to the park by bus with a friend.", label:"Five particles in one sentence"},
      "In that sentence は marks the topic, に the time, と the person, で the means and へ the direction. Read it again and point to each label."
    ]},
    {h:"に: a point in time, and a destination", body:[
      "**Time.** に marks a specific point in time: clock times, dates, months, years.",
      {ex:"[六時]{ろくじ}に[起]{お}きます。 I get up at six.\n[三月]{さんがつ}に[日本]{にほん}へ[行]{い}きます。 I’m going to Japan in March.\n[土曜日]{どようび}に[会]{あ}いましょう。 Let’s meet on Saturday.", label:"に with time"},
      "With days of the week, に is normal, though people sometimes drop it in conversation.",
      "But **time words that are relative to now take no particle**: [今日]{きょう} (today), [明日]{あした} (tomorrow), [昨日]{きのう} (yesterday), [今]{いま} (now), [毎日]{まいにち} (every day), [毎朝]{まいあさ} (every morning), [来週]{らいしゅう} (next week), [先週]{せんしゅう} (last week).",
      {table:[["With に","No particle"],["[六時]{ろくじ}に[起]{お}きます。","[毎朝]{まいあさ}[起]{お}きます。"],["[三月]{さんがつ}に[行]{い}きます。","[来週]{らいしゅう}[行]{い}きます。"],["[土曜日]{どようび}に[会]{あ}います。","[明日]{あした}[会]{あ}います。"]]},
      "**Destination.** With verbs of movement, に marks where you arrive: 「[学校]{がっこう}に[行]{い}きます。」「[日本]{にほん}に[来]{き}ました。」「うちに[帰]{かえ}ります。」",
      "に has a third job, marking where something is, which you will meet with あります and います at the end of this lesson."
    ]},
    {h:"へ: towards", body:[
      "The particle へ is pronounced **え**, another particle spelled in the old way (like は read わ and を read お). It marks the direction of movement: towards.",
      {ex:"[駅]{えき}へ[行]{い}きます。 I’m going to the station.\n[国]{くに}へ[帰]{かえ}ります。 I’m going back to my country.", label:"へ with movement"},
      "With [行]{い}きます, [来]{き}ます and [帰]{かえ}ります, に and へ are both correct, and in everyday speech the difference is small: へ stresses the direction, に the arrival point.",
      "But へ can only replace に when に shows direction. It can’t mark time or where something is:",
      {table:[["Sentence","へ instead of に?"],["[駅]{えき}に[行]{い}きます。","✓ [駅]{えき}へ[行]{い}きます。"],["[六時]{ろくじ}に[起]{お}きます。","✗ time takes に only"],["[部屋]{へや}にいます。","✗ where something is takes に only"]]}
    ]},
    {h:"で: where the action happens, and how", body:[
      "**Place of action.** で marks the place where you do something: study, eat, work, wait, play.",
      {ex:"[図書館]{としょかん}で[勉強]{べんきょう}します。 I study at the library.\nレストランで[昼]{ひる}ごはんを[食]{た}べます。 I have lunch at a restaurant.\n[駅]{えき}で[友]{とも}だちを[待]{ま}ちます。 I wait for a friend at the station.", label:"で for the place of an action"},
      "**Means.** で also marks the means, tool or language: “by”, “with”, “in”.",
      {ex:"バスで[行]{い}きます。 I go by bus.\nはしで[食]{た}べます。 I eat with chopsticks.\n[日本語]{にほんご}で[話]{はな}します。 I speak in Japanese.", label:"で for means"},
      "**The test for に or で:** is something **happening** there (an action verb), or is something simply **there** (あります, います)? Action: で. Being there: に.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">に or で? And から…まで</text><rect class="d-lup" x="8" y="30" width="158" height="150" rx="10" stroke-width="2"/><text x="87" y="54" text-anchor="middle">に: being there</text><rect class="d-panel" x="24" y="66" width="126" height="54" rx="6" stroke-width="1.5"/><text x="87" y="98" text-anchor="middle">ねこ</text><text x="87" y="146" text-anchor="middle">へやに</text><text x="87" y="166" text-anchor="middle">ねこがいます</text><rect class="d-sage" x="174" y="30" width="158" height="150" rx="10" stroke-width="2"/><text x="253" y="54" text-anchor="middle">で: doing there</text><rect class="d-panel" x="190" y="66" width="126" height="54" rx="6" stroke-width="1.5"/><text x="253" y="98" text-anchor="middle">ほんをよむ</text><text x="253" y="146" text-anchor="middle">へやで</text><text x="253" y="166" text-anchor="middle">ほんをよみます</text><text x="170" y="208" text-anchor="middle">くじからごじまで</text><path class="d-ink" d="M40 236 L300 236" stroke-width="3"/><circle class="d-inkf" cx="40" cy="236" r="6"/><circle class="d-inkf" cx="300" cy="236" r="6"/><text x="40" y="262" text-anchor="middle">くじ</text><text class="s" x="40" y="280" text-anchor="middle">から (from)</text><text x="300" y="262" text-anchor="middle">ごじ</text><text class="s" x="300" y="280" text-anchor="middle">まで (until)</text><text class="s" x="170" y="262" text-anchor="middle">also for places:</text><text class="s" x="170" y="280" text-anchor="middle">うちからえきまで</text></svg>', alt:"Left panel: に, being there. A cat in a room: へやに ねこがいます. Right panel: で, doing there. Reading a book in a room: へやで ほんをよみます. Below, a line from くじ (から, from) to ごじ (まで, until), with a note that から and まで also work for places: うちからえきまで.", cap:"The same room takes に when something is there, and で when something happens there."},
      {warn:"“On foot” is not 「✗ [足]{あし}で」. Japanese says [歩]{ある}いて[行]{い}きます (“I go walking”), using the て-form you will learn in Unit 3."}
    ]},
    {h:"と and も", body:[
      "**と: with, and.** After a person, と means “with”: 「[友]{とも}だちと[映画]{えいが}を[見]{み}ます。」 (“I watch a film with a friend.”). Between nouns, と means “and”, and it lists everything: 「パンとたまごを[買]{か}いました。」 (“I bought bread and eggs”, and nothing else).",
      "と joins **nouns only**. It can’t join verbs, adjectives or whole sentences: 「✗ [食]{た}べますと[飲]{の}みます」 is wrong. And “by myself” is ひとりで, with で, not と.",
      "**も: also, too.** も replaces は, が and を:",
      {table:[["First sentence","With も","Meaning"],["アナさんは[学生]{がくせい}です。","[私]{わたし}も[学生]{がくせい}です。","I’m a student too. (も replaces は)"],["[魚]{さかな}を[食]{た}べます。","[肉]{にく}も[食]{た}べます。","I eat meat too. (も replaces を)"],["[駅]{えき}に[行]{い}きます。","[銀行]{ぎんこう}にも[行]{い}きます。","I’m going to the bank too. (も follows に)"]]},
      "With other particles, such as に, で and と, も doesn’t replace them; it comes after them: [銀行]{ぎんこう}にも, [図書館]{としょかん}でも, [友]{とも}だちとも.",
      "With a question word and a negative verb, も makes “nothing” or “nobody”: 「[何]{なに}も[食]{た}べませんでした。」 (“I didn’t eat anything.”), 「だれもいません。」 (“Nobody is there.”)."
    ]},
    {h:"から and まで: from… until…", body:[
      "から means “from” and まで means “until” or “as far as”. They work for time and for places, together or alone ([[particle-kara-made]]).",
      {ex:"[九時]{くじ}から[五時]{ごじ}まで[働]{はたら}きます。 I work from nine to five.\n[駅]{えき}からうちまで[歩]{ある}きます。 I walk from the station to my home.\n[授業]{じゅぎょう}は[九時]{くじ}からです。 Class starts at nine (literally “is from nine”).\nこの[銀行]{ぎんこう}は[三時]{さんじ}までです。 This bank is open until three.", label:"から and まで"},
      "As the last two examples show, から and まで can go straight before です.",
      "With days, から…まで includes both ends: [月曜日]{げつようび}から[金曜日]{きんようび}まで means Monday to Friday, all five days.",
      {tip:"から has another meaning, “because”, which comes after a whole sentence, not a noun. Unit 3 teaches it."}
    ]},
    {h:"あります and います: there is, there are", body:[
      "Japanese has two verbs for “there is” or “is (somewhere)”. The choice depends on what exists ([[aru-iru]]):",
      {table:[["Verb","Used for","Example"],["います (いる)","people and animals: living things that move by themselves","[公園]{こうえん}に[犬]{いぬ}がいます。"],["あります (ある)","things, plants, buildings, and events","[机]{つくえ}の[上]{うえ}に[本]{ほん}があります。"]]},
      "Two patterns, linked to Lesson 2’s は and が:",
      {ol:["**Place に thing が あります/います** introduces something new: 「[部屋]{へや}にねこがいます。」 (“There’s a cat in the room.”)","**Thing は place に あります/います** says where a known thing is: 「ねこは[部屋]{へや}にいます。」 (“The cat is in the room.”)"]},
      "Positions use の + a position word + に: [机]{つくえ}の[上]{うえ}に (on the desk), [箱]{はこ}の[中]{なか}に (in the box), [駅]{えき}の[前]{まえ}に (in front of the station), [銀行]{ぎんこう}の[隣]{となり}に (next to the bank).",
      "The negatives are ありません and いません: 「[今]{いま}、[田中]{たなか}さんはいません。」 (“Ms Tanaka isn’t here now.”). In Unit 3 you’ll learn the plain negative of ある, which is irregular: ない (never ✗ あらない).",
      "The same verbs say what you **have**: 「[時間]{じかん}があります。」 (“I have time.”), 「[兄]{あに}がいます。」 (“I have an older brother.”), 「[車]{くるま}がありません。」 (“I don’t have a car.”).",
      "Events use あります, and the place of an event takes で, because something happens there: 「[駅]{えき}の[前]{まえ}でお[祭]{まつ}りがあります。」 (“There’s a festival in front of the station.”). More in {{existence-aru-iru}}."
    ]},
    {h:"Common mistakes", body:[
      {table:[["Mistake","Better","Why"],["✗ [図書館]{としょかん}に[勉強]{べんきょう}します。","[図書館]{としょかん}で[勉強]{べんきょう}します。","Studying is an action: で."],["✗ [部屋]{へや}でねこがいます。","[部屋]{へや}にねこがいます。","Being somewhere: に."],["✗ [明日]{あした}に[行]{い}きます。","[明日]{あした}[行]{い}きます。","Time words relative to now take no particle."],["✗ [六時]{ろくじ}へ[起]{お}きます。","[六時]{ろくじ}に[起]{お}きます。","Time takes に; へ is only for direction."],["✗ [私]{わたし}はも[行]{い}きます。","[私]{わたし}も[行]{い}きます。","も replaces は."],["✗ [犬]{いぬ}があります。","[犬]{いぬ}がいます。","Animals take います."]]},
      "All of these particles are summarised in {{particles-o-ni-de}}.",
      {terms:["particle","object-marker","particle-mo","particle-kara-made","aru-iru"]}
    ]}
   ],
   try:[
    {id:"e3u2-l4-x1", type:"mcq", q:"「[毎朝]{まいあさ}[六時]{ろくじ}＿＿[起]{お}きます。」 (“I get up at six every morning.”)", options:[
      {t:"に", ok:true, why:"Right. A clock time is a point in time, so it takes に. [毎朝]{まいあさ} takes no particle."},
      {t:"で", why:"で marks the place of an action or the means. A clock time takes に."},
      {t:"へ", why:"へ shows direction of movement. It can’t mark time."},
      {t:"を", why:"を marks the object of a verb. [起]{お}きる (get up) has no object, and [六時]{ろくじ} is a time."}
    ]},
    {id:"e3u2-l4-x2", type:"sort", q:"Which particle goes in the blank: に or で?", buckets:["に","で"], items:[
      {t:"[図書館]{としょかん}＿[本]{ほん}を[読]{よ}みます。", b:1, why:"Reading is an action, so the place takes で."},
      {t:"[図書館]{としょかん}＿[田中]{たなか}さんがいます。", b:0, why:"います says where someone is, so the place takes に."},
      {t:"[十時]{じゅうじ}＿[寝]{ね}ます。", b:0, why:"A clock time takes に."},
      {t:"バス＿[駅]{えき}へ[行]{い}きます。", b:1, why:"The bus is the means of travel: で."},
      {t:"[机]{つくえ}の[上]{うえ}＿かぎがあります。", b:0, why:"あります says where something is: に."},
      {t:"レストラン＿[昼]{ひる}ごはんを[食]{た}べます。", b:1, why:"Eating is an action, so the place takes で."},
      {t:"はし＿[食]{た}べます。", b:1, why:"Chopsticks are the tool: で."},
      {t:"[三月]{さんがつ}＿[日本]{にほん}へ[行]{い}きます。", b:0, why:"A month is a point in time: に."}
    ]},
    {id:"e3u2-l4-x3", type:"sort", q:"Each sentence uses に. Could へ replace it?", buckets:["Yes, へ also works","No, only に"], items:[
      {t:"[駅]{えき}に[行]{い}きます。", b:0, why:"に shows the destination of [行]{い}く, so へ also works: [駅]{えき}へ[行]{い}きます."},
      {t:"[国]{くに}に[帰]{かえ}ります。", b:0, why:"A destination with [帰]{かえ}る: へ also works."},
      {t:"[日本]{にほん}に[来]{き}ました。", b:0, why:"A destination with [来]{く}る: へ also works."},
      {t:"[三時]{さんじ}に[来]{き}ます。", b:1, why:"Here に marks a time (three o’clock). へ can’t mark time."},
      {t:"[部屋]{へや}にいます。", b:1, why:"Here に marks where someone is. へ can’t do that."},
      {t:"[月曜日]{げつようび}に[会]{あ}いましょう。", b:1, why:"Monday is a time, so only に works."}
    ]},
    {id:"e3u2-l4-x4", type:"mcq", q:"You want to say “I’m going to the cinema with Mei.” 「メイさん＿＿[映画館]{えいがかん}へ[行]{い}きます。」", options:[
      {t:"と", ok:true, why:"Right. と after a person means “with”."},
      {t:"が", why:"が would make Mei the subject: “Mei is going to the cinema.” The sentence is about going with her."},
      {t:"で", why:"で marks a place of action or a means. A person you go with takes と."},
      {t:"を", why:"を marks an object. Mei is the person you go with, not the object of [行]{い}く."}
    ]},
    {id:"e3u2-l4-x5", type:"mcq", q:"Ana says 「[私]{わたし}はコーヒーを[飲]{の}みます。」. You drink coffee too, just like Ana. What do you say?", options:[
      {t:"[私]{わたし}もコーヒーを[飲]{の}みます。", ok:true, why:"Right. も replaces は: “I drink coffee too.”"},
      {t:"[私]{わたし}はもコーヒーを[飲]{の}みます。", why:"も replaces は; the two never stand together like this."},
      {t:"[私]{わたし}もはコーヒーを[飲]{の}みます。", why:"も replaces は, so は disappears."},
      {t:"[私]{わたし}はコーヒーも[飲]{の}みます。", why:"This is correct Japanese, but it means “I drink coffee too” in the sense of “as well as other drinks”. Here you want “I, like Ana, drink coffee”, so も goes after [私]{わたし}."}
    ]},
    {id:"e3u2-l4-x6", type:"mcq", q:"Which sentence correctly says “There is a dog in the park”?", options:[
      {t:"[公園]{こうえん}に[犬]{いぬ}がいます。", ok:true, why:"Right. Place に, the dog が, and います because a dog is an animal."},
      {t:"[公園]{こうえん}に[犬]{いぬ}があります。", why:"あります is for things, plants and events. Animals take います."},
      {t:"[公園]{こうえん}で[犬]{いぬ}がいます。", why:"Where something simply is takes に. で is for the place of an action."},
      {t:"[公園]{こうえん}に[犬]{いぬ}をいます。", why:"います has no object. The thing that exists takes が."}
    ]},
    {id:"e3u2-l4-x7", type:"spot", q:"Tomás wrote about his weekend. Tap the particles that are **wrong**.", ask:"is wrong", parts:[
      "[土曜日]{どようび}",{t:"に", flag:false, why:"Correct. A day of the week normally takes に."},"、[友]{とも}だち",{t:"と", flag:false, why:"Correct. と after a person: with a friend."},"[公園]{こうえん}",{t:"に", flag:true, why:"Wrong. Playing tennis is an action, so the place takes で: [公園]{こうえん}でテニスをしました."},"テニスをしました。それから、バス",{t:"で", flag:false, why:"Correct. The bus is the means: で."},"うち",{t:"へ", flag:false, why:"Correct. へ shows direction with [帰]{かえ}る (に would also be fine)."},"[帰]{かえ}りました。[日曜日]{にちようび}はうち",{t:"で", flag:false, why:"Correct. Reading is an action, so the place takes で."},"[本]{ほん}",{t:"に", flag:true, why:"Wrong. [本]{ほん} is the object of [読]{よ}む, so it takes を: [本]{ほん}を[読]{よ}みました."},"[読]{よ}みました。"
    ]},
    {id:"e3u2-l4-x8", type:"number", q:"A café sign says 「[月曜日]{げつようび}から[金曜日]{きんようび}まで」. [月曜日]{げつようび} is Monday and [金曜日]{きんようび} is Friday. On how many days a week is the café open?", answer:5, tol:0, unit:"days", why:"から…まで includes both ends: Monday, Tuesday, Wednesday, Thursday and Friday. That is 5 days.", wrongs:[{v:4, tol:0, why:"4 is Friday minus Monday, which counts the gaps between days. から…まで includes both Monday and Friday, so add one: 5."},{v:2, tol:0, why:"The sign names two days, but から…まで means the whole span from Monday to Friday: 5 days."}]}
   ],
   apply:{
    intro:"Turn the particles into sentences about your own week.",
    tasks:[
     {t:"Write your week with particles", how:[
       "Write six sentences about your week. Use each of these at least once: に (time), に or へ (destination), で (place of action), で (means), と, and から…まで.",
       "Circle every particle and write its job above it (time, destination, place of action, means, with, from, until)."
     ], write:"[月曜日]{げつようび}に… [九時]{くじ}から…まで… …で… …と…"},
     {t:"Map one room with あります and います", how:[
       "Pick one room where you are now.",
       "Write five sentences with あります or います and a position word: [机]{つくえ}の[上]{うえ}にスマホがあります。",
       "If there is a person or a pet, use います for them."
     ], write:"…の[上]{うえ}に…があります。…の[中]{なか}に…"},
     {t:"Spot に and で in real Japanese", how:[
       "Find any short Japanese text: a sign, a shop’s website, or a free graded reader.",
       "Copy two sentences with に and two with で, and say which job each one has."
     ], write:"に: … (job) で: … (job)"}
    ],
    proof:"Six sentences about your week with circled particles and their jobs, five sentences describing a room with あります and います, and four particles found in real Japanese with their jobs."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Particles used with verbs”", note:"を, に, へ and で with verbs."},
    {book:"irodori", where:"Starter, topic “Homes and Workplaces”, Lesson 7 “There are four rooms.”", note:"Saying what there is with あります and います, with audio."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e3u2-l5", title:"い-adjectives and な-adjectives", minutes:55,
   hook:{q:"Which is the correct polite way to say “It was cold yesterday”?", options:["[昨日]{きのう}は[寒]{さむ}いでした。","[昨日]{きのう}は[寒]{さむ}かったです。","[昨日]{きのう}は[寒]{さむ}でした。","[昨日]{きのう}は[寒]{さむ}いだったです。"], answer:1, reveal:"**[昨日]{きのう}は[寒]{さむ}かったです。** Adjectives that end in い carry their own tense: [寒]{さむ}い becomes [寒]{さむ}かった for the past, and です only adds politeness. 「[寒]{さむ}いでした」 is one of the most common mistakes learners make, because it looks like the noun pattern ([休]{やす}みでした). This lesson sorts out both kinds of adjective."},
   goals:[
     "Tell い-adjectives from な-adjectives, including look-alikes such as きれい and きらい",
     "Use both kinds before nouns ([高]{たか}い[山]{やま}, [静]{しず}かな[町]{まち}) and at the end of a sentence",
     "Make the four polite forms of each kind: present, negative, past and past negative",
     "Use the irregular いい correctly (よくない, よかった)",
     "Talk about likes and dislikes with [好]{す}き and きらい, and soften with あまり～ない"
   ],
   learn:[
    {h:"Two kinds of adjectives", body:[
      {lead:"Japanese adjectives come in two kinds. They mean the same sort of things (big, quiet, new, famous), but they change their endings in different ways."},
      {table:[["","[[i-adjective|い-adjectives]]","[[na-adjective|な-adjectives]]"],["Dictionary form","ends in い: [高]{たか}い, [新]{あたら}しい","no ending: [静]{しず}か, [有名]{ゆうめい}"],["Before a noun","[高]{たか}い[山]{やま} (a tall mountain)","[静]{しず}かな[町]{まち} (a quiet town)"],["End of a sentence","[山]{やま}は[高]{たか}いです。","[町]{まち}は[静]{しず}かです。"],["How they change","the adjective itself changes","です changes, as with nouns"]]},
      "Before a noun, い-adjectives go straight on, and な-adjectives add な (that is where the name comes from). At the end of a sentence, there is **no な**: 「✗ [町]{まち}は[静]{しず}かなです」 is wrong.",
      {table:[["い-adjectives","Meaning","な-adjectives","Meaning"],["[大]{おお}きい","big","[静]{しず}か","quiet"],["[新]{あたら}しい","new","[元気]{げんき}","well, lively"],["[高]{たか}い","tall; expensive","[有名]{ゆうめい}","famous"],["[安]{やす}い","cheap","[便利]{べんり}","convenient"],["おいしい","tasty","きれい","pretty; clean"],["[楽]{たの}しい","fun","[好]{す}き","liked"]]},
      "Dictionaries show な-adjectives without な. Learner dictionaries such as Jisho.org label them “na-adjective”; Japanese dictionaries call them [形容動詞]{けいようどうし}, and い-adjectives [形容詞]{けいようし}."
    ]},
    {h:"い-adjectives: four polite forms", body:[
      "い-adjectives change by themselves. Take off the final い and add the new ending. Then add です to be polite.",
      {table:[["","Form","Meaning"],["Present","[高]{たか}いです","is expensive"],["Negative","[高]{たか}くないです","is not expensive"],["Past","[高]{たか}かったです","was expensive"],["Past negative","[高]{たか}くなかったです","was not expensive"]]},
      "There is a second, slightly more formal set of negatives that uses ありません: [高]{たか}くありません (is not) and [高]{たか}くありませんでした (was not). Both sets are polite and correct.",
      {key:"With い-adjectives, the tense lives in the adjective. です never changes: it only adds politeness. So [高]{たか}かったです, never ✗ [高]{たか}いでした."},
      {ex:"このかばんは[安]{やす}いです。 This bag is cheap.\n[昨日]{きのう}は[暑]{あつ}かったです。 It was hot yesterday.\nテストは[難]{むずか}しくなかったです。 The test wasn’t difficult.", label:"In sentences"}
    ]},
    {h:"いい: the one irregular い-adjective", body:[
      "いい (good) comes from an older word, よい, and every changed form is built on よ:",
      {table:[["","Form","Meaning"],["Present","いいです","is good"],["Negative","よくないです","is not good"],["Past","よかったです","was good"],["Past negative","よくなかったです","was not good"]]},
      "So 「✗ いくないです」 and 「✗ いかったです」 are wrong. The same is true for words that end in いい, such as かっこいい (cool, good-looking): かっこよくないです.",
      "よい itself is still used, especially in writing and formal speech: 「よい[天気]{てんき}です。」",
      {ex:"「[映画]{えいが}はどうでしたか。」\n「とてもよかったです。」\n“How was the film?” “It was very good.”", label:"A very common exchange"}
    ]},
    {h:"な-adjectives: they change like nouns", body:[
      "な-adjectives don’t change themselves. Instead, です changes, exactly as it does after a noun in Lesson 1:",
      {table:[["","Form","Meaning"],["Present","[静]{しず}かです","is quiet"],["Negative","[静]{しず}かではありません / じゃありません","is not quiet"],["Past","[静]{しず}かでした","was quiet"],["Past negative","[静]{しず}かではありませんでした / じゃありませんでした","was not quiet"]]},
      "As with nouns, you will also hear じゃないです (is not) and じゃなかったです (was not) in polite conversation.",
      {ex:"この[町]{まち}は[静]{しず}かです。 This town is quiet.\n[昔]{むかし}、この[町]{まち}は[有名]{ゆうめい}じゃありませんでした。 This town wasn’t famous in the past.\n[昨日]{きのう}は[暇]{ひま}でした。 I was free yesterday.", label:"In sentences"},
      {fig:'<svg viewBox="0 0 340 384"><text x="170" y="18" text-anchor="middle">Four polite forms</text><rect class="d-rose" x="8" y="30" width="158" height="34" rx="8" stroke-width="2"/><text x="87" y="52" text-anchor="middle">い: たかい</text><rect class="d-sage" x="174" y="30" width="158" height="34" rx="8" stroke-width="2"/><text x="253" y="52" text-anchor="middle">な: しずか</text><rect class="d-panel" x="8" y="72" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="18" y="90">present</text><text x="87" y="114" text-anchor="middle">たかいです</text><rect class="d-panel" x="174" y="72" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="184" y="90">present</text><text x="253" y="114" text-anchor="middle">しずかです</text><rect class="d-panel" x="8" y="134" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="18" y="152">negative</text><text x="87" y="176" text-anchor="middle">たかくないです</text><rect class="d-panel" x="174" y="134" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="184" y="152">negative</text><text x="253" y="176" text-anchor="middle">しずかじゃありません</text><rect class="d-panel" x="8" y="196" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="18" y="214">past</text><text x="87" y="238" text-anchor="middle">たかかったです</text><rect class="d-panel" x="174" y="196" width="158" height="54" rx="6" stroke-width="1.5"/><text class="s" x="184" y="214">past</text><text x="253" y="238" text-anchor="middle">しずかでした</text><rect class="d-panel" x="8" y="258" width="158" height="74" rx="6" stroke-width="1.5"/><text class="s" x="18" y="276">past negative</text><text x="87" y="308" text-anchor="middle">たかくなかったです</text><rect class="d-panel" x="174" y="258" width="158" height="74" rx="6" stroke-width="1.5"/><text class="s" x="184" y="276">past negative</text><text x="253" y="300" text-anchor="middle">しずかじゃ</text><text x="253" y="320" text-anchor="middle">ありませんでした</text><text class="s" x="87" y="356" text-anchor="middle">the adjective changes</text><text class="s" x="253" y="356" text-anchor="middle">です changes</text><text class="s" x="170" y="378" text-anchor="middle">いい → よくない, よかった, よくなかった</text></svg>', alt:"Two columns. Left, the い-adjective たかい: たかいです, たかくないです, たかかったです, たかくなかったです; the adjective itself changes. Right, the な-adjective しずか: しずかです, しずかじゃありません, しずかでした, しずかじゃありませんでした; です changes. A note at the bottom: いい becomes よくない, よかった, よくなかった.", cap:"い-adjectives change their own ending. な-adjectives keep their shape and let です change, like nouns."}
    ]},
    {h:"Look-alikes: きれい, きらい and friends", body:[
      "A few な-adjectives end in い, which makes them look like い-adjectives. The most common are **きれい** (pretty; clean), **きらい** ([嫌]{きら}い, disliked) and **[有名]{ゆうめい}** (famous). They follow the な pattern:",
      {table:[["✗ Wrong","✓ Right"],["きれくないです","きれいじゃありません"],["きれかったです","きれいでした"],["きれい[部屋]{へや}","きれいな[部屋]{へや}"]]},
      "There is no rule you can see from the outside, so learn these few by heart. When in doubt, look the word up: a dictionary will say “na-adjective”.",
      {h:"[好]{す}き and きらい: likes and dislikes"},
      "[好]{す}き (liked) and きらい (disliked) are な-adjectives, and the thing you like or dislike takes **が**, not を:",
      {ex:"[私]{わたし}はねこが[好]{す}きです。 I like cats.\nケンジさんは[魚]{さかな}がきらいです。 Kenji doesn’t like fish.\n[好]{す}きな[食]{た}べ[物]{もの}は[何]{なん}ですか。 What’s your favourite food?", label:"が with すき and きらい"},
      "きらい is a strong word, like “hate” in some contexts. To be gentle, many people say あまり[好]{す}きじゃありません (“I don’t like it much”) instead.",
      {h:"[大]{おお}きな and [小]{ちい}さな"},
      "[大]{おお}きい and [小]{ちい}さい are い-adjectives, but you will also see [大]{おお}きな and [小]{ちい}さな before nouns: [大]{おお}きな[家]{いえ} (a big house). These are special pre-noun forms, not な-adjectives: you can’t say 「✗ [大]{おお}きです」. At the end of a sentence, always use [大]{おお}きいです."
    ]},
    {h:"Adjectives in conversation", body:[
      "**とても** means “very” and goes with positive sentences: 「とても[楽]{たの}しかったです。」",
      "**あまり** means “not very” and needs a **negative** ending: 「このカレーはあまり[辛]{から}くないです。」 (“This curry isn’t very spicy.”). 「✗ あまり[辛]{から}いです」 is wrong.",
      "**どうですか** asks “How is it?”, and どうでしたか asks “How was it?”:",
      {ex:"「[日本語]{にほんご}の[勉強]{べんきょう}はどうですか。」\n「[難]{むずか}しいです。でも、[楽]{たの}しいです。」\n“How are your Japanese studies going?” “They’re hard. But they’re fun.”", label:"どうですか"},
      "To answer a yes–no question about an adjective, repeat the adjective; そうです doesn’t fit here:",
      {table:[["Question","Yes","No"],["[寒]{さむ}いですか。","はい、[寒]{さむ}いです。","いいえ、[寒]{さむ}くないです。"],["[暇]{ひま}ですか。","はい、[暇]{ひま}です。","いいえ、[暇]{ひま}じゃありません。"]]},
      {h:"Learn them in pairs"},
      "Many common adjectives come in pairs of opposites. Learning both at once halves the work, and the pairs make good flashcards:",
      {table:[["Adjective","Opposite"],["[大]{おお}きい (big)","[小]{ちい}さい (small)"],["[高]{たか}い (expensive; tall)","[安]{やす}い (cheap) / [低]{ひく}い (low)"],["[新]{あたら}しい (new)","[古]{ふる}い (old, of things)"],["[暑]{あつ}い (hot, of weather)","[寒]{さむ}い (cold, of weather)"],["[好]{す}き (liked)","きらい (disliked)"],["にぎやか (lively)","[静]{しず}か (quiet)"]]},
      "Watch [高]{たか}い: it means “expensive” for prices and “tall” or “high” for height, so its opposite depends on the meaning. And [古]{ふる}い is for things, not people: for an older person, Japanese uses other words.",
      {ex:"[私]{わたし}の[町]{まち}は[小]{ちい}さいです。でも、とてもにぎやかです。[駅]{えき}の[前]{まえ}に[新]{あたら}しいカフェがあります。コーヒーは[安]{やす}くないですが、おいしいです。\nMy town is small. But it’s very lively. There’s a new café in front of the station. The coffee isn’t cheap, but it’s good.", label:"Describing a place"},
      "In the last sentence, が after です means “but”, joining two sentences. It is a polite, very common way to contrast two facts.",
      "To join two adjectives (“cheap and tasty”) you need the て-form, [安]{やす}くて, which Unit 3 teaches ({{te-form}})."
    ]},
    {h:"Common mistakes, and where to go next", body:[
      {table:[["Mistake","Better","Why"],["✗ [寒]{さむ}いでした","[寒]{さむ}かったです","い-adjectives carry their own past."],["✗ いくないです","よくないです","いい changes on よ."],["✗ [町]{まち}は[静]{しず}かなです","[町]{まち}は[静]{しず}かです","No な at the end of a sentence."],["✗ [静]{しず}か[町]{まち}","[静]{しず}かな[町]{まち}","な-adjectives need な before a noun."],["✗ きれくないです","きれいじゃありません","きれい is a な-adjective."],["✗ ねこを[好]{す}きです","ねこが[好]{す}きです","The thing you like takes が."],["✗ あまり[高]{たか}いです","あまり[高]{たか}くないです","あまり needs a negative."]]},
      "You have now met the core of N5 grammar for polite sentences: nouns with です, questions, pointing words, verbs with ます, eight particles, あります and います, and two kinds of adjectives. The full tables are in {{i-and-na-adjectives}} and the other Codex entries for this unit.",
      "Unit 3 builds on all of this: the て-form, requests and permission, ～ています, plain forms, counters, numbers and dates. Unit 4 teaches the N5 kanji and vocabulary you have been reading with furigana.",
      "The words in these lessons will come back again and again. A few minutes of daily review in the Kanji Lab keeps them fresh, and it is normal to need several reviews before a word sticks.",
      {lab:"kl-n5-vocab", t:"Practise: N5 vocabulary, a few minutes a day"},
      {lab:"kl-n5", t:"Practise: the N5 kanji you have been reading with furigana"},
      {terms:["i-adjective","na-adjective"]}
    ]}
   ],
   try:[
    {id:"e3u2-l5-x1", type:"sort", q:"Sort these adjectives: い-adjective or な-adjective?", buckets:["い-adjective","な-adjective"], items:[
      {t:"[高]{たか}い", b:0, why:"An ordinary い-adjective: [高]{たか}くない, [高]{たか}かった."},
      {t:"[静]{しず}か", b:1, why:"No final い: a な-adjective, [静]{しず}かな[町]{まち}."},
      {t:"きれい", b:1, why:"A look-alike: it ends in い but is a な-adjective, きれいな[部屋]{へや}."},
      {t:"[新]{あたら}しい", b:0, why:"An ordinary い-adjective: [新]{あたら}しくない."},
      {t:"[有名]{ゆうめい}", b:1, why:"A な-adjective: [有名]{ゆうめい}な[人]{ひと}."},
      {t:"[寒]{さむ}い", b:0, why:"An ordinary い-adjective: [寒]{さむ}かった."},
      {t:"きらい", b:1, why:"A look-alike: きらい is a な-adjective, きらいな[食]{た}べ[物]{もの}."},
      {t:"[大]{おお}きい", b:0, why:"An い-adjective: [大]{おお}きくない. ([大]{おお}きな is a special pre-noun form, not a な-adjective.)"}
    ]},
    {id:"e3u2-l5-x2", type:"mcq", q:"How do you say “The film was interesting” politely?", options:[
      {t:"[映画]{えいが}はおもしろかったです。", ok:true, why:"Right. おもしろい is an い-adjective: drop い, add かった, then です."},
      {t:"[映画]{えいが}はおもしろいでした。", why:"い-adjectives carry their own past. です doesn’t change: おもしろかったです."},
      {t:"[映画]{えいが}はおもしろでした。", why:"This treats おもしろい like a な-adjective. It is an い-adjective: おもしろかったです."},
      {t:"[映画]{えいが}はおもしろかったでした。", why:"The past is marked twice. Only the adjective changes: おもしろかったです."}
    ]},
    {id:"e3u2-l5-x3", type:"mcq", q:"What is the polite negative of いい (good)?", options:[
      {t:"よくないです", ok:true, why:"Right. いい changes on its older form よい: よくないです."},
      {t:"いくないです", why:"いい is irregular: all its changed forms are built on よ."},
      {t:"いいじゃありません", why:"じゃありません is for nouns and な-adjectives. いい is an い-adjective."},
      {t:"いいないです", why:"い-adjectives drop the final い and add くない, and いい also changes to よ: よくないです."}
    ]},
    {id:"e3u2-l5-x4", type:"match", q:"Match each Japanese phrase to its meaning.", pairs:[
      ["[静]{しず}かでした","was quiet","な-adjective + でした: the past."],
      ["[静]{しず}かじゃありません","is not quiet","な-adjective + じゃありません: the present negative."],
      ["[静]{しず}かじゃありませんでした","was not quiet","な-adjective + じゃありませんでした: the past negative."],
      ["[静]{しず}かな[町]{まち}","a quiet town","Before a noun, a な-adjective takes な."],
      ["[町]{まち}は[静]{しず}かです。","The town is quiet.","At the end of a sentence there is no な: [静]{しず}かです."]
    ]},
    {id:"e3u2-l5-x5", type:"mcq", q:"Which phrase means “a quiet room”?", options:[
      {t:"[静]{しず}かな[部屋]{へや}", ok:true, why:"Right. Before a noun, a な-adjective takes な."},
      {t:"[静]{しず}か[部屋]{へや}", why:"な is missing. [静]{しず}か is a な-adjective, so it needs な before [部屋]{へや}."},
      {t:"[静]{しず}かい[部屋]{へや}", why:"[静]{しず}か isn’t an い-adjective, so there is no い to add."},
      {t:"[静]{しず}かの[部屋]{へや}", why:"の joins two nouns. [静]{しず}か is a な-adjective, so it takes な."}
    ]},
    {id:"e3u2-l5-x6", type:"order", q:"Put the steps in order to make the polite past negative of [高]{たか}い (expensive).", items:[
      {t:"Start from the dictionary form: [高]{たか}い", why:"Every form is built from the dictionary form."},
      {t:"Take off the final い: [高]{たか}", why:"い-adjectives drop their final い before a new ending."},
      {t:"Add くなかった: [高]{たか}くなかった", why:"くなかった is the past negative ending."},
      {t:"Add です to make it polite: [高]{たか}くなかったです", why:"です goes last and only adds politeness."}
    ]},
    {id:"e3u2-l5-x7", type:"spot", q:"Leila wrote about a trip last week. Tap the adjective forms that are **wrong**.", ask:"is wrong", parts:[
      "[町]{まち}は",{t:"にぎやかでした", flag:false, why:"Correct. にぎやか (lively) is a な-adjective: にぎやかでした."},"。ホテルは",{t:"きれかったです", flag:true, why:"Wrong. きれい is a な-adjective, so its past is きれいでした."},"。でも、[部屋]{へや}は",{t:"[静]{しず}かくなかったです", flag:true, why:"Wrong. [静]{しず}か is a な-adjective: [静]{しず}かじゃありませんでした (or じゃなかったです)."},"。[食]{た}べ[物]{もの}は",{t:"おいしいでした", flag:true, why:"Wrong. おいしい is an い-adjective, so the past is おいしかったです."},"。[人]{ひと}は",{t:"[親切]{しんせつ}でした", flag:false, why:"Correct. [親切]{しんせつ} (kind) is a な-adjective: [親切]{しんせつ}でした."},"。[天気]{てんき}は",{t:"あまりよくなかったです", flag:false, why:"Correct. あまり + a negative, and いい becomes よくなかった."},"。"
    ]},
    {id:"e3u2-l5-x8", type:"mcq", q:"Which sentence means “This curry isn’t very spicy”?", options:[
      {t:"このカレーはあまり[辛]{から}くないです。", ok:true, why:"Right. あまり + a negative means “not very”."},
      {t:"このカレーはあまり[辛]{から}いです。", why:"あまり needs a negative ending. Without one the sentence is wrong."},
      {t:"このカレーはとても[辛]{から}いです。", why:"とても [辛]{から}いです means “This curry is very spicy”: the opposite."},
      {t:"このカレーはあまり[辛]{から}いじゃないです。", why:"じゃないです is the negative for nouns and な-adjectives. [辛]{から}い is an い-adjective: [辛]{から}くないです."}
    ]}
   ],
   apply:{
    intro:"Describe your own world with adjectives. Keep it simple and true.",
    tasks:[
     {t:"Describe your town and your home", how:[
       "Write four sentences about where you live: two with い-adjectives and two with な-adjectives (for example [静]{しず}か, [便利]{べんり}, にぎやか, [大]{おお}きい, [新]{あたら}しい).",
       "Make one of them negative and one past.",
       "Use one adjective before a noun: [静]{しず}かな[町]{まち}, [古]{ふる}い[家]{いえ}."
     ], write:"[私]{わたし}の[町]{まち}は…です。…な…です。…"},
     {t:"Likes and dislikes", how:[
       "Write three things you like with が[好]{す}きです and two things you don’t like much with あまり[好]{す}きじゃありません.",
       "Ask a friend, family member or language partner who agrees: 「[好]{す}きな[食]{た}べ[物]{もの}は[何]{なん}ですか。」 and note the answer."
     ], write:"…が[好]{す}きです。…はあまり[好]{す}きじゃありません。"},
     {t:"Start a daily review habit", how:[
       "Open the Kanji Lab and try the N5 vocabulary deck for five minutes.",
       "Do the same tomorrow and the day after. Notice which words from this unit you already recognise.",
       "Note any word you keep forgetting; it will come back in the review until it sticks."
     ], write:"Day 1… Day 2… Day 3… Words I keep forgetting…"}
    ],
    proof:"Four sentences about your town with both kinds of adjectives (one negative, one past, one before a noun), five likes and dislikes, and notes from three short Kanji Lab sessions."
   },
   read:[
    {book:"taekim", where:"Basic Grammar, “Adjectives”", note:"な-adjectives and い-adjectives, including the irregular いい."},
    {book:"irodori", where:"Starter, topic “Walking around Town”, Lesson 14 “It’s a big building, isn’t it.”", note:"Describing places with adjectives, with audio."}
   ]
  }
  ],
  checkpoint:["e3u2-q02","e3u2-q05","e3u2-q11","e3u2-q15","e3u2-q20","e3u2-q24","e3u2-q27","e3u2-q31","e3u2-q36","e3u2-q38","e3u2-q43","e3u2-q46"],
  codex:[
   {id:"japanese-sentence-basics", title:"Japanese sentence basics: は, です and の", aka:["X は Y です","です","the copula","の (possessive)"], tags:["japanese","grammar","n5"],
    summary:"The first Japanese sentence pattern: a topic marked by は, a comment, and the polite copula です, with its negative and past forms, and の to join nouns.",
    levels:{
     starter:[
      "The most basic Japanese sentence says that one thing is another: 「アナさんは[学生]{がくせい}です。」 (“Ana is a student.”).",
      "It has three parts. **アナさん** is the topic, what you are talking about. **は** is a particle that marks the topic; as a particle it is pronounced わ. **[学生]{がくせい}です** is the comment: です works like “is”, “am” or “are”, and it is polite.",
      "Some things English speakers find surprising: です is the same for I, you, she and they; there are no words for “a” and “the”; most nouns have no plural; and the verb part always comes last.",
      "Japanese also leaves out what is obvious. Once everyone knows you are talking about yourself, you drop [私]{わたし}は: 「はじめまして。アナです。[学生]{がくせい}です。」",
      "Use さん after other people’s names, never after your own.",
      {key:"Topic + は + comment + です. Leave out the topic when it’s clear."}
     ],
     builder:[
      "**Four forms of です.** The ending carries the tense and the negative:",
      {table:[["","Present","Past"],["Affirmative","[学生]{がくせい}です","[学生]{がくせい}でした"],["Negative","[学生]{がくせい}ではありません / じゃありません","[学生]{がくせい}ではありませんでした / じゃありませんでした"]]},
      "ではありません is the most formal and suits writing. じゃ is the spoken short form of では. じゃないです and じゃなかったです are also polite and common in conversation. Don’t add です after ありません.",
      "**Questions.** Add か: 「[学生]{がくせい}ですか。」 Answer noun questions with はい、そうです or いいえ、ちがいます, or repeat the noun ({{question-sentences}}).",
      "**の joins two nouns.** The first noun describes the second: who owns it ([私]{わたし}の[本]{ほん}, my book), what kind it is ([日本語]{にほんご}の[先生]{せんせい}, a teacher of Japanese) or where it belongs ([大学]{だいがく}の[友]{とも}だち, a friend from university). The describing noun always comes first. You can chain の ([私]{わたし}の[友]{とも}だちの[名前]{なまえ}, my friend’s name) and drop the second noun when it is clear: 「[私]{わたし}のです。」 (“It’s mine.”).",
      "**Leaving things out.** After the first sentence, drop what is clear: 「アナです。[学生]{がくせい}です。」 sounds natural; repeating [私]{わたし}は in every sentence does not.",
      "**Names and “you”.** さん goes after other people’s family or given names; [先生]{せんせい} replaces it for teachers and doctors. Instead of あなた, people usually say the listener’s name with さん.",
      {table:[["Japanese","English"],["ケンジさんは[先生]{せんせい}です。","Kenji is a teacher."],["[昨日]{きのう}は[休]{やす}みでした。","Yesterday was a day off."],["サラさんのかばんじゃありません。","It isn’t Sara’s bag."]]}
     ],
     pro:[
      "**Why は is read わ.** Over the centuries, Japanese changed how は sounded in the middle of words, and the particle came to be pronounced わ. The 1946 spelling reform ([現代]{げんだい}かなづかい, revised in 1986 as [現代]{げんだい}[仮名]{かな}[遣]{づか}い) wrote most words as they sound, but kept the particles は, へ and を in their old spelling. That is why the topic particle is written は and read わ.",
      "**です and だ.** です is the polite copula. Its plain partner is だ (「[学生]{がくせい}だ。」), used in casual speech and some writing; Unit 5 teaches it. Academic writing uses である ({{desu-masu-and-dearu}}).",
      "**は is not “=”.** X は Y です means “as for X, it’s Y”, which is looser than an equals sign. A famous example: at a restaurant, 「[私]{わたし}はうなぎです。」 means “I’ll have the eel”, not “I am an eel”. The topic sets the scene (my order), and the comment fills it in. Context decides.",
      "**Leaving things out.** Japanese drops any part of the sentence that the listener can recover: the topic, the object, even the noun after の. English needs “I”, “you” and “it” in almost every sentence; Japanese often has none. Learners usually sound more natural when they drop [私]{わたし}は after the first sentence.",
      "**Formality of negatives.** ではありません > じゃありません ≈ じゃないです, from most to least formal; all three are polite. In formal writing, use ではありません.",
      "**A trap with はい and いいえ.** はい means “that’s right” and いいえ “that’s not right”. To a negative question (「[昨日]{きのう}は[休]{やす}みじゃありませんでしたか。」 “Wasn’t yesterday a day off?”), はい usually confirms the negative: 「はい、[休]{やす}みじゃありませんでした。」 (“Right, it wasn’t.”). When the speaker is really checking a guess (“It was a day off, wasn’t it?”), answers vary, so listen to the whole answer, not just the first word. With a positive question, use いいえ before a negative answer."
     ]
    },
    related:["question-sentences","particles-wa-ga","i-and-na-adjectives","desu-masu-and-dearu"],
    sources:[{t:"Japanese grammar (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_grammar"},{t:"IRODORI: Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/about.html"}], checked:"2026-11"},

   {id:"question-sentences", title:"Questions and pointing words: か, question words, これ・それ・あれ", aka:["か","question words","ko-so-a-do","これ それ あれ どれ","この その あの どの","ここ そこ あそこ どこ"], tags:["japanese","grammar","n5"],
    summary:"How to ask yes–no questions with か, where question words go, how to answer, and the ko-so-a-do pointing words for things, nouns, places and directions.",
    levels:{
     starter:[
      "To ask a yes–no question in Japanese, add か to the end of the sentence. Nothing else moves: 「アナさんは[学生]{がくせい}です。」 becomes 「アナさんは[学生]{がくせい}ですか。」 In speech your voice rises a little at the end.",
      "Answer with はい (yes) or いいえ (no). For questions about nouns, short answers are はい、そうです and いいえ、ちがいます.",
      "Question words such as [何]{なん} (what), だれ (who) and どこ (where) go **exactly where the answer will go**: 「それは[何]{なん}ですか。」「これはペンです。」",
      "Pointing words come in families that start with こ, そ, あ and ど. こ is near me, そ is near you, あ is far from both of us, and ど asks “which?”. So これ is “this one”, それ “that one (near you)”, あれ “that one over there” and どれ “which one?”.",
      {key:"か makes a question; the question word sits where the answer goes; こ near me, そ near you, あ far, ど which."}
     ],
     builder:[
      {table:[["Series","Thing / + noun","Place","Polite direction"],["こ (near me)","これ / この","ここ","こちら"],["そ (near you)","それ / その","そこ","そちら"],["あ (far from both)","あれ / あの","あそこ","あちら"],["ど (question)","どれ / どの","どこ","どちら"]]},
      "これ-words stand alone (「これは[本]{ほん}です。」). この-words need a noun after them (「この[本]{ほん}は[私]{わたし}のです。」). Don’t point at people with これ or あれ; say この[人]{ひと}, あの[人]{ひと}, or politely あの[方]{かた}. Introduce someone with 「こちらは[山田]{やまだ}さんです。」",
      "When you and the listener stand side by side, これ is near both of you, それ a little away and あれ far away.",
      {table:[["Question word","Meaning"],["[何]{なん} / [何]{なに}","what"],["だれ (polite: どなた)","who"],["どこ","where"],["いつ","when"],["どれ","which one (of three or more)"],["どの + noun","which (noun)"],["いくら","how much (price)"]]},
      "A question word as subject takes が: 「どれがサラさんのかさですか。」 ({{particles-wa-ga}}).",
      "**Asking politely.** Start with すみません (excuse me), and use the polite partners where they exist: どなた for だれ, こちら, そちら and どちら for places and directions. Shop and station staff use them with you all the time: 「お[手洗]{てあら}いはあちらです。」 (“The toilets are over there.”).",
      "**Answers.** For nouns, そうです and ちがいます work. For verbs and adjectives, repeat the verb or adjective: 「[行]{い}きますか。」「はい、[行]{い}きます。」「[寒]{さむ}いですか。」「いいえ、[寒]{さむ}くないです。」"
     ],
     pro:[
      "**[何]{なん} or [何]{なに}?** 何 is usually read なん before です, だ and の ([何]{なん}ですか, [何]{なん}の[本]{ほん}) and with counters ([何時]{なんじ}, [何人]{なんにん}). Before particles such as を, が and も, it is read なに: [何]{なに}を[食]{た}べますか. A few words have both readings in use (for example 何で, なんで or なにで), so check a dictionary when you meet a new one. 「✗ [何]{なに}ですか」 is a common learner mistake.",
      "**どれ or どちら?** どれ chooses among three or more; for a choice between two, Japanese uses どちら (or casual どっち): 「コーヒーとお[茶]{ちゃ}と、どちらがいいですか。」 Unit 3 covers comparisons.",
      "**Talking about something just mentioned.** そ-words also point back to something the other person has just said, not only to things near them: 「[明日]{あした}は[休]{やす}みです。」「それはいいですね。」 (“Tomorrow’s a day off.” “That’s nice.”). あ-words point to something both speakers already know.",
      "**Negative questions.** In Japanese, はい and いいえ usually agree or disagree with the statement in the question. To 「パーティーに[行]{い}きませんでしたか。」 (“Didn’t you go to the party?”), someone who didn’t go answers 「はい、[行]{い}きませんでした。」 (“That’s right, I didn’t.”). This is a tendency, not an iron rule: when a negative question is really checking a guess (“You went, didn’t you?”), people often answer with the positive. And in the non-past, ～ませんか is usually an invitation, not a question about facts ({{masu-verbs}}).",
      "**Question marks.** Formal Japanese writing usually ends a か question with 。. ？ is common in casual writing, messages and for questions without か, such as rising casual questions (「[行]{い}く？」).",
      "**か alone and polite forms.** In polite speech, か after です or ます is normal. In casual speech, a bare か after a plain verb can sound rough, so people rely on rising intonation instead; Unit 5 explains casual questions."
     ]
    },
    related:["japanese-sentence-basics","particles-wa-ga","masu-verbs"],
    sources:[{t:"Japanese grammar: demonstratives (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_grammar"},{t:"Japanese particles (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_particles"}], checked:"2026-11"},

   {id:"particles-wa-ga", title:"は and が: topic and subject", aka:["wa vs ga","topic marker","subject marker","は vs が"], tags:["japanese","grammar","particles","n5"],
    summary:"A beginner’s guide to the two particles that mark “who or what”: は for a topic already in the conversation, が for a subject that is new or important information.",
    levels:{
     starter:[
      "Japanese has two particles that can come after the “who” or “what” of a sentence: は and が. Learners meet them on day one and keep refining them for years, so it is fine to start simple.",
      "**は marks the topic**: something already known, which you are now saying something about. 「[山田]{やまだ}さんは[先生]{せんせい}です。」 (“As for Mr Yamada, he’s a teacher.”) The new information comes **after** は.",
      "**が marks the subject when it is the new information**: the answer to “who?” or “which?”. 「[山田]{やまだ}さんが[先生]{せんせい}です。」 (“Mr Yamada is the teacher”, he’s the one.) The new information comes **before** が.",
      "One rule never fails at this level: **a question word as the subject takes が**, never は. 「だれが[先生]{せんせい}ですか。」 And the word that answers it takes が too.",
      {key:"Known topic → は, news after it. Question word or its answer → が."}
     ],
     builder:[
      "Five uses of が and は that cover N5:",
      {table:[["Use","Example","Note"],["Question word as subject","どれがアナさんのですか。","Never ✗ どれは"],["Answer to that question","これがアナさんのです。","The answer is the new information"],["Something new that exists","[部屋]{へや}にねこがいます。","With あります and います"],["Likes, dislikes, skills","ねこが[好]{す}きです。","With [好]{す}き, きらい, [上手]{じょうず}, わかる"],["Known topic","ねこは[部屋]{へや}にいます。","は, then the new part"]]},
      "Compare the two existence patterns. 「[部屋]{へや}にねこがいます。」 introduces a cat (“There’s a cat in the room”). Once the cat is known, it becomes the topic: 「ねこは[部屋]{へや}にいます。」 (“The cat is in the room.”).",
      "**は for contrast.** は can also contrast one thing with others: 「[魚]{さかな}は[食]{た}べます。」 suggests “Fish, I eat (but maybe not other things)”. You will notice this use more and more.",
      "**も replaces both.** 「[私]{わたし}も[学生]{がくせい}です。」 replaces は; 「[犬]{いぬ}もいます。」 replaces が.",
      "**Two common mistakes.** 「✗ だれは[来]{き}ますか」: a question word can’t be a topic, so it takes が. 「✗ ねこを[好]{す}きです」: [好]{す}き is not an action verb, so the thing you like takes が, not を.",
      {tip:"Ask where the new information is. Before the particle: が. After the particle: は."}
     ],
     pro:[
      "Linguists describe several distinct uses of each particle. Two for が matter early:",
      {list:["**Exhaustive-listing が:** “X, and only X”. 「[田中]{たなか}さんが[来]{き}ました。」 in answer to “Who came?” means Tanaka is the one who came.","**Neutral-description が:** reporting a whole new event or scene with nothing in it already known: 「あ、[雨]{あめ}が[降]{ふ}っています。」 (“Oh, it’s raining.”). Here there is no topic at all."]},
      "And two for は: the **thematic は** (a known topic) and the **contrastive は** (this one, as opposed to others). Contrastive は often appears with negatives: 「[肉]{にく}は[食]{た}べません。」 (“Meat, I don’t eat”, implying other things I do).",
      "**は stacks on other particles.** は can replace が and を, but it is added after other particles: [東京]{とうきょう}には (as for in Tokyo), [図書館]{としょかん}では (as for at the library), [友]{とも}だちとは. The same is true of も.",
      "**In clauses, が wins.** Inside a clause that describes a noun or gives a reason, the subject normally takes が even if it would be a topic in a main sentence: 「[私]{わたし}が[好]{す}きな[食]{た}べ[物]{もの}」 (“the food I like”). You will meet this pattern from Unit 5.",
      "**Don’t over-apply rules.** Real speakers choose は or が by what the listener knows and what they want to stress. When two sentences are both possible, they usually mean different things. Exercises in this course always give enough context for one answer.",
      "The Wikipedia example captures the core: 「[犬]{いぬ}がサンドを[食]{た}べている。」 answers “What’s going on?” (a new scene), while 「[犬]{いぬ}はサンドを[食]{た}べている。」 answers “What is the dog doing?” (the dog is already the topic)."
     ]
    },
    related:["japanese-sentence-basics","question-sentences","particles-o-ni-de"],
    sources:[{t:"Japanese grammar: topic and subject (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_grammar"},{t:"Japanese particles (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_particles"}], checked:"2026-11"},

   {id:"particles-o-ni-de", title:"Particles を, に, で, へ, と, も, から and まで", aka:["case particles","を に で","particle of place","particle of time"], tags:["japanese","grammar","particles","n5"],
    summary:"The core N5 particles that label objects, times, places, directions, means and companions, with a clear test for に versus で and for when へ can replace に.",
    levels:{
     starter:[
      "A particle is a small word that comes **after** a noun and labels its job, like a sticker. English uses word order and words like “at”, “to” and “with”; Japanese uses particles.",
      {table:[["Particle","Job"],["を (read お)","the object: パンを[食]{た}べます"],["に","a point in time, a destination, where something is"],["へ (read え)","direction: towards"],["で","where an action happens; the means"],["と","with (a person); and (nouns)"],["も","also, too"],["から / まで","from / until"]]},
      "Three particles keep an old spelling: は is read わ, へ is read え and を is read お. Because the particles carry the meaning, Japanese word order is fairly free, as long as the verb comes last.",
      "The trickiest pair is に and で, because both can mean “at”. Ask: is something **happening** there, or is something just **there**? Action → で (「[図書館]{としょかん}で[勉強]{べんきょう}します。」). Being there → に (「[図書館]{としょかん}にいます。」).",
      {key:"Particles follow nouns. Action happens で; things exist に."}
     ],
     builder:[
      "**に for time** marks clock times, dates, months and years: [六時]{ろくじ}に, [三月]{さんがつ}に. Days of the week usually take に too. Time words relative to now take **no particle**: [今日]{きょう}, [明日]{あした}, [昨日]{きのう}, [今]{いま}, [毎日]{まいにち}, [来週]{らいしゅう}.",
      "**に or へ for destinations.** With [行]{い}く, [来]{く}る and [帰]{かえ}る, both are correct: [駅]{えき}に/へ[行]{い}きます. へ stresses direction. へ can’t mark time or where something is.",
      "**で for place and means.** [家]{いえ}で[晩]{ばん}ごはんを[食]{た}べます (place of action); バスで, はしで, [日本語]{にほんご}で (means). On foot is [歩]{ある}いて, not ✗ [足]{あし}で.",
      "**と** means “with” after a person, and “and” between nouns in a complete list: パンとたまご. It never joins verbs, adjectives or sentences.",
      "**も** replaces は, が and を ([私]{わたし}も, [肉]{にく}も) and follows other particles ([駅]{えき}にも, [友]{とも}だちとも). With a question word and a negative: [何]{なに}も[食]{た}べません (I don’t eat anything), だれもいません (nobody is there).",
      "**から / まで** mark the start and end of a span in time or space, and can stand before です: 「[授業]{じゅぎょう}は[九時]{くじ}からです。」 With days, the span includes both ends.",
      "**Existence.** Place に + thing が + あります (things, plants, events) or います (people, animals). See {{existence-aru-iru}}.",
      "**All together:** 「[土曜日]{どようび}に[友]{とも}だちとバスで[公園]{こうえん}へ[行]{い}きます。」 (time に, companion と, means で, direction へ)."
     ],
     pro:[
      "**を with movement.** With verbs of movement, を marks the space you move through or leave: 「[公園]{こうえん}を[散歩]{さんぽ}します。」 (I walk in the park), 「[道]{みち}を[渡]{わた}ります。」 (I cross the road), 「[家]{いえ}を[出]{で}ます。」 (I leave home). This is not an object in the English sense, but it is standard N5–N4 Japanese.",
      "**Verbs that take に for a person.** Some verbs mark the other person with に: 「[友]{とも}だちに[会]{あ}います。」 (I meet a friend), and verbs of giving, telling and asking mark the receiver with に. Learn these with the verb.",
      "**Exceptions to the action test.** A few verbs that look like actions mark the place with に, because they put you in a place or keep you there: [住]{す}む (live somewhere, 「[町]{まち}に[住]{す}んでいます」), [座]{すわ}る (sit down on or in something: いすに[座]{すわ}ります), [泊]{と}まる (stay overnight: ホテルに[泊]{と}まります). Learn the に with the verb. Events, on the other hand, use で even with あります: 「[駅]{えき}の[前]{まえ}でお[祭]{まつ}りがあります。」, because something happens there.",
      "**と versus や.** と lists everything: パンとたまご (bread and eggs, that’s all). や gives examples from a longer list: パンやたまご (bread, eggs and so on). や is N5 vocabulary too.",
      "**まで versus までに.** まで marks how long something continues (“until”): 「[五時]{ごじ}まで[働]{はたら}きます。」 までに marks a deadline (“by”): 「[五時]{ごじ}までに[来]{き}てください。」 Most course books teach it a little later (around N4), but it is worth knowing early.",
      "**へ before の.** へ can keep its meaning before の, which に can’t do: [母]{はは}への[手紙]{てがみ} (a letter to my mother).",
      "**Days of the week.** Textbooks usually teach [日曜日]{にちようび}に with に, and that is always correct. In conversation people often drop it, especially when the day is the topic: 「[日曜日]{にちようび}は[休]{やす}みです。」"
     ]
    },
    related:["particles-wa-ga","masu-verbs","existence-aru-iru"],
    sources:[{t:"Japanese particles (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_particles"},{t:"IRODORI: Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/about.html"}], checked:"2026-11"},

   {id:"existence-aru-iru", title:"あります and います: there is, there are", aka:["ある and いる","aru and iru","existence verbs","there is / there are","position words"], tags:["japanese","grammar","verbs","n5"],
    summary:"How to say that something exists, where it is, and what you have, with あります for things and events and います for people and animals, the two sentence patterns, and position words such as うえ (on) and まえ (in front of).",
    levels:{
     starter:[
      "English uses one phrase, “there is”, for everything. Japanese has two verbs, and the choice depends on **what** exists:",
      {table:[["Verb","Used for","Example"],["います (いる)","people and animals","[公園]{こうえん}に[犬]{いぬ}がいます。 (There’s a dog in the park.)"],["あります (ある)","things, plants, buildings, events","[机]{つくえ}の[上]{うえ}に[本]{ほん}があります。 (There’s a book on the desk.)"]]},
      "A simple test: can it move by itself? Then use います. A tree is alive, but it can’t walk away, so it takes あります: 「[公園]{こうえん}に[木]{き}があります。」",
      "The place takes に, and the thing that exists takes が. The negatives are ありません and いません: 「[今]{いま}、[田中]{たなか}さんはいません。」 (“Ms Tanaka isn’t here now.”)",
      "Like other verbs, they come at the end of the sentence and don’t change for one or many: 「[犬]{いぬ}がいます。」 can mean one dog or several.",
      "The same verbs say what you **have**: 「[時間]{じかん}があります。」 (I have time), 「[兄]{あに}がいます。」 (I have an older brother).",
      {key:"People and animals: います. Everything else: あります. Place に, thing が."}
     ],
     builder:[
      "**Two patterns.** Which one you use depends on whether the thing is new or already known (the は and が idea from {{particles-wa-ga}}):",
      {table:[["Pattern","Use","Example"],["Place に thing が あります/います","introduces something new","[部屋]{へや}にねこがいます。 (There’s a cat in the room.)"],["Thing は place に あります/います","says where a known thing is","ねこは[部屋]{へや}にいます。 (The cat is in the room.)"]]},
      "**Questions.** Ask what or who is there with が: 「[部屋]{へや}に[何]{なに}がありますか。」「だれがいますか。」 Ask where with は: 「[駅]{えき}はどこにありますか。」 For “nothing” and “nobody”, use も with the negative: [何]{なに}もありません, だれもいません.",
      "**Position words.** Use the place + の + a position word + に:",
      {table:[["Position word","Meaning","Example"],["[上]{うえ}","on, above","[机]{つくえ}の[上]{うえ}に"],["[下]{した}","under, below","いすの[下]{した}に"],["[中]{なか}","in, inside","[箱]{はこ}の[中]{なか}に"],["[前]{まえ}","in front of","[駅]{えき}の[前]{まえ}に"],["[後]{うし}ろ","behind","うちの[後]{うし}ろに"],["[隣]{となり}","next to","[銀行]{ぎんこう}の[隣]{となり}に"]]},
      "**A short cut with です.** When the topic is already known, 「トイレはどこにありますか。」 is often shortened to 「トイレはどこですか。」, and the answer to 「あそこです。」",
      "**Having.** 「[車]{くるま}がありません。」 (I don’t have a car), 「[子]{こ}どもがいます。」 (I have children). Family members and pets take います; things and time take あります.",
      "**Events** such as festivals, parties, tests and meetings take あります. Their place takes で, because something happens there, and their time takes に: 「[土曜日]{どようび}に[駅]{えき}の[前]{まえ}でお[祭]{まつ}りがあります。」 ({{particles-o-ni-de}})."
     ],
     pro:[
      "**Living or not is what counts, not the word.** The same word can take either verb. A live fish in a tank: 「[魚]{さかな}がいます。」 Fish for dinner in the fridge: 「[魚]{さかな}があります。」 Plants take あります, even though they are alive.",
      "**Three verbs that sound alike.** いる (be, exist) is ichidan: います. [要]{い}る (need) is godan: [要]{い}ります. [入]{はい}る (enter) is read はいる and is godan too. Don’t let the sound fool you ({{verb-groups}}).",
      "**ある’s irregular negative.** ある is a regular godan verb in the ます form (あります, ありません), but its plain negative is ない, never ✗ あらない. いる’s plain negative is the regular いない. Units 3 and 5 teach the plain forms ({{nai-and-ta-forms}}).",
      "**に versus で again.** The existence pattern is the clearest case of the に/で test: being somewhere takes に (「[図書館]{としょかん}にいます」), doing something there takes で (「[図書館]{としょかん}で[勉強]{べんきょう}します」). Events are the one twist: they take あります, but their place takes で, because an event is something that happens.",
      "**State, not action.** あります and います describe a state, so their non-past already means “now”: 「[今]{いま}、[部屋]{へや}にいます。」 (I’m in my room now). With action verbs, “now” needs ～ています (Unit 3).",
      "**Polite and humble partners.** In shops, offices and announcements you will hear more formal forms: ございます for あります (「トイレは[二階]{にかい}にございます。」), おります as a humble form of います, and いらっしゃいます as a respectful form for other people (「[先生]{せんせい}はいらっしゃいますか。」). You don’t need to use them yet; they belong to keigo ({{keigo-system}}).",
      "**Counting what exists.** To say how many, put the number and counter before the verb, with no particle: 「[犬]{いぬ}が[二匹]{にひき}います。」 (There are two dogs). Counters and their sound changes are in Unit 3."
     ]
    },
    related:["particles-o-ni-de","particles-wa-ga","verb-groups","question-sentences"],
    sources:[{t:"Japanese particles (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_particles"},{t:"Japanese verb conjugation (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_verb_conjugation"}], checked:"2026-11"},

   {id:"masu-verbs", title:"Polite verbs with ます, and ～ましょう・～ませんか", aka:["ます form","masu-kei","polite verbs","ましょう","ませんか"], tags:["japanese","grammar","verbs","n5"],
    summary:"The polite verb forms ます, ません, ました and ませんでした, what the non-past covers, how to ask and answer, and how to invite, suggest and offer with ～ませんか, ～ましょう and ～ましょうか.",
    levels:{
     starter:[
      "Japanese verbs come at the end of the sentence. The polite ending **ます** is what you use with anyone you would speak to with です.",
      "Every verb has four polite forms: [食]{た}べます (eat, will eat), [食]{た}べません (don’t, won’t eat), [食]{た}べました (ate), [食]{た}べませんでした (didn’t eat).",
      "There are only two tenses: past and non-past. The non-past covers habits (「[毎朝]{まいあさ}コーヒーを[飲]{の}みます。」) and the future (「[明日]{あした}[行]{い}きます。」). It does not mean “I’m doing it right now”: that is ～ています (Unit 3).",
      "The same four endings work for every verb in the language. What differs from verb to verb is the part before ます, and that depends on the verb’s group.",
      "Like です, ます doesn’t change for the person: [食]{た}べます can mean I, you, she or they eat. The topic, or the situation, tells you who.",
      "To make plans with someone: ～ませんか (“Would you like to…?”), ～ましょう (“Let’s…”) and ～ましょうか (“Shall we…? / Shall I…?”).",
      {key:"ます, ません, ました, ませんでした: one stem, four polite endings."}
     ],
     builder:[
      {table:[["","Non-past","Past"],["Affirmative","[行]{い}きます","[行]{い}きました"],["Negative","[行]{い}きません","[行]{い}きませんでした"]]},
      "The part before ます is the **ます stem**: [行]{い}き, [食]{た}べ, し. To find it from the dictionary form, you need the verb’s group ({{verb-groups}}).",
      "**Questions and answers.** Add か: 「[来]{き}ますか。」 Answer with the verb, not そうです: 「はい、[来]{き}ます。」「いいえ、[来]{き}ません。」",
      "**Objects take を.** 「[本]{ほん}を[読]{よ}みます。」 Verbs of movement take a destination with に or へ instead.",
      "**Time words** make the tense clear: [毎日]{まいにち}, [明日]{あした}, [今晩]{こんばん}, [昨日]{きのう}, [先週]{せんしゅう}.",
      "**Word order.** A neutral order is topic → time → place → object → verb: 「[私]{わたし}は[毎朝]{まいあさ}うちでコーヒーを[飲]{の}みます。」 (“I drink coffee at home every morning.”). The particles show each word’s job, so the middle pieces can move, but the verb stays last.",
      "**Telling a story.** A string of short ました sentences is a natural way to describe your day: 「[七時]{しちじ}に[起]{お}きました。[朝]{あさ}ごはんを[食]{た}べました。[九時]{くじ}に[会社]{かいしゃ}に[行]{い}きました。」 Unit 3 shows how to join them with the て-form.",
      {table:[["Ending","Use","Example"],["～ませんか","polite invitation","いっしょに[昼]{ひる}ごはんを[食]{た}べませんか。"],["～ましょう","let’s (after agreeing, or with friends)","ええ、[食]{た}べましょう。"],["～ましょうか","shall we / shall I (suggestion, offer)","[何時]{なんじ}に[会]{あ}いましょうか。"]]},
      "～ませんか leaves room to refuse, so it is the polite way to invite. To decline, Japanese speakers often apologise and trail off: 「すみません、[今日]{きょう}はちょっと…。」"
     ],
     pro:[
      "**Stem + に + movement verb (purpose).** The ます stem plus に before [行]{い}く, [来]{く}る or [帰]{かえ}る means “go to do”: 「[映画]{えいが}を[見]{み}に[行]{い}きます。」 (I’m going to see a film), 「[昼]{ひる}ごはんを[食]{た}べに[帰]{かえ}ります。」 This is an N5 pattern built straight on the stem.",
      "**The stem is the base for much more.** ～たい (want to: [食]{た}べたい), ～ながら (while doing) and many compounds use it. Unit 3 starts with ～たい.",
      "**～ませんか is usually an invitation.** In the non-past, 「[食]{た}べませんか。」 is heard as “Won’t you have some?”, not as a question about facts. To ask “Don’t you eat meat?”, Japanese speakers usually use other patterns, which you will meet later. In the past, ～ませんでしたか is an ordinary negative question: 「[行]{い}きませんでしたか。」 (“Didn’t you go?”), and はい usually agrees with the negative: 「はい、[行]{い}きませんでした。」",
      "**～ましょう in instructions.** Textbooks, signs and teachers use ～ましょう as a gentle instruction to a group: 「[書]{か}きましょう。」 (Let’s write; i.e. please write), 「ごみを[分]{わ}けましょう。」 (Let’s sort our rubbish).",
      "**Non-past and “now”.** With verbs of state, the non-past can describe the present: あります, います, わかります (I understand). With action verbs, it means habit or future. For an action going on now, use ～ています.",
      "**ます is itself a verb ending.** ます conjugates: ません, ました, ませんでした, ましょう. It is not used inside most clauses that describe a noun; there Japanese uses plain forms, which Unit 5 teaches.",
      "**Politeness levels.** ます is [丁寧語]{ていねいご} ([[teineigo]]), the basic polite level. Above it is keigo for showing respect ({{keigo-system}}), which you need later for formal situations."
     ]
    },
    related:["verb-groups","particles-o-ni-de","te-form","question-sentences"],
    sources:[{t:"Japanese verb conjugation (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_verb_conjugation"},{t:"IRODORI: Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/about.html"}], checked:"2026-11"},

   {id:"verb-groups", title:"Verb groups and the dictionary form", aka:["godan","ichidan","u-verbs","ru-verbs","group 1 group 2 group 3","dictionary form"], tags:["japanese","grammar","verbs","n5"],
    summary:"How to sort any Japanese verb into godan, ichidan or irregular from its dictionary form, the godan exceptions that look ichidan, and how each group makes its ます form.",
    levels:{
     starter:[
      "Dictionaries list verbs in the **dictionary form**, which always ends in an う-row sound: う, く, ぐ, す, つ, ぬ, ぶ, む or る.",
      "Every verb belongs to one of three groups, and the group decides how it changes:",
      {list:["**Godan** (group 1, “u-verbs”): [書]{か}く, [飲]{の}む, [買]{か}う, [帰]{かえ}る. The last sound changes: [書]{か}く → [書]{か}きます.","**Ichidan** (group 2, “ru-verbs”): [食]{た}べる, [見]{み}る, [起]{お}きる. る drops: [食]{た}べる → [食]{た}べます.","**Irregular** (group 3): する → します, [来]{く}る → [来]{き}ます."]},
      "Quick test: not ending in る → godan. Ending in る after an i- or e-sound (み, き, べ, ね) → usually ichidan. A handful of common verbs break this rule and must be learned: [帰]{かえ}る, [入]{はい}る, [知]{し}る, [切]{き}る, [走]{はし}る, [要]{い}る are all godan.",
      {key:"Learn every new verb with its dictionary form, its ます form and its group."}
     ],
     builder:[
      {table:[["Ending","ます form","Example"],["う","います","[会]{あ}う → [会]{あ}います"],["く","きます","[書]{か}く → [書]{か}きます"],["ぐ","ぎます","[泳]{およ}ぐ → [泳]{およ}ぎます"],["す","します","[話]{はな}す → [話]{はな}します"],["つ","ちます","[待]{ま}つ → [待]{ま}ちます"],["ぬ","にます","[死]{し}ぬ → [死]{し}にます"],["ぶ","びます","[遊]{あそ}ぶ → [遊]{あそ}びます"],["む","みます","[読]{よ}む → [読]{よ}みます"],["る","ります","[帰]{かえ}る → [帰]{かえ}ります"]]},
      "**Ichidan:** drop る, add ます: [見]{み}る → [見]{み}ます, [寝]{ね}る → [寝]{ね}ます.",
      "**Irregular:** する → します, and every noun + する verb follows it ([勉強]{べんきょう}する → [勉強]{べんきょう}します). [来]{く}る → [来]{き}ます: the kanji 来 is read く in the dictionary form and き in the ます form.",
      "**Same sound, different group.** Some pairs sound identical in the dictionary form but belong to different groups, so their ます forms differ:",
      {table:[["Verb","Group","ます form"],["[着]{き}る (wear)","ichidan","[着]{き}ます"],["[切]{き}る (cut)","godan","[切]{き}ります"],["[変]{か}える (change)","ichidan","[変]{か}えます"],["[帰]{かえ}る (go home)","godan","[帰]{かえ}ります"],["いる (be, exist)","ichidan","います"],["[要]{い}る (need)","godan","[要]{い}ります"]]},
      "Textbooks name the groups differently (godan/ichidan, group 1/2/3, u-verbs/ru-verbs), but the groups are the same.",
      "**Checking a group.** When a verb ends in いる or える and you aren’t sure, look it up. Dictionaries based on JMdict, such as Jisho.org, label each verb: “Ichidan verb”, or “Godan verb with ‘ru’ ending”. Write the group on your flashcard with the ます form, so you never have to guess twice."
     ],
     pro:[
      "**Why “five-step” and “one-step”?** In traditional Japanese grammar, a godan (五段) verb uses all five vowel rows of the kana table across its forms: [書]{か}か(ない), [書]{か}き(ます), [書]{か}く, [書]{か}け(ば), [書]{か}こ(う). An ichidan (一段) verb keeps one vowel before る in every form: [食]{た}べ(ない), [食]{た}べ(ます), [食]{た}べる. Ichidan verbs with an i-sound are called 上一段 (かみいちだん) and those with an e-sound 下一段 (しもいちだん).",
      "**More godan look-alikes.** Beyond the six in the lessons, other common godan verbs that end in an i- or e-sound + る include [減]{へ}る (decrease), しゃべる (chat), [蹴]{け}る (kick), [滑]{すべ}る (slip), [握]{にぎ}る (grip) and [限]{かぎ}る (limit). A good dictionary marks every verb’s group: JMdict-based dictionaries such as Jisho.org show “Godan verb with ‘ru’ ending” or “Ichidan verb”.",
      "**Odd corners of the irregulars.** ある is godan and regular in the ます form (あります), but its plain negative is ない, not ✗ あらない. [行]{い}く is regular except in the て- and た-forms ([行]{い}って, [行]{い}った). Verbs like いらっしゃる and くださる (polite keigo verbs) have irregular ます forms (いらっしゃいます, くださいます); you will meet them with keigo.",
      "**Kanji compounds + する.** Most verbs made from a kanji noun use する: [勉強]{べんきょう}する, [料理]{りょうり}する, [散歩]{さんぽ}する. Some one-kanji + する verbs have their own patterns (for example [信]{しん}じる, which is ichidan); learn those individually.",
      "**Why the group matters later.** The group decides the ない-form ([書]{か}かない vs [食]{た}べない), the て-form ([書]{か}いて vs [食]{た}べて) and the potential form. Getting the group right now saves many mistakes in Units 3 and 5 ({{te-form}}, {{nai-and-ta-forms}})."
     ]
    },
    related:["masu-verbs","te-form","nai-and-ta-forms"],
    sources:[{t:"Japanese verb conjugation (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_verb_conjugation"},{t:"Japanese grammar: verb groups (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_grammar"}], checked:"2026-11"},

   {id:"i-and-na-adjectives", title:"い-adjectives and な-adjectives", aka:["i-adjectives","na-adjectives","keiyoushi","keiyoudoushi","adjectival nouns"], tags:["japanese","grammar","adjectives","n5"],
    summary:"The two kinds of Japanese adjective, how each one goes before a noun and makes its present, negative, past and past negative polite forms, the irregular いい, and the look-alikes きれい and きらい.",
    levels:{
     starter:[
      "Japanese has two kinds of adjective.",
      "**い-adjectives** end in い and change by themselves: [高]{たか}い (expensive) → [高]{たか}くない (not expensive) → [高]{たか}かった (was expensive). Add です to be polite: [高]{たか}かったです.",
      "**な-adjectives** don’t change. They add な before a noun ([静]{しず}かな[町]{まち}, a quiet town) and use です forms like a noun: [静]{しず}かです, [静]{しず}かじゃありません, [静]{しず}かでした.",
      "Both kinds can go before a noun: [新]{あたら}しい[本]{ほん} (a new book), [有名]{ゆうめい}な[人]{ひと} (a famous person). Only な-adjectives need な there, and neither kind takes な at the end of a sentence.",
      "One い-adjective is irregular: いい (good) changes on よ: よくない, よかった.",
      "A few な-adjectives end in い and fool learners: きれい (pretty, clean), きらい (disliked), [有名]{ゆうめい} (famous).",
      "Most adjective mistakes at this level come from mixing the two patterns, for example 「✗ [寒]{さむ}いでした」 instead of [寒]{さむ}かったです. Keep the two tables side by side until they feel automatic.",
      {key:"い-adjectives change themselves; な-adjectives let です change."}
     ],
     builder:[
      {table:[["","い-adjective","な-adjective"],["Before a noun","[高]{たか}い[山]{やま}","[静]{しず}かな[町]{まち}"],["Present","[高]{たか}いです","[静]{しず}かです"],["Negative","[高]{たか}くないです / [高]{たか}くありません","[静]{しず}かではありません / じゃありません"],["Past","[高]{たか}かったです","[静]{しず}かでした"],["Past negative","[高]{たか}くなかったです / [高]{たか}くありませんでした","[静]{しず}かではありませんでした / じゃありませんでした"]]},
      "**Key mistake:** with い-adjectives the tense lives in the adjective, so the past is [寒]{さむ}かったです, never ✗ [寒]{さむ}いでした.",
      "**No な at the end:** 「[町]{まち}は[静]{しず}かです。」, never ✗ [静]{しず}かなです.",
      "**いい:** いいです, よくないです, よかったです, よくなかったです; also in compounds such as かっこいい → かっこよくない.",
      "**Likes and dislikes:** [好]{す}き and きらい are な-adjectives, and the thing liked takes が: 「ねこが[好]{す}きです。」",
      "**とても and あまり:** とても (very) goes with positives; あまり (not very) needs a negative: 「あまり[辛]{から}くないです。」",
      "**Answers:** repeat the adjective: 「[寒]{さむ}いですか。」「いいえ、[寒]{さむ}くないです。」",
      "**Asking for an opinion:** どうですか (how is it?) and どうでしたか (how was it?) invite an adjective answer: 「テストはどうでしたか。」「[難]{むずか}しかったです。」",
      "**Learning tip:** learn adjectives in pairs of opposites ([大]{おお}きい/[小]{ちい}さい, [高]{たか}い/[安]{やす}い, [新]{あたら}しい/[古]{ふる}い, [暑]{あつ}い/[寒]{さむ}い), and note “な” on your flashcard for every な-adjective, especially the look-alikes きれい, きらい and [有名]{ゆうめい}, whose negatives are きれいじゃありません, きらいじゃありません and [有名]{ゆうめい}じゃありません."
     ],
     pro:[
      "**What the names mean.** Japanese school grammar calls い-adjectives [形容詞]{けいようし} and な-adjectives [形容動詞]{けいようどうし}. Many linguists call な-adjectives “adjectival nouns”, because they behave like nouns: the only difference is that nouns join another noun with の and な-adjectives with な. Some words can do both, and dictionaries mark them.",
      "**いい and よい.** いい is the everyday form of an older adjective よい, and all its changed forms come from よい: よくない, よかった, よければ. よい is still used in writing and formal speech.",
      "**[大]{おお}きな and [小]{ちい}さな.** These are not な-adjectives but a small class of pre-noun words (連体詞, れんたいし) that only go before nouns. [大]{おお}きな[家]{いえ} and [大]{おお}きい[家]{いえ} both mean “a big house”, but only [大]{おお}きいです can end a sentence.",
      "**Adverbs.** い-adjectives become adverbs with く ([早]{はや}い → [早]{はや}く[起]{お}きます, get up early), and な-adjectives with に ([静]{しず}か → [静]{しず}かに[話]{はな}します, speak quietly).",
      "**Joining adjectives** uses the て-form: [安]{やす}くておいしい (cheap and tasty), [静]{しず}かできれい (quiet and pretty). Unit 3 teaches it ({{te-form}}).",
      "**Other い-shaped endings.** Several grammar endings conjugate exactly like い-adjectives: ない (not), ～たい (want to), ～らしい. Once you know [高]{たか}くない and [高]{たか}かった, you can already conjugate [食]{た}べたい → [食]{た}べたくない → [食]{た}べたかった.",
      "**The two negatives.** ～くないです and ～くありません are both polite. ～くありません is often described as a little more formal; ～くないです is very common in conversation. Both are correct."
     ]
    },
    related:["japanese-sentence-basics","particles-wa-ga","te-form"],
    sources:[{t:"Japanese adjectives (Wikipedia)", url:"https://en.wikipedia.org/wiki/Japanese_adjectives"},{t:"IRODORI: Japanese for Life in Japan (The Japan Foundation)", url:"https://www.irodori.jpf.go.jp/en/about.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"particle", term:"Particle (じょし)", def:"A small word that comes after a noun or at the end of a sentence and shows its job: は (topic), を (object), に (time, destination), で (place of action) and so on. Japanese name: [助詞]{じょし}.", codex:"particles-o-ni-de"},
   {id:"topic-marker", term:"Topic marker は", def:"The particle は, pronounced わ, which marks what the sentence is about: 「アナさんは[学生]{がくせい}です。」 (“As for Ana, she’s a student.”).", codex:"particles-wa-ga"},
   {id:"subject-marker", term:"Subject marker が", def:"The particle が, which marks the subject when it is new or important information, for example after a question word: 「だれが[来]{き}ますか。」", codex:"particles-wa-ga"},
   {id:"object-marker", term:"Object marker を", def:"The particle を, pronounced お, which marks the thing an action is done to: 「パンを[食]{た}べます。」", codex:"particles-o-ni-de"},
   {id:"copula", term:"Copula (です, だ)", def:"The word that links a topic to what it is, like English “is”: です in polite speech, だ in plain speech. 「[学生]{がくせい}です。」 (“I’m a student.”).", codex:"japanese-sentence-basics"},
   {id:"i-adjective", term:"い-adjective", def:"An adjective that ends in い and changes its own ending: [高]{たか}い, [高]{たか}くない, [高]{たか}かった. Japanese name: [形容詞]{けいようし}.", codex:"i-and-na-adjectives"},
   {id:"na-adjective", term:"な-adjective", def:"An adjective that takes な before a noun ([静]{しず}かな[町]{まち}) and uses です forms like a noun: [静]{しず}かです, [静]{しず}かでした. Japanese name: [形容動詞]{けいようどうし}.", codex:"i-and-na-adjectives"},
   {id:"masu-form", term:"ます form", def:"The polite form of a verb, ending in ます, ません, ました or ませんでした: [食]{た}べます, [行]{い}きました.", codex:"masu-verbs"},
   {id:"masu-stem", term:"ます stem", def:"The part of a verb before ます: [行]{い}き in [行]{い}きます, [食]{た}べ in [食]{た}べます. Other endings such as ～ましょう and ～たい attach to it.", codex:"masu-verbs"},
   {id:"verb-group", term:"Verb group", def:"One of the three classes that decide how a Japanese verb changes: godan, ichidan and irregular (also called groups 1, 2 and 3).", codex:"verb-groups"},
   {id:"godan-verb", term:"Godan verb (ごだん, u-verb)", def:"A verb whose last sound changes across the vowel rows: [書]{か}く → [書]{か}きます. Every verb that doesn’t end in る is godan, and so are some that do, such as [帰]{かえ}る.", codex:"verb-groups"},
   {id:"ichidan-verb", term:"Ichidan verb (いちだん, ru-verb)", def:"A verb that ends in る after an i- or e-sound and simply drops る before endings: [食]{た}べる → [食]{た}べます, [見]{み}る → [見]{み}ます.", codex:"verb-groups"},
   {id:"irregular-verb", term:"Irregular verb (する, くる)", def:"The two verbs that follow neither group: する (do) → します and [来]{く}る (come) → [来]{き}ます. Every noun + する verb, such as [勉強]{べんきょう}する, follows する.", codex:"verb-groups"},
   {id:"dictionary-form", term:"Dictionary form", def:"The plain non-past form of a verb, the one listed in dictionaries. It always ends in an う-row sound: [書]{か}く, [食]{た}べる, する.", codex:"verb-groups"},
   {id:"question-particle-ka", term:"Question particle か", def:"The particle か at the end of a sentence, which turns a statement into a question without changing the word order: 「[学生]{がくせい}ですか。」", codex:"question-sentences"},
   {id:"sentence-final-particle", term:"Sentence-final particle", def:"A particle at the very end of a sentence that adds a question or a feeling: か (question), ね (checking agreement), よ (telling the listener something new).", codex:"question-sentences"},
   {id:"question-word", term:"Question word", def:"A word that asks for information, such as [何]{なん} (what), だれ (who), どこ (where), いつ (when), どれ (which one) and いくら (how much). In Japanese it sits where the answer will go.", codex:"question-sentences"},
   {id:"particle-no", term:"Particle の (joining nouns)", def:"The particle that joins two nouns, the first describing the second: [私]{わたし}の[本]{ほん} (my book), [日本語]{にほんご}の[先生]{せんせい} (a teacher of Japanese).", codex:"japanese-sentence-basics"},
   {id:"ko-so-a-do", term:"こそあど words (ko-so-a-do)", def:"The families of pointing words that start with こ (near the speaker), そ (near the listener), あ (far from both) and ど (the question): これ・それ・あれ・どれ, この・その・あの・どの, ここ・そこ・あそこ・どこ.", codex:"question-sentences"},
   {id:"aru-iru", term:"あります and います (ある, いる)", def:"The two verbs for “there is” and “is (somewhere)”: います (いる) for people and animals, あります (ある) for things, plants, buildings and events. They also say what you have: 「[時間]{じかん}があります。」", codex:"existence-aru-iru"},
   {id:"particle-kara-made", term:"から and まで (from, until)", def:"Particles that mark the start (から, “from”) and the end (まで, “until” or “as far as”) of a span of time or space: [九時]{くじ}から[五時]{ごじ}まで, [駅]{えき}からうちまで.", codex:"particles-o-ni-de"},
   {id:"particle-mo", term:"Particle も (also)", def:"The particle meaning “also” or “too”. It replaces は, が and を, and comes after other particles: [私]{わたし}も, [駅]{えき}にも.", codex:"particles-o-ni-de"},
   {id:"honorific-san", term:"さん (name suffix)", def:"The polite suffix added to other people’s names, for any gender: [山田]{やまだ}さん, アナさん. Never used with your own name.", codex:"japanese-sentence-basics"},
   {id:"mashou-masenka", term:"～ましょう and ～ませんか", def:"Polite endings for making plans: ～ませんか invites (“Would you like to…?”), ～ましょう suggests (“Let’s…”), and ～ましょうか offers or asks (“Shall I…? / Shall we…?”).", codex:"masu-verbs"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e3u2-q01", lesson:"e3u2-l1", level:1, q:"In 「ケンジさんは[先生]{せんせい}です。」, how is the particle は pronounced?", options:[
     {t:"わ", ok:true, why:"As a topic particle, は is pronounced わ, a spelling kept from older Japanese."},
     {t:"は", why:"は keeps its normal sound inside words such as はな, but as a particle it is read わ."},
     {t:"え", why:"え is how the particle へ is read. The particle は is read わ."},
     {t:"お", why:"お is how the particle を is read. The particle は is read わ."}
   ]},
   {id:"e3u2-q02", lesson:"e3u2-l1", level:2, q:"Which is the most formal way to say “Kenji is not a teacher”, the one you would choose in writing?", options:[
     {t:"ケンジさんは[先生]{せんせい}ではありません。", ok:true, why:"ではありません is the full, most formal negative."},
     {t:"ケンジさんは[先生]{せんせい}じゃありません。", why:"Polite and common in speech, but じゃ is the spoken short form of では."},
     {t:"ケンジさんは[先生]{せんせい}じゃないです。", why:"Polite and common in conversation, but less formal than ではありません."},
     {t:"ケンジさんは[先生]{せんせい}ではありませんです。", why:"A mistake: ありません is already polite, so です is not added."}
   ]},
   {id:"e3u2-q03", lesson:"e3u2-l1", level:2, q:"Which sentence means “Yesterday was a day off”?", options:[
     {t:"[昨日]{きのう}は[休]{やす}みでした。", ok:true, why:"でした is the past of です."},
     {t:"[昨日]{きのう}は[休]{やす}みです。", why:"です is present: “Yesterday is a day off” doesn’t fit."},
     {t:"[昨日]{きのう}は[休]{やす}みじゃありませんでした。", why:"This is the past negative: “Yesterday was not a day off.”"},
     {t:"[昨日]{きのう}は[休]{やす}みましたです。", why:"This mixes a verb ending with です. After a noun, the past is でした."}
   ]},
   {id:"e3u2-q04", lesson:"e3u2-l1", level:3, q:"At a party, someone asks you 「[学生]{がくせい}ですか。」. You are an office worker. Which answer is right?", options:[
     {t:"いいえ、ちがいます。[会社員]{かいしゃいん}です。", ok:true, why:"いいえ、ちがいます (“No, that’s not right”), then the correct information."},
     {t:"はい、そうです。", why:"This says you are a student."},
     {t:"はい、[会社員]{かいしゃいん}です。", why:"はい agrees that you are a student, and then you say you are an office worker: the two parts clash. Start with いいえ."},
     {t:"いいえ、そうです。", why:"いいえ (no) and そうです (that’s right) contradict each other."}
   ]},
   {id:"e3u2-q05", lesson:"e3u2-l1", level:2, q:"How do you say “Sara’s teacher’s name”?", options:[
     {t:"サラさんの[先生]{せんせい}の[名前]{なまえ}", ok:true, why:"Each describing noun comes before the noun it describes, joined by の: Sara’s → teacher’s → name."},
     {t:"[名前]{なまえ}の[先生]{せんせい}のサラさん", why:"This puts everything in reverse, like “the name of the teacher of Sara” word by word. In Japanese the describing noun comes first."},
     {t:"[先生]{せんせい}のサラさんの[名前]{なまえ}", why:"This means “the name of Sara, who is the teacher” (roughly “teacher Sara’s name”). The teacher belongs to Sara, so サラさん comes first."},
     {t:"サラさん[先生]{せんせい}[名前]{なまえ}の", why:"の must go between each pair of nouns, not at the end."}
   ]},
   {id:"e3u2-q06", lesson:"e3u2-l1", level:3, q:"Priya introduces herself at work. Which line needs fixing?", options:[
     {t:"「プリヤさんです。」", ok:true, why:"Priya is talking about herself, so no さん: 「プリヤです。」"},
     {t:"「はじめまして。」", why:"Correct: the standard opening for a first meeting."},
     {t:"「エンジニアです。」", why:"Correct: “I’m an engineer.” The topic (I) is clear, so it is left out."},
     {t:"「よろしくおねがいします。」", why:"Correct: the standard way to close an introduction."}
   ]},
   {id:"e3u2-q07", lesson:"e3u2-l1", level:1, q:"Why do Japanese speakers usually say the person’s name with さん instead of あなた (“you”)?", options:[
     {t:"Using the name is more natural; あなた can sound distant or too direct face to face.", ok:true, why:"あなた is a real word, but using the listener’s name (with さん) is the natural polite choice."},
     {t:"あなた is a rude word that is never used.", why:"あなた is used, for example in writing addressed to readers. It is just less common in polite conversation than “you” is in English."},
     {t:"あなた means “they”, not “you”.", why:"あなた does mean “you”."},
     {t:"Japanese has no word for “you”.", why:"It has several, including あなた; people simply use them less."}
   ]},
   {id:"e3u2-q08", lesson:"e3u2-l1", level:1, q:"How do you turn 「ミンさんは[医者]{いしゃ}です。」 into a yes–no question?", options:[
     {t:"Add か at the end: ミンさんは[医者]{いしゃ}ですか。", ok:true, why:"か at the end makes a question. The word order stays the same."},
     {t:"Move です to the front: ですミンさんは[医者]{いしゃ}。", why:"Japanese doesn’t move words to make questions."},
     {t:"Put か at the start: かミンさんは[医者]{いしゃ}です。", why:"か is a sentence-final particle: it goes at the end."},
     {t:"Replace は with か: ミンさんか[医者]{いしゃ}です。", why:"は stays. か is added at the end of the sentence."}
   ]},
   {id:"e3u2-q09", lesson:"e3u2-l1", level:1, q:"Which sentence-final particle checks that the listener agrees, as in 「いい[天気]{てんき}です＿＿。」 (“Nice weather, isn’t it?”)?", options:[
     {t:"ね", ok:true, why:"ね invites agreement, like “isn’t it?”"},
     {t:"よ", why:"よ tells the listener something new: “…, you know.”"},
     {t:"か", why:"か asks a real question; it doesn’t assume the listener agrees."},
     {t:"の", why:"の here would join nouns or ask casually; it isn’t the agreement particle."}
   ]},
   {id:"e3u2-q10", lesson:"e3u2-l1", level:3, q:"Kenji points at an umbrella and asks 「サラさんのかさですか。」. It is your umbrella. Which answer fits?", options:[
     {t:"いいえ、[私]{わたし}のです。", ok:true, why:"“No, it’s mine.” の without the second noun means “mine”."},
     {t:"はい、[私]{わたし}のです。", why:"はい agrees that it is Sara’s, and then you say it is yours: the parts clash."},
     {t:"いいえ、[私]{わたし}です。", why:"This means “No, it’s me.” Without の, [私]{わたし} is the person, not the owner."},
     {t:"いいえ、[私]{わたし}のかさじゃありません。", why:"This says “It isn’t my umbrella”, the opposite of what you mean."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e3u2-q11", lesson:"e3u2-l2", level:2, q:"Your friend is holding a small box. You ask what it is: 「＿＿は[何]{なん}ですか。」", options:[
     {t:"それ", ok:true, why:"The box is near the listener, and it stands alone before は: それ."},
     {t:"これ", why:"これ is for things near the speaker. The box is in your friend’s hands."},
     {t:"あれ", why:"あれ is for things far from both of you."},
     {t:"その", why:"その needs a noun after it (その[箱]{はこ}). Alone, use それ."}
   ]},
   {id:"e3u2-q12", lesson:"e3u2-l2", level:1, q:"Which pointing word must be followed by a noun?", options:[
     {t:"この", ok:true, why:"この, その, あの and どの always need a noun: この[本]{ほん}."},
     {t:"これ", why:"これ stands alone: これは[本]{ほん}です。"},
     {t:"ここ", why:"ここ is a place word (here) and stands alone."},
     {t:"あれ", why:"あれ stands alone: あれは[駅]{えき}です。"}
   ]},
   {id:"e3u2-q13", lesson:"e3u2-l2", level:3, q:"Oluwaseun is at a station and needs the toilet. What does he ask a member of staff?", options:[
     {t:"すみません、トイレはどこですか。", ok:true, why:"X は どこですか asks where X is."},
     {t:"すみません、トイレはどれですか。", why:"どれ asks “which one” among things you can see. For a place, use どこ."},
     {t:"すみません、トイレはだれですか。", why:"だれ asks “who”."},
     {t:"すみません、どこはトイレですか。", why:"Question words can’t be the topic with は, and the question word goes where the answer goes: トイレはどこですか."}
   ]},
   {id:"e3u2-q14", lesson:"e3u2-l2", level:2, q:"You see someone across the room and want to ask who they are. Which is natural and polite enough?", options:[
     {t:"あの[人]{ひと}はだれですか。", ok:true, why:"あの + [人]{ひと} points at a person respectfully."},
     {t:"あれはだれですか。", why:"Pointing at a person with あれ treats them like a thing and sounds rude."},
     {t:"あの[人]{ひと}は[何]{なん}ですか。", why:"[何]{なん} asks “what”. For a person, use だれ (or どなた)."},
     {t:"あの[人]{ひと}はどこですか。", why:"どこ asks where the person is, not who they are."}
   ]},
   {id:"e3u2-q15", lesson:"e3u2-l2", level:2, q:"「どれ＿＿サラさんのかばんですか。」 (“Which one is Sara’s bag?”)", options:[
     {t:"が", ok:true, why:"A question word as subject takes が."},
     {t:"は", why:"A question word is new information, so it can’t be the topic: どれは is wrong."},
     {t:"を", why:"を marks the object of an action verb; this sentence ends in です."},
     {t:"の", why:"「どれのサラさん」 makes no sense here."}
   ]},
   {id:"e3u2-q16", lesson:"e3u2-l2", level:1, q:"How is the kanji 何 read in 「それは何ですか。」? (The furigana is left out on purpose.)", options:[
     {t:"なん", ok:true, why:"Before です (and の), 何 is read なん."},
     {t:"なに", why:"なに is used before particles such as を and が, not before です."},
     {t:"なんで", why:"なんで is a different word (“why”, in casual speech)."},
     {t:"いつ", why:"いつ is a different question word, “when”."}
   ]},
   {id:"e3u2-q17", lesson:"e3u2-l2", level:3, q:"Dmitri is in a clothes shop holding a shirt he likes. He wants to know the price. What does he ask?", options:[
     {t:"このシャツはいくらですか。", ok:true, why:"The shirt is near him (この + noun), and いくら asks the price."},
     {t:"このシャツはどれですか。", why:"どれ asks “which one”; he already has the shirt."},
     {t:"そのシャツはいくらですか。", why:"その is for things near the listener. The shirt is in his own hands."},
     {t:"これシャツはいくらですか。", why:"これ can’t take a noun after it. Use この."}
   ]},
   {id:"e3u2-q18", lesson:"e3u2-l2", level:3, q:"Which question does 「[山田]{やまだ}さんが[先生]{せんせい}です。」 answer most naturally?", options:[
     {t:"“Who is the teacher?”", ok:true, why:"が marks the new information, Mr Yamada, as the answer to “who?”."},
     {t:"“What does Mr Yamada do?”", why:"That question would be answered with は: 「[山田]{やまだ}さんは[先生]{せんせい}です。」"},
     {t:"“Is Mr Yamada a student?”", why:"That would get はい or いいえ, and は."},
     {t:"“Where is Mr Yamada?”", why:"That would be answered with a place, for example あそこです."}
   ]},
   {id:"e3u2-q19", lesson:"e3u2-l2", level:2, q:"A shop assistant is holding a cup and tells you its price. Which sentence does she say?", options:[
     {t:"このカップは[千円]{せんえん}です。", ok:true, why:"The cup is near her, the speaker, and a noun follows: この."},
     {t:"そのカップは[千円]{せんえん}です。", why:"その is for things near the listener. The cup is in her own hands."},
     {t:"あのカップは[千円]{せんえん}です。", why:"あの is for things far from both people."},
     {t:"これカップは[千円]{せんえん}です。", why:"これ can’t be followed by a noun."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e3u2-q20", lesson:"e3u2-l3", level:1, q:"What does the non-past ます form, such as [飲]{の}みます, cover?", options:[
     {t:"Habits and the future", ok:true, why:"「[毎朝]{まいあさ}[飲]{の}みます」 (habit) and 「[明日]{あした}[飲]{の}みます」 (future) both use it."},
     {t:"Only actions happening right now", why:"For actions in progress, Japanese uses ～ています (Unit 3)."},
     {t:"Only the past", why:"The past is ました."},
     {t:"Only the future", why:"It covers habits too: 「[毎朝]{まいあさ}コーヒーを[飲]{の}みます。」"}
   ]},
   {id:"e3u2-q21", lesson:"e3u2-l3", level:1, q:"Which group is [飲]{の}む (to drink)?", options:[
     {t:"Godan", ok:true, why:"It ends in む, not る, so it is godan: [飲]{の}みます."},
     {t:"Ichidan", why:"Only verbs ending in る can be ichidan."},
     {t:"Irregular", why:"Only する and くる (and noun + する verbs) are irregular."},
     {t:"It depends on the sentence", why:"A verb’s group never changes."}
   ]},
   {id:"e3u2-q22", lesson:"e3u2-l3", level:2, q:"What is the ます form of [見]{み}る (to see)?", options:[
     {t:"[見]{み}ます", ok:true, why:"[見]{み}る is ichidan (i-sound before る): drop る, add ます."},
     {t:"[見]{み}ります", why:"This treats [見]{み}る as godan. It is ichidan."},
     {t:"[見]{み}るます", why:"ます never attaches to the full dictionary form."},
     {t:"[見]{み}えます", why:"This is a different verb, [見]{み}える (to be visible)."}
   ]},
   {id:"e3u2-q23", lesson:"e3u2-l3", level:3, q:"Ana asks Min 「[日曜日]{にちようび}、いっしょにテニスをしませんか。」. Min would like to go. What does she say?", options:[
     {t:"いいですね。しましょう。", ok:true, why:"Accepting, then ～ましょう (“Let’s”)."},
     {t:"はい、しません。", why:"This answers as if it were a negative question: “Right, I won’t.” ～ませんか here is an invitation."},
     {t:"いいですね。しませんでした。", why:"しませんでした is “didn’t do”, which makes no sense here."},
     {t:"すみません、[日曜日]{にちようび}はちょっと…。", why:"This is a polite refusal, but Min wants to go."}
   ]},
   {id:"e3u2-q24", lesson:"e3u2-l3", level:2, q:"What is the ます form of [帰]{かえ}る (to go home)?", options:[
     {t:"[帰]{かえ}ります", ok:true, why:"[帰]{かえ}る is a godan exception: る becomes り."},
     {t:"[帰]{かえ}ます", why:"This would be right for an ichidan verb; [帰]{かえ}る is a godan exception."},
     {t:"[帰]{かえ}るます", why:"ます never goes on the dictionary form directly."},
     {t:"[帰]{かえ}れます", why:"This is a different form (“can go home”)."}
   ]},
   {id:"e3u2-q25", lesson:"e3u2-l3", level:1, q:"Which particle marks the object in 「パン＿＿[食]{た}べます。」?", options:[
     {t:"を", ok:true, why:"を (read お) marks the thing the action is done to."},
     {t:"が", why:"が marks a subject, not the object of [食]{た}べる."},
     {t:"に", why:"に marks a time, a destination or where something is."},
     {t:"で", why:"で marks the place of an action or the means."}
   ]},
   {id:"e3u2-q26", lesson:"e3u2-l3", level:3, q:"Tomás texts a friend 「[今]{いま}テレビを[見]{み}ます。」 to say “I’m watching TV right now.” What is the problem?", options:[
     {t:"The ます form means habit or future, not an action in progress; Japanese uses ～ています for that.", ok:true, why:"「[今]{いま}テレビを[見]{み}ます」 sounds like “I’ll watch TV now.” Unit 3 teaches [見]{み}ています."},
     {t:"[見]{み}る is godan, so it should be [見]{み}ります.", why:"[見]{み}る is ichidan: [見]{み}ます is the correct ます form."},
     {t:"テレビ needs が instead of を.", why:"テレビ is the object of [見]{み}る, so を is correct."},
     {t:"There is no problem.", why:"The sentence is grammatical, but it doesn’t mean “I’m watching right now”."}
   ]},
   {id:"e3u2-q27", lesson:"e3u2-l3", level:2, q:"What is the ます form of [来]{く}る (to come)?", options:[
     {t:"[来]{き}ます", ok:true, why:"くる is irregular: きます. The kanji 来 is read き here."},
     {t:"[来]{く}ます", why:"くる doesn’t just drop る; it becomes きます."},
     {t:"[来]{く}ります", why:"くる isn’t godan; it is one of the two irregular verbs."},
     {t:"[来]{こ}ます", why:"こ appears in other forms of [来]{く}る (Unit 3), not in the ます form."}
   ]},
   {id:"e3u2-q28", lesson:"e3u2-l3", level:3, q:"Mei sees the word かえます in a message. Which dictionary form does it come from?", options:[
     {t:"[変]{か}える (to change)", ok:true, why:"[変]{か}える is ichidan: drop る, add ます → かえます."},
     {t:"[帰]{かえ}る (to go home)", why:"[帰]{かえ}る is godan, so its ます form is かえります, with り."},
     {t:"[買]{か}う (to buy)", why:"[買]{か}う becomes かいます."},
     {t:"[書]{か}く (to write)", why:"[書]{か}く becomes かきます."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e3u2-q29", lesson:"e3u2-l4", level:2, q:"「[図書館]{としょかん}＿＿[勉強]{べんきょう}します。」", options:[
     {t:"で", ok:true, why:"Studying is an action, so the place takes で."},
     {t:"に", why:"に marks where something simply is ([図書館]{としょかん}にいます), not where an action happens."},
     {t:"を", why:"を marks an object; the library is where you study."},
     {t:"と", why:"と means “with” a person or “and” between nouns."}
   ]},
   {id:"e3u2-q30", lesson:"e3u2-l4", level:2, q:"「[公園]{こうえん}＿＿[犬]{いぬ}がいます。」", options:[
     {t:"に", ok:true, why:"います says where something is, so the place takes に."},
     {t:"で", why:"で is for the place of an action. Existence takes に."},
     {t:"へ", why:"へ shows direction of movement."},
     {t:"を", why:"を marks an object; います has none."}
   ]},
   {id:"e3u2-q31", lesson:"e3u2-l4", level:1, q:"Which time word needs に before a verb such as [起]{お}きます?", options:[
     {t:"[六時]{ろくじ} (six o’clock)", ok:true, why:"Clock times are points in time and take に: [六時]{ろくじ}に[起]{お}きます."},
     {t:"[明日]{あした} (tomorrow)", why:"Time words relative to now take no particle: [明日]{あした}[起]{お}きます."},
     {t:"[毎日]{まいにち} (every day)", why:"[毎日]{まいにち} takes no particle."},
     {t:"[今]{いま} (now)", why:"[今]{いま} takes no particle."}
   ]},
   {id:"e3u2-q32", lesson:"e3u2-l4", level:3, q:"Fatima tells her teacher that she goes home by bus. Which sentence is correct?", options:[
     {t:"バスでうちに[帰]{かえ}ります。", ok:true, why:"で for the means (bus), に for the destination (home)."},
     {t:"バスにうちで[帰]{かえ}ります。", why:"The particles are swapped: the bus is the means (で) and home is the destination (に)."},
     {t:"バスをうちに[帰]{かえ}ります。", why:"を marks an object; the bus is the means of travel."},
     {t:"バスとうちへ[帰]{かえ}ります。", why:"と means “with”: “I go home with the bus” doesn’t work in Japanese either."}
   ]},
   {id:"e3u2-q33", lesson:"e3u2-l4", level:1, q:"How is the particle へ pronounced?", options:[
     {t:"え", ok:true, why:"Like は (read わ) and を (read お), the particle へ keeps an old spelling and is read え."},
     {t:"へ", why:"へ keeps its normal sound in words, but as a particle it is read え."},
     {t:"わ", why:"わ is how the particle は is read."},
     {t:"に", why:"に is a different particle."}
   ]},
   {id:"e3u2-q34", lesson:"e3u2-l4", level:3, q:"Hana wants to tell a friend “There’s a festival in front of the station.” Which sentence is correct?", options:[
     {t:"[駅]{えき}の[前]{まえ}でお[祭]{まつ}りがあります。", ok:true, why:"Events use あります, and the place of an event takes で, because something happens there."},
     {t:"[駅]{えき}の[前]{まえ}でお[祭]{まつ}りがいます。", why:"います is for people and animals. An event takes あります."},
     {t:"[駅]{えき}の[前]{まえ}をお[祭]{まつ}りがあります。", why:"を marks an object; here the station front is the place of the event."},
     {t:"[駅]{えき}の[前]{まえ}へお[祭]{まつ}りがあります。", why:"へ shows direction of movement; nothing is moving here."}
   ]},
   {id:"e3u2-q35", lesson:"e3u2-l4", level:2, q:"You eat fish, and you want to add “I eat meat too.” Which is correct?", options:[
     {t:"[肉]{にく}も[食]{た}べます。", ok:true, why:"も replaces を: “meat too”."},
     {t:"[肉]{にく}はも[食]{た}べます。", why:"も replaces は; the two don’t stand together."},
     {t:"[肉]{にく}と[食]{た}べます。", why:"と means “with”: “I eat with meat.”"},
     {t:"[肉]{にく}が[食]{た}べます。", why:"が would make meat the eater. The object of [食]{た}べる takes を, or も for “too”."}
   ]},
   {id:"e3u2-q36", lesson:"e3u2-l4", level:2, q:"Which sentence means “I work from nine to five”?", options:[
     {t:"[九時]{くじ}から[五時]{ごじ}まで[働]{はたら}きます。", ok:true, why:"から marks the start, まで the end."},
     {t:"[九時]{くじ}まで[五時]{ごじ}から[働]{はたら}きます。", why:"から and まで are swapped: “until nine, from five”."},
     {t:"[九時]{くじ}から[五時]{ごじ}に[働]{はたら}きます。", why:"に marks a point in time, not the end of a span. Use まで."},
     {t:"[九時]{くじ}で[五時]{ごじ}まで[働]{はたら}きます。", why:"で doesn’t mark a starting time. Use から."}
   ]},
   {id:"e3u2-q37", lesson:"e3u2-l4", level:3, q:"You share a flat with your friend Ms Tanaka. Another friend of hers phones and asks for her, but she has gone out. What do you say?", options:[
     {t:"すみません、[今]{いま}、[田中]{たなか}さんはいません。", ok:true, why:"People take います, so the negative is いません."},
     {t:"すみません、[今]{いま}、[田中]{たなか}さんはありません。", why:"ありません is for things. A person takes いません."},
     {t:"すみません、[今]{いま}、[田中]{たなか}さんにいません。", why:"に marks the place where someone is, not the person."},
     {t:"すみません、[今]{いま}、[田中]{たなか}さんをいません。", why:"いる has no object, so を can’t be used."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e3u2-q38", lesson:"e3u2-l5", level:1, q:"Which of these is a な-adjective?", options:[
     {t:"きれい", ok:true, why:"It ends in い, but it is a な-adjective: きれいな[部屋]{へや}, きれいでした."},
     {t:"[寒]{さむ}い", why:"An い-adjective: [寒]{さむ}かった."},
     {t:"[新]{あたら}しい", why:"An い-adjective: [新]{あたら}しくない."},
     {t:"おいしい", why:"An い-adjective: おいしかった."}
   ]},
   {id:"e3u2-q39", lesson:"e3u2-l5", level:2, q:"How do you say “It was cheap” politely?", options:[
     {t:"[安]{やす}かったです。", ok:true, why:"[安]{やす}い is an い-adjective: drop い, add かった, then です."},
     {t:"[安]{やす}いでした。", why:"い-adjectives carry their own past; です doesn’t change."},
     {t:"[安]{やす}でした。", why:"This treats [安]{やす}い like a な-adjective."},
     {t:"[安]{やす}くないです。", why:"This is the present negative: “It isn’t cheap.”"}
   ]},
   {id:"e3u2-q40", lesson:"e3u2-l5", level:2, q:"What is the polite past of いい (good)?", options:[
     {t:"よかったです", ok:true, why:"いい changes on よ: よかった, then です."},
     {t:"いかったです", why:"いい is irregular: its changed forms use よ."},
     {t:"いいでした", why:"い-adjectives don’t use でした."},
     {t:"よくないです", why:"This is the present negative, “is not good”."}
   ]},
   {id:"e3u2-q41", lesson:"e3u2-l5", level:2, q:"How do you say “a famous person”?", options:[
     {t:"[有名]{ゆうめい}な[人]{ひと}", ok:true, why:"[有名]{ゆうめい} is a な-adjective, so it takes な before a noun."},
     {t:"[有名]{ゆうめい}い[人]{ひと}", why:"[有名]{ゆうめい} isn’t an い-adjective; there is no い to add."},
     {t:"[有名]{ゆうめい}の[人]{ひと}", why:"の joins nouns. A な-adjective takes な."},
     {t:"[有名]{ゆうめい}です[人]{ひと}", why:"です can’t go before a noun."}
   ]},
   {id:"e3u2-q42", lesson:"e3u2-l5", level:3, q:"A friend asks 「[日本語]{にほんご}はむずかしいですか。」. You think it isn’t very difficult. What do you say?", options:[
     {t:"いいえ、あまりむずかしくないです。", ok:true, why:"あまり + a negative: “not very difficult”."},
     {t:"いいえ、そうです。", why:"そうです doesn’t fit adjective questions, and いいえ + そうです contradict each other."},
     {t:"いいえ、あまりむずかしいです。", why:"あまり needs a negative ending."},
     {t:"はい、むずかしくないです。", why:"はい agrees that it is difficult, and then you say it isn’t: the parts clash."}
   ]},
   {id:"e3u2-q43", lesson:"e3u2-l5", level:2, q:"「ねこ＿＿[好]{す}きです。」 (“I like cats.”)", options:[
     {t:"が", ok:true, why:"With [好]{す}き and きらい, the thing liked takes が."},
     {t:"を", why:"[好]{す}き is a な-adjective, not an action verb, so it doesn’t take を."},
     {t:"で", why:"で marks the place of an action or the means."},
     {t:"に", why:"に marks time, destination or where something is."}
   ]},
   {id:"e3u2-q44", lesson:"e3u2-l5", level:3, q:"Leila wrote 「ホテルはきれかったです。」 about her trip. How should she fix it?", options:[
     {t:"ホテルはきれいでした。", ok:true, why:"きれい is a な-adjective, so its past is きれいでした."},
     {t:"ホテルはきれいかったです。", why:"きれい isn’t an い-adjective, so it doesn’t take かった."},
     {t:"ホテルはきれいだったでした。", why:"The past is marked twice. Use きれいでした."},
     {t:"No change: it’s correct.", why:"きれい looks like an い-adjective, but it is a な-adjective."}
   ]},
   {id:"e3u2-q45", lesson:"e3u2-l5", level:1, q:"Which sentence has a mistake?", options:[
     {t:"[町]{まち}は[静]{しず}かなです。", ok:true, why:"This is the mistake: な is only used before a noun. At the end, say [静]{しず}かです."},
     {t:"[静]{しず}かな[町]{まち}です。", why:"Correct: な before the noun [町]{まち}."},
     {t:"[町]{まち}は[静]{しず}かです。", why:"Correct: no な at the end of a sentence."},
     {t:"[静]{しず}かな[町]{まち}でした。", why:"Correct: な before [町]{まち}, and でした for the past."}
   ]},
   {id:"e3u2-q46", lesson:"e3u2-l5", level:3, q:"A colleague asks 「[昨日]{きのう}のパーティーはどうでしたか。」. You enjoyed it a lot. What do you say?", options:[
     {t:"とても[楽]{たの}しかったです。", ok:true, why:"とても (very) + the past of [楽]{たの}しい: [楽]{たの}しかったです."},
     {t:"とても[楽]{たの}しいでした。", why:"い-adjectives carry their own past: [楽]{たの}しかったです."},
     {t:"あまり[楽]{たの}しかったです。", why:"あまり needs a negative, and it would mean “not very fun”."},
     {t:"とても[楽]{たの}しくなかったです。", why:"This says it wasn’t fun, the opposite of what you mean."}
   ]}
  ]
});
