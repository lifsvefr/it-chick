/* International Studies · Unit 10 · International law in depth */
ICA.addUnit({
  id:"e4u10", track:"e4", n:10, title:"International law in depth", icon:"⚖️",
  blurb:"How international law is made, why states mostly keep it, and where it is fought over. Treaties, custom, jus cogens and soft law; rival theories of compliance; the law on the use of force and its hardest cases; the law of the sea and territory, including the South China Sea arbitration; and international criminal justice from Nuremberg to the ICC, with the TWAIL and feminist critiques.",
  goals:[
    "Explain how treaties, custom, general principles, jus cogens and soft law work, using the Vienna Convention and leading ICJ cases",
    "Compare the main theories of why states comply with international law (managerial, enforcement, legitimacy, transnational legal process, rational choice) and the evidence for each",
    "Apply the Charter rules on force and self-defence to real cases, and describe contested cases neutrally with each side’s legal argument",
    "Use UNCLOS to read maritime disputes, including the 2016 South China Sea arbitration and the positions of both parties",
    "Explain how territory is acquired and kept in law, and what uti possidetis does",
    "Trace international criminal justice from Nuremberg and Tokyo to the ICC and hybrid courts, and weigh the critiques from TWAIL, feminist and other scholars"
  ],
  read:[
    {book:"pilmpa", where:"Chapter 6 “Sources of International Law”, Chapter 13 “Collective Security and the Prohibition of the Use of Force”, Chapter 15 “Law of the Sea” and Chapter 22 “International Criminal Law”", note:"An open-access, multi-perspective textbook written by scholars from many regions. Read the matching chapter after each lesson; Chapter 3 “Approaches” adds the critical theories of Lesson 5."},
    {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach)", note:"The short primer chapter. Reread it first if the basics feel rusty."},
    {book:"ospol", where:"Chapter 15, section 15.2 “International Law”", note:"A gentle refresher on treaties, custom and the courts."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u10-l1", title:"How international law is made: treaties, custom and beyond", minutes:60,
   hook:{q:"In 1969 the International Court of Justice asked whether West Germany was bound by the “equidistance” rule for dividing the North Sea seabed. It had signed, but not ratified, the 1958 treaty containing the rule. What did the Court decide?", options:["It was bound by the treaty, because it had signed it","It was bound anyway, because the rule had become customary law","It was not bound: the treaty did not apply to it, and the rule had not become custom","It was bound, because the rule was jus cogens"], answer:2, reveal:"**It was not bound.** In the *North Sea Continental Shelf* cases the Court held that signing alone did not bind West Germany, and that state practice was not “extensive and virtually uniform” enough, nor backed by a sense of legal obligation, to make equidistance a rule of custom. Those few pages are still the classic statement of how custom is made. This lesson goes beneath the primer’s list of sources to how lawyers actually prove a rule."},
   goals:[
     "Explain the relationship between the sources in Article 38 and why there is (almost) no hierarchy among them",
     "Use the Vienna Convention on the Law of Treaties to explain pacta sunt servanda, interpretation, reservations and termination",
     "Prove or disprove a customary rule using state practice and opinio juris, including the persistent objector rule",
     "Distinguish jus cogens from obligations erga omnes, with a real case",
     "Explain soft law and the legalisation debate, with its critics"
   ],
   learn:[
    {h:"From a list of sources to a lawyer’s toolkit", body:[
      {lead:"A judge in The Hague cannot look up the answer in a world statute book. So how does anyone know what the law is?"},
      "A one-line reminder from the IR primer: Article 38(1) of the ICJ Statute lists [[treaty|treaties]], [[customary-international-law|custom]] and [[general-principles-of-law|general principles]], with court decisions and scholars’ writings as “subsidiary means” for finding the law (see {{international-law}}). This lesson asks how each source is proved and argued over.",
      "Three points matter in a seminar. First, the list is **not a ranking**. A treaty and a customary rule have equal force, and conflicts are settled by maxims: the more specific rule prevails (*lex specialis*) and the later one prevails (*lex posterior*). Second, there are two real exceptions: obligations under the UN Charter prevail over other treaties (Article 103), and [[jus-cogens|jus cogens]] norms prevail over everything. Third, much of the law is drafted by the [[international-law-commission|International Law Commission]] (ILC), a body of independent experts the General Assembly created in 1947 to codify and develop the law."
    ]},
    {h:"Treaties in depth: the Vienna Convention", body:[
      "The [[vclt|Vienna Convention on the Law of Treaties]] (VCLT) was adopted in 1969 and entered into force in 1980. Many of its rules are also treated as custom, which is why they are applied even to states, such as the United States, that signed but never ratified it.",
      {table:[
        ["Article","Rule","Why it matters"],
        ["26","[[pacta-sunt-servanda|Pacta sunt servanda]]: treaties in force must be performed in good faith","The foundation of treaty law"],
        ["27","A state cannot use its own law to excuse a breach","A parliament’s vote does not change an international obligation"],
        ["31–32","Interpret by ordinary meaning, in context, in light of object and purpose; drafting history is a supplement","Most treaty disputes are about meaning"],
        ["52","A treaty imposed by the threat or use of force is void","Economic pressure is not covered: newly independent states tried and failed to add it"],
        ["60, 62","A material breach, or (rarely) a fundamental change of circumstances, can end a treaty","Courts read these exits narrowly"]
      ]},
      "The narrow exits were tested in *Gabčíkovo–Nagymaros* (Hungary/Slovakia, 1997), about a dam project on the Danube. Hungary argued that environmental concerns and political change after 1989 allowed it to end the treaty. The ICJ disagreed and told both states to negotiate. The lesson for students: a treaty is hard to escape unilaterally, even for good-sounding reasons.",
      "Article 52 connects to history. The [[unequal-treaty|unequal treaties]] imposed on Qing China and Meiji Japan (see {{world-in-1900}}) were obtained by pressure that the 1969 rule would not clearly cover. At the Vienna conference, states from Asia, Africa and Latin America won only a separate, non-binding declaration condemning military, political or economic coercion."
    ]},
    {h:"Reservations: joining with exceptions", body:[
      "A [[treaty-reservation|reservation]] is a statement by which a state, when joining a treaty, excludes or modifies a provision for itself. Reservations let more states join, at the cost of a patchier treaty.",
      "The modern rule comes from the ICJ’s 1951 advisory opinion on *Reservations to the Genocide Convention*. Before it, the traditional view was that a reservation needed every other party’s acceptance. The Court instead asked whether the reservation was **compatible with the object and purpose** of the treaty. The VCLT (Article 19) adopted that test: a reservation is not allowed if the treaty forbids it or it defeats the treaty’s purpose. Other parties can object.",
      "Human rights treaties make this hard. The Convention on the Elimination of All Forms of Discrimination against Women (CEDAW) has attracted many reservations, some to its central articles, and its expert committee has called those incompatible. In 1994 the UN Human Rights Committee went further (General Comment 24), claiming it could judge reservations to the civil and political rights covenant itself. The United States, the United Kingdom and France objected that only states can decide what they have consented to. The question is still debated: **who decides what a state agreed to?**",
      {tip:"Don’t confuse a reservation with an **interpretative declaration**, which only states how a party understands a clause. Lawyers look at substance, not the label."}
    ]},
    {h:"Custom: practice plus belief", body:[
      "Custom needs two elements, which the ILC confirmed in its 2018 conclusions on identifying customary law: a **general practice** and its acceptance as law ([[opinio-juris|opinio juris]]).",
      {fig:'<svg viewBox="0 0 340 300"><text x="206" y="18" text-anchor="middle">Believed legally required?</text><text class="s" x="140" y="42" text-anchor="middle">yes</text><text class="s" x="272" y="42" text-anchor="middle">no</text><text x="36" y="96" text-anchor="middle">General</text><text x="36" y="114" text-anchor="middle">practice</text><text x="36" y="198" text-anchor="middle">Little</text><text x="36" y="216" text-anchor="middle">practice</text><rect class="d-sage" x="76" y="54" width="128" height="96" rx="8" stroke-width="2"/><text x="140" y="96" text-anchor="middle">Custom</text><text class="s" x="140" y="116" text-anchor="middle">a binding rule</text><rect class="d-gold" x="208" y="54" width="128" height="96" rx="8" stroke-width="2"/><text x="272" y="96" text-anchor="middle">Courtesy</text><text class="s" x="272" y="116" text-anchor="middle">habit or comity</text><rect class="d-lup" x="76" y="156" width="128" height="96" rx="8" stroke-width="2"/><text x="140" y="198" text-anchor="middle">A claim</text><text class="s" x="140" y="218" text-anchor="middle">a rule in the making?</text><rect class="d-panel" x="208" y="156" width="128" height="96" rx="8" stroke-width="2"/><text x="272" y="198" text-anchor="middle">No rule</text><text class="s" x="272" y="218" text-anchor="middle">nothing yet</text><text class="s" x="170" y="284" text-anchor="middle">Only the top-left box is law (North Sea, 1969)</text></svg>', alt:"A two-by-two grid. Columns ask whether states believe the conduct is legally required (yes or no); rows ask whether there is general practice or little practice. General practice plus belief gives custom, a binding rule. Practice without belief gives courtesy or habit. Belief without practice gives a claim, perhaps a rule in the making. Neither gives no rule.", cap:"Custom needs both elements. Most arguments are about whether the evidence fills the top-left box."},
      "*North Sea* (1969) asked for practice that is “extensive and virtually uniform”, including by **specially affected states**, but said it need not last long. *Nicaragua v. United States* (1986) added realism: practice need not be perfect, and when a state breaks a rule but justifies itself by the rule’s own exceptions, that confirms the rule rather than weakening it.",
      "Two refinements come up often. A [[persistent-objector|persistent objector]], a state that has clearly objected from the start, is not bound by a new customary rule; the *Anglo-Norwegian Fisheries* case (1951) is the usual authority, though some scholars doubt the doctrine has much practice behind it. And custom can be **regional**: in the *Asylum* case (1950) Colombia tried, and failed, to prove a Latin American custom of diplomatic asylum binding on Peru.",
      {ex:"Claim: “Coastal states have rights over the continental shelf next to their coasts.”\n1. Practice: the US Truman Proclamation (1945) was followed within a few years by many similar claims, and few protests.\n2. Opinio juris: states framed their claims as rights, and others treated them so.\n3. Result: by *North Sea* (1969) the Court treated the basic rule as custom, about two decades after it began. Speed alone does not stop custom forming.", label:"Worked example: proving a customary rule"}
    ]},
    {h:"Jus cogens and erga omnes", body:[
      "The primer defined [[jus-cogens|jus cogens]]: norms no treaty may override (VCLT Articles 53 and 64). In 2022 the ILC adopted conclusions on such norms with a non-exhaustive list, including the prohibitions of aggression, genocide, crimes against humanity, slavery, torture, and racial discrimination and apartheid.",
      "A different idea is often confused with it. Obligations [[erga-omnes|erga omnes]] are owed “towards the international community as a whole”, a phrase from the ICJ’s *Barcelona Traction* judgment (1970). Jus cogens is about **hierarchy** (which rule wins); erga omnes is about **standing** (who may complain).",
      "Standing became concrete in 2019, when The Gambia sued Myanmar under the Genocide Convention over the treatment of the Rohingya. The Gambia was not directly injured, but the Court accepted that every party to the Convention has a common interest in compliance (obligations *erga omnes partes*): provisionally when it ordered provisional measures in January 2020, and finally in its 2022 judgment on preliminary objections. Sceptics note the limits: in *Armed Activities* (DRC v. Rwanda, 2006) the Court held that a jus cogens norm does not by itself give the Court jurisdiction."
    ]},
    {h:"Soft law and the legalisation debate", body:[
      "[[soft-law|Soft law]] means instruments that are not legally binding but still shape behaviour: declarations, codes, guidelines and standards. Examples include the Helsinki Final Act (1975), the Rio Declaration (1992), the UN Guiding Principles on Business and Human Rights (2011), and the ASEAN–China Declaration on the Conduct of Parties in the South China Sea (2002), which Lesson 4 returns to.",
      "IR scholars turned this into a theory. In a 2000 special issue of *International Organization*, Kenneth Abbott, Robert Keohane, Andrew Moravcsik, Anne-Marie Slaughter and Duncan Snidal described [[legalization|legalisation]] along three dimensions: **obligation** (how binding), **precision** (how exact) and **delegation** (whether third parties such as courts interpret and apply it). Abbott and Snidal argued that softer forms are often a rational choice: they cost less to negotiate, cost less sovereignty and can be adjusted as knowledge grows.",
      {table:[
        ["","Hard law","Soft law"],
        ["Binding?","Yes","No"],
        ["Strengths","Credible commitments, courts can apply it","Fast, flexible, easier to join"],
        ["Risks","Slow, states may refuse to join","Easy to ignore; blurs what is law"]
      ]},
      "Critics push back from two sides. Prosper Weil’s article “Towards Relative Normativity in International Law?” (1983) warned that soft law and jus cogens together blur the line between law and non-law. Others worry about the [[fragmentation-of-international-law|fragmentation]] of international law into specialised regimes (trade, human rights, environment), each with its own experts and courts, the subject of an ILC study finalised by Martti Koskenniemi in 2006.",
      {terms:["international-law-commission","vclt","pacta-sunt-servanda","treaty-interpretation","treaty-reservation","state-practice","persistent-objector","erga-omnes","soft-law","legalization","fragmentation-of-international-law"]}
    ]}
   ],
   try:[
    {id:"e4u10-l1-x1", type:"mcq", q:"A treaty between two states says one thing; a later customary rule says another. What is the starting point for deciding which applies?", options:[
      {t:"Neither automatically wins: lawyers use maxims such as the more specific rule and the later rule, unless jus cogens or Article 103 of the Charter is involved.", ok:true, why:"Right. Article 38 is not a ranking. Hierarchy enters only through jus cogens and the Charter’s Article 103."},
      {t:"The treaty always wins, because Article 38 lists treaties first.", why:"The order in Article 38 is not a ranking; treaties and custom have equal force."},
      {t:"Custom always wins, because it binds all states.", why:"Custom’s wider reach does not make it superior; two states can agree a special treaty rule between themselves (unless it conflicts with jus cogens)."},
      {t:"The writings of the most respected scholars decide.", why:"Court decisions and scholars’ writings are subsidiary means for identifying law, not a tiebreaker source."}
    ]},
    {id:"e4u10-l1-x2", type:"match", q:"Match each Vienna Convention rule to its article.", pairs:[
      ["Treaties must be performed in good faith","Article 26","Pacta sunt servanda."],
      ["Internal law is no excuse for breach","Article 27","A state’s own law cannot justify failing to perform a treaty."],
      ["Ordinary meaning, context, object and purpose","Article 31","The general rule of interpretation."],
      ["A treaty conflicting with a peremptory norm is void","Article 53","Jus cogens."],
      ["A treaty procured by the threat or use of force is void","Article 52","Coercion of a state."]
    ]},
    {id:"e4u10-l1-x3", type:"sort", q:"Each statement describes a state’s conduct. Does it show **state practice**, **opinio juris**, or **both**?", buckets:["Practice only","Opinio juris only","Both"], items:[
      {t:"Ships of several states regularly salute each other at sea, and every government calls it a courtesy.", b:0, why:"Regular conduct without any sense of legal obligation: practice, but no opinio juris, so no custom."},
      {t:"A foreign ministry states in the UN that “international law requires” a certain rule, but no state has yet acted on it.", b:1, why:"A statement of legal belief with no supporting conduct yet."},
      {t:"Many states release foreign diplomats arrested by mistake, and apologise because “immunity is owed under international law”.", b:2, why:"Consistent conduct plus an explicit sense that it is legally required."},
      {t:"Neighbouring states keep fishing quotas they say they follow only to stay on good terms.", b:0, why:"Conduct explained as goodwill, not legal duty."},
      {t:"Coastal states claim rights over their continental shelf as rights, and others accept the claims as lawful.", b:2, why:"The Truman Proclamation pattern: conduct plus acceptance as law."}
    ]},
    {id:"e4u10-l1-x4", type:"mcq", q:"State A joins a human rights treaty with a reservation excluding the treaty’s central non-discrimination article. Under the Vienna Convention, what is the main problem?", options:[
      {t:"A reservation incompatible with the object and purpose of the treaty is not permitted.", ok:true, why:"Yes. Article 19 bars reservations that defeat the treaty’s purpose, the test from the 1951 Genocide Convention opinion."},
      {t:"Reservations are never allowed to multilateral treaties.", why:"Reservations are generally allowed unless the treaty forbids them or they defeat its purpose."},
      {t:"The reservation needs the approval of the UN Secretary-General.", why:"The Secretary-General acts as depositary, circulating reservations; it does not approve them."},
      {t:"Only the ICJ can decide whether any reservation is valid.", why:"Other parties can object, and treaty bodies have claimed a role; who finally decides is debated, but it is not only the ICJ."}
    ]},
    {id:"e4u10-l1-x5", type:"spot", q:"A student’s seminar notes on custom. Tap each claim that is **wrong**.", ask:"wrong", parts:[
      {t:"Custom needs both general state practice and opinio juris.", flag:false, why:"Correct: the two-element test, confirmed by the ILC in 2018."},
      " ",
      {t:"A rule cannot become custom unless the practice has lasted at least a century.", flag:true, why:"Wrong. *North Sea* (1969) said a short period is not a bar if practice is extensive and virtually uniform."},
      " ",
      {t:"A state that objected clearly and consistently from the start may not be bound by a new customary rule.", flag:false, why:"Correct: the persistent objector rule, usually traced to *Anglo-Norwegian Fisheries* (1951), though debated."},
      " ",
      {t:"Every breach of a customary rule weakens it, so frequent violations end it.", flag:true, why:"Wrong. *Nicaragua* (1986) held that a breach justified by appeal to the rule’s exceptions tends to confirm the rule."},
      " ",
      {t:"Custom can exist among a group of states in one region.", flag:false, why:"Correct: regional custom is possible, as the *Asylum* case (1950) discussed, though Colombia failed to prove it."}
    ]},
    {id:"e4u10-l1-x6", type:"mcq", q:"Why could The Gambia bring a case against Myanmar about the Rohingya when it was not directly harmed?", options:[
      {t:"Obligations under the Genocide Convention are owed to all its parties (erga omnes partes), so any party has standing.", ok:true, why:"Right. The ICJ accepted this common-interest reasoning in 2020."},
      {t:"Because genocide is jus cogens, the ICJ automatically has jurisdiction over every case about it.", why:"The Court has said jus cogens does not by itself create jurisdiction (*Armed Activities*, 2006). Jurisdiction here came from the Convention’s Article IX."},
      {t:"The Security Council referred the case to the ICJ.", why:"The Council did not refer it; states brought it, and the ICJ hears cases between states that consented."},
      {t:"The Gambia is a neighbour of Myanmar.", why:"The Gambia is in West Africa. Its standing came from the treaty, not geography."}
    ]},
    {id:"e4u10-l1-x7", type:"sort", q:"Is each instrument hard law (binding) or soft law (non-binding)?", buckets:["Hard law","Soft law"], items:[
      {t:"The Vienna Convention on the Law of Treaties (1969)", b:0, why:"A treaty, binding on its parties."},
      {t:"The Helsinki Final Act (1975)", b:1, why:"A political commitment by the states at the conference, deliberately not a treaty."},
      {t:"The UN Guiding Principles on Business and Human Rights (2011)", b:1, why:"Endorsed by the Human Rights Council but not a treaty."},
      {t:"The Rome Statute of the ICC (1998)", b:0, why:"A treaty, binding on its states parties."},
      {t:"The 2002 ASEAN–China Declaration on the Conduct of Parties in the South China Sea", b:1, why:"A declaration; the parties have long negotiated a separate code of conduct."},
      {t:"The UN Convention on the Law of the Sea (1982)", b:0, why:"A treaty with compulsory dispute settlement."}
    ]}
   ],
   apply:{
    intro:"Read the law the way lawyers do. Everything here is free on official UN websites and needs no account.",
    tasks:[
     {t:"Read three articles of the Vienna Convention", how:[
       "Search for “Vienna Convention on the Law of Treaties” on the UN Treaty Collection or the UN’s legal affairs site (legal.un.org).",
       "Read Articles 26, 31 and 53 in full.",
       "Rewrite each in one plain sentence, then write one question each article leaves open."
     ], write:"Article 26 in my words… Open question… Article 31… Article 53…"},
     {t:"Test a customary rule", how:[
       "Pick a rule you think is custom, for example diplomatic immunity, the 12-mile territorial sea, or the ban on torture.",
       "List two pieces of evidence of state practice and two of opinio juris you could look for (statements, laws, court cases, votes).",
       "Say what evidence would count against the rule."
     ], write:"Rule… Practice evidence… Opinio juris evidence… What would count against it…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is soft law law? What would Weil and Abbott and Snidal each say?",
       "2. Should human rights treaty bodies, rather than states, decide whether reservations are valid?",
       "3. Does the persistent objector rule protect weaker states or powerful ones?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Plain-language versions of three VCLT articles, an evidence plan for one customary rule, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 6 “Sources of International Law”", note:"Read it after this lesson: it covers treaties, custom and general principles in more depth, with perspectives from several regions."},
    {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach)", note:"A short refresher on the basics this lesson builds on."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u10-l2", title:"Why states comply: rival theories and the evidence", minutes:60,
   hook:{q:"In 2014 the ICJ ruled that Japan’s whaling programme in the Antarctic, JARPA II, was not “for purposes of scientific research”. What did Japan do?", options:["Ignored the judgment and kept hunting under JARPA II","Stopped JARPA II, later designed a new research programme, and in 2019 left the International Whaling Commission and ended Antarctic whaling","Asked the Security Council to overturn the judgment","Withdrew from the UN"], answer:1, reveal:"**Japan stopped JARPA II** and announced it would abide by the judgment. It then designed a new programme meant to meet the Court’s criteria, and later withdrew from the International Whaling Convention (effective 30 June 2019), ending whaling in the Antarctic and resuming commercial whaling in its own waters. Was that compliance? With the judgment, yes; with the anti-whaling hopes of the applicants, Australia and New Zealand (which intervened), not really. This lesson is about such puzzles: what compliance means, and why states comply at all."},
   goals:[
     "Distinguish compliance, implementation and effectiveness",
     "Explain the managerial model of Chayes and Chayes and the enforcement critique of Downs, Rocke and Barsoom",
     "Explain Franck’s legitimacy theory and Koh’s transnational legal process",
     "Present the sceptical rational-choice view of Goldsmith and Posner, and Guzman’s reply",
     "Use evidence from international courts to judge between the theories"
   ],
   learn:[
    {h:"From reasons to theories", body:[
      {lead:"The IR primer listed reasons states keep the rules: reciprocity, self-interest, reputation, domestic law, habit. Graduate seminars ask a sharper question: which of these actually does the work, and how would we know?"},
      "Recall Louis Henkin’s line from *How Nations Behave* (1968): “almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time.” It is the starting point of the debate, not the end. Before testing it, separate three ideas that are often blurred:",
      {table:[
        ["Concept","Question","Example"],
        ["Compliance","Does behaviour match the rule?","Emissions fall below a treaty cap"],
        ["Implementation","Has the state put the rule into its own law and practice?","A new national emissions law"],
        ["Effectiveness","Did the rule change behaviour or solve the problem?","Would emissions have fallen anyway?"]
      ]},
      "High compliance can mean the law is powerful, or that it asks for little. Every theory below takes a side on that ambiguity. It is also an old jurisprudential worry: the legal philosopher H. L. A. Hart, in *The Concept of Law* (1961), called international law closer to a “primitive” system, with rules but few institutions to make, change and apply them."
    ]},
    {h:"The managerial model", body:[
      "Abram Chayes and Antonia Handler Chayes, in “On Compliance” (*International Organization*, 1993) and *The New Sovereignty* (1995), argued that states have a general **propensity to comply**. Treaties are made by the states that will apply them, officials prefer routine, and defection is costly to plan. When states do break rules, it is usually not a calculated choice. It comes from three sources:",
      {list:["**Ambiguity**: treaty language is vague, so states read it differently.","**Capacity**: a state lacks money, experts or administrative reach to comply.","**Time lag**: big changes, such as cutting a pollutant, take years."]},
      "So the cure is **management**, not punishment: reporting, review, technical help and persuasion. The Chayeses called sovereignty “new” because it now means membership of such regimes, not freedom from them. The Montreal Protocol on the ozone layer is the classic example of the [[managerial-model|managerial model]] in practice: its non-compliance procedure helps states that fall behind, and its Multilateral Fund (1990) pays developing countries’ extra costs of switching chemicals."
    ]},
    {h:"The enforcement critique", body:[
      "George Downs, David Rocke and Peter Barsoom replied in “Is the Good News about Compliance Good News about Cooperation?” (*International Organization*, 1996). Their point is about **selection**. If states mostly sign treaties that require them to do little more than they would do anyway, compliance will be high and mean little. The real test is **depth**: how far a treaty asks states to depart from what they would otherwise do.",
      "Their [[enforcement-model|enforcement model]] predicts that deep cooperation needs credible punishment, because the temptation to defect grows with depth. Managerial tools work for shallow agreements; deeper ones need sanctions, monitoring with teeth, or retaliation.",
      {ex:"Two invented fisheries treaties report 98% compliance.\n• Treaty A caps catches at last year’s level, which every state was already below.\n• Treaty B halves catches.\nThe managerial reading: both work. The enforcement reading: Treaty A’s figure says almost nothing. Treaty B’s figure is impressive, and you should ask what keeps it high (inspections? quotas that can be cut?). Same number, very different evidence.", label:"Worked example: why depth matters"}
    ]},
    {h:"Legitimacy and transnational legal process", body:[
      "A third family asks why rules feel binding. Thomas Franck, in *The Power of Legitimacy Among Nations* (1990), argued that rules exert a [[compliance-pull|compliance pull]] in proportion to their **legitimacy**: their determinacy (clarity), symbolic validation (rituals and signals of authority), coherence (consistency with other rules) and adherence (being made by accepted procedures).",
      "Harold Koh, in “Why Do Nations Obey International Law?” (*Yale Law Journal*, 1997), proposed [[transnational-legal-process|transnational legal process]] (see {{harold-koh}}). Obedience grows through a repeated cycle:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="60" y="12" width="220" height="62" rx="10" stroke-width="2"/><text x="170" y="38" text-anchor="middle">1 Interaction</text><text class="s" x="170" y="58" text-anchor="middle">states, NGOs, courts meet</text><rect class="d-gold" x="60" y="106" width="220" height="62" rx="10" stroke-width="2"/><text x="170" y="132" text-anchor="middle">2 Interpretation</text><text class="s" x="170" y="152" text-anchor="middle">a norm’s meaning is stated</text><rect class="d-sage" x="60" y="200" width="220" height="62" rx="10" stroke-width="2"/><text x="170" y="226" text-anchor="middle">3 Internalisation</text><text class="s" x="170" y="246" text-anchor="middle">into law, politics, habit</text><path class="d-ink" d="M170,74 V102" stroke-width="2" marker-end="url(#ah2)"/><path class="d-ink" d="M170,168 V196" stroke-width="2" marker-end="url(#ah2)"/><path class="d-ink" d="M280,231 H318 V43 H284" fill="none" stroke-width="2" marker-end="url(#ah2)"/><text class="s" x="326" y="140" text-anchor="middle">repeat</text><text class="s" x="170" y="290" text-anchor="middle">Each round makes the norm more</text><text class="s" x="170" y="308" text-anchor="middle">part of how the state works (Koh 1997)</text></svg>', alt:"Three boxes stacked vertically with arrows downward: 1 interaction (states, NGOs and courts meet), 2 interpretation (a norm’s meaning is stated), 3 internalisation (into law, politics and habit). An arrow loops from the bottom back to the top, labelled repeat.", cap:"Koh’s cycle: compliance is learned through repeated contact, not only calculated."},
      "Internalisation can be **social** (the public accepts the norm), **political** (leaders adopt it) or **legal** (courts and statutes build it in). This fits {{constructivism|constructivist}} accounts of norms (see {{norm-dynamics}}). Jutta Brunnée and Stephen Toope’s *Legitimacy and Legality in International Law* (2010) developed a related “interactional” account: law binds when it meets criteria of legality and is sustained by a shared practice."
    ]},
    {h:"The sceptics: rational choice", body:[
      "Jack Goldsmith and Eric Posner’s *The Limits of International Law* (2005) argued that behaviour consistent with international law is usually explained by state interests, not by the law. They named four patterns:",
      {table:[
        ["Pattern","What happens","Does law do the work?"],
        ["Coincidence of interest","States do what they would do anyway","No"],
        ["Coordination","States pick one convention, such as a shipping lane","Little: any focal point would do"],
        ["Cooperation","Mutual restraint is kept while it pays","Only while the payoff lasts"],
        ["Coercion","A stronger state makes a weaker one act","No: power does"]
      ]},
      "Andrew Guzman’s *How International Law Works* (2008) accepted the rational-choice starting point but drew the opposite conclusion: law matters through the “three Rs”, **reputation**, **reciprocity** and **retaliation**, which make breaking a legal promise costlier than breaking a political one. Realists such as Hans Morgenthau would side with the sceptics; liberal institutionalists (see {{neoliberal-institutionalism}}) with Guzman, through the [[shadow-of-the-future|shadow of the future]].",
      {warn:"Don’t present this as “law matters” versus “law doesn’t”. Each theory explains some cases better. A good seminar answer says which mechanism, for which rule, under what conditions."}
    ]},
    {h:"Critical voices: law as argument", body:[
      "Two further traditions question the whole frame. Martti Koskenniemi’s *From Apology to Utopia* (1989) argued that international legal argument swings between two poles: it is either too close to state behaviour, and so an **apology** for power, or too far from it, and so a **utopia** with no grip on reality. On this view, the compliance debate is part of that swing, and law matters less as a cause of behaviour than as the language in which states must justify themselves.",
      "The TWAIL tradition (Lesson 5) asks **who** is asked to comply. Debt conditions, investment rules and non-proliferation demands fall more heavily on some states than on others, while breaches by powerful states often bring few costs. Compliance, in this reading, is a question about hierarchy as well as incentives. Realists put a blunter version: law reflects the distribution of power and gives way when vital interests are at stake (see {{realism}}).",
      "These views explain a puzzle the other theories leave open: why governments put so much effort into legal justification even when they break a rule. Most scholars agree on this much: legal argument shapes what governments can say in public, and so what they can do without paying a price."
    ]},
    {h:"What the evidence shows: courts as a test", body:[
      "International courts let us test the theories, because a judgment is a clear standard. Colter Paulson’s study of ICJ final judgments from 1987 to 2004 (*American Journal of International Law*, 2004) found that most were complied with, though some only partly or slowly. Cases cluster:",
      {list:["**Complied**: after *Pedra Branca* (Malaysia/Singapore, 2008), which gave the island to Singapore and nearby Middle Rocks to Malaysia, the two states set up a joint technical committee to implement it. *Whaling in the Antarctic* (2014) led Japan to stop the programme concerned.","**Resisted**: the United States did not comply with *Nicaragua* (1986). After *Avena* (2004), about Mexican nationals denied consular access, the US Supreme Court held in *Medellín v. Texas* (2008) that the judgment was not directly enforceable in US courts, an example of how domestic law shapes compliance.","**Rejected**: China rejected the 2016 South China Sea arbitral award as made without jurisdiction (Lesson 4)."]},
      "The pattern supports several theories at once: consent cases (where both states agreed to go to court) are complied with more often, which fits both the managerial and selection arguments. When vital interests are at stake, compliance falls, as sceptics predict. For human rights treaties, the evidence debate (Hathaway 2002, Simmons 2009) is covered in the human rights unit.",
      {terms:["managerial-model","enforcement-model","compliance-pull","transnational-legal-process","countermeasures"]}
    ]}
   ],
   try:[
    {id:"e4u10-l2-x1", type:"sort", q:"Is each statement about **compliance**, **implementation** or **effectiveness**?", buckets:["Compliance","Implementation","Effectiveness"], items:[
      {t:"A state’s parliament passes a law creating the offence of torture, as a treaty requires.", b:1, why:"Writing the rule into domestic law is implementation."},
      {t:"A state’s catch stays under its treaty quota this year.", b:0, why:"Behaviour matching the rule is compliance."},
      {t:"Researchers ask whether the ozone layer is recovering because of the Montreal Protocol.", b:2, why:"Whether the rule solved the problem is effectiveness."},
      {t:"A state reports on time to a treaty committee as required.", b:0, why:"Meeting a procedural obligation is compliance."},
      {t:"An analyst asks whether emissions would have fallen anyway, without the treaty.", b:2, why:"Comparing with a counterfactual is an effectiveness question."}
    ]},
    {id:"e4u10-l2-x2", type:"match", q:"Match each work to its argument.", pairs:[
      ["Chayes & Chayes, *The New Sovereignty* (1995)","Non-compliance comes mainly from ambiguity, capacity and time lags; manage it","The managerial model."],
      ["Downs, Rocke & Barsoom (1996)","High compliance may reflect shallow treaties; deep cooperation needs enforcement","The selection and depth critique."],
      ["Franck, *The Power of Legitimacy Among Nations* (1990)","Legitimate rules exert a compliance pull","Determinacy, symbolic validation, coherence, adherence."],
      ["Koh, “Why Do Nations Obey International Law?” (1997)","Interaction, interpretation and internalisation build obedience","Transnational legal process."],
      ["Goldsmith & Posner, *The Limits of International Law* (2005)","Apparent compliance is mostly explained by interests","Coincidence, coordination, cooperation, coercion."]
    ]},
    {id:"e4u10-l2-x3", type:"mcq", q:"A small island state misses three reporting deadlines under an environmental treaty. Its ministry has two staff. Which response would the managerial model recommend?", options:[
      {t:"Technical and financial help to build reporting capacity, with follow-up review.", ok:true, why:"Right. The model sees most non-compliance as a capacity problem, cured by assistance and dialogue."},
      {t:"Trade sanctions until it reports.", why:"Punishment for a capacity problem is what the managerial model warns against; it may also deepen the problem."},
      {t:"Expulsion from the treaty.", why:"Removing a willing but under-resourced state defeats the treaty’s aims."},
      {t:"Nothing: reporting obligations do not matter.", why:"Reporting is central to managerial regimes; it creates transparency."}
    ]},
    {id:"e4u10-l2-x4", type:"mcq", q:"Downs, Rocke and Barsoom would be least impressed by which finding?", options:[
      {t:"A treaty that asks states to keep pollution at current levels has 99% compliance.", ok:true, why:"Yes. A shallow treaty predicts high compliance whether or not law has any effect: the selection problem."},
      {t:"A treaty that halves emissions is kept by most states that have inspections and penalties.", why:"Deep cooperation sustained by enforcement fits their theory well."},
      {t:"Compliance falls as a treaty’s demands increase, unless penalties rise too.", why:"That is their prediction, so they would find it interesting, not unimpressive."},
      {t:"States leave deep treaties that lack enforcement.", why:"Also consistent with their argument."}
    ]},
    {id:"e4u10-l2-x5", type:"order", q:"Put the stages of Koh’s transnational legal process in order.", items:[
      {t:"Interaction: a state, NGOs and other actors meet in a forum or a court case", why:"The process begins with contact that forces a legal issue into the open."},
      {t:"Interpretation: a court or body states what the norm means for the case", why:"Interaction produces an authoritative interpretation."},
      {t:"Internalisation: the state’s courts, laws and officials adopt that interpretation", why:"The norm is built into domestic structures."},
      {t:"Obedience becomes habit, and the next interaction starts from a higher baseline", why:"Repetition deepens compliance: Koh’s distinction between mere compliance and obedience."}
    ]},
    {id:"e4u10-l2-x6", type:"sort", q:"Which theory best fits each observation?", buckets:["Managerial","Enforcement","Legitimacy / process","Rational-choice sceptic"], items:[
      {t:"Countries comply with shipping-lane rules because any agreed lane is better than collisions.", b:3, why:"A coordination case: Goldsmith and Posner say the law adds little beyond a focal point."},
      {t:"A state’s supreme court starts citing a UN treaty body’s views, and officials change policy.", b:2, why:"Legal internalisation in Koh’s sense."},
      {t:"Compliance with a fishing pact holds only after inspection and quota cuts for cheaters are added.", b:1, why:"Deep cooperation sustained by credible punishment."},
      {t:"A government falls behind on a treaty because its customs service has no laboratory to test chemicals.", b:0, why:"Capacity, one of the Chayeses’ three sources of non-compliance."}
    ]},
    {id:"e4u10-l2-x7", type:"spot", q:"Part of an essay on compliance. Tap each claim that **overreaches** the evidence.", ask:"overreaches", parts:[
      {t:"Most ICJ judgments have been complied with, at least in large part.", flag:false, why:"Supported by studies such as Paulson (2004), with the caveat that some compliance was partial or slow."},
      " ",
      {t:"This proves that international law changes state behaviour.", flag:true, why:"Overreach. States that consent to a court may already be willing to comply: a selection effect."},
      " ",
      {t:"The United States did not comply with the 1986 *Nicaragua* judgment.", flag:false, why:"Accurate."},
      " ",
      {t:"Therefore powerful states never comply with international courts.", flag:true, why:"Overgeneralisation from one case. Powerful states comply in many routine cases."},
      " ",
      {t:"Domestic courts can shape compliance, as *Medellín v. Texas* (2008) showed.", flag:false, why:"A fair use of the case: the US Supreme Court held the *Avena* judgment was not directly enforceable domestically."}
    ]}
   ],
   apply:{
    intro:"Test the theories on a real case. Court summaries and treaty pages are free online.",
    tasks:[
     {t:"One judgment, four theories", how:[
       "Choose one finished case between states, for example *Pedra Branca* (2008), *Whaling in the Antarctic* (2014) or *Avena* (2004). Read a press summary of the judgment and one news report of what happened afterwards.",
       "Say whether the losing state complied fully, partly or not at all.",
       "Explain the outcome with each theory in one sentence: managerial, enforcement, legitimacy or process, rational choice. Which fits best?"
     ], write:"Case… Outcome… Managerial… Enforcement… Legitimacy/process… Rational choice… Best fit and why…"},
     {t:"Shallow or deep?", how:[
       "Pick any treaty you know (climate, trade, arms control, human rights).",
       "Note what it asks states to change, compared with what they were already doing.",
       "Decide whether it is shallow or deep in the Downs–Rocke–Barsoom sense, and what that implies about its compliance figures."
     ], write:"Treaty… What it requires… What states did before… Shallow or deep… What compliance figures would mean…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is high compliance good news or a sign that treaties ask too little?",
       "2. Can a rational-choice sceptic explain why states spend so much effort arguing in legal terms?",
       "3. Was Japan’s response to the whaling judgment compliance, evasion, or both?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A four-theory analysis of one judgment, a depth judgement on one treaty, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 5 “International and Domestic Law” and Chapter 12 “Peaceful Settlement of Disputes”", note:"How international rules enter domestic legal systems, and how disputes are settled: the practical side of compliance."},
    {book:"eirt", where:"Chapter 2 “Liberalism” and Chapter 4 “Constructivism”", note:"The IR theories behind the institutionalist and norm-based explanations."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u10-l3", title:"The use of force: the rule, the exceptions and the hard cases", minutes:65,
   hook:{q:"The test lawyers still use for self-defence against an attack that has not yet happened comes from an incident in 1837. What was it?", options:["A Japanese warship firing on a British trading post","British forces crossing into the United States to destroy a steamboat, the Caroline, used by rebels from Canada","A French invasion of Algeria","A Russian blockade of a Black Sea port"], answer:1, reveal:"**The Caroline.** British forces crossed the Niagara River into US territory, set the steamboat on fire and sent it over the falls, because it was supplying rebels in Upper Canada. In 1841 the US Secretary of State, Daniel Webster, wrote that such action needed “a necessity of self-defence, instant, overwhelming, leaving no choice of means, and no moment for deliberation.” Britain accepted the standard while arguing it had met it. Nearly two centuries later, governments and courts still argue in those words. This lesson works through the Charter rules on force and the cases that strain them."},
   goals:[
     "State the Charter’s prohibition of force and its two clear exceptions precisely",
     "Apply the requirements of self-defence (armed attack, necessity, proportionality, reporting) to cases",
     "Distinguish anticipatory from preventive self-defence and explain why the difference matters",
     "Explain the debate over force against non-state actors and the “unwilling or unable” doctrine",
     "Present the legal arguments on humanitarian intervention, Iraq 2003 and Ukraine 2022 neutrally, attributing each position"
   ],
   learn:[
    {h:"The rule and its two exceptions", body:[
      {lead:"Before 1945, going to war was, for most lawyers, a sovereign right. The UN Charter tried to end that."},
      "Article 2(4) of the [[un-charter|Charter]] sets out the [[prohibition-of-force|prohibition of force]]: Members “shall refrain in their international relations from the threat or use of force against the territorial integrity or political independence of any state, or in any other manner inconsistent with the Purposes of the United Nations.” The ban is also customary law, and the ILC lists the prohibition of aggression as jus cogens.",
      "The Charter allows two clear exceptions:",
      {list:["**Security Council authorisation** under [[chapter-vii|Chapter VII]]: the Council determines a threat to the peace (Article 39) and may authorise force (Article 42), usually with the words “all necessary means” or “measures”.","**[[self-defence|Self-defence]]** under Article 51, against an armed attack, until the Council acts."]},
      "A third ground, **consent** (a government inviting foreign forces onto its territory), is widely accepted. Kazakhstan’s request for troops from the Collective Security Treaty Organization during unrest in January 2022 is a recent example. The hard cases arise when rival governments both claim to speak for a state, or when the inviting government has lost control of most of its territory.",
      "Scholars have long asked whether the rule survives its violations. Thomas Franck’s “Who Killed Article 2(4)?” (*American Journal of International Law*, 1970) argued that Cold War practice had hollowed it out. Louis Henkin replied in the same journal in 1971 that reports of its death were “greatly exaggerated”: states still justified themselves under the rule, which showed it was alive. That exchange is still a model seminar debate."
    ]},
    {h:"Self-defence: what Article 51 requires", body:[
      "Article 51 preserves “the inherent right of individual or collective self-defence if an armed attack occurs”. From the text and ICJ cases come four requirements:",
      {table:[
        ["Requirement","Meaning","Key source"],
        ["[[armed-attack|Armed attack]]","Only the “most grave forms” of force, not every border incident","*Nicaragua* (1986)"],
        ["Necessity","Force must be needed; peaceful means would not do","*Caroline*; *Oil Platforms* (2003)"],
        ["Proportionality","Force limited to repelling the attack","*Nuclear Weapons* opinion (1996)"],
        ["Reporting","Measures reported to the Security Council at once","Article 51 itself"]
      ]},
      "[[collective-self-defence|Collective self-defence]] (helping another state) requires, according to *Nicaragua*, that the victim declares it has been attacked and asks for help. That is why requests matter so much in practice, and why alliance treaties (see {{us-japan-alliance}}) are framed around Article 51.",
      {tip:"“Inherent” matters: it suggests a right older than the Charter, which is why states argue that customary rules, such as the *Caroline* test, still shape what Article 51 allows."}
    ]},
    {h:"Before the attack: anticipatory and preventive force", body:[
      "The hardest timing question is whether a state must wait to be hit.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><path class="d-ink" d="M18,250 V22" stroke-width="2" marker-end="url(#ah3)"/><text class="s" x="18" y="272" text-anchor="middle">earlier</text><rect class="d-sage" x="36" y="186" width="296" height="64" rx="8" stroke-width="2"/><text x="184" y="212" text-anchor="middle">Attack under way</text><text class="s" x="184" y="232" text-anchor="middle">Article 51: widely accepted</text><rect class="d-gold" x="36" y="104" width="296" height="64" rx="8" stroke-width="2"/><text x="184" y="130" text-anchor="middle">Attack imminent</text><text class="s" x="184" y="150" text-anchor="middle">anticipatory: contested, many accept</text><rect class="d-rose" x="36" y="22" width="296" height="64" rx="8" stroke-width="2"/><text x="184" y="48" text-anchor="middle">Threat emerging, not imminent</text><text class="s" x="184" y="68" text-anchor="middle">preventive: widely rejected</text><text class="s" x="184" y="290" text-anchor="middle">At any stage the Security Council</text><text class="s" x="184" y="308" text-anchor="middle">can authorise force under Chapter VII</text></svg>', alt:"Three stacked boxes with an arrow pointing upward labelled earlier in time. Bottom: attack under way, Article 51 self-defence, widely accepted. Middle: attack imminent, anticipatory self-defence, contested but many accept. Top: threat emerging but not imminent, preventive force, widely rejected. A note says the Security Council can authorise force at any stage.", cap:"The earlier the force, the weaker its legal support. The Council route is open throughout."},
      {list:["**[[anticipatory-self-defence|Anticipatory self-defence]]** against an **imminent** attack is accepted by many states and scholars, using the *Caroline* standard. Israel’s strikes at the start of the 1967 war are still debated in these terms.","**[[preventive-self-defence|Preventive force]]** against a threat that is not imminent is widely rejected. The Security Council unanimously condemned Israel’s 1981 strike on Iraq’s Osirak reactor (Resolution 487). The US National Security Strategy of 2002 argued for acting against emerging threats; critics said it stretched self-defence into prevention."]},
      "Watch the vocabulary: US officials called the 2002 doctrine “pre-emption”, but many lawyers call that *preventive* and keep “pre-emptive” for imminent threats. The UN High-level Panel on Threats, Challenges and Change (2004) offered a middle line: states may act against an imminent threat, but should take non-imminent threats to the Council."
    ]},
    {h:"Attacks by non-state actors", body:[
      "Article 51 does not say who must attack. After 11 September 2001 the Security Council, in Resolutions 1368 and 1373, recognised the right of self-defence in its preambles, and most states accepted the US-led action in Afghanistan. Yet in its 2004 advisory opinion on the *Wall* the ICJ described Article 51 as concerning an armed attack “by one State against another State”. Several judges disagreed in separate opinions, and the question remains open.",
      "From 2014, the United States and its partners used force against the Islamic State group in Syria without the Syrian government’s consent. In its letter to the Council, the United States argued that a state may act in self-defence when the territorial state is [[unwilling-or-unable|“unwilling or unable”]] to stop the threat. Some partners made similar arguments. Russia and the Syrian government rejected the doctrine, and many other states were silent, a silence scholars read as either quiet acceptance or refusal to endorse.",
      "New technology raises similar questions. Can a cyber operation be a “use of force” or even an “armed attack”? Most governments that have published positions say yes, if its scale and effects are comparable to a conventional attack, for example one causing deaths or physical destruction. An influential but non-binding expert study, the *Tallinn Manual 2.0* (2017), takes the same view, and UN groups of governmental experts have affirmed since 2013 that international law, including the Charter, applies in cyberspace."
    ]},
    {h:"Humanitarian intervention", body:[
      "The primer covered Kosovo (1999), the “illegal but legitimate” verdict and the [[responsibility-to-protect|responsibility to protect]] (see {{responsibility-to-protect}}). The deeper question is whether there is a legal right of [[humanitarian-intervention|humanitarian intervention]] without Council authorisation.",
      "History is less helpful than it looks. India’s intervention in East Pakistan in 1971, Vietnam’s in Cambodia in 1978–79 and Tanzania’s in Uganda in 1979 all ended governments that had committed grave abuses, but each government mainly argued **self-defence**, not a humanitarian right. Vietnam’s action was widely condemned; the General Assembly kept seating the deposed Khmer Rouge government’s delegation for years.",
      {table:[
        ["Position","Who and when","Argument"],
        ["A limited right exists","United Kingdom, legal position on the Syria strikes, April 2018","Lawful if there is extreme humanitarian distress, no practicable alternative, and force is necessary and proportionate"],
        ["No such right","Group of 77, South Summit, Havana, April 2000","“We reject the so-called ‘right’ of humanitarian intervention, which has no legal basis in the United Nations Charter or in the general principles of international law”"],
        ["Channel it through the Council","2005 World Summit, R2P paragraph 139","Collective action through the Security Council, case by case"]
      ]},
      "Simon Chesterman’s *Just War or Just Peace?* (2001) concluded that state practice did not support a legal right; others argue that law should evolve. Notice the pattern: the debate is less about whether atrocities matter than about **who decides** when force is justified."
    ]},
    {h:"Hard cases, told neutrally", body:[
      {h:"Iraq, 2003"},
      "The United States, the United Kingdom and Australia argued that earlier Council resolutions (678 of 1990 and 687 of 1991) still authorised force, revived by Iraq’s “material breach” identified in Resolution 1441 (2002). France, Germany, Russia and others replied that 1441 did not authorise force without a further decision. In 2004 Secretary-General Kofi Annan said the war was not in conformity with the Charter. The UK’s Iraq Inquiry (the Chilcot report, 2016) found the way the UK decided there was a legal basis “far from satisfactory”, without ruling on legality.",
      {h:"Ukraine, 2022"},
      "On 24 February 2022 Russia told the Council it was acting under Article 51, including in collective self-defence of the “Donetsk and Luhansk People’s Republics”, which it had recognised three days earlier. Ukraine and most other states called the invasion aggression. On 2 March 2022 the General Assembly deplored “the aggression by the Russian Federation against Ukraine” (Resolution ES-11/1: 141 in favour, 5 against, 35 abstentions). Russia had also accused Ukraine of genocide in eastern Ukraine; Ukraine replied by suing Russia under the Genocide Convention, asking the ICJ to declare that no genocide had occurred. On 16 March the Court, by 13 votes to 2, ordered Russia to suspend military operations; Russia did not comply.",
      {warn:"For seminar writing: state each government’s legal argument in its own terms, give the institutional responses (votes, rulings) with dates, and keep your own assessment separate and reasoned."},
      "Finally, the [[crime-of-aggression|crime of aggression]] links this lesson to Lesson 5: since 17 July 2018 the ICC can try leaders for it, within narrow limits.",
      {terms:["prohibition-of-force","chapter-vii","self-defence","armed-attack","caroline-test","anticipatory-self-defence","preventive-self-defence","unwilling-or-unable","humanitarian-intervention","crime-of-aggression"]}
    ]}
   ],
   try:[
    {id:"e4u10-l3-x1", type:"mcq", q:"Which of these uses of force fits one of the Charter’s two clear exceptions to Article 2(4)?", options:[
      {t:"Force authorised by a Security Council resolution under Chapter VII using “all necessary measures”.", ok:true, why:"Right. Council authorisation is one of the two clear exceptions; self-defence under Article 51 is the other."},
      {t:"Force approved by a two-thirds vote of the General Assembly.", why:"The Assembly can recommend, including under Uniting for Peace, but it cannot authorise force with binding effect."},
      {t:"Force by a regional organisation without Council approval.", why:"Article 53 says regional enforcement action needs Council authorisation."},
      {t:"Force to recover territory lost in a war decades ago.", why:"No exception covers this; the 1970 Friendly Relations Declaration rejects force to settle territorial disputes."}
    ]},
    {id:"e4u10-l3-x2", type:"match", q:"Match each source to the rule it is used for.", pairs:[
      ["*Caroline* (1837; Webster 1841)","Necessity that is “instant, overwhelming”","The classic anticipatory self-defence standard."],
      ["*Nicaragua* (1986)","Only the gravest uses of force are armed attacks","The gravity threshold and the request requirement for collective self-defence."],
      ["Resolution 487 (1981)","Council condemnation of the Osirak strike","Evidence against preventive self-defence."],
      ["*Wall* advisory opinion (2004)","Article 51 concerns attacks by one state against another","The narrow reading on non-state actors."],
      ["South Summit, Havana (2000)","Rejects a “right” of humanitarian intervention","The Group of 77’s position."]
    ]},
    {id:"e4u10-l3-x3", type:"sort", q:"Place each scenario on the timing spectrum.", buckets:["Attack under way","Imminent attack","Not imminent"], items:[
      {t:"Missiles from State B are striking State A’s cities.", b:0, why:"An armed attack is occurring: Article 51 applies directly."},
      {t:"State B’s fleet is sailing towards A with launch orders already issued, according to reliable intelligence.", b:1, why:"An imminent attack: the anticipatory case, judged by the Caroline standard."},
      {t:"State B might build a weapon in five years that could threaten A.", b:2, why:"A distant, uncertain threat: preventive force, widely rejected without Council approval."},
      {t:"Troops of State B have crossed A’s border and are advancing.", b:0, why:"An ongoing armed attack."},
      {t:"State B is enlarging its army but has made no threat.", b:2, why:"A capability, not an imminent attack."}
    ]},
    {id:"e4u10-l3-x4", type:"mcq", q:"An armed group based in State C launches attacks across the border into State D. C’s government condemns the group but has no control over that region. D strikes the group in C without C’s consent. Which argument is D most likely to make?", options:[
      {t:"That C is “unwilling or unable” to stop the threat, so D may act in self-defence on C’s territory.", ok:true, why:"Right. This is the doctrine invoked by the United States and some partners in Syria from 2014; it is contested."},
      {t:"That the ICJ’s *Wall* opinion clearly allows it.", why:"The *Wall* opinion pointed the other way, describing Article 51 as about attacks by one state against another."},
      {t:"That humanitarian intervention is clearly lawful.", why:"The case is about self-defence against attacks, not protecting a population, and there is no agreed humanitarian right."},
      {t:"That C consented.", why:"The scenario says C did not consent."}
    ]},
    {id:"e4u10-l3-x5", type:"spot", q:"A draft paragraph on humanitarian intervention. Tap each sentence that is **inaccurate or one-sided**.", ask:"inaccurate or one-sided", parts:[
      {t:"India (1971), Vietnam (1978–79) and Tanzania (1979) all ended abusive governments by force.", flag:false, why:"Accurate as a description of outcomes."},
      " ",
      {t:"Each government openly claimed a legal right of humanitarian intervention.", flag:true, why:"Inaccurate. Each relied mainly on self-defence, which is why these cases are weak precedents for a humanitarian right."},
      " ",
      {t:"The United Kingdom has argued that a limited right exists under strict conditions.", flag:false, why:"Accurate: its 2018 legal position on Syria."},
      " ",
      {t:"The Group of 77 rejected a “right” of humanitarian intervention in 2000.", flag:false, why:"Accurate: paragraph 54 of the Havana Declaration."},
      " ",
      {t:"Today every state accepts that humanitarian intervention without the Council is lawful.", flag:true, why:"Inaccurate. Most states, including the large Group of 77, reject such a right; it is deeply contested."}
    ]},
    {id:"e4u10-l3-x6", type:"mcq", q:"Which sentence describes Iraq 2003 most neutrally for a seminar paper?", options:[
      {t:"The United States, the United Kingdom and Australia argued that earlier resolutions authorised force; France, Germany, Russia and others argued they did not; Annan later said the war was not in conformity with the Charter.", ok:true, why:"Yes. It attributes each position and the Secretary-General’s view, with no adjectives doing the arguing."},
      {t:"The illegal invasion of Iraq was condemned by everyone.", why:"It asserts a conclusion and overstates agreement; several governments argued it was lawful."},
      {t:"The coalition clearly had Council authorisation under Resolution 1441.", why:"That was one side’s argument, strongly disputed; 1441 did not expressly authorise force."},
      {t:"International law had nothing to say about Iraq in 2003.", why:"Governments argued at length in legal terms; the debate shows law shaping justification."}
    ]},
    {id:"e4u10-l3-x7", type:"order", q:"Put these events in the right order.", items:[
      {t:"The Caroline incident on the Niagara River", why:"1837, with Webster’s formula following in 1841."},
      {t:"The UN Charter signed in San Francisco", why:"26 June 1945."},
      {t:"Franck asks “Who Killed Article 2(4)?”", why:"1970, followed by Henkin’s reply in 1971."},
      {t:"The Security Council condemns the Osirak strike", why:"Resolution 487, June 1981."},
      {t:"The ICJ decides *Nicaragua v. United States* on the merits", why:"27 June 1986."},
      {t:"The ICC gains jurisdiction over the crime of aggression", why:"17 July 2018."}
    ]}
   ],
   apply:{
    intro:"Work with primary documents. UN letters, resolutions and votes are free on the UN’s websites and digital library.",
    tasks:[
     {t:"Read an Article 51 letter", how:[
       "Search the UN Digital Library or press.un.org for a letter to the Security Council “under Article 51” from any state in any year.",
       "Note who sent it, what armed attack it cites, whether it claims individual or collective self-defence, and what it says about necessity or proportionality.",
       "Check whether the Council or other states responded."
     ], write:"State and date… Attack cited… Individual or collective… Necessity and proportionality… Responses…"},
     {t:"Map the positions on one case", how:[
       "Choose a case from this lesson (Kosovo 1999, Iraq 2003, Syria 2014 or 2018, Ukraine 2022).",
       "Find two governments’ statements with different legal positions, and one institutional response (a resolution, vote or ruling).",
       "Write a neutral paragraph that attributes every claim."
     ], write:"Case… Position 1 (who, argument)… Position 2… Institutional response… Neutral paragraph…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was Franck or Henkin closer to the truth about Article 2(4)?",
       "2. Should the “unwilling or unable” doctrine be accepted, rejected or limited?",
       "3. Is the strongest objection to humanitarian intervention legal, political or practical?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one Article 51 letter, a neutral position map of one case, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 13 “Collective Security and the Prohibition of the Use of Force”", note:"Read it after this lesson: a fuller treatment of the Charter system and its exceptions."},
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"The R2P background to the humanitarian intervention debate."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u10-l4", title:"The law of the sea and territory", minutes:65,
   hook:{q:"Under the UN Convention on the Law of the Sea, how far from the coast can a state’s rights over the seabed (its continental shelf) reach at most?", options:["12 nautical miles","200 nautical miles","Up to 350 nautical miles, or 100 nautical miles beyond a set depth line","Without limit, as far as the seabed slopes"], answer:2, reveal:"**Up to 350 nautical miles** (or 100 nautical miles beyond the 2,500-metre depth line), where the natural continental margin reaches that far. So a state’s seabed rights can extend well beyond its 200-mile exclusive economic zone. Claims beyond 200 miles go to a UN expert body, the Commission on the Limits of the Continental Shelf. This lesson explains the zones, then uses them to read the South China Sea arbitration, the Arctic and the law of territory."},
   goals:[
     "Describe the UNCLOS maritime zones and the rights each gives",
     "Explain why the status of islands, rocks and low-tide elevations matters so much",
     "Summarise the 2016 South China Sea arbitration and present the positions of the Philippines and China neutrally",
     "Explain how title to territory is acquired, using leading cases from Asia and elsewhere",
     "Explain uti possidetis, the legal issues in the Arctic, and what the ICJ’s docket looks like as of 2026"
   ],
   learn:[
    {h:"A constitution for the oceans", body:[
      {lead:"For centuries the sea had two parts: a narrow coastal belt a state controlled, and a vast high sea free to all. By the 1960s, oil, fishing fleets and seabed minerals made that picture impossible to keep."},
      "In 1967 Arvid Pardo, Malta’s ambassador to the UN, proposed that the deep seabed be the “common heritage of mankind”. Nine years of negotiation produced the [[unclos|UN Convention on the Law of the Sea]] (UNCLOS), opened for signature at Montego Bay, Jamaica, on 10 December 1982 and in force since 16 November 1994. The conference’s president, Tommy Koh of Singapore, called it “a constitution for the oceans”.",
      "As of early 2026 it had about 170 parties, including the European Union. The United States is not a party but treats most of its navigation and zone rules as customary law. A 1994 agreement revised the deep-seabed mining rules, and the [[bbnj-agreement|BBNJ Agreement]] on marine biodiversity in areas beyond national jurisdiction, adopted in June 2023, entered into force on 17 January 2026.",
      "Asia shaped UNCLOS. Indonesia’s 1957 Djuanda Declaration and the Philippines’ claims pushed the concept of **archipelagic states** (Part IV), whose outer islands are joined by baselines that enclose the waters between them."
    ]},
    {h:"The zones, measured from the baseline", body:[
      "Every zone is measured from the **baseline**, usually the low-water line along the coast. One nautical mile is 1,852 metres.",
      {fig:'<svg viewBox="0 0 340 380"><rect class="d-panel" x="60" y="8" width="274" height="38" rx="6" stroke-width="2"/><text x="197" y="32" text-anchor="middle">Land</text><path class="d-ink" d="M60,52 H334" stroke-width="3"/><text class="s" x="30" y="56" text-anchor="middle">0</text><text class="s" x="300" y="66" text-anchor="middle">baseline</text><rect class="d-sage" x="60" y="72" width="200" height="52" rx="6" stroke-width="2"/><text x="160" y="94" text-anchor="middle">Territorial sea</text><text class="s" x="160" y="113" text-anchor="middle">sovereignty</text><text class="s" x="30" y="128" text-anchor="middle">12 nm</text><rect class="d-lup" x="60" y="130" width="200" height="46" rx="6" stroke-width="2"/><text x="160" y="150" text-anchor="middle">Contiguous zone</text><text class="s" x="160" y="168" text-anchor="middle">customs, immigration</text><text class="s" x="30" y="180" text-anchor="middle">24 nm</text><rect class="d-gold" x="60" y="182" width="200" height="82" rx="6" stroke-width="2"/><text x="160" y="214" text-anchor="middle">EEZ</text><text class="s" x="160" y="234" text-anchor="middle">resource rights;</text><text class="s" x="160" y="250" text-anchor="middle">others may navigate</text><text class="s" x="30" y="268" text-anchor="middle">200 nm</text><rect class="d-soft" x="60" y="270" width="200" height="50" rx="6" stroke-width="2"/><text x="160" y="292" text-anchor="middle">High seas</text><text class="s" x="160" y="310" text-anchor="middle">open to all</text><rect class="d-rose" x="268" y="72" width="66" height="248" rx="6" stroke-width="2"/><text class="s" x="301" y="140" text-anchor="middle">Shelf</text><text class="s" x="301" y="158" text-anchor="middle">(seabed)</text><text class="s" x="301" y="176" text-anchor="middle">to 200,</text><text class="s" x="301" y="194" text-anchor="middle">or up to</text><text class="s" x="301" y="212" text-anchor="middle">350 nm</text><rect class="d-panel" x="60" y="328" width="274" height="44" rx="6" stroke-width="2"/><text x="197" y="348" text-anchor="middle">The Area</text><text class="s" x="197" y="364" text-anchor="middle">deep seabed: common heritage</text></svg>', alt:"A vertical diagram moving away from land. Below the land is the baseline at 0. Then the territorial sea to 12 nautical miles (sovereignty), the contiguous zone to 24 (customs and immigration control), the exclusive economic zone to 200 (resource rights; others may navigate), then the high seas, open to all. A column on the right shows the continental shelf seabed reaching 200 or up to 350 nautical miles. At the bottom, the Area: the deep seabed beyond, common heritage of mankind.", cap:"Water zones (left) and seabed zones (right) are separate. Distances are from the baseline."},
      {list:["**[[territorial-sea|Territorial sea]]** (12 nm): sovereignty, subject to other ships’ [[innocent-passage|innocent passage]]. In straits used for international navigation, ships and aircraft have the stronger right of [[transit-passage|transit passage]].","**[[contiguous-zone|Contiguous zone]]** (24 nm): enforcement of customs, fiscal, immigration and health laws.","**[[exclusive-economic-zone|Exclusive economic zone]]** (EEZ, 200 nm): sovereign rights over fish, oil, gas and wind; other states keep freedoms of navigation and overflight.","**[[continental-shelf|Continental shelf]]**: seabed rights to 200 nm, or further where the margin extends, up to the outer limits above."]},
      "One live disagreement concerns **military activities in another state’s EEZ**. The United States and many others say surveillance and exercises are part of freedom of navigation; China and some other coastal states say certain military activities need the coastal state’s consent. UNCLOS does not settle it explicitly."
    ]},
    {h:"Islands, rocks and low-tide elevations", body:[
      "Because zones are measured from land, tiny features can generate huge areas of sea. Article 121 sets the [[regime-of-islands|regime of islands]]: a naturally formed area of land above water at high tide gets full zones, **but** “rocks which cannot sustain human habitation or economic life of their own” get only a 12 nm territorial sea, no EEZ or shelf. A [[low-tide-elevation|low-tide elevation]] (above water only at low tide) generates no territorial sea of its own, unless it lies within the territorial sea of other land.",
      "The stakes are clear at Okinotorishima, a tiny feature in the Pacific: Japan treats it as an island with an EEZ; China and South Korea argue it is a rock. Delimitation between neighbours raises different questions. The first maritime boundary case decided by the [[itlos|International Tribunal for the Law of the Sea]] (ITLOS, in Hamburg), *Bangladesh/Myanmar* (2012), drew a boundary in the Bay of Bengal. In 2016–18, Timor-Leste and Australia used UNCLOS’s **compulsory conciliation**, for the first time, and signed a maritime boundary treaty at the UN in March 2018."
    ]},
    {h:"The South China Sea arbitration: both positions", body:[
      "Several governments have overlapping claims in the South China Sea: China, the Philippines, Vietnam, Malaysia and Brunei, and the authorities in Taiwan. China’s claims are often drawn as a [[nine-dash-line|“nine-dash line”]], whose legal meaning China has not precisely defined.",
      "In January 2013 the Philippines started an [[annex-vii-arbitration|arbitration under Annex VII]] of UNCLOS. A five-member tribunal, with the Permanent Court of Arbitration as registry, decided it had jurisdiction (October 2015) and gave its award on **12 July 2016**. It did not rule on sovereignty over any feature or draw a boundary. It found, among other things:",
      {list:["No legal basis for China to claim [[historic-rights|historic rights]] to resources within the nine-dash line beyond what UNCLOS provides.","All the high-tide Spratly features it examined, including the largest, Itu Aba, are legally “rocks”, so none generates an EEZ; Mischief Reef and Second Thomas Shoal are low-tide elevations.","China had violated the Philippines’ sovereign rights in its EEZ, and large-scale island-building had severely harmed the coral reef environment."]},
      {table:[
        ["","The Philippines’ position","China’s position"],
        ["Jurisdiction","UNCLOS dispute settlement is compulsory; the tribunal had jurisdiction","The dispute is really about sovereignty and boundaries, excluded by UNCLOS and by China’s 2006 declaration under Article 298"],
        ["The award","Final and binding under Article 296","“Null and void” with “no binding force”; China did not accept or take part"],
        ["The way forward","Implement the award","Bilateral negotiation, as China says the parties agreed in 2002"]
      ]},
      "Other governments responded differently: some, including the United States, Japan and Australia, called on both parties to treat the award as binding; others supported China’s preference for negotiation. As of November 2026 both governments maintained their positions. ASEAN and China have negotiated a Code of Conduct for many years and set themselves a goal of concluding it in 2026; talks were still under way in mid-2026, so check its latest status before writing about it.",
      {warn:"In a paper, separate what the tribunal decided, what each government says, and what you conclude. Don’t write “the ruling proved” or “the illegal ruling”."}
    ]},
    {h:"How territory is won and kept", body:[
      "Land disputes turn on **title**: the legal basis for sovereignty. The classic case is from the Asia-Pacific. In *Island of Palmas* (1928), between the Netherlands and the United States over an island near the Philippines, the arbitrator Max Huber held that Spain’s early discovery gave only an “inchoate” title, while the Dutch had shown the “continuous and peaceful display” of state authority. Since then, three ideas recur:",
      {list:["**[[effectivites|Effectivités]]**: acts of administration, such as running a lighthouse, licensing or taxation. In *Ligitan and Sipadan* (Indonesia/Malaysia, 2002) the ICJ gave the islands to Malaysia on this basis.","**Acquiescence**: failing to protest. In *Temple of Preah Vihear* (Cambodia v. Thailand, 1962) Thailand was held to have accepted a map placing the temple in Cambodia; a 2013 judgment clarified the area. In *Pedra Branca* (2008) Malaysia’s silence while Singapore ran a lighthouse helped Singapore.","**The [[critical-date|critical date]]**: the moment a dispute crystallised, after which new acts count for little."]},
      "[[terra-nullius|Terra nullius]] (land belonging to no one) was a colonial doctrine. In its *Western Sahara* opinion (1975) the ICJ held that the territory, inhabited by organised tribes, was not terra nullius when Spain colonised it. Several disputes in Northeast Asia have never reached a court, because both parties have not consented (see {{japan-and-neighbours}})."
    ]},
    {h:"Uti possidetis, the Arctic and the ICJ docket", body:[
      "[[uti-possidetis|Uti possidetis]] (“as you possess”) means new states inherit their colonial administrative borders. Spanish American republics used it from the 1810s; the Organization of African Unity endorsed existing borders in 1964; and in *Burkina Faso/Mali* (1986) an ICJ chamber called it a general principle linked to independence “wherever it occurs”. Supporters credit it with preventing border wars; critics say it froze lines drawn by empires. The ICJ’s *Chagos* opinion (2019) found that the United Kingdom’s separation of the Chagos Archipelago from Mauritius before independence meant decolonisation was not lawfully completed. In May 2025 the two governments signed a treaty to transfer sovereignty to Mauritius, with a long lease of the Diego Garcia base; check whether it is in force before citing it.",
      "In the **Arctic**, the five coastal states declared at Ilulissat (2008) that the law of the sea applies and no new treaty is needed. Russia, Denmark (for Greenland) and Canada have made overlapping continental shelf submissions reaching the North Pole. Canada treats the Northwest Passage as internal waters; the United States and others see an international strait.",
      "The ICJ itself is busy. In 2026 reports described its docket as the busiest in its history, with cases including Myanmar’s treatment of the Rohingya, South Africa’s case against Israel over Gaza, Ukraine’s Genocide Convention case against Russia and the Guyana–Venezuela boundary, plus advisory opinions on climate change (2025) and on Israel and the occupied Palestinian territory (2024 and 2025). Its President since 2025, Iwasawa Yuji, is from Japan.",
      {terms:["unclos","territorial-sea","contiguous-zone","exclusive-economic-zone","continental-shelf","innocent-passage","transit-passage","regime-of-islands","low-tide-elevation","itlos","nine-dash-line","annex-vii-arbitration","historic-rights","effectivites","critical-date","terra-nullius","uti-possidetis","bbnj-agreement","optional-clause","provisional-measures"]}
    ]}
   ],
   try:[
    {id:"e4u10-l4-x1", type:"match", q:"Match each zone to the main right it gives the coastal state.", pairs:[
      ["Territorial sea (12 nm)","Sovereignty, subject to innocent passage","The nearest belt of sea is almost like land territory."],
      ["Contiguous zone (24 nm)","Enforcing customs, fiscal, immigration and health laws","A policing zone, not sovereignty."],
      ["Exclusive economic zone (200 nm)","Sovereign rights over living and non-living resources","Others keep navigation and overflight."],
      ["Continental shelf","Rights over the seabed and subsoil","Can reach beyond 200 nm where the margin extends."],
      ["High seas","None: open to all states","Freedoms of navigation, fishing and research, within rules."]
    ]},
    {id:"e4u10-l4-x2", type:"number", q:"Two coasts face each other 300 nautical miles apart. If the boundary between their EEZs follows the median line, how far does each state’s EEZ extend from its coast?", answer:150, tol:0, unit:"nautical miles", why:"Each could claim 200 nm, but the claims overlap. A median line puts the boundary halfway: 300 ÷ 2 = 150 nm each. Courts often start from such a provisional line and then adjust it for relevant circumstances.", wrongs:[
      {v:200, tol:0, why:"200 nm is the maximum EEZ, but the two claims overlap here, so neither can have the full 200 nm."},
      {v:100, tol:0, why:"That is 300 − 200: one state taking its full 200 nm. A median line divides the distance equally."},
      {v:300, tol:0, why:"That is the whole distance between the coasts, not one state’s share."}
    ], hint2:"The median line is halfway between the two coasts."},
    {id:"e4u10-l4-x3", type:"sort", q:"Under Article 121 and the arbitration’s reading of it, what does each feature generate?", buckets:["Full zones (EEZ and shelf)","Territorial sea only","No zones of its own"], items:[
      {t:"A large island with towns, farms and an economy of its own", b:0, why:"A full island under Article 121(2)."},
      {t:"A bare high-tide rock that cannot sustain human habitation or economic life", b:1, why:"Article 121(3): a rock gets 12 nm only."},
      {t:"A reef visible only at low tide, far from any other land", b:2, why:"A low-tide elevation outside any territorial sea generates no territorial sea of its own."},
      {t:"Itu Aba, as classified by the 2016 tribunal", b:1, why:"The tribunal found it legally a rock, despite its size and a garrison; the authorities in Taiwan, which administer it, and China rejected that finding."},
      {t:"Mischief Reef in its natural state, as found by the tribunal", b:2, why:"A low-tide elevation; artificial building does not change its legal status."}
    ]},
    {id:"e4u10-l4-x4", type:"mcq", q:"What did the 2016 South China Sea award **not** decide?", options:[
      {t:"Which state has sovereignty over the Spratly features.", ok:true, why:"Right. The tribunal said deciding sovereignty over land was outside its task; it ruled on maritime entitlements and conduct."},
      {t:"Whether China had historic rights to resources within the nine-dash line beyond UNCLOS.", why:"It did decide this: it found no legal basis for such rights."},
      {t:"Whether the high-tide Spratly features generate an EEZ.", why:"It did decide this: it found they are rocks with no EEZ."},
      {t:"Whether island-building harmed the marine environment.", why:"It did decide this: it found severe harm to coral reefs."}
    ]},
    {id:"e4u10-l4-x5", type:"spot", q:"A news paragraph on the arbitration. Tap each sentence that is **inaccurate or not neutral**.", ask:"inaccurate or not neutral", parts:[
      {t:"In 2016 an arbitral tribunal under UNCLOS ruled on a case brought by the Philippines.", flag:false, why:"Accurate and neutral."},
      " ",
      {t:"The tribunal awarded the Spratly Islands to the Philippines.", flag:true, why:"Inaccurate. It made no ruling on sovereignty over any feature."},
      " ",
      {t:"China said the award was null and void and did not take part in the proceedings.", flag:false, why:"Accurate attribution of China’s position."},
      " ",
      {t:"China’s rejection proves that international law is meaningless.", flag:true, why:"An opinion presented as fact, and an overgeneralisation. Writers can argue this, but must attribute and support it."},
      " ",
      {t:"The Philippines says the award is final and binding under Article 296 of UNCLOS.", flag:false, why:"Accurate attribution."}
    ]},
    {id:"e4u10-l4-x6", type:"match", q:"Match each territorial case to the idea it is best known for.", pairs:[
      ["*Island of Palmas* (1928)","Discovery gives only inchoate title; continuous display of authority wins","Max Huber’s classic award."],
      ["*Temple of Preah Vihear* (1962)","Acceptance of a map by conduct","Thailand’s acquiescence."],
      ["*Ligitan and Sipadan* (2002)","Effectivités: acts of administration","Turtle-egg licensing and lighthouses helped Malaysia."],
      ["*Burkina Faso/Mali* (1986)","Uti possidetis as a general principle","Colonial boundaries become international ones."],
      ["*Western Sahara* (1975)","Inhabited land was not terra nullius","A blow to a colonial doctrine."]
    ]},
    {id:"e4u10-l4-x7", type:"mcq", q:"Why have several Northeast Asian territorial disputes never been decided by the ICJ?", options:[
      {t:"The ICJ can hear a case only if both states have consented to its jurisdiction, and they have not.", ok:true, why:"Right. Consent is the foundation of the Court’s jurisdiction, through special agreement, a treaty clause or the optional clause."},
      {t:"The ICJ is not allowed to hear cases about islands.", why:"It has decided many island cases, including *Pedra Branca* and *Ligitan and Sipadan*."},
      {t:"Asian states are not members of the ICJ.", why:"All UN members are parties to the ICJ Statute; the issue is consent to a specific case."},
      {t:"The Security Council has banned such cases.", why:"There is no such ban."}
    ]}
   ],
   apply:{
    intro:"Use primary sources. Court and tribunal press releases and the UN’s ocean affairs pages are free.",
    tasks:[
     {t:"Draw a coast’s zones", how:[
       "Pick any coastal country. Using a free online map, find a stretch of its coast.",
       "Sketch the baseline and mark roughly where 12, 24 and 200 nautical miles would fall (1 nm = 1.852 km).",
       "Note any neighbour whose 200 nm zone would overlap, and how a median line would divide it."
     ], write:"Country and coast… Where 12, 24 and 200 nm fall… Overlapping neighbour… How a median line would divide it…"},
     {t:"Read both sides of the arbitration", how:[
       "Find the tribunal’s press release of 12 July 2016 (search “South China Sea Arbitration press release 12 July 2016”) and China’s Foreign Ministry statement of the same day.",
       "List three findings, and China’s three main objections.",
       "Write one neutral sentence for each side."
     ], write:"Three findings… China’s objections… Neutral sentence for the Philippines… for China…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Does uti possidetis keep the peace or keep colonial injustice?",
       "2. Should the line between an island and a rock depend on modern engineering?",
       "3. Can a court’s ruling settle a dispute that one party refuses to recognise?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A sketch of one coast’s zones, a two-sided summary of the 2016 arbitration, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 15 “Law of the Sea”", note:"Read it after this lesson: the zones, navigation rights and dispute settlement in more depth."},
    {book:"pilmpa", where:"Chapter 12 “Peaceful Settlement of Disputes”", note:"How the ICJ, ITLOS and arbitral tribunals get jurisdiction, with cases."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u10-l5", title:"International criminal justice and its critics", minutes:65,
   hook:{q:"Which was the first international court to convict a person of genocide?", options:["The Nuremberg tribunal, in 1946","The International Criminal Tribunal for Rwanda, in 1998","The International Criminal Court, in 2012","The International Court of Justice, in 2007"], answer:1, reveal:"**The Rwanda tribunal (ICTR), in 1998**, in the case of Jean-Paul Akayesu, a former mayor. Nuremberg could not convict anyone of genocide: the crime was only defined in a treaty in 1948, and the tribunal used “crimes against humanity” instead. The ICJ judges states, not people; in 2007 it found that Serbia had failed to prevent genocide at Srebrenica, not that it had committed it. The *Akayesu* judgment also held that rape could be an act of genocide. This lesson follows the idea of putting individuals on trial from 1945 to the ICC today, and the critics who question it."},
   goals:[
     "Explain individual criminal responsibility and how Nuremberg and Tokyo established it, with their critiques",
     "Compare the ad hoc tribunals, hybrid courts and universal jurisdiction as ways of trying international crimes",
     "Explain how the ICC’s jurisdiction works, including over nationals of non-parties, and describe its situation as of November 2026 neutrally",
     "Weigh the “Africa critique” and other criticisms of the ICC, with the replies",
     "Explain what TWAIL and feminist approaches say about international law, and their internal debates"
   ],
   learn:[
    {h:"From states to individuals", body:[
      {lead:"Traditional international law dealt with states. The idea that a minister or general could personally stand trial under international law is less than a century old."},
      "The Nuremberg tribunal put it plainly in its 1946 judgment: “Crimes against international law are committed by men, not by abstract entities, and only by punishing individuals who commit such crimes can the provisions of international law be enforced.” That is [[individual-criminal-responsibility|individual criminal responsibility]]: official position is no defence, and “superior orders” can at most reduce a sentence.",
      "The primer and the history unit introduced the [[war-crimes-tribunals|Nuremberg and Tokyo tribunals]] and the charge of [[victors-justice|victors’ justice]], including Justice Radhabinod Pal’s dissent at Tokyo (see {{world-war-two}}). Seminars add three points. At Nuremberg, 22 defendants were tried and 19 convicted; at Tokyo, 25 of the 28 accused were convicted after two died and one was found unfit. Tokyo’s eleven judges came from eleven countries, including India, the Philippines and China, and several wrote separate or dissenting opinions. And choices about whom not to try, such as the US decision not to prosecute Emperor Hirohito, shaped the trials’ legacy as much as the verdicts did.",
      "The General Assembly affirmed the Nuremberg principles in 1946; the Genocide Convention (1948) and the Geneva Conventions (1949) followed. [[command-responsibility|Command responsibility]], liability of superiors who knew of crimes and failed to stop them, was developed partly in the US military trial of General Yamashita Tomoyuki in Manila (1945), still a debated precedent."
    ]},
    {h:"The 1990s: tribunals for Yugoslavia and Rwanda", body:[
      "For four decades the Cold War blocked new courts. Then the Security Council, acting under Chapter VII, created the International Criminal Tribunal for the former Yugoslavia (ICTY, The Hague, 1993) and for Rwanda (ICTR, Arusha, 1994).",
      {fig:'<svg viewBox="0 0 340 352"><path class="d-ink" d="M72,16 V336" stroke-width="2"/><circle class="d-inkf" cx="72" cy="24" r="5"/><text x="60" y="29" text-anchor="end">1945</text><text x="86" y="29">Nuremberg tribunal</text><circle class="d-inkf" cx="72" cy="64" r="5"/><text x="60" y="69" text-anchor="end">1946</text><text x="86" y="69">Tokyo tribunal</text><circle class="d-inkf" cx="72" cy="104" r="5"/><text x="60" y="109" text-anchor="end">1993</text><text x="86" y="109">ICTY (The Hague)</text><circle class="d-inkf" cx="72" cy="144" r="5"/><text x="60" y="149" text-anchor="end">1994</text><text x="86" y="149">ICTR (Arusha)</text><circle class="d-inkf" cx="72" cy="184" r="5"/><text x="60" y="189" text-anchor="end">1998</text><text x="86" y="189">Rome Statute adopted</text><circle class="d-inkf" cx="72" cy="224" r="5"/><text x="60" y="229" text-anchor="end">2002</text><text x="86" y="229">ICC opens; Sierra Leone court</text><circle class="d-inkf" cx="72" cy="264" r="5"/><text x="60" y="269" text-anchor="end">2006</text><text x="86" y="269">Cambodia court (ECCC) starts</text><circle class="d-inkf" cx="72" cy="304" r="5"/><text x="60" y="309" text-anchor="end">2018</text><text x="86" y="309">ICC can try aggression</text><text class="s" x="170" y="344" text-anchor="middle">From military tribunals to a permanent court</text></svg>', alt:"A vertical timeline: 1945 Nuremberg tribunal; 1946 Tokyo tribunal; 1993 ICTY in The Hague; 1994 ICTR in Arusha; 1998 Rome Statute adopted; 2002 ICC opens and the Special Court for Sierra Leone is set up; 2006 the Cambodia court (ECCC) starts work; 2018 the ICC can try the crime of aggression.", cap:"After a long Cold War gap, the 1990s opened a burst of institution-building."},
      "Their judgments built modern international criminal law. The ICTY’s *Tadić* decision (1995) held that war crimes can be committed in internal armed conflicts. The ICTR’s *Akayesu* (1998) was the first international genocide conviction, and Jean Kambanda, Rwanda’s interim prime minister, pleaded guilty to genocide the same year. The ICTY indicted 161 people and closed in 2017; the ICTR indicted 93 and closed in 2015. A Residual Mechanism carries on their remaining work.",
      "Critics noted the costs, slow trials, and distance from victims: few Rwandans could follow trials in Tanzania, and Rwanda itself tried far more suspects in community *gacaca* courts. These debates feed into [[transitional-justice|transitional justice]], covered in the human rights unit."
    ]},
    {h:"Hybrid courts and universal jurisdiction", body:[
      "A [[hybrid-tribunal|hybrid tribunal]] mixes national and international judges, staff and law, usually in or near the country concerned.",
      {table:[
        ["Court","Set up","Notable outcome"],
        ["Special Court for Sierra Leone","2002, UN–Sierra Leone agreement","Former Liberian president Charles Taylor convicted in 2012"],
        ["Extraordinary Chambers in the Courts of Cambodia (ECCC)","Agreement 2003, began work 2006","Three Khmer Rouge leaders convicted; genocide convictions in 2018, upheld for Khieu Samphan in 2022"],
        ["Extraordinary African Chambers","2013, Senegal and the African Union","Chad’s former president Hissène Habré convicted in 2016"]
      ]},
      "The ECCC shows both sides of the hybrid model. Supporters point to huge public attendance in Cambodia and a lasting archive. Critics point to its slowness, its cost and only three convictions, and to allegations of political interference in decisions about whom to prosecute.",
      "Under [[universal-jurisdiction|universal jurisdiction]], any state’s courts may try certain crimes wherever committed. Israel’s trial of Adolf Eichmann (1961) and the British House of Lords’ ruling that Chile’s former leader Augusto Pinochet had no immunity from extradition for torture (1999) are the landmarks; European courts have since tried suspects from Rwanda, Syria and elsewhere."
    ]},
    {h:"The ICC: how the Rome system works", body:[
      "The primer covered the basics of the [[international-criminal-court|ICC]] and [[complementarity|complementarity]] (see {{international-courts}}). Here are the mechanics seminars test:",
      {list:["**Triggers** (Article 13): a state party refers a situation, the Security Council refers one under Chapter VII, or the Prosecutor opens an investigation [[proprio-motu|proprio motu]], with judges’ approval.","**Preconditions** (Article 12): unless the Council refers, the crime must occur on a state party’s territory or be committed by its national (or a state may accept jurisdiction for a situation).","**Council powers**: it referred Darfur (2005) and Libya (2011), and may defer an investigation for a renewable 12 months (Article 16).","**Aggression**: since 17 July 2018, but not over nationals of non-parties or on their territory, unless the Council refers."]},
      "The territorial rule reaches **nationals of non-parties**, which explains several controversies. In 2018 judges held the Court could act on deportations of Rohingya from Myanmar (not a party) into Bangladesh (a party); in 2024 the Prosecutor sought an arrest warrant for Myanmar’s military leader. The Court has issued warrants for Russia’s president (2023) over the deportation of Ukrainian children, and for Israel’s prime minister and a former defence minister (2024) over Gaza; the governments concerned reject the Court’s jurisdiction.",
      "As of November 2026, 125 states were parties. Burkina Faso, Mali and Niger gave notice of withdrawal in June 2026, and Venezuela and Chad in July 2026; under Article 127 each takes effect one year after notice. Hungary, which had announced its withdrawal in 2025, reversed the decision in 2026 and remains a party. The Philippines left in 2019, but the Court kept jurisdiction over earlier crimes: former president Rodrigo Duterte was surrendered in March 2025 and, on 23 April 2026, judges confirmed charges of crimes against humanity and sent the case to trial (as of September 2026, the trial was scheduled to open in November). In 2025 the United States imposed sanctions on the Prosecutor and several judges; the Court and many states parties condemned them, and the US government said they protected its personnel and allies."
    ]},
    {h:"Critics and defenders", body:[
      {table:[
        ["Critique","Who makes it","Reply"],
        ["Africa bias: most early cases were African","The African Union (from 2013) and several African governments","Many were referred by African governments themselves; investigations now span Europe, Asia and the Middle East"],
        ["Selectivity: great powers escape","Many Global South states and scholars","The Council’s veto, not the Court, shields powerful states; recent warrants target leaders of powerful states"],
        ["Peace versus justice: warrants block deals","Some mediators","Impunity also fuels conflict; Dominic Ongwen of the Lord’s Resistance Army was convicted in 2021"],
        ["Threat to sovereignty over non-party nationals","The United States, Russia, Israel and others","Territorial jurisdiction is ordinary in criminal law"]
      ]},
      "The *Kenyatta* case is the classic example: charges against Kenya’s sitting president were withdrawn in 2014 after the Prosecutor said Kenya had not cooperated. Supporters saw obstruction; the AU saw vindication.",
      {warn:"Attribute each critique. “The ICC targets Africa” is a claim made by specific actors, with counter-arguments; write it that way."}
    ]},
    {h:"TWAIL and feminist approaches", body:[
      "**[[twail|TWAIL]]** (Third World Approaches to International Law) grew from discussions among graduate students at Harvard Law School in 1996, with a first meeting in 1997. It asks how international law was shaped by colonialism and still reflects it (see {{twail}}). Antony Anghie’s *Imperialism, Sovereignty and the Making of International Law* (2005) argued that the discipline was formed through a “dynamic of difference” between “civilised” and “uncivilised” peoples, from the Spanish conquest to the [[standard-of-civilisation|standard of civilisation]] and the [[mandate-system|mandate system]] (see {{antony-anghie}}). B. S. Chimni’s “Third World Approaches to International Law: A Manifesto” (2006) and Makau Mutua’s “Savages, Victims, and Saviors” (2001) carried the critique into the economy and human rights. Japan’s Onuma Yasuaki proposed a related “transcivilisational” perspective. TWAIL is not anti-law: many TWAIL scholars defend the ICC while criticising its selectivity.",
      "**[[feminist-international-law|Feminist approaches]]** began with Hilary Charlesworth, Christine Chinkin and Shelley Wright’s “Feminist Approaches to International Law” (*American Journal of International Law*, 1991) and Charlesworth and Chinkin’s *The Boundaries of International Law* (2000) (see {{hilary-charlesworth}}). They criticised the [[public-private-divide|public/private divide]], which left violence in homes and families outside “international” concern, and the near-absence of women from courts and diplomacy. Successes followed: *Akayesu* on rape as genocide, the ICTY’s rulings on rape as torture and enslavement, and the Rome Statute’s list of sexual and gender-based crimes. Feminists also debate their own wins: Karen Engle’s *The Grip of Sexual Violence in Conflict* (2020) argued that a focus on criminal prosecution of sexual violence can crowd out other harms and remedies.",
      {terms:["individual-criminal-responsibility","victors-justice","command-responsibility","hybrid-tribunal","universal-jurisdiction","proprio-motu","twail","feminist-international-law","public-private-divide"]}
    ]}
   ],
   try:[
    {id:"e4u10-l5-x1", type:"order", q:"Put these institutions in the order they were created.", items:[
      {t:"International Military Tribunal at Nuremberg", why:"Created by the London Charter of August 1945."},
      {t:"International Military Tribunal for the Far East (Tokyo)", why:"Established in January 1946."},
      {t:"International Criminal Tribunal for the former Yugoslavia", why:"Security Council Resolution 827, May 1993."},
      {t:"International Criminal Tribunal for Rwanda", why:"Resolution 955, November 1994."},
      {t:"International Criminal Court", why:"Rome Statute adopted 1998; in force 1 July 2002."},
      {t:"Extraordinary African Chambers in Senegal", why:"Set up in 2013 to try Hissène Habré."}
    ]},
    {id:"e4u10-l5-x2", type:"mcq", q:"State X is not a party to the Rome Statute. Its soldiers are accused of war crimes on the territory of State Y, which is a party. Can the ICC act?", options:[
      {t:"Yes: the crimes occurred on a state party’s territory, which meets Article 12, subject to complementarity.", ok:true, why:"Right. Territorial jurisdiction covers nationals of non-parties; that is the basis of the Myanmar/Bangladesh and other situations."},
      {t:"No: the ICC can never try nationals of non-parties.", why:"It can, if the crime is on a state party’s territory or the Council refers. That is exactly why non-parties object."},
      {t:"Only if State X consents.", why:"X’s consent is not required where Y’s territory provides jurisdiction."},
      {t:"Only if the ICJ first finds State X responsible.", why:"The ICC and ICJ are separate; neither depends on the other."}
    ]},
    {id:"e4u10-l5-x3", type:"number", q:"Under Article 127 of the Rome Statute, a withdrawal takes effect one year after the UN Secretary-General receives notice. If a state gives notice on 24 July 2026, in which year does its withdrawal take effect?", answer:2027, tol:0, unit:"", why:"One year after 24 July 2026 is 24 July 2027. Until then the state remains a party, and the Court keeps jurisdiction over crimes committed while it was a party.", wrongs:[
      {v:2026, tol:0, why:"Notice does not take effect immediately: there is a one-year delay."},
      {v:2028, tol:0, why:"That would be two years; Article 127 provides one year."}
    ], hint2:"Add one year to the date of notice."},
    {id:"e4u10-l5-x4", type:"match", q:"Match each judgment to what it established.", pairs:[
      ["*Tadić* (ICTY, 1995)","War crimes can occur in internal armed conflicts","A key jurisdiction decision."],
      ["*Akayesu* (ICTR, 1998)","First international genocide conviction; rape can be genocide","A landmark for feminist lawyers."],
      ["*Pinochet* (House of Lords, 1999)","No immunity from extradition for torture","Universal jurisdiction in a national court."],
      ["*Habré* (Extraordinary African Chambers, 2016)","A former head of state convicted by an AU-backed court","An African-led hybrid model."],
      ["*Ongwen* (ICC, 2021)","Conviction of a former child soldier turned commander, including for forced pregnancy","A hard case about victims who become perpetrators."]
    ]},
    {id:"e4u10-l5-x5", type:"sort", q:"Which approach does each argument come from?", buckets:["TWAIL","Feminist","Rational-choice sceptic"], items:[
      {t:"International law was formed through a “dynamic of difference” between “civilised” and “uncivilised” peoples.", b:0, why:"Anghie’s central argument."},
      {t:"Treating violence in the home as “private” left much harm to women outside international law’s concern.", b:1, why:"The critique of the public/private divide."},
      {t:"States support international courts only when it suits their interests.", b:2, why:"The Goldsmith and Posner style of argument from Lesson 2."},
      {t:"The same institutions that once ranked peoples now prosecute mostly leaders from the Global South.", b:0, why:"A TWAIL critique of selectivity."},
      {t:"A focus on prosecuting sexual violence can crowd out other harms and remedies.", b:1, why:"Engle’s internal feminist critique (2020)."}
    ]},
    {id:"e4u10-l5-x6", type:"spot", q:"A blog post about the ICC. Tap each sentence that is **inaccurate**.", ask:"inaccurate", parts:[
      {t:"The ICC is an independent court created by a treaty, not a UN organ.", flag:false, why:"Accurate: it was created by the Rome Statute and has its own Assembly of States Parties."},
      " ",
      {t:"The Security Council can refer situations to the Court and can defer investigations for 12 months.", flag:false, why:"Accurate: Articles 13(b) and 16."},
      " ",
      {t:"Once a state withdraws, the Court loses jurisdiction over everything that happened there.", flag:true, why:"Inaccurate. The Court keeps jurisdiction over crimes committed while the state was a party, as the Duterte case shows."},
      " ",
      {t:"Every case the Court has opened was started by the Prosecutor against African governments’ wishes.", flag:true, why:"Inaccurate. Several African situations were referred by the governments concerned (for example Uganda and the Democratic Republic of the Congo)."},
      " ",
      {t:"The Court has no police and depends on states to make arrests.", flag:false, why:"Accurate."}
    ]},
    {id:"e4u10-l5-x7", type:"mcq", q:"Which statement about the ECCC in Cambodia is most balanced?", options:[
      {t:"It drew large public attendance and built a lasting archive, but was slow and costly, convicted only three people and faced allegations of political interference.", ok:true, why:"Yes. It states both supporters’ and critics’ main points."},
      {t:"It was a complete failure that achieved nothing.", why:"One-sided: it convicted senior leaders, including of genocide, and engaged the public widely."},
      {t:"It was a purely international court with no Cambodian judges.", why:"Inaccurate: it was a hybrid court with Cambodian and international judges."},
      {t:"It tried hundreds of Khmer Rouge officials.", why:"Inaccurate: only three people were convicted."}
    ]}
   ],
   apply:{
    intro:"Read the courts’ own words and their critics’. Court summaries and many scholarly pieces are free online.",
    tasks:[
     {t:"Follow one ICC situation", how:[
       "On the ICC’s website (icc-cpi.int), open “Situations under investigation” and choose one from any region.",
       "Note how the situation reached the Court (state referral, Council referral or the Prosecutor), and which crimes and suspects are named.",
       "Find one statement by the government concerned and one by a critic or supporter of the Court."
     ], write:"Situation… Trigger… Crimes and suspects… Government’s statement… Another view…"},
     {t:"Compare two justice models", how:[
       "Pick one ad hoc tribunal, one hybrid court and one national trial under universal jurisdiction from this lesson.",
       "For each, note where it sat, who the judges were, and one strength and one weakness.",
       "Decide which would best suit a conflict you follow, and why."
     ], write:"Ad hoc… Hybrid… Universal jurisdiction… Strengths and weaknesses… My choice and why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was Nuremberg “victors’ justice”, and does that matter if the defendants were guilty?",
       "2. Is the Africa critique of the ICC still valid as of 2026?",
       "3. What does a TWAIL or feminist reading add to the story of international criminal justice?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one ICC situation from several perspectives, a comparison of three justice models, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"pilmpa", where:"Chapter 22 “International Criminal Law”", note:"Read it after this lesson: the crimes, modes of liability and institutions in detail."},
    {book:"pilmpa", where:"Chapter 3 “Approaches”", note:"The critical approaches, including TWAIL and feminist legal scholarship, from the authors’ multi-perspective angle."},
    {book:"eirt", where:"Chapter 8 “Feminism” and Chapter 9 “Postcolonialism”", note:"The IR theory counterparts of the legal critiques in the last section."}
   ]
  }
  ],
  checkpoint:["e4u10-q02","e4u10-q05","e4u10-q08","e4u10-q12","e4u10-q15","e4u10-q20","e4u10-q23","e4u10-q27","e4u10-q31","e4u10-q35","e4u10-q39","e4u10-q43"],
  codex:[
   {id:"sources-of-international-law", title:"Sources of international law in depth", aka:["Article 38","formal sources","hierarchy of norms"], tags:["international law","sources","custom"],
    summary:"How treaties, custom, general principles and the subsidiary means relate to each other, how each is proved, and where hierarchy enters.",
    levels:{
     starter:[
      "International law has no single law-maker. Courts and governments find the rules in a few recognised places, listed in Article 38(1) of the Statute of the International Court of Justice: **treaties**, **custom**, **general principles of law**, and, as helpers, **court decisions and the writings of leading scholars** (see {{international-law}}).",
      "Think of a family that runs on a mix of written agreements (“whoever cooks doesn’t wash up”), long habits everyone treats as rules, and common-sense fairness. Nobody ranks these in advance; when they clash, the family asks which is more specific or more recent.",
      {key:"Treaties and custom have equal force. The only clear hierarchy comes from jus cogens and from Article 103 of the UN Charter."},
      "Much of the law is drafted by the International Law Commission, a UN body of experts created in 1947."
     ],
     builder:[
      "**Proving each source.** A treaty is proved by its text and the state’s consent (ratification or accession). Custom needs evidence of a general practice and opinio juris (the ILC’s 2018 conclusions list forms of evidence: diplomatic acts, legislation, court decisions, votes, even inaction). General principles are shown by comparing legal systems, or by principles inherent in the international system, such as good faith.",
      "**Conflicts.** Lawyers apply *lex specialis* (the more specific rule prevails) and *lex posterior* (the later rule prevails between the same parties). Article 103 gives Charter obligations, including binding Security Council decisions, priority over other treaties. Jus cogens norms void conflicting treaties (VCLT Articles 53 and 64).",
      "**Subsidiary means.** ICJ judgments bind only the parties (Article 59), but in practice the Court follows its own case law closely, and other courts cite it. Scholarly writings matter less than in the past, though ILC work carries great weight.",
      "**Other law-making.** Unilateral declarations can bind (*Nuclear Tests*, 1974). General Assembly resolutions are not binding as such, but can be evidence of opinio juris (*Nuclear Weapons* opinion, 1996)."
     ],
     pro:[
      "**Debates.** Positivists stress state consent; others see a growing role for community interests (jus cogens, erga omnes obligations). The phrase “civilized nations” in Article 38(1)(c), dating from 1920, is criticised as a colonial relic, and TWAIL scholars ask whose practice counts as “general” (see {{twail}}).",
      "**Fragmentation.** The ILC’s 2006 study (finalised by Martti Koskenniemi) concluded that specialised regimes such as trade and human rights remain part of one legal system, held together by interpretation rules such as VCLT Article 31(3)(c).",
      "**Soft law and relative normativity.** Prosper Weil (1983) warned that graded normativity blurs the line between law and non-law; legalisation scholars reply that the line was never sharp (see {{soft-law}}).",
      {tip:"In a seminar, always ask: which source is being claimed, and what evidence would prove it?"}
     ]
    },
    related:["international-law","law-of-treaties","soft-law","international-courts","twail"],
    read:[{book:"pilmpa", where:"Chapter 6 “Sources of International Law”"}],
    sources:[{t:"Statute of the International Court of Justice (ICJ)", url:"https://www.icj-cij.org/statute"},{t:"Charter of the United Nations, full text (Article 103)", url:"https://www.un.org/en/about-us/un-charter/full-text"}],
    checked:"2026-11"},

   {id:"law-of-treaties", title:"The law of treaties (Vienna Convention, 1969)", aka:["VCLT","treaty law","reservations"], tags:["international law","treaties"],
    summary:"The rules on how treaties are made, interpreted, reserved, invalidated and ended, mostly codified in the 1969 Vienna Convention.",
    levels:{
     starter:[
      "A **treaty** is a written agreement between states (or international organisations) governed by international law. The rules about treaties themselves are mostly in the **Vienna Convention on the Law of Treaties** (VCLT), adopted in 1969 and in force since 1980.",
      "Its core is **pacta sunt servanda**: agreements must be kept in good faith (Article 26). A state cannot excuse a breach by pointing to its own law (Article 27).",
      "Treaties are interpreted by their ordinary meaning, in context, in light of their purpose (Article 31). States can join with **reservations** excluding some clauses, unless a reservation defeats the treaty’s purpose.",
      {key:"Treaty law is about consent: how it is given, what it covers, and how hard it is to take back."}
     ],
     builder:[
      "**Making.** Signature usually expresses intent; ratification or accession expresses consent to be bound (see [[ratification]]). Article 18 asks signatories not to defeat a treaty’s object and purpose before it enters into force.",
      "**Reservations.** The ICJ’s 1951 *Reservations to the Genocide Convention* opinion replaced the unanimity rule with a compatibility test, which the VCLT adopted (Articles 19–23). Human rights treaties raise the hardest problems: the UN Human Rights Committee’s General Comment 24 (1994) claimed a role in judging reservations, which the United States, United Kingdom and France contested.",
      "**Invalidity.** Coercion of a state by force voids a treaty (Article 52); so does conflict with jus cogens (Article 53). Newly independent states wanted economic and political coercion included; they obtained only a separate declaration.",
      "**Ending.** Material breach (Article 60) and fundamental change of circumstances (Article 62) are narrow exits. In *Gabčíkovo–Nagymaros* (1997) the ICJ rejected Hungary’s attempt to end a dam treaty."
     ],
     pro:[
      "**Custom and the VCLT.** Courts treat most VCLT rules as customary, so they apply to non-parties too. Articles 31–32 are applied by almost every international court, including WTO panels and investment tribunals.",
      "**Interpretation debates.** Textualists stress ordinary meaning; others stress object and purpose or “evolutionary” interpretation of terms meant to change over time. Subsequent agreement and practice (Article 31(3)) let states update meaning without amending the text.",
      "**History.** The [[unequal-treaty|unequal treaties]] of the 19th century, and the colonial treaties used to justify empire, are part of why Asian and African states pressed for Article 52 and for jus cogens at the 1968–69 Vienna conference.",
      {tip:"When a state says it is “withdrawing” from a treaty, check the treaty’s own withdrawal clause first; the VCLT applies only where the treaty is silent."}
     ]
    },
    related:["sources-of-international-law","international-law","soft-law"],
    read:[{book:"pilmpa", where:"Chapter 6 “Sources of International Law”"}],
    sources:[{t:"Vienna Convention on the Law of Treaties, 1969 (UN text)", url:"https://legal.un.org/ilc/texts/instruments/english/conventions/1_1_1969.pdf"}],
    checked:"2026-11"},

   {id:"soft-law", title:"Soft law and legalisation", aka:["non-binding instruments","legalization"], tags:["international law","soft law","institutions"],
    summary:"Non-binding norms that still shape behaviour, and the IR theory of when states choose hard or soft law.",
    levels:{
     starter:[
      "**Soft law** is the name for rules that are not legally binding but that states and others still take seriously: declarations, guidelines, codes of conduct and standards.",
      "Think of a group of neighbours who sign a friendly pledge to keep noise down after 10 p.m. Nobody can be sued for breaking it, but most keep it, and it shapes what counts as reasonable.",
      "Examples include the Helsinki Final Act (1975), the Rio Declaration (1992), the UN Guiding Principles on Business and Human Rights (2011) and the 2002 ASEAN–China Declaration on the Conduct of Parties in the South China Sea.",
      {key:"Soft law can harden: the Universal Declaration of Human Rights was non-binding in 1948, and parts of it are now widely treated as custom."}
     ],
     builder:[
      "**Legalisation.** In a 2000 special issue of *International Organization*, Abbott, Keohane, Moravcsik, Slaughter and Snidal described legalisation on three dimensions: **obligation**, **precision** and **delegation** to third parties. An instrument can be high on one and low on others.",
      "**Why choose soft law?** Abbott and Snidal argued that soft law lowers contracting and sovereignty costs, handles uncertainty, and allows compromise between states with different preferences. Hard law makes commitments more credible.",
      "**How soft law works.** It can be evidence of opinio juris, a first step towards a treaty, a guide to interpreting treaties, or a standard enforced by markets and peers (financial standards are an example).",
      {tip:"In essays, say “non-binding instrument” rather than “not law”: soft law has legal effects, just not binding ones."}
     ],
     pro:[
      "**Critiques.** Prosper Weil’s “Towards Relative Normativity in International Law?” (1983) warned that soft law and jus cogens together erode the clarity of the legal/non-legal line. Some TWAIL scholars add that soft law lets powerful actors set standards without the accountability of treaty-making; others see it as a tool weaker states use to put issues on the agenda.",
      "**Asian practice.** Regional cooperation in Southeast Asia has relied heavily on declarations and consensus (the [[asean-way|ASEAN way]]), which scholars read either as weakness or as a deliberate, flexible form of legalisation.",
      "**Research use.** Legalisation is a useful variable: compare how obligation, precision and delegation differ across regimes, and whether compliance differs too (see {{compliance-theories}})."
     ]
    },
    related:["sources-of-international-law","compliance-theories","neoliberal-institutionalism"],
    sources:[{t:"UN Guiding Principles on Business and Human Rights (OHCHR)", url:"https://www.ohchr.org/"}],
    checked:"2026-11"},

   {id:"compliance-theories", title:"Why states comply with international law", aka:["compliance","managerial model","transnational legal process"], tags:["international law","theory","compliance"],
    summary:"The rival explanations of compliance, from management and enforcement to legitimacy, transnational legal process and rational choice.",
    levels:{
     starter:[
      "States mostly keep international law, even without a world police. Louis Henkin wrote in 1968 that “almost all nations observe almost all principles of international law and almost all of their obligations almost all of the time.” The question is **why**.",
      "Think of why people stop at red lights: habit, fear of a fine, belief that the rule is fair, or simply because crashing is bad for everyone. Each theory of compliance stresses a different one of these.",
      {key:"Compliance (behaviour matches the rule) is not the same as effectiveness (the rule changed behaviour)."},
      "Theories range from optimistic (states have a propensity to comply) to sceptical (states do what they would do anyway)."
     ],
     builder:[
      {table:[
        ["Theory","Main works","Why states comply"],
        ["Managerial","Chayes & Chayes 1993, 1995","Propensity to comply; failures come from ambiguity, capacity, time lags"],
        ["Enforcement","Downs, Rocke & Barsoom 1996","Deep cooperation needs punishment; high compliance may reflect shallow treaties"],
        ["Legitimacy","Franck 1990","Legitimate rules exert a compliance pull"],
        ["Transnational legal process","Koh 1997","Interaction, interpretation, internalisation"],
        ["Rational choice (sceptical)","Goldsmith & Posner 2005","Interests, not law, explain behaviour"],
        ["Rational choice (law matters)","Guzman 2008","Reputation, reciprocity, retaliation"]
      ]},
      "Each theory implies a policy: management suggests reporting and capacity-building; enforcement suggests sanctions; legitimacy suggests fair procedures; process suggests litigation and domestic incorporation.",
      "**Mixing them.** Most scholars now combine mechanisms: managerial tools for capacity problems, enforcement for deep commitments, legitimacy and internalisation for norms that become part of a state’s identity. The Montreal Protocol on the ozone layer is often cited because it uses several at once: reporting and review, a fund that pays for capacity, and restrictions on trade in controlled substances with non-parties."
     ],
     pro:[
      "**Testing.** Selection effects are the central methodological problem: states choose which treaties to join and which disputes to send to court. Comparing similar states inside and outside a treaty, or before and after, helps (see {{case-selection}} and {{regression-causal-inference}}).",
      "**Evidence from courts.** Studies of ICJ judgments (for example Paulson, 2004) find mostly full or partial compliance, with resistance when vital interests are involved. Domestic institutions matter: *Medellín v. Texas* (2008) shows a national court limiting the effect of an ICJ judgment.",
      "**Human rights.** Whether human rights treaties change behaviour is a separate, rich debate (Hathaway 2002; Simmons 2009), covered with the human rights material.",
      {tip:"A strong seminar answer names a mechanism, a rule and a condition: “for coordination rules, compliance is high because…; for deep commitments, enforcement matters because…”."}
     ]
    },
    related:["harold-koh","neoliberal-institutionalism","norm-dynamics","realism","international-law"],
    sources:[{t:"Montreal Protocol (UNEP Ozone Secretariat)", url:"https://ozone.unep.org/treaties/montreal-protocol"}],
    checked:"2026-11"},

   {id:"use-of-force-law", title:"The law on the use of force (jus ad bellum)", aka:["Article 2(4)","self-defence","Article 51","jus ad bellum"], tags:["international law","force","security"],
    summary:"The Charter’s prohibition of force, its exceptions, and the contested questions of anticipatory self-defence and non-state actors.",
    levels:{
     starter:[
      "The UN Charter bans the threat or use of force between states (Article 2(4)). There are two clear exceptions: force authorised by the Security Council, and **self-defence** against an armed attack (Article 51).",
      "Think of a school rule against fighting with two exceptions: a teacher may separate fighters, and you may defend yourself if someone hits you. The arguments start with “he was about to hit me”.",
      {key:"*Jus ad bellum* is the law on whether force may be used. The separate law on how wars are fought is [[international-humanitarian-law|international humanitarian law]] (*jus in bello*)."},
      "Almost every state that uses force claims it is lawful. That is why lawyers say the rule is alive even when broken."
     ],
     builder:[
      "**Self-defence requirements.** An armed attack (the “most grave forms” of force, *Nicaragua* 1986), necessity, proportionality and immediate reporting to the Council. Collective self-defence needs the victim’s request.",
      "**Timing.** Anticipatory self-defence against an imminent attack is accepted by many (the *Caroline* test, 1837/1841); preventive force against distant threats is widely rejected (Resolution 487 on Osirak, 1981). The UN High-level Panel (2004) told states to take non-imminent threats to the Council.",
      "**Non-state actors.** Resolutions 1368 and 1373 (2001) recognised self-defence after 9/11; the *Wall* opinion (2004) read Article 51 narrowly; the “unwilling or unable” doctrine (Syria, from 2014) is contested.",
      "**Consent.** Intervention by invitation is accepted, but disputed when the inviting government’s authority is in question."
     ],
     pro:[
      "**Classic debate.** Franck’s “Who Killed Article 2(4)?” (1970) and Henkin’s reply (1971) frame the question of whether violations destroy a rule or confirm it.",
      "**Hard cases.** Iraq 2003 (the “revival” argument from Resolutions 678, 687 and 1441, contested by many states) and Ukraine 2022 (Russia’s Article 51 claim; Resolution ES-11/1 deploring aggression; the ICJ’s order of 16 March 2022) are standard seminar cases. Describe each side’s legal argument and the institutional responses.",
      "**Aggression.** General Assembly Resolution 3314 (1974) defined aggression; the ICC’s jurisdiction over the crime has been active since 2018 with narrow limits (see {{icc-debates}}).",
      "**Cyber.** Whether a cyber operation can be an armed attack depends on its scale and effects; expert manuals (the Tallinn Manuals) are influential but not binding."
     ]
    },
    related:["humanitarian-intervention","responsibility-to-protect","un-security-council","international-law","security-studies"],
    sources:[{t:"Charter of the United Nations, full text", url:"https://www.un.org/en/about-us/un-charter/full-text"}],
    checked:"2026-11"},

   {id:"humanitarian-intervention", title:"Humanitarian intervention", aka:["intervention for humanity","unilateral humanitarian intervention"], tags:["international law","force","human rights"],
    summary:"The debate over whether states may use force without Council authorisation to stop mass atrocities, and how R2P reshaped it.",
    levels:{
     starter:[
      "**Humanitarian intervention** means using military force in another state, without its consent, to stop mass atrocities against its people.",
      "The hard question is not whether atrocities matter, but **who decides** when force is justified. The UN Charter gives that decision to the Security Council, where any permanent member can veto.",
      "The idea is older than the UN. In the 19th century European powers claimed to intervene to protect Christian minorities in the Ottoman Empire; critics then and since have seen such claims as cover for imperial interests.",
      "NATO’s 1999 bombing over Kosovo, without Council authorisation, made the modern debate famous; an independent commission called it “illegal but legitimate” (see {{responsibility-to-protect}}).",
      {key:"R2P (2005) did not create a right of unilateral intervention: it channelled forcible action through the Council."}
     ],
     builder:[
      "**History.** India in East Pakistan (1971), Vietnam in Cambodia (1978–79) and Tanzania in Uganda (1979) ended abusive governments, but each mainly claimed self-defence. Vietnam’s action was widely condemned.",
      {table:[
        ["View","Example"],
        ["A limited right exists","United Kingdom, 2018 legal position on Syria (extreme distress, no alternative, necessity and proportionality)"],
        ["No such right","Group of 77, South Summit, Havana, 2000 (paragraph 54)"],
        ["Only through the Council","2005 World Summit Outcome, paragraph 139"]
      ]},
      "Simon Chesterman’s *Just War or Just Peace?* (2001) concluded that practice does not support a legal right."
     ],
     pro:[
      "**Arguments for a right**: Article 2(4) bans force against territorial integrity or political independence, which a limited rescue might not threaten; human rights are among the UN’s purposes; Council paralysis should not condemn victims.",
      "**Arguments against**: the drafting history and practice; the risk of abuse by powerful states; postcolonial memory of “civilising” interventions (see {{postcolonialism-ir}}); the Libya 2011 experience, which many states read as a protection mandate turned into regime change.",
      {tip:"Distinguish legality (what the law allows), legitimacy (what is widely accepted as justified) and prudence (what is likely to work). Kosovo’s “illegal but legitimate” verdict sits exactly on that line."}
     ]
    },
    related:["responsibility-to-protect","use-of-force-law","human-rights-regime","postcolonialism-ir"],
    sources:[{t:"Declaration of the South Summit, Havana, April 2000 (Group of 77)", url:"https://www.g77.org/summit/Declaration_G77Summit.htm"},{t:"Responsibility to protect (UN Office on Genocide Prevention)", url:"https://www.un.org/en/genocide-prevention/responsibility-protect/about"}],
    checked:"2026-11"},

   {id:"law-of-the-sea", title:"The law of the sea (UNCLOS)", aka:["UNCLOS","maritime zones","EEZ"], tags:["international law","oceans","territory"],
    summary:"The 1982 Convention’s maritime zones, navigation rights, islands rule and dispute settlement, plus the 2023 BBNJ Agreement.",
    levels:{
     starter:[
      "The **UN Convention on the Law of the Sea** (UNCLOS), signed in 1982 and in force since 1994, divides the oceans into zones measured from a coastal state’s **baseline**.",
      "Nearest the coast is the **territorial sea** (12 nautical miles), almost like land. Then a **contiguous zone** (24 nm) for customs and immigration control, an **exclusive economic zone** (200 nm) where the coastal state controls resources, and beyond that the **high seas**, open to all. The seabed has its own regime: the **continental shelf** can reach up to 350 nm.",
      {key:"Because every zone is measured from land, who owns a tiny island can decide who controls a huge area of sea."},
      "About 170 parties, including the European Union, had joined as of early 2026. The United States has not, but follows most of the rules as custom."
     ],
     builder:[
      "**Navigation.** Innocent passage in the territorial sea; transit passage through straits used for international navigation; archipelagic sea lanes passage in archipelagic waters (a concept championed by Indonesia and the Philippines).",
      "**Islands.** Article 121(3): rocks that cannot sustain human habitation or economic life of their own get no EEZ or shelf. Low-tide elevations get no territorial sea of their own.",
      "**Disputes.** Part XV makes dispute settlement compulsory, through ITLOS, the ICJ or arbitration, but Article 298 lets states opt out of some categories (boundary delimitation, military activities). Compulsory conciliation helped Timor-Leste and Australia agree a boundary (2018).",
      "**The deep seabed** is the “common heritage of mankind” (the Area), managed by the International Seabed Authority under a 1994 implementing agreement."
     ],
     pro:[
      "**BBNJ.** The Agreement on Marine Biological Diversity of Areas beyond National Jurisdiction, adopted 19 June 2023, entered into force on 17 January 2026. It covers marine genetic resources, area-based tools such as high-seas protected areas, environmental impact assessments and capacity-building.",
      "**Open questions.** Military activities in the EEZ (a US–China disagreement), the effect of sea-level rise on baselines, and the island–rock line (Okinotorishima) are live debates.",
      "**Arctic.** The coastal states’ Ilulissat Declaration (2008) affirmed that the law of the sea governs; overlapping shelf submissions and the status of the Northwest Passage remain unresolved.",
      {tip:"When reading a maritime dispute, separate sovereignty over land (not governed by UNCLOS) from maritime entitlements (governed by UNCLOS)."}
     ]
    },
    related:["south-china-sea-arbitration","territory-and-boundaries","icj-in-practice"],
    read:[{book:"pilmpa", where:"Chapter 15 “Law of the Sea”"}],
    sources:[{t:"Implementing Agreements under UNCLOS (US Congressional Research Service, January 2026)", url:"https://www.everycrsreport.com/reports/IF12578.html"},{t:"What is the BBNJ Agreement? (Grantham Research Institute, LSE)", url:"https://www.lse.ac.uk/granthaminstitute/explainers/what-is-the-bbnj-agreement-on-the-conservation-and-sustainable-use-of-marine-biological-diversity/"}],
    checked:"2026-11"},

   {id:"south-china-sea-arbitration", title:"The South China Sea arbitration (2016)", aka:["Philippines v. China","nine-dash line case"], tags:["international law","oceans","Asia-Pacific"],
    summary:"The 2013–16 UNCLOS arbitration brought by the Philippines, its findings, and the positions of both parties, described neutrally.",
    levels:{
     starter:[
      "In January 2013 the Philippines started an arbitration against China under the UN Convention on the Law of the Sea. China did not take part. A five-member tribunal gave its award on **12 July 2016**.",
      "The tribunal did **not** decide who owns any island. It ruled on what rights the features and waters generate and on certain conduct at sea.",
      "The Philippines says the award is final and binding. China says the tribunal had no jurisdiction and the award is “null and void”.",
      {key:"A good summary always gives both positions and separates the tribunal’s findings from either government’s claims."}
     ],
     builder:[
      "**Findings** (from the tribunal’s press release): no legal basis for China to claim historic rights to resources within the nine-dash line beyond what UNCLOS provides; all high-tide Spratly features examined, including Itu Aba, are rocks with no EEZ; Mischief Reef and Second Thomas Shoal are low-tide elevations; China violated the Philippines’ sovereign rights in its EEZ; island-building caused severe harm to coral reefs; and China aggravated the dispute during the proceedings.",
      "**Tribunal**: Thomas A. Mensah (president), Jean-Pierre Cot, Stanislaw Pawlak, Alfred Soons and Rüdiger Wolfrum; the Permanent Court of Arbitration served as registry. An award on jurisdiction came first (October 2015).",
      {table:[
        ["Issue","Philippines","China"],
        ["Jurisdiction","Compulsory under UNCLOS Part XV","Excluded: sovereignty and delimitation issues; China’s 2006 Article 298 declaration"],
        ["Effect","Binding (Article 296)","“No binding force”"],
        ["Next steps","Implementation","Bilateral negotiation"]
      ]}
     ],
     pro:[
      "**Scholarly debate.** Supporters stress the tribunal’s careful jurisdictional reasoning and the clarification of Article 121(3). Critics, including Chinese scholars, argue that the tribunal reframed a sovereignty dispute as a maritime one, and some international lawyers questioned its strict reading of “rock”, which would affect features claimed by many states.",
      "**Responses.** Some governments (including the United States, Japan and Australia) urged both parties to treat the award as binding; others backed China’s preference for negotiation. The authorities in Taiwan, which administer Itu Aba, also rejected the finding on that feature.",
      "**As of November 2026** both governments maintained their positions, and incidents at sea continued to be reported. ASEAN–China talks on a Code of Conduct have run for years, with a stated aim of concluding in 2026; check current status before writing.",
      {warn:"Avoid loaded labels (“illegal ruling”, “China’s defeat”). Attribute, date and cite the award itself."}
     ]
    },
    related:["law-of-the-sea","territory-and-boundaries","japan-and-neighbours"],
    sources:[{t:"PCA press release on the Award of 12 July 2016 (copy at NUS Centre for International Law)", url:"https://cil.nus.edu.sg/wp-content/uploads/2016/12/Eleventh-Press-Release-12072016-English.pdf"}],
    checked:"2026-11"},

   {id:"territory-and-boundaries", title:"Territory, title and boundaries", aka:["territorial sovereignty","uti possidetis","effectivités"], tags:["international law","territory","borders"],
    summary:"How title to territory is acquired and proved, and the principle that new states inherit colonial borders.",
    levels:{
     starter:[
      "When two states claim the same land, courts ask which has better **title**: a legal basis for sovereignty.",
      "Think of a disputed garden. One neighbour says “my grandfather saw it first”; the other says “I have mown it, fenced it and paid tax on it for fifty years, and you never complained.” International law usually prefers the second kind of evidence.",
      {key:"Peaceful, continuous display of state authority, and the other side’s silence, often decide territorial cases."},
      "New states born from empires usually inherit the old colonial borders: the principle of **uti possidetis**."
     ],
     builder:[
      "**Leading cases.** *Island of Palmas* (1928, Max Huber): discovery gives only inchoate title; effective display of authority prevails. *Temple of Preah Vihear* (1962): Thailand’s acceptance of a map by conduct. *Ligitan and Sipadan* (2002): Malaysia’s effectivités. *Pedra Branca* (2008): Singapore’s lighthouse administration and Malaysia’s lack of reaction.",
      "**Tools.** Effectivités, acquiescence and the critical date (after which new acts count for little). Treaties and maps matter if they express the parties’ agreement.",
      "**Terra nullius.** The *Western Sahara* opinion (1975) held that territory inhabited by socially and politically organised peoples was not terra nullius."
     ],
     pro:[
      "**Uti possidetis.** From Spanish America (1810s) to the OAU’s 1964 Cairo resolution and *Burkina Faso/Mali* (1986), it turned colonial administrative lines into international borders; the Badinter Commission applied a similar logic to Yugoslavia’s republics (1992). Critics say it sanctifies imperial lines; defenders say alternatives would invite war.",
      "**Self-determination.** The *Chagos* opinion (2019) found decolonisation of Mauritius incomplete because of the prior separation of the archipelago, linking territory to the right of peoples to [[self-determination]].",
      "**Consent.** Many disputes, including several in Northeast Asia, never reach a court because the parties have not consented (see {{japan-and-neighbours}}).",
      {tip:"Ask of any territorial claim: what is the claimed title, what is the critical date, and what effectivités or acquiescence can each side show?"}
     ]
    },
    related:["law-of-the-sea","icj-in-practice","sovereignty","twail"],
    sources:[{t:"Statute of the International Court of Justice", url:"https://www.icj-cij.org/statute"}],
    checked:"2026-11"},

   {id:"icj-in-practice", title:"The ICJ in practice: jurisdiction and caseload", aka:["World Court","contentious cases","optional clause"], tags:["international law","courts"],
    summary:"How cases reach the International Court of Justice, what provisional measures do, and what its docket looked like in 2026.",
    levels:{
     starter:[
      "The **International Court of Justice** settles disputes between states and gives advisory opinions to UN bodies (see {{international-courts}}). It can hear a case only if the states concerned have consented.",
      "Consent comes in three main ways: a **special agreement** for one dispute; a **treaty clause** sending disputes to the Court (for example Article IX of the Genocide Convention); or the **optional clause**, a declaration accepting the Court’s jurisdiction in advance (Article 36(2)).",
      {key:"No consent, no case. That is why many famous disputes have never been decided by the Court."},
      "In 2026 reports described its docket as the busiest in its history."
     ],
     builder:[
      "**Provisional measures.** The Court can order urgent steps to protect rights while a case continues, as in *The Gambia v. Myanmar* (2020) and *Ukraine v. Russia* (16 March 2022). Since *LaGrand* (2001) these orders are binding.",
      "**Recent docket.** Cases in 2026 included Myanmar’s treatment of the Rohingya, South Africa’s case against Israel concerning Gaza, Ukraine’s Genocide Convention case against Russia and the Guyana–Venezuela boundary. Advisory opinions have addressed Israel’s policies in the occupied Palestinian territory (2024), climate change (2025, unanimous) and UN activities in the occupied Palestinian territory (2025).",
      "**Judges.** Fifteen judges serve nine-year terms. Iwasawa Yuji of Japan became President in 2025."
     ],
     pro:[
      "**Compliance.** Studies find most judgments complied with in whole or part; failures cluster where vital interests are at stake (see {{compliance-theories}}). Enforcement through the Security Council (Article 94(2) of the Charter) has never been used effectively.",
      "**Global South use.** Many recent cases were brought by smaller and Global South states, sometimes as “strategic litigation” on behalf of community interests (erga omnes partes), which critics see as politicising the Court and supporters see as democratising it.",
      "**Limits.** Fewer than half of UN members (about 74 states) accept the optional clause, many with reservations; of the permanent Council members, only the United Kingdom does.",
      {tip:"Always check the basis of jurisdiction in a case summary: it tells you what the Court could and could not decide."}
     ]
    },
    related:["international-courts","compliance-theories","territory-and-boundaries","international-law"],
    sources:[{t:"Statute of the International Court of Justice", url:"https://www.icj-cij.org/statute"},{t:"AP: World Court celebrates 80 years (April 2026)", url:"https://m.washingtontimes.com/news/2026/apr/17/world-court-celebrates-80-year-anniversary-international-legal/"}],
    checked:"2026-11"},

   {id:"international-criminal-tribunals", title:"International criminal tribunals: Nuremberg to the hybrid courts", aka:["ICTY","ICTR","ECCC","Special Court for Sierra Leone"], tags:["international law","criminal justice","history"],
    summary:"How individual criminal responsibility was built through the post-war tribunals, the 1990s ad hoc tribunals, hybrid courts and universal jurisdiction.",
    levels:{
     starter:[
      "Until 1945 international law dealt almost only with states. The **Nuremberg** and **Tokyo** tribunals put individual leaders on trial for crimes against peace, war crimes and crimes against humanity (see {{world-war-two}}).",
      "Their key idea, in Nuremberg’s words: “Crimes against international law are committed by men, not by abstract entities.” Holding an office is no defence.",
      "After the Cold War, the Security Council set up tribunals for the former Yugoslavia (1993) and Rwanda (1994). Later came **hybrid courts**, mixing national and international judges, in Sierra Leone, Cambodia and Senegal.",
      {key:"Each model trades off legitimacy, cost, speed and closeness to the people affected."}
     ],
     builder:[
      {table:[
        ["Model","Examples","Strengths and weaknesses"],
        ["Military tribunals of the victors","Nuremberg 1945–46; Tokyo 1946–48","Founding precedents; criticised as victors’ justice"],
        ["UN ad hoc tribunals","ICTY (161 indicted, closed 2017); ICTR (93 indicted, closed 2015)","Built modern case law; costly, slow, far from victims"],
        ["Hybrid courts","Sierra Leone (2002); ECCC (2006); Extraordinary African Chambers (2013)","Closer to affected societies; funding and political pressures"],
        ["National courts, universal jurisdiction","Eichmann (1961); Pinochet ruling (1999)","Any state can act; selective and diplomatically sensitive"]
      ]},
      "Landmark rulings: *Tadić* (1995) on war crimes in internal conflicts; *Akayesu* (1998), the first international genocide conviction and a ruling that rape can be genocide; *Taylor* (2012), a former head of state convicted by the Sierra Leone court; *Habré* (2016)."
     ],
     pro:[
      "**Tokyo.** 25 of 28 accused were convicted; Justice Radhabinod Pal of India dissented, rejecting the legitimacy of the charge of crimes against peace, and other judges wrote separate opinions. The decision not to try Emperor Hirohito remains debated. Command responsibility owes much to the 1945 Yamashita trial in Manila, criticised for imposing liability without proof of knowledge.",
      "**ECCC.** Three convictions (Kaing Guek Eav, Nuon Chea, Khieu Samphan), with genocide convictions in 2018 concerning the Cham and Vietnamese; Khieu Samphan’s appeal was rejected in 2022. Debates centre on cost, delay and alleged political limits on prosecutions.",
      "**Legacy.** The Residual Mechanism continues ICTY and ICTR work. Rwanda’s community *gacaca* courts tried far more cases than the ICTR, raising the question of whether international trials or local processes better serve [[transitional-justice|transitional justice]].",
      {tip:"In essays, distinguish the legal legacy (doctrines, definitions) from the social legacy (what affected communities saw and believed)."}
     ]
    },
    related:["icc-debates","international-courts","world-war-two","peacebuilding","feminist-international-law"],
    read:[{book:"pilmpa", where:"Chapter 22 “International Criminal Law”"}],
    sources:[{t:"The Court today (International Criminal Court)", url:"https://www.icc-cpi.int/about/the-court"}],
    checked:"2026-11"},

   {id:"icc-debates", title:"The ICC: jurisdiction, membership and critics", aka:["International Criminal Court","Rome Statute","Africa critique"], tags:["international law","criminal justice","courts"],
    summary:"How the ICC’s jurisdiction works, its membership and situations as of November 2026, and the main critiques with replies.",
    levels:{
     starter:[
      "The **International Criminal Court** in The Hague tries individuals for genocide, crimes against humanity, war crimes and aggression. It was created by the Rome Statute (adopted 1998, in force 2002) and is separate from the UN (see {{international-courts}}).",
      "It is a court of last resort: it acts only when national courts are unwilling or unable to act genuinely ([[complementarity]]). It has no police and relies on states to arrest suspects.",
      {key:"As of November 2026, 125 states were parties; five had given notice of withdrawal taking effect in 2027."},
      "Supporters see it as a hope against impunity; critics see selective justice. Both views are argued seriously."
     ],
     builder:[
      "**Triggers** (Article 13): state referral, Security Council referral, or the Prosecutor acting proprio motu with judges’ authorisation. **Preconditions** (Article 12): territory or nationality of a state party, unless the Council refers.",
      "**Non-party nationals.** Territorial jurisdiction allowed action over deportations from Myanmar into Bangladesh (2018 ruling), and over situations in Ukraine and Palestine; warrants for Russia’s president (2023) and Israel’s prime minister and a former defence minister (2024) followed. The governments concerned reject jurisdiction.",
      "**Membership changes.** Burundi (2017) and the Philippines (2019) left. Burkina Faso, Mali and Niger gave notice in June 2026, Venezuela and Chad in July 2026, each effective one year after notice (Article 127). Hungary’s new parliament voted in May 2026 to revoke its planned withdrawal, before it took effect.",
      "**Philippines.** The Court kept jurisdiction over crimes committed while the Philippines was a party; Rodrigo Duterte was surrendered in March 2025 and charges of crimes against humanity were confirmed on 23 April 2026, committing him to trial."
     ],
     pro:[
      {table:[
        ["Critique","Reply"],
        ["Focus on Africa (AU, from 2013)","Many cases were self-referrals; investigations now span several continents"],
        ["Great powers escape","The Council’s veto, not the Court, protects them; recent warrants target leaders of powerful states"],
        ["Peace versus justice","Impunity can fuel conflict; prosecutions can also marginalise spoilers"],
        ["Jurisdiction over non-parties","Territorial criminal jurisdiction is ordinary in law"]
      ]},
      "**Pressure on the Court.** In 2025 the United States imposed sanctions on the Prosecutor and several judges; the Court and many states parties condemned them, while the US government said they protected its personnel and allies. Russia withdrew its signature in 2016; the United States announced in 2002 it did not intend to ratify.",
      "**Aggression.** Since 2018 the Court can try the crime of aggression, but not over nationals of non-parties without a Council referral, one reason some states support a separate Special Tribunal for the Crime of Aggression against Ukraine, agreed between Ukraine and the Council of Europe in 2025.",
      {warn:"Membership and case status change quickly. Check the Assembly of States Parties’ list and the Court’s case pages before citing numbers."}
     ]
    },
    related:["international-courts","international-criminal-tribunals","twail","use-of-force-law"],
    read:[{book:"pilmpa", where:"Chapter 22 “International Criminal Law”"}],
    sources:[{t:"States Parties to the Rome Statute (ICC Assembly of States Parties)", url:"https://asp.icc-cpi.int/states-parties"},{t:"Presidency of the Assembly urges Chad and Venezuela to reconsider withdrawal (ASIL, 2026)", url:"https://asil.org/ilib/presidency-of-the-assembly-states-parties-urges-chad-and-venezuela-to-reconsider-withdrawal-decision/"},{t:"ICC Pre-Trial Chamber I confirms all charges against Rodrigo Roa Duterte (ICC press release, 23 April 2026)", url:"https://www.icc-cpi.int/news/icc-pre-trial-chamber-i-confirms-all-charges-against-rodrigo-roa-duterte-and-commits-him-trial"}],
    checked:"2026-11"},

   {id:"twail", title:"TWAIL: Third World Approaches to International Law", aka:["Third World Approaches to International Law","postcolonial international law"], tags:["international law","theory","postcolonial"],
    summary:"A scholarly movement that studies how colonialism shaped international law and how the Global South can use, resist and remake it.",
    levels:{
     starter:[
      "**TWAIL** stands for Third World Approaches to International Law. It is a network of scholars, many from Asia, Africa and Latin America, who ask how international law was shaped by **colonialism** and whether it still works unevenly.",
      "Think of a club whose rules were written before most current members were allowed in. The rules may now apply to everyone, but they may still favour the founders.",
      "TWAIL grew from discussions among graduate students at Harvard Law School in 1996, with a first meeting in 1997.",
      {key:"TWAIL is critical but not anti-law: it also studies how newly independent states used law to win sovereignty, resources and rights."}
     ],
     builder:[
      "**Key works.** Antony Anghie, *Imperialism, Sovereignty and the Making of International Law* (2005): the discipline was formed through a “dynamic of difference” between “civilised” and “uncivilised” peoples (see {{antony-anghie}}). B. S. Chimni, “Third World Approaches to International Law: A Manifesto” (2006). Makau Mutua, “Savages, Victims, and Saviors: The Metaphor of Human Rights” (2001).",
      "**Generations.** Scholars distinguish “TWAIL I”, the first post-independence generation (for example R. P. Anand of India and Mohammed Bedjaoui of Algeria), from “TWAIL II”, the post-1990s movement.",
      "**Themes.** The [[standard-of-civilisation|standard of civilisation]] and the [[mandate-system|mandate system]]; the New International Economic Order (see {{third-world-project}}); development, debt and investment law; selectivity in international criminal justice; the *Chagos* advisory opinion (2019) as unfinished decolonisation."
     ],
     pro:[
      "**Debates within TWAIL.** Should the Global South reform international law from within or treat it as structurally imperial? Some TWAIL scholars defend the ICC while criticising its record; others see it as a new civilising mission.",
      "**Related perspectives.** Japan’s Onuma Yasuaki proposed a “transcivilisational” perspective on international law (2017). Global IR in international relations raises parallel questions (see {{postcolonialism-ir}}).",
      "**Critiques of TWAIL.** Critics say the category “Third World” is too broad, that it underplays the agency of non-Western states in shaping law, or that critique can drift away from concrete reform proposals. TWAIL scholars reply that history and structure must be understood before reform.",
      {tip:"Use TWAIL as a lens with questions: who made this rule, when, with whom absent, and who bears its costs today?"}
     ]
    },
    related:["antony-anghie","postcolonialism-ir","third-world-project","feminist-international-law","icc-debates"],
    read:[{book:"pilmpa", where:"Chapter 3 “Approaches”"}],
    sources:[{t:"TWAIL Coordinates (Critical Legal Thinking, 2019)", url:"https://criticallegalthinking.com/2019/04/02/twail-coordinates/"}],
    checked:"2026-11"},

   {id:"feminist-international-law", title:"Feminist approaches to international law", aka:["feminist legal theory","gender and international law"], tags:["international law","theory","gender"],
    summary:"How feminist scholars analyse the boundaries and institutions of international law, what they changed, and the debates among them.",
    levels:{
     starter:[
      "**Feminist approaches** ask how international law treats women and gender, and whose experiences it was built around.",
      "Their founding text is Hilary Charlesworth, Christine Chinkin and Shelley Wright, “Feminist Approaches to International Law” (*American Journal of International Law*, 1991), followed by Charlesworth and Chinkin’s *The Boundaries of International Law* (2000) (see {{hilary-charlesworth}}).",
      "A central idea is the **public/private divide**: law focused on what states do in public, leaving harm in homes and families outside international concern.",
      {key:"Feminist critique changed the law: rape and sexual violence are now prosecuted as war crimes, crimes against humanity and even genocide."}
     ],
     builder:[
      "**Institutions.** Women were long almost absent from international courts and diplomacy. The ICJ had no woman judge until Rosalyn Higgins was elected in 1995; she later served as its President (2006–09). Feminist scholars track representation and ask whether it changes outcomes, not only who sits on the bench.",
      "**Criminal law.** *Akayesu* (ICTR, 1998) held rape could be genocide; ICTY cases recognised rape as torture and enslavement; the Rome Statute lists rape, sexual slavery, enforced prostitution, forced pregnancy and enforced sterilisation; *Ongwen* (ICC, 2021) included the first conviction for forced pregnancy.",
      "**Security.** Feminist legal and IR scholars helped shape the Women, Peace and Security agenda (Security Council Resolution 1325, 2000) (see {{feminism-ir}})."
     ],
     pro:[
      "**Internal debates.** Karen Engle’s *The Grip of Sexual Violence in Conflict* (2020) argued that focusing on criminal prosecution of sexual violence can crowd out other harms (economic, political) and non-criminal remedies. Others question “carceral” strategies or a focus on women as victims rather than agents.",
      "**Intersections.** Postcolonial and TWAIL feminists ask whose women are imagined in international law, and warn against “saving” narratives (compare Mutua’s critique of human rights).",
      {tip:"Ask of any rule or institution: who was in the room, whose harms count as international, and who benefits from the remedy?"}
     ]
    },
    related:["hilary-charlesworth","feminism-ir","twail","international-criminal-tribunals"],
    read:[{book:"pilmpa", where:"Chapter 3 “Approaches”"}],
    sources:[{t:"The Court today (International Criminal Court)", url:"https://www.icc-cpi.int/about/the-court"}],
    checked:"2026-11"},

   {id:"antony-anghie", title:"Antony Anghie", aka:["Anghie"], tags:["thinker","international law","postcolonial"],
    summary:"A leading TWAIL scholar whose history of international law places colonialism at its centre.",
    levels:{
     starter:[
      "**Antony Anghie** is an international lawyer born in Sri Lanka, educated in Australia and the United States, who taught for many years at the University of Utah and later at the National University of Singapore.",
      "His big idea is that colonialism was not a side story in international law but central to how its key concepts, especially **sovereignty**, were made.",
      {key:"International law, he argues, defined itself by distinguishing “civilised” from “uncivilised” peoples, and then offered to civilise the latter."}
     ],
     builder:[
      "**Main work.** *Imperialism, Sovereignty and the Making of International Law* (Cambridge University Press, 2005). Anghie traces a **dynamic of difference** from the 16th-century Spanish jurist Francisco de Vitoria, through 19th-century positivism and the [[standard-of-civilisation|standard of civilisation]], to the League’s [[mandate-system|mandate system]] and post-war development institutions.",
      "He also co-edited *The Third World and International Order* (2003) with B. S. Chimni, Karin Mickelson and Obiora Okafor, an early collection of TWAIL scholarship.",
      "**Use today.** Scholars use his framework to read development lending, international criminal justice and the “war on terror” as continuing patterns of ranking and reform (see {{twail}})."
     ],
     pro:[
      "**Debates.** Critics question whether a single “dynamic” fits five centuries, and argue that non-European states also shaped international law actively. Others say his focus on doctrine says less about practice. Supporters credit him with making colonial history unavoidable in the discipline’s self-understanding, alongside Martti Koskenniemi’s *The Gentle Civilizer of Nations* (2001).",
      {tip:"In a seminar, Anghie pairs well with Bull’s English School story of the expansion of international society: the same history told from two sides (see {{hedley-bull}})."}
     ]
    },
    related:["twail","postcolonialism-ir","hedley-bull"],
    sources:[{t:"TWAIL Coordinates (Critical Legal Thinking, 2019)", url:"https://criticallegalthinking.com/2019/04/02/twail-coordinates/"}],
    checked:"2026-11"},

   {id:"hilary-charlesworth", title:"Hilary Charlesworth", aka:["Charlesworth"], tags:["thinker","international law","feminist"],
    summary:"An Australian international lawyer who co-founded feminist approaches to international law and became a judge of the ICJ.",
    levels:{
     starter:[
      "**Hilary Charlesworth** is an Australian international lawyer, long a professor at the Australian National University and later at the University of Melbourne. In 2021 the UN elected her a judge of the International Court of Justice, and she was re-elected in 2023.",
      "Her big idea, with colleagues, is that international law’s categories, such as the line between public and private, quietly leave women’s experiences out.",
      {key:"She showed that what counts as an “international” problem is a choice, not a fact of nature."}
     ],
     builder:[
      "**Key works.** With Christine Chinkin and Shelley Wright, “Feminist Approaches to International Law” (*American Journal of International Law*, 1991), and with Chinkin, *The Boundaries of International Law: A Feminist Analysis* (2000). She also wrote on “international law as a discipline of crisis” (2002), arguing that the field’s focus on dramatic crises distorts its priorities.",
      "With Emma Larking she edited *Human Rights and the Universal Periodic Review: Rituals and Ritualism* (2014), which asks whether states’ participation in UN review becomes a ritual that replaces real change.",
      "**Use today.** Her work shaped debates on sexual violence in conflict, women’s representation in international institutions and the Women, Peace and Security agenda (see {{feminist-international-law}})."
     ],
     pro:[
      "**Legacy and debate.** Her move from critic to judge raises a question seminars enjoy: can critical scholarship be carried into the institutions it criticises? Internal feminist critics, such as Karen Engle, question how far legal success through criminal law serves wider feminist aims.",
      {tip:"Pair her 1991 article with Tickner’s and Enloe’s feminist IR (see {{feminism-ir}}) to compare law and politics perspectives."}
     ]
    },
    related:["feminist-international-law","feminism-ir","icj-in-practice"],
    checked:"2026-11"},

   {id:"harold-koh", title:"Harold Hongju Koh", aka:["Koh","transnational legal process"], tags:["thinker","international law","compliance"],
    summary:"A Yale scholar and former US official whose theory of transnational legal process explains how international norms become internalised.",
    levels:{
     starter:[
      "**Harold Hongju Koh** is an American legal scholar, the son of Korean immigrants, who taught at Yale Law School and was its dean from 2004 to 2009. He also served in the US government, including as Legal Adviser of the State Department from 2009 to 2013.",
      "His big idea is **transnational legal process**: states come to obey international law through repeated interaction with other states, courts and activists, which leads them to interpret and finally internalise norms.",
      {key:"For Koh, compliance is learned, not only calculated."}
     ],
     builder:[
      "**Key work.** “Why Do Nations Obey International Law?” (*Yale Law Journal*, 1997), a review essay on the Chayeses’ *The New Sovereignty* and Franck’s *Fairness in International Law and Institutions*. Koh distinguishes coincidence, conformity, compliance and obedience, and argues that internalisation (social, political and legal) moves states towards obedience.",
      "He first set out the idea in “Transnational Legal Process” (*Nebraska Law Review*, 1996).",
      "**Use today.** The theory fits litigation strategies by NGOs and the spread of international norms into domestic courts (see {{compliance-theories}} and {{norm-dynamics}})."
     ],
     pro:[
      "**Debates.** Rational-choice sceptics (Goldsmith and Posner) say the theory describes rather than explains. Critics on several sides also debated his legal positions as a government lawyer, for example on targeted drone strikes and the 2011 Libya operation, which shows the tension between scholar and practitioner roles.",
      {tip:"Use Koh for “how” questions (how did this norm enter national law?) and pair him with Downs, Rocke and Barsoom for “how much” questions (how deep is the commitment?)."}
     ]
    },
    related:["compliance-theories","norm-dynamics","constructivism"],
    checked:"2026-11"}
  ],
  terms:[
   {id:"international-law-commission", term:"International Law Commission (ILC)", def:"A UN body of independent experts, created by the General Assembly in 1947, that drafts texts to codify and develop international law, such as the Vienna Convention on the Law of Treaties.", codex:"sources-of-international-law"},
   {id:"vclt", term:"Vienna Convention on the Law of Treaties (VCLT)", def:"The 1969 treaty (in force 1980) that sets out the rules on making, interpreting, reserving, invalidating and ending treaties; many of its rules are also customary law.", codex:"law-of-treaties"},
   {id:"pacta-sunt-servanda", term:"Pacta sunt servanda", def:"Latin for “agreements must be kept”: every treaty in force binds its parties and must be performed in good faith (VCLT Article 26).", codex:"law-of-treaties"},
   {id:"treaty-interpretation", term:"Treaty interpretation", def:"Working out what a treaty means: under VCLT Article 31, by the ordinary meaning of its terms in context and in light of its object and purpose, with drafting history as a supplement.", codex:"law-of-treaties"},
   {id:"treaty-reservation", term:"Reservation (to a treaty)", def:"A statement by which a state, when joining a treaty, excludes or modifies a provision for itself. It is not allowed if it is incompatible with the treaty’s object and purpose.", codex:"law-of-treaties"},
   {id:"state-practice", term:"State practice", def:"What states actually do and say (laws, court decisions, diplomatic acts, votes, even silence): one of the two elements needed to prove a customary rule.", codex:"sources-of-international-law"},
   {id:"persistent-objector", term:"Persistent objector", def:"A state that has clearly and consistently objected to a customary rule while it was forming, and is therefore not bound by it. The doctrine is accepted by many lawyers but debated.", codex:"sources-of-international-law"},
   {id:"erga-omnes", term:"Erga omnes obligations", def:"Obligations owed to the international community as a whole (or, erga omnes partes, to all parties of a treaty), so that any such state may complain of a breach.", codex:"sources-of-international-law"},
   {id:"soft-law", term:"Soft law", def:"Non-binding instruments, such as declarations, guidelines and codes, that still shape how states and others behave and can contribute to binding law.", codex:"soft-law"},
   {id:"legalization", term:"Legalisation", def:"The degree to which an international arrangement is law-like, measured by obligation (how binding), precision (how exact) and delegation (whether third parties interpret and apply it).", codex:"soft-law"},
   {id:"fragmentation-of-international-law", term:"Fragmentation of international law", def:"The growth of specialised regimes (trade, human rights, environment, investment), each with its own rules and courts, and the worry that they may conflict.", codex:"sources-of-international-law"},
   {id:"managerial-model", term:"Managerial model (of compliance)", def:"Chayes and Chayes’ view that states generally intend to comply and that breaches come mostly from ambiguity, lack of capacity or time lags, so the cure is management rather than punishment.", codex:"compliance-theories"},
   {id:"enforcement-model", term:"Enforcement model (of compliance)", def:"The view, associated with Downs, Rocke and Barsoom, that deep international cooperation needs credible punishment of cheating, and that high compliance with shallow treaties proves little.", codex:"compliance-theories"},
   {id:"compliance-pull", term:"Compliance pull", def:"Thomas Franck’s term for the force that draws states to obey a rule, which he linked to the rule’s legitimacy: its clarity, symbolic validation, coherence and adherence to accepted procedures.", codex:"compliance-theories"},
   {id:"transnational-legal-process", term:"Transnational legal process", def:"Harold Koh’s theory that states come to obey international law through repeated interaction, interpretation and internalisation of norms into their own law and politics.", codex:"harold-koh"},
   {id:"countermeasures", term:"Countermeasures", def:"Otherwise unlawful but non-forcible acts that an injured state may take against a wrongdoing state to induce it to comply, if they are proportionate and reversible.", codex:"compliance-theories"},
   {id:"prohibition-of-force", term:"Prohibition of the use of force", def:"The rule in Article 2(4) of the UN Charter, also customary law, that states must not threaten or use force against the territorial integrity or political independence of any state.", codex:"use-of-force-law"},
   {id:"chapter-vii", term:"Chapter VII (UN Charter)", def:"The part of the Charter that lets the Security Council determine threats to the peace and take binding measures, from sanctions to authorising force.", codex:"use-of-force-law"},
   {id:"self-defence", term:"Self-defence (Article 51)", def:"A state’s “inherent right” to use force against an armed attack, alone or with others, until the Security Council acts, if the force is necessary and proportionate and reported to the Council.", codex:"use-of-force-law"},
   {id:"armed-attack", term:"Armed attack", def:"The trigger for self-defence under Article 51. The ICJ has held that only the gravest forms of the use of force qualify.", codex:"use-of-force-law"},
   {id:"caroline-test", term:"Caroline test", def:"The standard, from an 1837 incident and an 1841 letter by Daniel Webster, that anticipatory self-defence requires a necessity that is “instant, overwhelming, leaving no choice of means, and no moment for deliberation”.", codex:"use-of-force-law"},
   {id:"anticipatory-self-defence", term:"Anticipatory self-defence", def:"Force used against an attack that is imminent but has not yet begun. Many states and scholars accept it under strict conditions; it remains contested.", codex:"use-of-force-law"},
   {id:"preventive-self-defence", term:"Preventive force", def:"Force used against a threat that is not imminent, such as a possible future weapon. Widely rejected as self-defence; such threats are supposed to go to the Security Council.", codex:"use-of-force-law"},
   {id:"unwilling-or-unable", term:"“Unwilling or unable” doctrine", def:"The contested claim that a state may use force in self-defence against a non-state group in another state’s territory if that state is unwilling or unable to stop the threat.", codex:"use-of-force-law"},
   {id:"humanitarian-intervention", term:"Humanitarian intervention", def:"Military force in another state, without its consent, to stop mass atrocities. Whether it is lawful without Security Council authorisation is deeply contested.", codex:"humanitarian-intervention"},
   {id:"crime-of-aggression", term:"Crime of aggression", def:"Planning or leading a manifest violation of the UN Charter by force, by a person in a position to direct a state’s actions. The ICC can try it since 2018, within narrow limits.", codex:"icc-debates"},
   {id:"unclos", term:"UNCLOS", def:"The United Nations Convention on the Law of the Sea, signed in 1982 and in force since 1994, which sets out maritime zones, navigation rights and compulsory dispute settlement.", codex:"law-of-the-sea"},
   {id:"territorial-sea", term:"Territorial sea", def:"The belt of sea up to 12 nautical miles from the baseline, under the coastal state’s sovereignty, subject to other ships’ right of innocent passage.", codex:"law-of-the-sea"},
   {id:"contiguous-zone", term:"Contiguous zone", def:"The zone up to 24 nautical miles from the baseline where a coastal state may enforce customs, fiscal, immigration and health laws.", codex:"law-of-the-sea"},
   {id:"exclusive-economic-zone", term:"Exclusive economic zone (EEZ)", def:"The zone up to 200 nautical miles from the baseline where a coastal state has sovereign rights over resources such as fish, oil and gas, while others keep navigation and overflight.", codex:"law-of-the-sea"},
   {id:"continental-shelf", term:"Continental shelf (legal)", def:"The seabed and subsoil next to a coast over which the coastal state has resource rights, to 200 nautical miles or, where the natural margin extends further, up to 350 nautical miles.", codex:"law-of-the-sea"},
   {id:"innocent-passage", term:"Innocent passage", def:"The right of foreign ships to pass through a territorial sea continuously and quickly, as long as the passage is not prejudicial to the coastal state’s peace, good order or security.", codex:"law-of-the-sea"},
   {id:"transit-passage", term:"Transit passage", def:"The right of ships and aircraft to pass continuously and quickly through straits used for international navigation; stronger than innocent passage and cannot be suspended.", codex:"law-of-the-sea"},
   {id:"regime-of-islands", term:"Regime of islands (Article 121)", def:"The UNCLOS rule that islands generate full maritime zones, but rocks that cannot sustain human habitation or economic life of their own generate only a territorial sea.", codex:"law-of-the-sea"},
   {id:"low-tide-elevation", term:"Low-tide elevation", def:"A naturally formed feature above water at low tide but submerged at high tide. It generates no territorial sea of its own unless it lies within another feature’s territorial sea.", codex:"law-of-the-sea"},
   {id:"historic-rights", term:"Historic rights", def:"Rights claimed over maritime areas on the basis of long-standing use. The 2016 South China Sea tribunal held that UNCLOS superseded such rights to resources where they conflict with its zones.", codex:"south-china-sea-arbitration"},
   {id:"nine-dash-line", term:"Nine-dash line", def:"A line of dashes on Chinese maps enclosing much of the South China Sea, used to depict China’s claims; China has not precisely defined its legal meaning.", codex:"south-china-sea-arbitration"},
   {id:"annex-vii-arbitration", term:"Annex VII arbitration", def:"The default form of compulsory arbitration under UNCLOS, used when parties have not chosen another forum; it can proceed even if one party does not take part.", codex:"law-of-the-sea"},
   {id:"itlos", term:"International Tribunal for the Law of the Sea (ITLOS)", def:"A standing court of 21 judges in Hamburg, created by UNCLOS, that hears disputes about the law of the sea and gives urgent provisional measures.", codex:"law-of-the-sea"},
   {id:"bbnj-agreement", term:"BBNJ Agreement", def:"The 2023 agreement under UNCLOS on marine biological diversity in areas beyond national jurisdiction (the “High Seas Treaty”), in force since 17 January 2026.", codex:"law-of-the-sea"},
   {id:"effectivites", term:"Effectivités", def:"Acts of state administration over a territory, such as policing, taxation or running a lighthouse, used as evidence of sovereignty in territorial disputes.", codex:"territory-and-boundaries"},
   {id:"critical-date", term:"Critical date", def:"The moment a territorial dispute crystallised, after which new acts by the parties carry little weight as evidence of sovereignty.", codex:"territory-and-boundaries"},
   {id:"terra-nullius", term:"Terra nullius", def:"Latin for “land belonging to no one”: a doctrine once used to justify colonial occupation, rejected by the ICJ for inhabited, organised territory in *Western Sahara* (1975).", codex:"territory-and-boundaries"},
   {id:"uti-possidetis", term:"Uti possidetis", def:"The principle that new states inherit their former colonial or administrative boundaries, applied in Latin America, Africa and the former Yugoslavia.", codex:"territory-and-boundaries"},
   {id:"optional-clause", term:"Optional clause", def:"Article 36(2) of the ICJ Statute, under which a state may declare in advance that it accepts the Court’s jurisdiction against any other state making the same declaration.", codex:"icj-in-practice"},
   {id:"provisional-measures", term:"Provisional measures", def:"Urgent orders by an international court to protect parties’ rights while a case continues; ICJ provisional measures are binding.", codex:"icj-in-practice"},
   {id:"individual-criminal-responsibility", term:"Individual criminal responsibility", def:"The principle, established at Nuremberg, that individuals, including leaders, can be tried and punished under international law; official position is no defence.", codex:"international-criminal-tribunals"},
   {id:"command-responsibility", term:"Command responsibility", def:"The liability of military commanders and civilian superiors for crimes by subordinates that they knew or should have known about and failed to prevent or punish.", codex:"international-criminal-tribunals"},
   {id:"victors-justice", term:"Victors’ justice", def:"The criticism that trials run by the winners of a war judge only the losers’ crimes; made especially of the Nuremberg and Tokyo tribunals.", codex:"international-criminal-tribunals"},
   {id:"hybrid-tribunal", term:"Hybrid tribunal", def:"A court mixing national and international judges, staff and law, usually based in or near the affected country, such as the courts for Sierra Leone and Cambodia.", codex:"international-criminal-tribunals"},
   {id:"universal-jurisdiction", term:"Universal jurisdiction", def:"The power of any state’s courts to try certain grave crimes, such as torture or genocide, regardless of where they were committed or the nationality of those involved.", codex:"international-criminal-tribunals"},
   {id:"proprio-motu", term:"Proprio motu", def:"Latin for “on one’s own initiative”: the ICC Prosecutor’s power to open an investigation without a referral, with the approval of the Court’s judges.", codex:"icc-debates"},
   {id:"twail", term:"TWAIL", def:"Third World Approaches to International Law: a scholarly movement studying how colonialism shaped international law and how it affects the Global South today.", codex:"twail"},
   {id:"feminist-international-law", term:"Feminist approaches to international law", def:"Scholarship that analyses how international law’s categories and institutions treat women and gender, launched by Charlesworth, Chinkin and Wright in 1991.", codex:"feminist-international-law"},
   {id:"public-private-divide", term:"Public/private divide", def:"The line between the public sphere of states and the private sphere of home and family. Feminist scholars argue it kept much harm to women outside international law.", codex:"feminist-international-law"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u10-q01", lesson:"e4u10-l1", level:1, q:"Which statement about the sources in Article 38(1) of the ICJ Statute is correct?", options:[
     {t:"Treaties and custom have equal force; hierarchy comes only from jus cogens and Article 103 of the Charter.", ok:true, why:"Right. The list is not a ranking; conflicts are handled by maxims such as lex specialis."},
     {t:"Treaties always prevail over custom because they are listed first.", why:"The order in Article 38 is not a hierarchy."},
     {t:"Scholarly writings are a main source equal to treaties.", why:"They are subsidiary means for identifying law, not a source in their own right."},
     {t:"General Assembly resolutions are listed as a binding source.", why:"They are not in Article 38; they can be evidence of opinio juris."}]},
   {id:"e4u10-q02", lesson:"e4u10-l1", level:2, q:"Ana argues that a rule has become custom because many states follow it. Her opponent replies that every state says it does so “as a courtesy”. What is missing from Ana’s case?", options:[
     {t:"Opinio juris: evidence that states follow the practice because they believe it is legally required.", ok:true, why:"Yes. Practice without a sense of legal obligation is courtesy or habit, not custom."},
     {t:"A treaty that writes the rule down.", why:"Custom does not need a treaty; it is unwritten law."},
     {t:"A century of consistent practice.", why:"*North Sea* (1969) said a long time is not required if practice is extensive and virtually uniform."},
     {t:"A Security Council resolution.", why:"Council resolutions are not required to form custom."}]},
   {id:"e4u10-q03", lesson:"e4u10-l1", level:1, q:"What did the ICJ’s 1951 opinion on *Reservations to the Genocide Convention* contribute to treaty law?", options:[
     {t:"The test that a reservation must be compatible with the treaty’s object and purpose.", ok:true, why:"Right. The VCLT later adopted this test in Article 19."},
     {t:"The rule that reservations are never allowed to human rights treaties.", why:"The opinion allowed compatible reservations; it did not ban them."},
     {t:"The rule that every party must accept every reservation.", why:"That was the older unanimity view the Court moved away from."},
     {t:"The definition of jus cogens.", why:"Jus cogens is defined in VCLT Article 53 (1969)."}]},
   {id:"e4u10-q04", lesson:"e4u10-l1", level:2, q:"A new government says it no longer needs to perform a treaty because its parliament has passed a law contradicting it. Under the VCLT, what is the answer?", options:[
     {t:"Article 27: a state may not invoke its internal law to justify failing to perform a treaty.", ok:true, why:"Yes. Domestic law does not change an international obligation."},
     {t:"The new law automatically ends the treaty.", why:"Treaties end only under their own terms or the VCLT’s narrow grounds."},
     {t:"Any change of government is a fundamental change of circumstances.", why:"Article 62 is narrow; courts have rejected such broad readings (*Gabčíkovo–Nagymaros*, 1997)."},
     {t:"The treaty is void under Article 52.", why:"Article 52 concerns treaties procured by force, not later domestic laws."}]},
   {id:"e4u10-q05", lesson:"e4u10-l1", level:3, q:"State P has objected loudly and consistently since a new customary rule on fishing began to form. Ten years later, nearly all states follow the rule. State Q, which joined the UN last year, also says it objects. Which is most accurate?", options:[
     {t:"P may be exempt as a persistent objector; Q, objecting only after the rule formed, is bound.", ok:true, why:"Right. The persistent objector rule requires objection during formation; late objectors are bound (and the doctrine itself is debated)."},
     {t:"Both are exempt because custom requires unanimity.", why:"Custom requires general, not unanimous, practice."},
     {t:"Neither is exempt because the persistent objector rule was abolished in 2018.", why:"The ILC’s 2018 conclusions include the persistent objector rule."},
     {t:"Q is exempt because new states are never bound by existing custom.", why:"New states are generally bound by existing custom."}]},
   {id:"e4u10-q06", lesson:"e4u10-l1", level:1, q:"What is the difference between jus cogens and erga omnes?", options:[
     {t:"Jus cogens is about hierarchy (which rules prevail); erga omnes is about to whom an obligation is owed, and so who may complain.", ok:true, why:"Yes. The two often overlap but answer different questions."},
     {t:"They are two names for the same thing.", why:"They overlap in examples, but the concepts differ."},
     {t:"Erga omnes norms override treaties; jus cogens norms do not.", why:"It is the reverse: jus cogens voids conflicting treaties."},
     {t:"Jus cogens applies only in human rights treaties.", why:"It is general international law; the ILC list includes the ban on aggression."}]},
   {id:"e4u10-q07", lesson:"e4u10-l1", level:2, q:"Mei reads that the Helsinki Final Act “shaped Cold War diplomacy” though it was not a treaty. Which concept best describes it?", options:[
     {t:"Soft law: a non-binding instrument that still shapes behaviour.", ok:true, why:"Right. It was deliberately a political commitment, not a treaty."},
     {t:"Jus cogens.", why:"Jus cogens norms are binding and peremptory; the Final Act was not binding."},
     {t:"Customary law.", why:"Custom requires general practice and opinio juris; the Act itself is a document, not custom."},
     {t:"A reservation.", why:"A reservation is a statement modifying a treaty obligation."}]},
   {id:"e4u10-q08", lesson:"e4u10-l1", level:3, q:"A government negotiator prefers a non-binding declaration to a treaty on a new technology because the science is uncertain and her parliament is wary. Which theory best supports her choice?", options:[
     {t:"Abbott and Snidal’s argument that soft law lowers contracting and sovereignty costs and handles uncertainty.", ok:true, why:"Yes. Their work on hard and soft law explains exactly this choice."},
     {t:"Weil’s warning about relative normativity.", why:"Weil criticised soft law; he would not support the choice."},
     {t:"The persistent objector rule.", why:"That concerns custom, not the choice of instrument."},
     {t:"Pacta sunt servanda.", why:"That rule applies to binding treaties, which she is avoiding."}]},
   {id:"e4u10-q09", lesson:"e4u10-l1", level:2, q:"Why could The Gambia bring a Genocide Convention case against Myanmar?", options:[
     {t:"Because obligations under the Convention are owed to all its parties, giving each party standing, and the Convention’s Article IX gives the ICJ jurisdiction.", ok:true, why:"Right. Standing came from erga omnes partes reasoning; jurisdiction from the treaty."},
     {t:"Because jus cogens automatically gives the ICJ jurisdiction.", why:"The Court has said jus cogens does not by itself create jurisdiction."},
     {t:"Because the Security Council ordered the case.", why:"The Council did not; one state sued another."},
     {t:"Because The Gambia was directly injured.", why:"It was not; that is why the case mattered for standing."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u10-q10", lesson:"e4u10-l2", level:1, q:"According to Chayes and Chayes, what causes most non-compliance?", options:[
     {t:"Ambiguity in treaty language, limited capacity and time lags.", ok:true, why:"Right. Their managerial model sees non-compliance as mostly unintended."},
     {t:"Deliberate cheating by self-interested states.", why:"That is closer to the enforcement view they argued against."},
     {t:"The absence of a world government.", why:"They accepted that condition and still found a propensity to comply."},
     {t:"Cultural differences between states.", why:"Not one of their three sources."}]},
   {id:"e4u10-q11", lesson:"e4u10-l2", level:1, q:"What was the main point of Downs, Rocke and Barsoom (1996)?", options:[
     {t:"High compliance may reflect shallow treaties; deeper cooperation needs enforcement.", ok:true, why:"Yes: the selection and depth critique."},
     {t:"States always comply with international law.", why:"They questioned what high compliance means."},
     {t:"International law is illegitimate.", why:"Their argument was about incentives, not legitimacy."},
     {t:"Courts should replace treaties.", why:"Not their argument."}]},
   {id:"e4u10-q12", lesson:"e4u10-l2", level:3, q:"Two invented treaties both report 95% compliance. Treaty A asks states to keep emissions at current levels; Treaty B requires a 40% cut and has inspections. A researcher concludes “both treaties are equally effective.” What is the best critique?", options:[
     {t:"Compliance is not effectiveness: Treaty A may ask for nothing states would not do anyway, so its figure shows little.", ok:true, why:"Right. This is the depth and selection point; effectiveness needs a counterfactual."},
     {t:"Compliance figures are always fabricated.", why:"Too sweeping; the issue is interpretation, not fabrication."},
     {t:"Treaty B must be less effective because it is harder.", why:"Harder treaties with 95% compliance are more impressive, not less."},
     {t:"Inspections never matter.", why:"The enforcement model says they matter for deep treaties."}]},
   {id:"e4u10-q13", lesson:"e4u10-l2", level:1, q:"Which three stages make up Koh’s transnational legal process?", options:[
     {t:"Interaction, interpretation, internalisation", ok:true, why:"Right, from his 1997 *Yale Law Journal* essay."},
     {t:"Negotiation, signature, ratification", why:"Those are treaty-making steps."},
     {t:"Emergence, cascade, internalisation", why:"That is Finnemore and Sikkink’s norm life cycle, a related but different model."},
     {t:"Coincidence, coordination, coercion", why:"Those are among Goldsmith and Posner’s patterns."}]},
   {id:"e4u10-q14", lesson:"e4u10-l2", level:2, q:"Countries all follow one convention for radio frequencies because any agreed system is better than interference. How would Goldsmith and Posner classify this?", options:[
     {t:"Coordination: the law supplies a focal point, but interests drive behaviour.", ok:true, why:"Yes. They argue such compliance says little about law’s independent force."},
     {t:"Coercion.", why:"No stronger state is forcing others."},
     {t:"Obedience in Koh’s sense.", why:"Koh’s obedience implies internalised norms, not convenience."},
     {t:"A breach of international law.", why:"Following the convention is compliance."}]},
   {id:"e4u10-q15", lesson:"e4u10-l2", level:3, q:"After an ICJ judgment against it, a state’s supreme court rules that the judgment cannot be enforced domestically without legislation, and the legislature does nothing. Which case does this resemble, and what does it show?", options:[
     {t:"*Medellín v. Texas* (2008) after *Avena*: domestic institutions can limit compliance even when the executive does not reject the judgment.", ok:true, why:"Right. It shows that compliance runs through domestic law and politics."},
     {t:"*Pedra Branca* (2008): a smooth implementation.", why:"Malaysia and Singapore implemented that judgment through a joint committee."},
     {t:"*Whaling in the Antarctic* (2014): a state ignoring a ruling.", why:"Japan stopped the programme concerned."},
     {t:"*Gabčíkovo–Nagymaros* (1997): a treaty termination.", why:"That case was about ending a treaty, not domestic enforcement."}]},
   {id:"e4u10-q16", lesson:"e4u10-l2", level:2, q:"Which feature of the Montreal Protocol best illustrates the managerial model?", options:[
     {t:"A non-compliance procedure and a Multilateral Fund that help states that fall behind.", ok:true, why:"Yes: assistance and review, rather than punishment."},
     {t:"Automatic military sanctions against violators.", why:"The Protocol has no such provision."},
     {t:"Its being a General Assembly resolution.", why:"It is a treaty."},
     {t:"Its lack of any reporting.", why:"Reporting is central to it."}]},
   {id:"e4u10-q17", lesson:"e4u10-l2", level:1, q:"Thomas Franck linked compliance pull to a rule’s legitimacy. Which is one of his four indicators?", options:[
     {t:"Determinacy: how clear the rule is.", ok:true, why:"Right. The others are symbolic validation, coherence and adherence."},
     {t:"The size of the state’s army.", why:"That is material power, not legitimacy."},
     {t:"Whether the rule is written in English.", why:"Not one of his indicators."},
     {t:"How old the treaty is.", why:"Age is not one of the four."}]},
   {id:"e4u10-q18", lesson:"e4u10-l2", level:3, q:"Kenji writes: “Most ICJ judgments are complied with, so international law clearly changes state behaviour.” Which objection is strongest?", options:[
     {t:"Selection: states that consent to a court may already be willing to comply, so high compliance does not prove the law changed behaviour.", ok:true, why:"Yes. This is the methodological core of the enforcement critique."},
     {t:"Most ICJ judgments are ignored.", why:"Studies find most are complied with in whole or part."},
     {t:"The ICJ has no judges from Asia.", why:"Inaccurate: its President since 2025 is from Japan, and irrelevant to the logic."},
     {t:"Compliance cannot be studied.", why:"It can, with care about selection and counterfactuals."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u10-q19", lesson:"e4u10-l3", level:1, q:"What are the two clear exceptions to the Charter’s prohibition of force?", options:[
     {t:"Security Council authorisation under Chapter VII, and self-defence under Article 51", ok:true, why:"Right. Consent is a third, widely accepted ground but not an exception to Article 2(4) in the same sense."},
     {t:"General Assembly approval and regional organisation approval", why:"Neither can authorise force by itself; regional enforcement needs Council authorisation."},
     {t:"Humanitarian intervention and reprisals", why:"Both are contested or unlawful; armed reprisals are widely regarded as prohibited."},
     {t:"Recovering lost territory and protecting investments", why:"Neither is a lawful ground for force."}]},
   {id:"e4u10-q20", lesson:"e4u10-l3", level:2, q:"Border guards of two states exchange a few shots in a brief incident. State A then bombs State B’s capital, citing self-defence. Which requirement is A most likely to fail?", options:[
     {t:"Armed attack and proportionality: a minor incident may not be an armed attack, and bombing a capital far exceeds it.", ok:true, why:"Yes. *Nicaragua* set a gravity threshold; proportionality limits the response."},
     {t:"Reporting: A forgot to tell the General Assembly.", why:"Reports go to the Security Council; and the bigger problems are gravity and proportionality."},
     {t:"Consent: B did not agree to be bombed.", why:"Self-defence never requires the attacker’s consent; the issue is whether its conditions are met."},
     {t:"Nothing: any use of force allows any response.", why:"Self-defence requires necessity and proportionality."}]},
   {id:"e4u10-q21", lesson:"e4u10-l3", level:1, q:"Which incident gave rise to the classic standard for anticipatory self-defence?", options:[
     {t:"The Caroline (1837)", ok:true, why:"Right, with Webster’s 1841 formula: “instant, overwhelming, leaving no choice of means, and no moment for deliberation.”"},
     {t:"The Corfu Channel (1946)", why:"That was the ICJ’s first case, about mines in a strait."},
     {t:"The Osirak strike (1981)", why:"Osirak is cited against preventive force, not as the origin of the standard."},
     {t:"The Gulf of Tonkin (1964)", why:"Not the source of the test."}]},
   {id:"e4u10-q22", lesson:"e4u10-l3", level:2, q:"A government argues it may strike another state’s research site because that state might build a dangerous weapon in a decade. What is this called, and how is it generally viewed?", options:[
     {t:"Preventive force; widely rejected as self-defence without Security Council authorisation.", ok:true, why:"Yes. The threat is not imminent, so the Caroline standard is not met."},
     {t:"Anticipatory self-defence; universally accepted.", why:"Anticipatory self-defence concerns imminent attacks, and even it is contested."},
     {t:"Collective self-defence; lawful if an ally agrees.", why:"Collective self-defence still requires an armed attack."},
     {t:"Humanitarian intervention; lawful under R2P.", why:"Nothing humanitarian is claimed, and R2P does not authorise unilateral force."}]},
   {id:"e4u10-q23", lesson:"e4u10-l3", level:3, q:"Sione is drafting a seminar paper on force against an armed group in a neighbouring state that cannot control its border regions. Which framing is most accurate and neutral?", options:[
     {t:"Some states, including the United States in 2014, argue force is allowed if the territorial state is “unwilling or unable”; others, including Russia, reject this, and the ICJ’s *Wall* opinion read Article 51 narrowly.", ok:true, why:"Right. It attributes each position and notes the unsettled law."},
     {t:"International law clearly permits such strikes.", why:"The law is contested; “clearly” overstates it."},
     {t:"International law clearly forbids any force against non-state actors.", why:"Also overstated: the Council recognised self-defence after 9/11, and practice is divided."},
     {t:"The question is purely political and has no legal dimension.", why:"States argue at length in legal terms."}]},
   {id:"e4u10-q24", lesson:"e4u10-l3", level:1, q:"How did the governments of India (1971), Vietnam (1978–79) and Tanzania (1979) mainly justify their interventions?", options:[
     {t:"As self-defence", ok:true, why:"Right. This is why these cases are weak precedents for a humanitarian right."},
     {t:"As humanitarian intervention under R2P", why:"R2P did not exist until 2001–05."},
     {t:"As Security Council-authorised operations", why:"None was authorised by the Council."},
     {t:"As consent from the governments they overthrew", why:"Those governments did not consent."}]},
   {id:"e4u10-q25", lesson:"e4u10-l3", level:2, q:"Which body rejected “the so-called ‘right’ of humanitarian intervention” as having no basis in the Charter?", options:[
     {t:"The Group of 77 at the South Summit in Havana, April 2000", ok:true, why:"Yes, in paragraph 54 of its Declaration."},
     {t:"The NATO summit of 1999", why:"NATO states carried out the Kosovo campaign."},
     {t:"The UK government in 2018", why:"The UK argued that a limited right exists."},
     {t:"The ICJ in 1986", why:"*Nicaragua* rejected a right to intervene in support of rebels, but the quoted words are from the G77."}]},
   {id:"e4u10-q26", lesson:"e4u10-l3", level:2, q:"What did General Assembly Resolution ES-11/1 of 2 March 2022 do?", options:[
     {t:"It deplored the aggression by Russia against Ukraine, by 141 votes to 5 with 35 abstentions.", ok:true, why:"Right. Assembly resolutions are recommendations, but this one recorded a wide majority view."},
     {t:"It authorised force against Russia.", why:"The Assembly cannot authorise force with binding effect, and it did not try to."},
     {t:"It expelled Russia from the UN.", why:"No such step was taken."},
     {t:"It referred the situation to the ICJ.", why:"Ukraine itself brought a case to the ICJ."}]},
   {id:"e4u10-q27", lesson:"e4u10-l3", level:3, q:"Fatima must summarise the legal debate over Iraq 2003 in one sentence for a neutral briefing. Which is best?", options:[
     {t:"The US, UK and Australia argued that Resolutions 678, 687 and 1441 together authorised force; France, Germany, Russia and others argued that a further Council decision was needed.", ok:true, why:"Yes: it attributes both legal positions without loaded words."},
     {t:"The war was an obvious crime that everyone condemned.", why:"Loaded and inaccurate about the range of views."},
     {t:"Resolution 1441 expressly authorised the invasion.", why:"It did not expressly authorise force; that was the core of the dispute."},
     {t:"No one raised legal arguments about the war.", why:"Legal argument was central to the debate."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u10-q28", lesson:"e4u10-l4", level:1, q:"How far does the territorial sea extend?", options:[
     {t:"Up to 12 nautical miles from the baseline", ok:true, why:"Right. Within it the coastal state has sovereignty, subject to innocent passage."},
     {t:"Up to 24 nautical miles", why:"That is the outer limit of the contiguous zone."},
     {t:"Up to 200 nautical miles", why:"That is the EEZ."},
     {t:"Up to 350 nautical miles", why:"That is the maximum extended continental shelf, a seabed zone."}]},
   {id:"e4u10-q29", lesson:"e4u10-l4", level:2, q:"A foreign fishing fleet operates 150 nautical miles off State R’s coast without permission. Which right of R is engaged?", options:[
     {t:"Its sovereign rights over living resources in its exclusive economic zone", ok:true, why:"Yes. 150 nm is within the 200 nm EEZ."},
     {t:"Its sovereignty over the territorial sea", why:"The territorial sea ends at 12 nm."},
     {t:"Its customs powers in the contiguous zone", why:"The contiguous zone ends at 24 nm."},
     {t:"No rights: this is the high seas", why:"The high seas begin beyond the EEZ."}]},
   {id:"e4u10-q30", lesson:"e4u10-l4", level:1, q:"Under Article 121(3) of UNCLOS, what do rocks that cannot sustain human habitation or economic life of their own generate?", options:[
     {t:"Only a 12-nautical-mile territorial sea, no EEZ or continental shelf", ok:true, why:"Right. Article 121(3) limits such rocks to a territorial sea, which is why the 2016 tribunal’s classification of features mattered so much."},
     {t:"A full EEZ and continental shelf", why:"That is for islands under Article 121(2)."},
     {t:"Nothing at all", why:"That describes low-tide elevations outside a territorial sea, not rocks."},
     {t:"A 24-nautical-mile territorial sea", why:"The territorial sea is 12 nm for any feature."}]},
   {id:"e4u10-q31", lesson:"e4u10-l4", level:3, q:"A student writes: “In 2016 the tribunal gave the Spratly Islands to the Philippines, and China’s claims are therefore void.” What is wrong?", options:[
     {t:"The tribunal did not decide sovereignty over any feature; it ruled on maritime entitlements and conduct, and the conclusion should attribute positions.", ok:true, why:"Right. The award expressly avoided sovereignty and delimitation."},
     {t:"Nothing: that is what the award said.", why:"The award did not rule on sovereignty."},
     {t:"The tribunal ruled for China.", why:"It found largely for the Philippines on the claims it heard."},
     {t:"The case was decided by the ICJ.", why:"It was an UNCLOS Annex VII arbitral tribunal, with the PCA as registry."}]},
   {id:"e4u10-q32", lesson:"e4u10-l4", level:2, q:"What was China’s main legal argument against the arbitration?", options:[
     {t:"The tribunal lacked jurisdiction because the dispute concerned sovereignty and boundaries, excluded by UNCLOS and its 2006 Article 298 declaration.", ok:true, why:"Yes, as set out in its 2014 Position Paper and later statements."},
     {t:"China is not a party to UNCLOS.", why:"China is a party; that is why the case could be brought."},
     {t:"The Philippines had no coastline on the South China Sea.", why:"Factually wrong."},
     {t:"The tribunal had already ruled for China in 2015.", why:"The 2015 award found jurisdiction over several claims."}]},
   {id:"e4u10-q33", lesson:"e4u10-l4", level:1, q:"What did Max Huber decide in *Island of Palmas* (1928)?", options:[
     {t:"Discovery gives only an inchoate title; continuous and peaceful display of state authority prevails.", ok:true, why:"Right. The Netherlands’ display of authority beat the US claim derived from Spain’s discovery."},
     {t:"The first state to discover an island always owns it.", why:"Huber held the opposite."},
     {t:"Islands near a continent belong to the nearest state.", why:"Proximity alone does not give title."},
     {t:"The island should be shared.", why:"He awarded it to the Netherlands."}]},
   {id:"e4u10-q34", lesson:"e4u10-l4", level:2, q:"State K ran a lighthouse on a disputed rock for 130 years; State L never protested until a dispute arose. Which concepts will a court weigh?", options:[
     {t:"Effectivités, acquiescence and the critical date", ok:true, why:"Yes, as in *Pedra Branca* (2008), where Singapore’s conduct and Malaysia’s silence mattered."},
     {t:"Uti possidetis only", why:"It concerns inherited colonial boundaries, which may not be at issue."},
     {t:"Jus cogens", why:"No peremptory norm is engaged."},
     {t:"Innocent passage", why:"That concerns navigation, not title to land."}]},
   {id:"e4u10-q35", lesson:"e4u10-l4", level:3, q:"Two new states emerge from a former colony and disagree over their border. One proposes redrawing it along ethnic lines; the other cites the old administrative line. Which principle supports the second, and what is the main critique?", options:[
     {t:"Uti possidetis, applied in *Burkina Faso/Mali* (1986); critics say it freezes lines drawn by empires.", ok:true, why:"Right. Its defenders say it prevents wars; its critics stress colonial origins."},
     {t:"Terra nullius; critics say it is too recent.", why:"Terra nullius is a colonial doctrine for unclaimed land, not a border rule."},
     {t:"The Caroline test; critics say it is too strict.", why:"That concerns self-defence."},
     {t:"Historic rights; critics say UNCLOS replaced them.", why:"That concerns maritime claims."}]},
   {id:"e4u10-q36", lesson:"e4u10-l4", level:2, q:"Why might a long-running island dispute between two states never reach the ICJ?", options:[
     {t:"Because the Court needs the consent of both parties, through a special agreement, a treaty clause or the optional clause.", ok:true, why:"Yes. Consent is the foundation of its jurisdiction."},
     {t:"Because the ICJ hears only human rights cases.", why:"It hears all kinds of interstate disputes."},
     {t:"Because island disputes go only to ITLOS.", why:"Sovereignty over land is generally outside UNCLOS; the ICJ has decided many island cases."},
     {t:"Because the Security Council must approve every case.", why:"No such approval is needed."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u10-q37", lesson:"e4u10-l5", level:1, q:"Which principle did the Nuremberg tribunal establish?", options:[
     {t:"Individuals, including leaders, can be held criminally responsible under international law.", ok:true, why:"Right: “crimes against international law are committed by men, not by abstract entities.”"},
     {t:"Only states can violate international law.", why:"Nuremberg rejected this."},
     {t:"Superior orders are a complete defence.", why:"At most they can reduce punishment."},
     {t:"Genocide is the gravest crime.", why:"Genocide was not charged; it was defined by treaty only in 1948."}]},
   {id:"e4u10-q38", lesson:"e4u10-l5", level:1, q:"What was historic about the ICTR’s *Akayesu* judgment (1998)?", options:[
     {t:"It was the first international conviction for genocide and held that rape could be an act of genocide.", ok:true, why:"Right. Nuremberg could not convict of genocide, and the ICJ judges states, not people."},
     {t:"It was the first ICC judgment.", why:"The ICC did not exist until 2002."},
     {t:"It convicted a former head of state.", why:"Akayesu was a former mayor."},
     {t:"It was decided by the ICJ.", why:"The ICJ does not try individuals."}]},
   {id:"e4u10-q39", lesson:"e4u10-l5", level:3, q:"Crimes are alleged against nationals of State M (not an ICC party) on the territory of State N (a party). M says the ICC cannot touch its nationals. Which response is most accurate?", options:[
     {t:"Under Article 12 the Court may act on crimes on a state party’s territory, whatever the suspect’s nationality; M’s objection is a political and legal argument some non-parties make.", ok:true, why:"Right. This is the basis of the Myanmar/Bangladesh and other situations; non-parties dispute it."},
     {t:"M is right: the Court has no jurisdiction over non-party nationals in any circumstances.", why:"Territorial jurisdiction covers them."},
     {t:"The Court needs the ICJ’s permission.", why:"The two courts are independent."},
     {t:"Only the General Assembly can refer the case.", why:"Referrals come from states parties or the Security Council, or the Prosecutor acts proprio motu."}]},
   {id:"e4u10-q40", lesson:"e4u10-l5", level:2, q:"Which describes a hybrid tribunal?", options:[
     {t:"A court mixing national and international judges and law, often in the affected country, like the ECCC in Cambodia.", ok:true, why:"Yes. Hybrids aim to combine international standards with closeness to the affected society."},
     {t:"A UN court in The Hague with only international judges.", why:"That describes the ICTY."},
     {t:"A national court using only domestic law.", why:"Hybrid courts mix national and international elements."},
     {t:"An NGO-run people’s tribunal.", why:"People’s tribunals have no legal authority; hybrids are official courts."}]},
   {id:"e4u10-q41", lesson:"e4u10-l5", level:2, q:"A state gives notice of withdrawal from the Rome Statute. What follows under Article 127?", options:[
     {t:"Withdrawal takes effect one year after notice, and the Court keeps jurisdiction over crimes committed while the state was a party.", ok:true, why:"Right, as the Philippines case showed."},
     {t:"Withdrawal is immediate and erases past jurisdiction.", why:"There is a one-year delay and no erasure."},
     {t:"Withdrawal needs the Security Council’s approval.", why:"It is a unilateral treaty act."},
     {t:"Withdrawal is impossible.", why:"Several states have withdrawn, including Burundi and the Philippines."}]},
   {id:"e4u10-q42", lesson:"e4u10-l5", level:1, q:"As of November 2026, which statement about ICC membership is accurate?", options:[
     {t:"There were 125 states parties; Burkina Faso, Mali, Niger, Venezuela and Chad had given notice of withdrawal taking effect in 2027.", ok:true, why:"Right, according to reports in 2026; Hungary reversed its planned withdrawal and remained a party."},
     {t:"Every UN member was a party.", why:"China, India, Russia and the United States, among others, are not parties."},
     {t:"Hungary had left the Court in 2026.", why:"Hungary reversed its planned withdrawal in 2026 and remained a party."},
     {t:"The ICC had no states parties in Asia.", why:"Several Asia-Pacific states are parties, including Japan, South Korea and Bangladesh."}]},
   {id:"e4u10-q43", lesson:"e4u10-l5", level:3, q:"Amara writes: “The ICC is a neo-colonial court because it only prosecutes Africans.” What would a balanced seminar response include?", options:[
     {t:"That the African Union and others made this critique, that several African cases were self-referrals, and that the Court has since opened situations and issued warrants elsewhere.", ok:true, why:"Yes. It attributes the critique and gives the main replies."},
     {t:"That the claim is simply true and needs no discussion.", why:"Contested claims need attribution and counter-arguments."},
     {t:"That the claim is simply false and was never made seriously.", why:"The critique was made seriously by the AU and scholars."},
     {t:"That the ICC has never prosecuted anyone from Africa.", why:"Factually wrong."}]},
   {id:"e4u10-q44", lesson:"e4u10-l5", level:1, q:"Which work is central to TWAIL?", options:[
     {t:"Anghie, *Imperialism, Sovereignty and the Making of International Law* (2005)", ok:true, why:"Right: the “dynamic of difference” argument."},
     {t:"Goldsmith and Posner, *The Limits of International Law* (2005)", why:"A rational-choice sceptic’s book."},
     {t:"Charlesworth and Chinkin, *The Boundaries of International Law* (2000)", why:"A feminist classic."},
     {t:"Henkin, *How Nations Behave* (1968)", why:"A classic on compliance."}]},
   {id:"e4u10-q45", lesson:"e4u10-l5", level:2, q:"Which idea is most associated with feminist approaches to international law?", options:[
     {t:"The public/private divide kept much harm to women outside international concern.", ok:true, why:"Right: a core argument of Charlesworth, Chinkin and Wright (1991)."},
     {t:"Colonialism shaped the concept of sovereignty.", why:"That is TWAIL’s central theme."},
     {t:"States comply when compliance pays.", why:"A rational-choice argument."},
     {t:"Islands generate maritime zones.", why:"A law of the sea rule."}]}
  ]
});
