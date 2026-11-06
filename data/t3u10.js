/* Track 3 · Unit 10 · Open data, FAIR and data ethics */
ICA.addUnit({
  id:"t3u10", track:"t3", n:10, title:"Open data, FAIR and data ethics", icon:"🌐",
  blurb:"Find trustworthy open data from statistics offices, international bodies, cities and research repositories; read its licence and cite it properly; share your own data the FAIR and safe way; and ask who data serve, who they leave out and who gets to decide.",
  goals:[
    "Explain what makes data open under the Open Definition, and find data from national statistics offices, international organisations, government portals, research repositories and search tools",
    "Judge a dataset before trusting it: who made it, how it was collected, what its words mean, what it covers and how it has changed",
    "Read common data licences (CC0, CC BY, ODbL, government licences such as the UK OGL) and cite datasets with versions, DOIs and access dates",
    "Package your own data so others can find, open, understand and reuse it, and decide how openly data about people can be shared",
    "Use the principles of Data Feminism and the CARE principles to ask who is counted, who benefits and who is harmed, including in algorithms"
  ],
  read:[
    {book:"datafem", where:"Introduction, “Why Data Science Needs Feminism”, and Chapter 1, “The Power Chapter”", note:"Free to read online. The whole book is organised around its seven principles."},
    {book:"ostat", where:"Chapter 1, Section 1.2 “Data, Sampling, and Variation in Data and Sampling”", note:"Background for judging how data were collected."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u10-l1", title:"What open data is, and where to find it", minutes:50,
   hook:{q:"A city transport office lets anyone download its bus timetable spreadsheet for free. The page says “for personal, non-commercial use only”. Is this open data, as the Open Definition uses the word?", options:["Yes: it’s free to download","No: open data must allow use for any purpose, including commercial use","Yes: it’s a spreadsheet, so computers can read it","Only if it also has a DOI"], answer:1, reveal:"**No.** “Free to download” and “open” are different things. The Open Definition says an open licence must allow anyone to use, change and share the data **for any purpose**, so a non-commercial condition makes it not open, however generous it feels. This lesson explains what open really means and then tours the places where genuinely open data live."},
   goals:[
     "State what the Open Definition requires (an open licence, access, machine readability and an open format) and tell open data from data that are merely free to view",
     "Name the main kinds of data producers and publishers, with examples from several countries",
     "Use portals and dataset search tools to find data, and trace a copy back to its original source",
     "Explain the risks of community uploads such as Kaggle datasets, and how to check them"
   ],
   learn:[
    {h:"Free to look at isn’t the same as open", body:[
      {lead:"Lots of data are free to look at. Far fewer are open, and the difference decides what you’re allowed to do with them."},
      "Think of a public library book and a recipe someone has given you. You may read the library book for free, but you can’t photocopy it and sell copies. The recipe, if the cook says “do what you like with it”, you can change, print and share. Open data is the second kind: permission is given in advance, to everyone.",
      "The most widely used yardstick is the **Open Definition** (version 2.1), maintained by Open Knowledge. Its summary: “Knowledge is open if anyone is free to access, use, modify, and share it — subject, at most, to measures that preserve provenance and openness.” In other words, the only conditions allowed are things like “say where it came from” and “keep it open”.",
      {table:[
        ["Requirement","What it means in practice"],
        ["Open licence or public domain","A licence (or waiver) lets anyone use, change and share the data, for any purpose, including commercially"],
        ["Access","The whole dataset is available, and it should be downloadable from the internet free of charge"],
        ["Machine readability","A computer can easily process it, element by element (a CSV, not a photo of a table)"],
        ["Open format","Usable with at least one free, open-source tool, with no fee or restriction on the format"]
      ]},
      "So [[open-data|open data]] is **legally** open (the licence) and **technically** open (you can actually get it and work with it). Extra terms on a website must not take away what the licence gives: a page that says “CC BY 4.0” and also “you may not share this data” contradicts itself.",
      {ex:"Three versions of one invented bus timetable:\n\n1. A PDF scan of a printed table, “all rights reserved”. Free to view, but neither legally nor technically open.\n2. A CSV file, “non-commercial use only”. Technically usable, but not legally open: it limits the purpose.\n3. A CSV file under CC BY 4.0. Open: anyone may use it, even in a paid app, as long as they credit the city.", label:"Worked example"},
      {key:"Open data = an open licence + access to the whole dataset + a machine-readable, open format. Free to view is not enough."}
    ]},
    {h:"Who makes data, and why it matters", body:[
      "Before you search, ask: **who would have had to count this?** Almost every dataset comes from one of a few kinds of producer, and each has typical strengths and blind spots.",
      {table:[
        ["Producer","Examples","Typical strengths"],
        ["[[national-statistics-office|National statistics offices]]","Censuses, labour force surveys, prices, births and deaths","Careful methods, long series, documented definitions"],
        ["International organisations","UN agencies, World Bank, OECD, WHO","Comparable figures across many countries; some are estimates"],
        ["Governments and cities","Budgets, transport, inspections, air quality","Local detail, often updated often"],
        ["Researchers","Experiments, surveys, field measurements","Specialised data behind published studies"],
        ["Communities and companies","OpenStreetMap maps, citizen science, company releases","Coverage officials don’t collect"]
      ]},
      "National statistics offices are usually the deepest source for one country. Many follow the UN’s Fundamental Principles of Official Statistics, which include impartiality, professional standards and making their sources and methods public.",
      "International organisations mostly **collect** figures from countries and make them comparable. When national data are missing or inconsistent, some publish **modelled estimates** instead. The World Health Organization notes that many figures in its Global Health Observatory are WHO estimates, which may differ from a country’s own official statistics. That isn’t an error: it’s a different method (you’ll judge this in the next lesson)."
    ]},
    {h:"Where datasets live", body:[
      "A dataset often appears in several places: its original home, copies in bigger databases, and listings in search tools. Knowing these layers helps you work out which copy to trust and cite.",
      {fig:'<svg viewBox="0 0 340 410"><defs><marker id="u10a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="10" y="8" width="320" height="86" rx="12" stroke-width="1.5"/><text x="170" y="32" text-anchor="middle">1 · Producers</text><text class="s" x="170" y="54" text-anchor="middle">statistics offices · ministries · cities</text><text class="s" x="170" y="70" text-anchor="middle">international bodies · researchers</text><text class="s" x="170" y="86" text-anchor="middle">communities (e.g. OpenStreetMap)</text><path class="d-ink" d="M170 94 V 112" stroke-width="2" marker-end="url(#u10a1)"/><rect class="d-sage" x="10" y="116" width="320" height="72" rx="12" stroke-width="1.5"/><text x="170" y="140" text-anchor="middle">2 · Original homes</text><text class="s" x="170" y="160" text-anchor="middle">official portals and statistics sites</text><text class="s" x="170" y="176" text-anchor="middle">research repositories (with DOIs)</text><path class="d-ink" d="M170 188 V 206" stroke-width="2" marker-end="url(#u10a1)"/><rect class="d-gold" x="10" y="210" width="320" height="72" rx="12" stroke-width="1.5"/><text x="170" y="234" text-anchor="middle">3 · Copies and aggregators</text><text class="s" x="170" y="254" text-anchor="middle">international databases · explainer sites</text><text class="s" x="170" y="270" text-anchor="middle">community uploads (e.g. Kaggle)</text><path class="d-ink" d="M170 282 V 300" stroke-width="2" marker-end="url(#u10a1)"/><rect class="d-soft" x="10" y="304" width="320" height="72" rx="12" stroke-width="1.5"/><text x="170" y="328" text-anchor="middle">4 · Search tools</text><text class="s" x="170" y="348" text-anchor="middle">index descriptions of datasets</text><text class="s" x="170" y="364" text-anchor="middle">and point you to layers 2 and 3</text><text class="s" x="170" y="398" text-anchor="middle">Trace every copy back up to layer 2.</text></svg>', alt:"Four stacked layers joined by downward arrows. Layer 1, producers: statistics offices, ministries, cities, international bodies, researchers and communities such as OpenStreetMap. Layer 2, original homes: official portals and statistics sites, and research repositories with DOIs. Layer 3, copies and aggregators: international databases, explainer sites and community uploads such as Kaggle. Layer 4, search tools, which index descriptions of datasets and point to layers 2 and 3. A note says to trace every copy back up to layer 2.", cap:"Search tools and aggregators are good starting points. The original home usually has the fullest documentation, the current version and the licence."}
    ]},
    {h:"A tour of major sources", body:[
      "These are long-established sources, but portals are redesigned and renamed often. If a link moves, search for the organisation’s name plus “data”.",
      {h:"National statistics offices"},
      {list:[
        "Examples: the Office for National Statistics (UK), Statistics Canada, IBGE (Brazil), INEGI (Mexico), Statistics South Africa, the Kenya National Bureau of Statistics, India’s Ministry of Statistics and Programme Implementation, the Australian Bureau of Statistics, and Japan’s e-Stat portal for official statistics.",
        "To find any country’s office, the UN Statistics Division keeps a list of links to national statistical offices: [unstats.un.org/home/nso_sites](https://unstats.un.org/home/nso_sites/)."
      ]},
      {h:"International organisations"},
      {list:[
        "**UNdata** ([data.un.org](https://data.un.org/)), from the UN Statistics Division, brings together many UN databases.",
        "**World Bank Open Data** ([data.worldbank.org](https://data.worldbank.org/)): development indicators for most countries. Unless the metadata says otherwise, its data are under CC BY 4.0; some third-party data have stricter terms.",
        "**OECD Data Explorer** ([data-explorer.oecd.org](https://data-explorer.oecd.org/)), renamed from OECD.Stat in April 2024: economic and social statistics, mainly for OECD members and partners.",
        "**WHO Global Health Observatory** ([who.int/data/gho](https://www.who.int/data/gho)): over 1,000 health indicators for WHO’s 194 Member States, with an API for programmers.",
        "Regional bodies too, such as **Eurostat** for the European Union."
      ]},
      {h:"Government and city portals"},
      "Many governments run a [[data-portal|data portal]]: a catalogue of datasets from many departments, such as **data.europa.eu** (the official portal for European data), **data.gov.uk** or the open data portals run by many cities. Search “[your city or country] open data”.",
      {h:"Research repositories"},
      "Researchers deposit data in a [[data-repository|data repository]] such as **Zenodo** (hosted by CERN) or **Harvard Dataverse**, or in subject archives such as national social science data services. Repository datasets usually have a [[doi|DOI]], a licence and the paper they belong to.",
      {h:"Explainers and aggregators"},
      "**Our World in Data** turns data from many producers into charts with sources listed. Its own charts and data are under CC BY, but data from providers such as the WHO or World Bank stay under those providers’ terms, and it asks you to credit both itself and the original provider."
    ]},
    {h:"Searching for data like a detective", body:[
      "General web search is poor at finding datasets, because the numbers sit inside files, not web pages. Combine these moves:",
      {ol:[
        "**Pin down exactly what you need:** the measure, the place, the period, and the level of detail (country, region, person).",
        "**Ask who would have had to count it** and go to that producer’s site or portal first.",
        "**Use the official name of the measure.** “Under-five mortality rate” finds far more than “how many babies die”. Add words like “dataset”, “CSV”, “table” or “microdata”.",
        "**Try a dataset search tool.** Google Dataset Search ([datasetsearch.research.google.com](https://datasetsearch.research.google.com/)) indexes pages whose publishers describe their datasets with schema.org “Dataset” markup. DataCite Commons searches datasets and other works that have DataCite DOIs. re3data.org lists research data repositories by subject.",
        "**Follow the trail upstream.** When a search finds a copy, look for “Source:” and go to the original home."
      ]},
      {warn:"A search tool only indexes descriptions that publishers provide. Google’s own team has written that this metadata can be incomplete, wrong or missing. Being listed says nothing about quality or licence."},
      {ex:"Amara, a public health student, wants under-five mortality for Ghana since 2000.\n\n• Ghana Statistical Service: national surveys and census reports, with the most local detail.\n• WHO Global Health Observatory and World Bank Open Data: both show estimates whose source is the UN Inter-agency Group for Child Mortality Estimation (UN IGME), so figures are comparable across countries.\n\nShe notes that the survey and the modelled estimates may not match exactly, and plans to read both sets of method notes.", label:"Worked example"}
    ]},
    {h:"Kaggle and other community uploads", body:[
      "**Kaggle** is a popular site for data science practice and competitions where anyone can upload a dataset. It’s excellent for learning, and many uploads are careful. But an upload is only as good as its uploader’s work and honesty:",
      {list:[
        "The uploader chooses the licence shown, and may not have the right to license data they copied from somewhere else.",
        "Files may be scraped, merged, trimmed or “cleaned” without saying how.",
        "Notes, definitions and version information from the original are often missing."
      ]},
      "This isn’t only a Kaggle problem. A 2023 audit of popular dataset hosting sites (GitHub, Hugging Face and Papers with Code; Kaggle wasn’t included) found licences missing for over 70% of datasets, and error rates above 50% in the licences that were shown.",
      {tip:"Treat a community upload like a quotation in a blog post: useful for a lead, but find the original before you rely on it, cite it or publish with it."},
      {h:"Common misconceptions"},
      {list:[
        "“If I can download it, I can reuse it.” Access isn’t permission; read the licence or terms.",
        "“Official data are always open.” Many are, but some carry restrictive terms, or are open only as summary tables.",
        "“The first search result is the source.” It’s often a copy. Go upstream."
      ]}
    ]}
   ],
   try:[
    {id:"t3u10-l1-x1", type:"sort", q:"Under the Open Definition, is each invented dataset **open** or **not open**?", buckets:["Open","Not open"], items:[
      {t:"Air quality readings as a CSV, under CC BY 4.0", b:0, why:"An open licence plus a machine-readable, open format: open. CC BY’s only condition, credit, is an allowed condition."},
      {t:"School locations as JSON, released under CC0", b:0, why:"CC0 waives rights as far as the law allows, and JSON is an open format: open."},
      {t:"Crop yields as a free CSV, “for non-commercial use only”", b:1, why:"Free and usable, but the non-commercial condition limits the purpose, and the Open Definition requires use for any purpose."},
      {t:"Election results under CC BY, but only as photographs of printed tables", b:1, why:"The licence is open, but a photo of a table isn’t machine readable, so it fails the technical tests."},
      {t:"Public sector statistics as CSV under the UK Open Government Licence v3.0", b:0, why:"OGL v3.0 is listed as conformant with the Open Definition: it allows any use, with an attribution condition."},
      {t:"A dashboard you can view online, with no download and terms forbidding copying", b:1, why:"You can look, but you can’t get the whole dataset or reuse it: not open."}
    ]},
    {id:"t3u10-l1-x2", type:"match", q:"Match each need to the best first place to look.", pairs:[
      ["The official unemployment rate for Brazil, by state","Brazil’s national statistics office (IBGE)","National offices run the labour force surveys and publish the most detailed official figures."],
      ["Comparable child vaccination coverage for every WHO Member State","The WHO Global Health Observatory","WHO compiles and harmonises health indicators so countries can be compared."],
      ["The data behind a published psychology experiment","The research repository linked from the paper","Researchers deposit study data in repositories such as Zenodo or Dataverse, usually with a DOI."],
      ["Bus stop locations in your own city","The city’s open data portal","Local operational data come from local government, often through a city portal."],
      ["A ready-made long-run chart, with its sources listed","Our World in Data","It builds explanatory charts from many producers and names each source."]
    ]},
    {id:"t3u10-l1-x3", type:"spot", q:"Tap each part of this invented portal listing that stops the data from being open.", ask:"stops it being open", parts:[
      {t:"Publisher: Riverton City Transport Department.", flag:false, why:"Naming the publisher is good practice and doesn’t restrict anything."},
      " ",
      {t:"Licence: CC BY 4.0.", flag:false, why:"An open licence that allows any use with credit."},
      " ",
      {t:"Format: CSV (UTF-8).", flag:false, why:"An open, machine-readable format."},
      " ",
      {t:"Terms of use: you may not share these data with third parties.", flag:true, why:"This contradicts the CC BY licence. The Open Definition says extra terms must not take away what the licence grants."},
      " ",
      {t:"Updated monthly.", flag:false, why:"Regular updates are useful and don’t affect openness."},
      " ",
      {t:"Full dataset available only by paid request; a 100-row sample is free.", flag:true, why:"Openness requires access to the whole work at no more than a reasonable reproduction cost, ideally a free download. A free sample isn’t enough."}
    ]},
    {id:"t3u10-l1-x4", type:"mcq", q:"Which statement about Google Dataset Search is accurate?", options:[
      {t:"It indexes descriptions that publishers add to their pages, and links you to where the data live; it doesn’t check quality or licences.", ok:true, why:"Right. It relies on schema.org Dataset markup from publishers, which can be incomplete or wrong, so you still judge each dataset yourself."},
      {t:"It stores verified copies of every public dataset.", why:"It’s an index of descriptions, not an archive, and it doesn’t verify datasets."},
      {t:"Only datasets with an open licence can appear in it.", why:"Any publisher can describe a dataset with markup, whatever its licence."},
      {t:"A dataset that doesn’t appear in it doesn’t exist.", why:"A common reason a dataset is missing is that its page has no markup. Always check the producer’s own site too."}
    ]},
    {id:"t3u10-l1-x5", type:"order", q:"Put Tomás’s search for rainfall data for his region in a sensible order.", items:[
      {t:"Decide exactly what he needs: monthly rainfall, his region, 1991 to the latest year", why:"A precise question tells you which producer and which table to look for."},
      {t:"Ask who measures rainfall officially: the national meteorological service", why:"Thinking about the producer points you to the original home."},
      {t:"Search that service’s site, then a dataset search tool for other copies", why:"Start at the source; use search tools to find alternatives or older series."},
      {t:"Read the metadata and licence: station list, units, gaps, terms", why:"Before downloading, check what the numbers mean and whether he may reuse them."},
      {t:"Download from the original, noting the version or date he downloaded it", why:"Recording when and where he got it lets him cite it and lets others repeat his work."}
    ]},
    {id:"t3u10-l1-x6", type:"mcq", q:"Kenji finds a Kaggle dataset of national happiness scores, labelled CC0 by the person who uploaded it. He wants to use it in a published report. What should he do?", options:[
      {t:"Find the original source the uploader copied from, check its terms and documentation, and use and cite that original.", ok:true, why:"Right. The uploader may not have had the right to release someone else’s data as CC0, and the original has the definitions and version details he’ll need."},
      {t:"Use it freely: CC0 means no conditions.", why:"CC0 only works if the person applying it holds the rights. A copied dataset’s real terms are set by its original publisher."},
      {t:"Cite Kaggle as the publisher of the data.", why:"Kaggle hosts the file; it didn’t produce the scores. Cite the producer of the data you actually rely on."},
      {t:"Avoid it entirely: data on Kaggle are never accurate.", why:"Many Kaggle datasets are fine and useful for practice. The issue is checking provenance and licence, not banning a site."}
    ]}
   ],
   apply:{intro:"Use a phone or computer browser. Write your findings down; you’ll reuse them in the next two lessons.", tasks:[
     {t:"Find your national statistics office and one dataset", how:["Open the UN Statistics Division’s list of national statistical offices (search “UNSD national statistical offices websites”) and find your country, or a country you’re curious about.","On that office’s site, look for “Data”, “Statistics” or “Tables” and find one dataset on a topic you care about (population, prices, employment, health…).","Note the publisher, the title, the date it was last updated, the formats offered and the licence or terms of use (often at the page foot, called “Terms”, “Copyright” or “Licence”)."], write:"Office… Dataset title… Last updated… Formats… Licence or terms…"},
     {t:"Find the same topic through a search tool and trace it upstream", how:["Open Google Dataset Search or DataCite Commons and search for your topic plus a place.","Open one result that is **not** on the original producer’s site.","Find where it says the data came from, and follow that to the original home. Compare: is the copy the same version? Is the licence the same?"], write:"Copy found at… Original home… Same version?… Same licence?…"},
     {t:"Decide whether it’s open", how:["For one of your datasets, check the four requirements: open licence, access to the whole dataset, machine readable, open format.","Write “open” or “not open” and the reason."], write:"Open or not… because…"}
   ], proof:"Notes on two datasets: where each lives, its licence, whether it’s open under the Open Definition, and the original home of a copy you found."},
   read:[
    {book:"wlsf", where:"Background reading: Part III, Chapter 7 “Go Upstream to Find the Source”", note:"Written about news claims, but the same habit of tracing a copy to its source applies to datasets."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u10-l2", title:"Judging a dataset before you trust it", minutes:50,
   hook:{q:"Two respected sources give different under-five mortality figures for the same country and the same year. What is the most likely explanation?", options:["One of them must be fake","They used different methods: for example, one survey versus a statistical model that combines many sources","Someone made a typing error","Rounding: one source uses whole numbers"], answer:1, reveal:"**Different methods**, most of the time. A national household survey, a civil registration system and a model that combines many sources can all give honest, different numbers for the same thing. Neither is automatically “right”. This lesson gives you six questions that reveal how a number was made, so you can choose and explain the figure you use."},
   goals:[
     "Ask six questions of any dataset: who made it and why, how it was collected, what its words mean, what it covers, how it has changed and how it is documented",
     "Explain what censuses, sample surveys, administrative records and modelled estimates each capture and miss",
     "Show how definitions (for example of unemployment or a city) change the numbers",
     "Use metadata, codebooks and version notes to decide whether a dataset fits your question"
   ],
   learn:[
    {h:"Data are made, not found", body:[
      {lead:"Every number in a dataset is the end of a chain of human decisions: what to count, how to count it, who to ask, and what to call the result."},
      "That doesn’t make data untrustworthy. It means trust has to be **earned by documentation**. A good dataset tells you how it was made, the way a good recipe tells you the oven temperature. A dataset with no story is like a dish with no recipe: it might be fine, but you can’t know.",
      "Earlier units gave you pieces of this: misleading numbers and rates in {{percentages-rates}}, sampling and nonresponse in {{survey-sampling}}, and [[provenance]], the record of where something came from. Here you put them together into one habit you can use on any dataset, from a city’s tree inventory to a global health database."
    ]},
    {h:"Six questions for any dataset", body:[
      {table:[
        ["Question","Where to look"],
        ["1. Who made it, and why?","Publisher, funder, purpose; is the producer independent of the result?"],
        ["2. How was it collected?","Methods note: census, survey, records, sensors, scraping or a model"],
        ["3. What do the words mean?","Definitions, units, categories, the [[data-dictionary|data dictionary]] or codebook"],
        ["4. Who and what is covered?","Population, places, period; who is left out; how missing values are coded"],
        ["5. Is it current, and has it changed?","Update schedule, revision notes, version number, breaks in the series"],
        ["6. May I use it, and how do I credit it?","Licence or terms, and the suggested citation"]
      ]},
      "You rarely need perfect answers. You need **enough** answers to know whether the dataset fits your question, and to describe its limits honestly when you use it.",
      {ex:"Kenji, writing about sugary drinks, finds two invented datasets:\n\nA: a national nutrition survey, run by the health ministry’s statistics unit, with a methods report, a codebook and a stated sample of 6,000 people.\nB: a summary table from a drinks industry association, with no methods note.\n\nB isn’t automatically wrong, and A isn’t automatically right. But A answers the six questions and B answers almost none, so A is the one he can check, explain and cite. If he mentions B, he says who published it and that its methods aren’t stated.", label:"Worked example: who made it, and why?"},
      "Purpose matters because it shapes choices: an organisation that benefits from a result has reasons to define, sample or present things in a particular way. That’s a reason to look harder at the methods, not to dismiss the data unread.",
      {tip:"Look for links labelled “Methodology”, “Metadata”, “About this data”, “Technical notes”, “Codebook” or “Quality report”. Statistics offices often publish a quality report for each major series."}
    ]},
    {h:"How data are collected, and what each method misses", body:[
      {table:[
        ["Method","What it captures","What it can miss"],
        ["Census","Everyone in a place, on a reference date","Hard-to-count groups; usually only every 5 or 10 years"],
        ["Sample survey","A subset that stands for a population","[[margin-of-error|Sampling error]]; people who don’t respond"],
        ["Administrative records","By-products of services: tax, schools, hospitals, police","Anyone who doesn’t use or reach that service"],
        ["Sensors and devices","Continuous measurements (air, traffic, weather)","Faulty or badly placed sensors; places with none"],
        ["Modelled estimates","Fill gaps by combining sources with a statistical model","Depends on the model’s assumptions; revised as data arrive"]
      ]},
      "**Administrative data** need special care. Recorded crime, for example, counts crimes that were reported to and recorded by the police, not all crimes. If a new online form makes reporting easier, recorded crime can rise even if crime doesn’t (see {{crime-statistics}}).",
      {ex:"Amara’s under-five mortality figures for Ghana (from Lesson 1):\n\n• A national household survey asks women about the births and deaths of their children. It gives rich detail, but it has sampling error and refers to the years before the survey.\n• UN IGME estimates, shown by WHO and the World Bank, combine surveys, censuses and registration data in a model, giving a smooth series for every year that can be compared across countries.\n\nThe two can differ for the same year without either being wrong. Amara uses the UN IGME series for comparing countries and the survey for regional detail, and says so in her methods.", label:"Worked example"}
    ]},
    {h:"Definitions decide the number", body:[
      "Two honest datasets can disagree simply because they define the same word differently. Always find the definition.",
      {list:[
        "**Unemployment.** Under the international (ILO) definition, unemployed people are without work, available to start, and actively looking. Someone who has given up looking isn’t counted as unemployed; they’re outside the labour force.",
        "**A city.** A city’s population can mean the area inside its legal boundary, the built-up urban area, or the wider metropolitan region where people commute from.",
        "**A household.** Some surveys count people who share a dwelling; others, people who share meals or a budget.",
        "**Money.** Is it in current prices or adjusted for inflation ([[nominal-vs-real]])? In local currency or converted to dollars? Per person ([[per-capita]]) or in total?"
      ]},
      {ex:"Lucía compares two sources for the population of an invented city, Porto Lindo.\n\nSource A: 0.9 million (“municipality”).\nSource B: 3.2 million (“metropolitan area”).\n\nBoth can be right. The metropolitan area includes 11 surrounding towns. Before comparing Porto Lindo with other cities, she must use the same kind of area for all of them.", label:"Worked example"},
      {key:"When two numbers disagree, compare their definitions, methods and dates before you decide one is wrong."}
    ]},
    {h:"Copies lose context", body:[
      "Each time data are copied into another database, something useful may be added (comparability, a tidy format), and something may be lost (footnotes, definitions, the version).",
      {fig:'<svg viewBox="0 0 340 430"><defs><marker id="u10a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><path class="d-ink" d="M22 380 V 20" stroke-width="2" marker-end="url(#u10a2)"/><text class="s" transform="translate(14 200) rotate(-90)" text-anchor="middle">go upstream for context</text><rect class="d-sage" x="40" y="8" width="290" height="80" rx="12" stroke-width="1.5"/><text x="185" y="32" text-anchor="middle">Survey answers (microdata)</text><text class="s" x="185" y="54" text-anchor="middle">every detail, one row per person;</text><text class="s" x="185" y="70" text-anchor="middle">needs its codebook to make sense</text><path class="d-ink" d="M185 88 V 106" stroke-width="2" marker-end="url(#u10a2)"/><rect class="d-lup" x="40" y="110" width="290" height="80" rx="12" stroke-width="1.5"/><text x="185" y="134" text-anchor="middle">Statistics office tables</text><text class="s" x="185" y="156" text-anchor="middle">adds definitions, margins of error,</text><text class="s" x="185" y="172" text-anchor="middle">footnotes and revision notes</text><path class="d-ink" d="M185 190 V 208" stroke-width="2" marker-end="url(#u10a2)"/><rect class="d-gold" x="40" y="212" width="290" height="80" rx="12" stroke-width="1.5"/><text x="185" y="236" text-anchor="middle">International database</text><text class="s" x="185" y="258" text-anchor="middle">harmonised for comparison;</text><text class="s" x="185" y="274" text-anchor="middle">sometimes re-estimated</text><path class="d-ink" d="M185 292 V 310" stroke-width="2" marker-end="url(#u10a2)"/><rect class="d-rose" x="40" y="314" width="290" height="80" rx="12" stroke-width="1.5"/><text x="185" y="338" text-anchor="middle">Copy on a community site</text><text class="s" x="185" y="360" text-anchor="middle">may drop notes, units,</text><text class="s" x="185" y="376" text-anchor="middle">version and licence</text><text class="s" x="185" y="418" text-anchor="middle">Further down: easier to use, less context.</text></svg>', alt:"Four stacked boxes joined by downward arrows. Survey answers, or microdata: every detail, one row per person, needing a codebook. Statistics office tables: adding definitions, margins of error, footnotes and revision notes. International database: harmonised for comparison and sometimes re-estimated. Copy on a community site: may drop notes, units, version and licence. An arrow up the left side reads: go upstream for context. A note says further down is easier to use but has less context.", cap:"Each step down the chain makes data easier to grab and loses some of the story. Go upstream when you need to know what a number means."},
      "**[[metadata]]** is the data about the data: title, creator, dates, coverage, definitions, licence. A **codebook** or data dictionary explains every column and every code, including how missing values are recorded (a blank, `NA`, or a code such as `-99`; see {{missing-values}}). If a dataset codes missing answers as `0`, you can’t tell “none” from “not asked”, and averages will be wrong."
    ]},
    {h:"Coverage, updates and revisions", body:[
      "**Coverage** asks who and what is in the data, and who isn’t. People without a fixed address, people in institutions such as prisons or care homes, informal workers, and places affected by conflict are often missing or undercounted. Small groups may be too few in a survey to report separately. These gaps aren’t random, and they matter most for the people left out (Lesson 5 returns to this).",
      "**Updates and revisions.** Many official figures are first published as provisional and revised as more information arrives; economic estimates such as GDP are routinely revised. Methods also change, creating a **break in the series**: a jump that comes from the new method, not from the world.",
      {list:[
        "Note the **version** or the **date you downloaded** the data. Next month, the same link may give different numbers.",
        "Read **revision notes** before comparing a new figure with an old one you saved.",
        "Look for **breaks** flagged in the metadata before drawing a trend line across them (see {{misleading-charts}})."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "“Official means exact.” Official statistics are carefully made, and they still have error, definitions and revisions, which good offices publish.",
        "“More data is always better.” A huge scraped dataset with unknown coverage can mislead more than a small, well-documented survey.",
        "“If the numbers disagree, one source is lying.” Usually they differ in definition, method or date."
      ]}
    ]}
   ],
   try:[
    {id:"t3u10-l2-x1", type:"sort", q:"How was each invented dataset most likely collected?", buckets:["Census","Sample survey","Administrative records","Modelled estimate"], items:[
      {t:"A count of everyone living in the country on one reference night", b:0, why:"Counting everyone in a place on a reference date is what a census does."},
      {t:"5,000 randomly chosen households asked about their spending", b:1, why:"A subset chosen to represent a population is a sample survey."},
      {t:"Hospital admissions recorded by staff as patients arrive", b:2, why:"These records are a by-product of providing a service."},
      {t:"Vaccination coverage for every year, combining surveys and clinic reports with a statistical model", b:3, why:"Combining sources in a model to fill gaps gives a modelled estimate."},
      {t:"Pupil numbers taken from school enrolment registers", b:2, why:"Registers kept to run schools are administrative records."},
      {t:"An opinion poll of 1,200 adults about trust in the courts", b:1, why:"A poll is a sample survey, with sampling error and nonresponse to consider."}
    ]},
    {id:"t3u10-l2-x2", type:"mcq", q:"Dmitri lost his job a year ago. He’s available for work but stopped looking because he believes there are no jobs in his town. Under the international (ILO) definition, how is he counted?", options:[
      {t:"Not as unemployed: he isn’t actively looking, so he’s outside the labour force.", ok:true, why:"Right. The ILO definition needs all three: without work, available and actively seeking. People in Dmitri’s situation are often called discouraged job-seekers, and many offices publish extra measures that include them."},
      {t:"As unemployed, because he has no job.", why:"Having no job isn’t enough under the ILO definition; the person must also be actively looking."},
      {t:"As employed, because he was employed last year.", why:"Labour statistics describe a recent reference week or period, not last year."},
      {t:"He isn’t counted in any statistics at all.", why:"He’s still in the survey; he’s classified as outside the labour force rather than unemployed."}
    ]},
    {id:"t3u10-l2-x3", type:"spot", q:"Tap each part of this invented dataset description that should make you cautious.", ask:"is a warning sign", parts:[
      {t:"Source: compiled from various websites.", flag:true, why:"Vague provenance: you can’t check, update or cite the original sources."},
      " ",
      {t:"Collected in a national household survey, 2024 (8,400 households).", flag:false, why:"A clear method, date and sample size is exactly what you want."},
      " ",
      {t:"Income is in local currency, current prices.", flag:false, why:"This is a useful definition. You may need to adjust for inflation, but it tells you so."},
      " ",
      {t:"Missing answers are recorded as 0.", flag:true, why:"You can’t tell “no income” from “didn’t answer”, so averages and counts will be wrong."},
      " ",
      {t:"Last updated: unknown.", flag:true, why:"Without a date or version you can’t tell whether figures have been revised or which version you have."},
      " ",
      {t:"Regions follow the 2019 boundaries.", flag:false, why:"Documenting boundaries is good practice; it helps you compare like with like."}
    ]},
    {id:"t3u10-l2-x4", type:"mcq", q:"Recorded thefts in a district rose 20% in the year a simple online reporting form was introduced. What is the most careful conclusion?", options:[
      {t:"Reporting may have become easier, so the rise could be partly or wholly in reporting, not in thefts.", ok:true, why:"Right. Recorded crime is administrative data: it counts what reaches police records. A change in the recording process can change the numbers. A victimisation survey could help check."},
      {t:"Thefts definitely rose by 20%.", why:"That treats recorded crime as a count of all crime, which it isn’t."},
      {t:"The online form caused more thefts.", why:"Nothing suggests the form changed behaviour by thieves. It changed how easily victims could report."},
      {t:"The data are useless and should be ignored.", why:"They’re still useful, with the limitation stated. Understanding how they were made is the point."}
    ]},
    {id:"t3u10-l2-x5", type:"match", q:"Match each question to where you’d usually find the answer.", pairs:[
      ["What does the column `hh_size` mean?","The data dictionary or codebook","The codebook explains every variable and code."],
      ["How were people chosen to take part?","The methodology or technical notes","Methods notes describe sampling, fieldwork and response rates."],
      ["Has last year’s figure changed since I saved it?","The revision notes or version history","Producers record what they revised and when."],
      ["May I reuse this in a paid report?","The licence or terms of use","Only the licence says what reuse is allowed."],
      ["Which regions and years are included?","The coverage section of the metadata","Metadata states the population, area and period covered."]
    ]},
    {id:"t3u10-l2-x6", type:"mcq", q:"Lucía finds that the population of Porto Lindo is 0.9 million in one source and 3.2 million in another. What should she check first?", options:[
      {t:"Whether each figure covers the same area: the municipality, the urban area or the metropolitan region.", ok:true, why:"Right. Different area definitions are the most common reason city populations differ, and the gap here is far too big for rounding or one year’s growth."},
      {t:"Which source is newer, and use that one.", why:"Date matters, but no city grows from 0.9 to 3.2 million in a year or two. The definitions differ."},
      {t:"Average the two figures.", why:"Averaging two different definitions gives a number that describes nothing."},
      {t:"Whichever has more decimal places, since it’s more precise.", why:"Decimal places show how a number is displayed, not whether it measures what you need."}
    ]}
   ],
   apply:{intro:"Use a dataset you found in Lesson 1, or any official dataset on a topic you care about.", tasks:[
     {t:"Write a dataset report card", how:["Open the dataset’s landing page and any linked “Methodology”, “Metadata” or “About this data” pages.","Answer the six questions from this lesson in one or two lines each.","Where you can’t find an answer, write “not stated”: that’s a finding too."], write:"1 Who and why… 2 How collected… 3 Definitions… 4 Coverage and gaps… 5 Updates and version… 6 Licence and citation…"},
     {t:"Compare two sources for one number", how:["Pick one figure (for example, a country’s population, unemployment rate or life expectancy for one year).","Find it in two places: the national statistics office and an international database such as World Bank Open Data, the WHO Global Health Observatory or the OECD Data Explorer.","If they differ, read both definitions and methods notes, and write the most likely reason."], write:"Figure A (source, definition)… Figure B (source, definition)… Likely reason they differ…"}
   ], proof:"A six-question report card for one dataset, and a short comparison of one figure from two sources with the reason they agree or differ."},
   read:[
    {book:"ostat", where:"Chapter 1, Section 1.2 “Data, Sampling, and Variation in Data and Sampling”", note:"Especially its parts on sampling and on missing data and categories."},
    {book:"wlsf", where:"Background reading: Part III, Chapter 7 “Go Upstream to Find the Source”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u10-l3", title:"Data licences and citing data", minutes:55,
   hook:{q:"Fatima uses a dataset licensed CC BY 4.0 to make a chart for her small business’s website. What does the licence require?", options:["She must pay a licence fee","She must ask the creator for permission first","She must credit the source, link to the licence and say if she changed the data","Nothing: data are facts, so licences don’t apply"], answer:2, reveal:"**Credit, licence link, and a note of any changes.** CC BY gives permission in advance, including for commercial use, on one condition: attribution. And licences do matter for data: in some places databases have their own legal protection, which CC BY 4.0 also covers. This lesson walks through the main data licences, what each asks of you, and how to cite datasets so others can find exactly what you used."},
   goals:[
     "Explain why data need licences, including the difference between copyright in facts and database rights",
     "State what CC0, PDDL, CC BY, ODC-By, CC BY-SA, ODbL and government licences such as the UK OGL require",
     "Recognise terms that make data not open, and what to do when there is no licence",
     "Cite a dataset with creator, year, title, version, publisher, type and identifier, and handle versions and changing data"
   ],
   learn:[
    {h:"Why data need licences", body:[
      {lead:"Facts belong to no one. A carefully built database can still belong to someone. Licences make the rules clear."},
      "In many countries, individual facts (today’s temperature, a town’s population) can’t be protected by [[copyright]]. In the United States, the Supreme Court held in *Feist v. Rural* (1991) that the facts in a telephone directory weren’t protected, though an original selection or arrangement of facts can be.",
      "The European Union and the UK add a separate **[[database-right|database right]]**: it protects databases that took substantial investment to obtain, check or present, even when the facts inside aren’t copyrighted. Other countries have their own rules, and some data, such as photographs, maps or written descriptions, are clearly creative works.",
      "Because the law differs by country and by kind of data, reusers often can’t tell what’s allowed. A **[[data-licence|data licence]]** removes the doubt: the publisher gives permission in advance, on stated conditions. Licences such as **CC BY 4.0** cover copyright **and** database rights, which is one reason they’re popular for data. (For Creative Commons basics, see {{creative-commons}}.)",
      {warn:"No licence doesn’t mean no rules. If a dataset has no licence or terms, don’t assume you may republish it. Check the original publisher’s site, and ask if you need to."}
    ]},
    {h:"The main open data licences", body:[
      "All of these are conformant with the Open Definition (Lesson 1). They differ in what they ask in return.",
      {table:[
        ["Licence","What you must do","Notes"],
        ["[[cc0|CC0]] · PDDL","Nothing required","Waive rights as far as the law allows; credit is still good scholarly practice"],
        ["[[cc-by|CC BY 4.0]] · ODC-By","Credit the source; link the licence; say if you changed it","Commercial use allowed"],
        ["CC BY-SA 4.0 · [[odbl|ODbL]]","Credit, and share adapted data under the same or a compatible licence","[[share-alike|Share-alike]]: keeps derivatives open"],
        ["[[open-government-licence|UK OGL v3.0]]","Include the provider’s attribution statement, and link the licence where possible","Excludes personal data, logos and third-party rights"]
      ]},
      {h:"Two licences in more detail"},
      {list:[
        "**ODbL** (Open Database License), used for OpenStreetMap’s map data. If you publicly use an **adapted database**, you must offer it under the ODbL (or a compatible licence) and give people access to it or to a file showing your changes. A **produced work**, such as a printed map or a chart made from the database, doesn’t have to be ODbL itself, but must carry a notice saying the data came from that database under the ODbL.",
        "**UK Open Government Licence v3.0.** You may copy, adapt and use the information commercially. You must acknowledge the source with the provider’s attribution statement; if none is given, use: “Contains public sector information licensed under the Open Government Licence v3.0.” It doesn’t cover personal data, and you mustn’t suggest official endorsement. It’s compatible with CC BY 4.0 and ODC-By."
      ]},
      "Other governments have their own open licences, such as France’s **Licence Ouverte 2.0** (credit the source and the date the information was last updated), the **Open Government Licence – Canada 2.0**, and Germany’s **Data licence Germany – attribution 2.0**. Many international bodies use CC BY 4.0: the World Bank applies it unless the metadata says otherwise.",
      {fig:'<svg viewBox="0 0 340 420"><rect class="d-sage" x="10" y="8" width="320" height="78" rx="12" stroke-width="1.5"/><text x="170" y="32" text-anchor="middle">No conditions</text><text class="s" x="170" y="54" text-anchor="middle">CC0 · PDDL</text><text class="s" x="170" y="72" text-anchor="middle">use freely; credit is still kind</text><rect class="d-lup" x="10" y="96" width="320" height="94" rx="12" stroke-width="1.5"/><text x="170" y="120" text-anchor="middle">Credit the source</text><text class="s" x="170" y="142" text-anchor="middle">CC BY 4.0 · ODC-By · UK OGL v3.0</text><text class="s" x="170" y="158" text-anchor="middle">Licence Ouverte 2.0 · OGL–Canada 2.0</text><text class="s" x="170" y="176" text-anchor="middle">any use, including commercial</text><rect class="d-gold" x="10" y="200" width="320" height="78" rx="12" stroke-width="1.5"/><text x="170" y="224" text-anchor="middle">Credit + share alike</text><text class="s" x="170" y="246" text-anchor="middle">CC BY-SA 4.0 · ODbL</text><text class="s" x="170" y="264" text-anchor="middle">adapted data stay under the same terms</text><rect class="d-rose" x="10" y="296" width="320" height="94" rx="12" stroke-width="1.5"/><text x="170" y="320" text-anchor="middle">Not open data</text><text class="s" x="170" y="342" text-anchor="middle">non-commercial (NC) or no-derivatives (ND)</text><text class="s" x="170" y="358" text-anchor="middle">custom terms that forbid sharing</text><text class="s" x="170" y="374" text-anchor="middle">no licence at all: ask first</text><text class="s" x="170" y="412" text-anchor="middle">Top three bands: open under the Open Definition.</text></svg>', alt:"Four stacked bands. No conditions: CC0 and PDDL; use freely, though credit is still kind. Credit the source: CC BY 4.0, ODC-By, UK OGL v3.0, Licence Ouverte 2.0 and OGL–Canada 2.0; any use including commercial. Credit plus share alike: CC BY-SA 4.0 and ODbL; adapted data stay under the same terms. Not open data: non-commercial or no-derivatives conditions, custom terms that forbid sharing, or no licence at all, in which case ask first. A note says the top three bands are open under the Open Definition.", cap:"Each step down asks more of you. The bottom band isn’t necessarily unusable, but you need to read the terms or ask."}
    ]},
    {h:"Not open, but maybe usable", body:[
      "Plenty of valuable data aren’t open, for good reasons. Survey **microdata** (one row per person) are often available only after you register and accept an end-user licence that forbids trying to identify anyone and passing the data on. Health records may need an approved project and a secure research environment. That’s data protection working as intended (Lesson 4).",
      "Other restrictions are choices: **non-commercial (NC)** or **no-derivatives (ND)** licences, or custom terms of use. NC conditions are tricky for data, because “commercial” can be hard to judge (is a paid consultant’s report commercial? yes), and they block reuse in many places.",
      {ex:"Oluwaseun builds a free walking-route app, funded by adverts, using:\n• OpenStreetMap map data (ODbL)\n• his city’s bus stops (CC BY 4.0)\n\nWhat he must do:\n1. Credit OpenStreetMap and say the data are under the ODbL, on the map screen or in an obvious “About” page.\n2. Credit the city and link to CC BY 4.0.\n3. If he publishes an improved copy of the map database itself, share it under the ODbL.\n\nAdverts are fine: neither licence forbids commercial use.", label:"Worked example"},
      {key:"Read the licence on the dataset itself, every time. One portal can hold datasets under several different licences."}
    ]},
    {h:"Why and how to cite data", body:[
      "Citing data does three jobs: it **credits** the people who made it, lets readers **find the exact data** you used, and makes your work **checkable**. The Joint Declaration of Data Citation Principles (2014) asks that data be cited as seriously as articles, with persistent identifiers.",
      "**[[datacite|DataCite]]** is a non-profit organisation that registers DOIs for datasets and other research outputs. It encourages, rather than requires, a particular style. Its preferred format uses the six mandatory parts of its metadata, with **Version** added when relevant:",
      {ex:"Creator (PublicationYear): Title. Version. Publisher. (resourceTypeGeneral). Identifier\n\nExample from DataCite’s own guidance:\nIrino, T; Tada, R (2009): Chemical and mineral compositions of sediments from ODP Site 127-797. V. 2.1. Geological Institute, University of Tokyo. (dataset). https://doi.org/10.1594/PANGAEA.726855", label:"DataCite’s preferred citation format", mono:true},
      "DataCite prefers DOIs shown as links (`https://doi.org/…`). Your own style guide sets the punctuation. In APA 7th edition, the same dataset becomes:",
      {ex:"Irino, T., & Tada, R. (2009). Chemical and mineral compositions of sediments from ODP Site 127-797 (Version 2.1) [Data set]. Geological Institute, University of Tokyo. https://doi.org/10.1594/PANGAEA.726855", label:"The same dataset in APA style (title in italics in a real reference list)", mono:true},
      "APA’s guidance: the year is the publication year **of the version you used**, the version goes in parentheses after the title, and the bracketed description can be “[Data set]” or similar. See {{citation-styles}} for styles in general.",
      {lab:"cl-doi", t:"Practise: write DOIs as links in the Citation Lab"}
    ]},
    {h:"Versions, changing data and access dates", body:[
      "Datasets change: errors get fixed, new years are added. A good citation pins down **which state of the data** you used.",
      {list:[
        "**Versioned repositories.** Zenodo gives each version its own DOI, plus a **[[concept-doi|concept DOI]]** that always resolves to the latest version. Cite the **version DOI** for the version you used; use the concept DOI only when you mean “this dataset in general”.",
        "**Live databases without versions** (many statistics portals). Give the table or indicator name and code, and the date you retrieved the data. APA adds a retrieval date only for sources designed to change that aren’t archived.",
        "**Aggregators.** Credit both the aggregator and the original producer, as Our World in Data asks."
      ]},
      {ex:"World Bank. (n.d.). Mortality rate, under-5 (per 1,000 live births) (Indicator SH.DYN.MORT) [Data set]. Retrieved March 3, 2026, from https://data.worldbank.org/indicator/SH.DYN.MORT\n\nThe World Bank is both author and publisher, so APA doesn’t repeat it. In the text, she also notes the original source: UN IGME estimates.", label:"One way to write Amara’s APA-style reference for a live indicator (title in italics in a real list)", mono:true},
      {tip:"Many repositories and portals show a ready-made “Cite this” box. Use it as a start, then check it has the version and the DOI as a link."},
      {h:"Common misconceptions"},
      {list:[
        "“CC0 means I don’t need to cite it.” Legally you needn’t credit; academically you still must cite the data you used.",
        "“Citing the search tool is enough.” Cite the dataset’s publisher and identifier, not the tool that found it.",
        "“The concept DOI is always best.” It points to the latest version, which may not be the one you analysed."
      ]}
    ]}
   ],
   try:[
    {id:"t3u10-l3-x1", type:"match", q:"Match each licence to what it asks of someone reusing the data.", pairs:[
      ["CC0","Nothing is legally required","CC0 waives rights as far as the law allows. Researchers still cite it as good practice."],
      ["CC BY 4.0","Credit the creator, link the licence and indicate changes","Attribution is CC BY’s only condition; commercial use is allowed."],
      ["ODbL","Credit, and offer adapted databases you publicly use under the ODbL","The ODbL is a share-alike licence for databases."],
      ["UK OGL v3.0","Include the provider’s attribution statement","If no statement is given, use the standard “Contains public sector information…” line."],
      ["CC BY-NC","Use only for non-commercial purposes","The NC condition limits purpose, so data under it aren’t open by the Open Definition."]
    ]},
    {id:"t3u10-l3-x2", type:"sort", q:"Is each use **allowed** or **not allowed** under the licence named?", buckets:["Allowed","Not allowed"], items:[
      {t:"Selling an app that uses CC BY 4.0 data, with proper credit", b:0, why:"CC BY permits commercial use as long as you give attribution."},
      {t:"Using CC BY-NC data in a paid consultancy report for a company", b:1, why:"A paid report for a business is primarily commercial, which NC forbids."},
      {t:"Publishing an improved copy of an ODbL database under CC BY only", b:1, why:"ODbL’s share-alike condition requires adapted databases you share publicly to stay under the ODbL or a compatible licence. CC BY has no share-alike, so it isn’t one."},
      {t:"Printing a poster map made from ODbL data, with a notice that it uses that database under the ODbL", b:0, why:"A map image is a produced work. It needs the notice but doesn’t have to be under the ODbL itself."},
      {t:"Putting CC0 data into a commercial textbook without naming the source", b:0, why:"CC0 imposes no conditions. (Naming the source is still good practice.)"},
      {t:"Combining UK OGL data and CC BY data in one report, crediting both", b:0, why:"Both allow reuse with attribution, and they’re compatible."}
    ]},
    {id:"t3u10-l3-x3", type:"order", q:"Put the parts of a citation in DataCite’s preferred order.", items:[
      {t:"Creator", why:"Who made the data comes first, as with an article’s author."},
      {t:"Publication year", why:"Next, in parentheses: the year the data (or this version) were published."},
      {t:"Title", why:"The dataset’s title follows the year."},
      {t:"Version", why:"DataCite suggests adding the version after the title when relevant."},
      {t:"Publisher", why:"The repository or organisation that published it."},
      {t:"Resource type, such as (dataset)", why:"Tells readers this is data, not an article."},
      {t:"Identifier, such as https://doi.org/…", why:"The persistent link comes last."}
    ]},
    {id:"t3u10-l3-x4", type:"spot", q:"Mei analysed version 3 of an invented Zenodo dataset. Tap each part of her reference that needs fixing.", ask:"needs fixing", mono:true, parts:[
      {t:"Okafor, C. (2025).", flag:false, why:"Creator and the year version 3 was published: correct."},
      " ",
      {t:"Weekly food prices in three Lagos markets", flag:false, why:"The dataset’s title (in italics in a real list)."},
      " ",
      {t:"[Data set].", flag:false, why:"APA’s bracketed description for data."},
      " ",
      {t:"Google Dataset Search.", flag:true, why:"A search tool isn’t the publisher. The publisher here is the repository, Zenodo."},
      " ",
      {t:"https://doi.org/10.5281/zenodo.1234500 (the concept DOI, for all versions)", flag:true, why:"Writing the DOI as a link is right, but this is the wrong DOI. She analysed version 3, so she should cite version 3’s own DOI and add “(Version 3)” after the title. The concept DOI sends readers to whatever the latest version is. (Both DOIs here are invented.)"}
    ]},
    {id:"t3u10-l3-x5", type:"mcq", q:"Ana finds a useful CSV on a personal web page. There is no licence and no terms. What can she safely assume?", options:[
      {t:"Nothing about reuse: she should find out where the data came from and ask the owner or the original publisher.", ok:true, why:"Right. Without a licence, the default rules of copyright and database law apply, and they vary by country. Tracing the source may reveal an original under a clear licence."},
      {t:"It’s public domain, because it’s on a public website.", why:"Being online doesn’t put something in the public domain."},
      {t:"She may reuse it if she credits the page.", why:"Credit is what CC BY asks; without a licence, there’s no permission to rely on."},
      {t:"Data can never be protected, so she may do anything.", why:"Facts may not be copyrightable in many places, but database rights and creative elements can still apply."}
    ]},
    {id:"t3u10-l3-x6", type:"mcq", q:"Priya downloads unemployment figures from a statistics portal that updates monthly and has no version numbers. What should her citation include so others can check her numbers?", options:[
      {t:"The table or series name and code, the publisher, the URL and the date she retrieved the data.", ok:true, why:"Right. For data designed to change without versions, a retrieval date and the exact table let others reconstruct what she saw."},
      {t:"Only the portal’s home page URL.", why:"A home page doesn’t identify the table, and the numbers may have changed since."},
      {t:"Today’s date as the publication year.", why:"That would be false information. Use the actual date or n.d., and give the retrieval date separately."},
      {t:"Nothing: government statistics don’t need citing.", why:"All sources you rely on need citing, and official figures are often revised."}
    ]}
   ],
   apply:{intro:"Use the datasets from Lessons 1 and 2.", tasks:[
     {t:"Read a licence and write the attribution", how:["Find the licence or terms for one dataset. If it’s a named licence, open its summary page (for example the Creative Commons or OGL page).","Write down what you must do if you reuse it (credit? share-alike? anything forbidden?).","Write the exact attribution line you would put under a chart made from it."], write:"Licence… I must… I must not… My attribution line…"},
     {t:"Cite the dataset two ways", how:["Write the citation in DataCite’s format: Creator (Year): Title. Version. Publisher. (dataset). Identifier.","Then write it in the style you use for study or work (APA, MLA, Chicago or another). Check the style guide’s own data set example.","If the data have no version, add the date you retrieved them and the table or indicator code."], write:"DataCite format… My style…"},
     {t:"Optional: compare a version DOI with a concept DOI", how:["Open any dataset on zenodo.org that has more than one version (look for “Versions” on the record page).","Find the DOI for one specific version and the DOI that covers all versions.","Write which one you’d cite for an analysis, and why."], write:"Version DOI… Concept DOI… I’d cite… because…"}
   ], proof:"An attribution line that meets a real dataset’s licence, and a citation of that dataset in two formats, with its version or retrieval date."},
   read:[
    {book:"datafem", where:"Background reading: Chapter 7, “Show Your Work”", note:"On crediting the many people whose work makes data possible."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u10-l4", title:"FAIR in practice: sharing your own data", minutes:55,
   hook:{q:"Hana removes names, emails and phone numbers from a survey of 1,000 people. Is it now safe to post the file publicly?", options:["Yes: without names, nobody can be identified","Not necessarily: combinations of details such as age, area, job and dates can still single people out","Yes, as long as the file is a CSV","Only if she adds a CC BY licence"], answer:1, reveal:"**Not necessarily.** Names are only the most obvious identifiers. A 2019 study estimated that 99.98% of Americans could be correctly re-identified in any dataset using 15 demographic attributes. Sharing data well means making them easy to find and reuse **and** making sure they can’t hurt the people in them. This lesson does both, step by step."},
   goals:[
     "Turn the FAIR principles into concrete steps: a repository, a persistent identifier, rich metadata, open formats, a README, a data dictionary and a licence",
     "Choose a suitable repository (subject, institutional or generalist) and explain why a personal website or cloud folder isn’t enough",
     "Write a README and data dictionary that let a stranger understand your data",
     "Decide how openly data about people can be shared, using consent, de-identification and controlled access"
   ],
   learn:[
    {h:"From principles to a folder", body:[
      {lead:"FAIR describes the goal. This lesson is the recipe: what you actually put in the folder, and where you put the folder."},
      "Research Skills Unit 9 introduced the **[[fair-principles|FAIR principles]]**: data that are Findable, Accessible, Interoperable and Reusable, by people and machines, and a [[data-management-plan-term|data management plan]] to get there (see {{data-management-plan}}). It also stressed that FAIR doesn’t mean open: sensitive data can be FAIR with controlled access.",
      "In practice, FAIR comes down to a handful of habits:",
      {table:[
        ["FAIR","What you actually do"],
        ["Findable","Deposit in a repository that gives a DOI; write a good title, description and keywords"],
        ["Accessible","Use a repository with a standard download route; keep the description public even if the files are restricted"],
        ["Interoperable","Use open formats and standard codes (ISO dates, country codes, units)"],
        ["Reusable","Add a README, a data dictionary, a clear licence and how the data were made"]
      ]},
      "What to share: usually the data that support your results, in raw form if law and consent allow and in cleaned form, plus the code or steps that turned one into the other (see {{cleaning-log}}). Share documentation even when you can’t share the data."
    ]},
    {h:"A dataset package a stranger can use", body:[
      "Picture someone opening your folder in ten years with no way to ask you anything. Everything they need should be inside.",
      {fig:'<svg viewBox="0 0 340 430"><rect class="d-panel" x="10" y="8" width="320" height="414" rx="12" stroke-width="1.5"/><text x="30" y="36">Folder: commuting-survey-2026/</text><rect class="d-lup" x="30" y="52" width="290" height="50" rx="8" stroke-width="1.2"/><text x="44" y="74">README.txt</text><text class="s" x="44" y="92">what, who, how, when, licence, citation</text><rect class="d-lup" x="30" y="112" width="290" height="50" rx="8" stroke-width="1.2"/><text x="44" y="134">LICENSE.txt</text><text class="s" x="44" y="152">for example CC BY 4.0 or CC0</text><rect class="d-sage" x="30" y="172" width="290" height="68" rx="8" stroke-width="1.2"/><text x="44" y="194">data/</text><text class="s" x="44" y="212">raw/ (only if consent and law allow)</text><text class="s" x="44" y="228">clean/commuting_2026_v1-1.csv</text><rect class="d-gold" x="30" y="250" width="290" height="50" rx="8" stroke-width="1.2"/><text x="44" y="272">data-dictionary.csv</text><text class="s" x="44" y="290">every column: meaning, type, units, codes</text><rect class="d-soft" x="30" y="310" width="290" height="50" rx="8" stroke-width="1.2"/><text x="44" y="332">scripts/</text><text class="s" x="44" y="350">cleaning and analysis code</text><rect class="d-rose" x="30" y="370" width="290" height="40" rx="8" stroke-width="1.2"/><text class="s" x="44" y="395">never here: consent forms, the ID key</text></svg>', alt:"A folder called commuting-survey-2026 containing: README.txt, describing what, who, how, when, licence and citation; LICENSE.txt, for example CC BY 4.0 or CC0; a data folder with raw data only if consent and law allow, and a cleaned CSV file with a version number in its name; data-dictionary.csv, describing every column’s meaning, type, units and codes; and a scripts folder with cleaning and analysis code. A red box notes that consent forms and the key linking codes to people never go in the package.", cap:"A shareable package. The key that links participant codes to real people, and signed consent forms, stay in secure storage, never in the package."},
      {h:"Formats that last"},
      "Choose **[[open-format|open formats]]** that free software can read for decades: [[csv|CSV]] in [[utf-8|UTF-8]] for tables, plain text or Markdown for documents, [[json|JSON]] for nested data. If you work in a program with its own format (SPSS, Stata, Excel), also export a CSV. Follow the tidy data rules from Unit 2 ({{tidy-data-principles}}): one variable per column, one observation per row, ISO dates (`2026-05-02`), and documented codes for missing values.",
      {tip:"Put a version number or date in file names (`commuting_2026_v1-1.csv`), and keep a short change log in the README. “final_FINAL2.xlsx” helps no one."}
    ]},
    {h:"README, data dictionary and metadata standards", body:[
      "A **[[readme|README]]** is the front door: plain text that explains the dataset to a human. A **data dictionary** ([[data-dictionary]], from Unit 2) explains every column.",
      {code:"Title: Commuting to work survey, Porto Lindo, 2026\nVersion: 1.1 (2026-06-10)\nCreators: Lucía Fernández (ORCID 0000-0000-0000-0000)\nContact: research email of the project\nDescription: Online survey of 412 adult workers about\n  how they travel to work. Invented example.\nMethods: see methods.txt (sampling, questions, dates)\nFiles: data/clean/commuting_2026_v1-1.csv\n       data-dictionary.csv\nMissing values: NA = not asked; -9 = refused\nLicence: CC BY 4.0\nCite as: Fernández, L. (2026). Commuting to work\n  survey, Porto Lindo, 2026 (Version 1.1) [Data set].\n  Zenodo. https://doi.org/[DOI added on publication]\nChanges: 1.1 fixed coding of question 4 (bus/tram)", lang:"txt", label:"README.txt (invented example)", cap:"The ORCID iD here is a placeholder pattern. A real one links the dataset to its creator across job changes."},
      "Repositories also ask you to fill in structured **metadata** when you upload. Behind the forms sit **[[metadata-standard|metadata standards]]**: shared rules for describing data, so machines can read the descriptions too. Examples:",
      {list:[
        "**DataCite** metadata: the general standard behind most dataset DOIs (creator, title, publisher, year, resource type, identifier, plus optional fields).",
        "**DDI** (Data Documentation Initiative): rich documentation for social science surveys, used by many data archives.",
        "**Darwin Core**: for biodiversity records (species, place, date).",
        "**Dublin Core** and **schema.org Dataset**: simple general descriptions; schema.org is what Google Dataset Search reads."
      ]}
    ]},
    {h:"Choosing a repository", body:[
      "A [[data-repository|data repository]] stores data for the long term, gives each dataset a [[persistent-identifier|persistent identifier]], and keeps the description findable. Look in this order:",
      {ol:[
        "**A subject repository** your field uses, such as a national social science data archive (the UK Data Service, ICPSR in the US, GESIS in Germany, the Australian Data Archive) or a specialist archive (for example GenBank for DNA sequences). These often curate and check deposits, and your field’s users will look there.",
        "**Your institution’s repository** ([[institutional-repository]]), if you have one.",
        "**A generalist repository**: Zenodo, Harvard Dataverse, Figshare, Dryad or OSF. re3data.org lists repositories by subject."
      ]},
      {table:[
        ["Generalist","What the 2023 comparison chart lists"],
        ["Zenodo","Free; 50 GB per dataset (more on request); DOI per version plus a concept DOI"],
        ["Harvard Dataverse","Free for researchers worldwide up to 1 TB; default licence CC0; versioning"],
        ["Dryad","Curates every deposit; CC0 only; a deposit fee unless an institution or publisher covers it"],
        ["Figshare · OSF","Free accounts with storage limits; DOIs; several licence choices"]
      ]},
      "Limits change, so check the repository’s current policy. Why not just a personal website, a cloud folder or a code-hosting site? Links break when people move jobs, there’s no promise of preservation, and no DOI. (Code hosts can be linked to a repository: Zenodo can archive a [[github|GitHub]] release and give it a DOI.)",
      "Other persistent identifiers help too: an **ORCID iD** for you ({{orcid}}) and a **ROR** ID for your organisation, both of which repositories can record."
    ]},
    {h:"Sharing safely when data are about people", body:[
      "Research Skills Unit 9 explained [[personal-data]], [[pseudonymisation]] and [[anonymisation-term|anonymisation]] (see {{anonymisation}}). Here is how those ideas decide **how openly** you can share.",
      {ol:[
        "**Check the [[informed-consent|consent]] and the law first.** What did participants agree to? If the information sheet promised that only the team would see the data, open sharing is off the table, whatever a journal asks.",
        "**Remove direct identifiers**: names, contact details, ID numbers, faces, voices, exact addresses.",
        "**Assess indirect identifiers.** Exact age, small areas, rare jobs, dates of events and free-text answers combine to single people out. The 2019 study in the hook estimated that 15 demographic attributes would correctly re-identify 99.98% of Americans.",
        "**Reduce detail**: age bands, larger areas, suppress tiny counts in tables, remove or edit free text.",
        "**Choose the access level** that matches the remaining risk."
      ]},
      {fig:'<svg viewBox="0 0 340 440"><defs><marker id="u10a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><text x="170" y="22" text-anchor="middle">As open as possible,</text><text x="170" y="40" text-anchor="middle">as closed as necessary</text><rect class="d-sage" x="10" y="54" width="300" height="80" rx="12" stroke-width="1.5"/><text x="160" y="78" text-anchor="middle">Open deposit</text><text class="s" x="160" y="98" text-anchor="middle">no personal or sensitive data, or</text><text class="s" x="160" y="114" text-anchor="middle">truly anonymised; licence + DOI</text><rect class="d-lup" x="10" y="144" width="300" height="80" rx="12" stroke-width="1.5"/><text x="160" y="168" text-anchor="middle">Open, with reduced detail</text><text class="s" x="160" y="188" text-anchor="middle">age bands, larger areas,</text><text class="s" x="160" y="204" text-anchor="middle">tiny counts suppressed</text><rect class="d-gold" x="10" y="234" width="300" height="80" rx="12" stroke-width="1.5"/><text x="160" y="258" text-anchor="middle">Controlled access</text><text class="s" x="160" y="278" text-anchor="middle">an archive checks each user;</text><text class="s" x="160" y="294" text-anchor="middle">signed agreement, sometimes secure room</text><rect class="d-rose" x="10" y="324" width="300" height="80" rx="12" stroke-width="1.5"/><text x="160" y="348" text-anchor="middle">Description only</text><text class="s" x="160" y="368" text-anchor="middle">public metadata and documentation;</text><text class="s" x="160" y="384" text-anchor="middle">explain why data can’t be shared</text><path class="d-ink" d="M326 60 V 400" stroke-width="2" marker-end="url(#u10a4)"/><text class="s" x="170" y="430" text-anchor="middle">Higher risk to people → further down</text></svg>', alt:"Four stacked options under the heading: as open as possible, as closed as necessary. Open deposit: no personal or sensitive data, or truly anonymised, with a licence and DOI. Open with reduced detail: age bands, larger areas, tiny counts suppressed. Controlled access: an archive checks each user, with a signed agreement and sometimes a secure room. Description only: public metadata and documentation, explaining why the data can’t be shared. An arrow down the right side and a note say higher risk to people moves you further down.", cap:"Every level is still FAIR if the description is findable and the route to access is clear."},
      "Not only personal data are sensitive. Exact locations of threatened species, archaeological sites or sacred places can lead to harm, so biodiversity and heritage databases often blur them. Data about communities may need the community’s say (Lesson 5).",
      {h:"Common misconceptions"},
      {list:[
        "“Removing names makes data anonymous.” Indirect identifiers often still identify people.",
        "“If I can’t share the data, FAIR doesn’t apply.” Share the description, the documentation and an access route.",
        "“A non-commercial licence protects participants.” Licences control reuse rights, not privacy. Protect people with de-identification and access controls; choose CC BY or CC0 for what you do share openly."
      ]}
    ]}
   ],
   try:[
    {id:"t3u10-l4-x1", type:"sort", q:"Lucía is preparing her invented commuting survey for a public repository. Where does each item belong?", buckets:["In the public package","Kept private, in secure storage"], items:[
      {t:"README.txt describing the study, licence and how to cite it", b:0, why:"The README is the front door of the package."},
      {t:"The spreadsheet linking participant codes to names and emails", b:1, why:"This key re-identifies everyone. It stays in secure storage, then is destroyed when no longer needed."},
      {t:"Signed consent forms", b:1, why:"They contain names and signatures. Keep them securely; never publish them."},
      {t:"The de-identified, cleaned CSV with age bands and districts", b:0, why:"Once checked for indirect identifiers, this is the data others can reuse."},
      {t:"The data dictionary", b:0, why:"Reusers need it to understand every column and code."},
      {t:"The script that cleaned the raw responses", b:0, why:"Sharing code shows how the data were processed, as long as it contains no personal details."}
    ]},
    {id:"t3u10-l4-x2", type:"match", q:"Match each problem to the fix that solves it.", pairs:[
      ["A colleague can’t open your .sav file","Also export the data as a UTF-8 CSV","CSV is an open format that free tools can read."],
      ["Nobody knows what column `q7_r` means","Add a data dictionary","A data dictionary explains each column, its codes and units."],
      ["The link in your paper broke when you changed jobs","Deposit in a repository that gives a DOI","A DOI keeps pointing to the data even if you or the files move."],
      ["Reusers can’t tell whether they may use it commercially","State an explicit licence, such as CC BY 4.0","Only a licence tells others what they may do."],
      ["Two versions circulate and no one knows which was analysed","Publish numbered versions, each with its own DOI","Version DOIs let a paper point to exactly what it used."]
    ]},
    {id:"t3u10-l4-x3", type:"order", q:"Put the steps for sharing a survey dataset in order.", items:[
      {t:"Check what participants consented to, and the data protection rules that apply", why:"Consent and law decide what is possible, so they come first."},
      {t:"Remove direct identifiers and reduce indirect ones", why:"De-identify before anything leaves secure storage."},
      {t:"Write the README and data dictionary, and export open formats", why:"Document the version you’ll actually share."},
      {t:"Choose a repository and a licence", why:"Pick where it will live and what reuse you allow."},
      {t:"Upload with full metadata and publish to get a DOI", why:"The repository issues the persistent identifier at publication."},
      {t:"Cite the DOI in your paper’s data availability statement and in the README", why:"Now readers can find exactly what you shared."}
    ]},
    {id:"t3u10-l4-x4", type:"mcq", q:"Sione surveyed all 40 adults on a small island about their health. His file has exact ages, jobs and the street each person lives on, but no names. Consent allowed sharing “anonymised data”. What is the best plan?", options:[
      {t:"Not share this file openly. Coarsen it heavily (age bands, no streets, broad job groups) and check the risk, or deposit it with controlled access, while publishing the description.", ok:true, why:"Right. In a community of 40, exact age, job and street identify almost everyone, so the data aren’t anonymised yet. Reducing detail and controlling access keep the promise made in the consent."},
      {t:"Share it openly: there are no names.", why:"Indirect identifiers identify people easily in a small community, and health data are especially sensitive."},
      {t:"Share it openly under CC BY-NC so no one can misuse it.", why:"A licence controls reuse rights, not privacy. Anyone could still read the file and recognise neighbours."},
      {t:"Delete the data so no one can ever use it.", why:"Deleting loses research value and may break funder or journal rules. Controlled access or a coarsened version is usually possible."}
    ]},
    {id:"t3u10-l4-x5", type:"spot", q:"Tap each line of this invented README that needs improving.", ask:"needs improving", mono:true, parts:[
      {t:"Title: Market stall prices, Mombasa, 2025", flag:false, why:"A specific title with place and year: good."},
      "\n",
      {t:"Dates: 03/04/25 to 06/05/25", flag:true, why:"Ambiguous: is 03/04 the 3rd of April or the 4th of March? Use ISO dates such as 2025-04-03."},
      "\n",
      {t:"Missing values: NA = not recorded; 0 = stall closed", flag:false, why:"Missing and zero are clearly distinguished. That’s exactly right."},
      "\n",
      {t:"File: prices_final_FINAL2.xlsx", flag:true, why:"An unclear name and only a spreadsheet format. Use a versioned name and add a CSV."},
      "\n",
      {t:"Licence: ask me", flag:true, why:"Reusers need a clear licence such as CC BY 4.0 or CC0; “ask me” stops working when you can’t be reached."},
      "\n",
      {t:"Contact: project email and ORCID iD", flag:false, why:"An ORCID iD links you to the data even if your email changes."}
    ]},
    {id:"t3u10-l4-x6", type:"mcq", q:"Kenji has an anonymised survey of teachers’ workloads, with no sensitive personal data left. His field has a national social science data archive that curates deposits. Which choice is usually best?", options:[
      {t:"Deposit in the national social science data archive, which will check the documentation and is where his field looks for data.", ok:true, why:"Right. A subject repository that curates deposits adds checks and visibility. A generalist repository would also be acceptable if the archive couldn’t take it."},
      {t:"Put it in a shared cloud folder and post the link.", why:"Links break, there’s no preservation promise and no DOI."},
      {t:"Email it to anyone who asks.", why:"That isn’t findable, accessible by a standard route, or durable."},
      {t:"Post it on his personal website with no licence.", why:"No DOI, no preservation and no licence: reusers can’t rely on it."}
    ]}
   ],
   apply:{intro:"Work on invented data or on your own data that contain nothing about other people. Don’t upload real participants’ data for practice.", tasks:[
     {t:"Write a README for a small dataset", how:["Pick a small table: something you track (plant growth, running times, household spending categories) or an invented one.","Write a README.txt using the example in this lesson: title, version, creator, description, methods, files, missing values, licence, how to cite, changes.","On a phone, any notes app works; save it as plain text if you can."], write:"My README…"},
     {t:"Write a data dictionary for the same table", how:["For each column, write: name, meaning, type (number, text, date), units, allowed values or codes, and how missing values are shown.","Use a spreadsheet with one row per column of your data (see Unit 2), and export it as CSV."], write:"column, meaning, type, units, codes, missing…"},
     {t:"Optional: practise depositing without publishing", how:["Zenodo runs a separate test site, sandbox.zenodo.org, for practice. Create an account there (not on the main site).","Start a new upload with your README and an invented CSV, fill in the metadata form and choose a licence.","Notice which fields map to the DataCite citation. Delete the draft when you’re done; it isn’t a real publication."], write:"Fields the form asked for… Which licence I chose and why…"}
   ], proof:"A README and a data dictionary that would let a stranger understand and correctly cite a small dataset."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Metadata”"},
    {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"On anonymity and confidentiality. Written before current data protection laws, so use this lesson and Research Skills Unit 9 for definitions."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u10-l5", title:"Data ethics, power and who gets counted", minutes:55,
   hook:{q:"A widely used US health algorithm chose patients for extra care by predicting their future health spending. A 2019 study found that, at the same risk score, Black patients were considerably sicker than White patients. Why?", options:["The programmers deliberately added race to the formula","Spending was used as a stand-in for need, and less money had been spent on equally sick Black patients","Black patients were not included in the data","The algorithm had a software bug"], answer:1, reveal:"**Spending was a stand-in for need.** Because of unequal access to care, less had been spent on Black patients with the same illnesses, so the algorithm learned that they were “lower risk”. The researchers estimated that fixing this would raise the share of Black patients offered extra help from 17.7% to 46.5%. Data can be accurate and still unfair. This lesson gives you tools for seeing how."},
   goals:[
     "Explain data ethics as questions about power, benefit and harm, not only privacy",
     "Describe the seven principles of Data Feminism and apply them to a data project",
     "Explain how choices about who and what is counted shape data, with real examples",
     "Explain how algorithms can reproduce bias through unrepresentative data and proxies, using well-documented cases",
     "Describe Indigenous data sovereignty and the CARE principles, and how they complement FAIR"
   ],
   learn:[
    {h:"Data ethics is bigger than privacy", body:[
      {lead:"So far you’ve asked whether data are accurate, open and safe to share. Ethics adds harder questions: who decided what to collect, who benefits, who pays the costs, and who gets a say."},
      "**[[data-ethics-term|Data ethics]]** is the study of what is right and fair in how data are collected, analysed, shared and used. Privacy and consent (Lesson 4; Research Skills Unit 9) are part of it. So are fairness, representation, transparency and accountability.",
      "A related idea, **[[data-justice|data justice]]**, focuses on how data systems spread benefits and harms across groups, especially groups with less power. Think of a city that plans bus routes from smartphone app data: the plan quietly favours people who own smartphones, unless someone asks who is missing.",
      {key:"A dataset can be accurate, legal and anonymised and still be unfair in what it counts, how it’s used, or who it serves."}
    ]},
    {h:"Data Feminism: seven principles", body:[
      "*Data Feminism* (2020) by Catherine D’Ignazio and Lauren F. Klein, published by MIT Press and free to read online, is one of the most readable guides to these questions. It defines data feminism as “a way of thinking about data, both their uses and their limits, that is informed by direct experience, by a commitment to action, and by intersectional feminist thought.” Its feminism is **intersectional**: it is about power in all its forms (race, class, gender, disability, colonialism and more), not only about women, and it is for anyone who works with data.",
      "Each chapter is built around one principle:",
      {table:[
        ["Principle","In plain words"],
        ["Examine power","Ask how power works in the world, and in this dataset"],
        ["Challenge power","Use data to work against unequal power and towards justice"],
        ["Elevate emotion and embodiment","Value knowledge from people’s lived experience, not only “neutral” numbers"],
        ["Rethink binaries and hierarchies","Question the gender binary and other classifications that keep people down"],
        ["Embrace pluralism","Combine many perspectives, prioritising local, Indigenous and experiential knowledge"],
        ["Consider context","Data aren’t neutral or objective; know how and by whom they were made"],
        ["Make labor visible","Credit the many people whose work makes data science possible"]
      ]},
      "Chapter 1 opens with an example: after nearly dying from complications following childbirth, the tennis player Serena Williams drew attention to CDC data showing that Black women in the United States are over three times more likely than white women to die from pregnancy- or childbirth-related causes. The authors use it to show how data can reveal a pattern of unequal treatment, and how much depends on who collects such data and acts on them."
    ]},
    {h:"Who is counted, and how", body:[
      "What gets counted shapes what gets noticed, funded and fixed. The first chapter of *Data Feminism* gives two examples:",
      {list:[
        "**Missing data.** The artist Mimi Onuoha’s *Library of Missing Datasets* lists data that you might expect to exist but don’t. Her point: “Spots that we’ve left blank reveal our hidden social biases and indifferences.”",
        "**Counting from below.** In Mexico, María Salguero has mapped femicides (killings of women because of their gender) from news reports, because official data were incomplete. Communities often collect their own data when institutions don’t."
      ]},
      "**Categories matter too.** Every form forces people into boxes. A survey with only “male” and “female” can’t count non-binary people; a single “ethnicity” box can’t record mixed heritage. The 2021 Census in England and Wales was the first there to include voluntary questions on sexual orientation and gender identity for people aged 16 and over, so those groups could be counted in a census there for the first time.",
      "**Being counted isn’t always safe.** Registers of people by ethnicity, religion or immigration status have been used to target people in the past. That’s why good statistics offices keep individual records confidential and why data minimisation matters.",
      {ex:"Priya plans a city survey on access to parks.\n\nWho’s missing if it’s online only, in one language? People without internet, people who don’t read the main language, many older residents.\n\nFixes: paper and phone options, translations, and working with community groups to reach people the city usually misses.", label:"Worked example"}
    ]},
    {h:"When algorithms learn from unequal data", body:[
      "**[[algorithmic-bias|Algorithmic bias]]** means an automated system produces systematically unfair results for some groups. Two well-documented ways it happens:",
      {list:[
        "**Unrepresentative data and averages that hide groups.** In *Gender Shades* (2018), Joy Buolamwini and Timnit Gebru tested three commercial systems that classify faces as male or female. Darker-skinned women were the most misclassified group, with error rates of up to 34.7%; the maximum for lighter-skinned men was 0.8%. Overall accuracy looked good because it averaged over everyone. (Note also the binary design: the systems could only answer “male” or “female”.)",
        "**Proxies.** A **[[proxy-variable|proxy]]** is something measured in place of what you really care about. The health algorithm in this lesson’s hook (Obermeyer and colleagues, *Science*, 2019) used past spending as a proxy for health need. Spending reflected unequal access to care, so the bias came in through the proxy, even though race wasn’t an input."
      ]},
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="u10a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="10" y="8" width="320" height="62" rx="12" stroke-width="1.5"/><text x="170" y="32" text-anchor="middle">What we want to know</text><text class="s" x="170" y="54" text-anchor="middle">how much care each patient needs</text><path class="d-ink" d="M170 70 V 88" stroke-width="2" marker-end="url(#u10a5)"/><rect class="d-rose" x="10" y="92" width="320" height="78" rx="12" stroke-width="1.5"/><text x="170" y="116" text-anchor="middle">Unequal access to care</text><text class="s" x="170" y="138" text-anchor="middle">less was spent on some patients</text><text class="s" x="170" y="154" text-anchor="middle">who were just as ill</text><path class="d-ink" d="M170 170 V 188" stroke-width="2" marker-end="url(#u10a5)"/><rect class="d-gold" x="10" y="192" width="320" height="62" rx="12" stroke-width="1.5"/><text x="170" y="216" text-anchor="middle">What the data record (the proxy)</text><text class="s" x="170" y="238" text-anchor="middle">past spending on each patient’s care</text><path class="d-ink" d="M170 254 V 272" stroke-width="2" marker-end="url(#u10a5)"/><rect class="d-panel" x="10" y="276" width="320" height="94" rx="12" stroke-width="1.5"/><text x="170" y="300" text-anchor="middle">What the model learns</text><text class="s" x="170" y="322" text-anchor="middle">equally sick patients from the group</text><text class="s" x="170" y="338" text-anchor="middle">with less access get lower scores,</text><text class="s" x="170" y="354" text-anchor="middle">so fewer are offered extra help</text><text class="s" x="170" y="392" text-anchor="middle">The data were accurate. The proxy was unfair.</text></svg>', alt:"Four stacked boxes joined by arrows. What we want to know: how much care each patient needs. Unequal access to care: less was spent on some patients who were just as ill. What the data record, the proxy: past spending on each patient’s care. What the model learns: equally sick patients from the group with less access get lower scores, so fewer are offered extra help. A note says the data were accurate but the proxy was unfair.", cap:"How a proxy carries inequality into a model, based on Obermeyer et al. (2019). Removing race from the inputs doesn’t remove this kind of bias."},
      "Other reported cases follow the same logic. Reuters reported in 2018 that Amazon had dropped an experimental CV-screening tool after finding it marked down CVs that included the word “women’s”; it had learned from a decade of mostly male applicants. Good practice includes: report accuracy **for each group**, question every proxy, test before and after deployment, and give people a way to challenge automated decisions."
    ]},
    {h:"Indigenous data sovereignty and the CARE principles", body:[
      "Research Skills Unit 9 introduced the **[[care-principles|CARE principles]]** alongside FAIR. Here is the thinking behind them.",
      "**[[indigenous-data-sovereignty|Indigenous data sovereignty]]** is the right of Indigenous peoples to govern data about their communities, lands, languages and resources. For centuries, data about Indigenous peoples were collected by outsiders, for outsiders’ purposes, often describing communities only through problems. Networks such as Te Mana Raraunga (Māori data sovereignty, Aotearoa New Zealand) and the First Nations principles of OCAP® in Canada (ownership, control, access and possession) helped build the field.",
      "The CARE principles were drafted at an Indigenous-led workshop in Gaborone, Botswana, in November 2018, during International Data Week. They are hosted by the Global Indigenous Data Alliance (GIDA) and were described in the *Data Science Journal* in 2020 (Carroll and colleagues).",
      {table:[
        ["Principle","The core idea"],
        ["Collective benefit","Data ecosystems should be designed so Indigenous peoples benefit from the data"],
        ["Authority to control","Indigenous peoples’ rights and interests in their data are recognised, and their authority to control them strengthened"],
        ["Responsibility","Those working with Indigenous data must show how their use supports self-determination and collective benefit"],
        ["Ethics","Indigenous peoples’ rights and wellbeing are the primary concern at every stage of the data life cycle"]
      ]},
      "FAIR is about **data**; CARE is about **people and purpose**. The authors’ aim is for data stewards to be “FAIR and CARE” together. In practice that can mean agreements with communities before collection, shared decisions about access, benefit sharing, and labels (such as the Local Contexts Traditional Knowledge and Biocultural Labels) that travel with the data and tell reusers about community expectations."
    ]},
    {h:"Questions to ask of any data project", body:[
      "You don’t need to be an ethicist to work ethically with data. Before you collect, analyse or publish, ask:",
      {ol:[
        "**Who decided** what to collect and how to categorise it? Who wasn’t in the room?",
        "**Who is missing** or miscounted, and what happens to them as a result?",
        "**What is being measured in place of what we care about?** Is the proxy fair?",
        "**Who benefits** from this project, and who carries the risks?",
        "**Could the people in the data** see it, question it and correct it?",
        "**Whose work** made this data possible (collectors, cleaners, annotators, participants), and is it credited?",
        "**Would I be comfortable** explaining this use to the people it describes?"
      ]},
      {tip:"Write your answers into your methods or README. Naming limits and choices openly is part of the principle “consider context”."}
    ]},
    {h:"The end of the Data Literacy track", body:[
      {lead:"You’ve reached the end of Data Literacy. Take a moment: that’s a real achievement."},
      "Across ten units you learned to read numbers critically, keep and clean tidy data, make honest charts, describe distributions, reason about samples and uncertainty, work in [[r-language|R]] and [[sql|SQL]] (with the Data Lab to practise in), and, here, to find, judge, cite, share and question data. Those skills travel: to the news, to a club’s accounts, to a workplace dashboard, to a thesis.",
      "**What’s in the app now:** four complete tracks (Digital Foundations, Making with Code, Data Literacy and Research Skills), the Sociology primer, and five labs: the Formula Lab, Web Lab, Python Lab, Citation Lab and Data Lab. Every Codex entry stays here for you to look things up whenever you need them.",
      "**What comes next:** two more Social Science Primers, International Relations and Migration Studies, and after them Academic English and Academic Japanese.",
      "A suggestion for keeping your skills alive: pick one question you genuinely care about, find an open dataset that speaks to it, judge it with the six questions, make one honest chart, and share it with a proper citation. Then ask who that dataset leaves out. Thank you for learning with us."
    ]}
   ],
   try:[
    {id:"t3u10-l5-x1", type:"match", q:"Match each Data Feminism principle to an action that puts it into practice.", pairs:[
      ["Examine power","Ask who designed the dataset and whose interests it serves","Examining power starts by asking how power shapes what is collected and why."],
      ["Challenge power","A community group collects its own counts to contest an incomplete official figure","Challenging power means using data to work against unequal structures, for example by collecting data that institutions have neglected."],
      ["Rethink binaries and hierarchies","Let people describe their gender with more than two options","Questioning the gender binary is part of rethinking classification."],
      ["Embrace pluralism","Involve local and Indigenous knowledge holders in designing the study","Pluralism combines perspectives, giving priority to local, Indigenous and experiential knowledge."],
      ["Consider context","Explain how and by whom the data were collected before interpreting them","Data aren’t neutral; their context is essential to accurate analysis."],
      ["Make labor visible","Credit the field workers and annotators who produced the data","Data science is the work of many hands, and that work should be recognised."]
    ]},
    {id:"t3u10-l5-x2", type:"mcq", q:"In the Obermeyer et al. (2019) study, race was not an input to the algorithm. How did racial bias still arise?", options:[
      {t:"The algorithm predicted health spending as a proxy for need, and less had been spent on equally sick Black patients.", ok:true, why:"Right. The proxy carried existing inequality in access to care into the scores."},
      {t:"The training data contained no Black patients.", why:"The data did include Black patients. The problem was what was measured, not who was missing."},
      {t:"The hospital staff entered the data incorrectly.", why:"Nothing suggests data-entry errors; the spending data were accurate. The choice of target was the issue."},
      {t:"It can’t have: without race as an input, an algorithm can’t be racially biased.", why:"This is the key misconception the study disproved. Bias can enter through proxies that are linked to group membership."}
    ]},
    {id:"t3u10-l5-x3", type:"sort", q:"Is each invented problem mainly about **who or what is counted**, or about **how an algorithm or measure works**?", buckets:["Who or what is counted","How an algorithm or measure works"], items:[
      {t:"A housing survey only asks about people with a fixed address", b:0, why:"People who are homeless are left out of the count entirely: a coverage problem."},
      {t:"A face analysis system is far less accurate for darker-skinned women", b:1, why:"The system performs unequally across groups, as Gender Shades documented."},
      {t:"A form offers only two gender options", b:0, why:"The categories decide who can be counted accurately."},
      {t:"A loan model uses postcode, which closely tracks ethnicity in that city", b:1, why:"Postcode can act as a proxy, bringing in the effects of past segregation."},
      {t:"A city plans services using data from a smartphone app", b:0, why:"People without smartphones aren’t counted, so the data overrepresent some groups."},
      {t:"A school ranks pupils with a model trained on past grades from schools with unequal funding", b:1, why:"The model learns patterns shaped by past inequality, a historical bias in how it works."}
    ]},
    {id:"t3u10-l5-x4", type:"mcq", q:"Which statement about FAIR and CARE is accurate?", options:[
      {t:"FAIR focuses on making data reusable; CARE adds people and purpose, so Indigenous peoples benefit from and keep authority over data about them. They are meant to be used together.", ok:true, why:"Right. The CARE authors describe the goal as being “FAIR and CARE”."},
      {t:"CARE replaces FAIR for all research data.", why:"CARE complements FAIR; it doesn’t replace it."},
      {t:"CARE means Indigenous data must never be shared.", why:"CARE is about authority and benefit. Communities may choose to share widely, under conditions they set."},
      {t:"FAIR already requires community consent, so CARE adds nothing.", why:"FAIR is about data qualities such as findability and licences; it says nothing about community authority."}
    ]},
    {id:"t3u10-l5-x5", type:"mcq", q:"A company reports that its face analysis system is “97% accurate”. What does *Gender Shades* suggest asking?", options:[
      {t:"How accurate is it for each group, especially combinations such as darker-skinned women?", ok:true, why:"Right. An overall average can hide very large differences between groups, which is what the study found."},
      {t:"Nothing: 97% is high enough for any use.", why:"An average says nothing about who the 3% are, and errors may fall heavily on one group."},
      {t:"Whether the system was built by a large company.", why:"The study tested systems from major companies; size didn’t prevent the disparities."},
      {t:"Whether it uses the newest kind of model.", why:"Newer models can still be biased. Testing by group is what reveals it."}
    ]},
    {id:"t3u10-l5-x6", type:"spot", q:"Tap each part of this invented project plan that raises an ethical concern.", ask:"raises a concern", parts:[
      {t:"We will survey residents about flooding risks,", flag:false, why:"A useful purpose that could help the community."},
      " ",
      {t:"online only and in one language,", flag:true, why:"This leaves out people without internet access and people who don’t read that language, often those most at risk."},
      " ",
      {t:"with questions developed with the residents’ association.", flag:false, why:"Involving the community in design is good practice (embrace pluralism)."},
      " ",
      {t:"We will sell the exact addresses and answers to insurers,", flag:true, why:"Selling identifiable data for purposes people didn’t agree to could raise their premiums: harm without consent."},
      " ",
      {t:"and publish a summary map by district,", flag:false, why:"An aggregated map by district shares benefits without exposing individuals."},
      " ",
      {t:"crediting the volunteers who collected the data.", flag:false, why:"Making labour visible is one of the Data Feminism principles."}
    ]}
   ],
   apply:{intro:"Use one of the datasets you have worked with in this unit, or a dataset or app that affects your own life.", tasks:[
     {t:"Run an ethics check on a dataset", how:["Pick one dataset (or a service that uses data about you, such as a transport app or a school or workplace system).","Answer the seven questions from the section “Questions to ask of any data project”.","Choose the one Data Feminism principle that would most improve it, and write one concrete change."], write:"Dataset… Who decided… Who is missing… Proxy… Who benefits… Can people correct it… Whose work… The principle and my change…"},
     {t:"Read the start of Data Feminism", how:["Open the free online edition of *Data Feminism* (data-feminism.mitpress.mit.edu).","Read the Introduction and the opening of Chapter 1, “The Power Chapter”.","Write down one example from the book that changed how you think about data, and why."], write:"Example… Why it matters…"},
     {t:"Close the track: plan your own data project", how:["Write one question you care about.","Name an open dataset that could help, its licence, and how you’d cite it.","Name one limitation and one group the data might leave out."], write:"My question… Dataset… Licence and citation… A limitation… Who might be missing…"}
   ], proof:"An ethics check on one dataset with one concrete improvement, and a one-paragraph plan for your own data project with source, licence, citation and limits."},
   read:[
    {book:"datafem", where:"Introduction, “Why Data Science Needs Feminism”, and Chapter 1, “The Power Chapter”"},
    {book:"datafem", where:"Chapter 4, “What Gets Counted Counts”", note:"On classification, the gender binary and who is counted."}
   ]
  }
  ],
  checkpoint:["t3u10-q02","t3u10-q06","t3u10-q11","t3u10-q14","t3u10-q19","t3u10-q23","t3u10-q26","t3u10-q30","t3u10-q34","t3u10-q38","t3u10-q42","t3u10-q45"],
  codex:[
   {id:"open-data-sources", title:"Finding open data", aka:["open data","Open Definition","data portals","where to find data","national statistics offices","dataset search"], tags:["data","open"],
    summary:"What makes data open, the main kinds of data sources around the world, and how to search for datasets and trace copies back to their source.",
    levels:{
     starter:[
      "**[[open-data|Open data]]** are data that anyone may use, change and share, for any purpose, with at most conditions such as “credit the source” or “keep it open”. Free to look at is not the same: a free download marked “non-commercial use only” isn’t open.",
      "To find data, first ask **who would have had to count this?**",
      {list:[
        "**National statistics offices** for official figures about one country (population, prices, jobs, health).",
        "**International organisations** (UN, World Bank, OECD, WHO) for figures you can compare across countries.",
        "**Government and city portals** for local data such as transport or budgets.",
        "**Research repositories** (Zenodo, Harvard Dataverse) for data behind studies."
      ]},
      {key:"Start at the producer. Treat copies on other sites as leads, and trace them back to the original."},
      "Free to view isn’t enough: check the **licence** and whether you can download the **whole** dataset in a format a computer can read, such as CSV."
     ],
     builder:[
      "The **Open Definition 2.1** sets four requirements for an open work: an **open licence** or public-domain status; **access** to the whole work at no more than a reasonable reproduction cost, preferably as a free download; **machine readability**; and an **open format** that at least one free, open-source tool can process. A licence is open only if it allows use, redistribution (including sale), modification and use for any purpose, with no discrimination. Allowed conditions include attribution, share-alike and keeping notices.",
      {table:[
        ["Source","Examples"],
        ["National statistics offices","ONS (UK), Statistics Canada, IBGE (Brazil), INEGI (Mexico), Stats SA, Japan’s e-Stat; list at unstats.un.org/home/nso_sites"],
        ["International","UNdata, World Bank Open Data, OECD Data Explorer (formerly OECD.Stat), WHO Global Health Observatory, Eurostat"],
        ["Portals","data.europa.eu, national and city open data portals"],
        ["Research","Zenodo, Harvard Dataverse, Figshare, Dryad, subject archives"],
        ["Explainers","Our World in Data (credit it and the original provider)"]
      ]},
      "Search with the measure’s official name, the place and period, and words like “dataset” or “CSV”. Dataset search tools include Google Dataset Search (reads schema.org Dataset markup), DataCite Commons (datasets with DOIs) and re3data.org (a registry of repositories).",
      "Most portals let you filter by topic, publisher, format and licence, and many offer an **API** so programs can fetch data directly. Look for an “About”, “Metadata” or “Methodology” link before you download, and note the date and version you used."
     ],
     pro:[
      "International databases are mostly **compilations**: national figures harmonised to common definitions. Where national data are missing or inconsistent, agencies publish **modelled estimates** (for example the UN IGME child mortality estimates shown by WHO and the World Bank). WHO notes that many Global Health Observatory figures are its own estimates and may differ from official national statistics. Cite which you used and why.",
      "Licences vary within a single portal. World Bank data are CC BY 4.0 unless the indicator metadata says otherwise, and some third-party data may not be redistributed without the provider’s consent. Our World in Data licenses its own charts and data under CC BY, while third-party data stay under their providers’ terms.",
      "Community platforms such as Kaggle are excellent for practice, but the uploader sets the licence and may lack the right to. A 2023 audit of dataset hosting sites (GitHub, Hugging Face, Papers with Code) by Longpre and colleagues found licences omitted for over 70% of datasets, with error rates above 50% in the licences shown. Always find the original publisher.",
      "Search tools index **descriptions**, not data. Google’s Dataset Search team has noted that publishers’ metadata can be incomplete, wrong or missing, and a common reason a dataset can’t be found is that its page has no markup at all. Absence from search isn’t absence from the world: check the producer’s site and catalogue."
     ]
    },
    related:["judging-datasets","data-licences","citing-data","evaluating-sources"],
    read:[{book:"wlsf", where:"Background reading: Part III, Chapter 7 “Go Upstream to Find the Source”"}],
    sources:[{t:"Open Knowledge: Open Definition 2.1", url:"https://opendefinition.org/od/2.1/en/"},{t:"UN Statistics Division: national statistical offices’ websites", url:"https://unstats.un.org/home/nso_sites/"},{t:"WHO: About the Global Health Observatory", url:"https://www.who.int/data/gho/info/about-the-observatory"}], checked:"2026-11"},

   {id:"judging-datasets", title:"Judging a dataset", aka:["data quality","metadata","codebook","data provenance","evaluating data","fitness for use"], tags:["data","critical thinking"],
    summary:"Six questions to ask any dataset before you trust it: who made it, how, with what definitions, covering whom, how it has changed, and on what terms.",
    levels:{
     starter:[
      "A dataset is like a dish: to trust it, you want the recipe. Before you use one, ask six questions:",
      {ol:[
        "Who made it, and why?",
        "How was it collected?",
        "What do its words and codes mean?",
        "Who and what is covered, and who is missing?",
        "Is it current, and has it been revised?",
        "May I use it, and how do I credit it?"
      ]},
      "The answers live in the **metadata** (data about the data), the methods notes and the **codebook** or data dictionary. If you can’t find an answer, that is itself a warning.",
      {key:"When two sources disagree, compare their definitions, methods and dates before deciding one is wrong."},
      "Purpose matters: an organisation that benefits from a result has reasons to choose definitions or samples carefully, which is a reason to read its methods, not to dismiss it."
     ],
     builder:[
      {table:[
        ["Method","Watch for"],
        ["Census","Undercounts of hard-to-reach groups; long gaps between counts"],
        ["Sample survey","Sampling error, nonresponse, small groups too few to report"],
        ["Administrative records","Only people who use or reach the service; changes in recording rules"],
        ["Sensors","Faulty or badly placed devices; places with none"],
        ["Modelled estimates","Model assumptions; revisions as new data arrive"]
      ]},
      "**Definitions decide numbers.** Under the ILO definition, unemployed people are without work, available, and actively looking, so someone who has stopped looking is outside the labour force. A city’s population depends on whether you mean the municipality, the built-up area or the metropolitan region. Money may be nominal or real, local or converted, total or per person.",
      "**Missing values** must be coded distinctly (blank, `NA` or a documented code), never as `0`, or averages are wrong. **Breaks in series** occur when methods change; don’t draw a trend straight across one.",
      "**Copies lose context.** A figure on a community site or in an article is usually a copy. Go back to the producer for the definitions, footnotes and version.",
      "**Sample size and small groups.** A survey of thousands may have only a few dozen people in a small region or group, so estimates for them are uncertain; good producers say when a figure is too unreliable to publish."
     ],
     pro:[
      "Statistics offices publish quality frameworks and reports that describe dimensions such as relevance, accuracy, timeliness, coherence and comparability for each series; read them for anything you’ll rely on heavily.",
      "**Revisions** are normal and documented. Early estimates (of GDP, for example) are revised as fuller data arrive, and population series are re-based after each census. Save the version or download date, and when you compare a new release with an old figure, compare like with like: the same vintage, or the revised series throughout.",
      "**Copies lose context.** Microdata need their codebook; office tables add definitions and margins of error; international databases harmonise and sometimes re-estimate; community copies often drop notes and licences. Use the level that answers your question, and go upstream for definitions.",
      "**Coverage gaps are rarely random.** People without fixed addresses, in institutions, in informal work, or in conflict-affected areas are commonly undercounted, and they’re often the people a policy most affects. State gaps explicitly and, where possible, triangulate with other sources (a victimisation survey alongside recorded crime; a household survey alongside registers).",
      "Write down the answers to the six questions as a short “fitness for use” note in your project’s README: what the data are good for, what they aren’t, and the version you used. Reviewers and future you will thank you."
     ]
    },
    related:["open-data-sources","data-dictionaries","missing-values","survey-sampling","crime-statistics"],
    read:[{book:"ostat", where:"Chapter 1, Section 1.2 “Data, Sampling, and Variation in Data and Sampling”"}],
    sources:[{t:"WHO: About the Global Health Observatory (on estimates differing from national figures)", url:"https://www.who.int/data/gho/info/about-the-observatory"},{t:"OpenStax Introductory Statistics 2e, 1.2 Data, Sampling, and Variation in Data and Sampling", url:"https://openstax.org/books/introductory-statistics-2e/pages/1-2-data-sampling-and-variation-in-data-and-sampling"}], checked:"2026-11"},

   {id:"data-licences", title:"Licences for data", aka:["data licence","data license","CC0","CC BY","ODbL","Open Government Licence","OGL","database right","PDDL","ODC-By"], tags:["data","open","copyright"],
    summary:"Why data need licences, what the common open data licences require, and what to do when data have restrictive terms or none.",
    levels:{
     starter:[
      "A **[[data-licence|data licence]]** is permission, given in advance, to reuse data on stated conditions. Without one, you can’t be sure what’s allowed.",
      {table:[
        ["Licence","You must"],
        ["CC0, PDDL","Nothing (credit is still good practice)"],
        ["CC BY 4.0, ODC-By","Credit the source and link the licence"],
        ["CC BY-SA 4.0, ODbL","Credit, and share adapted data under the same terms"],
        ["UK OGL v3.0","Include the provider’s attribution statement"]
      ]},
      "Licences with **non-commercial (NC)** or **no-derivatives (ND)** conditions are not open data. **No licence** doesn’t mean free to use: check the source or ask.",
      {key:"Read the licence on the dataset itself. One portal can use several."},
      "Some data are restricted for good reasons, such as survey microdata available only to registered researchers who promise not to identify anyone. That’s data protection working, not a licence error."
     ],
     builder:[
      "**Why licences matter for facts.** Individual facts usually aren’t protected by copyright (in the US, *Feist v. Rural*, 1991), but original selections and arrangements can be, and the EU and UK have a separate **[[database-right|database right]]** protecting substantial investment in obtaining, verifying or presenting a database’s contents. CC BY 4.0 and the ODbL cover database rights explicitly.",
      "**CC BY 4.0** asks you to credit the creator, give the licence and a link, and indicate if you changed the material (see {{attribution-tasl}}).",
      "**ODbL 1.0**: if you publicly use an **adapted database**, offer it under the ODbL or a compatible licence and provide the database or a file of your changes. A **produced work** (a map image, a chart) needn’t be ODbL, but must carry a notice such as “Contains information from DATABASE NAME, which is made available here under the Open Database License (ODbL).” OpenStreetMap uses the ODbL.",
      "**UK OGL v3.0**: copy, adapt and exploit commercially; acknowledge the source with the provider’s statement, or “Contains public sector information licensed under the Open Government Licence v3.0.”",
      "**CC0** and the **PDDL** waive rights as far as the law allows, so you may use the data without conditions; in research you still cite the data you used, because citation is about honesty, not permission."
     ],
     pro:[
      "The OGL v3.0 **does not cover** personal data, information not accessed by publication or disclosure under information access law, logos and crests, military insignia, third-party rights, other intellectual property such as trade marks, or identity documents. It forbids implying endorsement, and states that it is compatible with CC BY 4.0 and ODC-By: complying with either satisfies the OGL when information is adapted and relicensed under them.",
      "Other conformant government licences include France’s **Licence Ouverte 2.0** (credit the source, at least the licensor’s name, and the date of last update), the **Open Government Licence – Canada 2.0**, **Data licence Germany – attribution 2.0**, and Taiwan’s **Open Government Data License 1.0**. Open Knowledge recommends reusable licences (CC0, PDDL, CC BY 4.0, ODC-By, CC BY-SA 4.0, ODbL) over organisation-specific ones for new data.",
      "**Share-alike compatibility** is a common trap: ODbL and CC BY-SA aren’t simply interchangeable, so mixing share-alike sources may need care. Attribution-only and public-domain data combine easily.",
      "Restricted data are often legitimately restricted: survey microdata under end-user licences (no re-identification, no redistribution), health data in secure environments. These are **not open**, but may be accessible for research. Licences control reuse rights; they’re not a privacy tool.",
      "When combining sources, keep a short table of each source, its licence and its attribution text; it makes the final credits easy and shows you where share-alike applies."
     ]
    },
    related:["creative-commons","copyright-basics","attribution-tasl","open-data-sources","citing-data"],
    sources:[{t:"Open Knowledge: Conformant licences", url:"https://opendefinition.org/licenses/"},{t:"The National Archives: Open Government Licence v3.0", url:"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"},{t:"Open Data Commons: Open Database License (ODbL) v1.0", url:"https://opendatacommons.org/licenses/odbl/1-0/"}], checked:"2026-11"},

   {id:"citing-data", title:"Citing datasets", aka:["data citation","DataCite","dataset DOI","version DOI","concept DOI","data availability statement"], tags:["data","citation","research"],
    summary:"How to cite a dataset so readers can find exactly what you used: creator, year, title, version, publisher, type and a persistent identifier.",
    levels:{
     starter:[
      "Citing data gives credit to the people who made it and lets readers find **exactly** the data you used.",
      "**[[datacite|DataCite]]**, which registers DOIs for datasets, suggests this order:",
      {ex:"Creator (PublicationYear): Title. Version. Publisher. (resourceTypeGeneral). Identifier", mono:true},
      "Write the DOI as a link: `https://doi.org/…`. Your style guide (APA, MLA, Chicago) decides punctuation; APA puts “[Data set]” after the title and the version in parentheses.",
      {key:"Cite the publisher of the data, not the search tool that found them."},
      "A good data citation answers: **who** made the data, **when** (the year of the version you used), **what** (the title and version), **where** it’s published (the repository or organisation), and a **persistent link** such as a DOI.",
      "If the data change over time and have no version number, add the date you retrieved them."
     ],
     builder:[
      "DataCite’s mandatory metadata properties are Identifier, Creator, Title, Publisher, PublicationYear and ResourceType; its preferred citation uses them, adding Version where relevant. Its own example:",
      {ex:"Irino, T; Tada, R (2009): Chemical and mineral compositions of sediments from ODP Site 127-797. V. 2.1. Geological Institute, University of Tokyo. (dataset). https://doi.org/10.1594/PANGAEA.726855", mono:true},
      "**APA 7th edition**: the date is the publication year of the version used; the title is in italics, followed by any identifier and version in parentheses and a flexible bracketed description such as “[Data set]” or “[Data set and code book]”; then the publisher and DOI or URL.",
      "**Versions.** Zenodo gives each version its own DOI and a concept DOI for all versions, which resolves to the latest. Cite the version DOI for an analysis.",
      "**Changing data without versions**: give the table or indicator name and code and the date you retrieved them. **Aggregators**: credit the aggregator and the original producer.",
      "**Example in APA style** (title in italics in a real list): Irino, T., & Tada, R. (2009). Chemical and mineral compositions of sediments from ODP Site 127-797 (Version 2.1) [Data set]. Geological Institute, University of Tokyo. https://doi.org/10.1594/PANGAEA.726855",
      "Use the repository’s “Cite this” box as a starting point, then check that it includes the version and shows the DOI as a link."
     ],
     pro:[
      "The Joint Declaration of Data Citation Principles (FORCE11, 2014) asks that data be treated as citable research products, cited with persistent identifiers, with enough specificity to verify claims. In practice that means citing the **exact version or subset** and, for dynamic databases, recording the query or extraction date.",
      "DataCite suggests tracking major.minor versions and registering a new identifier for a major version change; Zenodo instead issues a new DOI whenever files change, while metadata edits don’t create a version. Zenodo deliberately avoids “.v1”-style DOI suffixes and links versions through metadata.",
      "If a resource has no standard publication year, DataCite recommends using the date preferred for citation. If you show a DOI in its original form rather than as a link, prefix it with `doi:`.",
      "Many journals require a **data availability statement** saying where the data are, under what conditions, and their DOI, or why they can’t be shared. Put the dataset in the reference list too, so it is counted as a citation, and give your own datasets a “Cite as” line in the README so others cite them consistently.",
      "For a subset or a query result from a large database, say how you selected it (the table, filters or indicator codes) so someone else can rebuild the same subset."
     ]
    },
    related:["doi-identifiers","citation-styles","fair-data","data-licences"],
    sources:[{t:"DataCite Metadata Schema documentation: Citation", url:"https://datacite-metadata-schema.readthedocs.io/en/4.7/introduction/citation/"},{t:"APA Style: Data set references", url:"https://apastyle.apa.org/style-grammar-guidelines/references/examples/data-set-references"},{t:"Zenodo: DOI versioning", url:"https://zenodo.org/help/versioning"}], checked:"2026-11"},

   {id:"fair-data", title:"FAIR data in practice", aka:["FAIR","data sharing","data repository","README","persistent identifier","metadata standard","re3data"], tags:["data","research","open"],
    summary:"Practical steps that make your own data findable, accessible, interoperable and reusable: repositories, identifiers, open formats, READMEs, data dictionaries and licences.",
    levels:{
     starter:[
      "The **[[fair-principles|FAIR principles]]** (introduced in {{data-management-plan}}) describe data others can Find, Access, combine (Interoperable) and Reuse. In practice:",
      {list:[
        "**Deposit** the data in a repository that gives a DOI.",
        "Save tables as **CSV** (UTF-8) as well as any program-specific format.",
        "Add a **README** (what, who, how, when, licence, how to cite) and a **data dictionary** (every column explained).",
        "Choose a **licence**: CC BY 4.0 or CC0 are common for data."
      ]},
      {key:"FAIR doesn’t mean open. Sensitive data can be FAIR with a public description and controlled access."},
      "Think of a stranger opening your folder in ten years with no way to ask you anything. Everything they need, from what each column means to how they may reuse the data, should be inside, and the folder should live somewhere that will still exist."
     ],
     builder:[
      "**Where to deposit**: a subject repository your field uses (for example a national social science archive such as the UK Data Service, ICPSR, GESIS or the Australian Data Archive), then your institution’s repository, then a generalist one (Zenodo, Harvard Dataverse, Figshare, Dryad, OSF). re3data.org lists repositories by subject.",
      "**[[persistent-identifier|Persistent identifiers]]**: a DOI for the dataset, an ORCID iD for each creator ({{orcid}}), and a ROR ID for organisations. A personal website or cloud folder offers none of these, and its links break.",
      "**[[metadata-standard|Metadata standards]]** make descriptions machine-readable: DataCite (general), DDI (social science surveys), Darwin Core (biodiversity), Dublin Core and schema.org Dataset (general; what Google Dataset Search reads).",
      "**Interoperability** also means standard codes: ISO dates, ISO country codes, SI units, and documented missing-value codes.",
      "**A README** should cover: title and version; creators (with ORCID iDs); a description; methods (how, when, where); a file list; missing-value codes; the licence; how to cite; contact; and a change log.",
      "**A data dictionary** lists every column with its meaning, type, units, allowed values or codes, and missing-value codes (see {{data-dictionaries}}).",
      "Use versioned file names (`survey_2026_v1-1.csv`), never “final_FINAL2”. Keep a short change log in the README so reusers know what each version fixed, and publish a new version rather than silently replacing files."
     ],
     pro:[
      "From the generalist repository comparison chart (version 3, May 2023): Zenodo, free, 50 GB per dataset with higher limits on request, a DOI per version plus a concept DOI; Harvard Dataverse, free to researchers worldwide up to 1 TB, default licence CC0, version comparison; Dryad, full curation, CC0 only, a one-time fee unless covered by a member institution, publisher or funder; Figshare, free accounts with storage limits; OSF, free, with storage limits per project. Policies change: check current terms before choosing.",
      "Zenodo stores only changed files in new versions, so fixing a README in a large dataset doesn’t duplicate the data. It can archive GitHub releases automatically, giving code a DOI alongside the data it analyses.",
      "Curated repositories check documentation and formats, and often accept only CC0 to make reuse frictionless. Generalists accept almost anything, which puts the quality burden on you: a clear README, a data dictionary, a change log and versioned file names.",
      "Funders increasingly require sharing plans (see {{data-management-plan}}), and journals require data availability statements. Plan the package from the start of a project, not the week before submission.",
      "Machine-actionability, the distinctive emphasis of the original FAIR paper, means repository metadata and standard vocabularies matter as much as the files. Fill in the repository’s structured fields fully rather than putting everything in a free-text description."
     ]
    },
    related:["data-management-plan","sharing-your-data","citing-data","data-dictionaries","tidy-data-principles"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Metadata”"}],
    sources:[{t:"Research Data Alliance: Generalist Repository Comparison Chart (version 3)", url:"https://www.rd-alliance.org/wp-content/uploads/2024/03/Generalist20Repository20Comparison20Chart_version203.0-2.pdf"},{t:"OpenAIRE: Zenodo", url:"https://www.openaire.eu/zenodo/"},{t:"Zenodo: DOI versioning", url:"https://zenodo.org/help/versioning"}], checked:"2026-11"},

   {id:"sharing-your-data", title:"Sharing data about people safely", aka:["re-identification","de-identification","controlled access","disclosure control","safe data sharing"], tags:["data","privacy","research"],
    summary:"How consent, de-identification and access levels decide how openly data about people can be shared, and why removing names isn’t enough.",
    levels:{
     starter:[
      "Data about people can hurt them if shared carelessly. Before sharing, work through four steps:",
      {ol:[
        "Check what people **agreed to** and what the law allows.",
        "Remove **direct identifiers** (names, contacts, ID numbers, faces, voices).",
        "Reduce **indirect identifiers** (exact age, small places, rare jobs, dates, free text).",
        "Pick the **access level**: open, open with less detail, controlled access, or description only."
      ]},
      "For the definitions of personal, pseudonymised and anonymised data, see {{anonymisation}}.",
      {key:"As open as possible, as closed as necessary."},
      "Removing names isn’t enough. Ordinary details such as exact age, a small town and a job can point straight to one person, especially in a small community.",
      "If data can’t be shared openly, you can still publish a public description and explain how others can request access."
     ],
     builder:[
      "**Why names aren’t enough.** Combinations of ordinary details single people out. Rocher, Hendrickx and de Montjoye (2019) estimated that 99.98% of Americans would be correctly re-identified in any dataset using 15 demographic attributes. Small communities make it easier still.",
      "**Reducing risk**: age bands instead of exact ages; larger areas instead of streets; broad job groups; removing or editing free text; dropping dates of events; suppressing or combining very small counts in tables.",
      "**Access levels**: archives such as national social science data services typically offer several tiers, for example open data, safeguarded data (registered users who agree to conditions) and controlled or secure access (approved researchers working in a protected environment). Every level is FAIR if the description is public and the route is clear.",
      "**Consent comes first.** If participants were told only the team would see their data, a journal’s policy can’t override that; explain the restriction in a data availability statement.",
      "**Before you share, test it.** Ask: could a participant’s colleague, neighbour or relative recognise them from this file? Look especially at rare combinations, very small groups and free-text answers.",
      "**Keep the key separate.** The file linking codes to real people, and signed consent forms, stay in secure storage and never go in a shared package."
     ],
     pro:[
      "Disclosure risk depends on what an intruder could link the data to. Statistical agencies use **statistical disclosure control**: suppressing small cells, rounding, swapping records and adding noise. The US Census Bureau used a formal method called **differential privacy** for the 2020 Census, adding calibrated noise to published statistics; the trade-off between privacy and accuracy for small areas was widely debated.",
      "Qualitative data are hardest: a story can identify its teller. Options include editing details with the participant’s agreement, sharing only extracts, or controlled access.",
      "Sensitive non-personal data need care too: biodiversity and heritage databases often blur locations of threatened species, archaeological sites and sacred places. Data about a community may require that community’s say, beyond individual consent (see {{data-power}}).",
      "Licences are not privacy tools. A non-commercial licence doesn’t stop anyone reading a file. Protect people through de-identification and access controls; then license what you share openly as CC BY or CC0.",
      "Context decides identifiability: the same file may be effectively anonymous for a recipient bound by a strict agreement and identifiable for someone holding linked data. That’s why many archives combine de-identification with user agreements and, for the most detailed data, secure environments where outputs are checked before they leave.",
      "Document what you did to reduce risk (which variables were banded, suppressed or removed) in the README, so reusers understand the limits of the shared version."
     ]
    },
    related:["anonymisation","research-data-protection","fair-data","data-ethics"],
    read:[{book:"bhatt", where:"Chapter 16, “Research Ethics”"}],
    sources:[{t:"Rocher, Hendrickx & de Montjoye (2019), Nature Communications 10:3069 (PubMed Central)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC6650473"},{t:"UKRI Medical Research Council: identifiability, anonymisation and pseudonymisation", url:"https://www.ukri.org/wp-content/uploads/2021/11/MRC-291121-GDPR-Identifiability-Anonymisation-Pseudonymisation.pdf"}], checked:"2026-11"},

   {id:"data-ethics", title:"Data ethics and Data Feminism", aka:["data ethics","Data Feminism","D’Ignazio and Klein","data justice","seven principles"], tags:["data","ethics"],
    summary:"Data ethics as questions of power, benefit and harm, and the seven principles of D’Ignazio and Klein’s Data Feminism.",
    levels:{
     starter:[
      "**[[data-ethics-term|Data ethics]]** asks what is right and fair in how data are collected, analysed, shared and used. It includes privacy, but also: who decided what to count, who benefits, who could be harmed, and who gets a say.",
      "*Data Feminism* (Catherine D’Ignazio and Lauren F. Klein, MIT Press, 2020; free online) offers seven principles:",
      {ol:["Examine power","Challenge power","Elevate emotion and embodiment","Rethink binaries and hierarchies","Embrace pluralism","Consider context","Make labor visible"]},
      {key:"Data are made by people, in a context of unequal power. Ethical work makes that visible and acts on it."},
      "Ethical questions arise at every stage: deciding what to collect, choosing categories, analysing, sharing and using the results. You don’t need to be an ethicist to ask them."
     ],
     builder:[
      "The book defines data feminism as “a way of thinking about data, both their uses and their limits, that is informed by direct experience, by a commitment to action, and by intersectional feminist thought.” Intersectional means attending to how race, class, gender, disability and other forms of power combine.",
      {table:[
        ["Chapter","Principle"],
        ["1 The Power Chapter","Examine power"],
        ["2 Collect, Analyze, Imagine, Teach","Challenge power"],
        ["3 On Rational, Scientific, Objective Viewpoints…","Elevate emotion and embodiment"],
        ["4 “What Gets Counted Counts”","Rethink binaries and hierarchies"],
        ["5 Unicorns, Janitors, Ninjas, Wizards, and Rock Stars","Embrace pluralism"],
        ["6 The Numbers Don’t Speak for Themselves","Consider context"],
        ["7 Show Your Work","Make labor visible"]
      ]},
      "Chapter 1 uses examples such as Serena Williams drawing attention to US maternal mortality data, Mimi Onuoha’s *Library of Missing Datasets* and María Salguero’s map of femicides in Mexico.",
      "The principles are tools for questioning any project, not a checklist to tick. For example, “consider context” asks how and by whom data were collected before you interpret them; “make labor visible” asks you to credit the field workers, cleaners and annotators behind the data.",
      "The book is written for anyone who works with data, not only for feminists or scholars, and its examples range from health and policing to maps and machine learning."
     ],
     pro:[
      "The book introduces concepts that are useful well beyond it: the **matrix of domination** (how intersecting systems of power uphold privilege for dominant groups), and **privilege hazard**, the way those in the most privileged positions are often poorly placed to notice oppression, which matters when such groups dominate data teams.",
      "**[[data-justice|Data justice]]** frames the same concerns at the level of systems: how data-driven decisions distribute visibility, benefits and harms, especially for groups with less power.",
      "**Licence note:** the open-access edition is listed in the Directory of Open Access Books under CC BY-NC-ND 4.0. You may read and share it for non-commercial purposes, unchanged, with credit; quote it as you would any book.",
      "Practical habits: name limitations and choices in your methods or README; disaggregate results by group; involve the people represented in design and interpretation; credit everyone whose labour produced the data; and ask whether you could explain the use to the people it describes.",
      "Read critically, too: the book is one influential framework among several, and its principles are meant to be argued with and adapted to your field and community. Ethics review boards (see {{ethics-review}}) focus on research participants; data ethics also covers uses outside formal research, such as public-sector analytics and company products, where no review may happen unless someone asks for it."
     ]
    },
    related:["data-power","sharing-your-data","research-ethics","belmont-principles"],
    read:[{book:"datafem", where:"Introduction, “Why Data Science Needs Feminism”"}],
    sources:[{t:"D’Ignazio & Klein, Data Feminism (MIT Press open edition)", url:"https://data-feminism.mitpress.mit.edu/"},{t:"MIT Press Direct: Data Feminism (DOI 10.7551/mitpress/11805.001.0001)", url:"https://doi.org/10.7551/mitpress/11805.001.0001"}], checked:"2026-11"},

   {id:"data-power", title:"Who is counted: bias, proxies and Indigenous data sovereignty", aka:["algorithmic bias","proxy variable","Gender Shades","CARE principles","Indigenous data sovereignty","OCAP","who gets counted"], tags:["data","ethics","algorithms"],
    summary:"How choices about counting, categories and proxies create unfair data and algorithms, with documented examples, and how the CARE principles give communities authority over data about them.",
    levels:{
     starter:[
      "What gets counted gets noticed. People left out of data (no fixed address, no smartphone, a language not offered, a category that doesn’t fit) are often left out of decisions too.",
      "Algorithms learn from data, so they can repeat unfairness. **[[algorithmic-bias|Algorithmic bias]]** means a system gives systematically worse results for some groups.",
      "The **[[care-principles|CARE principles]]** (Collective benefit, Authority to control, Responsibility, Ethics) say Indigenous peoples should benefit from, and have authority over, data about them. They complement FAIR.",
      {key:"Ask who is missing, what stands in for what you care about, and who decides."},
      "A **proxy** is something measured in place of what you really care about, such as spending in place of health need. If the proxy reflects past inequality, a model built on it will too."
     ],
     builder:[
      "**Gender Shades** (Buolamwini & Gebru, 2018) tested three commercial gender classification systems: darker-skinned women were the most misclassified group, with error rates up to 34.7%, against a maximum of 0.8% for lighter-skinned men.",
      "**Proxies** (Obermeyer et al., *Science*, 2019): a widely used health algorithm predicted health costs rather than illness. At the same risk score, Black patients were considerably sicker; remedying this would raise the share of Black patients receiving extra help from 17.7% to 46.5%.",
      "**Categories**: the 2021 Census in England and Wales was the first there with voluntary questions on sexual orientation and gender identity (ages 16+).",
      "**CARE** was drafted at an Indigenous-led workshop in Gaborone, Botswana (November 2018, International Data Week), is hosted by the Global Indigenous Data Alliance, and was described by Carroll and colleagues in the *Data Science Journal* (2020).",
      "**Who is counted.** People without fixed addresses, without smartphones, who don’t read the survey language, or whose identity doesn’t fit the categories offered are often missing or miscounted. Communities sometimes collect their own data to fill such gaps, as María Salguero did by mapping femicides in Mexico.",
      "**Report by group.** An overall accuracy figure can hide large differences; reporting results for each group, and combinations of groups, reveals them."
     ],
     pro:[
      "Common sources of algorithmic bias: unrepresentative training data; labels that encode past decisions (historical bias); proxies correlated with group membership (postcode, spending); aggregate metrics that hide subgroup failures; and feedback loops where a model’s outputs shape its future training data. Removing a protected attribute rarely removes bias that arrives through proxies.",
      "Mitigation is socio-technical: define the target carefully, audit performance per group (and per intersection), document datasets and models, involve affected communities, and provide routes to contest decisions.",
      "**Indigenous data sovereignty** predates CARE: Canada’s First Nations principles of OCAP® (ownership, control, access, possession) date from the 1990s, and networks such as Te Mana Raraunga (Māori data sovereignty) and others in Australia and the US shaped CARE. The CARE authors call for stewards to be “FAIR and CARE”: people- and purpose-oriented governance alongside data-oriented FAIR. Practical tools include community data agreements and the Local Contexts Traditional Knowledge and Biocultural Labels.",
      "Being counted can also be dangerous: registers by ethnicity, religion or status have been used for persecution. Confidentiality of individual records and data minimisation are part of fair counting.",
      "Reuters reported in 2018 that Amazon had abandoned an experimental CV-screening tool after finding it marked down CVs containing the word “women’s”, having learned from a decade of mostly male applicants: another case of historical bias in labels."
     ]
    },
    related:["data-ethics","sharing-your-data","data-management-plan"],
    sources:[{t:"Buolamwini & Gebru (2018), Gender Shades, PMLR 81", url:"https://proceedings.mlr.press/v81/buolamwini18a.html"},{t:"Obermeyer et al. (2019), Science 366(6464):447–453 (PubMed)", url:"https://pubmed.ncbi.nlm.nih.gov/31649194/"},{t:"Carroll et al. (2020), The CARE Principles for Indigenous Data Governance, Data Science Journal 19:43", url:"https://doi.org/10.5334/dsj-2020-043"}], checked:"2026-11"}
  ],
  terms:[
   {id:"open-data", term:"Open data", def:"Data that anyone may freely access, use, change and share for any purpose, with at most conditions such as crediting the source or keeping it open.", codex:"open-data-sources"},
   {id:"open-definition", term:"Open Definition", def:"Open Knowledge’s standard (version 2.1) for what “open” means: an open licence, access to the whole work, machine readability and an open format.", codex:"open-data-sources"},
   {id:"data-portal", term:"Data portal", def:"A website that catalogues many datasets, often from many departments of a government or city, with search, descriptions and downloads.", codex:"open-data-sources"},
   {id:"national-statistics-office", term:"National statistics office", def:"The government body that produces a country’s official statistics, such as the census, labour force surveys and price indexes.", codex:"open-data-sources"},
   {id:"data-licence", term:"Data licence", def:"Permission, given in advance, to reuse a dataset on stated conditions, such as crediting the source.", codex:"data-licences"},
   {id:"database-right", term:"Database right", def:"A legal right in the EU and UK, separate from copyright, protecting databases that took substantial investment to obtain, check or present.", codex:"data-licences"},
   {id:"odbl", term:"ODbL (Open Database License)", def:"An open, share-alike licence for databases: credit the source, and share adapted databases you publicly use under the same licence. Used by OpenStreetMap.", codex:"data-licences"},
   {id:"open-government-licence", term:"Open Government Licence (UK)", def:"The UK public sector’s open licence (v3.0): reuse freely, including commercially, if you include the provider’s attribution statement. It doesn’t cover personal data.", codex:"data-licences"},
   {id:"datacite", term:"DataCite", def:"A non-profit organisation that registers DOIs for datasets and other research outputs, and maintains the metadata standard behind them.", codex:"citing-data"},
   {id:"data-citation", term:"Data citation", def:"A reference to a dataset, with creator, year, title, version, publisher and a persistent identifier, so readers can find exactly the data used.", codex:"citing-data"},
   {id:"concept-doi", term:"Concept DOI", def:"On Zenodo, a DOI that stands for all versions of a record and resolves to the latest one. Each version also has its own DOI.", codex:"citing-data"},
   {id:"persistent-identifier", term:"Persistent identifier", def:"A long-lasting reference to something, such as a DOI for a dataset or an ORCID iD for a person, that keeps working even if web addresses change.", codex:"fair-data"},
   {id:"data-repository", term:"Data repository", def:"A service that stores datasets for the long term, describes them with metadata and usually gives each one a DOI, such as Zenodo or a national data archive.", codex:"fair-data"},
   {id:"metadata-standard", term:"Metadata standard", def:"Shared rules for describing data (which fields, in what form), so people and machines can find and understand datasets. Examples: DataCite, DDI, Darwin Core.", codex:"fair-data"},
   {id:"data-ethics-term", term:"Data ethics", def:"Thinking about what is right and fair in how data are collected, analysed, shared and used, including who benefits and who may be harmed.", codex:"data-ethics"},
   {id:"data-justice", term:"Data justice", def:"Fairness in how data systems make people visible and spread benefits and harms, with attention to groups that have less power.", codex:"data-ethics"},
   {id:"algorithmic-bias", term:"Algorithmic bias", def:"When an automated system gives systematically worse or unfair results for some groups, often because of its training data or the measures it relies on.", codex:"data-power"},
   {id:"proxy-variable", term:"Proxy", def:"Something measured in place of what you really care about, such as health spending used to stand for health need. A proxy can carry hidden inequality.", codex:"data-power"},
   {id:"care-principles", term:"CARE principles", def:"Principles for Indigenous data governance: Collective benefit, Authority to control, Responsibility and Ethics. They complement FAIR by focusing on people and purpose.", codex:"data-power"},
   {id:"indigenous-data-sovereignty", term:"Indigenous data sovereignty", def:"The right of Indigenous peoples to govern data about their communities, lands, languages and resources.", codex:"data-power"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t3u10-q01", lesson:"t3u10-l1", level:1, q:"According to the Open Definition, which conditions may an open licence impose?", options:[
     {t:"Only conditions such as attribution, share-alike and keeping notices", ok:true, why:"These preserve provenance and openness, which the Open Definition allows."},
     {t:"Non-commercial use only", why:"Restricting purpose isn’t allowed: open means use for any purpose."},
     {t:"A fee for each use", why:"Open licences must not require royalties or fees."},
     {t:"Use only by people in certain countries", why:"Open licences must not discriminate against any person or group."}]},
   {id:"t3u10-q02", lesson:"t3u10-l1", level:2, q:"A ministry publishes election results under CC BY, but only as scanned images of printed tables. Is this open data?", options:[
     {t:"Not fully: the licence is open, but the data aren’t machine readable", ok:true, why:"Openness needs both an open licence and a form a computer can readily process."},
     {t:"Yes: CC BY is an open licence, so nothing else matters", why:"The Open Definition also requires machine readability and an open format."},
     {t:"No, because CC BY requires attribution", why:"Attribution is an allowed condition; it doesn’t stop data being open."},
     {t:"Yes, as long as the images are free to download", why:"Free download covers access, but a picture of a table isn’t readily machine readable."}]},
   {id:"t3u10-q03", lesson:"t3u10-l1", level:1, q:"What did the OECD rename as the OECD Data Explorer in 2024?", options:[
     {t:"OECD.Stat", ok:true, why:"OECD.Stat was renewed and renamed as the OECD Data Explorer in April 2024."},
     {t:"UNdata", why:"UNdata is run by the UN Statistics Division, not the OECD."},
     {t:"The Global Health Observatory", why:"That is the WHO’s data portal."},
     {t:"World Development Indicators", why:"That is a World Bank database."}]},
   {id:"t3u10-q04", lesson:"t3u10-l1", level:2, q:"Sione needs the official population of Samoa by village. Where should he look first?", options:[
     {t:"Samoa’s national statistics office, which runs the census", ok:true, why:"The national office conducts the census and publishes the most detailed official counts."},
     {t:"A Kaggle upload of world populations", why:"A community copy is unlikely to have village detail, and its source and licence need checking."},
     {t:"A general web search for “Samoa population”", why:"This tends to give headline figures and copies, not the detailed original tables."},
     {t:"A global dataset search tool only", why:"Search tools help, but start at the producer who would have counted this."}]},
   {id:"t3u10-q05", lesson:"t3u10-l1", level:1, q:"What does Google Dataset Search rely on to find datasets?", options:[
     {t:"Descriptions that publishers add to their pages using schema.org Dataset markup", ok:true, why:"It indexes that structured metadata and links to where the data live."},
     {t:"A team that checks the quality of every dataset", why:"It doesn’t verify datasets; metadata can be incomplete or wrong."},
     {t:"Copies of each dataset stored on Google’s servers", why:"It indexes descriptions; it isn’t an archive."},
     {t:"Only datasets that have DOIs", why:"Any page with the markup can be indexed. DataCite Commons is the tool focused on DOIs."}]},
   {id:"t3u10-q06", lesson:"t3u10-l1", level:3, q:"Mei finds a chart on Our World in Data built from World Bank data and wants to reuse the data in a report. What should she do about credit?", options:[
     {t:"Credit both Our World in Data and the World Bank, and check the World Bank’s terms for that indicator", ok:true, why:"Our World in Data asks for credit to itself and the original provider, and third-party data stay under the provider’s terms."},
     {t:"Credit only Our World in Data, since its work is CC BY", why:"Its CC BY licence covers its own work; the World Bank data remain under the World Bank’s terms."},
     {t:"Credit only the World Bank", why:"Our World in Data also asks to be credited when its data or charts are reused."},
     {t:"No credit is needed for numbers", why:"Both licences involved require attribution."}]},
   {id:"t3u10-q07", lesson:"t3u10-l1", level:2, q:"Why is a Kaggle dataset labelled CC0 not automatically safe to republish?", options:[
     {t:"The uploader may have copied it from a source they had no right to relicense", ok:true, why:"A licence only works if the person applying it holds the rights; check the original publisher’s terms."},
     {t:"CC0 isn’t a real licence", why:"CC0 is a widely used public-domain dedication."},
     {t:"Kaggle forbids all reuse", why:"Kaggle datasets are often reusable; the issue is checking provenance."},
     {t:"CC0 requires a fee", why:"CC0 imposes no conditions or fees."}]},
   {id:"t3u10-q08", lesson:"t3u10-l1", level:2, q:"Which search is most likely to find a usable dataset?", options:[
     {t:"“under-five mortality rate” Kenya dataset CSV", ok:true, why:"It uses the measure’s official name, a place and words that point to data files."},
     {t:"how many kids die", why:"Informal wording misses the official term used in data catalogues."},
     {t:"child health facts", why:"Too vague: no measure, place or file type."},
     {t:"best data website", why:"This finds opinions about websites, not a specific dataset."}]},
   {id:"t3u10-q09", lesson:"t3u10-l1", level:3, q:"A portal page says “Licence: CC BY 4.0” and, in its terms, “You may not redistribute these data.” What follows under the Open Definition?", options:[
     {t:"The extra term contradicts the licence, so the data aren’t clearly open; ask the publisher to resolve it", ok:true, why:"Additional terms must not contradict the licence. Conflicting terms create doubt, so seek clarification before redistributing."},
     {t:"The CC BY label wins, so ignore the terms", why:"Contradictory terms create legal uncertainty; don’t assume either side wins."},
     {t:"The data are open because they’re on a government site", why:"Being on a government site doesn’t make data open."},
     {t:"CC BY always forbids redistribution", why:"CC BY explicitly allows redistribution with credit."}]},

   /* Lesson 2 */
   {id:"t3u10-q10", lesson:"t3u10-l2", level:1, q:"What does a codebook or data dictionary tell you?", options:[
     {t:"What each column and code means, including units and how missing values are recorded", ok:true, why:"That’s its job: explaining every variable."},
     {t:"Who is allowed to use the data", why:"That’s the licence or terms of use."},
     {t:"Where to download the data", why:"That’s the landing page or portal."},
     {t:"Which statistical test to run", why:"A codebook describes the data, not the analysis."}]},
   {id:"t3u10-q11", lesson:"t3u10-l2", level:2, q:"Ana sees that a survey dataset codes missing incomes as 0. What is the main problem?", options:[
     {t:"“No income” and “didn’t answer” look the same, so averages and counts will be wrong", ok:true, why:"Missing values need their own documented code."},
     {t:"Zero isn’t allowed in a CSV", why:"CSV files can hold zeros; the issue is meaning."},
     {t:"It makes the file too large", why:"File size isn’t the concern."},
     {t:"Nothing: 0 is the standard missing code", why:"Using 0 for missing is a well-known error; use blanks, NA or a documented code."}]},
   {id:"t3u10-q12", lesson:"t3u10-l2", level:1, q:"Which method collects information as a by-product of providing a service?", options:[
     {t:"Administrative records", ok:true, why:"Tax, school, hospital and police records are created while running services."},
     {t:"A census", why:"A census deliberately counts everyone for statistical purposes."},
     {t:"A sample survey", why:"Surveys are designed specifically to collect data."},
     {t:"A modelled estimate", why:"Models combine existing data; they don’t collect new records."}]},
   {id:"t3u10-q13", lesson:"t3u10-l2", level:2, q:"Under the ILO definition, which person is counted as unemployed?", options:[
     {t:"Fatima, without work, available, and applied for three jobs last week", ok:true, why:"She meets all three conditions: without work, available and actively seeking."},
     {t:"Tomás, without work, who has stopped looking because he thinks there are no jobs", why:"Not actively seeking, so outside the labour force (a discouraged job-seeker)."},
     {t:"Hana, a full-time student not looking for work", why:"Not seeking work, so outside the labour force."},
     {t:"Kenji, working 10 hours a week but wanting more", why:"He is employed (underemployed), not unemployed."}]},
   {id:"t3u10-q14", lesson:"t3u10-l2", level:3, q:"A national survey and a UN IGME modelled estimate give different under-five mortality rates for the same country and year. What should Amara do?", options:[
     {t:"Read both methods, choose the one that fits her question (comparison across countries or local detail), and explain her choice", ok:true, why:"Both can be honest; the right one depends on the purpose, and stating the choice keeps her work transparent."},
     {t:"Assume the survey is wrong because the UN is bigger", why:"Size of organisation doesn’t decide accuracy; methods do."},
     {t:"Average the two", why:"Averaging different methods creates a figure with no clear meaning."},
     {t:"Drop the topic, because the data are unreliable", why:"Differences between methods are normal and can be explained."}]},
   {id:"t3u10-q15", lesson:"t3u10-l2", level:2, q:"Why might recorded crime rise when crime itself hasn’t?", options:[
     {t:"Reporting or recording became easier or stricter", ok:true, why:"Recorded crime is administrative data; changes in reporting or recording change the count."},
     {t:"Because statistics offices invent crimes", why:"There’s no basis for this; the issue is how records are made."},
     {t:"Because surveys always overestimate", why:"Recorded crime doesn’t come from surveys."},
     {t:"It can’t: recorded crime equals all crime", why:"Many crimes are never reported, so recorded crime is not all crime."}]},
   {id:"t3u10-q16", lesson:"t3u10-l2", level:1, q:"What is a “break in the series”?", options:[
     {t:"A jump in a data series caused by a change in method or definition, not by the real world", ok:true, why:"Producers flag breaks so you don’t mistake them for real change."},
     {t:"A year with no data", why:"That’s a gap, which may or may not be a break."},
     {t:"A file that won’t open", why:"That’s a technical problem, not a statistical term."},
     {t:"The point where a trend reverses", why:"A real reversal isn’t a break in the series."}]},
   {id:"t3u10-q17", lesson:"t3u10-l2", level:3, q:"Dmitri saved a GDP growth figure from a statistics office last year. Today the same table shows a different number for that year. What is most likely?", options:[
     {t:"The figure was revised as fuller information arrived, which is normal and documented", ok:true, why:"Early economic estimates are routinely revised; check the revision notes."},
     {t:"The office is hiding something", why:"Revisions are planned and published; they aren’t evidence of wrongdoing."},
     {t:"His saved figure was a typing error", why:"Possible, but routine revision is far more likely."},
     {t:"The website has been hacked", why:"There’s no reason to assume this when revisions are routine."}]},
   {id:"t3u10-q18", lesson:"t3u10-l2", level:2, q:"Which dataset description gives you the most confidence?", options:[
     {t:"National household survey, 2024, 8,400 households, methods note and codebook linked, version 2.1", ok:true, why:"It states method, date, size, documentation and version."},
     {t:"Compiled from various websites", why:"Vague provenance can’t be checked or cited."},
     {t:"Very large dataset, millions of rows", why:"Size says nothing about coverage or quality."},
     {t:"Popular dataset, downloaded 50,000 times", why:"Popularity isn’t evidence of accuracy."}]},

   /* Lesson 3 */
   {id:"t3u10-q19", lesson:"t3u10-l3", level:1, q:"What does CC BY 4.0 require when you reuse data?", options:[
     {t:"Credit the creator, link to the licence and indicate any changes", ok:true, why:"Attribution is the only condition; commercial use is allowed."},
     {t:"Non-commercial use only", why:"That’s an NC licence, not CC BY."},
     {t:"Share your adapted data under the same licence", why:"That’s share-alike (BY-SA or ODbL)."},
     {t:"Nothing at all", why:"That describes CC0."}]},
   {id:"t3u10-q20", lesson:"t3u10-l3", level:2, q:"Oluwaseun prints a poster map made from OpenStreetMap data (ODbL). What must he do?", options:[
     {t:"Include a notice that the map uses OpenStreetMap data under the ODbL", ok:true, why:"A map image is a produced work: it needs a notice but needn’t be ODbL itself."},
     {t:"Release the poster under the ODbL", why:"Share-alike applies to adapted databases, not to produced works like a printed map."},
     {t:"Pay OpenStreetMap a fee", why:"The ODbL is an open licence with no fees."},
     {t:"Nothing: maps are facts", why:"The licence requires the notice."}]},
   {id:"t3u10-q21", lesson:"t3u10-l3", level:1, q:"Under the UK Open Government Licence v3.0, if a provider gives no attribution statement, what should you include?", options:[
     {t:"“Contains public sector information licensed under the Open Government Licence v3.0.”", ok:true, why:"This is the licence’s default attribution statement."},
     {t:"“© Crown copyright, all rights reserved.”", why:"That contradicts the open licence."},
     {t:"Nothing: OGL data need no credit", why:"Attribution is the OGL’s main condition."},
     {t:"The name of the person who downloaded it", why:"Credit goes to the source, not to you."}]},
   {id:"t3u10-q22", lesson:"t3u10-l3", level:2, q:"Which kind of information does the UK OGL v3.0 NOT cover?", options:[
     {t:"Personal data", ok:true, why:"The OGL explicitly excludes personal data, along with logos, third-party rights and some other items."},
     {t:"Statistics published by a government department", why:"That’s exactly what the OGL is for."},
     {t:"Datasets in CSV format", why:"Format doesn’t matter to the licence."},
     {t:"Information used in a commercial product", why:"The OGL allows commercial use."}]},
   {id:"t3u10-q23", lesson:"t3u10-l3", level:3, q:"Lucía improves an ODbL database and wants to publish her improved version under CC BY only. What’s the problem?", options:[
     {t:"The ODbL requires publicly used adapted databases to stay under the ODbL or a compatible licence, and CC BY has no share-alike", ok:true, why:"Share-alike keeps derivatives open on the same terms."},
     {t:"CC BY isn’t an open licence", why:"CC BY is open; the issue is the ODbL’s share-alike condition."},
     {t:"She may not adapt ODbL data at all", why:"Adaptation is allowed; sharing the adaptation has conditions."},
     {t:"There is no problem", why:"Changing to a licence without share-alike breaks the ODbL’s condition."}]},
   {id:"t3u10-q24", lesson:"t3u10-l3", level:1, q:"Which shows DataCite’s preferred citation format, in the right order?", options:[
     {t:"Creator (PublicationYear): Title. Version. Publisher. (resourceTypeGeneral). Identifier", ok:true, why:"That is DataCite’s preferred format, with Version as an optional addition."},
     {t:"Title. Creator. Identifier. Year", why:"The order is wrong, and the publisher is missing."},
     {t:"Publisher. Title. Access date", why:"The creator, year and identifier are missing."},
     {t:"Identifier only", why:"An identifier alone doesn’t credit anyone or tell readers what it is."}]},
   {id:"t3u10-q25", lesson:"t3u10-l3", level:2, q:"Priya analysed version 2 of a Zenodo dataset that now has version 4. Which DOI should she cite?", options:[
     {t:"The version 2 DOI", ok:true, why:"The version DOI points to exactly the files she analysed."},
     {t:"The concept DOI", why:"It resolves to the latest version (4), not the one she used."},
     {t:"The version 4 DOI, since it’s newest", why:"She didn’t analyse version 4, so readers couldn’t check her work."},
     {t:"No DOI; the Zenodo home page is enough", why:"A home page doesn’t identify the dataset or version."}]},
   {id:"t3u10-q26", lesson:"t3u10-l3", level:3, q:"Tomás cites a dataset as “Retrieved from Google Dataset Search”. What should he change?", options:[
     {t:"Cite the dataset’s actual publisher (for example the repository) and its DOI, not the search tool", ok:true, why:"The search tool only found the dataset; the publisher and identifier let others find it."},
     {t:"Nothing: search tools are publishers", why:"Search tools index descriptions; they don’t publish data."},
     {t:"Add the date he searched", why:"A date doesn’t fix the wrong publisher."},
     {t:"Replace it with the Google home page URL", why:"That doesn’t identify the dataset at all."}]},
   {id:"t3u10-q27", lesson:"t3u10-l3", level:2, q:"Why do many open data licences explicitly cover database rights?", options:[
     {t:"In the EU and UK, databases can be protected by a database right even when the facts in them aren’t copyrighted", ok:true, why:"Covering both rights gives reusers clear permission."},
     {t:"Because all facts are copyrighted everywhere", why:"In many countries individual facts aren’t protected by copyright."},
     {t:"To charge fees for databases", why:"Open licences don’t charge fees."},
     {t:"Because databases can’t be shared otherwise", why:"They can be shared; the licence clarifies the rights involved."}]},

   /* Lesson 4 */
   {id:"t3u10-q28", lesson:"t3u10-l4", level:1, q:"Which file format is best for long-term sharing of a data table?", options:[
     {t:"CSV in UTF-8", ok:true, why:"An open, plain-text format that free tools will read for decades."},
     {t:"A screenshot of the spreadsheet", why:"Images aren’t machine readable."},
     {t:"Only the format of the program you used", why:"Program-specific formats may not open in the future or in other tools; also export CSV."},
     {t:"A PDF of the table", why:"PDF tables are hard to extract reliably."}]},
   {id:"t3u10-q29", lesson:"t3u10-l4", level:1, q:"What is a persistent identifier for a dataset?", options:[
     {t:"A long-lasting reference such as a DOI that keeps working even if the web address changes", ok:true, why:"Repositories register and maintain DOIs so links don’t break."},
     {t:"The file name", why:"File names change and aren’t globally unique."},
     {t:"The author’s email address", why:"Emails change and don’t identify the dataset."},
     {t:"A password for the data", why:"That controls access; it doesn’t identify anything."}]},
   {id:"t3u10-q30", lesson:"t3u10-l4", level:2, q:"Sione wants to share a dataset that is not about people. Which home is usually best?", options:[
     {t:"A repository that issues DOIs and promises preservation, ideally one his field uses", ok:true, why:"That makes it findable, citable and durable."},
     {t:"His personal website", why:"Links break when he moves jobs, and there’s no DOI or preservation promise."},
     {t:"A shared cloud folder", why:"No DOI, no preservation and no metadata standard."},
     {t:"Attached to emails on request", why:"Not findable or accessible by a standard route."}]},
   {id:"t3u10-q31", lesson:"t3u10-l4", level:2, q:"Which belongs in a dataset’s README?", options:[
     {t:"What the data are, who made them, how and when, the files, missing-value codes, licence and how to cite", ok:true, why:"These let a stranger understand and reuse the data correctly."},
     {t:"The key linking participant codes to names", why:"That must stay in secure storage, never in a shared package."},
     {t:"Signed consent forms", why:"These contain personal data and stay private."},
     {t:"Only the title", why:"A title alone doesn’t explain how to use or cite the data."}]},
   {id:"t3u10-q32", lesson:"t3u10-l4", level:3, q:"Hana removed names from a survey of 300 nurses in one hospital, but kept exact age, ward and years of service. Can she share it openly?", options:[
     {t:"Not yet: in one hospital those details could identify individuals, so she should coarsen them or use controlled access", ok:true, why:"Indirect identifiers combine to single people out, especially in a small, known group."},
     {t:"Yes: removing names makes data anonymous", why:"This is the most common misconception about anonymisation."},
     {t:"Yes, if she uses a non-commercial licence", why:"A licence doesn’t stop people recognising colleagues."},
     {t:"Yes, if the file is a CSV", why:"File format has nothing to do with identifiability."}]},
   {id:"t3u10-q33", lesson:"t3u10-l4", level:1, q:"What does a metadata standard such as DDI or Darwin Core provide?", options:[
     {t:"Shared rules for describing data so people and machines can find and understand them", ok:true, why:"Standards fix which fields to describe and how."},
     {t:"A licence for the data", why:"Licences are separate from metadata standards."},
     {t:"Encryption for sensitive data", why:"Standards describe data; they don’t protect it."},
     {t:"A way to collect survey answers", why:"They describe data after collection."}]},
   {id:"t3u10-q34", lesson:"t3u10-l4", level:3, q:"Kenji’s interview participants were told only the research team would see the transcripts. His journal asks for open data. What should he do?", options:[
     {t:"Keep the transcripts closed, publish a description and documentation, and explain the restriction in a data availability statement", ok:true, why:"Consent comes first; FAIR can still be met through a findable description and a clear access explanation."},
     {t:"Share the transcripts openly to meet the journal’s policy", why:"A journal policy can’t override promises made to participants."},
     {t:"Remove names and share openly", why:"That would still break the consent terms, and stories can identify people."},
     {t:"Withdraw the paper", why:"Journals routinely accept justified restrictions."}]},
   {id:"t3u10-q35", lesson:"t3u10-l4", level:2, q:"Which statement about FAIR is correct?", options:[
     {t:"Data can be FAIR with controlled access, if the description is public and the access route is clear", ok:true, why:"FAIR doesn’t require openness."},
     {t:"FAIR data must always be open to everyone", why:"FAIR and open are different ideas."},
     {t:"FAIR only applies to very large datasets", why:"FAIR applies to data of any size."},
     {t:"FAIR means data must be free of errors", why:"FAIR is about findability and reuse, not perfection."}]},
   {id:"t3u10-q36", lesson:"t3u10-l4", level:2, q:"Why put a version number in data file names and the README?", options:[
     {t:"So everyone can tell which version was analysed, and changes are traceable", ok:true, why:"Versions make results checkable and reuse safer."},
     {t:"Because repositories reject files without numbers", why:"They don’t; versioning is good practice, not a rule."},
     {t:"To make the files smaller", why:"Names don’t affect file size."},
     {t:"To hide earlier mistakes", why:"Versioning documents changes openly, including fixes."}]},

   /* Lesson 5 */
   {id:"t3u10-q37", lesson:"t3u10-l5", level:1, q:"Which of these is one of Data Feminism’s seven principles?", options:[
     {t:"Consider context", ok:true, why:"The book argues data aren’t neutral and their context is essential."},
     {t:"Maximise sample size", why:"Not one of the principles."},
     {t:"Remove all emotion from data", why:"The book’s principle is the opposite: elevate emotion and embodiment."},
     {t:"Trust official statistics", why:"Not one of the principles; the book encourages examining power, including official sources."}]},
   {id:"t3u10-q38", lesson:"t3u10-l5", level:2, q:"In Obermeyer et al. (2019), what was the main source of racial bias?", options:[
     {t:"Using health costs as a proxy for health need", ok:true, why:"Less was spent on equally sick Black patients, so the proxy understated their need."},
     {t:"Including race as an input", why:"Race wasn’t an input; bias came through the proxy."},
     {t:"A software bug", why:"The algorithm worked as designed; the design choice was the issue."},
     {t:"Too few patients in the data", why:"The data were large; the problem was what was predicted."}]},
   {id:"t3u10-q39", lesson:"t3u10-l5", level:1, q:"What does the A in the CARE principles stand for?", options:[
     {t:"Authority to control", ok:true, why:"Indigenous peoples’ rights and authority over their data should be recognised."},
     {t:"Accessible", why:"That’s the A in FAIR."},
     {t:"Anonymous", why:"Not part of CARE."},
     {t:"Accurate", why:"Not part of CARE."}]},
   {id:"t3u10-q40", lesson:"t3u10-l5", level:2, q:"What did Gender Shades (2018) find about three commercial face-classification systems?", options:[
     {t:"Error rates were up to 34.7% for darker-skinned women but at most 0.8% for lighter-skinned men", ok:true, why:"The study showed large gaps hidden by overall accuracy."},
     {t:"All groups had similar error rates", why:"The study found large differences between groups."},
     {t:"Lighter-skinned men were most often misclassified", why:"They had the lowest error rates."},
     {t:"The systems refused to classify anyone", why:"They classified faces, with unequal accuracy."}]},
   {id:"t3u10-q41", lesson:"t3u10-l5", level:3, q:"A city plans new bus routes using only location data from a popular smartphone app. Which Data Feminism question is most urgent?", options:[
     {t:"Who is missing from the data, and how will that affect them?", ok:true, why:"People without smartphones or that app, often poorer or older residents, aren’t counted, so routes may not serve them."},
     {t:"Is the app’s logo attractive?", why:"Irrelevant to whether the data represent riders."},
     {t:"How many rows does the dataset have?", why:"Size doesn’t fix who is missing."},
     {t:"Is the data stored as CSV?", why:"Format doesn’t affect coverage."}]},
   {id:"t3u10-q42", lesson:"t3u10-l5", level:2, q:"How do the CARE principles relate to FAIR?", options:[
     {t:"They complement FAIR, adding people and purpose; the aim is to be “FAIR and CARE”", ok:true, why:"CARE’s authors describe them as working together."},
     {t:"They replace FAIR", why:"They add to FAIR rather than replace it."},
     {t:"They forbid sharing Indigenous data", why:"They give communities authority, which may include sharing on their terms."},
     {t:"They are a file format standard", why:"They are governance principles."}]},
   {id:"t3u10-q43", lesson:"t3u10-l5", level:3, q:"A loan model doesn’t use ethnicity, but it uses postcode in a city where postcodes closely track ethnicity. What is the risk?", options:[
     {t:"Postcode can act as a proxy, bringing ethnic bias into decisions even without ethnicity as an input", ok:true, why:"Proxies correlated with group membership carry bias in."},
     {t:"None: without ethnicity, the model can’t be biased", why:"The Obermeyer study shows bias can enter through proxies."},
     {t:"Postcodes make the model run slowly", why:"Speed isn’t the ethical concern."},
     {t:"Postcodes are personal data, so the model is illegal", why:"Legality varies; the key issue here is unfair outcomes through a proxy."}]},
   {id:"t3u10-q44", lesson:"t3u10-l5", level:1, q:"Under which licence is the open-access edition of Data Feminism published?", options:[
     {t:"CC BY-NC-ND", ok:true, why:"The open-access edition is under CC BY-NC-ND 4.0: share it unchanged, non-commercially, with credit."},
     {t:"CC0", why:"It isn’t in the public domain."},
     {t:"CC BY 4.0", why:"Its licence is CC BY-NC-ND, which adds non-commercial and no-derivatives conditions that CC BY doesn’t have."},
     {t:"The ODbL", why:"The ODbL is for databases, not books."}]},
   {id:"t3u10-q45", lesson:"t3u10-l5", level:2, q:"Which practice puts the principle “make labor visible” into action?", options:[
     {t:"Crediting the field workers, data cleaners and annotators who produced the data", ok:true, why:"The principle asks us to recognise the many hands behind data work."},
     {t:"Automating data collection so no people are involved", why:"This doesn’t recognise anyone’s work."},
     {t:"Listing only the lead author", why:"That hides the labour of everyone else."},
     {t:"Keeping methods secret", why:"Hiding methods hides labour and context."}]}
  ]
});
