/* Japanese Foundations · Unit 5 (e3u5) · Plain form and casual speech (N4) */
ICA.addUnit({
  id:"e3u5",
  track:"e3",
  n:5,
  title:"Plain form and casual speech",
  icon:"💬",
  blurb:"The first N4 unit: every plain form of verbs, adjectives and nouns in one system; when Japanese speakers choose plain or polite speech; how casual conversation really sounds (dropped particles, ～てる and ～ちゃう, よ, ね and よね, questions without か); and plain forms at work inside longer sentences: describing nouns with clauses, explaining with ～んです, and quoting and giving opinions with と[言]{い}う and と[思]{おも}う; then experiences, examples and time with ～たことがある, ～たり～たりする and ～とき, before and after with ～[前]{まえ}に and ～[後]{あと}で, and softer reasons with ～ので.",
  goals:[
    "Build the four plain forms of any verb, い-adjective, な-adjective or noun, and switch any sentence between polite and plain",
    "Choose between plain and polite speech for friends, family, teachers, colleagues and strangers, and know which writing uses which style",
    "Follow and use casual speech: dropped particles, contractions such as ～てる, ～ちゃう and ～なきゃ, よ, ね and よね, and questions without か",
    "Describe nouns with whole clauses, such as [昨日]{きのう}[買]{か}った[本]{ほん}, using な and の correctly",
    "Explain and ask for explanations with ～んです, and avoid overusing it",
    "Report what people said with と[言]{い}う and って, and give opinions with ～と[思]{おも}います",
    "Talk about experiences and examples with ～たことがある and ～たり, say when, before and after with ～とき, ～前に and ～後で, and give reasons politely with ～ので"
  ],
  lessons:[
    {
      id:"e3u5-l1",
      title:"Plain forms: one system for every word",
      minutes:55,
      goals:[
        "Give the four plain forms (non-past, negative, past, past negative) of any verb, い-adjective, な-adjective or noun",
        "Turn a polite sentence into a plain one, and back again",
        "Avoid the classic slips: [高]{たか}いだ, きれいくない, [静]{しず}かかった and あらない",
        "Recognise the plain forms of patterns you already know, such as ～ている, ～たい and ～てください",
        "Read and write a short diary entry in the plain style"
      ],
      hook:{
        q:"[高]{たか}いです (it’s expensive) is polite. What is its plain form, the one you would say to a close friend?",
        options:["[高]{たか}い","[高]{たか}いだ","[高]{たか}かだ","[高]{たか}くだ"],
        answer:0,
        reveal:"**[高]{たか}い.** For nouns and な-adjectives, the plain partner of です is だ ([学生]{がくせい}です → [学生]{がくせい}だ), so [高]{たか}いだ is a very natural guess. But an い-adjective can already end a sentence by itself; the です after it only adds politeness. Take it away and you have the plain form. This lesson puts the plain forms of verbs, adjectives and nouns into one system, so that you can switch any sentence between polite and plain."
      },
      learn:[
        {
          h:"One system, two dials",
          body:[
            {
              lead:"Welcome to N4. In Units 2 and 3 you learned to end sentences politely with です and ます, and you met the plain forms of verbs. This unit is about the plain side of Japanese: how it is built, who uses it, and how it works inside longer sentences."
            },
            "A complete Japanese sentence normally ends in a **predicate**: a verb ([食]{た}べる), an い-adjective (高い), or a な-adjective or noun with です or だ ([静]{しず}かだ, 学生だ). Each predicate has two dials. One dial is tense: non-past or past. The other is polarity: positive or negative. Two dials with two settings each give four boxes.",
            "Polite speech and plain speech fill the same four boxes. The meaning is the same; only the level of politeness changes. You already know the polite boxes. In Unit 3 you filled in the plain boxes for verbs ([[plain-form|plain forms]], {{nai-and-ta-forms}}). This lesson adds adjectives and nouns, so that you have one system for every kind of word.",
            {
              fig:"<svg viewBox='0 0 340 436'><text x='170' y='20' text-anchor='middle'>Polite → plain, at the end of a sentence</text><text class='s' x='86' y='44' text-anchor='middle'>polite</text><text class='s' x='258' y='44' text-anchor='middle'>plain</text><rect class='d-lup' x='6' y='54' width='328' height='118' rx='8' stroke-width='2'/><text class='s' x='16' y='72'>verb: the ます family becomes the plain forms</text><text x='86' y='96' text-anchor='middle'>たべます</text><text x='170' y='96' text-anchor='middle'>→</text><text x='258' y='96' text-anchor='middle'>たべる</text><text x='86' y='118' text-anchor='middle'>たべません</text><text x='170' y='118' text-anchor='middle'>→</text><text x='258' y='118' text-anchor='middle'>たべない</text><text x='86' y='140' text-anchor='middle'>たべました</text><text x='170' y='140' text-anchor='middle'>→</text><text x='258' y='140' text-anchor='middle'>たべた</text><text x='86' y='162' text-anchor='middle'>たべませんでした</text><text x='170' y='162' text-anchor='middle'>→</text><text x='258' y='162' text-anchor='middle'>たべなかった</text><rect class='d-sage' x='6' y='182' width='328' height='96' rx='8' stroke-width='2'/><text class='s' x='16' y='200'>い-adjective: just drop です</text><text x='86' y='224' text-anchor='middle'>たかいです</text><text x='170' y='224' text-anchor='middle'>→</text><text x='258' y='224' text-anchor='middle'>たかい</text><text x='86' y='246' text-anchor='middle'>たかくないです</text><text x='170' y='246' text-anchor='middle'>→</text><text x='258' y='246' text-anchor='middle'>たかくない</text><text x='86' y='268' text-anchor='middle'>たかかったです</text><text x='170' y='268' text-anchor='middle'>→</text><text x='258' y='268' text-anchor='middle'>たかかった</text><rect class='d-gold' x='6' y='288' width='328' height='118' rx='8' stroke-width='2'/><text class='s' x='16' y='306'>な-adjective or noun: です becomes だ</text><text x='86' y='330' text-anchor='middle'>ひまです</text><text x='170' y='330' text-anchor='middle'>→</text><text x='258' y='330' text-anchor='middle'>ひまだ</text><text x='86' y='352' text-anchor='middle'>ひまじゃありません</text><text x='170' y='352' text-anchor='middle'>→</text><text x='258' y='352' text-anchor='middle'>ひまじゃない</text><text x='86' y='374' text-anchor='middle'>ひまでした</text><text x='170' y='374' text-anchor='middle'>→</text><text x='258' y='374' text-anchor='middle'>ひまだった</text><text x='86' y='396' text-anchor='middle'>ひまじゃ…でした</text><text x='170' y='396' text-anchor='middle'>→</text><text x='258' y='396' text-anchor='middle'>ひまじゃなかった</text><text class='s' x='170' y='428' text-anchor='middle'>ひま = free (not busy), a な-adjective</text></svg>",
              alt:"Three panels showing how polite endings become plain. Verbs: たべます to たべる, たべません to たべない, たべました to たべた, たべませんでした to たべなかった. い-adjectives drop です: たかいです to たかい, たかくないです to たかくない, たかかったです to たかかった. な-adjectives and nouns change です to だ: ひまです to ひまだ, ひまじゃありません to ひまじゃない, ひまでした to ひまだった, ひまじゃありませんでした to ひまじゃなかった.",
              cap:"Three families, one idea: the plain form is what is left when the politeness comes off."
            },
            "Notice that the three families behave differently. Verbs swap their ます endings for plain endings. い-adjectives keep their own endings and simply lose です. Nouns and な-adjectives swap です for だ. If you know which family a word belongs to, you know its plain forms."
          ]
        },
        {
          h:"Verbs: the four plain forms",
          body:[
            "Here is the verb system from Unit 3 in one table. Read each row aloud: the rhythm of the four forms helps them stick.",
            {
              table:[
                ["Dictionary form","ない-form","た-form","Past negative"],
                ["[書]{か}く (write)","書かない","書いた","書かなかった"],
                ["[買]{か}う (buy)","[買]{か}わない","[買]{か}った","[買]{か}わなかった"],
                ["[飲]{の}む (drink)","[飲]{の}まない","[飲]{の}んだ","[飲]{の}まなかった"],
                ["[帰]{かえ}る (go home)","[帰]{かえ}らない","[帰]{かえ}った","[帰]{かえ}らなかった"],
                ["[行]{い}く (go)","行かない","行った","行かなかった"],
                ["食べる (eat)","食べない","食べた","食べなかった"],
                ["する (do)","しない","した","しなかった"],
                ["[来]{く}る (come)","[来]{こ}ない","[来]{き}た","[来]{こ}なかった"],
                ["ある (there is)","ない","あった","なかった"]
              ]
            },
            "Three reminders from Unit 3. The ない-form of a godan verb uses the a-sound (with う → わ). The た-form is built exactly like the [[te-form|て-form]], so 行く gives 行った. And the ない-form ends in い, so it changes like an い-adjective: ない → なかった. The glossary entries are [[nai-form]] and [[ta-form]].",
            "Watch [来]{く}る: the kanji keeps its shape but changes its reading, こ in [来]{こ}ない and [来]{こ}なかった, き in [来]{き}た. And ある has no あらない: its negative is simply ない.",
            {
              ex:"[毎朝]{まいあさ}、コーヒーを[飲]{の}む。\nI drink coffee every morning.\n\n[昨日]{きのう}は[何]{なに}も[買]{か}わなかった。\nI didn’t buy anything yesterday.\n\n[週末]{しゅうまつ}は[友]{とも}だちが[来]{く}る。\nA friend is coming at the weekend.",
              label:"Plain verbs at the end of a sentence"
            }
          ]
        },
        {
          h:"い-adjectives: just drop です",
          body:[
            "The polite forms of an い-adjective are its plain forms with です added. So to go from polite to plain, take です away. Nothing else changes.",
            {
              table:[
                ["Meaning","Polite","Plain"],
                ["is expensive","高いです","高い"],
                ["isn’t expensive","高くないです","高くない"],
                ["was expensive","高かったです","高かった"],
                ["wasn’t expensive","高くなかったです","高くなかった"]
              ]
            },
            "You may also have learned 高くありません and 高くありませんでした. These are polite too, and they have the same plain forms: 高くない and 高くなかった.",
            "The one irregular い-adjective is いい (good). It uses よ for everything except the plain non-past: いい, よくない, よかった, よくなかった. ✗ いくない and ✗ いかった are classic slips.",
            "Two endings you know are also い-adjectives in disguise: ～たい (want to) and ～ない (not). They follow the same table: 行きたい, 行きたくない, 行きたかった; 行かない, 行かなかった.",
            {
              ex:"このラーメン、おいしい。\nThis ramen is delicious.\n\n[昨日]{きのう}のテストは[難]{むずか}しくなかった。\nYesterday’s test wasn’t difficult.\n\n[今日]{きょう}は[天気]{てんき}がいい。[昨日]{きのう}はよくなかった。\nThe weather is good today. Yesterday it wasn’t.",
              label:"Plain い-adjectives"
            },
            {
              warn:"Never put だ after an い-adjective: ✗ 高いだ, ✗ おいしいだ. The だ family belongs to nouns and な-adjectives only."
            }
          ]
        },
        {
          h:"な-adjectives and nouns: です becomes だ",
          body:[
            "Nouns and な-adjectives can’t end a sentence on their own in the same way, so they need a [[copula]], a linking word like English “is”. In polite speech that is です; in plain speech it is だ. The four forms are the same for both families:",
            {
              table:[
                ["Meaning","な-adjective","Noun"],
                ["is","[静]{しず}かだ","[雨]{あめ}だ"],
                ["isn’t","[静]{しず}かじゃない","雨じゃない"],
                ["was","[静]{しず}かだった","雨だった"],
                ["wasn’t","[静]{しず}かじゃなかった","雨じゃなかった"]
              ]
            },
            "じゃない is the everyday form. In writing and careful speech you will see ではない and ではなかった: [静]{しず}かではない. Both are correct; では is just more formal.",
            "The look-alikes from Unit 2 are traps here too. きれい (pretty, clean), きらい (dislike) and [有名]{ゆうめい} (famous) are な-adjectives, even though two of them end in い. So: きれいじゃない, not ✗ きれいくない; きらいだった, not ✗ きらかった.",
            {
              ex:"この[町]{まち}は[静]{しず}かだ。\nThis town is quiet.\n\n[昨日]{きのう}は雨だった。\nIt rained yesterday. (Literally: yesterday was rain.)\n\n[先週]{せんしゅう}は[暇]{ひま}じゃなかった。\nI wasn’t free last week.",
              label:"Plain な-adjectives and nouns"
            },
            "One thing to know before you use だ in conversation. In writing (a diary, notes) だ is completely neutral. In speech, a bare だ at the end of a sentence can sound blunt and firm, so people often leave it out or soften it with よ or ね: 雨だよ, [暇]{ひま}だね. Lesson 3 shows how."
          ]
        },
        {
          h:"Patterns you know, in plain form",
          body:[
            "Most patterns from Units 2 and 3 end in a verb or an い-adjective, so they follow the rules above. A few have their own casual shape. You will hear all of these from friends:",
            {
              table:[
                ["Polite","Plain","Meaning"],
                ["[待]{ま}っています","[待]{ま}っている","am waiting"],
                ["[見]{み}たいです","見たい","want to see"],
                ["あります / いません","ある / いない","there is / isn’t"],
                ["[入]{はい}ってもいいですか","入ってもいい？","may I come in?"],
                ["[待]{ま}ってください","[待]{ま}って","please wait"],
                ["[忘]{わす}れないでください","[忘]{わす}れないで","please don’t forget"],
                ["行きませんか","行かない？","won’t you come?"],
                ["わかりました","わかった","I see; got it"]
              ]
            },
            "Two of these need a word of explanation. A casual request is just the て-form: [待]{ま}って (wait). And a casual invitation turns ～ませんか into ～ない？ with a rising voice: [一緒]{いっしょ}に行かない？ (Do you want to come with me?). It looks like a negative, but the rising intonation makes it an invitation.",
            "The plain form of ～ましょう (let’s) is a separate form, the [[volitional-form|volitional]] (行こう, 食べよう). It belongs to N4 and Unit 6 teaches it."
          ]
        },
        {
          h:"The plain style in writing: a diary",
          body:[
            "Plain forms are not only for chatting. When Japanese people write for themselves, or write stories and articles, they usually use the plain style, called [[futsuu-tai]] ([普通体]{ふつうたい}). Diaries, notes, novels, newspaper articles and most essays use it. (Texts that speak to the reader directly, such as notices, guides and many blogs, often use です・ます instead.) Here is a short diary entry by Cheska:",
            {
              ex:"[十月]{じゅうがつ}[三日]{みっか}\n[今日]{きょう}は[朝]{あさ}から雨だった。[午前]{ごぜん}は[家]{いえ}で[本]{ほん}を[読]{よ}んだ。[午後]{ごご}、友だちのまりやさんと[駅]{えき}の[近]{ちか}くの[喫茶店]{きっさてん}に行った。コーヒーはおいしかった。でも、ケーキはあまり[甘]{あま}くなかった。[明日]{あした}は[日本語]{にほんご}の[宿題]{しゅくだい}をする。",
              label:"Cheska’s diary (plain style)"
            },
            "In English: “3 October. It rained from the morning today. In the morning I read a book at home. In the afternoon I went to a café near the station with my friend Mariya. The coffee was good. But the cake wasn’t very sweet. Tomorrow I’ll do my Japanese homework.”",
            "Every sentence ends in a plain form: a noun with だった, two verbs in the た-form (読んだ, 行った), い-adjectives in the past and past negative, and a dictionary form for tomorrow’s plan. If Cheska told the same story to a teacher, every ending would switch to polite: 雨でした, 読みました, 行きました, おいしかったです, [甘]{あま}くなかったです, します. Nothing else in the sentences would change.",
            {
              key:"Choose one style for a whole piece of writing. Mixing です・ます and plain endings in one diary, essay or report looks careless."
            },
            "Academic reports use a written version of the plain style with である instead of だ. That belongs to the Academic Japanese track ({{desu-masu-and-dearu}}); for now, だ is all you need."
          ]
        },
        {
          h:"Common mistakes",
          body:[
            {
              table:[
                ["✗ Mistake","✓ Correct","Why"],
                ["高いだ","高い","い-adjectives never take だ."],
                ["いくない","よくない","いい uses よ in its other forms."],
                ["きれいくない","きれいじゃない","きれい is a な-adjective."],
                ["[静]{しず}かかった","[静]{しず}かだった","な-adjectives use だった."],
                ["食べないだった","食べなかった","ない → なかった, like an い-adjective."],
                ["あらない","ない","The negative of ある is ない."],
                ["[来]{く}なかった","[来]{こ}なかった","[来]{く}る → [来]{こ}ない → [来]{こ}なかった."]
              ]
            },
            "If several of these catch you, that is completely normal: they are among the most common slips for every learner of Japanese. The cure is short, frequent practice. Convert five polite sentences to plain every day for a week, and the system will start to feel automatic."
          ]
        }
      ],
      try:[
        {
          id:"e3u5-l1-x1",
          type:"mcq",
          q:"What is the plain form of [静]{しず}かでした (it was quiet)?",
          options:[
            {t:"[静]{しず}かだった", ok:true, why:"Right. [静]{しず}か is a な-adjective, so です → だ and でした → だった."},
            {t:"[静]{しず}かかった", why:"～かった is the past of an い-adjective. [静]{しず}か is a な-adjective, so it uses だった."},
            {t:"[静]{しず}かでした", why:"That is the polite form from the question. Its plain partner replaces でした with だった."},
            {t:"[静]{しず}かだた", why:"Close, but the past of だ is だった, with a small っ."}
          ]
        },
        {
          id:"e3u5-l1-x2",
          type:"sort",
          q:"Plain past negatives (“didn’t…”, “wasn’t…”): correct or not?",
          buckets:["Correct","Not a correct form"],
          items:[
            {t:"高くなかった", b:0, why:"い-adjective: 高くない → 高くなかった."},
            {t:"よくなかった", b:0, why:"いい uses よ: よくない → よくなかった."},
            {t:"いくなかった", b:1, why:"いい is irregular: its negative forms use よ, so it is よくなかった."},
            {t:"きれいじゃなかった", b:0, why:"きれい is a な-adjective: きれいじゃない → きれいじゃなかった."},
            {t:"きれいくなかった", b:1, why:"This treats きれい as an い-adjective. It is a な-adjective: きれいじゃなかった."},
            {t:"学生じゃなかった", b:0, why:"Noun: 学生じゃない → 学生じゃなかった."},
            {t:"食べないだった", b:1, why:"ない changes like an い-adjective, so its past is なかった: 食べなかった."},
            {t:"[来]{こ}なかった", b:0, why:"[来]{く}る → [来]{こ}ない → [来]{こ}なかった, read こなかった."}
          ]
        },
        {
          id:"e3u5-l1-x3",
          type:"match",
          q:"Match each polite form to its plain form.",
          pairs:[
            ["行きません","行かない","ません → the ない-form. く → か."],
            ["[来]{き}ました","[来]{き}た","ました → the た-form. [来]{き}た is read きた."],
            ["ありませんでした","なかった","ある → ない → なかった."],
            ["[元]{げん}気です","[元]{げん}気だ","[元]{げん}気 is a な-adjective, so です → だ."],
            ["[寒]{さむ}くないです","[寒]{さむ}くない","い-adjective: just drop です."]
          ]
        },
        {
          id:"e3u5-l1-x4",
          type:"mcq",
          q:"Rodrigo writes his diary in the plain style. How does he write “Yesterday was cold”?",
          options:[
            {
              t:"[昨日]{きのう}は[寒]{さむ}かった。",
              ok:true,
              why:"Right. [寒]{さむ}い is an い-adjective, so the plain past is [寒]{さむ}かった, with no だ."
            },
            {
              t:"[昨日]{きのう}は[寒]{さむ}いだった。",
              why:"い-adjectives never take だ or だった. The past is built into the adjective: [寒]{さむ}かった."
            },
            {
              t:"[昨日]{きのう}は[寒]{さむ}かっただ。",
              why:"[寒]{さむ}かった is already complete. Adding だ after an い-adjective is always wrong."
            },
            {t:"[昨日]{きのう}は[寒]{さむ}かったです。", why:"Grammatical, but polite. In a plain-style diary the です is left out."}
          ]
        },
        {
          id:"e3u5-l1-x5",
          type:"mcq",
          q:"What is the full plain form of [勉強]{べんきょう}しています (I am studying)?",
          options:[
            {t:"[勉強]{べんきょう}している", ok:true, why:"Right. ～ています → ～ている: the います part becomes its plain form いる."},
            {t:"[勉強]{べんきょう}しているだ", why:"いる is a verb, and verbs never take だ."},
            {t:"[勉強]{べんきょう}していた", why:"That is past (“was studying”). The question is non-past."},
            {
              t:"[勉強]{べんきょう}する",
              why:"This is the dictionary form (“study”, “will study”). It loses the meaning of an action in progress."
            }
          ]
        },
        {
          id:"e3u5-l1-x6",
          type:"spot",
          q:"Cheska writes her diary in the plain style. Tap each part that uses a **wrong form** or **breaks the plain style**.",
          ask:"is wrong or breaks the style",
          parts:[
            {t:"[今日]{きょう}は天気がよかった。", flag:false, why:"Correct: いい → よかった, plain."},
            {
              t:"[朝]{あさ}、[公園]{こうえん}を[走]{はし}りました。",
              flag:true,
              why:"Correct Japanese, but polite. The rest of the diary is plain, so it should be [走]{はし}った."
            },
            {t:"[昼]{ひる}ごはんはおいしいだった。", flag:true, why:"A wrong form. おいしい is an い-adjective: おいしかった."},
            "\n",
            {t:"[午後]{ごご}は[図書館]{としょかん}で[勉強]{べんきょう}した。", flag:false, why:"Correct: the plain past of [勉強]{べんきょう}する."},
            {t:"[図]{と}書[館]{かん}はあまり[静]{しず}かじゃなかった。", flag:false, why:"Correct: な-adjective, plain past negative."},
            {t:"[夜]{よる}は友だちが[来]{こ}なかった。", flag:false, why:"Correct: [来]{こ}なかった, read こなかった."}
          ]
        },
        {
          id:"e3u5-l1-x7",
          type:"order",
          q:"Cheska wrote a longer diary entry. Put its sentences in time order, from the morning to tomorrow.",
          items:[
            {t:"午前は[家]{いえ}で本を読んだ。", why:"午前 is the morning: first."},
            {t:"午後、まりやさんと[喫茶店]{きっさてん}に行った。", why:"午後 is the afternoon: after the morning."},
            {t:"コーヒーを[飲]{の}んで、[家]{いえ}に[帰]{かえ}った。", why:"At the café, then home: after going to the café."},
            {t:"[夜]{よる}は[母]{はは}に[電話]{でんわ}した。", why:"[夜]{よる} is the evening: after coming home."},
            {t:"[明日]{あした}は[宿題]{しゅくだい}をする。", why:"Last: a plan for tomorrow, so it is in the non-past dictionary form."}
          ]
        },
        {
          id:"e3u5-l1-x8",
          type:"type",
          q:"Rodrigo writes his diary in the plain style. Type the missing verb in hiragana: 「[昨日]{きのう}は雨だったから、ジムに＿＿。」 (“It rained yesterday, so I didn’t go to the gym.” 行く, go)",
          answer:"いかなかった",
          wrongs:[
            {v:"いきなかった", why:"The ない-form is built on the a-sound, not on the ます stem: 行か + ない → 行かない, past 行かなかった."},
            {v:"いかないでした", why:"That mixes the two styles. In the plain style, ない changes like an い-adjective: ない → なかった."},
            {v:"いきませんでした", why:"That is the polite past negative. A diary in the plain style ends in 行かなかった."}
          ],
          why:"行く → 行かない → 行かなかった. The ない-form ends in い, so it changes like an い-adjective: ない → なかった."
        },
        {
          id:"e3u5-l1-x9",
          type:"type",
          q:"Cheska writes her diary in the plain style. Type the past form of [暑]{あつ}い (hot) in hiragana: 「[今日]{きょう}はとても＿＿。」 (“It was very hot today.”)",
          answer:"あつかった",
          wrongs:[
            {v:"あつかったです", why:"です makes it polite. In the plain style, an い-adjective in the past simply ends in かった."},
            {v:"あついだった", why:"い-adjectives never take だ or だった. Their past is い → かった."}
          ],
          why:"い-adjectives make their own past: [暑]{あつ}い → [暑]{あつ}かった. In the plain style nothing follows it."
        },
        {
          id:"e3u5-l1-x10",
          type:"type",
          q:"Rodrigo writes in his diary: “The festival wasn’t very lively.” Type the plain past negative ending in hiragana: 「お[祭]{まつ}りは、あまりにぎやか＿＿。」 (にぎやか, lively, is a な-adjective)",
          answer:["じゃなかった", "ではなかった"],
          wrongs:[
            {v:"くなかった", why:"くなかった is for い-adjectives ([暑]{あつ}くなかった). にぎやか is a な-adjective, so it works like a noun: じゃなかった."},
            {v:"じゃありませんでした", why:"That is the polite past negative. In the plain style it is じゃなかった."},
            {v:"じゃないだった", why:"じゃない ends in い, so its past is じゃなかった, with no だ."}
          ],
          why:"な-adjectives and nouns share one pattern: にぎやかだ → にぎやかじゃない → にぎやかじゃなかった. ではなかった is the more formal, written version."
        }
      ],
      apply:{
        intro:"Practise switching between the two styles with your own sentences. Keep the notes for yourself.",
        tasks:[
          {
            t:"Make a four-box table for twelve words",
            how:[
              "Choose twelve words: four verbs (one godan verb ending in う, one ichidan verb, する and [来]{く}る), three い-adjectives (include いい), three な-adjectives (include きれい) and two nouns.",
              "For each, write the four plain forms: non-past, negative, past, past negative.",
              "Check the verbs in a dictionary that shows verb forms, such as Jisho.org (“Show inflections”) or OJAD, and the adjectives against the tables in this lesson."
            ],
            write:"[買]{か}う・[買]{か}わない・[買]{か}った・[買]{か}わなかった …"
          },
          {
            t:"Convert five polite sentences",
            how:[
              "Write five polite sentences about your week, for example [月曜日]{げつようび}は[忙]{いそが}しかったです。",
              "Rewrite each in the plain style. Change only the ending.",
              "Read both versions aloud and notice that the meaning hasn’t changed."
            ],
            write:"Polite… → Plain…"
          },
          {
            t:"Write a three-line diary",
            how:[
              "For three days, write a three-line diary entry in the plain style: what the weather was like, one thing you did, and one plan for tomorrow.",
              "Use at least one verb, one adjective and one noun + だった each day.",
              "Check that every sentence ends in a plain form and that no だ follows an い-adjective."
            ],
            write:"Day 1… Day 2… Day 3…"
          }
        ],
        proof:"A checked table of plain forms for twelve words, five sentences in both styles, and three short diary entries in the plain style."
      },
      read:[
        {
          book:"taekim",
          where:"Basic Grammar, “Expressing state-of-being” (だ and its negative and past forms) and “Adjectives” (plain forms of な- and い-adjectives, and the いい exception)",
          note:"The plain forms of nouns and adjectives, explained without です first."
        },
        {
          book:"taekim",
          where:"Basic Grammar, “Negative Verbs” and “Past Tense”",
          note:"The verb side of the system, if you want a second explanation."
        }
      ]
    },
    {
      id:"e3u5-l2",
      title:"Plain or polite? Choosing your style",
      minutes:50,
      goals:[
        "Explain what decides the choice between polite and plain speech: closeness (ウチ・ソト) and rank (up and down)",
        "Choose the right style for common situations: friends, family, teachers, colleagues, shops and strangers",
        "Recognise the moment when someone invites you to switch to plain speech, and respond naturally",
        "Know which kinds of writing use the plain style and which use です・ます",
        "Keep a sentence polite by ending it politely, even with plain forms inside"
      ],
      hook:{
        q:"Kaito’s manager at the convenience store checks the shift chart and asks, in plain form: 「[明日]{あした}も[夜勤]{やきん}できる？」 (Can you do the night shift tomorrow too?) What is the most natural reply?",
        options:["はい、できます。","うん、できる。","できるよ。","できるだ。"],
        answer:0,
        reveal:"**はい、できます。** Plain speech doesn’t always go both ways. A manager often speaks plainly to people in the team, but the team still answers politely, because the relationship is not equal. (できるだ is never correct: verbs don’t take だ.) This lesson shows who uses which style with whom, how people move from polite to plain, and why polite is always the safe choice while you are learning."
      },
      learn:[
        {
          h:"Two styles, one choice per sentence",
          body:[
            {
              lead:"Every time a Japanese speaker ends a sentence, they choose a style: polite ([[desu-masu-tai]]) or plain ([[futsuu-tai]]). For most sentences there is no neutral middle, so even a simple “I’m going” has to come out as [行]{い}きます or 行く."
            },
            "English has a similar choice, but it is spread over many words. “Good morning, Professor Ōnishi. Could you possibly…?” and “Hey Toby, can you…?” are different styles. In Japanese the choice is built into the end of almost every sentence, so you meet it constantly.",
            "Plain speech used in conversation is called [[casual-speech|casual speech]]. Japanese has an everyday word for it: タメ[口]{ぐち} ([[tameguchi]]), speaking to someone as an equal. Polite speech is part of [[keigo]], the wider system of respectful language; です and ます are its everyday, basic layer.",
            "The choice is not about the topic and not about grammar. It is about the relationship between the speaker and the listener. The same person may say 行く to a friend, 行きます to a teacher and 行く again to their mother, all in one afternoon.",
            {key:"Style follows the relationship: who you are talking to, not what you are talking about."}
          ]
        },
        {
          h:"Who gets which style",
          body:[
            "There are no fixed laws, and families, regions and workplaces differ. But these patterns hold for most adults in Japan today:",
            {
              table:[
                ["Talking to…","Usual style","Notes"],
                ["close friends, a partner","plain","Polite speech here sounds distant."],
                ["family","plain","Most families; some speak more formally to older relatives."],
                ["children","plain","Usually; teachers often use です・ます to a whole class."],
                ["classmates of your age","plain, quite soon","Often within a few meetings."],
                ["a new acquaintance","polite at first","Even at the same age."],
                ["teachers, bosses, older people","polite","Even when you know them well."],
                ["shop staff, strangers, officials","polite","Also on the phone and by email."]
              ]
            },
            "Two things decide most of these rows. The first is **closeness**: how far inside your circle the person is. The second is **rank**: age, position, and who joined a group first. The next section looks at both.",
            "Notice the row for teachers and bosses. A teacher may speak plainly to students, and a boss to the team, as Kaito’s manager did in the warm-up. The students and the team still answer politely. Plain speech going down and polite speech going up is completely normal; it isn’t rude in either direction."
          ]
        },
        {
          h:"ウチ and ソト, up and down",
          body:[
            "Books on Japanese language and culture often describe this with the words [[uchi-soto|ウチ and ソト]]: inside and outside. ウチ is your own circle, the people you treat as “us”: family, close friends, sometimes your team. ソト is everyone outside it. Plain speech is the language of ウチ; polite speech is the language of ソト.",
            {
              fig:"<svg viewBox='0 0 340 400'><text x='170' y='20' text-anchor='middle'>Who usually gets which style</text><rect class='d-rose' x='6' y='34' width='328' height='250' rx='14' stroke-width='2'/><text class='s' x='170' y='54' text-anchor='middle'>ソト (outside): polite</text><text class='s' x='170' y='72' text-anchor='middle'>strangers, shop staff, customers</text><rect class='d-gold' x='34' y='84' width='272' height='164' rx='12' stroke-width='2'/><text class='s' x='170' y='104' text-anchor='middle'>in between: it depends</text><text class='s' x='170' y='122' text-anchor='middle'>classmates, colleagues, neighbours</text><rect class='d-sage' x='68' y='136' width='204' height='92' rx='10' stroke-width='2'/><text x='170' y='160' text-anchor='middle'>ウチ (inside): plain</text><text class='s' x='170' y='182' text-anchor='middle'>family, close friends,</text><text class='s' x='170' y='200' text-anchor='middle'>partner, children</text><text class='s' x='170' y='218' text-anchor='middle'>(the circle you call “us”)</text><text class='s' x='170' y='272' text-anchor='middle'>The circles move with the situation.</text><rect class='d-panel' x='6' y='296' width='328' height='96' rx='8' stroke-width='1.5'/><text x='20' y='318'>The second dial: up and down</text><text class='s' x='20' y='340'>Older people, seniors (せんぱい), teachers</text><text class='s' x='20' y='358'>and bosses get polite speech, even when</text><text class='s' x='20' y='376'>you are close. They may answer in plain.</text></svg>",
              alt:"Three nested boxes. Outer box, ソト (outside): polite, for strangers, shop staff and customers. Middle box: it depends, for classmates, colleagues and neighbours. Inner box, ウチ (inside): plain, for family, close friends, a partner and children. The circles move with the situation. A panel below explains the second dial, up and down: older people, seniors, teachers and bosses get polite speech even when you are close, and they may answer in plain.",
              cap:"Closeness and rank together decide the style. Polite is never wrong in the outer circles."
            },
            "The circles move. Two colleagues may chat in plain speech over lunch and switch to polite speech in a meeting with clients, where they speak as members of their company to outsiders. Polite speech marks the situation as public, plain speech as private.",
            "The second dial is **rank**. In schools, clubs and workplaces, people who joined earlier are your [先輩]{せんぱい} (senpai, seniors), and those who joined later are your [後輩]{こうはい} (kouhai, juniors); see [[senpai-kouhai]]. A [後輩]{こうはい} normally speaks politely to a [先輩]{せんぱい}, even after years of friendship, and the [先輩]{せんぱい} often answers in plain speech. Age works in a similar way: many people stay polite with someone noticeably older.",
            "You will meet the deeper layers of respectful language, [尊敬語]{そんけいご} and [謙譲語]{けんじょうご}, in Unit 7 and in the Academic Japanese track ({{keigo-system}}). For everyday life, choosing between です・ます and plain forms is the decision you make most often."
          ]
        },
        {
          h:"Moving from polite to plain",
          body:[
            "Between people of similar age and position, speech often starts polite and becomes plain as they get to know each other. Sometimes this happens by itself; sometimes one person invites it:",
            {
              ex:"A: [同]{おな}い[年]{どし}だから、タメ[口]{ぐち}でいいよ。\nWe’re the same age, so you can talk casually with me.\n\nB: ほんと？じゃあ、そうする。\nReally? OK, I will.",
              label:"An invitation to switch"
            },
            "A good rule while you are learning: **follow the other person**. If a classmate or neighbour of your age speaks plainly to you for a while, you can answer the same way. If they keep using です and ます, stay polite too. Someone senior speaking plainly to you is not an invitation; keep answering politely unless they tell you otherwise.",
            "During the change, people often mix the two styles. A sentence ends in です, the next in a plain form, and over a few weeks the plain forms take over. This mixing is natural, so don’t worry if your own speech wobbles.",
            {
              tip:"Not sure? You can ask: タメ[口]{ぐち}でもいいですか。 (Is it OK if I speak casually?) Asking politely is itself polite."
            }
          ]
        },
        {
          h:"Plain forms in writing and in your head",
          body:[
            "In writing, the style depends on the reader and the kind of text:",
            {
              table:[
                ["Kind of writing","Usual style"],
                ["your diary, notes, to-do lists","plain"],
                ["messages to friends and family","plain (casual)"],
                ["novels (the narration), newspaper articles","plain"],
                ["reports and essays","usually plain, often with である"],
                ["emails to teachers, companies, officials","polite"],
                ["letters, notices and announcements to the public","polite"]
              ]
            },
            "Social media is mixed: some people write posts in です・ます because they are addressing an audience, others write in plain style as if writing a diary. Read a few posts by people you follow and you will see both.",
            "Plain forms are also the language of thinking aloud. When you talk to yourself, or react to something without really addressing anyone, the plain form comes out: あ、[雨]{あめ}だ。 (Oh, it’s raining.) あれ？[財布]{さいふ}がない。 (Huh? My wallet’s gone.)",
            "That is why you may hear short plain reactions such as わあ、すごい！ even in polite company: they sound like thoughts spoken aloud. When you speak *to* the person, though, go back to the polite style: すごいですね。"
          ]
        },
        {
          h:"Politeness lives at the end of the sentence",
          body:[
            "Here is the most useful fact about the two styles: politeness is decided at the **end** of the sentence. Inside a sentence, before words such as [[kara-reason|から]] (because), plain forms are normal in polite speech. (In very formal speech some people keep ます here too: ありますから.) You saw this in Unit 3:",
            {
              ex:"[明日]{あした}は雨だから、[家]{いえ}にいます。\nIt’s going to rain tomorrow, so I’ll stay at home.\n\n[熱]{ねつ}があるから、[今日]{きょう}は[休]{やす}みます。\nI have a temperature, so I’ll take today off.",
              label:"Plain inside, polite at the end"
            },
            "Both sentences are polite, because they end in ます. The plain forms 雨だ and ある sit inside. The rest of this unit uses this fact again and again: in Lesson 4, plain forms describe nouns ([昨日]{きのう}[買]{か}った[本]{ほん}, the book I bought yesterday), and in Lesson 5 they go before ～んです and ～と[思]{おも}います. All of these can be part of a perfectly polite sentence.",
            {key:"Inside the sentence, plain forms do the grammar. At the end, you choose the style."}
          ]
        },
        {
          h:"Common mistakes and a safe default",
          body:[
            {
              list:[
                "**Plain speech to someone senior** because they spoke plainly to you. Their plain speech reflects their position; your reply should still be polite.",
                "**Plain endings in an email or message to a teacher or company**, such as 休む。 or 出した。 End with ます and です.",
                "**Mixing styles in one piece of writing**: a diary or essay that switches between 行った and 行きました looks careless. Pick one.",
                "**Staying very polite with close friends** long after they have switched. It isn’t rude, but it can feel cold or distant, as if you were keeping them at arm’s length.",
                "**Copying casual speech from anime and manga.** Characters often speak in exaggerated ways that real people don’t, so learn casual speech from real conversations (Lesson 3)."
              ]
            },
            "When you are unsure, choose polite. A polite sentence to a friend sounds a little stiff; a plain sentence to a stranger or a senior can sound rude. The first mistake is easy to fix and nobody will mind.",
            "Choosing a style well takes years, and Japanese people themselves sometimes hesitate, for example with a new colleague of a similar age. You don’t need to get it perfect; you need a safe default and the habit of listening to how people speak to you."
          ]
        }
      ],
      try:[
        {
          id:"e3u5-l2-x1",
          type:"sort",
          q:"Which style would a typical adult learner use in each situation?",
          buckets:["Plain","Polite"],
          items:[
            {t:"Chatting with your younger brother", b:0, why:"Family: plain speech is normal."},
            {t:"Messaging your best friend", b:0, why:"A close friend: plain speech. Polite would sound distant."},
            {t:"Asking a station attendant for directions", b:1, why:"A stranger in a public role: polite."},
            {t:"A job interview", b:1, why:"A formal situation with people outside your circle: polite."},
            {
              t:"Talking to a teacher you see every week",
              b:1,
              why:"Rank matters: teachers get polite speech even when you know them well."
            },
            {
              t:"Meeting a neighbour of your age for the first time",
              b:1,
              why:"A new acquaintance: start polite, even at the same age."
            },
            {t:"Writing in your own diary", b:0, why:"Writing for yourself: the plain style."},
            {t:"Talking to a five-year-old child", b:0, why:"Adults speak plainly to children."}
          ]
        },
        {
          id:"e3u5-l2-x2",
          type:"mcq",
          q:"Mariya is a second-year in her university’s English club. A third-year member asks her: 「[週末]{しゅうまつ}、[練習]{れんしゅう}に[来]{く}る？」 (Are you coming to practice at the weekend?) What is the best reply?",
          options:[
            {
              t:"はい、行きます。",
              ok:true,
              why:"Right. The third-year is Mariya’s [先輩]{せんぱい}, so she answers politely. She uses 行きます because she is going to the practice, away from where she is now."
            },
            {
              t:"うん、行く。",
              why:"Correct Japanese, but plain. A junior member normally answers a [先輩]{せんぱい} politely, even when the [先輩]{せんぱい} speaks plainly."
            },
            {
              t:"はい、[来]{き}ます。",
              why:"Polite, but [来]{く}る is for movement towards the speaker. Mariya is talking about going to the practice, so she says 行きます."
            },
            {t:"はい、行くです。", why:"です doesn’t follow a verb. The polite form is 行きます."}
          ]
        },
        {
          id:"e3u5-l2-x3",
          type:"match",
          q:"Match each word to its meaning.",
          pairs:[
            [
              "タメ[口]{ぐち}",
              "casual speech, as between equals",
              "タメ is slang for “same age” or “on equal terms”; [口]{ぐち} here means a way of speaking."
            ],
            [
              "ウチ",
              "your own circle, the people you call “us”",
              "Family, close friends, sometimes your team: plain speech."
            ],
            ["ソト","people outside your circle","Strangers, customers, other companies: polite speech."],
            [
              "先[輩]{ぱい}",
              "someone who joined a school, club or workplace before you",
              "Usually gets polite speech from you, even when you are close."
            ],
            [
              "[敬]{けい}語",
              "respectful language",
              "The whole system of polite and respectful language, with です・ます as its basic layer."
            ]
          ]
        },
        {
          id:"e3u5-l2-x4",
          type:"mcq",
          q:"Which piece of writing would normally be in the plain style?",
          options:[
            {
              t:"A newspaper article about a new train line",
              ok:true,
              why:"Right. Newspaper articles, like novels and reports, are written in the plain style."
            },
            {
              t:"An email to a hotel asking about a booking",
              why:"An email to a company or business is written in the polite style."
            },
            {
              t:"A notice from a city office to residents",
              why:"Public notices address readers directly and politely, with です・ます and ～てください."
            },
            {t:"A message to your teacher saying you will be absent", why:"Teachers get polite speech in writing too."}
          ]
        },
        {
          id:"e3u5-l2-x5",
          type:"spot",
          q:"Cheska sends this message to her Japanese teacher. Tap each part that **ends too casually** for a teacher.",
          ask:"is too casual for a teacher",
          parts:[
            {t:"先[生]{せい}、おはようございます。", flag:false, why:"A polite greeting: fine."},
            {
              t:"[熱]{ねつ}があるから、",
              flag:false,
              why:"Fine. This plain form is inside the sentence, before から. Politeness is decided at the end."
            },
            {
              t:"[今日]{きょう}は[授業]{じゅぎょう}を休む。",
              flag:true,
              why:"Too casual: the sentence ends in a plain form. To a teacher: 休みます."
            },
            {t:"すみません。", flag:false, why:"A polite apology: fine."},
            "\n",
            {
              t:"[宿題]{しゅくだい}は[昨日]{きのう}メールで[出]{だ}した。",
              flag:true,
              why:"Too casual: the sentence ends in the plain past. To a teacher: 出しました."
            },
            {t:"[明日]{あした}は行きます。", flag:false, why:"Polite: fine."},
            {t:"よろしくお[願]{ねが}いします。", flag:false, why:"A polite set phrase that closes the message: fine."}
          ]
        },
        {
          id:"e3u5-l2-x6",
          type:"mcq",
          q:"Mariya, your housemate and a close friend, has spoken to you in plain form for months. You still always answer in です・ます. What effect does this most likely have?",
          options:[
            {
              t:"It can feel a little distant, but it isn’t rude.",
              ok:true,
              why:"Right. Polite speech to a close friend keeps them at arm’s length. Nobody will be offended, but switching to plain would feel warmer."
            },
            {
              t:"It is rude, because you are refusing to be friends.",
              why:"Polite speech is never rude in itself. It can feel distant, which is a different thing."
            },
            {
              t:"It is a grammar mistake.",
              why:"The choice of style is about relationships, not grammar. Your polite sentences are grammatical."
            },
            {
              t:"It makes you sound younger than Mariya.",
              why:"Style doesn’t mark your own age. It marks how close you are and the difference in rank."
            }
          ]
        },
        {
          id:"e3u5-l2-x7",
          type:"mcq",
          q:"On your first day at a new job, a colleague of your own age says: 「タメ[口]{ぐち}でいいよ。」 What does she mean?",
          options:[
            {
              t:"“You can talk to me casually.”",
              ok:true,
              why:"Right. タメ[口]{ぐち} is casual speech between equals, and ～でいい means “is fine”. She is inviting you to drop です・ます with her."
            },
            {t:"“Please speak more politely.”", why:"The opposite. She is inviting you to use plain speech."},
            {t:"“Let’s have lunch together.”", why:"Nothing here is about lunch. タメ[口]{ぐち} is a kind of speech."},
            {
              t:"“You speak very well.”",
              why:"She isn’t praising your Japanese. She is giving you permission to speak casually."
            }
          ]
        },
        {
          id:"e3u5-l2-x8",
          type:"type",
          q:"Kaito and Mariya are housemates and close friends. Kaito asks her: “Are you going to the supermarket tomorrow?” Type the verb in hiragana, in the style he would use: 「[明日]{あした}、スーパーに＿＿？」 (行く, go)",
          answer:["いく","いくの"],
          wrongs:[
            {v:"いきますか", why:"That is the polite question. Between close friends of the same age it sounds distant, as if Kaito were keeping her at arm’s length."},
            {v:"いくか", why:"In casual speech a bare か after a plain form sounds rough or blunt. A rising voice does the work: 行く？ (Lesson 3 says more.)"}
          ],
          why:"With a close friend, the plain form with a rising voice is the natural question: [明日]{あした}、スーパーに行く？ (行くの？ is just as natural.)"
        },
        {
          id:"e3u5-l2-x9",
          type:"type",
          q:"Cheska tells a friend: 「[明日]{あした}、[授業]{じゅぎょう}休む。」 Now she writes to her teacher. Type the verb in hiragana, in the style that suits a teacher: 「すみません、[明日]{あした}の[授業]{じゅぎょう}を＿＿。」 (休む, miss, take a day off)",
          answer:["やすみます","やすんでもいいですか"],
          wrongs:[
            {v:"やすむ", why:"The plain form is for friends and family. A teacher is above you, so the sentence ends in ます."},
            {v:"やすむです", why:"です doesn’t make a verb polite. The polite form of a verb is its ます-form: 休みます."}
          ],
          why:"Politeness lives at the end of the sentence: 休む becomes 休みます for a teacher. The rest of the sentence stays the same. (Asking, with 休んでもいいですか, is even more considerate.)"
        }
      ],
      apply:{
        intro:"Look at the people in your own life through the two styles. Keep the notes for yourself.",
        tasks:[
          {
            t:"Map your own circles",
            how:[
              "Draw three circles like the diagram in this lesson.",
              "Write the names (or roles) of ten people you talk to often: family, friends, classmates, colleagues, teachers, people in shops.",
              "Mark each one with the Japanese style you would use if you spoke Japanese together, and note why: closeness, rank, or both."
            ],
            write:"Inside (plain)… In between… Outside (polite)…"
          },
          {
            t:"One message, two styles",
            how:[
              "Write a short message saying you can’t come tomorrow because you have a cold, in the polite style for a teacher or manager.",
              "Write the same message in the plain style for a close friend.",
              "Compare the two. Underline every place where the ending changed."
            ],
            write:"To my teacher… To my friend…"
          },
          {
            t:"Listen for the switch",
            how:[
              "Watch a Japanese TV drama, video or podcast with ordinary conversation (not anime).",
              "Note three moments where someone speaks plainly and three where someone speaks politely, and who is talking to whom.",
              "Did anyone speak plainly to a person who answered politely? Note why you think that was."
            ],
            write:"Plain: who to whom… Polite: who to whom…"
          }
        ],
        proof:"A map of ten people with the style you would use for each, one message in both styles, and six notes on who used which style in a real conversation."
      },
      read:[
        {
          book:"taekim",
          where:"Essential Grammar, “Polite Form and Verb Stems”, sections “Not being rude in Japan” and “「です」 is NOT the same as 「だ」”",
          note:"Who gets polite speech, and why politeness lives at the end of the sentence."
        },
        {
          book:"irodori",
          where:"Elementary 1 (A2), Lesson 8 “Have you ever played baseball?”",
          note:"Mostly polite, but one conversation is in the plain style ([野球]{やきゅう}、したことある？, いっしょにやらない？), and two grammar notes show how ～たことがあります and ～に行きませんか change in the plain style (～たことある, ～に行かない？). With audio."
        }
      ]
    },
    {
      id:"e3u5-l3",
      title:"How casual Japanese really sounds",
      minutes:60,
      goals:[
        "Name the features that make speech casual, beyond plain forms",
        "Drop は, が and を naturally, and know which particles must stay",
        "Recognise and use the contractions ～てる, ～とく, ～ちゃう/～じゃう, ～なきゃ and ～ちゃ/～じゃ",
        "Use よ, ね and よね after plain forms correctly, including after nouns and adjectives",
        "Ask casual questions without か, and answer with うん and ううん"
      ],
      hook:{
        q:"A friend opens the fridge and says: 「あ、ケーキ、もう[食]{た}べちゃった。」 What does [食]{た}べちゃった mean?",
        options:[
          "I’ve already eaten it (oops, it’s gone)",
          "I’m going to eat it now",
          "I didn’t eat it",
          "Let’s eat it together"
        ],
        answer:0,
        reveal:"**I’ve already eaten it.** [食]{た}べちゃった is a casual contraction of [食]{た}べてしまった: the action is finished, often with a feeling of “oops” or “it’s all gone”. Notice too that the particle を after ケーキ has disappeared. Casual Japanese is more than plain forms: it drops particles, squeezes words together and adds small words such as よ and ね. This lesson shows you the main features, so that you can follow friends’ conversations and start to sound natural."
      },
      learn:[
        {
          h:"Casual speech is more than plain forms",
          body:[
            {
              lead:"Plain forms are the skeleton of [[casual-speech|casual speech]]. Friends add more on top: they leave out particles, squeeze words together, end sentences with よ and ね, and ask questions with the voice alone."
            },
            "Here is the same short exchange twice, first between two colleagues who speak politely, then between two friends:",
            {
              ex:"A: [昨日]{きのう}の[映画]{えいが}、[見]{み}ましたか。\nB: はい、見ました。おもしろかったですね。\n\nA: [昨日]{きのう}の[映画]{えいが}、見た？\nB: うん、見た。おもしろかったね。",
              label:"Polite, then casual"
            },
            "Both mean: “Did you watch the film yesterday?” “Yes, I did. It was good, wasn’t it?” In the casual version, the endings are plain, the question has no か, and はい has become うん. Notice also that neither version has a particle after [映画]{えいが}: a pause does the job, and that is common even in polite conversation.",
            "The everyday yes and no of casual speech are うん (yes) and ううん (no). Listen for the difference: うん is short, while ううん has an extra beat at the start, a little like English “uh-uh”. Don’t confuse it with a long, drawn-out うーん (hmm…), which is the sound of someone thinking. You will also hear ええ, a soft yes that sits between はい and うん.",
            "Everything in this lesson is **casual**: use it with the people from the inner circle in Lesson 2, not with teachers, customers or strangers."
          ]
        },
        {
          h:"Dropped particles",
          body:[
            "In conversation, the particles は, が and を are often left out, because the listener can guess them. A short pause often takes their place (a comma in writing). This is called [[particle-dropping]].",
            {
              fig:"<svg viewBox='0 0 340 352'><text x='170' y='20' text-anchor='middle'>Which particles fall away in casual speech?</text><rect class='d-sage' x='6' y='34' width='328' height='150' rx='8' stroke-width='2'/><text class='s' x='16' y='54'>often dropped: は, が and を</text><text x='20' y='82'>えいが</text><rect class='d-soft' x='74' y='66' width='26' height='22' rx='4' stroke-width='1.5' stroke-dasharray='3 3'/><text class='s' x='87' y='82' text-anchor='middle'>を</text><text x='108' y='82'>みた？</text><text x='200' y='82'>→  えいが、みた？</text><text x='20' y='112'>じかん</text><rect class='d-soft' x='74' y='96' width='26' height='22' rx='4' stroke-width='1.5' stroke-dasharray='3 3'/><text class='s' x='87' y='112' text-anchor='middle'>が</text><text x='108' y='112'>ある？</text><text x='200' y='112'>→  じかん、ある？</text><text x='20' y='142'>これ</text><rect class='d-soft' x='74' y='126' width='26' height='22' rx='4' stroke-width='1.5' stroke-dasharray='3 3'/><text class='s' x='87' y='142' text-anchor='middle'>は</text><text x='108' y='142'>おいしい。</text><text x='200' y='142'>→  これ、おいしい。</text><text class='s' x='170' y='172' text-anchor='middle'>The meaning is easy to guess, so the particle can go.</text><rect class='d-rose' x='6' y='196' width='328' height='148' rx='8' stroke-width='2'/><text class='s' x='16' y='216'>usually kept: で, と, から, まで, も</text><text x='20' y='244'>えき</text><rect class='d-lup' x='58' y='228' width='26' height='22' rx='4' stroke-width='1.5'/><text x='71' y='244' text-anchor='middle'>で</text><text x='92' y='244'>まってる。</text><text x='20' y='274'>だれ</text><rect class='d-lup' x='58' y='258' width='26' height='22' rx='4' stroke-width='1.5'/><text x='71' y='274' text-anchor='middle'>と</text><text x='92' y='274'>いくの？</text><text x='20' y='304'>わたし</text><rect class='d-lup' x='74' y='288' width='26' height='22' rx='4' stroke-width='1.5'/><text x='87' y='304' text-anchor='middle'>も</text><text x='108' y='304'>いく。</text><text class='s' x='170' y='334' text-anchor='middle'>Without them the meaning would be lost.</text></svg>",
              alt:"Two panels. Often dropped: は, が and を. Examples: えいがをみた? becomes えいが、みた?; じかんがある? becomes じかん、ある?; これはおいしい becomes これ、おいしい. The meaning is easy to guess, so the particle can go. Usually kept: で, と, から, まで and も. Examples: えきでまってる; だれといくの?; わたしもいく. Without them the meaning would be lost.",
              cap:"Particles that only mark a role the listener can guess may go; particles that add meaning stay."
            },
            "に or へ for a destination is also often dropped with verbs of movement: コンビニ[行]{い}く？ (Shall we go to the convenience store?) うち、[帰]{かえ}る。 (I’m going home.)",
            "Other particles normally stay, because without them the listener couldn’t work out the meaning: で (place of action, means), と (with), から and まで (from, until), も (also). [駅]{えき}で[待]{ま}ってる (I’ll be waiting at the station) needs its で; ✗ [駅]{えき}[待]{ま}ってる sounds broken.",
            "Two more cases where particles usually stay: が after a question word ([誰]{だれ}が[来]{く}るの？ Who’s coming?), and は when it shows contrast ([肉]{にく}は食べない。 I don’t eat meat, though I eat other things).",
            {
              tip:"Dropping particles is optional. Keeping them never sounds wrong, even in casual speech. Start by dropping を and は in short questions, the most common case."
            }
          ]
        },
        {
          h:"Contractions",
          body:[
            "Casual speech also squeezes some common endings into shorter forms. Japanese calls these shortened forms [[shukuyakukei]] ([縮約]{しゅくやく}[形]{けい}); in this track they are [[contraction-casual|casual contractions]]. You need to recognise all of these, and you can use them with friends:",
            {
              table:[
                ["Full form","Casual","Example"],
                ["～ている","～てる","[何]{なに}してる？\nWhat are you doing?"],
                ["～ておく","～とく","[予約]{よやく}しとく。\nI’ll book it (in advance)."],
                ["～てしまう","～ちゃう","[寝]{ね}ちゃった。\nI (accidentally) fell asleep."],
                ["～なければ","～なきゃ","もう[帰]{かえ}らなきゃ。\nI have to go home now."],
                ["～ては / ～では","～ちゃ / ～じゃ","ここで[寝]{ね}ちゃだめ。\nYou can’t sleep here."]
              ]
            },
            "When the て-form ends in で, the contractions use voiced sounds: [読]{よ}んでいる → 読んでる, 読んでおく → 読んどく, [飲]{の}んでしまった → [飲]{の}んじゃった.",
            "The contracted forms change just like the full forms: 見てる, 見てない (isn’t watching), 見てた (was watching); 食べちゃう, 食べちゃった.",
            "What do they mean? ～ている you know from Unit 3 ([[te-iru]]). The others are N4 grammar that Unit 6 teaches in full ({{te-shimau-te-oku}}, {{must-and-dont-have-to}}): ～ておく is doing something in advance; ～てしまう is finishing something completely, often with regret or surprise (“oops”); ～なければ (ならない) means “must”, and casual speech often stops at ～なきゃ. For now, learn to recognise them.",
            {
              warn:"Contractions are spoken forms. In an email to a teacher or a report, use the full forms: [待]{ま}っています, not [待]{ま}ってます. In polite conversation, ～てます is very common and fine ([待]{ま}ってます); but the plain contractions on their own ([待]{ま}ってる, [寝]{ね}ちゃった) belong with friends and family."
            }
          ]
        },
        {
          h:"よ, ね and よね",
          body:[
            "In Unit 2 you met よ and ね after です and ます, as [[sentence-final-particle|sentence-final particles]]. In casual speech they come straight after plain forms, and they are everywhere. Together they are covered by the glossary entry [[sentence-ending-yo-ne]].",
            {
              table:[
                ["Particle","What it does","Example"],
                ["よ","tells the listener something new, or insists","[明日]{あした}、テストだよ。\nThere’s a test tomorrow, you know."],
                ["ね","shares a feeling or asks for agreement","[暑]{あつ}いね。\nIt’s hot, isn’t it?"],
                ["よね","checks something you think you both know","[明日]{あした}、テストだよね？\nThere’s a test tomorrow, right?"]
              ]
            },
            "The order is always よね, never ✗ ねよ.",
            "Now the grammar point that trips up many learners. **Verbs and い-adjectives** take よ and ね directly: 行くよ, 行くね; [暑]{あつ}いよ, [暑]{あつ}いね. **Nouns and な-adjectives** take だ first: [雨]{あめ}だよ, [暇]{ひま}だね. So ✗ [暑]{あつ}いだね is wrong, and so is ✗ 行くだよ.",
            "You will also hear some speakers drop the だ after a noun or な-adjective: きれいね, 雨よ. Older descriptions of Japanese label this “women’s speech”, and fiction often gives it to female characters, but real speakers vary a lot, and a few set phrases such as じゃあ、[明日]{あした}ね (see you tomorrow) are used by everyone. When you build sentences yourself, だね and だよ are the neutral choice that suits anyone.",
            "Be careful with よ. Used too often, or when telling someone what they should already know, it can sound pushy, like “I’m telling you!”. ね is gentler, and Japanese speakers use it constantly to keep a conversation friendly. It also softens promises and plans: じゃあ、[明日]{あした}ね。 (See you tomorrow, then.)"
          ]
        },
        {
          h:"Questions without か",
          body:[
            "In polite speech, か marks a question. In casual speech, a bare か after a plain form can sound rough or blunt, so people simply raise their voice at the end:",
            {
              ex:"[明日]{あした}、[来]{く}る？ ↗\nAre you coming tomorrow?\n\n[昼]{ひる}ごはん、もう食べた？ ↗\nHave you had lunch yet?\n\n[今]{いま}、[暇]{ひま}？ ↗\nAre you free now?",
              label:"Rising intonation does the work"
            },
            "Notice the last one. In a question, a noun or な-adjective drops だ: [暇]{ひま}？, [学生]{がくせい}？, [本当]{ほんとう}？ (Really?). ✗ [暇]{ひま}だ？ sounds odd, because だ makes a firm statement. Only this non-past だ drops; the past stays: [昨日]{きのう}、[暇]{ひま}だった？ (Were you free yesterday?)",
            "Question words work the same way: どこ行く？ (Where are you going?) 何食べる？ (What shall we eat? / What are you having?)",
            "You will also hear casual questions ending in の: どこ行くの？ This sounds softer and shows interest in the background or the reason. It is the casual form of ～んですか, which Lesson 5 explains. After a noun or な-adjective it becomes なの: 学生なの？",
            "か does appear in casual speech in a few fixed uses: そうか (I see; said to yourself as you realise something), and ～かな, which means “I wonder”: [明日]{あした}、雨かな。 (I wonder if it’ll rain tomorrow.) [来]{く}るかな。 (I wonder if they’ll come.)",
            {key:"Casual question: plain form + rising voice. No か, and no だ after nouns."}
          ]
        },
        {
          h:"Putting it together: making plans",
          body:[
            "Rodrigo and Cheska are friends. Read their messages and notice each casual feature:",
            {
              ex:"ロドリゴ：チェスカ、[今夜]{こんや}、[暇]{ひま}？\nチェスカ：うん、[暇]{ひま}だよ。どうして？\nロドリゴ：[駅]{えき}の[前]{まえ}の[新]{あたら}しいラーメン[屋]{や}、もう行った？\nチェスカ：ううん、まだ。\nロドリゴ：じゃあ、[一緒]{いっしょ}に行かない？\nチェスカ：いいね！[何時]{なんじ}にする？\nロドリゴ：[七時]{しちじ}はどう？\nチェスカ：オッケー。じゃあ、七時に[駅]{えき}で[待]{ま}ってるね。",
              label:"Rodrigo and Cheska make plans"
            },
            "In English: “Cheska, are you free tonight?” “Yes, I am. Why?” “Have you been to the new ramen place in front of the station yet?” “No, not yet.” “Then do you want to go together?” “Sounds good! What time shall we make it?” “How about seven?” “OK. I’ll wait for you at the station at seven, then.”",
            {
              list:[
                "**Questions without か:** [暇]{ひま}？, もう行った？, 何時にする？ (and no だ after [暇]{ひま}).",
                "**Dropped particles:** ラーメン[屋]{や}、もう行った？ has no に; the pause does its job.",
                "**よ and ね:** [暇]{ひま}だよ tells Rodrigo something he didn’t know; [待]{ま}ってるね softens the plan.",
                "**A contraction:** [待]{ま}ってる for [待]{ま}っている.",
                "**Casual answers and invitations:** うん, ううん, 行かない？ (the casual ～ませんか from Lesson 1), いいね！",
                "**Kept particles:** [駅]{えき}で and 七時に stay, because place and time matter."
              ]
            }
          ]
        },
        {
          h:"Common mistakes",
          body:[
            {
              table:[
                ["✗ Mistake","✓ Correct","Why"],
                ["[暇]{ひま}だ？","[暇]{ひま}？","Casual questions drop だ."],
                ["[暑]{あつ}いだね","[暑]{あつ}いね","い-adjectives never take だ."],
                ["そうだねよ","そうだよね","The order is always よね."],
                ["[図書館]{としょかん}[勉強]{べんきょう}してる","[図]{と}書[館]{かん}で[勉強]{べんきょう}してる","で carries the meaning “at”, so it stays."],
                ["行くか？","行く？","Not ungrammatical, but a bare か can sound rough; rising intonation is the usual choice."]
              ]
            },
            "A last word on where to learn casual speech. Anime and manga are great for listening, but characters often talk in exaggerated ways: rough endings such as ぞ and ぜ far more often than most real people use them, or old-fashioned ones. Real conversation, TV dramas, interviews and video diaries by people your age are better models.",
            "Casual speech takes time because you have to hear it many times before it feels natural. Listen first, copy what friends actually say to you, and add one feature at a time."
          ]
        }
      ],
      try:[
        {
          id:"e3u5-l3-x1",
          type:"mcq",
          q:"Which is the most natural casual way to ask a friend “Do you have time?”",
          options:[
            {
              t:"[時間]{じかん}、ある？",
              ok:true,
              why:"Right. が is dropped (a pause takes its place), the verb is plain, and the voice rises: no か needed."
            },
            {
              t:"[時間]{じかん}、あるか？",
              why:"A bare か after a plain form can sound rough or blunt in casual speech. Rising intonation is enough."
            },
            {t:"[時間]{じかん}、ありますか？", why:"Correct, but polite. The question asks for a casual version for a friend."},
            {t:"[時間]{じかん}、あるだ？", why:"ある is a verb, and verbs never take だ."}
          ]
        },
        {
          id:"e3u5-l3-x2",
          type:"sort",
          q:"In casual speech, would this particle often be dropped, or would it usually stay?",
          buckets:["Often dropped","Usually stays"],
          items:[
            {t:"を in [映画]{えいが}を見た？", b:0, why:"を only marks the object, which is easy to guess: [映画]{えいが}、見た？"},
            {t:"は in これはおいしい。", b:0, why:"は marks the topic here, with no contrast: これ、おいしい。"},
            {t:"に in コンビニに行く？", b:0, why:"A destination with a verb of movement: コンビニ行く？ is very common."},
            {
              t:"で in [駅]{えき}で[待]{ま}ってる。",
              b:1,
              why:"で gives the place of the action. Without it the sentence sounds broken."
            },
            {t:"と in [誰]{だれ}と行くの？", b:1, why:"と means “with”, which the listener couldn’t guess."},
            {
              t:"から in [九]{く}[時]{じ}から[働]{はたら}く。",
              b:1,
              why:"から means “from”. Without it, the sentence wouldn’t say that work starts at nine."
            },
            {t:"も in [私]{わたし}も行く。", b:1, why:"も means “also”. Dropping it changes the meaning to “I’m going”."}
          ]
        },
        {
          id:"e3u5-l3-x3",
          type:"match",
          q:"Match each full form to its casual contraction.",
          pairs:[
            ["見ている","見てる","～ている → ～てる: the い drops out."],
            ["[飲]{の}んでしまった","[飲]{の}んじゃった","～でしまう → ～じゃう, because the て-form ends in で."],
            ["[帰]{かえ}らなければ","[帰]{かえ}らなきゃ","～なければ → ～なきゃ: “(I) have to…”."],
            ["[書]{か}いておく","[書]{か}いとく","～ておく → ～とく."],
            ["読んでおく","読んどく","～でおく → ～どく, because the て-form ends in で."]
          ]
        },
        {
          id:"e3u5-l3-x4",
          type:"mcq",
          q:"Cheska and Rodrigo both know that their favourite shop closes early on Sundays. Cheska wants to check: 「[日曜日]{にちようび}は[早]{はや}く[閉]{し}まる＿＿？」 What fills the gap?",
          options:[
            {
              t:"よね",
              ok:true,
              why:"Right. よね checks something the speaker believes they both know: “It closes early on Sundays, right?”"
            },
            {t:"ねよ", why:"The two particles always come in the order よね."},
            {t:"だよね", why:"[閉]{し}まる is a verb, and verbs never take だ. だよね follows nouns and な-adjectives."},
            {t:"だね", why:"Again, だ can’t follow a verb. After [閉]{し}まる, ね or よね come directly."}
          ]
        },
        {
          id:"e3u5-l3-x5",
          type:"mcq",
          q:"A friend says: 「[明日]{あした}の[会議]{かいぎ}の[資料]{しりょう}、[今日]{きょう}[作]{つく}っとく。」 What does [作]{つく}っとく mean?",
          options:[
            {
              t:"“I’ll make it today, so it’s ready.”",
              ok:true,
              why:"Right. ～とく is the casual contraction of ～ておく: doing something in advance, ready for later."
            },
            {t:"“I made it today.”", why:"とく is non-past, like おく. The past would be [作]{つく}っといた."},
            {t:"“Please make it today.”", why:"A casual request would be [作]{つく}って. ～とく is the speaker’s own plan."},
            {t:"“I’m making it right now.”", why:"That would be [作]{つく}ってる (～ている). ～とく is about preparing for later."}
          ]
        },
        {
          id:"e3u5-l3-x6",
          type:"spot",
          q:"Rodrigo is messaging a friend. Tap each part with a **grammar mistake** in casual speech.",
          ask:"has a grammar mistake",
          parts:[
            {t:"今、何してる？", flag:false, why:"Correct: ～てる for ～ている, and a question without か."},
            {t:"[今日]{きょう}、すごく[暑]{あつ}いだね。", flag:true, why:"A mistake. い-adjectives take ね directly: [暑]{あつ}いね."},
            {
              t:"[私]{わたし}は[図書館]{としょかん}[勉強]{べんきょう}してる。",
              flag:true,
              why:"A mistake. で marks where the action happens, and it can’t be dropped: [図]{と}書[館]{かん}で."
            },
            "\n",
            {t:"[明日]{あした}、テストだよね？", flag:false, why:"Correct: a noun takes だ before よね, in that order."},
            {t:"[夜]{よる}、[電話]{でんわ}してもいい？", flag:false, why:"Correct: the casual form of ～てもいいですか."},
            {t:"じゃあ、またね。", flag:false, why:"A natural casual goodbye."}
          ]
        },
        {
          id:"e3u5-l3-x7",
          type:"order",
          q:"Put Rodrigo and Cheska’s chat in a natural order.",
          items:[
            {t:"ロドリゴ：今[夜]{や}、[暇]{ひま}？", why:"First Rodrigo asks whether Cheska is free."},
            {t:"チェスカ：うん、[暇]{ひま}だよ。どうして？", why:"Cheska answers and asks why."},
            {t:"ロドリゴ：一[緒]{しょ}に[映画]{えいが}、見に行かない？", why:"Rodrigo explains why he asked: an invitation."},
            {t:"チェスカ：いいね！何時？", why:"Cheska accepts and asks about the time."},
            {t:"ロドリゴ：七時はどう？", why:"Rodrigo answers her question with a suggestion."}
          ]
        },
        {
          id:"e3u5-l3-x8",
          type:"type",
          q:"The train doors close just as Rodrigo and Cheska reach the platform. Cheska says: “Oh no, it’s gone!” Type the casual contraction of 行ってしまった in hiragana: 「あ、[電車]{でんしゃ}、＿＿！」",
          answer:"いっちゃった",
          wrongs:[
            {v:"いちゃった", why:"Keep the small っ of the て-form: 行って → 行っちゃった."},
            {v:"いってしまった", why:"That is the full form. It means the same, but here the casual contraction is asked for: ～てしまった → ～ちゃった."},
            {v:"いっじゃった", why:"じゃった is only for verbs whose て-form ends in で ([飲]{の}んで → [飲]{の}んじゃった). 行って ends in て, so ちゃった."}
          ],
          why:"～てしまった contracts to ～ちゃった: 行ってしまった → 行っちゃった, “it’s gone (and that’s a shame)”."
        },
        {
          id:"e3u5-l3-x9",
          type:"type",
          q:"Mariya is at a friend’s place and looks at the clock: “It’s eight already. I have to go.” Type the casual “must” form of 行く in hiragana: 「もう[八時]{はちじ}だ。＿＿。」",
          answer:["いかなきゃ", "いかなくちゃ", "いかないと"],
          wrongs:[
            {v:"いきなきゃ", why:"なきゃ comes from なければ, which attaches to the ない-form: 行か(ない) → 行かなきゃ, not the ます stem."},
            {v:"いかなければ", why:"That is the full form. With friends it shortens to 行かなきゃ."}
          ],
          why:"～なければ shortens to ～なきゃ: 行かなければ → 行かなきゃ, with いけない understood. 行かなくちゃ and 行かないと are other casual ways to say it."
        },
        {
          id:"e3u5-l3-x10",
          type:"type",
          q:"You ask a friend casually: “Were you free yesterday?” Type the missing part in hiragana: 「[昨日]{きのう}、＿＿？」 ([暇]{ひま}, free, a な-adjective)",
          answer:"ひまだった",
          wrongs:[
            {v:"ひま", why:"Only the non-past だ drops in a casual question ([今]{いま}、[暇]{ひま}？). Yesterday is past, and the past ending stays: [暇]{ひま}だった？"},
            {v:"ひまでしたか", why:"That is the polite question. With a friend, use the plain past with a rising voice."}
          ],
          why:"In casual questions, nouns and な-adjectives drop the non-past だ, but the past stays: [昨日]{きのう}、[暇]{ひま}だった？ with a rising voice."
        }
      ],
      apply:{
        intro:"Casual speech is learned by ear. Listen first, then try it with people you are close to. Keep the notes for yourself.",
        tasks:[
          {
            t:"Collect ten casual sentences",
            how:[
              "Watch or listen to 15 minutes of ordinary Japanese conversation: a TV drama, a vlog, an interview between friends, or a podcast with subtitles.",
              "Write down ten short casual sentences you hear.",
              "For each, note which casual features it has: plain ending, dropped particle, contraction, よ/ね/よね, or a question without か."
            ],
            write:"1… (features) 2… …"
          },
          {
            t:"Make it casual",
            how:[
              "Write five polite questions you might ask a friend, such as [昨日]{きのう}、[何]{なに}をしましたか。",
              "Rewrite each as casual speech: plain ending, rising intonation, and a dropped を or は where it is natural.",
              "Read both versions aloud. Make your voice rise clearly at the end of the casual ones."
            ],
            write:"Polite… → Casual…"
          },
          {
            t:"Practise with someone you trust",
            how:[
              "If you have a Japanese-speaking friend or a language exchange partner, ask if you may practise casual speech with them.",
              "Try a short chat about your weekend using at least one よ, one ね and one ～てる.",
              "Ask them to point out anything that sounded strange, and note it."
            ],
            write:"What I tried… What they said…"
          }
        ],
        proof:"Ten real casual sentences with their features labelled, five questions in both styles, and (if you could) notes from one short casual conversation."
      },
      read:[
        {
          book:"taekim",
          where:"Basic Grammar, “Adverbs and Sentence-ending particles”, sections on 「ね」, 「よ」 and “Combining both to get 「よね」”",
          note:"よ, ね and よね, with casual examples."
        },
        {
          book:"taekim",
          where:"Essential Grammar, “The Question Marker”, section “The question marker in casual speech”",
          note:"Why casual questions avoid か, and how の and rising intonation replace it."
        },
        {
          book:"taekim",
          where:"Essential Grammar, “Casual Patterns and Slang”, section “Sentence ordering and particles (or the lack thereof)”",
          note:"Dropped particles and loose word order in conversation."
        }
      ]
    },
    {
      id:"e3u5-l4",
      title:"Describing nouns with whole sentences",
      minutes:60,
      goals:[
        "Turn a sentence into a phrase that describes a noun, with the description before the noun",
        "Use any plain form of a verb or い-adjective before a noun",
        "Change だ to な (な-adjectives) or の (nouns) before a noun, and keep だった and じゃない",
        "Mark the doer inside the description with が (or の), not は",
        "Read long noun phrases by finding the noun at the end first"
      ],
      hook:{
        q:"How do you say “the book I bought yesterday” in Japanese?",
        options:[
          "[昨日]{きのう}[買]{か}った[本]{ほん}",
          "[本]{ほん}[昨日]{きのう}[買]{か}った",
          "[昨日]{きのう}[買]{か}いました[本]{ほん}",
          "[本]{ほん}は[昨日]{きのう}[買]{か}った"
        ],
        answer:0,
        reveal:"**[昨日]{きのう}[買]{か}った[本]{ほん}.** English puts the description after the noun (“the book that I bought”). Japanese puts it before, like an adjective: [昨日]{きのう}[買]{か}った describes [本]{ほん}, just as [新]{あたら}しい does in [新]{あたら}しい[本]{ほん}. The verb inside is in the plain form, so [買]{か}いました doesn’t fit, and [本]{ほん}は[昨日]{きのう}[買]{か}った is a whole sentence (“I bought the book yesterday”), not a noun phrase. This lesson shows how to build these descriptions with verbs, adjectives and nouns."
      },
      learn:[
        {
          h:"Sentences that describe nouns",
          body:[
            {
              lead:"You already know how to describe a noun with an adjective: [新]{あたら}しい本 (a new book), [静]{しず}かな[町]{まち} (a quiet town). Japanese lets you do the same with a whole sentence."
            },
            "In English, longer descriptions come after the noun: “the book that I bought yesterday”, “a friend who lives nearby”. In Japanese they always come before it, exactly where an adjective would go: [昨日]{きのう}[買]{か}った本, [近]{ちか}くに[住]{す}んでいる[友]{とも}だち.",
            "The describing part is a [[noun-modifier-clause|noun-modifying clause]]: a small sentence, ending in a plain form, that sits in front of a noun. Japanese grammar calls it [連体]{れんたい}[修飾]{しゅうしょく} (rentai shūshoku, “modifying a noun”). English has no single word in front of the noun that does this, so it is one of the biggest differences between the two languages.",
            {
              fig:"<svg viewBox='0 0 340 372'><defs><marker id='a4' viewBox='0 0 10 10' refX='8' refY='5' markerWidth='7' markerHeight='7' orient='auto'><path class='d-inkf' d='M0,0 L10,5 L0,10 z'/></marker></defs><text x='170' y='20' text-anchor='middle'>From a sentence to a noun phrase</text><rect class='d-panel' x='6' y='32' width='328' height='62' rx='8' stroke-width='1.5'/><text class='s' x='16' y='50'>1. a sentence</text><text x='170' y='76' text-anchor='middle'>ははが ケーキを つくった。</text><path class='d-ink' d='M170,98 L170,122' stroke-width='2' marker-end='url(#a4)'/><text class='s' x='182' y='116'>take the noun out, put it last</text><rect class='d-lup' x='6' y='128' width='328' height='102' rx='8' stroke-width='2'/><text class='s' x='16' y='146'>2. a noun phrase (no を, plain verb)</text><text x='60' y='176'>ははが つくった</text><rect class='d-gold' x='206' y='158' width='76' height='26' rx='6' stroke-width='2'/><text x='244' y='176' text-anchor='middle'>ケーキ</text><path class='d-ink' d='M54,188 L54,200 L164,200 L164,188' stroke-width='1.5' fill='none'/><path class='d-ink' d='M164,200 L236,200 L236,190' stroke-width='1.5' fill='none' marker-end='url(#a4)'/><text class='s' x='60' y='220'>this part describes the noun</text><path class='d-ink' d='M170,234 L170,258' stroke-width='2' marker-end='url(#a4)'/><text class='s' x='182' y='252'>use it like any noun</text><rect class='d-sage' x='6' y='264' width='328' height='62' rx='8' stroke-width='2'/><text class='s' x='16' y='282'>3. in a new sentence</text><text x='170' y='308' text-anchor='middle'>ははが つくった ケーキは おいしい。</text><text class='s' x='170' y='346' text-anchor='middle'>The cake my mother made is delicious.</text><text class='s' x='170' y='364' text-anchor='middle'>English describes after the noun; Japanese before.</text></svg>",
              alt:"Three steps. Step 1, a sentence: ははが ケーキを つくった (My mother made a cake). Step 2, take the noun out and put it last: ははが つくった ケーキ, a noun phrase with no を and a plain verb; the part ははが つくった describes the noun ケーキ. Step 3, use it like any noun in a new sentence: ははが つくった ケーキは おいしい (The cake my mother made is delicious). English describes after the noun; Japanese before.",
              cap:"A sentence becomes a description when its noun moves to the end."
            },
            "The recipe in the diagram works for almost every clause: start with a sentence, take out the noun you want to describe (with its particle), and put the noun at the end. What is left in front of it is the description."
          ]
        },
        {
          h:"Verbs: any plain form, then the noun",
          body:[
            "Any of the four plain forms can go in front of a noun, and so can ～ている and ～たい. The form keeps its meaning:",
            {
              table:[
                ["Form","Noun phrase","Meaning"],
                ["non-past","[毎朝]{まいあさ}[飲]{の}むコーヒー","the coffee I drink every morning"],
                ["negative","[肉]{にく}を[食]{た}べない[人]{ひと}","people who don’t eat meat"],
                ["past","[昨日]{きのう}[来]{き}た人","the person who came yesterday"],
                ["past negative","[来]{こ}なかった人","the people who didn’t come"],
                ["～ている","[駅]{えき}で[待]{ま}っている人","the person waiting at the station"],
                ["～たい","[行]{い}きたい[所]{ところ}","a place I want to go to"]
              ]
            },
            "Use the plain form here even in the politest sentence. Politeness goes at the end of the whole sentence (Lesson 2), never inside the description: ✗ [昨日]{きのう}[買]{か}いました本.",
            "The clause has its own tense, which tells you when its action happens: [明日]{あした}[来]{く}る人 (the people coming tomorrow) and [昨日]{きのう}[来]{き}た人 (the people who came yesterday).",
            "～ている clauses are the usual way to describe what people are wearing or a state that continues: [眼鏡]{めがね}をかけている人 (the person wearing glasses), [結婚]{けっこん}している友だち (a friend who is married). In this kind of description the た-form can mean the same thing: [眼鏡]{めがね}をかけた人 is also “the person wearing glasses”, not someone who wore them once.",
            {
              ex:"あそこで本を[読]{よ}んでいる人は、[私]{わたし}の[姉]{あね}です。\nThe person reading a book over there is my older sister.\n\n[去年]{きょねん}行った[町]{まち}は、とてもきれいでした。\nThe town I went to last year was very beautiful.\n\nかいとさんが[作]{つく}った[料理]{りょうり}を食べました。\nI ate the food Kaito made.",
              label:"Verb clauses in polite sentences"
            }
          ]
        },
        {
          h:"Adjectives and nouns before a noun",
          body:[
            "い-adjectives are easy: they already go in front of nouns, and their other plain forms do too: [高]{たか}い[時計]{とけい} (an expensive watch), 高くない[時計]{とけい} (a watch that isn’t expensive). Here is the full picture for all three families:",
            {
              table:[
                ["Word type","Non-past before a noun","Other forms"],
                ["い-adjective","[安]{やす}い[店]{みせ}","[安]{やす}くない / [安]{やす}かった[店]{みせ}"],
                ["な-adjective","[静]{しず}かな[部屋]{へや}","[静]{しず}かじゃない / [静]{しず}かだった[部屋]{へや}"],
                ["noun","[医者]{いしゃ}の[兄]{あに}","[医者]{いしゃ}じゃない / [医者]{いしゃ}だった[兄]{あに}"]
              ]
            },
            "Only one box changes shape: the plain non-past だ. Before a noun it becomes な for な-adjectives ([静]{しず}かな[部屋]{へや}, a quiet room) and の for nouns ([医者]{いしゃ}の[兄]{あに}, my brother, who is a doctor). The other forms, じゃない, だった and じゃなかった, stay as they are.",
            {
              ex:"[子]{こ}どものころ[好]{す}きだった[歌]{うた}\na song I liked as a child\n\n[昔]{むかし}[有名]{ゆうめい}だった[店]{みせ}\na shop that used to be famous\n\n[日本人]{にほんじん}じゃない[先生]{せんせい}\na teacher who isn’t Japanese",
              label:"Past and negative forms before nouns"
            },
            "Note that [医者]{いしゃ}の[兄]{あに} can also mean “the doctor’s older brother”, because の also joins nouns ([[particle-no]]). Context decides. If you need to be clear, say [医者]{いしゃ}をしている[兄]{あに} (my brother, who works as a doctor).",
            {
              warn:"Two classic slips: ✗ [静]{しず}かだ[部屋]{へや} (use な before a noun) and ✗ おいしいな[料理]{りょうり} (い-adjectives never take な)."
            }
          ]
        },
        {
          h:"Who did it: が or の, not は",
          body:[
            "Inside a noun-modifying clause, the doer of the action is marked with が, not with は:",
            {
              ex:"[私]{わたし}が[作]{つく}ったケーキ\nthe cake I made\n\nチェスカさんの[家族]{かぞく}が[住]{す}んでいる[町]{まち}\nthe town where Cheska’s family lives\n\n[私]{わたし}が[好]{す}きな食べ[物]{もの}\nfood I like",
              label:"が inside the clause"
            },
            "This is why Unit 2 said the doer of a describing clause takes が. は marks the topic of the **whole sentence**, so it belongs outside the clause. Compare: [私]{わたし}が[作]{つく}ったケーキはおいしい (The cake I made is delicious) has が inside the clause and は on the whole phrase.",
            "In short clauses you will also often hear の in place of が: 母の[作]{つく}ったケーキ (the cake my mother made), [私]{わたし}の[好]{す}きな食べ[物]{もの}. Both are correct. が is the safer choice in longer clauses.",
            "The other particles inside a clause stay as they were in the sentence, except the one that belonged to the noun you moved: [駅]{えき}の[前]{まえ}でパンを[売]{う}っている[店]{みせ} (a shop selling bread in front of the station) keeps で and を; the shop’s own が has gone with it."
          ]
        },
        {
          h:"Using the whole phrase",
          body:[
            "Once it is built, a clause + noun is just a big noun. It can take any particle and fill any slot in a sentence:",
            {
              ex:"[駅]{えき}の前にある[店]{みせ}で[靴]{くつ}を[買]{か}いました。\nI bought shoes at the shop in front of the station.\n\n日本[語]{ご}を[教]{おし}えている先生に[会]{あ}いました。\nI met a teacher who teaches Japanese.\n\nあの[赤]{あか}いセーターを[着]{き}ている人はだれですか。\nWho is that person wearing a red sweater?",
              label:"Clause + noun as subject, object and place"
            },
            "This is a real-life survival skill. When you don’t know a name or a word, describe it: [髪]{かみ}を[乾]{かわ}かす[機械]{きかい} (a machine that dries hair), [昨日]{きのう}[会議]{かいぎ}に[来]{き}た人 (the person who came to the meeting yesterday). Japanese speakers do this all the time, and it lets a small vocabulary go a long way.",
            "A handful of nouns appear with clauses constantly: 人 (person), もの (thing), [所]{ところ} (place), [時]{とき} (time, when) and こと (matter, thing you do). 子どもの時 means “when I was a child”, and [学]{がく}生だった時 means “when I was a student”. You will meet more patterns with 時 and こと later in N4."
          ]
        },
        {
          h:"Reading long noun phrases",
          body:[
            "Long clauses can look confusing at first, because the important noun comes last. A reliable strategy:",
            {
              ol:[
                "Find a plain form followed directly by a noun: that noun is the head, the thing being described.",
                "Read the clause in front of it as a description of that noun.",
                "Then read the rest of the sentence with the whole phrase as one unit."
              ]
            },
            {
              ex:"先[週]{しゅう}友だちと行ったレストランは、とても[安]{やす}かったです。\n\n1. 行った (plain past) + レストラン: the head is レストラン.\n2. 先[週]{しゅう}友だちと行った: “that I went to with a friend last week”.\n3. The whole sentence: “The restaurant I went to with a friend last week was very cheap.”",
              label:"Worked example"
            },
            "Clauses can also contain clauses, but the strategy stays the same: find each noun that comes straight after a plain form, and work outwards. In English the translation usually runs backwards: the Japanese ends with the noun, the English starts with it."
          ]
        },
        {
          h:"Common mistakes",
          body:[
            {
              table:[
                ["✗ Mistake","✓ Correct","Why"],
                ["本[昨日]{きのう}[買]{か}った","[昨日]{きのう}[買]{か}った本","The description comes before the noun."],
                ["[昨日]{きのう}[買]{か}いました本","[昨日]{きのう}[買]{か}った本","Plain forms inside the clause."],
                ["[静]{しず}かだ[部屋]{へや}","[静]{しず}かな[部屋]{へや}","な-adjectives: だ → な before a noun."],
                ["[医者]{いしゃ}な[兄]{あに}","[医者]{いしゃ}の[兄]{あに}","Nouns: だ → の before a noun."],
                ["[有]{ゆう}名の[店]{みせ}","[有]{ゆう}名な[店]{みせ}","[有]{ゆう}名 is a な-adjective."],
                ["[私]{わたし}は[作]{つく}ったケーキはおいしい","[私]{わたし}が[作]{つく}ったケーキはおいしい","The doer inside the clause takes が."]
              ]
            },
            "Noun-modifying clauses are one of the most useful things in Japanese and one of the hardest to make automatic. Expect to build them slowly at first. With practice, you will start to hear them as single units, the way you hear “the book I bought” in English."
          ]
        }
      ],
      try:[
        {
          id:"e3u5-l4-x1",
          type:"mcq",
          q:"Turn this sentence into a noun phrase about the cake: [母]{はは}がケーキを[作]{つく}った。",
          options:[
            {
              t:"母が[作]{つく}ったケーキ",
              ok:true,
              why:"Right. The noun moves to the end with its particle を, and the plain verb [作]{つく}った describes it: “the cake my mother made”."
            },
            {t:"ケーキ母が[作]{つく}った", why:"The description must come before the noun in Japanese."},
            {t:"母が[作]{つく}りましたケーキ", why:"The verb inside a describing clause is in the plain form: [作]{つく}った."},
            {
              t:"母がケーキを[作]{つく}ったケーキ",
              why:"Once ケーキ moves to the end, it disappears from the clause, together with its を."
            }
          ]
        },
        {
          id:"e3u5-l4-x2",
          type:"sort",
          q:"Correct noun phrase, or not?",
          buckets:["Correct","Not correct"],
          items:[
            {t:"[静]{しず}かな[町]{まち}", b:0, why:"な-adjective + な + noun."},
            {t:"[静]{しず}かだ[町]{まち}", b:1, why:"Before a noun, だ becomes な: [静]{しず}かな[町]{まち}."},
            {t:"[医者]{いしゃ}の[姉]{あね}", b:0, why:"Noun + の + noun: “my sister, who is a doctor” (or “the doctor’s sister”)."},
            {t:"[有名]{ゆうめい}の[店]{みせ}", b:1, why:"[有]{ゆう}名 is a な-adjective: [有]{ゆう}名な[店]{みせ}."},
            {t:"高くない[時計]{とけい}", b:0, why:"Any plain form of an い-adjective can describe a noun."},
            {t:"[昨日]{きのう}[見]{み}ました[映画]{えいが}", b:1, why:"Inside a clause, use the plain form: [昨日]{きのう}見た[映画]{えいが}."},
            {t:"[肉]{にく}を食べない[人]{ひと}", b:0, why:"A plain negative verb clause: “people who don’t eat meat”."},
            {t:"おいしいなパン", b:1, why:"い-adjectives never take な: おいしいパン."}
          ]
        },
        {
          id:"e3u5-l4-x3",
          type:"match",
          q:"Match each phrase to its meaning. Watch the verb forms.",
          pairs:[
            ["[昨日]{きのう}[会]{あ}った人","the person I met yesterday","[会]{あ}った: plain past."],
            ["[明日]{あした}[会]{あ}う人","the person I’m meeting tomorrow","[会]{あ}う: plain non-past, for the future."],
            ["[会]{あ}いたい人","someone I want to meet","[会]{あ}いたい: the ～たい form."],
            ["[会]{あ}わなかった人","the people I didn’t meet","[会]{あ}わなかった: plain past negative."],
            ["[私]{わたし}に[会]{あ}いに[来]{き}た人","the person who came to see me","[会]{あ}いに[来]{き}た: came (in order) to meet."]
          ]
        },
        {
          id:"e3u5-l4-x4",
          type:"mcq",
          q:"Which particle fills the gap? [私]{わたし}＿＿[住]{す}んでいる[町]{まち}は[小]{ちい}さいです。 (The town I live in is small.)",
          options:[
            {
              t:"が",
              ok:true,
              why:"Right. The doer inside a describing clause takes が. (の is also possible here: [私]{わたし}の[住]{す}んでいる[町]{まち}.)"
            },
            {
              t:"は",
              why:"は marks the topic of the whole sentence, and that is already [町]{まち}は. It can’t mark the doer inside the clause."
            },
            {t:"を", why:"を marks an object. [私]{わたし} is the person who lives there, not the object."},
            {t:"に", why:"に would make [私]{わたし} a place or a target. The town is where I live, so [私]{わたし} is the doer."}
          ]
        },
        {
          id:"e3u5-l4-x5",
          type:"mcq",
          q:"What does this mean? 「まりやさんを[待]{ま}っている人はだれですか。」",
          options:[
            {
              t:"Who is the person waiting for Mariya?",
              ok:true,
              why:"Right. The clause まりやさんを[待]{ま}っている describes 人: the person is waiting for Mariya (まりやさん is the object, with を)."
            },
            {t:"Who is Mariya waiting for?", why:"That would be まりやさんが[待]{ま}っている人: with が, Mariya is the one waiting."},
            {t:"Who waited for Mariya?", why:"[待]{ま}っている is ongoing (～ている), not past. “Who waited” would be [待]{ま}った人."},
            {
              t:"Is Mariya waiting for someone?",
              why:"The question word だれ asks who the person is. The sentence is about a person who is waiting for Mariya."
            }
          ]
        },
        {
          id:"e3u5-l4-x6",
          type:"spot",
          q:"Cheska describes a holiday photo. Tap each part with a **grammar mistake**.",
          ask:"has a grammar mistake",
          parts:[
            {t:"これは[去]{きょ}年行った[海]{うみ}の[写真]{しゃしん}です。", flag:false, why:"Correct: [去]{きょ}年行った describes [海]{うみ}."},
            {t:"[赤]{あか}い[帽子]{ぼうし}をかぶっている人は[妹]{いもうと}です。", flag:false, why:"Correct: a ～ている clause describing 人."},
            {
              t:"[妹]{いもうと}は[有]{ゆう}名だ[歌手]{かしゅ}が[好]{す}きです。",
              flag:true,
              why:"A mistake. Before a noun, a な-adjective takes な: [有]{ゆう}名な[歌手]{かしゅ}."
            },
            "\n",
            {
              t:"[後]{うし}ろの[建物]{たてもの}は[私]{わたし}たちが[泊]{と}まりましたホテルです。",
              flag:true,
              why:"A mistake. Inside the clause, use the plain form: [私]{わたし}たちが[泊]{と}まったホテル."
            },
            {
              t:"[天気]{てんき}がよかった[日]{ひ}でした。",
              flag:false,
              why:"Correct: 天気がよかった describes 日 (a day when the weather was good)."
            }
          ]
        },
        {
          id:"e3u5-l4-x7",
          type:"mcq",
          q:"You can’t remember the word for “hair dryer”. Which description would a shop assistant understand?",
          options:[
            {
              t:"[髪]{かみ}を[乾]{かわ}かす[機械]{きかい}",
              ok:true,
              why:"Right. [髪]{かみ}を[乾]{かわ}かす (dries hair) describes [機械]{きかい} (machine): “a machine that dries hair”."
            },
            {t:"[機械]{きかい}[髪]{かみ}を[乾]{かわ}かす", why:"The description must come before the noun."},
            {t:"[髪]{かみ}を[乾]{かわ}かします[機械]{きかい}", why:"Inside a describing clause, use the plain form: [乾]{かわ}かす."},
            {t:"[髪]{かみ}は[乾]{かわ}かす[機械]{きかい}", why:"The hair is the object of drying, so it takes を, not は."}
          ]
        },
        {
          id:"e3u5-l4-x8",
          type:"type",
          q:"Cheska shows Mariya a photo on her phone. Type the missing verb in hiragana: 「これは[鳴]{な}り[浜]{はま}で＿＿[写真]{しゃしん}です。」 (“This is a photo I took at Nari-hama.” [撮]{と}る, take)",
          answer:"とった",
          wrongs:[
            {v:"とりました", why:"The verb inside a clause that describes a noun is in the plain form, even in a polite sentence. The politeness goes at the end: …[写真]{しゃしん}です."},
            {v:"とったの", why:"Nothing comes between the clause and the noun: [撮]{と}った[写真]{しゃしん}, not [撮]{と}ったの[写真]{しゃしん}."}
          ],
          why:"Plain past + noun: [鳴]{な}り[浜]{はま}で[撮]{と}った[写真]{しゃしん}, “the photo I took at Nari-hama”."
        },
        {
          id:"e3u5-l4-x9",
          type:"type",
          q:"Type the particle that marks who made it: 「これはかいとくん＿＿[作]{つく}ったそばです。」 (“This is the soba Kaito made.”)",
          answer:["が", "の"],
          wrongs:[
            {v:"は", why:"は marks the topic of the whole sentence, so it can’t sit inside a clause that describes a noun. Inside the clause, the doer takes が or の."},
            {v:"を", why:"を marks the object. Kaito is the one who made the soba, so が or の."}
          ],
          why:"Inside a clause that describes a noun, the doer takes が, or often の: かいとくんが[作]{つく}ったそば, かいとくんの[作]{つく}ったそば. Both are correct."
        },
        {
          id:"e3u5-l4-x10",
          type:"type",
          q:"Fumiko is planning dinner for the house: “Some people don’t eat meat, so let’s make a vegetable dish too.” Type the missing verb in hiragana: 「[肉]{にく}を＿＿人もいますから、[野菜]{やさい}の[料理]{りょうり}も[作]{つく}りましょう。」 (食べる, eat)",
          answer:"たべない",
          wrongs:[
            {v:"たべません", why:"Inside a clause that describes a noun, the verb is plain, even when the sentence is polite: 食べない人."},
            {v:"たべないの", why:"Nothing comes between the clause and the noun: 食べない人."}
          ],
          why:"The plain negative describes the noun: [肉]{にく}を食べない人, “people who don’t eat meat”."
        }
      ],
      apply:{
        intro:"Describe the people and things around you with clauses. Keep the notes for yourself.",
        tasks:[
          {
            t:"Describe a photo",
            how:[
              "Choose a photo with several people or things in it.",
              "Write five sentences that pick out each one with a clause, such as [真]{ま}ん[中]{なか}で[笑]{わら}っている人は友だちです。",
              "Use at least one ～ている, one past form and one な-adjective with な."
            ],
            write:"1… 2… 3… 4… 5…"
          },
          {
            t:"Ten things without their names",
            how:[
              "Pick ten objects at home or at work.",
              "Describe each with a clause + もの or [機械]{きかい}, as if you didn’t know its name: [野菜]{やさい}を[切]{き}るもの (a knife), [服]{ふく}を[洗]{あら}う[機械]{きかい} (a washing machine).",
              "Check each one: plain form inside, noun at the end."
            ],
            write:"1… 2… …"
          },
          {
            t:"Your favourites",
            how:[
              "Write five sentences about favourite things with [好]{す}きな and a clause, such as [子]{こ}どものころよく読んだ本は…",
              "Read them aloud, pausing before the noun at the end of each clause."
            ],
            write:"1… 2… 3… 4… 5…"
          }
        ],
        proof:"Five sentences describing a photo, ten objects described without their names, and five sentences about favourite things, each with a noun-modifying clause."
      },
      read:[
        {
          book:"taekim",
          where:"Basic Grammar, “Relative Clauses and Sentence Order”, sections “Using state-of-being clauses as adjectives” and “Using relative verb clauses as adjectives”",
          note:"Noun-modifying clauses with verbs, nouns and な-adjectives."
        },
        {
          book:"irodori",
          where:"Elementary 1 (A2), Lesson 17 “This is a personal amulet my older brother gave me.”, grammar note 1 (V (plain form) + N)",
          note:"Describing things with plain verbs ([私]{わたし}が[作]{つく}った[料理]{りょうり}), with audio. Lesson 15, grammar note 3, introduces the same pattern."
        }
      ]
    },
    {
      id:"e3u5-l5",
      title:"Explaining with ～んです, quoting and giving opinions",
      minutes:60,
      goals:[
        "Build ～んです after verbs, adjectives and nouns, including なんです",
        "Use ～んです to explain and give background, and ～んですか to ask for an explanation",
        "Avoid overusing ～んです where nothing needs explaining",
        "Report what people said with と[言]{い}う, both as a direct quote and in your own words, and recognise casual って",
        "Give and ask for opinions with ～と[思]{おも}います, with だ after nouns and な-adjectives"
      ],
      hook:{
        q:"You want to say “I think he’s a student.” Which is correct?",
        options:["[学生]{がくせい}と[思]{おも}います。","[学生]{がくせい}だと[思]{おも}います。","[学生]{がくせい}ですと[思]{おも}います。","[学生]{がくせい}なと[思]{おも}います。"],
        answer:1,
        reveal:"**[学生]{がくせい}だと[思]{おも}います.** What you think is a small sentence of its own, in the plain form, and the plain form of [学生]{がくせい}です is [学生]{がくせい}だ. Leaving out だ is one of the most common learner mistakes, because だ disappears in so many other places. This lesson shows how plain forms work before と[思]{おも}う (think), と[言]{い}う (say) and ～んです (explaining), and exactly what happens to だ in each."
      },
      learn:[
        {
          h:"～んです: “the thing is…”",
          body:[
            {
              lead:"Listen to Japanese conversation for a minute and you will hear ～んです again and again. It adds no new facts. What it adds is a frame: “this is the explanation”, “this is the background”, “the thing is…”."
            },
            "Compare two answers to “Aren’t you drinking?” at a party. [飲]{の}みません just says “I don’t drink”. [車]{くるま}で[来]{き}たんです (I came by car, you see) offers an explanation that connects to the situation. That connecting job is what [[n-desu|～んです]] does.",
            "To build it, put a plain form in front of んです. Nouns and な-adjectives change だ to な:",
            {
              table:[
                ["Word type","Plain form","With ～んです"],
                ["verb","[行]{い}く / 行った","行くんです / 行ったんです"],
                ["い-adjective","[痛]{いた}い","[痛]{いた}いんです"],
                ["な-adjective","[好]{す}きだ","[好]{す}きなんです"],
                ["noun","[休]{やす}みだ","休みなんです"]
              ]
            },
            "Only the plain non-past だ changes. The other forms go in as they are: 休みだったんです (it was a day off, you see), 行かないんです (the thing is, I’m not going), [好]{す}きじゃないんです.",
            "The same pattern comes in four styles. のです is the full form, used in writing and formal speech. んです is the everyday polite form. In casual speech, statements use んだ ([疲]{つか}れたんだ, I’m tired, that’s why) and questions use の ([疲]{つか}れたの？, are you tired?)."
          ]
        },
        {
          h:"Explaining and giving background",
          body:[
            "The most common use is to explain a situation the listener can see or has asked about:",
            {
              ex:"A: どうしたんですか。\nB: [頭]{あたま}が[痛]{いた}いんです。\nA: What’s the matter? B: I’ve got a headache.\n\n[遅]{おく}れてすみません。[電車]{でんしゃ}が[止]{と}まったんです。\nSorry I’m late. The train stopped.\n\n[今日]{きょう}は[飲]{の}みません。車で[来]{き}たんです。\nI won’t drink today. I came by car.",
              label:"Explaining with ～んです"
            },
            "In each case the ～んです sentence explains something else: why A looks unwell, why you are late, why you aren’t drinking. Without んです the sentences would still be grammatical, but they would sound like separate pieces of news rather than explanations.",
            "A very useful extension is **～んですが…**, which gives background before a request or question and then trails off politely, inviting the listener to help:",
            {
              ex:"すみません、[駅]{えき}に行きたいんですが…。\nExcuse me, I’d like to get to the station…\n\nこの[漢字]{かんじ}の[読]{よ}み[方]{かた}がわからないんですが…。\nI don’t know how to read this kanji…",
              label:"～んですが…"
            },
            "The listener understands the unspoken question (“how do I get there?”, “could you tell me?”). This is softer than asking straight out, and it is one of the most natural ways to start a request in Japanese."
          ]
        },
        {
          h:"Asking for an explanation",
          body:[
            "In a question, ～んですか asks for the story behind something you have noticed:",
            {
              ex:"（A colleague has a large suitcase）\n[旅行]{りょこう}に[行]{い}くんですか。\nAre you going on a trip?\n\n[新]{あたら}しいかばんですね。どこで[買]{か}ったんですか。\nThat’s a new bag. Where did you buy it?\n\nどうして[日本語]{にほんご}を[勉強]{べんきょう}しているんですか。\nWhy are you studying Japanese?",
              label:"～んですか"
            },
            "Compare [旅]{りょ}[行]{こう}に[行]{い}きますか, a neutral question you might ask anyone, with [旅]{りょ}[行]{こう}に[行]{い}くんですか, which shows you have seen the suitcase and are interested. Questions with どうして (why) very often take ～んですか in conversation, because a why-question asks for an explanation.",
            "In casual speech the question form is just の with a rising voice, as you saw in Lesson 3: どうしたの？ (What’s wrong?) どこ行くの？ (Where are you off to?) After a noun or な-adjective it is なの: 休みなの？ (Is it your day off?)"
          ]
        },
        {
          h:"When not to use ～んです",
          body:[
            "Because ～んです always connects a sentence to some situation, using it where there is nothing to connect sounds strange:",
            {
              list:[
                "**Self-introductions.** はじめまして。イエンです。 is right. ✗ はじめまして。イエンなんです。 sounds as if you are explaining something nobody asked about.",
                "**Plain facts and simple questions.** A new classmate asks [出身]{しゅっしん}はどこですか (Where are you from?) and you answer ブラジルです. There is nothing to explain, so no んです.",
                "**Every sentence.** If you put ～んです on everything, you sound as though you are always making excuses or insisting."
              ]
            },
            "Why-questions need a little care too. どうして[遅]{おく}れたんですか is the normal way to ask why someone was late, but in a delicate moment it can sound like you are pressing for a reason. A softer choice is [何]{なに}かあったんですか (Did something happen?).",
            {
              key:"Use ～んです when there is something to explain: a situation you both see, a reason, or background before a request."
            }
          ]
        },
        {
          h:"Quoting what people say, and って",
          body:[
            "To report what someone said, Japanese uses と, the quotation particle, before [言]{い}う (say). There are two ways, just as in English.",
            "A **direct quote** repeats the exact words inside 「 」, in whatever style the speaker used:",
            {
              ex:"ロドリゴさんは「[明日]{あした}は休みです」と[言]{い}いました。\nRodrigo said, “Tomorrow is a day off.”",
              label:"Direct quote"
            },
            "An **indirect quote** puts the words into your own sentence, in the plain form. Nouns and な-adjectives keep だ before と:",
            {
              ex:"ロドリゴさんは、[明日]{あした}は休みだと[言]{い}いました。\nRodrigo said that tomorrow is a day off.\n\nあおいさんは、[日曜日]{にちようび}は[忙]{いそが}しいと[言]{い}っていました。\nAoi was saying she’s busy on Sunday.",
              label:"Indirect quote"
            },
            "～と[言]{い}っていました (was saying) is the usual way to pass on a message: you are reporting what someone told you earlier.",
            "Two more uses of と[言]{い}う you will need every day. To ask what something is called: これは[日本語]{にほんご}で[何]{なん}と[言]{い}いますか。 (What do you call this in Japanese?) And to name something: 「みどり」という[店]{みせ} (a shop called Midori). The glossary entry is [[to-iu]].",
            "In casual speech, って replaces と, and often the verb too:",
            {
              ex:"[明日]{あした}、休みだって。\nApparently tomorrow’s a day off. / They say tomorrow’s a day off.\n\nあおい、[来]{こ}ないって。\nAoi says she isn’t coming.\n\n[今]{いま}、何て[言]{い}った？\nWhat did you just say?",
              label:"Casual って"
            }
          ]
        },
        {
          h:"Giving opinions",
          body:[
            "To say what you think, put a plain form before と[思]{おも}います ([[to-omou]]). The rule for だ is the same as in an indirect quote: verbs and い-adjectives go straight in, nouns and な-adjectives keep だ.",
            {
              ex:"[明日]{あした}は[雨]{あめ}が[降]{ふ}ると[思]{おも}います。\nI think it will rain tomorrow.\n\nこの本はおもしろいと[思]{おも}います。\nI think this book is interesting.\n\nあの[人]{ひと}はめぐみさんのお[母]{かあ}さんだと[思]{おも}います。\nI think that’s Megumi-san’s mother.\n\nこの[町]{まち}は[便利]{べんり}だと[思]{おも}います。\nI think this town is convenient.",
              label:"Giving opinions"
            },
            {
              fig:"<svg viewBox='0 0 340 316'><text x='170' y='20' text-anchor='middle'>What happens to だ?</text><text class='s' x='178' y='44' text-anchor='middle'>な-adjective</text><text class='s' x='282' y='44' text-anchor='middle'>noun</text><rect class='d-panel' x='6' y='52' width='328' height='44' rx='8' stroke-width='1.5'/><text class='s' x='14' y='79'>end of sentence</text><text x='178' y='79' text-anchor='middle'>しずかだ</text><text x='282' y='79' text-anchor='middle'>がくせいだ</text><rect class='d-lup' x='6' y='102' width='328' height='44' rx='8' stroke-width='2'/><text class='s' x='14' y='129'>before と</text><text x='178' y='129' text-anchor='middle'>しずかだと</text><text x='282' y='129' text-anchor='middle'>がくせいだと</text><rect class='d-gold' x='6' y='152' width='328' height='44' rx='8' stroke-width='2'/><text class='s' x='14' y='179'>before んです</text><text x='178' y='179' text-anchor='middle'>しずかなんです</text><text x='282' y='179' text-anchor='middle'>がくせいなんです</text><rect class='d-sage' x='6' y='202' width='328' height='44' rx='8' stroke-width='2'/><text class='s' x='14' y='229'>before a noun</text><text x='178' y='229' text-anchor='middle'>しずかなへや</text><text x='282' y='229' text-anchor='middle'>がくせいのとき</text><text class='s' x='170' y='272' text-anchor='middle'>だ stays before と, becomes な before ん.</text><text class='s' x='170' y='292' text-anchor='middle'>Verbs and い-adjectives never change:</text><text class='s' x='170' y='310' text-anchor='middle'>いくと・いくんです; たかいと・たかいんです</text></svg>",
              alt:"A table of what happens to だ with a な-adjective (しずか) and a noun (がくせい). At the end of a sentence: しずかだ, がくせいだ. Before と: しずかだと, がくせいだと. Before んです: しずかなんです, がくせいなんです. Before a noun: しずかなへや, がくせいのとき. だ stays before と and becomes な before ん. Verbs and い-adjectives never change: いくと, いくんです, たかいと, たかいんです.",
              cap:"Four places, one small word: the whole unit’s rules for だ in one picture."
            },
            "Japanese speakers use ～と[思]{おも}います a lot, even when they are fairly sure, because it presents a statement as a personal view rather than a hard fact. It makes opinions sound modest and polite.",
            "To say what you **don’t** think, Japanese usually makes the inner sentence negative: 雨は[降]{ふ}らないと[思]{おも}います (I don’t think it will rain; literally, I think it won’t rain). ～とは[思]{おも}いません also exists, but it usually sounds like rejecting an idea someone has put forward: そうは[思]{おも}いません (I don’t think so).",
            "To ask for an opinion, say どう[思]{おも}いますか (What do you think?). To agree: [私]{わたし}もそう[思]{おも}います (I think so too).",
            "For **other people’s** thoughts, ～と[思]{おも}います doesn’t work, because it always reports the speaker’s own view. Say what they told you, ～と[言]{い}っていました, or use ～と[思]{おも}っています (has been thinking): ロドリゴさんは、[来年]{らいねん}[東京]{とうきょう}へ行きたいと[言]{い}っていました。 (Rodrigo was saying he wants to go to Tokyo next year.)"
          ]
        },
        {
          h:"Common mistakes, and keep going",
          body:[
            {
              table:[
                ["✗ Mistake","✓ Correct","Why"],
                ["学生と[思]{おも}います","学生だと[思]{おも}います","Nouns keep だ before と."],
                ["[便利]{べんり}なと[思]{おも}います","[便利]{べんり}だと[思]{おも}います","な appears before nouns and ん, not before と."],
                ["[高]{たか}いだと[思]{おも}います","高いと[思]{おも}います","い-adjectives never take だ."],
                ["学生だんです","学生なんです","Before ん, だ becomes な."],
                ["行きますと[思]{おも}います","行くと[思]{おも}います","Plain form inside; politeness at the end."],
                ["はじめまして。イエンなんです。","はじめまして。イエンです。","Nothing to explain, so no んです."]
              ]
            },
            "You have now met the whole plain-form system and its most important uses. Plain forms will be inside almost every N4 pattern from here on: the potential and volitional forms and conditionals in Unit 6, and the passive, causative and ～そうだ in Unit 7. If some forms still feel slow, that is normal; forgetting and relearning is how memory works, and short daily review fixes it.",
            "The kanji in this unit include many from the N4 list, such as [思]{おも}う, [言]{い}う, [買]{か}う, [飲]{の}む and [作]{つく}る. Review them in the Kanji Lab, a few minutes a day:",
            {lab:"kl-n4", t:"Practise: the N4 kanji deck"},
            {lab:"kl-n4-vocab", t:"Practise: N4 vocabulary"}
          ]
        }
      ],
      try:[
        {
          id:"e3u5-l5-x1",
          type:"mcq",
          q:"“I’m going home early today. I’ve got work tomorrow, you see.” 「[今日]{きょう}は[早]{はや}く[帰]{かえ}ります。[明日]{あした}、[仕事]{しごと}＿＿。」 What fills the gap?",
          options:[
            {t:"なんです", ok:true, why:"Right. [仕事]{しごと} is a noun, so plain だ becomes な before んです: [仕事]{しごと}なんです."},
            {t:"だんです", why:"Before ん, だ changes to な. [仕事]{しごと}だんです is not a form."},
            {
              t:"んです",
              why:"After a noun, you need な: [仕事]{しごと}なんです. Verbs and い-adjectives take んです directly; nouns don’t."
            },
            {
              t:"だと[思]{おも}います",
              why:"Grammatical, but it means “I think I have work tomorrow”. You know your own schedule, and the sentence is an explanation, so ～なんです fits."
            }
          ]
        },
        {
          id:"e3u5-l5-x2",
          type:"mcq",
          q:"You arrive late to a lesson. Which explanation is correct? 「[遅]{おく}れてすみません。バスが＿＿。」",
          options:[
            {
              t:"[来]{こ}なかったんです",
              ok:true,
              why:"Right. The plain past negative [来]{こ}なかった + んです explains why you are late: “the bus didn’t come”."
            },
            {
              t:"[来]{こ}ないんです",
              why:"This is non-past: “the bus doesn’t come (generally)” or “isn’t coming”. Your lateness has already happened, so past fits."
            },
            {t:"[来]{き}ませんでしたんです", why:"ます forms don’t go before んです. Use the plain form: [来]{こ}なかったんです."},
            {t:"[来]{こ}なかったなんです", why:"な is only added after nouns and な-adjectives. A verb takes んです directly."}
          ]
        },
        {
          id:"e3u5-l5-x3",
          type:"sort",
          q:"Before と[思]{おも}います, does this word need だ?",
          buckets:["Add だ","No だ"],
          items:[
            {t:"学生", b:0, why:"A noun: 学生だと[思]{おも}います."},
            {t:"[便利]{べんり}", b:0, why:"A な-adjective: [便利]{べんり}だと[思]{おも}います."},
            {t:"[静]{しず}か", b:0, why:"A な-adjective: [静]{しず}かだと[思]{おも}います."},
            {t:"雨", b:0, why:"A noun: [明日]{あした}は雨だと[思]{おも}います."},
            {t:"おいしい", b:1, why:"An い-adjective goes straight in: おいしいと[思]{おも}います."},
            {t:"高くない", b:1, why:"A plain い-adjective form: 高くないと[思]{おも}います."},
            {t:"行く", b:1, why:"A verb goes straight in: 行くと[思]{おも}います."},
            {t:"[来]{こ}なかった", b:1, why:"A plain verb form: [来]{こ}なかったと[思]{おも}います."}
          ]
        },
        {
          id:"e3u5-l5-x4",
          type:"match",
          q:"Cheska said each of these. Match her words to the indirect quote: チェスカさんは＿＿[言]{い}いました。",
          pairs:[
            ["「[明日]{あした}は休みです」","[明日]{あした}は休みだと","Noun: です → だ, and だ stays before と."],
            ["「[疲]{つか}れました」","[疲]{つか}れたと","ました → the plain past た."],
            ["「パーティーに行きません」","パーティーに行かないと","ません → the ない-form."],
            ["「[寒]{さむ}いです」","[寒]{さむ}いと","い-adjective: drop です, with no だ."],
            ["「[元気]{げんき}でした」","[元]{げん}[気]{き}だったと","な-adjective: でした → だった."]
          ]
        },
        {
          id:"e3u5-l5-x5",
          type:"mcq",
          q:"Mariya says to you: 「あおいさん、[今日]{きょう}は[来]{こ}ないって。」 What does she mean?",
          options:[
            {
              t:"Aoi says she isn’t coming today.",
              ok:true,
              why:"Right. って is the casual quotation marker: Mariya is passing on what Aoi said."
            },
            {t:"Aoi, don’t come today.", why:"A casual “don’t come” would be [来]{こ}ないで. って reports someone’s words."},
            {t:"Aoi didn’t come today.", why:"[来]{こ}ない is non-past. “Didn’t come” would be [来]{こ}なかった."},
            {t:"I think Aoi will come today.", why:"[来]{こ}ない is negative, and って reports speech, not the speaker’s opinion."}
          ]
        },
        {
          id:"e3u5-l5-x6",
          type:"spot",
          q:"Cheska writes to her study partner. Tap each part with a **grammar mistake**.",
          ask:"has a grammar mistake",
          parts:[
            {t:"[明日]{あした}は日本語のテストなんです。", flag:false, why:"Correct: noun + なんです, giving background."},
            {
              t:"[先]{せん}生は、[漢字]{かんじ}の[問題]{もんだい}が[多]{おお}いだと[言]{い}っていました。",
              flag:true,
              why:"A mistake. [多]{おお}い is an い-adjective, so it takes と directly: [多]{おお}いと."
            },
            {
              t:"[私]{わたし}は[漢字]{かんじ}が[苦手]{にがて}なんです。",
              flag:false,
              why:"Correct: [苦手]{にがて} (weak at) is a な-adjective, so なんです."
            },
            "\n",
            {
              t:"でも、[文法]{ぶんぽう}は[簡単]{かんたん}と[思]{おも}います。",
              flag:true,
              why:"A mistake. [簡単]{かんたん} is a な-adjective, so it keeps だ before と: [簡単]{かんたん}だと[思]{おも}います."
            },
            {t:"[一緒]{いっしょ}に[勉強]{べんきょう}しませんか。", flag:false, why:"Correct: a polite invitation."}
          ]
        },
        {
          id:"e3u5-l5-x7",
          type:"mcq",
          q:"In which situation is ～んです **out of place**?",
          options:[
            {
              t:"Introducing yourself: はじめまして。イエンなんです。",
              ok:true,
              why:"Right. A self-introduction explains nothing, so ～んです sounds as if you are answering a question nobody asked. Say イエンです."
            },
            {
              t:"Explaining why you’re late: バスが[来]{こ}なかったんです。",
              why:"A natural use: the sentence explains the situation (your lateness)."
            },
            {
              t:"Asking a colleague who looks pale: どうしたんですか。",
              why:"A natural use: you have noticed something and ask for an explanation."
            },
            {
              t:"Asking for help: この[漢字]{かんじ}の読み[方]{かた}がわからないんですが…。",
              why:"A natural use: ～んですが gives background before a request."
            }
          ]
        },
        {
          id:"e3u5-l5-x8",
          type:"type",
          q:"Toby notices that Mariya looks down. Type the ending that asks for the story, in hiragana: 「まりやさん、[元気]{げんき}がないですね。[何]{なに}かあった＿＿。」 (“You don’t seem yourself. Did something happen?”)",
          answer:["んですか", "のですか"],
          wrongs:[
            {v:"んです", why:"Without か it is a statement: “Something happened.” To ask, end with ～んですか."},
            {v:"ですか", why:"です doesn’t follow a plain verb directly. Add ん: あったんですか."}
          ],
          why:"Toby has noticed something and asks for the explanation behind it: 何かあったんですか. 何かありましたか would also be correct, but ～んですか shows he has seen that she looks down."
        },
        {
          id:"e3u5-l5-x9",
          type:"type",
          q:"Rodrigo asks where Kaito is. Toby answers: “I think he’s in the bath.” Type the missing part in hiragana: 「かいとくんは今、お[風呂]{ふろ}＿＿と[思]{おも}いますよ。」",
          answer:["だ","にいる","にはいっている","にはいってる"],
          wrongs:[
            {v:"です", why:"です doesn’t go before と[思]{おも}います. The part before と is in the plain form, so a noun takes だ."},
            {v:"な", why:"な joins a な-adjective to a noun. Before と, nouns and な-adjectives take だ."}
          ],
          why:"Before と[思]{おも}う, nouns and な-adjectives keep だ: お[風呂]{ふろ}だと[思]{おも}います. Verbs and い-adjectives go straight in: お[風呂]{ふろ}にいると[思]{おも}います and お[風呂]{ふろ}に[入]{はい}っていると[思]{おも}います are also correct."
        },
        {
          id:"e3u5-l5-x10",
          type:"type",
          q:"Toby told the house: 「[今夜]{こんや}は[晩]{ばん}ご[飯]{はん}を[食]{た}べません。」 Later Mariya passes this on to Fumiko. Type the verb in hiragana: 「トビーさんは、[今夜]{こんや}は[晩]{ばん}ご[飯]{はん}を＿＿と[言]{い}っていました。」",
          answer:"たべない",
          wrongs:[
            {v:"たべません", why:"In an indirect quote the verb goes into the plain form. The politeness stays at the end of the whole sentence: [言]{い}っていました."},
            {v:"たべないだ", why:"Verbs go straight in before と. Only nouns and な-adjectives take だ."}
          ],
          why:"An indirect quote uses the plain form: 食べません → 食べない, then と[言]{い}っていました."
        }
      ],
      apply:{
        intro:"Use the patterns about your own life and opinions. Keep the notes for yourself.",
        tasks:[
          {
            t:"Explain five situations",
            how:[
              "Think of five situations where you might need to explain: arriving late, refusing an invitation, looking tired, asking for directions, not understanding something.",
              "For each, write a short polite explanation with ～んです or ～んですが…, for example [遅]{おく}れてすみません。[道]{みち}がわからなかったんです。",
              "Check the form before んです: plain, with な after nouns and な-adjectives."
            ],
            write:"1… 2… 3… 4… 5…"
          },
          {
            t:"Five opinions",
            how:[
              "Choose five topics you have views on: your town, a film, a food, learning Japanese, the weather this week.",
              "Write one ～と[思]{おも}います sentence about each. Include at least one noun, one な-adjective and one negative (～ないと[思]{おも}います).",
              "Underline every だ before と and check that none follows an い-adjective."
            ],
            write:"1… 2… 3… 4… 5…"
          },
          {
            t:"Pass on three messages",
            how:[
              "Remember three things people said to you this week (in any language).",
              "Report each one in Japanese with ～と[言]{い}っていました, in the plain form inside.",
              "Then rewrite one of them in casual speech with って."
            ],
            write:"[友]{とも}だちは…と[言]{い}っていました。 …"
          },
          {
            t:"Review N4 kanji in the Kanji Lab",
            how:[
              "Open the N4 kanji deck in the Kanji Lab and review for five minutes a day this week.",
              "Each day, write one sentence from this unit that uses a kanji you reviewed."
            ],
            write:"Days I reviewed… Sentences…"
          }
        ],
        proof:"Five explanations with ～んです, five opinions with ～と[思]{おも}います, three reported messages (one in casual speech), and a week of short Kanji Lab reviews."
      },
      read:[
        {
          book:"taekim",
          where:"Basic Grammar, “Noun-related Particles”, section “The 「の」 particle as explanation”",
          note:"The explanatory の and んだ／んです, with casual and polite forms."
        },
        {
          book:"taekim",
          where:"Essential Grammar, “Acting on relative clauses”, sections “The direct quote”, “The interpreted quote” and “Using 「って」 as a casual version of 「と」”",
          note:"Quoting with と[言]{い}う and と[思]{おも}う, and casual って."
        },
        {
          book:"irodori",
          where:"Elementary 1 (A2), Lesson 15 “I have a fever, and my throat is sore.”, grammar note 1 (～んです)",
          note:"～んです for explaining a situation, at the doctor’s, with audio."
        }
      ]
    },
    /* ===================== LESSON 6 ===================== */
    {id:"e3u5-l6", title:"Experiences, lists and when: ～たことがある, ～たり and ～とき", minutes:60,
     hook:{q:"Kaito tells you: 「うちへ[帰]{かえ}るとき、パンを[買]{か}いました。」 Where was he when he bought the bread?", options:["On the way home, before he got there","At home, after he got back","Either: the sentence doesn’t say","Nowhere yet: he is going to buy it later"], answer:0, reveal:"**On the way home.** The sentence is about the past, yet [帰]{かえ}る is in the dictionary form. Before とき (when), the verb form doesn’t show past or future: it shows whether that action was finished when the main thing happened. When Kaito bought the bread, he hadn’t got home yet, so [帰]{かえ}るとき. うちへ[帰]{かえ}ったとき、… would mean “once I was home”. This lesson teaches とき, and two more N4 workhorses built on the plain forms: ～たことがある (have ever done) and ～たり～たりする (do things like…)."},
     goals:[
       "Talk about experiences with ～たことがあります, and say you never have with ～たことがありません",
       "Give examples of what you do with ～たり～たりします, in the past and in casual speech",
       "Say “when” with ～とき after verbs, い-adjectives, な-adjectives (with な) and nouns (with の)",
       "Choose the dictionary form or the た-form before とき by asking which event happens first",
       "Tell ～たことがある from the simple past, and ～たり from the て-form"
     ],
     learn:[
      {h:"Have you ever…? ～たことがある", body:[
        {lead:"To talk about something you have done at least once in your life, Japanese uses the た-form + ことがある: literally, “there is the fact of having done it”."},
        "You met the [[ta-form]] in Unit 3 and the whole plain-form system in Lesson 1. [[ta-koto-ga-aru|～たことがある]] simply adds ことがある. こと means “thing, fact”, and ある means “there is”, so the pattern says that such an event exists somewhere in your past.",
        {table:[["Verb","た-form","Experience (polite)"],["[行]{い}く (go)","行った","行ったことがあります"],["[食]{た}べる (eat)","食べた","食べたことがあります"],["[見]{み}る (see)","見た","見たことがあります"],["する (do)","した","したことがあります"],["[来]{く}る (come)","[来]{き}た","[来]{き}たことがあります"]]},
        "To say you have **never** done it, make ある negative: ～たことがありません. [一度]{いちど}も (not even once) makes it stronger. To ask, add か. The answer usually repeats only the last verb: はい、あります or いいえ、ありません.",
        {ex:"A：[富士山]{ふじさん}に[登]{のぼ}ったことがありますか。\nB：はい、[一度]{いちど}あります。\nA: Have you ever climbed Mount Fuji?\nB: Yes, once.\n\n[納豆]{なっとう}は、まだ[一度]{いちど}も食べたことがありません。\nI’ve never eaten nattō, not even once.\n\nロドリゴさんは、[雪]{ゆき}を見たことがないと[言]{い}っていました。\nRodrigo was saying he has never seen snow.", label:"～たことがある"},
        "In casual speech the plain forms appear, and が is often dropped. The answer to ある？ is ある or ない, the plain negative of ある from Lesson 1:",
        {ex:"A：[沖縄]{おきなわ}、行ったことある？\nB：ううん、ない。\nA: Have you ever been to Okinawa?\nB: No, never.", label:"Casual"},
        {list:[
          "**At least once, up to now.** The pattern is about your life experience, not about one particular time. So it doesn’t go with words that pin down one event, such as [昨日]{きのう} or [今朝]{けさ}: ✗ [昨日]{きのう}、すしを食べたことがあります. Just say [昨日]{きのう}、すしを食べました.",
          "**Something a little special.** [沖縄]{おきなわ}に行ったことがあります is a normal thing to say. ✗ パンを食べたことがあります sounds strange, because nearly everyone has eaten bread, unless the context makes it unusual.",
          "**How many times.** Add [一度]{いちど} or [一回]{いっかい} (once), [二回]{にかい} (twice) or [何度]{なんど}も (many times): [何度]{なんど}も[来]{き}たことがあります (I’ve been here many times)."
        ]},
        {key:"た-form + ことがある = “have (ever) done”, for life experience. For one event at a known time, use the simple past."},
        "English “have” also covers “Have you eaten yet?”. Japanese uses もう～ましたか for that, the partner of まだ～ていません from Unit 3: もう[昼]{ひる}ご[飯]{はん}を食べましたか. If you asked [昼]{ひる}ご[飯]{はん}を食べたことがありますか, you would be asking whether the person has ever, in their whole life, eaten lunch!",
        "Don’t confuse the pattern with the **non-past plain form** (dictionary form or ない-form) + ことがある, which means “there are times when…”: [朝]{あさ}ご[飯]{はん}を食べないことがあります (Sometimes I skip breakfast). Only the た-form talks about experience."
      ]},
      {h:"Doing things like…: ～たり～たりする", body:[
        {lead:"When you want to give a couple of examples of what you do, without listing everything, use ～たり～たりする."},
        "Take the た-form of each verb and add り. After the last one, put する, and let する carry the tense and the politeness: ～たり～たりします (do), ～たり～たりしました (did), ～たり～たりする (casual). This is [[tari-tari]].",
        {table:[["Word","た-form","たり form"],["[読]{よ}む (read)","読んだ","読んだり"],["[掃除]{そうじ}する (clean)","[掃除]{そうじ}した","[掃除]{そうじ}したり"],["[出]{で}かける (go out)","出かけた","出かけたり"],["[忙]{いそが}しい (busy)","[忙]{いそが}しかった","[忙]{いそが}しかったり"],["[暇]{ひま}だ (free)","[暇]{ひま}だった","[暇]{ひま}だったり"]]},
        {ex:"[週末]{しゅうまつ}は、[本]{ほん}を読んだり、[映画]{えいが}を見たりします。\nAt weekends I read books, watch films and so on.\n\n[昨日]{きのう}は、[部屋]{へや}を[掃除]{そうじ}したり、[洗濯]{せんたく}をしたりしました。\nYesterday I cleaned my room, did the laundry and that sort of thing.\n\nA：[休]{やす}みの[日]{ひ}は[何]{なに}してるの？\nB：ゲームしたり、[寝]{ね}たりしてる。\nA: What do you do on your days off?\nB: Play games, sleep, that kind of thing.", label:"～たり～たりする"},
        "～たり～たり means “for example”: these are some of the things, and there are others. It says nothing about order. Compare the て-form from Unit 3, which lists actions in the order they happen, and usually all of them:",
        {ex:"[日曜日]{にちようび}は、[掃除]{そうじ}をして、[買]{か}い[物]{もの}に行って、[映画]{えいが}を見ました。\nOn Sunday I cleaned, went shopping and then watched a film. (these three, in this order)\n\n[日曜日]{にちようび}は、[掃除]{そうじ}をしたり、[買]{か}い[物]{もの}に行ったりしました。\nOn Sunday I did things like cleaning and shopping. (examples)", label:"て or たり?"},
        {list:[
          "**Just one たり.** With a single verb, ～たりする softens the sentence to “things like…”: 休みの[日]{ひ}は、[音楽]{おんがく}を[聞]{き}いたりします (On days off I listen to music and so on).",
          "**Back and forth.** Two opposite verbs describe something that keeps switching: 行ったり[来]{き}たりする (go back and forth), [雨]{あめ}が[降]{ふ}ったりやんだりしています (it keeps raining on and off).",
          "**Sometimes this, sometimes that.** With adjectives and nouns: [仕事]{しごと}は[忙]{いそが}しかったり[暇]{ひま}だったりします (Work is sometimes busy, sometimes quiet)."
        ]},
        {warn:"In careful Japanese every item takes たり, and the list ends with する: ✗ 本を読んだり、[映画]{えいが}を見ます → 本を読んだり、[映画]{えいが}を見たりします. You will hear the second たり dropped in relaxed conversation, but textbooks and writing guides treat that as a mistake, so use both in tests and in writing."}
      ]},
      {h:"When: ～とき", body:[
        {lead:"とき is a noun that means “time”. Put a description in front of it, and you get “(at) the time when…”."},
        "Because とき is a noun, the words before it follow the rules for describing nouns from Lesson 4 ([[noun-modifier-clause]]): verbs and い-adjectives in the plain form, な-adjectives with な, and nouns with の. It is usually written in hiragana; you will also see it in kanji as [時]{とき}. The glossary entry is [[toki-clause]].",
        {table:[["Before とき","Example","Meaning"],["verb (plain)","出かけるとき\n[疲]{つか}れたとき\n[分]{わ}からないとき","when I go out\nwhen I’m tired\nwhen I don’t understand"],["い-adjective","[寒]{さむ}いとき","when it’s cold"],["な-adjective + な","[暇]{ひま}なとき","when I’m free"],["noun + の","[子]{こ}どものとき\n[学生]{がくせい}のとき","when I was a child\nwhen I was a student"]]},
        "The main sentence follows とき, often after a comma. You can add に (at that time) or は (as for those times) with little change in meaning: [寒]{さむ}いときは、[温]{あたた}かいお[茶]{ちゃ}を[飲]{の}みます (When it’s cold, I drink hot tea).",
        {ex:"[暇]{ひま}なとき、何をしますか。\nWhat do you do when you’re free?\n\n子どものとき、[海]{うみ}の[近]{ちか}くに[住]{す}んでいました。\nWhen I was a child, I lived near the sea.\n\n分からないときは、[先生]{せんせい}に聞いてください。\nWhen you don’t understand, please ask the teacher.\n\n[疲]{つか}れたとき、[甘]{あま}いものが食べたくなります。\nWhen I’m tired, I start wanting something sweet.", label:"～とき"},
        "The tense of the whole sentence is shown at the end, by the main verb: [住]{す}んでいました is past, 聞いてください is a request. The form **before** とき shows something different, as the next section explains."
      ]},
      {h:"Dictionary form or た-form before とき?", body:[
        {lead:"This is the part of とき that surprises learners. With action verbs, the form before とき tells you which event comes first, not whether the story is past or future."},
        {list:[
          "**Dictionary form + とき:** the とき action has **not happened yet** (or is still going on) when the main action happens.",
          "**た-form + とき:** the とき action is **already complete** when the main action happens."
        ]},
        {ex:"出かけるとき、「いってきます」と[言]{い}います。\nWhen I leave the house, I say “Ittekimasu”. (said before leaving)\n\nうちへ[帰]{かえ}ったとき、「ただいま」と[言]{い}います。\nWhen I get home, I say “Tadaima”. (said after arriving)", label:"Two greetings, two forms"},
        "Both sentences describe habits, in the non-past. Yet one uses 出かける and the other [帰]{かえ}った, because you say いってきます before you have left and ただいま after you have arrived. The same logic works in the past:",
        {ex:"[日本]{にほん}へ行くとき、[空港]{くうこう}で本を[買]{か}いました。\nWhen I went to Japan, I bought a book at the airport. (before going: at the airport at home)\n\n日本へ行ったとき、[着物]{きもの}を[買]{か}いました。\nWhen I went to Japan, I bought a kimono. (after arriving: in Japan)", label:"The same idea in the past"},
        {fig:'<svg viewBox="0 0 340 236"><defs><marker id="e3u5t1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Which happens first?</text><text class="s" x="16" y="48">にほんへ いくとき、ほんを かいました。</text><path class="d-ink" d="M16 98H324" stroke-width="2" marker-end="url(#e3u5t1)"/><text class="s" x="318" y="116" text-anchor="end">time</text><rect class="d-gold" x="20" y="62" width="136" height="26" rx="6" stroke-width="2"/><text class="s" x="88" y="80" text-anchor="middle">1 buy a book</text><rect class="d-lup" x="180" y="62" width="136" height="26" rx="6" stroke-width="2"/><text class="s" x="248" y="80" text-anchor="middle">2 arrive in Japan</text><text class="s" x="16" y="152">にほんへ いったとき、きものを かいました。</text><path class="d-ink" d="M16 202H324" stroke-width="2" marker-end="url(#e3u5t1)"/><text class="s" x="318" y="220" text-anchor="end">time</text><rect class="d-lup" x="20" y="166" width="136" height="26" rx="6" stroke-width="2"/><text class="s" x="88" y="184" text-anchor="middle">1 arrive in Japan</text><rect class="d-gold" x="180" y="166" width="136" height="26" rx="6" stroke-width="2"/><text class="s" x="248" y="184" text-anchor="middle">2 buy a kimono</text></svg>', alt:"Two timelines. Top: にほんへ いくとき、ほんを かいました. First, buy a book; second, arrive in Japan. Bottom: にほんへ いったとき、きものを かいました. First, arrive in Japan; second, buy a kimono.", cap:"日本へ行くとき: the book was bought before arriving. 日本へ行ったとき: the kimono was bought after arriving. Both sentences are in the past; only the order differs."},
        "With **states** there is no order to worry about: adjectives, nouns, ある, いる, ない and ～ている describe the situation at that moment. ～ているとき means “while I was in the middle of doing”:",
        {ex:"[料理]{りょうり}をしているとき、[電話]{でんわ}が[鳴]{な}りました。\nThe phone rang while I was cooking.\n\n[時間]{じかん}がないときは、コンビニでご[飯]{はん}を[買]{か}います。\nWhen I have no time, I buy food at a convenience store.", label:"States before とき"},
        "Some verbs describe a change of state, like [疲]{つか}れる (get tired) or おなかがすく (get hungry). They usually take the た-form before とき, because you have to be tired or hungry already: [疲]{つか}れたとき, おなかがすいたとき.",
        {tip:"A quick test: ask “Had it happened yet?” If not, use the dictionary form. If it had, use the た-form."}
      ]},
      {h:"Common mistakes", body:[
        {table:[["✗ Mistake","✓ Correct","Why"],["子どもとき","子どものとき","Nouns take の before とき."],["[暇]{ひま}とき / [暇]{ひま}だとき","[暇]{ひま}なとき","な-adjectives take な before a noun."],["行きましたことがあります","行ったことがあります","Use the plain た-form before こと."],["[今朝]{けさ}、パンを食べたことがあります","[今朝]{けさ}、パンを食べました","One event at a known time: simple past."],["本を読んだり、[映画]{えいが}を見ます","本を読んだり、[映画]{えいが}を見たりします","Every item takes たり; the list ends with する."],["(at the airport, before leaving) [日本]{にほん}へ行ったとき、本を[買]{か}いました","日本へ行くとき、本を[買]{か}いました","You hadn’t gone yet: dictionary form."]]},
        "All three patterns are built on the plain forms from Lesson 1, and とき is really Lesson 4’s noun-describing clauses at work again. If the た-form still feels slow, spend a few minutes with {{plain-form-grammar}}; these patterns become easy once it is automatic.",
        "The full reference, with notes for later levels, is in {{experience-listing-toki}}.",
        {terms:["ta-koto-ga-aru","tari-tari","toki-clause"]}
      ]}
     ],
     try:[
      {id:"e3u5-l6-x1", type:"mcq", q:"Which sentence means “I have been to Osaka”?", options:[
        {t:"[大阪]{おおさか}に行ったことがあります。", ok:true, why:"Right. The た-form 行った + ことがあります describes a life experience."},
        {t:"[大阪]{おおさか}に行くことがあります。", why:"The dictionary form + ことがある means “there are times when”: “I sometimes go to Osaka”."},
        {t:"[大阪]{おおさか}に行きましたことがあります。", why:"ます forms can’t go before こと. Use the plain た-form: 行ったことがあります."},
        {t:"[大阪]{おおさか}に行ったことです。", why:"Without ある there is no “experience”. The pattern is ～たことがあります."}
      ]},
      {id:"e3u5-l6-x2", type:"type", q:"Type the missing part in hiragana, in the polite form: “I have been to Kyoto.” 「[京都]{きょうと}に＿＿＿＿。」 (行く, go)", answer:["いったことがあります","いったことあります"],
        hint:"The た-form of 行く, then ことがあります.",
        wrongs:[
          {v:"いきたことがあります", why:"The た-form of 行く is 行った, with the same っ as its て-form 行って."},
          {v:"いくことがあります", why:"The dictionary form + ことがある means “I sometimes go”. For experience, use the た-form: 行ったことがあります."},
          {v:"いきました", why:"That is “I went”: one event. For life experience, use ～たことがあります."},
          {v:"いったことがありました", why:"Life experience up to now uses the present ある: ～たことがあります."}
        ],
        why:"行った (the た-form; 行く is the verb with the special っ) + ことがあります. In conversation が is often dropped: 行ったことあります."},
      {id:"e3u5-l6-x3", type:"type", q:"Type the たり form in hiragana: 「[週末]{しゅうまつ}は、本を＿＿＿、[映画]{えいが}を見たりします。」 (読む, read)", answer:"よんだり",
        hint:"Make the た-form of 読む first.",
        wrongs:[
          {v:"よみたり", why:"たり is made from the た-form, not the ます stem: 読んだ → 読んだり."},
          {v:"よむたり", why:"たり follows the た-form: 読んだ + り."},
          {v:"よんで", why:"The て-form lists actions in order. This sentence gives examples and ends in 見たりします, so it needs たり."},
          {v:"よんたり", why:"Verbs ending in む change to んだ, with a voiced だ: 読んだり."}
        ],
        why:"読む → 読んだ (む verbs take んだ) → 読んだり. Both items take たり, and します at the end carries the tense."},
      {id:"e3u5-l6-x4", type:"match", q:"Match each word with the form it takes before とき.", pairs:[
        ["子ども (child)","こどものとき","A noun takes の."],
        ["[暇]{ひま} (free; a な-adjective)","ひまなとき","A な-adjective takes な."],
        ["[寒]{さむ}い (cold)","さむいとき","An い-adjective goes straight in."],
        ["出かける (go out)","でかけるとき","A verb in the plain form goes straight in."],
        ["分からない (don’t understand)","わからないとき","A plain negative goes straight in too."]
      ]},
      {id:"e3u5-l6-x5", type:"mcq", q:"Toby is explaining Japanese greetings to Rodrigo: 「うちを＿＿とき、「いってきます」と[言]{い}います。」 Which form fills the gap?", options:[
        {t:"出る", ok:true, why:"Right. You say いってきます before you have left, so leaving isn’t complete yet: dictionary form."},
        {t:"出た", why:"出たとき would mean once you are already outside. いってきます is said as you leave."},
        {t:"出て", why:"The て-form can’t go before a noun. とき needs a plain form: 出る."},
        {t:"出ます", why:"Polite ます forms don’t go before とき. The politeness comes at the end: [言]{い}います."}
      ]},
      {id:"e3u5-l6-x6", type:"sort", q:"Sort the sentences: natural, or not natural?", buckets:["Natural","Not natural"], items:[
        {t:"[一度]{いちど}、[着物]{きもの}を[着]{き}たことがあります。", b:0, why:"Life experience with the た-form: natural."},
        {t:"[今朝]{けさ}、コーヒーを[飲]{の}んだことがあります。", b:1, why:"[今朝]{けさ} pins down one event. Say [今朝]{けさ}、コーヒーを[飲]{の}みました."},
        {t:"休みの[日]{ひ}は、[料理]{りょうり}を[作]{つく}ったり、[散歩]{さんぽ}したりします。", b:0, why:"Two examples with たり, ending in します."},
        {t:"休みの[日]{ひ}は、[料理]{りょうり}を[作]{つく}ったり、[散歩]{さんぽ}します。", b:1, why:"The second item needs たり too: [散歩]{さんぽ}したりします."},
        {t:"[暇]{ひま}なとき、[絵]{え}をかきます。", b:0, why:"な-adjective + な + とき."},
        {t:"学生とき、[東京]{とうきょう}に[住]{す}んでいました。", b:1, why:"A noun needs の: 学生のとき."},
        {t:"[疲]{つか}れたとき、[早]{はや}く[寝]{ね}ます。", b:0, why:"A change of state: you are already tired, so the た-form."},
        {t:"雨が[降]{ふ}ったりやんだりしています。", b:0, why:"Two opposite verbs with たり: it keeps raining on and off."}
      ]},
      {id:"e3u5-l6-x7", type:"spot", q:"Cheska wrote about her weekend for her Japanese class. Tap each sentence that has a **mistake**.", ask:"has a mistake", parts:[
        {t:"[週末]{しゅうまつ}は、[友]{とも}だちの[家]{いえ}へ行ったり、[買]{か}い[物]{もの}をしたりしました。", flag:false, why:"Correct: two examples with たり, and しました carries the past."},
        {t:"[日曜日]{にちようび}は、[初]{はじ}めて[温泉]{おんせん}に[行]{い}きました。", flag:false, why:"Correct: one event on a known day, so the simple past."},
        "\n",
        {t:"子どもとき、[温泉]{おんせん}はテレビで見ただけでした。", flag:true, why:"A noun needs の before とき: 子どものとき."},
        {t:"友だちは、[温泉]{おんせん}に[何度]{なんど}も行きましたことがあります。", flag:true, why:"The plain た-form goes before こと: 行ったことがあります."},
        "\n",
        {t:"うちへ[帰]{かえ}ったとき、とても[眠]{ねむ}かったです。", flag:false, why:"Correct: she felt sleepy once she was home, so [帰]{かえ}った."},
        {t:"[暇]{ひま}なとき、また行きたいです。", flag:false, why:"Correct: な-adjective + な + とき."}
      ]},
      {id:"e3u5-l6-x8", type:"mcq", q:"Aoi asks what you did on Sunday. You cleaned, did the laundry and a few other small jobs, in no particular order. Which answer fits best?", options:[
        {t:"[掃除]{そうじ}をしたり、[洗濯]{せんたく}をしたりしました。", ok:true, why:"Right. たり gives examples from a longer list, with no order."},
        {t:"[掃除]{そうじ}をして、[洗濯]{せんたく}をしました。", why:"Grammatical, but the て-form lists actions in order, as if these two were all you did. You wanted to give examples."},
        {t:"[掃除]{そうじ}をしたり、[洗濯]{せんたく}をしました。", why:"The second item needs たり as well, then する: [洗濯]{せんたく}をしたりしました."},
        {t:"[掃除]{そうじ}をしたことがあります。", why:"～たことがある is about life experience, not about last Sunday."}
      ]},
      {id:"e3u5-l6-x9", type:"type", q:"Fumiko is teaching table manners: 「ご[飯]{はん}を＿＿＿とき、「いただきます」と[言]{い}いますよ。」 Type the missing verb in hiragana. (食べる, eat)", answer:"たべる",
        hint:"Is the eating finished when you say いただきます?",
        wrongs:[
          {v:"たべた", why:"いただきます is said before you start eating, so the eating hasn’t happened yet: 食べるとき. The phrase for after eating is ごちそうさま(でした): 食べたとき."},
          {v:"たべて", why:"とき is a noun, so it needs a plain form before it, not the て-form."},
          {v:"たべます", why:"ます forms don’t go before とき. The politeness comes at the end: [言]{い}いますよ."}
        ],
        why:"You say いただきます before eating, so the action before とき isn’t complete: the dictionary form 食べる."}
     ],
     apply:{
      intro:"Use the three patterns about your own life. Keep the notes for yourself.",
      tasks:[
       {t:"Five experiences", how:[
         "Write five sentences about things you have done at least once: places, food, sports, jobs. Use ～たことがあります.",
         "Write two things you have never done, with ～たことがありません (add [一度]{いちど}も if you like).",
         "Turn three of them into questions you could ask a friend: ～たことがありますか。"
       ], write:"…たことがあります。…たことがありません。…"},
       {t:"Your weekend with たり", how:[
         "Write two sentences about what you usually do at weekends with ～たり～たりします.",
         "Write one about last weekend with ～たり～たりしました.",
         "Say one of them again in casual speech, as you would to a friend: ～たり～たりしてる."
       ], write:"[週末]{しゅうまつ}は…"},
       {t:"A “when” diary", how:[
         "Write four sentences with とき about your daily routine: two with the dictionary form (the とき action hasn’t happened yet) and two with the た-form (it has).",
         "Check each one with the question “Had it happened yet?”",
         "Add one sentence with a noun (～のとき) and one with a な-adjective (～なとき)."
       ], write:"…とき、… …とき、…"}
      ],
      proof:"Five experiences, two things you’ve never done and three questions; three weekend sentences with たり; and six とき sentences, each checked for the right form."
     },
     read:[
      {book:"taekim", where:"“Special Expressions with Generic Nouns”, section “Using 「こと」 to say whether something has happened”", note:"～たことがある, including the casual ～たことある."},
      {book:"taekim", where:"Essential Grammar, “Compound Sentences”, section “Expressing multiple actions or states using 「～たりする」”", note:"たり for examples of actions and states."},
      {book:"irodori", where:"Elementary 1, Lessons 8 “Have you ever played baseball?” (V-たことがあります), 10 “I would like to take a Japanese-language class.” (Nのとき, ナA-なとき, イA-いとき), 15 “I have a fever, and my throat is sore.” (～とき（に）) and 16 “I try not to eat too much.” (V1-たり、V2-たり（します）)", note:"Each pattern in an everyday conversation, with audio."},
      {book:"irodori", where:"Elementary 2, Lesson 6 “I am glad that I went to a lot of different places.” (V-る／V-ている／V-た とき)", note:"The three verb forms before とき, side by side."}
     ]
    },
    /* ===================== LESSON 7 ===================== */
    {id:"e3u5-l7", title:"Before, after and because: ～まえに, ～あとで and ～ので", minutes:55,
     hook:{q:"How do you say “before going to bed” in Japanese?", options:["[寝]{ね}る[前]{まえ}に","[寝]{ね}た[前]{まえ}に","[寝]{ね}ての[前]{まえ}に","[寝]{ね}るの[前]{まえ}に"], answer:0, reveal:"**[寝]{ね}る[前]{まえ}に.** Before [前]{まえ} (before), a verb always takes the dictionary form, even in a story about yesterday: [昨日]{きのう}、[寝]{ね}る[前]{まえ}に[本]{ほん}を[読]{よ}みました. Its partner [後]{あと} (after) does the opposite and always takes the た-form: [寝]{ね}た[後]{あと}で. This lesson covers both, compares [後]{あと}で with ～てから from Unit 3, and adds ～ので, a softer way to give reasons than から."},
     goals:[
       "Say “before” with the dictionary form + [前]{まえ}に and with noun + の前に",
       "Say “after” with the た-form + [後]{あと}で and with noun + の後で",
       "Keep 前に with the dictionary form and 後で with the た-form, whatever the tense of the sentence",
       "Choose between ～た後で and ～てから, including ～てから for “since”",
       "Give reasons with ～ので (なので after nouns and な-adjectives), and choose between ので and から"
     ],
     learn:[
      {h:"Before: ～前に", body:[
        {lead:"前 means “front” or “before”. To say what you do before something else, put the verb in front of 前に."},
        "Verbs take the dictionary form. Nouns take の. A length of time goes straight in front of 前, and then the meaning is “ago”. The glossary entry is [[mae-ni]].",
        {table:[["Before 前に","Example","Meaning"],["verb (dictionary form)","[寝]{ね}る前に\n[日本]{にほん}へ[来]{く}る前に","before going to bed\nbefore coming to Japan"],["noun + の","[授業]{じゅぎょう}の前に\n[食事]{しょくじ}の前に","before class\nbefore the meal"],["length of time + 前","[三年]{さんねん}前に\n[一時間]{いちじかん}前に","three years ago\nan hour ago"]]},
        {ex:"[寝]{ね}る前に、[歯]{は}を[磨]{みが}きます。\nI brush my teeth before I go to bed.\n\n[食]{た}べる前に、[手]{て}を[洗]{あら}ってください。\nPlease wash your hands before you eat.\n\n日本へ[来]{く}る前に、[少]{すこ}し[日本語]{にほんご}を[勉強]{べんきょう}しました。\nBefore I came to Japan, I studied a little Japanese.\n\n[授業]{じゅぎょう}の前に、[宿題]{しゅくだい}を[出]{だ}してください。\nPlease hand in your homework before class.", label:"～前に"},
        {key:"Before 前, the verb is always in the dictionary form, even in the past: 日本へ[来]{く}る前に、…しました. At that moment, coming to Japan hadn’t happened yet. ✗ [来]{き}た前に."},
        "The ない-form doesn’t go before 前に either. And with a length of time there is no の: 三年前に (three years ago), not ✗ 三年の前に.",
        "前 also works on its own as “before, in the past”: 前は[東京]{とうきょう}に[住]{す}んでいました (I used to live in Tokyo)."
      ]},
      {h:"After: ～後で", body:[
        {lead:"後 (after) is the mirror image of 前, with one big difference: the verb before it takes the た-form."},
        "Here 後 is read あと. You may know it as ご from [午後]{ごご} (afternoon), and with a length of time it is read ご too. The glossary entry is [[ato-de]].",
        {table:[["After [後]{あと}で","Example","Meaning"],["verb (た-form)","食べた後で\n[授業]{じゅぎょう}が[終]{お}わった後で","after eating\nafter class finishes"],["noun + の","[仕事]{しごと}の後で\n[授業]{じゅぎょう}の後で","after work\nafter class"],["length of time + 後 (ご)","[一時間後]{いちじかんご}に\n[三日後]{みっかご}に","an hour later\nthree days later"]]},
        {ex:"[晩]{ばん}ご[飯]{はん}を食べた[後]{あと}で、テレビを[見]{み}ました。\nAfter dinner, I watched TV.\n\n[明日]{あした}、[仕事]{しごと}が[終]{お}わった後で、[電話]{でんわ}します。\nI’ll call you tomorrow after work finishes.\n\n[仕事]{しごと}の後で、[飲]{の}みに[行]{い}きませんか。\nWould you like to go for a drink after work?\n\nじゃあ、また後で。\nSee you later, then.", label:"～後で"},
        "Look at the second example: it is about tomorrow, but the verb is still [終]{お}わった. As with とき in the last lesson, the た-form shows that work will already be finished when you call. ✗ [終]{お}わる後で.",
        "後で also stands alone as “later”: 後で電話します (I’ll call later). You will also meet ～た後 with no で, and ～た後に, which sounds a little more formal. At this level you can treat them as the same.",
        "Don’t confuse 後 (あと, after) with [後]{うし}ろ (behind). [後]{あと} is about time; [後]{うし}ろ is about place: [私]{わたし}の後ろ (behind me), but [授業]{じゅぎょう}の[後]{あと}で (after class). The kanji is the same, so the okurigana ろ and the context tell you which one you are reading."
      ]},
      {h:"～た後で or ～てから?", body:[
        "In Unit 3 you learned ～てから (after doing, then…). It often means the same as ～た後で, and many sentences accept both: [映画]{えいが}を見た後で / 見てから、[食事]{しょくじ}をしました (After the film, we had a meal). There are differences worth knowing, though.",
        {list:[
          "**Steps in order: ～てから.** てから stresses that one thing must come first: “not until X, then Y”. That makes it the usual choice for instructions: [手]{て}を[洗]{あら}ってから、[食]{た}べてください (Wash your hands first, then eat).",
          "**“Since”: only ～てから.** With a length of time, てから means “since”: [日本]{にほん}へ[来]{き}てから、[二年]{にねん}になります (It’s been two years since I came to Japan). 後で can’t do this: ✗ [来]{き}た後で、二年になります.",
          "**A point in time: ～た後で.** 後で puts the focus on the time after something, often with a gap in between, and it can stand alone as “later”."
        ]},
        {table:[["Use","～た後で","～てから"],["After X, Y","○ 見た後で、[食事]{しょくじ}しました","○ 見てから、[食事]{しょくじ}しました"],["First X, then Y (steps)","possible, less usual","○ [洗]{あら}ってから、[食]{た}べてください"],["Since X","✗","○ [来]{き}てから、二年になります"],["On its own: “later”","○ 後で","✗"]]},
        {fig:'<svg viewBox="0 0 340 214"><defs><marker id="e3u5t2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Before and after: which form?</text><path class="d-ink" d="M10 134H330" stroke-width="2" marker-end="url(#e3u5t2)"/><rect class="d-lup" x="8" y="64" width="104" height="40" rx="8" stroke-width="2"/><text x="60" y="89" text-anchor="middle">くる まえに</text><rect class="d-gold" x="120" y="58" width="100" height="52" rx="8" stroke-width="2"/><text x="170" y="80" text-anchor="middle">にほんへ</text><text x="170" y="100" text-anchor="middle">くる</text><rect class="d-sage" x="228" y="64" width="104" height="40" rx="8" stroke-width="2"/><text x="280" y="89" text-anchor="middle">きた あとで</text><text class="s" x="60" y="158" text-anchor="middle">dictionary form</text><text class="s" x="60" y="176" text-anchor="middle">(not done yet)</text><text class="s" x="280" y="158" text-anchor="middle">た-form</text><text class="s" x="280" y="176" text-anchor="middle">(already done)</text><text class="s" x="170" y="204" text-anchor="middle">The same in the past and the future.</text></svg>', alt:"A timeline with the event にほんへ くる in the middle. On the left, before it: くる まえに, labelled dictionary form, not done yet. On the right, after it: きた あとで, labelled た-form, already done. A note says this is the same in the past and the future.", cap:"日本へ来る前に (before coming) and 日本へ来た後で (after coming): the form depends on whether coming to Japan has happened at that point, not on the tense of the sentence."}
      ]},
      {h:"Because: ～ので", body:[
        {lead:"You already give reasons with から (Unit 3). ～ので means the same, “because, so”, but it sounds softer and more polite."},
        "Put a plain form before [[node-reason|ので]]. Nouns and な-adjectives change だ to な, exactly as before ～んです in Lesson 5: [雨]{あめ}なので, [静]{しず}かなので. Past forms go in unchanged: 雨だったので.",
        {table:[["Word type","Plain form","With ので"],["verb","[降]{ふ}っている / 行った","[降]{ふ}っているので / 行ったので"],["い-adjective","[痛]{いた}い","[痛]{いた}いので"],["な-adjective","[暇]{ひま}だ","[暇]{ひま}なので"],["noun","[休]{やす}みだ / 雨だった","休みなので / 雨だったので"]]},
        {ex:"雨が[降]{ふ}っているので、[今日]{きょう}は[出]{で}かけません。\nIt’s raining, so I’m not going out today.\n\n[頭]{あたま}が[痛]{いた}いので、[早]{はや}く[帰]{かえ}ってもいいですか。\nI have a headache, so may I go home early?\n\n[明日]{あした}は休みなので、ゆっくり[寝]{ね}ます。\nTomorrow is a day off, so I’ll have a lie-in.\n\n[道]{みち}が[分]{わ}からなかったので、[遅]{おく}れました。すみません。\nI didn’t know the way, so I was late. I’m sorry.", label:"～ので"},
        "In very polite speech, such as at a shop counter or in a business email, ので can even follow ます and です: すぐ[戻]{もど}りますので、[少々]{しょうしょう}お[待]{ま}ちください (I’ll be right back, so please wait a moment).",
        "You will also hear なので at the start of a sentence, meaning “so”: [明日]{あした}はテストです。なので、[今日]{きょう}は[勉強]{べんきょう}します. It is very common in speech, but many teachers and writing guides find it too casual for formal writing, where writers prefer words such as そのため (for that reason)."
      ]},
      {h:"ので or から?", body:[
        "Most of the time you can use either. The difference is in tone. から gives the reason as your own point, quite directly; ので presents it as a natural cause, so it sounds softer and more objective. These guidelines follow from that:",
        {table:[["Situation","Better choice","Example"],["Polite requests, asking permission, apologies","ので","[熱]{ねつ}があるので、休んでもいいですか。"],["Casual talk with friends","から (ので is fine too)","[寒]{さむ}いから、[窓]{まど}[閉]{し}めて。"],["Strong feelings, insisting","から","[危]{あぶ}ないから、だめ！"],["Answering “why?” with ～です","から only","[電車]{でんしゃ}が[止]{と}まったからです。"]]},
        "The last row is a firm rule: から can end a sentence before です, and ので can’t. どうして[遅]{おく}れたんですか。―電車が[止]{と}まったからです。 (✗ [止]{と}まったのでです)",
        "Remember the small difference in form too: after nouns and な-adjectives, から takes だ but ので takes な. 雨だから, 雨なので.",
        {tip:"In a message to a teacher or a boss, ので is the safer choice. [熱]{ねつ}があるので、[今日]{きょう}は休みます sounds like an explanation; with から the same sentence can sound blunt."}
      ]},
      {h:"In conversation: plans for the evening", body:[
        "Kaito and Rodrigo are sorting out dinner in the kitchen, in casual speech. Then Cheska writes a polite message to Fumiko. Notice which reason word each one uses.",
        {ex:"かいと：ロドリゴ、[晩]{ばん}ご[飯]{はん}、[何時]{なんじ}ごろにする？\nロドリゴ：[七時]{しちじ}はどう？バイトから[帰]{かえ}った後で、シャワーを[浴]{あ}びたいんだ。\nかいと：いいよ。じゃあ、[作]{つく}る前に、[卵]{たまご}を[買]{か}わなきゃ。\nロドリゴ：[卵]{たまご}は[冷蔵庫]{れいぞうこ}にあるよ。[昨日]{きのう}[買]{か}ったから。\nかいと：そうなんだ。ありがとう。\nKaito: Rodrigo, what time shall we have dinner?\nRodrigo: How about seven? After I get back from work, I want to take a shower.\nKaito: OK. Then before I cook, I need to buy eggs.\nRodrigo: There are eggs in the fridge. I bought some yesterday.\nKaito: Oh, really? Thanks.", label:"In the kitchen"},
        {ex:"ふみこさん、すみません。[日曜日]{にちようび}は[大学]{だいがく}で[勉強会]{べんきょうかい}があるので、[晩]{ばん}ご[飯]{はん}に[少]{すこ}し[遅]{おく}れます。[七時前]{しちじまえ}には[帰]{かえ}ります。\nFumiko-san, I’m sorry. I have a study group at the university on Sunday, so I’ll be a little late for dinner. I’ll be back before seven.", label:"Cheska’s message"},
        {list:[
          "Rodrigo gives a reason with から ([昨日]{きのう}[買]{か}ったから), which is natural between housemates. Cheska writes to an older person, so she uses ので.",
          "[帰]{かえ}った後で and [作]{つく}る前に follow the rule: た-form before 後, dictionary form before 前, even though both are about the future.",
          "With a clock time, 前 means “before”, not “ago”: 七時前に (before seven). With a length of time it means “ago”: [三年前]{さんねんまえ}に. The には in 七時前には adds “at the latest”."
        ]}
      ]},
      {h:"Common mistakes", body:[
        {table:[["✗ Mistake","✓ Correct","Why"],["[来]{き}た前に","[来]{く}る前に","Dictionary form before 前."],["[終]{お}わる後で","[終]{お}わった後で","た-form before 後."],["三年の前に (three years ago)","三年前に","No の with a length of time."],["雨ので / 雨だので","雨なので","Nouns take な before ので."],["[静]{しず}かだので","[静]{しず}かなので","だ becomes な before ので."],["[止]{と}まったのでです","[止]{と}まったからです","Only から can come before です."],["[来]{き}た後で、二年になります","[来]{き}てから、二年になります","For “since”, use ～てから."]]},
        "Time clauses with 前に, 後で and とき, and reasons with ので and から, appear in almost every N4 and N3 text you will read, so it is worth making them automatic. Unit 6 builds on them with conditionals, which say what happens **if** something happens.",
        "The full reference, with notes for later levels, is in {{before-after-because}}.",
        {terms:["mae-ni","ato-de","node-reason"]}
      ]}
     ],
     try:[
      {id:"e3u5-l7-x1", type:"mcq", q:"Complete the sentence: 「[昨日]{きのう}、＿＿前に、シャワーを[浴]{あ}びました。」 ([寝]{ね}る, go to bed)", options:[
        {t:"[寝]{ね}る", ok:true, why:"Right. Before 前, the verb takes the dictionary form, even when the sentence is in the past."},
        {t:"[寝]{ね}た", why:"Even in the past, 前 takes the dictionary form: at the time of the shower, going to bed hadn’t happened yet."},
        {t:"[寝]{ね}ます", why:"ます forms don’t go before 前. Use the plain dictionary form: [寝]{ね}る前に."},
        {t:"[寝]{ね}て", why:"The て-form can’t go before 前. Use the dictionary form: [寝]{ね}る前に."}
      ]},
      {id:"e3u5-l7-x2", type:"type", q:"Type the missing verb in hiragana: 「[授業]{じゅぎょう}が＿＿＿後で、[図書館]{としょかん}へ行きます。」 ([終]{お}わる, finish)", answer:"おわった",
        hint:"後で takes the た-form.",
        wrongs:[
          {v:"おわる", why:"後 takes the た-form, even about the future: the class will already be over. [終]{お}わった後で."},
          {v:"おわって", why:"Before 後で use the た-form: [終]{お}わった後で. (The て-form goes with から: [終]{お}わってから.)"},
          {v:"おわりた", why:"[終]{お}わる is a godan verb, so る becomes った: [終]{お}わった."},
          {v:"おわりました", why:"ます forms don’t go before 後. Use the plain た-form: [終]{お}わった."}
        ],
        why:"[終]{お}わる → [終]{お}わった (godan: る → った). 後 always takes the た-form, because the first action is complete by then."},
      {id:"e3u5-l7-x3", type:"type", q:"Type the reason part in hiragana, using ので. Tomorrow is a holiday, so you’ll have a lie-in: 「[明日]{あした}は休み＿＿＿、ゆっくり[寝]{ね}ます。」", answer:"なので",
        hint:"休み is a noun. What happens to だ before ので?",
        wrongs:[
          {v:"だので", why:"だ becomes な before ので: 休みなので."},
          {v:"ので", why:"休み is a noun, so it needs な before ので: 休みなので."},
          {v:"だから", why:"That is correct Japanese with から (休みだから), but this question asks for ので: 休みなので."}
        ],
        why:"Noun + な + ので: 休みなので. The same な appears before ～んです: 休みなんです."},
      {id:"e3u5-l7-x4", type:"order", q:"Rodrigo describes his evening: 「[晩]{ばん}ご[飯]{はん}を食べる前に、シャワーを[浴]{あ}びます。[晩]{ばん}ご[飯]{はん}を食べた後で、[絵]{え}をかきます。[絵]{え}をかいた後で、本を読みます。それから[寝]{ね}ます。」 Put what he does in order.", items:[
        {t:"He takes a shower.", why:"[晩]{ばん}ご[飯]{はん}を食べる前に: before dinner, so it comes first."},
        {t:"He eats dinner.", why:"Dinner comes after the shower and before everything else."},
        {t:"He draws.", why:"[晩]{ばん}ご[飯]{はん}を食べた後で: after dinner."},
        {t:"He reads a book.", why:"[絵]{え}をかいた後で: after drawing."},
        {t:"He goes to bed.", why:"それから[寝]{ね}ます: last of all."}
      ]},
      {id:"e3u5-l7-x5", type:"mcq", q:"Rodrigo arrived in Japan in April. It is now June. Which sentence is correct? 「日本へ＿＿、二か[月]{げつ}になります。」", options:[
        {t:"[来]{き}てから", ok:true, why:"Right. With a length of time, ～てから means “since”: it’s been two months since I came."},
        {t:"[来]{き}た後で", why:"後で can’t mean “since”. For “it’s been… since”, use ～てから."},
        {t:"[来]{く}る前に", why:"This means “before coming”, which doesn’t fit “it’s been two months”."},
        {t:"[来]{き}たとき", why:"とき marks one point in time (“when I came”), not the time that has passed since."}
      ]},
      {id:"e3u5-l7-x6", type:"mcq", q:"You have a fever and want to leave work early. Which message to your manager is best?", options:[
        {t:"[熱]{ねつ}があるので、[早]{はや}く[帰]{かえ}ってもいいですか。", ok:true, why:"Right. ので gives the reason softly, and you ask permission politely."},
        {t:"[熱]{ねつ}があるから、[早]{はや}く[帰]{かえ}ります。", why:"Grammatical, but announcing what you will do with から can sound blunt to a manager. ので and a request for permission are safer."},
        {t:"[熱]{ねつ}があるのでです。[早]{はや}く[帰]{かえ}ってもいいですか。", why:"のでです is not a form. Only から can come before です."},
        {t:"[熱]{ねつ}だので、[早]{はや}く[帰]{かえ}ってもいいですか。", why:"だ becomes な before ので. Besides, the usual way to say you have a fever is [熱]{ねつ}がある: [熱]{ねつ}があるので."}
      ]},
      {id:"e3u5-l7-x7", type:"match", q:"Match each word with its form before ので.", pairs:[
        ["雨 (rain; a noun)","あめなので","A noun takes な before ので."],
        ["[静]{しず}か (quiet; a な-adjective)","しずかなので","A な-adjective takes な before ので."],
        ["[寒]{さむ}い (cold)","さむいので","An い-adjective takes ので directly."],
        ["休みだった (was a day off)","やすみだったので","Only non-past だ changes; だった stays as it is."],
        ["分からない (don’t understand)","わからないので","A plain negative takes ので directly."]
      ]},
      {id:"e3u5-l7-x8", type:"spot", q:"Cheska writes to her Japanese teacher. Tap each part that is **wrong**.", ask:"is wrong", parts:[
        "[先生]{せんせい}、すみません。",
        {t:"[頭]{あたま}が[痛]{いた}いなので", flag:true, why:"い-adjectives take ので directly: [頭]{あたま}が[痛]{いた}いので."},
        "、[今日]{きょう}の[授業]{じゅぎょう}を",
        {t:"休んでもいいですか", flag:false, why:"Correct: a polite request for permission."},
        "。[昨日]{きのう}、[病院]{びょういん}へ行きました。[病院]{びょういん}から",
        {t:"[帰]{かえ}る後で", flag:true, why:"後 takes the た-form: [帰]{かえ}った後で."},
        "、[薬]{くすり}を[飲]{の}んで[寝]{ね}ました。[宿題]{しゅくだい}は",
        {t:"[明日]{あした}の[授業]{じゅぎょう}の前に", flag:false, why:"Correct: noun + の前に."},
        "[出]{だ}します。"
      ]}
     ],
     apply:{
      intro:"Use the patterns about your own days. Keep the notes for yourself.",
      tasks:[
       {t:"Your routine with 前に and 後で", how:[
         "Write six sentences about a normal day: three with ～前に and three with ～た後で.",
         "Use at least one noun + の前に and one noun + の後で, such as [仕事]{しごと}の後で.",
         "Check every verb: dictionary form before 前, た-form before 後."
       ], write:"[朝]{あさ}ご[飯]{はん}を食べる前に… [仕事]{しごと}の後で…"},
       {t:"Reasons, politely", how:[
         "Write three short messages with ので: asking to leave early, apologising for being late, and saying no to an invitation.",
         "Check nouns and な-adjectives: な before ので.",
         "Rewrite one of them for a close friend, in casual speech with から."
       ], write:"…ので、… …から、…"},
       {t:"How long since…?", how:[
         "Write two sentences with ～てから about how long it has been since you started something: [日本語]{にほんご}の[勉強]{べんきょう}を[始]{はじ}めてから、～になります.",
         "Add one sentence that uses 後で on its own, meaning “later”."
       ], write:"…てから、…になります。"}
      ],
      proof:"Six routine sentences with 前に and 後で, three polite messages with ので (one rewritten with から), and two “since” sentences with ～てから."
     },
     read:[
      {book:"taekim", where:"Essential Grammar, “Compound Sentences”, section “Expressing reason or causation using 「から」 and 「ので」”", note:"から and ので side by side, including な before ので."},
      {book:"irodori", where:"Elementary 1, Lessons 8 “Have you ever played baseball?” (Nの前に、～ / Nのあと（で）、～) and 15 “I have a fever, and my throat is sore.” (V-る前に、～ / V-たあと、～)", note:"Before and after with nouns, then with verbs, in everyday situations, with audio. Irodori writes あと in hiragana."},
      {book:"irodori", where:"Elementary 2, Lesson 3 “I cannot eat it because of an allergy.” (S1 ので、S2)", note:"ので for explaining politely, in a conversation about food allergies."}
     ]
    }
  ],
  checkpoint:[
    "e3u5-q01",
    "e3u5-q05",
    "e3u5-q08",
    "e3u5-q11",
    "e3u5-q16",
    "e3u5-q20",
    "e3u5-q24",
    "e3u5-q26",
    "e3u5-q29",
    "e3u5-q34",
    "e3u5-q38",
    "e3u5-q44"
  ],
  cpBank:[
    {id:"e3u5-cp01", lesson:"e3u5-l1", level:1, q:"What is the plain form of [来]{き}ませんでした (didn’t come)? (Written in kana here.)", options:[
      {t:"きなかった", why:"き is the reading in [来]{き}ます and [来]{き}て. The ない-form of くる uses こ: こない."},
      {t:"こなかった", ok:true, why:"くる is irregular: こない (doesn’t come) → こなかった (didn’t come)."},
      {t:"くなかった", why:"くる doesn’t change like an い-adjective. Its ない-form is こない."},
      {t:"こないだった", why:"ない-forms change like い-adjectives: ない → なかった. They never take だった."}]},
    {id:"e3u5-cp02", lesson:"e3u5-l3", level:1, q:"Rodrigo tells Cheska 「[昨日]{きのう}、[学校]{がっこう}[休]{やす}んじゃった。」 What is the full form of 休んじゃった?", options:[
      {t:"休んでいた", why:"～ていた contracts to ～てた (here 休んでた), not to じゃった."},
      {t:"休んでおいた", why:"～ておいた contracts to ～といた (here 休んどいた)."},
      {t:"休まなかった", why:"That is the plain past negative: “didn’t take the day off”, the opposite."},
      {t:"休んでしまった", ok:true, why:"～てしまった becomes ～ちゃった, and after a で-type て-form it becomes ～じゃった: “I ended up skipping school.”"}]},
    {id:"e3u5-cp03", lesson:"e3u5-l4", level:1, q:"How do you say “a cake that isn’t sweet”?", options:[
      {t:"[甘]{あま}くないのケーキ", why:"A describing clause goes straight before the noun, with no の in between."},
      {t:"[甘]{あま}くないケーキ", ok:true, why:"Any plain form can describe a noun. い-adjective negative [甘]{あま}くない + ケーキ."},
      {t:"[甘]{あま}くないだケーキ", why:"だ never goes before a noun, and い-adjective forms never take だ."},
      {t:"[甘]{あま}いじゃないケーキ", why:"[甘]{あま}い is an い-adjective, so its negative is [甘]{あま}くない, not [甘]{あま}いじゃない."}]},
    {id:"e3u5-cp04", lesson:"e3u5-l2", level:2, q:"At the house, Mariya offers nine-year-old Sōta some juice. Which is most natural?", options:[
      {t:"「ジュースをお[飲]{の}みになりますか。」", why:"This is respectful keigo, for a customer or a senior. To a child it sounds strange."},
      {t:"「ジュース、[飲]{の}むか？」", why:"Plain form + か sounds blunt and rough, not how Mariya would talk to a child. A casual question usually just rises: [飲]{の}む？"},
      {t:"「ジュース、[飲]{の}む？」", ok:true, why:"Adults usually speak plainly to children. A casual question drops を and か and rises at the end."},
      {t:"「ジュースを[飲]{の}んでください。」", why:"～てください is a request (“please drink the juice”), not an offer."}]},
    {id:"e3u5-cp05", lesson:"e3u5-l3", level:2, q:"Rodrigo is about to leave for a shop. Kaito knows it is closed today, but Rodrigo doesn’t. Which ending fits? 「[今日]{きょう}、あの[店]{みせ}[休]{やす}みだ＿＿。」", options:[
      {t:"ね", why:"ね checks or shares something both people already know. Rodrigo doesn’t know this yet."},
      {t:"よね", why:"よね checks something you think the listener also knows. Here Kaito is telling him news."},
      {t:"か", why:"か would make it a question, and plain だ + か sounds rough."},
      {t:"よ", ok:true, why:"よ marks information the listener doesn’t have yet: “It’s closed today, you know.”"}]},
    {id:"e3u5-cp06", lesson:"e3u5-l4", level:2, q:"What does this phrase name? 「かいとくんがいつも[行]{い}くスーパーの[近]{ちか}くにあるパン[屋]{や}」", options:[
      {t:"A supermarket near the bakery that Kaito always goes to", why:"The noun at the very end is the one being named: パン[屋]{や}. スーパー is inside the description."},
      {t:"A bakery near the supermarket that Kaito always goes to", ok:true, why:"かいとくんがいつも行く describes スーパー; スーパーの[近]{ちか}くにある describes パン[屋]{や}, the final noun."},
      {t:"The bakery that Kaito always goes to, near a supermarket", why:"いつも行く describes スーパー, the noun right after it. It doesn’t say Kaito goes to the bakery."},
      {t:"Kaito, who always goes to the bakery near the supermarket", why:"The phrase ends with パン[屋]{や}, so it names a bakery, not Kaito."}]},
    {id:"e3u5-cp07", lesson:"e3u5-l5", level:2, q:"Rodrigo sees Yến at the door with a big suitcase. Which question asks about what he sees?", options:[
      {t:"「[旅行]{りょこう}に[行]{い}くんですか。」", ok:true, why:"～んですか asks for an explanation of something you can see: “Are you going on a trip, then?”"},
      {t:"「[旅行]{りょこう}に[行]{い}くんです。」", why:"Without か this is a statement: Rodrigo would be explaining his own plans."},
      {t:"「[旅行]{りょこう}に[行]{い}くと[思]{おも}います。」", why:"～と[思]{おも}います gives his own opinion. It doesn’t ask Yến anything."},
      {t:"「[旅行]{りょこう}に[行]{い}ったことがありますか。」", why:"This asks about past experience (“Have you ever travelled?”), not about the suitcase now."}]},
    {id:"e3u5-cp08", lesson:"e3u5-l7", level:2, q:"Megumi tells Sōta to do his homework before he plays. Which fills the gap? 「＿＿、[宿題]{しゅくだい}をしてね。」", options:[
      {t:"[遊]{あそ}んだ[前]{まえ}に", why:"前に always follows the dictionary form, even when the events are in the past."},
      {t:"[遊]{あそ}ぶの[前]{まえ}に", why:"A verb goes straight before 前に. の is only for nouns: [食]{しょく}[事]{じ}の前に."},
      {t:"[遊]{あそ}ぶ[前]{まえ}に", ok:true, why:"Dictionary form + 前に: “before you play”."},
      {t:"[遊]{あそ}びます[前]{まえ}に", why:"Inside the sentence, use the plain form. The polite ending goes at the end, if anywhere."}]},
    {id:"e3u5-cp09", lesson:"e3u5-l4", level:3, q:"Cheska bought her dictionary at this bookshop. How does she say “This is the bookshop where I bought my dictionary”? 「ここは＿＿です。」", options:[
      {t:"[辞書]{じしょ}を[買]{か}ったで[本屋]{ほんや}", why:"で belonged to [本屋]{ほんや} in [本屋]{ほんや}で[辞書]{じしょ}を[買]{か}った. When that noun moves to the end, its particle goes with it."},
      {t:"[辞書]{じしょ}を[買]{か}った[本屋]{ほんや}", ok:true, why:"The clause goes straight before the noun. を stays, but で, which belonged to [本屋]{ほんや}, disappears."},
      {t:"[辞書]{じしょ}を[買]{か}ったの[本屋]{ほんや}", why:"Nothing comes between the clause and the noun: [買]{か}った[本屋]{ほんや}, not [買]{か}ったの[本屋]{ほんや}."},
      {t:"[本屋]{ほんや}で[辞書]{じしょ}を[買]{か}った", why:"This is a whole sentence, not a noun. The noun being described goes at the end, after the clause."}]},
    {id:"e3u5-cp10", lesson:"e3u5-l5", level:3, q:"Rodrigo tells Cheska 「ふみこさんが、ごみは[火曜日]{かようび}に[出]{だ}してって。」 What is he telling her?", options:[
      {t:"He is asking Cheska to put the garbage out on Tuesday", why:"って after 出して passes on someone else’s words: Fumiko is the one asking."},
      {t:"Fumiko asked them to put the garbage out on Tuesdays", ok:true, why:"出して is Fumiko’s casual request, and って is casual と[言]{い}っていた: he is passing her words on."},
      {t:"Fumiko put the garbage out on Tuesday", why:"出して is a request (“please put it out”), not a report that she did it."},
      {t:"He thinks Tuesday may be the garbage day", why:"An opinion would be ～と[思]{おも}う. って reports what Fumiko said."}]},
    {id:"e3u5-cp11", lesson:"e3u5-l7", level:3, q:"Before she moved to Japan, Yến studied Japanese for two years in Vietnam. Which sentence says this?", options:[
      {t:"「[日本]{にほん}に[来]{き}たとき、[二年間]{にねんかん}[日本語]{にほんご}を[勉強]{べんきょう}しました。」", why:"た-form + とき means the coming had already happened: she would have studied after arriving in Japan."},
      {t:"「[日本]{にほん}に[来]{く}る[前]{まえ}に、[二年間]{にねんかん}[日本語]{にほんご}を[勉強]{べんきょう}しました。」", ok:true, why:"Dictionary form + 前に puts the two years of study before her move to Japan."},
      {t:"「[日本]{にほん}に[来]{き}た[後]{あと}で、[二年間]{にねんかん}[日本語]{にほんご}を[勉強]{べんきょう}しました。」", why:"～た後で puts the studying after she came to Japan: the wrong order."},
      {t:"「[日本]{にほん}に[来]{き}てから、[二年間]{にねんかん}[日本語]{にほんご}を[勉強]{べんきょう}しました。」", why:"～てから also means “after (since) coming to Japan”. She studied in Vietnam, before the move."}]},
    {id:"e3u5-cp12", lesson:"e3u5-l6", level:3, q:"Toby asks Kaito 「[北海道]{ほっかいどう}、[行]{い}ったことある？」 Kaito has never been there. Which reply is natural?", options:[
      {t:"「ううん、[一度]{いちど}もない。」", ok:true, why:"ううん is a casual no, and ～たことがない (here just ない) with [一度]{いちど}も says “not even once”."},
      {t:"「ううん、行かない。」", why:"行かない says he isn’t going (now or later). It doesn’t answer the question about experience."},
      {t:"「うん、ない。」", why:"うん means yes. To say no casually, use ううん."},
      {t:"「ううん、行ったことがあった。」", why:"This still says he has been there, and it clashes with ううん."}]}
  ],
  codex:[
    {
      id:"plain-form-grammar",
      title:"Plain forms of verbs, adjectives and nouns",
      aka:["plain form","普通形","futsuukei","dictionary form","da form","casual form"],
      tags:["japanese","grammar","n4","verbs","adjectives"],
      summary:"The four plain forms (non-past, negative, past, past negative) of every verb, い-adjective, な-adjective and noun, and how they map onto the polite forms.",
      levels:{
        starter:[
          "Every Japanese verb, adjective and noun + です has two sets of endings that mean the same thing: **polite** (with です or ます) and **plain** (without). The plain ones are used with friends and family, in diaries, notes and articles, and inside longer sentences.",
          "Each set has four boxes: non-past, negative, past and past negative. Three families fill them in three ways:",
          {
            table:[
              ["Family","Polite","Plain"],
              ["verb","[食]{た}べます / ません / ました / ませんでした","食べる / 食べない / 食べた / 食べなかった"],
              ["い-adjective","[高]{たか}いです / 高くないです …","高い / 高くない / 高かった / 高くなかった"],
              ["な-adjective, noun","[暇]{ひま}です / [暇]{ひま}じゃありません …","[暇]{ひま}だ / [暇]{ひま}じゃない / [暇]{ひま}だった / [暇]{ひま}じゃなかった"]
            ]
          },
          "In short: verbs swap ます for plain endings, い-adjectives just drop です, and nouns and な-adjectives change です to だ. The one rule people break most often: never put だ after an い-adjective (✗ 高いだ).",
          {key:"The plain form is what is left when the politeness comes off."},
          "Plain forms are not rude or wrong; they are simply the unmarked version of each word. You met the verb forms in Unit 3, and Unit 5 uses all of them."
        ],
        builder:[
          {h:"Verbs"},
          "Dictionary form, ない-form, た-form and past negative: [書]{か}く・書かない・書いた・書かなかった; [買]{か}う・[買]{か}わない・[買]{か}った・[買]{か}わなかった; [食]{た}べる・食べない・食べた・食べなかった; する・しない・した・しなかった; [来]{く}る・[来]{こ}ない・[来]{き}た・[来]{こ}なかった. Irregular points: ある → ない (not あらない), [行]{い}く → 行った, and the three readings of [来]{く}る. The ない-form ends in い and changes like an い-adjective.",
          {h:"Adjectives and nouns"},
          "い-adjectives: [高]{たか}い・高くない・高かった・高くなかった; いい uses よ: よくない・よかった・よくなかった. ～たい and ～ない follow the same pattern.",
          "な-adjectives and nouns: [静]{しず}かだ・[静]{しず}かじゃない・[静]{しず}かだった・[静]{しず}かじゃなかった. ではない is the more formal version of じゃない. Look-alikes such as きれい and きらい are な-adjectives: きれいじゃない.",
          {h:"Patterns in plain form"},
          "～ています → ～ている; ～たいです → ～たい; ～てください → ～て (casual request); ～ないでください → ～ないで; ～ませんか → ～ない？ (casual invitation, rising voice); わかりました → わかった. The plain form of ～ましょう is the volitional (行こう).",
          {h:"Using だ"},
          "In writing, だ is neutral. In conversation, a bare だ at the end of a sentence can sound firm or blunt, so speakers often drop it or add よ or ね: [雨]{あめ}だよ, [暇]{ひま}だね. In casual questions it disappears: [暇]{ひま}？",
          {h:"Converting a sentence"},
          "Only the final predicate changes. [昨日]{きのう}は[友]{とも}だちと[映画]{えいが}を[見]{み}ました becomes [昨日]{きのう}は友だちと[映画]{えいが}を見た; particles, word order and vocabulary stay the same. To convert any sentence, ask two questions about its last word: which family is it (verb, い-adjective, or noun/な-adjective), and which box is it in (non-past or past, positive or negative)? The answer gives you the plain form directly.",
          "In a text, convert every sentence ending, so that the whole piece is in one style. Plain forms inside a sentence, before から or a noun, need no change at all."
        ],
        pro:[
          "**Names.** Japanese teaching materials call the plain form of a word [普通形]{ふつうけい} and the polite form [丁寧形]{ていねいけい}. The style of a whole text or conversation is [普通体]{ふつうたい} or [丁寧体]{ていねいたい} (also called [常体]{じょうたい} and [敬体]{けいたい}). This track uses “plain form” for the word and “plain style” for the text.",
          "**Two polite negatives.** [高]{たか}くないです and 高くありません are both polite. The ありません forms are traditionally more formal; ～ないです is very common in speech (studies of conversation find it more often than ～ません, especially after adjectives) and widely accepted. The same pair exists for verbs ([食]{た}べないです / 食べません) and nouns ([学生]{がくせい}じゃないです / 学生じゃありません). In formal writing and careful speech, ～ません and ～ありません are the safe choice. All of them share the same plain form.",
          "**だ, である and nothing.** Written plain style uses だ or, in reports and academic writing, である (学生である). Casual speech often uses neither: 学生？, きれい！, [雨]{あめ}。 In noun-modifying clauses だ changes to な or の, and before ～んです to な, while before と[思]{おも}う it stays. (In formal writing you may also see a noun or な-adjective before と[考]{かんが}える or と[思]{おも}われる without だ, as in [必要]{ひつよう}と[考]{かんが}える; in everyday Japanese, keep だ: 学生だと[思]{おも}う.) Knowing where だ appears, changes or vanishes is most of the battle at N4.",
          "**じゃない？ as a tag.** With a rising voice, じゃない？ can be a real negative question (“Isn’t it rain?”) or a tag that offers a guess (“It’s rain, isn’t it?”). 雨じゃない？ often means “Looks like rain, doesn’t it?”. Intonation and context decide. To offer a guess about a verb or い-adjective, use ～んじゃない？: 高いんじゃない？ (I think it might be expensive, don’t you?), [来]{こ}ないんじゃない？ (Maybe they won’t come.)",
          "**Why plain forms matter so much.** Nearly every N4 and N3 pattern is built on plain forms: noun-modifying clauses, ～んです, ～と[思]{おも}う, ～でしょう, ～かもしれない, ～そうだ (hearsay), ～らしい and many more. Learners who make the four boxes automatic find the rest of N4 much easier."
        ]
      },
      related:[
        "nai-and-ta-forms",
        "plain-and-polite-speech",
        "casual-conversation",
        "i-and-na-adjectives",
        "verb-groups",
        "desu-masu-and-dearu"
      ],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Expressing state-of-being",
          url:"https://guidetojapanese.org/learn/grammar/stateofbeing"
        },
        {
          t:"Tae Kim’s Guide to Learning Japanese: Adjectives",
          url:"https://guidetojapanese.org/learn/grammar/adjectives"
        },
        {
          t:"Tae Kim’s Guide to Learning Japanese: Polite Form and Verb Stems",
          url:"https://guidetojapanese.org/learn/grammar/polite"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"plain-and-polite-speech",
      title:"Plain and polite speech: choosing a style",
      aka:["speech style","plain style","polite style","タメ口","tameguchi","ウチ・ソト","senpai","kouhai","普通体","丁寧体"],
      tags:["japanese","n4","register","culture"],
      summary:"Who gets plain speech and who gets です・ます: closeness (ウチ・ソト), rank ([先輩]{せんぱい}・[後輩]{こうはい}, age, position), switching styles, and which kinds of writing use which style.",
      levels:{
        starter:[
          "Every time you end a Japanese sentence, you choose a style: polite ([行]{い}きます) or plain (行く). The choice depends on who you are talking to, not on what you are saying.",
          "Plain speech is for people close to you: family, close friends, a partner, children. Polite speech is for everyone else: strangers, shop staff, customers, teachers, bosses, and people you have only just met.",
          "Two things decide: **closeness** (are they inside your circle?) and **rank** (are they older or senior to you?). A boss or teacher may speak plainly to you; you still answer politely. That is normal, not rude.",
          "With people of your own age, speech often starts polite and becomes plain as you get to know each other. Someone may invite you: タメ[口]{ぐち}でいいよ (You can talk casually with me).",
          {key:"When in doubt, be polite. Too polite sounds a little distant; too casual can sound rude."}
        ],
        builder:[
          {h:"ウチ and ソト"},
          "ウチ (inside) is the group you treat as “us”; ソト (outside) is everyone else. Plain speech belongs to ウチ, polite speech to ソト. The circles move with the situation: colleagues who chat plainly at lunch may speak politely in front of clients, because there they speak as their company to outsiders. The same idea shapes keigo, where you don’t use respectful forms for your own side when talking to outsiders ([[uchi-soto]]).",
          {h:"Rank: senpai and kōhai"},
          "In schools, clubs and companies, people who joined earlier are [先輩]{せんぱい} and those who joined later are [後輩]{こうはい}. [後輩]{こうはい} speak politely to [先輩]{せんぱい}, often for years; [先輩]{せんぱい} often answer plainly. Age works similarly. This one-way pattern is normal and expected.",
          {h:"Switching"},
          "Between equals, follow the other person: if they speak plainly for a while, you may too; if they stay polite, stay polite. Mixing styles during the change is normal. A senior speaking plainly is not an invitation to do the same.",
          {h:"Writing"},
          "Plain style: diaries, notes, novels, newspaper articles, messages to friends, and most reports and essays (often with である). Polite style: emails and letters to teachers, companies and officials, notices to the public. Social media is mixed. Within one text, keep to one style.",
          {h:"Inside the sentence"},
          "Politeness is decided by the end of the sentence. Plain forms inside a polite sentence (before から, before nouns, before と[思]{おも}います) are normal and polite."
        ],
        pro:[
          "**Style shifting.** Real conversations are rarely all one style. Research on Japanese conversation describes frequent shifts between polite and plain (in Japanese linguistics, スピーチレベル・シフト, speech-level shift). A speaker using です・ます may drop into plain forms for exclamations, self-talk, quoting their own thoughts, or moments of closeness and emphasis, and a casual speaker may switch to polite to sound serious, distant or ironic. Learners usually notice these shifts only after the basic choice is automatic.",
          "**Not only respect.** It is tempting to see polite speech as “respect” and plain speech as “disrespect”. Many linguists describe the choice more precisely as marking distance: social distance (strangers, outsiders), hierarchical distance (seniors, customers) and the public or private nature of the situation. That is why polite speech to a close friend can feel cold rather than respectful.",
          "**Children, family and region.** Most families speak plainly at home, but practice varies: some families, especially more traditional ones, use polite forms with grandparents or in-laws. Children’s books often narrate in です・ます style, addressing the young reader. Regional dialects have their own plain and polite forms (for example, Kansai speakers use や in place of だ), and this track teaches the standard forms.",
          "**Keigo beyond です・ます.** です and ます form the basic layer of [[keigo]] called [[teineigo]] ([丁寧語]{ていねいご}). Customer service, business and formal letters add [尊敬語]{そんけいご} and [謙譲語]{けんじょうご}, which raise the other person’s actions or lower your own. Unit 7 previews the common forms ({{polite-speech-basics}}); the Academic Japanese track covers keigo in depth ({{keigo-system}}).",
          "**Terms.** Japanese calls the styles [普通体]{ふつうたい} or [常体]{じょうたい} (plain) and [丁寧体]{ていねいたい}, です・ます[体]{たい} or [敬体]{けいたい} (polite). Casual speech among equals is タメ[口]{ぐち} ([[tameguchi]]), an informal word."
        ]
      },
      related:["plain-form-grammar","casual-conversation","keigo-system","keigo-mistakes","desu-masu-and-dearu"],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Polite Form and Verb Stems",
          url:"https://guidetojapanese.org/learn/grammar/polite"
        },
        {
          t:"The Japan Foundation, いろどり IRODORI Elementary 1: textbook PDFs (Lesson 8 notes on the plain style)",
          url:"https://www.irodori.jpf.go.jp/en/elementary01/pdf.html"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"casual-conversation",
      title:"Casual conversation: dropped particles, contractions, よ and ね",
      aka:["casual speech","casual Japanese","contractions","てる","ちゃう","なきゃ","よね","casual questions"],
      tags:["japanese","n4","speaking","register"],
      summary:"What makes Japanese sound casual: plain endings, dropped particles, contractions such as ～てる and ～ちゃう, よ, ね and よね, and questions without か.",
      levels:{
        starter:[
          "Casual Japanese is the way friends and family talk. It starts with plain forms ([行]{い}く, [食]{た}べた) and adds five features:",
          {
            list:[
              "**Dropped particles:** は, が and を often disappear: [映画]{えいが}、[見]{み}た？",
              "**Contractions:** ～ている becomes ～てる: [何]{なに}してる？",
              "**よ and ね** after plain forms: 行くよ, [暑]{あつ}いね, [雨]{あめ}だね.",
              "**Questions without か:** just raise your voice: [明日]{あした}、[来]{く}る？",
              "**うん and ううん** for yes and no."
            ]
          },
          "Use casual speech only with people you would speak plainly to. You will hear it constantly in dramas, videos and real life, so learn to recognise it even before you use it.",
          {key:"Casual speech = plain forms + fewer particles + contractions + よ/ね + rising questions."},
          "Why learn it early? Because it is what you will hear most from friends, on TV and online, and it is often hard to follow if you only know textbook です・ます. Recognising casual speech comes first; using it comes naturally once you have heard it many times."
        ],
        builder:[
          {h:"Particles"},
          "Often dropped: は (when not contrastive), が (except after question words), を, and に or へ for destinations with verbs of movement (コンビニ[行]{い}く？). Kept: で, と, から, まで, も, and に for times. Keeping a particle is never wrong.",
          {h:"Contractions"},
          {
            table:[
              ["Full","Casual","Example"],
              ["～ている","～てる","[待]{ま}ってる"],
              ["～ておく","～とく","[買]{か}っとく"],
              ["～てしまう","～ちゃう","[忘]{わす}れちゃった"],
              ["～でしまう","～じゃう","[飲]{の}んじゃった"],
              ["～なければ","～なきゃ","行かなきゃ"],
              ["～ては / ～では","～ちゃ / ～じゃ","[見]{み}ちゃだめ"]
            ]
          },
          {h:"よ, ね, よね"},
          "よ tells the listener something new; ね seeks agreement or shares a feeling; よね checks something you think you both know. Verbs and い-adjectives take them directly (行くよ, [暑]{あつ}いね); nouns and な-adjectives add だ ([雨]{あめ}だよ, [暇]{ひま}だね). The order is よね, never ねよ. Overused, よ sounds pushy.",
          {h:"Questions"},
          "Rising intonation replaces か: 行く？ Nouns and な-adjectives drop だ: [暇]{ひま}？, [学生]{がくせい}？ ～の？ (～なの？ after nouns) asks more softly, with interest in the reason. A bare か after a plain form can sound rough; fixed uses such as そうか (I see) and ～かな (I wonder) are fine.",
          {h:"Answers, invitations and requests"},
          "Casual answers: うん (yes), ううん (no), そう (that’s right), そうだね (yes, I agree), ほんと？ (really?), いいね (sounds good). Casual invitations turn ～ませんか into ～ない？ with a rising voice: [一緒]{いっしょ}に行かない？ Casual requests use the て-form alone: ちょっと[待]{ま}って. Casual goodbyes: じゃあね, またね.",
          "All of these belong with the people you speak plainly to. With anyone else, keep the polite forms, even when the conversation is relaxed."
        ],
        pro:[
          "**More contractions.** ～ていく → ～てく ([持]{も}ってく, take along); ～のだ → ～んだ; と[言]{い}う → って; ～なくては → ～なくちゃ (a common alternative to ～なきゃ). In fast casual speech, ら, る and れ before な or の often become ん: わからない → わかんない, つまらない → つまんない, くれない → くんない, [何]{なに}してるの → 何してんの. These are very casual; recognise them before you use them.",
          "**Formal contractions.** Some contractions also appear in polite speech: [待]{ま}ってます (for [待]{ま}っています) and じゃありません are both very common. They are correct conversational Japanese but less careful than the full forms, so keep the full forms in writing and formal situations.",
          "**Gendered and stylised endings.** Older descriptions of Japanese list “women’s” endings (わ, かしら, noun + ね/よ without だ) and “men’s” endings (ぞ, ぜ, だぜ). Studies of real conversation find that many speakers, especially younger ones, rarely use the most strongly marked of these, and that people of every gender choose endings to fit the situation and the relationship. Fiction, by contrast, exaggerates them to build characters; the linguist Kinsui Satoshi calls such stylised voices [役割語]{やくわりご} (yakuwarigo, “role language”). So anime and manga are unreliable models. Neutral choices such as だよ, だね and よね work for everyone.",
          "**じゃん.** In casual speech, especially among younger speakers, じゃん is a short form related to じゃない(か), used as a tag for confirmation or mild insistence: いいじゃん (That’s good, isn’t it?). It is widely understood, very casual, and best used only after you have heard your friends use it.",
          "**Dialects.** Casual speech is where regional dialects show most. Kansai speakers say や for だ and へん for ない ([行]{い}かへん), for example. The patterns in this entry are standard (Tokyo-based) Japanese, which everyone understands."
        ]
      },
      related:[
        "plain-form-grammar",
        "plain-and-polite-speech",
        "explaining-n-desu",
        "quoting-to-iu",
        "written-vs-spoken-japanese",
        "question-sentences"
      ],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Adverbs and Sentence-ending particles",
          url:"https://guidetojapanese.org/learn/grammar/adverbs"
        },
        {
          t:"Tae Kim’s Guide to Learning Japanese: The Question Marker",
          url:"https://guidetojapanese.org/learn/grammar/question"
        },
        {
          t:"Tae Kim’s Guide to Learning Japanese: Casual Patterns and Slang",
          url:"https://guidetojapanese.org/learn/grammar/slang"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"noun-modifying-clauses",
      title:"Noun-modifying clauses",
      aka:["relative clauses","昨日買った本","連体修飾","rentai shushoku","describing nouns","noun modification"],
      tags:["japanese","grammar","n4"],
      summary:"Describing a noun with a whole clause placed in front of it: plain forms, だ → な/の, が or の for the doer, and how to read long noun phrases.",
      levels:{
        starter:[
          "In English, a long description follows the noun: “the book **that I bought yesterday**”. In Japanese it comes **before** the noun, like an adjective: [昨日]{きのう}[買]{か}った[本]{ほん}.",
          "To build one, take a sentence ([昨日]{きのう}本を[買]{か}った), remove the noun you want to describe together with its particle, and put that noun at the end. The verb stays in the plain form.",
          {
            ex:"[毎朝]{まいあさ}[飲]{の}むコーヒー: the coffee I drink every morning\n[駅]{えき}で[待]{ま}っている[人]{ひと}: the person waiting at the station\n[母]{はは}が[作]{つく}ったケーキ: the cake my mother made",
            label:"Examples"
          },
          "The whole phrase then works like a noun: 母が[作]{つく}ったケーキはおいしいです (The cake my mother made is delicious).",
          {key:"Description first, noun last, plain form inside."},
          "Adjectives and nouns can be part of the description too: [静]{しず}かな[部屋]{へや} (a quiet room) uses な, and [医者]{いしゃ}の[兄]{あに} (my brother, who is a doctor) uses の. These small changes happen only in the plain non-past; other forms such as だった stay as they are."
        ],
        builder:[
          {h:"The rules"},
          {
            table:[
              ["Inside the clause","Before a noun","Example"],
              ["verb (any plain form)","no change","[来]{こ}なかった[人]{ひと}"],
              ["い-adjective","no change","[安]{やす}かった[店]{みせ}"],
              ["な-adjective, non-past","だ → な","[静]{しず}かな[部屋]{へや}"],
              ["noun, non-past","だ → の","[医者]{いしゃ}の[兄]{あに}"],
              ["other forms","no change","[学生]{がくせい}だった[時]{とき}"]
            ]
          },
          "No ます or です inside the clause, even in a polite sentence. The doer inside the clause takes が, or の in short clauses ([私]{わたし}が / [私]{わたし}の[作]{つく}ったケーキ), never は. Other particles inside stay as in the original sentence.",
          "For example, [店]{みせ}が[駅]{えき}の[前]{まえ}でパンを[売]{う}っている (a shop sells bread in front of the station) becomes [駅]{えき}の前でパンを[売]{う}っている[店]{みせ}: で and を stay, and only the shop’s own が leaves with it. The finished phrase then takes whatever particle the new sentence needs: …[店]{みせ}で[買]{か}いました, …[店]{みせ}が[好]{す}きです, …[店]{みせ}に[行]{い}きました.",
          {h:"Tense"},
          "The clause has its own tense: [明日]{あした}[来]{く}る人 (people coming tomorrow), [昨日]{きのう}[来]{き}た人 (people who came yesterday).",
          {h:"Using it"},
          "Clauses let you identify people (あの[赤]{あか}いセーターを[着]{き}ている人) and describe things you can’t name ([髪]{かみ}を[乾]{かわ}かす[機械]{きかい}, a machine that dries hair). They combine with nouns such as 人, もの, [所]{ところ}, 時 and こと.",
          {h:"Reading"},
          "Look for a plain form followed directly by a noun: that noun is the head. Read the clause as its description, then the rest of the sentence.",
          {h:"Common slips"},
          {
            list:[
              "Putting the noun first: ✗ [本]{ほん}[昨日]{きのう}[買]{か}った → [昨日]{きのう}[買]{か}った本.",
              "Polite forms inside: ✗ [昨日]{きのう}[買]{か}いました本.",
              "だ before a noun: ✗ [静]{しず}かだ[部屋]{へや} → [静]{しず}かな[部屋]{へや}; ✗ [医者]{いしゃ}な[兄]{あに} → [医者]{いしゃ}の[兄]{あに}.",
              "は for the doer inside: ✗ [私]{わたし}は[作]{つく}ったケーキはおいしい → [私]{わたし}が[作]{つく}ったケーキはおいしい."
            ]
          }
        ],
        pro:[
          "**Gap and no gap.** In most clauses the head noun has a role inside the clause: in [母]{はは}が[作]{つく}ったケーキ, the cake is what was made. Japanese also allows clauses where the noun has no such role and the clause gives its content: [魚]{さかな}を[焼]{や}くにおい (the smell of fish grilling), [電車]{でんしゃ}が[止]{と}まった[理由]{りゆう} (the reason the train stopped). English often needs “of” or “why” here; Japanese simply puts the clause in front.",
          "**～という + noun.** Nouns of speech and thought, such as [話]{はなし} (story), ニュース and [意見]{いけん} (opinion), usually take という between the clause and the noun: [明日]{あした}[雨]{あめ}が[降]{ふ}るというニュース (the news that it will rain tomorrow).",
          "**Relative tense.** Tense inside a clause is often relative to the main event rather than to now. Before [前]{まえ} (before) the verb is always non-past, and before [後]{あと} (after) it is always past: [寝]{ね}る前に (before going to bed), [食]{た}べた後で (after eating), even when talking about the past. Before [時]{とき} (when), the choice depends on whether the clause’s action is complete at the time of the main event: [日本]{にほん}へ[行]{い}く時 means on the way or before going, while 日本へ行った時 means once there or after going.",
          "**が and の.** の for the doer (linguists call this the が/の alternation, ガ/ノ[交替]{こうたい}, “ga/no conversion”) is most natural in short clauses where the doer comes right before the verb or adjective. When an object with を comes between the doer and the verb, の sounds wrong to most speakers (✗ あおいさんの本を[買]{か}った[店]{みせ}), so use が: あおいさんが本を[買]{か}った[店]{みせ}. In other long clauses, too, が is clearer.",
          "**No limit on length, but…** Clauses can nest and grow long, especially in writing. Good writers keep them manageable, and readers handle them by finding each head noun and working outwards."
        ]
      },
      related:["plain-form-grammar","i-and-na-adjectives","particles-wa-ga","explaining-n-desu"],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Relative Clauses and Sentence Order",
          url:"https://guidetojapanese.org/learn/grammar/clause"
        },
        {
          t:"The Japan Foundation, いろどり IRODORI Elementary 1, Lesson 17 (PDF; grammar note on V (plain form) + N)",
          url:"https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_L17.pdf"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"explaining-n-desu",
      title:"Explaining with ～んです (～のです)",
      aka:["n desu","no desu","explanatory no","んだ","のだ","～んですが"],
      tags:["japanese","grammar","n4","speaking"],
      summary:"～んです presents a sentence as an explanation or background; ～んですか asks for one. Forms (のです, んです, んだ, の), uses and overuse.",
      levels:{
        starter:[
          "～んです adds a frame to a sentence: “the thing is…”, “you see…”. It connects what you say to the situation, usually as an explanation.",
          {
            ex:"[遅]{おく}れてすみません。[電車]{でんしゃ}が[止]{と}まったんです。\nSorry I’m late. The train stopped (that’s why).\n\nどうしたんですか。\nWhat’s the matter? (I can see something is wrong.)",
            label:"Examples"
          },
          "To build it, put a plain form before んです. After a noun or な-adjective, add な: [休]{やす}みなんです, [好]{す}きなんです.",
          "In casual speech, statements use ～んだ and questions use ～の: どうしたの？",
          "Don’t use it when there is nothing to explain. In a self-introduction, say イエンです, not ✗ イエンなんです.",
          {key:"～んです: use it when there is something to explain."},
          "A good test: could you add “you see” or “the thing is” to the English? If so, ～んです probably fits. If the sentence is just a plain fact, such as your name or the time, use です or ます."
        ],
        builder:[
          {h:"Forms"},
          {
            table:[
              ["Style","Statement","Question"],
              ["written, formal","～のです","～のですか"],
              ["polite speech","～んです","～んですか"],
              ["casual","～んだ","～の？"]
            ]
          },
          "Plain form + ん: [行]{い}くんです, [痛]{いた}いんです, 行かなかったんです. Non-past だ becomes な: [学生]{がくせい}なんです, [暇]{ひま}なんです; other forms stay: 学生だったんです. No ます before ん.",
          {h:"Uses"},
          {
            list:[
              "**Explaining** a situation or giving a reason: [頭]{あたま}が[痛]{いた}いんです.",
              "**Asking for an explanation** of something you noticed: [旅行]{りょこう}に[行]{い}くんですか (seeing a suitcase). Why-questions usually take it: どうして～んですか.",
              "**Background before a request**, trailing off: [駅]{えき}に行きたいんですが…, この[漢字]{かんじ}の[読]{よ}み[方]{かた}がわからないんですが….",
              "**Reacting to new information:** そうなんですか (Oh, is that so?), casual そうなんだ."
            ]
          },
          "～んですが… deserves practice of its own. It states your situation and stops, and the listener fills in the request: すみません、[財布]{さいふ}をなくしたんですが… (Excuse me, I’ve lost my wallet…). At a station, a shop counter or an office, it is often the most natural way to start. If you want to finish the sentence, add a request after it: …[駅]{えき}に行きたいんですが、どう行けばいいですか uses an N4 conditional you will meet in Unit 6; until then, the trailing version works well.",
          {h:"Overuse"},
          "Without a situation to connect to, ～んです sounds odd, and on every sentence it sounds like constant excuses. Why-questions with ～んですか can feel pressing in delicate moments; [何]{なに}かあったんですか is softer.",
          {h:"Comparing questions"},
          "[旅]{りょ}[行]{こう}に[行]{い}きますか is a neutral question you could ask anyone. [旅]{りょ}[行]{こう}に[行]{い}くんですか shows you have noticed something (a suitcase, a guidebook) and want the story. Why-questions with ～んですか are usually answered with ～んです, because the answer is the explanation that was asked for: どうして[遅]{おく}れたんですか。 ―バスが[来]{こ}なかったんです。 Other ～んですか questions are often answered with a plain polite sentence: どこで[買]{か}ったんですか。 ―[駅]{えき}の[前]{まえ}の[店]{みせ}で[買]{か}いました。",
          "In casual speech the same contrast is between 行く？ (neutral) and 行くの？ (curious about the background)."
        ],
        pro:[
          "**What の does.** Grammatically, の turns the clause into a noun (“the fact that…”), and です/だ says “it is”. So [電車]{でんしゃ}が[止]{と}まったんです is roughly “It is (a case of) the train stopping”. This is why it presents information as an explanation of something already in view, and why nouns and な-adjectives take な, exactly as they do before the noun の elsewhere ([静]{しず}かなの, [学生]{がくせい}なの).",
          "**のだ in writing.** In essays and reports, ～のである and ～のだ mark a conclusion or the writer’s main point, often after つまり (in other words): つまり、[問題]{もんだい}は[時間]{じかん}なのである. Overusing it makes writing sound insistent, just as in speech.",
          "**Casual の statements.** A statement ending in の with a falling voice ([頭]{あたま}が[痛]{いた}いの) explains softly. It is used by many speakers, especially to close friends and children, and in some contexts it is associated with softer or feminine speech. ～んだ is the neutral casual statement.",
          "**Related patterns.** ～んじゃない？ offers a guess (“isn’t it that…?”): [休]{やす}みなんじゃない？ ～んだって reports what you heard: [明日]{あした}休みなんだって (I hear tomorrow is a day off). ～んですけど is a slightly more casual ～んですが. ～わけです, an N3 pattern, gives a logical explanation (“that’s why”).",
          "**Realisation.** ～んだ (or ～のか) can express a sudden understanding, often to yourself: そうか、[今日]{きょう}は[日曜日]{にちようび}なんだ。 (Oh, of course, today is Sunday.)",
          "**Learning tip.** Because ～んです depends on context, textbooks can only show typical situations. Listen for it in real conversations and notice what it connects to; that is the fastest way to develop a feel for when it fits."
        ]
      },
      related:["plain-form-grammar","casual-conversation","noun-modifying-clauses","quoting-to-iu"],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Noun-related Particles (“The 「の」 particle as explanation”)",
          url:"https://guidetojapanese.org/learn/grammar/nounparticles"
        },
        {
          t:"The Japan Foundation, いろどり IRODORI Elementary 1, Lesson 15 (PDF; grammar note on ～んです)",
          url:"https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_L15.pdf"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"quoting-to-iu",
      title:"Quoting and thinking: という, とおもう and って",
      aka:["quoting","と言う","と思う","to iu","to omou","という","って","indirect speech","reported speech","opinions"],
      tags:["japanese","grammar","n4"],
      summary:"Reporting speech with と[言]{い}う (direct and indirect), naming with という, giving opinions with ～と[思]{おも}います, and the casual quotation marker って.",
      levels:{
        starter:[
          "と is the quotation particle: it marks what someone said or thought. It goes before [言]{い}う (say) and [思]{おも}う (think).",
          {
            ex:"ロドリゴさんは「[明日]{あした}は[休]{やす}みです」と[言]{い}いました。\nRodrigo said, “Tomorrow is a day off.”\n\nロドリゴさんは、[明日]{あした}は休みだと[言]{い}いました。\nRodrigo said that tomorrow is a day off.\n\n[明日]{あした}は[雨]{あめ}が[降]{ふ}ると[思]{おも}います。\nI think it will rain tomorrow.",
            label:"Quoting and thinking"
          },
          "In your own words, the quote is in the plain form. Nouns and な-adjectives keep だ before と: 休みだと, [便利]{べんり}だと. い-adjectives and verbs go straight in.",
          "In casual speech, って replaces と: [明日]{あした}、休みだって (They say tomorrow’s a day off).",
          {key:"Plain form + と, with だ after nouns and な-adjectives."},
          "Japanese uses ～と[思]{おも}います a lot, even for things the speaker is fairly sure of, because it makes a statement sound like a personal view rather than a hard fact. Using it in your own opinions makes them sound modest and natural."
        ],
        builder:[
          {h:"Saying"},
          "Direct quotes keep the exact words in 「 」, polite or plain. Indirect quotes use plain forms. ～と[言]{い}っていました passes on a message (“was saying”). これは[日本語]{にほんご}で[何]{なん}と[言]{い}いますか asks what something is called; 「みどり」という[店]{みせ} names it (a shop called Midori).",
          "Inside an indirect quote, the speaker’s politeness disappears: whether Cheska said [行]{い}きません or 行かない, you report チェスカさんは行かないと[言]{い}いました. The politeness of your own sentence is decided by its end, [言]{い}いました or [言]{い}った, according to who you are talking to.",
          "～という + noun is very useful for things the listener may not know: 「どら[焼]{や}き」というお[菓子]{かし} (a sweet called dorayaki), さとうさんという[人]{ひと} (a person called Satō). It politely signals “this may be new to you”.",
          {h:"Thinking"},
          "～と[思]{おも}います gives your opinion and makes statements modest. To say you don’t think something, make the inner sentence negative: [雨]{あめ}は[降]{ふ}らないと[思]{おも}います. ～とは[思]{おも}いません sounds like firm disagreement: そうは[思]{おも}いません. Ask with どう[思]{おも}いますか; agree with [私]{わたし}もそう[思]{おも}います.",
          "～と[思]{おも}います always reports the speaker’s view. For someone else, use ～と[言]{い}っていました or ～と[思]{おも}っています: イエンさんは日本で[働]{はたら}きたいと[思]{おも}っています (Yến is thinking of working in Japan; this assumes she has told you).",
          {h:"Casual って"},
          "って replaces と, and the verb can drop: あおい、[来]{こ}ないって (Aoi says she isn’t coming). 何て[言]{い}った？ (What did you say?) って[思]{おも}う is casual と[思]{おも}う.",
          {h:"Common slips"},
          "✗ [学生]{がくせい}と[思]{おも}います → 学生だと. ✗ [便利]{べんり}なと → [便利]{べんり}だと. ✗ [高]{たか}いだと → 高いと. ✗ 行きますと[思]{おも}います → 行くと."
        ],
        pro:[
          "**Perspective in indirect quotes.** Indirect quotes are told from the reporter’s point of view, so words for “come” and “go”, “I” and “you”, and time words may change, as in English. If Toby phones you while you wait at the station and says 「すぐ[行]{い}きます」 (I’ll be right there), you might tell the friend waiting with you: トビーさんはすぐ[来]{く}ると[言]{い}っていました.",
          "**Questions and requests.** Reported questions use か before と or without と: [何時]{なんじ}に[来]{く}るかと[聞]{き}きました (asked what time I would come), [来]{く}るかどうかわかりません (I don’t know whether they’ll come). Reported requests and instructions often use ～ように[言]{い}う: [先生]{せんせい}は[宿題]{しゅくだい}を[出]{だ}すように[言]{い}いました (The teacher told us to hand in the homework).",
          "**って as a topic.** Casual って also replaces とは or は when you ask what something is: タメ[口]{ぐち}って何ですか。 (What is “tameguchi”?) Here it means “the thing called…”.",
          "**Hearsay.** Besides ～って and ～と[言]{い}っていました, Japanese reports what it heard with ～そうです (plain form + そうです: [雨]{あめ}が[降]{ふ}るそうです, I hear it will rain), which Unit 7 teaches next to the look-alike ～そうです of appearance ([[sou-hearsay]]).",
          "**Thinking about plans.** ～ようと[思]{おも}います (I’m thinking of doing…) combines と[思]{おも}う with the volitional form and is a key N4 pattern for plans: [来年]{らいねん}、[日本]{にほん}へ行こうと[思]{おも}います. Unit 6 teaches it ({{volitional-form}}).",
          "**Quote marks.** Japanese uses 「 」 for quotations and 『 』 for a quote inside a quote or for titles of books and films. Indirect quotes need no quotation marks at all, which is one way to tell them apart in writing."
        ]
      },
      related:["plain-form-grammar","explaining-n-desu","casual-conversation","quoting-in-japanese"],
      sources:[
        {
          t:"Tae Kim’s Guide to Learning Japanese: Acting on relative clauses (direct and interpreted quotes, って)",
          url:"https://guidetojapanese.org/learn/grammar/actionclause"
        },
        {
          t:"Tae Kim’s Guide to Learning Japanese: Defining and Describing (という and って)",
          url:"https://guidetojapanese.org/learn/grammar/define"
        }
      ],
      checked:"2026-11"
    },
    {
      id:"experience-listing-toki",
      title:"Experiences, lists and when: ～たことがある, ～たり and ～とき",
      aka:["ta koto ga aru","たことがある","have ever done","experience","tari","たり","たりする","toki","とき","時","when clause","time clause"],
      tags:["japanese","grammar","n4"],
      summary:"Three N4 patterns built on plain forms: ～たことがある for life experience, ～たり～たりする for giving examples of actions, and ～とき for “when”, where the verb form shows which event comes first.",
      levels:{
        starter:[
          "These three patterns all start from forms you know: the た-form and the plain forms that go before nouns.",
          {ex:"[沖縄]{おきなわ}に[行]{い}ったことがあります。\nI’ve been to Okinawa.\n\n[週末]{しゅうまつ}は、[本]{ほん}を[読]{よ}んだり、[映画]{えいが}を[見]{み}たりします。\nAt weekends I read books, watch films and so on.\n\n[暇]{ひま}なとき、[音楽]{おんがく}を[聞]{き}きます。\nWhen I’m free, I listen to music.", label:"Examples"},
          {list:[
            "**～たことがある**: “have (ever) done”. It is about your life so far, not about one day. Never done it: ～たことがありません.",
            "**～たり～たりする**: “do things like A and B”. Each verb takes たり, and する at the end shows the tense.",
            "**～とき**: “when”. とき is a noun, so nouns take の ([子]{こ}どものとき) and な-adjectives take な ([暇]{ひま}なとき)."
          ]},
          {key:"Before とき, the dictionary form means “not yet done”, and the た-form means “already done”."},
          "So you say [出]{で}かけるとき、「いってきます」 (before you leave) but [帰]{かえ}ったとき、「ただいま」 (after you arrive)."
        ],
        builder:[
          {h:"Forms"},
          {table:[["Pattern","Built from","Example"],["～たことがある","た-form + ことがある","[食]{た}べたことがあります"],["～たり～たりする","た-form + り, twice, + する","[掃除]{そうじ}したり[洗濯]{せんたく}したりしました"],["～とき","plain form; な-adj + な; noun + の","[行]{い}くとき, [寒]{さむ}いとき, [暇]{ひま}なとき, [学生]{がくせい}のとき"]]},
          {h:"Experience"},
          "Use ～たことがある for something that has happened at least once in your life up to now, usually something a little out of the ordinary. Don’t use it with a word that fixes one time, such as [昨日]{きのう} or [去年]{きょねん}: use the simple past there. “Have you … yet?” is a different question: もう～ましたか. And the non-past plain form (dictionary form or ない-form) + ことがある means “there are times when”: [朝]{あさ}ご[飯]{はん}を食べないことがあります (Sometimes I skip breakfast).",
          {h:"Examples, not a sequence"},
          "～たり～たり gives a sample of activities; the て-form lists actions in order. With one verb, ～たりする softens to “things like…”. Opposite pairs describe switching: 行ったり[来]{き}たり (back and forth). In careful Japanese every item takes たり.",
          {h:"Which form before とき?"},
          "With action verbs, choose by order, not by the tense of the sentence. [日本]{にほん}へ行くとき、[空港]{くうこう}で本を[買]{か}いました: the book was bought before arriving. 日本へ行ったとき、[着物]{きもの}を[買]{か}いました: the kimono was bought in Japan. States (adjectives, nouns, ある, いる, ～ている) simply describe the moment: [料理]{りょうり}をしているとき (while I was cooking). Change-of-state verbs such as [疲]{つか}れる usually take た: [疲]{つか}れたとき.",
          "The main verb at the end gives the tense of the whole sentence. It can be past, non-past, a request or an invitation: [分]{わ}からないときは、[聞]{き}いてください."
        ],
        pro:[
          "**たり in requests and rules.** ～たりしないでください softens a prohibition into “please don’t do things like…”, and you will see it on signs: [館内]{かんない}で[走]{はし}ったりしないでください (Please don’t run, or do anything like that, inside the building). The たり makes the rule sound less blunt.",
          "**Hedging with one たり.** A single ～たり can make a statement vaguer and more modest: [時々]{ときどき}[料理]{りょうり}を[作]{つく}ったりします (I sometimes cook and so on). Used too often, it makes writing sound vague, so use it sparingly in essays.",
          "**とき, ときに, ときは.** Bare とき, ときに and ときは are close in meaning. ときに points at the moment more sharply; ときは sets up a contrast or a general rule (“as for times when…”). In writing you will also see [際]{さい} as a formal equivalent, as in ご[利用]{りよう}の[際]{さい}は… (when using…). It is beyond N4, but recognising it helps with notices.",
          "**Kana or kanji.** とき is written both ways. Many writers, including official style guides, prefer hiragana とき when it works as grammar (“when, in the case that”) and keep 時 where it names a particular time or period. Either is understood.",
          "**Past experience in a past story.** ～たことがあった exists, but it is less common than you might expect: it looks back from a point in the past (“by then, I had once…”). For everyday talk about your life so far, ～たことがある is the form.",
          "**Experience with negatives.** ～なかったことがある (there was a time when I didn’t…) is possible but rare and easy to misread. To say you have never done something, use ～たことがない, often with [一度]{いちど}も.",
          "**Next steps.** Unit 6 adds conditionals (と, ば, たら, なら), which overlap with とき in places: [駅]{えき}に[着]{つ}いたとき and [駅]{えき}に[着]{つ}いたら can both mean “when (once) you arrive”, but only たら can also mean “if”."
        ]
      },
      related:["plain-form-grammar","noun-modifying-clauses","before-after-because","te-form","nai-and-ta-forms"],
      sources:[
        {t:"Tae Kim’s Guide to Learning Japanese: Special Expressions with Generic Nouns (“Using 「こと」 to say whether something has happened”)", url:"https://guidetojapanese.org/learn/grammar/genericnouns"},
        {t:"Tae Kim’s Guide to Learning Japanese: Compound Sentences (“Expressing multiple actions or states using 「～たりする」”)", url:"https://guidetojapanese.org/learn/grammar/compound"},
        {t:"The Japan Foundation, いろどり IRODORI Elementary 1: table of contents with grammar points by lesson (PDF)", url:"https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_contents_en.pdf"}
      ],
      checked:"2026-11"
    },
    {
      id:"before-after-because",
      title:"Before, after and because: ～まえに, ～あとで and ～ので",
      aka:["mae ni","前に","まえに","before","ato de","後で","あとで","after","later","node","ので","なので","because","reason","てから vs あとで","ので vs から"],
      tags:["japanese","grammar","n4"],
      summary:"～[前]{まえ}に takes the dictionary form and ～[後]{あと}で the た-form, whatever the tense; ～てから is for steps and “since”; ～ので gives reasons more softly than から, with な after nouns and な-adjectives.",
      levels:{
        starter:[
          "Three small patterns for ordering events and giving reasons.",
          {ex:"[寝]{ね}る[前]{まえ}に、[歯]{は}を[磨]{みが}きます。\nI brush my teeth before I go to bed.\n\n[晩]{ばん}ご[飯]{はん}を[食]{た}べた[後]{あと}で、テレビを[見]{み}ました。\nAfter dinner, I watched TV.\n\n[雨]{あめ}なので、[今日]{きょう}は[出]{で}かけません。\nIt’s raining, so I’m not going out today.", label:"Examples"},
          {list:[
            "**前に** (before): dictionary form, or noun + の. 食べる前に, [授業]{じゅぎょう}の前に.",
            "**後で** (after): た-form, or noun + の. 食べた後で, [仕事]{しごと}の後で. Alone, 後で means “later”.",
            "**ので** (because): like から, but softer. Nouns and な-adjectives take な: 雨なので, [暇]{ひま}なので."
          ]},
          {key:"前 + dictionary form, 後 + た-form: even in the past, even in the future."},
          "For polite requests and apologies, ので is the safer choice: [熱]{ねつ}があるので、[休]{やす}んでもいいですか."
        ],
        builder:[
          {h:"Forms"},
          {table:[["Pattern","Verb","Noun / time"],["～[前]{まえ}に","dictionary form: [来]{く}る前に","noun + の前に; [三年前]{さんねんまえ} (ago)"],["～[後]{あと}で","た-form: [来]{き}た後で","noun + の後で; [一時間後]{いちじかんご} (later)"],["～ので","plain form: [行]{い}くので, [高]{たか}いので","な + ので: [雨]{あめ}なので, [静]{しず}かなので"]]},
          "Note the readings of 後: あと in 後で and の後で, ご after a length of time ([三日後]{みっかご}) and in [午後]{ごご}.",
          {h:"～た後で or ～てから?"},
          "They often overlap: [映画]{えいが}を[見]{み}た後で / 見てから、[食事]{しょくじ}をしました. ～てから stresses the order of steps (“not until X”), so it suits instructions: [手]{て}を[洗]{あら}ってから、[食]{た}べてください. Only ～てから can mean “since”: [日本]{にほん}へ[来]{き}てから、[二年]{にねん}になります. Only 後で stands alone as “later”.",
          {h:"ので or から?"},
          "Both give reasons. ので sounds softer and more objective, so it is preferred in polite requests, asking permission and apologies. から sounds more direct and personal, and it is more common in casual speech and with strong feelings. Two firm differences: after nouns and な-adjectives, から takes だ (雨だから) while ので takes な (雨なので); and only から can come before です to answer “why?”: [電車]{でんしゃ}が[止]{と}まったからです (✗ ～のでです)."
        ],
        pro:[
          "**Why the forms are fixed.** Japanese time clauses take their tense from the main event, not from the moment of speaking. Before [前]{まえ}, the clause event hasn’t happened yet relative to the main event, so it is always non-past; before [後]{あと} it has, so it is always past. The same logic decides the form before とき.",
          "**Not yet: ～ないうちに.** The ない-form can’t go before 前に, but N3 has ～ないうちに (“before… happens, while it still hasn’t”): [暗]{くら}くならないうちに[帰]{かえ}りましょう (Let’s go home before it gets dark). Unit 10 covers it ({{time-clauses-uchi-ni}}).",
          "**後で, 後, 後に.** ～た後で is the everyday form. ～た後 (with no particle) is common in writing and speech, and ～た後に sounds a little more formal. In formal writing 後 can also be read のち, and weather forecasts use のち, usually in kana: [晴]{は}れのち[曇]{くも}り (sunny, later cloudy).",
          "**ので in formal speech and writing.** In keigo, ので can follow ます and です: すぐ[戻]{もど}りますので、[少々]{しょうしょう}お[待]{ま}ちください. In reports and essays, writers often prefer ため (because of) or ことから (from the fact that), which you will meet at N3 and in Academic Japanese.",
          "**Sentence-initial なので.** Starting a sentence with なので (“so…”) is very common in speech, especially among younger speakers, but many teachers and writing guides treat it as too casual for formal writing, where そのため or したがって are used. Treat it as spoken Japanese.",
          "**Casual contractions.** In fast speech ので often becomes んで: [時間]{じかん}ないんで、[先]{さき}に[行]{い}きます (I don’t have time, so I’ll go ahead). It sounds casual, so avoid it with people above you, though you will hear it a lot from younger speakers, even at work.",
          "**から and strong will.** When the main clause is a command, a strong prohibition or a confident guess, から is the natural choice: [危]{あぶ}ないから、[触]{さわ}らないで！ ので in such sentences sounds oddly restrained."
        ]
      },
      related:["experience-listing-toki","te-form","plain-form-grammar","explaining-n-desu","time-clauses-uchi-ni"],
      sources:[
        {t:"Tae Kim’s Guide to Learning Japanese: Compound Sentences (“Expressing reason or causation using 「から」 and 「ので」”)", url:"https://guidetojapanese.org/learn/grammar/compound"},
        {t:"The Japan Foundation, いろどり IRODORI Elementary 1: table of contents with grammar points by lesson (PDF)", url:"https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_contents_en.pdf"},
        {t:"The Japan Foundation, いろどり IRODORI Elementary 2: table of contents with grammar points by lesson (PDF)", url:"https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf"}
      ],
      checked:"2026-11"
    }
  ],
  terms:[
    {
      id:"casual-speech",
      term:"Casual speech",
      def:"Spoken Japanese in the plain style, used with family, close friends and children. Besides plain endings it often drops particles, uses contractions such as ～てる, adds よ or ね, and asks questions with a rising voice instead of か.",
      codex:"casual-conversation"
    },
    {
      id:"plain-past",
      term:"Plain past",
      def:"The plain form for “did” or “was”: the た-form of verbs ([食]{た}べた, [行]{い}った), ～かった for い-adjectives ([高]{たか}かった) and だった after nouns and な-adjectives ([雨]{あめ}だった).",
      codex:"plain-form-grammar"
    },
    {
      id:"plain-negative-past",
      term:"Plain past negative",
      def:"The plain form for “didn’t” or “wasn’t”, always ending in なかった: [食]{た}べなかった, [高]{たか}くなかった, [静]{しず}かじゃなかった, [雨]{あめ}じゃなかった.",
      codex:"plain-form-grammar"
    },
    {
      id:"noun-modifier-clause",
      term:"Noun-modifying clause ([連体]{れんたい}[修飾]{しゅうしょく}[節]{せつ})",
      def:"A small sentence in the plain form placed before a noun to describe it, like an English relative clause but in front: [昨日]{きのう}[買]{か}った[本]{ほん} (the book I bought yesterday).",
      codex:"noun-modifying-clauses"
    },
    {
      id:"n-desu",
      term:"～んです (～のです)",
      def:"Plain form + んです, with な after nouns and な-adjectives ([休]{やす}みなんです). It presents a sentence as an explanation or background (“the thing is…”); ～んですか asks for one. Casual forms: ～んだ and ～の？",
      codex:"explaining-n-desu"
    },
    {
      id:"to-iu",
      term:"と[言]{い}う (to iu)",
      def:"The quotation particle と + [言]{い}う (say). It reports speech, as a direct quote in 「 」 or in your own words in the plain form, and names things: 「みどり」という[店]{みせ} (a shop called Midori).",
      codex:"quoting-to-iu"
    },
    {
      id:"to-omou",
      term:"と[思]{おも}う (to omou)",
      def:"Plain form + と[思]{おも}う (think), for opinions and guesses: [雨]{あめ}が[降]{ふ}ると[思]{おも}います. Nouns and な-adjectives keep だ: [便利]{べんり}だと[思]{おも}います.",
      codex:"quoting-to-iu"
    },
    {
      id:"contraction-casual",
      term:"Casual contraction",
      def:"A shortened spoken form such as ～てる (～ている), ～とく (～ておく), ～ちゃう (～てしまう), ～なきゃ (～なければ) or ～ちゃ (～ては). Normal with friends; use the full forms in writing and careful speech. Japanese name: [[shukuyakukei]].",
      codex:"casual-conversation"
    },
    {
      id:"particle-dropping",
      term:"Particle dropping",
      def:"Leaving out は, が or を (and に or へ with verbs of going) in casual speech when the meaning is clear: [映画]{えいが}、[見]{み}た？ Particles that add meaning, such as で, と, から and も, stay.",
      codex:"casual-conversation"
    },
    {
      id:"sentence-ending-yo-ne",
      term:"よ, ね and よね",
      def:"Sentence-ending particles: よ tells the listener something new, ね seeks agreement or shares a feeling, and よね checks something you think you both know. In casual speech nouns and な-adjectives add だ first: [雨]{あめ}だよね.",
      codex:"casual-conversation"
    },
    {
      id:"tameguchi",
      term:"タメ[口]{ぐち} (tameguchi)",
      def:"An informal everyday word for casual speech between equals, without です and ます. 「タメ[口]{ぐち}でいいよ。」 invites someone to switch to plain speech with you.",
      codex:"plain-and-polite-speech"
    },
    {
      id:"senpai-kouhai",
      term:"[先輩]{せんぱい} and [後輩]{こうはい} (senpai, kōhai)",
      def:"Seniors and juniors in a school, club or workplace, by who joined first. A [後]{こう}[輩]{はい} normally speaks politely to a [先]{せん}[輩]{ぱい}, who often answers in plain speech.",
      codex:"plain-and-polite-speech"
    },
    {
      id:"ta-koto-ga-aru",
      term:"～たことがある (have done)",
      def:"The た-form + ことがある: “have done (at least once)”, for life experience. [行]{い}ったことがあります (I’ve been there); ～たことがありません (I’ve never…). For one event at a known time, use the simple past instead.",
      codex:"experience-listing-toki"
    },
    {
      id:"tari-tari",
      term:"～たり～たりする",
      def:"The た-form + り for each item, then する: “do things like A and B”. It gives examples from a longer list, in no order, and する carries the tense: [読]{よ}んだり[見]{み}たりしました.",
      codex:"experience-listing-toki"
    },
    {
      id:"toki-clause",
      term:"～とき (when)",
      def:"とき (time) is a noun, so the words before it take noun-describing forms: [行]{い}くとき, [寒]{さむ}いとき, [暇]{ひま}なとき, [子]{こ}どものとき. Before とき, the dictionary form means the action isn’t complete yet; the た-form means it is.",
      codex:"experience-listing-toki"
    },
    {
      id:"mae-ni",
      term:"～[前]{まえ}に (before)",
      def:"The dictionary form + [前]{まえ}に, or noun + の前に: “before…”. The verb stays in the dictionary form even in the past: [寝]{ね}る前に. After a length of time, 前 means “ago”: [三年前]{さんねんまえ}.",
      codex:"before-after-because"
    },
    {
      id:"ato-de",
      term:"～[後]{あと}で (after)",
      def:"The た-form + [後]{あと}で, or noun + の後で: “after…”. The verb is always in the た-form, even about the future: [食]{た}べた後で. On its own, 後で means “later”.",
      codex:"before-after-because"
    },
    {
      id:"node-reason",
      term:"～ので (because)",
      def:"A plain form + ので, with な after nouns and な-adjectives ([雨]{あめ}なので). Like から but softer and more objective, so it is preferred in polite requests and apologies. Only から can come before です: ～からです.",
      codex:"before-after-because"
    }
  ],
  bank:[
    {
      id:"e3u5-q01",
      lesson:"e3u5-l1",
      level:1,
      q:"What is the plain form of [行]{い}きませんでした (didn’t go)?",
      options:[
        {t:"行かなかった", ok:true, why:"ませんでした → the ない-form with なかった: 行かない → 行かなかった."},
        {t:"行かないでした", why:"ない changes like an い-adjective, so its past is なかった, never ないでした."},
        {t:"行きなかった", why:"The ない-form of a godan verb uses the a-sound: 行か, not 行き."},
        {t:"行かなかったです", why:"That is a polite form (～なかったです). The plain form has no です."}
      ]
    },
    {
      id:"e3u5-q02",
      lesson:"e3u5-l1",
      level:1,
      q:"[元気]{げんき} is a な-adjective. What is the plain form of [元]{げん}気です (is well)?",
      options:[
        {t:"[元]{げん}気だ", ok:true, why:"な-adjectives change です to だ."},
        {t:"[元]{げん}気な", why:"な is used before a noun ([元]{げん}気な[子]{こ}ども), not at the end of a sentence."},
        {t:"[元]{げん}気だった", why:"That is the plain past (“was well”)."},
        {t:"[元]{げん}気じゃない", why:"That is the plain negative (“isn’t well”)."}
      ]
    },
    {
      id:"e3u5-q03",
      lesson:"e3u5-l1",
      level:2,
      q:"What is the plain negative of いい (good)?",
      options:[
        {t:"よくない", ok:true, why:"いい is irregular: every form except いい itself uses よ."},
        {t:"いくない", why:"A classic slip. The negative of いい is よくない."},
        {t:"いいじゃない", why:"じゃない follows nouns and な-adjectives. いい is an い-adjective."},
        {t:"よいない", why:"い-adjectives change い to く before ない: よくない."}
      ]
    },
    {
      id:"e3u5-q04",
      lesson:"e3u5-l1",
      level:2,
      q:"Which of these is **not** a correct plain form?",
      options:[
        {t:"きれいくない", ok:true, why:"Right, this one is wrong. きれい is a な-adjective, so its negative is きれいじゃない."},
        {t:"[高]{たか}くない", why:"Correct: the plain negative of the い-adjective 高い."},
        {t:"[静]{しず}かじゃない", why:"Correct: the plain negative of the な-adjective [静]{しず}か."},
        {t:"[来]{こ}ない", why:"Correct: the plain negative of [来]{く}る, read こない."}
      ]
    },
    {
      id:"e3u5-q05",
      lesson:"e3u5-l1",
      level:2,
      q:"Rodrigo writes his diary in the plain style. How does he write “I didn’t go to the gym today”?",
      options:[
        {t:"[今日]{きょう}はジムに[行]{い}かなかった。", ok:true, why:"The plain past negative of 行く, which suits a plain-style diary."},
        {t:"[今日]{きょう}はジムに[行]{い}かなかったです。", why:"Grammatical, but polite. A plain-style diary leaves out です."},
        {t:"[今日]{きょう}はジムに[行]{い}きなかった。", why:"The ない-form of 行く is 行かない, so the past is 行かなかった."},
        {t:"[今日]{きょう}はジムに[行]{い}かないだった。", why:"ない changes like an い-adjective: なかった, never ないだった."}
      ]
    },
    {
      id:"e3u5-q06",
      lesson:"e3u5-l1",
      level:2,
      q:"What is the casual (plain) version of the request [待]{ま}ってください (please wait)?",
      options:[
        {t:"[待]{ま}って", ok:true, why:"A casual request is just the て-form: ちょっと[待]{ま}って (wait a moment)."},
        {t:"[待]{ま}つください", why:"ください always follows the て-form, and the result is still polite."},
        {t:"[待]{ま}ってだ", why:"だ doesn’t follow verb forms."},
        {t:"[待]{ま}った", why:"That is the plain past, “waited”, not a request."}
      ]
    },
    {
      id:"e3u5-q07",
      lesson:"e3u5-l1",
      level:3,
      q:"Yến gets a message from Mariya: 「[土曜日]{どようび}、[一緒]{いっしょ}に[映画]{えいが}[見]{み}に[行]{い}かない？」 What is the friend doing?",
      options:[
        {
          t:"Inviting Yến to go to a film together on Saturday",
          ok:true,
          why:"～ない？ with a rising voice is the casual form of ～ませんか: an invitation."
        },
        {
          t:"Asking whether Yến didn’t go to a film on Saturday",
          why:"That would need a past form, 行かなかった？ ～ない？ about the future is an invitation."
        },
        {
          t:"Saying that she won’t go to a film on Saturday",
          why:"The question mark and the rising voice make it an invitation, not a statement."
        },
        {t:"Telling Yến not to go to the film", why:"“Don’t go” would be 行かないで. ～ない？ invites."}
      ]
    },
    {
      id:"e3u5-q08",
      lesson:"e3u5-l1",
      level:1,
      q:"Which family of words becomes plain simply by dropping です?",
      options:[
        {
          t:"い-adjectives ([高]{たか}いです → 高い)",
          ok:true,
          why:"An い-adjective can end a sentence by itself; です only adds politeness."
        },
        {t:"な-adjectives ([静]{しず}かです → [静]{しず}か)", why:"な-adjectives change です to だ: [静]{しず}かだ."},
        {t:"Nouns ([学生]{がくせい}です → 学生)", why:"Nouns change です to だ: 学生だ."},
        {t:"Verbs ([食]{た}べます → 食べ)", why:"Verbs swap ます for plain endings: 食べる. 食べ alone is the ます stem."}
      ]
    },
    {
      id:"e3u5-q09",
      lesson:"e3u5-l1",
      level:3,
      q:"Cheska’s plain-style diary has these four sentences. Which one should she change to keep the style consistent?",
      options:[
        {
          t:"[昨日]{きのう}は[寒]{さむ}かったです。",
          ok:true,
          why:"It ends politely with です. In a plain-style diary: [昨日]{きのう}は[寒]{さむ}かった。"
        },
        {t:"[朝]{あさ}、[駅]{えき}まで[歩]{ある}いた。", why:"Plain past of [歩]{ある}く: fine."},
        {t:"[昼]{ひる}ごはんはカレーだった。", why:"Noun + だった: plain and correct."},
        {t:"[夜]{よる}はテレビを[見]{み}なかった。", why:"Plain past negative: fine."}
      ]
    },
    {
      id:"e3u5-q10",
      lesson:"e3u5-l2",
      level:1,
      q:"What mainly decides whether a Japanese speaker uses plain or polite speech?",
      options:[
        {
          t:"The relationship with the listener",
          ok:true,
          why:"Closeness and rank (age, position, who joined first) decide the style."
        },
        {
          t:"The topic of the conversation",
          why:"The same topic can be discussed in either style; it depends on who you are talking to."
        },
        {
          t:"How long the sentence is",
          why:"Length has nothing to do with it. Short and long sentences can be plain or polite."
        },
        {t:"Whether the sentence is a question", why:"Questions can be polite ([行]{い}きますか) or plain (行く？)."}
      ]
    },
    {
      id:"e3u5-q11",
      lesson:"e3u5-l2",
      level:2,
      q:"You are in a clothes shop and want to ask the assistant if they have this shirt in size M. Which is best?",
      options:[
        {t:"すみません、これのMサイズはありますか。", ok:true, why:"Shop staff are outside your circle, so you use polite speech."},
        {t:"これのMサイズ、ある？", why:"Correct casual Japanese, but too familiar for a shop assistant you don’t know."},
        {t:"これのMサイズはあるか。", why:"Plain with a bare か: rough, and too familiar for a shop."},
        {t:"これのMサイズはあるですか。", why:"です doesn’t follow a verb. The polite form of ある is あります."}
      ]
    },
    {
      id:"e3u5-q12",
      lesson:"e3u5-l2",
      level:3,
      q:"Your [先輩]{せんぱい} at work asks you: 「[昼]{ひる}ごはん、もう[食]{た}べた？」 What is the most natural reply?",
      options:[
        {t:"はい、もう食べました。", ok:true, why:"A 先[輩]{ぱい} may speak plainly to you, but you still answer politely."},
        {t:"うん、食べた。", why:"Correct casual Japanese, but too casual for someone senior at work."},
        {t:"はい、食べた。", why:"はい is polite, but the sentence still ends in a plain form. To a 先[輩]{ぱい}, end with ました."},
        {t:"はい、食べましただ。", why:"だ never follows ます forms."}
      ]
    },
    {
      id:"e3u5-q13",
      lesson:"e3u5-l2",
      level:1,
      q:"In the idea of ウチ and ソト, what is ウチ?",
      options:[
        {
          t:"The people in your own circle",
          ok:true,
          why:"ウチ (inside) is your family, close friends and sometimes your team, the people you treat as “us”: plain speech."
        },
        {t:"Your home, as a building", why:"うち can mean “home”, but in ウチ・ソト it means your own group of people."},
        {t:"People who are older or senior to you", why:"Age is the separate dial of rank. ウチ is about closeness."},
        {t:"Strangers and customers", why:"Those are ソト, the outside, who get polite speech."}
      ]
    },
    {
      id:"e3u5-q14",
      lesson:"e3u5-l2",
      level:3,
      q:"Kaito and Rodrigo have lived in the same house for two months and still speak politely. Then Rodrigo says: 「タメ[口]{ぐち}でいいよ。」 What is the most natural thing for Kaito to do?",
      options:[
        {
          t:"Start speaking to Rodrigo in plain forms",
          ok:true,
          why:"Rodrigo has invited him to use casual speech, so switching is natural and friendly."
        },
        {
          t:"Speak even more politely, with more keigo",
          why:"Rodrigo asked for the opposite: casual speech between friends."
        },
        {t:"Stop talking to Rodrigo", why:"The invitation is friendly. Nothing here is a problem."},
        {t:"Only use plain forms in writing", why:"The invitation is about how they talk to each other."}
      ]
    },
    {
      id:"e3u5-q15",
      lesson:"e3u5-l2",
      level:1,
      q:"Which of these would normally be written in the polite (です・ます) style?",
      options:[
        {
          t:"An email to a company about a job",
          ok:true,
          why:"Emails to companies, teachers and officials are polite."
        },
        {t:"A diary you write only for yourself", why:"A diary is written for yourself, in the plain style."},
        {t:"A news article in a daily newspaper", why:"Newspaper articles are written in the plain style."},
        {t:"The narration of a novel", why:"Novels are usually narrated in the plain style."}
      ]
    },
    {
      id:"e3u5-q16",
      lesson:"e3u5-l2",
      level:2,
      q:"Is this sentence polite? 「[熱]{ねつ}があるから、[今日]{きょう}は[休]{やす}みます。」",
      options:[
        {
          t:"Yes: it ends in ます, and the plain form inside, before から, is normal",
          ok:true,
          why:"Politeness is decided at the end of the sentence. Plain forms inside are fine."
        },
        {
          t:"No: ある is a plain form, so the sentence is casual",
          why:"The plain form is inside the sentence, before から. Only the ending decides the style."
        },
        {t:"No: から is only used in casual speech", why:"から (because) is used in both styles."},
        {
          t:"Yes, but only if you change ある to あります",
          why:"ありますから is possible and a little more careful, but the sentence is already polite."
        }
      ]
    },
    {
      id:"e3u5-q17",
      lesson:"e3u5-l2",
      level:1,
      q:"What is a [先輩]{せんぱい}?",
      options:[
        {
          t:"Someone who joined before you",
          ok:true,
          why:"先[輩]{ぱい} are seniors by entry: they joined your school, club or workplace before you. You usually speak politely to them."
        },
        {t:"Someone who joined after you", why:"That is a [後輩]{こうはい}, a junior."},
        {t:"Any teacher at your school or club", why:"Teachers are [先生]{せんせい}. 先[輩]{ぱい} are fellow members who are senior to you."},
        {t:"A customer", why:"Customers are outsiders (ソト), not seniors in your group."}
      ]
    },
    {
      id:"e3u5-q18",
      lesson:"e3u5-l2",
      level:2,
      q:"Why can polite speech to a close friend feel a little cold?",
      options:[
        {
          t:"Polite speech marks distance",
          ok:true,
          why:"です・ます signals distance or a public situation, so it can feel as if the friend were outside your circle."
        },
        {
          t:"Polite speech is ungrammatical between friends",
          why:"It is grammatical. The issue is the message it sends, not grammar."
        },
        {t:"Polite speech is rude", why:"Polite speech is never rude in itself."},
        {t:"Polite speech sounds childish", why:"No. If anything, it sounds formal and distant."}
      ]
    },
    {
      id:"e3u5-q19",
      lesson:"e3u5-l3",
      level:1,
      q:"Which is the casual contraction of [見]{み}ている (is watching)?",
      options:[
        {t:"見てる", ok:true, why:"～ている → ～てる: the い drops out."},
        {t:"見とく", why:"～とく is the contraction of ～ておく (do in advance)."},
        {t:"見ちゃう", why:"～ちゃう is the contraction of ～てしまう."},
        {t:"見てた", why:"That is the contraction of 見ていた, the past (“was watching”)."}
      ]
    },
    {
      id:"e3u5-q20",
      lesson:"e3u5-l3",
      level:2,
      q:"A close friend shows you a photo of someone on her phone. How would you most naturally ask her, in casual speech, “Is this person a student?”: この[人]{ひと}、[学生]{がくせい}＿＿",
      options:[
        {
          t:"？ (nothing, with a rising voice)",
          ok:true,
          why:"Casual questions with a noun drop だ and use rising intonation: この人、学生？"
        },
        {t:"だ？", why:"だ makes a firm statement, so it doesn’t fit a casual question."},
        {t:"か？", why:"A bare か after a plain form can sound rough in casual speech."},
        {t:"ですか？", why:"Correct, but polite. The question asks for the casual version."}
      ]
    },
    {
      id:"e3u5-q21",
      lesson:"e3u5-l3",
      level:2,
      q:"How do you say “It’s delicious, isn’t it?” casually?",
      options:[
        {t:"おいしいね。", ok:true, why:"い-adjectives take ね directly."},
        {t:"おいしいだね。", why:"い-adjectives never take だ."},
        {t:"おいしいなね。", why:"な is for な-adjectives before nouns. おいしい takes ね directly."},
        {t:"おいしいねよ。", why:"The two particles combine only as よね, and here ね alone is what you need."}
      ]
    },
    {
      id:"e3u5-q22",
      lesson:"e3u5-l3",
      level:1,
      q:"Which particle normally stays, even in casual speech?",
      options:[
        {
          t:"で, as in [駅]{えき}で[待]{ま}ってる",
          ok:true,
          why:"で gives the place of the action. The listener couldn’t guess it, so it stays."
        },
        {t:"を, as in [映画]{えいが}を[見]{み}た？", why:"を is one of the particles most often dropped: [映画]{えいが}、見た？"},
        {t:"は, as in これはおいしい", why:"Topic は (without contrast) is often dropped: これ、おいしい。"},
        {t:"が, as in [時間]{じかん}がある？", why:"This が is often dropped: 時間、ある？"}
      ]
    },
    {
      id:"e3u5-q23",
      lesson:"e3u5-l3",
      level:2,
      q:"A friend looks at the clock and says: 「もう[帰]{かえ}らなきゃ。」 What does she mean?",
      options:[
        {t:"“I have to go home now.”", ok:true, why:"～なきゃ is the casual short form of ～なければ (ならない): must."},
        {t:"“I won’t go home yet.”", why:"～なきゃ isn’t a simple negative. It expresses obligation."},
        {t:"“I went home already.”", why:"There is no past form here. もう here means “now, already (time to)”."},
        {t:"“Let’s go home.”", why:"“Let’s go home” would be the volitional, [帰]{かえ}ろう."}
      ]
    },
    {
      id:"e3u5-q24",
      lesson:"e3u5-l3",
      level:3,
      q:"You ask a friend about the homework, and she says: 「[宿題]{しゅくだい}？もうやっちゃった。」 What does she mean?",
      options:[
        {
          t:"She has already finished the homework.",
          ok:true,
          why:"やっちゃった = やってしまった: the action is complete. やる is a casual word for する."
        },
        {t:"She hasn’t started the homework.", why:"～ちゃった is a completed action, so she has done it."},
        {t:"She will do it later.", why:"～ちゃった is past and complete. A plan would be non-past."},
        {t:"She is asking you to do it.", why:"A request would be やって. ～ちゃった describes something done."}
      ]
    },
    {
      id:"e3u5-q25",
      lesson:"e3u5-l3",
      level:2,
      q:"Cheska says: 「[明日]{あした}のパーティー、[八時]{はちじ}からだよね？」 What is she doing?",
      options:[
        {
          t:"Checking something they both know",
          ok:true,
          why:"よね seeks confirmation: “The party is from eight, right?”"
        },
        {t:"Telling her friend some news about the party", why:"That would be だよ alone. The ね turns it into a check."},
        {t:"Inviting her friend to the party", why:"An invitation would be [行]{い}かない？ This is a check about the time."},
        {t:"Refusing to go to the party", why:"Nothing in the sentence refuses. It confirms the start time."}
      ]
    },
    {
      id:"e3u5-q26",
      lesson:"e3u5-l3",
      level:3,
      q:"At a bus stop, Rodrigo asks a stranger: 「このバス、[駅]{えき}に[行]{い}く？」 What is the problem?",
      options:[
        {
          t:"It is too casual for a stranger",
          ok:true,
          why:"The grammar is fine for casual speech, but strangers get polite speech: このバスは[駅]{えき}に行きますか。"
        },
        {
          t:"It needs か at the end, like all questions",
          why:"Casual questions don’t need か; rising intonation is enough. The problem is the style."
        },
        {t:"It needs だ after 行く", why:"Verbs never take だ."},
        {t:"に can’t be used with 行く", why:"に marks the destination with 行く: [駅]{えき}に行く is correct."}
      ]
    },
    {
      id:"e3u5-q27",
      lesson:"e3u5-l3",
      level:1,
      q:"In casual speech, what does ううん mean?",
      options:[
        {t:"No", ok:true, why:"ううん is a casual “no”. The short うん is “yes”."},
        {t:"Yes", why:"Yes is the short うん. ううん, with the extra beat, is “no”."},
        {t:"I wonder", why:"“I wonder” is ～かな."},
        {t:"Please", why:"ううん is an answer, not a request."}
      ]
    },
    {
      id:"e3u5-q28",
      lesson:"e3u5-l4",
      level:1,
      q:"How do you say “the person who came yesterday”?",
      options:[
        {t:"[昨日]{きのう}[来]{き}た[人]{ひと}", ok:true, why:"Plain past [来]{き}た, with the description before the noun."},
        {t:"[人]{ひと}[昨日]{きのう}[来]{き}た", why:"In Japanese the description comes before the noun."},
        {t:"[昨日]{きのう}[来]{き}ました[人]{ひと}", why:"Use the plain form inside a describing clause."},
        {t:"[昨日]{きのう}[来]{く}る[人]{ひと}", why:"[来]{く}る is non-past (“the person who comes”). Yesterday needs the past [来]{き}た."}
      ]
    },
    {
      id:"e3u5-q29",
      lesson:"e3u5-l4",
      level:1,
      q:"How do you say “a quiet room”?",
      options:[
        {t:"[静]{しず}かな[部屋]{へや}", ok:true, why:"Before a noun, a な-adjective takes な."},
        {t:"[静]{しず}かだ[部屋]{へや}", why:"だ ends a sentence; before a noun it becomes な."},
        {t:"[静]{しず}かの[部屋]{へや}", why:"の joins nouns. [静]{しず}か is a な-adjective, so it takes な."},
        {t:"[静]{しず}かい[部屋]{へや}", why:"[静]{しず}か is not an い-adjective, so there is no い form."}
      ]
    },
    {
      id:"e3u5-q30",
      lesson:"e3u5-l4",
      level:2,
      q:"How do you say “my older brother, who is a doctor”?",
      options:[
        {t:"[医者]{いしゃ}の[兄]{あに}", ok:true, why:"Before a noun, a noun’s plain だ becomes の."},
        {t:"[医者]{いしゃ}な[兄]{あに}", why:"な is for な-adjectives. [医者]{いしゃ} is a noun, so it takes の."},
        {t:"[医者]{いしゃ}だ[兄]{あに}", why:"だ can’t stand directly before a noun."},
        {
          t:"[医者]{いしゃ}が[兄]{あに}",
          why:"が would make [医者]{いしゃ} the subject of something. To describe the brother, use の."
        }
      ]
    },
    {
      id:"e3u5-q31",
      lesson:"e3u5-l4",
      level:2,
      q:"Which particle fills the gap? [私]{わたし}＿＿[作]{つく}った[料理]{りょうり}をみんなが[食]{た}べました。 (Everyone ate the food I made.)",
      options:[
        {t:"が", ok:true, why:"The doer inside a describing clause takes が (or の)."},
        {t:"は", why:"は marks the topic of a whole sentence. Inside the clause, the doer takes が."},
        {t:"を", why:"を marks the object. [私]{わたし} made the food; the food is the object."},
        {t:"で", why:"で marks a place or a means. [私]{わたし} is the person who made the food."}
      ]
    },
    {
      id:"e3u5-q32",
      lesson:"e3u5-l4",
      level:2,
      q:"What does this mean? 「[駅]{えき}の[前]{まえ}にある[店]{みせ}でパンを[買]{か}いました。」",
      options:[
        {
          t:"I bought bread at the shop in front of the station.",
          ok:true,
          why:"[駅]{えき}の前にある describes [店]{みせ}, and the whole phrase takes で (place of the action)."
        },
        {
          t:"There is a bread shop in front of the station.",
          why:"The main verb is [買]{か}いました (bought). ある is inside the clause, describing the shop."
        },
        {
          t:"I bought bread in front of the station and went to a shop.",
          why:"There is only one action, buying. ある[店]{みせ} means “the shop that is”."
        },
        {
          t:"The shop in front of the station bought bread.",
          why:"The shop is where the buying happened, marked by で, not the buyer."
        }
      ]
    },
    {
      id:"e3u5-q33",
      lesson:"e3u5-l4",
      level:2,
      q:"How do you say “a shop that used to be famous”?",
      options:[
        {t:"[昔]{むかし}[有名]{ゆうめい}だった[店]{みせ}", ok:true, why:"The plain past だった stays unchanged before a noun."},
        {t:"[昔]{むかし}[有]{ゆう}[名]{めい}でした[店]{みせ}", why:"でした is polite. Use the plain form inside a clause."},
        {t:"[昔]{むかし}[有]{ゆう}[名]{めい}の[店]{みせ}", why:"[有]{ゆう}名 is a な-adjective, and the past needs だった."},
        {t:"[昔]{むかし}[有]{ゆう}[名]{めい}だ[店]{みせ}", why:"だ can’t stand before a noun, and the meaning needs the past."}
      ]
    },
    {
      id:"e3u5-q34",
      lesson:"e3u5-l4",
      level:3,
      q:"Cheska can’t remember the word for “umbrella” (かさ) in a shop. Which description works best?",
      options:[
        {
          t:"[雨]{あめ}の[日]{ひ}に[使]{つか}うもの",
          ok:true,
          why:"“A thing you use on rainy days”: a non-past clause for a general description, then もの."
        },
        {t:"もの[雨]{あめ}の[日]{ひ}に[使]{つか}う", why:"The description must come before the noun."},
        {t:"[雨]{あめ}の[日]{ひ}に[使]{つか}いますもの", why:"Inside the clause, use the plain form [使]{つか}う."},
        {
          t:"[雨]{あめ}の[日]{ひ}に[使]{つか}ったもの",
          why:"Grammatical, but past: “a thing I used on a rainy day”, one particular occasion. A general description needs the non-past."
        }
      ]
    },
    {
      id:"e3u5-q35",
      lesson:"e3u5-l4",
      level:2,
      q:"In 「[先週]{せんしゅう}[友]{とも}だちと[行]{い}ったレストランは[安]{やす}かった。」, which noun is described by the clause?",
      options:[
        {
          t:"レストラン",
          ok:true,
          why:"行った (plain past) is followed directly by レストラン: “the restaurant I went to with a friend last week”."
        },
        {t:"友だち", why:"友だち is inside the clause, marked by と (with)."},
        {t:"先[週]{しゅう}", why:"先[週]{しゅう} is a time word inside the clause."},
        {t:"[安]{やす}かった", why:"[安]{やす}かった is the main predicate, not a noun."}
      ]
    },
    {
      id:"e3u5-q36",
      lesson:"e3u5-l4",
      level:3,
      q:"At a party, Toby asks: 「あそこで[写真]{しゃしん}を[撮]{と}っている[人]{ひと}はだれですか。」 What is he asking?",
      options:[
        {
          t:"Who is taking photos over there?",
          ok:true,
          why:"The clause あそこで[写真]{しゃしん}を[撮]{と}っている describes 人."
        },
        {
          t:"Who took the photos over there?",
          why:"[撮]{と}っている is ongoing (～ている), and the clause describes a person over there now."
        },
        {t:"Who is in that photo?", why:"[写真]{しゃしん} is the object being taken, not a photo someone is in."},
        {t:"Can I take a photo of that person?", why:"The question word だれ asks who someone is."}
      ]
    },
    {
      id:"e3u5-q37",
      lesson:"e3u5-l5",
      level:1,
      q:"Which is the correct ～んです form of [休]{やす}みだ (it’s a day off)?",
      options:[
        {t:"休みなんです", ok:true, why:"After a noun, だ becomes な before んです."},
        {t:"休みだんです", why:"だ can’t stay before ん; it becomes な."},
        {t:"休みんです", why:"Nouns need な before んです."},
        {t:"休みのんです", why:"の is not added here. Noun + なんです."}
      ]
    },
    {
      id:"e3u5-q38",
      lesson:"e3u5-l5",
      level:1,
      q:"How do you say “I think it’s convenient”? ([便利]{べんり} is a な-adjective.)",
      options:[
        {t:"[便利]{べんり}だと[思]{おも}います。", ok:true, why:"な-adjectives keep だ before と."},
        {t:"[便利]{べんり}と[思]{おも}います。", why:"だ can’t be left out before と[思]{おも}う."},
        {t:"[便利]{べんり}なと[思]{おも}います。", why:"な is used before nouns and before ～んです, not before と."},
        {t:"[便利]{べんり}ですと[思]{おも}います。", why:"Use the plain form before と[思]{おも}います. The politeness is at the end."}
      ]
    },
    {
      id:"e3u5-q39",
      lesson:"e3u5-l5",
      level:2,
      q:"Cheska said 「[明日]{あした}は[行]{い}きません」. Report it in your own words: チェスカさんは、[明日]{あした}は＿＿[言]{い}いました。",
      options:[
        {t:"行かないと", ok:true, why:"ません → the plain ない-form, then と."},
        {t:"行かないだと", why:"だ follows nouns and な-adjectives only. ない ends in い, like an い-adjective."},
        {t:"行くないと", why:"The ない-form of 行く is 行かない."},
        {t:"行かなかったと", why:"Past: “she didn’t go”. Cheska was talking about tomorrow, so the non-past stays."}
      ]
    },
    {
      id:"e3u5-q40",
      lesson:"e3u5-l5",
      level:2,
      q:"Your friend arrives with a bandage on her arm. How do you ask “What happened to your arm?” casually? 「その[腕]{うで}、＿＿」",
      options:[
        {t:"どうしたの？", ok:true, why:"The casual question form of ～んですか is plain form + の: どうしたの？"},
        {t:"どうしたなの？", why:"な is only added after nouns and な-adjectives. した is a verb."},
        {t:"どうしただの？", why:"だ doesn’t follow verbs."},
        {t:"どうしたんだの？", why:"This doubles up the explanatory の. Casual questions use the plain form + の."}
      ]
    },
    {
      id:"e3u5-q41",
      lesson:"e3u5-l5",
      level:1,
      q:"Which question asks for someone’s opinion?",
      options:[
        {t:"どう[思]{おも}いますか。", ok:true, why:"“What do you think?”: と[思]{おも}う in a question."},
        {t:"[何]{なん}と[言]{い}いましたか。", why:"“What did they say?”: about words, not opinions."},
        {t:"[日本語]{にほんご}で[何]{なん}と[言]{い}いますか。", why:"“What is it called in Japanese?”: asking for a word."},
        {t:"[私]{わたし}もそう[思]{おも}います。", why:"“I think so too”: agreeing, not asking."}
      ]
    },
    {
      id:"e3u5-q42",
      lesson:"e3u5-l5",
      level:3,
      q:"A classmate reads a message on her phone and tells you: 「[明日]{あした}のテスト、[中止]{ちゅうし}だって。」 What is she telling you?",
      options:[
        {
          t:"She has heard that tomorrow’s test is cancelled.",
          ok:true,
          why:"って is the casual quotation marker: she is passing on what she read or heard."
        },
        {
          t:"She is asking whether the test is cancelled.",
          why:"The sentence ends with 。, a statement. って reports what someone else said."
        },
        {t:"She wants to cancel the test.", why:"A wish would use ～たい. って reports information."},
        {t:"She thinks the test will happen.", why:"中[止]{し} means “cancelled”, so the message is the opposite."}
      ]
    },
    {
      id:"e3u5-q43",
      lesson:"e3u5-l5",
      level:1,
      q:"どうしたの？ is the casual form of which polite question?",
      options:[
        {t:"どうしたんですか。", ok:true, why:"Casual ～の？ corresponds to polite ～んですか."},
        {t:"どうしましょうか。", why:"That means “What shall we do?”, a different question."},
        {t:"どうですか。", why:"That means “How is it?”"},
        {t:"どうしてですか。", why:"That means “Why?”"}
      ]
    },
    {
      id:"e3u5-q44",
      lesson:"e3u5-l5",
      level:3,
      q:"On his first day at the language school, Rodrigo says: 「はじめまして。ロドリゴなんです。メキシコから[来]{き}たんです。よろしくお[願]{ねが}いします。」 What sounds odd?",
      options:[
        {
          t:"The ～んです endings: there is nothing to explain, so plain です・ます would fit better",
          ok:true,
          why:"In a self-introduction, ～んです sounds as if Rodrigo is answering a question nobody asked. ロドリゴです。メキシコから[来]{き}ました。 is natural."
        },
        {t:"よろしくお[願]{ねが}いします is too casual", why:"It is the standard polite closing of a self-introduction."},
        {t:"はじめまして is rude", why:"はじめまして is the normal greeting when you meet someone for the first time."},
        {t:"メキシコから needs が", why:"から (from) is correct. The problem is the ～んです endings."}
      ]
    },
    {
      id:"e3u5-q45",
      lesson:"e3u5-l5",
      level:2,
      q:"How do you pass on the message “Aoi was saying she’s busy”?",
      options:[
        {
          t:"あおいさんは[忙]{いそが}しいと[言]{い}っていました。",
          ok:true,
          why:"い-adjective + と, and ～と[言]{い}っていました for passing on a message."
        },
        {t:"あおいさんは[忙]{いそが}しいだと[言]{い}っていました。", why:"い-adjectives never take だ."},
        {t:"あおいさんは[忙]{いそが}しいと[思]{おも}います。", why:"This means “I think Aoi is busy”, your own guess, not her words."},
        {
          t:"あおいさんは[忙]{いそが}しいと[言]{い}っていますでした。",
          why:"ます and でした can’t be combined. The past of [言]{い}っています is [言]{い}っていました."
        }
      ]
    },
    {id:"e3u5-q46", lesson:"e3u5-l6", level:1, q:"What does 「[沖縄]{おきなわ}に[行]{い}ったことがありますか。」 ask?", options:[
      {t:"Have you ever been to Okinawa?", ok:true, why:"た-form + ことがありますか asks about life experience."},
      {t:"Did you go to Okinawa on your last trip?", why:"That asks about one event: [沖縄]{おきなわ}に行きましたか. ～たことがある is about ever, at any time."},
      {t:"Do you sometimes go to Okinawa?", why:"That would be the dictionary form: [沖縄]{おきなわ}に行くことがありますか."},
      {t:"Are you going to Okinawa?", why:"That would be [沖縄]{おきなわ}に行きますか. 行った is past, and ことがある makes it an experience."}
    ]},
    {id:"e3u5-q47", lesson:"e3u5-l6", level:1, q:"Which is the correct way to say “when I was a child”?", options:[
      {t:"[子]{こ}どものとき", ok:true, why:"とき is a noun, so a noun before it takes の."},
      {t:"[子]{こ}どもとき", why:"A noun can’t join とき directly; it needs の."},
      {t:"[子]{こ}どもなとき", why:"な is for な-adjectives. 子ども is a noun, so の."},
      {t:"[子]{こ}どもだとき", why:"だ never goes before a noun such as とき. Use の."}
    ]},
    {id:"e3u5-q48", lesson:"e3u5-l6", level:1, q:"How do you say “When I’m free, I read manga”?", options:[
      {t:"[暇]{ひま}なとき、[漫画]{まんが}を[読]{よ}みます。", ok:true, why:"[暇]{ひま} is a な-adjective, so it takes な before とき."},
      {t:"[暇]{ひま}のとき、[漫画]{まんが}を[読]{よ}みます。", why:"の is for nouns. [暇]{ひま} is a な-adjective: [暇]{ひま}なとき."},
      {t:"[暇]{ひま}とき、[漫画]{まんが}を[読]{よ}みます。", why:"A な-adjective needs な before a noun: [暇]{ひま}なとき."},
      {t:"[暇]{ひま}ですとき、[漫画]{まんが}を[読]{よ}みます。", why:"です can’t go before a noun. Use the plain form with な: [暇]{ひま}なとき."}
    ]},
    {id:"e3u5-q49", lesson:"e3u5-l6", level:2, q:"Which sentence uses ～たり correctly?", options:[
      {t:"[音楽]{おんがく}を[聞]{き}いたり、[本]{ほん}を[読]{よ}んだりします。", ok:true, why:"Both items take たり, and します at the end carries the tense and politeness."},
      {t:"[音楽]{おんがく}を[聞]{き}きたり、[本]{ほん}を[読]{よ}みたりします。", why:"たり is made from the た-form: 聞いた → 聞いたり, 読んだ → 読んだり."},
      {t:"[音楽]{おんがく}を[聞]{き}いたり、[本]{ほん}を[読]{よ}みます。", why:"In careful Japanese the second item needs たり too: 読んだりします."},
      {t:"[音楽]{おんがく}を[聞]{き}いたり、[本]{ほん}を[読]{よ}んだりです。", why:"The list ends with する (します), not です."}
    ]},
    {id:"e3u5-q50", lesson:"e3u5-l6", level:2, q:"It’s 1 p.m. You want to ask a colleague whether she has had lunch yet today. Which question fits?", options:[
      {t:"もう[昼]{ひる}ご[飯]{はん}を[食]{た}べましたか。", ok:true, why:"もう～ましたか asks whether something has happened yet."},
      {t:"[昼]{ひる}ご[飯]{はん}を[食]{た}べたことがありますか。", why:"This asks whether she has ever in her life eaten lunch, which sounds very strange."},
      {t:"[昼]{ひる}ご[飯]{はん}を[食]{た}べることがありますか。", why:"This asks whether she sometimes eats lunch, not about today."},
      {t:"[昼]{ひる}ご[飯]{はん}を[食]{た}べたりしますか。", why:"This asks whether she does things like eating lunch, which doesn’t ask about today either."}
    ]},
    {id:"e3u5-q51", lesson:"e3u5-l6", level:3, q:"Rodrigo says: 「[日本]{にほん}へ[来]{く}るとき、[飛行機]{ひこうき}の[中]{なか}で[映画]{えいが}を[見]{み}ました。」 When did he watch the film?", options:[
      {t:"On the plane, before he arrived in Japan", ok:true, why:"[来]{く}る is in the dictionary form: coming to Japan wasn’t complete yet when he watched the film."},
      {t:"After he arrived in Japan", why:"That would be 日本へ[来]{き}たとき. The dictionary form [来]{く}る means he hadn’t arrived yet."},
      {t:"He hasn’t been to Japan yet", why:"見ました is past, so the trip happened. [来]{く}る only shows that he hadn’t arrived when he watched it."},
      {t:"Every time he flies to Japan", why:"見ました is past and describes one trip. A habit would end in 見ます."}
    ]},
    {id:"e3u5-q52", lesson:"e3u5-l6", level:3, q:"Toby says: 「[駅]{えき}に＿＿とき、かいとくんから[電話]{でんわ}がありました。」 Kaito called just after Toby had arrived at the station. What fills the gap?", options:[
      {t:"[着]{つ}いた", ok:true, why:"Toby had already arrived when the call came, so the arrival is complete: the た-form, [着]{つ}いたとき."},
      {t:"[着]{つ}く", why:"[着]{つ}くとき would mean the call came while Toby was still on his way, before he got there."},
      {t:"[着]{つ}いて", why:"とき is a noun, so it needs a plain form, not the て-form."},
      {t:"[着]{つ}きました", why:"ます forms don’t go before とき. Use the plain た-form: [着]{つ}いた."}
    ]},
    {id:"e3u5-q53", lesson:"e3u5-l6", level:3, q:"Cheska wrote: 「[先週]{せんしゅう}、[温泉]{おんせん}に[行]{い}ったことがあります。」 What would her teacher suggest?", options:[
      {t:"[先週]{せんしゅう}、[温泉]{おんせん}に行きました。", ok:true, why:"[先週]{せんしゅう} pins the trip to one known time, so the simple past fits. ～たことがある is for experience without a specific time."},
      {t:"[先週]{せんしゅう}、[温泉]{おんせん}に行くことがあります。", why:"The dictionary form + ことがある means “sometimes”, which doesn’t fit last week."},
      {t:"[先週]{せんしゅう}、[温泉]{おんせん}に行ったりします。", why:"します is non-past and たり lists examples; neither fits one trip last week."},
      {t:"Nothing: the sentence is correct.", why:"With a time word like [先週]{せんしゅう}, ～たことがある sounds unnatural. Use the simple past."}
    ]},
    {id:"e3u5-q54", lesson:"e3u5-l6", level:2, q:"What does 「[雨]{あめ}が[降]{ふ}ったりやんだりしています。」 mean?", options:[
      {t:"It keeps raining on and off.", ok:true, why:"Two opposite verbs with たり describe something that keeps switching."},
      {t:"It rained, and then it stopped.", why:"That would be 雨が[降]{ふ}って、やみました: two events in order."},
      {t:"It has never rained.", why:"There is no ことがない here. たり～たり lists actions."},
      {t:"It has started to rain.", why:"That would be 雨が[降]{ふ}り[始]{はじ}めました. たり～たり describes switching back and forth."}
    ]},
    {id:"e3u5-q55", lesson:"e3u5-l7", level:1, q:"Which is the correct way to say “before eating”?", options:[
      {t:"[食]{た}べる[前]{まえ}に", ok:true, why:"前 takes the dictionary form."},
      {t:"[食]{た}べた[前]{まえ}に", why:"The た-form goes with [後]{あと} (after), not 前."},
      {t:"[食]{た}べの[前]{まえ}に", why:"の follows nouns. A verb goes straight in, in the dictionary form."},
      {t:"[食]{た}べて[前]{まえ}に", why:"The て-form can’t go before 前."}
    ]},
    {id:"e3u5-q56", lesson:"e3u5-l7", level:1, q:"What does 「[三年前]{さんねんまえ}に[日本]{にほん}へ[来]{き}ました。」 mean?", options:[
      {t:"I came to Japan three years ago.", ok:true, why:"A length of time + 前 means “ago”."},
      {t:"I will come to Japan in three years.", why:"[来]{き}ました is past, and 前 points back in time."},
      {t:"I came to Japan three years before (something else).", why:"With no other event mentioned, 三年前に means “three years ago”, counting back from now."},
      {t:"I have been coming to Japan for three years.", why:"That would need a different pattern. 三年前に marks one point: three years ago."}
    ]},
    {id:"e3u5-q57", lesson:"e3u5-l7", level:2, q:"Yến plans to go shopping tomorrow after her meeting finishes. Which sentence is correct?", options:[
      {t:"[明日]{あした}、[会議]{かいぎ}が[終]{お}わった[後]{あと}で、[買]{か}い[物]{もの}に[行]{い}きます。", ok:true, why:"後 takes the た-form, even about the future."},
      {t:"[明日]{あした}、[会議]{かいぎ}が[終]{お}わる[後]{あと}で、[買]{か}い[物]{もの}に[行]{い}きます。", why:"The dictionary form goes with [前]{まえ}, not 後. Use [終]{お}わった後で."},
      {t:"[明日]{あした}、[会議]{かいぎ}が[終]{お}わって[後]{あと}で、[買]{か}い[物]{もの}に[行]{い}きます。", why:"The て-form goes with から ([終]{お}わってから), not with 後で."},
      {t:"[明日]{あした}、[会議]{かいぎ}が[終]{お}わったの[後]{あと}で、[買]{か}い[物]{もの}に[行]{い}きます。", why:"の is only for nouns ([会議]{かいぎ}の後で). After a verb, add 後で directly."}
    ]},
    {id:"e3u5-q58", lesson:"e3u5-l7", level:2, q:"How do you say “It’s Sunday, so the bank is closed”?", options:[
      {t:"[日曜日]{にちようび}なので、[銀行]{ぎんこう}は[休]{やす}みです。", ok:true, why:"A noun takes な before ので."},
      {t:"[日曜日]{にちようび}ので、[銀行]{ぎんこう}は[休]{やす}みです。", why:"A noun needs な before ので: [日曜日]{にちようび}なので."},
      {t:"[日曜日]{にちようび}だので、[銀行]{ぎんこう}は[休]{やす}みです。", why:"だ becomes な before ので."},
      {t:"[日曜日]{にちようび}なから、[銀行]{ぎんこう}は[休]{やす}みです。", why:"から takes だ after a noun ([日曜日]{にちようび}だから); な is for ので."}
    ]},
    {id:"e3u5-q59", lesson:"e3u5-l7", level:2, q:"Which sentence is correct?", options:[
      {t:"[日本]{にほん}へ[来]{き}てから、[二年]{にねん}になります。", ok:true, why:"～てから with a length of time means “since”: it’s been two years since I came."},
      {t:"[日本]{にほん}へ[来]{き}た[後]{あと}で、[二年]{にねん}になります。", why:"後で can’t mean “since”. Use ～てから."},
      {t:"[日本]{にほん}へ[来]{く}る[前]{まえ}に、[二年]{にねん}になります。", why:"“Before coming, it becomes two years” makes no sense here."},
      {t:"[日本]{にほん}へ[来]{き}たとき、[二年]{にねん}になります。", why:"とき marks one point in time; it can’t count the time since."}
    ]},
    {id:"e3u5-q60", lesson:"e3u5-l7", level:2, q:"Your teacher asks: 「どうして[遅]{おく}れたんですか。」 Which answer is correct?", options:[
      {t:"[電車]{でんしゃ}が[止]{と}まったからです。", ok:true, why:"から can come before です to answer “why?”."},
      {t:"[電車]{でんしゃ}が[止]{と}まったのでです。", why:"ので can’t be followed by です. Use からです."},
      {t:"[電車]{でんしゃ}が[止]{と}まったなのです。", why:"な is only added after nouns and な-adjectives, and this doesn’t give a reason with から or ので."},
      {t:"[電車]{でんしゃ}が[止]{と}まるからです。", why:"The train stopped in the past, so use the past form: [止]{と}まったからです."}
    ]},
    {id:"e3u5-q61", lesson:"e3u5-l7", level:3, q:"Aoi has to miss tomorrow’s seminar because of a family matter. Which sentence in her email to her professor sounds most appropriate?", options:[
      {t:"[家族]{かぞく}の[用事]{ようじ}があるので、[明日]{あした}のゼミを[休]{やす}んでもいいですか。", ok:true, why:"ので gives the reason softly, and the request is polite."},
      {t:"[家族]{かぞく}の[用事]{ようじ}があるから、[明日]{あした}のゼミを[休]{やす}みます。", why:"Announcing your absence with から can sound blunt to a professor. ので and a request are safer."},
      {t:"[家族]{かぞく}の[用事]{ようじ}だので、[明日]{あした}のゼミを[休]{やす}んでもいいですか。", why:"だ becomes な before ので: [用事]{ようじ}なので. ([用事]{ようじ}がある is more usual anyway.)"},
      {t:"[家族]{かぞく}の[用事]{ようじ}があるのでです。[明日]{あした}は[休]{やす}みます。", why:"のでです is not a form, and the message announces rather than asks."}
    ]},
    {id:"e3u5-q62", lesson:"e3u5-l7", level:3, q:"Toby tells Sōta: 「[手]{て}を[洗]{あら}ってから、[食]{た}べてね。」 What is he stressing?", options:[
      {t:"Wash your hands first; don’t eat until you have.", ok:true, why:"～てから stresses the order of steps: X first, then Y."},
      {t:"Eat first, then wash your hands.", why:"The て-form + から puts washing first."},
      {t:"You have been eating ever since you washed your hands.", why:"てから means “since” only with a length of time, such as [二年]{にねん}になります."},
      {t:"Either order is fine.", why:"てから fixes the order: washing comes first."}
    ]},
    {id:"e3u5-q63", lesson:"e3u5-l7", level:1, q:"Kaito says: 「[後]{あと}で[電話]{でんわ}する。」 What does he mean?", options:[
      {t:"I’ll call you later.", ok:true, why:"後で on its own means “later”."},
      {t:"I called you afterwards.", why:"する is non-past, so the call is still to come."},
      {t:"I’ll call before that.", why:"“Before” would be [前]{まえ}に. 後で means later."},
      {t:"I’ll call you from behind.", why:"後 here is about time (later), not place."}
    ]}
  ]
});
