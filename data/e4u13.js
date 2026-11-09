/* International Studies · Unit 13 · Global governance beyond the state */
ICA.addUnit({
  id:"e4u13", track:"e4", n:13, title:"Global governance beyond the state", icon:"🌐",
  blurb:"Who governs problems that no state can handle alone, and by what authority? The concept of global governance and its critics, private authority and transnational networks, clubs such as the G7, G20 and BRICS, global health after COVID-19 and the Pandemic Agreement, the governance of the internet, AI and cyberspace, and the debate on the future of multilateralism, ending with how to build a seminar argument about it.",
  goals:[
    "Define global governance precisely, explain where the idea came from, and weigh Weiss’s and other critiques",
    "Analyse private authority and transnational networks (government networks, epistemic communities, private standards) and ask who holds them to account",
    "Compare clubs and minilateral groupings (G7, G20, BRICS, the Quad) and set out their strengths and critiques neutrally",
    "Explain how global health is governed, what COVAX showed, what the 2024 IHR amendments changed, and where the Pandemic Agreement stands as of November 2026",
    "Map the governance of the internet, cyberspace and AI, and describe the multistakeholder and sovereignty models and the main national approaches without taking sides",
    "Describe the debate on the future of multilateralism and reform proposals such as the Pact for the Future, and build a balanced seminar argument with evidence and counter-arguments"
  ],
  read:[
    {book:"ospol", where:"Chapter 15 “International Law and International Organizations”, sections 15.1 “The Problem of Global Governance”, 15.5 “Non-state Actors: Nongovernmental Organizations (NGOs)” and 15.6 “Non-state Actors beyond NGOs”", note:"A gentle textbook overview to read before Lesson 1."},
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard) and Chapter 7 “Global Civil Society”", note:"Short background chapters on the many actors beyond the state."},
    {book:"govai", where:"Executive summary and the seven recommendations", note:"An official UN proposal for governing AI, for Lesson 4. Read it as one actor’s view."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u13-l1", title:"What “global governance” means", minutes:60,
   hook:{q:"Shipping containers, the numbers on bank cards and the three-letter codes for currencies (JPY, BRL, KES) all follow common global rules. Who wrote them?", options:["The UN General Assembly","The World Trade Organization","ISO, a non-governmental network of national standards bodies","The G20"], answer:2, reveal:"**ISO, the International Organization for Standardization.** Founded in 1947 and based in Geneva, ISO is not an intergovernmental organisation: its members are national standards bodies, some public and some private. Its standards (for example ISO 668 for freight containers and ISO 4217 for currency codes) are voluntary, yet much of the world economy runs on them. Rules without a government behind them are exactly what the idea of global governance tries to capture. This lesson asks what the term means, who exercises such authority, and why critics are wary of the word."},
   goals:[
     "Explain the difference between government and governance, and why the idea arose in the 1990s",
     "Compare three definitions of global governance and the descriptive, analytical and normative uses of the term",
     "Summarise Weiss’s critique and other critiques from realist and critical scholars",
     "Classify private authority as market, moral or illicit (Hall and Biersteker)",
     "Explain government networks (Slaughter) and epistemic communities (Haas), and ask who holds them accountable"
   ],
   learn:[
    {h:"From government to governance", body:[
      {lead:"Who makes the rules for a world with no world government?"},
      "A one-line reminder from the IR primer: the international system is in [[anarchy]], meaning there is no authority above states (see {{anarchy-ir}}), and many non-state actors act in it (see {{non-state-actors}}). Yet the world is full of rules that most actors follow most of the time. The concept of [[global-governance|global governance]] was built to describe that puzzle (see {{global-governance-concept}}).",
      "The key early book was *Governance without Government: Order and Change in World Politics* (1992), edited by James Rosenau and Ernst-Otto Czempiel (see {{james-rosenau}}). Rosenau drew a line between two ideas:",
      {list:[
        "**Government**: activities backed by formal authority and, in the end, by police powers that can force compliance.",
        "**Governance**: activities backed by shared goals, which may or may not rest on legal duties and do not need force to work."
      ]},
      "On this view, [[governance-without-government|governance without government]] is possible: rules can be made and kept by states, international organisations, firms, experts and citizens’ groups acting together, without anyone at the top.",
      "The timing mattered. The Cold War had just ended, trade and finance were globalising fast, and problems such as ozone depletion, financial contagion and HIV/AIDS crossed every border. In 1995 a new journal, *Global Governance*, appeared, and the label spread quickly through universities and the UN."
    ]},
    {h:"Three definitions, three uses", body:[
      "Seminar readings define the term in different ways. Three classic definitions:",
      {table:[
        ["Source","Definition, in brief"],
        ["Rosenau (1995, in the first issue of *Global Governance*)","Systems of rule at all levels of human activity, from families to IOs, in which control has effects across borders"],
        ["Commission on Global Governance, *Our Global Neighbourhood* (1995)","“The sum of the many ways individuals and institutions, public and private, manage their common affairs”"],
        ["Weiss and Thakur (2010)","The formal and informal values, norms, procedures and institutions that help all actors identify, understand and address cross-border problems"]
      ]},
      "The Commission was an independent group of public figures co-chaired by Ingvar Carlsson, a former prime minister of Sweden, and Shridath Ramphal of Guyana, a former Commonwealth Secretary-General. Its report called for a stronger UN, a role for civil society and a shared “global civic ethic”.",
      "Rosenau also gave the field two useful words. A [[sphere-of-authority|sphere of authority]] is any actor or arrangement whose rules people accept in an area, whether a ministry, a rating agency or a religious body. [[fragmegration|Fragmegration]], from his later books (for example *Distant Proximities*, 2003), names the way globalisation integrates and fragments the world at the same time.",
      "Klaus Dingwerth and Philipp Pattberg (2006) warned that writers often mix up two broad uses: global governance as a set of **observable phenomena**, studied from a perspective that looks at all actors, and global governance as a **political programme**, either a normative vision of what should be done or, for critical scholars, a discourse that serves the powerful. Building on their distinction, it helps to separate three uses:",
      {table:[
        ["Use","Question it answers","Example sentence"],
        ["Descriptive","What is happening?","“Rules on tuna fishing now come from many sources.”"],
        ["Analytical","How should we study it?","“Look at all the actors, not just states.”"],
        ["Normative or political","What should be done?","“We need better global governance of pandemics.”"]
      ]},
      {tip:"In your own writing, say which use you mean. A paper that describes governance in one paragraph and calls for more of it in the next has quietly changed its question."}
    ]},
    {h:"One issue, many governors", body:[
      "A concrete case shows how many actors can share one problem. Tuna fishing in the Western and Central Pacific produces a large share of the world’s tuna catch, and many Pacific Island economies depend on licence fees from foreign fleets.",
      {fig:'<svg viewBox="0 0 340 400"><rect class="d-gold" x="40" y="12" width="260" height="54" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">Issue: tuna fishing in the</text><text x="170" y="53" text-anchor="middle">Western and Central Pacific</text><path class="d-ink" d="M170 66 V84 M88 84 H252 M88 84 V96 M252 84 V96" stroke-width="2" fill="none"/><rect class="d-lup" x="10" y="96" width="156" height="78" rx="8" stroke-width="2"/><text x="88" y="120" text-anchor="middle">States</text><text class="s" x="88" y="140" text-anchor="middle">coastal and fishing</text><text class="s" x="88" y="156" text-anchor="middle">states set licences</text><rect class="d-lup" x="174" y="96" width="156" height="78" rx="8" stroke-width="2"/><text x="252" y="120" text-anchor="middle">Intergovernmental</text><text class="s" x="252" y="140" text-anchor="middle">a regional fisheries</text><text class="s" x="252" y="156" text-anchor="middle">commission (2004)</text><rect class="d-sage" x="10" y="186" width="156" height="78" rx="8" stroke-width="2"/><text x="88" y="210" text-anchor="middle">Small club</text><text class="s" x="88" y="230" text-anchor="middle">eight island states</text><text class="s" x="88" y="246" text-anchor="middle">sell fishing days</text><rect class="d-sage" x="174" y="186" width="156" height="78" rx="8" stroke-width="2"/><text x="252" y="210" text-anchor="middle">Private standard</text><text class="s" x="252" y="230" text-anchor="middle">an eco-label that</text><text class="s" x="252" y="246" text-anchor="middle">certifies fisheries</text><rect class="d-rose" x="10" y="276" width="156" height="78" rx="8" stroke-width="2"/><text x="88" y="300" text-anchor="middle">NGOs and experts</text><text class="s" x="88" y="320" text-anchor="middle">stock science,</text><text class="s" x="88" y="336" text-anchor="middle">campaigns</text><rect class="d-rose" x="174" y="276" width="156" height="78" rx="8" stroke-width="2"/><text x="252" y="300" text-anchor="middle">Firms</text><text class="s" x="252" y="320" text-anchor="middle">retailers’ sourcing</text><text class="s" x="252" y="336" text-anchor="middle">rules</text><text class="s" x="170" y="384" text-anchor="middle">No single actor governs; their rules overlap</text></svg>', alt:"A box at the top reads ‘Issue: tuna fishing in the Western and Central Pacific’. Below it, six boxes in three rows: states (coastal and fishing states set licences); intergovernmental (a regional fisheries commission, 2004); small club (eight island states sell fishing days); private standard (an eco-label that certifies fisheries); NGOs and experts (stock science, campaigns); firms (retailers’ sourcing rules).", cap:"Governance of one issue: public, private and mixed rules overlap."},
      "The Western and Central Pacific Fisheries Commission, created by a convention in force since 2004, sets catch and effort limits. Eight island states that are Parties to the Nauru Agreement (1982) run a Vessel Day Scheme that sells fishing days to foreign fleets, which raised their revenues sharply. The Marine Stewardship Council (1997), a private body, certifies fisheries that meet its standard, and retailers in Japan, Europe and North America use such labels in their sourcing rules. Scientists, NGOs and fishing companies all take part.",
      "Asking “who governs?” here produces a map, not a single answer. That map is what scholars mean by governance."
    ]},
    {h:"Private authority", body:[
      "Some of the actors on such maps are private but still make rules others follow. Rodney Bruce Hall and Thomas Biersteker’s edited volume *The Emergence of Private Authority in Global Governance* (2002) called this [[private-authority|private authority]] and divided it into three kinds (see {{private-authority}}):",
      {table:[
        ["Kind","Source of authority","Examples"],
        ["[[market-authority|Market authority]]","Expertise and market position","Credit rating agencies; ISO standards; business codes"],
        ["Moral authority","Principles and reputation","Human rights NGOs; religious bodies; certification schemes"],
        ["[[illicit-authority|Illicit authority]]","Coercion outside the law","Organised crime groups; mercenaries"]
      ]},
      "Earlier, Susan Strange’s *The Retreat of the State* (1996) had argued that markets and firms were taking over functions once performed by states, and Claire Cutler, Virginia Haufler and Tony Porter’s *Private Authority and International Affairs* (1999) traced business rule-making. Timothy Sinclair’s *The New Masters of Capital* (2005) showed how a few credit rating agencies shape what governments can borrow. Tim Büthe and Walter Mattli’s *The New Global Rulers* (2011) studied private standard-setting bodies.",
      "Much of this is [[transnational-private-regulation|transnational private regulation]]: rules written and enforced by non-state bodies across borders, such as the Forest Stewardship Council (1993) for timber.",
      "Two cautions. First, private authority often exists because states allow or require it: regulators may write a rating or a standard into law. Second, it raises hard questions of [[accountability-ir|accountability]] and voice: who chose these rule-makers, and can the people affected, often in the Global South, change the rules?"
    ]},
    {h:"Networks of officials and experts", body:[
      "Anne-Marie Slaughter’s *A New World Order* (2004) argued that the most important actors are often not states as single units but parts of them (see {{anne-marie-slaughter}}). In a [[disaggregated-state|disaggregated state]], regulators, judges and legislators deal directly with their counterparts abroad, forming [[government-network|government networks]] (see {{transnational-networks-governance}}).",
      "Examples include the Basel Committee on Banking Supervision (1974), whose banking standards are applied far beyond its members, the International Organization of Securities Commissions, and EMEAP, a forum of central banks in East Asia and the Pacific founded in 1991. Judges cite each other’s decisions across borders; competition and data protection authorities share methods.",
      "Slaughter saw such networks as fast, flexible and expert. Critics answered that they are hard to see and harder to hold to account. The legal scholar Philip Alston (1997) warned that networks of officials could escape democratic control, and others note that regulators from small or poor countries often join only after the rules are written.",
      "Expertise also forms networks outside government. Peter Haas (1992) defined an [[epistemic-community|epistemic community]] as a network of professionals with recognised expertise and an authoritative claim to policy-relevant knowledge. Scientists shaped the ozone treaties and the work of the Intergovernmental Panel on Climate Change (1988). Activist networks matter too: the [[boomerang-pattern|boomerang pattern]] from Unit 2 is one way they work. Cities have their own networks, such as ICLEI (1990) and C40 (2005)."
    ]},
    {h:"Weiss’s critique and other doubts", body:[
      "Thomas G. Weiss, a leading scholar of the UN, has been the concept’s sharpest friendly critic. In “Governance, Good Governance and Global Governance” (*Third World Quarterly*, 2000) he argued that the term had become so elastic that it described almost everything and explained little. He also noted its awkward twin, [[good-governance|good governance]], which donors used in the 1990s to set conditions on aid, so that “governance” sounded neutral while carrying a political programme.",
      "With Ramesh Thakur, in *Global Governance and the UN* (2010), Weiss described five [[governance-gaps|governance gaps]]: in **knowledge**, **norms**, **policy**, **institutions** and **compliance**. In his 2009 presidential address to the International Studies Association he asked why scholars had stopped discussing world government, suggesting that “governance” had become a comforting word for a world short of real authority. With Rorden Wilkinson (2014) he urged the field to study complexity, authority, power and change rather than simply list actors.",
      "Others push from different sides:",
      {list:[
        "**Realists** such as Daniel Drezner, in *All Politics Is Global* (2007), argue that great powers still decide the important rules; private actors and networks matter mostly when strong states agree or don’t care.",
        "**Critical scholars** such as Craig Murphy (2000) see global governance as poorly done and as serving the powerful, and ask whose interests the rules protect (compare {{robert-cox}}’s “theory is always for someone”).",
        "**Global South scholars** point out that “global” rules are often written in a few capitals and boardrooms."
      ]},
      {key:"Global governance is a useful map of who makes rules across borders, but always ask: by what authority, for whom, and with what effect?"}
    ]},
    {h:"Common misconceptions", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["Global governance means world government.","It means rule-making without a world government, by many actors."],
        ["Non-state actors have replaced states.","States remain central; they often delegate to, permit or work through others."],
        ["More governance is always better.","Whether rules help depends on who makes them and whom they serve."],
        ["Private rules are not real rules.","Many private standards are followed worldwide and written into law."]
      ]},
      {terms:["global-governance","governance-without-government","sphere-of-authority","fragmegration","good-governance","governance-gaps","private-authority","market-authority","illicit-authority","transnational-private-regulation","accountability-ir","government-network","disaggregated-state","epistemic-community"]}
    ]}
   ],
   try:[
    {id:"e4u13-l1-x1", type:"mcq", q:"A group of banks and insurers agrees on climate-risk reporting rules, and most large firms start following them, though no law requires it. In Rosenau’s terms, what is this?", options:[
      {t:"Governance without government: rules backed by shared goals rather than by police powers", ok:true, why:"Right. Rosenau’s distinction turns on what backs the rules: shared goals and acceptance, not formal authority and enforcement."},
      {t:"Government, because the rules are widely followed", why:"Being followed is not enough. Government in Rosenau’s sense rests on formal authority and the ability to force compliance."},
      {t:"Not governance at all, because only states can govern", why:"That is the view the concept was built to challenge: non-state actors can make rules others accept."},
      {t:"World government, because the rules apply globally", why:"World government would need a central authority above states. Here there is none."}
    ]},
    {id:"e4u13-l1-x2", type:"sort", q:"Which use of “global governance” does each sentence make (descriptive, analytical or normative, as in the lesson’s table)?", buckets:["Descriptive","Analytical","Normative"], items:[
      {t:"Rules on internet domain names come from a non-profit, governments and firms together.", b:0, why:"It reports what is happening: a description of who makes the rules."},
      {t:"To explain fisheries rules, study private labels as well as treaties.", b:1, why:"It recommends how to study the topic: an analytical perspective."},
      {t:"The world needs stronger governance of pandemics.", b:2, why:"It says what ought to be done: a normative or political programme."},
      {t:"Credit rating agencies influence what governments pay to borrow.", b:0, why:"A claim about how things are, which evidence can test."},
      {t:"Global governance should give poorer countries more voice.", b:2, why:"A claim about what should be: normative."},
      {t:"Treat authority as something many actors can hold, not only states.", b:1, why:"A rule for analysis: it tells the researcher where to look."}
    ]},
    {id:"e4u13-l1-x3", type:"sort", q:"Hall and Biersteker divide private authority into three kinds. Sort each example.", buckets:["Market authority","Moral authority","Illicit authority"], items:[
      {t:"A credit rating agency downgrades a country’s bonds.", b:0, why:"Its authority comes from claimed expertise and its place in financial markets."},
      {t:"A forest certification body sets rules for sustainable timber.", b:1, why:"Its authority rests on principles and reputation, though it also works through markets; scholars often place certification schemes here."},
      {t:"A smuggling network enforces its own rules along a border.", b:2, why:"Authority backed by coercion outside the law is illicit."},
      {t:"An international standards body sets a format for bank card numbers.", b:0, why:"Technical expertise and market adoption: market authority."},
      {t:"A human rights NGO’s report leads companies to drop a supplier.", b:1, why:"The NGO’s influence rests on moral claims and credibility."},
      {t:"A private militia taxes traders in an area the state does not control.", b:2, why:"Coercive rule outside the law: illicit authority."}
    ]},
    {id:"e4u13-l1-x4", type:"match", q:"Match each work to its main argument.", pairs:[
      ["Rosenau & Czempiel, *Governance without Government* (1992)","Rules can be made and kept without a central authority","The volume that launched the concept."],
      ["Commission on Global Governance, *Our Global Neighbourhood* (1995)","Governance is the sum of the ways public and private actors manage common affairs","Its definition is still widely quoted."],
      ["Hall & Biersteker (eds., 2002)","Private actors can hold market, moral or illicit authority","*The Emergence of Private Authority in Global Governance*."],
      ["Slaughter, *A New World Order* (2004)","Networks of regulators, judges and legislators govern across borders","The disaggregated state."],
      ["Weiss (2000)","The term is so broad it risks explaining little and hiding power","His *Third World Quarterly* article."]
    ]},
    {id:"e4u13-l1-x5", type:"mcq", q:"Banking supervisors from about 30 jurisdictions agree on capital standards, which more than 100 countries then apply. A critic calls this a democratic problem. What is the best version of the critic’s argument?", options:[
      {t:"The rules are made by officials whom the affected publics cannot easily see or hold to account, and many countries that apply them had no seat when they were written", ok:true, why:"Right. This is the accountability critique of government networks, made by Alston and others."},
      {t:"Banking supervisors are not real government officials", why:"They are officials; the problem is that their network sits outside normal democratic oversight."},
      {t:"Any international rule is illegitimate", why:"Too sweeping. The critique targets how these rules are made and who takes part, not international rules as such."},
      {t:"The standards cannot work because no court enforces them", why:"Compliance is a separate question, and in practice many countries apply the standards. The democratic critique is about voice and accountability."}
    ]},
    {id:"e4u13-l1-x6", type:"sort", q:"Which kind of transnational actor is each?", buckets:["Government network","Epistemic community","Private regulation"], items:[
      {t:"Central bank officials in East Asia and the Pacific meet regularly to share methods.", b:0, why:"Officials of states dealing directly with counterparts: a government network."},
      {t:"Atmospheric scientists tell governments that certain chemicals damage the ozone layer.", b:1, why:"Experts with an authoritative claim to policy-relevant knowledge: Haas’s epistemic community."},
      {t:"A non-profit sets a sustainability standard that seafood buyers require.", b:2, why:"Rules written and applied by a non-state body: transnational private regulation."},
      {t:"Data protection authorities from many countries coordinate investigations.", b:0, why:"Regulators acting directly together across borders."},
      {t:"Epidemiologists share models that shape WHO guidance.", b:1, why:"An expert network whose knowledge shapes policy."}
    ]},
    {id:"e4u13-l1-x7", type:"spot", q:"A student’s seminar paragraph. Tap the claims that **overreach or confuse the concept**.", ask:"overreaches", parts:[
      {t:"Rosenau and Czempiel’s 1992 volume made “governance without government” a standard phrase.", flag:false, why:"Accurate, and it attributes the idea."},
      " ",
      {t:"Since then, non-state actors have replaced states as the main rule-makers in world politics.", flag:true, why:"Overreach. Most scholars, including those who coined the term, see states as still central; the claim is that others share rule-making."},
      " ",
      {t:"Private standards such as eco-labels now shape trade in timber and seafood.", flag:false, why:"A fair descriptive claim that evidence supports."},
      " ",
      {t:"This proves that global governance is good for everyone.", flag:true, why:"A jump from description to a sweeping normative verdict. Who benefits is exactly what critics question."},
      " ",
      {t:"Weiss warns that the term can hide questions of power.", flag:false, why:"An accurate, attributed summary of a critique."}
    ]}
   ],
   apply:{
    intro:"Test the concept on everyday objects and one real issue. You need only a browser; no accounts or purchases.",
    tasks:[
     {t:"Follow a label", how:[
       "Find a product at home or in a shop with a sustainability or safety label (for example a forest, seafood, fair-trade or electrical safety mark).",
       "Look up who issues the label: a government, an intergovernmental body, a company or a non-profit? Who sits on its board?",
       "Note what gives it authority (law, expertise, reputation, market power) and who could change its rules."
     ], write:"The label… Who issues it… What gives it authority… Who can change the rules… Who is missing…"},
     {t:"Map one issue", how:[
       "Choose a cross-border issue you care about (a river, a disease, a type of online harm, a fishery, a migration route).",
       "List every kind of actor that makes or enforces rules on it, as in the tuna diagram: states, IOs, clubs, private bodies, NGOs, experts, firms.",
       "Mark which use of “global governance” your notes make: descriptive, analytical or normative."
     ], write:"Issue… Actors and their rules… Which actor seems most influential, and why… Gaps…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is “global governance” an analytical concept or a polite word for the absence of world government?",
       "2. Should private authority be held to the same standards of accountability as states?",
       "3. Do government networks make global rules more effective, less democratic, or both?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes tracing one label to its rule-maker, a map of one issue’s governors, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 15, sections 15.1 “The Problem of Global Governance” and 15.6 “Non-state Actors beyond NGOs”", note:"Read before this lesson for a gentle overview."},
    {book:"eir", where:"Chapter 7 “Global Civil Society”", note:"How NGOs and social movements take part in global governance."},
    {book:"eir", where:"Chapter 3 “One World, Many Actors” (Carmen Gebhard)", note:"Background on the range of actors in world politics."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u13-l2", title:"Clubs and minilateralism: G7, G20, BRICS and the Quad", minutes:60,
   hook:{q:"Which of these groupings has a permanent secretariat with its own international staff?", options:["The G7","The G20","BRICS","The OECD"], answer:3, reveal:"**The OECD.** The G7, the G20 and BRICS have no permanent secretariat. Each year one member holds the presidency or chair, hosts the meetings and runs the agenda with officials called sherpas, then hands over. The OECD, by contrast, is a treaty-based organisation with a large secretariat in Paris. That difference, informal club versus formal organisation, is the heart of this lesson."},
   goals:[
     "Define multilateralism and minilateralism, and place groupings on a scale from bilateral to universal",
     "Explain how the G7 and G20 work and what they have and have not achieved",
     "Describe BRICS’s origins and expansion as of November 2026, with members’ and critics’ views attributed",
     "Describe the Quad and other Asia-Pacific minilaterals neutrally",
     "Weigh the strengths and critiques of club governance"
   ],
   learn:[
    {h:"Multilateralism, and why some states prefer smaller rooms", body:[
      {lead:"Is it easier to agree with 193 countries or with seven?"},
      "Robert Keohane (1990) defined [[multilateralism]] simply as coordinating national policies in groups of three or more states. John Ruggie (1992) added a deeper meaning: cooperation based on general principles that apply to all members alike, such as the most-favoured-nation rule at the WTO. The UN, with 193 members, is the main universal forum.",
      "Universal forums are legitimate but slow, because many members can block or water down a deal. In 2009 Moisés Naím, writing in *Foreign Policy*, proposed [[minilateralism]]: bring together “the smallest possible number of countries needed to have the largest possible impact” on a problem. He called this the “magic number” (see {{clubs-and-minilateralism}}).",
      {fig:'<svg viewBox="0 0 340 330"><path class="d-ink" d="M22 40 V292" stroke-width="2" marker-end="url(#ar2)"/><defs><marker id="ar2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text class="s" x="22" y="26" text-anchor="middle">few</text><text class="s" x="22" y="314" text-anchor="middle">all</text><rect class="d-lup" x="40" y="30" width="290" height="56" rx="8" stroke-width="2"/><text x="56" y="53">Bilateral (2)</text><text class="s" x="56" y="73">a trade deal between two states</text><rect class="d-sage" x="40" y="96" width="290" height="56" rx="8" stroke-width="2"/><text x="56" y="119">Minilateral (about 3–20)</text><text class="s" x="56" y="139">the Quad, the G7, the G20, BRICS</text><rect class="d-gold" x="40" y="162" width="290" height="56" rx="8" stroke-width="2"/><text x="56" y="185">Plurilateral (a willing subset)</text><text class="s" x="56" y="205">an opt-in deal inside the WTO</text><rect class="d-rose" x="40" y="228" width="290" height="56" rx="8" stroke-width="2"/><text x="56" y="251">Universal (193)</text><text class="s" x="56" y="271">the UN General Assembly</text></svg>', alt:"An arrow runs from ‘few’ at the top to ‘all’ at the bottom beside four boxes: bilateral (2), a trade deal between two states; minilateral (about 3 to 20), the Quad, G7, G20 and BRICS; plurilateral (a willing subset), an opt-in deal inside the WTO; universal (193), the UN General Assembly.", cap:"The number of participants is a design choice with trade-offs."},
      "Terms overlap. A [[club-governance|club]] in this lesson means a small, informal grouping whose members chose each other, with no treaty and no secretariat. A plurilateral agreement is one that only willing members of a larger organisation join."
    ]},
    {h:"The G7: a club of large industrial democracies", body:[
      "The [[g7|G7]] began at Rambouillet, near Paris, in November 1975, when the leaders of France, West Germany, Italy, Japan, the United Kingdom and the United States met to discuss the oil shock and the collapse of fixed exchange rates. Canada joined in 1976, and the European Community took part from 1977. Russia joined to make the G8 in the late 1990s and was suspended in 2014 after its annexation of Crimea.",
      "Japan is the only Asian member. At the Hiroshima summit of 2023 it launched the Hiroshima AI Process, which you will meet in Lesson 4. The presidency rotates; France held it in 2026, with a summit at Évian-les-Bains in June.",
      "Supporters say the G7 lets like-minded democracies coordinate quickly on sanctions, aid and technology. Critics note that its members’ share of the world economy has shrunk as China, India and others grew, and that a club of mostly Western states cannot speak for the world. Leaders now often invite guests from Africa, Asia and Latin America."
    ]},
    {h:"The G20: from crisis committee to “premier forum”", body:[
      "The [[g20|G20]] began in 1999 as a meeting of finance ministers and central bank governors after the Asian financial crisis. Leaders first met in Washington in November 2008, as the global financial crisis spread (see {{post-cold-war-order}}), and in 2009 at Pittsburgh they named it the “premier forum” for international economic cooperation.",
      "Its members are 19 countries (Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Mexico, the Republic of Korea, Russia, Saudi Arabia, South Africa, Türkiye, the United Kingdom and the United States), the European Union, and since 2023 the African Union. By its own figures the G20 accounts for about 85% of world output and about two-thirds of the world’s people.",
      "There is no secretariat. Each presidency works with the previous and next ones, the [[g20-troika|troika]], and leaders’ personal representatives, the [[sherpa|sherpas]], negotiate texts in advance (see {{g20}}).",
      "A presidency year runs like this. The host sets priorities and a calendar; ministers of finance, health, energy and other fields meet; working groups of officials draft texts; and **engagement groups** bring in business (B20), civil society (C20), think tanks (T20), youth (Y20) and others. The leaders’ summit at the end adopts a declaration that sherpas have negotiated line by line. Because the group has no staff of its own, it relies on the IMF, the World Bank, the OECD and others to prepare data and carry out decisions. Under Indonesia’s presidency in 2022, for example, the G20 helped launch a Pandemic Fund hosted by the World Bank (Lesson 3).",
      "Achievements usually cited: the London summit of April 2009 agreed a package of about 1.1 trillion US dollars for the IMF and other bodies; the Financial Stability Board was created in 2009; and in 2020 the G20 suspended some debt payments for poorer countries and set up a Common Framework for debt treatment (see [[debt-relief]]).",
      "From 2022 to 2025 four Global South members held the presidency in a row: Indonesia, India, Brazil and South Africa. Johannesburg hosted the first G20 summit in Africa in November 2025; the US government did not attend. As of November 2026 the United States holds the presidency and plans a summit in Florida in December 2026; President Trump said South Africa would not be invited, a decision South Africa and others criticised. Analysts disagree about what this means for the group."
    ]},
    {h:"BRICS: from an acronym to an expanding club", body:[
      "“BRIC” was coined in 2001 by the economist Jim O’Neill of Goldman Sachs for Brazil, Russia, India and China as fast-growing investment markets. The four governments turned the label into a grouping: foreign ministers met in 2006, and the first leaders’ summit was held in Yekaterinburg, Russia, in June 2009. South Africa joined in 2010–11, making [[brics|BRICS]] (see {{brics}}).",
      "In 2014 members signed agreements for the New Development Bank, based in Shanghai, and a Contingent Reserve Arrangement for currency emergencies. At Johannesburg in 2023 they invited six more countries. Egypt, Ethiopia, Iran and the United Arab Emirates joined from January 2024; Argentina declined; Saudi Arabia was invited and is listed by the group, though its own statements have been ambiguous. Indonesia joined in January 2025. At Kazan in 2024 members created a [[brics-partner-country|partner country]] category; as of 2026 the ten partners are Belarus, Bolivia, Cuba, Kazakhstan, Malaysia, Nigeria, Thailand, Uganda, Uzbekistan and Vietnam. India chaired BRICS in 2026 and hosted a summit in New Delhi in September.",
      "Interpretations differ, and a seminar paper should attribute them:",
      {list:[
        "**Member governments** describe BRICS as a voice for the Global South and a push to reform the IMF, World Bank and UN, not as a bloc against anyone.",
        "**Some Western officials and analysts** see it as a vehicle for China’s and Russia’s challenge to the Western-led order.",
        "**Other scholars** stress how varied the members are, including rivalry between India and China, and doubt it can act as one; India’s government, for example, has said it does not seek to replace the US dollar."
      ]}
    ]},
    {h:"The Quad and other minilaterals in Asia", body:[
      "The [[quad|Quad]] (Australia, India, Japan and the United States) grew from the four countries’ cooperation after the Indian Ocean tsunami of December 2004. A first dialogue in 2007 lapsed in 2008, was revived at officials’ level in November 2017, and leaders met for the first time in March 2021 (online) and then in person that September. Its agenda includes vaccines, maritime awareness, critical technologies and disaster relief.",
      "Positions, attributed: the four governments call it an informal partnership for a “free and open Indo-Pacific”, not an alliance. China’s government has criticised it as an exclusive grouping aimed at containing China; in 2018 its foreign minister Wang Yi predicted it would dissipate “like sea foam”. Some ASEAN governments welcome it but stress [[asean-centrality|ASEAN centrality]] (see also [[asean-way]]). Unit 12 covers its security side alongside AUKUS (see {{asia-pacific-security-architecture}}).",
      "Asia also has economic minilaterals. After the 1997–98 crisis, the ASEAN countries plus China, Japan and South Korea agreed the Chiang Mai Initiative (2000) to swap currencies in emergencies, multilateralised in 2010. When the WTO’s Appellate Body stopped working in December 2019, a group of members including China, the EU and later Japan set up an interim appeal arrangement in 2020."
    ]},
    {h:"Strengths and critiques of club governance", body:[
      {table:[
        ["Strengths claimed","Critiques"],
        ["Speed: fewer vetoes, faster deals","Exclusion: most states have no seat"],
        ["Like-mindedness makes trust easier","Accountability: no treaty, few records"],
        ["Leaders can unblock formal bodies","Fragmentation: rival clubs, overlapping rules"],
        ["Flexible agendas for new problems","Implementation still needs IOs and outsiders"]
      ]},
      "The exclusion critique has sharp examples. In 2010 Norway’s foreign minister Jonas Gahr Støre called the G20 self-appointed and “one of the greatest setbacks since World War II”. Small and medium-sized states convened by Singapore formed the Global Governance Group (3G) in 2009 to press the G20 to consult the wider UN membership.",
      "Scholars see clubs as part of a wider trend. Clubs make [[forum-shopping|forum shopping]] easier, and Unit 9 showed how rival bodies can create [[contested-multilateralism|contested multilateralism]]. Chris Brummer’s *Minilateralism* (2014) traced informal clubs and soft law in finance and trade.",
      {key:"Clubs trade legitimacy for speed. Judge them by what they deliver, and for whom."},
      {terms:["multilateralism","minilateralism","club-governance","g7","g20","g20-troika","sherpa","brics","brics-partner-country"]}
    ]}
   ],
   try:[
    {id:"e4u13-l2-x1", type:"sort", q:"Where on the scale does each arrangement fall?", buckets:["Bilateral","Minilateral club","Plurilateral","Universal"], items:[
      {t:"Japan and India sign a currency swap agreement.", b:0, why:"Two states: bilateral."},
      {t:"Four maritime democracies coordinate vaccine production.", b:1, why:"A small, self-selected group: the Quad, a minilateral club."},
      {t:"A subset of WTO members joins an opt-in agreement on e-commerce rules.", b:2, why:"Willing members of a larger organisation: plurilateral."},
      {t:"All UN members adopt a resolution in the General Assembly.", b:3, why:"Open to every member state: universal."},
      {t:"Leaders of 19 countries, the EU and the AU meet to coordinate economic policy.", b:1, why:"The G20 is large for a club but still self-selected and informal."}
    ]},
    {id:"e4u13-l2-x2", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"Leaders of six industrial democracies meet at Rambouillet", why:"November 1975: the start of the G7."},
      {t:"G20 finance ministers begin meeting after the Asian financial crisis", why:"1999."},
      {t:"G20 leaders hold their first summit, in Washington", why:"November 2008."},
      {t:"BRIC leaders hold their first summit, in Yekaterinburg", why:"June 2009."},
      {t:"The Quad is revived at officials’ level", why:"November 2017."},
      {t:"The African Union becomes a G20 member", why:"2023, at the New Delhi summit."},
      {t:"Indonesia joins BRICS", why:"January 2025."}
    ]},
    {id:"e4u13-l2-x3", type:"mcq", q:"What did Moisés Naím mean by the “magic number”?", options:[
      {t:"The smallest number of countries needed to have the largest possible impact on a problem", ok:true, why:"Right. His 2009 article argued for minilateral deals among the few states that matter most for an issue."},
      {t:"The number of votes needed to pass a UN resolution", why:"Naím was criticising slow universal negotiations, not describing UN voting rules."},
      {t:"Seven, the size of the G7", why:"The magic number varies by problem; it is not fixed at seven."},
      {t:"The number of permanent members of the Security Council", why:"That is five, and unrelated to Naím’s argument."}
    ]},
    {id:"e4u13-l2-x4", type:"number", q:"How many **sovereign states** are members of the G20 (as of 2026)?", answer:19, tol:0, unit:"states", why:"The G20 has 19 country members plus two regional organisations, the European Union and (since 2023) the African Union. Despite the name, only 19 members are states.", wrongs:[
      {v:20, tol:0, why:"That counts the EU as a state, or assumes the name gives the number. The EU is a regional organisation."},
      {v:21, tol:0, why:"That is the total number of members, including the EU and the AU, which are not sovereign states."}
    ], hint2:"The name is older than the current membership. Count the countries only."},
    {id:"e4u13-l2-x5", type:"match", q:"Match each grouping to a feature.", pairs:[
      ["G7","Began in 1975; Japan is its only Asian member","It grew out of the oil shock and currency turmoil of the 1970s."],
      ["G20","Named itself the “premier forum” for economic cooperation in 2009","The Pittsburgh summit."],
      ["BRICS","Created a partner-country category at Kazan in 2024","Ten partners as of 2026."],
      ["The Quad","Grew from cooperation after the 2004 Indian Ocean tsunami","Revived in 2017."],
      ["Chiang Mai Initiative","ASEAN plus China, Japan and South Korea pool currency support","Agreed in 2000, multilateralised in 2010."]
    ]},
    {id:"e4u13-l2-x6", type:"spot", q:"A news explainer on BRICS. Tap each statement that is **inaccurate or presents a contested view as fact**.", ask:"inaccurate or one-sided", parts:[
      {t:"BRICS began as an investment-bank acronym in 2001.", flag:false, why:"Correct: Jim O’Neill of Goldman Sachs coined BRIC."},
      " ",
      {t:"It has a permanent secretariat in Shanghai that runs the group.", flag:true, why:"Inaccurate. BRICS has no secretariat; the New Development Bank in Shanghai is a separate institution."},
      " ",
      {t:"Several countries joined from 2024, and Indonesia joined in 2025.", flag:false, why:"Correct."},
      " ",
      {t:"Members have adopted a shared currency to replace the dollar.", flag:true, why:"Inaccurate. There is no BRICS currency, and members such as India say they do not seek to replace the dollar."},
      " ",
      {t:"BRICS is clearly an anti-Western military bloc.", flag:true, why:"A contested interpretation stated as fact. Members reject it; others hold it. Attribute such views."}
    ]},
    {id:"e4u13-l2-x7", type:"mcq", q:"Ana argues that the G20 is “more legitimate than the G7 because it includes rising powers”. Which counter-argument is strongest?", options:[
      {t:"It is more representative than the G7, but still self-selected: most UN members have no seat of their own, and no treaty sets its membership", ok:true, why:"Right. This grants Ana’s point and then shows its limit, which is how a good counter-argument works."},
      {t:"The G20 has never achieved anything", why:"Too sweeping and inaccurate: the 2009 crisis package and the Financial Stability Board are often cited."},
      {t:"Rising powers do not matter in global governance", why:"An unsupported claim that ignores the reason the G20 was upgraded in 2008."},
      {t:"The G7 includes more countries than the G20", why:"Factually wrong: the G7 has seven members."}
    ]}
   ],
   apply:{
    intro:"Read what clubs actually say and do. All the documents are free on official sites.",
    tasks:[
     {t:"Read a leaders’ declaration", how:[
       "Open the most recent leaders’ declaration of the G7, G20 or BRICS on the host government’s official site.",
       "Pick five commitments and sort them: a specific action with a date, a general promise, or a statement of principle.",
       "Note which other institutions (IMF, WHO, UN…) the text asks to act. Clubs often steer others rather than act themselves."
     ], write:"Declaration and year… Five commitments sorted… Institutions asked to act…"},
     {t:"Who is in the room?", how:[
       "List the members of the G7, G20 and BRICS (and BRICS partners).",
       "Count how many come from Africa, Asia, the Pacific, Latin America, Europe, the Middle East and North America.",
       "Write two sentences on whose voice is missing from each, without judging which club is better."
     ], write:"Members by region… Who is missing… Two sentences…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Do clubs strengthen or weaken universal institutions such as the UN?",
       "2. Is BRICS better understood as a reform coalition, a counter-order or a loose forum?",
       "3. When, if ever, is it legitimate for a few states to make rules that affect all?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Five commitments from a real declaration sorted by type, a regional count of three clubs’ members, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"ospol", where:"Chapter 16 “International Political Economy”, section 16.5 “From the 1990s to the 2020s: Current Issues in IPE”", note:"Background on the economic problems the G7 and G20 manage."},
    {book:"eir", where:"Chapter 8 “Global Political Economy” (Günter Walzenbach)", note:"The wider political economy behind the clubs."},
    {book:"eir", where:"Chapter 6 “International Organisations” (Shazelina Z. Abidin)", note:"A reminder of how formal organisations differ from clubs."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u13-l3", title:"Global health governance: the WHO, partnerships and the Pandemic Agreement", minutes:65,
   hook:{q:"The World Health Assembly adopted the WHO Pandemic Agreement in May 2025. As of November 2026, how many countries had signed it?", options:["None: it is not yet open for signature","About 60, enough for it to enter into force","124, the number that voted for it in committee","All 194 WHO member states"], answer:0, reveal:"**None.** The Agreement can open for signature only after a separate annex on sharing pathogens and their benefits is adopted, and as of November 2026 governments were still negotiating that annex. Adopting a treaty text, opening it for signature, ratifying it and bringing it into force are separate steps. This lesson explains why the annex is so hard, and how global health is governed in the meantime."},
   goals:[
     "Map the main actors in global health beyond the WHO and explain why the field is called crowded",
     "Explain the WHO’s authority and limits, including its funding structure and the US withdrawal (described neutrally)",
     "Describe what the 2024 amendments to the International Health Regulations changed",
     "Evaluate COVAX: what it achieved and why critics call the COVID-19 vaccine rollout unequal",
     "Explain the Pandemic Agreement, the PABS annex and its status as of November 2026, with the main positions attributed"
   ],
   learn:[
    {h:"A crowded field", body:[
      {lead:"When a new virus appears, who is in charge?"},
      "The IR primer introduced the WHO (founded 1948), the [[international-health-regulations|International Health Regulations]] and COVID-19 (see {{global-health-governance}}). This lesson goes deeper. Scholars describe global health as one of the most crowded fields of global governance (see {{global-health-architecture}}):",
      {table:[
        ["Kind of actor","Examples"],
        ["UN and other IOs","WHO, UNICEF, the World Bank (and its Pandemic Fund, 2022)"],
        ["Public–private partnerships","[[gavi|Gavi]], the Vaccine Alliance (2000); the Global Fund (2002); CEPI (2017)"],
        ["Regional bodies","PAHO (founded 1902, older than the WHO); Africa CDC (2017)"],
        ["Private and civil society","Foundations such as the Gates Foundation; drug firms; NGOs such as Médecins Sans Frontières"]
      ]},
      "David Fidler’s *SARS, Governance and the Globalization of Disease* (2004) argued that the 2003 SARS outbreak marked a shift to “post-Westphalian” health governance, in which non-state actors and information from outside governments mattered as much as state reports. Jeremy Youde’s *Global Health Governance* (2012) is a standard introduction.",
      "Two framings compete in seminars. **Global health security** stresses stopping outbreaks before they spread, often to protect rich countries. **Global health equity** stresses fair access to care and medicines for everyone. Many disputes in this lesson are clashes between the two."
    ]},
    {h:"The WHO: authority without power?", body:[
      "The WHO has real normative authority. It sets technical guidance, names diseases, and hosts two treaties: the Framework Convention on Tobacco Control (adopted 2003, in force 2005) and the IHR. It can declare a [[pheic|public health emergency of international concern]] (PHEIC). It did so eight times between 2009 and 2024, from H1N1 influenza to two mpox emergencies.",
      "But it cannot enter a country, enforce reports or impose measures. It depends on members’ cooperation and on money they choose to give.",
      "**Funding.** Most WHO money has long come from [[voluntary-contributions|voluntary contributions]], much of it [[earmarking|earmarked]] by donors, rather than from [[assessed-contributions|assessed contributions]] (dues). In 2022 member states agreed to raise assessed contributions to half of the base budget by 2030–31, and in May 2025 they approved a further 20% rise in dues alongside a 2026–27 budget about a fifth smaller than planned.",
      "**The US withdrawal.** The United States, long the largest donor, announced its withdrawal in January 2025 and completed it in January 2026. Its government cited the WHO’s handling of COVID-19, alleged political influence by member states and unfair payments. The WHO and many governments rejected these claims and regretted the decision. Whether the WHO adapts or is weakened is debated; a paper should present both views with dates."
    ]},
    {h:"The IHR and the 2024 amendments", body:[
      "The IHR (2005), in force since 2007, require 196 States Parties to build core capacities, detect and report events that may spread abroad, and avoid unnecessary restrictions on travel and trade. COVID-19 exposed gaps: delayed reports, travel bans against WHO advice and unequal access to tools.",
      "Amendments adopted by consensus at the World Health Assembly in 2024 entered into force on 19 September 2025. They:",
      {list:[
        "add a [[pandemic-emergency|pandemic emergency]], a new alert level above a PHEIC;",
        "require National IHR Authorities to coordinate implementation in each country;",
        "commit parties to equity and solidarity in access to medical products and finance, with a Coordinating Financial Mechanism;",
        "create a States Parties Committee to promote implementation."
      ]},
      "Eleven States Parties rejected the amendments, so the earlier version still applies to them. The legal point is worth remembering: IHR amendments bind parties unless they reject them in time, which differs from a treaty that binds only those who ratify."
    ]},
    {h:"COVAX: a partnership tested", body:[
      "In April 2020 the WHO and partners launched the ACT-Accelerator to develop and share COVID-19 tests, treatments and vaccines. Its vaccine pillar, [[covax|COVAX]], was co-led by CEPI, Gavi and the WHO, with UNICEF delivering doses. It pooled purchases so that poorer countries could get vaccines at the same time as richer ones; 92 lower-income economies could receive free doses through an advance market commitment, a model Gavi had used for pneumococcal vaccines from 2009.",
      "By its close on 31 December 2023 COVAX had delivered nearly 2 billion doses to 146 economies, and a preliminary Gavi assessment, cited by the WHO, estimates it helped avert at least 2.7 million deaths in the lower-income economies it supported.",
      "Yet doses arrived late. Richer governments signed large advance contracts directly with manufacturers, some exporters restricted shipments, and supplies to COVAX fell behind. Critics call this [[vaccine-nationalism|vaccine nationalism]]. In October 2020 India and South Africa proposed waiving intellectual property rules at the WTO; a narrower decision on vaccine patents was agreed in June 2022. The Independent Panel for Pandemic Preparedness and Response, co-chaired by Helen Clark and Ellen Johnson Sirleaf, reported in May 2021 that the system had failed to prevent a pandemic.",
      "Seminar readings divide. Defenders say COVAX achieved something no state could; critics say a charity-style model cannot overcome market and political power.",
      "The debate reaches beyond COVAX. Partnerships such as Gavi and the Global Fund are **vertical**: they fund particular diseases or vaccines and can show measurable results quickly. Critics argue that this pulls money and staff away from **horizontal** investment in whole health systems, such as clinics, nurses and data, which countries need for every disease. Others ask who holds large private donors to account, since foundations sit on boards but answer to no electorate. Funding is also political: in June 2025 the US government said it would stop funding Gavi, and Gavi’s pledging summit that month raised less than its target. Supporters of the partnership model reply that it brings in money, firms and speed that intergovernmental bodies lack."
    ]},
    {h:"The Pandemic Agreement and the PABS annex", body:[
      "Negotiations for a new treaty began in 2021. The World Health Assembly adopted the [[pandemic-agreement|WHO Pandemic Agreement]] on 20 May 2025, after a committee vote of 124 in favour, none against and 11 abstentions (see {{pandemic-agreement}}). It is only the second treaty negotiated under the WHO, after the tobacco convention.",
      "It covers prevention and [[one-health|One Health]] (linking human, animal and environmental health), research, technology transfer on voluntary and mutually agreed terms, supply chains and financing. It states that the WHO cannot direct national laws or impose measures such as travel bans or vaccine mandates.",
      "Its hardest part was left for later. A [[pabs-system|Pathogen Access and Benefit-Sharing (PABS)]] system would have countries share samples and genetic data of dangerous pathogens quickly, and in return manufacturers taking part would give the WHO rapid access to 20% of their real-time production of vaccines, tests and treatments in a pandemic, part donated and the rest at affordable prices.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="ar3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-sage" x="40" y="10" width="260" height="48" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">1. Text adopted</text><text class="s" x="170" y="49" text-anchor="middle">World Health Assembly, May 2025</text><path class="d-ink" d="M170 58 V76" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-gold" x="40" y="82" width="260" height="58" rx="8" stroke-width="3"/><text x="170" y="103" text-anchor="middle">2. PABS annex negotiated</text><text class="s" x="170" y="121" text-anchor="middle">still under negotiation</text><text class="s" x="170" y="135" text-anchor="middle">as of November 2026</text><path class="d-ink" d="M170 140 V158" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-lup" x="40" y="164" width="260" height="48" rx="8" stroke-width="2"/><text x="170" y="185" text-anchor="middle">3. Annex adopted</text><text class="s" x="170" y="203" text-anchor="middle">by the Assembly</text><path class="d-ink" d="M170 212 V230" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-lup" x="40" y="236" width="260" height="48" rx="8" stroke-width="2"/><text x="170" y="257" text-anchor="middle">4. Open for signature</text><text class="s" x="170" y="275" text-anchor="middle">then national ratification</text><path class="d-ink" d="M170 284 V302" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-lup" x="40" y="308" width="260" height="48" rx="8" stroke-width="2"/><text x="170" y="329" text-anchor="middle">5. Enters into force</text><text class="s" x="170" y="347" text-anchor="middle">after 60 ratifications</text></svg>', alt:"Five boxes connected by arrows: 1, text adopted by the World Health Assembly in May 2025; 2, PABS annex negotiated, highlighted as still under negotiation as of November 2026; 3, annex adopted by the Assembly; 4, open for signature, then national ratification; 5, enters into force after 60 ratifications.", cap:"The Agreement’s path. The highlighted step is where it stood in November 2026."},
      "An Intergovernmental Working Group has negotiated the annex since July 2025. The talks missed their first target, the Assembly of May 2026, which asked for a result either at a special session in 2026 or at the Assembly of May 2027. A ninth round met on 2–13 November 2026. Positions, in brief: many African and other developing countries insist that benefits be binding and predictable; manufacturers and several high-income governments stress fast, simple access to pathogens and voluntary terms; some critics in several countries object on grounds of sovereignty, which the WHO answers by pointing to the Agreement’s sovereignty clause. Check the WHO’s pages for the latest status before you write."
    ]},
    {h:"Lenses, vocabulary and misconceptions", body:[
      "Health has been [[securitization|securitised]]: the Security Council first treated HIV/AIDS as a security issue in 2000 and called the 2014 Ebola outbreak a threat to peace and security. Securitisation can raise money and attention but can also favour borders and surveillance over health systems. Realists expect governments to put their own populations first in a crisis, as with vaccine contracts; liberals stress rules and pooled purchases; critical scholars ask why research money follows rich-country markets.",
      {table:[
        ["Misconception","Closer to the truth"],
        ["The WHO can order countries to lock down.","It advises; governments decide. The Pandemic Agreement says so explicitly."],
        ["The Pandemic Agreement is in force.","As of November 2026 it was not yet open for signature."],
        ["COVAX failed completely.","It delivered nearly 2 billion doses, but late and below its aims."],
        ["Global health is run by the WHO.","Partnerships, funds, foundations and regional bodies hold much of the money and influence."]
      ]},
      {terms:["pheic","pandemic-emergency","gavi","covax","vaccine-nationalism","pandemic-agreement","pabs-system","one-health"]}
    ]}
   ],
   try:[
    {id:"e4u13-l3-x1", type:"sort", q:"What kind of actor is each?", buckets:["UN or other IO","Public–private partnership","Regional body","Private or civil society"], items:[
      {t:"The World Health Organization", b:0, why:"A UN specialised agency whose members are states."},
      {t:"Gavi, the Vaccine Alliance", b:1, why:"A partnership of governments, the WHO, UNICEF, the World Bank, foundations and industry."},
      {t:"Africa CDC", b:2, why:"A public health agency of the African Union, launched in 2017."},
      {t:"The Global Fund to Fight AIDS, Tuberculosis and Malaria", b:1, why:"A partnership of governments, civil society, the private sector and affected communities, created in 2002."},
      {t:"A large philanthropic foundation funding vaccine research", b:3, why:"Private money with major influence on agendas."},
      {t:"PAHO, the Pan American Health Organization", b:2, why:"A regional organisation founded in 1902 that also serves as the WHO’s regional office for the Americas."}
    ]},
    {id:"e4u13-l3-x2", type:"mcq", q:"Why does the share of earmarked voluntary funding matter for the WHO’s independence?", options:[
      {t:"Donors who earmark money decide which programmes it funds, so the organisation’s priorities can follow donors rather than its governing bodies", ok:true, why:"Right. This is why members agreed in 2022 to raise assessed contributions to half of the base budget."},
      {t:"Voluntary money is illegal under the WHO Constitution", why:"Voluntary contributions are lawful and long-standing; the issue is control, not legality."},
      {t:"Assessed contributions come only from the United States", why:"All member states pay assessed contributions, scaled to their economies."},
      {t:"Earmarked money cannot be spent on emergencies", why:"Some can be; the concern is that the donor, not the WHO, chooses."}
    ]},
    {id:"e4u13-l3-x3", type:"order", q:"Put the Pandemic Agreement’s steps in order.", items:[
      {t:"The World Health Assembly adopts the text", why:"20 May 2025."},
      {t:"Governments negotiate the PABS annex", why:"From 2025; still under way in November 2026."},
      {t:"The Assembly adopts the annex", why:"Required before the Agreement can open for signature."},
      {t:"The Agreement opens for signature, and states ratify it", why:"Each state follows its own procedure."},
      {t:"It enters into force after 60 ratifications", why:"The threshold set in the Agreement."}
    ]},
    {id:"e4u13-l3-x4", type:"mcq", q:"Which change did the 2024 amendments to the IHR make?", options:[
      {t:"They added a “pandemic emergency” alert level above a PHEIC", ok:true, why:"Right, along with National IHR Authorities, equity commitments, a financial mechanism and a States Parties Committee."},
      {t:"They allowed the WHO to send inspectors into any country without consent", why:"No such power was added; the WHO still depends on cooperation."},
      {t:"They created the Pandemic Agreement", why:"The Agreement is a separate treaty, adopted in 2025."},
      {t:"They required all countries to adopt identical travel bans", why:"The IHR aim to avoid unnecessary travel and trade restrictions."}
    ]},
    {id:"e4u13-l3-x5", type:"number", q:"Invented figures: an organisation’s base budget is 4,000 million dollars, of which assessed contributions cover 25%. Members agree that assessed contributions should cover 50% of the same budget. By how many **million dollars** must dues rise?", answer:1000, tol:0, unit:"million dollars", why:"25% of 4,000 = 1,000; 50% of 4,000 = 2,000. The rise is 2,000 − 1,000 = 1,000 million dollars, which doubles the dues.", wrongs:[
      {v:2000, tol:0, why:"That is the new total of dues, not the increase."},
      {v:25, tol:0, why:"That is the rise in percentage points, not in dollars."}
    ], hint2:"Work out the dues before and after, then subtract."},
    {id:"e4u13-l3-x6", type:"mcq", q:"Kenji writes: “COVAX shows that global health partnerships don’t work.” Which revision is most accurate?", options:[
      {t:"COVAX delivered nearly 2 billion doses to 146 economies, but late and below its aims, largely because richer countries bought ahead and supplies were restricted", ok:true, why:"Right. It states both the achievement and the limits, with the main explanations critics give."},
      {t:"COVAX met all its targets on time", why:"Inaccurate: deliveries fell well behind early plans."},
      {t:"COVAX delivered no vaccines", why:"Inaccurate: it delivered nearly 2 billion doses."},
      {t:"COVAX was run by a single government", why:"Inaccurate: it was co-led by CEPI, Gavi and the WHO, with UNICEF delivering."}
    ]},
    {id:"e4u13-l3-x7", type:"spot", q:"A social media post about the Pandemic Agreement. Tap each claim that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      {t:"The World Health Assembly adopted the Agreement in May 2025.", flag:false, why:"Correct."},
      " ",
      {t:"It is now in force and binding on every country.", flag:true, why:"Wrong. As of November 2026 it was not yet open for signature, and it binds only states that ratify it after 60 have done so."},
      " ",
      {t:"It lets the WHO order lockdowns and vaccine mandates.", flag:true, why:"Misleading. The text says the WHO cannot direct national laws or impose such measures."},
      " ",
      {t:"Its annex on pathogen sharing is still being negotiated.", flag:false, why:"Correct as of November 2026."},
      " ",
      {t:"It aims to share some pandemic products with the WHO for fair distribution.", flag:false, why:"A fair summary of the PABS proposal’s 20% target."}
    ]}
   ],
   apply:{
    intro:"Work with primary sources on health governance. The WHO publishes everything below for free.",
    tasks:[
     {t:"Check the status yourself", how:[
       "Search the WHO website for “Intergovernmental Working Group on the WHO Pandemic Agreement”.",
       "Note the date of the latest meeting and what the latest news item says about the PABS annex.",
       "Write one dated sentence (“As of … the annex …”) that you could use in a seminar paper."
     ], write:"Latest meeting and date… What the news says… My dated sentence…"},
     {t:"Read an emergency statement", how:[
       "Find the statement of the IHR Emergency Committee for any PHEIC (for example mpox in 2024 or COVID-19 in 2020).",
       "List the temporary recommendations it gave to states, and mark which concern travel and trade.",
       "Note any language asking states not to impose unnecessary restrictions."
     ], write:"Which PHEIC… Recommendations… Travel and trade… What surprised me…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is global health governance better described as health security or health equity?",
       "2. Can a treaty that leaves its key annex for later still change behaviour?",
       "3. Should public–private partnerships such as Gavi have a larger or smaller role after COVID-19?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A dated status sentence on the PABS annex, notes on one emergency statement, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Background on protecting people across borders; read it alongside the health security debate."},
    {book:"ospol", where:"Chapter 15, sections 15.3 “The United Nations and Global Intergovernmental Organizations (IGOs)” and 15.5 “Non-state Actors: Nongovernmental Organizations (NGOs)”", note:"A refresher on the UN system and NGOs."},
    {book:"soc", where:"Chapter 19 “Health and Medicine”, section 19.2 “Global Health”", note:"A sociology view of global health inequalities."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u13-l4", title:"Governing technology: the internet, cyberspace and AI", minutes:65,
   hook:{q:"Who coordinates the internet’s top-level domain names, such as .jp, .br, .ke and .com?", options:["The ITU, a UN specialised agency","ICANN, a non-profit with a multistakeholder model","The US Department of Commerce","Each country separately, with no global coordination"], answer:1, reveal:"**ICANN**, the Internet Corporation for Assigned Names and Numbers, a non-profit founded in California in 1998. Until 2016 it worked under a contract with the US government; since then it has been accountable to a global community of businesses, technical experts, civil society and others, in which governments advise but do not control. Some governments would prefer an intergovernmental body such as the ITU to play a bigger role. That disagreement, multistakeholder versus state-led, runs through this lesson, from the internet to AI."},
   goals:[
     "Describe the layers of internet governance and the bodies that run them",
     "Explain multistakeholderism and sovereignty models of internet governance, with each side’s arguments attributed",
     "Trace the UN cyber norms process from the GGE reports to the Global Mechanism, and the two cybercrime treaties",
     "Map AI governance as of November 2026: UN, OECD, G7, Council of Europe and summit initiatives",
     "Compare national and regional approaches to AI (EU, China, US, Japan, South Korea) without ranking them"
   ],
   learn:[
    {h:"Governance in the pipes", body:[
      {lead:"Where is the internet governed: in parliaments, in courts, or in code?"},
      "The internet works through shared technical rules (see {{how-the-internet-works}} and [[dns]]). Laura DeNardis’s *The Global War for Internet Governance* (2014) argued that much of its governance happens inside that infrastructure, in bodies most people never hear of.",
      {fig:'<svg viewBox="0 0 340 350"><rect class="d-rose" x="10" y="10" width="320" height="74" rx="8" stroke-width="2"/><text x="24" y="34">Content and platforms</text><text class="s" x="24" y="54">national laws, platform rules,</text><text class="s" x="24" y="70">regional laws such as the EU’s DSA</text><rect class="d-gold" x="10" y="94" width="320" height="74" rx="8" stroke-width="2"/><text x="24" y="118">Standards and protocols</text><text class="s" x="24" y="138">IETF (internet protocols),</text><text class="s" x="24" y="154">W3C (the web), ITU (telecoms)</text><rect class="d-sage" x="10" y="178" width="320" height="74" rx="8" stroke-width="2"/><text x="24" y="202">Names and numbers</text><text class="s" x="24" y="222">ICANN and IANA (domains, root),</text><text class="s" x="24" y="238">five regional address registries</text><rect class="d-lup" x="10" y="262" width="320" height="74" rx="8" stroke-width="2"/><text x="24" y="286">Physical infrastructure</text><text class="s" x="24" y="306">undersea cables, data centres,</text><text class="s" x="24" y="322">telecom firms, national regulators</text></svg>', alt:"Four stacked layers. Top: content and platforms (national laws, platform rules, regional laws such as the EU’s Digital Services Act). Second: standards and protocols (IETF for internet protocols, W3C for the web, ITU for telecoms). Third: names and numbers (ICANN and IANA for domains and the root, five regional address registries). Bottom: physical infrastructure (undersea cables, data centres, telecom firms, national regulators).", cap:"Each layer has different governors. Unit 7 covered the top layer."},
      "The Internet Engineering Task Force (1986) writes protocols through open, rough-consensus processes. Five regional internet registries, such as APNIC in Brisbane for Asia and the Pacific, allocate addresses ([[ip-address|IP addresses]]). [[icann|ICANN]] coordinates domain names and the root zone. Unit 7 covered the content layer (see {{platform-governance}})."
    ]},
    {h:"Why technology is hard to govern", body:[
      "Four features make digital technology an unusual governance problem:",
      {list:[
        "**Pace.** David Collingridge’s *The Social Control of Technology* (1980) described a dilemma: early on, a technology is easy to change but its effects are unknown; once the effects are clear, it is entrenched and hard to change.",
        "**Private capability.** The most advanced systems, cables and platforms are owned by a few firms, many based in the United States and China, so states must govern through or with them.",
        "**Dual use.** The same code, chips or models serve hospitals and militaries, which makes trade and security rules overlap.",
        "**No borders, many jurisdictions.** Data and services cross borders instantly, while laws stop at them."
      ]},
      "That is why technology governance mixes technical bodies, firms, clubs, the UN and national laws, and why each actor tries to shape the forum as well as the rules."
    ]},
    {h:"Multistakeholderism versus sovereignty", body:[
      "The UN’s World Summit on the Information Society (Geneva 2003, Tunis 2005) produced the standard definition: [[internet-governance|internet governance]] is the development and application by governments, the private sector and civil society, “in their respective roles”, of shared principles, norms, rules, procedures and programmes that shape the internet (see {{internet-governance}}). Tunis created the [[internet-governance-forum|Internet Governance Forum]], first held in Athens in 2006, a place to talk, not to decide. In December 2025 the General Assembly’s twenty-year review made the IGF a permanent UN forum.",
      "In October 2016 the US government let its contract over the core IANA functions expire, the [[iana-stewardship-transition|IANA stewardship transition]], handing oversight to ICANN’s global community.",
      "Two models compete, and you should attribute each:",
      {table:[
        ["Model","Who argues it","Main claims"],
        ["[[multistakeholderism|Multistakeholder]]","The US, EU, Japan and others; the technical community; many civil society groups","Open, bottom-up processes keep the internet global, innovative and free"],
        ["Sovereignty or state-led","China, Russia and others; some developing countries at times","Governments are responsible for security and order; intergovernmental bodies such as the ITU are more equal"]
      ]},
      "China’s government promotes [[cyber-sovereignty|cyber sovereignty]], the right of each state to govern its own cyberspace, at its annual World Internet Conference in Wuzhen (since 2014). Russia passed a “sovereign internet” law in 2019. Supporters of the multistakeholder model warn of a [[splinternet]], a world of national networks (Milton Mueller’s *Will the Internet Fragment?*, 2017, examines the claim). Critics of multistakeholderism, including some Global South scholars, reply that its “stakeholders” are mostly Northern firms and experts with the time and money to attend.",
      {tip:"Avoid “free internet versus censorship” as your frame. Both sides use the language of rights and security; analyse their arguments and practices."}
    ]},
    {h:"Cyber norms and cybercrime", body:[
      "The primer introduced [[cyber-conflict|cyber conflict]] and the 2015 UN norms (see {{security-studies}}). The process behind them is a case study in forum choice (see {{cyber-norms}}):",
      {list:[
        "A small [[un-gge|Group of Governmental Experts]] (GGE) agreed in 2013 that international law, including the UN Charter, applies to cyberspace, and in 2015 agreed eleven [[voluntary-cyber-norms|voluntary norms]], such as not deliberately damaging critical infrastructure that serves the public. The 2017 group failed to agree.",
        "From 2019 an [[oewg-ict|Open-ended Working Group]] (OEWG), proposed by Russia and open to all UN members, ran in parallel with a US-backed GGE. Both produced consensus reports in 2021.",
        "A second OEWG (2021–2025) adopted a final report by consensus in July 2025 and set up a permanent Global Mechanism on ICT security, starting work in 2026."
      ]},
      "Cybercrime has two treaties. The Council of Europe’s [[budapest-convention|Budapest Convention]] (2001) has parties well beyond Europe, including Japan. A UN Convention against Cybercrime, first proposed by Russia, was adopted by the General Assembly in December 2024 and opened for signature in Hanoi in October 2025, where 72 states signed. Supporters say it gives every state a voice and helps developing countries fight crime; human rights groups and some companies warned that its broad powers could be misused for surveillance."
    ]},
    {h:"AI governance: a regime complex in the making", body:[
      "[[ai-governance|AI governance]] (see {{ai-governance}}) is young, fast and spread over many forums, which makes it a textbook [[regime-complex|regime complex]]. The main international pieces, as of November 2026:",
      {table:[
        ["Year","Forum","What it is"],
        ["2019 (updated 2024)","OECD AI Principles","Non-binding principles adopted by OECD and other states"],
        ["2021","UNESCO Recommendation on the Ethics of AI","Non-binding, adopted by UNESCO members"],
        ["2023","G7 Hiroshima AI Process","Principles and a code of conduct for developers"],
        ["2023–2026","Summits: Bletchley Park, Seoul, Paris, New Delhi","Declarations; at Paris in 2025 the US and UK did not sign"],
        ["2024","Council of Europe Framework Convention","The first binding international AI treaty, open to non-members"],
        ["2024","UN: *Governing AI for Humanity* report; [[global-digital-compact|Global Digital Compact]]","Proposals and commitments"],
        ["2025–2026","UN Scientific Panel on AI and Global Dialogue","Created by the General Assembly in August 2025"]
      ]},
      "The Global Digital Compact, adopted with the Pact for the Future (Lesson 5), is the first universal UN framework on digital cooperation. Its commitments include closing digital divides, an open, safe and secure internet, human rights online, responsible data governance and international AI governance. It is a political commitment, not a treaty.",
      "The UN advisory body’s report (September 2024) made seven recommendations, including a scientific panel and a policy dialogue. The General Assembly created both in August 2025: a 40-member Independent International Scientific Panel on AI, appointed in February 2026 and co-chaired by Yoshua Bengio and Maria Ressa, and a Global Dialogue on AI Governance, launched in New York in September 2025, which held its first full session in Geneva in July 2026. Several governments, starting with the UK in 2023, also set up [[ai-safety-institute|AI safety institutes]] and linked them in an international network in 2024; some have since been renamed with a focus on security or standards."
    ]},
    {h:"National and regional approaches", body:[
      "Anu Bradford’s *Digital Empires* (2023) describes three models of digital regulation: market-driven (the United States), state-driven (China) and rights-driven (the European Union), and her earlier *The Brussels Effect* (2020) explains how EU rules spread through global markets. Use the typology as a starting point, then test it:",
      {list:[
        "**EU.** The AI Act entered into force in August 2024 as [[risk-based-regulation|risk-based regulation]]: some uses are banned (from February 2025), “high-risk” uses face strict duties, and providers of [[general-purpose-ai|general-purpose AI]] models have had obligations since August 2025. A “Digital Omnibus” in force from July 2026 delayed most high-risk duties to December 2027 or August 2028 and added bans on AI that generates non-consensual intimate images. Transparency duties for deepfakes applied from August 2026 (see Unit 7).",
        "**China.** Binding rules on specific services: recommendation algorithms (2022), “deep synthesis” (2023), generative AI (August 2023) and labelling of AI content (September 2025). Abroad it launched a Global AI Governance Initiative (2023) and in July 2025 proposed a World AI Cooperation Organization.",
        "**United States.** A 2023 executive order on AI safety was revoked in January 2025; the July 2025 AI Action Plan stresses innovation, infrastructure and exports, with few new federal rules. A December 2025 executive order challenges state AI laws that the administration sees as burdensome, a step some states and critics oppose.",
        "**Japan and South Korea.** Japan’s AI Promotion Act (May 2025) promotes research and use, with no penalties. South Korea’s AI Basic Act took effect in January 2026, with duties for “high-impact” AI."
      ]},
      "Each government presents its model as the one that balances innovation, safety and rights best; critics of each say it leans too far one way. A seminar paper should describe the trade-offs, not crown a winner. Data rules matter too (see [[gdpr]])."
    ]},
    {h:"Vocabulary and misconceptions", body:[
      {table:[
        ["Misconception","Closer to the truth"],
        ["The UN runs the internet.","Technical bodies and ICANN run core functions; the UN hosts debate (IGF) and some norms."],
        ["There are no rules for state behaviour in cyberspace.","International law applies, and eleven voluntary norms were agreed in 2015, though compliance is contested."],
        ["The EU AI Act bans AI.","It bans a few uses and regulates others by risk."],
        ["Global AI governance is one treaty.","It is a patchwork of principles, summits, national laws and one Council of Europe treaty."]
      ]},
      {terms:["internet-governance","multistakeholderism","cyber-sovereignty","splinternet","icann","iana-stewardship-transition","internet-governance-forum","un-gge","oewg-ict","voluntary-cyber-norms","budapest-convention","ai-governance","risk-based-regulation","general-purpose-ai","ai-safety-institute","global-digital-compact"]}
    ]}
   ],
   try:[
    {id:"e4u13-l4-x1", type:"sort", q:"At which layer does each body mainly work?", buckets:["Content and platforms","Standards and protocols","Names and numbers","Physical infrastructure"], items:[
      {t:"The Internet Engineering Task Force", b:1, why:"It writes internet protocols."},
      {t:"ICANN", b:2, why:"It coordinates domain names and the root zone."},
      {t:"APNIC, the Asia-Pacific address registry", b:2, why:"It allocates IP addresses in its region."},
      {t:"A consortium laying an undersea cable", b:3, why:"Cables are physical infrastructure."},
      {t:"A national law on removing illegal posts", b:0, why:"Rules on what content may appear sit at the top layer."},
      {t:"The World Wide Web Consortium (W3C)", b:1, why:"It sets web standards such as HTML."}
    ]},
    {id:"e4u13-l4-x2", type:"sort", q:"Which model does each argument support?", buckets:["Multistakeholder model","Sovereignty or state-led model"], items:[
      {t:"Engineers and companies understand the technology and should lead.", b:0, why:"A typical multistakeholder argument from expertise."},
      {t:"Each state is responsible for security and order in its own cyberspace.", b:1, why:"The core claim of cyber sovereignty."},
      {t:"An intergovernmental body gives every state an equal vote.", b:1, why:"An argument for the ITU or UN over private bodies."},
      {t:"Open, bottom-up processes prevent any government from controlling the internet.", b:0, why:"The multistakeholder case against state control."},
      {t:"Private bodies based in one country should not hold global power.", b:1, why:"A criticism of ICANN’s origins made by governments favouring a bigger state role."}
    ]},
    {id:"e4u13-l4-x3", type:"order", q:"Put the UN cyber process in order.", items:[
      {t:"A GGE agrees that international law applies to cyberspace", why:"2013."},
      {t:"A GGE agrees eleven voluntary norms", why:"2015, welcomed by the General Assembly."},
      {t:"The GGE fails to agree a report", why:"2017."},
      {t:"An open-ended working group and a GGE both report by consensus", why:"2021."},
      {t:"A second OEWG adopts its final report and creates a Global Mechanism", why:"July 2025; the Mechanism starts in 2026."}
    ]},
    {id:"e4u13-l4-x4", type:"match", q:"Match each AI instrument to its source.", pairs:[
      ["Hiroshima AI Process (2023)","G7","Launched under Japan’s presidency."],
      ["Framework Convention on AI (2024)","Council of Europe","The first binding international AI treaty."],
      ["Recommendation on the Ethics of AI (2021)","UNESCO","Adopted by its member states."],
      ["AI Principles (2019, updated 2024)","OECD","Non-binding principles."],
      ["Scientific Panel and Global Dialogue (2025)","UN General Assembly","Created by a resolution in August 2025."]
    ]},
    {id:"e4u13-l4-x5", type:"mcq", q:"Under the EU AI Act’s risk-based approach, how is a system that scores job applicants mainly treated?", options:[
      {t:"As high-risk: allowed, but with strict duties on data, documentation, oversight and accuracy", ok:true, why:"Right. Employment uses are listed as high-risk; under the 2026 Digital Omnibus most such duties apply from December 2027."},
      {t:"As banned outright", why:"Only a short list of uses is banned, such as social scoring. Hiring tools are regulated, not banned."},
      {t:"As minimal risk with no duties", why:"Uses that affect access to jobs are treated as high-risk because of their impact on people’s rights."},
      {t:"As outside the Act because it is software", why:"The Act covers AI systems, which are software."}
    ]},
    {id:"e4u13-l4-x6", type:"spot", q:"A blog post on AI governance. Tap each claim that is **wrong or unattributed opinion**.", ask:"wrong or unattributed", parts:[
      {t:"The UN General Assembly created a scientific panel on AI in 2025.", flag:false, why:"Correct: resolution 79/325 of August 2025."},
      " ",
      {t:"There is now a single global AI treaty that all countries have ratified.", flag:true, why:"Wrong. The only binding international AI treaty is the Council of Europe’s, and it is far from universal."},
      " ",
      {t:"The EU’s approach is obviously the only sensible one.", flag:true, why:"Unattributed opinion. Different governments defend different models; attribute views."},
      " ",
      {t:"Japan’s 2025 AI law focuses on promotion and has no penalties.", flag:false, why:"Correct."},
      " ",
      {t:"China has binding rules on generative AI services from 2023.", flag:false, why:"Correct: interim measures took effect in August 2023."}
    ]},
    {id:"e4u13-l4-x7", type:"mcq", q:"Why do scholars call AI governance a “regime complex”?", options:[
      {t:"Many partly overlapping institutions and rules, with no single hierarchy, govern the same issue", ok:true, why:"Right. Principles, summits, national laws and a treaty overlap without one body in charge (compare Unit 9)."},
      {t:"Because AI is technically complex", why:"The term describes the institutions, not the technology."},
      {t:"Because one organisation has full authority over AI", why:"That would be the opposite of a regime complex."},
      {t:"Because there are no rules at all", why:"There are many rules; the point is that they overlap."}
    ]}
   ],
   apply:{
    intro:"See technology governance at work. Everything below is free; no accounts needed.",
    tasks:[
     {t:"Who runs your country code?", how:[
       "Open the IANA Root Zone Database (search “IANA root zone database”) and find your country’s two-letter domain (for example .jp, .br, .ng).",
       "Note the sponsoring organisation: a government agency, a university, a non-profit or a company?",
       "Write two sentences on what this says about public and private roles in internet governance."
     ], write:"My country code… Who manages it… Public or private… Two sentences…"},
     {t:"Compare two AI texts", how:[
       "Read the short list of the OECD AI Principles, and the summary of one national or regional AI law (the EU AI Act, Japan’s AI Promotion Act, South Korea’s AI Basic Act or China’s generative AI measures).",
       "For each, note: binding or not, who must act, and which values it stresses (innovation, safety, rights, security).",
       "Describe one real difference without saying which is better."
     ], write:"Text 1… Text 2… Binding?… Who acts… Values stressed… One difference…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Is multistakeholderism more democratic than multilateralism, or only differently unequal?",
       "2. Can voluntary cyber norms constrain states?",
       "3. Will AI governance be shaped more by UN processes or by the rules of a few large markets? (Describe evidence; do not predict.)"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on who runs one country-code domain, a comparison of two AI governance texts, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 12 “Connectivity, Communications and Technology”", note:"Background on how technology changes international politics."},
    {book:"govai", where:"Executive summary and the seven recommendations", note:"The UN advisory body’s case for global AI governance."},
    {book:"ics", where:"Background reading: Chapter 14, Section 14.3 “Governing the Use of Cyber Resources”", note:"A computer science view of governing technology."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u13-l5", title:"The future of multilateralism, and how to argue about it", minutes:65,
   hook:{q:"In September 2024 world leaders at the UN adopted the Pact for the Future. How was it adopted?", options:["By a unanimous recorded vote of all 193 members","Without a vote, after members set aside a proposed amendment by 143 votes to 7","It failed when a permanent member of the Security Council used its veto","By a simple majority, with most of the Global South voting against"], answer:1, reveal:"**Without a vote, after an amendment was set aside.** Russia proposed an amendment that would have weakened the text; by 143 votes to 7, with 15 abstentions, members decided not to take it up, and then adopted the Pact without a vote. (The veto exists only in the Security Council, not in the General Assembly.) Supporters hailed proof that multilateralism still works; critics called the text vague. Both readings are part of this lesson’s debate."},
   goals:[
     "Summarise the main positions on whether global governance is in crisis, transition or renewal, linking Unit 1’s order debate",
     "Describe the Pact for the Future and other reform efforts inside the UN as of November 2026",
     "Explain regional and South-led initiatives and the debate on whether they complement or challenge existing institutions",
     "Use scenarios as analytical tools without making predictions",
     "Build a seminar argument about global governance with a clear claim, mechanism, evidence, counter-argument and limits"
   ],
   learn:[
    {h:"Crisis, transition or renewal?", body:[
      {lead:"Is multilateralism failing, or just changing shape?"},
      "Unit 1 set out the debate on the [[liberal-international-order|liberal international order]] as of 2026: Ikenberry’s resilient order, Mearsheimer’s order “bound to fail”, the view that it was never very liberal, and Acharya’s [[multiplex-world|multiplex world]] (see {{post-cold-war-order}} and {{amitav-acharya}}). Here we ask what that debate means for global governance (see {{multilateralism-debates}}).",
      "Three influential diagnoses:",
      {table:[
        ["Work","Diagnosis"],
        ["Hale, Held & Young, *Gridlock* (2013)","Cooperation stalls because power is spread more widely, problems are harder, old institutions resist change and new ones fragment the field"],
        ["Zürn, *A Theory of Global Governance* (2018)","International institutions now exercise real authority, which creates legitimacy problems and invites contestation by states and publics"],
        ["Stuenkel, *Post-Western World* (2016)","Emerging powers are building parallel institutions that mostly complement rather than replace the existing ones"]
      ]},
      "Unit 9 added contested multilateralism (Morse and Keohane, 2014; see {{contested-multilateralism}}): states unhappy with one institution shift to, or create, another. Many writers since 2022 also speak of a [[polycrisis]], several crises (pandemic, war, climate, debt) interacting at once; the term has roots in the 1990s work of Edgar Morin and was popularised by the historian Adam Tooze.",
      "Two yardsticks run through the whole debate. **Effectiveness** asks whether governance solves the problem: fewer infections, stable finance, safer networks. **Legitimacy** asks whether those affected accept the rule-makers’ right to decide, because of fair procedures and voice (input) or good results (output; see [[input-output-legitimacy|input and output legitimacy]] in Unit 9). The two can pull apart. Clubs and expert networks often score well on speed and poorly on voice; universal bodies the reverse. Many reform proposals in this lesson are attempts to raise one without losing the other, and many disagreements are about which yardstick should count most.",
      {warn:"Every diagnosis carries a view of what “working” means. Ask each author: working for whom, compared with what, and measured how?"}
    ]},
    {h:"Reform from inside: the Pact for the Future", body:[
      "The Secretary-General’s report *Our Common Agenda* (2021) proposed a Summit of the Future, held in New York on 22–23 September 2024. It adopted the [[pact-for-the-future|Pact for the Future]] (see {{pact-for-the-future}}), with 56 actions in five chapters and two annexes:",
      {fig:'<svg viewBox="0 0 340 360"><rect class="d-gold" x="70" y="10" width="200" height="46" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Pact for the Future</text><text class="s" x="170" y="48" text-anchor="middle">September 2024</text><path class="d-ink" d="M170 56 V70 M40 70 H300 M40 70 V80" stroke-width="2" fill="none"/><rect class="d-lup" x="20" y="80" width="300" height="34" rx="6" stroke-width="2"/><text x="170" y="102" text-anchor="middle">1 Development and its financing</text><rect class="d-lup" x="20" y="120" width="300" height="34" rx="6" stroke-width="2"/><text x="170" y="142" text-anchor="middle">2 Peace and security</text><rect class="d-lup" x="20" y="160" width="300" height="34" rx="6" stroke-width="2"/><text x="170" y="182" text-anchor="middle">3 Science, technology, digital</text><rect class="d-lup" x="20" y="200" width="300" height="34" rx="6" stroke-width="2"/><text x="170" y="222" text-anchor="middle">4 Youth and future generations</text><rect class="d-lup" x="20" y="240" width="300" height="34" rx="6" stroke-width="2"/><text x="170" y="262" text-anchor="middle">5 Transforming global governance</text><rect class="d-sage" x="20" y="290" width="146" height="58" rx="6" stroke-width="2"/><text x="93" y="314" text-anchor="middle">Annex I</text><text class="s" x="93" y="334" text-anchor="middle">Global Digital Compact</text><rect class="d-sage" x="174" y="290" width="146" height="58" rx="6" stroke-width="2"/><text x="247" y="314" text-anchor="middle">Annex II</text><text class="s" x="247" y="334" text-anchor="middle">Future Generations</text></svg>', alt:"A box labelled ‘Pact for the Future, September 2024’ above five chapter boxes: 1 development and its financing; 2 peace and security; 3 science, technology, digital; 4 youth and future generations; 5 transforming global governance. Below, two annex boxes: Annex I, Global Digital Compact; Annex II, Declaration on Future Generations.", cap:"The Pact’s structure: five chapters and two annexes."},
      "On governance, members committed to make the Security Council more representative, treating the under-representation of Africa as a priority, to reform the international financial architecture so developing countries have more voice, and to strengthen the General Assembly and the Peacebuilding Commission. In March 2025 the Secretary-General also launched the [[un80-initiative|UN80 Initiative]] to cut costs and merge functions as funding fell (see Unit 9).",
      "Reform of the Bretton Woods institutions moves slowly (see {{bretton-woods-institutions}}). In December 2023 IMF members agreed to raise total [[imf-quota|quotas]] by 50% but without shifting voting shares, which many emerging economies say understate their weight; the increase still awaited enough members’ consent to take effect in 2026, and talks on a new formula continue. Security Council reform is still blocked between rival models (Unit 9).",
      "Readings differ. Supporters, including many small and developing states, see a rare consensus that keeps reform on the agenda. Critics note that most actions are phrased as intentions (“we will consider”, “we encourage”), and Russia, whose amendment had failed, criticised the process. Whether it changes anything depends on follow-up, which is still under way as of 2026."
    ]},
    {h:"Reform from outside: regional and South-led initiatives", body:[
      "Many initiatives come from outside the post-1945 institutions, often led by Global South governments:",
      {list:[
        "**New lenders and safety nets:** the Asian Infrastructure Investment Bank (operating since 2016, now with more than 100 members), the BRICS New Development Bank, and ASEAN plus Three’s Chiang Mai Initiative (Lesson 2).",
        "**Finance reform campaigns:** the Bridgetown Initiative launched by Barbados’s prime minister Mia Mottley in 2022 on debt and climate finance; Brazil’s Global Alliance against Hunger and Poverty, launched at the G20 in 2024.",
        "**Regional projects:** the African Union’s Agenda 2063 and the African Continental Free Trade Area (see {{regional-organizations}}).",
        "**Voice-raising forums:** India’s Voice of the Global South summits (from 2023); the African Union’s seat in the G20 (2023).",
        "**Small states using universal bodies:** Vanuatu and other Pacific states won a General Assembly request (2023) for an advisory opinion of the International Court of Justice on states’ climate obligations, delivered in July 2025.",
        "**China’s initiatives:** Global Development (2021), Security (2022) and Civilization (2023) Initiatives, and a Global Governance Initiative announced in September 2025."
      ]},
      "These rest on a long tradition of [[south-south-cooperation|South–South cooperation]], from Bandung (see {{third-world-project}}) to the Buenos Aires Plan of Action (1978). Interpretations, attributed: their sponsors present them as making global governance fairer and more effective; some Western officials see some of them, especially China’s, as efforts to reshape rules in one state’s favour; scholars such as Stuenkel argue that most are hedges that sit alongside existing bodies. Look at membership, rules and money before deciding which description fits a case."
    ]},
    {h:"Three stories about the future, used as tools", body:[
      "Scholars often sketch scenarios. They are not predictions: they are frames that tell you what evidence to look for.",
      {table:[
        ["Story","Core claim","Evidence its proponents cite"],
        ["Renewal","Universal institutions adapt and absorb new powers","IMF quota talks, the AU in the G20, consensus on the Pact"],
        ["Fragmentation","Rival blocs and clubs replace shared rules","Rival AI and internet models, withdrawals, export controls"],
        ["Multiplex","Many actors and regions govern in overlapping networks","Regime complexes, private standards, city and regional networks"]
      ]},
      "Real cases usually show more than one story. The governance of AI, for example, has UN renewal (a scientific panel), fragmentation (competing national models) and a multiplex of private standards at the same time.",
      {tip:"Write “the evidence fits story X better than story Y for case Z, as of date D”, not “the world is heading for X”."}
    ]},
    {h:"Building an argument about global governance", body:[
      "The academic English units showed how to build an argument (see {{building-an-argument}} and [[claim-evidence-reasoning]]). Global governance adds traps: huge abstractions, fast-changing facts and strong feelings. A scaffold:",
      {fig:'<svg viewBox="0 0 340 370"><defs><marker id="ar5" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="20" y="8" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="28">1 Claim, with scope and date</text><text class="s" x="36" y="45">which actor, which issue, when</text><path class="d-ink" d="M170 54 V64" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-lup" x="20" y="68" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="88">2 Mechanism</text><text class="s" x="36" y="105">how the cause produces the effect</text><path class="d-ink" d="M170 114 V124" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-lup" x="20" y="128" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="148">3 Evidence</text><text class="s" x="36" y="165">outcomes, not only declarations</text><path class="d-ink" d="M170 174 V184" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-rose" x="20" y="188" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="208">4 Strongest counter-argument</text><text class="s" x="36" y="225">stated fairly, with its author</text><path class="d-ink" d="M170 234 V244" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-sage" x="20" y="248" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="268">5 Reply and limits</text><text class="s" x="36" y="285">what your claim does not show</text><path class="d-ink" d="M170 294 V304" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-gold" x="20" y="308" width="300" height="46" rx="8" stroke-width="2"/><text x="36" y="328">6 So what?</text><text class="s" x="36" y="345">why it matters for the debate</text></svg>', alt:"Six boxes connected by arrows: 1 claim, with scope and date (which actor, which issue, when); 2 mechanism (how the cause produces the effect); 3 evidence (outcomes, not only declarations); 4 strongest counter-argument (stated fairly, with its author); 5 reply and limits (what your claim does not show); 6 so what? (why it matters for the debate).", cap:"A scaffold for a seminar argument."},
      {ex:"**Claim:** Between 2008 and 2010 the G20 helped contain the financial crisis. **Mechanism:** leaders could commit their finance ministries and central banks quickly, without waiting for the full IMF membership. **Evidence:** the April 2009 package for the IMF and others, the creation of the Financial Stability Board, coordinated stimulus. **Counter-argument:** central banks, above all the US Federal Reserve’s dollar lending (Tooze, *Crashed*, 2018), did most of the work, and the G20’s later record is thinner. **Reply and limits:** the claim covers the crisis years only; it shows coordination, not that the G20 caused recovery. **So what:** clubs may work best in acute crises when the largest economies share an interest.", label:"Worked example"}
    ]},
    {h:"Evidence and pitfalls", body:[
      "Good evidence distinguishes **outputs** (declarations, pledges, new bodies) from **outcomes** (changed behaviour, money spent, lives affected). Compliance studies, such as the G7 Research Group’s yearly reports on whether members kept their commitments, help with the second.",
      {table:[
        ["Pitfall","Better practice"],
        ["Treating a declaration as an achievement","Track what happened next, with dates"],
        ["“The West versus the rest”","Name governments and groups; positions cross regions"],
        ["Teleology: history heading somewhere","Use scenarios as frames, not forecasts"],
        ["Cherry-picking one case","Compare cases, including ones that don’t fit"],
        ["Advocacy tone","Attribute normative views and keep yours separate"]
      ]},
      "Use careful language for uncertainty ([[hedging]]): “the evidence suggests”, “as of November 2026”, “on this measure”. And present the strongest [[counterargument|counter-argument]] you can find, not the weakest.",
      {key:"A strong argument about global governance is narrow, dated, evidence-based and fair to its opponents."},
      "This lesson closes the global governance cluster of the track. Units 9 to 13 have moved from organisations and law to rights, security and governance beyond the state. The same habits run through all of them: name the actors, date the facts, attribute the positions, and test claims against outcomes. Take those habits into any seminar, whatever its topic.",
      {terms:["multiplex-world","polycrisis","pact-for-the-future","south-south-cooperation"]}
    ]}
   ],
   try:[
    {id:"e4u13-l5-x1", type:"match", q:"Match each work to its diagnosis.", pairs:[
      ["Hale, Held & Young, *Gridlock* (2013)","Cooperation stalls as power spreads, problems harden and institutions fragment","Four pathways to gridlock."],
      ["Zürn, *A Theory of Global Governance* (2018)","Institutions’ authority creates legitimacy problems and contestation","Authority, legitimacy and contestation."],
      ["Stuenkel, *Post-Western World* (2016)","Emerging powers build parallel institutions that mostly complement existing ones","A parallel order."],
      ["Acharya, *The End of American World Order* (2014)","A multiplex world of many actors and orders","Not a single dominant order."],
      ["Morse & Keohane (2014)","States shift to or create rival institutions when unhappy","Contested multilateralism."]
    ]},
    {id:"e4u13-l5-x2", type:"sort", q:"Who launched each reform effort?", buckets:["The UN itself","A club of states (G20, BRICS…)","A regional organisation or one government"], items:[
      {t:"The Pact for the Future", b:0, why:"Adopted by the General Assembly at the Summit of the Future."},
      {t:"The UN80 Initiative", b:0, why:"Launched by the Secretary-General to reform the UN’s own work."},
      {t:"The Common Framework for debt treatments", b:1, why:"Agreed by the G20 (with the Paris Club of creditors) in 2020."},
      {t:"The African Continental Free Trade Area", b:2, why:"An African Union project."},
      {t:"The Bridgetown Initiative", b:2, why:"One government’s initiative: launched by Barbados’s prime minister to reform development and climate finance."},
      {t:"The New Development Bank", b:1, why:"Created by the BRICS members, a club; it is also an example of South-led finance."}
    ]},
    {id:"e4u13-l5-x3", type:"mcq", q:"Which statement about the Pact for the Future is accurate?", options:[
      {t:"It was adopted without a vote in September 2024, with the Global Digital Compact and a Declaration on Future Generations as annexes", ok:true, why:"Right. An amendment was voted down first; the Pact itself was then adopted without a vote."},
      {t:"It is a binding treaty that requires Security Council reform by 2030", why:"It is a General Assembly outcome document, not a treaty, and sets no binding deadline for Council reform."},
      {t:"It replaced the UN Charter", why:"Only the Charter’s own amendment procedure can change the Charter."},
      {t:"The United States vetoed it", why:"There is no veto in the General Assembly."}
    ]},
    {id:"e4u13-l5-x4", type:"order", q:"Put the parts of a seminar argument in the order of the scaffold.", items:[
      {t:"State a claim with its scope and date", why:"A clear, narrow claim comes first."},
      {t:"Explain the mechanism", why:"Say how the cause is supposed to produce the effect."},
      {t:"Give evidence of outcomes", why:"Evidence supports the mechanism, beyond declarations."},
      {t:"Present the strongest counter-argument", why:"Engage the best opposing view, fairly attributed."},
      {t:"Reply and state the limits", why:"Answer the counter-argument and say what the claim does not show."},
      {t:"Say why it matters", why:"Connect the argument back to the wider debate."}
    ]},
    {id:"e4u13-l5-x5", type:"spot", q:"A draft seminar paragraph. Tap each sentence that **weakens the argument**.", ask:"weakens the argument", parts:[
      {t:"The G20 held a leaders’ summit every year from 2008 to 2025.", flag:false, why:"Dated and checkable."},
      " ",
      {t:"Its 2025 declaration promised to tackle debt, so the debt problem is being solved.", flag:true, why:"Treats an output (a promise) as an outcome. Show what changed afterwards."},
      " ",
      {t:"The West will inevitably lose control of global governance.", flag:true, why:"A prediction framed as certainty, with a vague bloc (“the West”). Use dated evidence and named actors."},
      " ",
      {t:"Critics such as Støre have argued that the G20 excludes most states.", flag:false, why:"An attributed counter-argument: good practice."},
      " ",
      {t:"On debt, the Common Framework’s first cases took years to complete, which suggests limits.", flag:false, why:"Hedged and based on outcomes."}
    ]},
    {id:"e4u13-l5-x6", type:"mcq", q:"Mei wants to test whether a club’s summit “worked”. Which evidence is strongest?", options:[
      {t:"Data on whether members later carried out the summit’s commitments, such as a compliance study", ok:true, why:"Right. Compliance evidence measures outcomes, not just promises."},
      {t:"The number of pages in the summit declaration", why:"Length measures output, not effect."},
      {t:"Leaders’ own press conferences praising the summit", why:"Self-assessment by participants is not independent evidence."},
      {t:"How many journalists attended", why:"Media attention is not evidence of policy change."}
    ]},
    {id:"e4u13-l5-x7", type:"mcq", q:"Which is the best use of the “fragmentation” scenario in a paper?", options:[
      {t:"“On internet governance, evidence as of 2026 fits fragmentation better than renewal, because of rival national models, though the IGF was made permanent in 2025.”", ok:true, why:"Right. It is narrow, dated, uses evidence and notes a counter-point."},
      {t:"“The world will split into two blocs by 2035.”", why:"A prediction, not an analytical use of a scenario."},
      {t:"“Fragmentation is bad, so we must stop it.”", why:"A normative claim with no evidence about any case."},
      {t:"“Everything is fragmenting everywhere.”", why:"Too sweeping to test."}
    ]}
   ],
   apply:{
    intro:"Practise building and testing arguments with real documents.",
    tasks:[
     {t:"Read one Pact action", how:[
       "Open the Pact for the Future on the UN website and choose one action in chapter 5, “Transforming global governance”.",
       "Copy the verbs it uses (decide, commit, consider, encourage…) and rate how strong the commitment is.",
       "Search for one sign of follow-up since 2024, and date it."
     ], write:"Action number and topic… Its verbs… How strong… Follow-up and date…"},
     {t:"Outline an argument", how:[
       "Pick a question, for example: “Has BRICS expansion strengthened the Global South’s voice?” or “Is AI governance fragmenting?”",
       "Fill in the six steps of the scaffold in one sentence each.",
       "Ask a friend or study partner to attack your claim; note their best point."
     ], write:"Question… 1 Claim… 2 Mechanism… 3 Evidence… 4 Counter-argument… 5 Reply and limits… 6 So what…"},
     {t:"Seminar questions", how:[
       "Choose one and write 250–350 words using the scaffold.",
       "1. Is global governance in crisis, in transition, or simply more plural than before?",
       "2. Do South-led initiatives complement or compete with the Bretton Woods institutions?",
       "3. Which matters more for the future of multilateralism: great-power rivalry or institutional design?"
     ], write:"My question… Claim… Evidence… Counter-argument… Limits…"}
    ],
    proof:"Notes on the strength of one Pact commitment and its follow-up, a six-step argument outline, and a 250–350-word seminar answer with a counter-argument."
   },
   read:[
    {book:"eir", where:"Chapter 17 “Managing Global Security Beyond ‘Pax Americana’” (Harvey M. Sapolsky)", note:"One scholar’s view of order after US predominance; compare it with the lesson’s other diagnoses."},
    {book:"ospol", where:"Chapter 15, section 15.4 “How Do Regional IGOs Contribute to Global Governance?”", note:"Background on regional organisations in global governance."},
    {book:"phrasebank", where:"General Functions: “Being critical” and “Being cautious”", note:"Phrases for presenting counter-arguments and hedging claims."}
   ]
  }
  ],
  checkpoint:["e4u13-q02","e4u13-q06","e4u13-q11","e4u13-q14","e4u13-q17","e4u13-q21","e4u13-q24","e4u13-q29","e4u13-q31","e4u13-q35","e4u13-q39","e4u13-q43"],
  codex:[
   {id:"global-governance-concept", title:"Global governance: the concept and its critics", aka:["governance without government","global governance"], tags:["global governance","theory","international organisations"],
    summary:"How rules are made and kept across borders without a world government, where the idea came from, and why critics are wary of it.",
    levels:{
     starter:[
      "There is no world government, yet ships, banks, airlines and internet addresses all follow common rules. **Global governance** is the name scholars give to the many ways those rules get made and kept: by states, international organisations, companies, experts, NGOs and networks, often working together.",
      "Think of a large apartment building with no owner living on site. Residents, a management company, the city’s fire rules and an informal residents’ committee all help keep order. No one is in charge of everything, but the building still works, more or less.",
      {key:"Governance means rule-making and order without a single authority at the top."},
      "The idea spread after the Cold War, when trade, finance, disease and pollution crossed borders faster than states could manage alone. Critics warn that the word can sound comforting while hiding who really holds power."
     ],
     builder:[
      "**Origins.** James Rosenau and Ernst-Otto Czempiel’s *Governance without Government* (1992) distinguished government (formal authority backed by police powers) from governance (activities backed by shared goals). The Commission on Global Governance’s *Our Global Neighbourhood* (1995) defined governance as “the sum of the many ways individuals and institutions, public and private, manage their common affairs”. The journal *Global Governance* began in 1995.",
      "**Uses of the term.** Dingwerth and Pattberg (2006) separate global governance as observable phenomena (studied from a perspective that looks at all actors) from global governance as a political programme (a normative vision, or for critics a hegemonic discourse). A simple version for papers: descriptive uses (what is happening), analytical uses (how to study it) and normative uses (what should be done). Good papers say which they mean.",
      "**Key vocabulary.** Rosenau’s **spheres of authority** (any actor whose rules people accept in an area) and **fragmegration** (integration and fragmentation at once); Weiss and Thakur’s five **governance gaps** (knowledge, norms, policy, institutions, compliance).",
      "**Using it.** Ask four questions of any case: who governs, by what authority, for whom, and with what effect? Mapping actors is a start, not an argument."
     ],
     pro:[
      "**Weiss’s critique.** Thomas G. Weiss (2000) argued that the term had become so elastic it risked explaining little, and that its twin, “good governance”, carried donor conditionality under a neutral-sounding label. His 2009 ISA presidential address asked why scholars had abandoned the idea of world government. With Rorden Wilkinson (2014) he called for research on complexity, authority, power and change.",
      "**Realist and critical doubts.** Drezner’s *All Politics Is Global* (2007) argues that great powers still set the important regulatory outcomes. Craig Murphy (2000) and others in the critical tradition see global governance as serving powerful interests (compare Robert Cox). Global South scholars note how few capitals and firms write “global” rules.",
      "**Later theory.** Michael Zürn’s *A Theory of Global Governance* (2018) treats international authority as real and therefore in need of legitimation, which explains rising contestation. Work on regime complexes and orchestration (Unit 9) studies how many institutions interact.",
      {tip:"In a seminar, avoid using “global governance” as a synonym for “the UN” or for “good outcomes”. It names a field of rule-making, which can be effective or not, fair or not."}
     ]
    },
    related:["private-authority","transnational-networks-governance","james-rosenau","multilateralism-debates","non-state-actors","united-nations"],
    read:[{book:"ospol", where:"Chapter 15, section 15.1 “The Problem of Global Governance”"}],
    sources:[{t:"Weiss, “Governance, good governance and global governance: conceptual and actual challenges”, Third World Quarterly 21(5), 2000", url:"https://doi.org/10.1080/713701075"},{t:"OpenStax, Introduction to Political Science, 15.1 “The Problem of Global Governance”", url:"https://openstax.org/books/introduction-political-science/pages/15-1-the-problem-of-global-governance"}],
    checked:"2026-11"},

   {id:"private-authority", title:"Private authority in global governance", aka:["market authority","moral authority","illicit authority","private regulation"], tags:["global governance","political economy","non-state actors"],
    summary:"When firms, standard-setters, NGOs or even criminal groups make rules that others accept, and the accountability questions this raises.",
    levels:{
     starter:[
      "Some of the rules you follow every day were written by no government. Credit rating agencies decide how risky a country’s bonds look; standards bodies decide the size of shipping containers; certification schemes decide which timber or fish can carry an eco-label.",
      "When people and governments accept such rules as binding in practice, scholars speak of **private authority**.",
      "A simple picture: a referee in a local football league may be a volunteer, not a police officer, but players accept her decisions because the league and the clubs recognise her role.",
      {key:"Private authority is rule-making by non-state actors that others accept as legitimate or unavoidable."},
      "It can make markets work smoothly and spread good practice, but it raises a question: who chose these rule-makers, and who can change their rules?"
     ],
     builder:[
      "**Three kinds.** Hall and Biersteker’s *The Emergence of Private Authority in Global Governance* (2002) distinguished **market authority** (based on expertise and market position, such as rating agencies and business standards), **moral authority** (based on principles and reputation, such as NGOs, religious bodies and many certification schemes) and **illicit authority** (based on coercion outside the law, such as organised crime and mercenaries).",
      "**Related work.** Susan Strange’s *The Retreat of the State* (1996) argued that markets were taking over state functions. Cutler, Haufler and Porter (1999) studied business rule-making. Sinclair (2005) studied rating agencies; Büthe and Mattli (2011) studied private standard-setters such as ISO.",
      "**Transnational private regulation** covers schemes like the Forest Stewardship Council (1993) and the Marine Stewardship Council (1997), whose labels retailers often require.",
      "**How to analyse a case.** Identify the rule-maker, its source of authority, who adopts the rule (firms, regulators, consumers), and who is affected but unrepresented."
     ],
     pro:[
      "**The state behind the private.** Much private authority depends on states: regulators write ratings into capital rules, and trade law may refer to international standards. Scholars speak of governance in the “shadow of hierarchy” when private rules exist because states could otherwise legislate.",
      "**Legitimacy and voice.** Producers in the Global South often meet certification standards set elsewhere, at their own cost. Supporters reply that multi-stakeholder boards include producers and NGOs, and that private schemes can move faster than treaties.",
      "**Illicit authority** is analytically useful but sensitive: describing armed groups or criminal networks as authorities explains how people experience order where the state is absent, without endorsing it.",
      {tip:"In a paper, avoid treating “private” as either good (efficient) or bad (unaccountable) by definition. Test the case: whose rules, adopted how, with what effects."}
     ]
    },
    related:["global-governance-concept","transnational-networks-governance","non-state-actors","international-political-economy"],
    read:[{book:"ospol", where:"Chapter 15, section 15.6 “Non-state Actors beyond NGOs”"}],
    sources:[{t:"Hall & Biersteker (eds.), The Emergence of Private Authority in Global Governance (Cambridge University Press, 2002)", url:"https://doi.org/10.1017/CBO9780511491238"},{t:"OpenStax, Introduction to Political Science, 15.6 “Non-state Actors beyond NGOs”", url:"https://openstax.org/books/introduction-political-science/pages/15-6-non-state-actors-beyond-ngos"}],
    checked:"2026-11"},

   {id:"transnational-networks-governance", title:"Transnational networks: officials, experts and activists", aka:["government networks","epistemic communities","transgovernmentalism","disaggregated state"], tags:["global governance","networks","non-state actors"],
    summary:"How regulators, judges, scientists and campaigners govern across borders through networks, and the accountability debate.",
    levels:{
     starter:[
      "Not all cooperation goes through foreign ministries. Banking supervisors talk to banking supervisors, judges read each other’s judgments, and scientists share data with scientists. These **networks** can shape rules worldwide.",
      "Think of a group chat of school principals from several towns. No one is in charge, but they share rules that work, and soon all the schools run similar timetables.",
      "Anne-Marie Slaughter called the official version **government networks**. Peter Haas called networks of experts with policy influence **epistemic communities**. Activists form networks too.",
      {key:"Networks govern by sharing information, setting standards and building trust among people who do the same job in different countries."},
      "Their strength is speed and expertise; their weakness is that the public rarely sees them at work."
     ],
     builder:[
      "**Government networks.** In *A New World Order* (2004) Slaughter described a **disaggregated state** whose parts (regulators, judges, legislators) work directly with foreign counterparts. Horizontal networks link equals, such as the Basel Committee on Banking Supervision (1974) or EMEAP for central banks in East Asia and the Pacific (1991); vertical networks link national officials with a supranational body, such as national courts and a regional court.",
      "**Epistemic communities.** Haas (1992) defined them as networks of professionals with recognised expertise and an authoritative claim to policy-relevant knowledge. Scientists shaped the ozone treaties; the IPCC (1988) institutionalised climate expertise.",
      "**Activist and city networks.** Keck and Sikkink’s boomerang pattern (Unit 2) shows how activists use foreign allies to pressure their own government. Cities coordinate through ICLEI (1990) and C40 (2005).",
      "**Analysing a network.** Who are the members, what do they share (data, standards, peer review), how do their outputs become binding (national law, market pressure), and who is left out?"
     ],
     pro:[
      "**Accountability.** Philip Alston (1997) warned that networks of officials could escape democratic control. Others note that regulators from smaller and poorer countries often adopt standards they did not help write, as with banking rules applied far beyond the Basel Committee’s members.",
      "**Effectiveness.** Supporters argue that networks spread best practice and build capacity faster than treaties. Sceptics ask whether they mostly diffuse the preferences of the largest markets.",
      "**Expertise and politics.** Epistemic authority can be contested, as debates over pandemic advice showed. Haas himself stressed that experts influence policy most when decision-makers face uncertainty and seek advice.",
      {tip:"Slaughter’s later book *The Chessboard and the Web* (2017) contrasts state-to-state rivalry (the chessboard) with networked governance (the web); it is a useful frame for comparing cases."}
     ]
    },
    related:["anne-marie-slaughter","private-authority","global-governance-concept","norm-dynamics"],
    sources:[{t:"Haas, “Introduction: Epistemic Communities and International Policy Coordination”, International Organization 46(1), 1992", url:"https://doi.org/10.1017/S0020818300001442"},{t:"Harvard Law School: Anne-Marie Slaughter (b. 1958), historical faculty page", url:"https://hls.harvard.edu/historical-faculty/anne-marie-slaughter-b-1958"}],
    checked:"2026-11"},

   {id:"james-rosenau", title:"James N. Rosenau", aka:["Rosenau","governance without government","fragmegration"], tags:["thinker","global governance","globalisation"],
    summary:"The American scholar (1924–2011) who helped found the study of global governance and wrote about turbulence and fragmegration.",
    levels:{
     starter:[
      "James N. Rosenau was an American political scientist who taught at Rutgers, Ohio State University, the University of Southern California and George Washington University. He died in September 2011, aged 86, after writing or editing more than 40 books.",
      "His big idea was that the world is governed by many overlapping **spheres of authority**, not only by states. With Ernst-Otto Czempiel he edited *Governance without Government* (1992), the book that made the phrase famous.",
      {key:"Rosenau asked who governs when no one is in charge, and answered: many actors at many levels."},
      "He also coined **fragmegration**, a blend of fragmentation and integration, for the way globalisation pulls the world together and apart at the same time."
     ],
     builder:[
      "**Key works.** *Turbulence in World Politics* (1990) argued that rising individual skills, new technologies and weakening authority structures were making world politics turbulent. *Governance without Government* (1992, with Czempiel) separated governance from government. “Governance in the Twenty-first Century” appeared in the first issue of *Global Governance* (1995). *Along the Domestic-Foreign Frontier* (1997) and *Distant Proximities* (2003) developed spheres of authority and fragmegration.",
      "**Earlier work.** In the 1960s Rosenau worked on foreign policy analysis, including “pre-theories” of foreign policy and *Linkage Politics* (1969) on ties between domestic and international politics.",
      "**How scholars use him today.** His actor-centred, multi-level view underpins the descriptive and analytical uses of global governance, and his attention to individuals and technology anticipated later work on networks and digital politics."
     ],
     pro:[
      "**Critiques.** Critics say his concepts are evocative but hard to measure, and that a focus on many spheres of authority can understate the continuing power of strong states (a realist point) or of capital (a critical point). Weiss and others built on him while warning that “governance” can hide power.",
      "**Legacy.** Rosenau’s distinction between government and governance is the starting point of most courses on the topic, and his insistence that the line between domestic and foreign was blurring is now commonplace.",
      {tip:"Cite him for the concept and the vocabulary; use later empirical work to test whether a given sphere of authority really governs."}
     ]
    },
    related:["global-governance-concept","levels-of-analysis","transnational-networks-governance"],
    sources:[{t:"Princeton Alumni Weekly: James N. Rosenau *57 (memorial)", url:"https://paw.princeton.edu/memorial/james-n-rosenau-57"}],
    checked:"2026-11"},

   {id:"anne-marie-slaughter", title:"Anne-Marie Slaughter", aka:["Slaughter","A New World Order","government networks"], tags:["thinker","global governance","international law"],
    summary:"The American international lawyer and scholar (b. 1958) who argued that networks of officials govern the world, and who also served in government.",
    levels:{
     starter:[
      "Anne-Marie Slaughter, born in 1958, is an American international lawyer and political scientist. She taught at Harvard Law School (1994–2002), was dean of Princeton’s Woodrow Wilson School (2002–2009), and served as Director of Policy Planning at the US State Department (2009–2011). In 2013 she became chief executive of the think tank New America.",
      "Her best-known academic idea is that the state is not one actor but many. Regulators, judges and legislators deal directly with their foreign counterparts, forming **government networks**.",
      {key:"Slaughter: the world is governed less by states as units than by networks of their parts."}
     ],
     builder:[
      "**Key works.** “The Real New World Order” (*Foreign Affairs*, 1997) and *A New World Order* (2004) set out the **disaggregated state** and horizontal and vertical government networks, with examples from banking regulators, courts and parliaments. *The Chessboard and the Web* (2017) contrasted state rivalry with networked strategy. She has also written on liberal internationalism and, outside IR, on work and care.",
      "**How scholars use her.** Her work is a standard reference on transgovernmentalism and on the role of courts and regulators in global governance, and a starting point for studies of financial and competition regulation."
     ],
     pro:[
      "**Critiques.** Philip Alston (1997) argued that her vision gave too little weight to democratic accountability and to actors outside government networks. Others say networks spread the preferences of powerful regulators to weaker ones. Realists doubt that networks matter when great powers disagree.",
      "**Practice and theory.** Her move between scholarship and government illustrates the policy relevance of the network view, and also why some critics read it as a programme for liberal order rather than a neutral description.",
      {tip:"Use Slaughter for the concept; test it with cases where networks failed or were bypassed."}
     ]
    },
    related:["transnational-networks-governance","global-governance-concept","liberalism-ir"],
    sources:[{t:"Harvard Law School: Anne-Marie Slaughter (b. 1958), historical faculty page", url:"https://hls.harvard.edu/historical-faculty/anne-marie-slaughter-b-1958"}],
    checked:"2026-11"},

   {id:"clubs-and-minilateralism", title:"Clubs and minilateralism", aka:["minilateralism","club governance","G7","Quad","plurilateralism"], tags:["global governance","multilateralism","diplomacy"],
    summary:"Small, informal groupings of states that cooperate outside universal organisations, with their strengths and critiques.",
    levels:{
     starter:[
      "Getting 193 countries to agree is slow. So governments often work in small groups that choose their own members: the G7, the G20, BRICS, the Quad and many others. Scholars call this **minilateralism** or **club governance**.",
      "Picture a big neighbourhood meeting that never decides anything, and a small committee of the most involved residents that gets the street lights fixed. The committee is faster, but the residents who were not invited may object to its decisions.",
      {key:"Clubs trade legitimacy and inclusion for speed and like-mindedness."},
      "Clubs usually have no treaty and no secretariat. A rotating chair hosts meetings, and other organisations carry out much of the work."
     ],
     builder:[
      "**Definitions.** Multilateralism means coordinating policy among three or more states (Keohane, 1990), ideally on general principles (Ruggie, 1992). Moisés Naím (2009) proposed minilateralism: the smallest number of countries with the largest impact, his “magic number”. Plurilateral agreements are opt-in deals within larger organisations.",
      "**Examples.** The G7 (1975) of large industrial democracies; the G20 (finance ministers from 1999, leaders from 2008); BRICS (summits from 2009, expanded from 2024); the Quad of Australia, India, Japan and the United States (revived 2017); ASEAN plus Three’s Chiang Mai Initiative (2000); the WTO’s interim appeal arrangement (2020).",
      "**How they work.** Presidencies set agendas; sherpas negotiate texts; leaders adopt declarations; IOs such as the IMF prepare and implement."
     ],
     pro:[
      "**Strengths claimed.** Speed, trust, crisis management, and the ability to unblock formal bodies, as the G20 did in 2008–09.",
      "**Critiques.** Exclusion (Norway’s foreign minister called the G20 self-appointed in 2010; Singapore convened the Global Governance Group of small states), weak accountability, fragmentation and forum shopping, and dependence on others to implement. Chris Brummer’s *Minilateralism* (2014) shows how clubs and soft law reshape economic statecraft.",
      "**Evaluating a club.** Separate outputs (declarations) from outcomes (implementation); compare with what the universal forum achieved on the same issue; ask who gained a voice and who lost one.",
      {tip:"Describe contested clubs, such as BRICS and the Quad, through their members’ own statements and their critics’, with dates."}
     ]
    },
    related:["g20","brics","global-governance-concept","multilateralism-debates","regional-organizations"],
    sources:[{t:"Naím, “Minilateralism: The magic number to get real international action”, Foreign Policy, 2009", url:"https://foreignpolicy.com/2009/06/21/minilateralism/"},{t:"Élysée: announcement of the G7 summit in Évian, 14–16 June 2026", url:"https://www.elysee.fr/emmanuel-macron/2025/06/17/annonce-du-prochain-sommet-du-g7-a-evian-du-14-au-16-juin-2026"}],
    checked:"2026-11"},

   {id:"g20", title:"The G20", aka:["Group of Twenty","G-20","G20 summit"], tags:["global governance","economics","clubs"],
    summary:"The grouping of 19 large economies, the EU and the AU that became the main forum for economic coordination after 2008.",
    levels:{
     starter:[
      "The **G20** brings together 19 countries, the European Union and, since 2023, the African Union. By its own figures its members produce about 85% of world output and are home to about two-thirds of the world’s people.",
      "It began in 1999 as a meeting of finance ministers after the Asian financial crisis. In November 2008, as the global financial crisis spread, leaders met for the first time, and in 2009 they named the G20 the “premier forum” for international economic cooperation.",
      {key:"The G20 is a club, not an organisation: no treaty, no secretariat, a presidency that rotates each year."},
      "It cannot pass binding laws; it works by leaders agreeing and then asking their ministries and bodies such as the IMF to act."
     ],
     builder:[
      "**Members.** Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Mexico, the Republic of Korea, Russia, Saudi Arabia, South Africa, Türkiye, the United Kingdom, the United States, the EU and the AU.",
      "**Machinery.** The presidency works in a troika with its predecessor and successor; leaders’ sherpas negotiate declarations; finance-track ministers and central bankers meet separately; engagement groups (business, civil society, think tanks, youth and others) feed in.",
      "**Record usually cited.** The April 2009 London summit’s package of about 1.1 trillion dollars for the IMF and others; the Financial Stability Board (2009); a Debt Service Suspension Initiative and a Common Framework for debt (2020); a Pandemic Fund (2022, under Indonesia); the AU’s admission (2023, under India); a Global Alliance against Hunger and Poverty (2024, under Brazil)."
     ],
     pro:[
      "**Global South presidencies** ran from Indonesia (2022) through India and Brazil to South Africa (2025), whose Johannesburg summit in November 2025 was the first in Africa; the US government did not attend.",
      "**As of November 2026.** The United States holds the presidency, plans a leaders’ summit in Florida in December 2026, and President Trump said South Africa would not be invited; South Africa and others criticised the decision. Analysts disagree on whether this marks a narrower agenda for one year or a lasting change.",
      "**Critiques.** Exclusion of most states (the 2010 Støre criticism; the Global Governance Group of small states), uneven implementation of commitments, and slow debt restructurings under the Common Framework.",
      {tip:"For evidence on implementation, use independent compliance studies rather than declarations."}
     ]
    },
    related:["clubs-and-minilateralism","bretton-woods-institutions","post-cold-war-order","brics"],
    sources:[{t:"Stimson Center, Global Governance Innovation Network: “The U.S. G20 Presidency: A Narrow Agenda in 2026”", url:"https://ggin.stimson.org/?p=11921"},{t:"Global Summitry Project: G20 Miami 2026, pre-summit discussion", url:"https://globalsummitryproject.com/global-summits/g20-miami-2026-pre-summit-discussion/"}],
    checked:"2026-11"},

   {id:"brics", title:"BRICS", aka:["BRIC","BRICS Plus","BRICS expansion","New Development Bank"], tags:["global governance","clubs","Global South"],
    summary:"A grouping that began as an investment acronym and expanded from 2024, with members’ and critics’ views attributed.",
    levels:{
     starter:[
      "**BRIC** was an acronym coined in 2001 by the economist Jim O’Neill for Brazil, Russia, India and China, four fast-growing economies. The governments turned it into a real grouping: the first leaders’ summit took place in Yekaterinburg, Russia, in June 2009. South Africa joined in 2010–11, making **BRICS**.",
      "Like the G20, BRICS has no secretariat or treaty; the chair rotates each year and decisions are taken by consensus.",
      {key:"BRICS is a club of large non-Western economies whose purpose and unity are debated."},
      "In 2014 members founded the New Development Bank, based in Shanghai, and a reserve arrangement for currency emergencies."
     ],
     builder:[
      "**Expansion.** At Johannesburg in 2023 members invited six countries. Egypt, Ethiopia, Iran and the United Arab Emirates joined from January 2024; Argentina declined; Saudi Arabia is listed by the group, though its own statements have been ambiguous. Indonesia joined in January 2025.",
      "**Partners.** The Kazan summit (2024) created a partner-country category; as of 2026 the ten partners are Belarus, Bolivia, Cuba, Kazakhstan, Malaysia, Nigeria, Thailand, Uganda, Uzbekistan and Vietnam.",
      "**2026.** India chaired BRICS and hosted the 18th summit in New Delhi on 12–13 September 2026, which adopted the New Delhi Declaration; China chairs in 2027.",
      "**Agenda.** Reform of the IMF, World Bank and UN Security Council; trade and payments in local currencies; development finance; health and technology cooperation."
     ],
     pro:[
      "**Interpretations, attributed.** Member governments present BRICS as a voice for the Global South and a reform coalition, not an anti-Western bloc. Some Western officials and analysts see it as a platform for China’s and Russia’s challenge to Western-led institutions. Other scholars stress heterogeneity: democracies and autocracies, rivals such as India and China, and different views on currency questions (India’s government has said it does not seek to replace the dollar).",
      "**Researching it.** Separate summit declarations from implemented projects (for example New Development Bank lending), and track which members join which initiatives.",
      {tip:"Membership changes quickly and sources differ, especially on Saudi Arabia: always date your list and cite where it comes from."}
     ]
    },
    related:["clubs-and-minilateralism","g20","post-cold-war-order","multilateralism-debates"],
    sources:[{t:"Business Today: BRICS decoded: origin, evolution, members and partners (10 September 2026)", url:"https://www.businesstoday.in/india/story/bt-explainerbrics-decoded-the-origin-evolution-members-partners-and-future-of-the-summit-554110-2026-09-10"},{t:"Prime Minister of India: BRICS New Delhi Declaration (12 September 2026)", url:"https://www.pmindia.gov.in/en/news_updates/brics-new-delhi-declaration-building-for-resilience-"}],
    checked:"2026-11"},

   {id:"global-health-architecture", title:"The global health architecture", aka:["Gavi","Global Fund","CEPI","COVAX","global health partnerships"], tags:["global governance","health","partnerships"],
    summary:"The crowded field of IOs, partnerships, regional bodies and private actors that govern global health, and what COVAX showed.",
    levels:{
     starter:[
      "Global health is governed not only by the WHO. Money and influence also sit with the World Bank, UNICEF, partnerships such as **Gavi, the Vaccine Alliance** (2000) and the **Global Fund** (2002), the vaccine research coalition **CEPI** (2017), regional bodies such as PAHO and Africa CDC, and private foundations and companies.",
      "Think of a hospital where the director sets the rules but different wards are paid for by different donors, each with its own priorities. Coordination is hard.",
      {key:"Global health is one of the most crowded fields of global governance: many actors, many funders, no single boss."},
      "During COVID-19, a partnership called **COVAX** tried to share vaccines fairly. It delivered nearly 2 billion doses, but late."
     ],
     builder:[
      "**Partnership model.** Gavi pools demand and uses tools such as advance market commitments (first used for pneumococcal vaccines in 2009) so that companies supply lower-income countries at lower prices. The Global Fund finances programmes against AIDS, tuberculosis and malaria.",
      "**COVAX.** Launched in 2020 within the ACT-Accelerator and co-led by CEPI, Gavi and the WHO, with UNICEF delivering, it delivered nearly 2 billion doses to 146 economies before closing on 31 December 2023. A preliminary Gavi assessment, cited by the WHO, estimates it helped avert at least 2.7 million deaths in the lower-income economies it supported. Richer governments’ advance purchases and export restrictions delayed its supplies (“vaccine nationalism”).",
      "**Framings.** Global health security (stopping outbreaks) and global health equity (fair access) often pull in different directions."
     ],
     pro:[
      "**Vertical versus horizontal.** Disease-specific (vertical) funding shows quick results; critics argue it neglects whole health systems (horizontal investment).",
      "**Accountability.** Foundations and firms sit on partnership boards without electorates; defenders reply that they add money and speed.",
      "**Funding politics.** In June 2025 the US government said it would stop funding Gavi, and Gavi’s pledging summit that month fell short of its target; in January 2026 the United States completed its withdrawal from the WHO.",
      "**Intellectual property.** India and South Africa proposed a WTO waiver in 2020; a narrower decision on vaccine patents followed in June 2022.",
      {tip:"Fidler (2004) on post-Westphalian health governance and Youde (2012) are good starting readings."}
     ]
    },
    related:["global-health-governance","pandemic-agreement","human-security","collective-action-problems"],
    sources:[{t:"WHO: COVID-19 vaccinations shift to regular immunization as COVAX draws to a close (19 December 2023)", url:"https://who.int/news/item/19-12-2023-covid-19-vaccinations-shift-to-regular-immunization-as-covax-draws-to-a-close"},{t:"WHO: Amended International Health Regulations enter into force (19 September 2025)", url:"https://www.who.int/news/item/19-09-2025-amended-international-health-regulations-enter-into-force"}],
    checked:"2026-11"},

   {id:"pandemic-agreement", title:"The WHO Pandemic Agreement and the PABS annex", aka:["pandemic treaty","PABS","pathogen access and benefit sharing","IHR amendments 2024"], tags:["global governance","health","treaties"],
    summary:"The treaty adopted in May 2025, its pathogen-sharing annex still under negotiation as of November 2026, and the 2024 IHR amendments.",
    levels:{
     starter:[
      "After COVID-19, governments negotiated a new treaty to prepare for the next pandemic. The World Health Assembly adopted the **WHO Pandemic Agreement** on 20 May 2025. It is only the second treaty negotiated under the WHO, after the tobacco convention.",
      "But adopting a text is not the end. The Agreement can open for signature only after members adopt an annex on sharing pathogens and the benefits that come from them, called **PABS**. As of November 2026 that annex was still being negotiated.",
      {key:"As of November 2026 no country had signed the Pandemic Agreement, because it was not yet open for signature."},
      "Separately, amendments to the International Health Regulations adopted in 2024 entered into force in September 2025."
     ],
     builder:[
      "**Contents.** Prevention and One Health; research and development; technology transfer on voluntary and mutually agreed terms; supply chains and logistics; financing; and a clause stating that the WHO cannot direct national laws or impose measures such as travel bans, lockdowns or vaccine mandates. It enters into force after 60 ratifications.",
      "**PABS.** Countries would share pathogen samples and genetic data quickly; participating manufacturers would give the WHO rapid access to 20% of their real-time production of pandemic products, part donated and the rest at affordable prices.",
      "**Timeline.** Committee vote 124–0 with 11 abstentions (19 May 2025); an Intergovernmental Working Group negotiating the annex from July 2025; the May 2026 Assembly, which had been meant to receive the annex, asked instead for a result at a special session in 2026 or at the Assembly in May 2027; a ninth negotiating round on 2–13 November 2026."
     ],
     pro:[
      "**Positions, attributed.** Many African and other developing countries seek binding, predictable benefits in return for sharing. Manufacturers and several high-income governments favour fast, simple access and voluntary terms. Some critics object on sovereignty grounds; the WHO points to the sovereignty clause.",
      "**IHR amendments (2024).** A new “pandemic emergency” level above a PHEIC; National IHR Authorities; equity commitments and a Coordinating Financial Mechanism; a States Parties Committee. They entered into force on 19 September 2025; eleven States Parties rejected them.",
      "**Legal form.** IHR amendments bind parties unless rejected; the Pandemic Agreement binds only states that ratify it.",
      {tip:"This is fast-moving. Before writing, check the WHO’s page on the Intergovernmental Working Group and date your sentence."}
     ]
    },
    related:["global-health-governance","global-health-architecture","international-law"],
    sources:[{t:"WHO: Intergovernmental Working Group on the WHO Pandemic Agreement", url:"https://www.who.int/about/governance/world-health-assembly/intergovernmental-working-group-on-the-who-pandemic-agreement"},{t:"WHO: Seventy-ninth World Health Assembly, daily update, 19 May 2026", url:"https://www.who.int/news/item/19-05-2026-seventy-ninth-world-health-assembly---daily-update--19-may-2026"},{t:"CIDRAP: World Health Assembly adopts Pandemic Agreement, ups funding for WHO", url:"https://www.cidrap.umn.edu/pandemic-influenza/world-health-assembly-adopts-pandemic-agreement-ups-funding-who"}],
    checked:"2026-11"},

   {id:"internet-governance", title:"Internet governance", aka:["ICANN","IGF","multistakeholderism","cyber sovereignty","WSIS"], tags:["global governance","technology","internet"],
    summary:"Who runs the internet’s core functions, the multistakeholder and sovereignty models, and the UN forums where they meet.",
    levels:{
     starter:[
      "No single body runs the internet. Engineers in open groups write its protocols; a non-profit called **ICANN** coordinates domain names; regional registries hand out addresses; companies own cables and platforms; and governments pass laws.",
      "A useful picture is a city’s water system: engineers set pipe standards, a utility manages the mains, landlords maintain buildings, and the city council writes health rules. Each layer has different governors.",
      {key:"Internet governance is layered, and the main dispute is over how much governments, rather than mixed communities of stakeholders, should decide."},
      "The UN hosts a yearly Internet Governance Forum where all these groups talk, but it does not make binding decisions."
     ],
     builder:[
      "**Definition.** The World Summit on the Information Society (Geneva 2003, Tunis 2005) defined internet governance as the development and application by governments, the private sector and civil society, in their respective roles, of shared principles, norms, rules, procedures and programmes that shape the internet.",
      "**Institutions.** The IETF (protocols); ICANN (1998) and the IANA functions (names, numbers, root zone); five regional internet registries such as APNIC; W3C (web standards); the ITU (telecoms). The US government’s IANA contract ended in October 2016. The IGF, first held in 2006, became a permanent UN forum through the General Assembly’s WSIS+20 review in December 2025.",
      "**Models.** Multistakeholder supporters (the US, EU, Japan and others, the technical community, many civil society groups) stress openness and bottom-up processes. Supporters of a larger state role (China, Russia and others) stress sovereignty, security and equal votes in intergovernmental bodies."
     ],
     pro:[
      "**Cyber sovereignty.** China’s government promotes it at the World Internet Conference in Wuzhen (since 2014); Russia passed a “sovereign internet” law in 2019. Critics warn of a splinternet; Mueller (2017) examines how far fragmentation goes.",
      "**Critiques of multistakeholderism.** Participation is uneven: firms and experts from rich countries dominate many processes. Defenders reply that open processes at least allow anyone to take part.",
      "**Infrastructure as politics.** DeNardis (2014) shows that design choices in protocols and the domain name system carry political consequences.",
      {tip:"Frame the debate by actors and arguments, not as “freedom versus control”: both camps invoke rights and security."}
     ]
    },
    related:["how-the-internet-works","dns","platform-governance","cyber-norms","ai-governance"],
    sources:[{t:"Internet Society: WSIS+20 reaffirms multistakeholder governance and a lasting IGF (December 2025)", url:"https://www.internetsociety.org/blog/2025/12/wsis20-reaffirms-multistakeholder-governance-and-a-lasting-igf"},{t:"ICANN blog: UN General Assembly adopts WSIS+20 (17 December 2025)", url:"https://www.icann.org/en/blogs/details/un-general-assembly-adopts-wsis20-icann-highlights-the-role-of-collaboration-17-12-2025-en"}],
    checked:"2026-11"},

   {id:"cyber-norms", title:"Cyber norms and cybercrime treaties", aka:["UN GGE","OEWG","Global Mechanism on ICT security","Budapest Convention","UN Convention against Cybercrime"], tags:["global governance","security","technology"],
    summary:"How the UN built voluntary norms for state behaviour in cyberspace, and the two competing cybercrime treaties.",
    levels:{
     starter:[
      "States spy, sabotage and steal through computer networks, and criminals operate across borders. Since the 2000s governments have tried to agree rules for this.",
      "At the UN, small groups of experts first agreed that existing **international law applies** to cyberspace (2013) and then eleven **voluntary norms** of responsible behaviour (2015), such as not deliberately damaging critical infrastructure that serves the public. Later, open groups of all UN members continued the talks.",
      {key:"Cyber governance relies mostly on voluntary norms and existing international law, not on a cyber treaty for state behaviour."},
      "Crime is different: there are two treaties, the Council of Europe’s Budapest Convention (2001) and a UN convention adopted in 2024."
     ],
     builder:[
      "**The UN process.** Groups of Governmental Experts (GGE) reported by consensus in 2013 and 2015 but failed in 2017. From 2019 an Open-ended Working Group (OEWG), proposed by Russia and open to all members, ran alongside a US-backed GGE; both reported in 2021. A second OEWG (2021–2025) adopted a final report by consensus in July 2025 and created a permanent Global Mechanism on ICT security from 2026.",
      "**Why norms, not a treaty?** States disagree on how law applies (for example, when a cyber operation counts as an armed attack), on attribution, and on whether information content is itself a security threat.",
      "**Cybercrime.** The Budapest Convention has parties beyond Europe, including Japan. The UN Convention against Cybercrime was adopted in December 2024 and opened for signature in Hanoi in October 2025, where 72 states signed."
     ],
     pro:[
      "**Forum politics.** The GGE–OEWG split shows forum shopping: smaller expert groups favoured by some Western states versus universal groups favoured by Russia, China and many developing countries.",
      "**Debates on the UN cybercrime treaty, attributed.** Supporters say it gives all states a voice and helps capacity-building; human rights groups and some companies warned that broad powers could enable surveillance of journalists and activists.",
      "**Expert work.** The *Tallinn Manual* (2013; 2.0, 2017) records the views of a group of legal experts on how international law applies; it is not an official text.",
      {tip:"When citing a norm, give its source (2015 GGE report) and note that it is voluntary."}
     ]
    },
    related:["security-studies","internet-governance","international-law","ai-governance"],
    sources:[{t:"Global Partners Digital: The OEWG ends and a new UN cybersecurity permanent mechanism is born (July 2025)", url:"https://www.gp-digital.org/the-oewg-ends-and-a-new-un-cybersecurity-permanent-mechanism-is-born/"},{t:"Viet Nam News: Hanoi Convention sees 72 signatories", url:"https://vietnamnews.vn/politics-laws/1728169/hanoi-convention-sees-72-signatories-showing-shared-vision-in-safe-cyberspace.html"}],
    checked:"2026-11"},

   {id:"ai-governance", title:"AI governance as of 2026", aka:["artificial intelligence governance","EU AI Act","Hiroshima AI Process","UN Scientific Panel on AI","Global Dialogue on AI Governance"], tags:["global governance","technology","AI"],
    summary:"The patchwork of international, regional and national rules on artificial intelligence as of November 2026.",
    levels:{
     starter:[
      "Artificial intelligence is governed by a patchwork. There are international principles (OECD, UNESCO), a code of conduct from the G7, a Council of Europe treaty, a series of summits, new UN bodies, and national or regional laws such as the EU’s AI Act.",
      "Think of road safety in the early days of cars: some towns set speed limits, carmakers added brakes, insurers wrote rules, and only later did countries agree on common signs. AI governance is at an early, mixed stage.",
      {key:"There is no single global AI regulator; rules come from many forums that overlap."},
      "Governments disagree on the balance between innovation, safety, rights and security, and each presents its own approach as the right one."
     ],
     builder:[
      "**International pieces.** OECD AI Principles (2019, updated 2024); UNESCO Recommendation on the Ethics of AI (2021); G7 Hiroshima AI Process (2023); summits at Bletchley Park (2023), Seoul (2024), Paris (2025) and New Delhi (2026); the Council of Europe Framework Convention (opened for signature 2024), the first binding international AI treaty.",
      "**UN.** The advisory body’s report *Governing AI for Humanity* (September 2024) made seven recommendations. The Global Digital Compact (September 2024) committed members to international AI governance. General Assembly resolution 79/325 (August 2025) created a 40-member Independent International Scientific Panel on AI (appointed February 2026, co-chaired by Yoshua Bengio and Maria Ressa; preliminary report July 2026) and a Global Dialogue on AI Governance (launched September 2025; first full session Geneva, July 2026; next in New York, 2027)."
     ],
     pro:[
      "**EU.** AI Act in force August 2024; bans from February 2025; general-purpose AI duties from August 2025; transparency duties from August 2026; the Digital Omnibus (in force 27 July 2026) moved most high-risk duties to 2 December 2027 (listed uses) or 2 August 2028 (products) and added bans on AI generating non-consensual intimate imagery and child sexual abuse material.",
      "**China.** Service-specific rules on algorithms (2022), deep synthesis (2023), generative AI (2023) and labelling (2025); a Global AI Governance Initiative (2023) and a proposed World AI Cooperation Organization (2025).",
      "**United States.** 2023 executive order revoked in January 2025; AI Action Plan (July 2025) favours innovation and exports; a December 2025 executive order challenges state AI laws, which some states contest.",
      "**Japan and South Korea.** Japan’s AI Promotion Act (2025), with no penalties; South Korea’s AI Basic Act, in force January 2026.",
      {tip:"Bradford’s typology (market-driven, state-driven, rights-driven) is a good frame; test it against cases rather than assume it."}
     ]
    },
    related:["internet-governance","cyber-norms","platform-governance","synthetic-media-politics","ai-generated-content","pact-for-the-future"],
    read:[{book:"govai", where:"Executive summary and recommendations"}],
    sources:[{t:"United Nations: Independent International Scientific Panel on AI, FAQ", url:"https://www.un.org/independent-international-scientific-panel-ai/en/faq"},{t:"UN Digital Library: Governing AI for Humanity: Final Report (2024)", url:"https://digitallibrary.un.org/record/4062495"},{t:"EUR-Lex: Regulation (EU) 2026/1744 (Digital Omnibus on AI), Official Journal, 24 July 2026", url:"https://eur-lex.europa.eu/eli/reg/2026/1744/oj"}],
    checked:"2026-11"},

   {id:"pact-for-the-future", title:"The Pact for the Future (2024)", aka:["Summit of the Future","Global Digital Compact","Declaration on Future Generations"], tags:["global governance","united nations","reform"],
    summary:"The UN outcome document adopted in September 2024, its contents, and the debate about whether it matters.",
    levels:{
     starter:[
      "In September 2024 world leaders met at the UN for a **Summit of the Future** and adopted the **Pact for the Future**, a long list of promises to make global cooperation work better.",
      "It has 56 actions in five chapters: development and its financing; peace and security; science, technology and digital cooperation; youth and future generations; and transforming global governance. Two annexes are the **Global Digital Compact** and a **Declaration on Future Generations**.",
      {key:"The Pact is a political commitment by UN members, not a treaty."},
      "Russia proposed an amendment that members set aside (143 votes to 7, with 15 abstentions); the Pact was then adopted without a vote."
     ],
     builder:[
      "**Background.** The Secretary-General’s *Our Common Agenda* (2021) proposed the summit.",
      "**Governance commitments.** Make the Security Council more representative, with Africa’s under-representation as a priority; reform the international financial architecture to give developing countries more voice; strengthen the General Assembly and the Peacebuilding Commission.",
      "**Digital.** The Global Digital Compact covers connectivity, an open and secure internet, human rights online, data governance and AI governance; it led to the 2025 resolution creating a scientific panel and a global dialogue on AI.",
      "**Follow-up.** The UN80 Initiative (from March 2025) and reviews of implementation continue as of 2026."
     ],
     pro:[
      "**Readings, attributed.** Supporters, including many small and developing states, see a rare consensus that keeps reform alive. Critics note that much of the language is aspirational (“we will consider”, “we encourage”) and that no deadline binds Security Council reform. Russia, whose amendment failed, criticised the process.",
      "**Research use.** The Pact is a good text for analysing commitment strength: compare verbs, deadlines and follow-up mechanisms across chapters.",
      {tip:"Cite the Pact by action number and date, and pair it with evidence of follow-up."}
     ]
    },
    related:["united-nations","multilateralism-debates","ai-governance","un-security-council"],
    sources:[{t:"Earth Negotiations Bulletin (IISD): Summit of the Future daily report, 22 September 2024", url:"https://enb.iisd.org/summit-future-daily-report-22sep2024"}],
    checked:"2026-11"},

   {id:"multilateralism-debates", title:"The future of multilateralism: the debate", aka:["gridlock","contested multilateralism","multiplex world","polycrisis","order transition"], tags:["global governance","theory","current debates"],
    summary:"Rival diagnoses of global governance today, from gridlock to a multiplex world, and how to use them without predicting.",
    levels:{
     starter:[
      "Many observers say multilateralism is in trouble: the UN Security Council is often deadlocked, major powers have left some organisations, and rival groupings have multiplied. Others say it is not dying but changing shape, with more actors and more regional and South-led initiatives.",
      "Think of a family business founded by a few people that now has many more partners. Old decision rules no longer fit, and the partners argue about whether to reform the company, split it, or run several businesses side by side.",
      {key:"The debate is less about whether multilateralism survives than about what form it takes and whom it serves."}
     ],
     builder:[
      "**Diagnoses.** Hale, Held and Young’s *Gridlock* (2013): cooperation stalls through wider power distribution, harder problems, institutional inertia and fragmentation. Zürn (2018): the authority of international institutions creates legitimacy problems and contestation. Morse and Keohane (2014): contested multilateralism as states shift between institutions. Stuenkel (2016): emerging powers build parallel institutions that mostly complement existing ones. Acharya (2014): a multiplex world.",
      "**Reform efforts.** Inside the UN: the Pact for the Future (2024) and UN80 (2025). Outside: the AIIB (2016), the New Development Bank, the Bridgetown Initiative (2022), African Union projects, India’s Voice of the Global South summits (from 2023), China’s global initiatives (2021–2025)."
     ],
     pro:[
      "**Yardsticks.** Effectiveness (does it solve problems?) and legitimacy (do those affected accept the rule-makers?) often pull apart, and much disagreement is about which should count most.",
      "**Scenarios as tools.** Renewal, fragmentation and multiplex stories each point to different evidence; most cases mix them. Use them to structure comparison, not to forecast.",
      "**Polycrisis.** A term with roots in Edgar Morin’s work in the 1990s, popularised by Adam Tooze, for interacting crises.",
      {tip:"Date every claim, attribute every position, and separate outputs (declarations) from outcomes (behaviour)."}
     ]
    },
    related:["post-cold-war-order","pact-for-the-future","clubs-and-minilateralism","global-governance-concept","amitav-acharya"],
    sources:[{t:"Earth Negotiations Bulletin (IISD): Summit of the Future daily report, 22 September 2024", url:"https://enb.iisd.org/summit-future-daily-report-22sep2024"},{t:"OpenStax, Introduction to Political Science, 15.1 “The Problem of Global Governance”", url:"https://openstax.org/books/introduction-political-science/pages/15-1-the-problem-of-global-governance"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"global-governance", term:"Global governance", def:"The many ways rules are made and kept across borders without a world government, by states, international organisations, firms, experts, NGOs and networks.", codex:"global-governance-concept"},
   {id:"governance-without-government", term:"Governance without government", def:"Rosenau and Czempiel’s phrase (1992) for order based on shared goals and accepted rules rather than on a central authority with police powers.", codex:"global-governance-concept"},
   {id:"sphere-of-authority", term:"Sphere of authority", def:"Rosenau’s term for any actor or arrangement whose rules people accept in some area, from a ministry to a rating agency or a religious body.", codex:"james-rosenau"},
   {id:"fragmegration", term:"Fragmegration", def:"Rosenau’s blend of fragmentation and integration: globalisation pulls the world together and apart at the same time.", codex:"james-rosenau"},
   {id:"good-governance", term:"Good governance", def:"A 1990s donor term for accountable, transparent, efficient government, often used as a condition for aid; critics say it carries a political programme under a neutral label.", codex:"global-governance-concept"},
   {id:"governance-gaps", term:"Governance gaps", def:"Weiss and Thakur’s five gaps in global governance: in knowledge, norms, policy, institutions and compliance.", codex:"global-governance-concept"},
   {id:"private-authority", term:"Private authority", def:"Rule-making by non-state actors, such as firms, standard-setters or NGOs, that others accept as legitimate or unavoidable.", codex:"private-authority"},
   {id:"market-authority", term:"Market authority", def:"Private authority based on expertise and market position, such as that of credit rating agencies or standards bodies (Hall and Biersteker).", codex:"private-authority"},
   {id:"illicit-authority", term:"Illicit authority", def:"Private authority backed by coercion outside the law, such as that of organised crime groups or mercenaries (Hall and Biersteker).", codex:"private-authority"},
   {id:"transnational-private-regulation", term:"Transnational private regulation", def:"Rules written and applied across borders by non-state bodies, such as eco-labels and certification schemes for timber or seafood.", codex:"private-authority"},
   {id:"accountability-ir", term:"Accountability (in global governance)", def:"Whether those who make rules must explain their decisions to, and can be sanctioned or changed by, the people affected.", codex:"global-governance-concept"},
   {id:"government-network", term:"Government network", def:"Slaughter’s term for regulators, judges or legislators working directly with their counterparts in other countries.", codex:"transnational-networks-governance"},
   {id:"disaggregated-state", term:"Disaggregated state", def:"Slaughter’s idea that the state acts internationally not as one unit but through its separate parts, such as agencies and courts.", codex:"transnational-networks-governance"},
   {id:"epistemic-community", term:"Epistemic community", def:"A network of professionals with recognised expertise and an authoritative claim to policy-relevant knowledge (Haas, 1992).", codex:"transnational-networks-governance"},
   {id:"multilateralism", term:"Multilateralism", def:"Coordinating policy among three or more states, ideally on general principles that apply to all members alike.", codex:"clubs-and-minilateralism"},
   {id:"minilateralism", term:"Minilateralism", def:"Cooperation among the smallest number of countries needed for the largest impact on a problem (Naím, 2009).", codex:"clubs-and-minilateralism"},
   {id:"club-governance", term:"Club governance", def:"Cooperation through small, informal groupings whose members choose each other, usually without a treaty or secretariat.", codex:"clubs-and-minilateralism"},
   {id:"g7", term:"G7", def:"A club of seven large industrial democracies (Canada, France, Germany, Italy, Japan, the UK and the US), with the EU taking part; leaders have met since 1975.", codex:"clubs-and-minilateralism"},
   {id:"g20", term:"G20", def:"A forum of 19 countries, the EU and the African Union for economic coordination; finance ministers since 1999, leaders since 2008.", codex:"g20"},
   {id:"g20-troika", term:"Troika (G20)", def:"The current, previous and next G20 presidencies working together to give continuity to a group with no secretariat.", codex:"g20"},
   {id:"sherpa", term:"Sherpa", def:"A leader’s personal representative who negotiates a summit’s agenda and declaration in advance.", codex:"g20"},
   {id:"brics", term:"BRICS", def:"A grouping that began with Brazil, Russia, India and China (summits from 2009), added South Africa in 2010–11 and expanded from 2024.", codex:"brics"},
   {id:"brics-partner-country", term:"BRICS partner country", def:"A category created at the 2024 Kazan summit for countries linked to BRICS without full membership; ten as of 2026.", codex:"brics"},
   {id:"pheic", term:"Public health emergency of international concern (PHEIC)", def:"An extraordinary event that the WHO Director-General declares a risk to other countries through international spread, needing a coordinated response.", codex:"pandemic-agreement"},
   {id:"pandemic-emergency", term:"Pandemic emergency", def:"A new, higher alert level above a PHEIC, added by the 2024 amendments to the International Health Regulations (in force September 2025).", codex:"pandemic-agreement"},
   {id:"gavi", term:"Gavi, the Vaccine Alliance", def:"A public–private partnership founded in 2000 that helps lower-income countries buy and deliver vaccines.", codex:"global-health-architecture"},
   {id:"covax", term:"COVAX", def:"The vaccine pillar of the ACT-Accelerator (2020–2023), co-led by CEPI, Gavi and the WHO with UNICEF, which delivered nearly 2 billion COVID-19 doses.", codex:"global-health-architecture"},
   {id:"vaccine-nationalism", term:"Vaccine nationalism", def:"Governments securing vaccines for their own populations first, for example through large advance contracts or export limits, at the expense of others.", codex:"global-health-architecture"},
   {id:"pandemic-agreement", term:"WHO Pandemic Agreement", def:"A treaty on pandemic prevention, preparedness and response adopted by the World Health Assembly in May 2025; not yet open for signature as of November 2026.", codex:"pandemic-agreement"},
   {id:"pabs-system", term:"PABS system", def:"The proposed Pathogen Access and Benefit-Sharing system: rapid sharing of pathogen samples and data in exchange for shared vaccines, tests and treatments.", codex:"pandemic-agreement"},
   {id:"one-health", term:"One Health", def:"An approach that links human, animal and environmental health, since many new diseases pass from animals to people.", codex:"pandemic-agreement"},
   {id:"internet-governance", term:"Internet governance", def:"The development and application by governments, the private sector and civil society of shared rules and procedures that shape the internet (WSIS definition, 2005).", codex:"internet-governance"},
   {id:"multistakeholderism", term:"Multistakeholderism", def:"Governing through processes in which governments, firms, technical experts and civil society take part, rather than governments alone.", codex:"internet-governance"},
   {id:"cyber-sovereignty", term:"Cyber sovereignty", def:"The claim, promoted especially by China’s government, that each state has the right to govern its own cyberspace.", codex:"internet-governance"},
   {id:"splinternet", term:"Splinternet", def:"A feared or partial break-up of the global internet into national or bloc networks with different rules and technical standards.", codex:"internet-governance"},
   {id:"icann", term:"ICANN", def:"The Internet Corporation for Assigned Names and Numbers, a non-profit founded in 1998 that coordinates domain names and related identifiers.", codex:"internet-governance"},
   {id:"iana-stewardship-transition", term:"IANA stewardship transition", def:"The end of the US government’s contract over core internet functions in October 2016, handing oversight to ICANN’s global community.", codex:"internet-governance"},
   {id:"internet-governance-forum", term:"Internet Governance Forum (IGF)", def:"A UN forum for open discussion of internet policy among all stakeholders, first held in 2006 and made permanent in December 2025.", codex:"internet-governance"},
   {id:"un-gge", term:"UN Group of Governmental Experts (GGE)", def:"Small UN groups of state experts on ICT security, which agreed in 2013 that international law applies online and in 2015 on eleven voluntary norms.", codex:"cyber-norms"},
   {id:"oewg-ict", term:"Open-ended Working Group (OEWG) on ICT security", def:"A UN working group open to all member states (2019–2021 and 2021–2025) that continued the cyber norms talks and created a permanent Global Mechanism.", codex:"cyber-norms"},
   {id:"voluntary-cyber-norms", term:"Voluntary cyber norms", def:"Non-binding rules of responsible state behaviour online, such as the eleven agreed in the 2015 GGE report.", codex:"cyber-norms"},
   {id:"budapest-convention", term:"Budapest Convention", def:"The Council of Europe Convention on Cybercrime (2001), open to non-European states, on criminalising cybercrime and cooperation between police.", codex:"cyber-norms"},
   {id:"ai-governance", term:"AI governance", def:"The principles, laws, standards and institutions that shape how artificial intelligence is developed and used.", codex:"ai-governance"},
   {id:"risk-based-regulation", term:"Risk-based regulation", def:"Rules that set stricter duties the greater the risk of a use, as in the EU AI Act’s tiers from banned to minimal risk.", codex:"ai-governance"},
   {id:"general-purpose-ai", term:"General-purpose AI model", def:"An AI model trained on broad data that can do many different tasks, such as the large language models behind chatbots.", codex:"ai-governance"},
   {id:"ai-safety-institute", term:"AI safety institute", def:"A government body that tests and studies advanced AI models; several were set up from 2023 and later linked in an international network.", codex:"ai-governance"},
   {id:"global-digital-compact", term:"Global Digital Compact", def:"An annex to the Pact for the Future (2024): UN members’ political commitments on connectivity, an open internet, rights online, data and AI governance.", codex:"pact-for-the-future"},
   {id:"pact-for-the-future", term:"Pact for the Future", def:"A UN outcome document adopted in September 2024 with 56 actions on development, security, technology, future generations and global governance reform.", codex:"pact-for-the-future"},
   {id:"multiplex-world", term:"Multiplex world", def:"Acharya’s image of a world order with many actors, regions and overlapping orders, none dominant, like a cinema showing many films at once.", codex:"multilateralism-debates"},
   {id:"polycrisis", term:"Polycrisis", def:"Several crises, such as pandemic, war, climate and debt, interacting so that the whole is worse than the sum of its parts.", codex:"multilateralism-debates"},
   {id:"south-south-cooperation", term:"South–South cooperation", def:"Exchange of resources, knowledge and technology among developing countries, a tradition that runs from Bandung (1955) to today.", codex:"multilateralism-debates"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u13-q01", lesson:"e4u13-l1", level:1, q:"What distinction did Rosenau draw between government and governance?", options:[
     {t:"Government rests on formal authority and police powers; governance on shared goals that need not be backed by force", ok:true, why:"Right. This is the core distinction of *Governance without Government* (1992)."},
     {t:"Government is national and governance is always global", why:"Rosenau saw governance at every level, from families to IOs."},
     {t:"Governance means the same as world government", why:"The point is the opposite: rule without a world government."},
     {t:"Government is private and governance is public", why:"Governments are public; governance can be public, private or mixed."}]},
   {id:"e4u13-q02", lesson:"e4u13-l1", level:2, q:"A paper says: “Fisheries rules now come from treaties, private eco-labels and retailers.” Then: “The world therefore needs more global governance.” What has the author done?", options:[
     {t:"Shifted from a descriptive use of the term to a normative one without saying so", ok:true, why:"Right. As Dingwerth and Pattberg warn, describing governance and calling for more of it are different uses: say which one you mean."},
     {t:"Made two analytical claims", why:"The second sentence is a claim about what ought to be done, not about how to study the issue."},
     {t:"Used the term correctly in a single sense throughout", why:"The meaning changes between the sentences."},
     {t:"Proved that eco-labels work", why:"Nothing in either sentence tests effectiveness."}]},
   {id:"e4u13-q03", lesson:"e4u13-l1", level:1, q:"Which co-chairs led the Commission on Global Governance, which published *Our Global Neighbourhood* (1995)?", options:[
     {t:"Ingvar Carlsson and Shridath Ramphal", ok:true, why:"Correct: a former Swedish prime minister and a former Commonwealth Secretary-General from Guyana."},
     {t:"James Rosenau and Ernst-Otto Czempiel", why:"They edited *Governance without Government* (1992), an academic volume."},
     {t:"Helen Clark and Ellen Johnson Sirleaf", why:"They co-chaired the Independent Panel on pandemic preparedness (2020–21)."},
     {t:"Robert Keohane and Joseph Nye", why:"They wrote *Power and Interdependence* (1977)."}]},
   {id:"e4u13-q04", lesson:"e4u13-l1", level:2, q:"A credit rating agency’s downgrade makes it costlier for a government to borrow. In Hall and Biersteker’s terms, what kind of authority is this?", options:[
     {t:"Market authority", ok:true, why:"Right. It rests on claimed expertise and a central place in financial markets."},
     {t:"Moral authority", why:"Moral authority rests on principles and reputation, as with NGOs."},
     {t:"Illicit authority", why:"Illicit authority rests on coercion outside the law."},
     {t:"Government authority", why:"The agency is private; its influence comes through markets."}]},
   {id:"e4u13-q05", lesson:"e4u13-l1", level:3, q:"Fatima studies a network of data protection regulators that writes common guidance later applied in many countries. Which question goes to the heart of the main critique of such networks?", options:[
     {t:"Who can see their decisions, and can the people affected hold them to account?", ok:true, why:"Right. The accountability critique (Alston and others) is the main objection to government networks."},
     {t:"Are the regulators experts?", why:"Expertise is usually their strength, not the core critique."},
     {t:"Do they meet in person or online?", why:"The format of meetings does not touch the main debate."},
     {t:"Are they part of the UN?", why:"Government networks are usually outside formal IOs; that is part of what makes accountability hard, but the question itself misses the point."}]},
   {id:"e4u13-q06", lesson:"e4u13-l1", level:2, q:"Which is the best example of an epistemic community?", options:[
     {t:"Atmospheric scientists whose shared findings shaped the ozone treaties", ok:true, why:"Right. Haas defined epistemic communities as expert networks with an authoritative claim to policy-relevant knowledge."},
     {t:"A group of foreign ministers at a summit", why:"Ministers are political decision-makers, not an expert network."},
     {t:"A trade union striking for higher wages", why:"A union pursues members’ interests; it is not defined by shared expertise."},
     {t:"A smuggling network", why:"That would be illicit authority, not expertise."}]},
   {id:"e4u13-q07", lesson:"e4u13-l1", level:1, q:"What did Weiss argue in his 2000 article on governance?", options:[
     {t:"That “global governance” had become so elastic it risked explaining little and hiding power", ok:true, why:"Right. He also criticised “good governance” as a donor programme in neutral dress."},
     {t:"That world government already exists", why:"He asked why scholars stopped discussing world government; he did not claim it exists."},
     {t:"That states no longer matter", why:"Weiss, a UN scholar, never argued that."},
     {t:"That private authority is always illegitimate", why:"That is not his argument; his critique is about the concept’s vagueness and politics."}]},
   {id:"e4u13-q08", lesson:"e4u13-l1", level:3, q:"Kenji writes: “Because private standards cover timber and seafood, states have lost control of trade.” Which reply would a realist such as Drezner give?", options:[
     {t:"Private rules matter mostly where strong states agree or don’t care; great powers still set the important regulatory outcomes", ok:true, why:"Right. Drezner’s *All Politics Is Global* (2007) makes this argument."},
     {t:"Private standards are a form of cultural imperialism", why:"That is closer to a critical argument, not Drezner’s realist one."},
     {t:"Private standards are illegal", why:"They are lawful; the question is how much they matter."},
     {t:"Only the UN can make trade rules", why:"Trade rules come mainly from the WTO and trade agreements, and the realist point is about state power, not the UN."}]},
   {id:"e4u13-q09", lesson:"e4u13-l1", level:2, q:"Eight Pacific Island states sell fishing days to foreign fleets through a joint scheme. What does this case show about global governance?", options:[
     {t:"Small states can govern a resource together through a sub-regional arrangement, alongside a regional commission and private labels", ok:true, why:"Right. The Parties to the Nauru Agreement’s Vessel Day Scheme is one of several overlapping layers."},
     {t:"Only great powers make fisheries rules", why:"The case shows small states shaping the rules."},
     {t:"The UN directly sets all fishing quotas", why:"Quotas in this region come from a regional commission and national and sub-regional schemes."},
     {t:"Private eco-labels have replaced states", why:"Labels add a layer; states still license and limit fishing."}]},

   /* ---- Lesson 2 ---- */
   {id:"e4u13-q10", lesson:"e4u13-l2", level:1, q:"When did G20 leaders first hold a summit?", options:[
     {t:"November 2008, in Washington", ok:true, why:"Right, during the global financial crisis."},
     {t:"1975, at Rambouillet", why:"That was the first G7-style summit."},
     {t:"1999, in Berlin", why:"1999 is when G20 finance ministers and central bankers began meeting."},
     {t:"2009, in Yekaterinburg", why:"That was the first BRIC summit."}]},
   {id:"e4u13-q11", lesson:"e4u13-l2", level:2, q:"Which feature do the G7, the G20 and BRICS share?", options:[
     {t:"No founding treaty or permanent secretariat; a rotating presidency or chair runs each year", ok:true, why:"Right. That is what makes them clubs rather than formal organisations."},
     {t:"Binding majority voting", why:"They work by consensus; their decisions are political, not legally binding."},
     {t:"Identical membership", why:"Their memberships differ widely."},
     {t:"Headquarters in Geneva", why:"None has a headquarters."}]},
   {id:"e4u13-q12", lesson:"e4u13-l2", level:1, q:"Which countries joined BRICS as full members from January 2024?", options:[
     {t:"Egypt, Ethiopia, Iran and the United Arab Emirates", ok:true, why:"Right. Argentina declined its invitation, and Saudi Arabia’s status has been ambiguous; Indonesia joined in 2025."},
     {t:"Argentina, Mexico, Nigeria and Indonesia", why:"Argentina declined; Mexico and Nigeria did not join as members (Nigeria became a partner); Indonesia joined in 2025."},
     {t:"Japan, South Korea, Australia and India", why:"India is a founding member; the others are not members."},
     {t:"Türkiye, Pakistan, Thailand and Vietnam", why:"None joined as full members in 2024; Thailand and Vietnam later became partners."}]},
   {id:"e4u13-q13", lesson:"e4u13-l2", level:3, q:"Priya writes that BRICS is “a united anti-Western bloc”. How should a neutral seminar paper treat this?", options:[
     {t:"As one contested interpretation, attributed to those who hold it, set beside members’ own description and scholars who stress internal divisions", ok:true, why:"Right. Contested characterisations need attribution and counter-views."},
     {t:"As an established fact", why:"Members reject it and many scholars doubt it; it cannot be stated as fact."},
     {t:"As obviously false propaganda", why:"Dismissing a view without evidence is also one-sided."},
     {t:"By leaving BRICS out of the paper", why:"Avoidance is not neutrality; describe the debate."}]},
   {id:"e4u13-q14", lesson:"e4u13-l2", level:2, q:"Why did the G20 become more prominent than the G7 after 2008?", options:[
     {t:"A crisis in the world economy needed large emerging economies such as China, India and Brazil at the table", ok:true, why:"Right. Leaders then named it the “premier forum” for economic cooperation in 2009."},
     {t:"The G7 was dissolved in 2008", why:"The G7 continues to meet every year."},
     {t:"The UN Security Council created the G20", why:"The G20 was created by its members, not by the UN."},
     {t:"The G20 has a larger secretariat", why:"It has no secretariat at all."}]},
   {id:"e4u13-q15", lesson:"e4u13-l2", level:1, q:"What is a sherpa in summit diplomacy?", options:[
     {t:"A leader’s personal representative who negotiates the summit agenda and declaration in advance", ok:true, why:"Right. Sherpas prepare the ground so leaders can agree quickly."},
     {t:"The head of the G20 secretariat", why:"There is no G20 secretariat."},
     {t:"A mountain guide hired for summits", why:"The term is borrowed from mountaineering, but here it means a diplomat."},
     {t:"A journalist who covers summits", why:"Sherpas are officials, not journalists."}]},
   {id:"e4u13-q16", lesson:"e4u13-l2", level:3, q:"Small states led by Singapore formed the Global Governance Group to engage the G20. What critique of club governance does this reflect?", options:[
     {t:"Exclusion: decisions affecting all are prepared by a few, so outsiders seek channels for voice", ok:true, why:"Right. The 3G pressed the G20 to consult the wider UN membership."},
     {t:"Clubs are too slow", why:"Speed is usually their strength."},
     {t:"Clubs have too many members", why:"The critique is the opposite: too few."},
     {t:"Clubs are legally binding", why:"Their outputs are political, not legally binding."}]},
   {id:"e4u13-q17", lesson:"e4u13-l2", level:2, q:"How do the Quad’s four governments describe the grouping, and how has China’s government described it?", options:[
     {t:"The members call it an informal partnership, not an alliance; China’s government has criticised it as an exclusive grouping aimed at containing China", ok:true, why:"Right. A neutral account attributes both descriptions."},
     {t:"Both describe it as a formal military alliance with a mutual defence treaty", why:"The Quad has no treaty or mutual defence clause."},
     {t:"Both describe it as an ASEAN body", why:"It is not part of ASEAN; some ASEAN governments stress ASEAN centrality in response."},
     {t:"The members call it a trade bloc and China calls it a development bank", why:"Neither description fits."}]},
   {id:"e4u13-q18", lesson:"e4u13-l2", level:2, q:"After the WTO’s Appellate Body stopped working in December 2019, a group of members including China and the EU set up an interim appeal arrangement. What is this an example of?", options:[
     {t:"A plurilateral or minilateral workaround inside a larger organisation", ok:true, why:"Right. Willing members created their own mechanism when the universal one was blocked."},
     {t:"A universal reform adopted by all WTO members", why:"Only some members joined it."},
     {t:"A bilateral trade deal", why:"It involves many members, not two."},
     {t:"A new UN agency", why:"It sits within the WTO framework, not the UN."}]},

   /* ---- Lesson 3 ---- */
   {id:"e4u13-q19", lesson:"e4u13-l3", level:1, q:"Why could no country sign the WHO Pandemic Agreement as of November 2026?", options:[
     {t:"It opens for signature only after the annex on pathogen access and benefit sharing is adopted, and talks on the annex were continuing", ok:true, why:"Right. Adoption of the PABS annex is a prerequisite."},
     {t:"The World Health Assembly rejected it", why:"The Assembly adopted it in May 2025."},
     {t:"It needs the Security Council’s approval first", why:"WHO treaties do not need Security Council approval."},
     {t:"It entered into force automatically, so no signatures are needed", why:"It requires signature and 60 ratifications before it can enter into force."}]},
   {id:"e4u13-q20", lesson:"e4u13-l3", level:2, q:"What would the PABS system exchange?", options:[
     {t:"Rapid sharing of pathogen samples and genetic data for guaranteed access to part of manufacturers’ pandemic production", ok:true, why:"Right. Participating firms would give the WHO rapid access to 20% of real-time production."},
     {t:"Vaccine patents for cash payments to the WHO", why:"PABS is about pathogens and benefits, not selling patents."},
     {t:"Travel bans for trade concessions", why:"The Agreement does not trade travel bans."},
     {t:"WHO membership for voting rights", why:"PABS has nothing to do with membership."}]},
   {id:"e4u13-q21", lesson:"e4u13-l3", level:2, q:"A government says its funding to the WHO is mostly earmarked for one disease programme. What governance concern does this raise?", options:[
     {t:"Earmarked voluntary funding lets donors, rather than the WHO’s governing bodies, set priorities", ok:true, why:"Right. That is why members agreed to raise assessed contributions to half of the base budget by 2030–31."},
     {t:"It is illegal under the WHO Constitution", why:"Earmarked funding is lawful; the concern is control."},
     {t:"It means the government has left the WHO", why:"Giving earmarked money is a form of participation."},
     {t:"It doubles the government’s vote in the Assembly", why:"Each member has one vote regardless of funding."}]},
   {id:"e4u13-q22", lesson:"e4u13-l3", level:1, q:"Which change entered into force on 19 September 2025?", options:[
     {t:"Amendments to the International Health Regulations, including a new “pandemic emergency” alert level", ok:true, why:"Right. Eleven States Parties rejected them."},
     {t:"The WHO Pandemic Agreement", why:"The Agreement was adopted in 2025 but is not yet open for signature."},
     {t:"The founding of Gavi", why:"Gavi was founded in 2000."},
     {t:"The end of COVAX", why:"COVAX closed at the end of 2023."}]},
   {id:"e4u13-q23", lesson:"e4u13-l3", level:3, q:"Lucía argues that COVAX was a total failure. Which response best balances the evidence?", options:[
     {t:"It delivered nearly 2 billion doses to 146 economies and is estimated to have helped avert at least 2.7 million deaths, but doses arrived late because richer countries bought first and exports were restricted", ok:true, why:"Right. The response grants the critique and adds the achievements, with sources."},
     {t:"It met every target on time", why:"Inaccurate: supplies fell well behind early plans."},
     {t:"It delivered no vaccines", why:"Inaccurate: it delivered nearly 2 billion doses."},
     {t:"Its delays were caused only by the WHO", why:"Most accounts point to market and political factors, such as advance purchases and export limits."}]},
   {id:"e4u13-q24", lesson:"e4u13-l3", level:2, q:"Which framing best describes an approach focused on stopping outbreaks at their source before they reach other countries?", options:[
     {t:"Global health security", ok:true, why:"Right. Critics say it can favour surveillance and borders over health systems."},
     {t:"Global health equity", why:"Equity stresses fair access to care and medicines for all."},
     {t:"One Health", why:"One Health links human, animal and environmental health; it is not the same as the security framing."},
     {t:"Vaccine nationalism", why:"That is governments securing vaccines for themselves first."}]},
   {id:"e4u13-q25", lesson:"e4u13-l3", level:3, q:"A post claims the Pandemic Agreement “lets the WHO force lockdowns”. What does the text say?", options:[
     {t:"It states that the WHO cannot direct national laws or impose measures such as lockdowns, travel bans or vaccine mandates", ok:true, why:"Right. The sovereignty clause says so explicitly."},
     {t:"It gives the WHO power to order lockdowns after a pandemic emergency", why:"No such power exists in the Agreement or the IHR."},
     {t:"It lets the Security Council order lockdowns", why:"The Agreement does not involve the Security Council."},
     {t:"It is silent on the question", why:"It addresses the question directly."}]},
   {id:"e4u13-q26", lesson:"e4u13-l3", level:1, q:"What is Gavi?", options:[
     {t:"A public–private partnership founded in 2000 that helps lower-income countries buy and deliver vaccines", ok:true, why:"Right. It co-led COVAX."},
     {t:"A WHO department", why:"Gavi is a separate partnership with its own board."},
     {t:"A pharmaceutical company", why:"Industry sits on its board, but it is not a company."},
     {t:"An African Union agency", why:"That description fits Africa CDC."}]},
   {id:"e4u13-q27", lesson:"e4u13-l3", level:2, q:"Critics say partnerships such as Gavi and the Global Fund are “vertical”. What do they mean?", options:[
     {t:"They fund specific diseases or vaccines, which may pull resources from whole health systems", ok:true, why:"Right. The debate is vertical (disease-specific) versus horizontal (system-wide) investment."},
     {t:"They are run from the top by the WHO", why:"They are independent partnerships, not run by the WHO."},
     {t:"They only work in mountainous regions", why:"“Vertical” here describes the funding model."},
     {t:"They refuse to work with governments", why:"They work closely with governments."}]},

   /* ---- Lesson 4 ---- */
   {id:"e4u13-q28", lesson:"e4u13-l4", level:1, q:"What happened in the IANA stewardship transition of October 2016?", options:[
     {t:"The US government’s contract over core internet functions ended, and oversight passed to ICANN’s global multistakeholder community", ok:true, why:"Right. The contract with the US Department of Commerce’s NTIA was allowed to expire."},
     {t:"The ITU took control of domain names", why:"Oversight went to ICANN’s community, not the ITU."},
     {t:"China took over the root zone", why:"Inaccurate: no government took over; oversight went to ICANN’s community."},
     {t:"The internet was split into national networks", why:"No such split occurred."}]},
   {id:"e4u13-q29", lesson:"e4u13-l4", level:2, q:"Which argument would a supporter of a state-led (sovereignty) model of internet governance most likely make?", options:[
     {t:"Governments are responsible for security and order, so intergovernmental bodies with equal state votes should have a bigger role", ok:true, why:"Right. This is the core of the sovereignty position."},
     {t:"Engineers and companies should lead because they understand the technology best", why:"That is a multistakeholder argument."},
     {t:"No one should make any rules for the internet", why:"Neither main model argues this."},
     {t:"ICANN should remain under one government’s contract", why:"Sovereignty advocates criticised exactly that arrangement."}]},
   {id:"e4u13-q30", lesson:"e4u13-l4", level:1, q:"What did the 2015 UN Group of Governmental Experts agree?", options:[
     {t:"Eleven voluntary norms of responsible state behaviour in cyberspace", ok:true, why:"Right, such as not deliberately damaging critical infrastructure that serves the public."},
     {t:"A binding cyber treaty with sanctions", why:"The norms are voluntary; there is no such treaty."},
     {t:"That international law does not apply online", why:"The 2013 group agreed that it does apply."},
     {t:"A ban on all state cyber operations", why:"No such ban exists."}]},
   {id:"e4u13-q31", lesson:"e4u13-l4", level:2, q:"Why do scholars describe AI governance as of 2026 as a regime complex?", options:[
     {t:"Many overlapping forums and rules (OECD, UNESCO, G7, Council of Europe, summits, UN bodies, national laws) govern it with no single hierarchy", ok:true, why:"Right. Overlapping institutions without a hierarchy define a regime complex."},
     {t:"One UN agency regulates all AI worldwide", why:"No single regulator exists."},
     {t:"There are no rules on AI anywhere", why:"There are many, overlapping rules."},
     {t:"AI systems are complex", why:"The term describes institutions, not technology."}]},
   {id:"e4u13-q32", lesson:"e4u13-l4", level:2, q:"What did the UN General Assembly create in August 2025 (resolution 79/325)?", options:[
     {t:"An Independent International Scientific Panel on AI and a Global Dialogue on AI Governance", ok:true, why:"Right. The 40-member panel was appointed in February 2026; the Dialogue was launched in September 2025 and held its first full session in Geneva in July 2026."},
     {t:"A binding global AI treaty", why:"The only binding international AI treaty is the Council of Europe’s."},
     {t:"A UN agency with power to license AI models", why:"Neither body has regulatory powers."},
     {t:"The Global Digital Compact", why:"The Compact was adopted in September 2024 with the Pact for the Future."}]},
   {id:"e4u13-q33", lesson:"e4u13-l4", level:3, q:"Under the EU AI Act as amended in 2026, when do most duties for high-risk uses listed in the Act (such as hiring tools) apply?", options:[
     {t:"From 2 December 2027", ok:true, why:"Right. The Digital Omnibus, in force from July 2026, moved them from August 2026."},
     {t:"From 2 February 2025", why:"That is when the bans on prohibited practices applied."},
     {t:"From 2 August 2025", why:"That is when duties for general-purpose AI models began."},
     {t:"They never apply, because the Omnibus repealed them", why:"The Omnibus delayed them; it did not repeal them."}]},
   {id:"e4u13-q34", lesson:"e4u13-l4", level:3, q:"Oluwaseun compares AI rules using Bradford’s three models. Which pairing matches her typology?", options:[
     {t:"United States: market-driven; China: state-driven; European Union: rights-driven", ok:true, why:"Right. *Digital Empires* (2023) uses these labels; test them against cases."},
     {t:"United States: state-driven; China: rights-driven; EU: market-driven", why:"This reverses her labels."},
     {t:"All three: identical models", why:"Her point is that they differ."},
     {t:"Japan: state-driven; Korea: rights-driven; India: market-driven", why:"Bradford’s three models are built around the US, China and the EU."}]},
   {id:"e4u13-q35", lesson:"e4u13-l4", level:2, q:"Which statement about the UN Convention against Cybercrime is accurate and neutral?", options:[
     {t:"Adopted by the General Assembly in December 2024 and opened for signature in Hanoi in 2025; supporters stress inclusion and capacity, while human rights groups warned of surveillance risks", ok:true, why:"Right. It states the facts and attributes both views."},
     {t:"It replaced the Budapest Convention", why:"The two treaties coexist."},
     {t:"It is obviously a tool of repression", why:"An unattributed judgement; present critics’ views as theirs."},
     {t:"It was adopted by the Security Council", why:"It was adopted by the General Assembly."}]},
   {id:"e4u13-q36", lesson:"e4u13-l4", level:1, q:"What did the General Assembly’s WSIS+20 review decide about the Internet Governance Forum in December 2025?", options:[
     {t:"It made the IGF a permanent UN forum", ok:true, why:"Right, while reaffirming the multistakeholder approach."},
     {t:"It abolished the IGF", why:"The opposite: it was made permanent."},
     {t:"It gave the IGF power to make binding rules", why:"The IGF remains a forum for discussion."},
     {t:"It moved the IGF into ICANN", why:"The IGF remains a UN forum."}]},

   /* ---- Lesson 5 ---- */
   {id:"e4u13-q37", lesson:"e4u13-l5", level:1, q:"How was the Pact for the Future adopted in September 2024?", options:[
     {t:"Without a vote, after members set aside a Russian amendment by 143 votes to 7 with 15 abstentions", ok:true, why:"Right. The amendment was not taken up and the Pact passed without a vote."},
     {t:"By a unanimous recorded vote", why:"There was no recorded vote on the Pact itself."},
     {t:"It was vetoed in the General Assembly", why:"There is no veto in the General Assembly."},
     {t:"By the Security Council", why:"It was adopted by the General Assembly."}]},
   {id:"e4u13-q38", lesson:"e4u13-l5", level:2, q:"Hale, Held and Young’s *Gridlock* (2013) explains stalled cooperation mainly through…", options:[
     {t:"wider distribution of power, harder problems, institutional inertia and fragmentation", ok:true, why:"Right: their four pathways to gridlock."},
     {t:"the end of the nation-state", why:"They do not argue that states have ended."},
     {t:"too few international organisations", why:"Fragmentation among many institutions is part of their diagnosis."},
     {t:"the success of the WTO", why:"Not their argument."}]},
   {id:"e4u13-q39", lesson:"e4u13-l5", level:3, q:"Ana writes: “The 2025 G20 declaration promised debt relief, so the debt problem is being solved.” What is the main weakness?", options:[
     {t:"It treats an output (a promise) as an outcome; she needs evidence of what changed afterwards", ok:true, why:"Right. Separate declarations from implementation."},
     {t:"G20 declarations never mention debt", why:"They often do; the issue is evidence of effect."},
     {t:"She should not cite the G20 at all", why:"Citing it is fine; the inference is the problem."},
     {t:"Debt is not a global governance issue", why:"It plainly is, through the G20, IMF and creditors."}]},
   {id:"e4u13-q40", lesson:"e4u13-l5", level:2, q:"Which is an example of a South-led initiative to reform development finance?", options:[
     {t:"The Bridgetown Initiative launched by Barbados’s prime minister in 2022", ok:true, why:"Right. It focuses on debt and climate finance."},
     {t:"The G7’s Rambouillet summit", why:"That was a 1975 meeting of industrial democracies."},
     {t:"The Budapest Convention", why:"That is a Council of Europe cybercrime treaty."},
     {t:"The IANA stewardship transition", why:"That concerned internet governance."}]},
   {id:"e4u13-q41", lesson:"e4u13-l5", level:2, q:"What is Stuenkel’s main claim in *Post-Western World* (2016)?", options:[
     {t:"Emerging powers are building parallel institutions that mostly complement, rather than replace, existing ones", ok:true, why:"Right. He sees a parallel order that hedges rather than overthrows."},
     {t:"The liberal order is bound to fail", why:"That is Mearsheimer’s 2019 argument."},
     {t:"Global governance means world government", why:"Not his claim."},
     {t:"Emerging powers have no interest in institutions", why:"His book is about the institutions they build."}]},
   {id:"e4u13-q42", lesson:"e4u13-l5", level:3, q:"Which sentence uses a scenario as an analytical tool rather than a prediction?", options:[
     {t:"“As of 2026, evidence on AI governance fits a multiplex story better than a renewal story, though the UN created a scientific panel.”", ok:true, why:"Right: narrow, dated, evidence-based, with a counter-point."},
     {t:"“By 2040 the world will be divided into two blocs.”", why:"A forecast, not an analytical use."},
     {t:"“Multilateralism is dead.”", why:"Sweeping and untestable as stated."},
     {t:"“Renewal is the best scenario, so it will happen.”", why:"Confuses a preference with a prediction."}]},
   {id:"e4u13-q43", lesson:"e4u13-l5", level:2, q:"What distinguishes effectiveness from legitimacy as yardsticks for global governance?", options:[
     {t:"Effectiveness asks whether problems are solved; legitimacy asks whether those affected accept the rule-makers’ right to decide", ok:true, why:"Right. They can pull apart, as with fast but exclusive clubs."},
     {t:"They are the same thing", why:"Scholars treat them as distinct and sometimes in tension."},
     {t:"Effectiveness concerns law and legitimacy concerns money", why:"Neither definition is right."},
     {t:"Legitimacy only matters for democracies", why:"Every institution needs acceptance by those it affects."}]},
   {id:"e4u13-q44", lesson:"e4u13-l5", level:1, q:"Which pair are the two annexes of the Pact for the Future?", options:[
     {t:"The Global Digital Compact and the Declaration on Future Generations", ok:true, why:"Right. Both were adopted with the Pact in September 2024."},
     {t:"The Paris Agreement and the Kyoto Protocol", why:"These are climate treaties."},
     {t:"The IHR and the Pandemic Agreement", why:"These are WHO instruments."},
     {t:"The Budapest Convention and the Tallinn Manual", why:"These concern cybercrime and cyber law."}]},
   {id:"e4u13-q45", lesson:"e4u13-l5", level:3, q:"Tomás argues that China’s Global Governance Initiative (2025) will replace the UN. Which revision is most defensible?", options:[
     {t:"China presents it as strengthening the UN-centred system; some Western officials see an attempt to reshape rules; its effects are not yet clear as of 2026", ok:true, why:"Right. Attribute the positions and avoid prediction."},
     {t:"It has already replaced the UN", why:"Inaccurate: the UN continues, and the initiative is framed as supporting it."},
     {t:"It is certainly harmless", why:"An unattributed judgement; describe views instead."},
     {t:"It is a BRICS treaty", why:"It is a Chinese government initiative, not a BRICS treaty."}]}
  ]
});
