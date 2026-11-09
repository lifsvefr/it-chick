/* International Studies · Unit 7 · Media, communication and world politics */
ICA.addUnit({
  id:"e4u7", track:"e4", n:7, title:"Media, communication and world politics", icon:"📡",
  blurb:"How news and platforms shape world politics: media systems compared, press freedom indices and who owns the news; agenda setting, framing, the CNN effect and the propaganda model; the public sphere, protest and platform regulation; information disorder, state influence operations, fact-checking and AI; and how to research media for a seminar paper or thesis.",
  goals:[
    "Compare media systems with Hallin and Mancini’s models and their extensions beyond the West, and read press freedom indices critically",
    "Use agenda setting, framing, news values, the CNN effect and the propaganda model to analyse real coverage, and say who disagrees with each",
    "Explain the public sphere and the networked public sphere, weigh the evidence on social media, protest and filter bubbles, and describe how platforms are governed",
    "Analyse information disorder and state influence operations, and judge what fact-checking, prebunking, media literacy and AI labelling can and can’t do (as of November 2026)",
    "Design a small framing analysis, choose news archives and datasets such as GDELT and Media Cloud, and handle the ethics of studying social media"
  ],
  read:[
    {book:"ospol", where:"Chapter 12 “The Media” (sections 12.1–12.5)", note:"A gentle textbook chapter on the media as a political institution, ownership, elections, social media and trust. Most examples are from the United States; the lessons add the comparative and international debates."},
    {book:"infodis", where:"The whole report, especially Part 1 (the conceptual framework)", note:"The report that introduced “information disorder”. Read it with Lesson 4."},
    {book:"dnr", where:"Executive summary and the country pages for two or three countries you follow", note:"The largest yearly survey of how people get news, across 48 markets in 2026. Use it to check claims about news habits and trust."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u7-l1", title:"Media systems compared: models, freedom and ownership", minutes:60,
   hook:{q:"Reporters Without Borders (RSF) published its 2026 World Press Freedom Index on 30 April 2026. What share of the 180 countries and territories did it place in its two worst categories, “difficult” or “very serious”?", options:["About one in seven","About a third","Just over half","Nearly nine in ten"], answer:2, reveal:"**Just over half (52.2%).** RSF said it was the first time more than half had fallen into those two categories, against 13.7% in 2002, and that the average score was the lowest in the Index’s 25-year history. Numbers like these shape headlines and diplomacy, so this lesson asks how such indices are built, what they can’t see, and how scholars compare whole media systems instead of ranking them."},
   goals:[
     "Explain what a media system is and why scholars compare them",
     "Describe Hallin and Mancini’s three models and their four dimensions, and the main critiques",
     "Discuss how the models travel (or don’t) beyond Western Europe and North America, with Asian, African and Latin American cases",
     "Read press freedom indices critically: what RSF, Freedom House and V-Dem measure, and their limits",
     "Distinguish public service, state, commercial and captured media without assuming ownership tells the whole story"
   ],
   learn:[
    {h:"Why compare media systems?", body:[
      {lead:"Watch one summit covered on the same evening in Oslo, Rome, Washington, Beijing and Tokyo, and you will see five different stories."},
      "Some differences come from national interest or language. Many come from how each country’s news is organised: who owns it, who pays for it, how close it is to political parties, and what the law allows. A [[media-system|media system]] is that whole set of institutions (newspapers, broadcasters, platforms), together with the markets, laws and political ties around them.",
      "A one-line reminder from the sociology primer: [[gatekeeping]] filters many possible stories into a few, and [[media-consolidation]] puts outlets in fewer hands (see {{media-technology}}). This lesson moves from single outlets to whole systems.",
      "The first famous comparison was *Four Theories of the Press* (1956) by Fred Siebert, Theodore Peterson and Wilbur Schramm. It sorted the world into authoritarian, libertarian, social responsibility and Soviet communist “theories”. Later scholars criticised it as a Cold War map that judged every system by an idealised American model and described ideals rather than how media actually worked. The book that replaced it in most courses set out to describe real systems, not ideals."
    ]},
    {h:"Hallin and Mancini’s three models", body:[
      "Daniel Hallin and Paolo Mancini’s *Comparing Media Systems: Three Models of Media and Politics* (2004) compared 18 democracies in Western Europe and North America along four dimensions:",
      {list:[
        "**Media markets**: especially whether a mass-circulation press developed early, read by ordinary people, or an elite press read mainly by the educated and powerful.",
        "**[[political-parallelism|Political parallelism]]**: how far outlets line up with parties or political camps, in ownership, staff and the views they take.",
        "**[[journalistic-professionalism|Journalistic professionalism]]**: how far journalists share their own norms and control their work, rather than serving owners or parties.",
        "**The role of the state**: from subsidies and public broadcasting to censorship and control of advertising."
      ]},
      {table:[
        ["Model","Typical cases","Pattern"],
        ["[[polarized-pluralist-model|Polarised Pluralist]] (Mediterranean)","France, Greece, Italy, Portugal, Spain","Elite press, strong links to parties, weaker professional autonomy, an active state"],
        ["[[democratic-corporatist-model|Democratic Corporatist]] (North/Central European)","Nordic countries, Germany, Austria, the Low Countries, Switzerland","Mass press, a history of party papers, strong professionalism, a strong state that also protects press freedom"],
        ["[[liberal-media-model|Liberal]] (North Atlantic)","Britain, Ireland, the United States, Canada","Commercial press, neutral “objective” ideals, market more than state"]
      ]},
      {fig:'<svg viewBox="0 0 340 446"><rect class="d-panel" x="4" y="8" width="332" height="128" rx="8"/><text x="170" y="30" text-anchor="middle">Polarised Pluralist</text><text class="s" x="170" y="47" text-anchor="middle">France, Greece, Italy, Portugal, Spain</text><text class="s" x="14" y="72">Mass press</text><rect class="d-rose" x="150" y="62" width="58" height="11" rx="3"/><text class="s" x="14" y="90">Parallelism</text><rect class="d-rose" x="150" y="80" width="174" height="11" rx="3"/><text class="s" x="14" y="108">Professionalism</text><rect class="d-rose" x="150" y="98" width="58" height="11" rx="3"/><text class="s" x="14" y="126">State role</text><rect class="d-rose" x="150" y="116" width="174" height="11" rx="3"/><rect class="d-panel" x="4" y="144" width="332" height="138" rx="8"/><text x="170" y="166" text-anchor="middle">Democratic Corporatist</text><text class="s" x="170" y="183" text-anchor="middle">Nordic countries, Germany, Austria,</text><text class="s" x="170" y="198" text-anchor="middle">the Low Countries, Switzerland</text><text class="s" x="14" y="220">Mass press</text><rect class="d-sage" x="150" y="210" width="174" height="11" rx="3"/><text class="s" x="14" y="238">Parallelism</text><rect class="d-sage" x="150" y="228" width="116" height="11" rx="3"/><text class="s" x="14" y="256">Professionalism</text><rect class="d-sage" x="150" y="246" width="174" height="11" rx="3"/><text class="s" x="14" y="274">State role</text><rect class="d-sage" x="150" y="264" width="174" height="11" rx="3"/><rect class="d-panel" x="4" y="290" width="332" height="128" rx="8"/><text x="170" y="312" text-anchor="middle">Liberal</text><text class="s" x="170" y="329" text-anchor="middle">Britain, Ireland, United States, Canada</text><text class="s" x="14" y="354">Mass press</text><rect class="d-gold" x="150" y="344" width="116" height="11" rx="3"/><text class="s" x="14" y="372">Parallelism</text><rect class="d-gold" x="150" y="362" width="58" height="11" rx="3"/><text class="s" x="14" y="390">Professionalism</text><rect class="d-gold" x="150" y="380" width="174" height="11" rx="3"/><text class="s" x="14" y="408">State role</text><rect class="d-gold" x="150" y="398" width="58" height="11" rx="3"/><text class="s" x="170" y="438" text-anchor="middle">Bars: low, medium or high (simplified)</text></svg>', alt:"Three stacked panels, one per model, each with four bars for mass press, political parallelism, professionalism and state role. Polarised Pluralist (France, Greece, Italy, Portugal, Spain): mass press low, parallelism high, professionalism low, state role high. Democratic Corporatist (Nordic countries, Germany, Austria, the Low Countries, Switzerland): mass press high, parallelism medium, professionalism high, state role high. Liberal (Britain, Ireland, United States, Canada): mass press medium, parallelism low, professionalism high, state role low.", cap:"Hallin and Mancini’s four dimensions, simplified. They are ideal types: real countries sit between them, and Britain’s partisan national press is a well-known exception inside the Liberal model."},
      "The Codex entry {{media-systems}} has more on the models and their critics. Two points matter in seminars. First, these are **ideal types**, not a league table: no model is “best”. Second, Hallin and Mancini predicted a slow drift towards the Liberal model as commercial media spread, and later added that the drift was neither complete nor one-way. A 2014 test by Michael Brüggemann and colleagues, which turned the dimensions into measures, found four empirical clusters of Western systems rather than three."
    ]},
    {h:"Beyond the West", body:[
      "Hallin and Mancini warned that their models fitted only the 18 cases they studied. Their edited volume *Comparing Media Systems Beyond the Western World* (2012) asked how the framework travels. The answers are instructive:",
      {list:[
        "**Asia.** Duncan McCargo’s chapter on Asian media used the phrase **“partisan polyvalence”**: in countries such as Thailand, media play many shifting political roles at once, so a single “degree of parallelism” misleads.",
        "**China.** Party-state media coexist with intense commercial competition. Scholars debate whether market reforms since the 1990s loosened party control or made it more sophisticated.",
        "**Japan.** A strong public broadcaster (NHK), very large national dailies, and [[kisha-club|kisha clubs]], press clubs attached to ministries and parties. Critics say the clubs encourage closeness to officials and exclude freelancers and foreign reporters; defenders say they secure access and accuracy.",
        "**Latin America, Africa, the Middle East.** Concentrated family or political ownership of broadcasters in parts of Latin America, public broadcasters such as South Africa’s SABC rebuilt after apartheid, and state-funded international channels such as Qatar’s Al Jazeera ({{international-broadcasting|international broadcasting}} is covered in this track’s unit on soft power and public diplomacy). Andrew Chadwick’s *The Hybrid Media System* (2013) adds that old and new media now mix everywhere."
      ]},
      {ex:"Brazil: a large commercial market led for decades by one dominant TV network, while many regional broadcasters have been owned by politicians or their families, a pattern Brazilian scholars call “electronic coronelismo”. High ownership-based parallelism, a weak public broadcaster, an active state in licensing.\nSouth Korea: mass-circulation national dailies that scholars often describe as split between conservative and progressive camps, and public broadcasters whose leadership appointments have been contested after changes of government. High parallelism, strong professional identity, a state with influence through appointments.\nNeither fits one model cleanly, which is the point: the dimensions travel better than the three boxes.", label:"Worked example: placing two systems"},
      {tip:"A useful distinction: [[public-service-media|public service media]] are publicly funded but meant to be editorially independent of government; [[state-media|state media]] are directly controlled by a government or ruling party. Funding alone doesn’t settle which one you are looking at: governance, appointments and editorial track record do, and observers often disagree about particular broadcasters."}
    ]},
    {h:"Measuring press freedom", body:[
      "Indices turn a complex situation into a number. The main ones measure different things:",
      {table:[
        ["Index","What it measures","How"],
        ["RSF World Press Freedom Index (since 2002)","180 countries and territories, scored 0–100 on five indicators: political, legal, economic, sociocultural, safety","A tally of abuses against journalists plus questionnaires answered by press freedom specialists"],
        ["Freedom House","Media freedom inside its *Freedom in the World* ratings, and internet freedom in *Freedom on the Net*","Analysts’ scores on set questions. Its separate *Freedom of the Press* report ended after the 2017 edition"],
        ["V-Dem","Many media indicators (censorship, harassment of journalists, media bias) yearly back to 1789","Expert surveys combined with a statistical measurement model"]
      ]},
      "RSF’s five indicator scores count equally towards the overall [[press-freedom-index|index]] score, and its bands run from “good” (85–100) to “very serious” (0–40). In the 2026 Index, only seven countries, all in northern Europe and led by Norway, were rated “good”.",
      {ex:"A country scores 82 (political), 90 (legal), 61 (economic), 78 (sociocultural) and 74 (safety).\nOverall score = (82 + 90 + 61 + 78 + 74) ÷ 5 = 385 ÷ 5 = 77.\n77 falls in the “satisfactory” band (70–85). Note what the single number hides: the economic score, 61, would be “problematic” on its own.", label:"Worked example: an RSF-style score"},
      "Scholars use the indices but argue about them (see {{press-freedom-indices}}). Expert questionnaires depend on who answers. Rankings exaggerate tiny score differences between neighbouring places. Some argue the indices assume a liberal, market-based ideal of independence and undercount economic and commercial pressure; others reply that the newer RSF method added an economic indicator for exactly that reason. Governments that rank low often reject the results as biased. For research, V-Dem’s long time series and published methods make it the usual choice; for news, RSF’s ranking is the most quoted."
    ]},
    {h:"Who owns the news?", body:[
      "Ownership types include commercial companies, public service broadcasters, state outlets, party papers, and individual owners with business or political interests elsewhere. RSF’s **Media Ownership Monitor**, started in 2015 and now run with the Global Media Registry, maps owners country by country. Search for it and look at one country you know.",
      "Scholars use [[media-capture|media capture]] for outlets that serve governments or business allies rather than the public: through ownership, advertising, licences or friendly loans. Capture can happen in a formal democracy, which is why ownership data matter.",
      "Ownership is not the only lever. Platforms now carry much of the news. In the Reuters Institute’s *Digital News Report 2026* (48 markets), social and video networks (54%) overtook news websites and apps (51%) as a way to reach online news for the first time, and trust in news overall was 37%, the lowest since the survey began asking in 2015. Lesson 3 turns to the platforms."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Publicly funded means propaganda.”** Many public service broadcasters are among the most trusted outlets in their countries; independence depends on governance, not funding.",
        "**“A free market means free media.”** Commercial pressure, concentration and capture can narrow coverage without any censor.",
        "**“The index rank is a precise measure.”** It is an estimate with a method; read the indicator scores and the method note.",
        "**“The three models rank countries.”** They are types for comparison, built from 18 Western cases, and stretch poorly elsewhere."
      ]},
      {key:"Compare media systems on several dimensions at once, and treat every index as a method with choices behind it, not a fact about a country."}
    ]}
   ],
   try:[
    {id:"e4u7-l1-x1", type:"mcq", q:"A scholar says: “*Four Theories of the Press* describes how journalism should work in different ideologies, not how it actually works.” Which criticism is this?", options:[
      {t:"That the 1956 book was normative and shaped by the Cold War, judging systems against an idealised Western model", ok:true, why:"Right. This was the central complaint: it described ideals (libertarian, social responsibility) and used them to judge others, which Hallin and Mancini set out to replace with empirical comparison."},
      {t:"That it only studied 18 Western democracies", why:"That is a limit of Hallin and Mancini (2004), not of *Four Theories*, which claimed to cover the whole world."},
      {t:"That it relied on expert surveys with too few respondents", why:"That is a critique of press freedom indices. *Four Theories* was an essay in normative theory, not a survey."},
      {t:"That it ignored social media", why:"True but trivial: it was written in 1956. The criticism quoted is about its normative approach."}
    ]},
    {id:"e4u7-l1-x2", type:"sort", q:"Which of Hallin and Mancini’s models does each description fit best?", buckets:["Polarised Pluralist","Democratic Corporatist","Liberal"], items:[
      {t:"Newspapers read mainly by political and educated elites; close links between outlets and parties", b:0, why:"An elite press and high political parallelism are the core of the Mediterranean model."},
      {t:"High newspaper readership, strong journalists’ unions and press councils, and generous press subsidies", b:1, why:"Mass press, strong professionalism and an active state that protects press freedom mark the North/Central European model."},
      {t:"Commercial media dominate and the state’s role is limited; “objective” reporting is the professional ideal", b:2, why:"Market dominance and neutral-professional norms define the Liberal model."},
      {t:"Governments have often used state broadcasters and advertising to reward friendly outlets", b:0, why:"“Instrumentalisation” of media by governments and parties is typical of the Polarised Pluralist model."},
      {t:"A history of party newspapers that slowly gave way to neutral commercial papers, alongside strong public broadcasting", b:1, why:"External pluralism through party papers, then a shift, fits the Democratic Corporatist pattern."},
      {t:"Journalism developed early as a business, with newspapers funded by advertising and mass sales", b:2, why:"Early commercial development is a defining feature of the Liberal model."}
    ]},
    {id:"e4u7-l1-x3", type:"mcq", q:"Why did Duncan McCargo describe many Asian media as showing “partisan polyvalence”?", options:[
      {t:"Because outlets play several shifting political roles at once, so a single measure of political parallelism misleads", ok:true, why:"Right. “Polyvalence” means having many valences or roles: the same outlet can be partisan, commercial and a voice of reform at different moments."},
      {t:"Because Asian media are all controlled by the state", why:"McCargo’s point is the opposite of a single pattern: roles vary and shift, and Asian systems differ enormously."},
      {t:"Because Asian journalists are unusually professional", why:"His term is about political roles, not a claim about professionalism."},
      {t:"Because Asian countries fit the Liberal model exactly", why:"The chapter argued that the Western models stretch poorly in Asia."}
    ]},
    {id:"e4u7-l1-x4", type:"number", q:"An RSF-style score has five equally weighted indicators: political 70, legal 66, economic 48, sociocultural 72, safety 59. What is the overall score?", answer:63, tol:0, unit:"", why:"Add the five scores: 70 + 66 + 48 + 72 + 59 = 315. Divide by five: 315 ÷ 5 = 63, which falls in the “problematic” band (55–70).", wrongs:[
      {v:315, tol:0, why:"That is the sum. The indicators are averaged, so divide by five."},
      {v:52.5, tol:0.5, why:"That divides by six. There are five indicators."},
      {v:48, tol:0, why:"That is the lowest single score. The overall score is the average of all five."}
    ], hint2:"Average the five scores."},
    {id:"e4u7-l1-x5", type:"match", q:"Match each index to what it is known for.", pairs:[
      ["RSF World Press Freedom Index","Yearly 0–100 scores for 180 countries and territories, from abuse tallies and specialist questionnaires","RSF combines counts of abuses with qualitative answers from journalists, researchers and others."],
      ["Freedom House","Media freedom as part of its wider democracy ratings and *Freedom on the Net*","Its stand-alone *Freedom of the Press* report ended after 2017."],
      ["V-Dem","Expert-coded media indicators with long time series and a published measurement model","Researchers favour it for comparisons over time."],
      ["Media Ownership Monitor","Maps who owns the main outlets in a country","It measures ownership and concentration, not freedom scores."]
    ]},
    {id:"e4u7-l1-x6", type:"mcq", q:"Two countries both fund their main broadcaster from public money. In Country A, an independent board appoints the director and the broadcaster often criticises the government. In Country B, the ministry appoints editors and the news never questions official policy. Which statement is most accurate?", options:[
      {t:"A looks like public service media and B like state media: governance and editorial practice, not funding, tell them apart", ok:true, why:"Right. Both are publicly funded; independence depends on who appoints, who decides content, and the track record."},
      {t:"Both are state media, because they take public money", why:"Funding alone doesn’t decide it. Many publicly funded broadcasters are editorially independent."},
      {t:"Both are public service media, because neither is commercial", why:"B’s editors are appointed by a ministry and never question policy: that is direct government control."},
      {t:"Neither can be classified without knowing their audience share", why:"Audience share says nothing about independence."}
    ]},
    {id:"e4u7-l1-x7", type:"spot", q:"Tap the claims in this news paragraph that overreach what a press freedom index can show.", ask:"overreaches", parts:[
      "“The new Index puts our country at 64th, ",
      {t:"seven places lower than last year", flag:false, why:"A factual report of the rank change, fine if checked against the index."},
      ". ",
      {t:"This proves that journalists here are less free than in the 63 countries above us.", flag:true, why:"Neighbouring ranks can differ by tiny score gaps within the margin of judgement. A rank doesn’t prove a precise ordering."},
      " ",
      {t:"The index combines a tally of abuses with questionnaires answered by specialists.", flag:false, why:"An accurate description of RSF’s method."},
      " ",
      {t:"Since the economic indicator fell most, the government must have ordered the cuts.", flag:true, why:"The economic indicator covers market pressures, ownership and advertising too. The index can’t show who caused a fall."},
      " ",
      {t:"Readers can check each of the five indicator scores on RSF’s site.", flag:false, why:"Good practice: the indicator scores show what the single number hides."},
      "”"
    ]}
   ],
   apply:{intro:"Compare real systems with public data. There are no right conclusions, only careful reasoning with sources and dates.", tasks:[
    {t:"Profile two media systems", how:["Choose two countries from different regions (for example Kenya and Indonesia, or Brazil and Japan).","For each, note the main public broadcaster (if any), two large private outlets and who owns them (the Media Ownership Monitor covers some countries; otherwise use the outlets’ own “about” pages).","Place each country on Hallin and Mancini’s four dimensions, and note where the framework fits badly."], write:"Country 1: broadcaster, outlets, owners… Country 2: … The four dimensions for each… Where the framework fits badly…"},
    {t:"Read an index like a methodologist", how:["Open the RSF index page for one country and note its overall score and five indicator scores (with the edition year).","Look up the same country in V-Dem’s media indicators or Freedom House, if you can.","Write down where the sources agree, where they differ, and one reason for the difference."], write:"Country and year… RSF scores… Second source… Agreement and difference… A possible reason…"},
    {t:"Seminar questions", how:["Do Hallin and Mancini’s models still help once platforms carry most news, or do we need a new comparison?","Is “state media” a useful analytical category, or mainly a label used against rivals?","Should researchers trust a ranking built partly from expert questionnaires? What would make you trust it more?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes profiling two media systems on four dimensions, a comparison of two press freedom sources for one country, and a seminar paragraph."},
   read:[
    {book:"ospol", where:"Chapter 12, section 12.1 “The Media as a Political Institution: Why Does It Matter?” (the part “The Fourth Estate and Freedom of the Press”) and section 12.2 “Types of Media and the Changing Media Landscape” (the part “Ownership of the Media”)", note:"A gentle introduction with US examples; this lesson adds the comparative frame."},
    {book:"dnr", where:"Executive summary, then the country pages for the two countries you profile", note:"Use it to see which outlets people in each country actually use and trust."}
   ]},
  /* ===================== LESSON 2 ===================== */
  {id:"e4u7-l2", title:"How media shape what we think about", minutes:60,
   hook:{q:"In 1968 Maxwell McCombs and Donald Shaw asked undecided voters in Chapel Hill, North Carolina, which issues mattered most. What did the voters’ ranking match most closely?", options:["Their own family’s views","How much the media they used covered each issue","The candidates’ own speeches, read in full","Opinion polls published that autumn"], answer:1, reveal:"**Media coverage.** The issues voters ranked most important closely matched how much attention local and national news gave each one. McCombs and Shaw published the study in 1972 and named it the agenda-setting function of the media: media may not tell people what to think, but they are very good at telling them what to think about. This lesson builds the toolkit that grew from that finding, and asks how far it explains foreign policy."},
   goals:[
     "Explain agenda setting, framing and priming, and how they differ",
     "Apply Entman’s four framing functions and the episodic/thematic distinction to real coverage",
     "Use Galtung and Ruge’s news values to explain why some places appear in foreign news only in crisis",
     "Assess the CNN effect with Robinson’s policy–media interaction model and its critics",
     "Present Herman and Chomsky’s propaganda model fairly, with its strongest critiques"
   ],
   learn:[
    {h:"Agenda setting and priming", body:[
      {lead:"In 1963 the political scientist Bernard Cohen wrote that the press “may not be successful much of the time in telling people what to think, but it is stunningly successful in telling its readers what to think about”."},
      "Cohen was writing about foreign policy (*The Press and Foreign Policy*). Maxwell McCombs and Donald Shaw tested the idea in the 1968 US election and published “The Agenda-Setting Function of Mass Media” in 1972. A reminder from the sociology primer: [[agenda-setting]] is the media’s influence on which issues people think important. Hundreds of later studies, in many countries, found similar effects (see {{agenda-setting-theory}}), usually strongest for issues people can’t observe themselves. Foreign affairs is the classic example: few voters see a distant war except through the news.",
      "Later work added a **second level**: media also make some *attributes* of an issue or a leader salient (competence, honesty, danger). That shades into framing. A third idea, [[priming]], comes from Shanto Iyengar and Donald Kinder’s *News That Matters* (1987): issues the news stresses become the yardsticks people use to judge leaders. If coverage is full of a border crisis, a president is judged on the border."
    ]},
    {h:"Framing: Entman’s four functions", body:[
      "Robert Entman’s 1993 article “Framing: Toward Clarification of a Fractured Paradigm” gave the definition most scholars quote ({{framing-theory}}). To frame is to select some aspects of a perceived reality and make them more salient in a text, so as to promote a particular **problem definition**, **causal interpretation**, **moral evaluation** and/or **treatment recommendation**.",
      {tip:"The primer’s [[framing]] term is about social movements (diagnostic, prognostic and motivational frames). [[media-framing|Media framing]] is the related idea for news texts. Both come from Erving Goffman’s *Frame Analysis* (1974). Audiences don’t simply absorb frames: {{stuart-hall|Stuart Hall}}’s [[encoding-decoding|encoding/decoding]] model, covered in this track’s unit on culture, shows readers can accept, negotiate or reject them."},
      {table:[
        ["Function","Ask","Example: boats of asylum seekers"],
        ["Problem","What is happening, and to whom?","A border crisis, or a humanitarian emergency"],
        ["Cause","Who or what caused it?","Smugglers, war at home, or weak policy"],
        ["Moral judgement","Who is good, bad or a victim?","People as threats, or as survivors"],
        ["Remedy","What should be done?","Push-backs, or rescue and asylum hearings"]
      ]},
      "Iyengar’s *Is Anyone Responsible?* (1991) adds a useful pair of [[episodic-thematic-framing|frames]]. **Episodic** stories focus on one person or event (a single rescued child); **thematic** stories place events in context (trends, causes, policy). In his experiments, episodic coverage led viewers to blame individuals, thematic coverage to blame governments and society.",
      "Framing links media studies to IR theory. Constructivists ({{constructivism}}) see frames as part of how shared meanings are made, and the Copenhagen School’s [[securitization|securitisation]] ({{securitization-theory}}) can be read as a contest over one frame: presenting an issue as an existential threat. When migration, a virus or a rival’s investment is framed as a security problem, the remedy moves from ordinary politics towards emergency measures. A seminar paper can trace that shift in coverage over time.",
      "In *Projections of Power* (2004) Entman offered the [[cascading-activation|cascading activation]] model for foreign policy news. Frames usually start with the government, flow down through other elites to journalists, then to news texts and the public, with feedback upwards. When elites disagree, rival frames get through more easily."
    ]},
    {h:"News values: what becomes foreign news", body:[
      "Why does a country appear in the news only when disaster strikes? In 1965 the peace researcher {{johan-galtung|Johan Galtung}} and Mari Holmboe Ruge published “The Structure of Foreign News” in the *Journal of Peace Research*. They studied how four Norwegian newspapers covered crises in the Congo, Cuba and Cyprus, and proposed twelve [[news-values|news values]]: factors that make an event more likely to become news. They include:",
      {list:[
        "**Threshold** and **unexpectedness**: big and surprising events pass the filter.",
        "**Meaningfulness** and **consonance**: events that seem culturally close, or that fit what people already expect, are easier to report.",
        "**Reference to elite nations** and **elite people**: powerful countries and famous people get covered more.",
        "**Personalisation** and **negativity**: stories about named people and about bad news travel further."
      ]},
      "The consequence they warned about: distant, less powerful places appear mainly through sudden negative events, which feeds a picture of them as permanently in crisis. Tony Harcup and Deirdre O’Neill revisited the list in 2001 and again in 2017, adding values such as entertainment, celebrity and shareability for the social media age.",
      "These patterns became a diplomatic issue. In the 1970s many newly independent states argued that a few Western news agencies dominated world news and pictured the Global South through crisis. They called at UNESCO for a **New World Information and Communication Order**. UNESCO’s MacBride Commission report, *Many Voices, One World* (1980), backed more balanced flows; critics, led by the United States and the United Kingdom, saw a threat to press freedom, and both countries left UNESCO in the mid-1980s, partly over the dispute (the US from the end of 1984, the UK from the end of 1985). The UK rejoined in 1997 and the US in 2003; the US later left again from 2018 to 2023, and in July 2025 announced a further withdrawal, due to take effect at the end of 2026.",
      "Galtung later argued for [[peace-journalism|peace journalism]], which reports causes, voices on all sides and paths to peace, not only violence."
    ]},
    {h:"The CNN effect and its critics", body:[
      "The [[cnn-effect-term|CNN effect]] is the claim that live, emotive news coverage pushes governments into foreign policy decisions, especially humanitarian intervention. The term became popular in the early 1990s, when 24-hour television covered the Gulf War and the Kurdish refugee crisis of 1991 and famine and war in Somalia in 1992 (see {{cnn-effect}}).",
      "Steven Livingston (1997) split the idea into three possible effects: an **accelerant** (speeding decisions up), an **impediment** (images of casualties making intervention harder, as after the deaths of US soldiers in Mogadishu in 1993), and an **agenda-setting** effect. Studies of Somalia found that heavy coverage mostly *followed* official attention rather than causing it.",
      "Piers Robinson’s *The CNN Effect: The Myth of News, Foreign Policy and Intervention* (2002), building on a 2000 article, proposed the [[policy-media-interaction-model|policy–media interaction model]]: media influence is likely only when government policy is **uncertain** and coverage is **critical and empathy-framed**, showing suffering and blaming inaction.",
      {fig:'<svg viewBox="0 0 340 300"><text x="200" y="18" text-anchor="middle">Government policy is…</text><text class="s" x="140" y="40" text-anchor="middle">uncertain</text><text class="s" x="268" y="40" text-anchor="middle">certain</text><text class="s" x="36" y="96" text-anchor="middle">Critical,</text><text class="s" x="36" y="111" text-anchor="middle">empathy</text><text class="s" x="36" y="126" text-anchor="middle">framing</text><text class="s" x="36" y="206" text-anchor="middle">Supportive</text><text class="s" x="36" y="221" text-anchor="middle">or distant</text><text class="s" x="36" y="236" text-anchor="middle">framing</text><rect class="d-rose" x="76" y="50" width="128" height="116" rx="8" stroke-width="2"/><text x="140" y="92" text-anchor="middle">Media</text><text x="140" y="110" text-anchor="middle">influence</text><text x="140" y="128" text-anchor="middle">likely</text><text class="s" x="140" y="150" text-anchor="middle">Gorazde, 1995</text><rect class="d-gold" x="208" y="50" width="128" height="116" rx="8" stroke-width="2"/><text x="272" y="100" text-anchor="middle">Policy holds</text><text x="272" y="118" text-anchor="middle">despite criticism</text><text class="s" x="272" y="150" text-anchor="middle">Kosovo, 1999</text><rect class="d-sage" x="76" y="172" width="128" height="116" rx="8" stroke-width="2"/><text x="140" y="214" text-anchor="middle">Officials</text><text x="140" y="232" text-anchor="middle">set the frame</text><rect class="d-sage" x="208" y="172" width="128" height="116" rx="8" stroke-width="2"/><text x="272" y="214" text-anchor="middle">Media follow</text><text x="272" y="232" text-anchor="middle">policy</text><text class="s" x="272" y="254" text-anchor="middle">(indexing)</text></svg>', alt:"A two-by-two grid. Columns: government policy is uncertain or certain. Rows: coverage is critical and empathy-framed, or supportive or distant. Uncertain policy with critical coverage: media influence likely, example Gorazde 1995. Certain policy with critical coverage: policy holds despite criticism, example Kosovo 1999. Uncertain policy with supportive coverage: officials set the frame. Certain policy with supportive coverage: media follow policy, the indexing pattern.", cap:"Robinson’s policy–media interaction model, simplified. In his cases, the US decision to defend the Gorazde safe area in Bosnia (1995) fits the top left; the Kosovo air war (1999) continued despite critical coverage."},
      "Others go further. W. Lance Bennett’s [[indexing-hypothesis|indexing hypothesis]] (1990) says news tends to “index” the range of views to the range of debate among officials, so media seldom lead. The case of Rwanda in 1994, where early coverage was thin and often framed the genocide as ancient “tribal” conflict, is cited as the opposite of a CNN effect."
    ]},
    {h:"The propaganda model and its critics", body:[
      "Edward Herman and Noam Chomsky’s *Manufacturing Consent: The Political Economy of the Mass Media* (1988) offered a sharper explanation of why US news usually stayed within elite consensus. Their [[propaganda-model-term|propaganda model]] proposes five filters (see {{propaganda-model}}):",
      {ol:[
        "**Ownership**: large, profit-seeking corporations own the main outlets.",
        "**Advertising**: media sell audiences to advertisers, which favours friendly content.",
        "**Sourcing**: reliance on government and corporate sources for a steady supply of news.",
        "**[[flak|Flak]]**: organised criticism and pressure that punishes unwelcome reporting.",
        "**Anti-communism** as a control ideology (since the Cold War, the authors and later scholars have argued that fear of other enemies, such as terrorism, can play the same role)."
      ]},
      "Their evidence included comparisons of “worthy” and “unworthy” victims, for example far heavier coverage of a priest murdered in communist Poland in 1984 than of murdered clergy in US-allied states in Latin America.",
      "Critics make four main points. The model leaves little room for journalists’ agency and for the dissenting reporting that does appear. It is hard to falsify, since critical stories can be read as the exception that proves the rule. It was built on US media before the internet. And Hallin’s *The “Uncensored War”* (1986) showed that Vietnam coverage turned critical when *elites* split, which fits indexing better than a fixed set of filters. Supporters reply that the model explains patterns, not every story, and that its filters apply to many systems, including state-controlled ones."
    ]},
    {h:"Using the tools together", body:[
      {ex:"Story: a famine in a region that rarely makes the news.\nNews values: it is covered once deaths pass a threshold and a famous aid worker visits.\nAgenda setting: within days, polls show more people naming it a top world problem.\nFraming: early stories are episodic (one starving child); a later series is thematic (drought, conflict, food prices).\nCNN effect: aid budgets rise, but officials had already planned more aid (follows rather than leads?).\nPropaganda model: does coverage blame an unfriendly government more than a friendly one?", label:"Worked example: one story, five tools"},
      {key:"Agenda setting asks what we think about, framing how we think about it, news values why it reached the news at all, and the CNN effect and the propaganda model how news and power influence each other."}
    ]}
   ],
   try:[
    {id:"e4u7-l2-x1", type:"mcq", q:"After weeks of coverage of a maritime dispute, a poll shows that voters now judge the prime minister mainly on how she handles it, though their views on her other policies haven’t changed. Which effect is this?", options:[
      {t:"Priming: the issue the news stressed became the yardstick for judging the leader", ok:true, why:"Right. Iyengar and Kinder showed that heavily covered issues become the standards people use to evaluate leaders."},
      {t:"First-level agenda setting only", why:"Agenda setting explains why the dispute seems important. Using it as the yardstick for judging a leader is priming."},
      {t:"The CNN effect", why:"The CNN effect is about coverage changing government policy, not how voters judge a leader."},
      {t:"Indexing", why:"Indexing is about news following the range of official debate, not about voters’ standards of judgement."}
    ]},
    {id:"e4u7-l2-x2", type:"match", q:"Match each sentence from a news story to Entman’s framing function it performs.", pairs:[
      ["“The capital has suffered its third blackout this month.”","Problem definition","It defines what is happening."],
      ["“Engineers say years of underinvestment by the state utility are to blame.”","Causal interpretation","It assigns a cause."],
      ["“Officials have shown contempt for families left in the dark.”","Moral evaluation","It judges who is at fault morally."],
      ["“An independent regulator should take over the grid.”","Treatment recommendation","It proposes a remedy."]
    ]},
    {id:"e4u7-l2-x3", type:"sort", q:"Episodic or thematic? Sort each piece of coverage.", buckets:["Episodic","Thematic"], items:[
      {t:"A profile of one family who lost their home in a flood", b:0, why:"It focuses on one case, which Iyengar found leads viewers to think in individual terms."},
      {t:"A data story on how flood risk has changed across the region over 30 years", b:1, why:"Trends and context are thematic."},
      {t:"Live footage of a single protest march", b:0, why:"One event, without wider context, is episodic."},
      {t:"An explainer on why youth unemployment drives protests across several countries", b:1, why:"It places events in causes and patterns."},
      {t:"An interview with one migrant worker about her journey", b:0, why:"A single personal story is episodic, however moving."},
      {t:"A report comparing how three governments’ policies affected migrant deaths at sea", b:1, why:"Policy comparison is thematic."}
    ]},
    {id:"e4u7-l2-x4", type:"mcq", q:"A small country is rarely in the foreign news, but appears for a week after an earthquake, then disappears. Which of Galtung and Ruge’s news values best explain the pattern?", options:[
      {t:"Threshold, unexpectedness and negativity, combined with a lack of reference to elite nations", ok:true, why:"Right. A large, sudden, negative event passes the threshold; without elite-nation status, the country drops out again once the event ends."},
      {t:"Continuity and consonance only", why:"Continuity would keep the story running; here it disappears. The key is a sudden, negative event in a non-elite nation."},
      {t:"Reference to elite people", why:"No famous person is involved in this description."},
      {t:"Shareability", why:"Harcup and O’Neill’s later value could play a part, but the pattern Galtung and Ruge described rests on threshold, negativity and elite nations."}
    ]},
    {id:"e4u7-l2-x5", type:"order", q:"Put Entman’s cascading activation model in order, from where frames usually start.", items:[
      {t:"The administration (the head of government and senior officials)", why:"In Entman’s model, frames usually start at the top."},
      {t:"Other elites (legislators, former officials, experts)", why:"They take up, adapt or contest the frame."},
      {t:"Journalists and news organisations", why:"They select and package frames from elite sources."},
      {t:"News texts (words and images)", why:"The frame becomes visible in coverage."},
      {t:"The public", why:"Audiences receive frames, and polls feed back up the cascade."}
    ]},
    {id:"e4u7-l2-x6", type:"mcq", q:"According to Robinson’s policy–media interaction model, when is media coverage most likely to change a government’s decision on intervention?", options:[
      {t:"When policy is uncertain and coverage is critical and framed with empathy for victims", ok:true, why:"Right. Both conditions are needed: an undecided government and coverage that criticises inaction."},
      {t:"Whenever coverage is heavy, whatever the government has decided", why:"The model’s point is that heavy coverage alone isn’t enough; a settled policy usually holds, as in Kosovo in 1999."},
      {t:"When coverage supports the government", why:"Supportive coverage reinforces policy; it doesn’t push it in a new direction."},
      {t:"Only when journalists are embedded with troops", why:"Embedding is a different issue. The model is about policy certainty and framing."}
    ]},
    {id:"e4u7-l2-x7", type:"spot", q:"A student summarises the propaganda model. Tap the statements that misrepresent it or its critics.", ask:"misrepresents", parts:[
      {t:"Herman and Chomsky (1988) proposed five filters, including ownership, advertising and sourcing.", flag:false, why:"Accurate."},
      " ",
      {t:"The model claims that governments directly censor every story.", flag:true, why:"The model explains consensus without direct censorship: filters work through markets and routines."},
      " ",
      {t:"“Flak” means organised pressure that punishes unwelcome reporting.", flag:false, why:"Accurate."},
      " ",
      {t:"Critics say it is hard to falsify and underplays journalists’ agency.", flag:false, why:"Accurate: these are two of the main critiques."},
      " ",
      {t:"Hallin’s Vietnam study proved the model correct, because coverage never turned critical.", flag:true, why:"Hallin found that coverage did turn critical when elites split, which fits indexing better than the propaganda model."}
    ]}
   ],
   apply:{intro:"Use the tools on real coverage you can find free online. Keep a note of each source, outlet and date.", tasks:[
    {t:"Frame one event, two outlets", how:["Choose one international event from the past month.","Find one report on it from an outlet based in a country directly involved, and one from an outlet elsewhere (many public broadcasters publish in English, Spanish, Arabic, French or Chinese).","Fill in Entman’s four functions for each, and label each story episodic or thematic."], write:"Event… Outlet A: problem, cause, moral judgement, remedy… Outlet B: … Episodic or thematic… What surprised me…"},
    {t:"News values audit", how:["Open the world or international page of a news site today.","For the top ten stories, note the country and which news values each one shows.","Count which regions appear, and which appear only through negative events."], write:"Ten stories and their news values… Regions present and absent… What a Galtung-and-Ruge reading suggests…"},
    {t:"Seminar questions", how:["Is the CNN effect a myth, as Robinson’s subtitle suggests, or a real but conditional effect?","Does the propaganda model describe the platforms era better or worse than the broadcast era?","Should researchers treat framing as something journalists do, something elites do, or something audiences do?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"A two-outlet framing table for one event, a news-values audit of ten stories, and a seminar paragraph."},
   read:[
    {book:"ospol", where:"Chapter 12, section 12.1 “The Media as a Political Institution: Why Does It Matter?” (the part “The Mediated Nature of Political Information”)", note:"Short definitions of gatekeeping, agenda setting and framing, with US examples."},
    {book:"eir", where:"Chapter 2 “Diplomacy” (Stephen McGlinchey)", note:"Background reading: how diplomacy works in public, which helps you see where media pressure enters foreign policy."}
   ]},
  /* ===================== LESSON 3 ===================== */
  {id:"e4u7-l3", title:"Platforms, protest and the networked public sphere", minutes:60,
   hook:{q:"In a large 2020 experiment with consenting Facebook and Instagram users in the United States, researchers switched some people from the usual algorithm-ranked feed to a simple chronological feed for three months. What happened to their political polarisation?", options:["It fell sharply","It rose sharply","No significant change was detected","People quit the platforms entirely"], answer:2, reveal:"**No significant change was detected**, although people spent less time on the platforms and saw different content (Guess and colleagues, *Science*, 2023). The finding doesn’t prove algorithms are harmless: it covers one country, one election and a few months. It shows why claims about platforms need evidence, which is this lesson’s theme, from the public sphere to protest and regulation."},
   goals:[
     "Explain Habermas’s public sphere, its critics, and the idea of a networked public sphere",
     "Weigh the evidence on social media’s role in protest, from the Arab uprisings to Hong Kong 2019 and Nepal 2025, without taking sides",
     "Summarise what research shows, and doesn’t show, about algorithms, filter bubbles and polarisation",
     "Compare how the EU, the United States, China and others govern platforms, and the arguments for and against each approach"
   ],
   learn:[
    {h:"The public sphere, briefly", body:[
      {lead:"Picture a coffee house in 18th-century London: strangers reading newspapers and arguing about politics as equals."},
      "That scene is the starting point of {{jurgen-habermas|Jürgen Habermas}}’s *The Structural Transformation of the Public Sphere* (1962; English translation 1989). The [[public-sphere|public sphere]] is the space between private life and the state where citizens discuss common affairs and form public opinion that governments must answer to. Habermas argued that the bourgeois public sphere of coffee houses, salons and the press later declined, as commercial mass media and public relations turned citizens into an audience.",
      "Critics reshaped the idea. Nancy Fraser’s “Rethinking the Public Sphere” (1990) showed that women, workers and minorities were excluded from that ideal space and formed their own [[counterpublic|counterpublics]]. Historians found public debate in many other settings, from print and teahouse cultures in East Asia to newspapers and associations in colonial India and Africa, so the European story is one case among many. In 2022 Habermas published a short book on a “new structural transformation”, warning that platforms fragment the public into many spaces without shared standards.",
      "Habermas died on 14 March 2026, aged 96. His ideas remain the yardstick in debates about platforms: do they widen the public sphere or break it apart?"
    ]},
    {h:"From mass media to a networked public sphere", body:[
      "Yochai Benkler’s *The Wealth of Networks* (2006) argued that the internet creates a [[networked-public-sphere|networked public sphere]]: many people can publish, link and correct, so gatekeeping moves from a few editors to the network. His later co-authored study *Network Propaganda* (2018) was less hopeful, finding that the networks of partisan sites around the 2016 US election were structured very differently on the right and the left. Later work stressed that platforms brought new gatekeepers: [[recommendation-algorithm|ranking algorithms]] and [[content-moderation|content moderation]] by companies.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="20" text-anchor="middle">Broadcast era: one to many</text><rect class="d-gold" x="125" y="36" width="90" height="34" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Editors</text><path class="d-ink" d="M150 70 L60 128" stroke-width="2" marker-end="url(#ar3)"/><path class="d-ink" d="M165 70 L130 128" stroke-width="2" marker-end="url(#ar3)"/><path class="d-ink" d="M175 70 L210 128" stroke-width="2" marker-end="url(#ar3)"/><path class="d-ink" d="M190 70 L280 128" stroke-width="2" marker-end="url(#ar3)"/><circle class="d-soft" cx="55" cy="142" r="12" stroke-width="2"/><circle class="d-soft" cx="128" cy="142" r="12" stroke-width="2"/><circle class="d-soft" cx="212" cy="142" r="12" stroke-width="2"/><circle class="d-soft" cx="285" cy="142" r="12" stroke-width="2"/><text class="s" x="170" y="178" text-anchor="middle">Audiences receive; few can reply</text><text x="170" y="214" text-anchor="middle">Networked era: many to many</text><rect class="d-rose" x="20" y="226" width="300" height="30" rx="8" stroke-width="2"/><text x="170" y="246" text-anchor="middle">Platform layer: ranking and moderation</text><circle class="d-sage" cx="60" cy="300" r="12" stroke-width="2"/><circle class="d-sage" cx="130" cy="330" r="12" stroke-width="2"/><circle class="d-sage" cx="170" cy="285" r="12" stroke-width="2"/><circle class="d-sage" cx="220" cy="335" r="12" stroke-width="2"/><circle class="d-sage" cx="285" cy="298" r="12" stroke-width="2"/><path class="d-ink" d="M72 302 L158 287 M68 310 L120 324 M142 330 L208 334 M180 294 L212 324 M182 287 L273 297 M230 328 L276 306" stroke-width="2"/><path class="d-ink" d="M60 288 L60 256 M170 273 L170 256 M285 286 L285 256" stroke-width="2" stroke-dasharray="4 3"/><text class="s" x="170" y="370" text-anchor="middle">Anyone can post; the platform decides reach</text></svg>', alt:"Two panels. Top, the broadcast era: a box labelled editors sends arrows down to four audience circles, with the note that audiences receive and few can reply. Bottom, the networked era: five connected user circles linked to each other, all connected by dashed lines up to a band labelled platform layer: ranking and moderation, with the note that anyone can post but the platform decides reach.", cap:"Gatekeeping didn’t disappear online; much of it moved to platforms."}
    ]},
    {h:"Social media and protest", body:[
      "When protests spread from Tunisia (December 2010) to Egypt (January 2011) and beyond, some commentators spoke of “Twitter revolutions”. Scholars soon pushed back from two directions. Malcolm Gladwell (2010) argued that online ties are weak and high-risk activism needs strong ties. Evgeny Morozov’s *The Net Delusion* (2011) warned that the same tools let governments watch and identify activists.",
      "Zeynep Tufekci’s *Twitter and Tear Gas* (2017), drawing on protests from Egypt to Turkey and Hong Kong in 2014, gave a more balanced account. Digital tools let movements grow very fast without building organisation; that speed can leave them fragile when they need to negotiate, change tactics or survive repression. W. Lance Bennett and Alexandra Segerberg called this style [[connective-action|connective action]]: personalised, networked participation instead of membership of formal organisations (see {{digital-activism}}).",
      {list:[
        "**Hong Kong, 2019.** Months of protest against a proposed extradition bill were coordinated largely through the online forum LIHKG and encrypted Telegram channels, with a leaderless “be water” style. Supporters described a defence of the city’s freedoms; the Hong Kong and central governments described violent unrest encouraged by foreign forces. The bill was withdrawn in October 2019, and a National Security Law took effect in June 2020, after which many outlets and groups closed.",
        "**Nigeria, 2020–22.** The #EndSARS movement against police abuse spread on social media; in June 2021 the government suspended Twitter after the platform deleted a presidential post, and lifted the suspension in January 2022.",
        "**Nepal, 2025.** In September 2025 the government blocked about two dozen platforms that had not registered under new rules. Mainly young protesters, angry also about corruption, took to the streets; dozens were killed, the ban was lifted, and the prime minister resigned."
      ]},
      "Governments also switch connectivity off. The digital rights group Access Now counted at least 313 [[internet-shutdown|internet shutdowns]] in 52 countries in 2025 (report published March 2026), with Myanmar the highest for the second year running. Governments usually justify shutdowns by security or exam cheating; rights groups argue they are disproportionate."
    ]},
    {h:"Algorithms, bubbles and polarisation: the evidence", body:[
      "Track 1 covered the basics ({{why-misinformation-spreads}}): reviews find [[filter-bubble|filter bubbles]] in news weaker than often claimed, and [[echo-chamber|echo chambers]] smaller, with self-selection mattering more than algorithms. Graduate seminars add the 2020 US election studies run by academics with Meta’s cooperation, published in *Science* and *Nature* in 2023:",
      {list:[
        "A chronological feed (Guess and colleagues) cut time on the platforms but didn’t measurably change polarisation over three months.",
        "Cutting exposure to like-minded sources by about a third (Nyhan and colleagues) also didn’t change polarisation, though like-minded content was common.",
        "Ideological segregation in news exposure was high and asymmetric (González-Bailón and colleagues): a large segment of the audience saw mostly right-leaning news, and most of the news that Meta’s fact-checkers had rated false circulated within that segment."
      ]},
      "Limits matter: one country, one election, a few months, and access granted by the company, which an independent observer of the project called “independence by permission”.",
      "Outside the US, closed messaging apps such as WhatsApp often matter more and are much harder to study, because groups are private and encrypted. After false rumours spread on WhatsApp were linked to mob killings in India in 2018, the company limited forwarding there to five chats at a time, and extended a similar limit worldwide in 2019. Researchers in Brazil, India and Nigeria have relied on volunteers donating messages from their own groups, or on tip lines run by fact-checkers, which gives a partial view."
    ]},
    {h:"Splinternet and digital sovereignty", body:[
      "A larger IR question sits above platform design: who sets the rules for the internet at all? Some governments speak of **digital sovereignty**, the right of a state to control data, platforms and information within its borders. China’s model, with many foreign platforms blocked and domestic ones licensed, is the strongest version; Russia, India and others have adopted parts of it, and the EU uses the phrase for its own regulatory approach. Critics warn of a **splinternet**, a global network breaking into national or regional pieces. Supporters reply that states have always regulated media within their borders, and that a few mostly US-based companies setting global rules is itself a problem. Anu Bradford’s *The Brussels Effect* (2020) adds that EU rules often spread globally because companies apply one standard everywhere."
    ]},
    {h:"Governing platforms", body:[
      "[[platform-governance|Platform governance]] means the rules that shape what platforms allow, rank and remove: laws, company policies and the bodies that enforce them ({{platform-governance}}). Three broad approaches are often contrasted:",
      {table:[
        ["Approach","Core rules","Main debate"],
        ["United States","Section 230 (1996) shields platforms from liability for most user posts; strong free-speech protection","Supporters: it lets speech flourish. Critics: it leaves harms unaddressed"],
        ["European Union","The [[digital-services-act|Digital Services Act]] (in force November 2022): risk assessments, audits, transparency and researcher access for the largest platforms","Supporters: accountability. Critics, including X and some US politicians: a tool for censorship"],
        ["China","Licensing, real-name registration, platform responsibility for content, and blocking of many foreign platforms","The government: order and sovereignty. Rights groups: censorship"]
      ]},
      "Under the DSA, a [[very-large-online-platform|very large online platform]] has at least 45 million monthly users in the EU, and fines can reach 6% of global annual turnover. The Commission’s first non-compliance decision, in December 2025, fined X €120 million over its blue check marks, advertising repository and researcher data access; X appealed. Other models include Germany’s NetzDG (2017), the UK’s Online Safety Act (2023), India’s IT Rules (2021) and Australia’s minimum age of 16 for social media accounts (from December 2025), plus company self-regulation such as Meta’s Oversight Board. [[intermediary-liability|Intermediary liability]] is the legal question running through them all."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Social media cause revolutions.”** They change how protest spreads and organises; causes lie in politics, economics and grievances.",
        "**“Algorithms trap everyone in bubbles.”** The evidence is weaker and more mixed, and most of it comes from the US.",
        "**“Regulation is simply censorship”** or **“regulation simply protects users”**: each law is a trade-off; analyse its rules, enforcement and effects."
      ]},
      {key:"The networked public sphere is wider than the old one, but it still has gatekeepers, now often companies and governments, and its effects on protest and polarisation are real but conditional."}
    ]}
   ],
   try:[
    {id:"e4u7-l3-x1", type:"mcq", q:"A seminar paper argues that online forums run by and for a diaspora community let it develop arguments that mainstream media ignored, before pushing them into national debate. Which concept fits best?", options:[
      {t:"Fraser’s counterpublics", ok:true, why:"Right. Fraser described parallel spaces where excluded groups develop their own interpretations, then contest wider public opinion."},
      {t:"Habermas’s refeudalisation of the public sphere", why:"That describes decline into passive audiences, not excluded groups building their own debate."},
      {t:"The CNN effect", why:"The CNN effect is about coverage changing government policy."},
      {t:"Indexing", why:"Indexing describes news following official debate, the opposite of an excluded group setting its own agenda."}
    ]},
    {id:"e4u7-l3-x2", type:"match", q:"Match each scholar to the argument.", pairs:[
      ["Malcolm Gladwell (2010)","Online ties are weak; high-risk activism needs strong ties","His New Yorker essay “Small Change” made the argument."],
      ["Evgeny Morozov (2011)","The same tools help governments watch and repress activists","*The Net Delusion* criticised “cyber-utopianism”."],
      ["Zeynep Tufekci (2017)","Movements can grow fast online but stay fragile without organisation","*Twitter and Tear Gas* calls this the power and fragility of networked protest."],
      ["Bennett and Segerberg","Personalised, networked participation replaces formal membership","They called it the logic of connective action."],
      ["Yochai Benkler (2006)","The internet creates a many-to-many networked public sphere","*The Wealth of Networks* made the more optimistic case."]
    ]},
    {id:"e4u7-l3-x3", type:"mcq", q:"Which description of the Hong Kong protests of 2019 meets the neutrality standard expected in a seminar paper?", options:[
      {t:"Protests against an extradition bill, coordinated largely through LIHKG and Telegram; supporters saw a defence of freedoms, while the Hong Kong and central governments described violent unrest encouraged by foreign forces", ok:true, why:"Right. It states verifiable facts and attributes each interpretation to those who hold it."},
      {t:"A heroic uprising for freedom crushed by the authorities", why:"This adopts one side’s framing as the author’s own."},
      {t:"Riots stirred up by foreign agents", why:"This adopts the governments’ framing as fact."},
      {t:"A Twitter revolution", why:"It is inaccurate (LIHKG and Telegram were central) and repeats the technology-centred claim scholars criticise."}
    ]},
    {id:"e4u7-l3-x4", type:"sort", q:"What did the 2023 studies of Facebook and Instagram in the 2020 US election find? Sort each claim.", buckets:["Supported by the studies","Not supported by the studies"], items:[
      {t:"A chronological feed reduced time spent on the platforms", b:0, why:"Guess and colleagues found people spent less time with a chronological feed."},
      {t:"A chronological feed sharply reduced political polarisation", b:1, why:"No significant change in polarisation was detected over three months."},
      {t:"Like-minded sources made up a large share of what users saw", b:0, why:"Nyhan and colleagues found like-minded content was common."},
      {t:"Cutting like-minded content made users much less polarised", b:1, why:"Reducing it by about a third did not measurably change polarisation."},
      {t:"News exposure was ideologically segregated, and the pattern was asymmetric", b:0, why:"González-Bailón and colleagues found high and asymmetric segregation."},
      {t:"The results apply to every country and every platform", b:1, why:"They cover one country, one election and Meta’s platforms over a few months."}
    ]},
    {id:"e4u7-l3-x5", type:"mcq", q:"Under the EU’s Digital Services Act, what makes a platform a “very large online platform” with the strictest duties?", options:[
      {t:"At least 45 million monthly active users in the EU", ok:true, why:"Right. The threshold is about 10% of the EU population; designated platforms must assess and reduce systemic risks."},
      {t:"Annual revenue above €1 billion", why:"The DSA uses user numbers, not revenue, for designation. Turnover matters only for the size of fines."},
      {t:"Headquarters inside the EU", why:"The DSA applies to services offered in the EU wherever the company is based."},
      {t:"Any platform that carries political ads", why:"Political ads have their own rules; designation depends on EU user numbers."}
    ]},
    {id:"e4u7-l3-x6", type:"order", q:"Put these events in date order, earliest first.", items:[
      {t:"Section 230 becomes US law", why:"It was part of the Communications Decency Act of 1996."},
      {t:"Protests spread from Tunisia to Egypt", why:"December 2010 to January 2011."},
      {t:"Germany’s NetzDG law is passed", why:"2017."},
      {t:"Protests in Hong Kong against the extradition bill", why:"2019."},
      {t:"The Digital Services Act enters into force", why:"16 November 2022."},
      {t:"The European Commission fines X €120 million under the DSA", why:"December 2025, the first non-compliance decision."}
    ]},
    {id:"e4u7-l3-x7", type:"spot", q:"Tap the claims in this op-ed paragraph that go beyond the evidence in this lesson.", ask:"goes beyond the evidence", parts:[
      {t:"Platforms now carry much of the world’s news.", flag:false, why:"Supported: in 2026 social and video networks led online news access across 48 markets."},
      " ",
      {t:"Their algorithms have trapped every user in a bubble, which is why our politics is so divided.", flag:true, why:"Reviews and the 2023 experiments found filter bubbles weaker than claimed and no measurable polarisation effect from feed changes in one large test."},
      " ",
      {t:"Governments sometimes respond to protests by shutting down the internet.", flag:false, why:"Supported by Access Now’s counts."},
      " ",
      {t:"Without Twitter, the protests in Egypt in 2011 would never have happened.", flag:true, why:"A counterfactual the evidence can’t support; scholars stress political and economic causes and many channels, including television and face-to-face networks."},
      " ",
      {t:"How to regulate platforms is debated, with different models in the EU, US and China.", flag:false, why:"An accurate summary of the debate."}
    ]}
   ],
   apply:{intro:"Investigate platforms and protest with public sources. Stay descriptive and attribute every interpretation.", tasks:[
    {t:"Trace one protest’s media ecology", how:["Choose a protest movement from any region since 2010.","List the channels it used (platforms, messaging apps, TV, word of mouth) and how the authorities responded online (blocking, shutdowns, arrests, their own messaging).","Write two neutral sentences: one on how supporters described it, one on how the government described it, each with a source."], write:"Movement, place and dates… Channels… Authorities’ response… Supporters’ framing (source)… Government’s framing (source)…"},
    {t:"Read a platform rule", how:["Open the transparency or community guidelines page of one platform you use.","Find one rule about political content or misinformation, and note what it allows, limits and removes.","Note whether the company says it applies the rule differently by country."], write:"Platform and page… The rule in my own words… What happens to content that breaks it… Country differences…"},
    {t:"Seminar questions", how:["Is the networked public sphere closer to Habermas’s ideal or further from it than the broadcast era?","Do digital tools help protesters or governments more in the long run?","Should platforms be regulated like publishers, like utilities, or not at all?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on one protest’s channels and the authorities’ response with two attributed framings, a platform rule summarised, and a seminar paragraph."},
   read:[
    {book:"ospol", where:"Chapter 12, section 12.4 “The Internet and Social Media”", note:"A short textbook account of how the internet and social media have changed political news."},
    {book:"dnr", where:"Executive summary (the findings on social and video networks, news creators and AI chatbots)", note:"Current survey evidence on how people reach news through platforms in 48 markets."}
   ]},
  /* ===================== LESSON 4 ===================== */
  {id:"e4u7-l4", title:"Information disorder, influence operations and AI", minutes:60,
   hook:{q:"In August 2023 Meta removed 7,704 Facebook accounts from a China-based network known as “Spamouflage”, calling it the largest known cross-platform covert influence operation in the world. How much real engagement did Meta find it got?", options:["Millions of genuine shares","Enough to change a national election","Very little: it struggled to reach beyond its own fake accounts","None, because it was stopped before posting"], answer:2, reveal:"**Very little.** Meta reported that the network also posted on more than 50 other platforms and forums but often failed to reach real audiences: much of its engagement came from its own fake accounts. Size isn’t impact. This lesson asks how researchers tell the two apart, and what fact-checking, prebunking, media literacy and AI rules can do."},
   goals:[
     "Use Wardle and Derakhshan’s framework to analyse information disorder beyond the basics",
     "Describe state and commercial influence operations with sourced cases from several regions, and judge attribution claims carefully",
     "Assess the impact of an operation with the Breakout Scale, without confusing size with effect",
     "Weigh the evidence on fact-checking, crowdsourced notes, prebunking and media literacy",
     "Explain generative AI and deepfakes in politics as of November 2026, including the liar’s dividend and new labelling rules"
   ],
   learn:[
    {h:"Beyond “fake news”", body:[
      {lead:"Track 1 taught you to sort content into misinformation, disinformation and malinformation. International studies asks who produces it, why, and with what effect on politics."},
      "A reminder: [[misinformation]] is false content shared without intent to harm; [[disinformation]] is false and deliberate; [[malinformation]] is true but used to harm (see {{misinformation-types}}). Claire Wardle and Hossein Derakhshan set out this three-way vocabulary in *Information Disorder* (Council of Europe, 2017), and called the whole field [[information-disorder|information disorder]] because “fake news” was both too narrow and a label politicians used against reporting they disliked.",
      "Their framework also has **three phases** (creation, production, distribution) and asks about the **agent**: official or unofficial, its motives (political, financial, social, psychological) and its intended audience. The phases matter because different people often do different jobs: a strategist creates a narrative, a contractor produces memes, and ordinary users distribute them, often sincerely.",
      "None of this is new. Harold Lasswell’s *Propaganda Technique in the World War* (1927) analysed First World War propaganda. In the Cold War the Soviet KGB ran “active measures”, such as a 1980s campaign spreading the false claim that the US military created HIV, while the US secretly funded broadcasters such as Radio Free Europe until 1971. What is new is cheap scale, targeting and the speed of platforms."
    ]},
    {h:"Influence operations today", body:[
      "Researchers use several overlapping terms. An [[influence-operation|influence operation]] is a coordinated effort to shape opinion, often hiding who is behind it. Meta’s policy term [[coordinated-inauthentic-behaviour|coordinated inauthentic behaviour]] focuses on networks of fake accounts working together. [[computational-propaganda|Computational propaganda]], a term from the Oxford Internet Institute, covers the use of bots, algorithms and big data to manipulate opinion; a [[troll-farm|troll farm]] is an organised group paid to post (see {{information-operations}}).",
      {list:[
        "**Russia and the United States, 2016.** The US Senate Intelligence Committee’s bipartisan report (2019) described the Internet Research Agency’s fake American personas on several platforms.",
        "**China-linked networks.** Meta’s 2023 Spamouflage takedown linked the network to individuals associated with Chinese law enforcement; its authentic reach was very low.",
        "**The United States and the Philippines.** A Reuters investigation (2024) reported that the US military ran fake accounts in 2020–21 that cast doubt on China’s Sinovac vaccine in the Philippines; the Pentagon said it uses social media to counter malign influence.",
        "**Domestic and commercial actors.** Jonathan Ong and Jason Cabañes’ *Architects of Networked Disinformation* (2018) interviewed the advertising and PR strategists behind paid political trolling in the Philippines. In 2018 the UN Fact-Finding Mission on Myanmar said Facebook had been a useful instrument for those spreading hate against the Rohingya, and the company admitted it had been too slow.",
        "**Scale.** The Oxford Internet Institute’s 2020 inventory found organised social media manipulation in 81 countries, with private firms involved in 48."
      ]},
      "Elections are a flashpoint. On 6 December 2024 Romania’s Constitutional Court annulled the first round of the presidential election after declassified intelligence reports alleged a coordinated online campaign and foreign interference; critics questioned the evidence, and the election was re-run in 2025.",
      {ex:"Claim: “Country X ran a fake-account network targeting our election.”\nWho says so? A government agency, a platform’s threat report, an independent lab, or several?\nWhat evidence? Technical signals (shared infrastructure, payment trails, account creation patterns), content (talking points matching state media), or leaked documents?\nHow confident? Reports often use graded language such as “linked to” or “with moderate confidence”: quote it exactly.\nWho disputes it? Note the accused government’s response and any independent challenge.\nWhat reach? Rate breakout separately from attribution.", label:"Worked example: weighing an attribution claim"},
      {warn:"Attribution (“this operation was run by state X”) usually comes from companies, governments or researchers, each with their own interests and evidence. In a seminar, say who attributed it, on what evidence, and whether others dispute it."}
    ]},
    {h:"Size is not impact", body:[
      "How do you measure an operation’s effect? Ben Nimmo’s **Breakout Scale** (2020) ranks operations by how far they spread beyond their starting point, which is observable, rather than by changes in votes or opinions, which are very hard to prove.",
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><path class="d-ink" d="M22 336 L22 22" stroke-width="2" marker-end="url(#ar4)"/><text class="s" x="14" y="14">Wider</text><rect class="d-rose" x="40" y="10" width="292" height="44" rx="8" stroke-width="2"/><text x="56" y="30">6</text><text x="76" y="30">Policy response or</text><text x="76" y="46">call for violence</text><rect class="d-rose" x="40" y="64" width="292" height="44" rx="8" stroke-width="2"/><text x="56" y="84">5</text><text x="76" y="84">Amplified by celebrities</text><text x="76" y="100">or politicians</text><rect class="d-gold" x="40" y="118" width="292" height="44" rx="8" stroke-width="2"/><text x="56" y="138">4</text><text x="76" y="138">Picked up by</text><text x="76" y="154">mainstream media</text><rect class="d-gold" x="40" y="172" width="292" height="44" rx="8" stroke-width="2"/><text x="56" y="192">3</text><text x="76" y="192">Several platforms,</text><text x="76" y="208">several communities</text><rect class="d-sage" x="40" y="226" width="292" height="52" rx="8" stroke-width="2"/><text x="56" y="246">2</text><text x="76" y="246">Spreads on one platform, or</text><text x="76" y="264">sits on many without spreading</text><rect class="d-sage" x="40" y="288" width="292" height="44" rx="8" stroke-width="2"/><text x="56" y="308">1</text><text x="76" y="308">One platform,</text><text x="76" y="324">stays in one community</text></svg>', alt:"A ladder of six boxes with an arrow pointing up labelled wider. From bottom: 1, one platform, stays in one community. 2, spreads beyond one community on one platform, or sits on many platforms without spreading. 3, several platforms, several communities. 4, picked up by mainstream media. 5, amplified by celebrities or politicians. 6, policy response or call for violence.", cap:"The Breakout Scale (Nimmo, 2020), simplified. Spamouflage posted on more than 50 platforms but rarely reached real people, so it rated low despite its size."},
      "The scale has a lesson for journalists and researchers too: reporting on a small operation can itself give it the mainstream breakout it lacked. Media researchers call the old newsroom habit of not amplifying some stories “strategic silence”; Joan Donovan and danah boyd argue instead for “strategic amplification”: deciding deliberately what to cover, and how. Some scholars add that the biggest effect of influence operations may be on **trust** itself: if people believe everything is manipulated, they may trust nothing."
    ]},
    {h:"Responses: fact-checking, prebunking and literacy", body:[
      "Professional [[fact-check|fact-checking]] grew fast in the 2010s; the International Fact-Checking Network (IFCN), launched at the Poynter Institute in 2015, sets a code of principles (see {{fact-checkers}}). Examples range from Africa Check and Argentina’s Chequeado to India’s BOOM and AFP’s multilingual service. Research suggests corrections reduce false beliefs modestly, and that the feared “backfire effect” (corrections making beliefs stronger) is rare (Wood and Porter, 2019).",
      "Platforms changed course. In January 2025 Meta announced it would end its third-party fact-checking programme in the United States in favour of [[crowdsourced-fact-checking|Community Notes]], a crowdsourced model like X’s; the US programme ended in April 2025. Supporters said crowds are faster and less open to accusations of bias; critics said notes come too late and too rarely on divisive topics.",
      "[[prebunking|Prebunking]] works earlier, like a vaccine: short warnings or games that show common manipulation techniques before people meet them. In a 2022 study in *Science Advances*, Jon Roozenbeek, Sander van der Linden and colleagues found that short videos (about 90 seconds) improved viewers’ recognition of techniques such as scapegoating and false dichotomies, including in a field test where two of the videos ran as YouTube ads. The browser game *Bad News* (2018) uses the same idea. [[media-literacy|Media literacy]] teaching, from [[lateral-reading]] to understanding algorithms, is the long-term response (see {{lateral-reading}} and {{countering-disinformation}}).",
      "Governments also legislate. Supporters of laws against false information, such as Singapore’s Protection from Online Falsehoods and Manipulation Act (2019), say they protect public order; critics, including press freedom groups, say such laws let governments decide what is true. Malaysia passed an Anti-Fake News Act in 2018 and repealed it the next year after a change of government."
    ]},
    {h:"Generative AI and deepfakes, as of November 2026", body:[
      "[[generative-ai|Generative AI]] makes [[synthetic-media|synthetic media]] cheap. Track 1 explained [[deepfake-video|deepfakes]] and why spotting them by eye is unreliable ({{ai-generated-content}}). For world politics, three points stand out ({{synthetic-media-politics}}):",
      {list:[
        "**Cases exist, but measurable electoral effects are hard to show.** Days before Slovakia’s September 2023 election, a fake audio clip of an opposition leader discussing vote-rigging spread online. Yet after the many elections of 2024, Meta reported that AI-generated content was under 1% of the election misinformation its fact-checkers rated, and researchers found little evidence that AI content changed results. Harms such as sexual deepfakes targeting women politicians are better documented.",
        "**The [[liars-dividend|liar’s dividend]].** Robert Chesney and Danielle Citron (2019) warned that once fakes are common, people caught on genuine recordings can dismiss them as fake.",
        "**Rules are arriving.** China’s rules requiring labels on AI-generated content took effect on 1 September 2025. In the EU, the AI Act’s transparency duties (Article 50) applied from 2 August 2026: providers must mark synthetic content in machine-readable form (with a grace period to 2 December 2026 for systems already on the market), and deployers must disclose deepfakes. [[content-credentials|Content Credentials]] are a voluntary industry standard."
      ]},
      "AI is also becoming a news source: in the *Digital News Report 2026*, 10% of respondents used AI chatbots for news each week, and 20% said they trusted chatbots’ answers. Things change fast here, so date every claim."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Only authoritarian states run influence operations.”** Documented operations involve democracies, authoritarian states, parties and PR firms.",
        "**“A big network means big impact.”** Measure breakout, and remember that reporting can amplify.",
        "**“Deepfakes decided the 2024 elections.”** The evidence so far points to smaller and different harms."
      ]},
      {key:"Ask who made it, how it spread, how far it broke out and who says so, then judge responses by evidence, not by how good they sound."}
    ]}
   ],
   try:[
    {id:"e4u7-l4-x1", type:"order", q:"A false story about a vaccine moves through Wardle and Derakhshan’s three phases. Put the steps in order.", items:[
      {t:"A strategist decides to spread doubt about a rival country’s vaccine", why:"Creation: the message is conceived."},
      {t:"A contractor makes memes and short videos with the claim", why:"Production: the message is turned into media."},
      {t:"Fake accounts post the content in local-language groups", why:"Distribution begins."},
      {t:"Worried parents share it with their families, believing it", why:"Further distribution by sincere users: now it is misinformation in their hands."}
    ]},
    {id:"e4u7-l4-x2", type:"sort", q:"Which kind of actor is behind each documented case?", buckets:["State or state-linked","Commercial or domestic political"], items:[
      {t:"The Internet Research Agency’s fake American personas in 2016", b:0, why:"The US Senate Intelligence Committee described it as a Russian, state-backed operation."},
      {t:"The Spamouflage network removed by Meta in 2023", b:0, why:"Meta linked it to individuals associated with Chinese law enforcement."},
      {t:"Fake accounts casting doubt on Sinovac in the Philippines, 2020–21", b:0, why:"Reuters reported it was run by the US military."},
      {t:"PR and advertising strategists hired for political trolling in the Philippines", b:1, why:"Ong and Cabañes documented commercial “architects of networked disinformation”."},
      {t:"Firms selling bot and amplification services, found by the Oxford Internet Institute in 48 countries", b:1, why:"These are private companies, though often hired by state actors or parties."}
    ]},
    {id:"e4u7-l4-x3", type:"mcq", q:"A network posts the same false claim on 30 platforms, but almost all its likes and shares come from its own fake accounts. Where does it sit on the Breakout Scale?", options:[
      {t:"Category 2: on many platforms, but not breaking out to real communities", ok:true, why:"Right. Presence on many platforms without breakout is category 2; that is roughly where Spamouflage sat."},
      {t:"Category 6, because the network is so large", why:"Category 6 needs a policy response or a call for violence. Size alone doesn’t raise the rating."},
      {t:"Category 4, because 30 platforms is wider than mainstream media", why:"Category 4 means pick-up by mainstream media, which hasn’t happened."},
      {t:"It can’t be rated until we know whether it changed votes", why:"The scale deliberately measures observable spread, because changes in votes are very hard to prove."}
    ]},
    {id:"e4u7-l4-x4", type:"mcq", q:"A journalist discovers a tiny fake-account network that nobody has noticed, and plans a front-page story. What does the “strategic silence” idea suggest she weigh?", options:[
      {t:"Whether the story would give the network the mainstream breakout it couldn’t achieve alone", ok:true, why:"Right. Coverage can move an operation from category 1 or 2 to category 4. Reporting may still be justified, but the risk should be weighed and the story framed carefully."},
      {t:"Whether the network broke the platform’s terms of service", why:"Relevant to the platform, but strategic silence is about amplification by the media."},
      {t:"Whether the fake accounts use AI-generated profile photos", why:"An interesting detail, but not the point of strategic silence."},
      {t:"Whether her editor agrees politically with the network’s message", why:"Political agreement shouldn’t decide coverage; amplification risk should be weighed."}
    ]},
    {id:"e4u7-l4-x5", type:"match", q:"Match each response to what it does.", pairs:[
      ["Fact-checking","Tests a specific claim after it spreads and publishes a verdict with sources","It works after the fact, with modest effects on belief."],
      ["Prebunking","Warns people about a manipulation technique before they meet it","Like a vaccine, it builds resistance in advance."],
      ["Crowdsourced notes","Lets users add context that appears when raters from different viewpoints agree","Meta adopted this model in the US in 2025, following X."],
      ["Content Credentials","Attaches a signed record of how a file was made and edited","A voluntary standard; missing credentials don’t prove a fake."],
      ["Strategic silence","Avoids amplifying small operations or hoaxes","An editorial choice to deny attention."]
    ]},
    {id:"e4u7-l4-x6", type:"mcq", q:"A minister caught on a genuine leaked recording says: “It’s obviously an AI fake.” Which concept describes the advantage he is trying to use?", options:[
      {t:"The liar’s dividend", ok:true, why:"Right. Chesney and Citron argued that widespread fakes let people dismiss genuine evidence as fake."},
      {t:"The CNN effect", why:"That concerns coverage pushing policy, not denial of real evidence."},
      {t:"Malinformation", why:"Malinformation is true content used to harm. The minister is denying a true recording, which is the liar’s dividend."},
      {t:"Prebunking", why:"Prebunking warns people about techniques in advance; it isn’t a denial strategy."}
    ]},
    {id:"e4u7-l4-x7", type:"spot", q:"Tap the claims in this policy memo that the evidence in this lesson doesn’t support.", ask:"unsupported", parts:[
      {t:"Documented influence operations have involved both democracies and authoritarian states.", flag:false, why:"Supported: cases include Russia, China-linked networks and the US military in the Philippines."},
      " ",
      {t:"AI deepfakes swung most of the elections held in 2024.", flag:true, why:"Meta reported AI content was under 1% of fact-checked election misinformation on its apps, and researchers found little evidence of changed results."},
      " ",
      {t:"Corrections usually backfire and strengthen false beliefs.", flag:true, why:"Wood and Porter (2019) and later studies found backfire effects are rare; corrections modestly reduce false beliefs."},
      " ",
      {t:"The EU’s AI Act requires deepfakes to be disclosed from 2 August 2026.", flag:false, why:"Supported: Article 50’s transparency duties applied from that date."},
      " ",
      {t:"Prebunking videos have been tested in a large field experiment on YouTube.", flag:false, why:"Supported: Roozenbeek and colleagues, *Science Advances*, 2022."}
    ]}
   ],
   apply:{intro:"Practise the analysis on real, public material. Never share or repost the false content you study; describe it instead.", tasks:[
    {t:"Read a takedown report", how:["Find a recent public report on an influence operation, such as a platform’s threat report or a research group’s analysis.","Note: who wrote it, who it attributes the operation to, the evidence given, the platforms and languages involved, and the reach reported.","Rate the operation on the Breakout Scale and say how confident you are."], write:"Report and author… Attribution and evidence… Platforms and languages… Reach… Breakout category and confidence…"},
    {t:"Try prebunking yourself", how:["Play a free prebunking game such as *Bad News* or *Harmony Square* in a browser (search for its name), or watch one short prebunking video.","Write down the techniques it taught (for example emotional language, scapegoating, impersonation).","Find one example of a technique in real news or posts this week, without sharing it."], write:"What I played or watched… Techniques… A real example (described, not shared)…"},
    {t:"Seminar questions", how:["Should researchers and journalists name small influence operations, or practise strategic silence?","Is the liar’s dividend a bigger threat to democracy than deepfakes themselves?","Who should decide what counts as disinformation: governments, platforms, fact-checkers or crowds?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"An analysis of one takedown report with a Breakout rating, notes on prebunking techniques with one real example, and a seminar paragraph."},
   read:[
    {book:"infodis", where:"Part 1 (the conceptual framework: types, phases and elements) and the recommendations", note:"The original framework, more detailed than Track 1’s summary."},
    {book:"ospol", where:"Chapter 12, section 12.5 “Declining Global Trust in the Media”", note:"A short textbook account of falling trust in the media."},
    {book:"wlsf", where:"Part I, Chapter 2 “Four Moves”", note:"A refresher on the practical checking moves, if you want to revisit Track 1."}
   ]},
  /* ===================== LESSON 5 ===================== */
  {id:"e4u7-l5", title:"Researching media in international studies", minutes:60,
   hook:{q:"On 14 August 2024 Meta shut down a free tool that thousands of researchers and journalists had used to track what was spreading on Facebook and Instagram. Which tool was it?", options:["GDELT","CrowdTangle","Media Cloud","The Wayback Machine"], answer:1, reveal:"**CrowdTangle.** Meta replaced it with the Meta Content Library, which has stricter access rules. GDELT, Media Cloud and the Wayback Machine are independent and still running as of November 2026. Data access shapes what can be researched, so this lesson covers where media data come from, how to analyse frames reliably, and how to do it ethically."},
   goals:[
     "Turn a media question into a defined corpus: outlets, dates, search terms and units",
     "Run a small framing analysis with a codebook, using deductive or inductive frames",
     "Choose news archives and datasets (including GDELT and Media Cloud) and explain their limits",
     "Apply research ethics to social media data: public versus private, harm, consent and safety"
   ],
   learn:[
    {h:"From question to corpus", body:[
      {lead:"Most media research in international studies starts with a question like: how did newspapers in three countries frame the same event?"},
      "The methods unit taught the basics of content and discourse analysis: the [[codebook]], [[intercoder-reliability|intercoder reliability]], manifest and latent content, and [[text-as-data|text as data]] (see {{discourse-analysis}}). This lesson applies them to news and platforms.",
      "First, define the **corpus** (the set of texts you will study). Four decisions shape it:",
      {list:[
        "**Outlets**: which ones, and why? Choose by audience reach, ownership type or political leaning, and say so. Mixing a national public broadcaster, a commercial tabloid and a party paper lets you compare.",
        "**Dates**: a window around the event, plus a baseline period before it if you want to see change.",
        "**Search terms**: in every language you study, including the words each side uses. A search for only one side’s name for a place or an event builds bias into the sample.",
        "**Unit of analysis**: the article, the paragraph, the headline, the image or the post."
      ]},
      {ex:"Question: How did English-language newspapers in Indonesia, Australia and India frame the outcome of a UN climate summit?\nOutlets: two national papers per country (one more liberal, one more conservative, by reputation and ownership).\nDates: from one week before to two weeks after the summit.\nSearch: the summit’s name and “climate” in headlines or lead paragraphs.\nUnit: the article; exclude letters and wire copy repeated word for word.", label:"Worked example: a corpus definition"}
    ]},
    {h:"Framing analysis in practice", body:[
      "There are two broad routes. **Deductive** framing analysis starts from a list of frames defined in advance. The most used list comes from Holli Semetko and Patti Valkenburg (2000), who identified five [[generic-frames|generic frames]] in European news: **conflict**, **human interest**, **economic consequences**, **morality** and **attribution of responsibility**. **Inductive** analysis reads a sample first and builds frames from the texts, which suits unfamiliar contexts but needs more care to stay replicable.",
      "Many codebooks turn each frame into yes/no questions, which coders can apply consistently:",
      {table:[
        ["Frame","Example yes/no question"],
        ["Conflict","Does the story reflect disagreement between parties or countries?"],
        ["Human interest","Does it give a human face or an individual’s story?"],
        ["Economic consequences","Does it mention costs, losses or gains?"],
        ["Morality","Does it contain a moral message or a reference to religion or ethics?"],
        ["Responsibility","Does it say a government, group or person is responsible?"]
      ]},
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-gold" x="30" y="8" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">1 Question and theory</text><path class="d-ink" d="M170 44 L170 56" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-gold" x="30" y="58" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="81" text-anchor="middle">2 Corpus: outlets, dates, terms</text><path class="d-ink" d="M170 94 L170 106" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-sage" x="30" y="108" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="131" text-anchor="middle">3 Draft codebook</text><path class="d-ink" d="M170 144 L170 156" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-sage" x="30" y="158" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="181" text-anchor="middle">4 Pilot: two coders, a sample</text><path class="d-ink" d="M170 194 L170 206" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-rose" x="30" y="208" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="231" text-anchor="middle">5 Check reliability</text><path class="d-ink" d="M30 226 L14 226 L14 126 L28 126" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="18" y="118">revise</text><path class="d-ink" d="M170 244 L170 256" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-sage" x="30" y="258" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="281" text-anchor="middle">6 Code the full corpus</text><path class="d-ink" d="M170 294 L170 306" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-gold" x="30" y="308" width="280" height="36" rx="8" stroke-width="2"/><text x="170" y="331" text-anchor="middle">7 Count, compare, interpret</text><text class="s" x="170" y="370" text-anchor="middle">Report the corpus, codebook, reliability</text><text class="s" x="170" y="388" text-anchor="middle">and limits, so others can repeat it</text></svg>', alt:"A vertical flow of seven steps: 1 question and theory; 2 corpus of outlets, dates and terms; 3 draft codebook; 4 pilot with two coders on a sample; 5 check reliability, with an arrow labelled revise looping back to the codebook; 6 code the full corpus; 7 count, compare and interpret. A note says to report the corpus, codebook, reliability and limits so others can repeat it.", cap:"A framing analysis workflow. The loop between reliability and the codebook is where most of the real work happens."},
      "Comparative studies across languages add a step: code texts in their original languages where you can, with coders who read each language well, and test the codebook’s translations so that “conflict” or “responsibility” means the same thing in each. Note where a frame has no close equivalent.",
      "Language models can now pre-code large corpora. Treat their output like a new coder: test it against a human-coded sample, report agreement, and check errors by language, since accuracy is often lower outside English."
    ]},
    {h:"Where to find the news: archives", body:[
      {list:[
        "**Library databases** such as Factiva, Nexis Uni and ProQuest hold full text from thousands of outlets. They need a subscription, usually through a university library.",
        "**National libraries’ digitised newspapers** are often free: Chronicling America (US Library of Congress), Trove (National Library of Australia), Europeana’s newspaper collections, and Japan’s National Diet Library Digital Collections, among others.",
        "**The Internet Archive** keeps the Wayback Machine (saved web pages) and a TV News Archive with searchable captions of broadcasts.",
        "**Outlets’ own archives** and official transcripts, and translation services such as BBC Monitoring (subscription), which follows foreign broadcasts, including state media."
      ]},
      "Every archive has gaps: paywalls, deleted posts, broken links, outlets that were never digitised. The methods unit called this [[archival-silence|archival silence]] (see {{archival-research}}). State in your methods section what your sources could not see."
    ]},
    {h:"Datasets and tools", body:[
      {table:[
        ["Tool","What it offers","Watch out for"],
        ["GDELT","Free, open data on world news (print, broadcast, web, 100+ languages), updated every 15 minutes, archives from 1979; machine-coded events and tone","Automated coding makes errors and duplicates; coverage favours large outlets"],
        ["Media Cloud","Open-source platform for searching online news by country collections, with attention-over-time charts and downloadable story lists","Story text isn’t released, only URLs; API quotas; about 20 languages"],
        ["Survey and index data","Reuters Institute *Digital News Report*, V-Dem media indicators, RSF scores","Measures of habits and freedom, not of content"]
      ]},
      "The Codex entry {{media-research-methods}} compares more sources. GDELT is the best-known source of [[event-data|event data]]: records of who did what to whom, when and where, extracted automatically from news. Because it is built from the news, it inherits the news values of Lesson 2: places the media ignore look quiet in the data. Validate any pattern against a sample of the articles behind it.",
      "Platform data are harder. Meta closed CrowdTangle on 14 August 2024; X ended free access to its interface for researchers in 2023. In the EU, the DSA’s [[researcher-data-access|researcher data access]] rules (a delegated act adopted on 2 July 2025) let researchers vetted by national Digital Services Coordinators request data from the largest platforms to study systemic risks. Access elsewhere depends on company programmes."
    ]},
    {h:"Ethics of studying social media", body:[
      "“It’s public, so I can use it” is the most common mistake. The Association of Internet Researchers’ *Internet Research: Ethical Guidelines 3.0* (2019, see {{social-media-research-ethics}}) asks researchers to weigh context, not only visibility. Helen Nissenbaum’s idea of [[contextual-integrity|contextual integrity]] explains why: information flows carry the norms of their context, so a post written for a few followers is not the same as a newspaper column.",
      {list:[
        "**Harm first.** Activists, minorities and people in authoritarian states can be endangered by being quoted or identified ([[do-no-harm]]). Exact quotes can be found by search, so paraphrase or aggregate.",
        "**Consent** is expected for private groups and small accounts, less for public figures and institutions acting publicly.",
        "**Your own safety.** Researching extremism or influence operations can bring harassment; plan data security and support ([[duty-of-care]]).",
        "**Rules.** Platform terms, data protection law and your [[ethics-committee|ethics committee]] all apply; scraping may be restricted."
      ]},
      "Two cases are still cited. In 2014 a Facebook study altered the news feeds of 689,003 users to test emotional contagion without their specific consent, prompting wide criticism. In 2018 it emerged that data on up to 87 million Facebook users, gathered through a personality quiz app, had reached the political consultancy Cambridge Analytica."
    ]},
    {h:"Writing it up", body:[
      "A media chapter in a thesis is judged on transparency: could another researcher repeat what you did and check your claims? The methods section should state the corpus (outlets, dates, search terms, number of items and how you removed duplicates), the codebook and where readers can see it (often an appendix), reliability results, and limits.",
      {ex:"“The corpus comprises 412 articles from four English-language dailies in Indonesia and Australia (two per country, selected for reach and contrasting editorial lines), published between 1 and 30 November, retrieved from a library news database with the search terms listed in Appendix A. Duplicate wire stories were removed. Two coders applied a five-frame codebook (Appendix B) adapted from Semetko and Valkenburg (2000); on a pilot sample of 60 articles, Krippendorff’s alpha ranged from 0.71 to 0.84 across frames. The design captures print-and-web coverage only and cannot speak to how readers interpreted it.”", label:"Worked example: a methods paragraph (invented figures)"},
      "Notice the final sentence. Framing analysis shows what texts offer; claims about effects on audiences need audience data, such as surveys, experiments or interviews. Mixing them (Lesson 2’s framing with Lesson 3’s audience evidence) is a common and strong design.",
      {list:[
        "**Misconception: “More articles means a better study.”** A clearly bounded, well-coded corpus beats a huge, vague one.",
        "**Misconception: “Computers remove bias.”** Automated tools inherit the biases of their training data and of the news they read.",
        "**Misconception: “Ethics approval is only for interviews.”** Studies of people’s posts and messages need it too."
      ]},
      {key:"Define the corpus, test the codebook, know your data’s blind spots, and protect the people behind the posts."}
    ]}
   ],
   try:[
    {id:"e4u7-l5-x1", type:"mcq", q:"A student studies how a border clash was reported in two neighbouring countries, but searches only for the place name used by one country’s government. What is the main problem?", options:[
      {t:"The sample is biased: articles using the other side’s name for the place will be missed", ok:true, why:"Right. Search terms must include each side’s vocabulary, in every language studied, or the corpus builds in one side’s framing."},
      {t:"The sample is too large to code", why:"Size isn’t the issue; who is left out is."},
      {t:"Place names don’t matter in framing analysis", why:"Names often carry claims and frames, which is exactly why they matter for sampling."},
      {t:"Only television should be studied for border clashes", why:"Any medium can be studied; the problem is the search strategy."}
    ]},
    {id:"e4u7-l5-x2", type:"sort", q:"Deductive or inductive framing analysis?", buckets:["Deductive","Inductive"], items:[
      {t:"Coding every article for Semetko and Valkenburg’s five generic frames", b:0, why:"The frames are defined in advance."},
      {t:"Reading 50 articles first and grouping recurring storylines into frames", b:1, why:"The frames emerge from the texts."},
      {t:"Testing whether Entman’s four functions appear in each story", b:0, why:"A predefined scheme applied to texts."},
      {t:"Building categories from interviews with local journalists before coding", b:1, why:"Categories emerge from the field, not from an existing list."},
      {t:"Using a published codebook from an earlier study to compare results", b:0, why:"Reusing an existing scheme is deductive and helps comparison."}
    ]},
    {id:"e4u7-l5-x3", type:"number", q:"Two coders independently code 80 articles for the conflict frame. They agree on 68. What is their simple percentage agreement?", answer:85, tol:0.5, unit:"%", why:"Agreement = 68 ÷ 80 = 0.85, so 85%. Remember from the methods unit that simple agreement flatters coders, because some agreement happens by chance; report a chance-corrected measure such as Krippendorff’s alpha too.", wrongs:[
      {v:15, tol:0.5, why:"That is the disagreement rate: 12 of 80 articles."},
      {v:68, tol:0.5, why:"That is the number of agreements, not a percentage. Divide by 80."},
      {v:117.6, tol:1, why:"That divides 80 by 68. Put the agreements on top: 68 ÷ 80."}
    ], hint2:"Agreements divided by total articles, times 100."},
    {id:"e4u7-l5-x4", type:"match", q:"Match each source to its best use.", pairs:[
      ["GDELT","Tracking machine-coded events and tone in world news over time","Free, open, updated every 15 minutes, back to 1979."],
      ["Media Cloud","Comparing attention to a topic across country collections of online news","It gives attention-over-time charts and story URL lists."],
      ["Trove or Chronicling America","Reading historical newspapers from one country, free","National libraries’ digitised collections."],
      ["Reuters Institute Digital News Report","Comparing how people in many countries get and trust news","A yearly survey, 48 markets in 2026."],
      ["TV News Archive","Searching captions of broadcast news","Part of the Internet Archive."]
    ]},
    {id:"e4u7-l5-x5", type:"mcq", q:"GDELT shows almost no events in a remote province for a decade. What is the most careful interpretation?", options:[
      {t:"The data may reflect low media coverage rather than an absence of events, so check other sources", ok:true, why:"Right. Event data built from news inherit news values: places the media ignore look quiet."},
      {t:"Nothing happened there", why:"That treats news coverage as a full record of events, which it isn’t."},
      {t:"GDELT deliberately excludes remote provinces", why:"There is no such rule; coverage depends on what the monitored media report."},
      {t:"The province must be under censorship", why:"Possible, but the data alone can’t show it. Low coverage has many causes."}
    ]},
    {id:"e4u7-l5-x6", type:"order", q:"Order the steps of a framing analysis.", items:[
      {t:"Set the research question and theory", why:"Everything else follows from the question."},
      {t:"Define the corpus: outlets, dates, search terms, unit", why:"You need a defined set of texts before coding."},
      {t:"Draft the codebook", why:"Categories, definitions, examples and rules."},
      {t:"Pilot with two coders and check reliability", why:"Testing shows where the codebook is unclear."},
      {t:"Revise the codebook, then code the full corpus", why:"Only a tested codebook should be applied to everything."},
      {t:"Count, compare and interpret, reporting limits", why:"Interpretation comes last, with transparency about methods."}
    ]},
    {id:"e4u7-l5-x7", type:"mcq", q:"A researcher wants to quote word for word from posts by activists in a country where criticising the government can lead to prison. The posts are public. What should she do?", options:[
      {t:"Paraphrase or aggregate, remove identifying details, and get ethics approval, because exact quotes can be traced by search", ok:true, why:"Right. Public visibility doesn’t remove the risk of harm; contextual integrity and do-no-harm guide the choice."},
      {t:"Quote them exactly, since public posts carry no ethical duties", why:"This is the “it’s public” mistake. The AoIR guidelines ask researchers to weigh context and harm."},
      {t:"Quote them but replace the usernames with “Activist A”", why:"Exact text can still be searched and traced back to the person."},
      {t:"Ask the government’s permission first", why:"That could itself endanger the activists. Ethics review and anonymisation are the right steps."}
    ]}
   ],
   apply:{intro:"Build a small, real piece of media research. Keep it ethical: public news articles, no private accounts, no reposting of harmful content.", tasks:[
    {t:"Design and pilot a framing codebook", how:["Choose an international event and define a small corpus: two outlets, a two-week window, search terms in each relevant language.","Write five yes/no questions, one for each of Semetko and Valkenburg’s frames, with an example and a borderline rule for each.","Code ten articles. If a friend agrees to help, ask them to code the same ten independently and calculate your percentage agreement."], write:"Event and corpus… My five questions with rules… Results for ten articles… Agreement (if a second coder helped)… What I would change in the codebook…"},
    {t:"Compare two data sources", how:["Search one topic in Media Cloud or GDELT (both have free web interfaces; Media Cloud may ask you to sign in).","Search the same topic in a news archive or a news site’s own search.","Note what each shows and hides."], write:"Topic… What the dataset showed… What the archive showed… Gaps and biases in each…"},
    {t:"Seminar questions", how:["Can a deductive framing study ever capture how a story is understood in a culture very different from the one the frames were built in?","Should researchers use posts by ordinary people without consent if those posts were public?","Does relying on news-based event data make IR research see the world through the media’s news values?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"A corpus definition and a five-question codebook tried on ten articles, a comparison of a dataset and an archive, and a seminar paragraph."},
   read:[
    {book:"bhatt", where:"Chapter 13, “Qualitative Analysis” (the part on content analysis) and Chapter 16, “Research Ethics”", note:"A short methods-textbook account of content analysis and research ethics to set beside this lesson."},
    {book:"hurst", where:"Background reading: Chapter 17, “Content Analysis”, and Chapter 18, “Data Analysis and Coding”", note:"Useful for inductive coding: building categories from the texts themselves."}
   ]}
  ],
  checkpoint:["e4u7-q02","e4u7-q06","e4u7-q11","e4u7-q15","e4u7-q17","e4u7-q20","e4u7-q24","e4u7-q26","e4u7-q29","e4u7-q32","e4u7-q40","e4u7-q44"],
  codex:[
   {id:"media-systems", title:"Comparing media systems", aka:["Hallin and Mancini’s three models","Media system typologies"], tags:["media","comparative politics","international studies"],
    summary:"How scholars compare national media systems: from *Four Theories of the Press* (1956) to Hallin and Mancini’s three models (2004) and their extensions beyond the West.",
    levels:{
     starter:[
      "A media system is the whole set of a country’s news organisations together with the markets, laws and political ties around them. Comparing systems explains why the same world event is told so differently in different places.",
      "The best-known comparison is Daniel Hallin and Paolo Mancini’s *Comparing Media Systems* (2004). Looking at 18 democracies in Western Europe and North America, they described three models: **Polarised Pluralist** (Mediterranean), **Democratic Corporatist** (North and Central Europe) and **Liberal** (North Atlantic).",
      {key:"Compare systems on several dimensions at once; the models are types, not a ranking."},
      "Think of the models as recipes with the same four ingredients in different amounts: a mass or elite press, ties to political parties, journalists’ professional autonomy, and the role of the state."
     ],
     builder:[
      "**The four dimensions:** the development of media markets (especially a mass-circulation press), [[political-parallelism|political parallelism]], [[journalistic-professionalism|journalistic professionalism]], and the role of the state.",
      {table:[["Model","Typical pattern"],["Polarised Pluralist","Elite press, high parallelism, weaker professional autonomy, interventionist state"],["Democratic Corporatist","Mass press, history of party papers, strong professionalism, strong state with press-freedom protections"],["Liberal","Commercial press, neutral-professional ideal, limited state role"]]},
      "**How to use it.** In a seminar paper, place each country on each dimension with evidence (circulation figures, ownership data, journalists’ surveys, laws), then say which model it resembles and where it doesn’t fit. The dimensions travel better than the three labels.",
      "**Predecessor.** Siebert, Peterson and Schramm’s *Four Theories of the Press* (1956) is now read mainly as a Cold War normative text, useful as history of the field."
     ],
     pro:[
      "**Revisions and tests.** Hallin and Mancini suggested a gradual drift towards the Liberal model, later qualified as incomplete and uneven. Brüggemann, Engesser, Büchel, Humprecht and Castro (*Journal of Communication*, 2014) turned the dimensions into indicators and found four empirical clusters among Western systems, and suggested splitting the role of the state into several sub-dimensions.",
      "**Beyond the West.** Hallin and Mancini’s edited *Comparing Media Systems Beyond the Western World* (2012) brought in cases such as China, Russia, Brazil, South Africa, Israel, Lebanon, Saudi Arabia and Thailand. Duncan McCargo’s chapter introduced “partisan polyvalence” for media that play many shifting political roles. Other scholars argue that concepts such as clientelism, [[media-capture|media capture]] and hybrid regimes matter more outside established democracies than the original dimensions.",
      "**Digital critique.** Andrew Chadwick’s *The Hybrid Media System* (2013) and later work ask whether national system models still work when platforms cross borders. A common answer is that national systems still shape journalism, regulation and audiences, but must now be studied together with transnational platforms.",
      "**Neutrality note.** Labels such as [[state-media|state media]] are contested in practice; classify by governance and editorial evidence, and attribute contested judgements."
     ]},
    related:["press-freedom-indices","media-technology","platform-governance"],
    read:[{book:"ospol", where:"Chapter 12, section 12.2 “Types of Media and the Changing Media Landscape”"}],
    sources:[{t:"Brüggemann et al., “Hallin and Mancini Revisited” (TU Dresden research portal)", url:"https://fis.tu-dresden.de/portal/en/publications/hallin-and-mancini-revisited(990b3204-a56e-476f-827f-71320dc99a2a).html"},{t:"Cambridge Core: “Partisan polyvalence”, in Comparing Media Systems Beyond the Western World", url:"https://www.cambridge.org/core/books/comparing-media-systems-beyond-the-western-world/partisan-polyvalence/C3FC50A8AEF3D64339F2E7E33657A1FC"}],
    checked:"2026-11"},

   {id:"press-freedom-indices", title:"Press freedom indices", aka:["RSF World Press Freedom Index","Media freedom ratings"], tags:["media","measurement","human rights"],
    summary:"What RSF, Freedom House and V-Dem measure about media freedom, how they do it, and how to read them critically (as of November 2026).",
    levels:{
     starter:[
      "A press freedom index gives each country a score or rank for how freely journalists can work. The most quoted is the World Press Freedom Index by Reporters Without Borders (RSF), published every year since 2002 for 180 countries and territories.",
      "Indices are useful for spotting trends and for comparing places, but they are estimates built with methods, not exact measurements. A country ranked 60th is not clearly freer than one ranked 61st.",
      {key:"Read the indicator scores and the method note, not just the rank."},
      "RSF’s 2026 Index (published 30 April 2026) reported the lowest average score in its 25-year history, with more than half of countries in its two worst categories for the first time."
     ],
     builder:[
      {table:[["Index","Method in brief"],["RSF (since 2002)","Five indicators (political, legal, economic, sociocultural, safety), each 0–100 and weighted equally; a tally of abuses plus questionnaires answered by press freedom specialists"],["Freedom House","Media questions inside *Freedom in the World* and *Freedom on the Net*; its separate *Freedom of the Press* report ended after 2017"],["V-Dem","Expert-coded media indicators in a yearly dataset with long historical coverage and a statistical measurement model"]]},
      "**RSF bands:** good (85–100), satisfactory (70–85), problematic (55–70), difficult (40–55), very serious (0–40). The safety indicator combines questionnaire answers with an abuses score adjusted for population and severity.",
      "**How to use them.** Quote the edition year, the score and the indicator scores; compare at least two sources; and use V-Dem when you need consistent time series for research."
     ],
     pro:[
      "**Critiques.** (1) Expert judgement depends on who answers and how they interpret questions. (2) Ranks magnify small score differences. (3) Some scholars argue the indices embed a liberal, market-based model of independence and undercount commercial and economic pressures; RSF’s 2022 method revision added an explicit economic indicator. (4) Abuse counts depend on reporting, which can be weakest where repression is strongest. (5) Governments that rank poorly often reject the indices as politically biased; analysts should note such responses neutrally.",
      "**Validity checks.** Researchers compare indices with each other and with event data on attacks on journalists (for example, counts kept by press freedom groups). High correlation between indices doesn’t prove validity, since they can share sources and assumptions.",
      "**As of November 2026.** RSF reported that in its 2026 Index 52.2% of countries were rated “difficult” or “very serious”, against 13.7% in 2002, and that only seven countries, all in northern Europe and led by Norway, were rated “good”. These figures change every year: date them."
     ]},
    related:["media-systems","countering-disinformation"],
    sources:[{t:"RSF: The methodology used for compiling the World Press Freedom Index 2026", url:"https://rsf.org/en/methodology-used-compiling-world-press-freedom-index-2026"},{t:"Euronews: Global press freedom at lowest level in 25 years (30 April 2026)", url:"https://www.euronews.com/2026/04/30/global-press-freedom-at-lowest-level-in-25-years-reporters-without-borders-report-shows"}],
    checked:"2026-11"},

   {id:"agenda-setting-theory", title:"Agenda setting and priming", aka:["Agenda-setting theory"], tags:["media effects","public opinion","foreign policy"],
    summary:"The finding that media shape which issues people think important (McCombs and Shaw, 1972), its second level, and priming (Iyengar and Kinder, 1987).",
    levels:{
     starter:[
      "Agenda setting is the idea that the news influences what people think about, more than what they think. If the news covers a border dispute every night, more people will name it as an important problem.",
      "Bernard Cohen put it memorably in *The Press and Foreign Policy* (1963): the press may not often succeed in telling people what to think, but it is “stunningly successful” in telling them what to think about. Maxwell McCombs and Donald Shaw tested this in the 1968 US election and published their study in 1972.",
      {key:"Media set the agenda most strongly on issues people can’t see for themselves, such as foreign affairs."},
      "The sociology primer’s term [[agenda-setting]] gives the basic definition; this entry adds the research and the debates."
     ],
     builder:[
      "**The Chapel Hill study.** McCombs and Shaw compared undecided voters’ ranking of issues with the amount of coverage each issue received in the news media they used, and found a very close match. Later studies used panels and experiments to show that coverage tends to come before public concern, not just alongside it.",
      "**Second-level agenda setting** concerns attributes: which features of an issue or a leader the news stresses (competence, honesty, danger). It overlaps with framing.",
      "**[[priming|Priming]]** (Iyengar and Kinder, *News That Matters*, 1987) is the next step: issues the news stresses become the standards people use to judge leaders.",
      "**Using it in IR.** Agenda setting explains why some crises attract public pressure for action and others don’t, and links to news values (which events are covered at all) and to the CNN effect debate."
     ],
     pro:[
      "**Who sets the media’s agenda?** “Agenda building” research studies how governments, interest groups and other media (intermedia agenda setting) shape coverage. In foreign policy, officials usually have strong influence, which connects to Bennett’s indexing hypothesis.",
      "**Platforms.** With fragmented, personalised feeds, some scholars expect weaker shared agendas; others find that a few big stories still dominate attention across outlets and platforms. Measuring the public agenda now often uses search and social data as well as surveys, each with biases.",
      "**Cross-national evidence.** Agenda effects have been found in many countries, but strength varies with the media system, trust in news and how far audiences share the same outlets. A careful paper reports the measure of public salience (for example, the “most important problem” survey question) and the time lag tested."
     ]},
    related:["framing-theory","cnn-effect","media-technology"],
    read:[{book:"ospol", where:"Chapter 12, section 12.1 “The Media as a Political Institution: Why Does It Matter?”"}],
    sources:[{t:"Britannica: The Agenda-Setting Function of Mass Media", url:"https://www.britannica.com/topic/The-Agenda-Setting-Function-of-Mass-Media"},{t:"OpenStax: Introduction to Political Science", url:"https://openstax.org/details/books/introduction-political-science"}],
    checked:"2026-11"},

   {id:"framing-theory", title:"Framing in the news", aka:["Media framing","Frame analysis"], tags:["media effects","discourse","methods"],
    summary:"Entman’s definition of framing (1993), episodic and thematic frames (Iyengar 1991), cascading activation (Entman 2004) and how frames connect to IR theory.",
    levels:{
     starter:[
      "A frame is the angle a story takes: what it treats as the problem, who it blames, and what it suggests should happen. The same event, such as boats of people arriving on a coast, can be framed as a security threat or as a humanitarian emergency.",
      "Robert Entman’s 1993 definition is the one most often quoted: framing selects some aspects of reality and makes them more salient, to promote a problem definition, a causal interpretation, a moral evaluation and a treatment recommendation.",
      {key:"Frames don’t tell you what to think, but they shape which way of thinking feels natural."},
      "The sociology primer’s [[framing]] is about social movements; [[media-framing|media framing]] applies the same idea to news."
     ],
     builder:[
      "**Four functions as a checklist:** problem, cause, moral judgement, remedy. A story doesn’t need all four.",
      "**[[episodic-thematic-framing|Episodic and thematic frames]]** (Shanto Iyengar, *Is Anyone Responsible?*, 1991): stories about single cases encourage individual blame; stories about context encourage blame on governments and society.",
      "**[[cascading-activation|Cascading activation]]** (Entman, *Projections of Power*, 2004): in foreign policy, frames usually cascade from the administration to other elites, journalists, news texts and the public, with feedback upwards. Elite disagreement opens space for rival frames.",
      "**Generic and issue-specific frames.** Some frames recur across topics, such as Semetko and Valkenburg’s conflict, human interest, economic consequences, morality and responsibility; others belong to one issue."
     ],
     pro:[
      "**A “fractured paradigm”.** Entman’s title acknowledged that framing was used loosely. Scholars still distinguish frames in texts, in journalists’ routines, in elite strategies and in audiences’ minds; effects studies (framing effects) and content studies (frames in news) answer different questions.",
      "**Links to IR theory.** Constructivists treat frames as part of how shared meanings are made; securitisation can be read as a contest over the security frame; discourse analysts go further, treating frames as part of wider discourses with power effects (see {{discourse-analysis}}).",
      "**Measurement.** Frames are latent content, so reliability is a constant concern. Good studies publish codebooks, report chance-corrected agreement, and validate automated methods against human coding.",
      "**Critiques.** Framing can become a catch-all; some argue it overlaps too much with agenda setting and priming. Others note that audiences negotiate frames rather than absorbing them."
     ]},
    related:["agenda-setting-theory","media-research-methods","discourse-analysis","securitization-theory"],
    read:[{book:"ospol", where:"Chapter 12, section 12.1 (the part “The Mediated Nature of Political Information”)"}],
    sources:[{t:"OpenStax: Introduction to Political Science", url:"https://openstax.org/details/books/introduction-political-science"}],
    checked:"2026-11"},

   {id:"cnn-effect", title:"The CNN effect", aka:["Media effect on foreign policy","Policy–media interaction model"], tags:["foreign policy","humanitarian intervention","media"],
    summary:"The claim that live, emotive coverage drives foreign policy, Livingston’s three effects (1997), Robinson’s policy–media interaction model (2000, 2002) and the indexing critique.",
    levels:{
     starter:[
      "The CNN effect is the idea that dramatic, round-the-clock television coverage can push governments into foreign policy decisions, especially sending help or troops to humanitarian crises. The name comes from the 24-hour news channel that covered the 1991 Gulf War and crises that followed.",
      "Research found the effect real but conditional. News sometimes speeds decisions up or makes them harder, but it rarely forces a government to change a settled policy.",
      {key:"Coverage matters most when governments haven’t made up their minds."},
      "Today the debate continues with social media: do viral images of suffering change what governments do? The same questions apply: was policy already decided, and did coverage criticise inaction or support it?"
     ],
     builder:[
      "**Livingston’s three effects (1997):** an accelerant (faster decisions), an impediment (images of casualties making intervention harder, as after the deaths of US soldiers in Mogadishu in 1993) and agenda setting.",
      "**Robinson’s [[policy-media-interaction-model|policy–media interaction model]]:** media influence is likely when policy is uncertain and coverage is critical and empathy-framed. In his 2000 *Journal of Peace Research* article and 2002 book, the US decision to defend the Gorazde safe area in Bosnia (1995) fitted this pattern, while the Kosovo air campaign (1999) continued despite critical coverage.",
      "**Somalia (1992).** Studies found that coverage largely followed official attention rather than leading it, weakening the classic example of the effect."
     ],
     pro:[
      "**[[indexing-hypothesis|Indexing]].** W. Lance Bennett (1990) argued that news indexes its range of views to the range of debate among officials, which predicts that media rarely lead. Cascading activation (Entman, 2004) offers a middle position.",
      "**Neglect.** The thin and often misleading early coverage of the 1994 genocide in Rwanda is cited as evidence of a reverse problem: media neglect that may have reduced pressure to act.",
      "**Beyond CNN.** Research now asks about “Al Jazeera effects”, social media virality and the role of non-Western broadcasters. Robinson and others caution that the same conditions (policy uncertainty, framing) still apply.",
      "**Method.** Process tracing ({{process-tracing}}) is the usual design: establish the timing of coverage and of decisions, using memoirs, declassified documents and interviews."
     ]},
    related:["agenda-setting-theory","framing-theory","propaganda-model"],
    sources:[{t:"PRIO: Robinson, “The Policy-Media Interaction Model” (Journal of Peace Research, 2000)", url:"https://www.prio.org/Publications/Publication/?x=2014"},{t:"Routledge: The CNN Effect: The Myth of News, Foreign Policy and Intervention", url:"https://www.routledge.com/products/9780203995037"}],
    checked:"2026-11"},

   {id:"propaganda-model", title:"The propaganda model", aka:["Manufacturing Consent","Five filters"], tags:["political economy","media","critical theory"],
    summary:"Herman and Chomsky’s five-filter model of how commercial news stays within elite consensus (1988), with the main critiques and replies.",
    levels:{
     starter:[
      "In *Manufacturing Consent: The Political Economy of the Mass Media* (Pantheon, 1988), the economist Edward Herman and the linguist Noam Chomsky asked why mainstream US news rarely challenged the foreign policy consensus, even without censorship.",
      "Their answer was a set of five filters that news passes through before it reaches the public: ownership, advertising, sourcing, flak and a shared enemy ideology (anti-communism during the Cold War).",
      {key:"The propaganda model explains consensus through markets and routines, not orders from above."},
      "It is one of the most cited, and most argued about, works in media studies."
     ],
     builder:[
      {ol:["**Size, ownership and profit orientation** of large media firms.","**The advertising licence**: media depend on advertisers.","**Sourcing**: reliance on official and corporate sources.","**[[flak|Flak]]**: organised criticism that punishes unwelcome coverage.","**Anti-communism** as a control mechanism; after the Cold War, the authors and later scholars argued that fear of other enemies, such as terrorism, could play a similar role."]},
      "**Evidence.** Paired comparisons, such as “worthy” and “unworthy” victims: far more coverage of a priest murdered in communist Poland in 1984 than of murdered clergy in US-allied Latin American states.",
      "**Using it.** Ask of any coverage: who owns the outlet, who advertises, which sources are quoted, what pressure follows critical stories, and which enemy frames are taken for granted."
     ],
     pro:[
      "**Critiques.** (1) It leaves too little room for journalists’ agency and professional norms. (2) It is hard to falsify, since critical stories can be explained away. (3) Daniel Hallin’s *The “Uncensored War”* (1986) found that Vietnam coverage became critical when elites divided, which fits indexing. (4) It was built on pre-internet US media.",
      "**Replies.** Supporters argue it predicts patterns, not every story; that later studies have applied it to the UK and elsewhere; and that its filters (ownership, sourcing, flak) describe state-controlled and platform media too.",
      "**Where it sits.** It belongs to the critical political economy of media, alongside work on [[media-consolidation]] and [[media-capture]]. In IR seminars it is often paired with Gramscian ideas of [[hegemony]] and with Cox’s question of whom theory serves ({{robert-cox}})."
     ]},
    related:["cnn-effect","framing-theory","media-systems","robert-cox"],
    sources:[{t:"Wikipedia: Manufacturing Consent (bibliographic overview)", url:"https://en.wikipedia.org/wiki/Manufacturing_Consent"}],
    checked:"2026-11"},

   {id:"johan-galtung", title:"Johan Galtung", aka:["Galtung"], tags:["thinker","peace research","media"],
    summary:"Norwegian sociologist (1930–2024) who founded peace research, co-wrote the classic study of news values (1965) and proposed peace journalism.",
    levels:{
     starter:[
      "Johan Galtung was a Norwegian sociologist and mathematician who helped invent peace and conflict studies as an academic field. He founded the Peace Research Institute Oslo (PRIO) in 1959 and the *Journal of Peace Research* in 1964.",
      "He is known for distinguishing **negative peace** (the absence of war) from **positive peace** (justice and cooperation), and for the idea of **structural violence**: harm built into social arrangements, such as poverty that shortens lives.",
      "In media studies he is known for “The Structure of Foreign News” (1965), written with Mari Holmboe Ruge.",
      {key:"Galtung asked why the news shows the world as it does, and how journalism could serve peace."},
      "He died on 17 February 2024, aged 93."
     ],
     builder:[
      "**News values (1965).** Studying four Norwegian newspapers’ coverage of the Congo, Cuba and Cyprus crises, Galtung and Ruge proposed twelve [[news-values|factors]], including threshold, unexpectedness, meaningfulness, consonance, continuity, reference to elite nations and elite people, personalisation and negativity. Their warning: news from less powerful places arrives mainly as sudden negative events.",
      "**Updates.** Tony Harcup and Deirdre O’Neill (2001, 2017) revised the list for modern and social media news, adding values such as entertainment, celebrity and shareability.",
      "**[[peace-journalism|Peace journalism]].** Galtung contrasted “war journalism” (violence, winners and losers, elite voices) with peace journalism (causes, all parties’ voices, solutions). Jake Lynch and Annabel McGoldrick developed it for practising journalists."
     ],
     pro:[
      "**Critiques.** The 1965 factors were hypotheses from one country’s press; later studies tested them with mixed results and pointed out that news values describe outputs better than the decisions that produce them. Critics of peace journalism argue it asks reporters to take a normative stance that conflicts with detachment; supporters reply that conventional war reporting is not neutral either.",
      "**Wider legacy.** Structural violence and positive peace shaped development and security studies, and the IR primer’s [[negative-peace]] and [[positive-peace]] terms come from him.",
      "**Controversies.** Some of his later public statements drew strong criticism, including accusations of antisemitism, which he rejected."
     ]},
    related:["agenda-setting-theory","cnn-effect"],
    sources:[{t:"Department of Peace and Conflict Research: Johan Galtung 1930–2024", url:"https://www.uu.se/en/department/peace-and-conflict-research/news/archive/2024-05-07-johan-galtung-1930-2024"},{t:"PRIO news: on Johan Galtung’s passing", url:"https://www.prio.org/news/3731"}],
    checked:"2026-11"},

   {id:"jurgen-habermas", title:"Jürgen Habermas", aka:["Habermas","The public sphere"], tags:["thinker","critical theory","public sphere"],
    summary:"German philosopher (1929–2026) whose theory of the public sphere (1962) remains the starting point for debates about media, platforms and democracy.",
    levels:{
     starter:[
      "Jürgen Habermas was a German philosopher and sociologist of the Frankfurt School tradition, born in Düsseldorf on 18 June 1929. He died in Starnberg on 14 March 2026, aged 96.",
      "His first major book, *The Structural Transformation of the Public Sphere* (1962; English translation 1989), described the [[public-sphere|public sphere]]: a space where private people come together as a public to discuss common affairs, forming opinion that governments must answer to.",
      {key:"For Habermas, democracy needs a public sphere where arguments, not status or money, decide."},
      "He was also a prominent public intellectual in Germany and Europe for six decades, writing on democracy, European integration and Germany’s past."
     ],
     builder:[
      "**The argument of 1962.** In 18th-century Britain, France and Germany, coffee houses, salons and newspapers created a bourgeois public sphere of rational-critical debate. Later, commercial mass media, advertising and public relations turned the public into consumers of opinion, a decline he called “refeudalisation”.",
      "**Later work.** *The Theory of Communicative Action* (1981) grounded his hopes in communication aimed at mutual understanding; *Between Facts and Norms* (1992) developed deliberative democracy. In 2022 he published *A New Structural Transformation of the Public Sphere and Deliberative Politics* (English 2023), warning that platforms fragment publics.",
      "**Using him.** Ask whether a media space allows open access, equal standing and argument on common matters, and who is excluded."
     ],
     pro:[
      "**Critics.** Nancy Fraser (1990) argued that the bourgeois public sphere excluded women, workers and others, who formed [[counterpublic|counterpublics]]; she proposed plural publics. Historians questioned the timeline and showed public debate in many societies outside Europe. Others criticise the stress on rational argument, which can sideline emotion, testimony and protest as legitimate political speech.",
      "**Global and digital publics.** Scholars debate a transnational public sphere (for example, around the EU or global movements) and the [[networked-public-sphere|networked public sphere]] (Benkler, 2006). Habermas himself became sceptical that platform publics meet his standards.",
      "**In IR.** His ideas fed critical theory and deliberative approaches in IR, including work on argument and persuasion in international negotiations (for example, Thomas Risse’s “Let’s Argue!”, 2000)."
     ]},
    related:["digital-activism","platform-governance","robert-cox"],
    sources:[{t:"Suhrkamp: On the passing of Jürgen Habermas", url:"https://www.suhrkamp.de/rights/nachricht/on-the-passing-of-juergen-habermas-b-5028"},{t:"PBS NewsHour: Influential German philosopher Jürgen Habermas dies at 96", url:"https://www.pbs.org/newshour/world/influential-german-philosopher-jurgen-habermas-dies-at-96"}],
    checked:"2026-11"},

   {id:"digital-activism", title:"Social media, protest and shutdowns", aka:["Networked protest","Connective action"], tags:["social movements","platforms","human rights"],
    summary:"What research says about social media in protest, from the Arab uprisings to Hong Kong 2019 and Nepal 2025, and about internet shutdowns (as of November 2026).",
    levels:{
     starter:[
      "Social media let people share news, organise and draw attention very quickly. That has changed how protests start and spread in every region.",
      "But scholars warn against calling them “Twitter revolutions”. Grievances, politics and economics cause protests; tools change how they grow. Governments use the same tools to watch, persuade and arrest, and some switch the internet off.",
      {key:"Digital tools make movements fast to build and, often, fragile to sustain."},
      "Picture two movements with the same apps: one already has unions, student groups or religious networks behind it, the other has only a hashtag. Scholars expect the first to last longer, because it can make decisions, raise money and survive arrests.",
      "Link this entry with the sociology primer on {{social-movements}}."
     ],
     builder:[
      "**Key arguments.** Gladwell (2010): weak online ties can’t sustain high-risk activism. Morozov (2011): the internet also empowers authoritarian surveillance. Tufekci (*Twitter and Tear Gas*, 2017): fast growth without organisational capacity creates fragility. Bennett and Segerberg (2012, 2013): [[connective-action|connective action]] built on personal sharing rather than formal membership.",
      "**Cases (told neutrally).** Tunisia and Egypt (2010–11); Hong Kong (2019), coordinated through LIHKG and Telegram, described by supporters as a defence of freedoms and by the authorities as violent unrest with foreign backing; Nigeria’s #EndSARS (2020) and the Twitter suspension (June 2021 to January 2022); Nepal (September 2025), where a block on unregistered platforms preceded deadly protests and the prime minister’s resignation."
     ],
     pro:[
      "**[[internet-shutdown|Shutdowns]].** Access Now counted at least 313 shutdowns in 52 countries in 2025 (report of 31 March 2026), up from 304 in 2024, with Myanmar highest. Governments cite security, public order or exam cheating; rights groups and UN experts argue shutdowns are disproportionate. Counts depend on detection methods and reporting.",
      "**Research design.** Avoid selecting only successful movements; compare cases with similar tools and different outcomes ({{case-selection}}). Separate the effect of a platform from the effect of mass media coverage of that platform.",
      "**Authoritarian adaptation.** Governments have learned too: besides shutdowns and blocking, researchers describe throttling (slowing connections), arrests for posts, paid commenters, and “flooding” feeds with distraction rather than deleting criticism.",
      "**Ethics.** Data on protesters can endanger them; see {{social-media-research-ethics}}."
     ]},
    related:["jurgen-habermas","platform-governance","social-movements","social-media-research-ethics"],
    sources:[{t:"Access Now: Rising and resisting in the darkness: internet shutdowns in 2025", url:"https://www.accessnow.org/press-release/rising-and-resisting-in-the-darkness-internet-shutdowns-in-2025/"},{t:"JURIST: Gen Z protests in Nepal (September 2025)", url:"https://www.jurist.org/news/2025/09/gen-z-protests-in-nepal-result-in-19-deaths-prime-minister-resignation-and-social-media-ban-repeal/"}],
    checked:"2026-11"},

   {id:"platform-governance", title:"Platform governance and regulation", aka:["Content moderation rules","Digital Services Act"], tags:["platforms","regulation","law"],
    summary:"How platforms are governed: company rules, Section 230, the EU Digital Services Act, China’s model and others, with the main arguments on each side (as of November 2026).",
    levels:{
     starter:[
      "Platforms decide what billions of people can post and see. [[platform-governance|Platform governance]] is the mix of company rules, laws and enforcement bodies that shapes those decisions.",
      "Countries take very different approaches. The United States mostly shields platforms from liability for users’ posts. The European Union requires the largest platforms to assess and reduce risks. China licenses platforms, requires real names and blocks many foreign services.",
      {key:"Every approach trades free expression against protection from harm, and different societies weigh them differently."},
      "Debates about these rules are now part of international politics, as governments and companies argue across borders."
     ],
     builder:[
      "**United States.** Section 230 of the Communications Decency Act (1996) says platforms are generally not treated as the publisher of users’ content and may moderate in good faith.",
      "**European Union.** The [[digital-services-act|Digital Services Act]] (Regulation (EU) 2022/2065) entered into force on 16 November 2022. A [[very-large-online-platform|very large online platform]] (45 million or more monthly EU users) must assess systemic risks, accept audits, publish transparency reports and give vetted researchers data. Fines can reach 6% of global annual turnover. The first non-compliance decision (December 2025) fined X €120 million; X appealed.",
      "**Others.** Germany’s NetzDG (2017), the UK’s Online Safety Act (2023), India’s IT Rules (2021), Australia’s social media minimum age of 16 (from 10 December 2025), and voluntary bodies such as Meta’s Oversight Board."
     ],
     pro:[
      "**Arguments.** Supporters of strong regulation stress accountability, transparency and harms such as child abuse material and incitement. Critics, including some platforms and US politicians, say rules such as the DSA chill speech and export European norms; others criticise China’s model as censorship, while its government presents it as order and sovereignty.",
      "**[[intermediary-liability|Intermediary liability]]** (when a platform is responsible for users’ content) and **[[content-moderation|content moderation]]** at scale (automated filters, human moderators often outsourced to other countries) are the core technical questions.",
      "**Geopolitics.** Debates about digital sovereignty, the “splinternet” and the “Brussels effect” (Bradford, 2020) put platform rules into IR. Watch also the DSA researcher data access rules (delegated act adopted 2 July 2025), which shape what can be studied."
     ]},
    related:["digital-activism","information-operations","media-research-methods","jurgen-habermas"],
    sources:[{t:"European Commission: Commission adopts delegated act on data access under the Digital Services Act", url:"https://digital-strategy.ec.europa.eu/en/news/commission-adopts-delegated-act-data-access-under-digital-services-act"},{t:"eucrim: EU fines X €120 million in first DSA non-compliance decision", url:"https://eucrim.eu/news/eu-fines-x-120-million-in-first-dsa-non-compliance-decision/"}],
    checked:"2026-11"},

   {id:"information-operations", title:"Influence operations and information disorder", aka:["Coordinated inauthentic behaviour","Computational propaganda"], tags:["disinformation","security","platforms"],
    summary:"Wardle and Derakhshan’s framework (2017), the vocabulary of influence operations, documented cases from several regions, and how to judge attribution and impact.",
    levels:{
     starter:[
      "[[information-disorder|Information disorder]] is the umbrella term Claire Wardle and Hossein Derakhshan used in a 2017 Council of Europe report for misinformation, disinformation and malinformation (see {{misinformation-types}}).",
      "An [[influence-operation|influence operation]] is a coordinated effort to shape opinion, often hiding who is behind it: fake accounts, paid commenters, fake news sites. Governments, parties, companies and activists of many kinds have run them.",
      {key:"Ask who is behind it, how it spread, how far it broke out, and who says so."},
      "Big operations are not always effective ones. Many reach mostly their own fake accounts."
     ],
     builder:[
      "**Framework.** Three phases (creation, production, distribution) and three elements (agent, message, interpreter).",
      "**Vocabulary.** [[coordinated-inauthentic-behaviour|Coordinated inauthentic behaviour]] (Meta’s policy term); [[computational-propaganda|computational propaganda]] (Oxford Internet Institute); [[troll-farm|troll farms]].",
      "**Cases.** The Internet Research Agency and the 2016 US election (US Senate Intelligence Committee, 2019); China-linked Spamouflage (Meta, August 2023: 7,704 Facebook accounts, more than 50 other platforms, very low authentic reach); a US military campaign against China’s Sinovac vaccine in the Philippines, 2020–21 (Reuters, 2024); commercial “architects of networked disinformation” in the Philippines (Ong and Cabañes, 2018); Facebook and hate speech in Myanmar (UN Fact-Finding Mission, 2018); Romania’s annulled presidential first round (6 December 2024).",
      "**Scale.** The Oxford Internet Institute’s 2020 inventory found organised manipulation in 81 countries, with private firms in 48."
     ],
     pro:[
      "**Impact.** Ben Nimmo’s Breakout Scale (2020) rates operations from 1 to 6 by observable spread, from one community on one platform to policy responses or calls for violence. Effects on votes are hard to prove; effects on trust and on the targeted communities may matter more.",
      "**Attribution.** Platform reports, government statements and research labs use graded confidence. Report who attributed, the evidence (technical, content, documents), the confidence language and any denial.",
      "**History.** Propaganda studies go back to Lasswell (1927); Cold War “active measures” and covert broadcasting are earlier cases of the same strategic logic.",
      "**Amplification risk.** Reporting can give small operations their breakout; media researchers (for example Joan Donovan and danah boyd) debate when “strategic silence” or careful, “strategic amplification” is the better choice."
     ]},
    related:["countering-disinformation","synthetic-media-politics","platform-governance","misinformation-types"],
    sources:[{t:"Oxford Internet Institute: Social media manipulation by political actors an industrial scale problem (2021)", url:"https://www.oii.ox.ac.uk/social-media-manipulation-by-political-actors-now-an-industrial-scale-problem-prevalent-in-over-80-countries-annual-oxford-report/"},{t:"TechCrunch: Meta shut down a disinformation campaign tied to Chinese law enforcement (2023)", url:"https://techcrunch.com/2023/08/29/meta-shut-down-a-disinformation-campaign-tied-to-chinese-law-enforcement"},{t:"Al Jazeera: US ran secret anti-vax campaign to undermine China’s COVID efforts: report (2024)", url:"https://www.aljazeera.com/news/2024/6/14/pentagon-ran-secret-anti-vax-campaign-to-undermine-china-during-pandemic"}],
    checked:"2026-11"},

   {id:"countering-disinformation", title:"Countering disinformation: what works", aka:["Fact-checking, prebunking and media literacy"], tags:["disinformation","media literacy","evidence"],
    summary:"The evidence on fact-checking, crowdsourced notes, prebunking, media literacy and laws against false information, as of November 2026.",
    levels:{
     starter:[
      "There are four broad responses to false information: correct it after it spreads (fact-checking), warn people before they meet it ([[prebunking|prebunking]]), teach skills for judging sources ([[media-literacy|media literacy]]), and make rules (platform policies and laws).",
      "Each helps somewhat, none is a cure, and each raises the question of who decides what is true.",
      {key:"Judge responses by evidence: how much they change beliefs and behaviour, for whom, and at what cost to free expression."},
      "Think of it like public health: treatment after infection (fact-checks), vaccination (prebunking), health education (literacy) and rules for food safety (regulation). Each works best alongside the others.",
      "Track 1’s {{fact-checkers}} and {{lateral-reading}} entries cover the everyday skills."
     ],
     builder:[
      "**Fact-checking.** The IFCN (founded 2015 at the Poynter Institute) sets principles for professional fact-checkers. Meta announced in January 2025 that it would end its third-party fact-checking programme in the US and switch to [[crowdsourced-fact-checking|Community Notes]]; the US programme ended in April 2025.",
      "**Corrections work, modestly.** Studies find corrections reduce false beliefs, and the backfire effect is rare (Wood and Porter, 2019), though effects fade and don’t always change behaviour.",
      "**Prebunking.** Roozenbeek, van der Linden and colleagues (*Science Advances*, 2022) found that short videos improved recognition of manipulation techniques, in lab studies and in a field test with YouTube ads. Games such as *Bad News* use the same inoculation idea."
     ],
     pro:[
      "**Crowdsourced notes.** X’s model shows a note only when raters who usually disagree find it helpful (“bridging”). Studies find notes can reduce resharing, but many posts never get one, and notes on divisive topics often arrive late.",
      "**Laws.** Singapore’s POFMA (2019) lets ministers order corrections; supporters stress public order, critics executive power over truth. Malaysia’s Anti-Fake News Act (2018) was repealed the following year. The EU relies on the DSA and a code of practice.",
      "**Media literacy.** Evidence for school programmes is promising but uneven; effects depend on teaching quality and on trust in institutions.",
      "**Trade-offs.** Heavy labelling can reduce trust in true news as well (a “tainted truth” effect); the aim is discernment, not general scepticism."
     ]},
    related:["information-operations","synthetic-media-politics","fact-checkers","lateral-reading"],
    sources:[{t:"TechSpot: Meta ends fact-checking program in the US (April 2025)", url:"https://www.techspot.com/news/107438-meta-ends-fact-checking-program-us-later-today.html"},{t:"PubMed Central: Roozenbeek et al., psychological inoculation on social media (2022)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC9401631"}],
    checked:"2026-11"},

   {id:"synthetic-media-politics", title:"Generative AI and deepfakes in politics", aka:["Synthetic media","Liar’s dividend"], tags:["AI","elections","disinformation"],
    summary:"What is known about AI-generated content in politics as of November 2026: cases, measured effects, the liar’s dividend, and labelling rules in China and the EU.",
    levels:{
     starter:[
      "[[synthetic-media|Synthetic media]] are images, audio, video or text made or changed by AI. [[generative-ai|Generative AI]] has made them cheap and quick.",
      "In politics, the fear is that convincing fakes will fool voters. Cases exist, such as a fake audio clip of an opposition leader in Slovakia days before the September 2023 election. So far, though, measurable effects on election results have been hard to find.",
      {key:"The bigger risk may be that people stop believing real evidence: the liar’s dividend."},
      "Track 1 explains how to check images and video ({{ai-generated-content}})."
     ],
     builder:[
      "**2024 elections.** After a year of many national elections, Meta reported (December 2024) that AI-generated content was under 1% of the election-related misinformation its fact-checkers rated on its apps. Researchers found little evidence that AI content changed results, while noting harassment, scams and sexual deepfakes targeting women politicians.",
      "**[[liars-dividend|The liar’s dividend]]** (Chesney and Citron, *California Law Review*, 2019): when fakes are common, people caught on genuine recordings can claim they are fake.",
      "**News use.** In the *Digital News Report 2026*, 10% used AI chatbots for news weekly (16% of under-35s), and 20% trusted chatbots’ answers."
     ],
     pro:[
      "**Rules as of November 2026.** China’s measures requiring explicit and implicit labels on AI-generated content took effect on 1 September 2025. In the EU, AI Act Article 50 transparency obligations applied from 2 August 2026: providers of generative systems must mark output in machine-readable form (systems already on the market have until 2 December 2026), and deployers must disclose deepfakes and AI-generated text on matters of public interest unless it was human-edited under editorial responsibility. The EU AI Office published a voluntary code of practice on transparency of AI-generated content on 31 July 2026.",
      "**Limits of labels.** Watermarks can be removed and many tools are outside these jurisdictions; [[content-credentials|Content Credentials]] show provenance when present but their absence proves nothing.",
      "**Research cautions.** This field moves fast and much evidence comes from companies. Date every claim, prefer independent studies, and distinguish production of AI content from its reach and its effects."
     ]},
    related:["information-operations","countering-disinformation","ai-generated-content"],
    sources:[{t:"Baker Botts: EU AI Act Article 50 transparency obligations go live (2026)", url:"https://www.bakerbotts.com/thought-leadership/publications/2026/september/eu-ai-act-article-50-transparency-obligations-go-live"},{t:"Loeb & Loeb: China’s AI labeling measures take effect September 1 (2025)", url:"https://www.loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1"},{t:"TechCrunch: Meta says AI content made up less than 1% of election-related misinformation (2024)", url:"https://techcrunch.com/2024/12/03/meta-says-ai-content-made-up-less-than-1-of-election-related-misinformation-on-its-apps"}],
    checked:"2026-11"},

   {id:"media-research-methods", title:"Media research for international studies", aka:["Framing analysis","News archives and datasets","GDELT","Media Cloud"], tags:["methods","media","data"],
    summary:"How to build a news corpus, run a framing analysis, and choose archives and datasets such as GDELT and Media Cloud, with their limits.",
    levels:{
     starter:[
      "Media research in international studies usually compares how outlets in different countries cover the same events. You need a clear question, a defined set of texts (the corpus), a codebook, and a way to show your coding is reliable.",
      "Sources range from library news databases (subscription) to free national newspaper archives and open datasets that monitor world news automatically.",
      {key:"Every source has blind spots: say what yours could not see."},
      "A good first project is small: two or three outlets, a few weeks, one event, and a codebook you have tested on a sample with a second coder.",
      "The methods unit’s {{discourse-analysis}} entry covers content analysis basics."
     ],
     builder:[
      "**Framing analysis.** Deductive (predefined frames, such as Semetko and Valkenburg’s five [[generic-frames|generic frames]], 2000) or inductive (frames built from the texts). Pilot with two coders, report chance-corrected reliability, revise.",
      {table:[["Source","Notes"],["GDELT","Free, open; print, broadcast and web news in 100+ languages; updated every 15 minutes; archives from 1 January 1979; machine-coded [[event-data|events]] and tone; downloads, an analysis service and Google BigQuery"],["Media Cloud","Open-source, open data platform for online news; search, collections, attention-over-time; URL lists downloadable, not full text; weekly API quota; about 20 languages"],["Library databases","Factiva, Nexis Uni, ProQuest: full text, subscription"],["Free archives","Chronicling America, Trove, Europeana, Japan’s NDL Digital Collections, the Internet Archive"]]}
     ],
     pro:[
      "**Validity of event data.** Automated coding duplicates events and misreads context; coverage follows news values, so quiet places may be under-reported rather than peaceful. Validate against a sample of source articles and, where possible, hand-coded datasets.",
      "**Platform data.** CrowdTangle closed on 14 August 2024; X ended free researcher access in 2023. EU [[researcher-data-access|researcher data access]] under the DSA (delegated act adopted 2 July 2025) lets researchers vetted by Digital Services Coordinators request data from very large platforms for systemic-risk research.",
      "**Automation.** Language models can pre-code texts; treat them as a coder to be validated, report agreement by language, and keep human checks. Media Cloud’s 2021 paper (Roberts and colleagues) describes its collection; read such papers before using a tool."
     ]},
    related:["framing-theory","discourse-analysis","ir-datasets","social-media-research-ethics"],
    read:[{book:"bhatt", where:"Chapter 13, “Qualitative Analysis” (content analysis)"}],
    sources:[{t:"The GDELT Project", url:"https://gdeltproject.org/"},{t:"Media Cloud: What is Media Cloud? (FAQs)", url:"https://www.mediacloud.org/documentation/faqs"},{t:"Roberts et al., “Media Cloud: Massive Open Source Collection of Global News on the Open Web” (arXiv, 2021)", url:"https://arxiv.org/abs/2104.03702"}],
    checked:"2026-11"},

   {id:"social-media-research-ethics", title:"Ethics of studying social media", aka:["Internet research ethics","AoIR guidelines"], tags:["ethics","methods","platforms"],
    summary:"Public versus private, harm, consent and researcher safety when studying posts and messages, following the AoIR guidelines and contextual integrity.",
    levels:{
     starter:[
      "Posts can be public and still personal. A researcher who quotes a stranger’s post word for word can expose that person to harassment, or worse, because the quote can be searched and traced.",
      "The Association of Internet Researchers (AoIR) publishes widely used guidelines. The current version, *Internet Research: Ethical Guidelines 3.0*, was released in 2019 and covers big data, AI and the protection of researchers too.",
      {key:"“It’s public” starts the ethical question; it doesn’t end it."},
      "The sociology primer’s {{research-ethics}} entry gives the basics of consent and confidentiality."
     ],
     builder:[
      "**[[contextual-integrity|Contextual integrity]]** (Helen Nissenbaum): information flows carry the norms of the context they were shared in. Moving a post from a small group to a published paper can break those norms.",
      {list:["**Harm**: activists and minorities in repressive settings face real risk ([[do-no-harm]]).","**Consent**: expected for private groups and ordinary users; less so for public figures acting publicly.","**Anonymisation**: paraphrase, aggregate or create composite examples.","**Rules**: platform terms, data protection laws, and ethics committee review."]},
      "**Cautionary cases.** The 2014 Facebook emotional contagion experiment (689,003 users) and the 2018 Cambridge Analytica revelations (data on up to 87 million users)."
     ],
     pro:[
      "**Researcher safety.** AoIR 3.0 treats the researcher’s own safety as an ethical issue: studies of extremism, harassment or influence operations can bring abuse or legal threats ([[duty-of-care]]). Plan secure storage, a low public profile during fieldwork, and institutional support.",
      "**Scraping and terms.** Laws and platform terms on automated collection differ by country; ethics approval does not make a breach of terms lawful, and terms do not settle what is ethical.",
      "**Data security.** Store raw data encrypted, separate identifiers from content, keep only what the question needs, and decide in advance when data will be deleted. A data management plan is now often required by funders and ethics committees.",
      "**Global differences.** Expectations of privacy, consent and anonymity vary across cultures and legal systems; the AoIR approach is case-based and asks researchers to reason through context rather than apply one rule."
     ]},
    related:["media-research-methods","research-ethics","fieldwork-ethics","data-ethics"],
    sources:[{t:"AoIR: Internet Research Ethics 3.0", url:"https://aoir.org/ire30/"},{t:"AoIR ethics page", url:"https://aoir.org/ethics/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"media-system", term:"Media system", def:"A country’s whole set of news organisations together with the markets, laws and political ties around them.", codex:"media-systems"},
   {id:"political-parallelism", term:"Political parallelism", def:"How far media outlets line up with political parties or camps, in ownership, staff, audiences and the views they take. One of Hallin and Mancini’s four dimensions.", codex:"media-systems"},
   {id:"journalistic-professionalism", term:"Journalistic professionalism", def:"How far journalists share their own norms and control their own work, rather than serving owners, parties or the state.", codex:"media-systems"},
   {id:"polarized-pluralist-model", term:"Polarised Pluralist model", def:"Hallin and Mancini’s Mediterranean model: an elite press, close ties between media and parties, weaker professional autonomy and an active state.", codex:"media-systems"},
   {id:"democratic-corporatist-model", term:"Democratic Corporatist model", def:"Hallin and Mancini’s North and Central European model: a mass press, a history of party papers, strong professionalism and a strong state that also protects press freedom.", codex:"media-systems"},
   {id:"liberal-media-model", term:"Liberal model (media systems)", def:"Hallin and Mancini’s North Atlantic model: commercial media dominate, neutral-professional reporting is the ideal and the state’s role is limited.", codex:"media-systems"},
   {id:"public-service-media", term:"Public service media", def:"Broadcasters and online services funded publicly (often by a licence fee or tax) but meant to be editorially independent of government.", codex:"media-systems"},
   {id:"state-media", term:"State media", def:"Media directly controlled by a government or ruling party, which appoints editors and shapes content. Whether a given outlet fits this label is often disputed.", codex:"media-systems"},
   {id:"kisha-club", term:"Kisha club", def:"A Japanese press club attached to a ministry, party or other institution, giving member journalists regular briefings. Critics say the clubs encourage closeness to officials; defenders cite access and accuracy.", codex:"media-systems"},
   {id:"media-capture", term:"Media capture", def:"When news outlets serve governments or business allies instead of the public, through ownership, advertising, licences or other pressure.", codex:"media-systems"},
   {id:"press-freedom-index", term:"Press freedom index", def:"A score or ranking of how freely journalists can work in each country, such as RSF’s yearly World Press Freedom Index. An estimate built with a method, not an exact measure.", codex:"press-freedom-indices"},
   {id:"priming", term:"Priming", def:"The effect by which issues that the news stresses become the standards people use to judge leaders (Iyengar and Kinder, 1987).", codex:"agenda-setting-theory"},
   {id:"media-framing", term:"Media framing", def:"How a news text selects and stresses some aspects of an issue to suggest a problem, a cause, a moral judgement and a remedy (Entman, 1993).", codex:"framing-theory"},
   {id:"episodic-thematic-framing", term:"Episodic and thematic framing", def:"Iyengar’s distinction (1991) between stories about single cases or events (episodic) and stories that give context, trends and causes (thematic).", codex:"framing-theory"},
   {id:"cascading-activation", term:"Cascading activation", def:"Entman’s model (2004) in which foreign policy frames usually flow from the administration to other elites, journalists, news texts and the public, with feedback upwards.", codex:"framing-theory"},
   {id:"news-values", term:"News values", def:"The factors that make an event more likely to become news, such as negativity, unexpectedness and reference to elite nations. First listed by Galtung and Ruge in 1965.", codex:"johan-galtung"},
   {id:"peace-journalism", term:"Peace journalism", def:"An approach, proposed by Johan Galtung, that reports the causes of conflict, voices from all sides and paths to peace, not only violence and winners.", codex:"johan-galtung"},
   {id:"cnn-effect-term", term:"CNN effect", def:"The claim that live, emotive news coverage pushes governments into foreign policy decisions, especially humanitarian intervention. Research finds it real but conditional.", codex:"cnn-effect"},
   {id:"policy-media-interaction-model", term:"Policy–media interaction model", def:"Piers Robinson’s model (2000, 2002): media influence policy mainly when a government is undecided and coverage is critical and framed with empathy for victims.", codex:"cnn-effect"},
   {id:"indexing-hypothesis", term:"Indexing hypothesis", def:"W. Lance Bennett’s claim (1990) that news tends to match the range of views it presents to the range of debate among officials.", codex:"cnn-effect"},
   {id:"propaganda-model-term", term:"Propaganda model", def:"Herman and Chomsky’s argument (1988) that five filters (ownership, advertising, sourcing, flak and an enemy ideology) keep commercial news within elite consensus without direct censorship.", codex:"propaganda-model"},
   {id:"flak", term:"Flak", def:"In the propaganda model, organised criticism and pressure (complaints, lawsuits, campaigns) that punishes media for unwelcome coverage.", codex:"propaganda-model"},
   {id:"public-sphere", term:"Public sphere", def:"Habermas’s term (1962) for the space between private life and the state where people discuss common affairs and form public opinion that governments must answer to.", codex:"jurgen-habermas"},
   {id:"counterpublic", term:"Counterpublic", def:"Nancy Fraser’s term (1990) for a parallel space where groups excluded from the main public sphere develop their own interpretations and needs.", codex:"jurgen-habermas"},
   {id:"networked-public-sphere", term:"Networked public sphere", def:"Yochai Benkler’s term (2006) for public debate online, where many people can publish and link, so gatekeeping is shared across the network and platforms.", codex:"jurgen-habermas"},
   {id:"connective-action", term:"Connective action", def:"Bennett and Segerberg’s term for collective action organised through personal sharing on digital networks rather than membership of formal organisations.", codex:"digital-activism"},
   {id:"internet-shutdown", term:"Internet shutdown", def:"A deliberate disruption of internet or mobile data access, nationwide or local, usually ordered by a government. Access Now keeps a yearly count.", codex:"digital-activism"},
   {id:"platform-governance", term:"Platform governance", def:"The rules that shape what platforms allow, rank and remove: laws, company policies, and the bodies that enforce them.", codex:"platform-governance"},
   {id:"content-moderation", term:"Content moderation", def:"How platforms review, label, demote or remove what users post, using automated systems and human moderators under their rules and the law.", codex:"platform-governance"},
   {id:"digital-services-act", term:"Digital Services Act (DSA)", def:"The EU regulation (2022/2065, in force November 2022) that sets duties for online services, with the strictest duties for the largest platforms and search engines.", codex:"platform-governance"},
   {id:"very-large-online-platform", term:"Very large online platform (VLOP)", def:"Under the DSA, a platform with at least 45 million monthly active users in the EU, which must assess and reduce systemic risks and accept audits.", codex:"platform-governance"},
   {id:"intermediary-liability", term:"Intermediary liability", def:"Whether, and when, a platform or other intermediary is legally responsible for content its users post. Section 230 in the US largely shields platforms.", codex:"platform-governance"},
   {id:"information-disorder", term:"Information disorder", def:"Wardle and Derakhshan’s umbrella term (2017) for misinformation, disinformation and malinformation, preferred to the vague and politicised “fake news”.", codex:"information-operations"},
   {id:"influence-operation", term:"Influence operation", def:"A coordinated effort to shape opinion in a target audience, often hiding who is behind it, for example through fake accounts or fake news sites.", codex:"information-operations"},
   {id:"coordinated-inauthentic-behaviour", term:"Coordinated inauthentic behaviour", def:"Meta’s policy term for networks of accounts that work together to mislead people about who they are and what they are doing.", codex:"information-operations"},
   {id:"computational-propaganda", term:"Computational propaganda", def:"The use of bots, algorithms and large datasets to manipulate public opinion online. A term associated with the Oxford Internet Institute.", codex:"information-operations"},
   {id:"troll-farm", term:"Troll farm", def:"An organised group, often paid, that posts and comments online in coordinated ways to push a message or attack opponents.", codex:"information-operations"},
   {id:"prebunking", term:"Prebunking", def:"Warning people about a misleading claim or a manipulation technique before they meet it, to build resistance, like a vaccine.", codex:"countering-disinformation"},
   {id:"crowdsourced-fact-checking", term:"Crowdsourced fact-checking (Community Notes)", def:"Context notes written and rated by users, shown when raters with different viewpoints agree a note is helpful. Used by X and, from 2025, by Meta in the US.", codex:"countering-disinformation"},
   {id:"media-literacy", term:"Media literacy", def:"The skills to find, judge, use and create media, including how news is made and how algorithms shape what people see.", codex:"countering-disinformation"},
   {id:"synthetic-media", term:"Synthetic media", def:"Images, audio, video or text created or changed by AI, including deepfakes. Not all synthetic media are deceptive.", codex:"synthetic-media-politics"},
   {id:"liars-dividend", term:"Liar’s dividend", def:"The advantage gained by people who dismiss genuine evidence as fake once fakes are common (Chesney and Citron, 2019).", codex:"synthetic-media-politics"},
   {id:"generic-frames", term:"Generic frames", def:"Frames that recur across many topics. Semetko and Valkenburg (2000) used five: conflict, human interest, economic consequences, morality and attribution of responsibility.", codex:"media-research-methods"},
   {id:"event-data", term:"Event data", def:"Records of who did what to whom, when and where, usually coded automatically from news reports, as in GDELT.", codex:"media-research-methods"},
   {id:"researcher-data-access", term:"Researcher data access (DSA)", def:"The EU rules that let vetted researchers request data from very large platforms to study systemic risks, detailed in a delegated act adopted in July 2025.", codex:"media-research-methods"},
   {id:"contextual-integrity", term:"Contextual integrity", def:"Helen Nissenbaum’s idea that information flows carry the privacy norms of the context where they were shared, so moving them elsewhere can be a harm.", codex:"social-media-research-ethics"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"e4u7-q01", lesson:"e4u7-l1", level:1, q:"How many countries did Hallin and Mancini compare in *Comparing Media Systems* (2004), and where?", options:[
     {t:"18 democracies in Western Europe and North America", ok:true, why:"Correct. They stressed that the models were built from these cases and might not travel elsewhere."},
     {t:"180 countries and territories worldwide", why:"That is the coverage of RSF’s World Press Freedom Index."},
     {t:"48 markets on every continent", why:"That is the coverage of the *Digital News Report 2026*."},
     {t:"The Soviet Union, the United States, Britain and China", why:"That is closer to the Cold War scope of *Four Theories of the Press* (1956)."}]},
   {id:"e4u7-q02", lesson:"e4u7-l1", level:2, q:"In Country P, the main newspapers are read mostly by political elites, each is close to a party, and governments have long used state advertising to reward friendly outlets. Which model does it most resemble?", options:[
     {t:"Polarised Pluralist", ok:true, why:"Correct. An elite press, high political parallelism and instrumentalisation by governments are its core features."},
     {t:"Democratic Corporatist", why:"That model has a mass press and strong professionalism; the state supports media but protects press freedom."},
     {t:"Liberal", why:"The Liberal model has commercial, neutral-professional media and a limited state role."},
     {t:"Soviet communist", why:"That is a category from *Four Theories of the Press*, and the country described has competing party-linked papers, not one party’s monopoly."}]},
   {id:"e4u7-q03", lesson:"e4u7-l1", level:1, q:"Which is one of RSF’s five World Press Freedom Index indicators?", options:[
     {t:"The economic context", ok:true, why:"Correct. The five are political, legal, economic, sociocultural and safety."},
     {t:"Internet speed", why:"Not an RSF indicator; connectivity is measured by other bodies."},
     {t:"Number of newspapers per person", why:"Circulation is a Hallin and Mancini dimension, not an RSF indicator."},
     {t:"Public trust in news", why:"Trust is measured by surveys such as the *Digital News Report*, not by RSF’s indicators."}]},
   {id:"e4u7-q04", lesson:"e4u7-l1", level:2, q:"A student writes: “Freedom House’s *Freedom of the Press 2025* report shows…”. What should the tutor point out?", options:[
     {t:"Freedom House’s separate *Freedom of the Press* report ended after the 2017 edition; media freedom now appears in *Freedom in the World* and *Freedom on the Net*", ok:true, why:"Correct. Checking that a source still exists, and in what form, is part of using indices well."},
     {t:"Freedom House only measures economic freedom", why:"Freedom House measures political rights and civil liberties, including media freedom."},
     {t:"The report is published by RSF, not Freedom House", why:"RSF publishes the World Press Freedom Index, a different product."},
     {t:"Nothing: the citation is correct", why:"There is no 2025 *Freedom of the Press* report."}]},
   {id:"e4u7-q05", lesson:"e4u7-l1", level:1, q:"What does “media capture” mean?", options:[
     {t:"Outlets serving governments or business allies instead of the public, through ownership, advertising, licences or other pressure", ok:true, why:"Correct. Capture can occur even where formal press freedom exists."},
     {t:"Journalists recording video of events", why:"That is a literal reading; the term is about control of media."},
     {t:"A platform’s algorithm choosing what appears in feeds", why:"That is recommendation or ranking, not capture."},
     {t:"The arrest of journalists", why:"Arrests are a safety issue measured by indices; capture works mostly through economic and political leverage."}]},
   {id:"e4u7-q06", lesson:"e4u7-l1", level:3, q:"Country Q climbs ten places in a press freedom index, but its overall score barely changes. What is the most careful reading?", options:[
     {t:"Other countries’ scores fell, so the rank rose without much real change in Q; check the scores and indicators", ok:true, why:"Correct. Ranks are relative: they can move because of others. Scores and indicator breakdowns tell you more."},
     {t:"Press freedom in Q has improved dramatically", why:"A rank rise with a stable score doesn’t show a dramatic change in Q itself."},
     {t:"The index must have made an error", why:"Nothing suggests an error; this is how relative rankings work."},
     {t:"Q’s government must have paid for a better rank", why:"There’s no evidence for this, and the pattern has an ordinary explanation."}]},
   {id:"e4u7-q07", lesson:"e4u7-l1", level:2, q:"Two publicly funded broadcasters are compared. Which evidence best shows whether each is public service or state media?", options:[
     {t:"Who appoints the leadership, how editorial decisions are protected, and whether coverage scrutinises the government", ok:true, why:"Correct. Governance and editorial track record, not funding, distinguish the two."},
     {t:"Their annual budgets", why:"Budget size says nothing about independence."},
     {t:"Whether they broadcast in several languages", why:"Many independent and state-controlled broadcasters are multilingual."},
     {t:"Their audience ratings", why:"Popularity doesn’t show who controls the content."}]},
   {id:"e4u7-q08", lesson:"e4u7-l1", level:3, q:"A paper places a Southeast Asian country in Hallin and Mancini’s Liberal model because its media are commercial. A reviewer objects. Which objection is strongest?", options:[
     {t:"Commercial ownership is only one dimension; parallelism, professionalism and the state’s role may point elsewhere, and the models were built for Western cases", ok:true, why:"Correct. A placement needs evidence on all four dimensions, with awareness that the models stretch poorly outside their original cases."},
     {t:"Asian countries can never be compared with Western ones", why:"Comparison is possible and common; the point is to do it carefully."},
     {t:"The Liberal model only applies to the United States", why:"It also covers Britain, Ireland and Canada."},
     {t:"Commercial media don’t exist in Southeast Asia", why:"They clearly do; the issue is whether commerce alone defines the system."}]},
   {id:"e4u7-q09", lesson:"e4u7-l1", level:1, q:"According to the *Digital News Report 2026*, what happened to online news access across its 48 markets?", options:[
     {t:"Social and video networks overtook news websites and apps for the first time", ok:true, why:"Correct: 54% against 51%."},
     {t:"Print newspapers became the main source again", why:"Print continued to decline; the change was towards platforms."},
     {t:"AI chatbots became the main source for most people", why:"Weekly use of chatbots for news was 10%."},
     {t:"Trust in news reached a record high", why:"Trust fell to 37%, the lowest since 2015."}]},
   /* Lesson 2 */
   {id:"e4u7-q10", lesson:"e4u7-l2", level:1, q:"Which statement captures agenda setting best?", options:[
     {t:"Media influence what people think about more than what they think", ok:true, why:"Correct. This is Cohen’s formulation, tested by McCombs and Shaw."},
     {t:"Media decide how people vote", why:"Agenda setting is about issue salience, not direct persuasion."},
     {t:"Governments set newspapers’ daily agendas by law", why:"That describes control, not the agenda-setting effect."},
     {t:"Audiences choose only news that agrees with them", why:"That describes selective exposure."}]},
   {id:"e4u7-q11", lesson:"e4u7-l2", level:2, q:"A news story says: “A new trade pact will cost thousands of jobs. Negotiators ignored workers. Parliament should reject it.” Which sentence performs Entman’s treatment recommendation?", options:[
     {t:"“Parliament should reject it.”", ok:true, why:"Correct. It proposes what should be done, the remedy."},
     {t:"“A new trade pact will cost thousands of jobs.”", why:"This defines the problem."},
     {t:"“Negotiators ignored workers.”", why:"This assigns cause and moral blame, not a remedy."},
     {t:"None: news stories never recommend remedies", why:"Frames often include a remedy, stated or implied."}]},
   {id:"e4u7-q12", lesson:"e4u7-l2", level:1, q:"Who proposed twelve news values in “The Structure of Foreign News” (1965)?", options:[
     {t:"Johan Galtung and Mari Holmboe Ruge", ok:true, why:"Correct. They studied Norwegian coverage of the Congo, Cuba and Cyprus crises."},
     {t:"Maxwell McCombs and Donald Shaw", why:"They wrote the 1972 agenda-setting study."},
     {t:"Edward Herman and Noam Chomsky", why:"They wrote *Manufacturing Consent* (1988)."},
     {t:"Daniel Hallin and Paolo Mancini", why:"They compared media systems (2004)."}]},
   {id:"e4u7-q13", lesson:"e4u7-l2", level:2, q:"In an experiment, viewers who saw stories about one homeless family blamed the family; viewers who saw a report on housing policy blamed the government. Which finding does this match?", options:[
     {t:"Iyengar’s episodic and thematic framing", ok:true, why:"Correct. Episodic coverage encouraged individual blame, thematic coverage societal blame."},
     {t:"Priming", why:"Priming concerns the standards used to judge leaders, not who is blamed for a problem."},
     {t:"Indexing", why:"Indexing is about news following elite debate."},
     {t:"The CNN effect", why:"That is about policy change, not audience attributions of blame."}]},
   {id:"e4u7-q14", lesson:"e4u7-l2", level:3, q:"A government is firmly committed to staying out of a distant civil war. Coverage becomes intensely critical, with images of civilian suffering. What does Robinson’s model predict?", options:[
     {t:"Policy is likely to hold, because media influence depends on policy uncertainty", ok:true, why:"Correct. With a settled policy, even critical, empathy-framed coverage is unlikely to force a change, as in his Kosovo case."},
     {t:"The government will intervene within days", why:"That is the strong CNN effect claim the model rejects for settled policies."},
     {t:"Coverage will stop because of indexing", why:"Indexing would predict coverage follows elite debate; the scenario says coverage is already critical."},
     {t:"Nothing can be predicted about media and policy", why:"The model makes a clear conditional prediction."}]},
   {id:"e4u7-q15", lesson:"e4u7-l2", level:2, q:"Which of these is one of Herman and Chomsky’s five filters?", options:[
     {t:"Sourcing: reliance on official and corporate sources", ok:true, why:"Correct. The others are ownership, advertising, flak and an enemy ideology."},
     {t:"Algorithmic ranking", why:"The model was written in 1988, before platforms; ranking isn’t one of the five."},
     {t:"Fact-checking", why:"Not a filter in the model."},
     {t:"Peace journalism", why:"That is Galtung’s normative proposal."}]},
   {id:"e4u7-q16", lesson:"e4u7-l2", level:3, q:"A study finds that coverage of a foreign war turned critical only after senior politicians began disagreeing about it. Which explanation fits best?", options:[
     {t:"Indexing: news reflects the range of elite debate", ok:true, why:"Correct. This is Bennett’s hypothesis, and Hallin’s Vietnam finding."},
     {t:"Agenda setting by the public", why:"The change follows elite disagreement, not public priorities."},
     {t:"The CNN effect", why:"Here media follow elites rather than drive policy."},
     {t:"News values of unexpectedness", why:"Unexpectedness explains whether events get covered, not when coverage turns critical."}]},
   {id:"e4u7-q17", lesson:"e4u7-l2", level:3, q:"Researchers count foreign news stories in a country’s press: most stories about one region concern disasters, coups or epidemics. Which concept, and which old debate, fit best?", options:[
     {t:"Galtung and Ruge’s news values, and the NWICO debate at UNESCO in the 1970s and 1980s", ok:true, why:"Correct. Negativity and elite-nation bias produce crisis-only coverage, the complaint behind calls for a New World Information and Communication Order."},
     {t:"Priming and the Chapel Hill study", why:"Neither explains why coverage of a region is mostly negative."},
     {t:"Connective action and the Arab uprisings", why:"Those concern protest organisation online."},
     {t:"The liar’s dividend and deepfakes", why:"Those concern synthetic media, not story selection."}]},
   {id:"e4u7-q18", lesson:"e4u7-l2", level:1, q:"Which is a major criticism of the propaganda model?", options:[
     {t:"It is hard to falsify and leaves little room for journalists’ agency", ok:true, why:"Correct. These are two of the most common critiques."},
     {t:"It ignores ownership", why:"Ownership is its first filter."},
     {t:"It was only about social media", why:"It was written about pre-internet US mass media."},
     {t:"It claims governments censor every story", why:"It explains consensus without direct censorship."}]},
   /* Lesson 3 */
   {id:"e4u7-q19", lesson:"e4u7-l3", level:1, q:"In Habermas’s 1962 account, what is the public sphere?", options:[
     {t:"The space between private life and the state where people discuss common affairs and form public opinion", ok:true, why:"Correct. Habermas located it between private life and the state, in coffee houses, salons and the press."},
     {t:"All government-owned media", why:"The public sphere is about citizens’ debate, not state ownership."},
     {t:"The set of publicly listed media companies", why:"“Public” here means open debate, not stock market listing."},
     {t:"Any place outdoors", why:"It is a social and communicative space, not a physical category."}]},
   {id:"e4u7-q20", lesson:"e4u7-l3", level:2, q:"A critic says Habermas’s coffee-house public excluded women and workers, who built their own spaces of debate. Whose argument is this?", options:[
     {t:"Nancy Fraser’s, on counterpublics (1990)", ok:true, why:"Correct. “Rethinking the Public Sphere” argued for plural publics, including counterpublics of excluded groups."},
     {t:"Yochai Benkler’s, on the networked public sphere", why:"Benkler wrote about the internet’s networked public sphere."},
     {t:"Evgeny Morozov’s, on the net delusion", why:"Morozov wrote about digital tools and authoritarian control."},
     {t:"Robert Entman’s, on framing", why:"Entman defined news framing."}]},
   {id:"e4u7-q21", lesson:"e4u7-l3", level:2, q:"A movement grows from nothing to huge marches in two weeks, coordinated online, but collapses when it must negotiate. Which scholar’s argument does this illustrate?", options:[
     {t:"Zeynep Tufekci’s: digital tools let movements scale fast without building organisational capacity", ok:true, why:"Correct. *Twitter and Tear Gas* (2017) calls this the power and fragility of networked protest."},
     {t:"Habermas’s refeudalisation", why:"That concerns the decline of the public sphere under mass media."},
     {t:"Herman and Chomsky’s flak", why:"Flak is pressure on media, not movement fragility."},
     {t:"Galtung’s news values", why:"News values explain coverage, not movement organisation."}]},
   {id:"e4u7-q22", lesson:"e4u7-l3", level:1, q:"How many internet shutdowns did Access Now count for 2025?", options:[
     {t:"At least 313, in 52 countries", ok:true, why:"Correct, from its report published in March 2026."},
     {t:"About 30, in 5 countries", why:"Far too low."},
     {t:"Over 3,000, in 150 countries", why:"Far too high."},
     {t:"None, because shutdowns ended in 2020", why:"Shutdowns continued and reached a record."}]},
   {id:"e4u7-q23", lesson:"e4u7-l3", level:3, q:"A columnist cites the 2023 Facebook and Instagram experiments as proof that “algorithms are harmless everywhere”. What is the best response?", options:[
     {t:"The studies covered one country, one election and a few months on Meta’s platforms, so they can’t show that", ok:true, why:"Correct. They found no measurable polarisation effect from certain feed changes in that setting; generalising further goes beyond the evidence."},
     {t:"The studies found algorithms caused polarisation", why:"They did not detect such an effect for the changes tested."},
     {t:"The studies were never peer reviewed", why:"They were published in *Science* and *Nature*."},
     {t:"Experiments can never tell us anything about platforms", why:"They can; the issue is the scope of the conclusions."}]},
   {id:"e4u7-q24", lesson:"e4u7-l3", level:2, q:"Which description of the EU’s Digital Services Act is accurate?", options:[
     {t:"It requires the largest platforms (45 million or more EU users) to assess and reduce systemic risks, and fines can reach 6% of global turnover", ok:true, why:"Correct. These are the core duties and penalties for very large online platforms."},
     {t:"It bans all political content on platforms", why:"It sets risk and transparency duties; it doesn’t ban political content."},
     {t:"It only applies to companies based in the EU", why:"It applies to services offered in the EU wherever the company is based."},
     {t:"It replaced Section 230 in the United States", why:"Section 230 is US law; the DSA is EU law."}]},
   {id:"e4u7-q25", lesson:"e4u7-l3", level:3, q:"A student must describe the Hong Kong protests of 2019 in a seminar paper. Which sentence is most appropriate?", options:[
     {t:"“Protests against an extradition bill drew very large numbers; supporters framed them as defending the city’s freedoms, while the authorities described violent unrest encouraged by foreign forces.”", ok:true, why:"Correct. It states facts and attributes each interpretation."},
     {t:"“Brave Hongkongers rose up against tyranny.”", why:"This adopts one side’s framing as the author’s own."},
     {t:"“Foreign-backed rioters attacked the city.”", why:"This adopts the authorities’ framing as fact."},
     {t:"“Twitter caused the protests.”", why:"Inaccurate and technologically determinist; LIHKG and Telegram were more central, and causes were political."}]},
   {id:"e4u7-q26", lesson:"e4u7-l3", level:3, q:"After false rumours on a messaging app are linked to violence, the company limits how many chats a message can be forwarded to. Which concept best describes this kind of response?", options:[
     {t:"Platform governance through product design (friction), not content removal", ok:true, why:"Correct. WhatsApp’s forwarding limits (India 2018, worldwide 2019) slow spread without judging each message."},
     {t:"Indexing", why:"Indexing is about news following elite debate."},
     {t:"An internet shutdown", why:"A shutdown cuts access entirely; this limits one feature."},
     {t:"Prebunking", why:"Prebunking warns users about techniques in advance; this changes how the app works."}]},
   {id:"e4u7-q27", lesson:"e4u7-l3", level:1, q:"What did Bennett and Segerberg call protest organised through personalised sharing on digital networks?", options:[
     {t:"Connective action", ok:true, why:"Correct. They contrasted it with collective action built on formal organisations."},
     {t:"Cascading activation", why:"That is Entman’s model of foreign policy framing."},
     {t:"Resource mobilisation", why:"That is McCarthy and Zald’s theory of movement resources."},
     {t:"Agenda building", why:"That is research on who shapes the media agenda."}]},
   /* Lesson 4 */
   {id:"e4u7-q28", lesson:"e4u7-l4", level:1, q:"Who introduced the term “information disorder” in a 2017 Council of Europe report?", options:[
     {t:"Claire Wardle and Hossein Derakhshan", ok:true, why:"Correct. Their report preferred “information disorder” to the vague term “fake news”."},
     {t:"Harold Lasswell", why:"Lasswell analysed propaganda in 1927."},
     {t:"Ben Nimmo", why:"Nimmo created the Breakout Scale (2020)."},
     {t:"Robert Chesney and Danielle Citron", why:"They described the liar’s dividend (2019)."}]},
   {id:"e4u7-q29", lesson:"e4u7-l4", level:2, q:"A network of 5,000 fake accounts posts on 40 platforms, but its posts are only liked by its own accounts. A newspaper then runs a front-page story about it. What risk does this create?", options:[
     {t:"The coverage may give the operation the mainstream breakout it couldn’t achieve alone", ok:true, why:"Correct. Coverage can move it up the Breakout Scale, which is why “strategic silence” is debated."},
     {t:"None: coverage always reduces an operation’s reach", why:"Coverage can raise awareness, but it can also amplify."},
     {t:"The operation automatically reaches category 6", why:"Category 6 needs a policy response or a call for violence."},
     {t:"It proves the operation changed public opinion", why:"Coverage of an operation is not evidence of its effect on opinion."}]},
   {id:"e4u7-q30", lesson:"e4u7-l4", level:1, q:"Which statement about documented influence operations is accurate?", options:[
     {t:"They have been run by democracies, authoritarian states, parties and commercial firms", ok:true, why:"Correct. Cases in this lesson include Russia, China-linked networks, the US military, and PR firms in the Philippines."},
     {t:"Only authoritarian states run them", why:"Documented cases include democracies, such as the US campaign in the Philippines."},
     {t:"They are always run by individuals acting alone", why:"By definition they are coordinated."},
     {t:"They only use text, never images or video", why:"They use all formats."}]},
   {id:"e4u7-q31", lesson:"e4u7-l4", level:2, q:"Which finding about corrections and fact-checks is best supported by research?", options:[
     {t:"Corrections modestly reduce false beliefs, and backfire effects are rare", ok:true, why:"Correct (for example, Wood and Porter, 2019)."},
     {t:"Corrections usually strengthen false beliefs", why:"The backfire effect turned out to be rare in large studies."},
     {t:"Corrections permanently remove false beliefs", why:"Effects are modest and can fade."},
     {t:"Corrections have no effect at all", why:"Studies find modest positive effects."}]},
   {id:"e4u7-q32", lesson:"e4u7-l4", level:3, q:"A government report says “state X ran this campaign” but gives no evidence, and state X denies it. How should a seminar paper describe it?", options:[
     {t:"“The government of Y attributed the campaign to X, without publishing its evidence; X denied involvement.”", ok:true, why:"Correct. It attributes the claim, notes the evidence gap and records the denial."},
     {t:"“X ran the campaign.”", why:"This states a contested attribution as fact."},
     {t:"“The campaign was obviously fake news invented by Y.”", why:"This takes the opposite side without evidence."},
     {t:"Leave the campaign out entirely", why:"It can be discussed if attribution is reported accurately."}]},
   {id:"e4u7-q33", lesson:"e4u7-l4", level:1, q:"What is prebunking?", options:[
     {t:"Warning people about manipulation techniques or false claims before they meet them", ok:true, why:"Correct. It works like a vaccine."},
     {t:"Deleting false posts before they are published", why:"That is pre-moderation, not prebunking."},
     {t:"Fact-checking a claim after it goes viral", why:"That is debunking."},
     {t:"Labelling AI-generated images", why:"That is labelling or provenance."}]},
   {id:"e4u7-q34", lesson:"e4u7-l4", level:2, q:"What did Meta announce in January 2025 about fact-checking in the United States?", options:[
     {t:"It would end its third-party fact-checking programme there and move to Community Notes", ok:true, why:"Correct. The US programme ended in April 2025."},
     {t:"It would double the number of fact-checkers", why:"It ended the US programme."},
     {t:"It would let governments decide what is false", why:"Not what was announced."},
     {t:"It would ban all political posts", why:"Not what was announced."}]},
   {id:"e4u7-q35", lesson:"e4u7-l4", level:3, q:"A politician is caught on a genuine recording making a damaging remark and immediately says it is an AI fake. Many supporters believe him. What does this illustrate, and what helps?", options:[
     {t:"The liar’s dividend; provenance evidence, independent forensic checks and corroborating witnesses help", ok:true, why:"Correct. When fakes are common, denial becomes easier; evidence of origin and corroboration counter it."},
     {t:"Prebunking; nothing else helps", why:"This is denial of real evidence, not a pre-emptive warning."},
     {t:"The CNN effect; more TV coverage helps", why:"The CNN effect concerns policy decisions."},
     {t:"Malinformation; deleting the recording helps", why:"Deleting genuine evidence would not help establish the truth."}]},
   {id:"e4u7-q36", lesson:"e4u7-l4", level:2, q:"As of November 2026, which statement about AI labelling rules is accurate?", options:[
     {t:"EU AI Act transparency duties, including deepfake disclosure, applied from 2 August 2026, and China’s labelling measures from 1 September 2025", ok:true, why:"Correct. Both dates are verified as of November 2026; check for later changes."},
     {t:"No country has any rules on labelling AI content", why:"Both China and the EU have such rules."},
     {t:"The EU postponed all AI Act transparency duties to 2030", why:"The transparency duties applied from August 2026; some high-risk rules were postponed to December 2027."},
     {t:"Labels are now impossible to remove", why:"Watermarks and labels can often be removed or lost."}]},
   /* Lesson 5 */
   {id:"e4u7-q37", lesson:"e4u7-l5", level:1, q:"Which are Semetko and Valkenburg’s five generic frames?", options:[
     {t:"Conflict, human interest, economic consequences, morality, attribution of responsibility", ok:true, why:"Correct. These come from their 2000 study of European news."},
     {t:"Problem, cause, moral judgement, remedy, audience", why:"The first four are Entman’s framing functions; “audience” isn’t a frame."},
     {t:"Ownership, advertising, sourcing, flak, ideology", why:"These are Herman and Chomsky’s filters."},
     {t:"Threshold, negativity, elite nations, personalisation, continuity", why:"These are some of Galtung and Ruge’s news values."}]},
   {id:"e4u7-q38", lesson:"e4u7-l5", level:2, q:"Two coders agree on 45 of 60 articles. What is their simple percentage agreement, and what else should be reported?", options:[
     {t:"75%, plus a chance-corrected measure such as Krippendorff’s alpha", ok:true, why:"Correct: 45 ÷ 60 = 0.75. Simple agreement flatters coders, so a chance-corrected measure is expected."},
     {t:"25%, and nothing else", why:"25% is the disagreement rate, and a chance-corrected measure is still needed."},
     {t:"133%, plus the number of coders", why:"That divides 60 by 45; agreement can’t exceed 100%."},
     {t:"45%, plus the word count", why:"45 is the number of agreements, not a percentage."}]},
   {id:"e4u7-q39", lesson:"e4u7-l5", level:1, q:"Which describes GDELT accurately?", options:[
     {t:"A free, open database monitoring world news in over 100 languages, updated every 15 minutes, with archives from 1979", ok:true, why:"Correct, per the project’s own site."},
     {t:"A subscription newspaper archive run by a publisher", why:"GDELT is free and open; subscription archives include Factiva and Nexis Uni."},
     {t:"A survey of news habits in 48 markets", why:"That is the *Digital News Report*."},
     {t:"Meta’s replacement for CrowdTangle", why:"That is the Meta Content Library."}]},
   {id:"e4u7-q40", lesson:"e4u7-l5", level:3, q:"A thesis uses GDELT to claim that a border region was “peaceful” for ten years because few events were recorded. What is the strongest methodological objection?", options:[
     {t:"Event data built from news inherit news values, so low coverage may mean neglect rather than peace; validate with other sources", ok:true, why:"Correct. Absence in the data is not evidence of absence of events."},
     {t:"GDELT only covers Europe", why:"It monitors news from nearly every country."},
     {t:"GDELT has no data before 2020", why:"Its archives go back to 1979."},
     {t:"Event data are always more accurate than news", why:"Event data are derived from news and add coding errors."}]},
   {id:"e4u7-q41", lesson:"e4u7-l5", level:2, q:"Which source would best let you read a 1930s Australian newspaper for free?", options:[
     {t:"Trove (National Library of Australia)", ok:true, why:"Correct. National libraries’ digitised collections are often free."},
     {t:"Media Cloud", why:"Media Cloud covers recent online news."},
     {t:"The *Digital News Report*", why:"It is a survey, not an archive."},
     {t:"The Meta Content Library", why:"That covers Meta’s platforms."}]},
   {id:"e4u7-q42", lesson:"e4u7-l5", level:3, q:"A researcher studies a protest movement’s public posts in a country where protesters are prosecuted. She plans to publish exact quotes with usernames removed. What is the main problem?", options:[
     {t:"Exact quotes can be searched and traced back to the authors, putting them at risk; paraphrase or aggregate instead", ok:true, why:"Correct. Removing usernames is not enough when text is searchable."},
     {t:"Public posts can never be studied", why:"They can, with care for context and harm."},
     {t:"She should add the usernames back for accuracy", why:"That would increase the risk to the authors."},
     {t:"Quotes are only a problem in democracies", why:"The risk is greatest where protest is prosecuted."}]},
   {id:"e4u7-q43", lesson:"e4u7-l5", level:2, q:"What does Helen Nissenbaum’s “contextual integrity” imply for social media research?", options:[
     {t:"Information carries the norms of the context it was shared in, so moving a post into a publication can be a harm even if it was public", ok:true, why:"Correct. Nissenbaum’s idea explains why “it’s public” doesn’t settle the ethics."},
     {t:"Anything public may be used in any way", why:"That is the view contextual integrity challenges."},
     {t:"Researchers must never use online data", why:"It asks for care, not a ban."},
     {t:"Only images, not text, raise privacy concerns", why:"Text raises the same concerns."}]},
   {id:"e4u7-q44", lesson:"e4u7-l5", level:3, q:"A student wants to compare framing of the same summit in Indonesian, Australian and Indian newspapers. Which design is strongest?", options:[
     {t:"Two outlets per country chosen for reach and contrasting lines, a fixed date window, search terms in each language, a piloted codebook and a reliability check", ok:true, why:"Correct. Each choice is justified and the coding is tested."},
     {t:"Every article any search engine returns for the summit’s name", why:"An unbounded, search-engine-ranked sample is neither defined nor comparable."},
     {t:"One outlet chosen because the student likes it", why:"Choice by preference introduces bias and allows no comparison."},
     {t:"Only headlines from one country, coded by the student alone", why:"No comparison, and no reliability check."}]},
   {id:"e4u7-q45", lesson:"e4u7-l5", level:1, q:"Which tool did Meta close on 14 August 2024?", options:[
     {t:"CrowdTangle", ok:true, why:"Correct. It was replaced by the Meta Content Library."},
     {t:"GDELT", why:"GDELT is independent and still running."},
     {t:"The Wayback Machine", why:"The Internet Archive runs it."},
     {t:"Community Notes", why:"Meta adopted Community Notes in 2025."}]}
  ]
});
