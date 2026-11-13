/* International Studies · Unit 2 · IR theory in depth */
ICA.addUnit({
  id:"e4u2", track:"e4", n:2, title:"IR theory in depth", icon:"🧭",
  blurb:"Beyond the primer’s lenses: the rival realisms and liberalisms, constructivism and the English School in depth, critical approaches from Marxism to green theory, and Global IR with theorising from Asia. Every lesson names the key works, says who disagrees, and ends with seminar questions. The last lesson shows how a thesis uses a theoretical framework.",
  goals:[
    "Tell apart classical, structural, offensive, defensive and neoclassical realism, and use the security dilemma, balance of threat and hedging with care",
    "Explain the liberal family (interdependence, institutions and regimes, the democratic peace, liberal order) and the strongest critiques of each strand",
    "Use Wendt, norm dynamics, securitisation and the English School’s society of states to analyse real cases, and say where each one struggles",
    "Describe Marxist, Critical Theory, feminist, postcolonial, green and post-structuralist approaches accurately, with the debates inside and between them",
    "Discuss Global IR and theorising from Asia (tianxia, moral realism, relational theory, the ASEAN Way) fairly, and build a theoretical framework for a thesis without using theory as decoration"
  ],
  read:[
    {book:"eirt", where:"Part One, Chapters 1–10 (Realism to “Towards a Global IR?”) and Part Two, Chapters 11 “Green Theory”, 14 “Securitisation Theory”, 16 “Asian Perspectives”, 17 “Global South Perspectives”, 19 “A Contemporary Perspective on Realism” and 20 “The ‘Isms’ Are Evil. All Hail the ‘Isms’!”", note:"Short chapters, each with a case. You may have read Part One with the primer; reread it now with this unit’s questions in mind, then add the Part Two chapters."},
    {book:"eir", where:"Chapter 4 “International Relations Theory” (Dana Gold and Stephen McGlinchey)", note:"A brisk review of the whole field: useful the night before a seminar."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u2-l1", title:"Realisms: a family of rival theories", minutes:60,
   hook:{q:"E. H. Carr’s *The Twenty Years’ Crisis* (1939) is the classic realist attack on “utopian” hopes for peace through law and the League of Nations. What did Carr also say about pure realism?", options:["It is the only scientific way to study politics","It is sterile: sound political thought needs both utopia and reality","It proves that morality has no place in foreign policy","It shows that war between great powers can never be prevented"], answer:1, reveal:"**It is sterile.** Carr argued that realism is a needed corrective to wishful thinking, but that realism alone offers no goal to work towards, so mature thought combines utopia and reality. Founding texts are often more two-sided than their reputations. This lesson reads the realist family closely: what each branch really claims, and where the arguments inside it lie."},
   goals:[
     "Explain how realism works as a research programme with rival branches",
     "Summarise what Carr and Morgenthau actually argued, beyond the slogans",
     "Compare Waltz’s structural realism with Mearsheimer’s offensive realism and the defensive realists",
     "Use the security dilemma, the spiral and deterrence models and the offence–defence balance on a real case",
     "Weigh balance of threat, bandwagoning for profit and hedging, and the main critiques of realism"
   ],
   learn:[
    {h:"From one lens to a family argument", body:[
      {lead:"In the primer, realism was one lens. In a graduate seminar it is a crowded family argument."},
      "A one-line reminder: realists start from [[anarchy]], the absence of a government above states (see {{anarchy-ir}}), and conclude that states must rely on [[self-help]] and watch the balance of [[power]] (see {{realism}}). The primer introduced the main branches. This lesson goes inside them: what each claims, the mechanism it proposes, and the evidence and critiques that come up in seminars.",
      "Two words help. **Parsimony** means explaining a lot with few assumptions; realists prize it. A **research programme**, a term from the philosopher of science Imre Lakatos, is a family of theories that share a hard core of assumptions and argue about the rest. Realists share a core (groups such as states are the key actors, they act in their own interest, and power is central) and disagree about what drives states and how much power they want.",
      {table:[
        ["Branch","What drives states","Key works"],
        ["Classical realism","Human nature, statecraft and the national interest","Carr (1939); Morgenthau (1948)"],
        ["Structural realism (neorealism)","The anarchic structure and the distribution of capabilities","Waltz (1979)"],
        ["Defensive realism","Security: enough power, not the most","Jervis (1978); Snyder (1991); Van Evera (1999)"],
        ["Offensive realism","As much relative power as possible","Mearsheimer (2001)"],
        ["Neoclassical realism","System pressures filtered through domestic politics","Rose (1998); Ripsman, Taliaferro & Lobell (2016)"]
      ]}
    ]},
    {h:"Classical realism read closely: Carr and Morgenthau", body:[
      "{{e-h-carr|E. H. Carr}}, a British diplomat turned professor, wrote *The Twenty Years’ Crisis, 1919–1939* (1939) as the interwar order collapsed. He called the liberal hopes of the 1920s [[utopianism-ir|utopianism]] and aimed his sharpest point at the **harmony of interests**: the claim that peace and free trade serve everyone equally. Carr argued that this doctrine suited the satisfied powers, which presented their own interest in the status quo as a universal morality, so that anyone challenging the order looked like an enemy of peace.",
      "Carr distinguished three kinds of power: **military**, **economic** and **power over opinion** (propaganda and persuasion). Yet he also called pure realism “sterile”, because it offers nothing to aim for. Many scholars now read him as a critic of both sides, not a simple power theorist.",
      "{{hans-morgenthau|Hans Morgenthau}}’s *Scientific Man vs. Power Politics* (1946) argued that reason and science cannot abolish the human drive for power (he used the Latin *animus dominandi*, the desire to dominate). His six principles in *Politics Among Nations* (from 1954) are covered in the primer. Two later readings matter in seminars. J. Ann Tickner (1988) rewrote the six principles from a feminist standpoint, adding power as the ability to act together. Richard Ned Lebow (*The Tragic Vision of Politics*, 2003) and Michael Williams (*The Realist Tradition and the Limits of International Relations*, 2005) present classical realism as an ethical, even tragic, tradition about the limits of power.",
      {key:"Classical realists warned against two dangers at once: naive idealism and reckless power politics."}
    ]},
    {h:"Waltz’s structure: what it explains, and what it doesn’t", body:[
      "{{kenneth-waltz|Kenneth Waltz}}’s *Theory of International Politics* (1979) defined structure by anarchy, like units and the distribution of capabilities ([[polarity]]). The deeper point is his **mechanism**. Competition and socialisation push states to imitate successful practices, such as new military technologies, and those that fail to adapt fall behind. Balances of power recur as an **outcome** of the system, even if no state sets out to create one.",
      "Waltz insisted that this is a theory of international politics, not of foreign policy: it explains recurring patterns, not one government’s choice (“International Politics Is Not Foreign Policy”, 1996).",
      "Three classic critiques: John Ruggie (1983) argued that Waltz’s structure cannot explain the biggest change in the system’s history, the shift from medieval to modern sovereign states. Richard Ashley’s “The Poverty of Neorealism” (1984) charged that it freezes history and treats the state as given. The historian Paul Schroeder (1994) found that European states often hid, bandwagoned or tried to transcend rivalry rather than balance. Waltz replied that a theory explains broad tendencies; exceptions do not refute it."
    ]},
    {h:"Offensive and defensive realism, closely", body:[
      "{{john-mearsheimer|John Mearsheimer}}’s *The Tragedy of Great Power Politics* (2001; updated 2014) rests on five assumptions:",
      {ol:["Great powers are the main actors, in an anarchic system.","All have some offensive military capability.","None can be certain of the others’ intentions.","Survival is their primary goal.","They are rational: they think strategically about how to survive."]},
      "From these he concludes that great powers maximise **relative** power. Global hegemony is impossible because of the “stopping power of water”: oceans make it very hard to project land power across them. So the best a state can achieve is [[regional-hegemony|regional hegemony]], and then to prevent any rival from achieving it elsewhere. Threatened states often prefer [[buck-passing]] (getting another state to do the balancing) to balancing themselves, and a distant great power can act as an [[offshore-balancing|offshore balancer]], stepping in only when local states cannot contain a rising power.",
      "Defensive realists (Robert Jervis, Jack Snyder, Stephen Van Evera, Charles Glaser) reply that expansion usually backfires because others unite against it. In *Myths of Empire* (1991), Snyder explained great powers’ overexpansion by domestic coalitions and the strategic myths they spread, not by the system.",
      {ex:"On China’s rise, theories give different expectations, and that is what a seminar discusses. Mearsheimer’s 2014 edition, in a chapter titled “Can China Rise Peacefully?”, expects intense security competition. Glaser (*Foreign Affairs*, 2011) argued that conflict is not inevitable if both sides manage the security dilemma. Liberals such as Ikenberry (2008) argued that an open, rule-based order could absorb a rising China, and Alastair Iain Johnston (2003) questioned whether China was the “revisionist” power that many assumed. As of 2026 this remains an open debate among scholars.", label:"Worked example: one question, several realist and non-realist answers"}
    ]},
    {h:"The security dilemma in depth", body:[
      "John Herz named the [[security-dilemma|security dilemma]] in 1950, and the historian Herbert Butterfield described the same trap a year later as “Hobbesian fear” (see {{security-dilemma}}). Robert Jervis took it further in two works.",
      "In *Perception and Misperception in International Politics* (1976) he contrasted two models. In the [[spiral-model|spiral model]], the rival is mainly insecure, so threats make things worse and reassurance helps. In the **deterrence model**, the rival is aggressive, so concessions invite more demands and firmness helps. The advice is opposite, and the error either way is costly: the classic warnings are 1914 (a spiral) and Munich 1938 (failed appeasement).",
      "In “Cooperation Under the Security Dilemma” (1978) he added the [[offense-defense-balance|offence–defence balance]] and asked whether defensive forces can be told apart from offensive ones:",
      {fig:'<svg viewBox="0 0 340 330"><text x="210" y="18" text-anchor="middle">Can attack and defence</text><text x="210" y="35" text-anchor="middle">forces be told apart?</text><text class="s" x="140" y="56" text-anchor="middle">No</text><text class="s" x="268" y="56" text-anchor="middle">Yes</text><text class="s" x="34" y="120" text-anchor="middle">Attack</text><text class="s" x="34" y="135" text-anchor="middle">has the</text><text class="s" x="34" y="150" text-anchor="middle">edge</text><text class="s" x="34" y="230" text-anchor="middle">Defence</text><text class="s" x="34" y="245" text-anchor="middle">has the</text><text class="s" x="34" y="260" text-anchor="middle">edge</text><rect class="d-rose" x="76" y="66" width="128" height="120" rx="8" stroke-width="2"/><text x="140" y="104" text-anchor="middle">Doubly</text><text x="140" y="122" text-anchor="middle">dangerous</text><text class="s" x="140" y="144" text-anchor="middle">strongest</text><text class="s" x="140" y="159" text-anchor="middle">dilemma</text><rect class="d-gold" x="208" y="66" width="128" height="120" rx="8" stroke-width="2"/><text x="272" y="104" text-anchor="middle">No dilemma,</text><text x="272" y="122" text-anchor="middle">but risky</text><text class="s" x="272" y="144" text-anchor="middle">aggressors show,</text><text class="s" x="272" y="159" text-anchor="middle">but are strong</text><rect class="d-gold" x="76" y="192" width="128" height="120" rx="8" stroke-width="2"/><text x="140" y="230" text-anchor="middle">Dilemma, but</text><text x="140" y="248" text-anchor="middle">manageable</text><text class="s" x="140" y="270" text-anchor="middle">defence is</text><text class="s" x="140" y="285" text-anchor="middle">cheap enough</text><rect class="d-sage" x="208" y="192" width="128" height="120" rx="8" stroke-width="2"/><text x="272" y="230" text-anchor="middle">Doubly</text><text x="272" y="248" text-anchor="middle">stable</text><text class="s" x="272" y="270" text-anchor="middle">safe without</text><text class="s" x="272" y="285" text-anchor="middle">threatening</text></svg>', alt:"A two-by-two grid. Columns ask whether attack and defence forces can be told apart: no or yes. Rows ask whether attack or defence has the edge. Attack edge and not distinguishable: doubly dangerous, the strongest dilemma. Attack edge and distinguishable: no dilemma, but risky, because aggressors show themselves but are strong. Defence edge and not distinguishable: a dilemma, but manageable. Defence edge and distinguishable: doubly stable, states can be safe without threatening others.", cap:"Jervis’s four worlds (1978). Arms control often tries to push states towards the bottom right."},
      "Thomas Christensen (1999) applied this to East Asia, arguing that history and geography made Chinese leaders read even defensive steps in the US–Japan alliance as threatening. South Asia offers a debated nuclear case: after India’s tests (11 and 13 May 1998) and Pakistan’s (28 and 30 May 1998), scholars kept arguing, along the lines of Scott Sagan and Kenneth Waltz’s book *The Spread of Nuclear Weapons: A Debate* (1995), over whether nuclear weapons make such rivals more cautious or create new risks of accident and miscalculation. Ken Booth and Nicholas Wheeler (*The Security Dilemma*, 2008) add that trust can be built, so the dilemma can be eased, not only managed."
    ]},
    {h:"Alliances: threats, profits and hedging", body:[
      "Stephen Walt’s *The Origins of Alliances* (1987), based on alliances in the Middle East from 1955 to 1979, argued that states balance against [[balance-of-threat|threats]], made up of aggregate power, geographic nearness, offensive capabilities and perceived aggressive intentions. Randall Schweller’s “Bandwagoning for Profit” (1994) replied that many states join the stronger side to **gain**, not out of fear: satisfied states defend the status quo, while revisionist ones see a rising power as an opportunity.",
      "Asia-Pacific scholarship added a third option. Kuik Cheng-Chwee (2008) described [[strategic-hedging|hedging]] by Malaysia and Singapore towards China: combining engagement for economic gain with insurance, such as defence ties with other powers, so as not to bet everything on one outcome. Seminars argue whether hedging is a new category or just a mix of balancing and bandwagoning."
    ]},
    {h:"Neoclassical realism, power transitions and the critics", body:[
      "Gideon Rose named [[neoclassical-realism|neoclassical realism]] in 1998. The system sets the pressures, but domestic “transmission belts” shape the response. Ripsman, Taliaferro and Lobell (2016) group these into leaders’ images, strategic culture, state–society relations and domestic institutions. Fareed Zakaria (*From Wealth to Power*, 1998) argued that the United States expanded slowly after 1865 because its federal government could not yet extract its society’s wealth. Schweller’s *Unanswered Threats* (2006) explained why divided elites can make states **underbalance** against a clear threat.",
      "A related school studies power shifts. A.F.K. Organski’s **power transition theory** (1958) and Robert Gilpin’s *War and Change in World Politics* (1981) argue that danger peaks when a rising power nears a declining leader. Graham Allison’s [[thucydides-trap|“Thucydides’s Trap”]] (*Destined for War*, 2017) counted 12 wars in 16 cases of rising powers challenging ruling ones over 500 years; critics question how he chose and coded the cases.",
      "Two critiques come up often. Jeffrey Legro and Andrew Moravcsik (“Is Anybody Still a Realist?”, 1999) argued that realists had added so many domestic and ideational factors that realism lost what made it distinct. John Vasquez (1997) called the programme “degenerating”, saving itself with new auxiliary ideas after each failed prediction. Realists reply that structure still sets the limits within which those factors work, and that wars and rivalries keep returning.",
      {key:"Realism is best treated as a family of testable claims that disagree with each other, not as one view of the world."},
      {terms:["utopianism-ir","regional-hegemony","buck-passing","offshore-balancing","spiral-model","offense-defense-balance","balance-of-threat","strategic-hedging","thucydides-trap"]}
    ]}
   ],
   try:[
    {id:"e4u2-l1-x1", type:"mcq", q:"A dominant state’s leader says: “The current order and free trade benefit everyone equally, so any country that challenges them is an enemy of peace.” Which of E. H. Carr’s ideas fits a critique of this statement best?", options:[
      {t:"The harmony of interests: satisfied powers present their own interest in the status quo as a universal good", ok:true, why:"Right. Carr argued that the claim of a natural harmony of interests suited the powers that benefited from the existing order, making challengers look immoral."},
      {t:"The stopping power of water", why:"That is Mearsheimer’s idea about why global hegemony is impossible. It says nothing about how powerful states justify an order."},
      {t:"The offence–defence balance", why:"That is Jervis’s idea about military technology and the security dilemma, not about the language of order and morality."},
      {t:"Balance of threat", why:"That is Walt’s theory of alliance choice. It does not address how a leading state describes the order as good for all."}
    ]},
    {id:"e4u2-l1-x2", type:"sort", q:"Which branch of realism does each claim belong to?", buckets:["Offensive realism","Defensive realism"], items:[
      {t:"A great power that can become the dominant power in its own region should try to do so.", b:0, why:"Regional hegemony as the safest position is Mearsheimer’s central claim."},
      {t:"Expansion usually provokes others to unite against you, so restraint is wiser.", b:1, why:"This is the defensive realist core: power-grabbing is self-defeating."},
      {t:"When great powers overexpand, domestic coalitions and strategic myths are usually to blame.", b:1, why:"Jack Snyder’s *Myths of Empire* (1991) made this defensive realist argument."},
      {t:"A distant great power should let local states balance first and step in only if they fail.", b:0, why:"Offshore balancing, with buck-passing, is part of Mearsheimer’s offensive realism."},
      {t:"When defence has the advantage, states can be secure without threatening each other.", b:1, why:"The offence–defence balance is a defensive realist tool (Jervis, Van Evera)."},
      {t:"Since intentions can never be known for certain, maximising relative power is the safest bet.", b:0, why:"Both branches note uncertainty, but drawing the conclusion “maximise power” is offensive realism."}
    ]},
    {id:"e4u2-l1-x3", type:"mcq", q:"Two neighbours both build their forces around fixed coastal guns and short-range air defences that cannot be used to invade, and defending is far cheaper than attacking. Which of Jervis’s four worlds are they in?", options:[
      {t:"Doubly stable: defence has the edge and the forces are clearly defensive", ok:true, why:"Right. Each can be safe without threatening the other, so the security dilemma has little bite."},
      {t:"Doubly dangerous: the strongest form of the security dilemma", why:"That world needs an attack advantage and forces that can’t be told apart; here both conditions point the other way."},
      {t:"No dilemma, but risky, because attack has the edge", why:"Here defence, not attack, has the edge."},
      {t:"A dilemma, but manageable, because forces look alike", why:"These forces are easy to tell apart: coastal guns and short-range air defences can’t invade."}
    ]},
    {id:"e4u2-l1-x4", type:"mcq", q:"An analyst is convinced that a rival government is building up its army mainly because it feels insecure. Which policy does Jervis’s spiral model suggest, and what is its risk?", options:[
      {t:"Reassurance and arms-control offers; if the analyst is wrong and the rival is aggressive, concessions may invite more demands", ok:true, why:"Right. The spiral model treats insecurity as the problem, and Jervis stressed that misjudging which model fits is costly either way."},
      {t:"Firm deterrence and clear threats; if the analyst is wrong, nothing is lost", why:"That is the deterrence model’s advice, and it also has a cost: against an insecure rival, threats feed the spiral."},
      {t:"Doing nothing, because the security dilemma solves itself", why:"Neither model says the dilemma solves itself; both ask what policy reduces danger."},
      {t:"Seeking regional hegemony to remove the threat for good", why:"That is offensive realist advice, not the spiral model’s."}
    ]},
    {id:"e4u2-l1-x5", type:"match", q:"Match each scholar to the claim they are known for.", pairs:[
      ["Stephen Walt (1987)","States balance against threats: power, nearness, offensive capability and intentions","Walt’s balance of threat refined the balance of power."],
      ["Randall Schweller (1994)","Revisionist states often bandwagon for profit, not out of fear","“Bandwagoning for Profit” brought revisionist motives back in."],
      ["Kuik Cheng-Chwee (2008)","Smaller states can hedge, mixing engagement with insurance","Kuik studied Malaysia’s and Singapore’s responses to a rising China."],
      ["Gideon Rose (1998)","Named neoclassical realism: system pressures filtered through domestic politics","His review article in *World Politics* gave the branch its name."],
      ["Graham Allison (2017)","Counted 12 wars in 16 cases of a rising power challenging a ruling one","*Destined for War* popularised “Thucydides’s Trap”."]
    ]},
    {id:"e4u2-l1-x6", type:"mcq", q:"A scholar explains a war by the ruling party’s ideology, a coalition of domestic interest groups and popular nationalism, and calls the explanation realist. Which critique would Legro and Moravcsik (1999) make?", options:[
      {t:"If realism absorbs ideology, coalitions and nationalism, it loses what made it distinct from liberal and constructivist theories", ok:true, why:"Right. Their article argued that realism had been stretched until it no longer had a distinctive core."},
      {t:"Realism should never use evidence from inside states", why:"Neoclassical realists do use domestic factors; the critique is about whether these become the main explanation."},
      {t:"Wars can only be explained by human nature", why:"That is closer to early classical realism, and it is not Legro and Moravcsik’s point."},
      {t:"Realism is true, so the explanation must be right", why:"A critique asks whether an explanation fits the theory’s claims, not whether the theory is true by definition."}
    ]},
    {id:"e4u2-l1-x7", type:"spot", q:"A classmate’s seminar notes on realism. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"Herz named the security dilemma in 1950.", flag:false, why:"Correct: John Herz, “Idealist Internationalism and the Security Dilemma”, *World Politics*, 1950."}," ",
      {t:"Waltz argued that human nature is the root cause of war between states.", flag:true, why:"That is classical realism. Waltz’s structural theory explains recurring patterns by the anarchic system, not human nature."}," ",
      {t:"Mearsheimer thinks global hegemony is out of reach, so great powers aim at regional hegemony.", flag:false, why:"Correct: the “stopping power of water” is his reason."}," ",
      {t:"Neoclassical realism ignores domestic politics.", flag:true, why:"The opposite: it adds domestic factors as “transmission belts” between system pressures and policy."}," ",
      {t:"Allison found that every case of a rising power challenging a ruling one ended in war.", flag:true, why:"He counted 12 wars in 16 cases; four ended without war."}," ",
      {t:"Carr warned against pure realism as well as utopianism.", flag:false, why:"Correct: he called pure realism sterile."}
    ]}
   ],
   apply:{intro:"Try realist tools on public material. There are no right conclusions, only clear reasoning with evidence.", tasks:[
    {t:"Balancing, bandwagoning or hedging?", how:["Find one recent official statement (a speech, a defence white paper or a joint statement) in which a government describes a partnership with a larger power.","List the words that suggest balancing (deterrence, unity against a threat), bandwagoning (joining the stronger side for gain or safety) or hedging (keeping options open).","Use Walt’s four sources of threat: which ones does the statement point to?"], write:"The statement and source… Words that suggest each option… Walt’s four factors… My reading, and what would change my mind…"},
    {t:"Spiral or deterrence?", how:["Pick a news report about two rival states’ military moves.","Write one paragraph reading it through the spiral model and one through the deterrence model.","Note what evidence (statements, budgets, deployments, history) would help decide which reading fits better."], write:"The case… The spiral reading… The deterrence reading… Evidence that would decide…"},
    {t:"Read a founding text", how:["Read the opening pages of Chapter 1 “Realism” or Chapter 19 “A Contemporary Perspective on Realism” in the E-IR theory book.","Write down one idea that matches the slogan “power politics” and one that complicates it."], write:"Matches the slogan… Complicates it…"},
    {t:"Seminar questions", how:["Is Mearsheimer’s offensive realism a theory of foreign policy or of international politics, and does the difference matter?","Does neoclassical realism rescue realism or, as Legro and Moravcsik argued, dissolve it?","Is hedging a new strategy or a new word for an old mix?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes classifying one real statement, two readings of one rivalry with the evidence that would decide between them, one idea from a founding text, and a seminar paragraph."},
   read:[
    {book:"eirt", where:"Chapter 1 “Realism” (Sandrina Antunes and Isabel Camisão) and Chapter 19 “A Contemporary Perspective on Realism” (Felix Rösch and Richard Ned Lebow)", note:"Chapter 19 develops the ethical reading of classical realism mentioned in this lesson."},
    {book:"eir", where:"Chapter 4 “International Relations Theory” (Dana Gold and Stephen McGlinchey)", note:"A short refresher on where realism sits among the other theories."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u2-l2", title:"Liberalisms: interdependence, institutions, peace and order", minutes:60,
   hook:{q:"The democratic peace is usually traced back to Kant’s *Perpetual Peace* (1795). When was the first statistical study published claiming that states with elected governments do not fight each other?", options:["1795, in Kant’s essay itself","1964, in a small regional sociology journal","1983, in Michael Doyle’s famous article","1993, in Bruce Russett’s book"], answer:1, reveal:"**1964.** Dean Babst’s “Elective Governments: A Force for Peace” appeared in *The Wisconsin Sociologist*, and the idea only took off in IR two decades later with Doyle (1983) and Russett (1993). Kant offered a philosophical argument, not data. This lesson follows the democratic peace, and the other strands of liberalism, from their claims to their critics."},
   goals:[
     "Distinguish the commercial, republican, institutional and preference-based strands of liberalism",
     "Explain how interdependence can both restrain and empower, including “weaponised interdependence”",
     "Use regime theory and neoliberal institutionalism, and state the realist objections and replies",
     "Set out the evidence for the democratic peace and the five strongest lines of criticism",
     "Explain Ikenberry’s account of liberal order and the main critiques of it"
   ],
   learn:[
    {h:"Liberalism is a family too", body:[
      {lead:"Like realism, liberalism is a family of rival theories that share a starting point: cooperation is possible, and what happens inside and between societies shapes how states behave."},
      "The primer introduced Kant, Angell, Wilson, complex interdependence, institutions and the democratic peace (see {{liberalism-ir}}). In seminars, scholars usually separate several strands, because each makes different, testable claims:",
      {table:[
        ["Strand","Core claim","Key works"],
        ["Commercial","Trade and investment raise the cost of conflict","Angell (1910); Keohane & Nye (1977)"],
        ["Republican","Domestic institutions shape foreign policy; democracies rarely fight each other","Doyle (1983, 1986); Russett (1993)"],
        ["Institutional","Rules and organisations make cooperation easier under anarchy","Keohane (1984); Krasner (1983)"],
        ["Preference-based","State preferences come from society and drive behaviour","Moravcsik (1997)"]
      ]},
      "Andrew Moravcsik’s “Taking Preferences Seriously” (1997), which itself names ideational, commercial and republican variants, tried to state a liberal theory as clearly as Waltz stated realism. States represent coalitions of domestic groups; what they **want** (their preferences) comes from those groups’ ideas, economic interests and political institutions; and what states want matters more than how much power they have. Robert Putnam’s **two-level game** (1988) adds that negotiators bargain at once with foreign governments and with their own legislatures and voters."
    ]},
    {h:"Interdependence cuts both ways", body:[
      "Keohane and Nye’s [[complex-interdependence|complex interdependence]] (1977) is covered in the primer, with its distinction between sensitivity and vulnerability. The deeper seminar point is that interdependence is a **source of power** as well as of restraint. Albert Hirschman made this case as early as 1945 in *National Power and the Structure of Foreign Trade*: a large economy can gain influence over small partners that depend on it more than it depends on them.",
      "Henry Farrell and Abraham Newman’s “Weaponized Interdependence” (2019) updated the idea for a networked world. Global finance, data and supply chains run through a few **hubs**. A state with legal control over a hub can watch the traffic (the “panopticon” effect) or cut others off (the “chokepoint” effect).",
      {ex:"In the 2000s, observers described relations between China and Japan as “politically cold, economically hot” (in Japanese, 政冷経熱, *seirei keinetsu*): disputes over history and territory alongside booming trade and investment. A commercial liberal reads the booming trade as a brake on conflict. A realist or a reader of Farrell and Newman asks whether dependence could become a tool of pressure. The phrase captures why seminars argue over whether trade restrains or empowers.", label:"Worked example: cold politics, hot economics"}
    ]},
    {h:"Institutions and regimes", body:[
      "Stephen Krasner’s classic definition (1982, in a special issue of *International Organization* published as the book *International Regimes* in 1983): an [[international-regime|international regime]] is a set of “principles, norms, rules, and decision-making procedures around which actors’ expectations converge in a given area”. The ozone rules, civil aviation and fisheries management are all regimes, whether or not one organisation runs them.",
      "{{robert-keohane|Robert Keohane}}’s *After Hegemony* (1984) asked a puzzle set by [[hegemonic-stability-theory|hegemonic stability theory]]. That theory, built on Charles Kindleberger’s *The World in Depression, 1929–1939* (1973) and developed by Robert Gilpin, held that an open world economy needs one dominant power willing to stabilise it. If so, the decline of US dominance in the 1970s should have brought collapse. Keohane argued that existing institutions **persist after hegemony** because they keep providing information, lowering the costs of deals and linking issues, which lengthens what Robert Axelrod called the [[shadow-of-the-future|shadow of the future]] (see {{neoliberal-institutionalism}}).",
      "This started the **neo-neo debate** between neorealists and neoliberal institutionalists, collected in David Baldwin’s *Neorealism and Neoliberalism* (1993). Both sides accepted anarchy and rational states; they argued about relative gains and whether institutions have independent effects. John Mearsheimer’s “The False Promise of International Institutions” (1994/95) said they mostly reflect great-power interests. Keohane and Lisa Martin replied in “The Promise of Institutionalist Theory” (1995) that states would hardly invest so heavily in institutions if they made no difference. Later, Koremenos, Lipson and Snidal (2001) studied the **rational design** of institutions: why some have strict rules and others flexible ones.",
      {ex:"After the 1997–98 Asian financial crisis, the ASEAN+3 finance ministers (the ten ASEAN members plus China, Japan and South Korea) launched the Chiang Mai Initiative in May 2000, a network of currency swap agreements to help members in a future crisis. An institutionalist sees a regime built to lower the costs of cooperation; a realist asks whose money and whose rules it rests on. Lesson 5 returns to this crisis.", label:"Worked example: a regime born from a crisis"}
    ]},
    {h:"The democratic peace: the case for", body:[
      "The primer set out the core claim (see {{democratic-peace}}). Graduate work starts from a distinction. The [[dyadic-monadic|dyadic]] claim is about **pairs**: democracies very rarely fight each other. The **monadic** claim is that democracies are more peaceful in general. Evidence for the dyadic claim is strong; evidence for the monadic claim is weaker and disputed.",
      "Michael Doyle’s two-part article “Kant, Liberal Legacies, and Foreign Affairs” (1983) and “Liberalism and World Politics” (1986) argued that liberal states have formed a **separate peace** among themselves since the late 18th century, but also warned of **liberal imprudence**: crusading and aggression towards non-liberal states. Zeev Maoz and Bruce Russett (1993) tested two explanations, **norms** of compromise and **institutional** constraints, and found support for both, the norms account more strongly. Russett’s *Grasping the Democratic Peace* (1993) and Russett and John Oneal’s *Triangulating Peace* (2001) widened the claim into a “Kantian” peace with three legs:",
      {fig:'<svg viewBox="0 0 340 300"><polygon class="d-soft" points="170,52 50,236 290,236" fill="none" stroke-width="2"/><rect class="d-lup" x="95" y="12" width="150" height="54" rx="8" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Democracy</text><text class="s" x="170" y="55" text-anchor="middle">shared norms, voters</text><rect class="d-gold" x="6" y="210" width="150" height="54" rx="8" stroke-width="2"/><text x="81" y="234" text-anchor="middle">Interdependence</text><text class="s" x="81" y="253" text-anchor="middle">trade and investment</text><rect class="d-sage" x="184" y="210" width="150" height="54" rx="8" stroke-width="2"/><text x="259" y="234" text-anchor="middle">International</text><text class="s" x="259" y="253" text-anchor="middle">organisations</text><text x="170" y="150" text-anchor="middle">Less likely</text><text x="170" y="168" text-anchor="middle">to fight</text><text class="s" x="170" y="290" text-anchor="middle">Russett and Oneal: each leg adds to peace.</text></svg>', alt:"A triangle with three corners: democracy (shared norms and voters), interdependence (trade and investment) and international organisations. In the middle: less likely to fight. A note says Russett and Oneal argued each leg adds to peace.", cap:"The “Kantian tripod” of *Triangulating Peace* (2001), named after Kant’s three conditions for peace."}
    ]},
    {h:"The democratic peace: the critics", body:[
      "Five lines of criticism come up in almost every seminar:",
      {ol:[
        "**Near misses.** Christopher Layne’s “Kant or Cant” (1994) studied crises between democracies, such as Britain and France at Fashoda in 1898, and argued that power and interest, not shared democracy, decided how they ended.",
        "**Chance.** David Spiro (1994) argued that with so few democracies for most of history, peace between them may not be statistically significant.",
        "**Weak causal logic.** Sebastian Rosato (2003) argued that the proposed mechanisms (trust between democracies, accountable leaders) do not hold up when examined case by case.",
        "**Other causes.** Erik Gartzke’s [[capitalist-peace|“capitalist peace”]] (2007) argued that market economies and shared interests, not democracy, explain much of the pattern.",
        "**Transitions.** Edward Mansfield and Jack Snyder (*Electing to Fight*, 2005) found that states in incomplete transitions to democracy can be especially war-prone."
      ]},
      "John Owen (1994) added a constructivist twist: the peace holds only when democracies **perceive** each other as liberal. Hard cases test definitions. The 1999 Kargil conflict between India and Pakistan is often discussed: Pakistan had an elected government at the time, but scholars disagree about how democratic its security policy was, given the army’s power over it."
    ]},
    {h:"Liberal order: Ikenberry and his critics", body:[
      "G. John Ikenberry’s *After Victory* (2001) compared the settlements after 1815, 1919, 1945 and the end of the Cold War. Victors that bind themselves through institutions, practising **strategic restraint**, make their power less threatening and so last longer. *Liberal Leviathan* (2011) called the post-1945 US-led order both liberal and **hierarchical**, and argued that its troubles were a crisis of authority, not of its principles.",
      "Asia complicates the story. Victor Cha (2009/10) explained why US alliances in East Asia took a **hub-and-spokes** form (separate bilateral alliances) rather than a NATO-style multilateral one: partly as a “powerplay” to restrain allies as well as to deter enemies.",
      "Critics come from several directions. Mearsheimer’s “Bound to Fail” (2019) argued that the liberal order of the 1990s overreached and contained the seeds of its own decline. Amitav Acharya’s *The End of American World Order* (2014) argued that the order was never as global as claimed and that a **multiplex** world of many actors and ideas is emerging. Marxist and postcolonial critics note that the order coexisted with empire, coups and unequal economic rules. Defenders reply that its institutions spread widely because many states, not only the United States, gained from them. As of 2026, how to describe the order and its future is an open scholarly debate.",
      {key:"Each liberal strand makes its own testable claim; a critique of one (say, the democratic peace) is not a critique of all."},
      {terms:["international-regime","hegemonic-stability-theory","shadow-of-the-future","dyadic-monadic","capitalist-peace"]}
    ]}
   ],
   try:[
    {id:"e4u2-l2-x1", type:"sort", q:"Which strand of liberalism does each claim come from?", buckets:["Commercial","Republican","Institutional"], items:[
      {t:"Rising trade between two rivals raises the cost of any war between them.", b:0, why:"Trade ties are the commercial strand’s core mechanism."},
      {t:"Leaders who must face voters and parliaments find costly wars harder to start.", b:1, why:"Domestic institutions shaping foreign policy is the republican strand."},
      {t:"A monitoring body that publishes who keeps the rules makes cheating less tempting.", b:2, why:"Providing information is one of the main jobs institutions do in Keohane’s account."},
      {t:"Pairs of established democracies have very rarely fought each other.", b:1, why:"The dyadic democratic peace is the republican strand’s best-known claim."},
      {t:"A standing forum lowers the cost of negotiating each new deal.", b:2, why:"Lower transaction costs are an institutionalist mechanism."},
      {t:"Firms with investments abroad lobby their governments against conflict with host countries.", b:0, why:"Economic ties creating interests in peace is commercial liberalism."}
    ]},
    {id:"e4u2-l2-x2", type:"mcq", q:"A state whose banks run a payment-messaging network used worldwide threatens to cut a rival’s banks off from it. Which idea fits best?", options:[
      {t:"Weaponised interdependence: control of a network hub lets a state use the chokepoint effect", ok:true, why:"Right. Farrell and Newman (2019) showed how control over hubs in global networks becomes a tool of coercion."},
      {t:"Complex interdependence shows that force has no role, so the threat cannot matter", why:"Keohane and Nye described an ideal type, and this is a case of economic, not military, pressure. Interdependence can be used as power."},
      {t:"The democratic peace predicts the threat will never be carried out", why:"The democratic peace is about war between democracies; it says nothing about network sanctions."},
      {t:"Hegemonic stability theory says only the hegemon may join networks", why:"The theory is about who stabilises an open economy, not who may join networks."}
    ]},
    {id:"e4u2-l2-x3", type:"mcq", q:"Using Krasner’s definition, which of these is best described as an international regime?", options:[
      {t:"The principles, norms, rules and decision procedures that many states follow on ozone-depleting chemicals", ok:true, why:"Right. A regime is the converging set of principles, norms, rules and procedures in one issue area, here built around the Montreal Protocol."},
      {t:"A single joint statement after a two-day summit", why:"One statement may contribute to a regime, but on its own it is not a set of converging expectations and procedures."},
      {t:"One country’s export-control law", why:"A national law is domestic; a regime is shared among states."},
      {t:"A company’s internal code of conduct", why:"A private code may matter, but it is not a set of rules around which states’ expectations converge."}
    ]},
    {id:"e4u2-l2-x4", type:"mcq", q:"In the 1970s many expected the post-war economic institutions to weaken as US dominance declined. What was Keohane’s answer in *After Hegemony* (1984)?", options:[
      {t:"Institutions can persist because they keep providing information and lowering the costs of cooperation, even without a hegemon", ok:true, why:"Right. Once built, institutions are cheaper to keep than to rebuild, so states maintain them for their own reasons."},
      {t:"Institutions would collapse, just as hegemonic stability theory predicted", why:"That was the expectation Keohane challenged."},
      {t:"A new hegemon would instantly replace the United States", why:"Keohane’s argument did not depend on a new hegemon; it explained cooperation “after hegemony”."},
      {t:"Institutions only matter between democracies", why:"Keohane’s argument is about rational states in general, not regime type."}
    ]},
    {id:"e4u2-l2-x5", type:"match", q:"Match each critic of the democratic peace with their argument.", pairs:[
      ["Christopher Layne (1994)","Crises between democracies such as Fashoda (1898) were settled by power and interest","“Kant or Cant” used near-war crises between democracies."],
      ["David Spiro (1994)","With so few democracies, the peace may be due to chance","He questioned the pattern’s statistical significance."],
      ["Sebastian Rosato (2003)","The proposed causal mechanisms don’t hold up case by case","“The Flawed Logic of Democratic Peace Theory” targeted the mechanisms."],
      ["Erik Gartzke (2007)","Market economies and shared interests explain much of the pattern","He called this the capitalist peace."],
      ["Mansfield and Snyder (2005)","States in incomplete transitions to democracy can be especially war-prone","*Electing to Fight* studied democratising states."]
    ]},
    {id:"e4u2-l2-x6", type:"mcq", q:"Kenji points out that democracies have fought many wars against non-democracies. Which claim does this evidence challenge?", options:[
      {t:"The monadic claim that democracies are more peaceful in general", ok:true, why:"Right. Wars between democracies and non-democracies are evidence against the monadic claim, not the dyadic one."},
      {t:"The dyadic claim that democracies rarely fight each other", why:"The dyadic claim is only about pairs of democracies, so these wars do not count against it."},
      {t:"Hegemonic stability theory", why:"That theory is about who stabilises the world economy, not about regime type and war."},
      {t:"Complex interdependence", why:"Kenji’s point concerns regime type and war, not interdependence."}
    ]},
    {id:"e4u2-l2-x7", type:"spot", q:"A student summary of the debate on liberal order. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"Ikenberry argues that victors who bind themselves through institutions make their power less threatening.", flag:false, why:"Correct: this is the core of *After Victory* (2001)."}," ",
      {t:"In *Liberal Leviathan* he describes the post-1945 order as free of any hierarchy.", flag:true, why:"He calls it liberal **and hierarchical**: built around US leadership."}," ",
      {t:"US alliances in East Asia mostly took a hub-and-spokes form.", flag:false, why:"Correct: separate bilateral alliances, which Victor Cha explained partly as a way to restrain allies."}," ",
      {t:"Acharya argues a multiplex world of many actors and ideas is emerging.", flag:false, why:"Correct: this is the argument of *The End of American World Order* (2014)."}," ",
      {t:"All critics agree the order benefited every state equally.", flag:true, why:"Many critics argue the opposite: that it coexisted with empire, coups and unequal economic rules."}," ",
      {t:"Mearsheimer argued that the liberal order was bound to fail.", flag:false, why:"Correct: “Bound to Fail” (2019)."}
    ]}
   ],
   apply:{intro:"Look for liberal mechanisms, and their limits, in public sources. No accounts or purchases are needed.", tasks:[
    {t:"Anatomy of a regime", how:["Choose one issue area: civil aviation, ocean fisheries in your region, postal services or the ozone layer.","Using the official website of the main treaty or organisation, list one principle, one norm, one rule and one decision-making procedure.","Note what happens when a state breaks the rules."], write:"Issue area and source… Principle… Norm… Rule… Procedure… What happens to rule-breakers…"},
    {t:"Test one hard case", how:["Pick one case often debated in the democratic peace literature: Fashoda (1898), Finland and Britain in 1941, or Kargil (1999).","Using an encyclopedia or a history book, note how democratic each side was and whether the clash counts as a war.","Write which critic from this lesson your case would help, and why."], write:"The case… How democratic was each side?… War or not?… Which critic it helps…"},
    {t:"Follow one chokepoint", how:["Pick an everyday product (a phone, a medicine, a bag of rice).","Note one stage of its production or payment that runs through few countries or firms.","Ask who could use that hub as leverage, and who would be vulnerable."], write:"The product… The hub… Who has leverage… Who is vulnerable…"},
    {t:"Seminar questions", how:["Is the democratic peace an empirical law, a statistical artefact, or a norm that holds while people believe in it?","Did the liberal international order shape East Asia, or did East Asia’s hub-and-spokes system shape a different kind of order?","Can institutions be independent of the powers that created them?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on one regime’s parts, one tested hard case, one chokepoint and a seminar paragraph."},
   read:[
    {book:"eirt", where:"Chapter 2 “Liberalism” (Jeffrey W. Meiser)", note:"Reread it for the strands of liberalism and its case on US–Mexico relations."},
    {book:"eir", where:"Chapter 4 “International Relations Theory” (Dana Gold and Stephen McGlinchey)", note:"A short refresher on liberalism alongside the other theories."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u2-l3", title:"Constructivism and the English School in depth", minutes:60,
   hook:{q:"In December 1997 well over a hundred states signed a treaty in Ottawa banning anti-personnel landmines, though several major military powers stayed outside it. What happened to the coalition of non-governmental organisations that had campaigned for the ban?", options:["It was dissolved by the UN as an unofficial body","It shared the Nobel Peace Prize that year with its coordinator","It became a new UN specialised agency","It was banned from the signing ceremony in Ottawa"], answer:1, reveal:"**It shared the 1997 Nobel Peace Prize.** The International Campaign to Ban Landmines and its coordinator, Jody Williams, were honoured in the same year. Constructivists use the case to show how **norm entrepreneurs** without armies can change what states regard as acceptable. This lesson takes norms, identity and the society of states further than the primer."},
   goals:[
     "Retell the “great debates” story behind constructivism, with the reasons historians question it",
     "Explain Wendt’s argument beyond the slogan, including the degrees of internalisation, and the main critiques",
     "Distinguish conventional and critical constructivism and the logics of consequences, appropriateness and arguing",
     "Trace a norm through its life cycle, the boomerang pattern and localisation; analyse a case of securitisation",
     "Use the English School’s institutions, the system–society–world society triad and the pluralist–solidarist debate, including its critics"
   ],
   learn:[
    {h:"How constructivism arrived: the debates story, retold", body:[
      {lead:"Textbooks often say constructivism arrived as a “middle ground” in a debate. The story is useful, and contested."},
      "By the late 1980s neorealists and neoliberal institutionalists had converged on shared assumptions: anarchy, and rational states with fixed interests. Ole Wæver (1996) called this the **neo-neo synthesis**. In his 1988 presidential address to the International Studies Association, Robert Keohane contrasted these **rationalist** approaches with what he called **reflective** ones (now usually called reflectivist), which ask where interests and identities come from. Yosef Lapid (1989) called the new clash with post-positivist approaches IR’s “third debate”. Emanuel Adler’s “Seizing the Middle Ground” (1997) placed {{constructivism}} between rationalists and radical critics.",
      "Historians of the field warn against treating this as literal history. Peter Wilson (1998) showed that the interwar “idealists” never formed a school. Brian Schmidt’s *The Political Discourse of Anarchy* (1998) found a continuous conversation about anarchy and sovereignty since the 19th century, not a neat series of debates. And the story is set almost entirely in Britain and the United States (Lesson 5).",
      {key:"Use the “great debates” as a map of arguments, not as a record of what happened, and ask who drew the map."}
    ]},
    {h:"Wendt beyond the slogan", body:[
      "{{alexander-wendt|Alexander Wendt}} built his argument in steps. In 1987 he took up the **agent–structure problem**: how do states (agents) and the international system (structure) shape each other? His 1992 article argued that [[self-help]] is an **institution**, not a fact of anarchy. Imagine two actors meeting for the first time: whether they become rivals or partners depends on how each reads the other’s first moves, and those readings become shared expectations.",
      "In *Social Theory of International Politics* (1999) he crossed the three [[cultures-of-anarchy|cultures of anarchy]] (Hobbesian, Lockean, Kantian, covered in the primer) with three **degrees of internalisation**, the reasons actors follow a culture’s rules:",
      {table:[
        ["Degree","Why actors follow the rules","Everyday picture"],
        ["First","Force: they are made to","Paying a fine only because a guard is watching"],
        ["Second","Price: it serves their interest","Paying because cheating isn’t worth it"],
        ["Third","Legitimacy: they accept the rules as right","Paying because that is what decent people do"]
      ]},
      "A Kantian culture held only by force is fragile; a Hobbesian culture held by legitimacy (enemies who believe enmity is natural) is very hard to change.",
      "Critics pushed from both sides. Dale Copeland (2000) argued that states still cannot know each other’s **future** intentions, so realist fears remain. Maja Zehfuss (*Constructivism in International Relations*, 2002) argued that Wendt takes the state’s identity as given too early and stays too close to rationalism. Wendt later argued that a **world state** is inevitable in the long run (2003)."
    ]},
    {h:"Varieties of constructivism and the logics of action", body:[
      "Ted Hopf (1998) distinguished **conventional** constructivism, which studies how identities and norms cause behaviour, from **critical** constructivism, which asks how identities are produced and whose power they serve. Peter Katzenstein’s edited volume *The Culture of National Security* (1996) set the conventional agenda.",
      "James March and Johan Olsen (1998) contrasted two [[logics-of-action|logics of action]]: the **logic of consequences** (choose the option with the best expected results) and the **logic of appropriateness** (do what is expected of someone in your role). Thomas Risse (2000) added a **logic of arguing**: actors sometimes change their minds through reasoned debate.",
      {ex:"Why did post-war Japan keep its military role so limited for decades? Katzenstein (*Cultural Norms and National Security*, 1996) and Thomas Berger (*Cultures of Antimilitarism*, 1998) pointed to antimilitarist norms that grew from defeat and became part of national identity. Jennifer Lind (“Pacifism or Passing the Buck?”, 2004) offered a realist answer: Japan **buck-passed** to its US ally when it could and built up its forces when US commitment seemed weaker. Seminars use the pair to practise testing rival theories on the same evidence.", label:"Worked example: one policy, two explanations"}
    ]},
    {h:"Norm dynamics in depth", body:[
      "Finnemore and Sikkink’s “International Norm Dynamics and Political Change” (1998) gave each stage of the [[norm-life-cycle|norm life cycle]] its own mechanism (see {{norm-dynamics}}). In **emergence**, [[norm-entrepreneur|norm entrepreneurs]] persuade, such as Henry Dunant after the battle of Solferino (1859), whose campaign led to the Red Cross. A **tipping point** follows, which they suggested rarely comes before about a third of states adopt the norm. In the **cascade**, states follow for legitimacy, conformity and esteem. In **internalisation**, the norm becomes taken for granted, through professions, law and habit. Landmines fit the pattern: government support for a ban grew quickly in 1996–97, and the treaty was opened for signature that December.",
      "Margaret Keck and Kathryn Sikkink’s *Activists Beyond Borders* (1998) described the [[boomerang-pattern|boomerang pattern]]:",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e4u2-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-rose" x="6" y="30" width="146" height="56" rx="8" stroke-width="2"/><text x="79" y="54" text-anchor="middle">State A</text><text class="s" x="79" y="73" text-anchor="middle">ignores or blocks</text><rect class="d-lup" x="188" y="30" width="146" height="56" rx="8" stroke-width="2"/><text x="261" y="54" text-anchor="middle">Other states</text><text class="s" x="261" y="73" text-anchor="middle">and IGOs</text><rect class="d-gold" x="6" y="200" width="146" height="56" rx="8" stroke-width="2"/><text x="79" y="224" text-anchor="middle">Groups in A</text><text class="s" x="79" y="243" text-anchor="middle">raise a claim</text><rect class="d-sage" x="188" y="200" width="146" height="56" rx="8" stroke-width="2"/><text x="261" y="224" text-anchor="middle">Allies abroad</text><text class="s" x="261" y="243" text-anchor="middle">NGO networks</text><path class="d-ink" d="M79 198 L79 90" stroke-width="2" stroke-dasharray="5 4"/><text x="79" y="150" text-anchor="middle">✕</text><text class="s" x="96" y="170">blocked</text><path class="d-ink" d="M154 228 L186 228" stroke-width="2" marker-end="url(#e4u2-l3-a)"/><text class="s" x="170" y="280" text-anchor="middle">1 reach out</text><path class="d-ink" d="M261 198 L261 90" stroke-width="2" marker-end="url(#e4u2-l3-a)"/><text class="s" x="268" y="150">2 lobby</text><path class="d-ink" d="M186 58 L154 58" stroke-width="2" marker-end="url(#e4u2-l3-a)"/><text class="s" x="170" y="18" text-anchor="middle">3 pressure on A</text></svg>', alt:"Four boxes. Bottom left: groups in State A raise a claim, but their path to State A, top left, is blocked. They reach out to allies abroad, bottom right, such as NGO networks, which lobby other states and intergovernmental organisations, top right, which put pressure on State A.", cap:"The boomerang pattern (Keck and Sikkink, 1998): blocked at home, activists go abroad so that pressure comes back from outside."},
      "Risse, Ropp and Sikkink’s *The Power of Human Rights* (1999) proposed a five-phase **spiral model** of human-rights change, from repression and denial to tactical concessions and rule-consistent behaviour (not to be confused with Jervis’s spiral model). Amitav Acharya (2004) showed [[norm-localization|localisation]]: in the 1990s ASEAN members reshaped the idea of “common security” into the looser “cooperative security” of the ASEAN Regional Forum, and in 1998 rejected a proposal for “flexible engagement” that would have loosened non-interference. Critics note that early norm research mostly studied norms its authors liked; later work studies contested and weakening norms too."
    ]},
    {h:"Securitisation in depth", body:[
      "The primer’s security lesson (Unit 8) set out the basic model of [[securitization|securitisation]] (see {{securitization-theory}}): a [[securitizing-move|securitising move]] presents a [[referent-object|referent object]] as existentially threatened, and if an audience accepts it, extraordinary measures follow. Buzan, Wæver and de Wilde’s *Security: A New Framework for Analysis* (1998) added **sectors**, each with typical referent objects:",
      {table:[
        ["Sector","Typical referent object"],
        ["Military","The state and its territory"],
        ["Political","Sovereignty, a government’s legitimacy"],
        ["Economic","A national economy, firms, livelihoods"],
        ["Societal","A collective identity: nation, religion, language"],
        ["Environmental","Ecosystems, the climate, species"]
      ]},
      "The **Paris School** (Didier Bigo and others) shifted attention from speeches to the everyday **practices** of security professionals such as border agencies, and Thierry Balzacq (2005) stressed the audience and context. Three critiques recur: Claire Wilkinson (2007) asked whether a model built on European democracies travels to places such as Kyrgyzstan; Lene Hansen (2000) showed that people who cannot speak publicly about their insecurity are silenced by a speech-centred model; and some ask whether analysts should ever recommend securitising, or always [[desecuritization|desecuritising]]. Asian scholars used the framework widely for “non-traditional security” such as disease and migration (Caballero-Anthony, Emmers and Acharya, eds, 2006).",
      {ex:"In the Boe Declaration of September 2018, Pacific Islands Forum leaders, meeting in Nauru (now Naoero), affirmed that climate change remains the single greatest threat to the livelihoods, security and wellbeing of the peoples of the Pacific, and adopted an expanded concept of security. In securitisation terms: the actors are the leaders, the referent object is Pacific peoples’ livelihoods and wellbeing, and the audience includes the Forum’s own members and the wider world. Whether the audience accepted the move, and what measures followed, are questions a researcher would study.", label:"Worked example: a securitising move from the Pacific"}
    ]},
    {h:"The English School in depth", body:[
      "{{hedley-bull|Hedley Bull}}’s *The Anarchical Society* (1977) says international society serves basic goals: preserving the society of states itself, the independence of states, and peace as the normal condition, alongside the goals of all social life (limiting violence, keeping promises and stable possession). Its **institutions** are the balance of power, international law, diplomacy, war and the great powers.",
      "Barry Buzan’s *From International to World Society?* (2004) sharpened two ideas. The **triad**: an international system (contact), an [[international-society|international society]] (shared rules among states) and a [[world-society|world society]] (shared identities and rules among people and non-state groups). And [[primary-institutions|primary institutions]] (deep practices such as sovereignty, territoriality, diplomacy and, he argued, the market and nationalism) versus **secondary institutions** such as the UN or WTO.",
      "The [[solidarism|pluralist–solidarist]] debate goes back to Bull’s essay on the “Grotian conception” (1966). Pluralists such as Robert Jackson (*The Global Covenant*, 2000) defend coexistence among states with different values; solidarists such as Nicholas Wheeler (*Saving Strangers*, 2000) argue that shared values can justify humanitarian action."
    ]},
    {h:"Expansion, revolt and East Asia", body:[
      "In Bull and Adam Watson’s *The Expansion of International Society* (1984), Bull’s chapter on the **revolt against the West** described five struggles by non-Western peoples: for equal sovereignty, against colonial rule, for racial equality, for economic justice, and for cultural liberation. Critics such as postcolonial scholars reply that “expansion” is a polite word for conquest, and that Asian, African and American polities had their own international orders before Europe arrived.",
      "Shogo Suzuki’s *Civilization and Empire* (2009) showed how China and Japan met European international society in the 19th century. Japan worked to be recognised as “civilised” on European terms, which, Suzuki argues, also meant learning to act as an imperial power. The English School today increasingly studies orders before and beyond Europe, including the tribute system in East Asia (Lesson 5).",
      {key:"Constructivism asks how shared ideas make and change behaviour; the English School asks which shared rules and institutions make states a society. Both are strongest on order and change, weakest on measurement."},
      {terms:["cultures-of-anarchy","logics-of-action","norm-entrepreneur","boomerang-pattern","norm-localization","securitizing-move","referent-object","desecuritization","world-society","primary-institutions","solidarism"]}
    ]}
   ],
   try:[
    {id:"e4u2-l3-x1", type:"mcq", q:"In Wendt’s terms, a state respects a neighbour’s borders only because it calculates that invading would cost more than it gains. Which degree of internalisation is this?", options:[
      {t:"The second degree: price, following the rule because it serves self-interest", ok:true, why:"Right. The rule is followed for its costs and benefits, not because the state is forced or because it accepts the rule as legitimate."},
      {t:"The first degree: force", why:"Force means the state is made to comply, for example by an occupying army. Here it chooses after a calculation."},
      {t:"The third degree: legitimacy", why:"Legitimacy would mean the state accepts the rule as right in itself, whatever the cost calculation."},
      {t:"None: Wendt says only material power matters", why:"Wendt argued the opposite: shared ideas shape what material power means."}
    ]},
    {id:"e4u2-l3-x2", type:"sort", q:"Which logic of action best describes each choice?", buckets:["Logic of consequences","Logic of appropriateness","Logic of arguing"], items:[
      {t:"A minister supports a trade deal after models show it will add jobs.", b:0, why:"Choosing by expected results is the logic of consequences."},
      {t:"A diplomat attends a ceremony because that is what an ambassador does.", b:1, why:"Doing what one’s role requires is the logic of appropriateness."},
      {t:"After long debate with experts, a delegation changes its view on what a treaty should require.", b:2, why:"Being persuaded by reasons is Risse’s logic of arguing."},
      {t:"A new member state adopts the organisation’s customs because members are expected to.", b:1, why:"Following what fits one’s identity as a member is appropriateness."},
      {t:"A government delays a decision until it can see what rivals do, to keep its options open.", b:0, why:"Strategic calculation of outcomes is the logic of consequences."}
    ]},
    {id:"e4u2-l3-x3", type:"order", q:"Put Finnemore and Sikkink’s norm life cycle in order, with the mechanism at each step.", items:[
      {t:"Norm entrepreneurs persuade others that a new standard is right", why:"Emergence comes first, driven by persuasion."},
      {t:"A critical mass of states adopts the norm (they suggested rarely before about a third)", why:"The tipping point separates emergence from cascade."},
      {t:"Other states follow for legitimacy, conformity and esteem", why:"The cascade works through socialisation."},
      {t:"The norm becomes taken for granted through law, professions and habit", why:"Internalisation is the final stage: breaking the norm becomes hard even to imagine."}
    ]},
    {id:"e4u2-l3-x4", type:"mcq", q:"Hana’s community group cannot get its government to respond to a claim about forced evictions. It contacts international NGOs, which persuade foreign governments and a UN body to raise the issue with Hana’s government. What is this?", options:[
      {t:"The boomerang pattern", ok:true, why:"Right. Blocked at home, activists go abroad so that pressure returns from outside (Keck and Sikkink, 1998)."},
      {t:"Norm localisation", why:"Localisation means local actors reshaping an outside norm to fit local beliefs, not routing pressure through foreign allies."},
      {t:"Securitisation", why:"Nothing here is framed as an existential threat requiring extraordinary measures."},
      {t:"Buck-passing", why:"Buck-passing is a realist idea about getting another state to do the balancing."}
    ]},
    {id:"e4u2-l3-x5", type:"match", q:"A government declares that a fast-spreading disease threatens “the survival of our nation” and asks parliament for emergency powers. Match each securitisation term to its part of the case.", pairs:[
      ["Securitising actor","The government making the declaration","The actor who frames the issue as an existential threat."],
      ["Referent object","The nation said to be threatened","What is claimed to need protecting."],
      ["Securitising move","The declaration before anyone accepts it","Until the audience accepts it, it is only a move."],
      ["Audience","Parliament and the public","Securitisation succeeds only if the audience accepts the claim."],
      ["Extraordinary measures","The emergency powers requested","Measures that would not be accepted in normal politics."]
    ]},
    {id:"e4u2-l3-x6", type:"sort", q:"Is each argument pluralist or solidarist, in English School terms?", buckets:["Pluralist","Solidarist"], items:[
      {t:"States disagree deeply about values, so international society should rest on sovereignty and non-intervention.", b:0, why:"Coexistence despite different values is the pluralist core."},
      {t:"States can agree on enough shared values to act together against mass atrocities.", b:1, why:"Shared values justifying common action is solidarism (Wheeler)."},
      {t:"Humanitarian intervention risks becoming a cover for powerful states’ interests.", b:0, why:"A classic pluralist warning, made by Bull among others."},
      {t:"Individuals, not only states, have rights that international society should protect.", b:1, why:"Solidarists give individuals a central place."},
      {t:"Order among states with different cultures is an achievement worth protecting in itself.", b:0, why:"Pluralists such as Jackson stress the value of coexistence."}
    ]},
    {id:"e4u2-l3-x7", type:"mcq", q:"A researcher finds that Japan increased its defence efforts in periods when US commitment seemed weaker, and relied on the alliance when it seemed strong. Whose argument does this evidence most directly support?", options:[
      {t:"Jennifer Lind’s realist buck-passing account (2004)", ok:true, why:"Right. Lind argued that Japan’s restraint tracked the reliability of its ally, as buck-passing predicts."},
      {t:"Katzenstein’s antimilitarist-norms account (1996)", why:"A norms account expects restraint to persist whatever the ally does; this evidence points to calculation."},
      {t:"Wendt’s world-state argument (2003)", why:"That argument concerns the very long-run future of the system, not Japan’s alliance behaviour."},
      {t:"Keck and Sikkink’s boomerang pattern", why:"The boomerang is about activists and human rights, not defence spending."}
    ]}
   ],
   apply:{intro:"Look for ideas, norms and shared rules at work, using public sources only.", tasks:[
    {t:"Trace a norm", how:["Choose a norm: the ban on landmines, the ban on child soldiers, women’s suffrage, or controls on plastic pollution.","Using official sources (treaty sites, UN pages), note who the norm entrepreneurs were, roughly when a tipping point came, and how far the norm is internalised today.","Note any sign of localisation or contestation."], write:"The norm… Entrepreneurs… Tipping point… Cascade… Internalised or contested today…"},
    {t:"Spot a securitising move", how:["Find one speech or official statement that calls an issue a threat to survival or to the nation.","Identify the actor, the referent object, the audience and the measures requested.","Look for signs of whether the audience accepted it."], write:"The statement… Actor… Referent object… Audience… Measures… Accepted or not…"},
    {t:"Primary institutions in the news", how:["Read one week of international news from any outlet.","Note every sign of a primary institution at work: diplomacy (ambassadors, summits), international law, great-power management, sovereignty claims, the market."], write:"Diplomacy… Law… Great powers… Sovereignty… Market… What this suggests about international society…"},
    {t:"Seminar questions", how:["Is constructivism a theory, an approach or a method?","Does securitisation theory travel well beyond the European democracies where it was developed?","Is the English School’s “expansion” story a history of a society or of an empire?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes tracing one norm through its stages, one securitising move broken into parts, a week’s list of primary institutions and a seminar paragraph."},
   read:[
    {book:"eirt", where:"Chapter 4 “Constructivism” (Sarina Theys) and Chapter 3 “The English School” (Yannis A. Stivachtis)", note:"Reread them for the branches of constructivism and the pluralist–solidarist debate."},
    {book:"eirt", where:"Chapter 14 “Securitisation Theory” (Clara Eroukhmanoff)", note:"A worked example of securitisation with the theory’s critiques."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u2-l4", title:"Critical approaches: from Marx to green theory", minutes:60,
   hook:{q:"Robert Cox wrote one of IR’s most quoted lines: “Theory is always for someone and for some purpose.” Before he moved to full-time university teaching in the 1970s, where had he spent about twenty-five years working?", options:["In a Wall Street investment bank","At the International Labour Organization, a UN agency","In his country’s foreign intelligence service","As a war correspondent"], answer:1, reveal:"**At the International Labour Organization** in Geneva, from 1947 until the early 1970s. Cox saw from the inside how an international organisation works and whose interests shape it, which fed his question of who any theory, or order, is for. This lesson takes the critical approaches further than the primer: Marxist, Critical Theory, feminist, postcolonial, green and post-structuralist."},
   goals:[
     "Explain what makes an approach “critical” and how the critical approaches differ from each other",
     "Use historical materialism beyond world-systems, including uneven and combined development",
     "Apply Cox’s framework of forces and his problem-solving versus critical distinction",
     "Describe the main kinds of feminist and postcolonial IR, with key works, cases and critiques",
     "Outline green theory and post-structuralism, and the main criticisms of each"
   ],
   learn:[
    {h:"What makes an approach critical?", body:[
      {lead:"A doctor treating a patient asks how to make the body work again. A public-health researcher also asks why so many people in one district fall ill. Critical approaches ask the second kind of question about world order."},
      "The primer introduced Marxist, feminist and postcolonial lenses (see {{marxism-ir}}, {{feminism-ir}} and {{postcolonialism-ir}}). In seminars, “critical” has two senses. Lower-case critical approaches share three habits: they ask **how** the current order came about, **whom** it serves and **how** it could be different. Upper-case **Critical Theory** is one specific tradition, from the Frankfurt School to Robert Cox.",
      {table:[
        ["Approach","Starts from","Key works"],
        ["Historical materialism","Capitalism and class shape world politics","Rosenberg (1994); Teschke (2003)"],
        ["Critical Theory","Theory serves interests; aim at emancipation","Cox (1981); Linklater (1998)"],
        ["Feminist IR","Gender shapes power, security and knowledge","Enloe (1989); Tickner (1992)"],
        ["Postcolonial IR","Empire and race shaped the system and the field","Grovogui (1996); Vitalis (2015)"],
        ["Green theory","The planet’s limits and who bears ecological harm","Eckersley (2004)"],
        ["Post-structuralism","Language and discourse make identities and dangers","Walker (1993); Campbell (1992)"]
      ]},
      "They often disagree with each other, which is part of what makes seminars lively."
    ]},
    {h:"Historical materialism after world-systems", body:[
      "The primer covered Lenin, dependency theory and Wallerstein’s world-systems. Two later moves matter. Justin Rosenberg’s *The Empire of Civil Society* (1994) argued that realism mistakes features of capitalist modernity, such as the separation of politics from economics, for timeless laws. Benno Teschke’s *The Myth of 1648* (2003) argued that Westphalia did not create the modern system; dynastic, absolutist states kept fighting over territory until capitalism changed them.",
      "The second move is [[uneven-and-combined-development|uneven and combined development]], an idea from Leon Trotsky revived by Rosenberg (2006) and by Alexander Anievas and Kerem Nişancıoğlu (*How the West Came to Rule*, 2015). Societies develop at different speeds (**uneven**) and constantly affect each other, so latecomers **combine** borrowed new technologies with older social forms. Meiji Japan’s rapid, state-led adoption of railways, factories and a modern army, alongside older social hierarchies, is one case that can be read this way.",
      "Critics say historical materialism still risks reducing politics to economics, and some postcolonial scholars say it keeps Europe at the centre of the story."
    ]},
    {h:"Critical Theory: Cox and the Frankfurt tradition", body:[
      "Max Horkheimer’s essay “Traditional and Critical Theory” (1937) argued that social theory is part of the society it studies, so it should aim to change it, not only describe it. {{robert-cox|Robert Cox}} brought this to IR in “Social Forces, States and World Orders” (1981). [[problem-solving-theory-ir|Problem-solving theory]] takes the world as given and makes it run more smoothly; critical theory asks how the order arose and how it might change. Cox did not call problem-solving theory useless; he said it hides its own assumptions.",
      "His framework links three kinds of force that shape each other:",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e4u2-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="95" y="10" width="150" height="56" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Ideas</text><text class="s" x="170" y="53" text-anchor="middle">shared meanings</text><rect class="d-gold" x="6" y="170" width="150" height="56" rx="8" stroke-width="2"/><text x="81" y="194" text-anchor="middle">Material</text><text class="s" x="81" y="213" text-anchor="middle">capabilities</text><rect class="d-sage" x="184" y="170" width="150" height="56" rx="8" stroke-width="2"/><text x="259" y="194" text-anchor="middle">Institutions</text><text class="s" x="259" y="213" text-anchor="middle">rules, organisations</text><path class="d-ink" d="M128 70 L90 166" stroke-width="2" marker-start="url(#e4u2-l4-a)" marker-end="url(#e4u2-l4-a)"/><path class="d-ink" d="M212 70 L250 166" stroke-width="2" marker-start="url(#e4u2-l4-a)" marker-end="url(#e4u2-l4-a)"/><path class="d-ink" d="M160 198 L180 198" stroke-width="2" marker-start="url(#e4u2-l4-a)" marker-end="url(#e4u2-l4-a)"/><text class="s" x="170" y="252" text-anchor="middle">These forces work in three spheres:</text><text class="s" x="170" y="270" text-anchor="middle">social forces (production), forms of state</text><text class="s" x="170" y="288" text-anchor="middle">and world orders.</text></svg>', alt:"Three boxes joined by two-way arrows: ideas (shared meanings) at the top, material capabilities at bottom left and institutions (rules and organisations) at bottom right. A note says these forces work in three spheres: social forces rooted in production, forms of state, and world orders.", cap:"Cox’s framework (1981): no force is automatically the master of the others."},
      "Drawing on Antonio Gramsci, Cox defined [[hegemony]] as an order in which the dominant group’s ideas look like common sense, and a [[historic-bloc|historic bloc]] as the alliance of social forces, ideas and institutions that holds it together. In *Production, Power, and World Order* (1987) he traced how social forces in production shape states and world orders. Andrew Linklater (*The Transformation of Political Community*, 1998) and Ken Booth, whose article “Security and Emancipation” (1991) helped launch the Welsh School of critical security studies, made [[emancipation-ir|emancipation]], freeing people from oppressive constraints, the goal. Critics ask who decides what counts as emancipation, and say the approach is clearer about what it opposes than what it proposes."
    ]},
    {h:"Feminist IR beyond “where are the women?”", body:[
      "Feminist IR is several traditions. **Liberal** feminists ask about women’s inclusion and rights; [[feminist-standpoint|standpoint]] feminists argue that the view from women’s lives reveals what the powerful miss; **post-structural** and **postcolonial** feminists study how gender categories themselves are made, and warn against speaking for all women.",
      "Key moves in the debate: J. Ann Tickner’s feminist reformulation of Morgenthau’s six principles (1988). Jean Bethke Elshtain’s *Women and War* (1987), on the paired myths of men as “just warriors” and women as “beautiful souls”. Keohane (1989) invited feminists to offer testable research programmes, and Tickner’s reply, “You Just Don’t Understand” (1997), argued that the two sides were asking different kinds of questions. Christine Sylvester (1994) brought post-modern feminism into the field. Quantitative work exists too: Valerie Hudson and co-authors (*Sex and World Peace*, 2012) argued that the security of women is closely linked to the security of states.",
      {ex:"Katharine Moon’s *Sex Among Allies* (1997) studied the lives of women working near US military bases in South Korea, and showed how alliance politics between two governments shaped, and was shaped by, those women’s lives: Enloe’s “the personal is international” as a research design. In 2014 the Philippine government and the Moro Islamic Liberation Front signed the Comprehensive Agreement on the Bangsamoro; the government’s chief negotiator, Miriam Coronel-Ferrer, is widely described as the first woman chief negotiator to sign a final peace accord with an armed group.", label:"Worked example: two Asia-Pacific cases"},
      "Critics say gender is less useful than power or class for explaining war; feminists reply that leaving gender out is itself a choice that hides evidence."
    ]},
    {h:"Postcolonial and race-critical IR", body:[
      "{{w-e-b-du-bois|W. E. B. Du Bois}} wrote in *The Souls of Black Folk* (1903) that “the problem of the Twentieth Century is the problem of the color-line”, and in “The African Roots of War” (1915) linked the First World War to European rivalry over Africa: the idea of a [[global-colour-line|global colour line]]. Siba Grovogui’s *Sovereigns, Quasi Sovereigns, and Africans* (1996) showed how international law handled African self-determination on unequal terms. Sankaran Krishna (2001) wrote of the field’s “amnesia” about race.",
      "Robert Vitalis’s *White World Order, Black Power Politics* (2015) argued that early US IR was openly about “race development”: the journal now called *Foreign Affairs* descends from the *Journal of Race Development* (1910), and a group of Black scholars at Howard University, including Alain Locke, Ralph Bunche, Rayford Logan and Merze Tate, offered critiques the field then forgot. Dipesh Chakrabarty’s *Provincializing Europe* (2000) asked how to use European concepts without treating Europe as the universal model. The [[subaltern]], those with least voice, remain a central concern.",
      "Debate continues inside the left: Vivek Chibber’s *Postcolonial Theory and the Specter of Capital* (2013) argued from a Marxist position that postcolonial theory overstates cultural difference and neglects capitalism. Others criticise postcolonial work for treating “the West” as one bloc."
    ]},
    {h:"Green theory", body:[
      "Green theory asks what world politics looks like if the planet’s limits are taken seriously. Robyn Eckersley’s *The Green State* (2004) argued that states, though part of the problem, can be reformed into [[green-state|green states]] that practise **ecological democracy**: giving a voice to those affected by environmental harm, including people abroad and future generations. More radical green thinkers question economic growth and the sovereign state itself (see {{green-theory-ir}} and {{climate-politics}}).",
      "Pacific voices bring the stakes home: for low-lying atoll states, sea-level rise raises questions about territory and even statehood, and in 2023 Pacific Islands Forum leaders adopted a declaration on the continuity of statehood in the face of climate-related sea-level rise. Critics call green theory utopian or say it underrates how much states can achieve through ordinary cooperation."
    ]},
    {h:"Post-structuralism, in brief", body:[
      "[[poststructuralism|Post-structuralism]] studies how [[discourse]], the system of language and practice through which we know things, makes identities, dangers and even “the international” (see {{poststructuralism}}). Richard Ashley’s “The Poverty of Neorealism” (1984) attacked realism’s claim to timeless truth. R. B. J. Walker’s *Inside/Outside* (1993) argued that the line between order inside states and anarchy outside is a political construction. David Campbell’s *Writing Security* (1992) argued that US foreign policy produced American identity by naming what was dangerous and foreign. Lene Hansen’s *Security as Practice* (2006) turned this into a method of discourse analysis, using Western debates on the Bosnian war.",
      "Critics, including Keohane in 1988, asked post-structuralists for a research programme with testable claims, and others charge them with relativism. Post-structuralists reply that they study how truths are produced and whom they serve, not whether anything is true.",
      {key:"The critical approaches share the question “for whom?” but disagree on what matters most: class, gender, race and empire, the planet, or discourse."},
      {terms:["uneven-and-combined-development","problem-solving-theory-ir","historic-bloc","emancipation-ir","feminist-standpoint","global-colour-line","subaltern","green-state","poststructuralism","discourse"]}
    ]}
   ],
   try:[
    {id:"e4u2-l4-x1", type:"mcq", q:"Tomás says: “The critical approaches are basically one school: they all agree with each other and only attack realism.” What is the best reply?", options:[
      {t:"They share questions about how the order arose and whom it serves, but disagree among themselves, for example Marxists criticising postcolonial theory", ok:true, why:"Right. Chibber’s Marxist critique of postcolonial theory is one example; feminists and Marxists also argue over whether class or gender matters more."},
      {t:"He is right: they form a single school with one leader", why:"There is no single school; “critical” covers several traditions with different starting points."},
      {t:"They have nothing in common at all", why:"They share the habit of asking how the order arose, whom it serves and how it could change."},
      {t:"They all reject the study of the economy", why:"Historical materialists put the economy at the centre."}
    ]},
    {id:"e4u2-l4-x2", type:"sort", q:"Is each research question closer to Cox’s problem-solving theory or to critical theory?", buckets:["Problem-solving","Critical"], items:[
      {t:"How can a trade organisation settle disputes faster?", b:0, why:"It takes the institution as given and asks how to make it work better."},
      {t:"Whose interests shaped the rules the trade organisation enforces?", b:1, why:"It asks how the order arose and whom it serves."},
      {t:"Which aid delivery method reaches the most people per dollar?", b:0, why:"It optimises within the existing system."},
      {t:"Why do some countries mostly give aid and others mostly receive it?", b:1, why:"It questions the structure that produces the pattern."},
      {t:"How did the idea that markets should be left alone come to look like common sense?", b:1, why:"Asking how ideas became hegemonic is classic Coxian critical theory."}
    ]},
    {id:"e4u2-l4-x3", type:"mcq", q:"A late-industrialising state imports railways, telegraphs and a modern army within a generation, while older social hierarchies remain powerful. Which concept fits best?", options:[
      {t:"Uneven and combined development", ok:true, why:"Right. Societies develop at different speeds and latecomers combine borrowed new forms with older ones."},
      {t:"The democratic peace", why:"That is about whether democracies fight each other, not about patterns of development."},
      {t:"The security dilemma", why:"Nothing in the case is about arming leading to mutual insecurity."},
      {t:"Norm localisation", why:"Localisation is about norms being adapted to local beliefs, not technology and social structure."}
    ]},
    {id:"e4u2-l4-x4", type:"match", q:"Match each feminist scholar to the work or argument.", pairs:[
      ["J. Ann Tickner (1988)","Reformulated Morgenthau’s six principles from a feminist standpoint","Her article in *Millennium* engaged classical realism directly."],
      ["Jean Bethke Elshtain (1987)","Men as “just warriors”, women as “beautiful souls” in *Women and War*","She showed how war stories rely on paired gender myths."],
      ["Katharine Moon (1997)","Alliance politics and the lives of women near US bases in South Korea","*Sex Among Allies* linked intimate lives to alliance politics."],
      ["Valerie Hudson and co-authors (2012)","The security of women is closely linked to the security of states","*Sex and World Peace* used large datasets."],
      ["Christine Sylvester (1994)","Brought post-modern feminism into IR theory","*Feminist Theory and International Relations in a Postmodern Era*."]
    ]},
    {id:"e4u2-l4-x5", type:"spot", q:"Notes on postcolonial and race-critical IR. Tap the claims that are wrong.", ask:"wrong", parts:[
      {t:"Du Bois wrote in 1903 that the problem of the twentieth century is the problem of the color-line.", flag:false, why:"Correct: *The Souls of Black Folk* (1903)."}," ",
      {t:"Vitalis traced *Foreign Affairs* back to the *Journal of Race Development*.", flag:false, why:"Correct: his 2015 book makes this point about early US IR."}," ",
      {t:"Postcolonial scholars agree that sovereignty was granted to all peoples equally from 1648.", flag:true, why:"The opposite: they stress that sovereignty was long denied to colonised peoples."}," ",
      {t:"Chibber’s 2013 book defends postcolonial theory against Marxist critics.", flag:true, why:"Chibber criticises postcolonial theory from a Marxist position."}," ",
      {t:"Grovogui studied how international law treated African self-determination.", flag:false, why:"Correct: *Sovereigns, Quasi Sovereigns, and Africans* (1996)."}
    ]},
    {id:"e4u2-l4-x6", type:"mcq", q:"Which claim best summarises Robyn Eckersley’s argument in *The Green State* (2004)?", options:[
      {t:"States can be reformed to practise ecological democracy, giving a voice to those affected by environmental harm, including people abroad and future generations", ok:true, why:"Right. Eckersley argued for transforming the state rather than abolishing it."},
      {t:"States should be abolished at once and replaced by local communes", why:"Some radical greens argue something like this, but Eckersley’s point was that states can be reformed."},
      {t:"Environmental problems are best left to markets alone", why:"That is not a green theory position."},
      {t:"Only great powers matter for environmental politics", why:"Eckersley stressed giving a voice to those affected by harm, wherever they are."}
    ]},
    {id:"e4u2-l4-x7", type:"mcq", q:"Which statement fits David Campbell’s argument in *Writing Security* (1992)?", options:[
      {t:"US foreign policy helped produce American identity by naming what was dangerous and foreign", ok:true, why:"Right. For Campbell, identity is not fixed before policy; it is written through the dangers a state names."},
      {t:"US foreign policy is best explained by the distribution of capabilities", why:"That is a structural realist claim, which Campbell rejected."},
      {t:"Security threats are objective facts that discourse cannot affect", why:"Post-structuralists argue that how threats are known depends on discourse."},
      {t:"Democracies never construct enemies", why:"Campbell’s case was a democracy constructing dangers."}
    ]}
   ],
   apply:{intro:"Ask “for whom?” of real texts. Public sources only; no one is observed or recorded.", tasks:[
    {t:"Who is this report for?", how:["Find a short policy report from a think tank or international organisation.","Note the problem it sets out to solve and the solutions it considers.","Ask Cox’s question: what does it take as given? Who funds the organisation, and whose interests might its framing serve?"], write:"The report… Problem and solutions… What it takes as given… Funding and possible interests…"},
    {t:"Read a summit for gender", how:["Look at the official photos and list of participants from one recent summit or peace negotiation.","Note who is present, in which roles, and who is absent.","Write which feminist tradition (liberal, standpoint, post-structural) would ask which question about what you found."], write:"The event… Who is present and in which roles… Who is absent… Questions each tradition would ask…"},
    {t:"Trace a discourse", how:["Collect five phrases that news outlets in two different countries use about one region or group of countries.","Note what identity each phrase suggests, and what it makes seem normal or dangerous."], write:"Phrases from outlet 1… from outlet 2… What identities and dangers they construct…"},
    {t:"Seminar questions", how:["Is critical theory a theory of IR, or a theory about IR theories?","Do feminist and Marxist approaches complement or compete with each other?","Can green theory work within the sovereign states system, or does it require going beyond it?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on one report’s framing and funding, one event read for gender, a small discourse comparison and a seminar paragraph."},
   read:[
    {book:"eirt", where:"Chapters 5 “Marxism” (Maïa Pal), 6 “Critical Theory” (Marcos Farias Ferreira), 7 “Poststructuralism” (Aishling Mc Morrow), 8 “Feminism” (Sarah Smith) and 9 “Postcolonialism” (Sheila Nair)", note:"Reread them for each approach’s history and recent cases."},
    {book:"eirt", where:"Chapter 11 “Green Theory” (Hugh C. Dyer)", note:"A short introduction to green theory in IR."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u2-l5", title:"Global IR, theorising from Asia, and theory in a thesis", minutes:65,
   hook:{q:"Some Chinese scholars have revived the ancient concept of *tianxia* (天下) as a possible basis for world order. What does *tianxia* literally mean?", options:["The Middle Kingdom","All under heaven","The mandate of heaven","Great harmony"], answer:1, reveal:"**All under heaven.** The term goes back to the Zhou dynasty, three thousand years ago. The philosopher Zhao Tingyang revived it, most fully in a 2005 book, as an idea of world order that starts from the whole world rather than from separate states. Supporters and critics argue fiercely over it, and this lesson sets out both sides, along with other theories from Asia, before showing how to use any theory in a thesis."},
   goals:[
     "Explain Acharya and Buzan’s question about non-Western IR theory, their answers, and the Global IR agenda’s critics",
     "Describe tianxia, moral realism and relational theory accurately, with the main critiques",
     "Discuss Southeast and South Asian contributions, including the ASEAN Way debate and subaltern realism",
     "Analyse the 1997–98 Asian financial crisis through rival theories, saying what each sees and misses",
     "Build a theoretical framework for a thesis: choose, state expectations, operationalise, and avoid theory as decoration"
   ],
   learn:[
    {h:"Why is there no non-Western IR theory?", body:[
      {lead:"In 2007 two scholars asked a question that sounded almost rude, and a whole research agenda grew from it."},
      "Amitav Acharya and Barry Buzan edited a special issue of the journal *International Relations of the Asia-Pacific* (2007), introduced by their article “Why is there no non-Western international relations theory?”. Scholars wrote on China (Qin Yaqing), India (Navnita Chadha Behera), Japan (Takashi Inoguchi) and Southeast Asia (Alan Chong). Their answer was not that other regions lacked ideas. Looking back in a 2017 follow-up, they summarised the reasons for Western dominance as a **first-mover advantage**, the training of many non-Western scholars in the United States, and **Gramscian hegemony** (Western theory accepted as simply “theory”). They also listed barriers such as scarce resources, few publishing outlets, language and, in some countries, official frowning on theoretical work.",
      "Arlene Tickner and Ole Wæver’s *International Relations Scholarship Around the World* (2009) mapped how IR is actually taught and practised in many regions, and found the field more varied, and more unequal, than its textbooks suggest."
    ]},
    {h:"Global IR and its critics", body:[
      "Acharya’s 2014 agenda for [[global-ir|Global IR]] is covered in the primer (see {{global-ir}} and {{amitav-acharya}}). Acharya and Buzan’s *The Making of Global International Relations* (2019) retold the field’s first century as a global story, with ideas about world order developing in many places, not only after 1919 in Britain and the United States.",
      "Three critiques matter in seminars. Pinar Bilgin (2008), borrowing a phrase from the postcolonial theorist Homi Bhabha, argued that much non-Western thought and practice is “almost the same but not quite” as Western thought. Long, unequal contact between the West and the rest has produced ideas that look borrowed but differ in unexpected ways (her cases included India’s pursuit of nuclear status and Turkey’s secularism). So a search only for something radically different misses where difference lies, and it is also worth asking how “Western” Western IR really is. Some critical scholars say Global IR is too polite about power inside the field. And there is a risk of [[national-schools-ir|national schools]] that serve a government’s foreign policy, a risk Acharya himself warns against. Some mainstream scholars reply that good theory is universal already, so there is no need for regional labels."
    ]},
    {h:"Theorising from China: three projects and their critics", body:[
      "Three projects are discussed most often (see {{chinese-ir-theory}}):",
      {list:[
        "**[[tianxia-system|Tianxia]].** Zhao Tingyang (*Tianxia tixi*, 2005; in English *All under Heaven: The Tianxia System for a Possible World Order*, 2021) argues that a world order should start from the whole world and include everyone, rather than from competing sovereign states.",
        "**[[moral-realism|Moral realism]].** Yan Xuetong (*Ancient Chinese Thought, Modern Chinese Power*, 2011; *Leadership and the Rise of Great Powers*, 2019) draws on pre-Qin thinkers to argue that the quality of a rising power’s political leadership, and its moral standing, decide whether it can overtake a leading power.",
        "**[[relational-theory|Relational theory]].** Qin Yaqing (*A Relational Theory of World Politics*, 2018) argues that actors are always actors-in-relations, and that a dialectic of complementary opposites (*zhongyong*) is a better guide than conflict between opposites."
      ]},
      "Critics are just as important. William Callahan’s “Chinese Visions of World Order: Post-hegemonic or a New Hegemony?” (2008) argued that tianxia’s inclusive language can make a hierarchical order sound harmonious. Others note that relational ideas are not only Chinese: Patrick Jackson and Daniel Nexon’s “Relations Before States” (1999) made a similar move in Western IR. Supporters reply that every theory, including Western ones, grows from a particular history, and that this is a reason for more theories, not fewer.",
      "A related debate concerns East Asian history. David Kang (“Getting Asia Wrong”, 2003; *East Asia Before the West*, 2010) argued that the historical tribute system around China produced a stable **hierarchy** with less war than European anarchy. Acharya (“Will Asia’s Past Be Its Future?”, 2003) replied that this history was more varied and that Southeast Asian states will not accept a revived hierarchy."
    ]},
    {h:"More voices from Asia", body:[
      "The [[asean-way|ASEAN Way]] (non-interference and peaceful settlement of disputes, written into the 1976 Treaty of Amity and Cooperation, plus consensus and quiet diplomacy) is a live theory debate. Acharya (*Constructing a Security Community in Southeast Asia*, 2001) argued that its norms built a security community. David Martin Jones and Michael Smith (“Making Process, Not Progress”, 2007) argued that ASEAN produces meetings rather than results and that its unity is overstated.",
      "Mohammed Ayoob’s [[subaltern-realism|subaltern realism]] (2002) argued that for many postcolonial states the main threats come from weak state-building at home, so a realism of the powerful misreads them. Indonesia’s “free and active” foreign policy, set out by Mohammad Hatta in a 1948 speech often titled “Rowing between Two Reefs”, is an early Asian statement of the thinking behind [[non-aligned-movement|non-alignment]]. Takashi Inoguchi (2007) traced Japan’s own traditions of IR thought, and Navnita Chadha Behera (2007) asked how IR in India could be reimagined beyond Western categories."
    ]},
    {h:"One crisis, rival theories: Asia in 1997–98", body:[
      "On 2 July 1997 Thailand let its currency, the baht, float, and it fell sharply. Panic spread to Indonesia, Malaysia, the Philippines and South Korea. IMF-led rescue packages for Thailand, Indonesia and South Korea followed in the second half of 1997, with tough conditions. Japan proposed an Asian Monetary Fund in September 1997; the United States and the IMF opposed it, China gave it no clear support, and it was shelved. Indonesia’s President Suharto resigned in May 1998. Malaysia imposed capital controls in September 1998. In May 2000 the ASEAN+3 finance ministers launched the Chiang Mai Initiative.",
      {table:[
        ["Lens","What it sees","What it misses"],
        ["Realism","US influence through the IMF; Japan’s regional bid blocked; China gaining standing by not devaluing","Why the region then built new cooperation"],
        ["Liberal institutionalism","Interdependence spreading panic; the IMF as an institution; the Chiang Mai Initiative as a new regime","The power behind the conditions"],
        ["Constructivism","A battle of ideas: “Asian miracle” became “crony capitalism”; in Korea the crisis is still called the “IMF crisis”; a new East Asian identity in ASEAN+3","The material force of capital flight"],
        ["Critical and Marxist","Robert Wade and Frank Veneroso’s “Wall Street–Treasury–IMF complex” (1998); who paid for austerity","Domestic policy mistakes"],
        ["Feminist","Who absorbed the costs in households and informal work, a question many accounts never ask","The international bargaining"],
        ["Postcolonial and Global IR","Memories of outside control; regional agency in Malaysia’s controls and the Chiang Mai Initiative","Divisions within the region"]
      ]},
      "Even critics who were not radical joined in: the trade economist Jagdish Bhagwati (“The Capital Myth”, 1998) attacked the push for free capital flows. Economists still debate whether the IMF’s conditions and Malaysia’s controls helped or hurt. The point is not to crown a winner but to see that each lens asks a different question."
    ]},
    {h:"Using theory in a thesis", body:[
      "Graduate programmes expect a thesis to have a [[theoretical-framework|theoretical framework]] (see {{theoretical-framework}}): the theory or theories that tell you what to look for, and what you would expect to find. Unit 3 of this track covers research design; here is how theory fits in.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u2-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="8" width="300" height="50" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">1 A puzzle</text><text class="s" x="170" y="47" text-anchor="middle">Why did ASEAN+3 build a swap network?</text><path class="d-ink" d="M170 60 L170 74" stroke-width="2" marker-end="url(#e4u2-l5-a)"/><rect class="d-gold" x="20" y="76" width="300" height="50" rx="8" stroke-width="2"/><text x="170" y="97" text-anchor="middle">2 Rival theories</text><text class="s" x="170" y="115" text-anchor="middle">institutionalism vs realism vs identity</text><path class="d-ink" d="M170 128 L170 142" stroke-width="2" marker-end="url(#e4u2-l5-a)"/><rect class="d-sage" x="20" y="144" width="300" height="50" rx="8" stroke-width="2"/><text x="170" y="165" text-anchor="middle">3 Expectations</text><text class="s" x="170" y="183" text-anchor="middle">what we should see if each is right</text><path class="d-ink" d="M170 196 L170 210" stroke-width="2" marker-end="url(#e4u2-l5-a)"/><rect class="d-rose" x="20" y="212" width="300" height="50" rx="8" stroke-width="2"/><text x="170" y="233" text-anchor="middle">4 Concepts to indicators</text><text class="s" x="170" y="251" text-anchor="middle">e.g. “identity”: words in joint statements</text><path class="d-ink" d="M170 264 L170 278" stroke-width="2" marker-end="url(#e4u2-l5-a)"/><rect class="d-lup" x="20" y="280" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="307" text-anchor="middle">5 Evidence, then revise</text></svg>', alt:"Five stacked boxes with arrows: 1 a puzzle, for example why ASEAN+3 built a swap network; 2 rival theories, such as institutionalism, realism and identity; 3 expectations, what we should see if each is right; 4 concepts turned into indicators, for example identity measured through words in joint statements; 5 evidence, then revise.", cap:"A framework turns theory into things you can look for. Rival theories make the test fair."},
      {ol:[
        "**Choose for the puzzle**, not for fashion. A theory earns its place if it explains your puzzle and a rival would explain it differently.",
        "**State expectations.** What should you observe if the theory is right, and what would count against it?",
        "**Operationalise.** Turn each concept into something observable (an indicator), and state your **scope conditions**: where and when the argument is meant to hold. [[middle-range-theory|Middle-range theories]], about a specific mechanism, are often more useful than whole paradigms.",
        "**Return to theory in the conclusion**: what did your case show about it?"
      ]},
      "The warning sign of **theory as decoration** is a framework chapter that is never used again. Seminars also discuss two opposite warnings. Mearsheimer and Walt (“Leaving Theory Behind”, 2013) argued that IR had drifted into simplistic hypothesis testing without serious theory. David Lake (“Why ‘isms’ Are Evil”, 2011) argued that loyalty to paradigms had become a barrier. Many scholars now pair a clear framework with [[analytic-eclecticism|analytic eclecticism]]: borrowing mechanisms across theories, openly.",
      {key:"A good framework is a promise you keep: it tells the reader what you will look for, and the rest of the thesis looks for it."},
      {terms:["national-schools-ir","tianxia-system","moral-realism","relational-theory","asean-way","subaltern-realism","theoretical-framework","middle-range-theory"]}
    ]}
   ],
   try:[
    {id:"e4u2-l5-x1", type:"mcq", q:"Which explanation for the lack of non-Western IR theory did Acharya and Buzan **reject**?", options:[
      {t:"That non-Western societies had no ideas about international order", ok:true, why:"Right. They stressed that such ideas exist but were overlooked, under-resourced or not recognised as “theory”."},
      {t:"That Western theory enjoyed a first-mover advantage", why:"They accepted this as one of the reasons for Western dominance."},
      {t:"That many non-Western scholars were trained in the United States", why:"They listed this as a reason, not something they rejected."},
      {t:"That scarce resources and few publishing outlets held scholars back", why:"These were among the barriers they described."}
    ]},
    {id:"e4u2-l5-x2", type:"match", q:"Match each idea to the scholar most associated with it.", pairs:[
      ["Tianxia as a world order starting from the whole world","Zhao Tingyang","*Tianxia tixi* (2005); English edition 2021."],
      ["Moral realism: leadership and moral standing decide power shifts","Yan Xuetong","*Leadership and the Rise of Great Powers* (2019)."],
      ["Actors are always actors-in-relations","Qin Yaqing","*A Relational Theory of World Politics* (2018)."],
      ["Postcolonial states’ main threats come from weak state-building at home","Mohammed Ayoob","Subaltern realism (2002)."],
      ["Historical East Asia was a stable hierarchy around China","David Kang","“Getting Asia Wrong” (2003); *East Asia Before the West* (2010)."],
      ["ASEAN produces process, not progress","Jones and Smith","Their 2007 article in *International Security*."]
    ]},
    {id:"e4u2-l5-x3", type:"mcq", q:"What was William Callahan’s main criticism of tianxia theory (2008)?", options:[
      {t:"Its inclusive, harmonious language can make a hierarchical order sound benign", ok:true, why:"Right. His title asked whether tianxia is post-hegemonic or a new hegemony."},
      {t:"It is a Western idea in Chinese clothing", why:"Callahan did not argue that; tianxia is an ancient Chinese concept."},
      {t:"It is identical to Wallerstein’s world-systems theory", why:"The two have little in common; Callahan’s point was about hierarchy and power."},
      {t:"It ignores the role of morality in politics", why:"Tianxia theory puts great weight on moral order; the critique concerned hierarchy."}
    ]},
    {id:"e4u2-l5-x4", type:"sort", q:"Which lens is each reading of the 1997–98 Asian financial crisis using?", buckets:["Realism","Liberal institutionalism","Constructivism","Critical / Marxist"], items:[
      {t:"The United States used its weight in the IMF to block Japan’s proposed Asian Monetary Fund.", b:0, why:"Great-power influence and blocked regional leadership is a realist reading."},
      {t:"The Chiang Mai Initiative created swap rules that lower the cost of helping each other next time.", b:1, why:"Institutions lowering the costs of cooperation is institutionalism."},
      {t:"Talk of an “Asian miracle” turned overnight into talk of “crony capitalism”.", b:2, why:"How meanings and labels changed is a constructivist focus."},
      {t:"A “Wall Street–Treasury–IMF complex” pushed open capital markets that served financial interests.", b:3, why:"Wade and Veneroso’s argument is about whose economic interests the rules served."},
      {t:"In South Korea the crisis is still widely called the “IMF crisis”.", b:2, why:"The name carries a shared memory and meaning, which constructivists study."},
      {t:"Each government judged the crisis by whether it left it stronger or weaker than its regional rivals.", b:0, why:"Concern with relative position among rivals is a realist reading."}
    ]},
    {id:"e4u2-l5-x5", type:"order", q:"Put the steps of building a theoretical framework in order.", items:[
      {t:"Pose a puzzle", why:"A puzzle (something surprising that needs explaining) comes first."},
      {t:"Choose rival theories that would explain it differently", why:"Rivals make the test fair."},
      {t:"State what each theory expects you to observe", why:"Expectations make evidence able to count."},
      {t:"Turn concepts into indicators and state scope conditions", why:"Operationalisation makes the expectations checkable."},
      {t:"Gather and weigh the evidence", why:"Only now can the evidence speak."},
      {t:"Return to the theories in the conclusion", why:"A thesis should say what its case shows about theory."}
    ]},
    {id:"e4u2-l5-x6", type:"spot", q:"From a draft thesis proposal. Tap the signs of theory used as decoration or poor framework practice.", ask:"poor practice", parts:[
      {t:"This thesis uses constructivism because it is the most popular approach today.", flag:true, why:"Popularity is not a reason. A theory should be chosen because it explains the puzzle better than a rival would."}," ",
      {t:"Chapter 2 sets out what realist and institutionalist accounts would each expect us to find.", flag:false, why:"Good practice: rival expectations make the test fair."}," ",
      {t:"“Regional identity” is measured through the wording of joint statements over twenty years.", flag:false, why:"Good practice: a concept turned into an observable indicator."}," ",
      {t:"The theory chapter is not referred to again after Chapter 2.", flag:true, why:"This is the classic sign of theory as decoration."}," ",
      {t:"Evidence that fits neither theory will be left out to keep the argument clear.", flag:true, why:"Awkward evidence must be reported; it may show the framework’s limits."}," ",
      {t:"The argument is limited to Southeast Asian states after 1997.", flag:false, why:"Good practice: stating scope conditions."}
    ]},
    {id:"e4u2-l5-x7", type:"mcq", q:"Pinar Bilgin (2008) said non-Western thought about world politics is often “almost the same but not quite” as Western thought. What was her point?", options:[
      {t:"Long, unequal contact with the West has produced thought that looks similar but differs in unexpected ways, so searching only for radical difference misses it", ok:true, why:"Right. Borrowing Homi Bhabha’s idea of mimicry, she argued that difference often hides inside apparent sameness, and asked how “Western” Western IR really is."},
      {t:"Non-Western thought is a poor copy that adds nothing", why:"That is not her claim; she argued the difference is subtle, not absent or worthless."},
      {t:"Only Western theory can be called theory", why:"Bilgin was questioning that kind of boundary, not defending it."},
      {t:"Non-Western thought is completely different from Western thought", why:"Her phrase says the opposite: almost the same, but not quite."}
    ]}
   ],
   apply:{intro:"Bring in voices from more regions, then practise the craft of a framework.", tasks:[
    {t:"Meet one idea from another tradition", how:["Read Chapter 16 “Asian Perspectives” or Chapter 17 “Global South Perspectives” in the E-IR theory book.","Choose one concept or thinker it introduces.","Write what the idea explains well, and one question a sceptic might ask."], write:"The idea and its source… What it explains well… A sceptic’s question… How a supporter might reply…"},
    {t:"Run one event through two lenses", how:["Choose a settled historical event from any region (a treaty, a crisis or the founding of an organisation).","Write a short paragraph for each of two lenses from this unit: what it sees and what it misses."], write:"The event… Lens 1 sees… misses… Lens 2 sees… misses…"},
    {t:"Draft a framework paragraph", how:["Write a puzzle you might study.","Name two rival theories and what each would expect you to find.","Turn one key concept into an indicator, and state your scope conditions."], write:"Puzzle… Theory A expects… Theory B expects… Concept and indicator… Scope conditions…"},
    {t:"Seminar questions", how:["Is Global IR a new theory, a widening of the conversation, or a critique of the field?","Can tianxia or relational theory explain cases outside East Asia?","When does a theoretical framework help a thesis, and when does it get in the way?"], write:"Pick one question and write a paragraph: your claim, one piece of evidence, one counter-argument and your reply."}
   ], proof:"Notes on one idea from another tradition, one event read through two lenses, a draft framework paragraph and a seminar paragraph."},
   read:[
    {book:"eirt", where:"Chapter 10 “Towards a Global IR?” (Amitav Acharya), Chapter 16 “Asian Perspectives” (Pichamon Yeophantong) and Chapter 17 “Global South Perspectives” (Lina Benabdallah, Victor Adetula and Carlos Murillo-Zamora)", note:"Acharya’s own short case for Global IR, then two chapters of ideas from Asia, Africa and Latin America."},
    {book:"eirt", where:"Chapter 20 “The ‘Isms’ Are Evil. All Hail the ‘Isms’!” (Alex Prichard)", note:"A lively take on whether paradigms help or hinder research, useful before writing a framework."}
   ]
  }
  ],
  checkpoint:["e4u2-q02","e4u2-q05","e4u2-q11","e4u2-q15","e4u2-q20","e4u2-q23","e4u2-q28","e4u2-q31","e4u2-q35","e4u2-q38","e4u2-q42","e4u2-q45"],
  codex:[
   {id:"e-h-carr", title:"E. H. Carr", aka:["Edward Hallett Carr"], tags:["international relations","thinker","realism"],
    summary:"British diplomat, historian and IR scholar (1892–1982) whose *The Twenty Years’ Crisis* (1939) attacked interwar “utopianism” while warning that pure realism is sterile.",
    levels:{
     starter:[
      "Edward Hallett Carr was a British diplomat who became one of the founders of the academic study of international politics. He joined the Foreign Office in 1916, was part of the British delegation at the Paris Peace Conference in 1919, and left the diplomatic service in 1936 for the Woodrow Wilson Chair of International Politics at Aberystwyth, in Wales.",
      "His most famous book, *The Twenty Years’ Crisis, 1919–1939*, came out in 1939 as war returned to Europe. It argued that the hopes of the 1920s, that law, public opinion and the League of Nations could keep the peace, had ignored power.",
      {key:"Carr: hopes for peace that ignore power fail, but power without a goal is sterile."},
      "He is often remembered as a hard-headed realist, but he also insisted that politics needs ideals to aim for. Later he became a historian of Soviet Russia and wrote *What Is History?* (1961), still widely read."
     ],
     builder:[
      "**Key ideas in *The Twenty Years’ Crisis*:**",
      {list:[
        "**Utopianism versus realism.** Utopians start from how the world ought to be; realists from how it is. Each corrects the other.",
        "**The harmony of interests.** The liberal claim that peace and free trade serve everyone equally suited the satisfied powers, which presented their own interest in the status quo as a universal morality.",
        "**Three kinds of power**: military, economic and power over opinion (propaganda and persuasion).",
        "**Pure realism is sterile**: it offers no reason to act and no goal, so sound political thought must combine utopia and reality."
      ]},
      "Other works include *Conditions of the Peace* (1942), *Nationalism and After* (1945) and a fourteen-volume history of Soviet Russia. In IR courses he is read as a founder of classical realism and as a critic of the interwar settlement.",
      "Students use Carr to analyse how powerful states describe international orders: who calls the current rules “neutral”, and who benefits from that description."
     ],
     pro:[
      "Carr is a contested figure. Some scholars read him as a realist in the Morgenthau mould; others, as a critical thinker whose analysis of the harmony of interests anticipates Robert Cox’s question of whom theory serves. His view that morality and power are intertwined has been read as relativist by some critics.",
      "His politics are part of the debate. He favoured economic planning, took a positive though not uncritical view of the Soviet economy, and supported appeasement in the late 1930s, not out of admiration for Nazism but partly because he believed Germany had been treated harshly at Versailles; events soon proved him wrong about Germany. For the second edition (1946) he changed or deleted a few passages, and scholars still debate how far he distanced himself from his 1939 position.",
      "He was also sceptical of nationalism and of self-determination as a basis for world order, views shaped by his work on minority questions at the Peace Conference.",
      "Historians of the discipline note that the “idealists” he attacked were a varied group, partly constructed by his polemic (see Peter Wilson’s 1998 critique of the “first great debate”). Reading Carr closely is therefore also a lesson in how the field tells its own history."
     ]
    },
    related:["realism","hans-morgenthau","john-mearsheimer","robert-cox"],
    read:[{book:"eirt", where:"Chapter 1 “Realism” and Chapter 19 “A Contemporary Perspective on Realism”"}],
    sources:[{t:"Chatham House: E. H. Carr and nationalism between the wars (2021)", url:"https://www.chathamhouse.org/2021/03/e-h-carr-and-nationalism-between-wars"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"john-mearsheimer", title:"John Mearsheimer", aka:["John J. Mearsheimer"], tags:["international relations","thinker","realism"],
    summary:"American political scientist at the University of Chicago and the leading voice of offensive realism, set out in *The Tragedy of Great Power Politics* (2001; updated 2014).",
    levels:{
     starter:[
      "John Mearsheimer is an American political scientist. He graduated from the US Military Academy at West Point in 1970, served five years as an officer in the US Air Force, earned his PhD at Cornell University in 1980 and has taught at the University of Chicago since 1982.",
      "His big idea, **offensive realism**, says that in a world with no government above states, great powers can never be sure what others intend, so the safest course is to be as powerful as possible, ideally the dominant power in your own region.",
      {key:"Mearsheimer: great powers seek as much relative power as they can get, because that is the surest way to survive."},
      "He is one of the most widely read and widely debated IR scholars, in universities and in public."
     ],
     builder:[
      "*The Tragedy of Great Power Politics* (2001) starts from five assumptions: great powers are the main actors in an anarchic system; all have some offensive capability; none can be certain of others’ intentions; survival is their primary goal; and they are rational. From these he derives power maximisation.",
      "Key concepts: **regional hegemony** (global hegemony is blocked by the “stopping power of water”); **buck-passing** (getting another state to do the balancing); and **offshore balancing** (a distant great power stepping in only when local states cannot contain a rising power).",
      "Other works: *Conventional Deterrence* (1983); “The False Promise of International Institutions” (1994/95), which argued institutions mostly reflect great-power interests; *The Israel Lobby and U.S. Foreign Policy* (with Stephen Walt, 2007); *Why Leaders Lie* (2011); *The Great Delusion* (2018); and *How States Think* (with Sebastian Rosato, 2023).",
      "The 2014 edition of *Tragedy* added a chapter, “Can China Rise Peacefully?”, which expects intense security competition between China and the United States."
     ],
     pro:[
      "Critics raise several points. Defensive realists argue that power maximisation is self-defeating because it provokes balancing; liberals argue that institutions and interdependence change incentives; constructivists argue that his assumptions about uncertainty overlook shared identities. Historians debate his reading of cases such as Wilhelmine Germany and Imperial Japan.",
      "His “Bound to Fail” (2019) argued that the liberal international order of the 1990s overreached. His public interventions on current US foreign policy and on current wars have been sharply criticised by some and welcomed by others; a seminar should separate the theory, which can be tested, from any one policy argument.",
      "Methodologically, he and Walt criticised the field in “Leaving Theory Behind” (2013) for drifting into simplistic hypothesis testing. Read him alongside Waltz to see how two structural realists draw opposite conclusions about how much power states should seek."
     ]
    },
    related:["realism","neorealism","kenneth-waltz","security-dilemma","e-h-carr"],
    read:[{book:"eirt", where:"Chapter 1 “Realism”"}],
    sources:[{t:"John J. Mearsheimer: Biography (official site)", url:"https://mearsheimer.com/biography"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"security-dilemma", title:"Security dilemma", aka:["spiral model","offence–defence balance"], tags:["international relations","theory","realism","security"],
    summary:"The trap in which steps one state takes to make itself safer make others feel less safe, so that everyone ends up less secure; developed by Herz, Butterfield and Jervis.",
    levels:{
     starter:[
      "Imagine two neighbours who each buy a bigger guard dog to feel safe. Each sees the other’s new dog and worries. Soon both have several dogs, both feel less safe, and neither ever meant harm. That is the security dilemma.",
      "In world politics, a state that builds up its army or forms an alliance for **defence** may look **threatening** to its neighbour, which responds in kind. The spiral can lead to arms races and even war, although no one planned it.",
      {key:"The security dilemma: defence by one can look like threat to another."},
      "John Herz named it in 1950. It is one of the most useful ideas for reading news about military build-ups, because it reminds you to ask how each move looks from the other side."
     ],
     builder:[
      "**Origins.** John Herz, “Idealist Internationalism and the Security Dilemma” (*World Politics*, 1950); Herbert Butterfield’s *History and Human Relations* (1951) called the same trap “Hobbesian fear”.",
      "**Spiral and deterrence models.** Robert Jervis (*Perception and Misperception in International Politics*, 1976) contrasted the spiral model (the rival is insecure; reassure it) with the deterrence model (the rival is aggressive; stand firm). Misjudging which applies is costly either way.",
      "**Offence–defence balance.** Jervis’s “Cooperation Under the Security Dilemma” (1978) asked two questions: does attack or defence have the advantage, and can offensive and defensive forces be told apart?",
      {table:[
        ["","Not distinguishable","Distinguishable"],
        ["Attack has the edge","Doubly dangerous","No dilemma, but risky"],
        ["Defence has the edge","Dilemma, but manageable","Doubly stable"]
      ]},
      "Arms control often aims to push rivals towards the doubly stable corner."
     ],
     pro:[
      "Later work refined the concept. Charles Glaser (“The Security Dilemma Revisited”, 1997; *Rational Theory of International Politics*, 2010) built a rationalist account in which signalling benign intentions is possible but costly. Ken Booth and Nicholas Wheeler (*The Security Dilemma*, 2008) separated a **dilemma of interpretation** (what are their intentions?) from a **dilemma of response** (what should we do?) and argued that trust can be built.",
      "Critics note that offence–defence balances are hard to measure, and that leaders often misjudge them: before 1914 many believed attack had the advantage. Constructivists add that whether a build-up is read as threatening depends on identity: the same weapons mean different things between friends and rivals.",
      "Applications in Asia include Thomas Christensen’s analysis of China and the US–Japan alliance (1999) and debates after the 1998 Indian and Pakistani nuclear tests, often framed by Scott Sagan and Kenneth Waltz’s *The Spread of Nuclear Weapons: A Debate* (1995)."
     ]
    },
    related:["realism","neorealism","john-mearsheimer","alexander-wendt"],
    read:[{book:"eirt", where:"Chapter 1 “Realism”"}],
    sources:[{t:"Jervis, “Cooperation under the Security Dilemma”, World Politics 30(2), 1978 (Cambridge Core)", url:"https://www.cambridge.org/core/product/C8907431CCEFEFE762BFCA32F091C526"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"robert-keohane", title:"Robert Keohane", aka:["Robert O. Keohane"], tags:["international relations","thinker","liberalism"],
    summary:"American political scientist, Princeton professor emeritus, co-author of *Power and Interdependence* (1977) and author of *After Hegemony* (1984), the founding text of neoliberal institutionalism.",
    levels:{
     starter:[
      "Robert Keohane is an American political scientist, now professor of international affairs emeritus at Princeton University. Over a long career he has asked one main question: how can states cooperate when there is no world government to enforce their deals?",
      "His answer is that **institutions**, such as international organisations and shared rules, make promises easier to keep. They share information, lower the cost of making deals and let states build reputations.",
      {key:"Keohane: institutions help self-interested states cooperate, even without a dominant power to hold things together."},
      "With Joseph Nye he also described **complex interdependence**, a world of many connections in which military force matters less on some issues."
     ],
     builder:[
      "**Key works:** *Power and Interdependence* (with Joseph Nye, 1977); *After Hegemony: Cooperation and Discord in the World Political Economy* (1984); *International Institutions and State Power* (1989); *Ideas and Foreign Policy* (edited with Judith Goldstein, 1993); and *Designing Social Inquiry* (with Gary King and Sidney Verba, 1994), a widely used methods book.",
      "*After Hegemony* answered hegemonic stability theory: institutions created under US leadership could persist as US dominance declined, because they keep serving states’ interests. This founded **neoliberal institutionalism** and the neo-neo debate with neorealists.",
      "In his 1988 presidential address to the International Studies Association he contrasted **rationalist** and **reflective** (now usually called reflectivist) approaches, a distinction still used to map the field.",
      "Students use his ideas to explain why states create and keep institutions, from trade bodies to regional swap networks."
     ],
     pro:[
      "Critics: realists such as Mearsheimer argue that institutions reflect power and have little independent effect; Keohane and Lisa Martin replied in 1995. Constructivists argue that his rationalism takes interests as given, and feminist scholars engaged him directly: his 1989 article invited feminists to offer testable research programmes, and J. Ann Tickner’s 1997 reply argued that the two sides were asking different questions.",
      "His later work turned to legitimacy and climate governance; with David Victor (2011) he described climate governance as a “regime complex” of loosely linked institutions rather than one regime.",
      "Keohane is a good example of a scholar whose work bridges theory and method: the same author who set out institutionalism helped write one of the field’s most debated methods books, which Unit 3 of this track touches on."
     ]
    },
    related:["neoliberal-institutionalism","liberalism-ir","joseph-nye","john-mearsheimer"],
    read:[{book:"eirt", where:"Chapter 2 “Liberalism”"}],
    sources:[{t:"Princeton SPIA: Robert O. Keohane (faculty page)", url:"https://spia.princeton.edu/faculty/rkeohane"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"neoliberal-institutionalism", title:"Neoliberal institutionalism and regime theory", aka:["institutionalism","regime theory"], tags:["international relations","theory","liberalism"],
    summary:"The liberal theory that international institutions and regimes help rational, self-interested states cooperate under anarchy, by providing information, lowering transaction costs and lengthening the shadow of the future.",
    levels:{
     starter:[
      "Think of a shared kitchen in a student house. Without rules, dishes pile up and everyone blames everyone else. A rota on the fridge, a group chat and a small fund for cleaning supplies change things: people can see who has done their share, and cheating gets noticed.",
      "Neoliberal institutionalism says international **institutions** work like that rota. Even without a world government, rules and organisations help states cooperate, because they make behaviour visible and make deals cheaper to reach and keep.",
      {key:"Institutions do not force states to cooperate; they make cooperation easier for states that already have reasons to want it."},
      "The word “neoliberal” here has nothing to do with “neoliberal” economic policy; it simply marks a newer version of liberal IR theory."
     ],
     builder:[
      "**Regimes.** Stephen Krasner (1982/1983) defined an international regime as “principles, norms, rules, and decision-making procedures around which actors’ expectations converge in a given area”.",
      "**After hegemony.** Hegemonic stability theory (Kindleberger 1973; Gilpin) held that an open world economy needs a dominant stabiliser. Keohane’s *After Hegemony* (1984) argued that institutions persist after hegemony because they keep providing information, reducing transaction costs and linking issues, which lengthens the **shadow of the future** (Axelrod, 1984).",
      "**Rational design.** Koremenos, Lipson and Snidal (2001) asked why institutions differ in membership, scope, centralisation, control and flexibility, and linked each to the cooperation problem being solved.",
      "**Example.** After the 1997–98 Asian financial crisis, ASEAN+3 finance ministers launched the Chiang Mai Initiative (May 2000), a swap network meant to help members in a future crisis; Japan’s 1997 proposal for an Asian Monetary Fund had been shelved after US and IMF opposition and without clear Chinese support."
     ],
     pro:[
      "**The neo-neo debate.** Neorealists and neoliberal institutionalists share rationalist assumptions (anarchy, unitary rational states) but disagree on relative gains and the independent effect of institutions (Baldwin, ed., *Neorealism and Neoliberalism*, 1993). Joseph Grieco (1988) stressed relative gains; Duncan Snidal (1991) showed they matter less with many players. Mearsheimer (1994/95) called institutions a “false promise”; Keohane and Martin (1995) replied that states’ heavy investment in institutions would make little sense if they had no effect.",
      "**Critiques from outside rationalism.** Constructivists argue that institutions also shape identities and interests, not only incentives. Critical scholars ask whose interests institutional rules embed.",
      "**Newer work** studies regime complexes (overlapping institutions on one issue), forum shopping and the legitimacy of institutions, and the effects of withdrawals by powerful members, a topic to check as of the date you write, because memberships change."
     ]
    },
    related:["robert-keohane","liberalism-ir","bretton-woods-institutions","regional-organizations"],
    read:[{book:"eirt", where:"Chapter 2 “Liberalism”"}],
    sources:[{t:"Masahiro Kawai, “From the Chiang Mai Initiative to an Asian Monetary Fund” (Asian Development Bank Institute, 2010)", url:"https://aric.adb.org/grs/papers/Kawai%205.pdf"},{t:"Princeton SPIA: Robert O. Keohane (faculty page)", url:"https://spia.princeton.edu/faculty/rkeohane"}], checked:"2026-11"},

   {id:"alexander-wendt", title:"Alexander Wendt", tags:["international relations","thinker","constructivism"],
    summary:"Constructivist scholar (born 1958) best known for “Anarchy is What States Make of It” (1992) and *Social Theory of International Politics* (1999).",
    levels:{
     starter:[
      "Alexander Wendt is a political scientist, long based in the United States, who made constructivism one of IR’s main approaches. His 1992 article’s title became a slogan: “Anarchy is What States Make of It”.",
      "His big idea: the lack of a world government does not by itself make states rivals. Whether states treat each other as enemies, rivals or friends depends on **shared ideas** built up through how they interact.",
      {key:"Wendt: anarchy has no fixed logic; states make it Hobbesian, Lockean or Kantian through their shared understandings."},
      "He illustrated the point in 1995: a few North Korean nuclear weapons worry US governments far more than many British ones, because Britain is seen as a friend."
     ],
     builder:[
      "**Key works:** “The Agent-Structure Problem in International Relations Theory” (*International Organization*, 1987); “Anarchy is What States Make of It: The Social Construction of Power Politics” (*International Organization*, 1992); “Constructing International Politics” (*International Security*, 1995); *Social Theory of International Politics* (1999); “Why a World State is Inevitable” (2003); *Quantum Mind and Social Science* (2015).",
      "*Social Theory* crosses three **cultures of anarchy** (Hobbesian: enemies; Lockean: rivals; Kantian: friends) with three **degrees of internalisation**: rules followed because of force, because of self-interest (price), or because they are accepted as legitimate.",
      "His position is often described as a “via media” (middle way): scientific (he defends scientific realism, the view that unobservable things such as social structures can be real) yet attentive to ideas."
     ],
     pro:[
      "Critics come from both sides. Rationalists and realists, such as Dale Copeland (2000), argue that uncertainty about **future** intentions keeps realist fears alive whatever today’s culture. Critical and post-structuralist scholars, such as Maja Zehfuss (2002), argue that Wendt treats the state as a pre-given “person” with a core identity, and so stays too close to rationalism.",
      "His “thin” constructivism focuses on states and the system; conventional constructivists (Katzenstein) and critical constructivists (Hopf’s distinction, 1998) took the approach in different directions.",
      "His later work on a world state and on quantum theory and social science is debated even among admirers. In seminars, Wendt is most useful as a precise statement of how ideas and material forces combine, which other approaches can then challenge."
     ]
    },
    related:["constructivism","norm-dynamics","security-dilemma","hedley-bull"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism”"}],
    sources:[{t:"Wendt, “Anarchy is What States Make of It”, International Organization 46(2), 1992 (DOI)", url:"https://doi.org/10.1017/S0020818300027764"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"norm-dynamics", title:"Norm dynamics", aka:["norm life cycle","norm diffusion","norm localisation"], tags:["international relations","theory","constructivism"],
    summary:"How international norms emerge, spread, are localised and become taken for granted, or are contested: Finnemore and Sikkink’s life cycle, the boomerang and spiral models, and Acharya’s localisation.",
    levels:{
     starter:[
      "Not long ago, smoking indoors in restaurants was normal in many countries. Then campaigners argued against it, some places changed their rules, others followed, and today in many countries lighting a cigarette at a restaurant table would shock people. That is a norm changing.",
      "International norms change the same way: ideas about what states may and may not do, such as banning landmines or ending colonial rule. Constructivists study how a few campaigners start the change, how it spreads, and how it becomes so normal that no one questions it.",
      {key:"Norms spread through persuasion, peer pressure and habit, not only through force."},
      "Norms do not only travel from powerful countries to others: local actors reshape them to fit their own beliefs."
     ],
     builder:[
      "**The life cycle** (Finnemore and Sikkink, *International Organization*, 1998): emergence, driven by norm entrepreneurs’ persuasion; a tipping point, which they suggested rarely comes before about a third of states adopt the norm; a cascade, driven by socialisation (legitimacy, conformity, esteem); and internalisation, through professions, law and habit. Examples: women’s suffrage, the Red Cross, the 1997 landmines ban.",
      "**The boomerang pattern** (Keck and Sikkink, *Activists Beyond Borders*, 1998): blocked at home, activists work with foreign NGOs, states and IGOs, which pressure their government from outside.",
      "**The spiral model** of human rights change (Risse, Ropp and Sikkink, 1999): repression, denial, tactical concessions, prescriptive status, rule-consistent behaviour.",
      "**Localisation** (Acharya, *International Organization*, 2004): local actors reshape outside norms to fit local beliefs, as ASEAN did with ideas of common security."
     ],
     pro:[
      "Critiques and newer work: early norm research tended to study norms its authors approved of, giving it a progressive bias; later work studies norm contestation, regression and “bad” norms. Scholars also ask whether norms cause behaviour or are invoked after the fact, which raises measurement problems (speeches versus practice).",
      "Antje Wiener and others stress that norms are always interpreted and contested in use. Postcolonial scholars point out that many “international” norms, such as self-determination or racial equality, were pushed by actors in the Global South against resistance from powerful states, which reverses the usual picture of norms spreading outwards from the West.",
      "For a thesis, norm dynamics offers clear stages to operationalise (adoption counts, treaty ratifications, official language), but a researcher must also show the mechanism, not just the timing."
     ]
    },
    related:["constructivism","alexander-wendt","securitization-theory","global-ir"],
    read:[{book:"eirt", where:"Chapter 4 “Constructivism”"}],
    sources:[{t:"Finnemore and Sikkink, “International Norm Dynamics and Political Change”, International Organization 52(4), 1998 (DOI)", url:"https://doi.org/10.1162/002081898550789"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"securitization-theory", title:"Securitisation theory", aka:["Copenhagen School","securitization"], tags:["international relations","theory","security"],
    summary:"The Copenhagen School theory that an issue becomes a security issue when an actor presents it as an existential threat and an audience accepts extraordinary measures; extended by the Paris School and its critics.",
    levels:{
     starter:[
      "Some problems are handled through ordinary politics: debates, budgets, compromise. Others are treated as emergencies, where normal rules are set aside. Securitisation theory asks how an issue moves from the first group to the second.",
      "Its answer: someone with authority declares that something we value is under **existential threat**, and if the public or other key audience accepts this, extraordinary measures (emergency powers, secrecy, force) become acceptable.",
      {key:"Security is partly something that is said and accepted, not only something that is out there."},
      "The idea comes from scholars once based in Copenhagen, especially Barry Buzan and Ole Wæver."
     ],
     builder:[
      "**Core texts:** Ole Wæver, “Securitization and Desecuritization” (1995); Buzan, Wæver and de Wilde, *Security: A New Framework for Analysis* (1998).",
      "**Parts of the model:** a securitising actor; a referent object said to be threatened; a securitising move (the claim); an audience that accepts or rejects it; and extraordinary measures. Facilitating conditions include the speaker’s authority and features of the threat itself.",
      "**Sectors:** military, political, economic, societal (collective identity) and environmental, each with typical referent objects.",
      "**Desecuritisation:** Wæver argued that it is often better to return issues to normal politics.",
      "**Example:** in the 2018 Boe Declaration, Pacific Islands Forum leaders affirmed that climate change remains the single greatest threat to the livelihoods, security and wellbeing of Pacific peoples and adopted an expanded concept of security."
     ],
     pro:[
      "**Extensions:** the Paris School (Didier Bigo) studies the routine practices of security professionals rather than speeches; Thierry Balzacq (2005) stressed audience and context. Buzan and Wæver’s *Regions and Powers* (2003) linked securitisation to regional security complexes.",
      "**Critiques:** Lene Hansen (2000) showed that a speech-centred model silences those who cannot speak publicly; Claire Wilkinson (2007) asked whether a model built on European democracies travels to non-democratic or non-Western settings; others ask what counts as audience acceptance and whether analysts are themselves securitising when they label threats.",
      "**In Asia,** scholars applied it to non-traditional security such as disease, drugs and migration (Caballero-Anthony, Emmers and Acharya, eds, *Non-Traditional Security in Asia*, 2006). In a thesis, the theory gives clear parts to look for in documents, but you must decide in advance what evidence will count as acceptance."
     ]
    },
    related:["security-studies","norm-dynamics","human-security","climate-politics"],
    read:[{book:"eirt", where:"Chapter 14 “Securitisation Theory”"}],
    sources:[{t:"RNZ: Pacific leaders endorse new security deal (Boe Declaration, 6 September 2018)", url:"https://www.rnz.co.nz/international/pacific-news/365842/pacific-leaders-endorse-new-security-deal"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"hedley-bull", title:"Hedley Bull", tags:["international relations","thinker","english school"],
    summary:"Australian scholar (1932–1985) whose *The Anarchical Society* (1977) is the classic statement of the English School’s idea of an international society of states.",
    levels:{
     starter:[
      "Hedley Bull was born in Sydney in 1932 and died in Oxford in 1985. He taught at the London School of Economics, directed the British Foreign Office’s arms control and disarmament research unit, was a professor at the Australian National University in Canberra, and from 1977 held the Montague Burton Chair of International Relations at Oxford.",
      "His big question: how is there so much **order** among states when there is no world government? His answer: states form a **society**, bound by shared rules and institutions such as diplomacy and international law.",
      {key:"Bull: anarchy, yes; but an anarchical **society**, not chaos."}
     ],
     builder:[
      "**Key works:** *The Control of the Arms Race* (1961); “The Grotian Conception of International Society” (1966), which framed the pluralist–solidarist debate; *The Anarchical Society: A Study of Order in World Politics* (1977); and *The Expansion of International Society* (edited with Adam Watson, 1984).",
      "**Key ideas:** international system versus international society; the goals of international society (preserving the society of states, the independence of states, peace as the normal condition, plus limits on violence, keeping promises and stable possession); and its five institutions: the balance of power, international law, diplomacy, war and the great powers.",
      "In *The Expansion of International Society* he described the **revolt against the West**: struggles for equal sovereignty, against colonial rule, for racial equality, for economic justice and for cultural liberation."
     ],
     pro:[
      "Bull is usually read as a pluralist who worried that intervention in the name of shared values could undermine order, though his later writing, including lectures on justice in international relations (1984), showed growing sympathy for solidarist concerns.",
      "Critiques: the English School’s methods are loose and historical; its picture of “expansion” looks out from Europe and treats conquest as the spread of a society; and it can present an unequal order as a society of equals. Later English School scholars (Buzan’s 2004 work on primary institutions and world society; Suzuki on China and Japan, 2009) responded by studying non-European orders and the hierarchy within international society.",
      "Bull also debated method: in 1966 he defended a “classical approach” based on history, law and philosophy against the behaviouralist push for measurement."
     ]
    },
    related:["english-school","alexander-wendt","robert-cox"],
    read:[{book:"eirt", where:"Chapter 3 “The English School”"}],
    sources:[{t:"Encyclopaedia Britannica: Hedley Bull", url:"https://www.britannica.com/biography/Hedley-Bull"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"robert-cox", title:"Robert W. Cox", aka:["Robert Cox"], tags:["international relations","thinker","critical theory"],
    summary:"Canadian scholar (1926–2018) who worked at the International Labour Organization before founding a Gramscian Critical Theory of IR: “Theory is always for someone and for some purpose.”",
    levels:{
     starter:[
      "Robert W. Cox was born in Montreal in 1926 and died in 2018. From 1947 he worked for about twenty-five years at the International Labour Organization in Geneva, including as director of its International Institute for Labour Studies. He then taught at Columbia University and, from 1977, at York University in Toronto.",
      "His big idea: every theory starts from somewhere and serves someone. Theories that take the world as it is help keep it running; **critical** theories ask how the world came to be this way and how it might change.",
      {key:"Cox: “Theory is always for someone and for some purpose.”"}
     ],
     builder:[
      "**Key works:** “Social Forces, States and World Orders: Beyond International Relations Theory” (*Millennium*, 1981); “Gramsci, Hegemony and International Relations: An Essay in Method” (1983); *Production, Power, and World Order* (1987).",
      "**Problem-solving versus critical theory.** Problem-solving theory takes existing institutions and power relations as the given framework; critical theory stands back and asks how they arose and could be transformed.",
      "**The framework:** three kinds of force (ideas, material capabilities, institutions) interact in three spheres (social forces arising from production, forms of state, world orders).",
      "**From Gramsci:** hegemony as an order in which the dominant group’s ideas appear as common sense, held together by a historic bloc of social forces."
     ],
     pro:[
      "Cox’s work founded the “neo-Gramscian” school of international political economy, developed by scholars such as Stephen Gill. It shaped critical security studies and debates about the spread of market-oriented policy after the 1970s.",
      "Critiques: the approach is clearer about what it opposes than what it proposes; its concept of hegemony can seem to explain everything and so nothing; and empirical tests are hard to design. Some critics also ask whether the problem-solving versus critical distinction is too sharp, since much research does both.",
      "In seminars, Cox’s line is often quoted without its context. He did not dismiss problem-solving theory; he valued its precision within limits and warned only against forgetting its assumptions."
     ]
    },
    related:["marxism-ir","e-h-carr","poststructuralism","green-theory-ir"],
    read:[{book:"eirt", where:"Chapter 6 “Critical Theory”"}],
    sources:[{t:"Cox, “Social Forces, States and World Orders”, Millennium 10(2), 1981 (DOI)", url:"https://doi.org/10.1177/03058298810100020501"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"poststructuralism", title:"Post-structuralism in IR", aka:["poststructuralism"], tags:["international relations","theory","critical"],
    summary:"An approach that studies how discourse makes identities, dangers and the very idea of “the international”, associated with Ashley, Walker, Campbell and Hansen.",
    levels:{
     starter:[
      "Think about the words a family uses for its neighbours: “the noisy ones”, “the new people”, “the nice couple”. Those words do not just describe; they shape how the family behaves towards them, and how it sees itself.",
      "Post-structuralism in IR studies the language and practices (the **discourse**) through which states and peoples come to see some others as friends, strangers or dangers. It asks how those ways of seeing were made, and what they make possible or impossible.",
      {key:"Post-structuralists ask how “truths” about world politics are produced, and whom they serve."}
     ],
     builder:[
      "**Key works:** Richard Ashley, “The Poverty of Neorealism” (1984); James Der Derian and Michael Shapiro, eds, *International/Intertextual Relations* (1989); David Campbell, *Writing Security* (1992), on how US foreign policy wrote American identity through dangers; R. B. J. Walker, *Inside/Outside* (1993), on the line between order inside states and anarchy outside; Lene Hansen, *Security as Practice* (2006), a method of discourse analysis applied to Western debates on the Bosnian war.",
      "Influences come from philosophers such as Michel Foucault (power and knowledge) and Jacques Derrida (how meanings rest on oppositions such as inside/outside or civilised/barbaric)."
     ],
     pro:[
      "Critiques: Keohane (1988) asked “reflective” scholars to build research programmes with testable claims; others charge relativism or say the approach has little to say about what should be done. Replies: post-structuralists study how claims to truth are produced, not whether anything is true, and their method (genealogy, discourse analysis) can be rigorous and transparent.",
      "The approach overlaps with critical constructivism, feminist and postcolonial work, and with securitisation theory, which owes something to speech-act philosophy.",
      "For a thesis, Hansen’s work shows how to choose texts, map identity constructions and compare discourses systematically; Unit 3 of this track covers discourse analysis as a method."
     ]
    },
    related:["robert-cox","securitization-theory","feminism-ir","postcolonialism-ir"],
    read:[{book:"eirt", where:"Chapter 7 “Poststructuralism”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"green-theory-ir", title:"Green theory in IR", aka:["green political theory","ecological IR"], tags:["international relations","theory","environment"],
    summary:"Approaches that put the planet’s limits and ecological justice at the centre of world politics, from reforming the state into a “green state” to questioning growth and sovereignty.",
    levels:{
     starter:[
      "Most IR theories treat the natural world as a backdrop. Green theory makes it the main stage: a world of states competing for growth runs up against limits of climate, oceans and soils that ignore borders.",
      "It asks who causes environmental harm, who suffers it, and whether today’s system of sovereign states can deal with problems that cross every border and affect future generations.",
      {key:"Green theory asks whether the states system can live within the planet’s limits, and on whose terms."}
     ],
     builder:[
      "**Key work:** Robyn Eckersley, *The Green State: Rethinking Democracy and Sovereignty* (2004), which argues that states can be reformed into green states practising **ecological democracy**: giving voice to those affected by environmental harm, including people abroad and future generations.",
      "More radical green thinkers question economic growth itself and favour decentralised communities; others study global environmental governance and its inequalities.",
      "**Pacific example:** low-lying atoll states face questions about territory and statehood as seas rise. On 9 November 2023 Pacific Islands Forum leaders adopted a declaration that their members’ statehood and sovereignty will continue despite climate-related sea-level rise."
     ],
     pro:[
      "Debates: can ecological problems be solved through ordinary cooperation (liberal institutionalism), or do they require transforming the state and the economy (green theory)? Critics call radical green positions utopian; greens reply that the costs of inaction fall unevenly, often on those least responsible.",
      "Green theory overlaps with postcolonial work on environmental injustice, with feminist work on care and social reproduction, and with Indigenous perspectives that challenge the separation of humans and nature.",
      "In a thesis, green theory can frame questions such as who sets the rules of climate finance, or how small island states use legal and diplomatic tools; it needs, like any framework, clear expectations and indicators."
     ]
    },
    related:["climate-politics","robert-cox","securitization-theory"],
    read:[{book:"eirt", where:"Chapter 11 “Green Theory”"}],
    sources:[{t:"New Zealand Ministry of Foreign Affairs and Trade: Pacific Islands Forum Declaration on Statehood and Sea-Level Rise", url:"https://www.mfat.govt.nz/br/media-and-resources/pacific-islands-forum-declaration-on-statehood-and-sea-level-rise"},{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"chinese-ir-theory", title:"Chinese IR theory: tianxia, moral realism and relational theory", aka:["Chinese School of IR","tianxia"], tags:["international relations","theory","global ir","asia"],
    summary:"Three influential projects by Chinese scholars (Zhao Tingyang’s tianxia, Yan Xuetong’s moral realism and Qin Yaqing’s relational theory) and the debate they have provoked.",
    levels:{
     starter:[
      "Since the 2000s, scholars in China have tried to build IR theories from Chinese history and philosophy, not only from European experience. Three projects are discussed most.",
      "**Tianxia** (“all under heaven”) imagines a world order that starts from the whole world rather than separate states. **Moral realism** says that a rising power’s leadership and moral standing decide whether it can lead. **Relational theory** says that actors are defined by their relationships.",
      {key:"These theories add new questions to IR; critics ask whether some of them also serve a state’s ambitions."}
     ],
     builder:[
      "**Tianxia:** Zhao Tingyang, *Tianxia tixi* (2005); English edition *All under Heaven: The Tianxia System for a Possible World Order* (University of California Press, 2021, translated by Joseph E. Harroff). Zhao proposes an inclusive world order in which no one is an outsider.",
      "**Moral realism:** Yan Xuetong, *Ancient Chinese Thought, Modern Chinese Power* (2011) and *Leadership and the Rise of Great Powers* (2019), drawing on pre-Qin thinkers to argue that political leadership, including moral credibility, explains why some rising powers overtake leading ones.",
      "**Relational theory:** Qin Yaqing, *A Relational Theory of World Politics* (2018): actors are actors-in-relations, and the *zhongyong* dialectic treats opposites as complementary.",
      "These belong to a wider debate on Global IR (Acharya and Buzan, 2007; Qin’s 2007 article “Why is there no Chinese international relations theory?”)."
     ],
     pro:[
      "Critiques: William Callahan (2008) argued that tianxia’s inclusive language can mask a hierarchical, China-centred order. Others note that relational thinking also exists in Western IR (Jackson and Nexon, 1999), so “Chinese” labels can overstate difference; and some warn that “national schools” may align with official foreign-policy narratives. Defenders reply that all theories grow from particular histories and that Western IR has long presented its own as universal.",
      "A related historical debate concerns East Asia’s tribute system: David Kang (2003, 2010) saw a stable hierarchy; Acharya (2003) and others question both the history and its lessons for today.",
      "In a seminar, treat each project as an argument with evidence and critics, not as a statement of what “China thinks”: Chinese IR scholarship itself is diverse and argumentative."
     ]
    },
    related:["global-ir","amitav-acharya","theoretical-framework"],
    read:[{book:"eirt", where:"Chapter 16 “Asian Perspectives”"}],
    sources:[{t:"MCLC Resource Center (Ohio State University): review of Zhao Tingyang, All under Heaven (2021)", url:"https://u.osu.edu/mclc/?p=52058"},{t:"Acharya and Buzan, “Why is there no non-Western IR theory? Ten years on” (2017), LSE Research Online", url:"https://researchonline.lse.ac.uk/id/eprint/85924/1/Acharya_Buzan_Why%20is%20there%20no%20non-Western%20International.pdf"}], checked:"2026-11"},

   {id:"theoretical-framework", title:"Theoretical framework (in a thesis)", aka:["conceptual framework","analytical framework"], tags:["international relations","research","theory"],
    summary:"The part of a thesis that says which theories guide the research, what they lead you to expect, and how their concepts will be observed, so that evidence can speak to theory.",
    levels:{
     starter:[
      "A theoretical framework is like the brief you give a detective. It says what kind of case this is, which suspects to consider, and what clues would point to each one. Without it, you collect facts but cannot tell which ones matter.",
      "In an IR thesis, the framework names the theory or theories you use, explains why they suit your question, and says what you expect to find if each is right.",
      {key:"A good framework tells the reader what you will look for, and the rest of the thesis looks for it."}
     ],
     builder:[
      "**Steps:** (1) start from a puzzle; (2) choose theories that would explain it, ideally rivals; (3) state their expectations, sometimes as hypotheses; (4) operationalise: turn each concept into indicators you can observe; (5) state **scope conditions** (where and when the argument is meant to hold); (6) after the evidence, return to theory in the conclusion.",
      "**Middle-range theories** (Robert Merton’s term) about a specific mechanism are often more useful than whole paradigms.",
      "**Warning signs of theory as decoration:** a framework chosen because it is fashionable; a theory chapter never mentioned again; concepts never defined in observable terms; awkward evidence quietly dropped."
     ],
     pro:[
      "Debates about theory’s role: Mearsheimer and Walt (“Leaving Theory Behind”, *European Journal of International Relations*, 2013) criticised simplistic hypothesis testing without serious theory, in a special issue asking about “the end of International Relations theory?” (Dunne, Hansen and Wight, 2013). David Lake (“Why ‘isms’ Are Evil”, 2011) argued that paradigm loyalty blocks progress; Sil and Katzenstein (2010) defend analytic eclecticism.",
      "Interpretive theses use frameworks differently: instead of hypotheses, they set out sensitising concepts and a clear account of how texts or interviews will be read. Either way, transparency is the test: a reader should be able to see how the framework shaped what you looked at.",
      "Unit 3 of this track covers research design, case selection and methods in detail."
     ]
    },
    related:["ir-theory","chinese-ir-theory","neoliberal-institutionalism"],
    read:[{book:"eirt", where:"Chapter 20 “The ‘Isms’ Are Evil. All Hail the ‘Isms’!”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"}
  ],
  terms:[
   {id:"utopianism-ir", term:"Utopianism (Carr)", def:"E. H. Carr’s label (1939) for thinking that starts from how the world ought to be, such as hopes for peace through law and the League alone. Carr argued that sound thought combines it with realism.", codex:"e-h-carr"},
   {id:"regional-hegemony", term:"Regional hegemony", def:"Being the only great power in one’s own region. Mearsheimer argues it is the best position a great power can realistically achieve.", codex:"john-mearsheimer"},
   {id:"buck-passing", term:"Buck-passing", def:"Getting another state to bear the cost of balancing against a threatening power, instead of balancing yourself.", codex:"john-mearsheimer"},
   {id:"offshore-balancing", term:"Offshore balancing", def:"A strategy in which a distant great power lets local states contain a rising power and intervenes only if they cannot.", codex:"john-mearsheimer"},
   {id:"spiral-model", term:"Spiral model (Jervis)", def:"Robert Jervis’s model (1976) in which a rival is mainly insecure, so threats feed a spiral of hostility and reassurance helps. Contrasted with the deterrence model.", codex:"security-dilemma"},
   {id:"offense-defense-balance", term:"Offence–defence balance", def:"Whether attacking or defending has the military advantage at a given time; with distinguishability, it sets how sharp the security dilemma is (Jervis, 1978).", codex:"security-dilemma"},
   {id:"balance-of-threat", term:"Balance of threat", def:"Stephen Walt’s theory (1987) that states balance against threats, made up of aggregate power, nearness, offensive capability and perceived intentions, not against power alone.", codex:"realism"},
   {id:"strategic-hedging", term:"Hedging (strategic)", def:"Combining engagement with a rising power with insurance against it, such as defence ties with others, to avoid betting on one outcome (Kuik, 2008).", codex:"realism"},
   {id:"thucydides-trap", term:"Thucydides’s Trap", def:"Graham Allison’s term (2017) for the danger of war when a rising power challenges a ruling one; his case count and coding are debated.", codex:"realism"},
   {id:"international-regime", term:"International regime", def:"The principles, norms, rules and decision-making procedures around which states’ expectations converge in one issue area (Krasner, 1982).", codex:"neoliberal-institutionalism"},
   {id:"hegemonic-stability-theory", term:"Hegemonic stability theory", def:"The theory that an open, stable world economy needs one dominant power willing and able to uphold it (Kindleberger, Gilpin; named by Keohane).", codex:"neoliberal-institutionalism"},
   {id:"shadow-of-the-future", term:"Shadow of the future", def:"Robert Axelrod’s phrase (1984) for the expectation of meeting again, which makes cooperating now more worthwhile; institutions lengthen it.", codex:"neoliberal-institutionalism"},
   {id:"dyadic-monadic", term:"Dyadic and monadic claims", def:"A dyadic claim is about pairs of states (democracies rarely fight each other); a monadic claim is about single states (democracies are more peaceful in general).", codex:"democratic-peace"},
   {id:"capitalist-peace", term:"Capitalist peace", def:"Erik Gartzke’s argument (2007) that market economies and shared interests, more than democracy, explain peace between developed states.", codex:"democratic-peace"},
   {id:"cultures-of-anarchy", term:"Cultures of anarchy", def:"Wendt’s three shared understandings of anarchy: Hobbesian (enemies), Lockean (rivals) and Kantian (friends), each held by force, interest or legitimacy.", codex:"alexander-wendt"},
   {id:"logics-of-action", term:"Logics of action", def:"Ways of explaining choices: the logic of consequences (best expected results), the logic of appropriateness (what one’s role requires) and the logic of arguing (being persuaded).", codex:"constructivism"},
   {id:"norm-entrepreneur", term:"Norm entrepreneur", def:"A person or group that campaigns for a new standard of behaviour, such as Henry Dunant for the Red Cross or the landmine ban campaigners.", codex:"norm-dynamics"},
   {id:"boomerang-pattern", term:"Boomerang pattern", def:"When activists blocked at home work with foreign allies, who pressure their government from outside (Keck and Sikkink, 1998).", codex:"norm-dynamics"},
   {id:"norm-localization", term:"Norm localisation", def:"Local actors reshaping an outside norm to fit local beliefs and practices, as Acharya (2004) showed in Southeast Asia.", codex:"norm-dynamics"},
   {id:"securitizing-move", term:"Securitising move", def:"A claim that something is existentially threatened and needs extraordinary measures; it becomes securitisation only if an audience accepts it.", codex:"securitization-theory"},
   {id:"referent-object", term:"Referent object", def:"In securitisation theory, the thing said to be threatened and in need of protection: a state, an economy, an identity, an ecosystem.", codex:"securitization-theory"},
   {id:"desecuritization", term:"Desecuritisation", def:"Moving an issue out of emergency mode and back into ordinary political debate; Wæver argued this is often preferable.", codex:"securitization-theory"},
   {id:"world-society", term:"World society", def:"In the English School, shared identities, rules and institutions among people and non-state groups across the world, beyond states.", codex:"english-school"},
   {id:"primary-institutions", term:"Primary institutions", def:"Deep, evolved practices of international society such as sovereignty, diplomacy and international law, as opposed to secondary institutions like the UN (Buzan, 2004).", codex:"english-school"},
   {id:"solidarism", term:"Pluralism and solidarism (English School)", def:"Pluralists hold that international society should rest on coexistence and non-intervention; solidarists that shared values, such as protecting people from atrocities, can justify common action.", codex:"english-school"},
   {id:"uneven-and-combined-development", term:"Uneven and combined development", def:"The idea, from Trotsky and revived in IR, that societies develop at different speeds and affect each other, so latecomers combine borrowed new forms with older ones.", codex:"marxism-ir"},
   {id:"problem-solving-theory-ir", term:"Problem-solving theory", def:"In Robert Cox’s terms (1981), theory that takes the existing order as given and helps it work smoothly, as opposed to critical theory, which asks how the order arose and could change.", codex:"robert-cox"},
   {id:"historic-bloc", term:"Historic bloc", def:"Gramsci’s term, used by Cox, for the alliance of social forces, ideas and institutions that holds a hegemonic order together.", codex:"robert-cox"},
   {id:"emancipation-ir", term:"Emancipation (critical IR)", def:"Freeing people from oppressive constraints such as war, poverty or domination; the goal of Critical Theory and the Welsh School of security studies.", codex:"robert-cox"},
   {id:"feminist-standpoint", term:"Feminist standpoint", def:"The argument that starting from women’s lives and experience reveals features of power and politics that the powerful overlook.", codex:"feminism-ir"},
   {id:"global-colour-line", term:"Global colour line", def:"W. E. B. Du Bois’s idea that racial hierarchy structured world politics, from his 1903 “problem of the color-line” to his 1915 essay on the African roots of war.", codex:"postcolonialism-ir"},
   {id:"subaltern", term:"Subaltern", def:"Those with the least power and voice in a society, especially under colonial rule; a term from Gramsci used by postcolonial scholars such as Spivak.", codex:"postcolonialism-ir"},
   {id:"green-state", term:"Green state", def:"Robyn Eckersley’s term (2004) for a state reformed to practise ecological democracy, giving voice to all those affected by environmental harm.", codex:"green-theory-ir"},
   {id:"poststructuralism", term:"Post-structuralism", def:"An approach that studies how language and practice (discourse) produce identities, dangers and claims to truth in world politics.", codex:"poststructuralism"},
   {id:"discourse", term:"Discourse", def:"A system of language and practice through which people come to know and act on the world; studying it shows what it makes seem normal, possible or dangerous.", codex:"poststructuralism"},
   {id:"national-schools-ir", term:"National schools of IR", def:"Efforts to build IR theory from one country’s history and thought, such as a “Chinese School”; critics warn they can serve official foreign-policy narratives.", codex:"chinese-ir-theory"},
   {id:"tianxia-system", term:"Tianxia (all under heaven)", def:"An ancient Chinese concept revived by Zhao Tingyang (2005) as a world order that starts from the whole world and includes everyone; critics say it can mask hierarchy.", codex:"chinese-ir-theory"},
   {id:"moral-realism", term:"Moral realism (Yan Xuetong)", def:"Yan Xuetong’s theory that a rising power’s political leadership and moral credibility decide whether it can overtake a leading power.", codex:"chinese-ir-theory"},
   {id:"relational-theory", term:"Relational theory (Qin Yaqing)", def:"Qin Yaqing’s theory (2018) that actors are always actors-in-relations, so relationships, not separate units, are the starting point of analysis.", codex:"chinese-ir-theory"},
   {id:"asean-way", term:"ASEAN Way", def:"ASEAN’s style of diplomacy: non-interference, peaceful settlement, consensus and informal, quiet talks. Scholars debate whether it builds community or blocks results.", codex:"regional-organizations"},
   {id:"subaltern-realism", term:"Subaltern realism", def:"Mohammed Ayoob’s argument (2002) that many postcolonial states’ main security threats come from weak state-building at home, which mainstream realism misses.", codex:"global-ir"},
   {id:"theoretical-framework", term:"Theoretical framework", def:"The part of a thesis that names the guiding theories, states what they lead you to expect, and says how their concepts will be observed.", codex:"theoretical-framework"},
   {id:"middle-range-theory", term:"Middle-range theory", def:"Robert Merton’s term for theory about a specific mechanism or kind of case, between grand theories and simple description.", codex:"theoretical-framework"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u2-q01", lesson:"e4u2-l1", level:1, q:"Which three kinds of power did E. H. Carr distinguish in *The Twenty Years’ Crisis*?", options:[
     {t:"Military power, economic power and power over opinion", ok:true, why:"Correct. Carr added “power over opinion”, propaganda and persuasion, to the material forms."},
     {t:"Hard power, soft power and smart power", why:"These are Joseph Nye’s much later terms, not Carr’s."},
     {t:"Land power, sea power and air power", why:"These are kinds of military power, not Carr’s three categories."},
     {t:"Structural, relational and productive power", why:"These are categories from much later IR debates, not Carr’s."}
   ]},
   {id:"e4u2-q02", lesson:"e4u2-l1", level:2, q:"Priya writes: “Realists such as Carr simply defended power politics and rejected all ideals.” What is the most accurate correction?", options:[
     {t:"Carr attacked utopianism but also called pure realism sterile, arguing that sound thought combines utopia and reality", ok:true, why:"Correct. Carr is better read as a critic of both one-sided positions."},
     {t:"Carr was actually a liberal who supported the League without reservation", why:"Carr sharply criticised interwar liberal hopes; he was not their defender."},
     {t:"Carr wrote nothing about ideals at all", why:"He wrote at length about the relation between morality and power."},
     {t:"Carr argued that power over opinion does not exist", why:"The opposite: he named it as one of three kinds of power."}
   ]},
   {id:"e4u2-q03", lesson:"e4u2-l1", level:1, q:"According to Mearsheimer, why is global hegemony practically impossible?", options:[
     {t:"The “stopping power of water”: oceans make it very hard to project land power across them", ok:true, why:"Correct. That is why he argues great powers aim at regional hegemony."},
     {t:"International law forbids it", why:"Mearsheimer does not think law restrains great powers this way."},
     {t:"Democracies never seek power", why:"His theory is about great powers in general, whatever their regime type."},
     {t:"Nuclear weapons make all states equal", why:"He does not argue this; the reason he gives is geographical."}
   ]},
   {id:"e4u2-q04", lesson:"e4u2-l1", level:2, q:"Country A watches a rising neighbour but quietly hopes that Country B, which is closer, will build up its army and form alliances to contain it. In Mearsheimer’s terms, what is A doing?", options:[
     {t:"Buck-passing", ok:true, why:"Correct. A is trying to get another state to bear the cost of balancing."},
     {t:"Bandwagoning", why:"Bandwagoning would mean joining the rising power, which A is not doing."},
     {t:"Internal balancing", why:"Internal balancing means building up its own strength, which A is avoiding."},
     {t:"Desecuritisation", why:"That is a securitisation theory term for returning an issue to normal politics."}
   ]},
   {id:"e4u2-q05", lesson:"e4u2-l1", level:3, q:"Two rival states’ main weapons can be used equally for attack or defence, and attacking is cheaper than defending. A third state’s weapons are clearly defensive. Which pair is in the most dangerous of Jervis’s four worlds?", options:[
     {t:"The two rivals: attack has the edge and their forces cannot be told apart", ok:true, why:"Correct. Jervis called this combination doubly dangerous."},
     {t:"The third state and either rival, because defensive weapons provoke attack", why:"Clearly defensive forces ease the dilemma; they do not create the worst case."},
     {t:"None: the security dilemma only exists between democracies", why:"The dilemma applies to any states under anarchy, whatever their regime."},
     {t:"All three equally, because weapons do not matter", why:"Jervis’s whole point is that the kind of weapons and the offence–defence balance matter."}
   ]},
   {id:"e4u2-q06", lesson:"e4u2-l1", level:2, q:"Which statement best describes Walt’s balance of threat theory?", options:[
     {t:"States balance against threats, which combine aggregate power, nearness, offensive capability and perceived intentions", ok:true, why:"Correct. *The Origins of Alliances* (1987) refined the balance of power this way."},
     {t:"States always join the strongest power", why:"That is bandwagoning, which Walt found less common than balancing."},
     {t:"States balance only against the richest state", why:"Wealth is part of aggregate power, but Walt added nearness, offensive capability and intentions."},
     {t:"Alliances depend only on shared ideology", why:"Walt considered ideology but found threat more important."}
   ]},
   {id:"e4u2-q07", lesson:"e4u2-l1", level:3, q:"A small Southeast Asian state expands trade with a rising power while also holding regular military exercises with a distant great power. Which concept describes this best?", options:[
     {t:"Hedging: combining engagement with insurance to avoid betting on one outcome", ok:true, why:"Correct. Kuik Cheng-Chwee (2008) described this mix in Malaysia’s and Singapore’s policies."},
     {t:"Pure bandwagoning with the rising power", why:"The military exercises with another power are insurance, not bandwagoning."},
     {t:"Pure balancing against the rising power", why:"The expanding trade is engagement, which pure balancing would not include."},
     {t:"Offshore balancing", why:"Offshore balancing is a strategy for a distant great power, not for a small state in the region."}
   ]},
   {id:"e4u2-q08", lesson:"e4u2-l1", level:2, q:"Fareed Zakaria’s *From Wealth to Power* (1998) explained the slow growth of US influence abroad after 1865 mainly by…", options:[
     {t:"The federal government’s limited ability to draw on the nation’s wealth: weak state power despite great national power", ok:true, why:"Correct. This is a classic neoclassical realist argument with a domestic “transmission belt”."},
     {t:"The democratic peace", why:"Zakaria’s argument is about state capacity, not peace between democracies."},
     {t:"A lack of economic resources", why:"The US was already very rich; his point is that the state could not yet use that wealth."},
     {t:"The stopping power of water alone", why:"That is Mearsheimer’s idea, not Zakaria’s explanation."}
   ]},
   {id:"e4u2-q09", lesson:"e4u2-l1", level:3, q:"A realist explains a war by rising nationalism, the ruling party’s ideology and pressure from domestic lobbies. What would Legro and Moravcsik (1999) most likely say?", options:[
     {t:"The explanation relies on factors that liberal and constructivist theories emphasise, so calling it realist stretches realism until it loses its distinct core", ok:true, why:"Correct. That was the argument of “Is Anybody Still a Realist?”."},
     {t:"It is a perfect example of Waltz’s structural realism", why:"Waltz’s theory explains patterns by the system, not by domestic ideology and lobbies."},
     {t:"Realism has always been about domestic lobbies", why:"Realism traditionally focuses on power and the international system."},
     {t:"Nationalism cannot cause war", why:"They did not argue that; their point was about which theory the explanation belongs to."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e4u2-q10", lesson:"e4u2-l2", level:1, q:"Who first published a statistical study claiming that states with elected governments do not fight each other?", options:[
     {t:"Dean Babst, in 1964", ok:true, why:"Correct. His article appeared in *The Wisconsin Sociologist*."},
     {t:"Immanuel Kant, in 1795", why:"Kant made a philosophical argument; he did not publish statistics."},
     {t:"Michael Doyle, in 1983", why:"Doyle’s famous articles came about two decades after Babst."},
     {t:"Woodrow Wilson, in 1918", why:"Wilson’s Fourteen Points were a policy speech, not a statistical study."}
   ]},
   {id:"e4u2-q11", lesson:"e4u2-l2", level:2, q:"A researcher shows that democracies have started many wars against non-democracies. Which claim does this weaken?", options:[
     {t:"The monadic claim that democracies are more peaceful in general", ok:true, why:"Correct. The dyadic claim, about pairs of democracies, is untouched by these wars."},
     {t:"The dyadic claim that democracies rarely fight each other", why:"Wars against non-democracies are not evidence about pairs of democracies."},
     {t:"Krasner’s definition of regimes", why:"A definition of regimes is not tested by data on wars."},
     {t:"Hegemonic stability theory", why:"That theory concerns the stability of the world economy."}
   ]},
   {id:"e4u2-q12", lesson:"e4u2-l2", level:1, q:"In Krasner’s definition, an international regime is…", options:[
     {t:"Principles, norms, rules and decision-making procedures around which actors’ expectations converge in an issue area", ok:true, why:"Correct. A regime can exist with or without a single organisation running it."},
     {t:"A government that rules several countries", why:"That would be an empire or federation, not a regime in this sense."},
     {t:"A military alliance with a joint command", why:"An alliance may be part of a security regime, but the definition is broader."},
     {t:"Any single treaty, however small", why:"A treaty can be part of a regime; the regime is the wider set of converging expectations."}
   ]},
   {id:"e4u2-q13", lesson:"e4u2-l2", level:2, q:"Which statement captures Keohane’s argument in *After Hegemony* (1984)?", options:[
     {t:"Institutions can sustain cooperation after a hegemon declines, because they keep providing information and lowering transaction costs", ok:true, why:"Correct. This answered hegemonic stability theory’s gloomy expectation."},
     {t:"Without a hegemon, cooperation is impossible", why:"That is the expectation Keohane challenged."},
     {t:"Hegemons always act against their own interests", why:"Keohane did not argue this."},
     {t:"Institutions matter only between democracies", why:"His argument applies to rational states generally."}
   ]},
   {id:"e4u2-q14", lesson:"e4u2-l2", level:3, q:"Lucía argues that peace among rich democracies is really due to their market economies and shared interests, not their democratic institutions. Whose argument is closest to hers?", options:[
     {t:"Erik Gartzke’s capitalist peace (2007)", ok:true, why:"Correct. Gartzke argued that economic development and shared interests explain much of the pattern."},
     {t:"Michael Doyle’s liberal separate peace", why:"Doyle stressed liberal states, including their political institutions."},
     {t:"Mansfield and Snyder on democratising states", why:"Their argument is about states in transition being war-prone."},
     {t:"Wendt’s cultures of anarchy", why:"Wendt’s argument is about shared ideas, not market economies."}
   ]},
   {id:"e4u2-q15", lesson:"e4u2-l2", level:3, q:"A state whose firms dominate a key semiconductor technology restricts exports of it to a rival. Which idea best explains how this gives the state leverage?", options:[
     {t:"Weaponised interdependence: control of a hub in a global network creates a chokepoint", ok:true, why:"Correct. Farrell and Newman (2019) showed how network hubs become tools of coercion."},
     {t:"The democratic peace", why:"The democratic peace concerns war between democracies, not export controls."},
     {t:"The shadow of the future", why:"That concerns expectations of repeated cooperation, not leverage from controlling a hub."},
     {t:"Norm localisation", why:"Localisation is about adapting norms to local beliefs."}
   ]},
   {id:"e4u2-q16", lesson:"e4u2-l2", level:1, q:"Which three “legs” did Russett and Oneal’s *Triangulating Peace* (2001) link to peace?", options:[
     {t:"Democracy, economic interdependence and international organisations", ok:true, why:"Correct. They called it a Kantian peace after Kant’s three conditions."},
     {t:"Nuclear weapons, alliances and arms races", why:"These are realist themes, not the three Kantian legs."},
     {t:"Religion, language and culture", why:"These are not the variables in their study."},
     {t:"Hegemony, regimes and sanctions", why:"These are not the three legs they named."}
   ]},
   {id:"e4u2-q17", lesson:"e4u2-l2", level:2, q:"In *Liberal Leviathan* (2011), how did Ikenberry describe the post-1945 US-led order?", options:[
     {t:"Liberal and hierarchical, with its troubles a crisis of authority rather than of its principles", ok:true, why:"Correct. He argued that the order’s liberal features could outlast changes in US leadership."},
     {t:"A system of equal states with no leader", why:"He stressed US leadership and hierarchy."},
     {t:"A purely realist balance of power", why:"He emphasised institutions and rules as well as power."},
     {t:"A failure from the start", why:"That is closer to his critics, not to Ikenberry."}
   ]},
   {id:"e4u2-q18", lesson:"e4u2-l2", level:3, q:"Mei notes that after 1945 the United States built a multilateral alliance in Europe but separate bilateral alliances in East Asia. Which argument explains the Asian pattern partly as a way to restrain allies?", options:[
     {t:"Victor Cha’s “powerplay” account of the hub-and-spokes system", ok:true, why:"Correct. Cha argued bilateral ties gave Washington more control over allies as well as deterring enemies."},
     {t:"Waltz’s theory of bipolar stability", why:"Waltz explained system-level stability, not the form of US alliances in Asia."},
     {t:"Finnemore and Sikkink’s norm life cycle", why:"That is about how norms spread, not alliance design."},
     {t:"Gartzke’s capitalist peace", why:"That concerns peace between market economies."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e4u2-q19", lesson:"e4u2-l3", level:1, q:"Who distinguished “rationalist” from “reflective” (now usually called reflectivist) approaches in a 1988 presidential address to the International Studies Association?", options:[
     {t:"Robert Keohane", ok:true, why:"Correct. The distinction is still used to map the field."},
     {t:"Alexander Wendt", why:"Wendt’s key article came in 1992, and he did not give that address."},
     {t:"Hedley Bull", why:"Bull died in 1985 and worked in a different tradition."},
     {t:"Kenneth Waltz", why:"Waltz was a structural realist, not the author of this distinction."}
   ]},
   {id:"e4u2-q20", lesson:"e4u2-l3", level:2, q:"Two former enemies now respect each other’s borders, but only because each believes invasion would cost more than it gains. In Wendt’s terms, which culture and degree is this?", options:[
     {t:"A Lockean culture (rivals) held at the second degree, by self-interest", ok:true, why:"Correct. They accept each other’s existence as rivals, and comply for reasons of price."},
     {t:"A Kantian culture held at the third degree, by legitimacy", why:"Kantian friendship held by legitimacy would not rest on a cost calculation."},
     {t:"A Hobbesian culture held by legitimacy", why:"Hobbesian enemies do not respect each other’s right to exist."},
     {t:"No culture at all: Wendt says only material power matters", why:"Wendt argued that shared ideas give power its meaning."}
   ]},
   {id:"e4u2-q21", lesson:"e4u2-l3", level:1, q:"Which describes the logic of appropriateness (March and Olsen)?", options:[
     {t:"Actors do what is expected of someone in their role or identity", ok:true, why:"Correct. It is contrasted with the logic of consequences."},
     {t:"Actors choose whatever gives the best expected outcome", why:"That is the logic of consequences."},
     {t:"Actors change their minds through reasoned debate", why:"That is Risse’s logic of arguing."},
     {t:"Actors always follow the most powerful state", why:"That is not a logic of action in March and Olsen’s sense."}
   ]},
   {id:"e4u2-q22", lesson:"e4u2-l3", level:2, q:"Finnemore and Sikkink suggested that a norm’s tipping point rarely comes before roughly what share of states has adopted it?", options:[
     {t:"About one third", ok:true, why:"Correct. They drew this from earlier empirical studies of norm adoption."},
     {t:"Nearly all states", why:"By then the cascade would be over; the tipping point comes much earlier."},
     {t:"One or two states", why:"Early adopters are norm leaders; the tipping point needs a critical mass."},
     {t:"Exactly half", why:"They did not set the threshold at half."}
   ]},
   {id:"e4u2-q23", lesson:"e4u2-l3", level:3, q:"Fatima’s environmental group is ignored by its own government. It joins international NGOs, which persuade other governments and a UN body to raise the issue. Months later, her government responds. Which pattern is this?", options:[
     {t:"The boomerang pattern", ok:true, why:"Correct. Blocked at home, activists route pressure through foreign allies (Keck and Sikkink, 1998)."},
     {t:"Norm localisation", why:"Localisation is reshaping an outside norm to fit local beliefs."},
     {t:"Offshore balancing", why:"That is a great-power military strategy."},
     {t:"Desecuritisation", why:"Nothing here moves an issue out of emergency politics."}
   ]},
   {id:"e4u2-q24", lesson:"e4u2-l3", level:2, q:"Acharya (2004) showed that in the 1990s ASEAN members reshaped the idea of “common security” into the looser “cooperative security” of the ASEAN Regional Forum. What is this an example of?", options:[
     {t:"Norm localisation", ok:true, why:"Correct. Local actors adapted an outside norm to fit their own beliefs and practices."},
     {t:"A norm cascade driven by Western pressure", why:"Acharya’s point was that local agency, not outside pressure, shaped the result."},
     {t:"Securitisation", why:"Securitisation concerns framing threats as existential."},
     {t:"Buck-passing", why:"Buck-passing is a realist idea about balancing."}
   ]},
   {id:"e4u2-q25", lesson:"e4u2-l3", level:2, q:"Which critique of securitisation theory did Lene Hansen (2000) make?", options:[
     {t:"A speech-centred model silences people who cannot speak publicly about their insecurity", ok:true, why:"Correct. She called this “security as silence”: some insecurity, often gendered, cannot be voiced, or grows worse if it is."},
     {t:"Security can never be studied through language", why:"Hansen herself developed discourse methods for security studies."},
     {t:"Only military threats count as security", why:"She did not argue this; the Copenhagen School itself has five sectors."},
     {t:"Securitisation only happens in authoritarian states", why:"That is not her argument."}
   ]},
   {id:"e4u2-q26", lesson:"e4u2-l3", level:3, q:"A government argues that humanitarian intervention must never override sovereignty, because states disagree about values and intervention can mask self-interest. Which English School position is this?", options:[
     {t:"Pluralism", ok:true, why:"Correct. Pluralists defend coexistence among states with different values."},
     {t:"Solidarism", why:"Solidarists argue shared values can justify action to protect people."},
     {t:"Offensive realism", why:"That is a realist theory, not an English School position."},
     {t:"World-systems theory", why:"That is a Marxist approach to the world economy."}
   ]},
   {id:"e4u2-q27", lesson:"e4u2-l3", level:2, q:"In Buzan’s English School terms, what is the difference between primary and secondary institutions?", options:[
     {t:"Primary institutions are deep evolved practices such as sovereignty and diplomacy; secondary ones are organisations such as the UN", ok:true, why:"Correct. Secondary institutions rest on primary ones."},
     {t:"Primary institutions are older organisations; secondary ones are newer", why:"The distinction is between kinds of institution, not their age."},
     {t:"Primary institutions belong to great powers; secondary to small states", why:"The distinction has nothing to do with the size of states."},
     {t:"There is no difference; the terms are synonyms", why:"Buzan drew the distinction deliberately."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e4u2-q28", lesson:"e4u2-l4", level:2, q:"Kenji’s research asks: “How can the regional trade body settle disputes more quickly?” In Cox’s terms, what kind of question is this?", options:[
     {t:"A problem-solving question: it takes the institution as given and asks how to make it work better", ok:true, why:"Correct. Cox did not dismiss such work; he said it should be aware of its assumptions."},
     {t:"A critical question about whose interests built the order", why:"A critical question would ask how the trade body’s rules arose and whom they serve."},
     {t:"A post-structuralist question about discourse", why:"Nothing here concerns how language constructs identities."},
     {t:"A normative question about justice", why:"It asks about efficiency, not what is just."}
   ]},
   {id:"e4u2-q29", lesson:"e4u2-l4", level:1, q:"In Cox’s framework (1981), which three kinds of force interact?", options:[
     {t:"Ideas, material capabilities and institutions", ok:true, why:"Correct. They interact in social forces, forms of state and world orders."},
     {t:"Land, labour and capital", why:"These are classical economic factors, not Cox’s three forces."},
     {t:"Individuals, states and the system", why:"These are the levels of analysis, not Cox’s forces."},
     {t:"Military, economic and opinion power", why:"Those are Carr’s three kinds of power."}
   ]},
   {id:"e4u2-q30", lesson:"e4u2-l4", level:1, q:"What did Justin Rosenberg’s *The Empire of Civil Society* (1994) argue about realism?", options:[
     {t:"It mistakes features of capitalist modernity, such as the separation of politics from economics, for timeless laws", ok:true, why:"Correct. Rosenberg offered a historical materialist critique of realism."},
     {t:"It is the only scientific theory of IR", why:"Rosenberg was a critic of realism, not its defender."},
     {t:"It should focus more on human nature", why:"His critique pointed to social structure and history, not human nature."},
     {t:"It explains the democratic peace", why:"That is not his argument."}
   ]},
   {id:"e4u2-q31", lesson:"e4u2-l4", level:3, q:"A scholar studies how women working near foreign military bases were affected by agreements between two allied governments, and how those agreements depended on their work. Which tradition and work does this most resemble?", options:[
     {t:"Feminist IR, as in Katharine Moon’s *Sex Among Allies* (1997)", ok:true, why:"Correct. Moon linked intimate lives and alliance politics in US–South Korean relations."},
     {t:"Offensive realism, as in Mearsheimer (2001)", why:"Mearsheimer’s theory does not study individuals’ lives near bases."},
     {t:"Regime theory, as in Krasner (1983)", why:"Regime theory studies rules in issue areas, not gendered lives."},
     {t:"Moral realism, as in Yan Xuetong (2019)", why:"Yan’s theory concerns great-power leadership."}
   ]},
   {id:"e4u2-q32", lesson:"e4u2-l4", level:2, q:"What did Robert Vitalis argue in *White World Order, Black Power Politics* (2015)?", options:[
     {t:"Early US IR was openly concerned with “race development”, and the critiques of Black scholars at Howard University were later forgotten", ok:true, why:"Correct. He traced *Foreign Affairs* back to the *Journal of Race Development*."},
     {t:"Race has never mattered in world politics", why:"His book argues the opposite."},
     {t:"IR began only after 1945", why:"Vitalis studied the field’s earlier history."},
     {t:"Realism began at Howard University", why:"That is not his claim; the Howard scholars were critics of the field’s racial assumptions."}
   ]},
   {id:"e4u2-q33", lesson:"e4u2-l4", level:2, q:"Which best describes Vivek Chibber’s *Postcolonial Theory and the Specter of Capital* (2013)?", options:[
     {t:"A Marxist critique arguing that postcolonial theory overstates cultural difference and neglects capitalism", ok:true, why:"Correct. It shows that critical approaches argue with each other."},
     {t:"A defence of postcolonial theory against Marxists", why:"Chibber wrote from a Marxist position against postcolonial theory."},
     {t:"A realist account of decolonisation", why:"Chibber is not a realist."},
     {t:"A study of the democratic peace", why:"The book is about social theory and capitalism."}
   ]},
   {id:"e4u2-q34", lesson:"e4u2-l4", level:3, q:"Sione, writing on a low-lying Pacific atoll state, asks whether sovereign states can protect people from harms they did not cause and that cross every border. Which approach is he drawing on most directly?", options:[
     {t:"Green theory, for example Eckersley’s argument for a green state practising ecological democracy", ok:true, why:"Correct. Green theory puts ecological limits and justice at the centre."},
     {t:"Offensive realism", why:"Offensive realism focuses on great-power competition, not ecological justice."},
     {t:"Hegemonic stability theory", why:"That concerns stabilising the world economy."},
     {t:"Balance of threat", why:"That concerns alliance choices."}
   ]},
   {id:"e4u2-q35", lesson:"e4u2-l4", level:2, q:"Which claim fits R. B. J. Walker’s *Inside/Outside* (1993)?", options:[
     {t:"The line between order inside states and anarchy outside is a political construction, not a natural fact", ok:true, why:"Correct. Walker is a key post-structuralist thinker in IR."},
     {t:"Anarchy outside states is a timeless fact of nature", why:"Walker challenged exactly this assumption."},
     {t:"States should merge into a world government at once", why:"Walker’s book is a critique of how IR thinks, not a blueprint."},
     {t:"Domestic politics never affects foreign policy", why:"That is not his argument."}
   ]},
   {id:"e4u2-q36", lesson:"e4u2-l4", level:1, q:"Which idea is associated with W. E. B. Du Bois’s writing on world politics?", options:[
     {t:"The colour line: racial hierarchy structured world politics, and European rivalry over Africa lay behind the First World War", ok:true, why:"Correct. See *The Souls of Black Folk* (1903) and “The African Roots of War” (1915)."},
     {t:"The stopping power of water", why:"That is Mearsheimer’s idea."},
     {t:"The harmony of interests", why:"Carr criticised that idea; it is not Du Bois’s."},
     {t:"Cultures of anarchy", why:"That is Wendt’s idea."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e4u2-q37", lesson:"e4u2-l5", level:1, q:"Where did Acharya and Buzan’s 2007 question “Why is there no non-Western international relations theory?” appear?", options:[
     {t:"In a special issue of *International Relations of the Asia-Pacific*", ok:true, why:"Correct. The issue included essays on China, India, Japan and Southeast Asia."},
     {t:"In Waltz’s *Theory of International Politics*", why:"Waltz’s book was published in 1979 and did not ask this question."},
     {t:"In the UN Charter", why:"The Charter is a treaty, not a scholarly article."},
     {t:"In Bull’s *The Anarchical Society*", why:"Bull’s book (1977) came decades earlier."}
   ]},
   {id:"e4u2-q38", lesson:"e4u2-l5", level:2, q:"Which was **not** among Acharya and Buzan’s reasons for Western dominance of IR theory?", options:[
     {t:"Non-Western societies have no ideas about international order", ok:true, why:"Correct. They rejected this; their point was that such ideas were overlooked or under-resourced."},
     {t:"A first-mover advantage for Western scholarship", why:"They gave this as one of the reasons."},
     {t:"Gramscian hegemony: Western theory accepted as simply “theory”", why:"They gave this as one of the reasons."},
     {t:"Scarce resources and few publishing outlets in many countries", why:"They listed these among the barriers."}
   ]},
   {id:"e4u2-q39", lesson:"e4u2-l5", level:2, q:"Which is the strongest version of William Callahan’s critique of tianxia theory (2008)?", options:[
     {t:"Its inclusive, harmonious language can make a hierarchical order centred on one power sound benign", ok:true, why:"Correct. His title asked whether tianxia is post-hegemonic or a new hegemony."},
     {t:"It was invented in the 21st century and has no historical roots", why:"The concept is ancient; Callahan’s point concerns its modern use."},
     {t:"It is identical to liberal institutionalism", why:"Callahan did not make that comparison."},
     {t:"It ignores the idea of a whole-world order", why:"A whole-world order is exactly what tianxia proposes."}
   ]},
   {id:"e4u2-q40", lesson:"e4u2-l5", level:1, q:"Which scholar is associated with a relational theory of world politics built on the idea that actors are always actors-in-relations?", options:[
     {t:"Qin Yaqing", ok:true, why:"Correct. *A Relational Theory of World Politics* (2018)."},
     {t:"Yan Xuetong", why:"Yan is associated with moral realism."},
     {t:"Zhao Tingyang", why:"Zhao is associated with tianxia."},
     {t:"David Kang", why:"Kang is known for work on historical East Asian hierarchy."}
   ]},
   {id:"e4u2-q41", lesson:"e4u2-l5", level:3, q:"Ana argues that a postcolonial state’s main security problem is armed groups and weak institutions at home, not rival great powers, so mainstream realism misreads it. Whose argument is she closest to?", options:[
     {t:"Mohammed Ayoob’s subaltern realism", ok:true, why:"Correct. Ayoob (2002) put state-building at home at the centre."},
     {t:"Mearsheimer’s offensive realism", why:"Offensive realism focuses on great powers."},
     {t:"Keohane’s institutionalism", why:"Institutionalism is about cooperation through institutions."},
     {t:"Campbell’s *Writing Security*", why:"Campbell studied US identity and discourse."}
   ]},
   {id:"e4u2-q42", lesson:"e4u2-l5", level:3, q:"Analysing the 1997–98 Asian financial crisis, Dmitri says: “The IMF’s conditions reflected the interests of Wall Street and the US Treasury, which pushed open capital markets.” Which reading is this?", options:[
     {t:"A critical, political-economy reading like Wade and Veneroso’s “Wall Street–Treasury–IMF complex”", ok:true, why:"Correct. It asks whose economic interests the rules served."},
     {t:"A constructivist reading about regional identity", why:"Dmitri’s point is about economic interests, not identity."},
     {t:"An English School reading about diplomacy", why:"Nothing here is about the shared institutions of a society of states."},
     {t:"A democratic peace reading", why:"The democratic peace concerns war between democracies."}
   ]},
   {id:"e4u2-q43", lesson:"e4u2-l5", level:2, q:"What do Jones and Smith (2007) argue about ASEAN?", options:[
     {t:"It produces process rather than progress: many meetings, limited results and overstated unity", ok:true, why:"Correct. Their article challenged constructivist accounts of an ASEAN security community."},
     {t:"It has become a supranational union like the EU", why:"Neither they nor most scholars describe ASEAN this way."},
     {t:"It proves the democratic peace", why:"ASEAN includes many non-democracies; this is not their argument."},
     {t:"It was founded to balance Japan", why:"That is not their argument."}
   ]},
   {id:"e4u2-q44", lesson:"e4u2-l5", level:2, q:"In a thesis, what does it mean to operationalise a concept such as “regional identity”?", options:[
     {t:"To turn it into something observable, such as how joint statements describe members over time", ok:true, why:"Correct. Indicators let evidence speak to the concept."},
     {t:"To decide in advance that the theory is correct", why:"That would defeat the purpose of testing it."},
     {t:"To define it with a dictionary quotation only", why:"A dictionary definition does not say how you will observe the concept."},
     {t:"To leave it undefined so that readers can interpret it freely", why:"Undefined concepts make a framework impossible to check."}
   ]},
   {id:"e4u2-q45", lesson:"e4u2-l5", level:3, q:"Oluwaseun’s thesis has a strong theory chapter on constructivism, but the case chapters never mention its concepts, and the conclusion does not return to theory. What is the main problem?", options:[
     {t:"Theory as decoration: the framework is not used to guide what is observed or to interpret the findings", ok:true, why:"Correct. A framework should shape the evidence chapters and be revisited in the conclusion."},
     {t:"Constructivism cannot be used in a thesis", why:"It is widely used; the problem is how it is used here."},
     {t:"The thesis should have used every theory at once", why:"More theories would not fix the problem of not using the chosen one."},
     {t:"A conclusion should never mention theory", why:"The opposite: a good conclusion says what the case shows about theory."}
   ]}
  ]
});
