/* Track 1 · Unit 7 · Troubleshooting and getting help */
ICA.addUnit({
  id:"t1u7", track:"t1", n:7, title:"Troubleshooting and getting help", icon:"🛠️",
  blurb:"A calm, step-by-step method for fixing problems yourself: devices that won’t start, run slowly or won’t connect, misbehaving apps and files, stubborn accessories, and how to ask for help well without falling for fake support.",
  goals:[
    "Use the six-step troubleshooting method that IT professionals learn, adapted for everyday problems",
    "Diagnose devices that won’t start, run slowly or can’t reach the internet, and use safe mode and recovery tools",
    "Fix crashing apps, files that won’t open, sync errors, full storage and basic printing problems",
    "Work through accessory problems: Bluetooth, external displays, microphones in video calls, cables and drivers",
    "Search errors, write a clear help request, spot tech-support scams, and know when a repair or factory reset is the right call"
  ],
  read:[
    {book:"wss", where:"Chapter 2, “Essentials of Software Applications for Business”, Section 2.1 “Software Basics”: “Installing and Maintaining Software”", note:"Short. It covers updates, troubleshooting, Help menus and contacting a software company for support."},
    {book:"wss", where:"Chapter 1, “Technology in Everyday Life and Business”, Section 1.2 “Computer Hardware and Networks”", note:"Background for Lessons 2 and 4: how the parts of a computer and a network fit together."},
    {book:"ics", where:"Background reading: Chapter 2, “Computational Thinking and Design Reusability”, Section 2.1 “Computational Thinking”", note:"Written for computer science students. The parts on decomposition, pattern recognition and “Testing and Debugging” are the thinking behind a troubleshooting method."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u7-l1", title:"A troubleshooting method", minutes:50,
   goals:[
     "Tell a symptom apart from its root cause",
     "Use the six steps of the CompTIA troubleshooting methodology on everyday problems",
     "Find out what changed, reproduce a problem and narrow down where it lives",
     "Test one change at a time, verify the fix and keep useful notes"
   ],
   learn:[
    {h:"From first aid to a method", body:[
      {lead:"Unit 1 gave you first aid: restart, update, free some storage, look at what’s running. That fixes a lot. This lesson is for the problems that survive it."},
      "When first aid fails, people often try things at random. Sometimes it works; often it makes things worse, and nobody knows which change helped. (Unit 1’s {{device-first-aid}} and {{task-manager}} entries refresh the basics.)",
      "[[troubleshooting|Troubleshooting]] is a better way: a methodical search for the cause of a problem and a fix that lasts. Think of how a good doctor works. They don’t prescribe the first medicine that comes to mind. They ask about your symptoms and recent history, form an idea of what’s wrong, run a test to check it, treat it, and then check that you’ve actually recovered.",
      "The doctor’s first job is to separate the [[symptom]] (what you notice) from the [[root-cause|root cause]] (what is actually wrong). A cough is a symptom. It can come from a cold, an allergy or something more serious, and each needs a different treatment. Tech problems are the same:",
      {table:[
        ["Symptom you notice","Possible root causes"],
        ["“The internet is slow”","A busy or weak Wi-Fi signal, a provider problem, one app downloading a huge update, a nearly full device, too many browser tabs"],
        ["“My laptop won’t charge”","A damaged cable, a charger that’s too weak, a dirty or damaged port, a worn-out battery, a power strip that’s switched off"],
        ["“Nobody can hear me on calls”","Muted in the app, the wrong microphone selected, a blocked permission, a headset mute switch, a dead headset battery"]
      ]},
      {key:"Fixing the symptom without finding the cause is guessing. A method turns guessing into a short, orderly search."}
    ]},
    {h:"The six steps professionals use", body:[
      "IT support staff around the world learn a standard method. CompTIA, an organisation that writes widely used IT certifications, includes it in its exam objectives. The current **CompTIA Tech+ (FC0-U71)** objectives list it as objective 1.4, “Explain the troubleshooting methodology”, in six steps (CompTIA’s A+ objectives use almost the same six steps):",
      {ol:[
        "**Identify the problem.**",
        "**Establish a theory of probable cause** (question the obvious). If applicable, research a knowledge base or the internet.",
        "**Test the theory** to determine the cause.",
        "**Establish a plan of action** to resolve the problem and implement the solution.",
        "**Verify full system functionality** and, if applicable, implement preventive measures.",
        "**Document** findings, lessons learned, actions and outcomes."
      ]},
      {fig:'<svg viewBox="0 0 340 412"><defs><marker id="m71" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="29" text-anchor="middle">1 · Identify the problem</text><text class="s" x="123" y="46" text-anchor="middle">symptoms, what changed, reproduce</text><path class="d-ink" d="M123,57 L123,76" stroke-width="2" marker-end="url(#m71)"/><rect class="d-rose" x="10" y="78" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="97" text-anchor="middle">2 · Theory of probable cause</text><text class="s" x="123" y="114" text-anchor="middle">question the obvious, research</text><path class="d-ink" d="M123,125 L123,144" stroke-width="2" marker-end="url(#m71)"/><rect class="d-gold" x="10" y="146" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="165" text-anchor="middle">3 · Test the theory</text><text class="s" x="123" y="182" text-anchor="middle">one change at a time</text><path class="d-ink" d="M123,193 L123,212" stroke-width="2" marker-end="url(#m71)"/><rect class="d-sage" x="10" y="214" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="233" text-anchor="middle">4 · Plan and fix</text><text class="s" x="123" y="250" text-anchor="middle">check side effects, or escalate</text><path class="d-ink" d="M123,261 L123,280" stroke-width="2" marker-end="url(#m71)"/><rect class="d-lup" x="10" y="282" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="301" text-anchor="middle">5 · Verify, then prevent</text><text class="s" x="123" y="318" text-anchor="middle">does everything work now?</text><path class="d-ink" d="M123,329 L123,348" stroke-width="2" marker-end="url(#m71)"/><rect class="d-panel" x="10" y="350" width="226" height="46" rx="9" stroke-width="2"/><text x="123" y="369" text-anchor="middle">6 · Document</text><text class="s" x="123" y="386" text-anchor="middle">what you found, did, learned</text><path class="d-ink" d="M237,171 L316,171 L316,103 L240,103" stroke-width="2" fill="none" marker-end="url(#m71)"/><text class="s" x="276" y="124" text-anchor="middle">not</text><text class="s" x="276" y="139" text-anchor="middle">confirmed?</text><text class="s" x="276" y="154" text-anchor="middle">new theory</text></svg>', alt:"Six boxes stacked from top to bottom with arrows: 1 Identify the problem (symptoms, what changed, reproduce); 2 Theory of probable cause (question the obvious, research); 3 Test the theory (one change at a time); 4 Plan and fix (check side effects, or escalate); 5 Verify, then prevent; 6 Document. An arrow loops from step 3 back to step 2, labelled: not confirmed? new theory.", cap:"The six-step method. If a test doesn’t confirm your theory, go back to step 2 with a new one."},
      "In everyday words:",
      {table:[
        ["Step","In everyday words"],
        ["1 Identify","What exactly is happening, since when, and what changed just before?"],
        ["2 Theory","What’s the most likely cause? Start with the obvious and the cheap to check."],
        ["3 Test","Check that one idea with one small change, and watch the result."],
        ["4 Plan and fix","Decide on the fix, think about what it might break, then do it (or hand it to someone who can)."],
        ["5 Verify","Does everything work now, not just the thing that was broken? Can you stop it happening again?"],
        ["6 Document","Write down what you found and did, so next time takes five minutes."]
      ]},
      "The loop matters. If a test shows the theory was wrong, you’ve ruled something out: go back to step 2 with the next idea. If you run out of theories, or the fix needs skills or permissions you don’t have, hand it on ([[escalation]])."
    ]},
    {h:"Step 1 up close: what exactly, and what changed?", body:[
      "Most of the work happens in step 1. A clear picture of the problem often points straight at the cause. Ask yourself these questions, and write down the answers:",
      {list:[
        "**What exactly happens?** Not “it’s broken” but “the photo app closes as soon as I open an album”.",
        "**Where does it happen?** One app or all of them? One website or every site? One device or every device in the house? This is called the **scope**.",
        "**When did it start?** Today, after a trip, after a storm, gradually over months?",
        "**What changed just before?** An update, a new app, a new cable or charger, a moved router, a dropped phone, a changed password. Problems very often follow changes.",
        "**Is there an exact message?** Copy the [[error-message|error message]] word for word, including any [[error-code|error code]], or take a [[screenshot]]."
      ]},
      "Next, try to [[reproduce]] the problem: can you make it happen again on purpose? A problem you can reproduce can be tested, because you can check whether a change makes it go away. Problems that come and go (“sometimes the call drops”) are harder. For those, note the time and what you were doing each time it happens, and look for a pattern: only on battery, only in one room, only when a certain app is open.",
      {ex:"Kenji’s video freezes during online meetings.\n\nWhat exactly? The picture freezes for a few seconds; the sound keeps going.\nWhere? Only in meetings, and only on his laptop. His phone is fine on the same Wi-Fi.\nWhen? For about a week.\nWhat changed? He moved his desk to the spare room last week.\nReproduce? Yes: it happens in every meeting held in that room, never in the kitchen.\n\nThe scope (only the laptop, only in one room) and the change (the move) point to a weak Wi-Fi signal in the new room, not a broken laptop or meeting app.", label:"Worked example: identifying the problem"},
      {tip:"Start your notes before you change anything. Once you start fixing, it’s easy to forget what the problem looked like at the start."}
    ]},
    {h:"Theories and tests: one change at a time", body:[
      "A [[hypothesis-tech|theory of probable cause]] is your best guess at the root cause, one you can test. Order your theories by two things: how **likely** each one is, and how **cheap** it is to check. A loose cable is both likely and quick to check, so it comes before “the motherboard has failed”.",
      "CompTIA’s step 2 says **question the obvious**. Professionals check the obvious first because it is so often the answer: Is it plugged in and switched on? Is the volume up? Is airplane mode on? Is the monitor set to the right input? Is the app actually muted? Nobody is too experienced to check these.",
      "The most powerful test is a **swap**: change one part of the setup for one you know works, and see whether the problem follows it.",
      {table:[
        ["Swap test","If the problem goes away","If the problem stays"],
        ["Try a different cable or charger","The original cable or charger is likely faulty","The cable wasn’t the cause; look elsewhere"],
        ["Try the accessory on another device","Your first device or its settings are likely the cause","The accessory itself is likely the cause"],
        ["Try another Wi-Fi network or mobile data","The home network or provider is likely the cause","The device is likely the cause"],
        ["Try another app or browser","That app, or its settings, is likely the cause","The cause is shared: the system, account or network"],
        ["Start in safe mode (Lesson 2)","Something that loads at startup is likely the cause","A core part of the system or hardware is more likely"]
      ]},
      "Make **one change at a time**, then test. If you change three settings at once and the problem disappears, you don’t know which one fixed it. If a change makes no difference, undo it before trying the next, so you don’t leave a trail of unexplained changes.",
      {warn:"Before any change that could lose data (resetting an app, reinstalling, factory resetting, repairing a drive), make sure your important files are backed up. Unit 2 shows how: {{backup}}."}
    ]},
    {h:"Plan, fix, verify, prevent", body:[
      "Once a test confirms the cause, **plan** the fix before doing it. Ask: what could this fix break or delete? Do I need a password, a recovery key or an administrator account? Is this a work or school device, where IT staff should make the change? If the answer is beyond you, [[escalation|escalate]]: hand the problem, with your notes, to someone with more access or skill.",
      "After the fix, **verify full system functionality**. That means more than “the error is gone”. Do the original task again. Check that related things still work: if you reinstalled a printer, print from two different apps; if you changed Wi-Fi settings, check that other devices still connect.",
      "Then think about **prevention**. If a full drive caused the problem, turn on automatic cleanup. If a cheap cable caused it, label or bin it. If an update fixed it, make sure updates are automatic.",
      {ex:"Amara’s printer stopped printing from her laptop (step 1: other family laptops print fine, so the scope is her laptop; she changed nothing she can think of).\nTheory: a stuck job in the print queue. Test: she opens the queue and sees one job marked “Error”. Theory confirmed.\nPlan and fix: cancel that job (nothing else is lost). She cancels it.\nVerify: she prints a test page, then a document from another app. Both work.\nPrevent: she notes that the error happened when the printer ran out of paper mid-job.\nDocument: one line in her notes file, with the date.", label:"Worked example: the whole method in five minutes"}
    ]},
    {h:"Document as you go", body:[
      "Step 6 feels optional, but it turns one lucky fix into lasting skill. A short note helps when the problem returns, helps anyone you ask (Lesson 5), and can support a warranty claim.",
      {ex:"Date: 2026-11-05\nDevice: laptop, Windows 11 (version from Settings → System → About)\nSymptom: video freezes in meetings; sound continues\nError message: none\nWhat changed: desk moved to spare room\nTests: phone fine on same Wi-Fi (laptop or location); laptop fine in kitchen (location)\nCause: weak Wi-Fi signal in spare room\nFix: moved the router to the hallway\nVerified: two meetings without freezing", label:"A troubleshooting note", mono:true},
      "Capture evidence while the problem is visible: a [[screenshot]] of the error, a photo of the screen if the device won’t let you take a screenshot, or a short screen recording of the problem happening. Devices also keep their own records, called [[log-file|log files]]. Support staff may ask for them, and Windows’ **Reliability Monitor** (search for “reliability history”) shows a timeline of crashes and updates."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Troubleshooting is for technical people.”** The method is mostly careful observation and one-change-at-a-time testing.",
        "**“If it’s fixed, it doesn’t matter what fixed it.”** If you don’t know the cause, you can’t prevent it, and the same problem may return at a worse time.",
        "**“Checking the obvious is insulting.”** Professionals do it first because loose cables, mute buttons and airplane mode cause so many problems.",
        "**“Reinstalling everything is the thorough option.”** It’s the drastic option: it can lose data, and it can’t fix a bad cable or a weak signal.",
      ]}
    ]}
   ],
   try:[
    {id:"t1u7-l1-x1", type:"order", q:"Put the six steps of the CompTIA troubleshooting methodology in order.", items:[
      {t:"Identify the problem", why:"First, find out exactly what is happening, its scope and what changed. Everything else depends on this."},
      {t:"Establish a theory of probable cause (question the obvious)", why:"Second, form a testable idea of the cause, starting with the obvious and cheap to check."},
      {t:"Test the theory to determine the cause", why:"Third, check the theory. If it isn’t confirmed, go back and form a new one."},
      {t:"Establish a plan of action and implement the solution", why:"Fourth, once the cause is confirmed, plan the fix (and its side effects), then apply it."},
      {t:"Verify full system functionality and, if applicable, implement preventive measures", why:"Fifth, check that everything works, not just the original symptom, and stop it recurring."},
      {t:"Document findings, lessons learned, actions and outcomes", why:"Last, record what you found and did, so the next fix is faster."}
    ]},
    {id:"t1u7-l1-x2", type:"sort", q:"Sort each statement: is it a symptom (what someone notices) or a root cause (what is actually wrong)?", buckets:["Symptom","Root cause"], items:[
      {t:"“My phone dies by lunchtime.”", b:0, why:"This is what the person notices. The cause could be an old battery, an app running constantly, or poor signal making the phone search for a network."},
      {t:"A video app is stuck running in the background and using the processor constantly.", b:1, why:"This explains why the battery drains and the phone feels warm. It’s a cause you can fix."},
      {t:"“The printer says it’s offline.”", b:0, why:"A message the user sees. Causes include the printer being on a different Wi-Fi network, being switched off, or a stuck queue."},
      {t:"The printer joined the neighbour’s guest Wi-Fi instead of the home network.", b:1, why:"This explains the “offline” message: the laptop and printer are on different networks."},
      {t:"“Everything is really slow today.”", b:0, why:"A symptom with many possible causes, from a big update downloading to a nearly full drive."},
      {t:"The USB-C cable only supports slow charging, so the laptop drains faster than it charges.", b:1, why:"A specific, testable cause: swapping the cable would confirm it."}
    ]},
    {id:"t1u7-l1-x3", type:"mcq", q:"Tomás’s desktop computer shows a black screen this morning. The power light is on and he can hear the fan. Applying “question the obvious”, what should he check first?", options:[
      {t:"That the monitor is switched on, its cable is firmly connected and it’s set to the right input", ok:true, why:"The computer seems to be running, so the obvious, cheap checks are on the display side: power, cable and the monitor’s input setting. These take a minute and are common causes."},
      {t:"Reinstall the operating system", why:"That’s drastic, slow and risky for his data, and nothing yet suggests the system is the problem. Obvious checks come first."},
      {t:"Order a new graphics card", why:"Possible in theory, but expensive and far less likely than a loose cable or the wrong input. Test cheap theories before expensive ones."},
      {t:"Search online for “black screen” and follow the first fix he finds", why:"Without identifying the problem first, a random fix may not match his situation and could make it worse."}
    ]},
    {id:"t1u7-l1-x4", type:"mcq", q:"Hana’s laptop wouldn’t connect to Wi-Fi. She updated the Wi-Fi driver, turned off her VPN app, changed a DNS setting and restarted the router, all at once. Now it works. What’s the main problem with her approach?", options:[
      {t:"She can’t tell which change fixed it, and she may have made changes she didn’t need", ok:true, why:"Right. Changing one thing at a time tells you the real cause. Now she doesn’t know whether the VPN, the driver, the DNS setting or the router was to blame, so she can’t prevent a repeat, and she may have left unnecessary changes behind."},
      {t:"Nothing: the problem is fixed, so the method worked", why:"It’s fixed for now, but without knowing the cause she can’t prevent it, and the next time she’ll have to guess again."},
      {t:"She should have reinstalled Windows instead", why:"That’s far more drastic and would also hide the cause. The issue is changing several things at once."},
      {t:"Restarting a router can never fix Wi-Fi problems", why:"Restarting the router fixes many connection problems. It may well have been the fix, but she can’t know."}
    ]},
    {id:"t1u7-l1-x5", type:"match", q:"Match each swap test with what it tells you when the problem goes away.", pairs:[
      ["Headphones work fine when plugged into a different phone.","The first phone or its settings are the likely cause","The headphones worked elsewhere, so they aren’t the problem. Look at the original phone’s settings, port or permissions."],
      ["The laptop charges normally with a friend’s charger and cable.","The original charger or cable is the likely cause","Swapping the power parts fixed it, so the original charger or cable is suspect."],
      ["A website loads on mobile data but not on home Wi-Fi.","The home network or provider is the likely cause","The device and the website both work; the home network path is where the break is."],
      ["The problem disappears in safe mode.","Something that loads at startup is the likely cause","Safe mode loads only essentials, so an extra app, driver or extension is likely to blame."],
      ["A document opens in a different app but not in the usual one.","The usual app or its settings are the likely cause","The file is readable, so the original app (or its version or settings) is the suspect."]
    ]},
    {id:"t1u7-l1-x6", type:"order", q:"Lucía’s laptop has no sound from its speakers. Put her troubleshooting in a sensible order.", items:[
      {t:"Note exactly what happens: no sound from any app, since this morning, after an update installed overnight.", why:"Identify the problem first: the scope (all apps) and the change (an overnight update) are valuable clues."},
      {t:"Check the obvious: volume level, mute key, and which output device is selected.", why:"Question the obvious before deeper theories. A changed output device or mute is common and quick to check."},
      {t:"Test one theory: plug in headphones to see whether sound works through them.", why:"A swap test. If headphones work, the speakers or their settings are suspect; if not, the problem is shared, such as a driver."},
      {t:"Apply the fix she planned (for example, rolling back the audio driver), after checking it won’t delete files.", why:"Only after a test points to a cause does she plan and apply a fix, checking its side effects."},
      {t:"Play sound in two different apps and restart to check it stays fixed, then write a short note.", why:"Verify full functionality and document. Testing more than one app confirms the fix is complete."}
    ]},
    {id:"t1u7-l1-x7", type:"mcq", q:"Which note would help a helper (or Lucía herself next month) the most?", options:[
      {t:"“Phone, Android 15. Since Tuesday the camera app closes when I switch to video. Photos work. Started after installing a new filter app. Restarted twice; no change.”", ok:true, why:"It has the device and system, the exact symptom and its scope (video only), when it started, what changed, and what was already tried. A helper can go straight to testing the new filter app theory."},
      {t:"“My phone is broken again, please help ASAP.”", why:"It gives no device details, no symptom, no timing and nothing tried. Anyone helping must start from zero."},
      {t:"“Camera not working. Tried everything.”", why:"“Not working” and “tried everything” hide the useful details: what exactly fails and which steps were actually taken."},
      {t:"“I think it’s a virus. Can you reinstall Android?”", why:"It jumps to a theory and a drastic fix without the facts that would let anyone test it."}
    ]}
   ],
   apply:{intro:"Set yourself up to troubleshoot calmly: a log to write in, the device details helpers always ask for, and quick ways to capture evidence.", tasks:[
     {t:"Find your device’s exact model and system version", how:{
       win:["Open **Start → Settings → System → About**.","Note the **Device name**, the **Edition** and **Version** under Windows specifications, and the processor and installed RAM.","Optional: open **Start**, type “reliability”, open **View reliability history**, and look at the timeline of recent crashes and updates."],
       mac:["Choose **Apple menu → About This Mac**.","Note the model name, the chip or processor, and the macOS version number.","Optional: for more detail, click **More Info**."],
       chromeos:["Open **Settings → About ChromeOS**.","Note the ChromeOS version. Select **Additional details** for the model and update channel.","Optional: search your apps for **Diagnostics**, which tests battery, CPU and memory."],
       phone:["iPhone: **Settings → General → About** shows the model name and iOS version.","Android: **Settings → About phone** shows the model and the Android version (sometimes under **Software information**). Menu names vary by maker."]
     }},
     {t:"Practise capturing evidence", how:{
       win:["Screenshot: press [[kbd:Win]] + [[kbd:Shift]] + [[kbd:S]] and drag over the area.","Screen recording: open the **Snipping Tool** app and switch it to video recording mode."],
       mac:["Press [[kbd:Shift]] + [[kbd:Cmd]] + [[kbd:5]]. The toolbar lets you take a screenshot or record the screen."],
       chromeos:["Press [[kbd:Ctrl]] + Show windows key for a full screenshot.","For more options, including screen recording, press [[kbd:Shift]] + [[kbd:Ctrl]] + Show windows key."],
       phone:["iPhone: press the side button and volume up together for a screenshot (on iPhones with a Home button, press the side or top button and the Home button). For a screen recording, add **Screen Recording** to Control Centre and tap it.","Android: press power and volume down together for a screenshot. Many phones have a **Screen record** tile in Quick Settings (Android 11 and later); names vary by maker."]
     }},
     {t:"Start a troubleshooting log", write:"Date · Device and system · Symptom · Exact message · When it started · What changed · Tests and results · Fix · Verified?", how:["Use the headings in the box below, or copy them into a note on your device.","Fill it in for any small problem you’ve had recently, even a solved one.","Keep this log somewhere you can reach from another device, in case the broken device is the one holding it."]}
   ], proof:"Your device’s model and system version written down, a test screenshot and screen recording, and a log entry with the six headings filled in."},
   read:[
     {book:"ics", where:"Background reading: Chapter 2, Section 2.1 “Computational Thinking”: “Decomposition”, “Logical Thinking and Pattern Recognition” and “Testing and Debugging”"},
     {book:"wss", where:"Chapter 2, Section 2.1 “Software Basics”: “Installing and Maintaining Software” (troubleshooting as part of being a software user)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u7-l2", title:"When it won’t start, is slow, or won’t connect", minutes:55,
   goals:[
     "Tell apart no power, no picture and a failed startup, and check each one",
     "Use safe mode and recovery tools to find startup problems",
     "Diagnose slowness before trying to fix it",
     "Work out whether an internet problem is in the device, the Wi-Fi, the router or the provider"
   ],
   learn:[
    {h:"“It won’t turn on”: three different problems", body:[
      {lead:"“It won’t turn on” can mean three quite different things. Working out which one you have saves a lot of time."},
      {table:[
        ["What you see","What it suggests","First checks"],
        ["Nothing at all: no lights, no fan, no sound, no vibration","No power is reaching the device, or the battery is completely empty","Outlet, cable, charger, power strip switch; charge for a while; hold the power button"],
        ["Lights, fan or sounds, but a black screen","The device runs but you can’t see it","Brightness, external monitor power, cable and input, sleep mode"],
        ["It starts, then stops, freezes or restarts in a loop","Something goes wrong while the system loads","Unplug accessories, safe mode, recovery tools (next section)"]
      ]},
      "For **no power**, check the power chain one link at a time: the outlet (try a lamp in it), the power strip’s switch, the cable, the charger, the port. Swap in ones you know work. A completely flat battery may need time: Apple advises charging an iPhone that won’t turn on for an hour before trying again, or for 30 minutes if a low-battery symbol appears.",
      "Next, try a **forced restart**. Holding the power button for about 10 seconds turns off most stuck computers; Apple gives this step for Macs that won’t turn on, and suggests disconnecting accessories, because a faulty one can stop a computer starting. Phones and Chromebooks have their own combinations:",
      {table:[
        ["Device","Forced restart"],
        ["iPhone with Face ID, iPhone 8 or later, iPhone SE (2nd generation or later)","Press and quickly release volume up, press and quickly release volume down, then press and hold the side button until the Apple logo appears (it can take more than 10 seconds). iPhone 7 and earlier use different buttons: see Apple’s support site"],
        ["Android","Varies by maker. Usually hold the power button, or power and a volume button together, until the phone restarts. This can take from a few seconds to a minute (Google says up to 60 seconds on Pixel phones). Check your maker’s support site"],
        ["Chromebook","A **hard reset**: turn it off, then hold Refresh and tap Power, releasing Refresh when it starts. Google says this can delete some files in Downloads, so try it only after other fixes"]
      ]},
      "For a **black screen**, question the obvious: is the brightness turned all the way down? Is an external monitor switched on, firmly cabled and set to the right input (Lesson 4)? On Windows, Microsoft notes that pressing [[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:B]] resets the graphics driver and can bring a picture back.",
      {warn:"Stop and get help if there is a burning smell, smoke, a swollen battery, liquid damage or a device too hot to hold. Unit 1’s {{device-first-aid}} entry explains what to do."}
    ]},
    {h:"Startup trouble: safe mode and recovery tools", body:[
      "When a device starts but misbehaves, the cause may be something that loads with it: a startup app, a [[driver]], an extension. [[safe-mode|Safe mode]] starts the system with only its essential parts, like a restaurant opening with only the core kitchen staff to see whether the problem is the kitchen or one of the extra helpers.",
      {key:"If a problem **disappears** in safe mode, something extra that loads at startup is the likely cause. If it **stays**, look at the core system or the hardware."},
      {table:[
        ["Device","How to start in safe mode (as documented by the maker)"],
        ["Windows 11","Open the [[recovery-environment|Windows Recovery Environment]]: **Settings → System → Recovery**, then next to **Advanced startup** choose **Restart now** (or hold [[kbd:Shift]] while you choose **Restart**). Then **Troubleshoot → Advanced options → Startup Settings → Restart**, and press **4** (or F4) for Safe Mode, **5** (or F5) for Safe Mode with Networking"],
        ["Mac with Apple silicon","Shut down. Press and hold the power button until “Loading startup options” appears. Select your disk, hold [[kbd:Shift]] and click **Continue in Safe Mode**"],
        ["Mac with Intel processor","Turn on or restart and immediately hold [[kbd:Shift]] until the login window appears"],
        ["Android","Varies by maker. On Google Pixel 6 and later: hold power and volume up, then touch and hold **Power off** or **Restart** and tap OK. “Safe mode” appears at the bottom of the screen"],
        ["iPhone and Chromebook","No user safe mode. On a Chromebook, turn off extensions one at a time; on an iPhone, update iOS and remove recently added apps"]
      ]},
      "To leave safe mode, restart normally. On a Mac, **Safe Boot** appears in the menu bar while you’re in safe mode. On Android, Google notes that safe mode removes some Home screen widgets, so take a screenshot of your Home screen first.",
      "On Windows, the recovery environment offers more than safe mode: **Startup Repair**, **Uninstall updates** (useful when problems began straight after an update), **System Restore** and **Reset this PC** (Lesson 5). Microsoft says that if Windows fails to start properly several times in a row, it opens the recovery environment by itself. If your drive is encrypted with BitLocker, some tools ask for the BitLocker recovery key, so know where yours is saved (often in your Microsoft account)."
    ]},
    {h:"Why is it slow? Diagnose before you fix", body:[
      "“Slow” is a symptom with many causes. Buying a new device without diagnosing first is like buying new tyres when the handbrake is on. Look for clues:",
      {table:[
        ["Clue","Likely cause","How to check"],
        ["Slow for the first few minutes after turning on","Too many [[startup-apps|startup apps]]","Windows: **Settings → Apps → Startup**. Mac: **System Settings → General → Login Items & Extensions**"],
        ["Slow all the time; one app near the top of the list","An app using lots of processor or memory","{{task-manager}} (Task Manager or Activity Monitor), sorted by CPU and Memory"],
        ["Slow, and storage almost full","No room for temporary files and updates","Storage settings (Lesson 3 and {{storage-full}})"],
        ["Fan loud, device hot, slows during long tasks","Heat: the device slows itself down to cool off","Vents blocked by a bed or lap? Dust? Charge and use it on a hard surface"],
        ["Slow for hours after a big update","Normal background work, such as indexing files","Leave it on and plugged in for a while, then check again"],
        ["Only websites are slow, other apps are fine","The network, not the device","Next section; Unit 4’s {{bandwidth-latency}}"],
        ["Browser slow with many tabs or extensions","Each tab and extension uses memory","Close tabs, remove extensions you don’t use"]
      ]},
      {ex:"Priya’s three-year-old laptop takes ten minutes to become usable after she signs in. Task Manager’s **Startup apps** tab lists 14 apps set to start automatically, including two game launchers, a printer tool, a music app and a chat app she never uses on this laptop. She turns off the ones she doesn’t need at sign-in (she doesn’t uninstall them). After a restart, the laptop is usable in about a minute. Verify: her antivirus and cloud storage app still start, because she left those on.", label:"Worked example: diagnosing a slow start"},
      {warn:"Avoid “PC cleaner”, “speed booster” and “driver updater” apps from ads or pop-ups. The built-in tools do the useful parts, and some of these apps are scams or bundle unwanted software."}
    ]},
    {h:"No internet: find where the break is", body:[
      "To reach a website, your request travels through a chain: your **device**, its **Wi-Fi** connection, the [[router]], the [[modem]] (sometimes in the same box) and your [[isp|internet service provider]] (Unit 4: {{home-network}}). A break anywhere looks the same: “no internet”. Ask questions that rule out whole sections at once.",
      {fig:'<svg viewBox="0 0 340 392"><defs><marker id="m72" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="41" text-anchor="middle">Just one site or app?</text><rect class="d-sage" x="236" y="10" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="32" text-anchor="middle">That site may</text><text class="s" x="284" y="48" text-anchor="middle">be down: wait</text><path class="d-ink" d="M197,36 L233,36" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="215" y="28" text-anchor="middle">yes</text><path class="d-ink" d="M103,63 L103,90" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="112" y="81">no</text><rect class="d-lup" x="10" y="92" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="114" text-anchor="middle">Other devices on this</text><text x="103" y="132" text-anchor="middle">Wi-Fi working?</text><rect class="d-sage" x="236" y="92" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="114" text-anchor="middle">Fix this</text><text class="s" x="284" y="130" text-anchor="middle">device first</text><path class="d-ink" d="M197,118 L233,118" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="215" y="110" text-anchor="middle">yes</text><path class="d-ink" d="M103,145 L103,172" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="112" y="163">no</text><rect class="d-lup" x="10" y="174" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="196" text-anchor="middle">Works after restarting</text><text x="103" y="214" text-anchor="middle">router and modem?</text><rect class="d-sage" x="236" y="174" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="196" text-anchor="middle">Fixed: note</text><text class="s" x="284" y="212" text-anchor="middle">what worked</text><path class="d-ink" d="M197,200 L233,200" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="215" y="192" text-anchor="middle">yes</text><path class="d-ink" d="M103,227 L103,254" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="112" y="245">no</text><rect class="d-lup" x="10" y="256" width="186" height="52" rx="9" stroke-width="2"/><text x="103" y="278" text-anchor="middle">Provider reports</text><text x="103" y="296" text-anchor="middle">an outage?</text><rect class="d-sage" x="236" y="256" width="96" height="52" rx="9" stroke-width="2"/><text class="s" x="284" y="278" text-anchor="middle">Wait for the</text><text class="s" x="284" y="294" text-anchor="middle">provider’s fix</text><path class="d-ink" d="M197,282 L233,282" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="215" y="274" text-anchor="middle">yes</text><path class="d-ink" d="M103,309 L103,336" stroke-width="2" marker-end="url(#m72)"/><text class="s" x="112" y="327">no</text><rect class="d-rose" x="10" y="338" width="322" height="46" rx="9" stroke-width="2"/><text x="171" y="357" text-anchor="middle">Contact the provider</text><text class="s" x="171" y="374" text-anchor="middle">with your notes and test results</text></svg>', alt:"A vertical decision tree. Question 1: Just one site or app? Yes: that site may be down, wait. No: question 2: Other devices on this Wi-Fi working? Yes: fix this device first. No: question 3: Works after restarting router and modem? Yes: fixed, note what worked. No: question 4: Provider reports an outage? Yes: wait for the provider’s fix. No: contact the provider with your notes and test results.", cap:"A no-internet decision tree. Each “no” rules out part of the chain and moves you one step further from your device."},
      {list:[
        "**Just one site or app?** If everything else works, the problem is probably that service. It may be down for everyone, or its address may not be resolving. Try again later, or check its official status page.",
        "**Other devices on the same Wi-Fi working?** If your phone works but your laptop doesn’t, the network is fine and the problem is the laptop. Go to the device fixes below.",
        "**Works after restarting the router and modem?** If no device can connect, restart the network equipment the way Microsoft describes (next section).",
        "**Provider reports an outage?** Use mobile data to check your provider’s status page or app. If there’s an outage, waiting is the fix. If not, contact the provider with your notes."
      ]},
      {tip:"“Connected, no internet” is a valuable clue. It means your device reached the router over Wi-Fi, but the router isn’t reaching the internet (or isn’t handing out working settings). Look past the Wi-Fi link: router, modem, provider."}
    ]},
    {h:"Fixes for each part of the chain", body:[
      {table:[
        ["Where the break is","What to try"],
        ["This device","Turn airplane mode off and Wi-Fi on. **Forget** the network and join it again (you’ll need the Wi-Fi password). Restart. Install updates. Check the date and time are correct. As a last step, reset network settings (below)"],
        ["Wi-Fi signal","Move closer to the router to test. Thick walls, floors and some appliances weaken the signal. Unit 4’s {{wifi-mobile-data}} explains why"],
        ["Router and modem","[[power-cycle|Power-cycle]] them: unplug the router, then the modem; wait at least 30 seconds; plug in the modem first and wait for its lights to settle; then plug in the router and wait a few minutes (Microsoft’s order)"],
        ["Provider","Check for an outage using mobile data; check cables into the modem; contact the provider"]
      ]},
      "Resetting network settings is a **last resort** because it removes saved Wi-Fi networks and passwords, and on Windows it removes and reinstalls network adapters (you may need to reinstall VPN software afterwards).",
      {list:[
        "**Windows 11:** **Settings → Network & internet → Advanced network settings → Network reset → Reset now**. For a guided check first, Microsoft recommends the network troubleshooter in the **Get Help** app.",
        "**iPhone:** **Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings**.",
        "**Android:** usually **Settings → System → Reset options → Reset Wi-Fi, mobile & Bluetooth** (names vary by maker).",
        "**Mac and Chromebook:** remove the network from the list of known networks in Wi-Fi settings, then join it again."
      ]},
      {ex:"Sione’s whole household lost internet. Two phones and a laptop all show “connected, no internet” (so the devices and the Wi-Fi link are fine; scope: everything). He power-cycles the modem and router in Microsoft’s order. Still nothing. On mobile data he opens his provider’s status page: a fault is listed in his area, with an estimated fix time. He stops changing settings, notes the time, and uses his phone as a [[hotspot]] for an urgent email.", label:"Worked example: following the tree"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Full Wi-Fi bars means the internet works.”** Bars only show the signal between you and the router. The router’s link to the provider can still be down.",
        "**“A slow computer needs more RAM.”** Sometimes. But startup apps, full storage, heat or a slow network are just as common, and cost nothing to fix.",
        "**“Safe mode deletes things.”** It loads less, but it doesn’t remove your files. (Android may remove some Home screen widgets, which you can add back.)"
      ]}
    ]}
   ],
   try:[
    {id:"t1u7-l2-x1", type:"order", q:"Mei’s laptop says “No internet”. Put the questions of the decision tree in the order that rules things out most efficiently.", items:[
      {t:"Is it just one website or app?", why:"First check the scope. If only one service fails, the problem is that service, not the network."},
      {t:"Do other devices on the same Wi-Fi work?", why:"Next, separate the device from the network. If others work, focus on Mei’s laptop."},
      {t:"Does it work after restarting the router and modem?", why:"If no device works, restart the network equipment, which fixes many home network faults."},
      {t:"Does the provider report an outage?", why:"If restarting doesn’t help, check (on mobile data) whether the provider has a fault."},
      {t:"Contact the provider with notes on what was tested", why:"Last, hand it on with evidence. Your notes save time on the support call."}
    ]},
    {id:"t1u7-l2-x2", type:"sort", q:"Where in the chain is each problem most likely to be?", buckets:["This device","Home network (Wi-Fi, router, modem)","Provider or the website"], items:[
      {t:"Ana’s phone can’t load anything at home, but her partner’s phone on the same Wi-Fi works fine.", b:0, why:"Another device works on the same network, so the network is fine. Ana’s phone (or its Wi-Fi settings) is the suspect."},
      {t:"Every device in the house shows “connected, no internet”, and restarting the router and modem fixes it.", b:1, why:"All devices failed and restarting the network equipment fixed it, so the home network equipment was the cause."},
      {t:"One shopping site won’t load on any device, on Wi-Fi or mobile data. Other sites work.", b:2, why:"Only one site fails, everywhere. The site itself is the likely problem."},
      {t:"No device works; restarting the router doesn’t help; the provider’s app shows a fault in the area.", b:2, why:"The provider has reported an outage. Waiting for their fix is the answer."},
      {t:"Dmitri’s laptop works in the living room but loses Wi-Fi in the back bedroom; his phone does too.", b:1, why:"Both devices drop in the same room, so the Wi-Fi signal (router placement or range) is the issue, not either device."},
      {t:"A laptop is in airplane mode after a flight.", b:0, why:"A setting on this one device. Turning airplane mode off fixes it."}
    ]},
    {id:"t1u7-l2-x3", type:"mcq", q:"Oluwaseun’s Windows laptop keeps showing error pop-ups a minute after every sign-in. In Safe Mode, the pop-ups don’t appear. What does that suggest?", options:[
      {t:"Something that loads at startup, such as an app or driver, is the likely cause", ok:true, why:"Safe mode loads only the essentials. The problem disappearing there points to an extra app, service or driver that normally starts with Windows. Next step: check startup apps and recently installed software."},
      {t:"The hardware is failing", why:"Hardware faults usually persist in safe mode, because the same hardware is used. The problem vanishing in safe mode points away from hardware."},
      {t:"He should stay in safe mode permanently", why:"Safe mode is a diagnostic tool. Many features and drivers are missing there. Use it to find the cause, then fix the cause and start normally."},
      {t:"Windows itself is damaged and must be reinstalled", why:"If core Windows were damaged, problems would usually appear in safe mode too. The test points to an add-on, which is a much smaller fix."}
    ]},
    {id:"t1u7-l2-x4", type:"match", q:"Match each clue to the most likely cause of slowness.", pairs:[
      ["Slow for several minutes after signing in, then fine","Too many apps set to start automatically","A slow start that settles down points to startup apps. Check the Startup list."],
      ["Fan roaring, bottom of the laptop hot, slows during long video exports","Heat: the device is slowing itself down to cool off","Devices reduce speed when they get too hot. Check the vents and use a hard surface."],
      ["Only web pages are slow; offline apps are quick","The network, not the computer","If the device is fast offline, the bottleneck is the connection."],
      ["Storage shows 1 GB free; updates keep failing","Storage almost full","With no free space, temporary files and updates have nowhere to go."],
      ["Slow for an afternoon right after a major update","Normal background work, such as file indexing","Systems often re-index and optimise after a big update. Waiting is usually the fix."]
    ]},
    {id:"t1u7-l2-x5", type:"mcq", q:"Every device in Fatima’s flat shows “connected, no internet”. What does “connected” tell her?", options:[
      {t:"The devices reached the router over Wi-Fi; the problem is further along: router, modem or provider", ok:true, why:"Right. “Connected” describes the Wi-Fi link to the router. “No internet” means the router isn’t getting through. She should power-cycle the router and modem, then check for an outage."},
      {t:"All the devices have broken Wi-Fi hardware", why:"Several devices failing in the same way at once points to something they share: the router, modem or provider."},
      {t:"She should reset network settings on every device", why:"That’s a last resort for one misbehaving device, and it wipes saved Wi-Fi passwords. Here the devices are fine; the break is past the Wi-Fi link."},
      {t:"The Wi-Fi password has been changed", why:"With a wrong password the devices wouldn’t show “connected” at all."}
    ]},
    {id:"t1u7-l2-x6", type:"order", q:"Put Microsoft’s steps for restarting a modem and router in order.", items:[
      {t:"Unplug the router’s power cable, then the modem’s.", why:"Both boxes need to be fully off so they start fresh."},
      {t:"Wait at least 30 seconds.", why:"This gives the equipment time to clear its state completely."},
      {t:"Plug the modem back in first and wait for its lights to stop blinking.", why:"The modem connects to the provider. It needs to be ready before the router asks it for a connection."},
      {t:"Plug the router back in and wait a few minutes.", why:"The router then connects through the ready modem and starts handing out connections to your devices."},
      {t:"Test the connection on one device and note the result.", why:"Verify, and document. If it still fails, the next step is checking for a provider outage."}
    ]},
    {id:"t1u7-l2-x7", type:"mcq", q:"Kenji’s Mac won’t turn on at all: no sound, no light, nothing on screen. What should he try first?", options:[
      {t:"Check the power cable, adapter and outlet (swapping in ones that work), then press and hold the power button for about 10 seconds", ok:true, why:"These are Apple’s first steps for a Mac that doesn’t turn on, and they test the cheapest, most likely causes. Unplugging accessories is the next step."},
      {t:"Start the Mac in safe mode", why:"Safe mode needs the Mac to start. With no power or response at all, he must check power first."},
      {t:"Erase the Mac and reinstall macOS", why:"Drastic and impossible without power anyway. Nothing yet suggests a software problem."},
      {t:"Buy a new Mac", why:"Most “won’t turn on” problems have cheap causes. Test those first, and get it checked by a repairer before replacing it."}
    ]}
   ],
   apply:{intro:"Get familiar with these tools while everything works, so you aren’t learning them in a panic. You don’t need to restart into safe mode unless you want to.", tasks:[
     {t:"Review your startup apps", how:{
       win:["Open **Start → Settings → Apps → Startup** (or open Task Manager with [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]] and choose **Startup apps**).","Look at each app set to **On**. Turn off any you don’t need the moment you sign in. This doesn’t uninstall them.","Leave security software and anything you don’t recognise alone; look up unfamiliar names on official sites first."],
       mac:["Open **Apple menu → System Settings → General → Login Items & Extensions**.","Under the list of items that open at login, select any you don’t need and click the **Remove** button. This only stops them opening automatically."],
       chromeos:["Chromebooks start few apps automatically. Instead, open Chrome’s **⋮ menu → Extensions → Manage Extensions** and turn off any extensions you don’t use."],
       phone:["Phones manage startup themselves. Instead, check **Settings → Battery** (iPhone and Android) for apps using a lot of battery in the background, and consider removing ones you don’t use."]
     }},
     {t:"Find your way to safe mode or recovery (without using it)", how:{
       win:["Open **Settings → System → Recovery** and find **Advanced startup**. Don’t press Restart now unless you’ve saved your work.","Find your BitLocker recovery key if your device is encrypted: Microsoft accounts usually store it online. Note where it is."],
       mac:["Choose **Apple menu → About This Mac** and note whether it lists a **Chip** (Apple silicon) or a **Processor** (Intel). Write down the matching safe-mode steps from this lesson."],
       chromeos:["Write down the hard reset steps: turn off, hold Refresh, tap Power. Note that it can delete some Downloads files."],
       phone:["iPhone: practise the force-restart sequence only if your phone is backed up; otherwise just note the steps.","Android: search your phone maker’s support site for “safe mode” plus your model, and note the steps."]
     }},
     {t:"Prepare for an internet outage", how:["Find your router and modem (they may be one box). Note which cables go where; a photo helps.","Find your provider’s outage or status page and app, and bookmark it on your phone so you can check it on mobile data.","Write the power-cycle order in your troubleshooting log: router off, modem off, wait 30 seconds, modem on, wait, router on."]}
   ], proof:"A shorter list of startup apps, your device’s safe-mode or recovery route written in your log, and your provider’s status page saved on your phone."},
   read:[
     {book:"wss", where:"Background reading: Chapter 1, Section 1.2 “Computer Hardware and Networks”: “Operating Systems” and “Networks” (including “Network Hardware”)"},
     {book:"ics", where:"Background reading: Chapter 6, Section 6.1 “What Is an Operating System?”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u7-l3", title:"Apps and files misbehaving", minutes:55,
   goals:[
     "Tell a crash from a freeze, and force an app to quit on each kind of device",
     "Choose between repairing, resetting, offloading and reinstalling an app, knowing what each one deletes",
     "Work out why a file won’t open and fix it",
     "Untangle sync errors, full storage and basic printing problems"
   ],
   learn:[
    {h:"Crashes, freezes and force quitting", body:[
      {lead:"Apps go wrong in two main ways. Telling them apart tells you what to try."},
      "A [[crash]] is when an app closes suddenly by itself, often with a message such as “the app quit unexpectedly”. A [[freeze]] (also called a hang) is when the app stays on screen but stops responding: clicks do nothing, or a spinning wheel or “Not responding” appears. A third case, **slow response**, is often an app waiting for the network or a busy device rather than a broken app.",
      "With a freeze, **wait a minute** first. The app may be busy saving a large file or waiting for a slow network drive, and it may recover with your work intact. If it doesn’t, [[force-quit|force it to quit]]:",
      {table:[
        ["Device","How to force an app to quit"],
        ["Windows","Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]] to open Task Manager, select the app, choose **End task**"],
        ["Mac","Press [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:Esc]] (or **Apple menu → Force Quit**), select the app, click **Force Quit**. If Finder is stuck, select it and click **Relaunch**"],
        ["Chromebook","Open Task Manager (see {{task-manager}}), select the app or tab, choose **End process**"],
        ["iPhone","Swipe up from the bottom of the screen and pause to see open apps, then swipe the app up and off the screen. On models with a Home button, double-click the Home button first"],
        ["Android","Open the recent-apps view and swipe the app away. If it keeps misbehaving: **Settings → Apps →** the app **→ Force stop**"]
      ]},
      {warn:"Force quitting loses anything you hadn’t saved in that app. Apple recommends quitting normally first, because the app can then save changes. Many apps offer to recover an unsaved document the next time you open them, so look for that before starting again."},
      "If one app crashes now and then, that’s normal life with software. If it crashes repeatedly, or at the same point every time, it’s time for the method from Lesson 1: what exactly triggers it, what changed (often an update to the app or the system), and can you reproduce it?"
    ]},
    {h:"A ladder of fixes for a misbehaving app", body:[
      "Work up from the gentlest fix to the most drastic. Each rung fixes more problems but risks more of your data and settings, so only climb when the rung below hasn’t worked.",
      {fig:'<svg viewBox="0 0 340 394"><defs><marker id="m73" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-sage" x="10" y="22" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="41" text-anchor="middle">Close and reopen the app</text><text class="s" x="136" y="58" text-anchor="middle">nothing lost if your work is saved</text><rect class="d-sage" x="10" y="72" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="91" text-anchor="middle">Restart the device</text><text class="s" x="136" y="108" text-anchor="middle">clears stuck memory and drivers</text><rect class="d-sage" x="10" y="122" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="141" text-anchor="middle">Update the app and system</text><text class="s" x="136" y="158" text-anchor="middle">many bugs are already fixed</text><rect class="d-sage" x="10" y="172" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="191" text-anchor="middle">Repair, or clear the cache</text><text class="s" x="136" y="208" text-anchor="middle">keeps your data and settings</text><rect class="d-gold" x="10" y="222" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="241" text-anchor="middle">Reset, or clear storage</text><text class="s" x="136" y="258" text-anchor="middle">deletes the app’s data on this device</text><rect class="d-gold" x="10" y="272" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="291" text-anchor="middle">Uninstall and reinstall</text><text class="s" x="136" y="308" text-anchor="middle">back up local data first</text><rect class="d-lup" x="10" y="322" width="252" height="42" rx="9" stroke-width="2"/><text x="136" y="341" text-anchor="middle">Contact the developer</text><text class="s" x="136" y="358" text-anchor="middle">with your notes and error message</text><text class="s" x="302" y="17" text-anchor="middle">gentle</text><path class="d-ink" d="M302,24 L302,364" stroke-width="2" marker-end="url(#m73)"/><text class="s" x="302" y="384" text-anchor="middle">drastic</text></svg>', alt:"A ladder of seven fixes from gentle at the top to drastic at the bottom: close and reopen the app; restart the device; update the app and system; repair or clear the cache (keeps data); reset or clear storage (deletes the app’s data on this device); uninstall and reinstall (back up local data first); contact the developer.", cap:"Climb from gentle to drastic. The lower rungs can delete data stored only inside the app."},
      "The middle rungs have names that sound similar but do very different things. Knowing the difference is what stops people losing data by accident:",
      {table:[
        ["Option","What it does","What you lose"],
        ["**Repair** (Windows: **Settings → Apps → Installed apps →** ⋯ **→ Advanced options → Repair**)","Checks and fixes the app’s files","Nothing: data is kept"],
        ["**Clear cache** (Android: **Settings → Apps →** the app **→ Storage & cache**)","Deletes temporary files the app can rebuild","Nothing important; the app may be slower once while it rebuilds"],
        ["**Reset** (Windows) or **Clear storage** (Android)","Returns the app to how it was when first installed","The app’s data and settings on this device, including sign-ins"],
        ["**Offload app** (iPhone: **Settings → General → iPhone Storage →** the app)","Removes the app but keeps its documents and data","Nothing: reinstalling it restores your data"],
        ["**Uninstall and reinstall**","A completely fresh copy","Anything stored only inside the app on this device"]
      ]},
      {key:"Before you reset, clear storage or reinstall, ask: “Is this app’s data stored only on this device?” Data synced to an account (most email, notes and cloud photo apps) comes back when you sign in again. Data stored only locally may not."},
      "Always reinstall from an official source: the app store, or the maker’s own website (see Unit 1’s {{installing-apps}}). Microsoft’s own advice for Windows is to try **Repair** first and only use **Reset** if Repair isn’t offered or doesn’t help."
    ]},
    {h:"When a file won’t open", body:[
      "A file that won’t open is a symptom with a handful of common causes. Check them in roughly this order:",
      {table:[
        ["Cause","Clue","Fix"],
        ["No app for it, or the wrong [[default-app|default app]]","The file opens in an odd app, or the system asks which app to use","Open it from inside the right app, or change the default (below)"],
        ["Unfamiliar or newer [[file-format|format]]","An unusual [[file-extension|extension]], such as `.pages`, `.heic` or `.odt`, or “this file was made with a newer version”","Install a compatible app, ask the sender for a common format (such as PDF), or export it (Unit 2: {{file-formats}})"],
        ["Not fully downloaded or synced","A cloud icon on the file, or a size of 0 KB; a download ending in `.crdownload` or `.part`","Download it again; make sure the cloud copy has finished downloading ({{files-on-demand}})"],
        ["Corrupted","An error such as “file is damaged” in every app; garbled content","Download or copy it again from the source; restore an earlier version ({{version-history}}) or a backup"],
        ["No access","“You need permission” or “access denied”; a password prompt","Ask the owner for access, or the password, through a channel you trust"]
      ]},
      "Changing the default app tells your system which app should open a type of file when you double-click or tap it:",
      {list:[
        "**Windows:** **Settings → Apps → Default apps**, then type the extension (such as `.pdf`) in the search box and choose an app. Or right-click the file and choose **Open with**.",
        "**Mac:** select the file in Finder, choose **File → Get Info**, pick an app under **Open with**, then click **Change All** for every file of that type.",
        "**Chromebook:** in the Files app, right-click the file, choose **Open with**, then **Change default**.",
        "**iPhone:** **Settings → Apps → Default Apps** sets defaults for categories such as browser and email. For other files, use the share button and choose the app.",
        "**Android:** **Settings → Apps → Default apps** (names vary). For a single file, open it from the app you want to use."
      ]},
      {warn:"Never “force” open a file you weren’t expecting. A name like `invoice.pdf.exe` or `photo.jpg.scr` is a program in disguise. Unit 3’s {{malware}} entry explains why."}
    ]},
    {h:"Sync errors: when copies disagree", body:[
      "Cloud storage apps keep copies of your files in step across devices ({{sync}} in Unit 2). When they can’t, you usually see a warning icon on the app or on the file, changes that don’t appear on your other devices, or duplicate files with names like “conflicted copy” or the device’s name added (a [[sync-conflict|sync conflict]]).",
      {table:[
        ["Common cause","What to do"],
        ["You’re offline, or the app is paused or signed out","Reconnect, resume syncing, or sign in again"],
        ["Your cloud [[storage-quota|storage quota]] is full","Free space in the cloud account, or upgrade; until then, new changes can’t upload"],
        ["The file is open or locked on another device","Close it everywhere, then let sync finish"],
        ["The same file was edited on two devices before syncing","Open both copies, combine the changes into one, delete the other"],
        ["A file or folder name the service doesn’t accept, or a path that’s too long","Rename it with simple characters, or move it to a shorter path"]
      ]},
      {tip:"Click or tap the sync app’s icon. It usually lists exactly which files have a problem and why, which is far quicker than guessing."}
    ]},
    {h:"Storage full: which “full”?", body:[
      "Unit 1 showed where to see storage and what is safe to remove. Going deeper, the first question is **which storage is full**, because there are three different kinds and each message means something different:",
      {table:[
        ["What’s full","Typical message","Where to look"],
        ["The device’s own storage","“iPhone storage full”, “Low disk space”, “Not enough space to install this update”","The device’s storage settings"],
        ["Your cloud account’s quota","“Your iCloud storage is full”, “Your Google storage is full”, “OneDrive is full”","The cloud provider’s storage page"],
        ["One mailbox","“Mailbox full”, emails bouncing back","Your email account’s storage"]
      ]},
      "Deleting photos from your phone won’t fix a full cloud account if those photos are already in the cloud, and buying more cloud storage won’t fix a full phone. Read the message carefully: it says which one it means. A Google account’s storage, for example, is shared between Gmail, Google Drive and Google Photos, so a full Drive can stop email arriving.",
      "Common hidden space users are videos, media saved by messaging apps, offline downloads in streaming and podcast apps, old phone backups on a computer, installers in the Downloads folder, and a Recycle Bin or Trash that hasn’t been emptied ({{recycle-bin}}). The {{storage-full}} entry goes through each one.",
      {warn:"Before deleting photos or videos to make room, check they’re backed up somewhere else first, and that the backup actually opens ({{restore-test}})."}
    ]},
    {h:"Printing problems: follow the print job", body:[
      "A print job travels through a chain, just like an internet request: the **app** sends it to the [[print-queue|print queue]] on your device, the queue passes it through the printer’s [[driver]], it travels over a **connection** (USB cable or the network), and the **printer** prints it. Microsoft’s Windows printing advice follows that chain:",
      {ol:[
        "**The printer itself:** turn it off, unplug it, wait 30 seconds, plug it back in and turn it on. Check paper, ink or toner, jams and open covers. “Printer in error state” often means one of these.",
        "**The connection:** for a USB printer, check the cable. For a wireless printer, make sure it’s on the **same network** as your device. Printers sometimes join a guest network or an extender’s separate network.",
        "**The queue:** open it and cancel any job marked with an error; one stuck job can block all the others. On Windows: **Settings → Bluetooth & devices → Printers & scanners →** your printer **→ Open print queue**. On a Mac: **System Settings → Printers & Scanners**, select the printer, then open the print queue.",
        "**Remove and add the printer again**, which also refreshes the driver connection.",
        "**The driver:** get the current one from the printer maker’s site if Windows Update doesn’t provide it. Windows 11 also has a printer troubleshooter in the **Get Help** app."
      ]},
      "Phones and Chromebooks usually print over Wi-Fi to compatible printers without a separate driver. If the printer doesn’t appear, the same-network check is the first one to make."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Clear cache and clear storage are the same thing.”** Clearing the cache removes temporary files; clearing storage wipes the app’s data and sign-ins on that device.",
        "**“Reinstalling an app always deletes my stuff.”** Not if your data syncs to an account. It can, if the data lives only in the app on that device.",
        "**“If a file won’t open, it’s corrupted.”** Wrong default app, an unfamiliar format and an unfinished download are all more common.",
        "**“Renaming the extension converts a file.”** Changing `.heic` to `.jpg` only changes the label. To convert, export or save as the new format.",
        "**“The printer is broken.”** Most printing problems are a stuck queue, a different network or a missing driver."
      ]}
    ]}
   ],
   try:[
    {id:"t1u7-l3-x1", type:"order", q:"A note-taking app on Mei’s Android phone keeps crashing. Put these fixes in order, from gentlest to most drastic.", items:[
      {t:"Close the app and reopen it", why:"The gentlest fix: nothing to lose, and it clears a one-off glitch."},
      {t:"Restart the phone", why:"Clears stuck memory and background processes for everything, still without touching data."},
      {t:"Update the app and Android", why:"The crash may already be fixed in a newer version."},
      {t:"Clear the app’s cache", why:"Removes temporary files the app can rebuild. Notes and sign-in stay."},
      {t:"Clear the app’s storage, after checking her notes sync to her account", why:"Resets the app completely and deletes its data on the phone, so she checks her notes are safe elsewhere first."},
      {t:"Uninstall and reinstall from the app store", why:"A fresh copy of the app. Climb to this only when the steps above haven’t worked."}
    ]},
    {id:"t1u7-l3-x2", type:"mcq", q:"Priya’s banking app on Android won’t load past the opening screen. She’s already restarted the phone and updated the app and Android. Which should she try next, and why?", options:[
      {t:"Clear the app’s cache, because it removes temporary files without deleting her data or sign-in", ok:true, why:"Clearing the cache is the next gentle rung. Temporary files can become corrupted, and the app rebuilds them. Clearing storage would also remove her sign-in and settings, so it comes later."},
      {t:"Clear the app’s storage first, because it’s the same as clearing the cache", why:"They’re different. Clearing storage resets the app and deletes its data on the phone, including sign-ins. Try the cache first."},
      {t:"Factory reset the phone", why:"Far too drastic for one misbehaving app. It erases everything on the phone."},
      {t:"Install a cache-cleaning app from an advert", why:"Android has this built in. Cleaner apps from adverts are unnecessary and some are harmful."}
    ]},
    {id:"t1u7-l3-x3", type:"match", q:"Match each situation to the most likely reason the file won’t open.", pairs:[
      ["Tomás on Windows receives `budget.numbers` from a colleague who uses a Mac.","An app-specific format his computer has no app for","`.numbers` is the Mac spreadsheet app’s own format. He can ask for an `.xlsx` or PDF copy, or open it in a web app that supports it."],
      ["A downloaded file is called `report.pdf.crdownload`.","The download didn’t finish","The extra `.crdownload` ending marks an incomplete browser download. Download it again."],
      ["Every PDF opens in a photo app, which shows an error.","The wrong default app for PDFs","The file is fine; the system is sending it to the wrong app. Change the default for `.pdf`."],
      ["A shared file shows “You need permission” when Ana opens the link.","She doesn’t have access to it","The owner hasn’t shared it with her account. She asks the owner for access."],
      ["A file shows “damaged” in every app, and a fresh download opens fine.","The first copy was corrupted","Another copy works, so the original copy was damaged in transfer or storage."]
    ]},
    {id:"t1u7-l3-x4", type:"sort", q:"Which storage is full? Sort each message.", buckets:["The device’s own storage","A cloud account’s quota"], items:[
      {t:"“Not enough space to download this update. Free up space on your phone.”", b:0, why:"The update needs room on the phone itself, so device storage is full."},
      {t:"“Your Google storage is full. You may not be able to send or receive email.”", b:1, why:"A Google account’s storage is shared between Gmail, Drive and Photos; this is the cloud quota."},
      {t:"“Low disk space on Local Disk (C:)”", b:0, why:"C: is the computer’s own drive."},
      {t:"“iCloud storage is full. Photos and files aren’t uploading.”", b:1, why:"The iCloud account is out of space; deleting local apps won’t fix it."},
      {t:"“Cannot take photo: there is not enough available storage.”", b:0, why:"New photos are saved on the device first, so the device is full."},
      {t:"“OneDrive is full. Files can’t sync.”", b:1, why:"The OneDrive account’s quota is used up, so changes can’t upload."}
    ]},
    {id:"t1u7-l3-x5", type:"spot", q:"Lucía’s Downloads folder has these files. She isn’t expecting any parcel deliveries. Tap the ones she shouldn’t double-click (risky, suspicious or unfinished).", ask:"shouldn’t be double-clicked", mono:true, parts:[
      {t:"holiday-photos.zip", flag:false, why:"A normal compressed folder. Extract it to see the photos (Unit 2)."},
      "\n", {t:"invoice_0423.pdf.exe", flag:true, why:"The real extension is `.exe`: a Windows program pretending to be a PDF. Delete it; opening it could install malware."},
      "\n", {t:"timetable.pdf", flag:false, why:"An ordinary PDF. Nothing suspicious in the name."},
      "\n", {t:"recipe-book.epub.part", flag:true, why:"`.part` marks an unfinished download. It won’t open properly; download it again."},
      "\n", {t:"scan_2026-11-02.jpg", flag:false, why:"A normal image file with a sensible date in the name."},
      "\n", {t:"delivery_label.html", flag:true, why:"She isn’t expecting a parcel, and an unexpected `.html` “label” is a common phishing trick: it opens as a web page, often a fake sign-in page. Delete it."}
    ], why:"Check the real extension at the very end of the name, and turn on file extensions if your system hides them (Unit 2)."},
    {id:"t1u7-l3-x6", type:"mcq", q:"Dmitri’s Windows laptop says it sent a document to the printer, but nothing prints. Other laptops in the house print fine. What is the best first check?", options:[
      {t:"Open the print queue and cancel any job showing an error", ok:true, why:"Other laptops print, so the printer and network are working. The problem is on his laptop, and a stuck job in the queue is the most common cause. It’s quick to check and loses nothing."},
      {t:"Buy a new printer", why:"The printer works for everyone else, so it isn’t the cause."},
      {t:"Reset Windows", why:"Far too drastic. The scope (one laptop) points first to his print queue, printer settings or driver."},
      {t:"Replace the ink cartridges", why:"Other laptops print fine through the same printer, so the ink isn’t the problem."}
    ]},
    {id:"t1u7-l3-x7", type:"mcq", q:"Hana edited a document on her laptop and on her tablet while both were offline. Now her cloud folder has `plan.docx` and `plan (Hana’s tablet).docx`. What happened, and what should she do?", options:[
      {t:"A sync conflict: she should open both, combine the changes into one file, then delete the extra copy", ok:true, why:"The service couldn’t know which edits to keep, so it saved both rather than lose either. Merging by hand keeps all her work."},
      {t:"Malware has copied her files", why:"A second copy named after one of her devices is the classic sign of a sync conflict, not malware."},
      {t:"Delete the tablet copy straight away", why:"That would throw away the edits she made on the tablet. Check both copies first."},
      {t:"Her cloud storage is full", why:"A full quota stops uploads; it doesn’t create a named duplicate. This is a conflict between two edited versions."}
    ]}
   ],
   apply:{intro:"Find the repair tools before you need them. Look, but don’t press reset or clear storage unless you’ve checked what you’d lose.", tasks:[
     {t:"Find the repair and reset options for one app", how:{
       win:["Open **Start → Settings → Apps → Installed apps**.","Find an app from the Microsoft Store (such as Calculator or Photos), select **⋯ → Advanced options**.","Note the **Repair** and **Reset** buttons and what Windows says each one does. Close without pressing them."],
       mac:["Open **Finder → Applications**. Note which apps came from the App Store (you can reinstall them from your App Store purchases) and which from a developer’s site.","For a stuck app, practise the Force Quit window: [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:Esc]], then close it without quitting anything."],
       chromeos:["Open **Settings → Apps → Manage your apps**, pick an app and see its options (some Android apps on Chromebooks show **More settings and permissions**, with storage controls)."],
       phone:["iPhone: open **Settings → General → iPhone Storage**, tap an app, and note **Offload App** (keeps data) and **Delete App** (removes data). Don’t tap either now.","Android: open **Settings → Apps**, pick an app, tap **Storage & cache** (names vary), and note **Clear cache** and **Clear storage**."]
     }},
     {t:"Set a default app for one file type", how:{
       win:["Open **Settings → Apps → Default apps**.","Type `.pdf` in the search box and see which app opens PDFs. Change it if you prefer another."],
       mac:["Select any PDF in Finder and choose **File → Get Info**.","Under **Open with**, note the app. Change it and click **Change All** if you want a different default."],
       chromeos:["In the Files app, right-click a PDF, choose **Open with → Change default**, and see the options."],
       phone:["iPhone: open **Settings → Apps → Default Apps** and look at the categories you can change.","Android: open **Settings → Apps → Default apps** (names vary) and see which browser and other defaults are set."]
     }},
     {t:"Check which storage is filling up", how:["Open your device’s storage settings (Unit 1 Lesson 5 lists where) and note the three biggest categories.","Open your main cloud account’s storage page and note how much of the quota is used, and by which service.","Note in your log which one is closer to full. That’s the one to tidy first."]}
   ], proof:"You know where your device keeps the repair, reset or offload options and what each deletes, you’ve checked one default app, and you’ve noted how full both your device and your cloud account are."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.1 “Software Basics”: “Installing and Maintaining Software”"},
     {book:"ics", where:"Background reading: Chapter 6, Section 6.6 “Reliability and Security”: “Recovery” (why a crash in the middle of writing to disk can lose data, and how journaling file systems limit the damage)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u7-l4", title:"Accessories and peripherals", minutes:50,
   goals:[
     "Trace an accessory problem along its chain, from the device itself to the app",
     "Fix Bluetooth pairing problems by understanding what pairing stores",
     "Get a microphone and camera working in video calls, including permissions",
     "Troubleshoot external displays, keyboards and mice, and know when a driver is involved",
     "Explain why two USB-C cables can behave completely differently"
   ],
   learn:[
    {h:"Think in a chain", body:[
      {lead:"Every accessory, from a mouse to a monitor, works through a chain of links. A break in any one of them gives the same symptom: “it doesn’t work”."},
      "Take a microphone in a video call. Your voice has to pass through the microphone itself, then a cable or wireless link, then the operating system’s choice of input device, then its privacy permission for the app, then the app’s or website’s own permission and microphone choice, and finally the app’s mute button. Each link is a different setting in a different place.",
      {fig:'<svg viewBox="0 0 340 436"><defs><marker id="m74" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="26" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="45" text-anchor="middle">1 · Microphone itself</text><text class="s" x="136" y="62" text-anchor="middle">mute switch, plugged in, charged</text><path class="d-ink" d="M136,73 L136,86" stroke-width="2" marker-end="url(#m74)"/><rect class="d-lup" x="10" y="88" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="107" text-anchor="middle">2 · Connection</text><text class="s" x="136" y="124" text-anchor="middle">cable, adapter or Bluetooth link</text><path class="d-ink" d="M136,135 L136,148" stroke-width="2" marker-end="url(#m74)"/><rect class="d-rose" x="10" y="150" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="169" text-anchor="middle">3 · System input setting</text><text class="s" x="136" y="186" text-anchor="middle">right mic chosen, level up</text><path class="d-ink" d="M136,197 L136,210" stroke-width="2" marker-end="url(#m74)"/><rect class="d-rose" x="10" y="212" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="231" text-anchor="middle">4 · System privacy setting</text><text class="s" x="136" y="248" text-anchor="middle">the app may use the mic</text><path class="d-ink" d="M136,259 L136,272" stroke-width="2" marker-end="url(#m74)"/><rect class="d-gold" x="10" y="274" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="293" text-anchor="middle">5 · Browser or app permission</text><text class="s" x="136" y="310" text-anchor="middle">site allowed, right mic picked</text><path class="d-ink" d="M136,321 L136,334" stroke-width="2" marker-end="url(#m74)"/><rect class="d-gold" x="10" y="336" width="252" height="46" rx="9" stroke-width="2"/><text x="136" y="355" text-anchor="middle">6 · Mute button in the call</text><text class="s" x="136" y="372" text-anchor="middle">you are unmuted</text><text class="s" x="300" y="16" text-anchor="middle">your voice</text><path class="d-ink" d="M300,24 L300,388" stroke-width="2" marker-end="url(#m74)"/><rect class="d-sage" x="10" y="394" width="322" height="30" rx="9" stroke-width="2"/><text x="171" y="414" text-anchor="middle">Heard by everyone in the call</text></svg>', alt:"A vertical chain of six boxes your voice passes through, top to bottom: 1 the microphone itself (mute switch, plugged in, charged); 2 the connection (cable, adapter or Bluetooth link); 3 the system input setting (right mic chosen, level up); 4 the system privacy setting (the app may use the mic); 5 the browser or app permission (site allowed, right mic picked); 6 the mute button in the call. At the bottom: heard by everyone in the call.", cap:"The path from your voice to a video call. Check each link in turn; a break anywhere means silence."},
      "This is the Lesson 1 method applied to [[peripheral|peripherals]]: identify the scope (every app or one? every device or this one?), then use swap tests to find the broken link.",
      {table:[
        ["If it works…","…then the problem is probably"],
        ["on another device","this device’s settings, port, driver or permissions"],
        ["in another app","the first app’s own settings or permissions"],
        ["with another cable or adapter","the original cable or adapter"],
        ["in another port","the first port (dirt, damage, or a port that doesn’t support that use)"]
      ]}
    ]},
    {h:"Bluetooth pairing problems", body:[
      "[[bluetooth|Bluetooth]] devices must be [[pairing|paired]] before they connect. Pairing is like two people being introduced and exchanging phone numbers: each device stores a record of the other, with a shared secret so that later connections happen automatically. Most Bluetooth problems come from that introduction going wrong, or from a device that’s busy talking to someone else.",
      {table:[
        ["Problem","Why it happens","Fix"],
        ["The accessory doesn’t appear in the list","It isn’t in **pairing mode** (discoverable)","Follow its manual: often holding a button until a light flashes"],
        ["It pairs, but connects to your phone instead","It reconnects to the last device it knew","Turn Bluetooth off on the other device, or disconnect it there"],
        ["It connected yesterday, not today","A low battery, or out of range","Charge it; move closer; turn it off and on"],
        ["It drops out or crackles","Distance, walls or interference","Move closer. Microsoft notes that unshielded USB 3.0 devices and ports can interfere with Bluetooth"],
        ["It shows as paired but won’t connect","The stored pairing record is broken","**Remove** or **forget** it, then pair again from scratch"]
      ]},
      "To remove a device: on Windows, **Settings → Bluetooth & devices → Devices**, then the device’s **More options → Remove device**. On a Mac, **System Settings → Bluetooth**, then the info button next to the device and **Forget This Device**. On an iPhone, **Settings → Bluetooth**, the info button, **Forget This Device**. On Android, **Settings → Connected devices** (names vary), the settings icon next to the device, then **Forget** or **Unpair**.",
      {tip:"Apple notes that when you forget an accessory on one Apple device, it’s unpaired on all your devices signed in to the same Apple Account. Re-pair it on the one you want to use."},
      "Also check the basics: Bluetooth switched on, airplane mode off, and on Windows laptops any physical wireless switch. If Bluetooth itself is missing or greyed out on Windows, the Bluetooth adapter’s [[driver]] may need updating (see the last section)."
    ]},
    {h:"Microphone and camera in video calls", body:[
      "When people can’t hear or see you, work down the chain in the diagram. The most common causes, roughly in order of how often they catch people out:",
      {ol:[
        "**Muted somewhere.** The app’s mute button, a mute switch or button on the headset, or a microphone key on the keyboard. A camera may have a physical privacy cover or shutter.",
        "**The wrong device chosen.** The app is using the laptop’s built-in microphone while you speak into a headset, or the other way round. Every call app has its own audio and video settings where you choose the microphone, speaker and camera.",
        "**A permission blocked at system level.** Modern systems let you block apps from the microphone and camera completely ([[app-permissions]] in Unit 3). An app without permission hears only silence.",
        "**A permission blocked in the browser.** If the call runs in a web browser, the website also needs permission. Look for a camera or microphone icon in or next to the address bar, or select the site information icon at the left of the address, and set the microphone and camera to **Allow**.",
        "**The hardware or its connection.** A flat headset battery, a loose plug, a headset paired to another device."
      ]},
      {table:[
        ["Device","Where the microphone permission lives"],
        ["Windows 11","**Settings → Privacy & security → Microphone**: turn on **Microphone access**, **Let apps access your microphone**, and (for desktop apps) **Let desktop apps access your microphone**. Choose and test the microphone in **Settings → System → Sound → Input**"],
        ["Mac","**System Settings → Privacy & Security → Microphone**: turn on the app. Choose the microphone in **System Settings → Sound → Input**"],
        ["iPhone","**Settings → Privacy & Security → Microphone**: turn on the app"],
        ["Android","**Settings → Apps →** the app **→ Permissions → Microphone**. On Android 12 and later, also check the **Microphone access** tile in Quick Settings, which blocks the mic for every app"],
        ["Chromebook","Search Settings for “microphone” to check access; in Chrome, check the site’s permission"]
      ]},
      "The camera has a matching setting in the same places, called **Camera**.",
      {ex:"Amara joins a call in her browser. Others see her but can’t hear her.\nApp mute? Off. Headset mute switch? Off.\nWrong device? In the call’s audio settings the microphone is “Headset”, which is right.\nSystem test: in Settings → System → Sound → Input, the level bar moves when she speaks, so the system hears her.\nBrowser permission: the address bar shows a crossed-out microphone. She selects it and chooses **Allow** for this site, then reloads.\nVerify: the call’s mic test shows her voice. Document: “Site had mic blocked; allowed it.”", label:"Worked example: working down the chain"},
      {tip:"Most call apps have a preview or test call. Use it a few minutes before an important meeting, not as the meeting starts."}
    ]},
    {h:"External displays", body:[
      "When a monitor or TV shows nothing, or the wrong thing, check the chain from the screen backwards:",
      {list:[
        "**The display:** switched on, brightness up, and set to the **right input** (HDMI 1, HDMI 2, USB-C, DisplayPort). Use the monitor’s own buttons; this is one of the most common causes.",
        "**The cable and adapter:** firmly connected at both ends. Try another cable. For USB-C, the port, the cable and any adapter must all support video; Apple notes a USB-C or Thunderbolt adapter must support **DisplayPort Alt Mode**, Thunderbolt 3 or Thunderbolt 4.",
        "**The computer’s settings:** on Windows, press [[kbd:Win]] + [[kbd:P]] and choose **Extend** or **Duplicate**, or open **Settings → System → Display → Multiple displays** and select **Detect**. On a Mac, open **System Settings → Displays**; Apple says to hold [[kbd:Option]] to show a **Detect Displays** button.",
        "**The limits:** Apple warns that a display stays dark if you connect more external displays than your Mac supports at once, and that too high a resolution or refresh rate for the Mac, display or cable can also cause problems. Check your model’s technical specifications.",
        "**Hubs and docks:** Microsoft and Apple both suggest connecting the display directly to test, because docks and adapters can cause conflicts."
      ]},
      "On Windows, if the picture flickers, Microsoft offers a neat isolation test: open Task Manager. If Task Manager flickers along with everything else, the display [[driver]] is the likely cause; if everything except Task Manager flickers, an app is the likely cause."
    ]},
    {h:"Cables, adapters and the USB-C puzzle", body:[
      "[[usb-c|USB-C]] is the name of a **connector shape**, not a promise of what the cable can do. Two USB-C cables that look identical can behave completely differently, because the same plug can carry very different things:",
      {table:[
        ["What it can carry","What varies"],
        ["Data","Some USB-C cables carry only USB 2.0 speeds (480 Mbit/s); others carry 5, 10, 20, 40 or 80 Gbit/s"],
        ["Power","USB-C cables are rated for **60 W** or **240 W**; the charger has its own wattage too"],
        ["Video","Only if the port, cable and any adapter support DisplayPort Alt Mode or Thunderbolt"],
        ["Thunderbolt","Uses the same connector, with its own cables and ports for the highest speeds"]
      ]},
      "The USB Implementers Forum (USB-IF), which manages the USB standards, requires every certified USB-C to USB-C cable to be labelled with its power rating, 60 W or 240 W, and every cable faster than USB 2.0 to show its data rate. Cheap or unbranded cables may not be certified at all.",
      {table:[
        ["Symptom","Likely cable or charger cause"],
        ["Laptop charges slowly or says “slow charger”","A charger with too few watts, or a cable not rated for the power"],
        ["External drive copies very slowly","A cable (or port) limited to USB 2.0 speed"],
        ["Monitor shows “no signal” over USB-C","The cable, adapter or port doesn’t support video"],
        ["Phone charges but the computer doesn’t see it","A charge-only cable, or the phone hasn’t allowed file transfer (Android: choose **File transfer** in the USB notification; iPhone: tap **Trust** on the phone)"]
      ]},
      {key:"When a USB-C accessory misbehaves, swap the cable first. Use the cable that came with the device, or one whose label or packaging lists the speed and wattage you need."}
    ]},
    {h:"Keyboards, mice and drivers", body:[
      "For wireless keyboards and mice, check batteries first, then the connection: a Bluetooth link (previous section) or a small USB receiver (try another port, and plug it in directly rather than through a hub). For a mouse that skips, try another surface. For a keyboard that types the wrong symbols (such as `@` where you expect `\"`), the **keyboard layout or language** setting has usually changed: on Windows look for the language abbreviation near the clock, on a Mac the input source menu in the menu bar. Also check keys that change behaviour, such as Num Lock and Fn Lock.",
      "A [[driver]] is the small piece of software that lets the operating system talk to a particular piece of hardware. A [[driver-update|driver update]] can fix a problem, and occasionally cause one:",
      {list:[
        "**Windows:** Windows Update installs most drivers automatically. Extra driver updates appear in **Settings → Windows Update → Advanced options → Optional updates**. If Windows Update has none, Microsoft says to check the device maker’s website. If a problem began right after a driver update, **Device Manager** can roll it back (Microsoft gives this step for display problems).",
        "**Mac, Chromebook, iPhone and Android:** drivers come with system updates. Some accessories (printers, drawing tablets, headsets) have a companion app from their maker, which may also update the accessory’s [[firmware]].",
        "**Never** install drivers from pop-ups, adverts or “driver updater” tools. Use Windows Update or the maker’s official site."
      ]},
      {warn:"On a work or school device, driver changes usually need IT staff. Ask them rather than working around the restriction."}
    ]}
   ],
   try:[
    {id:"t1u7-l4-x1", type:"order", q:"In a browser-based call, nobody can hear Kenji. Put these checks in a sensible order, starting with the quickest and most common.", items:[
      {t:"Check he isn’t muted in the call or on his headset", why:"Mute is the most common cause and takes seconds to check: question the obvious."},
      {t:"Check the call’s audio settings use the right microphone", why:"Choosing the wrong input is very common, especially with a headset and a built-in mic."},
      {t:"Check the system settings: the input level moves when he speaks, and the browser is allowed to use the microphone", why:"Next, the whole-device settings. If the level doesn’t move, the problem is the hardware or connection; if the browser is blocked at system level, it receives only silence."},
      {t:"Check the website’s microphone permission in the browser", why:"Even with system permission, the site itself must be allowed."},
      {t:"Swap in another headset, or try his on another device", why:"If settings all look right, a swap test checks the hardware."}
    ]},
    {id:"t1u7-l4-x2", type:"mcq", q:"Sione’s wireless earbuds won’t show up when he tries to add them to his laptop. They work with his phone, which is in his pocket with Bluetooth on. What’s the most likely problem?", options:[
      {t:"The earbuds are connected to his phone, so they aren’t available for a new pairing", ok:true, why:"Many accessories connect automatically to the last device they knew. He should turn off Bluetooth on the phone (or disconnect the earbuds there), put the earbuds in pairing mode, then add them on the laptop."},
      {t:"The laptop needs a new Bluetooth adapter", why:"Possible but unlikely. The earbuds being busy with the phone explains the symptom without any faulty part."},
      {t:"Earbuds can only ever pair with one device", why:"Most can be paired with several devices; they usually connect to one at a time."},
      {t:"He needs to reset his laptop", why:"Much too drastic. Freeing the earbuds from the phone is the obvious first test."}
    ]},
    {id:"t1u7-l4-x3", type:"match", q:"Match each USB-C problem to the most likely reason.", pairs:[
      ["A 4K monitor shows “no signal” through a cheap USB-C cable, but works with the cable that came with it.","The cheap cable doesn’t support video","Video over USB-C needs DisplayPort Alt Mode (or Thunderbolt) support along the whole path, cable included."],
      ["Copying photos to an external SSD takes far longer than its box promises.","The cable or port is limited to USB 2.0 speed","USB 2.0 is 480 Mbit/s, far slower than a modern SSD. A faster cable and port fix it."],
      ["A laptop warns “slow charger connected” with a small phone charger.","The charger doesn’t supply enough watts","Laptops need much more power than phones. The charger’s wattage is too low."],
      ["An Android phone charges from the computer, but no files appear.","File transfer hasn’t been allowed on the phone","Android starts in charging mode; choose File transfer in the USB notification."]
    ]},
    {id:"t1u7-l4-x4", type:"sort", q:"Lucía’s microphone problem could be in a setting for the whole device or in a setting inside one app or website. Sort each setting.", buckets:["Whole-device (system) setting","Inside one app or website"], items:[
      {t:"Windows: Settings → Privacy & security → Microphone → Microphone access", b:0, why:"This system switch affects every app on the computer."},
      {t:"The microphone chosen in a video app’s audio settings", b:1, why:"Each app keeps its own choice of microphone."},
      {t:"Android’s Microphone access tile in Quick Settings", b:0, why:"It blocks the microphone for every app on the phone."},
      {t:"A website’s microphone permission in the browser", b:1, why:"This applies only to that website."},
      {t:"The mute button inside the call", b:1, why:"It mutes you in that call only."},
      {t:"Mac: System Settings → Sound → Input", b:0, why:"It sets the system’s default input device for the whole Mac."}
    ]},
    {id:"t1u7-l4-x5", type:"mcq", q:"Fatima connects her laptop to a monitor through a USB-C hub. The monitor says “no signal”. Which test isolates the problem fastest?", options:[
      {t:"Connect the monitor directly to the laptop with a cable known to carry video, then try the hub again", ok:true, why:"A swap test that removes the hub. If the direct cable works, the hub (or its cable) is the weak link. Both Microsoft and Apple suggest connecting directly to test."},
      {t:"Update every driver on the laptop", why:"A broad change that doesn’t test a specific theory. The hub is the most likely suspect; test it first."},
      {t:"Buy a bigger monitor", why:"The monitor’s size has nothing to do with “no signal”."},
      {t:"Turn off Bluetooth", why:"Bluetooth has nothing to do with a wired monitor connection."}
    ]},
    {id:"t1u7-l4-x6", type:"mcq", q:"Since this morning, Tomás’s keyboard types `@` when he presses the key that usually gives `\"`, and some other symbols have moved too. Letters are fine. What’s most likely?", options:[
      {t:"The keyboard layout or input language has changed", ok:true, why:"Swapped symbols with correct letters are the classic sign of a different layout (for example, a US layout instead of a UK one). A keyboard shortcut can switch layouts by accident. He can check the language indicator near the clock on Windows, or the input menu on a Mac."},
      {t:"The keyboard is broken", why:"A broken key would fail or type nothing; consistent swapped symbols point to a setting."},
      {t:"He needs a new keyboard driver from a download site", why:"Layouts are an operating system setting. Drivers from download sites are also a malware risk."},
      {t:"Num Lock is on", why:"Num Lock affects the number pad, not which symbols the main keys produce."}
    ]},
    {id:"t1u7-l4-x7", type:"order", q:"Ana’s Bluetooth speaker shows as “paired” on her laptop but never connects. Put the fix in order.", items:[
      {t:"Charge the speaker and turn it off and on", why:"Rule out the obvious first: a low battery causes many connection failures."},
      {t:"Remove the speaker from the laptop’s Bluetooth device list", why:"The stored pairing record may be broken, so delete it."},
      {t:"Put the speaker into pairing mode, following its manual", why:"It must be discoverable before the laptop can find it again. Pairing mode usually switches off after a short time, so turn it on just before adding it, once the old record is gone."},
      {t:"Add it again on the laptop and connect", why:"A fresh pairing creates a new, working record on both devices."},
      {t:"Play sound to verify, then note what fixed it", why:"Verify and document, as in Lesson 1."}
    ]}
   ],
   apply:{intro:"Check your call setup and your accessories while nothing is urgent.", tasks:[
     {t:"Check microphone and camera permissions, then test", how:{
       win:["Open **Settings → Privacy & security → Microphone**. Check the three switches and which apps are allowed. Then do the same for **Camera**.","Open **Settings → System → Sound**. Under **Input**, choose your microphone, select it and run the microphone test."],
       mac:["Open **System Settings → Privacy & Security → Microphone** and check which apps are allowed. Then **Camera**.","Open **System Settings → Sound → Input**, pick your microphone and watch the input level as you speak."],
       chromeos:["Open Settings and search for “microphone” to check device access.","In Chrome, visit a site you use for calls, select the site information icon at the left of the address bar, and check **Microphone** and **Camera**."],
       phone:["iPhone: **Settings → Privacy & Security → Microphone**, then **Camera**: check the call apps you use.","Android: **Settings → Apps →** a call app **→ Permissions**. Swipe down twice to check the **Microphone access** and **Camera access** tiles (Android 12 and later; not on every phone)."]
     }},
     {t:"Tidy your Bluetooth device list", how:{
       win:["Open **Settings → Bluetooth & devices → Devices**. Remove any device you no longer own or use (**More options → Remove device**)."],
       mac:["Open **System Settings → Bluetooth**. For devices you no longer use, click the info button and **Forget This Device**."],
       chromeos:["Open **Settings → Bluetooth** and remove devices you no longer use."],
       phone:["iPhone: **Settings → Bluetooth**, info button, **Forget This Device**.","Android: **Settings → Connected devices** (names vary), settings icon next to a device, **Forget** or **Unpair**."]
     }},
     {t:"Sort your cables", how:["Gather your USB-C cables and chargers. Look for printed ratings (such as 60W or 240W, or a speed such as 10Gbps or 40Gbps) on the cable, plug or packaging.","Note each charger’s wattage, printed in small text on it.","Label the cable that came with each device, and set aside any that only charge slowly or don’t carry data."]}
   ], proof:"You’ve checked microphone and camera permissions and tested your microphone, removed old Bluetooth devices, and labelled your cables by what they can do."},
   read:[
     {book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”: “Personal Computers and Devices” (peripherals)"},
     {book:"ics", where:"Background reading: Chapter 6, Section 6.1 “What Is an Operating System?” (how the operating system manages hardware such as accessories)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u7-l5", title:"Getting help well", minutes:55,
   goals:[
     "Search error messages effectively and judge forum answers and help pages",
     "Write a help request that someone can act on straight away",
     "Know what support staff will ask, and when remote access is safe",
     "Recognise tech-support scams using official warnings, and know what to do if you’ve been caught",
     "Back up before a repair, use warranties and legal rights, and treat a factory reset as the last resort"
   ],
   learn:[
    {h:"Search like a technician", body:[
      {lead:"Almost every problem you’ll meet has happened to someone before. The skill is finding their answer quickly and judging whether it fits your situation."},
      "Start from the [[error-message|error message]] and [[error-code|error code]], copied exactly. The exact wording is what other people searched for and what official help pages contain. Then build your search in layers:",
      {table:[
        ["Layer","Example"],
        ["The exact message or code, in quotation marks","`\"0x80070070\"`"],
        ["The product and its version","`Windows 11 update`"],
        ["The action that triggers it, if no code","`\"Cannot take photo\" iPhone 15 storage`"],
        ["A site you trust, if results are noisy","adding the maker’s name, such as `Microsoft support`"]
      ]},
      "Remove anything personal before searching: your name, email address, file names and account numbers. They don’t help the search and can end up in places you didn’t intend.",
      {ex:"Too vague: printer not working\nBetter: printer offline Windows 11\nBest: \"Printer in error state\" Windows 11 Wi-Fi printer\n\nThe best search uses the exact status text, the system, and the detail that matters (a Wi-Fi printer, not a USB one).", label:"Worked example: building a search", mono:true},
      "Prefer the **official help pages** of whoever makes the device, system or app. Many keep a [[knowledge-base|knowledge base]] of articles for known problems, and many apps have a **Help** menu or a [[kbd:F1]] key that opens their own help. These are written for current versions and won’t suggest something unsafe.",
      {tip:"AI chatbots can be useful for explaining an error in plain words or suggesting theories to test. They can also be confidently wrong about menu names and steps, especially for new versions. Check what they suggest against official help before you act on it (Unit 6 covers why)."}
    ]},
    {h:"Reading forums and help pages critically", body:[
      "A [[forum]] is an online discussion board where people ask and answer questions. Forums, including the official community sites many companies run, are full of solutions, and also of outdated, wrong or risky advice. Read them like a careful detective:",
      {list:[
        "**Does it match your situation?** Same device, same system version, same error? An answer about Windows 10 may not apply to Windows 11.",
        "**How recent is it?** Menus and features change. Prefer answers from the last year or two.",
        "**Who answered?** Many official forums mark staff, moderators or answers the original poster confirmed worked.",
        "**Do you understand what it does?** If a step involves commands, registry edits or system files you don’t understand, stop and look for an official page that explains it.",
        "**Does it ask you to weaken security?** “Turn off your antivirus”, “disable updates” or “install this tool from my link” are red flags."
      ]},
      {table:[
        ["Advice you might find","Verdict"],
        ["“Restart, check for updates, then try again.”","Safe and often right"],
        ["“Microsoft’s support article for this error says to free up 10 GB. Here’s the link.”","Good: it points to an official source you can check"],
        ["“Download FixAllErrors.exe from my site.”","Unsafe: unknown software from a stranger"],
        ["“Just turn off your antivirus permanently.”","Unsafe: it removes your protection"],
        ["“Reinstall Windows, it’s quicker.”","Drastic: try the gentler rungs first and back up"]
      ]}
    ]},
    {h:"Write a help request people can act on", body:[
      "Whether you’re posting in a forum, emailing a help desk or opening a [[support-ticket|support ticket]] (a numbered request in a support system), the person reading can’t see your screen. A good request gives them everything from your Lesson 1 notes, in an order they can scan:",
      {ol:[
        "**A one-line summary** naming the device and the problem.",
        "**Device and versions:** model, operating system and version, app and version.",
        "**What you were doing, what you expected and what happened.**",
        "**The exact error message or code**, with a [[screenshot]] if you can.",
        "**When it started and what changed** just before.",
        "**What you’ve already tried**, and what happened each time.",
        "**What you need:** a fix, advice, or a decision such as whether it’s worth repairing."
      ]},
      {ex:"Subject: Laptop won’t print after Wi-Fi change (Windows 11)\n\nDevice: [laptop model], Windows 11 (from Settings → System → About)\nPrinter: [printer model], connected by Wi-Fi\nProblem: Since Monday, printing shows “Printer offline”. The other two laptops in the house print fine.\nWhat changed: we got a new router on Monday.\nTried: restarted laptop and printer (no change); cleared the print queue (no change); the printer’s own network report says it’s on the old network name.\nQuestion: how do I move the printer onto the new Wi-Fi network?", label:"Worked example: a clear help request", mono:true},
      {warn:"Never include passwords, full card numbers or one-time codes in a help request. Real support staff don’t need them in writing, and anyone who asks for a code you’ve been sent should be treated as a scammer (Unit 3: {{social-engineering}})."}
    ]},
    {h:"What support staff will ask, and why", body:[
      "Support staff follow the same method you learned in Lesson 1, so their questions are predictable. Having the answers ready makes the conversation shorter.",
      {table:[
        ["They ask","Why"],
        ["“Have you restarted it?”","It clears a huge share of problems. Say yes, and how (Restart, not Shut down, on Windows)"],
        ["“What model and version?”","Fixes differ between versions"],
        ["“Can you make it happen again?”","They need to reproduce it to test a fix"],
        ["“Does it happen in safe mode, another account or another network?”","Swap tests narrow down where the problem lives"],
        ["“What’s the serial number?”","To check the warranty and the exact hardware"],
        ["“May I connect to your device?”","[[remote-access|Remote access]] lets them see and control your screen"]
      ]},
      "**Remote access can be legitimate**, for example when your workplace IT team or a company you contacted through its official website helps you. It’s reasonable when **you** started the contact through a channel you found yourself, you can watch everything they do, and you can end the session. It is never reasonable when someone contacted **you** first."
    ]},
    {h:"Tech-support scams", body:[
      "A [[tech-support-scam|tech-support scam]] is a fraud where criminals pretend to be technical support. They contact you, or trick you into contacting them, and claim your device has a problem. Then they ask for remote access, payment for a fake fix, or both. Common openings: a full-screen browser pop-up with alarms and a phone number, a cold call “from Microsoft” or your internet provider, fake support numbers in search adverts, and “refund” calls claiming you were overcharged.",
      "Official warnings are clear and consistent:",
      {list:[
        "The US Federal Trade Commission (FTC): **legitimate tech companies won’t contact you by phone, email or text message to tell you there’s a problem with your computer**, and **real security pop-up warnings will never ask you to call a phone number**.",
        "The FTC also notes that these scammers often insist on payment by **gift cards, wire or bank transfer, cryptocurrency or a payment app**, because the money is hard to get back.",
        "Microsoft: it **never proactively reaches out with unsolicited PC or technical support**, and **genuine Microsoft error messages never include a phone number to call**.",
        "Northern Ireland’s official nidirect site describes “refund” versions, where a caller claims to overpay a refund and asks you to send the difference back."
      ]},
      {fig:'<svg viewBox="0 0 340 428"><defs><marker id="m75" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="6" y="6" width="328" height="200" rx="12" stroke-width="2"/><text x="170" y="28" text-anchor="middle">Safe: you start the contact</text><rect class="d-sage" x="18" y="40" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="59" text-anchor="middle">You notice a problem</text><text class="s" x="170" y="76" text-anchor="middle">you decide to get help</text><path class="d-ink" d="M170,85 L170,94" stroke-width="2" marker-end="url(#m75)"/><rect class="d-sage" x="18" y="96" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="115" text-anchor="middle">You find official support yourself</text><text class="s" x="170" y="132" text-anchor="middle">maker’s site or app, or a shop you chose</text><path class="d-ink" d="M170,141 L170,150" stroke-width="2" marker-end="url(#m75)"/><rect class="d-sage" x="18" y="152" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="171" text-anchor="middle">Help through that channel</text><text class="s" x="170" y="188" text-anchor="middle">you can watch and end any remote session</text><rect class="d-panel" x="6" y="220" width="328" height="200" rx="12" stroke-width="2"/><text x="170" y="242" text-anchor="middle">Scam: they start the contact</text><rect class="d-rose" x="18" y="254" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="273" text-anchor="middle">A pop-up, call or message finds you</text><text class="s" x="170" y="290" text-anchor="middle">“Your device is infected!”</text><path class="d-ink" d="M170,299 L170,308" stroke-width="2" marker-end="url(#m75)"/><rect class="d-rose" x="18" y="310" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="329" text-anchor="middle">Pressure to act right now</text><text class="s" x="170" y="346" text-anchor="middle">“Call this number. Don’t restart.”</text><path class="d-ink" d="M170,355 L170,364" stroke-width="2" marker-end="url(#m75)"/><rect class="d-rose" x="18" y="366" width="304" height="44" rx="9" stroke-width="2"/><text x="170" y="385" text-anchor="middle">Remote access, then payment</text><text class="s" x="170" y="402" text-anchor="middle">gift cards, crypto, transfers: stop</text></svg>', alt:"Two panels. Safe, you start the contact: you notice a problem; you find official support yourself (maker’s site or app, or a shop you chose); help through that channel, where you can watch and end any remote session. Scam, they start the contact: a pop-up, call or message finds you saying your device is infected; pressure to act right now (call this number, don’t restart); remote access, then payment by gift cards, crypto or transfers: stop.", cap:"The key difference is who started the contact. Real support doesn’t find you; you find it."},
      "**If a scary pop-up appears**, don’t call the number. Close the browser tab or the browser. If it won’t close, force the browser to quit (Lesson 3), and when you reopen it, don’t restore the previous session. If you’re worried, run your built-in security scan yourself.",
      {table:[
        ["If you already…","Do this"],
        ["Let them connect to your device","Disconnect from the internet. Uninstall any remote-access app they had you install. Run a full security scan. Then change important passwords from another, trusted device"],
        ["Gave a password","Change it straight away, and anywhere you reused it (FTC advice); turn on two-step verification"],
        ["Paid, or gave card or bank details","Contact your bank or card company immediately, using the number on your card or in its app"],
        ["Any of these","Report it: in the US at ReportFraud.ftc.gov; to Microsoft at microsoft.com/reportascam for Microsoft impersonation; elsewhere through your country’s official fraud reporting service (Unit 3: {{incident-response}})"]
      ]}
    ]},
    {h:"Repairs, warranties and the last resort", body:[
      "Before anyone repairs your device, including you, **back up** your files and check the backup opens ({{backup}}, {{restore-test}}). Repairs can end with a wiped or replaced drive. Also remove the device from accounts or security features only if the repairer asks you to, and follow their instructions.",
      "A [[warranty]] is a promise to fix faulty goods. Know which kinds you have:",
      {list:[
        "**The maker’s warranty:** check your coverage on the maker’s official support site, usually with the serial number.",
        "**Your legal rights:** many countries give buyers rights over faulty goods regardless of any warranty. In the EU, for example, you always have a minimum **2-year legal guarantee** from the seller, and a shop’s or maker’s extra guarantee can’t reduce it. Check your own country’s consumer rights agency.",
        "**Extended warranties and insurance:** read what they cover (accidental damage? batteries?) before paying."
      ]},
      "Go to a repair shop (the maker’s, an authorised one, or an independent one with good reviews) for physical damage, a swollen battery, liquid, a failing drive, or when the method has run out of theories.",
      "A [[factory-reset|factory reset]] erases your data, settings and apps and returns the device to how it left the factory. It fixes stubborn software problems and is essential before selling a device, but it’s the **last resort**:",
      {table:[
        ["Device","Where it is"],
        ["Windows 11","**Settings → System → Recovery → Reset PC**. **Keep my files** removes apps and settings; **Remove everything** also removes files"],
        ["Mac (Apple silicon or T2 chip, macOS Monterey or later)","**System Settings → General → Transfer or Reset → Erase All Content and Settings**"],
        ["Chromebook (Powerwash)","Sign out, press and hold [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Shift]] + [[kbd:R]], then select **Restart** and **Powerwash**"],
        ["iPhone","**Settings → General → Transfer or Reset iPhone → Erase All Content and Settings**"],
        ["Android","Usually **Settings → System → Reset options → Erase all data (factory reset)**; names vary by maker"]
      ]},
      {warn:"Before a reset: back up and test the backup; make sure you know the passwords for the accounts on the device (Google says an Android phone asks for its Google Account after a reset, and suggests waiting 24 hours after changing that password); have your BitLocker recovery key for an encrypted Windows PC; and charge the device. Work or school devices: ask IT first."}
    ]}
   ],
   try:[
    {id:"t1u7-l5-x1", type:"spot", q:"While browsing, Mei’s screen fills with this warning and a loud alarm. Tap the warning signs that it’s a scam.", ask:"is a scam sign", parts:[
      {t:"Windows Security Alert", flag:false, why:"A title naming a real product isn’t proof either way: anyone can type it. The other signs give it away."},
      "\n", {t:"Your computer has been BLOCKED due to a virus.", flag:true, why:"Real security software doesn’t lock your whole screen inside a web page. This is a browser page pretending to be a system message."},
      "\n", {t:"Call Microsoft Support now: +1-800-555-0199", flag:true, why:"Microsoft says its genuine error messages never include a phone number, and the FTC says real security pop-ups never ask you to call."},
      "\n", {t:"Do not restart or close this window, or your files will be deleted.", flag:true, why:"A threat designed to stop her doing exactly the right thing: closing the browser."},
      "\n", {t:"Error code: 0x80070005", flag:false, why:"Real error codes look like this, and scammers copy them to seem convincing. A code alone isn’t a sign either way."},
      "\n", {t:"A technician will guide you through the payment of the unlock fee.", flag:true, why:"Payment to “unlock” a device is the scammer’s goal."}
    ], why:"Close the browser (force quit it if needed), don’t restore the session, and run a scan with her built-in security app if she’s worried."},
    {id:"t1u7-l5-x2", type:"spot", q:"Oluwaseun receives this email. He doesn’t recognise the company and doesn’t remember buying any protection plan. Tap the warning signs.", ask:"is a warning sign", parts:[
      "From: ", {t:"Tech Support Billing <billing@pc-careplus-renew.com>", flag:true, why:"A company he’s never heard of, on a domain unrelated to any service he uses."},
      "\nSubject: ", {t:"Your 3-year protection plan has renewed: $399.99", flag:true, why:"A large, surprise charge is designed to alarm him into calling. If he never bought it, it’s bait."},
      "\n\nDear customer, ", {t:"thank you for being a valued member.", flag:false, why:"Polite filler appears in real and fake emails alike. It isn’t a sign by itself."},
      " ", {t:"To cancel and get a refund, call 1-888-555-0143 within 24 hours.", flag:true, why:"The phone number in the message plus a deadline: the refund scam pattern. Calling leads to a request for remote access."},
      " ", {t:"The charge will appear on your statement.", flag:false, why:"A real receipt might say this too. The safe move is to check his actual bank or card statement himself."}
    ], why:"The FTC advises: don’t call the number in the message; check your bank or card account yourself. No matching transaction means it’s a scam."},
    {id:"t1u7-l5-x3", type:"order", q:"Twenty minutes ago, Ana let a caller “from her internet provider” connect to her laptop. She’s now suspicious. Put her next steps in the best order.", items:[
      {t:"Hang up and disconnect the laptop from the internet", why:"First, cut off the caller’s access so nothing more can be done remotely."},
      {t:"Uninstall the remote-access app she was told to install", why:"Remove their way back in before reconnecting."},
      {t:"Run a full scan with her built-in security software", why:"Check for anything else they may have installed."},
      {t:"From another trusted device, change her important passwords and check bank accounts", why:"The caller may have seen passwords or saved logins. Use a device they didn’t touch."},
      {t:"Report the scam through her country’s official fraud reporting service", why:"Reporting comes after securing herself, and helps protect others."}
    ]},
    {id:"t1u7-l5-x4", type:"mcq", q:"Kenji’s phone says “Cannot take photo: there is not enough available storage”. Which search is most likely to find a useful answer quickly?", options:[
      {t:"`\"Cannot take photo\" \"not enough available storage\" iPhone 15`", ok:true, why:"It uses the exact message in quotation marks plus his device model, so the results are pages about exactly this message on this device."},
      {t:"`my phone camera is broken help`", why:"Vague words match millions of unrelated pages, and “broken” isn’t even the problem."},
      {t:"`Kenji photo error kenji.t@example.com`", why:"Personal details don’t help the search and shouldn’t be pasted into search boxes or forums."},
      {t:"`best new phone 2026`", why:"It jumps to replacing the phone. The message says storage is full, which is usually fixable."}
    ]},
    {id:"t1u7-l5-x5", type:"sort", q:"Hana finds these answers in a forum thread about her error. Sort each one.", buckets:["Reasonable to try","Risky: don’t follow"], items:[
      {t:"“Restart, run Windows Update, then try again.”", b:0, why:"Safe, simple and often effective."},
      {t:"“Here’s the official support article for this error code, with the steps.”", b:0, why:"It points to a source she can check, written by the maker."},
      {t:"“Download my free FixPro tool from this link.”", b:1, why:"Unknown software from a stranger’s link is a classic malware route."},
      {t:"“Turn off your antivirus permanently, it causes this.”", b:1, why:"Even if security software is involved, turning protection off permanently creates a bigger problem."},
      {t:"“Check whether it happens in a new user account.”", b:0, why:"A swap test that changes nothing permanent and narrows the cause."},
      {t:"“Paste this long command into an admin prompt” (with no explanation)", b:1, why:"Unexplained admin commands can change or delete system settings. Find an official explanation first."}
    ]},
    {id:"t1u7-l5-x6", type:"mcq", q:"Priya is about to factory reset her Android phone. She has backed it up. What else must she check first?", options:[
      {t:"That she knows the password for the Google Account on the phone, because the phone will ask for it after the reset", ok:true, why:"Google says that after a reset you must sign in to your Google Account, and suggests confirming you know the username and password (and waiting 24 hours after a password change). Without it, she can be locked out of her own phone."},
      {t:"That she has turned off the screen lock", why:"Not needed. Google asks you to know your screen lock PIN, pattern or password, not to turn it off. The Google Account password is what the phone asks for after the reset."},
      {t:"That she has deleted all her photos by hand", why:"The reset erases them anyway. What matters is that they’re backed up first."},
      {t:"Nothing else: a backup is all she needs", why:"A backup is essential, but without the Google Account password she may not be able to set up the phone again. Charging it is also wise."}
    ]},
    {id:"t1u7-l5-x7", type:"match", q:"Match each question a support person asks with the reason they ask it.", pairs:[
      ["“What model and system version is it?”","Fixes and menus differ between versions","The right answer for one version can be wrong for another."],
      ["“Can you make it happen while I watch?”","To reproduce it, so a fix can be tested","A problem you can reproduce can be tested before and after a change."],
      ["“Does it happen in safe mode?”","To see whether something that loads at startup is involved","Safe mode is a swap test that removes extras."],
      ["“What’s the serial number?”","To check the warranty and exact hardware","Serial numbers identify the specific device and its coverage."],
      ["“What did you already try?”","To avoid repeating steps and to learn from the results","Your earlier tests are evidence that narrows the cause."]
    ]},
    {id:"t1u7-l5-x8", type:"mcq", q:"In which situation is letting someone have remote access to your computer reasonable?", options:[
      {t:"You opened a support request on your workplace’s IT portal, a technician asks to connect, and you can watch and end the session", ok:true, why:"You started the contact through a channel you know is official, and you stay in control. That’s how legitimate remote support works."},
      {t:"A caller says your computer is sending out viruses and offers to fix it remotely for free", why:"An unsolicited call claiming a problem is the classic tech-support scam opening. Microsoft and the FTC both say real companies don’t do this."},
      {t:"A pop-up tells you to call a number, and the person who answers asks to connect", why:"Real security pop-ups never ask you to call a number, so whoever answered is part of the scam."},
      {t:"A “refund department” calls to return money you didn’t know you were owed and needs to connect to process it", why:"This is the refund scam pattern described by the FTC and nidirect: the goal is access to your bank account."}
    ]}
   ],
   apply:{intro:"Prepare your help kit now: a request you could send, your warranty details, and a plan for the worst case.", tasks:[
     {t:"Write a help request for a real or imagined problem", write:"Summary · Device and versions · What I did, expected, got · Exact message · When it started and what changed · What I tried · What I need", how:["Pick a problem from your troubleshooting log, or a recent annoyance.","Fill in the seven parts in the box. Remove personal details you wouldn’t want a stranger to see.","Read it as if you were the helper: could you start testing straight away?"]},
     {t:"Find your official support routes and warranty", how:["Find your device maker’s official support site and save it as a bookmark (type the address yourself or use the link in the device’s own settings or support app).","Find your device’s serial number (Windows: often on a label or in the maker’s support app; Mac: **Apple menu → About This Mac**; phones: **Settings → General → About** on iPhone, **Settings → About phone** on Android).","Check the warranty status on the maker’s site and write the end date in your log.","Note your country’s official consumer rights or fraud reporting service."]},
     {t:"Make a factory-reset readiness check (don’t reset)", how:{
       win:["Find **Settings → System → Recovery → Reset PC** but don’t press it.","Check your backup is recent and opens, and that you know where your BitLocker recovery key is."],
       mac:["Find **System Settings → General → Transfer or Reset** but don’t erase.","Check Time Machine or your cloud backup is recent, and that you know your Apple Account password."],
       chromeos:["Check your important files are in Google Drive, not only in Downloads.","Note the Powerwash steps from this lesson in your log."],
       phone:["iPhone: check **Settings → [your name] → iCloud → iCloud Backup** shows a recent backup, and that you know your Apple Account password.","Android: check your backup in **Settings → System → Backup** (or Google settings; names vary), and that you know your Google Account password."]
     }}
   ], proof:"A complete help request in your notes, your maker’s support site bookmarked with your warranty end date, and a written check that you could reset your device without losing anything."},
   read:[
     {book:"wss", where:"Chapter 2, Section 2.1 “Software Basics”: “Installing and Maintaining Software” (Help menus and contacting the software company for support)"},
     {book:"ncsc", where:"Background reading: the “Top tips for staying secure online” collection, for securing accounts after a scam (strong separate email password and 2-step verification)"}
   ]
  }
  ],
  checkpoint:["t1u7-q02","t1u7-q06","t1u7-q11","t1u7-q14","t1u7-q17","t1u7-q20","t1u7-q24","t1u7-q29","t1u7-q33","t1u7-q38","t1u7-q41","t1u7-q44"],
  codex:[
   {id:"troubleshooting-method", title:"The troubleshooting method", aka:["CompTIA troubleshooting methodology","six steps","problem solving"], tags:["troubleshooting","basics"],
    summary:"Six steps for finding the real cause of a problem and fixing it for good: identify, theorise, test, plan and fix, verify, document.",
    levels:{
     starter:[
      "When something goes wrong with a device, it’s tempting to try random fixes. A method is faster and safer. IT professionals learn six steps:",
      {ol:["**Identify the problem:** what exactly happens, where, since when, and what changed.","**Think of the most likely cause**, starting with the obvious.","**Test that idea** with one small change.","**Plan the fix and do it**, checking what it might delete or break.","**Check everything works**, and stop it happening again.","**Write down** what you found and did."]},
      "It’s like a doctor: symptoms and history first, then a diagnosis, a test, the treatment and a follow-up. The most important habit is changing **one thing at a time**, so you know what worked.",
      {key:"Symptom first, cause second, fix third. Never the other way round."}
     ],
     builder:[
      "CompTIA’s current Tech+ (FC0-U71) exam objectives list the methodology as objective 1.4. The wording (the A+ objectives use almost the same steps) is: identify the problem; establish a theory of probable cause (question the obvious; research a knowledge base or the internet if applicable); test the theory to determine the cause; establish a plan of action to resolve the problem and implement the solution; verify full system functionality and, if applicable, implement preventive measures; document findings, lessons learned, actions and outcomes.",
      {table:[["Step","Key questions"],["Identify","What exactly? Where (scope)? When? What changed? Can I reproduce it? What’s the exact error?"],["Theory","What’s most likely and cheapest to check? What’s obvious (power, cables, mute, airplane mode)?"],["Test","What single change will confirm or rule out this theory? If ruled out, what’s next?"],["Plan and fix","What could this delete or break? Do I need a key, password or admin rights? Should I escalate?"],["Verify","Does the original task work? Do related things still work? How do I prevent a repeat?"],["Document","Date, device, symptom, error, tests, cause, fix, result"]]},
      "**Swap tests** are the workhorse of step 3: replace one part with a known-good one (cable, charger, accessory, network, app, user account) and see whether the problem follows it.",
      "If a test doesn’t confirm the theory, return to step 2. If you run out of theories, or the fix needs skills or permissions you lack, escalate with your notes."
     ],
     pro:[
      "Professionals add structure to step 1. They separate **multiple problems** and tackle them one at a time, define the **scope** (one user or many, one device or all), and look for **recent changes**: updates, new software, configuration changes, moved equipment. A CompTIA article on the method also lists gathering information from log files and error messages, questioning users and duplicating the problem.",
      {list:["**Bisection:** when many things could be at fault, test half of them at once (for example, disable half the browser extensions). Whichever half contains the fault gets halved again. This finds one culprit among many in very few tests.","**Layered approaches:** for networks, work from the bottom up (cable, Wi-Fi link, address, router, DNS, website) or from the top down. Either way, test layers in order rather than jumping around.","**Backups before changes:** any change that might lose data comes after a confirmed backup.","**Change control:** in organisations, fixes that affect many people are planned, approved and scheduled, with a way to roll back.","**Root-cause analysis:** after an incident, ask “why?” repeatedly until you reach a cause you can prevent (the update failed → the disk was full → a log file grew without limit)."]},
      "Documentation is what makes a team better over time: a searchable knowledge base of past problems and fixes means the next person solves it in minutes.",
      {tip:"Keep notes even for problems you solve alone. Your own past notes are often the fastest search you can do."}
     ]
    },
    related:["device-first-aid","getting-help","safe-mode-recovery","task-manager"],
    read:[{book:"ics", where:"Background reading: Section 2.1 “Computational Thinking”: “Decomposition” and “Testing and Debugging”"}],
    sources:[{t:"CompTIA Tech+ (FC0-U71) Certification Exam Objectives, v1.2 (PDF)", url:"https://lecbyo.files.cmp.optimizely.com/download/61a4296ef29311eea8adea242fd2debe"},{t:"CompTIA: Use a troubleshooting methodology for more efficient IT support", url:"https://www.comptia.org/blog/troubleshooting-methodology"}], checked:"2026-11"},

   {id:"wont-turn-on", title:"A device that won’t turn on", aka:["no power","black screen","dead device","forced restart"], tags:["troubleshooting","hardware"],
    summary:"Tell no power from no picture from a failed startup, then check power, force a restart, and check the display.",
    levels:{
     starter:[
      "“It won’t turn on” can mean three things:",
      {list:["**No power at all:** no lights, fan, sound or vibration.","**Power but a black screen:** lights or fan come on, but you see nothing.","**It starts, then stops**, freezes or restarts in a loop."]},
      "For **no power**, check the outlet, the power strip switch, the cable and the charger, swapping in ones you know work. Let a flat battery charge for a while: Apple suggests an hour for an iPhone that won’t turn on. Then hold the power button for about 10 seconds and press it again.",
      "For a **black screen**, check brightness and, for a monitor, its power, cable and input setting.",
      {warn:"Stop if there’s smoke, a burning smell, a swollen battery or liquid damage. Unplug it if it’s safe to, and get it repaired."}
     ],
     builder:[
      {table:[["Device","Forced restart"],["Mac","Hold the power button (or Touch ID) for about 10 seconds, release, then press it normally"],["iPhone (Face ID models, iPhone 8 or later, SE 2nd gen or later)","Volume up (press, release), volume down (press, release), then hold the side button until the Apple logo"],["Android","Varies by maker: usually hold power (or power and a volume button) until it restarts, which can take up to a minute; check the maker’s site"],["Chromebook","Hard reset: turn off, hold Refresh, tap Power; release Refresh when it starts"],["Windows PC","Hold the power button until it turns off, wait, then turn it on"]]},
      "Apple also advises unplugging accessories (printers, drives, hubs, phones) and trying again, because a faulty accessory can block startup. For a Mac with no built-in display, check that the external display has power, is connected and is turned on.",
      "If Windows runs but the screen is black or flickering, Microsoft suggests [[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:B]], which resets the graphics driver. If startup begins and then fails, see {{safe-mode-recovery}}.",
      "Google says a Chromebook hard reset can delete some files in the Downloads folder, so try it after other fixes.",
      "A device showing a charging or low-battery symbol but refusing to start usually just needs longer on the charger. If it still won’t start, swap in a different cable and charger with enough power before suspecting the device itself."
     ],
     pro:[
      "Think of startup as a sequence: power reaches the board; [[firmware]] runs its self-test; the firmware finds a startup disk; the operating system loads drivers and services; you sign in. The symptom tells you how far it got.",
      {list:["**No signs of life:** power path or battery. Try a known-good charger with enough wattage, a different outlet, and a long charge. Some laptops have a battery-reset pinhole or a documented button combination; check the maker’s support site.","**Fans spin, nothing else:** possibly display, memory or board faults; external display tests help separate the screen from the computer.","**Mac shows a question mark or a circle with a line through it:** the Mac is on but can’t find or use a startup disk. Apple has specific articles for each symbol.","**Intel Macs:** Apple documents an SMC reset for some older Intel models; Apple says Macs with Apple silicon don’t need it.","**Startup loops on Windows:** Windows should open its recovery environment after repeated failed starts; from there, Startup Repair or Uninstall updates often help."]},
      "If a device has been dropped or got wet, don’t keep trying to power it on: that can turn a repairable fault into a dead board. Get it to a repairer, and say what happened.",
      {tip:"Write down exactly what you see and hear during startup (lights, sounds, logos, how far it gets). Repairers use this pattern to diagnose."}
     ]
    },
    related:["device-first-aid","safe-mode-recovery","peripherals-problems","getting-help"],
    sources:[{t:"Apple Support: If your Mac doesn’t turn on", url:"https://support.apple.com/en-in/102623"},{t:"Apple Support: If your iPhone won’t turn on or the screen is black", url:"https://support.apple.com/116940"},{t:"Chromebook Help: Reset your Chromebook hardware", url:"https://support.google.com/chromebook/answer/3227606?hl=en"}], checked:"2026-11"},

   {id:"safe-mode-recovery", title:"Safe mode and recovery tools", aka:["safe mode","Windows Recovery Environment","WinRE","safe boot","startup settings"], tags:["troubleshooting","system"],
    summary:"Start a device with only its essentials to see whether an add-on is to blame, and use built-in recovery tools when it won’t start properly.",
    levels:{
     starter:[
      "[[safe-mode|Safe mode]] starts your computer or phone with only the parts it really needs. Extra apps, some drivers and add-ons stay switched off.",
      "It’s a test, not a fix. If a problem **disappears** in safe mode, something extra that normally starts with the device is the likely cause, such as an app or a driver. If the problem **stays**, the cause is more likely the core system or the hardware.",
      "Safe mode doesn’t delete your files. To leave it, restart normally. (On Android, safe mode can remove some Home screen widgets, so take a screenshot of your Home screen first.)",
      "Windows also has a [[recovery-environment|recovery environment]]: a separate set of repair tools you can open even when Windows won’t start properly."
     ],
     builder:[
      {table:[["Device","Getting there"],["Windows 11","**Settings → System → Recovery → Advanced startup → Restart now** (or [[kbd:Shift]] + Restart). Then **Troubleshoot → Advanced options → Startup Settings → Restart**; press 4/F4 (Safe Mode) or 5/F5 (with Networking)"],["Mac, Apple silicon","Shut down; hold power until “Loading startup options”; select the disk; hold [[kbd:Shift]] and click **Continue in Safe Mode**"],["Mac, Intel","Start up and immediately hold [[kbd:Shift]] until the login window"],["Android","Varies. Pixel 6 and later: hold power and volume up, touch and hold **Power off** or **Restart**, tap OK"],["iPhone, Chromebook","No user safe mode; remove recent apps or extensions one at a time"]]},
      "On a Mac, “Safe Boot” appears in the menu bar; Apple also shows **Boot Mode: Safe** in System Information. On Android, “Safe mode” appears at the bottom of the screen, and Pixel phones turn on airplane mode automatically.",
      "To find a problem app on Android, Google suggests removing recently downloaded apps one at a time, restarting normally after each, until the problem goes away.",
      "Windows’ recovery environment offers **Startup Repair**, **Uninstall updates**, **System Restore**, **Startup Settings**, **Command Prompt** and **Reset this PC**. Some tools ask for your BitLocker recovery key if the drive is encrypted.",
      "Use safe mode for testing, not for everyday work: some drivers, display settings and network features are missing there, so things may look or behave oddly. Once you’ve found the culprit, restart normally and fix it."
     ],
     pro:[
      {list:["**Automatic entry:** Microsoft says that if Windows fails to start correctly several times, it opens the recovery environment automatically. You can also reach it from a USB recovery drive or installation media.","**Stuck in safe mode on Windows:** Microsoft says a restart should be enough; if not, open `msconfig`, choose the **Boot** tab and clear **Safe boot**.","**What safe mode loads:** Windows loads a minimal set of drivers and services; Safe Mode with Networking adds network drivers so you can download a fix. macOS safe mode starts the Mac without some of the software that normally loads at startup, which is how it shows whether that software is the cause.","**Clean boot (Windows):** a related technique that starts Windows normally but with third-party services and startup apps disabled, then re-enables them in halves to find the culprit.","**Mac recovery:** macOS Recovery (from the same startup options screen on Apple silicon) can reinstall macOS, run Disk Utility or restore from Time Machine.","**Android maker differences:** Samsung, Motorola and others use different button combinations; always check the maker’s own instructions."]},
      "Treat safe mode results as evidence. If the problem vanishes, list what normally loads at startup (startup apps, drivers installed recently, browser extensions) and re-enable them one at a time, or in halves."
     ]
    },
    related:["wont-turn-on","troubleshooting-method","slow-device","factory-reset"],
    sources:[{t:"Microsoft Support: Windows startup settings", url:"https://support.microsoft.com/help/4026206"},{t:"Apple Support: Start up your Mac in safe mode", url:"https://support.apple.com/en-gb/guide/mac-help/mh21245/"},{t:"Android Help: Find problem apps by rebooting to safe mode", url:"https://support.google.com/android/answer/7665064?hl=en"}], checked:"2026-11"},

   {id:"slow-device", title:"A slow device", aka:["slow computer","lag","slow startup","startup apps"], tags:["troubleshooting","performance"],
    summary:"Diagnose slowness from its clues (startup, one busy app, full storage, heat, network) before trying a fix.",
    levels:{
     starter:[
      "“Slow” is a symptom, not a cause. Before buying anything, look for clues:",
      {list:["Slow just after you sign in? Too many apps start automatically.","Slow all the time? One app may be using lots of the processor or memory ({{task-manager}}).","Storage almost full? The system has no room to work.","Hot and noisy? The device slows itself down to cool off.","Only websites slow? It’s the internet, not the device."]},
      "Fix the cause you find, then check whether it helped. Restarting and updating (Unit 1) come first, because they fix many slow devices.",
      "Change one thing, then see whether it helped, so you know which fix worked.",
      {warn:"Avoid “speed booster” and “cleaner” apps from adverts or pop-ups. Built-in tools do the useful parts."}
     ],
     builder:[
      {table:[["Cause","Where to check"],["Startup apps","Windows: **Settings → Apps → Startup** or Task Manager’s **Startup apps** tab. Mac: **System Settings → General → Login Items & Extensions**"],["A busy app","Task Manager or Activity Monitor, sorted by CPU and Memory"],["Full storage","Storage settings ({{storage-full}})"],["Heat","Feel the vents; avoid soft surfaces; clean dust carefully"],["Background work after updates","Leave the device on and plugged in for a while"],["Browser overload","Close tabs; remove unused extensions"],["Network","Test speed on another device; Unit 4’s {{bandwidth-latency}}"]]},
      "Turning a startup app off doesn’t uninstall it; it just stops it opening when you sign in. Leave security software alone, and look up unfamiliar names on official sites before switching them off. On a Mac, Apple notes you can hold [[kbd:Shift]] while logging in to skip login items once, which is a quick test.",
      "Phones manage background apps themselves. On phones, the **Battery** screen is the best clue: an app using lots of battery in the background is also using processor time.",
      {ex:"Clue: the laptop is fine for ten minutes, then crawls while exporting a video, and the fan roars.\nTheory: heat. Test: use it on a desk, not a duvet, with the vents clear.\nResult: the export runs at full speed. Prevention: keep it on hard surfaces and clean the vents.", label:"Worked example"}
     ],
     pro:[
      {list:["**Thermal throttling:** processors reduce their speed when they get too hot. Laptops on beds, dusty fans and very hot rooms cause it. A device that is fast for a minute and then slows during a long task is the classic pattern.","**Memory pressure:** when RAM is full, the system moves data to storage (swapping or paging), which is far slower. macOS’s Memory Pressure graph and Windows’ committed memory figures show this better than raw usage.","**Storage health:** an old hard disk at 100% “Disk” in Task Manager makes everything wait. A failing drive can also be slow; back up before investigating.","**Battery ageing on phones:** some phones manage performance when an ageing battery can’t supply peak power. iPhone shows battery health in **Settings → Battery**.","**Malware:** possible but rarer than the causes above. A full scan with the built-in security tool rules it out.","**Measure before and after:** time the startup or a task before a change and after it. Otherwise “it feels faster” may just be a fresh restart."]},
      "When nothing is wrong and the device is simply old, the honest answer may be that today’s apps need more memory or a faster drive than it has. Upgrading RAM or storage (where possible) or replacing the device can then be the right call."
     ]
    },
    related:["task-manager","storage-full","device-first-aid","no-internet"],
    sources:[{t:"Microsoft Support: Configure startup applications in Windows", url:"https://support.microsoft.com/en-us/windows/configure-startup-applications-in-windows-115a420a-0bff-4a6f-90e0-1934c844e473"},{t:"Apple Support: Open items automatically when you log in on Mac", url:"https://support.apple.com/guide/mac-help/open-items-automatically-when-you-log-in-mh15189/26/mac"}], checked:"2026-11"},

   {id:"no-internet", title:"No internet: finding the break", aka:["no connection","connected no internet","Wi-Fi not working","network reset"], tags:["troubleshooting","networks"],
    summary:"A decision tree that tells you whether an internet problem is in one service, your device, your home network or your provider.",
    levels:{
     starter:[
      "Your connection is a chain: your device, the Wi-Fi link, the [[router]], the [[modem]] and your [[isp|provider]]. To find the broken link, ask:",
      {ol:["Is it just one website or app? Then that service may be down.","Do other devices on the same Wi-Fi work? Then the problem is your device.","Does restarting the router and modem fix it?","Does your provider report an outage? Check on mobile data."]},
      "If everything says “connected, no internet”, your devices reach the router but the router can’t reach the internet. Look at the router, modem or provider, not your device.",
      "Write down what you tested. If you end up calling the provider, “every device says connected, no internet, and restarting the router didn’t help” saves a lot of time.",
      {tip:"Save your provider’s status page on your phone, so you can check it on mobile data during an outage."}
     ],
     builder:[
      {table:[["Where","Fixes"],["Device","Airplane mode off, Wi-Fi on; forget and rejoin the network; restart; update; check the date and time; network reset as a last resort"],["Wi-Fi signal","Test closer to the router; walls, floors and distance weaken it ({{wifi-mobile-data}})"],["Router and modem","Unplug router, then modem; wait at least 30 seconds; modem in first, wait for its lights; then router, wait a few minutes"],["Provider","Check its status page or app; check cables into the modem; contact support"]]},
      "Microsoft’s Windows 11 advice starts with the quick checks (Wi-Fi on, airplane mode off), then the **Network and Internet troubleshooter** in the **Get Help** app, and ends with **Network reset** (**Settings → Network & internet → Advanced network settings → Network reset**). Microsoft calls network reset the last step: it removes and reinstalls network adapters, and you may need to reinstall VPN software afterwards.",
      "On an iPhone, the equivalent is **Settings → General → Transfer or Reset iPhone → Reset → Reset Network Settings**, which also forgets saved Wi-Fi passwords.",
      "Another device working on the same network is the strongest single clue, because it clears the router, modem and provider in one go.",
      "Mobile data is a useful second network for swap tests: if a phone loads a site on mobile data but not on home Wi-Fi, the home network or provider is the suspect."
     ],
     pro:[
      "Microsoft documents a few command-line checks for Windows (Command Prompt, run as administrator):",
      {list:["`ipconfig` shows your device’s address and its **default gateway** (the router’s address).","`ping` followed by the gateway address tests the link to the router. Microsoft says replies with no internet suggest a modem or provider problem; no replies suggest the problem is between the device and the router.","`netsh winsock reset`, `netsh int ip reset`, `ipconfig /release`, `ipconfig /renew` and `ipconfig /flushdns` reset the network stack, renew the address and clear the [[dns]] cache. Restart afterwards."]},
      "Layered thinking helps: physical link (cables, signal) → network address (does the device have a valid address from the router?) → name lookup (does DNS turn names into addresses? If an address works but names don’t, suspect DNS) → the service itself. Unit 4’s {{dns}} and {{ip-addresses}} entries explain these layers.",
      {list:["A self-assigned address (on Windows, one starting 169.254) means the device didn’t get an address from the router.","Wired Ethernet straight to the modem, if available, bypasses the router as a swap test.","Mesh systems and extenders can create separate networks; make sure devices joined the right one.","A VPN or security app that filters traffic can block connections; turning it off briefly is a fair test, as long as you turn it back on."]}
     ]
    },
    related:["home-network","wifi-mobile-data","dns","troubleshooting-method"],
    sources:[{t:"Microsoft Support: Fix Wi-Fi connection issues in Windows", url:"https://support.microsoft.com/en-us/help/10741"}], checked:"2026-11"},

   {id:"app-crashes", title:"Apps that crash or freeze", aka:["force quit","not responding","repair app","reset app","clear cache","offload app"], tags:["troubleshooting","apps"],
    summary:"Force a frozen app to quit, then climb a ladder of fixes from gentle to drastic, knowing what each one deletes.",
    levels:{
     starter:[
      "A [[crash]] is when an app closes by itself. A [[freeze]] is when it stays on screen but stops responding. With a freeze, wait a minute: it may recover.",
      "If it doesn’t, [[force-quit|force it to quit]]: Task Manager’s **End task** on Windows ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]]); [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:Esc]] on a Mac; swipe it away from the recent-apps view on a phone. Anything unsaved in that app is lost.",
      "If it keeps happening, work up a ladder of fixes, gentlest first: reopen it, restart the device, update the app and system, then (only if needed) repair, reset or reinstall it.",
      {key:"Before resetting or reinstalling, check whether the app’s data is stored only on this device."}
     ],
     builder:[
      {table:[["Option","Effect on your data"],["Windows **Repair** (Settings → Apps → Installed apps → ⋯ → Advanced options)","Kept"],["Windows **Reset** (same place)","The app’s data on this PC is deleted"],["Android **Clear cache** (Settings → Apps → app → Storage & cache)","Kept; temporary files removed"],["Android **Clear storage**","The app’s data and sign-ins on this phone are deleted"],["Android **Force stop**","Kept; the app is stopped"],["iPhone **Offload App** (Settings → General → iPhone Storage → app)","Documents and data kept; reinstalling restores them"],["iPhone **Delete App**","The app and its data on the phone are removed"],["Reinstall on any system","Anything stored only inside the app on this device is lost"]]},
      "Microsoft’s advice for Windows apps is Repair first, Reset only if Repair isn’t listed or doesn’t help. Older desktop programs may offer **Repair** or **Change** in **Control Panel → Programs → Programs and Features**.",
      "On a Mac, if Finder itself stops responding, Apple says to select Finder in the Force Quit window and click **Relaunch**.",
      "Reinstall only from official sources: the app store or the developer’s own website ({{installing-apps}}).",
      "Before the drastic rungs, check where the app keeps its data. Mail, cloud notes, cloud photos and most messaging apps sync to an account, so the data returns after you sign in again. Offline games, some note apps and apps that store files locally may not, so export or back them up first."
     ],
     pro:[
      {list:["**Reproduce and isolate:** does it crash with one file, one account, one setting? A crash on one document suggests that document is damaged; a crash for every user suggests the installation.","**Crash reports:** macOS shows a report you can send to Apple and view in the Console app; Windows records application errors in Reliability Monitor and Event Viewer. The faulting module name in a report can point to a plug-in or driver rather than the app.","**Plug-ins and extensions:** many apps (browsers, office suites, photo editors) have a safe or no-add-ons start option. Use it the same way as system safe mode.","**Corrupt settings:** resetting preferences often fixes crashes without touching documents. Many apps let you reset settings inside the app.","**Version rollbacks:** if an update introduced the crash, check the developer’s known issues page; rolling back may not be possible from official stores, so report it and wait for a fix.","**Report well:** developers need the app version, system version, steps to reproduce and any crash report. Lesson 5’s help request template fits."]},
      "If every app crashes, the problem isn’t the apps. Look at the system: storage, updates, memory, or hardware faults (a memory test is a reasonable next step on a computer)."
     ]
    },
    related:["task-manager","installing-apps","troubleshooting-method","file-wont-open"],
    sources:[{t:"Apple Support: How to force an app to quit on Mac", url:"https://support.apple.com/en-ie/HT201276"},{t:"Microsoft Support: Repair apps and programs in Windows", url:"https://support.microsoft.com/en-au/windows/repair-apps-and-programs-in-windows-e90eefe4-d0a2-7c1b-dd59-949a9030f317"}], checked:"2026-11"},

   {id:"file-wont-open", title:"A file that won’t open", aka:["can’t open file","wrong app","default app","corrupted file","unsupported format"], tags:["troubleshooting","files"],
    summary:"The usual causes are the wrong default app, an unfamiliar format, an unfinished download or sync, a damaged copy, or no permission.",
    levels:{
     starter:[
      "When a file won’t open, check these in order:",
      {ol:["**The app.** Is it opening in the wrong app? Change the [[default-app|default app]], or open the file from inside the right app.","**The format.** Is the [[file-extension|extension]] unusual, like `.pages` or `.heic`? You may need a different app, or ask the sender for a common format such as PDF.","**The download.** Did it finish? Names ending in `.crdownload` or `.part` mean it didn’t. A cloud icon may mean the file isn’t on your device yet.","**The copy.** Is it damaged? Download or copy it again, or restore an earlier version.","**Access.** Does it say you need permission? Ask the owner."]},
      {warn:"A file called something like `invoice.pdf.exe` is a program in disguise. Delete it."}
     ],
     builder:[
      {table:[["System","Change the default app"],["Windows","**Settings → Apps → Default apps**; search for the extension (such as `.pdf`) and choose an app. Or right-click the file → **Open with**"],["Mac","Select the file → **File → Get Info** → **Open with** → choose an app → **Change All**"],["Chromebook","Files app: right-click → **Open with** → **Change default**"],["iPhone","**Settings → Apps → Default Apps** for categories such as browser, email and messaging; otherwise use the share button"],["Android","**Settings → Apps → Default apps** (names vary)"]]},
      "Renaming the extension doesn’t convert a file: it only changes the label, and can make the file harder to open. To convert, open the file in an app that understands it and use **Save as** or **Export** (Unit 2: {{file-formats}}).",
      "For files in cloud storage, an online-only placeholder needs an internet connection to download when opened ({{files-on-demand}}). For shared links, permission is set by the owner ({{sharing-permissions}}).",
      {ex:"Problem: a `.docx` from a colleague opens as gibberish in a text editor.\nTheory: wrong default app. Test: right-click → Open with → a word processor. It opens correctly.\nFix: set the word processor as the default for `.docx`. Verify: double-click opens it properly.", label:"Worked example"},
      "If no app on your device can open a format, a web app from the same maker often can, or the sender can export a copy in a common format."
     ],
     pro:[
      {list:["**Check the real type:** the extension is only a hint. Apps can look at the file’s first bytes (its signature) to see what it really is. If a “PDF” opens in a text editor as gibberish starting with `PK`, it’s actually a ZIP-based file such as a `.docx`.","**Version mismatches:** files made in newer app versions may use features older versions can’t read. Ask the sender to save in an older or open format.","**Damaged files:** the cause can be an interrupted save, a crash mid-write (the ICS textbook’s Section 6.6 explains why file systems use journaling to limit this), a failing drive or an incomplete transfer. Try the app’s own repair option (many office apps have **Open and Repair**), then version history or a backup.","**Encryption and rights management:** some workplace files can only be opened by signed-in members of the organisation.","**Blocked by the system:** Windows may block files downloaded from the internet, and macOS may block apps from unidentified developers. These are security features; only override them for files you trust."]},
      {tip:"If a file won’t open for you but opens for the sender, ask them to export a PDF. It’s the most widely readable format for documents you only need to read."}
     ]
    },
    related:["file-extensions","file-formats","files-on-demand","version-history"],
    sources:[{t:"Microsoft Support: Change default apps in Windows", url:"https://support.microsoft.com/Windows/apps/change-default-apps-in-windows"},{t:"Apple Support: Change your default apps for features on iPhone and iPad", url:"https://support.apple.com/en-asia/121430"}], checked:"2026-11"},

   {id:"storage-full", title:"Storage full", aka:["out of space","low disk space","storage almost full","quota full"], tags:["troubleshooting","storage"],
    summary:"Work out whether the device, a cloud account or a mailbox is full, then find what’s really using the space.",
    levels:{
     starter:[
      "There are three different “fulls”:",
      {list:["**The device’s own storage**: “iPhone storage full”, “Low disk space”.","**A cloud account’s quota**: “Your iCloud storage is full”, “Your Google storage is full”, “OneDrive is full”.","**A mailbox**: emails bounce back as “mailbox full”."]},
      "Read the message: it tells you which one. Deleting apps won’t help a full cloud account, and buying cloud storage won’t help a full phone.",
      "Unit 1 showed where to see device storage and what is safe to remove. Before deleting photos or videos, make sure they’re backed up somewhere else.",
      "If a cloud account is full, the fix is in that account: delete or move files there, empty its own trash, or upgrade the plan.",
      {warn:"Never delete system files or folders you don’t recognise to make space."}
     ],
     builder:[
      "Common hidden space users on a device:",
      {list:["Videos, especially long or high-resolution ones.","Media saved automatically by messaging apps.","Offline downloads in streaming, podcast and map apps.","Old phone backups stored on a computer.","Installers and duplicates in the Downloads folder.","A Recycle Bin or Trash that hasn’t been emptied ({{recycle-bin}})."]},
      "For cloud accounts, check what counts against the quota. Google says a Google Account’s storage is shared across Gmail, Google Drive and Google Photos, so a full Drive can stop new email arriving. Apple’s iCloud storage holds iCloud Photos, iCloud Drive and device backups, among other things; Apple’s **Manage your iCloud storage** page explains how to see and reduce each. Deleting something from a synced folder or photo library usually deletes it everywhere, so move anything you want to keep to another location first.",
      "Device storage is also reported differently on different systems. Apple explains that its devices show capacity in decimal units, and that the system itself and preinstalled apps use part of the advertised capacity (Unit 1: {{file-size-units}}).",
      "Clean up in order of size and safety: empty the trash, remove big videos you’ve backed up, clear offline downloads you’ve finished with, then uninstall apps you don’t use. Check the storage screen after each step so you can see what made the difference."
     ],
     pro:[
      {list:["**System data / Other:** caches, logs, temporary files and app data appear under labels like “System Data”. Some of it shrinks on its own when space runs low; a restart can also release temporary files.","**Free-space headroom:** systems need working space for updates, virtual memory and temporary files. Updates can need several gigabytes free, so keep a comfortable margin rather than running to zero.","**Files-on-demand:** cloud apps can keep files online-only to save space ({{files-on-demand}}). Freeing up space this way doesn’t delete the cloud copy.","**Large-file hunts:** sort a folder by size in File Explorer or Finder to find the biggest files fast.","**Phone photo optimisation:** settings such as storing full-resolution originals only in the cloud save device space but depend on the cloud copy, so the cloud quota and backups matter more."]},
      "**Mailboxes:** large attachments in old email are a common cause of a full mailbox or account. Search for messages with big attachments and delete or save them elsewhere.",
      "Shared family or team plans pool one quota between several people, so one person’s large backup can fill everyone’s space; the plan’s storage page usually shows who uses what.",
      {tip:"If a device fills up again quickly after cleaning, look for a cause: a messaging app saving every video, an app writing logs, or a backup that keeps growing."}
     ]
    },
    related:["device-first-aid","cloud-storage","files-on-demand","backup"],
    sources:[{t:"Google One Help: How your storage works", url:"https://support.google.com/googleone/answer/9312312?hl=en"},{t:"Apple Support: Manage your iCloud storage", url:"https://support.apple.com/en-us/108922"},{t:"Apple Support: How storage capacity is measured on Apple devices", url:"https://support.apple.com/102119"}], checked:"2026-11"},

   {id:"printing-problems", title:"Printing problems", aka:["printer offline","print queue","stuck print job","printer error state"], tags:["troubleshooting","peripherals"],
    summary:"Follow the print job through the app, the queue, the driver, the connection and the printer to find where it stops.",
    levels:{
     starter:[
      "A print job travels from your app to the [[print-queue|print queue]] on your device, then over a cable or the network to the printer. Check each stop:",
      {ol:["**The printer:** turn it off, unplug it for 30 seconds, turn it on. Check paper, ink, jams and open covers.","**The connection:** USB cable firmly in, or the printer on the **same Wi-Fi network** as your device.","**The queue:** open it and cancel any job showing an error; one stuck job blocks the rest.","**Remove and add the printer again** in your device’s printer settings."]},
      "If other devices can print, the problem is on your device (queue, settings or driver). If no device can print, look at the printer or the network. Change one thing at a time and print a test page after each."
     ],
     builder:[
      {table:[["Device","Printer settings"],["Windows","**Settings → Bluetooth & devices → Printers & scanners**; select the printer for **Open print queue**, **Remove**, or **Add device**"],["Mac","**System Settings → Printers & Scanners**"],["Chromebook","**Settings → Device → Printers and scanners** (or search Settings for “printers”)"],["Phones","Printing is done from the share or print option in an app; the printer must be compatible and on the same network"]]},
      "Microsoft’s Windows advice, in order: run the printer troubleshooter in the **Get Help** app; power-cycle the printer; check the cable or wireless connection (and that a wireless printer is on the same network, especially if you have extenders or more than one router); remove and reinstall the printer; install the latest driver from the maker.",
      "“Printer in error state” usually means a physical issue: paper, ink, a jam or an open cover. “Offline” usually means the device can’t reach it: switched off, asleep, or on a different network.",
      "On a Mac, if a printer is paused, its queue window shows a **Resume** button; on any system, a printer set as the wrong **default** sends jobs somewhere you don’t expect, so check which printer is selected in the print dialog.",
      "If one document won’t print but others do, try printing it to PDF first, or from another app. A damaged document or an unusual font can stall a job without anything being wrong with the printer."
     ],
     pro:[
      {list:["**Print spooler (Windows):** the service that manages the queue. Microsoft documents stopping the **Print Spooler** service, deleting the files in `%WINDIR%\\system32\\spool\\PRINTERS`, then restarting the service, to clear a queue that won’t empty. This needs administrator rights.","**Driverless printing:** many modern printers support standard network printing (Apple’s AirPrint, IPP Everywhere, Mopria), so phones and Chromebooks can print without a maker’s driver. Older printers may need the maker’s driver or app.","**Printer addresses:** a printer that gets a new network address after a router restart can appear offline to devices that remember the old one. Reserving an address for it in the router, or re-adding it, fixes that.","**Printer firmware:** printers have their own firmware and settings pages; the maker’s app or the printer’s screen can show its network name and status. A network configuration page printed from the printer itself shows which network it has joined."]},
      "Scanning problems follow the same chain, with one extra link: many printers scan through the maker’s app, which needs to be installed and allowed on the network.",
      {tip:"After a new router, printers are a common casualty: they still look for the old network name. Reconnect the printer to the new Wi-Fi from its own screen or app."}
     ]
    },
    related:["peripherals-problems","troubleshooting-method","home-network"],
    sources:[{t:"Microsoft Support: Fix printer connection and printing problems in Windows", url:"https://support.microsoft.com/en-us/windows/fix-printer-connection-and-printing-problems-in-windows-fb830bff-7702-6349-33cd-9443fe987f73"}], checked:"2026-11"},

   {id:"peripherals-problems", title:"Accessory problems: Bluetooth, displays, keyboards", aka:["Bluetooth not connecting","pairing","external monitor","no signal","keyboard layout","drivers"], tags:["troubleshooting","peripherals"],
    summary:"Trace an accessory along its chain, re-pair Bluetooth devices properly, get external displays working, and know when drivers matter.",
    levels:{
     starter:[
      "Every [[peripheral]] works through a chain: the accessory itself, its connection (cable, adapter, port or wireless link), the system’s settings and [[driver]], and the app. Use swap tests: try it on another device, try another cable or port, try another app.",
      {list:["**Bluetooth:** make sure the accessory is charged and in pairing mode, and isn’t already connected to another device. If it’s “paired” but won’t connect, remove it and pair again.","**External display:** check its power, cable and **input** setting; on Windows press [[kbd:Win]] + [[kbd:P]] and choose Extend.","**Keyboard typing wrong symbols:** the keyboard layout or language setting has probably changed."]},
      {tip:"Use the cable that came with the accessory when testing. It’s the one most likely to support everything the accessory needs."}
     ],
     builder:[
      "[[pairing|Pairing]] stores a record of each device on the other. When the record breaks, remove it and start again:",
      {table:[["System","Remove a Bluetooth device"],["Windows","**Settings → Bluetooth & devices → Devices** → **More options → Remove device**"],["Mac","**System Settings → Bluetooth** → info button → **Forget This Device**"],["iPhone","**Settings → Bluetooth** → info button → **Forget This Device**"],["Android","**Settings → Connected devices** (names vary) → settings icon → **Forget** or **Unpair**"]]},
      "Microsoft’s Windows checks also include airplane mode off, any physical wireless switch on laptops, keeping the device close, and moving it away from USB 3.0 devices, which can interfere. Apple notes that forgetting an accessory on one Apple device unpairs it on all devices signed in to the same Apple Account.",
      "For displays, Apple’s checks include cables at both ends, adapters that support the resolution, connecting directly rather than through a dock, and in **System Settings → Displays**, holding [[kbd:Option]] to show **Detect Displays**. A display can stay dark if you exceed the number of external displays your Mac supports.",
      "On Windows, press [[kbd:Win]] + [[kbd:P]] to choose **Extend** or **Duplicate**, and use **Settings → System → Display → Multiple displays → Detect** if a connected monitor isn’t found. For wireless mice and keyboards, try fresh batteries and another USB port for the receiver, plugged in directly rather than through a hub."
     ],
     pro:[
      {list:["**Drivers on Windows:** Windows Update installs most drivers; optional ones appear in **Settings → Windows Update → Advanced options → Optional updates**. Microsoft says to check the maker’s site if Windows Update has none. **Device Manager** can update, roll back or uninstall a driver.","**Isolating a flicker:** Microsoft’s test: if Task Manager flickers along with the screen, suspect the display driver; if only other windows flicker, suspect an app.","**Bluetooth discovery on Windows:** **Settings → Bluetooth & devices → Devices → Device settings → Bluetooth devices discovery → Advanced** shows all device types if one isn’t appearing.","**Bluetooth profiles:** headsets switch to a lower-quality mode when the microphone is in use; that’s why music can sound worse during a call on some headsets.","**Firmware:** many accessories (headsets, docks, mice) get firmware updates through the maker’s app, fixing connection bugs.","**Docks and hubs:** they add their own chips and sometimes need their own firmware or drivers. Direct connection is the decisive swap test."]},
      "Keyboard layouts deserve a mention because they fool people: a keyboard shortcut can switch input languages by accident, swapping symbols such as `@` and `\"`. Check the language indicator near the clock on Windows or the input menu on a Mac, and remove layouts you don’t use.",
      {warn:"Avoid “driver updater” utilities. Use Windows Update, Device Manager or the device maker’s official support site."}
     ]
    },
    related:["ports-peripherals","audio-video-calls","usb-c-cables","printing-problems"],
    sources:[{t:"Microsoft Support: Fix Bluetooth problems in Windows", url:"https://support.microsoft.com/en-gb/windows/fix-bluetooth-problems-in-windows-723e092f-03fa-858b-5c80-131ec3fba75c"},{t:"Apple Support: If your external display is dark or low resolution", url:"https://support.apple.com/en-au/102501"},{t:"Microsoft Support: Automatically get recommended drivers and updates for your hardware", url:"https://support.microsoft.com/en-gb/windows/automatically-get-recommended-drivers-and-updates-for-your-hardware-0549a8d9-4842-8acb-75fa-a6faadb62507"}], checked:"2026-11"},

   {id:"audio-video-calls", title:"Microphone and camera in video calls", aka:["can’t hear me","mic not working","camera not working","microphone permission"], tags:["troubleshooting","peripherals","privacy"],
    summary:"Work down the chain from the microphone to the call: mute switches, device choice, system permission, browser permission and the app’s mute.",
    levels:{
     starter:[
      "When people in a call can’t hear or see you, check in this order:",
      {ol:["**Mute:** the call’s mute button, a switch on the headset, a microphone key on the keyboard. For cameras, a privacy cover.","**Which device:** in the call app’s settings, is the right microphone, speaker and camera chosen?","**System permission:** is the app allowed to use the microphone and camera in your device’s privacy settings?","**Browser permission:** for calls in a browser, is the website allowed? Look for a microphone or camera icon near the address bar.","**Hardware:** headset charged, plugged in, not connected to another device?"]},
      "Swap tests help here too: if your headset works in another app or on another device, the problem is in this app’s settings or permissions.",
      {tip:"Use the app’s test or preview a few minutes before an important call."}
     ],
     builder:[
      {table:[["System","Permission","Choose and test input"],["Windows 11","**Settings → Privacy & security → Microphone** (Microphone access; Let apps access; Let desktop apps access)","**Settings → System → Sound → Input**; select the mic and use **Start test**"],["Mac","**System Settings → Privacy & Security → Microphone**","**System Settings → Sound → Input**"],["iPhone","**Settings → Privacy & Security → Microphone**","The call app’s own settings"],["Android","**Settings → Apps → app → Permissions**; or **Security & privacy → Privacy → Permission manager** (names vary)","The call app’s own settings"]]},
      "Cameras have matching **Camera** settings in the same places. On Android 12 and later, Google describes **camera access** and **microphone access** tiles in Quick Settings that block them for every app; a green indicator at the top right shows when an app is using them. A Mac shows a recording indicator in Control Centre when the microphone is in use.",
      "Microsoft’s other microphone checks: make sure a headset’s mute button isn’t on, adjust the input volume, and run the sound troubleshooter (**Settings → System → Sound → Troubleshoot common sound problems → Input devices**).",
      "For calls in a browser, the site’s permission is separate from the system one. Select the site information icon at the left of the address bar, set **Microphone** and **Camera** to **Allow**, then reload the page. If you once clicked **Block** on the browser’s prompt, it won’t ask again until you change this."
     ],
     pro:[
      {list:["**Exclusive or competing use:** two call apps open at once can fight over the same device. Close the other one.","**Bluetooth headsets:** using the headset’s microphone switches many headsets to a lower-quality call mode. If audio quality drops when the mic is on, that’s expected behaviour, not a fault; a wired or USB headset avoids it.","**Echo and feedback:** speakers too close to the microphone feed the other person’s voice back. Headphones fix it.","**Drivers:** if Windows doesn’t detect a microphone at all, Microsoft suggests uninstalling the audio device in Device Manager (with **Attempt to remove the driver for this device**), restarting, and using **Scan for hardware changes**.","**Work and school devices:** organisations can block microphones or cameras by policy. If a permission is greyed out, ask IT.","**Privacy:** the permission system exists to protect you. Grant access only to apps that need it, and review the list now and then ({{app-permissions}})."]},
      "**Hardware switches and keys:** some laptops have a microphone mute key with its own light, and some webcams have a physical shutter or switch that no setting can override.",
      {tip:"If others hear you faintly or robotically, check the input volume and move closer to the microphone before suspecting the network. If they hear you breaking up while video freezes too, the network is the more likely cause."}
     ]
    },
    related:["app-permissions","peripherals-problems","troubleshooting-method"],
    sources:[{t:"Microsoft Support: Fix microphone problems", url:"https://support.microsoft.com/windows/hardware/drivers/fix-microphone-problems"},{t:"Apple Support: Control access to the microphone on Mac", url:"https://support.apple.com/en-gb/guide/mac-help/mchla1b1e1fe/mac"},{t:"Android Help: Check if your Android camera or microphone is on or off", url:"https://support.google.com/android/answer/13532937?hl=en"}], checked:"2026-11"},

   {id:"usb-c-cables", title:"USB-C cables and adapters", aka:["USB-C","Thunderbolt","DisplayPort Alt Mode","charging cable","240W"], tags:["hardware","peripherals"],
    summary:"USB-C is a connector shape. Cables that look the same can differ in data speed, power rating and video support.",
    levels:{
     starter:[
      "[[usb-c|USB-C]] is the small oval plug that fits either way up. It’s just the **shape**. What a USB-C cable can actually do varies a lot:",
      {list:["**Data:** some only manage old USB 2.0 speeds; others are dozens of times faster.","**Power:** cables are rated for different maximum power (watts).","**Video:** only some ports, cables and adapters can carry a picture to a monitor."]},
      "So when a USB-C accessory misbehaves (slow charging, slow copying, a monitor with “no signal”), swap the cable first, preferably for the one that came with the device.",
      "The charger matters too. A small phone charger may charge a laptop very slowly, or not at all, even with a good cable.",
      {tip:"Label your cables. A strip of tape saying “fast data” or “charge only” saves a lot of guessing."}
     ],
     builder:[
      {table:[["Capability","What to look for"],["Data speed","USB 2.0 is 480 Mbit/s. Faster cables are labelled 5, 10, 20, 40 or 80 Gbps"],["Power","Certified USB-C to USB-C cables are labelled **60W** or **240W**. The charger must also supply enough watts"],["Video","DisplayPort Alt Mode or Thunderbolt support in the port, cable and adapter"],["Thunderbolt","Thunderbolt 3, 4 and 5 use the USB-C shape; look for the lightning symbol on ports and cables"]]},
      "The USB Implementers Forum (USB-IF) certifies cables. Its rules require every certified USB-C to USB-C cable to carry a power label (60 W or 240 W), and every cable faster than USB 2.0 to show its data rate. Uncertified cables may have no reliable labels at all.",
      "Apple notes that a USB-C or Thunderbolt adapter for a display must be compliant with DisplayPort Alt Mode, Thunderbolt 3 or Thunderbolt 4, and must support the display’s resolution and refresh rate.",
      "Ports can be marked too: a lightning symbol for Thunderbolt, a battery or plug symbol for charging, a display symbol for video. Not every maker marks them, so the specification sheet is the reliable check.",
      "Practical rule: when something works with the original cable but not another, the other cable is missing a capability. Keep the original cables with their devices, and buy replacements whose packaging lists the speed and wattage you need."
     ],
     pro:[
      {list:["**USB Power Delivery (USB PD):** chargers and devices negotiate voltage and current. USB PD 3.1 (2021) added Extended Power Range, allowing up to 240 W; cables above 60 W need an electronic marker chip (e-marker) to identify themselves.","**Ports differ too:** one laptop may have USB-C ports with different abilities (only one may charge, or only some carry video). Look for symbols next to ports or check the specification sheet.","**Phone connections:** an Android phone usually starts in charging-only mode; choose File transfer in the USB notification. An iPhone asks whether to trust the computer before sharing data.","**Hubs and docks:** they split one port’s bandwidth and power across many devices. High-resolution displays plus fast drives through one hub can exceed what the port provides.","**Safety:** damaged or very cheap cables and chargers can overheat. Replace frayed cables, and buy chargers from reputable sellers."]},
      "Microsoft’s **Fix USB-C problems in Windows** page explains the notifications Windows shows when a USB-C connection can’t do what you asked (for example, a slow charger or a display that needs a different cable).",
      "USB-A to USB-C cables are limited by the USB-A end: they can’t use USB Power Delivery, so a laptop usually charges slowly or not at all through one, and their data speed tops out well below the fastest USB-C to USB-C cables (USB-A ports go up to 10 Gbit/s)."
     ]
    },
    related:["ports-peripherals","peripherals-problems","wont-turn-on"],
    sources:[{t:"USB-IF: Cables and Connectors compliance program", url:"https://usb.org/node/596"},{t:"Apple Support: If your external display is dark or low resolution", url:"https://support.apple.com/en-au/102501"},{t:"Microsoft Support: Fix USB-C problems in Windows", url:"https://support.microsoft.com/en-au/windows/fix-usb-c-problems-in-windows-f4e0e529-74f5-cdae-3194-43743f30eed2"}], checked:"2026-11"},

   {id:"getting-help", title:"Getting help well", aka:["searching errors","help request","support ticket","forums","warranty","repair shop"], tags:["troubleshooting","help"],
    summary:"Search the exact error, judge forum answers, write a request people can act on, and know your warranty and repair options.",
    levels:{
     starter:[
      "Good help starts with good information. Before you search or ask:",
      {list:["Copy the **exact** error message or code, or take a [[screenshot]].","Know your device model and system version.","Write down when it started, what changed and what you’ve tried."]},
      "Search the exact message in quotation marks plus your device or system, such as `\"Printer in error state\" Windows 11`. Prefer the official help pages of the maker. Treat [[forum]] answers carefully: check they match your version, and never download “fix tools” from strangers.",
      "When you ask a person or a help desk, give them the same details. Never send passwords or one-time codes.",
      "Use the support contacts on the maker’s own website or in the device’s settings, not a number from an advert or a pop-up."
     ],
     builder:[
      "A clear help request, whether a forum post, an email or a [[support-ticket|support ticket]], has seven parts: a one-line summary; device and versions; what you did, expected and got; the exact message; when it started and what changed; what you tried; and what you need.",
      {table:[["Source","Use it for","Watch out for"],["Maker’s help pages and knowledge base","Current, safe steps","Make sure the page matches your version"],["App’s Help menu","App-specific features and errors","None; it’s usually the best start"],["Official community forums","Unusual problems others have had","Old threads; unverified answers"],["General forums and videos","Ideas to test","Risky downloads, disabled security, outdated menus"],["AI chatbots","Plain-language explanations, theories","Confident but wrong menu names and steps"]]},
      "The OpenStax *Workplace Software and Skills* text notes that most software has a Help function, and that many programs offer support by email, phone or in-app chat, often linked to registering the software.",
      "If the method runs out, escalate: to the maker’s support, your workplace IT, or a repair shop.",
      "Before contacting support, gather the device’s serial number and proof of purchase. They’re needed for warranty repairs and save a second call.",
      "Answer support staff’s questions directly, even the obvious ones (“have you restarted?”). They follow the same method you do, and each answer rules something out."
     ],
     pro:[
      {list:["**Warranties:** the maker’s warranty is checked on its official site, usually with the serial number. Many countries also give legal rights: in the EU, buyers always have a minimum 2-year legal guarantee from the seller, which extra commercial guarantees can’t reduce, and if a fault appears in the first year the seller must prove it wasn’t there at delivery.","**Choosing a repairer:** the maker’s service, an authorised provider, or a reputable independent shop. Ask for a quote and an estimate of the time, and whether data is likely to survive.","**Before handing over a device:** back up and test the restore; note what you’ve tried; follow the repairer’s instructions about passcodes and tracking features rather than sharing account passwords.","**Escalating at work:** use the organisation’s ticket system, include your notes, and give a business impact (“can’t take payments”) so it’s prioritised correctly.","**Remote support:** legitimate when you started the contact through a channel you found yourself, you can watch, and you can end the session ({{tech-support-scams}})."]},
      {tip:"Keep a short list of official support links and phone numbers for your devices and accounts, saved before you need them. Then you never have to search for “support number” in a panic, which is exactly where fake support adverts wait."}
     ]
    },
    related:["troubleshooting-method","tech-support-scams","factory-reset","backup"],
    read:[{book:"wss", where:"Section 2.1 “Software Basics”: “Installing and Maintaining Software”"}],
    sources:[{t:"OpenStax Workplace Software and Skills, 2.1 Software Basics (LibreTexts mirror)", url:"https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/02%3A_Essentials_of_Software_Applications_for_Business/2.01%3A_Software_Basics"},{t:"Your Europe: Guarantees and returns", url:"https://europa.eu/youreurope/guarantee_en"}], checked:"2026-11"},

   {id:"tech-support-scams", title:"Tech-support scams", aka:["fake support","scam pop-up","Microsoft scam call","refund scam","remote access scam"], tags:["security","scams"],
    summary:"Criminals pose as technical support to get remote access or payment. Real support doesn’t contact you first, and real warnings never ask you to call a number.",
    levels:{
     starter:[
      "A [[tech-support-scam|tech-support scam]] starts with someone telling you your device has a problem: a scary pop-up with an alarm and a phone number, a cold call “from Microsoft” or your internet provider, or an email about a subscription you never bought.",
      "Then they ask you to let them connect to your computer ([[remote-access|remote access]]) and pay for a fake fix, often by gift card, transfer or cryptocurrency.",
      {key:"Real tech companies don’t contact you to say your computer has a problem, and real security warnings never ask you to call a phone number."},
      "If a pop-up appears, close the browser. If someone calls, hang up. If you need help, contact a company using a number or website you found yourself.",
      "If you’ve already let someone in or paid, act fast and don’t be embarrassed: disconnect, call your bank and report it."
     ],
     builder:[
      {list:["The FTC: legitimate tech companies won’t contact you by phone, email or text message to tell you there’s a problem with your computer; real security pop-up warnings will never ask you to call a phone number; scammers often insist on gift cards, wire or bank transfers, cryptocurrency or payment apps.","Microsoft: it never proactively reaches out with unsolicited PC or technical support, and its genuine error messages never include a phone number. Report Microsoft impersonation at microsoft.com/reportascam.","nidirect (Northern Ireland government): callers claiming to be from Microsoft may offer a “refund”, then claim to have overpaid and ask for the difference back. Hang up, block the number and report it to Report Fraud."]},
      {table:[["If you…","Do this"],["Let them connect","Disconnect from the internet; uninstall the remote-access app; run a full scan; change passwords from another device"],["Gave a password","Change it, and anywhere it was reused; turn on two-step verification"],["Paid or shared card details","Call your bank or card company on the number on your card"],["Any of these","Report it (US: ReportFraud.ftc.gov; elsewhere, your national service)"]]},
      "Closing a pop-up that won’t close: force quit the browser (Task Manager on Windows, Force Quit on a Mac), and don’t restore the previous session when you reopen it."
     ],
     pro:[
      {list:["**Fake search results and adverts:** scammers buy adverts for searches like “printer support number” or “bank helpline”. Get numbers from the company’s own website (typed yourself), the back of your card, or the official app.","**Browser lockers:** the pop-up is a web page using full-screen mode, looping audio and repeated dialog boxes. It can’t harm files by itself; the harm comes from calling the number.","**Remote-access tools are legitimate software** (used daily by real IT teams). The scam lies in who is using them. That’s why the rule is about who started the contact, not which tool appears.","**Refund and overpayment scams:** the scammer uses remote access to make a transfer between your own accounts look like an overpayment, then asks you to “return” money. Your bank balance on your own device, checked after they disconnect, tells the truth.","**Recovery scams:** after a scam, people may be contacted by “recovery services” promising to get money back for a fee. Unit 3 warns these are often the same criminals.","**Victims aren’t careless:** these scams use fear, authority and time pressure. Reporting without embarrassment helps others."]},
      {tip:"Agree a family rule: nobody lets a caller or pop-up connect to a device. Real help is arranged by you, through contacts you already trust."}
     ]
    },
    related:["social-engineering","phishing","incident-response","getting-help"],
    sources:[{t:"FTC: How to spot, avoid, and report tech support scams", url:"https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams"},{t:"Microsoft Support: Avoid tech support scams", url:"https://support.microsoft.com/en-US/security/avoid-tech-support-scams"},{t:"nidirect: Computer problem cold-calling scam", url:"https://nidirect.gov.uk/node/11464"}], checked:"2026-11"},

   {id:"factory-reset", title:"Factory reset: the last resort", aka:["reset this PC","erase all content and settings","Powerwash","wipe device","restore factory settings"], tags:["troubleshooting","system"],
    summary:"Erasing a device back to factory settings fixes stubborn software problems and prepares it for a new owner, but only after a tested backup.",
    levels:{
     starter:[
      "A [[factory-reset|factory reset]] erases your data, settings and apps and returns the device to how it was when new. It can fix problems nothing else fixes, and it’s essential before selling or giving away a device.",
      "It’s the **last** rung of the ladder, because everything stored only on the device is gone afterwards.",
      {ol:["Back up, and check the backup opens.","Make sure you know the passwords for the accounts on the device.","Charge it, or plug it in.","Then reset."]},
      "After the reset, sign in, restore your files from the backup and reinstall the apps you need one at a time. Try the gentler fixes in this unit before you get here: most problems never need a reset.",
      {warn:"On a work or school device, don’t reset it yourself. Ask IT."}
     ],
     builder:[
      {table:[["Device","Where"],["Windows 11","**Settings → System → Recovery → Reset PC** (or from the recovery environment: **Troubleshoot → Reset this PC**)"],["Mac (Apple silicon or T2, macOS Monterey or later)","**System Settings → General → Transfer or Reset → Erase All Content and Settings**"],["iPhone","**Settings → General → Transfer or Reset iPhone → Erase All Content and Settings**"],["Android","Usually **Settings → System → Reset options → Erase all data (factory reset)**; varies by maker"],["Chromebook","Powerwash: sign out, hold [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Shift]] + [[kbd:R]], **Restart**, then **Powerwash**"]]},
      "Windows offers **Keep my files** (reinstalls Windows and removes apps and settings, keeping personal files) or **Remove everything**, and **Cloud download** (a fresh copy with the latest updates) or **Local reinstall** (faster on a slow connection). Microsoft warns the screen may stay black for over 15 minutes and that restarting it yourself during the reset could make it fail.",
      "Google says a Chromebook Powerwash erases everything on the device, including the Downloads folder, while files in Google Drive or on external storage are kept. Work or school Chromebooks can’t be reset this way.",
      "Apple says erasing a Mac removes your data, settings and apps but keeps the installed macOS, and asks for your Mac login password and Apple Account password during the process."
     ],
     pro:[
      {list:["**Account locks:** Android phones ask for the Google Account that was on them after a reset; Google suggests confirming you know the username and password and waiting 24 hours after changing it. Apple devices use Activation Lock tied to the Apple Account. Without the right credentials, a reset device may not be usable.","**Encryption keys:** an encrypted Windows PC may ask for its BitLocker recovery key during recovery or reset; know where it’s stored.","**Mac before macOS Monterey, or without T2/Apple silicon:** erasing uses macOS Recovery and Disk Utility instead.","**Data erasure for disposal:** Microsoft notes that **Remove everything** with **Clean data** makes recovery harder but doesn’t meet government or industry data-erasure standards. For sensitive data, follow your organisation’s rules.","**After a reset:** restore files from your backup, but reinstall apps one at a time rather than restoring everything at once, or you may restore the problem too.","**Apple silicon and repairs:** Apple mentions a **Repair Assistant** check for previously repaired Macs before erasing on recent macOS versions."]},
      "Charge or plug in the device first: Google suggests at least 70% battery for an Android reset.",
      {tip:"If a reset is to fix a problem rather than to sell, try a reset that keeps files (Windows) or a reinstall of the system first, where available."}
     ]
    },
    related:["backup","restore-test","safe-mode-recovery","getting-help"],
    sources:[{t:"Microsoft Support: Reset your PC", url:"https://support.microsoft.com/en-us/windows/rejuvenate-your-pc-0ef73740-b927-549b-b7c9-e6f2b48d275e"},{t:"Apple Support: Erase your Mac and reset it to factory settings", url:"https://support.apple.com/102664"},{t:"Android Help: Reset your Android device to factory settings", url:"https://support.google.com/android-one/answer/6088915?hl=en"}], checked:"2026-11"}
  ],
  terms:[
   {id:"troubleshooting", term:"Troubleshooting", def:"A methodical search for the cause of a problem and a fix that lasts, rather than trying things at random.", codex:"troubleshooting-method"},
   {id:"symptom", term:"Symptom", def:"What you notice when something is wrong, such as “the laptop is slow”. One symptom can have many possible causes.", codex:"troubleshooting-method"},
   {id:"root-cause", term:"Root cause", def:"The underlying reason a problem happens. Fixing it stops the problem coming back; fixing only the symptom doesn’t.", codex:"troubleshooting-method"},
   {id:"hypothesis-tech", term:"Theory of probable cause", def:"Your best testable guess at what is causing a problem, chosen because it is likely and quick to check. Also called a hypothesis.", codex:"troubleshooting-method"},
   {id:"reproduce", term:"Reproduce", def:"To make a problem happen again on purpose, so you can test whether a change fixes it.", codex:"troubleshooting-method"},
   {id:"escalation", term:"Escalation", def:"Handing a problem, with your notes, to someone with more skill, tools or permissions, such as a help desk or repair shop.", codex:"troubleshooting-method"},
   {id:"safe-mode", term:"Safe mode", def:"A way of starting a device with only its essential parts. If a problem disappears in safe mode, something extra that loads at startup is the likely cause.", codex:"safe-mode-recovery"},
   {id:"recovery-environment", term:"Recovery environment", def:"A separate set of repair tools that can run even when the main system won’t start, such as the Windows Recovery Environment (WinRE) or macOS Recovery.", codex:"safe-mode-recovery"},
   {id:"startup-apps", term:"Startup apps", def:"Apps set to open automatically when you sign in. Too many of them make a device slow to become usable.", codex:"slow-device"},
   {id:"power-cycle", term:"Power-cycle", def:"To turn a device fully off, unplug it, wait (often 30 seconds) and turn it back on, so it starts from a clean state. Common for routers, modems and printers.", codex:"no-internet"},
   {id:"error-message", term:"Error message", def:"Text a device or app shows when something fails. Its exact wording is one of the best clues for searching and asking for help.", codex:"getting-help"},
   {id:"error-code", term:"Error code", def:"A number or code attached to an error, such as `0x80070070`. Searching the exact code with the product name often finds the official explanation.", codex:"getting-help"},
   {id:"crash", term:"Crash", def:"When an app or system stops working and closes suddenly by itself.", codex:"app-crashes"},
   {id:"freeze", term:"Freeze", def:"When an app or device stays on screen but stops responding to clicks, taps or keys. Also called a hang.", codex:"app-crashes"},
   {id:"force-quit", term:"Force quit", def:"Closing an app that has stopped responding, using Task Manager on Windows, Force Quit on a Mac, or the recent-apps view on a phone. Unsaved work in it is lost.", codex:"app-crashes"},
   {id:"reboot", term:"Reboot", def:"Another word for restarting a device: shutting it down and starting it again so everything loads fresh.", codex:"device-first-aid"},
   {id:"default-app", term:"Default app", def:"The app your system uses automatically to open a type of file or link, such as the app that opens every PDF when you double-click it.", codex:"file-wont-open"},
   {id:"compatibility", term:"Compatibility", def:"Whether two things work together: an app and a system version, a file format and an app, or an accessory and a port.", codex:"file-wont-open"},
   {id:"print-queue", term:"Print queue", def:"The list of documents waiting to be printed on your device. One stuck job can block all the others until you cancel it.", codex:"printing-problems"},
   {id:"pairing", term:"Pairing", def:"Introducing two Bluetooth devices so each stores a record of the other. After pairing, they can reconnect automatically.", codex:"peripherals-problems"},
   {id:"driver-update", term:"Driver update", def:"A new version of the software that lets the system talk to a piece of hardware. Get them through system updates or the maker’s official site.", codex:"peripherals-problems"},
   {id:"usb-c", term:"USB-C", def:"A small, reversible connector shape used for charging, data and video. Cables with the same plug can differ in speed, power rating and video support.", codex:"usb-c-cables"},
   {id:"log-file", term:"Log file", def:"A record a system or app keeps of events and errors, with times. Support staff use logs to see what went wrong and when.", codex:"troubleshooting-method"},
   {id:"screenshot", term:"Screenshot", def:"A picture of what’s on your screen, saved as an image. A quick way to capture an exact error message.", codex:"getting-help"},
   {id:"knowledge-base", term:"Knowledge base", def:"A searchable collection of help articles about known problems and their fixes, kept by a company or an IT team.", codex:"getting-help"},
   {id:"forum", term:"Forum", def:"An online discussion board where people ask and answer questions. Useful for ideas, but answers can be outdated, wrong or unsafe.", codex:"getting-help"},
   {id:"support-ticket", term:"Support ticket", def:"A numbered help request in a support system, which tracks the problem until it’s solved.", codex:"getting-help"},
   {id:"warranty", term:"Warranty", def:"A promise to repair or replace faulty goods for a set time. Many countries also give buyers legal rights that apply regardless of any warranty.", codex:"getting-help"},
   {id:"tech-support-scam", term:"Tech-support scam", def:"A fraud where criminals pose as technical support, claim your device has a problem, and ask for remote access or payment.", codex:"tech-support-scams"},
   {id:"remote-access", term:"Remote access", def:"Software that lets someone else see and control your device over the internet. Legitimate when you contacted official support yourself; dangerous when they contacted you.", codex:"tech-support-scams"},
   {id:"factory-reset", term:"Factory reset", def:"Erasing a device’s data, settings and apps to return it to how it was when new. A last resort, done only after a tested backup.", codex:"factory-reset"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u7-q01", lesson:"t1u7-l1", level:1, q:"What is the first step of the CompTIA troubleshooting methodology?", options:[
     {t:"Identify the problem", ok:true, why:"Everything else depends on knowing exactly what is happening, its scope and what changed."},
     {t:"Establish a theory of probable cause", why:"That’s step 2. You need a clear picture of the problem before you can form a good theory."},
     {t:"Implement the solution", why:"Fixing comes in step 4, after you’ve identified the problem and tested a theory."},
     {t:"Document findings", why:"Documenting is the final step, though it helps to take notes throughout."}
   ]},
   {id:"t1u7-q02", lesson:"t1u7-l1", level:1, q:"What is the difference between a symptom and a root cause?", options:[
     {t:"A symptom is what you notice; the root cause is what is actually wrong", ok:true, why:"“The laptop is slow” is a symptom; “a backup app is using all the disk” could be its root cause. One symptom can have many causes."},
     {t:"They mean the same thing", why:"They’re different. Treating a symptom as the cause leads to fixes that don’t last."},
     {t:"A symptom is a hardware fault; a root cause is a software fault", why:"Either can be hardware or software. The difference is between what you observe and why it happens."},
     {t:"A root cause is always the most recent update", why:"Recent changes are a strong clue, but the cause could be anything: a cable, a setting, heat."}
   ]},
   {id:"t1u7-q03", lesson:"t1u7-l1", level:1, q:"What does “question the obvious” mean in troubleshooting?", options:[
     {t:"Check simple, common causes first, such as power, cables, mute and airplane mode", ok:true, why:"Simple causes are common and cheap to check, so professionals rule them out first."},
     {t:"Assume the obvious cause is wrong and look for an unusual one", why:"The opposite: obvious causes are checked first because they’re so often right."},
     {t:"Ask the user to prove they’re telling the truth", why:"It’s about checking basic conditions, not doubting people."},
     {t:"Search online before touching anything", why:"Research is useful, but checking the obvious usually takes seconds and comes first."}
   ]},
   {id:"t1u7-q04", lesson:"t1u7-l1", level:2, q:"Why should you change only one thing at a time when testing a fix?", options:[
     {t:"So you know which change fixed the problem, and can undo changes that didn’t help", ok:true, why:"With one change per test, the result tells you exactly what worked, so you can prevent a repeat and avoid leaving unnecessary changes behind."},
     {t:"Because devices can only accept one setting change per restart", why:"Devices accept many changes. The reason is about learning from each test."},
     {t:"Because it’s faster than changing several things at once", why:"It can feel slower, but it’s more reliable: you end up knowing the cause."},
     {t:"Because the CompTIA method forbids restarting", why:"Restarting is a common and valid test. The point is to test one idea at a time."}
   ]},
   {id:"t1u7-q05", lesson:"t1u7-l1", level:2, q:"In step 5, “verify full system functionality” means:", options:[
     {t:"Checking that the original task and related features all work, not just that the error is gone", ok:true, why:"A fix can solve one symptom while breaking something else. Verifying means doing the real task again and checking related things."},
     {t:"Restarting the device once", why:"A restart might be part of it, but verifying means testing that everything works."},
     {t:"Asking the device maker to approve the fix", why:"Verification is your own check that the system works."},
     {t:"Deleting your notes, since the problem is solved", why:"Notes are kept for step 6 and for next time."}
   ]},
   {id:"t1u7-q06", lesson:"t1u7-l1", level:3, q:"Amara’s headphones crackle on her laptop. On her phone they sound perfect. What does this swap test suggest?", options:[
     {t:"The headphones are probably fine; the laptop or its settings are the likely cause", ok:true, why:"The headphones work on another device, so the problem follows the laptop: its port, Bluetooth, driver or settings."},
     {t:"The headphones are definitely broken", why:"If they were broken, they’d likely crackle on the phone too."},
     {t:"The phone is the cause", why:"The phone works correctly; it’s the laptop where the problem appears."},
     {t:"The test tells her nothing", why:"It rules out the headphones, which is very useful: half the chain is cleared."}
   ]},
   {id:"t1u7-q07", lesson:"t1u7-l1", level:3, q:"Dmitri’s video calls drop “sometimes”. He can’t make it happen on purpose. What’s the most useful next step?", options:[
     {t:"Note the time, place and what else is running each time it happens, to find a pattern", ok:true, why:"Intermittent problems usually have a pattern (a room, a time of day, another app). Notes reveal it and turn it into something he can test."},
     {t:"Reinstall the call app immediately", why:"Without knowing the cause, a drastic fix may not help and loses settings."},
     {t:"Ignore it, because intermittent problems can’t be fixed", why:"They can, once a pattern is found."},
     {t:"Change several network settings at once and see if it stops", why:"With an intermittent problem, several changes at once make it even harder to know what helped."}
   ]},
   {id:"t1u7-q08", lesson:"t1u7-l1", level:2, q:"When should you escalate a problem?", options:[
     {t:"When you’ve run out of good theories, or the fix needs skills, tools or permissions you don’t have", ok:true, why:"Escalating with your notes is part of the method, not a failure. It gets the problem to someone who can solve it."},
     {t:"Before checking anything yourself", why:"Checking the obvious first usually solves it, and gives a helper useful information if not."},
     {t:"Only after a factory reset has failed", why:"A reset is drastic and may lose data. Escalate long before that if you’re stuck."},
     {t:"Never: you should always fix it yourself", why:"Some problems need specialist tools, admin rights or physical repairs."}
   ]},
   {id:"t1u7-q09", lesson:"t1u7-l1", level:3, q:"Priya’s printing stopped working on Tuesday. Which piece of information is the most valuable clue to note first?", options:[
     {t:"That a new router was installed on Monday", ok:true, why:"Problems very often follow changes. A new router can put the printer on a different network, which explains “offline”."},
     {t:"That the printer is grey", why:"Its colour has nothing to do with the problem."},
     {t:"That she prefers printing in colour", why:"Personal preferences don’t help identify the cause."},
     {t:"That printers are generally unreliable", why:"A general opinion doesn’t point to a cause you can test."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u7-q10", lesson:"t1u7-l2", level:1, q:"What is safe mode?", options:[
     {t:"A way of starting a device with only its essential parts, to see whether an add-on is causing a problem", ok:true, why:"Safe mode loads a minimal set of software. If the problem disappears, something extra that starts with the device is the likely cause."},
     {t:"A setting that deletes all apps", why:"Safe mode doesn’t delete apps or files; it just doesn’t start the extras."},
     {t:"An antivirus program", why:"It’s a startup mode, not security software."},
     {t:"A mode that makes the device run faster permanently", why:"It’s a diagnostic tool; many features are missing while in it."}
   ]},
   {id:"t1u7-q11", lesson:"t1u7-l2", level:2, q:"On Windows 11, which route leads to Safe Mode?", options:[
     {t:"Settings → System → Recovery → Advanced startup → Restart now, then Troubleshoot → Advanced options → Startup Settings → Restart, then press 4", ok:true, why:"This is Microsoft’s documented route through the Windows Recovery Environment. 4 (or F4) is Safe Mode; 5 (or F5) adds networking."},
     {t:"Settings → Apps → Safe Mode → On", why:"There’s no such switch. Safe Mode is chosen from Startup Settings in the recovery environment."},
     {t:"Hold Shift while signing in to the desktop", why:"Holding Shift while choosing Restart opens the recovery environment, but holding it at sign-in doesn’t start Safe Mode."},
     {t:"Press Ctrl + Shift + Esc", why:"That opens Task Manager."}
   ]},
   {id:"t1u7-q12", lesson:"t1u7-l2", level:1, q:"How do you start a Mac with Apple silicon in safe mode?", options:[
     {t:"Shut down, hold the power button until startup options appear, select the disk, then hold Shift and click Continue in Safe Mode", ok:true, why:"This is Apple’s documented method for Apple silicon Macs. “Safe Boot” then appears in the menu bar."},
     {t:"Turn it on and immediately hold Shift", why:"That’s the method for Intel-based Macs."},
     {t:"Press Option + Cmd + Esc", why:"That opens the Force Quit window."},
     {t:"Choose Apple menu → Safe Mode", why:"There’s no such menu item."}
   ]},
   {id:"t1u7-q13", lesson:"t1u7-l2", level:2, q:"Which of these is the most likely cause of a laptop that’s very slow for several minutes after sign-in, then fine?", options:[
     {t:"Too many apps set to start automatically", ok:true, why:"Many startup apps loading at once make the first minutes slow. Turning off unneeded ones in the Startup settings helps."},
     {t:"A broken screen", why:"A screen fault doesn’t cause slowness that settles down."},
     {t:"A weak Wi-Fi signal", why:"That would make websites slow at any time, not just after sign-in."},
     {t:"An old keyboard", why:"The keyboard doesn’t affect how quickly the system becomes usable."}
   ]},
   {id:"t1u7-q14", lesson:"t1u7-l2", level:3, q:"Lucía’s laptop can’t load websites at home. Her phone on the same Wi-Fi works fine. Where should she focus?", options:[
     {t:"On the laptop: Wi-Fi settings, airplane mode, forgetting and rejoining the network, restarting", ok:true, why:"Another device works on the same network, which clears the router, modem and provider. The problem is the laptop."},
     {t:"On the provider: call them to report an outage", why:"If there were an outage, her phone wouldn’t work on the same Wi-Fi either."},
     {t:"On the router: replace it", why:"The router is working for her phone, so it isn’t the likely cause."},
     {t:"On the websites: they’re all down", why:"Her phone loads them, so they’re up."}
   ]},
   {id:"t1u7-q15", lesson:"t1u7-l2", level:2, q:"What does “connected, no internet” on every device in a home usually mean?", options:[
     {t:"Devices reach the router over Wi-Fi, but the router isn’t getting through to the internet", ok:true, why:"“Connected” refers to the Wi-Fi link. The break is further along: router, modem or provider."},
     {t:"Every device has a faulty Wi-Fi chip", why:"All failing in the same way points to something they share, not separate faults."},
     {t:"The Wi-Fi password is wrong", why:"With a wrong password, devices wouldn’t show “connected”."},
     {t:"The devices need factory resetting", why:"Far too drastic. The devices are fine."}
   ]},
   {id:"t1u7-q16", lesson:"t1u7-l2", level:2, q:"In Microsoft’s instructions for restarting a modem and router, which is plugged back in first?", options:[
     {t:"The modem, waiting for its lights to settle before plugging in the router", ok:true, why:"The modem connects to the provider, so it must be ready before the router tries to use it."},
     {t:"The router, then the modem", why:"Microsoft says modem first, then router."},
     {t:"Both at exactly the same time", why:"The order matters: modem first, then router after it settles."},
     {t:"It doesn’t matter, and there’s no need to wait", why:"Microsoft says to wait at least 30 seconds unplugged and to plug the modem in first."}
   ]},
   {id:"t1u7-q17", lesson:"t1u7-l2", level:3, q:"Tomás’s Windows PC shows error pop-ups after every sign-in. They don’t appear in Safe Mode. Which next step fits the method best?", options:[
     {t:"Review startup apps and recently installed software, turning items off one at a time to find the culprit", ok:true, why:"Safe mode pointed to something that loads at startup. Testing startup items one at a time finds which one."},
     {t:"Replace the hard drive", why:"A hardware fault would usually still appear in safe mode."},
     {t:"Stay in Safe Mode from now on", why:"Safe mode is for diagnosis; many features don’t work there."},
     {t:"Reset the PC with Remove everything", why:"Drastic and unnecessary when the cause can be narrowed to a startup item."}
   ]},
   {id:"t1u7-q18", lesson:"t1u7-l2", level:2, q:"Why is a network reset described as a last resort?", options:[
     {t:"It removes saved Wi-Fi networks and passwords, and on Windows reinstalls network adapters, so VPN software may need reinstalling", ok:true, why:"It’s effective but disruptive. Microsoft calls it the last step to try."},
     {t:"It erases all your files", why:"It affects network settings, not personal files."},
     {t:"It permanently disables Wi-Fi", why:"Wi-Fi works again after you rejoin networks."},
     {t:"It changes your internet provider", why:"It only affects settings on your device."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u7-q19", lesson:"t1u7-l3", level:1, q:"What’s the difference between a crash and a freeze?", options:[
     {t:"A crash closes the app by itself; a freeze leaves it on screen but not responding", ok:true, why:"With a freeze, waiting a minute is worth it in case it recovers. With a crash, the app has already closed."},
     {t:"A crash affects hardware; a freeze affects software", why:"Both describe app or system behaviour, and both can have hardware or software causes."},
     {t:"They are the same thing", why:"They look different and suggest different first steps."},
     {t:"A freeze always deletes your files", why:"A freeze can lose unsaved work if you force quit, but it doesn’t delete saved files."}
   ]},
   {id:"t1u7-q20", lesson:"t1u7-l3", level:1, q:"Which keys open the Force Quit window on a Mac?", options:[
     {t:"Option + Cmd + Esc", ok:true, why:"Apple’s shortcut for Force Quit. You can also choose Apple menu → Force Quit."},
     {t:"Ctrl + Alt + Delete", why:"That’s a Windows shortcut."},
     {t:"Shift + Cmd + 5", why:"That opens the screenshot and screen recording toolbar on a Mac."},
     {t:"Cmd + Space", why:"That opens Spotlight search."}
   ]},
   {id:"t1u7-q21", lesson:"t1u7-l3", level:2, q:"On Android, what does Clear storage do that Clear cache doesn’t?", options:[
     {t:"It deletes the app’s data and settings on the phone, including sign-ins", ok:true, why:"Clear cache removes temporary files the app rebuilds. Clear storage resets the app completely on that phone."},
     {t:"It uninstalls the app", why:"The app stays installed; its data is wiped."},
     {t:"It frees space in your cloud account", why:"It affects only the phone’s local copy of the app’s data."},
     {t:"Nothing: they are the same", why:"They’re very different in what you lose."}
   ]},
   {id:"t1u7-q22", lesson:"t1u7-l3", level:2, q:"What does Offload App do on an iPhone?", options:[
     {t:"Removes the app but keeps its documents and data, which return when you reinstall it", ok:true, why:"It frees space while keeping your data. Delete App removes the data too."},
     {t:"Deletes the app and all its data", why:"That’s Delete App."},
     {t:"Moves the app to iCloud so it runs from there", why:"Apps don’t run from iCloud. Offloading removes the app itself but keeps its data on the phone."},
     {t:"Resets the iPhone", why:"It affects one app only."}
   ]},
   {id:"t1u7-q23", lesson:"t1u7-l3", level:3, q:"Mei can’t open `photo.heic` on an older Windows laptop. Her friend can open it on an iPhone. What’s the most likely reason?", options:[
     {t:"It’s a format the laptop doesn’t have an app or support for", ok:true, why:"HEIC is a photo format used by Apple devices. Older systems may need an extension, a different app, or a converted copy such as JPEG."},
     {t:"The file is definitely corrupted", why:"It opens on the iPhone, so the file is fine."},
     {t:"She needs to rename it to photo.jpg", why:"Renaming only changes the label. To convert, export or save as JPEG."},
     {t:"Her laptop has malware", why:"An unsupported format is a much simpler explanation."}
   ]},
   {id:"t1u7-q24", lesson:"t1u7-l3", level:3, q:"Kenji’s phone shows “iCloud storage is full”. He deletes several apps from the phone. Why doesn’t the message go away?", options:[
     {t:"The message is about his cloud account’s quota, not the phone’s own storage", ok:true, why:"Deleting apps frees space on the phone, but the iCloud account is separate. He needs to reduce what’s stored in iCloud or upgrade it."},
     {t:"He needs to restart the phone for apps to be deleted", why:"Deleting apps takes effect immediately. The issue is which storage is full."},
     {t:"Apps are stored in iCloud, so deleting them adds space there", why:"Apps themselves don’t count against iCloud storage in this way; backups, photos and files do."},
     {t:"The phone’s storage is broken", why:"Nothing suggests a fault; it’s a different kind of storage."}
   ]},
   {id:"t1u7-q25", lesson:"t1u7-l3", level:2, q:"A file in Downloads is named `report.pdf.crdownload`. What does that tell you?", options:[
     {t:"The download didn’t finish, so the file won’t open properly", ok:true, why:"Browsers add an ending like `.crdownload` or `.part` while downloading. Download it again."},
     {t:"It’s a special kind of PDF", why:"It’s an incomplete download, not a PDF variant."},
     {t:"It’s definitely malware", why:"It’s a normal temporary name for an unfinished download."},
     {t:"It’s a compressed folder", why:"Compressed folders usually end in `.zip`."}
   ]},
   {id:"t1u7-q26", lesson:"t1u7-l3", level:2, q:"Two copies of a file appear in your cloud folder, one with a device name added. What most likely happened?", options:[
     {t:"A sync conflict: the file was changed in two places before syncing", ok:true, why:"The service kept both versions rather than lose one. Open both and merge the changes."},
     {t:"The cloud storage is full", why:"A full quota stops uploads; it doesn’t create named duplicates."},
     {t:"A virus copied the file", why:"Named duplicates are the classic sign of a sync conflict."},
     {t:"The file was shared with someone", why:"Sharing doesn’t create a second copy with a device name."}
   ]},
   {id:"t1u7-q27", lesson:"t1u7-l3", level:3, q:"Fatima’s new router went in yesterday. Today her wireless printer shows “offline” on every laptop. What’s the most likely cause?", options:[
     {t:"The printer is still trying to join the old network", ok:true, why:"Printers remember the network name they joined. After a router change they often need reconnecting to the new Wi-Fi from their own screen or app."},
     {t:"Every laptop’s print queue is stuck at the same time", why:"A stuck queue affects one device. All laptops failing points to the printer’s connection."},
     {t:"The ink has run out", why:"Low ink gives an error or poor prints, not “offline” on every device."},
     {t:"The laptops need new drivers", why:"The change was the router, and every laptop is affected the same way: a network cause is far more likely."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u7-q28", lesson:"t1u7-l4", level:1, q:"What does Bluetooth pairing do?", options:[
     {t:"It introduces two devices so each stores a record of the other and can reconnect automatically", ok:true, why:"Pairing creates a stored, trusted link. If that record breaks, removing it and pairing again usually fixes connection problems."},
     {t:"It charges the accessory", why:"Pairing is about the wireless link, not power."},
     {t:"It installs a new operating system", why:"It just creates a link between two devices."},
     {t:"It permanently locks the accessory to one device", why:"Most accessories can be paired with several devices and connect to one at a time."}
   ]},
   {id:"t1u7-q29", lesson:"t1u7-l4", level:3, q:"Ana’s colleagues can see her in a browser call but can’t hear her. The system’s sound settings show the microphone level moving when she speaks. What should she check next?", options:[
     {t:"The microphone permission for the website in her browser, and the microphone chosen in the call", ok:true, why:"The system hears her, so the microphone and connection work. The break is higher in the chain: the site’s permission, the app’s chosen mic, or the call’s mute button."},
     {t:"Buy a new microphone", why:"The level moving proves the microphone works."},
     {t:"Update the router’s firmware", why:"Others can see her video, so the network is working."},
     {t:"Restart the router", why:"The connection is fine; the problem is the audio permission or settings."}
   ]},
   {id:"t1u7-q30", lesson:"t1u7-l4", level:1, q:"In Windows 11, where do you allow apps to use the microphone?", options:[
     {t:"Settings → Privacy & security → Microphone", ok:true, why:"Here you’ll find Microphone access, Let apps access your microphone, and Let desktop apps access your microphone."},
     {t:"Settings → Personalization → Microphone", why:"Personalization covers appearance, not permissions."},
     {t:"Control Panel → Fonts", why:"Fonts have nothing to do with microphone access."},
     {t:"Task Manager → Startup apps", why:"That controls which apps open at sign-in."}
   ]},
   {id:"t1u7-q31", lesson:"t1u7-l4", level:2, q:"Why can two USB-C cables behave differently with the same laptop?", options:[
     {t:"USB-C is a connector shape; cables differ in data speed, power rating and video support", ok:true, why:"The same plug can carry USB 2.0 data or much faster data, 60 W or 240 W, with or without video. That’s why swapping cables is a key test."},
     {t:"One of them must be fake", why:"Both can be genuine and still support different features."},
     {t:"USB-C cables only work in one direction", why:"USB-C plugs are reversible."},
     {t:"Laptops only accept one cable each", why:"Any compatible cable works; the capabilities depend on the cable."}
   ]},
   {id:"t1u7-q32", lesson:"t1u7-l4", level:2, q:"A monitor connected by HDMI shows “No signal”, but the laptop is running. What should you check first?", options:[
     {t:"That the monitor is set to the input the cable is plugged into, and the cable is firmly in at both ends", ok:true, why:"The wrong input and a loose cable are very common and quick to check."},
     {t:"Reinstall the laptop’s operating system", why:"Far too drastic for an unconfirmed display connection problem."},
     {t:"Replace the laptop’s battery", why:"The laptop is running, so power isn’t the issue."},
     {t:"Turn off Bluetooth", why:"Bluetooth doesn’t affect a wired HDMI connection."}
   ]},
   {id:"t1u7-q33", lesson:"t1u7-l4", level:3, q:"Sione forgot his Bluetooth headphones on his iPad so he could pair them with his laptop. Now they’re also missing from his iPhone. Why?", options:[
     {t:"Apple unpairs an accessory on all devices signed in to the same Apple Account when you forget it on one", ok:true, why:"Apple documents this. He can pair them again on the iPhone when he needs them there."},
     {t:"The headphones are broken", why:"Disappearing from the list is explained by the shared Apple Account, not a fault."},
     {t:"The iPhone needs a factory reset", why:"Pairing again is all that’s needed."},
     {t:"Bluetooth headphones can only be paired once in their lifetime", why:"They can be paired again and again."}
   ]},
   {id:"t1u7-q34", lesson:"t1u7-l4", level:2, q:"On Windows, where does Microsoft say to look for extra driver updates?", options:[
     {t:"Settings → Windows Update → Advanced options → Optional updates", ok:true, why:"Optional driver updates are listed there. If none are offered, Microsoft suggests the device maker’s website."},
     {t:"A “driver updater” app advertised in a pop-up", why:"These are unnecessary and sometimes harmful. Use Windows Update or the maker’s site."},
     {t:"Settings → Accounts", why:"Accounts settings don’t manage drivers."},
     {t:"The Recycle Bin", why:"The Recycle Bin holds deleted files."}
   ]},
   {id:"t1u7-q35", lesson:"t1u7-l4", level:3, q:"Since a driver update yesterday, Oluwaseun’s whole Windows screen flickers, including Task Manager. What does Microsoft’s test suggest?", options:[
     {t:"The display driver is the likely cause; rolling it back in Device Manager is a sensible step", ok:true, why:"If Task Manager flickers too, Microsoft points to the display driver. The timing after an update supports rolling back the driver."},
     {t:"One app is the cause", why:"If an app were the cause, Task Manager itself wouldn’t flicker."},
     {t:"The monitor must be replaced", why:"The change (a driver update) and the test both point to software first."},
     {t:"The Wi-Fi is too slow", why:"Network speed doesn’t make the screen flicker."}
   ]},
   {id:"t1u7-q36", lesson:"t1u7-l4", level:2, q:"Hana’s Android phone charges from her computer, but no files appear on the computer. What’s a likely fix?", options:[
     {t:"Choose File transfer in the phone’s USB notification, or try a cable that carries data", ok:true, why:"Android usually starts in charging mode, and some cables are made for charging only."},
     {t:"Factory reset the phone", why:"Much too drastic for a USB mode setting."},
     {t:"Turn on airplane mode", why:"Airplane mode affects wireless connections, not USB file transfer."},
     {t:"Install a driver updater on the phone", why:"Not needed: it’s a USB mode or cable issue."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u7-q37", lesson:"t1u7-l5", level:1, q:"Which search is most effective for an error message?", options:[
     {t:"The exact message in quotation marks plus the product and version", ok:true, why:"Exact wording matches official articles and other people’s reports of the same problem."},
     {t:"A general description like “computer broken”", why:"Too vague to find specific answers."},
     {t:"Your name and email address with the error", why:"Personal details don’t help and shouldn’t be shared in searches or posts."},
     {t:"Only the word “error”", why:"Far too general to be useful."}
   ]},
   {id:"t1u7-q38", lesson:"t1u7-l5", level:2, q:"According to the FTC, what’s true of real security pop-up warnings?", options:[
     {t:"They never ask you to call a phone number", ok:true, why:"The FTC says real security pop-ups and messages will never ask you to call a number. A pop-up that does is a scam."},
     {t:"They always include a support phone number", why:"The opposite is true."},
     {t:"They ask you to pay by gift card", why:"Payment by gift card is a classic scam sign."},
     {t:"They lock your whole screen until you call", why:"That’s how scam browser pages behave."}
   ]},
   {id:"t1u7-q39", lesson:"t1u7-l5", level:3, q:"Lucía gets a call: “We’re from Microsoft. Your computer is sending viruses. Let us connect and fix it for free.” What should she do?", options:[
     {t:"Hang up; Microsoft says it never makes unsolicited support contact", ok:true, why:"Unsolicited support calls are the classic tech-support scam opening. If she’s worried about her computer, she can run her own security scan or contact official support herself."},
     {t:"Let them connect, since it’s free", why:"Remote access lets them install malware, steal data or set up a payment scam."},
     {t:"Give them her email password so they can check her account", why:"Never share passwords. Real support doesn’t ask for them."},
     {t:"Call back the number that called her", why:"That number belongs to the scammers. Use contact details she finds herself."}
   ]},
   {id:"t1u7-q40", lesson:"t1u7-l5", level:2, q:"Which piece of information should never go in a help request?", options:[
     {t:"Your password or a one-time code you were sent", ok:true, why:"Real support staff don’t need them in writing, and anyone asking for a code should be treated as a scammer."},
     {t:"Your device model and system version", why:"These are essential: fixes differ between versions."},
     {t:"The exact error message", why:"This is one of the most useful things to include."},
     {t:"What you’ve already tried", why:"This saves time and helps narrow the cause."}
   ]},
   {id:"t1u7-q41", lesson:"t1u7-l5", level:3, q:"Tomás let a scammer connect to his laptop ten minutes ago. What should he do first?", options:[
     {t:"Disconnect the laptop from the internet", ok:true, why:"Cutting the connection stops the scammer doing anything more. Next: uninstall the remote-access app, scan, and change passwords from another device."},
     {t:"Wait to see whether anything bad happens", why:"Waiting gives the scammer more time."},
     {t:"Call the scammer back to ask them to undo it", why:"That gives them another chance to manipulate him."},
     {t:"Change his passwords on the same laptop while it’s still connected", why:"If they still have access, they may see the new passwords. Disconnect first, and use another device for passwords."}
   ]},
   {id:"t1u7-q42", lesson:"t1u7-l5", level:2, q:"When is remote access by a support person reasonable?", options:[
     {t:"When you contacted official support through a channel you found yourself, and you can watch and end the session", ok:true, why:"You started the contact and stay in control. That’s how legitimate remote support works."},
     {t:"When a caller says your computer has a virus", why:"Unsolicited calls claiming a problem are the scam pattern."},
     {t:"When a pop-up gives you a number to call", why:"Real pop-ups never ask you to call, so whoever answers is part of the scam."},
     {t:"Whenever the person sounds professional", why:"Scammers often sound very professional. What matters is who started the contact and through which channel."}
   ]},
   {id:"t1u7-q43", lesson:"t1u7-l5", level:1, q:"In the EU, what minimum legal guarantee do buyers have on goods from a seller?", options:[
     {t:"At least 2 years", ok:true, why:"The EU’s Your Europe site says you always have a minimum 2-year guarantee, which a shop’s or maker’s extra guarantee can’t reduce."},
     {t:"30 days", why:"That may be a shop’s return policy, but the legal guarantee is at least 2 years."},
     {t:"None: only the maker’s warranty applies", why:"EU law gives the legal guarantee regardless of any warranty."},
     {t:"10 years", why:"The minimum is 2 years."}
   ]},
   {id:"t1u7-q44", lesson:"t1u7-l5", level:3, q:"Mei wants to factory reset her Windows laptop to fix stubborn problems. Which preparation matters most?", options:[
     {t:"Back up her files and check the backup opens, and have her BitLocker recovery key if the drive is encrypted", ok:true, why:"A reset can remove files, apps and settings. A tested backup and the recovery key prevent losing data or getting locked out."},
     {t:"Delete her browser history", why:"Not necessary; the important step is protecting her data."},
     {t:"Unplug the laptop so it runs on battery", why:"The opposite: keep it plugged in so the reset isn’t interrupted."},
     {t:"Turn it off and on during the reset to speed it up", why:"Microsoft warns that restarting during a reset could make it fail."}
   ]},
   {id:"t1u7-q45", lesson:"t1u7-l5", level:2, q:"Hana finds a forum answer telling her to “turn off your antivirus permanently” to fix an error. What’s the best response?", options:[
     {t:"Don’t follow it; look for an official help page for the error instead", ok:true, why:"Advice to weaken security permanently is a red flag. Official pages give safe steps."},
     {t:"Follow it, since forum answers are always tested", why:"Forum answers can be wrong, outdated or unsafe."},
     {t:"Follow it and also disable updates", why:"That would make her device even more vulnerable."},
     {t:"Reinstall the operating system instead", why:"Drastic; she should first find an official, safe fix."}
   ]}
  ]
});
