/* Track 4 · Unit 9 · Ethics, integrity and AI */
ICA.addUnit({
  id:"t4u9", track:"t4", n:9, title:"Ethics, integrity and AI", icon:"⚖️",
  blurb:"Why research ethics exists, how consent and ethics review protect people, how to handle personal data and research data responsibly, what honest research looks like, and how to use AI tools without breaking the rules.",
  goals:[
    "Explain why modern research ethics exists, telling its history accurately and respectfully, and apply the Belmont principles to a study",
    "Plan informed consent as an ongoing process, name the ethics review body in several countries, and add protections for people in vulnerable situations",
    "Tell confidentiality from anonymity and anonymisation from pseudonymisation, handle special category data, and outline a data management plan using the FAIR principles",
    "Recognise fabrication, falsification and plagiarism, spot questionable research practices such as p-hacking and HARKing, and use preregistration, fair authorship and CRediT",
    "Use AI tools in research responsibly: disclose them, never list them as authors, verify every citation they produce, keep confidential material out of them, and check the rules that apply to you"
  ],
  read:[
    {book:"soc", where:"Chapter 2, “Sociological Research”: Section 2.3 “Ethical Concerns”", note:"On the LibreTexts mirror this is numbered 2.4. Short, and a good first read."},
    {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"Written in 2012, before the GDPR (2018), the 2018 revision of the US Common Rule and generative AI; the principles still hold."},
    {book:"acrl", where:"Frames “Information Has Value” and “Scholarship as Conversation”", note:"Background on why credit, authorship and honest citation matter."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u9-l1", title:"Why research ethics exists", minutes:50,
   hook:{q:"The Nuremberg Code of 1947 said a participant’s voluntary consent is “absolutely essential”. In what year did the US Public Health Service end its study at Tuskegee, in which hundreds of Black men were never told they had syphilis and were not given effective treatment?", options:["1947","1956","1972","1990"], answer:2, reveal:"**1972**, a quarter of a century after Nuremberg, and only after a news report made it public. Written principles alone didn’t protect those men. That gap is why research ethics today relies on **independent review** before a study starts, not just on researchers’ good intentions. This lesson tells that history carefully and shows the principles that came out of it."},
   goals:[
     "Describe the Nuremberg Code, the Declaration of Helsinki and the Belmont Report: when, why and what each says",
     "Tell the history of the study at Tuskegee and of Henrietta Lacks accurately and respectfully",
     "Apply the three Belmont principles (respect for persons, beneficence, justice) to real study plans",
     "Explain why ethics applies to everyday research such as surveys, interviews and online studies, not only medicine"
   ],
   learn:[
    {h:"Research asks something of people", body:[
      {lead:"Every study that involves people asks them for something: their time, their stories, their data, sometimes their bodies."},
      "Think of research participants as people doing researchers a favour. A favour comes with obligations. You tell people honestly what you’re asking. You don’t put them at needless risk. You don’t pick people just because they are easy to pressure. And you keep your promises about what happens to their information.",
      "**Research ethics** is the set of principles and rules that turns those obligations into practice. It covers the people taking part (consent, harm, privacy), and it overlaps with **research integrity**: honesty in how research is done and reported. You’ll meet integrity in Lesson 4.",
      "Ethics isn’t only for medical trials. A student interviewing nurses about burnout, a council surveying residents, a historian recording older people’s memories, and a data scientist scraping public social media posts all raise the same questions: did people agree, could they be harmed, and who can see what they said?",
      {key:"Ethics rules exist because research has seriously harmed people in the past, often people with the least power to say no."}
    ]},
    {h:"Nuremberg, 1947: consent comes first", body:[
      "After the Second World War, an American military tribunal at Nuremberg tried 23 German physicians and administrators for crimes including experiments on concentration camp prisoners, carried out without consent and often fatal. This is known as the **Doctors’ Trial**. Its verdict, delivered on 19 August 1947, set out ten points now called the **Nuremberg Code**.",
      "Its first point says the voluntary consent of the human subject is “absolutely essential”. The person must have the legal capacity to consent, be free of force, fraud or coercion, and understand what the experiment involves and its risks. The other points include:",
      {list:[
        "The research should be expected to produce valuable results that can’t be obtained another way.",
        "Unnecessary physical and mental suffering must be avoided, and the risk must never exceed the importance of the problem.",
        "The participant may end their participation if continuing seems impossible to them.",
        "The scientist in charge must be ready to stop the experiment if it is likely to cause injury or death."
      ]},
      "The Code’s legal force was never firmly established, but it became the model for later international ethics statements."
    ]},
    {h:"Helsinki, 1964 to 2024: doctors set their own standard", body:[
      "In 1964 the World Medical Association (WMA), an international organisation of national medical associations, adopted the **Declaration of Helsinki**: ethical principles for medical research involving people. It was written by doctors for doctors, and its original text distinguished research combined with medical care from research with no direct benefit to the participant. Its later revisions (the first in Tokyo in 1975) added ideas the Nuremberg Code lacked, notably that a research protocol must be reviewed by an independent research ethics committee before the research begins.",
      "The Declaration has been revised many times. The most recent revision was adopted unanimously at the WMA General Assembly in Helsinki in **October 2024**, 60 years after the original. That revision uses the word **participants** instead of “subjects”, gives more attention to vulnerability, community engagement and fairness, and covers scientific integrity.",
      {tip:"When you cite the Declaration, give the version (for example, “2024 revision”). Older papers may quote paragraph numbers that have since changed."}
    ]},
    {h:"Tuskegee and Henrietta Lacks: harms closer to home", body:[
      "Abuses didn’t stop in 1947. The **US Public Health Service Untreated Syphilis Study at Tuskegee** ran in Alabama from **1932 to 1972**, with the Tuskegee Institute. It enrolled **600 Black men**: 399 who had syphilis and 201 who did not. The men were not asked for informed consent. They were told they were being treated for “bad blood”, a local term for several conditions, and received free medical exams, meals and burial insurance.",
      "By **1943** penicillin was the treatment of choice for syphilis, but the men were not offered it. The study continued until a **1972** Associated Press news story led to an advisory panel, which judged it “ethically unjustified”; it ended that year. A class-action lawsuit led to a $10 million settlement in 1974, a health benefit programme was set up for the men and, later, their wives, widows and children, and in **1997** President Bill Clinton issued a formal apology.",
      "**Henrietta Lacks** was a 31-year-old Black woman treated for cervical cancer at Johns Hopkins Hospital in Baltimore in **1951**. Samples of her tumour were taken without her knowledge or consent. Her cells, known as **HeLa** cells, became the first human cells to be grown continuously in a laboratory and have been used in countless studies. Her family learned of this only much later. In 2013 the US National Institutes of Health (NIH) reached an agreement with members of the Lacks family that gives them a voice in who may access the HeLa genome data.",
      {warn:"These are stories about real people and families, not just case studies. When you write about them, name the institutions responsible, use the people’s own names where families have made them public, and avoid language that blames or exoticises those who were harmed."},
      "Abuses happened in many countries and eras, which is why ethics review now exists almost everywhere research is done."
    ]},
    {h:"Belmont, 1979: three principles", body:[
      "Public anger over Tuskegee led the US Congress to pass the **National Research Act** in 1974. It created a national commission that published **The Belmont Report** on 18 April 1979. Its three principles are short enough to remember and broad enough to use anywhere:",
      {table:[
        ["Principle","What it means","Applied as"],
        ["Respect for persons","Treat people as able to decide for themselves; protect those with reduced ability to decide","Informed consent"],
        ["Beneficence","Do no harm; maximise possible benefits and minimise possible harms","Weighing risks and benefits"],
        ["Justice","Share the burdens and benefits of research fairly","Fair selection of participants"]
      ]},
      "Justice was a direct lesson from Tuskegee, which the report names: poor, rural Black men bore the burdens of a study, while effective treatment was withheld from them.",
      "Other countries frame similar ideas in their own words. Canada’s **TCPS 2** (2022) uses three core principles: respect for persons, concern for welfare, and justice. Australia’s **National Statement on Ethical Conduct in Human Research 2023** is built on research merit and integrity, justice, beneficence and respect.",
      {fig:'<svg viewBox="0 0 340 516"><path class="d-ink" d="M62 18 V 466" stroke-width="2"/><text x="8" y="44">1932</text><circle class="d-rose" cx="62" cy="40" r="6" stroke-width="2"/><rect class="d-rose" x="78" y="14" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="34">PHS study at Tuskegee begins</text><text class="s" x="88" y="52">runs until 1972</text><text x="8" y="100">1947</text><circle class="d-sage" cx="62" cy="96" r="6" stroke-width="2"/><rect class="d-sage" x="78" y="70" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="90">Nuremberg Code</text><text class="s" x="88" y="108">voluntary consent is essential</text><text x="8" y="156">1951</text><circle class="d-rose" cx="62" cy="152" r="6" stroke-width="2"/><rect class="d-rose" x="78" y="126" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="146">Henrietta Lacks’s cells taken</text><text class="s" x="88" y="164">without her knowledge or consent</text><text x="8" y="212">1964</text><circle class="d-sage" cx="62" cy="208" r="6" stroke-width="2"/><rect class="d-sage" x="78" y="182" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="202">Declaration of Helsinki</text><text class="s" x="88" y="220">World Medical Association</text><text x="8" y="268">1972</text><circle class="d-rose" cx="62" cy="264" r="6" stroke-width="2"/><rect class="d-rose" x="78" y="238" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="258">News report; Tuskegee</text><text class="s" x="88" y="276">study finally stopped</text><text x="8" y="324">1974</text><circle class="d-sage" cx="62" cy="320" r="6" stroke-width="2"/><rect class="d-sage" x="78" y="294" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="314">US National Research Act</text><text class="s" x="88" y="332">creates a national commission</text><text x="8" y="380">1979</text><circle class="d-sage" cx="62" cy="376" r="6" stroke-width="2"/><rect class="d-sage" x="78" y="350" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="370">Belmont Report</text><text class="s" x="88" y="388">respect, beneficence, justice</text><text x="8" y="436">2024</text><circle class="d-sage" cx="62" cy="432" r="6" stroke-width="2"/><rect class="d-sage" x="78" y="406" width="256" height="48" rx="8" stroke-width="1.5"/><text x="88" y="426">Helsinki revised again</text><text class="s" x="88" y="444">“participants”, vulnerability</text><rect class="d-rose" x="40" y="482" width="16" height="16" rx="3" stroke-width="1.5"/><text class="s" x="62" y="495">harm</text><rect class="d-sage" x="150" y="482" width="16" height="16" rx="3" stroke-width="1.5"/><text class="s" x="172" y="495">response</text></svg>', alt:"A vertical timeline. 1932: the Public Health Service study at Tuskegee begins and runs until 1972. 1947: the Nuremberg Code says voluntary consent is essential. 1951: Henrietta Lacks’s cells are taken without her knowledge or consent. 1964: the World Medical Association’s Declaration of Helsinki. 1972: a news report; the Tuskegee study is finally stopped. 1974: the US National Research Act creates a national commission. 1979: the Belmont Report sets out respect for persons, beneficence and justice. 2024: Helsinki is revised again, using the word participants and stressing vulnerability. Harms are shaded one colour, responses another.", cap:"Harms and responses overlap: the study at Tuskegee kept running for 25 years after the Nuremberg Code. Written principles needed independent review and law behind them."}
    ]},
    {h:"Using the principles on a real plan", body:[
      "The principles are tools for thinking, not a checklist to tick. Try them on a small study.",
      {ex:"Plan: Oluwaseun, a teacher, wants to survey his own Year 10 students about how they use phones for homework, during class time.\n\nRespect for persons: students are minors, and he is their teacher, so a “yes” may not be free. Fix: parents’ permission plus the students’ own agreement, an anonymous online form, and a colleague collects the forms.\n\nBeneficence: low risk, but questions about phone use at night could reveal family problems. Fix: drop questions he doesn’t need; give a contact for support.\n\nJustice: is it fair to use one class just because it’s convenient? Here yes, if results help these students; he shares a summary with them.", label:"Worked example"},
      "Notice that every fix makes the study a little harder to run. That trade-off is normal. An ethics committee’s job is to check that the trade-offs have been made well.",
      {h:"Common misconceptions"},
      {list:[
        "“If it’s legal, it’s ethical.” Laws set a minimum. Many unethical studies broke no law at the time.",
        "“Low-risk research doesn’t need ethics.” Low-risk studies may get a lighter review, but consent, privacy and honesty still apply.",
        "“Public data is free to use.” Posts on public forums were written by people who didn’t expect to be studied; quoting them word for word can identify them.",
        "“Ethics is just paperwork.” The forms are a record of decisions that protect real people, including you, if something goes wrong."
      ]}
    ]}
   ],
   try:[
    {id:"t4u9-l1-x1", type:"order", q:"Put these events in the order they happened, earliest first.", items:[
      {t:"The US Public Health Service study at Tuskegee begins", why:"It began in 1932, years before the Nuremberg trials."},
      {t:"The Nuremberg Code is set out in the Doctors’ Trial verdict", why:"The verdict was delivered on 19 August 1947."},
      {t:"The World Medical Association adopts the Declaration of Helsinki", why:"First adopted in 1964."},
      {t:"A news report leads to the Tuskegee study being stopped", why:"The Associated Press story and the advisory panel came in 1972."},
      {t:"The Belmont Report is published", why:"It was published on 18 April 1979 by the commission the 1974 National Research Act created."},
      {t:"The Declaration of Helsinki’s latest revision", why:"Adopted in October 2024, 60 years after the original."}
    ]},
    {id:"t4u9-l1-x2", type:"match", q:"Match each document to what it’s best known for.", pairs:[
      ["Nuremberg Code (1947)","Voluntary consent is “absolutely essential”","Its first and longest point is about consent, written after the Doctors’ Trial."],
      ["Declaration of Helsinki (1964, revised 2024)","Medical associations’ standard, including independent committee review","The World Medical Association wrote it for physicians; its revisions require independent ethics committee review of protocols."],
      ["Belmont Report (1979)","Three principles: respect for persons, beneficence, justice","The US national commission’s report is famous for these three principles and their applications."],
      ["TCPS 2 (Canada, 2022)","Respect for persons, concern for welfare, justice","Canada’s policy uses three core principles very close to Belmont’s."]
    ]},
    {id:"t4u9-l1-x3", type:"sort", q:"Which Belmont principle does each safeguard mainly put into practice?", buckets:["Respect for persons","Beneficence","Justice"], items:[
      {t:"Explaining the study in plain words and letting people decide freely", b:0, why:"Treating people as able to decide for themselves is respect for persons, applied through informed consent."},
      {t:"Asking a parent’s permission and the child’s own agreement", b:0, why:"Respect for persons includes extra protection for people whose ability to decide is reduced or still developing."},
      {t:"Dropping a distressing question that isn’t needed to answer the research question", b:1, why:"Minimising possible harm is beneficence."},
      {t:"Having a plan to stop the study if early results show participants are being harmed", b:1, why:"Weighing and limiting harms as the study runs is beneficence."},
      {t:"Not recruiting only from a homeless shelter just because people there are easy to reach", b:2, why:"Choosing participants for convenience, so one group carries the burden, is the injustice Belmont warns about."},
      {t:"Making sure the communities who took part can benefit from what is learned", b:2, why:"Fair distribution of benefits as well as burdens is justice."}
    ]},
    {id:"t4u9-l1-x4", type:"spot", q:"Lucía wrote this summary for a study group. Tap each statement that is **inaccurate**.", ask:"is inaccurate", parts:[
      "The study at Tuskegee ",
      {t:"was run by the US Public Health Service, with the Tuskegee Institute,", flag:false, why:"Correct: the CDC’s history describes it this way."},
      " and ",
      {t:"enrolled 600 Black men, 399 of whom had syphilis.", flag:false, why:"Correct: 399 had syphilis and 201 did not."},
      " ",
      {t:"It ended in 1947, as soon as penicillin became available.", flag:true, why:"Penicillin was the treatment of choice by 1943, but the men were not offered it. The study ran until 1972 and ended only after a news report."},
      " ",
      {t:"The men gave informed consent but were not told the full risks.", flag:true, why:"Informed consent was not collected at all. The men were told they were being treated for “bad blood”."},
      " Its legacy ",
      {t:"helped lead to the 1974 National Research Act and the Belmont Report.", flag:false, why:"Correct: the Act created the commission that wrote the Belmont Report, which names Tuskegee as an example of injustice."},
      " ",
      {t:"The US President apologised formally in 1997.", flag:false, why:"Correct: President Bill Clinton issued the apology on 16 May 1997."}
    ]},
    {id:"t4u9-l1-x5", type:"mcq", q:"Kenji wants to analyse posts from a public online support forum for people with depression, quoting some posts word for word. The posts are visible to anyone. What is the best view?", options:[
      {t:"It still raises ethical questions: people didn’t expect to be studied, and exact quotes can be searched to find them. He should seek ethics review and think about consent and paraphrasing.", ok:true, why:"Right. “Public” isn’t the same as “fair to use any way you like”. A quoted sentence can be pasted into a search engine and lead straight to the person, on a sensitive topic."},
      {t:"No ethics issue: anything public is free to use.", why:"This is a common misconception. Visibility doesn’t remove the risk of harm, and many ethics codes treat online communities carefully, especially on health topics."},
      {t:"It’s fine as long as he removes the usernames.", why:"Removing usernames helps, but exact quotes can still be searched, so the person may be identifiable anyway."},
      {t:"He can’t study online posts at all.", why:"Online research is common and can be done ethically, with review, care over quotes and attention to the community’s expectations."}
    ]},
    {id:"t4u9-l1-x6", type:"mcq", q:"Which statement about the Declaration of Helsinki is accurate?", options:[
      {t:"It was first adopted by the World Medical Association in 1964 and was most recently revised in October 2024.", ok:true, why:"Correct. The 2024 revision was adopted in Helsinki, 60 years after the original."},
      {t:"It is a law passed by the Finnish parliament.", why:"It isn’t a law. It is a statement of principles adopted by the World Medical Association, an organisation of national medical associations; it is named after the city where it was first adopted."},
      {t:"It replaced the Belmont Report in 1979.", why:"Helsinki (1964) is older than Belmont (1979), and neither replaced the other. They are separate documents with different authors."},
      {t:"It has never been changed since 1964.", why:"It has been revised many times, most recently in 2024."}
    ]}
   ],
   apply:{intro:"These tasks need only a web browser and a notebook. They don’t involve collecting data from anyone.", tasks:[
     {t:"Read one founding document yourself", how:["Choose the Nuremberg Code (it fits on one page), the Belmont Report, or the 2024 Declaration of Helsinki. All are free online from official sources such as the World Medical Association, the US Department of Health and Human Services or the US Holocaust Memorial Museum.","Read it, or its first section, slowly.","Write down one idea that surprised you and one that still sounds hard to do in practice."], write:"Document I read… One surprising idea… One idea that is hard in practice, and why…"},
     {t:"Find the ethics rules that apply where you are", how:["Search for your country’s national research ethics guidance, for example “national ethics guidelines human research” plus your country’s name.","If you study or work at an institution, search its website for “research ethics”.","Note the name of the document, who publishes it, its date, and the name of the review body (IRB, REC, HREC, REB, ethics committee…)."], write:"Country or institution… Name of the guidance and its date… Name of the review body…"},
     {t:"Run a Belmont check on an imaginary study", how:["Invent a small study you might really do: for example, interviewing three small-business owners about how they price their products.","Write one risk under each principle: respect for persons, beneficence, justice.","Write one fix for each risk."], write:"My imaginary study… Respect for persons: risk and fix… Beneficence: risk and fix… Justice: risk and fix…"}
   ], proof:"Notes on one founding document, the name and date of the ethics guidance and review body that apply to you, and a three-principle check of an imaginary study."},
   read:[
     {book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (on LibreTexts: 2.4)", note:"A short overview that mentions the study at Tuskegee and Henrietta Lacks."},
     {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"Covers the core principles from a social science view, with the study at Tuskegee as one example."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u9-l2", title:"Consent, ethics review and vulnerable participants", minutes:55,
   hook:{q:"Fatima signed a consent form on Monday. On Wednesday, halfway through her interview, she says she would like to stop. What should the researcher do?", options:["Carry on: she signed the form","Stop, thank her, and make clear there is no penalty","Stop only if she gives a good reason","Finish the current section first, then stop"], answer:1, reveal:"**Stop, with no penalty and no reason needed.** A signature records a decision at one moment; it doesn’t lock anyone in. The right to withdraw runs through the whole study. What happens to the answers she has already given depends on what the information sheet promised, which is why that has to be planned in advance. This lesson treats consent as a process, not a form."},
   goals:[
     "List the information people need before they can give informed consent, and explain information, comprehension and voluntariness",
     "Treat consent as an ongoing process, including withdrawal, deception and debriefing",
     "Name the ethics review body in several countries and say when research needs review",
     "Recognise when participants may be in vulnerable situations and add suitable protections"
   ],
   learn:[
    {h:"What “informed” really means", body:[
      {lead:"[[informed-consent|Informed consent]] is a person’s free decision to take part after understanding what they are agreeing to."},
      "The Belmont Report breaks it into three parts, and all three must be present:",
      {list:[
        "**Information:** the person is told what they need to know to decide.",
        "**Comprehension:** it is explained in a way they can actually understand, in their language, at their reading level, with time to ask questions.",
        "**Voluntariness:** the choice is free of coercion (threats) and undue influence (pressure or rewards so large they distort judgement)."
      ]},
      "A long form in legal language can tick the “information” box and still fail “comprehension”. That’s why the revised US Common Rule (its “2018 Requirements”, in force since 2019) requires consent documents to begin with a concise summary of the **key information** that helps someone decide whether to take part.",
      {h:"What people need to be told"},
      "The exact list varies by country and type of study, but most rules cover the same core. The US Common Rule (45 CFR 46.116) is a useful example of a full list:",
      {table:[
        ["Element","In plain words"],
        ["Purpose, procedures, duration","Why the study exists, what you’ll do, for how long"],
        ["Risks or discomforts","What could go wrong, including embarrassment or stress"],
        ["Benefits","To you, or to others; often “none directly”"],
        ["Alternatives","For treatment studies: other options you could choose"],
        ["Confidentiality","Who will see your information and how it is protected"],
        ["Compensation for injury","For riskier studies: what happens if you are harmed"],
        ["Contacts","Whom to ask about the study and about your rights"],
        ["Voluntary, can withdraw","Saying no costs you nothing; you can stop at any time"],
        ["Future use of data or samples","Whether they may be reused, with identifiers removed, or not"]
      ]}
    ]},
    {h:"Consent is a process, not a signature", body:[
      "Think of consent like a conversation that continues for the whole study. The form is a record of one point in that conversation.",
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-gold" x="20" y="8" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">Ethics review approves the plan</text><text class="s" x="170" y="45" text-anchor="middle">before anyone is approached</text><path class="d-ink" d="M170 54 V 70" stroke-width="2" marker-end="url(#ar2)"/><rect class="d-lup" x="20" y="74" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="94" text-anchor="middle">1  Plain-language information</text><text class="s" x="170" y="111" text-anchor="middle">purpose, tasks, risks, data use</text><path class="d-ink" d="M170 120 V 136" stroke-width="2" marker-end="url(#ar2)"/><rect class="d-lup" x="20" y="140" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="160" text-anchor="middle">2  Time and questions</text><text class="s" x="170" y="177" text-anchor="middle">no rush, no pressure</text><path class="d-ink" d="M170 186 V 202" stroke-width="2" marker-end="url(#ar2)"/><rect class="d-lup" x="20" y="206" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="226" text-anchor="middle">3  A free decision</text><text class="s" x="170" y="243" text-anchor="middle">yes, no, or not yet</text><path class="d-ink" d="M170 252 V 268" stroke-width="2" marker-end="url(#ar2)"/><rect class="d-lup" x="20" y="272" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="292" text-anchor="middle">4  A record of consent</text><text class="s" x="170" y="309" text-anchor="middle">signed, online, or recorded aloud</text><path class="d-ink" d="M170 318 V 334" stroke-width="2" marker-end="url(#ar2)"/><rect class="d-lup" x="20" y="338" width="300" height="46" rx="10" stroke-width="1.5"/><text x="170" y="358" text-anchor="middle">5  Check in as the study goes on</text><text class="s" x="170" y="375" text-anchor="middle">ask again if anything changes</text><rect class="d-rose" x="20" y="402" width="300" height="58" rx="10" stroke-width="2"/><text x="170" y="424" text-anchor="middle">At every step: free to stop,</text><text x="170" y="443" text-anchor="middle">with no penalty and no reason</text></svg>', alt:"A vertical flow. First, an ethics review body approves the plan before anyone is approached. Then five steps: 1, plain-language information about purpose, tasks, risks and data use; 2, time and questions with no pressure; 3, a free decision: yes, no or not yet; 4, a record of consent, signed, online or recorded aloud; 5, check in as the study goes on and ask again if anything changes. A box underneath says that at every step the person is free to stop, with no penalty and no reason.", cap:"Consent starts before the form and continues after it. The right to stop applies at every step."},
      {list:[
        "**Withdrawal and data.** Say in advance what happens to data already collected if someone withdraws, and until when. Once data are anonymised or merged into results, they often can’t be pulled out; people must be told that before they agree.",
        "**Recording.** Ask separately before recording audio or video, and say who will hear it and when it will be deleted.",
        "**Verbal and online consent.** For low-risk surveys, ticking “I agree” after reading an information page is common. In some communities, signing documents is unfamiliar or risky, and recorded verbal consent may be approved instead.",
        "**Deception.** Some studies can’t tell people everything in advance (for example, the real hypothesis). Ethics codes allow this only when risk is minimal, there’s no alternative and a committee approves, followed by **[[debriefing]]**: telling people the truth afterwards and offering to withdraw their data."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "“A signed form means consent is done.” The form records one moment; consent continues, and people can change their minds.",
        "“More detail is always better.” Very long forms reduce understanding. Put the key points first, then the detail, and check people have understood.",
        "“If they agreed once, they agreed to everything.” New procedures, new risks or new uses of their data need fresh consent."
      ]},
      {ex:"Information sheet, in plain words:\n“We are studying how people in our town choose where to shop. You’ll answer 12 questions; it takes about 10 minutes. Some questions ask about money, and you can skip any of them. We will not ask your name. You can stop at any time. Once you press Submit, we can’t remove your answers, because we won’t know which are yours. Questions? Contact Hana at the community centre.”", label:"Worked example"}
    ]},
    {h:"Who reviews research, and what they’re called", body:[
      "Most countries require research with people to be approved by an independent committee before it starts. The committee checks the risks, the consent process, data protection and whether the study can answer its question at all (badly designed research wastes participants’ time, which is itself an ethical problem). Its name depends on where you are:",
      {table:[
        ["Place","Review body","Key guidance"],
        ["United States","Institutional review board (IRB)","Common Rule (45 CFR 46)"],
        ["United Kingdom","Research ethics committee (REC); university RECs too","HRA Research Ethics Service"],
        ["Canada","Research ethics board (REB)","TCPS 2 (2022)"],
        ["Australia","Human research ethics committee (HREC)","National Statement (2023)"],
        ["India","Ethics committee (EC)","ICMR National Ethical Guidelines (2017)"]
      ]},
      "The general term is a [[ethics-review-board|research ethics committee or board]]. Many universities have their own committees for student and staff projects, and hospitals often have separate ones. International studies may need approval in every country involved.",
      {h:"Does my project need review?"},
      "Usually, if it is **research** (aiming to produce generalisable knowledge) and involves **people or their identifiable data**. Many systems offer lighter or faster review for [[minimal-risk]] studies, such as anonymous surveys on everyday topics, and some activities may not count as research at all, such as an internal service evaluation, a clinical audit or journalism. The boundaries differ by country and institution, so the committee decides, not the researcher.",
      {warn:"Never start recruiting or collecting data before approval. Data collected without it may be unusable, and journals increasingly ask for the approval reference when you submit."},
      {tip:"A typical application includes a protocol (aims, methods, recruitment, analysis), information sheets and consent forms, questionnaires or interview guides, a data management plan and a risk assessment. Committees often send applications back because documents are unclear, not because the study is unethical. Write for a lay reader and review usually goes faster."}
    ]},
    {h:"People in vulnerable situations", body:[
      "[[vulnerable-participants|Vulnerable participants]] are people who may have less ability to protect their own interests, or who face extra risk from taking part. Vulnerability is often about the **situation**, not the person. India’s ICMR guidelines, for example, list legal status (children), clinical conditions (such as cognitive impairment or unconsciousness) and situations (economic or social disadvantage, hierarchical relationships, living in institutions, humanitarian emergencies, language barriers).",
      {table:[
        ["Situation","Extra protection often used"],
        ["Children","Parent or guardian permission plus the child’s own **[[assent]]** (agreement in words they understand)"],
        ["Reduced capacity to decide","Assessment of capacity; involvement of a legal representative where the law allows"],
        ["Dependent relationships (student, employee, patient)","Recruitment by someone without power over them; anonymous participation"],
        ["People in prison or detention","Strong safeguards against pressure; specific rules in many countries"],
        ["Crisis, poverty, insecure legal status","Small, fair compensation; careful data protection; local partners"]
      ]},
      "Payment deserves care in these situations. It should recognise people’s time and costs without being so large that it overrides their judgement. Many committees prefer a set rate for time and expenses, and paying people who withdraw for the time they have already given.",
      "Protection must not turn into exclusion. Leaving whole groups out of research (for example, older adults or pregnant people from many drug trials) means treatments and policies are tested on others and then used on them. The Declaration of Helsinki’s 2024 revision and the Belmont principle of justice both point to fair **inclusion** with the right safeguards.",
      {key:"Ask two questions: can this person say no freely, and could taking part hurt them more than others? If either answer worries you, add protections, but don’t simply leave them out."}
    ]}
   ],
   try:[
    {id:"t4u9-l2-x1", type:"sort", q:"Each part of a consent process is described. Is it **sound**, or does it **undermine** informed consent?", buckets:["Sound","Undermines consent"], items:[
      {t:"The information page starts with a short summary of what taking part involves", b:0, why:"A concise key-information summary helps comprehension; the revised US Common Rule has required one since 2019."},
      {t:"“By continuing you waive any right to complain about this study.”", b:1, why:"Consent documents must not ask people to give up their legal rights (US rules, for example, ban this “exculpatory” language). Telling people whom to contact with complaints is required, not banned."},
      {t:"A lecturer hands out a survey in class and waits at the door to collect it", b:1, why:"Students may feel unable to refuse someone who grades them. Anonymous online submission, or a colleague collecting forms, protects voluntariness."},
      {t:"Participants are told they may skip any question", b:0, why:"Letting people decline parts of a study supports voluntary, ongoing consent."},
      {t:"The form is in English only, though many participants mainly read Tagalog", b:1, why:"Information people can’t understand fails the comprehension test. Translate and check understanding."},
      {t:"A modest gift card thanks people for an hour of their time", b:0, why:"Fair compensation for time is usually fine. It becomes undue influence only if it is so large it pressures people to accept risks they otherwise wouldn’t."}
    ]},
    {id:"t4u9-l2-x2", type:"match", q:"Match each place to the usual name of its research ethics review body.", pairs:[
      ["United States","Institutional review board (IRB)","US federal rules (the Common Rule) use the term IRB."],
      ["United Kingdom (health and social care)","Research ethics committee (REC)","In health and social care, RECs belong to the UK-wide Research Ethics Service, run by the Health Research Authority in England with the devolved administrations."],
      ["Australia","Human research ethics committee (HREC)","Australia’s National Statement refers to HRECs."],
      ["Canada","Research ethics board (REB)","Canada’s TCPS 2 uses the term REB."],
      ["India","Ethics committee (EC)","The ICMR’s 2017 National Ethical Guidelines call it an ethics committee."]
    ]},
    {id:"t4u9-l2-x3", type:"mcq", q:"Tomás is designing a psychology study in which participants are told it tests memory, when it really tests how a confederate’s behaviour affects their choices. Which plan fits most ethics codes?", options:[
      {t:"Use mild deception only if risk is minimal, there is no non-deceptive way to answer the question, a committee approves it, and everyone is debriefed and offered the chance to withdraw their data.", ok:true, why:"Right. That’s the usual set of conditions for deception, for example in the American Psychological Association’s and American Sociological Association’s ethics codes, and in most committee rules."},
      {t:"Deception is never allowed, so he must drop the study.", why:"Many codes permit limited deception under strict conditions. A blanket ban isn’t the rule."},
      {t:"Deception is fine as long as the consent form is signed.", why:"Consent obtained through deception isn’t fully informed, which is why debriefing and committee approval are required."},
      {t:"He should debrief only the participants who ask what the study was about.", why:"Debriefing is owed to everyone who was deceived, not only to those who ask."}
    ]},
    {id:"t4u9-l2-x4", type:"order", q:"Put the steps of an interview study’s consent process in order.", items:[
      {t:"The ethics committee approves the plan and documents", why:"Nobody should be approached before approval."},
      {t:"Give the person the information sheet and time to read it", why:"Information comes before any decision."},
      {t:"Answer their questions and check they understand", why:"Comprehension is checked before asking for a decision."},
      {t:"They decide freely and consent is recorded", why:"The record captures a decision that was informed and voluntary."},
      {t:"At the start of the interview, remind them they can skip questions or stop", why:"Consent is ongoing; reminders keep it real."},
      {t:"After the interview, explain what happens next and how to withdraw", why:"People need to know the deadline and route for withdrawing their data."}
    ]},
    {id:"t4u9-l2-x5", type:"mcq", q:"Amara, a nurse, wants to interview patients on her own ward about their experience of care. What is the main ethical concern, and the best fix?", options:[
      {t:"Patients may feel they can’t refuse someone who cares for them; recruitment should be done by someone not involved in their care, with a clear promise that saying no won’t affect treatment.", ok:true, why:"Right. A dependent relationship threatens voluntariness. Separating recruitment from care, and saying so, protects free choice."},
      {t:"There’s no concern, because patients like Amara and will want to help.", why:"Wanting to please a carer is exactly what makes a “yes” less free."},
      {t:"Patients can’t take part in research at all.", why:"Patients take part in research all the time. The answer is safeguards, not exclusion."},
      {t:"The concern is only that interviews take time from her shifts.", why:"That’s a practical issue. The ethical issue is pressure on patients."}
    ]},
    {id:"t4u9-l2-x6", type:"spot", q:"Here is part of a draft information sheet. Tap each sentence an ethics committee would ask to change.", ask:"needs changing", parts:[
      {t:"This study looks at how families plan meals on a tight budget.", flag:false, why:"A clear, plain statement of purpose. Good."},
      " ",
      {t:"The interview will take about 45 minutes.", flag:false, why:"Telling people the expected time is required and helpful."},
      " ",
      {t:"Data will be processed pursuant to applicable regulatory frameworks.", flag:true, why:"Jargon that tells people nothing. Say plainly who will see the data, where it is stored and when it will be deleted."},
      " ",
      {t:"There are no risks of any kind.", flag:true, why:"Talking about money and food can be upsetting or embarrassing. Be honest about possible discomfort, and say people can skip questions."},
      " ",
      {t:"If you leave the study, you will not receive the shopping voucher.", flag:true, why:"Taking back a thank-you payment because someone withdraws pressures them to stay. Many committees expect payment for the time already given."},
      " ",
      {t:"You can contact the ethics committee if you have concerns.", flag:false, why:"Giving an independent contact is good practice and often required."}
    ]}
   ],
   apply:{intro:"Practise the paperwork side of ethics. Nothing here involves recruiting anyone.", tasks:[
     {t:"Write a one-page information sheet", how:["Imagine a small, low-risk study: for example, interviewing two friends about how they learned to cook.","Write a plain-language information sheet using the elements in the table: purpose, what they’ll do, time, risks, benefits, privacy, withdrawal (and until when), contact.","Read it aloud. Cut any sentence a 12-year-old wouldn’t follow."], write:"Title… What we’re asking… Risks… Privacy… How to withdraw, and until when… Contact…"},
     {t:"Map who would review your study", how:["Using what you found in Lesson 1, find the page for your institution’s or country’s ethics review process.","Note whether there is a lighter route for low-risk studies, how long review usually takes, and what documents you must submit.","If you have no institution, note which body would review a health study in your country."], write:"Review body… Low-risk route? … Typical time… Documents required…"},
     {t:"Spot the vulnerable situation", how:["Think of three groups you might want to study in your field (for example, gig workers, secondary school students, people recently arrived in a country).","For each, write what could make it hard for them to say no, or what extra risk they face.","Write one protection for each that does not exclude them."], write:"Group 1: risk… protection… Group 2… Group 3…"}
   ], proof:"A plain-language information sheet for a small imaginary study, notes on how ethics review works where you are, and protections for three groups."},
   read:[
     {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"See its parts on voluntary participation and harmlessness, and on institutional review boards (some adapted online copies call them human research ethics committees)."},
     {book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (on LibreTexts: 2.4)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u9-l3", title:"Privacy, anonymisation and research data", minutes:55,
   hook:{q:"Kenji replaces each participant’s name with a code such as P07 and keeps the list linking codes to names in a separate, locked file. Under the EU’s GDPR, what is his coded dataset?", options:["Anonymous, so the GDPR no longer applies","Pseudonymised, and still personal data","Anonymous, as long as the list is encrypted","Not personal data, because names are removed"], answer:1, reveal:"**Pseudonymised, and still personal data.** Because Kenji holds a key that can link codes back to people, the GDPR treats the coded data as personal data in his hands. Pseudonymisation is still a valuable safeguard, but it isn’t anonymisation. This lesson untangles these words, which even experienced researchers mix up."},
   goals:[
     "Tell confidentiality from anonymity, and anonymisation from pseudonymisation, using the GDPR’s definitions",
     "Spot direct and indirect identifiers, and explain why removing names is often not enough",
     "Apply data-protection principles to research data, including special category data, with several laws as examples",
     "Outline a data management plan and explain the FAIR principles"
   ],
   learn:[
    {h:"Four words people mix up", body:[
      {lead:"Two pairs of words sound alike but promise very different things to participants."},
      {table:[
        ["Word","What it promises"],
        ["[[confidentiality|Confidentiality]]","The researcher knows who said what but won’t reveal it"],
        ["[[anonymity|Anonymity]]","Nobody, not even the researcher, can link answers to a person"],
        ["[[pseudonymisation|Pseudonymisation]]","Identifiers are replaced with codes; a separate key can re-link them"],
        ["[[anonymisation-term|Anonymisation]]","Data are changed so people can no longer be identified by any reasonably likely means"]
      ]},
      "An interview study is almost never anonymous: you met the person. You can promise **confidentiality**, and later produce an anonymised or pseudonymised dataset. An online survey that collects no names, emails or IP addresses may be genuinely anonymous.",
      {warn:"Don’t write “your answers are anonymous” on an information sheet unless they truly are. Promising more privacy than you can deliver is a broken promise, and in many places a legal problem too."}
    ]},
    {h:"What the GDPR says", body:[
      "The EU’s [[gdpr|General Data Protection Regulation]] (GDPR) gives precise definitions that many other laws and ethics committees borrow:",
      {list:[
        "**[[personal-data|Personal data]]** is any information relating to an identified or identifiable person, directly or indirectly (Article 4(1)).",
        "**Pseudonymisation** means processing personal data so they can no longer be attributed to a specific person **without additional information**, provided that information is kept separately and protected (Article 4(5)). For the researcher who holds the key, pseudonymised data are still personal data (Recital 26). (In 2025 the EU Court of Justice added that, for a recipient with no reasonable means of re-identifying anyone, the same data may not count as personal data. That is a legal judgement for your data protection officer, not something to assume.)",
        "**Anonymous information** doesn’t relate to an identifiable person. To decide, you consider all the means **reasonably likely** to be used to identify someone, such as singling a person out, taking into account cost, time and available technology. Truly anonymous data fall outside the GDPR (Recital 26)."
      ]},
      {fig:'<svg viewBox="0 0 340 470"><defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-rose" x="10" y="8" width="320" height="120" rx="12" stroke-width="1.5"/><text x="170" y="32" text-anchor="middle">Identifiable</text><rect class="d-panel" x="26" y="44" width="288" height="34" rx="6" stroke-width="1"/><text x="170" y="66" text-anchor="middle">Ana Silva · 34 · nurse · Hilltown</text><text class="s" x="170" y="100" text-anchor="middle">personal data: full data protection rules</text><text class="s" x="170" y="117" text-anchor="middle">apply</text><path class="d-ink" d="M170 128 V 148" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-gold" x="10" y="152" width="320" height="150" rx="12" stroke-width="1.5"/><text x="170" y="176" text-anchor="middle">Pseudonymised</text><rect class="d-panel" x="26" y="188" width="288" height="34" rx="6" stroke-width="1"/><text x="170" y="210" text-anchor="middle">P07 · 34 · nurse · Hilltown</text><rect class="d-panel" x="60" y="230" width="220" height="30" rx="6" stroke-width="1"/><text class="s" x="170" y="250" text-anchor="middle">key: P07 = Ana Silva (kept apart)</text><text class="s" x="170" y="278" text-anchor="middle">still personal data: the key can</text><text class="s" x="170" y="294" text-anchor="middle">re-link it</text><path class="d-ink" d="M170 302 V 322" stroke-width="2" marker-end="url(#ar3)"/><rect class="d-sage" x="10" y="326" width="320" height="136" rx="12" stroke-width="1.5"/><text x="170" y="350" text-anchor="middle">Anonymised</text><rect class="d-panel" x="26" y="362" width="288" height="34" rx="6" stroke-width="1"/><text x="170" y="384" text-anchor="middle">age 30–39 · health worker · region</text><text class="s" x="170" y="418" text-anchor="middle">key destroyed, details coarsened:</text><text class="s" x="170" y="434" text-anchor="middle">no reasonably likely way to</text><text class="s" x="170" y="450" text-anchor="middle">identify anyone</text></svg>', alt:"Three stacked panels showing one invented record. Identifiable: Ana Silva, 34, nurse, Hilltown; personal data, full data protection rules apply. Pseudonymised: P07, 34, nurse, Hilltown, with a key that says P07 equals Ana Silva, kept apart; still personal data because the key can re-link it. Anonymised: age 30 to 39, health worker, region; the key is destroyed and details are coarsened, so there is no reasonably likely way to identify anyone.", cap:"Replacing a name with a code is pseudonymisation. Anonymisation needs more: no key, and details coarse enough that no one can be singled out. (Invented example.)"}
    ]},
    {h:"Why removing names isn’t enough", body:[
      "**Direct identifiers** point straight to a person: name, email, phone number, ID number, face, voice. **Indirect identifiers** (sometimes called quasi-identifiers) are harmless alone but identifying together: exact age, job, small town, rare illness, dates of events, an unusual story.",
      {ex:"Dataset: “P12, 41, the only female head teacher in a village of 800, diagnosed with MS in 2023.”\nNo name, yet anyone from that village knows exactly who this is.\n\nFixes: age band (40–49); “school leader”; “rural district”; drop the diagnosis year unless it’s essential to the research question.", label:"Worked example"},
      "Re-identification really happens. In 2006 a search company released “anonymised” search logs, and journalists identified at least one user from what she had searched for. Combining datasets, small numbers in tables and detailed free-text answers are the usual weak points.",
      {list:[
        "**Qualitative data** (interviews, fieldnotes) is hardest: stories themselves identify people. Change or remove details, and ask participants how they want to be described.",
        "**Small cells:** a table showing “1 respondent aged over 80 in District C” identifies that person. Many statistical agencies suppress counts below a threshold.",
        "**Free text and metadata:** comments, photos and file metadata (such as location data in images) can carry identities."
      ]},
      {tip:"For interview quotes, ask yourself: would the participant’s colleagues, family or neighbours recognise them from this sentence? If so, trim the identifying detail or paraphrase, and consider asking participants to check how they are described."}
    ]},
    {h:"Data protection principles for research", body:[
      "Data protection laws differ, but most share principles close to the GDPR’s Article 5. Here is what they mean for a research project:",
      {table:[
        ["Principle","In a research project"],
        ["Lawfulness, fairness, transparency","Have a [[lawful-basis|lawful basis]]; tell people plainly what you do with their data"],
        ["Purpose limitation","Use data for the purposes you described (research gets some flexibility)"],
        ["Data minimisation","Collect only what the research question needs"],
        ["Accuracy","Keep data correct; fix errors"],
        ["Storage limitation","Keep identifiable data only as long as needed; plan deletion"],
        ["Integrity and confidentiality","Secure storage, access control, encryption"],
        ["Accountability","Be able to show what you did and why"]
      ]},
      {ex:"Lucía’s draft survey on commuting asked for full date of birth, home address and employer.\nHer research question needs only: age band, district and job sector.\nCutting the rest means less risk for participants, a shorter survey and less data to secure.", label:"Worked example: data minimisation"},
      "**[[special-category-data|Special category data]]** need extra protection. Under the GDPR (Article 9) these are data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, plus genetic data, biometric data used to identify someone, health data, and data about a person’s sex life or sexual orientation. Processing them is banned unless a listed condition applies; one condition covers scientific research with safeguards set by law. Criminal records have separate rules.",
      "One subtle point: **consent to take part** (an ethical requirement) and the **lawful basis** for using the data (a legal one) are separate. In some countries, universities rely on a basis such as “public task” for the data while still asking for ethical consent to take part. Your institution’s data protection officer can tell you which applies.",
      "Laws vary. Examples: the **GDPR** (EU) and **UK GDPR** with the Data Protection Act 2018; in the US, the **HIPAA Privacy Rule** for health information held by health plans, most health care providers and their contractors, alongside the Common Rule; **Brazil’s LGPD**; **South Africa’s POPIA**; **India’s Digital Personal Data Protection Act 2023**; **Japan’s APPI**; **Australia’s Privacy Act 1988**. See {{data-protection-laws}} for more, and check the rules where you and your participants are."
    ]},
    {h:"Managing research data: plans and FAIR", body:[
      "**Research data management** means looking after data from collection to deletion or archiving: naming and organising files, documenting what each variable means, storing safely, backing up, and deciding what to share. A **[[data-management-plan-term|data management plan]]** (DMP) writes this down at the start. Many funders require one: the US NIH has required a data management and sharing plan for applications that generate scientific data since 25 January 2023, and EU Horizon Europe projects must submit a DMP within their first six months. Free tools such as DMPonline and DMPTool offer templates.",
      "Good everyday habits make a DMP easy to follow: consistent file names with dates (for example `2026-03-14_interview-P07.docx`), one master copy of the data, a README explaining each file, and backups kept in more than one place (see {{file-naming}} and {{backup}}).",
      {list:[
        "What data will you collect, in what formats, and how much?",
        "How will you document it (a codebook, a README, metadata)?",
        "Ethics and law: consent for sharing, anonymisation, special category data",
        "Storage, backup and security during the project (for example, encrypted institutional storage, not a personal USB stick)",
        "What will be kept long term, shared, where, and under what licence?",
        "Who is responsible, and what will it cost?"
      ]},
      "The **[[fair-principles|FAIR principles]]**, published by Wilkinson and colleagues in *Scientific Data* in 2016, describe data that are **Findable** (a persistent identifier such as a DOI, rich metadata), **Accessible** (retrievable by a standard method; metadata stay available even if data are restricted), **Interoperable** (common formats and vocabularies) and **Reusable** (clear licence, provenance and documentation). They stress making data usable by machines as well as people.",
      {key:"FAIR doesn’t mean open. Sensitive data can be FAIR: findable through a catalogue record, accessible only under an agreement. Europe’s research integrity code puts it as “as open as possible, as closed as necessary”."},
      "FAIR is about data; the **CARE principles** for Indigenous data governance (Collective benefit, Authority to control, Responsibility, Ethics) add that communities should keep a say over data about them.",
      {h:"Common misconceptions"},
      {list:[
        "“Encrypted means anonymous.” Encryption protects data from outsiders; the people who hold the key can still see who is who.",
        "“Data protection law stops research.” Most laws include specific provisions for research, with safeguards.",
        "“Sharing data is always good.” Sharing is valuable when consent, law and the risk of re-identification allow it, and not otherwise."
      ]}
    ]}
   ],
   try:[
    {id:"t4u9-l3-x1", type:"sort", q:"How should each dataset be described?", buckets:["Identifiable","Pseudonymised","Anonymous or anonymised"], items:[
      {t:"Interview transcripts with participants’ real first names and workplaces", b:0, why:"Names and workplaces identify people directly."},
      {t:"Survey answers labelled R001, R002…, with a separate spreadsheet linking codes to email addresses", b:1, why:"A key exists that can re-link codes to people, so this is pseudonymised and still personal data."},
      {t:"National statistics showing average income by region, with no small groups", b:2, why:"Aggregated figures with no small cells can’t reasonably identify anyone."},
      {t:"Coded health records analysed by a research team that also keeps the code list, in a separate locked file", b:1, why:"The team holds a key that can re-link the records, so the data are pseudonymised, and still personal data for the team. Keeping the key separate is a safeguard, not anonymisation."},
      {t:"An online poll that never collected names, emails or IP addresses, reporting only broad age bands", b:2, why:"No identifiers were collected and details are coarse, so it is reasonably anonymous."},
      {t:"Recorded video interviews with faces visible", b:0, why:"A face is a direct identifier, so video with visible faces is identifiable."}
    ]},
    {id:"t4u9-l3-x2", type:"spot", q:"Mei is preparing a “de-identified” interview extract to share. Tap each detail that could still identify the participant.", ask:"could identify the person", parts:[
      {t:"Participant P04", flag:false, why:"A study code on its own doesn’t identify anyone (as long as the key isn’t shared)."},
      ", ",
      {t:"aged 67,", flag:true, why:"An exact age combined with other details narrows things down. An age band (60–69) is safer."},
      " ",
      {t:"the only pharmacist on Kalani Island,", flag:true, why:"“The only…” in a small place points to one person. Generalise to “a health worker in a rural area”."},
      " said: “",
      {t:"I sometimes run out of medicines before the boat comes.", flag:false, why:"This experience is common to many remote areas and doesn’t point to one person on its own."},
      " ",
      {t:"After my son’s accident at the harbour in March 2024,", flag:true, why:"A specific, datable event that local people would remember can identify the speaker. Remove or blur it unless essential."},
      " ",
      {t:"I started ordering extra stock.”", flag:false, why:"An ordinary action that doesn’t single anyone out."}
    ]},
    {id:"t4u9-l3-x3", type:"sort", q:"Under the GDPR, is each item **special category data** or **ordinary personal data**?", buckets:["Special category","Ordinary personal data"], items:[
      {t:"A participant’s HIV status", b:0, why:"Data concerning health is a special category."},
      {t:"Membership of a trade union", b:0, why:"Trade union membership is listed in Article 9."},
      {t:"A fingerprint scan used to sign people in", b:0, why:"Biometric data used to uniquely identify someone is a special category."},
      {t:"A participant’s email address", b:1, why:"Personal data, but not in the Article 9 list."},
      {t:"Which political party someone supports", b:0, why:"Political opinions are a special category."},
      {t:"Someone’s job title and employer", b:1, why:"Personal data that needs protecting, but not special category."}
    ]},
    {id:"t4u9-l3-x4", type:"match", q:"Match each FAIR letter to a practice that supports it.", pairs:[
      ["Findable","Give the dataset a DOI and describe it with rich metadata","Persistent identifiers and metadata let people and machines find data."],
      ["Accessible","Make it retrievable by a standard method, with the metadata public even if the data are restricted","Accessible means a clear, standard route to the data, not necessarily open access."],
      ["Interoperable","Use common file formats and shared vocabularies for variables","Shared formats and terms let data combine with other data and tools."],
      ["Reusable","Add a clear licence, a README and where the data came from","A licence, documentation and provenance tell others how they may reuse it."]
    ]},
    {id:"t4u9-l3-x5", type:"mcq", q:"Sione’s interview study promised participants that only the research team would see transcripts. A journal now asks him to share his data openly. What should he do?", options:[
      {t:"Not share the transcripts openly; explain the consent terms, and offer controlled access, an anonymised extract (if consent allows) or a detailed description instead.", ok:true, why:"Right. Consent terms come first. Data can still be findable and accessible under conditions, matching “as open as possible, as closed as necessary”."},
      {t:"Share them; the journal’s policy overrides his consent forms.", why:"A journal policy can’t cancel promises made to participants. Most data-sharing policies allow exceptions for ethical and legal reasons."},
      {t:"Remove the names and share everything openly.", why:"Interview transcripts often identify people through details, and his consent forms ruled out sharing beyond the team."},
      {t:"Withdraw the paper; qualitative research can’t meet data-sharing rules.", why:"Data availability statements routinely explain restrictions. Withdrawing isn’t necessary."}
    ]},
    {id:"t4u9-l3-x6", type:"mcq", q:"Which statement about pseudonymised data under the GDPR is correct?", options:[
      {t:"For whoever holds the key, they remain personal data, but pseudonymisation is a recommended safeguard, especially for research.", ok:true, why:"Correct. Recital 26 treats pseudonymised data that can be re-linked as personal data; the GDPR still encourages pseudonymisation as a safeguard (for example, in its rules for research)."},
      {t:"They are anonymous, so the GDPR no longer applies.", why:"This is the most common mix-up. While a key exists, people can be re-identified, so the data stay personal data."},
      {t:"They are special category data.", why:"Special category depends on the content (health, religion and so on), not on whether the data are pseudonymised."},
      {t:"Pseudonymisation is banned in research.", why:"The opposite: it is one of the main safeguards for research data."}
    ]}
   ],
   apply:{intro:"Practise on invented data and on your own devices. Don’t use anyone’s real data for these tasks.", tasks:[
     {t:"De-identify an invented record", how:["Copy this invented record: “Dmitri Volkov, 52, the only ferry captain in Port Linden, told us about his heart surgery in May 2025 and his daughter’s wedding.”","Rewrite it twice: first pseudonymised (with a code, and note what the separate key would hold), then anonymised (coarsen or remove every indirect identifier).","Write one sentence on what research value you lost in the anonymised version."], write:"Pseudonymised version… What the key holds… Anonymised version… What was lost…"},
     {t:"Check your device is encrypted before it holds research data", how:{win:["Open **Settings → Privacy & security**.","Look for **Device encryption** (shown on many PCs). On Windows 11 Pro, Enterprise or Education you can instead search the Start menu for **Manage BitLocker**, which opens **BitLocker Drive Encryption** in Control Panel. Turn encryption on if it’s off, and save the recovery key somewhere safe.","If neither appears, your device may not support it; use your institution’s secure storage for research data."], mac:["Open **Apple menu → System Settings → Privacy & Security**.","Scroll to **FileVault**. If it’s off, choose **Turn On** and keep the recovery key safe."], chromeos:["Chromebooks encrypt user data automatically. Keep the device updated and protected with a strong password or PIN."], phone:["iPhone: setting a passcode turns on data protection (encryption) automatically. Check **Settings → Face ID & Passcode** (or **Touch ID & Passcode**); at the bottom it should say “Data protection is enabled”.","Android: most phones from recent years encrypt by default once a screen lock is set. Check **Settings → Security** (or **Security & privacy**; names vary by maker) and set a PIN, pattern or password."]}},
     {t:"Draft a one-page data management plan", how:["Use the six questions in the lesson for an imaginary study (for example, a survey of 100 people about cycling to work).","Answer each in two or three sentences.","Optional: create a free account on DMPonline or DMPTool and look at a funder template to compare."], write:"Data… Documentation… Ethics and law… Storage and security… Sharing and licence… Responsibilities…"}
   ], proof:"An invented record rewritten as pseudonymised and anonymised, confirmation that your device is encrypted (or that you’ll use secure storage instead), and a short data management plan."},
   read:[
     {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"See its sections on anonymity and confidentiality. Written before the GDPR, so use this lesson for current definitions."},
     {book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns” (on LibreTexts: 2.4)", note:"Background reading on confidentiality."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u9-l4", title:"Research integrity: honesty, credit and transparency", minutes:55,
   hook:{q:"A researcher tests 20 different outcomes, none of which is truly affected by the treatment, each at the usual p < 0.05 threshold. If the tests are independent, roughly how likely is at least one “significant” result by chance alone?", options:["5%","About 25%","About 64%","100%"], answer:2, reveal:"**About 64%.** Each test has a 5% chance of a false alarm, so the chance that all 20 avoid one is 0.95²⁰ ≈ 0.36, leaving about 0.64 for at least one. Report only that one and it looks like a discovery. No one has to invent data for research to mislead; flexible analysis and selective reporting are enough. This lesson covers outright misconduct, these grey-zone practices and the tools that prevent both."},
   goals:[
     "Define fabrication, falsification and plagiarism, and tell misconduct from honest error",
     "Recognise questionable research practices, including p-hacking, HARKing and selective reporting",
     "Explain how preregistration and registered reports protect against them",
     "Apply authorship criteria, write a CRediT contribution statement and disclose conflicts of interest"
   ],
   learn:[
    {h:"Integrity: honesty in how research is done", body:[
      {lead:"Ethics protects participants; integrity protects the research record that everyone else relies on."},
      "A nurse changing practice, a government setting policy, and the next researcher building on a result all assume the work was done and reported honestly. Europe’s code of conduct for research integrity (ALLEA, revised 2023) rests on four principles: **reliability** (quality of design, method and analysis), **honesty** (transparent, fair and complete reporting), **respect** (for colleagues, participants, society and the environment) and **accountability** (from idea to publication).",
      "Problems sit on a spectrum, from responsible practice through grey-zone shortcuts to serious misconduct:",
      {table:[
        ["Zone","Examples"],
        ["Responsible practice","Planned analysis, full reporting, honest limits, fair credit, data kept"],
        ["Questionable practices","p-hacking, HARKing, selective reporting, “salami” papers, gift authorship"],
        ["Misconduct","Fabrication, falsification, plagiarism (FFP)"]
      ]}
    ]},
    {h:"Fabrication, falsification, plagiarism", body:[
      "**[[research-misconduct|Research misconduct]]** is usually defined as **FFP**. The US Office of Research Integrity (ORI) uses these definitions:",
      {list:[
        "**[[fabrication|Fabrication]]:** making up data or results and recording or reporting them.",
        "**[[falsification|Falsification]]:** manipulating research materials, equipment or processes, or changing or omitting data or results, so the research isn’t accurately represented. Editing an image to hide a band, or quietly deleting inconvenient participants, are examples.",
        "**[[plagiarism-term|Plagiarism]]:** using another person’s ideas, processes, results or words without giving appropriate credit (Unit 4 covers this in depth: {{plagiarism}})."
      ]},
      "Crucially, research misconduct **does not include honest error or differences of opinion**. A coding mistake you discover and correct, or an interpretation colleagues disagree with, isn’t misconduct. Correcting the record openly, through a correction or, for serious errors, a [[retraction]], is what honest researchers do.",
      {tip:"Keep raw data, analysis code and a dated log of decisions. They protect you if anyone questions your work, and they make honest mistakes easy to find and fix."}
    ]},
    {h:"The grey zone: p-hacking and HARKing", body:[
      "**Questionable research practices** aren’t always deliberate. They often come from pressure to publish “positive” findings plus the many small choices any analysis involves. Statisticians call this the **garden of forking paths**: each choice is defensible on its own, but choosing after seeing the data inflates false positives.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="95" y="8" width="150" height="40" rx="10" stroke-width="1.5"/><text x="170" y="33" text-anchor="middle">One dataset</text><path class="d-ink" d="M170 48 V 64 M50 64 H 290 M50 64 V 82 M130 64 V 82 M210 64 V 82 M290 64 V 82" stroke-width="2"/><rect class="d-panel" x="14" y="84" width="72" height="56" rx="8" stroke-width="1"/><text class="s" x="50" y="106" text-anchor="middle">drop</text><text class="s" x="50" y="124" text-anchor="middle">outliers?</text><rect class="d-panel" x="94" y="84" width="72" height="56" rx="8" stroke-width="1"/><text class="s" x="130" y="106" text-anchor="middle">which</text><text class="s" x="130" y="124" text-anchor="middle">outcome?</text><rect class="d-panel" x="174" y="84" width="72" height="56" rx="8" stroke-width="1"/><text class="s" x="210" y="106" text-anchor="middle">add a</text><text class="s" x="210" y="124" text-anchor="middle">control?</text><rect class="d-panel" x="254" y="84" width="72" height="56" rx="8" stroke-width="1"/><text class="s" x="290" y="106" text-anchor="middle">stop</text><text class="s" x="290" y="124" text-anchor="middle">early?</text><path class="d-ink" d="M50 140 V 160 M130 140 V 160 M210 140 V 160 M290 140 V 160" stroke-width="2"/><rect class="d-soft" x="14" y="162" width="72" height="34" rx="8" stroke-width="1.5"/><text x="50" y="184" text-anchor="middle">p=.31</text><rect class="d-soft" x="94" y="162" width="72" height="34" rx="8" stroke-width="1.5"/><text x="130" y="184" text-anchor="middle">p=.12</text><rect class="d-rose" x="174" y="162" width="72" height="34" rx="8" stroke-width="2.5"/><text x="210" y="184" text-anchor="middle">p=.04</text><rect class="d-soft" x="254" y="162" width="72" height="34" rx="8" stroke-width="1.5"/><text x="290" y="184" text-anchor="middle">p=.58</text><path class="d-ink" d="M210 196 V 222" stroke-width="2" marker-end="url(#ar4)"/><rect class="d-rose" x="30" y="226" width="280" height="56" rx="10" stroke-width="1.5"/><text x="170" y="249" text-anchor="middle">Only p = .04 is reported</text><text class="s" x="170" y="269" text-anchor="middle">a chance result looks like a discovery</text><rect class="d-sage" x="10" y="302" width="320" height="110" rx="12" stroke-width="1.5"/><text x="170" y="326" text-anchor="middle">Preregistration</text><text class="s" x="170" y="348" text-anchor="middle">choose the path before seeing the data,</text><text class="s" x="170" y="366" text-anchor="middle">time-stamp the plan, report every test,</text><text class="s" x="170" y="384" text-anchor="middle">and label any extra analysis</text><text class="s" x="170" y="402" text-anchor="middle">as exploratory</text></svg>', alt:"One dataset branches into four analysis choices: drop outliers, which outcome, add a control variable, or stop data collection early. They give p values of .31, .12, .04 and .58. Only the p = .04 result is reported, so a chance result looks like a discovery. Below, a box labelled Preregistration says: choose the path before seeing the data, time-stamp the plan, report every test, and label any extra analysis as exploratory.", cap:"Each choice can be reasonable. The problem is choosing after seeing which one “works”, then reporting only that one. (Invented p-values.)"},
      {list:[
        "**[[p-hacking|P-hacking]]:** trying analyses (outcomes, exclusions, control variables, when to stop collecting data) until a result crosses p < 0.05, then reporting it as if it had been the plan. Simmons, Nelson and Simonsohn showed in 2011 how a few such flexible choices can make false positives far more likely than the nominal 5%.",
        "**[[harking|HARKing]]** (“Hypothesising After the Results are Known”), named by Norbert Kerr in 1998: presenting a hypothesis invented after seeing the results as if it had been predicted in advance.",
        "**Selective reporting:** publishing only the studies, outcomes or subgroups that “worked”. Across a field this creates **[[publication-bias|publication bias]]**: the literature looks more certain than the evidence is.",
        "Others: splitting one study into many small papers (“salami slicing”), citing selectively, and misusing statistics to suggest significance."
      ]},
      "Exploring data isn’t wrong. Exploration is how new ideas start. The problem is **presenting** exploration as confirmation. Label exploratory findings clearly and treat them as hypotheses for the next study.",
      {h:"Common misconceptions"},
      {list:[
        "“If p < 0.05, the finding is real.” A [[p-value]] doesn’t tell you the probability that a hypothesis is true, and a “significant” result is much easier to get by chance when many analyses were tried (see {{reading-results|Unit 3 on reading results}}).",
        "“Only fraudsters cause false findings.” Honest researchers making many small, flexible choices can produce misleading results without intending to.",
        "“Null results are failures.” A well-designed study that finds no effect tells everyone something useful."
      ]}
    ]},
    {h:"Preregistration and registered reports", body:[
      "**[[preregistration|Preregistration]]** means writing your hypotheses, design, sample size and analysis plan, and time-stamping them in a public registry **before** collecting or analysing the data. Later, readers can compare the plan with the paper. Changes are allowed, but must be reported and explained.",
      {list:[
        "Clinical trials: registration before enrolling the first participant is expected internationally, for example on ClinicalTrials.gov or registries in the WHO’s International Clinical Trials Registry Platform; major medical journals require it.",
        "Other fields: free platforms such as OSF Registries and AsPredicted.",
        "Systematic reviews: [[review-protocol|protocols]] are often registered too (see {{systematic-reviews|Unit 5}})."
      ]},
      "A **[[registered-report|registered report]]** goes further. A journal peer-reviews the question and methods **before** the data exist (Stage 1). If they’re sound, it gives **in-principle acceptance**: a promise to publish whatever the results, provided the authors follow the plan. Stage 2 reviews the finished paper and checks the plan was followed, not whether the results are exciting. That removes the reward for p-hacking and helps null results get published."
    ]},
    {h:"Authorship, CRediT and conflicts of interest", body:[
      "**[[authorship|Authorship]]** is credit and responsibility. The International Committee of Medical Journal Editors (ICMJE) recommends that each author meets **all four** criteria:",
      {ol:[
        "Substantial contributions to the conception or design of the work, or to acquiring, analysing or interpreting data;",
        "Drafting the work or revising it critically for important intellectual content;",
        "Final approval of the version to be published;",
        "Agreement to be accountable for all aspects of the work."
      ]},
      "People who helped but don’t meet all four (a technician, a translator, someone who gave advice) belong in the **acknowledgements**, with their permission. Europe’s integrity code sets out similar expectations. Two problems to avoid: **gift (guest) authorship**, adding someone who didn’t contribute (a senior colleague, a friend), and **ghost authorship**, leaving out someone who did substantial work. Author order conventions vary: many sciences put the main contributor first and the senior author last; some fields, such as economics and mathematics, often list authors alphabetically. Agree on order early and write it down.",
      "**[[credit-taxonomy|CRediT]]** (Contributor Roles Taxonomy), now the US standard ANSI/NISO Z39.104-2022, describes **14 roles** so readers see who did what: Conceptualization, Data curation, Formal analysis, Funding acquisition, Investigation, Methodology, Project administration, Resources, Software, Supervision, Validation, Visualization, Writing – original draft, and Writing – review & editing. Many journals ask for a CRediT statement.",
      {tip:"Agree authorship and roles at the start of a project, write the agreement down, and revisit it if people’s contributions change. Most authorship disputes come from assumptions nobody said aloud."},
      {ex:"Author contributions (CRediT): Priya Nair: Conceptualization, Methodology, Writing – original draft. Kofi Mensah: Investigation, Data curation. Hana Sato: Formal analysis, Visualization, Writing – review & editing. Ana Ruiz: Supervision, Funding acquisition, Writing – review & editing.", label:"Worked example (invented team)"},
      "A **[[conflict-of-interest|conflict of interest]]** is any interest that could affect, or look as though it affects, your judgement: funding from a company whose product you test, shares, consulting fees, patents, but also personal relationships or rivalries. Having one isn’t wrong; **hiding** it is. Journals ask authors (and reviewers) to declare them, often on a standard form such as the ICMJE’s."
    ]}
   ],
   try:[
    {id:"t4u9-l4-x1", type:"sort", q:"Classify each situation.", buckets:["Misconduct (FFP)","Questionable practice","Honest error or acceptable"], items:[
      {t:"Inventing survey responses to reach the promised sample size", b:0, why:"Making up data is fabrication."},
      {t:"Digitally removing a band from a lab image so the result looks cleaner", b:0, why:"Manipulating materials or images so the research is misrepresented is falsification."},
      {t:"Trying five ways of handling outliers and reporting only the one that gives p < 0.05", b:1, why:"Classic p-hacking: the analysis choice depended on the result and the other attempts are hidden."},
      {t:"Writing the introduction as if a surprise finding had been predicted all along", b:1, why:"That’s HARKing. Kerr named it as a questionable practice because it misleads readers about how strong the evidence is."},
      {t:"Discovering a spreadsheet formula error after publication and asking the journal to publish a correction", b:2, why:"An honest error, handled exactly as it should be. Misconduct excludes honest error."},
      {t:"Reporting an unplanned analysis and labelling it clearly as exploratory", b:2, why:"Exploration is fine when it is presented honestly as exploration."}
    ]},
    {id:"t4u9-l4-x2", type:"number", q:"A team runs 10 independent tests where no real effect exists, each at p < 0.05. What is the probability, as a percentage, of getting at least one false positive? (Round to the nearest whole percent.)", answer:40, tol:1, unit:"%", why:"The chance a single test avoids a false positive is 0.95. For all 10 to avoid one: 0.95¹⁰ ≈ 0.599. So at least one false positive: 1 − 0.599 ≈ 0.401, about 40%.", wrongs:[
      {v:50, tol:0.5, why:"10 × 5% = 50% adds the probabilities, which double-counts the cases where more than one test is a false positive. Use 1 − 0.95¹⁰ instead."},
      {v:5, tol:0.5, why:"5% is the false-positive rate for one test. With 10 tests the chances add up."},
      {v:60, tol:1, why:"About 60% is the chance of **no** false positives (0.95¹⁰). The question asks for at least one, so subtract from 1."}
    ], hint2:"Work out the chance that all 10 tests avoid a false positive, then subtract it from 1."},
    {id:"t4u9-l4-x3", type:"mcq", q:"Lucía’s preregistered plan said she would compare two groups on reading scores. After collecting data she finds no difference, but a big difference in maths scores. What is the honest way to report this?", options:[
      {t:"Report the reading result as the planned test, and the maths result as an exploratory finding that needs confirming in a new study.", ok:true, why:"Right. Both are reported, and readers can see which was planned. That’s exactly what preregistration makes possible."},
      {t:"Report only the maths result, since it is the interesting one.", why:"That’s selective reporting. Readers would think maths was the planned outcome."},
      {t:"Update the preregistration to say maths was the main outcome.", why:"Changing the plan after seeing results, without saying so, defeats the purpose of preregistering. Deviations must be reported openly."},
      {t:"Don’t publish at all, because the planned result was null.", why:"Null results are valuable. Leaving them unpublished feeds publication bias."}
    ]},
    {id:"t4u9-l4-x4", type:"match", q:"Match each person’s work on a project to the CRediT role that best describes it.", pairs:[
      ["Came up with the research idea and overall aims","Conceptualization","Conceptualization is ideas and the formulation of overarching aims."],
      ["Ran the interviews and collected the measurements","Investigation","Investigation covers carrying out experiments or collecting data."],
      ["Cleaned, annotated and archived the dataset","Data curation","Data curation covers managing and maintaining data for use and reuse."],
      ["Ran the statistical models","Formal analysis","Formal analysis covers statistical, mathematical or computational techniques to analyse data."],
      ["Wrote the code for the analysis pipeline","Software","Software covers programming and developing code."],
      ["Wrote the first full draft of the paper","Writing – original draft","This role covers preparing the initial draft."]
    ]},
    {id:"t4u9-l4-x5", type:"mcq", q:"Under the ICMJE criteria, which person should be an **author** rather than acknowledged?", options:[
      {t:"Dmitri, who designed the analysis, revised the draft critically, approved the final version and agreed to answer for the work", ok:true, why:"He meets all four criteria: substantial contribution, drafting or critical revision, final approval and accountability."},
      {t:"The head of department, who secured the lab space but didn’t see the paper", why:"General support or leadership alone doesn’t meet the criteria. Adding them would be gift authorship."},
      {t:"A translator who translated the questionnaire into Swahili", why:"Valuable help that belongs in the acknowledgements, unless they also meet all four criteria."},
      {t:"A friend who proofread the final draft", why:"Proofreading is acknowledged, not authorship."}
    ]},
    {id:"t4u9-l4-x6", type:"spot", q:"Here is a draft “Declarations” section. Tap each sentence that is a problem.", ask:"is a problem", parts:[
      {t:"This study was preregistered on OSF before data collection; deviations are listed in the supplement.", flag:false, why:"Transparent: the plan is public and changes are reported."},
      " ",
      {t:"Professor Y is listed as an author as a courtesy because she leads the department.", flag:true, why:"That is gift authorship. Leading a department doesn’t meet the authorship criteria."},
      " ",
      {t:"The study was funded by a company that sells the app we tested; the funder had no role in the analysis.", flag:false, why:"A clear conflict-of-interest disclosure. Declaring it is what integrity requires."},
      " ",
      {t:"We excluded participants whose results did not fit the expected pattern.", flag:true, why:"Excluding data because of the result is falsification territory. Exclusions must follow rules set in advance and be reported."},
      " ",
      {t:"Data and code are available in a repository under a CC BY licence.", flag:false, why:"Good practice that supports reuse and checking."}
    ]}
   ],
   apply:{intro:"These tasks use invented or your own past work. None involves collecting data.", tasks:[
     {t:"Write a short preregistration (don’t submit it)", how:["Pick an imaginary study: for example, does a reminder text increase library book returns?","Answer: Have data been collected yet? What is the main question and hypothesis? What is the key outcome and how is it measured? What groups or conditions? Exactly which analysis? What are the rules for excluding data? How many participants, and why?","Short templates such as AsPredicted’s ask questions like these; compare yours if you like."], write:"Hypothesis… Outcome measure… Conditions… Planned analysis… Exclusion rules… Sample size and why…"},
     {t:"Write a CRediT statement", how:["Think of a group project you have done (at school, work or in a community group), or invent a team of four.","List each person and assign CRediT roles from the 14.","Note anyone who should be acknowledged rather than listed as an author, and why."], write:"Person 1: roles… Person 2… Acknowledged: … because…"},
     {t:"Read a real conflict-of-interest statement", how:["Open any open-access research article in a field you care about (for example, through DOAJ or PubMed Central).","Find its funding, conflict-of-interest and author contribution sections.","Note what was declared and whether it changes how you read the paper."], write:"Article… What was declared… Does it change how I read it?…"}
   ], proof:"A short preregistration for an imaginary study, a CRediT statement for a real or invented team, and notes on one real article’s declarations."},
   read:[
     {book:"bhatt", where:"Chapter 16, “Research Ethics”", note:"See its sections on analysis and reporting and on professional codes of ethics."},
     {book:"acrl", where:"Frame “Information Has Value”", note:"Why credit and attribution matter in scholarship."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u9-l5", title:"Using AI in research responsibly", minutes:55,
   hook:{q:"An AI chatbot gives Priya five references for her literature review. Each has real-looking authors, a journal name and a DOI. What is the safest assumption?", options:["They’re real: the DOIs prove it","They’re real if the journal names are real","Each one must be checked; some may not exist, or may not say what the AI claims","Modern AI tools no longer invent references"], answer:2, reveal:"**Check every one.** Generative AI produces text that *looks* like a reference, and a plausible DOI is easy to make up. Some references will be real, some partly wrong (wrong year or authors), some entirely invented, and some real but not about what the AI says. This lesson shows how to use AI tools where they genuinely help, without losing the trust research depends on."},
   goals:[
     "Explain why AI tools can’t be authors and what COPE and the ICMJE ask of authors who use them",
     "Write a clear AI-use disclosure and know where it goes",
     "Verify AI-suggested citations and claims against the original sources",
     "Keep confidential data and manuscripts out of tools that aren’t approved for them, and find the rules that apply to you"
   ],
   learn:[
    {h:"What AI tools can and can’t do for research", body:[
      {lead:"[[generative-ai|Generative AI]] tools can save real time in research, and they can also quietly introduce errors that are hard to spot."},
      "Think of an AI chatbot as a very fast, very fluent assistant who has read a lot, remembers it imperfectly, and never says “I’m not sure” unless asked. Useful for some jobs, risky for others:",
      {table:[
        ["Often helpful","Needs great care"],
        ["Brainstorming search terms and angles","Finding sources (may invent them)"],
        ["Explaining a method you then check in a textbook","Summarising a paper you haven’t read"],
        ["Improving grammar and clarity of your own text","Writing arguments or interpretations for you"],
        ["Drafting or debugging analysis code you test","Analysing confidential participant data"]
      ]},
      "The common thread: AI output is a **draft to check**, never a source. AI tools can produce confident, false content, called [[hallucination|hallucination]], and their output reflects biases in what they were trained on. Models also change over time, so the same prompt may give different answers next month, which matters for reproducibility.",
      {key:"You can delegate tasks to AI. You can’t delegate responsibility. Whatever ends up in your work is your claim."}
    ]},
    {h:"Why AI can’t be an author", body:[
      "In February 2023 the **Committee on Publication Ethics (COPE)**, whose guidance many journals follow, published a position statement on authorship and AI tools. Its points:",
      {list:[
        "AI tools **cannot meet the requirements for authorship**, because they cannot take responsibility for the submitted work.",
        "As non-legal entities, they can’t declare conflicts of interest or manage copyright and licence agreements.",
        "Authors who use AI tools in writing, in producing images or graphics, or in collecting or analysing data must **disclose** how and which tool they used, in the methods or a similar section.",
        "Authors are **fully responsible** for the content of their manuscript, including the parts an AI tool produced."
      ]},
      "The **ICMJE Recommendations** (updated since 2023 to cover AI) say much the same: chatbots should not be listed as authors, because they can’t be responsible for the accuracy, integrity and originality of the work; authors should say at submission whether and how they used AI-assisted technologies (for example, writing assistance in the acknowledgements, and AI used for data collection, analysis or figures in the methods); and authors should not cite AI as an author.",
      "This links to the four authorship criteria from Lesson 4: an AI can’t give final approval or be accountable. It also explains why style guides tell you to cite an AI tool as software, not as a person.",
      {lab:"cl-apa-ai", t:"Practise: cite an AI tool"}
    ]},
    {h:"Disclosing AI use", body:[
      "[[ai-disclosure|Disclosure]] means stating openly which AI tools you used, for what, and how you checked the output. Europe’s research integrity code (2023) lists **hiding the use of AI or automated tools** in creating content or drafting publications as an unacceptable practice, and asks reviewers to disclose their AI use too.",
      "A good disclosure answers four questions: **which tool** (name, version or model if known, and dates used), **what for**, **how the output was checked**, and **who is responsible**.",
      {ex:"AI use statement: We used ChatGPT (OpenAI; accessed March–April 2026) to suggest alternative search terms and to improve the grammar of the Introduction and Discussion. All suggested terms were tested in the databases, and all edits were reviewed by the authors. No AI tool was used to analyse data or generate references. The authors take full responsibility for the content.", label:"Worked example"},
      "Where it goes depends on the venue: a methods section, the acknowledgements, a dedicated declaration, or a cover letter. Some publishers don’t require disclosure for basic spelling and grammar checkers; others do. For coursework, your course or institution decides what is allowed at all; some assignments permit AI for brainstorming but not for writing.",
      {warn:"AI-text “detectors” are unreliable. Research has found they can wrongly flag human writing, particularly by people writing in a second language. Honest disclosure protects you far better than trying to avoid detection."}
    ]},
    {h:"Hallucinated citations: verify every one", body:[
      "A **[[hallucinated-citation|hallucinated citation]]** is a reference an AI tool produced that doesn’t exist, or that exists but doesn’t support the claim. They have caused real damage: in 2023 a US federal court in New York sanctioned lawyers who had filed a brief citing court cases that ChatGPT had invented.",
      "A reliable routine for every AI-suggested source:",
      {ol:[
        "**Find it independently.** Search the title in a library catalogue, Google Scholar or another database, not by asking the AI again.",
        "**Resolve the DOI.** Paste it after `https://doi.org/` and check it leads to the same title, authors and year.",
        "**Open the source.** Read at least the abstract and the part being cited.",
        "**Check the claim.** Does the source actually say what the AI said it says? Summaries can reverse findings or merge two papers.",
        "**Cite what you read.** If you only read a review that cites a study, cite the review, or find and read the study."
      ]},
      "The same applies to “AI research assistants” built on scholarly databases (see {{ai-reading-tools}}). They are usually better at returning real papers, but their summaries can still misstate what the papers found."
    ]},
    {h:"Confidentiality: what not to paste", body:[
      "Pasting text into an AI tool sends it to a company’s servers. Depending on the tool and settings, it may be stored, reviewed by staff or used to train future models. For research, that can break promises and laws:",
      {list:[
        "**Participant data.** Your consent forms and ethics approval said who would see the data. An external AI service probably wasn’t on that list, and personal data may cross borders, triggering data protection rules (Lesson 3).",
        "**Peer review.** Manuscripts and grant applications under review are confidential. In June 2023 the US NIH told its peer reviewers they may not use generative AI tools to analyse or write critiques of applications (notice NOT-OD-23-149), and many journals tell reviewers not to upload manuscripts to AI tools.",
        "**Unpublished work and others’ ideas.** A colleague’s draft, commercially sensitive data or a patentable idea shouldn’t go into a public tool."
      ]},
      {fig:'<svg viewBox="0 0 340 512"><defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="6" y="6" width="328" height="52" rx="10" stroke-width="1.5"/><text x="170" y="27" text-anchor="middle">Personal, confidential or</text><text x="170" y="46" text-anchor="middle">unpublished material?</text><path class="d-ink" d="M60 58 V 120" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="68" y="94">then</text><path class="d-ink" d="M250 58 V 70" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="258" y="68">if yes</text><rect class="d-rose" x="150" y="72" width="184" height="40" rx="8" stroke-width="1.5"/><text class="s" x="242" y="89" text-anchor="middle">approved tool only,</text><text class="s" x="242" y="105" text-anchor="middle">or don’t upload</text><rect class="d-lup" x="6" y="124" width="328" height="52" rx="10" stroke-width="1.5"/><text x="170" y="145" text-anchor="middle">Do your course, institution,</text><text x="170" y="164" text-anchor="middle">funder and journal allow it?</text><path class="d-ink" d="M60 176 V 238" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="68" y="212">then</text><path class="d-ink" d="M250 176 V 188" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="258" y="186">if unsure</text><rect class="d-gold" x="150" y="190" width="184" height="40" rx="8" stroke-width="1.5"/><text class="s" x="242" y="207" text-anchor="middle">read the policy</text><text class="s" x="242" y="223" text-anchor="middle">or ask first</text><rect class="d-lup" x="6" y="242" width="328" height="52" rx="10" stroke-width="1.5"/><text x="170" y="263" text-anchor="middle">Will AI output shape the work?</text><text class="s" x="170" y="282" text-anchor="middle">text, code, analysis, images</text><path class="d-ink" d="M60 294 V 356" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="68" y="330">then</text><path class="d-ink" d="M250 294 V 306" stroke-width="2" marker-end="url(#ar5)"/><text class="s" x="258" y="304">if yes</text><rect class="d-sage" x="150" y="308" width="184" height="40" rx="8" stroke-width="1.5"/><text class="s" x="242" y="325" text-anchor="middle">disclose tool, purpose</text><text class="s" x="242" y="341" text-anchor="middle">and how you checked</text><rect class="d-lup" x="6" y="360" width="328" height="52" rx="10" stroke-width="1.5"/><text x="170" y="381" text-anchor="middle">Did it give facts or references?</text><text class="s" x="170" y="400" text-anchor="middle">→ verify each in the original</text><path class="d-ink" d="M170 412 V 438" stroke-width="2" marker-end="url(#ar5)"/><rect class="d-inkf" x="40" y="442" width="260" height="62" rx="12" stroke-width="1.5"/><rect class="d-panel" x="44" y="446" width="252" height="54" rx="10" stroke-width="1"/><text x="170" y="469" text-anchor="middle">You stay responsible</text><text class="s" x="170" y="489" text-anchor="middle">for everything in the work</text></svg>', alt:"A decision flow with four questions. One: is the material personal, confidential or unpublished? If yes, use an approved tool only, or don’t upload. Two: do your course, institution, funder and journal allow this use? If unsure, read the policy or ask first. Three: will AI output shape the work, such as text, code, analysis or images? If yes, disclose the tool, the purpose and how you checked. Four: did it give facts or references? Verify each in the original source. At the end: you stay responsible for everything in the work.", cap:"Four questions before and after using an AI tool in research. Policies differ, so the second question changes from place to place."},
      "Many universities now provide AI tools under contracts that keep data private and out of training. Those may be approved for some data. Even then, remove identifiers first and check with your ethics committee or data protection officer for anything sensitive."
    ]},
    {h:"Rules vary and change: how to keep up", body:[
      "There is no single rulebook. Publishers began publishing AI policies in 2023 and have revised them since. Large publishers such as Elsevier, Springer Nature, Wiley and Taylor & Francis broadly agree that AI can’t be an author, that use must be disclosed and that reviewers must protect confidentiality. They differ on details: which exceptions they allow for AI-generated images (several ban them in research figures unless AI is the subject of the research), where disclosure goes, and which uses need disclosing at all. Funders, universities and individual courses add their own rules.",
      {list:[
        "Before you start, find the policies that apply: your course or institution, your ethics approval, your funder, and the target journal’s author and reviewer guidelines.",
        "Note the **date** you read each policy; they change.",
        "Keep a simple log of AI use: tool, date, purpose, what you kept. Writing the disclosure then takes minutes.",
        "When rules conflict, follow the strictest one that applies, and ask."
      ]},
      {key:"Used openly and checked carefully, AI tools can be a legitimate part of research. Used secretly, or trusted without checking, they put participants, readers and your own reputation at risk."}
    ]}
   ],
   try:[
    {id:"t4u9-l5-x1", type:"mcq", q:"Why does COPE say an AI tool can’t be listed as an author?", options:[
      {t:"It can’t take responsibility for the work, and as a non-legal entity can’t declare conflicts of interest or manage copyright.", ok:true, why:"Right. Authorship means accountability, which a tool can’t have."},
      {t:"AI writing is always lower quality than human writing.", why:"COPE’s reasoning isn’t about quality. Even excellent AI text can’t carry responsibility."},
      {t:"Journals don’t want readers to know AI was used.", why:"The opposite: COPE requires authors to disclose AI use."},
      {t:"Only because AI tools don’t have an ORCID iD.", why:"Identifiers aren’t the reason. The core issue is responsibility and accountability."}
    ]},
    {id:"t4u9-l5-x2", type:"sort", q:"Kofi is writing up an interview study. Should he paste each item into a free public AI chatbot?", buckets:["Reasonable","Don’t paste it"], items:[
      {t:"His own draft paragraph, asking for clearer wording", b:0, why:"His own unpublished prose carries little risk for most people, though he should still disclose the help if the venue requires it."},
      {t:"A request to explain thematic analysis in simple terms", b:0, why:"A general question involves no confidential material. He should still check the explanation in a methods textbook."},
      {t:"Full interview transcripts, to ask for themes", b:1, why:"Transcripts are personal and often sensitive data. His consent forms almost certainly didn’t cover a public AI service."},
      {t:"A manuscript he has been sent to peer review", b:1, why:"Manuscripts under review are confidential. Many journals and funders forbid uploading them to AI tools."},
      {t:"A participant’s email complaining about the study", b:1, why:"It is personal data and identifies the sender."},
      {t:"A list of search terms he plans to use", b:0, why:"Nothing confidential, and AI can usefully suggest synonyms, which he then tests in the databases."}
    ]},
    {id:"t4u9-l5-x3", type:"order", q:"Put these steps for checking an AI-suggested reference in a sensible order.", items:[
      {t:"Search for the title yourself in a database or library catalogue", why:"First, confirm independently that the work exists, without asking the AI again."},
      {t:"Resolve the DOI and check title, authors and year match", why:"A DOI that leads somewhere else, or nowhere, is a red flag."},
      {t:"Open the source and read the abstract and the relevant section", why:"Existing isn’t enough; you need to see what it says."},
      {t:"Check the source really supports the claim you want to make", why:"AI summaries can misstate or reverse findings."},
      {t:"Cite it, and record in your notes that you checked it", why:"Only verified sources go into your reference list."}
    ]},
    {id:"t4u9-l5-x4", type:"spot", q:"Here is a draft AI-use statement. Tap each sentence that is a problem.", ask:"is a problem", parts:[
      {t:"We used an AI writing assistant (named, with the dates used) to improve the clarity of the Discussion.", flag:false, why:"Names the tool, the dates and the purpose. Good."},
      " ",
      {t:"ChatGPT is listed as a co-author in recognition of its contribution.", flag:true, why:"COPE and the ICMJE say AI tools can’t be authors, because they can’t be accountable."},
      " ",
      {t:"The AI tool generated the reference list, which we did not need to check because it provided DOIs.", flag:true, why:"DOIs can be invented too. Every reference must be verified against the real source."},
      " ",
      {t:"All AI-assisted text was reviewed and edited by the authors.", flag:false, why:"Says how the output was checked."},
      " ",
      {t:"The AI tool is responsible for any errors in the sections it wrote.", flag:true, why:"Authors are fully responsible for everything in the manuscript, including AI-produced parts."}
    ]},
    {id:"t4u9-l5-x5", type:"mcq", q:"Hana is peer reviewing a manuscript for a journal. She is short of time and considers uploading it to an AI tool to summarise it. What should she do?", options:[
      {t:"Not upload it unless the journal explicitly allows a specific tool; manuscripts under review are confidential. If she can’t review in time, she should tell the editor.", ok:true, why:"Right. Confidentiality is a reviewer’s core duty; ICMJE guidance says confidentiality may rule out uploading a manuscript to AI tools unless the journal explicitly allows it, and many journals forbid it outright."},
      {t:"Upload it, as long as she deletes the chat afterwards.", why:"Deleting the chat may not remove the data from the provider’s systems, and the upload itself already breaches confidentiality."},
      {t:"Upload it, but remove the authors’ names first.", why:"The unpublished content itself is confidential, not just the names."},
      {t:"Ask a friend outside the field to summarise it instead.", why:"Sharing the manuscript with anyone not authorised by the editor also breaches confidentiality."}
    ]},
    {id:"t4u9-l5-x6", type:"match", q:"Match each situation to the best first step.", pairs:[
      ["You aren’t sure if your course allows AI for drafting","Read the course or assignment policy, or ask the instructor","Coursework rules are set locally and vary a lot."],
      ["An AI tool summarised a paper for you","Read the paper’s abstract and key sections yourself before citing it","Summaries can misstate findings."],
      ["You used AI to help write code for your analysis","Test the code on data where you know the answer, and disclose the use","AI-written code can run without errors and still be wrong."],
      ["You want AI help to find themes in interview data","Check your consent terms, ethics approval and approved tools first","Participant data may only go where people agreed it would."]
    ]}
   ],
   apply:{intro:"Practise with public material and your own writing. Don’t paste anyone else’s personal or confidential information into an AI tool.", tasks:[
     {t:"Find and compare two AI policies", how:["Find the AI policy of a journal or publisher in a field you care about (search the journal name plus “AI policy” or “generative AI”; it is usually in the author guidelines).","Find the AI guidance of a university or your own institution, or a funder in your country.","Note for each: can AI be an author? What must be disclosed, and where? What do reviewers have to avoid? The date of the policy."], write:"Policy 1 (name, date)… Authorship… Disclosure… Reviewers… Policy 2…"},
     {t:"Test an AI tool’s references", how:["If you use an AI chatbot, ask it for three scholarly references on a topic you know (for example, “three peer-reviewed studies on urban trees and summer temperatures, with DOIs”).","Check each using the five-step routine from the lesson.","Record which were real and accurate, real but wrong in details, real but not supporting the claim, or not found."], write:"Reference 1: result… Reference 2… Reference 3… What I learned…"},
     {t:"Write your own AI-use statement", how:["Choose a piece of your own writing where you used, or might use, an AI tool.","Write a statement that names the tool and dates, the purpose, how you checked the output, and who is responsible.","Keep it as a template for future work."], write:"My AI-use statement…"}
   ], proof:"Notes comparing two real AI policies with their dates, a record of checking three AI-suggested references, and an AI-use statement you can reuse."},
   read:[
     {book:"acrl", where:"Frame “Scholarship as Conversation”", note:"Why every claim needs a traceable source, which AI output can’t replace."},
     {book:"wlsf", where:"Background reading: Part III, Chapter 7 “Go Upstream to Find the Source”", note:"Written before generative AI, but its habit of tracing claims to the original is exactly what AI output needs."}
   ]
  }
  ],
  checkpoint:["t4u9-q02","t4u9-q05","t4u9-q09","t4u9-q12","t4u9-q18","t4u9-q20","t4u9-q23","t4u9-q27","t4u9-q30","t4u9-q34","t4u9-q37","t4u9-q40"],
  codex:[
   {id:"ethics-history", title:"How research ethics began", aka:["Nuremberg Code","Declaration of Helsinki","Tuskegee","Henrietta Lacks","HeLa"], tags:["research","ethics","history"],
    summary:"The abuses and responses, from the Doctors’ Trial to the 2024 Declaration of Helsinki, that shaped today’s rules for research with people.",
    levels:{
     starter:[
      "Rules for research with people grew out of real harm. After the Second World War, German doctors were tried at Nuremberg for deadly experiments on prisoners. The judges’ verdict in August 1947 listed ten principles, the **Nuremberg Code**. The first says a person’s voluntary consent is “absolutely essential”.",
      "In 1964 the World Medical Association adopted the **Declaration of Helsinki**, principles for medical research written by doctors. It was revised most recently in October 2024.",
      "Harm continued even after these documents. In the United States, the Public Health Service’s study at Tuskegee followed 600 Black men from 1932 to 1972 without informed consent, and did not offer the men with syphilis penicillin once it became the standard treatment. In 1951, cells were taken from Henrietta Lacks without her knowledge or consent and used in research worldwide.",
      {key:"Each rule you meet in research ethics today exists because someone was harmed without it."},
      "You don’t need to memorise every date. Remember the pattern: harm came to light, people protested, and rules followed. Today that history shows up in everyday rules: people must agree freely, an independent committee checks studies first, and researchers must think about who carries the risks."
     ],
     builder:[
      {h:"Key dates"},
      {table:[
        ["Year","Event"],
        ["1932","US Public Health Service study at Tuskegee begins, with the Tuskegee Institute"],
        ["1947","Doctors’ Trial verdict (19 August) sets out the Nuremberg Code"],
        ["1951","Henrietta Lacks’s tumour cells taken at Johns Hopkins Hospital; HeLa cell line follows"],
        ["1964","Declaration of Helsinki adopted by the World Medical Association"],
        ["1972","Associated Press story; advisory panel calls the Tuskegee study “ethically unjustified”; it ends"],
        ["1974","US National Research Act creates the national commission"],
        ["1979","Belmont Report published (18 April)"],
        ["1997","Formal US presidential apology for the Tuskegee study (16 May)"],
        ["2024","Declaration of Helsinki revised in Helsinki (October)"]
      ]},
      "The study at Tuskegee enrolled 399 men with syphilis and 201 without. The men were told they were being treated for “bad blood” and received free exams, meals and burial insurance. Penicillin was the treatment of choice by 1943 but was not offered. A 1973 class-action lawsuit led to a $10 million settlement in 1974 and a health benefit programme, later extended to wives, widows and children.",
      "HeLa cells were the first human cells to be grown continuously in the lab. In 2013 the US NIH reached an agreement with members of the Lacks family about access to HeLa genome data; NIH reaffirmed it in 2023.",
      "These cases matter beyond medicine. The principles they produced apply equally to surveys, interviews, observation and online studies, which is why education, sociology, business and computing departments also have ethics review."
     ],
     pro:[
      "The Nuremberg Code came from *USA v. Karl Brandt et al.*, heard by an American military tribunal against 23 physicians and administrators. Its ten points built on a memo by the physician Leo Alexander. Its legal force was never firmly established, but it shaped later international statements.",
      "The Declaration of Helsinki differs from the Code: written by and for physicians, its original 1964 text distinguished research combined with medical care from research with no direct benefit to participants, and its revisions (from Tokyo, 1975) require independent ethics committee review. The 2024 revision, adopted unanimously at the 75th WMA General Assembly, uses “participants” instead of “subjects” and gives more weight to vulnerability, community engagement, fairness and scientific integrity. Cite the version you rely on, because paragraph numbers change between revisions.",
      "Abuses weren’t confined to one country or era. Writing about them well means accuracy and respect: name the institutions responsible, use names families have made public, avoid presenting those harmed only as “subjects”, and recognise that these histories still affect trust in research among the communities concerned.",
      "These events also show the limits of codes. The Tuskegee study ran for 25 years after Nuremberg; legislation, independent review and public scrutiny were needed to end it, which is why modern systems combine principles with oversight.",
      "Other well-documented abuses include US Public Health Service experiments in Guatemala (1946–1948) in which people, including prisoners, soldiers and psychiatric patients, were deliberately infected with sexually transmitted infections; the US government apologised in 2010."
     ]
    },
    related:["belmont-principles","ethics-review","consent-process","research-ethics"],
    read:[{book:"soc", where:"Chapter 2, Section 2.3 “Ethical Concerns”"}],
    sources:[{t:"US Holocaust Memorial Museum: The Nuremberg Code", url:"https://encyclopedia.ushmm.org/content/en/article/the-nuremberg-code"},{t:"CDC: The Untreated Syphilis Study at Tuskegee Timeline", url:"https://cdc.gov/tuskegee/about/timeline.html"},{t:"World Medical Association: General Assembly 2024 in summary", url:"https://www.wma.net/?p=23605"},{t:"NIH: The NIH-Lacks Family Agreement", url:"https://grants.nih.gov/node/1223"}], checked:"2026-11"},

   {id:"belmont-principles", title:"The Belmont principles", aka:["Belmont Report","respect for persons","beneficence","justice","TCPS 2 core principles"], tags:["research","ethics"],
    summary:"Respect for persons, beneficence and justice: the three principles of the 1979 Belmont Report, and how they’re applied.",
    levels:{
     starter:[
      "The **Belmont Report** (1979) boiled research ethics down to three principles:",
      {list:[
        "**Respect for persons:** let people decide for themselves, and protect people who can’t fully decide.",
        "**Beneficence:** don’t harm; make benefits as large and risks as small as possible.",
        "**Justice:** share the burdens and benefits of research fairly, and don’t pick people just because they’re easy to recruit or pressure."
      ]},
      "Think of them as three questions for any study: Did people choose freely? Is the risk worth it? Is it fair who takes part and who benefits?",
      {key:"Most national ethics rules, in many countries, express some version of these three ideas."},
      "Example: testing a reading app with schoolchildren. Respect for persons means asking parents and children; beneficence means checking extra screen time won’t harm sleep; justice means not testing it only in the poorest schools while richer schools get the finished product."
     ],
     builder:[
      "Each principle has a practical application in the report:",
      {table:[
        ["Principle","Application","In practice"],
        ["Respect for persons","Informed consent","Information, comprehension, voluntariness"],
        ["Beneficence","Assessment of risks and benefits","Systematic weighing; minimise risk"],
        ["Justice","Selection of subjects","Fair recruitment; no exploiting convenient groups"]
      ]},
      "Respect for persons rests on two convictions: people should be treated as autonomous agents, and people with diminished autonomy are entitled to protection. Beneficence is framed as an obligation with two rules: do not harm, and maximise possible benefits while minimising possible harms. Justice concerns who receives the benefits and who bears the burdens.",
      "Other countries use close cousins. Canada’s TCPS 2 (2022) has three core principles: respect for persons, concern for welfare, and justice. Australia’s National Statement (2023) rests on research merit and integrity, justice, beneficence and respect.",
      "Committees read a protocol with the three principles in mind: consent documents against respect for persons, the risk–benefit section against beneficence, and recruitment plans against justice. A study can pass two and fail the third, for example a well-consented, low-risk study that recruits only from a group already overburdened by research.",
      "The principles also guide researchers after approval: if a participant becomes distressed, beneficence comes before finishing the interview."
     ],
     pro:[
      "The report’s full title is *The Belmont Report: Ethical Principles and Guidelines for the Protection of Human Subjects of Research*, published on 18 April 1979 by the National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research, which the National Research Act of 1974 created. It names the study at Tuskegee as an example of injustice: disadvantaged, rural Black men were used to study a disease’s untreated course, and effective treatment was withheld.",
      "The principles can pull against each other. Respect for persons suggests letting a competent adult accept high risk; beneficence may say no. Justice once meant shielding groups from research; it now also means not excluding them from its benefits (for example, children and pregnant people need evidence about the medicines they take). Committees weigh these tensions case by case.",
      "Belmont’s principles underpin the US Common Rule (45 CFR 46), the regulation that puts them into practice for federally funded research. Critics note its focus on individuals; community-level concerns, such as research with Indigenous peoples, are addressed more directly by later frameworks such as the CARE principles and national guidelines for research with Indigenous communities.",
      "Belmont also separates research from practice: routine care meant to benefit one patient isn’t research, but trying an approach in order to produce generalisable knowledge is, even when the same clinician does both."
     ]
    },
    related:["ethics-history","consent-process","ethics-review"],
    sources:[{t:"The Belmont Report (1979), full text (copy hosted by Valdosta State University)", url:"https://www.valdosta.edu/academics/graduate-school/documents/the-belmont-report.pdf"},{t:"Government of Canada: TCPS 2 (2022), Chapter 1: Ethics Framework", url:"https://ethics.gc.ca/eng/tcps2-eptc2_2022_chapter1-chapitre1.html"}], checked:"2026-11"},

   {id:"consent-process", title:"Informed consent in practice", aka:["consent form","information sheet","participant information","assent","debriefing","broad consent"], tags:["research","ethics","consent"],
    summary:"What people must be told, how to make consent real and ongoing, and special cases such as children, recording, deception and future use of data.",
    levels:{
     starter:[
      "[[informed-consent|Informed consent]] means a person freely agrees to take part after understanding what it involves. Three things must all be true: they got the **information**, they **understood** it, and they chose **voluntarily**.",
      "A good information sheet says, in plain words: why the study exists, what you’ll do and for how long, possible risks and discomforts, any benefits, who will see your information, that you can say no or stop at any time without penalty, and whom to contact.",
      "Consent is ongoing. People can change their minds, so researchers remind them and check in.",
      {key:"A signature records a decision. It doesn’t replace understanding, and it never takes away the right to stop."},
      "The format fits the study: a short anonymous survey might show one page of information and an “I agree” button; a long interview study might use an information sheet, a conversation, a signed form and reminders at each meeting."
     ],
     builder:[
      "The revised US Common Rule (45 CFR 46.116) is a detailed example. Consent must start with a concise summary of key information, be in language people understand, and be sought in circumstances that minimise coercion or undue influence. Its basic elements cover:",
      {list:[
        "that it is research, its purposes, duration and procedures (and which are experimental);",
        "foreseeable risks or discomforts; expected benefits; alternatives (for treatment studies);",
        "how confidentiality will be maintained; compensation for injury (for riskier studies);",
        "contacts for questions and rights; that participation is voluntary and withdrawal carries no penalty;",
        "whether identifiable data or samples might be used for future research after identifiers are removed."
      ]},
      "Special cases: children give **[[assent]]** alongside a parent’s permission; audio and video recording need separate permission; deception needs committee approval and **[[debriefing]]**; and people must be told what happens to their data if they withdraw, and until when that’s possible.",
      "Write information sheets most people can read easily: short sentences, everyday words, and headings such as “What will I be asked to do?” and “What happens to my information?”. Test them on someone outside your field, and translate them when participants read other languages, checking the translation with a fluent reader."
     ],
     pro:[
      "**Broad consent** lets people agree to unspecified future research on stored data or samples, within described limits. The US Common Rule allows it for secondary research on identifiable information and biospecimens, and the 2024 Declaration of Helsinki also addresses consent for future use. Cases such as the Havasupai Tribe’s, whose members’ blood samples were used for studies beyond what they understood they had agreed to, show why the scope of consent matters.",
      "Consent formats vary with risk and culture: online click-through for anonymous surveys; recorded verbal consent where literacy is low or signing documents is risky; community consultation alongside individual consent where community leaders are expected to be involved, which never replaces each person’s own decision.",
      "Waivers exist: committees can sometimes approve research without individual consent (for example, some studies of existing records) when consent is impracticable, risk is minimal and rights are protected. The researcher can’t decide this alone.",
      "Ethical consent to take part is separate from the legal basis for processing personal data under laws like the GDPR, which might be consent or another basis such as public task. Information sheets often need to cover both.",
      "Re-consent is needed when a study changes in ways that matter to participants, such as new procedures, new risks or new uses of their data."
     ]
    },
    related:["belmont-principles","ethics-review","anonymisation","research-ethics"],
    sources:[{t:"45 CFR 46.116, General requirements for informed consent (US Government Publishing Office)", url:"https://www.govinfo.gov/content/pkg/CFR-2019-title45-vol1/pdf/CFR-2019-title45-vol1-sec46-116.pdf"},{t:"The Belmont Report (1979), full text (copy hosted by Valdosta State University)", url:"https://www.valdosta.edu/academics/graduate-school/documents/the-belmont-report.pdf"}], checked:"2026-11"},

   {id:"ethics-review", title:"Ethics review: IRBs, RECs and other committees", aka:["IRB","REC","HREC","REB","ethics committee","institutional review board","research ethics board"], tags:["research","ethics"],
    summary:"Who reviews research with people in different countries, what they check, and when you need approval.",
    levels:{
     starter:[
      "Before research with people starts, an independent group usually has to approve it. The group checks that risks are reasonable, consent is real, privacy is protected and the study is worth doing.",
      "Names differ: an **institutional review board (IRB)** in the United States, a **research ethics committee (REC)** in the UK, a **human research ethics committee (HREC)** in Australia, a **research ethics board (REB)** in Canada, an **ethics committee (EC)** in India and many other places.",
      "Students’ projects usually need approval too, often from a university or department committee.",
      {key:"Get approval before you approach anyone. The committee, not the researcher, decides whether a project needs review."},
      "Committees want a clear plan, plain-language documents for participants, an honest account of risks, and how you’ll store and protect data. A good application answers one question well: what could go wrong for participants, and what have I done about it?"
     ],
     builder:[
      {table:[
        ["Place","Body","Guidance"],
        ["United States","IRB","Common Rule (45 CFR 46)"],
        ["United Kingdom","REC (HRA Research Ethics Service for health and social care; university RECs)","HRA and institutional policies"],
        ["Canada","REB","TCPS 2 (2022)"],
        ["Australia","HREC","National Statement 2023 (in effect from 1 January 2024)"],
        ["India","EC","ICMR National Ethical Guidelines (2017)"]
      ]},
      "Committees look at the protocol, recruitment materials, information sheets, consent forms, data management and interview guides or questionnaires. They include members from outside the research team, and often lay members.",
      "Many systems scale review to risk: US rules have exempt, expedited and full-board review; other systems have proportionate or low-risk review routes. What counts as research also varies: service evaluation, clinical audit and journalism may fall outside, but the line is drawn by the institution or committee.",
      "A typical sequence: prepare documents, submit, receive questions or requested changes, revise, then approval with a reference number. Low-risk applications may take days or weeks; complex ones, months, so build review into your timeline. If anything changes later (new questions, a new site, a different storage service), submit an amendment before making the change.",
      "If you have no institution (for example, an independent researcher or community group), some countries have independent or commercial committees; otherwise, follow published national guidance and seek advice from a partner organisation."
     ],
     pro:[
      "Multi-site and international studies may need approval in each country or institution, though many systems now allow a single review for multi-site domestic studies. Local review matters because consent norms, laws and risks differ.",
      "Ethics approval isn’t the only permission. Health research may also need governance approvals, data access agreements, permission from organisations (schools, companies) and, for clinical trials, regulatory approval. In some communities, permission from community bodies or Indigenous governance structures is expected.",
      "Approval is ongoing: researchers must report changes (amendments), serious adverse events and unexpected problems, and some studies need annual renewal. Collecting data before approval can make it unusable, and journals often ask for the approval reference.",
      "A practical tip: committees mostly return applications for unclear writing, not ethics. Plain-language participant documents and a clear data management plan speed things up.",
      "Other examples: New Zealand’s Health and Disability Ethics Committees (HDECs) review many health studies; South Africa registers research ethics committees with its National Health Research Ethics Council; in the EU, clinical trials need an ethics committee’s assessment under the Clinical Trials Regulation. Check current names and rules for your country.",
      "Review bodies can be wrong or inconsistent too. Approval is a minimum: researchers keep a duty to act ethically when situations arise that no committee foresaw."
     ]
    },
    related:["belmont-principles","consent-process","research-ethics","ethics-history"],
    sources:[{t:"Health Research Authority: Research Ethics Service and Research Ethics Committees", url:"https://www.hra.nhs.uk/about-us/committees-and-services/res-and-recs/"},{t:"NHMRC: National Statement 2023 update FAQs", url:"https://nhmrc.gov.au/research-policy/ethics/national-statement-ethical-conduct-human-research/2023-update-faqs"},{t:"ICMR: National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017)", url:"https://ethics.ncdirindia.org/asset/pdf/ICMR_National_Ethical_Guidelines.pdf"}], checked:"2026-11"},

   {id:"anonymisation", title:"Anonymisation and pseudonymisation", aka:["anonymization","pseudonymization","de-identification","re-identification","confidentiality vs anonymity"], tags:["research","privacy","data"],
    summary:"The difference between confidential, anonymous, pseudonymised and anonymised data, and how to reduce the risk of re-identification.",
    levels:{
     starter:[
      "Four words, four different promises:",
      {list:[
        "**Confidential:** the researcher knows who said what, but won’t tell.",
        "**[[anonymity|Anonymous]]:** nobody, not even the researcher, can tell who said what.",
        "**[[pseudonymisation|Pseudonymised]]:** names swapped for codes, with a key kept separately.",
        "**[[anonymisation-term|Anonymised]]:** changed so that no one can reasonably identify anyone."
      ]},
      "Removing names isn’t enough. Age, job and town together can point to one person, like a jigsaw with only one picture that fits.",
      {key:"Under the GDPR, pseudonymised data are still personal data for a researcher who holds the key. Only truly anonymised data fall outside it."},
      "Example: “a 34-year-old nurse in a small town who recently had twins” may be the only such person there. “A health worker in her thirties in a rural area” keeps the useful meaning and protects her.",
      "Promise only what you can deliver. If you meet people face to face, you can promise confidentiality, not anonymity."
     ],
     builder:[
      "The GDPR defines pseudonymisation (Article 4(5)) as processing personal data so they can no longer be attributed to a specific person without additional information, kept separately and protected. Recital 26 says pseudonymised data that could be re-linked using additional information remain personal data, and that to judge identifiability you consider all means reasonably likely to be used, including singling someone out, taking into account cost, time and technology.",
      {h:"Techniques"},
      {list:[
        "Remove direct identifiers (names, contact details, ID numbers, faces, voices).",
        "Generalise indirect ones: exact age to age band, town to region, job to job group, dates to month or year.",
        "Suppress small counts in tables; avoid “the only…” descriptions.",
        "In qualitative data, change or remove identifying details in stories and quotes, and agree with participants how they’ll be described.",
        "Strip metadata (for example, location data in photos) before sharing files."
      ]},
      "Re-identification is a real risk. In 2006 New York Times journalists identified a user from search logs that AOL had released with names replaced by numbers.",
      "Keep two files apart: the de-identified research data most of the team works with, and the key, held by one or two named people in a more secure place. Record what you changed in a de-identification log so others understand the data and the same rules are applied consistently."
     ],
     pro:[
      "Anonymisation is judged in context. The same dataset may be effectively anonymous for one recipient under a strict agreement and identifiable for another who holds linked data. The EU Court of Justice took the same view of pseudonymised data in 2025 (EDPS v SRB): data that are personal for the controller holding the key may not be personal for a recipient with no reasonable means of re-identification. Guidance from data protection regulators, such as the UK ICO, asks you to consider who could access the data, what other information they might have and how motivated they might be.",
      "There’s always a trade-off between privacy and usefulness: coarser data protect people but can hide the patterns you study. Options beyond simple removal include controlled access (secure data services, trusted research environments), synthetic data and statistical disclosure control.",
      "Keep the pseudonymisation key encrypted, separate from the data, and accessible to as few people as possible. Plan when it will be destroyed; until then, the data stay personal data with all the obligations that brings.",
      "Never promise “anonymous” in consent documents unless it is true from the start. Promise confidentiality, then describe exactly how data will be de-identified and shared.",
      "Outputs carry risk too: tables, maps and charts can disclose individuals when categories are small. Agencies use rules such as minimum cell counts and rounding; ask your data service or a statistician which apply."
     ]
    },
    related:["research-data-protection","data-management-plan","consent-process","data-protection-laws"],
    sources:[{t:"UKRI Medical Research Council: GDPR guidance note on identifiability, anonymisation and pseudonymisation", url:"https://www.ukri.org/wp-content/uploads/2021/11/MRC-291121-GDPR-Identifiability-Anonymisation-Pseudonymisation.pdf"},{t:"GDPR Article 9 (legislation.gov.uk copy of the adopted text)", url:"https://www.legislation.gov.uk/eur/2016/679/article/9/adopted?view=plain"}], checked:"2026-11"},

   {id:"research-data-protection", title:"Data protection in research", aka:["GDPR research","special category data","sensitive data","HIPAA","data minimisation"], tags:["research","privacy","law"],
    summary:"How data protection principles and special category rules apply to research, with laws from several countries as examples.",
    levels:{
     starter:[
      "When research involves information about people, data protection laws usually apply. They set principles such as: collect only what you need, tell people what you’ll do with it, keep it secure, and don’t keep it forever.",
      "Some information is extra sensitive: health, religion, ethnicity, political opinions, sexual orientation and similar. The GDPR calls these **[[special-category-data|special category data]]** and allows their use only under specific conditions, including research with safeguards.",
      "Laws differ by country, and your institution may add its own rules.",
      {key:"Ask early: what personal data do I really need, where will it be stored, who can see it, and when will I delete it?"},
      "Example: a study of exercise habits probably doesn’t need participants’ full date of birth, home address or employer. Leaving them out protects people and leaves less data to secure."
     ],
     builder:[
      "GDPR Article 5 principles applied to research: lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; accountability. Research gets some flexibility (for example, on further use and longer storage) when safeguards such as pseudonymisation are in place.",
      "Article 9 lists special categories: racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data used to identify someone, health, and sex life or sexual orientation. Processing is prohibited unless a condition applies; one covers scientific research with appropriate safeguards based on law.",
      {table:[
        ["Place","Example law"],
        ["EU","GDPR"],
        ["UK","UK GDPR and Data Protection Act 2018"],
        ["United States","No single general law; HIPAA Privacy Rule for health information held by covered entities; state laws"],
        ["Brazil · South Africa","LGPD · POPIA"],
        ["India · Japan · Australia","DPDP Act 2023 · APPI · Privacy Act 1988"]
      ]},
      "Higher-risk processing, such as large-scale health data or new technologies, may need a data protection impact assessment (DPIA) before you start. Participants must also receive a privacy notice: who controls the data, the lawful basis, who receives it, how long it is kept and their rights. It is often combined with the information sheet."
     ],
     pro:[
      "Ethical consent and the legal basis for processing are separate questions. Universities in some countries rely on bases such as public task for research data while still obtaining consent to participate; elsewhere consent is the legal basis. Your data protection officer decides.",
      "Cross-border transfers (including cloud services and AI tools hosted abroad) may need specific safeguards under laws such as the GDPR. Check where your survey platform, transcription service or storage provider holds data.",
      "The US HIPAA Privacy Rule offers two de-identification routes: removing a specified list of identifiers (Safe Harbor) or a qualified expert’s determination of very small risk. These are US-specific; don’t assume they satisfy other laws.",
      "Criminal-offence data have their own rules under the GDPR (Article 10). Laws change: check your regulator’s current guidance and see {{data-protection-laws}} for rights and more countries.",
      "Research exemptions differ: the GDPR lets EU countries (and the UK under its own version) limit some rights, such as access or erasure, where they would seriously impair research, with safeguards. Details therefore vary between countries that share the same regulation.",
      "Security incidents count too: losing an unencrypted laptop with participant data may be a reportable personal data breach. Know your institution’s reporting route before anything goes wrong."
     ]
    },
    related:["anonymisation","data-management-plan","data-protection-laws","consent-process"],
    sources:[{t:"GDPR Article 9 (legislation.gov.uk copy of the adopted text)", url:"https://www.legislation.gov.uk/eur/2016/679/article/9/adopted?view=plain"},{t:"UKRI Medical Research Council: identifiability, anonymisation and pseudonymisation", url:"https://www.ukri.org/wp-content/uploads/2021/11/MRC-291121-GDPR-Identifiability-Anonymisation-Pseudonymisation.pdf"}], checked:"2026-11"},

   {id:"data-management-plan", title:"Data management plans and FAIR data", aka:["DMP","research data management","RDM","FAIR principles","CARE principles","data sharing"], tags:["research","data"],
    summary:"How to plan the life of your research data, what funders ask for, and what the FAIR principles mean.",
    levels:{
     starter:[
      "A **[[data-management-plan-term|data management plan]]** (DMP) is a short document, written before a project starts, saying what data you’ll collect and how you’ll look after it: file formats, naming and folders, documentation, storage and backup, security, what you’ll share, and when you’ll delete or archive it.",
      "It’s like a packing list for a long trip. Writing it takes an hour; not having one can cost weeks when files go missing or a funder asks where the data are.",
      "**[[fair-principles|FAIR]]** data are **Findable, Accessible, Interoperable and Reusable**: others (and your future self) can find them, get them, combine them and understand them.",
      {key:"FAIR doesn’t mean open. Sensitive data can be FAIR with access controls."},
      "Good everyday habits support any plan: consistent file names with dates, one master copy of the data, a README explaining each file, and backups in more than one place."
     ],
     builder:[
      "Typical DMP sections: data description (types, formats, volume); documentation and metadata (codebook, README); ethics and legal issues (consent for sharing, anonymisation, licences); storage, backup and security during the project; selection, preservation and sharing (which repository, which licence, any embargo); responsibilities and resources.",
      "Funders increasingly require DMPs. Two examples: the US NIH has required a data management and sharing plan for applications generating scientific data since 25 January 2023 (with an updated plan format for application due dates from 25 May 2026), and Horizon Europe projects must submit a DMP as a deliverable within their first six months. Free tools such as DMPonline and DMPTool provide funder templates.",
      {table:[
        ["FAIR","Practical step"],
        ["Findable","Deposit in a repository that gives a DOI; write rich metadata"],
        ["Accessible","Standard download or request route; metadata stay public"],
        ["Interoperable","Open, common formats (CSV, plain text); standard vocabularies"],
        ["Reusable","Licence (for example CC BY or CC0), README, provenance"]
      ]},
      "Treat the DMP as a working document: update it when plans change and share it with the team, so everyone knows where files live and who may access them. Many university libraries have research data specialists who will review a DMP for free; ask well before a funding deadline."
     ],
     pro:[
      "The principles were published by Mark Wilkinson and many co-authors as “The FAIR Guiding Principles for scientific data management and stewardship” in *Scientific Data* (2016, article 160018). Their distinctive emphasis is on **machine-actionability**: helping computers find and use data automatically, not only humans.",
      "Europe’s research integrity code (ALLEA, 2023) asks that data be “as open as possible, as closed as necessary”, in line with FAIR. For qualitative or sensitive data, options include depositing in a controlled-access archive, sharing only metadata and documentation, or sharing de-identified extracts that consent allows.",
      "The **CARE principles** for Indigenous data governance (Collective benefit, Authority to control, Responsibility, Ethics) complement FAIR by focusing on people and purpose: communities should benefit from, and keep authority over, data about them.",
      "Repositories range from general ones (for example Zenodo, Figshare, OSF, Dryad) to subject archives (for example national social science data services) and institutional repositories. Choose one that issues persistent identifiers and commits to long-term preservation, and check what your funder or journal requires.",
      "Licences: CC BY requires attribution; CC0 waives rights as far as the law allows and is common for data; some data need access agreements instead of an open licence."
     ]
    },
    related:["anonymisation","research-data-protection","research-integrity"],
    sources:[{t:"Dataverse: The FAIR Guiding Principles for scientific data management and stewardship (Wilkinson et al., 2016)", url:"https://dataverse.org/publications/fair-guiding-principles-scientific-data-management-and-stewardship"},{t:"Emory University Libraries: NIH Data Management and Sharing Plans", url:"https://researchdata.emory.edu/nih-dmsp"},{t:"ALLEA: The European Code of Conduct for Research Integrity, revised edition 2023", url:"https://allea.org/wp-content/uploads/2023/06/European-Code-of-Conduct-Revised-Edition-2023.pdf"}], checked:"2026-11"},

   {id:"research-integrity", title:"Research integrity and misconduct", aka:["FFP","fabrication","falsification","plagiarism","research misconduct","ALLEA code"], tags:["research","integrity"],
    summary:"The principles of honest research, the definitions of fabrication, falsification and plagiarism, and what isn’t misconduct.",
    levels:{
     starter:[
      "**Research integrity** means doing and reporting research honestly, so others can trust and build on it.",
      "The most serious breaches are known as **FFP**:",
      {list:[
        "**[[fabrication|Fabrication]]:** making up data or results.",
        "**[[falsification|Falsification]]:** changing, leaving out or manipulating data, materials or images so the record is misleading.",
        "**Plagiarism:** using others’ ideas or words without credit."
      ]},
      "Honest mistakes aren’t misconduct. What matters is correcting them openly.",
      {key:"Keep your raw data, notes and code. They’re your best evidence that your work is honest."},
      "Example: Mei’s survey results don’t support her hypothesis. Reporting them honestly, however disappointing, is integrity. Quietly dropping the responses that don’t fit would be falsification.",
      "Integrity also means giving credit fairly, declaring conflicts of interest and being open about methods, including any AI tools used."
     ],
     builder:[
      "The US Office of Research Integrity defines research misconduct as fabrication, falsification or plagiarism in proposing, performing or reviewing research, or in reporting results. It “does not include honest error or differences of opinion”.",
      "Europe’s code of conduct (ALLEA, revised 2023) rests on four principles: reliability, honesty, respect and accountability. Beyond FFP, it lists other unacceptable practices, including:",
      {list:[
        "misusing statistics, for example to suggest significance inappropriately;",
        "manipulating authorship or denigrating others’ roles;",
        "citing selectively or inaccurately;",
        "hiding the use of AI or automated tools in creating content or drafting publications;",
        "splitting results into many papers just to increase the count (“salami” publication)."
      ]},
      "Errors are fixed through corrections; serious problems through retractions (see {{retractions}}). A retraction isn’t always a sign of misconduct: honest researchers retract papers when they find fatal errors.",
      "Why problems happen: pressure to publish, competition for jobs and funding, and weak supervision create temptations. Good systems make honest work easier: clear records, shared data and code, a second person checking key analyses, and a culture where mistakes can be admitted without shame.",
      "Many countries and institutions have their own integrity codes or concordats, such as the UK’s Concordat to Support Research Integrity or national codes in Australia, Canada and elsewhere. They differ in detail but share the FFP core."
     ],
     pro:[
      "Institutions investigate allegations through formal procedures with fairness to both whistle-blowers and the accused. In the US, a finding of misconduct for federally funded research generally requires a significant departure from accepted practice, committed intentionally, knowingly or recklessly, proven by a preponderance of evidence; other countries use different processes.",
      "Common forms of falsification today include image manipulation (duplicated or spliced images), dropping data points or participants without pre-set rules, and misreporting methods. Journals increasingly screen images and ask for raw data.",
      "Integrity also covers the research environment: supervision, training, data stewardship and fair assessment. Systems that reward only novel positive results encourage the questionable practices described in {{questionable-research-practices}}.",
      "If you suspect misconduct, most institutions have a research integrity officer or similar contact; national bodies exist in many countries. Raise concerns factually, keep records and avoid public accusations before the facts are established.",
      "Consequences of a misconduct finding can include retractions, loss of funding, bans on receiving grants and loss of employment, depending on the country and institution.",
      "Watch for [[paper-mill|paper mills]] (businesses selling fabricated or ghost-written papers and authorship slots) and citation manipulation. Publishers and integrity sleuths increasingly detect them, and buying authorship or papers is treated as serious misconduct."
     ]
    },
    related:["questionable-research-practices","authorship-credit","data-management-plan","ai-research-policies"],
    sources:[{t:"US Office of Research Integrity: Definition of research misconduct", url:"https://ori.hhs.gov/definition-misconduct"},{t:"ALLEA: The European Code of Conduct for Research Integrity, revised edition 2023", url:"https://allea.org/wp-content/uploads/2023/06/European-Code-of-Conduct-Revised-Edition-2023.pdf"}], checked:"2026-11"},

   {id:"questionable-research-practices", title:"Questionable research practices and how to prevent them", aka:["QRPs","p-hacking","HARKing","selective reporting","publication bias","preregistration","registered reports"], tags:["research","integrity","statistics"],
    summary:"Grey-zone practices such as p-hacking and HARKing, why they mislead, and how preregistration and registered reports help.",
    levels:{
     starter:[
      "Some practices aren’t outright fraud but still make results look stronger than they are:",
      {list:[
        "**[[p-hacking|P-hacking]]:** trying many analyses until one gives a “significant” result, and reporting only that one.",
        "**[[harking|HARKing]]:** pretending a hypothesis was made before seeing the results.",
        "**Selective reporting:** publishing only what worked."
      ]},
      "It’s like throwing darts at a wall, then drawing the target around wherever the dart landed.",
      "The fix is to decide the plan in advance and write it down publicly: **[[preregistration]]**.",
      {key:"Exploring data is fine. Presenting exploration as if it were a planned test is the problem."},
      "Example: a study reports that a new teaching method helps only left-handed students tested on Tuesdays. If that was one result out of dozens checked, it is very likely chance. If it was predicted and registered in advance, it deserves a closer look."
     ],
     builder:[
      "With one test at p < 0.05 and no real effect, a false positive happens about 5% of the time. With many tests, the chance of at least one rises fast: for 20 independent tests it’s 1 − 0.95²⁰ ≈ 64%. Flexible choices (outcomes, exclusions, control variables, when to stop collecting data) act like extra tests, as Simmons, Nelson and Simonsohn showed in 2011 (“False-positive psychology”).",
      "Norbert Kerr named HARKing in 1998 (*Personality and Social Psychology Review*, vol. 2, no. 3) as presenting a hypothesis formed after the results as if it had been predicted.",
      "Prevention:",
      {list:[
        "**Preregistration:** a time-stamped public plan (hypotheses, design, sample size, analysis, exclusion rules), for example on OSF Registries, AsPredicted or, for trials, a clinical trial registry.",
        "**[[registered-report|Registered reports]]:** peer review of the plan before data collection, with in-principle acceptance regardless of results.",
        "**Transparency:** report all measures and conditions, share data and code, label exploratory analyses."
      ]},
      "Related practices: optional stopping (checking results as data arrive and stopping once p < 0.05), rounding p-values down (reporting p = 0.054 as “p < 0.05”), dropping conditions or measures that didn’t work, and citing only supportive studies.",
      "None of these require bad intent. Pressure to publish and the human tendency to see patterns we hoped for are enough, which is why safeguards beat good intentions."
     ],
     pro:[
      "Across a literature, selective publication produces **publication bias**: effects look larger and more consistent than they are. Meta-analysts use tools such as funnel plots to look for it, but prevention is better than detection.",
      "Preregistration isn’t a straitjacket. Deviations are often necessary (a measure fails, recruitment falls short) and are fine when reported with reasons. A vague preregistration, though, leaves room for flexibility; good ones specify the exact model, variables and exclusion rules.",
      "In registered reports, Stage 1 review covers the question, rationale and methods; in-principle acceptance commits the journal to publish if the protocol is followed; Stage 2 decisions aren’t based on the importance or novelty of the results. This also helps null results reach print.",
      "Qualitative research has its own transparency practices (audit trails, [[reflexivity]], clear accounts of analysis) rather than hypothesis preregistration, although some qualitative researchers preregister study plans too.",
      "Statistical habits help as well: correcting for multiple comparisons, reporting [[effect-size|effect sizes]] and [[confidence-interval|confidence intervals]] rather than only p-values, and replicating important findings. The American Statistical Association’s 2016 statement on p-values warns that scientific conclusions shouldn’t rest only on whether a p-value passes a threshold."
     ]
    },
    related:["research-integrity","authorship-credit","data-management-plan"],
    sources:[{t:"Cambridge University Press: Registered Reports", url:"https://www.cambridge.org/core/services/open-research-initiatives/registered-reports"},{t:"PubMed: Kerr (1998), HARKing: hypothesizing after the results are known", url:"https://pubmed.ncbi.nlm.nih.gov/15647155/"},{t:"ALLEA: The European Code of Conduct for Research Integrity, revised edition 2023", url:"https://allea.org/wp-content/uploads/2023/06/European-Code-of-Conduct-Revised-Edition-2023.pdf"}], checked:"2026-11"},

   {id:"authorship-credit", title:"Authorship, CRediT and conflicts of interest", aka:["ICMJE criteria","CRediT","contributor roles","gift authorship","ghost authorship","conflict of interest","competing interests"], tags:["research","integrity","publishing"],
    summary:"Who should be an author, how to describe contributions with CRediT’s 14 roles, and how to declare conflicts of interest.",
    levels:{
     starter:[
      "Being an **[[authorship|author]]** of a paper means two things: you get credit, and you take responsibility for the work.",
      "A common rule (from the ICMJE, medical journal editors) is that authors must have made a real contribution to the work, helped write or critically revise it, approved the final version, and agreed to answer for it. Others who helped are thanked in the acknowledgements.",
      "**[[credit-taxonomy|CRediT]]** is a list of 14 roles (such as Investigation, Formal analysis, Writing – original draft) used to say who did what.",
      "A **[[conflict-of-interest|conflict of interest]]** is anything that could sway your judgement, like money from a company whose product you study. Declare it.",
      {key:"Talk about authorship at the start of a project, not at the end."},
      "Example: a student who ran and analysed all the interviews should be an author on the paper about them; the person who lent a meeting room should be thanked, not listed."
     ],
     builder:[
      "The ICMJE’s four criteria, all required: (1) substantial contributions to conception or design, or to acquisition, analysis or interpretation of data; (2) drafting or critically revising for important intellectual content; (3) final approval of the published version; (4) agreement to be accountable for all aspects of the work.",
      "CRediT’s 14 roles: Conceptualization; Data curation; Formal analysis; Funding acquisition; Investigation; Methodology; Project administration; Resources; Software; Supervision; Validation; Visualization; Writing – original draft; Writing – review & editing. It became an ANSI/NISO standard (Z39.104-2022). CRediT describes contributions; it doesn’t decide who qualifies as an author.",
      "Problems to avoid: **gift or guest authorship** (adding non-contributors, often senior people), **ghost authorship** (omitting people who did substantial work, such as paid writers), and **coercive authorship** (demanding a place because of power).",
      "Writing a CRediT statement: list each contributor with their roles, optionally with a degree (lead, equal or supporting). Some journals collect roles in the submission system and print them automatically. Acknowledgements name people who helped but aren’t authors, with their permission, and say how they helped, for example “We thank Kofi Mensah for translating the questionnaire.”"
     ],
     pro:[
      "Order conventions differ by field and country: first author as main contributor and last as senior author in many lab sciences; alphabetical order common in economics and mathematics; equal-contribution notes where needed. Write the agreement down and revisit it if roles change.",
      "Conflicts of interest can be financial (grants, salaries, shares, patents, consulting, speaker fees) or non-financial (personal relationships, academic rivalry, strongly held beliefs). Disclosure lets readers judge; it doesn’t make the conflict disappear, so some situations also need management (for example, an independent analyst). The ICMJE offers a standard disclosure form used by many journals.",
      "Reviewers and editors have conflicts too and should decline or declare them. Funders’ roles should be described: did they influence design, analysis or the decision to publish?",
      "AI tools can’t meet authorship criteria because they can’t be accountable (see {{ai-research-policies}}).",
      "Disputes: many institutions have procedures for authorship disagreements, and COPE publishes flowcharts editors use. Changing the author list after submission usually needs every author’s agreement and the editor’s approval.",
      "Some fields with very large teams (for example particle physics or genomics consortia) list hundreds of authors or a group name; CRediT and contribution statements help readers see who did what in such teams."
     ]
    },
    related:["research-integrity","ai-research-policies","questionable-research-practices"],
    sources:[{t:"ICMJE: Defining the Role of Authors and Contributors", url:"https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html"},{t:"NISO: CRediT role descriptors (ANSI/NISO Z39.104-2022)", url:"https://credit.niso.org/contributor-roles-defined/"},{t:"ALLEA: The European Code of Conduct for Research Integrity, revised edition 2023 (authorship section)", url:"https://allea.org/wp-content/uploads/2023/06/European-Code-of-Conduct-Revised-Edition-2023.pdf"}], checked:"2026-11"},

   {id:"ai-research-policies", title:"AI in research: policies and good practice", aka:["COPE AI","ICMJE AI","AI disclosure","AI authorship","AI peer review","hallucinated citations"], tags:["research","ai","integrity","publishing"],
    summary:"What COPE, the ICMJE, publishers and funders say about AI tools in research, and a practical routine for using them honestly.",
    levels:{
     starter:[
      "AI tools can help with research tasks like brainstorming, editing language or writing code, but the rules are clear on a few points:",
      {list:[
        "**AI can’t be an author.** It can’t take responsibility.",
        "**Disclose** which tool you used and what for.",
        "**Check everything**, especially references: AI can invent them.",
        "**Don’t upload** participant data, confidential documents or manuscripts you’re reviewing to tools that aren’t approved."
      ]},
      "Rules differ between courses, universities, funders and journals, and they change. Always check the ones that apply to you.",
      {key:"You can use AI as a tool. You stay the author and the one responsible."},
      "Example: Ana asks a chatbot to suggest clearer wording for her abstract. She checks every change, keeps the meaning her own, and adds a one-line note naming the tool and what it did. In many settings that is an acceptable use, if her journal or course allows it."
     ],
     builder:[
      "**COPE** (February 2023): AI tools can’t meet authorship requirements, as they can’t take responsibility, declare conflicts of interest or manage copyright; authors must disclose AI use in writing, images or data work (for example, in the methods) and are fully responsible for the content.",
      "**ICMJE Recommendations** (updated since 2023): authors should disclose AI-assisted technology use at submission and in the work (writing help in the acknowledgements; data, analysis or figure use in the methods); chatbots shouldn’t be listed as authors or cited as authors; reviewers should follow the journal’s AI policy or ask permission first, protect confidentiality (which may rule out uploading the manuscript) and disclose any AI use.",
      "**ALLEA code** (2023): hiding the use of AI or automated tools is an unacceptable practice; methods should report AI use; reviewers should disclose their AI use.",
      "**Funders:** in June 2023 (notice NOT-OD-23-149) the US NIH prohibited its peer reviewers from using generative AI to analyse or write critiques of applications, citing confidentiality.",
      "**Publishers** (for example Elsevier, Springer Nature, Wiley, Taylor & Francis) published policies from 2023 that agree on no AI authorship, disclosure and reviewer confidentiality, but differ on details such as AI-generated images and which minor uses need disclosing.",
      "Policies are dated documents that change; note which version you followed."
     ],
     pro:[
      "A defensible routine: (1) check the applicable policies and note their dates; (2) keep a log of AI use (tool, version, date, purpose, prompts that mattered); (3) never input personal, confidential or unpublished third-party material into tools without approval, contracts and ethics clearance; (4) verify every factual claim and reference against originals; (5) test AI-written code on known cases; (6) write a disclosure; (7) accept responsibility for the result.",
      "Reproducibility: model outputs vary between runs and versions. If AI was part of a method (for example, coding text), report the model, version, date, prompts and settings, validate against human coding, and keep outputs.",
      "AI-generated images raise integrity and copyright questions; some journals ban them in research figures except where AI is the subject of the research. AI-text detectors give false positives and shouldn’t be used as sole evidence of misconduct.",
      "Citing AI: style guides treat AI tools as software authored by the company. See the APA example in the Citation Lab.",
      "Institutional AI tools: some universities provide AI services under agreements that keep data inside the organisation and out of model training. These may be approved for some kinds of data, but using them for participant data still depends on consent terms and ethics approval."
     ]
    },
    related:["authorship-credit","research-integrity","ai-chatbot-accuracy","ai-generated-content","ai-reading-tools"],
    sources:[{t:"COPE: Authorship and AI tools (position statement)", url:"https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools"},{t:"ICMJE: AI use by reviewers", url:"https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-reviewers.html"},{t:"NIH notice NOT-OD-23-149: generative AI prohibited in NIH peer review", url:"https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-149.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"ethics-review-board", term:"Research ethics committee or board", def:"An independent group that reviews research with people before it starts. Called an IRB in the US, a REC in the UK, an HREC in Australia, a REB in Canada and an ethics committee in many countries.", codex:"ethics-review"},
   {id:"vulnerable-participants", term:"Vulnerable participants", def:"People who may be less able to protect their own interests in research, or who face extra risk from it, such as children or people in a dependent relationship with the researcher. Vulnerability is often about the situation, not the person.", codex:"consent-process"},
   {id:"anonymisation-term", term:"Anonymisation", def:"Changing data so that no one can be identified by any means reasonably likely to be used. Truly anonymised data fall outside laws like the GDPR.", codex:"anonymisation"},
   {id:"pseudonymisation", term:"Pseudonymisation", def:"Replacing identifiers with codes while keeping a separate, protected key that can re-link them. Under the GDPR, pseudonymised data are still personal data for whoever holds the key.", codex:"anonymisation"},
   {id:"special-category-data", term:"Special category data", def:"Under the GDPR, especially sensitive personal data: racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic and identifying biometric data, health, and sex life or sexual orientation.", codex:"research-data-protection"},
   {id:"data-management-plan-term", term:"Data management plan (DMP)", def:"A document written at the start of a project describing what data will be collected and how they will be documented, stored, protected, shared and preserved. Many funders require one.", codex:"data-management-plan"},
   {id:"fair-principles", term:"FAIR principles", def:"Guidelines (Wilkinson et al., 2016) for making research data Findable, Accessible, Interoperable and Reusable, by people and machines. FAIR doesn’t require data to be open.", codex:"data-management-plan"},
   {id:"fabrication", term:"Fabrication", def:"Making up data or results and recording or reporting them as if they were real. One of the three core forms of research misconduct.", codex:"research-integrity"},
   {id:"falsification", term:"Falsification", def:"Manipulating research materials, equipment, processes, data or images, or changing or omitting results, so the research record is misleading.", codex:"research-integrity"},
   {id:"research-misconduct", term:"Research misconduct", def:"Fabrication, falsification or plagiarism (FFP) in proposing, doing, reviewing or reporting research. It does not include honest error or differences of opinion.", codex:"research-integrity"},
   {id:"p-hacking", term:"P-hacking", def:"Trying different analyses or data choices until a result becomes statistically significant, then reporting it as if it had been planned.", codex:"questionable-research-practices"},
   {id:"harking", term:"HARKing", def:"“Hypothesising After the Results are Known”: presenting a hypothesis formed after seeing the results as if it had been predicted in advance. Named by Norbert Kerr in 1998.", codex:"questionable-research-practices"},
   {id:"preregistration", term:"Preregistration", def:"Publicly recording a study’s hypotheses, design and analysis plan, with a time stamp, before collecting or analysing the data.", codex:"questionable-research-practices"},
   {id:"registered-report", term:"Registered report", def:"A publishing format in which a journal reviews and provisionally accepts a study’s plan before the data are collected, then publishes it whatever the results if the plan is followed.", codex:"questionable-research-practices"},
   {id:"authorship", term:"Authorship", def:"Being named as an author of a work, which brings both credit and responsibility. Criteria such as the ICMJE’s require real contribution, writing or revising, final approval and accountability.", codex:"authorship-credit"},
   {id:"credit-taxonomy", term:"CRediT", def:"The Contributor Roles Taxonomy: 14 standard roles, such as Investigation and Formal analysis, used to describe who did what on a research output.", codex:"authorship-credit"},
   {id:"conflict-of-interest", term:"Conflict of interest", def:"A financial or personal interest that could affect, or appear to affect, a researcher’s judgement. It should be declared, not hidden.", codex:"authorship-credit"},
   {id:"ai-disclosure", term:"AI disclosure", def:"A statement of which AI tools were used in a piece of work, for what, and how the output was checked.", codex:"ai-research-policies"},
   {id:"hallucinated-citation", term:"Hallucinated citation", def:"A reference produced by an AI tool that doesn’t exist, has wrong details, or doesn’t support the claim it’s attached to.", codex:"ai-research-policies"},
   {id:"minimal-risk", term:"Minimal risk", def:"Risk no greater than people meet in daily life or routine tests. Many review systems allow lighter review for minimal-risk studies.", codex:"ethics-review"},
   {id:"debriefing", term:"Debriefing", def:"Explaining a study’s true purpose to participants afterwards, especially when they were not told everything in advance, and offering to remove their data.", codex:"consent-process"},
   {id:"assent", term:"Assent", def:"A child’s (or other person’s) own agreement to take part, given in words they understand, alongside permission from a parent or legal representative.", codex:"consent-process"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t4u9-q01", lesson:"t4u9-l1", level:1, q:"What does the first point of the Nuremberg Code (1947) say?", options:[
     {t:"The voluntary consent of the human subject is absolutely essential.", ok:true, why:"That is its first and longest point, written after the Doctors’ Trial."},
     {t:"All research must be approved by a national government.", why:"The Code doesn’t require government approval; independent committee review came later through other documents."},
     {t:"Research must always benefit the participant directly.", why:"The Code asks for results valuable to society, not necessarily direct benefit to each participant."},
     {t:"Results must be published within a year.", why:"Publication timing isn’t part of the Code."}
   ]},
   {id:"t4u9-q02", lesson:"t4u9-l1", level:1, q:"Which three principles does the Belmont Report (1979) set out?", options:[
     {t:"Respect for persons, beneficence, justice", ok:true, why:"These are the report’s three basic ethical principles."},
     {t:"Consent, confidentiality, publication", why:"Consent is an application of respect for persons; confidentiality and publication aren’t the three principles."},
     {t:"Reliability, honesty, respect, accountability", why:"Those are the four principles of Europe’s research integrity code (ALLEA)."},
     {t:"Findable, accessible, interoperable, reusable", why:"Those are the FAIR principles for data."}
   ]},
   {id:"t4u9-q03", lesson:"t4u9-l1", level:1, q:"Which statement about the US Public Health Service study at Tuskegee is accurate?", options:[
     {t:"It ran from 1932 to 1972, and the men with syphilis were not offered penicillin even after it became the treatment of choice.", ok:true, why:"Correct, according to the CDC’s history of the study."},
     {t:"It ended in 1947 when the Nuremberg Code was published.", why:"It continued for 25 more years and ended only after a 1972 news report."},
     {t:"The men gave informed consent but were not told about penicillin.", why:"Informed consent was never collected; the men were told they were being treated for “bad blood”."},
     {t:"It was a secret study that was never acknowledged by the US government.", why:"A federal panel judged it unjustified in 1972, there was a settlement in 1974, and a formal presidential apology in 1997."}
   ]},
   {id:"t4u9-q04", lesson:"t4u9-l1", level:1, q:"When was the Declaration of Helsinki most recently revised?", options:[
     {t:"October 2024", ok:true, why:"The World Medical Association adopted the latest revision at its General Assembly in Helsinki in October 2024."},
     {t:"1964", why:"1964 is when it was first adopted."},
     {t:"1979", why:"1979 is the year of the Belmont Report, a different document."},
     {t:"It has never been revised.", why:"It has been revised many times."}
   ]},
   {id:"t4u9-q05", lesson:"t4u9-l1", level:3, q:"A health charity plans to test a new app only with people living in one low-income housing estate, because they are easy to reach and unlikely to complain. Which Belmont principle is most clearly at risk?", options:[
     {t:"Justice", ok:true, why:"Choosing participants because they are convenient or less able to object, so one group carries the burden, is the injustice Belmont warns about."},
     {t:"Respect for persons", why:"Consent could still be properly obtained. The core problem is who was selected and why."},
     {t:"Beneficence", why:"The app’s risks aren’t described. The described problem is the unfair choice of participants."},
     {t:"Accountability", why:"Accountability is an ALLEA integrity principle, not one of Belmont’s three."}
   ]},
   {id:"t4u9-q06", lesson:"t4u9-l1", level:2, q:"Priya says: “My survey is low-risk, so ethics doesn’t apply.” What’s the best reply?", options:[
     {t:"Low-risk studies may get lighter review, but consent, privacy and honesty still apply.", ok:true, why:"Right. Risk changes how much review is needed, not whether ethics applies."},
     {t:"She’s right: only medical research needs ethics.", why:"Social research, surveys and online studies all raise ethical questions about consent and privacy."},
     {t:"She needs the same full review as a drug trial.", why:"Most systems scale review to risk; a low-risk survey usually has a lighter route."},
     {t:"Ethics only matters if participants are paid.", why:"Payment is one issue among many; it doesn’t decide whether ethics applies."}
   ]},
   {id:"t4u9-q07", lesson:"t4u9-l1", level:2, q:"What happened to Henrietta Lacks’s cells in 1951?", options:[
     {t:"They were taken during her cancer treatment without her knowledge or consent and became the first human cells grown continuously in a lab.", ok:true, why:"Correct, as described by the US NIH."},
     {t:"She donated them after signing a research consent form.", why:"There was no consent; the samples were taken without her knowledge."},
     {t:"They were used only once, in a single study.", why:"HeLa cells have been used in a vast number of studies worldwide."},
     {t:"They were taken as part of the study at Tuskegee.", why:"They were taken at Johns Hopkins Hospital in Baltimore, unrelated to the Tuskegee study."}
   ]},
   {id:"t4u9-q08", lesson:"t4u9-l1", level:3, q:"Ana is writing an essay on research ethics history. Which sentence is written most accurately and respectfully?", options:[
     {t:"“The US Public Health Service withheld effective treatment from Black men with syphilis in its study at Tuskegee, without their informed consent.”", ok:true, why:"It names the responsible institution, states the facts precisely and doesn’t blame the men."},
     {t:"“The Tuskegee men agreed to be experimented on.”", why:"Inaccurate: they never gave informed consent. It also shifts responsibility onto those harmed."},
     {t:"“Tuskegee Institute ran an experiment on its own students.”", why:"Inaccurate: the US Public Health Service ran the study with the institute, and the participants were local men, not students."},
     {t:"“The Tuskegee subjects were a useful natural experiment.”", why:"This treats people who were harmed as material and ignores the ethical violation."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t4u9-q09", lesson:"t4u9-l2", level:1, q:"According to the Belmont Report, informed consent has which three elements?", options:[
     {t:"Information, comprehension, voluntariness", ok:true, why:"All three must be present for consent to be informed."},
     {t:"Signature, witness, date", why:"These are features of some forms, not the ethical elements of consent."},
     {t:"Risk, benefit, payment", why:"Risks and benefits are part of the information, but these aren’t Belmont’s three elements."},
     {t:"Respect, beneficence, justice", why:"These are Belmont’s three principles, not the elements of consent."}
   ]},
   {id:"t4u9-q10", lesson:"t4u9-l2", level:1, q:"In Canada, what is the research ethics review body usually called?", options:[
     {t:"Research ethics board (REB)", ok:true, why:"Canada’s TCPS 2 uses the term REB."},
     {t:"Institutional review board (IRB)", why:"IRB is the US term."},
     {t:"Human research ethics committee (HREC)", why:"HREC is the Australian term."},
     {t:"Data protection authority", why:"That’s a regulator for personal data, not a research ethics review body."}
   ]},
   {id:"t4u9-q11", lesson:"t4u9-l2", level:2, q:"Which of these is most likely to be **undue influence**?", options:[
     {t:"Offering a month’s wages to take part in a risky study, to people who are struggling financially", ok:true, why:"A reward so large it could lead people to accept risks they otherwise wouldn’t is undue influence."},
     {t:"A small voucher to thank people for a 30-minute interview", why:"Modest compensation for time is usually acceptable."},
     {t:"Reimbursing bus fares to the study site", why:"Covering costs removes a barrier; it doesn’t distort judgement."},
     {t:"Sending a summary of results to participants", why:"Sharing results is good practice, not pressure."}
   ]},
   {id:"t4u9-q12", lesson:"t4u9-l2", level:3, q:"Mei, a manager, wants to survey her own team about workplace stress. What change most improves voluntariness?", options:[
     {t:"Have someone without authority over the team run the survey anonymously, and state that taking part or not won’t affect anyone’s job.", ok:true, why:"Removing the manager from recruitment and identification protects people’s freedom to say no and to answer honestly."},
     {t:"Send the survey from her own email and ask people to reply by Friday.", why:"A deadline from one’s manager adds pressure; replies by email aren’t anonymous."},
     {t:"Make the survey compulsory so the results are complete.", why:"Compulsory participation isn’t voluntary consent."},
     {t:"Offer a day off only to those who take part.", why:"A sizeable reward from one’s manager pressures people and singles out those who decline."}
   ]},
   {id:"t4u9-q13", lesson:"t4u9-l2", level:2, q:"What must happen after a study that used approved deception?", options:[
     {t:"Debriefing: participants are told the true purpose and offered the chance to withdraw their data.", ok:true, why:"Debriefing is the standard condition attached to approved deception."},
     {t:"Nothing, if the consent form was signed.", why:"Consent obtained under deception was incomplete, so debriefing is required."},
     {t:"Participants must sign a confidentiality agreement.", why:"That isn’t a standard requirement; the duty is on the researcher to explain."},
     {t:"The results must be kept secret.", why:"Results can be published; the requirement is to inform participants."}
   ]},
   {id:"t4u9-q14", lesson:"t4u9-l2", level:3, q:"Oluwaseun wants to interview 12-year-olds about online gaming. Which consent plan fits most ethics rules?", options:[
     {t:"Permission from a parent or guardian, plus each child’s own assent in words they understand, with the right to stop.", ok:true, why:"Children usually need both: a parent’s permission and their own agreement."},
     {t:"Only the children’s agreement, since it’s their experience.", why:"Most rules also require a parent’s or guardian’s permission for minors."},
     {t:"Only the parents’ permission; children can’t decide.", why:"Children’s own assent is required too, respecting their developing autonomy."},
     {t:"The school head’s permission covers everyone.", why:"A school’s permission to access pupils doesn’t replace parents’ permission and children’s assent."}
   ]},
   {id:"t4u9-q15", lesson:"t4u9-l2", level:2, q:"Which statement about vulnerability in research is most accurate?", options:[
     {t:"It often depends on the situation, such as a dependent relationship or a crisis, not only on who the person is.", ok:true, why:"Guidelines such as India’s ICMR list situational vulnerability alongside legal status and health conditions."},
     {t:"Vulnerable people should always be excluded from research.", why:"Exclusion means they miss out on evidence about their own needs; safeguards are preferred."},
     {t:"Only children can be vulnerable.", why:"Adults in many situations can be vulnerable too."},
     {t:"Vulnerability is decided by the participant’s age alone.", why:"Age is one factor among many."}
   ]},
   {id:"t4u9-q16", lesson:"t4u9-l2", level:3, q:"Lucía’s online survey says: “Once you press Submit, we can’t remove your answers, because we don’t know which are yours.” Why is this a good sentence to include?", options:[
     {t:"It tells people honestly, before they agree, the limit of their right to withdraw.", ok:true, why:"People should know in advance what withdrawal can and can’t achieve."},
     {t:"It stops people from withdrawing during the survey.", why:"People can still stop before submitting; the sentence only explains what happens after."},
     {t:"It means she no longer needs ethics approval.", why:"Clear information is part of what the committee checks; it doesn’t replace review."},
     {t:"It makes the data special category data.", why:"Special category depends on content, not on withdrawal rules."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t4u9-q17", lesson:"t4u9-l3", level:1, q:"What is the difference between confidentiality and anonymity?", options:[
     {t:"With confidentiality the researcher knows who said what but won’t reveal it; with anonymity no one can link answers to a person.", ok:true, why:"That is the key distinction."},
     {t:"They mean the same thing.", why:"They make different promises; mixing them up can mislead participants."},
     {t:"Anonymity means data are encrypted.", why:"Encryption protects stored data but doesn’t make it anonymous."},
     {t:"Confidentiality applies only to medical research.", why:"It applies to any research that collects identifying information."}
   ]},
   {id:"t4u9-q18", lesson:"t4u9-l3", level:2, q:"A researcher replaces names with codes and keeps the code list on a separate encrypted drive. Under the GDPR, the coded data are…", options:[
     {t:"Pseudonymised, and still personal data", ok:true, why:"A key exists that can re-link the data, so Recital 26 treats it as personal data."},
     {t:"Anonymous, so the GDPR no longer applies", why:"Data are anonymous only if no one can reasonably re-identify people; here a key exists."},
     {t:"Special category data", why:"Special category depends on content such as health or religion, not on coding."},
     {t:"Not data at all", why:"The coded records are still information about people."}
   ]},
   {id:"t4u9-q19", lesson:"t4u9-l3", level:1, q:"Which of these is special category data under the GDPR?", options:[
     {t:"A participant’s religious beliefs", ok:true, why:"Religious or philosophical beliefs are listed in Article 9."},
     {t:"A participant’s postcode", why:"Personal data, but not a special category."},
     {t:"A participant’s favourite food", why:"Personal data at most, not a special category."},
     {t:"A participant’s job title", why:"Personal data, but not in the Article 9 list."}
   ]},
   {id:"t4u9-q20", lesson:"t4u9-l3", level:3, q:"Kenji’s anonymised spreadsheet lists: age 58, retired lighthouse keeper, island of 300 people, has a rare blood disorder. What is the main problem?", options:[
     {t:"The combination of indirect identifiers points to one person, so it isn’t really anonymous.", ok:true, why:"Job, place and rare condition together can identify someone even without a name."},
     {t:"Nothing: there is no name.", why:"Removing names isn’t enough when other details single someone out."},
     {t:"Age should never be recorded.", why:"Age can be recorded; using bands (for example 50–59) reduces the risk."},
     {t:"The file isn’t a CSV.", why:"File format doesn’t affect identifiability."}
   ]},
   {id:"t4u9-q21", lesson:"t4u9-l3", level:1, q:"What do the letters of FAIR stand for?", options:[
     {t:"Findable, Accessible, Interoperable, Reusable", ok:true, why:"From Wilkinson and colleagues’ 2016 principles."},
     {t:"Free, Anonymous, Instant, Reliable", why:"Not the FAIR principles; FAIR data needn’t be free, anonymous or instant."},
     {t:"Fair, Accurate, Independent, Reviewed", why:"Not what the acronym stands for."},
     {t:"Filed, Archived, Indexed, Released", why:"Not what the acronym stands for."}
   ]},
   {id:"t4u9-q22", lesson:"t4u9-l3", level:2, q:"Which statement about FAIR data is correct?", options:[
     {t:"Sensitive data can be FAIR, for example with public metadata and access only under an agreement.", ok:true, why:"FAIR isn’t the same as open: “as open as possible, as closed as necessary”."},
     {t:"FAIR data must be freely downloadable by anyone.", why:"Accessible means a clear, standard route, which can include restrictions."},
     {t:"FAIR applies only to medical data.", why:"FAIR applies to research data in every field."},
     {t:"FAIR means data are anonymised.", why:"FAIR is about findability and reuse, not identifiability."}
   ]},
   {id:"t4u9-q23", lesson:"t4u9-l3", level:3, q:"Fatima plans to store interview recordings on her personal phone and a free file-sharing app until her project ends. What is the best advice?", options:[
     {t:"Move them to secure, preferably institutional, storage with access control and encryption, and set a deletion date in her data management plan.", ok:true, why:"Integrity and confidentiality, and storage limitation, call for secure storage and planned deletion."},
     {t:"It’s fine if her phone has a passcode.", why:"A passcode helps, but a free sharing app and a personal phone may not meet her consent promises or institutional rules."},
     {t:"Email the files to herself for backup.", why:"Email copies spread sensitive data to more places, often unencrypted."},
     {t:"Delete the recordings immediately after each interview.", why:"She may need them for transcription and checking; the point is secure storage and planned deletion."}
   ]},
   {id:"t4u9-q24", lesson:"t4u9-l3", level:2, q:"Which is an example of data minimisation in a survey?", options:[
     {t:"Asking for an age band instead of date of birth, because the research question only needs age groups", ok:true, why:"Collecting only what the question needs is data minimisation."},
     {t:"Collecting full addresses in case they are useful later", why:"“Just in case” collection is what minimisation rules out."},
     {t:"Encrypting the survey database", why:"That’s security (integrity and confidentiality), a different principle."},
     {t:"Keeping data forever for future research", why:"That conflicts with storage limitation unless justified and safeguarded."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t4u9-q25", lesson:"t4u9-l4", level:1, q:"What does FFP stand for in research integrity?", options:[
     {t:"Fabrication, falsification, plagiarism", ok:true, why:"The three core forms of research misconduct."},
     {t:"Funding, findings, publication", why:"Not what FFP means."},
     {t:"False positives, false negatives, p-values", why:"Statistical terms, not the misconduct categories."},
     {t:"Findable, fair, published", why:"Not what FFP means."}
   ]},
   {id:"t4u9-q26", lesson:"t4u9-l4", level:2, q:"Which situation is NOT research misconduct under the US ORI definition?", options:[
     {t:"A researcher finds a coding error after publication and publishes a correction.", ok:true, why:"Misconduct excludes honest error; correcting it is responsible practice."},
     {t:"A researcher invents data for missing participants.", why:"That is fabrication."},
     {t:"A researcher edits an image to hide an inconvenient result.", why:"That is falsification."},
     {t:"A researcher copies paragraphs from another paper without credit.", why:"That is plagiarism."}
   ]},
   {id:"t4u9-q27", lesson:"t4u9-l4", level:3, q:"Tomás runs his analysis with and without outliers, with three different outcome measures and with two sets of control variables, then reports only the version with p = 0.03. What is this?", options:[
     {t:"P-hacking: the reported analysis was chosen because it was significant, and the others are hidden.", ok:true, why:"Choosing among many analyses by their results inflates false positives."},
     {t:"Good practice: he was thorough.", why:"Trying alternatives is fine if all are reported; hiding them is the problem."},
     {t:"Fabrication.", why:"He didn’t invent data; this is a questionable practice, not fabrication."},
     {t:"HARKing.", why:"HARKing is about presenting a post hoc hypothesis as predicted; this is about choosing analyses."}
   ]},
   {id:"t4u9-q28", lesson:"t4u9-l4", level:1, q:"Who named HARKing, and when?", options:[
     {t:"Norbert Kerr, in 1998", ok:true, why:"Kerr’s paper “HARKing: Hypothesizing After the Results are Known” appeared in Personality and Social Psychology Review in 1998."},
     {t:"The Belmont Report, in 1979", why:"Belmont is about participant protection, not HARKing."},
     {t:"Wilkinson and colleagues, in 2016", why:"They published the FAIR principles."},
     {t:"COPE, in 2023", why:"COPE’s 2023 statement was about AI and authorship."}
   ]},
   {id:"t4u9-q29", lesson:"t4u9-l4", level:2, q:"What is distinctive about a registered report?", options:[
     {t:"The journal reviews the plan before data collection and can accept it in principle, whatever the results.", ok:true, why:"Stage 1 review and in-principle acceptance remove the reward for “positive” results."},
     {t:"The data are registered with the government.", why:"No government registration is involved."},
     {t:"Only significant results can be published.", why:"The opposite: results are published regardless of outcome if the plan was followed."},
     {t:"Peer review is skipped.", why:"Peer review happens twice: at Stage 1 and Stage 2."}
   ]},
   {id:"t4u9-q30", lesson:"t4u9-l4", level:3, q:"A department head asks to be added as an author to every paper from her department, though she didn’t work on them. Under ICMJE-style criteria, this is…", options:[
     {t:"Gift (guest) authorship, which misrepresents who did and is accountable for the work", ok:true, why:"Authorship requires contribution, writing or revision, approval and accountability."},
     {t:"Normal: leaders are always authors.", why:"Leadership or securing resources alone doesn’t meet the criteria."},
     {t:"Ghost authorship.", why:"Ghost authorship is leaving out someone who did contribute; this is the reverse."},
     {t:"Acceptable if she is listed last.", why:"Position in the list doesn’t change whether someone qualifies."}
   ]},
   {id:"t4u9-q31", lesson:"t4u9-l4", level:1, q:"How many contributor roles does CRediT define?", options:[
     {t:"14", ok:true, why:"From Conceptualization to Writing – review & editing."},
     {t:"4", why:"Four is the number of ICMJE authorship criteria, not CRediT roles."},
     {t:"3", why:"Three is the number of Belmont principles."},
     {t:"10", why:"Ten is the number of points in the Nuremberg Code."}
   ]},
   {id:"t4u9-q32", lesson:"t4u9-l4", level:2, q:"Kofi’s study of a fitness tracker was funded by its manufacturer. What should he do?", options:[
     {t:"Declare the funding as a potential conflict of interest and describe the funder’s role in the study.", ok:true, why:"Disclosure lets readers judge; describing the funder’s role adds transparency."},
     {t:"Leave it out, since he wasn’t influenced.", why:"Conflicts include interests that could appear to affect judgement; they must be declared."},
     {t:"Refuse to publish.", why:"Industry-funded research can be published with proper disclosure."},
     {t:"Mention it only if a reviewer asks.", why:"Journals require proactive disclosure."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t4u9-q33", lesson:"t4u9-l5", level:1, q:"According to COPE (2023), can an AI tool be listed as an author?", options:[
     {t:"No, because it can’t take responsibility for the work.", ok:true, why:"COPE also notes AI can’t declare conflicts of interest or manage copyright."},
     {t:"Yes, if it wrote more than half the text.", why:"The amount of text isn’t the issue; responsibility is."},
     {t:"Yes, if the journal agrees.", why:"COPE’s position, followed by many journals, is that AI tools can’t meet authorship requirements."},
     {t:"Only in computer science journals.", why:"The position applies across fields."}
   ]},
   {id:"t4u9-q34", lesson:"t4u9-l5", level:3, q:"Amara used an AI tool to improve the English of her methods section and to suggest code for a chart. What is the best course?", options:[
     {t:"Check the edits and test the code, then disclose both uses as the journal’s policy requires.", ok:true, why:"She stays responsible, checks the output, and is transparent about it."},
     {t:"Say nothing, since the ideas are hers.", why:"Many policies require disclosure of AI assistance, and hiding it is listed as unacceptable in Europe’s integrity code."},
     {t:"List the AI tool as a co-author.", why:"AI tools can’t be authors."},
     {t:"Cite the AI tool as the source of her methods.", why:"The methods are hers; AI use is disclosed, not cited as the source of the research."}
   ]},
   {id:"t4u9-q35", lesson:"t4u9-l5", level:2, q:"An AI tool gives a reference with a DOI. What is the best first check?", options:[
     {t:"Search for the work independently and resolve the DOI to confirm the title, authors and year match.", ok:true, why:"Independent confirmation catches invented or garbled references."},
     {t:"Ask the same AI tool whether the reference is real.", why:"It may confidently confirm its own invention."},
     {t:"Assume it’s real because it has a DOI.", why:"DOIs can be made up or attached to the wrong work."},
     {t:"Check that the journal name sounds academic.", why:"Invented references often use real journal names."}
   ]},
   {id:"t4u9-q36", lesson:"t4u9-l5", level:2, q:"Why should researchers avoid pasting interview transcripts into a free public AI chatbot?", options:[
     {t:"The data may be stored or used by the provider, which participants didn’t agree to and data protection law may not allow.", ok:true, why:"Consent terms and data protection rules limit where participant data can go."},
     {t:"AI tools can’t read transcripts.", why:"They can; the problem is confidentiality, not capability."},
     {t:"Transcripts are always anonymous, so there’s no point.", why:"Transcripts often contain identifying details."},
     {t:"It’s always illegal to use AI in research.", why:"AI can be used legitimately, with approved tools and appropriate safeguards."}
   ]},
   {id:"t4u9-q37", lesson:"t4u9-l5", level:3, q:"Dmitri is asked to review a grant application for the US NIH and wants an AI tool to draft his critique. What applies?", options:[
     {t:"NIH has prohibited its peer reviewers from using generative AI to analyse or write critiques, because of confidentiality.", ok:true, why:"NIH announced this in June 2023."},
     {t:"It’s fine if he edits the AI draft afterwards.", why:"The upload itself breaches confidentiality, whatever editing follows."},
     {t:"It’s fine if he uses a paid version.", why:"The prohibition isn’t about price."},
     {t:"He should list the AI as a co-reviewer.", why:"The issue is confidentiality; AI use is prohibited, not something to credit."}
   ]},
   {id:"t4u9-q38", lesson:"t4u9-l5", level:1, q:"What is a hallucinated citation?", options:[
     {t:"A reference produced by AI that doesn’t exist, has wrong details or doesn’t support the claim", ok:true, why:"That’s the definition used in this unit."},
     {t:"Any citation of an AI tool", why:"Citing an AI tool correctly isn’t a hallucination."},
     {t:"A citation to a retracted paper", why:"Retracted papers exist; citing them is a different problem."},
     {t:"A citation with a typo in the page numbers", why:"A typo is a minor error; hallucination covers invented or unsupported references."}
   ]},
   {id:"t4u9-q39", lesson:"t4u9-l5", level:2, q:"Which is the best AI-use statement?", options:[
     {t:"“We used [tool name] in March 2026 to improve the grammar of Sections 1–2; the authors reviewed all changes and take full responsibility.”", ok:true, why:"It names the tool, the date and the purpose, says how output was checked and who is responsible."},
     {t:"“AI was used.”", why:"Too vague to tell readers anything."},
     {t:"“The AI is responsible for any errors.”", why:"Authors remain responsible."},
     {t:"“No disclosure is needed because we didn’t copy and paste.”", why:"Disclosure depends on how the tool was used, not on copying."}
   ]},
   {id:"t4u9-q40", lesson:"t4u9-l5", level:3, q:"Sione finds that his journal allows AI for language editing, but his university’s ethics approval says transcripts may be stored only on university systems. He wants AI help to code the transcripts. What should he do?", options:[
     {t:"Follow the stricter rule: only use a university-approved tool covered by his ethics approval, or ask the committee for an amendment first.", ok:true, why:"When policies differ, the strictest applicable rule wins, and changes to data handling need approval."},
     {t:"Use any AI tool, because the journal allows AI.", why:"The journal’s rule is about language editing; it doesn’t override his ethics approval."},
     {t:"Paste the transcripts but delete the chat history afterwards.", why:"That still sends data outside approved systems."},
     {t:"Stop using AI for anything, including language editing.", why:"That’s more than needed; he can still use AI where all applicable rules allow."}
   ]}
  ]
});
