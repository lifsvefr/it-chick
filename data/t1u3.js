/* Track 1 · Unit 3 · Staying safe: security basics */
ICA.addUnit({
  id:"t1u3", track:"t1", n:3, title:"Staying safe: security basics", icon:"🔐",
  blurb:"How real attacks on ordinary people work, and the small set of habits that stop most of them: strong unique passwords, two-step verification and passkeys, spotting scams, updates and a plan for when something goes wrong.",
  goals:[
    "Explain why ordinary people are targeted and name the main threats in plain words",
    "Create strong, unique passwords and use a password manager",
    "Turn on two-step verification and understand why passkeys resist phishing",
    "Find the real domain in a web address and spot the signs of phishing and scams",
    "Keep devices updated, encrypted and locked, and know what to do in the first hour after a hack"
  ],
  read:[
    {book:"ncsc", where:"The whole collection: “Top tips for staying secure online” (six short tips: email password, updates, 2-step verification, password managers, backups, three random words)"},
    {book:"ics", where:"Chapter 14, “Cyber Resources Qualities and Cyber Computing Governance”, Section 14.2 “Cybersecurity Deep Dive”", note:"Written for computer science students. Read “What Is Cybersecurity?”, “Common Cyber Threats” and “Authentication and Passwords”; skip the software-attack details."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u3-l1", title:"How attacks really happen", minutes:45,
   hook:{q:"Films show hackers typing furiously to crack codes. In real life, how do attackers usually get into someone’s email account?", options:["They crack its encryption in seconds","They sign in with a password that was leaked, reused or guessed","They break into the email company’s building","They hack the person’s Wi-Fi first"], answer:1, reveal:"Usually they just **sign in**. Security people say attackers don’t break in, they log in: many incidents start with a password leaked in a breach, reused from another site or guessed. This lesson follows one realistic attack step by step and shows where a few simple habits would have stopped it."},
   goals:[
     "Explain what attackers want from ordinary people",
     "Name the main threats: phishing, malware, ransomware, scams, social engineering, data breaches and credential stuffing",
     "Use confidentiality, integrity and availability to describe what an attack damages",
     "List the handful of habits that stop most attacks"
   ],
   learn:[
    {h:"Why would anyone target me?", body:[
      {lead:"Most people imagine a hacker choosing them personally. Usually nobody chose you at all. You were one address in a list of millions."},
      "Think of a burglar who walks down a street trying every door handle. He doesn’t care whose house it is. He’s looking for the one door that’s unlocked. Most online attacks work the same way. Computer programs send millions of scam messages, try millions of leaked passwords and scan millions of devices for missing updates. The attacker only needs a small share of them to work.",
      "[[cybersecurity|Cybersecurity]] is the practice of protecting devices, accounts and information from that kind of harm. A [[threat]] is anything that could cause the harm: a scam text, a harmful program, a stolen password list.",
      "So what does an attacker get from an ordinary person? More than you might think:",
      {table:[
        ["What they want","Example","Why it matters to you"],
        ["Money","A fake “delivery fee” page takes Amara’s card number.","Direct loss, and time spent with the bank."],
        ["Your accounts","Someone signs in to Kenji’s email.","Email can reset the passwords of almost every other account he has."],
        ["Your data","Copies of Lucía’s ID documents in her cloud storage.","Used to open loans or accounts in her name."],
        ["Access to other people","Sione’s hacked messaging account asks his aunt for money.","People trust messages from you, so your account becomes a scam tool."],
        ["Your device","Malware quietly uses Mei’s laptop to attack others.","Slower device, and you become part of someone else’s crime."]
      ]},
      {key:"You’re not targeted because you’re important. You’re targeted because attacks are cheap, automated and only need a few people to fall for them. That’s also good news: a few solid habits put you out of reach of most of them."}
    ]},
    {h:"The main threats, in plain words", body:[
      "Security news is full of jargon. Almost all of it fits into a short list. Each word below has a pop-up definition, and the Codex has a full entry for each.",
      {table:[
        ["Threat","Plain meaning","Everyday example"],
        ["[[phishing|Phishing]]","A fake message that tricks you into clicking, signing in or paying.","An email “from your bank” links to a copy of its sign-in page."],
        ["[[malware|Malware]]","Any harmful software. A [[virus]] is one kind.","A “free” copy of a paid app that also steals saved passwords."],
        ["[[ransomware|Ransomware]]","Malware that locks your files and demands payment.","Family photos renamed and unreadable, with a payment note."],
        ["[[scam|Scams]]","Any trick to take money or information by lying.","A fake online shop, a fake prize, a fake job that asks for a fee."],
        ["[[social-engineering|Social engineering]]","Manipulating people instead of breaking technology.","A caller pretends to be from “IT support” and asks for a code."],
        ["[[data-breach|Data breaches]]","A company’s stored data gets stolen.","A shop you used years ago leaks its customer list."],
        ["[[credential-stuffing|Credential stuffing]]","Trying leaked username and password pairs on other sites.","The password from that shop leak is tried on your email."]
      ]},
      "Notice that these overlap. A phishing email might carry malware. A data breach gives attackers the passwords they use for credential stuffing. A scam often uses social engineering. Real attacks are usually a chain, not a single event.",
      {tip:"Security people sometimes say attackers don’t break in, they **log in**. Many incidents start with a stolen or guessed password, not with clever code. That’s why passwords and two-step verification get two whole lessons in this unit."}
    ]},
    {h:"How one attack really unfolds", body:[
      "Here is a realistic chain of events, step by step. Nothing in it requires a genius. Each step uses a small, ordinary weakness.",
      {ex:"1. Years ago, Tomás joined a hobby forum and used the same password he uses for his email.\n2. The forum is breached. Its user list, with email addresses and passwords, is sold online.\n3. An automated program tries Tomás’s email address and that old password on dozens of popular services. This is credential stuffing.\n4. It works on his email, because the password was reused and there was no second step.\n5. The attacker sets up a hidden rule that forwards copies of his mail to them, then uses “Forgot password?” to take over his online shopping account.\n6. Finally, they message his contacts from his account asking for urgent help with money.", label:"Worked example: one reused password, five problems"},
      "Look at where the chain could have been broken:",
      {list:[
        "A **unique** password for the forum would have made step 3 fail.",
        "**Two-step verification** on the email would have stopped step 4 even with the right password.",
        "Knowing the signs of a hacked account (strange forwarding rules, unknown sign-ins) would have shortened steps 5 and 6.",
        "Contacts who **check through another channel** before sending money stop step 6."
      ]},
      {warn:"Your email account is the master key to most of your other accounts, because password-reset links go there. The UK National Cyber Security Centre (NCSC) puts “use a strong and separate password for your email” first in its top tips for exactly this reason."}
    ]},
    {h:"Confidentiality, integrity, availability", body:[
      "Professionals describe what an attack damages with three words, often called the [[cia-triad|CIA triad]] (nothing to do with any intelligence agency). They give you a quick way to think about any security problem.",
      {list:[
        "**Confidentiality**: only the right people can *see* the information. A stranger reading your private messages breaks confidentiality.",
        "**Integrity**: the information is *correct and unchanged*. Someone editing the bank details on an invoice before you pay it breaks integrity.",
        "**Availability**: you can *use* the information when you need it. Ransomware locking your photos breaks availability."
      ]},
      {fig:'<svg viewBox="0 0 340 386"><text x="170" y="20" text-anchor="middle">Confidentiality</text><text class="s" x="170" y="38" text-anchor="middle">only the right people can see it</text><text class="s" x="170" y="56" text-anchor="middle">broken by: someone reads your email</text><path class="d-ink" d="M170,98 L255,250 L85,250 Z" fill="none" stroke-width="2"/><circle class="d-rose" cx="170" cy="98" r="28" stroke-width="2"/><text x="170" y="103" text-anchor="middle">C</text><circle class="d-lup" cx="85" cy="250" r="28" stroke-width="2"/><text x="85" y="255" text-anchor="middle">I</text><circle class="d-sage" cx="255" cy="250" r="28" stroke-width="2"/><text x="255" y="255" text-anchor="middle">A</text><text x="170" y="196" text-anchor="middle">your</text><text x="170" y="214" text-anchor="middle">information</text><text x="85" y="300" text-anchor="middle">Integrity</text><text class="s" x="85" y="318" text-anchor="middle">it’s correct and</text><text class="s" x="85" y="334" text-anchor="middle">unchanged</text><text class="s" x="85" y="356" text-anchor="middle">broken by: invoice</text><text class="s" x="85" y="372" text-anchor="middle">details altered</text><text x="255" y="300" text-anchor="middle">Availability</text><text class="s" x="255" y="318" text-anchor="middle">you can use it</text><text class="s" x="255" y="334" text-anchor="middle">when needed</text><text class="s" x="255" y="356" text-anchor="middle">broken by:</text><text class="s" x="255" y="372" text-anchor="middle">ransomware</text></svg>', alt:"A triangle with Confidentiality at the top, Integrity at bottom left and Availability at bottom right, each with an example of how it is broken.", cap:"The three things security protects. Most attacks damage at least one."},
      "Different defences protect different corners. [[encryption|Encryption]] mostly protects confidentiality. Backups protect availability (see {{backup}}). Checking a change of bank details by phoning a number you already know protects integrity. Thinking “which corner is at risk?” helps you pick the right defence."
    ]},
    {h:"The habits that stop most attacks", body:[
      "Government security agencies publish basic advice for the public, and it is strikingly consistent. In the United States, CISA’s **Secure Our World** campaign lists four steps: use strong passwords and a password manager, turn on multifactor authentication, recognise and report phishing, and update software. The UK NCSC’s **Top tips for staying secure online** cover the same ground and add backing up your data and using three random words for passwords.",
      {table:[
        ["Habit","What it blocks","Lesson"],
        ["A strong, separate password for every account (a password manager makes this easy)","Credential stuffing after data breaches; guessing","2"],
        ["Two-step verification, or passkeys","Stolen and phished passwords","3"],
        ["Pausing to check messages before you click, sign in or pay","Phishing, scams, social engineering","4"],
        ["Installing updates promptly","Malware that uses known weaknesses","5"],
        ["Backups","Ransomware, theft, broken devices","Unit 2"]
      ]},
      "None of these needs technical skill. They’re closer to locking your door and checking who is ringing before you open it. The rest of this unit teaches each one properly, so that you understand *why* it works and can adapt when something new appears.",
      {key:"Strong unique passwords, two-step verification, a pause before acting on messages, prompt updates and backups. Do those five things and you have closed the doors most attacks try."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“I have nothing worth stealing.”** You have an email account that resets other accounts, contacts who trust you, and a payment card. That’s plenty.",
        "**“Macs and phones don’t get viruses.”** Every popular system has malware written for it, and phishing works on any device because it targets you, not the machine.",
        "**“My antivirus protects me from everything.”** [[antivirus|Antivirus]] blocks a lot of malware, but it can’t stop you from typing your password into a fake page or sending money to a scammer.",
        "**“Hackers crack codes like in films.”** Most real attacks reuse leaked passwords, trick people or exploit software that wasn’t updated.",
        "**“Smart people don’t fall for scams.”** Scams work by creating urgency or emotion at a busy moment. Anyone can be caught. A habit of pausing works better than trusting yourself to always notice.",
        "**“Security means being paranoid about everything.”** It means a few good habits, so you can use the internet calmly."
      ]},
      {tip:"If you ever do fall for something, act quickly and don’t be embarrassed. Fast action limits the damage, and reporting it helps protect other people. Lesson 5 gives you a step-by-step plan."}
    ]}
   ],
   try:[
    {id:"t1u3-l1-x1", type:"mcq", q:"Ana says: “Nobody would bother hacking me. I’m not rich or famous.” What is the best reply?", options:[
      {t:"Most attacks are automated and aimed at huge numbers of people at once, so being ordinary doesn’t make you safe.", ok:true, why:"Right. Attackers mostly use programs that try millions of people, leaked passwords and devices. They don’t need to know or care who you are."},
      {t:"She’s right: attackers only spend their time on rich or famous people.", why:"Targeted attacks on important people exist, but most attacks are mass attacks. Treating yourself as not worth attacking is exactly the gap they use."},
      {t:"She’s safe as long as she has antivirus installed.", why:"Antivirus helps with malware, but it can’t stop phishing, scams or someone logging in with a leaked password."},
      {t:"She’s safe as long as she never shares her password on social media.", why:"Passwords mostly leak through data breaches and phishing pages, not because people post them publicly."}
    ]},
    {id:"t1u3-l1-x2", type:"match", q:"Match each situation to the threat it shows.", pairs:[
      ["A text says your parcel is held and links to a page asking for a small fee and your card details.","Phishing","A fake message that tricks you into entering information or paying is phishing (by text, it’s called smishing)."],
      ["Your files suddenly have strange names and a note demands payment to unlock them.","Ransomware","Locking files and demanding payment is ransomware, a kind of malware."],
      ["A shop you used years ago announces that hackers copied its customer database.","Data breach","Stolen data held by an organisation is a data breach. You didn’t do anything wrong, but your details are now out there."],
      ["Someone signs in to your account using a password that leaked from a different website.","Credential stuffing","Trying leaked username and password pairs on other sites is credential stuffing. It only works because the password was reused."],
      ["A caller says they’re from your internet provider’s “security team” and asks you to read out a code you just received.","Social engineering","Manipulating a person, using authority and urgency, is social engineering. That code is probably the key to your account."]
    ]},
    {id:"t1u3-l1-x3", type:"sort", q:"Which corner of the CIA triad does each incident damage most directly?", buckets:["Confidentiality (seen by the wrong people)","Integrity (changed or wrong)","Availability (can’t use it)"], items:[
      {t:"A stranger reads Priya’s private messages after guessing her password.", b:0, why:"Information was seen by someone who shouldn’t see it: confidentiality."},
      {t:"An email changes the bank account number on a supplier’s invoice before Fatima pays it.", b:1, why:"The information was altered, so it’s no longer correct: integrity."},
      {t:"Ransomware makes a community group’s membership spreadsheet unreadable.", b:2, why:"The group can’t use its own data: availability. (Some ransomware also steals data, which would add confidentiality.)"},
      {t:"A photo-sharing site leaks users’ private albums.", b:0, why:"Private photos were exposed to the wrong people: confidentiality."},
      {t:"Someone edits a shared recipe document so the oven temperature is dangerously wrong.", b:1, why:"The content was changed without permission and is now wrong: integrity."},
      {t:"A stolen laptop held the only copy of Hana’s thesis.", b:2, why:"Hana can no longer use her work: availability. Backups are the defence here."}
    ]},
    {id:"t1u3-l1-x4", type:"order", q:"Put this attack chain in the order it happens.", items:[
      {t:"A forum Oluwaseun used years ago is breached and its password list leaks.", why:"Everything starts with a data breach at a site that isn’t his main account."},
      {t:"A program tries his email address and that leaked password on many popular sites.", why:"Next comes credential stuffing: automated tries of leaked pairs on other sites."},
      {t:"It works on his email account, because he reused the password and had no second step.", why:"Reuse plus no two-step verification is what lets the stuffing succeed."},
      {t:"The attacker uses “Forgot password?” to take over his other accounts.", why:"With control of the email, password-reset links can be used to open other accounts."},
      {t:"His contacts get messages from “him” asking for urgent money.", why:"The final stage uses the trust people have in him: social engineering."}
    ]},
    {id:"t1u3-l1-x5", type:"mcq", q:"Which of these habits appear in CISA’s and the UK NCSC’s basic advice for the public? Choose all that apply.", options:[
      {t:"Use strong passwords, with a password manager to help", ok:true, why:"Both agencies recommend strong, separate passwords and suggest a password manager."},
      {t:"Turn on two-step verification (multifactor authentication)", ok:true, why:"Both list it: CISA as “Turn on MFA”, the NCSC as “Turn on 2-step verification (2SV)”."},
      {t:"Install software updates promptly", ok:true, why:"Both agencies list updates, because they fix security weaknesses."},
      {t:"Change all your passwords every 30 days", why:"Neither recommends routine forced changes. Change a password when there’s a reason, such as a breach. Lesson 2 explains why."},
      {t:"Avoid the internet on public Wi-Fi completely", why:"Not part of their basic advice. Most traffic is encrypted today; Lesson 5 explains what public Wi-Fi does and doesn’t risk."}
    ]},
    {id:"t1u3-l1-x6", type:"mcq", q:"Dmitri uses a Mac and says he doesn’t need to worry about security because “Macs don’t get viruses.” What’s the main flaw in that thinking?", options:[
      {t:"Phishing and scams target the person, not the device, so they work on any computer or phone.", ok:true, why:"Exactly. Even a perfectly malware-free device can’t stop him typing his password into a fake page or paying a scammer. (Malware for macOS also exists.)"},
      {t:"Macs actually get more viruses than any other computer.", why:"There’s no basis for that claim. The point isn’t which system gets the most malware; it’s that many attacks don’t need malware at all."},
      {t:"Macs have no built-in malware protection.", why:"They do: macOS includes Gatekeeper and XProtect. The flaw is thinking malware is the only threat."},
      {t:"There’s no flaw; he’s completely safe.", why:"Phishing, scams, data breaches and reused passwords affect Mac users as much as anyone."}
    ]}
   ],
   apply:{intro:"Take stock of your own situation. You don’t need to fix anything yet; later lessons cover the fixes. Just see where you stand.", tasks:[
     {t:"List your most important accounts", how:["Write down (on paper or in a private note) your **main email account(s)** first: they can reset most other accounts.","Add accounts that hold money or could cost money: banking, payment apps, online shops with a saved card.","Add accounts people would trust messages from: messaging apps and social media.","Add accounts with irreplaceable things: cloud photo storage, work or study accounts.","Do **not** write passwords on this list. It’s a list of names only."]},
     {t:"Run your main account’s security checkup", how:["Most big account providers have a security review page. Search their help pages for “security checkup” or open the account’s security settings.","Google accounts: open **myaccount.google.com** and choose **Security** (there is a **Security Checkup**).","Microsoft accounts: open **account.microsoft.com** and choose **Security**.","Apple Account on iPhone: **Settings → [your name] → Sign-In & Security**. On a Mac: **System Settings → [your name] → Sign-In & Security**.","Other providers: look for **Security**, **Login & security** or **Privacy & security** in account settings.","Note anything that looks unfamiliar, such as devices you don’t recognise or a recovery phone number that isn’t yours."]},
     {t:"Mark which of the five habits you already have", how:["For each account on your list, note: Is the password used anywhere else? Is two-step verification on?","For each device, note: Are updates automatic? Is there a screen lock?","Note whether your important files have a backup."]}
   ], proof:"A private list of your key accounts (no passwords) with a note beside each of what’s already protected and what isn’t. You’ll fix the gaps in Lessons 2–5."},
   read:[
     {book:"ncsc", where:"“Top tips for staying secure online” (collection overview)"},
     {book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”: “What Is Cybersecurity?”, “Why Is Cybersecurity Important?” and “Common Cyber Threats”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u3-l2", title:"Passwords and password managers", minutes:50,
   hook:{q:"Which of these password tricks do attackers’ guessing programs already try automatically?", options:["Swapping letters for symbols, like `P@ssw0rd`","Adding a year to a word, like `Summer2025`","Song lyrics and famous film quotes","All of these"], answer:3, reveal:"**All of these.** Guessing programs are built around the patterns people like, so “clever” tweaks barely slow them down. What really works is length, true randomness and a different password for every account, and this lesson shows an easy way to get all three."},
   goals:[
     "Explain what actually makes a password strong, using current official guidance",
     "Make a passphrase from random words",
     "Explain why reusing a password is the biggest danger",
     "Describe how a password manager works and set one up",
     "Check whether your email address appears in a known data breach"
   ],
   learn:[
    {h:"How passwords really get stolen", body:[
      {lead:"To choose a good password, it helps to know how attackers actually get them. It’s rarely by sitting and guessing."},
      "A [[password]] is a secret you share with a service so it can tell you apart from everyone else. Attackers get passwords in four main ways:",
      {table:[
        ["Method","What happens","What defends you"],
        ["Guessing common passwords","Programs try the most popular passwords (like `123456` or `password1`) on many accounts.","Anything not on a common list."],
        ["Cracking stolen password files","After a [[data-breach|breach]], attackers test huge numbers of guesses against the stolen, scrambled passwords on their own computers, with no limit on tries.","Length and true randomness."],
        ["Credential stuffing","Passwords that leaked from one site are tried on other sites.","A **different** password for every account."],
        ["Phishing","You’re tricked into typing your password into a fake page.","A password manager, two-step verification, passkeys (Lessons 3–4)."]
      ]},
      "Look at the right-hand column. A password can be long and complex and still fail against the last two methods. If you reuse it, or type it into a fake page, its strength doesn’t matter. That’s why this lesson is about **three** things together: length, uniqueness and a tool to manage them.",
      {key:"A strong password is long, unpredictable and used in exactly one place."}
    ]},
    {h:"What makes a password strong", body:[
      "Strength means one thing: how hard the password is to guess, by a person or by a program trying millions of options. Two things matter most:",
      {list:[
        "**Length.** Each extra character multiplies the number of possibilities an attacker must try. Length helps more than anything else.",
        "**Unpredictability.** A password built from patterns humans like (a name plus a year, a keyboard row, a word with `@` instead of `a`) is on attackers’ lists, however long it looks."
      ]},
      {table:[
        ["Password","Strong?","Why"],
        ["`Summer2025!`","No","A season, a year and an exclamation mark: one of the most common patterns there is."],
        ["`P@ssw0rd123`","No","Swapping letters for look-alike symbols is a trick cracking programs try automatically."],
        ["`Xq7#t`","No","Random, but only five characters, so there are too few possibilities."],
        ["`Lucia1987Buenos`","Weak","Personal details (name, birth year, city) can often be found online."],
        ["`kettle orbit maple lantern`","Yes","Four randomly chosen words: long, easy to type and not a phrase anyone would predict."],
        ["`8vR!q2Lm#Wz9tE4p`","Yes","Long and random. Hard to remember, so best created and stored by a password manager."]
      ]},
      {warn:"Never use a famous quote, song lyric, or a phrase from a book or film. Attackers include those in their guess lists. The words must be chosen at **random**, not chosen because they mean something."}
    ]},
    {h:"What current official guidance says", body:[
      "For years, websites forced people to use capitals, numbers and symbols, and to change passwords every few months. Research showed these rules backfired: people made predictable tweaks (`Password1!` became `Password2!`) and wrote passwords down. Official guidance has changed.",
      "The main standard is the US National Institute of Standards and Technology’s **NIST Special Publication 800-63B**, *Digital Identity Guidelines: Authentication and Authenticator Management*. Its current revision, **SP 800-63B-4**, was published in **July 2025**. It’s written for organisations that run sign-in systems, but it tells you what good services should do, and why:",
      {table:[
        ["Topic","What SP 800-63B-4 says"],
        ["Minimum length","At least **15 characters** when a password is the only way to sign in; at least **8** when it’s one part of multi-factor sign-in."],
        ["Maximum length","Services should allow at least **64 characters**, so passphrases fit."],
        ["Composition rules","Services must **not** demand mixtures such as “one capital, one number, one symbol”."],
        ["Regular changes","Services must **not** force changes on a schedule. They **must** force a change if there’s evidence the password was compromised."],
        ["Blocklist","New passwords must be checked against lists of common, expected or **already-breached** passwords."],
        ["Password managers","Services **must** allow password managers and autofill, and should allow pasting, so long random passwords are practical."],
        ["Hints and security questions","Services must not store password hints or ask “memorable questions” such as a first pet’s name."]
      ]},
      "The UK NCSC gives matching advice for the public: make passwords from **three random words**, because that’s long enough to be strong and easy enough to remember, and don’t bother swapping letters for numbers, because criminals know that trick.",
      {tip:"If a site still demands a capital, a number and a symbol, add them to your passphrase in a simple way (`Kettle orbit maple 7!`). The words do the real work."}
    ]},
    {h:"Passphrases: long but memorable", body:[
      "A [[passphrase]] is a password made of several words. Random words are much easier to remember than random characters, and they’re long. The key word is *random*: the words must be picked by chance, not by you.",
      {ol:[
        "Use a generator (most password managers have a passphrase option) or roll dice against a published word list.",
        "Take at least three or four words. More words, more strength.",
        "Keep them in the order they came out. Don’t swap in words you like better.",
        "Add a separator if you like (spaces, hyphens), and a number or symbol if a site insists.",
        "Use this kind of passphrase for the few passwords you must remember: your device sign-in, your main email and your password manager."
      ]},
      {ex:"Suppose a generator picks from a list of 2,000 words.\nOne word: 2,000 possibilities.\nTwo words: 2,000 × 2,000 = 4,000,000.\nThree words: 2,000 × 2,000 × 2,000 = 8,000,000,000 (8 billion).\nFour words: × 2,000 again = 16,000,000,000,000 (16 trillion).\nEvery extra word multiplies the attacker’s work by 2,000. That’s why length wins.", label:"Worked example: why each word helps so much"},
      "This maths only holds if the words are truly random. If you pick “my dog loves walks”, an attacker’s program that tries common phrases will find it far sooner."
    ]},
    {h:"Why reuse is the real danger", body:[
      "Data breaches happen to big and small organisations all the time, and you can’t control them. When one happens, lists of email addresses and passwords end up being traded. Attackers then run [[credential-stuffing|credential stuffing]]: programs that try each leaked pair on hundreds of other services.",
      {fig:'<svg viewBox="0 0 340 312"><defs><marker id="t1u3-l2-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-gold" x="85" y="8" width="170" height="54" rx="10" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Breached site</text><text class="s" x="170" y="50" text-anchor="middle">e.g. an old forum</text><path class="d-ink" d="M170,63 L170,87" stroke-width="2" marker-end="url(#t1u3-l2-mk)"/><rect class="d-panel" x="85" y="90" width="170" height="54" rx="10" stroke-width="2"/><text x="170" y="113" text-anchor="middle">Leaked list</text><text class="s" x="170" y="132" text-anchor="middle">email + password</text><path class="d-ink" d="M170,145 L170,166 M60.4,166 L279.6,166" stroke-width="2" fill="none"/><path class="d-ink" d="M60.4,166 L60.4,189" stroke-width="2" marker-end="url(#t1u3-l2-mk)"/><path class="d-ink" d="M170,166 L170,189" stroke-width="2" marker-end="url(#t1u3-l2-mk)"/><path class="d-ink" d="M279.6,166 L279.6,189" stroke-width="2" marker-end="url(#t1u3-l2-mk)"/><rect class="d-rose" x="9.4" y="192" width="102" height="84" rx="10" stroke-width="2"/><text x="60.4" y="214" text-anchor="middle">Email</text><text class="s" x="60.4" y="234" text-anchor="middle">same</text><text class="s" x="60.4" y="250" text-anchor="middle">password:</text><text class="s" x="60.4" y="266" text-anchor="middle">opened</text><rect class="d-sage" x="119" y="192" width="102" height="84" rx="10" stroke-width="2"/><text x="170" y="214" text-anchor="middle">Bank</text><text class="s" x="170" y="234" text-anchor="middle">unique</text><text class="s" x="170" y="250" text-anchor="middle">password:</text><text class="s" x="170" y="266" text-anchor="middle">fails</text><rect class="d-rose" x="228.6" y="192" width="102" height="84" rx="10" stroke-width="2"/><text x="279.6" y="214" text-anchor="middle">Shop</text><text class="s" x="279.6" y="234" text-anchor="middle">same</text><text class="s" x="279.6" y="250" text-anchor="middle">password:</text><text class="s" x="279.6" y="266" text-anchor="middle">opened</text><text class="s" x="170" y="300" text-anchor="middle">Programs try each pair on many sites</text></svg>', alt:"A breached site leaks a list of emails and passwords. The list is tried on an email account and a shop, which open because the same password was reused, and on a bank, which stays closed because its password was unique.", cap:"Credential stuffing: one leak opens every account that shares the password."},
      "This is why a long, clever password used in five places is weaker in practice than five different mediocre passwords. The weakest site you ever signed up for decides the safety of all the others that share its password.",
      {key:"Reuse turns one company’s breach into your problem. A unique password for every account contains the damage to one place."}
    ]},
    {h:"How password managers work", body:[
      "Nobody can remember a hundred unique strong passwords. A [[password-manager|password manager]] remembers them for you. Think of it as a locked safe for passwords: you remember **one** strong passphrase (the primary or “master” password) and the manager keeps the rest.",
      {list:[
        "**It creates** long random passwords for each new account.",
        "**It stores** them in an encrypted vault. Without your primary password (and, ideally, a second step), the vault is unreadable.",
        "**It fills them in** for you. It fills a password only on the website it was saved for, so on a fake look-alike site it stays quiet. That silence is a useful phishing warning.",
        "**It syncs** across your devices, so your phone and computer both have your passwords.",
        "Many also warn you about reused, weak or breached passwords, and can store passkeys (Lesson 3)."
      ]},
      {table:[
        ["Kind","Examples","Good to know"],
        ["Built into your browser or system","Google Password Manager (Chrome, Android), Apple Passwords (iPhone, iPad, Mac), the password manager in Microsoft Edge","Free and already there. Works best if you mostly stay in one company’s devices and browser."],
        ["Separate apps","Bitwarden, 1Password, KeePassXC and others","Work across different browsers and systems. Some are free, some are paid."]
      ]},
      "“Isn’t putting all my passwords in one place risky?” It’s a fair question. The answer is that the alternative, reusing a few passwords, is much riskier. Protect the manager well: a strong passphrase only for it, two-step verification on it, and updates on your devices. The NCSC notes that saving passwords in your browser is fine on your **own** devices, but never on shared or public computers.",
      {warn:"Never type a real password into a practice tool, a quiz, a “how strong is my password?” website you don’t know, or a form someone sent you. Practise with made-up examples only."}
    ]},
    {h:"Has my email been in a breach?", body:[
      "[Have I Been Pwned](https://haveibeenpwned.com/) is a free, long-running service that collects data from public breaches. You type your email address and it lists the known breaches that included it. (“Pwned” is internet slang for “taken over”.) The NCSC mentions it as one option, and many password managers and security apps offer a similar check.",
      "If your address shows up, don’t panic: it’s very common. It means some details you gave that site are out there. Then:",
      {ol:[
        "Change the password for that service if you still use it.",
        "Change it anywhere else you used the **same** password. This is the step that matters most.",
        "Turn on two-step verification for important accounts.",
        "Expect phishing that mentions that company or details from the leak, and be extra careful with it."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“Complex symbols make a password strong.”** Length and randomness matter more. `P@ssw0rd!` is weak.",
        "**“I should change my passwords every month.”** Change a password when there’s a reason: a breach, a phishing slip, or someone else knowing it.",
        "**“One really strong password is fine for everything.”** Not if one site leaks it. Unique beats clever.",
        "**“Writing passwords down is always wrong.”** A paper note kept safely at home is better than reusing a password. A password manager is better still."
      ]}
    ]}
   ],
   try:[
    {id:"t1u3-l2-x1", type:"mcq", q:"Which of these passwords is strongest?", options:[
      {t:"`kettle orbit maple lantern` (four words picked at random)", ok:true, why:"It’s long and the words were chosen at random, so it isn’t on any guess list. Length plus randomness is what makes a password strong."},
      {t:"`P@ssw0rd2025!`", why:"It looks complex, but it’s the word “password” with common swaps and a year. Cracking programs try exactly these patterns first."},
      {t:"`Xq7#t`", why:"Random characters, but only five of them. Short passwords have too few possibilities, so they fall quickly."},
      {t:"`Tomas1990Lisbon`", why:"Name, birth year and city are personal details that can often be found online, and this pattern is common."}
    ]},
    {id:"t1u3-l2-x2", type:"sort", q:"Sort each rule by what NIST SP 800-63B-4 (2025) says services should do.", buckets:["Recommended","Not recommended"], items:[
      {t:"Allow passwords of at least 64 characters", b:0, why:"Long limits let people use passphrases and password-manager passwords."},
      {t:"Check new passwords against lists of breached and common passwords", b:0, why:"Rejecting known-leaked or popular passwords blocks the easiest attacks."},
      {t:"Force everyone to change their password every 90 days", b:1, why:"Scheduled changes lead to predictable tweaks. Changes should be forced only when there’s evidence of compromise."},
      {t:"Require at least one capital letter, number and symbol", b:1, why:"Composition rules produce predictable patterns like `Password1!` and are no longer allowed."},
      {t:"Let people paste passwords and use password managers", b:0, why:"This makes long, random, unique passwords practical."},
      {t:"Ask “What was the name of your first pet?” as a security question", b:1, why:"Answers to such questions are often guessable or findable online. The guidance says not to use them."},
      {t:"Force a password change when there’s evidence it was leaked", b:0, why:"This is the one time a change is required: when the password may be compromised."}
    ]},
    {id:"t1u3-l2-x3", type:"number", q:"A passphrase generator picks words at random from a list of 2,000 words. How many times more possible passphrases are there with **4** words than with **3** words?", answer:2000, tol:0, unit:"times", why:"Each word is an independent choice from 2,000 options. Three words: 2,000³ possibilities. Four words: 2,000⁴. Dividing, 2,000⁴ ÷ 2,000³ = 2,000. Adding one random word multiplies the attacker’s work by the size of the word list.", wrongs:[
      {v:1.33, tol:0.01, why:"That compares the number of words (4 ÷ 3). But possibilities multiply with each word; they don’t just add up."},
      {v:8000, tol:0, why:"That multiplies 2,000 by the number of words (4). The extra word multiplies the total by 2,000 once; it doesn’t depend on how many words you already have."},
      {v:2001, tol:0, why:"Close, but possibilities multiply, they don’t add. Every existing combination can be followed by any of the 2,000 words, so it’s exactly 2,000 times as many."},
      {v:4000000, tol:0, why:"4,000,000 is 2,000 × 2,000, the number of two-word passphrases. The question asks how many **times more** four words give than three."}
    ], hint2:"Write the total for 3 words as 2,000 × 2,000 × 2,000, then add one more word."},
    {id:"t1u3-l2-x4", type:"mcq", q:"Kenji uses one 20-character random password for every account. He says it’s so strong that reuse doesn’t matter. A small online shop he once used is breached. What’s the real risk?", options:[
      {t:"Attackers can now try that exact password on his email and other accounts, and it will work everywhere he used it.", ok:true, why:"Right. Credential stuffing doesn’t need to guess anything: the breach handed over the password itself. Its length is irrelevant once it’s leaked."},
      {t:"There’s little risk because a 20-character password can’t be cracked.", why:"Cracking isn’t needed. If the shop stored it badly, or attackers phished it, they have the actual password and can reuse it anywhere."},
      {t:"Only his account at that shop is at risk.", why:"That would be true only if the password were unique to the shop. Because it’s reused, every account that shares it is exposed."},
      {t:"He should only worry if the shop had his credit card.", why:"Card details matter, but the bigger danger is the reused password opening his email and other accounts."}
    ]},
    {id:"t1u3-l2-x5", type:"order", q:"Priya is moving to a password manager. Put the steps in a sensible order.", items:[
      {t:"Choose a manager (built into her system or a separate app) and set it up.", why:"First, the tool itself."},
      {t:"Create a strong passphrase for the manager that she uses nowhere else, and store a recovery method safely.", why:"The primary passphrase protects everything else, so it comes before any passwords go in. If she loses it, a recovery method is her way back."},
      {t:"Turn on two-step verification for the manager account.", why:"This protects the vault even if the primary passphrase is ever stolen."},
      {t:"Change her main email password to a new unique one saved in the manager.", why:"Email resets other accounts, so it’s the most important password to make unique first."},
      {t:"Gradually replace reused passwords on other accounts, starting with money and messaging accounts.", why:"After email, fix the accounts that could cost money or be used to scam her contacts, then the rest over time."}
    ]},
    {id:"t1u3-l2-x6", type:"mcq", q:"Hana checks Have I Been Pwned and sees her email address in a breach of a fitness app she used two years ago. What should she do? Choose all that apply.", options:[
      {t:"Change her password on that app if she still uses it", ok:true, why:"The leaked password should no longer work there."},
      {t:"Change the password on any other account where she used the same one", ok:true, why:"This is the most important step, because credential stuffing will try that password elsewhere."},
      {t:"Be extra alert for emails that mention the fitness app or her details", ok:true, why:"Leaked details are often used to make phishing messages more convincing."},
      {t:"Delete her email account and start a new one", why:"Not needed. Appearing in a breach is very common. Changing reused passwords and turning on two-step verification is the right response."},
      {t:"Type her current passwords into a website that says it can check whether they leaked", why:"Never type real passwords into unknown sites. Password managers and trusted services can check safely without you doing this."}
    ]}
   ],
   apply:{intro:"Set up a password manager and check your email address. You’ll use made-up examples for practice; never type a real password anywhere except the real sign-in page or your password manager.", tasks:[
     {t:"Find the password manager already on your device", how:{
       win:["Open **Microsoft Edge**, select **Settings and more (…) → Settings**, then type **passwords** in the settings search box (the menu wording changes between Edge versions). If you use Chrome instead, follow the ChromeOS steps.","Or install a separate password manager app if you prefer one that works across all browsers and devices."],
       mac:["On macOS Sequoia or later, open the **Passwords** app (search with [[kbd:Cmd]] + [[kbd:Space]]).","On older macOS versions, open **System Settings → Passwords**."],
       chromeos:["Open Chrome, select the three-dot menu, then **Passwords and autofill → Google Password Manager**.","You can also open **passwords.google.com** in Chrome."],
       phone:["iPhone with iOS 18 or later: open the **Passwords** app. On older versions: **Settings → Passwords**.","Android: open Chrome and go to **⋮ → Passwords and autofill → Google Password Manager**, or open **passwords.google.com**. Some phone makers also include their own manager (for example Samsung Pass); names vary."]
     }},
     {t:"Make your main email password unique", how:["In your password manager, use **Generate password** (or a passphrase option) to create a new password.","Sign in to your email provider’s real website or app (type the address yourself; don’t use a link from a message).","Go to the account’s security settings and change the password. Let the manager save the new one.","If you used the old email password anywhere else, list those accounts to fix next."]},
     {t:"Check your email address for breaches", how:["Type **haveibeenpwned.com** into your browser’s address bar yourself.","Enter your email address (not a password) and read the results.","For each breach listed, check whether you still use that service and whether you reused that password anywhere. Your password manager’s security check can also flag reused or leaked passwords."]}
   ], proof:"Your main email account has a unique password stored in a password manager, and you have a short list of any reused passwords still to change."},
   read:[
     {book:"ncsc", where:"“Three random words”, “Password managers: how they help you secure passwords” and “Protect your email by using a strong and separate password”"},
     {book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”, subsection “Authentication and Passwords”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u3-l3", title:"Passkeys and two-step verification", minutes:50,
   hook:{q:"Cash machines use a security idea that many online accounts now copy. What is it?", options:["Needing two different things: your card and your PIN","Changing your PIN every month","Printing a receipt for every action","Only working during the day"], answer:0, reveal:"**Two different kinds of proof**: something you have (the card) and something you know (the PIN). A thief with only one of them gets nothing. Online this is called two-step verification, or [[mfa|MFA]], and this lesson shows which second steps are strongest, including passkeys that a fake website can’t trick out of you."},
   goals:[
     "Explain what two-step verification adds and why it stops most password attacks",
     "Rank the common methods (text codes, authenticator apps, push prompts, security keys, passkeys) by strength",
     "Recognise “MFA fatigue” and requests to read out a code as attacks",
     "Explain in plain terms how passkeys work and why they can’t be phished",
     "Set up recovery codes and a backup method before you need them"
   ],
   learn:[
    {h:"A second lock on the door", body:[
      {lead:"A password is one key. If someone copies it, they’re in. Two-step verification adds a second, different kind of key."},
      "You already use this idea offline. To take cash from a machine you need your bank card (something you **have**) and your PIN (something you **know**). A thief with only one of them gets nothing. Online, the same idea is called [[mfa|multi-factor authentication (MFA)]]. You’ll also see it called **two-factor authentication (2FA)** or **2-step verification (2SV)**. For everyday purposes they mean the same thing: proving it’s you in more than one way.",
      {table:[
        ["Kind of factor","Examples"],
        ["Something you know","A password, a passphrase, a PIN"],
        ["Something you have","Your phone, an [[authenticator-app|authenticator app]] on it, a [[security-key|security key]]"],
        ["Something you are","Your fingerprint or face (used to unlock a device you have)"]
      ]},
      "Why it matters: most account takeovers use a stolen password, from a breach, from phishing or from guessing. With a second step turned on, the stolen password alone isn’t enough. That’s why both the UK NCSC and CISA put turning it on among their top few tips, and why the NCSC recommends it for your most important accounts, such as email, banking, social media and online shopping. Start with email, because it can reset the others.",
      {tip:"With most services you won’t be asked for the second step every time. It’s usually needed on a new device, a new browser, or when something looks unusual."}
    ]},
    {h:"Not all second steps are equal", body:[
      "Any second step is far better than none. But they differ in how well they resist the two big tricks attackers use against them: **phishing** (tricking you into handing over the code) and taking over your phone number.",
      {table:[
        ["Method","How it works","Main weakness"],
        ["Code by text message (SMS) or voice call","The service sends a short code to your phone number.","Your number can be moved to an attacker’s SIM card (a [[sim-swap|SIM swap]]), and you can be tricked into typing or reading out the code. CISA calls this a last-resort option, though it’s still better than nothing."],
        ["Code from an authenticator app","An app (for example Google Authenticator, Microsoft Authenticator or one built into a password manager) shows a 6-digit code that changes about every 30 seconds.","No SIM swap risk, but a fake site can still ask you to type the code and pass it on quickly."],
        ["Push prompt","Your phone asks “Is this you signing in?” and you tap Approve.","Attackers with your password can send prompt after prompt, hoping you tap Approve by mistake. Showing a number you must match makes this much harder."],
        ["Security key","A small USB or NFC device you touch to confirm sign-in.","Phishing-resistant. You must keep a backup key or other method in case you lose it."],
        ["Passkey","Your device signs you in after you unlock it with your face, fingerprint or PIN.","Phishing-resistant. You need a plan for lost devices (usually synced or a backup method)."]
      ]},
      "CISA calls the last two [[phishing-resistant|phishing-resistant MFA]] and describes them as the “gold standard”. They’re built on an open standard called FIDO (and its web part, WebAuthn) and don’t give you anything to type or read out, so there’s nothing to trick you into handing over.",
      {key:"Any second step beats none. Among them, passkeys and security keys beat codes, because there’s no secret you could be tricked into giving away."}
    ]},
    {h:"The attacks on second steps, and how to beat them", body:[
      "Because two-step verification works, attackers try to get around it. Two tricks are common, and both depend on you.",
      {h:"MFA fatigue (push bombing)"},
      {ex:"At 2 a.m. Sione’s phone shows a prompt: “Approve sign-in?” He didn’t try to sign in. He taps Deny. Another arrives, then another. Half asleep, he’s tempted to tap Approve just to make them stop.\n\nWhat this means: someone already has his password. The prompts are their attempt to get the second step.\n\nWhat to do: keep denying, then change that account’s password from a device he trusts, and check the account’s recent activity. If the service supports number matching or passkeys, switch to them.", label:"Worked example: prompts you didn’t ask for"},
      "This is called [[mfa-fatigue|MFA fatigue]] or push bombing. **Number matching**, where the sign-in screen shows a number you must type or pick on your phone, defeats it: you can’t match a number you can’t see.",
      {h:"“Please read me the code”"},
      "A caller, text or chat says they’re from your bank, your phone company or a delivery firm. They say a code is about to arrive and ask you to read it back “to verify you”. That code is the key to your account; whoever asks for it is usually trying to sign in **as you** at that very moment.",
      {warn:"A real organisation will never ask you to read out or forward a sign-in code. If anyone asks, end the conversation. Then contact the organisation using a number or website you already know."}
    ]},
    {h:"How passkeys work, in plain terms", body:[
      "A [[passkey]] replaces a password with a pair of matched digital keys. You don’t see or type either of them.",
      {list:[
        "The **private key** stays with you, stored securely on your device or in your password manager. It’s unlocked only when you unlock your device with your face, fingerprint or PIN.",
        "The **public key** is given to the website. It can only *check* a signature, not make one, so it’s useless to a thief, even if the website is breached."
      ]},
      "When you sign in, the website sends a fresh random challenge. Your device signs it with the private key, and the site checks the signature with the public key. No secret travels across the internet.",
      {fig:'<svg viewBox="0 0 340 428"><defs><marker id="t1u3-l3-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="47.2" y="8" width="245.6" height="84" rx="12" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Real website</text><text class="s" x="170" y="50" text-anchor="middle">northwindbank.com</text><text class="s" x="170" y="68" text-anchor="middle">public key (can only</text><text class="s" x="170" y="84" text-anchor="middle">check, not sign)</text><path class="d-ink" d="M113.3,95 L113.3,175" stroke-width="2" marker-end="url(#t1u3-l3-mk)"/><text class="s" x="103.9" y="130" text-anchor="end">1. random</text><text class="s" x="103.9" y="146" text-anchor="end">challenge</text><path class="d-ink" d="M207.8,177 L207.8,97" stroke-width="2" marker-end="url(#t1u3-l3-mk)"/><text class="s" x="217.2" y="118">2. signed reply</text><text class="s" x="217.2" y="142">3. site checks it:</text><text class="s" x="217.2" y="158">signed in</text><rect class="d-lup" x="47.2" y="180" width="245.6" height="104" rx="12" stroke-width="2"/><text x="170" y="202" text-anchor="middle">Your device</text><text class="s" x="170" y="222" text-anchor="middle">private key (stays here)</text><text class="s" x="170" y="240" text-anchor="middle">unlocked by your face,</text><text class="s" x="170" y="256" text-anchor="middle">fingerprint or PIN</text><text class="s" x="170" y="274" text-anchor="middle">checks the real web address</text><path class="d-ink" d="M170,287 L170,355" stroke-width="2" stroke-dasharray="6 5"/><text class="s" x="160.6" y="318" text-anchor="end">asks for</text><text class="s" x="160.6" y="334" text-anchor="end">a passkey…</text><text class="s" x="179.4" y="310">no passkey for this</text><text class="s" x="179.4" y="326">domain: nothing</text><text class="s" x="179.4" y="342">is sent</text><rect class="d-rose" x="47.2" y="358" width="245.6" height="60" rx="12" stroke-width="2"/><text x="170" y="382" text-anchor="middle">Fake look-alike</text><text class="s" x="170" y="402" text-anchor="middle">n0rthwindbank.com</text></svg>', alt:"The real website, at the top, holds the public key; your device, below it, holds the private key. The website sends a challenge, the device returns a signed reply and the site checks it. Below the device, a fake look-alike website asks for a passkey, but the device has none for that domain, so nothing is sent.", cap:"A passkey signs a challenge for the exact website it was made for. A fake site gets nothing."},
      "The crucial part is that each passkey is tied to the **exact website** it was created for. Your device, not your eyes, checks the address. A fake site at a look-alike address simply has no passkey to ask for. That’s why passkeys resist phishing in a way passwords and codes can’t.",
      {table:[
        ["Question","Answer"],
        ["Does the website get my fingerprint or face?","No. Your face or fingerprint only unlocks your own device. It stays on the device."],
        ["Where are passkeys stored?","In your device’s or browser’s password manager (for example Apple Passwords with iCloud Keychain, Google Password Manager, Windows Hello) or in a separate password manager. A passkey on a security key stays on that key."],
        ["What if I sign in on someone else’s computer?","You can often choose to use a phone or tablet. The computer shows a QR code; you scan it with your phone, which must be physically nearby, and approve there."],
        ["Do all sites support them?","Not yet. Many large services do. Where they don’t, use a unique password and two-step verification."]
      ]}
    ]},
    {h:"Recovery codes and backup methods", body:[
      "Strong sign-in creates a new risk: locking **yourself** out. Phones get lost, broken or stolen. Plan for that before it happens.",
      {list:[
        "[[recovery-code|Recovery codes]] (also called backup codes) are a set of one-time codes a service gives you when you turn on two-step verification. Each one works once, in place of your usual second step.",
        "Store them where you can reach them **without** the phone you might lose: printed and kept at home, or in your password manager (but not codes for the password manager itself, inside it).",
        "Add a **second method**: a second security key, a second device with the passkey, or an up-to-date recovery phone number and email.",
        "Check your recovery phone number and email once a year. An old number you no longer own is a gift to an attacker."
      ]},
      {tip:"Synced passkeys (in Apple Passwords, Google Password Manager or a separate password manager) move with your account to a new phone. Passkeys on a single security key don’t, so register at least two keys."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Two-step verification makes my account unhackable.”** It blocks most password attacks, but codes can still be phished. Pausing before you enter or approve anything still matters.",
        "**“Text codes are useless, so I won’t bother.”** Text codes are the weakest option, but they still stop attackers who only have your password. Use something stronger where you can.",
        "**“Passkeys send my fingerprint to the company.”** They don’t. The biometric only unlocks your own device.",
        "**“If I lose my phone I lose all my accounts.”** Not if you saved recovery codes and set up a backup method beforehand.",
        "**“A prompt I didn’t trigger is just a glitch.”** Treat it as a sign someone has your password."
      ]}
    ]}
   ],
   try:[
    {id:"t1u3-l3-x1", type:"order", q:"Put these sign-in setups in order from **weakest** to **strongest** against phishing and account takeover.", items:[
      {t:"Password only", why:"Weakest: anyone with the password is in."},
      {t:"Password plus a code sent by text message", why:"Better: a password alone isn’t enough. But SMS codes can be phished and are exposed to SIM swaps."},
      {t:"Password plus a code from an authenticator app", why:"Stronger than SMS because there’s no phone number to steal, but the code can still be typed into a fake site."},
      {t:"A passkey", why:"Strongest here: it’s tied to the real website and gives you nothing to type or read out, so it’s phishing-resistant."}
    ]},
    {id:"t1u3-l3-x2", type:"mcq", q:"Late at night, Sione’s phone shows three “Approve sign-in?” prompts for his email. He isn’t signing in anywhere. What’s the best response?", options:[
      {t:"Deny them, then change his email password from a trusted device and check recent sign-in activity.", ok:true, why:"The prompts mean someone has his password and is trying to get past the second step. Denying blocks them; changing the password removes what they have."},
      {t:"Approve one so the prompts stop, then change his password in the morning.", why:"Approving lets the attacker in immediately. They could change his password and recovery details before morning."},
      {t:"Ignore them; it’s probably a glitch.", why:"Prompts you didn’t trigger are a warning sign. Ignoring them leaves the attacker with a working password."},
      {t:"Turn off two-step verification so the prompts stop.", why:"That removes the one thing currently stopping the attacker."}
    ]},
    {id:"t1u3-l3-x3", type:"match", q:"Match each sign-in method to its main weakness or catch.", pairs:[
      ["Code by text message","An attacker can move your phone number to their SIM (a SIM swap)","SMS depends on your phone number, which can be hijacked through the mobile carrier."],
      ["Push prompt without number matching","Repeated prompts can wear you down until you tap Approve","This is MFA fatigue, also called push bombing."],
      ["Code from an authenticator app","You could still type it into a fake website","The code works for whoever types it in within its short life, including a phishing site."],
      ["A single security key","If you lose it without a backup, you could be locked out","Security keys are phishing-resistant, so the main risk is losing your only one. Register two."]
    ]},
    {id:"t1u3-l3-x4", type:"number", q:"An authenticator app shows a 6-digit code, and each digit can be 0–9. How many different codes are possible?", answer:1000000, tol:0, unit:"codes", why:"Each of the 6 positions has 10 choices: 10 × 10 × 10 × 10 × 10 × 10 = 10⁶ = 1,000,000 (from 000000 to 999999). Guessing is impractical because the code changes about every 30 seconds and services limit attempts. That’s why attackers try to trick you into sharing it instead.", wrongs:[
      {v:60, tol:0, why:"That’s 6 × 10. Choices multiply for each position, they don’t add up: 10 × 10 × 10 × 10 × 10 × 10."},
      {v:999999, tol:0, why:"999,999 is the highest code, but 000000 also counts, so there’s one more: 1,000,000."},
      {v:900000, tol:0, why:"That assumes the first digit can’t be 0. Codes like 042917 are valid, so all 10 digits are allowed in every position."},
      {v:720, tol:0, why:"720 is 6 × 5 × 4 × 3 × 2 × 1, which counts ways to arrange 6 different things. Here each digit is picked from 0–9 and can repeat."}
    ]},
    {id:"t1u3-l3-x5", type:"mcq", q:"Lucía taps a link in a convincing email and lands on `northwind-bank-secure.com`, a copy of her bank’s sign-in page. She normally signs in with a passkey. What happens?", options:[
      {t:"Her device has no passkey for that address, so it can’t sign in there, and nothing useful is handed over.", ok:true, why:"Passkeys are tied to the exact website they were created for, and the device checks the address. A look-alike domain gets nothing."},
      {t:"The fake site receives her passkey and can use it on the real bank.", why:"The private key never leaves her device or password manager, and it only ever signs challenges for the real domain."},
      {t:"The fake site receives her fingerprint.", why:"Her fingerprint only unlocks her own device. It’s never sent to any website, real or fake."},
      {t:"She’s safe only if she notices the address is wrong.", why:"Noticing is good, but with a passkey she’s protected even if she doesn’t: her device checks the address for her. That’s what “phishing-resistant” means."}
    ]},
    {id:"t1u3-l3-x6", type:"sort", q:"Amara just turned on two-step verification and got 10 recovery codes. Where is it sensible to keep them?", buckets:["Sensible","Not sensible"], items:[
      {t:"Printed and kept with important papers at home", b:0, why:"Reachable even if her phone is lost, and not online for anyone to steal."},
      {t:"In her password manager (they’re for her email, not for the manager itself)", b:0, why:"Fine, as long as she can open the manager without the account the codes protect."},
      {t:"Only in a note on the phone she uses for the second step", b:1, why:"If she loses that phone, she loses the codes at the same moment she needs them."},
      {t:"In a draft email inside the same email account", b:1, why:"She’d need to get into the account to read the codes that are meant to get her into the account."},
      {t:"On a sticky note on her laptop", b:1, why:"Anyone near the laptop can see them, and they’re lost with the laptop."},
      {t:"In a sealed envelope with a trusted family member", b:0, why:"A safe, offline backup she can ask for if she’s locked out."}
    ]},
    {id:"t1u3-l3-x7", type:"mcq", q:"Tomás gets a call: “This is your bank’s fraud team. We’ve blocked a payment. You’ll get a code by text now; please read it to me so we can confirm it’s you.” What should he do?", options:[
      {t:"Refuse, hang up, and call his bank on the number printed on his card or in its official app.", ok:true, why:"A real bank won’t ask you to read out a sign-in or approval code. The caller is almost certainly trying to sign in or approve a payment as him right now."},
      {t:"Read out the code, since the caller already knows his name and bank.", why:"Scammers often have details from data breaches. Knowing his name proves nothing, and the code would let them in."},
      {t:"Ask the caller for their staff number first, then read the code.", why:"A scammer can invent a staff number. No genuine check involves reading out a code that was sent to you."},
      {t:"Call back on the number the caller gives him.", why:"That number may lead straight back to the scammer. Use a number from the card, a statement or the official app."}
    ]}
   ],
   apply:{intro:"Turn on stronger sign-in for your most important account, and make sure you can still get in if you lose your phone.", tasks:[
     {t:"Turn on two-step verification for your main email", how:["Sign in to your email provider’s website or app by typing its address yourself.","Google: **myaccount.google.com → Security** (or **Security & sign-in**) **→ 2-Step Verification**.","Microsoft: **account.microsoft.com → Security → Advanced security options**, then under **Additional security**, **Two-step verification → Turn on** (wording varies).","Apple Account: two-factor authentication is on by default for most accounts. Check under **Settings → [your name] → Sign-In & Security** on iPhone, or **System Settings → [your name] → Sign-In & Security** on a Mac.","Other providers: search their help pages for “2-step verification” or “two-factor”.","Choose the strongest method offered: passkey or security key, then an authenticator app, then text message."]},
     {t:"Create a passkey where your account offers one", how:{
       win:["In the account’s security settings, choose **Create a passkey** (or **Add a passkey**).","Windows usually offers to save it with **Windows Hello** (face, fingerprint or PIN). Your browser or a separate password manager may offer to save it instead; any of these is fine.","Test it: sign out, then sign in choosing the passkey option."],
       mac:["In the account’s security settings, choose **Create a passkey**.","Approve with Touch ID or your Mac password. It’s saved in Apple Passwords (iCloud Keychain) and syncs to your other Apple devices if iCloud Keychain is on.","Test it by signing out and back in."],
       chromeos:["In the account’s security settings, choose **Create a passkey**.","Chrome saves it in Google Password Manager (or offers to use a phone or security key).","Test it by signing out and back in."],
       phone:["iPhone: in the account’s settings choose **Create a passkey** and approve with Face ID or Touch ID. It’s saved in the **Passwords** app.","Android: choose **Create a passkey** and approve with your screen lock. It’s usually saved in Google Password Manager; some phones offer the maker’s own manager instead.","For a Google account: open **myaccount.google.com**, choose **Security**, and look for **Passkeys** (wording varies)."]
     }},
     {t:"Save your recovery codes and a backup method", how:["In the same security settings, look for **Backup codes**, **Recovery codes** or **Recovery options**.","Generate the codes and print them, or save them in your password manager.","Check that the recovery phone number and recovery email are current and belong to you.","If you use a security key, register a second one as a backup."]}
   ], proof:"Your main email has two-step verification (or a passkey) turned on, you’ve tested signing in with it, and your recovery codes are stored somewhere you can reach without your phone."},
   read:[
     {book:"ncsc", where:"“Turn on 2-step verification (2SV)”"},
     {book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”, subsection “Key Cybersecurity Technologies and Best Practices” (covers multifactor authentication)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u3-l4", title:"Spotting phishing and scams", minutes:60,
   hook:{q:"An email shows “From: Your Bank” at the top. How hard is it for a scammer to make that name appear?", options:["Nearly impossible: email checks every sender","It takes serious hacking skills","Easy: anyone can set that name","Possible, but only on very old email apps"], answer:2, reveal:"**Easy.** The display name is just text the sender types, and anyone can set it to a bank, a delivery company or your manager’s name. The address after the `@` tells you much more. This lesson shows how to read email addresses and links, and the simple pause-and-check habit that beats most scams, whatever the channel."},
   goals:[
     "Find the real domain in any web address, including tricky ones",
     "Tell a sender’s display name from their actual address",
     "Recognise the pressure tricks scams use: authority, urgency, emotion, scarcity and current events",
     "Recognise phishing by text, phone, QR code and AI-cloned voices",
     "Know exactly what to do if you clicked, typed a password or paid"
   ],
   learn:[
    {h:"Why phishing works", body:[
      {lead:"[[phishing|Phishing]] doesn’t attack your computer. It attacks your attention, at a busy or stressful moment."},
      "A phishing message pretends to come from someone you trust (a bank, a delivery company, a colleague, a relative) and tries to get you to do one thing quickly: click a link, sign in, open a file, pay, or share a code. The name comes from “fishing”: cast a lot of bait and see who bites. It arrives in many forms:",
      {table:[
        ["Name","Channel","Typical bait"],
        ["Phishing","Email","“Unusual sign-in detected. Verify your account.”"],
        ["[[spear-phishing|Spear phishing]]","Any, aimed at one person or group","Uses your name, your manager’s name or a real project to seem genuine."],
        ["[[smishing|Smishing]]","Text message (SMS) or chat app","“Your parcel is held. Pay a small fee.”"],
        ["[[vishing|Vishing]]","Voice call","“This is your bank’s fraud team.”"],
        ["[[quishing|Quishing]]","QR code","A sticker over the real code on a parking meter, or a QR code in an email."]
      ]},
      "The UK NCSC lists five tricks scammers lean on. Learn them, because they appear in almost every scam whatever the channel:",
      {list:[
        "**Authority**: it claims to be from a bank, a government department, a doctor or your boss.",
        "**Urgency**: “within 24 hours”, “immediately”, or a threat of fines or closure.",
        "**Emotion**: it makes you panic, fear, hope or feel curious.",
        "**Scarcity**: something in short supply, such as tickets, a prize, a cure or a deal.",
        "**Current events**: tax season, a big news story, a recent data breach, the holidays."
      ]},
      {key:"The feeling of “I must act right now” is itself the warning sign. Real organisations can wait while you check."}
    ]},
    {h:"Reading a web address: find the real domain", body:[
      "A [[url|URL]] is a web address. It looks like one long string, but it has parts, and only one part tells you who really runs the site: the [[domain|domain]]. All the company names and addresses in this lesson are made up.",
      {fig:'<svg viewBox="0 0 340 298"><text class="s" x="204" y="20" text-anchor="middle">host name</text><path class="d-ink" d="M100.1,64 L100.1,28 L307.9,28 L307.9,64" fill="none" stroke-width="2"/><text x="231.4" y="50" text-anchor="middle">real domain</text><path class="d-ink" d="M154.9,66 L154.9,58 L306,58 L306,66" fill="none" stroke-width="3"/><rect class="d-panel" x="30.2" y="68" width="68" height="40" rx="6" stroke-width="2"/><text x="64.2" y="93" text-anchor="middle">https://</text><rect class="d-soft" x="98.2" y="68" width="54.8" height="40" rx="6" stroke-width="2"/><text x="125.6" y="93" text-anchor="middle">login.</text><rect class="d-rose" x="153" y="68" width="111.4" height="40" rx="6" stroke-width="2"/><text x="208.7" y="93" text-anchor="middle">northwindbank</text><rect class="d-rose" x="264.4" y="68" width="45.3" height="40" rx="6" stroke-width="2"/><text x="287.1" y="93" text-anchor="middle">.com</text><text class="s" x="64.2" y="126" text-anchor="middle">scheme</text><text class="s" x="125.6" y="126" text-anchor="middle">subdomain</text><text class="s" x="208.7" y="126" text-anchor="middle">name</text><text class="s" x="287.1" y="126" text-anchor="middle">ending</text><rect class="d-lup" x="42.5" y="144" width="141.7" height="40" rx="6" stroke-width="2"/><text x="113.3" y="169" text-anchor="middle">/account/settings</text><rect class="d-sage" x="184.2" y="144" width="113.3" height="40" rx="6" stroke-width="2"/><text x="240.8" y="169" text-anchor="middle">?tab=security</text><text class="s" x="113.3" y="202" text-anchor="middle">path (page)</text><text class="s" x="240.8" y="202" text-anchor="middle">query</text><text x="170" y="232" text-anchor="middle">Read the host name from the right,</text><text x="170" y="250" text-anchor="middle">up to the first single “/”:</text><text x="170" y="268" text-anchor="middle">the ending (.com), then the name</text><text x="170" y="286" text-anchor="middle">just before it = who owns the site</text></svg>', alt:"The address https://login.northwindbank.com/account/settings?tab=security split over two rows: scheme, subdomain, domain name and ending, then path and query. The host name is login.northwindbank.com and the real domain is northwindbank.com.", cap:"Only the real domain says who runs the site. Everything to its left, and everything after the first single slash, can say anything."},
      {ol:[
        "Find the **host name**: the part after `https://` and before the next single `/`.",
        "Start at the **right-hand end** of the host name. That’s the ending (`.com`, `.org`, `.net`, or a country ending like `.de` or `.jp`).",
        "The word just to the **left** of the ending, together with the ending, is the real domain: `northwindbank.com`.",
        "Some countries use two-part endings such as `.co.uk`, `.com.au` or `.co.jp`. Then the real domain has three parts: `northwind.co.uk`.",
        "Anything further left is a [[subdomain]], chosen by whoever owns the domain. Anything after the first single `/` is just a page name. Neither proves anything."
      ]},
      {table:[
        ["Address","Real domain","Verdict"],
        ["`https://help.northwindbank.com/cards`","northwindbank.com","The bank’s own site (a help subdomain)."],
        ["`https://northwindbank.com.account-check.net/login`","account-check.net","Not the bank. “northwindbank.com” is just a subdomain someone else made."],
        ["`https://northwind-bank-secure.com`","northwind-bank-secure.com","Not the bank. Extra words make a completely different domain."],
        ["`https://secure.example-pay.com/northwindbank.com`","example-pay.com","Not the bank. The bank’s name is only in the path."]
      ]}
    ]},
    {h:"Tricks with addresses", body:[
      {list:[
        "**[[lookalike-domain|Look-alike]] characters.** `rn` looks like `m` (`rnicrosoft`), `0` like `o`, `1` or `I` like `l`. Some letters from other alphabets look identical to Latin ones; browsers sometimes show such domains in a coded form starting with `xn--`.",
        "**Extra words.** `northwindbank-login.com`, `northwindbank-support.com` and `northwindbank.help` are all different domains, and may belong to anyone.",
        "**Link text vs real link.** The words you click can say one address while the link goes somewhere else. On a computer, rest the pointer on a link (without clicking) and look at the bottom corner of the browser or mail app. On a phone, press and hold the link to see a preview of the address.",
        "**[[url-shortener|Link shorteners]].** Short links hide the destination. Real organisations do use them, so they’re not proof of a scam, but you can’t check where they go at a glance. Go to the organisation’s site or app yourself instead.",
        "**The padlock.** A padlock or `https://` means the connection is encrypted. It does **not** mean the site is honest. Scam sites use [[https|HTTPS]] too."
      ]},
      {tip:"The safest habit doesn’t involve reading links at all: don’t use links in unexpected messages to sign in or pay. Open the app, use a bookmark, or type the address you already know."}
    ]},
    {h:"Emails: names, addresses and attachments", body:[
      "Every email has a **display name** and an **address**. The display name is just text the sender typed; anyone can set it to “Northwind Bank” or your manager’s name. The address after the `@` shows the domain the email came from, and it’s much harder to fake convincingly (though, like links, it can use look-alike domains).",
      {ex:"From: Northwind Bank Security <alerts@northwind-bank-support.com>\nTo: you\nSubject: Unusual sign-in attempt – action required\n\nDear Customer,\nWe detected an unusual sign-in. To avoid suspension, verify your details within 24 hours:\n[ Verify my account ]\nAttachment: Statement_Oct.html", label:"Worked example: what’s wrong here?", mono:true},
      {list:[
        "The display name says the bank, but the address domain is `northwind-bank-support.com`, not `northwindbank.com`.",
        "“Dear Customer” is generic. (A greeting with your name isn’t proof of safety, though: names leak in breaches.)",
        "Urgency and a threat: 24 hours, suspension.",
        "A button that hides where it goes.",
        "An attachment ending in `.html`, which opens a web page from your device, often a fake sign-in form."
      ]},
      {warn:"Be wary of attachments you didn’t expect, especially files that open web pages (`.html`, `.htm`), programs (`.exe`, `.msi`, `.apk`, `.dmg`), compressed or disk-image files that hide what’s inside (`.zip`, `.iso`), and documents that ask you to “enable editing” or “enable content”. If it’s unexpected, check with the sender another way before opening it."},
      "Spear phishing at work often skips links and attachments entirely. A message that seems to come from a manager or supplier asks for an urgent payment, gift cards, or a change of bank details. The defence is a process: verify any payment or bank-detail change by calling a number you already have, never one in the message."
    ]},
    {h:"Texts, calls, QR codes and cloned voices", body:[
      {list:[
        "**Smishing.** Texts about parcels, unpaid tolls or fines, tax refunds or bank alerts, with a link. The same rules apply as for email; the address is just harder to inspect on a small screen.",
        "**Vishing.** A caller claims to be your bank, the police, a tech company or the tax office. Caller ID can be faked, so a familiar number proves nothing. Common asks: read out a code, move money to a “safe account”, or install an app that lets them control your device. Real organisations don’t do any of these.",
        "**Quishing.** A QR code is just a link you can’t read. Fake stickers on parking meters, posters or restaurant tables, and QR codes in emails, can lead to fake payment pages. The NCSC advises being wary of QR codes in emails. After scanning, your phone usually shows the address before opening it: check the domain.",
        "**AI-cloned voices and [[deepfake|deepfakes]].** A short clip of someone’s voice, for example from a video they posted, can be enough to imitate it. A call that sounds exactly like a relative in trouble may not be them. The US Federal Trade Commission’s advice: don’t trust the voice; hang up and call the person on a number you know is theirs, or check with someone else in the family.",
        "**Moving you to another app.** Scams often start in one place (a dating site, a marketplace, a job ad, social media) and quickly push you to a private chat app, where the platform’s protections and reports don’t reach. Fake investment, cryptocurrency and “earn money by rating products” job scams often work this way."
      ]},
      {warn:"Payment by gift card, cryptocurrency, wire transfer or a payment app to someone you haven’t met is a strong scam signal. These are chosen because the money is very hard to get back."},
      {tip:"Some families agree a private check question or code word to use if someone calls asking for urgent help. A scammer with a cloned voice is unlikely to know it, as long as you never share it online or by message. Calling back on a known number is still the main check."}
    ]},
    {h:"The pause-and-check routine", body:[
      "You don’t need to be an expert to beat scams. You need one habit, every time a message asks you to act:",
      {ol:[
        "**Pause.** Notice the pressure. Urgency is a reason to slow down.",
        "**Don’t use anything in the message:** not its link, phone number, QR code or reply button.",
        "**Check through a route you already trust:** the official app, a bookmark, the number on your card or a previous bill, or by calling the person on their known number.",
        "**If it was real, it will still be there.** Your bank, the delivery company or your relative can wait five minutes."
      ]},
      {table:[
        ["If a message says…","Check by…"],
        ["Your bank account has a problem","Opening the bank’s app or calling the number on your card"],
        ["A parcel needs a fee","Using the tracking page from the shop you ordered from"],
        ["Your manager wants an urgent payment","Calling or messaging them on a known number or in person"],
        ["A relative needs money now","Calling them on the number you already have"],
        ["Your device is infected (pop-up or call)","Closing the page; running your device’s built-in security scan yourself"]
      ]}
    ]},
    {h:"What to do if you clicked, typed or paid", body:[
      "Everyone can be caught. What matters is acting quickly and without embarrassment. Do what applies to you:",
      {table:[
        ["What happened","Do this now"],
        ["You typed a password into a fake page","Change it on the real site (type the address yourself). Change it anywhere you reused it. Turn on two-step verification. Check for unfamiliar sign-ins and, for email, forwarding rules."],
        ["You gave card or bank details, or paid","Contact your bank or card provider straight away, using the number on your card or in its app. Fast action gives the best chance of stopping or recovering payments."],
        ["You opened an attachment or installed something","Disconnect from the internet, run a full scan with your security software, install updates, and remove any app you installed at the scammer’s request."],
        ["You shared a code or let someone control your device","Change the affected account’s password, sign out other sessions, and tell your bank if money accounts could be involved."]
      ]},
      "Then **report it**. Use your email app’s **Report phishing** or **Report spam** option. Many countries have an official place to report scams, for example:",
      {list:[
        "**UK**: forward scam emails to `report@phishing.gov.uk` and scam texts to **7726**. If you lost money, report to Report Fraud (England, Wales and Northern Ireland) or to Police Scotland on 101.",
        "**US**: forward scam texts to **7726** (SPAM), and report fraud at ReportFraud.ftc.gov. If personal details were stolen, IdentityTheft.gov gives a recovery plan.",
        "**Elsewhere**: search your government’s official website for its scam or cybercrime reporting service."
      ]},
      {warn:"Beware of “recovery” offers afterwards. Someone who contacts you promising to get your money back for a fee is very often the same scammers trying again."}
    ]}
   ],
   try:[
    {id:"t1u3-l4-x1", type:"spot", q:"A text links to this address. Tap the parts that are warning signs.", ask:"is a warning sign", mono:true, parts:[
      {t:"https://", flag:false, why:"HTTPS only means the connection is encrypted. Scam sites use it too, so it’s neither a warning sign nor proof of safety."},
      {t:"northwindbank.com", flag:true, why:"This looks like the bank’s domain, but here it’s only a subdomain on the left. Someone else chose these letters."},
      ".",
      {t:"account-check.net", flag:true, why:"This is the real domain: the part just before the first single slash. It has nothing to do with the bank."},
      {t:"/login", flag:false, why:"The path is just a page name. It can say anything, so it doesn’t tell you who runs the site either way."}
    ], why:"Read the host name from the right: `.net`, then `account-check`. That’s who owns this site."},
    {id:"t1u3-l4-x2", type:"mcq", q:"Northwind Bank’s real domain is `northwindbank.com`. Which of these addresses belong to the bank? Choose all that apply.", options:[
      {t:"`https://help.northwindbank.com/lost-card`", ok:true, why:"The host name ends in `northwindbank.com`; `help` is a subdomain the bank chose."},
      {t:"`https://www.northwindbank.com/login`", ok:true, why:"`www` is a common subdomain, and the domain is `northwindbank.com`."},
      {t:"`https://northwindbank.com.help-desk.info/login`", why:"The real domain is `help-desk.info`. “northwindbank.com” is only a subdomain someone else added."},
      {t:"`https://northwind-bank.com/login`", why:"A hyphen makes a completely different domain, which could belong to anyone."},
      {t:"`https://northwlndbank.com/login`", why:"Look closely: an `l` replaces the `i` in “wind”. A look-alike domain is a different domain."},
      {t:"`https://secure-pay.net/northwindbank.com`", why:"The bank’s name appears only in the path. The domain is `secure-pay.net`."}
    ]},
    {id:"t1u3-l4-x3", type:"spot", q:"Fatima receives this email. Tap every part that’s a warning sign.", ask:"is a warning sign", parts:[
      "From: ", {t:"Northwind Bank", flag:false, why:"A display name matching the bank isn’t a warning sign in itself. It just isn’t proof, because anyone can type any display name. Check the address."},
      " <alerts@", {t:"northwind-bank-support.com", flag:true, why:"The sender’s domain isn’t `northwindbank.com`. A look-alike domain is a classic phishing sign."},
      ">\nTo: ", {t:"fatima.k@example.com", flag:false, why:"It’s her real address, which is normal. Scammers often have real addresses from breaches, so it proves nothing either way."},
      "\nSubject: ", {t:"Final notice: account suspension", flag:true, why:"Threat plus urgency in the subject line, designed to make her act before thinking."},
      "\n\n", {t:"Dear valued customer,", flag:true, why:"A generic greeting. Her bank normally knows her name. (A greeting with her name wouldn’t prove it’s real, though.)"},
      "\nWe noticed a sign-in from a new device. ", {t:"If this was you, no action is needed.", flag:false, why:"Real security alerts often say this. On its own it isn’t suspicious."},
      " Otherwise ", {t:"confirm your card number and PIN within 12 hours", flag:true, why:"No bank asks for your PIN, and the deadline is pressure. This is the actual goal of the email."},
      " using the attached form: ", {t:"Secure_Form.html", flag:true, why:"An `.html` attachment opens a web page from her device, often a fake sign-in or card form."}
    ], why:"Whatever the email says, the safe move is the same: open the bank’s app or call the number on her card."},
    {id:"t1u3-l4-x4", type:"spot", q:"Mei gets this text. Tap the warning signs.", ask:"is a warning sign", parts:[
      {t:"ParcelPost:", flag:false, why:"A sender name is shown on many genuine texts. It isn’t a warning sign by itself, though it can be faked, so it isn’t proof either."},
      " Your parcel is on hold ", {t:"due to an unpaid fee of 1.45", flag:true, why:"A tiny fee seems harmless, which is the point: the real aim is your card details."},
      ". ", {t:"Pay within 12 hours", flag:true, why:"A short deadline creates urgency so you don’t stop to check."},
      " or it will be returned: ", {t:"parcelpost.redelivery-fee.top/p/88", flag:true, why:"The real domain is `redelivery-fee.top`, not the delivery company’s. “parcelpost” is just a subdomain."},
      ". ", {t:"Reply STOP to opt out.", flag:false, why:"Genuine marketing texts include this too, so it’s not a warning sign. (Don’t reply to a suspected scam, though; replying confirms your number is active.)"}
    ], why:"If Mei is expecting a parcel, she can check its status on the shop’s or courier’s own site or app, not through this link."},
    {id:"t1u3-l4-x5", type:"spot", q:"A message arrives in a chat app from an unknown number. Tap the warning signs.", ask:"is a warning sign", parts:[
      {t:"Hi Dad, it’s me!", flag:false, why:"A friendly greeting is normal. It’s what follows that matters."},
      " ", {t:"I dropped my phone, this is my new number.", flag:true, why:"A “new number” story explains why the message isn’t from the usual contact. It’s the opening line of a very common family impersonation scam."},
      " ", {t:"Can you pay a bill for me today? I’ll pay you back tomorrow.", flag:true, why:"An urgent request for money is the goal."},
      " ", {t:"I can’t talk, the mic is broken.", flag:true, why:"An excuse to stop you checking by voice, which would reveal the scam."},
      " ", {t:"Love you x", flag:false, why:"Affection is normal and also used by scammers, so on its own it proves nothing."}
    ], why:"The check: call the child on their **old, known** number, or ask a question only they could answer."},
    {id:"t1u3-l4-x6", type:"order", q:"Kenji realises he typed his email password into a fake sign-in page five minutes ago. Put his next steps in the best order.", items:[
      {t:"Go to his email provider’s real site (typing the address himself) and change the password.", why:"First, make the stolen password useless, as fast as possible."},
      {t:"Turn on two-step verification, and sign out of all other sessions.", why:"This locks out anyone who may already have signed in with the old password."},
      {t:"Check for unfamiliar forwarding rules, filters and recovery details, and remove them.", why:"Attackers often add hidden forwarding or change recovery details to keep access."},
      {t:"Change the password on any other account that used the same one.", why:"Credential stuffing will try that password elsewhere next."},
      {t:"Report the phishing message using his mail app’s report option.", why:"Reporting helps block the page for others. It comes after securing his own accounts."}
    ]},
    {id:"t1u3-l4-x7", type:"mcq", q:"Ana’s phone rings. It sounds exactly like her nephew: he’s been in an accident, is scared, and needs money sent now by gift card. What should she do?", options:[
      {t:"Hang up and call her nephew, or another relative, on a number she already has.", ok:true, why:"Voices can be cloned from short clips, so the voice proves nothing. Calling a known number is the reliable check the FTC recommends. The gift-card request is another strong scam sign."},
      {t:"Send the money; the voice is definitely his.", why:"AI tools can imitate a voice convincingly from a short recording. Urgency and gift cards are classic scam signs."},
      {t:"Ask the caller to confirm his birthday before sending money.", why:"Birthdays are often on social media or in breached data, so a scammer may know it. A call to a known number is a far stronger check."},
      {t:"Call back the number that just called her.", why:"Caller ID can be faked, and calling back that number may reach the scammer. Use a number she already has saved."}
    ]},
    {id:"t1u3-l4-x8", type:"sort", q:"Sort each action: is it a safe way to check a message, or does it rely on the message itself?", buckets:["Safe way to check","Relies on the message (unsafe)"], items:[
      {t:"Calling the number printed on the back of your bank card", b:0, why:"The number came from your bank before this message existed."},
      {t:"Calling the phone number given in the text", b:1, why:"If the text is a scam, so is its number."},
      {t:"Opening the company’s official app yourself", b:0, why:"You chose the route, so the scammer can’t control where it leads."},
      {t:"Tapping the link to “see if it looks real”", b:1, why:"Fake pages can be perfect copies. Visiting can also expose you to malware or a fake sign-in form."},
      {t:"Typing the website address you already know into the browser", b:0, why:"You know where it goes, so it reaches the real site."},
      {t:"Scanning a QR sticker stuck over a parking meter’s original code", b:1, why:"Stickers can be placed by anyone. Use the payment method printed on the meter or the operator’s official app."}
    ]}
   ],
   apply:{intro:"Practise inspecting links safely and set yourself up to report scams. Use messages you already have; don’t click links in suspicious ones.", tasks:[
     {t:"Preview where a link really goes", how:{
       win:["Open an email from an organisation you use (a newsletter is fine).","Rest the mouse pointer on a link **without clicking**. The real address appears at the bottom-left of the browser or mail window.","Find the host name and its real domain using the right-to-left method."],
       mac:["Open an email from an organisation you use.","Rest the pointer on a link without clicking. In Mail or your browser, the address appears in a small pop-up or at the bottom of the window. (In Safari, turn on **View → Show Status Bar** if you don’t see it.)","Find the real domain."],
       chromeos:["Open an email in your browser.","Rest the pointer on a link without clicking; the address appears at the bottom-left of Chrome.","Find the real domain."],
       phone:["iPhone: in Mail or Messages, **touch and hold** a link. A preview shows the address. Tap outside it to cancel.","Android: **touch and hold** a link in Gmail, Messages or Chrome; a menu shows the address. Wording varies by app and phone maker.","For a QR code: point the camera at it but read the address that appears **before** tapping to open it."]
     }},
     {t:"Find the report button in your email", how:["Gmail: open the message, select the three-dot menu and choose **Report phishing** (or **Report spam**).","Outlook: select the message, then **Report → Report phishing** (wording varies between Outlook versions).","Apple Mail and other apps: use **Move to Junk**, and forward phishing to your country’s reporting address if it has one.","Note your country’s official scam-reporting service and save it as a contact or bookmark."]},
     {t:"Agree a check with family or colleagues", how:["Talk with family about voice-clone and “new number” scams.","Agree that any urgent money request is always checked by calling a known number, and consider a private code word or question.","At work or in a group, agree that any change of bank details or urgent payment is confirmed by phone on a known number."]}
   ], proof:"You can find the real domain of any link before opening it, you know where your report button is, and you’ve agreed a check routine with the people most likely to be impersonated to you."},
   read:[
     {book:"ncsc", where:"Background reading: NCSC “Phishing: Spot and report scam emails, texts, websites and calls” (linked from the Top tips collection)"},
     {book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”, subsection “Common Cyber Threats” (phishing and social engineering)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u3-l5", title:"Everyday protection", minutes:55,
   hook:{q:"A thief steals a laptop, takes out its storage drive and plugs it into another computer. What decides whether they can read your files?", options:["Whether the laptop had a screen lock set","Whether the laptop’s storage was encrypted","Whether the laptop was switched off","Which antivirus you had installed"], answer:1, reveal:"**Whether it was encrypted.** A screen lock guards the front door, but taking the drive out walks straight around it. Device encryption scrambles everything stored, so it’s unreadable without your sign-in, and on many devices it’s already on. This lesson covers that, plus updates, app permissions and public Wi-Fi."},
   goals:[
     "Explain what software updates fix and why installing them promptly matters",
     "Find and check the built-in protection on your devices",
     "Review app permissions and decide what an app really needs",
     "Explain accurately what HTTPS and a VPN do and don’t protect on public Wi-Fi",
     "Lock and encrypt your devices, and follow a first-hour plan if an account is hacked"
   ],
   learn:[
    {h:"Updates: fixing the locks", body:[
      {lead:"Every app and operating system has mistakes in it. Some of those mistakes are security holes. Updates are how they get fixed."},
      "Imagine a lock maker discovers that one model of their door lock can be opened with a hairpin. They send every owner a free replacement part. A [[software-update|software update]] is the same thing for your device: the company found a flaw (a **vulnerability**) and sends a fix, called a [[patch]].",
      "Here’s the uncomfortable part. Once a fix is published, attackers can study it to work out exactly what the flaw was, then target everyone who hasn’t installed it yet. A flaw that attackers exploit before any fix exists is called a [[zero-day|zero-day]]; those are rare and usually aimed at high-value targets. The everyday risk is far more ordinary: devices running months-old software with flaws that were fixed long ago.",
      {list:[
        "**Turn on automatic updates** for your operating system, browser and apps. The UK NCSC and CISA both list this among their top tips.",
        "**Restart when asked.** Many updates only take effect after a restart.",
        "**Update everything:** phones, computers, tablets, browsers, apps, and your home Wi-Fi router (its built-in software is called **firmware**).",
        "**Watch for end of support.** Every device eventually stops receiving security updates. After that, new flaws are never fixed. Check your manufacturer’s support dates when choosing whether to keep using an old device for banking or email."
      ]},
      {warn:"Real updates come from your device’s own settings or official app store. A web page, pop-up, email or text telling you to download an “update” is a common way to deliver malware. Close it and check for updates in Settings yourself."}
    ]},
    {h:"Built-in protection you already have", body:[
      "Every major system now ships with [[antivirus|malware protection]] built in and switched on. You don’t need to buy anything to have a solid baseline, but it helps to know what’s there and to check it’s working.",
      {table:[
        ["System","Built-in protection","What it does"],
        ["Windows 11","The **Windows Security** app, including **Microsoft Defender Antivirus**","Scans files and downloads for malware, includes a firewall, and warns about harmful apps and sites (SmartScreen). If you install another antivirus product, Defender Antivirus switches itself off so the two don’t clash."],
        ["macOS","**Gatekeeper**, **notarization** and **XProtect**","Gatekeeper checks apps before they open; notarization is Apple’s malware scan of apps distributed outside the App Store; XProtect detects and removes known malware and updates itself automatically."],
        ["Android","**Google Play Protect**","Checks apps from Google Play and scans the phone for harmful apps from other sources. It’s on by default."],
        ["iPhone and iPad","App Store review and app **sandboxing**","Apps are reviewed and each one runs in its own walled-off space. In some regions other app marketplaces are allowed, with their own checks."],
        ["ChromeOS","Automatic updates, **Verified Boot** and sandboxing","Each start-up checks that the system hasn’t been tampered with, and web pages and apps run walled off from each other."]
      ]},
      "The biggest thing *you* add is where you get software from. Install apps from your device’s official store or the developer’s own website. Avoid “free” cracked copies of paid software and apps sent to you in messages: they are a classic way to deliver [[malware]].",
      {tip:"Fake virus warnings (often called scareware) are pop-ups on web pages that say “Your computer is infected! Call this number.” Your real protection shows alerts in its own app or system notifications, never as a web page with a phone number. Close the tab; if it won’t close, close the whole browser."}
    ]},
    {h:"App permissions: who gets what", body:[
      "On phones (and increasingly on computers), apps must ask before using sensitive things: your location, camera, microphone, contacts, photos, files and more. These are [[app-permissions|app permissions]]. Each time you tap Allow, you hand over access until you take it back.",
      "The question to ask is simple: **does this app need this to do the thing I use it for?**",
      {table:[
        ["App","Asks for","Sensible?"],
        ["A map app","Location while using the app","Yes: it can’t give directions without it."],
        ["A flashlight app","Contacts and location","No: a flashlight needs neither. Deny, or choose a different app."],
        ["A video-call app","Camera and microphone","Yes, while in use."],
        ["A weather app","Precise location all the time","Usually no: “while using” and approximate location are enough for local weather."],
        ["A photo editor","All your photos","Often “selected photos only” is enough. Many phones offer this."]
      ]},
      {list:[
        "Prefer **“Allow only while using the app”** over “Always”.",
        "Prefer **approximate** location where an app only needs your town, not your exact address. Both iPhone and Android offer this choice.",
        "Review permissions every few months. Both iPhone and Android have a page listing which apps can use each permission, and Android can automatically remove permissions from apps you haven’t used in a while."
      ]}
    ]},
    {h:"Public Wi-Fi, HTTPS and VPNs", body:[
      "Cafés, airports, libraries and hotels offer [[public-wifi|public Wi-Fi]]. Older advice said never to use it. Today that’s out of date, but it isn’t risk-free either. The difference comes from [[https|HTTPS]].",
      "HTTPS (the padlock in your browser) means the connection between your device and the website is [[encryption|encrypted]]: scrambled so that only the two ends can read it. Most websites and most apps now use it. On public Wi-Fi, the network owner or anyone snooping on it can generally see **which sites** you connect to and when, but not the pages you read, what you type, or your passwords. The US Federal Trade Commission’s consumer advice says connecting through public Wi-Fi is usually safe because encryption is so widespread.",
      {fig:'<svg viewBox="0 0 340 398"><defs><marker id="t1u3-l5-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="18.9" y="8" width="170" height="40" rx="10" stroke-width="2"/><text x="103.9" y="33" text-anchor="middle">Your device</text><path class="d-ink" d="M103.9,49 L103.9,71" stroke-width="2" marker-end="url(#t1u3-l5-mk)"/><rect class="d-gold" x="18.9" y="74" width="170" height="52" rx="10" stroke-width="2"/><text x="103.9" y="96" text-anchor="middle">Café Wi-Fi</text><text class="s" x="103.9" y="115" text-anchor="middle">sees: site name, time</text><path class="d-ink" d="M103.9,127 L103.9,147" stroke-width="2" marker-end="url(#t1u3-l5-mk)"/><rect class="d-panel" x="18.9" y="150" width="170" height="40" rx="10" stroke-width="2"/><text x="103.9" y="175" text-anchor="middle">Internet</text><path class="d-ink" d="M103.9,191 L103.9,213" stroke-width="2" marker-end="url(#t1u3-l5-mk)"/><rect class="d-sage" x="18.9" y="216" width="170" height="40" rx="10" stroke-width="2"/><text x="103.9" y="241" text-anchor="middle">Website</text><path class="d-rose" d="M194.6,28 H209.7 M209.7,28 V236 M194.6,236 H209.7" stroke-width="3"/><text x="219.1" y="100">HTTPS: pages,</text><text x="219.1" y="118">typing and</text><text x="219.1" y="136">passwords are</text><text x="219.1" y="154">encrypted</text><text x="219.1" y="172">end to end</text><text x="13.2" y="286">With a VPN:</text><rect class="d-soft" x="13.2" y="298" width="188.9" height="46" rx="23" stroke-width="2"/><text class="s" x="107.7" y="317" text-anchor="middle">encrypted tunnel:</text><text class="s" x="107.7" y="334" text-anchor="middle">Wi-Fi sees only “VPN”</text><rect class="d-panel" x="213.4" y="300" width="113.3" height="42" rx="8" stroke-width="2"/><text class="s" x="270.1" y="325" text-anchor="middle">VPN company</text><text class="s" x="170" y="368" text-anchor="middle">The VPN company can now see which sites</text><text class="s" x="170" y="386" text-anchor="middle">you visit instead of the Wi-Fi owner.</text></svg>', alt:"Your device connects through café Wi-Fi and the internet to a website. HTTPS encrypts the content all the way from device to website; the Wi-Fi can see only the site name and time. With a VPN, an encrypted tunnel runs from the device to the VPN company, so the Wi-Fi sees only the VPN, but the VPN company can see which sites you visit.", cap:"HTTPS protects what you send. A VPN additionally hides where you’re going from the local network, and moves that view to the VPN company."},
      {h:"The risks that remain"},
      {list:[
        "**Fake hotspots.** Anyone can name a network “Airport Free WiFi”. A fake one can show a sign-in page asking for personal or card details. Ask staff for the real network name; be suspicious of Wi-Fi sign-in pages that want more than an email or room number.",
        "**Sites and apps without HTTPS.** Rare now, but anything sent without encryption can be read on the network. Browsers mark these as “Not secure”.",
        "**Sharing settings.** On a laptop, make sure file sharing isn’t open to everyone. On Windows, set the network type to **Public network** (the recommended default).",
        "**Phishing still works anywhere.** HTTPS protects the connection, not your judgement. A scam site has a padlock too."
      ]},
      {h:"What a VPN does and doesn’t do"},
      "A [[vpn|VPN (virtual private network)]] creates an encrypted tunnel from your device to the VPN company’s servers, and your traffic goes out to the internet from there.",
      {table:[
        ["A VPN does","A VPN doesn’t"],
        ["Hide which sites you visit from the local Wi-Fi network and your internet provider","Stop phishing, scams or fake websites"],
        ["Change the internet address (IP address) websites see","Protect you from malware you download"],
        ["Help on untrusted networks, or when an employer or school requires one","Make you anonymous: sites you sign in to still know it’s you"],
        ["Move your trust to the VPN company","Protect you if the VPN company itself is careless or dishonest"]
      ]},
      "So a VPN is a tool for particular needs, not a must-have shield. If you use one, choose a reputable provider and be wary of free VPNs whose business model you can’t see. A simple alternative on public Wi-Fi is to use your phone’s mobile data or hotspot."
    ]},
    {h:"Lock it and encrypt it", body:[
      "Devices get lost and stolen. Two settings decide whether that’s an inconvenience or a disaster.",
      {list:[
        "**A screen lock** (PIN, password, fingerprint or face) with a short auto-lock time. A 6-digit or longer PIN, or a passphrase, is much better than a 4-digit PIN or a pattern someone could watch you draw.",
        "**Device encryption** scrambles everything stored on the device so that, without your sign-in, it’s unreadable, even if someone removes the storage chip or drive."
      ]},
      {table:[
        ["Device","Encryption","Good to know"],
        ["Windows 11","**Device Encryption** (on many devices, including Windows Home) or **BitLocker** (Pro, Enterprise, Education)","Check **Settings → Privacy & security → Device encryption**. With a Microsoft account, the recovery key is saved to that account. Keep access to it."],
        ["Mac","**FileVault**","**System Settings → Privacy & Security → FileVault**. Keep your recovery key somewhere other than the Mac."],
        ["iPhone and iPad","Automatic","Data protection turns on when you set a passcode."],
        ["Android","Usually automatic","Most recent Android phones encrypt by default once a screen lock is set."],
        ["Chromebook","Automatic","ChromeOS encrypts each user’s data automatically."]
      ]},
      {warn:"Encryption keys work both ways. If you lose your password **and** your recovery key, nobody, including the manufacturer, can unlock your data. Store recovery keys safely, and keep backups (see {{rule-321}})."},
      "Turn on your device’s **find my device** feature too (Find My on Apple devices, Find Hub on Android, Find my device on Windows). It can show a lost device on a map, lock it, or erase it remotely."
    ]},
    {h:"Your first-hour plan if an account is hacked", body:[
      "Signs of a hacked account include being locked out, security settings you didn’t change, messages or posts you didn’t send, sign-ins from odd places or times, and payments you don’t recognise. If you see them, work through this list in order. It follows the UK NCSC’s guidance on recovering a hacked account.",
      {ol:[
        "**Recover access.** Use the provider’s official account-recovery page (type its address yourself). Recovery codes help here.",
        "**Check your email settings.** Remove forwarding rules, filters, and recovery phone numbers or addresses you don’t recognise. Attackers add these to keep access.",
        "**Change the password** to a new unique one, and change it on any other account that used the same password.",
        "**Sign out all other devices and sessions** in the account’s security settings.",
        "**Turn on two-step verification**, or add a passkey.",
        "**Update your devices**, and run a scan with your built-in security software if you think malware was involved.",
        "**Tell your contacts** that messages sent from your account recently may not be from you.",
        "**Check your bank and shopping accounts** for payments you don’t recognise; contact your bank through official channels.",
        "**Report it** if you lost money: to your bank, and to your country’s fraud or cybercrime reporting service."
      ]},
      {tip:"Write this plan down now, with your bank’s official phone number and where your recovery codes are kept. In a stressful moment, a list on paper is easier than remembering."},
      {key:"Updates, built-in protection, sensible permissions, a screen lock with encryption, and a written plan. None of these needs expertise, and together they turn most bad days into small ones."}
    ]}
   ],
   try:[
    {id:"t1u3-l5-x1", type:"mcq", q:"Hana uses a café’s public Wi-Fi to sign in to her bank’s website, which shows a padlock and `https://`. What can the café’s network owner generally see?", options:[
      {t:"That she connected to her bank’s site and roughly when, but not her password or the pages she viewed.", ok:true, why:"HTTPS encrypts the content between her device and the bank. The network can generally see which site she connected to, but not what she typed or read."},
      {t:"Everything, including her password, because public Wi-Fi isn’t encrypted.", why:"Even if the Wi-Fi itself has no password, HTTPS encrypts the connection from her device all the way to the bank."},
      {t:"Nothing at all, not even which site she visited.", why:"The site name is usually still visible to the network. Hiding that is what a VPN adds."},
      {t:"Only her password, but not the site name.", why:"It’s the other way round: the site name is visible, but the password is encrypted."}
    ]},
    {id:"t1u3-l5-x2", type:"sort", q:"Sort each statement about VPNs.", buckets:["A VPN does this","A VPN doesn’t do this"], items:[
      {t:"Hides which sites you visit from the local Wi-Fi network", b:0, why:"The local network sees only an encrypted connection to the VPN company."},
      {t:"Stops you from typing your password into a phishing site", b:1, why:"A VPN encrypts the route, not your judgement. A fake site works just as well through a VPN."},
      {t:"Makes you completely anonymous online", b:1, why:"Sites you sign in to still know who you are, and the VPN company can see your traffic’s destinations."},
      {t:"Changes the internet address (IP address) that websites see", b:0, why:"Websites see the VPN server’s address instead of yours."},
      {t:"Protects you from malware in a file you download", b:1, why:"A harmful file arrives just the same through the tunnel. Your built-in protection and care about sources are what help."},
      {t:"Means trusting the VPN company with information about your browsing", b:0, why:"You move the view of your traffic from the Wi-Fi owner or internet provider to the VPN company."}
    ]},
    {id:"t1u3-l5-x3", type:"match", q:"Match each built-in protection to its system.", pairs:[
      ["Microsoft Defender Antivirus, in the Windows Security app","Windows 11","Windows Security is the built-in app; Microsoft Defender Antivirus is its malware scanner."],
      ["XProtect and Gatekeeper","macOS","Gatekeeper checks apps before they open; XProtect detects and removes known malware."],
      ["Google Play Protect","Android","Play Protect checks apps from Google Play and scans for harmful apps from other sources."],
      ["FileVault","Mac disk encryption","FileVault encrypts a Mac’s startup disk."],
      ["Device Encryption or BitLocker","Windows disk encryption","Device Encryption (available on many devices, including Windows Home) uses BitLocker technology; full BitLocker controls come with Pro, Enterprise and Education."]
    ]},
    {id:"t1u3-l5-x4", type:"mcq", q:"Sione installs a free flashlight app. It asks for access to his contacts and his precise location. What should he do?", options:[
      {t:"Deny both, because a flashlight doesn’t need either; if it won’t work without them, uninstall it and pick another.", ok:true, why:"Permissions should match what the app does. Contacts and location have nothing to do with a flashlight, so the app may be collecting data to sell or misuse."},
      {t:"Allow both; apps only ask for what they need.", why:"Apps often ask for more than they need, sometimes to collect and sell data. You decide."},
      {t:"Allow location but deny contacts.", why:"A flashlight needs neither. Location reveals where he lives and goes."},
      {t:"Allow both but only while using the app.", why:"“While using” is a good habit for permissions an app genuinely needs. These ones it doesn’t need at all."}
    ]},
    {id:"t1u3-l5-x5", type:"order", q:"Lucía realises her email account has been hacked. Put the first-hour steps in the order the UK NCSC’s recovery guidance gives.", items:[
      {t:"Use the provider’s official recovery process to get back into the account", why:"Everything else depends on having control of the account."},
      {t:"Check for and remove unfamiliar forwarding rules and recovery details", why:"Attackers set these to intercept password resets. Clear them before changing the password, or the new reset could be forwarded too."},
      {t:"Change the password, and any other account that used the same one", why:"This makes the stolen password useless everywhere."},
      {t:"Sign out all other devices and sessions", why:"Anyone still signed in is removed and would need the new password."},
      {t:"Turn on two-step verification", why:"This stops the attacker coming straight back with a future stolen password."},
      {t:"Tell her contacts and check her bank and shopping accounts", why:"Finally, limit the knock-on harm: warn people who may get scam messages from her account, and look for unauthorised payments."}
    ]},
    {id:"t1u3-l5-x6", type:"mcq", q:"While reading a news site, Dmitri’s browser fills with a flashing page: “WARNING! Your computer is infected. Call support now on this number.” What’s the best action?", options:[
      {t:"Close the tab or the whole browser, don’t call the number, and run a scan with his built-in security app if he’s worried.", ok:true, why:"This is scareware, a tech-support scam. Real protection warns through its own app or system notifications, not a web page with a phone number."},
      {t:"Call the number, since it might be genuine Microsoft or Apple support.", why:"Genuine companies don’t put phone numbers in pop-up warnings. The caller would likely ask for payment or remote access to his device."},
      {t:"Download the cleaning tool the page offers.", why:"The “tool” is often the malware itself."},
      {t:"Turn the computer off and never use that browser again.", why:"Overkill. Closing the browser removes the page. The browser itself isn’t infected by a page like this."}
    ]},
    {id:"t1u3-l5-x7", type:"sort", q:"Which of these “update” messages are trustworthy, and which are suspicious?", buckets:["Trustworthy","Suspicious"], items:[
      {t:"Settings → Windows Update shows updates ready to install", b:0, why:"Updates found by the system’s own settings come from the real source."},
      {t:"A web page says your browser is out of date and offers `update.exe` to download", b:1, why:"Browsers update themselves through their own settings. Download prompts on web pages are a common malware trick."},
      {t:"Your phone’s official app store lists updates for your installed apps", b:0, why:"App updates from the official store are the normal, safe route."},
      {t:"An email with an attached “security patch” from IT support you don’t recognise", b:1, why:"Patches aren’t sent as email attachments. Check with your organisation’s real IT team another way."},
      {t:"A text saying “Update your banking app now” with a link", b:1, why:"Update apps from the official store, not through links in texts."},
      {t:"System Settings → General → Software Update on a Mac shows a macOS update", b:0, why:"That’s the Mac’s own built-in update tool."}
    ]}
   ],
   apply:{intro:"Spend fifteen minutes checking the protection you already have. Do your main computer and your phone.", tasks:[
     {t:"Check that updates are automatic", how:{
       win:["Open **Start → Settings → Windows Update**.","Select **Check for updates** and install anything waiting. Restart if asked.","Under **Advanced options**, you can choose to get updates for other Microsoft products too."],
       mac:["Open **Apple menu → System Settings → General → Software Update**.","Install any update shown.","Select the info button next to **Automatic Updates** and make sure security responses and system files are set to install automatically."],
       chromeos:["Open **Settings → About ChromeOS → Check for updates**.","ChromeOS updates automatically; restart when the update arrow appears.","This page also shows if your Chromebook has stopped getting updates."],
       phone:["iPhone: **Settings → General → Software Update**. Turn on **Automatic Updates**.","Android: usually **Settings → System → Software update** (Samsung: **Settings → Software update**; names vary). Also check Google Play system updates if your phone lists them.","Apps: in the App Store or Google Play, turn on automatic app updates."]
     }},
     {t:"Check your built-in protection", how:{
       win:["Search the Start menu for **Windows Security** and open it.","Look for green ticks. Open **Virus & threat protection** and run a **Quick scan**."],
       mac:["Gatekeeper and XProtect run automatically. Keep automatic security updates on (previous task).","In **System Settings → Privacy & Security**, under **Security**, keep **Allow applications from** set to the App Store, or the App Store and known developers (wording varies by macOS version)."],
       chromeos:["Protection is built in. Keep updates on, and install apps only from Google Play or the Chrome Web Store."],
       phone:["Android: open **Google Play**, tap your profile picture, then **Play Protect → Settings**, and check **Scan apps with Play Protect** is on.","iPhone: keep iOS updated and install apps only from the App Store or another marketplace you trust."]
     }},
     {t:"Review app permissions", how:{
       win:["Open **Settings → Privacy & security**. Under **App permissions**, check **Location**, **Camera** and **Microphone**."],
       mac:["Open **System Settings → Privacy & Security**. Check **Location Services**, **Camera**, **Microphone** and others."],
       chromeos:["Open **Settings → Privacy and security → Privacy controls** to manage camera, microphone and location (wording varies with version)."],
       phone:["iPhone: **Settings → Privacy & Security**, then tap **Location Services**, **Camera**, **Photos** and so on.","Android: **Settings → Security & privacy → Privacy → Permission manager** (names vary by phone maker). Switch anything that doesn’t need “all the time” to “while using the app”."]
     }},
     {t:"Lock and encrypt", how:{
       win:["**Settings → Accounts → Sign-in options**: set up a PIN or Windows Hello.","**Settings → Privacy & security → Device encryption**: check it’s on. If you only see BitLocker, search Start for **Manage BitLocker**. If neither appears, your device or edition may not support it."],
       mac:["**System Settings → Lock Screen**: require a password soon after sleep or the screen saver.","**System Settings → Privacy & Security → FileVault**: turn it on if it’s off, and store the recovery key safely."],
       chromeos:["**Settings → Privacy and security → Lock screen and sign-in**: require a password or PIN when waking from sleep. Your data is encrypted automatically."],
       phone:["iPhone: **Settings → Face ID & Passcode** (or **Touch ID & Passcode**): use a 6-digit or longer passcode. **Settings → Display & Brightness → Auto-Lock**: pick a short time.","Android: **Settings → Security** (or **Security & privacy**) **→ Screen lock**: choose a PIN or password. Set a short **Screen timeout** under **Display**."]
     }},
     {t:"Write your first-hour plan", how:["On paper, list the nine steps from this lesson.","Add your bank’s official phone number (from your card), where your recovery codes are, and your country’s fraud reporting service.","Keep it with your important papers."]}
   ], proof:"Your computer and phone have automatic updates on, built-in protection active, permissions reviewed, a screen lock with encryption, and a written first-hour plan."},
   read:[
     {book:"ncsc", where:"“Install the latest software and app updates” and “Backing up your data”"},
     {book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”, subsections “Securing Information and Communication” (encryption) and “Malware Detection Methods”"}
   ]
  }
  ],
  checkpoint:["t1u3-q02","t1u3-q06","t1u3-q11","t1u3-q15","t1u3-q17","t1u3-q21","t1u3-q25","t1u3-q30","t1u3-q33","t1u3-q36","t1u3-q41","t1u3-q44"],
  codex:[
   {id:"threat-landscape", title:"Threats to ordinary people", aka:["cyber threats","why me?","attack types"], tags:["security","basics"],
    summary:"Why everyday people are targeted, what attackers want, and the main kinds of attack.",
    levels:{
     starter:[
      "Most online attacks aren’t personal. They’re like someone walking down a street trying every door handle: programs send millions of scam messages, try millions of leaked passwords and look for devices that are missing updates. Whoever has an unlocked door gets hit.",
      "Attackers want things almost everyone has: money (card details, bank access), accounts (especially email, which can reset other accounts), personal data (to open loans in your name or make scams more convincing), access to the people who trust you, and sometimes your device’s computing power.",
      "The main threats are [[phishing]] (fake messages), [[malware]] (harmful software), [[ransomware]] (malware that locks files), [[scam|scams]], [[social-engineering|social engineering]] (manipulating people), [[data-breach|data breaches]] and [[credential-stuffing|credential stuffing]] (reusing leaked passwords).",
      {key:"You don’t need to be important to be attacked, and you don’t need to be an expert to be protected. A few habits block most attacks."}
     ],
     builder:[
      "Real incidents are usually chains of small weaknesses. A typical chain: a website you used years ago is breached; your email and password from it are traded; a program tries that pair on popular services; it works on your email because you reused the password and had no second step; the attacker then resets other accounts and messages your contacts.",
      {table:[
        ["Threat","How it usually reaches you","Main defence"],
        ["Phishing and scams","Email, text, calls, chat apps, QR codes","Pause and check through a route you trust"],
        ["Malware","Fake downloads, attachments, cracked software","Official app sources, updates, built-in protection"],
        ["Ransomware","Malware, often via phishing or unpatched systems","Updates, backups, care with attachments"],
        ["Data breaches","A company you use is hacked","Unique passwords, two-step verification"],
        ["Credential stuffing","Leaked passwords tried on other sites","Unique passwords, two-step verification"]
      ]},
      "CISA’s Secure Our World campaign boils the response down to four steps: strong passwords and a password manager, multifactor authentication, recognising and reporting phishing, and updating software. The UK NCSC’s Top tips add backups and three-random-word passwords. Both lists are short on purpose: these steps close the doors most attacks try.",
      "A quick way to judge any new warning you hear about: ask **what does the attacker need from me?** Usually it’s one of three things: that you click or open something, that you hand over a secret (password, code, card number), or that you skip an update. Each of the core habits takes one of those away."
     ],
     pro:[
      "Security professionals talk about an **attack surface** (all the ways in) and **threat actors** (who attacks, with what motive and skill). For individuals, the dominant actors are financially motivated criminals running high-volume, low-cost operations. Their economics explain their methods: they favour attacks that scale, like mass phishing, credential stuffing against many services, and exploiting known, already-patched vulnerabilities in devices that haven’t updated.",
      "Targeted attacks do happen to ordinary people, usually because of their role (someone who pays invoices at work, an administrator of a community group’s accounts) or their circumstances (a public profile, a domestic abuse situation, a high-value crypto wallet). These raise the stakes but use the same building blocks: social engineering, stolen credentials and malware.",
      "A useful habit is to think in **controls** that break the chain at several points rather than relying on one. Unique passwords limit the damage of a breach; phishing-resistant sign-in (passkeys, security keys) defeats credential theft; updates remove known vulnerabilities; backups make ransomware survivable; and a verification habit (calling back on a known number) defeats most social engineering. This layered idea is often called **defence in depth**.",
      {tip:"When you read about a new scam or attack, ask which link in the chain it targets. Usually one of the habits you already have still breaks it."}
     ]
    },
    related:["cia-triad","phishing","malware","data-breach","social-engineering","passwords"],
    read:[{book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”: “Common Cyber Threats”"}],
    sources:[{t:"CISA: Secure Our World", url:"https://www.cisa.gov/secure-our-world"},{t:"NCSC: Top tips for staying secure online", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online"}], checked:"2026-10"},

   {id:"cia-triad", title:"Confidentiality, integrity and availability", aka:["CIA triad","security goals"], tags:["security","basics"],
    summary:"The three things security protects: information is seen only by the right people, stays correct, and is there when you need it.",
    levels:{
     starter:[
      "Security professionals describe what they protect with three words, called the **CIA triad** (nothing to do with any intelligence agency).",
      {list:[
        "**Confidentiality**: only the right people can see the information. Like a sealed letter.",
        "**Integrity**: the information is correct and hasn’t been changed without permission. Like a signed contract nobody can secretly edit.",
        "**Availability**: you can get to it when you need it. Like having the key to your own filing cabinet."
      ]},
      "Every attack harms at least one of these. Someone reading your messages breaks confidentiality. Someone changing the bank details on an invoice breaks integrity. [[ransomware|Ransomware]] locking your photos breaks availability.",
      "You can use the three words to think about any worry: “Could someone see this? Could someone change it? Could I lose it?” Each answer points to a different defence."
     ],
     builder:[
      "The triad helps you choose the right defence, because each corner has its own tools.",
      {table:[
        ["Goal","Threatened by","Everyday defences"],
        ["Confidentiality","Breaches, stolen passwords, lost devices, snooping","Unique passwords, two-step verification, encryption, screen locks"],
        ["Integrity","Tampering, fake invoices, malware, mistakes","Verifying changes by phone on a known number, version history, updates"],
        ["Availability","Ransomware, theft, broken devices, locked-out accounts","Backups, recovery codes, updates"]
      ]},
      "Some defences pull in different directions. Strong sign-in protects confidentiality, but if you lose your only security key and have no recovery codes, it hurts availability: you lock yourself out. Encryption protects confidentiality, but losing the recovery key makes your own data unavailable. Good security balances all three: strong protection **plus** a recovery plan.",
      "Modern ransomware often hits two corners at once: it locks files (availability) and threatens to publish copies (confidentiality). That’s why backups alone don’t solve it, and why preventing infection matters too.",
      "Worked example: Tomás keeps his community group’s membership list in a shared spreadsheet. **Confidentiality**: share it only with named people, not “anyone with the link”. **Integrity**: turn on version history so changes can be seen and undone. **Availability**: keep a backup outside the shared folder. One file, three different protections.",
      "Ask the three questions whenever you set something up, not only after something goes wrong."
     ],
     pro:[
      "The CIA triad is a long-standing model in information security, used in standards and textbooks as the basic statement of security objectives. Many frameworks add related properties: **authenticity** (you’re dealing with who you think), **non-repudiation** (someone can’t plausibly deny an action they took, often via digital signatures), and **privacy** (appropriate handling of personal data, which is broader than confidentiality).",
      "Cryptography maps onto the triad unevenly. Encryption provides confidentiality. Hashes and message authentication codes detect changes, supporting integrity. Digital signatures support integrity and authenticity, and are how passkeys prove possession of a private key. Cryptography does little for availability, which depends on redundancy, backups and resilient systems.",
      "In risk assessment, analysts ask for each asset: what would a loss of confidentiality, integrity or availability cost? A family photo archive is mainly an availability concern; medical records are a confidentiality concern; a payroll spreadsheet is strongly an integrity concern. Rating impact this way helps decide where to spend limited effort.",
      {tip:"When something goes wrong, naming the affected corner speeds up the response: confidentiality incidents need password changes and notifications; integrity incidents need checking and correcting data; availability incidents need restoring from backup."},
      "Note that availability failures are often accidental (a broken drive, a lost phone, a forgotten password), which is why recovery planning belongs in security, not just IT support."
     ]
    },
    related:["threat-landscape","device-encryption","ransomware"],
    read:[{book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”: “Securing Information and Communication”"}],
    sources:[{t:"OpenStax Introduction to Computer Science, 14.2 Cybersecurity Deep Dive", url:"https://openstax.org/books/introduction-computer-science/pages/14-2-cybersecurity-deep-dive"}], checked:"2026-10"},

   {id:"phishing", title:"Phishing", aka:["smishing","vishing","quishing","spear phishing","scam emails"], tags:["security","scams"],
    summary:"Fake messages that trick you into clicking, signing in, paying or sharing a code, by email, text, call, chat or QR code.",
    levels:{
     starter:[
      "Phishing is a message pretending to be from someone you trust (your bank, a delivery company, a colleague, a relative) that tries to get you to act fast: click a link, sign in, open a file, pay, or read out a code.",
      "It comes by email, text message ([[smishing]]), phone call ([[vishing]]), chat app or QR code ([[quishing]]). When it’s aimed at a particular person using real details, it’s [[spear-phishing|spear phishing]].",
      "The UK NCSC lists the tricks to watch for: **authority** (claims to be official), **urgency** (act now), **emotion** (fear, hope, curiosity), **scarcity** (limited offer) and **current events**.",
      {key:"Don’t use anything in the message. Check through a route you already trust: the official app, a bookmark, or the number on your card."}
     ],
     builder:[
      "Check a message in this order:",
      {ol:[
        "**Did I expect it?** Unexpected messages that want action deserve suspicion.",
        "**Who really sent it?** Look at the address after the `@`, not the display name.",
        "**Where do links go?** Hover (computer) or press and hold (phone) to see the address, then find its real domain. See {{url-anatomy}}.",
        "**What does it want?** Passwords, codes, card details, payment by gift card or crypto, or installing an app are major red flags.",
        "**How does it make me feel?** Pressure is the scammer’s main tool."
      ]},
      "Reporting helps everyone. Use **Report phishing** in your email app. In the UK, forward suspicious emails to `report@phishing.gov.uk` and texts to 7726. In the US, texts can also go to 7726, and the FTC suggests forwarding phishing emails to `reportphishing@apwg.org` and reporting fraud at ReportFraud.ftc.gov. Elsewhere, look up your national reporting service.",
      {warn:"A padlock or `https://` doesn’t make a site trustworthy; it only means the connection is encrypted. Phishing sites use HTTPS too."},
      "Spear phishing aimed at work often has no link at all: a short, friendly message from a “manager” asking if you’re free for a quick task, followed by a request for gift cards or a payment. The fix is a rule, not a judgement call: payment requests and bank-detail changes are always confirmed by a call to a known number."
     ],
     pro:[
      "Modern phishing increasingly targets the second step of sign-in. **Adversary-in-the-middle** phishing kits sit between you and the real site: you type your password and one-time code into the fake page, which relays them instantly to the real service and captures the resulting session. This is why codes (SMS or authenticator app) are called phishable, and why CISA promotes phishing-resistant methods such as FIDO passkeys and security keys, which bind sign-in to the genuine domain.",
      "Other current patterns: **callback phishing** (an email with no link, only a phone number to call about a fake invoice); **QR codes** in emails, which move the link to a phone that may lack the work computer’s filtering; **HTML attachments** that render fake sign-in pages locally; and **business email compromise**, where a real but hijacked supplier or manager account asks for a change of bank details.",
      "Organisations reduce phishing with email authentication (SPF, DKIM and DMARC let receiving servers check whether a message really came from the domain it claims), link scanning, and training. But no filter is perfect, so the durable defences are process-based: verify payment changes out of band, never share codes, and use sign-in methods that can’t be phished.",
      {tip:"A password manager that refuses to autofill is a strong hint you’re not on the site you think you are."}
     ]
    },
    related:["url-anatomy","social-engineering","passkeys","incident-response"],
    read:[{book:"ncsc", where:"Background reading: NCSC “Phishing: Spot and report scam emails, texts, websites and calls”"}],
    sources:[{t:"NCSC: Spotting scam messages and calls", url:"https://www.ncsc.gov.uk/collection/phishing-scams/spot-scams"},{t:"NCSC: Report a scam email", url:"https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-email"},{t:"FTC: How to recognize and avoid phishing scams", url:"https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"}], checked:"2026-10"},

   {id:"url-anatomy", title:"Reading a web address", aka:["URL","domain name","finding the real domain","subdomain"], tags:["security","web","scams"],
    summary:"How to split a web address into its parts and find the real domain that tells you who runs the site.",
    levels:{
     starter:[
      "A [[url|URL]] is a web address, like `https://login.northwindbank.com/account?tab=security`. It has parts, and only one of them tells you who runs the site: the **real domain**.",
      {ol:[
        "Find the **host name**: the bit between `https://` and the next single `/`. Here: `login.northwindbank.com`.",
        "Read it from the **right**: the ending `.com`, then the name just before it, `northwindbank`. Together, `northwindbank.com` is the real [[domain]].",
        "Anything to the left (`login.`) is a [[subdomain]], chosen by the domain’s owner. Anything after the first `/` is just a page name."
      ]},
      "So `northwindbank.com.account-check.net` belongs to `account-check.net`, not the bank. (All names here are made up.)",
      "You don’t need to understand every part. Learning to spot the real domain is enough to catch most fake links, and it takes only a few seconds once you’ve practised."
     ],
     builder:[
      {table:[
        ["Part","Example","Can a scammer choose it freely?"],
        ["Scheme","`https://`","Yes: any site can have HTTPS"],
        ["Subdomain","`login.`, `secure.`, `northwindbank.com.`","Yes, on their own domain"],
        ["Domain name + ending","`account-check.net`","Only one they’ve registered"],
        ["Path","`/northwindbank/login`","Yes"],
        ["Query","`?user=you`","Yes"]
      ]},
      "Watch for these tricks:",
      {list:[
        "**Two-part endings**: in `northwind.co.uk`, the ending is `.co.uk`, so the real domain is `northwind.co.uk`.",
        "**Extra words**: `northwindbank-secure.com` is a different domain from `northwindbank.com`.",
        "**Look-alike characters**: `rn` for `m`, `0` for `o`, `l` for `i`.",
        "**Shorteners**: short links hide the destination entirely.",
        "**Link text vs target**: the visible words of a link can differ from where it goes. Hover or press and hold to see the real target."
      ]},
      "How to see a link’s real address before opening it: on a computer, rest the pointer on the link and read the address that appears at the bottom of the window; on a phone, press and hold the link until a preview or menu shows the address. For QR codes, most phone cameras show the address before opening it.",
      "If an address is hard to judge, don’t try to be clever. Close the message, open the organisation’s app or a bookmark, or type the address you already know. You never have to decide whether a link is safe if you don’t use it."
     ],
     pro:[
      "Formally, a URL has a scheme, an authority (host and optional port, and historically optional user information), a path, an optional query after `?`, and an optional fragment after `#`. The fragment is never sent to the server. The host is read right to left in the Domain Name System: the top-level domain, then the registered name, then any number of subdomains.",
      "Knowing where the registered part begins requires the **Public Suffix List**, a community-maintained list of endings under which people can register names (`.com`, `.co.uk`, `.github.io` and thousands more). Browsers use it to decide what counts as the same site, and it’s why `.co.uk` behaves like a single ending.",
      "Two more tricks: an `@` in the authority (`https://northwindbank.com@evil.example/`) makes everything before it user information, so the real host is after the `@`; many browsers warn about this form or hide it from the address bar. **Internationalised domain names** allow non-Latin letters; attackers can mix look-alike letters from other scripts (a homograph attack). Browsers defend by showing suspicious mixed-script names in their encoded **punycode** form, which begins with `xn--`.",
      {tip:"Passkeys and password managers check the domain for you, character by character. They’re far more reliable than eyes at catching look-alikes."},
      "Finally, remember that redirects can chain: a link on a legitimate domain may forward to another site, so it’s the address you finally land on that matters when you sign in."
     ]
    },
    related:["phishing","public-wifi-https","passkeys"],
    sources:[{t:"MDN: What is a URL?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"},{t:"NCSC: Spotting scam messages and calls", url:"https://www.ncsc.gov.uk/collection/phishing-scams/spot-scams"}], checked:"2026-10"},

   {id:"social-engineering", title:"Social engineering and scams", aka:["scams","manipulation","pretexting","impersonation scams"], tags:["security","scams"],
    summary:"Tricking people, rather than computers, into giving access, information or money.",
    levels:{
     starter:[
      "[[social-engineering|Social engineering]] means manipulating people instead of breaking technology. It’s often easier to persuade someone to hand over a code than to break the code.",
      "Common forms: a caller pretending to be your bank’s fraud team; a text from “your child” on a new number asking for money; a fake job that asks for a fee; an online romance that turns to money problems; a pop-up claiming your computer is infected with a number to call.",
      "They all push the same buttons: trust in authority, urgency, fear, kindness or hope. And they usually ask you to do something you wouldn’t normally do: share a code, pay in an unusual way, install an app, or keep it secret.",
      {key:"Any urgent request for money, codes or access gets checked through a route you already trust. Real people and organisations can wait."}
     ],
     builder:[
      {table:[
        ["Scam","The story","The check"],
        ["Bank impersonation","“Your account is at risk, move money to a safe account”","Banks never ask this. Call the number on your card."],
        ["“Hi Mum/Dad” new number","“Lost my phone, can you pay this bill?”","Call their old, known number."],
        ["Voice clone","A relative’s voice in distress","Hang up, call them on a known number."],
        ["Tech support","“Your computer is infected, call us”","Close the page. Real warnings don’t include phone numbers."],
        ["Invoice change","A supplier’s “new bank details”","Confirm by phone on a number you already have."],
        ["Investment or job","Easy profits, tasks for pay, upfront fees","Moving you to a private chat app and asking for crypto or fees is the tell."]
      ]},
      "Payment methods are a strong signal. Requests for gift cards, cryptocurrency, wire transfers or payment-app transfers to strangers are favoured by scammers because the money is hard to trace or recover.",
      {warn:"After a scam, beware of “recovery” services that contact you offering to get your money back for a fee. They’re frequently run by the same criminals."},
      "Notice that every check in the table uses a channel the scammer didn’t choose: a number you already had, an official app, or a person you can reach directly. That’s the whole technique, and it works against scams that haven’t been invented yet."
     ],
     pro:[
      "Social engineering exploits well-studied features of human decision-making: deference to authority, reciprocity, commitment (small first steps lead to larger ones), social proof, liking, and scarcity. Under time pressure people fall back on fast, intuitive judgements, which is why scams manufacture urgency.",
      "**Pretexting** builds a believable story first, often using details from data breaches or social media: your name, your bank, a recent purchase. **Authorised push payment** fraud, where victims are persuaded to send money themselves, is especially damaging because the payment was technically authorised; rules on refunds differ by country and bank.",
      "AI has lowered the cost of convincing pretexts: fluent messages in any language, cloned voices from short clips, and synthetic video. The US FTC has warned specifically about voice-cloning in family emergency scams. Defences don’t depend on spotting the fake; they depend on **out-of-band verification** through a channel the attacker doesn’t control, and on pre-agreed processes (call-backs for payment changes, family code words).",
      {tip:"In organisations, the best defence is a rule that makes refusing easy: “We never change bank details by email” or “IT will never ask for your code.” People find it far easier to follow a rule than to judge each case under pressure."},
      "Reporting matters too: it helps platforms and authorities take down scam numbers, accounts and sites quickly."
     ]
    },
    related:["phishing","threat-landscape","incident-response"],
    sources:[{t:"NCSC: Spotting scam messages and calls", url:"https://www.ncsc.gov.uk/collection/phishing-scams/spot-scams"},{t:"FTC: Scammers use AI to enhance their family emergency schemes", url:"https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes"}], checked:"2026-10"},

   {id:"malware", title:"Malware", aka:["virus","trojan","spyware","antivirus","scareware"], tags:["security","devices"],
    summary:"Harmful software, how it gets onto devices, and the built-in protection that stops most of it.",
    levels:{
     starter:[
      "[[malware|Malware]] is short for “malicious software”: any program designed to harm you or your device. A [[virus]] is one kind, but people often use “virus” for all of them.",
      "Malware can steal passwords, spy on what you type, show unwanted ads, lock your files ([[ransomware]]), or use your device to attack others.",
      "It usually gets in because someone is tricked into running it: a fake “update”, a cracked copy of paid software, an attachment, or an app from outside official stores. Sometimes it uses a security hole in software that hasn’t been updated.",
      "Every major system has built-in [[antivirus|protection]]: Windows Security with Microsoft Defender Antivirus, XProtect and Gatekeeper on Macs, Google Play Protect on Android.",
      {key:"Get software from official sources, keep it updated, and leave the built-in protection on."}
     ],
     builder:[
      {table:[
        ["Type","What it does"],
        ["Virus / worm","Spreads by copying itself; worms spread across networks on their own"],
        ["Trojan","Pretends to be something useful while doing harm"],
        ["Spyware / stalkerware","Secretly records activity, location or messages"],
        ["Infostealer","Grabs saved passwords, browser sessions and crypto wallets"],
        ["Ransomware","Locks files and demands payment"],
        ["Adware / scareware","Floods you with ads or fake virus warnings"]
      ]},
      "Signs of infection can include a suddenly slow device, pop-ups, new browser toolbars or a changed home page, unknown apps, or accounts showing activity you didn’t do. If you suspect malware: disconnect from the internet, run a full scan with your built-in security software, update everything, remove unknown apps, and change important passwords **from a different, clean device**.",
      {warn:"Fake virus warnings on web pages with phone numbers are scams. Real protection alerts appear in its own app or as system notifications."},
      "Safe-sources habit: install apps from your device’s official store (Microsoft Store, Mac App Store, Google Play, Apple App Store) or directly from the developer’s own website. Be wary of download sites that bundle extra “offers”, browser extensions you didn’t go looking for, and any app a stranger asks you to install so they can “help” you. Also keep your built-in protection switched on; there’s rarely a good reason to turn it off."
     ],
     pro:[
      "Detection uses several layers. **Signatures** match known malware. **Heuristics and behaviour monitoring** flag suspicious actions such as mass file encryption. **Reputation** systems (like Microsoft SmartScreen and Apple notarization) judge files and apps by who signed them and how widely they’re seen. On macOS, Gatekeeper checks code signing and notarization before first launch, and XProtect uses signatures that Apple updates automatically, with a remediation engine to remove known infections.",
      "Mobile systems rely heavily on **sandboxing** and store review: each app runs in its own space and must request permissions. Most mobile malware therefore arrives through sideloaded apps, abused permissions (such as accessibility services on Android) or social engineering. Google Play Protect scans apps from Play and from other sources, and may block installation of unverified apps that request sensitive permissions often abused in financial scams.",
      "Infostealers are a major current problem: they copy browser session cookies, letting attackers skip passwords and two-step verification until the session expires. After an infection, sign out of all sessions and change passwords, not just remove the malware.",
      {tip:"Running more than one real-time antivirus at once usually causes conflicts. On a home Windows PC, Microsoft Defender Antivirus switches itself off automatically when another antivirus product is registered."},
      "Stalkerware is a special case: it’s usually installed by someone with physical access, so look for unknown apps with device-administrator or accessibility access, and consider getting specialist support before removing it if your safety may be at risk."
     ]
    },
    related:["ransomware","software-updates","app-permissions","incident-response"],
    read:[{book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”: “Common Cyber Threats” and “Malware Detection Methods”"}],
    sources:[{t:"Apple Platform Security: Protecting against malware in macOS", url:"https://support.apple.com/guide/security/protecting-against-malware-sec469d47bd8/web"},{t:"Google Play Help: Use Google Play Protect", url:"https://support.google.com/googleplay/answer/2812853?hl=en"},{t:"Microsoft Support: Help protect my device with Windows Security", url:"https://support.microsoft.com/en-us/windows/help-protect-my-device-with-windows-security-1a5b8102-c93d-0573-8fd3-b2d33a1e5386"}], checked:"2026-10"},

   {id:"ransomware", title:"Ransomware", aka:["file-locking malware","extortion"], tags:["security","devices","backup"],
    summary:"Malware that encrypts your files and demands payment, and why backups and updates are the real defence.",
    levels:{
     starter:[
      "[[ransomware|Ransomware]] is malware that scrambles your files so you can’t open them, then shows a note demanding payment, usually in cryptocurrency, to unlock them.",
      "Think of someone changing all the locks in your house and selling you the keys. Your photos, documents and work are still there, but useless.",
      "It mostly arrives the same way as other malware: phishing emails, fake downloads, and security holes in software that wasn’t updated.",
      "The best defence is a recent backup kept **separate** from your device, so you can restore your files without paying. Add updates and care with attachments, and ransomware becomes a bad day rather than a disaster.",
      {key:"Backups turn ransomware from a crisis into an inconvenience. Keep at least one copy disconnected or protected from your everyday device."}
     ],
     builder:[
      "CISA describes ransomware as malware designed to encrypt files on a device, with attackers demanding payment for decryption. Many groups also **steal** data first and threaten to leak it, so-called double extortion. That hits confidentiality as well as availability.",
      {ol:[
        "**Prevent:** updates, official software sources, care with attachments and links, built-in protection on.",
        "**Prepare:** follow {{rule-321}}: several copies, different places, one offline or versioned. Cloud sync alone may copy encrypted files over good ones; version history or a separate backup helps.",
        "**Respond:** disconnect the device from networks immediately, don’t plug in backup drives until it’s clean, report it, and restore from backup onto a cleaned or reinstalled system."
      ]},
      {warn:"Paying doesn’t guarantee you get your files back, can mark you as willing to pay, and funds crime. Law enforcement agencies generally advise against paying."},
      "For home users, the most common real-world version is less dramatic but just as painful: a laptop infected through a fake download or attachment, with all its files and any connected drive or synced folder encrypted. A backup drive that’s unplugged between backups, or a cloud backup with version history, is what saves the day.",
      "If it happens, report it: to your employer’s IT team for a work device, or to your national cybercrime reporting service for a personal one."
     ],
     pro:[
      "Modern ransomware is largely run as **ransomware-as-a-service**: developers rent their tools to affiliates who break in and share the proceeds. Initial access often comes from phishing, stolen remote-access credentials, or unpatched internet-facing systems. Attackers commonly spend time inside a network before encrypting, to steal data and find and delete backups.",
      "For backups to survive, at least one copy must be **out of reach** of the infected account: physically disconnected, immutable (cannot be changed for a set period), or protected by separate credentials. File-sync services are not backups by themselves, though their version history can help recover from encryption if it reaches far enough back.",
      "CISA’s #StopRansomware Guide gives a response checklist for organisations: isolate affected systems, preserve evidence, identify the strain, report to authorities, and restore from known-good backups. Sanctions rules in some countries can make paying certain groups illegal. Free decryptors exist for some older strains through law-enforcement and industry projects.",
      {tip:"Test a restore occasionally. A backup you’ve never restored from is a hope, not a plan (see {{restore-test}})."},
      "Signs that encryption is under way include files suddenly getting new extensions, ransom notes appearing in folders, and heavy disk activity. Pulling the network connection (and, if needed, the power) limits how far it spreads, but note that powering off can destroy evidence investigators might want; organisations should follow their incident plan."
     ]
    },
    related:["malware","cia-triad","software-updates","incident-response"],
    sources:[{t:"CISA: Ransomware 101", url:"https://www.cisa.gov/stopransomware/ransomware-101"},{t:"NCSC: Backing up your data", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data"}], checked:"2026-10"},

   {id:"data-breach", title:"Data breaches and credential stuffing", aka:["breach","leak","credential stuffing","Have I Been Pwned"], tags:["security","passwords"],
    summary:"What happens when a company you use is hacked, why reused passwords turn it into your problem, and what to do.",
    levels:{
     starter:[
      "A [[data-breach|data breach]] happens when information held by an organisation is stolen or accessed without permission: emails, passwords, addresses, sometimes card numbers or ID documents.",
      "You can’t prevent other companies being breached. What you control is the damage. The biggest danger is [[credential-stuffing|credential stuffing]]: attackers take leaked email-and-password pairs and try them on other sites. If you reused that password, those accounts open too.",
      "Free services such as Have I Been Pwned (haveibeenpwned.com), and many password managers, can tell you if your email address appears in known breaches.",
      {key:"A unique password for every account means one company’s breach stays one company’s problem."},
      "Being in a breach doesn’t mean you did anything wrong. It does mean you should check that the leaked password isn’t used anywhere else."
     ],
     builder:[
      "The UK NCSC’s advice after a breach:",
      {list:[
        "Check with the organisation through its official website, not links in messages.",
        "Change the password for that service, and anywhere you used the same one. A passkey, where available, is even better.",
        "Watch for phishing that uses details from the breach. It may arrive long after the news.",
        "Look for signs of misuse: being locked out, changed settings, sign-ins from odd places, unfamiliar messages.",
        "Use a breach-checking tool to see if your details appear elsewhere."
      ]},
      "If financial details or ID numbers leaked, contact your bank, consider the identity-protection options in your country (for example, credit freezes or alerts where available), and watch statements.",
      {warn:"Never enter your actual passwords into a website you don’t know that claims to check them. Use your password manager’s built-in check instead."},
      "What leaks matters. A leaked email address mainly means more phishing. A leaked password matters wherever it was reused. Leaked card numbers mean contacting your bank. Leaked ID numbers or documents carry identity-fraud risk, so follow your country’s official guidance for identity theft.",
      "Many password managers (including the ones built into Apple, Google and Microsoft products, and several separate apps) can alert you when a saved password appears in a known breach. Turn these alerts on: they tell you exactly which account to fix."
     ],
     pro:[
      "Responsible services store passwords as salted, slow **hashes**, not as text. A hash is a one-way fingerprint: the site can check a password without storing it. After a breach, attackers run offline guessing against the hashes at high speed with no lockouts, so short or common passwords fall quickly while long random ones survive. Some breaches expose plain-text or weakly hashed passwords, in which case any password is exposed regardless of strength.",
      "Credential stuffing is automated with lists of leaked pairs (“combo lists”) and tools that rotate network addresses to evade rate limits. Services defend with breached-password checks (NIST SP 800-63B-4 requires verifiers to compare new passwords against a blocklist that includes compromised values), rate limiting, bot detection and MFA.",
      "Have I Been Pwned’s companion Pwned Passwords service lets password managers check a password against breach corpora using a **k-anonymity** method: only the first few characters of the password’s hash are sent, and matching is completed locally, so the service never learns the password.",
      {tip:"Breach notices are a favourite phishing theme. A real notice won’t need you to click a link to “secure your account”; go to the site yourself."},
      "Breach data circulates for years and gets merged into large compilations, which is why an old breach can still matter today."
     ]
    },
    related:["passwords","password-manager","mfa","threat-landscape"],
    sources:[{t:"NCSC: Data breaches (guidance for individuals)", url:"https://www.ncsc.gov.uk/guidance/data-breaches"},{t:"NIST SP 800-63B-4: Authentication and Authenticator Management", url:"https://csrc.nist.gov/pubs/sp/800/63/b/4/final"}], checked:"2026-10"},
   {id:"passwords", title:"Strong passwords and passphrases", aka:["password","passphrase","three random words","NIST SP 800-63B"], tags:["security","passwords"],
    summary:"What actually makes a password strong, what current NIST and NCSC guidance says, and how to make a passphrase.",
    levels:{
     starter:[
      "A strong [[password]] is **long**, **unpredictable** and **used in only one place**.",
      "Length matters most: each extra character multiplies the guesses an attacker needs. Unpredictable means not built from patterns people like, such as a name plus a year, `Summer2025!`, or `P@ssw0rd` with swapped symbols. Attackers’ programs try those first.",
      "The easiest strong password to remember is a [[passphrase]]: several words picked at random, like `kettle orbit maple lantern`. The UK NCSC recommends **three random words** for passwords you need to remember.",
      "For everything else, let a {{password-manager}} create and remember long random passwords for you.",
      {key:"Long, random, unique. Never reuse a password, however strong."},
      "A good test: if the password could be guessed by someone who knows you, or appears in a list of common passwords, it isn’t strong."
     ],
     builder:[
      "Official guidance changed because old rules backfired. The US standard **NIST SP 800-63B-4** (*Digital Identity Guidelines: Authentication and Authenticator Management*, final version published July 2025) tells services:",
      {table:[
        ["Rule","Current guidance"],
        ["Minimum length","15 characters if the password alone protects the account; 8 if it’s part of multi-factor sign-in"],
        ["Maximum length","Allow at least 64 characters"],
        ["Composition (capitals, symbols…)","Don’t require it"],
        ["Scheduled changes","Don’t require them; do force a change if there’s evidence of compromise"],
        ["Blocklist","Reject common, expected and breached passwords"],
        ["Hints, security questions","Don’t use them"]
      ]},
      "To make a passphrase: use a generator or dice with a word list, take at least three or four words, keep the order they came out in, and add separators or a symbol only if a site insists. Use passphrases for the few secrets you must remember: your device, main email and password manager.",
      {warn:"Song lyrics, quotes and phrases that mean something to you are not random. Attackers include them in guess lists."},
      "Where to put your effort: most of your passwords should be random ones created by a password manager, which you never need to remember. Only a handful need to be memorable passphrases.",
      "When a site’s rules force you to add a symbol, add it at the end of your passphrase; the random words provide the strength."
     ],
     pro:[
      "Password strength is best thought of as **guessing resistance** against a realistic attacker, not as a character-class checklist. For a truly random choice, the number of possibilities is the list size raised to the number of picks: four words from a 7,776-word dice list give 7,776⁴, about 3.7 × 10¹⁵ combinations (about 51.7 bits of entropy). Human-chosen passwords have far less entropy than their length suggests, which is why blocklists and length minimums work better than composition rules.",
      "SP 800-63B-4 also says verifiers should accept all printing ASCII characters and the space, should accept Unicode, must allow password managers and autofill, should allow paste, and must store passwords using a salted, deliberately slow hashing scheme. It forbids knowledge-based questions when choosing passwords and limits failed attempts to slow online guessing. Note the 15-character minimum applies to passwords used as a single factor; the standard pushes services toward MFA and phishing-resistant authenticators instead of ever-longer passwords.",
      "The **NCSC’s three random words** advice is aimed at memorability for the public; NIST’s is aimed at services. They agree on the essentials: length over complexity, no forced expiry, and unique passwords helped by a manager.",
      {tip:"If a site caps passwords at a short length or bans pasting, that’s a sign its sign-in design is outdated. Use the maximum it allows and turn on two-step verification."}
     ]
    },
    related:["password-manager","data-breach","mfa","passkeys"],
    read:[{book:"ncsc", where:"“Three random words”"},{book:"ics", where:"Section 14.2 “Cybersecurity Deep Dive”: “Authentication and Passwords”"}],
    sources:[{t:"NIST SP 800-63B-4: Authentication and Authenticator Management", url:"https://csrc.nist.gov/pubs/sp/800/63/b/4/final"},{t:"NCSC: Three random words", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/three-random-words"},{t:"NCSC: Protect your email by using a strong and separate password", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/use-a-strong-and-separate-password-for-email"}], checked:"2026-10"},

   {id:"password-manager", title:"Password managers", aka:["password vault","Apple Passwords","Google Password Manager"], tags:["security","passwords"],
    summary:"A tool that creates, stores and fills unique passwords (and passkeys), protected by one strong primary passphrase.",
    levels:{
     starter:[
      "A [[password-manager|password manager]] is like a safe for your passwords. You remember one strong passphrase to open it; it remembers everything else.",
      "It creates long random passwords for new accounts, stores them encrypted, fills them in on the right websites, and syncs them between your phone and computer. Many also warn you about reused or leaked passwords, and store passkeys.",
      "You probably already have one: Apple Passwords on iPhone, iPad and Mac, Google Password Manager in Chrome and Android, or the one in Microsoft Edge. Separate apps such as Bitwarden, 1Password or KeePassXC work across different systems.",
      {key:"A password manager is what makes a unique password for every account realistic."},
      "You still need to remember one strong passphrase, so make it a random-word passphrase you use nowhere else."
     ],
     builder:[
      "Setting one up well:",
      {ol:[
        "Choose a manager that works on all the devices you use.",
        "Protect it with a strong passphrase you use nowhere else, and turn on two-step verification for it.",
        "Set up its recovery option (a recovery code, emergency contact or account recovery) and store that safely.",
        "Change your main email password first, then money and messaging accounts, then the rest over time.",
        "Use its security report to find reused, weak or breached passwords."
      ]},
      "Autofill helps against phishing: a manager fills passwords only on the exact website they were saved for. If it doesn’t offer to fill on a page that looks like your bank, stop and check the address.",
      {warn:"The UK NCSC says saving passwords in your browser is fine on your own devices, but never on shared or public computers."},
      "“All eggs in one basket?” The basket is strongly locked and encrypted, and the alternative, reusing passwords, is far riskier. Protect the manager and the devices it runs on, and keep those devices updated.",
      "Moving in gradually is fine. Each time you sign in to an old account, let the manager generate and save a new unique password. Within a few months most of your accounts will be covered."
     ],
     pro:[
      "Most reputable cloud-syncing managers use **end-to-end encryption**: the vault is encrypted on your device with a key derived from your primary password (using a slow key-derivation function) and sometimes an additional secret key, so the provider stores only ciphertext. A breach of the provider then exposes encrypted vaults, whose safety depends on the strength of each user’s primary password. This is why that one passphrase deserves real length.",
      "Managers built into operating systems tie vault access to the device unlock and the platform account (for example, iCloud Keychain is end-to-end encrypted according to Apple). Separate managers offer cross-platform use, sharing with family or teams, and emergency access features. Offline managers such as KeePassXC keep the vault as a local file you sync yourself.",
      "Risks to manage: malware on a device can capture what you type or read unlocked data, so device hygiene matters; recovery must be planned, as a forgotten primary password with no recovery option can mean permanent loss; and phishing pages sometimes try to persuade you to copy and paste a password manually when autofill refuses, which is precisely the moment to stop.",
      {tip:"Keep a separate, offline record of how to recover your password manager. Don’t store the manager’s own recovery code inside the manager."}
     ]
    },
    related:["passwords","passkeys","mfa","data-breach"],
    read:[{book:"ncsc", where:"“Password managers: how they help you secure passwords”"}],
    sources:[{t:"NCSC: Password managers", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers"},{t:"CISA: Secure Our World", url:"https://www.cisa.gov/secure-our-world"}], checked:"2026-10"},

   {id:"mfa", title:"Two-step verification (MFA)", aka:["2FA","2SV","multi-factor authentication","two-factor","authenticator app","security key"], tags:["security","accounts"],
    summary:"Proving it’s you in more than one way, the main methods ranked by strength, and the attacks against them.",
    levels:{
     starter:[
      "[[mfa|Multi-factor authentication (MFA)]], also called two-factor authentication (2FA) or 2-step verification (2SV), means signing in needs more than a password: usually something you **have** (your phone, a [[security-key|security key]]) as well as something you **know**.",
      "Like a bank card and PIN, a thief with one isn’t enough. Even if your password leaks in a breach or a phishing page, the attacker is stuck at the second step.",
      "Turn it on first for your email, which can reset your other accounts, then banking, social media and shopping accounts. The UK NCSC names these as your most important accounts.",
      {key:"Any second step is far better than none. Strongest of all are passkeys and security keys."},
      "Usually you won’t be asked for the second step every time; services ask on a new device or when something looks unusual, so it adds little hassle day to day."
     ],
     builder:[
      {table:[
        ["Method","Strength","Watch out for"],
        ["SMS or voice code","Weakest; CISA says last resort","SIM swaps; can be phished"],
        ["Authenticator app code","Good","Can be typed into a fake site"],
        ["Push prompt with number matching","Good","Approve only what you started"],
        ["Push prompt without number matching","Fair","MFA fatigue: repeated prompts"],
        ["Security key or passkey (FIDO)","Strongest: phishing-resistant","Need a backup method"]
      ]},
      "An [[authenticator-app|authenticator app]] shows a 6-digit code that changes about every 30 seconds. It works offline and avoids SIM swap risk.",
      "Two rules defeat most attacks on MFA: **never** read out or forward a code to anyone, and **never** approve a prompt you didn’t start. Unexpected prompts mean someone has your password: deny, then change it.",
      "Plan for losing your phone: save [[recovery-code|recovery codes]], add a second method, and keep recovery phone and email current.",
      "Setting it up: look in the account’s **Security** settings for “2-step verification”, “two-factor authentication” or “sign-in options”. Start with your main email, then your password manager, banking, social media and shopping accounts. When given a choice, prefer passkeys or a security key, then an authenticator app, then text messages.",
      "Keep the second step on the devices you control: avoid using a shared family phone number for your codes where you can."
     ],
     pro:[
      "CISA’s fact sheet on phishing-resistant MFA identifies **FIDO/WebAuthn** as the only widely available phishing-resistant method for most organisations, alongside PKI-based smart cards. FIDO authenticators sign a challenge that includes the website’s origin, so a credential created for one domain cannot be used for another. One-time codes and simple push approvals are “phishing-vulnerable”: adversary-in-the-middle kits relay them in real time. CISA rates app-based codes and push with number matching above SMS and voice, which are exposed to SIM swap and telephone-network attacks.",
      "**Number matching** defeats push bombing because approving requires information shown only on the real sign-in screen. Services also use risk signals (new device, new location) to decide when to ask for a second step at all.",
      "NIST SP 800-63B-4 treats SMS and voice delivery as a restricted option with extra requirements, and requires phishing-resistant options at its higher assurance level. Account recovery is often the weakest link: if a support desk can be talked into resetting MFA, or if recovery falls back to SMS, an attacker will aim there.",
      {tip:"Check each important account’s recovery options as carefully as its sign-in options. Remove old phone numbers and add a second strong method."},
      "Some services let you see and remove the second-step methods registered to your account. Check this list periodically: an unfamiliar authenticator or security key is a sign of takeover."
     ]
    },
    related:["passkeys","passwords","phishing","incident-response"],
    read:[{book:"ncsc", where:"“Turn on 2-step verification (2SV)”"}],
    sources:[{t:"NCSC: Turn on 2-step verification (2SV)", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/activate-2-step-verification-on-your-email"},{t:"CISA: Implementing Phishing-Resistant MFA (fact sheet)", url:"https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"}], checked:"2026-10"},

   {id:"passkeys", title:"Passkeys", aka:["passwordless sign-in","FIDO","WebAuthn"], tags:["security","accounts"],
    summary:"A sign-in method using a matched pair of keys, unlocked by your face, fingerprint or PIN, that can’t be phished.",
    levels:{
     starter:[
      "A [[passkey]] lets you sign in without a password. You unlock your phone or computer with your face, fingerprint or PIN, and you’re in.",
      "Behind the scenes there are two matched keys. The **private key** stays with you, on your device or in your password manager. The **public key** goes to the website. The site sends a fresh puzzle, your device solves it with the private key, and the site checks the answer with the public key.",
      "Each passkey only works for the exact website it was made for. A fake look-alike site gets nothing, because your device won’t use the passkey there. And there’s nothing for you to type or read out, so nothing to trick out of you.",
      "Your fingerprint or face never leaves your device; it only unlocks it.",
      {key:"Passkeys are both easier and safer than passwords. Use them wherever they’re offered."}
     ],
     builder:[
      {table:[
        ["Where passkeys live","Notes"],
        ["Apple Passwords / iCloud Keychain","Syncs across your Apple devices, end-to-end encrypted"],
        ["Google Password Manager","Syncs across Android and Chrome where you’re signed in"],
        ["Windows Hello","Saved on that Windows device"],
        ["Separate password managers","Many now store and sync passkeys across systems"],
        ["Security key","Stays on the physical key; register a spare"]
      ]},
      "Creating one: in an account’s security settings choose **Create a passkey**, then confirm with your screen lock. For a Google account, open myaccount.google.com, choose **Security** and look for **Passkeys**.",
      "Signing in on someone else’s computer: choose the option to use a phone. The computer shows a QR code, you scan it with your phone, which must be nearby, and approve there.",
      "Keep a backup route: passkeys on a second device, recovery codes, or a recovery method with the account.",
      "Common worries answered: a passkey is not your fingerprint (that stays on your device); it doesn’t reveal anything useful if the website is breached (the site only holds the public key); and losing one device doesn’t lose a synced passkey. Where a site supports both passwords and passkeys, the password usually remains, so keep it unique too.",
      "Passkeys are still rolling out, so you’ll use them alongside passwords for some time. Add one whenever a service offers it."
     ],
     pro:[
      "Passkeys are FIDO2 credentials used through the W3C WebAuthn API. At registration the authenticator generates a new key pair scoped to the site’s **relying party ID** (its domain); the public key and a credential ID are stored by the site. At sign-in the browser passes the site’s origin, and the authenticator signs a challenge only if the origin matches. Phishing resistance therefore doesn’t rely on the user reading the address.",
      "**Synced passkeys** are backed up and shared across a user’s devices by a credential manager, giving recoverability; **device-bound passkeys** (typical of hardware security keys) never leave the device, which some high-assurance settings require. NIST SP 800-63B-4 addresses syncable authenticators and sets requirements for them. Cross-device sign-in uses a QR code plus a Bluetooth proximity check, so a remote attacker can’t simply relay the QR code.",
      "Because the server stores only public keys, a breach of the website doesn’t expose reusable secrets. Remaining risks are account recovery flows (often weaker than the passkey itself), malware on an already-unlocked device, and services that still allow password sign-in alongside the passkey.",
      {tip:"After adding a passkey, see whether the service lets you remove or restrict password sign-in. If it doesn’t, keep a unique password and MFA on as well."}
     ]
    },
    related:["mfa","password-manager","url-anatomy","phishing"],
    sources:[{t:"Google Account Help: Sign in with a passkey instead of a password", url:"https://support.google.com/accounts/answer/13548313?hl=en"},{t:"Apple Support: About the security of passkeys", url:"https://support.apple.com/en-us/102195"},{t:"CISA: Implementing Phishing-Resistant MFA (fact sheet)", url:"https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf"}], checked:"2026-10"},

   {id:"software-updates", title:"Software updates and patches", aka:["patch","security update","vulnerability","zero-day","end of support"], tags:["security","devices"],
    summary:"Why updates fix security holes, why installing them promptly matters, and what happens when a device stops getting them.",
    levels:{
     starter:[
      "All software has mistakes, and some are security holes, called **vulnerabilities**. When a company finds one, it releases a fix, called a [[patch]], inside a [[software-update|software update]].",
      "Once the fix is out, attackers can study it and target everyone who hasn’t updated. So the safest time to update is soon.",
      "The UK NCSC calls applying updates one of the most important and quickest things you can do. Turn on automatic updates for your system, browser and apps, and restart when asked.",
      {key:"Turn on automatic updates everywhere, and restart when prompted."},
      {warn:"Real updates come from your device’s settings or official app store, never from a pop-up, email or text link."},
      "Updates often bring new features too, but the security fixes are the part that really matters."
     ],
     builder:[
      {table:[
        ["Device","Where to check"],
        ["Windows 11","Start → Settings → Windows Update"],
        ["macOS","System Settings → General → Software Update"],
        ["ChromeOS","Settings → About ChromeOS"],
        ["iPhone / iPad","Settings → General → Software Update"],
        ["Android","Usually Settings → System → Software update (varies by maker)"]
      ]},
      "Don’t forget apps (through their stores), browsers (most update themselves; restart them occasionally), and your home router, whose firmware (built-in software) may need updating through its app or admin page.",
      "Every device eventually reaches **end of support** and stops getting security fixes. The NCSC advises checking the manufacturer’s website to see if a model is still supported, and avoiding buying unsupported phones. An unsupported device is best kept away from banking and email.",
      "Make it painless: install updates at home on Wi-Fi with the device plugged in, as the NCSC suggests, or let them run overnight. Updates can need several gigabytes of free space, so if one keeps failing, check storage first.",
      "Be careful with update prompts that appear inside web pages or emails. Genuine system and browser updates come through the device’s own settings, the official app store or the app’s built-in updater.",
      "If a device says it can no longer update, it has probably reached end of support; plan to replace it for sensitive tasks."
     ],
     pro:[
      "Vulnerabilities are catalogued publicly with **CVE** identifiers, and vendors release fixes on regular cycles (for example Microsoft’s monthly security updates) plus urgent out-of-band patches. CISA maintains a **Known Exploited Vulnerabilities** catalogue of flaws seen used in real attacks, which organisations use to prioritise.",
      "A **zero-day** is a flaw exploited before a fix exists. Zero-days are valuable and are mostly used against high-value targets; the far larger risk for most people is **n-day** exploitation of known, already-patched flaws on devices that haven’t updated. The gap between a patch’s release and attackers reverse-engineering it can be short.",
      "Some platforms update security components separately from full system updates: macOS delivers XProtect data automatically (checked daily by default, according to Apple), Android has Google Play system updates, and ChromeOS updates in the background with an A/B partition scheme so a failed update can roll back.",
      {tip:"If an update keeps failing, check free storage space and power first; many updates need several gigabytes free and a charger connected."},
      "Browsers deserve special attention because they face the internet constantly; they release security fixes frequently and usually apply them on restart, so restart your browser when it asks.",
      "For routers and smart-home gadgets, check whether automatic firmware updates are available in their app, and replace devices the maker no longer supports."
     ]
    },
    related:["malware","ransomware","threat-landscape"],
    read:[{book:"ncsc", where:"“Install the latest software and app updates”"}],
    sources:[{t:"NCSC: Install the latest software and app updates", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/install-the-latest-software-and-app-updates"},{t:"Microsoft Support: Windows Update FAQ", url:"https://support.microsoft.com/en-us/windows/windows-update-faq-8a903416-6f45-0718-f5c7-375e92dddeb2"}], checked:"2026-10"},

   {id:"public-wifi-https", title:"Public Wi-Fi, HTTPS and VPNs", aka:["HTTPS","padlock","VPN","café Wi-Fi","hotspot"], tags:["security","networks"],
    summary:"What HTTPS protects on public Wi-Fi, what risks remain, and what a VPN does and doesn’t do.",
    levels:{
     starter:[
      "[[https|HTTPS]] (the padlock in your browser) means your connection to a website is [[encryption|encrypted]]: scrambled so only your device and the website can read it. Most sites and apps use it today.",
      "So on [[public-wifi|public Wi-Fi]] in a café or airport, the network owner can generally see which sites you connect to, but not your passwords, messages or the pages you read. The US FTC says using public Wi-Fi is usually safe for this reason.",
      "Remaining risks: fake hotspots with convincing names, sign-in pages asking for more than they should, the rare site without HTTPS, and, as always, phishing.",
      {key:"The padlock protects the connection, not your judgement. Scam sites have padlocks too."},
      "A good habit is to check the network name with staff before joining, and to avoid entering card details on a Wi-Fi sign-in page."
     ],
     builder:[
      "A [[vpn|VPN]] (virtual private network) sends your traffic through an encrypted tunnel to the VPN company’s servers, then out to the internet.",
      {table:[
        ["A VPN does","A VPN doesn’t"],
        ["Hide which sites you visit from the local network and internet provider","Stop phishing or scams"],
        ["Change the IP address websites see","Block malware"],
        ["Help on untrusted networks or when required by work","Make you anonymous"],
        ["Shift trust to the VPN company","Protect you from a careless or dishonest VPN company"]
      ]},
      "Practical habits on public Wi-Fi: ask staff for the real network name; on Windows choose **Public network**; avoid entering card details on a Wi-Fi sign-in page; keep devices updated; use your phone’s mobile data or hotspot for anything you’d rather keep extra private.",
      {warn:"Be wary of free VPN apps whose business model isn’t clear. A VPN sees a lot about your traffic."},
      "Your phone’s mobile data is usually a good alternative when you’re unsure about a network, because the connection goes directly to your mobile carrier rather than through a shared hotspot.",
      "On a laptop, also make sure file sharing and network discovery are off for public networks. Windows does this automatically when the network is set to **Public network**; macOS keeps sharing services off unless you turn them on in **System Settings → General → Sharing**."
     ],
     pro:[
      "HTTPS is HTTP over **TLS**. TLS encrypts content and authenticates the server with a certificate issued for its domain name. On a shared network, metadata can still leak: the destination IP address, timing and volume, DNS lookups if they aren’t encrypted, and the server name in the TLS handshake (SNI) unless **Encrypted Client Hello** is in use. Encrypted DNS (DNS over HTTPS) is now built into major browsers and systems.",
      "**HSTS** tells browsers to use HTTPS only for a site, defeating attempts to downgrade connections to plain HTTP; many popular sites are preloaded into browsers. Certificate errors on public Wi-Fi are a real warning sign: never click through them for sites where you sign in.",
      "Wi-Fi’s own encryption (WPA2/WPA3) protects the radio link from people nearby, but everyone who knows a shared café password is on the same network. Wi-Fi Enhanced Open (OWE), a companion certification to WPA3, encrypts the radio link even on passwordless networks when both the network and device support it. A VPN adds a layer against local snooping and hides destinations from the network operator; it doesn’t change what the destination site, or the VPN operator, can see.",
      {tip:"A certificate warning on a site you use every day, appearing only on one network, is a reason to disconnect, not to click “continue”."}
     ]
    },
    related:["url-anatomy","device-encryption","phishing"],
    sources:[{t:"FTC: Are public Wi-Fi networks safe? What you need to know", url:"https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"},{t:"MDN: What is a URL?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"}], checked:"2026-10"},

   {id:"app-permissions", title:"App permissions", aka:["permissions","privacy settings","permission manager"], tags:["security","privacy","phones"],
    summary:"How apps ask for access to your location, camera, microphone, contacts and files, and how to decide and review.",
    levels:{
     starter:[
      "[[app-permissions|App permissions]] are the questions like “Allow this app to use your location?” Each Allow gives the app access to something sensitive: location, camera, microphone, contacts, photos, files, notifications.",
      "Ask one question: **does this app need this for what I use it for?** A map app needs location. A flashlight app doesn’t need your contacts.",
      "Choose the smallest access that works: **while using the app** rather than always, **approximate** location rather than precise, **selected photos** rather than all.",
      {key:"You can change your mind any time in Settings. Review permissions every few months."},
      "On computers, the same idea applies to camera, microphone, location and screen recording, which is why video-call apps ask for them the first time you use them.",
      "If you’re unsure, deny. Most apps ask again when they genuinely need something."
     ],
     builder:[
      {table:[
        ["Device","Where to review"],
        ["iPhone / iPad","Settings → Privacy & Security, then each permission"],
        ["Android","Settings → Security & privacy → Privacy → Permission manager (names vary)"],
        ["Windows 11","Settings → Privacy & security → App permissions"],
        ["macOS","System Settings → Privacy & Security"],
        ["ChromeOS","Settings → Privacy and security → Privacy controls"]
      ]},
      "Android also lets you set an app to lose permissions if it isn’t used for a while (“Pause app activity if unused” on recent versions), and both Android and iPhone show an indicator when the camera or microphone is in use.",
      "Be especially careful with powerful permissions: **accessibility** access on Android (lets an app read and control the screen), **device administrator** rights, permission to install other apps, and screen recording. Scams often ask for these to take over a phone.",
      "Google Play Protect may also send privacy alerts about apps that gain access to personal data.",
      "A quick review routine: open the permission list, look at **Location**, **Camera**, **Microphone**, **Contacts** and **Photos**, and remove access from anything you don’t recognise or no longer use. Then delete apps you haven’t opened in months; an uninstalled app can’t collect anything.",
      "Children’s and older relatives’ devices benefit from the same review, done together."
     ],
     pro:[
      "Mobile operating systems enforce permissions through **sandboxing**: each app runs in isolation and can reach protected resources only through system APIs that check its granted permissions. Runtime prompts, one-time grants, approximate location, limited photo access and auto-reset of unused permissions all exist to keep access minimal: the **principle of least privilege**.",
      "Permissions don’t cover everything. Apps can still collect what you type into them, and software development kits embedded in apps may share data with third parties. Platform privacy labels and data-safety sections in app stores summarise developer-declared practices, but they are self-reported.",
      "Abuse cases worth knowing: stalkerware that uses accessibility and notification access to spy on a partner; banking-trojan apps on Android that request accessibility to read codes and overlay fake screens; and fake “security” or “cleaner” apps that demand broad access. Google Play Protect may block installation of unverified apps requesting sensitive permissions often abused in financial fraud.",
      {tip:"If someone else has had your unlocked phone, check device administrator apps, accessibility services and unknown apps, and consider your platform’s safety check tools."},
      "On desktops, macOS requires explicit consent for screen recording, camera, microphone and access to protected folders, and Windows 11 lists apps that recently used location, camera and microphone in its privacy settings, which makes unexpected access easier to spot."
     ]
    },
    related:["malware","public-wifi-https","device-encryption"],
    sources:[{t:"Android Help: Change app permissions on your Android phone", url:"https://support.google.com/android/answer/9431959?hl=en"},{t:"Google Play Help: Use Google Play Protect", url:"https://support.google.com/googleplay/answer/2812853?hl=en"}], checked:"2026-10"},

   {id:"device-encryption", title:"Screen locks and device encryption", aka:["BitLocker","Device Encryption","FileVault","encryption","screen lock"], tags:["security","devices"],
    summary:"How a screen lock plus encryption keeps a lost or stolen device’s data unreadable, and where to turn it on.",
    levels:{
     starter:[
      "[[encryption|Encryption]] scrambles data so it can only be read with the right key. **Device encryption** scrambles everything stored on your phone or computer; your sign-in (PIN, password, face or fingerprint) unlocks it.",
      "Without encryption, a thief could remove a laptop’s drive and read your files on another computer. With encryption, they get gibberish.",
      "Most phones and Chromebooks encrypt automatically once you set a screen lock. On computers, check: **Device Encryption** or **BitLocker** on Windows, **FileVault** on a Mac.",
      {key:"A screen lock plus encryption turns a lost device into a lost object, not a lost life."},
      "A strong screen lock matters as much as encryption, because the lock is what protects the key. A 6-digit or longer PIN, or a passphrase, is a good start, with a short auto-lock time.",
      "Also turn on your device’s find-my-device feature so you can lock or erase it remotely."
     ],
     builder:[
      {table:[
        ["Device","How"],
        ["Windows 11","Settings → Privacy & security → Device encryption. BitLocker controls are in Pro, Enterprise and Education editions."],
        ["Mac","System Settings → Privacy & Security → FileVault"],
        ["iPhone / iPad","Automatic when a passcode is set"],
        ["Android","Automatic on most recent phones with a screen lock"],
        ["Chromebook","Automatic for each user"]
      ]},
      "**Recovery keys** matter. On Windows with a Microsoft account, the recovery key is saved to that account. FileVault lets you use your iCloud account or a recovery key; Apple advises storing a recovery key somewhere other than the Mac. If you lose both your password and the recovery key, your data cannot be recovered.",
      "Pair encryption with a good screen lock: 6+ digit PIN or a passphrase, short auto-lock, and **find my device** turned on so you can locate, lock or erase a lost device.",
      "If someone steals an encrypted, locked device, they can usually only erase and resell it; your data stays unreadable. That’s why encryption matters most for laptops, which hold years of documents and saved sign-ins.",
      "Encryption has no noticeable effect on speed on modern devices, so there’s rarely a reason to leave it off. Check it once, store the recovery key, and you’re done."
     ],
     pro:[
      "Full-disk encryption on modern devices uses keys protected by dedicated hardware: a **TPM** on Windows PCs, the **Secure Enclave** on Apple devices, and hardware-backed keystores on Android. The hardware refuses to release keys unless the system boots unmodified and the user authenticates, and it rate-limits PIN guesses, which is why a short PIN can still resist brute force on a phone.",
      "Windows Device Encryption is BitLocker configured automatically on supported hardware; it typically activates when signing in with a Microsoft or work account, and isn’t turned on automatically with a local account. Android uses file-based encryption; data stays encrypted until the first unlock after a restart, which is why a powered-off phone is better protected than one that is merely locked.",
      "Encryption protects data **at rest**. It doesn’t protect a device that’s unlocked and in use, files you’ve shared or synced to the cloud (which depend on the cloud service’s protection), or data already copied by malware.",
      {tip:"Print or securely store the BitLocker or FileVault recovery key before you need it, especially if you sign in with a local account."},
      "Before selling or giving away a device, sign out of accounts and use the system’s reset option; on an encrypted device this destroys the keys, making old data unrecoverable."
     ]
    },
    related:["cia-triad","public-wifi-https","incident-response"],
    sources:[{t:"Microsoft Support: Device encryption in Windows", url:"https://support.microsoft.com/en-us/windows/device-encryption-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df"},{t:"Apple Support: Protect data on your Mac with FileVault", url:"https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac"}], checked:"2026-10"},

   {id:"incident-response", title:"What to do if you’re hacked or scammed", aka:["hacked account","recovery","report fraud","first hour plan"], tags:["security","response"],
    summary:"A calm, ordered plan for the first hour after an account is hacked, a scam payment or a malware infection.",
    levels:{
     starter:[
      "Anyone can be caught. Acting fast matters far more than how it happened, so skip the embarrassment and start.",
      {ol:[
        "**Get back in** using the service’s official recovery page.",
        "**Remove** forwarding rules and recovery details you don’t recognise.",
        "**Change the password**, and any others that used it.",
        "**Sign out** all other devices.",
        "**Turn on** two-step verification.",
        "**Warn** your contacts and **check** your bank.",
        "**Report** it if you lost money."
      ]},
      "If you paid a scammer or shared card details, call your bank immediately using the number on your card.",
      {key:"Write your plan down now, with your bank’s number and where your recovery codes are."},
      "If you think malware is involved, change passwords from a different device you trust, not the one that may be infected."
     ],
     builder:[
      "The UK NCSC’s guidance on recovering a hacked account goes in this order: contact the provider; check your email account for forwarding rules; change passwords; log all devices and apps out; set up 2SV; update your devices; notify your contacts; check bank statements and shopping accounts; report to Report Fraud if you lost money (Police Scotland on 101 in Scotland).",
      {table:[
        ["Situation","First move"],
        ["Typed a password into a fake page","Change it on the real site, plus anywhere reused"],
        ["Paid or gave card details","Call your bank or card provider now"],
        ["Opened a harmful file","Disconnect, scan, update, then change passwords from a clean device"],
        ["Ransomware","Disconnect, don’t connect backups, get help, restore from backup"],
        ["Can’t recover the account","Create a new one and tell contacts, banks and services the new details"]
      ]},
      "Reporting: UK, forward emails to `report@phishing.gov.uk` and texts to 7726. US, report at ReportFraud.ftc.gov and use IdentityTheft.gov if personal details were stolen. Elsewhere, use your national service.",
      "Signs an account has been hacked, according to the NCSC, include being unable to sign in, changed security settings, messages or notifications you don’t recognise, sign-ins from strange places or times, and unauthorised payments. Checking your account’s recent activity page is the fastest way to confirm."
     ],
     pro:[
      "Responders think in phases: **contain** (stop the bleeding: change credentials, revoke sessions, disconnect infected devices), **eradicate** (remove persistence such as mail rules, OAuth app grants, added recovery methods, malware), **recover** (restore access and data) and **learn** (fix the weakness that allowed it).",
      "Persistence is the commonly missed step. Attackers who take over an email account frequently add forwarding or deletion rules, register their own MFA method or passkey, grant a third-party app access, or change recovery details. Review all of these in the account’s security pages, and look at its recent activity log.",
      "Change passwords from a device you trust. If an infostealer was involved, the infected device may have leaked session cookies and every saved password, so treat all of them as exposed, sign out all sessions, and clean or reinstall the device first.",
      "Keep evidence (screenshots, message headers, transaction references) for your bank and for reports. Watch for follow-up scams: fake “recovery” services and calls claiming to be police or the bank’s fraud team are common after an incident.",
      {tip:"Most providers have a dedicated hacked-account page. Bookmark the ones for your main email and bank now, while you’re calm."},
      "After recovery, review what let the attacker in. Usually it’s a reused password, a missing second step, or a phishing slip; fixing that root cause is what prevents a repeat."
     ]
    },
    related:["mfa","phishing","social-engineering","data-breach"],
    sources:[{t:"NCSC: Recovering a hacked account", url:"https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account"},{t:"NCSC: Report a scam email", url:"https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-email"},{t:"FTC: How to recognize and avoid phishing scams", url:"https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"}], checked:"2026-10"}
  ],
  terms:[
   {id:"cybersecurity", term:"Cybersecurity", def:"Protecting devices, accounts and information from being stolen, changed, damaged or made unavailable.", codex:"threat-landscape"},
   {id:"threat", term:"Threat", def:"Anything that could cause harm to your devices, accounts or information, such as a scam message, malware or a leaked password.", codex:"threat-landscape"},
   {id:"cia-triad", term:"CIA triad", def:"The three goals of security: **confidentiality** (only the right people see it), **integrity** (it stays correct) and **availability** (you can use it when needed).", codex:"cia-triad"},
   {id:"phishing", term:"Phishing", def:"A fake message, pretending to be from someone you trust, that tries to get you to click, sign in, pay or share a code.", codex:"phishing"},
   {id:"spear-phishing", term:"Spear phishing", def:"Phishing aimed at a particular person or group, using real names or details to seem genuine.", codex:"phishing"},
   {id:"smishing", term:"Smishing", def:"Phishing by text message (SMS) or chat app, such as a fake parcel-fee text.", codex:"phishing"},
   {id:"vishing", term:"Vishing", def:"Phishing by voice call, such as a caller pretending to be your bank’s fraud team.", codex:"phishing"},
   {id:"quishing", term:"Quishing", def:"Phishing through a QR code, for example a fake sticker on a parking meter or a QR code in an email.", codex:"phishing"},
   {id:"scam", term:"Scam", def:"Any trick that uses lies to take your money or information.", codex:"social-engineering"},
   {id:"social-engineering", term:"Social engineering", def:"Manipulating people, rather than breaking technology, to get access, information or money. It relies on trust, urgency, fear or kindness.", codex:"social-engineering"},
   {id:"deepfake", term:"Deepfake", def:"Fake audio, video or images made with AI to imitate a real person, such as a cloned voice asking a relative for money.", codex:"social-engineering"},
   {id:"malware", term:"Malware", def:"Short for malicious software: any program designed to harm you or your device, such as viruses, spyware and ransomware.", codex:"malware"},
   {id:"virus", term:"Virus", def:"Malware that spreads by copying itself into other files or programs. People often say “virus” for all malware.", codex:"malware"},
   {id:"ransomware", term:"Ransomware", def:"Malware that encrypts your files so you can’t open them and demands payment to unlock them.", codex:"ransomware"},
   {id:"antivirus", term:"Antivirus", def:"Software that detects and removes malware. Windows, macOS and Android include it built in (Microsoft Defender Antivirus, XProtect, Google Play Protect).", codex:"malware"},
   {id:"data-breach", term:"Data breach", def:"When information held by an organisation, such as emails and passwords, is stolen or accessed without permission.", codex:"data-breach"},
   {id:"credential-stuffing", term:"Credential stuffing", def:"Trying usernames and passwords leaked from one site on many other sites. It only works where a password was reused.", codex:"data-breach"},
   {id:"password", term:"Password", def:"A secret you share with a service to prove who you are. A strong one is long, unpredictable and used in only one place.", codex:"passwords"},
   {id:"passphrase", term:"Passphrase", def:"A password made of several randomly chosen words, such as `kettle orbit maple lantern`. Long, strong and easier to remember.", codex:"passwords"},
   {id:"password-manager", term:"Password manager", def:"An app or built-in tool that creates, stores and fills in unique passwords (and passkeys), protected by one strong primary passphrase.", codex:"password-manager"},
   {id:"mfa", term:"Multi-factor authentication (MFA)", def:"Signing in with more than one kind of proof, such as a password plus a code or a passkey. Also called two-factor authentication (2FA) or 2-step verification (2SV).", codex:"mfa"},
   {id:"authenticator-app", term:"Authenticator app", def:"A phone app that shows a short sign-in code that changes about every 30 seconds, used as a second step.", codex:"mfa"},
   {id:"security-key", term:"Security key", def:"A small physical device (USB or NFC) you touch to confirm a sign-in. It’s phishing-resistant.", codex:"mfa"},
   {id:"passkey", term:"Passkey", def:"A way to sign in without a password, using a pair of digital keys unlocked by your device’s face, fingerprint or PIN. It only works on the real website, so it can’t be phished.", codex:"passkeys"},
   {id:"phishing-resistant", term:"Phishing-resistant MFA", def:"Sign-in methods, such as passkeys and security keys, that check the real website automatically and give you nothing to type or read out, so they can’t be tricked out of you.", codex:"mfa"},
   {id:"mfa-fatigue", term:"MFA fatigue", def:"An attack where someone with your password sends repeated “Approve sign-in?” prompts, hoping you tap Approve. Also called push bombing.", codex:"mfa"},
   {id:"sim-swap", term:"SIM swap", def:"When a criminal persuades a mobile carrier to move your phone number to their SIM card, so they receive your calls and text codes.", codex:"mfa"},
   {id:"recovery-code", term:"Recovery code", def:"A one-time backup code that lets you sign in if you lose your usual second step. Keep them somewhere you can reach without your phone.", codex:"mfa"},
   {id:"url", term:"URL", def:"A web address, such as `https://www.example.com/page`. It has parts: scheme, host name (including the domain), path and sometimes a query.", codex:"url-anatomy"},
   {id:"domain", term:"Domain", def:"The registered name that says who runs a website, such as `example.com`. Find it at the right-hand end of the host name, just before the first single slash.", codex:"url-anatomy"},
   {id:"subdomain", term:"Subdomain", def:"Extra words to the left of a domain, such as `help.` in `help.example.com`. Whoever owns the domain chooses them, so they prove nothing.", codex:"url-anatomy"},
   {id:"lookalike-domain", term:"Look-alike domain", def:"A domain made to resemble a real one, using swapped characters (`0` for `o`, `rn` for `m`) or extra words (`example-secure.com`).", codex:"url-anatomy"},
   {id:"url-shortener", term:"Link shortener", def:"A service that turns a long web address into a short one. Useful, but it hides where the link really goes.", codex:"url-anatomy"},
   {id:"https", term:"HTTPS", def:"The secure version of the web’s protocol. The padlock means the connection is encrypted, not that the site is honest.", codex:"public-wifi-https"},
   {id:"encryption", term:"Encryption", def:"Scrambling information so only someone with the right key can read it. It protects data being sent (HTTPS) and data stored on devices.", codex:"device-encryption"},
   {id:"public-wifi", term:"Public Wi-Fi", def:"A wireless network shared by the public, such as in a café, hotel or airport. Usually fine for HTTPS sites; beware of fake hotspots.", codex:"public-wifi-https"},
   {id:"vpn", term:"VPN", def:"Virtual private network: an encrypted tunnel from your device to a VPN company’s servers. It hides your traffic from the local network but doesn’t stop phishing or malware.", codex:"public-wifi-https"},
   {id:"software-update", term:"Software update", def:"A new version of software from its maker, often including fixes for security holes. Get them from your device’s settings or official app store.", codex:"software-updates"},
   {id:"patch", term:"Patch", def:"A fix for a specific flaw in software, delivered in an update.", codex:"software-updates"},
   {id:"zero-day", term:"Zero-day", def:"A security flaw that attackers use before the maker has released a fix.", codex:"software-updates"},
   {id:"app-permissions", term:"App permissions", def:"The access you grant an app to sensitive things such as your location, camera, microphone, contacts or photos. You can review and change them in Settings.", codex:"app-permissions"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u3-q01", lesson:"t1u3-l1", level:1, q:"What is credential stuffing?", options:[
     {t:"Trying usernames and passwords leaked from one site on many other sites", ok:true, why:"Attackers take leaked pairs and test them elsewhere. It works wherever a password was reused."},
     {t:"Guessing a password by trying every possible combination of characters", why:"That’s brute-force guessing. Credential stuffing uses real, already-leaked passwords."},
     {t:"Filling a website’s sign-in form with fake accounts", why:"That describes spam sign-ups, not credential stuffing."},
     {t:"Storing too many passwords in one password manager", why:"Using a password manager is a defence against credential stuffing, not a form of it."}
   ]},
   {id:"t1u3-q02", lesson:"t1u3-l1", level:2, q:"Why is your main email account especially valuable to an attacker?", options:[
     {t:"Password-reset links for most of your other accounts are sent to it", ok:true, why:"Control of your email lets an attacker use “Forgot password?” to take over many other accounts."},
     {t:"Email accounts store your bank card number by default", why:"They don’t store card numbers by default. The danger is the power to reset other accounts."},
     {t:"Email providers pay attackers for access", why:"There’s no such arrangement. Attackers value email for the access it opens to your other accounts."},
     {t:"An email account can’t have two-step verification", why:"It can, and should. Email is a top priority for turning it on."}
   ]},
   {id:"t1u3-q03", lesson:"t1u3-l1", level:1, q:"In the CIA triad, what does “integrity” mean?", options:[
     {t:"Information is correct and hasn’t been changed without permission", ok:true, why:"Integrity is about information staying accurate and untampered."},
     {t:"Only the right people can see the information", why:"That’s confidentiality."},
     {t:"You can use the information when you need it", why:"That’s availability."},
     {t:"The people handling the information are honest", why:"Honesty is a good quality, but in the CIA triad integrity refers to the information itself being correct."}
   ]},
   {id:"t1u3-q04", lesson:"t1u3-l1", level:3, q:"Fatima’s small business receives an email from a regular supplier saying their bank details have changed, with new details for the next payment. Which CIA corner is at risk, and what’s the right defence?", options:[
     {t:"Integrity: confirm the change by phoning the supplier on a number she already has", ok:true, why:"The danger is acting on altered information. A call to a known number checks the change through a route the attacker doesn’t control."},
     {t:"Availability: make a backup of the email", why:"A backup keeps a copy, but it doesn’t check whether the new details are genuine."},
     {t:"Confidentiality: encrypt the email", why:"Encryption hides content from others; it can’t tell her whether the request is genuine."},
     {t:"Integrity: reply to the email asking if the change is real", why:"If the supplier’s account was hijacked or spoofed, the attacker will simply reply “yes”."}
   ]},
   {id:"t1u3-q05", lesson:"t1u3-l1", level:1, q:"Which of these is the best description of malware?", options:[
     {t:"Any software designed to harm you or your device", ok:true, why:"Malware means malicious software, and includes viruses, spyware and ransomware."},
     {t:"Any software with bugs in it", why:"All software has bugs. Malware is software made to do harm on purpose."},
     {t:"A fake email that asks for your password", why:"That’s phishing. Phishing can deliver malware, but they’re different things."},
     {t:"Hardware that has stopped working", why:"Malware is software, not a hardware fault."}
   ]},
   {id:"t1u3-q06", lesson:"t1u3-l1", level:3, q:"Mei’s friend says: “I don’t need to bother with security because I don’t have anything worth stealing.” Which point best shows why that’s mistaken?", options:[
     {t:"Her email, contacts and payment card are valuable to automated attacks, even if she isn’t personally targeted", ok:true, why:"Mass attacks aim at everyone. Ordinary accounts can be used to reset other accounts, scam contacts and spend money."},
     {t:"Attackers only target famous people, so she’s right", why:"Most attacks are automated and aimed at huge numbers of ordinary people."},
     {t:"She needs security only if she uses a Windows computer", why:"Phishing, scams and leaked passwords affect users of every device."},
     {t:"Her antivirus will stop every kind of attack anyway", why:"Antivirus doesn’t stop phishing, scams or logins with leaked passwords."}
   ]},
   {id:"t1u3-q07", lesson:"t1u3-l1", level:2, q:"Which habit would have stopped a credential-stuffing attack even if the reused password was leaked?", options:[
     {t:"Two-step verification on the account", ok:true, why:"With a second step, the leaked password alone isn’t enough to sign in."},
     {t:"Changing the desktop wallpaper regularly", why:"This has no effect on account security."},
     {t:"Clearing the browser history", why:"Browser history has nothing to do with whether a leaked password works on another site."},
     {t:"Using a longer version of the same reused password", why:"If it’s reused and leaked, its length doesn’t matter: attackers have the actual password."}
   ]},
   {id:"t1u3-q08", lesson:"t1u3-l1", level:1, q:"What is social engineering?", options:[
     {t:"Manipulating people into giving access, information or money", ok:true, why:"It targets human trust and emotions rather than technical flaws."},
     {t:"Designing social media apps", why:"That’s software engineering. Social engineering is a manipulation technique."},
     {t:"Building community networks with volunteers", why:"A positive activity, but not what the security term means."},
     {t:"Breaking encryption with powerful computers", why:"Social engineering avoids technical attacks; it persuades people instead."}
   ]},
   {id:"t1u3-q09", lesson:"t1u3-l1", level:3, q:"Oluwaseun’s friends receive messages from his account asking for urgent loans. He didn’t send them. Which earlier weakness most likely started this chain?", options:[
     {t:"His password leaked in a breach elsewhere, and he had reused it without two-step verification", ok:true, why:"This is the classic chain: breach, credential stuffing on a reused password, account takeover, then scams to contacts."},
     {t:"His phone’s screen brightness was set too high", why:"Screen settings have nothing to do with account takeover."},
     {t:"He had too many friends in his contact list", why:"Contacts are the scam’s targets, not the cause of the takeover."},
     {t:"He used HTTPS websites", why:"HTTPS protects connections; it doesn’t cause account takeovers."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u3-q10", lesson:"t1u3-l2", level:1, q:"According to NIST SP 800-63B-4, what is the minimum length for a password that is the only way to sign in?", options:[
     {t:"15 characters", ok:true, why:"SP 800-63B-4 (2025) sets 15 characters for passwords used as a single factor, and 8 when used as part of MFA."},
     {t:"8 characters", why:"8 is the minimum only when the password is one part of multi-factor sign-in."},
     {t:"64 characters", why:"64 is the minimum *maximum* length services should allow, not the minimum length."},
     {t:"There’s no minimum, as long as it has a symbol", why:"The guidance sets a length minimum and says services must not impose composition rules like requiring symbols."}
   ]},
   {id:"t1u3-q11", lesson:"t1u3-l2", level:2, q:"Which password is strongest?", options:[
     {t:"`lantern pebble violin harbour` (four random words)", ok:true, why:"Long and randomly chosen: hard to guess and easy to remember."},
     {t:"`Football2024!`", why:"A common word, a year and a symbol: a pattern on every guess list."},
     {t:"`Qz9!`", why:"Random but far too short."},
     {t:"`Pa$$w0rd`", why:"Symbol swaps on the word “password” are among the first things attackers try."}
   ]},
   {id:"t1u3-q12", lesson:"t1u3-l2", level:1, q:"What does current NIST guidance say about forcing users to change passwords every 90 days?", options:[
     {t:"Services should not force scheduled changes, only changes when there’s evidence of compromise", ok:true, why:"Scheduled changes produce predictable tweaks. A change is required only when a password may be compromised."},
     {t:"It’s required for all services", why:"The current guidance says the opposite: no forced periodic changes."},
     {t:"It’s required only for email accounts", why:"There’s no such rule. Changes are tied to evidence of compromise, not account type or schedule."},
     {t:"Passwords should be changed every 30 days instead", why:"More frequent forced changes would make the problem worse."}
   ]},
   {id:"t1u3-q13", lesson:"t1u3-l2", level:2, q:"How does a password manager help protect you from phishing?", options:[
     {t:"It only fills in a password on the exact website it was saved for, so it stays silent on a look-alike site", ok:true, why:"When autofill doesn’t offer your password, that’s a strong hint you’re not on the real site."},
     {t:"It blocks all emails that contain links", why:"Password managers don’t filter email."},
     {t:"It makes fake websites show a red warning screen", why:"That’s a browser or security feature, not the password manager’s main protection."},
     {t:"It changes all your passwords every day", why:"Password managers don’t do this, and it wouldn’t stop phishing."}
   ]},
   {id:"t1u3-q14", lesson:"t1u3-l2", level:3, q:"Tomás finds his email address listed in three breaches on Have I Been Pwned. Which response is most important?", options:[
     {t:"Change the password anywhere he used the same password as those breached sites", ok:true, why:"Breached passwords get tried on other sites. Making sure no other account shares them is what blocks credential stuffing."},
     {t:"Delete his email account immediately", why:"Unnecessary. Appearing in breaches is very common; fixing reused passwords and turning on 2SV is the right response."},
     {t:"Ignore it, since the breaches are old", why:"Old leaked passwords are still used in credential stuffing if they’re reused."},
     {t:"Type his current passwords into a site that checks if they leaked", why:"Never type real passwords into unknown sites. Use a password manager’s built-in check."}
   ]},
   {id:"t1u3-q15", lesson:"t1u3-l2", level:3, q:"Kenji has one long, random password that he uses for every account. A small shop he used is breached. What is the problem?", options:[
     {t:"The leaked password works on all his other accounts, however strong it is", ok:true, why:"Strength doesn’t help once the actual password is known. Reuse spreads one leak to every account."},
     {t:"No problem: long random passwords can’t be leaked", why:"Any password can leak in a breach or through phishing. Strength only protects against guessing."},
     {t:"Only his account at that shop is affected", why:"That would be true only if the password were unique."},
     {t:"The problem is that his password isn’t long enough", why:"Length isn’t the issue here; reuse is."}
   ]},
   {id:"t1u3-q16", lesson:"t1u3-l2", level:1, q:"What does the UK NCSC recommend for making a password you need to remember?", options:[
     {t:"Three random words", ok:true, why:"The NCSC says three random words are strong enough and easy enough to remember."},
     {t:"Your pet’s name followed by your birth year", why:"Personal details are often findable and the pattern is predictable."},
     {t:"A single dictionary word with numbers replacing letters", why:"The NCSC notes criminals know these swaps, so they add little strength."},
     {t:"A different 6-character password each week", why:"Short passwords are weak, and constant changes aren’t recommended."}
   ]},
   {id:"t1u3-q17", lesson:"t1u3-l2", level:2, q:"Priya is setting up a password manager. What should protect the manager itself?", options:[
     {t:"A strong passphrase used nowhere else, plus two-step verification", ok:true, why:"The manager guards everything, so it deserves a unique passphrase and a second step."},
     {t:"The same password she uses for her email, so it’s easy to remember", why:"Reusing the email password means one leak could open both."},
     {t:"No password, since it’s already encrypted", why:"The encryption key comes from her primary passphrase. Without a strong one the vault is weak."},
     {t:"A 4-digit PIN", why:"Far too short to protect a vault holding every password."}
   ]},
   {id:"t1u3-q18", lesson:"t1u3-l2", level:2, q:"A learning app has a practice box labelled “Test your password strength here.” What should you type?", options:[
     {t:"A made-up example password, never a real one", ok:true, why:"Never type real passwords into practice tools or sites you don’t fully trust."},
     {t:"Your real email password, to see how strong it is", why:"You can’t know where that box sends what you type. Use made-up examples."},
     {t:"Your real password with one letter changed", why:"A near-copy reveals most of your password."},
     {t:"Your password manager’s primary passphrase", why:"That’s the most important secret you have. Never type it anywhere except the manager itself."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u3-q19", lesson:"t1u3-l3", level:1, q:"Which pair is an example of two different kinds of factor?", options:[
     {t:"A password (something you know) and a code from an app on your phone (something you have)", ok:true, why:"Two different kinds of proof: a thief needs both."},
     {t:"A password and a second password", why:"Both are things you know, so one phishing page could capture both."},
     {t:"A PIN and a security question", why:"Both are things you know."},
     {t:"Your username and your password", why:"A username isn’t secret, so it isn’t a factor."}
   ]},
   {id:"t1u3-q20", lesson:"t1u3-l3", level:1, q:"Which methods does CISA call phishing-resistant?", options:[
     {t:"FIDO security keys and passkeys", ok:true, why:"They check the real website automatically and give you nothing to type or read out."},
     {t:"Codes sent by text message", why:"SMS codes can be phished and are exposed to SIM swaps. CISA calls SMS a last resort."},
     {t:"Codes from an authenticator app", why:"Better than SMS, but a fake site can still ask you to type the code."},
     {t:"Security questions", why:"These aren’t a second factor at all; answers can often be found or guessed."}
   ]},
   {id:"t1u3-q21", lesson:"t1u3-l3", level:3, q:"At midnight, Ana gets repeated “Approve sign-in?” prompts on her phone for her work account. She isn’t signing in. What does this most likely mean?", options:[
     {t:"Someone has her password and is trying to get past the second step", ok:true, why:"This is MFA fatigue (push bombing). She should deny the prompts, change her password and tell her IT team."},
     {t:"Her phone needs a software update", why:"Updates don’t generate sign-in prompts."},
     {t:"Her account is being deleted", why:"Account deletion doesn’t work this way. The prompts are sign-in attempts."},
     {t:"Her phone’s notification settings are faulty", why:"Notification settings can’t create sign-in requests. Each prompt is a real sign-in attempt using her password."}
   ]},
   {id:"t1u3-q22", lesson:"t1u3-l3", level:2, q:"Why can’t a fake look-alike website use your passkey?", options:[
     {t:"Each passkey is tied to the exact website it was created for, and your device checks the address", ok:true, why:"The fake domain has no passkey to request, so nothing is handed over."},
     {t:"Fake websites can’t use HTTPS", why:"Fake websites often use HTTPS. Protection comes from the passkey being bound to the real domain."},
     {t:"Your fingerprint is sent to the real site to compare", why:"Your fingerprint never leaves your device; it only unlocks the device."},
     {t:"Passkeys expire every 30 seconds", why:"That describes authenticator app codes, not passkeys."}
   ]},
   {id:"t1u3-q23", lesson:"t1u3-l3", level:1, q:"What are recovery codes for?", options:[
     {t:"Signing in if you lose your usual second step, such as your phone", ok:true, why:"Each one-time code replaces your second step once."},
     {t:"Recovering deleted files", why:"That’s what backups and version history are for."},
     {t:"Unlocking your phone if you forget its PIN", why:"Recovery codes belong to online accounts, not your phone’s screen lock."},
     {t:"Proving your identity to your bank over the phone", why:"Never read out codes on the phone. Recovery codes are only for signing in to the service that issued them."}
   ]},
   {id:"t1u3-q24", lesson:"t1u3-l3", level:2, q:"Which is the main weakness of codes sent by text message?", options:[
     {t:"An attacker can move your phone number to their SIM card (a SIM swap)", ok:true, why:"Text codes depend on your phone number, which can be hijacked through the mobile carrier. They can also be phished."},
     {t:"They need an internet connection", why:"Text messages arrive over the mobile network; that’s not their weakness."},
     {t:"They’re too long to type", why:"Usually 6 digits. The issue is security, not length."},
     {t:"They don’t work at all as a second step", why:"They do work and are much better than nothing. They’re just the weakest option."}
   ]},
   {id:"t1u3-q25", lesson:"t1u3-l3", level:3, q:"Sione receives a text: “Your bank: a code is on its way. Our agent will call to confirm it.” Then someone calls asking for the code. What should he do?", options:[
     {t:"Refuse, end the call, and contact his bank using the number on his card", ok:true, why:"Banks never ask you to read out codes. The caller is trying to sign in or approve something as him."},
     {t:"Give the code, since the text warned him the call was coming", why:"The text is part of the same scam; setting up the call makes it seem legitimate."},
     {t:"Give only the first three digits", why:"Even a partial code helps a scammer, and no genuine check needs it."},
     {t:"Ask the caller to text the code back to him first", why:"This doesn’t verify anything. End the call and use a known number."}
   ]},
   {id:"t1u3-q26", lesson:"t1u3-l3", level:2, q:"Where is it sensible to keep recovery codes for your email account?", options:[
     {t:"Printed with important papers at home", ok:true, why:"Reachable without your phone, and not online for anyone to steal."},
     {t:"In a draft email inside that same email account", why:"You’d need to get into the account to read them."},
     {t:"Only on the phone you use for the second step", why:"Lose the phone and you lose the codes at the same moment."},
     {t:"Posted in a private social media album", why:"Social media accounts can be hacked, and you may need the codes when you can’t reach it."}
   ]},
   {id:"t1u3-q27", lesson:"t1u3-l3", level:1, q:"When you sign in with a passkey using your fingerprint, what happens to your fingerprint?", options:[
     {t:"It stays on your device and only unlocks the passkey there", ok:true, why:"Biometrics unlock your own device; they’re never sent to the website."},
     {t:"It’s sent to the website to compare with a stored copy", why:"Websites never receive your fingerprint with passkeys."},
     {t:"It’s turned into a password and emailed to you", why:"Nothing like this happens."},
     {t:"It’s stored by your mobile carrier", why:"Carriers aren’t involved in passkey sign-in."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u3-q28", lesson:"t1u3-l4", level:2, q:"What is the real domain in `https://northwindbank.com.secure-check.net/login`?", options:[
     {t:"secure-check.net", ok:true, why:"Read the host name from the right: `.net`, then `secure-check`. Everything to the left is a subdomain."},
     {t:"northwindbank.com", why:"Here it’s only a subdomain on the left. Whoever owns `secure-check.net` chose those letters."},
     {t:"login", why:"`/login` is the path, after the first single slash. It’s just a page name."},
     {t:"https", why:"That’s the scheme. It says the connection is encrypted, not who owns the site."}
   ]},
   {id:"t1u3-q29", lesson:"t1u3-l4", level:1, q:"What does the padlock (HTTPS) in a browser tell you?", options:[
     {t:"The connection between your device and the site is encrypted", ok:true, why:"That’s all it means. It says nothing about whether the site is honest."},
     {t:"The site is run by a trustworthy company", why:"Scam sites use HTTPS too."},
     {t:"The site has been checked by your government", why:"No such check is implied by the padlock."},
     {t:"The site cannot contain malware", why:"HTTPS secures the connection; it doesn’t vouch for the content."}
   ]},
   {id:"t1u3-q30", lesson:"t1u3-l4", level:3, q:"Hana gets an email from “Northwind Bank” <service@northwind-bank-help.com> saying her account will be closed in 24 hours unless she verifies it. What is the clearest sign it’s phishing?", options:[
     {t:"The sender’s domain isn’t the bank’s real domain, and it uses a deadline to rush her", ok:true, why:"The address after `@` reveals a look-alike domain, and urgency is a classic pressure trick."},
     {t:"The display name says “Northwind Bank”", why:"Display names can say anything; that’s why you check the address instead. On its own it isn’t a sign either way."},
     {t:"It was sent to her correct email address", why:"Scammers often have real addresses from breaches; this proves nothing."},
     {t:"It arrived on a weekday", why:"Timing on its own isn’t a warning sign."}
   ]},
   {id:"t1u3-q31", lesson:"t1u3-l4", level:1, q:"What is quishing?", options:[
     {t:"Phishing using a QR code", ok:true, why:"A QR code is a link you can’t read, so fake ones can lead to scam pages."},
     {t:"Phishing by voice call", why:"That’s vishing."},
     {t:"Phishing by text message", why:"That’s smishing."},
     {t:"A quick security scan", why:"Not a real security term; quishing is a QR-code scam."}
   ]},
   {id:"t1u3-q32", lesson:"t1u3-l4", level:2, q:"Which of the NCSC’s scam tricks is used in “Only 3 tickets left at this price, buy in the next 10 minutes!”?", options:[
     {t:"Scarcity and urgency", ok:true, why:"“Only 3 left” is scarcity; “in the next 10 minutes” is urgency."},
     {t:"Authority", why:"Nothing here claims to be from an official body."},
     {t:"Current events", why:"No news event or season is mentioned."},
     {t:"No trick; it’s a normal offer", why:"Real shops can run offers, but this pressure pattern is exactly what scams rely on. Pause and check."}
   ]},
   {id:"t1u3-q33", lesson:"t1u3-l4", level:3, q:"Dmitri gets a call that sounds exactly like his sister, crying, saying she needs money sent by cryptocurrency right now. What should he do first?", options:[
     {t:"Hang up and call his sister on the number he already has", ok:true, why:"Voices can be cloned with AI. A known number is a check the scammer can’t control. Crypto payment is another red flag."},
     {t:"Send the money, because the voice is definitely hers", why:"A cloned voice can sound identical. Never rely on the voice alone."},
     {t:"Ask the caller to prove it by saying her date of birth", why:"Dates of birth are often available online or from breaches."},
     {t:"Call back the number that just rang him", why:"Caller ID can be faked; use a number he already had."}
   ]},
   {id:"t1u3-q34", lesson:"t1u3-l4", level:2, q:"Lucía typed her card details into a fake parcel-fee page. What should she do first?", options:[
     {t:"Call her bank or card provider immediately, using the number on her card", ok:true, why:"Speed gives the best chance of blocking the card and stopping payments."},
     {t:"Wait to see if any strange payments appear", why:"Waiting gives the scammers time to spend. Act straight away."},
     {t:"Reply to the scam text asking for a refund", why:"Replying only confirms her number is active and invites more scams."},
     {t:"Call the phone number shown on the fake page", why:"That number belongs to the scammers."}
   ]},
   {id:"t1u3-q35", lesson:"t1u3-l4", level:1, q:"In the UK, where should you forward a suspicious text message?", options:[
     {t:"7726", ok:true, why:"Mobile networks use 7726 for reporting spam and scam texts. (It’s also used in the US.)"},
     {t:"999", why:"999 is for emergencies, not for reporting scam texts."},
     {t:"Back to the sender", why:"Replying confirms your number is active."},
     {t:"Your bank’s customer service email", why:"Your bank may want to know about fraud, but scam texts are reported to 7726."}
   ]},
   {id:"t1u3-q36", lesson:"t1u3-l4", level:3, q:"Amara meets someone on a marketplace app who quickly asks to “continue on a private chat app” and then recommends a crypto investment with guaranteed returns. What does this pattern suggest?", options:[
     {t:"A scam: moving you off the platform, then pushing a “guaranteed” crypto investment", ok:true, why:"Leaving the platform escapes its protections, and guaranteed returns plus crypto are classic investment-scam signs."},
     {t:"A normal business contact being efficient", why:"Genuine contacts rarely push guaranteed-profit investments, especially in crypto."},
     {t:"Safe, as long as the chat app is encrypted", why:"Encryption protects messages in transit; it can’t make the person honest."},
     {t:"Safe, if they share a screenshot of their profits", why:"Screenshots are easy to fake and are a common part of the scam."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u3-q37", lesson:"t1u3-l5", level:1, q:"What is a patch?", options:[
     {t:"A fix for a flaw in software, delivered in an update", ok:true, why:"Patches close security holes and fix bugs."},
     {t:"A sticker that covers a laptop camera", why:"Camera covers exist, but that’s not what “patch” means here."},
     {t:"A type of malware", why:"A patch is the fix, not the threat."},
     {t:"A backup copy of your files", why:"That’s a backup."}
   ]},
   {id:"t1u3-q38", lesson:"t1u3-l5", level:2, q:"Why is it important to install updates soon after they’re released?", options:[
     {t:"Attackers can study the fix to find the flaw and target devices that haven’t updated", ok:true, why:"Once a fix is public, unpatched devices become easier targets."},
     {t:"Old updates expire after a week and can’t be installed", why:"Updates don’t expire like this; the risk is the time your device stays unpatched."},
     {t:"Updates only work if installed on the day of release", why:"They work whenever installed; delay simply leaves you exposed longer."},
     {t:"Installing quickly makes the device run faster", why:"Some updates improve speed, but the security reason is the important one."}
   ]},
   {id:"t1u3-q39", lesson:"t1u3-l5", level:1, q:"What is the built-in malware protection on Android phones called?", options:[
     {t:"Google Play Protect", ok:true, why:"Play Protect checks apps from Google Play and scans for harmful apps from other sources."},
     {t:"FileVault", why:"FileVault is Mac disk encryption."},
     {t:"XProtect", why:"XProtect is part of macOS."},
     {t:"BitLocker", why:"BitLocker is Windows disk encryption."}
   ]},
   {id:"t1u3-q40", lesson:"t1u3-l5", level:2, q:"Using a café’s public Wi-Fi, what can the network owner generally see when you use an HTTPS website?", options:[
     {t:"Which site you connected to, but not your passwords or the pages you read", ok:true, why:"HTTPS encrypts the content; the site name is generally still visible to the network."},
     {t:"Everything you type, including passwords", why:"HTTPS encrypts what you send to the site."},
     {t:"Nothing at all", why:"The destination is usually visible. Hiding it from the local network is what a VPN adds."},
     {t:"Only your passwords", why:"It’s the reverse: passwords are protected, the site name usually isn’t."}
   ]},
   {id:"t1u3-q41", lesson:"t1u3-l5", level:3, q:"Kenji thinks a VPN will protect him from everything online. Which is true?", options:[
     {t:"It hides his traffic from the local network, but doesn’t stop phishing or malware", ok:true, why:"A VPN protects the route to the VPN company. Fake sites and harmful downloads work just as well through it."},
     {t:"It makes him completely anonymous", why:"Sites he signs in to still know it’s him, and the VPN company can see where his traffic goes."},
     {t:"It blocks all scam websites", why:"Most VPNs don’t; and even those with filters can’t catch every scam."},
     {t:"It removes the need for software updates", why:"Updates fix flaws on his device; a VPN doesn’t."}
   ]},
   {id:"t1u3-q42", lesson:"t1u3-l5", level:2, q:"A free photo-filter app asks for your contacts, microphone and precise location. What’s the best response?", options:[
     {t:"Deny what it doesn’t need for filtering photos; consider a different app if it insists", ok:true, why:"Permissions should match the app’s purpose. A photo filter has no need for contacts or location."},
     {t:"Allow all, because apps only ask for what they need", why:"Apps often request more than they need, sometimes to collect data."},
     {t:"Allow all, but only on Wi-Fi", why:"The network doesn’t change what the app can collect."},
     {t:"Allow all, then uninstall the app next year", why:"Data collected in the meantime can’t be taken back."}
   ]},
   {id:"t1u3-q43", lesson:"t1u3-l5", level:1, q:"What is FileVault?", options:[
     {t:"The disk encryption built into macOS", ok:true, why:"FileVault encrypts a Mac’s startup disk."},
     {t:"A cloud storage service", why:"FileVault encrypts the Mac’s own disk; it isn’t cloud storage."},
     {t:"A Windows backup tool", why:"It’s a Mac feature, and it encrypts rather than backs up."},
     {t:"An antivirus app for Android", why:"It’s part of macOS."}
   ]},
   {id:"t1u3-q44", lesson:"t1u3-l5", level:3, q:"Priya’s email account has been hacked, and she has just got back in. According to NCSC guidance, what should she check before changing the password?", options:[
     {t:"Forwarding rules and recovery details, which attackers add to keep access", ok:true, why:"The NCSC puts checking for forwarding rules before changing passwords, so a new reset isn’t secretly copied to the attacker."},
     {t:"Whether her antivirus is up to date", why:"Updating devices matters, but the NCSC lists it later. First remove the attacker’s hidden access so new resets can’t be intercepted."},
     {t:"Her social media privacy settings", why:"Worth reviewing another day, but they don’t stop an attacker who has set up forwarding on her email."},
     {t:"Whether her new password will meet the site’s complexity rules", why:"The new password matters, but if forwarding rules remain, the attacker can intercept the next reset anyway."}
   ]},
   {id:"t1u3-q45", lesson:"t1u3-l5", level:2, q:"Why should you store your encryption recovery key somewhere other than the encrypted device?", options:[
     {t:"If you forget your password, the recovery key is the only way back in, and it’s useless if it’s locked inside the device", ok:true, why:"Apple advises storing the FileVault key away from the Mac; the same logic applies to BitLocker keys."},
     {t:"The recovery key slows down the device if stored on it", why:"Storage location doesn’t affect speed. The issue is being able to reach the key when locked out."},
     {t:"Recovery keys expire if kept on the device", why:"They don’t expire. They’re just unreachable when you’re locked out."},
     {t:"So that anyone who finds the device can unlock it", why:"The opposite: it should be kept safely away from the device."}
   ]}
  ]
});
