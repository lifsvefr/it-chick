/* Track 1 · Unit 5 · Privacy, rights and digital wellbeing */
ICA.addUnit({
  id:"t1u5", track:"t1", n:5, title:"Privacy, rights and digital wellbeing", icon:"🛡️",
  blurb:"How your data is collected and traded, the settings and legal rights that give you control, how to use other people’s work fairly, and how to look after your attention and your safety online.",
  goals:[
    "Explain how apps, websites, trackers and data brokers build a picture of you, and what browsers do about it today",
    "Use the privacy checkups, location, ad and permission settings in your main accounts and devices",
    "Describe the rights data-protection laws give you, read a privacy policy quickly and make a data access request",
    "Use copyrighted and openly licensed work correctly, and give a proper Creative Commons attribution",
    "Recognise attention-grabbing design, use screen-time tools without guilt, and respond safely to harassment"
  ],
  read:[
    {book:"wss", where:"Chapter 1, “Technology in Everyday Life and Business”, Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”", note:"Read “Internet and Web Privacy”, “Cookies”, “Browsing History”, “Posting on Social Media” and “Ensuring Privacy”. The security parts repeat Unit 3."},
    {book:"ics", where:"Background reading: Chapter 14, Section 14.3 “Governing the Use of Cyber Resources”", note:"Written for computer science students, and mostly about responsible computing in organisations. Skim it for the parts on using data responsibly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u5-l1", title:"Your digital footprint", minutes:50,
   hook:{q:"A shop sends you a marketing email. How can it know whether you opened it?", options:["It can’t know that","A tiny, invisible image in the email reports back when it loads","Your email provider sends the shop a list of readers","Only if you agree to send a read receipt"], answer:1, reveal:"Often through a **tracking pixel**: a tiny, usually invisible image that tells its owner when, and on which device, the email was opened. It’s one of many quiet ways your [[passive-footprint|passive footprint]] grows. This lesson shows what apps and websites collect, how tracking follows you from site to site, and why it matters."},
   goals:[
     "Tell apart your active and passive digital footprint",
     "Describe what apps and websites collect, including what they infer",
     "Explain in plain words how third-party cookies, tracking pixels, device fingerprinting and advertising IDs follow you",
     "Describe what each major browser does about third-party cookies today",
     "Explain what data brokers and targeted advertising are, and why they matter"
   ],
   learn:[
    {h:"Footprints you leave on purpose, and by accident", body:[
      {lead:"Every time you go online you leave traces. Some you choose to leave. Many you never see."},
      "Imagine walking across a beach. You might write your name in the sand on purpose. But you also leave footprints with every step, without thinking about it, and someone could follow them to see where you went, how fast and where you stopped. Your [[digital-footprint|digital footprint]] is the same idea: the record of what you do online, and what can be worked out from it.",
      "It has two parts:",
      {list:[
        "Your [[active-footprint|active footprint]]: things you share deliberately. A post, a product review, a profile photo, a comment in a community group, a form you fill in.",
        "Your [[passive-footprint|passive footprint]]: things collected about you as a side effect. Which pages you visited and for how long, where your phone was, which ads you tapped, what device you use, who you message and when."
      ]},
      {table:[
        ["Situation","Active footprint","Passive footprint"],
        ["Amara posts a photo of her new bakery on social media","The photo, caption and tags","The time, her phone model, and possibly the location saved inside the photo"],
        ["Kenji searches for knee-pain exercises","Nothing he chose to publish","The search, the pages he opened, and a guess that he has a knee problem"],
        ["Lucía shops for a cot online but doesn’t buy","Nothing","Products viewed, time spent, and a likely guess that she is expecting a baby"],
        ["Tomás joins a running club’s chat group","His name, number and messages","Who he talks to, how often, and from where"]
      ]},
      {key:"Your active footprint is what you say. Your passive footprint is what can be seen and guessed. For most people the passive part is far larger."}
    ]},
    {h:"What apps and websites collect", body:[
      "[[personal-data|Personal data]] means any information that relates to an identifiable person: not just your name, but your email address, phone’s location, device identifiers, photos of you and even a pattern of behaviour that points to you. Organisations gather it in three ways:",
      {table:[
        ["Kind","Examples","Where it comes from"],
        ["Provided","Name, email, date of birth, posts, messages, uploaded photos","You type or upload it"],
        ["Observed","Pages and products viewed, clicks, location, device type, [[ip-address|IP address]], app usage times","Recorded automatically as you use the service"],
        ["Inferred","“Probably a parent”, “interested in running”, “likely to move house soon”","Calculated from the first two, often by software"]
      ]},
      "The inferred row surprises most people. You never told a shop you were expecting a baby, but a pattern of purchases can suggest it. Inferences can also be wrong, and you usually can’t see them, which is one reason the laws in Lesson 3 give you the right to ask what is held about you.",
      {ex:"Priya installs a free fitness app. In one week it records: her email and age (provided); her step counts, her running routes and the times she opens the app (observed); and that she runs early in the morning near a particular park, and is “likely interested in sports nutrition” (inferred). The running routes alone show roughly where she lives.", label:"Worked example: one free app, one week"},
      "Phones add extra sources: precise location, contacts, photos and sensors. On phones, apps must ask before using many of these, through [[app-permissions|app permissions]] (see {{app-permissions}}). Lesson 2 shows how to review them.",
      {tip:"Both app stores show a summary of what an app says it collects: **App Privacy** on Apple’s App Store and **Data safety** on Google Play. The developer writes these summaries themselves, so treat them as a guide, not a guarantee."}
    ]},
    {h:"How tracking follows you from site to site", body:[
      "A [[tracker]] is anything that records what you do so it can be linked together later, often across many different websites and apps. Most trackers belong to advertising and analytics companies, not to the site you are visiting. Here are the main techniques in plain terms.",
      {h:"Cookies: first-party and third-party"},
      "A [[cookie]] is a small piece of text a website asks your [[web-browser|browser]] to store and send back next time, like a cloakroom ticket that lets the site recognise you (see {{cookies-cache}}). A [[first-party-cookie|first-party cookie]] comes from the site in your address bar and does useful jobs: keeping you signed in, remembering your basket. A [[third-party-cookie|third-party cookie]] is set by a *different* company whose code is embedded in the page, such as an ad network. If the same ad network’s code sits on thousands of sites, its cookie lets it recognise your browser on all of them.",
      {h:"Tracking pixels"},
      "A [[tracking-pixel|tracking pixel]] is a tiny, usually invisible image or snippet of code in a web page or email. When it loads, it tells its owner that this page or email was opened, by which device and when. Marketing emails often contain one, which is how a sender can know you opened their message.",
      {h:"Device fingerprinting"},
      "[[fingerprinting|Device fingerprinting]] doesn’t store anything on your device. Instead, a script collects many small details your browser reveals anyway: screen size, time zone, language, installed fonts, browser version, graphics hardware. Each detail is shared by millions of people, but the *combination* can be unusual enough to pick out one device, like recognising someone by height, coat, walk and voice together. Clearing cookies doesn’t remove a fingerprint.",
      {h:"Advertising IDs and sign-ins"},
      "Phones give each device an [[advertising-id|advertising ID]] that apps can read to link your activity across different apps. And whenever you sign in, with an email address or a “Sign in with…” button, the company knows exactly who you are, on any device.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="t1u5l1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="8" y="10" width="140" height="54" rx="10" stroke-width="2"/><text x="78" y="33" text-anchor="middle">News site</text><text class="s" x="78" y="51" text-anchor="middle">loads tracker code</text><rect class="d-lup" x="8" y="84" width="140" height="54" rx="10" stroke-width="2"/><text x="78" y="107" text-anchor="middle">Online shop</text><text class="s" x="78" y="125" text-anchor="middle">loads tracker code</text><rect class="d-lup" x="8" y="158" width="140" height="54" rx="10" stroke-width="2"/><text x="78" y="181" text-anchor="middle">Recipe blog</text><text class="s" x="78" y="199" text-anchor="middle">loads tracker code</text><rect class="d-gold" x="196" y="56" width="136" height="104" rx="10" stroke-width="2"/><text x="264" y="84" text-anchor="middle">Ad-tech</text><text x="264" y="102" text-anchor="middle">company</text><text class="s" x="264" y="126" text-anchor="middle">sees the same ID</text><text class="s" x="264" y="144" text-anchor="middle">on all three sites</text><path class="d-ink" d="M148 37 L192 82" stroke-width="2" marker-end="url(#t1u5l1a)"/><path class="d-ink" d="M148 111 L192 111" stroke-width="2" marker-end="url(#t1u5l1a)"/><path class="d-ink" d="M148 185 L192 140" stroke-width="2" marker-end="url(#t1u5l1a)"/><path class="d-ink" d="M264 160 L264 226" stroke-width="2" marker-end="url(#t1u5l1a)"/><rect class="d-rose" x="8" y="232" width="324" height="92" rx="10" stroke-width="2"/><text x="170" y="256" text-anchor="middle">Profile linked to one ID</text><text class="s" x="170" y="278" text-anchor="middle">read health news · viewed running shoes</text><text class="s" x="170" y="296" text-anchor="middle">and saved vegetarian recipes</text><text class="s" x="170" y="314" text-anchor="middle">guess: “fitness fan, aged 25–34?”</text><path class="d-ink" d="M170 324 L170 350" stroke-width="2" marker-end="url(#t1u5l1a)"/><rect class="d-sage" x="40" y="354" width="260" height="38" rx="10" stroke-width="2"/><text x="170" y="378" text-anchor="middle">Shoe ads follow you to new sites</text></svg>', alt:"Three websites (a news site, an online shop and a recipe blog) each load code from the same ad-tech company. The company sees the same identifier on all three, links the visits into one profile with a guess about the person’s interests and age, and then shows shoe ads on other sites.", cap:"One company’s code on many sites can link your visits into a single profile."}
    ]},
    {h:"Where browsers stand on third-party cookies today", body:[
      "For years people expected third-party cookies to disappear from every major browser. That hasn’t happened. As of late 2026, the picture differs by browser:",
      {table:[
        ["Browser","Third-party cookies by default","Notes"],
        ["Safari (Apple)","**Blocked**","Safari has blocked all third-party cookies by default since 2020, as part of its Intelligent Tracking Prevention."],
        ["Firefox (Mozilla)","**Isolated**, with known trackers blocked","Enhanced Tracking Protection (Standard mode) blocks cross-site tracking cookies from known trackers, and **Total Cookie Protection** keeps every other site’s cookies in a separate “jar”, so they can’t follow you."],
        ["Chrome (Google)","**Allowed** in normal windows; blocked in Incognito","You can block them yourself in Settings. Google dropped its plan to phase them out (2024), decided against a new pop-up asking users (April 2025) and retired most of its replacement “Privacy Sandbox” technologies (October 2025)."],
        ["Edge (Microsoft)","Mostly allowed; some known trackers blocked","Tracking prevention is set to **Balanced** by default; **Strict** blocks more."]
      ]},
      "Because Chrome is the most widely used browser in the world, third-party cookies remain a working tracking tool for a large share of web users. In Chrome on a computer, you can change this at **Settings → Privacy and security → Third-party cookies**.",
      {warn:"Blocking third-party cookies is worthwhile, but it doesn’t make you untrackable. Fingerprinting, tracking pixels, first-party data and signing in all still work. Think of cookie blocking as closing one door, not locking the house."}
    ]},
    {h:"Data brokers and targeted advertising", body:[
      "A [[data-broker|data broker]] is a company that collects information about people from many sources, combines it, and sells or shares it. The US Federal Trade Commission (FTC) describes how they gather data from other brokers, public social media profiles and government records such as property, voter and court records. **People-search sites** are one visible kind: type a name and they sell a report with addresses, phone numbers and relatives.",
      "Most data brokers have no direct relationship with you. You’ve never heard of them, never signed up, and can’t easily see what they hold. That’s why some laws (Lesson 3) now give people the right to ask brokers to delete their data, and why opt-out requests need repeating: the FTC notes that your details can reappear when public records change.",
      {h:"Targeted advertising"},
      "[[targeted-advertising|Targeted advertising]] means choosing which ad to show you based on information about you. There are two broad kinds:",
      {table:[
        ["Kind","Based on","Example"],
        ["Contextual","What’s on the page right now","An ad for tents on an article about camping"],
        ["Behavioural (personalised)","Your profile: history, location, inferences","An ad for the exact tent you looked at last week, shown on a news site"]
      ]},
      "Behavioural advertising is what tracking feeds. In many cases, when a page loads, ad space is sold in an automated auction lasting a fraction of a second, and information about you (or your device) is shared with companies bidding for the slot.",
      {h:"Why it matters"},
      {list:[
        "**Sensitive guesses.** Inferences can touch health, money worries, religion or sexuality, whether or not they’re correct.",
        "**Safety.** Addresses and routines from data brokers or location data can help a stalker or an abusive ex-partner find someone.",
        "**Scams.** Detailed profiles make scam messages more convincing (see {{phishing}}).",
        "**Breaches.** The more data collected and kept, the more there is to leak (see {{data-breach}})."
      ]}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“I have nothing to hide.”** Privacy isn’t about hiding wrongdoing. It’s about choosing who knows what: your address, your health, your finances, where your children go to school.",
        "**“Deleting a post deletes it.”** It may already have been copied, screenshotted, archived or shared. Treat anything public as potentially permanent.",
        "**“If I block cookies, I can’t be tracked.”** Fingerprinting, pixels, sign-ins and advertising IDs still work.",
        "**“Turning off personalised ads means no ads.”** You’ll see the same number of ads; they just won’t be chosen from your profile.",
        "**“Only social media collects data.”** Shopping sites, apps, cars, smart TVs, loyalty cards and many other services do too.",
        "**“It’s hopeless, so why bother?”** A few settings (Lesson 2) cut a lot of collection. You don’t need to be perfect to be much better protected."
      ]},
      {key:"You can’t erase your footprint, but you can make it smaller and choose more of what goes into it. The next lesson shows how."}
    ]}
   ],
   try:[
    {id:"t1u5-l1-x1", type:"sort", q:"Sort each item into Mei’s active or passive digital footprint.", buckets:["Active (she chose to share it)","Passive (collected as a side effect)"], items:[
      {t:"A review she wrote of a local café", b:0, why:"She wrote and published it deliberately: active."},
      {t:"The time of day she usually opens her banking app", b:1, why:"Recorded automatically as she uses the app: passive."},
      {t:"Her profile photo on a professional networking site", b:0, why:"She chose to upload it: active."},
      {t:"The location stored inside a photo she sent by email", b:1, why:"She chose to send the photo, but the hidden location data came along without her choosing it: passive."},
      {t:"A list of products she looked at but didn’t buy", b:1, why:"Viewing isn’t publishing. The shop recorded it as a side effect: passive."},
      {t:"A comment she posted in a parents’ group", b:0, why:"A deliberate post: active."}
    ]},
    {id:"t1u5-l1-x2", type:"match", q:"Match each tracking technique to how it works.", pairs:[
      ["Third-party cookie","An ad company’s code on many sites stores an ID in your browser and reads it back on each site","The cookie belongs to the embedded company, not the site you’re on, so it can link visits across sites."],
      ["Tracking pixel","A tiny hidden image in an email reports when you open it","Loading the image tells the sender’s server the email was opened, when and on what device."],
      ["Device fingerprinting","Screen size, fonts, time zone and browser details are combined to recognise your device","Nothing is stored on your device, so clearing cookies doesn’t remove it."],
      ["Advertising ID","A phone-wide identifier lets different apps link your activity","Apps can read the same ID, so activity in one app can be linked to another. You can reset or delete it."],
      ["Signing in","You give your email address, so the company knows exactly who you are","Once you’re signed in, the company can link your activity on any device to your account."]
    ]},
    {id:"t1u5-l1-x3", type:"mcq", q:"As of late 2026, which statement about third-party cookies is accurate?", options:[
      {t:"Safari blocks them by default, while Chrome still allows them by default in normal (non-Incognito) windows.", ok:true, why:"Right. Safari has blocked them by default since 2020. Google decided in 2024–2025 to keep them in Chrome, with a setting you can change and blocking in Incognito by default."},
      {t:"All major browsers removed third-party cookies in 2024.", why:"That was Google’s earlier plan for Chrome, but it was dropped. Chrome still allows them by default."},
      {t:"Chrome blocks them by default, but Safari allows them.", why:"It’s the other way round: Safari blocks them; Chrome allows them unless you change the setting or use Incognito."},
      {t:"Third-party cookies have never been used for tracking.", why:"Cross-site tracking for advertising is their best-known use, which is exactly why browsers restrict them."}
    ]},
    {id:"t1u5-l1-x4", type:"mcq", q:"Kenji clears all his cookies every evening. Next morning, an ad company still recognises his laptop on a site he has never visited before. Which technique most likely explains this?", options:[
      {t:"Device fingerprinting, which combines details his browser reveals and stores nothing on his laptop", ok:true, why:"Fingerprinting doesn’t rely on stored data, so clearing cookies has no effect on it."},
      {t:"A third-party cookie from yesterday", why:"He cleared his cookies, so yesterday’s cookies are gone."},
      {t:"His laptop’s battery level", why:"Battery level alone isn’t used to recognise devices across sites in everyday tracking; the combination of many browser details is."},
      {t:"The new site guessed randomly", why:"Recognition here isn’t a guess; it comes from a technique that links his device across sites."}
    ]},
    {id:"t1u5-l1-x5", type:"order", q:"Put the steps of behavioural ad targeting in order, from first visit to the ad.", items:[
      {t:"Ana reads an article about hiking on a news site", why:"Everything starts with a visit to a site that carries an ad company’s code."},
      {t:"The ad company’s code on that page records her browser’s ID and the topic", why:"The embedded tracker sees the visit and what it was about."},
      {t:"She later looks at walking boots on a shop that uses the same ad company", why:"The same company sees the same ID on another site."},
      {t:"The company adds “interested in hiking boots” to the profile for that ID", why:"Visits are linked and an inference is made."},
      {t:"A boot ad appears when she visits a third, unrelated site", why:"The profile is used to choose the ad: this is behavioural targeting."}
    ]},
    {id:"t1u5-l1-x6", type:"spot", q:"This is part of a free flashlight app’s store listing, under “Data collected”. Tap the items a flashlight has no real need to collect.", ask:"not needed for a flashlight", parts:[
      "Data collected: ",
      {t:"Precise location", flag:true, why:"A flashlight works the same anywhere. Precise location is valuable to advertisers and data brokers, not to the torch."},
      " · ",
      {t:"Crash logs", flag:false, why:"Crash reports help the developer fix bugs. That’s a reasonable thing for almost any app to collect."},
      " · ",
      {t:"Contacts", flag:true, why:"A flashlight has nothing to do with your contacts. This is a classic over-collection warning sign."},
      " · ",
      {t:"App version", flag:false, why:"Knowing which version you use helps with updates and bug fixes."},
      " · ",
      {t:"Advertising ID", flag:true, why:"The torch doesn’t need it. It’s used to link your activity with other apps for ad targeting."},
      " · ",
      {t:"Device model", flag:false, why:"Useful for making the light work properly on different phones (and for crash reports)."}
    ]},
    {id:"t1u5-l1-x7", type:"mcq", q:"Hana says: “I turned off personalised ads in my account, so I’m done with tracking.” What’s the most accurate reply?", options:[
      {t:"That helps, but data can still be collected for other purposes, and she’ll still see ads, just not chosen from her profile.", ok:true, why:"Ad personalisation settings change how ads are chosen. They don’t stop all collection, and they don’t remove ads."},
      {t:"She’s right: that setting stops all tracking everywhere.", why:"It applies to that company’s ad choices, not to every tracker on every site or app."},
      {t:"It has no effect at all.", why:"It does have an effect: ads from that company are no longer chosen from her profile."},
      {t:"She’ll now see no ads at all.", why:"The number of ads stays the same; they’re just less personalised."}
    ]}
   ],
   apply:{intro:"Take a look at your own footprint and your browser’s tracking settings. Nothing here needs special software.", tasks:[
     {t:"Search for yourself", how:["Open a private or Incognito window, so results aren’t tailored to your account.","Search your full name in quotes, then your name plus your town, and your email address and phone number.","Also try an image search of your name.","Note anything you didn’t expect: an old profile, an address on a people-search site, a photo of your home.","You don’t need to pay a site that offers to “reveal” more. Most people-search sites offer a free opt-out (see {{tracking-data-brokers}}); if you consider a paid removal service, first check which sites it covers."]},
     {t:"Check your browser’s third-party cookie and tracking setting", how:{
       win:["**Chrome**: More (⋮) → **Settings → Privacy and security → Third-party cookies**. Choose **Block third-party cookies** if you want to (a few sites may need an exception).","**Edge**: Settings and more (…) → **Settings → Privacy, search, and services → Tracking prevention**. Balanced is the default; Strict blocks more.","**Firefox**: Menu (☰) → **Settings → Privacy & Security**: check **Enhanced Tracking Protection** is Standard or Strict."],
       mac:["**Safari**: **Safari → Settings → Privacy**: check **Prevent cross-site tracking** is on.","**Chrome**, **Edge** or **Firefox**: same steps as on Windows."],
       chromeos:["**Chrome**: More (⋮) → **Settings → Privacy and security → Third-party cookies**, and choose the option you want."],
       phone:["**iPhone (Safari)**: **Settings → Apps → Safari** (on older iOS, **Settings → Safari**): check **Prevent Cross-Site Tracking** is on.","**Android (Chrome)**: tap More (⋮) → **Settings → Privacy and security → Third-party cookies** (on some versions, **Settings → Site settings → Third-party cookies**).","**iPhone (Chrome)**: Chrome on iPhone doesn’t offer a third-party cookie setting; you can still clear cookies in its **Privacy and security** settings.","Menu names can vary slightly between browser versions."]
     }},
     {t:"Read one app’s privacy label", how:["iPhone: in the **App Store**, open an app you use often and scroll to **App Privacy**.","Android: in **Google Play**, open the app and tap **Data safety**.","Note what it says it collects that’s **linked to you** or **used to track you**. Is any of it surprising for what the app does?"]}
   ], proof:"A private note listing what turned up when you searched for yourself, your browser’s current cross-site tracking setting, and one app whose data collection surprised you."},
   read:[
     {book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Internet and Web Privacy”, “Cookies” and “Browsing History”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u5-l2", title:"Taking control: privacy settings", minutes:55,
   hook:{q:"You switch off Location Services on your phone completely. Can anyone still tell roughly where the phone is?", options:["No: the phone is now untraceable","Yes: the mobile network still knows which masts it connects to","Only if Bluetooth is left on","Only the phone’s manufacturer can"], answer:1, reveal:"**Yes, roughly.** Your mobile network still knows which masts the phone connects to, and your IP address gives a rough area. Location settings still matter a great deal, though, because they decide which apps get your precise whereabouts. This lesson shows how to set them, along with photo locations, ad settings and what private browsing really does."},
   goals:[
     "Run the privacy checkup tools in Google, Apple, Microsoft and Meta accounts",
     "Control location services, and share photos without their hidden location",
     "Review app permissions and ad personalisation settings on your devices",
     "Explain exactly what private browsing does and doesn’t do"
   ],
   learn:[
    {h:"Start with the accounts that know the most", body:[
      {lead:"A handful of big accounts hold most of your data. Each one has a guided privacy review. Twenty minutes with them does more than hours of worrying."},
      "Think of these reviews like a home safety check: walk through each room once, decide what should be locked, and then you only need to look again now and then. Most large providers offer a [[two-step-privacy-checkup|privacy checkup]]: a step-by-step tour of the settings that matter most.",
      {table:[
        ["Account","Tool and where to find it","What it helps you review"],
        ["Google","**Privacy Checkup**, from **myaccount.google.com → Data & privacy**","Which activity is saved (such as Web & App Activity and YouTube history), automatic deletion, ad personalisation, what others can see"],
        ["Apple","**Safety Check** on iPhone (**Settings → Privacy & Security → Safety Check**), plus **App Privacy Report** in the same menu","Which people and apps you share information with; how often apps used your location, camera, microphone and contacts"],
        ["Microsoft","**Privacy dashboard** at **account.microsoft.com/privacy**","Browsing, search, location and app activity linked to your Microsoft account; you can view and clear it; ad settings"],
        ["Meta (Facebook, Instagram)","**Privacy Checkup** in Facebook’s **Settings & privacy**; **Accounts Center** for settings shared across Meta apps","Who sees your posts and profile, how people can find you, apps you logged into with Facebook, ad preferences"]
      ]},
      "Menu names change often, so if a path doesn’t match exactly, search the provider’s help pages for “privacy checkup” or open the account’s **Privacy** or **Data & privacy** section.",
      {tip:"Do your main email account first. It usually holds the most, and it can reset everything else. Unit 3 covered its security checkup; this is the privacy side of the same account."},
      {h:"Activity history and auto-delete"},
      "Many accounts save a history of searches, videos watched, places visited and voice commands, to personalise services. You can usually pause each type of history, delete past history, or set it to delete automatically after a period you choose. Pausing makes some features less personal (for example, fewer tailored recommendations), so choose what is worth it to you."
    ]},
    {h:"Location: the most revealing data", body:[
      "A record of where your phone has been shows where you live, work, worship, get medical care and sleep. That’s why location deserves special care. Your device’s [[location-services|location services]] combine GPS satellites, nearby Wi-Fi networks and mobile masts to work out where you are, then share it with apps you allow.",
      {list:[
        "**Per-app choices.** Allow location **only while using the app** rather than “always” unless an app genuinely needs it in the background (a navigation or family-safety app might).",
        "**Precise or approximate.** iPhone and Android both let you give an app only your approximate area. A weather app needs your town, not your front door.",
        "**System history.** Phones and accounts can keep their own location history. On iPhone, look under **Settings → Privacy & Security → Location Services → System Services**. If your Google Account saves a Timeline, you can review or delete it in Google Maps.",
        "**Sharing with people.** Find-my and family location sharing are useful, but check who can see you. Apple’s Safety Check and the location-sharing lists in Google Maps show this."
      ]},
      {warn:"If you think someone may be secretly tracking your phone or accounts, for example a current or former partner, changing settings can alert them. Organisations that support people facing domestic abuse can help you plan safely. Apple’s Safety Check has an **Emergency Reset** option designed for this situation."}
    ]},
    {h:"The hidden location inside your photos", body:[
      "Photos carry [[metadata]]: data about the data. Most phone cameras store the date, time and camera model inside each photo, and if the camera has location permission, the exact GPS coordinates too. This [[metadata-privacy|location metadata]] travels with the file when you send the original.",
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="t1u5l2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="20" y="8" width="300" height="194" rx="12" stroke-width="2"/><text class="s" x="170" y="24" text-anchor="middle">one photo file</text><rect class="d-lup" x="36" y="32" width="268" height="54" rx="8" stroke-width="2"/><text x="170" y="64" text-anchor="middle">The picture you see</text><rect class="d-gold" x="36" y="96" width="268" height="96" rx="8" stroke-width="2"/><text x="50" y="117">Hidden metadata (EXIF)</text><text class="s" x="50" y="137">taken: 2026-05-14 08:12</text><text class="s" x="50" y="155">camera: phone model</text><rect class="d-rose" x="44" y="163" width="252" height="22" rx="5" stroke-width="1.5"/><text x="50" y="179">GPS: 51.5007° N, 0.1246° W</text><path class="d-ink" d="M150 202 L96 240" stroke-width="2" marker-end="url(#t1u5l2a)"/><path class="d-ink" d="M190 202 L244 240" stroke-width="2" marker-end="url(#t1u5l2a)"/><rect class="d-rose" x="8" y="244" width="158" height="100" rx="10" stroke-width="2"/><text x="87" y="268" text-anchor="middle">Location ON</text><text class="s" x="87" y="290" text-anchor="middle">GPS goes with the</text><text class="s" x="87" y="307" text-anchor="middle">photo: anyone can</text><text class="s" x="87" y="324" text-anchor="middle">map where it was</text><rect class="d-sage" x="174" y="244" width="158" height="100" rx="10" stroke-width="2"/><text x="253" y="268" text-anchor="middle">Location OFF</text><text class="s" x="253" y="290" text-anchor="middle">GPS stripped from</text><text class="s" x="253" y="307" text-anchor="middle">the shared copy;</text><text class="s" x="253" y="324" text-anchor="middle">picture unchanged</text></svg>', alt:"A photo file has two parts: the visible picture and hidden metadata (EXIF) listing the date taken, camera model and GPS coordinates. Shared with location on, the GPS coordinates go with the photo and anyone can map where it was taken. Shared with location off, the GPS data is removed from the shared copy and the picture is unchanged.", cap:"The picture and its hidden metadata travel together unless you remove the location."},
      "Some large social networks remove this metadata from the public copies of photos you post, but don’t rely on that: email, cloud-storage links, file transfers and some chat apps send the original file. The safest habits are:",
      {list:[
        "**Share without location.** On iPhone, in the Share sheet tap **Options** and turn off **Location**. Google Photos lets you turn off **Share photo locations** for shared albums and conversations.",
        "**Stop saving location** for photos you’ll mostly share. On iPhone: **Settings → Privacy & Security → Location Services → Camera → Never**. On Android, either turn off the location option in your Camera app’s settings (often called **Save location** or **Location tags**) or deny the Camera app location permission.",
        "**Remove it from files on a computer.** Windows: right-click the photo → **Properties → Details → Remove Properties and Personal Information**. Mac **Photos** app: select photos, then **Image → Location → Hide Location**."
      ]},
      {tip:"Metadata isn’t the only clue. A house number, school uniform, street sign or view from a window can reveal a location just as clearly. Glance at the background before you post."}
    ]},
    {h:"Permissions and ads: two quick reviews", body:[
      {h:"App permissions"},
      "Unit 3 showed how to review [[app-permissions|app permissions]] for security (see {{app-permissions}}). For privacy, ask the same question about each app: *does it need this to do what I use it for?* Pay most attention to **location**, **contacts**, **photos**, **microphone**, **camera** and **nearby devices**. Android can automatically remove permissions from apps you haven’t used for a while, and iPhone’s **App Privacy Report** shows how often each app actually used them.",
      {h:"Ad personalisation"},
      "Several settings decide whether ads are chosen using your profile. Turning them off doesn’t reduce the number of ads; it makes them less personal and limits some linking of your activity.",
      {table:[
        ["Where","Setting"],
        ["Google Account","**My Ad Center** (myadcenter.google.com): personalised ads on or off, and topics you’d rather not see"],
        ["iPhone and iPad","**Settings → Privacy & Security → Tracking**: turn off **Allow Apps to Request to Track**, so apps can’t ask to track you across other companies’ apps and sites. Also **Apple Advertising → Personalized Ads**"],
        ["Android","**Settings → Security & privacy → More privacy settings → Ads** (on some phones **Settings → Google → Ads** or **Settings → Privacy → Ads**): **Delete advertising ID** or reset it"],
        ["Windows 11","**Settings → Privacy & security → Recommendations & offers** (on older versions **General**): turn off **Let apps show me personalized ads by using my advertising ID**"],
        ["Mac","**System Settings → Privacy & Security → Apple Advertising**: turn off **Personalized Ads**"],
        ["Facebook and Instagram","**Accounts Center → Ad preferences**"]
      ]}
    ]},
    {h:"Private browsing: what it really does", body:[
      "Every major browser has a [[private-browsing|private browsing]] mode: **Incognito** in Chrome, **InPrivate** in Edge, and **Private Window** in Firefox and Safari. The name suggests more than it delivers. Private browsing protects you from **people who use the same device**, not from the internet.",
      {table:[
        ["Private browsing does","Private browsing doesn’t"],
        ["Forget the history, cookies and site data from that session when you close the window","Hide your activity from the websites you visit"],
        ["Start without your saved sign-ins, so you aren’t signed in automatically","Hide it from your employer’s or school’s network, or your internet provider"],
        ["Block third-party cookies by default in Chrome and other browsers","Stop fingerprinting, or tracking once you sign in"],
        ["Help on a shared or borrowed computer","Delete files you downloaded or bookmarks you saved; Chrome keeps those"]
      ]},
      {ex:"Open a private window:\nChrome or Edge on Windows/ChromeOS: Ctrl + Shift + N\nChrome on Mac: ⌘ + Shift + N\nSafari on Mac: ⌘ + Shift + N\nFirefox: Ctrl + Shift + P (Mac: ⌘ + Shift + P)\nOn phones: open the browser’s tab view or menu and choose the private or Incognito option.", label:"Keyboard shortcuts", mono:true},
      "Good uses: checking your email on a library computer, buying a surprise present on a shared family laptop, or seeing what a search looks like without your personal history shaping it. For hiding where you go from the local network, see the VPN discussion in {{public-wifi-https}}; for stopping trackers, the browser settings in Lesson 1 matter more."
    ]},
    {h:"Putting it together, and what to skip", body:[
      "You don’t need to switch everything off. Privacy is a set of trade-offs: location makes maps work, history makes recommendations useful. The goal is that each piece of sharing is **a choice you made**, not a default you never saw.",
      {ol:[
        "Run the privacy checkup on your main email account.",
        "Set each app’s location to “while using” or “never”, and approximate where possible.",
        "Stop saving location in camera photos, or remember to share without it.",
        "Turn off ad personalisation where you don’t want it.",
        "Repeat once or twice a year, and after installing a new phone."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“Incognito makes me anonymous.”** It only stops your own device keeping the session. Sites, networks and anyone you sign in to still see you.",
        "**“Turning off location services makes my phone untraceable.”** Your mobile network still knows which masts your phone connects to, and your IP address gives a rough area.",
        "**“Social media always strips photo locations.”** Some do for public copies; many other ways of sharing send the original file.",
        "**“Privacy settings, once set, stay set.”** Apps add features and accounts redesign menus. A yearly check catches changes."
      ]},
      {key:"Check the big accounts, guard your location, think before sharing photos, and remember that private browsing only hides things from other people using your device."}
    ]}
   ],
   try:[
    {id:"t1u5-l2-x1", type:"match", q:"Match each privacy tool to the account or service it belongs to.", pairs:[
      ["Privacy Checkup under Data & privacy","Google Account","Google’s Privacy Checkup is reached from the Data & privacy section of myaccount.google.com."],
      ["Safety Check with an Emergency Reset option","iPhone (Apple)","Safety Check (iOS 16 or later) reviews and can instantly stop sharing with people and apps."],
      ["Privacy dashboard at account.microsoft.com/privacy","Microsoft account","The dashboard shows browsing, search, location and app activity linked to your Microsoft account."],
      ["Ad preferences in Accounts Center","Facebook and Instagram (Meta)","Accounts Center holds settings shared across Meta’s apps, including ad preferences."],
      ["Data safety section of a store listing","Google Play","Data safety is Google Play’s summary of what an app says it collects (Apple’s equivalent is App Privacy)."]
    ]},
    {id:"t1u5-l2-x2", type:"sort", q:"Oluwaseun uses Chrome’s Incognito mode on his work laptop. Sort what it does and doesn’t do.", buckets:["Incognito does this","Incognito doesn’t do this"], items:[
      {t:"Stops Chrome keeping a history of the pages he visits in that window", b:0, why:"When the Incognito session ends, Chrome doesn’t keep the history or site data from it."},
      {t:"Hides his browsing from his employer’s network", b:1, why:"Google says organisations that manage the network, such as an employer, can still see activity."},
      {t:"Blocks third-party cookies by default", b:0, why:"Chrome blocks third-party cookies in Incognito by default."},
      {t:"Stops the websites he visits from seeing his visit", b:1, why:"Websites still receive his requests and can record them."},
      {t:"Deletes a file he downloads during the session", b:1, why:"Downloaded files stay on the device until he deletes them."},
      {t:"Starts without his saved sign-ins", b:0, why:"Incognito doesn’t automatically sign him in to his accounts."}
    ]},
    {id:"t1u5-l2-x3", type:"mcq", q:"Lucía wants to send a photo of her new flat’s balcony to a group chat of acquaintances, but doesn’t want to reveal the address. Her iPhone camera saves location. What’s the most effective step?", options:[
      {t:"In the Share sheet, tap Options and turn off Location before sending, and check nothing in the picture shows the address", ok:true, why:"This removes the GPS coordinates from the shared copy, and checking the background deals with visual clues such as a street sign."},
      {t:"Send it as normal; group chats never include location", why:"Some apps remove metadata, but many ways of sharing send the original file with its GPS data. She can’t rely on it."},
      {t:"Turn on private browsing first", why:"Private browsing is a browser feature. It has nothing to do with the metadata inside a photo file."},
      {t:"Lower the photo’s brightness", why:"Editing the picture doesn’t change the hidden GPS coordinates stored in the file."}
    ]},
    {id:"t1u5-l2-x4", type:"spot", mono:true, q:"Lucía checks a photo’s details panel on her computer. Tap any detail that could reveal where she lives.", ask:"could reveal where she lives", parts:[
      {t:"IMG_2041.jpg", flag:false, why:"The file name is just a number given by the camera."},
      " · ",
      {t:"4032 × 3024 pixels", flag:false, why:"The image size says nothing about a place."},
      " · ",
      {t:"2.8 MB", flag:false, why:"File size reveals nothing about location."},
      " · ",
      {t:"Taken 2026-05-14 08:12", flag:false, why:"This shows when, not where. (A pattern of times could reveal routines, but this single detail doesn’t reveal an address.)"},
      " · ",
      {t:"Camera: phone model", flag:false, why:"Thousands of people have the same phone model."},
      " · ",
      {t:"GPS 51.5007, -0.1246", flag:true, why:"GPS coordinates pin the exact spot where the photo was taken. If that’s her home, anyone can put it on a map."}
    ]},
    {id:"t1u5-l2-x5", type:"mcq", q:"A weather app asks Sione for location access. Which choice gives the app what it needs with the least exposure?", options:[
      {t:"Allow while using the app, with approximate location", ok:true, why:"Local weather needs your area, not your exact spot, and only when you open the app."},
      {t:"Allow all the time, with precise location", why:"That lets the app record exactly where he is around the clock, which a forecast doesn’t need."},
      {t:"Allow all the time, with approximate location", why:"Better than precise, but background access still lets the app build a history of his movements."},
      {t:"Allow precise location only while using the app", why:"Reasonable for navigation, but more than a forecast needs; approximate is enough here."}
    ]},
    {id:"t1u5-l2-x6", type:"order", q:"Put Fatima’s one-evening privacy tune-up in the order this lesson’s checklist suggests (biggest benefit first).", items:[
      {t:"Run the privacy checkup on her main email account", why:"Her main account usually holds the most data and resets other accounts, so it comes first."},
      {t:"Set app location access to “while using” or “never”, and approximate where possible", why:"Location is the most revealing data, and it’s collected continuously."},
      {t:"Stop her camera saving location, or plan to share photos without it", why:"This stops future photos carrying her address."},
      {t:"Turn off ad personalisation and app tracking requests", why:"Useful, but it changes how ads are chosen rather than stopping the most sensitive collection."},
      {t:"Put a reminder in her calendar to repeat the check in a year", why:"Settings and apps change over time; a regular check keeps them in line with her choices."}
    ]},
    {id:"t1u5-l2-x7", type:"mcq", q:"Dmitri turns off “Let apps show me personalized ads by using my advertising ID” in Windows. What changes?", options:[
      {t:"Apps can no longer use that advertising ID to personalise ads; he’ll still see a similar number of ads", ok:true, why:"Microsoft notes that turning it off won’t reduce the number of ads; they just won’t be personalised using the ID."},
      {t:"All ads disappear from Windows and every website", why:"It only affects apps’ use of the Windows advertising ID. Ads themselves remain."},
      {t:"Websites can no longer use cookies", why:"Cookies are controlled in each browser, not by this Windows setting."},
      {t:"His Microsoft account history is deleted", why:"That’s done separately, in the Microsoft privacy dashboard."}
    ]}
   ],
   apply:{intro:"Spend about thirty minutes on the settings that matter most. Do your main account and the phone you carry.", tasks:[
     {t:"Run your main account’s privacy checkup", how:["**Google**: go to **myaccount.google.com → Data & privacy** and start **Privacy Checkup**. Review activity controls and consider an auto-delete period.","**Apple**: on iPhone, **Settings → Privacy & Security → Safety Check → Manage Sharing & Access**, and look at **App Privacy Report** in the same menu.","**Microsoft**: go to **account.microsoft.com/privacy**, review and clear anything you don’t want kept, and check ad settings.","**Meta**: in Facebook, open **Settings & privacy** and run **Privacy Checkup**; in **Accounts Center**, open **Ad preferences**.","Other providers: look for **Privacy**, **Data & privacy** or **Your data** in account settings."]},
     {t:"Review location access", how:{
       win:["**Settings → Privacy & security → Location**: check whether **Location services** is on, then which apps can use it. Turn off any that don’t need it."],
       mac:["**System Settings → Privacy & Security → Location Services**: review the app list and turn off any that don’t need it."],
       chromeos:["**Settings → Privacy and security → Privacy controls**: review **Location access** (wording varies by ChromeOS version)."],
       phone:["iPhone: **Settings → Privacy & Security → Location Services**. Tap each app: choose **While Using the App** or **Never**, and turn off **Precise Location** where approximate is enough. Set **Camera** to **Never** if you don’t want location in photos.","Android: **Settings → Location → App location permissions** (names vary by maker). Choose **Allow only while using the app** or **Don’t allow**, and turn off **Use precise location** where possible. Check your Camera app’s own settings for a location option."]
     }},
     {t:"Turn off ad personalisation where you want to", how:{
       win:["**Settings → Privacy & security → Recommendations & offers** (older versions: **General**): turn off **Let apps show me personalized ads by using my advertising ID**.","For your Microsoft account: **account.microsoft.com/privacy → Ad settings**."],
       mac:["**System Settings → Privacy & Security → Apple Advertising**: turn off **Personalized Ads**.","Google account: **myadcenter.google.com**."],
       chromeos:["Your Chromebook uses your Google Account’s ad settings: open **myadcenter.google.com** and choose whether ads are personalised."],
       phone:["iPhone: **Settings → Privacy & Security → Tracking**: turn off **Allow Apps to Request to Track**; then **Apple Advertising → Personalized Ads**.","Android: **Settings → Security & privacy → More privacy settings → Ads** (on some phones **Settings → Google → Ads**): tap **Delete advertising ID**."]
     }},
     {t:"Practise a private window", how:["Open a private window with the shortcut for your browser (Ctrl + Shift + N in Chrome and Edge; Ctrl + Shift + P in Firefox; ⌘ + Shift + N in Safari and Chrome on a Mac).","Notice that you’re signed out of your usual sites.","Close the window and check that the pages you visited don’t appear in your normal history."]}
   ], proof:"Your main account’s privacy checkup is done, location access matches what each app really needs, your camera’s location setting is a deliberate choice, and ad personalisation is set the way you want."},
   read:[
     {book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Cookies”, “Browsing History” and “Ensuring Privacy”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u5-l3", title:"Your rights online", minutes:50,
   hook:{q:"Under Europe’s data-protection law, the GDPR, you can ask a company for a copy of the personal data it holds about you. What can it normally charge for that first copy?", options:["Nothing: it’s free","A small admin fee","A fee based on how much data it holds","You must pay a lawyer to ask for you"], answer:0, reveal:"**Nothing.** The first copy is free, the company normally has one month to reply, and you don’t need a lawyer, special wording or a reason. This lesson explains that right and the others the [[gdpr|GDPR]] gives you, what counts as real consent, and how to read a privacy policy in five minutes."},
   goals:[
     "Explain what data-protection laws are for, using the EU GDPR as the main example",
     "Describe the rights of access, erasure, objection and consent, and their limits",
     "Name examples of data-protection laws in other countries and states",
     "Read a privacy policy quickly for the parts that matter",
     "Make a data access request and know what to do if it’s ignored"
   ],
   learn:[
    {h:"Why data-protection laws exist", body:[
      {lead:"Lessons 1 and 2 showed how much is collected about you. Data-protection laws are the rules organisations must follow when they do it, and the rights you can use to check on them."},
      "Think of a library that lends your diary to strangers. You’d want rules: what it may keep, who it may show, how long it may hold it, and a way for you to see what it has. Data-protection laws do that for [[personal-data|personal data]].",
      "This lesson uses the European Union’s **General Data Protection Regulation** ([[gdpr|GDPR]]) as its worked example, because it is detailed, widely copied and affects services used around the world. Other countries’ laws differ, sometimes a lot. Nothing here is legal advice; for a real dispute, use your country’s data-protection authority or a legal adviser.",
      {h:"Three words to know"},
      {list:[
        "**Data subject**: you, the person the data is about.",
        "[[data-controller|Data controller]]: the organisation that decides why and how your data is used, such as the shop, app or employer. Your rights are used against the controller.",
        "**Processing**: anything done with data: collecting, storing, using, sharing, deleting."
      ]},
      "The GDPR protects people in the EU, and it also applies to organisations outside the EU that offer goods or services to people in the EU or monitor their behaviour. That’s why websites far from Europe show cookie choices and offer data-download tools."
    ]},
    {h:"Lawful reasons, and what real consent means", body:[
      "Under the GDPR, an organisation needs one of six legal reasons (its [[lawful-basis|lawful basis]]) for each use of your data: your **consent**; a **contract** with you (a shop needs your address to deliver); a **legal obligation** (keeping tax records); protecting someone’s **vital interests** (a medical emergency); a **public task**; or its **legitimate interests**, weighed against yours.",
      "So consent is only one route, and it’s often misunderstood. Valid [[consent]] under the GDPR must be:",
      {table:[
        ["Consent must be…","Which means","Not valid if…"],
        ["Freely given","A real choice, without penalty for saying no","You can’t use a service at all unless you agree to unrelated marketing"],
        ["Specific","Separate for separate purposes","One box covers newsletters, profiling and selling data"],
        ["Informed","You know who and what for","The purpose is hidden in a long document"],
        ["Unambiguous","A clear action from you","The box was already ticked for you"]
      ]},
      {key:"You can withdraw consent at any time, and the GDPR says withdrawing must be as easy as giving it."}
    ]},
    {h:"Your rights under the GDPR", body:[
      "The GDPR gives people a set of [[data-subject-rights|data subject rights]]. The European Commission lists them as follows:",
      {table:[
        ["Right","What it lets you do","Example"],
        ["To be informed","Know who is using your data, why, for how long and who gets it","A clear privacy notice when you sign up"],
        ["Of access","Get confirmation and a copy of your data, plus how it’s used","Kenji asks a gym for everything it holds about him"],
        ["To rectification","Have wrong or incomplete data corrected","A credit agency lists an old debt that Ana paid"],
        ["[[right-to-erasure|To erasure]]","Have data deleted in certain cases (“right to be forgotten”)","Tomás closes an account he no longer uses"],
        ["To restrict processing","Pause use while a dispute is checked","Data is frozen while its accuracy is checked"],
        ["To data portability","Get data you provided in a reusable format, or sent to another provider","Moving a playlist history to a new service"],
        ["To object","Object to some uses; for direct marketing the organisation must stop","Mei objects to marketing profiling"],
        ["About automated decisions","Not be subject to some decisions made only by software, and ask for a human","A loan refused by an automated system"]
      ]},
      {h:"The limits"},
      {list:[
        "**Erasure is not absolute.** An organisation may keep data it needs for a legal obligation, legal claims, public health, research or freedom of expression and information. A bank must keep some records for years.",
        "**Objection** to most uses is weighed against the organisation’s reasons; objection to **direct marketing** must always be respected.",
        "**Time limit.** Organisations must reply without undue delay and within **one month**. They can extend by **two further months** for complex or numerous requests, but must tell you, with reasons, within the first month.",
        "**Cost.** Using your rights is normally free. A first copy of your data is free; a reasonable fee is allowed only for extra copies or for requests that are clearly unfounded or excessive."
      ]}
    ]},
    {h:"Around the world: many laws, similar ideas", body:[
      "Many countries and some states have their own data-protection laws, and they change. These are examples only; check your own country’s data-protection authority for what applies to you.",
      {table:[
        ["Place","Law (examples)","Notes"],
        ["United Kingdom","UK GDPR and Data Protection Act 2018","Closely based on the EU GDPR, with later UK amendments, including the Data (Use and Access) Act 2025"],
        ["United States","No single national privacy law; state laws such as California’s CCPA","Californians have rights to know, delete, correct, opt out of sale or sharing, limit sensitive data use, and equal treatment. Many other states have passed their own laws."],
        ["Brazil","LGPD (Lei Geral de Proteção de Dados)","Rights similar to the GDPR’s"],
        ["India","Digital Personal Data Protection Act 2023","Rules notified in November 2025; most obligations and people’s rights are due to apply from May 2027"],
        ["Japan","Act on the Protection of Personal Information (APPI)","Includes rights to request disclosure and correction"],
        ["South Africa","Protection of Personal Information Act (POPIA)","Has its own Information Regulator"],
        ["Kenya","Data Protection Act 2019","Overseen by the Office of the Data Protection Commissioner"],
        ["Canada","PIPEDA (federal private sector), plus provincial laws","Right to access and correct personal information"]
      ]},
      {tip:"Even where no strong law covers you, large international services often offer the same download and deletion tools worldwide, because building one system is simpler than many."}
    ]},
    {h:"Reading a privacy policy in five minutes", body:[
      "A [[privacy-policy|privacy policy]] (or privacy notice) is the document where an organisation says what it collects and why. They’re long, but you don’t need to read every word. Look for the answers to six questions:",
      {ol:[
        "**Who** is the controller, and how do I contact them (or their Data Protection Officer)?",
        "**What** do they collect, and from where (from me, from my device, from other companies)?",
        "**Why**: for which purposes, and on which lawful basis?",
        "**Who else** gets it: “partners”, advertisers, data brokers? Do they **sell** or **share** it?",
        "**How long** do they keep it?",
        "**How** do I use my rights: download, delete, opt out?"
      ]},
      "On a computer, press [[kbd:Ctrl]] + [[kbd:F]] (Mac: [[kbd:⌘]] + [[kbd:F]]) and search for words like **sell**, **share**, **partners**, **advertising**, **retain** and **delete**. On a phone, use **Find in page** in the browser menu.",
      {ex:"“We share information with our trusted partners for advertising and analytics.”\n→ Who are the partners? Look for a list or a link.\n“We retain your data for as long as necessary.”\n→ Vague. Look for a table of retention periods.\n“You can download or delete your data at Settings → Your data.”\n→ Useful: note where.\n“By using this app you consent to all processing described here.”\n→ Under the GDPR, simply using a service isn’t valid consent for things like marketing.", label:"Worked example: decoding four sentences"}
    ]},
    {h:"Making a data access request", body:[
      "A [[subject-access-request|data access request]] (often called a subject access request, or SAR) asks an organisation for a copy of your personal data and information about how it’s used. Under the GDPR, that’s your right of access.",
      {h:"Try the self-service tools first"},
      "Many large services let you download your data directly: **Google Takeout** (takeout.google.com), Apple’s **Data and Privacy** page (privacy.apple.com), **Download your information** (or **Export your information**) in Meta’s Accounts Center, and Microsoft’s **privacy dashboard**. These are quick, but they may not include everything, such as inferences or who your data was shared with.",
      {h:"Writing your own request"},
      {ol:[
        "Find the contact in the privacy policy: a privacy email, web form or Data Protection Officer.",
        "Write briefly. No special wording or reason is needed.",
        "Ask for: a copy of your data; the purposes; who it was shared with; how long it will be kept; and where it came from if not from you.",
        "Give enough detail to find you (name, email or account ID). Send ID only if they ask, through their official channel.",
        "Note the date you sent it, and keep a copy."
      ]},
      {ex:"Subject: Data access request\n\nHello,\nI am making a request under Article 15 of the GDPR for a copy of the personal data you hold about me, the purposes of processing, who it has been shared with, how long it will be kept and its source.\nAccount email: priya@example.com\nPlease reply within one month.\nThank you,\nPriya", label:"Sample request (adapt to your country’s law)", mono:true},
      {fig:'<svg viewBox="0 0 340 482"><defs><marker id="t1u5l3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="8" width="300" height="58" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1. You send a request</text><text class="s" x="170" y="52" text-anchor="middle">to the organisation or its DPO</text><path class="d-ink" d="M170 66 L170 86" stroke-width="2" marker-end="url(#t1u5l3a)"/><rect class="d-lup" x="20" y="90" width="300" height="58" rx="10" stroke-width="2"/><text x="170" y="114" text-anchor="middle">2. They confirm it’s you</text><text class="s" x="170" y="134" text-anchor="middle">they may ask for proof of identity</text><path class="d-ink" d="M170 148 L170 168" stroke-width="2" marker-end="url(#t1u5l3a)"/><rect class="d-gold" x="20" y="172" width="300" height="74" rx="10" stroke-width="2"/><text x="170" y="196" text-anchor="middle">3. The clock runs: one month</text><text class="s" x="170" y="216" text-anchor="middle">+2 months if complex, but they must</text><text class="s" x="170" y="234" text-anchor="middle">tell you why within the first month</text><path class="d-ink" d="M130 246 L90 286" stroke-width="2" marker-end="url(#t1u5l3a)"/><path class="d-ink" d="M210 246 L250 286" stroke-width="2" marker-end="url(#t1u5l3a)"/><rect class="d-sage" x="8" y="290" width="158" height="92" rx="10" stroke-width="2"/><text x="87" y="314" text-anchor="middle">Answer</text><text class="s" x="87" y="334" text-anchor="middle">a copy of your data</text><text class="s" x="87" y="351" text-anchor="middle">and how it’s used;</text><text class="s" x="87" y="368" text-anchor="middle">first copy free</text><rect class="d-rose" x="174" y="290" width="158" height="92" rx="10" stroke-width="2"/><text x="253" y="314" text-anchor="middle">Refusal</text><text class="s" x="253" y="334" text-anchor="middle">with reasons, and</text><text class="s" x="253" y="351" text-anchor="middle">your right to</text><text class="s" x="253" y="368" text-anchor="middle">complain</text><path class="d-ink" d="M253 382 L253 412" stroke-width="2" marker-end="url(#t1u5l3a)"/><rect class="d-gold" x="20" y="416" width="300" height="58" rx="10" stroke-width="2"/><text x="170" y="440" text-anchor="middle">Ignored or unhappy?</text><text class="s" x="170" y="460" text-anchor="middle">complain to your data protection authority</text></svg>', alt:"A flow chart of a data access request under the GDPR. Step 1: you send a request to the organisation or its Data Protection Officer. Step 2: they confirm your identity. Step 3: the clock runs for one month, extendable by two months if complex, with an explanation within the first month. The result is either an answer with a copy of your data, first copy free, or a refusal with reasons and your right to complain. If ignored or unhappy, complain to your data protection authority.", cap:"A data access request under the GDPR, step by step."},
      {warn:"Scammers sometimes pose as “data removal” or “data recovery” services. You never need to pay a third party to use your own rights. Send requests yourself, through contact details found on the organisation’s own website."}
    ]}
   ],
   try:[
    {id:"t1u5-l3-x1", type:"match", q:"Match each situation to the GDPR right that fits it best.", pairs:[
      ["Kenji wants to see everything a gym holds about him","Right of access","Access gives him a copy of his data and how it’s used."],
      ["A credit agency lists a debt Ana already paid","Right to rectification","Rectification is for correcting inaccurate data."],
      ["Tomás wants an old account’s data deleted","Right to erasure","Erasure applies when data is no longer needed, among other grounds."],
      ["Mei is tired of a shop using her data for marketing emails","Right to object","Objection to direct marketing must always be respected."],
      ["Hana wants her listening history moved to a new music service","Right to data portability","Portability covers data she provided, in a reusable format or sent to another provider."]
    ]},
    {id:"t1u5-l3-x2", type:"sort", q:"Under the GDPR, which of these sign-up designs collect valid consent for marketing emails?", buckets:["Valid consent","Not valid consent"], items:[
      {t:"An unticked box: “Send me offers by email”, which Priya ticks herself", b:0, why:"A clear action by her, for one specific purpose, with no pressure: valid."},
      {t:"A box for marketing that is already ticked when the page loads", b:1, why:"Pre-ticked boxes aren’t an unambiguous action by the person."},
      {t:"“By using this site you agree to marketing emails”", b:1, why:"Simply using a service isn’t a clear, specific choice."},
      {t:"An account can only be created if you accept marketing emails, which the service doesn’t need", b:1, why:"Not freely given: there’s a penalty (no account) for saying no to something unrelated."},
      {t:"Separate unticked boxes for “newsletter” and “partner offers”, with a link explaining each", b:0, why:"Specific, informed and requiring action: valid."},
      {t:"One box covering marketing, profiling and selling data to partners", b:1, why:"Bundling different purposes into one box isn’t specific consent."}
    ]},
    {id:"t1u5-l3-x3", type:"number", q:"Amara sends a GDPR data access request. The company tells her within the first month that, because her request is complex, it is extending the deadline as far as the GDPR allows. How many months from receiving her request does the company have in total?", answer:3, tol:0, unit:"months", why:"The basic deadline is one month. It can be extended by two further months for complex or numerous requests: 1 + 2 = 3 months in total.", wrongs:[
      {v:1, tol:0, why:"One month is the normal deadline, but the GDPR allows an extension of two further months when the organisation explains why within the first month."},
      {v:2, tol:0, why:"Two months is the length of the extension itself. Add the original month: 1 + 2 = 3."},
      {v:6, tol:0, why:"There’s no six-month period in the GDPR’s rules on access requests. The maximum is one month plus two."}
    ]},
    {id:"t1u5-l3-x4", type:"spot", q:"Here are five sentences from a fictional app’s privacy policy. Tap the ones that deserve a closer look before you agree.", ask:"deserve a closer look", parts:[
      {t:"“You can download or delete your data in Settings → Your data.”", flag:false, why:"This tells you exactly how to use your rights. That’s good practice."},
      " ",
      {t:"“We may sell your information to partners.”", flag:true, why:"Selling data is a key thing to find. Check who the partners are and whether you can opt out."},
      " ",
      {t:"“We keep your data for as long as we consider useful.”", flag:true, why:"Vague retention. Under the GDPR, data should be kept no longer than necessary, and good policies give periods."},
      " ",
      {t:"“Our Data Protection Officer can be reached at privacy@example.com.”", flag:false, why:"A clear contact for rights requests is exactly what you want to find."},
      " ",
      {t:"“By opening the app you consent to all processing in this policy.”", flag:true, why:"Using an app isn’t clear, specific consent. This is a sign the company may not take consent seriously."}
    ]},
    {id:"t1u5-l3-x5", type:"mcq", q:"Fatima asks a social network to erase all her data. It deletes her profile and posts but keeps her payment records for several years. Under the GDPR, is that allowed?", options:[
      {t:"It can be: erasure isn’t absolute, and data needed to meet a legal obligation, such as tax records, can be kept", ok:true, why:"The GDPR lists exceptions to erasure, including legal obligations and legal claims. The company should explain this to her."},
      {t:"No: the right to erasure means every piece of data must go immediately", why:"The right to erasure has exceptions. Records kept for a legal obligation are one."},
      {t:"Yes, companies can keep anything they like after an erasure request", why:"They need a specific reason, such as a legal obligation. Otherwise data should be erased."},
      {t:"No, because payment records aren’t personal data", why:"Payment records linked to her are personal data. The question is whether an exception applies."}
    ]},
    {id:"t1u5-l3-x6", type:"order", q:"Put Sione’s data access request in a sensible order.", items:[
      {t:"Find the privacy contact or Data Protection Officer in the company’s privacy policy", why:"He needs the official contact before anything else, to avoid fakes."},
      {t:"Send a short request for a copy of his data, the purposes, recipients and retention", why:"No special form is needed; a clear email or web form is enough."},
      {t:"Note the date and keep a copy of what he sent", why:"The one-month clock starts when they receive it, so he needs a record."},
      {t:"Provide proof of identity if they ask, through their official channel", why:"Organisations may check it’s really him before handing over data."},
      {t:"If there’s no reply after the deadline, complain to the data protection authority", why:"The regulator is the next step if the organisation ignores the request."}
    ]},
    {id:"t1u5-l3-x7", type:"mcq", q:"Lucía lives in a country without a strong data-protection law. A large international app she uses has a “Download your data” button. What’s the best way to think about it?", options:[
      {t:"She can use it: many international services offer the same tools worldwide, whatever local law requires", ok:true, why:"Big services often build one set of tools for everyone. Using them costs nothing."},
      {t:"It must be fake, because only people in the EU have data rights", why:"Many countries have data-protection laws, and many services offer tools worldwide anyway."},
      {t:"She must pay a lawyer before using it", why:"Built-in download tools are self-service and free."},
      {t:"Downloading her data deletes it from the service", why:"Download and deletion are separate. Downloading gives her a copy."}
    ]}
   ],
   apply:{intro:"Use your rights on one real service. Pick one you use often, so the result is interesting.", tasks:[
     {t:"Read one privacy policy in five minutes", how:["Open the privacy policy of an app or site you use daily (usually linked at the bottom of the website or in the app’s settings).","Search the page for **sell**, **share**, **partners**, **advertising**, **retain** and **delete**. On a computer use Ctrl + F (Mac: ⌘ + F); on a phone use **Find in page** in the browser menu.","Write one line for each of the six questions: who, what, why, who else, how long, how to use your rights."]},
     {t:"Download your data from one big account", how:["**Google**: go to **takeout.google.com**, choose a few products (for example, Maps or YouTube) and create an export.","**Apple**: go to **privacy.apple.com** and request a copy of your data.","**Meta**: in **Accounts Center → Your information and permissions**, choose **Download your information** (some versions call it **Export your information**).","**Microsoft**: on **account.microsoft.com/privacy**, look for an option to download your data (or follow its link to contact Microsoft’s privacy team for anything not shown).","When it arrives, look at one or two files. Was anything surprising?"]},
     {t:"Draft (or send) a data access request", how:["Choose a smaller organisation that has your data: a gym, shop, school or club.","Adapt the sample request from this lesson to your country’s law (or simply ask for your data if no law applies).","Send it only if you actually want the data. Keep a note of the date."]}
   ], proof:"Six one-line answers about a real privacy policy, a downloaded copy of some of your data from one account, and a drafted (or sent) access request with its date noted."},
   read:[
     {book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Ensuring Privacy” (including “Minimal Data Collection from Customers”)"},
     {book:"ics", where:"Background reading: Section 14.3 “Governing the Use of Cyber Resources” (the parts on using data responsibly)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u5-l4", title:"Copyright, Creative Commons and using others’ work", minutes:55,
   hook:{q:"Beethoven’s symphonies are in the public domain, free for anyone to use. Can you freely post a recording of one made by a modern orchestra?", options:["Yes: the music belongs to everyone now","Not necessarily: the new recording can have its own copyright","Yes, as long as you credit Beethoven","Yes, if you use less than 30 seconds"], answer:1, reveal:"**Not necessarily.** The music itself is free, but a modern orchestra’s recording, like a new translation of an old novel, can have its own copyright. Copyright is full of surprises like this, and this lesson sorts out what’s protected, when you may reuse others’ work, and how [[creative-commons|Creative Commons]] licences make reuse easy."},
   goals:[
     "Explain how copyright works: automatic, about expression, and different from country to country",
     "Describe fair use and fair dealing as country-specific exceptions, without treating them as a free pass",
     "Recognise public-domain work and the six Creative Commons licences plus CC0",
     "Write a correct attribution using title, author, source and licence (TASL)",
     "Use open textbooks and other openly licensed material confidently"
   ],
   learn:[
    {h:"Copyright in plain words", body:[
      {lead:"Almost everything you find online, from photos and songs to articles and recipes’ written instructions, belongs to someone. Being able to download it doesn’t mean you may reuse it."},
      "[[copyright|Copyright]] is a set of legal rights that the creator of an original work gets over it: mainly the rights to copy it, share it, adapt it and perform or show it in public. Others need permission to do those things, unless the law makes an exception.",
      "Think of it like owning a house you built. You can live in it, rent it out, or let friends stay. Other people need your permission to move in, even if your door happens to be open.",
      {h:"Three facts that surprise people"},
      {list:[
        "**It’s automatic.** Under the Berne Convention, which most countries have joined, protection can’t depend on any formality. You don’t have to register, pay or add a © symbol. Your holiday photo is protected the moment you take it.",
        "**It protects expression, not ideas.** A recipe’s list of ingredients or the idea of a story about a wizard school isn’t owned; a particular written description, photo or novel is.",
        "**It varies by country.** The Berne Convention sets a minimum term of the author’s life plus 50 years for most works; many countries, including EU members, the UK and the US for most works, use life plus 70 years. Exceptions, ownership rules and terms all differ."
      ]},
      {key:"Online and free to view does not mean free to reuse. Assume a work is protected unless you find a clear reason it isn’t."}
    ]},
    {h:"Exceptions: fair use and fair dealing", body:[
      "Every copyright system has exceptions that let people use parts of works without permission in certain situations. Their names and rules depend on the country, and this is an area where professional advice matters for anything important. This lesson gives a general picture, not legal advice.",
      {table:[
        ["Exception","Where (examples)","How it works"],
        ["[[fair-use|Fair use]]","United States (and a few other countries)","A flexible test. Courts weigh four factors: the purpose and character of the use (including commercial or non-profit educational), the nature of the work, how much is used, and the effect on the market for the original."],
        ["[[fair-dealing|Fair dealing]]","UK, Canada, Australia, India and others","Allowed only for listed purposes, such as research and private study, criticism and review, quotation, news reporting, or parody, and only if the dealing is fair. Usually needs acknowledgement of the source."],
        ["Other listed exceptions","Many countries, including EU members","Specific exceptions written into law, for example for quotation, teaching, or people with disabilities."]
      ]},
      "The US Copyright Office stresses that there is **no formula**: no set number of words, seconds or percentage that is automatically fair. Each case depends on its facts.",
      {warn:"Two myths cause most trouble. **“I gave credit, so it’s fine”**: crediting the creator is polite and sometimes required, but it doesn’t on its own give you permission. **“It’s non-profit, so it’s fine”**: non-commercial use can help in a fair use analysis, but it isn’t an automatic exception."}
    ]},
    {h:"The public domain", body:[
      "Works in the [[public-domain|public domain]] are not protected by copyright, so anyone may use them for any purpose. Works get there in three main ways:",
      {list:[
        "**Copyright has expired.** For example, books by authors who died centuries ago. Because terms differ, a work can be public domain in one country and not yet in another.",
        "**The owner gave up their rights.** Creators can use a tool called **CC0** (below) to waive their rights as far as the law allows.",
        "**It was never protected.** For example, works made by US federal government employees as part of their jobs aren’t protected by copyright in the United States."
      ]},
      {tip:"Be careful with new versions of old works. Beethoven’s symphonies are public domain, but a modern orchestra’s recording, a new translation of an old novel or a modern edition’s notes can have their own copyright."}
    ]},
    {h:"Creative Commons licences", body:[
      "A licence is permission given in advance. [[creative-commons|Creative Commons]] (CC) is a non-profit organisation that publishes free, standard licences creators can attach to their work, saying “you may already do these things, on these conditions”. It’s an [[open-license|open licence]]: you don’t need to ask, as long as you follow the conditions. The current version is 4.0.",
      "Every CC licence is built from four elements:",
      {table:[
        ["Element","Meaning (from creativecommons.org)"],
        ["**BY**","**Attribution:** credit must be given to the creator. Every CC licence includes this."],
        ["**SA**","**[[share-alike|ShareAlike]]:** adaptations must be shared under the same terms."],
        ["**NC**","**[[non-commercial|NonCommercial]]:** only non-commercial use is allowed, meaning not primarily intended for or directed towards commercial advantage or monetary compensation."],
        ["**ND**","**[[no-derivatives|NoDerivatives]]:** no derivatives or adaptations may be shared. You may share only unchanged copies."]
      ]},
      "Combined, they make six licences, listed by Creative Commons from most to least permissive. A separate tool, **[[cc0|CC0]]**, lets creators waive their rights altogether.",
      {fig:'<svg viewBox="0 0 340 388"><text class="s" x="170" y="18" text-anchor="middle">↑ more freedom for people reusing the work</text><rect class="d-sage" x="8" y="30" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="52">CC0</text><text class="s" x="132" y="52">waived, like public domain</text><rect class="d-lup" x="8" y="72" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="94">CC BY</text><text class="s" x="132" y="94">any use, with credit</text><rect class="d-lup" x="8" y="114" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="136">CC BY-SA</text><text class="s" x="132" y="136">credit; share changes alike</text><rect class="d-lup" x="8" y="156" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="178">CC BY-ND</text><text class="s" x="132" y="178">credit; no changed versions</text><rect class="d-gold" x="8" y="198" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="220">CC BY-NC</text><text class="s" x="132" y="220">credit; non-commercial only</text><rect class="d-gold" x="8" y="240" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="262">CC BY-NC-SA</text><text class="s" x="132" y="262">non-commercial; share alike</text><rect class="d-gold" x="8" y="282" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="304">CC BY-NC-ND</text><text class="s" x="132" y="304">non-commercial; no changes</text><rect class="d-rose" x="8" y="324" width="324" height="34" rx="8" stroke-width="2"/><text x="18" y="346">Copyright ©</text><text class="s" x="132" y="346">ask permission first</text><text class="s" x="170" y="380" text-anchor="middle">↓ more conditions on reuse</text></svg>', alt:"A ladder of eight rows from most to least freedom for reusers: CC0 (rights waived, like the public domain); CC BY (any use, with credit); CC BY-SA (credit, share changes alike); CC BY-ND (credit, no changed versions); CC BY-NC (credit, non-commercial only); CC BY-NC-SA (non-commercial, share alike); CC BY-NC-ND (non-commercial, no changes); and normal copyright, all rights reserved (ask permission first).", cap:"CC0 and the six Creative Commons licences, from most to least permissive, compared with normal copyright."},
      {list:[
        "**CC licences can’t be taken back** for people who already received the work under them. A creator can stop offering the licence, but copies already shared under it keep their permission.",
        "**Exceptions still apply.** A CC licence adds permissions; it doesn’t remove fair use, fair dealing or other exceptions you already had.",
        "**Check the licence on the actual work**, not on the website in general. One site can host works under many different licences."
      ]}
    ]},
    {h:"Giving attribution correctly: TASL", body:[
      "Every CC licence requires [[attribution]]: credit in a reasonable form. Creative Commons recommends including four things, remembered as **TASL**: **T**itle, **A**uthor, **S**ource and **L**icence.",
      {fig:'<svg viewBox="0 0 340 300"><circle class="d-rose" cx="30" cy="40" r="20" stroke-width="2"/><text x="30" y="45" text-anchor="middle">T</text><text x="60" y="34">“Creative Commons 10th Birthday</text><text x="60" y="52">Celebration San Francisco”</text><text class="s" x="60" y="70">Title (optional in 4.0, but helpful)</text><circle class="d-lup" cx="30" cy="110" r="20" stroke-width="2"/><text x="30" y="115" text-anchor="middle">A</text><text x="60" y="108">by Timothy Vollmer</text><text class="s" x="60" y="126">Author, as they want to be named</text><circle class="d-gold" cx="30" cy="180" r="20" stroke-width="2"/><text x="30" y="185" text-anchor="middle">S</text><text x="60" y="178">title linked to the photo’s page</text><text class="s" x="60" y="196">Source: where the work lives</text><circle class="d-sage" cx="30" cy="250" r="20" stroke-width="2"/><text x="30" y="255" text-anchor="middle">L</text><text x="60" y="242">is licensed under CC BY 4.0</text><text x="60" y="260">(linked to the licence)</text><text class="s" x="60" y="278">Licence: exact name and version</text></svg>', alt:"The four parts of an ideal attribution, using Creative Commons’ own example. T, title: “Creative Commons 10th Birthday Celebration San Francisco” (optional under version 4.0 but helpful). A, author: by Timothy Vollmer, named as they wish. S, source: the title is linked to the photo’s page. L, licence: is licensed under CC BY 4.0, linked to the licence.", cap:"TASL, using the example from Creative Commons’ recommended practices for attribution."},
      {table:[
        ["Attribution","Verdict"],
        ["“Creative Commons 10th Birthday Celebration San Francisco” by Timothy Vollmer is licensed under CC BY 4.0 (with links)","Ideal: all four parts"],
        ["Photo by Timothy Vollmer / CC BY","Pretty good: author and licence, but no title, source link or version"],
        ["Photo: Creative Commons","Incorrect: no title, author, source or licence. Creative Commons is an organisation, not a licence."]
      ]},
      "**If you changed the work**, say so. A simple crop: add “cropped from original”. A creative change, such as adding text or combining images, makes an adaptation: credit the original with TASL and say what you did, for example “This poster, by Sione Taufa, is adapted from …”. If the original is ShareAlike, share your version under the same or a compatible licence; if it’s NoDerivatives, you may not share an adapted version.",
      {tip:"Attribution isn’t legally required under CC0 or for works marked as public domain, but crediting the creator and where you found it is still good practice, and it helps others find the original."}
    ]},
    {h:"Open textbooks and finding openly licensed work", body:[
      "An [[open-textbook|open textbook]] is a textbook published under an open licence, so anyone can read it free and, depending on the licence, copy, share or adapt it. The books suggested throughout this course are examples. OpenStax publishes its textbooks under Creative Commons licences, and the exact licence is printed in each book’s preface. Today *Workplace Software and Skills*, *Introduction to Computer Science* and *Introduction to Sociology 3e* all say **CC BY-NC-SA 4.0**. Some OpenStax books were released earlier under **[[cc-by|CC BY]] 4.0**, and copies shared under that licence keep it, so always read the licence on the copy you are using.",
      {ex:"Workplace Software and Skills is licensed CC BY-NC-SA 4.0. So a community group could:\n✓ print copies of a chapter for a free study session, crediting OpenStax (BY, non-commercial)\n✓ adapt a chapter with local examples, if they share the result under CC BY-NC-SA too (SA)\n✗ sell printed copies for profit without permission (NC)", label:"Worked example: what an open licence allows"},
      {h:"Where to find reusable work"},
      {list:[
        "**Search tools with licence filters**, such as Openverse, Wikimedia Commons, or the usage-rights filter in some image search engines.",
        "**Check the licence on the work’s own page** before using it, and copy the TASL details at the same time.",
        "**Keep a note** of where each image in a project came from. It saves a lot of searching later."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“No © symbol means no copyright.”** Copyright is automatic.",
        "**“I found it on a search engine, so the search engine is the source.”** The source is the page where the work lives, not the search engine.",
        "**“I changed 10%, so it’s mine.”** Changing a work doesn’t remove the original creator’s rights; it usually makes an adaptation that needs permission.",
        "**“Creative Commons means free for anything.”** Each licence has conditions, and NC or ND may rule out your use."
      ]}
    ]}
   ],
   try:[
    {id:"t1u5-l4-x1", type:"match", q:"Match each licence to the summary of what it lets you do.", pairs:[
      ["CC BY","Any use, including commercial use and changed versions, as long as you give credit","CC BY has only the attribution condition."],
      ["CC BY-SA","Changes allowed, but your changed version must use the same or a compatible licence","SA (ShareAlike) is the condition about how adaptations are shared."],
      ["CC BY-ND","Commercial use allowed, but only unchanged copies may be shared","ND (NoDerivatives) forbids sharing adaptations; without NC, commercial use is fine."],
      ["CC BY-NC","Changes allowed, but only for non-commercial purposes","NC limits the purpose; without ND or SA, adaptations are allowed with no licence condition on them."],
      ["CC0","No conditions at all, not even credit (though credit is still kind)","CC0 waives the creator’s rights as far as the law allows."]
    ]},
    {id:"t1u5-l4-x2", type:"mcq", q:"Tomás runs a small bicycle repair business. He finds a perfect photo for his paid advertising flyer, licensed CC BY-NC 4.0. Can he use it under that licence?", options:[
      {t:"No. NC allows only non-commercial use, and an advert for his business is commercial; he’d need the photographer’s permission", ok:true, why:"An advert is directed towards commercial advantage. He can ask the photographer for a separate permission, or find a CC BY or CC0 image."},
      {t:"Yes, as long as he credits the photographer", why:"Credit is required by every CC licence, but it doesn’t override the NC condition."},
      {t:"Yes, because small businesses don’t count as commercial", why:"The licence is about the purpose of the use, not the size of the business."},
      {t:"Yes, if he changes the colours first", why:"Changing the photo doesn’t remove the NC condition; it makes an adaptation, which is still limited to non-commercial use."}
    ]},
    {id:"t1u5-l4-x3", type:"spot", q:"Hana wrote this credit under a photo on her club’s website. Tap the parts that are wrong or missing information.", ask:"wrong or misleading", parts:[
      {t:"“Morning market, Accra”", flag:false, why:"The title is a correct part of TASL."},
      " ",
      {t:"by A. Mensah", flag:false, why:"Naming the author is correct (ideally as the author asks to be named)."},
      " · Source: ",
      {t:"Google Images", flag:true, why:"A search engine isn’t the source. The source is the page where the photo actually lives, ideally linked."},
      " · Licence: ",
      {t:"Creative Commons", flag:true, why:"Creative Commons is an organisation with several licences. She must name the specific licence and version, such as CC BY 4.0."},
      " · ",
      {t:"free to use", flag:true, why:"This isn’t a licence and may mislead others: some CC licences forbid commercial use or changes."}
    ]},
    {id:"t1u5-l4-x4", type:"sort", q:"Sort each work: free for anyone to reuse, or still needs permission (or a licence or exception)?", buckets:["Free to reuse (public domain or CC0)","Needs permission, a licence or an exception"], items:[
      {t:"A novel whose author died in 1850", b:0, why:"Copyright terms are counted from the author’s death and have long expired for this work in practically every country."},
      {t:"A photo marked CC0 by its photographer", b:0, why:"CC0 waives the creator’s rights as far as the law allows."},
      {t:"A song released last year by a band", b:1, why:"It’s under copyright for many decades."},
      {t:"A recipe blog’s photos, with no © symbol shown", b:1, why:"Copyright is automatic; no symbol is needed."},
      {t:"A friend’s photo posted publicly on social media", b:1, why:"Public to view isn’t the same as free to reuse. Ask your friend."},
      {t:"A report written by a US federal government agency, used in the United States", b:0, why:"Works by US federal government employees as part of their jobs aren’t protected by copyright in the US. (Other countries’ governments often keep copyright.)"}
    ]},
    {id:"t1u5-l4-x5", type:"mcq", q:"Kenji uses a 20-second clip from a film in his video and writes “all credit to the studio, no copyright infringement intended”. Is that enough to make the use lawful?", options:[
      {t:"No. Credit and good intentions don’t give permission; whether it’s allowed depends on his country’s exceptions and the specific facts", ok:true, why:"Fair use, fair dealing and similar exceptions depend on purpose, amount, effect on the market and local law, not on a disclaimer."},
      {t:"Yes, crediting the owner always makes it fair use", why:"Credit is a separate matter. It doesn’t make a use fair or licensed."},
      {t:"Yes, anything under 30 seconds is automatically allowed", why:"There’s no fixed length that is automatically fair; the US Copyright Office says there is no formula."},
      {t:"No, using any part of a film is always illegal", why:"Exceptions such as fair use or fair dealing can allow limited use, for example for criticism or review, depending on the facts."}
    ]},
    {id:"t1u5-l4-x6", type:"order", q:"Put the parts of a full attribution in the TASL order.", items:[
      {t:"The work’s title", why:"T: Title comes first."},
      {t:"The creator’s name", why:"A: Author, named as they ask."},
      {t:"A link to where the work lives", why:"S: Source, so others can find the original."},
      {t:"The licence name and version, linked", why:"L: Licence, such as CC BY 4.0."}
    ]},
    {id:"t1u5-l4-x7", type:"mcq", q:"Ana adds her community garden’s name and dates to a CC BY-SA 4.0 photo to make a poster. What does the licence require when she shares the poster?", options:[
      {t:"Credit the original (TASL), say she adapted it, and share the poster under CC BY-SA or a compatible licence", ok:true, why:"BY requires attribution, adapting should be indicated, and SA requires adaptations to be shared under the same or a compatible licence."},
      {t:"Nothing, because adding text makes it her own work", why:"Adding text creates an adaptation; the original photographer’s rights and the licence conditions still apply."},
      {t:"She may not change it at all", why:"That would be ND. BY-SA allows adaptations."},
      {t:"She must make the poster non-commercial only", why:"BY-SA has no NC condition, so commercial use is allowed (with credit and share-alike)."}
    ]}
   ],
   apply:{intro:"Find, use and credit one openly licensed image correctly, and look at an open textbook’s licence.", tasks:[
     {t:"Find an openly licensed image", how:["Use a search tool with licence filters, such as Openverse (openverse.org) or Wikimedia Commons (commons.wikimedia.org).","Search for something you need, such as “bicycle” or “harvest”.","Open the image’s own page and find its licence. Note whether it is CC0, CC BY, or includes SA, NC or ND."]},
     {t:"Write a TASL attribution for it", how:["Copy the **title**, the **author’s** name as shown, the **source** (the page address) and the **licence** with its version.","Write it as: “Title” by Author is licensed under CC BY 4.0 (linking the title to the source and the licence to its page, if you’re writing online).","If you crop or change it, add what you did."]},
     {t:"Check an open textbook’s licence", how:["Open one of the course’s textbooks (for example, OpenStax’s Workplace Software and Skills).","Find its licence on the book’s details page or near the start of the book.","Write one thing the licence lets you do, and one thing it doesn’t."]}
   ], proof:"One image you could legally reuse, with a correct TASL attribution, plus one sentence each on what an open textbook’s licence allows and forbids."},
   read:[
     {book:"wss", where:"Background reading: Section 6.4 “Adding Visuals and Features to Microsoft PowerPoint Slides”: “Adding Images” (copyright and licensing of stock photos)", note:"A short practical mention only. Note that being a stock photo doesn’t make an image public domain; always check its licence."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u5-l5", title:"Digital wellbeing and safety with others", minutes:50,
   hook:{q:"You open an app to check one thing and look up forty minutes later. What’s a big part of the reason?", options:["Weak willpower","Designs built to hold your attention, like endless feeds and autoplay","A slow phone","Simple boredom"], answer:1, reveal:"**Design**, in large part, and it isn’t a personal failing. Many free apps earn more the longer you look, so features like infinite scroll, autoplay and notifications are tuned to keep you there, and they work on everyone. This lesson shows how to spot those designs and the tricks called dark patterns, add your own stopping points, and stay safe when other people online cause harm."},
   goals:[
     "Recognise attention-grabbing design: infinite scroll, autoplay, notifications and dark patterns",
     "Use the built-in screen-time and focus tools on your devices",
     "Build healthier habits without guilt or shame",
     "Respond to online harassment, cyberbullying and doxxing: stay safe, document, block, report and get support",
     "Support someone else who is being harassed"
   ],
   learn:[
    {h:"Your attention is the product", body:[
      {lead:"If you’ve ever opened an app to check one thing and looked up forty minutes later, that isn’t a personal failing. Many apps are carefully designed to keep you there."},
      "Many free apps earn money from advertising, and advertising earns more when people spend more time looking. So teams test and refine designs that hold attention. None of this is secret, and some of it is genuinely convenient. But knowing the techniques makes them easier to notice and to choose about.",
      {table:[
        ["Design","What it does","Why it holds you"],
        ["[[infinite-scroll|Infinite scroll]]","New posts load as you reach the bottom","There’s no end of the page, so no natural moment to stop"],
        ["[[autoplay|Autoplay]]","The next video starts by itself","Stopping takes an action; carrying on takes none"],
        ["[[notification|Notifications]] and badges","Buzzes, banners and red dots","They interrupt whatever you’re doing and pull you back in"],
        ["Pull to refresh, likes and streaks","Something new might be waiting; don’t break the streak","Unpredictable rewards are hard to walk away from, a bit like a slot machine"]
      ]},
      {fig:'<svg viewBox="0 0 340 348"><defs><marker id="t1u5l5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-rose" x="44" y="10" width="288" height="54" rx="10" stroke-width="2"/><text x="188" y="33" text-anchor="middle">1. A notification arrives</text><text class="s" x="188" y="52" text-anchor="middle">a buzz, a banner or a red dot</text><path class="d-ink" d="M188 64 L188 84" stroke-width="2" marker-end="url(#t1u5l5a)"/><rect class="d-gold" x="44" y="88" width="288" height="54" rx="10" stroke-width="2"/><text x="188" y="111" text-anchor="middle">2. You open the app</text><text class="s" x="188" y="130" text-anchor="middle">maybe something new is there</text><path class="d-ink" d="M188 142 L188 162" stroke-width="2" marker-end="url(#t1u5l5a)"/><rect class="d-lup" x="44" y="166" width="288" height="72" rx="10" stroke-width="2"/><text x="188" y="189" text-anchor="middle">3. The feed never ends</text><text class="s" x="188" y="208" text-anchor="middle">infinite scroll and autoplay:</text><text class="s" x="188" y="226" text-anchor="middle">no natural place to stop</text><path class="d-ink" d="M188 238 L188 258" stroke-width="2" marker-end="url(#t1u5l5a)"/><rect class="d-panel" x="44" y="262" width="288" height="54" rx="10" stroke-width="2"/><text x="188" y="285" text-anchor="middle">4. You finally put it down</text><text class="s" x="188" y="304" text-anchor="middle">likes and badges build up again</text><path class="d-ink" d="M44 289 L18 289 L18 37 L40 37" stroke-width="2" marker-end="url(#t1u5l5a)"/><text class="s" x="188" y="338" text-anchor="middle">…and the loop starts again</text></svg>', alt:"A loop of four steps: a notification arrives (a buzz, banner or red dot); you open the app hoping something new is there; the feed never ends because of infinite scroll and autoplay, so there is no natural place to stop; you finally put it down while likes and badges build up again; an arrow leads back to the first step.", cap:"The attention loop. Each step is designed; each is also a place where you can add a stopping point."},
      "One result many people recognise is [[doomscrolling]]: scrolling on and on through bad or upsetting news, feeling worse but finding it hard to stop.",
      {key:"These designs work on everyone. Noticing them isn’t about blaming yourself; it’s about putting a few stopping points back in."}
    ]},
    {h:"Dark patterns: designs that trick", body:[
      "Some designs go further than holding attention. A [[dark-pattern|dark pattern]] (also called a deceptive design pattern) is a design that tricks or pressures you into choices you wouldn’t otherwise make. The US FTC’s 2022 staff report describes them as design practices that trick or manipulate users, and groups them into designs that create false beliefs, hide important information, lead to unwanted charges, and obscure or undermine privacy choices.",
      {table:[
        ["Pattern","Example"],
        ["Hard to cancel","Signing up takes one tap; cancelling needs a phone call during office hours"],
        ["Confirmshaming","“No thanks, I don’t like saving money”"],
        ["Nagging","Asking again and again, with “Not now” instead of a real “No”"],
        ["Pre-ticked boxes","Marketing or add-ons already selected for you"],
        ["Hidden costs","Fees appear only at the last step of checkout"],
        ["False urgency","A countdown timer that resets, or “Only 1 left!” that is never true"],
        ["Unequal choices","A big bright “Accept all” and a small grey “Manage settings”"]
      ]},
      "Laws are catching up. In the EU, the **Digital Services Act** (Article 25) says online platforms must not design their interfaces in ways that deceive or manipulate users, and names examples such as making cancelling harder than subscribing and repeatedly asking for a choice already made. Regulators elsewhere, including the FTC, have taken action against such designs too.",
      {tip:"When a screen makes you feel rushed, guilty or confused, slow down. That feeling is often the design working. Look for the plain option, and take a screenshot if a company makes cancelling unreasonably hard: it helps if you need to complain."}
    ]},
    {h:"Screen-time tools you already have", body:[
      "Every major system has built-in tools to see how you use your device and to add limits. The names change from version to version, so if a menu doesn’t match exactly, search the Settings app for “screen time”, “wellbeing” or “focus”.",
      {table:[
        ["Device","Tool","What it offers"],
        ["Android","**Digital Wellbeing** (in Settings; often listed as **Digital Wellbeing & parental controls**)","Screen time, times opened and notifications per app; **App timers**; **Bedtime mode** (can turn the screen grey and silence the phone); **Focus mode** to pause chosen apps. Steps vary by phone maker."],
        ["iPhone, iPad and Mac","**Screen Time** (iPhone: **Settings → Screen Time**; Mac: **System Settings → Screen Time**)","Weekly reports; daily limits for apps or categories; scheduled time away from the screen; apps that are always allowed. Feature names vary by version (for example Downtime and App Limits; iOS 27 introduced Screen Time Schedules and Time Allowances)."],
        ["Windows 11","**Focus** and **Do not disturb** (**Settings → System**); **Microsoft Family Safety** for families","Timed focus sessions that silence notifications. Family Safety (set up at account.microsoft.com/family) sets screen-time limits and app and website rules for family members."],
        ["ChromeOS","**Focus** (select the time at the bottom right → **Focus**); **Google Family Link** for children","A focus timer with Do Not Disturb. Family Link manages children’s accounts."]
      ]},
      "The single most useful tool is often the plainest: the per-app **notification settings** on every device. Allow notifications from people and things that genuinely need you; switch off the rest, or let them arrive silently."
    ]},
    {h:"Healthy habits, without the guilt", body:[
      "There is no single “right” number of hours. A video call with a grandparent, an online course, and an hour of upsetting news aren’t the same, even though they all count as [[screen-time|screen time]]. A more useful question than “how long?” is: **“Did that time leave me better or worse off?”**",
      {list:[
        "**Notifications for people, not apps.** Keep messages from people you care about; silence promotions, badges and “you might like” alerts.",
        "**Add stopping points.** Turn off autoplay where the app allows it; set an app timer as a gentle nudge rather than a punishment.",
        "**Move the most tempting apps** off your home screen, or into a folder, so opening them is a choice.",
        "**Make the screen less shiny.** A greyscale (black and white) display, available in Android’s Bedtime mode and in iPhone accessibility settings, can make feeds less appealing for some people.",
        "**Protect sleep.** Charge your phone away from your bed if you can, and use bedtime or scheduled downtime features.",
        "**Decide before you open.** “I’m checking the bus time” is easier to stop after than “just a quick look”."
      ]},
      {ex:"Oluwaseun’s weekly report shows 5 hours a day, and he feels bad about it. Looking closer: 2 hours were video calls with family abroad and study videos, which he values. 2 hours were short videos late at night, after which he slept badly. He keeps the first, sets a 20-minute app timer and Bedtime mode for the second, and turns off autoplay. No guilt, one change at a time.", label:"Worked example: looking at what, not just how long"},
      {tip:"If screen use is tangled up with feeling low, anxious or isolated, that deserves care in its own right. Talking to someone you trust or a health professional is a strong step, not a weak one."}
    ]},
    {h:"Harassment, cyberbullying and doxxing", body:[
      "Online spaces also bring other people, and sometimes people cause harm. Knowing the words helps you name what’s happening and get the right help.",
      {table:[
        ["Term","What it is","Example"],
        ["Online harassment","Repeated or severe unwanted contact meant to intimidate, threaten or upset","Abusive messages from new accounts after each block"],
        ["[[cyberbullying|Cyberbullying]]","Bullying using phones, messages, games or social media; often among people who know each other","A group chat that mocks one classmate, or an embarrassing edited photo shared at work"],
        ["[[doxxing|Doxxing]]","Gathering someone’s personal information and publishing it to harm them","Posting a person’s home address and workplace after an online argument"],
        ["Impersonation","Pretending to be someone online","A fake profile using Mei’s photos, messaging her friends"]
      ]},
      "None of this is the target’s fault. It isn’t caused by “posting too much” or “being too sensitive”, and you don’t have to handle it alone.",
      {fig:'<svg viewBox="0 0 340 422"><defs><marker id="t1u5l5b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-rose" x="8" y="8" width="324" height="52" rx="10" stroke-width="2"/><text x="170" y="30" text-anchor="middle">1. In danger? Get help now</text><text class="s" x="170" y="49" text-anchor="middle">call your local emergency number</text><path class="d-ink" d="M170 60 L170 78" stroke-width="2" marker-end="url(#t1u5l5b)"/><rect class="d-gold" x="8" y="82" width="324" height="52" rx="10" stroke-width="2"/><text x="170" y="104" text-anchor="middle">2. Don’t reply or retaliate</text><text class="s" x="170" y="123" text-anchor="middle">and don’t forward the messages</text><path class="d-ink" d="M170 134 L170 152" stroke-width="2" marker-end="url(#t1u5l5b)"/><rect class="d-lup" x="8" y="156" width="324" height="52" rx="10" stroke-width="2"/><text x="170" y="178" text-anchor="middle">3. Document it</text><text class="s" x="170" y="197" text-anchor="middle">screenshots, links, usernames, dates</text><path class="d-ink" d="M170 208 L170 226" stroke-width="2" marker-end="url(#t1u5l5b)"/><rect class="d-lup" x="8" y="230" width="324" height="52" rx="10" stroke-width="2"/><text x="170" y="252" text-anchor="middle">4. Block, mute or restrict</text><text class="s" x="170" y="271" text-anchor="middle">after you’ve saved the evidence</text><path class="d-ink" d="M170 282 L170 300" stroke-width="2" marker-end="url(#t1u5l5b)"/><rect class="d-lup" x="8" y="304" width="324" height="52" rx="10" stroke-width="2"/><text x="170" y="326" text-anchor="middle">5. Report it</text><text class="s" x="170" y="345" text-anchor="middle">platform; police if threats or stalking</text><path class="d-ink" d="M170 356 L170 374" stroke-width="2" marker-end="url(#t1u5l5b)"/><rect class="d-sage" x="8" y="378" width="324" height="36" rx="10" stroke-width="2"/><text x="170" y="401" text-anchor="middle">6. Get support from people you trust</text></svg>', alt:"Six steps for responding to online harassment: 1, if you are in danger, call your local emergency number; 2, don’t reply, retaliate or forward the messages; 3, document it with screenshots, links, usernames and dates; 4, block, mute or restrict after saving the evidence; 5, report it to the platform, and to police if there are threats or stalking; 6, get support from people you trust.", cap:"Responding to harassment. Safety comes first; evidence comes before blocking."}
    ]},
    {h:"What to do: stay safe, document, block, report, get support", body:[
      "Official guidance from several countries agrees on the same core steps. The US government’s StopBullying.gov advises not responding to or forwarding cyberbullying messages, keeping evidence, blocking the person and reporting to the platform, and contacting police when there are threats of violence, stalking, hate crimes or sexual content involving children. Australia’s eSafety Commissioner and Police Scotland give similar advice.",
      {list:[
        "**Safety first.** If you’re in immediate danger, or someone has posted your address with threats, contact your local emergency number.",
        "**Document.** Take screenshots that show the content, the account name and the date; copy the web addresses; note when and where you found each item. Act quickly, because content may be deleted, but only collect evidence when it’s safe for you.",
        "**Block, mute or restrict.** [[blocking|Blocking]] stops the account contacting you. Muting or restricting hides it without the other person being told, which can feel safer. Do it after saving evidence, as some platforms hide content once you block. You can report before or after blocking; official guides differ on the order.",
        "**Report.** [[reporting-content|Reporting]] tells the platform the content breaks its rules. Use the report option on the post, message or profile. Workplaces, schools and community groups have their own procedures too.",
        "**Get support.** Tell someone you trust. Many countries have official online-safety services and helplines; search your government’s website for online abuse support."
      ]},
      {h:"If you’ve been doxxed"},
      "The US Department of Homeland Security’s guidance suggests asking the platform to take the content down, keeping evidence, reporting threats to police, and reducing what’s exposed: removing your address, birth date and phone number from profiles, asking people-search sites to remove your data (Lesson 1), turning off location sharing and securing accounts with two-step verification (see {{mfa}}).",
      {h:"Supporting someone else"},
      {list:[
        "Believe them, and ask what would help. Don’t take over.",
        "Don’t share, like or reply to the harmful content, even to defend them; it spreads it further.",
        "Offer practical help: collecting screenshots, finding the report button, going with them to talk to a manager, teacher or police.",
        "Check in again a few days later."
      ]},
      {key:"Safety, evidence, block, report, support. And remember: the person causing harm is responsible for it, not the person receiving it."}
    ]}
   ],
   try:[
    {id:"t1u5-l5-x1", type:"sort", q:"Sort each feature: does it mainly help you stop and choose, or is it mainly designed to keep you going?", buckets:["Helps you stop and choose","Designed to keep you going"], items:[
      {t:"The next episode starts automatically after a 5-second countdown", b:1, why:"Autoplay makes carrying on the default; stopping requires action."},
      {t:"An app timer that greys out an app after 30 minutes", b:0, why:"A timer adds a stopping point you chose."},
      {t:"A feed that loads more posts every time you reach the bottom", b:1, why:"Infinite scroll removes the natural end of the page."},
      {t:"Bedtime mode that silences notifications at 11 pm", b:0, why:"It protects time you’ve chosen for sleep."},
      {t:"A red badge showing 47 unread items", b:1, why:"Badges create a feeling of unfinished business that pulls you back."},
      {t:"A weekly screen-time report", b:0, why:"It gives you information to make your own choices."}
    ]},
    {id:"t1u5-l5-x2", type:"match", q:"Match each dark pattern to an example.", pairs:[
      ["Confirmshaming","The decline button says “No thanks, I prefer paying full price”","It uses guilt or shame to push you towards the option the company wants."],
      ["Hard to cancel","Joining takes one click, but leaving needs a phone call in office hours","Making cancelling harder than subscribing is named in the EU’s Digital Services Act."],
      ["Hidden costs","A booking fee appears only on the final payment screen","Important information is delayed until you’ve already invested effort."],
      ["Nagging","An app asks for your contacts every day, offering only “Not now”","Repeated requests wear you down; there’s no way to say a final no."],
      ["False urgency","A “sale ends in 10:00” timer that restarts every time you reload","Fake deadlines push you to decide before you’ve thought it through."]
    ]},
    {id:"t1u5-l5-x3", type:"mcq", q:"After an online argument, someone posts Fatima’s home address and writes that people should “pay her a visit”. What should she do first?", options:[
      {t:"Treat it as a safety threat: contact local police (emergency number if she feels in immediate danger), and save screenshots with the date and link", ok:true, why:"An address combined with a threat is a safety issue first. Evidence helps police and the platform act."},
      {t:"Reply publicly to correct the record", why:"Replying can escalate things and draw more attention to the post. Safety and evidence come first."},
      {t:"Block the account straight away, then delete her own profile", why:"Blocking first can hide the evidence she needs, and the threat to her physical safety still needs addressing."},
      {t:"Ignore it; online threats are never serious", why:"Threats that include someone’s address must be taken seriously. Official guidance says to report threats of violence to police."}
    ]},
    {id:"t1u5-l5-x4", type:"order", q:"Kenji is receiving abusive messages from an account in a gaming community. He is not in physical danger. Put his steps in the order this lesson recommends.", items:[
      {t:"Don’t reply or forward the messages", why:"Not engaging avoids escalation and keeps the situation calmer."},
      {t:"Take screenshots showing the messages, the account name and the dates", why:"Evidence must be saved before anything is blocked, reported or deleted, because content can disappear."},
      {t:"Report the account with the platform’s report tool, and block or mute it", why:"With evidence safe, he can report and cut off contact. Official guides differ on which of these comes first, and either works; his screenshots support the report."},
      {t:"Tell a friend or someone he trusts how it’s affecting him", why:"Support matters, and he doesn’t have to deal with it alone. (He can reach out earlier too; this lesson lists it as the last step of the routine.)"}
    ]},
    {id:"t1u5-l5-x5", type:"spot", q:"Ana tries to cancel a streaming subscription. Tap the parts of this screen that are dark patterns.", ask:"dark patterns", parts:[
      "Cancel your plan? ",
      {t:"Your price is locked in until 30 June.", flag:false, why:"Plain, useful information about her current price."},
      " ",
      {t:"[ Keep my plan ] (large, bright button)", flag:true, why:"Making the option the company wants big and bright, while the other is hard to see, is an unequal-choice pattern."},
      " ",
      {t:"(small grey link) I don’t care about my favourite shows, cancel anyway", flag:true, why:"Confirmshaming: guilt-laden wording on the option she actually wants."},
      " ",
      {t:"You can restart at any time.", flag:false, why:"A fair, true statement that helps her decide."},
      " ",
      {t:"To finish cancelling, call us Monday–Friday, 9–5.", flag:true, why:"Making cancelling harder than signing up online is a classic dark pattern, named in the EU’s Digital Services Act."}
    ]},
    {id:"t1u5-l5-x6", type:"mcq", q:"Priya wants her Android phone to turn grey and go quiet at 11 pm so she stops scrolling in bed. Which built-in feature fits best?", options:[
      {t:"Bedtime mode in Digital Wellbeing", ok:true, why:"Bedtime mode runs on a schedule and can turn the screen grey and silence the phone."},
      {t:"Incognito mode in Chrome", why:"Incognito only stops the browser keeping history from a session; it doesn’t change the screen or silence anything."},
      {t:"Google Play Protect", why:"Play Protect scans for harmful apps; it’s a security tool, not a wellbeing one."},
      {t:"Deleting her advertising ID", why:"That affects ad personalisation, not her screen or notifications at night."}
    ]},
    {id:"t1u5-l5-x7", type:"mcq", q:"Sione’s friend says she’s being mocked in a group chat. What’s the most helpful first response?", options:[
      {t:"Listen, believe her, and ask what would help, offering to help save evidence and use the report tools", ok:true, why:"Support starts with believing and letting her lead; practical help with evidence and reporting comes next."},
      {t:"Post in the chat defending her loudly", why:"Well meant, but replying can escalate things and spread the content further. Ask her first."},
      {t:"Tell her to leave the internet for good", why:"That punishes the person being harmed. She can choose to step back, but it shouldn’t be the price of safety."},
      {t:"Forward the messages to everyone so people see what’s happening", why:"Sharing the content spreads the harm further. Evidence should be saved, not circulated."}
    ]}
   ],
   apply:{intro:"Look at how your devices pull at your attention, and get ready in case you ever need to deal with harassment. Be kind to yourself: this is a check, not a judgement.", tasks:[
     {t:"Look at your screen-time report", how:{
       win:["Windows doesn’t show a detailed personal screen-time report. Use **Settings → System → Focus** to try a focus session, and **Settings → System → Notifications** to review which apps can interrupt you.","For family members, Microsoft Family Safety (account.microsoft.com/family) shows activity and sets limits."],
       mac:["**System Settings → Screen Time → App & Website Activity** (turn it on if needed) shows time per app.","Note one app you value and one you’d like to use less."],
       chromeos:["Select the time at the bottom right, then **Focus**, and try a 25-minute session.","Review notifications in **Settings → Apps → Notifications** (wording varies by version)."],
       phone:["iPhone: **Settings → Screen Time**. Look at the week’s total, most-used apps and notifications.","Android: **Settings → Digital Wellbeing** (often **Digital Wellbeing & parental controls**; names vary by phone maker). Look at screen time, times opened and notifications."]
     }},
     {t:"Make one small change", how:["Pick the single app that most often leaves you feeling worse.","Do one thing: turn off its notifications, set an app timer, turn off autoplay in its settings, or move it off your home screen.","Check in after a week: did it help?"]},
     {t:"Find your platforms’ safety tools", how:["In two apps you use most for messaging or social media, find how to **block**, **mute** (or restrict) and **report** an account. Usually it’s in the menu (⋮ or …) on a profile or message.","Search your government’s website for its official online safety or online abuse service, and note its name.","Practise taking a screenshot on your phone and your computer, so you could save evidence quickly if ever needed."]}
   ], proof:"You know your weekly screen-time pattern without judging it, have made one small change, and know where the block, mute and report tools are in your two most-used apps, plus where to get official help."},
   read:[
     {book:"wss", where:"Background reading: Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Posting on Social Media”", note:"Suggests questions to ask yourself before posting. Neither course textbook covers digital wellbeing or harassment in depth; use the official guidance linked in the Codex entries."}
   ]
  }
  ],
  checkpoint:["t1u5-q03","t1u5-q07","t1u5-q11","t1u5-q15","t1u5-q18","t1u5-q21","t1u5-q25","t1u5-q29","t1u5-q33","t1u5-q36","t1u5-q40","t1u5-q44"],
  codex:[
   {id:"digital-footprint", title:"Digital footprint", aka:["online footprint","data trail","active footprint","passive footprint"], tags:["privacy","basics"],
    summary:"The record of what you do online, both what you share on purpose and what is collected or guessed about you.",
    levels:{
     starter:[
      "Your **digital footprint** is the trail you leave online. Like footprints on a beach, some you make on purpose (writing your name in the sand) and many you leave without noticing (every step you take).",
      {list:[
        "**Active footprint:** what you choose to share: posts, reviews, photos, comments, forms.",
        "**Passive footprint:** what’s recorded as a side effect: pages visited, location, device details, who you message and when."
      ]},
      "On top of both, companies make **guesses** (inferences) about you, such as “probably a parent” or “interested in running”. You usually can’t see these guesses, and they can be wrong.",
      "Your footprint matters because it can be searched, sold, leaked in a breach, used to target ads and scams, or seen by an employer or someone you’d rather not find you.",
      {key:"You can’t erase your footprint, but you can make it smaller and choose more of what goes into it."}
     ],
     builder:[
      {table:[
        ["Layer","Examples","How to shrink it"],
        ["Provided","Profiles, posts, sign-up forms","Share less; review old posts and profiles; use privacy settings for audience"],
        ["Observed","Browsing, app use, location, device IDs","Browser tracking protection, location “while using”, fewer permissions, delete advertising ID"],
        ["Inferred","Interests, life events, “segments”","Turn off ad personalisation; ask for your data under privacy laws"],
        ["Held by others","Data brokers, people-search sites, friends’ posts, public records","Opt-out requests; ask friends before tagging; data-protection rights"]
      ]},
      "A quick footprint audit: search your name (in a private window) with and without your town, and search your email address and phone number. Check image results too. Then run the privacy checkup in your main accounts (see {{privacy-settings}}).",
      "Old accounts are a hidden part of your footprint. A forum or shop you used years ago still holds your details, and could be breached (see {{data-breach}}). Closing accounts you no longer use, after downloading anything you want to keep, reduces that risk.",
      "Children have footprints before they can choose: photos and stories shared by parents, schools and clubs. Asking before posting about others, especially children, is a simple courtesy that protects them.",
      "Your footprint also grows through other people: friends tag you in photos, colleagues mention you, and organisations publish lists that include your name. You can ask people not to tag you, and most platforms let you review tags before they appear on your profile."
     ],
     pro:[
      "Privacy professionals separate **identifiers** (name, email, phone, device and advertising IDs, IP addresses, cookie IDs) from **attributes** and **inferences**. Linking happens when two datasets share an identifier, or when enough quasi-identifiers (postcode, birth date, gender) combine to single someone out. Removing names alone rarely makes data anonymous.",
      "**Identity resolution** services specialise in linking a person’s email, phone, devices and household into one profile across companies, which is why data shared with one firm can reappear elsewhere.",
      "Inferences are often more sensitive than raw data: health conditions inferred from purchases, or location history revealing religion or a medical clinic visit. Under the GDPR, inferences about an identifiable person are themselves personal data, and access requests can cover them, though organisations sometimes resist.",
      {tip:"For people at higher risk (survivors of abuse, journalists, public-facing workers), the priorities are: location exposure, people-search listings, photo metadata, and account security. Specialist support organisations can help plan changes safely."},
      "Shrinking a footprint is about **reducing collection** (settings, fewer apps and accounts), **reducing retention** (auto-delete, closing accounts) and **reducing linkage** (separate emails for different purposes, limiting sign-in with large accounts, blocking third-party tracking).",
      "Measuring progress is hard, so focus on high-value changes: location history off or short, people-search opt-outs done, old accounts closed, and audiences on social profiles set deliberately."
     ]
    },
    related:["tracking-data-brokers","privacy-settings","location-privacy","data-protection-laws"],
    read:[{book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Internet and Web Privacy” and “Posting on Social Media”"}],
    sources:[{t:"FTC Consumer Advice: What To Know About People Search Sites That Sell Your Information", url:"https://www.consumer.ftc.gov/articles/what-know-about-people-search-sites-sell-your-information"},{t:"European Commission: Information for individuals (data protection)", url:"https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en"}], checked:"2026-11"},

   {id:"tracking-data-brokers", title:"Online tracking and data brokers", aka:["third-party cookies","tracking pixels","fingerprinting","data brokers","people-search sites"], tags:["privacy","web"],
    summary:"How trackers link your activity across sites and apps, what browsers do about it today, and how data brokers trade the results.",
    levels:{
     starter:[
      "A **tracker** records what you do so it can be linked up later, often across many websites. The main kinds, in plain words:",
      {list:[
        "**Third-party cookies:** a note stored in your browser by an ad company whose code sits on many sites, so it recognises you on each.",
        "**Tracking pixels:** tiny hidden images that report when a page or email is opened.",
        "**Fingerprinting:** recognising your device from many small details it reveals, like screen size and fonts. Nothing is stored, so clearing cookies doesn’t remove it.",
        "**Advertising IDs:** a phone-wide ID apps can use to link your activity."
      ]},
      "A **data broker** is a company that collects information about people from many sources and sells or shares it. People-search sites are one kind. You probably never signed up with them.",
      {key:"Blocking third-party cookies helps, but it’s one door, not the whole house."}
     ],
     builder:[
      {h:"Browsers and third-party cookies (late 2026)"},
      {table:[
        ["Browser","Default"],
        ["Safari","Blocks all third-party cookies (since 2020)"],
        ["Firefox","Standard Enhanced Tracking Protection: blocks known cross-site tracking cookies and isolates the rest with Total Cookie Protection"],
        ["Chrome","Allows them in normal windows; blocks them in Incognito; you can block them in Settings → Privacy and security → Third-party cookies"],
        ["Edge","Tracking prevention “Balanced” by default; “Strict” blocks more"]
      ]},
      "Google announced in 2024 that it would no longer phase out third-party cookies in Chrome, said in April 2025 that it wouldn’t add a new standalone prompt, and in October 2025 retired most of its Privacy Sandbox replacement technologies. So in Chrome, third-party cookies remain a working tracking tool unless you block them.",
      {h:"Data brokers"},
      "The US FTC explains that brokers compile data from other brokers, public social media and government records (property, voter, court records) and sell reports. Most people-search sites offer free opt-outs, but the FTC warns that listings can reappear, so check again periodically. Some laws now help: California’s **DROP** platform lets California residents ask registered data brokers to delete their data in one request.",
      {warn:"Be wary of paid “data removal” services that pressure you. Many opt-outs are free to do yourself, and you should never need to send more ID than the original listing already shows."}
     ],
     pro:[
      "**Cookie partitioning** (Firefox’s Total Cookie Protection, and CHIPS in Chromium browsers) keys a third-party cookie to the top-level site, so an embedded service gets a separate jar on each site and can’t link them. Safari’s Intelligent Tracking Prevention goes further, blocking third-party cookies and limiting some first-party storage set by script.",
      "Trackers have adapted: **first-party tracking** via code served from the site’s own domain (or CNAME-cloaked subdomains), **server-side tagging**, **link decoration** (identifiers added to URLs, which some browsers now strip), and **email-based identifiers** created from a hashed email address when you sign in or subscribe. These survive third-party cookie blocking.",
      "**Fingerprinting** uses high-entropy signals: canvas and WebGL rendering differences, audio processing, fonts, screen and time zone, plus the IP address. Browsers counter it by reducing exposed detail, adding noise, or presenting a standardised configuration.",
      "Real-time bidding shares information about the user and page with many bidders in each ad auction, which regulators in Europe have criticised as hard to reconcile with data-protection principles.",
      {tip:"Practical stack for most people: a browser with strong default protection (or Chrome with third-party cookies blocked), fewer browser extensions, signing out of large accounts when you don’t need them, deleting the mobile advertising ID, and periodic people-search opt-outs."}
     ]
    },
    related:["digital-footprint","ad-personalisation","cookies-cache","private-browsing"],
    read:[{book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Cookies”"}],
    sources:[{t:"Chrome Help: Delete, allow and manage cookies in Chrome", url:"https://support.google.com/chrome/answer/95647?hl=en"},{t:"Privacy Sandbox: Update on Plans for Privacy Sandbox Technologies (October 2025)", url:"https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies"},{t:"WebKit: Full Third-Party Cookie Blocking and More", url:"https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/"}], checked:"2026-11"},

   {id:"ad-personalisation", title:"Targeted ads and ad personalisation settings", aka:["targeted advertising","personalised ads","advertising ID","App Tracking Transparency","My Ad Center"], tags:["privacy","settings"],
    summary:"How behavioural advertising works and where to switch off ad personalisation on accounts and devices.",
    levels:{
     starter:[
      "**Targeted advertising** means choosing which ad to show you using information about you. **Contextual** ads match the page you’re on (tents on a camping article). **Behavioural** or personalised ads use your profile: what you looked at, where you’ve been, what you’re guessed to like.",
      "Most big platforms and devices let you turn ad personalisation off. Two things to expect:",
      {list:[
        "You’ll see **about the same number of ads**. They just won’t be chosen from your profile.",
        "It changes how ads are chosen; it doesn’t stop all data collection."
      ]},
      "Places to look: your Google Account’s **My Ad Center**, iPhone’s **Tracking** and **Apple Advertising** settings, Android’s **Ads** settings (to delete the advertising ID), Windows’ **advertising ID** setting, and Meta’s **Ad preferences** in Accounts Center."
     ],
     builder:[
      {table:[
        ["Where","Setting"],
        ["Google Account","myadcenter.google.com: personalised ads on/off; limit sensitive topics"],
        ["iPhone/iPad","Settings → Privacy & Security → Tracking: Allow Apps to Request to Track off. Apple Advertising → Personalized Ads off"],
        ["Android","Settings → Security & privacy → More privacy settings → Ads, or Settings → Google → Ads (varies): Delete advertising ID"],
        ["Windows 11","Settings → Privacy & security → Recommendations & offers (older: General): advertising ID setting off"],
        ["Mac","System Settings → Privacy & Security → Apple Advertising → Personalized Ads off"],
        ["Meta","Accounts Center → Ad preferences"]
      ]},
      "**App Tracking Transparency** on Apple devices (since iOS 14.5) requires apps to ask before tracking you across other companies’ apps and websites. Apple defines tracking as linking data from the app with data from other companies for targeted ads or measurement, or sharing it with data brokers. Turning off **Allow Apps to Request to Track** means apps are automatically told no.",
      "Deleting the Android advertising ID (available on recent versions) gives apps a string of zeros instead of an ID. Resetting gives a new random ID, breaking the link with the old profile.",
      "Microsoft notes that turning off its advertising ID setting won’t reduce the number of ads you see.",
      "Expect to repeat these settings on each device and account: a phone, a tablet and a laptop can each have their own advertising settings."
     ],
     pro:[
      "Ad personalisation settings act on **one company’s use** of data for ad selection. They don’t necessarily stop collection for measurement, fraud prevention or product improvement, and they don’t govern other companies’ trackers on the sites you visit. Combine them with browser tracking protection and permission reviews.",
      "Platforms now allow advertisers to upload **customer lists** (hashed emails or phone numbers) to find you on their platforms. Under the GDPR you can object to direct marketing, including related profiling, and the organisation must stop. In California, the CCPA gives a right to opt out of sale or **sharing** for cross-context behavioural advertising, and businesses must honour an opt-out preference signal such as **Global Privacy Control**, which some browsers and extensions can send.",
      "**Sensitive categories** (health, religion, sexuality, finances) are restricted in many ad policies and laws, but inference can still approximate them. My Ad Center lets you limit some sensitive ad topics.",
      {tip:"After turning off personalisation, ads based on what you’re viewing (contextual) will continue. That’s expected, and generally less privacy-invasive."},
      "For accounts shared by a family (a smart TV, a shared tablet), check ad and history settings on the device itself as well as on each person’s account.",
      "Resetting rather than deleting an ID is a weaker step, since a new ID can be relinked through sign-ins."
     ]
    },
    related:["tracking-data-brokers","privacy-settings","digital-footprint"],
    sources:[{t:"My Ad Center Help: Customize your ads experience", url:"https://support.google.com/My-Ad-Center-Help/answer/12155451?hl=en"},{t:"Apple Support: Control personalised ads on the App Store, Apple News and Stocks", url:"https://support.apple.com/en-gb/105131"},{t:"Microsoft Support: General privacy settings in Windows", url:"https://support.microsoft.com/windows/7c7f6a09-cebd-5589-c376-7f505e5bf65a"}], checked:"2026-11"},

   {id:"privacy-settings", title:"Privacy checkups in your main accounts", aka:["Privacy Checkup","Safety Check","privacy dashboard","Accounts Center","App Privacy Report"], tags:["privacy","settings","accounts"],
    summary:"Where to find the guided privacy reviews in Google, Apple, Microsoft and Meta accounts, and what to look at.",
    levels:{
     starter:[
      "Big accounts hold the most data about you, and each has a guided review: a **privacy checkup**. Think of it as a once-a-year walk through the house checking which doors are locked.",
      {list:[
        "**Google:** Privacy Checkup, from myaccount.google.com → Data & privacy.",
        "**Apple:** Safety Check on iPhone (Settings → Privacy & Security), and App Privacy Report in the same menu.",
        "**Microsoft:** the privacy dashboard at account.microsoft.com/privacy.",
        "**Meta:** Privacy Checkup in Facebook’s Settings & privacy, and Accounts Center for settings across Facebook and Instagram."
      ]},
      "In each, look at: what activity is saved, who can see your profile and posts, which apps are connected, and ad settings. Start with your main email account.",
      {key:"Twenty minutes in the right places beats hours of worrying."}
     ],
     builder:[
      {h:"Google"},
      "Privacy Checkup walks through activity controls (such as Web & App Activity and YouTube History), auto-delete options, what others can see on your profile, and ad personalisation in My Ad Center. Pausing a history type stops new saving; deleting removes past items.",
      {h:"Apple"},
      "**Safety Check** (iOS 16 or later, with two-factor authentication on the Apple Account) has **Manage Sharing & Access**, to review people and apps one at a time, and **Emergency Reset**, which immediately stops sharing with all people and apps. **App Privacy Report** shows how often apps accessed location, photos, camera, microphone and contacts. **privacy.apple.com** lets you get a copy of your data.",
      {h:"Microsoft"},
      "The privacy dashboard shows browsing (Edge), search (Bing), location, and app and service activity linked to your Microsoft account; you can clear each. Ad settings are linked from the same page.",
      {h:"Meta"},
      "Facebook’s Privacy Checkup covers who can see what you share, account security, how people can find you, and data settings for apps you logged into with Facebook. Accounts Center holds settings shared across Meta apps, including ad preferences and downloading your information.",
      {tip:"Menus change. If a path doesn’t match, search the provider’s help pages for “privacy checkup”."},
      "A good rhythm: a full review once or twice a year, and a quick look after any new phone, new app with broad access, or change in who you live with."
     ],
     pro:[
      "Order of priority for a privacy review: (1) main email and identity accounts (Google, Apple, Microsoft), since they connect to everything; (2) accounts with location or photos; (3) social media visibility; (4) connected third-party apps and “Sign in with” grants, which can keep reading data long after you stopped using them; (5) ad settings.",
      "**Connected apps** deserve special attention: an app granted access to your contacts, calendar, email or drive via OAuth keeps that access until revoked. Each provider lists these under security or connected apps.",
      "**Auto-delete** reduces retention without losing convenience entirely. Shorter periods reduce what a breach or a person with access to your account could see, at the cost of less personalisation.",
      "After stopping all sharing, Emergency Reset walks you through reviewing the devices signed in to your Apple Account, the phone numbers used to verify you, your Apple Account password and your emergency contacts. Apple designed it for people whose safety is at risk from someone with past access. If you’re in that position, consider the safety impact of changes being noticed, and contact a specialist support service.",
      "For families, review child accounts too: Google Family Link, Apple Family Sharing and Screen Time, and Microsoft Family Safety each include privacy-related controls.",
      "Keep a short private note of what you changed and when, so you can undo something that broke a feature you need."
     ]
    },
    related:["ad-personalisation","location-privacy","digital-footprint","app-permissions"],
    sources:[{t:"Google Account Help: Take a Privacy Checkup", url:"https://support.google.com/accounts/answer/12629483"},{t:"Apple Personal Safety User Guide: How Safety Check works", url:"https://support.apple.com/guide/personal-safety/how-safety-check-works-ips2aad835e1/web"},{t:"Microsoft Support: View your data on the privacy dashboard", url:"https://support.microsoft.com/windows/03d3e27f-1981-5ff4-ba1c-d6b1031ae433"}], checked:"2026-11"},

   {id:"location-privacy", title:"Location services and photo location data", aka:["location services","GPS","geotag","EXIF","photo metadata"], tags:["privacy","phones","photos"],
    summary:"How devices work out where you are, how to limit which apps know, and how to remove location from photos you share.",
    levels:{
     starter:[
      "Your phone works out where you are using GPS satellites, nearby Wi-Fi and mobile masts. That’s **location services**. Apps you allow can then use it.",
      "Location is the most revealing data: it shows where you live, work, worship and sleep. Three habits protect it:",
      {list:[
        "Give apps location **only while using** them, and **approximate** where possible.",
        "Check **who** can see your location in find-my and family sharing features.",
        "Share photos **without location**: most cameras save GPS coordinates inside each photo (a **geotag**), which travel with the file."
      ]},
      "On iPhone, tap **Options** in the Share sheet and turn off **Location** before sending. On Android, check your camera app’s location setting, and in Google Photos turn off **Share photo locations** for shared albums and links.",
      {key:"Look at the background too: a street sign or house number can reveal as much as GPS."}
     ],
     builder:[
      {table:[
        ["Device","Location settings"],
        ["iPhone","Settings → Privacy & Security → Location Services: per app While Using / Never; Precise Location on/off; System Services for system history"],
        ["Android","Settings → Location → App location permissions: Allow only while using / Don’t allow; Use precise location (names vary)"],
        ["Windows 11","Settings → Privacy & security → Location"],
        ["Mac","System Settings → Privacy & Security → Location Services"],
        ["ChromeOS","Settings → Privacy and security → Privacy controls → Location access (varies)"]
      ]},
      {h:"Photos"},
      "Photo files carry **EXIF metadata**: date, time, camera model and often GPS. To stop saving location on iPhone: **Settings → Privacy & Security → Location Services → Camera → Never**. To remove it from an existing iPhone photo: open it, tap More (…), **Adjust Info → Adjust Location → No Location**. On a Mac in Photos: **Image → Location → Hide Location**. On Windows: right-click → **Properties → Details → Remove Properties and Personal Information**.",
      "Google Photos can’t remove the location your camera saved inside the file, but you can turn off **Share photo locations** for shared albums and conversations. Photos downloaded and sent outside Google Photos keep their original location.",
      "Family and friends’ location sharing (Find My, Google Maps location sharing, Life360-style apps) is often useful for safety. Review the list every few months and remove anyone who no longer needs to see where you are. Also check smartwatches and fitness apps, which may publish routes."
     ],
     pro:[
      "EXIF GPS tags store latitude, longitude, often altitude and direction. Some large social platforms strip EXIF from public copies, but originals sent by email, cloud links, file transfer or some messengers keep it. Don’t rely on a platform’s behaviour; remove location yourself when it matters.",
      "Location can also leak from: Wi-Fi and Bluetooth scanning (used to improve location even when Wi-Fi is “off” on some devices), IP addresses (city-level), mobile networks (the operator always knows which mast you use), fitness apps with public route maps, and smart-home devices.",
      "Phones offer **approximate location** permissions (iOS 14+, Android 12+), which give apps only a general area, not an exact spot. Android can auto-reset permissions for unused apps; iPhone’s App Privacy Report shows actual access frequency.",
      {warn:"Unwanted tracking can involve shared accounts (a partner who knows your Apple or Google password), family-sharing features, or item trackers. Apple’s Safety Check, Google’s location-sharing list in Maps, and Android’s and iPhone’s alerts for unknown trackers travelling with you are the starting points. Changing settings can alert the other person; support services can help plan."},
      "For high-risk people, consider a separate account and device for public activity, and turning off location history entirely.",
      "Location data is often collected by software development kits inside apps and sold onward, which is why limiting app access matters more than any single setting."
     ]
    },
    related:["privacy-settings","digital-footprint","app-permissions","online-harassment"],
    sources:[{t:"Apple Personal Safety User Guide: Manage location metadata in Photos", url:"https://support.apple.com/guide/personal-safety/ips0d7a5df82/web"},{t:"Google Photos Help: Understand, find & edit your photos’ locations", url:"https://support.google.com/photos/answer/6153599?hl=en"}], checked:"2026-11"},

   {id:"private-browsing", title:"Private browsing (Incognito, InPrivate)", aka:["Incognito","InPrivate","private window"], tags:["privacy","web","browsers"],
    summary:"What private browsing modes actually hide, from whom, and when they’re useful.",
    levels:{
     starter:[
      "Every major browser has a private mode: **Incognito** (Chrome), **InPrivate** (Edge), **Private Window** (Firefox, Safari).",
      "Private browsing hides your activity from **other people using the same device**. When you close the window, the browser forgets the history, cookies and site data from that session, and you start signed out.",
      "It does **not** hide your activity from the websites you visit, your employer’s or school’s network, or your internet provider. If you sign in to an account, that account knows it’s you.",
      {ex:"Chrome/Edge (Windows, ChromeOS): Ctrl + Shift + N\nChrome/Safari (Mac): ⌘ + Shift + N\nFirefox: Ctrl + Shift + P (Mac ⌘ + Shift + P)", label:"Shortcuts", mono:true},
      {key:"Private browsing is about the device, not the internet."},
      "It’s handy on shared computers, but it isn’t a shield against tracking or a substitute for good settings."
     ],
     builder:[
      {table:[
        ["Does","Doesn’t"],
        ["Forget history, cookies and site data from the session","Hide you from websites, including sign-ins"],
        ["Start without saved sign-ins","Hide you from the network owner or internet provider"],
        ["Block third-party cookies by default (Chrome Incognito)","Stop fingerprinting"],
        ["Keep a borrowed or shared computer clean","Delete downloads or bookmarks, which are kept"]
      ]},
      "Google’s help page says Incognito doesn’t make you invisible: organisations that manage your network can see activity, and websites (including Google sites) can observe your activity during the session.",
      "Good uses: signing in on a shared or library computer; buying a surprise gift on a family laptop; checking how search results look without your personal history; testing a website while signed out. For hiding the sites you visit from a local network, a trusted VPN is the relevant tool (see {{public-wifi-https}}).",
      "When you close the private window, close **all** private windows: in most browsers they share one session until the last one closes. Remember to sign out of any accounts first on a shared computer.",
      "Private browsing is also useful for troubleshooting. If a site misbehaves in a normal window but works in a private one, the problem is often a stored cookie, cached file or browser extension (see {{cookies-cache}})."
     ],
     pro:[
      "Private modes use a separate, temporary storage partition: cookies, local storage and cache are held in memory or discarded at session end. Some browsers add extra protections in private mode, such as stricter tracker blocking in Firefox private windows and third-party cookie blocking in Chrome Incognito.",
      "Limits worth knowing: extensions may run in private mode if allowed; the operating system may still record DNS lookups, downloads and recent files; and websites can sometimes detect that a private mode is in use. Fingerprinting and IP-based identification work as usual.",
      "Private browsing doesn’t defend against malware or keyloggers on the device, so it isn’t a substitute for a trusted computer when handling sensitive accounts.",
      {tip:"On a shared computer, private browsing plus signing out and closing all private windows is the habit. Don’t let the browser save the password."},
      "For persistent separation (for example, work and personal), browser profiles or containers are more useful than private windows, because each keeps its own cookies and sign-ins over time.",
      "Mobile browsers behave similarly: Safari and Chrome on phones can lock private tabs behind Face ID, Touch ID, a fingerprint or the device passcode in recent versions, which helps if someone else picks up your unlocked phone.",
      "Private browsing doesn’t change your IP address; a VPN or a privacy relay service does that, moving trust to its operator."
     ]
    },
    related:["tracking-data-brokers","privacy-settings","public-wifi-https"],
    sources:[{t:"Chrome Help: How Chrome Incognito keeps your browsing private", url:"https://support.google.com/chrome/answer/9845881?hl=en"},{t:"Chrome Help: Browse in Incognito mode", url:"https://support.google.com/chrome/answer/95464"}], checked:"2026-11"},

   {id:"data-protection-laws", title:"Data-protection laws and your rights", aka:["GDPR","UK GDPR","CCPA","LGPD","privacy law","data subject rights"], tags:["privacy","law","rights"],
    summary:"What data-protection laws do, the GDPR’s rights and lawful bases, and examples of laws around the world. General information, not legal advice.",
    levels:{
     starter:[
      "Data-protection laws set rules for organisations that use **personal data**, and give people rights to check and control that use. The EU’s **GDPR** is the best-known example, and it applies to organisations outside the EU that serve or monitor people in the EU.",
      "Key GDPR rights: to be **informed**; to **access** your data; to have it **corrected**; to have it **erased** in some cases; to **restrict** its use; to **data portability**; to **object** (always respected for direct marketing); and protections about **automated decisions**.",
      "Organisations must reply within **one month** (extendable by two more for complex requests), normally free of charge.",
      "Many other places have their own laws, such as the UK GDPR, California’s CCPA, Brazil’s LGPD, India’s DPDP Act, Japan’s APPI, South Africa’s POPIA and Kenya’s Data Protection Act.",
      {key:"This is general information, not legal advice. Your national data-protection authority explains what applies to you."}
     ],
     builder:[
      {h:"Lawful bases"},
      "Under the GDPR every use of personal data needs a lawful basis: consent, contract, legal obligation, vital interests, public task, or legitimate interests. Consent must be freely given, specific, informed and unambiguous, and withdrawing it must be as easy as giving it.",
      {h:"Limits on rights"},
      "Erasure isn’t absolute: data needed for legal obligations, legal claims, public health, research or freedom of expression can be kept. Objections to most processing are balanced against the organisation’s reasons; objections to direct marketing must be followed.",
      {h:"If an organisation won’t comply"},
      "It must give reasons and tell you about your right to complain. You can complain to your national Data Protection Authority, go to court, or have a qualifying non-profit act for you. The European Commission notes the authority should update you within three months.",
      {table:[
        ["Place","Example law"],
        ["UK","UK GDPR + Data Protection Act 2018 (amended by the Data (Use and Access) Act 2025)"],
        ["California, US","CCPA: know, delete, correct, opt out of sale/sharing, limit sensitive data, equal treatment"],
        ["Brazil","LGPD"],
        ["India","Digital Personal Data Protection Act 2023 (phased in)"],
        ["Canada","PIPEDA plus provincial laws"]
      ]},
      "Data protection authorities also publish clear guides for the public, often with template letters. Searching for your country’s authority is a good starting point."
     ],
     pro:[
      "Scope: the GDPR applies to processing by organisations established in the EU, and to non-EU organisations offering goods or services to, or monitoring the behaviour of, people in the EU (Article 3). The **ePrivacy Directive** separately requires consent for storing or reading information on a device, such as most non-essential cookies, which is why cookie banners appear.",
      "Principles (Article 5): lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; accountability. Special categories (health, religion, sexual orientation, biometrics and others) need extra conditions.",
      "Rights articles: 13–14 information, 15 access, 16 rectification, 17 erasure, 18 restriction, 20 portability, 21 objection, 22 automated decision-making. Article 12 sets the one-month deadline and the two-month extension, and allows a fee or refusal only for manifestly unfounded or excessive requests.",
      "In the US, sector laws (health, children’s data, credit reports) sit alongside a growing set of state comprehensive privacy laws modelled partly on the CCPA. California also requires businesses to honour opt-out preference signals and runs the DROP platform for data-broker deletion requests.",
      {tip:"Laws change. In November 2025 the European Commission proposed “digital omnibus” amendments touching the GDPR and cookie rules; in late 2026 they were still being negotiated and were not yet law. The UK was implementing its 2025 Act. Check your regulator’s website for the current position."}
     ]
    },
    related:["data-access-request","privacy-policies","digital-footprint","ad-personalisation"],
    read:[{book:"ics", where:"Background reading: Section 14.3 “Governing the Use of Cyber Resources” (the parts on using data responsibly)"}],
    sources:[{t:"European Commission: Information for individuals (your rights)", url:"https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en"},{t:"GDPR Chapter III, Rights of the data subject (legislation.gov.uk copy)", url:"https://www.legislation.gov.uk/eur/2016/679/chapter/III/adopted/data.html"},{t:"California Privacy Protection Agency: Rights under the CCPA", url:"https://privacy.ca.gov/california-privacy-rights/rights-under-the-california-consumer-privacy-act/"}], checked:"2026-11"},

   {id:"privacy-policies", title:"Reading a privacy policy quickly", aka:["privacy notice","privacy statement","terms"], tags:["privacy","skills"],
    summary:"Six questions and a handful of search words that let you get the useful parts of a privacy policy in five minutes.",
    levels:{
     starter:[
      "A **privacy policy** (or privacy notice) is where an organisation explains what personal data it collects, why, who gets it and how you can use your rights. You don’t need to read every word. Look for answers to six questions:",
      {ol:[
        "Who is responsible, and how do I contact them?",
        "What do they collect, and from where?",
        "Why do they use it?",
        "Who else gets it? Do they sell or share it?",
        "How long do they keep it?",
        "How do I download, delete or opt out?"
      ]},
      "Use Find (Ctrl + F, Mac ⌘ + F, or Find in page on a phone) for: **sell**, **share**, **partners**, **advertising**, **retain**, **delete**.",
      {key:"Five minutes with the right questions tells you most of what matters."},
      "If a policy is impossible to understand, that tells you something too."
     ],
     builder:[
      {table:[
        ["Phrase","What to check"],
        ["“Trusted partners”","Is there a list? Are they advertisers or data brokers?"],
        ["“As long as necessary”","Is there a table of retention periods?"],
        ["“Legitimate interests”","Which uses rely on it? You can usually object."],
        ["“Sell” or “share for cross-context advertising”","Is there an opt-out link (often “Do Not Sell or Share”)?"],
        ["“Transfers outside your country”","What safeguards are used?"]
      ]},
      "Good signs: plain language, a named contact or Data Protection Officer, specific retention periods, clear links to download and delete tools, and separate choices for marketing.",
      "Warning signs: “by using this service you consent to everything”, vague retention, no contact, and selling data with no opt-out. Under the GDPR, simply using a service isn’t valid consent for things like marketing.",
      "App-store summaries (App Privacy, Data safety) are a quick preview, but they’re written by the developer; the policy is the more complete statement.",
      "A worked approach for a new app: read the app-store label, open the policy, search for the six keywords, and check whether account deletion is offered inside the app. If the answers worry you, look for an alternative app with a clearer approach before you hand over data.",
      "For children’s apps, also look for a section on children’s data: many laws set special rules, including parental consent below certain ages."
     ],
     pro:[
      "GDPR Articles 13 and 14 list what a privacy notice must contain: controller identity and contact, DPO contact, purposes and lawful bases, legitimate interests relied on, recipients, international transfers and safeguards, retention periods or criteria, the rights available, the right to withdraw consent, the right to complain to a regulator, whether providing data is required, and any automated decision-making with meaningful information about the logic.",
      "Layered notices (a short summary linking to detail) and just-in-time notices (explanations at the moment of collection) are encouraged by regulators. A policy that buries key uses in long text may fall short of the transparency principle.",
      "Policies change. Many services notify you of changes by email or banner; the old version is often archived. Comparing versions can reveal new data uses, such as using content to train AI models.",
      {tip:"For a quick comparison of several apps, look at the same three things in each: whether data is sold or shared for advertising, retention, and how to delete your account."},
      "A privacy policy is a statement of practice, not proof. Regulators enforce against policies that misdescribe practices, so inaccurate statements carry legal risk for the company.",
      "Cookie notices are separate from privacy policies but linked: the cookie policy lists cookies and trackers by purpose and duration, which shows how much third-party tracking a site uses."
     ]
    },
    related:["data-protection-laws","data-access-request","ad-personalisation"],
    read:[{book:"wss", where:"Section 1.4 “Safety, Security, Privacy, and the Ethical Use of Technology”: “Ensuring Privacy”"}],
    sources:[{t:"European Commission: Information for individuals (right to be informed)", url:"https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en"},{t:"GDPR Chapter III, Rights of the data subject (legislation.gov.uk copy)", url:"https://www.legislation.gov.uk/eur/2016/679/chapter/III/adopted/data.html"}], checked:"2026-11"},

   {id:"data-access-request", title:"Making a data access request", aka:["subject access request","SAR","DSAR","right of access","download your data"], tags:["privacy","rights","skills"],
    summary:"How to get a copy of the personal data an organisation holds about you, by self-service download or by writing a request.",
    levels:{
     starter:[
      "Under the GDPR and many similar laws, you can ask an organisation for a **copy of your personal data** and information about how it’s used. This is often called a **subject access request** (SAR).",
      "Try self-service first: **Google Takeout** (takeout.google.com), **privacy.apple.com**, **Download your information** (or **Export your information**) in Meta’s Accounts Center, and Microsoft’s **privacy dashboard**.",
      "Otherwise, write a short email or use the organisation’s web form. No special words or reason are needed. Ask for your data, the purposes, who it’s shared with, how long it’s kept and where it came from.",
      "Under the GDPR, they must reply within **one month** (up to three months in total if complex), and the first copy is free.",
      {key:"Never pay a third party to use your own rights, and only send ID through the organisation’s official channel if they ask."}
     ],
     builder:[
      {ol:[
        "Find the privacy contact or Data Protection Officer in the privacy policy.",
        "Send a short request; keep a copy and note the date.",
        "Provide identity proof only if asked, and only as much as needed.",
        "Expect a reply within one month, or a notice of extension with reasons.",
        "Check the response is complete: data, purposes, recipients, retention, source.",
        "If ignored or refused without good reason, complain to your data protection authority."
      ]},
      {ex:"Subject: Data access request\nI am making a request under Article 15 of the GDPR for a copy of the personal data you hold about me, the purposes, the recipients, the retention period and the source.\nAccount email: (your email)\nThank you.", label:"Short template", mono:true},
      "Self-service downloads may not include everything, such as inferred interests, internal notes or a list of companies data was shared with. A written request can ask for those.",
      "Keep it polite and short. You don’t need to say why you want the data, and an organisation shouldn’t ask for your reasons before answering.",
      "If you only want certain data (for example, call recordings from a particular month), saying so can speed things up. Keep the reply somewhere safe: it may contain sensitive information.",
      "If you’re helping an older relative or someone with a disability, many organisations accept requests made on someone’s behalf with their written permission."
     ],
     pro:[
      "Article 15 covers: confirmation of processing; a copy of the data; purposes; categories; recipients (especially in third countries); retention period or criteria; the existence of other rights; the right to complain; the source if not collected from you; and the existence of automated decision-making with meaningful information about the logic.",
      "Controllers may extend by two months for complex or numerous requests, must tell you within the first month, and may charge a reasonable fee or refuse only for manifestly unfounded or excessive requests, which they must justify. They may ask for information needed to confirm identity, which can pause the clock in some regimes.",
      "Other laws differ: California’s CCPA has a **right to know** with its own deadlines and verification rules; the UK’s regime has been adjusted by the Data (Use and Access) Act 2025; other countries set their own timelines. Check the regulator’s guidance where you live.",
      {tip:"Access requests are useful in disputes (employment, insurance, a closed account), but stay factual and keep records. For legal disputes, seek advice."},
      "Responses arrive in many formats (JSON, CSV, HTML, PDF). Portability (Article 20) is narrower: data you provided, processed by consent or contract, by automated means, in a structured, commonly used, machine-readable format."
     ]
    },
    related:["data-protection-laws","privacy-policies","privacy-settings"],
    sources:[{t:"European Commission: Information for individuals (exercising your rights)", url:"https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en"},{t:"GDPR Chapter III, Rights of the data subject (legislation.gov.uk copy)", url:"https://www.legislation.gov.uk/eur/2016/679/chapter/III/adopted/data.html"}], checked:"2026-11"},

   {id:"copyright-basics", title:"Copyright basics, fair use and the public domain", aka:["copyright","fair use","fair dealing","public domain","©"], tags:["copyright","law"],
    summary:"How copyright arises automatically, how long it lasts, the country-specific exceptions, and how works enter the public domain. General information, not legal advice.",
    levels:{
     starter:[
      "**Copyright** gives the creator of an original work rights to copy, share, adapt and perform it. Others need permission, unless an exception applies.",
      {list:[
        "It’s **automatic**: no registration, fee or © symbol needed.",
        "It protects **expression**, not ideas or facts.",
        "It lasts a long time: at least the author’s life plus 50 years under the Berne Convention, and life plus 70 years in many countries.",
        "It **varies by country**."
      ]},
      "**Exceptions** let you use parts of works without permission in some situations: **fair use** in the United States, **fair dealing** in the UK, Canada, Australia, India and others, and listed exceptions elsewhere.",
      "The **public domain** holds works anyone can use: those whose copyright has expired, those whose creators waived rights (CC0), and some never protected.",
      {key:"Online and free to view isn’t free to reuse. Credit is good manners, not permission."}
     ],
     builder:[
      {h:"Fair use (US)"},
      "Courts weigh four factors: purpose and character of the use (including whether commercial or non-profit educational, and whether it’s transformative); nature of the work; amount and substantiality used; and effect on the market. The US Copyright Office says there is no formula and each case is decided on its facts.",
      {h:"Fair dealing (UK and others)"},
      "Allowed only for listed purposes, such as research and private study, criticism, review and quotation, news reporting, parody, caricature and pastiche, or illustration for teaching, and only if the dealing is fair. Usually requires sufficient acknowledgement.",
      {h:"How long"},
      "The UK government notes that in most countries copyright lasts at least life plus 50 years for most written, dramatic and artistic works, and at least 25 years for photographs. Many countries go further. Because terms differ, a work can be public domain in one country but not another.",
      {warn:"Common traps: “I credited it”, “it’s under 30 seconds”, “it’s non-profit”, “there was no © symbol”, “I changed it a bit”. None of these alone makes a use lawful."},
      "Ideas, facts, short phrases and names generally aren’t protected by copyright, though names and logos may be trademarks, which is a different area of law.",
      "When in doubt, ask: many creators are happy to grant permission if you explain the use and offer credit."
     ],
     pro:[
      "Berne Convention principles: national treatment (foreign works protected as domestic ones), automatic protection without formalities, and independence of protection from the country of origin. Minimum terms: life + 50 years generally; 50 years for anonymous works and cinematographic works; 25 years for photographic works and applied art.",
      "Ownership: employers often own works made by employees in the course of employment; commissioned work depends on contract and country. **Moral rights** (to be named and to object to derogatory treatment) exist in many countries and can survive a sale of the copyright.",
      "Related rights protect performances, sound recordings and broadcasts separately from the underlying work. A public-domain composition can still be in a protected recording.",
      "Public domain subtleties: US federal government works have no US copyright, but may be protected abroad; faithful photographs of public-domain 2D artworks are treated differently in different countries; and databases can have their own protection in the EU.",
      {tip:"For anything with real stakes (a book, an advert, a product), get permission or professional advice. For everyday learning projects, prefer CC0, CC BY or public-domain material and credit it."},
      "Platforms run automated systems that match uploads against rights holders’ files and may block or monetise matches regardless of whether an exception applies; disputes go through each platform’s process."
     ]
    },
    related:["creative-commons","attribution-tasl"],
    sources:[{t:"WIPO: Summary of the Berne Convention", url:"https://www.wipo.int/en/web/treaties/ip/berne/summary_berne"},{t:"U.S. Copyright Office: Fair Use Index", url:"https://www.copyright.gov/fair-use/"},{t:"GOV.UK: How copyright protects your work (ownership and duration)", url:"https://www.gov.uk/copyright/ownership-and-duration"}], checked:"2026-11"},

   {id:"creative-commons", title:"Creative Commons licences and CC0", aka:["CC BY","CC BY-SA","CC BY-NC","CC BY-ND","CC0","open licence"], tags:["copyright","open"],
    summary:"The four licence elements, the six Creative Commons licences, CC0, and what each lets you do.",
    levels:{
     starter:[
      "**Creative Commons** licences are standard permissions creators attach to their work in advance, so you can reuse it without asking, as long as you follow the conditions.",
      {table:[
        ["Element","Meaning"],
        ["BY","Credit the creator (every CC licence)"],
        ["SA","Share adaptations under the same terms"],
        ["NC","Non-commercial use only"],
        ["ND","No adaptations shared; unchanged copies only"]
      ]},
      "The six licences, from most to least permissive: **CC BY**, **CC BY-SA**, **CC BY-ND**, **CC BY-NC**, **CC BY-NC-SA**, **CC BY-NC-ND**. **CC0** is a separate tool that waives rights altogether, putting the work as close to the public domain as the law allows.",
      {key:"Always check the licence on the work itself, then follow its conditions."},
      "Every licence includes BY, so crediting the creator is always required except under CC0."
     ],
     builder:[
      "Creative Commons defines **non-commercial** as “not primarily intended for or directed towards commercial advantage or monetary compensation.” An advert for a business is commercial; a free community event usually isn’t; grey areas exist.",
      {table:[
        ["Licence","Commercial use?","Share adaptations?"],
        ["CC BY","Yes","Yes"],
        ["CC BY-SA","Yes","Yes, under same or compatible licence"],
        ["CC BY-ND","Yes","No"],
        ["CC BY-NC","No","Yes"],
        ["CC BY-NC-SA","No","Yes, under same or compatible licence"],
        ["CC BY-NC-ND","No","No"]
      ]},
      "Key points: the current version is 4.0; licences are non-revocable for people who already received the work under them; they don’t limit exceptions such as fair use or fair dealing; and they cover only the rights the licensor holds. A photo of a person or a trademark may need separate permissions.",
      "**CC0** works in layers: a waiver of rights; where a waiver isn’t legally effective, a fallback licence; and a promise not to assert rights. The separate **Public Domain Mark** labels works already free of known copyright.",
      "Licences are attached to individual works, often with a badge (such as “CC BY 4.0”) linking to a short summary called the licence deed and the full legal code. If you can’t find a licence on the work’s own page, assume normal copyright applies."
     ],
     pro:[
      "Version 4.0 (2013) is international: no country “ports” are needed, it covers sui generis database rights, automatically restores your rights if you fix a violation within 30 days of discovering it, and makes title optional in attribution. Older 2.0, 2.5 and 3.0 licences are still in use on many works; their attribution rules differ slightly.",
      "**ShareAlike compatibility:** CC BY-SA 4.0 adaptations can be licensed under later BY-SA versions and certain approved compatible licences. Combining BY-SA and BY-NC-SA material in one adaptation is generally not possible, because their conditions conflict.",
      "**ND nuance:** under 4.0, you may make adaptations for private use, but may not share them. Format shifting (e.g., PDF to print) isn’t an adaptation.",
      "Licences apply to **copyright and similar rights**, not to privacy, publicity or trademark rights, so a CC BY photo of an identifiable person doesn’t automatically clear use in an advert.",
      {tip:"When choosing a licence for your own work, consider what you want: CC BY maximises reuse; SA keeps adaptations open; NC and ND restrict reuse and can block inclusion in projects such as Wikipedia, which needs free licences."},
      "A licensor can offer the same work under several licences, or sell separate permission for uses a CC licence doesn’t cover (for example, commercial use of NC material)."
     ]
    },
    related:["attribution-tasl","copyright-basics"],
    sources:[{t:"Creative Commons: About CC Licenses", url:"https://creativecommons.org/share-your-work/cclicenses/"},{t:"Creative Commons: CC0 (No Rights Reserved)", url:"https://creativecommons.org/publicdomain/zero/"},{t:"Creative Commons Wiki: CC0", url:"https://wiki.creativecommons.org/wiki/CC0"}], checked:"2026-11"},

   {id:"attribution-tasl", title:"Giving attribution: TASL", aka:["attribution","credit","TASL","how to credit an image"], tags:["copyright","open","skills"],
    summary:"How to credit openly licensed work properly: title, author, source and licence, plus what to do if you changed it.",
    levels:{
     starter:[
      "Every Creative Commons licence requires **attribution**: giving credit. Creative Commons recommends four parts, remembered as **TASL**:",
      {list:[
        "**Title** of the work",
        "**Author**, named the way they ask",
        "**Source**: a link to where the work lives",
        "**Licence**: its exact name and version, linked"
      ]},
      {ex:"“Creative Commons 10th Birthday Celebration San Francisco” by Timothy Vollmer is licensed under CC BY 4.0", label:"Ideal (with links on the title and licence)"},
      "“Photo: Creative Commons” is wrong: Creative Commons is an organisation, not a licence, and there’s no title, author or source.",
      {key:"T-A-S-L. If you changed it, say so."},
      "If you changed the work, add what you did, such as “cropped” or “adapted”. Put the credit near the work or in a credits list, so readers can find the original."
     ],
     builder:[
      {table:[
        ["Situation","How to attribute"],
        ["Used unchanged","“Title” by Author is licensed under CC BY 4.0"],
        ["Cropped or resized","Add: “cropped from original”"],
        ["Adapted (new text, combined, translated)","“This [work] is adapted from ‘Title’ by Author, used under CC BY 4.0. [Your work] is licensed under …”"],
        ["Offline (print, slides)","Write out the source and licence addresses, or put credits on a final slide"],
        ["CC0 or public domain","Not legally required, but credit the creator and source if you can"]
      ]},
      "Place the credit near the work or in a clear credits section. For videos, use the description or end credits. Keep a working list of TASL details as you collect images; it’s far easier than reconstructing them later.",
      "The source is the page where the work lives, not the search engine where you found it.",
      "Example for a slide deck: on the final slide, list each image as “Slide 3: ‘Harbour at dawn’ by Mei Lin, from the photo’s page address, CC BY 4.0.”",
      "Example for a cropped image: “‘Harbour at dawn’ by Mei Lin, cropped from original, is licensed under CC BY 4.0.”",
      "For printed work, a short web address or the words “licensed under CC BY 4.0” with the licence’s web address is enough to let readers find both."
     ],
     pro:[
      "Under 4.0, attribution must include: the creator and any others designated, a copyright notice if supplied, a notice referring to the licence and the disclaimer, a URI or hyperlink to the material where reasonably practicable, and an indication of whether you modified it. It may be satisfied “in any reasonable manner based on the medium, means, and context.” Title is optional in 4.0; earlier versions ask for it when the licensor supplied one.",
      "If the licensor asks you to remove attribution, 4.0 requires you to do so to the extent reasonably practicable. Attribution must not imply endorsement by the creator.",
      "**Collections** (a slide deck with many images) should credit each item; a credits slide listing TASL per image is acceptable. **Adaptations** of SA material must carry the SA licence; adaptations of BY material can use any licence for your contribution, but the original’s attribution stays.",
      {tip:"For open textbooks, OpenStax and similar publishers often provide a ready-made attribution statement on the book’s page or in its preface. Use it as written."},
      "Get the licence version right (CC BY 2.0 vs 4.0), since conditions differ; copy it from the work’s page rather than from memory.",
      "Under 4.0 you may also satisfy attribution by linking to a page that contains the required information."
     ]
    },
    related:["creative-commons","copyright-basics"],
    sources:[{t:"Creative Commons Wiki: Recommended practices for attribution", url:"https://wiki.creativecommons.org/Best_practices_for_attribution"},{t:"OpenStax Help: Licensing information of OpenStax textbooks", url:"https://help.openstax.org/s/article/Licensing-information-of-OpenStax-textbooks"}], checked:"2026-11"},

   {id:"digital-wellbeing", title:"Screen-time and focus tools", aka:["Digital Wellbeing","Screen Time","Focus","Bedtime mode","Family Safety","Family Link"], tags:["wellbeing","settings"],
    summary:"Built-in tools on Android, Apple devices, Windows and ChromeOS for seeing and shaping how you use your devices, used without guilt.",
    levels:{
     starter:[
      "Every major system has tools to see how you use your device and to add gentle limits:",
      {list:[
        "**Android:** Digital Wellbeing: screen time per app, App timers, Bedtime mode, Focus mode.",
        "**iPhone, iPad, Mac:** Screen Time: weekly reports, limits for apps, scheduled time away.",
        "**Windows 11:** Focus sessions and Do not disturb; Microsoft Family Safety for families.",
        "**ChromeOS:** Focus (a timer with Do Not Disturb); Google Family Link for children."
      ]},
      "A better question than “how many hours?” is “did that time leave me better or worse off?”. A video call with family and late-night scrolling aren’t the same.",
      {key:"Use the tools as nudges you chose, not as punishments."},
      "The tools work best when you choose one small change, such as an app timer or turning off one app’s notifications."
     ],
     builder:[
      {table:[
        ["Device","Where","Highlights"],
        ["Android","Settings → Digital Wellbeing (often “Digital Wellbeing & parental controls”)","Usage overview (screen time, times opened, notifications), App timers that reset at midnight, Bedtime mode (greyscale, silence), Focus mode with schedules and breaks"],
        ["iPhone/iPad","Settings → Screen Time","Reports, limits, schedules, Always Allowed; names vary by version (iOS 27 introduced Time Allowances and Screen Time Schedules)"],
        ["Mac","System Settings → Screen Time","App & Website Activity, limits, schedules"],
        ["Windows 11","Settings → System → Focus; Notifications","Focus timer that silences notifications; Family Safety at account.microsoft.com/family"],
        ["ChromeOS","Select the time → Focus","Timer plus Do Not Disturb; Family Link for child accounts"]
      ]},
      "Changes many people find useful: switch off non-essential notifications; turn off autoplay; move tempting apps off the home screen; set an app timer for the one app that most often leaves you feeling worse; protect sleep with Bedtime or scheduled downtime.",
      "For families, the same tools can set limits on children’s devices. Talking together about why the limits exist often helps more than limits alone.",
      "If a limit keeps being ignored, that’s information: maybe the app is meeting a real need (connection, rest) that could be met another way, or the limit is set too tight.",
      "Reports are estimates: background audio and screens left on can inflate totals."
     ],
     pro:[
      "App timers and limits are deliberately soft: you can usually ignore or extend them. That’s a feature for adults, since the goal is a pause for a decision, not a lock. For children, parent-managed versions (Family Link, Apple Family Sharing and Screen Time, Microsoft Family Safety) add PINs and approvals.",
      "Data from screen-time reports stays on the device or within the platform account, but think about shared family accounts: reports can reveal what someone used and when.",
      "Notification channels on Android and notification summaries on iPhone let you keep important alerts while batching others. Focus or Do Not Disturb modes can allow named people through.",
      {tip:"Greyscale display is available in Android Bedtime mode and in iPhone accessibility settings (colour filters). Many people find it reduces the pull of feeds."},
      "Version differences are large: Apple reorganised Screen Time in iOS 27, and Android makers (Samsung, Xiaomi and others) ship their own variants. Describe the goal (limit an app, schedule quiet time), then find that version’s menu.",
      "Focus modes on Apple devices and Android can automatically switch on by time, place or app, and can filter which notifications break through.",
      "Wellbeing data is personal too: think about who else uses a shared device or family account before turning on detailed reporting."
     ]
    },
    related:["attention-design","privacy-settings"],
    sources:[{t:"Android Help: Manage how you spend time on your Android phone with Digital Wellbeing", url:"https://support.google.com/android/answer/9346420?hl=en"},{t:"Chromebook Help: Enable Focus mode", url:"https://support.google.com/chromebook/answer/15642977?hl=en"},{t:"Microsoft Support: Set up Microsoft Family Safety", url:"https://support.microsoft.com/en-au/family-safety/set-up-microsoft-family-safety"}], checked:"2026-11"},

   {id:"attention-design", title:"Attention design and dark patterns", aka:["dark patterns","deceptive design","infinite scroll","autoplay","doomscrolling","confirmshaming"], tags:["wellbeing","design","consumer"],
    summary:"How apps are designed to hold attention, the tricks known as dark patterns, and the laws starting to restrict them.",
    levels:{
     starter:[
      "Many free apps earn money from advertising, so they’re designed to keep you looking. Common techniques: **infinite scroll** (no end to the page), **autoplay** (the next video starts by itself), **notifications and badges** (pulling you back), and unpredictable rewards like new likes.",
      "A **dark pattern** goes further: a design that tricks or pressures you into choices you wouldn’t otherwise make. Examples: cancelling is much harder than signing up; a guilt-trip button (“No thanks, I don’t like saving money”); pre-ticked boxes; fees revealed at the last step; fake countdown timers.",
      {key:"If a screen makes you feel rushed, guilty or confused, slow down. That feeling is often the design working."},
      "These designs work on everyone; noticing them is a skill, not a sign of weakness."
     ],
     builder:[
      "The US FTC’s 2022 staff report, *Bringing Dark Patterns to Light*, describes dark patterns as design practices that trick or manipulate users into choices they would not otherwise have made. It groups them as designs that:",
      {list:[
        "induce false beliefs (fake urgency, disguised ads);",
        "hide or delay material information (drip pricing, buried limits);",
        "lead to unauthorised charges (hard-to-cancel subscriptions, children’s in-app purchases);",
        "obscure or subvert privacy choices (confusing or pre-set privacy options)."
      ]},
      "It also lists **autoplay** and **nagging** (repeated requests with “Not now” instead of “No”).",
      "In the EU, Article 25 of the **Digital Services Act** bans online platforms from interfaces that deceive or manipulate users, naming practices such as giving more prominence to certain choices, repeatedly asking for a choice already made, and making cancelling harder than subscribing.",
      {tip:"Screenshots of a dark pattern (with the date) help if you complain to the company, a consumer body or a regulator."},
      "Practical counter-moves: turn off autoplay where the app allows it, switch off non-essential notifications, decide before you open an app what you came for, and pause when a screen makes you feel rushed or guilty. When cancelling a subscription, look for the account or billing page on the website as well as in the app."
     ],
     pro:[
      "Attention design draws on behavioural research: variable rewards, loss aversion (streaks), social proof (counts of likes and viewers), defaults and friction. Defaults are powerful because many people never change them, which is why regulators focus on default privacy settings and the relative ease of “accept” versus “reject”.",
      "Taxonomies of deceptive design include sneaking (hidden costs, sneak into basket), urgency, misdirection (visual interference, trick questions), social proof, scarcity, obstruction (roach motel, hard cancellation), forced action (forced registration, privacy zuckering) and nagging.",
      "Regulation is spreading across consumer protection (unfair practices), data protection (consent must be freely given; withdrawing as easy as giving), platform regulation (DSA Article 25) and subscription rules in several jurisdictions.",
      "For individuals, the most practical counters are changes to your setup: turn off autoplay and non-essential notifications, add timers or greyscale, and keep payment details out of apps where impulse purchases are designed in.",
      {tip:"Designers can choose ethical alternatives: clear stopping points, equal-weight choices, honest scarcity, and cancellation as easy as sign-up."},
      "Measurement matters: A/B testing lets companies compare designs on millions of users and keep whichever increases engagement or revenue, which is how manipulative patterns can spread without anyone deciding to manipulate.",
      "For children, many regulators now treat engagement-maximising features as a specific risk, and some laws set design codes for services likely to be used by children."
     ]
    },
    related:["digital-wellbeing","privacy-policies"],
    sources:[{t:"FTC Staff Report: Bringing Dark Patterns to Light (2022)", url:"https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf"},{t:"Android Help: Digital Wellbeing (autoplay alternatives: timers, Focus, Bedtime)", url:"https://support.google.com/android/answer/9346420?hl=en"}], checked:"2026-11"},

   {id:"online-harassment", title:"Online harassment, cyberbullying and doxxing", aka:["cyberbullying","doxxing","doxing","trolling","block","report"], tags:["safety","wellbeing"],
    summary:"What harassment, cyberbullying and doxxing are, and the steps official guidance recommends: safety, evidence, block, report, support.",
    levels:{
     starter:[
      "**Online harassment** is unwanted contact meant to intimidate, threaten or upset. **Cyberbullying** is bullying through phones, messages, games or social media. **Doxxing** is gathering someone’s personal information and publishing it to harm them.",
      "It is never the target’s fault. Steps that official guidance agrees on:",
      {ol:[
        "If you’re in danger, contact your local emergency number.",
        "Don’t reply, retaliate or forward the messages.",
        "Document: screenshots showing content, account name and date; links.",
        "Block, mute or restrict, after saving evidence.",
        "Report to the platform; to police if there are threats or stalking.",
        "Get support from people you trust."
      ]},
      {key:"Safety, evidence, block, report, support."},
      "Many countries have official online-safety services or helplines; search your government’s website for online abuse support.",
      "You can also ask someone you trust to help with screenshots and reports."
     ],
     builder:[
      "StopBullying.gov (US) advises not responding to or forwarding cyberbullying messages; recording dates, times and descriptions and saving screenshots; blocking; reporting to platforms and, where relevant, schools; and reporting to police for threats of violence, sexual content involving children, recording in private places, stalking and hate crimes.",
      "Australia’s eSafety Commissioner advises taking screenshots, printing pages so the web address shows, noting the date, time and where each item was found, acting quickly in case content is removed, collecting evidence only when safe, and storing it securely.",
      "Police Scotland describes doxxing as sharing someone’s information online without consent, and advises reporting to the platform, saving posts, blocking the sender, and noting what was shared, where, when and by whom if reporting to police.",
      {h:"Supporting someone"},
      "Believe them and ask what helps; don’t share or reply to the content; help collect evidence and find the report tools; check in again later.",
      "Platform tools besides blocking: mute (you stop seeing them, they aren’t told), restrict (their comments are hidden unless you approve them), limit replies to people you follow, filter keywords, and turn off messages from strangers. Use whichever makes you feel safest.",
      "Workplaces, schools, universities and clubs usually have their own procedures, and online harassment linked to them often falls under those rules."
     ],
     pro:[
      "The US Department of Homeland Security defines doxing as gathering an individual’s personally identifiable information and releasing it publicly for malicious purposes. Its guidance for individuals: before an incident, limit what you share, remove address, birth date and phone from profiles, review followers, ask public-records and people-search sites to remove your data, delete unneeded apps and extensions, turn off location tracking, and use unique passwords with two-step verification; after an incident, request takedowns, preserve evidence, report threats to police and platforms, and report online crime to the FBI’s IC3 in the US.",
      "Evidence quality matters: capture the full screen with the URL and timestamp, keep original files and message exports where possible, and keep a log. Some platforms remove content after blocking or reporting, so capture first.",
      "Escalation routes beyond platforms include workplace or school procedures, national online-safety regulators (such as Australia’s eSafety Commissioner, which can act on serious cyberbullying of children and adult cyber abuse), police, and civil remedies. Laws on harassment, stalking, threats and image-based abuse differ by country.",
      {warn:"Image-based abuse (sharing or threatening to share intimate images) and sextortion are crimes in many countries. Don’t pay, save evidence, report to the platform and police, and seek specialist help."},
      "Self-care is part of the response: limit exposure by asking a trusted person to monitor reports, mute keywords, and take breaks."
     ]
    },
    related:["location-privacy","digital-footprint","privacy-settings"],
    sources:[{t:"StopBullying.gov: How to Report Cyberbullying", url:"https://www.stopbullying.gov/cyberbullying/how-to-report"},{t:"US DHS: Resources for Individuals on the Threat of Doxing", url:"https://www.dhs.gov/sites/default/files/2024-01/24_0117_ope_resources-for-individuals-on-the-threat-of-doxing-508.pdf"},{t:"eSafety Commissioner: Collecting evidence", url:"https://www.esafety.gov.au/key-issues/domestic-family-violence/help-support/collecting-evidence"}], checked:"2026-11"}
  ],
  terms:[
   {id:"digital-footprint", term:"Digital footprint", def:"The record of what you do online: what you share on purpose, what is collected as you go, and what is guessed about you.", codex:"digital-footprint"},
   {id:"active-footprint", term:"Active footprint", def:"The part of your digital footprint you create deliberately, such as posts, reviews, comments and profile photos.", codex:"digital-footprint"},
   {id:"passive-footprint", term:"Passive footprint", def:"The part of your digital footprint collected as a side effect, such as pages visited, location, device details and app usage.", codex:"digital-footprint"},
   {id:"personal-data", term:"Personal data", def:"Any information relating to an identifiable person: not only a name, but also an email address, location, device ID, photo or a pattern of behaviour that points to you.", codex:"data-protection-laws"},
   {id:"tracker", term:"Tracker", def:"Code or a technique (cookie, pixel, fingerprinting, ID) that records what you do so it can be linked together, often across many sites and apps.", codex:"tracking-data-brokers"},
   {id:"first-party-cookie", term:"First-party cookie", def:"A cookie set by the website shown in your address bar, used for things like keeping you signed in or remembering your basket.", codex:"tracking-data-brokers"},
   {id:"third-party-cookie", term:"Third-party cookie", def:"A cookie set by a different company whose code is embedded in the page, such as an ad network. It can recognise your browser on every site that uses that company.", codex:"tracking-data-brokers"},
   {id:"tracking-pixel", term:"Tracking pixel", def:"A tiny, usually invisible image or snippet in a web page or email that reports to its owner when it is loaded, by which device and when.", codex:"tracking-data-brokers"},
   {id:"fingerprinting", term:"Device fingerprinting", def:"Recognising a device from the combination of many small details it reveals, such as screen size, fonts, time zone and browser version. Nothing is stored, so clearing cookies doesn’t remove it.", codex:"tracking-data-brokers"},
   {id:"advertising-id", term:"Advertising ID", def:"A device-wide identifier on phones (and Windows) that apps can use to link your activity for advertising. You can reset it, delete it (on recent Android) or turn its use off.", codex:"ad-personalisation"},
   {id:"data-broker", term:"Data broker", def:"A company that collects information about people from many sources, combines it and sells or shares it. People-search sites are one kind.", codex:"tracking-data-brokers"},
   {id:"targeted-advertising", term:"Targeted advertising", def:"Choosing which ad to show someone based on information about them. Behavioural (personalised) ads use a profile; contextual ads use the page being viewed.", codex:"ad-personalisation"},
   {id:"two-step-privacy-checkup", term:"Privacy checkup", def:"A guided, step-by-step review of the most important privacy settings in an account, such as Google’s Privacy Checkup or Facebook’s Privacy Checkup.", codex:"privacy-settings"},
   {id:"location-services", term:"Location services", def:"The device feature that works out where you are using GPS, Wi-Fi and mobile masts, and shares it with apps you allow.", codex:"location-privacy"},
   {id:"metadata-privacy", term:"Location metadata (geotag)", def:"GPS coordinates stored inside a photo or video file by the camera. They travel with the original file unless removed.", codex:"location-privacy"},
   {id:"private-browsing", term:"Private browsing", def:"A browser mode (Incognito, InPrivate, Private Window) that forgets the session’s history and cookies when closed. It hides activity from other users of the device, not from websites or networks.", codex:"private-browsing"},
   {id:"privacy-policy", term:"Privacy policy", def:"An organisation’s statement of what personal data it collects, why, who gets it, how long it’s kept and how you can use your rights. Also called a privacy notice.", codex:"privacy-policies"},
   {id:"consent", term:"Consent (data protection)", def:"Agreement to a use of your data. Under the GDPR it must be freely given, specific, informed and unambiguous, and as easy to withdraw as to give.", codex:"data-protection-laws"},
   {id:"gdpr", term:"GDPR", def:"The EU’s General Data Protection Regulation: rules for using personal data and rights for people, applying in the EU and to organisations elsewhere that serve or monitor people in the EU.", codex:"data-protection-laws"},
   {id:"data-subject-rights", term:"Data subject rights", def:"The rights a data-protection law gives you over your personal data, such as access, correction, erasure, portability and objection.", codex:"data-protection-laws"},
   {id:"data-controller", term:"Data controller", def:"The organisation that decides why and how personal data is used. It is responsible for following the law and answering your requests.", codex:"data-protection-laws"},
   {id:"lawful-basis", term:"Lawful basis", def:"One of the six legal reasons the GDPR allows for using personal data: consent, contract, legal obligation, vital interests, public task or legitimate interests.", codex:"data-protection-laws"},
   {id:"subject-access-request", term:"Data access request", def:"A request to an organisation for a copy of your personal data and how it’s used. Often called a subject access request (SAR).", codex:"data-access-request"},
   {id:"right-to-erasure", term:"Right to erasure", def:"The GDPR right to have personal data deleted in certain cases, also called the “right to be forgotten”. It has exceptions, such as legal obligations.", codex:"data-protection-laws"},
   {id:"copyright", term:"Copyright", def:"Legal rights a creator automatically gets over an original work, mainly to copy, share, adapt and perform it. Others need permission unless an exception applies.", codex:"copyright-basics"},
   {id:"fair-use", term:"Fair use", def:"A US copyright exception that allows some uses without permission, decided case by case using four factors (purpose, nature, amount and market effect).", codex:"copyright-basics"},
   {id:"fair-dealing", term:"Fair dealing", def:"A copyright exception in the UK, Canada, Australia, India and other countries that allows some uses of a work without permission, only for listed purposes (such as research, criticism, review or quotation) and only if the use is fair.", codex:"copyright-basics"},
   {id:"public-domain", term:"Public domain", def:"Works not protected by copyright, which anyone may use: because protection expired, was waived, or never applied.", codex:"copyright-basics"},
   {id:"creative-commons", term:"Creative Commons", def:"A non-profit organisation that publishes free, standard licences creators can use to give the public permission to reuse their work on stated conditions.", codex:"creative-commons"},
   {id:"cc-by", term:"CC BY", def:"The Creative Commons Attribution licence: anyone may copy, adapt and use the work, including commercially, as long as they credit the creator.", codex:"creative-commons"},
   {id:"cc0", term:"CC0", def:"A Creative Commons tool with which a creator waives their rights, placing the work as close to the public domain as the law allows.", codex:"creative-commons"},
   {id:"share-alike", term:"ShareAlike (SA)", def:"A Creative Commons condition: if you adapt the work, you must share your version under the same or a compatible licence.", codex:"creative-commons"},
   {id:"non-commercial", term:"NonCommercial (NC)", def:"A Creative Commons condition allowing only uses not primarily intended for commercial advantage or money.", codex:"creative-commons"},
   {id:"no-derivatives", term:"NoDerivatives (ND)", def:"A Creative Commons condition: you may share only unchanged copies, not adapted versions.", codex:"creative-commons"},
   {id:"attribution", term:"Attribution", def:"Credit given to the creator of a work. For Creative Commons work, include title, author, source and licence (TASL).", codex:"attribution-tasl"},
   {id:"open-license", term:"Open licence", def:"A licence that gives everyone permission in advance to use, share and often adapt a work, such as the Creative Commons licences.", codex:"creative-commons"},
   {id:"open-textbook", term:"Open textbook", def:"A textbook published under an open licence, free to read and, depending on the licence, to copy, share or adapt. OpenStax books are examples.", codex:"attribution-tasl"},
   {id:"screen-time", term:"Screen time", def:"Time spent using screens. Also the name of Apple’s tool for viewing and limiting device use.", codex:"digital-wellbeing"},
   {id:"notification", term:"Notification", def:"An alert from an app: a sound, vibration, banner or badge. You can control which apps may send them, and how.", codex:"digital-wellbeing"},
   {id:"infinite-scroll", term:"Infinite scroll", def:"A design where new content loads automatically as you reach the bottom, so the page never ends.", codex:"attention-design"},
   {id:"autoplay", term:"Autoplay", def:"A feature that starts the next video or episode automatically, so carrying on takes no action.", codex:"attention-design"},
   {id:"doomscrolling", term:"Doomscrolling", def:"Scrolling on and on through bad or upsetting news or posts, feeling worse but finding it hard to stop.", codex:"attention-design"},
   {id:"dark-pattern", term:"Dark pattern", def:"A design that tricks or pressures people into choices they wouldn’t otherwise make, such as making cancelling much harder than signing up. Also called deceptive design.", codex:"attention-design"},
   {id:"cyberbullying", term:"Cyberbullying", def:"Bullying using phones, messages, games or social media, such as repeated mocking, threats or sharing embarrassing content.", codex:"online-harassment"},
   {id:"doxxing", term:"Doxxing", def:"Gathering someone’s personal information, such as their address or workplace, and publishing it to harm or intimidate them. Also spelled doxing.", codex:"online-harassment"},
   {id:"blocking", term:"Blocking", def:"A platform feature that stops an account contacting you or seeing your content. Save evidence first, as blocking can hide messages.", codex:"online-harassment"},
   {id:"reporting-content", term:"Reporting", def:"Telling a platform that a post, message or account breaks its rules, using its report option, so it can review and remove it.", codex:"online-harassment"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u5-q01", lesson:"t1u5-l1", level:1, q:"Which of these is part of your passive digital footprint?", options:[
     {t:"The record of which pages you visited on a shopping site", ok:true, why:"It was collected as a side effect of browsing, not shared deliberately."},
     {t:"A review you wrote of a restaurant", why:"You chose to publish it, so it’s part of your active footprint."},
     {t:"Your profile photo on a social network", why:"You uploaded it on purpose: active footprint."},
     {t:"A comment you posted on a video", why:"A deliberate post is active footprint."}
   ]},
   {id:"t1u5-q02", lesson:"t1u5-l1", level:1, q:"What makes a cookie “third-party”?", options:[
     {t:"It’s set by a different company whose code is embedded in the page, not by the site in the address bar", ok:true, why:"That’s the definition, and it’s why one company can recognise you across many sites."},
     {t:"It’s the third cookie a site sets", why:"The name refers to who sets it, not how many there are."},
     {t:"It’s stored on a third device", why:"Cookies are stored in the browser on your device; “third-party” refers to the company setting it."},
     {t:"It’s always malicious", why:"Third-party cookies are mostly used for advertising and analytics; they’re a privacy concern, not malware."}
   ]},
   {id:"t1u5-q03", lesson:"t1u5-l1", level:2, q:"As of late 2026, what does Chrome do with third-party cookies by default in a normal (non-Incognito) window?", options:[
     {t:"Allows them, unless you choose to block them in Settings", ok:true, why:"Google decided to keep them in Chrome, with a user setting; Incognito blocks them by default."},
     {t:"Blocks them, like Safari", why:"Safari blocks them by default; Chrome doesn’t in normal windows."},
     {t:"Deletes them every hour", why:"There’s no such default behaviour."},
     {t:"Replaced them with Privacy Sandbox, which was then made compulsory", why:"Google retired most Privacy Sandbox technologies in October 2025."}
   ]},
   {id:"t1u5-q04", lesson:"t1u5-l1", level:1, q:"What is a data broker?", options:[
     {t:"A company that collects information about people from many sources and sells or shares it", ok:true, why:"The FTC describes brokers compiling data from other brokers, social media and public records."},
     {t:"A bank that stores your data securely", why:"Banks hold data, but brokers specifically trade information about people."},
     {t:"A government office that protects your data", why:"That would be a data-protection authority, not a broker."},
     {t:"A cable that connects your router to the internet", why:"That’s hardware; a data broker is a business."}
   ]},
   {id:"t1u5-q05", lesson:"t1u5-l1", level:3, q:"Tomás clears his cookies daily and uses a browser that blocks third-party cookies, yet an ad company still seems to recognise his laptop. Which explanation fits best?", options:[
     {t:"Device fingerprinting, which identifies the device from details it reveals without storing anything", ok:true, why:"Fingerprinting survives cookie clearing and cookie blocking."},
     {t:"His cookies weren’t really cleared", why:"Possible in theory, but the scenario says he clears them and blocks third-party cookies; fingerprinting explains it without assuming a mistake."},
     {t:"His screen brightness gives him away", why:"Brightness isn’t a practical tracking signal; the combination of browser and device details is."},
     {t:"Tracking only works with cookies, so it must be coincidence", why:"Tracking has several techniques besides cookies."}
   ]},
   {id:"t1u5-q06", lesson:"t1u5-l1", level:2, q:"Which example is contextual rather than behavioural advertising?", options:[
     {t:"An ad for hiking boots on an article about mountain trails", ok:true, why:"The ad matches the page content, not a profile of the reader."},
     {t:"An ad for the exact boots you viewed last week, shown on a news site", why:"That uses your history: behavioural."},
     {t:"An ad based on a guess that you’re a new parent", why:"An inference from your profile: behavioural."},
     {t:"An ad shown because you visited a shop yesterday", why:"Based on your past behaviour: behavioural."}
   ]},
   {id:"t1u5-q07", lesson:"t1u5-l1", level:3, q:"Amara never told a website she was pregnant, but she starts seeing baby-product ads after browsing vitamins and loose clothing. What does this show?", options:[
     {t:"Companies can infer sensitive facts from patterns of behaviour, even ones you never shared", ok:true, why:"Inferred data is calculated from observed data; it can be sensitive and sometimes wrong."},
     {t:"Someone must have read her private messages", why:"No need: browsing patterns are enough to make the inference."},
     {t:"It’s random; ads are never targeted", why:"Behavioural targeting uses exactly this kind of pattern."},
     {t:"Her phone’s camera recognised her", why:"The more ordinary explanation is inference from her browsing and shopping."}
   ]},
   {id:"t1u5-q08", lesson:"t1u5-l1", level:2, q:"According to the FTC, why might you need to repeat opt-out requests to people-search sites?", options:[
     {t:"Your details can reappear, for example when public records change", ok:true, why:"The FTC advises checking periodically and opting out again when new information appears."},
     {t:"Opt-outs only last 24 hours by law", why:"There’s no such rule; the issue is new data being added."},
     {t:"Opting out deletes government records", why:"The FTC notes opting out doesn’t remove records from government websites."},
     {t:"Sites must charge a fee each time", why:"Most offer free opt-outs."}
   ]},
   {id:"t1u5-q09", lesson:"t1u5-l1", level:3, q:"Priya’s free running app publicly shares her route maps. Why is this a particular privacy risk?", options:[
     {t:"Routes that start and end at the same place reveal roughly where she lives and when she’s out", ok:true, why:"Location patterns reveal home, routine and times away: useful to stalkers and burglars."},
     {t:"Running routes take up too much storage", why:"Storage isn’t the privacy issue."},
     {t:"Maps make her phone battery drain", why:"Battery use isn’t a privacy risk."},
     {t:"Route data can’t identify anyone", why:"Repeated start and end points are highly identifying."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u5-q10", lesson:"t1u5-l2", level:1, q:"Where do you start Google’s Privacy Checkup?", options:[
     {t:"myaccount.google.com, in the Data & privacy section", ok:true, why:"Privacy Checkup is reached from your Google Account’s Data & privacy section."},
     {t:"In the Windows Control Panel", why:"Windows settings don’t control your Google Account."},
     {t:"In your router’s settings page", why:"Routers have nothing to do with Google Account privacy."},
     {t:"Only by phoning Google", why:"It’s a self-service tool in your account."}
   ]},
   {id:"t1u5-q11", lesson:"t1u5-l2", level:2, q:"What does private browsing (such as Chrome’s Incognito) actually protect against?", options:[
     {t:"Other people using the same device seeing your history and cookies from that session", ok:true, why:"It forgets the session locally. It doesn’t hide you from sites or networks."},
     {t:"Websites recording your visit", why:"Websites still see your requests in private mode."},
     {t:"Your employer’s network seeing your activity", why:"Google says organisations that manage the network can still see activity."},
     {t:"Malware on the computer", why:"Private browsing has no effect on malware or keyloggers."}
   ]},
   {id:"t1u5-q12", lesson:"t1u5-l2", level:2, q:"On an iPhone, how can you send a photo without its GPS location?", options:[
     {t:"In the Share sheet, tap Options and turn off Location", ok:true, why:"The shared copy then shows “Location Not Included”."},
     {t:"Turn on Airplane Mode before sharing", why:"Airplane mode doesn’t change the location stored in the photo file."},
     {t:"Crop the photo", why:"Cropping changes the picture, not the hidden GPS metadata."},
     {t:"Lower the screen brightness", why:"Brightness has nothing to do with photo metadata."}
   ]},
   {id:"t1u5-q13", lesson:"t1u5-l2", level:1, q:"What does turning off “Allow Apps to Request to Track” on an iPhone do?", options:[
     {t:"Apps are automatically told no when they want to track you across other companies’ apps and websites", ok:true, why:"App Tracking Transparency requires permission; with this off, requests are refused."},
     {t:"It switches off GPS", why:"Location is controlled separately in Location Services."},
     {t:"It deletes all your apps’ data", why:"It doesn’t delete data; it controls cross-app tracking permission."},
     {t:"It blocks all ads", why:"Ads still appear; they just can’t use cross-app tracking."}
   ]},
   {id:"t1u5-q14", lesson:"t1u5-l2", level:2, q:"Which location setting suits a weather app best?", options:[
     {t:"While using the app, with approximate location", ok:true, why:"A forecast needs your area, only when you open the app."},
     {t:"Always, with precise location", why:"That allows constant, exact tracking the app doesn’t need."},
     {t:"Always, with approximate location", why:"Background access isn’t needed for a forecast."},
     {t:"Share location with all contacts", why:"That’s a people-sharing feature, unrelated to the app’s needs."}
   ]},
   {id:"t1u5-q15", lesson:"t1u5-l2", level:3, q:"Ana posts a photo of her child’s first school day, with location turned off when sharing. The photo shows the school’s name on the gate. What’s the remaining risk?", options:[
     {t:"The background reveals the location, so strangers could still find where her child goes to school", ok:true, why:"Visual clues can reveal as much as GPS. Check backgrounds before posting."},
     {t:"None: removing GPS removes all location information", why:"GPS is only one clue; signs, uniforms and landmarks are others."},
     {t:"The photo’s file size reveals the school", why:"File size reveals nothing about place."},
     {t:"Turning off location also hides the picture", why:"The picture itself is unchanged; only GPS metadata is removed."}
   ]},
   {id:"t1u5-q16", lesson:"t1u5-l2", level:1, q:"Which Apple feature can immediately stop sharing your information with all people and apps?", options:[
     {t:"Safety Check’s Emergency Reset", ok:true, why:"Emergency Reset is an immediate, universal reset of sharing and access."},
     {t:"App Store Data safety", why:"Data safety is Google Play’s label, and it doesn’t change any sharing."},
     {t:"Private Browsing in Safari", why:"Private browsing only affects one browser session."},
     {t:"Low Power Mode", why:"Low Power Mode saves battery; it doesn’t change sharing."}
   ]},
   {id:"t1u5-q17", lesson:"t1u5-l2", level:2, q:"Mei turns off personalised ads in My Ad Center. What should she expect?", options:[
     {t:"Roughly the same number of ads, chosen without her Google profile", ok:true, why:"Personalisation changes how ads are chosen, not how many there are."},
     {t:"No more ads on any website", why:"Ads continue; they’re just less personalised."},
     {t:"All her Google data is deleted", why:"Deleting data is done separately, in activity controls."},
     {t:"Her account is closed", why:"Ad settings don’t close accounts."}
   ]},
   {id:"t1u5-q18", lesson:"t1u5-l2", level:3, q:"Hana suspects her ex-partner, who once knew her passwords, can still see her location. What’s the most careful approach?", options:[
     {t:"Review sharing with a tool such as Safety Check, aware that changes may be noticed, and consider contacting a support service to plan safely", ok:true, why:"Checking sharing is the right step, but safety planning matters because the other person may notice changes."},
     {t:"Do nothing; sharing always stops when a relationship ends", why:"Shared accounts and family-sharing features can continue indefinitely."},
     {t:"Post publicly that she’s changing all her settings", why:"That could alert the person and increase risk."},
     {t:"Turn on private browsing", why:"Private browsing doesn’t affect location sharing."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u5-q19", lesson:"t1u5-l3", level:1, q:"Under the GDPR, which right lets you get a copy of the personal data an organisation holds about you?", options:[
     {t:"The right of access", ok:true, why:"Access gives you a copy plus information on purposes, recipients and retention."},
     {t:"The right to erasure", why:"Erasure is about deletion, not getting a copy."},
     {t:"The right to restrict processing", why:"Restriction pauses use; it doesn’t give you a copy."},
     {t:"The right to object", why:"Objection asks them to stop some uses."}
   ]},
   {id:"t1u5-q20", lesson:"t1u5-l3", level:1, q:"How long does an organisation normally have to answer a GDPR access request?", options:[
     {t:"One month, extendable by two further months for complex requests", ok:true, why:"Article 12(3) sets one month, with a possible two-month extension explained within the first month."},
     {t:"One year", why:"Far longer than the GDPR allows."},
     {t:"24 hours", why:"The law requires no undue delay and at most one month, not 24 hours."},
     {t:"There’s no deadline", why:"There is: one month as a rule."}
   ]},
   {id:"t1u5-q21", lesson:"t1u5-l3", level:2, q:"A sign-up form has a marketing box that is already ticked. Under the GDPR, is that valid consent?", options:[
     {t:"No: consent needs a clear action by the person, and a pre-ticked box isn’t one", ok:true, why:"Valid consent must be unambiguous, given by a clear affirmative action."},
     {t:"Yes, if the user doesn’t untick it", why:"Silence or inactivity isn’t valid consent."},
     {t:"Yes, as long as the box is green", why:"Colour has nothing to do with validity."},
     {t:"Only if the company is based in the EU", why:"The GDPR can apply to non-EU companies too, and a pre-ticked box isn’t valid either way."}
   ]},
   {id:"t1u5-q22", lesson:"t1u5-l3", level:2, q:"Which is NOT one of the GDPR’s six lawful bases for using personal data?", options:[
     {t:"The company’s wish to keep data forever “just in case”", ok:true, why:"That isn’t a lawful basis, and it conflicts with the storage-limitation principle."},
     {t:"Consent", why:"Consent is one of the six."},
     {t:"Legal obligation", why:"Legal obligation is one of the six (for example, tax records)."},
     {t:"Legitimate interests", why:"Legitimate interests is one of the six, balanced against your interests."}
   ]},
   {id:"t1u5-q23", lesson:"t1u5-l3", level:3, q:"Kenji objects to a shop using his data for direct marketing. The shop says it has a “legitimate interest” in marketing and will continue. Under the GDPR, who is right?", options:[
     {t:"Kenji: objections to direct marketing must always be respected", ok:true, why:"Article 21(3) says once you object to direct marketing, the data must no longer be used for it."},
     {t:"The shop: legitimate interests always override objections", why:"For direct marketing, the objection is absolute."},
     {t:"Neither; objections only apply to government bodies", why:"The right to object applies to companies too."},
     {t:"The shop, if it sends fewer emails", why:"Reducing marketing isn’t enough; it must stop for that purpose."}
   ]},
   {id:"t1u5-q24", lesson:"t1u5-l3", level:2, q:"When skimming a privacy policy, which search word is most useful for finding out whether your data is sold?", options:[
     {t:"sell", ok:true, why:"Searching for “sell” (and “share”) finds the sections on selling or sharing data."},
     {t:"welcome", why:"Unlikely to lead to anything about data sales."},
     {t:"font", why:"Unrelated to data practices."},
     {t:"login", why:"Login sections cover account access, not data sales."}
   ]},
   {id:"t1u5-q25", lesson:"t1u5-l3", level:3, q:"Fatima receives an email offering to “recover all your data from Facebook” for a fee, asking for her password and ID. What should she do?", options:[
     {t:"Ignore it and use Meta’s own Download your information tool, which is free", ok:true, why:"You never need to pay a third party or give your password to use your own rights."},
     {t:"Pay, since data requests always cost money", why:"Using your rights is normally free, and self-service downloads are free."},
     {t:"Send her password but not her ID", why:"Sharing her password gives control of her account to a likely scammer."},
     {t:"Forward it to all her contacts", why:"That spreads a probable scam."}
   ]},
   {id:"t1u5-q26", lesson:"t1u5-l3", level:2, q:"Which example shows that the right to erasure is not absolute?", options:[
     {t:"A bank keeps some transaction records after closing an account, because the law requires it", ok:true, why:"Legal obligations are an exception to erasure."},
     {t:"A gym deletes an unused account on request", why:"That’s erasure working normally."},
     {t:"A shop sends a copy of a customer’s data", why:"That’s the right of access, not erasure."},
     {t:"A company corrects a wrong address", why:"That’s rectification."}
   ]},
   {id:"t1u5-q27", lesson:"t1u5-l3", level:3, q:"Oluwaseun’s access request is ignored for two months with no extension notice. What’s the appropriate next step under the GDPR?", options:[
     {t:"Complain to his national data protection authority", ok:true, why:"The one-month deadline passed without an extension; the regulator is the route for complaints."},
     {t:"Send the same request every day", why:"That isn’t necessary and may be treated as excessive; escalation to the regulator is the proper route."},
     {t:"Assume he has no rights", why:"He does; the organisation failed to meet its deadline."},
     {t:"Pay a fee to speed it up", why:"Access requests are normally free; paying isn’t the remedy."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u5-q28", lesson:"t1u5-l4", level:1, q:"When does a photo you take become protected by copyright?", options:[
     {t:"Automatically, as soon as you take it", ok:true, why:"Under the Berne Convention, protection can’t depend on formalities like registration."},
     {t:"Only after you register it", why:"Registration isn’t required in Berne countries."},
     {t:"Only if you add a © symbol", why:"No notice is needed."},
     {t:"Only after it is published online", why:"Publication isn’t required."}
   ]},
   {id:"t1u5-q29", lesson:"t1u5-l4", level:2, q:"Which statement about fair use (US) is accurate?", options:[
     {t:"It’s decided case by case using four factors, and there is no fixed safe amount", ok:true, why:"The US Copyright Office says there is no formula; courts weigh purpose, nature, amount and market effect."},
     {t:"Anything under 10% of a work is automatically fair", why:"There’s no percentage rule."},
     {t:"Giving credit makes any use fair", why:"Credit doesn’t by itself make a use fair."},
     {t:"Fair use applies identically in every country", why:"It’s a US doctrine; other countries have fair dealing or listed exceptions."}
   ]},
   {id:"t1u5-q30", lesson:"t1u5-l4", level:1, q:"What does the “NC” element in a Creative Commons licence mean?", options:[
     {t:"Non-commercial use only", ok:true, why:"NC limits use to purposes not primarily intended for commercial advantage or money."},
     {t:"No credit needed", why:"Every CC licence requires credit (BY)."},
     {t:"No changes allowed", why:"That’s ND (NoDerivatives)."},
     {t:"New copies must use the same licence", why:"That’s SA (ShareAlike)."}
   ]},
   {id:"t1u5-q31", lesson:"t1u5-l4", level:1, q:"What does TASL stand for in attribution?", options:[
     {t:"Title, Author, Source, Licence", ok:true, why:"Creative Commons’ recommended parts of an attribution."},
     {t:"Text, Audio, Software, Link", why:"These aren’t the parts of an attribution."},
     {t:"Title, Address, Signature, Logo", why:"An attribution doesn’t need an address, signature or logo."},
     {t:"Time, Author, Size, Location", why:"Size and time aren’t attribution elements."}
   ]},
   {id:"t1u5-q32", lesson:"t1u5-l4", level:2, q:"Which attribution is the most complete?", options:[
     {t:"“Harbour at dawn” by Mei Lin is licensed under CC BY 4.0 (title linked to the photo’s page, licence linked)", ok:true, why:"It includes title, author, source link and licence with version."},
     {t:"Photo: Creative Commons", why:"Creative Commons is an organisation, not a licence, and nothing else is given."},
     {t:"Image from Google", why:"A search engine isn’t the source, and author and licence are missing."},
     {t:"Photo by Mei Lin", why:"Author only; no source or licence."}
   ]},
   {id:"t1u5-q33", lesson:"t1u5-l4", level:3, q:"Sione wants to print and sell posters using a CC BY-NC-SA photo. What does the licence allow?", options:[
     {t:"Not selling: NC rules out commercial use, so he’d need the photographer’s separate permission", ok:true, why:"Selling posters is commercial, which NC doesn’t allow."},
     {t:"Selling, as long as he credits the photographer", why:"Credit doesn’t override NC."},
     {t:"Selling, if he shares his poster design under the same licence", why:"SA is about adaptations; it doesn’t remove the NC condition."},
     {t:"Selling, if he prints fewer than 100", why:"The licence has no quantity exception."}
   ]},
   {id:"t1u5-q34", lesson:"t1u5-l4", level:2, q:"Which work is in the public domain in practically every country?", options:[
     {t:"A play by an author who died more than 300 years ago", ok:true, why:"Copyright terms based on the author’s life have long expired for such works."},
     {t:"A film released this year", why:"It’s protected for decades."},
     {t:"A friend’s blog post from last week", why:"Protected automatically."},
     {t:"A song by a living musician", why:"Protected during the musician’s life and long after."}
   ]},
   {id:"t1u5-q35", lesson:"t1u5-l4", level:2, q:"What does CC0 do?", options:[
     {t:"Lets a creator waive their rights so the work is as close to the public domain as the law allows", ok:true, why:"CC0 is a waiver, with a fallback licence where a waiver isn’t effective."},
     {t:"Means the work costs zero but can’t be changed", why:"CC0 imposes no conditions, including on changes."},
     {t:"Means “credit zero times”, but non-commercial only", why:"CC0 has no NC condition."},
     {t:"Is the strictest CC licence", why:"It’s the most permissive option."}
   ]},
   {id:"t1u5-q36", lesson:"t1u5-l4", level:3, q:"Lucía translates a CC BY-SA 4.0 article into Spanish for a community website. What must she do?", options:[
     {t:"Credit the original (TASL), note that it’s a translation, and license her translation under CC BY-SA or a compatible licence", ok:true, why:"A translation is an adaptation; SA requires the same or a compatible licence."},
     {t:"Nothing; translations are new works with no conditions", why:"Translations are adaptations of the original and inherit its conditions."},
     {t:"She can’t translate it, because SA forbids changes", why:"SA allows changes; ND is the condition that forbids sharing adaptations."},
     {t:"Make it non-commercial only", why:"BY-SA has no NC condition."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u5-q37", lesson:"t1u5-l5", level:1, q:"Why does infinite scroll make it hard to stop?", options:[
     {t:"It removes the natural end of the page, so there’s no stopping point", ok:true, why:"New content keeps loading, so stopping always needs a deliberate decision."},
     {t:"It makes the phone heavier", why:"It’s a design feature, not hardware."},
     {t:"It only works at night", why:"It works at any time."},
     {t:"It turns off notifications", why:"Unrelated: notifications are a different design technique."}
   ]},
   {id:"t1u5-q38", lesson:"t1u5-l5", level:1, q:"Which is an example of a dark pattern?", options:[
     {t:"A decline button that says “No thanks, I don’t care about my health”", ok:true, why:"That’s confirmshaming: using guilt to push a choice."},
     {t:"Two equally sized buttons: “Accept” and “Reject”", why:"Equal, clear choices are the opposite of a dark pattern."},
     {t:"A clear price shown at the start of checkout", why:"Showing full prices early is honest design."},
     {t:"A cancel button in account settings", why:"Easy cancellation is good practice."}
   ]},
   {id:"t1u5-q39", lesson:"t1u5-l5", level:2, q:"What does Article 25 of the EU’s Digital Services Act say about online platforms’ interfaces?", options:[
     {t:"They must not be designed to deceive or manipulate users", ok:true, why:"It names examples such as making cancelling harder than subscribing."},
     {t:"They must show at least ten ads per page", why:"No such rule exists."},
     {t:"They must use infinite scroll", why:"Nothing requires that."},
     {t:"They must be available only in English", why:"Unrelated to Article 25."}
   ]},
   {id:"t1u5-q40", lesson:"t1u5-l5", level:2, q:"On an Android phone, which built-in tool sets a daily limit for one app?", options:[
     {t:"App timers in Digital Wellbeing", ok:true, why:"App timers set a daily limit per app, resetting at midnight."},
     {t:"Google Play Protect", why:"A security scanner, not a time limit."},
     {t:"Chrome Incognito", why:"A private browsing mode, unrelated to app limits."},
     {t:"Advertising ID settings", why:"These affect ad personalisation."}
   ]},
   {id:"t1u5-q41", lesson:"t1u5-l5", level:3, q:"Dmitri’s weekly report shows 6 hours a day and he feels ashamed. Which response best fits a healthy, non-judgemental approach?", options:[
     {t:"Look at which time he valued and which left him feeling worse, then change one thing about the second", ok:true, why:"Not all screen time is equal; small targeted changes work better than guilt."},
     {t:"Delete every app immediately", why:"Drastic and likely to remove things he values, such as calls with family."},
     {t:"Ignore the report forever", why:"The report is useful information when used without judgement."},
     {t:"Assume he has no self-control", why:"These designs work on everyone; blame doesn’t help."}
   ]},
   {id:"t1u5-q42", lesson:"t1u5-l5", level:1, q:"What is doxxing?", options:[
     {t:"Gathering someone’s personal information and publishing it to harm them", ok:true, why:"That matches the US DHS definition."},
     {t:"Sending someone a documents folder", why:"The word sounds like “docs”, but it means exposing personal information maliciously."},
     {t:"Blocking an account", why:"Blocking is a protective tool."},
     {t:"Backing up your files", why:"Backing up is a protective habit, not a form of harassment."}
   ]},
   {id:"t1u5-q43", lesson:"t1u5-l5", level:2, q:"Why should you save evidence before blocking someone who is harassing you?", options:[
     {t:"Blocking can hide the messages, and evidence is needed for reports to platforms or police", ok:true, why:"Official guidance stresses keeping screenshots, links and dates."},
     {t:"Blocking is illegal without evidence", why:"You can block anyone at any time; the point is preserving evidence."},
     {t:"The platform deletes your account if you block first", why:"Blocking doesn’t delete your account."},
     {t:"Evidence isn’t needed at all", why:"Evidence makes reports far more effective."}
   ]},
   {id:"t1u5-q44", lesson:"t1u5-l5", level:3, q:"A post shares Kenji’s home address with a message encouraging people to “visit”. According to official guidance, when should he involve the police?", options:[
     {t:"Now: threats to physical safety should be reported to police, alongside reporting to the platform", ok:true, why:"StopBullying.gov and DHS guidance say threats of violence should go to law enforcement."},
     {t:"Only after the post gets 1,000 likes", why:"There’s no popularity threshold for a threat."},
     {t:"Never; online posts aren’t police matters", why:"Threats and stalking online can be crimes."},
     {t:"Only if he replies first", why:"Replying isn’t a requirement, and it may escalate things."}
   ]},
   {id:"t1u5-q45", lesson:"t1u5-l5", level:2, q:"A friend is being mocked in a group chat. Which action helps without making things worse?", options:[
     {t:"Ask what would help, and offer to help save screenshots and report", ok:true, why:"Letting them lead, plus practical help with evidence and reporting, is supportive."},
     {t:"Share the messages widely to show how bad they are", why:"That spreads the harmful content further."},
     {t:"Reply angrily in the chat", why:"Retaliation can escalate the situation."},
     {t:"Tell them it’s their fault for being online", why:"The person causing harm is responsible, not the target."}
   ]}
  ]
});
