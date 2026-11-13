/* Social Science Primers · Migration Studies Unit 3 (e2u11) · Borders, rights and governance */
ICA.addUnit({
  id:"e2u11", track:"e2", n:11, title:"Borders, rights and governance", icon:"🛂",
  blurb:"The rules that shape who may move, stay and belong: borders, passports and visas; how citizenship is gained and passed on; the refugee regime from the 1951 Convention to regional treaties; what happens to an asylum claim and the long-term solutions for refugees; and the governance of work, free movement and the money migrants send home, with the debates on each told fairly.",
  goals:[
    "Explain what borders do, where border control happens, and how passports and visas work, including what passport-power indexes measure",
    "Tell jus soli, jus sanguinis, naturalisation, dual citizenship and denizenship apart, with examples from several regions",
    "Break the 1951 refugee definition into its parts, explain non-refoulement, and compare the Convention with the OAU Convention, the Cartagena Declaration and EU asylum rules",
    "Follow an asylum claim from application to outcome, explain complementary protection and the durable solutions, and describe the debates about externalisation and detention",
    "Describe the Global Compacts, migrant workers’ rights and sponsorship systems, compare regional free-movement regimes, and work out what sending money home really costs"
  ],
  read:[
    {book:"imis", where:"Chapter 9 “Humanitarian Migration”, Chapter 20 “Migration Governance” and Chapter 22 “Citizenship & Migration”", note:"Open-access chapters by migration researchers. Read each after the matching lesson: the lessons build the background the chapters take for granted."},
    {book:"wmr", where:"Part I (key data and information on migration and migrants)", note:"IOM’s 2026 report, launched in May 2026. Use it to check current figures on remittances, migrant workers and displacement."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e2u11-l1", title:"Borders, passports and visas", minutes:50,
   hook:{q:"Before the First World War began in 1914, did travellers crossing most borders in western and central Europe need to show a passport?", options:["Yes: passports had been checked at every European border since the Middle Ages","Mostly no: in much of Europe passports were rarely demanded, though some states and some groups faced controls","No: passports had not been invented yet","Only people travelling by ship needed one"], answer:1, reveal:"**Mostly no.** In the decades before 1914 many European states rarely asked travellers for passports, although some, such as the Russian Empire, kept strict controls, and countries like the United States already restricted particular groups (the Chinese Exclusion Act of 1882). The war changed everything: governments made passports compulsory as a wartime measure, and the controls stayed. This lesson looks at what borders do, how passports and visas came to be, and why where you were born shapes how easily you can travel."},
   goals:[
     "Explain what a border is and why controlling entry is tied to sovereignty",
     "Explain why international law gives a right to leave any country but no general right to enter another",
     "Describe where border control happens: before travel, at the line and inside a country",
     "Tell a short history of the passport, from wartime controls to machine-readable documents",
     "Explain what a visa is, what passport-power indexes measure, and what border securitisation means"
   ],
   learn:[
    {h:"What a border does", body:[
      {lead:"Think of a large building with a reception desk. The walls mark where the building ends, the desk decides who comes in, and inside there are rules about where each visitor may go and for how long. A state’s border does all three jobs."},
      "A [[border]] is the line where one state’s territory ends and another’s begins, together with the rules and people that control movement across it. It is a **line** on a map, a **filter** that lets some people and goods through and stops others, and an **institution**: officers, laws, databases, fences and offices.",
      "Borders are tied to [[sovereignty]], which you met in the IR units ({{sovereignty}}): a state’s final authority over its territory. Deciding who may enter and stay is one of the oldest claims of that authority. Courts in many countries describe it as a basic power of the state.",
      "That power has limits, though. States have signed treaties that restrict what they can do at their borders. They may not send refugees back to persecution (Lesson 3 explains this rule, called non-refoulement). They must let their own citizens come home. And [[human-rights|human rights]] law ({{human-rights-regime}}), such as the rights of children and the ban on torture, applies at the border too.",
      {key:"A border is a line, a filter and an institution. Controlling it is a sovereign power, limited by international law."}
    ]},
    {h:"A right to leave, but no right to enter", body:[
      "Here is a puzzle at the heart of migration law. The [[universal-declaration-human-rights|Universal Declaration of Human Rights]] (1948) says in Article 13: “Everyone has the right to leave any country, including his own, and to return to his country.” The International Covenant on Civil and Political Rights (1966), a binding treaty, repeats both rights in Article 12.",
      "But no treaty gives a general right to **enter** someone else’s country. You may leave home, and you may always go back, but whether you may go anywhere else is, in most cases, up to the other state.",
      "Article 14 of the Universal Declaration adds one important exception in spirit: “Everyone has the right to seek and to enjoy in other countries asylum from persecution.” It is a right to *seek* asylum, not a right to be admitted anywhere you choose; the refugee rules in Lesson 3 fill in what that means in practice.",
      {ex:"Rahel is a citizen of one country and wants to work in another. Her own state may not stop her leaving without good legal reason, and it must let her return. The other state, though, can require a visa, set conditions or say no. If Rahel were fleeing persecution, the picture would change: that state would be bound not to send her back to danger, even if it did not want to admit her.", label:"Worked example: the right to leave meets the power to admit"},
      {tip:"When you read a migration debate, ask which right is involved: leaving, returning home, entering, staying, or being protected from return. People often argue past each other because they mean different ones."}
    ]},
    {h:"Where border control happens", body:[
      "We picture a border as a booth at the edge of a country. Today, much of the control happens far from that line. Border researchers describe three zones.",
      {fig:'<svg viewBox="0 0 340 408"><defs><marker id="e2u11-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="8" width="324" height="112" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1. Before you travel (abroad)</text><text class="s" x="170" y="56" text-anchor="middle">Visa applications at consulates or online</text><text class="s" x="170" y="76" text-anchor="middle">Electronic travel authorisations</text><text class="s" x="170" y="96" text-anchor="middle">Airlines check documents before boarding</text><path class="d-ink" d="M170 122 L170 142" stroke-width="2" marker-end="url(#e2u11-l1-a)"/><rect class="d-gold" x="8" y="146" width="324" height="112" rx="10" stroke-width="2"/><text x="170" y="170" text-anchor="middle">2. At the line (ports of entry)</text><text class="s" x="170" y="194" text-anchor="middle">Passport control and entry decision</text><text class="s" x="170" y="214" text-anchor="middle">Fingerprints or photos in many places</text><text class="s" x="170" y="234" text-anchor="middle">Patrols, fences and sea surveillance</text><path class="d-ink" d="M170 260 L170 280" stroke-width="2" marker-end="url(#e2u11-l1-a)"/><rect class="d-sage" x="8" y="284" width="324" height="112" rx="10" stroke-width="2"/><text x="170" y="308" text-anchor="middle">3. Inside the country</text><text class="s" x="170" y="332" text-anchor="middle">Residence permits and their renewal</text><text class="s" x="170" y="352" text-anchor="middle">Right-to-work and housing checks</text><text class="s" x="170" y="372" text-anchor="middle">Status checks for services, exit records</text></svg>', alt:"Three stacked boxes joined by downward arrows. Box 1, before you travel (abroad): visa applications at consulates or online, electronic travel authorisations, airlines checking documents before boarding. Box 2, at the line (ports of entry): passport control and the entry decision, fingerprints or photos in many places, patrols, fences and sea surveillance. Box 3, inside the country: residence permits and their renewal, right-to-work and housing checks, status checks for services and exit records.", cap:"Border control in three zones. Much of it happens before a traveller reaches the line, and some of it long after."},
      "**Before travel.** Many states make airlines and shipping companies check passengers’ documents, and fine them for carrying people without the right papers. These rules are often called **carrier sanctions**. Their effect is that a check-in desk thousands of kilometres away works as part of the border.",
      "**At the line.** Officers at airports, seaports and land crossings decide whether to admit each person. Many countries also take fingerprints or face images and store them in databases.",
      "**Inside.** Permission to stay often has conditions: a time limit, a type of work, a need to renew. Employers, landlords, universities or hospitals may be required to check status. That is why some scholars say the border now follows people inside the country."
    ]},
    {h:"A short history of the passport", body:[
      "Documents for travellers are old. Rulers in many civilisations issued letters of safe conduct asking others to let the bearer pass. But the modern passport, a standard booklet that proves who you are and which state you belong to, is quite recent.",
      {ol:[
        "**Before 1914.** In much of Europe, passports were rarely checked; travel between many countries was fairly free, though some states kept tight controls and some groups were singled out.",
        "**1914–1918.** During the First World War, countries such as France and Germany made passports compulsory as a security measure. Neutral countries followed, and the controls stayed after the war.",
        "**1920.** A League of Nations conference in Paris agreed a common format: a booklet of 32 pages, 15.5 by 10.5 centimetres, with the bearer’s description at the front.",
        "**1922.** The League created the **Nansen passport**, named after Fridtjof Nansen, its first High Commissioner for Refugees. It was an identity certificate for refugees who had no valid passport, at first mainly people displaced from the former Russian Empire. It was used by about 450,000 people and honoured by more than 50 countries.",
        "**From the 1980s.** The International Civil Aviation Organization (ICAO), a UN agency, set standards for **machine-readable passports**: the two lines of letters and chevrons on the photo page. Many passports now also hold a chip with the photo and personal data (e-passports)."
      ]},
      "A [[passport]], then, is a document a state issues to its nationals that proves their identity and nationality and asks other states to let them pass. It belongs to the issuing state, not to the holder, which is one reason why taking someone’s passport away from them is a serious matter (Lesson 5 returns to this)."
    ]},
    {h:"Visas and other permissions", body:[
      "A [[visa]] is permission, usually given before travel, to travel to a country and ask to be admitted for a certain purpose and time. It is a bit like a ticket that lets you queue at the door: in most countries the officer at the border still makes the final decision.",
      {table:[["Kind","What it is for","Example"],["Short-stay visit","Tourism, business meetings, family visits","A Schengen visa: up to 90 days in any 180"],["Study","A course at a school or university","A student visa tied to enrolment"],["Work","A job, often with a named employer","A temporary skilled-worker visa"],["Family","Joining a spouse, parent or child","A family reunification visa"],["Transit","Changing planes or trains","An airport transit visa"]]},
      "Many people never need a visa for short trips, because their country has a **visa waiver** arrangement with the destination. Some destinations ask visa-free travellers to get an **electronic travel authorisation** online before they fly, such as the United States’ ESTA, Canada’s eTA or the United Kingdom’s ETA. It is quicker than a visa but is still a check before travel.",
      "For longer stays, a visa is often only the first step. Once inside, people usually need a **residence permit**, which sets out how long they may stay and what they may do (work, study, live with family). Visas and permits are why two people on the same plane can have very different rights on arrival.",
      {ex:"Mei, Javier and Nour land at the same airport. Mei has a student visa and must collect a residence card within weeks. Javier’s passport lets him visit for up to 90 days without a visa, but he may not take a job. Nour holds a work visa sponsored by a hospital; her permission to stay is linked to that post. Same flight, same queue, three different sets of rules.", label:"Worked example: one plane, three statuses"}
    ]},
    {h:"Passport “power” and the mobility divide", body:[
      "Several private companies publish **passport indexes** that rank passports by how many destinations their holders can enter without getting a visa in advance. Methods differ: some count a visa on arrival or an electronic travel authorisation as “visa-free”, others don’t. Some indexes are produced by firms that advise on residence- and citizenship-by-investment schemes, which is worth knowing when you read their press releases.",
      "This course doesn’t reproduce the rankings, because they change several times a year. The pattern behind them is steadier. Research on visa rules, such as a 2015 study by Steffen Mau and colleagues in the *Journal of Ethnic and Migration Studies*, found that over recent decades travel became easier mainly for citizens of richer countries, while many people from poorer countries faced as many visa requirements as before. Scholars call this the **global mobility divide**.",
      "So a passport is not only a travel document. It is a kind of inherited advantage or disadvantage: the same trip that is a quick online form for one person can mean months of paperwork, fees, bank statements and interviews for another.",
      {warn:"If you quote a passport index, give the company, the edition and the date, and say what it counts. “Country X has the world’s strongest passport” without those details is not a fact you can check."}
    ]},
    {h:"Borders as security: securitisation", body:[
      "Since the 1990s, many governments have described migration control in the language of security: threats, defence, emergencies. The IR units introduced [[securitization|securitisation]], the process by which an issue is presented as an existential threat so that extraordinary measures seem justified. Applied to borders, it is called [[border-securitisation|border securitisation]].",
      "The political scientist Jef Huysmans, in a 2000 article on the European Union, described how migration came to be linked with crime, terrorism and threats to welfare and identity. Examples of securitised border policies around the world include fences and walls, military patrols at sea or on land, large biometric databases and detention.",
      "**Some argue** that states need strong border security to screen for real dangers, such as people smuggling or terrorism, to keep public trust in the migration system, and to decide who enters. **Others argue** that framing migrants as threats breeds fear and [[discrimination]], treats refugees as suspects, and pushes people towards more dangerous routes. IOM’s Missing Migrants Project has recorded tens of thousands of deaths and disappearances on migration routes since it began counting in 2014.",
      "As a student, your task isn’t to pick a side but to notice the [[framing]]: which words are used, who is speaking, and what the evidence shows."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["A visa guarantees entry.","In most countries the border officer still decides; a visa lets you travel and ask."],["Everyone has a right to migrate anywhere.","There is a right to leave and to return home, but no general right to enter another state."],["Border control only happens at the border.","Much of it happens before travel (visas, airlines) and inside the country (permits, checks)."],["Passports are ancient.","Travel letters are old, but compulsory standard passports date mainly from the First World War and the 1920 Paris conference."],["Passport rankings are official.","They are made by private firms, with differing methods, and change often."]]},
      {terms:["border","passport","visa","schengen-area","border-securitisation"]}
    ]}
   ],
   try:[
    {id:"e2u11-l1-x1", type:"mcq", q:"Dmitri says: “Human rights law says everyone may live in any country they like.” Which reply is accurate?", options:[
      {t:"Human rights law gives a right to leave any country and to return to your own, but no general right to enter another; the main exception is protection from being returned to persecution.", ok:true, why:"Right. UDHR Article 13 and ICCPR Article 12 cover leaving and returning; entry is mostly up to the receiving state, limited by rules such as non-refoulement."},
      {t:"He is right: the Universal Declaration gives everyone a right to enter any country.", why:"The Declaration gives a right to *leave* any country and to *return* to one’s own, not to enter others."},
      {t:"Human rights law says nothing at all about movement between countries.", why:"It does: Article 13 (leaving and returning) and Article 14 (seeking asylum) of the Universal Declaration are about exactly that."},
      {t:"Only citizens of rich countries have a right to leave their country.", why:"The right to leave applies to everyone, whatever their nationality."}
    ]},
    {id:"e2u11-l1-x2", type:"sort", q:"Where does each check happen: before travel, at the line, or inside the country?", buckets:["Before travel","At the line","Inside the country"], items:[
      {t:"An airline agent refuses to board a passenger whose visa has expired.", b:0, why:"Carrier checks happen at departure, often far away. Airlines can be fined for carrying passengers without valid papers."},
      {t:"An officer at an airport arrival hall stamps a passport and admits the traveller.", b:1, why:"The entry decision at a port of entry is control at the line."},
      {t:"A landlord asks a new tenant to show a residence permit before signing a lease.", b:2, why:"Some countries require landlords to check status: control inside the country."},
      {t:"A student applies online for a visa from her home country.", b:0, why:"Visa applications are made before travel, at a consulate or online."},
      {t:"Fingerprints are taken at a land crossing.", b:1, why:"Biometric checks at the crossing point are part of control at the line."},
      {t:"A worker renews a work permit at an immigration office after two years.", b:2, why:"Permits and their renewal are how control continues inside the country."}
    ]},
    {id:"e2u11-l1-x3", type:"order", q:"Put these moments in the history of the passport in time order, earliest first.", items:[
      {t:"Passports are rarely checked at many European borders", why:"The decades before 1914, though some states kept strict controls."},
      {t:"Countries make passports compulsory as a wartime measure", why:"During the First World War (1914–1918)."},
      {t:"A League of Nations conference in Paris agrees a standard passport booklet", why:"1920: 32 pages, 15.5 by 10.5 centimetres."},
      {t:"The Nansen passport is created for refugees without valid passports", why:"1922, under Fridtjof Nansen, the League’s High Commissioner for Refugees."},
      {t:"ICAO standards for machine-readable passports spread worldwide", why:"From the 1980s onwards; chips (e-passports) came later."}
    ]},
    {id:"e2u11-l1-x4", type:"match", q:"Match each document or permission to what it does.", pairs:[
      ["Passport","Proves the holder’s identity and nationality, issued by their own state","A passport comes from your state of nationality."],
      ["Visa","Lets a person travel and ask to be admitted for a set purpose and time","Issued by the destination, usually before travel; the border still decides."],
      ["Electronic travel authorisation","A quick online pre-check for travellers who don’t need a visa","Examples include ESTA (US), eTA (Canada) and ETA (UK)."],
      ["Residence permit","Sets out how long a person may stay and what they may do once inside","Long stays usually need a permit after arrival."],
      ["Nansen passport","An identity certificate for refugees without valid passports, from 1922","An early tool of the international refugee regime."]
    ]},
    {id:"e2u11-l1-x5", type:"mcq", q:"Hana reads: “Country X has the most powerful passport in the world.” What is the most useful first question to ask?", options:[
      {t:"Which index, which edition and date, and what does it count as visa-free?", ok:true, why:"Right. Indexes are made by private firms with different methods, and rankings change several times a year."},
      {t:"Is the passport printed on stronger paper?", why:"“Power” here means how many destinations holders can enter without a visa in advance, not the physical document."},
      {t:"Did the United Nations approve the ranking?", why:"No UN body publishes these rankings; private companies do."},
      {t:"How many pages does the passport have?", why:"Page count has nothing to do with visa-free access."}
    ]},
    {id:"e2u11-l1-x6", type:"spot", q:"Oluwaseun wrote this summary. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Controlling entry is closely tied to a state’s sovereignty,", flag:false, why:"Accurate: deciding who enters is a classic sovereign power."},
      " but ",
      {t:"international law sets some limits, such as the ban on returning refugees to persecution.", flag:false, why:"Accurate: non-refoulement is a key limit on border control."},
      " ",
      {t:"Once you hold a visa, the border officer must let you in.", flag:true, why:"Misleading. In most countries a visa lets you travel and ask; the officer at the border still decides."},
      " ",
      {t:"Today much control happens before travel, for example when airlines check documents.", flag:false, why:"Accurate: carrier checks extend the border far beyond the line."},
      " ",
      {t:"Passport rankings are official figures published by the UN every year.", flag:true, why:"Inaccurate. Private companies publish them, with differing methods."},
      " ",
      {t:"Describing migration mainly as a security threat is called securitisation.", flag:false, why:"Accurate: that is the IR term, applied to borders as border securitisation."}
    ]},
    {id:"e2u11-l1-x7", type:"mcq", q:"A newspaper column calls arriving asylum seekers “an invasion” and demands an emergency military response. In securitisation terms, what is happening?", options:[
      {t:"The writer is presenting migration as an existential threat to justify extraordinary measures.", ok:true, why:"Right. That is the core move of securitisation: emergency language that makes unusual measures seem necessary. Spotting it doesn’t settle whether any policy is right or wrong."},
      {t:"The writer is giving a neutral statistical description.", why:"Words like “invasion” and calls for emergency action frame the issue; they are not neutral statistics."},
      {t:"The writer is applying the 1951 Refugee Convention.", why:"The Convention defines refugees and their rights; it says nothing about invasions."},
      {t:"The writer is describing a visa waiver.", why:"Visa waivers are about travel without visas, unrelated to this framing."}
    ]}
   ],
   apply:{
    intro:"Notice borders and their rules in your own life. Everything here is free and needs no account. You don’t need to share anything about your own or anyone else’s status.",
    tasks:[
     {t:"Look closely at a travel document", how:[
       "If you have a passport, open the photo page; if not, look at a sample image on your government’s or ICAO’s website.",
       "Find the two machine-readable lines at the bottom and note what they seem to contain (letters for the country code, numbers for dates).",
       "Read the printed request inside the cover, if there is one, asking other states to let the bearer pass. Copy one phrase."
     ], write:"What the photo page shows… What the machine-readable lines contain… The request phrase…"},
     {t:"Check one country’s entry rules from an official source", how:[
       "Choose a country you might like to visit.",
       "Find its official government page on visas or entry rules (avoid commercial visa agencies).",
       "Note whether people from your country need a visa, a travel authorisation or nothing for a short visit, and the date the page was updated."
     ], write:"Country… Official page… What it requires… Date updated…"},
     {t:"Spot the framing in one border story", how:[
       "Find one recent news story about a border anywhere in the world.",
       "List the words used to describe the people crossing and the border itself.",
       "Note whether the story uses security language (threat, invasion, defence) or other frames (rights, work, family), and whose voices are quoted."
     ], write:"The story… Words used… Frame… Voices quoted… Voices missing…"}
    ],
    proof:"Notes on a passport’s photo page, one country’s official entry rules with a date, and one border story with its framing and voices listed."
   },
   read:[
    {book:"imis", where:"Chapter 20 “Migration Governance”", note:"Read it after this lesson: it shows how states, regions and international bodies share the work of governing migration, and why control is never complete."},
    {book:"imis", where:"Chapter 12 “Irregular Migration”", note:"Optional: how border and visa rules themselves create the category of irregular migration."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e2u11-l2", title:"Citizenship: who belongs, on paper", minutes:55,
   hook:{q:"A baby is born in Brazil to two parents who are citizens of another country and are only visiting. Under Brazil’s constitution, is the baby Brazilian?", options:["No: only children of Brazilian citizens are Brazilian","Yes: Brazil gives citizenship to almost any child born on its territory","Only after living in Brazil for ten years","Only if the parents give up their own citizenship"], answer:1, reveal:"**Yes.** Like most countries in the Americas, Brazil follows **jus soli**, “right of the soil”: being born on the territory is enough, with narrow exceptions such as the children of foreign diplomats. Most countries elsewhere work mainly by **jus sanguinis**, “right of blood”: citizenship passes from parents. This lesson explains both, how adults can become citizens later, and why some people hold two citizenships while others hold none."},
   goals:[
     "Explain what citizenship and nationality are and what they give a person",
     "Tell jus soli from jus sanguinis and describe how countries mix them, with examples from several regions",
     "Describe typical naturalisation requirements and how they differ",
     "Explain dual citizenship and why countries accept or restrict it",
     "Explain denizenship and how gaps between nationality laws can leave people stateless"
   ],
   learn:[
    {h:"What citizenship is", body:[
      {lead:"Imagine a club with members and guests. Guests may come in, use the rooms and even stay a long time, but only members can vote on the rules, and only members can never be asked to leave. Citizenship is membership of a state."},
      "[[citizenship|Citizenship]] is the legal bond between a person and a state, with the rights and duties that come with it. In international law the bond is usually called **nationality**; many countries use “citizenship” for the same thing, and this course treats the two as the same unless it says otherwise.",
      "Citizenship typically brings rights that other residents may not have: to enter and live in the country without conditions, to vote and stand for national office, to hold a passport and to get help from your country’s embassies abroad. It may also bring duties, such as jury service or, in some countries, military service.",
      "Who gets it is mostly up to each state. The 1930 Hague Convention on nationality put it plainly: “It is for each State to determine under its own law who are its nationals.” International law adds limits: the Universal Declaration says everyone has the right to a nationality and no one may be arbitrarily deprived of it (Article 15).",
      {key:"Citizenship is membership of a state. Each state writes its own rules, within limits set by international law."}
    ]},
    {h:"Citizenship at birth: soil and blood", body:[
      "Countries use two basic rules for children. Most mix them.",
      "[[jus-soli|Jus soli]] (Latin for “right of the soil”) gives citizenship to children born on the state’s territory. [[jus-sanguinis|Jus sanguinis]] (“right of blood”) passes citizenship from parent to child, wherever the child is born.",
      {table:[["Approach","How it works","Examples (check current law)"],["Unconditional jus soli","Almost any child born on the territory is a citizen","Most of the Americas, including Argentina, Brazil, Canada and Mexico"],["Conditional jus soli","Birth counts if a parent is a citizen or settled resident","Australia (since 1986), Ireland (since 2005), Germany (since 2000), the UK (since 1983)"],["Mainly jus sanguinis","Citizenship comes from a parent","Japan, China, India (with conditions), and many countries in Asia, Africa and Europe"]]},
      "Rules change over time. The United Kingdom ended automatic citizenship by birth in 1983, Australia in 1986 and New Zealand in 2006. India narrowed it in two steps, in 1987 and 2004. In Ireland a 2004 referendum ended it for children born from 2005 whose parents lacked enough residence. Germany moved the other way: from 2000 children born there to long-settled foreign parents could become German, and a 2024 reform shortened the residence a parent needs.",
      "In the United States, citizenship by birth comes from the Fourteenth Amendment (1868). A January 2025 executive order sought to deny it to children of parents who were in the country unlawfully or only temporarily. In June 2026 the Supreme Court, in *Trump v. Barbara*, held that such children are citizens at birth under the Fourteenth Amendment, so the order cannot take effect.",
      {fig:'<svg viewBox="0 0 340 352"><text x="170" y="20" text-anchor="middle">A child is born abroad, to foreign parents</text><text class="s" x="203" y="44" text-anchor="middle">Parents’ country passes</text><text class="s" x="203" y="60" text-anchor="middle">citizenship by descent?</text><text class="s" x="137" y="84" text-anchor="middle">Yes</text><text class="s" x="269" y="84" text-anchor="middle">No</text><text class="s" x="36" y="132" text-anchor="middle">Birth</text><text class="s" x="36" y="148" text-anchor="middle">country</text><text class="s" x="36" y="164" text-anchor="middle">has</text><text class="s" x="36" y="180" text-anchor="middle">jus soli</text><text class="s" x="36" y="246" text-anchor="middle">Birth</text><text class="s" x="36" y="262" text-anchor="middle">country</text><text class="s" x="36" y="278" text-anchor="middle">has no</text><text class="s" x="36" y="294" text-anchor="middle">jus soli</text><rect class="d-sage" x="74" y="94" width="126" height="108" rx="8" stroke-width="2"/><text x="137" y="138" text-anchor="middle">Two</text><text x="137" y="156" text-anchor="middle">citizenships</text><text class="s" x="137" y="178" text-anchor="middle">if both allow it</text><rect class="d-lup" x="206" y="94" width="126" height="108" rx="8" stroke-width="2"/><text x="269" y="138" text-anchor="middle">Birth</text><text x="269" y="156" text-anchor="middle">country’s only</text><rect class="d-gold" x="74" y="208" width="126" height="108" rx="8" stroke-width="2"/><text x="137" y="252" text-anchor="middle">Parents’</text><text x="137" y="270" text-anchor="middle">country’s only</text><rect class="d-rose" x="206" y="208" width="126" height="108" rx="8" stroke-width="2"/><text x="269" y="252" text-anchor="middle">Risk of</text><text x="269" y="270" text-anchor="middle">statelessness</text><text class="s" x="170" y="342" text-anchor="middle">Simplified: real laws add many conditions.</text></svg>', alt:"A two-by-two grid. Columns ask whether the parents’ country passes citizenship by descent: yes or no. Rows ask whether the birth country uses jus soli. Jus soli and descent: two citizenships, if both countries allow it. Jus soli but no descent: the birth country’s citizenship only. No jus soli but descent: the parents’ citizenship only. Neither: risk of statelessness.", cap:"What a child born abroad to foreign parents may receive, depending on how the two countries’ laws fit together. Real laws add many conditions."},
      "The grid shows why the two rules matter together. Where they overlap, a child may hold two citizenships. Where both are missing, a child can be left with none: a [[stateless-person|stateless person]] ({{statelessness}}). Gaps also open when a mother cannot pass on her nationality on equal terms with a father; UNHCR has counted about two dozen countries whose laws still treat mothers and fathers unequally in this way."
    ]},
    {h:"Becoming a citizen later: naturalisation", body:[
      "[[naturalisation|Naturalisation]] is the process by which an adult (or a child, with their family) who was not a citizen at birth becomes one. Each country sets its own conditions. Typical ones are:",
      {list:[
        "**Lawful residence** for a set time: for example, three of the last five years in Canada, five years in Germany and Japan (as a usual rule), or ten years in Switzerland.",
        "**Language** ability, often tested.",
        "**Knowledge** of the country’s history, laws or civic life, sometimes through a test.",
        "**Good character**, often meaning no serious criminal record.",
        "**Means of support**, in some countries.",
        "**Giving up another citizenship**, in countries that do not accept dual citizenship."
      ]},
      "Requirements change with politics. Germany’s 2024 reform cut the usual residence period from eight years to five and added a fast route after three years for people with exceptional integration; that fast route was abolished in October 2025, while the five-year rule remained.",
      "Many countries also have easier routes for spouses of citizens, for refugees (the 1951 Refugee Convention asks states to make naturalisation easier for them, Article 34) and for people with ancestry in the country.",
      {ex:"Ana has lived lawfully in her new country for six years, works as a nurse and speaks the language well. To naturalise she gathers proof of residence, passes a language test and a civics test, pays a fee and, a year later, attends a ceremony. Her friend Ravi has lived there just as long, but in a country that requires him to give up his first citizenship, so he decides to remain a permanent resident instead. Same years, different choices, because of different laws.", label:"Worked example: two paths after six years"}
    ]},
    {h:"Dual citizenship", body:[
      "[[dual-citizenship|Dual citizenship]] (or dual nationality) means being a citizen of two countries at once. People get it at birth, when the rules in the grid overlap, or later, when they naturalise without losing their first citizenship.",
      "For much of the 20th century, many states disliked it and took citizenship away from people who naturalised elsewhere. Since then the trend has turned: datasets compiled by researchers, such as those of the GLOBALCIT observatory, show that most countries now accept dual citizenship at least in some cases. Examples of the change include Mexico (since 1998, Mexicans by birth no longer lose their nationality), the Philippines (a 2003 law lets natural-born Filipinos keep or regain it), Kenya (its 2010 constitution allows it), Ghana and Germany (since June 2024).",
      "Others restrict it. China’s nationality law does not recognise dual nationality. Japan expects people who hold two nationalities from childhood to choose one by a set age. India does not allow dual citizenship but offers an Overseas Citizenship of India status to many people of Indian origin, which gives long-term visa rights but not a vote.",
      "**Why accept it?** Countries of origin often want to keep ties with their emigrants and [[diaspora|diasporas]]; destination countries may want long-term residents to naturalise without losing family ties. **Why restrict it?** Some governments see citizenship as a single loyalty, worry about conflicting duties such as military service, or face practical questions about which state protects whom.",
      {tip:"“Overseas citizenship” statuses and long-term residence cards can sound like citizenship but usually aren’t. Check whether a status gives an unconditional right to live in the country and to vote."}
    ]},
    {h:"Between guest and citizen: denizenship", body:[
      "Many migrants live for decades in a country without becoming citizens. The Swedish political scientist Tomas Hammar, in *Democracy and the Nation State* (1990), called such long-term residents **denizens**: people who are neither short-term guests nor full citizens. [[denizenship|Denizenship]] is that in-between status.",
      "Denizens usually have secure residence and many social rights: to work, to use public health care and schools, to bring family. What they often lack is the vote in national elections and full protection from removal. Some countries extend voting to them: citizens of one EU country can vote in local elections in another EU country where they live; New Zealand lets permanent residents vote in national elections; Chile lets foreign residents vote after five years of residence.",
      "Denizenship raises a question political theorists still debate: if someone lives, works and pays taxes in a place for twenty years, should they have a say in how it is governed, and should that come through citizenship or through other rights?"
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Being born in a country always makes you its citizen.","Only some countries, mostly in the Americas, give citizenship to almost every child born there."],["Citizenship rules are the same everywhere.","Each state writes its own; residence periods, tests and dual-citizenship rules vary widely."],["Everyone has a citizenship.","Gaps between laws, discrimination and state breakups leave millions of people stateless."],["A permanent resident is the same as a citizen.","Residents often lack the national vote and full protection from removal."],["Dual citizenship is illegal everywhere.","Most countries now accept it in some cases, though some still restrict it."]]},
      {terms:["citizenship","jus-soli","jus-sanguinis","naturalisation","dual-citizenship","denizenship"]}
    ]}
   ],
   try:[
    {id:"e2u11-l2-x1", type:"sort", q:"Which rule gives each child (or adult) citizenship in these invented cases?", buckets:["Jus soli","Jus sanguinis","Naturalisation"], items:[
      {t:"Lucía is born in a country that gives citizenship to every child born there, to parents who are visiting.", b:0, why:"Birth on the territory alone is the test: right of the soil."},
      {t:"Kenji is born abroad to a mother who is a citizen of a country that passes citizenship to children born anywhere.", b:1, why:"Citizenship comes from a parent, whatever the birthplace: right of blood."},
      {t:"Aigerim becomes a citizen after eight years of lawful residence, a language test and a ceremony.", b:2, why:"Gaining citizenship as an adult through an application is naturalisation."},
      {t:"Tomás is born abroad and registered as a citizen through his father, who never lived in that country.", b:1, why:"Descent from a citizen parent: jus sanguinis (some countries limit how many generations this can pass)."},
      {t:"A child born on a country’s territory gets citizenship there because the law grants it to everyone born on the soil.", b:0, why:"Birthplace is the deciding fact: jus soli."},
      {t:"Fatima, a refugee, uses a shortened route to apply for citizenship after years of residence.", b:2, why:"An application route for adults, even an easier one, is naturalisation."}
    ]},
    {id:"e2u11-l2-x2", type:"mcq", q:"In an invented case, a child is born in Country A, which grants citizenship only by descent. The parents are citizens of Country B, which grants citizenship only to children born on its own territory. What is the risk?", options:[
      {t:"The child may be left stateless, because neither country’s rule covers them.", ok:true, why:"Right. A has no jus soli and B has no jus sanguinis, so neither law reaches the child. Many countries have safeguards (the 1961 Statelessness Convention asks for them), but gaps like this are a real cause of statelessness."},
      {t:"The child automatically gets both citizenships.", why:"That would happen if both rules applied. Here neither does."},
      {t:"The child gets Country A’s citizenship because they were born there.", why:"Country A grants citizenship only by descent, and the parents are not A’s citizens."},
      {t:"The child gets Country B’s citizenship through the parents.", why:"Country B grants citizenship only by birth on its territory, and the child was born in A."}
    ]},
    {id:"e2u11-l2-x3", type:"number", q:"An invented country requires 1,825 days of lawful residence for naturalisation, but days spent on a student permit count as half. Priya spent 730 days on a student permit, then 1,095 days on a work permit. How many **more** days of lawful residence does she need?", answer:365, tol:0, unit:"days", why:"Student days count half: 730 ÷ 2 = 365. Work days count in full: 1,095. Total counted = 365 + 1,095 = 1,460. Needed: 1,825 − 1,460 = **365 more days**.", wrongs:[
      {v:0, why:"That counts the student days in full (730 + 1,095 = 1,825). The rule says student days count as half."},
      {v:730, why:"That ignores the student days altogether (1,825 − 1,095). They count, but only at half value."},
      {v:1460, why:"That is the number of days that count so far, not the number still needed."}
    ], hint2:"First halve the student days, then add the work days, then subtract from 1,825."},
    {id:"e2u11-l2-x4", type:"match", q:"Match each term to the situation that shows it.", pairs:[
      ["Dual citizenship","Javier holds the passports of two countries and may live in both without conditions","Citizenship of two states at once."],
      ["Denizenship","Mei has lived in her country for 20 years with permanent residence but cannot vote in national elections","A long-term resident with many rights but not full citizenship (Hammar’s term)."],
      ["Statelessness","Ravi is not considered a national by any state under its law","The 1954 Convention’s definition of a stateless person."],
      ["Naturalisation","Thandiwe passes a language test and becomes a citizen of her new country","Gaining citizenship after birth through an application."]
    ]},
    {id:"e2u11-l2-x5", type:"mcq", q:"Which statement about dual citizenship is accurate?", options:[
      {t:"Most countries now accept it at least in some cases, but some, such as China, do not recognise it.", ok:true, why:"Right. The long-term trend has been towards acceptance, with important exceptions."},
      {t:"It is banned by international law.", why:"No treaty bans it. Each state decides whether to accept it."},
      {t:"Every country has always allowed it.", why:"For much of the 20th century many states took citizenship away from people who naturalised elsewhere."},
      {t:"India’s Overseas Citizenship is full dual citizenship with the right to vote.", why:"It gives long-term visa rights, not citizenship or the vote. India does not allow dual citizenship."}
    ]},
    {id:"e2u11-l2-x6", type:"spot", q:"Sione wrote these notes after the lesson. Tap each claim that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"Jus soli means citizenship by birthplace.", flag:false, why:"Accurate: “right of the soil”."},
      " ",
      {t:"Most countries in the Americas use it with few conditions.", flag:false, why:"Accurate, with narrow exceptions such as diplomats’ children."},
      " ",
      {t:"The United Kingdom still gives citizenship to every child born there.", flag:true, why:"Inaccurate. Since 1983 a child born in the UK is British only if a parent is British or settled there."},
      " ",
      {t:"Each state decides who its nationals are, within limits of international law.", flag:false, why:"Accurate: the 1930 Hague Convention principle, limited by rules such as the right to a nationality."},
      " ",
      {t:"Permanent residents always have the same rights as citizens.", flag:true, why:"Inaccurate. Residents usually can’t vote in national elections and can, in some cases, be removed."}
    ]},
    {id:"e2u11-l2-x7", type:"mcq", q:"Nour has lived and paid taxes in a country for 25 years as a permanent resident but cannot vote there. A friend says this is unfair; another says voting should come with citizenship. What concept frames this debate?", options:[
      {t:"Denizenship: the in-between status of long-term residents and what rights it should carry", ok:true, why:"Right. Hammar’s idea names exactly this gap. Both positions are argued by political theorists; the concept helps you describe the debate without settling it."},
      {t:"Jus sanguinis", why:"That is how citizenship passes from parents, not the status of long-term residents."},
      {t:"Non-refoulement", why:"That is the ban on returning people to persecution (Lesson 3)."},
      {t:"Securitisation", why:"That is about framing issues as security threats."}
    ]}
   ],
   apply:{
    intro:"Explore citizenship rules from official sources. Never ask anyone about their own legal status; use public information, or your own family only if you choose.",
    tasks:[
     {t:"Find how one country grants citizenship at birth", how:[
       "Choose any country (or two, from different regions).",
       "Find its government’s official page on citizenship or nationality, or the GLOBALCIT country profile.",
       "Note whether it uses jus soli, jus sanguinis or a mix, and the date of the page or law."
     ], write:"Country… Birth rule… Conditions… Source and date…"},
     {t:"Compare two naturalisation routes", how:[
       "Pick two countries from different regions.",
       "For each, note the residence period, any language or civics test, and whether dual citizenship is accepted.",
       "Write one sentence on which differences surprised you."
     ], write:"Country 1: residence… tests… dual citizenship… Country 2: … What surprised me…"},
     {t:"Map the citizenships in a family (optional)", how:[
       "Choose your own family, if you are comfortable, or a family from a novel, film or memoir.",
       "Draw a simple tree and note each person’s birthplace and citizenship(s), as far as you know or the story says.",
       "Mark where jus soli, jus sanguinis or naturalisation explains a citizenship. Keep it private."
     ], write:"Who… born where… citizenship(s)… which rule explains it…"}
    ],
    proof:"Notes on one country’s birth rule with a source and date, a comparison of two naturalisation routes, and (optionally) a family or fictional citizenship map."
   },
   read:[
    {book:"imis", where:"Chapter 22 “Citizenship & Migration”", note:"Read it after this lesson: it adds the research debates about how citizenship rules shape migrants’ inclusion."},
    {book:"imis", where:"Chapter 13 “Migration and the Nation”", note:"Optional: why ideas of the nation shape who is counted as belonging."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e2u11-l3", title:"The refugee regime: the 1951 Convention and beyond", minutes:55,
   hook:{q:"When the Refugee Convention was adopted in 1951, which refugees could it cover?", options:["Anyone in the world fleeing persecution, at any time","Only people who became refugees because of events before 1 January 1951, and states could limit it to events in Europe","Only refugees living in UN camps","Only people fleeing one named country"], answer:1, reveal:"**Only people displaced by events before 1951, and states could choose to limit it to Europe.** The Convention was written for the millions uprooted by the Second World War and its aftermath. As new refugee situations arose in Africa, Asia and elsewhere, those limits made less and less sense, and the 1967 Protocol removed them. This lesson takes the refugee definition apart, explains the rule against sending refugees back to danger, and shows how Africa, Latin America and Europe built their own rules on top."},
   goals:[
     "Explain why the refugee regime was created and how the 1967 Protocol changed the 1951 Convention",
     "Break the refugee definition into its parts and apply it to cases",
     "Explain non-refoulement, its exceptions and how human rights law extends it",
     "Describe cessation and exclusion in outline, and the main rights the Convention gives",
     "Compare the OAU Convention (1969), the Cartagena Declaration (1984) and EU asylum rules, including the Pact that applies from June 2026"
   ],
   learn:[
    {h:"Why a refugee regime?", body:[
      {lead:"Imagine a fire in one house on a street. The family runs out with nothing. Their own house can’t shelter them, so someone else has to. The question is who, on what terms, and for how long. The refugee regime is the world’s set of answers to that question."},
      "After the First World War, revolutions and collapsing empires left millions of people outside their countries without protection. The League of Nations appointed Fridtjof Nansen as its first High Commissioner for Refugees in 1921, and his office created the Nansen passport (Lesson 1). After the Second World War, tens of millions more were displaced in Europe and Asia.",
      "In December 1950 the UN General Assembly created the **Office of the United Nations High Commissioner for Refugees** (UNHCR), which began work on 1 January 1951. On 28 July 1951 a conference in Geneva adopted the **Convention relating to the Status of Refugees**, usually called the 1951 [[refugee-convention|Refugee Convention]]. It entered into force in 1954.",
      "The Convention had two limits: it covered only people who became refugees because of events before 1 January 1951, and each state could choose to apply it only to events in Europe. The **1967 Protocol** removed both limits for the states that joined it. Today the two treaties are usually read together.",
      "As of November 2026, the UN Treaty Collection lists 146 states parties to the Convention and 147 to the Protocol: 149 states in all are party to one or both (check the Treaty Collection for the current list). That is most of the world, but not all: several countries that host large numbers of refugees, including Bangladesh, India, Jordan, Lebanon, Malaysia, Pakistan and Thailand, are not parties, and they work with UNHCR through other arrangements. Türkiye is a party but keeps the original limit to European events, so most refugees there are protected under its national law instead."
    ]},
    {h:"The definition, piece by piece", body:[
      "Article 1A(2) of the Convention, as updated by the Protocol, defines a [[refugee]] as a person who, “owing to well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion, is outside the country of his nationality and is unable or, owing to such fear, is unwilling to avail himself of the protection of that country.” A similar test applies to stateless people and their country of former habitual residence.",
      "It reads as one long sentence, but it contains five tests. A person must meet **all** of them.",
      {fig:'<svg viewBox="0 0 340 440"><rect class="d-lup" x="8" y="8" width="324" height="60" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1. Outside their country</text><text class="s" x="170" y="52" text-anchor="middle">of nationality (or former home, if stateless)</text><text class="s" x="170" y="84" text-anchor="middle">and</text><rect class="d-lup" x="8" y="92" width="324" height="60" rx="8" stroke-width="2"/><text x="170" y="116" text-anchor="middle">2. A well-founded fear</text><text class="s" x="170" y="136" text-anchor="middle">real fear, supported by the facts</text><text class="s" x="170" y="168" text-anchor="middle">and</text><rect class="d-lup" x="8" y="176" width="324" height="60" rx="8" stroke-width="2"/><text x="170" y="200" text-anchor="middle">3. Of being persecuted</text><text class="s" x="170" y="220" text-anchor="middle">serious harm, by the state or others</text><text class="s" x="170" y="252" text-anchor="middle">and</text><rect class="d-gold" x="8" y="260" width="324" height="76" rx="8" stroke-width="2"/><text x="170" y="284" text-anchor="middle">4. For one of five reasons</text><text class="s" x="170" y="304" text-anchor="middle">race · religion · nationality ·</text><text class="s" x="170" y="322" text-anchor="middle">particular social group · political opinion</text><text class="s" x="170" y="352" text-anchor="middle">and</text><rect class="d-sage" x="8" y="360" width="324" height="72" rx="8" stroke-width="2"/><text x="170" y="384" text-anchor="middle">5. No protection at home</text><text class="s" x="170" y="404" text-anchor="middle">unable or, because of the fear,</text><text class="s" x="170" y="422" text-anchor="middle">unwilling to use it</text></svg>', alt:"Five boxes stacked down the page, joined by the word and. 1: outside their country of nationality, or former home if stateless. 2: a well-founded fear, meaning real fear supported by the facts. 3: of being persecuted, meaning serious harm, by the state or others. 4: for one of five reasons: race, religion, nationality, particular social group, political opinion. 5: no protection at home: unable or, because of the fear, unwilling to use it.", cap:"The 1951 refugee definition as five tests. All five must be met, and the person must not fall under an exclusion clause."},
      {list:[
        "**Outside the country.** People displaced inside their own country are [[internally-displaced-person|internally displaced persons]], not refugees in law, however great their need ({{refugees-and-displacement}}).",
        "**Well-founded fear.** The fear must be genuine and supported by the facts, including what is known about the country. The person doesn’t have to prove persecution is certain, only that there is a real risk.",
        "**Persecution.** The Convention doesn’t define it. It is generally read as serious harm, such as threats to life or freedom or other severe human rights violations. It can come from the state or from others, such as armed groups, when the state can’t or won’t protect.",
        "**For one of five reasons**, sometimes called the Convention grounds. “Particular social group” has been read in many countries to include, for example, groups defined by sexual orientation or by gender in some situations.",
        "**No protection at home.** The person can’t get protection from their own state, or is unwilling to because of the fear."
      ]},
      {key:"A refugee is outside their country, with a well-founded fear of being persecuted for one of five reasons, and without protection at home. Recognition doesn’t make someone a refugee; it confirms that they already are one."}
    ]},
    {h:"Non-refoulement: the cornerstone", body:[
      "Article 33(1) says: “No Contracting State shall expel or return (‘refouler’) a refugee in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened” for one of the five reasons. This is [[non-refoulement]], from the French *refouler*, to push back.",
      "Three features make it powerful. It protects people **while their claim is being decided**, because a refugee is a refugee before being recognised. It covers return “in any manner whatsoever”, including rejection at the border and handing someone to a third country that would send them on (chain refoulement). And it applies wherever a state exercises control, including at sea: in *Hirsi Jamaa v. Italy* (2012), the European Court of Human Rights found that Italy had breached human rights law by returning people intercepted at sea to Libya.",
      "Article 33(2) allows an exception for a refugee who is a danger to the security of the country, or who has been convicted of a particularly serious crime and is a danger to the community. Human rights law, however, adds protections with **no exceptions**: the UN Convention against Torture (Article 3) bans returning anyone to a real risk of torture, and courts read similar protection into other treaties. UNHCR and many legal scholars consider non-refoulement part of [[customary-international-law|customary international law]], binding even on states that haven’t joined the Convention.",
      "A related rule, Article 31, says refugees shouldn’t be punished for entering without permission if they come directly from danger and present themselves to the authorities without delay. Many refugees have no way to get a visa before fleeing."
    ]},
    {h:"Rights, cessation and exclusion", body:[
      "The Convention also lists rights. Recognised refugees should be treated without discrimination, have access to courts, primary education and public relief, be allowed to work under set conditions, move freely in the country and receive identity papers and a travel document (Articles 3–34). States are asked to make naturalisation easier for them (Article 34).",
      "Refugee status can end. **Cessation** clauses (Article 1C) apply when protection is no longer needed: for example, when a person voluntarily goes back to live in their country, takes a new nationality, or when the circumstances that caused the fear have fundamentally and lastingly changed.",
      "Some people are **excluded** even if they meet the definition (Article 1F): those for whom there are serious reasons to believe they committed a crime against peace, a [[war-crimes|war crime]] or a [[crimes-against-humanity|crime against humanity]], a serious non-political crime outside the country of refuge before being admitted, or acts contrary to the purposes of the United Nations. The aim is to stop the regime protecting perpetrators. Other clauses deal with people already receiving help from another UN agency (Article 1D) or with the rights of nationals in another country (Article 1E).",
      {warn:"Exclusion and cessation are applied case by case, with legal safeguards. They are not a list of nationalities, and a person who is excluded from refugee status may still be protected from return to torture under human rights law."}
    ]},
    {h:"Wider definitions in Africa and Latin America", body:[
      "Regions have added their own rules, often with broader definitions.",
      "The **OAU Convention Governing the Specific Aspects of Refugee Problems in Africa** was adopted on 10 September 1969 in Addis Ababa and entered into force in 1974 ([[oau-refugee-convention|OAU Refugee Convention]]). It keeps the 1951 definition and adds, in Article I(2), people who flee because of “external aggression, occupation, foreign domination or events seriously disturbing public order”. It bans rejection at the frontier (Article II(3)) and says repatriation must be voluntary (Article V). Many African states recognise refugees on a group basis during large movements.",
      "The **Cartagena Declaration on Refugees** (22 November 1984) came from a meeting of government representatives and experts on Central America ([[cartagena-declaration|Cartagena Declaration]]). It recommends also treating as refugees people who flee because their lives, safety or freedom are threatened by “generalized violence, foreign aggression, internal conflicts, massive violation of human rights or other circumstances which have seriously disturbed public order.” It is a declaration, not a treaty, but many Latin American countries have written its definition into their national laws.",
      "Asia and the Middle East have no regional refugee treaty in force. Cooperation there runs through other channels, such as the Bali Process on people smuggling and trafficking (founded 2002) and national arrangements with UNHCR."
    ]},
    {h:"Europe: from the Common European Asylum System to the 2024 Pact", body:[
      "EU countries apply the 1951 Convention through a shared body of law, the **Common European Asylum System**. It sets common standards for who qualifies for protection, how claims are examined and how applicants are received, and decides which country is responsible for a claim (long done under the “Dublin” rules, which look first at family links and visas and often, in practice, at the country of first entry).",
      "In May 2024 the EU adopted the **Pact on Migration and Asylum**, a package of regulations and directives that started to apply on 12 June 2026. In outline it adds mandatory screening of people who [[irregular-migration|arrive irregularly]], faster border procedures for some applicants, a larger fingerprint and face database (Eurodac), new rules on which state is responsible that replace the Dublin system, and a permanent “solidarity mechanism” under which other member states help countries under pressure, by relocating people, paying or providing support.",
      "**Supporters** argue the Pact makes the system faster, fairer between member states and better able to manage arrivals. **Critics**, including many refugee-rights groups, argue that fast border procedures and screening risk weaker safeguards and more detention. How it works in practice will become clearer as it is applied; check the European Commission and the EU Agency for Asylum for current information.",
      {table:[["Instrument","Year","What it adds"],["1951 Convention","1951 (in force 1954)","The core definition, non-refoulement, refugees’ rights"],["1967 Protocol","1967","Removes the 1951 date and Europe-only limits"],["OAU Convention","1969 (in force 1974)","Adds aggression, occupation and serious public disorder"],["Cartagena Declaration","1984","Adds generalised violence and massive rights violations (non-binding)"],["EU Pact","Adopted 2024, applies from June 2026","Screening, border procedures, new responsibility and solidarity rules"]]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Anyone fleeing hardship is a refugee in law.","The 1951 definition needs persecution for one of five reasons; regional definitions are wider; others may get other protection."],["You only become a refugee when a government recognises you.","Recognition is declaratory: it confirms refugee status that already exists."],["Entering without a visa means you can’t be a refugee.","Article 31 protects refugees from punishment for irregular entry in many cases."],["Non-refoulement only applies once you are inside the country.","It applies at the border and wherever a state exercises control, including at sea."],["Every country has joined the Convention.","149 states are party to the Convention, the Protocol or both (November 2026); several large host countries are not."]]},
      {terms:["refugee-convention","non-refoulement","oau-refugee-convention","cartagena-declaration"]}
    ]}
   ],
   try:[
    {id:"e2u11-l3-x1", type:"order", q:"Put these steps in the building of the refugee regime in time order, earliest first.", items:[
      {t:"The League of Nations creates the Nansen passport", why:"1922, a year after Nansen became High Commissioner for Refugees."},
      {t:"The 1951 Refugee Convention is adopted in Geneva", why:"28 July 1951, months after UNHCR began work."},
      {t:"The Protocol removes the Convention’s date and geographic limits", why:"1967."},
      {t:"The OAU adopts its regional refugee convention", why:"10 September 1969, in force 1974."},
      {t:"The Cartagena Declaration recommends a wider definition in Latin America", why:"22 November 1984."},
      {t:"The EU Pact on Migration and Asylum starts to apply", why:"12 June 2026, after adoption in May 2024."}
    ]},
    {id:"e2u11-l3-x2", type:"sort", q:"Based only on what each invented case says, does the person meet the 1951 definition, or would they need a wider definition or another kind of protection?", buckets:["Meets the 1951 definition","Wider regional definition","Neither (as described)"], items:[
      {t:"A journalist crosses into a neighbouring state after police threaten to jail her for her reporting on the government.", b:0, why:"Outside her country, with a well-founded fear of persecution for political opinion, and her own state is the persecutor. All five tests are met."},
      {t:"A family flees across a border because fighting has engulfed their town, with no sign they are targeted for any of the five reasons.", b:1, why:"Generalised violence without a Convention reason fits the OAU or Cartagena wording (“events seriously disturbing public order”, “generalized violence”), not the 1951 test as described."},
      {t:"A man flees his village to the capital of his own country because of armed attacks.", b:2, why:"He hasn’t crossed a border, so he is an internally displaced person. He needs protection, but refugee definitions require being outside the country."},
      {t:"A woman crosses a border after members of her religious minority are attacked and the police refuse to help.", b:0, why:"Persecution for religion by non-state actors, where the state won’t protect: the 1951 definition covers this."},
      {t:"A worker moves abroad for a better-paid job; nobody threatens him at home.", b:2, why:"No fear of persecution or of serious danger: he is a labour migrant, not a refugee."},
      {t:"A gay man crosses a border after being threatened with prison at home because of his sexuality.", b:0, why:"Many jurisdictions recognise sexual orientation as a “particular social group”, and prison for who he is counts as persecution."}
    ]},
    {id:"e2u11-l3-x3", type:"spot", q:"Tap each part of this paraphrase that is **not** part of the 1951 refugee definition.", ask:"not part of the definition", parts:[
      "A refugee is a person who ",
      {t:"is outside their country of nationality,", flag:false, why:"This is test 1 of the definition."},
      " ",
      {t:"has a well-founded fear of being persecuted", flag:false, why:"Tests 2 and 3: a real, well-founded fear of persecution."},
      " ",
      {t:"for reasons of race, religion, nationality, particular social group or political opinion,", flag:false, why:"Test 4: the five Convention grounds."},
      " ",
      {t:"has arrived with a valid visa,", flag:true, why:"Not in the definition. Many refugees can’t get visas, and Article 31 protects against punishment for irregular entry in many cases."},
      " ",
      {t:"and cannot or, because of that fear, will not use their own country’s protection,", flag:false, why:"Test 5: no protection at home."},
      " ",
      {t:"and has been officially recognised by a government.", flag:true, why:"Not part of the definition. Recognition is declaratory: it confirms status the person already has."}
    ]},
    {id:"e2u11-l3-x4", type:"mcq", q:"A coastguard intercepts a boat in international waters and plans to hand everyone on board to a country where some say they face persecution, without examining their claims. Which rule is most directly at stake?", options:[
      {t:"Non-refoulement, which applies wherever a state exercises control, including at sea", ok:true, why:"Right. Return “in any manner whatsoever” is banned, and the European Court of Human Rights applied this to interceptions at sea in Hirsi Jamaa v. Italy (2012)."},
      {t:"Jus soli", why:"That is a citizenship rule about birthplace."},
      {t:"Cessation of refugee status", why:"Cessation applies when protection is no longer needed, not to people who haven’t been heard yet."},
      {t:"There is no rule, because the boat is outside the state’s territory.", why:"Non-refoulement follows state control, not only territory."}
    ]},
    {id:"e2u11-l3-x5", type:"match", q:"Match each instrument to its distinctive feature.", pairs:[
      ["1951 Convention","The core refugee definition and the non-refoulement rule","The foundation of the regime."],
      ["1967 Protocol","Removed the 1951 date limit and the option to cover only Europe","It made the Convention universal in scope."],
      ["OAU Convention (1969)","Added people fleeing external aggression, occupation or serious public disorder, and banned rejection at the frontier","A binding regional treaty with a wider definition."],
      ["Cartagena Declaration (1984)","A non-binding text that many Latin American states wrote into national law","It recommends adding generalised violence and massive human rights violations."],
      ["EU Pact on Migration and Asylum","Screening and border procedures, applying from June 2026","The EU’s 2024 reform of its asylum system."]
    ]},
    {id:"e2u11-l3-x6", type:"mcq", q:"Which person would most clearly be **excluded** from refugee status under Article 1F, even if they fear persecution?", options:[
      {t:"Someone for whom there are serious reasons to believe they committed war crimes", ok:true, why:"Right. Article 1F excludes people for whom there are serious reasons to believe they committed crimes against peace, war crimes or crimes against humanity, among others."},
      {t:"Someone who crossed the border without a visa", why:"Irregular entry is not a ground for exclusion; Article 31 protects many refugees from punishment for it."},
      {t:"Someone who belongs to a religious minority", why:"Religion is one of the five reasons for protection, not a reason to exclude."},
      {t:"Someone who has no passport", why:"Lacking documents is common for refugees and is no reason for exclusion."}
    ]},
    {id:"e2u11-l3-x7", type:"mcq", q:"A country is not party to the 1951 Convention. Can it lawfully send a person back to a place where they face a real risk of torture?", options:[
      {t:"No: the Convention against Torture bans such returns without exception for its parties, and many experts treat non-refoulement as customary international law binding all states.", ok:true, why:"Right. Protection from return to torture comes from human rights law as well as refugee law, and customary law binds states that haven’t signed a treaty."},
      {t:"Yes, because the 1951 Convention doesn’t apply to it.", why:"Refugee law is not the only source. Human rights treaties and customary law also forbid such returns."},
      {t:"Yes, if the person entered without a visa.", why:"The ban on returning people to torture has no exceptions for irregular entry."},
      {t:"Only if the UN Security Council approves.", why:"No Security Council approval is involved; the rule binds states directly."}
    ]}
   ],
   apply:{
    intro:"Read the primary texts. All are free online from UN, UNHCR or African Union sources.",
    tasks:[
     {t:"Read Article 1 and Article 33 of the 1951 Convention", how:[
       "Find the Convention text in UNHCR’s booklet “Convention and Protocol relating to the Status of Refugees” or the UN Digital Library.",
       "Read Article 1A(2) and underline the five tests. Then read Article 33.",
       "Write each test in your own words and note the exceptions in Article 33(2)."
     ], write:"Test 1… Test 2… Test 3… Test 4… Test 5… Article 33 in my words… Exceptions…"},
     {t:"Compare a regional definition", how:[
       "Find the OAU Refugee Convention (1969) Article I, or the Cartagena Declaration (1984) Conclusion III(3).",
       "Copy the extra grounds it adds to the 1951 definition.",
       "Write one invented case that the regional definition covers but the 1951 definition might not."
     ], write:"Instrument… Extra grounds… My case… Why the 1951 definition might not cover it…"},
     {t:"Check the status list", how:[
       "Search the UN Treaty Collection for “Convention relating to the Status of Refugees” and open its status page.",
       "Find whether a country you know is a party, and the date it joined.",
       "Note the date the page says it was last updated."
     ], write:"Country… Party or not… Date joined… Page updated…"}
    ],
    proof:"The five tests and Article 33 in your own words, one regional definition compared with an invented case, and one country’s status with dates."
   },
   read:[
    {book:"imis", where:"Chapter 9 “Humanitarian Migration”", note:"Read it after this lesson: it covers refugee and humanitarian migration from a research perspective, including debates about categories."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e2u11-l4", title:"From asylum claim to durable solution", minutes:55,
   hook:{q:"Who decides most asylum claims in the world?", options:["UNHCR, the UN Refugee Agency","National governments, through their own asylum authorities and courts","The UN Security Council","The International Court of Justice"], answer:1, reveal:"**National governments.** States are responsible for deciding who is a refugee on their territory, through asylum offices, tribunals and courts. UNHCR decides claims itself only in some countries without a working national system, and it advises and monitors elsewhere. This lesson follows a claim from arrival to decision, explains the protection people can get if they aren’t refugees, the three long-term solutions, the 2018 Global Compact on Refugees, and the debates about externalisation and detention."},
   goals:[
     "Follow the steps of refugee status determination and explain why evidence is hard in asylum cases",
     "Explain complementary and temporary protection and how they differ from refugee status",
     "Describe the three durable solutions and complementary pathways, and what makes a situation protracted",
     "Describe the Global Compact on Refugees (2018), its objectives and how it was adopted",
     "Describe externalisation and immigration detention neutrally, with the main arguments on each side"
   ],
   learn:[
    {h:"Asking for protection", body:[
      {lead:"Think of a hospital emergency room. You don’t need an appointment, but you do have to be assessed. Someone listens to your story, checks what they can, and decides what care you need. Asylum works in a similar way."},
      "An [[asylum-seeker]] is a person who has asked for international protection and is waiting for a decision ({{who-is-a-migrant}}). Deciding whether they are a refugee is called [[refugee-status-determination|refugee status determination]] (RSD).",
      "Most RSD is done by **states**: an asylum office makes the first decision, and tribunals or courts hear appeals. In some countries that lack a national system, **UNHCR** does it under its mandate. In large, sudden movements, especially in Africa, states often recognise whole groups on a **prima facie** basis (on first appearance), because the reasons for flight are obvious and individual interviews for everyone would be impossible.",
      {fig:'<svg viewBox="0 0 340 452"><defs><marker id="e2u11-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="60" y="8" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Asks for protection</text><path class="d-ink" d="M170 56 L170 76" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><rect class="d-lup" x="60" y="80" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="104" text-anchor="middle">Registration</text><text class="s" x="170" y="124" text-anchor="middle">identity, which state is responsible</text><path class="d-ink" d="M170 138 L170 158" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><rect class="d-gold" x="60" y="162" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="186" text-anchor="middle">Interview and evidence</text><text class="s" x="170" y="206" text-anchor="middle">testimony, country information</text><path class="d-ink" d="M170 220 L170 240" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><rect class="d-gold" x="60" y="244" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="272" text-anchor="middle">First decision</text><path class="d-ink" d="M110 292 L56 324" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><path class="d-ink" d="M170 292 L170 324" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><path class="d-ink" d="M230 292 L284 324" stroke-width="2" marker-end="url(#e2u11-l4-a)"/><rect class="d-sage" x="6" y="328" width="104" height="66" rx="8" stroke-width="2"/><text x="58" y="356" text-anchor="middle">Refugee</text><text x="58" y="374" text-anchor="middle">status</text><rect class="d-sage" x="118" y="328" width="104" height="66" rx="8" stroke-width="2"/><text x="170" y="356" text-anchor="middle">Other</text><text x="170" y="374" text-anchor="middle">protection</text><rect class="d-rose" x="230" y="328" width="104" height="66" rx="8" stroke-width="2"/><text x="282" y="356" text-anchor="middle">Refused</text><text class="s" x="282" y="376" text-anchor="middle">may appeal</text><text class="s" x="170" y="422" text-anchor="middle">After a final refusal: return, which must</text><text class="s" x="170" y="440" text-anchor="middle">still respect non-refoulement</text></svg>', alt:"A flow chart. Asks for protection, then registration (identity, which state is responsible), then interview and evidence (testimony, country information), then a first decision. Three arrows lead to refugee status, other protection, or refused (may appeal). A note says that after a final refusal, return must still respect non-refoulement.", cap:"The main steps of an individual asylum claim. Details, time limits and names vary by country."}
    ]},
    {h:"Why asylum decisions are hard", body:[
      "Asylum claims are unusual legal cases. The key events usually happened in another country, often with no witnesses or documents. Decision-makers rely on two main kinds of evidence: the applicant’s own **testimony**, and **country of origin information** (reports on human rights and conditions in the country).",
      "Because of this, **credibility** is central: is the account detailed, consistent and plausible? But trauma can affect memory; interpreters can make mistakes; and people may hesitate to talk about sexual violence or sexuality to a stranger. UNHCR’s guidance asks decision-makers to give applicants the **benefit of the doubt** where their account is generally credible, and to use trained interviewers and interpreters, with interviewers of the same gender where requested.",
      "Decisions can take months or years, and during that time applicants may face limits on work or movement. Recognition rates also vary between countries for people from the same place, which researchers study as a question of fairness and consistency.",
      {tip:"When you read a recognition rate (“X per cent of claims were accepted”), check what it counts: first decisions or appeals, people or applications, and which year. The same system can produce very different numbers depending on the method."}
    ]},
    {h:"Protection beyond refugee status", body:[
      "Some people need protection but don’t meet the 1951 definition: for example, people fleeing indiscriminate violence with no Convention reason. Many legal systems offer [[complementary-protection|complementary protection]] for them, based on human rights obligations not to return people to serious harm.",
      {list:[
        "**EU subsidiary protection**: for people facing a real risk of the death penalty or execution, torture or inhuman or degrading treatment, or a serious individual threat from indiscriminate violence in armed conflict.",
        "**National forms elsewhere**: Canada protects a “person in need of protection”, and Australia added complementary protection to its law in 2012, among others.",
        "**Protection under the Convention against Torture**, which applies even to people excluded from refugee status."
      ]},
      "[[temporary-protection|Temporary protection]] is a different tool for mass arrivals: quick, group-based protection for a limited time, without examining each claim first. The EU activated its Temporary Protection Directive for the first time in March 2022 for people fleeing the war in Ukraine, and has extended it since. Temporary protection gives rights quickly but can leave people unsure of their future."
    ]},
    {h:"Durable solutions", body:[
      "Protection is meant to be a bridge, not a permanent waiting room. UNHCR and states speak of three [[durable-solutions|durable solutions]]: ways for refugees to rebuild a normal life with full rights.",
      {fig:'<svg viewBox="0 0 340 388"><defs><marker id="e2u11-l4-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-gold" x="70" y="8" width="200" height="56" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">A refugee in a first</text><text x="170" y="50" text-anchor="middle">country of asylum</text><path class="d-ink" d="M110 66 L56 106" stroke-width="2" marker-end="url(#e2u11-l4-b)"/><path class="d-ink" d="M170 66 L170 106" stroke-width="2" marker-end="url(#e2u11-l4-b)"/><path class="d-ink" d="M230 66 L284 106" stroke-width="2" marker-end="url(#e2u11-l4-b)"/><rect class="d-lup" x="6" y="110" width="104" height="120" rx="8" stroke-width="2"/><text x="58" y="136" text-anchor="middle">Voluntary</text><text x="58" y="154" text-anchor="middle">return</text><text class="s" x="58" y="180" text-anchor="middle">home, in</text><text class="s" x="58" y="196" text-anchor="middle">safety and</text><text class="s" x="58" y="212" text-anchor="middle">dignity</text><rect class="d-sage" x="118" y="110" width="104" height="120" rx="8" stroke-width="2"/><text x="170" y="136" text-anchor="middle">Local</text><text x="170" y="154" text-anchor="middle">integration</text><text class="s" x="170" y="180" text-anchor="middle">rights and</text><text class="s" x="170" y="196" text-anchor="middle">residence in</text><text class="s" x="170" y="212" text-anchor="middle">the host country</text><rect class="d-rose" x="230" y="110" width="104" height="120" rx="8" stroke-width="2"/><text x="282" y="136" text-anchor="middle">Resettle-</text><text x="282" y="154" text-anchor="middle">ment</text><text class="s" x="282" y="180" text-anchor="middle">a selected</text><text class="s" x="282" y="196" text-anchor="middle">move to a</text><text class="s" x="282" y="212" text-anchor="middle">third country</text><rect class="d-soft" x="6" y="250" width="328" height="74" rx="8" stroke-width="1.5" stroke-dasharray="5 4"/><text x="170" y="276" text-anchor="middle">Complementary pathways</text><text class="s" x="170" y="296" text-anchor="middle">family reunion · work · study ·</text><text class="s" x="170" y="312" text-anchor="middle">community sponsorship</text><text class="s" x="170" y="350" text-anchor="middle">Each leads, in the end, to a secure status</text><text class="s" x="170" y="368" text-anchor="middle">and often to citizenship</text></svg>', alt:"A box labelled a refugee in a first country of asylum, with three arrows down to three boxes: voluntary return home, in safety and dignity; local integration, rights and residence in the host country; resettlement, a selected move to a third country. Below, a dashed box: complementary pathways such as family reunion, work, study and community sponsorship. A note says each leads, in the end, to a secure status and often to citizenship.", cap:"The three durable solutions, with complementary pathways as extra routes to a third country."},
      "**Voluntary repatriation** is return home once it is safe, by free choice, often with agreements between the country of origin, the host country and UNHCR. **Local integration** means gaining secure legal status, work and a place in the host society, sometimes ending in citizenship: Tanzania, for example, naturalised a large group of Burundian refugees who had lived there since 1972. **[[resettlement|Resettlement]]** is the selected, planned transfer of refugees from the first country of asylum to a third country that agrees to admit them permanently; UNHCR usually identifies people most at risk, and the receiving state decides.",
      "Resettlement places have long been far fewer than the people UNHCR identifies as needing them. **Complementary pathways** try to add more routes: family reunion visas, work and study schemes open to refugees, and **community sponsorship**, in which groups of residents support a refugee family’s arrival, a model Canada has used since the late 1970s.",
      "When none of these happens, refugees can spend decades in exile. UNHCR calls a situation **protracted** when 25,000 or more refugees from the same country have been in exile in a given low- or middle-income host country for at least five consecutive years. Many refugee situations meet that test, which is why the next idea matters."
    ]},
    {h:"The Global Compact on Refugees (2018)", body:[
      "Most refugees live in low- and middle-income countries near the place they fled, so the costs of hosting fall unevenly. In 2016 the UN General Assembly adopted the New York Declaration for Refugees and Migrants, which led to two compacts. The [[global-compact-refugees|Global Compact on Refugees]] was affirmed by the General Assembly on 17 December 2018: 181 states voted in favour, the United States and Hungary voted against, and the Dominican Republic, Eritrea and Libya abstained.",
      "It is not legally binding. It sets out four objectives: to **ease pressures on host countries**, **enhance refugee self-reliance**, **expand access to third-country solutions** and **support conditions in countries of origin** for return in safety and dignity. Its main idea is more predictable **responsibility-sharing**. States, businesses, cities and others make pledges at a **Global Refugee Forum**, held every four years (the first two met in 2019 and 2023).",
      "Its partner, the Global Compact for Migration, is covered in Lesson 5. Together they are described in the Codex entry {{global-compacts}}."
    ]},
    {h:"Externalisation and detention: what they are, and the debate", body:[
      "[[externalisation|Externalisation]] means a state or group of states acting beyond its own borders to prevent or manage arrivals: funding or training other countries’ border forces, agreements for those countries to stop departures or take people back, or processing asylum claims in another country. Examples, with their dates, include the **EU–Turkey Statement** (March 2016); Italy’s agreements with Libya (from 2017); **Australia’s offshore processing** of people arriving by boat, in Nauru and Papua New Guinea, at various times since 2001; the **UK–Rwanda** arrangement, agreed in 2022 and abandoned by a new UK government in 2024 before any enforced removals had taken place; and Italy’s 2023 protocol with Albania.",
      "[[immigration-detention|Immigration detention]] means holding people for migration reasons, such as checking identity, deciding claims or carrying out removals, rather than as punishment for a crime. UNHCR’s 2012 Detention Guidelines say seeking asylum is not unlawful and that detention of asylum seekers should be a last resort, necessary and proportionate in each case; the Global Compact for Migration (objective 13) also commits states to use it only as a last resort and to work towards **alternatives** such as reporting duties and case management.",
      {table:[["","Arguments made in favour","Arguments made against"],["Externalisation","Deters dangerous journeys and smuggling; shares work with transit countries; keeps orderly control","Shifts responsibility to poorer states; risks refoulement and abuse; hard to monitor"],["Detention","Confirms identity; prevents absconding before removal; protects public safety in some cases","Harms mental health, especially children’s; costly; alternatives often work"]]},
      "Courts have set limits in some cases (Hirsi Jamaa, Lesson 3; the UK Supreme Court found the Rwanda plan unlawful in 2023 on the evidence then available). Researchers disagree about how far such policies deter arrivals and what they cost. Your job here is to describe positions and evidence accurately, not to decide."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["UNHCR decides all asylum claims.","States decide most; UNHCR does so in some countries and advises elsewhere."],["If you aren’t a refugee, you have no protection.","Complementary protection and human rights law protect many others from return to serious harm."],["Resettlement is the main solution.","It reaches only a small share of refugees; return and local integration matter too."],["The Global Compacts are binding treaties.","They are political commitments, not legally binding."],["Detention for migration reasons is a criminal sentence.","It is administrative; international guidance says it should be a last resort."]]},
      {terms:["refugee-status-determination","complementary-protection","temporary-protection","durable-solutions","resettlement","global-compact-refugees","externalisation","immigration-detention"]}
    ]}
   ],
   try:[
    {id:"e2u11-l4-x1", type:"order", q:"Put the main steps of an individual asylum claim in order.", items:[
      {t:"The person asks for international protection", why:"A claim begins when someone asks for asylum, at the border or inside the country."},
      {t:"The claim is registered and the responsible state is identified", why:"Identity and responsibility (for example under EU rules) come before the merits."},
      {t:"An interview takes place and evidence is gathered", why:"Testimony and country of origin information are the core evidence."},
      {t:"The authority makes a first decision", why:"Refugee status, another form of protection, or refusal."},
      {t:"An appeal or review can follow a refusal", why:"Most systems allow an appeal before a decision is final."}
    ]},
    {id:"e2u11-l4-x2", type:"mcq", q:"Ravi’s asylum interview contains small inconsistencies about dates, but his account is detailed and matches reports on his country. What does UNHCR guidance suggest?", options:[
      {t:"Weigh the whole account and give him the benefit of the doubt if it is generally credible, bearing in mind that trauma can affect memory.", ok:true, why:"Right. UNHCR asks decision-makers to assess credibility overall and give the benefit of the doubt to generally credible accounts."},
      {t:"Reject the claim automatically because of any inconsistency.", why:"Minor inconsistencies are common, especially after trauma; guidance warns against automatic rejection."},
      {t:"Accept the claim without considering any evidence.", why:"Evidence still matters: the benefit of the doubt applies to accounts that are generally credible."},
      {t:"Ask the police of the country he fled to confirm his story.", why:"Contacting the alleged persecutor could put him and his family in danger, and breaches confidentiality."}
    ]},
    {id:"e2u11-l4-x3", type:"sort", q:"Which kind of protection fits each invented case best?", buckets:["Refugee status","Complementary protection","Temporary protection"], items:[
      {t:"An opposition activist faces prison and torture for her political views.", b:0, why:"Persecution for political opinion: the 1951 definition applies."},
      {t:"A man would face a real risk of indiscriminate violence from armed conflict at home, with no sign he is targeted for a Convention reason.", b:1, why:"This matches EU subsidiary protection: a serious threat from indiscriminate violence in armed conflict."},
      {t:"Hundreds of thousands arrive within weeks from a war, and a region grants all of them a fixed-term status without individual interviews.", b:2, why:"Fast, group-based, time-limited protection for mass arrivals: temporary protection."},
      {t:"A woman would face a real risk of inhuman and degrading treatment if returned, but nothing suggests it is linked to any of the five Convention reasons.", b:1, why:"Serious harm without a Convention reason: this fits complementary protection, such as EU subsidiary protection, which covers torture or inhuman or degrading treatment."},
      {t:"A journalist is threatened with death by the state for reporting on corruption.", b:0, why:"Persecution linked to political opinion (actual or imputed): refugee status."}
    ]},
    {id:"e2u11-l4-x4", type:"match", q:"Match each solution or pathway to its description.", pairs:[
      ["Voluntary repatriation","Going home by free choice once it is safe, often under agreements involving UNHCR","Voluntariness is essential (the OAU Convention says so in Article V)."],
      ["Local integration","Gaining secure status, work and a place in the host country, sometimes citizenship","For example, Tanzania naturalised many long-staying Burundian refugees."],
      ["Resettlement","A selected, planned move from the first country of asylum to a third country","UNHCR identifies people; the receiving state decides."],
      ["Community sponsorship","Groups of residents support a refugee family’s arrival and settling in","A complementary pathway Canada has used since the late 1970s."]
    ]},
    {id:"e2u11-l4-x5", type:"mcq", q:"Which statement about the Global Compact on Refugees is accurate?", options:[
      {t:"It was affirmed by the UN General Assembly in December 2018 and is not legally binding; its aim is more predictable responsibility-sharing.", ok:true, why:"Right. 181 states voted in favour; the United States and Hungary voted against; three abstained."},
      {t:"It is a binding treaty that replaced the 1951 Convention.", why:"It is a political commitment that builds on the 1951 Convention; it doesn’t replace it."},
      {t:"Every UN member voted for it.", why:"The United States and Hungary voted against, and three states abstained."},
      {t:"It only covers migrant workers.", why:"That is closer to the Global Compact for Migration. This one is about refugees."}
    ]},
    {id:"e2u11-l4-x6", type:"spot", q:"Fatima wrote this paragraph for a debate club. Tap each sentence that **takes a side or states a contested claim as fact**, rather than describing.", ask:"takes a side or overstates", parts:[
      {t:"Externalisation means acting beyond a state’s borders to prevent or manage arrivals.", flag:false, why:"A neutral definition."},
      " ",
      {t:"Examples include the EU–Turkey Statement of 2016 and Australia’s offshore processing.", flag:false, why:"Accurate, dated examples."},
      " ",
      {t:"It obviously stops all dangerous journeys.", flag:true, why:"Overstated and one-sided. Researchers disagree about how much such policies deter journeys."},
      " ",
      {t:"Critics argue it shifts responsibility to poorer countries.", flag:false, why:"Neutral reporting of a position, attributed to “critics”."},
      " ",
      {t:"Anyone who supports it simply doesn’t care about refugees.", flag:true, why:"Takes a side and attacks motives. Supporters give reasons (deterring smuggling, orderly control) that a fair account should state."},
      " ",
      {t:"UNHCR says detention of asylum seekers should be a last resort.", flag:false, why:"Accurate and attributed (UNHCR Detention Guidelines, 2012)."}
    ]},
    {id:"e2u11-l4-x7", type:"mcq", q:"A refugee group has lived in one middle-income host country for nine years, and there are about 60,000 of them. What would UNHCR call this?", options:[
      {t:"A protracted refugee situation", ok:true, why:"Right. UNHCR’s test is 25,000 or more refugees of the same nationality in exile for at least five consecutive years in a given low- or middle-income host country."},
      {t:"A resettlement programme", why:"Resettlement is one possible solution, not a description of the situation."},
      {t:"Temporary protection", why:"That is a legal status for mass arrivals, not the name for long exile."},
      {t:"Cessation", why:"Cessation is when refugee status ends because protection is no longer needed."}
    ]}
   ],
   apply:{
    intro:"Look at how protection works using public sources. Don’t ask anyone about their own claim or status.",
    tasks:[
     {t:"Find one country’s asylum process", how:[
       "Choose a country and find its official asylum or immigration authority’s page on applying for asylum (or UNHCR’s country help page).",
       "List the steps it describes, from applying to a decision and appeal.",
       "Compare them with the flow chart in this lesson and note one difference."
     ], write:"Country… Steps listed… One difference from the flow chart…"},
     {t:"Read about one durable solution in practice", how:[
       "Find a UNHCR news story or report about voluntary return, local integration or resettlement in any region.",
       "Note where it happened, when, how many people (if a figure is given, with its source and year) and what made it possible.",
       "Note one difficulty the story mentions."
     ], write:"Solution… Where and when… Figure, source and year… What made it possible… Difficulty…"},
     {t:"Map the arguments on one externalisation or detention policy", how:[
       "Pick one policy named in this lesson.",
       "Find one source supporting it (for example a government statement) and one criticising it (for example an NGO or UNHCR statement).",
       "Write each side’s main argument and the evidence it gives, without choosing a winner."
     ], write:"Policy… Supporting source and argument… Critical source and argument… Evidence each gives…"}
    ],
    proof:"One country’s asylum steps compared with the flow chart, notes on one durable solution with its source and date, and a two-sided summary of one policy."
   },
   read:[
    {book:"imis", where:"Chapter 9 “Humanitarian Migration”", note:"Read the parts on protection and solutions after this lesson."},
    {book:"imis", where:"Chapter 20 “Migration Governance”", note:"Optional: how states cooperate, and compete, over who manages refugee movements."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e2u11-l5", title:"Work, free movement and money sent home", minutes:55,
   hook:{q:"The World Bank estimated how much migrants sent home to low- and middle-income countries in 2024. How did that compare with foreign direct investment and official development aid to those countries?", options:["It was a tiny fraction of aid","It was about the same as aid alone","It was larger than foreign direct investment and official aid combined","Nobody measures it"], answer:2, reveal:"**Larger than both combined.** The World Bank estimated about $685 billion in recorded remittances to low- and middle-income countries in 2024, more than foreign direct investment and official development aid put together, and the true total is higher because some money travels through informal channels. Those transfers are made by millions of individual workers. This lesson looks at the rules that govern migrant work, the regions where people may move freely, and what it really costs to send money home."},
   goals:[
     "Describe the Global Compact for Migration (2018): what it is, how it was adopted and what it is not",
     "Name the main ILO conventions and the 1990 UN Migrant Workers Convention, and explain why its ratification pattern matters",
     "Explain how employer sponsorship systems such as kafala work, and describe dated reforms",
     "Compare regional free-movement regimes in Europe, West Africa, South America and the African Union",
     "Explain remittances, work out the cost of a transfer and compare it with the SDG 3 per cent target"
   ],
   learn:[
    {h:"The Global Compact for Migration", body:[
      {lead:"Think of a group of neighbours who agree a shared code for a street party: no one is forced to sign, there is no police to enforce it, but everyone knows what was promised and can be reminded of it. That is roughly what a global compact is."},
      "The [[global-compact-migration|Global Compact for Safe, Orderly and Regular Migration]] (GCM) is the first agreement negotiated by UN member states that covers international migration in all its forms. It was adopted at a conference in Marrakech, Morocco, on 10 December 2018, and endorsed by the UN [[general-assembly|General Assembly]] on 19 December 2018 by a recorded vote of 152 in favour, 5 against (the Czech Republic, Hungary, Israel, Poland and the United States) and 12 abstentions.",
      "It sets out **23 objectives**, from collecting better data and reducing the risks that make people leave, to fair recruitment, saving lives, fighting [[migrant-smuggling|smuggling]] and [[human-trafficking|trafficking]], cheaper remittances and safe return. It says plainly that it is **not legally binding** and reaffirms each state’s sovereign right to set its own migration policy.",
      "Follow-up happens through the **International Migration Review Forum**, held every four years at the UN in New York (the first in 2022, the second in May 2026), and a UN Network on Migration coordinated by the International Organization for Migration (IOM).",
      "**Supporters** say the GCM gives a common language and a framework for cooperation on an issue no state can manage alone. **Critics** in some countries argued it could limit national control or create pressure to admit more migrants; its text says it does not. Others argue the opposite: that a non-binding text is too weak to protect migrants."
    ]},
    {h:"Migrant workers and their rights", body:[
      "Most migrants move for work. The International Labour Organization (ILO) estimated that **167.7 million** international migrants were part of the labour force in 2022, about 4.7 per cent of all workers worldwide, and that about two-thirds of them worked in high-income countries (ILO, December 2024). Migrant workers are especially common in care work, construction, agriculture, domestic work and hospitality.",
      "Two families of treaties protect them.",
      {table:[["Instrument","Year","What it does"],["ILO Convention 97, Migration for Employment (Revised)","1949","Equal treatment with nationals on pay, conditions and social security for lawfully resident migrant workers"],["ILO Convention 143, Migrant Workers (Supplementary Provisions)","1975","Action against abusive migration conditions; equal opportunity"],["ILO Convention 189, Domestic Workers","2011","Labour rights for domestic workers, many of them migrants"],["UN Migrant Workers Convention","Adopted 1990, in force 2003","Human rights of all migrant workers and families, including those in an irregular situation"]]},
      "The UN’s [[migrant-workers-convention|International Convention on the Protection of the Rights of All Migrant Workers and Members of Their Families]] was adopted by the General Assembly on 18 December 1990 (now marked as International Migrants Day) and entered into force on 1 July 2003. Part III lists rights for **all** migrant workers, whatever their status, such as protection from forced labour and the right not to have identity documents confiscated except by authorised officials; Part IV adds rights for those with regular status.",
      "Its [[ratification]] pattern is striking. As of November 2026 the UN Treaty Collection lists **60** states parties, the most recent being Zimbabwe (November 2024). Almost all are mainly countries of origin, such as Mexico, the Philippines, Sri Lanka, Morocco, Ghana and Indonesia. None of the main destination countries in Western Europe, the United States, Canada or the Gulf has ratified it. Scholars explain this in different ways: concern about costs and control, the view that existing human rights treaties already cover migrants, or political reluctance to grant rights to people in an irregular situation.",
      "The ILO also promotes **fair recruitment**, including the principle that workers should not pay recruitment fees (the “employer pays” principle), because debts to recruiters are a common route into exploitation."
    ]},
    {h:"Tied to one employer: sponsorship systems and kafala", body:[
      "In many countries, temporary work visas tie a worker to one employer for a time: the worker can’t easily change jobs, and losing the job can mean losing the right to stay. Researchers study these **employer-tied visas** in many regions, from seasonal farm work schemes to skilled-worker visas.",
      "The best-known example is [[kafala]], from the Arabic for sponsorship, used in Gulf Cooperation Council states and in Jordan and Lebanon. Under kafala, a worker’s legal residence depends on a sponsor (the *kafeel*), usually the employer. In its classic form the worker needed the employer’s permission to change jobs or even to leave the country, and an employer could report a worker who left as having “absconded”. Domestic workers were often outside labour law altogether.",
      "Human rights groups and the ILO have linked the system to risks such as unpaid wages, passport confiscation and forced labour, while governments and employers have pointed to its role in organising a very large temporary workforce. Several states have reformed it:",
      {list:[
        "**Qatar** removed exit permits for most workers in stages and, on 30 August 2020, adopted laws letting workers change jobs without a “no objection certificate” from their employer, and setting a minimum wage of 1,000 riyals a month plus food and housing allowances, which took effect in 2021. The ILO said this effectively dismantled kafala. Rights groups have continued to report problems with enforcement.",
        "**Saudi Arabia** introduced a Labour Reform Initiative in March 2021 that let many private-sector workers change jobs and travel without their employer’s permission; domestic workers were not covered at first. Further steps, described in the media as ending kafala, were announced in October 2025; rights groups welcomed them and said implementation would be the test."
      ]},
      {warn:"Reforms in this area change quickly and are reported unevenly. Before repeating a claim that a country has “abolished kafala”, check the date, the official source and which workers (including domestic workers) are covered."}
    ]},
    {h:"Where people may move freely", body:[
      "[[free-movement|Free movement]] regimes let citizens of member states enter, live and often work in each other’s territory with few conditions. They are usually part of wider [[regionalism|regional integration]] ({{regional-organizations}}).",
      {table:[["Regime","Since","What it allows"],["European Union (with Iceland, Liechtenstein, Norway and Switzerland)","Built up from 1957; key directive 2004","EU citizens may live, work and study in other member states; stays over three months need work, study or enough means"],["ECOWAS (West Africa)","Protocol of 1979","Visa-free entry for up to 90 days; residence and establishment rights only partly in place"],["Mercosur Residence Agreement (South America)","Signed 2002, in force 2009","Two-year residence and work permit, which can become permanent, mainly on proof of nationality and a clean record"],["African Union Free Movement Protocol","Adopted January 2018","Visa-free entry, residence and establishment across Africa, but not in force: 15 ratifications needed, 4 by mid-2026"]]},
      "Free movement is different from border-free travel. The **[[schengen-area|Schengen area]]** removes routine passport checks between most EU countries and Iceland, Liechtenstein, Norway and Switzerland. Ireland is in the EU but outside Schengen; Norway is in Schengen but outside the EU. Schengen members may temporarily reintroduce checks at internal borders, and several have done so in recent years. The United Kingdom’s free-movement rights with the EU ended on 31 December 2020, after Brexit.",
      "Other arrangements exist too: Gulf Cooperation Council citizens can live and work in each other’s states; Australia and New Zealand have the Trans-Tasman Travel Arrangement (1973); the East African Community has a common market protocol. In West Africa, Burkina Faso, Mali and Niger formally left ECOWAS in January 2025, raising questions about how free movement with the remaining members will work; check current arrangements.",
      {tip:"When a regime is described as “free movement”, ask four questions: who is covered (all citizens or only some workers), which rights (entry, residence, work, settlement), whether it is in force, and whether it is actually implemented at the border."}
    ]},
    {h:"Remittances: money sent home", body:[
      "[[remittances|Remittances]] are money (and sometimes goods) that migrants send to family or communities, usually in another country. They are private transfers, earned by individual workers, often in small amounts sent every month.",
      "The [[world-bank|World Bank]] estimated about **$685 billion** in recorded remittances to low- and middle-income countries in **2024**, up 5.8 per cent on 2023, and larger than foreign direct investment and [[official-development-assistance|official development aid]] combined (World Bank / KNOMAD, December 2024). The largest recipients by amount were India (about $129 billion), Mexico ($68 billion), China ($48 billion), the Philippines ($40 billion) and Pakistan ($33 billion). As a share of the economy, they mattered most in places such as Tajikistan (about 45 per cent of GDP), Tonga (38 per cent), Nicaragua, Lebanon and Samoa.",
      "Researchers find that remittances help families pay for food, schooling, health care and housing, and often hold up or rise when a home country is hit by a disaster. Debates continue about their wider effects: some argue they can reduce pressure for reform or make economies dependent on emigration; others stress that they are families’ own money, spent as families choose. The research is context-specific ({{migration-and-development-hump}}).",
      {warn:"Remittance totals count recorded transfers. Money carried by hand or sent through informal networks isn’t fully counted, so the true total is higher, and figures for the latest year are estimates that are later revised."}
    ]},
    {h:"What sending money costs", body:[
      "Sending money abroad has two costs: a **fee**, and an **exchange-rate margin**, the gap between the market exchange rate and the less favourable rate the provider gives. Both are usually measured as a percentage of a standard $200 transfer.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="e2u11-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="70" y="8" width="200" height="50" rx="8" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Sender pays $200</text><path class="d-ink" d="M170 60 L170 80" stroke-width="2" marker-end="url(#e2u11-l5-a)"/><rect class="d-rose" x="8" y="84" width="156" height="66" rx="8" stroke-width="2"/><text x="86" y="110" text-anchor="middle">Fee</text><text class="s" x="86" y="132" text-anchor="middle">$8 (4%)</text><rect class="d-rose" x="176" y="84" width="156" height="66" rx="8" stroke-width="2"/><text x="254" y="110" text-anchor="middle">Exchange margin</text><text class="s" x="254" y="132" text-anchor="middle">$4 (2%)</text><path class="d-ink" d="M170 152 L170 172" stroke-width="2" marker-end="url(#e2u11-l5-a)"/><rect class="d-sage" x="40" y="176" width="260" height="58" rx="8" stroke-width="2"/><text x="170" y="202" text-anchor="middle">Family receives the value</text><text x="170" y="222" text-anchor="middle">of $188</text><rect class="d-panel" x="8" y="252" width="324" height="98" rx="8" stroke-width="1.5"/><text x="170" y="276" text-anchor="middle">Total cost: $12 = 6% of $200</text><text class="s" x="170" y="300" text-anchor="middle">Global average in 2025: about 6.4%</text><text class="s" x="170" y="320" text-anchor="middle">SDG target by 2030: under 3%,</text><text class="s" x="170" y="338" text-anchor="middle">and no corridor above 5%</text></svg>', alt:"A flow from top to bottom. The sender pays $200. Two cost boxes: a fee of $8 (4 per cent) and an exchange-rate margin of $4 (2 per cent). The family receives the value of $188. A panel at the bottom: total cost $12, which is 6 per cent of $200; the global average in 2025 was about 6.4 per cent; the SDG target by 2030 is under 3 per cent, with no corridor above 5 per cent.", cap:"An invented $200 transfer. Fee plus exchange-rate margin is the true cost."},
      "The UN Sustainable Development Goals include a target ([[sustainable-development-goals|SDG]] 10.c): by 2030, reduce remittance costs to **less than 3 per cent** and eliminate corridors (routes between two countries) costing more than 5 per cent. The World Bank’s Remittance Prices Worldwide database put the global average cost at about **6.36 per cent** in its 2025 figures, so the world is still far from the target. Costs vary widely: digital services are often cheaper than cash at an agent, and some corridors cost much more than the average.",
      {ex:"Sione sends $200 a month to his parents. Provider A charges a $5 fee and gives an exchange rate 3 per cent worse than the market rate. Provider B charges $9 and gives the market rate. A costs $5 + $6 = $11 (5.5 per cent); B costs $9 (4.5 per cent). The provider with the lower fee is not the cheaper one. Over a year, the difference is $24.", label:"Worked example: the lowest fee isn’t always the cheapest"}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["The Global Compact for Migration forces countries to accept migrants.","It is non-binding and reaffirms each state’s right to set its own policy."],["Most destination countries have ratified the UN Migrant Workers Convention.","Its 60 parties (November 2026) are mostly countries of origin."],["Free movement means no passport checks.","Free movement is about rights to live and work; border-free travel (like Schengen) is a separate arrangement."],["Remittances are a small side issue.","Recorded remittances to low- and middle-income countries were about $685 billion in 2024 (World Bank)."],["The cheapest provider is the one with the lowest fee.","Add the exchange-rate margin to find the true cost."]]},
      {terms:["global-compact-migration","migrant-workers-convention","kafala","free-movement","schengen-area","remittances"]}
    ]}
   ],
   try:[
    {id:"e2u11-l5-x1", type:"mcq", q:"Which statement about the Global Compact for Migration is accurate?", options:[
      {t:"It was adopted in Marrakech in December 2018, has 23 objectives, is not legally binding and reaffirms states’ right to set their own migration policy.", ok:true, why:"Right. The General Assembly endorsed it on 19 December 2018 by 152 votes to 5, with 12 abstentions."},
      {t:"It is a binding treaty that obliges states to admit a quota of migrants.", why:"It is non-binding and sets no admission quotas."},
      {t:"It was adopted unanimously by every UN member.", why:"Five states voted against and twelve abstained."},
      {t:"It only covers refugees.", why:"Refugees have their own compact; the GCM covers migration in all its forms."}
    ]},
    {id:"e2u11-l5-x2", type:"match", q:"Match each instrument to what it is best known for.", pairs:[
      ["ILO Convention 189 (2011)","Labour rights for domestic workers","Many domestic workers are migrants, and many were outside labour law."],
      ["UN Migrant Workers Convention (1990)","Rights for all migrant workers and families, including those in an irregular situation","60 states parties as of November 2026, mostly countries of origin."],
      ["ILO Convention 97 (1949)","Equal treatment with nationals for lawfully resident migrant workers","One of the oldest migrant worker treaties."],
      ["Global Compact for Migration (2018)","23 non-binding objectives, reviewed every four years","Its review forum met in 2022 and 2026."]
    ]},
    {id:"e2u11-l5-x3", type:"spot", q:"Kenji wrote these notes on sponsorship systems. Tap each claim that is **inaccurate or not supported**.", ask:"inaccurate or unsupported", parts:[
      {t:"Under kafala, a worker’s legal residence is tied to a sponsor, usually the employer.", flag:false, why:"Accurate: that is how the system works."},
      " ",
      {t:"Employer-tied work visas exist only in the Gulf.", flag:true, why:"Inaccurate. Many countries in many regions have work visas that tie a worker to one employer for a time."},
      " ",
      {t:"In 2020 Qatar adopted laws letting workers change jobs without a no objection certificate.", flag:false, why:"Accurate: Law No. 19 of 2020, adopted on 30 August 2020."},
      " ",
      {t:"Since then, no rights group has reported any problems in Qatar.", flag:true, why:"Not supported. Rights groups have continued to report problems with enforcement."},
      " ",
      {t:"Saudi Arabia’s 2021 Labour Reform Initiative did not at first cover domestic workers.", flag:false, why:"Accurate: domestic workers were left out of the 2021 changes."}
    ]},
    {id:"e2u11-l5-x4", type:"sort", q:"Is each statement about the **European Union** or about the **Schengen area**?", buckets:["EU free movement","Schengen border-free travel"], items:[
      {t:"An Irish citizen moves to Spain to take a job.", b:0, why:"A right to live and work in another member state: EU free movement. (Ireland is in the EU but not in Schengen.)"},
      {t:"A traveller drives from one Schengen country into a neighbouring one with no routine passport check at the border.", b:1, why:"No routine checks at internal borders is what Schengen does (members can temporarily reintroduce them)."},
      {t:"A Polish student enrols at a university in Portugal on the same terms as local students.", b:0, why:"Rights to study and equal treatment come from EU free movement and non-discrimination rules."},
      {t:"Norway, which is not in the EU, has no routine passport checks with Sweden.", b:1, why:"Norway is in Schengen but outside the EU."},
      {t:"An Italian citizen who has worked in Germany for years claims the same social rights as German workers.", b:0, why:"Equal treatment of EU workers is part of free movement law."}
    ]},
    {id:"e2u11-l5-x5", type:"number", q:"Amara sends $200. The provider charges a $7 fee. The market rate is 100 pesos per dollar, but the provider gives 97 pesos per dollar. What is the total cost of the transfer as a **percentage** of $200?", answer:6.5, tol:0.05, unit:"%", why:"Fee: $7. Exchange margin: the family gets 200 × 97 = 19,400 pesos instead of 20,000, a loss of 600 pesos = $6. Total cost: $7 + $6 = $13. As a share: 13 ÷ 200 = 0.065 = **6.5 per cent**, more than double the SDG target of 3 per cent.", wrongs:[
      {v:3.5, tol:0.05, why:"That counts only the fee ($7 ÷ 200). The worse exchange rate is a hidden cost too."},
      {v:3, tol:0.05, why:"That is only the exchange-rate margin (3 per cent). Add the $7 fee."},
      {v:13, tol:0.05, why:"$13 is the cost in dollars. The question asks for a percentage of $200."}
    ], hint2:"Work out the margin in dollars: how many pesos are lost, divided by 100 pesos per dollar. Then add the fee and divide by 200."},
    {id:"e2u11-l5-x6", type:"mcq", q:"A government report says: “Country X has joined a free movement protocol, so its citizens can now live anywhere in the region.” What should you check first?", options:[
      {t:"Whether the protocol is in force and implemented, and which rights it covers", ok:true, why:"Right. The AU Free Movement Protocol, for example, has been adopted and signed by many states but is not in force: it had 4 of the 15 ratifications it needs by mid-2026."},
      {t:"Nothing: joining a protocol always gives full rights at once", why:"Treaties often need a set number of ratifications to enter into force, and then must be implemented."},
      {t:"Whether the protocol is part of the Schengen area", why:"Schengen is a European border-free area; it has nothing to do with protocols elsewhere."},
      {t:"Whether the UN Security Council has approved it", why:"Regional free-movement protocols don’t need Security Council approval."}
    ]},
    {id:"e2u11-l5-x7", type:"mcq", q:"Which statement about remittances is best supported by the World Bank’s figures?", options:[
      {t:"Recorded remittances to low- and middle-income countries were about $685 billion in 2024, more than foreign direct investment and aid combined, and the true total is higher.", ok:true, why:"Right. That is the World Bank/KNOMAD estimate (December 2024); informal transfers aren’t fully recorded."},
      {t:"Remittances mostly go from poor countries to rich ones.", why:"The large recorded flows go to low- and middle-income countries."},
      {t:"The global average cost of sending money has already reached the 3 per cent SDG target.", why:"The 2025 global average was about 6.4 per cent, more than double the target."},
      {t:"Remittances are counted exactly, so the figures never change.", why:"Recent-year figures are estimates that are later revised, and informal transfers are missed."}
    ]}
   ],
   apply:{
    intro:"Use free official tools to look at migrant workers’ rights, free movement and remittance costs. You don’t need to send any money or create any account.",
    tasks:[
     {t:"Trace a remittance corridor’s cost", how:[
       "Open the World Bank’s Remittance Prices Worldwide website (remittanceprices.worldbank.org).",
       "Choose a sending and a receiving country (a corridor) that interests you.",
       "Note the average total cost for sending $200, the cheapest and the most expensive options listed, and the date of the data. Compare them with the SDG target of 3 per cent."
     ], write:"Corridor… Average cost and date… Cheapest… Most expensive… Compared with 3%…"},
     {t:"Check a ratification", how:[
       "Search the UN Treaty Collection for the International Convention on the Protection of the Rights of All Migrant Workers, or the ILO’s NORMLEX database for Convention 189.",
       "Find whether one country you know has ratified it, and when.",
       "Write one reason a country might ratify, and one reason it might not, from what you have learned."
     ], write:"Instrument… Country… Ratified? When?… A reason to ratify… A reason not to…"},
     {t:"Look up one migration statistic properly", how:[
       "Find one figure about migrant workers or remittances in a news story.",
       "Trace it back to the original source (ILO, World Bank, IOM or a national statistics office).",
       "Note the exact figure, the year it refers to and the year it was published. Did the news story report it correctly?"
     ], write:"Figure in the news… Original source… Year it refers to… Year published… Reported correctly?…"}
    ],
    proof:"One remittance corridor’s costs with a date and a comparison with the SDG target, one ratification checked, and one statistic traced to its original source."
   },
   read:[
    {book:"imis", where:"Chapter 7 “Labour Migration”", note:"Read it after this lesson: it explains the research on labour migration regimes, including temporary and employer-tied schemes."},
    {book:"imis", where:"Chapter 19 “Migration and Development”", note:"For the debates about remittances and development."},
    {book:"wmr", where:"Part I (key data and information on migration and migrants)", note:"For current figures on migrant workers and remittances, with their sources."}
   ]
  }
  ],
  checkpoint:["e2u11-q02","e2u11-q05","e2u11-q11","e2u11-q14","e2u11-q20","e2u11-q22","e2u11-q26","e2u11-q30","e2u11-q33","e2u11-q38","e2u11-q41","e2u11-q44"],
  codex:[
   {id:"borders-and-sovereignty", title:"Borders, passports and visas", aka:["border control","passport","visa","right to leave","carrier sanctions","border securitisation","mobility divide"], tags:["migration studies","borders","governance"],
    summary:"What borders do, why controlling entry is tied to sovereignty and limited by law, and how passports, visas and border securitisation work.",
    levels:{
     starter:[
      "A **border** is where one state’s territory ends and another’s begins, together with the rules, people and technology that control movement across it. It works like the walls and reception desk of a large building: it marks the edge, decides who comes in and sets rules for visitors.",
      "Deciding who may enter is part of a state’s **sovereignty** ({{sovereignty}}). But it has limits: states may not send refugees back to persecution, must let their own citizens return, and must respect human rights at the border.",
      "A **passport** proves your identity and nationality; your own state issues it. A **visa** is permission from the destination to travel and ask to be admitted for a purpose and time; in most countries the officer at the border still decides.",
      {key:"You have a right to leave any country and to return to your own, but no general right to enter someone else’s."}
     ],
     builder:[
      "The Universal Declaration of Human Rights (Article 13) and the International Covenant on Civil and Political Rights (Article 12) protect the right to leave any country and to enter one’s own. Article 14 of the Declaration adds the right to seek asylum. There is no general right to enter other states.",
      "Border control happens in three zones: **before travel** (visas, electronic travel authorisations, airline document checks backed by carrier sanctions), **at the line** (passport control, biometrics, patrols) and **inside the country** (residence permits, work and housing checks).",
      "**History.** Passports were rarely checked in much of Europe before 1914, though some states kept controls and some groups were targeted. The First World War made them compulsory. A League of Nations conference in Paris in 1920 set a standard booklet (32 pages, 15.5 × 10.5 cm). The Nansen passport (1922) gave refugees without valid passports an identity certificate, used by about 450,000 people. ICAO standards later made passports machine-readable, and many now carry chips.",
      "**Passport indexes** rank passports by how many destinations their holders can enter without a visa in advance. They are made by private firms, use different methods and change often. Research describes a **global mobility divide**: visa-free travel has grown mostly for citizens of richer countries."
     ],
     pro:[
      "**Border securitisation** applies the Copenhagen School’s securitisation framework ({{security-studies}}) to migration. Jef Huysmans’s 2000 article on the European Union traced how migration was linked to crime, terrorism and threats to welfare and identity. Critical border studies also stress that borders are increasingly **delocalised**: carried out by consulates, airlines, databases and private actors, and inside states through checks on work, housing and services.",
      "Arguments in public debate run in both directions. Some stress that screening and enforcement are needed to detect genuine threats, counter smuggling networks and keep public confidence in a managed system. Others argue that security framing stigmatises migrants and refugees, encourages riskier routes and diverts attention from legal pathways. IOM’s Missing Migrants Project, which began counting in 2014, records deaths and disappearances on migration routes, while noting that its figures are minimum estimates.",
      "Legal limits on border control include non-refoulement ({{non-refoulement}}), the right of nationals to enter their own country, the best interests of the child, the prohibition of collective expulsion in some regional systems, and duties to rescue people in distress at sea under the law of the sea.",
      "On data: when using a passport index, record the company, edition, date and method (for example, whether visas on arrival and electronic authorisations count as visa-free). For academic work on visa policy, researchers use datasets such as the DEMIG VISA database, and the 2015 study by Steffen Mau and colleagues on the mobility divide."
     ]
    },
    related:["citizenship","refugee-law","externalisation-and-detention","free-movement-regimes","sovereignty","security-studies"],
    read:[{book:"imis", where:"Chapter 20 “Migration Governance”"},{book:"imis", where:"Chapter 12 “Irregular Migration”"}],
    sources:[{t:"UN Today: The world’s most travelled document (history of the passport and the Nansen passport)", url:"https://untoday.org/the-worlds-most-travelled-document/"},{t:"ICAO: Doc 9303, Machine Readable Travel Documents", url:"https://www.icao.int/publications/pages/publication.aspx?docnum=9303"}],
    checked:"2026-11"},

   {id:"citizenship", title:"Citizenship and nationality", aka:["nationality","jus soli","jus sanguinis","naturalisation","dual citizenship","denizenship","birthright citizenship"], tags:["migration studies","citizenship","governance"],
    summary:"The legal bond between a person and a state: how it is given at birth (soil or descent), gained later (naturalisation), held twice (dual citizenship) or approached by long-term residents (denizenship).",
    levels:{
     starter:[
      "**Citizenship** (in international law usually called **nationality**) is membership of a state. It usually brings the right to live in the country without conditions, to vote and to hold its passport.",
      "Countries give it at birth in two main ways. **Jus soli** (“right of the soil”) gives it to children born on the territory. **Jus sanguinis** (“right of blood”) passes it from parents. Most of the Americas use jus soli; most other countries rely mainly on descent, often with some birthplace rules added.",
      "Adults can become citizens later through **naturalisation**, usually after years of lawful residence, often with language and civics tests.",
      "Some people hold two citizenships (**dual citizenship**). Some hold none: they are stateless ({{statelessness}}).",
      {key:"Each state decides who its citizens are, within limits set by international law."}
     ],
     builder:[
      "The principle that each state determines its own nationals appears in Article 1 of the 1930 Hague Convention on nationality. Article 15 of the Universal Declaration adds that everyone has a right to a nationality and no one may be arbitrarily deprived of it.",
      {table:[["Rule","Examples (check current law)"],["Unconditional jus soli","Argentina, Brazil, Canada, Mexico and most of the Americas"],["Conditional jus soli","Australia (since 1986), Germany (since 2000), Ireland (since 2005), the UK (since 1983), New Zealand (since 2006)"],["Mainly jus sanguinis","China, Japan, and many states in Asia, Africa and Europe; India since its 1987 and 2004 changes depends mainly on parents"]]},
      "**Naturalisation** conditions vary: for example three of the last five years in Canada, five years in Germany (after a 2024 reform; a three-year fast route was abolished in October 2025), usually five years in Japan, ten years in Switzerland. Refugees are meant to get easier access (1951 Convention, Article 34).",
      "**Dual citizenship** is now accepted by most states in at least some cases (examples: Mexico since 1998, the Philippines since 2003, Kenya since 2010, Ghana, Germany since 2024), while China does not recognise it, Japan expects a choice, and India offers Overseas Citizenship of India instead.",
      "**Denizenship** (Tomas Hammar, 1990) names the status of long-term residents who have many rights but not full citizenship."
     ],
     pro:[
      "Researchers compare nationality laws using the GLOBALCIT observatory’s databases, which code modes of acquisition and loss country by country. Two long-term trends stand out: wider acceptance of dual citizenship since the late 20th century, and, in several former jus soli countries outside the Americas, a move to conditional jus soli (UK 1983, Australia 1986, India 1987 and 2004, Ireland 2005, New Zealand 2006). Germany moved the other way in 2000 and 2024.",
      "In the United States, a January 2025 executive order sought to limit birthright citizenship under the Fourteenth Amendment (1868) for children of parents present unlawfully or temporarily. On 30 June 2026 the Supreme Court (*Trump v. Barbara*, 6–3) held that such children are citizens at birth, so the order cannot be applied. Political debate about the rule continues.",
      "Gender discrimination in nationality laws, where mothers cannot pass nationality to children on equal terms with fathers, remains in a minority of countries (UNHCR has counted about two dozen) and is a recognised cause of statelessness. CEDAW Article 9 requires equal rights.",
      "**Citizenship by investment** schemes, in which states grant citizenship in return for a large investment or payment, raise debates about the meaning of membership. In April 2025 the Court of Justice of the EU ruled (*Commission v Malta*) that Malta’s scheme breached EU law: granting nationality in what amounts to a commercial transaction is incompatible with the special relationship of solidarity and good faith between a member state and its nationals, on which EU citizenship rests.",
      "Political theorists debate whether long-term residents should gain the vote through easier naturalisation or through residence-based voting rights. Some states already extend voting to non-citizens: EU citizens in local elections in other member states, permanent residents in New Zealand’s national elections, and foreign residents after five years in Chile."
     ]
    },
    related:["borders-and-sovereignty","statelessness","refugee-law","free-movement-regimes","the-state"],
    read:[{book:"imis", where:"Chapter 22 “Citizenship & Migration”"}],
    sources:[{t:"GLOBALCIT: Global Citizenship Observatory (citizenship law database)", url:"https://globalcit.eu/"},{t:"Convention and Protocol relating to the Status of Refugees (UN Digital Library), for Article 34", url:"https://digitallibrary.un.org/record/556508"}],
    checked:"2026-11"},

   {id:"refugee-law", title:"Refugee law: the 1951 Convention and regional instruments", aka:["1951 Refugee Convention","1967 Protocol","refugee definition","OAU Refugee Convention","Cartagena Declaration","Common European Asylum System","Pact on Migration and Asylum","cessation","exclusion"], tags:["migration studies","refugees","international law"],
    summary:"The treaties and declarations that define who is a refugee and what protection they receive, from the 1951 Convention and 1967 Protocol to African, Latin American and European rules.",
    levels:{
     starter:[
      "The **1951 Refugee Convention** defines a refugee as someone outside their country who has a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group or political opinion, and who cannot or, because of that fear, will not use their own country’s protection.",
      "At first it covered only events before 1951, and states could limit it to Europe. The **1967 Protocol** removed those limits. As of November 2026, 149 states are party to one or both (UN Treaty Collection).",
      "The Convention’s most important rule is **non-refoulement**: refugees must not be sent back to places where their life or freedom would be threatened ({{non-refoulement}}).",
      "Africa and Latin America added wider definitions that also cover people fleeing war and serious public disorder.",
      {key:"A refugee is a person already in need of international protection; recognition confirms this status, it doesn’t create it."}
     ],
     builder:[
      "**Timeline.** UNHCR began work on 1 January 1951; the Convention was adopted on 28 July 1951 (in force 1954); the Protocol dates from 1967. UNHCR’s Handbook explains that recognition is **declaratory**.",
      "**The five tests**: outside the country; well-founded fear; persecution (serious harm, by state or non-state actors where the state fails to protect); one of five Convention grounds; no available protection at home.",
      "**Rights** (Articles 3–34) include non-discrimination, access to courts, education, public relief, work, identity papers and travel documents, and protection from penalties for irregular entry (Article 31).",
      "**Cessation** (Article 1C) ends status when protection is no longer needed (for example voluntary re-establishment or fundamental, lasting change in the country). **Exclusion** (Article 1F) denies status where there are serious reasons to believe a person committed crimes against peace, war crimes, crimes against humanity, serious non-political crimes before admission, or acts contrary to UN purposes.",
      {table:[["Regional instrument","What it adds"],["OAU Convention (1969, in force 1974)","External aggression, occupation, foreign domination, events seriously disturbing public order; ban on rejection at the frontier; voluntary repatriation"],["Cartagena Declaration (1984)","Generalised violence, foreign aggression, internal conflicts, massive human rights violations; non-binding but widely written into national law"],["EU asylum law","Common standards, subsidiary protection and responsibility rules; the 2024 Pact applies from 12 June 2026"]]}
     ],
     pro:[
      "Several major host states are not parties, including Bangladesh, India, Jordan, Lebanon, Malaysia, Pakistan and Thailand; protection there relies on national practice, memoranda with UNHCR and customary law. Türkiye maintains the Convention’s geographic limitation, protecting most non-European refugees under national law (including temporary protection).",
      "Interpretation of “particular social group” has expanded through national case law and UNHCR guidelines to include, in many jurisdictions, groups defined by sexual orientation, gender identity and some gender-based harms. “Persecution” is not defined in the Convention; it is read through human rights law.",
      "Article 1D concerns people receiving protection or assistance from other UN agencies (in practice Palestine refugees assisted by UNRWA), and Article 1E people treated as nationals in their country of residence. Exclusion is applied individually with procedural safeguards.",
      "The EU **Pact on Migration and Asylum**, adopted in May 2024 and applicable from 12 June 2026, includes screening at external borders, a wider use of border procedures, a revised Eurodac database, a regulation replacing the Dublin system and a permanent solidarity mechanism. Supporters stress speed and fairer sharing among member states; critics, including many NGOs, warn about safeguards and detention at borders. Denmark has an opt-out from EU asylum law, though it applies some responsibility and Eurodac rules through separate agreements with the EU.",
      "Asia-Pacific and the Middle East have no regional refugee treaty in force; the Bali Process (2002) addresses smuggling and trafficking. The AU’s Kampala Convention (2009, in force 2012) is the first binding regional treaty on internally displaced persons."
     ]
    },
    related:["non-refoulement","refugees-and-displacement","global-compacts","externalisation-and-detention","human-rights-regime","international-law"],
    read:[{book:"imis", where:"Chapter 9 “Humanitarian Migration”"}],
    sources:[{t:"Convention and Protocol relating to the Status of Refugees (UN Digital Library)", url:"https://digitallibrary.un.org/record/556508"},{t:"OAU Convention Governing the Specific Aspects of Refugee Problems in Africa (AfricanLII text)", url:"https://africanlii.org/en/akn/aa-au/act/convention/1969/specific-aspects-of-refugee-problems-in-africa/eng@1969-09-10/publication"},{t:"European Commission: Pact on Migration and Asylum enters into application on 12 June 2026", url:"https://malta.representation.ec.europa.eu/news/pact-migration-and-asylum-enters-application-12-june-2026-06-11_en"}],
    checked:"2026-11"},

   {id:"non-refoulement", title:"Non-refoulement", aka:["Article 33","no return to danger","refoulement","chain refoulement"], tags:["migration studies","refugees","international law","human rights"],
    summary:"The rule that no one may be sent back to a place where they face persecution, torture or other serious harm: the cornerstone of refugee protection.",
    levels:{
     starter:[
      "**Non-refoulement** comes from the French *refouler*, to push back. It means a state must not send a person to a place where their life or freedom would be threatened.",
      "Article 33 of the 1951 Refugee Convention says no state shall “expel or return (‘refouler’) a refugee in any manner whatsoever” to such a place.",
      "It protects people who are still waiting for a decision, because refugees are refugees before they are recognised. It applies at the border as well as inside the country.",
      "Human rights law adds a stricter version: no one may be returned to a real risk of torture, with no exceptions.",
      "It doesn’t force a state to grant asylum or citizenship. It only forbids sending someone into danger, which in practice means the person must be allowed to stay safely while their case is decided.",
      {key:"Whatever a state decides about admitting someone, it must not send them back to persecution or torture."}
     ],
     builder:[
      "**Scope.** “In any manner whatsoever” covers expulsion, deportation, rejection at the frontier and indirect return through a third country that would send the person on (**chain refoulement**). It applies wherever a state exercises jurisdiction, including on the high seas: in *Hirsi Jamaa v. Italy* (2012) the European Court of Human Rights found violations when people intercepted at sea were returned to Libya.",
      "**Exceptions.** Article 33(2) allows return of a refugee who is a danger to the security of the country, or who, after conviction for a particularly serious crime, is a danger to the community. These exceptions are read narrowly.",
      "**Human rights law.** Article 3 of the Convention against Torture bans return to a real risk of torture absolutely. The UN Human Rights Committee reads the ICCPR (Articles 6 and 7) as banning return to a real risk of irreparable harm, and the European Court applies Article 3 of the European Convention (*Soering v. UK*, 1989; *Chahal v. UK*, 1996).",
      "**Regional law.** The OAU Convention (Article II(3)) explicitly bans rejection at the frontier.",
      "**Who is protected.** Article 33 protects refugees, including those not yet recognised. Human rights law protects everyone, including people excluded from refugee status and people who are not refugees at all, from return to torture or comparable serious harm. That is why a refusal of refugee status does not by itself make a return lawful."
     ],
     pro:[
      "UNHCR’s position, shared by many scholars, is that non-refoulement is part of **customary international law**, binding all states whether or not they are party to the Convention. Some writers argue that the prohibition of refoulement to torture has the status of a peremptory norm ([[jus-cogens]]); others are more cautious.",
      "Practical tensions arise with **safe third country** rules (sending applicants to another state said to be safe), accelerated border procedures, interception at sea and offshore processing. The legal test is whether the person faces a real risk of serious harm or onward refoulement, assessed individually with access to a remedy.",
      "Non-refoulement does not oblige a state to grant asylum or a particular status; it obliges it not to return. In practice, however, a person who cannot be returned needs some lawful status, which is one reason complementary protection developed.",
      "Courts have also set limits in politically prominent cases: the UK Supreme Court in November 2023 held that the Rwanda arrangement was unlawful on the evidence then before it, because of a real risk of onward refoulement. Assessments of such risks change as facts change, which is why decisions are tied to the evidence at a given time.",
      "For research or debate, keep three questions apart: Does the person face a real risk of serious harm on return? Is any third country safe for them, including from onward return? And does the state have jurisdiction over them at the moment of the action, for example on a ship or at a border fence?"
     ]
    },
    related:["refugee-law","externalisation-and-detention","borders-and-sovereignty","human-rights-regime","international-law"],
    read:[{book:"imis", where:"Chapter 9 “Humanitarian Migration”"}],
    sources:[{t:"Convention and Protocol relating to the Status of Refugees (UN Digital Library)", url:"https://digitallibrary.un.org/record/556508"},{t:"OAU Convention Governing the Specific Aspects of Refugee Problems in Africa (AfricanLII text)", url:"https://africanlii.org/en/akn/aa-au/act/convention/1969/specific-aspects-of-refugee-problems-in-africa/eng@1969-09-10/publication"}],
    checked:"2026-11"},

   {id:"global-compacts", title:"The Global Compacts (2018)", aka:["Global Compact for Migration","GCM","Global Compact on Refugees","GCR","New York Declaration","International Migration Review Forum","Global Refugee Forum"], tags:["migration studies","governance","United Nations"],
    summary:"Two non-binding UN frameworks from 2018: the Global Compact for Safe, Orderly and Regular Migration and the Global Compact on Refugees.",
    levels:{
     starter:[
      "In 2016 the UN General Assembly adopted the New York Declaration for Refugees and Migrants. It led to two **Global Compacts**, agreed in December 2018.",
      "The **Global Compact for Migration** (GCM) covers migration in all its forms, with 23 objectives, from better data to fair recruitment, saving lives and cheaper remittances.",
      "The **Global Compact on Refugees** (GCR) aims to share the responsibility for refugees more fairly, especially with the low- and middle-income countries that host most of them.",
      "Neither is a treaty. They are political commitments that states can be reminded of, not laws a court enforces.",
      "Think of them as a shared to-do list that almost every government helped write: no one can be fined for skipping an item, but progress is reviewed in public every few years.",
      {key:"The compacts set shared goals for cooperation; they don’t override national migration policy."}
     ],
     builder:[
      {table:[["","GCM","GCR"],["Adopted","Marrakech, 10 Dec 2018; endorsed by the General Assembly 19 Dec 2018","Affirmed by the General Assembly 17 Dec 2018"],["Vote","152 for, 5 against, 12 abstentions","181 for, 2 against, 3 abstentions"],["Content","23 objectives","4 objectives plus a programme of action"],["Follow-up","International Migration Review Forum every four years (2022, 2026)","Global Refugee Forum every four years (2019, 2023)"]]},
      "The five states voting against the GCM were the Czech Republic, Hungary, Israel, Poland and the United States. The United States and Hungary voted against the GCR; the Dominican Republic, Eritrea and Libya abstained.",
      "The GCR’s four objectives are to ease pressures on host countries, enhance refugee self-reliance, expand access to third-country solutions, and support conditions in countries of origin for return in safety and dignity.",
      "The GCM reaffirms “the sovereign right of States to determine their national migration policy”. Its objective 13 commits states to use immigration detention only as a last resort and to work towards alternatives.",
      "Other GCM objectives include minimising the drivers that force people to leave (objective 2), saving lives and coordinating efforts on missing migrants (8), countering smuggling (9) and trafficking (10), fair and ethical recruitment (6), and promoting faster, safer and cheaper remittances (20). The GCR’s programme of action covers reception, registration, education, jobs, health and solutions, with arrangements to mobilise support when a large refugee movement begins."
     ],
     pro:[
      "Scholars read the compacts as **soft law**: non-binding instruments that can still shape behaviour through norms, reporting and peer review. Supporters argue they created the first comprehensive global frameworks and a shared vocabulary; critics from one side argued they could constrain national control or legitimise more migration, while critics from another argued they are too weak to change state practice.",
      "The GCR built on the Comprehensive Refugee Response Framework annexed to the New York Declaration. Its follow-up includes pledges by states and non-state actors at the Global Refugee Forum, and indicators to measure responsibility-sharing.",
      "The GCM is supported by the UN Network on Migration, coordinated by IOM, which became a related organisation of the UN in 2016. The second International Migration Review Forum met in May 2026, when IOM also launched its World Migration Report 2026.",
      "When citing the compacts, distinguish adoption at an intergovernmental conference (GCM, Marrakech) from endorsement or affirmation by the General Assembly, and give the vote counts with their date.",
      "Since 2018 some governments have restated or changed their positions on the GCM in national debates. When you describe a country’s stance, cite a dated official statement rather than relying on the 2018 vote alone, and remember that a vote on a non-binding text does not create or remove legal obligations."
     ]
    },
    related:["refugee-law","migrant-workers-rights","remittances","externalisation-and-detention","united-nations"],
    read:[{book:"imis", where:"Chapter 20 “Migration Governance”"}],
    sources:[{t:"UN press release GA/12113: General Assembly endorses the Global Compact for Migration (recorded vote)", url:"https://press.un.org/en/2018/ga12113.doc.htm"},{t:"UN News: UN affirms ‘historic’ global compact to support world’s refugees (17 December 2018)", url:"https://news.un.org/en/story/2018/12/1028791"}],
    checked:"2026-11"},

   {id:"migrant-workers-rights", title:"Migrant workers’ rights and sponsorship systems", aka:["ILO migrant worker conventions","UN Migrant Workers Convention","ICRMW","kafala","employer-tied visas","fair recruitment","Domestic Workers Convention"], tags:["migration studies","labour","human rights"],
    summary:"The ILO and UN treaties that protect migrant workers, why destination countries rarely ratify the 1990 convention, and how employer sponsorship systems such as kafala work and are changing.",
    levels:{
     starter:[
      "Most international migrants move for work. The ILO estimated 167.7 million international migrants in the labour force in 2022, about 4.7 per cent of all workers.",
      "Treaties protect their rights: ILO conventions on migrant workers (1949, 1975) and domestic workers (2011), and the UN’s 1990 Migrant Workers Convention, which covers all migrant workers, including those in an irregular situation.",
      "In many places a work visa ties a worker to one employer. The best-known example is **kafala**, a sponsorship system in Gulf states, Jordan and Lebanon, where a worker’s residence depends on a sponsor, usually the employer.",
      {key:"Rights on paper matter, but so do ratification and enforcement: ask who has signed up and what happens in practice."},
      "These systems affect millions of people from Asia, Africa and elsewhere who work in construction, domestic work, hospitality and many other jobs."
     ],
     builder:[
      "**ILO instruments**: C97 Migration for Employment (Revised), 1949; C143 Migrant Workers (Supplementary Provisions), 1975; C189 Domestic Workers, 2011; and the ILO’s fair recruitment guidance, including the principle that workers should not be charged recruitment fees.",
      "**The UN Migrant Workers Convention** was adopted on 18 December 1990 and entered into force on 1 July 2003. Part III covers rights of all migrant workers (for example, Article 21 forbids anyone except authorised officials to confiscate identity documents); Part IV covers additional rights for those in a regular situation. As of November 2026 the UN Treaty Collection listed 60 states parties (the most recent, Zimbabwe, in November 2024), mostly countries of origin (such as Mexico, the Philippines, Sri Lanka, Morocco, Ghana and Indonesia). The main destination states in Western Europe, the United States, Canada and the Gulf have not ratified it.",
      "**Kafala reforms**: Qatar adopted laws on 30 August 2020 allowing job changes without an employer’s “no objection certificate” and a minimum wage of QAR 1,000 plus allowances (in force 2021), after removing most exit permits; the ILO said this effectively dismantled kafala. Saudi Arabia’s 2021 Labour Reform Initiative let many private-sector workers change jobs and travel without employer permission, initially excluding domestic workers; further changes were announced in October 2025.",
      "**Recruitment.** Many workers pay large fees to agents before leaving home and start work in debt. The ILO’s fair recruitment principles say workers should not be charged recruitment fees or related costs."
     ],
     pro:[
      "Explanations for low ratification of the 1990 Convention include concerns about cost and loss of control, the view that its rights already exist in other human rights treaties, objections to rights for people in an irregular situation, and the treaty’s length and complexity. Supporters reply that it clarifies how general rights apply to migrants and their families.",
      "Research on **employer-tied visas** is comparative: temporary labour migration programmes in Asia, the Gulf, Europe, North America and the Pacific vary in how easily workers can change employer, bring family or move to permanent status. Martin Ruhs’s work on the “price of rights” argues that destination states trade off the number of temporary workers admitted against the rights they receive; critics contest how general that trade-off is.",
      "Evaluating reforms requires distinguishing legal change from implementation: whether workers know their rights, whether complaint mechanisms work, whether domestic workers are covered, and whether recruitment debts persist. ILO and rights-group reports should be read with their dates.",
      "Figures: ILO global estimates (released December 2024) found 68.4 per cent of migrant workers in high-income countries and a heavy concentration in services and care; women migrants were especially concentrated in care work.",
      "International Migrants Day, 18 December, marks the anniversary of the 1990 Convention’s adoption and is a common date for new statistics and campaigns."
     ]
    },
    related:["global-compacts","remittances","free-movement-regimes","borders-and-sovereignty","human-rights-regime"],
    read:[{book:"imis", where:"Chapter 7 “Labour Migration”"}],
    sources:[{t:"ILO: International migrants are vital force in the global labour market (global estimates, December 2024)", url:"https://www.ilo.org/resource/news/international-migrants-are-vital-force-global-labour-market"},{t:"ILO: Dismantling the kafala system and introducing a minimum wage mark new era for Qatar labour market (2020)", url:"https://www.ilo.org/resource/article/dismantling-kafala-system-and-introducing-minimum-wage-mark-new-era-qatar"},{t:"Report of the Committee on Migrant Workers, A/80/48 (2025), status of ratification", url:"https://digitallibrary.un.org/record/4085486/files/A_80_48-EN.pdf"}],
    checked:"2026-11"},

   {id:"free-movement-regimes", title:"Regional free movement", aka:["EU free movement","Schengen","ECOWAS free movement protocol","Mercosur Residence Agreement","AU Free Movement Protocol","Trans-Tasman Travel Arrangement"], tags:["migration studies","regionalism","governance"],
    summary:"Arrangements that let citizens of member states enter, live and work in each other’s countries, from the EU to ECOWAS, Mercosur and the African Union.",
    levels:{
     starter:[
      "Some groups of countries let each other’s citizens move, live and work with few conditions. This is called **free movement**.",
      "The best-known example is the **European Union**, where EU citizens can live and work in other member states. Other examples are **ECOWAS** in West Africa (visa-free entry since a 1979 protocol), the **Mercosur Residence Agreement** in South America, and an **African Union protocol** for the whole continent that is not yet in force.",
      "Free movement is not the same as having no passport checks. The **Schengen area** removes routine checks at internal borders, but its members are not exactly the same as the EU’s.",
      {key:"Ask who is covered, which rights, whether it is in force, and whether it works in practice."},
      "Free movement usually covers citizens of member states only, not everyone living there."
     ],
     builder:[
      {table:[["Regime","Key dates","Main rights"],["EU / EEA and Switzerland","Treaty of Rome 1957; Directive 2004/38","Live, work and study; stays over three months need work, study or sufficient means and health cover"],["ECOWAS","Protocol of 29 May 1979","Visa-free entry up to 90 days; residence and establishment phases partly implemented"],["Mercosur Residence Agreement","Signed 2002, in force 2009","Two-year residence and work permit, convertible to permanent; based on nationality and a clean criminal record"],["AU Free Movement Protocol","Adopted 29 January 2018","Entry, residence, establishment; needs 15 ratifications; 4 by mid-2026 (Mali, Niger, Rwanda, São Tomé and Príncipe)"]]},
      "**Schengen** is about border checks: Ireland is in the EU but not Schengen; Iceland, Liechtenstein, Norway and Switzerland are in Schengen but not the EU. The UK’s free movement with the EU ended on 31 December 2020.",
      "Other arrangements: Gulf Cooperation Council citizens’ mobility, the Australia–New Zealand Trans-Tasman Travel Arrangement (1973), the East African Community common market and CARICOM’s free movement of skilled nationals. In January 2025 Burkina Faso, Mali and Niger formally left ECOWAS, which raised questions about future free-movement arrangements with them.",
      "**Why do states agree?** Common reasons include labour-market needs, regional trade and integration, historical ties and the wish to make cross-border life (traders, families, students) legal and simpler. **Why do they hesitate?** Concerns include security, pressure on public services, competition for jobs and the cost of building identity and border systems that make the rules work."
     ],
     pro:[
      "Comparative research (for example by Leiza Brumat and others on South America) shows that legal design differs from implementation: in Mercosur, countries apply the Residence Agreement with varying fees and restrictions; in ECOWAS, harassment and informal payments at borders have been documented alongside the formal right of entry; in the AU, states have signed the 2018 protocol in larger numbers than they have ratified it, reflecting concerns about security, labour markets and administrative capacity.",
      "The EU model is the most legally developed, with directly enforceable rights before national courts and the Court of Justice. It links free movement to EU citizenship (created by the Maastricht Treaty, 1992). Debates within the EU concern access to social benefits, posted workers and temporary restrictions or reintroduced internal border checks in the Schengen area.",
      "Free movement is a form of regionalism ({{regional-organizations}}) and often follows trade integration (free trade areas, customs unions, common markets). Scholars debate whether free movement creates regional identity or depends on it.",
      "Status changes: membership of regional bodies and ratification counts change; check the organisation’s own status list, with its date, before citing.",
      "Free movement for citizens of member states sits alongside separate, often stricter, rules for third-country nationals, who usually need national visas and permits even inside a free-movement area. Researchers therefore speak of regimes that open internal mobility while tightening external borders."
     ]
    },
    related:["citizenship","borders-and-sovereignty","migrant-workers-rights","regional-organizations"],
    read:[{book:"imis", where:"Chapter 20 “Migration Governance”"}],
    sources:[{t:"African Union: Protocol to the Treaty Establishing the African Economic Community Relating to Free Movement of Persons, Right of Residence and Right of Establishment", url:"https://au.int/en/treaties/protocol-treaty-establishing-african-economic-community-relating-free-movement-persons"},{t:"Migration Policy Centre (EUI): Is free movement in Europe an anomaly? The new open borders policy in South America", url:"https://migrationpolicycentre.eu/is-free-movement-in-europe-an-anomaly-the-new-open-borders-policy-in-south-america/"}],
    checked:"2026-11"},

   {id:"remittances", title:"Remittances", aka:["money sent home","remittance costs","SDG 10.c","Remittance Prices Worldwide","KNOMAD"], tags:["migration studies","development","economics"],
    summary:"Money migrants send to families and communities, how much it adds up to, what it costs to send, and the debates about its effects.",
    levels:{
     starter:[
      "**Remittances** are money that migrants send home, usually to family in another country, often in small amounts every month.",
      "Added up, they are huge. The World Bank estimated about $685 billion in recorded remittances to low- and middle-income countries in 2024, more than foreign direct investment and official aid combined.",
      "Sending money costs a **fee** plus an **exchange-rate margin** (a worse rate than the market one). The UN goal is to cut the cost to under 3 per cent by 2030; in 2025 the global average was about 6.4 per cent of a $200 transfer.",
      {key:"True cost = fee + exchange-rate margin. Always compare both."},
      "Remittances are private money earned by workers and spent as families choose: on food, school fees, medicine, housing or a small business. They are not aid, and they don’t pass through governments."
     ],
     builder:[
      "**Figures (World Bank/KNOMAD, December 2024)**: about $685 billion to low- and middle-income countries in 2024, up 5.8 per cent. Top recipients by amount: India (about $129 billion), Mexico ($68 billion), China ($48 billion), the Philippines ($40 billion), Pakistan ($33 billion). Highest as a share of GDP: Tajikistan (about 45 per cent), Tonga (38), Nicaragua (27), Lebanon (27), Samoa (26). Figures for the latest year are estimates and are revised later.",
      "**Costs.** The World Bank’s Remittance Prices Worldwide database tracks the cost of sending $200 and $500 across hundreds of corridors. Its 2025 global average was 6.36 per cent. SDG target 10.c: by 2030, reduce costs to less than 3 per cent and eliminate corridors above 5 per cent.",
      "**Effects.** Research links remittances to spending on food, education, health and housing, and finds they often rise after disasters at home. Debates concern dependency, effects on work and inequality, and exchange rates. Researchers also study **social remittances**: ideas and practices that travel with money ({{transnationalism}}).",
      "**Measurement.** Informal channels (cash carried by hand, or informal transfer networks such as hawala) are not fully counted, so recorded figures understate the total.",
      "**Data sources.** The World Bank and KNOMAD publish Migration and Development Briefs with the latest estimates; IOM’s World Migration Report and the Migration Data Portal summarise them. Always note the edition and year."
     ],
     pro:[
      "Remittances are recorded in balance-of-payments statistics as personal transfers and compensation of employees, following the IMF’s balance-of-payments manual. Changes in recording (for example when a central bank improves data collection) can make flows appear to jump. Analysts therefore compare trends cautiously.",
      "Cost drivers include competition in a corridor, regulation (anti-money-laundering rules that lead banks to close accounts of money transfer operators, called de-risking), the payment instrument (digital versus cash), and the exchange-rate margin, which is often less visible to senders than the fee.",
      "Macroeconomic debates include whether large remittance inflows cause currency appreciation that hurts exports (a “Dutch disease” effect), whether they reduce governments’ incentive to reform, and how they interact with emigration of skilled workers ({{migration-and-development-hump}}). Evidence is context-specific, and most researchers stress that remittances are private income whose use households decide.",
      "Beyond low- and middle-income countries, global remittance flows (including to high-income countries) were estimated at about $905 billion for 2024, a figure cited in IOM’s World Migration Report 2026.",
      "Researchers also look at who sends and who receives: women and men tend to remit in different ways, remittances can create obligations and tensions within families, and money flows both ways (parents may support a migrant child during studies abroad). Household surveys, not only national statistics, are used to study these patterns. Treat any single headline figure as a starting point for questions, not as the whole story."
     ]
    },
    related:["migrant-workers-rights","global-compacts","development-ir","transnationalism"],
    read:[{book:"imis", where:"Chapter 19 “Migration and Development”"},{book:"wmr", where:"Part I (key data and information on migration and migrants)"}],
    sources:[{t:"World Bank blog (People Move): In 2024, remittance flows to low- and middle-income countries are expected to reach $685 billion, larger than FDI and ODA combined (December 2024)", url:"https://blogs.worldbank.org/en/peoplemove/in-2024--remittance-flows-to-low--and-middle-income-countries-ar"},{t:"World Bank: Remittance Prices Worldwide", url:"https://remittanceprices.worldbank.org/"}],
    checked:"2026-11"},

   {id:"externalisation-and-detention", title:"Externalisation and immigration detention", aka:["externalization","offshore processing","safe third country","pushbacks","alternatives to detention","EU–Turkey Statement"], tags:["migration studies","borders","governance","human rights"],
    summary:"Policies that manage migration beyond a state’s borders or by holding people for migration reasons, described with the arguments made for and against them.",
    levels:{
     starter:[
      "**Externalisation** means a state acting beyond its own borders to prevent or manage arrivals: paying or training other countries’ border forces, agreements to stop departures or take people back, or handling asylum claims in another country.",
      "**Immigration detention** means holding people for migration reasons, such as checking identity or carrying out a removal, not as a punishment for a crime.",
      "Both are debated. Supporters say they keep control, deter dangerous journeys and support removals. Critics say they shift responsibility to poorer countries, risk sending people back to danger and harm people’s health.",
      {key:"Describe the policy, its date and the evidence, then the arguments on each side, before reaching any view."},
      "Both are found in many regions, not only in Europe or Australia, and both are often in the news; check the date of any report you read."
     ],
     builder:[
      "**Examples (with dates)**: the EU–Turkey Statement (18 March 2016); Italy’s cooperation with Libya (from 2017); Australia’s offshore processing in Nauru (renamed Naoero in 2026) and Papua New Guinea at various times since 2001; the UK–Rwanda arrangement (agreed 2022, held unlawful by the UK Supreme Court in November 2023 on the evidence then available, and abandoned in July 2024 before any enforced removals had taken place); Italy’s 2023 protocol with Albania.",
      "**Legal limits.** Non-refoulement applies wherever a state exercises control ({{non-refoulement}}); *Hirsi Jamaa v. Italy* (2012) applied it to interceptions at sea.",
      "**Detention standards.** UNHCR’s 2012 Detention Guidelines say seeking asylum is not unlawful, and detention should be lawful, necessary, reasonable and proportionate in each case, and a last resort. GCM objective 13 commits states to use detention only as a last resort and to work towards alternatives such as reporting, case management and community placement.",
      {table:[["Policy","For (as argued)","Against (as argued)"],["Externalisation","Deters dangerous journeys; disrupts smuggling; shares tasks with transit states","Shifts responsibility; risk of refoulement and abuse; weak oversight"],["Detention","Ensures identity checks and removals; prevents absconding","Mental-health harm; costly; alternatives often effective"]]},
      "**Alternatives to detention** range from registration and regular reporting to case management, in which a caseworker helps people understand and follow the procedure. Governments and UN agencies have piloted such programmes in several regions."
     ],
     pro:[
      "Scholars debate the **deterrence** effect of externalisation: some studies find short-term falls in arrivals on a route, others find displacement to other routes and greater risk. Evidence depends on the counterfactual chosen, which is hard to establish.",
      "Externalisation also raises questions of **responsibility**: when a state funds or directs another’s border actions, who is accountable for violations? Courts and scholars apply concepts of jurisdiction, effective control and complicity in international law.",
      "On detention, research and UN bodies have documented harm to children’s health and development; UNHCR’s position is that children should not be detained for immigration purposes. Governments point to the need to enforce removal decisions, which otherwise often fail.",
      "Terminology matters: “pushbacks” (forcing people back across a border without assessing their claims) is a descriptive term used by NGOs, UN bodies and courts for practices they find unlawful; governments sometimes describe the same events as preventing unauthorised entry. A neutral account names the practice, the source of the description and any court findings.",
      "For your own analysis, a useful checklist is: what exactly is the policy and since when; which legal rules apply (non-refoulement, the right to seek asylum, the rights of the child); what monitoring exists; what evidence there is on effects, from whom and with what method; and which arguments each side makes. Keep description and judgement separate, and say which one you are doing."
     ]
    },
    related:["non-refoulement","refugee-law","borders-and-sovereignty","global-compacts","security-studies"],
    read:[{book:"imis", where:"Chapter 20 “Migration Governance”"},{book:"imis", where:"Chapter 12 “Irregular Migration”"}],
    sources:[{t:"UN press release GA/12113: Global Compact for Migration endorsed (includes objective 13 on detention as a last resort)", url:"https://press.un.org/en/2018/ga12113.doc.htm"},{t:"Convention and Protocol relating to the Status of Refugees (UN Digital Library)", url:"https://digitallibrary.un.org/record/556508"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"border", term:"Border", def:"The line where one state’s territory ends and another’s begins, together with the rules, officials and technology that control movement across it.", codex:"borders-and-sovereignty"},
   {id:"passport", term:"Passport", def:"A document a state issues to its nationals that proves their identity and nationality and asks other states to let them pass. It belongs to the issuing state.", codex:"borders-and-sovereignty"},
   {id:"visa", term:"Visa", def:"Permission, usually given before travel, to travel to a country and ask to be admitted for a set purpose and time. In most countries the border officer still makes the final decision.", codex:"borders-and-sovereignty"},
   {id:"schengen-area", term:"Schengen area", def:"A group of European countries, most EU members plus Iceland, Liechtenstein, Norway and Switzerland, that have removed routine passport checks at their shared borders. It is separate from EU free movement rights.", codex:"free-movement-regimes"},
   {id:"border-securitisation", term:"Border securitisation", def:"Presenting migration and borders mainly as security threats, so that emergency or extraordinary measures such as militarised patrols or wide detention seem justified.", codex:"borders-and-sovereignty"},
   {id:"citizenship", term:"Citizenship (nationality)", def:"The legal bond between a person and a state, with the rights and duties it brings, such as living there without conditions and voting. In international law it is usually called nationality.", codex:"citizenship"},
   {id:"jus-soli", term:"Jus soli", def:"Latin for “right of the soil”: citizenship given to a child because they were born on the state’s territory, with or without conditions.", codex:"citizenship"},
   {id:"jus-sanguinis", term:"Jus sanguinis", def:"Latin for “right of blood”: citizenship passed from a parent to a child, wherever the child is born.", codex:"citizenship"},
   {id:"naturalisation", term:"Naturalisation", def:"The process by which a person who was not a citizen at birth becomes one, usually after years of lawful residence and often with language and civics requirements.", codex:"citizenship"},
   {id:"dual-citizenship", term:"Dual citizenship", def:"Being a citizen of two states at the same time. Most states now accept it in at least some cases; some still restrict it.", codex:"citizenship"},
   {id:"denizenship", term:"Denizenship", def:"The status of long-term residents who have secure residence and many rights but not full citizenship, especially not the national vote (Tomas Hammar’s term, 1990).", codex:"citizenship"},
   {id:"refugee-convention", term:"1951 Refugee Convention", def:"The Convention relating to the Status of Refugees (1951), with its 1967 Protocol: it defines who is a refugee, bans returning refugees to persecution and lists their rights.", codex:"refugee-law"},
   {id:"non-refoulement", term:"Non-refoulement", def:"The rule that no one may be sent back to a place where they would face persecution, torture or other serious harm. It is the cornerstone of refugee protection.", codex:"non-refoulement"},
   {id:"refugee-status-determination", term:"Refugee status determination (RSD)", def:"The process of deciding whether a person who has asked for asylum meets the refugee definition. States do most of it; UNHCR does it in some countries.", codex:"refugee-law"},
   {id:"complementary-protection", term:"Complementary protection", def:"Protection for people who don’t meet the refugee definition but can’t be returned because they face serious harm, such as torture or indiscriminate violence. EU law calls one form subsidiary protection.", codex:"refugee-law"},
   {id:"temporary-protection", term:"Temporary protection", def:"Quick, group-based, time-limited protection for large numbers of people arriving at once, given without examining each claim first.", codex:"refugee-law"},
   {id:"durable-solutions", term:"Durable solutions", def:"The three long-term ways for refugees to rebuild a normal life with full rights: voluntary repatriation, local integration and resettlement.", codex:"refugee-law"},
   {id:"resettlement", term:"Resettlement", def:"The selected, planned transfer of refugees from the country where they first sought protection to a third country that has agreed to admit them with permanent status.", codex:"refugee-law"},
   {id:"oau-refugee-convention", term:"OAU Refugee Convention (1969)", def:"Africa’s regional refugee treaty, in force since 1974. It adds people fleeing external aggression, occupation, foreign domination or events seriously disturbing public order.", codex:"refugee-law"},
   {id:"cartagena-declaration", term:"Cartagena Declaration (1984)", def:"A non-binding Latin American declaration recommending that people fleeing generalised violence, foreign aggression, internal conflicts or massive human rights violations also be treated as refugees.", codex:"refugee-law"},
   {id:"global-compact-migration", term:"Global Compact for Migration (GCM)", def:"The Global Compact for Safe, Orderly and Regular Migration (2018): a non-binding UN framework with 23 objectives covering migration in all its forms.", codex:"global-compacts"},
   {id:"global-compact-refugees", term:"Global Compact on Refugees (GCR)", def:"A non-binding framework affirmed by the UN General Assembly in December 2018 to share responsibility for refugees more fairly, with four objectives.", codex:"global-compacts"},
   {id:"migrant-workers-convention", term:"UN Migrant Workers Convention", def:"The International Convention on the Protection of the Rights of All Migrant Workers and Members of Their Families (adopted 1990, in force 2003). Most of its parties are countries of origin.", codex:"migrant-workers-rights"},
   {id:"kafala", term:"Kafala", def:"A sponsorship system, used in Gulf states, Jordan and Lebanon, in which a migrant worker’s legal residence depends on a sponsor, usually the employer. Several states have reformed it.", codex:"migrant-workers-rights"},
   {id:"free-movement", term:"Free movement (regional)", def:"An arrangement letting citizens of member states enter, live and often work in each other’s countries with few conditions, as in the EU, ECOWAS or the Mercosur Residence Agreement.", codex:"free-movement-regimes"},
   {id:"remittances", term:"Remittances", def:"Money, and sometimes goods, that migrants send to family or communities, usually in another country.", codex:"remittances"},
   {id:"externalisation", term:"Externalisation", def:"A state or group of states acting beyond its own borders to prevent or manage arrivals, for example by funding other countries’ border control or processing asylum claims elsewhere.", codex:"externalisation-and-detention"},
   {id:"immigration-detention", term:"Immigration detention", def:"Holding people for migration reasons, such as checking identity or carrying out a removal, rather than as punishment for a crime. International guidance says it should be a last resort.", codex:"externalisation-and-detention"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e2u11-q01", lesson:"e2u11-l1", level:1, q:"Which right does the Universal Declaration of Human Rights (Article 13) give?", options:[
     {t:"To leave any country, including one’s own, and to return to one’s own country", ok:true, why:"Correct. Article 13(2) covers leaving and returning, not entering other countries."},
     {t:"To enter and live in any country", why:"No human rights instrument gives a general right to enter other states."},
     {t:"To receive a passport from any country", why:"Passports are issued by one’s own state of nationality."},
     {t:"To travel without any documents", why:"The Declaration says nothing of the kind; states may require documents."}]},
   {id:"e2u11-q02", lesson:"e2u11-l1", level:2, q:"Tomás holds a valid tourist visa, but the officer at the airport refuses him entry. In most countries, is that possible?", options:[
     {t:"Yes: a visa lets you travel and ask to be admitted, but the border officer usually makes the final decision.", ok:true, why:"Right. A visa is not a guarantee of entry in most systems."},
     {t:"No: a visa is a legal guarantee of entry.", why:"In most countries the decision at the border remains with the officer."},
     {t:"Only if the UN approves the refusal.", why:"The UN plays no role in individual entry decisions."},
     {t:"No: visas can only be cancelled before the flight.", why:"Entry can be refused at the border, for example if the purpose of the trip seems different from the visa."}]},
   {id:"e2u11-q03", lesson:"e2u11-l1", level:1, q:"What did the 1920 League of Nations conference in Paris do for passports?", options:[
     {t:"It agreed a standard booklet format, the ancestor of today’s passport", ok:true, why:"Correct: 32 pages, 15.5 by 10.5 centimetres, with the bearer’s description."},
     {t:"It abolished passports in Europe", why:"It did the opposite, standardising a document that had become compulsory during the war."},
     {t:"It created machine-readable passports with chips", why:"Machine-readable standards came from ICAO much later."},
     {t:"It created the first refugee convention", why:"The 1951 Convention came three decades later; the Nansen passport (1922) was an earlier refugee tool."}]},
   {id:"e2u11-q04", lesson:"e2u11-l1", level:1, q:"What was the Nansen passport?", options:[
     {t:"An identity certificate created in 1922 for refugees who had no valid passport", ok:true, why:"Correct. It was used by about 450,000 people and honoured by more than 50 countries."},
     {t:"A passport for Norwegian polar explorers", why:"It was named after Fridtjof Nansen, but it was for refugees."},
     {t:"A visa waiver between European states", why:"It was an identity document for refugees, not a visa arrangement."},
     {t:"The first e-passport with a chip", why:"Chips came at the end of the 20th century, not in 1922."}]},
   {id:"e2u11-q05", lesson:"e2u11-l1", level:3, q:"An airline refuses to let Nour board because her papers for the destination seem incomplete. What does this show about modern border control?", options:[
     {t:"Control often happens before travel, partly because carriers can be fined for transporting people without valid documents.", ok:true, why:"Right. Carrier sanctions turn check-in desks far away into part of the border."},
     {t:"Airlines make the final decision on entry into countries.", why:"Airlines decide whether to carry passengers; entry decisions belong to the destination state."},
     {t:"Border control only happens at the line.", why:"This example shows control happening before travel."},
     {t:"Nour has been refused asylum.", why:"Nobody has examined any asylum claim; this is a document check before boarding."}]},
   {id:"e2u11-q06", lesson:"e2u11-l1", level:2, q:"Which description of passport indexes is accurate?", options:[
     {t:"Private firms rank passports by how many destinations holders can enter without a visa in advance, using differing methods.", ok:true, why:"Right. Methods differ (for example on visas on arrival), and rankings change often."},
     {t:"The UN publishes one official ranking every year.", why:"No UN body publishes such rankings."},
     {t:"They measure the physical quality of passports.", why:"“Power” here refers to visa-free access, not the document itself."},
     {t:"They rank countries by how many migrants they admit.", why:"They count where a passport’s holders can go, not who a country admits."}]},
   {id:"e2u11-q07", lesson:"e2u11-l1", level:2, q:"Researchers describe a “global mobility divide”. What does it refer to?", options:[
     {t:"Visa-free travel has grown mainly for citizens of richer countries, while many people from poorer countries still face visa requirements.", ok:true, why:"Correct: studies of visa policies, such as Mau and colleagues (2015), describe this pattern."},
     {t:"Rich and poor countries are separated by physical walls everywhere.", why:"The term describes unequal visa access, not walls."},
     {t:"Mobile phone access differs between countries.", why:"Here “mobility” means international travel, not mobile phones."},
     {t:"Everyone now travels freely without visas.", why:"Access remains very unequal."}]},
   {id:"e2u11-q08", lesson:"e2u11-l1", level:3, q:"A politician says: “Our border is under attack; we must deploy the army now.” Using the lesson’s concepts, what is the best analysis?", options:[
     {t:"It is a securitising move: framing migration as an existential threat to justify extraordinary measures. Analysts would then examine the evidence and the effects.", ok:true, why:"Right. Naming the move doesn’t decide whether the policy is right; it helps you analyse the framing."},
     {t:"It is a neutral statistical statement.", why:"“Under attack” is threat framing, not a statistic."},
     {t:"It proves that migrants are dangerous.", why:"A speech is a claim, not evidence; the lesson asks you to check the evidence."},
     {t:"It is an example of jus soli.", why:"Jus soli is a citizenship rule, unrelated to this framing."}]},
   {id:"e2u11-q09", lesson:"e2u11-l1", level:3, q:"Javier can visit a country for 90 days without a visa, but takes a paid job there during his stay. What is the most likely problem?", options:[
     {t:"Visa-free visits usually allow tourism or business meetings, not paid work, so he may be breaching his conditions of stay.", ok:true, why:"Right. Permission to enter comes with conditions; work usually needs a work visa or permit."},
     {t:"There is no problem: visa-free means no rules.", why:"Visa-free entry still comes with conditions about purpose and length of stay."},
     {t:"He becomes a citizen after 90 days.", why:"Citizenship requires birth rules or naturalisation, not a short visit."},
     {t:"He is automatically a refugee.", why:"Refugee status depends on a well-founded fear of persecution, not on working."}]},
   /* ---- Lesson 2 ---- */
   {id:"e2u11-q10", lesson:"e2u11-l2", level:1, q:"What does jus sanguinis mean?", options:[
     {t:"Citizenship passed from a parent to a child, wherever the child is born", ok:true, why:"Correct: “right of blood”."},
     {t:"Citizenship given to anyone born on the territory", why:"That is jus soli, “right of the soil”."},
     {t:"Citizenship gained after years of residence", why:"That is naturalisation."},
     {t:"Citizenship of two countries at once", why:"That is dual citizenship."}]},
   {id:"e2u11-q11", lesson:"e2u11-l2", level:2, q:"Lucía’s parents are visiting Mexico when she is born there. Neither parent is Mexican or a diplomat. What is most likely?", options:[
     {t:"She is Mexican by birth, because Mexico, like most countries in the Americas, follows jus soli.", ok:true, why:"Right. Birth on the territory is enough in most of the Americas, with narrow exceptions such as diplomats’ children."},
     {t:"She can’t be Mexican because her parents aren’t.", why:"That would be true under pure jus sanguinis, but Mexico uses jus soli."},
     {t:"She must live in Mexico for ten years first.", why:"Jus soli gives citizenship at birth, without a residence period."},
     {t:"She is automatically stateless.", why:"She gets Mexican citizenship at birth, and may also get her parents’ by descent."}]},
   {id:"e2u11-q12", lesson:"e2u11-l2", level:1, q:"Since 1983, what decides whether a child born in the United Kingdom is British at birth?", options:[
     {t:"Whether a parent is British or settled in the UK", ok:true, why:"Correct. The British Nationality Act 1981, in force from 1983, made UK birthright conditional."},
     {t:"Birth in the UK alone, without conditions", why:"That was the rule before 1983."},
     {t:"A citizenship test taken by the child", why:"Children don’t take tests to gain citizenship at birth."},
     {t:"Whether the child is born in a hospital", why:"The place within the country doesn’t matter; parents’ status does."}]},
   {id:"e2u11-q13", lesson:"e2u11-l2", level:2, q:"Which list gives typical requirements for naturalisation?", options:[
     {t:"Years of lawful residence, language ability, civics knowledge and good character", ok:true, why:"Correct. Details vary by country, but these are the common elements."},
     {t:"Being born in the country", why:"Birth gives citizenship through jus soli, not naturalisation."},
     {t:"Owning a house and a car", why:"Property ownership isn’t a standard requirement, though some states ask for means of support."},
     {t:"Approval by the UN", why:"Naturalisation is decided by each state."}]},
   {id:"e2u11-q14", lesson:"e2u11-l2", level:3, q:"A child is born in a country without jus soli, to parents whose own country passes citizenship only to children born on its territory. Which concern does this raise?", options:[
     {t:"The child may be stateless, because neither law covers them.", ok:true, why:"Right. Gaps between nationality laws are a known cause of statelessness, which is why safeguards exist."},
     {t:"The child will have two citizenships.", why:"That needs both rules to apply; here neither does."},
     {t:"The child will be a refugee.", why:"Statelessness and refugee status are different; this child hasn’t fled persecution."},
     {t:"There is no concern: every child has a citizenship.", why:"Millions of people are stateless, often because of gaps like this."}]},
   {id:"e2u11-q15", lesson:"e2u11-l2", level:1, q:"What did Tomas Hammar mean by “denizens”?", options:[
     {t:"Long-term residents who have many rights but not full citizenship", ok:true, why:"Correct. His 1990 book described them as between guests and citizens."},
     {t:"People with two citizenships", why:"That is dual citizenship."},
     {t:"Tourists on short visits", why:"Denizens are long-term residents, not short-term visitors."},
     {t:"People with no nationality", why:"That is statelessness."}]},
   {id:"e2u11-q16", lesson:"e2u11-l2", level:2, q:"Which statement about dual citizenship is accurate as of 2026?", options:[
     {t:"Most countries accept it in some cases; China does not recognise it, and India offers an overseas status instead.", ok:true, why:"Right. The trend is towards acceptance, with important exceptions."},
     {t:"International law forbids it.", why:"No treaty forbids it; each state decides."},
     {t:"Germany still forbids it in all cases.", why:"Germany has generally accepted dual citizenship since June 2024."},
     {t:"No country in Africa allows it.", why:"Kenya (since 2010) and Ghana are among African countries that allow it."}]},
   {id:"e2u11-q17", lesson:"e2u11-l2", level:3, q:"Mei has lived in a country for 15 years as a permanent resident. She uses public health care, works and pays taxes, but cannot vote in national elections. Which statement best describes her position?", options:[
     {t:"She is a denizen: secure residence and many rights, but not full citizenship.", ok:true, why:"Right. Hammar’s concept fits; whether she should get the vote is a normative debate."},
     {t:"She is a citizen because she pays taxes.", why:"Paying taxes doesn’t make someone a citizen."},
     {t:"She is stateless.", why:"She presumably has a nationality elsewhere; statelessness means none at all."},
     {t:"She is an asylum seeker.", why:"Nothing suggests she has asked for international protection."}]},
   {id:"e2u11-q18", lesson:"e2u11-l2", level:2, q:"What happened to Germany’s naturalisation rules in 2024–25?", options:[
     {t:"A 2024 reform cut the usual residence period to five years and accepted dual citizenship; a three-year fast route it added was abolished in October 2025.", ok:true, why:"Correct. The five-year rule and acceptance of dual citizenship remained."},
     {t:"Germany introduced unconditional jus soli for all children born there.", why:"Germany’s birthright rule depends on a parent’s lawful residence."},
     {t:"Germany banned naturalisation.", why:"It changed the rules but didn’t ban naturalisation."},
     {t:"Germany required ten years of residence.", why:"The usual requirement became five years, not ten."}]},
   /* ---- Lesson 3 ---- */
   {id:"e2u11-q19", lesson:"e2u11-l3", level:1, q:"What did the 1967 Protocol change?", options:[
     {t:"It removed the 1951 Convention’s limits to events before 1951 and the option to cover only Europe.", ok:true, why:"Correct. It made the refugee definition universal in time and place."},
     {t:"It created UNHCR.", why:"UNHCR was created by the General Assembly in 1950 and began work in 1951."},
     {t:"It added climate change as a reason for refugee status.", why:"No refugee treaty includes climate change as a ground."},
     {t:"It abolished non-refoulement.", why:"Non-refoulement remains the Convention’s cornerstone."}]},
   {id:"e2u11-q20", lesson:"e2u11-l3", level:2, q:"Which of these is **not** one of the five reasons in the 1951 refugee definition?", options:[
     {t:"Poverty", ok:true, why:"Correct. Poverty alone is not a Convention reason. The five are race, religion, nationality, membership of a particular social group and political opinion."},
     {t:"Religion", why:"Religion is one of the five reasons."},
     {t:"Political opinion", why:"Political opinion is one of the five reasons."},
     {t:"Membership of a particular social group", why:"This is one of the five reasons."}]},
   {id:"e2u11-q21", lesson:"e2u11-l3", level:2, q:"Amara fled violence but is still inside her own country. In law, what is she?", options:[
     {t:"An internally displaced person, because she hasn’t crossed an international border", ok:true, why:"Right. Refugee definitions require being outside one’s country; IDPs need protection too, under other rules."},
     {t:"A refugee under the 1951 Convention", why:"The first test, being outside her country, isn’t met."},
     {t:"A stateless person", why:"Nothing suggests she lacks a nationality."},
     {t:"A denizen", why:"Denizenship is about long-term residents abroad without citizenship."}]},
   {id:"e2u11-q22", lesson:"e2u11-l3", level:3, q:"Dmitri asks for asylum at a border. Before examining his claim, officials plan to send him straight back to the country he fled. Why is this a problem?", options:[
     {t:"Non-refoulement protects people while their claims are pending, because a refugee is a refugee before being recognised; rejection at the border counts.", ok:true, why:"Right. Return “in any manner whatsoever” includes rejection at the frontier."},
     {t:"There is no problem: protection only starts after recognition.", why:"Recognition is declaratory; protection from return applies before it."},
     {t:"The problem is only that he lacks a visa.", why:"Lacking a visa doesn’t remove protection from return."},
     {t:"The UN must approve every return.", why:"The issue is the state’s own obligation, not UN approval."}]},
   {id:"e2u11-q23", lesson:"e2u11-l3", level:1, q:"What does the OAU Refugee Convention (1969) add to the 1951 definition?", options:[
     {t:"People fleeing external aggression, occupation, foreign domination or events seriously disturbing public order", ok:true, why:"Correct: Article I(2)."},
     {t:"People moving for better jobs", why:"Economic migration is not covered by either definition."},
     {t:"Only people from Europe", why:"That was an option in the original 1951 Convention, not the OAU Convention."},
     {t:"Nothing: it repeats the 1951 Convention word for word", why:"It keeps the 1951 definition and adds a wider second paragraph."}]},
   {id:"e2u11-q24", lesson:"e2u11-l3", level:2, q:"Which statement about the Cartagena Declaration (1984) is accurate?", options:[
     {t:"It is non-binding, but many Latin American countries have written its wider definition into their national laws.", ok:true, why:"Correct. Its influence comes through national legislation."},
     {t:"It is a binding treaty ratified by every country in the world.", why:"It is a declaration from a regional meeting, not a global treaty."},
     {t:"It narrowed the refugee definition.", why:"It recommends a wider definition, adding generalised violence and massive human rights violations."},
     {t:"It created the European asylum system.", why:"It concerns Latin America, especially Central America."}]},
   {id:"e2u11-q25", lesson:"e2u11-l3", level:1, q:"When did the EU Pact on Migration and Asylum start to apply?", options:[
     {t:"12 June 2026, after adoption in May 2024", ok:true, why:"Correct. The package was adopted in May 2024 and its rules became fully applicable on 12 June 2026."},
     {t:"1951, with the Refugee Convention", why:"The Pact is a 2024 EU reform."},
     {t:"1984, with the Cartagena Declaration", why:"Cartagena is a Latin American declaration."},
     {t:"It has never been adopted.", why:"It was adopted in May 2024 and applies from 12 June 2026."}]},
   {id:"e2u11-q26", lesson:"e2u11-l3", level:3, q:"A recognised refugee returns voluntarily to live permanently in her home country after conditions there change fundamentally. What does the Convention provide?", options:[
     {t:"Her refugee status can cease, because protection is no longer needed (Article 1C).", ok:true, why:"Right. Voluntary re-establishment and fundamental, lasting change are cessation grounds."},
     {t:"She is excluded for having committed a crime.", why:"Exclusion (Article 1F) concerns serious crimes, not returning home."},
     {t:"She remains a refugee forever, whatever happens.", why:"The Convention provides for status to end when protection is no longer needed."},
     {t:"She becomes stateless.", why:"She keeps her nationality; she simply no longer needs international protection."}]},
   {id:"e2u11-q27", lesson:"e2u11-l3", level:2, q:"Why do many experts say even states that haven’t joined the 1951 Convention must respect non-refoulement?", options:[
     {t:"Because it is widely considered customary international law, and human rights treaties such as the Convention against Torture also ban such returns.", ok:true, why:"Right. Customary law binds states regardless of treaty membership."},
     {t:"Because the Security Council passed a resolution requiring it every year.", why:"Its force comes from customary and treaty law, not annual resolutions."},
     {t:"Because all states are automatically parties to the 1951 Convention.", why:"149 states are parties to the Convention or Protocol (November 2026), not all."},
     {t:"Because UNHCR can punish states that break it.", why:"UNHCR supervises and advises; it doesn’t punish states."}]},
   /* ---- Lesson 4 ---- */
   {id:"e2u11-q28", lesson:"e2u11-l4", level:1, q:"Who carries out most refugee status determination worldwide?", options:[
     {t:"National governments, through asylum authorities and courts", ok:true, why:"Correct. UNHCR does it in some countries without a working national system."},
     {t:"The UN Security Council", why:"The Security Council doesn’t decide individual claims."},
     {t:"Airlines", why:"Airlines check documents; they don’t decide asylum claims."},
     {t:"The International Court of Justice", why:"The ICJ decides disputes between states, not individual asylum claims."}]},
   {id:"e2u11-q29", lesson:"e2u11-l4", level:2, q:"What does prima facie recognition mean?", options:[
     {t:"Recognising a whole group as refugees on first appearance, without full individual interviews, when the reasons for flight are clear", ok:true, why:"Correct. It is common in large movements, especially in Africa."},
     {t:"Refusing all claims from a country", why:"It is a way of recognising, not refusing."},
     {t:"Recognising someone only after ten years", why:"It is fast, group-based recognition."},
     {t:"Granting citizenship at birth", why:"That is a citizenship rule, unrelated to RSD."}]},
   {id:"e2u11-q30", lesson:"e2u11-l4", level:3, q:"Hana faces a real risk of serious harm from indiscriminate violence in an armed conflict at home, but no one targets her for any Convention reason. Under EU law, which status fits best?", options:[
     {t:"Subsidiary protection, a form of complementary protection", ok:true, why:"Right. EU subsidiary protection covers serious individual threats from indiscriminate violence in armed conflict."},
     {t:"Refugee status under the 1951 Convention", why:"Without one of the five reasons, the 1951 definition isn’t met as described."},
     {t:"No protection at all", why:"Complementary protection exists precisely for cases like this."},
     {t:"Naturalisation", why:"Naturalisation is a route to citizenship, not protection from return."}]},
   {id:"e2u11-q31", lesson:"e2u11-l4", level:1, q:"What are the three durable solutions?", options:[
     {t:"Voluntary repatriation, local integration and resettlement", ok:true, why:"Correct. Each ends with a secure status: at home, in the host country or in a third country."},
     {t:"Detention, deportation and deterrence", why:"These are control measures, not solutions for refugees."},
     {t:"Visas, passports and permits", why:"These are documents, not durable solutions."},
     {t:"Jus soli, jus sanguinis and naturalisation", why:"These are citizenship rules."}]},
   {id:"e2u11-q32", lesson:"e2u11-l4", level:2, q:"Which description of resettlement is accurate?", options:[
     {t:"The selected transfer of refugees from a first country of asylum to a third country that agrees to admit them permanently", ok:true, why:"Correct. UNHCR usually identifies people; the receiving state decides."},
     {t:"Returning refugees to their country of origin", why:"That is voluntary repatriation."},
     {t:"Building new houses in a refugee camp", why:"Resettlement means moving to a third country."},
     {t:"Moving within one’s own country after a disaster", why:"That is internal displacement."}]},
   {id:"e2u11-q33", lesson:"e2u11-l4", level:3, q:"About 40,000 refugees of one nationality have lived in a low-income host country for seven years. How would UNHCR classify this?", options:[
     {t:"As a protracted refugee situation", ok:true, why:"Right: 25,000 or more refugees of the same nationality, in exile for five or more consecutive years in a low- or middle-income host country."},
     {t:"As temporary protection", why:"That is a legal status for mass arrivals, not a description of long exile."},
     {t:"As a resettlement quota", why:"Resettlement is a solution, not a classification of the situation."},
     {t:"As cessation", why:"Cessation means refugee status has ended."}]},
   {id:"e2u11-q34", lesson:"e2u11-l4", level:1, q:"How did the UN General Assembly vote on affirming the Global Compact on Refugees on 17 December 2018?", options:[
     {t:"181 in favour, 2 against (the United States and Hungary), 3 abstentions", ok:true, why:"Correct. The Dominican Republic, Eritrea and Libya abstained."},
     {t:"Unanimously", why:"Two states voted against and three abstained."},
     {t:"152 in favour, 5 against, 12 abstentions", why:"That was the vote on the Global Compact for Migration two days later."},
     {t:"It was never put to the General Assembly.", why:"The Assembly affirmed it on 17 December 2018."}]},
   {id:"e2u11-q35", lesson:"e2u11-l4", level:2, q:"What do UNHCR’s 2012 Detention Guidelines say about detaining asylum seekers?", options:[
     {t:"Seeking asylum is not unlawful, and detention should be a necessary and proportionate last resort.", ok:true, why:"Correct. They also encourage alternatives to detention."},
     {t:"All asylum seekers should be detained until a decision.", why:"The guidelines say the opposite: detention should be exceptional."},
     {t:"Detention is a punishment for irregular entry.", why:"Immigration detention is administrative, and Article 31 limits penalties for irregular entry."},
     {t:"Children should be detained with priority.", why:"UNHCR’s position is that children should not be detained for immigration purposes."}]},
   {id:"e2u11-q36", lesson:"e2u11-l4", level:3, q:"A student essay says: “Externalisation obviously works and everyone who opposes it is naive.” What is the main weakness?", options:[
     {t:"It states a contested claim as fact and dismisses the other side; researchers disagree about deterrence, and critics raise legal and human rights concerns.", ok:true, why:"Right. A fair account gives evidence and arguments on each side."},
     {t:"It is too short.", why:"Length isn’t the issue; one-sidedness is."},
     {t:"It uses the word “externalisation”, which is not a real term.", why:"It is a standard term in migration research."},
     {t:"Nothing: it is a neutral summary.", why:"Words like “obviously” and “naive” take a side."}]},
   /* ---- Lesson 5 ---- */
   {id:"e2u11-q37", lesson:"e2u11-l5", level:1, q:"Which statement about the Global Compact for Migration is accurate?", options:[
     {t:"It is non-binding, has 23 objectives and reaffirms states’ sovereign right to set their migration policy.", ok:true, why:"Correct. It was endorsed by the General Assembly on 19 December 2018 as a political framework, not a treaty."},
     {t:"It is a treaty that obliges states to accept migrants.", why:"It is non-binding and sets no obligation to admit."},
     {t:"It covers only refugees.", why:"It covers migration in all its forms; refugees have their own compact."},
     {t:"It was adopted in 1990.", why:"It dates from December 2018; 1990 is the year of the Migrant Workers Convention."}]},
   {id:"e2u11-q38", lesson:"e2u11-l5", level:2, q:"What is striking about who has ratified the UN Migrant Workers Convention?", options:[
     {t:"Its parties (60 as of November 2026) are mostly countries of origin; the main destination countries in Western Europe, the United States, Canada and the Gulf have not ratified it.", ok:true, why:"Correct. Scholars offer several explanations for this pattern."},
     {t:"Every UN member has ratified it.", why:"It has 60 parties, far fewer than the UN’s membership."},
     {t:"Only destination countries have ratified it.", why:"It is the reverse: mostly countries of origin."},
     {t:"It has never entered into force.", why:"It entered into force on 1 July 2003."}]},
   {id:"e2u11-q39", lesson:"e2u11-l5", level:1, q:"Under the classic kafala system, what was a worker’s legal residence tied to?", options:[
     {t:"A sponsor, usually the employer", ok:true, why:"Correct. Changing jobs or leaving could need the sponsor’s permission."},
     {t:"The UN", why:"Kafala is a national system in some Middle Eastern states."},
     {t:"The worker’s trade union", why:"Residence depended on the sponsor, not a union."},
     {t:"Nothing: workers had full freedom to change jobs", why:"Restrictions on changing jobs were a central feature."}]},
   {id:"e2u11-q40", lesson:"e2u11-l5", level:2, q:"What did Qatar’s laws of 30 August 2020 do?", options:[
     {t:"Let workers change jobs without an employer’s no objection certificate and set a minimum wage for all workers", ok:true, why:"Correct. The ILO said this effectively dismantled kafala; enforcement has remained a concern for rights groups."},
     {t:"Introduced kafala for the first time", why:"Kafala existed long before; these laws reformed it."},
     {t:"Banned all foreign workers", why:"The laws changed workers’ rights; they didn’t ban migration."},
     {t:"Ratified the UN Migrant Workers Convention", why:"Qatar has not ratified that convention."}]},
   {id:"e2u11-q41", lesson:"e2u11-l5", level:3, q:"Priya is an Irish citizen. She moves to Belgium for a job, and on a later trip drives from Belgium into the Netherlands without a passport check. Which arrangements does she use?", options:[
     {t:"EU free movement for the job, and the Schengen area for the check-free drive", ok:true, why:"Right. Ireland is outside Schengen, but Belgium and the Netherlands are both in it, and EU free movement gives her the right to work in Belgium."},
     {t:"Schengen for both, because Ireland is in Schengen", why:"Ireland is in the EU but not in Schengen. Her right to work comes from EU free movement."},
     {t:"The ECOWAS protocol", why:"ECOWAS is a West African regime."},
     {t:"Naturalisation in Belgium", why:"She doesn’t need to naturalise to work in another EU country."}]},
   {id:"e2u11-q42", lesson:"e2u11-l5", level:2, q:"What is the status of the African Union Free Movement Protocol (adopted January 2018)?", options:[
     {t:"It is not in force: it needs 15 ratifications and had 4 by mid-2026.", ok:true, why:"Correct. Many states have signed it, but few have ratified."},
     {t:"It has been in force across Africa since 2018.", why:"It needs 15 ratifications to enter into force, and had 4 by mid-2026."},
     {t:"It was replaced by the Schengen area.", why:"Schengen is European and unrelated."},
     {t:"It applies only to ECOWAS members.", why:"It is an AU protocol for the whole continent; ECOWAS has its own 1979 protocol."}]},
   {id:"e2u11-q43", lesson:"e2u11-l5", level:1, q:"What is the SDG target for remittance costs?", options:[
     {t:"By 2030, less than 3 per cent, with no corridor above 5 per cent", ok:true, why:"Correct: SDG target 10.c."},
     {t:"Zero cost by 2020", why:"The target is under 3 per cent by 2030."},
     {t:"Under 10 per cent by 2050", why:"The target is stricter and sooner."},
     {t:"There is no target", why:"SDG 10.c sets one."}]},
   {id:"e2u11-q44", lesson:"e2u11-l5", level:3, q:"Fatima compares two ways to send $200. Option A: $4 fee and a rate 4 per cent worse than the market rate. Option B: $10 fee at the market rate. Which is cheaper?", options:[
     {t:"B: it costs $10 (5 per cent), while A costs $4 + $8 = $12 (6 per cent).", ok:true, why:"Right. The exchange-rate margin on A adds $8, making it dearer despite the lower fee."},
     {t:"A, because its fee is lower.", why:"The fee is only part of the cost; A’s worse exchange rate costs $8 more."},
     {t:"They cost the same.", why:"A costs $12 and B costs $10."},
     {t:"It can’t be worked out.", why:"Fee plus margin gives the total: $12 for A, $10 for B."}]},
   {id:"e2u11-q45", lesson:"e2u11-l5", level:2, q:"Why are recorded remittance figures thought to understate the true total?", options:[
     {t:"Money carried by hand or sent through informal networks isn’t fully counted.", ok:true, why:"Correct. Recorded figures cover formal channels; the latest year is also an estimate, revised later."},
     {t:"Because banks deliberately hide all transfers", why:"Formal transfers are recorded; the gap comes mainly from informal channels."},
     {t:"Because remittances are counted only every ten years", why:"The World Bank publishes estimates at least yearly."},
     {t:"They don’t: figures are exact.", why:"Measurement gaps are well documented."}]}
  ]
});
