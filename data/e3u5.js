/* Japanese Foundations · Unit 5 (e3u5) · Plain form and casual speech (N4) */
ICA.addUnit({
  id:"e3u5",
  track:"e3",
  n:5,
  title:"Plain form and casual speech",
  icon:"💬",
  blurb:"The first N4 unit: every plain form of verbs, adjectives and nouns in one system; when Japanese speakers choose plain or polite speech; how casual conversation really sounds (dropped particles, ～てる and ～ちゃう, よ, ね and よね, questions without か); and plain forms at work inside longer sentences: describing nouns with clauses, explaining with ～んです, and quoting and giving opinions with と[言]{い}う and と[思]{おも}う.",
  goals:[
    "Build the four plain forms of any verb, い-adjective, な-adjective or noun, and switch any sentence between polite and plain",
    "Choose between plain and polite speech for friends, family, teachers, colleagues and strangers, and know which writing uses which style",
    "Follow and use casual speech: dropped particles, contractions such as ～てる, ～ちゃう and ～なきゃ, よ, ね and よね, and questions without か",
    "Describe nouns with whole clauses, such as [昨日]{きのう}[買]{か}った[本]{ほん}, using な and の correctly",
    "Explain and ask for explanations with ～んです, and avoid overusing it",
    "Report what people said with と[言]{い}う and って, and give opinions with ～と[思]{おも}います"
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
        options:["高い","高いだ","高かだ","高くだ"],
        answer:0,
        reveal:"**高い.** For nouns and な-adjectives, the plain partner of です is だ ([学生]{がくせい}です → [学生]{がくせい}だ), so 高いだ is a very natural guess. But an い-adjective can already end a sentence by itself; the です after it only adds politeness. Take it away and you have the plain form. This lesson puts the plain forms of verbs, adjectives and nouns into one system, so that you can switch any sentence between polite and plain."
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
                ["[来]{く}る (come)","[来]{こ}ない","[来]{き}た","来なかった"],
                ["ある (there is)","ない","あった","なかった"]
              ]
            },
            "Three reminders from Unit 3. The ない-form of a godan verb uses the a-sound (with う → わ). The た-form is built exactly like the [[te-form|て-form]], so 行く gives 行った. And the ない-form ends in い, so it changes like an い-adjective: ない → なかった. The glossary entries are [[nai-form]] and [[ta-form]].",
            "Watch [来]{く}る: the kanji keeps its shape but changes its reading, こ in [来]{こ}ない and [来]{こ}なかった, き in [来]{き}た. And ある has no あらない: its negative is simply ない.",
            {
              ex:"[毎朝]{まいあさ}、コーヒーを[飲]{の}む。\nI drink coffee every morning.\n\n[昨日]{きのう}は[何]{なに}も[買]{か}わなかった。\nI didn’t buy anything yesterday.\n\n[週末]{しゅうまつ}は[友]{とも}だちが来る。\nA friend is coming at the weekend.",
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
            "Plain forms are not only for chatting. When Japanese people write for themselves, or write stories and articles, they usually use the plain style, called [[futsuu-tai]] ([普通体]{ふつうたい}). Diaries, notes, novels, newspaper articles and most essays use it. (Texts that speak to the reader directly, such as notices, guides and many blogs, often use です・ます instead.) Here is a short diary entry by Priya:",
            {
              ex:"[十月]{じゅうがつ}[三日]{みっか}\n今日は[朝]{あさ}から雨だった。[午前]{ごぜん}は[家]{いえ}で[本]{ほん}を[読]{よ}んだ。[午後]{ごご}、友だちのミンさんと[駅]{えき}の[近]{ちか}くの[喫茶店]{きっさてん}に行った。コーヒーはおいしかった。でも、ケーキはあまり[甘]{あま}くなかった。[明日]{あした}は[日本語]{にほんご}の[宿題]{しゅくだい}をする。",
              label:"Priya’s diary (plain style)"
            },
            "In English: “3 October. It rained from the morning today. In the morning I read a book at home. In the afternoon I went to a café near the station with my friend Min. The coffee was good. But the cake wasn’t very sweet. Tomorrow I’ll do my Japanese homework.”",
            "Every sentence ends in a plain form: a noun with だった, two verbs in the た-form (読んだ, 行った), い-adjectives in the past and past negative, and a dictionary form for tomorrow’s plan. If Priya told the same story to a teacher, every ending would switch to polite: 雨でした, 読みました, 行きました, おいしかったです, [甘]{あま}くなかったです, します. Nothing else in the sentences would change.",
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
            {t:"来なかった", b:0, why:"来る → 来ない → 来なかった, read こなかった."}
          ]
        },
        {
          id:"e3u5-l1-x3",
          type:"match",
          q:"Match each polite form to its plain form.",
          pairs:[
            ["行きません","行かない","ません → the ない-form. く → か."],
            ["来ました","来た","ました → the た-form. 来た is read きた."],
            ["ありませんでした","なかった","ある → ない → なかった."],
            ["[元]{げん}気です","[元]{げん}気だ","[元]{げん}気 is a な-adjective, so です → だ."],
            ["[寒]{さむ}くないです","[寒]{さむ}くない","い-adjective: just drop です."]
          ]
        },
        {
          id:"e3u5-l1-x4",
          type:"mcq",
          q:"Kenji writes his diary in the plain style. How does he write “Yesterday was cold”?",
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
          q:"Ana writes her diary in the plain style. Tap each part that uses a **wrong form** or **breaks the plain style**.",
          ask:"is wrong or breaks the style",
          parts:[
            {t:"今日は天気がよかった。", flag:false, why:"Correct: いい → よかった, plain."},
            {
              t:"[朝]{あさ}、[公園]{こうえん}を[走]{はし}りました。",
              flag:true,
              why:"Correct Japanese, but polite. The rest of the diary is plain, so it should be [走]{はし}った."
            },
            {t:"[昼]{ひる}ごはんはおいしいだった。", flag:true, why:"A wrong form. おいしい is an い-adjective: おいしかった."},
            "\n",
            {t:"午後は[図書館]{としょかん}で[勉強]{べんきょう}した。", flag:false, why:"Correct: the plain past of [勉強]{べんきょう}する."},
            {t:"[図]{と}書[館]{かん}はあまり[静]{しず}かじゃなかった。", flag:false, why:"Correct: な-adjective, plain past negative."},
            {t:"[夜]{よる}は友だちが来なかった。", flag:false, why:"Correct: 来なかった, read こなかった."}
          ]
        },
        {
          id:"e3u5-l1-x7",
          type:"order",
          q:"Priya wrote a longer diary entry. Put its sentences in time order, from the morning to tomorrow.",
          items:[
            {t:"午前は[家]{いえ}で本を読んだ。", why:"午前 is the morning: first."},
            {t:"午後、ミンさんと[喫茶店]{きっさてん}に行った。", why:"午後 is the afternoon: after the morning."},
            {t:"コーヒーを[飲]{の}んで、[家]{いえ}に[帰]{かえ}った。", why:"At the café, then home: after going to the café."},
            {t:"[夜]{よる}は[母]{はは}に[電話]{でんわ}した。", why:"[夜]{よる} is the evening: after coming home."},
            {t:"[明日]{あした}は[宿題]{しゅくだい}をする。", why:"Last: a plan for tomorrow, so it is in the non-past dictionary form."}
          ]
        }
      ],
      apply:{
        intro:"Practise switching between the two styles with your own sentences. Keep the notes for yourself.",
        tasks:[
          {
            t:"Make a four-box table for twelve words",
            how:[
              "Choose twelve words: four verbs (one godan verb ending in う, one ichidan verb, する and 来る), three い-adjectives (include いい), three な-adjectives (include きれい) and two nouns.",
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
        q:"Kenji’s manager hands him some papers and asks, in plain form: 「この[資料]{しりょう}、[明日]{あした}までにできる？」 (Can you get this document done by tomorrow?) What is the most natural reply?",
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
            "English has a similar choice, but it is spread over many words. “Good morning, Dr Lee. Could you possibly…?” and “Hey Sam, can you…?” are different styles. In Japanese the choice is built into the end of almost every sentence, so you meet it constantly.",
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
            "Notice the row for teachers and bosses. A teacher may speak plainly to students, and a boss to the team, as Kenji’s manager did in the warm-up. The students and the team still answer politely. Plain speech going down and polite speech going up is completely normal; it isn’t rude in either direction."
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
                "**Plain endings in an email or message to a teacher or company**, such as 休む。 or [出]{だ}した。 End with ます and です.",
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
          q:"Yuki is a first-year in a university tennis club. A third-year member asks her: 「[週末]{しゅうまつ}、[練習]{れんしゅう}に[来]{く}る？」 (Are you coming to practice at the weekend?) What is the best reply?",
          options:[
            {
              t:"はい、行きます。",
              ok:true,
              why:"Right. The third-year is Yuki’s [先輩]{せんぱい}, so she answers politely. She uses 行きます because she is going to the practice, away from where she is now."
            },
            {
              t:"うん、行く。",
              why:"Correct Japanese, but plain. A first-year normally answers a [先輩]{せんぱい} politely, even when the [先輩]{せんぱい} speaks plainly."
            },
            {
              t:"はい、[来]{き}ます。",
              why:"Polite, but 来る is for movement towards the speaker. Yuki is talking about going to the practice, so she says 行きます."
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
          q:"Ana sends this message to her teacher. Tap each part that **ends too casually** for a teacher.",
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
          q:"Rina, a close friend from your class, has spoken to you in plain form for months. You still always answer in です・ます. What effect does this most likely have?",
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
              t:"It makes you sound younger than Rina.",
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
        q:"A friend opens the fridge and says: 「あ、ケーキ、もう[食]{た}べちゃった。」 What does 食べちゃった mean?",
        options:[
          "I’ve already eaten it (oops, it’s gone)",
          "I’m going to eat it now",
          "I didn’t eat it",
          "Let’s eat it together"
        ],
        answer:0,
        reveal:"**I’ve already eaten it.** 食べちゃった is a casual contraction of 食べてしまった: the action is finished, often with a feeling of “oops” or “it’s all gone”. Notice too that the particle を after ケーキ has disappeared. Casual Japanese is more than plain forms: it drops particles, squeezes words together and adds small words such as よ and ね. This lesson shows you the main features, so that you can follow friends’ conversations and start to sound natural."
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
              ex:"[明日]{あした}、来る？ ↗\nAre you coming tomorrow?\n\n[昼]{ひる}ごはん、もう食べた？ ↗\nHave you had lunch yet?\n\n[今]{いま}、[暇]{ひま}？ ↗\nAre you free now?",
              label:"Rising intonation does the work"
            },
            "Notice the last one. In a question, a noun or な-adjective drops だ: [暇]{ひま}？, [学生]{がくせい}？, [本当]{ほんとう}？ (Really?). ✗ [暇]{ひま}だ？ sounds odd, because だ makes a firm statement. Only this non-past だ drops; the past stays: [昨日]{きのう}、[暇]{ひま}だった？ (Were you free yesterday?)",
            "Question words work the same way: どこ行く？ (Where are you going?) 何食べる？ (What shall we eat? / What are you having?)",
            "You will also hear casual questions ending in の: どこ行くの？ This sounds softer and shows interest in the background or the reason. It is the casual form of ～んですか, which Lesson 5 explains. After a noun or な-adjective it becomes なの: 学生なの？",
            "か does appear in casual speech in a few fixed uses: そうか (I see; said to yourself as you realise something), and ～かな, which means “I wonder”: [明日]{あした}、雨かな。 (I wonder if it’ll rain tomorrow.) 来るかな。 (I wonder if they’ll come.)",
            {key:"Casual question: plain form + rising voice. No か, and no だ after nouns."}
          ]
        },
        {
          h:"Putting it together: making plans",
          body:[
            "Min and Sara are friends. Read their messages and notice each casual feature:",
            {
              ex:"ミン：サラ、[今夜]{こんや}、[暇]{ひま}？\nサラ：うん、[暇]{ひま}だよ。どうして？\nミン：[駅]{えき}の[前]{まえ}の[新]{あたら}しいラーメン[屋]{や}、もう行った？\nサラ：ううん、まだ。\nミン：じゃあ、[一緒]{いっしょ}に行かない？\nサラ：いいね！[何時]{なんじ}にする？\nミン：[七時]{しちじ}はどう？\nサラ：オッケー。じゃあ、[七時]{しちじ}に[駅]{えき}で[待]{ま}ってるね。",
              label:"Min and Sara make plans"
            },
            "In English: “Sara, are you free tonight?” “Yes, I am. Why?” “Have you been to the new ramen place in front of the station yet?” “No, not yet.” “Then do you want to go together?” “Sounds good! What time shall we make it?” “How about seven?” “OK. I’ll wait for you at the station at seven, then.”",
            {
              list:[
                "**Questions without か:** [暇]{ひま}？, もう行った？, 何時にする？ (and no だ after [暇]{ひま}).",
                "**Dropped particles:** ラーメン[屋]{や}、もう行った？ has no に; the pause does its job.",
                "**よ and ね:** [暇]{ひま}だよ tells Min something he didn’t know; [待]{ま}ってるね softens the plan.",
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
              t:"から in [九]{く}時から[働]{はたら}く。",
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
            ["書いておく","書いとく","～ておく → ～とく."],
            ["読んでおく","読んどく","～でおく → ～どく, because the て-form ends in で."]
          ]
        },
        {
          id:"e3u5-l3-x4",
          type:"mcq",
          q:"Sara and Min both know that their favourite shop closes early on Sundays. Sara wants to check: 「[日曜日]{にちようび}は[早]{はや}く[閉]{し}まる＿＿？」 What fills the gap?",
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
          q:"Ken is messaging a friend. Tap each part with a **grammar mistake** in casual speech.",
          ask:"has a grammar mistake",
          parts:[
            {t:"今、何してる？", flag:false, why:"Correct: ～てる for ～ている, and a question without か."},
            {t:"今日、すごく[暑]{あつ}いだね。", flag:true, why:"A mistake. い-adjectives take ね directly: [暑]{あつ}いね."},
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
          q:"Put Min and Sara’s chat in a natural order.",
          items:[
            {t:"ミン：今[夜]{や}、[暇]{ひま}？", why:"First Min asks whether Sara is free."},
            {t:"サラ：うん、[暇]{ひま}だよ。どうして？", why:"Sara answers and asks why."},
            {t:"ミン：一[緒]{しょ}に[映画]{えいが}、見に行かない？", why:"Min explains why he asked: an invitation."},
            {t:"サラ：いいね！何時？", why:"Sara accepts and asks about the time."},
            {t:"ミン：七時はどう？", why:"Min answers her question with a suggestion."}
          ]
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
              "Write five polite questions you might ask a friend, such as [昨日]{きのう}、何をしましたか。",
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
          "本[昨日]{きのう}[買]{か}った",
          "[昨日]{きのう}[買]{か}いました本",
          "本は[昨日]{きのう}[買]{か}った"
        ],
        answer:0,
        reveal:"**[昨日]{きのう}[買]{か}った本.** English puts the description after the noun (“the book that I bought”). Japanese puts it before, like an adjective: [昨日]{きのう}[買]{か}った describes 本, just as [新]{あたら}しい does in [新]{あたら}しい本. The verb inside is in the plain form, so [買]{か}いました doesn’t fit, and 本は[昨日]{きのう}[買]{か}った is a whole sentence (“I bought the book yesterday”), not a noun phrase. This lesson shows how to build these descriptions with verbs, adjectives and nouns."
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
            "The clause has its own tense, which tells you when its action happens: [明日]{あした}[来]{く}る人 (the people coming tomorrow) and [昨日]{きのう}来た人 (the people who came yesterday).",
            "～ている clauses are the usual way to describe what people are wearing or a state that continues: [眼鏡]{めがね}をかけている人 (the person wearing glasses), [結婚]{けっこん}している友だち (a friend who is married). In this kind of description the た-form can mean the same thing: [眼鏡]{めがね}をかけた人 is also “the person wearing glasses”, not someone who wore them once.",
            {
              ex:"あそこで本を[読]{よ}んでいる人は、[私]{わたし}の[姉]{あね}です。\nThe person reading a book over there is my older sister.\n\n[去年]{きょねん}行った[町]{まち}は、とてもきれいでした。\nThe town I went to last year was very beautiful.\n\nアナさんが[作]{つく}った[料理]{りょうり}を食べました。\nI ate the food Ana made.",
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
              ex:"[私]{わたし}が[作]{つく}ったケーキ\nthe cake I made\n\nミンさんが[住]{す}んでいる[町]{まち}\nthe town where Min lives\n\n[私]{わたし}が[好]{す}きな食べ[物]{もの}\nfood I like",
              label:"が inside the clause"
            },
            "This is why Unit 2 said the doer of a describing clause takes が. は marks the topic of the **whole sentence**, so it belongs outside the clause. Compare: [私]{わたし}が[作]{つく}ったケーキはおいしい (The cake I made is delicious) has が inside the clause and は on the whole phrase.",
            "In short clauses you will also often hear の in place of が: [母]{はは}の[作]{つく}ったケーキ (the cake my mother made), [私]{わたし}の[好]{す}きな食べ[物]{もの}. Both are correct. が is the safer choice in longer clauses.",
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
            "This is a real-life survival skill. When you don’t know a name or a word, describe it: [髪]{かみ}を[乾]{かわ}かす[機械]{きかい} (a machine that dries hair), [昨日]{きのう}[会議]{かいぎ}に来た人 (the person who came to the meeting yesterday). Japanese speakers do this all the time, and it lets a small vocabulary go a long way.",
            "A handful of nouns appear with clauses constantly: 人 (person), もの (thing), [所]{ところ} (place), [時]{とき} (time, when) and こと (matter, thing you do). 子どもの[時]{とき} means “when I was a child”, and [学]{がく}生だった[時]{とき} means “when I was a student”. You will meet more patterns with [時]{とき} and こと later in N4."
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
          q:"Turn this sentence into a noun phrase about the cake: 母がケーキを[作]{つく}った。",
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
            {t:"[肉]{にく}を食べない人", b:0, why:"A plain negative verb clause: “people who don’t eat meat”."},
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
            ["[私]{わたし}に[会]{あ}いに来た人","the person who came to see me","[会]{あ}いに来た: came (in order) to meet."]
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
          q:"What does this mean? 「アナさんを[待]{ま}っている人はだれですか。」",
          options:[
            {
              t:"Who is the person waiting for Ana?",
              ok:true,
              why:"Right. The clause アナさんを[待]{ま}っている describes 人: the person is waiting for Ana (アナさん is the object, with を)."
            },
            {t:"Who is Ana waiting for?", why:"That would be アナさんが[待]{ま}っている人: with が, Ana is the one waiting."},
            {t:"Who waited for Ana?", why:"[待]{ま}っている is ongoing (～ている), not past. “Who waited” would be [待]{ま}った人."},
            {
              t:"Is Ana waiting for someone?",
              why:"The question word だれ asks who the person is. The sentence is about a person who is waiting for Ana."
            }
          ]
        },
        {
          id:"e3u5-l4-x6",
          type:"spot",
          q:"Mei describes a holiday photo. Tap each part with a **grammar mistake**.",
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
              "Write five sentences about favourite things with [好]{す}きな and a clause, such as 子どものころよく読んだ本は…",
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
        reveal:"**学生だと[思]{おも}います.** What you think is a small sentence of its own, in the plain form, and the plain form of 学生です is 学生だ. Leaving out だ is one of the most common learner mistakes, because だ disappears in so many other places. This lesson shows how plain forms work before と[思]{おも}う (think), と[言]{い}う (say) and ～んです (explaining), and exactly what happens to だ in each."
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
              ex:"A: どうしたんですか。\nB: [頭]{あたま}が[痛]{いた}いんです。\nA: What’s the matter? B: I’ve got a headache.\n\n[遅]{おく}れてすみません。[電車]{でんしゃ}が[止]{と}まったんです。\nSorry I’m late. The train stopped.\n\n[今日]{きょう}は[飲]{の}みません。車で来たんです。\nI won’t drink today. I came by car.",
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
              ex:"（A colleague has a large suitcase）\n[旅行]{りょこう}に行くんですか。\nAre you going on a trip?\n\n[新]{あたら}しいかばんですね。どこで[買]{か}ったんですか。\nThat’s a new bag. Where did you buy it?\n\nどうして[日本語]{にほんご}を[勉強]{べんきょう}しているんですか。\nWhy are you studying Japanese?",
              label:"～んですか"
            },
            "Compare [旅]{りょ}行に行きますか, a neutral question you might ask anyone, with [旅]{りょ}行に行くんですか, which shows you have seen the suitcase and are interested. Questions with どうして (why) very often take ～んですか in conversation, because a why-question asks for an explanation.",
            "In casual speech the question form is just の with a rising voice, as you saw in Lesson 3: どうしたの？ (What’s wrong?) どこ行くの？ (Where are you off to?) After a noun or な-adjective it is なの: 休みなの？ (Is it your day off?)"
          ]
        },
        {
          h:"When not to use ～んです",
          body:[
            "Because ～んです always connects a sentence to some situation, using it where there is nothing to connect sounds strange:",
            {
              list:[
                "**Self-introductions.** はじめまして。アナです。 is right. ✗ はじめまして。アナなんです。 sounds as if you are explaining something nobody asked about.",
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
              ex:"[田中]{たなか}さんは「[明日]{あした}は休みです」と[言]{い}いました。\nMr Tanaka said, “Tomorrow is a day off.”",
              label:"Direct quote"
            },
            "An **indirect quote** puts the words into your own sentence, in the plain form. Nouns and な-adjectives keep だ before と:",
            {
              ex:"[田中]{たなか}さんは、[明日]{あした}は休みだと[言]{い}いました。\nMr Tanaka said that tomorrow is a day off.\n\nサラさんは、[日曜日]{にちようび}は[忙]{いそが}しいと[言]{い}っていました。\nSara was saying she’s busy on Sunday.",
              label:"Indirect quote"
            },
            "～と[言]{い}っていました (was saying) is the usual way to pass on a message: you are reporting what someone told you earlier.",
            "Two more uses of と[言]{い}う you will need every day. To ask what something is called: これは日本語で[何]{なん}と[言]{い}いますか。 (What do you call this in Japanese?) And to name something: 「みどり」という[店]{みせ} (a shop called Midori). The glossary entry is [[to-iu]].",
            "In casual speech, って replaces と, and often the verb too:",
            {
              ex:"[明日]{あした}、休みだって。\nApparently tomorrow’s a day off. / They say tomorrow’s a day off.\n\nユキ、[来]{こ}ないって。\nYuki says she isn’t coming.\n\n[今]{いま}、何て[言]{い}った？\nWhat did you just say?",
              label:"Casual って"
            }
          ]
        },
        {
          h:"Giving opinions",
          body:[
            "To say what you think, put a plain form before と[思]{おも}います ([[to-omou]]). The rule for だ is the same as in an indirect quote: verbs and い-adjectives go straight in, nouns and な-adjectives keep だ.",
            {
              ex:"[明日]{あした}は[雨]{あめ}が[降]{ふ}ると[思]{おも}います。\nI think it will rain tomorrow.\n\nこの本はおもしろいと[思]{おも}います。\nI think this book is interesting.\n\nあの[人]{ひと}はミンさんのお[兄]{にい}さんだと[思]{おも}います。\nI think that’s Min’s older brother.\n\nこの[町]{まち}は[便利]{べんり}だと[思]{おも}います。\nI think this town is convenient.",
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
            "For **other people’s** thoughts, ～と[思]{おも}います doesn’t work, because it always reports the speaker’s own view. Say what they told you, ～と[言]{い}っていました, or use ～と[思]{おも}っています (has been thinking): アナさんは、[来年]{らいねん}日本へ行きたいと[言]{い}っていました。 (Ana was saying she wants to go to Japan next year.)"
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
                ["はじめまして。アナなんです。","はじめまして。アナです。","Nothing to explain, so no んです."]
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
              why:"Right. The plain past negative 来なかった + んです explains why you are late: “the bus didn’t come”."
            },
            {
              t:"[来]{こ}ないんです",
              why:"This is non-past: “the bus doesn’t come (generally)” or “isn’t coming”. Your lateness has already happened, so past fits."
            },
            {t:"来ませんでしたんです", why:"ます forms don’t go before んです. Use the plain form: 来なかったんです."},
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
            {t:"来なかった", b:1, why:"A plain verb form: 来なかったと[思]{おも}います."}
          ]
        },
        {
          id:"e3u5-l5-x4",
          type:"match",
          q:"Sara said each of these. Match her words to the indirect quote: サラさんは＿＿[言]{い}いました。",
          pairs:[
            ["「[明日]{あした}は休みです」","[明日]{あした}は休みだと","Noun: です → だ, and だ stays before と."],
            ["「[疲]{つか}れました」","[疲]{つか}れたと","ました → the plain past た."],
            ["「パーティーに行きません」","パーティーに行かないと","ません → the ない-form."],
            ["「[寒]{さむ}いです」","[寒]{さむ}いと","い-adjective: drop です, with no だ."],
            ["「[元気]{げんき}でした」","[元]{げん}気だったと","な-adjective: でした → だった."]
          ]
        },
        {
          id:"e3u5-l5-x5",
          type:"mcq",
          q:"Ken says to you: 「ユキ、今日は来ないって。」 What does he mean?",
          options:[
            {
              t:"Yuki says she isn’t coming today.",
              ok:true,
              why:"Right. って is the casual quotation marker: Ken is passing on what Yuki said."
            },
            {t:"Yuki, don’t come today.", why:"A casual “don’t come” would be 来ないで. って reports someone’s words."},
            {t:"Yuki didn’t come today.", why:"来ない is non-past. “Didn’t come” would be 来なかった."},
            {t:"I think Yuki will come today.", why:"来ない is negative, and って reports speech, not the speaker’s opinion."}
          ]
        },
        {
          id:"e3u5-l5-x6",
          type:"spot",
          q:"Priya writes to her study partner. Tap each part with a **grammar mistake**.",
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
              t:"Introducing yourself: はじめまして。アナなんです。",
              ok:true,
              why:"Right. A self-introduction explains nothing, so ～んです sounds as if you are answering a question nobody asked. Say アナです."
            },
            {
              t:"Explaining why you’re late: バスが来なかったんです。",
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
          "Dictionary form, ない-form, た-form and past negative: [書]{か}く・書かない・書いた・書かなかった; [買]{か}う・[買]{か}わない・[買]{か}った・[買]{か}わなかった; 食べる・食べない・食べた・食べなかった; する・しない・した・しなかった; [来]{く}る・[来]{こ}ない・[来]{き}た・[来]{こ}なかった. Irregular points: ある → ない (not あらない), [行]{い}く → 行った, and the three readings of [来]{く}る. The ない-form ends in い and changes like an い-adjective.",
          {h:"Adjectives and nouns"},
          "い-adjectives: 高い・高くない・高かった・高くなかった; いい uses よ: よくない・よかった・よくなかった. ～たい and ～ない follow the same pattern.",
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
          "**Two polite negatives.** 高くないです and 高くありません are both polite. The ありません forms are traditionally more formal; ～ないです is very common in speech (studies of conversation find it more often than ～ません, especially after adjectives) and widely accepted. The same pair exists for verbs (食べないです / 食べません) and nouns ([学生]{がくせい}じゃないです / [学生]{がくせい}じゃありません). In formal writing and careful speech, ～ません and ～ありません are the safe choice. All of them share the same plain form.",
          "**だ, である and nothing.** Written plain style uses だ or, in reports and academic writing, である (学生である). Casual speech often uses neither: 学生？, きれい！, 雨。 In noun-modifying clauses だ changes to な or の, and before ～んです to な, while before と[思]{おも}う it stays. (In formal writing you may also see a noun or な-adjective before と[考]{かんが}える or と[思]{おも}われる without だ, as in [必要]{ひつよう}と[考]{かんが}える; in everyday Japanese, keep だ: [学生]{がくせい}だと[思]{おも}う.) Knowing where だ appears, changes or vanishes is most of the battle at N4.",
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
          "Often dropped: は (when not contrastive), が (except after question words), を, and に or へ for destinations with verbs of movement (コンビニ行く？). Kept: で, と, から, まで, も, and に for times. Keeping a particle is never wrong.",
          {h:"Contractions"},
          {
            table:[
              ["Full","Casual","Example"],
              ["～ている","～てる","[待]{ま}ってる"],
              ["～ておく","～とく","[買]{か}っとく"],
              ["～てしまう","～ちゃう","[忘]{わす}れちゃった"],
              ["～でしまう","～じゃう","[飲]{の}んじゃった"],
              ["～なければ","～なきゃ","行かなきゃ"],
              ["～ては / ～では","～ちゃ / ～じゃ","見ちゃだめ"]
            ]
          },
          {h:"よ, ね, よね"},
          "よ tells the listener something new; ね seeks agreement or shares a feeling; よね checks something you think you both know. Verbs and い-adjectives take them directly (行くよ, [暑]{あつ}いね); nouns and な-adjectives add だ (雨だよ, [暇]{ひま}だね). The order is よね, never ねよ. Overused, よ sounds pushy.",
          {h:"Questions"},
          "Rising intonation replaces か: 行く？ Nouns and な-adjectives drop だ: [暇]{ひま}？, [学生]{がくせい}？ ～の？ (～なの？ after nouns) asks more softly, with interest in the reason. A bare か after a plain form can sound rough; fixed uses such as そうか (I see) and ～かな (I wonder) are fine.",
          {h:"Answers, invitations and requests"},
          "Casual answers: うん (yes), ううん (no), そう (that’s right), そうだね (yes, I agree), ほんと？ (really?), いいね (sounds good). Casual invitations turn ～ませんか into ～ない？ with a rising voice: [一緒]{いっしょ}に行かない？ Casual requests use the て-form alone: ちょっと[待]{ま}って. Casual goodbyes: じゃあね, またね.",
          "All of these belong with the people you speak plainly to. With anyone else, keep the polite forms, even when the conversation is relaxed."
        ],
        pro:[
          "**More contractions.** ～ていく → ～てく ([持]{も}ってく, take along); ～のだ → ～んだ; と[言]{い}う → って; ～なくては → ～なくちゃ (a common alternative to ～なきゃ). In fast casual speech, ら, る and れ before な or の often become ん: わからない → わかんない, つまらない → つまんない, くれない → くんない, [何]{なに}してるの → [何]{なに}してんの. These are very casual; recognise them before you use them.",
          "**Formal contractions.** Some contractions also appear in polite speech: [待]{ま}ってます (for [待]{ま}っています) and じゃありません are both very common. They are correct conversational Japanese but less careful than the full forms, so keep the full forms in writing and formal situations.",
          "**Gendered and stylised endings.** Older descriptions of Japanese list “women’s” endings (わ, かしら, noun + ね/よ without だ) and “men’s” endings (ぞ, ぜ, だぜ). Studies of real conversation find that many speakers, especially younger ones, rarely use the most strongly marked of these, and that people of every gender choose endings to fit the situation and the relationship. Fiction, by contrast, exaggerates them to build characters; the linguist Kinsui Satoshi calls such stylised voices [役割語]{やくわりご} (yakuwarigo, “role language”). So anime and manga are unreliable models. Neutral choices such as だよ, だね and よね work for everyone.",
          "**じゃん.** In casual speech, especially among younger speakers, じゃん is a short form related to じゃない(か), used as a tag for confirmation or mild insistence: いいじゃん (That’s good, isn’t it?). It is widely understood, very casual, and best used only after you have heard your friends use it.",
          "**Dialects.** Casual speech is where regional dialects show most. Kansai speakers say や for だ and へん for ない (行かへん), for example. The patterns in this entry are standard (Tokyo-based) Japanese, which everyone understands."
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
          "In English, a long description follows the noun: “the book **that I bought yesterday**”. In Japanese it comes **before** the noun, like an adjective: [昨日]{きのう}[買]{か}った本.",
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
              "Putting the noun first: ✗ 本[昨日]{きのう}[買]{か}った → [昨日]{きのう}[買]{か}った本.",
              "Polite forms inside: ✗ [昨日]{きのう}[買]{か}いました本.",
              "だ before a noun: ✗ [静]{しず}かだ[部屋]{へや} → [静]{しず}かな[部屋]{へや}; ✗ [医者]{いしゃ}な[兄]{あに} → [医者]{いしゃ}の[兄]{あに}.",
              "は for the doer inside: ✗ [私]{わたし}は[作]{つく}ったケーキはおいしい → [私]{わたし}が[作]{つく}ったケーキはおいしい."
            ]
          }
        ],
        pro:[
          "**Gap and no gap.** In most clauses the head noun has a role inside the clause: in 母が[作]{つく}ったケーキ, the cake is what was made. Japanese also allows clauses where the noun has no such role and the clause gives its content: [魚]{さかな}を[焼]{や}くにおい (the smell of fish grilling), [電車]{でんしゃ}が[止]{と}まった[理由]{りゆう} (the reason the train stopped). English often needs “of” or “why” here; Japanese simply puts the clause in front.",
          "**～という + noun.** Nouns of speech and thought, such as [話]{はなし} (story), ニュース and [意見]{いけん} (opinion), usually take という between the clause and the noun: [明日]{あした}[雨]{あめ}が[降]{ふ}るというニュース (the news that it will rain tomorrow).",
          "**Relative tense.** Tense inside a clause is often relative to the main event rather than to now. Before 前 (before) the verb is always non-past, and before [後]{あと} (after) it is always past: [寝]{ね}る前に (before going to bed), [食]{た}べた[後]{あと}で (after eating), even when talking about the past. Before [時]{とき} (when), the choice depends on whether the clause’s action is complete at the time of the main event: [日本]{にほん}へ行く[時]{とき} means on the way or before going, while [日本]{にほん}へ行った[時]{とき} means once there or after going.",
          "**が and の.** の for the doer (linguists call this the が/の alternation, ガ/ノ[交替]{こうたい}, “ga/no conversion”) is most natural in short clauses where the doer comes right before the verb or adjective. When an object with を comes between the doer and the verb, の sounds wrong to most speakers (✗ [山田]{やまだ}さんの本を[買]{か}った[店]{みせ}), so use が: [山田]{やまだ}さんが本を[買]{か}った[店]{みせ}. In other long clauses, too, が is clearer.",
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
          "Don’t use it when there is nothing to explain. In a self-introduction, say アナです, not ✗ アナなんです.",
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
          "Plain form + ん: [行]{い}くんです, [痛]{いた}いんです, 行かなかったんです. Non-past だ becomes な: [学生]{がくせい}なんです, [暇]{ひま}なんです; other forms stay: [学生]{がくせい}だったんです. No ます before ん.",
          {h:"Uses"},
          {
            list:[
              "**Explaining** a situation or giving a reason: [頭]{あたま}が[痛]{いた}いんです.",
              "**Asking for an explanation** of something you noticed: [旅行]{りょこう}に行くんですか (seeing a suitcase). Why-questions usually take it: どうして～んですか.",
              "**Background before a request**, trailing off: [駅]{えき}に行きたいんですが…, この[漢字]{かんじ}の[読]{よ}み[方]{かた}がわからないんですが….",
              "**Reacting to new information:** そうなんですか (Oh, is that so?), casual そうなんだ."
            ]
          },
          "～んですが… deserves practice of its own. It states your situation and stops, and the listener fills in the request: すみません、[財布]{さいふ}をなくしたんですが… (Excuse me, I’ve lost my wallet…). At a station, a shop counter or an office, it is often the most natural way to start. If you want to finish the sentence, add a request after it: …[駅]{えき}に行きたいんですが、どう行けばいいですか uses an N4 conditional you will meet in Unit 6; until then, the trailing version works well.",
          {h:"Overuse"},
          "Without a situation to connect to, ～んです sounds odd, and on every sentence it sounds like constant excuses. Why-questions with ～んですか can feel pressing in delicate moments; [何]{なに}かあったんですか is softer.",
          {h:"Comparing questions"},
          "[旅]{りょ}行に行きますか is a neutral question you could ask anyone. [旅]{りょ}行に行くんですか shows you have noticed something (a suitcase, a guidebook) and want the story. Why-questions with ～んですか are usually answered with ～んです, because the answer is the explanation that was asked for: どうして[遅]{おく}れたんですか。 ―バスが[来]{こ}なかったんです。 Other ～んですか questions are often answered with a plain polite sentence: どこで[買]{か}ったんですか。 ―[駅]{えき}の[前]{まえ}の[店]{みせ}で[買]{か}いました。",
          "In casual speech the same contrast is between 行く？ (neutral) and 行くの？ (curious about the background)."
        ],
        pro:[
          "**What の does.** Grammatically, の turns the clause into a noun (“the fact that…”), and です/だ says “it is”. So 電車が[止]{と}まったんです is roughly “It is (a case of) the train stopping”. This is why it presents information as an explanation of something already in view, and why nouns and な-adjectives take な, exactly as they do before the noun の elsewhere ([静]{しず}かなの, [学生]{がくせい}なの).",
          "**のだ in writing.** In essays and reports, ～のである and ～のだ mark a conclusion or the writer’s main point, often after つまり (in other words): つまり、[問題]{もんだい}は[時間]{じかん}なのである. Overusing it makes writing sound insistent, just as in speech.",
          "**Casual の statements.** A statement ending in の with a falling voice ([頭]{あたま}が[痛]{いた}いの) explains softly. It is used by many speakers, especially to close friends and children, and in some contexts it is associated with softer or feminine speech. ～んだ is the neutral casual statement.",
          "**Related patterns.** ～んじゃない？ offers a guess (“isn’t it that…?”): 休みなんじゃない？ ～んだって reports what you heard: [明日]{あした}休みなんだって (I hear tomorrow is a day off). ～んですけど is a slightly more casual ～んですが. ～わけです, an N3 pattern, gives a logical explanation (“that’s why”).",
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
            ex:"[田中]{たなか}さんは「[明日]{あした}は[休]{やす}みです」と[言]{い}いました。\nMr Tanaka said, “Tomorrow is a day off.”\n\n[田中]{たなか}さんは、[明日]{あした}は休みだと[言]{い}いました。\nMr Tanaka said that tomorrow is a day off.\n\n[明日]{あした}は[雨]{あめ}が[降]{ふ}ると[思]{おも}います。\nI think it will rain tomorrow.",
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
          "Inside an indirect quote, the speaker’s politeness disappears: whether Sara said [行]{い}きません or 行かない, you report サラさんは行かないと[言]{い}いました. The politeness of your own sentence is decided by its end, [言]{い}いました or [言]{い}った, according to who you are talking to.",
          "～という + noun is very useful for things the listener may not know: 「どら[焼]{や}き」というお[菓子]{かし} (a sweet called dorayaki), [山田]{やまだ}さんという[人]{ひと} (a person called Yamada). It politely signals “this may be new to you”.",
          {h:"Thinking"},
          "～と[思]{おも}います gives your opinion and makes statements modest. To say you don’t think something, make the inner sentence negative: 雨は[降]{ふ}らないと[思]{おも}います. ～とは[思]{おも}いません sounds like firm disagreement: そうは[思]{おも}いません. Ask with どう[思]{おも}いますか; agree with [私]{わたし}もそう[思]{おも}います.",
          "～と[思]{おも}います always reports the speaker’s view. For someone else, use ～と[言]{い}っていました or ～と[思]{おも}っています: アナさんは日本で[働]{はたら}きたいと[思]{おも}っています (Ana is thinking of working in Japan; this assumes she has told you).",
          {h:"Casual って"},
          "って replaces と, and the verb can drop: ユキ、[来]{こ}ないって (Yuki says she isn’t coming). 何て[言]{い}った？ (What did you say?) って[思]{おも}う is casual と[思]{おも}う.",
          {h:"Common slips"},
          "✗ [学生]{がくせい}と[思]{おも}います → [学生]{がくせい}だと. ✗ [便利]{べんり}なと → [便利]{べんり}だと. ✗ [高]{たか}いだと → 高いと. ✗ 行きますと[思]{おも}います → 行くと."
        ],
        pro:[
          "**Perspective in indirect quotes.** Indirect quotes are told from the reporter’s point of view, so words for “come” and “go”, “I” and “you”, and time words may change, as in English. If Ken phones you while you wait at the station and says 「すぐ行きます」 (I’ll be right there), you might tell the friend waiting with you: ケンさんはすぐ[来]{く}ると[言]{い}っていました.",
          "**Questions and requests.** Reported questions use か before と or without と: [何時]{なんじ}に来るかと[聞]{き}きました (asked what time I would come), 来るかどうかわかりません (I don’t know whether they’ll come). Reported requests and instructions often use ～ように[言]{い}う: [先生]{せんせい}は[宿題]{しゅくだい}を[出]{だ}すように[言]{い}いました (The teacher told us to hand in the homework).",
          "**って as a topic.** Casual って also replaces とは or は when you ask what something is: タメ[口]{ぐち}って何ですか。 (What is “tameguchi”?) Here it means “the thing called…”.",
          "**Hearsay.** Besides ～って and ～と[言]{い}っていました, Japanese reports what it heard with ～そうです (plain form + そうです: 雨が[降]{ふ}るそうです, I hear it will rain), which Unit 7 teaches next to the look-alike ～そうです of appearance ([[sou-hearsay]]).",
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
      def:"Seniors and juniors in a school, club or workplace, by who joined first. A 後[輩]{はい} normally speaks politely to a 先[輩]{ぱい}, who often answers in plain speech.",
      codex:"plain-and-polite-speech"
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
        {t:"[来]{こ}ない", why:"Correct: the plain negative of 来る, read こない."}
      ]
    },
    {
      id:"e3u5-q05",
      lesson:"e3u5-l1",
      level:2,
      q:"Kenji writes his diary in the plain style. How does he write “I didn’t go to the gym today”?",
      options:[
        {t:"[今日]{きょう}はジムに[行]{い}かなかった。", ok:true, why:"The plain past negative of 行く, which suits a plain-style diary."},
        {t:"今日はジムに行かなかったです。", why:"Grammatical, but polite. A plain-style diary leaves out です."},
        {t:"今日はジムに行きなかった。", why:"The ない-form of 行く is 行かない, so the past is 行かなかった."},
        {t:"今日はジムに行かないだった。", why:"ない changes like an い-adjective: なかった, never ないだった."}
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
      q:"Mei gets a message from a friend: 「[土曜日]{どようび}、[一緒]{いっしょ}に[映画]{えいが}[見]{み}に[行]{い}かない？」 What is the friend doing?",
      options:[
        {
          t:"Inviting Mei to go to a film together on Saturday",
          ok:true,
          why:"～ない？ with a rising voice is the casual form of ～ませんか: an invitation."
        },
        {
          t:"Asking whether Mei didn’t go to a film on Saturday",
          why:"That would need a past form, 行かなかった？ ～ない？ about the future is an invitation."
        },
        {
          t:"Saying that she won’t go to a film on Saturday",
          why:"The question mark and the rising voice make it an invitation, not a statement."
        },
        {t:"Telling Mei not to go to the film", why:"“Don’t go” would be 行かないで. ～ない？ invites."}
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
      q:"Priya’s plain-style diary has these four sentences. Which one should she change to keep the style consistent?",
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
          t:"Your own circle: the people you treat as “us”",
          ok:true,
          why:"ウチ (inside) is your family, close friends and sometimes your team: plain speech."
        },
        {t:"Your house as a building", why:"うち can mean “home”, but in ウチ・ソト it means your own group of people."},
        {t:"People who are older than you", why:"Age is the separate dial of rank. ウチ is about closeness."},
        {t:"Strangers and customers", why:"Those are ソト, the outside, who get polite speech."}
      ]
    },
    {
      id:"e3u5-q14",
      lesson:"e3u5-l2",
      level:3,
      q:"Ana and Rina are new classmates of the same age and have spoken politely for a few weeks. Then Rina says: 「タメ[口]{ぐち}でいいよ。」 What is the most natural thing for Ana to do?",
      options:[
        {
          t:"Start speaking to Rina in plain forms",
          ok:true,
          why:"Rina has invited her to use casual speech, so switching is natural and friendly."
        },
        {
          t:"Speak even more politely, with more keigo",
          why:"Rina asked for the opposite: casual speech between equals."
        },
        {t:"Stop talking to Rina", why:"The invitation is friendly. Nothing here is a problem."},
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
          t:"An email to a company asking about a job",
          ok:true,
          why:"Emails to companies, teachers and officials are polite."
        },
        {t:"Your own diary", why:"A diary is written for yourself, in the plain style."},
        {t:"A newspaper article", why:"Newspaper articles are written in the plain style."},
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
          t:"Someone who joined your school, club or workplace before you",
          ok:true,
          why:"先[輩]{ぱい} are seniors by entry. You usually speak politely to them."
        },
        {t:"Someone who joined after you", why:"That is a [後輩]{こうはい}, a junior."},
        {t:"Any teacher", why:"Teachers are [先生]{せんせい}. 先[輩]{ぱい} are fellow members who are senior to you."},
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
          t:"Polite speech marks distance, as if the friend were outside your circle",
          ok:true,
          why:"です・ます signals distance or a public situation, so it can feel like keeping a friend at arm’s length."
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
      q:"Sara says: 「[明日]{あした}のパーティー、[八時]{はちじ}からだよね？」 What is she doing?",
      options:[
        {
          t:"Checking something she thinks they both know",
          ok:true,
          why:"よね seeks confirmation: “The party is from eight, right?”"
        },
        {t:"Telling her friend some news", why:"That would be だよ alone. The ね turns it into a check."},
        {t:"Inviting her friend to the party", why:"An invitation would be [行]{い}かない？ This is a check about the time."},
        {t:"Refusing to go to the party", why:"Nothing in the sentence refuses. It confirms the start time."}
      ]
    },
    {
      id:"e3u5-q26",
      lesson:"e3u5-l3",
      level:3,
      q:"At a bus stop, Ken asks a stranger: 「このバス、[駅]{えき}に[行]{い}く？」 What is the problem?",
      options:[
        {
          t:"It is too casual for a stranger",
          ok:true,
          why:"The grammar is fine for casual speech, but strangers get polite speech: このバスは[駅]{えき}に行きますか。"
        },
        {
          t:"It needs か at the end",
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
        {t:"[昨日]{きのう}[来]{き}た[人]{ひと}", ok:true, why:"Plain past 来た, with the description before the noun."},
        {t:"人[昨日]{きのう}[来]{き}た", why:"In Japanese the description comes before the noun."},
        {t:"[昨日]{きのう}来ました人", why:"Use the plain form inside a describing clause."},
        {t:"[昨日]{きのう}来る人", why:"来る is non-past (“the person who comes”). Yesterday needs the past 来た."}
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
        {t:"[昔]{むかし}[有]{ゆう}名でした[店]{みせ}", why:"でした is polite. Use the plain form inside a clause."},
        {t:"[昔]{むかし}[有]{ゆう}名の[店]{みせ}", why:"[有]{ゆう}名 is a な-adjective, and the past needs だった."},
        {t:"[昔]{むかし}[有]{ゆう}名だ[店]{みせ}", why:"だ can’t stand before a noun, and the meaning needs the past."}
      ]
    },
    {
      id:"e3u5-q34",
      lesson:"e3u5-l4",
      level:3,
      q:"Ana can’t remember the word for “umbrella” (かさ) in a shop. Which description works best?",
      options:[
        {
          t:"[雨]{あめ}の[日]{ひ}に[使]{つか}うもの",
          ok:true,
          why:"“A thing you use on rainy days”: a non-past clause for a general description, then もの."
        },
        {t:"もの雨の日に[使]{つか}う", why:"The description must come before the noun."},
        {t:"雨の日に[使]{つか}いますもの", why:"Inside the clause, use the plain form [使]{つか}う."},
        {
          t:"雨の日に[使]{つか}ったもの",
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
      q:"At a party, Kenji asks: 「あそこで[写真]{しゃしん}を[撮]{と}っている[人]{ひと}はだれですか。」 What is he asking?",
      options:[
        {
          t:"Who is the person taking photos over there?",
          ok:true,
          why:"The clause あそこで[写真]{しゃしん}を[撮]{と}っている describes 人."
        },
        {
          t:"Who took the photos?",
          why:"[撮]{と}っている is ongoing (～ている), and the clause describes a person over there now."
        },
        {t:"Who is in that photo?", why:"[写真]{しゃしん} is the object being taken, not a photo someone is in."},
        {t:"Can I take a photo over there?", why:"The question word だれ asks who someone is."}
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
      q:"Sara said 「[明日]{あした}は[行]{い}きません」. Report it in your own words: サラさんは、[明日]{あした}は＿＿[言]{い}いました。",
      options:[
        {t:"行かないと", ok:true, why:"ません → the plain ない-form, then と."},
        {t:"行かないだと", why:"だ follows nouns and な-adjectives only. ない ends in い, like an い-adjective."},
        {t:"行くないと", why:"The ない-form of 行く is 行かない."},
        {t:"行かなかったと", why:"Past: “she didn’t go”. Sara was talking about tomorrow, so the non-past stays."}
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
        {t:"[日本語]{にほんご}で何と[言]{い}いますか。", why:"“What is it called in Japanese?”: asking for a word."},
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
      q:"On her first day in a new class, Mei says: 「はじめまして。メイなんです。[中国]{ちゅうごく}から[来]{き}たんです。よろしくお[願]{ねが}いします。」 What sounds odd?",
      options:[
        {
          t:"The ～んです endings: there is nothing to explain, so plain です・ます would fit better",
          ok:true,
          why:"In a self-introduction, ～んです sounds as if Mei is answering a question nobody asked. メイです。中国から来ました。 is natural."
        },
        {t:"よろしくお[願]{ねが}いします is too casual", why:"It is the standard polite closing of a self-introduction."},
        {t:"はじめまして is rude", why:"はじめまして is the normal greeting when you meet someone for the first time."},
        {t:"中国から needs が", why:"から (from) is correct. The problem is the ～んです endings."}
      ]
    },
    {
      id:"e3u5-q45",
      lesson:"e3u5-l5",
      level:2,
      q:"How do you pass on the message “Ana was saying she’s busy”?",
      options:[
        {
          t:"アナさんは[忙]{いそが}しいと[言]{い}っていました。",
          ok:true,
          why:"い-adjective + と, and ～と[言]{い}っていました for passing on a message."
        },
        {t:"アナさんは[忙]{いそが}しいだと[言]{い}っていました。", why:"い-adjectives never take だ."},
        {t:"アナさんは[忙]{いそが}しいと[思]{おも}います。", why:"This means “I think Ana is busy”, your own guess, not her words."},
        {
          t:"アナさんは[忙]{いそが}しいと[言]{い}っていますでした。",
          why:"ます and でした can’t be combined. The past of [言]{い}っています is [言]{い}っていました."
        }
      ]
    }
  ]
});
