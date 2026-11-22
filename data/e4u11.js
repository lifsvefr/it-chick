/* International Studies · Unit 11 · Human rights in global politics */
ICA.addUnit({
  id:"e4u11", track:"e4", n:11, title:"Human rights in global politics", icon:"🕊️",
  blurb:"Human rights as a subject of scholarly debate, not a slogan: rival histories of where they came from and who drafted the Universal Declaration; how the UN and regional machinery really work; what research says about whether treaties change behavior; the universalism debate, economic and social rights and business; and hard cases (refugees, surveillance, truth commissions) told with each side’s position, ending with how to write a human rights paper that analyzes rather than campaigns.",
  goals:[
    "Compare the main histories of human rights (long histories, Moyn’s 1970s breakthrough, Sikkink’s and others’ Global South origins) and explain how the Universal Declaration was drafted and by whom",
    "Explain how the UN human rights machinery works in practice (treaty bodies, the Human Rights Council, the Universal Periodic Review, special procedures, OHCHR) and compare the European, Inter-American, African and ASEAN systems",
    "Evaluate the evidence on whether human rights treaties work, using Hathaway, Simmons, the boomerang and spiral models and the debate over human rights data",
    "Analyze the universalism debate (cultural relativism, the Bangkok and Vienna declarations, Asian values, Islamic, feminist and postcolonial perspectives) and the politics of economic and social rights and of business and human rights",
    "Describe hard cases (non-refoulement, digital surveillance, truth commissions in South Africa and Timor-Leste) neutrally, with positions attributed and dated as of November 2026",
    "Write a human-rights-focused seminar paper that separates description, attribution and evaluation, and avoids an advocacy tone"
  ],
  read:[
    {book:"alstonhr", where:"Chapter 2 “The Human Rights Regime: International Law Framework and Origins”", note:"A free, up-to-date graduate casebook by a leading scholar and former UN special rapporteur. Long and law-heavy: read the editor’s introductions and the extracts the lessons point to."},
    {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach) and Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Short background chapters on how international law works and on protecting people from mass abuses."},
    {book:"ospol", where:"Chapter 15 “International Law and International Organizations”, sections 15.2 “International Law” and 15.5 “Non-state Actors: Nongovernmental Organizations (NGOs)”", note:"A gentle refresher on international law and on what NGOs do, before Lessons 2 and 3."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u11-l1", title:"Where human rights come from", minutes:60,
   hook:{q:"The Universal Declaration of Human Rights was adopted in December 1948. Which regional organization adopted a broad human rights declaration of its own some months earlier, in the same year?", options:["The Council of Europe","The Organization of American States","The Arab League","The Organisation of African Unity"], answer:1, reveal:"**The Organization of American States.** The American Declaration of the Rights and Duties of Man was adopted in Bogotá in spring 1948, months before the Universal Declaration. The Council of Europe was only founded in 1949 and the OAU in 1963. Facts like this are at the heart of a lively debate among historians. Did human rights begin in Enlightenment Europe, in the 1940s, in the 1970s, or in the Global South? This lesson sets out the rival stories."},
   goals:[
     "Explain why the history of human rights is contested and why it matters for today’s debates",
     "Compare long histories (natural rights, the revolutions, Hunt) with Moyn’s argument that human rights broke through in the 1970s",
     "Use Sikkink, Burke, Jensen and others to explain the case for Latin American and Global South origins",
     "Describe how the Universal Declaration was drafted, including the roles of P. C. Chang, Hansa Mehta and Charles Malik",
     "Use the vocabulary of seminars: natural rights, human dignity, the International Bill of Human Rights, generations of rights"
   ],
   learn:[
    {h:"Why the history is a battleground", body:[
      {lead:"Ask five historians when human rights began and you may get five answers. The answers might be: in ancient codes, in the Enlightenment, in 1945, in 1977, or in Latin America in the 1940s."},
      "A one-line reminder from the IR primer: [[human-rights|human rights]] are rights every person holds simply as a human being, which states must respect, protect and fulfill. The [[universal-declaration-human-rights|Universal Declaration of Human Rights (UDHR)]] of 1948 and the treaties that followed form the modern system (see {{human-rights-regime}}). This lesson asks a deeper question that seminars return to again and again: **where did the idea and the system come from?**",
      "The answer is not just academic. If human rights are an old, universal idea, critics who call them “Western” are on weak ground. If they are a recent invention of Western activists, the critics have a point. If they were shaped by the Global South, both stories need revising. Each history is also an argument about **legitimacy** today.",
      {key:"The history of human rights is used as evidence in the debate about whether human rights are universal. Read every history as both scholarship and argument."}
    ]},
    {h:"Long histories: from natural rights to the revolutions", body:[
      "The traditional story is a long march. Thinkers in many traditions argued that rulers owe duties to the people they rule. Examples include the Ashokan edicts of ancient India, Confucian ideas of humane government, Islamic teaching on justice, and Christian natural law. In early modern Europe, writers such as John Locke argued for [[natural-rights|natural rights]]. These are rights to life, liberty and property that, on this view, people hold by nature, before any government.",
      "Then came the great declarations: the English Bill of Rights (1689), the American Declaration of Independence (1776) and the French Declaration of the Rights of Man and of the Citizen (1789). The Haitian Revolution (1791–1804), led by enslaved people, tested whether those rights applied to everyone. Campaigns against the slave trade in the nineteenth century are often called the first transnational human rights movement.",
      "Lynn Hunt’s *Inventing Human Rights: A History* (2007) gave this story a cultural twist. In her account, eighteenth-century novels and campaigns against torture taught readers to feel **empathy** for strangers. That, she argues, made the idea of equal rights thinkable.",
      "Critics of long histories make two points. First, many older texts speak of duties of rulers or of justice, not of individual rights held against the state. In the critics’ view, reading them as “human rights” is anachronism. Claims that the Cyrus Cylinder (sixth century BCE) was “the first charter of human rights” are a well-known example that historians dispute. Second, the revolutionary rights of 1776 and 1789 were rights of **citizens**, tied to a nation, and their authors excluded enslaved people, colonized peoples and women."
    ]},
    {h:"Moyn: the “last utopia” of the 1970s", body:[
      "Samuel Moyn’s *The Last Utopia: Human Rights in History* (2010) is the book every seminar argues about (see {{samuel-moyn}}). Moyn accepts that rights talk is old. But he argues that **human rights as we know them** broke through only in the **1970s**. By this he means an international movement that holds governments to account for how they treat people anywhere.",
      "His evidence: the UDHR of 1948 had little effect for decades. In his account, the 1940s and 1950s were dominated by other projects, such as anti-colonial self-determination and socialism. Only when those **utopias** lost their appeal, he argues, did human rights become the moral language of choice. His markers of the breakthrough include the Helsinki Final Act (1975), whose human rights clauses dissidents in the Soviet bloc used against their governments. Others are Amnesty International’s Nobel Peace Prize (1977) and US President Jimmy Carter’s human rights foreign policy from 1977.",
      {fig:'<svg viewBox="0 0 340 430"><path class="d-ink" d="M40 20 V410" stroke-width="3"/><g stroke-width="2"><circle class="d-gold" cx="40" cy="40" r="9"/><circle class="d-gold" cx="40" cy="120" r="9"/><circle class="d-sage" cx="40" cy="200" r="9"/><circle class="d-lup" cx="40" cy="280" r="9"/><circle class="d-rose" cx="40" cy="360" r="9"/></g><text x="62" y="36">Ancient and religious</text><text class="s" x="62" y="54">duties of rulers, justice, dignity</text><text class="s" x="62" y="70">critics: duties, not rights</text><text x="62" y="116">1689–1804: natural rights</text><text class="s" x="62" y="134">revolutions; Hunt (2007): empathy</text><text class="s" x="62" y="150">critics: rights of citizens only</text><text x="62" y="196">1940s: UN Charter, UDHR</text><text class="s" x="62" y="214">Latin American and small-state roles</text><text class="s" x="62" y="230">(Glendon, Waltz, Sikkink)</text><text x="62" y="276">1960s: decolonization</text><text class="s" x="62" y="294">ICERD 1965, Tehran 1968</text><text class="s" x="62" y="310">(Burke 2010, Jensen 2016)</text><text x="62" y="356">1970s: the breakthrough?</text><text class="s" x="62" y="374">Helsinki 1975, Amnesty’s Nobel 1977</text><text class="s" x="62" y="390">Moyn, The Last Utopia (2010)</text></svg>', alt:"A vertical timeline with five dots. Ancient and religious traditions of duties and justice (critics say duties, not rights). 1689–1804, natural rights and the revolutions, with Hunt’s empathy argument (critics: rights of citizens only). The 1940s, the UN Charter and UDHR, with Latin American and small-state roles. The 1960s, decolonization, the convention against racial discrimination of 1965 and the Tehran conference of 1968. The 1970s, Moyn’s breakthrough, with the Helsinki Final Act of 1975 and Amnesty’s Nobel Prize of 1977.", cap:"Five places where historians locate the origins of human rights. Each comes with its own scholars and critics."},
      "Moyn’s thesis (call it the [[last-utopia-thesis|last utopia thesis]]) is deliberately provocative. It warns against telling human rights history as an inevitable rise. It also suggests that human rights are a modest, minimalist politics that replaced bigger dreams. His later book *Not Enough: Human Rights in an Unequal World* (2018) argues that human rights movements made peace with growing economic inequality (Lesson 4)."
    ]},
    {h:"Replies: the 1940s and the Global South", body:[
      "Kathryn Sikkink’s *Evidence for Hope: Making Human Rights Work in the 21st Century* (2017) answers Moyn directly (see {{kathryn-sikkink}}). She argues that human rights had **diverse origins**, many outside the great powers. Latin American states pressed for human rights language at the founding conference of the UN in San Francisco in 1945. The [[american-declaration-rights-duties|American Declaration of the Rights and Duties of Man]] was adopted in Bogotá in 1948, months before the UDHR. Mary Ann Glendon called Latin America the “forgotten crucible” of the universal human rights idea (2003).",
      "Historians of decolonization add another chapter. Roland Burke’s *Decolonization and the Evolution of International Human Rights* (2010) and Steven Jensen’s *The Making of International Human Rights* (2016) show that newly independent states drove human rights law in the 1960s. In their accounts, the treaty against racial discrimination (ICERD, 1965; see {{icerd-and-anti-racism}}) was pushed by African and Asian states. Jensen highlights Jamaica’s diplomacy in particular. The first UN world conference on human rights met in Tehran in 1968.",
      "Mark Mazower’s *No Enchanted Palace* (2009) adds an uncomfortable twist. In his account, some of the UN’s founders saw the new organization as a way to preserve empire, not end it. One was South Africa’s Jan Smuts, who helped write the Charter’s preamble. The same documents served very different projects.",
      {warn:"Avoid the lazy summary “Moyn says human rights are recent, Sikkink says they are old.” Moyn dates a **movement and politics**. Sikkink dates **ideas, norms and law**, and stresses who made them. They partly talk past each other, and saying so is a good seminar move."},
      {ex:"**Task:** write one paragraph comparing {{samuel-moyn|Moyn}} (2010) and {{kathryn-sikkink|Sikkink}} (2017) on the origins of human rights.\n1. First I state what each author is **dating**, because comparing dates alone hides the real disagreement. Moyn dates a **movement and a politics**: activists holding any government to account, which broke through in the 1970s. Sikkink dates **ideas, norms and law**, and asks who created them.\n2. Next I list each author’s **main evidence**. Moyn: the UDHR had little effect for decades; the Helsinki Final Act (1975), Amnesty International’s Nobel Prize (1977) and Carter’s foreign policy mark the turn. Sikkink: Latin American states pushed for rights language in San Francisco in 1945, and the American Declaration (Bogotá, 1948) came months before the UDHR.\n3. Then I find the **real point of conflict**. Both accept that rights talk is old. They disagree about whether the 1940s mattered and about **whose** history it is: mainly Western activists of the 1970s, or many states, including those of the Global South.\n4. Finally I say what **evidence would decide** between them. For example: did activists of the 1970s use the 1940s texts and the 1960s treaties, or did they ignore them?\n**Result:** “Moyn and Sikkink partly talk past each other. Moyn locates the breakthrough of human rights as a movement in the 1970s; Sikkink traces human rights norms and law to the 1940s, with Latin American and later decolonizing states as key authors. The question that divides them is less ‘when’ than ‘what counts as human rights, and who made them’.”\n**Common mistake:** choosing a winner in the first sentence. Set out what each claims and why before you judge.", label:"Worked example: comparing two historians step by step"}
    ]},
    {h:"Writing the Universal Declaration", body:[
      "The UN Commission on Human Rights, chaired by Eleanor Roosevelt of the United States, began work in January 1947. John Humphrey of Canada, a UN official, prepared the first draft; René Cassin of France reorganized it. The [[human-dignity|idea of human dignity]], the worth every person has, became its foundation. The first words of the preamble recognize “the inherent dignity” of all members of the human family.",
      {table:[
        ["Drafter","From","Known for"],
        ["Peng-chun (P. C.) Chang","China (Republic of China)","A philosopher and diplomat who argued for pluralism; often credited with the word “conscience” in Article 1, linked to the Confucian idea of *ren*"],
        ["Hansa Mehta","India","A reformer and women’s rights campaigner, widely credited with changing “all men” to “all human beings” in Article 1"],
        ["Charles Malik","Lebanon","A philosopher; the Commission’s rapporteur, then chair of the General Assembly’s Third Committee during the final debate in 1948"],
        ["Hernán Santa Cruz","Chile","A strong voice for economic and social rights"]
      ]},
      "Women delegates such as Minerva Bernardino (Dominican Republic), Begum Shaista Ikramullah (Pakistan) and Lakshmi Menon (India) pressed for language on equality between men and women. Susan Waltz (2001) showed how small states shaped the text. Johannes Morsink’s *The Universal Declaration of Human Rights: Origins, Drafting, and Intent* (1999) traced the debate article by article. Glendon’s *A World Made New* (2001) tells the story around Roosevelt.",
      "The drafters did not agree on **why** people have rights. In 1947–48 UNESCO ran an inquiry into the philosophy of human rights. The French philosopher Jacques Maritain wrote the introduction to the volume that came out of it. He famously remarked that the participants agreed on the rights “on condition that no one asks us why”. Many scholars see this practical agreement without a shared philosophy as a strength.",
      "The General Assembly adopted the Declaration on **10 December 1948** by 48 votes to none, with 8 abstentions. The abstainers were six communist states (the Soviet Union, Byelorussia, Ukraine, Poland, Czechoslovakia and Yugoslavia), Saudi Arabia and South Africa. Two of the 58 members (Honduras and Yemen) did not vote. Saudi Arabia objected mainly to the article on changing one’s religion and the article on marriage. South Africa, then moving to apartheid, objected to equality provisions. The Soviet Union and its allies argued that it said too little about economic rights and sovereignty."
    ]},
    {h:"From the Declaration to a system: the vocabulary", body:[
      "The UDHR was a declaration, not a treaty. The Cold War split the plan for one binding covenant into two, both adopted in 1966. They are the ICCPR on civil and political rights and the ICESCR on economic, social and cultural rights. Together with the UDHR they are called the [[international-bill-of-human-rights|International Bill of Human Rights]].",
      "In 1977 the jurist Karel Vasak proposed three [[generations-of-rights|generations of rights]], echoing the French revolutionary slogan. In his scheme, civil and political rights stand for liberty, and economic and social rights for equality. Collective or “solidarity” rights, such as development and a healthy environment, stand for fraternity. The scheme is handy but contested. It suggests a ranking and a sequence that the UN rejects when it calls all rights “indivisible” (Lesson 4).",
      {ex:"Claim: “Human rights are a Western invention imposed on the world.”\n1. Which history does the claim assume? (Usually the Enlightenment-to-1789 story.)\n2. What complicates it? (The drafters’ diversity; Latin American and decolonizing states’ roles; non-Western traditions of justice and dignity.)\n3. What supports part of it? (Western states and NGOs dominated the 1970s movement; colonial powers excluded colonized peoples.)\n4. A careful conclusion: “The claim captures the role of Western actors in some periods but ignores others’ contributions in the 1940s and 1960s.”", label:"Worked example: testing a historical claim"},
      {terms:["natural-rights","human-dignity","last-utopia-thesis","american-declaration-rights-duties","international-bill-of-human-rights","generations-of-rights","helsinki-final-act"]}
    ]}
   ],
   try:[
    {id:"e4u11-l1-x1", type:"mcq", q:"Why do historians’ arguments about the origins of human rights matter for present-day debates?", options:[
      {t:"Each history implies a view on whether rights are universal", ok:true, why:"Right. Each history suggests rights are either genuinely universal or the product of one region’s politics. Histories are used as evidence for or against the claim that human rights belong to everyone, so they shape arguments about legitimacy."},
      {t:"Because only the oldest version of human rights is legally binding", why:"Legal force comes from treaties and custom, not from how old an idea is."},
      {t:"Because international courts decide cases by asking when human rights began", why:"Courts apply treaties and custom; historians’ dating debates do not decide cases."},
      {t:"They do not matter; the history is settled", why:"The history is actively contested, which is why the debate between Moyn, Sikkink and others is so lively."}
    ]},
    {id:"e4u11-l1-x2", type:"match", q:"Match each work to its main argument.", pairs:[
      ["Hunt, *Inventing Human Rights* (2007)","Eighteenth-century novels and campaigns built empathy that made equal rights thinkable","A cultural history of the Enlightenment origins."],
      ["Moyn, *The Last Utopia* (2010)","Human rights broke through as a movement in the 1970s, after other utopias failed","The best-known “short history”."],
      ["Sikkink, *Evidence for Hope* (2017)","Human rights had diverse origins, including Latin America, and have made measurable progress","A direct reply to Moyn and to pessimists."],
      ["Burke, *Decolonization and the Evolution of International Human Rights* (2010)","Newly independent states shaped human rights at the UN in the 1950s and 1960s","Part of the decolonization strand of the debate."],
      ["Mazower, *No Enchanted Palace* (2009)","Some UN founders saw the organization as a way to preserve empire","A study of the imperial ideas behind the UN’s founding."]
    ]},
    {id:"e4u11-l1-x3", type:"sort", q:"Which kind of history does each piece of evidence mainly support?", buckets:["A long history","Moyn’s 1970s breakthrough","Global South and 1940s origins"], items:[
      {t:"The French Declaration of the Rights of Man and of the Citizen (1789)", b:0, why:"A classic milestone in the long, Enlightenment-centered story."},
      {t:"Amnesty International wins the Nobel Peace Prize in 1977", b:1, why:"One of Moyn’s markers of the 1970s breakthrough of a transnational movement."},
      {t:"The American Declaration of the Rights and Duties of Man is adopted in Bogotá in 1948", b:2, why:"Sikkink and Glendon use it to show Latin American leadership before the UDHR."},
      {t:"Soviet-bloc dissidents cite the Helsinki Final Act (1975) against their governments", b:1, why:"Moyn treats Helsinki as part of the moment when human rights became a politics of accountability."},
      {t:"Locke argues that people hold rights to life, liberty and property by nature", b:0, why:"Natural rights theory is the intellectual root in the long history."},
      {t:"African and Asian states push the convention against racial discrimination through the UN in 1965", b:2, why:"Burke and Jensen use the 1960s to show the Global South shaping human rights law."}
    ]},
    {id:"e4u11-l1-x4", type:"mcq", q:"Priya writes: “Moyn proves human rights are only fifty years old, so Sikkink is wrong.” What is the best response?", options:[
      {t:"They date different things, so they partly talk past each other.", ok:true, why:"Right. Moyn dates a transnational movement and politics; Sikkink dates ideas, norms and law and who made them. Distinguishing what each author dates is the key to using the debate well."},
      {t:"Moyn agrees with Sikkink that human rights began in Latin America.", why:"Moyn locates the breakthrough in the 1970s; Sikkink stresses Latin American and other origins in the 1940s."},
      {t:"Sikkink argues human rights began with the Cyrus Cylinder.", why:"Sikkink focuses on the twentieth century; the Cyrus Cylinder claim is one historians dispute."},
      {t:"The debate is settled in Moyn’s favor by the UN.", why:"The UN does not settle historical debates, and many historians disagree with Moyn."}
    ]},
    {id:"e4u11-l1-x5", type:"match", q:"Match each UDHR drafter to their contribution.", pairs:[
      ["Hansa Mehta (India)","Widely credited with changing “all men” to “all human beings” in Article 1","A women’s rights campaigner as well as a delegate."],
      ["P. C. Chang (China)","Argued for pluralism; often credited with adding “conscience” to Article 1","Linked by many scholars to the Confucian idea of ren."],
      ["Charles Malik (Lebanon)","Rapporteur of the Commission and chair of the Third Committee in 1948","He steered the final debate in the General Assembly’s committee."],
      ["John Humphrey (Canada)","Prepared the first draft as a UN official","René Cassin then reorganized it."],
      ["Eleanor Roosevelt (United States)","Chaired the Commission on Human Rights","She led the drafting process."]
    ]},
    {id:"e4u11-l1-x6", type:"number", q:"The UDHR was adopted by 48 votes to none, with 8 abstentions. What percentage of the states that **voted or abstained** voted in favor? (Round to one decimal place.)", answer:85.7, tol:0.1, unit:"%", why:"48 + 0 + 8 = 56 states voted or abstained. 48 ÷ 56 = 0.857, or about 85.7%.", wrongs:[
      {v:100, tol:0, why:"That counts only yes and no votes. Abstentions are part of the total of states that took part."},
      {v:14.3, tol:0.1, why:"That is the share that abstained (8 ÷ 56), not the share in favor."},
      {v:82.8, tol:0.1, why:"That divides by 58, all UN members in 1948. Two members did not vote at all, so they are not among the states that voted or abstained: use 48 + 0 + 8 = 56."}
    ], hint2:"Add the yes votes, no votes and abstentions to get the total, then divide 48 by it."},
    {id:"e4u11-l1-x7", type:"spot", q:"A student’s paragraph on human rights history. Tap the claims that are **inaccurate or overstated**.", ask:"is inaccurate or overstated", parts:[
      {t:"The UDHR was adopted by the General Assembly on 10 December 1948.", flag:false, why:"Correct date."},
      " ",
      {t:"It was a binding treaty from the start.", flag:true, why:"It was a declaration. Binding obligations came later, in the 1966 covenants and other treaties, and in custom."},
      " ",
      {t:"Its drafters came from several regions, including China, India, Lebanon and Chile.", flag:false, why:"Accurate: Chang, Mehta, Malik and Santa Cruz among others."},
      " ",
      {t:"No state abstained in the vote.", flag:true, why:"Eight states abstained: six communist states, Saudi Arabia and South Africa."},
      " ",
      {t:"Historians still disagree about when human rights as a movement took off.", flag:false, why:"Accurate: this is the Moyn–Sikkink debate."},
      " ",
      {t:"The 1789 French Declaration already protected the rights of colonized and enslaved people.", flag:true, why:"Overstated. Its rights were rights of citizens, and colonized and enslaved people were excluded; the Haitian Revolution forced the question."}
    ]},
    {id:"e4u11-l1-x8", type:"explain", q:"Jacques Maritain said that the people in UNESCO’s inquiry agreed on the rights “on condition that no one asks us why”. Explain what this shows about how the Universal Declaration was made, and how the drafting history bears on the claim that human rights are “Western”.", size:"3–5 sentences", hint:"Who drafted which words, and did they need to agree on a philosophy?", model:"The drafters agreed on a list of rights without agreeing on why people have them. Maritain’s remark about UNESCO’s 1947–48 inquiry captures this practical agreement without a shared philosophy, which many scholars see as a strength. The drafting also drew on many traditions. P. C. Chang of China is often credited with the word “conscience”, linked to the Confucian idea of *ren*; Hansa Mehta of India is widely credited with changing “all men” to “all human beings”; and Susan Waltz showed how small states shaped the text. That weakens the claim that the Declaration was simply Western, though the eight abstentions in 1948 show it was contested.", points:["Explains agreement on the rights without agreement on why", "Notes that many scholars see this practical agreement as a strength", "Gives at least one contribution from outside the West, such as Chang’s or Mehta’s, or small states’ role", "Links the drafting history to the “Western” charge, without overstating it", "Notes that the Declaration was still contested, for example by the abstentions"]}
   ],
   apply:{
    intro:"Work with primary sources and the historians’ arguments. You need only a browser; all the documents are free.",
    tasks:[
     {t:"Read the Declaration as a historian", how:[
       "Open the UDHR on the UN’s website (un.org, “Universal Declaration of Human Rights”). Read the preamble and Articles 1, 16, 18, 22–26 and 29.",
       "For each, note which drafting debate from the lesson it connects to (equality of men and women, religion, economic rights, duties).",
       "Write down one article you think Moyn would use and one Sikkink would use, and why."
     ], write:"Article… Debate it connects to… Which historian would use it, and how…"},
     {t:"Compare two declarations of 1948", how:[
       "Find the text of the American Declaration of the Rights and Duties of Man (it is on the website of the Inter-American Commission on Human Rights, oas.org).",
       "Compare its structure with the UDHR’s. What is distinctive about its chapter on duties?",
       "Note what the comparison suggests about the “forgotten crucible” argument."
     ], write:"What the American Declaration includes that the UDHR does not… Duties… What this suggests…"},
     {t:"Seminar questions", how:[
       "Choose one and write 200–300 words with a claim, evidence and a counter-argument.",
       "1. Is Moyn right that human rights only became a movement in the 1970s?",
       "2. Does it matter for the legitimacy of human rights today who drafted the UDHR?",
       "3. Is Vasak’s scheme of three generations of rights helpful or misleading?"
     ], write:"My question… My claim… Evidence… Counter-argument and reply…"}
    ],
    proof:"Notes linking UDHR articles to drafting debates, a comparison of the two 1948 declarations, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"alstonhr", where:"Chapter 2 “The Human Rights Regime: International Law Framework and Origins”", note:"Read the parts on the origins of the regime after this lesson; the extracts show how lawyers tell the history."},
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Background on how protecting people became an international concern after 1945."},
    {book:"owh2", where:"Chapter 13, section 13.4 “Out of the Ashes”, and Chapter 14, section 14.4 “Global Tensions and Decolonization”", note:"Background on the post-1945 settlement and on decolonization, the context of the 1940s and 1960s chapters of the story."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u11-l2", title:"The UN human rights machinery and regional systems", minutes:60,
   hook:{q:"In 2025, budget shortfalls hit the UN human rights system. What happened to the Human Rights Committee, the body that monitors the International Covenant on Civil and Political Rights?", options:["It was abolished","It merged with the Human Rights Council","It canceled a scheduled session for the first time in its history","It moved from Geneva to New York"], answer:2, reveal:"**It canceled its autumn session for the first time.** According to the High Commissioner, the UN’s liquidity crisis meant that treaty body meeting time was cut by about 30% in 2025. He also reported that reviews of dozens of states were postponed. The machinery you meet in this lesson is real, but it runs on money, time and states’ cooperation, and all three are contested."},
   goals:[
     "Distinguish Charter-based from treaty-based UN human rights bodies and say what each produces",
     "Explain how treaty bodies, the Human Rights Council, the Universal Periodic Review, special procedures, commissions of inquiry and OHCHR work in practice, including their politics",
     "Explain national human rights institutions and the Paris Principles",
     "Compare the European, Inter-American, African and ASEAN systems in depth, with landmark cases and current challenges (as of November 2026)"
   ],
   learn:[
    {h:"Two families of UN bodies", body:[
      {lead:"A reminder from the IR primer: the UN has core human rights treaties, each watched by a committee. It also has a Human Rights Council where states review each other (see {{human-rights-regime}}). Seminars go further and ask what each body can actually do, and who controls it."},
      "Specialists sort UN human rights bodies into two families.",
      {fig:'<svg viewBox="0 0 340 400"><rect class="d-panel" x="10" y="8" width="320" height="44" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">UN human rights machinery</text><g stroke-width="2"><rect class="d-lup" x="10" y="66" width="152" height="60" rx="8"/><rect class="d-gold" x="178" y="66" width="152" height="60" rx="8"/></g><text x="86" y="90" text-anchor="middle">Charter-based</text><text class="s" x="86" y="110" text-anchor="middle">cover all UN members</text><text x="254" y="90" text-anchor="middle">Treaty-based</text><text class="s" x="254" y="110" text-anchor="middle">cover states parties only</text><g class="s"><text x="18" y="154">Human Rights Council</text><text x="18" y="172">(47 states)</text><text x="18" y="202">Universal Periodic</text><text x="18" y="220">Review (peer review)</text><text x="18" y="250">Special procedures</text><text x="18" y="268">(independent experts)</text><text x="18" y="298">Commissions of inquiry</text><text x="18" y="328">OHCHR supports all,</text><text x="18" y="346">led by the High</text><text x="18" y="364">Commissioner</text><text x="186" y="154">10 treaty bodies</text><text x="186" y="172">(independent experts)</text><text x="186" y="202">State reports, then</text><text x="186" y="220">concluding observations</text><text x="186" y="250">General comments</text><text x="186" y="268">(how to read the treaty)</text><text x="186" y="298">Individual complaints,</text><text x="186" y="316">if the state accepts</text><text x="186" y="346">Inquiries and visits</text><text x="186" y="364">(some committees)</text></g><path class="d-ink" d="M170 136 V386" stroke-width="1.5" stroke-dasharray="4 4"/></svg>', alt:"Two columns under the heading UN human rights machinery. Charter-based bodies cover all UN members: the Human Rights Council of 47 states, the Universal Periodic Review, special procedures, commissions of inquiry, and OHCHR, which supports everything. Treaty-based bodies cover only states parties: ten treaty bodies of independent experts, which review state reports and issue concluding observations, write general comments, hear individual complaints if the state accepts, and in some cases run inquiries and visits.", cap:"Charter-based bodies are political and cover everyone; treaty bodies are expert bodies and cover only states that joined the treaty."},
      "**Charter-based** bodies draw their authority from the UN Charter, so they cover every member state. Most are made up of, or controlled by, governments. **Treaty-based** bodies exist because a treaty created them, so they cover only the states that ratified it. They are made up of independent experts."
    ]},
    {h:"Treaty bodies: experts with no enforcement power", body:[
      "The nine [[core-human-rights-treaties|core human rights treaties]] are monitored by ten [[treaty-body|treaty bodies]] (the extra one, the Subcommittee on Prevention of Torture, visits places of detention). Each committee does up to four things:",
      {list:[
        "**Reviews state reports.** Every few years a state reports. The committee holds a dialogue with its delegation, reads “shadow reports” from NGOs, and issues [[concluding-observations|concluding observations]]: praise, concerns and recommendations.",
        "**Writes [[general-comment|general comments]]**, its interpretation of the treaty. General Comment No. 3 of the economic and social rights committee (1990), on the nature of states’ obligations, is a classic (Lesson 4).",
        "**Hears [[individual-communication|individual communications]]** (complaints), but only against states that have accepted this, usually by ratifying an [[optional-protocol|optional protocol]]. Its decisions are called “views”.",
        "**Runs inquiries** into grave or systematic violations (some committees)."
      ]},
      "Are views and concluding observations binding? Committees and many lawyers say states must take them seriously in **good faith**; many governments reply that they are recommendations. Either way, nobody can enforce them.",
      "The system has long struggled with overload: many states report late, and reviews pile up. In 2025 the UN’s budget crisis made this acute (on how the UN is funded, see {{un-funding}}). The High Commissioner reported that treaty body meeting time fell by about 30%. He added that the Human Rights Committee and the Committee against Torture each canceled a session for the first time. Sessions were shortened again in 2026."
    ]},
    {h:"The Council, the UPR and the experts", body:[
      "The [[human-rights-council|Human Rights Council]] replaced the discredited Commission on Human Rights in 2006 (General Assembly resolution 60/251). Its **47 seats** are shared among regional groups: 13 for Africa, 13 for Asia-Pacific, 8 for Latin America and the Caribbean, 7 for Western Europe and others, 6 for Eastern Europe. Members are elected by secret ballot by a majority of the General Assembly for three years. The Assembly can suspend a member by a two-thirds vote. It did so twice: Libya in 2011 and Russia in April 2022.",
      "The Council is a **political** body, and its votes show it. In October 2022 it rejected, by 19 votes to 17 with 11 abstentions, a proposal to debate an OHCHR report on Xinjiang. The report had found “serious human rights violations”. China rejected the report’s findings, and the vote split along lines that cut across regions. Supporters of the Council say it is the only place where every state’s record can be raised. Critics, from different directions, say it is either too soft on powerful states or used selectively against some.",
      "The [[universal-periodic-review|Universal Periodic Review]] (since 2008) reviews **every** UN member, roughly every four to five years. Other states make recommendations, which the state under review either “supports” or “notes”. Its strength is universality; its weakness is that friendly states can fill the speaking list with gentle praise. Non-cooperation is rare. In 2025 the United States, which had stepped back from the Council, did not take part in its scheduled review. As of early November 2026 the review had been rescheduled for 10 November 2026, without the US saying it would take part.",
      {ex:"**Task:** fictional Norland received 240 recommendations at its UPR. It “supported” 170 and “noted” 70. A news headline says: “Norland accepts 71% of human rights demands.” Analyze the outcome.\n1. First I check the arithmetic: 170 ÷ 240 = **71%**. The figure is right, but it says nothing about **which** recommendations were supported.\n2. Next I sort the recommendations by theme, because the UPR report lists them one by one. Suppose most supported ones ask Norland to “continue efforts” on education and health, while the 70 noted ones include all 25 on abolishing the death penalty, all 12 on ratifying the torture convention’s optional protocol and 18 on press freedom.\n3. Then I weigh them by **precision**. “Continue efforts to promote women’s rights” is easy to support; “repeal Article 14 of the Media Law by 2028” is specific and checkable. Scholars often code recommendations by how much action they ask for.\n4. Then I look at **who** made the recommendations. If the noted ones came mostly from one regional group, that shows where the disagreement lies.\n5. Finally I compare with Norland’s previous review: were recommendations supported last time actually implemented?\n**Result:** “Norland supported 71% of recommendations, but mostly general ones; it noted every specific recommendation on the death penalty, torture prevention and media law. The outcome shows engagement with the process, but not acceptance of change in the most contested areas.”\n**Common mistake:** treating “supported” as “implemented”. Support is a promise made at the review; only the next review shows whether it was kept.", label:"Worked example: reading a UPR outcome (invented figures)"},
      "[[special-procedures|Special procedures]] are independent experts, usually a [[special-rapporteur|special rapporteur]] or a working group, with a theme (torture, freedom of expression, the right to food) or a country. They are unpaid, visit countries only by invitation, send letters about individual cases and report publicly. There were about 60 mandates in the early 2020s, most of them thematic. The Council can also create [[commission-of-inquiry|commissions of inquiry]]. Examples are the one on North Korea, whose 2014 report found crimes against humanity (the government rejected it), and the fact-finding mission on Myanmar (report 2018).",
      "The [[ohchr|Office of the High Commissioner for Human Rights (OHCHR)]], created after the Vienna conference of 1993, is the secretariat for all of this and runs field offices. Volker Türk of Austria has been High Commissioner since October 2022. According to news reports, the General Assembly approved a second term in July 2026. Some states opposed it, the reports said, including the United States, Israel and Russia."
    ]},
    {h:"National human rights institutions", body:[
      "Much human rights work happens at home. A [[nhri|national human rights institution (NHRI)]] is an independent state body, such as a human rights commission or ombudsman, that monitors rights, handles complaints and advises government. The [[paris-principles|Paris Principles]] (General Assembly, 1993) set standards for their independence, mandate and funding. A global alliance of NHRIs reviews members and gives “A status” to those that fully comply. Examples from Asia and the Pacific include commissions in India, Indonesia, the Philippines, South Korea, Malaysia, Australia and New Zealand. They cooperate through the Asia Pacific Forum (founded 1996). Some states, Japan among them, have received repeated UPR recommendations to set one up."
    ]},
    {h:"Regional systems compared", body:[
      "Regional systems are often stronger than the UN’s because some have **courts** whose judgments bind. A person must normally go through national courts first ([[exhaustion-of-domestic-remedies|exhaustion of domestic remedies]]).",
      {table:[
        ["System","Landmark and practice","Challenges (as of 2026)"],
        ["Europe: [[european-court-of-human-rights|European Court of Human Rights]] (Strasbourg)","Since 1998 a full-time court that any individual can reach; judgments’ execution is supervised by the Council of Europe’s Committee of Ministers","Backlogs, slow execution in some states; Russia was expelled in March 2022 and ceased to be a party in September 2022"],
        ["Americas: [[inter-american-human-rights-system|Inter-American Commission and Court]]","*Velásquez Rodríguez v. Honduras* (1988) on enforced disappearance; “conventionality control” asks national judges to apply the Convention","The US and Canada are not parties to the Convention; Trinidad and Tobago and Venezuela denounced it"],
        ["Africa: [[african-charter-human-peoples-rights|African Charter]], Commission (Banjul) and Court (Arusha)","*SERAC v. Nigeria* (2001) on the Ogoni people, oil and the rights to health and food; peoples’ rights and duties","Few states let individuals go straight to the Court, and several (Rwanda 2016, Tanzania 2019, Benin and Côte d’Ivoire 2020, Tunisia 2025) withdrew that permission"],
        ["Southeast Asia: [[aichr|AICHR]] (since 2009)","ASEAN Human Rights Declaration (2012); promotion and dialogue","No court and no complaint procedure; consensus; members appointed by governments"]
      ]},
      "Two ideas are worth knowing. The European Court gives states a [[margin-of-appreciation|margin of appreciation]]: room to decide sensitive matters, such as religion in schools, in their own way, within limits. Critics call it too generous or too narrow depending on the case. The African Charter’s **peoples’ rights** made it possible to hear claims by communities, such as the Endorois of Kenya over their ancestral land (decided 2009–10).",
      {ex:"**Task:** Amara, a journalist in the fictional state of Ostavia, was jailed for a year after criticizing a minister. Her lawyer asks which international bodies could hear her case.\n1. First I list the rights involved, because each body applies its own treaty. Freedom of expression (ICCPR Article 19) and freedom from arbitrary detention (Article 9).\n2. Next I check **ratifications**. Ostavia has ratified the ICCPR, so the Human Rights Committee reviews its reports. But an individual complaint needs the **First Optional Protocol**. If Ostavia has not joined it, the Committee cannot hear Amara’s case.\n3. Then I check the **regional system**. Suppose Ostavia is in Africa and has ratified the African Charter. The African Commission in Banjul can receive complaints. The Court in Arusha can hear her directly only if Ostavia has made a special declaration, which several states have withdrawn.\n4. Then I check **admissibility**. Has she used up national remedies ([[exhaustion-of-domestic-remedies|exhaustion of domestic remedies]])? If her appeal is still pending, any body will say “too early”, unless remedies are ineffective or unduly delayed.\n5. Finally I add bodies that need **no ratification**: a [[special-rapporteur|special rapporteur]] on freedom of expression can send a letter to the government, and her case can be raised at Ostavia’s next UPR.\n**Result:** a routing note: “Main route: the African Commission, after the final appeal. Supporting routes: urgent letter from the special rapporteurs; UPR shadow report. Not available: Human Rights Committee (no Optional Protocol).”\n**Common mistake:** assuming every UN body can hear every complaint. Treaty bodies hear complaints only against states that have accepted that procedure.", label:"Worked example: where can a complaint go?"},
      "The ASEAN Declaration was welcomed as a first step. NGOs and the then High Commissioner criticized it for clauses allowing rights to be balanced against “national and regional contexts”. ASEAN governments replied that it reflected the region’s approach of consultation and non-interference (the [[asean-way|ASEAN way]]). Elsewhere, the Arab Charter on Human Rights (2004, in force 2008) has a committee but no working court. There is no Asia-Pacific-wide system at all.",
      {h:"The machinery through IR lenses"},
      "Why would states build bodies that criticize them? A {{realism|realist}} answers that the machinery is cheap talk: states join because it costs little, and powerful states ignore findings they dislike. A {{neoliberal-institutionalism|liberal institutionalist}} sees it as an information system: reports, reviews and complaints produce public facts that voters, courts, investors and other governments can use. A {{constructivism|constructivist}} stresses socialization. On this view, repeated reporting and dialogue teach officials a shared language. That, constructivists say, is why even states accused of abuses now argue that they respect rights rather than that rights do not matter. Andrew Moravcsik (2000) offered a domestic answer for Europe: newly democratic governments locked in rights through the European Convention to protect themselves against future backsliding. Lesson 3 asks which of these stories the evidence supports.",
      {terms:["core-human-rights-treaties","concluding-observations","general-comment","individual-communication","optional-protocol","special-procedures","special-rapporteur","commission-of-inquiry","ohchr","nhri","paris-principles","exhaustion-of-domestic-remedies","european-court-of-human-rights","inter-american-human-rights-system","african-charter-human-peoples-rights","aichr","margin-of-appreciation"]}
    ]}
   ],
   try:[
    {id:"e4u11-l2-x1", type:"sort", q:"Charter-based or treaty-based?", buckets:["Charter-based","Treaty-based"], items:[
      {t:"The Universal Periodic Review", b:0, why:"A mechanism of the Council, a Charter body (set up under General Assembly resolution 60/251); it reviews every UN member."},
      {t:"The Committee on the Elimination of Discrimination against Women", b:1, why:"Created by CEDAW; it covers only states parties."},
      {t:"The Special Rapporteur on freedom of expression", b:0, why:"A special procedure mandated by the Human Rights Council."},
      {t:"The Committee against Torture", b:1, why:"Created by the Convention against Torture."},
      {t:"The commission of inquiry on North Korea", b:0, why:"Created by the Human Rights Council."},
      {t:"The Subcommittee on Prevention of Torture", b:1, why:"Created by the Optional Protocol to the Convention against Torture; it visits places of detention."}
    ]},
    {id:"e4u11-l2-x2", type:"mcq", q:"Kenji’s country has ratified the ICCPR but not its First Optional Protocol. He believes his rights under the Covenant were violated and his national courts rejected his case. Can he send a complaint to the Human Rights Committee?", options:[
      {t:"No: his state has not accepted the complaints procedure", ok:true, why:"Right. The Committee hears individual complaints only against states that have accepted the procedure, here by ratifying the Optional Protocol. Ratifying the Covenant creates reporting duties; complaints need the extra step."},
      {t:"Yes: every state party to a treaty is open to complaints", why:"Complaint procedures are optional; states must accept them separately."},
      {t:"Yes, but only after the Human Rights Council approves", why:"The Council has no role in treaty body complaints."},
      {t:"No, because individuals can never complain to UN bodies", why:"They can, against states that have accepted the procedure."}
    ]},
    {id:"e4u11-l2-x3", type:"match", q:"Match each output to the body and purpose.", pairs:[
      ["Concluding observations","A treaty body’s recommendations after reviewing a state’s report","They follow a dialogue with the state’s delegation."],
      ["General comment","A treaty body’s interpretation of what a treaty requires","For example General Comment No. 3 on states’ obligations under the ICESCR (1990)."],
      ["Views","A treaty body’s decision on an individual complaint","Not enforceable, though committees say states should implement them in good faith."],
      ["Supported or noted recommendations","The outcome of a state’s Universal Periodic Review","The state under review decides which to support."],
      ["Country visit report","A special rapporteur’s findings after a visit made by invitation","Visits need the state’s consent."]
    ]},
    {id:"e4u11-l2-x4", type:"mcq", q:"Which statement about Human Rights Council membership is accurate?", options:[
      {t:"The Assembly can suspend a member by a two-thirds vote", ok:true, why:"Correct. The General Assembly did so with Libya (2011) and Russia (2022). The Council’s 47 seats are allocated by regional group."},
      {t:"Its members are independent experts, not states", why:"That describes treaty bodies and special procedures. The Council is made up of states."},
      {t:"The five permanent members of the Security Council hold permanent seats", why:"There are no permanent seats; members are elected for three years."},
      {t:"Only states with clean human rights records may be elected", why:"Candidates are asked to uphold high standards, but there is no such test, which is one criticism of the Council."}
    ]},
    {id:"e4u11-l2-x5", type:"match", q:"Match each regional system with a feature that belongs to it.", pairs:[
      ["European system","Any individual can apply to a full-time court; the Committee of Ministers supervises execution","Since Protocol 11 entered into force in 1998."],
      ["Inter-American system","*Velásquez Rodríguez* (1988) on disappearances and the doctrine of conventionality control","The Court sits in San José, Costa Rica."],
      ["African system","Peoples’ rights and duties; *SERAC v. Nigeria* on the Ogoni and oil","The Court sits in Arusha, Tanzania."],
      ["ASEAN","A commission that works by consensus, with no court or complaint procedure","AICHR, created in 2009."]
    ]},
    {id:"e4u11-l2-x6", type:"spot", q:"Tap the claims in this briefing that are **wrong**.", ask:"is wrong", parts:[
      {t:"The Human Rights Council replaced the Commission on Human Rights in 2006.", flag:false, why:"Correct (General Assembly resolution 60/251)."},
      " ",
      {t:"Special rapporteurs are paid UN staff who can enter any country without permission.", flag:true, why:"Wrong twice: they are unpaid independent experts, and country visits need the state’s invitation."},
      " ",
      {t:"National human rights institutions are judged against the Paris Principles.", flag:false, why:"Correct; accreditation reviews use them."},
      " ",
      {t:"Asia and the Pacific have a region-wide human rights court based in Bangkok.", flag:true, why:"There is no Asia-Pacific-wide system or court; ASEAN has a commission without a court."},
      " ",
      {t:"European Court judgments bind the states concerned.", flag:false, why:"Correct; execution is supervised by the Committee of Ministers."}
    ]},
    {id:"e4u11-l2-x7", type:"number", q:"In an invented example, a treaty body had 40 working weeks of meetings planned and its time was cut by 30%. How many working weeks remain?", answer:28, tol:0, unit:"weeks", why:"30% of 40 is 0.3 × 40 = 12 weeks. 40 − 12 = 28 weeks remain.", wrongs:[
      {v:12, tol:0, why:"That is the amount cut, not what remains."},
      {v:10, tol:0, why:"That subtracts 30 from 40 as if the cut were 30 weeks, not 30%."},
      {v:52, tol:0, why:"That adds the cut instead of subtracting it."}
    ], hint2:"Find 30% of 40, then subtract it from 40."},
    {id:"e4u11-l2-x8", type:"explain", q:"Compare a UN treaty body with the Human Rights Council: who sits on each, what each produces, and why scholars call the Council a political body.", size:"3–5 sentences", hint:"One is a committee of experts watching one treaty; the other is a body of 47 states.", model:"A treaty body is a committee of experts that monitors one core treaty. It reviews state reports, reads NGO shadow reports and issues concluding observations, writes general comments, and hears individual complaints only against states that have accepted this. Committees say states must take its views seriously in good faith; many governments call them recommendations, and nobody can enforce them. The Human Rights Council is made up of 47 states elected by the General Assembly by regional group. Its votes show politics at work: in October 2022 it voted 19 to 17 not to debate an OHCHR report on Xinjiang, which China rejected.", points:["Describes treaty bodies as expert committees monitoring one treaty", "Names at least two things treaty bodies produce, such as concluding observations or general comments", "Notes the debate over whether their findings bind, and that nobody can enforce them", "Describes the Council as 47 elected states", "Gives evidence that the Council is political, such as the 2022 Xinjiang vote"]}
   ],
   apply:{
    intro:"Look at the machinery from the inside, using free UN and regional websites. No accounts needed.",
    tasks:[
     {t:"Follow one country through the UPR", how:[
       "Choose any country (try one you know little about). On the OHCHR website, open its page in the Universal Periodic Review section and find its most recent review.",
       "Note three recommendations it supported and three it noted, and which states made them.",
       "Ask: what do the patterns of who recommends what suggest about the politics of peer review?"
     ], write:"Country and year… Supported… Noted… Who made them… What the pattern suggests…"},
     {t:"Read a concluding observation", how:[
       "Pick one treaty body (for example the Committee on the Rights of the Child) and find its concluding observations on the same country.",
       "Compare their tone and detail with the UPR recommendations.",
       "Note one reason the two might differ (experts versus states, legal versus political)."
     ], write:"Treaty body… Main concerns… How it differs from the UPR… Why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 200–300 words.",
       "1. Is a political body of states the right place to judge states’ human rights records?",
       "2. Why have Asia and the Pacific not built a region-wide human rights court, and does it matter?",
       "3. Should treaty body views be treated as binding?"
     ], write:"My question… My claim… Evidence… Counter-argument and reply…"}
    ],
    proof:"Notes on one country’s UPR outcome and a treaty body’s concluding observations, with a comparison, and a seminar paragraph."
   },
   read:[
    {book:"ospol", where:"Chapter 15, section 15.2 “International Law”", note:"A gentle reminder of why international law relies on reporting, review and pressure rather than police."},
    {book:"eir", where:"Chapter 5 “International Law” (Knut Traisbach)", note:"Background on the sources and enforcement of international law."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u11-l3", title:"Do human rights treaties work?", minutes:60,
   hook:{q:"In a famous 2002 study, Oona Hathaway compared countries’ human rights practices with whether they had ratified human rights treaties. What did she find?", options:["Ratification was not generally associated with better practices, and in some cases with worse ones","Ratifying states almost always improved","Treaties worked only in rich countries","There was no data to test the question"], answer:0, reveal:"**Ratification was not generally associated with better practices, and sometimes with worse.** Hathaway argued that joining a treaty can be a way to gain approval at low cost. Her article launched a debate that has run for over twenty years, with Beth Simmons, Kathryn Sikkink and others finding effects under particular conditions. This lesson follows that debate and the models of how change happens."},
   goals:[
     "Explain the commitment–compliance gap and why it is hard to measure",
     "Summarize Hathaway (2002) and Simmons (2009), and the mechanisms each proposes",
     "Use the boomerang pattern and the five phases of the spiral model on real cases, and explain the later scope conditions",
     "Evaluate human rights data (Political Terror Scale, CIRI, V-Dem) and the debate over a changing standard of accountability",
     "Weigh optimistic and pessimistic readings of the evidence (Sikkink versus Hopgood and Posner)"
   ],
   learn:[
    {h:"The puzzle: why sign, and does signing matter?", body:[
      {lead:"Almost every state has ratified several human rights treaties. Many of them torture, censor or discriminate anyway. So what are the treaties for?"},
      "Scholars call the distance between promises and behavior the [[commitment-compliance-gap|commitment–compliance gap]]. It raises two questions that are easy to mix up: **why do states ratify**, and **does ratification change what they do?**",
      "For IR theory this is a test case. Realists expect little effect, because no one enforces the treaties against the states that break them. Liberal and constructivist scholars expect effects through domestic politics, information and socialization. Measuring which is right turns out to be very hard, because the states that ratify are not a random sample (compare [[selection-bias|selection bias]] in {{case-selection}})."
    ]},
    {h:"Hathaway: treaties as expressions", body:[
      "Oona Hathaway’s “Do Human Rights Treaties Make a Difference?” (*Yale Law Journal*, 2002) compared ratification with ratings of practices. She looked at torture, fair trials, genocide, women’s political rights and more, across many countries and decades. She found that ratification was **not generally associated with better practices**, and in some cases was associated with **worse** ones, especially in non-democracies.",
      "Her explanation was the [[expressive-function-treaties|expressive function]] of treaties. In her account, ratifying sends a message of commitment that earns approval. Because monitoring and enforcement are weak, that message costs little to send. Treaties can then act as a **substitute** for real change.",
      "Critics, notably Ryan Goodman and Derek Jinks (2003), replied that the data were too crude to support the strong conclusion. They also argued that treaties work through slow social processes that a simple before-and-after comparison misses. Hathaway herself stressed that democracies looked different from autocracies, which pointed the debate toward domestic politics.",
      "James Vreeland (2008) added a twist: dictatorships with several legal parties were **more** likely to join the Convention against Torture and also tortured more. His reading: such regimes face organized opposition, so they torture more, and they also face more pressure to make concessions such as ratifying. The correlation does not mean that the treaty causes torture."
    ]},
    {h:"Simmons: treaties work through domestic politics", body:[
      "Beth Simmons’s *Mobilizing for Human Rights: International Law in Domestic Politics* (2009) is the most cited answer (see {{beth-simmons}}). She studied the ICCPR, CEDAW, the Convention against Torture and the Convention on the Rights of the Child. She argued that treaties matter because they change **domestic** politics in three ways:",
      {ol:[
        "**Setting the agenda**: ratification puts issues before governments and parliaments that they would otherwise ignore.",
        "**Litigation**: courts can apply treaties, if the legal system allows it.",
        "**[[domestic-mobilisation|Mobilization]]**: citizens and groups use the treaty to frame demands and to gain allies, which raises the political cost of violations."
      ]},
      "Her key finding was conditional: effects were **largest in “transitional” or partially democratic states**, where people have both a motive and the means to mobilize. In stable democracies rights are already protected; in closed autocracies people cannot use the treaty. She found, for example, that ratification of CEDAW was associated with progress on girls’ education and women’s access to contraception. She also found that the torture convention had effects in transitional states.",
      {key:"The modern consensus is conditional: treaties rarely change behavior on their own, but they give domestic actors tools that can matter under the right conditions."}
    ]},
    {h:"How change happens: the boomerang and the spiral", body:[
      "Constructivist scholars traced the **mechanisms**. Margaret Keck and Kathryn Sikkink’s *Activists Beyond Borders* (1998) described [[transnational-advocacy-network|transnational advocacy networks]] and the [[boomerang-pattern|boomerang pattern]] (see {{norm-dynamics}}). In this pattern, activists who are blocked at home reach allies abroad, who pressure their government from outside. The classic case is the mothers of the disappeared in Argentina in the late 1970s. Their information reached foreign governments and the UN through networks of NGOs.",
      "Thomas Risse, Stephen Ropp and Kathryn Sikkink’s *The Power of Human Rights: International Norms and Domestic Change* (1999) turned the boomerang into a five-phase [[human-rights-spiral-model|spiral model]]. (Not to be confused with Jervis’s [[spiral-model|spiral model]] of the security dilemma.)",
      {fig:'<svg viewBox="0 0 340 360"><g stroke-width="2"><rect class="d-rose" x="10" y="292" width="140" height="54" rx="8"/><rect class="d-rose" x="50" y="230" width="140" height="54" rx="8"/><rect class="d-gold" x="90" y="168" width="140" height="54" rx="8"/><rect class="d-lup" x="130" y="106" width="140" height="54" rx="8"/><rect class="d-sage" x="170" y="44" width="160" height="54" rx="8"/></g><text x="80" y="314" text-anchor="middle">1 Repression</text><text class="s" x="80" y="332" text-anchor="middle">activists blocked</text><text x="120" y="252" text-anchor="middle">2 Denial</text><text class="s" x="120" y="270" text-anchor="middle">“internal affairs”</text><text x="160" y="190" text-anchor="middle">3 Tactical</text><text class="s" x="160" y="208" text-anchor="middle">concessions</text><text x="200" y="128" text-anchor="middle">4 Prescriptive</text><text class="s" x="200" y="146" text-anchor="middle">status: rules accepted</text><text x="250" y="66" text-anchor="middle">5 Rule-consistent</text><text class="s" x="250" y="84" text-anchor="middle">behavior</text><text class="s" x="252" y="236">pressure from</text><text class="s" x="252" y="252">above (networks,</text><text class="s" x="252" y="268">states, IOs) and</text><text class="s" x="252" y="284">below (domestic</text><text class="s" x="252" y="300">groups)</text><text class="s" x="170" y="24" text-anchor="middle">Risse, Ropp and Sikkink (1999)</text></svg>', alt:"A staircase of five steps rising from bottom left to top right: 1 repression, with activists blocked; 2 denial, the government claims it is an internal affair; 3 tactical concessions; 4 prescriptive status, the rules are accepted; 5 rule-consistent behavior. A note says pressure comes from above, from networks, states and international organizations, and from below, from domestic groups.", cap:"The spiral model: pressure from above and below can move a government up the steps. States can stall or slide back at any step."},
      {list:[
        "**Repression**: domestic opposition is weak; little information gets out.",
        "**Denial**: the government rejects criticism as interference in its internal affairs, which already concedes that the issue is being discussed.",
        "**[[tactical-concessions|Tactical concessions]]**: it releases prisoners or allows visits to reduce pressure, which opens space for domestic groups.",
        "**[[prescriptive-status|Prescriptive status]]**: it accepts the rules, ratifies treaties and changes laws.",
        "**Rule-consistent behavior**: practice follows the rules."
      ]},
      "Take two Asian cases from the original study. In the Philippines, foreign pressure and a growing domestic movement reinforced each other in the early 1980s. The fall of Ferdinand Marcos in 1986 brought prescriptive status: the 1987 Constitution created a Commission on Human Rights. In Indonesia under Suharto, international criticism after the killing of protesters in Dili, East Timor, in 1991 produced tactical concessions. One was a national human rights commission in 1993, which domestic groups then used. Deeper change came only after Suharto fell in 1998.",
      "The 1999 book tested the model on eleven countries, including Kenya, Uganda, South Africa, Tunisia, Morocco, Indonesia, the Philippines, Chile, Guatemala, Poland and Czechoslovakia. Its sequel, *The Persistent Power of Human Rights: From Commitment to Compliance* (2013), admitted that many states stall between steps 3 and 4. It added **scope conditions**: regime type, [[limited-statehood|limited statehood]], whether rule implementation is centralized, and whether the target is vulnerable to material or social pressure. (Under limited statehood, a government that cannot control its own police or territory may want to comply and fail.)",
      {ex:"**Task:** place the fictional state of Varnia on the [[human-rights-spiral-model|spiral model]] for each period, and say what moved it.\n1. First I write a timeline of facts only, because coding comes after description. 1995–2002: opposition leaders detained, foreign press barred. 2003: after a UN special rapporteur’s report, the government calls criticism “interference in internal affairs”. 2006: it releases 40 prisoners and invites the Red Cross. 2009: it ratifies the Convention against Torture and passes a law against torture. 2015: courts convict two police officers of torture.\n2. Next I match each period to a phase, using the definitions. 1995–2002: **repression** (little information gets out). 2003: **denial**, which already concedes that the issue is being discussed. 2006: [[tactical-concessions|tactical concessions]]. 2009: [[prescriptive-status|prescriptive status]]: it accepts the rules in law. 2015: early signs of **rule-consistent behavior**.\n3. Then I look for the **mechanism** that moved each step: who applied pressure from above (UN, foreign governments) and from below (domestic groups)? If domestic groups grew after the 2006 releases, that fits the model’s claim that concessions open space for activists.\n4. Finally I check the **scope conditions** from the 2013 sequel: does the government control its police across the country? If not, slow progress after 2009 may be [[limited-statehood|limited statehood]], not bad faith.\n**Result:** a coded timeline, plus one sentence: “Varnia moved from denial to prescriptive status in six years, driven by combined outside and domestic pressure; whether practice now follows the rules is uncertain, because only two convictions have followed.”\n**Common mistake:** treating the phases as a ladder every state climbs. Many states stall at tactical concessions or slide back; code what happened, not what the model expects.", label:"Worked example: coding a case with the spiral model"},
      "A related tool is [[naming-and-shaming|naming and shaming]]: publicly exposing violations. Emilie Hafner-Burton (2008) found that shaming by NGOs, the media and the UN was associated with improvements in some rights, such as political rights, but not in others. She also found that terror sometimes increased after shaming."
    ]},
    {h:"The data problem: is the world getting better or are we looking harder?", body:[
      "Quantitative research depends on ratings coded from reports by Amnesty International, Human Rights Watch and the US State Department. The [[political-terror-scale|Political Terror Scale]] (from 1976) rates physical integrity violations on a 1–5 scale. The CIRI dataset (1981–2011) coded many rights, and V-Dem codes civil liberties from expert surveys (see {{ir-datasets}}).",
      "These scores long seemed to show little improvement. Christopher Fariss (*American Political Science Review*, 2014) argued that the [[changing-standard-of-accountability|standard of accountability]] has risen. In his view, monitors look harder and judge more strictly over time, so a constant score can hide real improvement. Correcting for this, his estimates show gradual improvement in respect for physical integrity rights over recent decades. Ann Marie Clark and Sikkink (2013) made a related point about **information effects**. More and better information, they argued, can make things look worse. This problem is sometimes called the **information paradox**.",
      {ex:"Mei reads: “Torture reports in Country Z doubled after it joined the Convention against Torture. The treaty made things worse.”\n1. Measurement: did reports double because torture rose, or because the treaty’s committee, NGOs and journalists started looking?\n2. Selection: was Z joining because a new government was already changing course?\n3. Timing: is the period long enough for slow effects?\n4. A careful conclusion: “Reports rose after ratification; the data cannot tell us whether practice worsened or monitoring improved without other evidence.”", label:"Worked example: reading a human rights statistic"}
    ]},
    {h:"Optimists and pessimists", body:[
      "The debate has a public face. Stephen Hopgood’s *The Endtimes of Human Rights* (2013) argued that the global human rights system is losing authority as Western power declines. (He calls this system capital-H “Human Rights”.) Local struggles for rights, in his view, will continue. Eric Posner’s *The Twilight of Human Rights Law* (2014) argued that the treaties are too vague and too many to guide states. He suggested that development aid might do more good.",
      "Sikkink’s *Evidence for Hope* (2017) answered that pessimists compare the world to an **ideal**, whereas the right comparison is with the **past**. On many measures, she argued, from the death penalty to women’s political rights and child mortality, the past was worse. Pessimists reply that improvements may owe more to economic growth and democratization than to human rights law. They add that new threats are rising.",
      {warn:"Avoid both “treaties don’t work” and “treaties work”. A strong seminar claim specifies the right, the treaty, the mechanism, the type of state and the period. It also says what evidence would change your mind."},
      {terms:["commitment-compliance-gap","expressive-function-treaties","domestic-mobilisation","transnational-advocacy-network","human-rights-spiral-model","tactical-concessions","prescriptive-status","limited-statehood","naming-and-shaming","political-terror-scale","changing-standard-of-accountability"]}
    ]}
   ],
   try:[
    {id:"e4u11-l3-x1", type:"mcq", q:"Why is it hard to tell whether ratifying a treaty causes better behavior?", options:[
      {t:"Ratifiers may differ from non-ratifiers in other ways", ok:true, why:"Right. States choose whether to ratify, and those differences may also affect their behavior. Ratification is not randomly assigned; selection and confounding make simple comparisons misleading."},
      {t:"No data on human rights practices exist", why:"There are several datasets; the difficulty is interpreting them, not their absence."},
      {t:"Treaties forbid researchers from studying compliance", why:"No treaty does this."},
      {t:"All states have ratified all treaties, so there is no variation", why:"Ratification varies a great deal by treaty, state and year."}
    ]},
    {id:"e4u11-l3-x2", type:"match", q:"Match each scholar to the argument.", pairs:[
      ["Hathaway (2002)","Ratification often acts as a cheap expression of commitment rather than a cause of change","Her expressive-function argument."],
      ["Simmons (2009)","Treaties matter most in transitional states, through agenda setting, litigation and mobilization","*Mobilizing for Human Rights*."],
      ["Vreeland (2008)","Multi-party dictatorships both torture more and are more likely to join the torture convention","Correlation is not causation."],
      ["Fariss (2014)","Monitors have become stricter, so constant scores can hide improvement","The changing standard of accountability."],
      ["Hopgood (2013)","The global human rights system is losing authority as Western power declines","*The Endtimes of Human Rights*."]
    ]},
    {id:"e4u11-l3-x3", type:"order", q:"Put the phases of the spiral model in order.", items:[
      {t:"Repression: domestic opposition is too weak to challenge the government", why:"The starting point."},
      {t:"Denial: the government calls criticism interference in internal affairs", why:"Denial already shows the issue has reached the international agenda."},
      {t:"Tactical concessions: prisoners released, visits allowed, to ease pressure", why:"Concessions meant to be cosmetic open space for domestic groups."},
      {t:"Prescriptive status: the government accepts the norms, ratifies and changes laws", why:"The rules are now accepted as valid."},
      {t:"Rule-consistent behavior: practice matches the rules", why:"The end point, which many states never reach."}
    ]},
    {id:"e4u11-l3-x4", type:"mcq", q:"Ana studies a country where the government has signed every treaty and genuinely wants to stop police abuse, but has little control over police in remote provinces. Which concept from *The Persistent Power of Human Rights* fits best?", options:[
      {t:"Limited statehood: the problem is capacity, not will", ok:true, why:"Right. Risse, Ropp and Sikkink (2013) added limited statehood as a scope condition that blocks compliance even when governments are committed."},
      {t:"The denial phase", why:"The government is not denying; it accepts the norms."},
      {t:"The expressive function of treaties", why:"That would mean ratifying without intending to comply; here the intention is genuine."},
      {t:"The boomerang pattern", why:"The boomerang is about activists getting outside pressure, which is not the problem here."}
    ]},
    {id:"e4u11-l3-x5", type:"sort", q:"Which mechanism from Simmons does each example show?", buckets:["Agenda setting","Litigation","Mobilization"], items:[
      {t:"A national court cites the Convention on the Rights of the Child to strike down a law", b:1, why:"Courts applying the treaty is litigation."},
      {t:"After ratifying CEDAW, a parliament debates a family law reform for the first time", b:0, why:"Ratification put the issue on the government’s agenda."},
      {t:"Women’s groups organize a campaign framed around the government’s CEDAW promises", b:2, why:"Using the treaty to frame demands and build coalitions is mobilization."},
      {t:"A lawyer brings a case arguing that a police practice violates the Convention against Torture", b:1, why:"Bringing the treaty into court is litigation."},
      {t:"Disability organizations use the treaty’s language to recruit members and allies", b:2, why:"The treaty helps groups mobilize."}
    ]},
    {id:"e4u11-l3-x6", type:"spot", q:"A think-tank summary of research. Tap the claims that **go beyond the evidence**.", ask:"goes beyond the evidence", parts:[
      {t:"Ratification alone is rarely associated with large improvements.", flag:false, why:"A fair summary of much research since Hathaway."},
      " ",
      {t:"Effects appear larger in partially democratic or transitional states.", flag:false, why:"This is Simmons’s central conditional finding."},
      " ",
      {t:"Because reports of abuses rose after ratification, treaties clearly cause abuses.", flag:true, why:"Reports may rise because monitoring increased (the information paradox), and correlation is not causation."},
      " ",
      {t:"Human rights scores may understate progress because monitors have become stricter.", flag:false, why:"This is Fariss’s argument, presented as a possibility."},
      " ",
      {t:"Naming and shaming always improves every right it targets.", flag:true, why:"Hafner-Burton (2008) found mixed effects, including some rises in terror after shaming."}
    ]},
    {id:"e4u11-l3-x7", type:"number", q:"An invented dataset scores 120 countries on a 1–5 scale. In 1990, 30 countries scored 4 or 5 (worst). In 2020, 24 did. By how many **percentage points** did the share of countries in the worst categories fall?", answer:5, tol:0.05, unit:"percentage points", why:"30 ÷ 120 = 25%; 24 ÷ 120 = 20%. 25 − 20 = 5 percentage points.", wrongs:[
      {v:6, tol:0, why:"That is the fall in the number of countries (30 − 24), not in percentage points."},
      {v:20, tol:0.05, why:"That is the relative fall (6 ÷ 30 = 20%), not the change in percentage points."}
    ], hint2:"Turn each count into a percentage of 120 first."},
    {id:"e4u11-l3-x8", type:"explain", q:"Compare Hathaway’s and Simmons’s answers to the question “Do human rights treaties make a difference?”, and explain why the modern consensus is called “conditional”.", size:"3–5 sentences", hint:"Who can actually use a treaty once it is ratified?", model:"Hathaway (2002) found that ratification was not generally linked to better practices, and sometimes to worse ones, especially in non-democracies. She explained this by the treaties’ expressive function: ratifying earns approval and, with weak enforcement, costs little, so it can replace real change. Simmons (2009) argued that treaties work through domestic politics: they set the agenda, give courts something to apply and help citizens mobilize. She found the largest effects in transitional or partly democratic states, where people have both the motive and the means to use them. So treaties rarely change behavior alone, but they give domestic actors tools that matter under the right conditions.", points:["States Hathaway’s finding that ratification often wasn’t linked to better practice", "Explains the expressive function", "Names at least two of Simmons’s mechanisms: agenda, litigation, mobilization", "Explains why effects are largest in transitional states", "States the conditional consensus"]}
   ],
   apply:{
    intro:"Test the models on real material. All sources are free online.",
    tasks:[
     {t:"Trace a spiral", how:[
       "Choose a country whose human rights record changed noticeably at some point in the past (for example the Philippines in the 1980s, Chile, South Africa or Indonesia).",
       "Using reputable encyclopaedia entries, UN pages or NGO histories, list events that fit each spiral phase.",
       "Note where the case does not fit, and which scope condition might explain that."
     ], write:"Country and period… Events for each phase… Where it fits badly… Scope condition…"},
     {t:"Look at the data yourself", how:[
       "Open the Political Terror Scale website (politicalterrorscale.org) and look at the scores for two countries over time.",
       "Note which source (Amnesty, Human Rights Watch, State Department) gives which score, and where they disagree.",
       "Write two sentences on what the scores can and cannot tell you."
     ], write:"Countries… Scores over time… Where sources disagree… What the scores can and cannot show…"},
     {t:"Seminar questions", how:[
       "Choose one and write 200–300 words.",
       "1. Are human rights treaties mainly expressive, or do they change behavior?",
       "2. Is the spiral model a theory of change or a description of a few successful cases?",
       "3. Should we be optimists or pessimists about human rights, on the evidence?"
     ], write:"My question… My claim… Evidence… Counter-argument and reply…"}
    ],
    proof:"A spiral-model analysis of one case with its misfits, notes on human rights scores for two countries, and a seminar paragraph."
   },
   read:[
    {book:"alstonhr", where:"Chapter 14 “Social Movements and Civil Society”", note:"Extracts and debates on the role and accountability of NGOs and movements: the actors in the boomerang and spiral models."},
    {book:"ospol", where:"Chapter 15, section 15.5 “Non-state Actors: Nongovernmental Organizations (NGOs)”", note:"A gentle introduction to what NGOs do and their weaknesses."},
    {book:"eir", where:"Chapter 7 “Global Civil Society”", note:"Background on transnational civil society and its influence."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u11-l4", title:"Universalism and its critics; rights beyond the state", minutes:65,
   hook:{q:"In 1993, Asian governments meeting in Bangkok adopted a declaration on human rights. At the same time, a large group of Asia-Pacific NGOs adopted their own declaration in Bangkok. What did the NGOs’ declaration stress?", options:["That human rights are a Western idea Asia should reject","That universal human rights are rooted in many cultures, including Asian ones","That only economic rights matter","That NGOs should replace governments"], answer:1, reveal:"**That universal human rights are rooted in many cultures.** The NGOs’ Bangkok Declaration argued that culture should not be used to justify violations. The governments’ declaration accepted universality but stressed national and regional particularities and non-interference. The universalism debate was never simply “Asia versus the West”: it ran through every society. This lesson maps the positions."},
   goals:[
     "Distinguish strong and weak forms of cultural relativism, and explain Donnelly’s relative universality and An-Na’im’s cross-cultural legitimacy",
     "Compare the governments’ Bangkok Declaration with the Vienna Declaration (1993) and explain the Asian values debate in human rights terms",
     "Describe Islamic, feminist and postcolonial perspectives on human rights, attributing each position",
     "Explain economic, social and cultural rights: progressive realization, minimum core obligations, justiciability and the right to development",
     "Explain the UN Guiding Principles on Business and Human Rights and the move to mandatory due diligence, as of November 2026"
   ],
   learn:[
    {h:"Universalism and relativism: more than two positions", body:[
      {lead:"Is the right not to be tortured the same in every culture? Most people say yes. Is the right to marry whom you choose? There agreement thins. The universalism debate lives in that gap."},
      "[[cultural-relativism|Cultural relativism]], from anthropology (see {{ethnocentrism-relativism}}), holds that values make sense within their cultures. Applied to human rights, it comes in degrees. Jack Donnelly’s “Cultural Relativism and Universal Human Rights” (1984) distinguished three kinds. **Radical** relativism holds that culture is the only source of moral validity. **Strong** relativism holds that culture mainly decides, with a few universal limits. **Weak** relativism holds that rights are universal, with culture shaping how they are applied.",
      "Donnelly later defended [[relative-universality|relative universality]] in *Universal Human Rights in Theory and Practice* (1989; 3rd edition 2013). By this he means universality at the level of the concept and the list of rights, with legitimate variation in how they are interpreted and implemented.",
      "Abdullahi Ahmed An-Na’im, a Sudanese-born legal scholar, argued for [[cross-cultural-legitimacy|cross-cultural legitimacy]] (edited volume *Human Rights in Cross-Cultural Perspectives*, 1992). In his view, rights last only when people can justify them from within their own traditions. So, for An-Na’im, the task is internal dialogue within cultures and cross-cultural dialogue between them, not imposition.",
      {fig:'<svg viewBox="0 0 340 330"><path class="d-ink" d="M20 300 H320" stroke-width="2"/><text class="s" x="20" y="320">culture decides</text><text class="s" x="320" y="320" text-anchor="end">universal standard</text><g stroke-width="2"><rect class="d-rose" x="10" y="20" width="150" height="58" rx="8"/><rect class="d-gold" x="60" y="92" width="150" height="58" rx="8"/><rect class="d-lup" x="120" y="164" width="150" height="58" rx="8"/><rect class="d-sage" x="180" y="236" width="150" height="52" rx="8"/></g><text x="85" y="44" text-anchor="middle">Radical relativism</text><text class="s" x="85" y="64" text-anchor="middle">culture is the only test</text><text x="135" y="116" text-anchor="middle">Strong relativism</text><text class="s" x="135" y="136" text-anchor="middle">culture mainly decides</text><text x="195" y="188" text-anchor="middle">Weak relativism</text><text class="s" x="195" y="208" text-anchor="middle">relative universality</text><text x="255" y="258" text-anchor="middle">Radical universalism</text><text class="s" x="255" y="276" text-anchor="middle">one standard, no variation</text></svg>', alt:"Four boxes stepping from left to right along an axis from culture decides to universal standard: radical relativism (culture is the only test), strong relativism (culture mainly decides), weak relativism or relative universality, and radical universalism (one standard, no variation).", cap:"Donnelly’s spectrum. Most scholars and the Vienna Declaration sit near the middle-right; few defend either extreme."},
      {ex:"Issue: the death penalty. The ICCPR (Article 6) does not ban it, but limits it to “the most serious crimes”; a Second Optional Protocol (1989) abolishes it for states that join. Many states have abolished it; others, including several in Asia and the Middle East, keep it.\n• A strong relativist: punishment reflects each society’s values and legal traditions; outside criticism is interference.\n• A relative universalist: the right to life is universal; whether it rules out the death penalty is a question of interpretation on which law is still moving.\n• A radical universalist: the right to life forbids it everywhere, now.\n• An An-Na’im-style approach: look for arguments within each society’s own legal and religious traditions that support restricting it.\nA seminar paper describes these positions and the evidence each uses; it does not need to pick one to be good.", label:"Worked example: one issue, four positions"}
    ]},
    {h:"Bangkok, Vienna and Asian values", body:[
      "Before the 1993 World Conference, Asian governments adopted the [[bangkok-declaration|Bangkok Declaration]] (April 1993). It accepted that human rights are universal but said they “must be considered in the context of a dynamic and evolving process of international norm-setting, bearing in mind the significance of national and regional particularities”. It also stressed sovereignty, non-interference and the right to development. This was the human rights side of the [[asian-values|Asian values]] debate (see e4u5 Lesson 1 and {{cultural-turn-ir}}). Leaders such as Lee Kuan Yew and Mahathir Mohamad argued that community, order and family suited Asian societies. Kim Dae-jung and others replied that democracy and rights had Asian roots.",
      "Amartya Sen’s lecture “Human Rights and Asian Values” (1997) added a reply from history. In his account, Asian traditions, from the Buddhist emperor Ashoka to the Mughal emperor Akbar’s tolerance, contain arguments for freedom. European traditions, he noted, likewise contain arguments for order. Supporters of the Asian values position answered that they were not rejecting rights but resisting conditions and lectures from powerful states.",
      "The [[vienna-declaration|Vienna Declaration and Programme of Action]] (June 1993), adopted by 171 states, set the formula still quoted today: “All human rights are universal, indivisible and interdependent and interrelated”. Particularities “must be borne in mind”, it said, but states have a duty “regardless of their political, economic and cultural systems” to protect all human rights. Vienna also called for a High Commissioner (Lesson 2) and declared that women’s rights are human rights."
    ]},
    {h:"Islamic, feminist and postcolonial perspectives", body:[
      "**Islamic perspectives** are many. The Organisation of Islamic Cooperation’s [[cairo-declaration|Cairo Declaration on Human Rights in Islam]] (1990) made rights subject to Islamic law (Sharia). Critics said this narrowed freedoms of religion and expression and women’s equality. Supporters saw it as grounding rights in their own tradition. The OIC revised it in 2020 as the OIC Declaration on Human Rights. Scholars such as An-Na’im argue for reform from within Islamic thought. Others, such as Mashood Baderin (2003), find broad compatibility between international human rights and Islamic law. Others again see deep tensions. The Arab Charter (Lesson 2) is a separate, regional text.",
      "**Feminist critiques** start from the [[public-private-divide|public/private divide]]. In their account, early human rights law focused on what states do in public (prisons, courts, elections). It ignored, they argue, violence in homes and families, where many women suffer abuse. Charlotte Bunch’s “Women’s Rights as Human Rights” (1990) and Hilary Charlesworth, Christine Chinkin and Shelley Wright’s “Feminist Approaches to International Law” (1991) pushed that shift. CEDAW (1979) and the Vienna Declaration reflected it. Intersectional scholars add that “women” are not one group ({{intersectionality-ir}}).",
      "**Postcolonial critiques**: Makau Mutua’s “Savages, Victims, and Saviors” (2001) argued that much human rights writing tells a story with three characters. In his reading, they are a [[savages-victims-saviours|savage]] state (usually in the Global South), a victim, and a Western saviour. Ratna Kapur (2018) and others warn that human rights can carry a “civilizing mission”. These critics mostly want a more plural, less hierarchical human rights practice, not its abolition. Compare [[twail|Third World Approaches to International Law (TWAIL)]], covered in the international law unit (see {{twail}})."
    ]},
    {h:"Economic, social and cultural rights", body:[
      "During the Cold War the West stressed civil and political rights, while the Soviet bloc and many Global South states stressed economic and social ones. The ICESCR asks each state to take steps “to the maximum of its available resources” toward [[progressive-realisation|progressive realization]]. This covers rights to work, social security, food, housing, health and education. Critics read this as a reason to treat them as goals, not rights.",
      "Lawyers have answered in three ways. The treaty committee’s General Comment No. 3 (1990) set [[minimum-core-obligations|minimum core obligations]] (essential levels of food, health care, shelter and education that every state must ensure) and a ban on discrimination that applies immediately. Henry Shue’s *Basic Rights* (1980) argued that subsistence is as basic as security. And courts have shown [[justiciability|justiciability]]. South Africa’s Constitutional Court in *Grootboom* (2000) required a reasonable housing program. India’s Supreme Court issued orders on the right to food from 2001. An optional protocol (2008, in force 2013) allows individual complaints.",
      {ex:"**Task:** after a budget crisis, the fictional state of Sudmark ends free school meals in rural districts but keeps them in the capital. Has it breached the ICESCR?\n1. First I check the **[[minimum-core-obligations|minimum core]]**, because it applies whatever the resources. Are children now going without essential food? If surveys show hunger rising among rural children, a core obligation may be at stake.\n2. Next I check **non-discrimination**, which applies immediately. Cutting meals only in rural districts treats one group worse. Sudmark must show an objective, reasonable justification; if rural children are poorer, the cut points the wrong way.\n3. Then I ask whether this is a **retrogressive measure**, a step backwards. The treaty committee says such steps need the fullest justification: were they necessary, temporary and the least harmful option, and were alternatives considered?\n4. Then I look at **maximum available resources**. Did Sudmark cut meals while keeping spending of lower priority? Budget documents are the evidence here.\n5. Finally I note what kind of body could judge this. The committee reviews reports; if Sudmark has joined the 2008 Optional Protocol, a family could complain. National courts may also hear it, as South Africa’s did in *Grootboom* (2000).\n**Result:** “Ending rural school meals is likely to breach the ICESCR unless Sudmark can show that the cut was temporary, necessary and non-discriminatory. The urban–rural difference is the weakest point of its case.”\n**Common mistake:** concluding that economic rights cannot be breached because they are “progressive”. Progressive realization limits how fast a state must advance; it does not allow discrimination or unjustified backward steps.", label:"Worked example: applying the economic and social rights tests"},
      "The [[right-to-development|Declaration on the Right to Development]] (1986) passed with 146 votes, one against (the United States) and eight abstentions. Its legal status remains debated. In July 2022 the General Assembly recognized a right to a clean, healthy and sustainable environment (161 votes in favor, none against, 8 abstentions). Moyn’s *Not Enough* (2018) argues that human rights at best secure a floor of sufficiency and say little about inequality. Defenders reply that rights were never meant to be the whole of social justice."
    ]},
    {h:"Business and human rights", body:[
      "In 2013 the Rana Plaza building near Dhaka, Bangladesh, collapsed, killing more than 1,100 garment workers. The disaster showed how global supply chains can hide responsibility. The [[ungps|UN Guiding Principles on Business and Human Rights]] were drafted by John Ruggie and endorsed by the Human Rights Council in June 2011. They have three pillars: the state duty to **protect**, the corporate responsibility to **respect** and access to **remedy**. Companies are expected to carry out [[human-rights-due-diligence|human rights due diligence]]: identify, prevent, mitigate and account for their impacts.",
      "The Guiding Principles are soft law. The trend since has been [[mandatory-due-diligence|mandatory due diligence]] laws: France’s duty of vigilance law (2017), Germany’s supply chain act (in force 2023), and the EU’s Corporate Sustainability Due Diligence Directive (2024). In February 2026, after a simplification package, the EU adopted amendments that narrowed it to the largest companies (over 5,000 employees and €1.5 billion turnover). The amendments also moved compliance to 2029. Business groups had sought lighter rules, while NGOs called the changes a weakening. Japan relies on voluntary guidelines (2022) and a national action plan (2020).",
      "Since 2014, a Human Rights Council working group, launched by Ecuador and South Africa, has negotiated a binding treaty on business and human rights. As of November 2026 there was no agreed text. Supporters see a treaty as needed to close gaps, while many Western states and business groups prefer to build on the Guiding Principles.",
      {terms:["relative-universality","cross-cultural-legitimacy","bangkok-declaration","vienna-declaration","cairo-declaration","savages-victims-saviours","progressive-realisation","minimum-core-obligations","justiciability","right-to-development","ungps","human-rights-due-diligence","mandatory-due-diligence"]}
    ]}
   ],
   try:[
    {id:"e4u11-l4-x1", type:"sort", q:"Where does each statement sit on Donnelly’s spectrum?", buckets:["Strong relativism","Weak relativism (relative universality)","Radical universalism"], items:[
      {t:"Fair trial rights apply everywhere, but how a jury or bench is organized can vary by legal tradition.", b:1, why:"Universal right, variable implementation: Donnelly’s relative universality."},
      {t:"Each society’s traditions mainly decide which rights exist, with only a few universal limits such as a ban on genocide.", b:0, why:"Culture mainly decides, with narrow universal limits: strong relativism."},
      {t:"Every state must protect every right in exactly the same way, with no room for local variation.", b:2, why:"No variation at all is radical universalism."},
      {t:"Freedom of religion is universal; whether a state has an established church is a matter of national choice within limits.", b:1, why:"A universal right with variation in form, like the margin of appreciation."},
      {t:"Outside criticism of a society’s practices is mostly illegitimate, except for a handful of acts condemned everywhere, such as slavery.", b:0, why:"Culture mainly decides, with only narrow universal limits: strong relativism."}
    ]},
    {id:"e4u11-l4-x2", type:"mcq", q:"Which statement best summarizes the difference between the governments’ Bangkok Declaration and the Vienna Declaration of 1993?", options:[
      {t:"Both accepted universality but differed in emphasis", ok:true, why:"Right. Bangkok stressed regional particularities and non-interference; Vienna said particularities must be borne in mind but states must protect all rights regardless of their systems. The difference is one of emphasis and of which principle has the last word."},
      {t:"Bangkok rejected human rights entirely; Vienna accepted them", why:"Bangkok explicitly accepted that human rights are universal in nature."},
      {t:"Vienna said culture overrides human rights", why:"Vienna said states must protect rights regardless of their cultural systems."},
      {t:"They were adopted by the same meeting", why:"Bangkok was an Asian regional meeting in April; Vienna the World Conference in June."}
    ]},
    {id:"e4u11-l4-x3", type:"match", q:"Match each critique or perspective to its author.", pairs:[
      ["Rights must be justified from within each culture’s own traditions","Abdullahi Ahmed An-Na’im","Cross-cultural legitimacy (1992)."],
      ["Human rights writing often casts savages, victims and saviours","Makau Mutua","*Harvard International Law Journal* (2001)."],
      ["Violence against women in the home is a human rights issue","Charlotte Bunch","“Women’s Rights as Human Rights” (1990)."],
      ["Asian traditions also contain arguments for freedom and tolerance","Amartya Sen","“Human Rights and Asian Values” (1997)."],
      ["Universal concept, variable interpretation and implementation","Jack Donnelly","Relative universality."]
    ]},
    {id:"e4u11-l4-x4", type:"mcq", q:"A government says: “We cannot afford the right to health yet, so we owe nothing now.” Which reply fits the ICESCR as the treaty committee interprets it?", options:[
      {t:"Minimum core duties and non-discrimination apply now", ok:true, why:"Right. Progressive realization allows gradual progress, but not a delay of everything. General Comment No. 3 (1990) sets a floor and immediate duties within progressive realization."},
      {t:"The government is right: economic rights create no obligations", why:"The treaty creates obligations, including immediate ones."},
      {t:"The government must provide the same health care as the richest country at once", why:"The standard is relative to available resources, with a minimum core."},
      {t:"Only courts can decide, so the committee has no view", why:"The committee has a well-known interpretation, and some courts apply similar ideas."}
    ]},
    {id:"e4u11-l4-x5", type:"order", q:"Put these steps of human rights due diligence, as described in the UN Guiding Principles, in a sensible order.", items:[
      {t:"Identify and assess actual and potential human rights impacts", why:"You cannot act on impacts you have not found."},
      {t:"Integrate findings and act to prevent or mitigate impacts", why:"Assessment leads to action."},
      {t:"Track whether the responses work", why:"Monitoring shows whether action had effect."},
      {t:"Communicate publicly how impacts are addressed", why:"Accounting for impacts closes the cycle; remediation is required where the company caused or contributed to harm."}
    ]},
    {id:"e4u11-l4-x6", type:"spot", q:"Tap the claims in this op-ed summary that are **inaccurate**.", ask:"is inaccurate", parts:[
      {t:"The 1993 Bangkok Declaration of governments rejected the idea of universal human rights.", flag:true, why:"It accepted that rights are universal in nature, while stressing particularities and non-interference."},
      " ",
      {t:"Vienna described all human rights as universal, indivisible, interdependent and interrelated.", flag:false, why:"An accurate quotation of paragraph 5."},
      " ",
      {t:"The UN Guiding Principles on Business and Human Rights are a binding treaty.", flag:true, why:"They are soft law endorsed by the Human Rights Council; a treaty was still under negotiation as of November 2026."},
      " ",
      {t:"South Africa’s Constitutional Court has ruled on the right to housing.", flag:false, why:"Correct: *Grootboom* (2000)."},
      " ",
      {t:"The Declaration on the Right to Development was adopted unanimously.", flag:true, why:"It passed 146–1–8; the United States voted against."}
    ]},
    {id:"e4u11-l4-x7", type:"mcq", q:"Lucía reads that “human rights are imposed on the Global South”. Which response best reflects the scholarship in this lesson?", options:[
      {t:"It captures a real critique but ignores Global South voices", ok:true, why:"Right. The critique comes from scholars such as Mutua and Kapur, but Global South contributions and voices, such as the Bangkok NGOs, defend universal rights. A balanced answer attributes the critique and its limits."},
      {t:"The claim is simply true, as all postcolonial scholars want to abolish human rights", why:"Most postcolonial critics want a more plural practice, not abolition."},
      {t:"The claim is simply false, as no scholar has made it", why:"Serious scholars make versions of it; it deserves engagement."},
      {t:"The claim is about economics, not human rights", why:"It is a claim about the legitimacy of human rights."}
    ]},
    {id:"e4u11-l4-x8", type:"explain", q:"Agreement on rights “thins” on questions such as the right to marry whom you choose. Explain how a strong relativist, Donnelly’s relative universality and An-Na’im’s cross-cultural legitimacy would each approach such a question, without choosing between them.", size:"3–5 sentences", hint:"Is culture the main judge, a guide to application, or a source of arguments from within?", model:"Donnelly showed that relativism comes in degrees. A strong relativist holds that culture mainly decides what rights mean, with a few universal limits, so rules on marriage reflect each society’s values and outside criticism is interference. Donnelly’s relative universality holds that the concept and the list of rights are universal, but their interpretation and implementation can legitimately vary, so the question becomes how far variation can go. An-Na’im argues that rights last only when people can justify them from within their own traditions, so he looks for internal and cross-cultural dialogue, not imposition. A good paper describes these positions and their evidence without needing to pick one.", points:["Explains the strong relativist position", "Explains relative universality: universal concept, varied interpretation", "Explains An-Na’im’s call for justification from within traditions", "Applies the positions to the example", "Presents them without taking sides"]}
   ],
   apply:{
    intro:"Read the texts behind the debate. All are free online.",
    tasks:[
     {t:"Two declarations from 1993", how:[
       "Find the Vienna Declaration and Programme of Action (OHCHR website) and read paragraph 5. Find the text of the Bangkok Declaration of Asian governments (search for “Bangkok Declaration 1993 human rights”) and read its paragraphs 7–8.",
       "Copy one key sentence from each.",
       "Write a neutral paragraph describing the difference, attributing each position."
     ], write:"Vienna sentence… Bangkok sentence… Neutral comparison…"},
     {t:"A company’s human rights statement", how:[
       "Choose a well-known company whose products you use. Find its human rights policy or modern slavery statement on its website.",
       "Check whether it mentions the UN Guiding Principles, due diligence and remedy.",
       "Note what is specific (named risks, supplier audits, grievance channels) and what is vague."
     ], write:"Company… Mentions UNGPs? Due diligence? Remedy?… Specific… Vague…"},
     {t:"Seminar questions", how:[
       "Choose one and write 200–300 words.",
       "1. Is “relative universality” a solution to the universalism debate or a way of avoiding it?",
       "2. Are economic and social rights real rights?",
       "3. Should business human rights duties be binding international law?"
     ], write:"My question… My claim… Evidence… Counter-argument and reply…"}
    ],
    proof:"A neutral comparison of the Vienna and Bangkok texts, notes on one company’s human rights statement, and a seminar paragraph."
   },
   read:[
    {book:"alstonhr", where:"Chapter 6 “Rights versus Duties” and Chapter 18 “Critical Perspectives”", note:"Extracts on duty-based social orders and on critiques of human rights from many directions."},
    {book:"alstonhr", where:"Chapter 13 “Non-State Actors: Businesses and Others”", note:"Business and human rights, from the Guiding Principles to regulation."},
    {book:"eirt", where:"Chapter 16 “Asian Perspectives” (Pichamon Yeophantong) and Chapter 17 “Global South Perspectives”", note:"Background on non-Western perspectives in IR theory, useful for the universalism debate."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u11-l5", title:"Hard cases, and writing about human rights", minutes:65,
   hook:{q:"In 2020 the UN Human Rights Committee published its views on a complaint by Ioane Teitiota, a man from Kiribati whom New Zealand had returned home after he sought protection from the effects of climate change. What did it decide?", options:["New Zealand had violated his right to life and must bring him back","Climate change can never be relevant to human rights","The case was outside the Committee’s powers","New Zealand had not violated his rights on the facts, but climate change could in future make return unlawful"], answer:3, reveal:"**No violation on the facts, but an important door left open.** The Committee found that New Zealand’s courts had properly assessed the risk. Yet it said that without strong national and international action, the effects of climate change could expose people to violations of their right to life. In its view, such violations would forbid sending them back. Hard cases like this, where rights, facts and state interests pull in different directions, are the subject of this lesson."},
   goals:[
     "Explain what makes a human rights case “hard” and how to describe one neutrally",
     "Explain non-refoulement under human rights law as well as refugee law, with Asia-Pacific cases",
     "Use the test of legality, necessity and proportionality to analyze surveillance and spyware debates, with each side’s position",
     "Compare truth commissions in South Africa and Timor-Leste and the debate over truth, justice and amnesty",
     "Write a human rights seminar paper that separates description, attribution and evaluation and avoids an advocacy tone"
   ],
   learn:[
    {h:"What makes a case hard", body:[
      {lead:"Some human rights questions are easy in principle and hard in practice: no one defends torture openly. Others are hard in principle, because legitimate aims and rights collide."},
      "A case is hard when one or more of four things is true. **Rights may conflict** (privacy against security, free expression against protection from hatred). **Facts may be disputed** (how many died, who did it, what a policy actually does). **States may have legitimate interests** (controlling borders, preventing attacks). Or **remedies may trade off** (peace now against justice later).",
      "Most human rights law handles collisions with a three-part test. A restriction must be **provided by law**, pursue a **legitimate aim** and be **necessary and proportionate** to that aim. Some rights, such as the ban on torture, are **absolute** and allow no balancing at all.",
      {key:"Your job in a seminar is to show the structure of the disagreement: which rights, which facts, which interests, and who argues what. Your own view, if you give one, comes last and is clearly marked."}
    ]},
    {h:"Refugees and non-refoulement: the human rights layer", body:[
      "The migration primer explains [[non-refoulement]] under the 1951 [[refugee-convention|Refugee Convention]] (see {{non-refoulement}} and {{refugee-law}}). Human rights law adds a second, wider layer. The Convention against Torture (Article 3) forbids sending anyone to a state where they face a real risk of torture. The Human Rights Committee reads the ICCPR’s rights to life and freedom from cruel treatment the same way. These protections are **absolute**. They cover people excluded from refugee status, and they do not depend on whether a state has joined the Refugee Convention.",
      "That matters in Asia, where many states, including India, Malaysia, Thailand, Indonesia and Bangladesh, are not parties to the Refugee Convention. As of 2025 Bangladesh hosted more than a million Rohingya refugees from Myanmar, according to UNHCR. Bangladesh has said it cannot integrate them and wants their safe return. UN agencies and NGOs have said that conditions in Myanmar do not yet allow safe, voluntary and dignified return. Both positions appear in UN documents. Parties to the Convention face their own debates. Japan amended its immigration law in 2023 (in force 2024) so that people on a third or later asylum application can be deported unless they present new reasons. The government said this addressed repeated applications made to delay removal. UN special rapporteurs and the Japan Federation of Bar Associations warned that it could lead to refoulement.",
      "The *Teitiota* views (2020) extended the debate to climate change, especially for low-lying Pacific states. States stress that they decide who enters; protection advocates stress that non-refoulement limits that power. Scholars disagree about how far the human rights layer should reach, and some states argue that wide readings encourage irregular arrival."
    ]},
    {h:"Surveillance and digital rights", body:[
      "Article 17 of the ICCPR protects against “arbitrary or unlawful interference” with privacy. In 2013 Edward Snowden disclosed mass surveillance by the US and allied agencies. After the disclosures, the General Assembly adopted a resolution on [[right-to-privacy|the right to privacy in the digital age]] (December 2013, led by Brazil and Germany). The Human Rights Council created a special rapporteur on privacy in 2015.",
      {table:[
        ["Case or event","What it decided or showed"],
        ["*Big Brother Watch v. UK* (European Court, Grand Chamber, 2021)","Bulk interception is not unlawful as such, but needs “end-to-end safeguards”; the UK’s regime then lacked some"],
        ["*Puttaswamy* (Supreme Court of India, 2017)","Privacy is a fundamental right under India’s Constitution"],
        ["*Schrems II* (EU Court of Justice, 2020)","Struck down an EU–US data transfer arrangement over US surveillance law"],
        ["Pegasus Project (journalists’ consortium, 2021)","Reported targeting of journalists and activists with [[commercial-spyware|commercial spyware]]; the maker said it sells only to vetted governments for crime and terrorism"]
      ]},
      "The debate has clear positions. Governments argue that [[mass-surveillance|bulk collection]] is necessary against terrorism and serious crime and that oversight makes it lawful. Privacy advocates and several UN experts argue that collecting everyone’s data is disproportionate by design. Some states, notably China and Russia, frame the internet as a domain of state sovereignty and treat information controls as legitimate security measures. Western governments and many NGOs reject that framing. Internet shutdowns during protests or exams ([[internet-shutdown]]) are another contested practice, defended by governments as public order measures.",
      {ex:"**Task:** the fictional state of Norland shuts down mobile internet nationwide for five days during election protests. Apply the limitation test for freedom of expression (ICCPR Article 19).\n1. First I ask whether the restriction was **provided by law**, because a measure with no legal basis fails at once. Norland cites an emergency telecoms law; I check whether the law is clear and public, and whether it allows a nationwide shutdown.\n2. Next I ask whether it pursues a **legitimate aim**. Article 19(3) allows restrictions for national security and public order. The government says the shutdown stopped the organization of violence. That aim is on the list.\n3. Then I ask whether it was **necessary and proportionate**: the hardest step. Was there a less restrictive option, such as targeting specific accounts or areas? Did it last longer than needed? What did it cost others, such as hospitals, businesses and journalists?\n4. Then I **attribute positions**. The government argues public order; UN experts on freedom of expression have repeatedly said that blanket shutdowns are disproportionate.\n5. Finally I state my conclusion, marked as mine.\n**Result:** “The shutdown had a legal basis and pursued a legitimate aim, but a nationwide, five-day blackout affecting all users is very hard to justify as necessary and proportionate. It is likely to fail the third part of the test.”\n**Common mistake:** stopping at step 2. Governments almost always cite a legitimate aim; restrictions usually fail on necessity and proportionality.", label:"Worked example: the three-part test on an internet shutdown"}
    ]},
    {h:"Truth commissions: South Africa and Timor-Leste", body:[
      "Societies emerging from dictatorship or war face a choice among tools of [[transitional-justice|transitional justice]] (see {{peacebuilding}}): trials, amnesties, [[truth-commission|truth commissions]], [[reparations]] and memorials. Priscilla Hayner’s *Unspeakable Truths* (2001; 2nd edition 2011) defined a truth commission as a temporary, official body that investigates a pattern of past abuses and reports its findings.",
      {fig:'<svg viewBox="0 0 340 330"><rect class="d-panel" x="10" y="8" width="320" height="56" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">South Africa’s TRC</text><text class="s" x="170" y="52" text-anchor="middle">Act of 1995; hearings from 1996; chair Desmond Tutu</text><g stroke-width="2"><rect class="d-lup" x="10" y="80" width="100" height="150" rx="8"/><rect class="d-gold" x="120" y="80" width="100" height="150" rx="8"/><rect class="d-sage" x="230" y="80" width="100" height="150" rx="8"/></g><g text-anchor="middle"><text x="60" y="104">Human</text><text x="60" y="122">rights</text><text x="60" y="140">violations</text><text class="s" x="60" y="166">public</text><text class="s" x="60" y="184">hearings for</text><text class="s" x="60" y="202">victims</text><text x="170" y="104">Amnesty</text><text class="s" x="170" y="140">amnesty for</text><text class="s" x="170" y="158">political acts,</text><text class="s" x="170" y="176">only with full</text><text class="s" x="170" y="194">disclosure</text><text x="280" y="104">Reparation</text><text x="280" y="122">and</text><text x="280" y="140">rehabilitation</text><text class="s" x="280" y="166">proposals for</text><text class="s" x="280" y="184">victims</text></g><rect class="d-rose" x="10" y="246" width="320" height="72" rx="8" stroke-width="2"/><text x="170" y="270" text-anchor="middle">Main debates</text><text class="s" x="170" y="290" text-anchor="middle">truth versus prosecution; individual acts</text><text class="s" x="170" y="306" text-anchor="middle">versus apartheid as a system; slow reparations</text></svg>', alt:"A panel for South Africa’s Truth and Reconciliation Commission, created by an Act of 1995, holding hearings from 1996, chaired by Desmond Tutu. Three columns show its committees: human rights violations, with public hearings for victims; amnesty, for political acts only with full disclosure; and reparation and rehabilitation, with proposals for victims. Below, the main debates: truth versus prosecution, individual acts versus apartheid as a system, and slow reparations.", cap:"The TRC’s three committees. Its trade, amnesty for truth, is what makes it both famous and contested."},
      "**South Africa.** The Truth and Reconciliation Commission offered [[conditional-amnesty|conditional amnesty]]: perpetrators of politically motivated crimes could receive amnesty if they disclosed everything. Its main report was handed to President Nelson Mandela in October 1998. Supporters credit it with a shared record of apartheid-era abuses and a peaceful transition. Critics include victims’ families, some of whom challenged the amnesty in the Constitutional Court in 1996 and lost. Another critic, Mahmood Mamdani (2002), argued that by focusing on individual “gross violations” it left out the everyday injustice of apartheid and its many beneficiaries.",
      "**Timor-Leste.** The Commission for Reception, Truth and Reconciliation (known by its Portuguese initials, CAVR) was set up in 2001 under UN administration. It examined the period from April 1974 to October 1999, including Indonesian rule. Its report *Chega!* (“Enough!”), delivered in October 2005, estimated at least 102,800 conflict-related deaths. By its estimate, about 18,600 were killings or disappearances and about 84,200 were deaths from hunger and illness linked to displacement. The report called for reparations and accountability. A distinctive **Community Reconciliation Process** let people who had committed lesser offenses make amends before their communities. Timor-Leste’s leaders chose to prioritize good relations with Indonesia. A joint Commission of Truth and Friendship (report 2008) acknowledged institutional responsibility for the violations of 1999 without prosecutions. Victims’ groups and NGOs argued that justice was still owed.",
      "Kathryn Sikkink’s *The Justice Cascade* (2011) described a [[justice-cascade|justice cascade]]: a global trend since the 1980s toward holding leaders criminally accountable. Tricia Olsen, Leigh Payne and Andrew Reiter (2010) found that combinations of tools, such as trials with amnesties, were associated with better outcomes than any one tool alone. Truth commissions in Sierra Leone, South Korea (2005–2010), Canada (on residential schools, report 2015) and the Solomon Islands (report 2012) show how the model traveled."
    ]},
    {h:"Writing a human rights paper without an advocacy tone", body:[
      "NGO reports are written to persuade; seminar papers are written to analyze. You can care deeply about a cause and still write analytically. The difference lies in three kinds of sentence:",
      {table:[
        ["Kind of sentence","Example","Rule"],
        ["Description","“The Committee found no violation on the facts.”","Precise, dated, sourced"],
        ["Attribution","“Human Rights Watch argues…; the government replies…”","Every contested claim has an owner"],
        ["Evaluation","“The evidence for X is stronger than for Y, because…”","Clearly marked, argued, with counter-arguments"]
      ]},
      {list:[
        "**Prefer neutral verbs**: argues, reports, finds, states, rejects. Avoid “exposes”, “admits” or “claims” unless you mean them.",
        "**Treat every source as having a position.** Governments, NGOs and UN bodies all have mandates and interests; say whose evidence you use and how it was gathered.",
        "**Define contested labels** (genocide, terrorism, forced labor) by their legal definitions, and say who applies them to a case.",
        "**Date your facts** (“as of November 2026”), because positions, ratifications and conditions change.",
        "**Ask an analytical question**: not “Why must the world act on X?” but “Why did the UPR recommendations on X change after 2015?”"
      ]},
      {ex:"Advocacy: “The regime’s shocking crackdown proves that the Council has utterly failed.”\nAnalytical: “Between 2020 and 2023, the special rapporteur reported arrests of at least N protesters (source, date); the government described the measures as necessary for public order. Whether the Council’s responses influenced the government is hard to judge: [evidence for], [evidence against].”", label:"Worked example: from advocacy to analysis"},
      {tip:"A good test: could a thoughtful reader who disagrees with you agree that you described their position fairly?"},
      {terms:["right-to-privacy","mass-surveillance","commercial-spyware","truth-commission","conditional-amnesty","reparations","justice-cascade"]}
    ]}
   ],
   try:[
    {id:"e4u11-l5-x1", type:"sort", q:"What makes each case hard?", buckets:["Rights in conflict","Disputed facts","Legitimate state interest against a right"], items:[
      {t:"A court weighs a newspaper’s right to publish against a person’s privacy", b:0, why:"Two rights collide: expression and privacy."},
      {t:"Two inquiries give very different death tolls for the same event", b:1, why:"The disagreement is about facts."},
      {t:"A state wants to deport rejected asylum seekers to control its borders, but non-refoulement limits whom it may send back", b:2, why:"Border control is a legitimate interest; non-refoulement limits it."},
      {t:"A government says bulk data collection is needed to prevent attacks", b:2, why:"Security is a legitimate aim; the question is whether the means is necessary and proportionate."},
      {t:"A law against hate speech is challenged as a limit on free expression", b:0, why:"Protection from incitement and free expression pull in different directions."}
    ]},
    {id:"e4u11-l5-x2", type:"mcq", q:"Fatima notes that a state has not ratified the 1951 Refugee Convention. Can it still be bound not to send someone to face torture?", options:[
      {t:"Yes: other treaties, such as the ICCPR, also forbid it", ok:true, why:"Right. The Convention against Torture and the ICCPR forbid return to a real risk of torture, absolutely, for their states parties. The human rights layer of non-refoulement does not depend on the Refugee Convention."},
      {t:"No: non-refoulement exists only in the Refugee Convention", why:"Human rights treaties contain their own, wider non-refoulement obligations."},
      {t:"Only if the person is a recognized refugee", why:"The torture protection covers everyone, including people excluded from refugee status."},
      {t:"Only if the Security Council orders it", why:"Treaty obligations apply without any Security Council decision."}
    ]},
    {id:"e4u11-l5-x3", type:"mcq", q:"In *Big Brother Watch v. UK* (2021), what did the European Court’s Grand Chamber decide about bulk interception?", options:[
      {t:"It is not unlawful as such, but must have end-to-end safeguards, which the UK regime then lacked in some respects", ok:true, why:"Right. The Court accepted bulk interception in principle but found safeguards insufficient."},
      {t:"It is always unlawful under the Convention", why:"The Court did not find bulk interception unlawful in itself."},
      {t:"States may intercept without any safeguards for security reasons", why:"The Court required strong safeguards."},
      {t:"The Court refused to hear the case", why:"It decided the case."}
    ]},
    {id:"e4u11-l5-x4", type:"match", q:"Match each truth commission or concept to its feature.", pairs:[
      ["South Africa’s TRC","Amnesty for politically motivated crimes in exchange for full disclosure","Conditional amnesty."],
      ["Timor-Leste’s CAVR","A Community Reconciliation Process for lesser offenses, and the report *Chega!*","Delivered in October 2005."],
      ["Commission of Truth and Friendship","A joint Indonesia–Timor-Leste body that reported in 2008 without prosecutions","Criticized by victims’ groups, defended as good-neighborly."],
      ["Mamdani’s critique","The TRC focused on individual violations, not apartheid’s system and beneficiaries","*Diacritics* (2002)."],
      ["The justice cascade","A trend since the 1980s toward criminal accountability for leaders","Sikkink (2011)."]
    ]},
    {id:"e4u11-l5-x5", type:"spot", q:"A draft seminar paragraph. Tap the phrases that slip into an **advocacy tone or unattributed claims**.", ask:"slips into advocacy", parts:[
      {t:"In 2021, a consortium of journalists reported that commercial spyware had been used against reporters in several countries.", flag:false, why:"Dated, attributed description."},
      " ",
      {t:"The company stated that it sells only to vetted governments.", flag:false, why:"Attributes the other side’s position fairly."},
      " ",
      {t:"This outrageous scandal proves governments cannot be trusted with any technology.", flag:true, why:"Loaded language and a sweeping conclusion the evidence cannot support."},
      " ",
      {t:"Several UN experts called for a moratorium on sales until safeguards exist.", flag:false, why:"An attributed position."},
      " ",
      {t:"Obviously, everyone agrees a ban is the only answer.", flag:true, why:"False consensus. Governments and the company disagreed; say who supports what."}
    ]},
    {id:"e4u11-l5-x6", type:"order", q:"Put these steps for planning a human rights seminar paper in a sensible order.", items:[
      {t:"Turn the topic into an analytical question (why, how, under what conditions)", why:"An analytical question keeps the paper from becoming a campaign."},
      {t:"Map the debate: positions, who holds them and their evidence", why:"You need the structure of disagreement before your own view."},
      {t:"Write the description and attribution sections: what happened, and who argues what", why:"Readers need the facts and the positions before your judgment."},
      {t:"Write your marked evaluation, with counter-arguments and replies", why:"Your own view comes last and is clearly signposted."},
      {t:"Check dates and wording (“as of…”, neutral verbs, defined labels)", why:"A final check catches advocacy slips and outdated facts."}
    ]},
    {id:"e4u11-l5-x7", type:"mcq", q:"Which research question is best suited to a neutral, analytical seminar paper?", options:[
      {t:"Why did some Asian states accept, and others note, UPR recommendations on the death penalty between 2008 and 2022?", ok:true, why:"Right. It asks for an explanation, has a clear scope and can be answered with evidence."},
      {t:"Why must the world stop the death penalty now?", why:"This presumes the answer and calls for a campaign, not analysis."},
      {t:"Is the death penalty evil?", why:"A purely moral question without a scope or method; fine for philosophy, weak for an IR seminar paper."},
      {t:"What is the death penalty?", why:"Too descriptive: there is no puzzle to explain."}
    ]},
    {id:"e4u11-l5-x8", type:"explain", q:"Governments say bulk collection of communications data is needed against terrorism; privacy advocates say it is disproportionate by design. Explain how the limitation test (legality, legitimate aim, necessity and proportionality) structures this disagreement, and why the disagreement turns mostly on the last step.", size:"3–5 sentences", hint:"Governments almost always cite a legitimate aim.", model:"The test asks three questions in order. Is the measure provided by a clear, public law? Does it pursue a legitimate aim, such as national security or public order? And is it necessary and proportionate: is there a less restrictive option, and how much does it cost everyone else? Governments can usually point to a law and a legitimate aim, so the real disagreement is over the third. Advocates and several UN experts argue that collecting everyone’s data is disproportionate by design. Governments reply that oversight makes it lawful, and the European Court in *Big Brother Watch* (2021) held that bulk interception needs end-to-end safeguards but isn’t unlawful as such.", points:["Names the three parts of the test in order", "Explains that governments usually meet the legality and aim steps", "Explains what necessity and proportionality ask", "Attributes both positions on bulk collection", "Uses *Big Brother Watch* or another case from the lesson"]}
   ],
   apply:{
    intro:"Practice neutral analysis on real documents. All are free online.",
    tasks:[
     {t:"Read a UN decision", how:[
       "Search for “Teitiota v New Zealand Human Rights Committee views” and open a summary from a UN or university source.",
       "Write down the facts, the question, the decision and the reasoning in four short lines.",
       "Add one sentence on what a state might argue against a wide reading, and one on what a protection advocate might argue."
     ], write:"Facts… Question… Decision… Reasoning… A state’s view… An advocate’s view…"},
     {t:"Explore a truth commission report", how:[
       "Find the executive summary of *Chega!* (the CAVR report), or the summary of South Africa’s TRC report.",
       "Note how the commission defined its mandate, what methods it used to count victims, and one recommendation.",
       "Note one criticism made of the commission, and by whom."
     ], write:"Commission… Mandate… Methods… One recommendation… One criticism and its source…"},
     {t:"Rewrite a paragraph", how:[
       "Find a short paragraph from an advocacy source (an NGO press release, a campaign page).",
       "Rewrite it as a seminar paragraph: description, attribution, then a marked evaluation.",
       "Check it with the test: would someone who disagrees accept your description of their position?"
     ], write:"Original (summarize, don’t copy at length)… My analytical rewrite…"},
     {t:"Seminar questions", how:[
       "Choose one and write 200–300 words.",
       "1. Should truth commissions ever trade amnesty for truth?",
       "2. Is mass surveillance compatible with the right to privacy if it is overseen by courts?",
       "3. How far should non-refoulement reach for people displaced by climate change?"
     ], write:"My question… My claim… Evidence… Counter-argument and reply…"}
    ],
    proof:"A four-line case summary with both positions, notes on a truth commission report, an analytical rewrite of an advocacy paragraph, and a seminar paragraph."
   },
   read:[
    {book:"alstonhr", where:"Chapter 18 “Critical Perspectives”", note:"Snapshots of the past and future of human rights: useful when you frame a paper’s debate."},
    {book:"eir", where:"Chapter 11 “Protecting People” (Alex J. Bellamy)", note:"Background on protecting people from mass atrocities, the setting of many transitional justice cases."},
    {book:"wmr", where:"Part I “Key data and information on migration and migrants”", note:"Current figures on refugees and other displaced people, for the refugee section."}
   ]
  }
  ],
  checkpoint:["e4u11-q02","e4u11-q06","e4u11-q09","e4u11-q12","e4u11-q15","e4u11-q19","e4u11-q22","e4u11-q26","e4u11-q30","e4u11-q34","e4u11-q38","e4u11-q43"],
  cpBank:[
   {id:"e4u11-cp01", lesson:"e4u11-l1", level:1, q:"A historian argues that eighteenth-century novels and campaigns against torture taught readers to feel for strangers, and that this made equal rights thinkable. Whose argument is this?", options:[
     {t:"Samuel Moyn’s", why:"Moyn dates the breakthrough of human rights as a movement to the 1970s. He doesn’t build his case on eighteenth-century empathy."},
     {t:"Mary Ann Glendon’s", why:"Glendon called Latin America the “forgotten crucible” of the universal human rights idea. That is a different story."},
     {t:"Lynn Hunt’s", ok:true, why:"Right. In *Inventing Human Rights* (2007) Hunt argued that novels and anti-torture campaigns taught empathy for strangers, which made equal rights thinkable."},
     {t:"Mark Mazower’s", why:"Mazower showed that some UN founders saw the organization as a way to preserve empire. He isn’t the source of the empathy argument."}]},
   {id:"e4u11-cp02", lesson:"e4u11-l1", level:2, q:"A scholar shows that a statesman who helped write the UN Charter’s preamble saw the new organization as a way to keep his country’s empire. Which point does this evidence support best?", options:[
     {t:"Mazower’s point that the founding texts served different projects, even empire", ok:true, why:"Right. Mazower’s *No Enchanted Palace* used figures such as Jan Smuts to show that rights language at the UN’s founding could serve empire as well as freedom."},
     {t:"Hunt’s point that empathy for strangers made equal rights thinkable", why:"Hunt’s argument is about eighteenth-century culture, not about the UN founders’ imperial aims."},
     {t:"Sikkink’s point that Latin American states pushed hard for rights language in 1945", why:"Sikkink stresses Global South contributions. This evidence is about a founder who wanted to preserve empire."},
     {t:"Vasak’s point that rights come in three generations, from civil to collective", why:"Vasak’s scheme classifies kinds of rights. It says nothing about the founders’ motives."}]},
   {id:"e4u11-cp03", lesson:"e4u11-l2", level:1, q:"Leila believes her rights under the European Convention were violated. She sends her complaint straight to the European Court of Human Rights without trying her own country’s courts. What problem will she face?", options:[
     {t:"The Court hears complaints only from states, not individuals", why:"Since 1998 any individual can reach the full-time European Court."},
     {t:"She needs an invitation from her government first", why:"Invitations matter for visits by UN special procedures, not for complaints to the European Court."},
     {t:"The Court can hear her only if the Human Rights Council refers the case", why:"The Human Rights Council is a UN body with no role in sending cases to the European Court."},
     {t:"She must normally exhaust domestic remedies first", ok:true, why:"Right. Before a regional court will hear a complaint, a person must normally go through national courts first."}]},
   {id:"e4u11-cp04", lesson:"e4u11-l2", level:2, q:"A country that recently became a democracy rushes to accept a regional human rights court’s binding judgments. Its leaders say they want to make it harder for any future government to slide back. Which explanation fits best?", options:[
     {t:"The realist view that the human rights machinery is only cheap talk", why:"Accepting binding judgments is costly, not cheap talk, and the leaders’ reason is about the future at home."},
     {t:"Moravcsik’s argument that new democracies “lock in” rights against backsliding", ok:true, why:"Right. Moravcsik (2000) offered this domestic explanation for why newly democratic governments in Europe accepted the European Convention."},
     {t:"Hathaway’s expressive function, in which ratifying a treaty substitutes for real change", why:"Hathaway described low-cost signals that replace real change. Accepting a binding court to tie future governments is the opposite."},
     {t:"The boomerang pattern of activists finding allies abroad", why:"The boomerang is about activists blocked at home finding allies abroad. Here the government itself is choosing to bind its successors."}]},
   {id:"e4u11-cp05", lesson:"e4u11-l2", level:3, q:"The ASEAN Human Rights Declaration (2012) allows rights to be balanced against “national and regional contexts”. Which earlier text does this echo, and how did each side respond?", options:[
     {t:"The Vienna Declaration’s “universal, indivisible” formula; all sides welcomed the new clause", why:"Vienna stressed that states must protect rights regardless of their systems. And the clause was criticized, not welcomed by all."},
     {t:"The Cairo Declaration of the OIC; ASEAN members made all rights subject to Sharia", why:"The Cairo Declaration came from the OIC. The ASEAN text refers to national and regional contexts, not to Sharia."},
     {t:"The Bangkok Declaration (1993); critics attacked the clause and ASEAN governments defended it", ok:true, why:"Right. This combines Lesson 2 (the AICHR and the 2012 Declaration) with Lesson 4 (the Bangkok Declaration’s “national and regional particularities” and the Asian values debate). NGOs and the then High Commissioner criticized the clause; ASEAN governments said it reflected the region’s approach of consultation and non-interference."},
     {t:"The African Charter’s peoples’ rights; the clause came with a new regional court for Southeast Asia", why:"The AICHR has no court and no complaint procedure. Peoples’ rights are a feature of the African system."}]},
   {id:"e4u11-cp06", lesson:"e4u11-l3", level:2, q:"After years of NGO reports, media coverage and UN statements about Country V, political rights improve somewhat, but killings by the security forces rise. Which research finding does this pattern match?", options:[
     {t:"Simmons’s finding that treaties work best in transitional, partly democratic states", why:"Simmons studied treaty ratification and domestic mobilization, not the effects of public shaming."},
     {t:"Fariss’s finding that the standards of accountability used by monitors have risen", why:"Fariss explains why scores may hide improvement. The pattern here is mixed effects after shaming."},
     {t:"Hathaway’s finding that ratification often goes with worse practices, not better", why:"Hathaway compared ratification with practices. Nothing here involves ratification."},
     {t:"Hafner-Burton: shaming helped some rights, while terror sometimes rose", ok:true, why:"Right. Hafner-Burton (2008) found shaming associated with improvements in rights such as political rights, while terror sometimes increased."}]},
   {id:"e4u11-cp07", lesson:"e4u11-l3", level:2, q:"A dataset coded from NGO and government reports gives Country W the same physical-integrity score in 1985 and 2015. Jun concludes that nothing improved. What would Christopher Fariss say?", options:[
     {t:"Monitors grow stricter over time, so a constant score can hide real improvement", ok:true, why:"Right. Fariss argued that the standard of accountability has risen; correcting for it shows gradual improvement in physical integrity rights."},
     {t:"The scores are objective counts of events, so the question is already settled", why:"The scores are coded from reports, which depend on how hard monitors look and how strictly they judge."},
     {t:"The constant score proves that the treaties W ratified made things worse", why:"A constant score can’t show things got worse, and Fariss’s point is that it may hide improvement."},
     {t:"The constant score shows selection bias in which kinds of states ratify treaties", why:"Selection bias is about which states join treaties. Fariss’s point is about how the scores themselves are produced."}]},
   {id:"e4u11-cp08", lesson:"e4u11-l3", level:3, q:"A dictatorship ratifies several human rights treaties within a year and praises its own record at its UPR, yet its practices don’t change. Which pair of readings best explains the gap?", options:[
     {t:"Moravcsik’s lock-in and Simmons’s mobilization", why:"Lock-in describes new democracies binding their successors, and mobilization needs citizens able to use the treaty. Neither fits a closed dictatorship."},
     {t:"A realist would call the machinery cheap talk; Hathaway’s “expressive function” says ratifying sends a low-cost signal that can replace real change", ok:true, why:"Right. This combines Lesson 2 (IR lenses on the machinery) with Lesson 3 (Hathaway’s explanation of the commitment–compliance gap)."},
     {t:"The state has reached rule-consistent behavior, the final phase of the spiral model", why:"Rule-consistent behavior means practice follows the rules. Here practice hasn’t changed."},
     {t:"Liberal institutionalism: reviews produce public facts, so practice must already have improved", why:"Producing information doesn’t mean practice has improved. The scenario says it hasn’t."}]},
   {id:"e4u11-cp09", lesson:"e4u11-l4", level:1, q:"Amina, a legal scholar, argues for ending child marriage using arguments from within her own religious and legal tradition, and invites dialogue with other traditions. Whose approach is this closest to?", options:[
     {t:"Radical relativism", why:"Radical relativism treats culture as the only source of moral validity, so it gives no basis for arguing for change across traditions."},
     {t:"Makau Mutua’s “savages, victims and saviours” critique", why:"Mutua criticizes how human rights stories cast their characters. Amina is building support for a right from inside her tradition."},
     {t:"Vasak’s three generations of rights", why:"Vasak’s scheme classifies kinds of rights. It isn’t a method for justifying rights within a culture."},
     {t:"An-Na’im’s cross-cultural legitimacy", ok:true, why:"Right. An-Na’im argued that rights last when people can justify them from within their own traditions, through internal and cross-cultural dialogue."}]},
   {id:"e4u11-cp10", lesson:"e4u11-l4", level:2, q:"Marco believes his state has violated his right to food. Can he take a complaint to a UN body?", options:[
     {t:"No: economic and social rights are only goals, so no complaint procedure exists", why:"An optional protocol to the ICESCR (2008, in force 2013) allows individual complaints, and General Comment No. 3 sets minimum core obligations."},
     {t:"Yes, to the Security Council, which can enforce the right", why:"The Security Council doesn’t hear individual human rights complaints."},
     {t:"Yes, if his state has ratified the ICESCR’s Optional Protocol; the committee’s views are not enforceable, though many argue states must consider them in good faith", ok:true, why:"Right. This combines Lesson 4 (the 2008 Optional Protocol on economic and social rights) with Lesson 2 (complaints need an optional protocol, and “views” can’t be enforced)."},
     {t:"Yes, any individual from any state may complain, without using national courts first", why:"Complaints are possible only against states that accepted the procedure, and domestic remedies must normally be exhausted first."}]},
   {id:"e4u11-cp11", lesson:"e4u11-l5", level:3, q:"A minister argues: “The three-part test allows torture if a law permits it, the aim is national security and it is proportionate to an imminent attack.” What is the best reply?", options:[
     {t:"The ban on torture is absolute, so no balancing test applies to it", ok:true, why:"Right. Some rights, such as the ban on torture, are absolute and allow no balancing at all, whatever the law or aim. The three-part test is for restrictable rights such as privacy or expression."},
     {t:"He is right, as long as the law allowing it is published in advance", why:"Being provided by law is one part of the test for restrictable rights. It can’t make torture lawful."},
     {t:"He is right, but only for detainees who are not citizens of the state", why:"The ban on torture protects every person. Human rights law even forbids sending anyone to face torture abroad."},
     {t:"He is right if a truth commission later grants the officials an amnesty", why:"An amnesty decision years later can’t make an act lawful at the time, and torture is never permitted."}]},
   {id:"e4u11-cp12", lesson:"e4u11-l5", level:3, q:"A draft paragraph reads: “A barbaric regime brutalised helpless villagers until heroic Western NGOs came to save them.” Which feedback best uses the unit?", options:[
     {t:"It is fine, because NGO accounts are neutral", why:"The unit says to treat every source as having a position, including NGOs, governments and UN bodies."},
     {t:"It tells Mutua’s savage–victim–saviour story; use neutral verbs, attribute claims, and add the government’s reply and local actors", ok:true, why:"Right. This combines Lesson 4 (Mutua’s critique) with Lesson 5 (description, attribution and clearly marked evaluation)."},
     {t:"Remove only the word “heroic”; the rest is plain description", why:"“Barbaric”, “brutalized” and “helpless” are also evaluative and unattributed, and the whole story shape is the problem."},
     {t:"Replace it with the government’s account, because official sources are neutral", why:"Swapping one side’s story for the other’s isn’t neutral. Attribute both and describe the evidence."}]},
  ],
  codex:[
   {id:"human-rights-histories", title:"Histories of human rights", aka:["origins of human rights","Moyn–Sikkink debate","the last utopia debate"], tags:["human rights","history","historiography"],
    summary:"The rival accounts of when and where human rights began, and why the dating debate matters for arguments about universality.",
    levels:{
     starter:[
      "Historians disagree about when human rights began. Some tell a **long history** from ancient ideas of justice through natural rights and the revolutions of 1776 and 1789. Others, led by Samuel Moyn, argue that human rights as a global movement only took off in the **1970s**. Others again, such as Kathryn Sikkink, stress the **1940s** and the role of Latin American and other Global South states.",
      "Think of a river with many possible sources. Each historian follows a different stream upstream and calls it the source. Each choice says something about whose river it is.",
      {key:"The dating debate is also a debate about legitimacy: whose idea are human rights?"},
      "When you read any history of human rights, ask what it counts as “human rights”: an idea, a body of law, or a political movement."
     ],
     builder:[
      "**Long histories.** Natural rights theory (Locke), the English Bill of Rights (1689), the American and French declarations (1776, 1789), the Haitian Revolution and anti-slavery campaigns. Lynn Hunt’s *Inventing Human Rights* (2007) adds a cultural argument about empathy. Critics call much of this anachronism: older texts speak of duties and justice, and the revolutionary rights were for citizens.",
      "**The 1970s breakthrough.** Moyn’s *The Last Utopia* (2010) argues that human rights became a movement holding governments to account anywhere only after anti-colonial and socialist utopias lost appeal. Markers: the Helsinki Final Act (1975), Amnesty International’s Nobel Prize (1977), Carter’s foreign policy.",
      "**The 1940s and the Global South.** Sikkink’s *Evidence for Hope* (2017), Glendon’s “forgotten crucible” (2003) and Waltz (2001) stress Latin American and small-state roles in 1945–48. Burke (2010) and Jensen (2016) show decolonizing states driving law in the 1960s, such as the convention against racial discrimination (1965).",
      "**Empire.** Mazower’s *No Enchanted Palace* (2009) shows that some UN founders hoped to preserve empire."
     ],
     pro:[
      "**Talking past each other.** Moyn dates a political movement; Sikkink dates norms, law and their authors. Precise seminar papers say which object they are dating.",
      "**Moyn’s later work.** *Christian Human Rights* (2015) traces conservative Christian sources of 1940s rights talk; *Not Enough* (2018) argues that human rights coexisted with rising inequality because they aim at sufficiency, not equality.",
      "**Using the debate.** Claims that human rights are “Western” usually rest on the long European history; the 1940s and 1960s literature complicates them, while the 1970s literature shows the weight of Western NGOs and governments in one period. A careful answer distinguishes periods and actors.",
      {tip:"Ask of each history: which sources (archives, treaties, NGO records) does it rely on, and whose archives are missing?"}
     ]
    },
    related:["udhr-drafting","samuel-moyn","kathryn-sikkink","human-rights-regime","decolonization","third-world-project"],
    read:[{book:"alstonhr", where:"Chapter 2 “The Human Rights Regime: International Law Framework and Origins”"}],
    sources:[{t:"Review of Moyn, Not Enough (Harvard University Press, 2018), American Journal of International Law", url:"https://www.cambridge.org/core/journals/american-journal-of-international-law/article/not-enough-human-rights-in-an-unequal-world-by-samuel-moyn-cambridge-massachusetts-harvard-university-press-2018-pp-ix-220-index/A83CB79DB239553ADE64BA7A94892BC5"},{t:"Wikipedia: Kathryn Sikkink", url:"https://en.wikipedia.org/wiki/Kathryn_Sikkink"}],
    checked:"2026-11"},

   {id:"udhr-drafting", title:"The drafting of the Universal Declaration", aka:["UDHR drafting","drafters of the UDHR","1948 Declaration"], tags:["human rights","history","United Nations"],
    summary:"Who wrote the Universal Declaration of Human Rights, how the text was negotiated in 1947–48, and what the drafters disagreed about.",
    levels:{
     starter:[
      "The **Universal Declaration of Human Rights** was written by the UN Commission on Human Rights in 1947–48 and adopted by the General Assembly in Paris on **10 December 1948**, by 48 votes to none with 8 abstentions.",
      "It was a group effort. Eleanor Roosevelt chaired the Commission. John Humphrey of Canada wrote the first draft and René Cassin of France reorganized it. P. C. Chang of China argued for a text that people of many traditions could accept. Charles Malik of Lebanon steered the final debate. Hansa Mehta of India is widely credited with changing “all men” to “all human beings”.",
      {key:"The drafters agreed on the rights without agreeing on why people have them."}
     ],
     builder:[
      "**Process.** The Commission first met in January 1947; a drafting committee of eight states prepared texts; the Commission approved a draft in June 1948; the General Assembly’s Third Committee, chaired by Malik, debated it article by article in autumn 1948.",
      "**Contributions.** Chang drew on Confucian thought (the word “conscience” in Article 1 is often linked to *ren*) and resisted grounding the text in any single religion. Hernán Santa Cruz of Chile pressed for economic and social rights. Women delegates, including Minerva Bernardino, Begum Shaista Ikramullah, Lakshmi Menon and Hansa Mehta, pressed for equality language.",
      "**Abstentions.** Six communist states, the Soviet Union and its allies plus Yugoslavia (on sovereignty and economic rights), Saudi Arabia (mainly on changing religion and on marriage) and South Africa (on equality).",
      "**Studies.** Morsink (1999) on drafting intent, article by article; Glendon, *A World Made New* (2001); Waltz (2001) on small states."
     ],
     pro:[
      "**Philosophy.** The UNESCO inquiry of 1947 showed agreement on rights without shared foundations (Maritain’s “on condition that no one asks us why”). Scholars debate whether this is a strength (overlapping practical agreement) or a weakness (no answer to relativist challenges).",
      "**Absences.** Most of Africa and much of Asia were still colonized and absent; critics stress this, while others note how quickly newly independent states adopted and reshaped the framework.",
      "**Legal status.** The UDHR is a declaration; many lawyers hold that some provisions have become customary law, but which ones is debated.",
      {tip:"In a paper, quote the article you discuss and cite the drafting record (Morsink is the standard guide) rather than relying on later anecdotes."}
     ]
    },
    related:["human-rights-histories","human-rights-regime","un-human-rights-machinery"],
    read:[{book:"alstonhr", where:"Chapter 2 “The Human Rights Regime: International Law Framework and Origins”"}],
    sources:[{t:"UN Dag Hammarskjöld Library research guide: UDHR drafting committee", url:"https://research.un.org/en/undhr/draftingcommittee"},{t:"Konrad-Adenauer-Stiftung, “The Most Important Document of the Century: The UDHR at 75”", url:"https://kas.de/en/web/auslandsinformationen/artikel/detail/-/content/the-most-important-document-of-the-century-the-universal-declaration-of-human-rights-at-75"}],
    checked:"2026-11"},

   {id:"un-human-rights-machinery", title:"The UN human rights machinery in practice", aka:["Charter-based bodies","treaty-based bodies","UN human rights system"], tags:["human rights","United Nations","institutions"],
    summary:"How treaty bodies, the Human Rights Council, the UPR, special procedures, commissions of inquiry and OHCHR work, their politics and their 2025–26 funding crisis.",
    levels:{
     starter:[
      "The UN watches human rights through two kinds of body. **Charter-based** bodies, like the Human Rights Council, cover every UN member and are run by governments. **Treaty-based** bodies, the committees attached to each core treaty, cover only states that joined the treaty and are made up of independent experts.",
      "Neither can arrest anyone or force a state to change. Their tools are reports, reviews, recommendations and publicity.",
      {key:"The UN human rights system works by making information public and asking states to answer for it."}
     ],
     builder:[
      "**Treaty bodies** (ten, for nine core treaties): review state reports and issue concluding observations; write general comments; decide individual complaints against states that accepted the procedure; some run inquiries.",
      "**Human Rights Council** (2006): 47 states elected by regional group for three years; the General Assembly can suspend members (Libya 2011, Russia 2022). Creates special procedures and commissions of inquiry.",
      "**Universal Periodic Review** (since 2008): every UN member is reviewed by its peers about every four to five years; the reviewed state supports or notes recommendations. In 2025 the United States did not take part in its scheduled review; the Council rescheduled it, most recently for 10 November 2026.",
      "**Special procedures**: unpaid independent experts with thematic or country mandates; visits only by invitation.",
      "**OHCHR** (1993): the secretariat, led by the High Commissioner (Volker Türk since 2022, reappointed in 2026)."
     ],
     pro:[
      "**Politics.** Votes on country situations, such as the 2022 rejection (19–17–11) of a debate on OHCHR’s Xinjiang assessment, show coalitions cutting across regions. Critics variously see selectivity against some states or leniency toward powerful ones.",
      "**Legal status of outputs.** Committees say states must consider views and recommendations in good faith; many states treat them as non-binding.",
      "**Funding crisis.** According to statements collected by the International Service for Human Rights, treaty body meeting time fell by about 30% in 2025, several committees canceled sessions for the first time, special procedures’ country visits were halved, and OHCHR received only part of its approved budget, with offices closed or reduced in 17 countries. Sessions were shortened again in 2026.",
      {tip:"When you cite a UN body, say which kind it is: a treaty body’s legal interpretation and the Council’s political resolution carry different weight."}
     ]
    },
    related:["human-rights-regime","regional-human-rights-systems","united-nations","un-funding"],
    sources:[{t:"ISHR, “UN financial crisis: Mapping the impact for human rights”", url:"https://ishr.ch/toolbox/resources/un-financial-crisis-mapping-the-impact-for-human-rights/"},{t:"Human Rights Watch, “Human Rights Council Must Urgently Address Persistent Non-Cooperation with the UPR” (29 October 2026)", url:"https://www.hrw.org/news/2026/10/29/human-rights-council-must-urgently-address-persistent-non-cooperation-with-the-upr"},{t:"OHCHR: Special Procedures of the Human Rights Council", url:"https://www.ohchr.org/en/special-procedures-human-rights-council"}],
    checked:"2026-11"},

   {id:"regional-human-rights-systems", title:"Regional human rights systems compared", aka:["European Court of Human Rights","Inter-American system","African human rights system","AICHR"], tags:["human rights","regional organizations","courts"],
    summary:"How the European, Inter-American, African, Arab and ASEAN systems differ in design, landmark cases and current challenges.",
    levels:{
     starter:[
      "Some regions have their own human rights treaties and bodies. In **Europe, the Americas and Africa** these include **courts** whose judgments bind the states concerned. **Southeast Asia** has an intergovernmental commission that promotes rights but hears no complaints, and there is no system covering all of Asia and the Pacific.",
      "A person normally has to try national courts first. Regional bodies are a backstop.",
      {key:"Regional systems are often stronger than the UN’s, but only where states accept their courts and carry out their judgments."}
     ],
     builder:[
      {table:[
        ["System","Key features"],
        ["Europe (Council of Europe)","Convention 1950; full-time Court since 1998; Committee of Ministers supervises execution; margin of appreciation; Russia expelled 2022"],
        ["Americas (OAS)","Commission 1959, Court 1979; *Velásquez Rodríguez* (1988); conventionality control; US and Canada not parties"],
        ["Africa (AU)","Charter 1981 with peoples’ rights and duties; Commission 1987; Court protocol 1998, in force 2004; *SERAC* (2001), *Endorois* (2009–10)"],
        ["Arab League","Arab Charter 2004 (in force 2008); committee; court statute not in force"],
        ["ASEAN","AICHR 2009; Declaration 2012; consensus; no court"]
      ]},
      "Individuals can reach the African Court directly only where their state has made a special declaration under Article 34(6) of its protocol; several states withdrew theirs: Rwanda (2016), Tanzania (2019), Benin and Côte d’Ivoire (2020) and Tunisia (2025)."
     ],
     pro:[
      "**Explaining design.** Moravcsik (2000) argued that new democracies in postwar Europe joined binding systems to lock in their own democracy. Others stress the role of transnational legal networks and of regional histories, such as dictatorship in Latin America.",
      "**Backlash.** Scholars discuss “backlash” against regional courts: withdrawals of the African Court declaration, denunciations of the American Convention (Trinidad and Tobago, Venezuela), and political resistance to some European judgments. Supporters of the governments involved argue that courts overreached on sovereignty or criminal justice; court defenders argue that withdrawals followed rulings governments disliked.",
      "**ASEAN.** Defenders see AICHR as a realistic start that fits consultation and non-interference; critics, including many regional NGOs, see it as built to avoid scrutiny.",
      {tip:"When comparing systems, compare access (who can complain), outputs (binding or not), and compliance (what follow-up exists)."}
     ]
    },
    related:["un-human-rights-machinery","human-rights-regime","regional-organizations","international-courts"],
    sources:[{t:"Adjolohoun, withdrawals of Article 34(6) declarations, African Human Rights Law Journal (2020)", url:"https://www.ahrlj.up.ac.za/images/ahrlj/2020/volume_1/AHRLJ_1_2020_Adjolohoun.pdf"},{t:"Columbia Global Freedom of Expression: Big Brother Watch v. the United Kingdom (No. 2)", url:"https://globalfreedomofexpression.columbia.edu/cases/big-brother-watch-v-the-united-kingdom/"}],
    checked:"2026-11"},

   {id:"human-rights-treaty-effectiveness", title:"Do human rights treaties work?", aka:["commitment–compliance gap","treaty effectiveness","Hathaway–Simmons debate"], tags:["human rights","research","compliance"],
    summary:"The research debate on whether ratifying human rights treaties changes state behavior, and under what conditions.",
    levels:{
     starter:[
      "Most states have ratified several human rights treaties, yet many still violate them. Researchers ask whether the treaties make any difference.",
      "Oona Hathaway (2002) found that ratifying was often not linked to better behavior, and suggested that states sometimes sign to look good. Beth Simmons (2009) found that treaties do matter, especially in countries in transition, because citizens, lawyers and courts can use them.",
      {key:"Today most scholars think treaties work through domestic politics, under particular conditions, rather than on their own."}
     ],
     builder:[
      "**Hathaway (2002, *Yale Law Journal*)**: ratification not generally associated with better practices, sometimes with worse; the **expressive function** lets states gain approval cheaply. Goodman and Jinks (2003) criticized the data and the model.",
      "**Simmons (2009)**: three mechanisms (agenda setting, litigation, mobilization); largest effects in transitional or partially democratic states; evidence on CEDAW, the torture convention and others.",
      "**Selection and confounding.** Vreeland (2008) showed why correlations mislead: multi-party dictatorships both torture more and are more likely to join the torture convention.",
      "**Data.** The Political Terror Scale, CIRI and V-Dem rely on reports; Fariss (2014) argued that a rising standard of accountability hides improvement.",
      "**Shaming.** Hafner-Burton (2008) found mixed effects of naming and shaming."
     ],
     pro:[
      "**Pessimists and optimists.** Hopgood (2013) and Posner (2014) argue the system is losing authority or too vague to guide states; Sikkink (2017) replies that comparison with the past shows progress. The disagreement is partly about evidence and partly about the benchmark.",
      "**Research design.** Newer work uses matching, panel models and process tracing within countries to deal with selection; mixed methods are increasingly common (see {{process-tracing}}).",
      {warn:"Avoid treating ratification as a treatment randomly assigned to states. Ask why a state ratified, when, and what else changed at the same time."}
     ]
    },
    related:["spiral-model-human-rights","beth-simmons","kathryn-sikkink","ir-datasets","regression-causal-inference"],
    sources:[{t:"Hathaway, “Do Human Rights Treaties Make a Difference?”, Yale Law Journal (2002)", url:"https://www.yalelawjournal.org/article/do-human-rights-treaties-make-a-difference"},{t:"Wikipedia: Beth A. Simmons", url:"https://en.wikipedia.org/wiki/Beth_A._Simmons"}],
    checked:"2026-11"},

   {id:"spiral-model-human-rights", title:"The spiral model of human rights change", aka:["Risse–Ropp–Sikkink spiral model","five-phase model","from commitment to compliance"], tags:["human rights","constructivism","norms"],
    summary:"A five-phase model of how transnational and domestic pressure can move repressive governments toward compliance, and its later scope conditions.",
    levels:{
     starter:[
      "The **spiral model** describes how a government that abuses rights can be pushed, step by step, toward respecting them. Pressure comes from **above** (foreign governments, UN bodies, international NGOs) and from **below** (domestic groups).",
      "The five steps are: repression, denial, tactical concessions, accepting the rules (prescriptive status) and finally behaving according to them.",
      {key:"Small concessions made to reduce pressure can open space for domestic groups, which is how the spiral moves upwards."}
     ],
     builder:[
      "**Origins.** Risse, Ropp and Sikkink, *The Power of Human Rights: International Norms and Domestic Change* (1999), built on Keck and Sikkink’s boomerang pattern (1998). Cases included Kenya, Uganda, South Africa, Tunisia, Morocco, Indonesia, the Philippines, Chile, Guatemala, Poland and Czechoslovakia.",
      "**Mechanisms.** Instrumental adaptation (concessions for material reasons), argumentation (debate that changes minds) and institutionalization (habit and law), echoing the logics of consequences, arguing and appropriateness (see {{norm-dynamics}}).",
      "**Using it.** Identify each phase with evidence (statements, laws, prisoner releases), and look for where a case stalls."
     ],
     pro:[
      "**Revision.** *The Persistent Power of Human Rights: From Commitment to Compliance* (2013) admitted that many states stall between concessions and compliance, and added scope conditions: regime type, degree of statehood (limited statehood), centralized versus decentralized rule implementation, and material or social vulnerability. It also discussed powerful states (the US and torture after 2001) and non-state actors such as companies.",
      "**Critiques.** The original cases were chosen partly because change happened (selection on the outcome, see [[selecting-on-the-dependent-variable]]); the model is more descriptive than predictive; and it gives a large role to Western networks. Defenders reply that it identifies mechanisms that can be tested.",
      {tip:"Do not confuse it with Jervis’s spiral model of the security dilemma ({{security-dilemma}})."}
     ]
    },
    related:["norm-dynamics","human-rights-treaty-effectiveness","kathryn-sikkink","security-dilemma"],
    sources:[{t:"Cambridge Core: Risse, Ropp & Sikkink (eds.), The Persistent Power of Human Rights (2013), chapter “Arab Spring and the Spiral Model”", url:"https://www.cambridge.org/core/books/persistent-power-of-human-rights/arab-spring-and-the-spiral-model/776314D6C55048D686E7E14B4E6B7092"}],
    checked:"2026-11"},

   {id:"universalism-relativism-debate", title:"Universalism and cultural relativism in human rights", aka:["Asian values and human rights","Bangkok and Vienna 1993","relative universality"], tags:["human rights","culture","debates"],
    summary:"The positions in the debate over whether human rights are universal, from strong relativism to relative universality, with the 1993 declarations and Islamic, feminist and postcolonial perspectives.",
    levels:{
     starter:[
      "Are human rights the same everywhere? **Universalists** say yes: they belong to every human being. **Cultural relativists** say values make sense only within cultures, so rights may differ.",
      "Most scholars sit in between. Jack Donnelly calls this **relative universality**: the list of rights is universal, but how they are interpreted and put into practice can vary.",
      {key:"The debate was never simply “Asia versus the West”: voices on every side came from every region."}
     ],
     builder:[
      "**Donnelly (1984)**: radical, strong and weak relativism. **An-Na’im (1992)**: cross-cultural legitimacy through internal and cross-cultural dialogue.",
      "**1993.** The Bangkok Declaration of Asian governments (April) accepted universality but stressed “national and regional particularities”, sovereignty and development; Asia-Pacific NGOs’ own Bangkok declaration stressed that rights are rooted in many cultures. The Vienna Declaration (June) said all rights are “universal, indivisible and interdependent and interrelated”.",
      "**Asian values** (Lee Kuan Yew, Mahathir; replies by Kim Dae-jung and Amartya Sen 1997).",
      "**Islamic perspectives**: the Cairo Declaration (1990), revised as the OIC Declaration on Human Rights (2020); reformist (An-Na’im), compatibility (Baderin) and tension readings.",
      "**Feminist** (Bunch 1990; Charlesworth, Chinkin and Wright 1991) and **postcolonial** critiques (Mutua 2001; Kapur 2018)."
     ],
     pro:[
      "**Power and culture.** Many scholars note that culture is often invoked by governments, not by the people affected, and ask who speaks for a culture. Others note that universalist criticism is often directed selectively at weaker states.",
      "**Strategic use.** Both universalist and relativist arguments can be used strategically, so analyze who makes them, when and with what effect.",
      {tip:"In a paper, attribute positions to named actors and documents, and avoid treating any culture or religion as uniform."}
     ]
    },
    related:["ethnocentrism-relativism","cultural-turn-ir","intersectionality-ir","postcolonialism-ir","human-rights-histories"],
    sources:[{t:"Final Declaration of the Regional Meeting for Asia of the World Conference on Human Rights (Bangkok, 1993), HURIGHTS OSAKA archive", url:"https://www.hurights.or.jp/archives/other_documents/section1/1993/04/final-declaration-of-the-regional-meeting-for-asia-of-the-world-conference-on-human-rights.html"},{t:"Vienna Declaration and Programme of Action (1993), University of Minnesota Human Rights Library", url:"https://hrlibrary.umn.edu/instree/l1viedec.html"},{t:"Mozaffari, “OIC Declaration on Human Rights: Changing the name or a paradigm change?”, Raoul Wallenberg Institute", url:"https://rwi.lu.se/pyramid-publications/oic-declaration-on-human-rights-changing-the-name-or-a-paradigm-change/"}],
    checked:"2026-11"},

   {id:"economic-social-cultural-rights", title:"Economic, social and cultural rights", aka:["ESCR","social rights","second-generation rights"], tags:["human rights","development","law"],
    summary:"Rights to work, social security, food, housing, health, education and culture: how they bind, how courts enforce them, and the debates around them.",
    levels:{
     starter:[
      "**Economic, social and cultural rights** include the rights to work and fair pay, social security, food, housing, health, education and taking part in cultural life. They are in the Universal Declaration and in the 1966 Covenant on Economic, Social and Cultural Rights (ICESCR).",
      "Because they cost money, states must work toward them **progressively**, using the resources they have. But some duties apply at once, such as not discriminating and ensuring a basic minimum.",
      {key:"Progressive does not mean optional: every state must show it is taking steps and protecting a minimum core."}
     ],
     builder:[
      "**Obligations.** ICESCR Article 2(1): take steps “to the maximum of its available resources” toward progressive realization. The treaty committee’s General Comment No. 3 (1990) set **minimum core obligations** and stressed immediate duties.",
      "**Justiciability.** Courts have enforced these rights: South Africa’s *Grootboom* (2000) on housing; India’s right-to-food orders from 2001; the African Commission’s *SERAC* (2001). The Optional Protocol (2008, in force 2013) allows individual complaints.",
      "**Collective rights.** The Declaration on the Right to Development (1986; 146–1–8) and the General Assembly’s 2022 recognition of a right to a clean, healthy and sustainable environment (161–0–8)."
     ],
     pro:[
      "**Debates.** Some philosophers and governments see these rights as policy goals rather than rights; Shue’s *Basic Rights* (1980) argued that subsistence is as basic as security. Cold War politics shaped the split into two covenants.",
      "**Inequality.** Moyn’s *Not Enough* (2018) argues that human rights secure sufficiency but not equality; defenders reply that rights were never meant to be a full theory of justice.",
      {tip:"Indivisibility (Vienna 1993) is a principle, not a description: in practice, budgets, courts and NGOs have often treated the two families differently, which is itself a research topic."}
     ]
    },
    related:["universalism-relativism-debate","development-ir","human-rights-regime","samuel-moyn"],
    sources:[{t:"Vienna Declaration and Programme of Action (1993), University of Minnesota Human Rights Library", url:"https://hrlibrary.umn.edu/instree/l1viedec.html"},{t:"Review of Moyn, Not Enough (2018), American Journal of International Law", url:"https://www.cambridge.org/core/journals/american-journal-of-international-law/article/not-enough-human-rights-in-an-unequal-world-by-samuel-moyn-cambridge-massachusetts-harvard-university-press-2018-pp-ix-220-index/A83CB79DB239553ADE64BA7A94892BC5"}],
    checked:"2026-11"},

   {id:"business-and-human-rights", title:"Business and human rights", aka:["BHR","UN Guiding Principles","UNGPs","human rights due diligence"], tags:["human rights","business","supply chains"],
    summary:"The UN Guiding Principles of 2011, the shift to mandatory due diligence laws, the EU directive and its 2026 amendments, and the treaty negotiations, as of November 2026.",
    levels:{
     starter:[
      "Human rights law was built to bind states. But companies, especially in global supply chains, can cause or contribute to abuses such as unsafe factories or forced labor.",
      "The **UN Guiding Principles on Business and Human Rights** (2011) say that states must protect people from business abuses, companies must respect human rights, and victims need access to remedy. Companies are expected to do **due diligence**: find, prevent and account for their impacts.",
      {key:"The Guiding Principles are soft law; the trend since has been to write due diligence into binding national and EU law."}
     ],
     builder:[
      "**Origins.** John Ruggie, the Secretary-General’s special representative from 2005, set out a “Protect, Respect and Remedy” framework (2008) and the Guiding Principles, endorsed by the Human Rights Council in June 2011. The Rana Plaza collapse (Bangladesh, 2013) made supply-chain risks vivid.",
      "**Mandatory laws.** France (duty of vigilance, 2017); Germany (supply chain act, in force 2023); the EU Corporate Sustainability Due Diligence Directive (2024). In February 2026 the EU adopted amendments limiting it to companies with over 5,000 employees and €1.5 billion turnover, dropping an EU-wide civil liability regime and the climate transition plan requirement, and moving compliance to July 2029.",
      "**Japan** issued guidelines on respecting human rights in supply chains (2022) after a national action plan (2020)."
     ],
     pro:[
      "**Treaty talks.** A Council working group (since 2014, launched by Ecuador and South Africa) has negotiated a binding instrument; by November 2026 there had been several revised drafts and twelve sessions (the latest in October 2026), but no agreed text.",
      "**Positions.** Supporters of binding rules argue voluntary approaches leave gaps and uneven competition; many business groups and some governments argue for flexibility, costs and legal certainty; some Global South governments warn that due diligence can become a trade barrier. NGOs described the 2026 EU changes as a weakening; business groups as simplification.",
      {tip:"Analyze a company policy by checking for named risks, a due diligence process, a grievance mechanism and evidence of remedy."}
     ]
    },
    related:["non-state-actors","economic-social-cultural-rights","human-rights-regime"],
    read:[{book:"alstonhr", where:"Chapter 13 “Non-State Actors: Businesses and Others”"}],
    sources:[{t:"Clifford Chance, “Omnibus I: the European Union concludes CSDDD and CSRD reforms” (February 2026)", url:"https://www.cliffordchance.com/insights/resources/blogs/business-and-human-rights-insights/2026/02/omnibus-i-the-european-union-concludes-csddd-and-csrd-reforms.html"},{t:"Business & Human Rights Resource Centre: Intergovernmental working group on a binding treaty", url:"https://www.business-humanrights.org/en/big-issues/binding-treaty/intergovernmental-working-group"}],
    checked:"2026-11"},

   {id:"digital-rights-surveillance", title:"Surveillance and digital rights", aka:["right to privacy in the digital age","mass surveillance","spyware"], tags:["human rights","technology","privacy"],
    summary:"How human rights law applies to state surveillance, bulk interception and commercial spyware, with key cases and each side’s position.",
    levels:{
     starter:[
      "The ICCPR protects people against “arbitrary or unlawful interference” with their privacy. Digital technology lets governments collect vast amounts of data and companies sell powerful hacking tools.",
      "Human rights law does not ban surveillance. It asks whether it is **lawful**, aims at a **legitimate goal** such as preventing crime, and is **necessary and proportionate**, with oversight.",
      {key:"The debate is about how much surveillance, of whom, with what safeguards, not about surveillance as such."}
     ],
     builder:[
      "**Milestones.** Snowden’s disclosures (2013); General Assembly resolution on the right to privacy in the digital age (December 2013); a special rapporteur on privacy (2015).",
      "**Cases.** *Big Brother Watch v. UK* (Grand Chamber, 2021): bulk interception allowed with end-to-end safeguards, which the UK regime then lacked; *Puttaswamy* (India, 2017): privacy a fundamental right; *Schrems II* (CJEU, 2020): EU–US data transfers.",
      "**Spyware.** The Pegasus Project (2021) reported targeting of journalists and activists; the maker said it sells only to vetted governments."
     ],
     pro:[
      "**Positions.** Security agencies and many governments: bulk powers are necessary and oversight makes them lawful. Privacy groups and several UN experts: bulk collection is disproportionate by design. Some states, notably China and Russia, frame the internet as a domain of state sovereignty; Western governments and many NGOs reject that framing for rights purposes.",
      "**Critiques of the case law.** Some commentators, such as the International Commission of Jurists, argued that *Big Brother Watch* legitimized mass surveillance; others saw its safeguards as a realistic standard.",
      {tip:"Use the three-part test (law, legitimate aim, necessity and proportionality) to structure any surveillance case, and attribute each side’s evidence."}
     ]
    },
    related:["platform-governance","information-operations","un-human-rights-machinery"],
    sources:[{t:"Columbia Global Freedom of Expression: Big Brother Watch v. the United Kingdom (No. 2)", url:"https://globalfreedomofexpression.columbia.edu/cases/big-brother-watch-v-the-united-kingdom/"},{t:"International Commission of Jurists, “Big Brother Watch v. UK: A Landmark Judgment Missing the Mark”", url:"https://www.icj.org/resource/big-brother-watch-v-uk-a-landmark-judgment-missing-the-mark/"}],
    checked:"2026-11"},

   {id:"truth-commissions", title:"Truth commissions", aka:["truth and reconciliation commissions","TRC","CAVR"], tags:["human rights","transitional justice","peacebuilding"],
    summary:"Temporary official bodies that investigate past abuses, with South Africa and Timor-Leste compared and the debate over truth, justice and amnesty.",
    levels:{
     starter:[
      "A **truth commission** is a temporary, official body that investigates a pattern of past abuses, usually after a war or dictatorship, and publishes a report. It is one tool of transitional justice, alongside trials, reparations and memorials.",
      "Truth commissions listen to victims, establish what happened and recommend reforms and reparations. Most do not punish anyone.",
      {key:"The central debate is whether truth can substitute for justice, or should come with it."}
     ],
     builder:[
      "**South Africa** (TRC, Act of 1995, chaired by Desmond Tutu): committees on human rights violations, amnesty and reparation; conditional amnesty for full disclosure of politically motivated crimes; main report to Mandela in October 1998.",
      "**Timor-Leste** (CAVR, 2001–2005): mandate April 1974–October 1999; report *Chega!* (2005) estimated at least 102,800 conflict-related deaths; a Community Reconciliation Process for lesser offenses; later a joint Indonesia–Timor-Leste Commission of Truth and Friendship (report 2008).",
      "**Others.** Argentina (1984), Sierra Leone, South Korea (2005–2010), the Solomon Islands (report 2012), Canada (2015)."
     ],
     pro:[
      "**Debates.** Mamdani (2002) argued that the TRC individualized apartheid; victims’ families challenged amnesty in court (1996). In Timor-Leste, leaders prioritized relations with Indonesia; victims’ groups pressed for prosecutions and reparations.",
      "**Evidence.** Olsen, Payne and Reiter (2010) found combinations of tools associated with better outcomes; Sikkink’s *The Justice Cascade* (2011) traced a trend toward prosecutions. Hayner’s *Unspeakable Truths* (2001, 2011) is the standard comparative guide.",
      "**Counting victims.** CAVR’s estimates came from statistical work by the Human Rights Data Analysis Group combining several data sources, a model of careful method (see {{ir-datasets}}).",
      {tip:"Compare commissions by mandate, powers (amnesty, subpoena), methods, report and follow-up."}
     ]
    },
    related:["peacebuilding","human-rights-regime"],
    sources:[{t:"Wikipedia: Commission for Reception, Truth and Reconciliation in East Timor", url:"https://en.wikipedia.org/wiki/Commission_for_Reception,_Truth_and_Reconciliation_in_East_Timor"},{t:"Human Rights Data Analysis Group: Timor-Leste", url:"https://hrdag.org/?p=96"},{t:"Britannica: Truth and Reconciliation Commission, South Africa", url:"https://www.britannica.com/topic/Truth-and-Reconciliation-Commission-South-Africa"}],
    checked:"2026-11"},

   {id:"samuel-moyn", title:"Samuel Moyn", aka:["Moyn"], tags:["thinker","human rights","history"],
    summary:"Historian and legal scholar whose The Last Utopia (2010) argued that human rights broke through as a movement only in the 1970s.",
    levels:{
     starter:[
      "**Samuel Moyn** is an American historian and law professor, at Yale since 2017 after teaching at Columbia and Harvard. He is best known for *The Last Utopia: Human Rights in History* (2010).",
      "His big idea: talk of rights is old, but human rights as a global movement that judges any government’s treatment of its people only took off in the 1970s, after other dreams such as socialism and anti-colonial nationalism lost their pull. That is why he calls human rights the “last utopia”.",
      {key:"Moyn asks us to see human rights as one political project among others, with a history and limits."}
     ],
     builder:[
      "**Key works.** *The Last Utopia* (2010); *Christian Human Rights* (2015), on conservative Christian sources of 1940s rights talk; *Not Enough: Human Rights in an Unequal World* (2018), on rights and inequality; *Humane* (2021), on how the push for humane war may have made endless war easier.",
      "**How scholars use him.** His work is the standard reference for the “short history” of human rights and for the critique that human rights pursue sufficiency rather than equality."
     ],
     pro:[
      "**Critics.** Sikkink, Burke, Jensen and others argue that he underplays the 1940s and the Global South; others argue that he dates a movement while they date law and norms. Some readers find his stress on contingency persuasive; others think it overlooks continuity.",
      "**Legacy.** The debate he started reshaped the field: few seminars now tell human rights history as a smooth rise."
     ]
    },
    related:["human-rights-histories","kathryn-sikkink","economic-social-cultural-rights"],
    sources:[{t:"De Gruyter Brill: Moyn, Not Enough (Harvard University Press, 2018)", url:"https://www.degruyterbrill.com/document/doi/10.4159/9780674984806/html"},{t:"Review of Not Enough, American Journal of International Law", url:"https://www.cambridge.org/core/journals/american-journal-of-international-law/article/not-enough-human-rights-in-an-unequal-world-by-samuel-moyn-cambridge-massachusetts-harvard-university-press-2018-pp-ix-220-index/A83CB79DB239553ADE64BA7A94892BC5"}],
    checked:"2026-11"},

   {id:"kathryn-sikkink", title:"Kathryn Sikkink", aka:["Sikkink"], tags:["thinker","human rights","constructivism"],
    summary:"Political scientist of norms and human rights: the boomerang pattern, the spiral model, the justice cascade and Evidence for Hope.",
    levels:{
     starter:[
      "**Kathryn Sikkink** is an American political scientist who taught for many years at the University of Minnesota and is now a professor of human rights policy at Harvard Kennedy School. She studies how human rights ideas spread and whether they change what governments do.",
      "Her work began with Latin America, including Argentina’s dictatorship and the campaigns of the families of the disappeared.",
      {key:"Sikkink’s central claim is that ideas, activists and law can change how states behave, under the right conditions."}
     ],
     builder:[
      "**Key works.** *Activists Beyond Borders* (1998, with Margaret Keck): transnational advocacy networks and the boomerang pattern. “International Norm Dynamics and Political Change” (1998, with Martha Finnemore): the norm life cycle. *The Power of Human Rights* (1999, with Thomas Risse and Stephen Ropp): the spiral model. *The Justice Cascade* (2011): the trend toward prosecuting leaders. *Evidence for Hope* (2017): diverse origins and measured progress.",
      "Her honors include the Grawemeyer Award for *Activists Beyond Borders* and election to the British Academy (2020)."
     ],
     pro:[
      "**Debates.** With Moyn over the origins of human rights; with Hopgood and Posner over whether the system is in decline; with quantitative skeptics over data (Clark and Sikkink 2013 on information effects).",
      "**Critiques.** Critics argue that her early cases were chosen because change happened, and that the networks she studied were Western-led; she has replied by stressing Global South agency and by studying failures as well as successes."
     ]
    },
    related:["spiral-model-human-rights","norm-dynamics","human-rights-histories","samuel-moyn"],
    sources:[{t:"Wikipedia: Kathryn Sikkink", url:"https://en.wikipedia.org/wiki/Kathryn_Sikkink"}],
    checked:"2026-11"},

   {id:"beth-simmons", title:"Beth Simmons", aka:["Beth A. Simmons"], tags:["thinker","human rights","international law"],
    summary:"Political scientist whose Mobilizing for Human Rights (2009) showed that treaties matter through domestic politics, especially in transitional states.",
    levels:{
     starter:[
      "**Beth A. Simmons** is an American political scientist and legal scholar, now a professor of law, political science and business ethics at the University of Pennsylvania after many years at Harvard.",
      "Her best-known book, *Mobilizing for Human Rights: International Law in Domestic Politics* (2009), asked whether human rights treaties change what governments do. Her answer: yes, sometimes, because people inside a country can use them.",
      {key:"Simmons moved the debate from “do treaties work?” to “when and how do they work?”"}
     ],
     builder:[
      "**The argument.** Treaties work through agenda setting, litigation and mobilization. Effects are largest in transitional or partially democratic states. She found evidence on women’s rights (CEDAW), torture, children’s rights and civil rights.",
      "**Recognition.** The book won the American Political Science Association’s Woodrow Wilson Foundation Award (2010) and a certificate of merit from the American Society of International Law.",
      "**Other work.** *Who Adjusts?* (1994) on interwar economic policy; research on international borders and the diffusion of policies."
     ],
     pro:[
      "**Method.** The book combined large-N statistics with case studies, a model of mixed methods in IR (see {{regression-causal-inference}}).",
      "**Critiques.** Some argue that effects are small and hard to separate from democratization; others that her focus on ratification misses non-treaty pathways such as aid and trade conditions."
     ]
    },
    related:["human-rights-treaty-effectiveness","kathryn-sikkink"],
    sources:[{t:"Wikipedia: Beth A. Simmons", url:"https://en.wikipedia.org/wiki/Beth_A._Simmons"},{t:"Harvard Gazette, “Excellence honored” (August 2010)", url:"https://news.harvard.edu/gazette/story/2010/08/excellence-honored/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"natural-rights", term:"Natural rights", def:"Rights people are said to hold by nature, before and independent of any government, such as Locke’s rights to life, liberty and property.", codex:"human-rights-histories"},
   {id:"human-dignity", term:"Human dignity", def:"The inherent worth of every person; the UDHR’s preamble names it as the foundation of human rights.", codex:"udhr-drafting"},
   {id:"last-utopia-thesis", term:"Last utopia thesis", def:"Samuel Moyn’s argument (2010) that human rights became a global movement only in the 1970s, after other utopian projects lost their appeal.", codex:"human-rights-histories"},
   {id:"american-declaration-rights-duties", term:"American Declaration of the Rights and Duties of Man", def:"A human rights declaration adopted by the Organization of American States in Bogotá in 1948, months before the UDHR; it also lists duties.", codex:"human-rights-histories"},
   {id:"international-bill-of-human-rights", term:"International Bill of Human Rights", def:"The UDHR (1948) together with the two 1966 covenants: the ICCPR and the ICESCR.", codex:"udhr-drafting"},
   {id:"generations-of-rights", term:"Generations of rights", def:"Karel Vasak’s 1977 scheme: civil and political rights, economic and social rights, and collective “solidarity” rights. Handy, but criticized for implying a ranking.", codex:"economic-social-cultural-rights"},
   {id:"helsinki-final-act", term:"Helsinki Final Act", def:"The 1975 agreement of the Conference on Security and Co-operation in Europe; its human rights clauses were used by dissidents in the Soviet bloc.", codex:"human-rights-histories"},
   {id:"core-human-rights-treaties", term:"Core human rights treaties", def:"The nine main UN human rights treaties (on racial discrimination, civil and political rights, economic and social rights, women, torture, children, migrant workers, disabilities and enforced disappearance), each with a monitoring committee.", codex:"un-human-rights-machinery"},
   {id:"concluding-observations", term:"Concluding observations", def:"A treaty body’s assessment and recommendations after reviewing a state’s periodic report.", codex:"un-human-rights-machinery"},
   {id:"general-comment", term:"General comment", def:"A treaty body’s published interpretation of what a treaty provision requires.", codex:"un-human-rights-machinery"},
   {id:"individual-communication", term:"Individual communication", def:"A complaint by a person to a treaty body that their rights were violated; possible only against states that have accepted the procedure.", codex:"un-human-rights-machinery"},
   {id:"optional-protocol", term:"Optional protocol", def:"An additional treaty attached to a main treaty, which states may join separately, for example to accept individual complaints.", codex:"un-human-rights-machinery"},
   {id:"special-procedures", term:"Special procedures", def:"Independent experts appointed by the Human Rights Council to report on a theme or a country; they are unpaid and visit only by invitation.", codex:"un-human-rights-machinery"},
   {id:"special-rapporteur", term:"Special rapporteur", def:"An individual independent expert holding a special procedures mandate, such as on torture or on freedom of expression.", codex:"un-human-rights-machinery"},
   {id:"commission-of-inquiry", term:"Commission of inquiry", def:"A body created by the Human Rights Council or another UN organ to investigate serious violations in a specific situation and report its findings.", codex:"un-human-rights-machinery"},
   {id:"ohchr", term:"OHCHR", def:"The Office of the UN High Commissioner for Human Rights, created in 1993; the secretariat of the UN human rights system, with field offices.", codex:"un-human-rights-machinery"},
   {id:"nhri", term:"National human rights institution (NHRI)", def:"An independent state body, such as a human rights commission or ombudsman, that monitors rights, handles complaints and advises government at home.", codex:"un-human-rights-machinery"},
   {id:"paris-principles", term:"Paris Principles", def:"Standards adopted by the UN General Assembly in 1993 for the independence, mandate and resources of national human rights institutions.", codex:"un-human-rights-machinery"},
   {id:"exhaustion-of-domestic-remedies", term:"Exhaustion of domestic remedies", def:"The rule that a complainant must normally try the available national courts before an international body will hear the case.", codex:"regional-human-rights-systems"},
   {id:"european-court-of-human-rights", term:"European Court of Human Rights", def:"The Council of Europe’s court in Strasbourg, which hears individual applications under the European Convention on Human Rights and issues binding judgments.", codex:"regional-human-rights-systems"},
   {id:"inter-american-human-rights-system", term:"Inter-American human rights system", def:"The Organization of American States’ Inter-American Commission (Washington) and Inter-American Court (San José), based on the American Declaration and Convention.", codex:"regional-human-rights-systems"},
   {id:"african-charter-human-peoples-rights", term:"African Charter on Human and Peoples’ Rights", def:"The African human rights treaty (1981, in force 1986), notable for peoples’ rights and individual duties; overseen by a Commission and a Court.", codex:"regional-human-rights-systems"},
   {id:"aichr", term:"AICHR", def:"The ASEAN Intergovernmental Commission on Human Rights (2009), a consultative body that works by consensus, with no court or complaint procedure.", codex:"regional-human-rights-systems"},
   {id:"margin-of-appreciation", term:"Margin of appreciation", def:"The room the European Court of Human Rights gives states to decide sensitive questions their own way, within limits.", codex:"regional-human-rights-systems"},
   {id:"commitment-compliance-gap", term:"Commitment–compliance gap", def:"The difference between states’ human rights commitments (such as ratified treaties) and their actual behavior.", codex:"human-rights-treaty-effectiveness"},
   {id:"expressive-function-treaties", term:"Expressive function (of treaties)", def:"Hathaway’s idea that ratifying a treaty expresses commitment and earns approval, which can substitute for real change when enforcement is weak.", codex:"human-rights-treaty-effectiveness"},
   {id:"domestic-mobilisation", term:"Domestic mobilization", def:"In Simmons’s account, citizens and groups using a ratified treaty to frame demands and build coalitions, raising the cost of violations.", codex:"human-rights-treaty-effectiveness"},
   {id:"transnational-advocacy-network", term:"Transnational advocacy network", def:"Activists, NGOs, journalists and officials in different countries linked by shared values and the exchange of information (Keck and Sikkink, 1998).", codex:"spiral-model-human-rights"},
   {id:"human-rights-spiral-model", term:"Spiral model (human rights)", def:"Risse, Ropp and Sikkink’s five-phase model (1999): repression, denial, tactical concessions, prescriptive status, rule-consistent behavior.", codex:"spiral-model-human-rights"},
   {id:"tactical-concessions", term:"Tactical concessions", def:"Cosmetic steps a government takes to reduce outside pressure, such as releasing prisoners, which can open space for domestic groups.", codex:"spiral-model-human-rights"},
   {id:"prescriptive-status", term:"Prescriptive status", def:"The phase in which a government accepts human rights norms as valid: it ratifies treaties, changes laws and stops denying them.", codex:"spiral-model-human-rights"},
   {id:"limited-statehood", term:"Limited statehood", def:"Areas or policy fields where a government cannot implement or enforce its decisions; it can block compliance even when the will exists.", codex:"spiral-model-human-rights"},
   {id:"naming-and-shaming", term:"Naming and shaming", def:"Publicly exposing a government’s violations to raise the reputational cost of continuing them.", codex:"human-rights-treaty-effectiveness"},
   {id:"political-terror-scale", term:"Political Terror Scale", def:"A dataset (from 1976) that rates countries’ physical integrity violations on a 1–5 scale, coded from Amnesty, Human Rights Watch and US State Department reports.", codex:"human-rights-treaty-effectiveness"},
   {id:"changing-standard-of-accountability", term:"Changing standard of accountability", def:"Fariss’s argument (2014) that monitors have become stricter over time, so constant human rights scores can hide real improvement.", codex:"human-rights-treaty-effectiveness"},
   {id:"relative-universality", term:"Relative universality", def:"Donnelly’s position: human rights are universal as concepts and lists, while their interpretation and implementation may legitimately vary.", codex:"universalism-relativism-debate"},
   {id:"cross-cultural-legitimacy", term:"Cross-cultural legitimacy", def:"An-Na’im’s idea that rights last only when people can justify them from within their own traditions, through internal and cross-cultural dialogue.", codex:"universalism-relativism-debate"},
   {id:"bangkok-declaration", term:"Bangkok Declaration (1993)", def:"The declaration of Asian governments before the Vienna conference, accepting universality but stressing national and regional particularities, sovereignty and development.", codex:"universalism-relativism-debate"},
   {id:"vienna-declaration", term:"Vienna Declaration and Programme of Action", def:"The 1993 World Conference text stating that all human rights are “universal, indivisible and interdependent and interrelated”.", codex:"universalism-relativism-debate"},
   {id:"cairo-declaration", term:"Cairo Declaration on Human Rights in Islam", def:"A 1990 declaration of the Organisation of Islamic Cooperation framing rights within Islamic law; revised in 2020 as the OIC Declaration on Human Rights.", codex:"universalism-relativism-debate"},
   {id:"savages-victims-saviours", term:"Savages–victims–saviours", def:"Makau Mutua’s phrase (2001) for a story human rights writing often tells: a savage state, a victim and a Western saviour.", codex:"universalism-relativism-debate"},
   {id:"progressive-realisation", term:"Progressive realization", def:"The ICESCR duty to take steps, to the maximum of available resources, toward full realization of economic, social and cultural rights over time.", codex:"economic-social-cultural-rights"},
   {id:"minimum-core-obligations", term:"Minimum core obligations", def:"Essential levels of rights such as food, basic health care, shelter and education that every state must ensure at once, according to the ICESCR committee.", codex:"economic-social-cultural-rights"},
   {id:"justiciability", term:"Justiciability", def:"Whether a right can be enforced by courts; long debated for economic and social rights.", codex:"economic-social-cultural-rights"},
   {id:"right-to-development", term:"Right to development", def:"A collective and individual right proclaimed by the UN General Assembly in 1986 (146–1–8); its legal status is debated.", codex:"economic-social-cultural-rights"},
   {id:"ungps", term:"UN Guiding Principles on Business and Human Rights", def:"Principles endorsed by the Human Rights Council in 2011: states protect, companies respect, and victims get access to remedy.", codex:"business-and-human-rights"},
   {id:"human-rights-due-diligence", term:"Human rights due diligence", def:"A company’s ongoing process to identify, prevent, mitigate and account for its human rights impacts.", codex:"business-and-human-rights"},
   {id:"mandatory-due-diligence", term:"Mandatory due diligence", def:"Laws that require companies to carry out human rights (and often environmental) due diligence, such as France’s 2017 law and the EU directive of 2024.", codex:"business-and-human-rights"},
   {id:"right-to-privacy", term:"Right to privacy", def:"Protection against arbitrary or unlawful interference with privacy, family, home or correspondence (ICCPR Article 17), applied to digital communications since 2013.", codex:"digital-rights-surveillance"},
   {id:"mass-surveillance", term:"Mass (bulk) surveillance", def:"Collecting communications or data in bulk rather than about specific suspects; courts ask whether safeguards make it lawful.", codex:"digital-rights-surveillance"},
   {id:"commercial-spyware", term:"Commercial spyware", def:"Hacking software sold by private companies, usually to governments, that can secretly take over phones or computers.", codex:"digital-rights-surveillance"},
   {id:"truth-commission", term:"Truth commission", def:"A temporary, official body that investigates a pattern of past abuses and publishes a report (Hayner).", codex:"truth-commissions"},
   {id:"conditional-amnesty", term:"Conditional amnesty", def:"Amnesty granted only on conditions, such as South Africa’s requirement of full disclosure of politically motivated crimes.", codex:"truth-commissions"},
   {id:"reparations", term:"Reparations", def:"Measures to repair harm to victims, such as compensation, restitution, rehabilitation, apologies and guarantees of non-repetition.", codex:"truth-commissions"},
   {id:"justice-cascade", term:"Justice cascade", def:"Sikkink’s term (2011) for the global trend since the 1980s toward holding state leaders criminally accountable for human rights violations.", codex:"truth-commissions"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u11-q01", lesson:"e4u11-l1", level:1, q:"What is the central claim of Samuel Moyn’s *The Last Utopia* (2010)?", options:[
     {t:"Human rights as a movement broke through in the 1970s", ok:true, why:"Right. The international movement grew after other utopias faded. Moyn accepts older rights talk but dates the movement to the 1970s."},
     {t:"Human rights began with the Cyrus Cylinder", why:"Moyn rejects long histories of this kind."},
     {t:"Human rights were invented by Latin American diplomats in 1945", why:"That is closer to Sikkink’s and Glendon’s emphasis, not Moyn’s."},
     {t:"Human rights are a utopia that has now been fully achieved", why:"“Last utopia” means the last remaining utopian project, not an achieved one."}]},
   {id:"e4u11-q02", lesson:"e4u11-l1", level:2, q:"Which piece of evidence would Kathryn Sikkink most likely use against Moyn?", options:[
     {t:"The American Declaration of the Rights and Duties of Man, adopted in Bogotá in 1948", ok:true, why:"Right. Sikkink uses Latin American leadership in the 1940s to show diverse, earlier origins."},
     {t:"Amnesty International’s Nobel Peace Prize in 1977", why:"That supports Moyn’s 1970s breakthrough."},
     {t:"US President Carter’s human rights policy from 1977", why:"Another of Moyn’s 1970s markers."},
     {t:"The Helsinki Final Act of 1975", why:"Also part of Moyn’s 1970s story."}]},
   {id:"e4u11-q03", lesson:"e4u11-l1", level:1, q:"Which drafter of the UDHR is widely credited with changing “all men” to “all human beings” in Article 1?", options:[
     {t:"Hansa Mehta of India", ok:true, why:"Correct; she was also a women’s rights campaigner."},
     {t:"René Cassin of France", why:"Cassin reorganized the draft; the Article 1 wording change is credited to Mehta."},
     {t:"John Humphrey of Canada", why:"Humphrey wrote the first draft as a UN official."},
     {t:"Charles Malik of Lebanon", why:"Malik was rapporteur and chaired the Third Committee in 1948."}]},
   {id:"e4u11-q04", lesson:"e4u11-l1", level:1, q:"The UDHR was adopted on 10 December 1948 by what vote?", options:[
     {t:"48 in favor, none against, 8 abstentions", ok:true, why:"Correct. The abstainers were six communist states, Saudi Arabia and South Africa."},
     {t:"Unanimously, with no abstentions", why:"Eight states abstained."},
     {t:"51 in favor, 2 against", why:"No state voted against."},
     {t:"193 in favor", why:"The UN had far fewer members in 1948; 193 is today’s membership."}]},
   {id:"e4u11-q05", lesson:"e4u11-l1", level:2, q:"Critics say long histories of human rights are often anachronistic. What do they mean?", options:[
     {t:"They project today’s idea of rights onto older texts", ok:true, why:"Right. Older texts often describe rulers’ duties or justice, not individual rights held against the state. Anachronism means attributing present concepts to the past."},
     {t:"Old documents are too difficult for modern readers to understand", why:"The point is about concepts, not difficulty."},
     {t:"Long histories focus too much on the 1970s", why:"Long histories reach much further back; the 1970s focus is Moyn’s."},
     {t:"Long histories ignore Europe", why:"Most long histories are, if anything, centered on Europe."}]},
   {id:"e4u11-q06", lesson:"e4u11-l1", level:3, q:"Oluwaseun argues: “Since most of Africa was colonised in 1948, the UDHR cannot claim universal legitimacy.” Which reply best reflects the scholarship?", options:[
     {t:"The absence is real, but new states soon reshaped rights law", ok:true, why:"Right. Burke, Jensen and others show that newly independent states soon adopted and reshaped human rights law, for example with ICERD in 1965. A balanced answer accepts the fact and adds the later evidence."},
     {t:"The claim is false because African states drafted the UDHR", why:"Most of Africa was indeed absent in 1948."},
     {t:"Legitimacy depends only on the vote count in 1948", why:"Legitimacy is a broader question that includes later acceptance and use."},
     {t:"The UDHR was later replaced by a new declaration drafted in Africa", why:"No such replacement exists; the African Charter is a regional treaty."}]},
   {id:"e4u11-q07", lesson:"e4u11-l1", level:1, q:"What does the “International Bill of Human Rights” consist of?", options:[
     {t:"The UDHR plus the ICCPR and the ICESCR", ok:true, why:"Correct: the Declaration and the two 1966 covenants."},
     {t:"The UN Charter and the Geneva Conventions", why:"Those are other foundational texts, not the International Bill."},
     {t:"All nine core treaties", why:"The term refers only to the UDHR and the two covenants."},
     {t:"The European and American conventions", why:"Those are regional treaties."}]},
   {id:"e4u11-q08", lesson:"e4u11-l1", level:2, q:"Why is Vasak’s “three generations of rights” scheme contested?", options:[
     {t:"It can suggest a ranking of rights", ok:true, why:"Right. A ranking and sequence clash with the UN principle that rights are indivisible. Critics worry that “first generation” sounds more important or more urgent."},
     {t:"It was never published", why:"Vasak set it out in 1977."},
     {t:"It includes only civil and political rights", why:"It covers three kinds, including economic and solidarity rights."},
     {t:"It was rejected by every scholar immediately", why:"It is widely used as a teaching device, despite criticism."}]},
   {id:"e4u11-q09", lesson:"e4u11-l1", level:3, q:"Mei is writing about Maritain’s remark that the UNESCO participants agreed on rights “on condition that no one asks us why”. Which interpretation fits the lesson best?", options:[
     {t:"They agreed on rights but not on their basis", ok:true, why:"Right. Practical agreement without a shared philosophical foundation is seen by some as a strength and by others as a weakness."},
     {t:"The drafters refused to discuss the content of rights", why:"They debated the content in great detail; it was the justification they did not share."},
     {t:"Maritain opposed the Declaration", why:"Maritain was describing how agreement was possible."},
     {t:"It proves human rights have no foundation at all", why:"That overstates it; it shows foundations differ."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u11-q10", lesson:"e4u11-l2", level:1, q:"What distinguishes treaty-based bodies from Charter-based bodies?", options:[
     {t:"Their legal basis and which states they cover", ok:true, why:"Correct. Treaty bodies are independent experts covering only states parties; Charter bodies derive from the UN Charter and cover all members."},
     {t:"Treaty bodies are made up of government representatives", why:"Treaty bodies are made up of independent experts."},
     {t:"Charter bodies issue binding judgments", why:"No UN human rights body issues binding judgments on states."},
     {t:"There is no difference", why:"The distinction matters for membership, coverage and authority."}]},
   {id:"e4u11-q11", lesson:"e4u11-l2", level:1, q:"How many seats does the Human Rights Council have, and how are they shared?", options:[
     {t:"47, allocated among the five UN regional groups", ok:true, why:"Correct: 13 Africa, 13 Asia-Pacific, 8 Latin America and Caribbean, 7 Western Europe and others, 6 Eastern Europe."},
     {t:"15, with five permanent members", why:"That is the Security Council."},
     {t:"193, one per UN member", why:"That is the General Assembly."},
     {t:"18 independent experts", why:"That describes the size of some treaty bodies."}]},
   {id:"e4u11-q12", lesson:"e4u11-l2", level:2, q:"Sione wants a UN expert to examine prison conditions in a country. The government has not invited anyone. What is most accurate?", options:[
     {t:"A rapporteur can report, but a visit needs an invitation", ok:true, why:"Right. A special rapporteur can write to the government and report publicly. Visits need consent; communications and reports do not."},
     {t:"A special rapporteur can enter without consent", why:"Visits require the state’s invitation."},
     {t:"Only the Security Council can ask questions about prisons", why:"Special procedures and treaty bodies regularly address detention."},
     {t:"Nothing can be done without a treaty body’s judgment", why:"Treaty bodies do not issue judgments, and other tools exist."}]},
   {id:"e4u11-q13", lesson:"e4u11-l2", level:1, q:"What are the Paris Principles?", options:[
     {t:"UN standards (1993) for the independence and mandate of national human rights institutions", ok:true, why:"Correct: they guide the accreditation of NHRIs."},
     {t:"The rules of the European Court of Human Rights", why:"The Court follows the European Convention and its rules of court."},
     {t:"The principles of the Paris climate agreement", why:"A different instrument altogether."},
     {t:"The 1948 rules for drafting the UDHR", why:"The UDHR was adopted in Paris, but the Paris Principles date from 1993."}]},
   {id:"e4u11-q14", lesson:"e4u11-l2", level:2, q:"Which regional system is known for “peoples’ rights” and individual duties, and decided *SERAC v. Nigeria* on the Ogoni people?", options:[
     {t:"The African system", ok:true, why:"Correct: the African Charter and Commission."},
     {t:"The European system", why:"The European Convention focuses on individual civil and political rights."},
     {t:"The Inter-American system", why:"Its landmark *Velásquez Rodríguez* case concerned disappearance."},
     {t:"The ASEAN system", why:"AICHR hears no complaints."}]},
   {id:"e4u11-q15", lesson:"e4u11-l2", level:3, q:"Hana compares two outputs on the same country: a treaty body’s detailed concluding observations and a UPR outcome with many mild recommendations from friendly states. What best explains the difference?", options:[
     {t:"Independent experts versus peer review among states", ok:true, why:"Right. Treaty bodies apply a treaty; in the UPR, politics shapes who recommends what. Different authors, different logics."},
     {t:"The UPR has no recommendations", why:"The UPR produces many recommendations."},
     {t:"Treaty bodies are elected by the country under review", why:"Members are elected by states parties and serve in their personal capacity."},
     {t:"The two must always say the same thing", why:"They are separate mechanisms with different methods."}]},
   {id:"e4u11-q16", lesson:"e4u11-l2", level:2, q:"Which statement about the UN human rights system in 2025–26 is accurate?", options:[
     {t:"Budget cuts reduced treaty body meetings in 2025", ok:true, why:"Correct. Meeting time fell by about 30%, and some committees canceled sessions for the first time, according to the High Commissioner’s figures as compiled by the International Service for Human Rights."},
     {t:"The treaty bodies were abolished in 2025", why:"They continue, with reduced meeting time."},
     {t:"OHCHR received more money than ever before in 2025", why:"It received only part of its approved budget."},
     {t:"All UPR reviews were canceled in 2025", why:"Reviews continued; the US review was rescheduled after the US did not take part."}]},
   {id:"e4u11-q17", lesson:"e4u11-l2", level:1, q:"What is the “margin of appreciation”?", options:[
     {t:"Room the Court gives states on sensitive questions", ok:true, why:"Correct. States may decide such questions their own way, within limits; the European Court still reviews whether states stayed within the limits."},
     {t:"The period a state has to pay compensation", why:"That is a matter of execution, not the margin."},
     {t:"A rule that the Court must agree with national courts", why:"The Court can and does find violations despite national decisions."},
     {t:"The number of judges needed for a decision", why:"That is a procedural rule, unrelated to the margin."}]},
   {id:"e4u11-q18", lesson:"e4u11-l2", level:3, q:"A minister says: “Our region does not need a human rights court; dialogue works better.” A critic replies: “Without complaints there is no protection.” Which description of ASEAN’s AICHR is accurate and neutral?", options:[
     {t:"It works by dialogue, with no court; views on this differ", ok:true, why:"Right. It promotes rights by consensus and has no complaint procedure; defenders see this as fitting the ASEAN way, critics as avoiding scrutiny. Both positions are attributed."},
     {t:"It is a court whose judgments bind ASEAN members", why:"AICHR is not a court."},
     {t:"It has been abolished", why:"It continues to exist."},
     {t:"Its members are independent judges elected directly by citizens", why:"Members are appointed by governments."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u11-q19", lesson:"e4u11-l3", level:1, q:"What is the “commitment–compliance gap”?", options:[
     {t:"The gap between commitments and actual behavior", ok:true, why:"Correct: promises on paper versus practice."},
     {t:"The time between signing a treaty and ratifying it at home", why:"That is part of the treaty process, not the gap."},
     {t:"A gap in the UN budget", why:"Unrelated to the concept."},
     {t:"The difference between two regional courts", why:"Unrelated to the concept of the gap."}]},
   {id:"e4u11-q20", lesson:"e4u11-l3", level:2, q:"Hathaway explained her finding by the “expressive function” of treaties. What does that mean?", options:[
     {t:"Ratifying is a cheap signal that can replace real change", ok:true, why:"Right. The signal of commitment can earn approval; weak enforcement makes it cheap."},
     {t:"Treaties express the will of the UN Secretary-General", why:"Treaties are agreements between states."},
     {t:"Treaties are only about free expression", why:"The term refers to the signaling role of ratification."},
     {t:"Treaties must be read aloud in parliament to take effect", why:"Not a real requirement."}]},
   {id:"e4u11-q21", lesson:"e4u11-l3", level:2, q:"According to Simmons (2009), in which kind of state do human rights treaties have the largest effects?", options:[
     {t:"Transitional or partially democratic states", ok:true, why:"Right. People there have both motive and means to mobilize."},
     {t:"Stable democracies", why:"Rights are already largely protected there, so treaties add less."},
     {t:"Closed autocracies", why:"People there cannot easily use treaties."},
     {t:"States that have not ratified", why:"The question is about the effects of ratification."}]},
   {id:"e4u11-q22", lesson:"e4u11-l3", level:3, q:"Researchers find that multi-party dictatorships are more likely both to join the torture convention and to torture. Which interpretation is best?", options:[
     {t:"A common cause may drive both", ok:true, why:"Right. Organized opposition may lead such regimes both to repress more and to make concessions like ratifying, so the correlation does not show the treaty causes torture. This is Vreeland’s (2008) argument about a common cause."},
     {t:"Joining the convention causes governments to torture", why:"That reads correlation as causation."},
     {t:"The data must be wrong", why:"The pattern can be explained without dismissing the data."},
     {t:"Only democracies join treaties", why:"Many non-democracies have ratified."}]},
   {id:"e4u11-q23", lesson:"e4u11-l3", level:1, q:"Which is the correct order of the first three phases of the spiral model?", options:[
     {t:"Repression, denial, tactical concessions", ok:true, why:"Correct; prescriptive status and rule-consistent behavior follow."},
     {t:"Denial, repression, prescriptive status", why:"Repression comes first, and concessions come before prescriptive status."},
     {t:"Tactical concessions, repression, denial", why:"Concessions come third."},
     {t:"Prescriptive status, denial, repression", why:"This reverses the model."}]},
   {id:"e4u11-q24", lesson:"e4u11-l3", level:2, q:"A government that had long dismissed criticism as interference releases some political prisoners and invites a UN expert, while saying nothing has changed. Which phase is this?", options:[
     {t:"Tactical concessions", ok:true, why:"Right. Steps to ease pressure without accepting the norms."},
     {t:"Prescriptive status", why:"That needs acceptance of the norms in law and discourse."},
     {t:"Repression", why:"The government is already engaging with outside pressure."},
     {t:"Rule-consistent behavior", why:"Practice has not yet changed overall."}]},
   {id:"e4u11-q25", lesson:"e4u11-l3", level:2, q:"What did Christopher Fariss (2014) argue about human rights data?", options:[
     {t:"Monitors have become stricter over time, so constant scores can hide improvement", ok:true, why:"Right: the changing standard of accountability."},
     {t:"Human rights data are fabricated", why:"He argued for correcting a bias, not that data are fabricated."},
     {t:"Human rights have worsened everywhere since 1980", why:"His corrected estimates suggest improvement."},
     {t:"Only government statistics should be used", why:"The datasets rely mainly on NGO and State Department reports."}]},
   {id:"e4u11-q26", lesson:"e4u11-l3", level:3, q:"Tomás writes: “Since abuses persist in most countries, human rights law has failed.” Which response best uses the lesson?", options:[
     {t:"It depends on the benchmark", ok:true, why:"Right. Sikkink compares with the past and sees progress, pessimists compare with the ideal; a strong claim specifies the right, mechanism, type of state and period. This reframes a sweeping claim into a testable one."},
     {t:"He is right; every study shows no effect", why:"Studies such as Simmons (2009) find conditional effects."},
     {t:"He is wrong; every study shows strong effects", why:"Evidence is mixed and conditional."},
     {t:"The question cannot be studied at all", why:"It is studied, with careful designs."}]},
   {id:"e4u11-q27", lesson:"e4u11-l3", level:1, q:"In *The Persistent Power of Human Rights* (2013), what does “limited statehood” refer to?", options:[
     {t:"Governments lacking capacity, not will", ok:true, why:"Correct. A government that cannot implement its decisions may fail to comply despite good will."},
     {t:"States that are not UN members", why:"It concerns capacity, not membership."},
     {t:"Small states with few people", why:"Size is not the issue; control is."},
     {t:"States that limit their own power by treaty", why:"That is a different idea."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u11-q28", lesson:"e4u11-l4", level:1, q:"What did the governments’ Bangkok Declaration of April 1993 say about universality?", options:[
     {t:"Universal, but with regional particularities in mind", ok:true, why:"Correct. Rights are universal in nature but must be considered bearing in mind national and regional particularities; it also stressed sovereignty and non-interference."},
     {t:"Human rights are a Western idea that Asia should reject", why:"It accepted universality."},
     {t:"Culture can never be considered", why:"It stressed cultural and regional backgrounds."},
     {t:"Only economic rights are universal", why:"It did not say this, though it stressed the right to development."}]},
   {id:"e4u11-q29", lesson:"e4u11-l4", level:1, q:"Which phrase comes from the Vienna Declaration of 1993?", options:[
     {t:"All human rights are universal, indivisible and interdependent and interrelated", ok:true, why:"Correct (paragraph 5)."},
     {t:"Sovereignty as responsibility", why:"That idea is associated with Francis Deng and R2P."},
     {t:"Anarchy is what states make of it", why:"That is Wendt (1992)."},
     {t:"Protect, respect and remedy", why:"That is the business and human rights framework."}]},
   {id:"e4u11-q30", lesson:"e4u11-l4", level:2, q:"Which position is closest to Donnelly’s “relative universality”?", options:[
     {t:"Fair trials are universal; their procedures may vary", ok:true, why:"Right. Legal systems may organize trials differently within limits: universal concept, variable implementation."},
     {t:"Each culture decides which rights exist", why:"That is strong or radical relativism."},
     {t:"Every state must use identical procedures for fair trials", why:"That is radical universalism."},
     {t:"Rights apply only to citizens", why:"Human rights apply to all persons."}]},
   {id:"e4u11-q31", lesson:"e4u11-l4", level:2, q:"Charlotte Bunch’s “Women’s Rights as Human Rights” (1990) is best known for challenging what?", options:[
     {t:"The public/private divide in human rights", ok:true, why:"Right. It left violence in homes and families outside human rights. Feminist scholars pushed human rights into the “private” sphere."},
     {t:"The existence of the UN", why:"She worked within and with the UN system."},
     {t:"Economic rights", why:"Her focus was gender-based violence and the scope of rights."},
     {t:"The authority of the European Court of Human Rights", why:"Not the focus of the article."}]},
   {id:"e4u11-q32", lesson:"e4u11-l4", level:2, q:"Which statement about the ICESCR is accurate?", options:[
     {t:"Some duties, like non-discrimination, apply immediately", ok:true, why:"Correct. It allows progressive realization within available resources, but its committee says minimum core obligations and non-discrimination apply immediately (General Comment No. 3, 1990)."},
     {t:"It creates no obligations", why:"It creates obligations, some immediate."},
     {t:"It cannot be enforced by any court anywhere in the world", why:"Courts such as South Africa’s have enforced similar rights; an optional protocol allows complaints."},
     {t:"It was adopted in 1948 with the UDHR", why:"It was adopted in 1966."}]},
   {id:"e4u11-q33", lesson:"e4u11-l4", level:1, q:"What are the three pillars of the UN Guiding Principles on Business and Human Rights?", options:[
     {t:"State duty to protect, corporate responsibility to respect, access to remedy", ok:true, why:"Correct: protect, respect and remedy."},
     {t:"Prevention, reaction, rebuilding", why:"That resembles R2P’s responsibilities, not the UNGPs."},
     {t:"Agenda setting, litigation, mobilization", why:"Those are Simmons’s mechanisms."},
     {t:"Respect, protect, fulfill for companies only", why:"The UNGPs assign protection to states and respect to companies."}]},
   {id:"e4u11-q34", lesson:"e4u11-l4", level:3, q:"Amara reads that the EU “abandoned” its due diligence directive in 2026. What is the accurate, neutral description?", options:[
     {t:"It was amended to narrow it and delay compliance", ok:true, why:"Right. In February 2026 amendments narrowed it to the largest companies and delayed compliance to 2029; NGOs called it a weakening, business groups a simplification. Facts plus attributed positions."},
     {t:"The directive was repealed entirely", why:"It was amended, not repealed."},
     {t:"The directive now applies to all companies of any size", why:"The amendments raised the thresholds."},
     {t:"Nothing changed", why:"Significant amendments were adopted."}]},
   {id:"e4u11-q35", lesson:"e4u11-l4", level:2, q:"Makau Mutua’s “savages, victims and saviors” critique argues that human rights discourse often…", options:[
     {t:"casts Western actors as saviours", ok:true, why:"Right. It casts Global South states as savages and their people as victims. Mutua wants a less hierarchical practice."},
     {t:"ignores the role of NGOs entirely", why:"His critique includes Western NGOs among the “saviours”."},
     {t:"is too focused on economic rights", why:"Not his argument."},
     {t:"should be abolished", why:"Mutua argues for reconstruction, not abolition."}]},
   {id:"e4u11-q36", lesson:"e4u11-l4", level:3, q:"A government argues that a binding business and human rights treaty would harm investment, while a coalition of NGOs argues that voluntary principles leave victims without remedy. As of November 2026, what was the status of the treaty talks?", options:[
     {t:"Several drafts, but no agreed text", ok:true, why:"Correct. A Human Rights Council working group negotiates; it held its twelfth session in October 2026, still without an agreed text."},
     {t:"A treaty entered into force in 2020", why:"No treaty has been agreed."},
     {t:"The talks were never started", why:"They started in 2014."},
     {t:"The Guiding Principles became binding in 2011", why:"They remain soft law."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u11-q37", lesson:"e4u11-l5", level:1, q:"What is the usual three-part test for restricting a right such as privacy?", options:[
     {t:"Provided by law, pursuing a legitimate aim, necessary and proportionate", ok:true, why:"Correct: legality, legitimate aim, necessity and proportionality."},
     {t:"Approved by the UN, popular, and cheap", why:"These are not legal criteria."},
     {t:"Temporary, secret and effective", why:"Secrecy is not a criterion; legality requires accessible law."},
     {t:"Signed, ratified and in force", why:"Those are treaty stages."}]},
   {id:"e4u11-q38", lesson:"e4u11-l5", level:2, q:"Why does the human rights layer of non-refoulement matter for a state that is not party to the Refugee Convention?", options:[
     {t:"Other treaties, such as the ICCPR, forbid such returns too", ok:true, why:"Right. The Convention against Torture and the ICCPR forbid return to a real risk of torture for their states parties. Many Asian states are outside the Refugee Convention but party to these treaties."},
     {t:"Non-refoulement applies only to Refugee Convention parties", why:"Human rights treaties contain their own obligations."},
     {t:"It does not matter at all", why:"It matters greatly in regions with few Refugee Convention parties."},
     {t:"It applies only to recognized refugees", why:"The torture protection covers everyone."}]},
   {id:"e4u11-q39", lesson:"e4u11-l5", level:2, q:"What did the UN Human Rights Committee decide in *Teitiota v. New Zealand* (views published 2020)?", options:[
     {t:"No violation, but a door left open", ok:true, why:"Correct. There was no violation on the facts, but climate change could in future make return unlawful under the right to life."},
     {t:"New Zealand must grant him refugee status", why:"The Committee found no violation."},
     {t:"Climate change is irrelevant to human rights", why:"The Committee said it could be relevant."},
     {t:"The case was inadmissible", why:"The Committee examined the merits."}]},
   {id:"e4u11-q40", lesson:"e4u11-l5", level:1, q:"What was distinctive about South Africa’s Truth and Reconciliation Commission?", options:[
     {t:"Conditional amnesty for politically motivated crimes in exchange for full disclosure", ok:true, why:"Correct: amnesty for truth, decided by its Amnesty Committee."},
     {t:"It prosecuted all perpetrators in an international court", why:"It was not a court and offered amnesty."},
     {t:"It was run by the United Nations", why:"It was a national body created by South African law."},
     {t:"It refused to hear victims", why:"Victims’ hearings were central to its work."}]},
   {id:"e4u11-q41", lesson:"e4u11-l5", level:2, q:"What is a distinctive feature of Timor-Leste’s CAVR?", options:[
     {t:"Community reconciliation and the report *Chega!*", ok:true, why:"Correct. Its Community Reconciliation Process handled lesser offenses, and *Chega!* estimated at least 102,800 conflict-related deaths."},
     {t:"It covered only the year 1999", why:"Its mandate ran from April 1974 to October 1999."},
     {t:"It sentenced Indonesian generals in its own court", why:"It had no power to prosecute."},
     {t:"It was set up in 2015", why:"It was established in 2001 and reported in 2005."}]},
   {id:"e4u11-q42", lesson:"e4u11-l5", level:2, q:"What was Mahmood Mamdani’s main criticism of South Africa’s TRC?", options:[
     {t:"It missed apartheid’s everyday system", ok:true, why:"Right (*Diacritics*, 2002). By focusing on individual gross violations, it left out the everyday system and its many beneficiaries."},
     {t:"It prosecuted too many people", why:"It prosecuted no one; it was not a court."},
     {t:"It should have been run by the UN, not South Africa", why:"Not his argument."},
     {t:"It ignored the amnesty question", why:"Amnesty was central to the TRC."}]},
   {id:"e4u11-q43", lesson:"e4u11-l5", level:3, q:"Dmitri’s draft says: “The regime’s outrageous spying proves it is evil.” Which revision best fits a seminar paper?", options:[
     {t:"“A 2021 investigation reported spyware use; the government denied it.”", ok:true, why:"Right: dated and attributed. The paper can then assess, clearly signposted, whether the use met the test of necessity and proportionality."},
     {t:"“Everyone agrees the regime is evil.”", why:"False consensus and loaded language."},
     {t:"“Spying is always wrong in every case, so no further evidence is needed.”", why:"Human rights law does not ban all surveillance, and evidence is always needed."},
     {t:"“The government is obviously lying.”", why:"An unattributed accusation; report positions and evidence instead."}]},
   {id:"e4u11-q44", lesson:"e4u11-l5", level:1, q:"What is the “justice cascade”?", options:[
     {t:"A trend toward criminal accountability for leaders", ok:true, why:"Correct. It is Sikkink’s term for the trend since the 1980s (*The Justice Cascade*, 2011)."},
     {t:"A rule that lower courts must follow higher courts’ rulings", why:"That is precedent, not the justice cascade."},
     {t:"A UN funding mechanism", why:"Unrelated: the term describes a trend in accountability."},
     {t:"The fall of a government after protests", why:"Unrelated: the term is about prosecutions of leaders."}]},
   {id:"e4u11-q45", lesson:"e4u11-l5", level:3, q:"Priya is planning a paper on Rohingya refugees in Bangladesh. Which approach best avoids an advocacy tone while staying accurate?", options:[
     {t:"Describe and attribute first, then evaluate", ok:true, why:"Right. Describe the legal framework, report Bangladesh’s stated position and the UN agencies’ assessment of conditions for return with dates, then evaluate the evidence for a clear question."},
     {t:"Quote only one NGO’s campaign material", why:"A single positioned source cannot support balanced analysis."},
     {t:"Avoid all facts and give only her opinion", why:"Seminar papers need evidence and attribution."},
     {t:"Leave out Bangladesh’s position because it is controversial", why:"Fairness requires stating each side’s position."}]}
  ]
});
