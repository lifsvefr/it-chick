/* IT CHICK Academy · Citation Lab challenges.
   All sources are invented for practice (the DOIs use 10.5555, a prefix Crossref uses for tests and examples).
   Each challenge has fields (one answer box each); each field lists the expected parts in order (see shared/citelab.js).
   also: other answers that must pass; traps: wrong answers that must fail with feedback containing `expect`
   (tested by tools/check_citelab.js). */
window.CLAB_GROUPS = [
  {id:"apa", title:"APA (7th edition)", blurb:"Psychology, education, health, social sciences, business. Author–date, with a reference list."},
  {id:"mla", title:"MLA (9th edition)", blurb:"Literature, languages, arts and humanities. Author–page citations, with a works-cited list."},
  {id:"chicago", title:"Chicago (18th edition)", blurb:"History, arts and some sciences. Footnotes with a bibliography, or author–date."},
  {id:"general", title:"Any style", blurb:"Skills every style needs: DOIs as links, and fixing what citation generators get wrong."}
];
(function(){
/* ----- the invented sources ----- */
var GARDEN = {kind:"Journal article", rows:[["Authors (in this order)","Ngozi Okafor; Tomás Herrera"],["Year","2023"],["Article title (as the journal’s web page shows it)","Community Gardens and Neighbourhood Trust: Evidence from Three Cities"],["Journal","Urban Green Space Review"],["Volume","12"],["Issue","3"],["Pages","45–67"],["DOI","10.5555/ugsr.2023.0345"]]};
var SHADE = {kind:"Journal article", rows:[["Authors (in this order)","Tomás Herrera; Ngozi Okafor"],["Year","2022"],["Article title","Shade Trees and Walking: A Survey of Older Residents"],["Journal","Urban Green Space Review"],["Volume","11"],["Issue","1"],["Pages","5–19"],["DOI","10.5555/ugsr.2022.0102"]]};
var SALT = {kind:"Book", rows:[["Author","Priya Raman"],["Title (as the cover shows it)","Salt and Stone: A Short History of Coastal Trade"],["Edition","Second edition"],["Publisher","Harbour Light Press"],["Year","2021"]]};
var PLACES = {kind:"Chapter in an edited book", rows:[["Chapter author","Kenji Watanabe"],["Chapter title","Mapping Memory in Rebuilt Towns"],["Book title","Places of Memory and Repair"],["Book editors","Amara Diallo; Lucía Fernández"],["Chapter pages","88–112"],["Publisher","Northgate University Press"],["Year","2020"]]};
var WATER = {kind:"Web page", rows:[["Organisation (author and website)","Clean Rivers Network"],["Page title","How to Test Your Tap Water at Home"],["Date on the page","14 May 2024"],["URL","https://www.cleanriversnetwork.example/advice/test-tap-water"],["Individual author shown?","No"]]};
var HEAT = {kind:"Report", rows:[["Organisation (author and publisher)","Regional Health Observatory"],["Title","Heat and Health in Cities: A 2022 Update"],["Report number","7"],["Year","2022"],["URL","https://www.rho.example/reports/heat-2022"]]};
var COAST = {kind:"Journal article", rows:[["Authors (in this order)","Sione Taufa; Mei Lin; Oluwaseun Adeyemi"],["Year","2024"],["Title","Measuring Sea-Level Worry in Island Schools"],["Journal","Coastal Learning"],["Volume","8"],["Issue","2"],["Pages","101–118"],["DOI","10.5555/cl.2024.0811"]]};
var QUILL = {kind:"A chat with a generative AI tool", rows:[["Company that makes the tool","Lumen Labs"],["Tool","Quill"],["Model name shown in the chat","Quill 4.2"],["Date of the chat","3 March 2026"],["Chat title (as the tool shows it)","Planning a School Garden Survey"],["Share link for the chat","https://quill.example/share/k7d2p9"],["The tool’s home page","https://quill.example"]]};

/* ----- APA parts ----- */
function apaAuthors(t, ex, second){ return {label:"Authors", t:t, why:"APA: surname, comma, then initials with full stops. Commas between authors, and “&” before the last one.", bad:(second ? [{re:"^" + second, msg:"Keep the authors in the order the source lists them: " + t.split(",")[0] + " first."}] : []).concat([
  {re:"\\band\\b", msg:"In an APA reference list, put “&” before the last author, not “and”."},
  {re:"[A-ZÁÉÍÓÚ][a-záéíóú]+ [A-Z][a-z]+,", msg:"Start each author with the surname, then initials (" + ex + "), not the full first name."},
  {re:"[A-Z]{3,}", msg:"Names aren’t written in capitals."},
  {re:"[A-Z]\\.[A-Z]|[A-Z],", msg:"Each initial needs a full stop and a space."}])}; }
function apaYear(y){ return {label:"Year", t:"(" + y + ").", why:"The year goes in round brackets after the authors, then a full stop.", bad:[{re:"^\\d{4}\\.?$", msg:"Put the year in round brackets: (" + y + ")."},{re:"^\\(\\d{4}\\)$", msg:"Add a full stop after the bracket: (" + y + ")."}]}; }
function apaArtTitle(t){ return {label:"Article title", t:t, why:"Article titles use sentence case, aren’t in italics or quotation marks, and end with a full stop.", capMsg:"APA writes article titles in sentence case: a capital only for the first word, the first word after a colon, and names.", notItMsg:"Article titles aren’t in italics in APA (the journal name is).", bad:[{re:"^\"", msg:"APA doesn’t put article titles in quotation marks."}]}; }
function apaJournal(j){ return {label:"Journal", t:"*" + j + "*,", why:"The journal name keeps its capitals, goes in italics, and is followed by a comma.", itMsg:"The journal name goes in italics.", capMsg:"Journal names keep the capitals the journal uses.", bad:[{re:"^[\"']+$", msg:"APA doesn’t put article titles in quotation marks."}]}; }
function apaVol(v){ return {label:"Volume", t:"*" + v + "*", why:"The volume number is in italics, straight after the journal name.", itMsg:"In APA the volume number is in italics too (the issue number isn’t).", bad:[{re:"vol", f:"i", msg:"APA doesn’t write “vol.”: just the number, in italics."}]}; }
function apaIss(n){ return {label:"Issue", t:"(" + n + "),", join:"", why:"The issue number goes in round brackets straight after the volume (no space), not in italics, then a comma.", notItMsg:"The issue number isn’t in italics, only the volume.", bad:[{re:"no\\.|issue", f:"i", msg:"APA doesn’t write “no.” or “issue”: just (" + n + ") right after the volume."}]}; }
function apaPages(p){ return {label:"Pages", t:p + ".", why:"The page range with an en dash, no “pp.”, then a full stop.", bad:[{re:"pp?\\.", msg:"APA journal references don’t put “p.” or “pp.” before the page range."}]}; }
// the DOI itself can be in any case (DOIs ignore case), but https://doi.org/ is written in small letters
function doiLink(d, end){ var esc = function(x){ return x.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&").replace(/[a-z]/gi, function(c){ return "[" + c.toLowerCase() + c.toUpperCase() + "]"; }); };
  return {label:"DOI", re:"https://doi\\.org/" + esc(d) + esc(end || ""), example:"https://doi.org/" + d + (end || ""), capMsg:"Write https://doi.org/ in small letters.", why:"Write the DOI as a link: https://doi.org/ followed by the DOI.", bad:[
  {re:"^doi:", f:"i", msg:"Write DOIs as links (https://doi.org/…), not “doi:…”."},
  {re:"dx\\.doi", msg:"Use the current form https://doi.org/, not dx.doi.org."},
  {re:"^http:", msg:"Use https://, not http://."},
  {re:"^10\\.", msg:"Put https://doi.org/ in front of the DOI so it works as a link."}]}; }
var APA_END = [{re:"^\\.$", msg:"No full stop after a DOI or URL at the end of an APA reference (it could break the link)."}];
var DOI_END = [{re:"^[.,;]$", msg:"Just the link here, with nothing after it."}];
var APA_BAD = [{re:"^Retrieved|^Accessed", f:"i", msg:"APA only adds a “Retrieved” date for pages that are designed to change over time, so leave it out here."}];
function apaArticle(o){ return [apaAuthors(o.auth, o.ex, o.second), apaYear(o.year), apaArtTitle(o.title), apaJournal(o.journal), apaVol(o.vol), apaIss(o.iss), apaPages(o.pages), doiLink(o.doi)]; }
var GARDEN_APA = apaArticle({auth:"Okafor, N., & Herrera, T.", ex:"Okafor, N.", second:"Herrera", year:2023, title:"Community gardens and neighbourhood trust: Evidence from three cities.", journal:"Urban Green Space Review", vol:12, iss:3, pages:"45–67", doi:"10.5555/ugsr.2023.0345"});
var SHADE_APA = apaArticle({auth:"Herrera, T., & Okafor, N.", ex:"Herrera, T.", second:"Okafor", year:2022, title:"Shade trees and walking: A survey of older residents.", journal:"Urban Green Space Review", vol:11, iss:1, pages:"5–19", doi:"10.5555/ugsr.2022.0102"});

/* ----- MLA parts ----- */
function mlaTitleQ(t, why, chicago){ return {label:"Title", t:"\"" + t + "\"", why:why || "Titles of articles and web pages go in quotation marks, in title case, with the full stop inside the closing quotation mark.", capMsg:(chicago ? "Chicago uses headline-style capitals" : "MLA uses title case") + ": capitalise the main words, but not short words like a, and, at, from, of, the and to (unless they come first or straight after a colon).", notItMsg:"Titles of articles and pages go in quotation marks, not italics.", bad:[{re:"\"\\.?$", msg:"Put the full stop inside the quotation marks: …Cities.” "}, {re:"^'", msg:"Use double quotation marks (“…”) around the title."}, {re:"^[^\"]", msg:"Put the title in quotation marks."}]}; }
var GARDEN_MLA = [
  {label:"Authors", t:"Okafor, Ngozi, and Tomás Herrera.", why:"MLA: the first author surname first (Okafor, Ngozi), then “, and” and the second author in normal order.", bad:[{re:"&", msg:"MLA writes “and”, not “&”."},{re:"Herrera, Tom", msg:"Only the first author is reversed; the second is written first name first: Tomás Herrera."},{re:"N\\.", msg:"MLA uses full first names as they appear in the source, not initials."}]},
  mlaTitleQ("Community Gardens and Neighbourhood Trust: Evidence from Three Cities."),
  {label:"Journal", t:"*Urban Green Space Review*,", why:"The journal (the “container”) goes in italics, then a comma.", itMsg:"The journal name goes in italics."},
  {label:"Volume", t:"vol. 12,", why:"MLA labels the volume: “vol. 12,”.", notItMsg:"The volume isn’t in italics in MLA.", bad:[{re:"^\\*?12\\*?\\(", msg:"MLA doesn’t use the APA form 12(3): write “vol. 12, no. 3,”."}]},
  {label:"Issue", t:"no. 3,", why:"MLA labels the issue: “no. 3,”."},
  {label:"Year", t:"2023,", why:"In MLA the year comes after the volume and issue, without brackets, then a comma.", bad:[{re:"\\(", msg:"No brackets around the year in MLA."}]},
  {label:"Pages", t:"pp. 45–67,", why:"MLA writes “pp.” before a page range, then a comma.", bad:[{re:"^45", msg:"MLA puts “pp.” before a page range: pp. 45–67."}]},
  doiLink("10.5555/ugsr.2023.0345", ".")];
GARDEN_MLA[GARDEN_MLA.length - 1].why = "Write the DOI as a link (https://doi.org/…), and end the entry with a full stop.";

window.CLAB = [
/* ================= APA ================= */
{id:"cl-apa-article", group:"apa", title:"Journal article", lesson:"t4u4-l2", style:"APA 7",
 task:"Write the APA reference-list entry for this article. Put italics between *asterisks* (or select the words and tap **I**).",
 source:GARDEN,
 fields:[{label:"Reference list entry", segs:GARDEN_APA, tail:APA_END, bad:APA_BAD}],
 also:[["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review, 12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"],
       ["Okafor, N., &amp; Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. _Urban Green Space Review_, _12_(3), 45-67. https://doi.org/10.5555/ugsr.2023.0345".replace("&amp;", "&")],
       ["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/UGSR.2023.0345"]],
 traps:[{a:["Okafor, N., & Herrera, T. (2023). Community Gardens and Neighbourhood Trust: Evidence from Three Cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"sentence case"},
        {a:["Okafor, N., and Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"“&”"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. Urban Green Space Review, 12(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"italics"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12(3)*, 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"issue number isn’t in italics"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. doi:10.5555/ugsr.2023.0345"], expect:"links"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345."], expect:"No full stop after a DOI"},
        {a:["Ngozi Okafor, & Tomás Herrera. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"surname"},
        {a:["Okafor, N., & Herrera, T. 2023. Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"round brackets"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), pp. 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"pp."},
        {a:["Herrera, T., & Okafor, N. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"Authors"}],
 hints:["The pattern is: Authors. (Year). Title of article. *Journal*, *Volume*(Issue), pages. https://doi.org/…", "Sentence case for the article title: only “Community”, “Evidence” (after the colon) keep capitals. The journal name keeps all its capitals and goes in italics, and so does the volume number."],
 explain:"APA puts the **date near the front** because readers in fast-moving fields care how recent a study is. Only two things are in italics: the journal name and the volume number. Keep the authors in the order the article lists them: the order often shows who did the most work."},

{id:"cl-apa-book", group:"apa", title:"Book (later edition)", lesson:"t4u4-l2", style:"APA 7",
 task:"Write the APA reference for this book. It’s the second edition, so the edition goes in brackets after the title.",
 source:SALT,
 fields:[{label:"Reference list entry", segs:[
   apaAuthors("Raman, P.", "Raman, P."), apaYear(2021),
   {label:"Title", t:"*Salt and stone: A short history of coastal trade*", why:"Book titles are in italics and in sentence case (capitals for the first word, the first word after a colon, and names).", itMsg:"Book titles go in italics.", capMsg:"APA writes book titles in sentence case: “Salt and stone: A short history of coastal trade”."},
   {label:"Edition", t:"(2nd ed.).", why:"A later edition goes in round brackets after the title, not in italics: (2nd ed.). Then a full stop.", notItMsg:"The edition isn’t in italics.", bad:[{re:"^\\.$", msg:"No full stop between the title and the edition: …trade* (2nd ed.)."},{re:"edition|Second", f:"i", msg:"APA shortens it: (2nd ed.)."}]},
   {label:"Publisher", t:"Harbour Light Press.", why:"Then the publisher and a full stop. APA 7 leaves out the city.", bad:[{re:":", msg:"APA 7 doesn’t include the publisher’s city."}]}]}],
 also:[["Raman, P. (2021). *Salt and stone: A short history of coastal trade* (2nd ed.). Harbour Light Press."]],
 traps:[{a:["Raman, P. (2021). *Salt and Stone: A Short History of Coastal Trade* (2nd ed.). Harbour Light Press."], expect:"sentence case"},
        {a:["Raman, P. (2021). Salt and stone: A short history of coastal trade (2nd ed.). Harbour Light Press."], expect:"italics"},
        {a:["Raman, P. (2021). *Salt and stone: A short history of coastal trade*. Harbour Light Press."], expect:"Edition"},
        {a:["Raman, P. (2021). *Salt and stone: A short history of coastal trade* (2nd ed.). London: Harbour Light Press."], expect:"city"},
        {a:["Raman, P. (2021). *Salt and stone: A short history of coastal trade (2nd ed.)*. Harbour Light Press."], expect:"edition isn’t in italics"}],
 hints:["Pattern: Author. (Year). *Title in sentence case* (2nd ed.). Publisher.", "The edition sits between the title and the full stop: *…trade* (2nd ed.)."],
 explain:"Editions matter because page numbers and content change between them. APA 7 dropped the publisher’s city that older editions of the style required, so you may still see it in older papers."},

{id:"cl-apa-chapter", group:"apa", title:"Chapter in an edited book", lesson:"t4u4-l2", style:"APA 7",
 task:"Cite the **chapter** (not the whole book). In an edited book, each chapter has its own author; the editors come after “In”.",
 source:PLACES,
 fields:[{label:"Reference list entry", segs:[
   apaAuthors("Watanabe, K.", "Watanabe, K."), apaYear(2020),
   apaArtTitle("Mapping memory in rebuilt towns."),
   {label:"Editors", t:"In A. Diallo & L. Fernández (Eds.),", why:"“In”, then the editors with initials first, “&” between them, then (Eds.) and a comma.", bad:[{re:"Diallo, A", msg:"Editors are written initials first here: A. Diallo & L. Fernández."},{re:"\\(Ed\\.\\)", msg:"Two editors: (Eds.)."},{re:"\\band\\b", msg:"Use “&” between the editors."},{re:"^(?!In )", msg:"Start this part with “In”."}]},
   {label:"Book title", t:"*Places of memory and repair*", why:"The book title in italics and sentence case.", itMsg:"The book title goes in italics (the chapter title doesn’t).", capMsg:"Sentence case for the book title: “Places of memory and repair”."},
   {label:"Pages", t:"(pp. 88–112).", why:"The chapter’s pages in brackets with “pp.”, then a full stop.", bad:[{re:"^88", msg:"Use (pp. 88–112) for a chapter’s pages."}]},
   {label:"Publisher", t:"Northgate University Press.", why:"Then the publisher and a full stop."}]}],
 also:[["Watanabe, K. (2020). Mapping memory in rebuilt towns. In A. Diallo & L. Fernández (Eds.), *Places of memory and repair* (pp. 88-112). Northgate University Press."]],
 traps:[{a:["Watanabe, K. (2020). Mapping memory in rebuilt towns. In Diallo, A., & Fernández, L. (Eds.), *Places of memory and repair* (pp. 88–112). Northgate University Press."], expect:"initials first"},
        {a:["Watanabe, K. (2020). *Mapping memory in rebuilt towns*. In A. Diallo & L. Fernández (Eds.), Places of memory and repair (pp. 88–112). Northgate University Press."], expect:"italics"},
        {a:["Diallo, A., & Fernández, L. (Eds.). (2020). *Places of memory and repair*. Northgate University Press."], expect:"Authors"},
        {a:["Watanabe, K. (2020). Mapping memory in rebuilt towns. In A. Diallo & L. Fernández (Ed.), *Places of memory and repair* (pp. 88–112). Northgate University Press."], expect:"(Eds.)"}],
 hints:["Pattern: Chapter author. (Year). Chapter title. In Editor initials Surname & … (Eds.), *Book title* (pp. x–y). Publisher.", "Only the book title is in italics. The editors’ initials come before their surnames."],
 explain:"Cite the part you actually used. In an edited book, different chapters have different authors, so the chapter author goes first, and the editors are credited after “In”."},

{id:"cl-apa-web", group:"apa", title:"Web page by an organisation", lesson:"t4u4-l2", style:"APA 7",
 task:"Cite this web page in APA. The organisation is both the author and the website, so its name appears only once.",
 source:WATER,
 fields:[{label:"Reference list entry", tail:APA_END, bad:APA_BAD, segs:[
   {label:"Author", t:"Clean Rivers Network.", why:"When a group wrote the page, its full name is the author, followed by a full stop.", bad:[{re:"^\\(", msg:"Start with the author: the organisation’s name."}]},
   {label:"Date", t:"(2024, May 14).", why:"APA dates for web pages: (year, Month day).", bad:[{re:"14 May|May 14, 2024|2024-05", msg:"APA writes the date as (2024, May 14): year first, then month and day."},{re:"^\\(2024\\)\\.?$", msg:"The page gives an exact date, so include it: (2024, May 14)."}]},
   {label:"Title", t:"*How to test your tap water at home*.", alt:["*How to test your tap water at home.*"], why:"A page on a website: title in italics and sentence case, then a full stop.", itMsg:"The page title goes in italics.", capMsg:"Sentence case for the page title: “How to test your tap water at home”.", bad:[{re:"^[\"']", msg:"APA puts the title of a web page in italics, not in quotation marks."}]},
   {label:"URL", t:"https://www.cleanriversnetwork.example/advice/test-tap-water", why:"End with the URL. Leave out the site name when it’s the same as the author.", bad:[{re:"Clean Rivers", msg:"Leave out the site name when it’s the same as the author."},{re:"Retrieved", msg:"APA only adds a “Retrieved” date for pages that are designed to change over time."}]}]}],
 also:[["Clean Rivers Network. (2024, May 14). *How to test your tap water at home*. https://www.cleanriversnetwork.example/advice/test-tap-water"]],
 traps:[{a:["Clean Rivers Network. (2024, May 14). *How to test your tap water at home*. Clean Rivers Network. https://www.cleanriversnetwork.example/advice/test-tap-water"], expect:"site name"},
        {a:["Clean Rivers Network. (14 May 2024). *How to test your tap water at home*. https://www.cleanriversnetwork.example/advice/test-tap-water"], expect:"(2024, May 14)"},
        {a:["Clean Rivers Network. (2024, May 14). How to test your tap water at home. https://www.cleanriversnetwork.example/advice/test-tap-water"], expect:"italics"},
        {a:["*How to test your tap water at home*. (2024, May 14). https://www.cleanriversnetwork.example/advice/test-tap-water"], expect:"Author"}],
 hints:["Pattern: Organisation. (Year, Month Day). *Title of page*. URL", "The organisation is also the site, so don’t repeat its name before the URL."],
 explain:"Group authors are spelled out in full. APA leaves out the site name when it would just repeat the author, and only adds a retrieval date for pages meant to change (like a live dashboard)."},

{id:"cl-apa-report", group:"apa", title:"Report with a number", lesson:"t4u4-l2", style:"APA 7",
 task:"Cite this report in APA. The report number goes in brackets straight after the title.",
 source:HEAT,
 fields:[{label:"Reference list entry", tail:APA_END, bad:APA_BAD, segs:[
   {label:"Author", t:"Regional Health Observatory.", why:"The organisation is the author."},
   apaYear(2022),
   {label:"Title", t:"*Heat and health in cities: A 2022 update*", why:"Report titles are in italics and sentence case.", itMsg:"The report title goes in italics.", capMsg:"Sentence case for the title: “Heat and health in cities: A 2022 update”."},
   {label:"Report number", t:"(Report No. 7).", why:"The report number in round brackets after the title, not in italics, then a full stop.", notItMsg:"The report number isn’t in italics.", bad:[{re:"^\\.$", msg:"No full stop between the title and the report number: …update* (Report No. 7)."},{re:"number|Nr", f:"i", msg:"APA shortens it: (Report No. 7)."}]},
   {label:"URL", t:"https://www.rho.example/reports/heat-2022", why:"Then the URL. The publisher is left out because it’s the same as the author.", bad:[{re:"Regional Health", msg:"Leave out the publisher when it’s the same as the author."}]}]}],
 also:[["Regional Health Observatory. (2022). *Heat and health in cities: A 2022 update* (Report No. 7). https://www.rho.example/reports/heat-2022"]],
 traps:[{a:["Regional Health Observatory. (2022). *Heat and health in cities: A 2022 update (Report No. 7)*. https://www.rho.example/reports/heat-2022"], expect:"isn’t in italics"},
        {a:["Regional Health Observatory. (2022). *Heat and health in cities: A 2022 update* (Report No. 7). Regional Health Observatory. https://www.rho.example/reports/heat-2022"], expect:"same as the author"},
        {a:["Regional Health Observatory. (2022). *Heat and Health in Cities: A 2022 Update* (Report No. 7). https://www.rho.example/reports/heat-2022"], expect:"Sentence case"}],
 hints:["Pattern: Organisation. (Year). *Title* (Report No. x). URL"],
 explain:"Reports from governments, charities and agencies are **grey literature**: not peer-reviewed journal articles, but often essential. The report number helps readers find the exact document among many similar ones."},

{id:"cl-apa-intext", group:"apa", title:"In-text citations", lesson:"t4u4-l2", style:"APA 7",
 task:"You quote a sentence from **page 52** of the Okafor and Herrera (2023) article. Write (1) a parenthetical citation to put after the quotation, and (2) a narrative citation for a later sentence that names the authors as part of your sentence (paraphrasing, so no page number).",
 source:GARDEN,
 fields:[
  {label:"1. Parenthetical citation (after a quotation from page 52)", segs:[
   {label:"Authors", t:"(Okafor & Herrera,", why:"Inside the brackets, join two authors with “&”, then a comma.", bad:[{re:"\\band\\b", msg:"Inside brackets APA uses “&”: (Okafor & Herrera, …)."},{re:"N\\.|T\\.", msg:"In-text citations use surnames only."}]},
   {label:"Year", t:"2023,", why:"Then the year and a comma."},
   {label:"Page", t:"p. 52)", alt:["p. 52)."], why:"A direct quotation needs the page: “p. 52”.", bad:[{re:"pg|page", f:"i", msg:"APA writes “p.” for one page: p. 52."},{re:"^52\\)", msg:"Put “p.” before the page number."}]}]},
  {label:"2. Narrative citation (authors named in your sentence)", segs:[
   {label:"Authors", t:"Okafor and Herrera", why:"In the running text, write “and”, not “&”.", bad:[{re:"&", msg:"In a narrative citation the names are part of your sentence, so write “and”."},{re:"^\\(", msg:"In a narrative citation the names aren’t in brackets; only the year is."}]},
   {label:"Year", t:"(2023)", why:"The year in brackets straight after the names.", bad:[{re:"p\\.", msg:"No page number is needed when you paraphrase (APA encourages it but doesn’t require it)."}]}]}],
 also:[["(Okafor & Herrera, 2023, p. 52)", "Okafor and Herrera (2023)"]],
 traps:[{a:["(Okafor and Herrera, 2023, p. 52)", "Okafor and Herrera (2023)"], expect:"“&”"},
        {a:["(Okafor & Herrera, 2023)", "Okafor and Herrera (2023)"], expect:"page"},
        {a:["(Okafor & Herrera, 2023, pg. 52)", "Okafor and Herrera (2023)"], expect:"p. 52"},
        {a:["(Okafor & Herrera, 2023, p. 52)", "Okafor & Herrera (2023)"], expect:"write “and”"},
        {a:["(Okafor & Herrera 2023, p. 52)", "Okafor and Herrera (2023)"], expect:"then a comma"}],
 hints:["Parenthetical: (Surname & Surname, Year, p. x).", "Narrative: Surname and Surname (Year) … — “and” in your sentence, “&” inside brackets."],
 explain:"APA’s in-text citation is short on purpose: author and year lead the reader to the full entry in the reference list. Quotations always need a page (or paragraph) number so readers can find the exact words."},

{id:"cl-apa-etal", group:"apa", title:"Three or more authors", lesson:"t4u4-l2", style:"APA 7",
 task:"This article has three authors. Write (1) the parenthetical in-text citation, and (2) just the **authors part** of its reference-list entry.",
 source:COAST,
 fields:[
  {label:"1. Parenthetical citation", segs:[
   {label:"Authors", t:"(Taufa et al.,", why:"With three or more authors, APA 7 cites the first author and “et al.” from the very first citation.", bad:[{re:"Lin", msg:"For three or more authors, give only the first surname and “et al.”."},{re:"et al[^.]|etal", msg:"Write “et al.” with a full stop after “al”."}]},
   {label:"Year", t:"2024)", alt:["2024)."], why:"Then the year."}]},
  {label:"2. Authors part of the reference", tail:[{re:"^\\(?\\d{4}", msg:"Just the authors part here: in the full reference, the year comes next."}], segs:[
   {label:"Authors", t:"Taufa, S., Lin, M., & Adeyemi, O.", why:"In the reference list, APA 7 lists every author (up to 20), each surname first with initials, with “&” before the last.", bad:[{re:"et al", msg:"The reference list names all the authors (up to 20); “et al.” is only for in-text citations."},{re:"\\band\\b", msg:"Use “&” before the last author."}]}]}],
 also:[["(Taufa et al., 2024)", "Taufa, S., Lin, M., & Adeyemi, O."]],
 traps:[{a:["(Taufa, Lin, & Adeyemi, 2024)", "Taufa, S., Lin, M., & Adeyemi, O."], expect:"et al."},
        {a:["(Taufa et al., 2024)", "Taufa, S., et al."], expect:"all the authors"},
        {a:["(Taufa et al, 2024)", "Taufa, S., Lin, M., & Adeyemi, O."], expect:"full stop"}],
 hints:["In the text: (First author et al., Year).", "In the reference list: everyone, up to 20 authors."],
 explain:"“Et al.” is Latin for “and others”. APA 7 uses it from the first citation for three or more authors, but the reference list still credits everyone (up to 20 names; beyond that, a special pattern applies)."},

{id:"cl-apa-fix", group:"apa", title:"Fix a reference", lesson:"t4u4-l2", style:"APA 7",
 task:"Someone wrote this reference by hand, mixing styles. Correct it so it’s a proper APA 7 entry (the article details are on the card).",
 source:SHADE,
 fields:[{label:"Corrected reference", start:"Herrera, Tomás and Ngozi Okafor. 2022. \"Shade Trees and Walking: A Survey of Older Residents\". Urban Green Space Review 11(1): 5-19. doi:10.5555/ugsr.2022.0102", segs:SHADE_APA, tail:APA_END, bad:APA_BAD}],
 also:[["Herrera, T., & Okafor, N. (2022). Shade trees and walking: A survey of older residents. *Urban Green Space Review*, *11*(1), 5–19. https://doi.org/10.5555/ugsr.2022.0102"]],
 traps:[{a:["Herrera, Tomás and Ngozi Okafor. 2022. \"Shade Trees and Walking: A Survey of Older Residents\". Urban Green Space Review 11(1): 5-19. doi:10.5555/ugsr.2022.0102"], expect:"Authors"},
        {a:["Okafor, N., & Herrera, T. (2022). Shade trees and walking: A survey of older residents. *Urban Green Space Review*, *11*(1), 5–19. https://doi.org/10.5555/ugsr.2022.0102"], expect:"Authors"}],
 hints:["Fix one part at a time: authors (surname, initials, &), year in brackets, title in sentence case without quotes, journal and volume in italics, issue in brackets, page range, DOI as a link.", "Keep the authors in the order the article gives them: Herrera first."],
 explain:"Mixed-up references usually come from copying parts from different places. Working part by part, in the style’s order, is the reliable way to fix them."},

{id:"cl-apa-ai", group:"apa", title:"Citing an AI chat", lesson:"t4u4-l2", style:"APA 7",
 task:"You quote part of a chatbot’s answer in your paper (your teacher allows this, and your text says what you asked and how you used the reply). The tool lets you share the chat with a link, so APA’s current guidance (September 2025) says to cite **the chat itself**. Write the reference and the parenthetical citation. The tool is invented: **Quill**, from the company **Lumen Labs**.",
 source:QUILL,
 fields:[
  {label:"1. Reference list entry", tail:APA_END, bad:APA_BAD, segs:[
   {label:"Author", t:"Lumen Labs.", why:"The company that made the tool is the author (an AI can’t be an author).", bad:[{re:"^\\*?Quill", msg:"The author is the company that made the tool, Lumen Labs, not the tool itself."}]},
   {label:"Date", t:"(2026, March 3).", why:"The date of the chat: (year, Month day), then a full stop.", bad:[{re:"3 March|March 3, 2026|2026-03", msg:"APA writes the date as (2026, March 3): year first, then month and day."},{re:"^\\(2026\\)\\.?$", msg:"For a specific chat, give its full date: (2026, March 3)."}]},
   {label:"Chat title", t:"*Planning a school garden survey*", why:"The chat’s title in italics and sentence case.", itMsg:"The chat title goes in italics.", capMsg:"APA writes the chat title in sentence case: “Planning a school garden survey”.", bad:[{re:"^\\*?Quill", msg:"For a specific chat, the title is the chat’s title (Planning a school garden survey), not the tool’s name."}]},
   {label:"Description", t:"[Generative AI chat].", why:"A description in square brackets, [Generative AI chat], then a full stop.", notItMsg:"The description isn’t in italics.", bad:[{re:"Large language model", f:"i", msg:"For a specific chat, APA’s 2025 guidance uses [Generative AI chat]. [Large language model] is for citing the tool in general."},{re:"^\\(", msg:"Use square brackets for the description: [Generative AI chat]."}]},
   {label:"Model", t:"Quill 4.2.", alt:["Quill."], why:"The model name shown in the chat (or just the tool’s name), not in italics, then a full stop.", notItMsg:"The model name isn’t in italics: only the chat title is.", bad:[{re:"Version", f:"i", msg:"APA no longer asks for “Version …” by default: write the model name as the chat shows it (Quill 4.2)."}]},
   {label:"Share link", t:"https://quill.example/share/k7d2p9", why:"End with the chat’s share link, so readers can open this exact conversation.", bad:[{re:"https?://quill\\.example/?$", msg:"Use the chat’s share link (https://quill.example/share/k7d2p9), so readers can see this exact conversation. The home page is for citing the tool in general."}]}]},
  {label:"2. Parenthetical citation", segs:[
   {label:"Author", t:"(Lumen Labs,", why:"The company, then a comma.", bad:[{re:"Quill", msg:"Cite the company, Lumen Labs, not the tool."}]},
   {label:"Year", t:"2026)", alt:["2026)."], why:"Then just the year.", bad:[{re:"March|\\b3\\b", msg:"In the text, give just the year: (Lumen Labs, 2026)."}]}]}],
 also:[["Lumen Labs. (2026, March 3). *Planning a school garden survey* [Generative AI chat]. Quill. https://quill.example/share/k7d2p9", "(Lumen Labs, 2026)"],
       ["Lumen Labs. (2026, March 3). *Planning a school garden survey* [Generative AI chat]. Quill 4.2. https://quill.example/share/k7d2p9 ", " ( Lumen Labs, 2026 )".replace("( ", "(").replace(" )", ")")]],
 traps:[{a:["Quill. (2026, March 3). *Planning a school garden survey* [Generative AI chat]. Quill 4.2. https://quill.example/share/k7d2p9", "(Quill, 2026)"], expect:"company"},
        {a:["Lumen Labs. (2026, March 3). *Planning a school garden survey* (Generative AI chat). Quill 4.2. https://quill.example/share/k7d2p9", "(Lumen Labs, 2026)"], expect:"square brackets"},
        {a:["Lumen Labs. (2026). *Quill* (Version 4.2) [Large language model]. https://quill.example", "(Lumen Labs, 2026)"], expect:"full date"},
        {a:["Lumen Labs. (2026, March 3). *Planning a school garden survey* [Large language model]. Quill 4.2. https://quill.example/share/k7d2p9", "(Lumen Labs, 2026)"], expect:"[Generative AI chat]"},
        {a:["Lumen Labs. (2026, March 3). *Planning a School Garden Survey* [Generative AI chat]. Quill 4.2. https://quill.example/share/k7d2p9", "(Lumen Labs, 2026)"], expect:"sentence case"},
        {a:["Lumen Labs. (2026, March 3). *Planning a school garden survey* [Generative AI chat]. Quill 4.2. https://quill.example", "(Lumen Labs, 2026)"], expect:"share link"},
        {a:["Lumen Labs. (2026, March 3). *Planning a school garden survey* [Generative AI chat]. Quill 4.2. https://quill.example/share/k7d2p9", "(Lumen Labs, 2026, March 3)"], expect:"just the year"}],
 hints:["Pattern: Company. (Year, Month Day). *Chat title in sentence case* [Generative AI chat]. Model name. Share link", "In the text: (Company, Year)."],
 explain:"APA updated its AI guidance in September 2025 (it’s now kept on APA’s page of AI reference examples). Most tools can now share a chat as a link, so when it helps your readers, cite the **specific chat**: the company as author, the chat’s date and title, [Generative AI chat], the model, then the share link. If you can’t share the chat, cite the tool in general instead, for example: Lumen Labs. (2026). *Quill* [Large language model]. https://quill.example (the year the tool was last updated). Version numbers are no longer needed by default, and your prompts don’t go in the reference: describe them in your text. Rules for AI use differ between teachers, universities and journals, so check yours first."},

/* ================= MLA ================= */
{id:"cl-mla-article", group:"mla", title:"Journal article", lesson:"t4u4-l3", style:"MLA 9",
 task:"Write the MLA works-cited entry for this article.",
 source:GARDEN,
 fields:[{label:"Works-cited entry", segs:GARDEN_MLA}],
 also:[["Okafor, Ngozi, and Tomás Herrera. “Community Gardens and Neighbourhood Trust: Evidence from Three Cities.” *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."]],
 traps:[{a:["Okafor, Ngozi, and Tomás Herrera. Community Gardens and Neighbourhood Trust: Evidence from Three Cities. *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"quotation marks"},
        {a:["Okafor, Ngozi, and Herrera, Tomás. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"Only the first author"},
        {a:["Okafor, Ngozi, and Tomás Herrera. \"Community gardens and neighbourhood trust: Evidence from three cities.\" *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"title case"},
        {a:["Okafor, Ngozi, and Tomás Herrera. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities\". *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"inside the quotation marks"},
        {a:["Okafor, Ngozi, & Tomás Herrera. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review*, vol. 12, no. 3, 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"“and”"},
        {a:["Okafor, Ngozi, and Tomás Herrera. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review*, 12(3), 2023, pp. 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"vol. 12"},
        {a:["Okafor, Ngozi, and Tomás Herrera. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review*, vol. 12, no. 3, 2023, 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"pp."}],
 hints:["Pattern: Surname, First name, and First name Surname. “Title of Article.” *Journal*, vol. x, no. x, Year, pp. x–y, https://doi.org/….", "MLA uses title case for the article title, inside quotation marks, with the full stop inside the closing mark."],
 explain:"MLA is built around **containers**: the article sits inside a journal, which has a volume and issue. Each piece of information is followed by a comma until the end of the container, then a full stop."},

{id:"cl-mla-book", group:"mla", title:"Book (later edition)", lesson:"t4u4-l3", style:"MLA 9",
 task:"Write the MLA works-cited entry for this book (second edition).",
 source:SALT,
 fields:[{label:"Works-cited entry", segs:[
   {label:"Author", t:"Raman, Priya.", why:"Surname, first name, full stop.", bad:[{re:"P\\.$|, P\\.", msg:"MLA uses the full first name: Raman, Priya."}]},
   {label:"Title", t:"*Salt and Stone: A Short History of Coastal Trade*.", alt:["*Salt and Stone: A Short History of Coastal Trade.*"], why:"Book titles in italics and title case, then a full stop.", itMsg:"Book titles go in italics.", capMsg:"MLA uses title case: Salt and Stone: A Short History of Coastal Trade."},
   {label:"Edition", t:"2nd ed.,", why:"The edition, shortened to “2nd ed.”, then a comma.", bad:[{re:"\\(", msg:"No brackets around the edition in MLA."},{re:"Second|edition", f:"i", msg:"Shorten it to “2nd ed.”, then a comma."}]},
   {label:"Publisher", t:"Harbour Light Press,", why:"The publisher, then a comma.", bad:[{re:":", msg:"MLA 9 doesn’t include the publisher’s city."}]},
   {label:"Year", t:"2021.", why:"The year comes last, then a full stop."}]}],
 also:[["Raman, Priya. *Salt and Stone: A Short History of Coastal Trade.* 2nd ed., Harbour Light Press, 2021."]],
 traps:[{a:["Raman, Priya. *Salt and Stone: A Short History of Coastal Trade*. 2nd ed., Harbour Light Press, 2021"], expect:"Year"},
        {a:["Raman, P. (2021). *Salt and stone: A short history of coastal trade* (2nd ed.). Harbour Light Press."], expect:"full first name"},
        {a:["Raman, Priya. *Salt and stone: A short history of coastal trade*. 2nd ed., Harbour Light Press, 2021."], expect:"title case"},
        {a:["Raman, Priya. *Salt and Stone: A Short History of Coastal Trade*. Harbour Light Press, 2021."], expect:"Edition"}],
 hints:["Pattern: Surname, First name. *Title in Title Case*. 2nd ed., Publisher, Year."],
 explain:"In MLA the year comes near the end. In literature and the humanities, who wrote what usually matters more than how recent it is, so the author and title lead."},

{id:"cl-mla-web", group:"mla", title:"Web page by an organisation", lesson:"t4u4-l3", style:"MLA 9",
 task:"Write the MLA works-cited entry for this page. When an organisation is both the author and the publisher, MLA starts with the title instead of repeating the name. Here the website’s name is the organisation, so it appears once, as the container.",
 source:WATER,
 fields:[{label:"Works-cited entry", segs:[
   mlaTitleQ("How to Test Your Tap Water at Home.", "The page title in quotation marks and title case, full stop inside the closing mark. (No author: the organisation is also the publisher.)"),
   {label:"Website", t:"*Clean Rivers Network*,", why:"The website’s name in italics (it’s the container), then a comma.", itMsg:"The website’s name goes in italics."},
   {label:"Date", t:"14 May 2024,", why:"MLA dates are day month year, then a comma.", bad:[{re:"May 14", msg:"MLA writes dates day first: 14 May 2024."},{re:"\\(", msg:"No brackets around the date in MLA."}]},
   {label:"URL", t:"www.cleanriversnetwork.example/advice/test-tap-water.", alt:["https://www.cleanriversnetwork.example/advice/test-tap-water."], why:"The URL (MLA lets you leave out https://), then a full stop."},
   {label:"Access date (optional)", re:"Accessed \\d{1,2} (?:Jan\\.|Feb\\.|Mar\\.|Apr\\.|May|June|July|Aug\\.|Sept\\.|Oct\\.|Nov\\.|Dec\\.) \\d{4}\\.", opt:true, example:"Accessed 2 June 2026.", why:"Optional: “Accessed”, the day you looked at the page (day, month, year), then a full stop.", bad:[
     {re:"January|February|March|April|August|September|October|November|December", msg:"In a works-cited list, MLA shortens months longer than four letters: Jan., Feb., Mar., Apr., Aug., Sept., Oct., Nov., Dec. (May, June and July stay as they are)."},
     {re:"^Accessed [A-Z]", msg:"MLA writes dates day first: Accessed 2 June 2026."},
     {re:"^(?!Accessed)", msg:"Start the access date with “Accessed”: Accessed 2 June 2026."}]}],
   bad:[{re:"^Clean Rivers Network\\.", msg:"When the organisation is also the publisher, MLA starts with the title, not the organisation."}]}],
 also:[["“How to Test Your Tap Water at Home.” *Clean Rivers Network*, 14 May 2024, https://www.cleanriversnetwork.example/advice/test-tap-water."],
       ["\"How to Test Your Tap Water at Home.\" *Clean Rivers Network*, 14 May 2024, www.cleanriversnetwork.example/advice/test-tap-water. Accessed 2 June 2026."]],
 traps:[{a:["Clean Rivers Network. \"How to Test Your Tap Water at Home.\" *Clean Rivers Network*, 14 May 2024, www.cleanriversnetwork.example/advice/test-tap-water."], expect:"starts with the title"},
        {a:["\"How to Test Your Tap Water at Home.\" *Clean Rivers Network*, May 14, 2024, www.cleanriversnetwork.example/advice/test-tap-water."], expect:"day first"},
        {a:["*How to Test Your Tap Water at Home*. *Clean Rivers Network*, 14 May 2024, www.cleanriversnetwork.example/advice/test-tap-water."], expect:"quotation marks"}],
 hints:["Pattern: “Title of Page.” *Website*, Day Month Year, URL.", "Organisation is author and publisher? Start with the title."],
 explain:"MLA avoids saying the same name twice. Its dates run day–month–year, and the access date is optional: add it when a page has no date or is likely to change."},

{id:"cl-mla-intext", group:"mla", title:"In-text citations", lesson:"t4u4-l3", style:"MLA 9",
 task:"Write MLA parenthetical citations for (1) a quotation from **page 52** of Okafor and Herrera, and (2) a quotation from **page 112** of the article by Taufa, Lin and Adeyemi.",
 source:{kind:"Two sources", rows:[["Source 1","Ngozi Okafor and Tomás Herrera (2023), quoted from page 52"],["Source 2","Sione Taufa, Mei Lin and Oluwaseun Adeyemi (2024), quoted from page 112"]]},
 fields:[
  {label:"1. Two authors, page 52", segs:[
   {label:"Authors", t:"(Okafor and Herrera", why:"Two authors: both surnames joined by “and”.", bad:[{re:"&", msg:"MLA writes “and”, not “&”."}]},
   {label:"Page", t:"52)", alt:["52)."], why:"Then the page number: no comma, no “p.”.", bad:[{re:",", msg:"MLA puts no comma between the author and the page."},{re:"p\\.|pg", msg:"MLA writes just the number, without “p.”."},{re:"2023", msg:"MLA’s in-text citation has the author and page, not the year."}]}]},
  {label:"2. Three authors, page 112", segs:[
   {label:"Authors", t:"(Taufa et al.", why:"Three or more authors: the first surname and “et al.”.", bad:[{re:"Lin", msg:"For three or more authors, use the first surname and “et al.”."},{re:"et al[^.]|etal", msg:"Write “et al.” with a full stop."}]},
   {label:"Page", t:"112)", alt:["112)."], why:"Then the page, with no comma.", bad:[{re:",", msg:"No comma before the page in MLA."}]}]}],
 also:[["(Okafor and Herrera 52)", "(Taufa et al. 112)"]],
 traps:[{a:["(Okafor & Herrera 52)", "(Taufa et al. 112)"], expect:"“and”"},
        {a:["(Okafor and Herrera, 52)", "(Taufa et al. 112)"], expect:"no comma"},
        {a:["(Okafor and Herrera, 2023, p. 52)", "(Taufa et al. 112)"], expect:"Page"},
        {a:["(Okafor and Herrera 52)", "(Taufa, Lin, and Adeyemi 112)"], expect:"et al."}],
 hints:["MLA: (Surname page) — no comma, no “p.”, no year."],
 explain:"MLA cites by author and page because readers in the humanities often check the exact wording. The year lives in the works-cited list."},

{id:"cl-mla-fix", group:"mla", title:"Fix a reference", lesson:"t4u4-l3", style:"MLA 9",
 task:"This entry is in APA, but your essay uses MLA. Rewrite it as an MLA 9 works-cited entry (details on the card).",
 source:SHADE,
 fields:[{label:"MLA works-cited entry", start:"Herrera, T., & Okafor, N. (2022). Shade trees and walking: A survey of older residents. *Urban Green Space Review*, *11*(1), 5–19. https://doi.org/10.5555/ugsr.2022.0102", segs:[
   {label:"Authors", t:"Herrera, Tomás, and Ngozi Okafor.", why:"MLA: first author surname first with full first name, then “, and” and the second author in normal order.", bad:[{re:"&", msg:"MLA writes “and”, not “&”."},{re:"T\\.|N\\.", msg:"MLA uses full first names, not initials."}]},
   mlaTitleQ("Shade Trees and Walking: A Survey of Older Residents."),
   {label:"Journal", t:"*Urban Green Space Review*,", why:"The journal in italics, then a comma.", itMsg:"The journal name goes in italics."},
   {label:"Volume", t:"vol. 11,", why:"“vol. 11,” (not in italics).", notItMsg:"The volume isn’t in italics in MLA.", bad:[{re:"^\\*?11\\*?\\(", msg:"MLA doesn’t use the APA form 11(1): write “vol. 11, no. 1,”."}]},
   {label:"Issue", t:"no. 1,", why:"“no. 1,”."},
   {label:"Year", t:"2022,", why:"The year, no brackets, then a comma.", bad:[{re:"\\(", msg:"No brackets around the year in MLA."}]},
   {label:"Pages", t:"pp. 5–19,", why:"“pp.” and the page range, then a comma."},
   doiLink("10.5555/ugsr.2022.0102", ".")]}],
 also:[["Herrera, Tomás, and Ngozi Okafor. “Shade Trees and Walking: A Survey of Older Residents.” *Urban Green Space Review*, vol. 11, no. 1, 2022, pp. 5–19, https://doi.org/10.5555/ugsr.2022.0102."]],
 traps:[{a:["Herrera, T., & Okafor, N. (2022). Shade trees and walking: A survey of older residents. *Urban Green Space Review*, *11*(1), 5–19. https://doi.org/10.5555/ugsr.2022.0102"], expect:"Authors"},
        {a:["Herrera, Tomás, and Ngozi Okafor. \"Shade Trees and Walking: A Survey of Older Residents.\" *Urban Green Space Review*, *vol. 11*, no. 1, 2022, pp. 5–19, https://doi.org/10.5555/ugsr.2022.0102."], expect:"isn’t in italics"}],
 hints:["Change one thing at a time: names, title in quotes and title case, vol./no. labels, year after the issue, pp., full stop at the end."],
 explain:"Switching styles is mostly moving the same facts around. Reference managers like Zotero do it with one click, but knowing the pattern lets you spot when they get it wrong."},

/* ================= Chicago ================= */
{id:"cl-chi-bib", group:"chicago", title:"Bibliography entry: book", lesson:"t4u4-l3", style:"Chicago 18 (notes and bibliography)",
 task:"Write the Chicago bibliography entry for this book (second edition). Chicago’s 18th edition no longer requires the publisher’s city.",
 source:SALT,
 fields:[{label:"Bibliography entry", segs:[
   {label:"Author", t:"Raman, Priya.", why:"Surname, first name, full stop.", bad:[{re:", P\\.", msg:"Chicago uses the author’s name as it appears on the book: Raman, Priya."}]},
   {label:"Title", t:"*Salt and Stone: A Short History of Coastal Trade*.", alt:["*Salt and Stone: A Short History of Coastal Trade.*"], why:"The title in italics and headline-style capitals, then a full stop.", itMsg:"Book titles go in italics.", capMsg:"Chicago capitalises titles headline-style: Salt and Stone: A Short History of Coastal Trade."},
   {label:"Edition", t:"2nd ed.", why:"The edition, then a full stop: 2nd ed.", bad:[{re:"\\(", msg:"No brackets around the edition in a Chicago bibliography."},{re:"ed\\.,", msg:"In Chicago the edition ends with a full stop (2nd ed.), not a comma."}]},
   {label:"Publisher", t:"Harbour Light Press,", why:"The publisher, then a comma.", bad:[{re:"^,$", msg:"After the edition, Chicago uses a full stop (2nd ed.), not a comma."},{re:":", msg:"Chicago’s 18th edition no longer requires the publisher’s city, and the card doesn’t give one, so leave it out."}]},
   {label:"Year", t:"2021.", why:"The year, then a full stop."}]}],
 also:[["Raman, Priya. *Salt and Stone: A Short History of Coastal Trade.* 2nd ed. Harbour Light Press, 2021."]],
 traps:[{a:["Raman, Priya. *Salt and Stone: A Short History of Coastal Trade*. 2nd ed., Harbour Light Press, 2021."], expect:"full stop (2nd ed.)"},
        {a:["Raman, Priya. *Salt and stone: A short history of coastal trade*. 2nd ed. Harbour Light Press, 2021."], expect:"headline-style"},
        {a:["Raman, Priya. Salt and Stone: A Short History of Coastal Trade. 2nd ed. Harbour Light Press, 2021."], expect:"italics"}],
 hints:["Pattern: Surname, First name. *Title*. 2nd ed. Publisher, Year."],
 explain:"Chicago’s bibliography looks a lot like MLA’s, but the small punctuation differs (here: “2nd ed.” ends with a full stop). Chicago’s 18th edition (2024) made the place of publication optional, so modern entries usually leave it out."},

{id:"cl-chi-note", group:"chicago", title:"Footnote: journal article", lesson:"t4u4-l3", style:"Chicago 18 (notes and bibliography)",
 task:"Write the first full footnote for a quotation from **page 52** of this article (type just the note, without the note number). Notes use commas between parts and names in normal order.",
 source:GARDEN,
 fields:[{label:"Footnote", bad:[{re:"^\\d+\\.$", msg:"Leave out the note number: your word processor adds it."}], segs:[
   {label:"Authors", t:"Ngozi Okafor and Tomás Herrera,", why:"In a note, names are in normal order (first name first), joined by “and”, then a comma.", bad:[{re:"^Okafor,", msg:"Notes give names first name first (Ngozi Okafor); only the bibliography reverses the first author."},{re:"&", msg:"Chicago writes “and”."}]},
   {label:"Title", t:"\"Community Gardens and Neighbourhood Trust: Evidence from Three Cities,\"", why:"The article title in quotation marks and headline-style capitals, with the comma inside the closing mark.", capMsg:"Chicago capitalises titles headline-style.", bad:[{re:"\"\\s*,$|\",", msg:"Put the comma inside the quotation marks: …Cities,”"},{re:"\\.\"$", msg:"In a note, the title ends with a comma (inside the quotation marks), not a full stop."}]},
   {label:"Journal", t:"*Urban Green Space Review*", why:"The journal in italics, with no comma after it.", itMsg:"The journal name goes in italics.", bad:[{re:",$", msg:"No comma between the journal and the volume number in Chicago."}]},
   {label:"Volume", t:"12,", why:"The volume number, then a comma.", bad:[{re:"^,$", msg:"No comma between the journal and the volume number in Chicago."},{re:"vol", f:"i", msg:"Chicago doesn’t write “vol.” here: just the number after the journal."}]},
   {label:"Issue", t:"no. 3", why:"“no. 3”.", bad:[{re:"^\\(", msg:"In a note, write the issue as “no. 3”, after the volume and a comma: 12, no. 3."}]},
   {label:"Year", t:"(2023):", why:"The year in brackets, then a colon before the page.", bad:[{re:"\\(2023\\),", msg:"Use a colon after the year when a page follows: (2023): 52."}]},
   {label:"Page", t:"52,", why:"The page you cite (just the number), then a comma.", bad:[{re:"p\\.", msg:"Chicago notes give the page number without “p.” here."},{re:"45", msg:"A note cites the page you used (52), not the article’s whole range."}]},
   doiLink("10.5555/ugsr.2023.0345", ".")]}],
 also:[["Ngozi Okafor and Tomás Herrera, “Community Gardens and Neighbourhood Trust: Evidence from Three Cities,” *Urban Green Space Review* 12, no. 3 (2023): 52, https://doi.org/10.5555/ugsr.2023.0345."]],
 traps:[{a:["Okafor, Ngozi, and Tomás Herrera. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review* 12, no. 3 (2023): 45–67. https://doi.org/10.5555/ugsr.2023.0345."], expect:"first name first"},
        {a:["Ngozi Okafor and Tomás Herrera, \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities\", *Urban Green Space Review* 12, no. 3 (2023): 52, https://doi.org/10.5555/ugsr.2023.0345."], expect:"inside the quotation marks"},
        {a:["Ngozi Okafor and Tomás Herrera, \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities,\" *Urban Green Space Review* 12, no. 3 (2023): 45–67, https://doi.org/10.5555/ugsr.2023.0345."], expect:"page you used"},
        {a:["Ngozi Okafor and Tomás Herrera, \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities,\" *Urban Green Space Review*, 12, no. 3 (2023): 52, https://doi.org/10.5555/ugsr.2023.0345."], expect:"No comma"}],
 hints:["Pattern: First Last and First Last, “Title,” *Journal* vol, no. x (Year): page, https://doi.org/….", "Notes use commas between parts; the bibliography uses full stops."],
 explain:"A footnote is written like a sentence: names in normal order, parts separated by commas, and the exact page you used. Later notes for the same source are shortened, for example: Okafor and Herrera, “Community Gardens,” 54. (If your paper has a full bibliography, Chicago also allows short notes from the first one, so check what your teacher wants.)"},

{id:"cl-chi-ad", group:"chicago", title:"Author-date reference", lesson:"t4u4-l3", style:"Chicago 18 (author-date)",
 task:"Chicago also has an author-date system, used in many sciences and social sciences. Write this article’s reference-list entry in Chicago author-date.",
 source:GARDEN,
 fields:[{label:"Reference list entry", segs:[
   {label:"Authors", t:"Okafor, Ngozi, and Tomás Herrera.", why:"First author reversed, “, and”, second author in normal order, full stop.", bad:[{re:"&", msg:"Chicago writes “and”."},{re:"N\\.", msg:"Use the first names as the article gives them."}]},
   {label:"Year", t:"2023.", why:"In author-date, the year comes straight after the authors, without brackets, then a full stop.", bad:[{re:"\\(", msg:"No brackets around the year in a Chicago author-date reference list."}]},
   mlaTitleQ("Community Gardens and Neighbourhood Trust: Evidence from Three Cities.", "The title in quotation marks and headline-style capitals, full stop inside the closing mark.", true),
   {label:"Journal", t:"*Urban Green Space Review*", why:"The journal in italics, no comma.", itMsg:"The journal name goes in italics."},
   {label:"Volume", t:"12", why:"The volume number, straight after the journal (no comma).", bad:[{re:"^,$", msg:"No comma between the journal and the volume number in Chicago."},{re:"vol", f:"i", msg:"Chicago doesn’t write “vol.” here: just the number after the journal."}]},
   {label:"Issue", t:"(3):", why:"The issue in brackets after a space, then a colon.", bad:[{re:"no\\.", msg:"When there’s no month or season, a Chicago author-date reference puts the issue in brackets after the volume: 12 (3): 45–67."}]},
   {label:"Pages", t:"45–67.", why:"The page range, then a full stop."},
   doiLink("10.5555/ugsr.2023.0345", ".")]}],
 also:[["Okafor, Ngozi, and Tomás Herrera. 2023. “Community Gardens and Neighbourhood Trust: Evidence from Three Cities.” *Urban Green Space Review* 12 (3): 45–67. https://doi.org/10.5555/ugsr.2023.0345."]],
 traps:[{a:["Okafor, Ngozi, and Tomás Herrera. (2023). \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review* 12 (3): 45–67. https://doi.org/10.5555/ugsr.2023.0345."], expect:"No brackets"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"Authors"},
        {a:["Okafor, Ngozi, and Tomás Herrera. 2023. \"Community Gardens and Neighbourhood Trust: Evidence from Three Cities.\" *Urban Green Space Review* 12, no. 3: 45–67. https://doi.org/10.5555/ugsr.2023.0345."], expect:"Issue"}],
 hints:["Pattern: Surname, First, and First Surname. Year. “Title.” *Journal* vol (issue): pages. https://doi.org/…."],
 explain:"Chicago author-date and APA both put the year after the authors, but Chicago keeps full first names, headline-style titles in quotation marks, and a different volume–issue pattern."},

{id:"cl-chi-fix", group:"chicago", title:"Fix a bibliography entry: chapter", lesson:"t4u4-l3", style:"Chicago 18 (notes and bibliography)",
 task:"This chapter reference is in APA. Rewrite it as a Chicago bibliography entry: “In *Book*, edited by …, pages. Publisher, Year.”",
 source:PLACES,
 fields:[{label:"Chicago bibliography entry", start:"Watanabe, K. (2020). Mapping memory in rebuilt towns. In A. Diallo & L. Fernández (Eds.), *Places of memory and repair* (pp. 88–112). Northgate University Press.", segs:[
   {label:"Author", t:"Watanabe, Kenji.", why:"Surname, first name, full stop.", bad:[{re:"K\\.", msg:"Use the full first name: Watanabe, Kenji."}]},
   mlaTitleQ("Mapping Memory in Rebuilt Towns.", "The chapter title in quotation marks and headline-style capitals, full stop inside the closing mark.", true),
   {label:"Book", t:"In *Places of Memory and Repair*,", why:"“In”, the book title in italics (headline style), then a comma.", itMsg:"The book title goes in italics.", capMsg:"Headline-style capitals for the book title: Places of Memory and Repair."},
   {label:"Editors", t:"edited by Amara Diallo and Lucía Fernández", why:"“edited by”, then the editors first name first, joined by “and”.", bad:[{re:"Eds?\\.", msg:"Chicago writes “edited by” before the editors in a bibliography."},{re:"&", msg:"Use “and” between the editors."},{re:"A\\. Diallo|Diallo, A", msg:"Use the editors’ full first names, first name first: Amara Diallo and Lucía Fernández."},{re:"^Edited", msg:"“edited by” starts with a small letter here, because it follows a comma."}]},
   {label:"Pages (optional)", re:", 88–112\\.|(?<=Fernández)\\.(?! ?\\d)", example:", 88–112.", join:"", why:"After the editors: a comma, the chapter’s page range and a full stop (…Fernández, 88–112.). Chicago’s 18th edition lets you leave the pages out of a bibliography entry: then put just a full stop (…Fernández.).", bad:[
     {re:"pp?\\.", msg:"Chicago bibliographies give the page range without “pp.”: …Fernández, 88–112."},
     {re:"\\(", msg:"No brackets around the pages in a Chicago bibliography: …Fernández, 88–112."},
     {re:"^\\.? ?88", msg:"Put a comma between the editors and the page range: …Fernández, 88–112."}]},
   {label:"Publisher", t:"Northgate University Press,", why:"The publisher, then a comma."},
   {label:"Year", t:"2020.", why:"The year, then a full stop."}]}],
 also:[["Watanabe, Kenji. “Mapping Memory in Rebuilt Towns.” In *Places of Memory and Repair*, edited by Amara Diallo and Lucía Fernández, 88–112. Northgate University Press, 2020."],
       ["Watanabe, Kenji. “Mapping Memory in Rebuilt Towns.” In *Places of Memory and Repair*, edited by Amara Diallo and Lucía Fernández. Northgate University Press, 2020."],
       ["Watanabe, Kenji. \"Mapping Memory in Rebuilt Towns.\" In *Places of Memory and Repair*, edited by Amara Diallo and Lucía Fernández, 88-112. Northgate University Press, 2020."]],
 traps:[{a:["Watanabe, Kenji. \"Mapping Memory in Rebuilt Towns.\" In *Places of Memory and Repair*, edited by Amara Diallo & Lucía Fernández, 88–112. Northgate University Press, 2020."], expect:"“and”"},
        {a:["Watanabe, Kenji. \"Mapping Memory in Rebuilt Towns.\" In *Places of Memory and Repair*, edited by Amara Diallo and Lucía Fernández, pp. 88–112. Northgate University Press, 2020."], expect:"without “pp.”"},
        {a:["Watanabe, K. (2020). Mapping memory in rebuilt towns. In A. Diallo & L. Fernández (Eds.), *Places of memory and repair* (pp. 88–112). Northgate University Press."], expect:"Author"}],
 hints:["Pattern: Surname, First. “Chapter Title.” In *Book Title*, edited by First Last and First Last, pages. Publisher, Year.", "Chicago’s 18th edition makes the chapter’s page range optional in the bibliography. If you include it, it has no “pp.” or brackets."],
 explain:"The same facts, rearranged: Chicago spells out “edited by”, keeps full names and headline capitals, and moves the year to the end of a bibliography entry. Since the 18th edition (2024), the chapter’s page range is optional in a bibliography entry (a footnote still gives the exact page you used)."},

/* ================= General ================= */
{id:"cl-doi", group:"general", title:"DOIs as links", lesson:"t4u4-l1", style:"Any style",
 task:"A **DOI** (digital object identifier) is a permanent ID for an article. APA 7, MLA 9 and Chicago 18 all prefer writing it as a link starting **https://doi.org/**. Rewrite each one in that form.",
 source:{kind:"DOIs found in the wild", rows:[["On an old PDF","doi:10.5555/ugsr.2023.0345"],["In an old reference list","http://dx.doi.org/10.5555/rhj.2019.112"]]},
 fields:[
  {label:"1. doi:10.5555/ugsr.2023.0345", tail:DOI_END, segs:[doiLink("10.5555/ugsr.2023.0345")]},
  {label:"2. http://dx.doi.org/10.5555/rhj.2019.112", tail:DOI_END, segs:[doiLink("10.5555/rhj.2019.112")]}],
 also:[["https://doi.org/10.5555/UGSR.2023.0345", "https://doi.org/10.5555/rhj.2019.112"]],
 traps:[{a:["doi:10.5555/ugsr.2023.0345", "https://doi.org/10.5555/rhj.2019.112"], expect:"links"},
        {a:["https://doi.org/10.5555/ugsr.2023.0345", "http://dx.doi.org/10.5555/rhj.2019.112"], expect:"https://doi.org/"},
        {a:["https://doi.org/10.5555/ugsr.2023.0345", "https://doi.org/10.5555/rhj.2019"], expect:"Expected"}],
 hints:["Keep everything from “10.” onwards exactly as it is, and put https://doi.org/ in front."],
 explain:"A DOI never changes, even if the publisher moves the article, so the https://doi.org/ link keeps working. Every DOI starts with “10.”. (The ones here use 10.5555, a prefix Crossref uses for tests and examples, and they’re made up, so they won’t open a real article.)"},

{id:"cl-generated", group:"general", title:"Fix a generated citation", lesson:"t4u4-l5", style:"APA 7",
 task:"A free citation generator produced this APA reference from the article’s web page. It looks official, but it’s wrong in several places. Correct it using the card.",
 source:GARDEN,
 fields:[{label:"Corrected APA reference", start:"OKAFOR, N., & HERRERA, T. (2023). Community Gardens And Neighbourhood Trust: Evidence From Three Cities. Urban Green Space Review, 12, 45-67.", segs:GARDEN_APA, tail:APA_END, bad:APA_BAD}],
 also:[["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67. https://doi.org/10.5555/ugsr.2023.0345"]],
 traps:[{a:["OKAFOR, N., & HERRERA, T. (2023). Community Gardens And Neighbourhood Trust: Evidence From Three Cities. Urban Green Space Review, 12, 45-67."], expect:"capital"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*, 45–67. https://doi.org/10.5555/ugsr.2023.0345"], expect:"Issue"},
        {a:["Okafor, N., & Herrera, T. (2023). Community gardens and neighbourhood trust: Evidence from three cities. *Urban Green Space Review*, *12*(3), 45–67."], expect:"DOI"}],
 hints:["Check each part against the card: names, capitals, italics, the missing issue number and the missing DOI.", "Generators often copy the web page’s capitals and drop details they couldn’t find."],
 explain:"Citation generators and reference managers save hours, but they copy whatever the web page’s data says: capitals, missing issues and missing DOIs included. Always compare the output with the source."}
];
})();
