/* Track 1 · Unit 8 · Documents that work */
ICA.addUnit({
  id:"t1u8", track:"t1", n:8, title:"Documents that work", icon:"📄",
  apps:{ms:"Word", google:"Google Docs", libre:"LibreOffice Writer", apple:"Pages"},
  blurb:"Make documents that stay tidy when they change: styles and headings, pages that lay themselves out, real lists, tables and images, reviewing with other people, and files that everyone can open, read and trust.",
  goals:[
    "Use styles and heading levels so the outline, table of contents and layout look after themselves",
    "Set paper size, margins, breaks, sections, headers, footers and page numbers instead of pushing text around with spaces",
    "Make real lists, data tables with header rows, and images with sensible wrapping, captions and alt text",
    "Review with others using comments, tracked changes or suggestions, comparison and one shared file",
    "Check accessibility, choose the right file format, export a good PDF, and know when templates and mail merge save time"
  ],
  read:[
    {book:"wss", where:"Chapter 3, “Creating and Working in Documents”: Sections 3.1–3.4 (Word) and 3.6–3.9 (Google Docs)", note:"The book’s main document chapter. It uses Word and Google Docs; the ideas carry over to LibreOffice Writer and Pages. Some menu names have changed since 2023: the lessons say where."},
    {book:"wss", where:"Chapter 4, “Document Preparation”: Section 4.2 “Working with Graphics and Text Tools in Microsoft Word” and Section 4.3 “Managing Long Documents in Microsoft Word”", note:"Tables, pictures, captions and the table of contents. Sections 4.5 and 4.6 cover the same in Google Docs."},
    {book:"wss", where:"Chapter 5, “Advanced Document Preparation”: Section 5.1 “Creating Different Document Types in Microsoft Word” and Section 5.2 “Mail Merge in Microsoft Word”", note:"Templates and mail merge, for Lesson 5."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u8-l1", title:"Structure with styles and headings", minutes:50,
   goals:[
     "Explain why styles beat formatting each paragraph by hand",
     "Build a sensible outline with heading levels, without skipping levels",
     "Use the navigation pane or outline, and insert a table of contents that updates itself",
     "Tell a paragraph break from a line break, and read the hidden formatting marks"
   ],
   learn:[
    {h:"What a document really is", body:[
      {lead:"A document looks like a page of text. Underneath, it is a list of paragraphs, and each paragraph carries a label saying what kind of paragraph it is."},
      "A [[word-processor]] is an app for writing and laying out documents: Microsoft Word, Google Docs, LibreOffice Writer and Apple Pages are the best-known ones, and all four can be used for free (Word through Microsoft 365 on the web with a free Microsoft account; Pages on Apple devices). They look different, but they share the same ideas. Learn the ideas and you can move between them.",
      "Think of moving house. You could write “KITCHEN” in big red letters on one box, “kitchen” in small blue letters on the next, and draw a fork on the third. People would probably work it out. Or you could put the same printed label on every kitchen box. Then anyone, including a machine sorting boxes, knows exactly what each one is, and if you decide kitchen boxes should go to the garage instead, you change one instruction, not fifty boxes.",
      "Documents work the same way. When you make a line big and bold by hand, you have changed how it **looks**. When you give it the label **Heading 1**, you have said what it **is**. Your app can do far more with the second.",
      {key:"Format by saying what something is (a heading, a quote, a caption), not by fiddling with how it looks."}
    ]},
    {h:"Styles: one change, everywhere", body:[
      "A [[style]] is a named set of formatting (font, size, colour, spacing, indent) that you apply to text in one step. Every word processor comes with built-in styles such as **Normal** (or Normal text, Body Text), **Title**, **Heading 1**, **Heading 2** and **Heading 3**. Formatting that you add by hand, such as selecting a line and clicking Bold and a size, is called [[direct-formatting|direct formatting]].",
      {table:[
        ["","Direct formatting","Styles"],
        ["Making 30 headings look the same","Format each one by hand and hope you remember the size","Apply Heading 2 to each; they match automatically"],
        ["Changing how all of them look","Find and change all 30, one at a time","Change the Heading 2 style once; all 30 update"],
        ["Outline, table of contents, PDF bookmarks","The app can’t tell your headings from bold sentences","Built automatically from the headings"],
        ["Screen readers","Hear a bold sentence, nothing more","Announce “heading level 2” and let people jump between headings"]
      ]},
      {ex:"Priya is writing a 40-page handbook for her community garden. She formats each section title by hand: Arial, 16 point, bold, dark green. The committee then asks for blue headings in a different font.\n\nBy hand: she scrolls through 40 pages hunting for 23 titles, and misses two.\nWith styles: she changes the Heading 2 style once. All 23 titles change in a second, and none are missed.", label:"Worked example: why styles save hours"},
      "You can change a built-in style to look however you like. In Word, right-click the style in the Styles gallery and choose **Modify**. In Google Docs, format one heading the way you want, then use **Format → Paragraph styles → Heading 2 → Update ‘Heading 2’ to match**. LibreOffice and Pages have the same idea: change the style, and everything using it follows. In Pages, an asterisk (and sometimes an **Update** button) appears next to a style’s name when text using it has been changed by hand.",
      {tip:"A little direct formatting is fine: making one word bold for emphasis, for example. The trouble starts when whole paragraphs, especially headings and spacing, are formatted by hand."}
    ]},
    {h:"Heading levels: an outline in disguise", body:[
      "A [[heading-style|heading style]] marks a paragraph as a heading at a certain level. The levels work like the parts of a book: **Heading 1** for the main sections (chapters), **Heading 2** for the sections inside them, **Heading 3** for subsections inside those. Most documents only need two or three levels. The document’s own name usually gets the **Title** style.",
      {ex:"Title: Riverside Community Garden Handbook\n  Heading 1: Getting a plot\n    Heading 2: Who can apply\n    Heading 2: Fees and deposits\n  Heading 1: Looking after your plot\n    Heading 2: Watering\n      Heading 3: Hose rules\n      Heading 3: Rain barrels\n    Heading 2: Tools and the shed", label:"Worked example: a handbook outline", mono:true},
      "Two rules keep an outline healthy. **Choose the level by position in the outline, not by how big you want the text.** If Heading 3 looks too small, change the Heading 3 style; don’t use Heading 1 instead. And **don’t skip levels**: a Heading 3 should sit inside a Heading 2, not straight under a Heading 1. Microsoft’s accessibility guidance gives the same rule (“do not skip heading levels”), because screen-reader users rely on the levels to understand how sections fit together.",
      {fig:'<svg viewBox="0 0 340 344"><defs><marker id="m81" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="20" width="150" height="270" rx="8" stroke-width="2"/><text x="85" y="44" text-anchor="middle">Your document</text><text x="22" y="76">H1 Plots</text><rect class="d-softf" x="22" y="84" width="124" height="6" rx="3"/><text x="36" y="112">H2 Water</text><rect class="d-softf" x="36" y="120" width="110" height="6" rx="3"/><text x="36" y="148">H2 Tools</text><rect class="d-softf" x="36" y="156" width="110" height="6" rx="3"/><text x="22" y="190">H1 Rules</text><rect class="d-softf" x="22" y="198" width="124" height="6" rx="3"/><text x="36" y="226">H2 Fees</text><rect class="d-softf" x="36" y="234" width="110" height="6" rx="3"/><rect class="d-softf" x="36" y="248" width="90" height="6" rx="3"/><rect class="d-lup" x="196" y="20" width="134" height="54" rx="8" stroke-width="2"/><text x="263" y="43" text-anchor="middle">Navigation pane</text><text class="s" x="263" y="61" text-anchor="middle">or outline: jump</text><rect class="d-sage" x="196" y="92" width="134" height="54" rx="8" stroke-width="2"/><text x="263" y="115" text-anchor="middle">Table of contents</text><text class="s" x="263" y="133" text-anchor="middle">built for you</text><rect class="d-gold" x="196" y="164" width="134" height="54" rx="8" stroke-width="2"/><text x="263" y="187" text-anchor="middle">PDF bookmarks</text><text class="s" x="263" y="205" text-anchor="middle">made on export</text><rect class="d-rose" x="196" y="236" width="134" height="54" rx="8" stroke-width="2"/><text x="263" y="259" text-anchor="middle">Screen readers</text><text class="s" x="263" y="277" text-anchor="middle">jump by heading</text><path class="d-ink" d="M162,155 L192,49" stroke-width="2" fill="none" marker-end="url(#m81)"/><path class="d-ink" d="M162,155 L192,120" stroke-width="2" fill="none" marker-end="url(#m81)"/><path class="d-ink" d="M162,155 L192,190" stroke-width="2" fill="none" marker-end="url(#m81)"/><path class="d-ink" d="M162,155 L192,261" stroke-width="2" fill="none" marker-end="url(#m81)"/><text class="s" x="170" y="314" text-anchor="middle">Headings made with styles feed all four.</text><text class="s" x="170" y="332" text-anchor="middle">Text that only looks like a heading feeds none.</text></svg>', alt:"On the left, a document with headings marked H1 Plots, H2 Water, H2 Tools, H1 Rules and H2 Fees, with grey lines of body text under each. Arrows lead from the document to four boxes on the right: Navigation pane or outline (jump); Table of contents (built for you); PDF bookmarks (made on export); Screen readers (jump by heading). Below: headings made with styles feed all four; text that only looks like a heading feeds none.", cap:"One set of styled headings does four jobs at once."},
      "Style names vary a little. Word, Google Docs and LibreOffice all use **Heading 1**, **Heading 2** and so on. Pages’ templates name their paragraph styles in their own way; any style can count as a heading for its table of contents, because you choose which styles to include."
    ]},
    {h:"Finding your way: navigation pane and outline", body:[
      "Once your headings are styled, your app can show them as a clickable map in a side panel. Word calls it the [[navigation-pane|Navigation pane]], Google Docs the **outline**, LibreOffice the **Navigator**, and Pages shows a **Table of Contents** sidebar.",
      {table:[
        ["App","How to open the map of headings"],
        ["Word (desktop)","**View → Navigation Pane**, or press [[kbd:Ctrl]] + [[kbd:F]] and choose **Headings**. Drag a heading to move its whole section"],
        ["Google Docs","**View → Show outline**. Click a heading to jump to it"],
        ["LibreOffice Writer","**View → Navigator** (or [[kbd:F5]]), then open **Headings**"],
        ["Pages (Mac)","Click the **View** button in the toolbar, then choose **Table of Contents**"]
      ]},
      "The map is also a quick test. If a heading you expected is missing, it was never given a heading style: it only looks like a heading. If a heading appears at the wrong level, its style is wrong. Fix the style and the map corrects itself.",
      {tip:"In Word, dragging a heading in the Navigation pane moves the heading **and everything under it**. It’s the fastest way to reorder a long report, and it only works because the headings are styled."}
    ]},
    {h:"A table of contents that updates itself", body:[
      "A [[table-of-contents|table of contents]] (TOC) lists the headings with their page numbers. Typing one by hand is a trap: the moment you add a paragraph, the page numbers drift, and nothing warns you. An automatic TOC is built from your heading styles, and its entries are links you can click.",
      {table:[
        ["App","Insert","Update after changes"],
        ["Word","**References → Table of Contents**, then pick an automatic style","Right-click it and choose **Update Field**, or **References → Update Table**"],
        ["Google Docs","**Insert → Page elements → Table of contents** (older versions: **Insert → Table of contents**)","Click the table, then **Refresh**"],
        ["LibreOffice Writer","**Insert → Table of Contents and Index → Table of Contents, Index or Bibliography**","Right-click it, **Update Index**, or **Tools → Update → All Indexes and Tables**"],
        ["Pages (Mac)","**Insert Table of Contents** at the bottom of the Table of Contents sidebar, or **Insert → Table of Contents**","Updates automatically as you edit"]
      ]},
      "Word and LibreOffice don’t update the TOC on their own: they wait for you, because updating can move pages around. Make it a habit to update the TOC just before you print, export or send.",
      {ex:"Kenji finishes a 12-page report, inserts a TOC and sends it. Then he adds a two-page introduction.\nIn Word, the TOC still shows the old page numbers until he chooses Update Table. He updates it, checks that every entry now matches the page it points to, and only then exports the PDF.", label:"Worked example: update before you send"},
      {tip:"Google Docs can’t change the TOC’s format in **pageless** mode (Google’s help says so), because pageless documents have no page numbers. Switch to **Pages** in **File → Page setup** if you need page numbers."}
    ]},
    {h:"Paragraphs, line breaks and the hidden marks", body:[
      "Pressing [[kbd:Enter]] (Return on a Mac) does more than move to a new line. It ends the paragraph and starts a new one: a [[paragraph-break|paragraph break]]. Each paragraph has its own style and its own spacing before and after.",
      "Pressing [[kbd:Shift]] + [[kbd:Enter]] inserts a [[line-break|line break]] instead: the text moves to the next line, but stays in the **same** paragraph, with the same style and no paragraph spacing. It’s useful for the lines of a postal address, a poem, or a new line inside one list item without starting a new bullet.",
      {fig:'<svg viewBox="0 0 340 236"><rect class="d-panel" x="10" y="10" width="320" height="100" rx="8" stroke-width="2"/><text x="24" y="34">Enter: a new paragraph</text><text x="24" y="64">Amara Okafor¶</text><text x="24" y="96">12 Hill Road¶</text><text class="s" x="318" y="64" text-anchor="end">2 paragraphs,</text><text class="s" x="318" y="80" text-anchor="end">space after each</text><rect class="d-lup" x="10" y="124" width="320" height="100" rx="8" stroke-width="2"/><text x="24" y="148">Shift+Enter: a line break</text><text x="24" y="178">Amara Okafor↵</text><text x="24" y="198">12 Hill Road¶</text><text class="s" x="318" y="178" text-anchor="end">1 paragraph,</text><text class="s" x="318" y="194" text-anchor="end">lines stay close</text></svg>', alt:"Two panels. Top: Enter makes a new paragraph; the lines Amara Okafor and 12 Hill Road each end with a pilcrow mark and have extra space between them: two paragraphs, space after each. Bottom: Shift+Enter makes a line break; Amara Okafor ends with a bent-arrow line-break mark and 12 Hill Road follows closely, ending with a pilcrow: one paragraph, lines stay close.", cap:"¶ ends a paragraph. ↵ only starts a new line inside the same paragraph."},
      "These characters are normally invisible. Every word processor can show these [[formatting-marks|formatting marks]], along with spaces, tabs and breaks. Seeing them is like an X-ray of your document: you can see why something won’t line up.",
      {table:[
        ["Mark","What it means"],
        ["¶","End of a paragraph (you pressed Enter)"],
        ["↵","Line break inside a paragraph (Shift+Enter)"],
        ["·","A space"],
        ["→","A tab"],
        ["Dotted line labelled Page Break or Section Break","A break you inserted (Lesson 2)"]
      ]},
      {table:[
        ["App","Show formatting marks"],
        ["Word","**Home → ¶** (Show/Hide), or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:8]] on Windows"],
        ["Google Docs","**View → Show non-printing characters**"],
        ["LibreOffice Writer","**View → Formatting Marks**, or [[kbd:Ctrl]] + [[kbd:F10]]"],
        ["Pages (Mac)","**View → Show Invisibles** (in the menu bar, not the toolbar’s View button)"]
      ]},
      "With marks showing, you’ll often spot the same habits: a row of empty ¶ marks used to push a heading onto the next page, spaces typed to indent a line, or tabs pressed repeatedly to line up columns. Each one breaks as soon as the text changes. Space between paragraphs belongs in the style (**spacing before/after**), and new pages belong to a page break (Lesson 2).",
      {warn:"Empty paragraphs used for spacing cause real trouble: they show up as blank lines to screen readers, and when text above them grows, they slide onto the next page and leave a gap at the top."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Styles are only for long documents.”** Even a one-page letter benefits: consistent spacing, a quick change of font, and a proper title for anyone using a screen reader.",
        "**“A heading is any big, bold line.”** To your app, a big bold line is just a paragraph with direct formatting. Only a heading style makes it a heading.",
        "**“Pick the heading level that looks right.”** Pick the level that matches the outline, then change the style’s look if needed.",
        "**“Blank lines are a harmless way to add space.”** They move around when text changes and confuse screen readers. Use paragraph spacing.",
        "**“The table of contents keeps itself up to date.”** In Word and LibreOffice, you update it. Google Docs needs a click on Refresh; Pages updates by itself."
      ]}
    ]}
   ],
   try:[
    {id:"t1u8-l1-x1", type:"sort", q:"Sort each action: is it a style (saying what the text is) or direct formatting (changing how it looks by hand)?", buckets:["Style","Direct formatting"], items:[
      {t:"Choosing **Heading 2** for “Fees and deposits”", b:0, why:"Heading 2 is a named style. It tells the app this is a second-level heading, so it appears in the outline and TOC."},
      {t:"Selecting a section title and making it 16 pt, bold and green", b:1, why:"This changes only how it looks. The app still treats it as an ordinary paragraph."},
      {t:"Changing the **Heading 2** style to blue so every Heading 2 updates", b:0, why:"Changing the style itself is the point of styles: one change, applied everywhere the style is used."},
      {t:"Pressing Enter three times to add space under a heading", b:1, why:"Empty paragraphs are a hand-made layout trick. Spacing belongs in the style’s “space after” setting."},
      {t:"Applying the **Title** style to the document’s name", b:0, why:"Title is a built-in style. It marks the document’s title for the outline, PDF properties and screen readers."},
      {t:"Typing spaces at the start of a line to indent it", b:1, why:"Spaces are a by-hand fix that breaks when the font or size changes. Indents belong in paragraph settings or the style."}
    ]},
    {id:"t1u8-l1-x2", type:"mcq", q:"Hana made her section titles bold and 18 pt. When she opens the navigation pane (or outline), it’s empty. Why?", options:[
      {t:"Her titles only look like headings; they don’t have heading styles", ok:true, why:"Right. The pane lists paragraphs with heading styles. Bold 18 pt text is still Normal text to the app. Applying Heading 1 or 2 fixes it at once."},
      {t:"The navigation pane only works in documents longer than 20 pages", why:"There’s no length limit. It shows the headings of any document that has heading styles."},
      {t:"She needs to insert a table of contents first", why:"The order is the other way round: both the pane and the TOC are built from heading styles."},
      {t:"The titles need to be underlined as well", why:"Underlining is more direct formatting. No amount of formatting turns a paragraph into a heading; only a heading style does."}
    ]},
    {id:"t1u8-l1-x3", type:"order", q:"Put the steps for making a reliable table of contents in order.", items:[
      {t:"Apply heading styles (Heading 1, Heading 2…) to every section title", why:"First, because the TOC is built from heading styles. Without them there’s nothing to list."},
      {t:"Open the navigation pane or outline and check every heading is there at the right level", why:"Second: the map is a quick test. Missing or misplaced headings are fixed now, before they reach the TOC."},
      {t:"Insert an automatic table of contents built from those checked headings", why:"Third: the app builds it from the headings you have just checked."},
      {t:"Keep writing and editing", why:"Fourth: page numbers will drift as you add and remove text. That’s fine; the TOC isn’t final yet."},
      {t:"Update the table of contents just before printing, exporting or sending", why:"Last: in Word and LibreOffice the TOC only changes when you update it, so do it at the end."}
    ]},
    {id:"t1u8-l1-x4", type:"match", q:"With formatting marks turned on, match each mark to its meaning.", pairs:[
      ["¶","End of a paragraph (Enter)","The pilcrow appears wherever you pressed Enter (Return) and started a new paragraph."],
      ["↵","Line break inside a paragraph (Shift+Enter)","A line break starts a new line but keeps the same paragraph, style and spacing."],
      ["·","A space","Each dot is one space character, which makes runs of typed spaces easy to spot."],
      ["→","A tab","Each arrow is one tab. Several in a row often mean someone is lining text up by hand."]
    ]},
    {id:"t1u8-l1-x5", type:"spot", q:"This is what Tomás sees with formatting marks on. Tap every habit that will break when the text changes.", ask:"will break", mono:true, parts:[
      {t:"Price List¶", flag:false, why:"A title on its own paragraph is fine, especially if it uses the Title style."},
      "\n",
      {t:"········Opening hours: 7–15¶", flag:true, why:"Eight typed spaces used to indent. Change the font or size and the indent changes too. Use a paragraph indent instead."},
      "\n",
      {t:"Bread→→→→→3.50¶", flag:true, why:"Several tabs to push the price across. If the item name gets longer, the price jumps to the next tab stop. One tab with a right-aligned tab stop (Lesson 2), or a table, is reliable."},
      "\n",
      {t:"Mill Lane Bakery↵Mill Lane 4¶", flag:false, why:"A line break between the lines of an address is a good use: they stay together as one paragraph."},
      "\n",
      {t:"¶ ¶ ¶ ¶ ¶ ¶", flag:true, why:"Six empty paragraphs to push the next heading onto a new page. Add one line above and it lands mid-page; add many and it leaves a blank page. Use a page break."},
      "\n",
      {t:"Cakes¶  (style: Heading 1)", flag:false, why:"A section title with a heading style: exactly right."}
    ]},
    {id:"t1u8-l1-x6", type:"mcq", q:"Kenji is writing a numbered list of instructions. In step 3 he wants a second line (“Tip: wear gloves.”) without creating a new number. What should he press at the end of the first line?", options:[
      {t:"Shift+Enter, for a line break inside the same list item", ok:true, why:"A line break starts a new line in the same paragraph, so the list item keeps one number."},
      {t:"Enter", why:"Enter starts a new paragraph, which in a list means a new item with the next number."},
      {t:"Space until the cursor wraps to the next line", why:"Typed spaces only look right at one width. Change the font or the window and the line breaks somewhere else."},
      {t:"Tab", why:"Tab in a list usually demotes the item to a sub-level, or adds a gap, not a new line."}
    ]},
    {id:"t1u8-l1-x7", type:"mcq", q:"Sione’s report goes Heading 1 → Heading 3, because Heading 2 “looks too big”. What’s the best fix?", options:[
      {t:"Use Heading 2 there, and change the Heading 2 style to the size he prefers", ok:true, why:"The level follows the outline; the look follows the style. Changing Heading 2 once fixes every Heading 2 and keeps the outline correct."},
      {t:"Keep Heading 3; levels don’t matter as long as it looks right", why:"Levels matter to the outline, the TOC and screen readers. A skipped level suggests a missing section."},
      {t:"Use Normal text made bold instead", why:"Then it isn’t a heading at all: it disappears from the outline and TOC."},
      {t:"Use Heading 1 for every heading", why:"That flattens the structure: subsections look like main sections in the outline, TOC and to screen-reader users."}
    ]}
   ],
   apply:{intro:"Take a document you already have (or a page of notes) and give it real structure. Any free app works.", tasks:[
     {t:"Give a document a title and heading levels, then open its map", app:{
       ms:["Open or create a document with a title, at least three sections and a couple of sub-sections.","Click in the title and choose **Title** in the **Styles** gallery on the **Home** tab.","Click in each section title and choose **Heading 1** (on Windows: [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:1]]). Use **Heading 2** for sub-sections ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:2]]).","Open **View → Navigation Pane** (or [[kbd:Ctrl]] + [[kbd:F]], then **Headings**). In Word for the web, look on the **View** tab for the navigation option.","In the desktop app, drag one heading in the pane to a new place and watch its whole section move. Undo with [[kbd:Ctrl]] + [[kbd:Z]] (Mac: [[kbd:Cmd]] + [[kbd:Z]])."],
       google:["Open or create a document with a title, at least three sections and a couple of sub-sections.","Click in the title. In the toolbar, open the style box (it usually says **Normal text**) and choose **Title**.","Click in each section title and choose **Heading 1** (or press [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:1]]; on a Mac [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:1]]). Use **Heading 2** for sub-sections.","Choose **View → Show outline**. Click a heading in the outline to jump to it."],
       libre:["Open or create a document with a title, at least three sections and a couple of sub-sections.","Click in the title and choose **Styles → Title** from the menu bar.","Click in each section title and press [[kbd:Ctrl]] + [[kbd:1]] for Heading 1 (Mac: [[kbd:Cmd]] + [[kbd:1]]), or choose **Styles → Heading 1**. Use [[kbd:Ctrl]] + [[kbd:2]] for Heading 2.","Open **View → Navigator** ([[kbd:F5]]) and expand **Headings**. Double-click one to jump to it."],
       apple:["Open or create a document with a title, at least three sections and a couple of sub-sections.","Click in a section title, click **Format** (the paintbrush) in the toolbar (if the sidebar shows tabs, choose **Text**), and choose a heading style from the paragraph style menu at the top of the sidebar.","Do the same for every section and sub-section title, using a bigger heading style for main sections.","Click the **View** button in the toolbar and choose **Table of Contents**. Click **Edit** at the top of the sidebar to choose which styles count as headings."]
     }},
     {t:"Insert an automatic table of contents and update it", app:{
       ms:["Click just below the title.","Choose **References → Table of Contents** and pick an automatic style.","Add a new Heading 1 section at the end of the document.","Click the TOC and choose **Update Table** (or right-click → **Update Field**), then **Update entire table**. Check the new heading appears."],
       google:["Click just below the title.","Choose **Insert → Page elements → Table of contents** (in older versions, **Insert → Table of contents**) and pick a look.","Add a new Heading 1 section at the end.","Click the table of contents and select **Refresh**. If the document is in pageless mode, the TOC can’t show page numbers; that’s expected."],
       libre:["Click just below the title.","Choose **Insert → Table of Contents and Index → Table of Contents, Index or Bibliography**, keep **Type: Table of Contents** and click **OK**.","Add a new Heading 1 section at the end.","Right-click the TOC and choose **Update Index** (or **Tools → Update → All Indexes and Tables**)."],
       apple:["Click just below the title.","Choose **Insert → Table of Contents** or click **Insert Table of Contents** at the bottom of the Table of Contents sidebar.","Add a new heading at the end, using one of the styles ticked in the sidebar.","Watch the table of contents update by itself."]
     }},
     {t:"X-ray your document with formatting marks", write:"What I found (empty paragraphs, typed spaces, tab chains) and how I fixed it", app:{
       ms:["Click **Home → ¶** (Show/Hide), or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:8]] on Windows ([[kbd:Cmd]] + [[kbd:8]] on a Mac).","Look for rows of empty ¶ marks, runs of · spaces and → tabs.","Delete empty paragraphs used for spacing. To add space after a heading instead, use **Layout → Spacing After** (or **Paragraph settings**) and then update the style if you want every heading to match.","Click ¶ again to hide the marks."],
       google:["Choose **View → Show non-printing characters**.","Look for rows of empty ¶ marks, runs of spaces and tabs.","Delete empty paragraphs used for spacing. For space after paragraphs, use **Format → Line & paragraph spacing → Custom spacing**.","Choose the same menu item again to hide the marks."],
       libre:["Choose **View → Formatting Marks** ([[kbd:Ctrl]] + [[kbd:F10]]).","Look for rows of empty ¶ marks, runs of spaces and tabs.","Delete empty paragraphs used for spacing. For space below a paragraph, use **Format → Paragraph → Indents & Spacing → Below paragraph**, or change the paragraph style.","Toggle the marks off the same way."],
       apple:["Choose **View → Show Invisibles** from the menu bar.","Look for rows of empty ¶ marks, runs of spaces and tabs.","Delete empty paragraphs used for spacing. For space between paragraphs, click **Format** in the toolbar, then **Style** near the top of the sidebar, open **Spacing** and set **After Paragraph**.","Choose **View → Hide Invisibles** to turn them off."]
     }}
   ], proof:"A document whose map (navigation pane, outline, Navigator or TOC sidebar) shows every section at the right level, an automatic table of contents that you have updated at least once, and no empty paragraphs used as spacing."},
   read:[
     {book:"wss", where:"Section 3.3 “Formatting Document Content in Microsoft Word”: “Formatting Paragraphs” and “Headings”"},
     {book:"wss", where:"Section 3.1 “Navigating Microsoft Word”: “Navigation Pane”"},
     {book:"wss", where:"Section 4.3 “Managing Long Documents in Microsoft Word”: “Table of Contents” (and Section 4.6 for Google Docs)", note:"The book’s Google Docs steps put the table of contents straight in the Insert menu; current Docs puts it under Insert → Page elements."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u8-l2", title:"Pages and layout", minutes:50,
   goals:[
     "Set paper size, orientation and margins for where the document will be printed or read",
     "Use page breaks and section breaks instead of empty lines",
     "Add headers, footers and automatic page numbers",
     "Explain why spaces and repeated tabs break layout, and use tab stops, tables or columns instead"
   ],
   learn:[
    {h:"The page is a frame", body:[
      {lead:"Before a single word is typed, every page-based document has a frame: the size of the paper, which way up it is, and how much empty border surrounds the text."},
      "Three settings make the frame. **Paper size** is the sheet the document is designed for. [[orientation|Orientation]] is which way up it sits: **portrait** (tall) or **landscape** (wide). And the [[margin|margins]] are the empty borders between the edge of the paper and the text.",
      "Paper size matters more than people expect, because there are two common standards. Most of the world uses **A4** (an international ISO standard size). The United States, Canada and some other countries mostly use **US Letter**. They are close, but not the same:",
      {table:[
        ["Size","Millimetres","Inches"],
        ["A4","210 × 297","about 8.3 × 11.7"],
        ["US Letter","about 216 × 279","8.5 × 11"]
      ]},
      "Letter is wider and shorter; A4 is narrower and taller. A Letter document printed on A4 paper has to be squeezed or loses a strip at the side; an A4 document printed on Letter loses some at the bottom. Printers and PDF readers usually offer to “fit to page”, which shrinks everything slightly. Set the paper size to what the reader will actually print on, and the problem disappears.",
      {fig:'<svg viewBox="0 0 340 352"><rect class="d-panel" x="70" y="10" width="200" height="283" rx="4" stroke-width="2"/><rect class="d-soft" x="100" y="50" width="140" height="203" fill="none" stroke-width="1.5" stroke-dasharray="5 4"/><text class="s" x="170" y="36" text-anchor="middle">Garden handbook</text><rect class="d-softf" x="108" y="62" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="76" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="90" width="100" height="6" rx="3"/><rect class="d-softf" x="108" y="112" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="126" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="140" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="154" width="80" height="6" rx="3"/><rect class="d-softf" x="108" y="176" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="190" width="124" height="6" rx="3"/><rect class="d-softf" x="108" y="204" width="110" height="6" rx="3"/><text class="s" x="170" y="280" text-anchor="middle">Page 3 of 8</text><path class="d-ink" d="M72,232 L98,232" stroke-width="1.5"/><path class="d-ink" d="M72,226 L72,238 M98,226 L98,238" stroke-width="1.5"/><text class="s" x="64" y="228" text-anchor="end">margin</text><text class="s" x="64" y="244" text-anchor="end">(left)</text><text class="s" x="64" y="36" text-anchor="end">header</text><path class="d-ink" d="M66,32 L112,32" stroke-width="1" fill="none"/><text class="s" x="278" y="150">text area</text><path class="d-ink" d="M276,146 L242,146" stroke-width="1" fill="none"/><text class="s" x="278" y="284">footer</text><path class="d-ink" d="M276,280 L218,280" stroke-width="1" fill="none"/><text x="170" y="318" text-anchor="middle">A4: 210 × 297 mm</text><text x="170" y="340" text-anchor="middle">Letter: 8.5 × 11 in (216 × 279 mm)</text></svg>', alt:"A portrait page. A dashed rectangle inside it marks the text area, with grey lines of text. Above it, in the top margin, the header reads Garden handbook. Below it, in the bottom margin, the footer reads Page 3 of 8. A small measurement on the left marks the left margin. Below the page: A4 is 210 by 297 millimetres; Letter is 8.5 by 11 inches, about 216 by 279 millimetres.", cap:"The parts of a page. Headers and footers live in the top and bottom margins, outside the main text area."}
    ]},
    {h:"Margins and the text area", body:[
      "The margins decide how wide your lines of text can be. Many apps start with margins of about 2.5 cm (1 inch) all round. Subtract the left and right margins from the paper width and you get the width of the text area.",
      {ex:"A4 paper is 210 mm wide. With 25 mm margins on the left and right:\n210 − 25 − 25 = 160 mm of text width.\n\nUS Letter is 8.5 in wide. With 1 in margins:\n8.5 − 1 − 1 = 6.5 in of text width.", label:"Worked example: how wide is the text?", mono:true},
      "Why it matters: a picture or table wider than the text area sticks out into the margin or gets shrunk. Very narrow margins can also be cut off by printers, which can’t print right to the edge of the paper. If something must be printed and bound, leave extra room on the binding side (Word calls this a **gutter**).",
      {tip:"Google Docs offers a [[pageless]] format (**File → Page setup → Pageless**): one long page that fits the screen, with no paper size or margins to set. It’s comfortable for reading on screens. But Google says features such as headers and footers, page numbers and columns aren’t available while a document is pageless (and page-based settings such as section breaks need the Pages format), so switch to **Pages** for anything that will be printed."}
    ]},
    {h:"Breaks: let the text flow", body:[
      "Text in a word processor **flows**: add a sentence on page 1 and everything after it moves down, across page boundaries, by itself. Good layout works with that flow. Bad layout fights it.",
      "The classic fight is pressing Enter until a heading reaches the top of the next page. It works until someone adds or removes a line above; then the heading lands in the middle of a page, or a blank page appears. A [[page-break|page break]] says “start a new page here” and stays correct however the text above changes.",
      {table:[
        ["Break","What it does","Typical use"],
        ["Line break (Shift+Enter)","New line, same paragraph","Lines of an address; a second line in a list item"],
        ["Paragraph break (Enter)","New paragraph","Ordinary paragraphs"],
        ["Page break","Next text starts on a new page","A new chapter or an appendix"],
        ["Column break","Next text starts at the top of the next column","Balancing a two-column newsletter"],
        ["Section break","Starts a new section with its own page settings","A landscape page, a different footer, restarting page numbers"]
      ]},
      "Page break shortcut: [[kbd:Ctrl]] + [[kbd:Enter]] in Word and LibreOffice on Windows, and in Google Docs ([[kbd:Cmd]] + [[kbd:Enter]] for Google Docs on a Mac). The menus are **Insert → Page Break** in Word (also **Layout → Breaks**), **Insert → Break → Page break** in Google Docs, **Insert → Page Break** in LibreOffice and **Insert → Page Break** in Pages.",
      {tip:"Even better than a page break before every chapter: set the Heading 1 style to start on a new page (in Word and LibreOffice, a paragraph setting called **Page break before**). Then every new Heading 1 starts a page automatically. A related setting, **Keep with next**, stops a heading being stranded at the bottom of a page, away from its first paragraph."}
    ]},
    {h:"Sections: different rules for different parts", body:[
      "Some page settings apply to a whole **section** of a document. Most documents have just one. A [[section-break|section break]] starts a new section, so that part can have different settings: a different orientation, different margins, a different header or footer, a different number of columns, or page numbers that restart.",
      {fig:'<svg viewBox="0 0 340 196"><rect class="d-panel" x="10" y="30" width="80" height="110" rx="3" stroke-width="2"/><rect class="d-softf" x="20" y="44" width="60" height="5" rx="2"/><rect class="d-softf" x="20" y="56" width="60" height="5" rx="2"/><rect class="d-softf" x="20" y="68" width="48" height="5" rx="2"/><rect class="d-softf" x="20" y="86" width="60" height="5" rx="2"/><rect class="d-softf" x="20" y="98" width="60" height="5" rx="2"/><rect class="d-lup" x="115" y="45" width="110" height="80" rx="3" stroke-width="2"/><rect class="d-panel" x="124" y="56" width="92" height="58" stroke-width="1"/><path class="d-ink" d="M124,70 L216,70 M124,84 L216,84 M124,98 L216,98 M147,56 L147,114 M170,56 L170,114 M193,56 L193,114" stroke-width="1"/><rect class="d-panel" x="250" y="30" width="80" height="110" rx="3" stroke-width="2"/><rect class="d-softf" x="260" y="44" width="60" height="5" rx="2"/><rect class="d-softf" x="260" y="56" width="60" height="5" rx="2"/><rect class="d-softf" x="260" y="68" width="48" height="5" rx="2"/><rect class="d-softf" x="260" y="86" width="60" height="5" rx="2"/><path class="d-rose" d="M102,30 L102,140 M237,30 L237,140" stroke-width="2" stroke-dasharray="5 4" fill="none"/><text class="s" x="102" y="22" text-anchor="middle">break</text><text class="s" x="237" y="22" text-anchor="middle">break</text><text x="50" y="164" text-anchor="middle">Section 1</text><text class="s" x="50" y="182" text-anchor="middle">portrait</text><text x="170" y="164" text-anchor="middle">Section 2</text><text class="s" x="170" y="182" text-anchor="middle">landscape table</text><text x="290" y="164" text-anchor="middle">Section 3</text><text class="s" x="290" y="182" text-anchor="middle">portrait</text></svg>', alt:"Three pages in a row. Section 1 is a portrait page of text. A dashed line labelled break separates it from Section 2, a landscape page holding a wide table. Another dashed break separates that from Section 3, a portrait page of text again.", cap:"Two section breaks let one landscape page sit inside a portrait document."},
      "Section breaks come in two main kinds. **Next page** starts the new section on a new page (for a landscape page or a new chapter with its own footer). **Continuous** starts it on the same page (for switching from one column to two halfway down a page). Word also has **Even page** and **Odd page** breaks, for books where chapters must start on a right-hand page.",
      {table:[
        ["App","How sections work"],
        ["Word (desktop)","**Layout → Breaks**, then **Next Page** or **Continuous**. Microsoft’s feature comparison lists section breaks as desktop-only, so Word for the web can’t insert them"],
        ["Google Docs","**Insert → Break → Section break (next page)** or **(continuous)**. **View → Show section breaks** shows them. Not available in pageless format"],
        ["LibreOffice Writer","Uses **page styles** instead. To change orientation, insert a page break that switches to another page style: **Insert → More Breaks → Manual Break**, choose **Page break** and a page style such as **Landscape**"],
        ["Pages (Mac)","**Insert → Section Break**. Each section can have its own headers, footers and page numbering"]
      ]},
      {ex:"Lucía’s volunteer report is portrait, but one page holds a wide 9-column table of shift times.\n1. She clicks just before the table and inserts a next-page section break.\n2. She clicks after the table and inserts another one.\n3. She clicks inside the middle section and sets its orientation to landscape.\nOnly that page turns sideways. In Google Docs she uses Format → Page orientation and chooses “Apply to: This section”.", label:"Worked example: one landscape page"},
      {warn:"In Word, a new section’s header and footer start out **linked to the previous section** (“Link to Previous”), so editing one edits both. Turn the link off in the new section first if you want it to be different."}
    ]},
    {h:"Headers, footers and page numbers", body:[
      "A [[header-footer|header and footer]] are areas in the top and bottom margins that repeat on every page (or every page of a section): the document title, the author or organisation, a date, and very often the page number.",
      "Never type page numbers. Insert a page-number **field**, a placeholder the app fills in with the right number on each page, and keeps correct as pages move. Most apps can also show the total (“Page 3 of 8”).",
      {table:[
        ["App","Header or footer","Page numbers"],
        ["Word","**Insert → Header** or **Footer**, or double-click the top or bottom margin","**Insert → Page Number**, then choose a position"],
        ["Google Docs","**Insert → Page elements → Header** or **Footer**","**Insert → Page elements → Page number**"],
        ["LibreOffice Writer","**Insert → Header and Footer → Header** (or **Footer**) → the page style’s name","**Insert → Page Number** opens a dialog with position, alignment and “include page total”"],
        ["Pages (Mac)","Turn on **Header** and **Footer** in the **Document** sidebar","Click in a header or footer and add the page number"]
      ]},
      "Common settings: **Different first page** (so a cover page has no number; Google Docs has this as a checkbox in the header options), **different odd and even pages** (for printed books), and **starting page numbers at a different number**, which normally needs a new section.",
      {tip:"Google Docs headers, footers and page numbers don’t exist in pageless documents. Google notes that existing ones disappear from view when you switch to pageless, so switch back to Pages to see them again."}
    ]},
    {h:"Why spaces and tabs break layout", body:[
      "Most [[font|fonts]] are **proportional**: an “i” is narrower than an “m”, and a space’s width depends on the font and size. So when you line things up with spaces, they only line up for that exact font, size and screen. Change any of them, open the file in a different app, or let a colleague use a different default font, and the columns drift.",
      "Pressing Tab several times is better, but still fragile: tabs jump to the next **tab stop**, so one longer word can push the text to the next stop and break the line-up. The reliable tools are:",
      {list:[
        "**One tab plus a tab stop** you set yourself. A [[tab-stop|tab stop]] is a fixed position on the ruler. A **right-aligned tab stop with dot leaders** is the classic way to make a price list or a table of contents line: “Sourdough ........ 4.50”.",
        "**A table**, when you have rows and columns of data (Lesson 3).",
        "**Paragraph indents** for indenting, and **alignment** (left, centre, right, justified) for lining up a whole paragraph.",
        "**Columns** for newsletter-style text that flows from one column to the next: **Layout → Columns** in Word, **Format → Columns** in Google Docs and LibreOffice, and **Format → Layout → Columns** in Pages."
      ]},
      {ex:"Mei’s bakery price list uses spaces between each item and its price. On her laptop it looks perfect. Her business partner opens it on a phone with a different font, and every price is in a different place.\n\nFix: one tab between each item and price, and one right-aligned tab stop with a dot leader at the right margin. Now every price lines up on any device, and the dots lead the eye across.", label:"Worked example: a price list that stays lined up"},
      {key:"Spaces and repeated tabs describe where things happened to be on one screen. Tab stops, tables, columns and breaks describe what you want, so the app can keep it true."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A4 and Letter are basically the same.”** They differ by about 6 mm in width and 18 mm in height: enough to cut off a footer or squash a form.",
        "**“Pressing Enter a few times is a page break.”** It only looks like one until the text above changes.",
        "**“Page numbers are typed into the footer.”** They’re a field the app updates. Typed numbers are wrong as soon as a page is added.",
        "**“Landscape is for the whole document or nothing.”** A section break (or, in LibreOffice, a page style) lets one page turn sideways.",
        "**“If it looks lined up on my screen, it is lined up.”** With spaces, it’s only lined up for your font, size and app."
      ]}
    ]}
   ],
   try:[
    {id:"t1u8-l2-x1", type:"number", q:"Ana’s document uses A4 paper (210 mm wide) with a left margin of 30 mm and a right margin of 20 mm. How wide, in millimetres, can a picture be before it sticks out into a margin?", answer:160, tol:0, unit:"mm", why:"Text width = paper width − left margin − right margin = 210 − 30 − 20 = 160 mm. A picture wider than that pushes into a margin or gets shrunk.", wrongs:[
      {v:180, tol:0, why:"That subtracts only one margin (210 − 30). Both the left and right margins come off the width."},
      {v:190, tol:0, why:"That subtracts only the right margin (210 − 20). Both margins come off the width."},
      {v:297, tol:0, why:"297 mm is the height of A4, not its width. The question is about width: start from 210 mm."},
      {v:247, tol:0, why:"That uses the A4 height (297 − 30 − 20). Use the width, 210 mm."}
    ], hint2:"Start with the paper width and take off both side margins."},
    {id:"t1u8-l2-x2", type:"mcq", q:"Dmitri pressed Enter 14 times to push the heading “Appendix” to the top of a new page. Then he added a paragraph near the start. What happens, and what should he use?", options:[
      {t:"The heading slides down to the middle of the next page; he should delete the empty lines and insert a page break", ok:true, why:"Empty paragraphs move with the text above them. A page break always starts a new page, wherever the text above ends."},
      {t:"Nothing changes, because the app remembers where the heading should be", why:"The app only sees 14 empty paragraphs. It has no idea they were meant to start a page."},
      {t:"The heading stays put, but the new paragraph is hidden", why:"Text isn’t hidden; it flows. Everything after the new paragraph moves down."},
      {t:"He should add a 15th empty line to fix it", why:"That fixes it only until the next edit. The reliable fix is a page break (or a heading style set to start on a new page)."}
    ]},
    {id:"t1u8-l2-x3", type:"sort", q:"Which break does each situation need?", buckets:["Page break","Section break"], items:[
      {t:"Each chapter of a novel should start on a new page", b:0, why:"Only “new page” is needed; all chapters share the same page settings. (Even simpler: set Heading 1 to start on a new page.)"},
      {t:"One page with a wide table must be landscape in a portrait report", b:1, why:"Orientation is a section setting, so the landscape page needs its own section."},
      {t:"The appendix should start on a new page", b:0, why:"Same settings, new page: a page break is enough."},
      {t:"The introduction is numbered i, ii, iii and the main text 1, 2, 3", b:1, why:"Restarting and changing number format needs a new section."},
      {t:"Halfway down page 2, the text switches from one column to two", b:1, why:"Columns are a section setting. A continuous section break changes them without starting a new page."},
      {t:"A cover letter and the form that follows should be on separate pages", b:0, why:"Nothing about the page setup changes, so a page break does it."}
    ]},
    {id:"t1u8-l2-x4", type:"match", q:"Match each layout need to the right tool.", pairs:[
      ["Prices lined up at the right edge with dots leading to them","A right tab stop with dot leaders","One tab per line jumps to the fixed stop, so every price lines up whatever the font."],
      ["“Page 3 of 8” at the bottom of every page","A page-number field in the footer","The field fills in the right number on each page and updates as pages change."],
      ["A newsletter where text flows from one column into the next","Columns","Columns let text flow down one column and continue in the next, unlike a table."],
      ["Opening hours and prices for 12 items, in rows and columns","A table","Data with rows and columns belongs in a table, with a header row."],
      ["The first line of each paragraph pushed in a little","A paragraph first-line indent","An indent is part of the paragraph format, so it stays right in any font, unlike typed spaces."]
    ]},
    {id:"t1u8-l2-x5", type:"mcq", q:"Oluwaseun designs a form on US Letter paper. It will be printed by people in a country that uses A4. What’s the best thing to do?", options:[
      {t:"Set the paper size to A4 before laying the form out, and check the margins", ok:true, why:"Designing for the paper people actually use avoids cut-off edges and squashed pages. Changing it at the end can push boxes and lines onto new pages."},
      {t:"Nothing: A4 and Letter are the same size", why:"They aren’t. A4 is about 6 mm narrower and 18 mm taller than Letter."},
      {t:"Tell everyone to print at 90 percent", why:"Scaling shrinks everything and still won’t match the page shape. Set the right size instead."},
      {t:"Use landscape orientation so it fits either size", why:"Orientation doesn’t solve a size mismatch; the page shape still differs."}
    ]},
    {id:"t1u8-l2-x6", type:"order", q:"Put the steps for making one landscape page in a portrait document (Word desktop or Google Docs) in order.", items:[
      {t:"Click just before the wide table", why:"The new section must start where the landscape page begins."},
      {t:"Insert a next-page section break", why:"This starts a new section (and page) for the table."},
      {t:"Click just after the table and insert another next-page section break", why:"This ends the landscape section, so the pages after it can go back to portrait."},
      {t:"Click inside the table’s section and set its orientation to landscape (applying it to this section only)", why:"Orientation is a section setting, so only the middle section turns sideways."},
      {t:"Check the pages before and after are still portrait, and check headers and page numbers", why:"Verify. In Word, linked headers and footers may need attention in the new sections."}
    ]},
    {id:"t1u8-l2-x7", type:"mcq", q:"Fatima lined up a list of names and phone numbers using spaces. On her screen it’s perfect, but her colleague sees jagged columns. What’s the root cause?", options:[
      {t:"Spaces have different widths in different fonts and sizes, so the line-up only holds on her setup", ok:true, why:"Proportional fonts give each character (and space) its own width. A different font, size or app changes every line differently."},
      {t:"Her colleague’s screen is broken", why:"The screen is fine. The document only appeared aligned under one exact font and size."},
      {t:"Phone numbers can’t be aligned in a word processor", why:"They can: with a table or a single tab and a tab stop."},
      {t:"She didn’t type enough spaces", why:"More spaces can’t fix it; the widths still differ between fonts."}
    ]}
   ],
   apply:{intro:"Set up a document’s pages properly. Use a real document (a report, a newsletter, a form) or a few pages of practice text.", tasks:[
     {t:"Set the paper size, orientation and margins", app:{
       ms:["Go to **Layout → Size** and choose **A4** or **Letter** (whichever you’d print on).","Go to **Layout → Orientation** and choose **Portrait**.","Go to **Layout → Margins** and pick a preset, or **Custom Margins** to type exact values.","Word for the web has Size, Orientation and Margins on its **Layout** tab too; if your version doesn’t, open the file in the desktop app or another app."],
       google:["Choose **File → Page setup**.","At the top, make sure **Pages** is selected (not Pageless).","Set **Orientation**, **Paper size** and **Margins**, then click **OK**.","Optional: click **Set as default** first, so new documents use the same settings."],
       libre:["Choose **Format → Page Style** and open the **Page** tab.","Under **Paper format**, choose **A4** or **Letter** and an **Orientation**.","Set the **Margins** (left, right, top, bottom) and click **OK**."],
       apple:["Click the **Document** button in the toolbar, then the **Document** tab in the sidebar.","Choose a paper size from the pop-up menu and click an orientation under **Page Orientation**.","Under **Document Margins**, set Top, Bottom, Left and Right."]
     }},
     {t:"Add a footer with automatic page numbers", app:{
       ms:["Choose **Insert → Page Number** and pick a position at the bottom of the page. (In Word for the web, the page-number command is also on the **Insert** tab.)","In the desktop app, double-click the footer to edit it, and tick **Different First Page** on the **Header & Footer** tab if your first page is a cover.","Double-click the main text to leave the footer."],
       google:["Make sure the document uses **Pages**, not Pageless (**File → Page setup**).","Choose **Insert → Page elements → Page number** and pick a position.","Optional: click in the header or footer and tick **Different first page**."],
       libre:["Choose **Insert → Page Number**.","Set **Position** to **Bottom of page (Footer)**, choose an alignment, and tick **Include page total** if you want “Page 3 of 8”.","Click **OK**."],
       apple:["Click the **Document** button in the toolbar, then the **Document** tab, and tick **Footer**.","Move the pointer over the bottom of a page until the three footer fields appear, click one, then click **Insert Page Number** and choose a style.","Check the number changes from page to page."]
     }},
     {t:"Make one page landscape without changing the others", appNote:"Apple’s Pages guide says you can use only one page orientation per document: Pages doesn’t support a mix of portrait and landscape pages. Try this task in Google Docs or LibreOffice (both free), or rotate a wide table into a narrower shape instead.", app:{
       ms:["This needs the **desktop** app: Microsoft’s feature comparison lists section breaks as desktop-only, so Word for the web can’t do it.","Click before the page’s content and choose **Layout → Breaks → Next Page**. Click after it and do the same.","Click inside the middle section and choose **Layout → Orientation → Landscape**.","Check the pages before and after are still portrait."],
       google:["Make sure the document uses **Pages**, not Pageless.","Click before the page’s content and choose **Insert → Break → Section break (next page)**. Click after it and do the same.","Click inside the middle section and choose **Format → Page orientation** (or **File → Page setup**), set **Apply to** to **This section**, choose **Landscape** and click **OK**.","Optional: **View → Show section breaks** to see the breaks."],
       libre:["Click at the start of the content that should be landscape.","Choose **Insert → More Breaks → Manual Break**, select **Page break**, set **Page style** to **Landscape**, and click **OK**.","Click at the start of the content after it, insert another manual page break, and set **Page style** back to **Default Page Style**.","Check that only the middle pages are landscape."]
     }}
   ], proof:"A document with the paper size you actually print on, page numbers that change from page to page and survive adding a page, and (in an app that supports it) one landscape page between portrait pages."},
   read:[
     {book:"wss", where:"Section 3.2 “Formatting Document Layout in Microsoft Word” (page size, margins, orientation and section breaks)"},
     {book:"wss", where:"Section 3.7 “Formatting Layout and Content in Google Docs” (section breaks and page setup in Docs)", note:"Written before Google added pageless documents and moved headers, footers and page numbers into Insert → Page elements."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u8-l3", title:"Lists, tables and images", minutes:50,
   goals:[
     "Make real bulleted and numbered lists instead of typed hyphens and numbers",
     "Use tables for data, with a header row, and not for page layout",
     "Place images with sensible wrapping and anchoring, and add captions",
     "Write alt text that says what an image means, and mark decorative images"
   ],
   learn:[
    {h:"Real lists, not typed ones", body:[
      {lead:"A list typed with hyphens looks like a list. A list made with the list feature **is** one, and that difference shows up the moment the list changes."},
      "Typing “- ” or “1. ” at the start of lines makes text that resembles a list. The app’s **bulleted list** and **numbered list** buttons make paragraphs that the app knows are list items. That brings real advantages:",
      {list:[
        "**Numbers renumber themselves.** Insert a new step 3 and the old 3 becomes 4. With typed numbers you renumber by hand, and mistakes slip in.",
        "**Indents are consistent**, and wrapped lines line up neatly under the text, not under the bullet.",
        "**Levels are easy.** Press [[kbd:Tab]] at the start of an item to make it a sub-item, and [[kbd:Shift]] + [[kbd:Tab]] to move it back up.",
        "**Screen readers announce it**, for example “list, 5 items”, so listeners know how much is coming and where they are."
      ]},
      "Use **numbers** when order or count matters (steps, rankings, instructions people will refer to: “see step 4”). Use **bullets** when it doesn’t (ingredients, features, reminders).",
      {tip:"Most word processors turn “1. ” or “* ” at the start of a line into a real list automatically. If you didn’t want that, press undo ([[kbd:Ctrl]] + [[kbd:Z]]) straight away and it becomes plain text again."},
      "Keyboard shortcuts in Google Docs: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:8]] for bullets, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:7]] for numbers. In Word, use the **Bullets** and **Numbering** buttons on the **Home** tab; in LibreOffice, **Format → Bullets and Numbering** or the toolbar; in Pages, the **Bullets & Lists** menu under **Style** in the **Format** sidebar."
    ]},
    {h:"Tables are for data", body:[
      "A table is the right tool when you have **data**: things that share the same set of attributes. Each **row** is one thing (a person, a product, a shift); each **column** is one attribute (name, price, time). The first row, the **header row**, names the columns.",
      {table:[
        ["Plot","Gardener","Size (m²)"],
        ["A1","Kenji","12"],
        ["A2","Amara","8"],
        ["B1","Tomás","12"]
      ]},
      "Mark the header row as a header in your app, not just in bold. Then a screen reader can say “Gardener: Amara” as someone moves through the cells, and long tables can **repeat the header row** at the top of every page.",
      {table:[
        ["App","Header row"],
        ["Word","**Table Design → Header Row**; to repeat it on each page, select the row and choose **Layout → Repeat Header Rows** (desktop)"],
        ["Google Docs","**Format → Table → Table options**, then tick **Pin header row(s)**"],
        ["LibreOffice Writer","When inserting (**Table → Insert Table**), tick **Heading** and **Repeat heading rows on new pages**"],
        ["Pages","Select the table, **Format → Table → Headers & Footer**, or on a Mac Control-click the first row’s number and choose **Convert to Header Row**"]
      ]},
      "Keep data tables **simple**: one header row, no merged or split cells, and no empty rows or columns used to add space. LibreOffice’s accessibility check flags split and merged cells, and Microsoft’s guidance says to check for completely blank rows and columns, because they confuse people navigating cell by cell.",
      {warn:"Don’t use a table just to put things side by side (a photo next to a paragraph, or a two-column CV). Google’s accessibility advice is clear: “Use tables to present data, not to change the visual layout of the page.” Screen readers read layout tables cell by cell, row by row, often in the wrong order, and they don’t reflow on narrow screens. Use columns, image wrapping or text boxes for layout instead."}
    ]},
    {h:"Images: in line or wrapped", body:[
      "When you insert a picture, the app has to decide how it relates to the text around it. That’s [[text-wrapping|text wrapping]]. The names differ, but every app offers the same basic choices:",
      {table:[
        ["Choice","In Word","In Google Docs","What happens"],
        ["In line","In Line with Text","In line","The image sits in a line of text like a very big letter and moves with it"],
        ["Wrap around","Square, Tight","Wrap text","Text flows around the sides of the image"],
        ["Above and below","Top and Bottom","Break text","Text stops above the image and continues below it"],
        ["Behind or in front","Behind Text, In Front of Text","Behind text, In front of text","The image overlaps the text, like a watermark or a sticker"]
      ]},
      "Pages uses similar names (**Inline with Text**, **Around**, **Above and Below**). LibreOffice keeps a picture in line by anchoring it **As Character**, and sets the other options under **Wrap**.",
      {fig:'<svg viewBox="0 0 340 380"><rect class="d-panel" x="10" y="10" width="90" height="110" rx="3" stroke-width="2"/><rect class="d-softf" x="18" y="22" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="32" width="74" height="5" rx="2"/><rect class="d-lup" x="18" y="44" width="34" height="30" stroke-width="1.5"/><rect class="d-softf" x="56" y="69" width="36" height="5" rx="2"/><rect class="d-softf" x="18" y="84" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="94" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="104" width="56" height="5" rx="2"/><text x="115" y="40">In line</text><text class="s" x="115" y="60">Sits in a line like a big letter</text><text class="s" x="115" y="76">and moves with the text.</text><text class="s" x="115" y="92">The safest choice for most</text><text class="s" x="115" y="108">pictures, charts and photos.</text><rect class="d-panel" x="10" y="135" width="90" height="110" rx="3" stroke-width="2"/><rect class="d-softf" x="18" y="147" width="74" height="5" rx="2"/><rect class="d-lup" x="18" y="161" width="36" height="36" stroke-width="1.5"/><rect class="d-softf" x="58" y="163" width="34" height="5" rx="2"/><rect class="d-softf" x="58" y="173" width="34" height="5" rx="2"/><rect class="d-softf" x="58" y="183" width="34" height="5" rx="2"/><rect class="d-softf" x="58" y="193" width="34" height="5" rx="2"/><rect class="d-softf" x="18" y="207" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="217" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="227" width="50" height="5" rx="2"/><text x="115" y="165">Wrapped (square)</text><text class="s" x="115" y="185">Text flows around the sides.</text><text class="s" x="115" y="201">Fine for a small side picture,</text><text class="s" x="115" y="217">but it can shift when the</text><text class="s" x="115" y="233">text above it changes.</text><rect class="d-panel" x="10" y="260" width="90" height="110" rx="3" stroke-width="2"/><rect class="d-softf" x="18" y="272" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="282" width="74" height="5" rx="2"/><rect class="d-lup" x="33" y="294" width="44" height="34" stroke-width="1.5"/><rect class="d-softf" x="18" y="336" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="346" width="74" height="5" rx="2"/><rect class="d-softf" x="18" y="356" width="50" height="5" rx="2"/><text x="115" y="290">Top and bottom</text><text class="s" x="115" y="310">Text stops above the picture</text><text class="s" x="115" y="326">and carries on below it.</text><text class="s" x="115" y="342">Good for figures with</text><text class="s" x="115" y="358">a caption underneath.</text></svg>', alt:"Three small pages, one above the other, each with grey lines for text and a blue box for a picture. First, In line: the picture sits in a line of text like a big letter, with a short line of text beside its bottom edge; it moves with the text and is the safest choice. Second, Wrapped (square): short lines of text run down the right side of the picture; fine for a small side picture but it can shift when text above changes. Third, Top and bottom: text stops above the picture and continues below; good for figures with a caption underneath.", cap:"Three common ways to place a picture. In line is the most predictable."},
      "**In line** is the most predictable: the picture behaves like part of the text, stays in reading order, and never ends up on top of a paragraph. That’s why it’s the usual default, and a good choice for most photos and charts.",
      "A wrapped picture is attached to a paragraph by an invisible [[image-anchor|anchor]]. In Word, you can see the anchor (a small anchor icon) when formatting marks are on. The anchor decides which page the picture lives on: if its paragraph moves to the next page, the picture follows. Word’s **Layout Options** let you choose **Move with text** (the picture moves when text is added above) or **Fix position on page** (it stays at that spot on the page). Microsoft notes that pictures set to **In Line with Text** have no anchor at all.",
      {tip:"Picture “jumps” to another page, or vanishes behind text? Turn on formatting marks, find its anchor, and check its wrapping. Switching a troublesome picture to **In line** usually ends the trouble."}
    ]},
    {h:"Captions", body:[
      "A [[caption]] is the visible line of text with a figure or table: “Figure 2: Water use by month, 2025”. It helps **everyone**: it tells sighted readers what to look for, and other text can refer to it (“see Figure 2”). Captions made with a caption tool are numbered automatically, renumber when you add a figure earlier, and can feed a **table of figures**.",
      {table:[
        ["App","Add a caption"],
        ["Word (desktop)","Select the picture, then **References → Insert Caption** (or right-click → **Insert Caption**). Microsoft lists captions as desktop-only"],
        ["Google Docs","No caption tool: place the image **In line** and type the caption in the paragraph directly below it"],
        ["LibreOffice Writer","Select the picture, then **Insert → Caption**"],
        ["Pages","Select the picture; in the **Format** sidebar’s **Style** tab, tick **Caption**, then type over the placeholder"]
      ]},
      "A caption is **not** a replacement for alt text. The caption is for everyone and usually adds context (“Figure 2: Water use by month”); the alt text describes what the picture shows for people who can’t see it."
    ]},
    {h:"Alt text: what the picture means", body:[
      "[[alt-text|Alt text]] (alternative text) is a short written description attached to an image. It isn’t visible on the page. A [[screen-reader|screen reader]], software that reads the screen aloud or sends it to a braille display, reads it out in place of the image. Alt text also appears if the image can’t load, and helps search tools understand documents.",
      "Good alt text says **what the image is for** in this document, not just what’s in it. Microsoft’s advice is to describe the image and its intent in one or two sentences. Ask: if I had to replace this picture with a sentence, what would I write?",
      {table:[
        ["Image","Weak alt text","Better alt text"],
        ["A photo of the garden shed in a handbook","“image1.jpg” or “photo”","The green tool shed by the main gate, where shared tools are kept."],
        ["A bar chart of monthly water use","“chart”","Bar chart: water use rose from 2 m³ in April to a peak of 9 m³ in July, then fell to 3 m³ by October."],
        ["The bakery’s logo at the top of a price list","“logo”","Mill Lane Bakery (the name in the logo is enough)"],
        ["A decorative swirl between sections","“decorative swirl line”","Mark it as decorative, so screen readers skip it"]
      ]},
      {list:[
        "**Don’t start with “Image of” or “Picture of”.** Screen readers already announce that it’s an image.",
        "**Include any text that’s in the image**, or better, put important text in the document itself.",
        "**For complex charts or diagrams**, give the key message in the alt text and put the full data in a table or the text nearby.",
        "**Decorative images** (borders, flourishes, background shapes) should be **marked as decorative**. Word and LibreOffice have a **Decorative** checkbox; elsewhere, leave the description empty only if the app treats empty as decorative.",
        "**Check automatic alt text.** Some apps can suggest alt text using AI. Treat it as a draft: it may be vague or wrong, and it can’t know why you included the picture."
      ]},
      {table:[
        ["App","Add alt text"],
        ["Word","Right-click the picture → **View Alt Text** (or **Picture Format → Alt Text**); tick **Mark as decorative** if it is"],
        ["Google Docs","Select the image, then **Image options → Alt text**, or [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Y]] ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:Y]] on a Mac)"],
        ["LibreOffice Writer","**Format → Alt Text** (in some versions **Format → Image → Properties → Options**): a short **Text**, a longer **Alt Text** if needed, or **Decorative**"],
        ["Pages","Select the image, then in the **Format** sidebar’s **Image** tab type in the **Description** box"]
      ]},
      {tip:"Using someone else’s photo? Alt text doesn’t give you permission. Unit 5’s {{copyright-basics}} and {{creative-commons}} entries explain how to check you’re allowed to use it and how to credit it."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Hyphens at the start of lines make a list.”** They make lines that look like one. Real lists renumber, indent and get announced properly.",
        "**“Tables are the easiest way to lay out a page.”** They’re easy to make and hard for screen readers, phones and editors. Use them for data.",
        "**“Bold is enough for a header row.”** Mark it as a header row so screen readers and page breaks treat it properly.",
        "**“The caption is the alt text.”** They do different jobs. Most informative images need both.",
        "**“Alt text should describe every detail.”** It should give the meaning in a sentence or two. Put long details in the text or a table."
      ]}
    ]}
   ],
   try:[
    {id:"t1u8-l3-x1", type:"sort", q:"Should each of these be a table?", buckets:["Yes, a table (data)","No, use something else"], items:[
      {t:"Twelve volunteers with their phone number, shift day and shift time", b:0, why:"Each row is a volunteer and each column an attribute: classic data. Give it a header row."},
      {t:"A photo on the left and a paragraph about it on the right", b:1, why:"That’s layout. Use image wrapping (or columns) instead, so the reading order stays right."},
      {t:"A price list of 30 items with size and price", b:0, why:"Items sharing the same attributes (name, size, price) are data. A table, or tab stops for a simple two-column list."},
      {t:"A two-column CV with skills down the left side", b:1, why:"That’s visual layout. Screen readers and applicant-tracking systems can read table-based CVs out of order. Use headings and lists, or real columns."},
      {t:"A newsletter with text flowing between two columns", b:1, why:"Text that flows from one column to the next needs columns. Table cells don’t flow into each other."},
      {t:"Monthly rainfall for each of four garden plots", b:0, why:"Rows (plots) and columns (months) of numbers: data, with a header row and maybe a header column."}
    ]},
    {id:"t1u8-l3-x2", type:"mcq", q:"Priya typed her 10 instructions as “1.”, “2.”, “3.”… by hand. She needs to add a new step between 4 and 5. What’s the main advantage of converting the steps to a real numbered list first?", options:[
      {t:"The steps renumber automatically, and screen readers announce it as a list", ok:true, why:"A real list numbers itself, so inserting a step updates everything after it, with consistent indents. Typed numbers must be fixed by hand."},
      {t:"It makes the numbers bigger", why:"Size has nothing to do with it; the list feature is about structure and automatic numbering."},
      {t:"It stops anyone from editing the steps", why:"Lists don’t lock anything. They just make editing safer."},
      {t:"Typed numbers are invisible to printers", why:"Typed numbers print fine. The problem is maintaining them when the list changes."}
    ]},
    {id:"t1u8-l3-x3", type:"match", q:"Match each wrapping choice with what it does.", pairs:[
      ["In line with text","The image sits in a line of text and moves with it like a big letter","In line images have no separate anchor; they’re part of the text flow."],
      ["Square (Wrap text)","Text flows around the sides of the image","Wrapping fits text beside the image; good for small side pictures."],
      ["Top and bottom (Break text)","Text stops above the image and continues below it","The image gets its own band across the page, ideal for figures with captions."],
      ["Behind text","The image sits under the text, like a watermark","The text is printed over it; contrast can suffer, so use with care."]
    ]},
    {id:"t1u8-l3-x4", type:"mcq", q:"Kenji’s community garden report has a photo of volunteers building a new raised bed. Which alt text is best?", options:[
      {t:"Six volunteers building the new raised bed for wheelchair users next to the shed.", ok:true, why:"It gives the content and why it matters in this report, in one sentence, without “image of”."},
      {t:"Image of people", why:"“Image of” is redundant, and “people” misses the point of the photo."},
      {t:"IMG_4021.jpg", why:"A file name tells a listener nothing about the picture."},
      {t:"A sunny day with blue sky, green grass, three people in hats, two in gloves, a wheelbarrow, some wood, a spade, a fence and a shed in the background.", why:"A list of every detail is long and hides the point. Say what it shows and why it’s there."}
    ]},
    {id:"t1u8-l3-x5", type:"sort", q:"Informative (needs alt text) or decorative (mark as decorative)?", buckets:["Informative","Decorative"], items:[
      {t:"A chart showing this year’s membership numbers", b:0, why:"It carries information. Give the key message in the alt text and the numbers in the text or a table."},
      {t:"A thin flourish line between two sections", b:1, why:"It’s purely visual. Marking it decorative lets screen readers skip it."},
      {t:"A photo of the venue entrance in an event invitation", b:0, why:"It helps people find the place, so describe what matters (for example, the blue door beside the café)."},
      {t:"A background watercolour wash behind the title", b:1, why:"Decoration only. Make sure the title text itself has enough contrast."},
      {t:"A screenshot of the settings screen in a how-to guide", b:0, why:"It shows the reader what to look for. Describe the key part (which option, where) in the alt text or steps."}
    ]},
    {id:"t1u8-l3-x6", type:"mcq", q:"Ana adds a caption “Figure 3: Plot map” under a map, and decides it doesn’t need alt text. What’s wrong with that?", options:[
      {t:"The caption names the figure, but someone who can’t see it still doesn’t know what the map shows", ok:true, why:"Captions and alt text do different jobs. The alt text should give what matters: for example, where the plots are and which ones are free."},
      {t:"Nothing: captions are read instead of alt text", why:"Screen readers read the caption as ordinary text, but it doesn’t describe the map’s content."},
      {t:"Captions aren’t allowed on maps", why:"Captions are fine on any figure."},
      {t:"She should delete the caption and use only alt text", why:"The caption helps everyone and lets text refer to “Figure 3”. Keep it and add alt text."}
    ]},
    {id:"t1u8-l3-x7", type:"mcq", q:"In Word, Lucía’s photo keeps jumping to the next page when she edits the paragraph above it. What’s the most likely explanation?", options:[
      {t:"The photo is wrapped and anchored to a paragraph that moves to the next page", ok:true, why:"A wrapped picture follows its anchor’s paragraph. Moving the anchor, or setting the photo to In Line with Text, fixes it."},
      {t:"The photo file is damaged", why:"A damaged file wouldn’t display at all. Movement comes from wrapping and anchoring."},
      {t:"Word can’t show photos on the same page as text", why:"It can; wrapping and anchoring decide where."},
      {t:"She needs a faster computer", why:"Speed doesn’t affect layout rules. The picture is following its anchor."}
    ]}
   ],
   apply:{intro:"Add a list, a data table and a picture to a document, and make all three work for everyone.", tasks:[
     {t:"Make a real list and a data table with a header row", app:{
       ms:["Type four or five items, select them, and click **Home → Bullets** (or **Numbering**). Press [[kbd:Tab]] on one item to make it a sub-item.","Choose **Insert → Table** and drag over the grid to make a small table (for example 3 columns × 4 rows). Type column names in the top row.","With the cursor in the table, open **Table Design** and make sure **Header Row** is ticked.","Desktop only: select the top row and choose **Layout → Repeat Header Rows** so it repeats if the table crosses a page."],
       google:["Select some lines and press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:8]] for bullets or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:7]] for numbers ([[kbd:Cmd]] instead of Ctrl on a Mac). Press [[kbd:Tab]] to indent an item.","Choose **Insert → Table** and pick a size. Type column names in the top row.","Click in the table, choose **Format → Table → Table options**, tick **Pin header row(s)**, and click **Okay**."],
       libre:["Select some lines and choose **Format → Bullets and Numbering**, or click the bullet or numbering button on the toolbar. Press [[kbd:Tab]] to indent an item.","Choose **Table → Insert Table**, set columns and rows, tick **Heading** and **Repeat heading rows on new pages**, and click **Insert**.","Type column names in the heading row."],
       apple:["Select some lines, click **Format** in the toolbar, click **Style** near the top of the sidebar and choose from the **Bullets & Lists** menu. Press [[kbd:Tab]] to indent an item.","Click the **Table** button in the toolbar and choose a table. Type column names in the top row.","Select the table, click **Format → Table**, and use **Headers & Footer** to set one header row (on a Mac you can also Control-click the first row’s number and choose **Convert to Header Row**)."]
     }},
     {t:"Insert a picture, place it, caption it and describe it", write:"My alt text, and why I chose those words", app:{
       ms:["Choose **Insert → Pictures → This Device** and pick a photo.","Click the **Layout Options** button beside the picture and choose **In Line with Text** (or **Top and Bottom**).","Right-click the picture → **View Alt Text**, and write one or two sentences about what it shows and why it’s there. Tick **Mark as decorative** only if it adds no information.","Desktop: right-click → **Insert Caption** and type the caption. (Word for the web has no caption tool; type it as text under the picture.)"],
       google:["Choose **Insert → Image → Upload from computer**.","Click the image and choose **In line** from the small toolbar under it.","With the image selected, click **Image options → Alt text** (or [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Y]]) and write the description.","Docs has no caption tool: type the caption on the line just below the image."],
       libre:["Choose **Insert → Image** and pick a photo.","Right-click it and choose **Anchor → As Character** to keep it in line with the text (or **Wrap** for other options).","Choose **Format → Alt Text** (in some versions **Format → Image → Properties → Options**) and type a short description in **Text** (or tick **Decorative**).","With the image selected, choose **Insert → Caption**, type the caption and click **Insert**."],
       apple:["Drag a photo into the document, or use the **Media** button in the toolbar.","Click **Format** → **Arrange** and choose a **Text Wrap** option such as **Inline with Text**.","In the **Format** sidebar, open the **Image** tab and type in the **Description** box.","Open the **Style** tab, tick **Caption**, and type over the placeholder caption."]
     }}
   ], proof:"A document with a real list that renumbers itself, a table whose header row is set as a header, and a picture that stays where you want it, with a caption and alt text you’d be happy for a screen reader to read aloud."},
   read:[
     {book:"wss", where:"Section 4.2 “Working with Graphics and Text Tools in Microsoft Word”: “Tables” and “Illustrations Command Group”"},
     {book:"wss", where:"Section 3.3 “Formatting Document Content in Microsoft Word”: “Adjusting Graphic and Text Layouts” (wrapping options)"},
     {book:"wss", where:"Section 4.3 “Managing Long Documents in Microsoft Word”: “Table of Figures” and “Captions” (and Section 4.5 for images and tables in Google Docs)", note:"The book doesn’t cover alt text; this lesson does."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u8-l4", title:"Reviewing together", minutes:50,
   goals:[
     "Choose between a comment and a tracked change or suggestion",
     "Turn on track changes or suggesting mode, then accept or reject each change",
     "Tell version history, tracked changes and document comparison apart, and use each",
     "Explain why one shared file beats emailed copies, and when a copy is still right"
   ],
   learn:[
    {h:"Two kinds of feedback", body:[
      {lead:"When someone reviews your document, they want to do one of two things: talk about it, or change it. Word processors have a tool for each."},
      "A [[comment]] is a note attached to a piece of text, shown in the margin. It doesn’t change the document. Use it to ask a question (“Is this the 2025 figure?”), explain a concern, or suggest something too big to write yourself. People can **reply** to a comment, making a thread, and **resolve** it when it’s dealt with; resolved comments are hidden but kept in the history.",
      "A **tracked change** (or, in Google Docs, a **suggestion**) is an actual edit to the text, recorded with who made it and when, and shown in colour: insertions underlined, deletions struck through. The edit is a proposal. It isn’t final until the document’s owner **accepts** it, and it disappears if they **reject** it.",
      {table:[
        ["Use a comment when…","Use a tracked change or suggestion when…"],
        ["You have a question or doubt","You know exactly what the new words should be"],
        ["The fix needs the author’s knowledge","It’s a typo, a wrong date, a missing word"],
        ["You want to discuss a whole section","The change is small and specific"],
        ["You’re unsure whether a change is wanted","You want the author to be able to accept it with one click"]
      ]},
      "Comments: **Review → New Comment** in Word ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:M]] on Windows), **Insert → Comment** in Google Docs ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:M]]), **Insert → Comment** in LibreOffice ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:C]]) and **Insert → Comment** in Pages.",
      {tip:"In many apps, including Google Docs and Word for files stored in the cloud, typing @ and a person’s name in a comment notifies that person, and some apps let you assign the comment to them as a task. It’s the polite way to get one specific person’s attention. What’s available can depend on your account type."}
    ]},
    {h:"Tracked changes and suggestions", body:[
      "[[track-changes|Track changes]] is a mode: while it’s on, every edit anyone makes is recorded instead of simply happening. Google Docs’ version of this is [[suggesting-mode|suggesting mode]]: edits appear as suggestions, each with its own little card to accept or reject.",
      {table:[
        ["App","Turn it on","Accept or reject"],
        ["Word","**Review → Track Changes**, then **For Everyone** or **Just Mine** ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:E]] on Windows)","**Review → Accept** or **Reject** (with **Next**/**Previous**), or right-click a change"],
        ["Google Docs","Open the mode menu at the top right (it says **Editing**) and choose **Suggesting** ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Shift]] + [[kbd:X]])","Click the suggestion, then **Accept** (✓) or **Reject** (✗); or **Tools → Review suggested edits**"],
        ["LibreOffice Writer","**Edit → Track Changes → Record**","**Edit → Track Changes → Manage**, then **Accept**, **Reject**, **Accept All** or **Reject All**"],
        ["Pages (Mac)","**Edit → Track Changes**; a review toolbar appears","Hover over a change and click **Accept** or **Reject**, or use the review toolbar"]
      ]},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m84" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="46" rx="9" stroke-width="2"/><text x="170" y="30" text-anchor="middle">1 · The author writes a draft</text><text class="s" x="170" y="47" text-anchor="middle">then shares it with reviewers</text><path class="d-ink" d="M170,57 L170,76" stroke-width="2" marker-end="url(#m84)"/><rect class="d-lup" x="10" y="78" width="320" height="46" rx="9" stroke-width="2"/><text x="170" y="98" text-anchor="middle">2 · Reviewers comment and suggest</text><text class="s" x="170" y="115" text-anchor="middle">tracking is on: every edit is recorded</text><path class="d-ink" d="M170,125 L170,144" stroke-width="2" marker-end="url(#m84)"/><rect class="d-gold" x="10" y="146" width="320" height="46" rx="9" stroke-width="2"/><text x="170" y="166" text-anchor="middle">3 · The author decides each one</text><text class="s" x="170" y="183" text-anchor="middle">accept or reject; reply, then resolve</text><path class="d-ink" d="M170,193 L170,212" stroke-width="2" marker-end="url(#m84)"/><rect class="d-sage" x="10" y="214" width="320" height="46" rx="9" stroke-width="2"/><text x="170" y="234" text-anchor="middle">4 · Check: no changes or comments left</text><text class="s" x="170" y="251" text-anchor="middle">view All Markup, not No Markup</text><path class="d-ink" d="M170,261 L170,280" stroke-width="2" marker-end="url(#m84)"/><rect class="d-rose" x="10" y="282" width="320" height="40" rx="9" stroke-width="2"/><text x="170" y="307" text-anchor="middle">5 · Share the final (link or PDF)</text></svg>', alt:"Five boxes in a column with arrows: 1 The author writes a draft, then shares it with reviewers. 2 Reviewers comment and suggest; tracking is on, every edit is recorded. 3 The author decides each one: accept or reject; reply, then resolve. 4 Check that no changes or comments are left: view All Markup, not No Markup. 5 Share the final, as a link or PDF.", cap:"A review round. Step 4 is the one people forget."},
      "Word lets you choose how much markup you **see**: **All Markup** (every change and comment), **Simple Markup** (a red line in the margin where something changed), **No Markup** (looks like the final text) and **Original**. Pages has a similar choice: **Markup**, **Markup Without Deletions** and **Final**.",
      {warn:"**No Markup** and **Final** only change your **view**. The tracked changes and comments are still inside the file. Send it like that and the reader can switch the view back and see deleted text, such as an earlier price, a colleague’s blunt comment, or a name you removed. Before sharing a final version, accept or reject every change and delete or resolve every comment, then check with **All Markup** on. Exporting a PDF from a clean file is safest of all."},
      "Some useful details: in Word, Microsoft notes that if a document was shared with you for review, you may not be able to turn tracking off. In Pages, Apple notes you must accept or reject all changes before you can turn tracking off. In Google Docs, anyone with **commenter** access can make suggestions, but only editors can accept them."
    ]},
    {h:"Accept, reject, decide", body:[
      "Accepting and rejecting is the author’s job, and it deserves attention. Go through changes one by one using **Next**: the app jumps from change to change, so nothing is missed.",
      "Every app also offers **Accept All** (and Reject All). It’s handy when you trust every change, such as a proofreader’s typo fixes. But one accepted change can quietly alter a number, delete a sentence you needed, or change a meaning. The OpenStax textbook advises against accepting or rejecting everything at once for the same reason.",
      {ex:"Amara’s grant application comes back from three reviewers with 64 suggestions.\n• She filters to one reviewer at a time (Word: Review → Show Markup → Specific People; in Google Docs each suggestion card shows the reviewer’s name).\n• She accepts the proofreader’s 40 spelling and punctuation fixes in one pass, checking as she goes.\n• She goes through the treasurer’s budget changes one by one, because each affects a number.\n• She rejects two wording changes and replies to explain why, so the reviewer isn’t left guessing.", label:"Worked example: a review with many changes"},
      {tip:"When you reject someone’s suggestion, a short reply (“Keeping the original: the funder requires this wording”) saves an argument later."}
    ]},
    {h:"Version history, tracked changes, compare: which is which?", body:[
      "Three tools answer “what changed?” in different ways. Unit 2 explains version history in detail ({{version-history}}); here’s how it fits with the others.",
      {table:[
        ["Tool","What it is","Best for"],
        ["Tracked changes / suggestions","Each edit recorded and waiting for a decision","Reviewing proposed edits before they become final"],
        ["[[version-history|Version history]]","Saved snapshots of the whole document over time","Going back to yesterday’s version; seeing who changed what, after the fact"],
        ["Compare documents","The app compares two separate files and marks the differences as tracked changes","Someone edited a copy without tracking; two people edited separate copies"]
      ]},
      "**Compare** rescues you when tracking wasn’t on. You give the app the original and the edited copy, and it produces a third document showing every difference as tracked changes, which you can then accept or reject.",
      {table:[
        ["App","Compare two documents"],
        ["Word (desktop)","**Review → Compare → Compare** (on a Mac, **Compare Documents**), then choose the original and the revised file. Microsoft lists Compare as desktop-only"],
        ["Google Docs","**Tools → Compare documents**, then choose the other document. It creates a third Google Doc showing the differences as suggestions. Both files need to be Google Docs: convert a Word file first with **File → Save as Google Docs**"],
        ["LibreOffice Writer","Open the newer version, then **File → Compare Document** (older versions: **Edit → Track Changes → Compare Document**) and pick the original"],
        ["Pages","No compare feature in Apple’s Pages guide; use version history instead"]
      ]},
      {tip:"Compare tools focus on the text. Layout changes (columns, table widths, picture positions) may not all be marked, so check those by eye."}
    ]},
    {h:"One shared file, not a pile of copies", body:[
      "The old way to collaborate was to email a document, wait for edited copies to come back, and merge them by hand. It still happens, and it causes the same problems every time: nobody knows which copy is current, two people edit the same paragraph differently, and someone works for an hour on an out-of-date version.",
      {fig:'<svg viewBox="0 0 340 345"><defs><marker id="m85" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="160" rx="9" stroke-width="2"/><text x="24" y="34">Emailed copies</text><text class="s" x="318" y="34" text-anchor="end">Which one is current?</text><rect class="d-lup" x="20" y="70" width="96" height="40" rx="6" stroke-width="2"/><text x="68" y="95" text-anchor="middle">plan.docx</text><rect class="d-rose" x="170" y="48" width="150" height="30" rx="6" stroke-width="2"/><text x="245" y="68" text-anchor="middle">plan-Ana.docx</text><rect class="d-rose" x="170" y="88" width="150" height="30" rx="6" stroke-width="2"/><text x="245" y="108" text-anchor="middle">plan v2 Kenji.docx</text><rect class="d-rose" x="170" y="128" width="150" height="30" rx="6" stroke-width="2"/><text x="245" y="148" text-anchor="middle">plan FINAL(2).docx</text><path class="d-ink" d="M117,86 L167,63" stroke-width="2" fill="none" marker-end="url(#m85)"/><path class="d-ink" d="M117,90 L167,103" stroke-width="2" fill="none" marker-end="url(#m85)"/><path class="d-ink" d="M117,94 L167,143" stroke-width="2" fill="none" marker-end="url(#m85)"/><rect class="d-panel" x="10" y="185" width="320" height="150" rx="9" stroke-width="2"/><text x="24" y="209">One shared file</text><text class="s" x="318" y="209" text-anchor="end">history and comments kept</text><rect class="d-sage" x="118" y="245" width="104" height="40" rx="6" stroke-width="2"/><text x="170" y="270" text-anchor="middle">plan (shared)</text><circle class="d-gold" cx="52" cy="265" r="22" stroke-width="2"/><text x="52" y="270" text-anchor="middle">Ana</text><circle class="d-gold" cx="288" cy="265" r="22" stroke-width="2"/><text x="288" y="270" text-anchor="middle">Kenji</text><circle class="d-gold" cx="170" cy="312" r="18" stroke-width="2"/><text x="170" y="317" text-anchor="middle">Mei</text><path class="d-ink" d="M75,265 L115,265" stroke-width="2" fill="none" marker-end="url(#m85)"/><path class="d-ink" d="M265,265 L225,265" stroke-width="2" fill="none" marker-end="url(#m85)"/><path class="d-ink" d="M170,293 L170,289" stroke-width="2" fill="none"/></svg>', alt:"Two panels. Top, Emailed copies: one file, plan.docx, has arrows to three diverging copies called plan-Ana.docx, plan v2 Kenji.docx and plan FINAL(2).docx, with the question: which one is current? Bottom, One shared file: Ana, Kenji and Mei all connect to a single file, plan (shared); history and comments are kept.", cap:"Copies multiply and drift apart. A shared file stays one file."},
      "Cloud word processors (and Word, LibreOffice or Pages files kept in [[cloud-storage|cloud storage]]) let several people open **the same file**. Everyone sees the latest text, edits can happen at the same time (you’ll often see other people’s cursors), comments stay attached to the right words, and version history records everything. Unit 2’s {{sharing-permissions}} entry explains [[sharing-link|sharing links]] and [[permissions]]; the key choice is the role you give each person:",
      {list:[
        "**Viewer** (can view): reads only. Good for the final version.",
        "**Commenter**: can comment and, in Google Docs, suggest. Good for reviewers.",
        "**Editor** (can edit): can change anything, including other people’s work and the sharing settings (unless the owner restricts that). Give it to co-authors you trust."
      ]},
      "Emailing a copy is still right sometimes: when the reader is outside your organisation and can’t open your shared files, when you need a fixed record of what was sent on a date, or when it’s simply a final document to read. Then send a **PDF** (Lesson 5), so the copy can’t be confused with the working file.",
      {tip:"If you must pass files around, name them clearly and consistently, with a date in the ISO format (Unit 2’s {{file-naming}}): `2026-11-05 garden plan v3.docx`, not `plan FINAL final(2).docx`."}
    ]},
    {h:"Reviewing kindly and clearly", body:[
      "Reviewing is a conversation. A few habits keep it useful:",
      {list:[
        "**Be specific.** “Unclear” helps nobody. “Who is ‘they’ here: the council or the volunteers?” can be fixed in a minute.",
        "**Explain big changes.** If you rewrite a paragraph, add a comment saying why.",
        "**Separate must-fix from nice-to-have.** For example, start comments with “Must:” or “Optional:”.",
        "**Respect the author’s voice.** Suggest; don’t rewrite everything in your own style.",
        "**Close the loop.** Authors reply to and resolve comments, so reviewers know they were read."
      ]},
      {ex:"Weak: “This bit is wrong.”\nBetter: “Must: the deadline here says 15 March, but the cover letter says 12 March. Which is right?”\nWeak: (rewrites three paragraphs silently)\nBetter: suggests the rewrite and comments “Optional: I shortened this so it fits on one page. Happy to undo.”", label:"Worked example: comments that help"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“No Markup means the changes are gone.”** It only hides them. Accept or reject them, and remove comments, before sharing.",
        "**“Accept All is the quick, safe option.”** It’s quick. It’s only safe if you trust every single change.",
        "**“Version history and track changes are the same thing.”** History saves whole-document snapshots; tracking records each edit as a proposal.",
        "**“If tracking wasn’t on, the changes can’t be found.”** Compare the two files (Word desktop, Google Docs, LibreOffice), or check version history.",
        "**“Emailing copies is safer than sharing.”** It creates confusion about which copy is current. Share one file with the right permissions, and send PDFs for fixed copies."
      ]}
    ]}
   ],
   try:[
    {id:"t1u8-l4-x1", type:"sort", q:"Comment, or tracked change/suggestion?", buckets:["Comment","Tracked change or suggestion"], items:[
      {t:"The date says 2025 but should clearly be 2026", b:1, why:"You know the exact fix and it’s small. A tracked change lets the author accept it with one click."},
      {t:"You’re not sure whether the budget figure includes tax", b:0, why:"That’s a question only the author can answer, so it’s a comment."},
      {t:"“recieve” is misspelled", b:1, why:"A clear, specific correction: make it as a tracked change or suggestion."},
      {t:"You think the whole section on fees might be better near the start", b:0, why:"A big structural idea is something to discuss first. Comment, and let the author decide."},
      {t:"A missing word: “the plot be renewed” should be “the plot will be renewed”", b:1, why:"A specific small edit. Suggest it."},
      {t:"The tone of a paragraph seems too harsh for volunteers", b:0, why:"A judgement call worth discussing. A comment explains your concern without imposing your wording."}
    ]},
    {id:"t1u8-l4-x2", type:"mcq", q:"Tomás finishes reviewing, switches Word to **No Markup** so the document looks clean, and emails it to a client. What’s the risk?", options:[
      {t:"The tracked changes and comments are still in the file, and the client can display them again", ok:true, why:"No Markup only changes the view. Deleted text and comments travel with the file. He should accept or reject every change, remove comments, and ideally send a PDF of the clean version."},
      {t:"None: No Markup removes all changes permanently", why:"It doesn’t remove anything; it hides markup on his screen only."},
      {t:"The client won’t be able to open a document that had tracked changes", why:"They can open it fine, which is exactly the problem: they can also show the markup."},
      {t:"Word will automatically reject all changes when the file is emailed", why:"Word never accepts or rejects changes on its own."}
    ]},
    {id:"t1u8-l4-x3", type:"order", q:"Put a review round in a sensible order.", items:[
      {t:"The author shares the draft, giving reviewers comment (or suggest) access", why:"Reviewers need access, and commenter access lets them comment and suggest without being able to change the text directly."},
      {t:"Reviewers add comments and tracked changes or suggestions", why:"With tracking on, every edit is recorded as a proposal."},
      {t:"The author goes through each change with Next, accepting or rejecting it", why:"Deciding one by one avoids accepting a change that alters meaning or numbers."},
      {t:"With the edits decided, the author replies to and resolves the remaining comments", why:"Closing the loop shows reviewers their points were considered."},
      {t:"The author checks with All Markup that nothing is left, then shares the final", why:"A last check catches any remaining changes or comments before the final goes out."}
    ]},
    {id:"t1u8-l4-x4", type:"match", q:"Match each situation with the tool that fits best.", pairs:[
      ["You want to go back to the document as it was last Tuesday","Version history","History keeps snapshots of the whole document over time, so you can view or restore an older one."],
      ["A reviewer edited a copy without tracking, and you need to see what changed","Compare documents","Compare marks the differences between two files as tracked changes."],
      ["You want your proofreader’s edits to wait for your approval","Track changes or suggesting mode","Each edit is recorded as a proposal you accept or reject."],
      ["You want to ask the treasurer whether a figure is final","A comment","A question goes in a comment; it doesn’t change the text."]
    ]},
    {id:"t1u8-l4-x5", type:"mcq", q:"Mei shares a Google Doc with a volunteer and gives them **Commenter** access. The volunteer wants to fix a typo. What can they do?", options:[
      {t:"Make a suggestion, which Mei can then accept or reject", ok:true, why:"Google’s help says people can suggest edits when they have permission to comment on or edit the document. Commenters’ edits arrive as suggestions."},
      {t:"Nothing at all; commenters can only read", why:"That describes Viewer access. Commenters can comment and suggest."},
      {t:"Fix it directly, the same as an editor", why:"Commenters can’t change the text directly; their changes become suggestions."},
      {t:"Accept their own suggestion", why:"Accepting suggestions needs edit access, so Mei (an editor) decides."}
    ]},
    {id:"t1u8-l4-x6", type:"mcq", q:"Sione emails a newsletter draft to four volunteers. Four edited copies come back, two with changes to the same paragraph. What would have avoided most of the trouble?", options:[
      {t:"Sharing one file with the volunteers as commenters or editors, with suggestions or tracking on", ok:true, why:"Everyone works on the same file, sees each other’s changes, and Sione accepts or rejects each one in one place."},
      {t:"Asking the volunteers to reply faster", why:"Speed doesn’t stop copies drifting apart. The problem is having four separate copies."},
      {t:"Sending the draft as a PDF so nobody can edit it", why:"A PDF suits a final version, but reviewers then can’t suggest edits directly."},
      {t:"Giving each copy a different font colour", why:"That doesn’t merge anything. Sione would still compare four files by hand."}
    ]},
    {id:"t1u8-l4-x7", type:"mcq", q:"Hana uses Word for the web with a free account. She has two versions of a file (no tracked changes) and wants to see the differences. What can she do?", options:[
      {t:"Use Compare in desktop Word if she has it, or convert both to Google Docs and use Tools → Compare documents, or use LibreOffice’s Compare Document", ok:true, why:"Microsoft lists Compare as a desktop-only feature, so the web version can’t do it. Google Docs (once both files are converted to Google Docs) and LibreOffice are free tools that can."},
      {t:"Turn on Track Changes now; it will show what changed earlier", why:"Tracking only records edits made after it’s turned on."},
      {t:"Switch to No Markup view", why:"Markup views show existing tracked changes; there are none to show."},
      {t:"She can’t compare documents without paying", why:"Free options exist: Google Docs and LibreOffice both compare documents."}
    ]}
   ],
   apply:{intro:"Practise a full review round. Ideally ask a friend or family member to review a short document; if not, review your own using a second account or a second device.", tasks:[
     {t:"Comment, and make tracked edits or suggestions", app:{
       ms:["Select a phrase and choose **Review → New Comment**. Type a question and post it.","Choose **Review → Track Changes → For Everyone**. (In some versions you can also switch the mode menu at the top right from **Editing** to **Reviewing**.)","Delete a word, add a sentence and change a date. Notice the colours and the change bars in the margin.","Look at **Display for Review**: switch between **All Markup**, **Simple Markup** and **No Markup**, and notice the changes are still there."],
       google:["Select a phrase and choose **Insert → Comment** ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:M]]). Type a question and click **Comment**.","Open the mode menu at the top right (it says **Editing**) and choose **Suggesting**.","Delete a word, add a sentence and change a date. Each edit appears as a suggestion card.","Switch back to **Editing** when you’re done suggesting."],
       libre:["Select a phrase and choose **Insert → Comment** ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:C]]). Type a question.","Choose **Edit → Track Changes → Record**.","Delete a word, add a sentence and change a date. Notice the coloured markup.","Check **Edit → Track Changes → Show** is ticked so you can see the changes."],
       apple:["Select a phrase and choose **Insert → Comment**. Type a question.","Choose **Edit → Track Changes**. A review toolbar appears above the document.","Delete a word, add a sentence and change a date.","Use the review toolbar’s view menu to switch between **Markup** and **Final**, and notice the changes are still there."]
     }},
     {t:"Accept, reject and clean up", app:{
       ms:["Go to the start of the document and click **Review → Next** to jump to the first change.","Accept one and reject one (**Review → Accept** / **Reject**).","Reply to the comment, then resolve it (or delete it).","With **All Markup** showing, check there’s nothing left before you would share the file."],
       google:["Click a suggestion and choose ✓ (accept) or ✗ (reject).","Try **Tools → Review suggested edits** to step through the rest, and look at the preview options before using **Accept all** or **Reject all**.","Reply to the comment, then click **Resolve**."],
       libre:["Choose **Edit → Track Changes → Manage**.","Select each change in the list and click **Accept** or **Reject**.","Right-click the comment to reply, then resolve or delete it."],
       apple:["Hover over a change and click **Accept** or **Reject**.","For the rest, use the review toolbar’s menu: **Accept All Changes** or **Reject All Changes**.","Reply to or delete the comment.","To turn tracking off, Apple says every change must be accepted or rejected first."]
     }},
     {t:"Compare two versions of a document", appNote:"Apple’s Pages guide has no compare feature. Use **File → Revert To → Browse All Versions** to look back through saved versions instead (see Unit 2’s version history entry), or export both versions to Word format and compare them in LibreOffice (or convert them to Google Docs and compare them there).", app:{
       ms:["This needs **desktop** Word: Microsoft lists Compare as desktop-only.","Save a copy of a document, then change a few words in the copy (without tracking).","Choose **Review → Compare → Compare** (Mac: **Compare Documents**). Pick the original as **Original** and the copy as **Revised**.","Word opens a new document showing the differences as tracked changes."],
       google:["Make a copy of a Google Doc (**File → Make a copy**) and change a few words in it.","Open the original, choose **Tools → Compare documents**, and choose the copy.","Click **Compare**, then **Open**. The new document shows every difference as a suggestion."],
       libre:["Save a copy of a document under a new name and change a few words in it.","With the edited copy open, choose **File → Compare Document** (older versions: **Edit → Track Changes → Compare Document**).","Choose the original. The differences appear as tracked changes you can accept or reject."]
     }}
   ], proof:"A document that went through a full round: at least one comment replied to and resolved, at least one change accepted and one rejected, nothing left with All Markup showing, and a comparison of two versions in an app that supports it."},
   read:[
     {book:"wss", where:"Section 3.4 “Collaborative Editing and Reviewing in Microsoft Word”: “Comments” and “Tracking Changes”"},
     {book:"wss", where:"Section 3.8 “Collaborative Editing and Reviewing in Google Docs”: “Suggesting Mode” and “Reviewing Suggested Edits”"},
     {book:"wss", where:"Section 3.9 “Versions and Version History”", note:"Version limits and prices quoted there may have changed since 2023; Unit 2’s version history entry has current details."},
     {book:"wss", where:"Section 5.6 “Advanced Collaboration in Google Docs” (sharing, link types and permissions)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u8-l5", title:"Accessible, shareable documents", minutes:55,
   goals:[
     "Check a document for accessibility, with a checker and by hand",
     "Write descriptive link text and choose text colours with enough contrast",
     "Choose between .docx, .odt, .pages, PDF and PDF/A, and export a good PDF",
     "Use templates, word count and smaller images, and know what mail merge is for"
   ],
   learn:[
    {h:"Who reads your document, and how", body:[
      {lead:"You picture someone reading your document the way you do. But many readers meet it differently, and small choices decide whether it works for them."},
      "Some readers are blind and use a [[screen-reader|screen reader]] (such as NVDA, JAWS or Narrator on Windows, VoiceOver on Apple devices, or TalkBack on Android), which reads the text aloud or sends it to a braille display. Some have low vision and zoom in to 300 percent, or use high-contrast colours. Some are colour-blind. Some read on a phone, or through a translation tool, or print it in black and white. Some have dyslexia or are reading in their second language.",
      "An **accessible** document works for all of them. The good news: you’ve already learned most of it. Heading styles, real lists, simple tables with header rows, in-line images with alt text: every one of those is an accessibility skill. Accessible documents are also easier for **everyone** to skim, search, convert and reuse.",
      {key:"Accessibility isn’t an extra layer added at the end. It’s what you get when the structure is real."}
    ]},
    {h:"The checklist", body:[
      "Official guidance from Microsoft, Google, Apple and the W3C (the body behind the web’s accessibility standard, WCAG) broadly agrees on these points:",
      {table:[
        ["Check","Why"],
        ["Headings use heading styles, in order, without skipped levels","Screen-reader users jump by heading and use the levels to understand the structure"],
        ["Every informative image has alt text; decorative ones are marked decorative","Otherwise the image is silent, or announced as a file name"],
        ["Lists are real lists","Screen readers announce the list and its length"],
        ["Tables hold data, have a header row, and no merged cells or blank rows","People navigate tables cell by cell, using the headers to know where they are"],
        ["Link text says where the link goes","Screen-reader users often list all links; ten links called “click here” are useless"],
        ["Text has enough contrast with its background","Low contrast is hard to read for many people, and on phones in sunlight"],
        ["Colour is never the only signal","Colour-blind readers, and black-and-white printouts, lose it"],
        ["The document has a title and its language is set","Screen readers announce the title and use the language to pronounce words correctly"]
      ]},
      "**Link text.** Google’s advice is to use the page’s title as the link text: for example, “my profile” rather than “click here”. Compare “To apply, [click here]” with “Read the [plot application guide]”. The second makes sense on its own.",
      "**Contrast.** WCAG 2.2, the current web accessibility standard, sets a minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text (at least 18 point, or 14 point bold). Its stricter AAA level asks for 7:1. Black on white is 21:1; light grey on white often fails. Free contrast checkers (search for “WebAIM contrast checker”) tell you the ratio for two colours.",
      {tip:"“Never more than six bullets” and “always use 12 point or bigger” are common tips, not standards. Apple’s accessibility advice says fonts smaller than 10 point can be harder for some people to read; that’s guidance, not a rule. Readable size, clear structure and plain language matter more than any single number."},
      {ex:"Fatima marks overdue invoices in red in a payment table. A colleague with red–green colour blindness can’t tell them apart, and the black-and-white printout loses the colour entirely.\nFix: add a Status column that says “Overdue”. The red can stay as an extra signal.", label:"Worked example: colour as the only signal"}
    ]},
    {h:"Accessibility checkers: helpful, not complete", body:[
      "An [[accessibility-checker|accessibility checker]] scans a document for problems a computer can detect: missing alt text, skipped heading levels, tables without headers, low contrast, missing title.",
      {table:[
        ["App","Built-in checker?"],
        ["Word","Yes: **Review → Check Accessibility**. Lists errors and warnings, each with recommended fixes. (Older versions: **File → Info → Check for Issues → Check Accessibility**.)"],
        ["LibreOffice Writer","Yes: **Tools → Accessibility Check**, with an Accessibility Check panel in the sidebar that links to each issue and offers **Fix** buttons. It also runs when you export a PDF/UA file"],
        ["Google Docs","No built-in checker. Check by hand using the checklist; third-party add-ons exist in the Google Workspace Marketplace"],
        ["Pages","No built-in checker in Apple’s guide. Check by hand: Apple’s advice covers heading styles, image descriptions, table header rows and a table of contents"]
      ]},
      {warn:"A checker can tell that alt text **exists**, not whether it makes sense. “photo” passes. It can’t tell whether your headings describe their sections, whether your instructions are clear, or whether a chart’s message gets across. Always finish with a human read-through, and if you can, ask a screen-reader user."}
    ]},
    {h:"Choosing a file format", body:[
      "When you send or store a document, the [[file-format|file format]] decides who can open it, whether they can edit it, and whether it looks the same. Unit 2’s {{file-formats}} entry explains formats in general. For documents, these are the main ones:",
      {table:[
        ["Format","What it is","Use it when"],
        ["[[docx|.docx]]","Word’s format (Office Open XML, an international standard)","People will edit it, especially in Word; the most widely accepted editable format"],
        ["[[odt|.odt]]","OpenDocument Text, an [[open-format|open]] international standard; LibreOffice’s default","Editing with open-source tools; long-term editable storage. Word and Google Docs can open it, sometimes with small layout differences"],
        [".pages","Apple Pages’ own format","Only between Pages users. Others may not be able to open it: export to .docx or PDF"],
        ["Google Docs","Stored online in Google Drive; not a file on your computer until you download one","Working together in Docs; download a copy (.docx, .odt, PDF) to send elsewhere"],
        ["[[pdf|PDF]]","Fixed layout that looks the same on every device","Final versions to read, print or sign; anything that must not change by accident"],
        ["[[pdf-a|PDF/A]]","An archive version of PDF (ISO 19005) with everything needed to display it inside the file","Records that must still open correctly in many years"]
      ]},
      {fig:'<svg viewBox="0 0 340 236"><defs><marker id="m86" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="32" text-anchor="middle">Will they need to</text><text x="103" y="50" text-anchor="middle">edit it?</text><rect class="d-sage" x="236" y="10" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="32" text-anchor="middle">.docx or .odt,</text><text class="s" x="284" y="48" text-anchor="middle">or a share link</text><path class="d-ink" d="M197,36 L233,36" stroke-width="2" marker-end="url(#m86)"/><text class="s" x="215" y="28" text-anchor="middle">yes</text><path class="d-ink" d="M103,63 L103,90" stroke-width="2" marker-end="url(#m86)"/><text class="s" x="112" y="81">no</text><rect class="d-lup" x="10" y="92" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="114" text-anchor="middle">Must it open the same</text><text x="103" y="132" text-anchor="middle">in many years?</text><rect class="d-gold" x="236" y="92" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="114" text-anchor="middle">PDF/A</text><text class="s" x="284" y="130" text-anchor="middle">archive copy</text><path class="d-ink" d="M197,118 L233,118" stroke-width="2" marker-end="url(#m86)"/><text class="s" x="215" y="110" text-anchor="middle">yes</text><path class="d-ink" d="M103,145 L103,172" stroke-width="2" marker-end="url(#m86)"/><text class="s" x="112" y="163">no</text><rect class="d-rose" x="10" y="174" width="322" height="52" rx="9" stroke-width="2"/><text x="171" y="196" text-anchor="middle">PDF</text><text class="s" x="171" y="214" text-anchor="middle">tagged, with bookmarks from your headings</text></svg>', alt:"A decision tree. Will they need to edit it? Yes: send .docx or .odt, or a share link. No: must it open the same in many years? Yes: PDF/A archive copy. No: PDF, tagged, with bookmarks from your headings.", cap:"A quick way to choose. Keep your editable original either way."},
      {key:"Keep the editable original. A PDF is for reading; when something changes, you edit the original and export a new PDF."}
    ]},
    {h:"Exporting a good PDF", body:[
      "Every word processor can turn a document into a PDF, but not every PDF is equally good. A good PDF has selectable, searchable text (not a picture of text), **tags** that tell screen readers what is a heading, a list, a table or an image (with its alt text), and **bookmarks** built from your headings for quick navigation. If your source document has real structure, the export carries it over.",
      {table:[
        ["App","Export a PDF"],
        ["Word (desktop, Windows)","**File → Save a Copy** (or **Save As**), choose **PDF**, then **More options → Options**: keep **Document structure tags for accessibility** ticked, choose **Create bookmarks using: Headings**, and tick **ISO 19005-1 compliant (PDF/A)** for an archive copy"],
        ["Word for the web","**File → Export → Download as PDF** (or **Download as PDF with comments**)"],
        ["Google Docs","**File → Download → PDF document (.pdf)**"],
        ["LibreOffice Writer","**File → Export As → Export as PDF**. On the **General** tab, tick **Universal Accessibility (PDF/UA)** for a tagged, checked PDF, or **Archive (PDF/A, ISO 19005)** for an archive copy"],
        ["Pages (Mac)","**File → Export To → PDF**, choose an **Image Quality**, then **Save**. Apple says image descriptions are exported automatically, and the table of contents appears in the PDF’s navigation pane"]
      ]},
      "[[pdf-a|PDF/A]] is a version of PDF designed for long-term archiving (international standard ISO 19005): the fonts and everything needed to display the file are stored inside it, and features that could stop it opening in the future, such as encryption, aren’t allowed. Organisations that keep official records often ask for it. [[pdf-ua|PDF/UA]] (ISO 14289) is the standard for accessible PDFs.",
      {tip:"After exporting, open the PDF and test it: does the bookmarks (or outline) panel show your headings? Can you select and search the text? Do links work? A minute of checking catches most export problems."},
      {warn:"A scanned page saved as PDF is a **picture** of text. Screen readers can’t read it and search can’t find words in it. If you have the original document, export that instead. If not, some apps can run text recognition (OCR) on scans."}
    ]},
    {h:"Templates, word count and file size", body:[
      "A [[template]] is a starting document that you open as a fresh copy each time: styles, page setup, header and footer, logo, and placeholder text already in place. A volunteer group might have one template for meeting minutes and another for letters, so every document looks consistent without anyone rebuilding the styles.",
      {list:[
        "**Word:** save as **Word Template (.dotx)**; new documents made from it are separate .docx files. **File → New** shows ready-made templates.",
        "**Google Docs:** the **Template gallery** on the Docs home screen. Google Workspace organisations can add their own templates to it; with a personal account, keep a master document and use **File → Make a copy**.",
        "**LibreOffice:** **File → Templates → Save as Template** (an .ott file); **File → New → Templates** to use one.",
        "**Pages:** **File → Save as Template**; your template then appears in the template chooser."
      ]},
      "[[word-count|Word count]] matters when there’s a limit: a grant application, an essay, a 250-word summary. Find it under **Review → Word Count** in Word (also in the status bar), **Tools → Word count** in Google Docs ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]]), **Tools → Word Count** in LibreOffice (also opened by double-clicking the count in the status bar) and the toolbar’s **View** button → **Show Word Count** in Pages. Select some text first to count just that part. Apps count slightly differently: Google Docs, for example, leaves out headers, footers and footnotes unless you select them. If a limit is strict, check what the organisation counts.",
      "**File size.** Text takes up very little space; images take up a lot. A document with a dozen full-size phone photos can easily be tens of megabytes, too big for some email systems and slow to open on a phone. Shrink images before or after inserting them: Word has **Picture Format → Compress Pictures** (desktop), LibreOffice has **Compress** on an image’s right-click menu, Pages has **File → Reduce File Size**, and PDF exports often let you choose image quality. Unit 1’s {{file-size-units}} entry explains the units.",
      {ex:"Kenji’s newsletter has 12 photos, each about 4 MB straight from his phone: roughly 12 × 4 = 48 MB, before any text.\nCompressed for screen and print at a sensible resolution, each photo drops to around 0.3 MB: about 12 × 0.3 = 3.6 MB in total. The newsletter looks the same on a screen and is easy to email.", label:"Worked example: why compress images"}
    ]},
    {h:"Mail merge in one minute", body:[
      "Need the same letter, certificate or label for 80 people, each with their own name and details? **Mail merge** combines a **main document** (the letter, with placeholders) and a **data source** (a list of recipients, usually a spreadsheet table or a contacts list). Each placeholder is a [[merge-field|merge field]] such as «First name» or «Plot». The app makes one copy of the document per row of the list.",
      "Where it lives: Word desktop’s **Mailings** tab (Microsoft lists mail merge as desktop-only); LibreOffice’s **Tools → Mail Merge Wizard**; Pages’ **Document** sidebar → **Mail Merge** (using a Contacts group or a Numbers spreadsheet). Google Docs has no built-in mail merge; Gmail’s mail merge for emails needs a paid Google Workspace plan. The {{mail-merge}} Codex entry walks through it."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The checker says it’s fine, so it’s accessible.”** Checkers find missing things, not meaningless ones. Read it through as a human.",
        "**“PDF is always the most accessible format.”** A PDF is only as good as its tags. An untagged or scanned PDF can be the least accessible format of all.",
        "**“Click here is friendly link text.”** Out of context it says nothing. Name the destination.",
        "**“Red means overdue; everyone can see that.”** Not colour-blind readers, and not black-and-white printers. Add words."
      ]}
    ]}
   ],
   try:[
    {id:"t1u8-l5-x1", type:"spot", q:"Lucía’s event flyer, described part by part. Tap each accessibility problem.", ask:"accessibility problems", parts:[
      {t:"Title uses the Title style", flag:false, why:"A styled title is exactly right: screen readers and the PDF get a real title."},
      " · ",
      {t:"Photo’s alt text: “IMG_2231.jpg”", flag:true, why:"A file name tells a listener nothing. Describe what the photo shows and why it’s there."},
      " · ",
      {t:"Sections use Heading 1, then Heading 2", flag:false, why:"Headings in order, no skipped levels: good structure."},
      " · ",
      {t:"Link text: “click here”", flag:true, why:"Out of context it says nothing. Use the destination, such as “booking form”."},
      " · ",
      {t:"Pale yellow text on white", flag:true, why:"Very low contrast, well below WCAG’s 4.5:1 for normal text. Use a darker colour."},
      " · ",
      {t:"Times table with a marked header row", flag:false, why:"A data table with a real header row is accessible."},
      " · ",
      {t:"“Sold-out sessions are shown in red”", flag:true, why:"Colour is the only signal. Add the words “sold out”."},
      " · ",
      {t:"Decorative border marked as decorative", flag:false, why:"Correct: screen readers skip it."}
    ]},
    {id:"t1u8-l5-x2", type:"mcq", q:"Which link text is best in a document about renting a garden plot?", options:[
      {t:"Read the plot rental terms (PDF, 2 pages)", ok:true, why:"It says where the link goes and what to expect, and makes sense when read alone in a list of links."},
      {t:"Click here", why:"Out of context it says nothing about the destination."},
      {t:"https://example.org/terms.pdf", why:"A raw web address is long and hard to listen to. LibreOffice’s accessibility check flags link text that is just the address."},
      {t:"More", why:"“More” of what? Listeners hearing a list of links can’t tell."}
    ]},
    {id:"t1u8-l5-x3", type:"number", q:"Kenji’s report contains 15 photos of about 3.2 MB each, straight from his phone. Roughly how many megabytes do the photos add to the file?", answer:48, tol:1, unit:"MB", why:"15 × 3.2 MB = 48 MB. That’s why compressing images matters: at around 0.3 MB each, the same photos would add only about 4.5 MB.", wrongs:[
      {v:18.2, tol:0.5, why:"That adds 15 and 3.2 instead of multiplying. Each of the 15 photos adds 3.2 MB."},
      {v:4.8, tol:0.3, why:"That’s ten times too small: 15 × 3.2 is 48, not 4.8."},
      {v:480, tol:5, why:"That’s ten times too big: 15 × 3.2 is 48."}
    ], hint2:"Multiply the number of photos by the size of each one."},
    {id:"t1u8-l5-x4", type:"sort", q:"Which format should each go out as?", buckets:["Editable (.docx or .odt, or a shared link)","PDF","PDF/A"], items:[
      {t:"A draft policy that three committee members will edit", b:0, why:"People need to change it, so send an editable format (or better, share one file)."},
      {t:"The final event programme for attendees to read and print", b:1, why:"Readers shouldn’t change it, and it must look the same everywhere."},
      {t:"Signed minutes that the association must keep for many years", b:2, why:"Long-term records are what PDF/A is for: everything needed to display them is inside the file."},
      {t:"A CV that a recruiter asked for “in Word format”", b:0, why:"They asked for an editable format; .docx is what they mean."},
      {t:"A price list for customers to look at on their phones", b:1, why:"A fixed, final document for reading: PDF (or a web page)."}
    ]},
    {id:"t1u8-l5-x5", type:"mcq", q:"Hana wants grey text on a white background for a newsletter. A contrast checker says the ratio is 3.1:1. The text is normal 11 pt body text. What does WCAG 2.2 say?", options:[
      {t:"It fails: normal-size text needs at least 4.5:1", ok:true, why:"3:1 is only enough for large text (18 pt, or 14 pt bold). Body text needs 4.5:1, so she should choose a darker grey."},
      {t:"It passes, because anything above 3:1 is fine", why:"3:1 is the minimum for large text only. Normal text needs 4.5:1."},
      {t:"It passes if she makes it italic", why:"Italic doesn’t count as large text, and can make reading harder."},
      {t:"Contrast rules only apply to websites", why:"WCAG was written for the web, but it’s the standard document checkers and accessibility guidance use too, and low contrast is just as hard to read on paper."}
    ]},
    {id:"t1u8-l5-x6", type:"match", q:"Match each format to its description.", pairs:[
      [".docx","Word’s editable format, widely accepted","Office Open XML: the format most organisations expect for editable documents."],
      [".odt","OpenDocument Text, the open standard LibreOffice uses by default","An open international standard, readable by many apps."],
      [".pages","Apple Pages’ own format, which other apps may not open","Export to .docx or PDF before sending to people who don’t use Pages."],
      ["PDF/A","A PDF for long-term archiving, with fonts embedded","ISO 19005: designed so files still display correctly years from now."]
    ]},
    {id:"t1u8-l5-x7", type:"mcq", q:"Word’s accessibility checker reports no issues for Tomás’s report. Every image’s alt text is “picture”. What’s true?", options:[
      {t:"The report still isn’t accessible: the checker can only see that alt text exists, not whether it’s useful", ok:true, why:"Checkers detect missing items. “picture” tells a listener nothing; each image needs a real description (or a decorative mark)."},
      {t:"It’s fully accessible, because the checker passed it", why:"Checkers can’t judge meaning. A human read-through is still needed."},
      {t:"Alt text doesn’t matter if there are captions", why:"Captions and alt text do different jobs; and he doesn’t have captions either."},
      {t:"He should delete the alt text so the checker reports an error", why:"That makes things worse. Write meaningful descriptions instead."}
    ]}
   ],
   apply:{intro:"Make one real document ready to share: accessible, in the right format, and easy to reuse.", tasks:[
     {t:"Check accessibility and fix at least three issues", write:"The issues I found and how I fixed them", app:{
       ms:["Choose **Review → Check Accessibility**. (If it isn’t there: **File → Info → Check for Issues → Check Accessibility**.)","Click each error or warning in the pane and use **Recommended Actions** to fix it.","Then check by hand what the checker can’t judge: do the headings describe their sections? Is each alt text meaningful? Does every link name its destination?"],
       google:["Docs has no built-in checker, so check by hand.","**View → Show outline**: are all headings there, in order, without skipped levels?","Click each image → **Image options → Alt text**: is there a meaningful description?","Look at every link: does its text name the destination? Look at coloured text: is it dark enough, and is colour never the only signal?","Check every table has a header row (**Format → Table → Table options → Pin header row(s)**)."],
       libre:["Choose **Tools → Accessibility Check**.","Work through the list in the **Accessibility Check** panel: click an issue to jump to it, and use **Fix** where it’s offered.","Set the document title in **File → Properties → Description** if the check asks for it.","Then check by hand what it can’t judge: meaningful alt text, clear headings and link text."],
       apple:["Pages has no built-in checker, so check by hand.","Open the **Table of Contents** sidebar (**View** button → **Table of Contents**): are all headings there, using heading styles?","Select each image: is there a **Description** in the **Format → Image** tab?","Check tables have header rows, link text names its destination, and colour is never the only signal."]
     }},
     {t:"Export a PDF and test it", app:{
       ms:["Desktop (Windows): **File → Save a Copy** (or **Save As**), choose **PDF** as the type, then **More options → Options**.","Make sure **Document structure tags for accessibility** is ticked and **Create bookmarks using: Headings** is chosen. Tick **ISO 19005-1 compliant (PDF/A)** if it’s an archive copy. Save.","Word for the web: **File → Export → Download as PDF**.","Open the PDF: check the bookmarks panel shows your headings, and that you can search for a word."],
       google:["Choose **File → Download → PDF document (.pdf)**.","Open the PDF: check you can select and search the text, and that links work.","Look at the PDF reader’s outline or bookmarks panel and note whether your headings appear."],
       libre:["Choose **File → Export As → Export as PDF**.","On the **General** tab, tick **Universal Accessibility (PDF/UA)** (it runs the accessibility check first), or **Archive (PDF/A, ISO 19005)** for an archive copy. Click **Export**.","Open the PDF and check the bookmarks, search and links."],
       apple:["Choose **File → Export To → PDF**.","Choose an **Image Quality** (higher quality means a bigger file), click **Save**, name it and click **Export**.","Open the PDF: check the table of contents appears in the navigation panel and that you can search for a word."]
     }},
     {t:"Save a reusable template and check the word count", app:{
       ms:["Set up a document with your styles, page setup and footer, and delete the content you don’t want to repeat.","In the desktop app, choose **File → Save As** and pick **Word Template (*.dotx)** as the type. (Word for the web can use templates but doesn’t save .dotx files; keep a master document and make copies instead.)","Open a normal document and choose **Review → Word Count**. Select one paragraph and check again."],
       google:["Set up a master document with your styles, page setup and footer.","Name it clearly (for example “TEMPLATE – meeting minutes”). Each time, use **File → Make a copy** instead of editing the master. (Workspace organisations can add templates to the Template gallery.)","Choose **Tools → Word count** ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]]). Tick **Display word count while typing** to keep it on screen."],
       libre:["Set up a document with your styles, page setup and footer.","Choose **File → Templates → Save as Template**, give it a name and a category, and save.","Choose **Tools → Word Count**, or look at the count in the status bar."],
       apple:["Set up a document with your styles, page setup and footer.","Choose **File → Save as Template** and add it to the template chooser.","Click the **View** button in the toolbar and choose **Show Word Count** to see the count at the bottom of the window."]
     }}
   ], proof:"A document that passes a checker (where your app has one) and your own hand check, a PDF whose text you can search and whose headings appear as bookmarks (where your app adds them), and a template you can start your next document from."},
   read:[
     {book:"wss", where:"Section 5.1 “Creating Different Document Types in Microsoft Word” (templates) and Section 5.4 “Creating Different Document Types in Google Docs”"},
     {book:"wss", where:"Section 5.2 “Mail Merge in Microsoft Word”"},
     {book:"wss", where:"Background reading: Section 3.3 “Formatting Document Content in Microsoft Word”: “Headings”", note:"The book doesn’t have a section on accessibility or PDF export; it does advise not using colour alone to show heading levels."}
   ]
  }
  ],
  checkpoint:["t1u8-q02","t1u8-q05","t1u8-q08","t1u8-q12","t1u8-q15","t1u8-q20","t1u8-q23","t1u8-q28","t1u8-q31","t1u8-q37","t1u8-q40","t1u8-q44"],
  codex:[
   {id:"styles-headings", title:"Styles and headings", aka:["paragraph styles","heading styles","Heading 1","document outline","table of contents"], tags:["documents","structure"],
    summary:"Named formatting that says what text is, so headings, the outline, the table of contents and accessibility all work from one source.",
    levels:{
     starter:[
      "A [[style]] is a saved set of formatting with a name, such as **Heading 1** or **Normal**. Instead of making each heading big and bold by hand, you give it the Heading 1 style. Every Heading 1 then looks the same, and if you change the style, all of them change at once.",
      "Styles also tell your app what each paragraph **is**. That’s why styled headings can appear in a clickable map of the document (the navigation pane or outline), in an automatic table of contents, as bookmarks in a PDF, and as headings that screen-reader users can jump between.",
      "Use **Heading 1** for main sections, **Heading 2** for the sections inside them, and **Heading 3** below that. Don’t skip a level, and don’t choose a level because of its size: if a heading looks too big or small, change the style.",
      {key:"Format by saying what something is, not how it should look."}
     ],
     builder:[
      {table:[["App","Apply a heading","See the outline","Insert a TOC"],["Word","**Home** → Styles gallery ([[kbd:Ctrl]]+[[kbd:Alt]]+[[kbd:1]])","**View → Navigation Pane**","**References → Table of Contents**"],["Google Docs","Style box or **Format → Paragraph styles** ([[kbd:Ctrl]]+[[kbd:Alt]]+[[kbd:1]])","**View → Show outline**","**Insert → Page elements → Table of contents**"],["LibreOffice Writer","**Styles** menu ([[kbd:Ctrl]]+[[kbd:1]])","**View → Navigator** ([[kbd:F5]])","**Insert → Table of Contents and Index**"],["Pages","**Format → Text** → paragraph style menu","**View** button → **Table of Contents**","**Insert → Table of Contents**"]]},
      "Change a style rather than individual headings: in Word, right-click the style → **Modify**; in Google Docs, format one heading, then **Format → Paragraph styles → Heading N → Update to match**; in LibreOffice, right-click the style in the Styles sidebar ([[kbd:F11]]) → **Edit Style**; in Pages, change one, then click **Update** beside the style name.",
      "Update the table of contents before sharing: **References → Update Table** in Word, **Refresh** in Google Docs, **Update Index** in LibreOffice. Pages updates its TOC automatically.",
      "Spacing between paragraphs belongs in the style (space before and after), not in empty paragraphs. Turn on formatting marks to find empty ¶ marks, typed spaces and tab chains.",
      "**Pasting brings formatting with it.** Text pasted from a web page or another document often arrives with its own fonts and styles. Paste without formatting instead ([[kbd:Ctrl]]+[[kbd:Shift]]+[[kbd:V]] in Google Docs; **Keep Text Only** in Word’s paste options; [[kbd:Ctrl]]+[[kbd:Alt]]+[[kbd:Shift]]+[[kbd:V]] in LibreOffice), then apply your own styles."
     ],
     pro:[
      "Under the hood, each heading style carries an **outline level** (1–9 in Word and LibreOffice; Google Docs offers Heading 1–6). The navigation pane, TOC, PDF bookmarks and tagged PDF structure all read that level, not the font size. You can also give a custom style an outline level, or (in LibreOffice’s TOC dialog) assign extra styles to TOC levels with **Additional Styles**.",
      {list:["**Style inheritance:** in Word and LibreOffice, styles are usually based on other styles (Heading 2 on Heading 1, or headings on a common base). Change the base font and everything built on it follows.","**Paragraph vs character styles:** paragraph styles apply to whole paragraphs; character styles (such as Emphasis or Strong) to selected words. Using Strong instead of direct bold makes emphasis consistent and changeable.","**Pagination settings in styles:** set Heading 1 to “page break before” and all headings to “keep with next”, so chapters start on new pages and headings never sit alone at the bottom of a page.","**Heading numbering:** numbered headings (1, 1.1, 1.2) should come from the app’s heading-numbering feature (LibreOffice: **Tools → Heading Numbering**; Word: multilevel lists linked to heading styles), not typed numbers, so they renumber when sections move.","**Templates carry styles:** define the styles once in a template and every document made from it inherits them (see {{templates}})."]},
      {tip:"When documents are pasted together from many sources, they collect stray styles and direct formatting. Pasting as plain text, then applying your own styles, is often faster than cleaning up."}
     ]
    },
    related:["page-layout","document-accessibility","templates","pdf-export"],
    read:[{book:"wss", where:"Section 3.3 “Formatting Document Content in Microsoft Word”: “Headings”; Section 4.3 “Managing Long Documents in Microsoft Word”: “Table of Contents”"}],
    sources:[{t:"Microsoft Support: Insert a table of contents", url:"https://support.microsoft.com/en-us/word/training/insert-a-table-of-contents"},{t:"Google Docs Editors Help: Add a title, heading, or table of contents in a document", url:"https://support.google.com/docs/answer/116338?hl=en&co=GENIE.Platform%3DDesktop"},{t:"LibreOffice Help: Creating a Table of Contents", url:"https://help.libreoffice.org/latest/en-US/text/swriter/guide/indices_toc.html"}], checked:"2026-11"},

   {id:"page-layout", title:"Page layout: size, margins, breaks and sections", aka:["page setup","A4","US Letter","margins","section break","page break","headers and footers","page numbers"], tags:["documents","layout"],
    summary:"The page frame (paper size, orientation, margins), breaks that let text flow, sections for different settings, and headers, footers and page numbers.",
    levels:{
     starter:[
      "Every page-based document has a frame: the **paper size**, the [[orientation]] (portrait or landscape), and the [[margin|margins]] around the text. Most of the world uses **A4** paper (210 × 297 mm); the United States, Canada and some other countries mostly use **US Letter** (8.5 × 11 in). Set the size to what your readers will print on.",
      "Text in a document flows from page to page by itself. Work with that flow: use a [[page-break|page break]] to start a new page, not a row of empty lines, and use a [[section-break|section break]] when part of the document needs different settings, such as one landscape page.",
      "Page numbers go in the [[header-footer|header or footer]] as an automatic field, never typed by hand. And don’t line things up with spaces: their width changes with the font. Use tab stops, tables or columns."
     ],
     builder:[
      {table:[["App","Size, orientation, margins","Section break","Page numbers"],["Word","**Layout → Size / Orientation / Margins**","**Layout → Breaks** (desktop only)","**Insert → Page Number**"],["Google Docs","**File → Page setup** (Pages, not Pageless)","**Insert → Break → Section break**","**Insert → Page elements → Page number**"],["LibreOffice Writer","**Format → Page Style → Page**","Manual break with another page style","**Insert → Page Number**"],["Pages","**Document** sidebar → **Document** tab","**Insert → Section Break**","In the header or footer"]]},
      "A page break is [[kbd:Ctrl]]+[[kbd:Enter]] in Word, Google Docs and LibreOffice on Windows, or **Insert → Page Break** (Google Docs: **Insert → Break → Page break**) in all four apps.",
      "Section breaks: **Next page** starts the new section on a new page; **Continuous** starts it on the same page (handy for changing the number of columns). Each section can have its own orientation, margins, columns, headers and footers, and page numbering.",
      "In Word, a new section’s headers and footers start linked to the previous section (“Link to Previous”); unlink them before making them different. In Google Docs, headers, footers, page numbers, columns and page setup options aren’t available in **pageless** format.",
      "For aligned lists such as price lists, use one tab and a **tab stop** (right-aligned, with dot leaders), or a table.",
      "**Columns:** **Layout → Columns** in Word, **Format → Columns** in Google Docs and LibreOffice, **Format → Layout → Columns** in Pages. A **column break** (Google Docs: **Insert → Break → Column break**; Word: **Layout → Breaks → Column**) moves the next text to the top of the next column. To change columns for only part of a page, put it in its own section with continuous section breaks."
     ],
     pro:[
      "LibreOffice handles page settings through **page styles** rather than section breaks: each page style (Default Page Style, First Page, Left Page, Right Page, Landscape, and any you create) holds paper size, margins, headers, footers and columns. A manual page break can switch to another page style, and a page style can name its **Next style** (First Page → Default Page Style), which is how a different first page works.",
      {list:["**Different first page / odd and even pages:** Word and Google Docs have checkboxes in the header options; Google’s different odd and even option applies to the whole document. Pages and LibreOffice use per-section or per-page-style settings.","**Restarting numbers:** usually needs a new section (Word, Pages, Google Docs). In LibreOffice, a paragraph’s **Text Flow** settings can insert a break with a page style and a new page number.","**Mirror margins and gutters** add space on the binding side for printed booklets.","**Printer limits:** most printers can’t print to the very edge, so very small margins can clip text.","**Widow and orphan control** and **keep with next / keep lines together** stop single lines or headings being stranded at a page boundary; they’re paragraph settings, best set in styles.","**Paper size and PDF:** a PDF keeps its page size. A Letter PDF printed on A4 needs “fit to page” (slight shrinking) or loses an edge."]},
      {tip:"When a layout misbehaves, turn on formatting marks (and, in Google Docs, **View → Show section breaks**). Most mysteries are a hidden break, a typed space or an empty paragraph."}
     ]
    },
    related:["styles-headings","lists-tables-images","pdf-export"],
    read:[{book:"wss", where:"Section 3.2 “Formatting Document Layout in Microsoft Word”; Section 3.7 “Formatting Layout and Content in Google Docs”"}],
    sources:[{t:"Microsoft Support: Insert a section break", url:"https://support.microsoft.com/en-us/word/insert-a-section-break"},{t:"Google Docs Editors Help: Change page settings on Google Docs", url:"https://support.google.com/docs/answer/10296604?hl=en&co=GENIE.Platform%3DDesktop"},{t:"LibreOffice Help: Page Numbers", url:"https://help.libreoffice.org/latest/en-US/text/swriter/guide/pagenumbers.html"}], checked:"2026-11"},

   {id:"lists-tables-images", title:"Lists, tables and images", aka:["bulleted list","numbered list","header row","text wrapping","anchor","captions"], tags:["documents","structure"],
    summary:"Real lists that renumber themselves, tables for data with header rows, and images placed with predictable wrapping and captions.",
    levels:{
     starter:[
      "**Lists:** use the bulleted and numbered list buttons, not typed hyphens or numbers. Real lists renumber when you add a step, indent neatly, and are announced as lists by screen readers. Press [[kbd:Tab]] for a sub-item and [[kbd:Shift]]+[[kbd:Tab]] to go back.",
      "**Tables:** use them for data, where each row is one thing and each column one detail. Mark the top row as a **header row**. Don’t use tables just to put things side by side.",
      "**Images:** the safest placement is **in line with text**, where the picture moves with the text like a very big letter. Wrapped pictures are attached to a paragraph by an [[image-anchor|anchor]] and can jump pages when text changes. Add a [[caption]] for everyone and [[alt-text|alt text]] for people who can’t see the picture."
     ],
     builder:[
      {table:[["App","Header row","Wrap a picture","Caption"],["Word","**Table Design → Header Row**; **Layout → Repeat Header Rows**","**Layout Options** button","**References → Insert Caption** (desktop)"],["Google Docs","**Format → Table → Table options → Pin header row(s)**","Toolbar under the image","No tool: type it below the image"],["LibreOffice Writer","Tick **Heading** and **Repeat heading rows** when inserting","Right-click → **Wrap** or **Anchor**","**Insert → Caption**"],["Pages","**Format → Table → Headers & Footer**","**Format → Arrange → Text Wrap**","**Format → Style → Caption**"]]},
      "Keep data tables simple: one header row, no merged or split cells, no empty rows or columns for spacing. If a table is complex, consider splitting it into two simpler tables.",
      "Word’s **Layout Options** offer **Move with text** (the picture moves when text is added above it) or **Fix position on page**. With formatting marks on, Word shows the anchor icon for wrapped pictures; in-line pictures have no anchor.",
      "Captions made with a caption tool number themselves (Figure 1, Figure 2) and can build a **table of figures**. Microsoft lists captions as a desktop-only feature in Word, and Google Docs has no caption tool, so type the caption as text there.",
      "**Numbering control:** to restart a numbered list at 1, or continue the numbering from an earlier list, right-click a number: Word offers **Restart at 1** and **Continue Numbering**, and Google Docs offers **Restart numbering**. Never retype numbers to fix a list."
     ],
     pro:[
      {list:["**List levels and styles:** numbered lists can be tied to styles (Word’s list styles, LibreOffice’s list styles), so every procedure in a manual numbers the same way. Restarting or continuing numbering is a list setting, not retyping.","**Tables and phones:** tables don’t reflow on narrow screens the way paragraphs do. For documents mainly read on phones, prefer short tables, or lists of label: value pairs.","**Header columns:** some tables need a header **column** too (a timetable with days down the side). Pages can add header columns; Word’s Table Design has a **First Column** option.","**Table summaries:** a sentence before a complex table (“The table lists each plot’s size and tenant”) helps everyone, and long tables benefit from a caption.","**Anchors and wrapping in LibreOffice:** anchoring **As Character** keeps an image in the text flow; **To Paragraph** and **To Character** let text wrap; **To Page** fixes it on a page.","**Image resolution:** pictures straight from a phone are much larger than a page needs. Compress them (see {{document-file-formats}}) so the file stays small."]},
      {tip:"If a picture keeps misbehaving, switch it to in line, put it in its own paragraph, and use the paragraph’s alignment (centre) to place it. Most layout problems disappear."},
      "Screen readers usually announce a table’s size (“table with 4 rows and 3 columns”) and then read cell by cell, using the header row to say which column each cell belongs to. That only works if the table is a real, simple table with its header row marked."
     ]
    },
    related:["alt-text","page-layout","document-accessibility"],
    read:[{book:"wss", where:"Section 4.2 “Working with Graphics and Text Tools in Microsoft Word”; Section 4.5 “Working with Graphics and Text Tools in Google Docs”"}],
    sources:[{t:"Microsoft Support: Wrap text and move pictures in Word", url:"https://support.microsoft.com/en-us/word/wrap-text-and-move-pictures-in-word"},{t:"Google Docs Editors Help: Add and edit tables", url:"https://support.google.com/docs/answer/1696711?co=GENIE.Platform%3DDesktop&hl=en"},{t:"Apple Support: Add a caption or title to objects in Pages on Mac", url:"https://support.apple.com/guide/pages/add-a-caption-or-title-taneb1d1f4a5/mac"}], checked:"2026-11"},

   {id:"alt-text", title:"Alt text", aka:["alternative text","image description","decorative images"], tags:["accessibility","images"],
    summary:"A short written description of an image, read aloud by screen readers in place of the picture.",
    levels:{
     starter:[
      "[[alt-text|Alt text]] (alternative text) is a description attached to an image. It isn’t shown on the page. A [[screen-reader|screen reader]] reads it aloud instead of the picture, so people who can’t see the image still get its meaning.",
      "Good alt text says what the picture shows **and why it’s there**, in a sentence or two. Imagine phoning someone and replacing the picture with one sentence: what would you say?",
      {list:["Weak: “photo”, “image1.jpg”, “chart”.","Better: “Bar chart: water use peaked at 9 m³ in July and fell to 3 m³ by October.”"]},
      "Purely decorative images, such as a border or a flourish, should be **marked as decorative** so screen readers skip them.",
      "Alt text isn’t only for screen readers. It can also appear when an image fails to load, and it travels with the image when the document is exported to a tagged PDF."
     ],
     builder:[
      {table:[["App","Where"],["Word","Right-click → **View Alt Text**, or **Picture Format → Alt Text**; **Mark as decorative** checkbox"],["Google Docs","Select the image → **Image options → Alt text** ([[kbd:Ctrl]]+[[kbd:Alt]]+[[kbd:Y]]; Mac [[kbd:Cmd]]+[[kbd:Option]]+[[kbd:Y]])"],["LibreOffice Writer","**Format → Alt Text** (older versions: **Format → Image → Properties → Options**): **Text** (short), **Alt Text** (longer), **Decorative**"],["Pages","**Format** sidebar → **Image** tab → **Description**"]]},
      {list:["**Don’t start with “image of”**: screen readers already say it’s an image.","**Context decides.** The same photo of a shed might be “The tool shed by the main gate” in a handbook and “The shed after the storm, roof missing” in an insurance claim.","**Text in images:** include it in the alt text, or better, put it in the document as real text.","**Charts and diagrams:** give the main message; put full data in a table or the text.","**Links on images:** describe where the link goes, not the picture.","**AI suggestions:** some apps can generate alt text. Microsoft lets you approve it in the Alt Text pane; check it’s accurate and fits your purpose first."]},
      "**Test it yourself.** Turn on your device’s screen reader for a minute and listen to your document: Narrator on Windows ([[kbd:Win]]+[[kbd:Ctrl]]+[[kbd:Enter]]), VoiceOver on a Mac ([[kbd:Cmd]]+[[kbd:F5]]). Hearing “IMG_4021.jpg” read aloud makes the point better than any rule. Press the same keys to turn it off."
     ],
     pro:[
      "The W3C’s images guidance sorts images by job: **informative** (convey a fact or idea: describe it), **decorative** (no information: mark decorative, or an empty alt in web pages), **functional** (a linked image or button: describe the action), **images of text** (repeat the text), and **complex images** such as charts and maps (short alt text plus a longer description nearby).",
      {list:["**Length:** Microsoft suggests one or two sentences. Long descriptions belong in the body text or a linked description, so all readers benefit.","**Don’t repeat the caption:** if the caption already says “Figure 3: Plot map”, the alt text should say what the map shows, not the same words again.","**Exported PDFs:** alt text carries into tagged PDFs from Word, LibreOffice (with PDF/UA or tagged export) and Pages (descriptions are exported automatically). Check after export.","**Titles vs descriptions:** some apps also have a separate image **title** or name field. Screen readers may treat it differently; put the essential description in the main alt text field.","**Groups and SmartArt:** in Word, select the border of a chart or SmartArt graphic to give the whole thing alt text, not each piece."]},
      {tip:"Read your alt text aloud without looking at the picture. If it leaves you asking “so what?”, add the point the picture is making."}
     ]
    },
    related:["document-accessibility","lists-tables-images","pdf-export"],
    sources:[{t:"Microsoft Support: Add alternative text to a shape, picture, chart, SmartArt graphic, or other object", url:"https://support.microsoft.com/en-us/accessibility/office-accessibility/add-alternative-text-to-a-shape-picture-chart-smartart-graphic-or-other-object"},{t:"Google Docs Editors Help: Make your document, presentation, sheets & videos more accessible", url:"https://support.google.com/docs/answer/6199477?hl=en"},{t:"Apple Support: Add an image in Pages on Mac", url:"https://support.apple.com/guide/pages/add-an-image-tanb3bc78786/mac"}], checked:"2026-11"},

   {id:"track-changes-comments", title:"Comments, tracked changes and suggestions", aka:["track changes","suggesting mode","review","accept all","compare documents","redlining"], tags:["documents","collaboration"],
    summary:"Comments to discuss, tracked changes or suggestions to propose edits, and accept, reject and compare to decide what stays.",
    levels:{
     starter:[
      "A [[comment]] is a note in the margin: a question or remark that doesn’t change the text. [[track-changes|Track changes]] (in Google Docs, [[suggesting-mode|suggesting mode]]) records each edit with who made it and when, and shows it in colour. Each one waits until the document’s owner **accepts** or **rejects** it.",
      "Use comments for questions and big ideas; use tracked changes or suggestions for small, specific fixes.",
      {warn:"Hiding markup (Word’s **No Markup**, Pages’ **Final** view) doesn’t remove it. Before you share a final version, accept or reject every change and remove or resolve every comment. Then check with all markup showing, or send a PDF."},
      "Comments can be **replied** to, making a thread, and **resolved** when they’re dealt with. Resolving hides a comment but keeps it in the document’s history; deleting removes it."
     ],
     builder:[
      {table:[["App","Turn on","Review"],["Word","**Review → Track Changes → For Everyone / Just Mine**","**Review → Next**, **Accept**, **Reject**"],["Google Docs","Mode menu (top right) → **Suggesting**","Click ✓ or ✗; **Tools → Review suggested edits**"],["LibreOffice Writer","**Edit → Track Changes → Record**","**Edit → Track Changes → Manage**"],["Pages","**Edit → Track Changes**","Hover → **Accept** / **Reject**; review toolbar"]]},
      "Accept or reject one by one with **Next**. **Accept All** is fine for a trusted proofreader’s typo fixes, but one accepted change can alter a number or a meaning.",
      "**Compare** finds differences between two files when tracking wasn’t on: Word desktop **Review → Compare**, Google Docs **Tools → Compare documents** (which makes a third document of suggestions), LibreOffice **File → Compare Document**. Microsoft lists Compare as desktop-only.",
      "In Google Docs, people with **commenter** access can suggest; only editors can accept. Version history ({{version-history}}) is different again: it keeps snapshots of the whole document you can restore.",
      "**What you see is a choice.** Word’s **Display for Review** offers All Markup, Simple Markup, No Markup and Original; Pages offers Markup, Markup Without Deletions and Final. None of these accept or reject anything. Word’s **For Everyone** tracks all users’ edits, **Just Mine** only yours."
     ],
     pro:[
      {list:["**Filtering:** Word’s **Show Markup → Specific People** lets an author deal with one reviewer at a time; in Google Docs, each suggestion card names its reviewer.","**Locking tracking:** Word can lock Track Changes with a password (**Review → Track Changes → Lock Tracking**, desktop), so reviewers can’t switch it off; a document shared for review may already be locked.","**Formatting changes** can be tracked too, and in long documents create a lot of noise. Word’s Show Markup lets you hide formatting revisions while reviewing text.","**Pages and iCloud:** Apple notes that when a shared document has tracking on, people using Pages for iCloud can only view it, and you must resolve all changes before turning tracking off.","**Hidden data:** comments, tracked changes, document properties and earlier text can all travel with an editable file. Word’s **Inspect Document** (desktop: **File → Info → Check for Issues**) finds and removes them; exporting a clean PDF is another safeguard.","**Compare limits:** compare tools concentrate on text. Check layout details (columns, table widths, picture positions) by eye, and in Google Docs convert Word files to Google Docs before comparing."]},
      {tip:"Agree the rules of a review at the start: who edits directly, who only suggests, who decides, and the deadline. Most review chaos is a missing agreement, not a missing feature."},
      "**Who decides:** agree in advance that one person (usually the author or an editor) accepts and rejects, so two people don’t undo each other’s decisions."
     ]
    },
    related:["version-history","sharing-permissions","document-file-formats"],
    read:[{book:"wss", where:"Section 3.4 “Collaborative Editing and Reviewing in Microsoft Word”; Section 3.8 “Collaborative Editing and Reviewing in Google Docs”"}],
    sources:[{t:"Microsoft Support: Track changes in Word", url:"https://eus.prod.support.services.microsoft.com/en-us/office/track-changes-in-word-197ba630-0f5f-4a8e-9a77-3712475e806a"},{t:"Google Docs Editors Help: Suggest edits in Google Docs", url:"https://support.google.com/docs/answer/6033474?hl=en&co=GENIE.Platform%3DDesktop"},{t:"Apple Support: Track changes in Pages on Mac", url:"https://support.apple.com/guide/pages/track-changes-tan2685b84ff/mac"}], checked:"2026-11"},

   {id:"document-accessibility", title:"Accessible documents", aka:["accessibility checker","WCAG","contrast","link text","screen readers"], tags:["accessibility","documents"],
    summary:"Structure, alt text, clear links, enough contrast and simple tables, so documents work for screen readers, magnifiers, phones and print.",
    levels:{
     starter:[
      "An accessible document works for everyone: people using a [[screen-reader|screen reader]], people who zoom in or are colour-blind, people reading on phones or in a second language, and people printing in black and white.",
      {list:["Use **heading styles** in order.","Give every informative image **alt text**; mark decorative ones as decorative.","Use **real lists** and **simple tables with header rows**.","Make **link text** say where it goes (“plot rental terms”, not “click here”).","Use **dark enough text**, and never colour alone to show meaning.","Give the document a **title**."]},
      "Word and LibreOffice have a built-in [[accessibility-checker|accessibility checker]]. Google Docs and Pages don’t, so check by hand. Even with a checker, read it through yourself: checkers can’t judge meaning.",
      "None of this is extra work at the end: it’s what you get by using styles, real lists, simple tables and alt text from the start."
     ],
     builder:[
      {table:[["App","Checker"],["Word","**Review → Check Accessibility** (errors and warnings, with recommended actions)"],["LibreOffice Writer","**Tools → Accessibility Check**, sidebar panel linking to each issue, with **Fix** buttons for some; also runs on PDF/UA export"],["Google Docs","None built in; third-party add-ons exist"],["Pages","None built in; follow Apple’s accessibility guidance"]]},
      "**Contrast:** WCAG 2.2 Success Criterion 1.4.3 (level AA) requires a contrast ratio of at least **4.5:1** for normal text and **3:1** for large-scale text, defined as at least 18 point or 14 point bold. The stricter AAA level (SC 1.4.6) uses 7:1. Logos and purely decorative text are exempt. Use a contrast checker to test colour pairs.",
      "**Tables:** Microsoft advises a simple structure for data only, with column headers, and no completely blank rows or columns. LibreOffice’s check flags split and merged cells.",
      "**Language and title:** set the document language (so screen readers pronounce it correctly) and a document title (LibreOffice: **File → Properties**; Word: **File → Info → Properties**).",
      "**Checking by hand** (essential in Google Docs and Pages, and a good final step everywhere): open the outline and check every heading is there, in order; select each image and read its description; read each link’s text on its own; look at coloured text and ask whether it’s dark enough and whether colour is the only signal; check each table has a header row."
     ],
     pro:[
      "WCAG (Web Content Accessibility Guidelines) was written for web content, but document checkers, public-sector rules in many countries and the PDF/UA standard all lean on it. Many organisations require documents they publish to meet WCAG level AA. Check your own organisation’s or country’s rules rather than assuming.",
      {list:["**What checkers catch:** missing alt text, skipped headings, missing table headers, merged cells, low contrast, missing title or language, typed numbering, links shown as raw addresses (LibreOffice’s list).","**What they miss:** alt text that is present but useless, headings that don’t describe their sections, confusing instructions, reading order in complex layouts, meaning carried by colour in images.","**Reading order:** floating text boxes and wrapped shapes can be read out of order. Keep important content in the main text flow.","**Tagged PDFs:** a document’s structure only reaches PDF readers if the export creates tags (Word’s “Document structure tags”, LibreOffice’s PDF/UA option). Pages exports image descriptions and the TOC automatically.","**Plain language:** short sentences, common words and defined terms help people with cognitive disabilities and second-language readers, and are part of good accessibility practice."]},
      {tip:"The fastest real-world test: navigate your document using only its headings (navigation pane or a screen reader’s heading list). If you can find everything, the structure is doing its job."}
     ]
    },
    related:["alt-text","styles-headings","pdf-export","lists-tables-images"],
    sources:[{t:"Microsoft Support: Improve accessibility with the Accessibility Checker", url:"https://support.microsoft.com/en-us/accessibility/office-accessibility/improve-accessibility-with-the-accessibility-checker"},{t:"LibreOffice Help: Accessibility Check", url:"https://help.libreoffice.org/latest/en-US/text/swriter/01/accessibility_check.html?DbPAR=WRITER"},{t:"W3C: Understanding Success Criterion 1.4.3: Contrast (Minimum)", url:"https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"}], checked:"2026-11"},

   {id:"document-file-formats", title:"Document file formats", aka:[".docx",".odt",".pages","PDF/A","Office Open XML","OpenDocument","file size"], tags:["documents","files"],
    summary:"Which document format to send or keep: .docx and .odt to edit, PDF to read, PDF/A to archive, and how to keep files small.",
    levels:{
     starter:[
      "**Editable formats** let the reader change the document: [[docx|.docx]] (Word’s format, the most widely accepted) and [[odt|.odt]] (OpenDocument, the open standard LibreOffice uses). Apple Pages saves **.pages** files, which people without Pages may not be able to open, so export to .docx or PDF when sharing. Google Docs keeps documents online; download a copy in another format to send it.",
      "**Fixed formats** keep the layout identical everywhere: [[pdf|PDF]] for final versions, and [[pdf-a|PDF/A]] for documents that must still open correctly many years from now.",
      "Keep your editable original. If something changes, edit the original and export a new PDF. Unit 2’s {{file-formats}} entry explains formats in general.",
      "Unsure? Send **.docx** when people need to edit, and **PDF** when they only need to read."
     ],
     builder:[
      {table:[["Format","Standard","Notes"],[".docx","Office Open XML (ECMA-376, ISO/IEC 29500)","Default in Word; opened and saved by Google Docs, LibreOffice and Pages, sometimes with small layout differences"],[".odt","OpenDocument (ISO/IEC 26300)","Default in LibreOffice; Word and Google Docs can open and save it"],[".pages","Apple’s own format","Pages can export to PDF, Word, EPUB, plain text, RTF and images"],["PDF","ISO 32000","Fixed layout for reading and printing"],["PDF/A","ISO 19005","Archive PDF: fonts and resources embedded, no encryption"]]},
      "**Saving and exporting:** Word: **File → Save As** (or **Save a Copy**) and choose a type. Google Docs: **File → Download**. LibreOffice: **File → Save As** for editable formats and **File → Export As** for PDF. Pages: **File → Export To**.",
      "**When formats convert,** complex layouts suffer most: unusual fonts, floating text boxes, advanced tables, macros and fields. Simple documents built with styles convert best. After converting, open the result and check it.",
      "**File size:** images are usually what makes documents large. Compress them: Word **Picture Format → Compress Pictures** (desktop), LibreOffice right-click → **Compress**, Pages **File → Reduce File Size**, and choose a lower image quality when exporting PDFs.",
      "**Downloads are copies.** Google Docs’ **File → Download** creates a separate file; later edits online don’t change it, and edits to the downloaded copy don’t reach the online document. The same is true of any exported PDF."
     ],
     pro:[
      {list:["**Older formats:** `.doc` is Word’s pre-2007 binary format; `.rtf` (Rich Text Format) is old but widely readable; `.txt` keeps text only. Open them, but save new work in .docx or .odt.","**Inside the file:** both .docx and .odt are zip archives of XML files plus embedded images. That’s why images dominate their size, and why a damaged file can sometimes be partly recovered.","**Fonts:** editable formats usually don’t carry fonts with them. If the reader lacks your font, their app substitutes another and the layout shifts. PDFs embed fonts; Word can optionally embed fonts in a .docx.","**Templates and macros:** `.dotx` and `.ott` are template versions of .docx and .odt; `.docm` holds macros (and so can carry malicious code: be wary of unexpected ones).","**Metadata:** documents store [[metadata]] such as author, comments and editing time. Check document properties before publishing.","**Long-term archiving:** PDF/A comes in several parts and levels (for example PDF/A-1, -2, -3). Word’s option produces an ISO 19005-1 file; LibreOffice lets you choose the version. If an organisation specifies a version, use theirs."]},
      {tip:"For anything official you must keep, store both the editable original (.docx or .odt) and a PDF/A copy, with a clear file name and date."}
     ]
    },
    related:["file-formats","pdf-export","templates","file-wont-open"],
    sources:[{t:"Apple Support: Convert to Word, PDF, or another file format in Pages on Mac", url:"https://support.apple.com/guide/pages/export-to-word-pdf-or-another-file-format-tance1161f26/mac"},{t:"Google Docs Editors Help: Create, view, or download a file", url:"https://support.google.com/docs/answer/49114?hl=en&co=GENIE.Platform%3DDesktop"},{t:"Microsoft Support: Save or convert to PDF or XPS in Office desktop apps", url:"https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-or-xps-in-office-desktop-apps-d85416c5-7d77-4fd6-a216-6f4bf7c7c110"}], checked:"2026-11"},

   {id:"pdf-export", title:"Exporting a good PDF", aka:["save as PDF","tagged PDF","PDF/UA","PDF/A","bookmarks"], tags:["documents","accessibility"],
    summary:"How to export PDFs with searchable text, tags, bookmarks from headings and, when needed, the PDF/A archive format.",
    levels:{
     starter:[
      "A good PDF isn’t just a picture of your pages. It has **text** you can select and search, **tags** that tell screen readers what is a heading, list, table or image (with its alt text), and **bookmarks** made from your headings so readers can jump around.",
      "If your document uses styles, real lists and alt text, a good export carries all of that into the PDF. If it doesn’t, no export setting can add the structure afterwards.",
      "After exporting, open the PDF: check the bookmarks panel, search for a word, and click a link.",
      "Every app in this unit can export PDFs for free: Word (desktop and web), Google Docs, LibreOffice Writer and Pages. What differs is how much structure the PDF keeps, so it’s worth knowing your app’s options."
     ],
     builder:[
      {table:[["App","How","Options worth knowing"],["Word desktop (Windows)","**File → Save a Copy / Save As → PDF → More options → Options**","**Document structure tags for accessibility**; **Create bookmarks using: Headings**; **ISO 19005-1 compliant (PDF/A)**; **Document showing markup** prints tracked changes"],["Word for the web","**File → Export → Download as PDF**","Or **Download as PDF with comments**"],["Google Docs","**File → Download → PDF document (.pdf)**","Check the result’s bookmarks and links"],["LibreOffice Writer","**File → Export As → Export as PDF**","**Universal Accessibility (PDF/UA)**; **Archive (PDF/A, ISO 19005)**; image compression"],["Pages","**File → Export To → PDF**","**Image Quality**; include comments; **Require password to open**; descriptions export automatically"]]},
      "Microsoft recommends running the Accessibility Checker before saving as PDF and keeping **Document structure tags for accessibility** ticked. LibreOffice runs its accessibility check automatically when PDF/UA is ticked.",
      "**What to check after exporting:**",
      {list:["The bookmarks or outline panel lists your headings.","You can select and search the text.","Links work and go to the right places.","Images are sharp enough but the file isn’t huge (lower the image quality if it is).","No tracked changes or comments were exported by mistake (Word’s **Publish what** setting, Pages’ comments checkbox)."]}
     ],
     pro:[
      {list:["**PDF/UA** (ISO 14289) is the standard for accessible PDFs: everything meaningful tagged, a logical reading order, alt text for figures, a document title and language.","**PDF/A** (ISO 19005) is for archiving: fonts embedded, no encryption, no dependence on outside resources. It can be combined with PDF/UA in some tools.","**Password protection** stops casual opening, but it isn’t compatible with PDF/A, and it can get in the way of assistive technology if it restricts copying text. Use it only when needed.","**Tracked changes in exports:** Word can export “Document showing markup”, which prints the changes and comments into the PDF. Make sure that’s what you want.","**Print to PDF vs export:** a system “print to PDF” option may produce a PDF without tags or bookmarks. Prefer the app’s own export when accessibility matters, and check the result.","**Scanned PDFs** contain images of text; they need OCR to become searchable, and even then need checking for accessibility."]},
      {tip:"Name exported PDFs so they can’t be confused with the editable file: `2026-11-05 garden handbook.pdf` beside `garden handbook.docx`."},
      "**Accessibility checks on PDFs:** dedicated PDF tools can check tags and reading order. LibreOffice runs its own document check when you tick PDF/UA, which catches many problems before the PDF is even made. Fixing the source document and exporting again is almost always easier than repairing a PDF."
     ]
    },
    related:["document-file-formats","document-accessibility","alt-text","styles-headings"],
    sources:[{t:"Microsoft Support: Create accessible PDFs", url:"https://support.microsoft.com/en-us/topic/create-accessible-pdfs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed?ad=us&rs=en-us&ui=en-us"},{t:"Microsoft Support: Export Word document as PDF (Word for the web)", url:"https://support.microsoft.com/en-us/word/export-word-document-as-pdf"},{t:"Apple Support: Convert to Word, PDF, or another file format in Pages on Mac", url:"https://support.apple.com/guide/pages/export-to-word-pdf-or-another-file-format-tance1161f26/mac"}], checked:"2026-11"},

   {id:"templates", title:"Templates", aka:[".dotx",".ott","template gallery","Save as Template"], tags:["documents","productivity"],
    summary:"A reusable starting document with styles, layout and placeholder text, opened as a fresh copy each time.",
    levels:{
     starter:[
      "A [[template]] is a starting point you reuse: the styles, page setup, header, footer, logo and placeholder text are already there. Each time you use it, you get a **new copy**, so the template itself stays clean.",
      "Templates save time and keep documents consistent. A volunteer group might keep one for meeting minutes and one for letters; a small business, one for invoices and one for quotes.",
      "Every word processor comes with ready-made templates (CVs, letters, newsletters). Check them before use: some depend on fonts or layouts that don’t survive conversion, and some use tables for layout, which hurts accessibility.",
      "A template is different from simply reopening last month’s document: with a template you can’t accidentally overwrite the original, and you don’t inherit last month’s content."
     ],
     builder:[
      {table:[["App","Save your own","Use one"],["Word","**File → Save As → Word Template (*.dotx)**","**File → New**"],["Google Docs","Personal accounts: keep a master and use **File → Make a copy**; Workspace organisations can add to the gallery","**Template gallery** on the Docs home screen"],["LibreOffice Writer","**File → Templates → Save as Template** (.ott)","**File → New → Templates**"],["Pages","**File → Save as Template**","The template chooser when you create a document"]]},
      "Build a template from a finished, clean document: correct styles (headings, body, captions), page size and margins, header and footer with fields (page numbers, maybe the date), and placeholder text that tells people what to write (“[Meeting date]”). Delete one-off content.",
      "OpenStax’s *Workplace Software and Skills* notes that, when it was written, Google Docs’ default Template Gallery had no built-in templates for some business document types (such as a business memo or envelopes), though you can make your own.",
      "**Good placeholder text** is short and clear: “[Date of meeting]”, “[Names of people present]”, “[Decisions and who will act on them]”. Some apps can make placeholders that are replaced as soon as you click and type (Word’s content controls, Pages’ placeholder text).",
      "**Keep one master.** Store the template where everyone who needs it can find it, and tell people to start from it rather than copying old documents, which spreads outdated wording and stray formatting."
     ],
     pro:[
      {list:["**Word’s Normal template** (`Normal.dotm`) holds the defaults for every new blank document. Changing a style with “New documents based on this template” ticked changes that default.","**Attached templates:** a Word document remembers which template it came from; organisations use this to update styles across many documents.","**Google Docs defaults:** **Format → Paragraph styles → Options → Save as my default styles** sets your personal default styles for new documents, a lightweight alternative to a template.","**LibreOffice default template:** in the Templates dialog you can set any template as the default for new documents.","**Locked content:** forms and templates can protect some regions so people only fill in the blanks (Word: content controls and Restrict Editing; see the textbook’s Section 5.3).","**Accessibility from the start:** a template with correct heading styles, a document title, alt text on its logo and good contrast makes every document made from it more accessible."]},
      {tip:"Version your templates like any shared file: one master, a clear name, a date, and a note of what changed."},
      "**Sharing templates:** a .dotx or .ott file can be sent like any other file; the receiver opens it to create a new document, or saves it in their app’s templates folder to see it in the template chooser."
     ]
    },
    related:["styles-headings","document-file-formats","mail-merge"],
    read:[{book:"wss", where:"Section 5.1 “Creating Different Document Types in Microsoft Word”; Section 5.4 “Creating Different Document Types in Google Docs”"}],
    sources:[{t:"Google Docs Editors Help: Add a title, heading, or table of contents in a document (default styles)", url:"https://support.google.com/docs/answer/116338?hl=en&co=GENIE.Platform%3DDesktop"},{t:"Apple Support: Pages User Guide for Mac", url:"https://support.apple.com/guide/pages/welcome-tand2703708a/mac"}], checked:"2026-11"},

   {id:"mail-merge", title:"Mail merge", aka:["merge fields","form letters","data source","labels"], tags:["documents","productivity"],
    summary:"Combine one document with placeholders and a list of people to produce one personalised copy per person.",
    levels:{
     starter:[
      "**Mail merge** makes many personalised copies of one document: letters, certificates, envelopes, name badges or emails. You need two things:",
      {list:["A **main document**: the letter, with placeholders called [[merge-field|merge fields]] such as «First name» and «Plot».","A **data source**: a list with one row per person and one column per detail, usually a spreadsheet table or a contacts list."]},
      "The app fills the fields from each row and produces one copy per person. Always **preview** a few before finishing, to catch empty fields or odd spacing.",
      {ex:"Main document: “Dear «First name», your plot «Plot» is renewed until «End date».”\nData: Amara | B4 | 2027-03-31 ; Kenji | A1 | 2027-03-31\nResult: two letters, “Dear Amara, your plot B4…” and “Dear Kenji, your plot A1…”", label:"Example", mono:true}
     ],
     builder:[
      {table:[["App","Where","Notes"],["Word (desktop)","**Mailings** tab: **Start Mail Merge**, **Select Recipients**, **Insert Merge Field**, **Preview Results**, **Finish & Merge**","Microsoft lists mail merge as desktop-only; a step-by-step wizard is also available"],["LibreOffice Writer","**Tools → Mail Merge Wizard**","Five steps: base document, document type, recipients and address block, salutation, layout"],["Pages","**Document** sidebar → **Mail Merge**, then **Merge**","Data from a Contacts group or a Numbers spreadsheet"],["Google Docs","No built-in mail merge","Gmail’s mail merge for emails needs a paid Google Workspace plan; add-ons exist"]]},
      "The data source matters most. Use one header row with clear column names, one row per person, no merged cells, and consistent formats (all dates the same way). Spreadsheets are covered in Unit 9.",
      "**In Word desktop**, the steps follow the order of the **Mailings** tab: **Start Mail Merge** (choose Letters, Envelopes, Labels or Email Messages); **Select Recipients** (use an existing list such as a spreadsheet, or **Type a New List**); **Insert Merge Field** where each detail goes (also **Address Block** and **Greeting Line**); **Preview Results** and use the arrows to check several recipients; then **Finish & Merge** to edit individual documents, print, or send email messages. A **Step-by-Step Mail Merge Wizard** walks through the same stages.",
      "**In LibreOffice**, the Mail Merge Wizard asks for the base document, the type of document, the recipients and address block, the salutation, and the layout, then lets you save, print or send the merged documents."
     ],
     pro:[
      {list:["**Field formatting:** numbers and dates from a spreadsheet can arrive in a different format (a date as a number, or month and day swapped in another locale). Format the column as text in the data source, or use the app’s field formatting options.","**Rules and conditions:** Word can insert conditional text (“If…Then…Else”) so, for example, members and non-members get different paragraphs.","**Filtering recipients:** merge only the rows you need (paid-up members, one street) using the app’s recipient filter rather than deleting rows.","**Email merges** send personal data to many people at once. Test with your own address first, and check every field is correct: a merge error can send one person’s details to another.","**Privacy:** a data source is personal data. Keep it as private as the letters themselves, and delete copies you no longer need (Unit 5’s {{data-protection-laws}})."]},
      {tip:"Do a test merge of three rows, including your own name and one row with a missing value. If those come out right, the rest will too."},
      "**Labels and envelopes:** merges can fill sheets of address labels as well as letters. Check the label sheet’s product code or measurements against the app’s label settings, and print one test sheet on plain paper first."
     ]
    },
    related:["templates","document-file-formats"],
    read:[{book:"wss", where:"Section 5.2 “Mail Merge in Microsoft Word”"}],
    sources:[{t:"LibreOffice Help: Mail Merge Wizard", url:"https://help.libreoffice.org/latest/en-US/text/swriter/01/mailmerge00.html"},{t:"Apple Support: Populate and create customized documents in Pages on Mac", url:"https://support.apple.com/guide/pages/populate-and-create-customized-documents-tane1871866b/mac"},{t:"Gmail Help: Send personalized emails with mail merge", url:"https://support.google.com/mail/answer/12921167?hl=en"}], checked:"2026-11"}
  ],
  terms:[
   {id:"word-processor", term:"Word processor", def:"An app for writing, formatting and laying out documents, such as Microsoft Word, Google Docs, LibreOffice Writer or Apple Pages.", codex:"styles-headings"},
   {id:"style", term:"Style", def:"A named set of formatting (font, size, spacing and more) that you apply in one step. Change the style and all text using it changes too.", codex:"styles-headings"},
   {id:"direct-formatting", term:"Direct formatting", def:"Formatting applied by hand to selected text, such as clicking Bold or choosing a size, rather than through a style.", codex:"styles-headings"},
   {id:"heading-style", term:"Heading style", def:"A style such as Heading 1 or Heading 2 that marks a paragraph as a heading at a level of the document’s outline.", codex:"styles-headings"},
   {id:"navigation-pane", term:"Navigation pane", def:"A side panel that lists a document’s styled headings so you can jump to (and in Word, drag) sections. Called the outline in Google Docs and the Navigator in LibreOffice.", codex:"styles-headings"},
   {id:"table-of-contents", term:"Table of contents", def:"A list of a document’s headings with page numbers or links, built automatically from heading styles and updated when you ask (or by itself in Pages).", codex:"styles-headings"},
   {id:"paragraph-break", term:"Paragraph break", def:"What pressing Enter (Return) inserts: the end of one paragraph and the start of a new one, shown as ¶ when formatting marks are on.", codex:"styles-headings"},
   {id:"line-break", term:"Line break", def:"A new line inside the same paragraph, inserted with Shift+Enter. Useful for address lines or a second line in one list item.", codex:"styles-headings"},
   {id:"formatting-marks", term:"Formatting marks", def:"Normally hidden symbols for paragraph ends (¶), spaces (·), tabs (→) and breaks. Showing them reveals why a layout misbehaves.", codex:"styles-headings"},
   {id:"page-break", term:"Page break", def:"An instruction to start the following text on a new page, which stays correct however the text before it changes.", codex:"page-layout"},
   {id:"section-break", term:"Section break", def:"A break that starts a new section of a document, which can have its own orientation, margins, columns, headers, footers and page numbering.", codex:"page-layout"},
   {id:"margin", term:"Margin", def:"The empty border between the edge of the page and the text. Headers and footers sit in the top and bottom margins.", codex:"page-layout"},
   {id:"orientation", term:"Orientation", def:"Which way up a page is: portrait (taller than wide) or landscape (wider than tall).", codex:"page-layout"},
   {id:"header-footer", term:"Header and footer", def:"Areas in the top and bottom margins that repeat on every page, often holding a title and an automatic page number.", codex:"page-layout"},
   {id:"tab-stop", term:"Tab stop", def:"A fixed position on the ruler that a tab jumps to. Right-aligned tab stops with dot leaders line up prices or page numbers neatly.", codex:"page-layout"},
   {id:"pageless", term:"Pageless format", def:"A Google Docs setting that shows a document as one continuous page, with no paper size and no headers, footers or page numbers.", codex:"page-layout"},
   {id:"font", term:"Font", def:"A design of letters, numbers and symbols, such as Arial or Times New Roman. In most fonts each character has its own width.", codex:"page-layout"},
   {id:"text-wrapping", term:"Text wrapping", def:"How text flows around a picture or other object: in line with the text, around it, above and below it, or behind or in front of it.", codex:"lists-tables-images"},
   {id:"image-anchor", term:"Anchor (image)", def:"The paragraph or position a wrapped picture is attached to. When the anchor moves to another page, the picture follows.", codex:"lists-tables-images"},
   {id:"caption", term:"Caption", def:"A visible label for a figure or table, such as “Figure 2: Water use by month”. Caption tools number them automatically.", codex:"lists-tables-images"},
   {id:"alt-text", term:"Alt text", def:"Alternative text: a short description of an image that screen readers read aloud in its place. It isn’t shown on the page.", codex:"alt-text"},
   {id:"screen-reader", term:"Screen reader", def:"Software that reads the screen aloud or sends it to a braille display, such as NVDA, JAWS, Narrator, VoiceOver or TalkBack.", codex:"document-accessibility"},
   {id:"comment", term:"Comment", def:"A note attached to part of a document, shown in the margin, that doesn’t change the text. People can reply to and resolve it.", codex:"track-changes-comments"},
   {id:"track-changes", term:"Track changes", def:"A mode that records every edit with who made it and when, so the author can accept or reject each one.", codex:"track-changes-comments"},
   {id:"suggesting-mode", term:"Suggesting mode", def:"Google Docs’ version of track changes: edits appear as suggestions that an editor accepts or rejects. People with commenter access can suggest.", codex:"track-changes-comments"},
   {id:"accessibility-checker", term:"Accessibility checker", def:"A built-in tool (in Word and LibreOffice, for example) that scans a document for problems such as missing alt text or skipped headings.", codex:"document-accessibility"},
   {id:"docx", term:".docx", def:"Word’s standard editable document format (Office Open XML), opened by most word processors.", codex:"document-file-formats"},
   {id:"odt", term:".odt", def:"OpenDocument Text: an open, international standard format for editable documents, and LibreOffice’s default.", codex:"document-file-formats"},
   {id:"pdf-a", term:"PDF/A", def:"A version of PDF for long-term archiving (ISO 19005): fonts and everything needed to display it are stored inside, and encryption isn’t allowed.", codex:"pdf-export"},
   {id:"pdf-ua", term:"PDF/UA", def:"The international standard for accessible PDFs (ISO 14289): content is tagged so assistive technology can read it in a logical order.", codex:"pdf-export"},
   {id:"template", term:"Template", def:"A reusable starting document with styles, layout and placeholder text. Each use creates a new copy and leaves the template unchanged.", codex:"templates"},
   {id:"word-count", term:"Word count", def:"A count of the words (and often characters) in a document or selection. Apps differ slightly in what they include, such as footnotes.", codex:"templates"},
   {id:"merge-field", term:"Merge field", def:"A placeholder in a mail-merge document, such as «First name», that is filled in from each row of a list of recipients.", codex:"mail-merge"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u8-q01", lesson:"t1u8-l1", level:1, q:"What is a style in a word processor?", options:[
     {t:"A named set of formatting you apply in one step, which updates everywhere when changed", ok:true, why:"That’s the point of styles: consistency and one-place changes."},
     {t:"Any text that has been made bold", why:"Bold text is direct formatting. A style is a named, reusable set of formatting."},
     {t:"A font", why:"A font is one part of a style; a style also sets size, spacing, colour and more."},
     {t:"A template for the whole document", why:"A template contains styles (and more), but a style applies to paragraphs or words."}
   ]},
   {id:"t1u8-q02", lesson:"t1u8-l1", level:2, q:"Why do headings made with heading styles appear in the navigation pane but bold, large text doesn’t?", options:[
     {t:"The pane lists paragraphs that have heading styles; bold text is still an ordinary paragraph", ok:true, why:"The app knows a paragraph is a heading only from its style, not from how it looks."},
     {t:"Bold text is too small to show", why:"Size isn’t the test. Even huge bold text isn’t a heading without a heading style."},
     {t:"The pane only shows text in the first 10 pages", why:"There’s no such limit."},
     {t:"Bold text must be underlined to count", why:"No formatting makes something a heading; only a heading style does."}
   ]},
   {id:"t1u8-q03", lesson:"t1u8-l1", level:1, q:"What does pressing Shift+Enter insert?", options:[
     {t:"A line break: a new line in the same paragraph", ok:true, why:"The text continues on the next line with the same style and no paragraph spacing."},
     {t:"A page break", why:"A page break is usually Ctrl+Enter, not Shift+Enter."},
     {t:"A new paragraph", why:"That’s plain Enter."},
     {t:"A section break", why:"Section breaks are inserted from a menu (for example Layout → Breaks)."}
   ]},
   {id:"t1u8-q04", lesson:"t1u8-l1", level:2, q:"A report goes Heading 1, then straight to Heading 3, because Heading 2 looked too big. What’s the best practice?", options:[
     {t:"Use Heading 2 and change the Heading 2 style’s size", ok:true, why:"Choose levels by the outline, and change the look in the style. Skipping levels confuses the outline and screen-reader users."},
     {t:"Keep Heading 3, since only the look matters", why:"Levels carry the structure for the outline, TOC and screen readers."},
     {t:"Use bold Normal text instead", why:"Then it isn’t a heading at all."},
     {t:"Make every heading Heading 1", why:"That hides which sections are inside others."}
   ]},
   {id:"t1u8-q05", lesson:"t1u8-l1", level:3, q:"Priya added two new sections to a Word report after inserting the table of contents. She’s about to export a PDF. What should she do first?", options:[
     {t:"Update the table of contents (References → Update Table) and check the entries", ok:true, why:"Word doesn’t update the TOC by itself. Updating adds the new sections and fixes page numbers."},
     {t:"Nothing: the TOC updates automatically in Word", why:"In Word (and LibreOffice) the TOC only changes when you update it."},
     {t:"Delete the TOC and type a new one by hand", why:"A typed TOC goes out of date at the next change. Update the automatic one."},
     {t:"Add the new sections to the TOC by typing them in", why:"Typed entries are overwritten at the next update and have no links. Update the table instead."}
   ]},
   {id:"t1u8-q06", lesson:"t1u8-l1", level:1, q:"Which menu shows formatting marks in Google Docs?", options:[
     {t:"View → Show non-printing characters", ok:true, why:"That’s Google’s name for formatting marks."},
     {t:"Format → Paragraph styles", why:"That menu applies and changes styles."},
     {t:"Tools → Word count", why:"That counts words."},
     {t:"Insert → Break", why:"That inserts page, section and column breaks."}
   ]},
   {id:"t1u8-q07", lesson:"t1u8-l1", level:3, q:"With formatting marks on, Kenji sees eight empty ¶ marks between a paragraph and a heading. What’s the problem and fix?", options:[
     {t:"Empty paragraphs used for spacing; delete them and set spacing in the style (or use a page break if the heading should start a page)", ok:true, why:"Empty paragraphs move with the text and are read as blank lines by screen readers. Spacing and page breaks do the job reliably."},
     {t:"It’s fine: empty paragraphs are the standard way to add space", why:"They’re a common habit, but they break when text changes."},
     {t:"The heading is corrupt and must be retyped", why:"Nothing is corrupt; the spacing method is the problem."},
     {t:"He should add more empty paragraphs so the heading starts a new page", why:"That works only until the next edit. Use a page break."}
   ]},
   {id:"t1u8-q08", lesson:"t1u8-l1", level:2, q:"Hana wants all 30 headings in her handbook to change from green to blue. What’s the quickest reliable way?", options:[
     {t:"Change the heading style once, so every heading using it updates", ok:true, why:"One change to the style updates every heading, with none missed."},
     {t:"Select each heading and change its colour", why:"That works but is slow and easy to get wrong; that’s exactly what styles avoid."},
     {t:"Use Find and Replace on the word “green”", why:"Find and Replace changes text, not formatting colours applied to headings."},
     {t:"Insert a table of contents", why:"A TOC lists headings; it doesn’t change how they look."}
   ]},
   {id:"t1u8-q09", lesson:"t1u8-l1", level:2, q:"In Word, what happens when you drag a heading in the Navigation pane?", options:[
     {t:"The heading and all the text under it move to the new place", ok:true, why:"Microsoft’s help: select the heading and drag it to move that part of the document."},
     {t:"Only the heading text moves; its paragraphs stay behind", why:"The whole section moves with the heading."},
     {t:"The heading changes level", why:"Dragging moves it; changing level is done by applying a different heading style."},
     {t:"Nothing: the pane is read-only", why:"In desktop Word, the pane lets you reorganise the document by dragging."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u8-q10", lesson:"t1u8-l2", level:1, q:"Which paper size is 210 × 297 mm?", options:[
     {t:"A4", ok:true, why:"A4 is 210 × 297 mm, the standard size in most of the world."},
     {t:"US Letter", why:"Letter is 8.5 × 11 in, about 216 × 279 mm: wider and shorter."},
     {t:"A3", why:"A3 is twice the size of A4 (297 × 420 mm)."},
     {t:"Legal", why:"US Legal is 8.5 × 14 in, much taller."}
   ]},
   {id:"t1u8-q11", lesson:"t1u8-l2", level:2, q:"US Letter paper is 8.5 in wide. With 1.25 in margins on both sides, how wide is the text area?", options:[
     {t:"6 in", ok:true, why:"8.5 − 1.25 − 1.25 = 6 in."},
     {t:"7.25 in", why:"That subtracts only one margin."},
     {t:"6.5 in", why:"That’s the width with 1 in margins, not 1.25 in."},
     {t:"8.5 in", why:"That ignores the margins."}
   ]},
   {id:"t1u8-q12", lesson:"t1u8-l2", level:2, q:"Why is a page break better than pressing Enter until text reaches a new page?", options:[
     {t:"A page break always starts a new page, however the text before it changes", ok:true, why:"Empty lines move with the text above; a page break doesn’t."},
     {t:"Empty lines can’t be printed", why:"They print as blank space; the problem is they shift when text changes."},
     {t:"Page breaks make the file smaller", why:"File size isn’t the reason; reliability is."},
     {t:"Pressing Enter deletes the next page", why:"It doesn’t delete anything; it just adds empty paragraphs."}
   ]},
   {id:"t1u8-q13", lesson:"t1u8-l2", level:1, q:"What does a section break let you do that a page break doesn’t?", options:[
     {t:"Use different settings, such as orientation, columns or page numbering, for part of the document", ok:true, why:"Sections carry their own page settings, headers and footers."},
     {t:"Start a new page", why:"A page break does that too (and a continuous section break doesn’t)."},
     {t:"Make the text bigger", why:"Text size comes from styles, not breaks."},
     {t:"Add comments", why:"Comments are a review feature, unrelated to breaks."}
   ]},
   {id:"t1u8-q14", lesson:"t1u8-l2", level:3, q:"Amara uses Word for the web and needs one landscape page in a portrait report. What should she know?", options:[
     {t:"Microsoft lists section breaks as desktop-only, so she needs desktop Word or another app such as Google Docs or LibreOffice", ok:true, why:"Word for the web can’t insert section breaks. Google Docs (in Pages format) and LibreOffice (page styles) can do it for free."},
     {t:"She can make the whole document landscape, which is the only option anywhere", why:"Section breaks (or LibreOffice page styles) let one page change."},
     {t:"Pressing Enter several times will turn the page", why:"Empty lines never change orientation."},
     {t:"She must convert the document to PDF first", why:"PDFs aren’t edited that way. Change the layout in the source document."}
   ]},
   {id:"t1u8-q15", lesson:"t1u8-l2", level:2, q:"Why shouldn’t page numbers be typed into the footer by hand?", options:[
     {t:"Typed numbers are the same on every page and go wrong when pages move; a page-number field updates itself", ok:true, why:"A field fills in the right number for each page and stays correct."},
     {t:"Footers can’t contain text", why:"They can hold any text, including titles and dates."},
     {t:"Typed numbers are invisible when printed", why:"They print; they’re just wrong."},
     {t:"Page numbers are only allowed in headers", why:"They can go in either a header or a footer."}
   ]},
   {id:"t1u8-q16", lesson:"t1u8-l2", level:3, q:"Mei lines up a bakery price list with spaces. It looks right on her laptop but jagged on her partner’s phone. What’s the most reliable fix?", options:[
     {t:"One tab per line with a right-aligned tab stop (with dot leaders), or a table", ok:true, why:"Tab stops and tables are fixed positions that don’t depend on the width of spaces in a font."},
     {t:"Add more spaces until it lines up on the phone", why:"Then it will be wrong on the laptop. Space widths vary by font and size."},
     {t:"Use a bigger font", why:"Spaces still vary; the alignment still depends on the font."},
     {t:"Send a screenshot instead", why:"A picture of a price list can’t be edited, searched or read by screen readers."}
   ]},
   {id:"t1u8-q17", lesson:"t1u8-l2", level:2, q:"In Google Docs, Tomás can’t find headers, footers or page numbers. What’s the likely reason?", options:[
     {t:"The document is in pageless format; switch to Pages in File → Page setup", ok:true, why:"Google’s help says headers, footers and page numbers aren’t available in pageless documents."},
     {t:"Google Docs doesn’t support headers or footers at all", why:"It does, under Insert → Page elements, in Pages format."},
     {t:"He needs a paid account", why:"Headers and footers work with free accounts."},
     {t:"Headers only work in landscape orientation", why:"Orientation doesn’t affect headers."}
   ]},
   {id:"t1u8-q18", lesson:"t1u8-l2", level:1, q:"Which kind of section break starts the new section on the same page, for example to switch from one column to two?", options:[
     {t:"Continuous", ok:true, why:"Microsoft notes continuous breaks are often used to change the number of columns without starting a new page."},
     {t:"Next page", why:"That starts the new section on a new page."},
     {t:"Odd page", why:"That starts the section on the next odd-numbered page."},
     {t:"Line break", why:"A line break isn’t a section break; it only starts a new line."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u8-q19", lesson:"t1u8-l3", level:1, q:"What is the main advantage of a real numbered list over typed numbers?", options:[
     {t:"It renumbers itself when items are added or removed, and screen readers announce it as a list", ok:true, why:"The app manages the numbers and the structure."},
     {t:"It uses a nicer font", why:"Font has nothing to do with it."},
     {t:"It can’t be edited by others", why:"Lists don’t lock anything."},
     {t:"It prints in colour", why:"Colour is unrelated to list structure."}
   ]},
   {id:"t1u8-q20", lesson:"t1u8-l3", level:2, q:"When is a table the right choice?", options:[
     {t:"For data: rows of similar things, with columns for the same details", ok:true, why:"Tables are for data. Google: “Use tables to present data, not to change the visual layout of the page.”"},
     {t:"To put a photo next to a paragraph", why:"That’s layout; use image wrapping instead."},
     {t:"To make a two-column CV", why:"Layout tables are read cell by cell and can come out in the wrong order."},
     {t:"Whenever text needs to look tidy", why:"Tidy layout comes from styles, tab stops and columns. Tables are for data."}
   ]},
   {id:"t1u8-q21", lesson:"t1u8-l3", level:1, q:"Why mark the first row of a data table as a header row (not just make it bold)?", options:[
     {t:"Screen readers can then announce the column name for each cell, and the row can repeat on each page", ok:true, why:"A marked header row is structure the app and assistive technology can use."},
     {t:"Header rows are required before you can type in a table", why:"You can type without one; it just helps readers."},
     {t:"Bold text can’t be printed", why:"Bold prints fine; it simply isn’t structure."},
     {t:"It makes the table load faster", why:"Speed isn’t affected."}
   ]},
   {id:"t1u8-q22", lesson:"t1u8-l3", level:2, q:"Which image placement is the most predictable when the text around it changes?", options:[
     {t:"In line with text", ok:true, why:"The image is part of the text flow and moves with it like a very big letter."},
     {t:"In front of text", why:"It floats over the text and can cover it."},
     {t:"Behind text", why:"It sits under the text, which can make the text hard to read and the image hard to select."},
     {t:"Square wrapping with a fixed position on the page", why:"A fixed position stays put while text moves past it, which can leave the picture beside the wrong paragraph."}
   ]},
   {id:"t1u8-q23", lesson:"t1u8-l3", level:3, q:"Fatima’s report includes a chart of membership numbers. Which alt text is best?", options:[
     {t:"Line chart: membership grew from 40 in 2022 to 95 in 2026, with the biggest rise in 2024.", ok:true, why:"It gives the chart type and its key message in one sentence."},
     {t:"Chart", why:"It says nothing about what the chart shows."},
     {t:"Image of a chart", why:"“Image of” is redundant and it still gives no information."},
     {t:"membership_chart_final_v2.png", why:"A file name isn’t a description."}
   ]},
   {id:"t1u8-q24", lesson:"t1u8-l3", level:2, q:"What should you do with a purely decorative border image?", options:[
     {t:"Mark it as decorative so screen readers skip it", ok:true, why:"Decorative images carry no information. Word and LibreOffice have a Decorative checkbox."},
     {t:"Write a long description of its pattern", why:"That wastes listeners’ time; it adds no information."},
     {t:"Leave the alt text as the file name", why:"Screen readers would read the file name aloud: noise."},
     {t:"Delete it, because decorative images aren’t allowed", why:"Decoration is fine; it just shouldn’t be announced."}
   ]},
   {id:"t1u8-q25", lesson:"t1u8-l3", level:1, q:"How is a caption different from alt text?", options:[
     {t:"A caption is visible to everyone; alt text is hidden and read by screen readers in place of the image", ok:true, why:"They do different jobs, and most informative images benefit from both."},
     {t:"They are the same thing with different names", why:"One is visible text; the other is a hidden description."},
     {t:"Captions are only for tables", why:"Figures, tables and equations can all have captions."},
     {t:"Alt text is printed under the image", why:"Alt text isn’t shown on the page."}
   ]},
   {id:"t1u8-q26", lesson:"t1u8-l3", level:2, q:"Lucía’s wrapped photo in Word keeps jumping to the next page as she edits. What’s the likely cause?", options:[
     {t:"It’s anchored to a paragraph that moves to the next page", ok:true, why:"A wrapped picture follows its anchor. Setting it to In Line with Text, or moving the anchor, fixes it."},
     {t:"Word deletes photos that are too large", why:"Word doesn’t delete photos."},
     {t:"The photo has no alt text", why:"Alt text doesn’t affect position."},
     {t:"Her printer is set to A4", why:"Paper size doesn’t make an image jump between pages while editing."}
   ]},
   {id:"t1u8-q27", lesson:"t1u8-l3", level:3, q:"Dmitri needs a caption under a figure in Google Docs. What can he do?", options:[
     {t:"Place the image in line and type the caption in the paragraph directly below it", ok:true, why:"Google Docs has no caption tool, so a typed caption next to an in-line image is the practical way, and it stays with the image."},
     {t:"Use References → Insert Caption", why:"That’s Word desktop’s command; Google Docs doesn’t have it."},
     {t:"Put the caption in the alt text", why:"Alt text isn’t visible, so sighted readers wouldn’t see it."},
     {t:"Captions are impossible in Google Docs, so skip it", why:"There’s no caption tool, but a typed caption works fine."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u8-q28", lesson:"t1u8-l4", level:1, q:"What does a tracked change (or suggestion) do?", options:[
     {t:"Records an edit with who made it and when, waiting to be accepted or rejected", ok:true, why:"It’s a proposal, not yet final."},
     {t:"Saves a copy of the whole document", why:"That’s version history."},
     {t:"Adds a note in the margin without changing the text", why:"That’s a comment."},
     {t:"Locks the document so nobody else can edit", why:"Tracking doesn’t lock anything."}
   ]},
   {id:"t1u8-q29", lesson:"t1u8-l4", level:2, q:"You’re not sure whether a figure in a colleague’s report includes tax. What should you add?", options:[
     {t:"A comment asking the question", ok:true, why:"Questions go in comments; only the author knows the answer."},
     {t:"A tracked change replacing the figure with your guess", why:"Changing a number you’re unsure about could introduce an error."},
     {t:"Nothing; it’s probably fine", why:"If you have a doubt, asking costs little."},
     {t:"A new version in version history", why:"Version history saves snapshots; it doesn’t ask questions."}
   ]},
   {id:"t1u8-q30", lesson:"t1u8-l4", level:3, q:"Kenji set Word to No Markup and sent the file to a client. The client switched to All Markup and saw a deleted earlier price. What should Kenji have done?", options:[
     {t:"Accepted or rejected every change and removed comments, checked with All Markup, then ideally sent a PDF", ok:true, why:"No Markup only hides changes. Resolving them (and exporting a PDF) removes them from what the client receives."},
     {t:"Used Simple Markup instead", why:"Simple Markup also just changes the view."},
     {t:"Turned off Track Changes before sending", why:"Turning tracking off stops new tracking; existing changes stay in the file."},
     {t:"Nothing: clients can’t see markup", why:"They can, as this client did."}
   ]},
   {id:"t1u8-q31", lesson:"t1u8-l4", level:2, q:"In Google Docs, what access lets a reviewer suggest edits but not change the text directly?", options:[
     {t:"Commenter", ok:true, why:"Google: people can suggest edits when they have permission to comment on or edit the document. Commenters’ edits become suggestions."},
     {t:"Viewer", why:"Viewers can only read."},
     {t:"Owner", why:"The owner can do everything, including accepting suggestions."},
     {t:"Editor", why:"Editors can change the text directly (they can also choose to suggest)."}
   ]},
   {id:"t1u8-q32", lesson:"t1u8-l4", level:2, q:"A reviewer edited a copy of your document without turning on tracking. Which tool shows exactly what they changed?", options:[
     {t:"Compare documents", ok:true, why:"Compare marks the differences between the two files as tracked changes."},
     {t:"Accept All", why:"There are no tracked changes to accept."},
     {t:"Word count", why:"A word count can hint something changed, but not what."},
     {t:"Turning on Track Changes now", why:"Tracking only records edits made after it’s turned on."}
   ]},
   {id:"t1u8-q33", lesson:"t1u8-l4", level:1, q:"How is version history different from tracked changes?", options:[
     {t:"Version history keeps snapshots of the whole document over time; tracked changes record each edit as a proposal to accept or reject", ok:true, why:"They answer different questions: “what did it look like before?” versus “do I accept this edit?”"},
     {t:"They are the same feature", why:"They’re separate features with different jobs."},
     {t:"Version history only works for PDFs", why:"It works for documents in cloud storage and online editors."},
     {t:"Tracked changes are deleted after 24 hours", why:"Tracked changes stay until accepted or rejected."}
   ]},
   {id:"t1u8-q34", lesson:"t1u8-l4", level:3, q:"Ana gets 50 suggestions from three reviewers. Which approach is best?", options:[
     {t:"Accept the proofreader’s typo fixes, then go through number and wording changes one by one with Next", ok:true, why:"Bulk-accept only what you fully trust; check changes that affect meaning or numbers individually."},
     {t:"Accept All immediately to save time", why:"One wrong accepted change can alter a figure or meaning unnoticed."},
     {t:"Reject All and rewrite it herself", why:"That throws away useful work and annoys reviewers."},
     {t:"Hide the markup and send it as it is", why:"Hidden changes are still in the file and unresolved."}
   ]},
   {id:"t1u8-q35", lesson:"t1u8-l4", level:2, q:"Why is one shared file usually better than emailing copies for review?", options:[
     {t:"Everyone works on the current version, changes stay in one place, and history is kept", ok:true, why:"Copies drift apart; a shared file stays one file."},
     {t:"Emailed files can’t contain comments", why:"They can; the problem is merging several copies."},
     {t:"Shared files can’t be printed", why:"They print normally."},
     {t:"Email is never allowed for documents", why:"Email is fine for final copies, ideally as PDF."}
   ]},
   {id:"t1u8-q36", lesson:"t1u8-l4", level:2, q:"Sione uses Pages with tracking on and wants to turn tracking off. What does Apple say he must do first?", options:[
     {t:"Accept or reject all the changes", ok:true, why:"Apple’s guide says turning tracking off requires resolving every change first."},
     {t:"Export the document to PDF", why:"Exporting doesn’t affect tracking in the document."},
     {t:"Delete all comments", why:"Comments are separate from tracked changes."},
     {t:"Share it on iCloud", why:"Sharing doesn’t turn off tracking."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u8-q37", lesson:"t1u8-l5", level:1, q:"Under WCAG 2.2 level AA, what is the minimum contrast ratio for normal-size text?", options:[
     {t:"4.5:1", ok:true, why:"Success Criterion 1.4.3 requires at least 4.5:1, or 3:1 for large text."},
     {t:"3:1", why:"That’s the minimum for large text (18 pt, or 14 pt bold) only."},
     {t:"7:1", why:"That’s the stricter AAA level."},
     {t:"21:1", why:"21:1 is black on white, the maximum possible, not the minimum."}
   ]},
   {id:"t1u8-q38", lesson:"t1u8-l5", level:2, q:"Which link text works best for screen-reader users?", options:[
     {t:"Download the volunteer handbook (PDF)", ok:true, why:"It names the destination and makes sense on its own."},
     {t:"Click here", why:"It means nothing out of context."},
     {t:"Here", why:"Same problem: no destination."},
     {t:"Link", why:"It doesn’t say where it goes."}
   ]},
   {id:"t1u8-q39", lesson:"t1u8-l5", level:2, q:"Which apps have a built-in accessibility checker?", options:[
     {t:"Word and LibreOffice Writer", ok:true, why:"Word: Review → Check Accessibility. LibreOffice: Tools → Accessibility Check. Google Docs and Pages need checking by hand (or add-ons for Docs)."},
     {t:"Google Docs and Pages", why:"Neither has a built-in checker; Word and LibreOffice do."},
     {t:"All four apps", why:"Only Word and LibreOffice have one built in."},
     {t:"None of them", why:"Word and LibreOffice both have one."}
   ]},
   {id:"t1u8-q40", lesson:"t1u8-l5", level:3, q:"The accessibility checker passes Mei’s document. Which problem could it still have?", options:[
     {t:"Alt text that exists but says only “photo”", ok:true, why:"Checkers detect missing alt text, not useless alt text. A human check is still needed."},
     {t:"A missing heading style that the checker reported", why:"If the checker reported it, it didn’t pass."},
     {t:"Too many pages", why:"Length isn’t an accessibility error."},
     {t:"A PDF/A setting", why:"PDF/A is an export option, not an accessibility problem."}
   ]},
   {id:"t1u8-q41", lesson:"t1u8-l5", level:2, q:"The committee will edit a draft policy next week. Which format should Oluwaseun send (if they can’t share one online file)?", options:[
     {t:".docx or .odt", ok:true, why:"They need to edit it, so send an editable format."},
     {t:"PDF/A", why:"PDF/A is for archiving final versions."},
     {t:"A screenshot", why:"A picture of text can’t be edited or read by screen readers."},
     {t:".pages, so the layout is kept", why:"People without Pages may not be able to open it."}
   ]},
   {id:"t1u8-q42", lesson:"t1u8-l5", level:1, q:"What is PDF/A for?", options:[
     {t:"Long-term archiving: everything needed to display the file is inside it", ok:true, why:"PDF/A (ISO 19005) is designed so files still open correctly years later."},
     {t:"Making PDFs editable", why:"PDF/A is still a fixed-layout format."},
     {t:"Adding animations", why:"PDF/A excludes features that could stop it displaying in the future."},
     {t:"Password protecting PDFs", why:"Encryption isn’t allowed in PDF/A."}
   ]},
   {id:"t1u8-q43", lesson:"t1u8-l5", level:2, q:"Why might a document full of phone photos be too big to email, and what helps?", options:[
     {t:"Full-size photos take many megabytes each; compressing them shrinks the file", ok:true, why:"Images dominate file size. Compress Pictures (Word), Compress (LibreOffice) or Reduce File Size (Pages) helps."},
     {t:"Text takes up most of the space; delete some paragraphs", why:"Text is tiny compared with photos."},
     {t:"Fonts make files huge; change the font", why:"Fonts usually aren’t embedded in editable documents; photos are the issue."},
     {t:"Headings add megabytes; remove them", why:"Headings add almost nothing, and they’re needed for structure."}
   ]},
   {id:"t1u8-q44", lesson:"t1u8-l5", level:3, q:"Hana must send 60 personalised award certificates, each with a name and an achievement. What’s the best approach?", options:[
     {t:"Mail merge: one certificate with merge fields, plus a list with one row per person", ok:true, why:"Mail merge makes one personalised copy per row and avoids typing errors."},
     {t:"Copy and paste the certificate 60 times and edit each by hand", why:"Slow and error-prone: names end up on the wrong certificates."},
     {t:"Use track changes to edit each name", why:"Track changes records edits; it doesn’t generate copies."},
     {t:"Make a template and open it 60 times", why:"A template helps, but she’d still type every name; mail merge fills them in automatically."}
   ]},
   {id:"t1u8-q45", lesson:"t1u8-l5", level:2, q:"Why use a template for monthly meeting minutes?", options:[
     {t:"Each new copy starts with the right styles, layout and placeholders, so every month looks consistent", ok:true, why:"Templates save setup time and keep documents consistent, and the template itself stays unchanged."},
     {t:"Templates automatically write the minutes", why:"They provide structure; people still write the content."},
     {t:"Templates can’t be edited, so mistakes are impossible", why:"Documents made from templates are fully editable."},
     {t:"Templates make the file a PDF", why:"Templates create editable documents."}
   ]}
  ]
});
