/* Track 4 · Unit 4 · Citing and managing references */
ICA.addUnit({
  id:"t4u4", track:"t4", n:4, title:"Citing and managing references", icon:"🔖",
  apps:{ms:"Word", google:"Google Docs", libre:"LibreOffice Writer", apple:"Pages"},
  blurb:"Give credit the way researchers do: in-text citations and reference lists in APA 7th, MLA 9th and Chicago 18th, DOIs, quoting, paraphrasing and summarising honestly, and a free reference manager (Zotero) that collects your sources and builds bibliographies for you, which you then check.",
  goals:[
    "Explain why we cite and how an in-text citation points to a full entry in a reference list, works-cited list or bibliography",
    "Write journal articles, books, chapters, web pages and reports in APA 7th, with correct in-text citations, et al., page numbers and missing-information cases",
    "Write the same sources in MLA 9th and Chicago 18th (notes-bibliography and author-date), and spot which style a citation is in",
    "Quote, paraphrase and summarise without patchwriting, recognise common knowledge, and handle self-plagiarism and AI-generated text according to the policy you’re under",
    "Collect sources with Zotero and its Connector, add items by DOI or ISBN, organise them, cite in Word, LibreOffice or Google Docs, and check every generated citation"
  ],
  read:[
    {book:"owg", where:"Handbook, “Index and Guide to Documentation”, then “APA Documentation and Format” and “MLA Documentation and Format”", note:"Free model citations. The APA part follows the 7th edition. The MLA part follows the 8th edition (2016): one visible change in the 9th is that a DOI is written as a full link (https://doi.org/…), which this unit teaches. The book has no Chicago section."},
    {book:"owg", where:"Chapter 13, Section 13.6 “Spotlight on … Ethical Research” (the parts on plagiarism) and Chapter 10, Section 10.8 “Spotlight on … Citation”"},
    {book:"zotero", where:"The Zotero documentation pages on adding items, the word processor plugins and Google Docs", note:"Official and kept up to date. Menu names in this unit were checked against Zotero 10 (autumn 2026)."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u4-l1", title:"Why we cite, and how citations work", minutes:45,
   goals:["Say what citations are for (credit, checking, conversation)","Connect an in-text citation to its full entry","Tell the main citation families apart","Use italics, quotation marks and capitals the way styles do","Write any DOI as a full https://doi.org/ link"],
   hook:{q:"A reader sees “(Okafor et al., 2023, p. 50)” in your essay. What is it mainly for?", options:["Proving to a teacher that you didn’t cheat","Letting the reader find the exact source and the exact page","Making the writing look more academic","Showing how many sources you read"], answer:1, reveal:"**It’s a signpost.** A citation tells the reader whose work this is and exactly where to find it, so they can check it, learn more or disagree. Honesty and credit come with it, but the main job is helping readers follow your trail. This lesson shows how the short signpost connects to a full entry at the end."},
   learn:[
    {h:"Why we cite at all", body:[
      {lead:"Research is a conversation that has been going on for a long time. Citations show who said what, so anyone can join in."},
      "When you use someone else’s words, data, images or ideas, you say where they came from. That does four jobs at once.",
      {list:[
        "**Credit.** Ideas are work. Naming the people who did it is fair, and in research it’s also how people build careers.",
        "**Checking.** A reader can go to your source and see whether it really says what you say it says.",
        "**Following up.** Your citations become a reading list for anyone who wants to go deeper.",
        "**Showing your own contribution.** When borrowed material is clearly marked, everything else is visibly yours: your argument, your connections, your analysis."
      ]},
      "Think of it like a recipe card that says “adapted from Hana’s grandmother”. It doesn’t weaken the recipe. It tells people where it came from, and it shows what you changed.",
      {key:"A [[citation]] is a signpost: it tells readers whose work you used and exactly where to find it."},
      "Citing well is a skill, not a test of character. Everyone gets formatting details wrong at first, including experienced researchers. What matters is that every borrowed idea is marked and every reader can find your sources."
    ]},
    {h:"Two halves: the pointer and the full entry", body:[
      "Almost every style has two parts that work together.",
      {list:[
        "An **[[in-text-citation|in-text citation]]**: a short pointer in your sentence, such as `(Haddad, 2021, p. 50)`, or a small number that leads to a footnote.",
        "A **list at the end** with the full details of every source, so the reader can find it. Its name depends on the style."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="110" rx="10" stroke-width="1.5"/><text x="24" y="34" class="s">Your paragraph</text><text x="24" y="58">Shade trees cooled the rooms</text><text x="24" y="78">by about two degrees</text><rect class="d-gold" x="20" y="88" width="210" height="24" rx="6" stroke-width="2"/><text x="125" y="105" text-anchor="middle">(Okafor et al., 2023, p. 50)</text><path class="d-ink" d="M125,114 L125,170" stroke-width="2" marker-end="url(#a1)"/><text x="135" y="146" class="s">surname + year lead here</text><rect class="d-panel" x="10" y="174" width="320" height="116" rx="10" stroke-width="1.5"/><text x="24" y="196" class="s">References (alphabetical)</text><text x="24" y="218">Haddad, S. (2021). …</text><rect class="d-sage" x="20" y="228" width="300" height="52" rx="6" stroke-width="2"/><text x="30" y="248">Okafor, A. N., Ramírez, L., &amp; Watanabe,</text><text x="30" y="270">K. (2023). Shade trees and … doi link</text></svg>', alt:"A paragraph containing the in-text citation (Okafor et al., 2023, p. 50). An arrow leads from it to the matching full entry in an alphabetical reference list, which starts with the same surname and year.", cap:"The pointer gives just enough (surname and year) to find the full entry, which gives everything needed to find the source."},
      {table:[["Style","The list is called","Pointer looks like"],["APA 7th","References","(Haddad, 2021, p. 50)"],["MLA 9th","Works Cited","(Haddad 50)"],["Chicago 18th, notes","Bibliography","a footnote number¹"],["Chicago 18th, author-date","References","(Haddad 2021, 50)"]]},
      "A [[reference-list|reference list]] contains only works you actually cited. A [[bibliography-term|bibliography]] in Chicago can also include works you consulted, and in everyday speech “bibliography” often just means “the list at the end”. Follow the name your style or instructions use."
    ]},
    {h:"Three families of styles", body:[
      "There are hundreds of [[citation-style|citation styles]], but most belong to a few families. Once you know the family, a new style is just new punctuation.",
      {table:[["Family","How the pointer works","Examples"],["Author-date","Surname and year in brackets","APA, Chicago author-date, the Harvard family"],["Author-page","Surname and page, no year","MLA"],["Notes","A number leads to a footnote or endnote","Chicago notes-bibliography"],["Numbered","[1] or ¹ leads to a numbered list","IEEE, Vancouver"]]},
      "Fields tend to have favourites. Psychology, education, nursing and many social sciences use APA. Literature and languages often use MLA. History and the arts often use Chicago notes. Engineering and computing often use IEEE, and medicine often uses Vancouver-style numbered references. These are tendencies, not rules: **the style you use is the one your instructor, department or publisher asks for.**",
      "This unit teaches the current editions: **APA 7th** (2020), **MLA 9th** (2021) and **Chicago 18th** (2024). Older editions still float around online, so check which edition a guide follows.",
      {tip:"“Harvard” isn’t one style. It’s a family of similar author-date styles with no single official version. Universities publish their own, and one widely used version is *Cite Them Right*. If you’re asked for Harvard, ask which guide to follow."}
    ]},
    {h:"What every full entry records", body:[
      "Every style answers the same four questions about a source; they just put the answers in different orders with different punctuation.",
      {table:[["Question","What it means","Example"],["Who?","Author(s), or an organisation","Okafor, Ramírez and Watanabe"],["When?","Date of publication","2023"],["What?","Title of the work","Shade trees and classroom temperatures"],["Where?","Where it lives, and how to get there","Journal of Schoolyard Ecology, volume 14, issue 2, pages 45–62, a DOI"]]},
      "So the most useful habit isn’t memorising styles. It’s **recording the details while you read**: author names exactly as printed, the year, the full title and subtitle, the journal or publisher, volume, issue, pages and the DOI or web address. Missing details are what make citing slow, because you have to find the source again.",
      {ex:"Practice sources in this unit are invented.\nThe people, journals, publishers and DOIs don’t exist,\nso you can practise without worrying about a real paper.\nTheir DOIs start with 10.5555, a prefix Crossref uses\nfor examples. They won’t open a real article.", label:"About the examples", mono:true}
    ]},
    {h:"Italics, quotation marks and capitals", body:[
      "Styles mark titles so readers can tell a whole work from a part of one. The general idea: a **whole work that stands alone** (a book, a journal, a report) goes in *italics*. A **part inside something bigger** (an article in a journal, a chapter in a book, a page on a website) goes in quotation marks in MLA and Chicago. Website names are a special case: MLA italicises them, but Chicago and APA write them in plain type.",
      {table:[["Title","APA 7th","MLA 9th and Chicago 18th"],["Book or report","*Italics*, sentence case","*Italics*, Title Case"],["Journal name","*Italics*, Title Case","*Italics*, Title Case"],["Article or chapter","Plain, sentence case","“Quotation Marks,” Title Case"],["Web page","*Italics*, sentence case","“Quotation Marks,” Title Case"]]},
      "**[[sentence-case|Sentence case]]** capitalises only the first word, the first word after a colon, and proper nouns (names, places, organisations). **[[title-case|Title case]]** capitalises the major words. APA uses sentence case for the titles of articles, books, chapters, reports and web pages, but title case for journal names. MLA and Chicago use title case for everything (their rules for small words differ a little).",
      {ex:"Sentence case: Shade trees and classroom temperatures: Evidence from twelve schools\nTitle case:    Shade Trees and Classroom Temperatures: Evidence from Twelve Schools", label:"The same title, two ways", mono:true},
      {tip:"In plain text, and in this app’s Citation Lab, italics are shown with *asterisks* around the italic part, like `*Journal of Schoolyard Ecology*`. In your own document you’d simply make that part italic."}
    ]},
    {h:"DOIs: a permanent address for a paper", body:[
      "Web addresses break when sites are reorganised. A **[[doi|DOI]]** (Digital Object Identifier) is a permanent ID given to an article, chapter, book or dataset. The publisher keeps it pointing to the right place even if the site changes.",
      "A DOI always starts with `10.`, then a **prefix** (which identifies the organisation that registered it), a slash, and a **suffix** chosen by that organisation.",
      {ex:"DOI on its own:     10.5555/jse.142\nAs a link (use this): https://doi.org/10.5555/jse.142", label:"Writing a DOI", mono:true},
      "**APA 7th, MLA 9th and Chicago 18th all write a DOI as a full link beginning `https://doi.org/`.** Older forms such as `doi:10.…` or `DOI: 10.…` and `http://dx.doi.org/…` come from earlier editions; convert them. Copy the DOI exactly: a single wrong character leads nowhere.",
      "Where do you find one? On the article’s web page, on the first page of the PDF, or in a database record. If an article has a DOI, use it instead of a database or website address.",
      {warn:"A DOI shows a work was formally registered, usually by a publisher. It doesn’t prove the work is good, peer reviewed or still valid: retracted papers keep their DOIs. Judge quality separately."},
      {lab:"cl-doi", t:"Practise: write DOIs as links"}
    ]},
    {h:"Getting it right without memorising everything", body:[
      "Nobody memorises every rule. Professionals keep a guide open and check. A sensible routine:",
      {ol:[
        "Find out which style and edition you need (assignment brief, course handbook or a journal’s “guide for authors”).",
        "Record full details of each source as you read, or save it to a reference manager such as {{zotero-basics|Zotero}} (Lesson 5).",
        "Use the official guide for anything unusual: [APA Style](https://apastyle.apa.org/), the [MLA Style Center](https://style.mla.org/) and the [Chicago Manual of Style’s quick guide](https://www.chicagomanualofstyle.org/tools_citationguide.html). University library guides and the Purdue OWL are helpful second opinions.",
        "Check every pointer has a matching entry, and every entry is cited somewhere (except in a Chicago bibliography that lists works consulted).",
        "Be consistent. A reader forgives a tiny comma slip far more easily than missing or mismatched sources."
      ]},
      {key:"Complete and findable beats perfectly punctuated. Then polish the punctuation."}
    ]}
   ],
   try:[
    {id:"t4u4-l1-x1", type:"mcq", q:"Ana paraphrases a statistic from a report and puts a citation after it. Which of these is the citation’s **most important** job?", options:[
      {t:"Letting readers find the report and check the statistic", ok:true, why:"Right. Citations exist so readers can trace and check your evidence; credit and honesty come with that."},
      {t:"Making the sentence sound more formal", why:"Formality isn’t the point. A citation in an informal blog post does the same job: it shows where the claim came from."},
      {t:"Proving Ana read a lot", why:"The number of sources doesn’t matter to a reader. What matters is that each claim can be traced."},
      {t:"Protecting the report’s copyright", why:"Citing gives credit, but it isn’t a copyright licence. Copyright is a separate question about copying, not about naming sources."}
    ]},
    {id:"t4u4-l1-x2", type:"match", q:"Match each style to what its list at the end is called.", pairs:[
      ["APA 7th","References","APA calls its list “References”, with the heading in bold."],
      ["MLA 9th","Works Cited","MLA calls it “Works Cited” because it lists works you cited."],
      ["Chicago notes-bibliography","Bibliography","Chicago’s notes system ends with a bibliography, which can include works consulted."],
      ["IEEE","A numbered reference list","Numbered styles list sources in the order they’re first cited, [1], [2], [3]…"]
    ]},
    {id:"t4u4-l1-x3", type:"sort", q:"In **MLA and Chicago**, does each title go in *italics* or in “quotation marks”?", buckets:["Italics (a whole work)","Quotation marks (a part)"], items:[
      {t:"A book: Repairing Things", b:0, why:"A book stands alone, so it’s italic."},
      {t:"A journal: Journal of Schoolyard Ecology", b:0, why:"The journal is the whole that contains articles, so it’s italic."},
      {t:"An article in that journal", b:1, why:"An article is a part of the journal, so it goes in quotation marks."},
      {t:"A chapter in an edited book", b:1, why:"A chapter is part of the book, so it goes in quotation marks; the book title is italic."},
      {t:"A report: Clinic Waiting Times in Rural Districts", b:0, why:"A report stands alone, like a book, so it’s italic."},
      {t:"One page on a website", b:1, why:"A single page is part of the site, so it goes in quotation marks in MLA and Chicago. (APA italicises web page titles: that’s one of its differences.)"}
    ]},
    {id:"t4u4-l1-x4", type:"order", q:"Put the parts of an APA journal-article reference in order (the four questions).", items:[
      {t:"Who: Okafor, A. N., Ramírez, L., & Watanabe, K.", why:"APA starts with the authors."},
      {t:"When: (2023).", why:"APA puts the date second, in brackets. That’s what makes it author-date."},
      {t:"What: Shade trees and classroom temperatures: Evidence from twelve schools.", why:"The article title comes third, in sentence case."},
      {t:"Where: Journal of Schoolyard Ecology, 14(2), 45–62.", why:"Then the source: journal, volume, issue and pages."},
      {t:"How to get there: `https://doi.org/10.5555/jse.142`", why:"The DOI link comes last, with no full stop after it in APA."}
    ]},
    {id:"t4u4-l1-x5", type:"mcq", q:"Kenji’s source shows “DOI: 10.5555/hh.77”. How should he write it in APA 7th, MLA 9th or Chicago 18th?", options:[
      {t:"https://doi.org/10.5555/hh.77", ok:true, why:"All three current styles write the DOI as a full https://doi.org/ link."},
      {t:"DOI: 10.5555/hh.77", why:"The “DOI:” label is from older editions. Current styles use the link form."},
      {t:"doi:10.5555/hh.77", why:"This was MLA 8th’s form. MLA 9th, like APA 7th and Chicago 18th, uses https://doi.org/."},
      {t:"https://www.10.5555/hh.77.com", why:"That isn’t a working address. The DOI goes after https://doi.org/, unchanged."}
    ]},
    {id:"t4u4-l1-x6", type:"mcq", q:"Sione was asked to use “Harvard style”. What’s the best first step?", options:[
      {t:"Ask which Harvard guide the course or publisher follows", ok:true, why:"Harvard is a family with no single official version, so the exact rules depend on the guide your institution uses."},
      {t:"Use APA 7th, because it’s the official Harvard style", why:"APA is its own style. Harvard styles are similar author-date styles, but they differ in details."},
      {t:"Use footnotes, because Harvard is a notes style", why:"Harvard styles are author-date styles, with surname and year in brackets."},
      {t:"Use any online generator, because every Harvard version is the same", why:"Versions differ in punctuation and details, and generators often don’t say which version they follow."}
    ]}
   ],
   apply:{intro:"Start a source record you’ll use for the rest of this unit. You don’t need a library login: open-access articles, free books and public reports all work.", tasks:[
     {t:"Collect full details for three sources you might really use", how:["Pick a topic you care about: your work, a hobby, a community issue, a course.","Find three different kinds of source: a journal article (try an open-access one from a journal website or from DOAJ), a book (a library catalogue record or a free textbook), and a web page or report from an organisation.","For each, write down who, when, what and where: every author exactly as printed (or the organisation), the date, the full title and subtitle, the journal or publisher or website, volume, issue and pages if any, and the DOI or web address."], write:"Source 1 (article): authors, year, title, journal, volume(issue), pages, DOI\nSource 2 (book): …\nSource 3 (web page or report): …"},
     {t:"Follow a DOI to its home", how:["Find a DOI on the article you chose (look near the title or on the first page of the PDF). If it has none, find any article that does.","Type `https://doi.org/` followed by the DOI into your browser’s address bar and open it.","Notice where it lands: usually the article’s page at the publisher. Compare it with the address you started from."], write:"The DOI, written as a link, and where it took me"},
     {t:"Find out which style you’re expected to use", how:["Look in your assignment brief, course handbook or, for a journal, its “guide for authors” or “instructions for authors”.","Note the style and edition. If none is given, note which style your field tends to use, and ask."], write:"Style and edition I need, and where it says so"}
   ], proof:"A notes box with full details for three different kinds of source, one DOI written as a working https://doi.org/ link, and the style and edition you need."},
   read:[{book:"owg", where:"Chapter 14, Section 14.2 “Glance at Form: Citation Style, Purpose, and Formatting” (the part “Citation Styles”)"},{book:"owg", where:"Chapter 10, Section 10.8 “Spotlight on … Citation”"}]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u4-l2", title:"APA Style, 7th edition", minutes:55,
   goals:["Build APA references for articles, books, chapters, web pages and reports","Use sentence case, title case and italics correctly","Write parenthetical and narrative citations, with et al. and page numbers","Handle no author, no date, group authors, secondary sources and AI tools"],
   hook:{q:"In APA 7th, an article has 15 authors. How many do you name in the **reference list**?", options:["Only the first, then “et al.”","The first six, then “et al.”","All 15","The first three, then “et al.”"], answer:2, reveal:"**All 15.** APA 7th lists up to 20 authors in the reference list. The shortcut “et al.” belongs in the in-text citation, where any work with three or more authors becomes “(First author et al., year)” from the very first time you cite it. This lesson shows both."},
   learn:[
    {h:"Author, date, title, source", body:[
      {lead:"An APA reference answers the four questions in a fixed order: Who. (When). What. Where."},
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-rose" x="10" y="10" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="32" class="s">1 · Author (who)</text><text x="22" y="56">Okafor, A. N., Ramírez, L., &amp; Watanabe, K.</text><rect class="d-gold" x="10" y="84" width="320" height="56" rx="8" stroke-width="2"/><text x="22" y="106" class="s">2 · Date (when), in brackets</text><text x="22" y="128">(2023).</text><rect class="d-lup" x="10" y="150" width="320" height="76" rx="8" stroke-width="2"/><text x="22" y="172" class="s">3 · Title (what), sentence case</text><text x="22" y="194">Shade trees and classroom temperatures:</text><text x="22" y="214">Evidence from twelve schools.</text><rect class="d-sage" x="10" y="236" width="320" height="84" rx="8" stroke-width="2"/><text x="22" y="258" class="s">4 · Source (where): journal italic, volume italic</text><text x="22" y="280">Journal of Schoolyard Ecology, 14(2), 45–62.</text><text x="22" y="304">https://doi.org/10.5555/jse.142</text></svg>', alt:"An APA journal article reference split into four stacked boxes: author names with initials, the year in brackets, the article title in sentence case, and the source (journal name, volume, issue, pages and DOI link).", cap:"Each element ends with a full stop, except the DOI or URL at the very end."},
      "The list is titled **References** (bold, centred), sorted alphabetically by the first author’s surname, double-spaced, and each entry has a [[hanging-indent|hanging indent]]: the first line starts at the margin and the following lines are indented 0.5 inch (1.27 cm), so surnames stand out.",
      {h:"Authors"},
      {list:[
        "Surname, then initials with full stops and spaces: `Okafor, A. N.`",
        "Separate authors with commas and put `&` before the last one, even with two authors: `Okafor, A. N., & Ramírez, L.`",
        "List **up to 20** authors. With 21 or more, list the first 19, then an ellipsis (`. . .`), then the final author.",
        "An organisation can be the author: `World Health Organization.` Write its full name.",
        "Editors of a whole edited book get `(Ed.)` or `(Eds.)` after their names."
      ]},
      {h:"Dates"},
      "Usually just the year: `(2023).` For things like web pages and news articles, add month and day: `(2024, March 5).` No date at all: `(n.d.).` Accepted but not yet published: `(in press).`"
    ]},
    {h:"Titles: sentence case, title case and italics", body:[
      "APA treats titles in two ways:",
      {list:[
        "**Titles of works** (articles, books, chapters, reports, web pages) are in **sentence case**: capital for the first word, the first word after a colon, and proper nouns only.",
        "**Names of periodicals** (journals, magazines, newspapers) keep **title case**: *Journal of Schoolyard Ecology*."
      ]},
      "Italics mark the part a reader would look for on a shelf or a website: the book, report or web page title when it stands alone, and for articles the **journal name and volume number**. The issue number in brackets is not italic, and article and chapter titles are never italic or in quotation marks.",
      {ex:"Wrong: Shade Trees And Classroom Temperatures\nRight: Shade trees and classroom temperatures\n\nWrong: Radio, rumour and public health in kenya\nRight: Radio, rumour and public health in Kenya   (proper noun)", label:"Sentence case, done right", mono:true},
      {warn:"Many databases and some reference managers store titles in Title Case. APA styles in reference managers usually print a title exactly as stored, so a title stored in Title Case comes out wrong. You’ll fix this in Lesson 5."}
    ]},
    {h:"The five patterns you’ll use most", body:[
      "Here are APA 7th patterns for the most common sources, using invented practice sources. *Asterisks* mark italics.",
      {ex:"Okafor, A. N., Ramírez, L., & Watanabe, K. (2023). Shade trees and classroom temperatures: Evidence from twelve schools. *Journal of Schoolyard Ecology, 14*(2), 45–62. https://doi.org/10.5555/jse.142", label:"Journal article with a DOI", mono:true},
      "The volume (14) is italic with the journal name; the issue (2) is in plain brackets right after it, with no space. Always include the issue number when there is one. If the journal numbers articles instead of pages, write `Article 104` instead of the page range. If there’s no DOI and you found the article in an academic database, just end after the pages.",
      {lab:"cl-apa-article", t:"Practise: an APA journal article"},
      {ex:"Haddad, S. (2021). *Repairing things: A practical history of mending*. Riverbend Press.", label:"Book", mono:true},
      "No city or country for the publisher (that was dropped in the 7th edition), and no “Kindle edition” or other format for ebooks. Add a DOI at the end if the book has one. A later edition goes in brackets straight after the title, not in italics: `*Repairing things: A practical history of mending* (2nd ed.). Riverbend Press.`",
      {lab:"cl-apa-book", t:"Practise: an APA book"},
      {ex:"Mensah, A. K. (2022). Radio, rumour and public health. In T. Ortega & M. Lin (Eds.), *Communicating health in a crisis* (pp. 33–51). Northgate University Press. https://doi.org/10.5555/chc.3", label:"Chapter in an edited book", mono:true},
      "The chapter author comes first. Editors’ initials come **before** their surnames here, followed by `(Eds.)`. The chapter’s page range goes in brackets after the book title, with `pp.`",
      {lab:"cl-apa-chapter", t:"Practise: an APA chapter in an edited book"}
    ]},
    {h:"Web pages and reports from organisations", body:[
      {ex:"Coastal Water Trust. (2024, March 5). *Well water testing at home*. https://example.org/wells", label:"Web page, organisation as author", mono:true},
      "When the organisation is both the author and the website’s owner, don’t repeat its name as the site name. If an individual wrote the page, put them first and the site name before the URL: `Mensah, A. K. (2024, May 2). *Title of page*. Coastal Water Trust. https://…`",
      "Add a retrieval date only for pages designed to change and not archived, such as a live data dashboard: `Retrieved October 2, 2026, from https://…`. Otherwise, no “Retrieved from”.",
      {lab:"cl-apa-web", t:"Practise: an APA web page by an organisation"},
      {ex:"Regional Health Observatory. (2025). *Clinic waiting times in rural districts* (Report No. 7). https://example.org/report7", label:"Report by an organisation", mono:true},
      "A report number goes in brackets after the title, not in italics. When the author and publisher are the same organisation, the publisher is left out. If a government department published a report written by a named agency within it, the agency is the author and the department is the publisher.",
      {lab:"cl-apa-report", t:"Practise: an APA report"},
      {tip:"No URL protocol rules to remember: copy the address exactly as it appears in the browser, including https://, and don’t add a full stop after it."}
    ]},
    {h:"In-text citations", body:[
      "Every APA in-text citation has the author’s surname and the year. There are two ways to write it:",
      {table:[["Authors","Parenthetical","Narrative"],["One","(Haddad, 2021)","Haddad (2021)"],["Two","(Okafor & Ramírez, 2023)","Okafor and Ramírez (2023)"],["Three or more","(Okafor et al., 2023)","Okafor et al. (2023)"],["Organisation","(Coastal Water Trust, 2024)","Coastal Water Trust (2024)"]]},
      "Use `&` inside brackets and `and` in your sentence. [[et-al|“Et al.”]] means “and others” (a full stop after “al.”, none after “et”). In APA 7th it’s used for three or more authors **from the first citation**. Two-author works always show both names.",
      {h:"Page numbers"},
      "A **direct quotation** always needs a location: `(Haddad, 2021, p. 50)` for one page and `(Haddad, 2021, pp. 50–51)` for a range, with an en dash. If there are no page numbers, use a paragraph number, a section name or a timestamp: `(Coastal Water Trust, 2024, para. 3)`. For a paraphrase, page numbers are encouraged (they help readers), but not required.",
      {ex:"Haddad (2021) argued that “mending is a form of attention” (p. 50).\nRepair was once “an ordinary household skill” (Haddad, 2021, p. 12).", label:"Quotations with page numbers", mono:true},
      {h:"Special cases"},
      {list:[
        "**Group author with a familiar abbreviation**: first time `(World Health Organization [WHO], 2025)`, then `(WHO, 2025)`.",
        "**No date**: `(Coastal Water Trust, n.d.)`.",
        "**No author**: the title moves into the author position in the reference, and the in-text citation uses the title in title case, italic if it’s italic in the reference, or in quotation marks if not: `(*Well Water Testing at Home*, 2024)`. Use “Anonymous” only if the work is actually signed that way.",
        "**Several works at once**: alphabetical, separated by semicolons: `(Haddad, 2021; Mensah, 2022)`."
      ]},
      {lab:"cl-apa-intext", t:"Practise: APA in-text citations with page numbers"},
      {lab:"cl-apa-etal", t:"Practise: three or more authors (et al.)"}
    ]},
    {h:"Sources you found inside other sources, and AI tools", body:[
      "Sometimes you read about a work in someone else’s writing and can’t get the original. APA calls this a **[[secondary-citation|secondary source]]**. Cite it sparingly; find the original if you can.",
      {ex:"In text:   (Ferreira, 1998, as cited in Mensah, 2022)\nReference list: only Mensah (2022), the work you actually read.", label:"“As cited in”", mono:true},
      "If you don’t know the original’s year, leave it out: `Ferreira’s survey (as cited in Mensah, 2022)`.",
      {h:"Generative AI tools"},
      "APA’s current guidance (published in September 2025 and now on its AI references page, last updated April 2026) treats the **company** as the author, because AI can’t be an author. You can cite the tool in general (the year is when the tool was last updated) or, when it helps readers, a specific shared chat (with the date of the chat):",
      {ex:"OpenAI. (2025). *ChatGPT* [Large language model]. https://chatgpt.com\n\nOpenAI. (2026, February 10). *Title of the chat in sentence case* [Generative AI chat]. ChatGPT. https://chatgpt.com/share/…\n\nIn text: (OpenAI, 2025)", label:"APA references for AI (patterns from apastyle.apa.org)", mono:true},
      "APA no longer asks for a version number by default; use the model name if it’s available, or just the tool’s name. Prompts aren’t part of the reference: describe how you used the tool in your text (for example in your method or a note), and include prompts in an appendix if your instructor or publisher wants them. Most importantly, citing is not the same as permission: whether you may use AI, and how you must disclose it, depends on your instructor’s or publisher’s policy (Lesson 4).",
      {lab:"cl-apa-ai", t:"Practise: cite a generative AI tool"}
    ]},
    {h:"Checking an APA reference", body:[
      "Run this quick check over each entry:",
      {ol:[
        "Authors: surname, initials, commas, `&` before the last; all of them up to 20.",
        "Date in brackets, followed by a full stop.",
        "Title in sentence case; proper nouns still capitalised; italic only if it stands alone.",
        "Journal in title case and italic, volume italic, issue in plain brackets, page range with an en dash.",
        "DOI as `https://doi.org/…`, no full stop after it, no “Retrieved from”, no “DOI:” label.",
        "No publisher city; publisher left out if it’s the same as the author.",
        "Every in-text citation matches an entry with the same spelling and year."
      ]},
      {lab:"cl-apa-fix", t:"Practise: fix a flawed APA reference"}
    ]}
   ],
   try:[
    {id:"t4u4-l2-x1", type:"spot", q:"This APA 7th reference has mistakes. Tap the parts that break APA rules.", ask:"breaks APA 7th", mono:true, parts:[
      {t:"Okafor, A. N., Ramírez, L., & Watanabe, K.", flag:false, why:"Correct: surnames, initials, commas and an ampersand before the last author."},
      " ",
      {t:"(2023).", flag:false, why:"Correct: year in brackets, then a full stop."},
      " ",
      {t:"Shade Trees And Classroom Temperatures.", flag:true, why:"Article titles in APA use sentence case: “Shade trees and classroom temperatures.”"},
      " ",
      {t:"*Journal of Schoolyard Ecology, 14*(2), 45–62.", flag:false, why:"Correct: journal name and volume in italics, issue in plain brackets, pages with an en dash."},
      " ",
      {t:"DOI: 10.5555/jse.142", flag:true, why:"APA 7th writes DOIs as links: https://doi.org/10.5555/jse.142, with no “DOI:” label."}
    ]},
    {id:"t4u4-l2-x2", type:"sort", q:"In an APA 7th **reference list**, which titles use sentence case and which keep title case?", buckets:["Sentence case","Title case"], items:[
      {t:"An article title", b:0, why:"Titles of works, including articles, use sentence case."},
      {t:"A journal name", b:1, why:"Periodical names keep title case: Journal of Schoolyard Ecology."},
      {t:"A book title", b:0, why:"Book titles use sentence case (and italics)."},
      {t:"The title of an edited book a chapter appears in", b:0, why:"It’s the title of a work, so sentence case, even though it comes after “In … (Eds.),”."},
      {t:"A web page title", b:0, why:"Web page titles use sentence case (and italics)."},
      {t:"A newspaper name", b:1, why:"Newspapers are periodicals, so their names keep title case."}
    ]},
    {id:"t4u4-l2-x3", type:"match", q:"Match each situation to the correct APA 7th in-text citation.", pairs:[
      ["A quotation from page 50 of Haddad’s 2021 book","(Haddad, 2021, p. 50)","A direct quotation needs the page, with “p.” for a single page."],
      ["A paraphrase of a 2023 article by Okafor and Ramírez, in brackets","(Okafor & Ramírez, 2023)","Two authors: both names every time, joined with & inside brackets."],
      ["The same article, named in your sentence","Okafor and Ramírez (2023)","In a narrative citation, write “and”, and put the year in brackets after the names."],
      ["An article by Okafor, Ramírez and Watanabe, cited for the first time","(Okafor et al., 2023)","APA 7th uses et al. for three or more authors from the first citation."],
      ["A web page by Coastal Water Trust with no date","(Coastal Water Trust, n.d.)","No date becomes “n.d.”, in both the citation and the reference."]
    ]},
    {id:"t4u4-l2-x4", type:"order", q:"Put the pieces of this APA chapter reference in order.", items:[
      {t:"Mensah, A. K. (2022).", why:"The chapter’s author and year come first."},
      {t:"Radio, rumour and public health.", why:"Then the chapter title, in sentence case, not italic."},
      {t:"In T. Ortega & M. Lin (Eds.),", why:"Then “In”, the editors with initials first, and (Eds.)."},
      {t:"*Communicating health in a crisis* (pp. 33–51).", why:"Then the book title in italics and the chapter’s pages."},
      {t:"Northgate University Press.", why:"Then the publisher, with no city."},
      {t:"`https://doi.org/10.5555/chc.3`", why:"The DOI link comes last, with no full stop."}
    ]},
    {id:"t4u4-l2-x5", type:"mcq", q:"Lucía read Mensah’s 2022 chapter, which quotes a 1998 survey by Ferreira. Lucía couldn’t get the survey itself. What goes in her APA reference list?", options:[
      {t:"Only Mensah (2022)", ok:true, why:"Right. The reference list holds what you actually read. In the text she writes (Ferreira, 1998, as cited in Mensah, 2022)."},
      {t:"Only Ferreira (1998)", why:"Listing Ferreira would suggest Lucía read the survey herself. She didn’t, so the reader needs Mensah to find it."},
      {t:"Both Ferreira (1998) and Mensah (2022)", why:"APA lists only the secondary source you used; the original is named in the text with “as cited in”."},
      {t:"Neither; secondary sources aren’t cited", why:"They are cited, just through the work where you found them."}
    ]},
    {id:"t4u4-l2-x6", type:"mcq", q:"An organisation’s web page has no author named and no date. It’s from Coastal Water Trust, which also runs the site. How does APA handle it?", options:[
      {t:"The organisation is the author; the date is n.d.: (Coastal Water Trust, n.d.)", ok:true, why:"An organisation counts as an author. Only when there’s truly no person or organisation does the title move to the author position."},
      {t:"Author: Anonymous; (Anonymous, n.d.)", why:"APA uses “Anonymous” only when a work is actually signed “Anonymous”."},
      {t:"Leave it out; undated pages can’t be cited", why:"Undated pages can be cited: “n.d.” means no date."},
      {t:"Use today’s date as the publication date", why:"That would be false information. Use n.d., and add a retrieval date only if the page is designed to change."}
    ]},
    {id:"t4u4-l2-x7", type:"mcq", q:"Priya used ChatGPT to suggest an outline, and her instructor allows that with disclosure. Following APA’s guidance, which statement is right?", options:[
      {t:"She cites OpenAI as the author and describes how she used the tool where she discloses it", ok:true, why:"APA treats the company as the author (OpenAI, year) and expects the use to be described; the instructor’s policy decides what’s allowed."},
      {t:"She lists ChatGPT as a co-author of her essay", why:"AI can’t be an author: it can’t take responsibility for the work or agree to authorship."},
      {t:"She must give the model’s exact version number in every reference", why:"APA no longer requires a version number by default; the model name or tool name is enough."},
      {t:"She pastes her prompts into the reference list entry", why:"Prompts aren’t part of the reference. If needed, they can go in an appendix or where she discloses the use."}
    ]}
   ],
   apply:{intro:"Turn the three sources you recorded in Lesson 1 into a real APA reference list.", tasks:[
     {t:"Write your three sources in APA 7th", how:["Write each reference following the patterns in this lesson.","Check each one against the seven-point checklist.","For anything unusual (a podcast, a dataset, a government report), find the matching example on apastyle.apa.org."], write:"Reference 1:\nReference 2:\nReference 3:\nOne thing I had to look up:"},
     {t:"Write an in-text citation for each, including one quotation with a page number", how:["Write one sentence that quotes a source (with the page or paragraph number).","Write one sentence with a parenthetical citation and one with a narrative citation."], write:"My three sentences with citations"},
     {t:"Format the list with a hanging indent", app:{
       ms:["Type **References** as the heading, then your entries in alphabetical order, one paragraph each.","Select the entries. On the **Home** tab, open the **Paragraph** settings (the small arrow in the corner of the Paragraph group, or right-click → **Paragraph**).","Under **Indentation**, set **Special** to **Hanging** and **By** to 0.5\" (1.27 cm). Click **OK**."],
       google:["Type **References** as the heading, then your entries in alphabetical order, one paragraph each.","Select the entries and choose **Format → Align & indent → Indentation options**.","Set **Special indent** to **Hanging**, 0.5 inch (1.27 cm), and click **Apply**."],
       libre:["Type **References** as the heading, then your entries in alphabetical order, one paragraph each.","Select the entries and choose **Format → Paragraph → Indents & Spacing**.","Set **Before text** to 1.27 cm (0.5\") and **First line** to −1.27 cm (−0.5\"). Click **OK**."],
       apple:["Type **References** as the heading, then your entries in alphabetical order, one paragraph each.","Select the entries, click **Format** in the toolbar and choose the **Layout** tab.","Under **Indents**, set **Left** to 0.5 in (1.27 cm) and **First** to 0. The first line now starts further left than the rest."]
     }}
   ], proof:"Three APA 7th references in alphabetical order with hanging indents, plus three sentences with correct in-text citations (one with a page number)."},
   read:[{book:"owg", where:"Handbook, “APA Documentation and Format”: “In-Text Citation Models (APA)” and “APA References” (models 86–122)"}]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u4-l3", title:"MLA 9th and Chicago 18th", minutes:55,
   goals:["Build MLA works-cited entries from core elements and containers","Write MLA in-text citations, including no-author and indirect sources","Write Chicago footnotes, shortened notes and bibliography entries","Write Chicago author-date references and citations","Tell APA, MLA and Chicago apart at a glance"],
   hook:{q:"Which of these styles leaves the **year** out of its in-text citation?", options:["APA 7th","MLA 9th","Chicago author-date","All three include the year"], answer:1, reveal:"**MLA.** An MLA citation is just surname and page, like (Haddad 50). The year is in the works-cited entry. MLA grew up in literature and languages, where the exact page matters more than how recent a source is. Chicago’s notes system also keeps the year out of your sentence, inside the footnote."},
   learn:[
    {h:"MLA’s big idea: core elements and containers", body:[
      {lead:"MLA 9th doesn’t give you one fixed pattern per source type. It gives you a template of core elements, and you fill in the ones your source has."},
      {ol:["Author.","Title of source.","Title of container,","Other contributors,","Version,","Number,","Publisher,","Publication date,","Location."]},
      "A **[[mla-container|container]]** is the bigger thing your source sits inside: a journal holds an article, an edited book holds a chapter, a website holds a page. Sometimes there’s a second container, such as the database where you read the journal.",
      {fig:'<svg viewBox="0 0 340 250"><rect class="d-panel" x="10" y="10" width="320" height="230" rx="12" stroke-width="1.5"/><text x="24" y="34" class="s">Container 2 (optional): a database</text><rect class="d-lup" x="26" y="46" width="288" height="180" rx="10" stroke-width="2"/><text x="40" y="70" class="s">Container 1: the journal (italic)</text><text x="40" y="92">Journal of Schoolyard Ecology</text><text x="40" y="112" class="s">vol. 14, no. 2, 2023, pp. 45–62</text><rect class="d-gold" x="42" y="126" width="256" height="86" rx="8" stroke-width="2"/><text x="56" y="150" class="s">The source (in quotation marks)</text><text x="56" y="172">“Shade Trees and Classroom</text><text x="56" y="192">Temperatures …”</text></svg>', alt:"Nested boxes: the article (the source, in quotation marks) sits inside the journal (container 1, in italics, with volume, number, date and pages), which can sit inside a database (an optional second container).", cap:"Source inside container: the source’s title goes in quotation marks, the container’s in italics."},
      "Punctuation follows the template: a full stop after the author and after the title of the source, commas between the elements of a container, and a full stop at the end of each container."
    ]},
    {h:"MLA works-cited patterns", body:[
      {list:[
        "**Names**: the first author is reversed with the full first name: `Okafor, Adaeze N.` Two authors: `Okafor, Adaeze N., and Lucía Ramírez.` **Three or more**: the first author, then `et al.`: `Okafor, Adaeze N., et al.`",
        "**Titles** in title case. Sources that are part of something go in quotation marks; containers and standalone works in italics.",
        "**Editions**: a later edition goes after the title, shortened, then a comma: `*Title*. 2nd ed., Publisher, Year.`",
        "**Numbers and dates**: `vol. 14, no. 2`, then the date. Day month year, with long month names shortened: `5 Mar. 2024`.",
        "**Location**: pages with `pp.`, or a DOI (preferred) or a URL. DOIs start `https://doi.org/`; for other URLs MLA recommends leaving out `https://`. End the entry with a full stop, even after a DOI or URL.",
        "**Organisation that is both author and publisher**: skip the author and start with the title."
      ]},
      {ex:"Okafor, Adaeze N., et al. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology*, vol. 14, no. 2, 2023, pp. 45–62, https://doi.org/10.5555/jse.142.", label:"MLA: journal article", mono:true},
      {lab:"cl-mla-article", t:"Practise: an MLA journal article"},
      {ex:"Haddad, Samir. *Repairing Things: A Practical History of Mending*. Riverbend Press, 2021.", label:"MLA: book", mono:true},
      {lab:"cl-mla-book", t:"Practise: an MLA book"},
      {ex:"Mensah, Ama K. “Radio, Rumour and Public Health.” *Communicating Health in a Crisis*, edited by Tomás Ortega and Mei Lin, Northgate University Press, 2022, pp. 33–51, https://doi.org/10.5555/chc.3.", label:"MLA: chapter in an edited book", mono:true},
      {ex:"“Well Water Testing at Home.” *Coastal Water Trust*, 5 Mar. 2024, example.org/wells.", label:"MLA: web page by an organisation that runs the site", mono:true},
      "In that last entry the organisation is the author, the website and the publisher, so MLA starts with the page title and doesn’t repeat the name. If a person wrote the page, start with them: `Mensah, Ama K. “Title.” *Website Name*, …`",
      {lab:"cl-mla-web", t:"Practise: an MLA web page"}
    ]},
    {h:"MLA in-text citations", body:[
      "MLA’s pointer is the first element of the entry (usually the surname) and a page number, with **no comma** and no “p.”:",
      {table:[["Situation","MLA in-text citation"],["One author","(Haddad 50)"],["Two authors","(Okafor and Ramírez 48)"],["Three or more","(Okafor et al. 50)"],["Entry starts with a title","(“Well Water Testing”)"],["Author named in your sentence","Haddad argues … (50)."]]},
      "When the entry starts with a title, use the title (shortened to its first noun phrase) in the citation, with the same quotation marks or italics. If a source has no page numbers, cite just the author; use section or paragraph numbers only if the source itself numbers them.",
      "In your own sentences MLA prefers words to “et al.”: write “Okafor and others found…” and keep “et al.” for brackets and the works-cited list.",
      {ex:"Indirect source (you read Mensah, who quotes Ferreira):\nFerreira called radio “the village’s second well” (qtd. in Mensah 40).\nWorks Cited lists only Mensah.", label:"MLA: “qtd. in”", mono:true},
      {lab:"cl-mla-intext", t:"Practise: MLA in-text citations"},
      {lab:"cl-mla-fix", t:"Practise: fix a flawed MLA entry"}
    ]},
    {h:"Chicago: two systems in one manual", body:[
      "*The Chicago Manual of Style* (18th edition, 2024) offers two systems. Choose one per piece of writing:",
      {list:[
        "**[[notes-bibliography|Notes and bibliography]]** uses footnotes or endnotes plus a bibliography. Common in history, the arts and much of the humanities.",
        "**[[author-date|Author-date]]** uses (Surname year, page) in the text plus a reference list. Common in the sciences and social sciences."
      ]},
      "The details are almost the same in both; mainly the date moves. Two changes in the 18th edition are worth knowing: for **three or more authors**, notes and author-date citations now use the first author plus “et al.” (the 17th edition waited until four); and the **place of publication** is no longer needed for books (it’s still allowed)."
    ]},
    {h:"Chicago notes and bibliography", body:[
      "The first time you cite a source, the footnote gives full details, with the author’s name in normal order and commas between parts. Later notes for the same source use a **shortened note**: surname, a short title (up to about four words) and the page. The bibliography entry reverses the first author’s name and uses full stops between parts. (When a paper has a full bibliography, Chicago 18th also allows a shortened note even the first time, so check what your instructor wants.)",
      {ex:"1. Samir Haddad, *Repairing Things: A Practical History of Mending* (Riverbend Press, 2021), 50.\n\n2. Haddad, *Repairing Things*, 52.\n\nBibliography:\nHaddad, Samir. *Repairing Things: A Practical History of Mending*. Riverbend Press, 2021.", label:"Chicago notes: a book (full note, shortened note, bibliography)", mono:true},
      {ex:"1. Adaeze N. Okafor et al., “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools,” *Journal of Schoolyard Ecology* 14, no. 2 (2023): 50, https://doi.org/10.5555/jse.142.\n\n2. Okafor et al., “Shade Trees,” 51.\n\nBibliography:\nOkafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology* 14, no. 2 (2023): 45–62. https://doi.org/10.5555/jse.142.", label:"Chicago notes: a journal article", mono:true},
      "Notice: in the note, three authors become “Okafor et al.”, but the bibliography lists all three. The bibliography lists **up to six** authors; with seven or more, list the first three followed by “et al.” The note cites the exact page (50); the bibliography gives the article’s full page range.",
      "A later edition of a book goes after the title, with a full stop in the bibliography: `Raman, Priya. *Salt and Stone*. 2nd ed. Harbour Light Press, 2021.`",
      {lab:"cl-chi-note", t:"Practise: a Chicago footnote for a journal article"},
      {lab:"cl-chi-bib", t:"Practise: a Chicago bibliography entry for a book"},
      {ex:"Mensah, Ama K. “Radio, Rumour and Public Health.” In *Communicating Health in a Crisis*, edited by Tomás Ortega and Mei Lin. Northgate University Press, 2022. https://doi.org/10.5555/chc.3.", label:"Chicago bibliography: a chapter", mono:true},
      "Chicago 18th makes the chapter’s page range optional in the bibliography; older guides, and many instructors, include it after the editors’ names (`edited by Tomás Ortega and Mei Lin, 33–51.`). Both are acceptable.",
      {tip:"“Ibid.” (“in the same place”) was once used for a note citing the same source as the note before. Chicago now prefers a shortened note instead, though ibid. is still allowed. Follow your instructor’s preference."}
    ]},
    {h:"Chicago author-date", body:[
      "Author-date looks like the notes bibliography, except that the **year moves to right after the author** and the in-text citation has no comma between author and year:",
      {ex:"In text: (Okafor et al. 2023, 50)\n\nOkafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe. 2023. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology* 14 (2): 45–62. https://doi.org/10.5555/jse.142.\n\nHaddad, Samir. 2021. *Repairing Things: A Practical History of Mending*. Riverbend Press.", label:"Chicago author-date: citation and references", mono:true},
      "Volume and issue are written `14 (2): 45–62` in author-date, compared with `14, no. 2 (2023): 45–62` in notes-bibliography.",
      {lab:"cl-chi-ad", t:"Practise: a Chicago author-date reference"},
      {lab:"cl-chi-fix", t:"Practise: fix a flawed Chicago entry"}
    ]},
    {h:"Side by side", body:[
      "The same decisions, made differently by each style:",
      {table:[["Decision","APA 7th","MLA 9th","Chicago 18th"],["In-text","(Haddad, 2021, p. 50)","(Haddad 50)","Note ¹ or (Haddad 2021, 50)"],["First names","Initials","Full","Full"],["Article titles","Sentence case, plain","Title Case, “quoted”","Title Case, “quoted”"],["Year in entry","After author","Near the end","Near the end (bibliography) or after author (author-date)"],["Et al. in text","3+ authors","3+ authors","3+ authors"],["Et al. in list","Never (up to 20 names)","3+ authors","7+ authors"]]},
      "A neat surprise: for a simple book, MLA and Chicago bibliography entries can look identical (`Haddad, Samir. *Repairing Things*. Riverbend Press, 2021.`). Telling styles apart is easiest from the in-text citation and from journal articles.",
      {key:"Learn one style deeply, then learn the others as “what’s different”."}
    ]}
   ],
   try:[
    {id:"t4u4-l3-x1", type:"sort", q:"Which style is each in-text citation in?", buckets:["APA 7th","MLA 9th","Chicago author-date"], items:[
      {t:"(Haddad, 2021, p. 50)", b:0, why:"APA: comma after the surname, year, comma, “p.” and the page."},
      {t:"(Haddad 50)", b:1, why:"MLA: surname and page only, no comma and no year."},
      {t:"(Haddad 2021, 50)", b:2, why:"Chicago author-date: no comma between surname and year, then a comma and the page without “p.”"},
      {t:"(Okafor et al. 50)", b:1, why:"MLA: et al. for three or more authors, then the page, no year."},
      {t:"(Okafor et al., 2023)", b:0, why:"APA: et al., comma, year."},
      {t:"(Okafor et al. 2023, 50)", b:2, why:"Chicago author-date: et al. for three or more, year without a comma before it."}
    ]},
    {id:"t4u4-l3-x2", type:"spot", q:"This MLA 9th works-cited entry has mistakes. Tap the parts that break MLA rules.", ask:"breaks MLA 9th", mono:true, parts:[
      {t:"Okafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe.", flag:true, why:"With three or more authors, MLA lists only the first: “Okafor, Adaeze N., et al.”"},
      " ",
      {t:"“Shade trees and classroom temperatures.”", flag:true, why:"MLA uses title case: “Shade Trees and Classroom Temperatures.”"},
      " ",
      {t:"*Journal of Schoolyard Ecology*,", flag:false, why:"Correct: the container in italics, followed by a comma."},
      " ",
      {t:"vol. 14, no. 2,", flag:false, why:"Correct: MLA abbreviates volume and number."},
      " ",
      {t:"2023, pp. 45–62,", flag:false, why:"Correct: date, then pages with “pp.”"},
      " ",
      {t:"doi:10.5555/jse.142.", flag:true, why:"That was MLA 8th’s form. MLA 9th writes https://doi.org/10.5555/jse.142."}
    ]},
    {id:"t4u4-l3-x3", type:"match", q:"Match each part of Chicago notes-bibliography to what it is.", pairs:[
      ["Full note","The first footnote for a source, with all the details","The first citation gives everything a reader needs."],
      ["Shortened note","Later notes: surname, short title, page","After the first note, a short form saves space."],
      ["Bibliography entry","An alphabetical entry at the end, first author reversed","The bibliography is sorted by surname, so the first name is reversed."],
      ["Et al. in a note","Used for three or more authors in Chicago 18th","The 18th edition lowered the threshold from four to three."]
    ]},
    {id:"t4u4-l3-x4", type:"mcq", q:"Mei cites the Coastal Water Trust page “Well Water Testing at Home” in MLA. Its entry starts with the title, because the Trust is author and publisher. What’s her in-text citation?", options:[
      {t:"(“Well Water Testing”)", ok:true, why:"The citation uses the first element of the entry, here the title, shortened and in the same quotation marks. A web page usually has no page number."},
      {t:"(Coastal Water Trust 2024)", why:"MLA in-text citations don’t include the year, and this entry starts with the title, not the organisation."},
      {t:"(Anonymous)", why:"MLA says not to use “Anonymous” in place of an author."},
      {t:"(Well Water Testing at Home, n.d.)", why:"That mixes in APA habits. MLA has no “n.d.” in citations and keeps the title’s quotation marks."}
    ]},
    {id:"t4u4-l3-x5", type:"order", q:"Put this Chicago **bibliography** entry for a journal article in order.", items:[
      {t:"Okafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe.", why:"Authors first, the first one reversed; all three listed (Chicago lists up to six)."},
      {t:"“Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.”", why:"The article title in title case and quotation marks."},
      {t:"*Journal of Schoolyard Ecology* 14, no. 2", why:"The journal in italics, then volume and issue."},
      {t:"(2023): 45–62.", why:"The year in brackets, a colon and the full page range."},
      {t:"`https://doi.org/10.5555/jse.142`.", why:"The DOI link ends the entry, followed by a full stop."}
    ]},
    {id:"t4u4-l3-x6", type:"mcq", q:"A study has eight authors. How does a Chicago 18th **bibliography** list them?", options:[
      {t:"The first three, then “et al.”", ok:true, why:"Chicago 18th lists up to six authors in the bibliography; with seven or more, the first three plus et al."},
      {t:"All eight", why:"That would be right for up to six authors. With seven or more, Chicago shortens the list."},
      {t:"Only the first, then “et al.”", why:"That’s the rule for notes and author-date citations with three or more authors, not for the bibliography."},
      {t:"The first seven, then “et al.”", why:"That was the 17th edition’s rule for eleven or more authors. The 18th edition changed it."}
    ]},
    {id:"t4u4-l3-x7", type:"mcq", q:"Dmitri quotes Ferreira’s words, which he found on page 40 of Mensah’s chapter. He names Ferreira in his own sentence, and he’s writing in MLA. What goes after the quotation?", options:[
      {t:"(qtd. in Mensah 40), with only Mensah in Works Cited", ok:true, why:"MLA marks an indirect source with “qtd. in” and lists only the source you actually read. Ferreira is already named in the sentence, so the brackets don’t repeat the name."},
      {t:"(Ferreira 40), with Ferreira in Works Cited", why:"That claims Dmitri read Ferreira directly. He didn’t, and the page number belongs to Mensah’s chapter."},
      {t:"(Ferreira, as cited in Mensah, 2022)", why:"“As cited in” is APA’s wording, and MLA citations don’t include a year."},
      {t:"No citation, because Mensah only quoted someone else", why:"The words and the source still need crediting; skipping it would be plagiarism."}
    ]}
   ],
   apply:{intro:"Take the three APA references you wrote in Lesson 2 and write them in the other styles. Rewriting the same sources is the fastest way to see what each style changes.", tasks:[
     {t:"Rewrite your three sources in MLA 9th", how:["Use full first names, title case and quotation marks for parts.","Move the year to the end of the container details.","Write an MLA in-text citation for one quotation."], write:"Works Cited (3 entries) and one in-text citation"},
     {t:"Rewrite one source as a Chicago full note, a shortened note and a bibliography entry", how:["Write the full note (first name first, commas, publication details in brackets).","Write a shortened note for a later page.","Write the bibliography entry (first author reversed, full stops)."], write:"Full note:\nShortened note:\nBibliography:"},
     {t:"Insert a real footnote in your word processor", app:{
       ms:["Click where the note number should go (after the punctuation at the end of the sentence).","Choose **References → Insert Footnote** (on Windows also [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:F]]).","Type your full note in the footnote area at the bottom of the page."],
       google:["Click where the note number should go.","Choose **Insert → Footnote** (or [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:F]]; on a Mac [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:F]]).","Type your full note at the bottom of the page."],
       libre:["Click where the note number should go.","Choose **Insert → Footnote and Endnote → Footnote**.","Type your full note at the bottom of the page."],
       apple:["Click where the note number should go.","Choose **Insert → Footnote**.","Type your full note at the bottom of the page."]
     }}
   ], proof:"Your three sources in MLA 9th, one source as a Chicago full note, shortened note and bibliography entry, and a document with a real (numbered) footnote."},
   read:[{book:"owg", where:"Handbook, “MLA Documentation and Format”: “MLA In-Text Citations” and “MLA Works Cited”", note:"This part follows the MLA 8th edition. Write DOIs as https://doi.org/ links, as the 9th edition does."}]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u4-l4", title:"Quoting, paraphrasing, summarising and plagiarism", minutes:50,
   goals:["Choose between quoting, paraphrasing and summarising","Quote accurately, with page numbers and signal phrases","Paraphrase without patchwriting","Recognise plagiarism, self-plagiarism and common knowledge","Handle AI-generated text according to the policy you’re under"],
   hook:{q:"You rewrite a paragraph from a book completely in your own words. Do you still need a citation?", options:["No: new words make it yours","Yes: the ideas and information still came from the book","Only if you kept some of the original words","Only if you’re writing for a journal"], answer:1, reveal:"**Yes.** A citation credits ideas and information, not just words. Changing every word is a good paraphrase, but the thinking is still the author’s. This lesson shows how to use sources in three ways, and where honest mistakes most often creep in."},
   learn:[
    {h:"Three ways to use a source", body:[
      {lead:"You can bring a source into your writing by quoting it, paraphrasing it or summarising it. All three need a citation."},
      {fig:'<svg viewBox="0 0 340 280"><text x="170" y="22" text-anchor="middle" class="s">How closely you follow the source</text><path class="d-ink" d="M20,40 L320,40" stroke-width="2"/><text x="20" y="58" class="s">exact words</text><text x="320" y="58" text-anchor="end" class="s">only the main point</text><rect class="d-rose" x="10" y="74" width="100" height="120" rx="8" stroke-width="2"/><text x="60" y="98" text-anchor="middle">Quote</text><text x="60" y="122" text-anchor="middle" class="s">exact words</text><text x="60" y="140" text-anchor="middle" class="s">in quotation</text><text x="60" y="158" text-anchor="middle" class="s">marks + page</text><rect class="d-lup" x="120" y="74" width="100" height="120" rx="8" stroke-width="2"/><text x="170" y="98" text-anchor="middle">Paraphrase</text><text x="170" y="122" text-anchor="middle" class="s">one passage,</text><text x="170" y="140" text-anchor="middle" class="s">your words and</text><text x="170" y="158" text-anchor="middle" class="s">structure</text><rect class="d-sage" x="230" y="74" width="100" height="120" rx="8" stroke-width="2"/><text x="280" y="98" text-anchor="middle">Summary</text><text x="280" y="122" text-anchor="middle" class="s">much shorter,</text><text x="280" y="140" text-anchor="middle" class="s">main ideas</text><text x="280" y="158" text-anchor="middle" class="s">only</text><rect class="d-gold" x="60" y="214" width="220" height="54" rx="8" stroke-width="2"/><text x="170" y="236" text-anchor="middle">All three need a citation</text><text x="170" y="256" text-anchor="middle" class="s">the ideas are still the author’s</text></svg>', alt:"A line from “exact words” to “only the main point”. Along it sit three boxes: Quote (exact words in quotation marks with a page number), Paraphrase (one passage in your own words and structure) and Summary (much shorter, main ideas only). Below: all three need a citation.", cap:"Quote, paraphrase and summary differ in how closely they follow the source, not in whether they need a citation."},
      {table:[["Use","When it’s the best choice"],["Quote","The exact wording matters: a definition, a memorable or controversial phrase, words you’re going to analyse"],["Paraphrase","You need the detail of one passage, but the wording itself isn’t the point"],["Summary","You need the gist of a long passage, chapter or whole study"]]},
      "Most academic writing leans on paraphrase and summary, with quotations used sparingly. APA, for example, notes that published authors paraphrase their sources most of the time rather than quoting them, and encourages students to do the same. Some instructors and publishers also limit how much you may quote."
    ]},
    {h:"Quoting well", body:[
      "A [[direct-quotation|direct quotation]] reproduces the exact words, in quotation marks, with a location (page, paragraph or timestamp).",
      {list:[
        "**Introduce it** with a [[signal-phrase|signal phrase]] that names the author and shows your stance: “Haddad argues…”, “As Mensah notes…”, “Okafor et al. found…”.",
        "**Copy it exactly**, including spelling. Mark anything you leave out with an ellipsis (…) and anything you add or change with square brackets: “[mending] faded”.",
        "**Explain it afterwards.** A quotation never speaks for itself; say what it shows and why it matters to your point.",
        "**Long quotations** become an indented [[block-quotation|block quotation]] with no quotation marks: in APA, 40 words or more; in MLA, prose longer than four lines."
      ]},
      {ex:"Haddad (2021) describes mending as “a form of attention” (p. 50), which helps explain why repair cafés feel social rather than merely practical.", label:"Signal phrase, quotation, explanation (APA)", mono:true},
      {warn:"Don’t change meaning with an ellipsis. Cutting “not” out of “this is not a cure” is misquoting, even with dots in place."}
    ]},
    {h:"Paraphrasing: new words, new structure, same idea", body:[
      "A [[paraphrase]] restates one passage in your own words **and** your own sentence structure, keeping the meaning. A reliable method:",
      {ol:["Read the passage until you understand it.","Cover it, and write the idea from memory, as if explaining it to a friend.","Uncover it and compare: same meaning? Any phrases copied by accident? Put those in quotation marks or rewrite them.","Add the citation (and, in APA, ideally the page)."]},
      {ex:"Original (invented, Haddad, 2021, p. 50):\nIn many households, repair was once an ordinary skill passed between generations. As cheap replacements became widely available, the habit of mending faded, and with it a practical knowledge of how everyday objects are made.", label:"The original passage", mono:true},
      {ex:"Haddad (2021) traces how mending went from a routine family skill to a rare one: once new goods became cheap, people stopped fixing things and lost some of their understanding of how their belongings work (p. 50).", label:"A good paraphrase", mono:true},
      "The good version keeps the meaning but changes vocabulary and structure, and it still cites Haddad. Technical terms with no real alternative (such as “repair café” or “mitochondria”) can stay the same."
    ]},
    {h:"Patchwriting: the in-between trap", body:[
      "[[patchwriting|Patchwriting]] is when a “paraphrase” keeps the original’s structure and many of its phrases, just swapping in synonyms. It’s extremely common while people are learning a field or writing in an additional language, and it usually comes from trying to stay faithful to the source, not from trying to cheat. But most policies still treat it as plagiarism when the borrowed phrasing isn’t marked.",
      {ex:"In many homes, repair was once a normal skill handed down between generations. When cheap replacements became widely available, the habit of fixing faded, along with practical knowledge of how everyday objects are made (Haddad, 2021).", label:"Patchwriting (even with a citation)", mono:true},
      "Same sentence order, same structure, and whole phrases copied: “cheap replacements became widely available”, “practical knowledge of how everyday objects are made”. The citation credits the idea, but the wording is presented as the writer’s own.",
      {tip:"Two fixes: put the phrase you want in quotation marks, or close the source and rebuild the idea from what you understood. If you can’t explain it without the source in front of you, you may need to read more before writing."}
    ]},
    {h:"Summarising", body:[
      "A summary condenses a longer passage, chapter or whole work into its main ideas, in your own words. It’s much shorter than the original and leaves out examples and detail.",
      {ex:"Haddad (2021) argues that repair declined as a household skill when mass-produced goods became cheap, and that community repair projects are reviving it as a social activity.", label:"A one-sentence summary of a whole (invented) book", mono:true},
      "When summarising a whole work, no page number is needed. Summaries are the raw material of literature reviews; Unit 5 shows how to move from summarising sources one by one to [[synthesis|synthesising]] them ({{synthesis-writing}})."
    ]},
    {h:"What counts as plagiarism, and what doesn’t", body:[
      "[[plagiarism-term|Plagiarism]] is presenting someone else’s words, ideas, data or images as your own, whether deliberately or by accident. Common forms:",
      {list:[
        "Copying text without quotation marks and a citation (even a sentence or a phrase).",
        "Paraphrasing or summarising without a citation, or patchwriting.",
        "Using someone’s data, images, charts or code without credit.",
        "Submitting work written by someone else, whether a friend, a paid service, or (where it’s not allowed) an AI tool.",
        "**[[self-plagiarism|Self-plagiarism]]** (sometimes called text recycling): reusing your own previously submitted or published work as if it were new. Courses usually forbid resubmitting old work without permission, and journals require you to disclose and cite your earlier publications. Rules vary, so ask."
      ]},
      {h:"Common knowledge"},
      "[[common-knowledge|Common knowledge]] doesn’t need a citation: facts that your readers would already know, that appear in many general sources and aren’t disputed, such as “Nairobi is the capital of Kenya” or “water boils at 100 °C at sea level”. Specific figures, recent findings, interpretations and anyone’s original argument are not common knowledge. What counts depends on your audience and field. **When in doubt, cite.**",
      "Similarity-checking software only shows text that matches other text; a person still decides whether it’s a problem. Quotations you’ve marked and cited, and standard phrases, will match too, and that’s fine.",
      {key:"If you find a mistake in work you’ve submitted, telling your instructor or editor early is almost always treated far more kindly than having it discovered."}
    ]},
    {h:"AI-generated text and disclosure", body:[
      "Generative AI tools raise new questions, and the answers depend on who you’re writing for. APA’s style team puts it as “yes, for some AI tools, for some purposes, and no, for others”. So:",
      {list:[
        "**Find the policy first**: your course, institution or publisher. Policies differ widely and change often.",
        "**Disclose as required.** Many policies ask you to say which tool you used and for what (brainstorming, editing, translation). APA asks for disclosure where the use is relevant (for example in a method section or author note) and a citation of the tool; MLA encourages describing how AI touched your work.",
        "**Never cite what AI tells you a source says without reading the source.** AI tools can invent references that look real, or attach real references to claims they don’t support (a [[hallucinated-citation|hallucinated citation]]). Find and read the actual work, and cite that.",
        "**Running someone else’s text through an AI paraphraser** doesn’t remove the need to cite them, and it often produces patchwriting.",
        "**AI can’t be an author.** You are responsible for everything you submit."
      ]},
      "Unit 9 (Ethics, integrity and AI) goes further into publisher and journal policies: see {{ai-research-policies}}. For now: check, disclose, verify."
    ]}
   ],
   try:[
    {id:"t4u4-l4-x1", type:"sort", q:"Should each writer quote, paraphrase or summarise?", buckets:["Quote","Paraphrase","Summarise"], items:[
      {t:"Fatima is analysing the exact wording of a law’s definition", b:0, why:"When the exact words are what you’re analysing, quote them."},
      {t:"Kenji needs the main finding of a 30-page report in one sentence", b:2, why:"Condensing a long work to its main point is a summary."},
      {t:"Ana needs the details of one paragraph explaining a method, but the wording isn’t special", b:1, why:"One passage, full detail, ordinary wording: paraphrase it."},
      {t:"Tomás wants a politician’s memorable phrase from a speech", b:0, why:"A memorable or controversial phrase is a good reason to quote."},
      {t:"Hana is giving the gist of a chapter’s argument as background", b:2, why:"The gist of a chapter is a summary."},
      {t:"Oluwaseun explains one study’s procedure in his own words", b:1, why:"Restating one passage in detail, in new words, is a paraphrase."}
    ]},
    {id:"t4u4-l4-x2", type:"spot", q:"A student’s “paraphrase” of the Haddad passage. Tap the phrases copied from the original without quotation marks.", ask:"copied without quotation marks", parts:[
      {t:"In many homes,", flag:false, why:"“Homes” replaces “households”: a synonym swap, but no longer the original wording. (The sentence order is still the original’s, which is part of the patchwriting problem.)"},
      " ",
      {t:"repair was once", flag:true, why:"Copied exactly from the original."},
      " a normal skill handed down. When ",
      {t:"cheap replacements became widely available,", flag:true, why:"A whole clause copied word for word."},
      " ",
      {t:"people stopped fixing things,", flag:false, why:"This is new wording."},
      " and lost ",
      {t:"a practical knowledge of how everyday objects are made", flag:true, why:"Copied word for word. Either quote it or rebuild the idea, e.g. “their understanding of how their belongings work”."},
      " ",
      {t:"(Haddad, 2021).", flag:false, why:"The citation is fine. The problem is the unmarked borrowed wording."}
    ]},
    {id:"t4u4-l4-x3", type:"sort", q:"Writing for a general audience: does each statement need a citation?", buckets:["Cite it","Common knowledge"], items:[
      {t:"Shade trees cooled one school’s classrooms by 2 °C in a 2023 study", b:0, why:"A specific finding from a specific study: cite it."},
      {t:"The Pacific is the largest ocean", b:1, why:"Widely known, in every general reference, not disputed."},
      {t:"A theory that repair cafés build social trust", b:0, why:"An argument is someone’s original idea: credit them."},
      {t:"Water boils at 100 °C at sea level", b:1, why:"A basic, undisputed fact found in many general sources."},
      {t:"The number of people in a country with internet access last year", b:0, why:"Specific statistics always need a source, even if you think readers half-know them."},
      {t:"A definition you copied word for word from a textbook", b:0, why:"Exact words always need quotation marks and a citation, even for a familiar idea."}
    ]},
    {id:"t4u4-l4-x4", type:"mcq", q:"Priya wrote a strong essay for a course last year. She wants to hand in large parts of it for a new course. What should she do?", options:[
      {t:"Ask the new instructor first, and cite or disclose the earlier work if it’s allowed", ok:true, why:"Reusing your own submitted work without permission is self-plagiarism under most policies. Asking and disclosing makes it honest."},
      {t:"Just submit it: you can’t plagiarise yourself", why:"Most policies say you can, because each assignment is meant to be new work. Rules vary, so ask."},
      {t:"Run it through a paraphrasing tool so it looks different", why:"Disguising reuse makes it worse, not better, and may count as misconduct."},
      {t:"Cite it as if a different author wrote it", why:"That would be false. If reuse is allowed, cite it honestly as your own earlier work."}
    ]},
    {id:"t4u4-l4-x5", type:"mcq", q:"An AI tool gave Tomás a perfect-looking reference for his claim, with a DOI. When he opens the DOI link, it doesn’t exist. What should he do?", options:[
      {t:"Not use it; search for real sources on the claim and cite only what he has read", ok:true, why:"AI tools can invent plausible references. Only cite works you have found and checked."},
      {t:"Cite it anyway, because the reference looks correctly formatted", why:"Format says nothing about whether a source exists. A fake reference misleads readers and may be treated as fabrication."},
      {t:"Cite the AI tool as the source of the claim instead", why:"That doesn’t make the claim reliable. Find real evidence, or drop the claim."},
      {t:"Fix the DOI by changing a few characters until a link works", why:"That would point to some other work, which almost certainly doesn’t say the same thing."}
    ]},
    {id:"t4u4-l4-x6", type:"mcq", q:"Which of these is **patchwriting**?", options:[
      {t:"Keeping the original’s sentence structure and swapping some words for synonyms", ok:true, why:"That’s the definition: the source’s structure and much of its phrasing, lightly disguised."},
      {t:"Quoting a sentence exactly, in quotation marks, with a page number", why:"That’s a correct quotation."},
      {t:"Summarising a whole book in two sentences of your own", why:"That’s a summary; it doesn’t follow any passage’s wording."},
      {t:"Explaining an idea from memory, then checking the original and citing it", why:"That’s the recommended way to paraphrase."}
    ]}
   ],
   apply:{intro:"Practise with real text. Any open-access source works, including the free OpenStax books in this app’s reading list.", tasks:[
     {t:"Quote, paraphrase and summarise the same source", how:["Choose a paragraph from an open-access article or textbook section.","Write a sentence that quotes a short phrase from it, with a signal phrase and page or paragraph number.","Paraphrase the whole paragraph using the cover-and-rewrite method, then compare with the original and fix any copied phrases.","Summarise the whole article or section in one or two sentences."], write:"Original (copied with source details):\nQuotation:\nParaphrase:\nSummary:\nPhrases I caught and fixed:"},
     {t:"Find the policies that apply to you", how:["Look up the academic integrity or plagiarism policy of your course, institution or a journal you might write for (journals usually have it in their “guide for authors” or “editorial policies”).","Look for what it says about generative AI: is it allowed, for what, and how must you disclose it?","If you’re not studying or publishing, choose any university’s public policy and read it as an example."], write:"Whose policy, what it says about self-plagiarism and AI, and how to disclose"}
   ], proof:"Your notes contain one source used three ways (quote, paraphrase, summary) with citations, the phrases you fixed, and a short summary of the policy that applies to you."},
   read:[{book:"owg", where:"Chapter 12, Section 12.6 “Editing Focus: Integrating Sources and Quotations”"},{book:"owg", where:"Chapter 13, Section 13.6 “Spotlight on … Ethical Research” (“Plagiarism”, “What Plagiarism Is Not”, “Avoiding Plagiarism”)"}]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u4-l5", title:"Managing references with Zotero", minutes:60,
   goals:["Explain what a reference manager does and name several neutrally","Install Zotero and the Zotero Connector on your devices","Add items from web pages and by DOI or ISBN, and fix their details","Organise with collections and tags","Cite and build a bibliography in Word, LibreOffice or Google Docs, then check the output"],
   hook:{q:"A free reference manager will format your citations in APA, MLA or Chicago. What do you still need to do?", options:["Nothing: the software follows the style rules","Check each citation against the source and the style rules","Retype every citation by hand","Only check that the bibliography is in alphabetical order"], answer:1, reveal:"**Check them.** The software formats whatever details it has. If a title was saved in the wrong case, an organisation’s name was split into a fake first and last name, or a web page was saved as the wrong kind of item, the citation comes out wrong, neatly formatted. This lesson shows how to collect, cite and check."},
   learn:[
    {h:"What a reference manager does", body:[
      {lead:"A [[reference-manager|reference manager]] is a personal library for your sources: it stores their details, PDFs and notes, and writes citations for you in hundreds of styles."},
      "Think of it as a music app for your reading. You add items once, organise them into playlists, and the app takes care of formatting whenever you “play” one into a document. Change the style from APA to Chicago, and every citation and the bibliography update together.",
      "This lesson uses **[[zotero|Zotero]]**, because it’s free, open source and run by a nonprofit (the Corporation for Digital Scholarship), and it works on Windows, macOS and Linux. Other well-known options:",
      {list:[
        "**Mendeley** (from Elsevier) and **EndNote** (from Clarivate; paid, though many universities provide it).",
        "**JabRef** (free and open source, built around BibTeX for people who write in LaTeX).",
        "**Citavi** (from Lumivero), **Paperpile**, **RefWorks** and others, mostly paid; some are provided through institutions."
      ]},
      "Prices, platforms and features change, so check each one’s current site, and ask your library what it supports. Many managers, Zotero and Mendeley among them, use the same open style language, **[[csl|CSL]]** (Citation Style Language), so the same styles are available across tools."
    ]},
    {h:"Getting Zotero", body:[
      "Zotero has three parts that work together:",
      {table:[["Part","What it does","Where"],["Zotero desktop","Your library, plus the word processor plugins","Windows, macOS, Linux"],["Zotero Connector","Saves sources from web pages","Chrome, Firefox, Safari, Edge"],["zotero.org account","Free sync and an online library","Any browser"]]},
      "At the time of writing (November 2026) the current desktop version is **Zotero 10**. The version numbers have risen quickly (Zotero 7 came out in 2024), so yours may be newer; menu names in this lesson were checked in Zotero 10.",
      {list:[
        "**Chromebooks**: if your Chromebook can run Linux, install the Linux version inside the Linux development environment. If not (school-managed devices often can’t), use the Connector plus the online library at zotero.org.",
        "**iPhone and iPad**: there’s an official Zotero app in the App Store for reading, annotating and adding items.",
        "**Android**: Zotero has been building an official Android app; check zotero.org or Google Play for its current status. The online library works in any phone browser."
      ]},
      "A free zotero.org account syncs your library between devices. Item details and notes sync freely; attached files such as PDFs use **file storage, of which 300 MB is free**. When that’s full, your other data keeps syncing; you can buy more storage or use your own WebDAV storage.",
      {tip:"No account is needed to use Zotero on one computer. Create one when you want a backup or a second device."}
    ]},
    {h:"Collecting with the Connector", body:[
      "The **[[zotero-connector|Zotero Connector]]** is a [[browser-extension|browser extension]]. On a journal article, a library catalogue record, a news story or almost any web page, its toolbar button changes to show what it has recognised (an article, a book, a web page). One click saves the item with its details and, where the PDF is freely available, often the PDF too.",
      {fig:'<svg viewBox="0 0 340 340"><defs><marker id="a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="150" height="66" rx="8" stroke-width="2"/><text x="85" y="36" text-anchor="middle">Web page</text><text x="85" y="58" text-anchor="middle" class="s">+ Connector</text><rect class="d-lup" x="180" y="10" width="150" height="66" rx="8" stroke-width="2"/><text x="255" y="36" text-anchor="middle">DOI or ISBN</text><text x="255" y="58" text-anchor="middle" class="s">Add by Identifier</text><path class="d-ink" d="M85,78 L150,118" stroke-width="2" marker-end="url(#a5)"/><path class="d-ink" d="M255,78 L190,118" stroke-width="2" marker-end="url(#a5)"/><rect class="d-gold" x="60" y="122" width="220" height="80" rx="10" stroke-width="2"/><text x="170" y="146" text-anchor="middle">Your Zotero library</text><text x="170" y="168" text-anchor="middle" class="s">items, PDFs, notes</text><text x="170" y="188" text-anchor="middle" class="s">collections and tags</text><path class="d-ink" d="M300,162 L326,162 L326,40" stroke-width="2" stroke-dasharray="4 4"/><text x="318" y="110" text-anchor="end" class="s">sync</text><path class="d-ink" d="M170,204 L170,242" stroke-width="2" marker-end="url(#a5)"/><rect class="d-sage" x="30" y="246" width="280" height="84" rx="10" stroke-width="2"/><text x="170" y="270" text-anchor="middle">Word · LibreOffice · Google Docs</text><text x="170" y="292" text-anchor="middle" class="s">citations + bibliography in your style</text><text x="170" y="314" text-anchor="middle" class="s">then you check them</text></svg>', alt:"Two inputs, a web page saved with the Connector and a DOI or ISBN added by identifier, flow into your Zotero library (items, PDFs, notes, collections, tags), which can sync online. From the library, citations and a bibliography flow into Word, LibreOffice or Google Docs, where you check them.", cap:"Collect once, cite many times, in any style, and check at the end."},
      "The Connector works best with the Zotero desktop app open. Without it, the Connector can still save many pages straight to your online library if you’re signed in.",
      {warn:"The Connector reads whatever details the web page offers. Publisher and library pages are usually good; general web pages and some databases are often incomplete. Always glance at what was saved."}
    ]},
    {h:"Adding by DOI or ISBN, and fixing the details", body:[
      "If you know an identifier, you don’t need the web page at all. Click the **magic wand** button, **Add Item(s) by Identifier**, in Zotero’s toolbar (or choose **File → Add by Identifier…**), paste a DOI, [[isbn|ISBN]], PubMed ID or arXiv ID, and press [[kbd:Enter]]. Zotero looks the details up and creates the item.",
      "Then check the item’s details in the right-hand pane against the source itself:",
      {list:[
        "**Item type**: a journal article saved as a web page will cite wrongly in every style.",
        "**Authors**: each person as last name + first name. An organisation should be a single-field name (click the small button beside the name to switch to one field); otherwise “World Health Organization” becomes “Organization, W. H.”.",
        "**Title case**: store titles in **sentence case** (capitalise the first word, the first word after a colon, and proper nouns).",
        "**Date, volume, issue, pages, DOI**: present and correct."
      ]},
      "Why sentence case? Styles like MLA and Chicago can turn a sentence-case title into title case automatically, but APA styles can’t reliably do the reverse, so a title stored as “Shade Trees And Classroom Temperatures” comes out exactly like that in APA. Zotero can help: right-click the title field and choose **Sentence case**, then fix any proper nouns it lowercased.",
      {ex:"Stored:  Shade trees and classroom temperatures: Evidence from twelve schools\nAPA:     Shade trees and classroom temperatures: Evidence from twelve schools.\nMLA:     “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.”", label:"One stored title, two styles", mono:true}
    ]},
    {h:"Collections, tags and notes", body:[
      "**Collections** are like playlists: create one per project or chapter with **File → New Collection…** (or right-click **My Library**). An item can sit in several collections at once; removing it from a collection doesn’t delete it from your library.",
      "**Tags** are labels that cut across collections (“methods”, “to read”, “Kenya”). **Notes** can be attached to an item, and the built-in PDF reader lets you highlight and annotate, then turn annotations into notes.",
      "Zotero also spots likely **duplicates** (look for **Duplicate Items** in the left pane) so you can merge them before they appear twice in a bibliography."
    ]},
    {h:"Citing in your document", body:[
      "The [[zotero|Zotero]] word processor plugins insert live citations that Zotero keeps track of. They’re installed with the desktop app for **Word** (the desktop app on Windows and Mac) and **LibreOffice Writer**. If one is missing, open Zotero’s **Settings → Cite → Word Processors** and reinstall it. For **Google Docs**, citing comes from the Zotero Connector in your browser, with the Zotero desktop app open.",
      {table:[["App","Where Zotero appears"],["Word","A **Zotero** tab on the ribbon"],["LibreOffice Writer","A **Zotero** toolbar"],["Google Docs","A **Zotero** menu in the menu bar"]]},
      "The commands are the same everywhere: **Add/Edit Citation**, **Add/Edit Bibliography**, **Document Preferences** (choose the style, such as “APA Style 7th edition”, “MLA Handbook 9th edition (in-text citations)” or “Chicago Manual of Style 18th edition (notes and bibliography)”), **Refresh**, and **Unlink Citations**. (LibreOffice’s toolbar calls it **Set Document Preferences**, and Google Docs uses lower case, such as **Add/edit citation…**.)",
      {ol:[
        "Click **Add/Edit Citation**. The first time, choose a style in Document Preferences.",
        "Type an author or a word from the title, pick the item, and add a page number if you’re quoting. Press [[kbd:Enter]].",
        "Where the list should go, click **Add/Edit Bibliography**. It updates as you add citations.",
        "To change style, open **Document Preferences** and pick another. Everything reformats."
      ]},
      {warn:"Don’t type over Zotero’s citations to fix them: hand edits break the link and may be overwritten on Refresh. Fix the item in your library instead. Use **Unlink Citations** only on a final copy you’re sending, and keep the linked version."},
      "Apple Pages has no Zotero plugin, and phones aren’t meant for plugin citing. In those cases, select items in Zotero and use **Edit → Copy Bibliography**, or right-click and choose **Create Bibliography from Items…**, then paste. These pasted citations won’t update by themselves."
    ]},
    {h:"Check what the software produced", body:[
      "A [[citation-generator|citation generator]] (a reference manager, a database’s “Cite” button or a website) formats the details it was given, in whatever version of the style it was programmed with. The MLA’s own advice is to treat generated citations as starting points, not final products. The common problems:",
      {list:[
        "Titles in the wrong case, or in ALL CAPS.",
        "Organisations split into fake personal names.",
        "Wrong item type (an article saved as a web page, a report as a book).",
        "Missing DOI, issue or page range; a database URL instead of a DOI.",
        "An outdated edition (for example “doi:” from MLA 8th or a publisher city in APA 7th).",
        "Repeated names, such as a website name that duplicates the author."
      ]},
      "Check every entry against the source and against the patterns in Lessons 2 and 3. Fix the item in your library, then refresh, so the fix sticks everywhere.",
      {lab:"cl-generated", t:"Practise: fix what a citation generator got wrong"},
      {key:"Software saves hours of typing. You still own the accuracy."}
    ]}
   ],
   try:[
    {id:"t4u4-l5-x1", type:"match", q:"Match each Zotero part or feature to what it does.", pairs:[
      ["Zotero Connector","Saves a source from the web page you’re on","It’s the browser extension that recognises articles, books and pages."],
      ["Add Item(s) by Identifier (magic wand)","Creates an item from a DOI, ISBN, PMID or arXiv ID","Paste the identifier and Zotero looks up the details."],
      ["Collection","Groups items for a project, like a playlist","An item can be in several collections at once."],
      ["Document Preferences","Chooses the citation style for a document","Changing it reformats every citation and the bibliography."],
      ["Unlink Citations","Turns live citations into plain text","Use it only on a final copy; keep a linked version."]
    ]},
    {id:"t4u4-l5-x2", type:"mcq", q:"Amara’s APA bibliography from Zotero shows “Shade Trees And Classroom Temperatures”. What’s the best fix?", options:[
      {t:"Change the title in her Zotero library to sentence case, then refresh", ok:true, why:"APA styles print titles as stored, so fix the source data once and every document improves."},
      {t:"Edit the citation text directly in the document", why:"Hand edits break Zotero’s link and can be overwritten on refresh. Fix the library item instead."},
      {t:"Switch to MLA, because Zotero can’t do APA", why:"Zotero includes APA 7th; the problem is the stored title, not the style."},
      {t:"Leave it: capitalisation isn’t part of APA style", why:"It is: APA uses sentence case for article titles."}
    ]},
    {id:"t4u4-l5-x3", type:"spot", q:"A reference manager produced this APA 7th reference for a WHO report. Tap the parts a careful writer must fix.", ask:"needs fixing", mono:true, parts:[
      {t:"Organization, W. H.", flag:true, why:"The organisation was saved as a person’s name. Store it as one field: “World Health Organization.”"},
      " ",
      {t:"(2025).", flag:false, why:"Fine: year in brackets."},
      " ",
      {t:"*GLOBAL REPORT ON WATER SAFETY*.", flag:true, why:"ALL CAPS from the database. APA needs sentence case: *Global report on water safety*."},
      " ",
      {t:"World Health Organization.", flag:true, why:"When the author and publisher are the same organisation, APA leaves the publisher out. (Here the author was also wrong, which hid the duplication.)"},
      " ",
      {t:"https://example.org/report", flag:false, why:"Fine: a URL with no full stop after it."}
    ]},
    {id:"t4u4-l5-x4", type:"order", q:"Put the steps for citing with Zotero in a word processor in order.", items:[
      {t:"Save the sources to your Zotero library and check their details", why:"Good citations start with good data in the library."},
      {t:"In the document, click Add/Edit Citation (the first time, pick a style when Zotero asks)", why:"This starts the citation where your cursor is; the first time in a document, Zotero opens Document Preferences so you can choose the style."},
      {t:"Search for the item, add a page number if needed, press Enter", why:"The citation appears in the chosen style."},
      {t:"Click Add/Edit Bibliography where the list should go", why:"The bibliography lists every cited item and updates as you add more."},
      {t:"Check every citation and entry against the style and the source", why:"Software formats what it has; you check it."}
    ]},
    {id:"t4u4-l5-x5", type:"mcq", q:"Oluwaseun has a school-managed Chromebook that can’t run Linux. How can he still use Zotero?", options:[
      {t:"Install the Zotero Connector and use the online library at zotero.org", ok:true, why:"The Connector can save to your online library when you’re signed in, and the web library works in the browser."},
      {t:"He can’t use Zotero at all on a Chromebook", why:"There’s the Linux version where Linux is allowed, and the Connector plus web library where it isn’t."},
      {t:"Install the Windows version from zotero.org", why:"Chromebooks can’t run Windows programs; the desktop route on ChromeOS is the Linux version."},
      {t:"Use Pages, which has a built-in Zotero plugin", why:"Pages isn’t available on ChromeOS and has no Zotero plugin."}
    ]},
    {id:"t4u4-l5-x6", type:"mcq", q:"Mei’s Zotero sync says her file storage is full. What does that mean?", options:[
      {t:"Her PDFs and other attached files stop uploading, but item details and notes keep syncing", ok:true, why:"The free 300 MB is for attached files. Other library data continues to sync."},
      {t:"Her whole library will be deleted", why:"Nothing is deleted. Only new file uploads stop until she frees space or adds storage."},
      {t:"She can no longer cite in Word", why:"Citing works from the desktop library on her computer, whatever the sync storage says."},
      {t:"She must pay to keep using Zotero", why:"Zotero is free. Extra storage is optional, and she can also use her own WebDAV storage."}
    ]}
   ],
   apply:{intro:"Set up Zotero and use it on the sources you’ve been working with. Everything here is free and works without a university login (a login just gives you access to more full texts to save).", tasks:[
     {t:"Install Zotero and the Connector", how:{
       win:["Go to **zotero.org/download** and download **Zotero for Windows**. Run the installer.","On the same page, install the **Zotero Connector** for your browser (Chrome, Edge or Firefox).","Open Zotero. The Word and LibreOffice plugins install automatically; if Word has no Zotero tab, open **Edit → Settings → Cite → Word Processors** and reinstall it.","Optional: create a free account at zotero.org and sign in under **Edit → Settings → Account** (called **Sync** in Zotero 9 and earlier)."],
       mac:["Go to **zotero.org/download**, download **Zotero for Mac**, open the .dmg and drag Zotero to **Applications**.","Install the **Zotero Connector** for your browser. For Safari, the Connector is included with Zotero: turn it on in **Safari → Settings → Extensions**.","Open Zotero. If Word has no Zotero tab, open **Zotero → Settings → Cite → Word Processors** and reinstall it.","Optional: create a free account and sign in under **Zotero → Settings → Account** (called **Sync** in Zotero 9 and earlier)."],
       chromeos:["If your Chromebook allows Linux: turn it on in **Settings → About ChromeOS → Developers → Linux development environment**, then download the Linux version from **zotero.org/download** and follow Zotero’s Linux installation instructions.","Install the **Zotero Connector** from the Chrome Web Store (link on zotero.org/download).","If Linux isn’t available: create a free zotero.org account, sign in to the Connector, and use the web library at zotero.org."],
       phone:["iPhone or iPad: install **Zotero** from the App Store and sign in with a free zotero.org account to see your synced library.","In Safari on iPhone, open an article page, tap **Share** and choose the Zotero option (if you don’t see it, scroll the row of apps and tap **More**).","Android: check zotero.org/download or Google Play for Zotero’s official Android app; or open your library at zotero.org in your phone’s browser."]
     }},
     {t:"Add three items three ways, in a new collection", how:["Create a collection for your topic: **File → New Collection…**","Save your Lesson 1 article from its web page with the Connector.","Add a book by ISBN (from the back cover or a catalogue record) with the magic wand **Add Item(s) by Identifier**; add a second article by DOI the same way.","Open each item and check the item type, authors (organisations in one field), sentence-case titles, date, volume, issue, pages and DOI. Fix what’s wrong."], write:"What Zotero got right, and what I had to fix"},
     {t:"Cite and build a bibliography, then switch style", app:{
       ms:["Open Word (the desktop app) and a new document; make sure Zotero is open.","On the **Zotero** tab, click **Add/Edit Citation**. Choose **APA Style 7th edition** in Document Preferences.","Search for an item, add a page number, press [[kbd:Enter]]. Add two more citations.","Click **Add/Edit Bibliography** at the end.","Click **Document Preferences**, choose **Chicago Manual of Style 18th edition (notes and bibliography)**, and watch the citations become footnotes."],
       google:["Make sure Zotero desktop is open and the Connector is installed, then open a Google Doc (in Editing mode, not Suggesting).","Open the **Zotero** menu and choose **Add/edit citation…**. Allow Zotero access to your Google account when asked, then choose **APA Style 7th edition**.","Search for an item, add a page number, press [[kbd:Enter]]. Add two more citations.","Choose **Zotero → Add/edit bibliography**.","Choose **Zotero → Document preferences…**, pick **MLA Handbook 9th edition (in-text citations)**, and watch everything reformat."],
       libre:["Open LibreOffice Writer and a new document; make sure Zotero is open. Find the **Zotero** toolbar (if hidden, **View → Toolbars → Zotero**).","Click **Add/Edit Citation** and choose **APA Style 7th edition** in Document Preferences.","Search for an item, add a page number, press [[kbd:Enter]]. Add two more citations.","Click **Add/Edit Bibliography**.","Click **Set Document Preferences**, choose **Chicago Manual of Style 18th edition (author-date)**, and watch everything reformat."]
     }, appNote:"Pages has no Zotero plugin. Instead, select your items in Zotero, right-click and choose **Create Bibliography from Items…** (or use **Edit → Copy Bibliography**), then paste into Pages. The pasted text won’t update by itself."},
     {t:"Check the generated citations", how:["Compare each generated citation and entry with the patterns in Lessons 2 and 3.","Note every difference, then decide: is the library data wrong, or is it a style detail?","Fix the library item and refresh."], write:"Problems I found and how I fixed them"}
   ], proof:"A Zotero collection with three checked items, and a document with three live citations and a bibliography that you have switched between two styles and checked."},
   read:[{book:"zotero", where:"“Adding Items to Zotero”, then the word processor plugin and Google Docs pages", note:"Zotero’s own documentation is the most current guide to menus that change between versions."},{book:"owg", where:"Chapter 13, Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"}]
  }
  ],
  checkpoint:["t4u4-q02","t4u4-q05","t4u4-q11","t4u4-q14","t4u4-q17","t4u4-q21","t4u4-q24","t4u4-q27","t4u4-q30","t4u4-q34","t4u4-q38","t4u4-q42"],
  codex:[
   {id:"why-cite", title:"Why we cite", aka:["citing sources","attribution","referencing"], tags:["research","citation"],
    summary:"Citations credit other people’s work and let readers find, check and follow up every source you used.",
    levels:{
     starter:[
      "A [[citation]] is a short note in your writing that says where an idea, quotation, number or image came from, plus a full entry at the end so readers can find it.",
      "It’s like saying “I got this recipe from Hana’s grandmother”: it gives credit, and anyone who wants the original knows where to look.",
      "Citations do four jobs. They **credit** the people whose work you used. They let readers **check** that a source says what you claim. They give readers a way to **follow up** and learn more. And they make **your own contribution** visible, because everything that isn’t marked as borrowed is yours.",
      "You cite quotations, paraphrases, summaries, data, images and other people’s ideas. Facts everyone in your audience already knows (common knowledge) don’t need a citation.",
      "Citing is not a sign that your work is unoriginal. Even the most original research papers cite dozens of sources, because new ideas grow out of old ones. Readers trust writing more when they can see what it rests on."
     ],
     builder:[
      "Every citation system has two halves: an [[in-text-citation|in-text citation]] (a pointer such as “(Haddad, 2021, p. 50)” or a footnote number) and a full entry in a [[reference-list|reference list]], works-cited list or [[bibliography-term|bibliography]]. The pointer contains just enough to find the matching entry.",
      "Researchers see citation as joining a conversation: a new paper builds on, tests or argues with earlier ones, and citations show exactly which. That’s why well-cited writing is more persuasive, not less original. Readers can see what is established and what is new.",
      "Citations also protect you. If a source turns out to be wrong, your citation shows where the error came from. If your work is questioned, your trail shows what you read.",
      "Getting the details of a style right takes practice, and everyone checks a guide. The non-negotiable part is that every borrowed idea is marked and every source is findable.",
      "A practical habit makes all of this easier: record a source’s details the moment you use it. Note the author, year, title, where it was published, the page you’re drawing on, and the DOI or address. A reference manager such as {{zotero-basics|Zotero}} can do much of the recording for you. If you only notice later that a sentence in your notes came from a source, finding it again can take longer than writing the paragraph did.",
      "What to cite: direct quotations, paraphrases, summaries, statistics and data, images, charts, tables and code, and distinctive ideas or arguments, even when you reach the same conclusion yourself after reading them."
     ],
     pro:[
      "Citation practices carry professional weight. Citation counts feed into metrics used (and criticised) in hiring and funding, which is one reason accurate attribution matters to authors. The ACRL Framework describes this as “Scholarship as Conversation” and “Information Has Value”: credit is part of how knowledge is valued.",
      "Accuracy matters as much as presence. Studies of citation errors find that references are sometimes mis-transcribed, cite the wrong page, or don’t support the claim they’re attached to; readers who follow them are misled. Good practice is to cite what you read (or say “as cited in” when you couldn’t), and to check that the source really supports the specific claim.",
      "Citation is distinct from permission. Citing a figure doesn’t give you the right to reproduce it in a publication; that’s a copyright question (see {{copyright-basics}}). And citing an AI tool doesn’t make it a reliable source: generative AI can produce references that don’t exist, so only cite works you have found and read.",
      "Different fields cite at different densities. A history article may carry hundreds of footnotes that comment on sources as well as naming them; a short medical research letter may have a dozen numbered references. Neither is “better”: each follows its field’s conventions and readers’ needs. When moving into a new field, read a few recent papers in your target journal and notice how and how often they cite.",
      "A final professional habit: cite the version you used. If you read a preprint, an author manuscript in a repository, or a translation, cite that, or check that the published version says the same before citing it."
     ]},
    related:["citation-styles","plagiarism","quote-paraphrase-summary"], read:[{book:"owg", where:"Chapter 10, Section 10.8 “Spotlight on … Citation”"}],
    sources:[{t:"APA Style: Author–date citation system", url:"https://apastyle.apa.org/style-grammar-guidelines/citations/basic-principles/author-date"},{t:"MLA Style Center: In-Text Citations: An Overview", url:"https://style.mla.org/in-text-citations-overview/"}], checked:"2026-11"},

   {id:"citation-styles", title:"Citation styles", aka:["referencing styles","APA, MLA, Chicago","Harvard","IEEE","Vancouver"], tags:["citation","styles"],
    summary:"A citation style is a set of rules for formatting citations; most belong to author-date, author-page, notes or numbered families.",
    levels:{
     starter:[
      "A [[citation-style|citation style]] is an agreed set of rules for how citations look: the order of details, punctuation, italics and capitals. Using one style consistently makes sources easy to find.",
      "Most styles fall into a few families. **Author-date** styles put the surname and year in brackets: APA, Chicago author-date, the Harvard family. **Author-page** puts surname and page: MLA. **Notes** styles use footnotes: Chicago notes-bibliography. **Numbered** styles use [1] or a superscript number: IEEE, Vancouver.",
      "The style you use is the one your instructor, department or publisher asks for. If nobody says, ask.",
      "Every style answers the same four questions about a source: who made it, when, what it’s called and where to find it. What changes from style to style is the order and the punctuation. So once you have understood one style properly, learning another is mostly a matter of noticing differences."
     ],
     builder:[
      "The current editions of the three big general styles are **APA 7th** (2020), **MLA 9th** (2021) and **Chicago 18th** (2024). Fields lean towards different families: psychology, education, nursing and many social sciences use APA; literature and languages use MLA; history and the arts often use Chicago notes; engineering often uses IEEE; medicine often uses Vancouver-style numbering. These are tendencies, and journals often have their own “house” versions.",
      "Every style records the same things: who, when, what and where. What changes is order and format. In APA the year comes right after the author; in MLA it comes near the end; in Chicago notes it’s inside brackets in the note.",
      "**Harvard** is a family of author-date styles with no single official version; universities publish their own, and *Cite Them Right* is one widely used version. When someone asks for Harvard, ask which guide.",
      "A useful way to learn a new style quickly is to take two sources you already know well (a journal article and a book) and write them in the new style, then compare with the old. The differences tell you most of what you need: where the year goes, how names appear, whether article titles are in quotation marks, and how the list at the end is named and ordered.",
      "Numbered styles work differently from the rest: sources are numbered in the order they’re first cited (Vancouver, IEEE), and the list at the end follows that order rather than the alphabet. Reusing a source means reusing its number."
     ],
     pro:[
      "Styles are maintained by organisations: the American Psychological Association (*Publication Manual*), the Modern Language Association (*MLA Handbook*), and the University of Chicago Press (*The Chicago Manual of Style*). Their official sites (apastyle.apa.org, style.mla.org, chicagomanualofstyle.org) publish examples and answer questions; library guides and the Purdue OWL are useful secondary sources, but check which edition they follow.",
      "Reference managers implement styles in **CSL** (Citation Style Language), an open format with thousands of styles in a shared repository. A CSL file is someone’s careful reading of a manual, not the manual itself, and software can only format the data it has, so generated citations still need checking.",
      "Editions change real details. APA 7th dropped publisher locations and moved et al. to the first citation for three or more authors; MLA 9th writes DOIs as https://doi.org/ links; Chicago 18th uses et al. in notes from three authors and makes the place of publication optional. Old guides online can therefore be confidently wrong.",
      "Journals frequently modify a general style (“APA with these changes”) or have entirely their own house style, set out in their instructions for authors. Many publishers ask authors to submit in any consistent style and then restyle accepted papers themselves, but students rarely have that option, so follow the brief exactly.",
      "When guides disagree, rank sources: the official manual and its website first; then the official blog or FAQ; then university library guides and the Purdue OWL. Where even those differ (for example on details the manual leaves open), choose one reasonable option and apply it consistently, and ask your instructor if it matters to them."
     ]},
    related:["apa-style","mla-style","chicago-style","why-cite"],
    sources:[{t:"APA Style and MLA Style References Comparison Guide (APA)", url:"https://apastyle.apa.org/instructional-aids/mla-reference-comparison.pdf"},{t:"Chicago Manual of Style: Citation Quick Guide", url:"https://www.chicagomanualofstyle.org/tools_citationguide.html"}], checked:"2026-11"},

   {id:"apa-style", title:"APA Style (7th edition)", aka:["APA 7","APA referencing","American Psychological Association style"], tags:["citation","styles","APA"],
    summary:"APA 7th is an author-date style: (Surname, year) in the text and an alphabetical References list of Author. (Date). Title. Source.",
    levels:{
     starter:[
      "APA Style is the citation style of the American Psychological Association, used across psychology, education, nursing, business and many social sciences. The current edition is the 7th (2020).",
      "In your writing, you cite with the surname and year: `(Haddad, 2021)` or `Haddad (2021)`. If you quote, add the page: `(Haddad, 2021, p. 50)`. For three or more authors, write the first surname and “et al.”: `(Okafor et al., 2023)`.",
      "At the end, a list called **References** gives the full details, in the order Author. (Date). Title. Source. Titles of works are in sentence case, and the standalone work (a book, or the journal name and volume) is in italics.",
      "APA’s list is in alphabetical order by the first author’s surname, double-spaced, with a hanging indent so each surname stands out. The heading **References** is bold and centred."
     ],
     builder:[
      {ex:"Okafor, A. N., Ramírez, L., & Watanabe, K. (2023). Shade trees and classroom temperatures: Evidence from twelve schools. *Journal of Schoolyard Ecology, 14*(2), 45–62. https://doi.org/10.5555/jse.142\n\nHaddad, S. (2021). *Repairing things: A practical history of mending*. Riverbend Press.\n\nMensah, A. K. (2022). Radio, rumour and public health. In T. Ortega & M. Lin (Eds.), *Communicating health in a crisis* (pp. 33–51). Northgate University Press. https://doi.org/10.5555/chc.3\n\nCoastal Water Trust. (2024, March 5). *Well water testing at home*. https://example.org/wells", label:"Core patterns (invented sources; *asterisks* = italics)", mono:true},
      "Authors: surname and initials, `&` before the last, up to 20 names. Dates in brackets; `n.d.` when there’s none. Article and book titles in sentence case; journal names in title case and italics with the volume; the issue in plain brackets. DOIs as `https://doi.org/…` links with no full stop after. No publisher location, and no publisher when it’s the same as the author.",
      "In text: `&` inside brackets, `and` in a sentence; et al. for three or more authors from the first citation; a page (p./pp.) or paragraph (para.) for every direct quotation.",
      "**Reference list setup.** Order entries alphabetically by the first author’s surname, letter by letter. Two works by the same author are ordered by year, oldest first. Each entry has a hanging indent of 0.5 inch (1.27 cm).",
      "**In-text special cases.** Several works in one bracket go in alphabetical order separated by semicolons: (Haddad, 2021; Mensah, 2022). A work with no author is cited by its title, in title case: italic if the title is italic in the reference, in quotation marks if not. Every in-text citation must match a reference-list entry, with the same spelling and year, and every entry (except personal communications, which appear only in the text) must be cited somewhere."
     ],
     pro:[
      "**Missing information.** No author: the title moves to the author position, and the in-text citation uses the title in title case, italic or in quotation marks to match the reference. No date: `n.d.`. Use “Anonymous” only if the work is signed that way. Group authors with well-known abbreviations: `(World Health Organization [WHO], 2025)` first, then `(WHO, 2025)`.",
      "**21 or more authors**: the first 19, an ellipsis, then the final author. **Article numbers** replace page ranges: `Article 104`. **Database articles** without DOIs end after the page range (no database URL), except for databases of limited circulation.",
      "**Retrieval dates** only for content designed to change and not archived: `Retrieved October 2, 2026, from https://…`.",
      "**Secondary sources**: `(Ferreira, 1998, as cited in Mensah, 2022)`, with only Mensah in the references; use sparingly.",
      "**Generative AI** (APA guidance updated 2025–2026): the company is the author. Tool: `OpenAI. (2025). *ChatGPT* [Large language model]. https://chatgpt.com`. Shared chat: `OpenAI. (2026, February 10). *Title of chat* [Generative AI chat]. ChatGPT. URL`. Version numbers aren’t required by default; prompts don’t go in the reference. Disclosure rules come from the instructor or publisher.",
      "**Disambiguation.** If two works shorten to the same “et al.” citation, add as many names as needed to tell them apart. Two works by the same author in the same year get letters: (Haddad, 2021a, 2021b), ordered by title in the reference list.",
      "**Edited books and editions.** A whole edited book lists the editors first with (Ed.) or (Eds.). An edition other than the first goes in brackets after the title: *Title* (2nd ed.).",
      "APA’s style site keeps its examples current and has added new guidance since the 7th edition was printed (for example on AI), so check apastyle.apa.org for anything unusual."
     ]},
    related:["citation-styles","mla-style","chicago-style","doi-identifiers"], read:[{book:"owg", where:"Handbook, “APA Documentation and Format”"}],
    sources:[{t:"APA Style: Journal article references", url:"https://apastyle.apa.org/style-grammar-guidelines/references/examples/journal-article-references"},{t:"APA Style: Missing reference information", url:"https://apastyle.apa.org/style-grammar-guidelines/references/missing-information"},{t:"APA Style: AI references", url:"https://apastyle.apa.org/style-grammar-guidelines/references/examples/ai-references"}], checked:"2026-11"},

   {id:"mla-style", title:"MLA Style (9th edition)", aka:["MLA 9","MLA Handbook","works cited"], tags:["citation","styles","MLA"],
    summary:"MLA 9th is an author-page style: (Surname page) in the text and a Works Cited list built from core elements and containers.",
    levels:{
     starter:[
      "MLA style comes from the Modern Language Association and is used mostly in literature, languages and the humanities. The current edition is the *MLA Handbook*, 9th edition (2021).",
      "In your writing, cite with the author’s surname and the page, with no comma and no year: `(Haddad 50)`. Three or more authors: `(Okafor et al. 50)`.",
      "At the end, a **Works Cited** list gives full details. Names are written with full first names, titles in title case, parts (articles, chapters, web pages) in quotation marks and whole works (books, journals, websites) in italics.",
      "MLA calls its list **Works Cited**. It’s in alphabetical order, double-spaced, with a hanging indent. Every work you cite in your text appears there, and every entry in the list is cited somewhere in your text."
     ],
     builder:[
      "MLA builds every entry from **core elements**: Author. Title of source. Title of container, Other contributors, Version, Number, Publisher, Publication date, Location. A [[mla-container|container]] is the larger work holding your source (a journal, an edited book, a website); there can be a second one, such as a database.",
      {ex:"Okafor, Adaeze N., et al. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology*, vol. 14, no. 2, 2023, pp. 45–62, https://doi.org/10.5555/jse.142.\n\nHaddad, Samir. *Repairing Things: A Practical History of Mending*. Riverbend Press, 2021.\n\nMensah, Ama K. “Radio, Rumour and Public Health.” *Communicating Health in a Crisis*, edited by Tomás Ortega and Mei Lin, Northgate University Press, 2022, pp. 33–51, https://doi.org/10.5555/chc.3.\n\n“Well Water Testing at Home.” *Coastal Water Trust*, 5 Mar. 2024, example.org/wells.", label:"Core patterns (invented sources; *asterisks* = italics)", mono:true},
      "Two authors: `Okafor, Adaeze N., and Lucía Ramírez.` Three or more: first author, then `et al.`. Months longer than four letters are abbreviated (Jan., Feb., Mar., Apr., Aug., Sept., Oct., Nov., Dec.).",
      "Because MLA builds entries from elements rather than fixed patterns, you can cite almost anything by asking which elements it has. A podcast episode, a museum label or a social media post all fit the same template: who made it, what it’s called, what holds it, and where to find it.",
      "MLA’s in-text citations use whatever comes first in the works-cited entry. Usually that’s the author’s surname, but for a work that begins with its title, use the title (shortened to its first noun phrase), keeping its quotation marks or italics: (“Well Water Testing”). In prose you can name the author in your sentence and put only the page in brackets: Haddad argues that mending is attentive work (50)."
     ],
     pro:[
      "**Location**: MLA prefers a DOI, then a permalink, then a URL. DOIs are written with `https://doi.org/`; for other URLs MLA recommends leaving out `http://` or `https://`. Entries end with a full stop, even after a DOI or URL. A page range may be given as well as the DOI for paginated works.",
      "**Organisations**: when an organisation is both author and publisher, skip the author and begin with the title; the in-text citation then uses the (shortened) title: `(“Well Water Testing”)`. Don’t use “Anonymous”; works with no named author also begin with the title.",
      "**In prose**, MLA prefers spelling out (“Okafor and others”) and keeps et al. for parentheses and the list. **Indirect sources**: `(qtd. in Mensah 40)`, with only Mensah in Works Cited. Sources without page numbers are cited by author alone; use section or paragraph numbers only if the source numbers them.",
      "The MLA’s own advice on citation generators: their quality varies and they don’t always say which edition they follow, so treat their output as a starting point. Many older guides still show MLA 8th’s `doi:` prefix.",
      "When you cite two works by the same author, add a short title to each in-text citation: (Haddad, *Repairing Things* 50). In the list, MLA replaces the repeated name with three hyphens (---) in later entries.",
      "MLA 9th is the edition current in 2026. Its biggest visible differences from the 8th edition are small (for example writing DOIs as https://doi.org/ links) but many free guides, including some textbooks, still follow the 8th, so check the edition before copying a model."
     ]},
    related:["citation-styles","apa-style","chicago-style"], read:[{book:"owg", where:"Handbook, “MLA Documentation and Format” (follows MLA 8th; DOIs differ)"}],
    sources:[{t:"MLA Style Center: A Closer Look at MLA Style", url:"https://style.mla.org/closer-look-at-mla-style/"},{t:"MLA Style Center: page range and DOI", url:"https://style.mla.org/page-range-and-doi/"},{t:"MLA Style Center: How do I cite a source that has no author?", url:"https://style.mla.org/source-with-no-author/"}], checked:"2026-11"},

   {id:"chicago-style", title:"Chicago style (18th edition)", aka:["Chicago Manual of Style","CMOS","Turabian","notes and bibliography","author-date"], tags:["citation","styles","Chicago"],
    summary:"Chicago 18th offers notes-bibliography (footnotes + bibliography) and author-date ((Surname year, page) + reference list).",
    levels:{
     starter:[
      "*The Chicago Manual of Style*, from the University of Chicago Press, is a big guide to writing and publishing. Its 18th edition came out in 2024. It offers two citation systems; you choose one.",
      "**[[notes-bibliography|Notes and bibliography]]** puts a small number in your sentence that leads to a footnote (or endnote) with the source details, plus a bibliography at the end. It’s common in history, the arts and humanities.",
      "**[[author-date|Author-date]]** puts the surname, year and page in brackets, like `(Haddad 2021, 50)`, with a reference list at the end. It’s common in the sciences and social sciences.",
      "*Turabian* is a student version of Chicago; check which edition of it a guide follows.",
      "In the notes system, the small number in your sentence usually goes after punctuation, at the end of the clause or sentence it supports. The first note for a source gives full details; later notes for the same source use a shorter form."
     ],
     builder:[
      {ex:"1. Samir Haddad, *Repairing Things: A Practical History of Mending* (Riverbend Press, 2021), 50.\n2. Haddad, *Repairing Things*, 52.\n\nHaddad, Samir. *Repairing Things: A Practical History of Mending*. Riverbend Press, 2021.\n\n1. Adaeze N. Okafor et al., “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools,” *Journal of Schoolyard Ecology* 14, no. 2 (2023): 50, https://doi.org/10.5555/jse.142.\n\nOkafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology* 14, no. 2 (2023): 45–62. https://doi.org/10.5555/jse.142.", label:"Notes-bibliography (invented sources; *asterisks* = italics)", mono:true},
      "Full notes: names in normal order, commas between parts, publication facts in brackets, the specific page. Shortened notes for later citations: surname, short title (up to about four words), page. Bibliography: first author reversed, full stops between parts, alphabetical. Chicago now prefers shortened notes to “ibid.”, though ibid. is still allowed.",
      "In author-date, the year moves to right after the author in the reference list, and the in-text citation has no comma between name and year: (Haddad 2021, 50). Journal volume and issue are written as 14 (2): 45–62.",
      "Chicago is widely used by book publishers as a house style beyond citations: its manual covers spelling, numbers, punctuation and editing. *Turabian* (*A Manual for Writers*) adapts Chicago for students; check whether a Turabian guide follows the same Chicago edition you need, because older editions of it follow the 17th edition."
     ],
     pro:[
      "**18th-edition changes worth knowing**: in notes and author-date citations, use the first author plus et al. for **three or more** authors (the 17th used four). Bibliographies and reference lists list **up to six** authors; for seven or more, the first three followed by et al. The **place of publication** for books is no longer required, and a **chapter’s page range** in a bibliography entry is optional (both older forms are still acceptable).",
      {ex:"(Okafor et al. 2023, 50)\n\nOkafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe. 2023. “Shade Trees and Classroom Temperatures: Evidence from Twelve Schools.” *Journal of Schoolyard Ecology* 14 (2): 45–62. https://doi.org/10.5555/jse.142.\n\nMensah, Ama K. 2022. “Radio, Rumour and Public Health.” In *Communicating Health in a Crisis*, edited by Tomás Ortega and Mei Lin. Northgate University Press. https://doi.org/10.5555/chc.3.", label:"Author-date", mono:true},
      "DOIs are written as `https://doi.org/` links. Access dates are needed only when a source has no publication or revision date. The full manual is a subscription product; the free Citation Quick Guide on chicagomanualofstyle.org covers the common cases.",
      "Notes can also carry commentary (“For a different view, see…”), which is one reason historians like them. If a work has no bibliography, the full first note must carry all the details. When there is a full bibliography, Chicago 18th allows shortened notes even for the first citation of a source, and it prefers shortened notes to “ibid.” (CMOS 18, 13.37, “Shortened citations versus ‘ibid.’”).",
      "The full manual is behind a subscription, so this app’s Chicago patterns were cross-checked against the free Citation Quick Guide, university library guides to the 18th edition, and the Citation Style Language styles for the 18th edition (the ones Zotero uses). If your instructor follows an older edition, expect place of publication and chapter page ranges to be required (CMOS 18 discusses place of publication in 14.30)."
     ]},
    related:["citation-styles","apa-style","mla-style"],
    sources:[{t:"Chicago Manual of Style: Citation Quick Guide", url:"https://www.chicagomanualofstyle.org/tools_citationguide.html"},{t:"Citation Style Language styles repository (Chicago 18th styles)", url:"https://github.com/citation-style-language/styles"}], checked:"2026-11"},

   {id:"doi-identifiers", title:"DOIs and other identifiers", aka:["DOI","digital object identifier","ISBN","persistent identifier"], tags:["citation","identifiers"],
    summary:"A DOI is a permanent identifier for a scholarly work; current styles write it as https://doi.org/ followed by the DOI.",
    levels:{
     starter:[
      "A [[doi|DOI]] (Digital Object Identifier) is a permanent ID for an article, book, chapter or dataset. Web addresses break when sites change, but a DOI keeps pointing to the work.",
      "A DOI looks like `10.5555/jse.142`: it starts with `10.`, then a prefix, a slash and a suffix. To use it, put `https://doi.org/` in front, and it becomes a link that takes you to the work.",
      "APA 7th, MLA 9th and Chicago 18th all write DOIs as full links: `https://doi.org/10.5555/jse.142`. An [[isbn|ISBN]] is a different identifier, for books; it’s useful for finding a book, but styles don’t usually include it in a citation.",
      "You’ll usually find the DOI near the article’s title on the publisher’s page or on the first page of the PDF. If a source has a DOI, use it in your citation instead of a database or web address, because the DOI will keep working."
     ],
     builder:[
      "You’ll find a DOI near the title on an article’s web page, on the first page of the PDF, or in a database record. If a work has a DOI, cite the DOI rather than a database or web address.",
      "Older formats still appear in generators and guides: `doi:10.…` (MLA 8th and APA 6th), `DOI: 10.…`, and `http://dx.doi.org/…`. Convert them to `https://doi.org/…`. Copy carefully; one wrong character leads nowhere.",
      "Reference managers can create an item from a DOI or ISBN (in Zotero, the magic wand **Add Item(s) by Identifier**), which is faster and usually more accurate than typing details.",
      "A DOI doesn’t mean a work is good, peer reviewed or still valid: retracted articles keep their DOIs. Judge quality separately.",
      "Not everything has a DOI. Many web pages, older articles, news stories and books don’t. Then use a stable web address, and for printed books, no address at all. In APA, a journal article found in an academic database without a DOI ends after the page range; in MLA, a database’s name and a permalink can serve as a second container.",
      "To test a DOI, paste it after https://doi.org/ in your browser. If you get “DOI not found”, check for copying errors such as a missing character, an extra full stop, or a letter O typed for a zero."
     ],
     pro:[
      "DOIs are registered through registration agencies such as Crossref (most journal articles) and DataCite (datasets and research outputs). The prefix identifies the registrant; the suffix is chosen by them and can contain letters, numbers and punctuation. DOIs are case-insensitive, but copy them exactly.",
      "Practice sources in this app use the prefix `10.5555`, which Crossref uses in its own documentation for sample DOIs (for example `10.5555/12345678`). The invented DOIs here aren’t registered, so they won’t open a real work.",
      "Other identifiers you’ll meet: PMID (PubMed), arXiv IDs for preprints, ISSN for journals, and [[orcid-id|ORCID iDs]] for researchers (Unit 10). Styles vary on which to include; APA and MLA prefer the DOI when one exists, and ISBNs aren’t part of standard APA, MLA or Chicago entries.",
      "Some DOIs contain characters such as angle brackets or semicolons that look odd in a link; copy them exactly from the publisher.",
      "DOIs also identify datasets, software releases and figures. Citing data with its DOI gives data creators credit and helps others reuse it, an important part of open research practices (Unit 9: {{data-management-plan}}).",
      "ShortDOI and other shortening services exist, but styles ask for the full DOI so readers can see exactly what is cited."
     ]},
    related:["apa-style","mla-style","chicago-style","zotero-basics"],
    sources:[{t:"APA Style: What’s new in the 7th edition (DOIs as URLs)", url:"https://apastyle.apa.org/instructional-aids/whats-new-7e-guide.pdf"},{t:"MLA Style Center: page range and DOI", url:"https://style.mla.org/page-range-and-doi/"},{t:"Crossref REST API documentation (sample DOI 10.5555/12345678)", url:"https://github.com/crossref/rest-api-doc"}], checked:"2026-11"},

   {id:"quote-paraphrase-summary", title:"Quoting, paraphrasing and summarising", aka:["paraphrase","summary","direct quotation","signal phrase","patchwriting"], tags:["writing","citation","integrity"],
    summary:"Three ways to use a source (exact words, one passage restated, main ideas condensed); all three need a citation.",
    levels:{
     starter:[
      "A **quotation** uses the author’s exact words in quotation marks, with a page number. A **[[paraphrase]]** restates one passage in your own words and sentence structure. A **[[summary-writing|summary]]** condenses a longer piece into its main ideas.",
      "All three need a citation, because the ideas still belong to the author.",
      "Quote when the exact wording matters (a definition, a striking phrase, words you’re analysing). Paraphrase when you need a passage’s detail. Summarise when you need the gist. Most academic writing uses more paraphrase and summary than quotation.",
      "A signal phrase such as “Haddad argues…” or “According to Mensah…” introduces the source, shows readers where borrowed material begins, and lets you show your stance (argues, claims, shows, admits).",
      "Patchwriting, a “paraphrase” that keeps much of the original’s wording, is the most common honest mistake. Rebuilding the idea from memory avoids it."
     ],
     builder:[
      "**Quoting**: introduce it with a [[signal-phrase|signal phrase]] (“Haddad argues…”), copy it exactly, mark omissions with an ellipsis and changes with square brackets, then explain it. Long quotations become [[block-quotation|block quotations]]: 40 words or more in APA, more than four lines of prose in MLA.",
      "**Paraphrasing**: read until you understand, cover the source, write from memory, compare, fix any copied phrases, cite. Technical terms with no real alternative can stay.",
      "**[[patchwriting|Patchwriting]]** is the trap in between: keeping the original’s structure and many phrases while swapping synonyms. It’s common while learning, especially in an additional language, but unmarked borrowed phrasing is usually treated as plagiarism. Quote the phrase or rebuild the idea from understanding.",
      "**Summarising**: say what the whole piece is about and its main claim or finding, then the key reasons or evidence, leaving out examples and detail. A summary of a whole work needs a citation but usually no page number.",
      "**Choosing well.** Ask what your reader needs: the exact words (quote), the detail of one passage (paraphrase), or the overall point (summary). Use quotations sparingly so your own voice carries the argument, and always follow a quotation with your explanation of what it shows.",
      "**Accuracy.** Whatever you choose, keep the source’s meaning, including its uncertainty. Turning “may reduce” into “reduces” changes the claim."
     ],
     pro:[
      "Page numbers: APA requires a location for direct quotations and encourages one for paraphrases; MLA gives a page whenever the source has one; Chicago notes cite the specific page.",
      "Quotations must not change meaning. An ellipsis that removes a “not”, or a quotation stripped of context, misrepresents the author even if the words are exact.",
      "[[synthesis|Synthesis]] is the next step: rather than summarising sources one at a time, you group them by idea and show agreement, disagreement and gaps (Unit 5: {{synthesis-writing}}).",
      "AI paraphrasing tools don’t change who the ideas belong to; output still needs citing, often still patchwrites, and may be restricted by your course or publisher policy.",
      "Writers working in an additional language often rely on borrowed phrases while learning a field’s vocabulary, and patchwriting is a normal stage in that learning. Good teaching treats it as a skill gap, but formally it’s still unmarked borrowing, so the fix is practice: write from understanding, keep a list of useful general academic phrases (which are fine to reuse), and put distinctive phrases in quotation marks.",
      "Quoting translations: say whose translation you used, or mark your own (“my translation”) as your style requires."
     ]},
    related:["plagiarism","why-cite"], read:[{book:"owg", where:"Chapter 12, Section 12.6 “Editing Focus: Integrating Sources and Quotations”"}],
    sources:[{t:"APA Style: Quotations", url:"https://apastyle.apa.org/style-grammar-guidelines/citations/quotations"},{t:"APA Style: Direct quotation of material without page numbers", url:"https://apastyle.apa.org/style-grammar-guidelines/citations/quotations/no-page-numbers"}], checked:"2026-11"},

   {id:"plagiarism", title:"Plagiarism, self-plagiarism and common knowledge", aka:["academic integrity","text recycling","self-plagiarism","common knowledge"], tags:["integrity","citation"],
    summary:"Plagiarism is presenting others’ words, ideas or work as your own, deliberately or by accident; common knowledge needs no citation.",
    levels:{
     starter:[
      "[[plagiarism-term|Plagiarism]] means presenting someone else’s words, ideas, data or images as your own. It can be deliberate (copying an essay) or accidental (forgetting quotation marks in your notes). Most policies count both, though intent can affect the consequences.",
      "You avoid it by marking every quotation, citing every paraphrase and summary, and keeping careful notes about where things came from.",
      "[[common-knowledge|Common knowledge]] (facts your readers would already know, found in many general sources and not disputed) doesn’t need a citation. When in doubt, cite.",
      "Most plagiarism by students is accidental: notes copied without quotation marks, a source forgotten, a paraphrase too close to the original. Careful note-taking (marking exact words clearly and recording every source) prevents most of it.",
      "If you’re unsure whether something needs a citation, cite it, or ask."
     ],
     builder:[
      "Forms of plagiarism: copying without quotation marks; paraphrasing or summarising without citation; [[patchwriting]]; using data, images or code without credit; submitting work written by someone else (a friend, a paid service, or an AI tool where that isn’t allowed).",
      "**[[self-plagiarism|Self-plagiarism]]** (or text recycling) is reusing your own earlier work as if new. Courses usually require permission to reuse work submitted elsewhere; journals require you to cite and disclose your earlier publications. Practices differ, so ask.",
      "Common knowledge depends on audience and field: “Nairobi is the capital of Kenya” is common knowledge almost anywhere; a specific statistic or a recent finding never is.",
      "Similarity-checking software shows matching text; people decide what it means. Properly quoted and cited text will match, and that’s fine.",
      "Good habits that prevent accidental plagiarism:",
      "• In your notes, put copied text in quotation marks with the page, and keep your own thoughts visibly separate (for example, in a different colour or after “ME:”).\n• Save each source to a reference manager when you first use it.\n• Paraphrase from understanding, not from the page.\n• Check your draft against your notes before submitting.",
      "Institutions differ in how they handle cases, from teaching conversations for first, minor issues to formal procedures for deliberate cheating. Read your own policy so you know what applies."
     ],
     pro:[
      "Generative AI: policies vary by course, institution and publisher, and change often. APA’s style team summarises AI permission as “yes, for some AI tools, for some purposes, and no, for others”. Where use is allowed, policies typically require disclosure (what tool, for what), and APA asks for the tool to be cited. AI can’t be an author, because it can’t take responsibility for the work.",
      "AI tools can fabricate references or attach real ones to claims they don’t support ([[hallucinated-citation|hallucinated citations]]). Citing such references can be treated as fabrication, so verify every source yourself. Unit 9 covers AI policies in research: {{ai-research-policies}}.",
      "In research, plagiarism is one of the three classic forms of [[research-misconduct|research misconduct]] alongside fabrication and falsification (Unit 9: {{research-integrity}}).",
      "If you discover a mistake in submitted work, raising it early is usually treated far more kindly than having it discovered.",
      "Contract cheating, where someone else (a paid service, a friend, or an AI tool used against the rules) produces work you submit, is treated as serious misconduct in most institutions, and in some countries commercial cheating services are illegal.",
      "Journals check submissions for overlap with published work and treat undisclosed duplicate publication (publishing the same study twice) as misconduct. Reusing your own methods description may be acceptable with citation in some fields; check the journal’s policy.",
      "Copyright is a separate question from plagiarism: you can plagiarise public-domain text, and you can infringe copyright while citing correctly."
     ]},
    related:["quote-paraphrase-summary","why-cite"], read:[{book:"owg", where:"Chapter 13, Section 13.6 “Spotlight on … Ethical Research”"}],
    sources:[{t:"APA Style: Citing generative AI, Part 3: Is AI “allowed”?", url:"https://apastyle.apa.org/blog/cite-generative-ai-allowed"},{t:"MLA Style Center: Beyond Citation: Describing AI Use in Your Work", url:"https://style.mla.org/describing-ai-use/"}], checked:"2026-11"},

   {id:"reference-managers", title:"Reference managers", aka:["citation managers","Zotero","Mendeley","EndNote","JabRef","Citavi"], tags:["tools","citation"],
    summary:"Software that stores your sources and their details, and inserts formatted citations and bibliographies into documents.",
    levels:{
     starter:[
      "A [[reference-manager|reference manager]] is a personal library for your sources. It saves their details (and often PDFs and notes), and inserts citations and bibliographies into your documents in the style you choose.",
      "Change the style and every citation reformats. Add a citation and the bibliography updates.",
      "Options include **Zotero** (free, open source), **Mendeley**, **EndNote** (paid, often provided by universities), **JabRef** (free, for LaTeX users), **Citavi** and **Paperpile**. Check each one’s current price and platforms, and ask your library what it supports.",
      "Reference managers matter most when a project gets big: a thesis may cite hundreds of sources, and keeping their details consistent by hand is slow and error-prone.",
      "Whichever you choose, check its output: software formats whatever details it has."
     ],
     builder:[
      "Reference managers do four things: **collect** (browser extensions, import from databases, add by DOI/ISBN), **organise** (folders or collections, tags, duplicates), **read and annotate** (built-in PDF readers), and **cite** (plugins for word processors, or export to BibTeX for LaTeX).",
      "Most use **[[csl|CSL]]**, an open style language, so the same styles are available in several tools. Because a style formats the data it receives, the quality of your library decides the quality of your citations.",
      "Choose based on: cost now and after you leave your institution, platforms you use, word processor support, export options (so you’re not locked in), and storage limits.",
      "**Cost and continuity.** Free tools such as Zotero and JabRef keep working after you leave a university. Paid tools provided by an institution may stop when your access ends, so check export options early.",
      "**Collaboration.** Several tools offer shared libraries or groups so a team can cite from the same set of sources; check whether every collaborator needs the same software.",
      "**Storage.** Many tools sync details freely but limit file storage (Zotero: 300 MB free).",
      "If you write in LaTeX, look for good BibTeX or BibLaTeX export; if you write in Word or Google Docs, check for a plugin for the version you use."
     ],
     pro:[
      "Moving between managers is usually possible through RIS, BibTeX or CSL-JSON exports, though notes and annotations may not transfer cleanly. Moving a document with live citations between word processors needs care; Zotero documents a procedure for it.",
      "Generated output fails in predictable ways: titles stored in title case (APA needs sentence case and can’t reliably convert), organisations parsed as personal names, wrong item types, missing DOIs, and outdated style versions. The MLA advises treating generator output as a starting point, not a final product.",
      "For LaTeX users, BibTeX/BibLaTeX workflows (JabRef, or Zotero with an export add-on) keep a .bib file in sync with the library.",
      "Data quality is the hidden work. Imported records often have problems: titles in Title Case or ALL CAPS, missing issue numbers, abbreviations for journal names, organisation names split into personal names, and wrong item types. Fixing these once in the library fixes every future document.",
      "CSL styles describe how to format data; they can’t correct it. A style can apply title case, but sentence case can’t be produced reliably by software because it can’t know which words are proper nouns. That’s why it’s best to store titles in sentence case."
     ]},
    related:["zotero-basics","zotero-citing","citation-styles"],
    sources:[{t:"MLA Style Center: Citation Generators and MLA Style", url:"https://style.mla.org/citation-generators-and-mla-style/"},{t:"Citation Style Language styles repository", url:"https://github.com/citation-style-language/styles"}], checked:"2026-11"},

   {id:"zotero-basics", title:"Zotero: collecting and organising", aka:["Zotero","Zotero Connector","add by identifier","collections"], tags:["tools","Zotero"],
    summary:"Install Zotero and its Connector, save sources from the web or by DOI/ISBN, check their details, and organise them in collections.",
    levels:{
     starter:[
      "[[zotero|Zotero]] is a free, open-source reference manager from the nonprofit Corporation for Digital Scholarship. The desktop app runs on Windows, macOS and Linux (current version in November 2026: Zotero 10). There’s an iPhone/iPad app, an online library at zotero.org, and an official Android app in development (check its current status).",
      "The [[zotero-connector|Zotero Connector]] is a browser extension for Chrome, Firefox, Safari and Edge. On an article or book page, one click saves it to your library.",
      "You can also click the magic wand, **Add Item(s) by Identifier**, and paste a DOI or ISBN.",
      "Zotero keeps your library on your computer, so it works offline. A free zotero.org account adds syncing between devices and an online copy of your library.",
      "After saving a source, always glance at its details and fix anything wrong."
     ],
     builder:[
      "After saving, check each item: the right item type; each person as last name + first name and organisations in a single field; titles in sentence case (right-click the title field for **Sentence case**, then restore proper nouns); date, volume, issue, pages and DOI.",
      "Organise with **collections** (File → New Collection…), which work like playlists: an item can be in several, and removing it from one doesn’t delete it. Add **tags** and **notes**; use **Duplicate Items** to merge duplicates.",
      "A free zotero.org account syncs your library. Item data and notes sync freely; attached files use file storage, with 300 MB free. If that fills, other data keeps syncing; you can buy more or use WebDAV.",
      "**Groups.** A free group library lets a team share sources; group files count against the group owner’s storage.",
      "**PDFs and notes.** Zotero has a built-in PDF reader. Highlights and comments you make become annotations, which you can turn into notes with citations attached. Keep notes attached to the item they’re about so the source stays with the thought.",
      "**Tags vs collections.** Use collections for projects (an item can sit in several) and tags for themes that cut across projects."
     ],
     pro:[
      "On a Chromebook, run the Linux version in the Linux development environment if your device allows it; otherwise use the Connector with the online library. The Connector works best with the desktop app open, but can save directly to your online library when signed in.",
      "Add-by-identifier accepts DOIs, ISBNs, PubMed IDs and arXiv IDs (and can take several at once). Metadata from book ISBNs comes from library catalogues and is sometimes incomplete; journal DOIs are usually good.",
      "Store titles in sentence case: MLA and Chicago styles convert to title case automatically, but APA styles print titles as stored, and title-case conversion doesn’t lowercase words that are already capitalised.",
      "Zotero’s version numbers have risen quickly: Zotero 7 was released in 2024, and by November 2026 the current release was Zotero 10. Menu names in this unit were checked against Zotero 10’s interface text; if yours differ, check the current Zotero documentation.",
      "Troubleshooting: if the Connector can’t reach the desktop app, check that Zotero is running; the Connector can save to your online library if you’re signed in. If an item has messy data, re-adding it by DOI often gives cleaner details than a web page. Use Duplicate Items before final citing so one source doesn’t appear twice."
     ]},
    related:["zotero-citing","reference-managers","doi-identifiers"], read:[{book:"zotero", where:"“Adding Items to Zotero”"}],
    sources:[{t:"Zotero documentation", url:"https://www.zotero.org/support/"},{t:"Zotero source code (releases and app strings)", url:"https://github.com/zotero/zotero"}], checked:"2026-11"},

   {id:"zotero-citing", title:"Zotero: citing in Word, LibreOffice and Google Docs", aka:["Zotero plugin","word processor plugin","Add/Edit Citation","Google Docs integration"], tags:["tools","Zotero","documents"],
    summary:"Use Zotero’s plugins to insert live citations and a bibliography, switch styles, and unlink only for final copies.",
    levels:{
     starter:[
      "Zotero adds a **Zotero** tab to Word (desktop, Windows and Mac), a **Zotero** toolbar to LibreOffice Writer, and, through the Connector, a **Zotero** menu to Google Docs.",
      "Click **Add/Edit Citation**, choose a style the first time (for example “APA Style 7th edition”), search for a source, add a page if needed, and press Enter. Click **Add/Edit Bibliography** where the list should go.",
      "To change styles, use **Document Preferences**. Then check every citation.",
      "Zotero’s citations stay linked to your library, so if you fix an item’s details, a Refresh updates every citation and the bibliography.",
      "Don’t type over the citations Zotero inserts. Fix the item in your library instead."
     ],
     builder:[
      "The plugins install with Zotero; if one is missing, use **Settings → Cite → Word Processors** in Zotero to reinstall it. Google Docs citing needs the Zotero desktop app open and the Connector installed, permission for Zotero to edit your Google Docs, and Editing (not Suggesting) mode. A Word .docx opened directly in Google Docs must first be saved as a Google Doc.",
      "Don’t edit Zotero citations by hand: fix the library item and click **Refresh**. **Unlink Citations** turns citations into plain text; do it only on a copy you’re sending, and keep the linked version.",
      "For apps without a plugin, such as Pages, or on a phone, use **Create Bibliography from Items…** or **Edit → Copy Bibliography** in Zotero and paste. Pasted text won’t update.",
      "**Choosing the right style name.** Zotero’s style list uses full names: “APA Style 7th edition”, “MLA Handbook 9th edition (in-text citations)”, “Chicago Manual of Style 18th edition (notes and bibliography)” and “(author-date)”. Pick the edition your instructions ask for.",
      "**Page numbers.** In the citation dialog, add the page (or chapter, paragraph or section) for quotations; Zotero places it correctly for the style.",
      "**Omitting the author.** For a narrative citation such as “Haddad (2021) argues…”, use the citation dialog’s option to suppress the author, so the name isn’t repeated."
     ],
     pro:[
      "Bundled styles in Zotero 10 include APA Style 7th edition, MLA Handbook 9th edition, three Chicago 18th edition variants (notes and bibliography, shortened notes and bibliography, author-date), Cite Them Right 12th edition (Harvard), IEEE, Vancouver (NLM) and others; thousands more are available through **Get Additional Styles…** in the Style Manager.",
      "Zotero warns when a downloaded Google Doc still contains active citations, which appear as zotero.org links; the safe route is File → Make a copy, Unlink Citations in the copy, then download. Large Google Docs can be slow with many citations, and Zotero’s documentation describes how to move a document between word processors without losing live citations.",
      "Citation data is stored in the document, so collaborators each need Zotero and access to the cited items (for example through a shared Zotero group library) to edit citations.",
      "A bibliography can include items you didn’t cite (useful for Chicago bibliographies of works consulted) through the Add/Edit Bibliography dialog; edits made there are preserved but are easy to forget, so prefer fixing the library.",
      "Moving between Word, LibreOffice and Google Docs: use Zotero’s “Switch to a Different Word Processor…” option in Document Preferences, which converts citations into a transferable form; Zotero documents this process.",
      "If citations look out of date after editing items, click Refresh. If a citation becomes unlinked (for example after copying text between documents), Zotero warns you; relink it rather than leaving plain text."
     ]},
    related:["zotero-basics","reference-managers"], read:[{book:"zotero", where:"The word processor plugin and Google Docs pages"}],
    sources:[{t:"Zotero documentation", url:"https://www.zotero.org/support/"},{t:"Zotero Google Docs integration (source)", url:"https://github.com/zotero/zotero-google-docs-integration"}], checked:"2026-11"}
  ],
  terms:[
   {id:"citation", term:"Citation", def:"A note that says where a quotation, idea, number or image came from: a short pointer in the text plus a full entry at the end.", codex:"why-cite"},
   {id:"in-text-citation", term:"In-text citation", def:"The short pointer in your sentence, such as **(Haddad, 2021, p. 50)** or a footnote number, that leads to the full entry.", codex:"why-cite"},
   {id:"reference-list", term:"Reference list", def:"The list of full source details at the end of a piece of writing. APA and Chicago author-date call it **References**; MLA calls it **Works Cited**.", codex:"why-cite"},
   {id:"bibliography-term", term:"Bibliography", def:"The alphabetical list of sources at the end in Chicago’s notes system; it can include works consulted as well as works cited. Also used loosely for any source list.", codex:"chicago-style"},
   {id:"citation-style", term:"Citation style", def:"A set of rules for formatting citations, such as APA, MLA, Chicago, IEEE or a Harvard style.", codex:"citation-styles"},
   {id:"doi", term:"DOI", def:"Digital Object Identifier: a permanent ID for a scholarly work, written in citations as a link: **https://doi.org/** followed by the DOI.", codex:"doi-identifiers"},
   {id:"et-al", term:"et al.", def:"Latin “and others”: shortens a list of authors to the first one. When to use it depends on the style (APA, MLA and Chicago 18th in-text citations and notes: three or more authors).", codex:"citation-styles"},
   {id:"paraphrase", term:"Paraphrase", def:"Restating one passage in your own words and sentence structure, keeping the meaning. It still needs a citation.", codex:"quote-paraphrase-summary"},
   {id:"direct-quotation", term:"Direct quotation", def:"The author’s exact words, in quotation marks (or as a block quotation), with a citation that gives the page or other location.", codex:"quote-paraphrase-summary"},
   {id:"plagiarism-term", term:"Plagiarism", def:"Presenting someone else’s words, ideas, data or images as your own, whether deliberately or by accident.", codex:"plagiarism"},
   {id:"self-plagiarism", term:"Self-plagiarism", def:"Reusing your own earlier submitted or published work as if it were new, without permission or disclosure. Also called text recycling; rules vary.", codex:"plagiarism"},
   {id:"common-knowledge", term:"Common knowledge", def:"Facts your readers would already know, found in many general sources and not disputed. They don’t need a citation; specific figures and findings do.", codex:"plagiarism"},
   {id:"reference-manager", term:"Reference manager", def:"Software that stores your sources and their details and inserts formatted citations and bibliographies into documents.", codex:"reference-managers"},
   {id:"zotero", term:"Zotero", def:"A free, open-source reference manager for Windows, macOS and Linux, with an online library, an iOS app and word processor plugins.", codex:"zotero-basics"},
   {id:"zotero-connector", term:"Zotero Connector", def:"Zotero’s browser extension (Chrome, Firefox, Safari, Edge) that saves the article, book or page you’re viewing to your library.", codex:"zotero-basics"},
   {id:"csl", term:"CSL", def:"Citation Style Language: an open format for describing citation styles, used by Zotero, Mendeley and other tools.", codex:"reference-managers"},
   {id:"patchwriting", term:"Patchwriting", def:"A “paraphrase” that keeps the original’s structure and much of its wording with a few synonyms swapped in. Usually treated as plagiarism if not fixed.", codex:"quote-paraphrase-summary"},
   {id:"signal-phrase", term:"Signal phrase", def:"Words that introduce a source in your sentence, such as “Haddad argues…” or “According to Mensah…”.", codex:"quote-paraphrase-summary"},
   {id:"summary-writing", term:"Summary", def:"A much shorter version of a passage or whole work giving only its main ideas, in your own words, with a citation.", codex:"quote-paraphrase-summary"},
   {id:"block-quotation", term:"Block quotation", def:"A long quotation set off as an indented paragraph without quotation marks (APA: 40 words or more; MLA: more than four lines of prose).", codex:"quote-paraphrase-summary"},
   {id:"sentence-case", term:"Sentence case", def:"Capitalising only the first word, the first word after a colon, and proper nouns. APA uses it for titles of works.", codex:"apa-style"},
   {id:"title-case", term:"Title case", def:"Capitalising the major words of a title. MLA and Chicago use it for all titles; APA for journal names.", codex:"citation-styles"},
   {id:"hanging-indent", term:"Hanging indent", def:"A layout where the first line of a paragraph starts at the margin and the following lines are indented, used for reference lists.", codex:"apa-style"},
   {id:"secondary-citation", term:"Secondary source (citing)", def:"Citing a work you only read about in another work: APA “as cited in”, MLA “qtd. in”. Only the work you read goes in the list.", codex:"apa-style"},
   {id:"mla-container", term:"Container (MLA)", def:"In MLA, the larger work that holds your source: a journal for an article, an edited book for a chapter, a website for a page.", codex:"mla-style"},
   {id:"notes-bibliography", term:"Notes and bibliography", def:"Chicago’s system of footnotes or endnotes plus a bibliography, common in history and the humanities.", codex:"chicago-style"},
   {id:"author-date", term:"Author-date", def:"A citation system that puts the author’s surname and the year in the text, as in APA and Chicago author-date.", codex:"citation-styles"},
   {id:"isbn", term:"ISBN", def:"International Standard Book Number: an identifier for a book edition, useful for finding books or adding them to a reference manager.", codex:"doi-identifiers"},
   {id:"citation-generator", term:"Citation generator", def:"Any tool that formats citations automatically: a reference manager, a database’s “Cite” button or a website. Its output needs checking.", codex:"reference-managers"}
  ],
  bank:[
   {id:"t4u4-q01", lesson:"t4u4-l1", level:1, q:"What are the two parts of almost every citation system?", options:[{t:"A short in-text pointer and a full entry in a list", ok:true, why:"The pointer leads to the full entry, which gives everything needed to find the source."},{t:"A title page and an abstract", why:"Those are parts of a paper, not of citing."},{t:"A quotation and a translation", why:"Quotations are one way to use a source; they aren’t the citation system."},{t:"A footnote and a page number only", why:"Footnotes are one kind of pointer (Chicago); systems also need full entries."}]},
   {id:"t4u4-q02", lesson:"t4u4-l1", level:2, q:"How should a DOI be written in APA 7th, MLA 9th and Chicago 18th?", options:[{t:"https://doi.org/10.5555/jse.142", ok:true, why:"All three current editions write the DOI as a full link."},{t:"doi:10.5555/jse.142", why:"That’s an older form (MLA 8th, APA 6th)."},{t:"DOI 10.5555/jse.142", why:"A label instead of a link is outdated."},{t:"www.doi.10.5555.com", why:"That isn’t a valid address."}]},
   {id:"t4u4-q03", lesson:"t4u4-l1", level:1, q:"In MLA and Chicago, which title goes in quotation marks?", options:[{t:"An article in a journal", ok:true, why:"Parts of a larger work go in quotation marks."},{t:"A book", why:"Standalone works are italic."},{t:"A journal’s name", why:"The journal is the container: italic."},{t:"A website’s name", why:"A website’s name is never in quotation marks: MLA italicises it, and Chicago writes it in plain type."}]},
   {id:"t4u4-q04", lesson:"t4u4-l1", level:2, q:"In APA sentence case, which words of this title get capitals? “shade trees and classroom temperatures: evidence from twelve schools”", options:[{t:"Only “Shade” and “Evidence”", ok:true, why:"Sentence case capitalises the first word and the first word after a colon (plus any proper nouns; there are none here)."},{t:"Every major word, such as Trees, Classroom and Schools", why:"That’s title case, used by MLA and Chicago (and by APA only for journal names)."},{t:"Only “Shade”", why:"The first word after a colon is also capitalised: “Evidence”."},{t:"No words: APA titles are all lower case", why:"APA always capitalises the first word, the first word after a colon and proper nouns."}]},
   {id:"t4u4-q05", lesson:"t4u4-l1", level:3, q:"Hana’s teacher asks for “Harvard referencing”. Hana finds four online guides that disagree on punctuation. Why?", options:[{t:"Harvard is a family of similar styles with no single official version", ok:true, why:"Institutions publish their own Harvard guides; ask which one to follow."},{t:"Three of the guides must be fake", why:"They’re likely real; Harvard simply has many versions."},{t:"Harvard changed to a numbered style in 2024", why:"Harvard styles are author-date styles."},{t:"Harvard is the same as MLA, so any MLA guide works", why:"MLA is an author-page style with its own rules."}]},
   {id:"t4u4-q06", lesson:"t4u4-l1", level:2, q:"Which detail is most important to record while reading, so citing later is easy?", options:[{t:"The DOI (or URL), plus authors, year, title and where it was published", ok:true, why:"Who, when, what and where are what every style needs; missing them means hunting the source down again."},{t:"Only the title, since search engines can find the rest", why:"Titles can be shared or changed; you’ll waste time and may cite the wrong version."},{t:"Only the website you found it on", why:"The site address alone often isn’t stable or complete."},{t:"The number of times it has been cited", why:"Useful for judging influence, but not part of a citation."}]},
   {id:"t4u4-q07", lesson:"t4u4-l1", level:3, q:"Dmitri opens a DOI link and finds the article has been retracted. What does that tell him about DOIs?", options:[{t:"A DOI identifies a work; it doesn’t guarantee the work is reliable", ok:true, why:"Retracted papers keep their DOIs. Quality has to be judged separately."},{t:"The DOI must be fake", why:"Retracted papers keep valid DOIs."},{t:"DOIs expire after five years", why:"DOIs are designed to be permanent."},{t:"He should cite it without mentioning the retraction", why:"Citing a retracted paper as valid would mislead readers."}]},
   {id:"t4u4-q08", lesson:"t4u4-l1", level:1, q:"Which style family uses numbers like [1] that lead to a numbered list?", options:[{t:"Numbered styles such as IEEE and Vancouver", ok:true, why:"They number sources in the order they’re cited."},{t:"Author-date styles such as APA", why:"They use surname and year."},{t:"Author-page styles such as MLA", why:"They use surname and page."},{t:"All Harvard styles", why:"Harvard styles are author-date."}]},
   {id:"t4u4-q09", lesson:"t4u4-l1", level:2, q:"Which list name goes with which style?", options:[{t:"APA: References; MLA: Works Cited; Chicago notes: Bibliography", ok:true, why:"Those are the standard names."},{t:"APA: Works Cited; MLA: References; Chicago notes: Bibliography", why:"APA and MLA are swapped."},{t:"All three use “Bibliography”", why:"Only Chicago’s notes system uses that name."},{t:"APA: Bibliography; MLA: Sources; Chicago: Notes", why:"None of those are the styles’ names for the list."}]},

   {id:"t4u4-q10", lesson:"t4u4-l2", level:1, q:"In APA 7th, how is a work by three authors cited in parentheses the first time?", options:[{t:"(Okafor et al., 2023)", ok:true, why:"APA 7th uses et al. for three or more authors from the first citation."},{t:"(Okafor, Ramírez, & Watanabe, 2023)", why:"That was APA 6th’s first-citation rule."},{t:"(Okafor et al. 2023)", why:"APA needs a comma before the year."},{t:"(Okafor and others, 2023)", why:"APA uses “et al.”"}]},
   {id:"t4u4-q11", lesson:"t4u4-l2", level:2, q:"Which APA 7th book reference is correct?", options:[{t:"Haddad, S. (2021). *Repairing things: A practical history of mending*. Riverbend Press.", ok:true, why:"Initials, year in brackets, sentence-case italic title, publisher without city."},{t:"Haddad, Samir. (2021). *Repairing Things*. Lisbon: Riverbend Press.", why:"APA uses initials, sentence case and no publisher location."},{t:"Haddad, S. 2021. Repairing things. Riverbend Press, Lisbon.", why:"The year needs brackets, the title needs italics, and no city."},{t:"Haddad, S. (2021). “Repairing things.” Riverbend Press.", why:"APA doesn’t use quotation marks for titles; books are italic."}]},
   {id:"t4u4-q12", lesson:"t4u4-l2", level:2, q:"Kenji quotes paragraph 3 of a web page with no page numbers (Coastal Water Trust, 2024). How does APA locate it?", options:[{t:"(Coastal Water Trust, 2024, para. 3)", ok:true, why:"Without pages, use a paragraph number, section name or timestamp."},{t:"(Coastal Water Trust, 2024, p. 3)", why:"There’s no page 3; “p.” would mislead."},{t:"(Coastal Water Trust, 2024)", why:"Direct quotations need a location."},{t:"(Coastal Water Trust 3)", why:"That’s MLA-like and lacks the year."}]},
   {id:"t4u4-q13", lesson:"t4u4-l2", level:1, q:"In APA 7th, which parts of a journal reference are italic?", options:[{t:"The journal name and the volume number", ok:true, why:"The issue number in brackets and the article title are not italic."},{t:"The article title only", why:"Article titles are plain in APA."},{t:"The whole reference", why:"Only the journal name and volume."},{t:"The authors’ names", why:"Names are never italic."}]},
   {id:"t4u4-q14", lesson:"t4u4-l2", level:3, q:"Fatima cites a WHO report several times. Which pair of APA citations is right?", options:[{t:"First (World Health Organization [WHO], 2025), then (WHO, 2025)", ok:true, why:"Define the abbreviation at first citation, then use it."},{t:"(WHO, 2025) every time, with no explanation", why:"Readers need the full name first."},{t:"(Organization, 2025)", why:"That treats the organisation as a person’s surname."},{t:"(Anonymous, 2025)", why:"An organisation is the author; “Anonymous” is only for works signed that way."}]},
   {id:"t4u4-q15", lesson:"t4u4-l2", level:2, q:"Where do the editors go in an APA chapter reference?", options:[{t:"After “In”, initials before surnames, then (Eds.): In T. Ortega & M. Lin (Eds.),", ok:true, why:"That’s APA’s pattern for editors of the book."},{t:"Before the chapter author", why:"The chapter author comes first."},{t:"At the end, after the DOI", why:"The DOI comes last."},{t:"They’re left out", why:"Editors help readers find the book."}]},
   {id:"t4u4-q16", lesson:"t4u4-l2", level:2, q:"According to APA’s current AI guidance, who is the author of a reference to ChatGPT?", options:[{t:"OpenAI, the company that made it", ok:true, why:"APA names the company responsible for the tool; AI can’t be an author."},{t:"ChatGPT itself", why:"APA says AI can’t be an author."},{t:"The person who typed the prompts", why:"The user isn’t the author of the tool’s output in APA’s guidance."},{t:"No author: start with the title", why:"The company is treated as the author."}]},
   {id:"t4u4-q17", lesson:"t4u4-l2", level:3, q:"Tomás read Mensah (2022), who quotes a 1998 Ferreira survey that Tomás couldn’t access. Which APA citation is right?", options:[{t:"(Ferreira, 1998, as cited in Mensah, 2022), with only Mensah in References", ok:true, why:"Name the original, cite what you read, list only what you read."},{t:"(Ferreira, 1998), with Ferreira in References", why:"That implies Tomás read the survey."},{t:"(Mensah, 2022), without mentioning Ferreira", why:"It credits the idea to Mensah instead of Ferreira."},{t:"(Ferreira qtd. in Mensah 40)", why:"That’s MLA wording."}]},
   {id:"t4u4-q18", lesson:"t4u4-l2", level:2, q:"An article has 23 authors. What does the APA 7th reference list show?", options:[{t:"The first 19 authors, an ellipsis, then the last author", ok:true, why:"That’s APA 7th’s rule for 21 or more authors."},{t:"All 23 authors", why:"APA lists all only up to 20."},{t:"The first author and et al.", why:"Et al. is for in-text citations in APA."},{t:"The first six and et al.", why:"That was a rule in older editions."}]},

   {id:"t4u4-q19", lesson:"t4u4-l3", level:1, q:"Which is a correct MLA 9th in-text citation for page 50 of Haddad’s book?", options:[{t:"(Haddad 50)", ok:true, why:"Surname and page, no comma, no “p.”, no year."},{t:"(Haddad, 2021, p. 50)", why:"That’s APA style: comma, year and “p.”."},{t:"(Haddad 2021, 50)", why:"That’s Chicago author-date."},{t:"(Haddad, p. 50)", why:"MLA uses no comma and no “p.”"}]},
   {id:"t4u4-q20", lesson:"t4u4-l3", level:2, q:"How does MLA 9th start a works-cited entry for an article by three authors?", options:[{t:"Okafor, Adaeze N., et al.", ok:true, why:"First author reversed, comma, et al."},{t:"Okafor, A. N., Ramírez, L., & Watanabe, K.", why:"That’s APA style, with initials and an ampersand."},{t:"Okafor, Adaeze N., Lucía Ramírez, and Kenji Watanabe.", why:"That’s Chicago’s bibliography form; MLA uses et al. from three authors."},{t:"Okafor et al.", why:"The works-cited entry needs the first author’s full name."}]},
   {id:"t4u4-q21", lesson:"t4u4-l3", level:3, q:"A Coastal Water Trust web page has no named author, and the Trust runs the website. How does Ana’s MLA entry begin?", options:[{t:"With the page title: “Well Water Testing at Home.”", ok:true, why:"When an organisation is both author and publisher, MLA skips the author and begins with the title."},{t:"Coastal Water Trust.", why:"MLA avoids repeating the organisation as author when it’s also the publisher."},{t:"Anonymous.", why:"MLA says not to use Anonymous."},{t:"n.d.", why:"MLA doesn’t use n.d. as an entry’s first element."}]},
   {id:"t4u4-q22", lesson:"t4u4-l3", level:2, q:"In Chicago 18th notes, how do you cite a work by three authors?", options:[{t:"First author’s name followed by et al.", ok:true, why:"The 18th edition uses et al. in notes from three authors."},{t:"All three names", why:"That was the 17th edition’s practice for three authors."},{t:"The first two names and et al.", why:"Chicago uses just the first."},{t:"No names, just the title", why:"Notes give authors."}]},
   {id:"t4u4-q23", lesson:"t4u4-l3", level:2, q:"What is a Chicago shortened note?", options:[{t:"A later note for a source already cited in full: surname, short title, page", ok:true, why:"Shortened notes save space after the first full note."},{t:"A note with no page number", why:"Shortened notes still give the page."},{t:"A bibliography entry without the publisher", why:"Bibliography entries are separate from notes."},{t:"An abbreviation for a journal name", why:"That’s not what the term means."}]},
   {id:"t4u4-q24", lesson:"t4u4-l3", level:3, q:"Which citation is in Chicago author-date style?", options:[{t:"(Okafor et al. 2023, 50)", ok:true, why:"No comma between author and year, then a comma and the page."},{t:"(Okafor et al., 2023, p. 50)", why:"That’s APA style: comma before the year and “p.”."},{t:"(Okafor et al. 50)", why:"That’s MLA style: no year at all."},{t:"¹ Okafor et al., “Shade Trees,” 50.", why:"That’s a Chicago shortened footnote, not author-date."}]},
   {id:"t4u4-q25", lesson:"t4u4-l3", level:2, q:"MLA 9th: what follows the DOI at the end of a works-cited entry?", options:[{t:"A full stop", ok:true, why:"MLA ends every entry with a full stop, even after a DOI or URL."},{t:"Nothing", why:"That’s APA’s practice."},{t:"The access date", why:"An access date is optional (and rarely needed with a DOI). Even when one is added, the entry’s location still ends with a full stop first."},{t:"The database name", why:"The database (a second container) comes before its location."}]},
   {id:"t4u4-q26", lesson:"t4u4-l3", level:1, q:"How does a Chicago bibliography differ from a Chicago full note?", options:[{t:"The first author is reversed and parts are separated by full stops", ok:true, why:"Bibliographies are alphabetical, so surnames come first."},{t:"It never includes the title", why:"Bibliographies include titles."},{t:"It gives only the page cited", why:"Notes give the cited page; bibliography entries give full ranges for articles."},{t:"It uses initials instead of first names", why:"Chicago uses full names."}]},
   {id:"t4u4-q27", lesson:"t4u4-l3", level:3, q:"Mei finds an online guide whose Chicago bibliography lists “Lisbon: Riverbend Press”. Is it wrong for Chicago 18th?", options:[{t:"Not wrong: the 18th edition no longer requires the city, but it’s still allowed", ok:true, why:"Chicago 18th makes place of publication optional; many guides still show it."},{t:"Yes, cities are now forbidden in every style", why:"Chicago allows them; APA 7th is the one that dropped them."},{t:"It’s required in Chicago 18th", why:"It was dropped as a requirement."},{t:"Only the country is allowed", why:"No such rule."}]},

   {id:"t4u4-q28", lesson:"t4u4-l4", level:1, q:"Which of these needs a citation?", options:[{t:"A paraphrase of a researcher’s finding", ok:true, why:"Ideas and findings need credit even in your own words."},{t:"“Water boils at 100 °C at sea level”", why:"That’s common knowledge."},{t:"Your own opinion about the topic", why:"Your own ideas don’t need a citation."},{t:"“The Pacific is the largest ocean”", why:"Common knowledge."}]},
   {id:"t4u4-q29", lesson:"t4u4-l4", level:2, q:"In APA, when must a quotation be formatted as a block quotation?", options:[{t:"When it’s 40 words or more", ok:true, why:"APA’s threshold is 40 words; block quotations have no quotation marks."},{t:"When it’s more than one sentence", why:"Length in words is the test."},{t:"Whenever it’s from a book", why:"Source type doesn’t matter."},{t:"Never: APA doesn’t use block quotations", why:"It does, from 40 words."}]},
   {id:"t4u4-q30", lesson:"t4u4-l4", level:3, q:"Sione’s “paraphrase” follows the original sentence by sentence, swapping a few words for synonyms, and includes a citation. What’s the problem?", options:[{t:"It’s patchwriting: the borrowed structure and phrasing aren’t marked", ok:true, why:"A citation credits the idea, but copied wording still needs quotation marks or a real rewrite."},{t:"Nothing: the citation makes it fine", why:"Unmarked borrowed phrasing is still usually treated as plagiarism."},{t:"Paraphrases never need citations", why:"They always do."},{t:"It should be a block quotation", why:"It isn’t an exact quotation."}]},
   {id:"t4u4-q31", lesson:"t4u4-l4", level:2, q:"What is the best first step to paraphrase a passage well?", options:[{t:"Understand it, then write it from memory without looking", ok:true, why:"Writing from understanding avoids copying the structure."},{t:"Replace every third word with a synonym", why:"That produces patchwriting."},{t:"Run it through an AI paraphrasing tool", why:"That often patchwrites and may break your course’s rules."},{t:"Translate it into another language and back", why:"That distorts meaning and isn’t paraphrasing."}]},
   {id:"t4u4-q32", lesson:"t4u4-l4", level:3, q:"Amara’s course allows AI for brainstorming with disclosure. She used it to suggest topics. What should she do?", options:[{t:"Describe that use as the course asks, and cite the tool if required", ok:true, why:"Allowed use still needs the disclosure the policy requires."},{t:"Nothing, because brainstorming leaves no trace", why:"The policy asks for disclosure."},{t:"List the AI tool as a co-author", why:"AI can’t be an author."},{t:"Cite the AI’s suggestions as peer-reviewed sources", why:"AI output isn’t a peer-reviewed source."}]},
   {id:"t4u4-q33", lesson:"t4u4-l4", level:2, q:"What does a similarity checker’s report show?", options:[{t:"Where text matches other text; a person decides whether it’s a problem", ok:true, why:"Correctly quoted and cited text will also match."},{t:"Whether the writer intended to cheat", why:"Software can’t judge intent."},{t:"Whether the ideas are original", why:"It compares text, not ideas."},{t:"The writer’s final grade", why:"It doesn’t grade work."}]},
   {id:"t4u4-q34", lesson:"t4u4-l4", level:3, q:"Oluwaseun realises after submitting that one paragraph in his essay lacks a citation. What’s the wisest move?", options:[{t:"Tell the instructor promptly and offer a corrected version", ok:true, why:"Raising a mistake early is usually treated far more kindly than having it discovered."},{t:"Hope nobody notices", why:"If found later, it looks worse."},{t:"Delete the essay from the course site", why:"That doesn’t fix anything and may break rules."},{t:"Add a fake citation to cover it", why:"Fabricating a citation is misconduct."}]},
   {id:"t4u4-q35", lesson:"t4u4-l4", level:1, q:"What is self-plagiarism?", options:[{t:"Reusing your own earlier work as new without permission or disclosure", ok:true, why:"Also called text recycling; rules vary."},{t:"Quoting yourself in a diary", why:"Private writing isn’t submitted work."},{t:"Citing your own published paper correctly", why:"Correctly citing your work is fine."},{t:"Writing in the first person", why:"That’s a style choice."}]},
   {id:"t4u4-q36", lesson:"t4u4-l4", level:2, q:"Which is the best reason to quote rather than paraphrase?", options:[{t:"The exact wording is what you’re analysing", ok:true, why:"When the words themselves matter, quote them."},{t:"Quoting is always safer", why:"Overquoting weakens writing, and some instructors limit it."},{t:"You didn’t understand the passage", why:"Then you need to read more before using it."},{t:"It saves you from citing", why:"Quotations need citations too."}]},

   {id:"t4u4-q37", lesson:"t4u4-l5", level:1, q:"What does the Zotero Connector do?", options:[{t:"Saves the source you’re viewing in your browser to your Zotero library", ok:true, why:"It’s Zotero’s browser extension."},{t:"Connects Zotero to your printer", why:"Not its job."},{t:"Writes your essay", why:"It saves sources."},{t:"Checks your essay for plagiarism", why:"Zotero isn’t a similarity checker."}]},
   {id:"t4u4-q38", lesson:"t4u4-l5", level:3, q:"Zotero’s APA bibliography shows “Organization, W. H. (2025)”. What went wrong?", options:[{t:"The organisation was stored as a person’s name; switch the creator to a single field", ok:true, why:"Organisations must be single-field names in the library."},{t:"APA abbreviates organisations this way", why:"APA writes the full organisation name."},{t:"Zotero can’t cite reports", why:"It can; the data is wrong."},{t:"The style needs updating to APA 8th", why:"There’s no such edition; the data is the problem."}]},
   {id:"t4u4-q39", lesson:"t4u4-l5", level:2, q:"Why should titles be stored in sentence case in Zotero?", options:[{t:"APA styles print titles as stored, while MLA and Chicago styles can convert to title case", ok:true, why:"Sentence case works for both directions; title case can’t be reliably turned into sentence case."},{t:"Zotero refuses to save title case", why:"It saves whatever you type."},{t:"All styles require sentence case", why:"MLA and Chicago use title case."},{t:"It makes searching faster", why:"Case doesn’t affect searching."}]},
   {id:"t4u4-q40", lesson:"t4u4-l5", level:2, q:"How do you add a book to Zotero using its ISBN?", options:[{t:"Click the magic wand (Add Item(s) by Identifier) and paste the ISBN", ok:true, why:"Zotero looks up the details from the identifier."},{t:"Type the ISBN into the title field", why:"That creates a wrongly titled item."},{t:"Email the ISBN to zotero.org", why:"Not a feature."},{t:"Only possible on the iPhone app", why:"Desktop and mobile both support identifiers."}]},
   {id:"t4u4-q41", lesson:"t4u4-l5", level:2, q:"What does the free zotero.org file storage limit (300 MB) apply to?", options:[{t:"Attached files such as PDFs", ok:true, why:"Item details and notes keep syncing when file storage is full."},{t:"Everything, including item details", why:"Other data continues to sync."},{t:"The number of citations in Word", why:"Citing isn’t limited by storage."},{t:"Only the iPhone app", why:"It applies to your online file storage."}]},
   {id:"t4u4-q42", lesson:"t4u4-l5", level:3, q:"Lucía writes her thesis in Google Docs with Zotero. What does she need for citing?", options:[{t:"The Zotero Connector in her browser and the Zotero desktop app open", ok:true, why:"Google Docs citing runs through the Connector and needs the desktop app."},{t:"Nothing; Google Docs has Zotero built in", why:"The Zotero menu comes from the Connector."},{t:"The Word plugin installed in Google Docs", why:"The Word plugin is for Word."},{t:"Suggesting mode turned on", why:"Citing is disabled in Suggesting mode; use Editing mode."}]},
   {id:"t4u4-q43", lesson:"t4u4-l5", level:2, q:"Kenji wants to send a final copy without live Zotero citations. What should he do?", options:[{t:"Make a copy, use Unlink Citations in the copy, and keep the linked original", ok:true, why:"Unlinking is permanent; keep a linked version for future edits."},{t:"Unlink Citations in his only copy", why:"He’d lose the ability to update citations."},{t:"Delete the bibliography", why:"Readers need it."},{t:"Retype all citations by hand", why:"Unnecessary; unlinking does this."}]},
   {id:"t4u4-q44", lesson:"t4u4-l5", level:3, q:"Priya’s generated MLA entry ends “doi:10.5555/abc.12.” What should she do?", options:[{t:"Rewrite it as https://doi.org/10.5555/abc.12 (with a full stop after), and check the generator’s edition", ok:true, why:"“doi:” is MLA 8th; MLA 9th uses the link form."},{t:"Leave it: generators always follow the newest edition", why:"Generators may use old editions."},{t:"Remove the DOI entirely", why:"DOIs are the preferred location in MLA."},{t:"Replace it with the database name", why:"The DOI is better."}]},
   {id:"t4u4-q45", lesson:"t4u4-l5", level:1, q:"Which of these is a free, open-source reference manager?", options:[{t:"Zotero", ok:true, why:"Zotero is free and open source."},{t:"A similarity checker", why:"That checks matching text, not references."},{t:"A PDF reader", why:"It reads files but doesn’t manage citations."},{t:"A spreadsheet", why:"It can hold a list, but doesn’t format citations or plug into word processors."}]}
  ]
});
