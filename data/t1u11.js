/* Track 1 · Unit 11 · Email, calendars and working together */
ICA.addUnit({
  id:"t1u11", track:"t1", n:11, title:"Email, calendars and working together", icon:"✉️",
  apps:{ms:"Outlook", google:"Gmail", libre:"Thunderbird (Mozilla)", apple:"Apple Mail"},
  blurb:"Write emails people answer, keep an inbox under control without guilt, schedule across time zones, run meetings worth having, work on one shared copy of a file, and choose between email, chat, meetings and documents.",
  goals:[
    "Write clear emails with a useful subject line, one ask and the right recipients in To, Cc and Bcc",
    "Keep an inbox manageable with archiving, labels or folders, search, filters and a realistic routine",
    "Schedule meetings across time zones, including daylight-saving changes, and run calls people can follow",
    "Work on one shared copy of a file with the right roles, clear names, suggestions and version history",
    "Choose between email, chat, a meeting and a document, and use chat tools without drowning in notifications"
  ],
  read:[
    {book:"wss", where:"Chapter 2, “Essentials of Software Applications for Business”, Section 2.3 “Communication and Calendar Applications”", note:"Covers email fields (To, Cc, Bcc, Reply All, Forward), business-writing basics, chat apps and calendars. Screenshots show 2023 versions; menus have moved since."},
    {book:"wss", where:"Chapter 2, Section 2.6 “Collaboration”", note:"Meeting etiquette, the ethics of recording, file sharing and collaborative editing."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u11-l1", title:"Emails that get answered", minutes:55,
   goals:[
     "Write a subject line and an opening that tell the reader what you need",
     "Structure an email around one clear ask, in a tone that fits the reader",
     "Choose To, Cc or Bcc, and Reply, Reply All or Forward, for real situations",
     "Decide between an attachment and a share link, and check an email before it goes"
   ],
   learn:[
    {h:"Why some emails get answered", body:[
      {lead:"Most unanswered emails aren’t ignored on purpose. The reader opened them, couldn’t tell what was needed, and moved on."},
      "Email is closer to a letter than to a chat: the reader may open it hours later, on a phone, between other tasks, and may forward it to people you never meant to write to.",
      "You read and write email in an [[email-client]]: an app or website such as Outlook, Gmail, Thunderbird (a free, open-source app from Mozilla) or Apple Mail. The client is only the window. Your address and your messages live with an email provider, which is why you can see the same inbox on a laptop and a phone.",
      "Think about what the reader sees first: the sender’s name, the subject line and the first line or two. If those answer “what is this and what do you need from me?”, the email usually gets a reply.",
      {key:"Write for a busy reader who skims. Put what you need, and by when, where they will see it first."}
    ]},
    {h:"Subject lines and one clear ask", body:[
      "A [[subject-line]] is a label for the whole email. It helps the reader decide whether to open it now, and helps both of you find it again months later. A good subject names the topic and, where it helps, the action and the date.",
      {table:[
        ["Weak subject","Better subject"],
        ["Hi","Garden rota for November: can you take 14 Nov?"],
        ["Question","Invoice 0147: is the delivery charge correct?"],
        ["Meeting","Choose a time for the budget call (reply by Fri 13 Nov)"],
        ["URGENT!!!","Shift swap needed for Tue 17 Nov night shift"]
      ]},
      "Then keep to **one ask per email**. Ask three unrelated things and people often answer the easiest one. Separate topics deserve separate emails: they are easier to answer, forward and file.",
      "Make the ask specific: what you need, from whom, and by when. “Any thoughts?” is easy to postpone. “Could you confirm the hall booking for Saturday 21 November by Wednesday?” is easy to answer.",
      {tip:"Write dates so nobody can misread them. 11/12 means 11 December in many countries and November 12 in others. “Thursday 12 November” or 2026-11-12 is clear everywhere. For times, add the time zone when people are in different places (Lesson 3)."}
    ]},
    {h:"A structure that works", body:[
      "Most good emails follow the same shape. It works for a job enquiry, a note to a teacher, a supplier complaint or a message to a volunteer team:",
      {ol:[
        "**Greeting** that fits the reader (more on tone below).",
        "**One line saying why you’re writing**, ideally with the ask: “I’m writing to ask whether you can cover the 14 November rota.”",
        "**Only the context the reader needs** to answer. Short paragraphs; a list if there are several items.",
        "**The ask again, with a deadline**, if the email is longer than a few lines.",
        "**A close and your name**, plus a [[signature]] with how to reach you."
      ]},
      {ex:"Subject: Garden rota for November: can you take 14 Nov?\n\nHi Sione,\n\nCould you take the watering shift on Saturday 14 November, 9:00–11:00? Fatima is away that weekend.\n\nThe key is in the usual box and the hose is fixed. If you can’t, just reply “no” and I’ll ask someone else.\n\nPlease let me know by Wednesday 11 November.\n\nThanks,\nAna\nOakfield Community Garden · rota coordinator · 07700 900123", label:"Worked example: one ask, easy to answer"},
      "Notice what makes it easy: the ask is in the subject and the first line, the context is two sentences, saying no is easy, and there is a deadline.",
      "Keep your signature short: name, role or group, one or two ways to reach you. Leave out big images and details you wouldn’t want forwarded to strangers, such as a home address."
    ]},
    {h:"Tone and formality across cultures", body:[
      "How formal to be depends on many things: the workplace or school, the sector, the country, the relationship, the reader’s age and their role. There is no single correct level, and it isn’t safe to guess someone’s preferences from their name or where they live. Individuals differ more than national stereotypes suggest.",
      "Some reliable habits work almost everywhere:",
      {list:[
        "**When you don’t know the reader, start a little more formal**, then **mirror** them. If they reply “Hi Kenji” and sign with a first name, you can do the same.",
        "**Use the name the person uses** in their own signature, spelled exactly as they spell it. If you don’t know someone’s gender or title, write their full name (“Dear Sam Okafor”) or a role (“Dear admissions team”) rather than guessing “Sir” or “Madam”.",
        "**Write plainly for readers who may use a second language** (and for translation tools): short sentences, no idioms (“touch base”, “ballpark figure”), no sarcasm, and no jokes that need a shared culture.",
        "**Polite but direct is kind.** “Could you send the form by Friday?” is clearer than three sentences of hinting.",
        "**Capitals and exclamation marks read as shouting** in many contexts. Emoji can be friendly with people you know, but leave them out of a first contact or a complaint."
      ]},
      "Email has no tone of voice. A reply that feels efficient to you may feel cold to the reader, so read anything tense as if you were the receiver, on a bad day.",
      {tip:"If an email thread is getting heated, stop writing. Suggest a short call. Text strips out the warmth and pauses that keep a disagreement calm."}
    ]},
    {h:"To, Cc and Bcc", body:[
      "Every email has three address lines, and each one tells people something different.",
      {list:[
        "**To:** the people who must read it and act.",
        "**[[cc|Cc]]** (carbon copy): people who should be kept informed but don’t need to act. Everyone can see who was copied.",
        "**[[bcc|Bcc]]** (blind carbon copy): people who receive a copy, but whose addresses the other recipients can’t see."
      ]},
      {fig:'<svg viewBox="0 0 340 440"><defs><marker id="m111" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="320" height="86" rx="9" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Amara sends one email</text><text class="s" x="170" y="52" text-anchor="middle">To: Kenji (must act)</text><text class="s" x="170" y="70" text-anchor="middle">Cc: Lucía (kept informed, visible)</text><text class="s" x="170" y="88" text-anchor="middle">Bcc: Priya (hidden from the others)</text><path class="d-ink" d="M170,97 L170,122" stroke-width="2" marker-end="url(#m111)"/><rect class="d-panel" x="10" y="126" width="320" height="62" rx="9" stroke-width="2"/><text x="170" y="148" text-anchor="middle">Kenji’s copy (To)</text><text class="s" x="170" y="166" text-anchor="middle">shows: To Kenji · Cc Lucía</text><text class="s" x="170" y="182" text-anchor="middle">Priya is not listed</text><rect class="d-panel" x="10" y="198" width="320" height="62" rx="9" stroke-width="2"/><text x="170" y="220" text-anchor="middle">Lucía’s copy (Cc)</text><text class="s" x="170" y="238" text-anchor="middle">shows: To Kenji · Cc Lucía</text><text class="s" x="170" y="254" text-anchor="middle">Priya is not listed</text><rect class="d-gold" x="10" y="270" width="320" height="62" rx="9" stroke-width="2"/><text x="170" y="292" text-anchor="middle">Priya’s copy (Bcc)</text><text class="s" x="170" y="310" text-anchor="middle">shows: To Kenji · Cc Lucía</text><text class="s" x="170" y="326" text-anchor="middle">(some apps also add “bcc: me”)</text><rect class="d-rose" x="10" y="344" width="320" height="86" rx="9" stroke-width="2"/><text x="170" y="366" text-anchor="middle">If Priya clicks Reply All…</text><text class="s" x="170" y="384" text-anchor="middle">her reply goes to Amara, Kenji and Lucía,</text><text class="s" x="170" y="400" text-anchor="middle">so they learn she had a copy.</text><text class="s" x="170" y="418" text-anchor="middle">Reply (to Amara only) keeps it private.</text></svg>', alt:"Amara sends one email: To Kenji, Cc Lucía, Bcc Priya. Three copies go out. Kenji’s and Lucía’s copies both show To Kenji and Cc Lucía, with Priya not listed. Priya’s copy shows the same, and some apps add “bcc: me”. A warning box: if Priya clicks Reply All, her reply goes to Amara, Kenji and Lucía, so they learn she had a copy; Reply keeps it private.", cap:"Bcc hides an address from the other recipients, until the Bcc’d person replies to everyone."},
      {table:[
        ["Situation","Use"],
        ["Your manager asks you to send a report to a client and keep them in the loop","Client in To, manager in Cc"],
        ["An announcement to 60 parents who don’t all know each other","Your own address in To, parents in Bcc (or a proper mailing tool)"],
        ["Introducing two people to each other","Both in To; after they reply, move yourself out of the thread"],
        ["Secretly copying someone into a disagreement","Don’t. If you need a witness, say so openly in Cc"]
      ]},
      "Bcc exists mainly to protect privacy: with everyone in To or Cc, each recipient sees every address and can reply to all. The UK data protection regulator (the ICO) notes that forgetting Bcc frequently leads to addresses being disclosed by accident, and that for sensitive information Bcc alone isn’t enough, because one slip exposes the whole list. For large or sensitive groups, use a [[mailing-list]] or bulk-email service.",
      {warn:"Copying people in is not neutral. Cc’ing someone’s manager into a small problem can feel like a threat. Add people only when they genuinely need to know, and tell the To recipients why if it isn’t obvious."}
    ]},
    {h:"Reply, Reply All and Forward", body:[
      "When an email arrives, you have three ways to respond:",
      {table:[
        ["Button","Who gets your message","Use it when"],
        ["Reply","Only the sender","Your answer matters only to the sender: “Yes, I can do the 14th.”"],
        ["[[reply-all|Reply All]]","The sender plus everyone in To and Cc (not Bcc)","Everyone on the thread needs your answer: a decision, a correction, new information"],
        ["[[forward|Forward]]","Whoever you choose, with the original message included","Someone new needs the information"]
      ]},
      "The classic mistake is Reply All with “Thanks!” to a big list: every recipient gets a pointless message. Before you click Reply All, ask: does every person on this list need my reply?",
      "The opposite mistake happens too: if a group is deciding something and you reply only to the sender, the group decides without you.",
      "Forwarding needs care: the whole thread below goes too, which may include earlier comments, phone numbers or someone’s health details. Before forwarding:",
      {list:[
        "Scroll down and read the **whole thread** you’re about to send.",
        "Delete anything the new reader doesn’t need, or summarise instead of forwarding.",
        "Add one line at the top saying **why** you’re forwarding and what you need: “Priya, see the dates below. Can you book the room?”",
        "Don’t forward something sent to you in confidence without asking first."
      ]},
      {tip:"Forwarding a suspicious email to colleagues to ask “is this real?” can spread a phishing link. Use the Report button in your email app instead, or ask your IT team how they want it reported. Unit 3 covers how to recognise it: {{phishing}}."}
    ]},
    {h:"Attachments or links?", body:[
      "An [[attachment]] is a file sent inside the email. Each recipient gets their **own copy**. A share link points everyone to **one copy** stored in cloud storage, and the owner decides who can open it and whether they can view, comment or edit. Unit 2 explains those settings: {{sharing-permissions}}.",
      {table:[
        ["Send an attachment when…","Send a share link when…"],
        ["The file is final and small: a signed form, a ticket, a PDF invoice","People will edit or comment on it together (Lesson 4)"],
        ["The reader needs a permanent copy they control","The file is large: videos, many photos, big presentations"],
        ["The reader may not be able to open your cloud service","It will keep changing and everyone needs the latest version"]
      ]},
      "Links have their own traps: a “specific people” link won’t open for someone you forgot to add, and an “anyone with the link” link works for anyone it’s forwarded to. Check the setting before you paste it.",
      "Mention attachments in the text (“I’ve attached the signed form”). It reminds you to attach it, and many apps warn you if you write “attached” and forget the file. Name files so they make sense to the reader: `2026-11-05_garden-rota.pdf`, not `scan0003.pdf`."
    ]},
    {h:"Before you press Send", body:[
      "A last check takes thirty seconds and catches most embarrassing mistakes:",
      {ol:[
        "**Recipients:** right people, right lines? Autocomplete often suggests the wrong Kenji.",
        "**Subject:** does it still describe the email?",
        "**The ask:** clear, with a deadline?",
        "**Attachments and links:** attached, the right version, the right sharing setting?",
        "**Tone:** would you be comfortable if this email were forwarded?"
      ]},
      "A useful trick: **add the recipients last**. Then a half-written email can’t be sent by accident.",
      "Many apps also offer [[undo-send]]: a short delay before the email really leaves, with an Undo button. Gmail lets you choose 5 to 30 seconds; Outlook on the web and the new Outlook for Windows offer up to 10; Apple Mail offers 10, 20 or 30. Thunderbird has no built-in Undo Send. Once the delay is over, the email has gone.",
      "Outlook’s **recall** works only between Microsoft 365 work or school accounts in the same organisation, and only before the email is opened; personal accounts can’t use it. Don’t rely on it.",
      {h:"Common misconceptions"},
      {list:[
        "**“Longer emails look more professional.”** Clear, short emails are easier to act on.",
        "**“Bcc is a safe way to email a sensitive group.”** One forgotten Bcc exposes everyone. Sensitive groups need a proper mailing tool.",
        "**“Undo send unsends an email that’s already been delivered.”** It only delays sending for a few seconds."
      ]}
    ]}
   ],
   try:[
    {id:"t1u11-l1-x1", type:"spot", q:"Tomás is about to send this email to the 42 members of a hiking club. Tap the parts that need fixing before it goes.", ask:"needs fixing", parts:[
      "To: ",{t:"all 42 members’ addresses", flag:true, why:"Everyone would see everyone else’s address, and anyone could Reply All to 42 people. Put the members in Bcc (with his own address in To) or use a mailing tool."},
      "\nSubject: ",{t:"Hi", flag:true, why:"“Hi” says nothing about the topic or the action. Something like “Saturday hike moved to 10:00, reply if you need a lift” works far better."},
      "\n\n",{t:"Hello everyone,", flag:false, why:"A friendly greeting for a club is fine."},
      "\n\n",{t:"Saturday’s hike now starts at 10:00, not 9:00, because the car park opens later.", flag:false, why:"Clear and specific: the change, the new time and the reason, in one sentence."},
      " ",{t:"Also, can someone bring a first-aid kit, who wants to organise December, and has anyone seen my blue flask?", flag:true, why:"Three unrelated asks in one sentence. People will answer the easiest one. The December question deserves its own email."},
      "\n\nPlease reply ",{t:"by 11/12", flag:true, why:"11/12 means 11 December in many countries and November 12 in others. “by Thursday 12 November” can’t be misread."},
      " if you need a lift.\n\n",{t:"See you there,\nTomás", flag:false, why:"A normal, friendly close with his name."}
    ]},
    {id:"t1u11-l1-x2", type:"sort", q:"Where should each person go: To, Cc or Bcc?", buckets:["To","Cc","Bcc"], items:[
      {t:"The supplier you’re asking to fix a wrong delivery", b:0, why:"They must act, so they go in To."},
      {t:"Your manager, who asked to be kept informed about this supplier", b:1, why:"They need to see it but not act, and it’s fine for the supplier to know they’re informed, so Cc."},
      {t:"80 volunteers who don’t know each other, getting a schedule update", b:2, why:"Bcc hides their addresses from each other and stops 80-person Reply All chains."},
      {t:"The two colleagues whose approval you need for a budget", b:0, why:"They each must act (approve), so both go in To."},
      {t:"A colleague who covers your desk next week and should see the background", b:1, why:"Openly informed, no action needed yet: Cc."},
      {t:"Parents of a school class receiving a trip reminder", b:2, why:"Many families who may not want their addresses shared. Bcc, or better, the school’s messaging system."}
    ]},
    {id:"t1u11-l1-x3", type:"mcq", q:"Priya needs her landlord to fix a leaking tap. Which subject line is most likely to get a quick, useful reply?", options:[
      {t:"Leaking kitchen tap at Flat 4: can someone visit this week?", ok:true, why:"It names the problem, the place and the action needed, so the landlord knows what it is before opening it."},
      {t:"Problem", why:"Too vague. The landlord can’t tell what or how serious it is, so it’s easy to postpone."},
      {t:"URGENT!!! PLEASE READ!!!", why:"Capitals and exclamation marks read as shouting and still don’t say what the problem is."},
      {t:"Hello from Priya", why:"Friendly, but it hides the reason for writing. The subject should carry the topic and the ask."}
    ]},
    {id:"t1u11-l1-x4", type:"order", q:"Put the parts of Kenji’s email to a new client in the order that works best.", items:[
      {t:"Subject: Quote for your café website: please choose an option by 20 Nov", why:"The subject comes first and already carries the topic, the ask and the deadline."},
      {t:"Dear Ms Mensah,", why:"A greeting that matches a first contact: fairly formal, using the name she signs with."},
      {t:"I’m writing to ask you to choose one of the two website options below.", why:"The first line says why he’s writing and what he needs."},
      {t:"Option A: four pages, ready in two weeks. Option B: four pages plus online ordering, ready in five weeks.", why:"Only the context she needs to decide, kept short and easy to compare."},
      {t:"Could you let me know your choice by Friday 20 November?", why:"The ask again, with a clear deadline, near the end."},
      {t:"Kind regards,\nKenji Watanabe · Web designer · kenji@example.com", why:"A close, his full name and a short signature."}
    ]},
    {id:"t1u11-l1-x5", type:"mcq", q:"Amara emails the 12 other members of the event team: “Can everyone make Saturday 9:00?” Hana can make it. What should she do?", options:[
      {t:"Click Reply and tell Amara she can make it", ok:true, why:"Amara is collecting answers. The other 11 recipients don’t need Hana’s yes, so Reply keeps their inboxes clear."},
      {t:"Click Reply All so everyone knows", why:"Eleven people would each get an email they don’t need. If all twelve recipients did this, that’s 12 × 11 = 132 unneeded messages."},
      {t:"Forward the email to Amara with “yes”", why:"Forwarding sends a new copy of the whole message; Reply is simpler and keeps the thread together."},
      {t:"Don’t reply: Amara will assume yes", why:"Amara asked a question; silence leaves her guessing. A one-line reply is helpful."}
    ]},
    {id:"t1u11-l1-x6", type:"match", q:"Match each situation with the best way to send the file.", pairs:[
      ["A signed rental agreement the landlord must keep","Attach a PDF","It’s final, the landlord needs their own permanent copy, and a PDF opens almost anywhere."],
      ["A slide deck five classmates will edit together this week","Share a link with edit access","Everyone works on one copy, so nobody merges five versions."],
      ["A 2 GB video of a family wedding","Share a view-only link","It’s too big to attach, and relatives only need to watch or download it."],
      ["A draft report a manager should comment on but not change","Share a link with comment access","Comment access lets the manager add notes without editing the text."]
    ]},
    {id:"t1u11-l1-x7", type:"mcq", q:"Oluwaseun is writing to a supplier contact in another country for the first time. He doesn’t know their workplace’s habits. What’s the best approach to tone?", options:[
      {t:"Be polite and a little formal, use the name as they write it, keep sentences plain, and mirror their style once they reply", ok:true, why:"This works across cultures without guessing: start slightly formal, follow the reader’s lead, and avoid idioms that don’t translate."},
      {t:"Look up what people from that country are “like” and write in that style", why:"National stereotypes are unreliable; individuals and workplaces vary hugely. Mirroring the actual person is safer and more respectful."},
      {t:"Be very casual with jokes and emoji to seem friendly", why:"Humour and emoji often don’t survive translation or a first contact; they can read as unprofessional."},
      {t:"Write “Dear Sir” because most suppliers are men", why:"Guessing gender is risky and can offend. Use their full name or role instead."}
    ]}
   ],
   apply:{intro:"Set up your email app so that good habits are automatic. Outlook steps are for Outlook on the web (outlook.com, free with a Microsoft account) and the new Outlook for Windows; classic Outlook looks different. Thunderbird is a free, open-source email app from Mozilla (not part of LibreOffice).", tasks:[
     {t:"Turn on or lengthen Undo Send", app:{
       ms:["Select **Settings** (the gear icon, top right).","Go to **Mail → Compose and reply**.","Under **Undo send**, choose the longest delay (up to 10 seconds), then select **Save**.","After you send, an **Undo** notice appears briefly at the bottom of the window."],
       google:["On a computer, select **Settings** (gear, top right) → **See all settings**.","On the **General** tab, next to **Undo Send**, choose a cancellation period: 5, 10, 20 or 30 seconds.","Scroll down and select **Save Changes**.","On a phone: right after you tap Send, **Undo** appears for a moment at the bottom of the screen."],
       apple:["On a Mac: choose **Mail → Settings**, then **Composing**.","Set **Undo send delay** to 10, 20 or 30 seconds.","After sending, click **Undo Send** at the bottom of the sidebar.","On an iPhone: open **Settings → Apps → Mail** (on iOS 17 and earlier, **Settings → Mail**) and set **Undo Send Delay**. Tap **Undo Send** at the bottom of the screen right after sending."]
     }, appNote:"Thunderbird has no built-in Undo Send (it’s still a requested feature). For an email you want to check later, choose **File → Send Later** in the message window: it waits in the **Outbox** under Local Folders until you choose **File → Send Unsent Messages**."},
     {t:"Create a short signature", app:{
       ms:["Select **Settings** (gear) → **Account** (called **Accounts** in some versions) → **Signatures**.","Type your signature: name, role or group, and one way to reach you.","Choose it as the default for new messages (and replies, if you like), then **Save**."],
       google:["Select **Settings** (gear) → **See all settings**.","On the **General** tab, find **Signature** and select **Create new**. Name it, then type your signature in the box.","Under **Signature defaults**, choose it for new emails, then select **Save Changes** at the bottom.","On a phone: the Gmail app has its own mobile signature under **Settings →** your account."],
       libre:["Open the menu button (☰) → **Account Settings**. On the Menu Bar it’s **Tools → Account Settings** (on Linux, **Edit → Account Settings**).","Select your email account in the left panel.","Type your signature in the **Signature text** box. Each account needs its own."],
       apple:["On a Mac: choose **Mail → Settings → Signatures**.","Select your account in the left column, click **Add (+)** below the middle column and name the signature.","Type your signature in the preview on the right. Choose it in the **Signature** menu below.","On an iPhone: **Settings → Apps → Mail → Signature**."]
     }},
     {t:"Find the Bcc field and send yourself a test", app:{
       ms:["Select **New mail**.","Select **Bcc** at the right of the To line (in the new Outlook you can also use **Options → Show fields → Show Bcc**).","Put your own address in To and a second address you own (or a friend who agrees) in Bcc. Send it, then look at what the Bcc copy shows."],
       google:["Select **Compose**.","Select **Bcc** at the right end of the To line. On a phone, tap the arrow next to **To** to show Cc and Bcc.","Put your own address in To and a second address in Bcc. Send it and compare both copies."],
       libre:["Select **New Message** (called **Write** in older versions).","Click the **Bcc** button above the To field to show the Bcc line.","Put your own address in To and a second address in Bcc. Send it and compare both copies."],
       apple:["On a Mac: click **New Message**. If there’s no Bcc field, click the **Header Fields** button in the message window’s toolbar and choose **Bcc Address Field**.","On an iPhone: tap the **Cc/Bcc, From** line to open separate Cc and Bcc fields.","Put your own address in To and a second address in Bcc. Send it and compare both copies."]
     }},
     {t:"Rewrite one real email you need to send", write:"Subject (topic + action + date): …\nFirst line (why I’m writing / my ask): …\nContext the reader needs (2–3 lines): …\nThe ask again, with a deadline: …\nWho goes in To / Cc / Bcc, and why: …", how:["Pick an email you need to send this week, or rewrite one you sent recently.","Fill in the boxes below, then turn them into the email.","Do the five-point check from the lesson before you send it."]}
   ], proof:"Undo Send (or Send Later in Thunderbird) set, a signature that appears on new emails, a test showing what a Bcc copy looks like, and one real email rewritten with a clear subject, one ask and a deadline."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.3 “Communication and Calendar Applications”: “Essentials of Business Communication” and “Email” (To, Cc, Bcc, Reply All, Forward)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u11-l2", title:"Keeping an inbox under control", minutes:55,
   goals:[
     "Choose between archiving and deleting, and between folders and labels",
     "Find any email in seconds with search and search operators",
     "Set up filters (rules) that sort routine mail automatically",
     "Unsubscribe, report spam, set an out-of-office reply and build a routine you can keep"
   ],
   learn:[
    {h:"A big inbox isn’t a failing", body:[
      {lead:"If your inbox has 4,000 unread emails, you are not bad at email. You are receiving more than anyone can read."},
      "An inbox is a to-do list that other people write for you. Newsletters, receipts, notifications from apps, group threads and genuine requests all land in the same place. The aim isn’t an empty inbox for its own sake. It’s simpler: **don’t miss the emails that matter, and don’t spend your day on the ones that don’t.**",
      "Some people like to clear their inbox to zero every day. Others leave thousands of messages and rely on search. Both can work. What matters is that you can answer three questions quickly: What needs my reply? Where is that email from March? What can I safely ignore?",
      "This lesson gives you the tools: archiving, folders and labels, search, automatic filters, unsubscribing, and a routine that takes minutes, not hours. Start with whichever one would help most; you don’t need all of them at once.",
      {key:"An inbox is for things that still need you. Everything else can be archived, filtered or unsubscribed, and found again by search."}
    ]},
    {h:"Archive or delete? Folders or labels?", body:[
      "**Deleting** moves an email to the Trash (or Deleted Items), which is emptied automatically after a while or when you empty it. Once that happens, the email is gone.",
      "**[[archive|Archiving]]** takes an email out of the inbox but keeps it. It stays searchable, forever or until you delete it. Archiving is the safe default for anything you’ve dealt with: receipts, finished conversations, confirmations. Most people delete far less than they think they should.",
      {table:[
        ["App","Archive button puts mail in…","Ways to organise"],
        ["Gmail","**All Mail** (search `in:archive` to see only archived mail)","**Labels**: one email can have several"],
        ["Outlook","The **Archive** folder","**Folders**, plus colour **categories** that work like labels"],
        ["Thunderbird","An **Archives** folder (press [[kbd:A]]), split by year or month if you like","**Folders**, plus **tags**"],
        ["Apple Mail","The **Archive** mailbox","**Mailboxes** (folders) and flags"]
      ]},
      "A **folder** is like a drawer: an email sits in one folder at a time. A **label** is like a sticky note: one email can carry several, such as “Garden” and “Receipts”, and appear under both. Gmail uses labels; Outlook, Thunderbird and Apple Mail use folders but offer categories, tags or flags that behave like labels. See [[label-folder]] for the details.",
      "Keep the number of folders or labels small: a handful you actually use beats forty you never open. Many people find three are enough: **Action** (I need to do something), **Waiting** (someone else needs to reply) and **Reference** (keep, but nothing to do). Everything else gets archived and found by search."
    ]},
    {h:"Search instead of sorting", body:[
      "Search is the most underused inbox skill. Instead of filing every email perfectly, you can find almost anything in seconds, as long as you know a few **search operators**: short words that tell the search exactly what to look for. Unit 6 introduced operators for web search ({{search-skills}}); email apps have their own.",
      {table:[
        ["Gmail operator","Finds"],
        ["`from:mei@example.com`","Emails from that address (part of a name works too: `from:mei`)"],
        ["`subject:invoice`","Emails with “invoice” in the subject"],
        ["`has:attachment` · `filename:pdf`","Emails with attachments · with PDF attachments"],
        ["`larger:10M`","Emails bigger than 10 MB, useful when storage is full"],
        ["`older_than:1y` · `after:2026/01/01`","Older than a year · received after 1 January 2026"],
        ["`\"hall booking\"` · `-newsletter`","That exact phrase · without that word"],
        ["`in:anywhere`","Search everything, including Spam and Trash"]
      ]},
      "You can combine operators: `from:landlord has:attachment after:2026/01/01` finds every attachment your landlord sent this year.",
      "Outlook has a **Filters** button next to the search box (From, To, Subject, dates, attachments), and understands some keywords such as `from:` and `subject:`; Microsoft documents `HasAttachment:yes`. Thunderbird’s **Quick Filter** bar narrows the current folder by sender, subject or tag, and its search box searches everything. Apple Mail offers suggestions as you type, such as “From: Mei” or “Subject contains: invoice”.",
      {ex:"Dmitri needs the receipt for a kettle that has broken. He bought it sometime between March and May this year.\nHe doesn’t remember the shop, but he remembers the receipt was a PDF.\n\nHe searches: kettle filename:pdf after:2026/03/01 before:2026/06/01\n\nTwo results. The second is the receipt. Total time: 20 seconds, no folders needed.", label:"Worked example: finding instead of filing"}
    ]},
    {h:"Filters and rules: let the computer sort", body:[
      "An [[email-filter]] (Outlook and Apple Mail call it a **rule**) is an instruction your email app follows automatically for every new email: **if** a message matches a condition, **then** do an action.",
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="m112" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="56" rx="9" stroke-width="2"/><text x="170" y="33" text-anchor="middle">A new email arrives</text><text class="s" x="170" y="53" text-anchor="middle">From: news@bakery.example</text><path class="d-ink" d="M170,67 L170,88" stroke-width="2" marker-end="url(#m112)"/><rect class="d-gold" x="25" y="90" width="290" height="58" rx="9" stroke-width="2"/><text x="170" y="113" text-anchor="middle">The filter checks its condition</text><text class="s" x="170" y="134" text-anchor="middle">Is it from news@bakery.example?</text><path class="d-ink" d="M120,149 L90,182" stroke-width="2" marker-end="url(#m112)"/><path class="d-ink" d="M220,149 L250,182" stroke-width="2" marker-end="url(#m112)"/><text class="s" x="88" y="170" text-anchor="middle">yes</text><text class="s" x="254" y="170" text-anchor="middle">no</text><rect class="d-sage" x="10" y="184" width="152" height="82" rx="9" stroke-width="2"/><text x="86" y="206" text-anchor="middle">Actions run</text><text class="s" x="86" y="226" text-anchor="middle">label: Newsletters</text><text class="s" x="86" y="242" text-anchor="middle">skip the inbox</text><text class="s" x="86" y="258" text-anchor="middle">(kept, searchable)</text><rect class="d-lup" x="178" y="184" width="152" height="82" rx="9" stroke-width="2"/><text x="254" y="206" text-anchor="middle">No match</text><text class="s" x="254" y="226" text-anchor="middle">lands in the</text><text class="s" x="254" y="242" text-anchor="middle">inbox as usual</text><rect class="d-panel" x="10" y="282" width="320" height="60" rx="9" stroke-width="2"/><text x="170" y="305" text-anchor="middle">Nothing is deleted</text><text class="s" x="170" y="325" text-anchor="middle">Read the Newsletters label when you choose</text></svg>', alt:"A new email from news@bakery.example arrives. The filter checks its condition: is it from news@bakery.example? If yes, actions run: add the label Newsletters and skip the inbox; the email is kept and searchable. If no, it lands in the inbox as usual. A note at the bottom: nothing is deleted; read the Newsletters label when you choose.", cap:"A filter is an if-then instruction. Matching emails are sorted before you ever see them."},
      "Good first filters:",
      {list:[
        "**Newsletters and shop offers** you want to keep but not see in the inbox: label them and skip the inbox.",
        "**Messages from one important sender** (a school, a client, a care home): add a label or a star so they stand out.",
        "**Automatic notifications** from an app or website: send them to a “Notifications” folder."
      ]},
      "Rules have limits worth knowing. Gmail filters affect only **new** messages unless you tick the option to apply them to existing ones; Thunderbird has a **Run Now** button for mail you already have. Apple Mail’s rules run only while Mail is open on that Mac. And a rule that deletes mail can hide something important, so start with label or move actions, not delete.",
      {warn:"Criminals who break into an email account sometimes add a rule that forwards copies of your mail to them, or hides replies. Look through your rules and forwarding settings now and then, and remove any you didn’t create. If you find one, change your password and turn on two-step verification ({{mfa}})."}
    ]},
    {h:"Unsubscribe, spam and blocking", body:[
      "Three different buttons deal with unwanted mail, and they mean different things:",
      {table:[
        ["Button","Use it for","What happens"],
        ["[[unsubscribe|Unsubscribe]]","Mailing lists you signed up for and no longer want: a shop, a charity, a club","The sender is asked to stop. Reputable senders do."],
        ["Report [[spam]]","Bulk mail you never asked for","It moves to Spam, and your provider learns to catch similar mail for everyone"],
        ["Report phishing","Fake messages trying to trick you ({{phishing}})","Your provider is warned about a scam, not just junk"],
        ["Block","One sender you never want to hear from","Their future emails go straight to Spam or Trash; it doesn’t unsubscribe you"]
      ]},
      "Use the email app’s own **Unsubscribe** button, which many apps show near the sender’s name for mailing lists, rather than a link inside a suspicious email. Gmail also has a **Manage subscriptions** page (under **More** on the left) listing senders who email you often, with an Unsubscribe button for each; Google notes it is still rolling out.",
      "Don’t mark a real newsletter you once signed up for as spam just because it’s quicker. Unsubscribing is more honest and works better: it tells the sender to stop, rather than teaching the filter that ordinary mail from them is junk."
    ]},
    {h:"Notifications and when to check", body:[
      "Email notifications are designed to pull you back in. Each ping can break your concentration, even when the email can wait. Unit 5’s {{digital-wellbeing}} entry explains how attention gets captured; here are the email-specific habits:",
      {list:[
        "**Turn off new-mail sounds and banners**, or allow them only for a few important people (many phones and apps call these VIPs or priority contacts).",
        "**Check at set times** (for example, morning, after lunch and before you finish) instead of all day. If your job needs fast replies, agree with your team what “fast” means.",
        "**Process, don’t just look.** Opening an email and leaving it unread for “later” means reading it twice."
      ]},
      "If people expect instant replies from you by email, that expectation is worth discussing. Urgent things are usually better handled by a call or a chat message (Lesson 5)."
    ]},
    {h:"Out-of-office replies", body:[
      "An [[out-of-office]] reply (Gmail calls it a **vacation responder**, Outlook calls it **automatic replies**) answers incoming emails for you while you’re away. Gmail, for example, sends it to each sender the first time they write, and again only if they write after four days or you edit the message.",
      "A good out-of-office message says:",
      {ol:["When you’re back.","Who to contact for urgent matters (with their permission).","That replies will be slower, without apologising at length."]},
      {ex:"Subject: Away until Monday 30 November\n\nThanks for your email. I’m away until Monday 30 November and will reply after that.\nFor urgent rota questions, please contact Mei Chen at rota@example.org.\n\nAna", label:"A short out-of-office reply"},
      "Leave out where you are and why. An automatic reply goes to anyone who writes, including strangers and scammers, and “I’m on holiday abroad for three weeks” tells them your home may be empty. Work accounts often let you send a fuller message inside your organisation and a shorter one to outsiders.",
      "Not every app can do this on its own. Thunderbird’s help pages recommend setting it in your email provider’s website, because a Thunderbird-based auto-reply works only while your computer is on and Thunderbird is running. Apple Mail on a Mac can auto-reply only through a rule while Mail is open; iCloud Mail users can set an **Auto-Reply** at icloud.com instead."
    ]},
    {h:"A routine you can keep", body:[
      "When you sit down to deal with email, make a decision about each message, once:",
      {table:[
        ["Decision","When","Do"],
        ["Do it","It takes about two minutes or less","Reply or act now, then archive"],
        ["Defer it","It needs real time","Flag, star, snooze or move to Action; put time in your calendar"],
        ["Delegate it","Someone else should handle it","Forward with a clear one-line ask, then move to Waiting"],
        ["Drop it","Nothing to do","Archive (or delete, or unsubscribe)"]
      ]},
      "The “two-minute” cut-off is a popular productivity idea, not a rule: adjust it to your work. The point is to stop re-reading the same emails.",
      {h:"Starting again with a huge inbox"},
      "If your inbox is far beyond rescue, you can declare a fresh start without losing anything. Search for everything older than a month (in Gmail, `in:inbox older_than:30d`), select all the results, and **archive** them. They are still there and searchable. Then use the routine on the new mail that arrives. Anyone with something important will write again.",
      {h:"Common misconceptions"},
      {list:[
        "**“Archiving is the same as deleting.”** Archived mail is kept and searchable; deleted mail is removed for good once the Trash is emptied.",
        "**“Marking newsletters as spam is the fastest way to unsubscribe.”** It hides the mail from you but doesn’t ask the sender to stop, and it trains the spam filter on mail that isn’t spam.",
        "**“I need a folder for everything.”** Search finds most emails faster than browsing folders.",
        "**“An empty inbox means I’m organised.”** What matters is that you don’t miss what’s important, however many emails remain."
      ]}
    ]}
   ],
   try:[
    {id:"t1u11-l2-x1", type:"sort", q:"What’s the best thing to do with each email?", buckets:["Archive","Unsubscribe","Report spam","Report phishing"], items:[
      {t:"A delivery confirmation for a parcel that has already arrived", b:0, why:"Dealt with, but you may need it if something goes wrong. Archive keeps it searchable."},
      {t:"A weekly newsletter from a bookshop you joined years ago and no longer read", b:1, why:"You signed up, so unsubscribing is the honest fix and stops it at the source."},
      {t:"An email from a stranger offering cheap watches, sent to thousands of addresses", b:2, why:"Unwanted bulk mail you never asked for: report it as spam so the filter improves for everyone."},
      {t:"An “account suspended” email from a fake address asking you to sign in through a link", b:3, why:"It’s trying to steal your password, so report it as phishing (not just spam) and don’t click."},
      {t:"A finished thread with your landlord agreeing the repair date", b:0, why:"You might need it later as a record, so archive rather than delete."},
      {t:"A charity mailing list you joined at an event but don’t want any more", b:1, why:"It’s a legitimate list you joined; unsubscribe through the app’s button or the email’s footer."}
    ]},
    {id:"t1u11-l2-x2", type:"match", q:"Match each Gmail search with what it finds.", pairs:[
      ["`from:school has:attachment`","Emails from the school that have attachments","`from:` matches the sender and `has:attachment` keeps only messages with files."],
      ["`larger:10M`","Emails bigger than 10 MB","Useful for freeing storage: the big ones are usually old attachments."],
      ["`older_than:2y`","Emails more than two years old","`older_than:` counts back from today in days (d), months (m) or years (y)."],
      ["`\"choir rehearsal\" -cancelled`","Emails with that exact phrase but without “cancelled”","Quotes match an exact phrase; a minus sign excludes a word."],
      ["`in:anywhere invoice`","“Invoice” emails anywhere, including Spam and Trash","Normal searches skip Spam and Trash; `in:anywhere` includes them."]
    ]},
    {id:"t1u11-l2-x3", type:"mcq", q:"Hana gets an email about the school concert that is also a receipt for tickets. In Gmail, how can she find it under both “School” and “Receipts”?", options:[
      {t:"Apply both labels to the same email", ok:true, why:"Gmail labels work like sticky notes: one email can carry several and appears under each."},
      {t:"Forward it to herself so there are two copies", why:"That creates clutter and two copies to keep track of. Labels do this without duplicating anything."},
      {t:"It’s impossible: an email can only be in one place", why:"That’s how folders work in many apps, but Gmail labels can be combined."},
      {t:"Archive it, because archived mail appears under every label", why:"Archiving removes it from the inbox; it doesn’t add labels. She still needs to apply both."}
    ]},
    {id:"t1u11-l2-x4", type:"order", q:"Put the steps for creating a Gmail filter for a club newsletter in order.", items:[
      {t:"In the search box, open Show search options", why:"Gmail builds filters from a search, so you start with the search options."},
      {t:"Type the newsletter’s address in From", why:"This is the condition: which emails the filter should match."},
      {t:"Select Create filter at the bottom of the search window", why:"Once the condition is set, you move on to choosing the actions."},
      {t:"Tick Skip the Inbox and Apply the label “Newsletters”", why:"These are the actions: keep the email, but out of the inbox and labelled."},
      {t:"Select Create filter to save it", why:"The filter now applies to new matching emails (tick the option for existing ones if you want those sorted too)."}
    ]},
    {id:"t1u11-l2-x5", type:"spot", q:"Kenji is setting up an out-of-office reply that goes to anyone who emails him. Tap the parts he should change.", ask:"should change", parts:[
      {t:"Thanks for your email.", flag:false, why:"A polite, neutral opening."},
      " ",{t:"I’m back on Monday 30 November", flag:false, why:"The return date is the most useful information in an out-of-office reply."},
      " ",{t:"after three weeks backpacking in Peru, so the flat is empty until then.", flag:true, why:"This tells strangers, including scammers, that his home is empty and for how long. Leave out where and why."},
      "\n",{t:"For urgent invoices, contact Lucía at accounts@example.com.", flag:false, why:"A named contact for urgent matters (with her agreement) helps people and protects his work."},
      "\n",{t:"My personal mobile is 07700 900456, call any time.", flag:true, why:"An automatic reply goes to everyone, including spammers. Don’t publish a personal number, and “any time” defeats the point of a break."},
      "\n",{t:"Kenji", flag:false, why:"Signing off with his name is fine."}
    ]},
    {id:"t1u11-l2-x6", type:"mcq", q:"Lucía has 9,000 emails in her inbox and feels overwhelmed. What’s the most realistic first step?", options:[
      {t:"Archive everything older than a month, then deal with new mail using a simple routine", ok:true, why:"Archiving keeps every email searchable, so nothing is lost, and she gets a manageable inbox today instead of spending days sorting."},
      {t:"Delete all 9,000 so she can start fresh", why:"Deleting is permanent once the Trash empties; receipts and important threads could be lost. Archive gives the same fresh start safely."},
      {t:"Read every email from oldest to newest this weekend", why:"That could take days and most of the mail no longer needs anything. A fresh start plus search is far more realistic."},
      {t:"Create 30 folders and sort every email into one", why:"Sorting 9,000 emails by hand is slow, and most will never be opened again. Search can find them if needed."}
    ]},
    {id:"t1u11-l2-x7", type:"mcq", q:"Sione finds a rule in his email settings, created last week, that forwards every message to an address he doesn’t recognise. He didn’t make it. What should he do?", options:[
      {t:"Delete the rule, change his email password, turn on two-step verification and check other settings such as forwarding and recovery details", ok:true, why:"An unknown forwarding rule is a common sign someone else got into the account. Removing it isn’t enough; he must lock them out and check what else they changed."},
      {t:"Leave it: email apps sometimes create rules automatically", why:"Apps don’t silently create forwarding rules to unknown addresses. This is a warning sign of account takeover."},
      {t:"Just delete the rule", why:"If someone made it, they may still have his password and can add it back. He needs to change the password and secure the account too."},
      {t:"Email the unknown address and ask who they are", why:"That alerts a likely attacker and doesn’t secure anything. Secure the account first."}
    ]}
   ],
   apply:{intro:"Pick the two or three tasks that would help you most. Nothing here deletes mail. Outlook steps are for Outlook on the web and the new Outlook for Windows.", tasks:[
     {t:"Find an old email using search", app:{
       ms:["Click in the **Search** box at the top.","Select **Filters** (the funnel icon at the right of the search box) and fill in **From**, a date range, or tick **Has attachments**.","Or type a keyword such as `from:mei` or `subject:invoice` and press [[kbd:Enter]]."],
       google:["Type a search using at least two operators, for example `from:landlord has:attachment` or `subject:receipt after:2026/01/01`.","Or select **Show search options** (the sliders icon at the right of the search box) and fill in the form.","Try `larger:10M` to find the biggest emails if your storage is getting full."],
       libre:["Select the folder to search, then click **Quick Filter** in the toolbar above the message list (or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]]; on a Mac [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:K]]).","Type a word and choose whether it should match **Sender**, **Subject** or **Body**.","To search every folder, use the search box at the top of the window instead."],
       apple:["On a Mac: type in the search field at the top of the message list.","Choose a suggestion such as **From:** a person or **Subject contains:** a word. You can add several to narrow the search.","Choose whether to search **All** mailboxes or just the current one."]
     }},
     {t:"Make one filter or rule for a newsletter or notification", app:{
       ms:["Right-click an email from the sender, hover over **Rules**, then select **Create rule**.","Choose the folder these emails should go to (create a “Newsletters” folder first if you need one), then select **OK**.","For more conditions and actions, select **More options**. To review or remove rules later: **Settings → Mail → Rules**."],
       google:["In the search box, select **Show search options** and type the sender’s address in **From**.","Select **Create filter**.","Tick **Skip the Inbox (Archive it)** and **Apply the label**, then choose or create “Newsletters”.","Tick **Also apply filter to matching conversations** if you want existing emails sorted too, then select **Create filter**."],
       libre:["Open an email from the sender, right-click the sender’s address in the message header and choose **Create Filter From…**","Under the actions, choose **Move Message to** and pick a folder (create it first if needed). Select **OK**.","In the **Message Filters** window (**Tools → Message Filters**), select the filter and click **Run Now** to sort mail you already have."],
       apple:["On a Mac: choose **Mail → Settings**, click **Rules**, then **Add Rule**.","Give it a description. Set the condition to **From** · **Contains** · the sender’s address.","Set the action to **Move Message** to a mailbox you choose, then click **OK**. Mail asks whether to apply it to existing messages.","Apple Mail rules run only while Mail is open on that Mac."]
     }},
     {t:"Prepare (and switch off) an out-of-office reply", app:{
       ms:["Select **Settings** (gear) → **Account** (called **Accounts** in some versions) → **Automatic replies**.","Switch on the **Turn on automatic replies** toggle, type a short message, and tick **Send replies only during a time period** with start and end dates.","Select **Save**. If you’re only practising, turn the toggle off again and save."],
       google:["Select **Settings** (gear) → **See all settings**.","On the **General** tab, find **Vacation responder** and select **Vacation responder on**.","Fill in the dates, subject and message. Optionally tick the box to reply only to people in your contacts.","Select **Save Changes**. If you’re only practising, switch it off again and save."],
       apple:["For an iCloud Mail address: go to icloud.com/mail, click the **Settings** button at the top of the Mailboxes list, choose **Settings**, then **Auto-Reply**.","Tick **Automatically reply to messages when they are received**, type your message and optionally set a date range.","For other email accounts used in Apple Mail, set the auto-reply on your email provider’s website, because a Mail rule only replies while the Mac is on and Mail is open."]
     }, appNote:"Thunderbird’s help pages recommend setting an out-of-office reply on your email provider’s website (for example Gmail’s or Outlook’s settings on the web). A Thunderbird filter that replies with a template works only while your computer is on and Thunderbird is running, and Mozilla advises against it."},
     {t:"Unsubscribe from one list you no longer read", how:["Open a recent email from a mailing list you joined but don’t want.","Look for the app’s own **Unsubscribe** button near the sender’s name. In Gmail you can also open **More → Manage subscriptions** on the left (still rolling out). If there’s no button, use the unsubscribe link at the bottom of the email, but only for senders you recognise.","Don’t use unsubscribe links in suspicious emails; report those as spam or phishing instead.","Then archive the old emails from that sender if you don’t need them in the inbox."]}
   ], proof:"You found an old email with a search that combined at least two conditions, created one filter or rule that keeps routine mail out of your inbox without deleting it, have an out-of-office message ready to switch on, and unsubscribed from at least one list."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.3 “Communication and Calendar Applications”: “Microsoft Outlook” and “Gmail” (folders, junk mail and spam)", note:"The book shows classic Outlook’s ribbon (Message tab, Respond and Tags groups). Outlook on the web and the new Outlook for Windows put these commands in a simpler toolbar."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u11-l3", title:"Calendars, time zones and meetings", minutes:60,
   apps:{ms:"Outlook calendar", google:"Google Calendar", libre:"Thunderbird calendar", apple:"Apple Calendar"},
   goals:[
     "Send and answer calendar invitations, and know what the organiser sees",
     "Convert times using UTC and offsets, including daylight-saving changes",
     "Schedule fairly across time zones and decide whether a meeting is needed at all",
     "Run a video call people can follow: mute, camera, screen sharing, captions and recording consent"
   ],
   learn:[
    {h:"What a calendar invite really is", body:[
      {lead:"A calendar invitation is an email with an event attached. That’s why an invite from Google Calendar can land in an Outlook calendar, or the other way round."},
      "When you invite people to an event, your calendar sends each of them a [[calendar-invite]]: an email carrying the event details in a standard format called iCalendar (files ending in `.ics`). Their email or calendar app reads it and offers buttons to respond. Each answer, an [[rsvp]], goes back to the organiser’s calendar, which keeps count.",
      {table:[
        ["App","Response buttons","Extras"],
        ["Google Calendar","Yes · No · Maybe","Propose a new time (from the arrow next to Maybe)"],
        ["Outlook","Accept · Tentative · Decline","Propose new time; choose whether to send a response"],
        ["Thunderbird","Accept · Tentative · Decline","Responds by email to the organiser"],
        ["Apple Calendar","Accept · Maybe · Decline","Respond from the invitation or the event"]
      ]},
      "Good invitation habits:",
      {list:[
        "**A clear title** that works in a crowded week: “Garden committee: November budget” rather than “Meeting”.",
        "**The video link or address in the event**, plus a short agenda in the description (more below).",
        "**Answer every invitation you receive**, even with No. Organisers plan rooms, food and agendas around the replies.",
        "**For a recurring event**, apps ask whether a change applies to **this event** or **all events**. Read carefully before declining or moving a whole series."
      ]},
      {warn:"Invitations can be spam too. Some calendars add invitations from anyone automatically, so a fake “invoice overdue” event with a link can appear in your calendar. Don’t click links in invitations from people you don’t know; delete the event and, if your app offers it, report it."}
    ]},
    {h:"Time zones and UTC", body:[
      "A [[time-zone]] is a region that uses the same clock time. Because the Earth turns, noon in Lagos is not noon in Tokyo. To compare times reliably, the world uses a reference clock: [[utc]] (Coordinated Universal Time). UTC doesn’t belong to any one country. It is calculated by the International Bureau of Weights and Measures (BIPM, near Paris) from atomic clocks in more than 80 laboratories.",
      "Every local time is described by its [[utc-offset]]: how far ahead (+) or behind (−) UTC it is. Most offsets are whole hours, but not all: India is UTC+5:30 and Nepal is UTC+5:45.",
      {fig:'<svg viewBox="0 0 340 404"><rect class="d-lup" x="10" y="10" width="320" height="50" rx="9" stroke-width="2"/><text x="170" y="31" text-anchor="middle">One call at 14:00 UTC</text><text class="s" x="170" y="50" text-anchor="middle">Tuesday 17 November 2026</text><text class="s" x="18" y="80">City</text><text class="s" x="200" y="80" text-anchor="middle">Offset</text><text class="s" x="322" y="80" text-anchor="end">Local time</text><rect class="d-panel" x="10" y="88" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="110">Los Angeles</text><text class="s" x="200" y="110" text-anchor="middle">UTC−8</text><text x="322" y="110" text-anchor="end">Tue 06:00</text><rect class="d-panel" x="10" y="126" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="148">New York</text><text class="s" x="200" y="148" text-anchor="middle">UTC−5</text><text x="322" y="148" text-anchor="end">Tue 09:00</text><rect class="d-gold" x="10" y="164" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="186">London</text><text class="s" x="200" y="186" text-anchor="middle">UTC+0</text><text x="322" y="186" text-anchor="end">Tue 14:00</text><rect class="d-panel" x="10" y="202" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="224">Lagos</text><text class="s" x="200" y="224" text-anchor="middle">UTC+1</text><text x="322" y="224" text-anchor="end">Tue 15:00</text><rect class="d-panel" x="10" y="240" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="262">Mumbai</text><text class="s" x="200" y="262" text-anchor="middle">UTC+5:30</text><text x="322" y="262" text-anchor="end">Tue 19:30</text><rect class="d-panel" x="10" y="278" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="300">Tokyo</text><text class="s" x="200" y="300" text-anchor="middle">UTC+9</text><text x="322" y="300" text-anchor="end">Tue 23:00</text><rect class="d-rose" x="10" y="316" width="320" height="34" rx="6" stroke-width="1.5"/><text x="18" y="338">Auckland</text><text class="s" x="200" y="338" text-anchor="middle">UTC+13</text><text x="322" y="338" text-anchor="end">Wed 03:00</text><text class="s" x="170" y="374" text-anchor="middle">Offsets shown are for this date. They change</text><text class="s" x="170" y="392" text-anchor="middle">where clocks move for daylight saving.</text></svg>', alt:"One call at 14:00 UTC on Tuesday 17 November 2026, shown in seven cities: Los Angeles UTC−8, Tuesday 06:00; New York UTC−5, Tuesday 09:00; London UTC+0, Tuesday 14:00 (highlighted); Lagos UTC+1, Tuesday 15:00; Mumbai UTC+5:30, Tuesday 19:30; Tokyo UTC+9, Tuesday 23:00; Auckland UTC+13, Wednesday 03:00 (highlighted: the next day). Offsets are for this date and change where clocks move for daylight saving.", cap:"The same moment in seven places. Local time = UTC + offset, and the date can change too."},
      "To convert, go through UTC: **local time − offset = UTC**, then **UTC + the other offset = their local time**.",
      {ex:"Priya is in Mumbai (UTC+5:30). A webinar is at 09:00 in New York (UTC−5) on 17 November.\n\nStep 1, New York to UTC: 09:00 − (−5) = 09:00 + 5 h = 14:00 UTC.\nStep 2, UTC to Mumbai: 14:00 + 5:30 = 19:30.\n\nThe webinar starts at 19:30 Priya’s time, the same evening.", label:"Worked example: converting through UTC"},
      "Your calendar does this for you. Google Calendar and Outlook store each event’s moment in UTC and show it in each person’s own time zone. So a guest in Tokyo sees the call at 23:00, not 14:00. The calendar can only get it right if **your device and calendar are set to the right time zone**, and the organiser created the event in the right zone."
    ]},
    {h:"Daylight saving: the clocks that move", body:[
      "[[daylight-saving|Daylight saving time]] (also called summer time) moves clocks forward an hour in spring and back in autumn. That changes a place’s UTC offset twice a year. London is UTC+0 in winter and UTC+1 in summer; New York is UTC−5 in winter and UTC−4 in summer.",
      "Three facts cause most scheduling mistakes:",
      {list:[
        "**Many places don’t use it at all.** Most of Africa and Asia, including Nigeria, Kenya, India, China and Japan, keep the same offset all year. So do some places inside countries that do use it: in the United States, Hawaii and most of Arizona don’t change their clocks.",
        "**Places that use it change on different dates.** The United States changes on the second Sunday of March and the first Sunday of November. The European Union changes on the last Sunday of March and the last Sunday of October, at 01:00 UTC.",
        "**The southern hemisphere does it in the opposite season.** Places such as most of south-eastern Australia, New Zealand and Chile move clocks forward around September or October and back around April."
      ]},
      {fig:'<svg viewBox="0 0 340 384"><text x="170" y="22" text-anchor="middle">How far is New York behind London?</text><text class="s" x="170" y="40" text-anchor="middle">2026 · segments not to scale</text><rect class="d-sage" x="10" y="54" width="62" height="56" rx="6" stroke-width="2"/><text x="41" y="87" text-anchor="middle">5 h</text><text x="84" y="76">1 Jan – 7 Mar</text><text class="s" x="84" y="96">both on winter time</text><rect class="d-rose" x="10" y="118" width="62" height="56" rx="6" stroke-width="2"/><text x="41" y="151" text-anchor="middle">4 h</text><text x="84" y="140">8 Mar – 28 Mar</text><text class="s" x="84" y="160">US clocks forward; UK not yet</text><rect class="d-sage" x="10" y="182" width="62" height="56" rx="6" stroke-width="2"/><text x="41" y="215" text-anchor="middle">5 h</text><text x="84" y="204">29 Mar – 24 Oct</text><text class="s" x="84" y="224">both on summer time</text><rect class="d-rose" x="10" y="246" width="62" height="56" rx="6" stroke-width="2"/><text x="41" y="279" text-anchor="middle">4 h</text><text x="84" y="268">25 Oct – 31 Oct</text><text class="s" x="84" y="288">UK clocks back; US not yet</text><rect class="d-sage" x="10" y="310" width="62" height="56" rx="6" stroke-width="2"/><text x="41" y="343" text-anchor="middle">5 h</text><text x="84" y="332">1 Nov – 31 Dec</text><text class="s" x="84" y="352">both on winter time</text></svg>', alt:"Five stacked segments for 2026 showing how many hours New York is behind London. 1 January to 7 March: 5 hours, both on winter time. 8 to 28 March: 4 hours, US clocks have gone forward but UK clocks have not. 29 March to 24 October: 5 hours, both on summer time. 25 to 31 October: 4 hours, UK clocks have gone back but US clocks have not. 1 November to 31 December: 5 hours, both on winter time.", cap:"Because the US and UK change clocks on different Sundays, the gap is 4 hours for about four weeks a year."},
      "A weekly call fixed at 10:00 New York time is 15:00 in London most of the year, but 14:00 for those few weeks. People in places without daylight saving see their meetings jump by an hour twice a year, because someone else’s clocks moved.",
      {tip:"Governments sometimes change time-zone rules at short notice. Keep your devices updated: updates include the latest time-zone rules, and Google notes that events created before a rule change can show at the wrong time."}
    ]},
    {h:"Scheduling fairly across zones", body:[
      "When people are in different places:",
      {list:[
        "**Name the zone with a city or UTC, not an abbreviation.** “CST” can mean US Central Standard Time or China Standard Time, which are 14 hours apart. “16:00 UTC” or “10:00 Mexico City time” can’t be misread.",
        "**Let the calendar convert.** Create the event in the right time zone and send an invitation, rather than typing times into an email.",
        "**Show a second time zone** in your calendar if you often work with one other place, or use a world clock.",
        "**Check [[free-busy|free/busy]] information** where you can. In many workplaces you can see when colleagues are busy (not what they’re doing); Google Calendar calls the tool **Find a time** and Outlook has a **Scheduling Assistant**. Outside an organisation, a simple poll of a few options works.",
        "**Share the pain.** If there’s no comfortable time for everyone, rotate who gets the early or late slot."
      ]},
      {ex:"Mei (Singapore, UTC+8), Tomás (Mexico City, UTC−6, no daylight saving) and Fatima (Berlin, UTC+1 in November) need a monthly call.\n\nTry 14:00 UTC: Tomás 08:00 · Fatima 15:00 · Mei 22:00.\nTry 13:00 UTC: Tomás 07:00 · Fatima 14:00 · Mei 21:00.\n\nNo slot is perfect: 13:00 UTC is early for Tomás and evening for Mei, but nobody has to join in the middle of the night. They pick it and agree to check after a few months whether it still works for both of them.", label:"Worked example: a fair time across three zones"}
    ]},
    {h:"Does this need to be a meeting?", body:[
      "A meeting costs everyone’s time at once. A one-hour meeting with six people is six hours of work. Before you send an invitation, ask what the meeting is for:",
      {table:[
        ["Need","Usually best as"],
        ["Share information nobody needs to discuss","An email or a short document"],
        ["Get comments on a draft","Comments in a shared document (Lesson 4)"],
        ["A quick question with a quick answer","A chat message (Lesson 5)"],
        ["Decide something that needs discussion","A meeting, with an agenda"],
        ["A sensitive or difficult conversation","A meeting or call, not text"],
        ["Get to know a new team","A meeting"]
      ]},
      "If it does need to be a meeting, write an [[agenda]]: the purpose, the topics with rough times, any decisions needed, and what to read beforehand. Put it in the invitation. It helps people decide whether they need to come, lets them prepare, and keeps the meeting on track.",
      {ex:"Title: Food bank volunteers: December rota (30 min)\nPurpose: agree the December rota and who leads each Saturday.\n1. Changes since November (5 min), Hana\n2. Saturday leads: volunteers needed (15 min)\n3. Holiday opening hours: decision (10 min)\nBefore the call: add your availability to the shared rota sheet.", label:"An agenda in the invitation"},
      "Invite only people who need to be there; others can read the notes. End by agreeing **decisions** and **actions**: who does what by when. Send short notes afterwards, or keep them in a shared document that everyone can find."
    ]},
    {h:"Video calls: the basics", body:[
      "A [[video-call]] works best when everyone knows a few controls. Find them before the call starts, and test your microphone and camera in the app’s preview or settings. If something doesn’t work, Unit 7 has a checklist: {{audio-video-calls}}.",
      {table:[
        ["Control","Zoom (Windows · Mac)","Teams (Windows)","Google Meet (Windows/ChromeOS · Mac)"],
        ["[[mute|Mute]] or unmute","Alt+A · Cmd+Shift+A","Ctrl+Shift+M","Ctrl+D · Cmd+D"],
        ["Camera on or off","Alt+V · Cmd+Shift+V","Ctrl+Shift+O","Ctrl+E · Cmd+E"],
        ["Share screen","Share button","Ctrl+Shift+E","Present now / Share screen button"]
      ]},
      {list:[
        "**Mute when you’re not speaking**, especially in larger calls, and unmute before you talk. Background noise travels.",
        "**Camera expectations vary.** Some teams expect cameras on; in big presentations the organiser may ask you to switch them off. Follow the organiser’s lead, and it’s fine to say if you need it off for a while.",
        "**[[screen-share|Share a window, not your whole screen]]** when you can. Close private tabs, and turn on Do Not Disturb so notifications don’t pop up for everyone. Teams turns on Do not disturb by default while you share.",
        "**Turn on captions.** Most video apps can show live captions: in Google Meet press [[kbd:C]]; in Teams and Zoom look for a captions or CC button (sometimes under **More**). Captions help people who are Deaf or hard of hearing, people listening in a second language, and anyone on a bad connection.",
        "**Use the chat and the raise-hand button** to take turns in larger calls, and say your name before speaking if you’re on audio only."
      ]}
    ]},
    {h:"Recording needs consent", body:[
      "Recording a call, or letting an AI note-taker transcribe it, captures everyone’s voice, face and words. OpenStax’s *Workplace Software and Skills* advises that in most business settings you should avoid recording without the express approval of everyone involved. Laws on recording conversations differ between countries and even within them, and workplaces have their own policies.",
      {ol:[
        "**Ask before you start**, ideally in the invitation (“I’d like to record this for people who can’t attend”).",
        "**Say what happens to it:** where it’s stored, who can see it, and when it will be deleted.",
        "**Give people a real choice.** They can switch off their camera, leave for that part, or ask for it not to be recorded.",
        "**Check your organisation’s policy** before recording anything with customers, patients, pupils or members of the public."
      ]},
      "Most video apps show a notice or play a message when recording starts, and some ask participants to accept it. That notice is not the same as asking first.",
      {h:"Common misconceptions"},
      {list:[
        "**“GMT and UTC change in summer.”** UTC never changes. It’s the UK’s clocks that change, from UTC+0 (GMT) to UTC+1 (British Summer Time).",
        "**“Everyone moves their clocks on the same day.”** Many places never do, and those that do use different dates.",
        "**“If the app shows a recording banner, I don’t need to ask.”** Ask first; the banner only tells people afterwards.",
        "**“More people in the meeting is more inclusive.”** Inviting people who don’t need to be there wastes their time. Share notes instead."
      ]}
    ]}
   ],
   try:[
    {id:"t1u11-l3-x1", type:"number", q:"Tomás is in Mexico City (UTC−6). He has a call at 08:00 his time. What time is it in UTC? (Give the hour on the 24-hour clock.)", answer:14, tol:0, unit:"(hour, UTC)", why:"Local time − offset = UTC. 08:00 − (−6 h) = 08:00 + 6 h = 14:00 UTC. A place that is behind UTC adds hours to get to UTC.", wrongs:[
      {v:2, tol:0, why:"You subtracted 6 hours. Mexico City is behind UTC (−6), so UTC is 6 hours later than local time, not earlier."},
      {v:8, tol:0, why:"That’s Tomás’s local time. UTC is a different clock: add the 6 hours his zone is behind."}
    ]},
    {id:"t1u11-l3-x2", type:"number", q:"On Wednesday 28 October 2026, how many hours ahead of New York is London? (UK clocks went back on Sunday 25 October; US clocks go back on Sunday 1 November.)", answer:4, tol:0, unit:"hours", why:"After 25 October, London is back on winter time, UTC+0. New York is still on summer time until 1 November, UTC−4. So the difference is 0 − (−4) = 4 hours, not the usual 5.", wrongs:[
      {v:5, tol:0, why:"5 hours is the usual gap, but this week the UK has changed its clocks and the US hasn’t yet, so the gap is 4."},
      {v:6, tol:0, why:"The gap never reaches 6 hours. In this week London is UTC+0 and New York UTC−4: a difference of 4."}
    ]},
    {id:"t1u11-l3-x3", type:"mcq", q:"Lucía receives: “Call at 3 pm CST on Thursday.” What’s the problem?", options:[
      {t:"“CST” is ambiguous: it can mean US Central Standard Time or China Standard Time, among others", ok:true, why:"Abbreviations aren’t unique. A city name or a UTC time (“21:00 UTC”), or a proper calendar invitation, avoids the confusion."},
      {t:"Nothing: everyone knows CST", why:"CST means different zones in different places, and US Central and China Standard Time are 14 hours apart."},
      {t:"Times should never include a time zone", why:"The opposite: when people are in different places, a time without a clear zone is the problem."},
      {t:"“3 pm” should be written “15:00”", why:"Either format is fine. The real issue is which time zone CST refers to."}
    ]},
    {id:"t1u11-l3-x4", type:"sort", q:"Does each of these need a meeting, or would something else work better?", buckets:["Meeting","Email, chat or document"], items:[
      {t:"Telling 20 volunteers the hall’s new opening hours", b:1, why:"Information with nothing to discuss: one clear email (or a channel post) reaches everyone without taking an hour of their time."},
      {t:"Deciding, with three people who disagree, how to split a reduced budget", b:0, why:"A decision with real disagreement benefits from live discussion."},
      {t:"Collecting comments from five reviewers on a draft policy", b:1, why:"Comments in a shared document let each reviewer respond when they can, and keep the feedback next to the text."},
      {t:"Letting a colleague know you’ll be ten minutes late", b:1, why:"A quick chat message or text does the job."},
      {t:"Giving a team member difficult feedback about missed shifts", b:0, why:"Sensitive conversations go better face to face or on a call, where tone and questions can be handled kindly."},
      {t:"Welcoming three new members to the team", b:0, why:"Building relationships is one of the good reasons to meet."}
    ]},
    {id:"t1u11-l3-x5", type:"order", q:"Put Amara’s steps for a useful one-hour planning meeting in order.", items:[
      {t:"Decide the meeting is needed: there’s a decision to discuss", why:"First check a meeting is the right tool; information-only updates don’t need one."},
      {t:"Send an invitation with the agenda and what to read beforehand", why:"The agenda lets people prepare and decide whether they need to attend."},
      {t:"Start on time and confirm the purpose", why:"Restating the purpose keeps the discussion focused."},
      {t:"Work through the agenda and agree decisions", why:"The middle of the meeting is for the discussion and decisions the agenda planned."},
      {t:"Agree actions: who does what by when", why:"Decisions without owners and deadlines tend not to happen."},
      {t:"Share short notes with decisions and actions afterwards", why:"Notes inform people who couldn’t attend and are a record to check later."}
    ]},
    {id:"t1u11-l3-x6", type:"mcq", q:"Kenji is about to share his screen in a call with a client. Which is the best preparation?", options:[
      {t:"Share only the window he needs, close private tabs and turn on Do Not Disturb", ok:true, why:"Sharing one window limits what’s visible, and Do Not Disturb stops private notifications popping up in front of the client."},
      {t:"Share his whole screen so he can switch between apps quickly", why:"Possible, but everything on screen, including notifications and other windows, becomes visible. Share a window when you can."},
      {t:"Turn his camera off so the client can’t see his screen", why:"The camera and screen share are separate; switching the camera off doesn’t hide the shared screen."},
      {t:"Mute himself while presenting", why:"He needs to speak while presenting. Muting is for when you’re not talking."}
    ]},
    {id:"t1u11-l3-x7", type:"mcq", q:"Ana wants to record a parent–teacher committee call for members who can’t attend. What should she do?", options:[
      {t:"Ask everyone before the call, explain where the recording will be kept and for how long, and offer an alternative if someone objects", ok:true, why:"Consent comes before recording. People need to know what happens to it, and a real choice. This also respects laws and policies that differ between places."},
      {t:"Just start recording; the app shows a notice", why:"The notice tells people after the fact. Asking first is what makes it consent."},
      {t:"Record secretly so people behave naturally", why:"Secret recording breaks trust and can be illegal in many places."},
      {t:"Record, then delete the parts where people object", why:"People should be able to say no before they are recorded, not after."}
    ]}
   ],
   apply:{intro:"These tasks work with free accounts: Outlook on the web (outlook.com), Google Calendar, Thunderbird’s built-in calendar, or Calendar on a Mac.", tasks:[
     {t:"Show a second time zone in your calendar", app:{
       ms:["Select **Settings** (gear) → **Calendar → View**.","Under **Time zones**, select **Add time zone**, search for a city, add a label if you like and tick **Show in calendar**.","Select **Save**. The second zone appears beside the hours in Day and Week view.","While you’re there, check that **Display my calendar in time zone** is your own zone."],
       google:["On a computer, select **Settings** (gear, top right) → **Settings** → **General → Time zone**.","Check your **Primary time zone**, then tick **Show additional time zones** and choose a second zone.","Optional: under **World clock**, tick **Show world clock** and add zones you often need."],
       apple:["On a Mac: choose **Calendar → Settings**, then **Advanced**, and turn on **Turn on time zone support**.","A time-zone menu appears in the toolbar. Use it to view your calendar as it looks in another zone.","When you create an event, set its time zone in the event details, so it shows at the right time for everyone."]
     }, appNote:"Thunderbird’s calendar shows events in the one time zone set in its calendar settings; at the time of writing it has no built-in second time-zone column. Check that zone is right, and use your device’s world clock for other places (the task below)."},
     {t:"Invite someone to a test event and look at the RSVP", app:{
       ms:["Go to **Calendar** and select **New event**.","Add a title, a time and an agenda in the description. Add a guest (a second address of yours, or a friend who agrees).","Select **Send**. Open the invitation in the other inbox, choose **Accept**, **Tentative** or **Decline**, then check the event in your calendar to see the response."],
       google:["Select **Create → Event**, then **More options**.","Add a title, a time and a short agenda. Under **Guests**, add a second address of yours or a friend who agrees.","Select **Save**, then **Send** when asked about invitation emails.","Answer from the other inbox (**Yes**, **No** or **Maybe**) and look at the guest list in your event."],
       libre:["Open the calendar (the calendar icon in the left toolbar) and select **New Event** (or press [[kbd:Ctrl]] + [[kbd:I]]; on a Mac [[kbd:Cmd]] + [[kbd:I]]).","Add a title, start and end time, then select **Invite Attendees** and add a second address of yours or a friend who agrees. Select **OK**.","Make sure **Notify attendees** is ticked, then **Save and Close**. Answer from the other inbox and check the attendee’s status in the event."],
       apple:["On a Mac: double-click a time in **Calendar** to make an event, and give it a title.","Double-click the event, select **Add Invitees** and type a second address of yours or a friend who agrees.","Select **Send**. Answer from the other inbox (**Accept**, **Maybe** or **Decline**) and look at the invitee’s status in the event."]
     }},
     {t:"Add a world clock for people you work with", how:["Windows: open the **Clock** app and select **World clock**, then **Add a new city**.","Mac: add the **World Clock** widget (Control-click the desktop → **Edit Widgets** → **Clock**).","ChromeOS: search Google for “time in” plus the city, or add the zone in Google Calendar (task above).","On a phone: open the **Clock** app and use **World Clock** (iPhone) or **World clock** / the globe icon (Android; names vary by maker)."]},
     {t:"Test your call setup and find the controls", how:["Open the video app you use most (Zoom, Microsoft Teams, Google Meet or another) and start a test or a meeting with only yourself.","Check the microphone and camera in the app’s preview or device settings.","Find the mute and camera buttons and try their keyboard shortcuts from the lesson.","Turn on captions (in Google Meet press [[kbd:C]]; elsewhere look for a CC or captions button, sometimes under **More**).","Try sharing a single window rather than the whole screen."]},
     {t:"Write an agenda for your next meeting", write:"Title (topic + length): …\nPurpose (one sentence): …\nTopics with rough times and who leads: …\nDecisions needed: …\nRead before the meeting: …", how:["Pick a real meeting you’ll run or attend, or one you’d like to propose.","Fill in the boxes below.","If you’re the organiser, paste the agenda into the invitation."]}
   ], proof:"Your calendar shows a second time zone (or a world clock), you’ve sent and answered a test invitation, your call controls and captions are tested, and you have a written agenda with a purpose, timings and decisions."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.3 “Communication and Calendar Applications”: “Challenges of Digitized Collaboration” and “Calendar Applications”"},
     {book:"wss", where:"Chapter 2, Section 2.6 “Collaboration”: “Collaborative Meetings”, “Professional Meeting Etiquette” and “Ethical Considerations for Recording”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u11-l4", title:"Working on shared files", minutes:55,
   apps:{ms:"Word + OneDrive", google:"Google Docs + Drive", libre:"LibreOffice Writer", apple:"Pages + iCloud"},
   goals:[
     "Explain why one shared copy beats emailed attachments for work in progress",
     "Give each person the right role and link setting, and name shared files clearly",
     "Use comments, suggestions and version history to edit together safely",
     "Find out who owns a file, and plan for what happens when someone leaves"
   ],
   learn:[
    {h:"One shared copy, not five attachments", body:[
      {lead:"Mei emails a draft plan to three people. By Friday she has four versions, with different changes, and an afternoon of merging ahead."},
      "When a file is emailed as an attachment, each person gets their own copy. Their changes happen in separate copies that drift apart, and someone has to combine them by hand, hoping nothing is lost. Names like `plan_v3_Kenji-edits_FINAL2.docx` are the symptom.",
      "Cloud editors (Google Docs, Sheets and Slides; Word, Excel and PowerPoint for the web with OneDrive; Pages, Numbers and Keynote with iCloud) work differently. There is **one copy** of the file, stored in the cloud. Everyone opens the same copy, sees each other’s changes within seconds, and the app keeps a history of every version.",
      {fig:'<svg viewBox="0 0 340 402"><defs><marker id="m114" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="22" text-anchor="middle">Emailed attachments</text><rect class="d-panel" x="95" y="32" width="150" height="34" rx="8" stroke-width="2"/><text class="s" x="170" y="54" text-anchor="middle">Mei’s plan.docx</text><path class="d-ink" d="M140,67 L62,92" stroke-width="2" marker-end="url(#m114)"/><path class="d-ink" d="M170,67 L170,92" stroke-width="2" marker-end="url(#m114)"/><path class="d-ink" d="M200,67 L278,92" stroke-width="2" marker-end="url(#m114)"/><rect class="d-gold" x="10" y="94" width="100" height="40" rx="8" stroke-width="2"/><text class="s" x="60" y="118" text-anchor="middle">Kenji’s copy</text><rect class="d-gold" x="120" y="94" width="100" height="40" rx="8" stroke-width="2"/><text class="s" x="170" y="118" text-anchor="middle">Ana’s copy</text><rect class="d-gold" x="230" y="94" width="100" height="40" rx="8" stroke-width="2"/><text class="s" x="280" y="118" text-anchor="middle">Tomás’s copy</text><path class="d-ink" d="M62,135 L140,160" stroke-width="2" marker-end="url(#m114)"/><path class="d-ink" d="M170,135 L170,160" stroke-width="2" marker-end="url(#m114)"/><path class="d-ink" d="M278,135 L200,160" stroke-width="2" marker-end="url(#m114)"/><rect class="d-rose" x="45" y="162" width="250" height="40" rx="8" stroke-width="2"/><text class="s" x="170" y="186" text-anchor="middle">Mei merges 4 versions by hand</text><text x="170" y="240" text-anchor="middle">One shared copy</text><rect class="d-lup" x="10" y="252" width="100" height="36" rx="8" stroke-width="2"/><text class="s" x="60" y="275" text-anchor="middle">Kenji</text><rect class="d-lup" x="120" y="252" width="100" height="36" rx="8" stroke-width="2"/><text class="s" x="170" y="275" text-anchor="middle">Ana</text><rect class="d-lup" x="230" y="252" width="100" height="36" rx="8" stroke-width="2"/><text class="s" x="280" y="275" text-anchor="middle">Tomás</text><path class="d-ink" d="M60,289 L130,318" stroke-width="2" marker-end="url(#m114)" marker-start="url(#m114)"/><path class="d-ink" d="M170,289 L170,318" stroke-width="2" marker-end="url(#m114)" marker-start="url(#m114)"/><path class="d-ink" d="M280,289 L210,318" stroke-width="2" marker-end="url(#m114)" marker-start="url(#m114)"/><rect class="d-sage" x="45" y="320" width="250" height="72" rx="8" stroke-width="2"/><text x="170" y="343" text-anchor="middle">Plan (in the cloud)</text><text class="s" x="170" y="362" text-anchor="middle">one copy, everyone edits it</text><text class="s" x="170" y="380" text-anchor="middle">every version kept in history</text></svg>', alt:"Top: emailed attachments. Mei’s plan.docx is sent to Kenji, Ana and Tomás, making three separate copies; arrows bring them back to a box saying Mei merges 4 versions by hand. Bottom: one shared copy. Kenji, Ana and Tomás each have two-way arrows to a single Plan in the cloud: one copy, everyone edits it, every version kept in history.", cap:"Attachments multiply copies. A share link points everyone at the same one."},
      "Attachments still have their place: a final PDF for a client, a signed form, a file for someone who can’t use your cloud service (Lesson 1). For anything still being worked on, share the file instead."
    ]},
    {h:"Who can do what: roles and link settings", body:[
      "When you share, you decide two things: **who** can open the file, and **what** each person can do. Unit 2 explains the settings in detail ({{sharing-permissions}}). The roles have different names in each app but the same idea:",
      {table:[
        ["App","Read only","Comment or suggest","Change anything"],
        ["Google Docs, Sheets, Slides","Viewer","Commenter","Editor"],
        ["Word, Excel, PowerPoint (OneDrive)","Can view","Can review (Word; may be work or school accounts only)","Can edit"],
        ["Pages, Numbers, Keynote (iCloud)","View only","No separate role","Can make changes"]
      ]},
      "LibreOffice Writer has no sharing of its own. To work together on a Writer file, save it in a cloud-synced folder (for example OneDrive, Google Drive, iCloud Drive or Nextcloud) and share it from that service, knowing that only one person should edit the file at a time. Or send a copy and ask reviewers to record their changes (below).",
      "Choose the **lowest role that does the job**. A reviewer who should only comment doesn’t need Editor, and someone who only needs to read the final version needs Viewer. Remember that in Google Drive, editors can reshare the file by default, and that an “anyone with the link” setting works for anyone the link is forwarded to.",
      {tip:"Before sharing, check what’s in the file, including its history. Deleted text, earlier figures or comments may still be visible to editors through version history. For outsiders, consider sharing a fresh copy or a PDF."}
    ]},
    {h:"Names and places everyone understands", body:[
      "In a shared folder, file names are read by everyone, so they need to make sense to people who weren’t there when the file was made. Unit 2’s {{file-naming}} entry gives the full recipe. For shared work, three habits matter most:",
      {list:[
        "**Describe the content, not the status.** `2026-11_garden-budget.xlsx` will stay true; `budget_FINAL_final2.xlsx` won’t. Version history does the job that “v2” and “final” try to do.",
        "**Don’t add your name to make your own copy.** `plan_Kenji-edits.docx` creates exactly the version mess you’re trying to avoid. Edit the shared copy with suggestions turned on instead.",
        "**Agree where things live.** A short list of folders everyone uses (for example `01_admin`, `02_working`, `03_final`) and a one-page “read me” note saves hours of searching."
      ]},
      {ex:"Before: Document (3).docx · minutes new.docx · Copy of rota FINAL.xlsx\nAfter: 2026-11-04_committee-minutes.docx · 2026-12_volunteer-rota.xlsx", label:"Renaming a shared folder", mono:true}
    ]},
    {h:"Comments and suggestions", body:[
      "Editing together works best when people can see what others changed and discuss it. Two tools do this, and Unit 8 covers them in depth ({{track-changes-comments}}):",
      {list:[
        "**Comments** are notes attached to a piece of text: “Is this the right date?” In Google Docs and Word you can type @ and a person’s name or email in a comment to mention them, which notifies them (Google Docs can also assign the comment to that person). When the point is dealt with, **resolve** the comment rather than deleting it, so the history stays.",
        "**Suggestions** are proposed edits that appear in colour until the owner accepts or rejects them. Google Docs calls it **Suggesting** mode (anyone with comment or edit access can suggest); Word for the web calls it **Reviewing**; LibreOffice Writer and Pages call it **Track Changes**."
      ]},
      "Use suggestions whenever you change someone else’s text, especially wording that matters (a policy, a letter, a job advert). The author can see exactly what you propose, accept it in one click, or reject it without having to work out what you changed.",
      {ex:"Hana shares the draft newsletter with Dmitri as a Commenter. Dmitri switches to Suggesting, rewrites one sentence and adds a comment: “Shorter? @hana”.\nHana sees the change in colour, accepts it, replies “Thanks!” and resolves the comment. Nothing was emailed, and the document history shows who did what.", label:"Worked example: suggest, accept, resolve"}
    ]},
    {h:"Version history: your safety net", body:[
      "Because cloud editors save automatically, every few minutes of work becomes a version you can go back to. Unit 2’s {{version-history}} entry explains how long versions are kept in each service. In shared work, version history answers three questions:",
      {list:[
        "**Who changed what, and when?** Most editors highlight each person’s changes in the history view.",
        "**Can we get back what was there before?** You can view an old version and copy text from it, or restore the whole file to that version.",
        "**Which version did we send?** In Google Docs, Sheets and Slides you can name a version (for example “sent to funder 2026-11-30”), which is cleaner than saving a copy called “final”."
      ]},
      {warn:"Restoring an old version replaces the current one for everyone (the current one stays in the history). Before restoring, tell your collaborators, or copy just the text you need from the old version instead."}
    ]},
    {h:"Who owns the file?", body:[
      "Every cloud file has a [[file-owner]]: usually the person who created it, in their account. The owner can delete the file, change who has access and, in many services, the file counts against their storage. That matters most when people leave.",
      {table:[
        ["Situation","What happens"],
        ["Personal Google account","The owner can transfer ownership only to someone the file is already shared with, who must accept. A personal account can’t transfer a file to a work or school account."],
        ["Work or school Google account","Ownership can be transferred within the organisation. When someone leaves, an administrator can transfer their files before deleting the account."],
        ["Microsoft 365 work or school (OneDrive)","When a user is deleted, their manager gets access to their OneDrive by default. After the retention period (30 days unless the organisation changes it) it is deleted, and shared links stop working."],
        ["Shared drives (Google) and team sites (Microsoft Teams, SharePoint)","Files belong to the organisation or team, not one person, so they stay when someone leaves."]
      ]},
      {ex:"A neighbourhood group keeps its member list, accounts and grant forms in the treasurer’s personal Google Drive. The treasurer moves away and, months later, closes the account. The files, and every link to them, disappear.\n\nBetter: before handover, the treasurer transfers ownership of each file to the new treasurer (who accepts), or the group keeps its files in an account or shared drive that belongs to the group, with at least two people able to manage it.", label:"Worked example: when the owner leaves"},
      "So for anything a group depends on, ask early: **whose account is this in, and what happens if they leave?** Work files should live in your organisation’s shared spaces, not a personal account."
    ]},
    {h:"Editing together politely", body:[
      "Simultaneous editing can feel like several people writing on one whiteboard. A few shared habits keep it calm:",
      {list:[
        "**Look for other people’s cursors** before you rearrange a section someone is typing in.",
        "**Suggest, don’t overwrite**, when it’s someone else’s text, and don’t delete other people’s comments.",
        "**Say what you changed** for big edits: a comment or a short message (“I reorganised section 3 and moved the budget to the end”).",
        "**Keep one copy.** If you must work offline, tell the others, and be ready to resolve conflicts if two people changed the same part.",
        "**Tidy up access** when a project ends: remove people who no longer need it and switch “anyone with the link” back to restricted."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“Version history is a backup.”** It lives in the same account as the file. If the account or file is deleted, it goes too. Keep real backups (Unit 2: {{backup}}).",
        "**“Editors can only change the text.”** In many services they can also reshare the file or change its settings, unless the owner prevents it.",
        "**“If I made the file at work, it’s mine.”** Files in a work account usually belong to the organisation and can be transferred or deleted when you leave.",
        "**“Commenters can’t propose changes.”** In Google Docs, commenters can make suggestions, which the owner accepts or rejects."
      ]}
    ]}
   ],
   try:[
    {id:"t1u11-l4-x1", type:"match", q:"Match each person with the role they should get on a Google Doc of a grant application.", pairs:[
      ["Fatima, who is co-writing the application with you","Editor","She needs to change the text directly, so Editor is the lowest role that works."],
      ["A board member who should give feedback but not change wording","Commenter","Commenter lets her add comments and suggestions that you accept or reject."],
      ["A volunteer who wants to follow the draft as it develops, without commenting","Viewer","Reading the live document doesn’t need any more access than Viewer."],
      ["Someone from another charity who asked “can I see an example?”","No access: send a PDF of the final version","They don’t need ongoing access to your live working document. A PDF of the final version shares only what you choose, and you can’t accidentally give away more later."]
    ]},
    {id:"t1u11-l4-x2", type:"mcq", q:"Kenji’s team emailed a report back and forth and now has `report_v4_Ana.docx`, `report_v4_Tomas.docx` and `report_v5.docx`, all different. What would have prevented this?", options:[
      {t:"Keeping one copy in the cloud, sharing it with the team and using suggestions or comments for changes", ok:true, why:"With one shared copy there is nothing to merge: everyone edits the same file and the history records who changed what."},
      {t:"Stricter file names, such as adding the date to each attachment", why:"Better names help people tell copies apart, but there would still be several copies to merge. The cause is the separate copies."},
      {t:"Sending the attachment as a PDF", why:"A PDF stops people editing easily; it doesn’t give them one place to edit together."},
      {t:"Asking only one person to reply", why:"That avoids the merge by excluding people, not by giving them a better way to work together."}
    ]},
    {id:"t1u11-l4-x3", type:"sort", q:"Sort these names for files in a shared folder.", buckets:["Clear to everyone","Causes confusion"], items:[
      {t:"`2026-11-04_committee-minutes.docx`", b:0, why:"Date first in ISO order, then what it is. Anyone can tell what it is and it sorts by date."},
      {t:"`minutes FINAL (2).docx`", b:1, why:"“FINAL” and “(2)” are statuses that quickly become untrue, and there’s no date or group name."},
      {t:"`plan_Kenji-edits.docx`", b:1, why:"A personal copy of the shared plan: it creates the version mess shared editing avoids. Use suggestions instead."},
      {t:"`2026-12_volunteer-rota.xlsx`", b:0, why:"Says what it is and which month, without a status word."},
      {t:"`Document (3).docx`", b:1, why:"The default name tells nobody anything."},
      {t:"`2026_grant-application_city-arts-fund.docx`", b:0, why:"Year, topic and funder: clear without opening it."}
    ]},
    {id:"t1u11-l4-x4", type:"mcq", q:"Sione is leaving the choir committee. The choir’s music list and accounts spreadsheets are owned by his personal Google account. What should happen before he goes?", options:[
      {t:"Sione transfers ownership of the files to the next committee member, who accepts the request", ok:true, why:"Ownership moves to someone staying, so the files and their links survive if Sione later deletes his account. For personal accounts the new owner must accept and must already have the file shared with them."},
      {t:"Nothing: anyone with edit access already owns the files", why:"Editors can change the files but don’t own them. If the owner’s account is deleted, the files go with it."},
      {t:"Sione emails everyone copies as attachments", why:"That creates separate copies with no single, up-to-date version, and the live files still depend on his account."},
      {t:"Sione changes the link to “anyone with the link can edit”", why:"That widens access to anyone the link reaches, and he is still the owner, so it doesn’t solve the handover."}
    ]},
    {id:"t1u11-l4-x5", type:"order", q:"Someone accidentally deleted half of a shared rota. Put the safe recovery steps in order.", items:[
      {t:"Tell collaborators to pause editing for a moment", why:"Stops new changes piling up while you recover the old content."},
      {t:"Open the file’s version history", why:"Every saved version, with who changed what, is listed there."},
      {t:"Find the last version before the deletion and preview it", why:"Previewing lets you check it’s the right version before changing anything."},
      {t:"Restore that version (or copy back only the missing part)", why:"Restoring replaces the current version; copying the missing part keeps any good changes made since."},
      {t:"Check the rota and let everyone know it’s fixed", why:"Verify the result, then tell people they can continue."}
    ]},
    {id:"t1u11-l4-x6", type:"spot", q:"Amara is sharing a spreadsheet of volunteers’ names, phone numbers and addresses with two coordinators. Tap the settings that are wrong for this file.", ask:"wrong for this file", parts:[
      "Share with: ",{t:"Kenji (Editor), Lucía (Editor)", flag:false, why:"Both coordinators maintain the list, so Editor fits, and they’re named people."},
      "\nGeneral access: ",{t:"Anyone with the link", flag:true, why:"Personal phone numbers and addresses should never be open to anyone the link reaches. Use Restricted, so only named people can open it."},
      "\nRole for link: ",{t:"Editor", flag:true, why:"Anyone with the link could also change or delete the data. With Restricted access this setting disappears."},
      "\nNotify people: ",{t:"On, with a message explaining what the file is", flag:false, why:"A short message tells Kenji and Lucía what they’ve been given and why."},
      "\nFile name: ",{t:"2026-11_volunteer-contacts.xlsx", flag:false, why:"A clear, dated name."}
    ]},
    {id:"t1u11-l4-x7", type:"mcq", q:"Lucía wants a colleague to propose wording changes to her Google Doc without being able to change the text directly. What should she do?", options:[
      {t:"Share it with the colleague as Commenter; they can then make suggestions she accepts or rejects", ok:true, why:"In Google Docs, people with comment access can suggest edits, which stay proposals until the owner accepts them."},
      {t:"Share it as Viewer", why:"Viewers can read but can’t comment or suggest, so the colleague couldn’t propose anything."},
      {t:"Share it as Editor and ask them to be careful", why:"Editors can change text directly (and reshare the file by default). Commenter gives exactly the access needed."},
      {t:"Email a copy and ask for a marked-up version back", why:"That works, but recreates the separate-copies problem. Commenter access keeps everything in one place."}
    ]}
   ],
   apply:{intro:"Use a test document with nothing private in it. Word for the web is free with a Microsoft account; Google Docs is free with a Google account; Pages is free on Apple devices.", tasks:[
     {t:"Share a document with one person for comments only", app:{
       ms:["Open the document in Word for the web (from onedrive.live.com or office.com) and select **Share**.","Type the person’s email address, then open the permission menu next to it. Choose **Can review** if it’s offered (they can comment and suggest tracked changes; Microsoft documents it for work or school OneDrive, so a personal account may not show it). Otherwise choose **Can view**, or **Can edit** and ask them to switch to **Reviewing** mode before changing anything.","Add a short message and send. To check or remove access later, use **Manage access**."],
       google:["Open the document and select **Share** (top right).","Type the person’s email, set their role to **Commenter**, add a message and select **Send**.","Under **General access**, check it says **Restricted**, so only people you added can open it."],
       apple:["Open the document in Pages and click the **Share** button in the toolbar, then choose **Share a Link** from the pop-up menu.","Under **Who can access**, choose **Only invited people**. Under **Permissions**, choose **View only** or **Can make changes** (Pages has no comment-only role).","Choose how to send the invitation (Mail, Messages or **Copy Link**)."]
     }, appNote:"LibreOffice Writer has no built-in sharing. Save the file in a cloud-synced folder (OneDrive, Google Drive, iCloud Drive, Nextcloud and so on) and share it from that service, or send a copy and ask the reviewer to turn on **Record** changes (next task) before editing."},
     {t:"Turn on suggestions or tracked changes and make one change", app:{
       ms:["In Word for the web, open the mode menu at the top right of the ribbon (it usually says **Editing**) and choose **Reviewing**.","Change one sentence. Your edit appears as a tracked change.","Switch back to **Editing** and accept or reject the change from the **Review** tab."],
       google:["At the top right, select **Editing** and choose **Suggesting**.","Change one sentence and add a comment explaining why.","Switch back to **Editing**, then accept or reject the suggestion with the ✓ or ✕ next to it (or **Tools → Review suggested edits**)."],
       libre:["Choose **Edit → Track Changes → Record** (in the tabbed interface: **Review → Record**).","Change one sentence. The change is marked in colour.","Use **Edit → Track Changes → Manage** to accept or reject it."],
       apple:["In Pages on a Mac, choose **Edit → Track Changes**.","Change one sentence; it appears as a tracked change with your name.","Use the review toolbar at the top of the document to accept or reject it."]
     }},
     {t:"Open version history and mark a milestone", app:{
       ms:["In Word for the web, choose **File → Info → Version history** (or in OneDrive, right-click the file and choose **Version history**).","Open an older version to see it. You can restore it or copy text from it."],
       google:["Choose **File → Version history → See version history**.","Pick an older version to see the changes highlighted by person.","Choose **File → Version history → Name current version** and give it a name such as “draft sent for review 2026-11-10”."],
       libre:["Choose **File → Versions**, then **Save New Version** and type a comment such as “sent for review”.","These versions are stored inside the file itself (in LibreOffice’s own format), not in a cloud history."],
       apple:["In Pages on a Mac, choose **File → Revert To → Browse All Versions**.","Scroll through earlier versions on the right, then click **Done** to leave without changing anything."]
     }},
     {t:"Find out who owns your group’s important files", write:"File · where it lives · owner (whose account) · what happens if they leave · next step", how:["List three to five files your household, team or group depends on (a rota, accounts, a member list).","For each, check who owns it. In Google Drive, select the file and open its details (the ⓘ **View details** button, or right-click → **File information → Details**) and look for **Owner**; in OneDrive and iCloud the file lives in the owner’s account.","Write down what would happen if the owner left, and one step to make it safer (transfer ownership, move it to a shared space, add a second manager)."]}
   ], proof:"A test document shared for comments only (or a plan for sharing a LibreOffice file), one suggestion or tracked change made and resolved, a version you can find again, and a short list of who owns the files your group depends on."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.6 “Collaboration”: “Collaborative Work”, “File Sharing and Transferring”, “Collaborative Writing and Editing” and “Sharing a Document”", note:"The book’s sharing screenshots are from 2023. Google’s Share dialog now shows General access (Restricted or Anyone with the link) below the people list."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u11-l5", title:"Chat and team tools", minutes:50,
   goals:[
     "Choose between email, chat, a meeting and a shared document for a given message",
     "Use channels, threads and @mentions so conversations stay findable",
     "Write messages that work across time zones without needing an instant reply",
     "Set your status and notifications, and agree simple team norms"
   ],
   learn:[
    {h:"Email, chat, meeting or document?", body:[
      {lead:"Most communication problems at work aren’t about writing badly. They’re about using the wrong channel: a decision buried in chat, a quick question turned into a meeting, a policy lost in an email thread."},
      "Each kind of tool is good at something different:",
      {table:[
        ["Tool","Good for","Weak at"],
        ["Email","Formal or external messages, records, people outside your team","Fast back-and-forth; long threads get messy"],
        ["Chat","Quick questions and updates inside a team","Big decisions, anything that must be found months later"],
        ["Meeting or call","Discussion, disagreement, sensitive topics, relationships","Simple information; it takes everyone’s time at once"],
        ["Shared document","Things many people build or keep: plans, policies, rotas, notes","Urgent questions"]
      ]},
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="m115" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-gold" x="10" y="10" width="188" height="58" rx="9" stroke-width="2"/><text class="s" x="104" y="34" text-anchor="middle">Urgent, or needs live</text><text class="s" x="104" y="52" text-anchor="middle">back-and-forth?</text><path class="d-ink" d="M199,39 L240,39" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="219" y="31" text-anchor="middle">yes</text><rect class="d-rose" x="244" y="14" width="86" height="50" rx="9" stroke-width="2"/><text class="s" x="287" y="35" text-anchor="middle">Call or</text><text class="s" x="287" y="52" text-anchor="middle">meeting</text><path class="d-ink" d="M104,69 L104,92" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="118" y="85">no</text><rect class="d-gold" x="10" y="94" width="188" height="58" rx="9" stroke-width="2"/><text class="s" x="104" y="118" text-anchor="middle">Quick question or update</text><text class="s" x="104" y="136" text-anchor="middle">for your team?</text><path class="d-ink" d="M199,123 L240,123" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="219" y="115" text-anchor="middle">yes</text><rect class="d-lup" x="244" y="98" width="86" height="50" rx="9" stroke-width="2"/><text class="s" x="287" y="119" text-anchor="middle">Chat, in</text><text class="s" x="287" y="136" text-anchor="middle">a thread</text><path class="d-ink" d="M104,153 L104,176" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="118" y="169">no</text><rect class="d-gold" x="10" y="178" width="188" height="58" rx="9" stroke-width="2"/><text class="s" x="104" y="202" text-anchor="middle">Needs a record, or goes</text><text class="s" x="104" y="220" text-anchor="middle">outside your group?</text><path class="d-ink" d="M199,207 L240,207" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="219" y="199" text-anchor="middle">yes</text><rect class="d-panel" x="244" y="182" width="86" height="50" rx="9" stroke-width="2"/><text class="s" x="287" y="211" text-anchor="middle">Email</text><path class="d-ink" d="M104,237 L104,260" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="118" y="253">no</text><rect class="d-gold" x="10" y="262" width="188" height="58" rx="9" stroke-width="2"/><text class="s" x="104" y="286" text-anchor="middle">Will many people build</text><text class="s" x="104" y="304" text-anchor="middle">or keep it?</text><path class="d-ink" d="M199,291 L240,291" stroke-width="2" marker-end="url(#m115)"/><text class="s" x="219" y="283" text-anchor="middle">yes</text><rect class="d-sage" x="244" y="266" width="86" height="50" rx="9" stroke-width="2"/><text class="s" x="287" y="287" text-anchor="middle">Shared</text><text class="s" x="287" y="304" text-anchor="middle">document</text><text class="s" x="170" y="344" text-anchor="middle">A rule of thumb, not a law: teams agree their own.</text></svg>', alt:"A decision ladder. Is it urgent, or does it need live back-and-forth? Yes: call or meeting. No: is it a quick question or update for your team? Yes: chat, in a thread. No: does it need a record, or go outside your group? Yes: email. No: will many people build or keep it? Yes: shared document. A note says this is a rule of thumb, not a law; teams agree their own.", cap:"Ask the questions in order. Many messages move between tools: a chat question can end in a decision recorded in a document."},
      "Often the answer is a combination. A chat discussion reaches a decision; someone records it in the shared plan; an email tells the funder. Moving information to the right place is part of the job."
    ]},
    {h:"How chat tools are organised", body:[
      "Team chat tools, such as Microsoft Teams, Slack, Google Chat and Zoom’s team chat, share the same building blocks even though they use different names:",
      {table:[
        ["Building block","What it is","Names you’ll see"],
        ["Workspace or team","Everyone in an organisation or group","Workspace (Slack), team (Teams)"],
        ["[[chat-channel|Channel]]","A shared room for one topic, project or group, which people join","Channel (Slack, Teams), space (Google Chat)"],
        ["[[direct-message|Direct message]]","A private conversation with one person or a small group","DM (Slack), chat (Teams), direct message (Google Chat)"],
        ["[[thread|Thread]]","Replies attached to one message, kept together","Thread, reply in thread"]
      ]},
      "Channels make information findable: a new volunteer can read the history of #rota and catch up, which they can’t do with a pile of private messages. As a rule, put work conversations in the relevant channel and keep direct messages for personal or sensitive matters.",
      "Small, informal groups (a family, a sports team, a few volunteers) often use messaging apps such as Signal or WhatsApp instead. They’re simpler but have no channels to organise topics, and in some of them other group members can see your phone number (in WhatsApp groups this is usually the case at the time of writing, late 2026, though WhatsApp has been testing usernames). Signal hides your number by default from people who don’t already have it saved, and lets people contact you by username instead.",
      {tip:"Free plans have limits. OpenStax’s book (2023) says Slack’s free plan keeps the most recent 10,000 messages; Slack now shows only the last 90 days of messages and files on free workspaces. Don’t rely on a free chat tool as your only record of decisions."}
    ]},
    {h:"Threads and @mentions", body:[
      "In a busy channel, separate conversations get tangled: someone asks about Saturday’s keys, someone else replies about the budget, and nobody can tell which answer belongs to which question. **Threads** fix this. Reply *in the thread* under the message you’re answering, and the channel stays a list of topics rather than a pile of replies.",
      "An [[mention|@mention]] (type @ and a name) notifies that person even if they don’t follow the channel closely. Use it when you need **a specific person** to see or do something, and say what: “@Priya can you confirm the room by Thursday?”",
      "Most tools also have mentions that notify **everyone**: @channel or @here in Slack, @team or @channel in Teams, @all in Google Chat. These interrupt every member, often on their phones. Save them for things everyone genuinely needs to know soon: “The hall is closed tomorrow, don’t come in.”",
      {ex:"Channel #food-bank\n\nAna: Saturday shift: we’re short of two people for 10:00–12:00. Can anyone cover? Reply in thread.\n   ↳ Kenji (in thread): I can do 10–12.\n   ↳ Hana (in thread): Me too.\n   ↳ Ana (in thread): Thanks both, you’re on the rota. ✅\n\nTomás: @Mei the van insurance renewal is due 1 Dec. Can you send me the policy number?", label:"Worked example: threads and a targeted mention", mono:true}
    ]},
    {h:"Messages that work across time zones", body:[
      "Chat feels instant, but much teamwork happens in [[async-communication|asynchronous communication]]: people read and reply when they can, not at the same moment. That’s normal when people work different hours, live in different time zones, have caring responsibilities, or are simply concentrating.",
      "Write each message so the reader can act on it **without having to ask you anything**, even if they read it eight hours later:",
      {list:[
        "**Skip the lone “Hi!” or “Got a minute?”** It makes the other person wait, and reply, before they know what you want. Put the greeting and the question in the same message.",
        "**Include the context, the ask and the deadline**, with the time zone if it matters.",
        "**Link to the file** instead of describing where it is.",
        "**Say how urgent it is**, honestly, and what happens if there’s no answer."
      ]},
      {table:[
        ["Hard to answer later","Easy to answer later"],
        ["Hi Mei, are you there?","Hi Mei, can you check the price in row 12 of the order sheet (link)? I need to place the order by 15:00 UTC Thursday. If it’s right, a 👍 is enough."],
        ["Quick question about the thing","Question about the December rota: can volunteers swap shifts themselves, or must they ask you first?"]
      ]},
      "Many tools can **schedule a message** to arrive at a better time for the reader, for example during their morning rather than at midnight. If you work late, scheduling is a kind way to avoid sending a notification into someone’s evening."
    ]},
    {h:"Status, notifications and boundaries", body:[
      "Chat tools show an [[availability-status]]: a coloured dot or label such as Available, Busy, Away or Do not disturb. It helps others guess whether you’ll reply soon. Microsoft Teams, for example, offers Available, Busy, Do not disturb, Be right back, Appear away and Appear offline, and lets you set how long a status lasts. Teams also sets some statuses automatically, such as Busy during a call.",
      "[[do-not-disturb|Do not disturb]] silences notifications while you focus, present or rest. Slack calls the same idea **pausing notifications** and also lets you set a **notification schedule** so alerts arrive only during your working hours. Your phone has its own version too (Focus on iPhone, Do Not Disturb on Android), covered in Unit 5’s {{digital-wellbeing}} entry.",
      {list:[
        "**Put your working hours and time zone in your profile** if your team spans places.",
        "**Agree what “urgent” means** and how to reach someone for a real emergency (often a phone call), so everyone else can switch notifications off without worry.",
        "**Don’t treat a green dot as a promise.** Someone shown as Available may be in the middle of something. And a message sent at 22:00 doesn’t need an answer at 22:00."
      ]},
      {tip:"If someone keeps messaging you outside working hours, it’s reasonable to say so kindly: “I’ve turned on a notification schedule, so I’ll see messages after 8:00. For emergencies, please call.”"}
    ]},
    {h:"Professional norms in chat", body:[
      "Chat is informal, but in a work or school account it is still a record. OpenStax’s book reminds readers that communication on company equipment and accounts may be recorded and can be accessed by the organisation. Messages can be searched, exported, screenshotted and forwarded, sometimes long after you’ve forgotten them.",
      {list:[
        "**Write as if your manager, or the person you’re discussing, could read it.**",
        "**Keep sensitive things out of channels**: passwords, health details, performance problems, other people’s personal data. Use a direct conversation, a call, or the proper system.",
        "**Brief is fine; curt isn’t.** A quick “thanks!” or an emoji reaction (👍, ✅) shows you’ve seen a message without adding noise.",
        "**Use the right channel**, and move a long side conversation into a thread or a direct message.",
        "**Correct mistakes openly.** Edit a message to fix a typo; if you got a fact wrong, say so in a reply rather than quietly deleting it."
      ]}
    ]},
    {h:"Agree how your team communicates", body:[
      "Most chat frustration comes from unspoken expectations: one person expects replies within minutes, another checks twice a day. A short written agreement, made together and kept in a shared document, prevents a lot of it.",
      {ex:"How our volunteer team communicates\n· Chat (#volunteers): quick questions and updates. Reply within a day.\n· Email: anything for funders, partners or the public.\n· Shared drive: rotas, minutes, policies. The latest version lives there, not in chat.\n· Monthly call: decisions and planning, with an agenda.\n· Urgent on the day (closures, safety): phone the coordinator.\n· Quiet hours: no reply expected 20:00–08:00 or at weekends unless it’s urgent.", label:"A team communication agreement", mono:true},
      {h:"Common misconceptions"},
      {list:[
        "**“Chat is private.”** In work and school accounts, administrators can usually access and export messages, and anyone in a channel can screenshot them.",
        "**“A green dot means they should reply now.”** Status is a hint, not an obligation; asynchronous replies are normal.",
        "**“@everyone makes sure people see it.”** It does, once. Used often, people mute the channel and miss the next important message.",
        "**“Decisions made in chat are recorded.”** They’re easy to lose in the scroll, and free plans may hide old messages. Write decisions in a shared document."
      ]}
    ]}
   ],
   try:[
    {id:"t1u11-l5-x1", type:"sort", q:"Which tool fits each message best?", buckets:["Chat","Email","Call or meeting","Shared document"], items:[
      {t:"“Is the community hall unlocked yet?” to a teammate who’s already there", b:0, why:"A quick question inside the team that needs a quick answer: chat."},
      {t:"A formal complaint to the company that delivered the wrong furniture", b:1, why:"External, formal and you need a record: email."},
      {t:"Talking through a disagreement about how to spend a grant", b:2, why:"Disagreement and discussion go better live, where tone and questions can be handled."},
      {t:"The volunteer rota that changes every month", b:3, why:"Something many people use and update: one shared document that is always current."},
      {t:"Telling the team you’re running five minutes late", b:0, why:"A short update with no reply needed: chat."},
      {t:"Meeting notes with decisions and actions", b:3, why:"Decisions should live where everyone can find them later, not in a scrolling chat."}
    ]},
    {id:"t1u11-l5-x2", type:"mcq", q:"Priya needs a file location from Dmitri, who works in another time zone. Which message is best?", options:[
      {t:"“Hi Dmitri, where’s the final grant budget saved? I need to attach it to the application by 17:00 UTC Friday. A link is perfect.”", ok:true, why:"Greeting, question, reason, deadline with time zone and what a good answer looks like, all in one message. Dmitri can answer whenever he reads it."},
      {t:"“Hi Dmitri!”", why:"Dmitri has to reply and wait to find out what Priya wants, which can cost a day across time zones."},
      {t:"“Got a minute?”", why:"It interrupts without saying what it’s about, so Dmitri can’t judge urgency or answer directly."},
      {t:"“@channel does anyone know where the budget is???”", why:"It notifies everyone in the channel for a question Dmitri can answer, and doesn’t say which budget or by when."}
    ]},
    {id:"t1u11-l5-x3", type:"match", q:"Match each chat feature with what it’s for.", pairs:[
      ["Thread","Keeping all replies to one message together","Replying in a thread stops separate conversations tangling in the channel."],
      ["@mention of one person","Notifying a specific person who needs to see or act","It pings that person even if they don’t watch the channel."],
      ["@channel or @everyone","Alerting every member about something that affects them all, soon","It interrupts everyone, so it’s for genuinely shared, time-sensitive news."],
      ["Status set to Do not disturb","Silencing notifications while you focus or rest","Others can still send messages; you see them when you’re ready."],
      ["Channel","A shared room for one topic or group, with a readable history","New members can read back and catch up."]
    ]},
    {id:"t1u11-l5-x4", type:"spot", q:"Tomás posts this in the 60-person #volunteers channel. Tap the parts that are a problem.", ask:"a problem", parts:[
      {t:"@channel", flag:true, why:"Notifying 60 people, many on their phones, for something only one person (Ana) can do. Mention Ana instead."},
      " ",{t:"Ana, the van booking site wants a login:", flag:false, why:"Saying who and what the message is about is good."},
      " ",{t:"username foodbank-van, password Tulip-2026!", flag:true, why:"A password posted in a 60-person channel is visible to everyone and stays in the history. Share it through a password manager or a private, secure route, and change it afterwards ({{password-manager}})."},
      " ",{t:"Can you book the van for Saturday 10:00–14:00?", flag:false, why:"A clear ask with the date and times."},
      " ",{t:"Also, Kenji still owes money for the raffle tickets and hasn’t paid.", flag:true, why:"Discussing one person’s money problem in front of 60 people is unkind and unprofessional. Raise it with Kenji privately."}
    ]},
    {id:"t1u11-l5-x5", type:"mcq", q:"Mei works in Singapore (UTC+8). At the end of her day she needs an answer from Tomás in Mexico City (UTC−6), where it’s 4:00. What should she do?", options:[
      {t:"Write the full question with context and deadline, and schedule it (or just send it) so he can answer when his day starts", ok:true, why:"This is asynchronous work at its best: a complete message he can act on in his morning, without waking him."},
      {t:"Call him now, because chat is too slow", why:"It’s 4:00 for Tomás. Unless it’s a real emergency, a complete written message is kinder and works just as well."},
      {t:"Send “ping” and wait for him to reply", why:"He’ll see “ping” hours later and still have to ask what she wants, costing another day."},
      {t:"Post it with @everyone so someone answers faster", why:"It interrupts the whole team for a question meant for Tomás."}
    ]},
    {id:"t1u11-l5-x6", type:"order", q:"Put the steps for agreeing team communication norms in a sensible order.", items:[
      {t:"Notice the friction: missed messages, late replies, too many pings", why:"Start from real problems, so the agreement solves something."},
      {t:"Ask the team what works and what doesn’t for them", why:"People work different hours and in different situations; norms made together get followed."},
      {t:"Write a short agreement: which tool for what, reply times, quiet hours, the urgent route", why:"Writing it down turns unspoken expectations into shared ones."},
      {t:"Keep it in the shared drive and pin a link in the main channel", why:"New members can find it, and nobody has to remember it."},
      {t:"Review it after a month or two and adjust", why:"Norms that don’t fit real work get ignored; revisit them."}
    ]},
    {id:"t1u11-l5-x7", type:"mcq", q:"Hana’s team chat pings her phone late in the evening with non-urgent questions. What is the most effective change?", options:[
      {t:"Set a notification schedule or Do not disturb outside her working hours, and agree with the team how to reach her for real emergencies", ok:true, why:"The tool stops the pings, and the agreement means nobody worries that urgent things will be missed."},
      {t:"Reply to everything immediately so the questions stop sooner", why:"Instant replies teach people to expect them and make the evenings worse."},
      {t:"Leave the team channel", why:"She would miss important information. Notification settings solve the problem without cutting her off."},
      {t:"Ask everyone to stop using chat", why:"Chat is useful for quick questions; the issue is notifications and expectations, not the tool."}
    ]}
   ],
   apply:{intro:"Use the chat tool your team, class or group actually uses. If you don’t use one yet, try these in a free Slack workspace, Microsoft Teams (free), Google Chat (in Gmail), or the group settings of a messaging app.", tasks:[
     {t:"Set your status, and a time for it to clear", how:["**Microsoft Teams:** select your profile picture (top right), then your current status. Choose a status, or select **Duration** to set one that resets at a time you choose.","**Slack:** click your profile picture, then **Update your status**; choose an emoji, a message and when to clear it.","**Google Chat (in Gmail):** at the top right, open the menu next to your status and choose **Automatic**, **Do not disturb** or **Set as away**.","Add your time zone and working hours to your profile if the tool allows it."]},
     {t:"Stop notifications outside your hours", how:["**Slack:** click your profile picture → **Preferences**. Below **Working hours**, choose an option from the **Allow notifications** menu and set start and end times. On a phone: profile picture → **Notifications** → **Notification schedule**.","**Slack, just for now:** click your profile picture, hover over **Notifications** and choose how long to pause them (on a phone: **Pause notifications**).","**Teams and Google Chat:** use **Do not disturb**, and check the app’s notification settings for quiet hours.","**On a phone:** set up Focus (iPhone) or Do Not Disturb (Android, names vary by maker) for your evenings, allowing calls from a few people for emergencies."]},
     {t:"Rewrite a message so it works asynchronously", write:"Original message: …\nRewritten (context + ask + deadline with time zone + link + how urgent): …", how:["Find a recent message you sent or received that needed a follow-up question before anyone could act.","Rewrite it using the lesson’s checklist."]},
     {t:"Draft a communication agreement for a group you’re in", write:"Chat is for … · Email is for … · Files live in … · Meetings are for … · Reply times … · Quiet hours … · Urgent route …", how:["Pick a team, class, family group or volunteer group.","Draft the seven lines below. Keep each one short.","If it’s appropriate, share it with the group as a suggestion and ask for changes."]}
   ], proof:"Your status and quiet hours are set in at least one tool, one real message is rewritten so it can be answered without follow-up questions, and you have a draft communication agreement for a group."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.3 “Communication and Calendar Applications”: “Instant Chat/Messaging (IM) Applications”, “Microsoft Teams” and “Slack”", note:"Out of date on one point: Slack’s free plan now shows the last 90 days of messages and files rather than a 10,000-message limit."}
   ]
  }
  ],
  checkpoint:["t1u11-q02","t1u11-q05","t1u11-q08","t1u11-q12","t1u11-q15","t1u11-q20","t1u11-q22","t1u11-q25","t1u11-q30","t1u11-q33","t1u11-q39","t1u11-q43"],
  codex:[
   {id:"email-writing", title:"Writing emails that get answered", aka:["email etiquette","subject lines","professional email","undo send"], tags:["email","communication"],
    summary:"A clear subject, one ask with a deadline, a simple structure and a quick check before sending.",
    levels:{
     starter:[
      "Busy people skim. Most emails that go unanswered weren’t ignored on purpose: the reader couldn’t tell what was needed.",
      {list:["**Subject line:** say the topic and the action. “Rota for 14 Nov: can you cover?” beats “Hi”.","**One ask per email**, with a deadline: “Could you confirm by Wednesday 11 November?”","**Short structure:** greeting, why you’re writing, the context they need, the ask, your name.","**Dates nobody can misread:** “Thursday 12 November”, not 11/12."]},
      "Before sending, check the recipients, the attachment and the tone. Many email apps have **Undo Send**, which holds an email for a few seconds so you can stop it.",
      {key:"Put what you need, and by when, where the reader will see it first: the subject and the first line."}
     ],
     builder:[
      "A reliable structure: **greeting** → **purpose in one line** (ideally the ask) → **only the context needed** → **the ask again with a deadline** (for longer emails) → **close and signature**.",
      {table:[["Element","Tip"],["Subject","Topic + action + date where useful. Update it if the thread changes topic."],["First line","The ask or the purpose. Don’t open with a long apology."],["Body","Short paragraphs, lists for several items, links instead of long explanations"],["Ask","Specific, with who, what and by when; make “no” easy to say"],["Signature","Name, role or group, one or two contact routes; no home address"]]},
      "**Tone across cultures:** formality depends on workplace, sector, country, relationship and person, so don’t guess from names or nationality. Start a little formal with someone new, use the name as they write it, avoid idioms, sarcasm and jokes that don’t translate, and mirror their style once they reply.",
      "**Undo Send** settings differ: Gmail offers 5, 10, 20 or 30 seconds (Settings → See all settings → General); Outlook on the web and the new Outlook for Windows up to 10 seconds (Settings → Mail → Compose and reply); Apple Mail 10, 20 or 30 seconds (Mail → Settings → Composing, or Settings → Apps → Mail on iPhone). Thunderbird has no built-in Undo Send; **Send Later** holds a message in the Outbox."
     ],
     pro:[
      "Undo Send is a **delay**, not a recall: the message is held by your provider and only sent when the timer ends. Once delivered, it can’t be pulled back from another provider’s server. Outlook’s **recall** works only when sender and recipient are both on Microsoft 365 work or school accounts in the same organisation, and only if the message hasn’t been opened; Microsoft states personal accounts (Outlook.com, Gmail, Hotmail) can’t use it.",
      "Data-protection regulators treat misdirected email as a common cause of personal-data breaches. The UK ICO suggests organisations consider technical measures such as turning off address autocomplete, alerts that warn senders when they use the Cc field, and a send delay to catch errors. Individuals can copy the cheapest one: **add recipients last**.",
      "For readers using a second language or translation tools, plain-language practice helps everyone: one idea per sentence, active voice, concrete verbs, and numbers and dates in unambiguous formats (ISO 8601 such as 2026-11-12, or the month written out). Avoid ALL CAPS, which reads as shouting and is harder to read.",
      "Emails at work are records. They can be disclosed in disputes or data-access requests (Unit 5: {{data-protection-laws}}), forwarded without your knowledge, and archived for years. Write as if the person discussed might one day read it.",
      {tip:"For anything heated, write the draft, don’t send it, and suggest a call. Text strips out tone; a five-minute conversation often resolves what ten emails escalate."}
     ]
    },
    related:["to-cc-bcc","email-attachments-links","phishing","collaboration-norms"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Essentials of Business Communication” and “Email”"}],
    sources:[{t:"Gmail Help: Send or unsend Gmail messages", url:"https://support.google.com/mail/answer/2645922?hl=en"},{t:"Microsoft Support: Recall an Outlook email message", url:"https://support.microsoft.com/en-us/office/recall-an-outlook-email-message-35027f88-d655-4554-b4f8-6c0729a723a0"},{t:"Apple Support: Unsend emails with Undo Send in Mail on Mac", url:"https://support.apple.com/guide/mail/unsend-emails-with-undo-send-mlhlbf24d020/15.0/mac/13.0"}], checked:"2026-11"},

   {id:"to-cc-bcc", title:"To, Cc, Bcc, Reply All and Forward", aka:["carbon copy","blind carbon copy","reply all","forwarding"], tags:["email","privacy"],
    summary:"Who must act, who is informed, who is hidden, and who your reply or forward reaches.",
    levels:{
     starter:[
      "An email has three address lines:",
      {list:["**To:** people who must read it and act.","**Cc** (carbon copy): people kept informed. Everyone sees them.","**Bcc** (blind carbon copy): people who get a copy, hidden from everyone else."]},
      "When you answer, **Reply** goes only to the sender; **Reply All** goes to the sender and everyone in To and Cc; **Forward** sends the message, with the thread below it, to someone new.",
      "Use Bcc to protect privacy when emailing a group of people who don’t know each other, so their addresses aren’t shared. Before Reply All, ask whether everyone needs your answer. Before forwarding, read the whole thread you’re passing on.",
      {key:"Each line sends a message of its own: To says “act”, Cc says “know”, Bcc says “hidden”."}
     ],
     builder:[
      {table:[["Action","Reaches","Typical mistake"],["Reply","Sender only","Answering only the sender when the group needed your input"],["Reply All","Sender + all To and Cc (never Bcc)","“Thanks!” to 200 people"],["Forward","Anyone you add, with the thread","Passing on earlier comments or personal data the new reader shouldn’t see"]]},
      "**What Bcc recipients see:** their copy shows the To and Cc lines; some apps add “bcc: me”. If **all** recipients are in Bcc, the To line may show “undisclosed recipients”. If a Bcc recipient clicks **Reply All**, their reply goes to the visible recipients, revealing that they had a copy.",
      "**Showing the Bcc field:** Outlook on the web: **Bcc** at the right of the To line (new Outlook also: Options → Show fields → Show Bcc). Gmail: **Bcc** at the right of the To line. Thunderbird: the **Bcc** button above the To field. Apple Mail on Mac: **Header Fields** button → **Bcc Address Field**.",
      "**Forwarding well:** trim the thread, add one line saying why you’re forwarding and what you need, and ask before forwarding anything sent in confidence.",
      "**Introductions:** when you introduce two people, put both in To and say why they should talk. After they reply, step out of the thread (“Moving myself to Bcc”) so you aren’t copied on every message that follows. **Changing topic:** if a thread drifts to a new subject, start a new email with a new subject line, so each topic can be found later."
     ],
     pro:[
      "Bcc is a client-side convenience: the sending app delivers separate copies and leaves Bcc addresses out of the visible headers. It depends on the sender remembering it every time, which is why the UK ICO says Bcc “is not enough on its own” to protect people’s personal information when bulk emails involve sensitive data, and that forgetting it frequently leads to disclosures. For sensitive groups (patients, service users, survivors), use a bulk-email or mailing-list service that sends individual messages, or a mail merge, and test with internal addresses first.",
      "Reply All storms happen when a large distribution list allows replies to everyone: each “please remove me” triggers more. Administrators prevent them by restricting who can post to big lists. If you’re caught in one, the kindest thing is not to reply at all, not even to ask to be removed.",
      "Cc carries social meaning. Copying a manager can read as escalation; copying many people can diffuse responsibility (“someone else will answer”). Put each person who must act in To and name the action for each one in the body.",
      "Forwarding changes context and control. The original sender didn’t choose the new reader; a forwarded thread may include personal data covered by data-protection law. In regulated work (health, education, social care) follow your organisation’s rules on what may be forwarded outside the organisation.",
      {tip:"A safe group-announcement pattern: your own address in To, everyone else in Bcc, and a first line that says why they’re receiving it and how to stop."}
     ]
    },
    related:["email-writing","email-attachments-links","data-protection-laws"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Email” (To, Cc, Bcc, Reply, Reply All, Forward)"}],
    sources:[{t:"Microsoft Support: Show, hide, and view the Bcc field in Outlook for Windows", url:"https://support.microsoft.com/en-US/Outlook/mail/show-hide-and-view-the-bcc-blind-carbon-copy-field-in-outlook-for-windows"},{t:"Mozilla Support: Addressing an Email (Thunderbird)", url:"https://support.mozilla.org/kb/addressing-email"},{t:"ICO: Email and security", url:"https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/email-and-security/"}], checked:"2026-11"},

   {id:"email-attachments-links", title:"Attachments or share links?", aka:["attach a file","send a link","large files by email"], tags:["email","files","sharing"],
    summary:"Attach final, small files people need to keep; share a link for work in progress, large files and anything people edit together.",
    levels:{
     starter:[
      "There are two ways to send a file by email:",
      {list:["**Attach it.** Each person gets their own copy inside the email.","**Share a link.** The file stays in your cloud storage, and the link opens that one copy."]},
      "Attach things that are **final and small**: a signed form, a ticket, a PDF invoice. Share a link when people will **edit together**, when the file is **large** (videos, many photos), or when it keeps changing.",
      "Whichever you choose, say in the email what the file is and what you need the reader to do with it.",
      "Links need care: check who the link works for (only the people you choose, or anyone who has it) and whether they can view, comment or edit. Unit 2 explains the settings: {{sharing-permissions}}.",
      {key:"Attachment = everyone gets a copy. Link = everyone uses the same copy."}
     ],
     builder:[
      {table:[["Choose","When","Watch out for"],["Attachment","Final documents; the reader must keep their own copy; the reader can’t use your cloud service","Copies drift apart if anyone edits; size limits; old versions circulating"],["PDF attachment","You want it to look the same everywhere and not be edited easily","Not suitable for collaboration"],["Share link (specific people)","Work in progress; private material","People you forgot to add can’t open it; they may need an account"],["Share link (anyone with the link)","Public, non-sensitive material such as a flyer","Works for anyone it is forwarded to"]]},
      "Mention attachments in the text (“I’ve attached…”); many apps warn you if you mention one and forget to attach it. Name files so the reader understands them (`2026-11-05_garden-rota.pdf`). If you send a link, say what it is and what you need (“Comment on section 2 by Friday”).",
      "Email providers limit attachment sizes, and some apps offer to upload a large file and send a link instead. When a reader outside your organisation can’t open your link, a PDF export is often the simplest fallback.",
      "**A quick decision test:** Will anyone change this file after today? If yes, share a link. Does the reader need to keep their own copy, whatever happens to your account? If yes, attach it (often as a PDF). Is anything in it private? Then share with named people only, never an anyone-link."
     ],
     pro:[
      "Attachments are the most common way malware arrives by email, which is why many organisations block certain file types and why unexpected attachments, even from known senders, deserve suspicion (Unit 3: {{phishing}}). Links have the mirror risk: a fake “shared document” notification leading to a look-alike sign-in page is a common phishing pattern. If a share notification is unexpected, open the service directly rather than clicking.",
      "Links keep control with the owner: you can change permissions, revoke access, and see the current version. Attachments give up control permanently once sent. A sent attachment can be forwarded, edited and kept indefinitely, and there is no way to withdraw it. For confidential material, a named-people link (with expiry, where your plan supports it) is usually safer than an attachment, because access can be withdrawn and is tied to the recipient’s sign-in.",
      "A link also depends on the owner’s account. If the owner leaves an organisation or deletes their account, links can break (see {{shared-file-workflow}}). For records that must survive, such as signed agreements, store a final copy (often PDF, or PDF/A for archiving) in the recipient’s own system.",
      {tip:"For external partners, agree once how you’ll exchange files (a shared folder both sides can reach, or PDFs by email) rather than deciding per email."}
     ]
    },
    related:["sharing-permissions","shared-file-workflow","phishing","file-naming"],
    read:[{book:"wss", where:"Section 2.6 “Collaboration”: “File Sharing and Transferring” and “Sharing a Document”"}],
    sources:[{t:"Google Drive Help: Share files from Google Drive", url:"https://support.google.com/drive/answer/2494822?hl=en"},{t:"Microsoft Support: Share files and folders in Microsoft OneDrive", url:"https://support.microsoft.com/en-us/office/share-files-and-folders-in-microsoft-onedrive-9fcc2f7d-de0c-4cec-93b0-a82024800c07"},{t:"Apple Support: Invite others to collaborate in Pages on Mac", url:"https://support.apple.com/guide/pages/tan1b320e5a8/mac"}], checked:"2026-11"},

   {id:"inbox-management", title:"Keeping an inbox under control", aka:["inbox zero","archive vs delete","labels and folders","email search","unsubscribe"], tags:["email","productivity"],
    summary:"Archive instead of delete, keep few folders or labels, search with operators, unsubscribe, and decide once per email.",
    levels:{
     starter:[
      "A big inbox isn’t a failing: it’s a to-do list other people write. The goal is to not miss what matters.",
      {list:["**Archive** finished emails: they leave the inbox but stay searchable. **Delete** only what you’ll never need.","**Keep few folders or labels**, for example Action, Waiting and Reference.","**Search** instead of sorting: most apps can find an email by sender, words or date in seconds.","**Unsubscribe** from lists you no longer read, and **report spam** you never asked for.","**Decide once:** do it, defer it, delegate it or drop it."]},
      "If the inbox is far beyond rescue, archive everything older than a month. Nothing is lost, and you start fresh.",
      {key:"The inbox is for things that still need you. Everything else can be archived and found again."}
     ],
     builder:[
      {table:[["App","Archive goes to","Organise with"],["Gmail","All Mail (`in:archive`)","Labels (several per email)"],["Outlook","Archive folder","Folders and categories"],["Thunderbird","Archives folder (key A), by year or month","Folders and tags"],["Apple Mail","Archive mailbox","Mailboxes and flags"]]},
      "**Gmail search operators** worth knowing: `from:` `to:` `subject:` `has:attachment` `filename:pdf` `larger:10M` `older_than:1y` `after:2026/01/01` `before:` `\"exact phrase\"` `-word` `OR` `label:` `in:anywhere` (includes Spam and Trash). Dates for `after:`/`before:` use YYYY/MM/DD (or MM/DD/YYYY).",
      "**Outlook** offers a Filters button (From, To, Subject, dates, attachments) and keywords such as `HasAttachment:yes`. **Thunderbird** has a Quick Filter bar for the current folder and a global search. **Apple Mail** builds searches from suggestions such as “From:” and “Subject contains:”.",
      "**Unsubscribe vs spam vs block:** unsubscribe from lists you joined; report spam for unsolicited bulk mail; report phishing for scams; block a single sender (blocking doesn’t unsubscribe you). Gmail’s **Manage subscriptions** page lists frequent senders with an Unsubscribe button (still rolling out).",
      "**A simple routine:** at set times, go through new mail once and decide for each email: **do** it (if it takes a couple of minutes), **defer** it (flag, star or snooze it and put time in your calendar), **delegate** it (forward with a clear ask, then move it to Waiting), or **drop** it (archive, delete or unsubscribe). Three folders or labels, Action, Waiting and Reference, are enough for most people.",
      "**Fresh start:** search `in:inbox older_than:30d` in Gmail (or sort by date in other apps), select all, and archive. Nothing is lost, and the routine applies to new mail from today."
     ],
     pro:[
      "Labels and folders model email differently. A folder is a single location; a label is metadata, so one message can belong to several views. Gmail’s Inbox is itself a label, which is why archiving simply removes it. With IMAP, other email apps show Gmail labels as folders, and one email with two labels may appear in two folders (but is stored once).",
      "Search scales better than filing because the cost of filing is paid on every email, while the cost of searching is paid only for the few you need again. Combining operators (`from:landlord has:attachment after:2026/01/01`) narrows results quickly. Note Gmail’s caveat: negative operators match individual messages first, so excluded terms can still appear in returned conversations.",
      "The “decide once” routine draws on popular productivity methods (the two-minute rule comes from David Allen’s *Getting Things Done*). Treat the thresholds as adjustable; the principle is avoiding repeated re-reading.",
      "Storage matters too: in Google accounts, Gmail shares storage with Drive and Photos. `larger:10M` and `older_than:` find the emails worth deleting when space runs short.",
      "Thunderbird’s archive options can file messages into yearly or monthly subfolders, either on the mail server or in local folders; Mozilla notes that local archives help you stay under the server’s storage quota.",
      {tip:"Notifications drive compulsive checking. Allow alerts only from a few important senders and check at set times; Unit 5’s {{digital-wellbeing}} entry explains why this works."}
     ]
    },
    related:["email-rules-filters","search-skills","digital-wellbeing","phishing"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Microsoft Outlook” and “Gmail” (folders, junk mail and spam)"}],
    sources:[{t:"Gmail Help: Refine searches in Gmail", url:"https://support.google.com/mail/answer/7190?hl=en"},{t:"Gmail Help: Manage your subscriptions in Gmail", url:"https://support.google.com/mail/answer/15621070?hl=en"},{t:"Mozilla Support: Archived Messages (Thunderbird)", url:"https://support.mozilla.org/kb/archived-messages"}], checked:"2026-11"},

   {id:"email-rules-filters", title:"Filters, rules and automatic replies", aka:["email rules","Gmail filters","inbox rules","out of office","vacation responder","automatic replies"], tags:["email","automation"],
    summary:"If-then instructions that sort new mail automatically, and out-of-office replies that answer while you’re away.",
    levels:{
     starter:[
      "A **filter** (Outlook and Apple Mail call it a **rule**) is an instruction your email app follows for every new email: **if** it matches a condition, **then** do something.",
      {ex:"If the email is from news@bakery.example → add the label “Newsletters” and skip the inbox.", label:"Example filter"},
      "Start with filters that **move or label** mail, not ones that delete it, so nothing important disappears.",
      "Good first filters sort newsletters, shop offers and app notifications out of the inbox.",
      "An **out-of-office reply** (Gmail: vacation responder; Outlook: automatic replies) answers emails while you’re away. Say when you’re back and who to contact for urgent matters. Don’t say where you are or that your home is empty: the reply goes to strangers too.",
      {key:"Let the computer sort the routine mail, so your inbox shows what needs a human."}
     ],
     builder:[
      {table:[["App","Create a filter or rule","Out-of-office"],["Gmail","Search options → From (etc.) → **Create filter** → choose actions","Settings → See all settings → General → **Vacation responder**"],["Outlook (web, new Windows app)","Right-click an email → **Rules → Create rule**; manage in Settings → Mail → Rules","Settings → Account(s) → **Automatic replies**"],["Thunderbird","Right-click the sender → **Create Filter From…**, or Tools → Message Filters","Set it on your provider’s website"],["Apple Mail (Mac)","Mail → Settings → **Rules** → Add Rule","Provider’s website (iCloud Mail: icloud.com → Settings → Auto-Reply)"]]},
      "**When filters run:** Gmail filters apply to new mail unless you tick the option to apply them to matching conversations; Thunderbird filters run when mail is checked, with **Run Now** for existing mail; Apple Mail rules run only while Mail is open on that Mac.",
      "**Out-of-office details:** Gmail replies to a sender the first time they write, then again only after four days or if you edit the message, and doesn’t reply to mail in Spam or from mailing lists. Outlook can limit replies to a time period and, for work accounts, send a different message outside the organisation.",
      "**Practise safely:** create one filter for a newsletter you receive, check after a week that it caught the right emails and nothing else, then add more. Name each filter by purpose, and look through your rules list a few times a year: delete the ones you no longer need and any you don’t recognise."
     ],
     pro:[
      "Server-side versus client-side matters. Rules stored by the provider (Gmail filters, Outlook mailbox rules) run even when your devices are off. Rules that live in a desktop app (Apple Mail rules, Thunderbird filters on most setups) run only when that app is open and checking mail, so they’re unsuitable for out-of-office replies. Mozilla’s help article advises against Thunderbird template-reply filters for vacations for that reason and for safety concerns, and recommends the provider’s own auto-reply.",
      "Attackers who gain access to a mailbox commonly create **forwarding or hiding rules**: forwarding all mail to an outside address, or moving replies from a target’s bank to an obscure folder so a fraud goes unnoticed. Review rules and forwarding settings periodically; an unexplained rule is a sign of account compromise and calls for a password change, two-step verification ({{mfa}}) and a check of recovery details.",
      "Order and conflicts: Outlook processes rules in order and offers **Stop processing more rules**; Thunderbird lets you filter before or after junk classification. Design rules from specific to general.",
      "Automatic replies can leak information: travel plans, absence dates and internal contacts help social engineers. Keep external messages minimal and use the internal-only message option where available.",
      {tip:"Name your filters by purpose (“Newsletters → skip inbox”) so you, or a colleague covering for you, can understand them later."}
     ]
    },
    related:["inbox-management","social-engineering","mfa"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Microsoft Outlook” and “Gmail”"}],
    sources:[{t:"Gmail Help: Create rules to filter your emails", url:"https://support.google.com/mail/answer/6579?hl=en"},{t:"Microsoft Support: Use rules in new and classic Outlook for Windows", url:"https://support.microsoft.com/office/8400435c-f14e-4272-9004-1548bb1848f2"},{t:"Microsoft Support: Send automatic out of office replies from Outlook.com or Outlook on the web", url:"https://support.microsoft.com/topic/0c193ab0-b9e1-4058-84be-a5b014242290"}], checked:"2026-11"},

   {id:"calendar-invites", title:"Calendar invitations and meetings", aka:["meeting invites","RSVP","agenda","free/busy","scheduling"], tags:["calendar","meetings"],
    summary:"Invitations are emails carrying an event; good ones have a clear title, the link or place, and an agenda, and every guest answers.",
    levels:{
     starter:[
      "A calendar invitation is an email with an event attached. Guests answer **Yes, No or Maybe** (Google) or **Accept, Tentative or Decline** (Outlook, Thunderbird), and the organiser’s calendar counts the replies.",
      {list:["Give the event a **clear title** and put the **video link or address** in it.","Add a short **agenda**: purpose, topics, decisions needed, what to read first.","**Answer every invitation**, even with No.","Before sending, ask whether it needs to be a meeting at all: information can go by email, comments in a shared document, quick questions in chat."]},
      "For a recurring event, check whether a change applies to one event or the whole series before you answer.",
      {key:"A meeting is worth everyone’s time only when people need to discuss or decide something together."}
     ],
     builder:[
      "Invitations use the iCalendar standard (`.ics`), so they work between Google Calendar, Outlook, Thunderbird and Apple Calendar. You can invite anyone with an email address, even if they don’t use Google Calendar; they can answer from the invitation email.",
      {table:[["Task","Google Calendar","Outlook (web / new Windows)"],["Invite","Edit the event → add people under **Guests** → Save → Send","New event → add attendees → Send"],["Find a time","**Find a time** (needs shared calendars or the same organisation)","**Scheduling Assistant**"],["Propose another time","Arrow next to **Maybe** → propose a new time","**Propose new time**"]]},
      "Thunderbird’s calendar (built in since Thunderbird 38): New Event → **Invite Attendees** → tick **Notify attendees**. Apple Calendar: open the event → **Add Invitees**.",
      "**Recurring events:** responding or editing asks whether the change applies to this event or all events. **Free/busy** sharing lets colleagues see when you’re busy without seeing details; mark private events as private.",
      "End meetings with **decisions and actions** (who, what, by when) and share brief notes.",
      {ex:"Title: Food bank volunteers: December rota (30 min)\nPurpose: agree the December rota and Saturday leads\n1. Changes since November (5 min)\n2. Saturday leads (15 min)\n3. Holiday hours: decision (10 min)\nBefore: add your availability to the rota sheet", label:"An agenda inside an invitation", mono:true}
     ],
     pro:[
      "Calendars store events with a time zone (internally in UTC) and display them in each viewer’s zone, so the organiser’s zone setting matters: an event created in the wrong zone shows at the wrong time for everyone. Google notes that events far in the past or future may not reflect daylight-saving rule changes. See {{time-zones}}.",
      "Calendar spam is a real attack: some calendars add invitations automatically, so scammers send events with links (“Invoice overdue”). Most calendars let you limit automatic adding to known senders; don’t click links in unexpected invitations.",
      "Privacy: shared calendars can reveal more than intended (patient names in titles, home addresses, travel). OpenStax’s *Workplace Software and Skills* recommends adjusting calendar privacy so others see only your availability where appropriate. Use private events for personal appointments on a work calendar.",
      "Meeting cost is real: a one-hour meeting with eight people consumes eight hours of work. Practices that help: default to shorter meetings, publish an agenda with the invitation, invite only decision-makers and contributors (others get notes), and cancel recurring meetings that no longer earn their place. The agenda doubles as a test: if you can’t write one, the meeting probably isn’t ready.",
      {tip:"For groups outside one organisation, a simple poll of three or four options is often faster than everyone sharing calendars."}
     ]
    },
    related:["time-zones","video-meetings","collaboration-norms"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Calendar Applications”"}],
    sources:[{t:"Google Calendar Help: Invite people to your Calendar event", url:"https://support.google.com/calendar/answer/37161?hl=en"},{t:"Google Calendar Help: Respond to event invitations", url:"https://support.google.com/calendar/answer/37135"},{t:"Mozilla Support: Inviting Other People to Events (Thunderbird)", url:"https://support.mozilla.org/en-US/kb/inviting-other-people-events"}], checked:"2026-11"},

   {id:"time-zones", title:"Time zones, UTC and daylight saving", aka:["UTC","GMT","time difference","daylight saving time","summer time","DST"], tags:["calendar","time"],
    summary:"Convert through UTC using each place’s offset, and remember that offsets change where clocks move for daylight saving.",
    levels:{
     starter:[
      "Different places use different clock times. To compare them, the world uses **UTC** (Coordinated Universal Time) as the reference. Each place has an **offset**: how many hours ahead (+) or behind (−) UTC it is. Tokyo is UTC+9; New York is UTC−5 in winter.",
      "To convert: **local time − offset = UTC**, then **UTC + the other place’s offset = their time**.",
      {ex:"09:00 in New York (UTC−5) = 14:00 UTC = 19:30 in Mumbai (UTC+5:30).", label:"Example"},
      "**Daylight saving time** moves clocks forward in spring and back in autumn in some places, changing their offset. Many places never do it, and those that do change on different dates.",
      "Your calendar converts times for you, as long as your device’s time zone is set correctly.",
      {key:"Write times with a city or UTC, not an abbreviation, and let calendar invitations do the converting."}
     ],
     builder:[
      "Not all offsets are whole hours: India is UTC+5:30, Nepal UTC+5:45. And a conversion can change the date: 14:00 UTC on a Tuesday is 03:00 on Wednesday in Auckland in November (UTC+13).",
      {table:[["Where","Daylight saving 2026"],["United States (most states)","Second Sunday of March (8 Mar) to first Sunday of November (1 Nov), changing at 02:00 local time. Hawaii and most of Arizona don’t change."],["European Union and UK","Last Sunday of March (29 Mar) to last Sunday of October (25 Oct), at 01:00 UTC"],["Southern hemisphere places that use it (e.g. New Zealand, parts of Australia, Chile)","Roughly September/October to April"],["Many places (e.g. Nigeria, Kenya, India, China, Japan)","No daylight saving"]]},
      "Because the US and Europe change on different dates, the London–New York gap is 4 hours instead of 5 for about four weeks each year (in 2026, 8–28 March and 25–31 October).",
      "**Abbreviations are ambiguous:** CST is used for US Central Standard Time and China Standard Time, among others. Use a city name or UTC. In calendars, set your primary time zone correctly and add a secondary zone or world clock for places you work with.",
      "Google Calendar: Settings → General → Time zone → Show additional time zones. Outlook (web and new Windows app): Settings → Calendar → View → Add time zone. Apple Calendar on Mac: Calendar → Settings → Advanced → Turn on time zone support."
     ],
     pro:[
      "UTC is computed by the BIPM (International Bureau of Weights and Measures) from atomic clocks in more than 80 laboratories worldwide; national labs such as NIST maintain local realisations like UTC(NIST). GMT is often used loosely for UTC+0, but it is the name of a time zone (the UK’s winter time), not the scientific standard; UTC itself never shifts for summer.",
      "Time-zone rules are set by governments and change: countries have abolished, adopted or moved daylight saving, sometimes at short notice. Software uses the IANA time zone database (zone names such as `America/Mexico_City`, `Asia/Kolkata`), updated several times a year; device and app updates carry these changes. Events created before a rule change may display at the wrong time, which Google Calendar’s help warns about.",
      "For data and logs, store timestamps in UTC with an explicit offset (ISO 8601, e.g. `2026-11-17T14:00:00Z` or `2026-11-17T09:00:00-05:00`) and convert only for display. For recurring meetings, decide which zone “owns” the time: a 10:00 New York meeting shifts by an hour for London participants for a few weeks each spring and autumn, while an event fixed in UTC moves for everyone who observes daylight saving.",
      "Ambiguous local times exist: when clocks go back, a time such as 01:30 happens twice; when they go forward, some times don’t exist at all. Avoid scheduling in those hours on change days.",
      {tip:"When an important deadline crosses zones, state it three ways: local time with city, UTC, and the date in words, e.g. “17:00 Lagos time (16:00 UTC), Friday 20 November”."}
     ]
    },
    related:["calendar-invites","video-meetings","collaboration-norms"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Challenges of Digitized Collaboration” (scheduling across time zones)"}],
    sources:[{t:"NIST: Time and Frequency from A to Z, D (Daylight Saving Time)", url:"https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-d"},{t:"Directive 2000/84/EC on summer-time arrangements (legislation.gov.uk)", url:"https://www.legislation.gov.uk/eudr/2000/84/pdfs/eudr_20000084_adopted_en.pdf"},{t:"Google Calendar Help: Use Google Calendar in different time zones", url:"https://support.google.com/calendar/answer/37064?hl=en"}], checked:"2026-11"},

   {id:"video-meetings", title:"Video calls that work", aka:["online meetings","Zoom","Teams meetings","Google Meet","screen sharing","captions","recording"], tags:["meetings","video"],
    summary:"Know mute, camera, screen-share and captions controls; share a window, not your screen; ask before recording.",
    levels:{
     starter:[
      "Before a call, test your microphone and camera in the app’s preview, and find the **mute**, **camera**, **share** and **captions** buttons.",
      {list:["**Mute** when you’re not speaking; unmute before you talk.","**Camera:** follow the organiser’s expectations; it’s fine to say if you need it off.","**Share one window**, not your whole screen, and turn on Do Not Disturb first.","**Turn on captions**: they help people who are Deaf or hard of hearing, people listening in a second language, and anyone on a poor connection.","**Ask before recording**, and say where the recording will go."]},
      "If something doesn’t work, Unit 7 has a checklist: {{audio-video-calls}}.",
      {key:"Everyone in a call should be able to hear, follow and take part, and nobody should be recorded without agreeing."}
     ],
     builder:[
      {table:[["Action","Zoom (Win · Mac)","Teams (Windows)","Google Meet (Win/ChromeOS · Mac)"],["Mute / unmute","Alt+A · Cmd+Shift+A","Ctrl+Shift+M","Ctrl+D · Cmd+D"],["Camera on/off","Alt+V · Cmd+Shift+V","Ctrl+Shift+O","Ctrl+E · Cmd+E"],["Other","Share button","Share screen Ctrl+Shift+E; raise hand Ctrl+Shift+K","Captions C; raise hand Ctrl+Alt+H · Ctrl+Cmd+H"]]},
      "Zoom’s shortcuts work when Zoom is the active window; some can be made global (working even when Zoom isn’t in front) in its keyboard-shortcut settings. Teams sets your status to Do not disturb while you share your screen by default.",
      "**Before an important call:** check the link and time zone in the invitation; test the microphone, speakers and camera in the app’s preview; close apps that might pop up notifications; plug in your laptop; and have a phone number or chat ready in case the connection fails. If you’ll present, open the file you’ll share in its own window.",
      "**Captions:** Google Meet turns captions on with [[kbd:C]]; Teams and Zoom have captions or CC buttons, sometimes under More. Automatic captions make mistakes with names and jargon, so spell out key terms in the chat.",
      "**Etiquette that travels well:** join a minute early, mute in larger calls, use the raise-hand button or chat to take turns, say your name before speaking on audio, and keep side conversations out of the main chat. OpenStax’s *Workplace Software and Skills* adds: check your connection and software beforehand, verify meeting links, use meeting passwords and review security settings."
     ],
     pro:[
      "**Recording and transcription** capture personal data: voices, faces, names, opinions. OpenStax advises avoiding recording in most business settings without the express approval of all parties, warns that some tools can record silently with no indicator, and notes that recording laws vary by location. Some jurisdictions require all parties to consent to recording a conversation; others require only one. Workplace policies (and data-protection law where it applies) add rules on storage, access and deletion. AI note-takers and automatic transcripts are recordings in all but name.",
      "Good practice: announce recording in the invitation, state purpose, storage location, who can access it and the deletion date; offer a way to participate without being recorded (camera off, contribute in writing); start the recording only after asking; and stop it for sensitive discussion.",
      "**Accessibility:** live captions are machine-generated and make mistakes with names, accents and jargon; for formal events consider human captioning (CART) or sign-language interpretation, and share slides beforehand. Describe what you’re showing when you share a screen (“I’m on the second tab, the totals column”).",
      "**Security:** use waiting rooms or lobbies for public events, restrict screen sharing to hosts in large meetings, and don’t post meeting links publicly unless the event is public.",
      {tip:"Share a specific window rather than the whole screen: notifications, other tabs and files on your desktop stay private."}
     ]
    },
    related:["calendar-invites","audio-video-calls","time-zones"],
    read:[{book:"wss", where:"Section 2.6 “Collaboration”: “Collaborative Meetings”, “Professional Meeting Etiquette” and “Ethical Considerations for Recording”"}],
    sources:[{t:"Google Meet Help: Keyboard shortcuts for Google Meet", url:"https://support.google.com/a/users/answer/9896256?hl=en"},{t:"Microsoft Support: Keyboard shortcuts for Microsoft Teams for personal and small business use", url:"https://support.microsoft.com/en-US/accessibility/teams/keyboard-shortcuts-for-microsoft-teams-for-personal-and-small-business-use"},{t:"Microsoft Support: Change your status in Microsoft Teams", url:"https://support.microsoft.com/en-US/teams/notifications-settings/change-your-status-in-microsoft-teams"}], checked:"2026-11"},

   {id:"shared-file-workflow", title:"Working on one shared copy", aka:["co-editing","collaborative editing","file ownership","shared drives","suggesting mode"], tags:["collaboration","files","cloud"],
    summary:"Keep one copy in the cloud, give the lowest role that works, suggest rather than overwrite, and know who owns each file.",
    levels:{
     starter:[
      "Emailing a file to five people creates five copies that drift apart. Sharing a link to **one copy in the cloud** means everyone edits the same file, and the app keeps every version.",
      "Name shared files by what they contain and when, not by status: `2026-11_garden-budget.xlsx`, not `budget_FINAL2.xlsx`.",
      {list:["Give each person the **lowest role** that works: view, comment or edit. Unit 2 explains the settings: {{sharing-permissions}}.","Use **suggestions** (Google Docs: Suggesting; Word: Reviewing; LibreOffice and Pages: Track Changes) when changing someone else’s text.","Use **version history** to see who changed what and to go back ({{version-history}}).","Know **who owns** each important file: if the owner’s account is deleted, the file can go with it."]},
      {key:"One copy, clear roles, visible changes, and an owner who isn’t about to leave."}
     ],
     builder:[
      {table:[["App","Read","Comment/suggest","Edit"],["Google Docs, Sheets, Slides","Viewer","Commenter","Editor"],["Word, Excel, PowerPoint (OneDrive)","Can view","Can review (Word; work or school OneDrive)","Can edit"],["Pages, Numbers, Keynote (iCloud)","View only","(no separate role)","Can make changes"]]},
      "LibreOffice Writer has no built-in sharing; share the file from a cloud service and agree that one person edits at a time, or exchange copies with **Edit → Track Changes → Record** turned on.",
      "**Ownership rules (Google):** personal accounts can transfer ownership only to someone the file is already shared with, who must accept, and not to a work or school account; after transfer the old owner becomes an Editor. Work and school accounts transfer within the organisation, and admins can transfer a departing user’s files. **Shared drives** belong to the organisation: files people added stay when they leave.",
      "**Microsoft 365:** when a user is deleted, their manager gets access to the OneDrive by default; after the retention period (30 days by default) it is deleted, and shared content stops being available. Team files belong in Teams or SharePoint sites, not a personal OneDrive.",
      "**Suggesting in each app:** Google Docs: Editing menu (top right) → Suggesting. Word for the web: mode menu → Reviewing. LibreOffice Writer: Edit → Track Changes → Record. Pages on Mac: Edit → Track Changes. Unit 8 explains reviewing in depth: {{track-changes-comments}}."
     ],
     pro:[
      "Ownership determines lifecycle. In consumer services a file’s survival is tied to one person’s account: their storage quota, their account security, their decision to delete. Groups that depend on files (charities, clubs, families) should hold them in a group-controlled location, with at least two people able to administer it and the credentials kept in a password manager with two-step verification.",
      "Version history is not a backup: it lives in the same account and service as the file, and retention is limited. It also preserves deleted content: earlier drafts, removed names or figures remain visible to anyone with edit access. Before sharing externally, share a fresh copy or a PDF.",
      "Concurrency: cloud editors merge simultaneous edits in near real time, but files synced to a desktop folder and opened in desktop apps can produce conflict copies when two people edit offline. Office desktop apps support co-authoring on OneDrive or SharePoint files; LibreOffice does not co-author files stored this way, so agree on locking or turn-taking.",
      "Governance in organisations: apply least privilege, review external sharing regularly, prefer named-person sharing over anyone-links for personal data, and include “transfer files and links” in every leaver checklist.",
      {tip:"When a project ends, tidy up: remove people who no longer need access, set links back to restricted, and move the final version to its long-term home."}
     ]
    },
    related:["sharing-permissions","version-history","track-changes-comments","file-naming","backup"],
    read:[{book:"wss", where:"Section 2.6 “Collaboration”: “Collaborative Work” and “Sharing a Document”"}],
    sources:[{t:"Google Drive Help: Make someone else the owner of your file", url:"https://support.google.com/drive/answer/2494892?hl=en"},{t:"Google Workspace: What are shared drives?", url:"https://support.google.com/a/users/answer/7212025?hl=en"},{t:"Microsoft Learn: OneDrive retention and deletion", url:"https://learn.microsoft.com/en-us/OneDrive/retention-and-deletion"}], checked:"2026-11"},

   {id:"chat-tools", title:"Team chat: channels, threads and mentions", aka:["Slack","Microsoft Teams chat","Google Chat","instant messaging","channels","threads"], tags:["chat","collaboration"],
    summary:"Workspaces hold channels for topics; reply in threads; @mention the person who must act; set your status.",
    levels:{
     starter:[
      "Team chat tools, such as Microsoft Teams, Slack, Google Chat and Zoom’s team chat, are for quick questions and updates inside a group.",
      {list:["**Channels** (Google Chat: spaces) are shared rooms for a topic or group, with a history new people can read.","**Direct messages** are for one person or a small private group.","**Threads** keep replies to one message together.","**@mentions** notify a specific person. @channel or @everyone notifies everybody: use it rarely.","**Status** (Available, Busy, Do not disturb…) hints whether you’ll reply soon."]},
      "Small informal groups often use Signal or WhatsApp instead; they’re simpler but have no channels, and in some apps (WhatsApp groups, at the time of writing) other members can see your phone number.",
      {key:"Put work talk in the right channel, reply in threads, and mention only the people who need to act."}
     ],
     builder:[
      {table:[["Concept","Teams","Slack","Google Chat"],["Group","Team","Workspace","(organisation)"],["Topic room","Channel","Channel","Space"],["Private conversation","Chat","Direct message","Direct message"],["Notify everyone","@team, @channel","@channel, @here, @everyone","@all"]]},
      "**Status:** Teams offers Available, Busy, Do not disturb, Be right back, Appear away and Appear offline, with a **Duration** option; it sets some statuses automatically (Busy in a call, Do not disturb while presenting). Google Chat offers Automatic, Do not disturb and Set as away. Slack lets you set a status message and **pause notifications** or set a **notification schedule**.",
      "**Free plans:** Slack’s free workspaces show only the last 90 days of messages and files (OpenStax’s 2023 description of a 10,000-message limit is out of date), and items older than a year are deleted. Don’t keep decisions only in chat.",
      "**Using threads and mentions well:** reply in the thread under the message you’re answering; mention one person when you need them to see or do something, and say what (“@Priya can you confirm the room by Thursday?”); keep broadcast mentions for news everyone needs soon. Use emoji reactions (👍, ✅) to acknowledge without adding a message.",
      "**Channels or direct messages?** Put work conversations in the relevant channel so others can find and learn from them; keep direct messages for personal or sensitive matters."
     ],
     pro:[
      "Chat in organisational accounts is a business record. Administrators can typically retain, search and export messages for legal or compliance reasons, and OpenStax reminds readers that communication on company equipment may be recorded and accessed by the organisation. Treat channels as semi-public: no passwords, health information or performance issues.",
      "Information architecture matters as teams grow: name channels consistently (`#proj-garden`, `#team-volunteers`, `#announce-…`), make announcement channels post-only for most members, archive dead channels, and pin key links (the team agreement, the rota). Default to public channels over private ones so knowledge stays discoverable, except where confidentiality requires otherwise.",
      "Mentions are the main interrupt mechanism. Broadcast mentions in large channels cost many people’s attention; many organisations restrict who may use them. Encourage emoji reactions as lightweight acknowledgement instead of “thanks” replies.",
      "Consumer messengers for groups carry different privacy trade-offs: phone-number visibility, cloud backups of chats outside end-to-end encryption in some configurations, and admin powers. Signal hides your number by default from people who don’t already have it saved, and offers optional usernames for making contact. Before creating a group on a consumer messenger, ask whether members are comfortable sharing their numbers with each other.",
      {tip:"When a chat discussion reaches a decision, write it in the shared document or plan, and post a link back in the thread."}
     ]
    },
    related:["collaboration-norms","shared-file-workflow","digital-wellbeing"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Instant Chat/Messaging (IM) Applications”, “Microsoft Teams” and “Slack”"}],
    sources:[{t:"Slack Help Center: Usage limits for free workspaces", url:"https://slack.com/help/articles/115002422943"},{t:"Microsoft Support: Change your status in Microsoft Teams", url:"https://support.microsoft.com/en-US/teams/notifications-settings/change-your-status-in-microsoft-teams"},{t:"Google Chat Help: Change your availability status in Google Chat", url:"https://support.google.com/chat/answer/9093489"}], checked:"2026-11"},

   {id:"collaboration-norms", title:"Choosing channels and team norms", aka:["asynchronous communication","async work","working across time zones","notification boundaries","team agreement"], tags:["collaboration","communication","wellbeing"],
    summary:"Use the right tool for each message, write so people can answer later, and agree reply times, quiet hours and an urgent route.",
    levels:{
     starter:[
      "Pick the tool by what the message needs:",
      {list:["**Call or meeting:** urgent, needs discussion, or sensitive.","**Chat:** quick questions and updates inside a team.","**Email:** formal, external, or needs a record.","**Shared document:** something many people build or keep."]},
      "Much teamwork is **asynchronous**: people reply when they can. Write messages that can be answered without follow-up questions: context, the ask, the deadline (with time zone), a link.",
      "Protect focus and rest with **Do not disturb** or a notification schedule, and agree how to reach someone in a real emergency.",
      "Teams work better when these expectations are written down together: which tool for what, how fast people reply, quiet hours, and the route for genuine emergencies.",
      {key:"Most friction comes from unspoken expectations. Write them down together."}
     ],
     builder:[
      "**A good asynchronous message** contains: greeting and question together (not a lone “Hi”), context, the specific ask, a deadline with time zone, links to files, how urgent it is and what happens if there’s no answer.",
      "**A team communication agreement** (kept in a shared document) usually covers: which tool for what; expected reply times per tool; working hours and time zones; quiet hours; the urgent route (often a phone call); where files and decisions live; meeting rules (agenda, notes).",
      {table:[["Tool","Notification setting"],["Slack","Pause notifications; notification schedule (Preferences, Working hours, Allow notifications)"],["Microsoft Teams","Status Do not disturb, with a Duration"],["Google Chat","Status Do not disturb"],["Phone","Focus (iPhone) or Do Not Disturb (Android), with exceptions for a few callers"]]},
      "Many tools can schedule a message for the reader’s morning, a courtesy when you work late.",
      {ex:"Hard to answer: “Hi Mei, are you there?”\nEasy to answer: “Hi Mei, can you check the price in row 12 of the order sheet (link)? I need to order by 15:00 UTC Thursday. If it’s right, a 👍 is enough.”", label:"Rewriting a message for asynchronous work"},
      "When a chat conversation goes round in circles, move it: a short call for the disagreement, then a line in the shared document recording the decision."
     ],
     pro:[
      "Synchronous tools (calls, meetings, instant chat) favour people in the same time zone and with uninterrupted schedules. Asynchronous defaults widen participation: across zones, for carers and part-time staff, and for people who process information better in writing or in a second language. The cost is latency, which good message design minimises.",
      "Status indicators are weak signals. Presence based on activity (keyboard, calendar) can mislead in both directions, and treating a green dot as availability on demand undermines focus time. Some organisations and jurisdictions have adopted “right to disconnect” policies or laws limiting expectations of out-of-hours contact; check what applies to your workplace.",
      "Decision records prevent re-litigation: record decisions with date, owner and rationale in a durable place (a decisions log in the shared drive), and link to it from chat. Free chat plans with limited history make this essential.",
      "Measure what matters: if people regularly miss information, ask where they expected to find it, and move it there, rather than adding more notifications.",
      "Inclusive norms: write in plain language, avoid culture-specific idioms, rotate meeting times across zones, caption calls, and share agendas and materials in advance so people can prepare in their own time.",
      {tip:"Review the team agreement after a month or two. Norms that don’t fit real work get ignored; norms that are revisited get followed."}
     ]
    },
    related:["chat-tools","calendar-invites","time-zones","digital-wellbeing"],
    read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Communication in the Digitized Office” and “Challenges of Digitized Collaboration”"}],
    sources:[{t:"Slack Help Center: Pause your Slack notifications", url:"https://slack.com/help/articles/214908388"},{t:"Microsoft Support: Change your status in Microsoft Teams", url:"https://support.microsoft.com/en-US/teams/notifications-settings/change-your-status-in-microsoft-teams"},{t:"Google Chat Help: Change your availability status in Google Chat", url:"https://support.google.com/chat/answer/9093489"}], checked:"2026-11"}
  ],
  terms:[
   {id:"email-client", term:"Email client", def:"The app or website you use to read and write email, such as Outlook, Gmail, Thunderbird or Apple Mail. Your messages are stored by your email provider, so several clients can show the same inbox.", codex:"email-writing"},
   {id:"subject-line", term:"Subject line", def:"The short title of an email, shown in the inbox. A good one names the topic and the action needed, so the reader knows what it is before opening it.", codex:"email-writing"},
   {id:"signature", term:"Email signature", def:"A short block added automatically to the end of your emails: your name, role or group, and one or two ways to reach you.", codex:"email-writing"},
   {id:"undo-send", term:"Undo Send", def:"A setting that holds an email for a few seconds after you press Send, with a button to cancel it. Once the delay ends, the email has gone.", codex:"email-writing"},
   {id:"cc", term:"Cc (carbon copy)", def:"The address line for people who should be kept informed but don’t need to act. Every recipient can see who was copied.", codex:"to-cc-bcc"},
   {id:"bcc", term:"Bcc (blind carbon copy)", def:"The address line for people who get a copy without the other recipients seeing their address. Used to protect privacy when emailing groups.", codex:"to-cc-bcc"},
   {id:"reply-all", term:"Reply All", def:"Answering the sender and everyone in the To and Cc lines (not Bcc). Right when everyone needs your answer; noise when only the sender does.", codex:"to-cc-bcc"},
   {id:"forward", term:"Forward", def:"Sending an email you received, including the thread below it, on to someone new. Read the whole thread first.", codex:"to-cc-bcc"},
   {id:"mailing-list", term:"Mailing list", def:"A service or group address that sends one message to many subscribers, each getting their own copy, often with an unsubscribe link. Safer than a long Bcc list for large or sensitive groups.", codex:"to-cc-bcc"},
   {id:"attachment", term:"Attachment", def:"A file sent inside an email. Every recipient gets their own separate copy, unlike a share link, which points everyone to one copy.", codex:"email-attachments-links"},
   {id:"archive", term:"Archive (email)", def:"Moving an email out of the inbox while keeping it, so it stays searchable. Safer than deleting for anything you might need again.", codex:"inbox-management"},
   {id:"label-folder", term:"Label or folder", def:"Two ways to organise email. A folder holds an email in one place, like a drawer; a label is a tag, so one email can carry several (Gmail uses labels).", codex:"inbox-management"},
   {id:"spam", term:"Spam", def:"Unwanted bulk email you never asked for. Reporting it moves it to the Spam folder and helps your provider catch similar mail.", codex:"inbox-management"},
   {id:"unsubscribe", term:"Unsubscribe", def:"Asking a mailing list you joined to stop sending to you, using the app’s Unsubscribe button or the link in the email’s footer (only for senders you trust).", codex:"inbox-management"},
   {id:"email-filter", term:"Email filter (rule)", def:"An if-then instruction your email app follows automatically for new mail, such as “if it’s from this newsletter, label it and skip the inbox”. Outlook and Apple Mail call them rules.", codex:"email-rules-filters"},
   {id:"out-of-office", term:"Out-of-office reply", def:"An automatic reply sent while you’re away, saying when you’re back and who to contact. Gmail calls it a vacation responder; Outlook calls it automatic replies.", codex:"email-rules-filters"},
   {id:"calendar-invite", term:"Calendar invitation", def:"An email carrying an event in a standard format (iCalendar, .ics), with buttons to accept or decline. It works between different calendar apps.", codex:"calendar-invites"},
   {id:"rsvp", term:"RSVP", def:"Your answer to an invitation: Yes, No or Maybe (Google), or Accept, Tentative or Decline (Outlook). From the French “répondez s’il vous plaît”, please reply.", codex:"calendar-invites"},
   {id:"free-busy", term:"Free/busy", def:"Calendar information that shows when someone is busy without showing what they’re doing, used to find a meeting time.", codex:"calendar-invites"},
   {id:"agenda", term:"Agenda", def:"A short plan for a meeting: its purpose, the topics with rough times, decisions needed and anything to read first. Best put in the invitation.", codex:"calendar-invites"},
   {id:"time-zone", term:"Time zone", def:"A region that uses the same clock time. Places in different zones see different local times at the same moment.", codex:"time-zones"},
   {id:"utc", term:"UTC (Coordinated Universal Time)", def:"The world’s reference time, calculated from atomic clocks in many countries. It never changes for summer, so it’s a safe way to state times across zones.", codex:"time-zones"},
   {id:"utc-offset", term:"UTC offset", def:"How many hours (and sometimes minutes) a local time is ahead of (+) or behind (−) UTC, such as UTC+9 for Tokyo or UTC+5:30 for India.", codex:"time-zones"},
   {id:"daylight-saving", term:"Daylight saving time", def:"Moving clocks forward an hour in spring and back in autumn, which changes a place’s UTC offset. Many places don’t use it, and those that do change on different dates.", codex:"time-zones"},
   {id:"video-call", term:"Video call", def:"A live meeting over the internet with sound and, usually, video, using apps such as Zoom, Microsoft Teams or Google Meet.", codex:"video-meetings"},
   {id:"mute", term:"Mute", def:"Turning off your microphone in a call so others can’t hear you. Unmute before you speak.", codex:"video-meetings"},
   {id:"screen-share", term:"Screen sharing", def:"Showing your screen, or one window, to others in a call. Sharing a single window keeps notifications and other files private.", codex:"video-meetings"},
   {id:"recording-consent", term:"Recording consent", def:"Agreement from the people in a call before it is recorded or transcribed. Laws and workplace policies on recording differ between places.", codex:"video-meetings"},
   {id:"file-owner", term:"File owner", def:"The account a cloud file belongs to, usually whoever created it. The owner controls access and can delete it; if their account is deleted, the file may go too.", codex:"shared-file-workflow"},
   {id:"shared-drive", term:"Shared drive", def:"A storage space that belongs to an organisation or team rather than one person (Google’s shared drives; in Microsoft 365, team and SharePoint sites). Files stay when people leave.", codex:"shared-file-workflow"},
   {id:"chat-channel", term:"Channel", def:"A shared chat room for one topic, project or group, with a history that members can read back. Google Chat calls them spaces.", codex:"chat-tools"},
   {id:"direct-message", term:"Direct message", def:"A private chat with one person or a small group, outside the shared channels. Called a DM in Slack and a chat in Teams.", codex:"chat-tools"},
   {id:"thread", term:"Thread", def:"A set of replies attached to one message, kept together so separate conversations in a channel don’t get tangled.", codex:"chat-tools"},
   {id:"mention", term:"@mention", def:"Typing @ and a name to notify that person in a chat, comment or document. Mentions for everyone (such as @channel) interrupt every member.", codex:"chat-tools"},
   {id:"availability-status", term:"Availability status", def:"A label or coloured dot in chat tools, such as Available, Busy, Away or Do not disturb, that hints whether someone is likely to reply soon.", codex:"chat-tools"},
   {id:"do-not-disturb", term:"Do not disturb", def:"A setting that silences notifications while you focus, present or rest. Messages still arrive; you see them when you’re ready.", codex:"collaboration-norms"},
   {id:"async-communication", term:"Asynchronous communication", def:"Communication where people read and reply when they can, not at the same moment, like email, chat threads and document comments. Normal across time zones.", codex:"collaboration-norms"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u11-q01", lesson:"t1u11-l1", level:1, q:"What is the main job of an email’s subject line?", options:[
     {t:"To tell the reader the topic and, ideally, what you need, before they open it", ok:true, why:"The subject is what people see in a crowded inbox; it decides whether the email is opened and helps both of you find it later."},
     {t:"To greet the reader politely", why:"The greeting belongs in the body. A subject like “Hello” hides what the email is about."},
     {t:"To show how urgent you feel, with capitals and exclamation marks", why:"Capitals read as shouting and still don’t say what the email is about."},
     {t:"Nothing important: most people ignore it", why:"Most people decide what to open from the sender and subject, so it matters a lot."}
   ]},
   {id:"t1u11-q02", lesson:"t1u11-l1", level:1, q:"Who can see the addresses in the Bcc line?", options:[
     {t:"Nobody except the sender (each Bcc recipient sees only that they got a copy)", ok:true, why:"Bcc addresses are hidden from all other recipients, including other Bcc recipients."},
     {t:"Everyone who receives the email", why:"That describes To and Cc. Bcc exists precisely to hide addresses."},
     {t:"Only the people in the To line", why:"To recipients can’t see Bcc addresses either."},
     {t:"Only people who click Reply All", why:"Reply All never goes to Bcc recipients, and doesn’t reveal their addresses to anyone."}
   ]},
   {id:"t1u11-q03", lesson:"t1u11-l1", level:1, q:"What does Undo Send actually do?", options:[
     {t:"Holds the email for a few seconds after you press Send, so you can cancel it", ok:true, why:"It’s a short delay. Once the time is up, the email has gone and can’t be called back."},
     {t:"Deletes an email from the recipient’s inbox at any time", why:"No standard email feature can remove a delivered email from someone else’s inbox."},
     {t:"Recalls an email that has been opened", why:"Even Outlook’s recall (work accounts in one organisation only) fails once the email has been opened."},
     {t:"Saves the email as a draft automatically", why:"Drafts are saved separately; Undo Send is about the moments after pressing Send."}
   ]},
   {id:"t1u11-q04", lesson:"t1u11-l1", level:2, q:"Which date is clearest in an email to people in several countries?", options:[
     {t:"Thursday 12 November 2026", ok:true, why:"The weekday and month name can’t be misread, whatever date format the reader is used to."},
     {t:"11/12/26", why:"Many countries read this as 11 December; others as November 12."},
     {t:"12/11", why:"Also ambiguous: 12 November or December 11, and no year."},
     {t:"Next Thursday", why:"“Next” is ambiguous (this week or the following?), and the email may be read days later."}
   ]},
   {id:"t1u11-q05", lesson:"t1u11-l1", level:3, q:"Fatima emails 35 parents about a school trip and puts every address in the To line. What is the main risk?", options:[
     {t:"Every parent can see every other parent’s email address, and replies can go to all 35", ok:true, why:"Families’ addresses have been shared without consent, and Reply All chains can follow. Bcc, or the school’s messaging system, avoids both."},
     {t:"The email will be too large to send", why:"35 addresses don’t make an email meaningfully bigger. The problem is privacy."},
     {t:"Parents won’t be able to reply to Fatima", why:"They can reply; the problem is that they can also reply to everyone and see everyone."},
     {t:"There is no risk if the parents are friendly", why:"Sharing personal email addresses without consent is a privacy problem regardless of how friendly people are."}
   ]},
   {id:"t1u11-q06", lesson:"t1u11-l1", level:3, q:"Kenji was in Bcc on an email from his manager to a client. He clicks Reply All to say “Noted”. What happens?", options:[
     {t:"His reply goes to the manager and the client, revealing that he was copied", ok:true, why:"Reply All sends to the visible To and Cc recipients. The client now learns Kenji had a hidden copy. Reply (to the manager only) would have kept it private."},
     {t:"Only his manager gets it, because he was in Bcc", why:"Being in Bcc doesn’t limit Reply All. It goes to everyone visible on the email."},
     {t:"The reply is blocked automatically", why:"Email apps don’t block this; some warn, many don’t."},
     {t:"The client sees his reply but not his name", why:"His reply is sent from his address, so his name shows."}
   ]},
   {id:"t1u11-q07", lesson:"t1u11-l1", level:2, q:"Lucía needs her team to review a draft that will change several times this week. How should she send it?", options:[
     {t:"Share a link to one copy in cloud storage, with comment or edit access for the team", ok:true, why:"Everyone works on the same up-to-date copy, so there are no conflicting versions to merge."},
     {t:"Attach it to an email and ask everyone to reply with their edited copy", why:"That creates several copies that drift apart and must be merged by hand."},
     {t:"Attach a PDF", why:"A PDF is good for final versions but awkward to edit and comment on together."},
     {t:"Paste the whole draft into the email body", why:"Each reply becomes another separate version, with the same merging problem."}
   ]},
   {id:"t1u11-q08", lesson:"t1u11-l1", level:3, q:"Tomás is writing for the first time to a contact at a partner organisation abroad. He isn’t sure how formal to be. What should he do?", options:[
     {t:"Start politely and a little formally, use the name as they sign it, write plainly, and match their style once they reply", ok:true, why:"This respects the reader without relying on stereotypes, and adjusts to the real person’s style."},
     {t:"Use the style he’s read is typical for that country", why:"National generalisations are unreliable; workplaces and people vary widely. Mirroring the actual reader is safer."},
     {t:"Be very informal so they feel relaxed", why:"Very informal first contacts, jokes and emoji can read as unprofessional, and may not translate."},
     {t:"Avoid greetings entirely to save time", why:"A short greeting is expected almost everywhere and helps the tone."}
   ]},
   {id:"t1u11-q09", lesson:"t1u11-l1", level:2, q:"Before forwarding a long email thread to a new volunteer, what should Ana do first?", options:[
     {t:"Read the whole thread, remove anything the volunteer shouldn’t see, and add a line saying why she’s forwarding it", ok:true, why:"Forwarding sends everything below; earlier messages may contain private details. A one-line note says what she needs."},
     {t:"Nothing: forwarding only sends the latest message", why:"Forwarding includes the thread below the latest message, often many earlier emails."},
     {t:"Change the subject to “FW”", why:"Apps add “Fw:” automatically; it doesn’t make the content safe or clear."},
     {t:"Reply All and add the volunteer", why:"That sends her reply to everyone and still includes the whole thread, without checking it."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u11-q10", lesson:"t1u11-l2", level:1, q:"What happens to an email when you archive it?", options:[
     {t:"It leaves the inbox but is kept, and you can still find it by searching", ok:true, why:"Archiving is the safe way to clear the inbox without losing anything."},
     {t:"It is permanently deleted", why:"That’s deleting (and emptying the Trash), not archiving."},
     {t:"It is sent back to the sender", why:"Archiving only changes where the email sits in your own mailbox."},
     {t:"It moves to the Spam folder", why:"That’s reporting spam, which is for unwanted bulk mail."}
   ]},
   {id:"t1u11-q11", lesson:"t1u11-l2", level:1, q:"What is the main difference between a Gmail label and a folder?", options:[
     {t:"One email can have several labels, but sits in only one folder", ok:true, why:"Labels work like tags, so an email can appear under “School” and “Receipts” at once."},
     {t:"Labels delete emails after 30 days", why:"Labels don’t delete anything; they’re just tags."},
     {t:"Folders are private but labels are visible to the sender", why:"Gmail labels are private: the people you email don’t see them."},
     {t:"There is no difference", why:"The key difference is that labels can be combined; folders can’t."}
   ]},
   {id:"t1u11-q12", lesson:"t1u11-l2", level:2, q:"Which Gmail search finds emails from a landlord that have attachments?", options:[
     {t:"`from:landlord has:attachment`", ok:true, why:"`from:` matches the sender and `has:attachment` keeps only messages with files."},
     {t:"`to:landlord attachment`", why:"`to:` finds emails you sent to the landlord, and “attachment” just searches for the word."},
     {t:"`landlord -attachment`", why:"The minus sign excludes emails containing the word “attachment”."},
     {t:"`subject:landlord larger:10M`", why:"This finds emails with “landlord” in the subject that are over 10 MB, which isn’t the same thing."}
   ]},
   {id:"t1u11-q13", lesson:"t1u11-l2", level:2, q:"A clothing shop you bought from once keeps emailing offers. You did tick a box to receive them. What’s the best action?", options:[
     {t:"Unsubscribe, using the app’s Unsubscribe button or the shop’s link", ok:true, why:"You signed up, so unsubscribing is the honest fix, and reputable senders stop."},
     {t:"Report every email as phishing", why:"It isn’t a scam, just marketing you agreed to. Phishing reports are for fraud."},
     {t:"Reply asking them to stop", why:"Replies often go to an unmonitored address. Unsubscribing is the mechanism built for this."},
     {t:"Delete them one by one forever", why:"That works but costs time every week. Unsubscribing removes the cause."}
   ]},
   {id:"t1u11-q14", lesson:"t1u11-l2", level:1, q:"What is an email filter (or rule)?", options:[
     {t:"An instruction that automatically does something to new emails that match a condition", ok:true, why:"For example: if it’s from a newsletter, label it and skip the inbox."},
     {t:"A spam blocker you must buy separately", why:"Filters are built into Gmail, Outlook, Thunderbird and Apple Mail, and do much more than block spam."},
     {t:"A way to make emails smaller", why:"Filters sort and act on mail; they don’t compress it."},
     {t:"A list of people who can email you", why:"That’s closer to an allow list. A filter is an if-then action on incoming mail."}
   ]},
   {id:"t1u11-q15", lesson:"t1u11-l2", level:3, q:"Amara is going on holiday. Which out-of-office message is best?", options:[
     {t:"“I’m away until Monday 30 November. For urgent orders, please contact Mei at orders@example.com.”", ok:true, why:"Return date and an urgent contact, nothing more. It doesn’t reveal where she is or that her home is empty."},
     {t:"“I’m in Lisbon for two weeks, so the house is empty, but call my mobile 07700 900789 any time.”", why:"It tells strangers her home is empty and publishes a personal number to anyone who emails."},
     {t:"“Away.”", why:"It doesn’t say when she’s back or who can help in the meantime."},
     {t:"No reply at all; people will guess", why:"Senders may wait or worry. A short reply sets expectations."}
   ]},
   {id:"t1u11-q16", lesson:"t1u11-l2", level:3, q:"Dmitri uses Thunderbird and wants an automatic reply while he’s away for two weeks with his laptop switched off. What should he do?", options:[
     {t:"Set the automatic reply on his email provider’s website", ok:true, why:"The provider’s server sends it even when his laptop is off. Mozilla’s own help recommends this."},
     {t:"Create a Thunderbird filter that replies with a template", why:"That only works while Thunderbird is running, and Mozilla advises against it."},
     {t:"Leave Thunderbird open on the switched-off laptop", why:"A switched-off laptop can’t run Thunderbird or send anything."},
     {t:"Forward all his email to a friend", why:"That shares his private mail with someone else and doesn’t send replies."}
   ]},
   {id:"t1u11-q17", lesson:"t1u11-l2", level:3, q:"Hana finds a filter she didn’t create that moves every email from her bank to a folder called “zz”. What does it most likely mean?", options:[
     {t:"Someone else has had access to her account, so she should remove it, change her password and turn on two-step verification", ok:true, why:"Hidden rules that divert bank emails are a known sign of account takeover, often to hide fraud."},
     {t:"The bank set it up to help her", why:"Banks can’t create rules inside your email account."},
     {t:"It’s a normal Gmail or Outlook default", why:"No standard default hides bank emails in an oddly named folder."},
     {t:"It doesn’t matter as long as she can find the folder", why:"The rule may be hiding fraud alerts, and whoever made it may still have access."}
   ]},
   {id:"t1u11-q18", lesson:"t1u11-l2", level:2, q:"Oluwaseun has 12,000 emails in his inbox. What’s a safe way to start fresh?", options:[
     {t:"Search for inbox emails older than 30 days, select them all and archive them", ok:true, why:"They leave the inbox but remain searchable, so nothing is lost, and he can manage new mail from today."},
     {t:"Select all and delete them", why:"Deleting can lose receipts and important records permanently."},
     {t:"Mark them all as spam", why:"That trains the spam filter wrongly and buries genuine mail in Spam."},
     {t:"Create a new email address and abandon the old one", why:"Drastic: he’d lose contacts and logins tied to the old address. Archiving solves the problem."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u11-q19", lesson:"t1u11-l3", level:1, q:"What is UTC?", options:[
     {t:"The world’s reference time, which never changes for summer", ok:true, why:"Local times are described as offsets from UTC, which makes it a safe way to state a time across zones."},
     {t:"The UK’s local time all year round", why:"The UK uses UTC+0 in winter and UTC+1 in summer; UTC itself never changes."},
     {t:"The time zone of the United States", why:"The US has several time zones, all defined as offsets from UTC."},
     {t:"A setting that converts calendar invitations", why:"Calendars use UTC internally, but UTC is the time standard, not a setting."}
   ]},
   {id:"t1u11-q20", lesson:"t1u11-l3", level:2, q:"A webinar starts at 14:00 UTC. Priya is in Mumbai (UTC+5:30). What time is it for her?", options:[
     {t:"19:30", ok:true, why:"UTC + offset = local time: 14:00 + 5:30 = 19:30."},
     {t:"08:30", why:"That subtracts the offset. Mumbai is ahead of UTC, so you add."},
     {t:"19:00", why:"India’s offset is five and a half hours, not five."},
     {t:"14:00", why:"That’s UTC, not Mumbai time."}
   ]},
   {id:"t1u11-q21", lesson:"t1u11-l3", level:1, q:"Which statement about daylight saving time is correct?", options:[
     {t:"Many places don’t use it, and places that do change their clocks on different dates", ok:true, why:"For example, India and Japan don’t change; the US and EU both do but on different Sundays."},
     {t:"Every country moves its clocks on the same day", why:"Dates differ (US: second Sunday in March; EU: last Sunday in March), and many places never change."},
     {t:"It changes UTC by one hour", why:"UTC never changes; local offsets do."},
     {t:"Southern hemisphere countries change in March like the north", why:"Where they use it, they move clocks forward around September or October, the start of their summer."}
   ]},
   {id:"t1u11-q22", lesson:"t1u11-l3", level:3, q:"A weekly call is set for 10:00 New York time. Normally that’s 15:00 for Ana in London. On Wednesday 11 March 2026, what time is it for her, and why?", options:[
     {t:"14:00, because US clocks went forward on 8 March but UK clocks don’t change until 29 March", ok:true, why:"For those weeks New York is UTC−4 and London still UTC+0, so the gap is 4 hours."},
     {t:"15:00, because the time difference never changes", why:"The two countries change clocks on different Sundays, so the gap changes for a few weeks."},
     {t:"16:00, because daylight saving adds an hour to everyone", why:"Only places that observe it change, and here the US change narrows the gap."},
     {t:"10:00, because calendars show the organiser’s time", why:"Calendars show each person’s local time, so Ana sees London time."}
   ]},
   {id:"t1u11-q23", lesson:"t1u11-l3", level:2, q:"Why is “3 pm CST” a risky way to write a meeting time?", options:[
     {t:"CST stands for more than one time zone, such as US Central and China Standard Time", ok:true, why:"Abbreviations aren’t unique. A city name, UTC, or a calendar invitation avoids the confusion."},
     {t:"It should be written in 24-hour time", why:"Either format is fine; the zone is the problem."},
     {t:"Nobody uses CST any more", why:"It is used, by more than one region, which is exactly the problem."},
     {t:"Times in emails are never allowed", why:"They’re fine with a clear time zone; a calendar invite is even better."}
   ]},
   {id:"t1u11-q24", lesson:"t1u11-l3", level:1, q:"What should a meeting agenda include?", options:[
     {t:"The purpose, topics with rough times, decisions needed and anything to read first", ok:true, why:"That lets people decide whether to come, prepare, and keep the meeting on track."},
     {t:"Only the start time", why:"The invitation already has the time; the agenda says what the meeting is for."},
     {t:"A full transcript of what people will say", why:"An agenda is a short plan, not a script."},
     {t:"Everyone’s personal phone numbers", why:"That’s unnecessary personal data and not part of an agenda."}
   ]},
   {id:"t1u11-q25", lesson:"t1u11-l3", level:3, q:"Sione wants to tell 25 volunteers that the hall’s opening hours have changed. Nothing needs discussing. What’s the best approach?", options:[
     {t:"Send one clear email or channel post", ok:true, why:"It’s information only; a meeting would take 25 people’s time for something they can read in a minute."},
     {t:"Hold a 30-minute video meeting", why:"That costs about 12 hours of combined time for news that needs no discussion."},
     {t:"Phone each volunteer", why:"Twenty-five calls for a simple update is slow; a written message is quicker and leaves a record."},
     {t:"Send a calendar invitation with no description", why:"An empty invite doesn’t explain the change, and it isn’t an event."}
   ]},
   {id:"t1u11-q26", lesson:"t1u11-l3", level:2, q:"In a video call, what is the safest way to show a spreadsheet to a client?", options:[
     {t:"Share only the spreadsheet window, with notifications silenced", ok:true, why:"The client sees just what’s needed; private notifications and other windows stay hidden."},
     {t:"Share the whole screen", why:"Everything on screen becomes visible, including pop-up notifications and other files."},
     {t:"Turn off the camera before sharing", why:"The camera is separate from screen sharing; it doesn’t hide anything on the screen."},
     {t:"Email the spreadsheet during the call", why:"That gives the client a copy of the file, which may be more than they should have."}
   ]},
   {id:"t1u11-q27", lesson:"t1u11-l3", level:3, q:"Kenji’s team uses an AI note-taker that records and transcribes calls. A new client joins today’s call. What should Kenji do?", options:[
     {t:"Tell the client at the start, explain what is recorded and where it goes, and turn it off if they object", ok:true, why:"A transcript is a recording. Consent should come before it starts, and the client needs a real choice."},
     {t:"Nothing: the tool shows a small icon", why:"A notice isn’t the same as asking. Many people don’t notice icons."},
     {t:"Leave it on but delete the transcript later if the client complains", why:"Consent comes before recording, not after."},
     {t:"Rename the note-taker so it looks like a person", why:"That deceives participants and breaks trust."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u11-q28", lesson:"t1u11-l4", level:1, q:"What is the main advantage of sharing one cloud copy instead of emailing attachments?", options:[
     {t:"Everyone works on the same up-to-date file, so there are no separate versions to merge", ok:true, why:"One copy plus version history replaces several drifting copies."},
     {t:"Cloud files can never be deleted", why:"Cloud files can be deleted, especially if the owner’s account is deleted."},
     {t:"Attachments can’t be opened on phones", why:"They can; the issue is multiple copies, not devices."},
     {t:"It stops anyone else from reading the file", why:"Sharing gives others access; privacy depends on the settings you choose."}
   ]},
   {id:"t1u11-q29", lesson:"t1u11-l4", level:2, q:"A reviewer should comment on and suggest changes to a Google Doc, but not edit directly. Which role fits?", options:[
     {t:"Commenter", ok:true, why:"Commenters can add comments and suggestions, which stay proposals until accepted."},
     {t:"Viewer", why:"Viewers can only read; they can’t comment or suggest."},
     {t:"Editor", why:"Editors can change the text directly, which is more than needed."},
     {t:"Owner", why:"Ownership gives full control, including deleting the file."}
   ]},
   {id:"t1u11-q30", lesson:"t1u11-l4", level:3, q:"A community group’s accounts spreadsheet is owned by the treasurer’s personal Google account. The treasurer is stepping down. What is the best step?", options:[
     {t:"The treasurer transfers ownership to the next treasurer, who accepts the request", ok:true, why:"Then the file no longer depends on the old treasurer’s account. With personal accounts the new owner must accept, and the file must already be shared with them."},
     {t:"Nothing: editors automatically become owners when the owner leaves", why:"Ownership doesn’t move by itself. If the owner’s account is deleted, the file can disappear."},
     {t:"Make a copy and email it to everyone", why:"That creates separate copies and loses the history; the original still depends on the old account."},
     {t:"Set the link to “anyone with the link can edit”", why:"That widens access dangerously and doesn’t change who owns the file."}
   ]},
   {id:"t1u11-q31", lesson:"t1u11-l4", level:1, q:"In Google Docs, what is Suggesting mode for?", options:[
     {t:"Proposing edits that show in colour until the owner accepts or rejects them", ok:true, why:"The author sees exactly what changed and decides."},
     {t:"Letting Google suggest words as you type", why:"That’s a different feature; Suggesting mode is about tracking your proposed edits."},
     {t:"Suggesting new people to share the file with", why:"Sharing is managed in the Share dialog, not Suggesting mode."},
     {t:"Locking the document so nobody else can edit", why:"Suggesting mode doesn’t lock anything; others can keep working."}
   ]},
   {id:"t1u11-q32", lesson:"t1u11-l4", level:2, q:"Which is the clearest name for a file in a shared folder?", options:[
     {t:"`2026-11-04_committee-minutes.docx`", ok:true, why:"An ISO date that sorts correctly, then what the file is."},
     {t:"`minutes FINAL final.docx`", why:"Status words like FINAL quickly become untrue, and there’s no date."},
     {t:"`Document (2).docx`", why:"The default name tells nobody what’s inside."},
     {t:"`minutes_Kenji-version.docx`", why:"A personal version creates the multiple-copies problem shared editing avoids."}
   ]},
   {id:"t1u11-q33", lesson:"t1u11-l4", level:3, q:"Someone accidentally overwrote a shared rota an hour ago, and others have added good changes since. What should Mei do?", options:[
     {t:"Open version history, find the version from before the mistake, and copy back only the lost part", ok:true, why:"Copying the lost section keeps the good changes made since; restoring the whole old version would undo them."},
     {t:"Restore the version from yesterday without telling anyone", why:"That throws away everyone’s good changes since then, and surprises collaborators."},
     {t:"Retype the rota from memory", why:"Slow and error-prone when the old version is still in the history."},
     {t:"Delete the file and start again", why:"That loses everything, including the history that could fix it."}
   ]},
   {id:"t1u11-q34", lesson:"t1u11-l4", level:1, q:"Why isn’t version history a backup?", options:[
     {t:"It lives in the same account and service as the file, for a limited time", ok:true, why:"If the file or account is deleted, its history usually goes too. Backups are separate copies."},
     {t:"It only keeps the first version", why:"It keeps many versions, but they’re still tied to the same file and account."},
     {t:"It is stored on your own computer", why:"In cloud editors it’s stored with the file in the cloud."},
     {t:"Nobody can open it", why:"You can open and restore versions; the issue is where they live and for how long."}
   ]},
   {id:"t1u11-q35", lesson:"t1u11-l4", level:2, q:"Amara wants classmates to review her Pages document on iCloud. What does Pages offer?", options:[
     {t:"Access for only invited people or anyone with the link, with View only or Can make changes permission", ok:true, why:"Those are Pages’ collaboration settings; there isn’t a separate comment-only role."},
     {t:"Viewer, Commenter and Editor roles, exactly like Google Docs", why:"Those are Google’s role names. Pages has View only and Can make changes."},
     {t:"No way to collaborate at all", why:"Pages can share a link to collaborate through iCloud."},
     {t:"Collaboration only by emailing attachments", why:"Pages can share one copy through iCloud with a link."}
   ]},
   {id:"t1u11-q36", lesson:"t1u11-l4", level:3, q:"Tomás’s team edits a LibreOffice file stored in a shared cloud folder. Two people opened it at the same time and saved. What has likely happened, and what should they do?", options:[
     {t:"There may be a conflict copy or lost changes; they should agree that one person edits at a time, or move to an editor that supports co-editing", ok:true, why:"LibreOffice doesn’t co-edit cloud files in real time, so simultaneous saves can clash. Turn-taking or a co-editing tool fixes it."},
     {t:"Both sets of changes were merged automatically", why:"That happens in cloud editors such as Google Docs; desktop LibreOffice doesn’t merge simultaneous edits this way."},
     {t:"The file is now corrupted and must be deleted", why:"Corruption is unlikely. Depending on the sync service, one person’s save replaced the other’s or was kept as a separate conflict copy. Deleting the file would lose both."},
     {t:"Nothing could go wrong, because the folder is shared", why:"Sharing a folder doesn’t make desktop apps co-edit safely."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u11-q37", lesson:"t1u11-l5", level:1, q:"What is a thread in a chat tool?", options:[
     {t:"A set of replies attached to one message, kept together", ok:true, why:"Threads stop separate conversations in a channel from tangling."},
     {t:"A private chat with one person", why:"That’s a direct message."},
     {t:"A list of everyone in the workspace", why:"That’s the member list, not a thread."},
     {t:"An alert that notifies everyone", why:"That’s a broadcast mention such as @channel."}
   ]},
   {id:"t1u11-q38", lesson:"t1u11-l5", level:1, q:"When should you use @channel or @everyone?", options:[
     {t:"Rarely: for time-sensitive information that every member genuinely needs", ok:true, why:"It interrupts everyone, often on their phones. Overuse teaches people to mute the channel."},
     {t:"Whenever you want a quick answer", why:"Mention the person who can answer instead."},
     {t:"For every message, so nobody misses anything", why:"People will mute the channel and miss the important ones."},
     {t:"Never: it doesn’t do anything", why:"It notifies every member, which is why it should be used sparingly."}
   ]},
   {id:"t1u11-q39", lesson:"t1u11-l5", level:3, q:"Mei (Singapore) needs Dmitri (eight hours behind) to approve a price before tomorrow’s order. Which message works best asynchronously?", options:[
     {t:"“Hi Dmitri, can you approve the new flour price (row 4, link)? I need to order by 10:00 Singapore time tomorrow (02:00 UTC). A 👍 is enough.”", ok:true, why:"It has the ask, the link, the deadline in two forms and what a quick answer looks like, so he can act the moment he reads it."},
     {t:"“Hi Dmitri, are you around?”", why:"He’ll see it hours later and still have to ask what she needs, losing a day."},
     {t:"“@channel urgent!!”", why:"It alarms everyone and doesn’t say what’s needed."},
     {t:"Call him at 3:00 his time", why:"Not an emergency; a complete message he can answer in his morning is kinder and works."}
   ]},
   {id:"t1u11-q40", lesson:"t1u11-l5", level:2, q:"Which belongs in a shared document rather than in chat?", options:[
     {t:"The decisions from this month’s planning meeting", ok:true, why:"Decisions need to be found later; chat scrolls away and free plans may hide old messages."},
     {t:"“Running 5 minutes late”", why:"A quick update like this suits chat."},
     {t:"“Is the hall open yet?”", why:"A quick question for someone on site suits chat."},
     {t:"A 👍 reaction to say you’ve seen a message", why:"Reactions are a chat feature, perfect for acknowledgement."}
   ]},
   {id:"t1u11-q41", lesson:"t1u11-l5", level:2, q:"What does setting your status to Do not disturb do?", options:[
     {t:"Silences notifications; messages still arrive and you see them later", ok:true, why:"It protects focus or rest without blocking people from writing."},
     {t:"Deletes messages sent while it’s on", why:"Nothing is deleted; you just aren’t alerted."},
     {t:"Blocks everyone from messaging you", why:"People can still send messages."},
     {t:"Logs you out of the app", why:"You stay signed in; only notifications change."}
   ]},
   {id:"t1u11-q42", lesson:"t1u11-l5", level:3, q:"In a 50-person volunteer channel, Ana is about to post the shared login for the group’s van-booking account. What should she do instead?", options:[
     {t:"Share it privately with the one person who needs it, ideally through a password manager", ok:true, why:"A password in a channel is visible to all 50 and stays in the history. Share it narrowly and securely."},
     {t:"Post it, then delete the message after a minute", why:"People may already have seen, copied or been notified of it; deletion isn’t reliable."},
     {t:"Post it with @channel so everyone knows where to find it", why:"That spreads the password even further."},
     {t:"Put it in the channel’s name", why:"That makes it visible to everyone permanently."}
   ]},
   {id:"t1u11-q43", lesson:"t1u11-l5", level:3, q:"Lucía’s team members keep getting non-urgent chat pings late at night and feel they must reply. What’s the best fix?", options:[
     {t:"Agree team quiet hours and an urgent route (such as a phone call), and have people set notification schedules", ok:true, why:"Settings stop the pings; the shared agreement removes the pressure to reply and keeps emergencies covered."},
     {t:"Tell everyone to reply faster so conversations finish sooner", why:"That increases pressure and late-night work."},
     {t:"Ban chat and use only email", why:"Chat is useful; the problem is expectations and notifications, not the tool."},
     {t:"Ask members to leave the channel at night and rejoin each morning", why:"Clumsy and easy to forget; notification schedules do the same job automatically."}
   ]},
   {id:"t1u11-q44", lesson:"t1u11-l5", level:2, q:"Why should work chat be written as if others might read it later?", options:[
     {t:"In work and school accounts, messages are records that can be searched, exported or screenshotted", ok:true, why:"Organisations can usually access and export messages, and anyone in a channel can screenshot them."},
     {t:"Chat messages are printed and posted on noticeboards", why:"Not usually; the point is that they’re stored and shareable."},
     {t:"Chat messages disappear after a minute", why:"Most work chat is stored, often for a long time."},
     {t:"Only managers can read chat", why:"Everyone in a channel can read it, and administrators may have access to more."}
   ]},
   {id:"t1u11-q45", lesson:"t1u11-l5", level:1, q:"Which tool is usually best for a formal message to someone outside your organisation?", options:[
     {t:"Email", ok:true, why:"Email suits formal and external communication and leaves a clear record."},
     {t:"Your team’s internal chat channel", why:"Outsiders usually aren’t in your chat workspace, and chat is informal."},
     {t:"A comment in a private document", why:"They may not have access, and a comment isn’t a message."},
     {t:"Your availability status", why:"Status signals availability; it doesn’t carry a message."}
   ]}
  ]
});
