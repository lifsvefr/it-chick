/* Track 1 · Unit 10 · Presentations people remember */
ICA.addUnit({
  id:"t1u10", track:"t1", n:10, title:"Presentations people remember", icon:"🎤",
  apps:{ms:"PowerPoint", google:"Google Slides", libre:"LibreOffice Impress", apple:"Keynote"},
  blurb:"Plan a talk around one clear message, design slides that help instead of distract, use pictures and charts honestly, present calmly in a room or online, and share decks everyone can use.",
  goals:[
    "Plan a presentation from its audience, purpose and one main message, and storyboard it on paper before opening an app",
    "Use themes, layouts, the slide master and placeholders to build consistent slides with readable text and enough contrast",
    "Choose pictures you are allowed to use, make charts that show one point, and add alt text and captions",
    "Rehearse with speaker notes, presenter view and a timer, handle nerves and questions, and present online without surprises",
    "Check a deck for accessibility, then share it the right way: as a link, a file, a PDF or a handout, at the right size and shape"
  ],
  read:[
    {book:"wss", where:"Chapter 6, “Preparing Presentations”: Section 6.1 “Presentation and Design Essentials” and Section 6.3 “Formatting Microsoft PowerPoint Slides: Layout and Design Principles”", note:"Planning, audience and purpose, storyboards, and the design principles of alignment, repetition, contrast and white space."},
    {book:"wss", where:"Chapter 7, “Advanced Presentation Skills”: Section 7.1 “Effective Presentation Skills” and Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”", note:"Openings, closings, presenting skills, rehearsing, speaker notes, accessibility checks and virtual or hybrid audiences. Some menu names have changed since 2023; the lessons give current ones."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u10-l1", title:"Plan before you open the app", minutes:50,
   goals:[
     "Explain why slides support a speaker rather than replace one",
     "Describe an audience and the purpose of a talk in a few plain sentences",
     "Write one main message and build an opening, three to five key points and a close around it",
     "Storyboard a talk on paper and estimate how many slides fit the time you have"
   ],
   learn:[
    {h:"Slides support the speaker", body:[
      {lead:"Most weak presentations go wrong before the first slide exists: the speaker opened the app, picked a theme and started typing, without deciding what the talk was for."},
      "A [[presentation]] is a person speaking to an audience for a set time, usually with a set of [[slide|slides]] behind them. The slides are a **visual aid**, like the map a tour guide holds up: they show what is easier to see than to hear (a photo, a chart, a short list), while the guide does the explaining. If the slides could replace the speaker, the audience might as well read them at home.",
      "The OpenStax textbook for this unit makes the same point: a digital presentation should support the presenter, not do the presenting. That has a practical consequence. You plan the **talk** first, and the slides last.",
      "Sometimes nobody will present at all: a deck is emailed round to be read alone. That is really a document, and it works differently.",
      {table:[
        ["","Slides for a talk","A deck people read alone"],
        ["Who explains?","You do, out loud","The page has to"],
        ["Words on screen","Few: headlines, labels, key numbers","Full sentences, like a report"],
        ["Best format","Slides plus speaker notes","Often a document or a PDF handout instead"]
      ]},
      {tip:"If you are asked for “slides” that nobody will present, ask whether a short document would do the job better. It usually does."}
    ]},
    {h:"Who is listening, and what should change?", body:[
      "Start with the audience, not the topic. Write short answers to these questions:",
      {list:[
        "**Who are they?** Their roles, how many, how they will attend (in the room, online, or both).",
        "**What do they already know?** Beginners need terms explained; experts get bored by basics.",
        "**What do they care about?** Their worries, their goals, what they will ask.",
        "**What should they do, think or feel afterwards?** Approve a budget, follow a new procedure, sign up, understand a result."
      ]},
      "That last answer is your **purpose**. The textbook defines it from the audience’s side: the purpose is the action you want the audience to take. It sorts presentations into four broad kinds, and the kind shapes the tone and the slides:",
      {table:[
        ["Kind","Purpose","Example"],
        ["Informational","Share facts so people understand","A clinic team’s update on new opening hours"],
        ["Instructional","Teach people to do something","Training volunteers to use a booking system"],
        ["Persuasive","Convince people to act or decide","Asking a residents’ association to fund a playground repair"],
        ["Inspirational","Motivate or move people","A coach’s end-of-season talk to a youth team"]
      ]},
      {ex:"Priya chairs a community garden. She has 10 minutes at the residents’ meeting.\n\nAudience: about 40 neighbours, mixed ages, in a hall. Most have walked past the garden; few have worked in it.\nThey care about: their free time, fresh food, a tidy street.\nPurpose (persuasive): at least six people sign up to volunteer on Saturdays.\n\nNotice what is missing: the garden’s whole history, the full budget and the planting calendar. Interesting to Priya, but they don’t serve the purpose.", label:"Worked example: an audience and purpose card"}
    ]},
    {h:"One main message", body:[
      "Now compress the talk into a single sentence: the one thing you want people to remember if they forget everything else. This is your [[key-message|main message]]. It is not a topic (“volunteering”) but a claim about the topic (“Six more volunteers would keep the garden open on Saturdays”).",
      {table:[
        ["A topic (too vague)","A main message (clear)"],
        ["Our new booking system","From 1 March, book rooms online; paper forms stop"],
        ["Bakery sales","Opening on Sundays would pay for itself within a year"],
        ["Shift handovers","A one-page handover sheet means nothing gets missed between shifts"],
        ["My research project","Bus stops shaded by street trees were noticeably cooler in our summer measurements"]
      ]},
      "A test: could someone who heard your talk repeat the message to a friend in one breath? If you can’t write it in one sentence, the talk probably has two messages. Choose one, or plan two talks.",
      {warn:"A main message is a claim, so it must be true. The rows above are invented examples of the *shape* of a message. In a real talk, every finding or number in your message needs evidence you can show or name."}
    ]},
    {h:"A shape for the talk: open, three to five points, close", body:[
      "With the message settled, build a simple structure around it:",
      {list:[
        "**Opening (the hook).** Earn attention in the first minute. The textbook suggests a short story, a question, or a compelling statistic, then a sentence that says what the talk will cover.",
        "**Key points.** Usually three to five ideas that support the message, in a sensible order. Each gets a few slides at most.",
        "**Close.** Repeat the message in different words, summarise the points, and end with a [[call-to-action|call to action]]: exactly what you want people to do next. Don’t end on a slide that just says “Questions?” with nothing else on it."
      ]},
      "Pick an order that suits the purpose:",
      {table:[
        ["Structure","Good for"],
        ["Problem → cause → solution → next step","Persuasive talks and proposals"],
        ["Step 1 → step 2 → step 3","Instructions and training"],
        ["Past → present → future","Updates and progress reports"],
        ["Option A vs option B → recommendation","Helping a group decide"],
        ["Story → lesson → what it means for you","Inspirational talks"]
      ]},
      {tip:"“Three to five points” is a widely used rule of thumb (the textbook uses it for closings), not a law. Fewer, clearer points beat more, rushed ones."}
    ]},
    {h:"Storyboard on paper first", body:[
      "A [[storyboard]] is a sketch of the talk, one box per slide, made before you build anything. Film makers use them to plan scenes; the textbook describes a storyboard as dividing a story into “impactful moments”. For slides, each box holds three things: a **headline** (ideally a short sentence that makes the slide’s point), a **rough sketch** of the visual, and **what you will say**.",
      "Paper or sticky notes work better than the app at this stage. You can rearrange them in seconds, throw one away without regret, and you aren’t tempted to spend an hour on fonts before the story works. When the order feels right, the boxes become your slides and the “what you’ll say” lines become your speaker notes (Lesson 4).",
      {fig:'<svg viewBox="0 0 340 430"><text x="170" y="20" text-anchor="middle">One sticky note per slide</text><rect class="d-gold" x="8" y="34" width="156" height="92" rx="6" stroke-width="2"/><text x="86" y="56" text-anchor="middle">Saturdays at risk</text><rect class="d-panel" x="22" y="68" width="128" height="46" rx="4"/><text class="s" x="86" y="95" text-anchor="middle">photo: empty beds</text><text class="s" x="86" y="144" text-anchor="middle">1 · Say: last Saturday</text><rect class="d-gold" x="176" y="34" width="156" height="92" rx="6" stroke-width="2"/><text x="254" y="56" text-anchor="middle">We need 6 people</text><rect class="d-panel" x="190" y="68" width="128" height="46" rx="4"/><text class="s" x="254" y="95" text-anchor="middle">big number: 6</text><text class="s" x="254" y="144" text-anchor="middle">2 · Say: who helps now</text><rect class="d-gold" x="8" y="170" width="156" height="92" rx="6" stroke-width="2"/><text x="86" y="192" text-anchor="middle">2 hours a month</text><rect class="d-panel" x="22" y="204" width="128" height="46" rx="4"/><text class="s" x="86" y="231" text-anchor="middle">calendar sketch</text><text class="s" x="86" y="280" text-anchor="middle">3 · Say: the rota</text><rect class="d-gold" x="176" y="170" width="156" height="92" rx="6" stroke-width="2"/><text x="254" y="192" text-anchor="middle">No experience needed</text><rect class="d-panel" x="190" y="204" width="128" height="46" rx="4"/><text class="s" x="254" y="231" text-anchor="middle">photo: tools</text><text class="s" x="254" y="280" text-anchor="middle">4 · Say: we train you</text><rect class="d-gold" x="8" y="306" width="156" height="92" rx="6" stroke-width="2"/><text x="86" y="328" text-anchor="middle">What you get back</text><rect class="d-panel" x="22" y="340" width="128" height="46" rx="4"/><text class="s" x="86" y="367" text-anchor="middle">basket of food</text><text class="s" x="86" y="416" text-anchor="middle">5 · Say: food, friends</text><rect class="d-gold" x="176" y="306" width="156" height="92" rx="6" stroke-width="2"/><text x="254" y="328" text-anchor="middle">Sign up today</text><rect class="d-panel" x="190" y="340" width="128" height="46" rx="4"/><text class="s" x="254" y="367" text-anchor="middle">link + QR code</text><text class="s" x="254" y="416" text-anchor="middle">6 · Say: pass the sheet</text></svg>', alt:"Six sticky notes in two columns, one per planned slide. Each has a headline, a rough sketch and what to say. 1: Saturdays at risk, photo of empty beds, say: last Saturday. 2: We need 6 people, a big number 6, say: who helps now. 3: 2 hours a month, a calendar sketch, say: the rota. 4: No experience needed, photo of tools, say: we train you. 5: What you get back, a basket of food, say: food, friends. 6: Sign up today, a link and QR code, say: pass the sheet.", cap:"Priya’s storyboard: a headline, a sketch and a speaking note per slide. The order can change before any slide is built."},
      "Read the headlines alone, top to bottom: “Saturdays at risk. We need 6 people. 2 hours a month. No experience needed. What you get back. Sign up today.” They tell the whole story. That is a good sign: if the headlines make sense on their own, the structure works."
    ]},
    {h:"Fit the talk to the time", body:[
      "Time is part of the plan, not something to discover on the day. Three habits help:",
      {list:[
        "**Subtract first.** Take the time slot, then remove the time for questions, introductions and any changeover. What’s left is your talking time.",
        "**Estimate slides from talking time.** The textbook suggests about **one minute per slide** as a starting estimate, and fifteen to twenty seconds for a slide that is only a picture. Treat this as a rough rule of thumb: some slides take three minutes, some five seconds.",
        "**Rehearse aloud and time it** (Lesson 4). Timing a silent read-through usually underestimates."
      ]},
      {ex:"Kenji has a 20-minute slot at a student society. The organiser wants 5 minutes for questions, and the chair needs 1 minute to introduce him.\n\nTalking time: 20 − 5 − 1 = 14 minutes.\nAt roughly one minute per slide, that is about 14 slides, at most. His first storyboard had 26 boxes, so he merges or cuts about half before building anything.", label:"Worked example: from time slot to slide count"},
      {key:"Plan the message, the structure and the time on paper. Open the app only when the story already works."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“More slides means more effort, so the audience will be impressed.”** Audiences remember clear messages, not slide counts. Too many slides usually means rushing.",
        "**“The slides should contain everything, so people can read them later.”** Then you are reading a document aloud. Put the detail in a handout or document and keep the slides for the talk.",
        "**“I’ll work out what I’m saying while I build the slides.”** That produces slides about the topic, not slides that make a point. Plan first.",
        "**“Planning is for long talks.”** A two-minute update benefits most: there is no time to wander."
      ]}
    ]}
   ],
   try:[
    {id:"t1u10-l1-x1", type:"sort", q:"Sort each line: is it a clear main message, or only a topic?", buckets:["Main message","Only a topic"], items:[
      {t:"“Moving the bake sale to Saturday mornings doubled our takings last year, so let’s do it again.”", b:0, why:"It makes a claim (Saturday mornings work better) and implies an action. Someone could repeat it in one breath."},
      {t:"“The bake sale”", b:1, why:"This names what the talk is about but says nothing about it. What should the audience think or do?"},
      {t:"“New patient handover sheet”", b:1, why:"A topic. A message would say what changes, for example: “From Monday, use the new sheet for every handover.”"},
      {t:"“From Monday, every shift handover uses the new one-page sheet.”", b:0, why:"Clear, specific and actionable: the audience knows exactly what changes and when."},
      {t:"“Some thoughts about our website”", b:1, why:"Vague on purpose. The audience can’t tell what you want from them."},
      {t:"“Our website loses most visitors at the payment page, and a shorter form should fix that.”", b:0, why:"It states a finding and a recommendation the audience can discuss or approve."}
    ]},
    {id:"t1u10-l1-x2", type:"mcq", q:"Fatima will train six new volunteers to use the food bank’s stock app. Which purpose and structure fit best?", options:[
      {t:"Instructional, structured as step 1 → step 2 → step 3, with practice", ok:true, why:"The audience needs to be able to *do* something afterwards. A step-by-step structure matches how they will use the app."},
      {t:"Inspirational, built around a moving story", why:"A story might open the session well, but the purpose is a skill. Without the steps, they won’t be able to use the app."},
      {t:"Persuasive, structured as problem → solution", why:"The volunteers don’t need convincing to use the app; they need to learn how."},
      {t:"Informational, a history of how the app was chosen", why:"Interesting background, but it doesn’t help anyone use the app on Monday."}
    ]},
    {id:"t1u10-l1-x3", type:"order", q:"Put the steps of planning a presentation in a sensible order.", items:[
      {t:"Describe the audience and the purpose (what they should do or think afterwards)", why:"Everything else depends on who is listening and what should change."},
      {t:"Write the main message in one sentence", why:"The message comes from the purpose; it is the claim the whole talk supports."},
      {t:"Choose three to five key points and an order for them", why:"The points support the message, so they come after it."},
      {t:"Storyboard on paper: one box per slide with a headline, a sketch and what you’ll say", why:"Now the structure becomes concrete, while it is still cheap to change."},
      {t:"Build the slides in the app", why:"Only once the story works on paper."},
      {t:"Rehearse aloud and time it, then cut if needed", why:"Rehearsal shows whether the plan fits the time slot."}
    ]},
    {id:"t1u10-l1-x4", type:"number", q:"Tomás has a 15-minute slot and must leave 4 minutes for questions. Using the textbook’s rough guide of about one minute per slide, how many slides should he plan, at most?", answer:11, tol:0, unit:"slides", why:"Talking time is 15 − 4 = 11 minutes. At about one minute per slide, that is about 11 slides at most.", wrongs:[
      {v:15, why:"That uses the whole slot and leaves no time for the questions he was asked to allow."},
      {v:19, why:"The question time was added instead of subtracted. Questions come out of the slot."},
      {v:44, why:"That uses fifteen seconds per slide, which the textbook gives only for picture-only slides. For ordinary slides, use about a minute each."}
    ]},
    {id:"t1u10-l1-x5", type:"match", q:"Match each situation with the structure that suits it best.", pairs:[
      ["Ana asks her team to choose between two delivery companies.","Option A vs option B → recommendation","The audience must decide, so lay out the options fairly, then recommend one."],
      ["Dmitri reports how a six-month project is going.","Past → present → future","An update naturally runs from what was done, to where things stand, to what comes next."],
      ["Mei teaches parents to set up a school app.","Step 1 → step 2 → step 3","Instructions follow the order people will actually do them in."],
      ["Sione asks the council to fix a dangerous crossing.","Problem → cause → solution → next step","Persuasion works best when the problem is clear before the fix is offered."]
    ]},
    {id:"t1u10-l1-x6", type:"spot", q:"Here is Oluwaseun’s plan for a 10-minute talk to the small business owners’ group. Tap the parts that need fixing.", ask:"needs fixing", parts:[
      "Audience: ",
      {t:"“everyone”", flag:true, why:"Too vague to plan with. Who exactly: shop owners, their staff, how many, what do they already know?"},
      ". Purpose: ",
      {t:"get at least five businesses to join the shared delivery scheme", flag:false, why:"Clear and measurable: he will know afterwards whether the talk worked."},
      ". Main message: ",
      {t:"sharing one van cuts each shop’s delivery costs", flag:false, why:"A clear claim in one sentence that supports the purpose (he’ll need his figures to back it up)."},
      ". Slides: ",
      {t:"30 slides, including the full 12-month spreadsheet", flag:true, why:"Far too many for 10 minutes (about one a minute is a common starting point), and a full spreadsheet can’t be read on a slide. Show the one number that matters."},
      ". Opening: ",
      {t:"a quick question: “Who paid for a half-empty van this week?”", flag:false, why:"A good hook: short, relevant, and it gets the audience thinking about the problem."},
      ". Ending: ",
      {t:"a slide that just says “Questions?”", flag:true, why:"The close should restate the message and give a call to action, such as “Sign up by Friday”. Questions can follow."}
    ]},
    {id:"t1u10-l1-x7", type:"mcq", q:"Lucía’s manager wants “a deck” summarising a policy change that staff will read on their own, with no meeting. What should she suggest?", options:[
      {t:"A short document or PDF written in full sentences, because nobody will be there to explain the slides", ok:true, why:"Slides for a talk rely on the speaker. A reading deck needs complete explanations, which a document does better."},
      {t:"Normal presentation slides with one word per slide, so it looks modern", why:"Without a speaker, single-word slides leave readers guessing what they mean."},
      {t:"Slides with the full text in tiny type", why:"That is a document squeezed onto slides, and tiny type is hard to read, especially on phones."},
      {t:"A video of the slides with music and no narration", why:"Music adds nothing to understanding a policy, and there is still no explanation."}
    ]}
   ],
   apply:{intro:"Plan a real or practice talk of 5 to 10 minutes: something you might present at work, in class, to a club or to your family. You need paper, a pen and, for the last task, any presentation app.", tasks:[
     {t:"Write your audience and purpose card", write:"Audience · What they know · What they care about · Purpose (what they should do or think) · Main message in one sentence · Time slot and talking time", how:["Choose a talk you could actually give (a club update, a family trip plan, a work procedure, a school project).","Answer the questions in the box: who, what they know, what they care about, and what should change afterwards.","Write your main message as one sentence that makes a claim. Read it aloud: could a listener repeat it?","Subtract questions and introductions from your time slot to get your talking time."]},
     {t:"Storyboard the talk on paper", how:["Take sticky notes or a sheet folded into boxes. One box per slide.","In each box write a short headline that makes the slide’s point, sketch the visual, and add one line saying what you will say.","Lay the boxes out in order: an opening, three to five key points, and a close with a call to action.","Read only the headlines from start to finish. If they don’t tell the story, rearrange or rewrite.","Count the boxes and compare them with your talking time (about one minute per slide is a rough starting point). Cut or merge if needed."]},
     {t:"Turn the storyboard into an outline in your app", app:{
       ms:["Open PowerPoint (desktop, or PowerPoint for the web at office.com with a free Microsoft account) and create a blank presentation.","For each box, add a slide (**Home → New Slide**) and type the headline into the title placeholder.","In the desktop app you can also use **View → Outline View**, where you type headlines one per line and press [[kbd:Enter]] for each new slide.","Type your “what you’ll say” line into the notes area under each slide (if it’s hidden, choose **View → Notes**)."],
       google:["Go to slides.google.com and start a blank presentation.","For each box, add a slide (**Slide → New slide**, or [[kbd:Ctrl]] + [[kbd:M]]; [[kbd:Cmd]] + [[kbd:M]] on a Mac) and type the headline into the title box.","Type your “what you’ll say” line into the speaker notes area under the slide.","Choose **View → Grid view** to see all slides at once and check the order; drag to rearrange."],
       libre:["Open LibreOffice Impress and choose a blank presentation.","Choose **View → Outline**. Type one headline per line; each line becomes a new slide.","Return with **View → Normal** and add your “what you’ll say” line in **View → Notes**.","Use **View → Slide Sorter** to see and rearrange all slides."],
       apple:["Open Keynote (free on Mac, iPad and iPhone, and at iCloud.com) and choose a theme.","Choose **View → Outline** to type headlines one per line; each becomes a slide.","Choose **View → Show Presenter Notes** and add your “what you’ll say” line for each slide.","Choose **View → Light Table** to see all slides at once and drag to rearrange."]
     }}
   ], proof:"A card with your audience, purpose, one-sentence message and talking time; a paper storyboard whose headlines tell the story; and an outline in an app with one headline per slide and a note on each."},
   read:[
     {book:"wss", where:"Chapter 6, Section 6.1 “Presentation and Design Essentials”: “Understanding Your Audience and Purpose” and “Create a Plan Before Getting Started”"},
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”: “Ensuring the Final Presentation Meets Its Goals”, “Opening a Presentation” and “Closing a Presentation”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u10-l2", title:"Slide design that helps", minutes:55,
   goals:[
     "Explain how a theme, the slide master, layouts and placeholders fit together, and use them instead of loose text boxes",
     "Check text contrast against the WCAG 4.5:1 and 3:1 thresholds",
     "Choose type sizes, alignment and white space that work in the room or on a small screen",
     "Explain why text-heavy slides work against the speaker, and tell rules of thumb apart from real standards"
   ],
   learn:[
    {h:"Design is decided once, not on every slide", body:[
      {lead:"Good slide design is mostly invisible: every title in the same place, the same fonts and colours throughout, text you can read from the back. The quickest way to get there is to let the app’s design system do the repeating for you."},
      "Think of a printed letterhead. The organisation’s name, logo and colours are printed once, and every letter written on that paper shares them. Presentation apps work the same way, with four layers:",
      {list:[
        "A [[theme]] is a ready-made set of colours, fonts, background and layouts for the whole deck.",
        "The [[slide-master|slide master]] is the top-level slide that holds the theme’s settings. Change the font or logo there, and every slide that uses it changes.",
        "A [[slide-layout|layout]] is one arrangement of boxes for a kind of slide: a title slide, “title and content”, two columns, a section header.",
        "A [[placeholder]] is one of those labelled boxes (“Click to add title”) waiting for your text or picture."
      ]},
      {fig:'<svg viewBox="0 0 340 344"><defs><marker id="m1021" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="30" y="10" width="280" height="54" rx="9" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Slide master (theme)</text><text class="s" x="170" y="52" text-anchor="middle">fonts · colours · background · logo</text><path class="d-ink" d="M60,65 L60,96" stroke-width="2" marker-end="url(#m1021)"/><path class="d-ink" d="M170,65 L170,96" stroke-width="2" marker-end="url(#m1021)"/><path class="d-ink" d="M280,65 L280,96" stroke-width="2" marker-end="url(#m1021)"/><rect class="d-gold" x="8" y="98" width="104" height="66" rx="8" stroke-width="2"/><text x="60" y="118" text-anchor="middle">Title</text><text x="60" y="135" text-anchor="middle">slide</text><text class="s" x="60" y="155" text-anchor="middle">layout</text><rect class="d-gold" x="118" y="98" width="104" height="66" rx="8" stroke-width="2"/><text x="170" y="118" text-anchor="middle">Title and</text><text x="170" y="135" text-anchor="middle">content</text><text class="s" x="170" y="155" text-anchor="middle">layout</text><rect class="d-gold" x="228" y="98" width="104" height="66" rx="8" stroke-width="2"/><text x="280" y="118" text-anchor="middle">Two</text><text x="280" y="135" text-anchor="middle">columns</text><text class="s" x="280" y="155" text-anchor="middle">layout</text><path class="d-ink" d="M60,165 L60,194" stroke-width="2" marker-end="url(#m1021)"/><path class="d-ink" d="M170,165 L170,194" stroke-width="2" marker-end="url(#m1021)"/><path class="d-ink" d="M280,165 L280,194" stroke-width="2" marker-end="url(#m1021)"/><rect class="d-panel" x="8" y="196" width="104" height="62" rx="6" stroke-width="2"/><rect class="d-softf" x="18" y="214" width="84" height="14" rx="2"/><rect class="d-softf" x="33" y="234" width="54" height="8" rx="2"/><rect class="d-panel" x="118" y="196" width="104" height="62" rx="6" stroke-width="2"/><rect class="d-softf" x="128" y="204" width="84" height="12" rx="2"/><rect class="d-softf" x="128" y="222" width="84" height="28" rx="2"/><rect class="d-panel" x="228" y="196" width="104" height="62" rx="6" stroke-width="2"/><rect class="d-softf" x="238" y="204" width="84" height="12" rx="2"/><rect class="d-softf" x="238" y="222" width="40" height="28" rx="2"/><rect class="d-softf" x="282" y="222" width="40" height="28" rx="2"/><text class="s" x="60" y="278" text-anchor="middle">slide 1</text><text class="s" x="170" y="278" text-anchor="middle">slides 2 to 6</text><text class="s" x="280" y="278" text-anchor="middle">slide 7</text><text x="170" y="312" text-anchor="middle">Edit the master once:</text><text class="s" x="170" y="332" text-anchor="middle">every slide that uses it updates</text></svg>', alt:"A diagram in three rows. Top: the slide master, holding fonts, colours, background and logo. Arrows lead down to three layouts: Title slide, Title and content, and Two columns. Arrows lead from each layout to slides built from it: slide 1 uses the title layout, slides 2 to 6 use title and content, slide 7 uses two columns. Each slide shows grey placeholder boxes. Caption at the bottom: edit the master once and every slide that uses it updates.", cap:"The master holds the design, layouts arrange the boxes, and slides fill the placeholders."},
      "Every app has this system, with slightly different names:",
      {table:[
        ["App","Where the master and layouts live"],
        ["PowerPoint","**View → Slide Master** (desktop apps only; PowerPoint for the web can’t open or edit the slide master)"],
        ["Google Slides","**Slide → Edit theme** opens the theme builder: the theme at the top, layouts below"],
        ["LibreOffice Impress","**View → Master Slide**; layouts are chosen from **Slide → Layout**"],
        ["Keynote","Called **slide layouts**; edit them with **View → Edit Slide Layouts**"]
      ]}
    ]},
    {h:"Placeholders beat loose text boxes", body:[
      "You can type into a placeholder, or draw your own text box anywhere. They look the same on screen, but they behave very differently:",
      {table:[
        ["","Placeholder (from the layout)","Loose text box (drawn by you)"],
        ["Changing theme or layout","Moves and restyles to match","Stays exactly where you drew it"],
        ["Slide title","Fills the slide’s real title","Not treated as a title"],
        ["Outline view and navigation","Shows up","Usually missing"],
        ["Screen readers","Read in a predictable order","Read in the order you drew them, which may be wrong"]
      ]},
      "That third and fourth row matter more than they look. Screen readers announce each slide by its title, and Microsoft’s accessibility guidance asks for a unique, descriptive title on every slide, even if you choose to hide it. A title typed into a loose box doesn’t count.",
      {ex:"Kenji built 20 slides by deleting the placeholders and drawing his own text boxes, because he liked placing things by hand. His society then asked everyone to switch to the official theme. The colours changed, but every one of his boxes stayed put, in the old font, overlapping the new logo. He spent an evening fixing slides by hand.\n\nHad he used placeholders, the theme change would have taken seconds. In PowerPoint, **Home → Reset** puts a slide’s placeholders back to the layout’s positions and formatting.", label:"Worked example: why placeholders pay off"},
      {tip:"If a layout doesn’t suit you, change the layout (once, in the master) rather than fighting it on every slide."}
    ]},
    {h:"Contrast you can measure", body:[
      "[[contrast|Contrast]] is the difference in brightness between text and its background. It is the single biggest factor in whether people can read a slide, and it can be measured as a **contrast ratio**, from 1:1 (identical colours, invisible) to 21:1 (black on white).",
      "The Web Content Accessibility Guidelines (WCAG 2.2), the international reference for accessible digital content, set minimum ratios at level AA:",
      {fig:'<svg viewBox="0 0 340 310"><text x="170" y="20" text-anchor="middle">Contrast ratio: higher is easier to read</text><rect class="d-sage" x="10" y="34" width="320" height="44" rx="8" stroke-width="2"/><text x="24" y="61">21:1</text><text x="96" y="53">Black on white</text><text class="s" x="96" y="70">the highest possible</text><rect class="d-sage" x="10" y="86" width="320" height="44" rx="8" stroke-width="2"/><text x="24" y="113">7:1</text><text x="96" y="105">Enhanced level (AAA)</text><text class="s" x="96" y="122">normal-size text</text><rect class="d-lup" x="10" y="138" width="320" height="44" rx="8" stroke-width="2"/><text x="24" y="165">4.5:1</text><text x="96" y="157">Minimum (AA)</text><text class="s" x="96" y="174">normal-size text</text><rect class="d-gold" x="10" y="190" width="320" height="44" rx="8" stroke-width="2"/><text x="24" y="217">3:1</text><text x="96" y="209">Minimum (AA): large text</text><text class="s" x="96" y="226">also chart lines, icons, shapes</text><rect class="d-rose" x="10" y="242" width="320" height="44" rx="8" stroke-width="2"/><text x="24" y="269">1:1</text><text x="96" y="261">Same as background</text><text class="s" x="96" y="278">invisible</text><text class="s" x="170" y="304" text-anchor="middle">Large text: at least 18 pt, or 14 pt bold</text></svg>', alt:"A ladder of contrast ratios from highest to lowest. 21 to 1: black on white, the highest possible. 7 to 1: enhanced level AAA for normal-size text. 4.5 to 1: minimum level AA for normal-size text. 3 to 1: minimum AA for large text, and also for chart lines, icons and shapes. 1 to 1: same colour as the background, invisible. Note: large text means at least 18 point, or 14 point bold.", cap:"The WCAG thresholds. Aim well above the minimum for slides: projectors and bright rooms wash colours out."},
      {list:[
        "**4.5:1** for normal text.",
        "**3:1** for large text, which WCAG defines as at least **18 point**, or **14 point bold**.",
        "**3:1** for the parts of charts, icons and diagrams people need to see (WCAG’s “non-text contrast” rule)."
      ]},
      "The thresholds are strict: WCAG says not to round, so 4.47:1 fails 4.5:1. You can’t judge ratios by eye, so use a checker: a free web tool such as WebAIM’s contrast checker, or the Colour Contrast Analyser app. You enter the two colours and it reports the ratio and whether it passes.",
      {warn:"Microsoft says its Accessibility Checker misses some contrast problems, such as text in transparent boxes over a background. Text over a photo is the classic trap: part of the photo may be light and part dark. Put text on a solid band of colour, or darken the photo behind it, and check the worst spot."},
      {tip:"WCAG was written for screens like phones and laptops, not projectors. A projector in a sunny room can turn a 4.5:1 pair into something much weaker, so slides need *more* contrast than the minimum, not less. Dark text on a light background, or the reverse, with no mid-tones, is safest."}
    ]},
    {h:"Type size for the room", body:[
      "Text has to be readable by the person furthest away, or by someone watching on a phone. There is no single correct size, because it depends on the room, the screen and the slide size, but there are sensible starting points:",
      {list:[
        "Microsoft’s accessibility guidance: use **18 pt or larger**, **sans serif** fonts and plenty of white space. A [[sans-serif]] font, such as Arial, Calibri or Verdana, has no little strokes (“serifs”) at the ends of letters, and is generally easier to read on screens.",
        "Avoid long stretches in ALL CAPITALS, heavy italics or underlining that isn’t a link (Microsoft lists these too). Use bold or a bigger size for emphasis.",
        "Left-align body text. Google’s accessibility help notes that justified text (spread to both edges) is harder to read because of the uneven gaps between words.",
        "Use the theme’s fonts, ideally one or two families for the whole deck."
      ]},
      "Then test. Stand at the back of the real room and look. If people will watch online, look at a slide on a phone at arm’s length. If you squint, so will they.",
      {tip:"You’ll hear rules like “6×6” (no more than six bullets of six words) or “10/20/30” (one author’s suggestion of 10 slides, 20 minutes and 30-point text). They are rules of thumb that some presenters find useful, not standards. The real tests are: can people read it, and does it support what you are saying?"}
    ]},
    {h:"Alignment, white space and consistency", body:[
      "The textbook lists a handful of design principles that professional designers use. In slide terms:",
      {table:[
        ["Principle","What it means on a slide"],
        ["Alignment","Line things up on shared edges. Use the guides and smart guides that appear as you drag; nothing should sit “nearly” in line."],
        ["Proximity","Put related things close together (a photo and its caption) and unrelated things apart."],
        ["Repetition","Same title position, colours and fonts on every slide, so people know where to look."],
        ["Contrast","Make important things look different: bigger, bolder, a stronger colour. Unimportant things recede."],
        ["White space","Leave empty space. It isn’t wasted; it lets the important thing stand out."]
      ]},
      "[[white-space|White space]] is the one beginners resist most. A slide doesn’t need to be full. One chart with a one-line headline and generous margins usually communicates more than the same chart squeezed beside four bullet points.",
      {fix:"Section 6.3 says to “select Layout tab” from the Home tab. In current PowerPoint, **Layout** is a drop-down button in the **Slides** group of the **Home** tab, not a tab of its own."}
    ]},
    {h:"Why text-heavy slides struggle", body:[
      "A slide full of sentences sets up a competition. The audience reads ahead (people read faster than you speak), stops listening, and finishes before you do. You, meanwhile, become a narrator reading aloud, facing the screen instead of the room.",
      "Research on multimedia learning by Richard Mayer and colleagues points the same way: in their experiments, people generally learned better from spoken words plus relevant pictures than from the same thing with the spoken words also printed on screen. And Microsoft’s rehearsal tool, Speaker Coach, specifically warns presenters when they read their slide text aloud.",
      {ex:"Before: a slide titled “Volunteering” with nine bullet points copied from the garden’s handbook, each a full sentence.\n\nAfter: the headline “Two hours a month keeps the garden open”, a photo of three volunteers at work, and nothing else. Priya says the details aloud; the nine bullet points move to a one-page handout people can take home.", label:"Worked example: from document to slide"},
      "This doesn’t mean “no words”. Headlines, labels, key numbers and short lists help, especially for people who are deaf, hard of hearing or listening in a second language. Write a **headline sentence** that makes the slide’s point (some presenters call this the assertion-evidence approach: a claim as the headline, then a visual as the evidence), then show the evidence, and keep the paragraphs for your notes or a handout."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Design means decoration.”** Most good design is consistency, contrast and space. Decoration that doesn’t carry meaning often distracts.",
        "**“If I can read it on my laptop, everyone can read it.”** You are 50 cm from your laptop. The back row is many metres from the screen, and projectors lower contrast.",
        "**“Placeholders limit me, so I delete them.”** They carry titles, reading order and theme changes for you. Change the layout instead.",
        "**“There’s a rule: never more than six bullets.”** That is a tip, not a standard. The standards that do exist are about readability, such as WCAG’s contrast ratios."
      ]}
    ]}
   ],
   try:[
    {id:"t1u10-l2-x1", type:"sort", q:"Where should each change be made: once on the slide master (or theme), or on the individual slide?", buckets:["Slide master or theme","Individual slide"], items:[
      {t:"The club’s logo in the bottom corner of every slide", b:0, why:"It repeats on every slide, so put it on the master once. Then it can’t drift out of place."},
      {t:"The font used for all slide titles", b:0, why:"A deck-wide style belongs in the master or theme, so every title matches and a later change takes seconds."},
      {t:"A photo of this year’s harvest on slide 4", b:1, why:"Content that belongs to one slide goes on that slide, ideally in a picture placeholder."},
      {t:"Slide numbers on every slide", b:0, why:"Slide numbers are a master-level element. Most apps add them through the master or a header and footer setting."},
      {t:"The chart of last month’s sign-ups", b:1, why:"Specific content for one slide. It doesn’t belong on every slide."},
      {t:"The background colour of the whole deck", b:0, why:"A deck-wide setting belongs in the theme or master."}
    ]},
    {id:"t1u10-l2-x2", type:"sort", q:"Using WCAG level AA, does each text pass or fail its contrast minimum? (Large text means at least 18 pt, or 14 pt bold.)", buckets:["Passes AA","Fails AA"], items:[
      {t:"24 pt regular title at 3.4:1", b:0, why:"24 pt is large text, which needs at least 3:1. 3.4:1 passes, though more contrast would be kinder on a projector."},
      {t:"16 pt regular body text at 4.0:1", b:1, why:"16 pt regular is not large text, so it needs 4.5:1. 4.0:1 fails."},
      {t:"14 pt bold label at 3.2:1", b:0, why:"14 pt bold counts as large text, so the minimum is 3:1. 3.2:1 passes."},
      {t:"12 pt footnote at 4.47:1", b:1, why:"Normal text needs 4.5:1 and WCAG says not to round up. 4.47:1 fails."},
      {t:"20 pt regular text at 2.8:1", b:1, why:"20 pt is large text, but even large text needs at least 3:1. 2.8:1 fails."},
      {t:"18 pt regular text at 7.2:1", b:0, why:"7.2:1 passes every level, including the enhanced AAA level for normal text."}
    ]},
    {id:"t1u10-l2-x3", type:"mcq", q:"Amara switched her deck to a new theme. The colours changed everywhere, but on some slides the old text stayed in the old font and position. What is the most likely reason?", options:[
      {t:"That text was typed into loose text boxes she drew, not into the layout’s placeholders", ok:true, why:"Placeholders follow the theme and layout; text boxes you draw yourself keep their own position and formatting."},
      {t:"The new theme is broken and should be reinstalled", why:"The theme worked on the other slides. The difference is in how those particular slides were built."},
      {t:"Themes can only change colours, never fonts", why:"Themes include fonts as well as colours. The text that changed shows the fonts were applied where placeholders were used."},
      {t:"She needs a faster computer to apply themes fully", why:"Applying a theme isn’t limited by speed. The text boxes simply aren’t linked to the theme."}
    ]},
    {id:"t1u10-l2-x4", type:"order", q:"Put these set-up steps for a new deck in the order that saves the most rework.", items:[
      {t:"Choose the slide size (usually 16:9) to match the screen", why:"Changing size later rescales or crops content, so decide first."},
      {t:"Choose a theme, now that you can see how it looks at that slide size", why:"The theme sets colours, fonts and layouts, so it comes before any content, and after the size so you judge it in the real shape."},
      {t:"Adjust the slide master: fonts, colours, logo, slide numbers", why:"Deck-wide changes are made once, before slides multiply."},
      {t:"Add slides using the right layouts", why:"Each new slide starts from a layout with placeholders in place."},
      {t:"Fill the placeholders with your headlines, pictures and charts", why:"Content goes into placeholders so it follows the design."},
      {t:"Check contrast and readability from a distance", why:"A final check on the real content catches anything the theme didn’t."}
    ]},
    {id:"t1u10-l2-x5", type:"spot", q:"Mei describes one slide of her talk on a new recycling scheme. Tap the design choices likely to cause problems.", ask:"cause problems", parts:[
      "The headline ",
      {t:"“Food waste now goes in the green bin”", flag:false, why:"A headline sentence that makes the point. Good."},
      " is typed ",
      {t:"in the layout’s title placeholder", flag:false, why:"Right: it becomes the slide’s real title, for screen readers, navigation and theme changes."},
      ". Below it, ",
      {t:"light grey text on a white background", flag:true, why:"Light grey on white often falls well below 4.5:1. Check it with a contrast checker; dark grey or black would be safer."},
      " explains the scheme in ",
      {t:"five full paragraphs, justified to both edges", flag:true, why:"Paragraphs compete with the speaker, and justified text is harder to read. Move the detail to notes or a handout."},
      ", using ",
      {t:"a common sans serif font from the theme", flag:false, why:"Sensible: readable on screens and consistent with the rest of the deck."},
      ". A key warning is ",
      {t:"written in 11 pt ALL CAPITALS", flag:true, why:"Too small to read in most rooms, and all capitals are harder to read. Make it larger and use bold for emphasis."}
    ]},
    {id:"t1u10-l2-x6", type:"mcq", q:"Hana’s slide has eight bullet points, each a full sentence, and she reads them aloud. What change would help her audience most?", options:[
      {t:"Replace them with a headline sentence that makes the point and one supporting visual; put the details in her notes or a handout", ok:true, why:"The audience can listen instead of reading ahead, and the detail isn’t lost: it moves to where it is useful."},
      {t:"Keep the text but make the font smaller so it all fits with a picture", why:"Smaller text is harder to read and the competition between reading and listening remains."},
      {t:"Add a spinning entrance animation to each bullet", why:"Animation doesn’t fix too much text and can distract further."},
      {t:"Read faster so she finishes before the audience does", why:"Rushing makes it harder to follow and doesn’t solve the reading-versus-listening problem."}
    ]},
    {id:"t1u10-l2-x7", type:"mcq", q:"Dmitri uses PowerPoint for the web with a free account. He wants to change the title font on every slide at once, but he can’t find Slide Master. Why?", options:[
      {t:"PowerPoint for the web can’t open or edit the slide master; that needs a desktop app", ok:true, why:"Microsoft’s help says viewing the slide master isn’t possible in PowerPoint for the web. He can apply a different theme or variant on the Design tab, or open the file in a desktop app, or in another app, to edit the master."},
      {t:"He has to switch on Slide Master in his account settings", why:"There is no such setting. The feature simply isn’t in the web version."},
      {t:"Slide masters only exist in Google Slides", why:"PowerPoint has slide masters; they are in the desktop apps (View → Slide Master)."},
      {t:"He must first delete all his slides", why:"That would lose his work and wouldn’t add the feature."}
    ]}
   ],
   apply:{intro:"Use your outline from Lesson 1 (or any short deck). Each task works in the free version of each app unless a note says otherwise.", tasks:[
     {t:"Set the slide size and choose a theme", app:{
       ms:["Choose **Design → Slide Size** and check **Widescreen (16:9)** is selected (it is the default). This works in desktop PowerPoint and PowerPoint for the web.","On the **Design** tab, pick a theme from the gallery. Try the **Variants** next to it for other colour sets.","Prefer a plain theme with strong contrast between text and background."],
       google:["Choose **File → Page setup** and pick **Widescreen (16:9)**, then confirm.","Choose **Slide → Change theme** and pick a theme from the panel on the right.","Prefer a plain theme with strong contrast between text and background."],
       libre:["Choose **Slide → Slide Properties** and, on the **Slide** tab, set the **Format** to a 16:9 screen size.","To apply a ready-made design, open the **Master Slides** panel in the sidebar (the **Properties** sidebar can be switched with the icons on its right edge) and click a design.","Prefer a plain design with strong contrast between text and background."],
       apple:["When you create a presentation, Keynote shows the theme chooser; pick **Wide** (16:9) at the top if offered, then a theme.","To change later, choose **File → Change Theme**.","To check the size, click **Document** in the toolbar and look at **Slide Size**."]
     }},
     {t:"Make one deck-wide change on the master", app:{
       ms:["Desktop PowerPoint only: choose **View → Slide Master**.","Click the large thumbnail at the top of the left pane (the master itself, not a layout under it).","Change the title font, or insert a small logo with **Insert → Pictures**. Watch the layouts below update.","Choose **Close Master View**. Every slide using those layouts now shows the change.","PowerPoint for the web can’t open the slide master. There, use **Design → Variants** for another colour or font set, or open the file in a desktop app (or in Google Slides or LibreOffice Impress, which can open PowerPoint files) to edit the master."],
       google:["Choose **Slide → Edit theme**. The theme builder opens.","Click the theme at the top of the left pane (not a layout below it).","Change the title font, or add a logo with **Insert → Image**.","Close the theme builder with the **✕** at the top right. Every slide updates."],
       libre:["Choose **View → Master Slide**.","Click the title area and change its font, or add a logo with **Insert → Image**.","Click **Close Master View** on the Master View toolbar (or choose **View → Normal**). Every slide using that master updates."],
       apple:["Click **View** in the toolbar and choose **Edit Slide Layouts**.","Select a layout in the left pane and change its title font, or add a logo.","Click **Done** in the blue bar at the bottom of the window. Slides using that layout update."]
     }},
     {t:"Use layouts and placeholders instead of loose text boxes", app:{
       ms:["Select a slide and choose **Home → Layout** to try a different arrangement.","Type into the placeholders (“Click to add title”). If you’ve moved or deleted them, **Home → Reset** restores the layout’s placeholders (desktop PowerPoint).","Check every slide has its own title in the title placeholder."],
       google:["Select a slide and click **Layout** in the toolbar to try a different arrangement.","Type into the placeholders (“Click to add title”).","Check every slide has its own title in the title placeholder."],
       libre:["Select a slide and choose **Slide → Layout** (or use the **Layouts** panel in the Properties sidebar).","Type into the placeholders (“Click to add Title”).","Check every slide has its own title in the title placeholder."],
       apple:["Select a slide, open the **Format** sidebar and click the **Slide Layout** pop-up to choose a different layout.","Type into the placeholders. In the Format sidebar, the **Title** and **Body** checkboxes show or hide them.","Check every slide has its own title."]
     }},
     {t:"Check your contrast and test from a distance", how:["Find the hex codes of your text and background colours (most apps show them in the colour picker under **More colours** or **Custom**).","Enter both in a contrast checker, such as WebAIM’s free contrast checker on the web. Aim for at least 4.5:1 for normal text and 3:1 for text that is 18 pt or larger (14 pt if bold).","Start the slide show and stand at the far side of the room, or look at a slide on a phone at arm’s length. Note anything you had to squint at."], write:"Colour pair · ratio · pass or fail · what you changed"}
   ], proof:"A deck with a chosen slide size and theme, one change made on the master (or a note on why your app couldn’t), every slide titled in its placeholder, and a written contrast check."},
   read:[
     {book:"wss", where:"Chapter 6, Section 6.3 “Formatting Microsoft PowerPoint Slides: Layout and Design Principles”: “Formatting Layout”, “Alignment Guides” and “Design Principles”"},
     {book:"wss", where:"Chapter 6, Section 6.2 “Designing a Presentation in Microsoft PowerPoint” and Section 6.6 “Creating Google Slides: Layout and Text”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u10-l3", title:"Visuals that explain", minutes:55,
   goals:[
     "Tell a visual that explains from one that only decorates",
     "Choose images you have permission to use and credit them properly",
     "Turn a table of numbers into a chart slide that makes one point",
     "Add alt text and captions, and use animation only where it helps",
     "Recognise popular myths about memory and visuals, and check claims before repeating them"
   ],
   learn:[
    {h:"Does this picture do a job?", body:[
      {lead:"A good visual shows something words can’t: what a thing looks like, how much bigger one number is, how steps connect. A weak one fills a gap."},
      "Before adding any picture, ask: **what would the audience lose if it weren’t there?** If the answer is “nothing”, it is decoration. A little decoration is harmless, but research on so-called **seductive details** (interesting but irrelevant pictures or stories) has found they can pull attention away from the main point and reduce what people learn.",
      {table:[
        ["Visual","Does a job?","Why"],
        ["Photo of the broken playground swing","Yes","It shows the problem the talk asks people to fix"],
        ["Generic photo of smiling people in suits","Usually no","It says nothing about this topic; the audience has seen it before"],
        ["Map of the new bus route","Yes","Easier to see than to hear described"],
        ["Clip-art light bulb next to “Ideas”","Rarely","It repeats the word without adding meaning"]
      ]},
      {tip:"A plain slide with a strong headline is better than a slide with an irrelevant photo. White space is allowed."}
    ]},
    {h:"Images you are allowed to use", body:[
      "Unit 5 explained that almost every photo, drawing and video online is protected by copyright the moment it is made, and that being able to download or right-click an image doesn’t give you permission to reuse it (see {{copyright-basics}}). For slides, you have four safe sources:",
      {list:[
        "**Your own photos and drawings.** If they show people, ask before you put identifiable faces, especially children’s, on a slide that will be shared.",
        "**Openly licensed images**, such as those under a Creative Commons licence ({{creative-commons}}), from sources like Wikimedia Commons or Openverse. Follow the licence: most require a credit, and some forbid commercial use (NC) or changes (ND).",
        "**Public domain images**, which have no copyright restrictions, though crediting them is still good practice.",
        "**The stock library built into your app**, used within its terms. Google, for example, says its stock media can be used for personal, educational or commercial purposes inside its apps, but not resold or used in a logo."
      ]},
      {warn:"An image search inside a slides app is not a licence. Google’s help for Slides says it “has no way of knowing whether your use is permitted” for web images and leaves checking the licence to you. Open the image’s source page and read its licence before using it."},
      "A credit can be one line of small text beside the picture or on a final “Image credits” slide. Unit 5’s TASL method covers what to include: **T**itle, **A**uthor, **S**ource (a link) and **L**icence ({{attribution-tasl}}).",
      {ex:"Photo: “Allotment in spring” by K. Osei, Wikimedia Commons, CC BY 4.0", label:"Worked example: a one-line image credit", mono:true},
      {tip:"If you use an AI-generated image, say so in the credit, and never use one to stand in for real evidence (a “photo” of an event that didn’t happen). Unit 6 explains why: {{ai-generated-content}}."}
    ]},
    {h:"Charts on slides: one point per chart", body:[
      "A spreadsheet chart is built for exploring data. A slide chart is built for **making one point** in the few seconds the audience looks at it. So the rule of slide charts is subtraction:",
      {ol:[
        "**Decide the one point.** “Sundays sell the most” is a point; “sales by day” is a topic.",
        "**Pick the simplest chart that shows it.** Bars for comparing amounts, a line for change over time. Avoid 3D effects, which distort sizes.",
        "**Remove clutter**: heavy gridlines, a legend for a single series, decimal places nobody needs.",
        "**Highlight what matters.** One bar in a strong colour, the rest muted. Label it directly rather than making people match colours to a legend.",
        "**Write the point as the headline**, so nobody has to work it out."
      ]},
      {fig:'<svg viewBox="0 0 340 420"><rect class="d-panel" x="6" y="6" width="328" height="196" rx="8" stroke-width="2"/><text class="s" x="18" y="26">Before</text><text x="150" y="26" text-anchor="middle">Sales data</text><path class="d-soft" d="M30,50 L250,50 M30,80 L250,80 M30,110 L250,110 M30,140 L250,140" stroke-width="1"/><path class="d-ink" d="M30,170 L250,170" stroke-width="2"/><rect class="d-lup" x="36" y="122" width="20" height="48"/><rect class="d-lup" x="66" y="126" width="20" height="44"/><rect class="d-lup" x="96" y="124" width="20" height="46"/><rect class="d-lup" x="126" y="120" width="20" height="50"/><rect class="d-lup" x="156" y="106" width="20" height="64"/><rect class="d-lup" x="186" y="94" width="20" height="76"/><rect class="d-lup" x="216" y="58" width="20" height="112"/><text class="s" x="46" y="188" text-anchor="middle">M</text><text class="s" x="76" y="188" text-anchor="middle">T</text><text class="s" x="106" y="188" text-anchor="middle">W</text><text class="s" x="136" y="188" text-anchor="middle">T</text><text class="s" x="166" y="188" text-anchor="middle">F</text><text class="s" x="196" y="188" text-anchor="middle">S</text><text class="s" x="226" y="188" text-anchor="middle">S</text><rect class="d-lup" x="262" y="98" width="12" height="12"/><text class="s" x="280" y="109">Series 1</text><rect class="d-panel" x="6" y="214" width="328" height="200" rx="8" stroke-width="2"/><text class="s" x="18" y="234">After</text><text x="170" y="254" text-anchor="middle">Sundays now sell the most</text><path class="d-ink" d="M40,380 L304,380" stroke-width="2"/><rect class="d-soft" x="52" y="337" width="24" height="43" stroke-width="2"/><rect class="d-soft" x="88" y="341" width="24" height="39" stroke-width="2"/><rect class="d-soft" x="124" y="339" width="24" height="41" stroke-width="2"/><rect class="d-soft" x="160" y="336" width="24" height="44" stroke-width="2"/><rect class="d-soft" x="196" y="323" width="24" height="57" stroke-width="2"/><rect class="d-soft" x="232" y="312" width="24" height="68" stroke-width="2"/><rect class="d-rose" x="268" y="280" width="24" height="100" stroke-width="3"/><text class="s" x="280" y="273" text-anchor="middle">140</text><text class="s" x="64" y="398" text-anchor="middle">Mon</text><text class="s" x="100" y="398" text-anchor="middle">Tue</text><text class="s" x="136" y="398" text-anchor="middle">Wed</text><text class="s" x="172" y="398" text-anchor="middle">Thu</text><text class="s" x="208" y="398" text-anchor="middle">Fri</text><text class="s" x="244" y="398" text-anchor="middle">Sat</text><text class="s" x="280" y="398" text-anchor="middle">Sun</text></svg>', alt:"Two bar charts of the same daily bread sales. Before: titled Sales data, with gridlines, seven bars all in one colour, single-letter day labels and a legend saying Series 1. After: headlined Sundays now sell the most, with no gridlines or legend, six muted bars for Monday to Saturday and one highlighted bar for Sunday labelled 140.", cap:"The same data twice. The second chart makes its point in a glance: a headline, one highlighted bar, a direct label."},
      "Keep the honesty rules from Unit 6 ({{misleading-numbers}}): bar charts start at zero, scales are labelled, and you don’t hide the data that would spoil your point. A chart that misleads on a slide misleads a whole room at once.",
      {tip:"If you paste a chart from a spreadsheet, check whether it stays **linked** to the data. In Google Slides, a chart inserted from Sheets shows an **Update** button when the sheet changes. In PowerPoint, pasted Excel charts can be linked or embedded. Linked charts update; embedded ones are a snapshot."}
    ]},
    {h:"Simple diagrams and icons", body:[
      "Some ideas are relationships rather than numbers: steps in a process, a cycle, a hierarchy, a before-and-after. A simple diagram, a few boxes and arrows, often beats a paragraph. Apps have tools for this: **SmartArt** in PowerPoint (**Insert → SmartArt**), **Insert → Diagram** in Google Slides, and shapes with connector lines in every app.",
      {list:[
        "**Fewer boxes, shorter labels.** Three to five steps read at a glance; twelve need a handout.",
        "**Arrows mean something.** Use them only for flow or cause, and keep them pointing one way.",
        "**One icon style.** Mixing cartoon icons, photos and line drawings looks accidental. Many apps include an icon library; use one set throughout.",
        "**Icons need words.** An icon alone can be misread (is a floppy disk “save” or “old computers”?). Label it."
      ]}
    ]},
    {h:"Video and audio", body:[
      "A short clip can show a process or a voice better than any slide. It is also where presentations most often go wrong on the day. Know which kind you have:",
      {table:[
        ["Kind","How it works","Main risk"],
        ["[[embedded-media|Embedded]] file","The video is stored inside the deck file","Large files that are slow to share"],
        ["[[linked-media|Linked]] file","The deck points to a video stored elsewhere on your computer","Breaks if the deck moves to another computer without the video"],
        ["Online video (for example from YouTube)","The deck plays it from the internet","No internet, no video; adverts or a removed video"]
      ]},
      {list:[
        "**Test on the presenting computer**, in the room, with the sound on. Check the volume before the audience arrives.",
        "**Keep clips short** and say before it starts what to watch for.",
        "**Captions.** Videos with speech need captions or subtitles for people who are deaf or hard of hearing, and they help everyone in a noisy room. PowerPoint for Windows and Mac can attach a separate caption file (WebVTT or SRT format) to a video you insert, from the **Accessibility** tab’s **Insert Captions**. Many online videos already offer captions you can switch on.",
        "**Have a fallback**: a still image and a sentence describing what the clip shows."
      ]},
      {warn:"Microsoft notes that PowerPoint’s **Compress Media** and **Optimize Media Compatibility** remove caption files and extra audio tracks from videos. Compress first, then add captions, or keep an uncompressed copy."}
    ]},
    {h:"Alt text for every meaningful visual", body:[
      "People using screen readers hear the slide instead of seeing it. For each picture, chart or diagram, the screen reader reads its **alt text** (short for alternative text): a short description you write. Without it, they hear “picture” or a file name, and miss what the visual shows.",
      "Microsoft’s guidance gives a good shape for alt text:",
      {list:[
        "Keep it to **a short sentence or two**, focused on what matters in this context.",
        "Don’t start with “An image of”: screen readers already announce that it is an image.",
        "If the picture contains text, include that text.",
        "Some apps write alt text for you automatically. Always check it: it may describe the wrong detail or get it wrong.",
        "Purely decorative items (a border, a background swirl) can be **marked as decorative** so screen readers skip them."
      ]},
      {ex:"Chart: “Bar chart of loaves sold per day last month. Sunday is highest at 140, about double most weekdays; Saturday is second at 95.”\n\nPhoto on Priya’s slide: “Three volunteers weeding raised beds on a sunny Saturday.”\n\nDecorative leaf border: marked as decorative.", label:"Worked example: alt text that does the job"},
      "For charts, say the **point** and the key numbers, not every value. If the full data matters, put a table in the speaker notes or handout."
    ]},
    {h:"Transitions and animations: with a purpose", body:[
      "A [[transition]] is the effect between one slide and the next (a fade, a push). An [[animation]] makes an object on a slide appear, move or disappear. Both can help when the movement means something: revealing a process one step at a time, so people don’t read ahead; showing a bar growing; moving a piece of a diagram to where it belongs.",
      "Both hurt when they are decoration. Spinning, bouncing or flying text slows the talk and draws the eye to the effect instead of the content. PowerPoint even groups its gentlest transitions under the heading **Subtle**, and subtle is good default advice: one gentle transition used throughout, and animation only where it explains.",
      {warn:"Never use content that flashes more than three times a second. WCAG treats this as a seizure risk (“Three Flashes or Below Threshold”). Large, fast motion can also make some people feel ill; keep movement small and slow."}
    ]},
    {h:"Myths about memory and pictures", body:[
      "Presentation advice is full of confident numbers. Two you may meet:",
      {list:[
        "**“People remember 10% of what they read, 20% of what they hear, 30% of what they see…”** This chart, often called the learning pyramid, is frequently credited to the educator Edgar Dale. But Dale’s 1946 “Cone of Experience” contained **no percentages**, and researchers who traced the figures (Subramony, Molenda, Betrus and Thalheimer, writing in 2014) found no research behind them. The neat round numbers are themselves a clue.",
        "**“The brain processes images 60,000 times faster than text.”** Repeated in countless slide decks, but nobody has been able to point to a study that measured it."
      ]},
      "A related idea, that each person has a “learning style” (visual, auditory and so on) and learns best when teaching matches it, was reviewed by psychologists Harold Pashler and colleagues in 2008, who found little evidence that matching teaching to a preferred style improves learning.",
      "What the evidence does support is more modest: words combined with **relevant** pictures usually help understanding more than words alone, and irrelevant extras can get in the way. That is reason enough to choose visuals carefully, without inventing statistics.",
      {key:"Before you put a statistic on a slide, find where it came from. If you can’t trace it to a real study or official source, leave it out. Unit 6’s {{lateral-reading}} works for presentation “facts” too."}
    ]}
   ],
   try:[
    {id:"t1u10-l3-x1", type:"sort", q:"Sione is preparing slides for a free community workshop. Can he use each image as it is, or does he need to check or ask first?", buckets:["Fine to use (with credit if required)","Check or ask first"], items:[
      {t:"A photo he took himself of the river path", b:0, why:"He owns the copyright. No permission is needed (people in it are a separate question)."},
      {t:"A Wikimedia Commons photo licensed CC BY 4.0, credited on the slide", b:0, why:"CC BY allows reuse for any purpose as long as he credits it, which he does."},
      {t:"A photo from a news website’s article", b:1, why:"News photos are usually copyrighted and licensed to the publisher. He needs permission or a licence."},
      {t:"An image from a web search inside his slides app, licence unknown", b:1, why:"The search doesn’t grant a licence. Google’s help says it can’t know whether a use is permitted. He must open the source and check."},
      {t:"A close-up photo of a neighbour’s children from a street party", b:1, why:"Even if he took it, he should ask the parents before showing identifiable children, especially in a deck he’ll share."},
      {t:"An image from the app’s built-in stock library, used within the library’s terms", b:0, why:"Stock libraries built into apps license their images for use in those apps, within their stated terms."}
    ]},
    {id:"t1u10-l3-x2", type:"mcq", q:"Ana wants to open her training session with the slide “People remember 10% of what they read but 90% of what they do”. What should she do?", options:[
      {t:"Drop it, or replace it with a claim she can trace to a real source; researchers found no study behind these percentages", ok:true, why:"The figures have been traced and found to be invented, and wrongly credited to Edgar Dale. A training session shouldn’t start with a myth."},
      {t:"Keep it, because it is widely quoted so it must be true", why:"Repetition doesn’t make a claim true. This one has been traced and debunked."},
      {t:"Keep it but change the numbers to look more precise, such as 11.5%", why:"That would make an invented statistic look even more trustworthy. The problem is the missing evidence, not the rounding."},
      {t:"Credit it to Edgar Dale so it sounds authoritative", why:"Dale’s Cone of Experience contained no percentages. Crediting him would add a false citation to a false claim."}
    ]},
    {id:"t1u10-l3-x3", type:"spot", q:"Kenji describes his chart slide. Tap the choices that make the chart harder to understand.", ask:"harder to understand", parts:[
      "Headline: ",
      {t:"“Sales data”", flag:true, why:"A topic, not a point. A headline such as “Online orders overtook shop sales in June” tells people what to see."},
      ". Chart: ",
      {t:"a 3D pie chart with nine slices", flag:true, why:"3D distorts slice sizes, and nine slices are hard to compare. A simple bar chart would show the comparison clearly."},
      ", ",
      {t:"the vertical axis starts at zero", flag:false, why:"Good practice for bar charts: lengths stay proportional to the values."},
      ", with ",
      {t:"a legend in a separate box at the bottom", flag:true, why:"People must match colours back and forth. Labelling parts directly is quicker to read."},
      " and ",
      {t:"alt text that states the main finding and key numbers", flag:false, why:"Exactly right for screen reader users."}
    ]},
    {id:"t1u10-l3-x4", type:"match", q:"Match each visual with the best alt text approach.", pairs:[
      ["A decorative swirl along the edge of every slide","Mark it as decorative","It carries no meaning, so screen readers should skip it."],
      ["A bar chart showing Sunday sales are highest","State the point and the key numbers","Listeners need the finding, not a description of colours and bars."],
      ["A photo of the team that runs the clinic","Say who is shown and what matters about it","For example: “The four nurses of the evening clinic team.”"],
      ["A screenshot showing where the Share button is","Describe what the screenshot shows the user to do","For example: “The Share button is at the top right, next to the profile picture.”"],
      ["The organisation’s logo on the title slide","The organisation’s name","The logo’s job is to identify the organisation, so its name is what matters."]
    ]},
    {id:"t1u10-l3-x5", type:"mcq", q:"Tomás inserted a video from his laptop’s Downloads folder as a link, then copied only the deck file to the venue’s computer. The video won’t play. What went wrong?", options:[
      {t:"The deck only pointed to the video’s location on his laptop, and the video wasn’t copied", ok:true, why:"A linked video isn’t inside the deck. On another computer the link points nowhere. Embed it, or copy the video alongside and relink it, and test on the presenting computer."},
      {t:"Presentation apps can’t play video at all", why:"They can. The problem is where this particular video was stored."},
      {t:"The venue’s screen is the wrong aspect ratio", why:"The aspect ratio affects the shape of the picture, not whether a video plays."},
      {t:"He needed to add captions first", why:"Captions matter for accessibility, but missing captions don’t stop a video playing."}
    ]},
    {id:"t1u10-l3-x6", type:"order", q:"Put the steps for turning a table of figures into a chart slide in order.", items:[
      {t:"Decide the one point the chart must make", why:"Everything else, from chart type to highlight, depends on the point."},
      {t:"Choose the simplest chart type that shows it (bars for comparing, a line for change over time)", why:"The point determines the chart, not the other way round."},
      {t:"Remove clutter: extra gridlines, unneeded legends, needless decimals", why:"Subtract what doesn’t help before adding emphasis."},
      {t:"In the cleaned-up chart, highlight the key bar or line and label it directly", why:"Emphasis on a clean chart makes the point stand out."},
      {t:"With the chart finished, write its point as the slide’s headline", why:"The headline confirms what the finished chart shows the audience."},
      {t:"Last of all, add alt text with the finding and key numbers", why:"Finally, make sure people who can’t see the chart get the same point."}
    ]},
    {id:"t1u10-l3-x7", type:"mcq", q:"Where is an animation most likely to help the audience rather than distract?", options:[
      {t:"Revealing the four steps of a process one at a time as Mei explains each", ok:true, why:"The movement has a purpose: people follow her explanation instead of reading ahead to step four."},
      {t:"Making every title spin in from a different direction", why:"Varied, spinning effects draw attention to the effect, not the content, and slow the talk."},
      {t:"A flashing “Important!” banner that blinks five times a second", why:"Flashing more than three times a second is a seizure risk under WCAG, and it distracts everyone else."},
      {t:"Bouncing clip art on the closing slide", why:"Decoration in motion pulls focus at the moment the call to action should be clearest."}
    ]}
   ],
   apply:{intro:"Add real visuals to your deck: a picture you are allowed to use, alt text, and one chart slide that makes a single point.", tasks:[
     {t:"Insert a picture you have permission to use, and credit it", app:{
       ms:["For your own photo: **Insert → Pictures** and choose your device.","Other sources under **Insert → Pictures** (such as stock images or online pictures) vary by version and subscription. For any image found online, open its source page and check the licence before using it.","Add a small credit line under the picture: title, author, source and licence (for example “Photo: K. Osei, Wikimedia Commons, CC BY 4.0”)."],
       google:["For your own photo: **Insert → Image → Upload from computer**.","For stock or web images: **Insert → Image → Stock & web**. Google says stock media is licensed for use in its apps, but for web images you must check the licence on the source page yourself.","Add a small credit line under the picture: title, author, source and licence."],
       libre:["Find an openly licensed image (for example on Wikimedia Commons or Openverse) and note its author and licence. Download it.","Choose **Insert → Image** and pick the file.","Add a small credit line with a text box under the picture: title, author, source and licence."],
       apple:["Drag a photo onto the slide, or choose **Insert → Choose** and pick a file. The **Media** button in the toolbar also opens your Photos library.","For images from the web, check the licence on the source page first.","Add a small credit line under the picture: title, author, source and licence."]
     }},
     {t:"Write alt text for the picture (or mark decoration as decorative)", app:{
       ms:["Right-click the picture and choose **View Alt Text** (in some versions **Edit Alt Text**).","Type one or two sentences about what matters in the picture. If PowerPoint has written a description for you, check and correct it.","For a purely decorative item, tick **Mark as decorative** instead."],
       google:["Right-click the picture and choose **Alt text**, or select it and press [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Y]] (on a Mac, [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:Y]]).","Type one or two sentences about what matters in the picture.","Some images get alt text automatically; Google advises checking that it is correct."],
       libre:["Select the picture and choose **Format → Alt Text** (in older versions it is called **Description**, also on the right-click menu).","Type one or two sentences about what matters in the picture, then **OK**."],
       apple:["Select the picture and open the **Format** sidebar.","On the **Image** tab, find **Description** and type one or two sentences about what matters in the picture."]
     }},
     {t:"Build one chart slide that makes one point", app:{
       ms:["Choose **Insert → Chart**, pick a **Clustered Column** or **Bar** chart, and type a few real numbers into the data sheet that opens (for example, attendance at five events).","Delete what doesn’t help: click the legend or gridlines and press [[kbd:Delete]].","Click one bar twice to select just that bar, and give it a stronger colour with **Format → Shape Fill**.","Type the point as the slide title, then add alt text to the chart."],
       google:["Choose **Insert → Chart → Bar** (or **Column**). Google creates a linked chart; click **Open source** on the chart to edit its numbers in Google Sheets.","Back in Slides, click **Update** on the chart to pull in your numbers.","In Sheets, use the chart editor’s **Customize** tab to remove the legend and change one bar’s colour, then update again.","Type the point as the slide title, then add alt text to the chart."],
       libre:["Choose **Insert → Chart**. A sample column chart appears; choose **View → Data Table** (or right-click → **Data Table**) to type your numbers.","Remove the legend with **Insert → Legend** (untick **Display legend**), and change one bar’s colour by selecting it and choosing **Format Data Point**.","Type the point as the slide title, then add alt text to the chart."],
       apple:["Click **Chart** in the toolbar and choose a 2D bar or column chart.","Click **Edit Chart Data** and type your numbers.","In the **Format** sidebar, turn off the legend. Keynote colours a whole data series, not a single bar, so make the key bar stand out another way: a value label or a short arrow and note beside it.","Type the point as the slide title. If your version offers a description field for the chart, fill it in; otherwise make sure the title and a short line of text state the point."]
     }}
   ], proof:"A slide with a picture you are allowed to use and a credit line, alt text you wrote yourself, and one chart slide whose headline states the point and whose key bar or line stands out."},
   read:[
     {book:"wss", where:"Chapter 6, Section 6.4 “Adding Visuals and Features to Microsoft PowerPoint Slides” and Section 6.7 “Adding Visuals and Features to Google Slides”"},
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”: “Spotlight on Ethics: Inclusivity and Presentations” (alt text, captions and verbal descriptions)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u10-l4", title:"Presenting: notes, rehearsal, nerves and online talks", minutes:55,
   goals:[
     "Write useful speaker notes and present with presenter view",
     "Rehearse aloud with a timer and cut a talk that runs long",
     "Use evidence-based ways to manage nerves",
     "Present online without sharing the wrong window or a pop-up notification, and turn on live captions",
     "Handle questions calmly, including ones you can’t answer"
   ],
   learn:[
    {h:"Speaker notes: prompts, not a script", body:[
      {lead:"Lesson 1 moved the detail off the slides. It goes into [[speaker-notes|speaker notes]]: text attached to each slide that you can see while presenting and the audience can’t."},
      "Notes work best as **prompts**: the point of the slide, the example you’ll use, a number you might forget, and the sentence that leads to the next slide. A full word-for-word script tempts you to read, and reading in a flat voice loses a room faster than any bad slide. Many speakers write the opening and the closing in full (those are the moments nerves hit hardest) and use prompts for the rest.",
      {ex:"Slide 2 · “We need 6 people”\n• Now: 4 regulars, 2 of them moving away in spring\n• Story: last Saturday, gate locked by 11 because nobody could stay\n• Ask: “Who walked past and saw it closed?”\n→ Next: “The good news is, it’s only two hours…”\n[2 min]", label:"Worked example: notes for one slide", mono:true},
      {warn:"Notes travel with the file. If you share the deck, people can read them. Never write anything in notes you wouldn’t say to the audience."}
    ]},
    {h:"Presenter view: two screens, two jobs", body:[
      "[[presenter-view|Presenter view]] shows *you* a control screen while the audience sees only the slide. In PowerPoint it shows the current slide, the next slide, your notes, a timer you can pause and reset, and the time of day, plus tools such as a pen, zoom, a slide overview and a button to black out the screen.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="m1041" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="6" y="6" width="328" height="200" rx="8" stroke-width="2"/><text x="170" y="26" text-anchor="middle">Your screen: presenter view</text><rect class="d-lup" x="18" y="40" width="170" height="96" rx="4" stroke-width="2"/><text x="103" y="92" text-anchor="middle">Current slide</text><rect class="d-gold" x="200" y="40" width="122" height="66" rx="4" stroke-width="2"/><text class="s" x="261" y="77" text-anchor="middle">Next slide</text><rect class="d-sage" x="200" y="114" width="122" height="22" rx="4" stroke-width="2"/><text class="s" x="261" y="130" text-anchor="middle">Timer 07:42</text><rect class="d-panel" x="18" y="146" width="304" height="50" rx="4" stroke-width="2"/><text class="s" x="28" y="166">Notes: story about the locked gate</text><text class="s" x="28" y="186">Tools: pen · zoom · black screen</text><path class="d-ink" d="M170,208 L170,236" stroke-width="2" marker-end="url(#m1041)"/><text class="s" x="180" y="226">audience sees only this</text><rect class="d-panel" x="36" y="240" width="268" height="134" rx="8" stroke-width="2"/><text x="170" y="260" text-anchor="middle">Projector or shared window</text><rect class="d-lup" x="66" y="272" width="208" height="92" rx="4" stroke-width="2"/><text x="170" y="323" text-anchor="middle">Current slide</text></svg>', alt:"Two screens. Top: your screen in presenter view, showing the current slide large, the next slide smaller, a timer reading 7 minutes 42, your notes (story about the locked gate) and tools (pen, zoom, black screen). An arrow points down to the second screen, labelled: audience sees only this. Bottom: the projector or shared window, showing only the current slide.", cap:"Presenter view on your screen; the slide alone on the projector, or in the window you share online."},
      "Each app has its own version:",
      {table:[
        ["App","How it works"],
        ["PowerPoint (desktop)","Tick **Use Presenter View** on the **Slide Show** tab. With a second display connected it starts automatically; with one screen, open it from the **…** button on the slide show control bar. **Display Settings → Swap Presenter View and Slide Show** fixes it if the screens come up the wrong way round."],
        ["Google Slides","Click the arrow next to **Slideshow** and choose **Presenter view**. The notes and timer open in a separate window you can move to your own screen."],
        ["LibreOffice Impress","The **Presenter Console** appears when two displays are connected (one can be the laptop’s own). Set it in **Slide Show → Slide Show Settings**."],
        ["Keynote","With a second display, Keynote shows a presenter display on your screen; **Play → Rehearse Slideshow** shows it on one screen for practice."]
      ]},
      {tip:"Learn three keys that work in most apps: arrow keys to move, a number then [[kbd:Enter]] to jump to a slide, and [[kbd:B]] to black the screen (press again to return). A black screen pulls attention back to you for a story or discussion."}
    ]},
    {h:"Rehearse out loud, with a timer", body:[
      "Reading notes silently is not rehearsing. Say the whole talk aloud, standing if you will stand, clicking through the slides, with a timer running. The first full run is usually longer than you expect, and the stumbles show you which transitions need work.",
      {list:[
        "**Rehearse at least once from start to finish without stopping**, even after mistakes. On the day you won’t get a second take.",
        "**Record yourself** with your phone or a webcam (the textbook recommends this too). You’ll notice filler words (“um”, “so”, “basically”), pacing and habits like turning your back to the room.",
        "**Use a tool if you like.** PowerPoint’s **Rehearse Timings** (desktop) and LibreOffice’s **Slide Show → Rehearse Timings** record how long you spend on each slide; Keynote has **Play → Rehearse Slideshow**; Google Slides’ presenter view has a timer. PowerPoint’s **Rehearse with Coach** (Speaker Coach) listens and reports on pace, filler words and whether you read slide text aloud. Microsoft says it currently understands English only, and your speech is sent to Microsoft to process it.",
        "**If the talk is too long, cut content; don’t speak faster.** Remove a whole point or merge slides. Rushed talks are harder to follow, and you will still overrun when nerves slow you down."
      ]},
      {ex:"Lucía’s slot is 12 minutes, with 2 minutes kept for questions, so she has 10 minutes of talking time. Her first timed run took 14 minutes 30 seconds, which is 14.5 minutes.\n\n14.5 − 10 = 4.5 minutes to cut. Her slide timings show the history section takes 3 minutes and adds little to her message, so it goes. She tightens two examples to save the rest.", label:"Worked example: cutting to fit"}
    ]},
    {h:"Nerves: what actually helps", body:[
      "Feeling nervous before speaking is extremely common, including among experienced speakers. Nerves aren’t a sign you’ll do badly. Some things have reasonable evidence behind them:",
      {list:[
        "**Prepare and rehearse in realistic conditions.** Practice makes the talk familiar, so less of your attention goes on remembering what comes next. Visit the room, or test the call software, beforehand if you can; the textbook advises practising in the same space and with the same technology where possible.",
        "**Know that nerves show less than you think.** Psychologists call this the “illusion of transparency”: we overestimate how visible our feelings are to others. In a 2003 study by Kenneth Savitsky and Thomas Gilovich, speakers who were simply told this gave speeches that observers rated better, and they felt calmer.",
        "**Reframe the feeling.** A racing heart is the same body response as excitement. In a 2014 study by Alison Wood Brooks, people who said “I am excited” before giving a speech were rated by observers as more persuasive and competent than those who said “I am calm”. It’s one line of research, but it is free to try.",
        "**Learn your first minute well.** Nerves peak at the start; a well-practised opening gets you moving.",
        "**Pause and breathe.** A pause feels long to you and normal to the audience. It also replaces filler words."
      ]},
      {tip:"If fear of speaking is severe, stops you doing things you need to do, or comes with panic attacks, it is worth talking to a doctor or counsellor. It is common and there are effective treatments; you don’t have to just push through."}
    ]},
    {h:"Presenting online", body:[
      "Online, the audience sees exactly what you share and nothing else. The most common problems are sharing too much (your whole screen, with email and messages popping up) or too little (presenter view instead of the slides, or a video with no sound).",
      {list:[
        "**Share a window or a tab, not your whole screen.** Most meeting apps let you choose. Google Meet, for example, lets you present a tab, a single window or the entire screen. Choose the window or tab that shows the slide show, not your presenter view or notes.",
        "**With one screen, run the slide show in a window**, so you can still see the meeting. In desktop PowerPoint: **Slide Show → Set Up Slide Show → Browsed by an individual (window)**. In Keynote: **Play → In Window**, then click **Play** (older versions: **Play Slideshow in Window**). Google Slides can be presented from its own browser tab, which you share.",
        "**Turn notifications off first.** Use **Do not disturb** on Windows (**Settings → System → Notifications**) or a **Focus** on Mac, iPhone and iPad, and close email and chat apps. Messages that pop up are shared with everyone.",
        "**Sound from videos needs an extra step.** In Google Meet, presenting a Chrome tab shares that tab’s audio; for a window or the whole screen you have to turn on system audio. Other apps have a similar “share sound” option.",
        "**Check before you start.** Ask one person, “Can you see the first slide?” Then look at the camera, not your own face, when you make a key point."
      ]},
      {warn:"Close or hide anything private before sharing: other browser tabs, desktop files, open documents. Even a window you share can show a list of recent files or a notification inside it."}
    ]},
    {h:"Live captions and subtitles", body:[
      "[[live-captions|Live captions]] turn your speech into on-screen text as you talk. They help people who are deaf or hard of hearing, people listening in a second language, and anyone in a noisy room or on a poor connection. Two of the four apps have them built in:",
      {table:[
        ["App","Live captions"],
        ["PowerPoint","**Slide Show → Subtitle Settings** to choose your spoken language, the caption language (a different one gives a translation) and the microphone; **Always Use Subtitles** turns them on for every show. Press [[kbd:J]] to toggle during a show. Microsoft lists more than 20 spoken languages (some still in preview) and more than 60 caption languages. It needs a reliable internet connection, and your speech is sent to Microsoft’s speech service."],
        ["Google Slides","While presenting, use **More options → Captions preferences → Toggle captions**, or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:C]] on a Mac). Needs Chrome, Edge or Safari, a microphone and internet. Google says captions aren’t stored and don’t include punctuation. Its help doesn’t list which spoken languages work, so test yours first."],
        ["LibreOffice Impress and Keynote","No built-in live captions. Use your meeting app’s captions, or your computer’s: **Live captions** on Windows 11 ([[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:L]]) or **Live Captions** on Macs with Apple silicon (in Accessibility settings; not available in every language or region)."]
      ]},
      "Automatic captions make mistakes, especially with names, technical terms and accents. Put key names and terms on your slides so people can check spellings, speak clearly with a decent microphone, and in an online meeting remind people they can turn on the meeting app’s own captions."
    ]},
    {h:"Questions and answers", body:[
      "Questions show the audience was listening. Prepare for them like any other part of the talk:",
      {list:[
        "**Predict the obvious questions** and prepare short answers. The textbook suggests a list of frequently asked questions. A **backup slide** after your closing slide (a detailed table, a map) can answer the one you’re sure will come.",
        "**Repeat or rephrase the question** before answering, so the whole room, the online audience and any recording hear it.",
        "**Answer briefly**, then check: “Does that answer it?”",
        "**It’s fine not to know.** “I don’t know, but I’ll find out and email you by Friday” is a professional answer, as long as you follow up. Guessing is not.",
        "**Online, ask someone to watch the chat** and read questions out, so you can keep presenting."
      ]},
      {key:"Confidence comes mostly from preparation: notes you can glance at, a talk you’ve said aloud, a tested set-up and a plan for questions."}
    ]}
   ],
   try:[
    {id:"t1u10-l4-x1", type:"match", q:"Match each part of presenter view with what it helps you do.", pairs:[
      ["Next slide preview","Lead smoothly into the next point","You can say “Now let’s look at the cost…” before it appears."],
      ["Timer","Keep to your time slot","You can see whether you’re ahead or behind at each slide."],
      ["Speaker notes","Remember examples and numbers without reading the slide","Prompts sit beside the slide where only you can see them."],
      ["Black screen button","Pull attention back to you for a story or discussion","With the screen blank, the audience looks at the speaker."],
      ["Slide overview (see all slides)","Jump to a backup slide during questions","You can go straight to the slide that answers a question."]
    ]},
    {id:"t1u10-l4-x2", type:"mcq", q:"Oluwaseun presents online with one laptop and a second monitor. Presenter view is on his laptop; the slides fill the monitor. When the meeting app asks what to share, what should he choose?", options:[
      {t:"The monitor, or the slide show window, that shows only the slides", ok:true, why:"The audience should see exactly what a room would see on a projector: the slide alone, not his notes."},
      {t:"His laptop screen, so they can see his notes too", why:"His notes are for him. Sharing presenter view shows the next slide and his prompts, and shrinks the slide."},
      {t:"His entire desktop across both screens", why:"That shares everything, including notifications and private windows, and makes the slide tiny."},
      {t:"Nothing; he should send the file and talk over it", why:"Then everyone moves through at their own pace and he can’t guide the talk."}
    ]},
    {id:"t1u10-l4-x3", type:"sort", q:"Sort these approaches to nerves: likely to help, or likely to backfire?", buckets:["Likely to help","Likely to backfire"], items:[
      {t:"Rehearsing aloud from start to finish with a timer", b:0, why:"Familiarity frees your attention and shows the real timing."},
      {t:"Skipping rehearsal to stay “fresh”", b:1, why:"Without rehearsal you discover the timing and the stumbles in front of the audience."},
      {t:"Reminding yourself that nerves show much less than they feel", b:0, why:"The illusion of transparency is well studied; in one experiment, knowing about it improved speeches."},
      {t:"Telling yourself “I am excited” instead of “calm down”", b:0, why:"In Brooks’s 2014 study, this reframing improved how persuasive and competent speakers seemed to observers."},
      {t:"Memorising every word, so any slip throws you completely", b:1, why:"A word-for-word script is fragile. Prompts let you recover when you lose a sentence."},
      {t:"Speaking faster when running late", b:1, why:"Rushing makes the talk hard to follow and raises the pressure. Cut a point instead."},
      {t:"Testing the room or the meeting software beforehand", b:0, why:"Fewer surprises means fewer reasons to panic. The textbook advises practising with the same room and technology where possible."}
    ]},
    {id:"t1u10-l4-x4", type:"number", q:"Lucía’s slot is 12 minutes, of which 2 minutes are for questions. Her timed rehearsal took 14 minutes 30 seconds. How many minutes of content must she cut? (Give a decimal, such as 1.5.)", answer:4.5, tol:0.05, unit:"minutes", why:"Talking time is 12 − 2 = 10 minutes. 14 minutes 30 seconds is 14.5 minutes. 14.5 − 10 = 4.5 minutes to cut.", wrongs:[
      {v:2.5, tol:0.05, why:"That compares her run with the whole 12-minute slot and forgets the 2 minutes for questions."},
      {v:4.3, tol:0.05, why:"30 seconds is half a minute, so 14 minutes 30 seconds is 14.5 minutes, not 14.3."},
      {v:2.3, tol:0.05, why:"Two slips: 30 seconds was read as 0.3 minutes, and the question time was forgotten."}
    ]},
    {id:"t1u10-l4-x5", type:"mcq", q:"Fatima will present her Google Slides deck in a meeting room. One colleague is hard of hearing. Which plan helps most?", options:[
      {t:"Turn on Slides’ live captions, test the microphone first, and put key names and terms on the slides", ok:true, why:"Captions show her words as she speaks, a tested microphone improves accuracy, and written terms help where automatic captions get names wrong."},
      {t:"Speak louder and skip the captions", why:"Volume alone may not be enough, and shouting is tiring for everyone. Captions give a text version of the talk."},
      {t:"Turn on captions and rely on them completely without checking", why:"Automatic captions make mistakes, especially with names and technical terms. They need a good microphone and back-up on the slides."},
      {t:"Email the slides afterwards instead", why:"Sending slides later is useful, but her colleague would miss the talk itself as it happens."}
    ]},
    {id:"t1u10-l4-x6", type:"order", q:"Put Amara’s steps for presenting online in a sensible order.", items:[
      {t:"Before opening anything else, close email and chat apps and turn on Do not disturb or a Focus", why:"Do this first, so nothing pops up once she starts sharing."},
      {t:"Open the deck and start the slide show in a window", why:"The slides need to be running before she can choose that window to share."},
      {t:"With the slide show ready, join the call and check her microphone and camera", why:"Sound and picture are checked before the talk starts, with the slides already waiting."},
      {t:"Share the slide show window (with sound on if she will play a video)", why:"She shares only that window, not the whole screen."},
      {t:"Ask one person whether they can see the first slide", why:"A quick check catches the wrong window or a frozen share before the talk is under way."},
      {t:"Present, with a colleague watching the chat for questions", why:"Someone else reads the chat so she can concentrate."}
    ]},
    {id:"t1u10-l4-x7", type:"mcq", q:"During questions, someone asks Kenji for a figure he doesn’t have. What is the most professional response?", options:[
      {t:"“I don’t have that figure with me. I’ll check and email it to you by Thursday.” Then he does.", ok:true, why:"Honest, specific and followed up. The audience trusts the rest of his talk more, not less."},
      {t:"Give his best guess as if it were the real figure", why:"A guess presented as fact can mislead decisions, and it damages trust if it turns out wrong."},
      {t:"Say the question is off-topic and move on", why:"It may well be relevant. Dismissing it makes the audience less willing to ask."},
      {t:"Skip ahead to finish early so there’s no time for questions", why:"Avoiding questions throws away the chance to clear up doubts about his message."}
    ]}
   ],
   apply:{intro:"Get ready to present your deck: notes, presenter view, a timed rehearsal, captions and a practice share. Practise somewhere you can talk aloud.", tasks:[
     {t:"Add speaker notes and open presenter view", app:{
       ms:["Show the notes area under the slide with **View → Notes**, and type short prompts for each slide.","Desktop PowerPoint: on the **Slide Show** tab, tick **Use Presenter View**, then choose **From Beginning**. With only one screen, start the show, click the **…** button on the control bar at the bottom left and choose **Show Presenter View**.","PowerPoint for the web: recent versions offer **Slide Show → Presenter View**, which opens in a separate browser window. If you don’t see it, rehearse from printed notes or use the desktop app.","Press [[kbd:Esc]] to end the show."],
       google:["Type short prompts for each slide in the speaker notes area under the slide (if it’s hidden, choose **View → Show speaker notes**).","Click the arrow next to **Slideshow** (top right) and choose **Presenter view**. A separate window shows your notes and a timer.","Press [[kbd:Esc]] to end the show."],
       libre:["Choose **View → Notes** and type short prompts under each slide. Return with **View → Normal**.","Choose **Slide Show → Slide Show Settings** and set **Presenter console** to **Full screen** or **Windowed**.","Connect a second display (a monitor or TV) and press [[kbd:F5]]. The Presenter Console only appears when two displays are connected.","Press [[kbd:Esc]] to end the show."],
       apple:["Choose **View → Show Presenter Notes** and type short prompts for each slide.","Choose **Play → Rehearse Slideshow** to see the presenter display (current and next slide, notes, clock and timer) on one screen.","With a second display connected, click **Play** in the toolbar: the presenter display appears on your screen and the slides on the other.","Press [[kbd:Esc]] to end."]
     }},
     {t:"Rehearse aloud with a timer, then cut if you overrun", write:"Run 1 time · Target talking time · Minutes to cut · What I cut · Run 2 time", app:{
       ms:["Desktop PowerPoint: **Slide Show → Rehearse Timings** starts the show with a timer for each slide. At the end, choose **No** if you don’t want the timings saved to the slides.","For feedback on pace and filler words, choose **Slide Show → Rehearse with Coach** (also in PowerPoint for the web with a free account; English only, and your speech is processed by Microsoft).","Note your total time and compare it with your talking time."],
       google:["Open **Presenter view** (arrow next to **Slideshow → Presenter view**) and use its timer.","Talk through the whole deck aloud, then note the total time and compare it with your talking time."],
       libre:["Choose **Slide Show → Rehearse Timings**. A timer shows in the corner; click it to move to the next slide.","At the end, note the total time and compare it with your talking time. (The timings are saved to the slides for automatic advance; turn this off in **Slide Show → Slide Show Settings** by choosing **Change slides manually** if you don’t want it.)"],
       apple:["Choose **Play → Rehearse Slideshow**. The presenter display shows a timer.","Talk through the whole deck aloud, then note the total time and compare it with your talking time."]
     }},
     {t:"Try live captions", appNote:"LibreOffice Impress and Keynote don’t have built-in live captions. Try your computer’s instead: on Windows 11 press [[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:L]] for **Live captions** (allow it to include microphone audio in its settings); on a Mac with Apple silicon, turn on **Live Captions** in **System Settings → Accessibility**. Or try the captions in your video-call app during a practice call.", app:{
       ms:["Choose **Slide Show → Subtitle Settings** and set **Spoken Language**, **Subtitle Language** and your microphone. (In PowerPoint for the web, use the arrow next to **Slide Show → Always Use Subtitles**.)","Start the slide show and press [[kbd:J]] (or use the subtitles button on the control bar) to toggle subtitles.","Say a sentence with a name or technical term in it, and note what the captions got wrong."],
       google:["Start presenting (**Slideshow**).","At the bottom left, choose **More options → Captions preferences → Toggle captions**, or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:C]] on a Mac). Allow microphone access if asked.","Say a sentence with a name or technical term in it, and note what the captions got wrong."]
     }},
     {t:"Do a practice share in a video call", how:["Start a video call with a friend, or alone in an app that lets you join from a second device such as your phone.","Turn on Do not disturb first: on Windows 11, **Settings → System → Notifications → Do not disturb**; on a Mac, open **Control Centre → Focus**; on iPhone or Android, use Do Not Disturb in quick settings.","Start your slide show in a window, then share only that window or tab.","On the other device, check that the slide is readable and that nothing private shows. If you have a video in the deck, check its sound comes through.","Stop sharing and note anything to fix."]}
   ], proof:"A deck with prompts in the notes, a timed run that fits your talking time (with what you cut written down), a test of live captions or your computer’s captions, and a practice share that showed only the slides."},
   read:[
     {book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”: “Key Presentation Skills”"},
     {book:"wss", where:"Chapter 7, Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”: “Finalizing Your Slideshow”, “Speaker’s Notes”, “Audience Interaction and Questions”, “Room Setup and Technology” and “Fully Virtual Meetings”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u10-l5", title:"Accessible and shareable decks", minutes:55,
   goals:[
     "Run your app’s accessibility checker and check by hand what it can’t",
     "Give every slide a unique title and a sensible reading order",
     "Make sure colour is never the only signal, and caption media",
     "Choose between sharing a link, a file, a PDF or a handout, and keep file sizes manageable",
     "Pick the right aspect ratio (16:9 or 4:3) before you build"
   ],
   learn:[
    {h:"Who accessible slides are for", body:[
      {lead:"Your deck will meet more people than the ones in the room: colleagues reading it later on a phone, someone using a screen reader, someone who can’t tell red from green, someone watching a recording without sound."},
      "Accessible slides work for all of them. Most of the work is habits you’ve already met in this unit: titles in placeholders (Lesson 2), strong contrast (Lesson 2), alt text and captions (Lesson 3). This lesson adds the checks, and then the choices you make when the deck leaves your hands.",
      {table:[
        ["Who","What helps"],
        ["People using screen readers","Slide titles, alt text, a logical reading order, meaningful link text"],
        ["People with low vision","Large text, strong contrast, slides that work when zoomed"],
        ["People with colour vision deficiency","Colour plus a label, pattern or shape"],
        ["People who are deaf or hard of hearing","Captions on videos, live captions, key words on slides"],
        ["Everyone, later, on a small screen","A PDF or link that opens anywhere, with readable text"]
      ]}
    ]},
    {h:"Run the checker, then check what it can’t", body:[
      "Some apps include an accessibility checker that scans the deck for common problems:",
      {table:[
        ["App","Built-in checker"],
        ["PowerPoint","Yes: **Review → Check Accessibility** opens the Accessibility pane, in desktop PowerPoint and PowerPoint for the web. Microsoft says it also runs in the background and shows a reminder in the status bar."],
        ["LibreOffice Impress","No full checker (LibreOffice Writer has **Tools → Accessibility Check**; Impress’s help doesn’t list one). Check by hand. Exporting a PDF with **Universal Accessibility (PDF/UA)** ticked makes a more accessible PDF and, in some versions, warns about problems."],
        ["Google Slides","No built-in checker; check by hand (the list below)"],
        ["Keynote","No built-in checker; check by hand (the list below)"]
      ]},
      "A checker finds things a computer can detect: a picture with no alt text, a slide with no title, complicated tables. It can’t judge meaning. Even PowerPoint’s checker, Microsoft says, misses some contrast problems. So every deck needs a short human check as well:",
      {list:[
        "Does every slide have a **unique title** that says what the slide is about?",
        "Does each piece of **alt text** describe what matters, correctly?",
        "Is any meaning carried **by colour alone**?",
        "Is all text readable: **contrast** at least 4.5:1 (3:1 for large text), and big enough?",
        "Do **videos have captions**, and are they accurate?",
        "Does **link text** say where it goes (“the volunteer rota”) rather than “click here”?",
        "Are **tables** simple, with a header row? Microsoft’s guidance is to avoid tables where you can, and to avoid merged or split cells when you can’t."
      ]}
    ]},
    {h:"Titles and reading order", body:[
      "Screen reader users often move through a deck by slide titles, the way sighted people skim headings. Microsoft recommends **a unique, descriptive title on every slide, even if it isn’t visible**. If a design needs a slide without a visible title (a full-screen photo), keep the title placeholder but move it just off the edge of the slide: it still counts as the title, but nobody sees it.",
      "Within a slide, a screen reader reads objects in its [[reading-order|reading order]], which is usually the order the objects were **added**, not where they sit. A caption added first will be read before the title. Loose text boxes and pasted pictures make this worse.",
      {fig:'<svg viewBox="0 0 340 386"><text x="170" y="18" text-anchor="middle">In the order they were added</text><rect class="d-panel" x="10" y="28" width="320" height="140" rx="6" stroke-width="2"/><rect class="d-lup" x="24" y="38" width="292" height="28" rx="3"/><text class="s" x="170" y="57" text-anchor="middle">Title</text><rect class="d-panel" x="24" y="74" width="130" height="50" rx="3" stroke-width="2"/><text class="s" x="96" y="103" text-anchor="middle">Photo</text><rect class="d-gold" x="166" y="74" width="150" height="80" rx="3"/><text class="s" x="248" y="118" text-anchor="middle">Body text</text><rect class="d-sage" x="24" y="130" width="130" height="24" rx="3"/><text class="s" x="96" y="147" text-anchor="middle">Caption</text><circle class="d-rose" cx="40" cy="52" r="10" stroke-width="2"/><text class="s" x="40" y="56" text-anchor="middle">4</text><circle class="d-rose" cx="40" cy="88" r="10" stroke-width="2"/><text class="s" x="40" y="92" text-anchor="middle">1</text><circle class="d-rose" cx="182" cy="88" r="10" stroke-width="2"/><text class="s" x="182" y="92" text-anchor="middle">3</text><circle class="d-rose" cx="40" cy="142" r="10" stroke-width="2"/><text class="s" x="40" y="146" text-anchor="middle">2</text><text class="s" x="170" y="186" text-anchor="middle">Heard: photo, caption, body, title</text><text x="170" y="208" text-anchor="middle">After fixing the reading order</text><rect class="d-panel" x="10" y="218" width="320" height="140" rx="6" stroke-width="2"/><rect class="d-lup" x="24" y="228" width="292" height="28" rx="3"/><text class="s" x="170" y="247" text-anchor="middle">Title</text><rect class="d-panel" x="24" y="264" width="130" height="50" rx="3" stroke-width="2"/><text class="s" x="96" y="293" text-anchor="middle">Photo</text><rect class="d-gold" x="166" y="264" width="150" height="80" rx="3"/><text class="s" x="248" y="308" text-anchor="middle">Body text</text><rect class="d-sage" x="24" y="320" width="130" height="24" rx="3"/><text class="s" x="96" y="337" text-anchor="middle">Caption</text><circle class="d-sage" cx="40" cy="242" r="10" stroke-width="2"/><text class="s" x="40" y="246" text-anchor="middle">1</text><circle class="d-sage" cx="182" cy="278" r="10" stroke-width="2"/><text class="s" x="182" y="282" text-anchor="middle">2</text><circle class="d-sage" cx="40" cy="278" r="10" stroke-width="2"/><text class="s" x="40" y="282" text-anchor="middle">3</text><circle class="d-sage" cx="40" cy="332" r="10" stroke-width="2"/><text class="s" x="40" y="336" text-anchor="middle">4</text><text class="s" x="170" y="376" text-anchor="middle">Heard: title, body, photo, caption</text></svg>', alt:"The same slide twice, with a title across the top, a photo on the left, body text on the right and a caption under the photo. Numbers on each object show the order a screen reader reads them. Top, in the order they were added: 1 photo, 2 caption, 3 body text, 4 title, so a listener hears the title last. Bottom, after fixing the reading order: 1 title, 2 body text, 3 photo, 4 caption.", cap:"The slide looks identical both times. Only the reading order changed, and only a listener would notice."},
      "In PowerPoint, fix it in the **Reading Order** pane: **Review → Check Accessibility**, then under **Warnings** choose **Check reading order** and, from a slide’s drop-down arrow, **Verify object order**. Objects are listed in the order they will be read; drag them, or use **Move Up** and **Move Down**. Clearing an item’s check box marks it as decorative, so it is skipped. The other apps have no reading order pane, so the safest habit is to use layouts and placeholders, add objects in a sensible order, and test with a screen reader (Narrator on Windows, VoiceOver on Mac and iPhone, TalkBack on Android, ChromeVox on Chromebooks)."
    ]},
    {h:"Colour is never the only signal", body:[
      "Colour vision deficiency (often called colour blindness) is common, especially among men, and most often makes reds and greens hard to tell apart. A chart where “on target” is green and “behind” is red, with no other difference, gives them nothing. Neither does a projector that washes out colours.",
      {list:[
        "**Add a second signal**: a label (“behind”), a symbol (✓ ✗), a pattern, a position or bold text.",
        "**Label chart lines and bars directly**, rather than relying on a colour legend.",
        "**Test in greyscale.** Microsoft suggests turning on a colour filter: on Windows, **Settings → Accessibility → Color filters**, choose **Grayscale**, and look through the slides. If something stops making sense, colour was doing all the work."
      ]},
      {tip:"Underline links in body text, or make them otherwise obvious. Link text in a different colour alone is a colour-only signal."}
    ]},
    {h:"PDFs, handouts and the HTML view", body:[
      "A **PDF** is the usual way to share a deck for reading: it opens on almost any device, the layout and fonts stay fixed, and it can’t be accidentally edited. But animations, transitions, video and sound don’t survive, and accessibility depends on how it was made. In desktop PowerPoint for Windows, **File → Export → Create PDF/XPS Document → Options** has a **Document structure tags for accessibility** setting, which keeps the titles, reading order and alt text a screen reader needs. LibreOffice’s PDF export has a **Universal Accessibility (PDF/UA)** option.",
      "A [[handout]] is a version for people to keep or print: several slides per page, or each slide with its notes or lines for writing. It’s where the detail you removed from the slides can live.",
      {table:[
        ["App","PDF","Handout layouts"],
        ["PowerPoint","**File → Export → Create PDF/XPS Document** (desktop); **File → Print** in PowerPoint for the web creates a printable PDF","In the PDF **Options**, set **Publish what** to **Handouts** and choose slides per page"],
        ["Google Slides","**File → Download → PDF document**","**File → Print settings and preview**, then **Handout** or **1 slide with notes**"],
        ["LibreOffice Impress","**File → Export as → Export as PDF**","**File → Print**, **LibreOffice Impress** tab, set **Document** to **Handouts**"],
        ["Keynote","**File → Export To → PDF** (option to include presenter notes)","**File → Print**, then choose **Handout**"]
      ]},
      "Google Slides has one more option worth knowing: its **HTML view** shows the whole presentation as a single scrollable web page, which can be easier for screen reader users ([[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Shift]] + [[kbd:P]] on Windows and ChromeOS).",
      {warn:"Before sharing any version, look through the speaker notes, comments and any hidden slides. They travel with the file, and notes can also appear in PDFs and handouts if you choose those layouts. In desktop PowerPoint, **File → Info → Check for Issues → Inspect Document** can find and remove notes, comments and personal information."}
    ]},
    {h:"Share a link or send a file?", body:[
      "Unit 2 covered cloud sharing and permissions ({{sharing-permissions}}). For decks, the choice looks like this:",
      {table:[
        ["","Share a link","Send a file or PDF"],
        ["Copies","One live copy; everyone sees the latest","A snapshot; copies multiply and drift apart"],
        ["Control","You choose view, comment or edit, and can remove access later","Once sent, you can’t take it back or update it"],
        ["Needs","Internet, and sometimes an account","Nothing but an app or PDF reader; works offline"],
        ["Size","No attachment limit","Big decks can bounce off email attachment limits"],
        ["Good for","Working together, decks that will change","A final version, people outside your organisation, archives"]
      ]},
      "Google Slides, PowerPoint (saved in OneDrive) and Keynote (through iCloud) all share by link, and each lets you choose whether people can view or edit. LibreOffice has no sharing service of its own: save the file to any cloud storage and share it from there. When you share a link, check its setting: “anyone with the link” means exactly that.",
      {tip:"Sharing a **view-only link** to the live deck and attaching a **PDF** for people who prefer a file covers almost everyone."}
    ]},
    {h:"File size and embedded media", body:[
      "Photos straight from a phone camera and [[embedded-media|embedded]] videos are what make decks huge. Big files are slow to open, slow to sync, and often too big to email: every email service limits the size of attachments, and a deck with video easily goes over.",
      {ex:"Ana embeds a 2-minute video that plays at 8 megabits per second (Mbps).\n\n2 minutes = 120 seconds.\n120 s × 8 megabits per second = 960 megabits.\n960 megabits ÷ 8 bits per byte = 120 megabytes (MB).\n\nThat one video makes the deck about 120 MB: far too big to email. She links to the video in the cloud instead, or trims and compresses it.", label:"Worked example: why one video can sink an email"},
      {list:[
        "**Compress pictures.** Desktop PowerPoint: select a picture, then **Picture Format → Compress Pictures**. LibreOffice: right-click a picture → **Compress**, or for the whole deck **Tools → Minimize Presentation** (called **Presentation Minimizer** in some versions). Keynote: **File → Reduce File Size**.",
        "**Compress or link video.** Desktop PowerPoint for Windows has **File → Info → Compress Media** (remember from Lesson 3: it removes captions). Linking to an online video keeps the file small but needs internet.",
        "**Fonts.** If you use a font the other computer doesn’t have, the app swaps in another and text can spill out of its boxes. Use common fonts, or in desktop PowerPoint for Windows tick **File → Options → Save → Embed fonts in the file**. A PDF keeps the fonts fixed."
      ]}
    ]},
    {h:"Aspect ratio: 16:9 or 4:3", body:[
      "The [[aspect-ratio|aspect ratio]] is a slide’s shape: width compared with height. **16:9** (widescreen) matches most modern TVs, laptops and projectors, and is the default in PowerPoint and most other apps. **4:3** is squarer; it suits some older projectors and is close to the shape of a printed page or tablet. Google Slides also offers 16:10 (common on laptops) and custom sizes.",
      {fig:'<svg viewBox="0 0 340 360"><text x="170" y="18" text-anchor="middle">16:9 slide on a 4:3 screen</text><rect class="d-panel" x="70" y="28" width="200" height="150" stroke-width="2"/><rect class="d-softf" x="70" y="28" width="200" height="19"/><rect class="d-softf" x="70" y="159" width="200" height="19"/><rect class="d-lup" x="70" y="47" width="200" height="112" stroke-width="2"/><text x="170" y="108" text-anchor="middle">slide</text><text x="170" y="206" text-anchor="middle">4:3 slide on a 16:9 screen</text><rect class="d-panel" x="50" y="216" width="240" height="135" stroke-width="2"/><rect class="d-softf" x="50" y="216" width="30" height="135"/><rect class="d-softf" x="260" y="216" width="30" height="135"/><rect class="d-lup" x="80" y="216" width="180" height="135" stroke-width="2"/><text x="170" y="288" text-anchor="middle">slide</text></svg>', alt:"Two screens. Top: a widescreen 16 by 9 slide shown on a squarer 4 by 3 screen fills the width but leaves empty bands above and below. Bottom: a 4 by 3 slide shown on a widescreen 16 by 9 screen fills the height but leaves empty bands at the left and right.", cap:"A mismatched slide still shows everything, but with empty bands, so the slide looks smaller than it could."},
      "A mismatch doesn’t hide content; the screen simply adds empty bands and the slide looks smaller. Changing the ratio *after* building is the real problem: every slide changes at once (PowerPoint can’t resize just one slide), and the app must stretch, shrink or crop. PowerPoint asks whether to **Maximize** (content may spill off the slide) or **Ensure Fit** (content shrinks). Either way, check every slide afterwards.",
      {key:"Ask about the screen before you build: choose 16:9 unless you know the screen is 4:3. Then check accessibility, look through the notes, and share the version that fits how people will use it."}
    ]}
   ],
   try:[
    {id:"t1u10-l5-x1", type:"sort", q:"PowerPoint’s Accessibility Checker is running. Which of these problems can it find for you, and which must a person check?", buckets:["The checker can flag it","A person must check"], items:[
      {t:"A picture with no alt text at all", b:0, why:"Missing alt text is exactly what checkers look for."},
      {t:"A slide with no title", b:0, why:"Checkers flag slides without a title, because screen reader users navigate by them."},
      {t:"A table with merged cells", b:0, why:"Microsoft says the checker can flag split, merged or nested cells."},
      {t:"Alt text that describes the wrong part of the picture", b:1, why:"The checker sees that alt text exists, but can’t judge whether it’s accurate or useful."},
      {t:"A chart where red and green are the only difference between two lines", b:1, why:"Whether meaning depends on colour alone needs human judgement; try a greyscale view."},
      {t:"Automatic captions that misspell people’s names", b:1, why:"Only a person can check captions are accurate."}
    ]},
    {id:"t1u10-l5-x2", type:"number", q:"Dmitri embeds a 3-minute video that plays at 6 megabits per second. Roughly how many megabytes (MB) does it add to his deck?", answer:135, tol:2, unit:"MB", why:"3 minutes = 180 seconds. 180 × 6 megabits per second = 1,080 megabits. Divide by 8 bits per byte: 1,080 ÷ 8 = 135 MB.", wrongs:[
      {v:1080, tol:5, why:"That’s the size in megabits. Divide by 8, because there are 8 bits in a byte."},
      {v:18, tol:1, why:"That multiplies 3 minutes by 6 without turning minutes into seconds. The rate is per second, so use 180 seconds."},
      {v:2.25, tol:0.1, why:"That forgets to convert minutes into seconds (3 × 6 = 18) and then divides by 8. Use 180 seconds."}
    ]},
    {id:"t1u10-l5-x3", type:"match", q:"Match each goal with the best way to share the deck.", pairs:[
      ["Three volunteers will keep editing the slides together this week","A link with edit permission","One live copy, so everyone works on the latest version."],
      ["The committee should be able to look but not change anything","A view-only link","They always see the latest version and can’t edit it."],
      ["The final version must be archived exactly as presented","A PDF","A PDF fixes the layout and fonts and can’t be accidentally edited."],
      ["People want to take notes on paper during the talk","A printed handout with lines for notes","Handout layouts put several slides on a page with space to write."]
    ]},
    {id:"t1u10-l5-x4", type:"spot", q:"Hana is about to email her deck to a partner organisation. Tap the problems she should fix first.", ask:"fix first", parts:[
      "Attached: ",
      {t:"the 180 MB deck with two embedded videos", flag:true, why:"Far over most email attachment limits. Share a link, link the videos, or compress them."},
      ". ",
      {t:"Every slide has its own title", flag:false, why:"Good for screen reader users and for anyone skimming."},
      ". Speaker notes still say ",
      {t:"“don’t mention the budget cut yet”", flag:true, why:"Notes travel with the file. Remove anything not meant for the recipients, or send a PDF without notes."},
      ". ",
      {t:"Alt text written for every chart", flag:false, why:"Exactly what people using screen readers need."},
      ". The link on the last slide says ",
      {t:"“click here”", flag:true, why:"Link text should say where it goes, such as “the partnership agreement”, so it makes sense read on its own."},
      "."
    ]},
    {id:"t1u10-l5-x5", type:"mcq", q:"Priya’s 16:9 deck is shown on an older 4:3 projector at the village hall. What will happen?", options:[
      {t:"The whole slide shows, with empty bands above and below, so it looks a little smaller", ok:true, why:"A 16:9 slide fits the width of a 4:3 screen, leaving bands top and bottom. Nothing is cut off."},
      {t:"The left and right edges of every slide are cut off", why:"Presentation software scales the slide to fit; it doesn’t crop it."},
      {t:"The slides won’t display at all", why:"Mismatched ratios still display; they just don’t fill the screen."},
      {t:"All her text will be stretched taller", why:"The slide keeps its proportions; it isn’t distorted."}
    ]},
    {id:"t1u10-l5-x6", type:"mcq", q:"A screen reader user says Mei’s slide is read as “photo, caption, body text, title”. What should she do?", options:[
      {t:"Reorder the objects so the title is read first, using the Reading Order pane in PowerPoint (or rebuild with placeholders in other apps)", ok:true, why:"Screen readers follow the reading order, which reflects the order objects were added. Fixing it puts the title first without changing the look."},
      {t:"Move the title lower on the slide", why:"Position on the slide doesn’t set the reading order, so this changes the look but not what is heard."},
      {t:"Make the title bigger and bold", why:"Formatting doesn’t change the reading order."},
      {t:"Delete the caption", why:"That loses information and leaves the title still read after the photo."}
    ]},
    {id:"t1u10-l5-x7", type:"mcq", q:"Kenji’s chart shows “on track” projects in green and “late” projects in red, and nothing else. What is the best fix?", options:[
      {t:"Add a second signal, such as the words “on track” and “late” or a ✓ and ✗, next to each bar", ok:true, why:"Then the meaning survives for people with colour vision deficiency, on washed-out projectors and in greyscale printouts."},
      {t:"Use brighter red and green", why:"Brightness doesn’t help people who can’t tell red from green; the meaning still depends on colour alone."},
      {t:"Add a colour legend in the corner", why:"A legend still relies on matching colours, which is the problem."},
      {t:"Swap red and green", why:"The two colours are just as hard to tell apart either way round."}
    ]}
   ],
   apply:{intro:"Finish your deck for sharing: an accessibility check, a PDF and a handout, a link with the right permission, and a check of shape and size.", tasks:[
     {t:"Run an accessibility check and fix what it finds", app:{
       ms:["Choose **Review → Check Accessibility** (desktop PowerPoint or PowerPoint for the web).","Work through the **Errors** and **Warnings** in the pane. Select an item to jump to it; many have a recommended fix.","Then do the human checks: titles that say what each slide is about, correct alt text, nothing shown by colour alone, captions on videos."],
       google:["Google Slides has no built-in checker, so check by hand.","Click each slide: does it have its own title in the title placeholder?","Right-click each picture and choose **Alt text**: is there a correct description?","Check contrast with a contrast checker, look for anything shown by colour alone, and check that link text says where it goes."],
       libre:["Impress has no full accessibility checker, so check by hand. (The PDF/UA export in the next task may also warn about some problems, depending on your version.)","Click each slide: does it have its own title in the title placeholder? Select each picture and check its alt text (**Format → Alt Text**, or **Description** in older versions).","Then do the other human checks: titles that say what each slide is about, correct alt text, nothing shown by colour alone, captions on videos."],
       apple:["Keynote has no built-in checker, so check by hand.","Click each slide: does it have a title?","Select each picture and check its **Description** on the **Image** tab of the **Format** sidebar.","Check contrast with a contrast checker, look for anything shown by colour alone, and check that link text says where it goes."]
     }},
     {t:"Export a PDF and a handout", app:{
       ms:["Desktop PowerPoint for Windows: **File → Export → Create PDF/XPS Document → Create PDF/XPS**. Click **Options**, make sure **Document structure tags for accessibility** is ticked, then **Publish**.","For a handout, repeat with **Options → Publish what → Handouts** and choose the slides per page.","PowerPoint for the web: **File → Print** creates a printable PDF you can save."],
       google:["**File → Download → PDF document** saves a PDF of the slides.","For a handout: **File → Print settings and preview**, choose **Handout** (or **1 slide with notes**), then **Print**. To get a file, choose **Save as PDF** as the printer."],
       libre:["**File → Export as → Export as PDF**. On the **General** tab, tick **Universal Accessibility (PDF/UA)**, then **Export**. If it lists any accessibility problems, fix them and export again.","For a handout: **File → Print**, open the **LibreOffice Impress** tab, set **Document** to **Handouts** and choose the slides per page. Print to PDF if you want a file."],
       apple:["**File → Export To → PDF**. Choose whether to include presenter notes, then **Save**.","For a handout: **File → Print**, choose **Handout** and the number of slides per page. Use **PDF** in the print dialog to save it as a file."]
     }},
     {t:"Share a link with the right permission", appNote:"LibreOffice Impress has no sharing service of its own. Save the file (as .odp, or .pptx if the other person uses PowerPoint) to a cloud storage service such as Google Drive, OneDrive, iCloud Drive or Nextcloud, and share it from there with view or edit permission.", app:{
       ms:["Save the deck to OneDrive (PowerPoint for the web does this automatically).","Click **Share**. Choose who the link works for, and whether they **can view** or **can edit**.","Click **Copy link** and paste it where you need it."],
       google:["Click **Share** (top right).","Under **General access**, choose **Restricted** (only people you add) or **Anyone with the link**, and set **Viewer**, **Commenter** or **Editor**.","Click **Copy link**."],
       apple:["Click the **Share** button in the toolbar (named **Collaborate** in some older versions). The deck must be saved in iCloud Drive to share a live link.","Choose to share a live link (collaborate) rather than send a copy. Set who can access it (**Only invited people** or **Anyone with the link**) and the permission (**Can make changes** or **View only**).","Send the invitation, or copy the link and paste it where you need it."]
     }},
     {t:"Check the slide shape and the file size", how:["Find your slide size: **Design → Slide Size** (PowerPoint), **File → Page setup** (Google Slides), **Slide → Slide Properties** (LibreOffice Impress) or the **Document** sidebar (Keynote). Is it the shape of the screen you will use?","Find the file size: in your computer’s file manager, or the file details in your cloud storage.","If it is too big to email or slow to open, compress pictures (see the list in this lesson), link large videos instead of embedding them, and check the size again."], write:"Slide shape · screen shape · file size before · file size after"}
   ], proof:"A checked deck (checker run or manual list completed), a PDF and a handout, a link shared with the right permission, and the slide shape and file size written down."},
   read:[
     {book:"wss", where:"Chapter 7, Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”: “Printing a Presentation” and “Accessibility and Languages”"},
     {book:"wss", where:"Chapter 7, Section 7.4 “Preparing a Google Slides Collection for Presentation” (media, sharing settings and comments in Slides)"}
   ]
  }
  ],
  checkpoint:["t1u10-q02","t1u10-q05","t1u10-q11","t1u10-q14","t1u10-q17","t1u10-q21","t1u10-q24","t1u10-q28","t1u10-q31","t1u10-q36","t1u10-q40","t1u10-q44"],
  codex:[
   {id:"presentation-planning", title:"Planning a presentation", aka:["audience analysis","main message","storyboard","presentation structure"], tags:["presentations","planning"],
    summary:"Decide who is listening, what should change, and the one message, then storyboard the talk on paper before building slides.",
    levels:{
     starter:[
      "A presentation is a person talking to an audience, with slides as a visual aid. The slides help; the speaker explains. So the planning starts with the talk, not the app.",
      {ol:["**Audience:** who are they, what do they know, what do they care about?","**Purpose:** what should they do or think afterwards?","**Main message:** one sentence that makes a claim, such as “Six more volunteers would keep the garden open on Saturdays”.","**Structure:** an opening that gets attention, three to five key points, and a close that repeats the message and says what to do next.","**Storyboard:** one box per slide on paper, each with a headline, a sketch and what you’ll say."]},
      "Then check the time: subtract time for questions, and plan roughly one slide per minute of talking as a starting point.",
      {key:"If the headlines of your storyboard tell the story on their own, the plan works."}
     ],
     builder:[
      "The OpenStax *Workplace Software and Skills* textbook defines a presentation’s purpose from the audience’s side: it is the action you want them to take. It names four broad kinds, which shape tone and design:",
      {table:[["Kind","Aim"],["Informational","Understanding of facts"],["Instructional","A skill people can use"],["Persuasive","A decision or action"],["Inspirational","Motivation"]]},
      "A **main message** differs from a topic. “The bakery’s Sunday trial” is a topic; “Opening on Sundays would pay for itself within a year” is a message the audience can accept, question or act on.",
      "Common structures: problem → cause → solution → next step (persuasion); step by step (instruction); past → present → future (updates); option A vs option B → recommendation (decisions).",
      "The textbook suggests a hook (a story, question or compelling statistic) to open, and a close that reinforces three to five key points, often with a call to action. A **storyboard** turns that plan into boxes you can rearrange; the textbook describes it as dividing a story into impactful moments.",
      "Timing: the textbook suggests about a minute per slide, and fifteen to twenty seconds for picture-only slides. Treat it as a rough guide and rehearse aloud to find the real number.",
      "**Audience questions worth writing down:** who they are, how many, how they will attend (in the room, online or both), what they already know, what they worry about and what they are likely to ask. The answers decide your vocabulary, your examples and how much background to give."
     ],
     pro:[
      "Experienced presenters often write the storyboard as **headline sentences**: each slide’s title is a full claim (“Sunday sales doubled in the trial”), and the body is the evidence for it, often a single visual. This is sometimes called the assertion-evidence approach. A useful test is to read only the headlines: they should form a coherent summary of the talk.",
      {list:["**Know what to leave out.** Detail that doesn’t serve the purpose goes to a handout, an appendix or a backup slide for questions.","**Plan for the format.** Online audiences have more distractions and smaller screens; hybrid talks need someone watching the chat and a plan for remote questions.","**Separate reading decks from talk decks.** A deck that must stand alone (sent round, no speaker) needs full sentences. It is really a document in slide form, and a document or PDF is often the better format.","**Budget time from the end.** Fix the questions slot and closing first, then fit the content into what remains. When cutting, remove whole points rather than speeding up."]},
      "Check every claim in the message and key points. A talk spreads a false number to a whole room at once, and the audience can’t see your sources unless you show them.",
      "Short talks need the most discipline. In a three-minute update there is no time to wander, so the main message, one or two points and the call to action are all there is room for."
     ]
    },
    related:["slide-design","presenting-skills","slide-visuals","lateral-reading"],
    read:[{book:"wss", where:"Chapter 6, Section 6.1 “Presentation and Design Essentials”"},{book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”"}],
    sources:[{t:"OpenStax: Workplace Software and Skills, 7.1 Effective Presentation Skills", url:"https://openstax.org/books/workplace-software-skills/pages/7-1-effective-presentation-skills"},{t:"Workplace Software and Skills (LibreTexts mirror): 6.1 Presentation and Design Essentials", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/06%3A_Preparing_Presentations/6.01%3A_Presentation_and_Design_Essentials"}], checked:"2026-11"},

   {id:"slide-design", title:"Slide design basics", aka:["contrast","font size","white space","text-heavy slides","design principles"], tags:["presentations","design","accessibility"],
    summary:"Readable slides come from strong contrast, large plain text, alignment, white space and consistency, with detail moved off the slide.",
    levels:{
     starter:[
      "Good slide design is mostly about being easy to read and easy to follow:",
      {list:["**Contrast:** dark text on a light background, or the reverse. Light grey on white is hard to read, especially on a projector.","**Size:** text big enough for the back of the room. Microsoft suggests 18 point or larger.","**Plain fonts:** familiar sans serif fonts such as Arial or Calibri, no long runs of capitals.","**Alignment and space:** line things up and leave empty space around them.","**Consistency:** titles in the same place, the same fonts and colours on every slide."]},
      "Keep words to headlines, labels and key numbers. If a slide is full of sentences, people read instead of listening. Put the detail in your notes or a handout.",
      {tip:"Test from a distance: stand at the back of the room, or look at a slide on a phone at arm’s length."}
     ],
     builder:[
      "**Contrast can be measured.** WCAG 2.2 success criterion 1.4.3 (level AA) requires a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text, defined as at least 18 point or 14 point bold. WCAG also asks for 3:1 for meaningful graphics such as chart lines and icons. Ratios run from 1:1 to 21:1, aren’t rounded (4.499:1 fails), and are checked with a tool such as a contrast checker.",
      "**Microsoft’s accessibility guidance for PowerPoint** adds: use 18 pt or larger, sans serif fonts and enough white space; avoid all capitals and excessive italics or underlining; don’t rely on colour alone; start from a predesigned theme. It warns that its checker misses some contrast problems, such as text in transparent boxes over a background.",
      "**Design principles** from the textbook: proximity (group related items), alignment, repetition (consistent styling), contrast (make important things different) and white space. Google’s accessibility help adds that justified text is harder to read than left-aligned.",
      "**Text-heavy slides** split attention: the audience reads ahead and stops listening. Microsoft’s Speaker Coach flags presenters who read slide text aloud.",
      "**Consistency** comes from the theme: use its fonts and colour slots rather than formatting each slide by hand (see {{slide-layouts-masters}}). One or two font families and a small palette are plenty for most decks."
     ],
     pro:[
      "**Projectors and rooms.** WCAG thresholds were written for screens viewed up close. Projectors in lit rooms reduce effective contrast, so treat 4.5:1 as a floor and aim well above it. Avoid mid-tone backgrounds and text over busy photos; use a solid band behind text, or darken the image, and check the worst spot.",
      "**Type size is relative.** Point sizes refer to the slide’s own dimensions, which are projected at whatever size the screen is. What matters is the size relative to the slide and the viewing distance. Online viewers may be on phones, which argues for fewer, larger words.",
      {list:["**Rules of thumb are tips, not standards.** “6×6” (six bullets of six words) and “10/20/30” (10 slides, 20 minutes, 30-point text) are popular heuristics. Real standards, such as WCAG’s contrast ratios, are about whether people can perceive the content.","**Evidence on redundancy.** Richard Mayer’s research on multimedia learning found that people generally learned better from narration with relevant graphics than from narration, graphics and the same words on screen. Short labels and key terms still help, especially for people listening in a second language or with hearing loss.","**Headline sentences.** Writing each slide title as the slide’s claim makes the deck skimmable and helps screen reader users, who navigate by titles."]}
     ]
    },
    related:["slide-layouts-masters","accessible-slides","slide-visuals","presentation-planning"],
    read:[{book:"wss", where:"Chapter 6, Section 6.3 “Formatting Microsoft PowerPoint Slides: Layout and Design Principles”"}],
    sources:[{t:"Microsoft Support: Make your PowerPoint presentations accessible to people with disabilities", url:"https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"},{t:"W3C WAI: Understanding Success Criterion 1.4.3 Contrast (Minimum), WCAG 2.2", url:"https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"},{t:"Workplace Software and Skills (LibreTexts mirror): 6.3 Formatting PowerPoint Slides: Layout and Design Principles", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/06%3A_Preparing_Presentations/6.03%3A_Formatting_Microsoft_PowerPoint_Slides-_Layout_and_Design_Principles"}], checked:"2026-11"},

   {id:"slide-layouts-masters", title:"Themes, layouts and the slide master", aka:["slide master","master slide","theme builder","placeholders","slide layouts"], tags:["presentations","apps"],
    summary:"A theme and its master hold the deck’s design; layouts arrange placeholders; slides fill them. Change the master once to change every slide.",
    levels:{
     starter:[
      "Presentation apps keep the design in one place so you don’t repeat it on every slide, like letterhead paper that already has the logo printed on it.",
      {list:["A **theme** is a set of colours, fonts, background and layouts.","The **slide master** holds the theme’s settings. Change the font or logo there and every slide updates.","A **layout** is one arrangement of boxes: a title slide, title and content, two columns.","A **placeholder** is one of those boxes, such as “Click to add title”."]},
      "Type into placeholders instead of drawing your own text boxes. Placeholder text follows the design when you change theme, becomes the slide’s real title, and is read in a sensible order by screen readers.",
      {tip:"If a layout doesn’t suit you, fix the layout once in the master rather than adjusting every slide."}
     ],
     builder:[
      {table:[["App","Theme","Master and layouts"],["PowerPoint","**Design** tab (themes and **Variants**)","**View → Slide Master** in the desktop apps. Microsoft says PowerPoint for the web can’t view the slide master; open the file in the desktop app."],["Google Slides","**Slide → Change theme**","**Slide → Edit theme** opens the theme builder; the theme is at the top, layouts below"],["LibreOffice Impress","**Master Slides** panel in the sidebar","**View → Master Slide**; apply layouts with **Slide → Layout**"],["Keynote","**File → Change Theme**","**View → Edit Slide Layouts**"]]},
      "Changing a slide’s layout: **Home → Layout** (PowerPoint), **Layout** button (Google Slides), **Slide → Layout** (Impress), **Slide Layout** in the Format sidebar (Keynote). In PowerPoint, **Home → Reset** returns a slide’s placeholders to the layout’s positions and formatting.",
      "Placeholders vs text boxes: a placeholder belongs to the layout, so it moves and restyles when the layout or theme changes, appears in outline view, and the title placeholder is the slide title used by navigation and screen readers. A text box you draw is independent and keeps its own position and formatting.",
      "**Why it matters for accessibility:** the title placeholder is what screen readers announce as the slide’s title, and what PowerPoint’s accessibility checker looks for. Loose text boxes are read in the order they were created, which may not match the layout (see {{accessible-slides}}).",
      "**Getting placeholders back:** if they have been deleted, choosing the layout again from the layout menu restores them in most apps; PowerPoint also has **Home → Reset**."
     ],
     pro:[
      {list:["**Hidden titles.** Microsoft suggests keeping a title on every slide even when the design shows none: position the title placeholder off the slide, or do it in the master for a whole layout.","**One master or several.** Most decks need one master with a handful of layouts. Multiple masters (or imported slides that bring their own) cause inconsistent fonts and colours; check the master view after pasting slides from another deck.","**Theme fonts and colours.** Use the theme’s font and colour slots rather than picking colours by hand. Then a theme change updates everything, including charts and tables that use theme colours.","**Templates.** An organisation’s template is usually a theme plus master plus layouts, saved for reuse (.potx in PowerPoint, .otp in LibreOffice, a custom theme in Keynote or a copied deck in Google Slides).","**Cross-app files.** Google Slides, Impress and Keynote can open .pptx files, but masters and effects don’t always convert perfectly. Open and check every layout before presenting from a converted file."]},
      "Google’s help describes a theme as a preset group of colours, fonts, background and layouts, and a layout as the way text and images are arranged on a slide. The LibreOffice Impress Guide lists the master views (including masters for notes and handouts) under the View menu."
     ]
    },
    related:["slide-design","accessible-slides","sharing-presentations"],
    read:[{book:"wss", where:"Chapter 6, Section 6.2 “Designing a Presentation in Microsoft PowerPoint” and Section 6.5 “Designing a Presentation in Google Slides”"}],
    sources:[{t:"Microsoft Support: Where’s the slide master? (PowerPoint for the web)", url:"https://support.microsoft.com/en-gb/office/where-s-the-slide-master-8aacfdfa-a4a1-4aa8-9d0a-718f7bd187e1"},{t:"Google Docs Editors Help: Change the theme, background or layout in Google Slides", url:"https://support.google.com/docs/answer/1705254?hl=en&co=GENIE.Platform%3DDesktop"},{t:"LibreOffice Impress Guide 26.2: Introducing Impress", url:"https://books.libreoffice.org/en/IG262/IG26201-IntroducingImpress.html"}], checked:"2026-11"},

   {id:"slide-visuals", title:"Pictures, charts and media on slides", aka:["images","charts","video","alt text on slides","presentation myths"], tags:["presentations","design","copyright"],
    summary:"Use visuals that explain, with permission; make each chart show one point; caption video; and don’t repeat invented statistics about memory.",
    levels:{
     starter:[
      "A visual should show something words can’t: what a thing looks like, how numbers compare, how steps connect. Ask: what would the audience lose without it?",
      {list:["**Permission:** use your own pictures, openly licensed ones (such as Creative Commons) with credit, or your app’s stock library within its terms. An image search is not a licence.","**Charts:** one point per chart, with the point as the headline and the key bar highlighted.","**Video:** test it on the presenting computer, keep it short, and caption it.","**Alt text:** a short description of what matters, for people using screen readers."]},
      {warn:"Claims like “people remember 10% of what they read” have no research behind them. Leave out any statistic you can’t trace to a real source."},
      "Credit every picture that isn’t yours with its title, author, source and licence."
     ],
     builder:[
      "**Images.** Google’s help for Slides says stock media may be used for personal, educational or commercial purposes in its apps (not resold or used in logos), but that for web images Google “has no way of knowing whether your use is permitted”: check the licence on the source page. Credit with title, author, source and licence.",
      "**Charts on slides:** decide the point; choose the simplest chart (bars to compare, lines for change over time); remove clutter; highlight and label directly; write the point as the headline. Avoid 3D, start bar axes at zero, and don’t hide awkward data.",
      "**Video and audio.** Embedded media lives in the file (big files); linked files break if moved; online video needs internet. Microsoft’s PowerPoint for Windows and Mac can attach caption files (WebVTT or SRT) via the Accessibility tab’s **Insert Captions**; **Compress Media** removes them.",
      "**Alt text.** Microsoft advises a sentence or two, no “image of…”, checking auto-generated descriptions, and marking decoration as decorative. For charts, give the finding and key numbers.",
      "**Motion.** Use transitions and animations only when movement explains. Avoid anything flashing more than three times a second (WCAG’s seizure guideline).",
      "**Diagrams and icons:** a few boxes and arrows (SmartArt in PowerPoint, **Insert → Diagram** in Google Slides, shapes and connectors anywhere) often beat a paragraph. Use one icon style throughout, and label icons, because an icon alone can be misread."
     ],
     pro:[
      "**Myths to recognise.** The “learning pyramid” percentages (10% of what we read, 20% of what we hear…) are often credited to Edgar Dale’s 1946 Cone of Experience, which contained no numbers; Subramony, Molenda, Betrus and Thalheimer (2014) traced the figures and found no research basis. “Images are processed 60,000 times faster than text” has no known study behind it. A 2008 review by Pashler and colleagues found little evidence that matching teaching to a learner’s preferred “learning style” improves learning.",
      "**What evidence supports.** Words plus relevant pictures generally aid understanding more than words alone (Mayer’s multimedia principle), while interesting but irrelevant “seductive details” can reduce learning. The practical rule is the same either way: relevant visuals, little decoration.",
      {list:["**Linked charts.** Google Slides charts inserted from Sheets stay linked and show an Update button; PowerPoint can paste Excel charts linked or embedded. Linked charts update, but break or reveal more data than you meant if the source is shared or moved.","**People in photos.** Copyright isn’t the only permission: identifiable people, and especially children, should consent to appearing in a deck that will be shared.","**AI images.** Label them, and never present a generated image as evidence of a real event."]},
      "**Fallbacks.** For every clip, keep a still image and a one-sentence description ready in case playback fails on the day, and test playback on the presenting computer with the sound on."
     ]
    },
    related:["copyright-basics","creative-commons","attribution-tasl","misleading-numbers","accessible-slides","ai-generated-content"],
    read:[{book:"wss", where:"Chapter 6, Section 6.4 “Adding Visuals and Features to Microsoft PowerPoint Slides” and Section 6.7 “Adding Visuals and Features to Google Slides”"}],
    sources:[{t:"Google Docs Editors Help: Add stock media & web images in Google Slides & Vids", url:"https://support.google.com/docs/answer/15001094?hl=en"},{t:"Microsoft Support: Add captions and subtitles to your presentation", url:"https://support.microsoft.com/en-us/accessibility/powerpoint/add-captions-and-subtitles-to-your-presentation"},{t:"Microsoft Support: Make your PowerPoint presentations accessible to people with disabilities", url:"https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"}], checked:"2026-11"},

   {id:"presenter-view", title:"Speaker notes and presenter view", aka:["presenter console","presenter display","speaker notes","presenter notes"], tags:["presentations","apps"],
    summary:"Speaker notes hold your prompts; presenter view shows them, the next slide and a timer on your screen while the audience sees only the slide.",
    levels:{
     starter:[
      "**Speaker notes** are text attached to each slide that only you see while presenting: the point of the slide, an example, a number, the link to the next slide. Write prompts rather than a full script, so you talk rather than read.",
      "**Presenter view** is a control screen for you. With a laptop and a projector, the projector shows the slide and your laptop shows the current slide, the next slide, your notes and a timer.",
      {list:["PowerPoint: **Slide Show → Use Presenter View**.","Google Slides: the arrow next to **Slideshow → Presenter view**.","LibreOffice Impress: the **Presenter Console**, with two displays connected.","Keynote: the presenter display (try **Play → Rehearse Slideshow**)."]},
      {warn:"Notes travel with the file. Don’t write anything you wouldn’t want the audience to read."}
     ],
     builder:[
      "**PowerPoint (desktop).** Microsoft describes presenter view as showing the current slide, the next slide and your notes, a timer you can pause and reset, and the current time. Tools include pen and laser pointer, a slide overview, zoom, and black or unblack the screen. With two displays PowerPoint sets it up automatically; with one, open it from the **…** button on the slide show control bar (**Show Presenter View**). **Display Settings → Swap Presenter View and Slide Show** fixes reversed screens.",
      "**Google Slides.** Click the arrow next to **Slideshow** and choose **Presenter view**; notes and a timer open in a separate window. **Presentation display options** (Chrome, with an extra monitor) lets you choose which screen shows what. In a slideshow, [[kbd:S]] opens notes, [[kbd:B]] and [[kbd:W]] blank the screen black or white.",
      "**LibreOffice Impress.** The Presenter Console shows the current slide, the upcoming slide, notes and a timer. It works only with two displays (one can be the laptop’s). In **Slide Show → Slide Show Settings**, set **Presenter console** to **Full screen** or **Windowed**.",
      "**Keynote.** Notes via **View → Show Presenter Notes**; with a second display the presenter display appears on your screen.",
      "In Keynote, **Play → Rehearse Slideshow** shows the presenter display on a single screen, which is the easiest way to practise with it before you have a second display."
     ],
     pro:[
      {list:["**One screen online.** Run the slide show in a window and share only that window, while notes sit elsewhere: PowerPoint’s **Set Up Slide Show → Browsed by an individual (window)**, Keynote’s **Play → In Window** (older versions: **Play Slideshow in Window**), or LibreOffice’s windowed modes. Never share the presenter view itself.","**Keys worth knowing.** Number + Enter jumps to a slide (PowerPoint, Google Slides, Impress, Keynote); B blanks the screen in PowerPoint, Google Slides and Impress; in Keynote, press ? during a show to see its keys; Esc ends the show.","**Mirroring vs extending.** If your computer mirrors its display, both screens show the same image and presenter view can’t separate them. Set the second display to extend (Windows: [[kbd:Win]] + [[kbd:P]] → Extend; macOS: Displays settings).","**Changing interfaces.** Presenter view layouts change between versions and updates. If a button has moved, look for the same functions (notes, timer, next slide, black screen, slide overview); they rarely disappear.","**PowerPoint for the web.** Microsoft’s main presenter view article covers the desktop apps. Recent web versions offer a presenter view window, but check your version before relying on it."]},
      "**Notes on paper as a backup.** All four apps can print or export notes: PowerPoint notes pages, Google Slides’ **1 slide with notes**, Impress’s **Notes** print option and Keynote’s option to include presenter notes in a PDF. A printed copy rescues you if the laptop or the second display fails."
     ]
    },
    related:["presenting-skills","presenting-online","accessible-slides"],
    read:[{book:"wss", where:"Chapter 7, Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”: “Speaker’s Notes”"}],
    sources:[{t:"Microsoft Support: Start the presentation and see your notes in Presenter view", url:"https://support.microsoft.com/en-us/office/present-your-slide-show-4de90e28-487e-435c-9401-eb49a3801257"},{t:"Google Docs Editors Help: Present slides (computer)", url:"https://support.google.com/docs/answer/1696787?hl=en&co=GENIE.Platform%3DDesktop"},{t:"LibreOffice Help: Using the Presenter Console", url:"https://help.libreoffice.org/latest/en-GB/text/simpress/guide/presenter_console.html"}], checked:"2026-11"},

   {id:"presenting-skills", title:"Rehearsing, nerves and questions", aka:["public speaking","rehearsal","stage fright","Q&A","Speaker Coach"], tags:["presentations","skills"],
    summary:"Rehearse aloud with a timer, cut rather than rush, use evidence-based tips for nerves, and prepare for questions.",
    levels:{
     starter:[
      "Most confidence comes from preparation.",
      {list:["**Rehearse aloud**, start to finish, clicking through the slides with a timer. Silent reading usually underestimates the time.","**If it’s too long, cut a point.** Don’t plan to talk faster.","**Learn your first minute well.** Nerves are strongest at the start.","**Pause** instead of saying “um”.","**Questions:** repeat the question so everyone hears it, answer briefly, and if you don’t know, say so and follow up later."]},
      "Feeling nervous is normal. Your nerves show much less than they feel, and many people find it helps to think of a racing heart as excitement rather than fear.",
      {tip:"Record a rehearsal on your phone and watch it once. You’ll spot habits you can’t notice while speaking."},
      "If you have to cut, cut whole points. A shorter talk said calmly beats a longer one said in a rush."
     ],
     builder:[
      "**Rehearsal tools.** PowerPoint desktop’s **Rehearse Timings**, LibreOffice’s **Slide Show → Rehearse Timings** and Keynote’s **Play → Rehearse Slideshow** time each slide. Google Slides’ presenter view has a timer. PowerPoint’s **Rehearse with Coach** (Speaker Coach) gives feedback on pacing and pitch, filler words, informal speech, culturally sensitive terms, wordiness and reading slide text. Microsoft says it is free to try on the web, understands English only, and sends your speech to Microsoft for processing. Unlike Rehearse Timings, it doesn’t save timings to the slides.",
      "**Skills from the textbook:** arrive early, check the room and technology, use open body language and a varied voice, avoid filler words, and treat slides as a supplement. Prepare answers to likely questions (a list of frequently asked questions) and ways to start discussion.",
      "**Nerves, with evidence:** rehearsal in realistic conditions; knowing about the illusion of transparency (Savitsky and Gilovich, 2003: speakers told that nerves are less visible than they feel gave better-rated speeches); reappraising anxiety as excitement (Brooks, 2014).",
      "**A rehearsal routine:** one run to find the real time, one after cutting, and one in conditions close to the real thing (standing, with the clicker, or in the actual meeting software). Record at least one run and watch it back once."
     ],
     pro:[
      {list:["**Cutting well.** Remove whole points, not words from every sentence. A talk that fits at normal pace survives the slowdown nerves cause.","**Backup slides.** Put detailed tables or maps after the closing slide; jump to them by number during questions.","**Hard questions.** Restate neutrally, answer the part you can, separate facts from opinions, and offer to follow up. A hostile question is still a question about your message.","**Hybrid talks.** Repeat every room question for the remote audience and the recording; ask a colleague to monitor the chat.","**When to get help.** Fear of public speaking is common. If it is severe or comes with panic attacks, a doctor or counsellor can help; cognitive behavioural approaches are widely used and effective for many people."]},
      "Be careful with the evidence. Single studies, such as the reappraisal research, are promising but not guarantees; the firmest advice is the least glamorous: prepare, rehearse aloud, and test the set-up.",
      "**Voice and body.** The textbook lists open body language, eye contact around the room, varied pace and volume, and avoiding filler words. Online, eye contact means looking at the camera when you make a key point. It also suggests arriving well before the start (it says at least thirty minutes) to test the equipment; treat the exact figure as a rule of thumb."
     ]
    },
    related:["presenter-view","presenting-online","presentation-planning"],
    read:[{book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills” and Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”"}],
    sources:[{t:"OpenStax: Workplace Software and Skills, 7.1 Effective Presentation Skills", url:"https://openstax.org/books/workplace-software-skills/pages/7-1-effective-presentation-skills"},{t:"Microsoft Support: Rehearse your slide show with Speaker Coach", url:"https://support.microsoft.com/office/rehearse-your-slide-show-with-speaker-coach-cd7fc941-5c3b-498c-a225-83ef3f64f07b"},{t:"Workplace Software and Skills (LibreTexts mirror): 7.3 Preparing a Microsoft PowerPoint Collection for Presentation", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/07%3A_Advanced_Presentation_Skills/7.03%3A_Preparing_a_Microsoft_PowerPoint_Collection_for_Presentation"}], checked:"2026-11"},

   {id:"presenting-online", title:"Presenting online and live captions", aka:["screen sharing slides","virtual presentation","live subtitles","captions in slides"], tags:["presentations","online","accessibility"],
    summary:"Share only the slide show window, silence notifications, share sound for videos, and turn on live captions where your app has them.",
    levels:{
     starter:[
      "Online, people see exactly what you share. Get these right:",
      {list:["**Share a window or tab, not your whole screen**, and pick the one showing the slide show, not your notes.","**Turn on Do not disturb or Focus** and close email and chat, so nothing pops up.","**Videos need sound shared too.** Look for a “share audio” option.","**Check:** ask one person if they can see the first slide.","**Captions:** PowerPoint and Google Slides can show live captions of your speech. Otherwise, use the meeting app’s captions."]},
      {tip:"With one screen, run the slide show in a window so you can still see the meeting and the chat."},
      "Before the real talk, do a practice share with a friend or a second device, and check exactly what they see and hear."
     ],
     builder:[
      "**Sharing.** Google Meet lets you present a tab, a window or the entire screen. Presenting a Chrome tab shares its audio by default; for a window or full screen you must turn on system audio. A Slides deck presented from a tab can be controlled from inside Meet. Other meeting apps offer similar choices.",
      "**Slide show in a window:** PowerPoint desktop **Slide Show → Set Up Slide Show → Browsed by an individual (window)**; Keynote **Play → In Window**, then **Play** (older versions: **Play Slideshow in Window**); Google Slides runs in its own browser tab.",
      "**PowerPoint live subtitles.** **Slide Show → Subtitle Settings** sets spoken language, subtitle language (choose a different one to translate) and microphone; **Always Use Subtitles** turns them on for every show; [[kbd:J]] toggles them. Microsoft lists fully supported spoken languages including Chinese (PRC), English, French, German, Italian and Spanish, with others in preview, and more than 60 caption languages. Needs a reliable connection; speech is sent to Microsoft.",
      "**Google Slides captions.** Start presenting, then **More options → Captions preferences → Toggle captions**, or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]]. Needs Chrome, Edge or Safari, a microphone and internet; captions aren’t stored and have no punctuation.",
      "PowerPoint also lets you choose where subtitles appear on the slide, and Google Slides lets you change caption size and position from the arrow next to **CC**."
     ],
     pro:[
      {list:["**Privacy while sharing.** A shared window can still reveal notifications inside it, recent-file lists, bookmarks or other tabs. Use a clean browser window or profile for presenting.","**Two monitors.** Share the monitor or window with the slides; keep presenter view and the meeting on the other.","**Caption quality.** Automatic captions struggle with names, jargon, accents and poor microphones. A headset microphone helps (Microsoft recommends one for subtitles). Put key terms on slides.","**No built-in captions** in LibreOffice Impress or Keynote. Options are the meeting app’s captions, which everyone can turn on for themselves, or the system’s: Windows 11 **Live captions** ([[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:L]]) and macOS **Live Captions** on Apple silicon Macs. System captions appear on your own screen, so they only reach the audience if that screen is shown or shared.","**Recordings.** If the talk is recorded, captions from the meeting platform may be saved with it; Google says Slides’ own captions are not stored."]},
      "**Hybrid rooms.** When some people are in the room and some online, use a microphone even in a small room, repeat every question, and share the slides into the meeting rather than pointing a camera at the projector. Google suggests Meet’s Companion mode when presenting from a laptop inside a room that is already in the call, to avoid echo."
     ]
    },
    related:["presenter-view","presenting-skills","accessible-slides","audio-video-calls"],
    sources:[{t:"Google Meet Help: Present during a video meeting", url:"https://support.google.com/meet/answer/9308856?hl=en"},{t:"Microsoft Support: Present with real-time, automatic captions or subtitles in PowerPoint", url:"https://support.microsoft.com/office/present-with-real-time-automatic-captions-or-subtitles-in-powerpoint-68d20e49-aec3-456a-939d-34a79e8ddd5f"},{t:"Google Docs Editors Help: Present slides with captions", url:"https://support.google.com/docs/answer/9109474?hl=en"}], checked:"2026-11"},

   {id:"accessible-slides", title:"Accessible slides", aka:["accessibility checker","reading order","slide titles","colour blindness"], tags:["presentations","accessibility"],
    summary:"Unique slide titles, alt text, a logical reading order, enough contrast, colour plus another signal, and captions; checked by tool and by hand.",
    levels:{
     starter:[
      "An accessible deck works for people using screen readers, people with low vision or colour vision deficiency, and people who are deaf or hard of hearing. The main habits:",
      {list:["A **unique title** on every slide, in the title placeholder.","**Alt text** for every meaningful picture and chart.","**Strong contrast** and large, plain text.","**Colour plus** a label, symbol or pattern, never colour alone.","**Captions** on videos.","**Link text** that says where it goes."]},
      "PowerPoint has a checker: **Review → Check Accessibility**. Google Slides, Keynote and LibreOffice Impress don’t have a full one, so check by hand.",
      {key:"A checker finds what is missing. Only a person can tell whether what is there makes sense."},
      "Run the check when the content is final, fix the problems it lists, then do the human checks it can’t: does each title and description actually make sense?"
     ],
     builder:[
      "**PowerPoint.** Microsoft’s checklist: alt text for visuals; a reading order that matches your intent; meaningful link text; no colour-only meaning; sufficient contrast; a unique title on each slide; simple tables with header rows (or avoid tables); larger sans serif fonts; captions and audio descriptions for video; accessible PDFs. The checker runs in the background and from **Review → Check Accessibility**.",
      "**Reading order.** Screen readers read objects in the order listed in the **Reading Order** pane, which may differ from how they look. Open it via **Review → Check Accessibility**, **Check reading order**, **Verify object order**. Drag items or use **Move Up**/**Move Down**; clearing a check box marks an item as decorative.",
      "**Google Slides.** Alt text via **Alt text** (or [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Y]]); verify any automatic alt text; use descriptive link text; avoid justified text; screen readers might not announce bold or highlighting, so add words like “Important”. The HTML view shows the whole deck as one scrollable page.",
      "**Colour test.** Microsoft suggests Windows **Settings → Accessibility → Color filters → Grayscale** to see what depends on colour.",
      "**Keynote and LibreOffice Impress:** add descriptions to images (Keynote’s **Description** field on the Image tab of the Format sidebar; Impress’s **Format → Alt Text** dialog, called **Description** in older versions) and use layouts with real titles. Impress has no full checker; its PDF export with **Universal Accessibility (PDF/UA)** ticked makes a tagged PDF and may warn about some problems, depending on version."
     ],
     pro:[
      {list:["**Hidden titles.** Keep a title on visually title-less slides by placing the title placeholder off the slide; do it in the master for whole layouts.","**Tables.** Microsoft advises avoiding tables where possible; otherwise no merged, split or nested cells, and a defined header row.","**Contrast gaps.** PowerPoint’s checker misses text in transparent boxes, placeholders over backgrounds and non-text content; check those with a contrast tool.","**Automatic alt text.** PowerPoint for Microsoft 365 on Windows generates alt text for photos and stock images, and Google says some images in Slides get alt text automatically. Remove phrases like “Description automatically generated” and correct errors.","**WCAG references.** Text contrast 1.4.3 (4.5:1, large text 3:1); non-text contrast 1.4.11 (3:1); use of colour 1.4.1; flashing 2.3.1. A note of caution: Google’s accessibility help recommends higher figures (7:1 for normal text, 4.5:1 for large text), which match WCAG’s enhanced AAA level rather than the AA minimum. Meeting Google’s figures also meets AA; for the standard itself, use W3C’s pages.","**Testing.** Try the deck with a screen reader (Narrator, VoiceOver, TalkBack, ChromeVox) and keyboard only. Check the exported PDF too: an accessible deck can become an inaccessible PDF if tags aren’t exported."]},
      "**Captions and descriptions for video.** Microsoft distinguishes subtitles (usually the dialogue), closed captions (dialogue plus important sounds) and video descriptions (narration of what is shown, during natural pauses). A video whose meaning is in the pictures needs a description, not only captions."
     ]
    },
    related:["slide-design","slide-visuals","sharing-presentations","presenting-online"],
    read:[{book:"wss", where:"Chapter 7, Section 7.1 “Effective Presentation Skills”: “Spotlight on Ethics: Inclusivity and Presentations”, and Section 7.3: “Accessibility and Languages”"}],
    sources:[{t:"Microsoft Support: Make your PowerPoint presentations accessible to people with disabilities", url:"https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25"},{t:"Microsoft Support: Make slides easier to read by using the Reading Order pane", url:"https://support.microsoft.com/en-us/powerpoint/make-slides-easier-to-read-by-using-the-reading-order-pane"},{t:"Google Docs Editors Help: Make your document, presentation, sheets & videos more accessible", url:"https://support.google.com/docs/answer/6199477?hl=en"}], checked:"2026-11"},

   {id:"sharing-presentations", title:"Sharing decks: links, PDFs, handouts, size and shape", aka:["export PDF","handouts","slide size","aspect ratio","file size"], tags:["presentations","files","sharing"],
    summary:"Share a link for live collaboration, a PDF for a fixed copy, a handout for keeping; keep files small; choose 16:9 or 4:3 before building.",
    levels:{
     starter:[
      "When a deck leaves your hands, choose the right form:",
      {list:["**A link** to the live deck: one copy, you control who can view or edit, always up to date.","**A PDF:** opens anywhere and can’t be accidentally edited, but loses animation and video.","**A handout:** several slides per page, or slides with notes, for keeping or printing.","**The original file:** for someone who will edit or present it themselves."]},
      "Before sharing, read through the speaker notes and comments: they go with the file.",
      "Check the **shape**. Most screens are **16:9** (widescreen), the default in most apps. Some older projectors are **4:3**. Pick the shape before you build, because changing it later affects every slide.",
      "Keep the file small: full-size phone photos and embedded videos can make a deck too big to email."
     ],
     builder:[
      {table:[["App","PDF","Handout"],["PowerPoint","**File → Export → Create PDF/XPS Document** (desktop); **File → Print** in the web version creates a PDF","PDF **Options → Publish what: Handouts**"],["Google Slides","**File → Download → PDF document**","**File → Print settings and preview → Handout**"],["LibreOffice Impress","**File → Export as → Export as PDF**","**File → Print**, Impress tab, **Document: Handouts**"],["Keynote","**File → Export To → PDF**","**File → Print → Handout**"]]},
      "PowerPoint’s PDF options include **Optimize for** standard or minimum size, the slide range, hidden slides, comments, and **Document structure tags for accessibility**.",
      "**Slide size.** PowerPoint: **Design → Slide Size** (Standard 4:3, Widescreen 16:9, custom); 16:9 is the default, and the whole deck changes together, with **Maximize** or **Ensure Fit** when content must be rescaled. Google Slides: **File → Page setup** (4:3, 16:9, 16:10, custom). Impress: **Slide → Slide Properties**. Keynote: **Document** sidebar.",
      "**File size.** Compress pictures (PowerPoint **Picture Format → Compress Pictures**; Impress **Compress** or **Tools → Minimize Presentation**, called **Presentation Minimizer** in some versions; Keynote **File → Reduce File Size**), and link large videos rather than embedding them.",
      "**Sharing by link:** Google Slides (**Share**, then **General access** and **Viewer**, **Commenter** or **Editor**), PowerPoint files saved in OneDrive (**Share**, can view or can edit, **Copy link**) and Keynote through iCloud (**Share**, then a live link with **Can make changes** or **View only**). LibreOffice relies on whatever cloud storage you save the file to."
     ],
     pro:[
      {list:["**Estimating video size:** duration in seconds × bit rate in megabits per second ÷ 8 = megabytes. Two minutes at 8 Mbps ≈ 120 MB.","**Compress Media trade-off.** In PowerPoint, Compress Media and Optimize Media Compatibility remove caption files and extra audio tracks; Save Media as keeps them.","**Fonts.** Missing fonts are substituted and text can reflow. Desktop PowerPoint for Windows can embed fonts (**File → Options → Save**); otherwise use common fonts or share a PDF.","**Inspect before sending.** PowerPoint desktop’s **File → Info → Check for Issues → Inspect Document** finds notes, comments, hidden content and personal information.","**Link settings.** “Anyone with the link” really means anyone the link reaches. Use named people for sensitive decks, and remove access when a project ends (Unit 2’s sharing entry covers permissions).","**Format compatibility.** .pptx opens in all four apps, but effects, fonts and masters may change in conversion. For a deck that must look identical everywhere, send a PDF as well."]},
      "**Version confusion.** Attachments multiply into “final”, “final2” and “final-really”. One shared link with version history ({{version-history}}) avoids that. If you must send files, put the date in the file name, as Unit 2 suggests ({{file-naming}}), and say in the message which version is current."
     ]
    },
    related:["sharing-permissions","version-history","file-formats","accessible-slides","slide-layouts-masters"],
    read:[{book:"wss", where:"Chapter 7, Section 7.3 “Preparing a Microsoft PowerPoint Collection for Presentation”: “Printing a Presentation”, and Section 7.4 “Preparing a Google Slides Collection for Presentation”"}],
    sources:[{t:"Microsoft Support: Save PowerPoint presentations as PDF files", url:"https://support.microsoft.com/en-us/topic/9b5c786b-9c6e-4fe6-81f6-9372f77c47c8"},{t:"Google Docs Editors Help: Print a file (computer)", url:"https://support.google.com/docs/answer/143346?hl=en-GB&co=GENIE.Platform%3DDesktop"},{t:"Microsoft Support: Change the size of your slides", url:"https://support.microsoft.com/en-us/powerpoint/change-the-size-of-your-powerpoint-slides"}], checked:"2026-11"}
  ],
  terms:[
   {id:"presentation", term:"Presentation", def:"A talk given to an audience for a set time, usually with slides as a visual aid. The file of slides is also called a presentation or a deck.", codex:"presentation-planning"},
   {id:"slide", term:"Slide", def:"One screen of a presentation. A set of slides is often called a deck.", codex:"slide-layouts-masters"},
   {id:"key-message", term:"Main message", def:"The one sentence you want the audience to remember: a claim about the topic, not just its name. Also called the key message.", codex:"presentation-planning"},
   {id:"call-to-action", term:"Call to action", def:"The specific thing you ask the audience to do at the end of a talk, such as “Sign up by Friday”.", codex:"presentation-planning"},
   {id:"storyboard", term:"Storyboard", def:"A sketch of a talk made before building it: one box per slide, each with a headline, a rough visual and what you will say.", codex:"presentation-planning"},
   {id:"theme", term:"Theme", def:"A ready-made set of colours, fonts, background and layouts applied to a whole presentation.", codex:"slide-layouts-masters"},
   {id:"slide-master", term:"Slide master", def:"The top-level slide that holds a deck’s design (fonts, colours, background, logo). Changing it updates every slide that uses it. Keynote calls these slide layouts; Impress calls it the master slide.", codex:"slide-layouts-masters"},
   {id:"slide-layout", term:"Slide layout", def:"One arrangement of placeholders for a kind of slide, such as a title slide or “title and content”.", codex:"slide-layouts-masters"},
   {id:"placeholder", term:"Placeholder", def:"A box that comes from a slide layout, such as “Click to add title”. Text in it follows the theme and counts as the slide’s real title or content.", codex:"slide-layouts-masters"},
   {id:"contrast", term:"Contrast", def:"The difference in brightness between text (or a graphic) and its background, measured as a ratio from 1:1 to 21:1. WCAG asks for at least 4.5:1 for normal text.", codex:"slide-design"},
   {id:"sans-serif", term:"Sans serif", def:"A style of font without the small strokes (serifs) at the ends of letters, such as Arial, Calibri or Verdana. Often easier to read on screens.", codex:"slide-design"},
   {id:"white-space", term:"White space", def:"Empty space around and between things on a slide or page. It makes content easier to read and helps the important part stand out.", codex:"slide-design"},
   {id:"embedded-media", term:"Embedded media", def:"A video or sound file stored inside the presentation file. It travels with the deck but makes the file much bigger.", codex:"slide-visuals"},
   {id:"linked-media", term:"Linked media", def:"A video or sound file the presentation points to rather than contains. The deck stays small, but the link breaks if the file moves or the internet is unavailable.", codex:"slide-visuals"},
   {id:"transition", term:"Transition", def:"A visual effect between one slide and the next, such as a fade.", codex:"slide-visuals"},
   {id:"animation", term:"Animation", def:"An effect that makes an object on a slide appear, move or disappear, for example revealing one step at a time.", codex:"slide-visuals"},
   {id:"speaker-notes", term:"Speaker notes", def:"Text attached to each slide that the presenter sees but the audience doesn’t. Keynote calls them presenter notes. They stay in the file when it is shared.", codex:"presenter-view"},
   {id:"presenter-view", term:"Presenter view", def:"A screen for the speaker showing the current and next slide, notes and a timer, while the audience sees only the slide. LibreOffice calls it the Presenter Console.", codex:"presenter-view"},
   {id:"live-captions", term:"Live captions", def:"Text of what a speaker is saying, generated automatically and shown on screen as they talk. PowerPoint calls them subtitles.", codex:"presenting-online"},
   {id:"reading-order", term:"Reading order", def:"The order in which a screen reader reads the objects on a slide. It usually follows the order objects were added, not where they appear.", codex:"accessible-slides"},
   {id:"handout", term:"Handout", def:"A printed or PDF version of a deck for the audience to keep, often with several slides per page or with notes.", codex:"sharing-presentations"},
   {id:"aspect-ratio", term:"Aspect ratio", def:"The shape of a slide or screen, written as width to height. 16:9 is widescreen; 4:3 is squarer.", codex:"sharing-presentations"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u10-q01", lesson:"t1u10-l1", level:1, q:"What is the main job of slides in a talk?", options:[
     {t:"To support the speaker by showing what is easier to see than hear", ok:true, why:"Slides are a visual aid. The speaker explains; the slides show pictures, charts, key words and numbers."},
     {t:"To hold every word the speaker will say", why:"Then the audience reads instead of listening, and the speaker becomes a narrator."},
     {t:"To replace the speaker so the talk can be skipped", why:"If slides can replace the speaker, a document would do the job better."},
     {t:"To show off the app’s animation effects", why:"Effects that don’t explain anything distract from the message."}
   ]},
   {id:"t1u10-q02", lesson:"t1u10-l1", level:1, q:"Which of these is a main message rather than a topic?", options:[
     {t:"“Switching to reusable cups would cut the café’s waste bill by a third”", ok:true, why:"It makes a specific claim the audience can accept, question or act on."},
     {t:"“Café waste”", why:"That names the topic but makes no claim."},
     {t:"“Some thoughts on cups”", why:"Vague: the audience can’t tell what you want them to think or do."},
     {t:"“An overview of our bins”", why:"An overview is still a topic. What is the point?"}
   ]},
   {id:"t1u10-q03", lesson:"t1u10-l1", level:1, q:"According to the textbook, how should a presentation’s purpose be defined?", options:[
     {t:"As the action you want the audience to take", ok:true, why:"Defining purpose from the audience’s side keeps the talk focused on what should change."},
     {t:"As the number of slides you need", why:"Slide count follows from purpose and time, not the other way round."},
     {t:"As the theme and colours you choose", why:"Design serves the purpose; it isn’t the purpose."},
     {t:"As everything you know about the topic", why:"Including everything usually buries the message."}
   ]},
   {id:"t1u10-q04", lesson:"t1u10-l1", level:2, q:"Why storyboard on paper before opening the app?", options:[
     {t:"Boxes are quick to rearrange or discard, and you fix the story before spending time on design", ok:true, why:"Paper keeps the plan cheap to change and stops you decorating slides before the structure works."},
     {t:"Apps can’t create more than ten slides without a storyboard", why:"There is no such limit. The benefit is in the thinking."},
     {t:"Paper storyboards are required for slides to be accessible", why:"Accessibility depends on titles, alt text, contrast and so on, not on paper planning."},
     {t:"It makes the final file smaller", why:"File size depends on pictures and media, not planning."}
   ]},
   {id:"t1u10-q05", lesson:"t1u10-l1", level:2, q:"Mei has a 25-minute slot and must leave 7 minutes for questions. Using a rough guide of one minute per slide, about how many slides should she plan?", options:[
     {t:"About 18", ok:true, why:"25 − 7 = 18 minutes of talking time, so about 18 slides at most."},
     {t:"About 25", why:"That uses the whole slot and leaves no time for questions."},
     {t:"About 32", why:"That adds the question time instead of subtracting it."},
     {t:"About 7", why:"That plans only for the question time, not the talk."}
   ]},
   {id:"t1u10-q06", lesson:"t1u10-l1", level:3, q:"Dmitri’s storyboard headlines read: “Introduction. Background. Data. More data. Conclusion.” What does this suggest?", options:[
     {t:"The headlines are topics, so the slides probably don’t make clear points; he should rewrite them as short claims", ok:true, why:"Headlines that tell the story on their own (“Repairs fell by half after the change”) are a sign the structure works. Topic labels hide whether it does."},
     {t:"The storyboard is perfect because it follows a standard order", why:"A standard order isn’t enough if no slide says what it shows."},
     {t:"He needs more slides of data", why:"The issue is clarity of each slide’s point, not the amount of data."},
     {t:"He should add a theme before going further", why:"Design comes later. The story isn’t clear yet."}
   ]},
   {id:"t1u10-q07", lesson:"t1u10-l1", level:3, q:"Hana’s manager wants slides that will be emailed to staff and read alone, with no meeting. Which plan fits best?", options:[
     {t:"Write a short document or PDF with full explanations, since no speaker will be there", ok:true, why:"Slides for talks depend on a speaker. A reading document needs the explanation on the page."},
     {t:"Normal talk slides with single-word headlines", why:"Without a speaker, readers won’t know what the words mean."},
     {t:"A video of the slides with background music only", why:"Music explains nothing."},
     {t:"Slides with the full text at 10 pt", why:"That is a document squeezed onto slides, and hard to read."}
   ]},
   {id:"t1u10-q08", lesson:"t1u10-l1", level:2, q:"Which closing is strongest for a persuasive talk asking neighbours to volunteer?", options:[
     {t:"Restate the message, recap the key points, then ask people to sign up on the sheet by the door tonight", ok:true, why:"It reinforces the message and gives a clear, easy call to action."},
     {t:"A slide that says only “Questions?”", why:"Questions can follow, but the close should end on the message and the action."},
     {t:"A new topic the talk hasn’t covered", why:"New material at the end confuses rather than reinforces."},
     {t:"Thanking the audience and leaving without saying what to do", why:"Politeness is good, but without a call to action people don’t know the next step."}
   ]},
   {id:"t1u10-q09", lesson:"t1u10-l1", level:3, q:"Kenji’s rehearsal of a 10-minute talk takes 15 minutes. What is the best fix?", options:[
     {t:"Cut or merge whole points until it fits at a normal pace", ok:true, why:"Cutting content keeps the talk clear. Nerves often slow you on the day, so a talk that only fits when rushed will overrun."},
     {t:"Speak faster on the day", why:"Rushed talks are hard to follow and still tend to overrun."},
     {t:"Remove the time for questions", why:"That takes away the audience’s chance to clear up doubts, and the organiser may not allow it."},
     {t:"Make the text smaller so slides hold more", why:"Smaller text doesn’t shorten the talk and is harder to read."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u10-q10", lesson:"t1u10-l2", level:1, q:"What does the slide master do?", options:[
     {t:"Holds the deck’s design, so a change there updates every slide that uses it", ok:true, why:"Fonts, colours, background and repeated items like a logo live on the master."},
     {t:"Stores the speaker’s notes", why:"Notes are attached to each slide, not the master."},
     {t:"Controls the order of the slides", why:"Order is set in the slide sorter or thumbnail pane."},
     {t:"Records how long each slide is shown", why:"That is rehearsal timing, not the master."}
   ]},
   {id:"t1u10-q11", lesson:"t1u10-l2", level:1, q:"Under WCAG 2.2 level AA, what is the minimum contrast ratio for normal-size text?", options:[
     {t:"4.5:1", ok:true, why:"Success criterion 1.4.3 sets 4.5:1 for normal text and 3:1 for large text."},
     {t:"3:1", why:"3:1 is the minimum for large text (18 pt, or 14 pt bold), not normal text."},
     {t:"7:1", why:"7:1 is the enhanced AAA level for normal text, above the AA minimum."},
     {t:"21:1", why:"21:1 is the maximum possible (black on white), not a minimum."}
   ]},
   {id:"t1u10-q12", lesson:"t1u10-l2", level:1, q:"What counts as “large text” in WCAG’s contrast rules?", options:[
     {t:"At least 18 point, or at least 14 point bold", ok:true, why:"Large text needs a lower minimum ratio (3:1) because bigger letters are easier to see."},
     {t:"Anything in capitals", why:"Capitals don’t make text large, and long runs of capitals are harder to read."},
     {t:"Any slide title", why:"A title counts as large only if it meets the size definition."},
     {t:"At least 12 point", why:"12 point is normal text and needs 4.5:1."}
   ]},
   {id:"t1u10-q13", lesson:"t1u10-l2", level:2, q:"Why type slide titles into the title placeholder instead of a text box you draw?", options:[
     {t:"The placeholder text becomes the slide’s real title, follows theme changes, and is used by screen readers and navigation", ok:true, why:"A drawn text box looks the same but isn’t treated as the title and keeps its own formatting."},
     {t:"Text boxes can’t hold bold text", why:"They can. The difference is how the app treats the text."},
     {t:"Placeholders make the file smaller", why:"File size isn’t the reason; behaviour is."},
     {t:"Drawn text boxes can’t be printed", why:"They print fine. The problems are structure and consistency."}
   ]},
   {id:"t1u10-q14", lesson:"t1u10-l2", level:2, q:"A checker reports white text on a pale yellow band at 4.47:1, for 16 pt regular text. Does it meet WCAG AA?", options:[
     {t:"No: normal text needs 4.5:1 and WCAG says not to round up", ok:true, why:"4.47 is below 4.5. Darken the band or the text, or make it large text if the design allows."},
     {t:"Yes: 4.47 rounds to 4.5", why:"WCAG explicitly says computed values shouldn’t be rounded."},
     {t:"Yes: 16 pt counts as large text", why:"Large text starts at 18 pt (or 14 pt bold)."},
     {t:"Contrast rules don’t apply to slides", why:"They are the accepted reference for readable digital content, including slides."}
   ]},
   {id:"t1u10-q15", lesson:"t1u10-l2", level:1, q:"How should you treat advice such as “never more than six bullets of six words”?", options:[
     {t:"As a rule of thumb some presenters find useful, not a standard", ok:true, why:"Heuristics can help, but the real tests are readability and whether the slide supports what you say."},
     {t:"As an international accessibility standard", why:"No standard sets bullet counts. WCAG sets things like contrast ratios."},
     {t:"As a legal requirement for workplace slides", why:"There is no such law."},
     {t:"As a feature every app enforces automatically", why:"Apps don’t limit bullets."}
   ]},
   {id:"t1u10-q16", lesson:"t1u10-l2", level:3, q:"Ana uses free PowerPoint for the web and wants every slide title in a new font at once. What can she do?", options:[
     {t:"Apply a different theme or variant on the Design tab, or open the file in a desktop app that can edit the master", ok:true, why:"PowerPoint for the web can’t open the slide master, so deck-wide changes there come through themes and variants, or another app."},
     {t:"Choose View → Slide Master in the web version", why:"Microsoft says viewing the slide master isn’t possible in PowerPoint for the web."},
     {t:"Retype every title in a new text box", why:"That creates loose text boxes that won’t follow the design and aren’t real titles."},
     {t:"It is impossible in any app", why:"The desktop apps, Google Slides, Impress and Keynote can all edit masters or layouts."}
   ]},
   {id:"t1u10-q17", lesson:"t1u10-l2", level:3, q:"Priya’s slides look crisp on her laptop, but in the hall the pale blue text on white is hard to read. What best explains it?", options:[
     {t:"Projectors in lit rooms wash out colours, so a low-contrast pair becomes even weaker", ok:true, why:"WCAG minimums were written for screens. Slides need more contrast, not less, to survive projection."},
     {t:"The hall’s projector can’t show the colour blue", why:"Projectors show blue; the problem is contrast."},
     {t:"Her font is too modern", why:"Font style matters less than contrast here."},
     {t:"The slide master is broken", why:"The master only sets the design. The design itself has too little contrast for the room."}
   ]},
   {id:"t1u10-q18", lesson:"t1u10-l2", level:2, q:"Why does Microsoft’s Speaker Coach warn presenters who read their slide text aloud?", options:[
     {t:"Reading the same words the audience is reading splits attention and turns the speaker into a narrator", ok:true, why:"The audience reads ahead and stops listening; the speaker faces the screen. Keep headlines short and explain aloud."},
     {t:"Reading aloud damages the microphone", why:"It doesn’t. The warning is about how people take in information."},
     {t:"Slide text can’t be read by Speaker Coach", why:"It can detect it; that’s why it warns you."},
     {t:"It is against PowerPoint’s licence terms", why:"Nothing in licences covers this. It is presentation advice."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u10-q19", lesson:"t1u10-l3", level:1, q:"Does finding an image through your slides app’s built-in web image search mean you may use it?", options:[
     {t:"No. You still need to check the image’s licence on its source page", ok:true, why:"Google’s help says it can’t know whether your use is permitted and leaves that check to you."},
     {t:"Yes, anything the app finds is licensed", why:"Search finds images; it doesn’t license them."},
     {t:"Yes, as long as the deck is free", why:"Copyright applies whether or not you charge."},
     {t:"Only if you resize it", why:"Changing size doesn’t change permission."}
   ]},
   {id:"t1u10-q20", lesson:"t1u10-l3", level:1, q:"What should a chart on a slide do?", options:[
     {t:"Make one point, stated in the headline, with the key data highlighted", ok:true, why:"The audience sees it for seconds. One clear point is what they can take in."},
     {t:"Show every value from the spreadsheet", why:"That is a spreadsheet’s job; on a slide it overwhelms."},
     {t:"Use 3D to look more impressive", why:"3D distorts sizes and makes comparisons harder."},
     {t:"Use as many colours as possible", why:"Too many colours hide what matters; highlight one thing."}
   ]},
   {id:"t1u10-q21", lesson:"t1u10-l3", level:2, q:"Which is the best alt text for a slide chart?", options:[
     {t:"“Bar chart of monthly sign-ups: steady at about 20 until June, then jumping to 55 after the school fair.”", ok:true, why:"It gives the kind of chart, the point and the key numbers."},
     {t:"“Chart”", why:"A screen reader user learns nothing about what it shows."},
     {t:"“An image of a chart with blue bars”", why:"It starts with “an image of”, which screen readers already announce, and describes colours instead of meaning."},
     {t:"“signups_final_v3.png”", why:"A file name means nothing to a listener."}
   ]},
   {id:"t1u10-q22", lesson:"t1u10-l3", level:1, q:"What is the truth about “people remember 10% of what they read, 20% of what they hear…”?", options:[
     {t:"The percentages have no research behind them, and they were wrongly attached to Edgar Dale’s Cone of Experience", ok:true, why:"Dale’s cone had no numbers; researchers who traced the figures found no study supporting them."},
     {t:"They come from a large, well-known study by Edgar Dale", why:"Dale’s 1946 cone contained no percentages."},
     {t:"They are exact for adults but not children", why:"There is no evidence for the figures at any age."},
     {t:"They are a WCAG requirement", why:"WCAG has nothing to do with these figures."}
   ]},
   {id:"t1u10-q23", lesson:"t1u10-l3", level:2, q:"Why might a linked video fail on the venue’s computer when an embedded one works?", options:[
     {t:"A linked video stays outside the deck file, so it is missing if only the deck was copied", ok:true, why:"Embedded media travels inside the file; linked media needs the video copied too, or an internet connection for online video."},
     {t:"Linked videos only play in a newer version of the app", why:"The app version isn’t the problem: the video file itself was never copied."},
     {t:"Embedded videos are always smaller", why:"Embedded videos make files bigger, not smaller."},
     {t:"Venue computers block all video", why:"The embedded one worked, so video itself isn’t blocked."}
   ]},
   {id:"t1u10-q24", lesson:"t1u10-l3", level:3, q:"Tomás compressed his deck with PowerPoint’s Compress Media after adding caption files to his videos. What should he check?", options:[
     {t:"Whether the captions are still there, because Microsoft says Compress Media removes caption files", ok:true, why:"Compress first, then add captions, or keep an uncompressed copy."},
     {t:"Whether the slide master was deleted", why:"Compressing media doesn’t affect the master."},
     {t:"Whether his speaker notes were translated", why:"Compression doesn’t translate notes."},
     {t:"Nothing: compression never changes media", why:"Compression changes the media files, and Microsoft documents that captions are removed."}
   ]},
   {id:"t1u10-q25", lesson:"t1u10-l3", level:2, q:"Lucía wants to use a photo licensed CC BY-NC in slides for a paid workshop she runs as a business. What is the issue?", options:[
     {t:"NC means non-commercial, so a paid business workshop may fall outside the licence; she should find another image or ask permission", ok:true, why:"The NC condition restricts commercial use. When in doubt, choose an image with a licence that clearly allows it."},
     {t:"No issue, because any Creative Commons image can be used for anything", why:"CC licences have conditions; NC limits commercial use."},
     {t:"No issue if she removes the credit", why:"Removing credit breaks the licence further; BY requires attribution."},
     {t:"No issue if she crops the photo", why:"Cropping doesn’t change the licence conditions."}
   ]},
   {id:"t1u10-q26", lesson:"t1u10-l3", level:2, q:"When does an animation most clearly help?", options:[
     {t:"When it reveals steps one at a time as you explain them", ok:true, why:"The movement has a purpose: it keeps the audience with you."},
     {t:"When every slide uses a different flying effect", why:"Varied effects draw attention to the effects themselves."},
     {t:"When text flashes rapidly to grab attention", why:"Flashing more than three times a second is a seizure risk under WCAG."},
     {t:"When it delays each word by a few seconds", why:"That slows the talk without adding meaning."}
   ]},
   {id:"t1u10-q27", lesson:"t1u10-l3", level:3, q:"Fatima’s slide shows a stock photo of a smiling team in suits beside her point about volunteer rotas. What is the best advice?", options:[
     {t:"Replace it with something that shows the point, such as a simple rota diagram, or leave the space empty", ok:true, why:"Decorative pictures can pull attention away from the message. A relevant visual or white space works better."},
     {t:"Keep it; any photo makes slides more memorable", why:"Irrelevant pictures don’t aid memory of the point and can distract."},
     {t:"Add three more stock photos for balance", why:"More decoration makes the distraction worse."},
     {t:"Animate the photo to spin in", why:"Motion draws even more attention to the irrelevant picture."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u10-q28", lesson:"t1u10-l4", level:1, q:"What does PowerPoint’s presenter view show on the presenter’s screen?", options:[
     {t:"The current slide, the next slide, speaker notes and a timer", ok:true, why:"It also shows the time of day and tools such as a pen and a black-screen button. The audience sees only the slide."},
     {t:"Only the current slide, exactly as the audience sees it", why:"That is the audience’s view, not presenter view."},
     {t:"The slide master for editing", why:"The master is edited in Slide Master view, not while presenting."},
     {t:"The audience’s webcams", why:"That is the meeting app, not presenter view."}
   ]},
   {id:"t1u10-q29", lesson:"t1u10-l4", level:1, q:"Which kind of speaker notes usually works best?", options:[
     {t:"Short prompts: the point, an example, a number, the link to the next slide", ok:true, why:"Prompts let you glance and talk. A full script tempts you to read."},
     {t:"A full word-for-word script for every slide", why:"Reading a script usually sounds flat and is easy to lose your place in."},
     {t:"A copy of the slide text", why:"That adds nothing you can’t already see."},
     {t:"Private comments about audience members", why:"Notes travel with the file and may be seen. Never write anything you wouldn’t say."}
   ]},
   {id:"t1u10-q30", lesson:"t1u10-l4", level:1, q:"What does LibreOffice Impress need before its Presenter Console appears?", options:[
     {t:"Two displays connected (one can be the laptop’s own screen)", ok:true, why:"LibreOffice’s help says the console works only when two displays are connected."},
     {t:"An internet connection", why:"The console runs locally; it doesn’t need the internet."},
     {t:"A paid licence", why:"LibreOffice is free, including the Presenter Console."},
     {t:"A Microsoft account", why:"LibreOffice doesn’t use Microsoft accounts."}
   ]},
   {id:"t1u10-q31", lesson:"t1u10-l4", level:2, q:"Sione has one screen and presents online. What should he share?", options:[
     {t:"A window running the slide show (for example PowerPoint’s “Browsed by an individual (window)” mode), not his whole screen", ok:true, why:"Sharing just the slide window hides notifications and private windows and lets him still see the meeting."},
     {t:"His entire screen, with email open in case questions arrive", why:"Everything on screen is shared, including messages that pop up."},
     {t:"Presenter view, so people can read his notes", why:"Notes are for him, and the slide appears small."},
     {t:"Nothing; he should describe the slides aloud", why:"That loses the visual aid entirely."}
   ]},
   {id:"t1u10-q32", lesson:"t1u10-l4", level:2, q:"What do PowerPoint’s live subtitles need to work well?", options:[
     {t:"A reliable internet connection and a good microphone; speech is sent to Microsoft’s speech service", ok:true, why:"Microsoft says the feature relies on a cloud speech service, recommends a headset microphone and notes your speech is sent to Microsoft."},
     {t:"Nothing: they work offline on any computer", why:"They rely on a cloud service, so a connection is needed."},
     {t:"A second monitor", why:"Subtitles work on one screen."},
     {t:"A slide master with captions turned on", why:"Subtitles are set in Subtitle Settings, not the master."}
   ]},
   {id:"t1u10-q33", lesson:"t1u10-l4", level:3, q:"Amara is very nervous before a talk. Which tip has the best evidence behind it?", options:[
     {t:"Rehearse aloud in realistic conditions, and remember that nerves show far less than they feel", ok:true, why:"Rehearsal builds familiarity, and research on the illusion of transparency found that knowing about it improved speeches."},
     {t:"Avoid rehearsing so she doesn’t overthink it", why:"Skipping rehearsal means discovering problems in front of the audience."},
     {t:"Memorise every word so she never has to think", why:"Word-for-word memorising is fragile: one slip can derail the whole talk."},
     {t:"Tell herself the audience can see how scared she is, so she tries harder", why:"That belief is the illusion of transparency, and it tends to make anxiety worse."}
   ]},
   {id:"t1u10-q34", lesson:"t1u10-l4", level:3, q:"Halfway through an online talk, Oluwaseun’s audience hears no sound from his video. He is sharing a window in Google Meet. What is the likely fix?", options:[
     {t:"Share the sound as well: in Meet, present a Chrome tab (which shares tab audio) or turn on system audio when sharing a window or screen", ok:true, why:"Google’s help says window and full-screen sharing need system audio turned on; tab sharing includes the tab’s audio."},
     {t:"Turn up the volume on his laptop", why:"The audience can’t hear what isn’t being shared, however loud it is locally."},
     {t:"Switch to presenter view", why:"Presenter view doesn’t send sound to the meeting."},
     {t:"Add captions to the video", why:"Captions help, but they don’t fix missing audio."}
   ]},
   {id:"t1u10-q35", lesson:"t1u10-l4", level:2, q:"Why repeat or rephrase an audience question before answering?", options:[
     {t:"So the whole room, remote listeners and any recording hear what you are answering", ok:true, why:"Questions from the floor often aren’t picked up by microphones or heard at the back."},
     {t:"To use up time", why:"Repeating briefly isn’t about time; it is about everyone hearing the question."},
     {t:"Because you must never answer the first time", why:"There is no such rule; repetition is for clarity."},
     {t:"To change the question into an easier one", why:"Rephrasing should be faithful, not a way to dodge."}
   ]},
   {id:"t1u10-q36", lesson:"t1u10-l4", level:3, q:"Mei’s talk uses Keynote, and a colleague who is hard of hearing will join online. What is the best way to provide live captions?", options:[
     {t:"Use the meeting app’s live captions (or the computer’s own captions), and put key names and terms on the slides", ok:true, why:"Keynote has no built-in live captions, but most meeting apps do, and everyone can turn them on. Written terms help when captions get names wrong."},
     {t:"Turn on Keynote’s Subtitle Settings", why:"That is a PowerPoint feature; Keynote doesn’t have built-in live captions."},
     {t:"Speak more slowly and skip captions", why:"Pace helps a little, but captions give a text version of the talk."},
     {t:"Send the slides afterwards only", why:"Useful, but the colleague would miss the talk itself."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u10-q37", lesson:"t1u10-l5", level:1, q:"Where is PowerPoint’s accessibility checker?", options:[
     {t:"Review → Check Accessibility", ok:true, why:"It opens the Accessibility pane in desktop PowerPoint and PowerPoint for the web, and also runs in the background."},
     {t:"Design → Slide Size", why:"That sets the aspect ratio."},
     {t:"Slide Show → Rehearse Timings", why:"That times your rehearsal."},
     {t:"View → Slide Master", why:"That edits the deck’s design."}
   ]},
   {id:"t1u10-q38", lesson:"t1u10-l5", level:1, q:"Why should every slide have a unique title, even if it is hidden?", options:[
     {t:"Screen reader users navigate by slide titles, and identical or missing titles leave them lost", ok:true, why:"Microsoft recommends a unique, descriptive title on every slide; a title can be moved off the slide if the design needs it hidden."},
     {t:"Titles make the file smaller", why:"Titles don’t affect file size meaningfully."},
     {t:"Apps won’t save a deck without titles", why:"They will; the problem is accessibility and navigation."},
     {t:"Titles are needed for transitions to work", why:"Transitions work without titles."}
   ]},
   {id:"t1u10-q39", lesson:"t1u10-l5", level:1, q:"What usually decides the order in which a screen reader reads objects on a slide?", options:[
     {t:"The reading order, which usually follows the order objects were added", ok:true, why:"It may not match where objects sit, so check it in PowerPoint’s Reading Order pane, or build with placeholders."},
     {t:"Their position from top to bottom", why:"Position doesn’t set the reading order."},
     {t:"Their colour", why:"Colour has no effect on reading order."},
     {t:"Their size, largest first", why:"Size doesn’t set the order either."}
   ]},
   {id:"t1u10-q40", lesson:"t1u10-l5", level:2, q:"About how big is a 2-minute video that plays at 8 megabits per second?", options:[
     {t:"About 120 MB", ok:true, why:"120 seconds × 8 megabits per second = 960 megabits; ÷ 8 bits per byte = 120 megabytes."},
     {t:"About 960 MB", why:"960 is the number of megabits. Divide by 8 to get megabytes."},
     {t:"About 16 MB", why:"That multiplies 2 minutes by 8 without converting minutes into seconds."},
     {t:"About 2 MB", why:"Far too small: the rate is per second, over 120 seconds."}
   ]},
   {id:"t1u10-q41", lesson:"t1u10-l5", level:2, q:"Which is a good reason to share a PDF rather than a live link?", options:[
     {t:"You want a fixed final version that opens anywhere and can’t be accidentally edited", ok:true, why:"A PDF keeps the layout and fonts; a link gives the latest version and control over access."},
     {t:"You want several people editing together this week", why:"That needs a shared link with edit permission."},
     {t:"You want the animations to play", why:"PDFs don’t keep animations or video."},
     {t:"You want to update it later and have everyone see the change", why:"A PDF is a snapshot; only a live link updates."}
   ]},
   {id:"t1u10-q42", lesson:"t1u10-l5", level:2, q:"What happens when a 16:9 deck is shown on a 4:3 screen?", options:[
     {t:"The whole slide shows, with empty bands above and below", ok:true, why:"The slide fits the width; nothing is cropped or stretched."},
     {t:"The sides of each slide are cut off", why:"Presentation apps scale slides to fit rather than crop them."},
     {t:"The text is stretched vertically", why:"The slide keeps its proportions."},
     {t:"The deck refuses to play", why:"Mismatched ratios still play."}
   ]},
   {id:"t1u10-q43", lesson:"t1u10-l5", level:3, q:"Kenji’s chart uses only red for “late” and green for “on time”. A colleague with colour vision deficiency can’t tell them apart. What’s the best fix?", options:[
     {t:"Add labels or symbols (“late” ✗, “on time” ✓) so colour isn’t the only signal", ok:true, why:"A second signal works for everyone, including on washed-out projectors and greyscale printouts."},
     {t:"Make the red brighter", why:"Brightness doesn’t fix colour-only meaning for someone who can’t distinguish the hues."},
     {t:"Add a colour legend", why:"A legend still depends on matching colours."},
     {t:"Use two shades of green", why:"Two similar colours are even harder to tell apart."}
   ]},
   {id:"t1u10-q44", lesson:"t1u10-l5", level:3, q:"Before emailing her deck to another organisation, what should Ana check that people often forget?", options:[
     {t:"The speaker notes, comments and hidden slides, because they travel with the file", ok:true, why:"Private notes or comments can reach the recipients. PowerPoint’s Inspect Document can find and remove them."},
     {t:"Whether the transitions are all the same", why:"Consistency is nice, but it isn’t a risk when sharing."},
     {t:"Whether the file name is in capitals", why:"File name style isn’t the risk here."},
     {t:"Whether the slide numbers start at 1", why:"Minor, and not a privacy or accessibility risk."}
   ]},
   {id:"t1u10-q45", lesson:"t1u10-l5", level:3, q:"Lucía made her deck in Google Slides and wants a quick accessibility check. What should she know?", options:[
     {t:"Google Slides has no built-in accessibility checker, so she should check titles, alt text, contrast, colour use and link text by hand", ok:true, why:"Google’s help covers alt text, contrast and links but doesn’t offer a checker, so a manual list is the way."},
     {t:"She can run Review → Check Accessibility in Google Slides", why:"That is PowerPoint’s menu, not Google Slides’."},
     {t:"Google Slides decks are automatically accessible", why:"Accessibility depends on how the deck is built."},
     {t:"Accessibility checks only matter for printed handouts", why:"They matter most for people using the deck on screen, such as screen reader users."}
   ]}
  ]
});
