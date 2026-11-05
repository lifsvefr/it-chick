/* Track 1 · Unit 6 · Spotting misinformation */
ICA.addUnit({
  id:"t1u6", track:"t1", n:6, title:"Spotting misinformation", icon:"🧭",
  blurb:"Why false and misleading information spreads, and the quick, practical moves professional fact-checkers use: reading laterally, SIFT, reverse image search, judging sources, reading numbers and charts, and checking what AI tools tell you.",
  goals:[
    "Tell misinformation, disinformation and malinformation apart, and explain why false content spreads",
    "Check a claim or an unfamiliar source in a minute or two using lateral reading and SIFT",
    "Trace images and videos to their origin, and know what content credentials can and can’t tell you",
    "Search precisely and judge sources by expertise, evidence and purpose",
    "Spot misleading numbers and charts, check AI answers, and share and correct kindly"
  ],
  read:[
    {book:"wlsf", where:"Part I “Four Moves and a Habit” (Chapters 1–3), Part II “Look for Previous Work” (Chapters 4–6), Part III “Go Upstream” (Chapters 7–15) and Part IV “Read Laterally” (Chapters 16–30)", note:"Written in 2017, before Caulfield renamed his moves SIFT (2019). Some screenshots and platform names are dated; the methods still work."},
    {book:"wss", where:"Chapter 1, Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”: “Conducting Effective Searches” and “Conducting Business Research”"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u6-l1", title:"What misinformation is and why it spreads", minutes:50,
   goals:[
     "Tell misinformation, disinformation and malinformation apart using two questions: is it false, and is it meant to harm?",
     "Recognise seven common types, from satire to fabricated content",
     "Explain why false content often spreads faster than true content",
     "Describe confirmation bias, filter bubbles and echo chambers, and what research does and doesn’t show about them"
   ],
   learn:[
    {h:"More than “fake news”", body:[
      {lead:"“Fake news” sounds like one thing. In practice, misleading information comes in many shapes, from honest mistakes to careful deceptions to true facts used as weapons."},
      "Think about how a rumour travels through a school or a workplace. One person invents it, or misunderstands something. Others repeat it because they believe it, or because it’s funny, or because it fits what they already suspected. By the time it reaches you, nobody remembers where it started. Online, the same thing happens to millions of people in hours.",
      "In 2017 two researchers, Claire Wardle and Hossein Derakhshan, wrote a report for the Council of Europe called *Information Disorder*. They avoided the phrase “fake news”, partly because it’s too vague to describe the problem and partly because politicians around the world had started using it to dismiss news coverage they disliked. Instead they asked two questions about any piece of content: **Is it false?** and **Is it meant to harm?** The answers give three kinds of “information disorder”:",
      {table:[
        ["Kind","False?","Meant to harm?","Example"],
        ["[[misinformation|Misinformation]]","Yes","No","Amara shares a post saying a local road is closed, believing it. The closure was last year."],
        ["[[disinformation|Disinformation]]","Yes","Yes","Someone invents a story that a rival bakery’s bread made people ill, to drive away its customers."],
        ["[[malinformation|Malinformation]]","No: it’s true","Yes","A real private address, or a genuine private message, is posted publicly to embarrass or harass someone."]
      ]},
      {fig:'<svg viewBox="0 0 340 335"><circle class="d-gold" cx="170" cy="115" r="95" stroke-width="2"/><circle class="d-rose" cx="170" cy="225" r="95" stroke-width="2" fill-opacity="0.6"/><text x="170" y="62" text-anchor="middle">Misinformation</text><text class="s" x="170" y="80" text-anchor="middle">false, but no</text><text class="s" x="170" y="95" text-anchor="middle">intent to harm</text><text x="170" y="165" text-anchor="middle">Disinformation</text><text class="s" x="170" y="183" text-anchor="middle">false and</text><text class="s" x="170" y="198" text-anchor="middle">meant to harm</text><text x="170" y="252" text-anchor="middle">Malinformation</text><text class="s" x="170" y="270" text-anchor="middle">true, but used</text><text class="s" x="170" y="285" text-anchor="middle">to cause harm</text><text x="8" y="40">FALSE</text><text class="s" x="8" y="56">content</text><text x="270" y="300">MEANT</text><text class="s" x="270" y="316">to harm</text></svg>', alt:"Two overlapping circles. The top circle is false content; the bottom circle is content meant to harm. The top-only part is misinformation (false, no intent to harm), the overlap is disinformation (false and meant to harm), and the bottom-only part is malinformation (true, but used to cause harm).", cap:"Two questions sort most cases: is it false, and is it meant to harm? (After Wardle & Derakhshan, 2017.)"},
      {key:"Misinformation is false but shared in good faith. Disinformation is false on purpose. Malinformation is true but used to hurt. Much of what reaches you is misinformation: shared by real people who believe it."}
    ]},
    {h:"Seven types, from a joke to a fabrication", body:[
      "In a 2019 guide for the research group First Draft, Wardle described seven common types of misleading content. They run roughly from least to most deliberately deceptive. Knowing the type helps you know what to check.",
      {table:[
        ["Type","What it is","What to check"],
        ["[[satire|Satire]] or parody","A joke that isn’t meant to fool anyone, but can, once it loses its context.","Where it first appeared. Is the original site a humour site?"],
        ["False connection","The headline, picture or caption doesn’t match the story. Much [[clickbait]] works this way.","Read past the headline. Does the article actually say that?"],
        ["Misleading content","Real information used selectively to frame an issue or a person.","What’s missing? What would the full picture show?"],
        ["[[false-context|False context]]","Genuine content shared with the wrong date, place or story.","When and where was it really made?"],
        ["[[imposter-content|Imposter content]]","Something pretends to come from a real source, such as a fake logo or account.","Is it really from them? Check their official site or account."],
        ["Manipulated content","Genuine material that has been edited to deceive.","Can you find the unedited original?"],
        ["Fabricated content","Completely made up, designed to deceive.","Does any independent source confirm any of it?"]
      ]},
      "Two historical cases show how old these types are:",
      {list:[
        "**Satire mistaken for fact.** On 1 April 1957 the BBC’s current-affairs programme *Panorama* showed a short film of Swiss farmers “harvesting” spaghetti from trees. It was an April Fool’s joke, but it ran on a trusted factual programme, and many viewers phoned the BBC asking how to grow their own spaghetti tree.",
        "**Staged photos.** In 1917 two young cousins in Cottingley, England, photographed themselves with “fairies”. A famous author, Arthur Conan Doyle, helped publicise the photos in the early 1920s. In 1983 the cousins admitted that the fairies were cardboard cut-outs. The photos were genuine photographs of a fake scene: fabricated content made with a real camera."
      ]},
      {tip:"In practice the most common type you’ll meet isn’t a clever fake. It’s a real photo, video or quote with the **wrong context**: an old flood photo shared as today’s, or a real quote attached to the wrong person. Lesson 3 shows how to check this."}
    ]},
    {h:"Intent is often invisible, and it changes as content travels", body:[
      "You usually can’t see why someone posted something. The same piece of content can also change category as it moves. Wardle and Derakhshan describe three parts to watch: the **agent** (who made or shared it, and why), the **message** itself, and the **interpreter** (the person who receives it and decides what it means).",
      {ex:"1. A humour website posts: “Council to replace all street lights with candles to save money.” Its regular readers know it’s a joke. (Satire.)\n2. Someone takes a screenshot that crops off the site’s name and posts it to a local group. (Now it has lost its context.)\n3. Hundreds of residents share it, worried and angry. They believe it. (Misinformation.)\n4. A page that wants to stir up anger against the council keeps posting it, knowing it’s false. (Disinformation.)\n5. Mei sees it in her feed, from a friend she trusts.", label:"Worked example: one post, three categories"},
      "This is why the most useful habit is to **judge the claim, not the person sharing it**. Your friend who shared the candle story isn’t a liar. They were fooled, as anyone can be. Asking “is this true?” is more productive than asking “who is lying?”"
    ]},
    {h:"Why false content spreads", body:[
      "In 2018 three researchers at the Massachusetts Institute of Technology (MIT), Soroush Vosoughi, Deb Roy and Sinan Aral, published one of the largest studies of the question in the journal *Science*. They studied about 126,000 stories shared on Twitter between 2006 and 2017, each one checked as true or false by independent fact-checking organisations. They found:",
      {list:[
        "False stories were about **70% more likely to be reshared** than true ones.",
        "False stories reached 1,500 people about **six times faster** than true ones.",
        "False stories were more **novel**: they contained more surprising information, and people like to share what seems new.",
        "Replies to false stories expressed more **surprise, fear and disgust**. Replies to true stories expressed more sadness, anticipation, joy and trust.",
        "Automated accounts (bots) spread true and false stories at similar rates. The difference came from **people**."
      ]},
      "Several other forces add to this:",
      {list:[
        "**Speed and ease.** Sharing takes one tap. Checking takes a minute. Our feeds reward the tap.",
        "**Ranking by engagement.** Many platforms use a [[recommendation-algorithm|recommendation algorithm]] that shows you more of whatever people react to strongly. Content that provokes outrage or amazement tends to do well. (Unit 5’s {{attention-design}} entry explains how apps compete for attention.)",
        "**Social proof.** A post with thousands of shares *feels* checked. It isn’t: popularity measures attention, not accuracy.",
        "**Repetition.** Psychologists have found that hearing a claim several times makes it feel more familiar, and familiar claims feel truer. This is called the **illusory truth effect**, and it happens even to people who know better."
      ]},
      {key:"False content spreads because it is surprising and emotional, and because people (not just bots) share it quickly. Slowing down is one of the most effective counter-moves."}
    ]},
    {h:"Your brain is part of the system", body:[
      "[[confirmation-bias|Confirmation bias]] is our tendency to notice, believe and remember information that fits what we already think, and to pick holes in information that doesn’t. Everyone has it. It isn’t a sign of low intelligence or of any political view; it’s how human attention works.",
      "Confirmation bias doesn’t make you believe *anything*. It makes you check less carefully when a claim feels right. That’s exactly when misinformation slips through. A useful test: **would I check this if it said the opposite?** If the answer is yes, check it now.",
      {tip:"Strong emotion is a signal to slow down, not a sign the content is false. Plenty of true news is upsetting. The point is that strong feelings make all of us less careful, so they’re the moment to pause."}
    ]},
    {h:"Filter bubbles and echo chambers: what the research says", body:[
      "Two ideas are often used to explain misinformation:",
      {list:[
        "A [[filter-bubble|filter bubble]] is the idea, popularised by the writer Eli Pariser in 2011, that algorithms personalise what you see so much that you stop meeting different views without noticing.",
        "An [[echo-chamber|echo chamber]] is a space, online or offline, where people mostly hear views like their own, repeated back to them, often because they chose those sources."
      ]},
      "Both sound convincing, but the evidence is more mixed than their popularity suggests. In 2022 the Reuters Institute for the Study of Journalism at the University of Oxford reviewed the research (Ross Arguedas, Robertson, Fletcher and Nielsen). Its main conclusions:",
      {list:[
        "**Echo chambers are smaller than often assumed.** In the UK, the review estimated that about 6–8% of the public are in politically partisan online news echo chambers. The United States was an outlier, with a larger share. Most people have fairly varied news diets.",
        "**Little support for the filter-bubble idea in news.** Studies generally found that algorithmic selection by search engines and social media led to *slightly more diverse* news use, not less, partly because people stumble on news they weren’t looking for.",
        "**Self-selection matters more than algorithms.** People’s own choices, especially those of a small, highly engaged and strongly partisan minority, drive most of the narrowing that does exist.",
        "**Open questions remain**, especially outside the US, for newer platforms, and for topics other than political news. Small, very active groups can still shape wider debate."
      ]},
      {key:"Algorithms shape what you see, but research suggests your own choices shape it more. You can widen your view on purpose: follow a few reliable sources you wouldn’t normally choose, and check surprising claims before sharing."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Only gullible people fall for misinformation.”** Studies of professionals, students and the public show anyone can be fooled, especially in areas they don’t know well or when a claim fits their views.",
        "**“Misinformation means lies.”** Most is shared by people who believe it. And some harmful content (malinformation) is true.",
        "**“It’s a real photo, so the post is true.”** Real photos with false captions are one of the most common types.",
        "**“It’s mostly bots.”** Bots exist, but the 2018 MIT study found people drove the faster spread of false stories.",
        "**“Algorithms trap everyone in a bubble.”** The evidence for news suggests bubbles are smaller than feared, and personal choices matter more.",
        "**“I’d never share something false.”** Almost everyone has. What matters is a habit of checking before sharing, and correcting when you get it wrong (Lesson 5)."
      ]}
    ]}
   ],
   try:[
    {id:"t1u6-l1-x1", type:"sort", q:"Sort each case using the two questions: is it false, and is it meant to harm?", buckets:["Misinformation (false, no harm meant)","Disinformation (false, harm meant)","Malinformation (true, used to harm)"], items:[
      {t:"Kenji shares an old storm warning, believing it’s for today.", b:0, why:"False (it’s out of date), but Kenji is trying to help. That’s misinformation."},
      {t:"A company invents reviews claiming a rival’s product caught fire.", b:1, why:"Made up on purpose to damage a competitor: false and meant to harm."},
      {t:"Someone posts a neighbour’s real home address with a call to “visit” them.", b:2, why:"The address is true, but it’s published to intimidate. True information used to harm is malinformation."},
      {t:"Ana forwards a fake “free supermarket voucher” link, hoping to help friends.", b:0, why:"Ana believes it’s real. The scammer who made it spread disinformation, but Ana’s share is misinformation."},
      {t:"An account edits a real video to make a local official appear to say something they never said, and posts it to stir up anger.", b:1, why:"Manipulated on purpose to deceive and inflame: disinformation."},
      {t:"A former partner shares a genuine private message to humiliate someone.", b:2, why:"The message is genuine. Using it to hurt someone makes it malinformation."}
    ]},
    {id:"t1u6-l1-x2", type:"match", q:"Match each example to its type (from Wardle’s seven types).", pairs:[
      ["A humour site’s made-up story about a city replacing buses with camels is shared as real news.","Satire or parody","It was a joke on its original site. It fooled people only after losing that context."],
      ["The headline says “Coffee cures cancer”; the article says one lab study found a possible link in mice.","False connection","The headline doesn’t match what the content actually says."],
      ["A genuine 2016 photo of a crowded beach is shared as “today, during the heatwave warning”.","False context","The photo is real, but the date and story attached to it are wrong."],
      ["An account copies a real news organisation’s logo and name to post invented stories.","Imposter content","It pretends to be a genuine source."],
      ["A real photo is edited to add smoke rising from a building.","Manipulated content","Genuine imagery altered to deceive."],
      ["A website invents a scientific study, complete with fake authors, that never happened.","Fabricated content","Entirely made up, with nothing genuine underneath."]
    ]},
    {id:"t1u6-l1-x3", type:"spot", q:"This post is spreading in a community group. Tap the parts that are warning signs that it’s built to spread rather than to inform.", ask:"is a warning sign", parts:[
      {t:"🚨 SHARE BEFORE THEY DELETE THIS!", flag:true, why:"Urgency plus a hint of a cover-up. It pushes you to share before thinking, and suggests that anyone who disagrees is hiding something."},
      " ", {t:"Scientists are SHOCKED:", flag:true, why:"Emotional language and capitals. Real scientific findings are usually described with names, institutions and some caution."},
      " ", {t:"a common kitchen spice cures memory loss in 7 days.", flag:true, why:"A surprising, absolute claim (“cures”, “7 days”). Extraordinary claims need strong evidence, and none is given."},
      " ", {t:"Source: my cousin, who is a nurse.", flag:true, why:"A second-hand anecdote isn’t evidence of a cure. There’s no study, no named researcher, nothing to check."},
      "\n", {t:"Posted 2 h ago", flag:false, why:"A timestamp is normal on any post. It tells you nothing about accuracy either way."},
      " · ", {t:"12K shares", flag:false, why:"Popularity isn’t a sign of falsehood (true posts go viral too), but it isn’t evidence of truth either. It measures attention, not accuracy."}
    ], why:"The useful response is to stop and look for better coverage: has any reliable health source reported this? (Lesson 2.)"},
    {id:"t1u6-l1-x4", type:"mcq", q:"According to the 2018 MIT study of stories shared on Twitter, what mainly explained why false stories spread faster than true ones?", options:[
      {t:"People shared them more, partly because they were more novel and emotional", ok:true, why:"Right. The researchers found the difference held even after removing bots. False stories were more surprising and drew more surprise, fear and disgust."},
      {t:"Bots shared false stories far more than true ones", why:"The study found bots spread true and false stories at similar rates. People drove the difference."},
      {t:"False stories came from more popular accounts", why:"The opposite: the study found that accounts spreading false stories tended to have fewer followers. The stories spread despite that."},
      {t:"The platform deliberately promoted false stories", why:"The study didn’t find or claim that. It measured how people reshared fact-checked stories."}
    ]},
    {id:"t1u6-l1-x5", type:"mcq", q:"Tomás says: “Algorithms have trapped almost everyone in a bubble where they only see their own side.” What does the 2022 Reuters Institute review of research suggest?", options:[
      {t:"Partisan news echo chambers are smaller than often assumed, and people’s own choices matter more than algorithms", ok:true, why:"The review estimated about 6–8% of the UK public in partisan online news echo chambers, and found algorithmic selection generally led to slightly more diverse news use."},
      {t:"Tomás is right: research shows nearly everyone is in an algorithmic bubble", why:"That’s the popular idea, but the reviewed studies didn’t support it for news use in most countries studied."},
      {t:"Algorithms have no effect at all on what anyone sees", why:"Too strong. Algorithms clearly shape feeds; the finding is about their effect on the diversity of news people use, which was slightly positive on average."},
      {t:"Echo chambers only exist offline", why:"The review discusses online echo chambers. They exist; they’re just smaller than often claimed."}
    ]},
    {id:"t1u6-l1-x6", type:"order", q:"Put this satirical post’s journey in order, from joke to misinformation.", items:[
      {t:"A humour site publishes an obviously made-up story for its readers.", why:"It starts as satire, understood as a joke in its original setting."},
      {t:"Someone screenshots it and crops off the site’s name.", why:"The context that signalled “joke” is lost."},
      {t:"The screenshot is posted in a large group without comment.", why:"Now it looks like a news report to people who never saw the original."},
      {t:"People who believe it share it, worried and angry.", why:"Sincere sharing of a false claim: it has become misinformation."},
      {t:"A fact-checker traces it back to the humour site and publishes the origin.", why:"Tracing to the original is how the story is finally corrected (SIFT’s “T”, Lesson 2)."}
    ]},
    {id:"t1u6-l1-x7", type:"mcq", q:"Hana notices she checks claims carefully when they disagree with her views, but rarely when they agree. What is this, and what’s a good counter-habit?", options:[
      {t:"Confirmation bias; ask “would I check this if it said the opposite?” and check it if so", ok:true, why:"Confirmation bias lowers our guard for agreeable claims. Deliberately applying the same checks to both sides counters it."},
      {t:"A filter bubble; delete her social media accounts", why:"A filter bubble is about what an algorithm shows her. This is about how she treats what she sees, which is confirmation bias. Deleting accounts doesn’t fix that."},
      {t:"Malinformation; report the posts", why:"Malinformation is true information used to harm. Hana’s pattern is a bias in her own checking."},
      {t:"Nothing to worry about; only claims she disagrees with need checking", why:"Agreeable claims are exactly the ones that slip through unchecked."}
    ]}
   ],
   apply:{intro:"Look at your own information diet with fresh eyes. You don’t need to change anything yet; just notice.", tasks:[
     {t:"Map where your news comes from", how:["For two days, jot down every place you came across news or claims about the world: apps, websites, group chats, TV, radio, podcasts, conversations.","For each, note whether you chose it (you follow it, you subscribe) or it was chosen for you (a recommended feed, a forwarded message).","Note which ones you trust most, and why."], write:"Places I met news… Chosen by me or by a feed… The ones I trust most, and why…"},
     {t:"Classify three posts", how:["Find three posts or messages that made a claim and got a strong reaction (yours or other people’s).","For each, ask: is it false, misleading or true as far as you can tell? Was it meant to inform, amuse, sell or harm?","Try to name its type from the seven (satire, false connection, misleading content, false context, imposter, manipulated, fabricated), or “seems accurate”. Don’t share or comment while you do this."], write:"Post 1… type… Post 2… type… Post 3… type…"},
     {t:"Catch your own confirmation bias", how:["Think of a claim you recently accepted without checking because it fitted what you believed.","Ask: would I have checked this if it said the opposite?","If yes, spend two minutes searching for it now, and note what you find."], write:"The claim… What I found…"}
   ], proof:"A short private note of where your news comes from, three posts classified by type, and one claim you’ve now checked."},
   read:[
     {book:"wlsf", where:"Part I “Four Moves and a Habit”: Chapter 1 “Why This Book?” and Chapter 3 “Building a Fact-Checking Habit by Checking Your Emotions”"},
     {book:"soc", where:"Background reading: Chapter 8 “Media and Technology”, Section 8.4 “Theoretical Perspectives on Media and Technology” (gatekeeping: who decides what reaches an audience)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u6-l2", title:"Checking claims fast: lateral reading and SIFT", minutes:55,
   goals:[
     "Explain why professional fact-checkers judge a source by leaving it, not by studying it",
     "Read laterally and practise click restraint in search results",
     "Use Mike Caulfield’s four SIFT moves: Stop, Investigate the source, Find better coverage, Trace to the original",
     "Use fact-checking organisations and Wikipedia well, knowing their strengths and limits"
   ],
   learn:[
    {h:"Why reading carefully isn’t enough", body:[
      {lead:"Most of us were taught to judge a website by studying it closely: the design, the About page, the spelling, the references. Research shows that’s exactly how experts get fooled."},
      "In 2017 Sam Wineburg and Sarah McGrew of the Stanford History Education Group (now an independent non-profit called the Digital Inquiry Group) watched three groups evaluate unfamiliar websites and search for information online: **10 professional fact-checkers** from well-known news organisations, **10 historians** with PhDs who teach at universities, and **25 Stanford undergraduates**.",
      "The historians and students mostly read **vertically**: they stayed on the site, scrolled, read its About page and judged it by how it looked and what it said about itself. They were often taken in by professional design, official-sounding names, logos, references to research and `.org` addresses.",
      "The fact-checkers did something different. Almost as soon as they landed on an unfamiliar site, they **left it**: they opened new browser tabs and searched for what *other* sources said about the organisation behind it. The researchers reported that the fact-checkers reached better-supported conclusions in a fraction of the time.",
      {key:"You can’t tell whether a source is trustworthy by looking only at the source. Anyone can build a polished website and write a glowing About page. What others say about it is far harder to fake."}
    ]},
    {h:"Lateral reading", body:[
      "[[lateral-reading|Lateral reading]] means leaving a page to check it: you read *across* other tabs instead of *down* the page. A good analogy is meeting a stranger who offers you a business deal. You wouldn’t judge them only by the CV they wrote about themselves; you’d ask people who know them.",
      {fig:'<svg viewBox="0 0 340 320"><defs><marker id="t1u6l2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="20" y="8" width="300" height="50" rx="10" stroke-width="2"/><text x="170" y="29" text-anchor="middle">An unfamiliar website</text><text class="s" x="170" y="47" text-anchor="middle">“Global Food Safety Council”</text><text x="85" y="84" text-anchor="middle">Vertically</text><text x="255" y="84" text-anchor="middle">Laterally</text><path class="d-ink" d="M85 58 L85 66" stroke-width="2"/><path class="d-ink" d="M255 58 L255 66" stroke-width="2"/><rect class="d-soft" x="10" y="94" width="150" height="146" rx="8" stroke-width="2" stroke-dasharray="5 4"/><text class="s" x="85" y="110" text-anchor="middle">all on the same site</text><rect class="d-gold" x="20" y="118" width="130" height="32" rx="6" stroke-width="2"/><text x="85" y="139" text-anchor="middle">Its About page</text><rect class="d-gold" x="20" y="158" width="130" height="32" rx="6" stroke-width="2"/><text x="85" y="179" text-anchor="middle">Its own articles</text><rect class="d-gold" x="20" y="198" width="130" height="32" rx="6" stroke-width="2"/><text x="85" y="219" text-anchor="middle">Logos and links</text><rect class="d-lup" x="190" y="100" width="140" height="32" rx="6" stroke-width="2"/><text x="260" y="121" text-anchor="middle">Tab: search name</text><rect class="d-lup" x="190" y="148" width="140" height="32" rx="6" stroke-width="2"/><text x="260" y="169" text-anchor="middle">Tab: encyclopedia</text><rect class="d-lup" x="190" y="196" width="140" height="32" rx="6" stroke-width="2"/><text x="260" y="217" text-anchor="middle">Tab: news, checks</text><path class="d-ink" d="M85 240 L85 262" stroke-width="2" marker-end="url(#t1u6l2a)"/><path class="d-ink" d="M260 228 L260 262" stroke-width="2" marker-end="url(#t1u6l2a)"/><rect class="d-rose" x="10" y="266" width="150" height="48" rx="8" stroke-width="2"/><text x="85" y="286" text-anchor="middle">Judged by what</text><text x="85" y="304" text-anchor="middle">it says of itself</text><rect class="d-sage" x="180" y="266" width="150" height="48" rx="8" stroke-width="2"/><text x="255" y="286" text-anchor="middle">Judged by what</text><text x="255" y="304" text-anchor="middle">others say of it</text></svg>', alt:"Two ways to check an unfamiliar website. Reading vertically stays on the same site (its About page, its own articles, its logos and links) and judges it by what it says about itself. Reading laterally opens new tabs (a search for its name, an encyclopedia entry, news and fact-checks) and judges it by what others say about it.", cap:"Vertical reading trusts the site’s own account of itself. Lateral reading asks independent sources."},
      {ol:[
        "Spend a few seconds on the page: note the name of the site, the organisation and any author.",
        "Open a new tab. Search for the organisation’s or author’s name, without the site’s own address. Add words like `funding`, `who runs` or `review` if it helps.",
        "Look for independent descriptions: an encyclopedia entry, news coverage, a professional body, a fact-check.",
        "Return to the page only if it passes. Now you know who you’re reading."
      ]},
      "The Digital Inquiry Group’s Civic Online Reasoning lessons boil this down to three questions you can ask of anything: **Who is behind the information? What is the evidence? What do other sources say?**"
    ]},
    {h:"Click restraint: don’t take the first result", body:[
      "The fact-checkers in the Stanford study also showed [[click-restraint|click restraint]]. When they searched, they didn’t click the first result. They scanned the whole first page: the site names, the addresses, the short descriptions. Then they chose deliberately.",
      "Search engines rank results by many signals, such as how well a page matches your words and how many other sites link to it. Ranking is not a truth score. Organisations can also pay for advertisements at the top of results, and some work hard to rank well for particular searches.",
      {list:[
        "**Skip results marked as ads or “sponsored”** when you’re checking a claim.",
        "**Read the address** under each result. Is it the organisation itself, a news site, an encyclopedia, a forum, an unknown blog? (Unit 3’s {{url-anatomy}} entry shows how to find the real domain.)",
        "**Prefer independent sources** about a source over the source describing itself.",
        "**Notice who appears repeatedly.** If several unrelated, reputable sources say the same thing, that’s a good sign."
      ]}
    ]},
    {h:"SIFT: four moves", body:[
      "In 2019 the digital-literacy expert **Mike Caulfield** turned these habits into four moves, called [[sift|SIFT]]. It’s designed to take a minute or two, not an hour. (His 2017 open textbook, *Web Literacy for Student Fact-Checkers*, describes an earlier version of the same moves; see this lesson’s reading.)",
      {table:[
        ["Move","What you do","Ask yourself"],
        ["**S**top","Pause before reading, sharing or reacting. Also stop if you get lost in a long search: remember your goal.","Do I know this source? What do I actually want to find out?"],
        ["**I**nvestigate the source","Read laterally about the website, account or author.","Who is this? What’s their expertise and agenda?"],
        ["**F**ind better coverage","Look for reliable reporting or expert consensus on the *claim*, ignoring the source that brought it to you.","What do trusted sources say about this?"],
        ["**T**race to the original","Follow claims, quotes, photos and videos back to where they first appeared.","Was it reported accurately, in its original context?"]
      ]},
      "You don’t always need all four moves. Often “Find better coverage” settles it quickly: if a dramatic claim is true, reliable news organisations or official bodies will usually be reporting it. If none are, that’s worth knowing too.",
      {ex:"Kenji sees a post: “The Northwind Institute for Natural Health says drinking seawater prevents colds.”\n\nStop: he notices he doesn’t know this institute, and the claim is surprising.\nInvestigate: he searches the institute’s name. An encyclopedia entry and a news article describe it as a marketing group funded by a company that sells mineral supplements.\nFind better coverage: he searches the claim itself. Health services and a fact-checking site say there’s no good evidence, and that drinking seawater is harmful.\nTrace: the original “study” turns out to be a blog post on the company’s own site.\nTime taken: about two minutes. He doesn’t share it.", label:"Worked example: SIFT in two minutes (invented names)"},
      {key:"SIFT in one line: pause, find out who’s behind it, see what better sources say, and trace it to the original."}
    ]},
    {h:"Using fact-checking organisations", body:[
      "A [[fact-check]] is an article that tests a specific public claim against evidence and explains the verdict. Professional fact-checking organisations exist in many countries; examples include Full Fact (UK), Africa Check, Chequeado (Argentina) and the fact-checking teams of some international news agencies.",
      "How do you know a fact-checker is serious? One useful signal: since 2016, the **International Fact-Checking Network (IFCN)**, based at the Poynter Institute, has run a Code of Principles. Organisations apply to become verified signatories and are assessed by independent assessors. They commit to:",
      {list:[
        "**Non-partisanship and fairness**: the same standards for every check, whoever made the claim.",
        "**Transparency of sources**: enough detail for readers to repeat the check themselves.",
        "**Transparency of funding and organisation**.",
        "**Transparency of methodology**: how claims are chosen, researched and corrected.",
        "**Open and honest corrections**."
      ]},
      "Signatories must apply for renewal every year at first (less often after several successful renewals), and can lose their status. Signatory status is a **signal, not a guarantee**: every fact-checker can make mistakes, and their work is criticised from many directions. The real strength of a good fact-check is that it shows its sources, so you can check them yourself.",
      {tip:"To find a fact-check, search the claim’s key words plus `fact check`. Searching more than one fact-checker helps. Note that in 2025 Google stopped showing special highlighted fact-check boxes in its search results, so you may need to look through ordinary results or visit fact-checkers’ sites directly."},
      "Fact-checkers can only cover a small share of claims. If there’s no fact-check, that doesn’t mean the claim is true; move on to finding better coverage yourself."
    ]},
    {h:"Wikipedia, used well", body:[
      "[[wikipedia|Wikipedia]] is a free encyclopedia that anyone can edit. Many people were taught never to use it. Fact-checkers use it constantly, but in a specific way: as a quick, broad starting point, especially to find out **who is behind** an organisation, publication or person.",
      "Its core policies help. Wikipedia’s **verifiability** policy says material must be attributable to reliable, published sources, so readers can check it. Articles also aim for a neutral point of view and forbid original research. On popular topics, vandalism and errors are often fixed quickly, though not always.",
      {list:[
        "**Use it for orientation**: what is this organisation, who funds it, has it been in the news?",
        "**Follow the references** at the bottom to the original sources, and cite those, not Wikipedia, in serious work.",
        "**Look for warning banners** at the top (“This article needs additional citations”) and “citation needed” tags in the text.",
        "**Check the Talk page and View history** for disputed topics: you’ll see what editors disagree about and whether recent changes were made.",
        "**Be careful with very recent events and obscure topics**, where fewer editors are checking."
      ]},
      {warn:"Wikipedia is an excellent place to start and a poor place to stop. For anything important, go to the sources it cites."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A `.org` address means it’s a non-profit or trustworthy.”** Anyone can register a `.org` domain. It tells you nothing about who runs it.",
        "**“A professional design means a reliable source.”** Good design costs little today. The Stanford study showed experts being impressed by appearance.",
        "**“The About page tells me who they are.”** It tells you who they *say* they are. Check what others say.",
        "**“The top search result is the most reliable.”** Ranking reflects relevance and popularity signals, and the top may be an ad.",
        "**“Checking takes ages.”** SIFT usually takes a minute or two, often less than reading the original article.",
        "**“If a fact-checker hasn’t covered it, it must be true.”** Fact-checkers cover only a fraction of claims."
      ]}
    ]}
   ],
   try:[
    {id:"t1u6-l2-x1", type:"order", q:"Put the four SIFT moves in order.", items:[
      {t:"Stop: pause and notice whether you know the source", why:"First, interrupt the urge to read, react or share."},
      {t:"Investigate the source: find out who is behind it", why:"Before engaging with the content, learn who made it and why."},
      {t:"Find better coverage: see what reliable sources say about the claim", why:"Look past the source that reached you to trusted reporting or expert consensus."},
      {t:"Trace claims, quotes and media to the original context", why:"Finally, follow it upstream to check it was reported accurately."}
    ]},
    {id:"t1u6-l2-x2", type:"mcq", q:"Priya lands on a website for the “Global Council on Healthy Childhood”. It looks professional, has a `.org` address and cites research. What’s the best first move to judge it?", options:[
      {t:"Open a new tab and search for the organisation’s name to see what independent sources say about it", ok:true, why:"That’s lateral reading: judging the source by what others say, which is much harder to fake than the site’s own presentation."},
      {t:"Read its About page carefully", why:"The About page is the organisation describing itself. That’s vertical reading, the habit that misled experts in the Stanford study."},
      {t:"Check that the site has no spelling mistakes", why:"Many unreliable sites are well edited. Polish tells you little about who is behind it."},
      {t:"Trust it, because `.org` sites are non-profits", why:"Anyone can register a `.org` address; it isn’t restricted to non-profits or reliable organisations."}
    ]},
    {id:"t1u6-l2-x3", type:"spot", q:"Lucía searches “Northwind Health Foundation” to find out who’s behind it. Tap the results that are good first clicks for that purpose.", ask:"is a good first click for checking who’s behind it", parts:[
      {t:"Sponsored · northwindhealth.org: Join the movement for natural health!", flag:false, why:"An advert paid for by the organisation itself. It will tell you only what they want you to hear."},
      "\n", {t:"Northwind Health Foundation – Wikipedia", flag:true, why:"An encyclopedia entry is a quick, independent overview, often covering funding and controversies, with references to follow."},
      "\n", {t:"About us | northwindhealth.org", flag:false, why:"The organisation describing itself. Useful later, but it’s vertical reading, not an independent view."},
      "\n", {t:"Investigation: Who funds the Northwind Health Foundation? – a national newspaper", flag:true, why:"Independent reporting about the organisation is exactly what lateral reading looks for."},
      "\n", {t:"10 SHOCKING facts Northwind doesn’t want you to know – viralbuzz.example", flag:false, why:"A clickbait list on an unknown site. It may be as unreliable as the thing you’re checking."}
    ], why:"Click restraint means scanning all the results first and choosing independent, reputable sources about the organisation."},
    {id:"t1u6-l2-x4", type:"sort", q:"Sort these habits: vertical reading (staying on the site) or lateral reading (checking elsewhere)?", buckets:["Vertical reading","Lateral reading"], items:[
      {t:"Reading the site’s mission statement", b:0, why:"The site describing itself."},
      {t:"Searching the author’s name in a new tab", b:1, why:"Checking what other sources say about the author."},
      {t:"Judging the site by its logo and design", b:0, why:"Appearance is on the site itself and easy to make look official."},
      {t:"Looking up the organisation in an encyclopedia", b:1, why:"An independent overview, outside the site."},
      {t:"Counting how many studies the site cites", b:0, why:"Still judging from the page itself; citations can be cherry-picked or misrepresented."},
      {t:"Checking whether news organisations have reported on the group’s funding", b:1, why:"Independent coverage of who is behind the source."}
    ]},
    {id:"t1u6-l2-x5", type:"match", q:"Match each action to the SIFT move it belongs to.", pairs:[
      ["You notice a strong urge to share a shocking post, and pause.","Stop","Pausing, especially when you feel strong emotion, is the first move."],
      ["You search who runs the account that posted the claim.","Investigate the source","Finding out who is behind the content."],
      ["You search the claim itself and find what health services and news organisations say.","Find better coverage","Looking past the original source to reliable coverage of the claim."],
      ["You follow a news article’s quote back to the full speech it came from.","Trace to the original","Going upstream to check the quote’s original context."]
    ]},
    {id:"t1u6-l2-x6", type:"mcq", q:"Which of these are commitments in the IFCN Code of Principles for fact-checkers? Choose all that apply.", options:[
      {t:"Non-partisanship and fairness", ok:true, why:"Signatories commit to applying the same standards to every claim, whoever makes it."},
      {t:"Transparency of sources", ok:true, why:"They commit to giving enough detail for readers to check the work themselves."},
      {t:"Open and honest corrections", ok:true, why:"They commit to publishing and following a corrections policy."},
      {t:"Never being wrong", why:"No such promise exists. Mistakes happen; the code requires that they be corrected openly."},
      {t:"Checking every claim made online", why:"Impossible. Fact-checkers choose claims to check and explain how they choose."}
    ]},
    {id:"t1u6-l2-x7", type:"mcq", q:"Dmitri wants to know what a little-known think tank is and who funds it. How should he use Wikipedia?", options:[
      {t:"Read the article for an overview, check for warning banners, then follow its references to the original sources", ok:true, why:"That’s Wikipedia used well: a fast starting point whose value lies in its cited sources."},
      {t:"Avoid it completely, because anyone can edit it", why:"Fact-checkers use Wikipedia routinely for orientation. The skill is using it as a start, not avoiding it."},
      {t:"Quote the Wikipedia article as the final word in his report", why:"For serious work, cite the sources Wikipedia points to, not Wikipedia itself."},
      {t:"Edit the article to add what he believes", why:"Wikipedia forbids original research; and editing doesn’t help him find out who funds the group."}
    ]}
   ],
   apply:{intro:"Practise the moves on real things in your own feeds. Don’t share or comment on anything while you practise.", tasks:[
     {t:"Read one source laterally", how:["Find a website, account or organisation you don’t know that appeared in your feed, search results or a forwarded message.","Open a new tab and search for its name (not its address). Add `funding`, `who runs` or `Wikipedia` if useful.","Scan the first page of results before clicking anything. Pick two independent sources.","Write one sentence: who is behind it, and would you trust it for this topic?"], write:"The source… What independent sources say… My verdict…"},
     {t:"Run SIFT on one claim", how:["Pick a surprising claim you saw recently.","**S**: note your first reaction. **I**: investigate who posted it. **F**: search the claim itself (try adding `fact check`). **T**: try to find where it first appeared.","Time yourself. Most checks take under five minutes."], write:"The claim… S… I… F… T… Time taken… Verdict…"},
     {t:"Bookmark two fact-checkers for your region or language", how:["Search for `fact check` plus your country or language.","For each organisation you find, read its About and methodology pages, then read laterally about it.","Check whether it appears as a verified signatory on the IFCN website (search `IFCN signatories`).","Bookmark two you trust."]}
   ], proof:"Notes showing one source read laterally, one claim checked with SIFT (with how long it took), and two fact-checkers bookmarked."},
   read:[
     {book:"wlsf", where:"Part I, Chapter 2 “Four Moves”; Part II “Look for Previous Work”: Chapters 4–6 (“How to Use Previous Work”, “Fact-checking Sites”, “Wikipedia”); Part IV, Chapter 16 “What ‘Reading Laterally’ Means”"},
     {book:"wss", where:"Chapter 1, Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”: “Conducting Business Research” (questions to ask about a source, and Wikipedia’s limits)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u6-l3", title:"Images, video and AI-generated content", minutes:55,
   goals:[
     "Explain why most misleading images are real pictures with false context",
     "Use reverse image search to find where and when a picture first appeared",
     "Explain why spotting “glitches” and AI detectors are unreliable ways to identify AI images",
     "Describe deepfakes and voice clones, and how to check a suspicious call or clip",
     "Explain in plain terms what content credentials (C2PA) and watermarks can and can’t tell you"
   ],
   learn:[
    {h:"Most misleading images are real", body:[
      {lead:"When people worry about fake images, they picture clever edits and AI. Much more often, the picture is genuine. It’s the caption that lies."},
      "A photo of a flooded street from another country, years ago, shared as “our town, right now”. A real crowd from a concert, shared as a protest. A genuine video of an accident, shared with the wrong cause. This is [[false-context|false context]], and it’s common because it’s easy: no editing skills needed, and the image really is authentic.",
      "People sometimes call cheap, simple deceptions like these [[cheapfake|cheapfakes]], in contrast to AI deepfakes. They include mislabelled photos, slowed-down or sped-up videos, and selective cropping. They work because pictures feel like proof. As the saying goes, “seeing is believing”.",
      "So the first questions about any image are not technical. They’re the questions a reporter would ask: **What exactly does this show? Who took it? Where? When?** A picture can prove that a scene existed. On its own, it can’t prove *where*, *when* or *why*. Those claims live in the caption.",
      {key:"Separate what the image shows from what the caption claims. Then check the claims."}
    ]},
    {h:"Reverse image search: find where a picture came from", body:[
      "A [[reverse-image-search|reverse image search]] works like an ordinary search, except that instead of typing words you give it a picture. The search engine looks for visually matching or similar images across the web and shows you where they appear. If a “breaking news” photo turns up on websites years ago, you’ve learned something important.",
      {table:[
        ["Tool","How to start","Good for"],
        ["Google (Lens or Images)","On google.com, select the **Search by image** icon and upload or paste a link. In Chrome on a computer, right-click an image and choose **Search with Google Lens**.","Broad coverage; finding similar images and pages that use them"],
        ["Bing Visual Search","Open Bing Images and select the **camera icon** in the search box.","A second opinion with different results"],
        ["TinEye","Upload an image or paste its address at tineye.com.","Sorting matches by **Oldest** to find the earliest known copy; finding edited versions"]
      ]},
      "Different tools index different parts of the web, so trying two is worth it. TinEye says it doesn’t save the images you search with, but think before uploading private photos to any service.",
      {ex:"A photo of a shark swimming on a flooded motorway goes viral during a storm, captioned “Right now, outside the city!”\n\n1. Mei right-clicks it and searches with Google Lens, then uploads it to TinEye.\n2. In TinEye she sorts by Oldest. The earliest copies are from years earlier, shared during a different storm.\n3. Fact-checks from those years explain that the shark was digitally added to a flood photo.\n4. Verdict: manipulated content, recycled with a false context. She doesn’t share it, and replies with a link to the fact-check.", label:"Worked example: tracing a viral photo (modelled on a real fake that resurfaces in many storms)"},
      {list:[
        "**For video**, pause on a clear, distinctive frame, take a screenshot and reverse-search that. The opening frame or a frame with landmarks works well.",
        "**Look for the earliest copy** and its original caption, and for larger or uncropped versions: the original often shows more.",
        "**No matches doesn’t prove it’s new or genuine.** The image may be private, very recent, or heavily cropped. Treat it as unverified."
      ]}
    ]},
    {h:"Check context: who, where, when", body:[
      "When reverse search doesn’t settle it, look at the picture like a detective, and look at the account that posted it.",
      {list:[
        "**Who posted it first?** Is it a person who was there, a news organisation, or an account that reposts anything dramatic? Check the account’s history and when it was created.",
        "**Where?** Look for signs, shop names, languages, vehicle number plates, landmarks and terrain. Compare with a map or street-level imagery if you can.",
        "**When?** Weather, seasons, clothing and shadows can contradict a claimed date. A post’s upload date is not the date the photo was taken.",
        "**Is there other coverage?** A real major event is usually photographed by many people from different angles. A single dramatic image with no others is a warning sign."
      ]},
      {warn:"Photo files can carry [[metadata]] such as the camera model, date and sometimes location. But many social media platforms remove it when you upload, and it can be edited. Use it as a clue when you have the original file, never as proof."}
    ]},
    {h:"Spotting edits and AI images: why your eyes aren’t enough", body:[
      "[[generative-ai|Generative AI]] tools create new images, video, audio and text from a short description. Early AI images had tell-tale flaws: extra fingers, garbled text, mismatched earrings, melting backgrounds. Many guides still teach people to hunt for these.",
      "The trouble is that the tools keep improving, and the flaws that were common two years ago are much rarer now. A glitch can show that an image is generated or edited. **Finding no glitch proves nothing.** Real photos also have odd details: motion blur, strange reflections, compression artefacts.",
      "What about automatic AI detectors? The US National Institute of Standards and Technology (NIST) reviewed the research in 2024 (*NIST AI 100-4, Reducing Risks Posed by Synthetic Content*). It found that detectors can have **substantial error rates**, especially on images from AI tools they weren’t trained on or after an image has been compressed or resized, and that text detectors have wrongly flagged writing by non-native English speakers as AI-generated. A detector score is one weak clue, not a verdict.",
      {table:[
        ["Clue","How much it tells you"],
        ["Visible glitches (hands, text, shadows)","Can suggest AI or editing. Their absence tells you nothing."],
        ["An online AI-detector score","Weak. Error rates can be high, and you can’t see how it decided."],
        ["The earliest source and its original caption","Strong. Often the creator says it was made with AI."],
        ["Independent coverage of the same event","Strong evidence of what really happened."],
        ["Content credentials, when present","Useful information about origin and edits (see below)."]
      ]},
      {key:"Don’t try to out-stare the machine. Use the same moves as for any claim: find the source, find better coverage, trace it to the original."}
    ]},
    {h:"Deepfakes and voice clones", body:[
      "A [[deepfake-video|deepfake]] is video, audio or an image made or altered with AI to show a real person doing or saying something they didn’t. A **voice clone** imitates someone’s voice from a sample recording. Unit 3 met these as tools for scams ({{social-engineering}}). They’re used in several ways:",
      {list:[
        "**Scams**: a call that sounds like a relative in trouble, or a video of a well-known person “recommending” an investment.",
        "**Harassment**: fake intimate images of real people, which is abusive and illegal in a growing number of countries.",
        "**Deception about public events**: fake clips of officials, public figures or news presenters.",
        "**Doubt about real recordings**: once fakes are common, people can wave away genuine evidence as “probably AI”. Researchers call this the **liar’s dividend**."
      ]},
      "The defence is the same as for phishing: **verify through a channel you already trust**. The US Federal Trade Commission’s advice on family-emergency calls is to question the emergency and check with the person, or another family member, on a number you know is theirs. For a clip of a public figure, check their official channels and reliable news coverage before believing or sharing it.",
      {tip:"An urgent request for money, codes or secrecy is the warning sign, however real the voice or face seems."}
    ]},
    {h:"Content credentials: a label that travels with the file", body:[
      "Instead of trying to detect fakes after the fact, another approach records where content came from at the moment it’s made. This record is called [[provenance]].",
      "The **Coalition for Content Provenance and Authenticity (C2PA)** is a group of technology and media companies that publishes an open technical standard for this. Files made under it carry [[content-credentials|Content Credentials]]: a digitally signed record of who or what made the file (a particular camera, editing app or AI tool), when, and what edits were made. Because the record is signed, tampering with it can be detected.",
      {fig:'<svg viewBox="0 0 340 336"><defs><marker id="t1u6l3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="45" y="8" width="250" height="52" rx="10" stroke-width="2"/><text x="170" y="30" text-anchor="middle">1. Camera, app or AI tool</text><text class="s" x="170" y="48" text-anchor="middle">signs a record: what made it, when</text><path class="d-ink" d="M170 60 L170 80" stroke-width="2" marker-end="url(#t1u6l3a)"/><rect class="d-sage" x="45" y="84" width="250" height="52" rx="10" stroke-width="2"/><text x="170" y="106" text-anchor="middle">2. Edited in a supporting app</text><text class="s" x="170" y="124" text-anchor="middle">edits are added to the record</text><path class="d-ink" d="M130 136 L90 166" stroke-width="2" marker-end="url(#t1u6l3a)"/><path class="d-ink" d="M210 136 L250 166" stroke-width="2" marker-end="url(#t1u6l3a)"/><rect class="d-sage" x="8" y="170" width="156" height="68" rx="10" stroke-width="2"/><text x="86" y="191" text-anchor="middle">3a. Shared as</text><text x="86" y="209" text-anchor="middle">the original file</text><text class="s" x="86" y="227" text-anchor="middle">record travels with it</text><rect class="d-rose" x="176" y="170" width="156" height="68" rx="10" stroke-width="2"/><text x="254" y="191" text-anchor="middle">3b. Screenshot</text><text x="254" y="209" text-anchor="middle">or re-uploaded</text><text class="s" x="254" y="227" text-anchor="middle">record often lost</text><path class="d-ink" d="M86 238 L86 262" stroke-width="2" marker-end="url(#t1u6l3a)"/><path class="d-ink" d="M254 238 L254 262" stroke-width="2" marker-end="url(#t1u6l3a)"/><rect class="d-panel" x="8" y="266" width="156" height="64" rx="10" stroke-width="2"/><text x="86" y="288" text-anchor="middle">Viewer can read</text><text class="s" x="86" y="306" text-anchor="middle">origin and edit history</text><text class="s" x="86" y="321" text-anchor="middle">(if their app supports it)</text><rect class="d-panel" x="176" y="266" width="156" height="64" rx="10" stroke-width="2"/><text x="254" y="288" text-anchor="middle">No credentials</text><text class="s" x="254" y="306" text-anchor="middle">means “unknown”,</text><text class="s" x="254" y="321" text-anchor="middle">not “fake”</text></svg>', alt:"A camera, app or AI tool signs a record of what made the file and when. A supporting editing app adds its edits to the record. If the original file is shared, the record travels with it and a viewer’s app can show the origin and edit history. If it is screenshotted or re-uploaded, the record is often lost, and no credentials means unknown, not fake.", cap:"How content credentials work, and where they get lost."},
      "Support is growing but still patchy. Some examples, as of 2026:",
      {list:[
        "Some cameras and phones sign photos as they’re taken. For example, Google’s Pixel 10 phones (2025) add Content Credentials in the camera app, and Sony offers a camera verification service aimed at news photographers.",
        "Some AI image tools add credentials to what they generate, and some editing software records edits.",
        "Some apps can display them. Google Photos shows a **How this was made** section for supported files (open a photo, then **More → About**), and Google’s **About this image** tool in Search can show credential information too."
      ]},
      "Know the limits. Google’s own help page says Content Credentials **don’t establish whether media is real or fake** by themselves. Most images online have none. NIST notes that metadata can be **stripped** altogether, and that platforms often remove it. Separately, some AI companies hide an invisible [[ai-watermark|watermark]] in generated content (Google’s is called SynthID), but NIST found that most current watermarking schemes can be removed, and some can be faked.",
      {key:"Content credentials, when present, are useful evidence about where a file came from. Their absence tells you almost nothing. They add to SIFT; they don’t replace it."}
    ]},
    {h:"What to do when you can’t tell", body:[
      "Sometimes, after checking, you still can’t be sure. That’s a normal, honest result. Professional fact-checkers often publish verdicts like “unverified” or “missing context”.",
      {ol:[
        "**Don’t share it as true.** If you must mention it, say clearly that it’s unverified.",
        "**Wait.** In breaking news, early images are often wrong. Better coverage usually appears within hours.",
        "**Ask the poster where it came from.** A genuine witness can usually say when and where they took it.",
        "**Check again later**: search the image or the claim plus `fact check`."
      ]},
      {warn:"Never forward intimate or abusive images, real or fake, even to “warn” people. Report them to the platform instead, and in many countries to the police."}
    ]}
   ],
   try:[
    {id:"t1u6-l3-x1", type:"spot", q:"A photo of a flooded street is posted with this caption. The photo genuinely shows water up to car doors. Tap the parts of the caption that are claims the photo itself can’t prove.", ask:"is a claim the photo alone can’t prove", parts:[
      {t:"This is our city centre,", flag:true, why:"A claim about place. Many flooded streets look alike; the photo doesn’t say where it was taken."},
      " ", {t:"right now,", flag:true, why:"A claim about time. A photo can be years old; nothing in it proves it’s from today."},
      " ", {t:"after last night’s storm.", flag:true, why:"A claim about cause. The water could come from a burst pipe or a different storm."},
      " ", {t:"Water is up to the car doors.", flag:false, why:"This is what the photo actually shows, so the photo supports it."},
      " ", {t:"Stay safe, everyone!", flag:false, why:"A friendly wish, not a factual claim."}
    ], why:"The image proves a scene existed. The caption adds where, when and why, and those are what you need to check."},
    {id:"t1u6-l3-x2", type:"order", q:"Fatima wants to check a viral photo. Put her steps in a sensible order.", items:[
      {t:"Separate what the photo shows from what the caption claims", why:"First know exactly which claims need checking."},
      {t:"Run a reverse image search with two tools", why:"Find other copies of the image across the web."},
      {t:"Sort or scan for the earliest copy and read its original caption", why:"The earliest copy usually reveals the real time, place and source."},
      {t:"Compare that original caption with independent coverage of the event it describes", why:"Once you know the real time and place, check them against reliable reporting of that event."},
      {t:"Decide: confirmed, false context, manipulated, or unverified", why:"Only now can she reach a verdict, which may honestly be “unverified”."}
    ]},
    {id:"t1u6-l3-x3", type:"mcq", q:"Tomás reverse-searches a photo shared as “today’s wildfire near the coast”. The earliest copy is from six years ago, captioned as a wildfire in another country, on a news agency’s site. What’s the best conclusion?", options:[
      {t:"It’s a real photo shared with a false context", ok:true, why:"The image is genuine (a news agency published it), but the time and place in the new caption are wrong. That’s false context."},
      {t:"It’s an AI-generated image", why:"Nothing suggests AI: it appeared on a news agency site years ago, before the claimed event."},
      {t:"It’s accurate, because it’s a real wildfire photo", why:"The photo is real, but the claim is about *this* fire, today, here. That part is false."},
      {t:"He can’t conclude anything from a reverse search", why:"An earlier copy with a different, credible caption is strong evidence the new caption is wrong."}
    ]},
    {id:"t1u6-l3-x4", type:"sort", q:"Someone asks: “Is this image real or AI-generated?” Sort each clue by how much it can tell you.", buckets:["Strong evidence","Weak or no evidence"], items:[
      {t:"Its Content Credentials show it was created with an AI image generator", b:0, why:"A signed provenance record stating the generator is direct evidence about how it was made."},
      {t:"The hands and text look normal", b:1, why:"Modern tools often get these right. The absence of glitches proves nothing."},
      {t:"An online detector says “82% likely human”", b:1, why:"Detectors can have substantial error rates, especially on newer tools or compressed images."},
      {t:"The earliest copy is on an artist’s account, captioned “made with an AI image tool”", b:0, why:"Tracing to the original creator, who says how it was made, is strong evidence."},
      {t:"The image has no Content Credentials", b:1, why:"Most images have none, and screenshots and many uploads strip them. Absence means unknown."},
      {t:"Several news organisations published photos of the same scene from different angles", b:0, why:"Independent coverage from multiple sources is strong evidence the scene really happened."}
    ]},
    {id:"t1u6-l3-x5", type:"match", q:"Match each task to the best tool or move.", pairs:[
      ["Finding the earliest known copy of a picture","TinEye, sorted by Oldest","TinEye lets you sort matches so the earliest known copy comes first."],
      ["Checking a video clip’s origin","Screenshot a clear frame and reverse-search it","Reverse image search works on still frames taken from a video."],
      ["Seeing whether a supported photo records AI edits","Content Credentials, e.g. Google Photos’ “How this was made”","Credentials, when present, list the origin and edits."],
      ["Checking a voice message from a relative asking for money","Call them back on a number you already have","Voices can be cloned. A known number is a channel the scammer doesn’t control."]
    ]},
    {id:"t1u6-l3-x6", type:"mcq", q:"Priya gets a voice message that sounds exactly like her manager, asking her to buy gift cards urgently for a client and keep it quiet. What should she do?", options:[
      {t:"Contact her manager through a channel she already uses (their known number, or in person) before doing anything", ok:true, why:"Voices can be cloned from short recordings. Urgency, secrecy and gift cards are classic scam signs. Checking through a known channel is the reliable test."},
      {t:"Buy the gift cards, because the voice is definitely her manager’s", why:"A convincing voice proves nothing today. The request itself is the warning sign."},
      {t:"Reply to the voice message asking if it’s really them", why:"If the account or number is controlled by a scammer, they’ll just say yes."},
      {t:"Run the audio through an online deepfake detector and act on the result", why:"Detectors are unreliable. Even a “real” verdict shouldn’t override a call to a known number."}
    ]},
    {id:"t1u6-l3-x7", type:"mcq", q:"Which statement about Content Credentials (C2PA) is accurate?", options:[
      {t:"When present, they give a signed record of a file’s origin and edits, but a file without them isn’t necessarily fake", ok:true, why:"That’s the key point. They add evidence when present; their absence is normal and tells you little."},
      {t:"Every photo taken on a modern phone carries them", why:"Only some devices and apps add them, and many platforms strip them on upload."},
      {t:"They prove whether an image is true or false", why:"Even Google’s help page says they don’t by themselves establish whether media is real or fake. They record origin and edits."},
      {t:"They can’t be removed from a file", why:"Metadata can be stripped altogether; a screenshot often loses it."}
    ]}
   ],
   apply:{intro:"Practise on an image you already have, such as a photo you took yourself or a picture from a news site. Don’t upload private or intimate images to any search tool.", tasks:[
     {t:"Run a reverse image search", how:{
       win:["In Chrome or Edge, go to **images.google.com** and select the **Search by image** icon (a camera-style icon in the search box). Upload a file or paste an image link.","Or, in Chrome, right-click any image on a web page and choose **Search with Google Lens**.","For a second opinion, open **bing.com/images** and select the camera icon, or upload to **tineye.com** and sort by **Oldest**."],
       mac:["In any browser, go to **images.google.com**, select the **Search by image** icon and upload a file (drag and drop also works).","In Chrome, you can right-click an image and choose **Search with Google Lens**.","Try **tineye.com** too, and sort results by **Oldest**."],
       chromeos:["In Chrome, right-click (two-finger tap) an image on a web page and choose **Search with Google Lens**; results open in a side panel.","For an image file, go to **images.google.com**, select **Search by image** and upload it from your Files app.","Try **tineye.com** as a second tool."],
       phone:["**Android:** open the Google app and tap the **Lens** icon in the search bar, then choose a photo from your gallery. In Chrome, touch and hold an image on a web page and look for an option to search it with Google Lens (wording varies by version).","**iPhone:** install or open the Google app and tap the **Lens** icon to search with a saved photo. In Chrome for iPhone, touch and hold an image and choose **Search image with Google Lens** (wording can vary by version).","On either phone, you can open **bing.com/images** or **tineye.com** in a browser and upload a photo from your gallery."]
     }},
     {t:"Trace one viral image", how:["Find an image currently being shared widely (news, memes, a dramatic photo).","Write down what it shows and what its caption claims.","Reverse-search it. Find the earliest copy you can and its original caption.","Decide: confirmed, false context, manipulated or unverified."], write:"What it shows… What the caption claims… Earliest copy found… My verdict…"},
     {t:"Look for content credentials", how:["If you use Google Photos on Android or iPhone, open a recent photo, tap **More** (⋮) then **About**, and scroll to see whether a **How this was made** section appears. (It only appears for files from supporting devices and apps; it isn’t available on the Google Photos website.)","Otherwise, search the web for “Content Credentials” to find the coalition’s free online checking tool and try it with a photo you took.","Note what you find. On most images, you’ll find nothing, which is normal."]}
   ], proof:"You can run a reverse image search on your devices, you’ve traced one viral image to its earliest copy, and you know whether your photo apps show content credentials."},
   read:[
     {book:"wlsf", where:"Part III “Go Upstream”: Chapters 12–15 (“Tracking the Source of Viral Photos”, “Using Google Reverse Image Search”, “Filtering by Time and Place to Find the Original”, “Activity: Trace Viral Photos Upstream”)", note:"The screenshots show older versions of Google’s tools; the method is unchanged."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u6-l4", title:"Finding and judging good sources", minutes:55,
   goals:[
     "Write precise searches with good keywords and search operators that work in today’s major search engines",
     "Tell primary, secondary and tertiary sources apart, and know when you need each",
     "Judge a source by its expertise, evidence and purpose",
     "Explain what peer review does and doesn’t guarantee",
     "Tell news, opinion, analysis and sponsored content apart"
   ],
   learn:[
    {h:"Search is a skill", body:[
      {lead:"A search engine doesn’t answer your question. It matches your words to pages. Better words, better pages."},
      "Search engines rank results using many signals: how well a page matches your words, how many other sites link to it, how recent it is, your language and location, and more. None of these is “how true is it?”. Paid adverts can appear at the top. Many engines now also show an AI-written summary above the results; Lesson 5 covers how to treat those.",
      "Three habits make the biggest difference:",
      {list:[
        "**Use the words your answer would contain.** Searching `my phone battery dies fast` finds forum chats. Searching `battery health settings` plus your phone model finds the maker’s help pages.",
        "**Be specific.** Add names, places, dates, and the type of source you want (`report`, `guidance`, `study`, `statistics`).",
        "**Phrase it neutrally.** A loaded search like `why is coffee bad for you` finds pages that agree with the question. `coffee health effects evidence review` finds pages that weigh the evidence. Caulfield calls this avoiding confirmation bias in searches."
      ]},
      {tip:"If a search gives poor results, change the words, not just the order. Use words from the best result so far: the right vocabulary is half the battle."}
    ]},
    {h:"Search operators", body:[
      "A [[search-operator|search operator]] is a symbol or word that gives the search engine a precise instruction. A few work in all the major engines and are worth knowing by heart.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">One search, five parts</text><rect class="d-gold" x="8" y="34" width="156" height="40" rx="6" stroke-width="2"/><text x="86" y="59" text-anchor="middle" font-family="monospace">"food storage"</text><text class="s" x="174" y="51">exact phrase, in</text><text class="s" x="174" y="66">this order</text><rect class="d-panel" x="8" y="86" width="156" height="40" rx="6" stroke-width="2"/><text x="86" y="111" text-anchor="middle" font-family="monospace">guidance</text><text class="s" x="174" y="103">an ordinary keyword</text><text class="s" x="174" y="118">(the kind of page)</text><rect class="d-lup" x="8" y="138" width="156" height="40" rx="6" stroke-width="2"/><text x="86" y="163" text-anchor="middle" font-family="monospace">site:who.int</text><text class="s" x="174" y="155">only pages on this</text><text class="s" x="174" y="170">website or domain</text><rect class="d-sage" x="8" y="190" width="156" height="40" rx="6" stroke-width="2"/><text x="86" y="215" text-anchor="middle" font-family="monospace">filetype:pdf</text><text class="s" x="174" y="207">only files of this</text><text class="s" x="174" y="222">type (here, PDFs)</text><rect class="d-rose" x="8" y="242" width="156" height="40" rx="6" stroke-width="2"/><text x="86" y="267" text-anchor="middle" font-family="monospace">-recipe</text><text class="s" x="174" y="259">leave out pages</text><text class="s" x="174" y="274">with this word</text></svg>', alt:"The search \"food storage\" guidance site:who.int filetype:pdf -recipe split into five parts: an exact phrase in quotes, an ordinary keyword, site: to limit to one website, filetype: to limit to PDFs, and a minus sign to leave out pages containing a word.", cap:"Each part narrows the results. Type them together on one line, with spaces between parts and no space after a colon."},
      {table:[
        ["Operator","Example","What it does"],
        ["Quotation marks","`\"spaghetti harvest\"`","Only pages with that exact phrase. Great for checking quotes."],
        ["Minus sign","`jaguar speed -car`","Leaves out pages containing the word after the minus."],
        ["`site:`","`site:who.int malaria`","Only results from that website or domain. `site:edu` or `site:gov.uk` limits to a whole domain ending."],
        ["`filetype:`","`climate statistics filetype:pdf`","Only that file type, such as `pdf`, `docx` or `xlsx`. Good for reports."],
        ["`before:` / `after:` (Google)","`flood photo before:2020`","Results by the date pages were last updated (not always when first published)."]
      ]},
      "How well they work today, from each engine’s own help pages (checked 2026):",
      {list:[
        "**Google** documents quotation marks, the minus sign, `site:`, `filetype:`, `before:` and `after:`. Don’t put a space after the colon: `site:who.int`, not `site: who.int`.",
        "**Bing** documents quotation marks, `NOT` or the minus sign, `site:` and `filetype:`, plus `OR` and `+` (operators like `NOT` and `OR` must be in capitals).",
        "**DuckDuckGo** documents quotation marks, the minus sign, `site:` and `filetype:`, but warns that some operators are not applied strictly; if nothing matches, it shows related results instead."
      ]},
      {warn:"Older guides, including some textbooks, list `+` and `~` as Google operators. Google’s current help page no longer lists them, so don’t rely on them there. Operators change; when one seems to be ignored, check the engine’s help page."}
    ]},
    {h:"Primary, secondary and tertiary sources", body:[
      "Sources sit at different distances from the original event, data or idea.",
      {table:[
        ["Kind","What it is","Examples"],
        ["[[primary-source|Primary]]","Created at the time, or the original evidence itself","A study’s paper and data, a law’s text, an official statistics release, a speech recording, a photo by a witness, a company’s annual report"],
        ["[[secondary-source|Secondary]]","Describes, analyses or interprets primary sources","A news report about a study, a review article, a history book, a documentary"],
        ["Tertiary","Summarises and indexes many secondary sources","Encyclopedias (including Wikipedia), textbooks, fact sheets, guides"]
      ]},
      "None of these is automatically “best”. Each has a job:",
      {list:[
        "**Tertiary sources** are great for getting your bearings: the basic facts, the key terms, who the main voices are.",
        "**Good secondary sources** explain what primary sources mean and put them in context. A careful review of many studies is often more reliable than any single study.",
        "**Primary sources** let you check that a claim matches the original. When a post says “a new study proves…”, the study itself is the primary source. When a news story quotes a speech, the full speech is."
      ]},
      {key:"Use tertiary and secondary sources to understand; go to the primary source to check the key claim. That’s SIFT’s “Trace to the original” in practice."}
    ]},
    {h:"Judging expertise and evidence", body:[
      "Once you know who is behind a source, ask two more questions.",
      {h:"Do they have relevant expertise?"},
      "Expertise is specific. A famous surgeon is an expert on surgery, not on economics or climate. A successful entrepreneur isn’t an expert on vaccines. Watch for “expert” labels that don’t match the topic, and for credentials from organisations you can’t find independently.",
      {list:[
        "Does their training or work match **this** topic?",
        "Do other experts in the field treat them as an authority? (Lateral reading again.)",
        "Are they speaking for themselves, or for an organisation with an interest in the answer?"
      ]},
      {h:"What’s the evidence?"},
      {list:[
        "**Is evidence offered at all?** “Experts say” with no names or links isn’t evidence.",
        "**What kind?** A personal story, a single small study, a large review of many studies, official data. Personal stories can be true and still not tell you what usually happens.",
        "**Does it match the claim?** A study in mice or in a lab dish doesn’t show the same effect in people.",
        "**Who paid?** Funding doesn’t make research wrong, but it’s worth knowing. OpenStax’s *Workplace Software and Skills* suggests asking who the author is, who paid for the research, how recent it is and whether biases are visible.",
        "**What do most experts conclude?** On settled questions, a broad consensus is more reliable than a lone voice, though consensus can change with new evidence."
      ]},
      {tip:"Caulfield’s advice: choose your experts first. Before diving into a debate, find out which bodies and researchers are recognised authorities on the topic, then see what they say."}
    ]},
    {h:"Peer review in plain terms", body:[
      "[[peer-review|Peer review]] is how most scientific and academic journals decide what to publish. According to the University of California Museum of Paleontology’s *Understanding Science* site, it works roughly like this:",
      {ol:[
        "Researchers write up their study and send it to a journal.",
        "The editor sends it to other experts in the same field (the “peers”), often anonymously.",
        "The reviewers check the methods, reasoning and evidence, and recommend publishing, revising or rejecting.",
        "The authors often revise and resubmit. The process frequently takes many months, sometimes more than a year."
      ]},
      "Peer review is a quality filter, not a truth stamp. As *Understanding Science* puts it, peer-reviewed work “isn’t necessarily correct or conclusive”; it meets the standards of science and is then tested further by other researchers. Some things to know:",
      {list:[
        "**Preprints** are papers posted publicly *before* peer review. They let research spread quickly but haven’t been checked yet. News stories sometimes report them as if they had.",
        "**Retractions** happen when serious errors or misconduct are found after publication. A retracted paper should no longer be relied on, but it may still circulate.",
        "**Predatory journals** charge authors to publish while doing little or no real review. They often have impressive-sounding names. Caulfield calls their methods “stupid journal tricks”; lateral reading about the journal is the fix.",
        "**One study is rarely the last word.** Results become reliable when other teams repeat them."
      ]}
    ]},
    {h:"News, opinion, analysis and sponsored content", body:[
      "News sites mix several kinds of content on one page. Mixing them up is one of the easiest ways to be misled.",
      {table:[
        ["Type","Purpose","Typical labels"],
        ["News report","Tells you what happened, with sources, as neutrally as possible","News, a reporter’s byline, “reporting by…”"],
        ["Analysis","Explains why it happened or what it means, based on reporting","Analysis, explainer, “what we know”"],
        ["Opinion","Argues for a view","Opinion, comment, editorial, column, “view”, letters"],
        ["[[sponsored-content|Sponsored content]]","Paid for by an advertiser, made to look like articles","Sponsored, paid post, partner content, “in association with”, advertisement"]
      ]},
      "Opinion pieces are legitimate and useful: they show you arguments. But a strong opinion column is not evidence that something happened. Sponsored content (also called native advertising) is advertising; it can be accurate, but its purpose is to sell. Press releases, too, are an organisation’s own account, sometimes reprinted almost word for word by busy news sites.",
      {list:[
        "Look for the label, often small, near the headline or byline.",
        "Check the section name in the address or menu (`/opinion/`, `/sponsored/`).",
        "Ask what the piece wants you to do: understand, agree, or buy?"
      ]}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“If it’s published in a journal, it’s proven.”** Peer review checks quality; later research can still overturn it. And some “journals” barely review at all.",
        "**“Primary sources are always better.”** They’re essential for checking, but a single primary source can mislead without context. Good reviews often give the fuller picture.",
        "**“An expert is an expert on everything.”** Expertise is specific to a field.",
        "**“Opinion pieces are biased, so they’re useless.”** They’re useful for arguments; just don’t treat them as reporting.",
        "**“Search operators are for programmers.”** Quotation marks and `site:` take seconds and can save minutes."
      ]}
    ]}
   ],
   try:[
    {id:"t1u6-l4-x1", type:"spot", q:"Ana types this into Google. Tap the parts that won’t work as intended there.", ask:"won’t work as intended in Google", mono:true, parts:[
      {t:"\"school lunch\"", flag:false, why:"Quotation marks for an exact phrase work in Google, Bing and DuckDuckGo."},
      " ", {t:"nutrition", flag:false, why:"An ordinary keyword. Fine."},
      " ", {t:"site: example.org", flag:true, why:"There’s a space after the colon. Google’s help says operators need no space: `site:example.org`."},
      " ", {t:"+guidelines", flag:true, why:"Google’s current help page doesn’t list `+` as an operator. (Bing still documents it.) Leave the plain word, or use quotation marks."},
      " ", {t:"filetype:pdf", flag:false, why:"Correctly written; limits results to PDF files."},
      " ", {t:"-recipes", flag:false, why:"Correct: the minus sign leaves out pages with “recipes”."}
    ], why:"A working version: `\"school lunch\" nutrition site:example.org guidelines filetype:pdf -recipes`"},
    {id:"t1u6-l4-x2", type:"match", q:"Match each goal to the search that achieves it.", pairs:[
      ["Find pages with this exact quote","`\"the only constant is change\"`","Quotation marks require the exact phrase, which is ideal for checking quotes."],
      ["Find jaguar (the animal) pages, not the car","`jaguar habitat -car`","The minus sign leaves out pages that mention the car."],
      ["Find only pages on the World Health Organization’s website","`site:who.int sleep`","`site:` limits results to one website."],
      ["Find reports saved as PDFs","`library usage report filetype:pdf`","`filetype:` limits results to one kind of file."]
    ]},
    {id:"t1u6-l4-x3", type:"sort", q:"Sort these sources for a question about a new study on sleep and memory.", buckets:["Primary source","Secondary source","Tertiary source"], items:[
      {t:"The researchers’ published paper with their data", b:0, why:"The original evidence itself."},
      {t:"A newspaper article reporting the study’s findings", b:1, why:"It describes and interprets the primary source."},
      {t:"An encyclopedia entry on sleep", b:2, why:"Summarises many sources for orientation."},
      {t:"A review article comparing 40 sleep studies", b:1, why:"Analyses many primary studies; a strong secondary source."},
      {t:"A recording of the lead researcher’s conference talk", b:0, why:"An original record from the researcher at the time."},
      {t:"An introductory psychology textbook chapter on memory", b:2, why:"Textbooks summarise established knowledge from many sources."}
    ]},
    {id:"t1u6-l4-x4", type:"sort", q:"Sort these pieces from a news website.", buckets:["News report","Opinion","Sponsored content"], items:[
      {t:"“Bridge closed after inspection finds cracks”, with quotes from engineers and the council", b:0, why:"Reports what happened, with named sources."},
      {t:"“Our city deserves better bridges” in the Comment section", b:1, why:"Argues a view; labelled as comment."},
      {t:"“5 reasons smart homeowners choose Northwind windows”, labelled “Partner content”", b:2, why:"Paid content from an advertiser, styled like an article."},
      {t:"An editorial stating the newspaper’s position on a new law", b:1, why:"Editorials are the publication’s opinion."},
      {t:"“In association with a travel company: The hidden beaches you must see”", b:2, why:"“In association with” signals paid or sponsored content."},
      {t:"“Rainfall in March was the highest since records began, weather service says”", b:0, why:"Reports a fact with its source."}
    ]},
    {id:"t1u6-l4-x5", type:"mcq", q:"A video features a famous heart surgeon confidently explaining how a country’s currency will collapse next year. How should Sione weigh it?", options:[
      {t:"As the view of someone outside their field; look for what economists and reliable financial reporting say", ok:true, why:"Expertise is specific. The surgeon’s medical knowledge doesn’t transfer to economic forecasting."},
      {t:"As highly reliable, because surgeons are highly educated", why:"Education in one field isn’t expertise in another."},
      {t:"As false, because surgeons are never right about money", why:"It may or may not be right; the point is that the surgeon’s authority doesn’t support it. Check relevant experts."},
      {t:"As reliable if the video has millions of views", why:"Popularity measures attention, not accuracy."}
    ]},
    {id:"t1u6-l4-x6", type:"mcq", q:"What does it mean when a study has been peer-reviewed?", options:[
      {t:"Other experts checked its methods and reasoning before publication; it can still turn out to be wrong", ok:true, why:"Peer review is a quality filter. Later research can confirm, refine or overturn results."},
      {t:"Its conclusions are proven true", why:"Peer-reviewed work isn’t necessarily correct or conclusive; it meets the standards of science."},
      {t:"The researchers’ friends read it", why:"Reviewers are experts chosen by the journal’s editor, often anonymously, not the authors’ friends."},
      {t:"It was posted online for anyone to comment on", why:"That describes a preprint or public comments, not formal peer review."}
    ]},
    {id:"t1u6-l4-x7", type:"mcq", q:"Oluwaseun sees a headline: “New study proves walking backwards doubles brain power.” The link goes to a preprint posted last week. What’s the most accurate way to describe it?", options:[
      {t:"An early result not yet peer-reviewed; wait for review and for other studies before treating it as established", ok:true, why:"A preprint hasn’t been checked by reviewers yet, and “proves” overstates even a reviewed single study."},
      {t:"Established science, because it’s a study", why:"Being a study isn’t enough. This one hasn’t even been peer-reviewed."},
      {t:"Definitely false, because preprints are fake", why:"Preprints are a normal, legitimate way to share early research. They just haven’t been reviewed yet."},
      {t:"Reliable, because it’s new", why:"Newness doesn’t make a finding reliable; replication does."}
    ]}
   ],
   apply:{intro:"Use your own search engine and something you’re genuinely curious about.", tasks:[
     {t:"Rewrite a search three ways", how:["Pick a question you care about (a health worry, a household task, a news topic).","Search it as you normally would and note the top three results.","Rewrite it: use the words an answer would contain, phrase it neutrally, and add one operator (`site:`, `filetype:pdf` or quotation marks).","Compare the top three results. Which search found better sources?"], write:"My question… Original search and results… Improved search and results…"},
     {t:"Find the primary source behind a news story", how:["Find a news article that mentions a study, report, statistic or speech.","Use the article’s links, or search the title or key phrase in quotation marks, to find the original.","Compare: does the original say what the article says? Is anything left out?"], write:"The article… The primary source… Does it match?"},
     {t:"Label a news front page", how:["Open the home page of a news site you use.","For ten items, label each as news, analysis, opinion or sponsored.","Note where the labels appear and how easy they were to spot."]}
   ], proof:"Notes from an improved search, one news claim traced to its primary source, and ten news items labelled by type."},
   read:[
     {book:"wss", where:"Chapter 1, Section 1.3 “The Internet, Cloud Computing, and the Internet of Things”: “Using the Internet”, “Conducting Effective Searches” and “Conducting Business Research”", note:"Its operator list includes `+` and `~`, which Google no longer lists; the rest of the advice holds."},
     {book:"wlsf", where:"Part III, Chapter 8 “Identifying Sponsored Content”; Part IV, Chapters 20 “Stupid Journal Tricks”, 23 “How to Think about Research”, 24 “Finding High Quality Secondary Sources”, 25 “Choosing Your Experts First” and 26 “Evaluating News Sources”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u6-l5", title:"Numbers, charts and AI answers that mislead", minutes:60,
   goals:[
     "Spot cherry-picked numbers and ask “compared with what?”",
     "Tell percentage points from percent change, and relative from absolute risk",
     "Read a chart’s axes and spot truncated or distorted scales",
     "Explain how AI chatbots produce fluent answers, why they invent facts and citations, and how to check them",
     "Pause before sharing, and correct mistakes (yours and others’) kindly"
   ],
   learn:[
    {h:"Numbers feel objective, but someone chose them", body:[
      {lead:"A number in a headline feels like hard fact. But someone chose which number to show, over which period, compared with what."},
      "Most misleading statistics aren’t invented. They’re real numbers presented in a way that gives a false impression. You don’t need advanced maths to catch most of them; you need a few questions:",
      {list:[
        "**Compared with what?** “Sales up 50%” means little until you know the starting point.",
        "**Out of how many?** “300 people affected” is very different in a village and in a country.",
        "**Over what period, starting when?** Choosing a start date can make almost any trend look up or down.",
        "**Who counted, and how?** A survey of a website’s own visitors isn’t a survey of the public.",
        "**What’s missing?** Is there an obvious comparison the source didn’t show?"
      ]},
      "This lesson gives a quick tour. Track 3, Data Literacy, goes much deeper into statistics and charts."
    ]},
    {h:"Cherry-picking", body:[
      "[[cherry-picking|Cherry-picking]] means choosing only the data that supports a point and ignoring the rest, like a fruit picker showing you only the best cherries. It comes in several forms:",
      {list:[
        "**Choosing the start date.** “Café sales up 50% since March!” March was the month it was closed for two weeks of repairs.",
        "**Choosing the one study.** If twenty studies found no effect and one small study found a big one, quoting only that one misleads.",
        "**Choosing the place or group.** “Crime doubled in Hillside” may be true for one small area while the city overall fell.",
        "**Choosing the measure.** A company might report its best-looking figure (revenue) and leave out a worse one (profit)."
      ]},
      {ex:"A post says: “Rail passenger numbers SOARED 40% this year!”\n\nCompared with what? Last year, when lines were closed for months of engineering work.\nOver a longer period? Numbers this year are about the same as three years ago.\nVerdict: true number, misleading impression. The honest headline is “Passenger numbers recover after last year’s closures”.", label:"Worked example: a true number, a false impression (invented figures)"}
    ]},
    {h:"Percent, percentage points and risk", body:[
      "When a percentage changes, there are two ways to describe the change, and they give very different numbers.",
      {list:[
        "A **[[percentage-point|percentage point]]** change is the simple difference between two percentages. An interest rate going from 4% to 5% rises by **1 percentage point**.",
        "A **percent change** compares the change with the starting value. From 4% to 5% is an increase of 1 ÷ 4 = **25%**."
      ]},
      "Both are correct, but “rates up 25%” sounds dramatic and “rates up 1 point” sounds small. Good reporting says which it means.",
      {h:"Relative and absolute risk"},
      "Health headlines often use **relative risk**: “Eating X doubles your risk of Y!” Doubling sounds alarming. But double what?",
      {ex:"Suppose a rare condition affects 1 in 10,000 people. In people who eat a certain food every day, it affects 2 in 10,000.\n\nRelative risk: 2 ÷ 1 = twice the risk, “a 100% increase”.\nAbsolute risk: 2 − 1 = 1 extra case per 10,000 people.\nIn percentages: from 0.01% to 0.02%, a rise of 0.01 percentage points.\n\nAll three statements are true. Only the absolute figure tells you how much it matters to you.", label:"Worked example: “doubles your risk” (invented figures)"},
      {key:"When you see a percentage or “times the risk”, ask for the starting number. Big relative changes in small numbers are still small numbers."}
    ]},
    {h:"Charts that distort", body:[
      "Charts turn numbers into shapes, and our eyes compare shapes. Change the shape and you change the impression, even when every number is correct.",
      {fig:'<svg viewBox="0 0 340 452"><text x="170" y="18" text-anchor="middle">Axis starts at 490: looks huge</text><path class="d-ink" d="M70 40 L70 180 L300 180" fill="none" stroke-width="2"/><text class="s" x="64" y="45" text-anchor="end">525</text><text class="s" x="64" y="184" text-anchor="end">490</text><rect class="d-rose" x="100" y="60" width="70" height="120" stroke-width="2"/><rect class="d-lup" x="200" y="140" width="70" height="40" stroke-width="2"/><text x="135" y="54" text-anchor="middle">520</text><text x="235" y="134" text-anchor="middle">500</text><text class="s" x="135" y="198" text-anchor="middle">Library A</text><text class="s" x="235" y="198" text-anchor="middle">Library B</text><path class="d-soft" d="M8 216 L332 216" stroke-width="1" stroke-dasharray="4 4"/><text x="170" y="240" text-anchor="middle">Axis starts at 0: about the same</text><path class="d-ink" d="M70 262 L70 402 L300 402" fill="none" stroke-width="2"/><text class="s" x="64" y="267" text-anchor="end">600</text><text class="s" x="64" y="406" text-anchor="end">0</text><rect class="d-rose" x="100" y="281" width="70" height="121" stroke-width="2"/><rect class="d-lup" x="200" y="285" width="70" height="117" stroke-width="2"/><text x="135" y="275" text-anchor="middle">520</text><text x="235" y="279" text-anchor="middle">500</text><text class="s" x="135" y="420" text-anchor="middle">Library A</text><text class="s" x="235" y="420" text-anchor="middle">Library B</text><text class="s" x="170" y="444" text-anchor="middle">Average daily visitors (invented)</text></svg>', alt:"Two bar charts of the same data: Library A has 520 daily visitors and Library B has 500. In the top chart the axis starts at 490, so A’s bar looks three times as tall as B’s. In the bottom chart the axis starts at 0, and the bars look almost equal, which matches the real 4% difference.", cap:"Same numbers, different impression. Bars should start at zero, because we compare their lengths."},
      "A [[truncated-axis|truncated axis]] starts above zero. On a **bar chart**, that’s misleading, because we judge bars by their length: the UK Office for National Statistics’ chart guidance says a bar chart’s axis should always start at zero. On a **line chart**, starting above zero can be fine and even helpful for showing a trend, as long as the axis is clearly labelled.",
      "Other tricks to watch for:",
      {list:[
        "**No axis labels or units.** If you can’t tell what’s measured, you can’t judge it.",
        "**Uneven time steps.** 2010, 2015, 2016, 2017 spaced evenly squashes the long gap.",
        "**Two different vertical axes** on one chart, which can make any two lines appear to move together.",
        "**3D effects and odd shapes** that make some parts look bigger than they are.",
        "**Cumulative totals** that can only ever go up, presented as if they show growth."
      ]},
      {tip:"Before reading a chart’s message, read its labels: title, axes, units, start values, time period and source. It takes ten seconds."}
    ]},
    {h:"Correlation is not causation (the short version)", body:[
      "A [[correlation-claim|correlation claim]] says two things go together; a causal claim says one *makes* the other happen. Headlines often slide from the first to the second.",
      "The Australian Bureau of Statistics uses a classic example: ice cream sales and sunscreen sales rise and fall together through the year. Ice cream doesn’t cause sunscreen buying. Both are driven by a third factor: hot, sunny weather.",
      {list:[
        "**A third factor** may cause both (warm weather; age; income).",
        "**The direction may be reversed**: maybe B causes A.",
        "**It may be chance**: with enough data, some things line up by coincidence."
      ]},
      "Words to watch: “linked to”, “associated with” and “tied to” usually describe a correlation. “Causes”, “makes” and “prevents” claim causation, which normally needs stronger evidence such as a well-designed experiment. The Codex entry {{correlation-causation}} goes further."
    ]},
    {h:"How AI chatbots produce answers", body:[
      "AI chatbots and the AI summaries at the top of some search results are built on [[large-language-model|large language models]]. A large language model has been trained on enormous amounts of text to do one thing extremely well: **predict which word (or part of a word) is likely to come next**, given everything before it. Repeat that thousands of times and you get fluent paragraphs.",
      "Think of a very well-read autocomplete. It has absorbed the patterns of how people write about almost everything. That makes it good at explaining, summarising and drafting. But writing that *sounds like* a correct answer isn’t the same as an answer that has been checked. Some chatbots also search the web and show links, which helps, but they can still misread, mix up or misattribute what those pages say.",
      "When a model produces confident, fluent, false content, people call it a [[hallucination]]. NIST’s *Generative AI Profile* (NIST AI 600-1, 2024) uses the term **confabulation**: “the production of confidently stated but erroneous or false content”. It explains that this comes from how the models are trained, by predicting the next word.",
      {list:[
        "**Invented citations.** In 2023 a US federal judge fined two lawyers and their firm $5,000 after they filed a legal brief citing court cases that a chatbot had made up. When asked whether the cases were real, the chatbot had said they were.",
        "**Errors about news.** In October 2025, a study coordinated by the European Broadcasting Union and led by the BBC had journalists from 22 public broadcasters in 18 countries assess over 3,000 answers about news from four popular AI assistants. **45%** had at least one significant issue; **31%** had serious sourcing problems such as missing or misleading attributions; **20%** had major accuracy problems, including invented details and outdated information."
      ]},
      {key:"A chatbot is a fast, fluent first draft, not a source. Treat every specific fact, number, quote and reference as a claim to check."}
    ]},
    {h:"Checking an AI answer", body:[
      "AI tools are genuinely useful for brainstorming, explaining concepts and drafting. The skill is knowing when an answer needs checking (whenever it matters) and how:",
      {ol:[
        "**Ask for sources**, then **open them**. Does the page exist? Does it actually say what the AI claimed?",
        "**Check every reference.** Search the exact title in quotation marks, or look it up in a library catalogue or a scholarly search engine. Invented references often have plausible authors and journals.",
        "**Check quotes** by searching a distinctive phrase in quotation marks.",
        "**Be extra careful with** numbers, dates, recent events, names of real people, legal and medical details, and anything outside the tool’s training period.",
        "**Read laterally and find better coverage**, exactly as with any other claim (Lesson 2).",
        "**Don’t paste private information** (yours or other people’s) into AI tools without knowing how the service stores and uses it."
      ]},
      {warn:"Asking the chatbot “are you sure?” or “is that source real?” is not a check. As the court case shows, it may confidently confirm its own mistake. Check outside the tool."}
    ]},
    {h:"Sharing responsibly and correcting kindly", body:[
      "Everything in this unit comes down to one moment: the second before you share. Most misinformation travels through ordinary people trying to help, warn or amuse their friends.",
      {list:[
        "**Pause before sharing**, especially when you feel a strong emotion or the post urges you to share fast.",
        "**If you can’t check it, don’t share it as true.** If you share it anyway, say it’s unverified.",
        "**Share the best source**, not a screenshot of a screenshot.",
        "**If you got it wrong, correct it openly**: delete or edit the post and say what was wrong. That’s what good journalists and fact-checkers do, and it builds trust."
      ]},
      "When someone close to you shares something false, how you respond matters. Shaming tends to make people defensive. What tends to help:",
      {list:[
        "**Reply privately** where you can, rather than calling them out in public.",
        "**Start from shared concern**: “I saw this too and wanted to check it.”",
        "**Focus on the claim, not the person.** Offer a better source rather than a verdict on their judgement.",
        "**Ask questions**: “Where did this come from? I couldn’t find it anywhere else.”",
        "**Accept you won’t always change minds.** Planting a doubt and modelling the habit is still worthwhile."
      ]},
      {tip:"Unit 5 covers wellbeing online. If a family group chat becomes exhausting, it’s fine to mute it for a while."}
    ]}
   ],
   try:[
    {id:"t1u6-l5-x1", type:"number", q:"A country’s unemployment rate goes from 4% to 5%. By how many **percentage points** did it rise?", answer:1, tol:0, unit:"percentage points", why:"Percentage points are the simple difference: 5 − 4 = 1 percentage point.", wrongs:[
      {v:25, tol:0, why:"25 is the **percent change** (1 ÷ 4 × 100). The question asks for percentage points: the simple difference, 1."},
      {v:5, tol:0, why:"5% is the new rate, not the rise. The rise is 5 − 4 = 1 percentage point."},
      {v:20, tol:0, why:"That divides the change by the new value (1 ÷ 5). Percentage points need no division at all: 5 − 4 = 1."}
    ], hint2:"Just subtract the old percentage from the new one."},
    {id:"t1u6-l5-x2", type:"number", q:"Same change: unemployment goes from 4% to 5%. By what **percent** did the rate increase?", answer:25, tol:0, unit:"%", why:"Percent change = (new − old) ÷ old × 100 = (5 − 4) ÷ 4 × 100 = 25%.", wrongs:[
      {v:1, tol:0, why:"1 is the change in percentage points. Percent change compares it with the starting value: 1 ÷ 4 = 0.25 = 25%."},
      {v:20, tol:0, why:"That divides by the new value (1 ÷ 5). Percent change divides by the starting value: 1 ÷ 4 = 25%."},
      {v:125, tol:0, why:"125% would mean the new value is 125% *of* the old one (5 ÷ 4). The increase is 25%."}
    ], hint2:"Divide the change by the starting value, then multiply by 100."},
    {id:"t1u6-l5-x3", type:"number", q:"A headline says a habit “doubles the risk” of a condition. The risk goes from 3 in 10,000 people to 6 in 10,000. How many **extra cases per 10,000 people** is that?", answer:3, tol:0, unit:"extra cases per 10,000", why:"Absolute difference: 6 − 3 = 3 extra cases in every 10,000 people. “Doubles” is the relative change (6 ÷ 3 = 2).", wrongs:[
      {v:100, tol:0, why:"100% is the relative increase (doubling). The question asks for the absolute number of extra cases: 6 − 3 = 3."},
      {v:2, tol:0, why:"2 is the ratio (“twice the risk”). The number of extra cases is 6 − 3 = 3 per 10,000."},
      {v:6, tol:0, why:"6 is the total with the habit. The *extra* cases are 6 − 3 = 3."}
    ]},
    {id:"t1u6-l5-x4", type:"spot", q:"A post about a city’s buses. The city’s transport report says average daily riders rose from 10,000 in January to 10,300 in June. Tap the parts that mislead.", ask:"is misleading", parts:[
      {t:"Bus ridership SOARS 300%!", flag:true, why:"From 10,000 to 10,300 is a rise of 300 riders, which is 3%, not 300%. The headline confuses the number of extra riders with a percentage."},
      " ", {t:"Bar chart: vertical axis runs from 9,900 to 10,350,", flag:true, why:"On a bar chart, starting the axis near the data makes a 3% change look enormous. Bars should start at zero."},
      " ", {t:"measured from January, the quietest month of the year.", flag:true, why:"Choosing the lowest month as a starting point is cherry-picking. A fair comparison would use the same month last year."},
      " ", {t:"Average daily riders rose from 10,000 to 10,300.", flag:false, why:"This matches the report. It’s the honest version of the claim."},
      " ", {t:"Source: City transport report, page 4.", flag:false, why:"Naming a checkable source is good practice, and it’s how you could spot the other problems."}
    ], why:"An honest summary: ridership rose about 3% between January and June; compare with last year’s June for a fair picture."},
    {id:"t1u6-l5-x5", type:"mcq", q:"A study finds that towns with more cafés have more dentists per person. A headline says: “Coffee shops are creating demand for dentists.” What’s the best response?", options:[
      {t:"It’s a correlation; a third factor such as the town’s wealth or how urban it is could drive both", ok:true, why:"Wealthier, more urban towns tend to have more of many services, cafés and dentists included. The study shows they go together, not that one causes the other."},
      {t:"It must be true, because coffee stains teeth", why:"A plausible story isn’t evidence of causation. The study didn’t test cause."},
      {t:"It proves dentists open cafés", why:"That reverses the claimed direction without any more evidence than before."},
      {t:"Correlations are meaningless, so ignore the study", why:"Correlations are useful clues. They just don’t, on their own, show cause."}
    ]},
    {id:"t1u6-l5-x6", type:"mcq", q:"Mei asks a chatbot for sources on a topic for her course. It lists three journal articles with authors, titles and years. What should she do before using them?", options:[
      {t:"Search each exact title in quotation marks, or in a library or scholarly search, and read the real article", ok:true, why:"Chatbots can produce plausible but non-existent references. Only finding and reading the real article confirms it exists and says what’s claimed."},
      {t:"Ask the chatbot whether the articles are real", why:"It may confidently say yes even when they’re invented, as happened in the 2023 court case."},
      {t:"Use them; the details are too specific to be made up", why:"Invented references often have realistic authors, journals and years. Specificity isn’t proof."},
      {t:"Use them only if the chatbot added page numbers", why:"Page numbers can be invented too. Check outside the tool."}
    ]},
    {id:"t1u6-l5-x7", type:"order", q:"Put these steps for checking an important AI answer in a sensible order.", items:[
      {t:"Note the specific claims: facts, numbers, quotes and references", why:"First know what needs checking."},
      {t:"Ask the tool for a source for each of those claims", why:"Once you know the claims, sources for them give you leads to follow."},
      {t:"Open each source and confirm it exists and says what was claimed", why:"The essential step: check outside the tool."},
      {t:"Read laterally about anything still uncertain and find better coverage", why:"Independent sources settle what the AI’s sources can’t."},
      {t:"Use only what you’ve confirmed, and cite the real sources", why:"The final answer rests on checked sources, not on the chatbot."}
    ]},
    {id:"t1u6-l5-x8", type:"sort", q:"Lucía’s uncle shared a false health claim in the family chat. Sort her possible responses.", buckets:["Likely to help","Likely to backfire"], items:[
      {t:"Messaging him privately: “I saw this too and looked into it. Here’s what I found.”", b:0, why:"Private, friendly and focused on the claim. It lets him change his mind without losing face."},
      {t:"Posting “This is fake news, how could you fall for this?” in the group", b:1, why:"Public shaming tends to make people defensive and dig in."},
      {t:"Sharing a link to a clear explanation from a reliable health source", b:0, why:"Offering a better source gives him something to check, rather than just a verdict."},
      {t:"Asking “Where did this come from? I couldn’t find it anywhere else.”", b:0, why:"A genuine question invites him to check, using SIFT-like thinking."},
      {t:"Sending ten articles at once with no message", b:1, why:"Overwhelming and impersonal; it’s unlikely to be read."},
      {t:"Mocking him later in a different chat", b:1, why:"Unkind, and it doesn’t correct anything."}
    ]}
   ],
   apply:{intro:"Practise on real numbers, charts and AI answers you meet this week.", tasks:[
     {t:"Interrogate one statistic", how:["Find a headline or post with a percentage, “times the risk” or a big number.","Ask: compared with what? out of how many? over what period? percent or percentage points? relative or absolute?","Find the original source of the number if you can, and write an honest one-line version."], write:"The claim… What I found… My honest version…"},
     {t:"Read one chart’s labels first", how:["Find a chart in the news, a report or social media.","Before reading its message, note the title, axis labels, units, where each axis starts, the time period and the source.","Does the shape match the numbers? Would it look different with the axis starting at zero?"], write:"The chart… What the labels show… Fair or misleading?"},
     {t:"Fact-check an AI answer", how:["Ask any AI chatbot or search summary a factual question you can check (a historical date, a statistic, a definition with sources).","Ask it for sources.","Open every source. Note which exist, which say what the AI claimed, and which don’t.","Don’t include personal or private information in your question."], write:"My question… Sources given… Which checked out…"},
     {t:"Set your sharing rule", how:["Write a one-line personal rule for sharing, such as “If I haven’t checked it, I say so, or I don’t share it.”","Think of how you’d like to correct a friend or relative kindly, and write the first sentence you’d use."], write:"My sharing rule… How I’d start a kind correction…"}
   ], proof:"One statistic rewritten honestly, one chart checked label-first, one AI answer with its sources checked, and your personal sharing rule."},
   read:[
     {book:"wlsf", where:"Part V “Field Guide”, Chapter 36 “Using Google Books to Track Down Quotes”, and Part IV, Chapter 23 “How to Think about Research”", note:"The book predates AI chatbots; its quote- and source-tracing methods are exactly what checking an AI answer needs."},
     {book:"soc", where:"Background reading: Chapter 2 “Sociological Research” (its key terms define correlation and intervening variables)", note:"The textbook covers correlation and causation only briefly; Track 3 (Data Literacy) goes deeper."}
   ]
  }
  ],
  checkpoint:["t1u6-q02","t1u6-q05","t1u6-q11","t1u6-q14","t1u6-q19","t1u6-q23","t1u6-q27","t1u6-q30","t1u6-q34","t1u6-q38","t1u6-q41","t1u6-q44"],
  codex:[
   {id:"misinformation-types", title:"Misinformation, disinformation and malinformation", aka:["fake news","information disorder","seven types of misinformation"], tags:["misinformation","basics"],
    summary:"Three kinds of information disorder, sorted by two questions (is it false? is it meant to harm?), and seven common types of misleading content.",
    levels:{
     starter:[
      "“Fake news” is a loose label. Researchers prefer more precise words, based on two questions: **is it false?** and **is it meant to harm?**",
      {list:[
        "[[misinformation|Misinformation]]: false, but shared without intending harm. A friend forwards an out-of-date warning, believing it.",
        "[[disinformation|Disinformation]]: false, and created or shared to deceive or harm. Someone invents a story to damage a rival.",
        "[[malinformation|Malinformation]]: true, but used to cause harm. Someone publishes a person’s real address to harass them."
      ]},
      "Much of the false content that reaches you is misinformation: passed on by real people who believe it. So the useful question is “is this true?”, not “who is lying?”.",
      {key:"Judge the claim, not the person who shared it."},
      "Researchers also sort misleading content into types, from satire that loses its context to stories invented from nothing. Knowing the type tells you what to check: the date, the place, the source, or the original version."
     ],
     builder:[
      "The framework comes from *Information Disorder*, a 2017 report for the Council of Europe by Claire Wardle and Hossein Derakhshan. They avoided the term “fake news” because it was too vague, and because politicians around the world were using it to dismiss coverage they disliked.",
      "In a 2019 guide for First Draft, Wardle described seven types of mis- and disinformation, running roughly from least to most deliberately deceptive:",
      {table:[
        ["Type","In short"],
        ["Satire or parody","No intent to harm, but can fool people once its context is lost"],
        ["False connection","Headline, picture or caption doesn’t support the content"],
        ["Misleading content","Real information used selectively to frame an issue or person"],
        ["False context","Genuine content shared with false information about when, where or why"],
        ["Imposter content","A genuine source is impersonated"],
        ["Manipulated content","Genuine information or imagery edited to deceive"],
        ["Fabricated content","Entirely made up, designed to deceive and do harm"]
      ]},
      "Naming the type tells you what to check. For false context, find the original date and place. For imposter content, check the real organisation’s official channels. For a false connection, read beyond the headline.",
      "Historical examples show none of this is new: the BBC’s 1957 April Fool’s film of a Swiss “spaghetti harvest”, shown on a factual programme, convinced many viewers; the Cottingley “fairy” photographs (1917), later admitted to show cardboard cut-outs, fooled many for decades."
     ],
     pro:[
      "Wardle and Derakhshan also proposed analysing any case through three **elements** (the *agent* who creates or spreads it, the *message*, and the *interpreter* who receives it) and three **phases** (creation, production and distribution). The same message can have different agents with different motives at each phase: a satirist creates it, an opportunist re-posts it to provoke anger, and sincere users distribute it. The category depends on the phase you look at.",
      "This matters for responses. Content moderation, labelling and law tend to focus on agents and messages; education focuses on interpreters. Because intent is usually invisible, platform policies and fact-checkers often avoid judging motive and assess the claim and its context instead.",
      "Malinformation is the category people forget. It includes leaks of genuine private information, doxxing, and genuine material deliberately moved into a misleading context (which overlaps with “false context”). Accuracy alone doesn’t make content harmless.",
      "Some limits of the typology: real cases often combine types (a manipulated image with a false connection headline); “misleading content” is a judgement call that reasonable people can dispute; and satire can be used as a shield (“it was just a joke”) for content meant to deceive.",
      {tip:"In your own notes, record both the type and the evidence: “False context: earliest copy is from 2019, different country (link).” That’s how professional fact-checks are written."}
     ]
    },
    related:["why-misinformation-spreads","sift-method","image-verification"],
    read:[{book:"wlsf", where:"Part I “Four Moves and a Habit”, Chapter 1 “Why This Book?”"}],
    sources:[{t:"Wardle & Derakhshan, Information Disorder (Council of Europe report, 2017), via Harvard Shorenstein Center", url:"https://shorensteincenter.org/?p=10550"},{t:"First Draft: Understanding Information Disorder (Wardle, 2019)", url:"https://firstdraftnews.org/wp-content/uploads/2019/10/Information_Disorder_Digital_AW.pdf"},{t:"Science Museum Group: Frances Griffiths (Cottingley Fairies)", url:"https://collection.sciencemuseumgroup.org.uk/people/ap28805/griffiths-frances"}], checked:"2026-11"},

   {id:"why-misinformation-spreads", title:"Why false information spreads", aka:["virality","confirmation bias","filter bubble","echo chamber","illusory truth effect"], tags:["misinformation","psychology"],
    summary:"Novelty, emotion, speed, engagement-ranked feeds and our own biases help false content travel; filter bubbles matter less than often claimed.",
    levels:{
     starter:[
      "False stories often travel faster than true ones. Not because people are foolish, but because false stories tend to be **surprising** and **emotional**, and sharing takes one tap while checking takes a minute.",
      "Our own minds help it along. [[confirmation-bias|Confirmation bias]] means we check less carefully when a claim fits what we already think. Hearing a claim several times also makes it feel more familiar, and familiar feels true.",
      "Platforms play a part too: feeds often show more of what gets strong reactions, and big share counts make a post *feel* checked, though popularity only measures attention.",
      {key:"The moment you feel a strong urge to share is the moment to pause."},
      "None of this means people who share false stories are foolish. Anyone can be caught out, especially on topics they don’t know well. A habit of pausing works better than trusting yourself to always notice."
     ],
     builder:[
      "The best-known evidence comes from Vosoughi, Roy and Aral (MIT), published in *Science* in 2018. They studied about 126,000 cascades of stories on Twitter from 2006 to 2017, each fact-checked by independent organisations. False stories were about 70% more likely to be reshared, and reached 1,500 people about six times faster than true ones. False stories were more novel, and replies to them showed more surprise, fear and disgust. Removing bots didn’t change the main result: people drove the difference.",
      "Other contributors:",
      {list:[
        "**Engagement-based ranking**: a [[recommendation-algorithm|recommendation algorithm]] that favours what people react to can reward outrage and amazement.",
        "**The illusory truth effect**: repeated claims feel truer, even to people who know better.",
        "**Social proof**: likes and shares signal that others accepted it.",
        "**Identity**: sharing can signal belonging to a group, which matters more to people than accuracy in that moment."
      ]},
      "A [[filter-bubble|filter bubble]] (Eli Pariser’s term, 2011) is algorithmic personalisation that hides other views; an [[echo-chamber|echo chamber]] is an environment where people mostly hear their own views repeated, often by choice. Both are real possibilities, but see the Pro level for what the evidence shows.",
      "Not every false story goes viral, and not every viral story is false. The point is that the features that help content spread (novelty, emotion, simplicity) have nothing to do with whether it’s accurate."
     ],
     pro:[
      "In 2022 the Reuters Institute for the Study of Journalism (Ross Arguedas, Robertson, Fletcher and Nielsen) reviewed research on echo chambers, filter bubbles and polarisation. Key findings:",
      {list:[
        "Partisan online news echo chambers are much less widespread than commonly assumed; the authors estimated about 6–8% of the UK public. The United States was an outlier: it was the only country studied where more than 10% of people were estimated to rely only on partisan news sources.",
        "Most people have relatively diverse news diets, and many more people consume little online news than live in echo chambers.",
        "Algorithmic selection by search and social media generally led to **slightly more diverse** news use, the opposite of the filter-bubble prediction, through “automated serendipity” and incidental exposure.",
        "Self-selection, especially by a small, highly interested and strongly partisan minority, plays a larger role than algorithms.",
        "Evidence on polarisation is mixed and varies by country; much research is US-centred, and newer platforms are under-studied."
      ]},
      "Two cautions follow. First, “small” doesn’t mean “unimportant”: highly active minorities can shape what others see and what journalists cover. Second, the Twitter study measured a particular platform and period; patterns may differ on video platforms, private messaging apps and in other languages.",
      {tip:"When you read a confident claim about “the algorithm” or “echo chambers”, ask which platform, which country, which years and which outcome was measured. The research is more specific than the headlines."}
     ]
    },
    related:["misinformation-types","sharing-responsibly","attention-design"],
    read:[{book:"wlsf", where:"Part I, Chapter 3 “Building a Fact-Checking Habit by Checking Your Emotions”; “Avoiding Confirmation Bias in Searches” (Chapter 42 in the online edition)"}],
    sources:[{t:"MIT Sloan: Study: False news spreads faster than the truth", url:"https://mitsloan.mit.edu/ideas-made-to-matter/study-false-news-spreads-faster-truth"},{t:"Reuters Institute: Echo chambers, filter bubbles, and polarisation: a literature review (2022)", url:"https://reutersinstitute.politics.ox.ac.uk/echo-chambers-filter-bubbles-and-polarisation-literature-review"}], checked:"2026-11"},

   {id:"lateral-reading", title:"Lateral reading", aka:["reading laterally","click restraint","civic online reasoning"], tags:["fact-checking","research"],
    summary:"Judging an unfamiliar source by leaving it and reading what independent sources say about it, the way professional fact-checkers do.",
    levels:{
     starter:[
      "When you meet an unfamiliar website, the natural thing is to study it: the design, the About page, the references. That’s **vertical** reading, and it’s easy to fool, because anyone can make a site look professional and describe themselves glowingly.",
      "[[lateral-reading|Lateral reading]] means leaving the site. Open a new tab and search for the organisation or author’s name. See what encyclopedias, news reports and fact-checkers say about them. Then decide whether to go back.",
      "It’s like checking out a stranger who offers you a deal: you don’t rely on the CV they wrote; you ask people who know them.",
      {key:"Find out who is behind a source before you spend time on what it says."},
      "Professional fact-checkers do this within seconds of landing on a site they don’t know. It usually takes less than a minute, and it saves you from spending time on sources that don’t deserve it."
     ],
     builder:[
      "The term comes from research by Sam Wineburg and Sarah McGrew of the Stanford History Education Group (now the independent Digital Inquiry Group). In a study reported in 2017, they watched 10 professional fact-checkers, 10 university historians with PhDs and 25 Stanford undergraduates evaluate websites and search for information.",
      "Historians and students mostly read vertically and were often misled by official-sounding names, logos, references and `.org` addresses. Fact-checkers quickly left unfamiliar sites to see what other sources said, and reached better-supported conclusions in a fraction of the time.",
      "The fact-checkers also showed [[click-restraint|click restraint]]: they scanned the whole page of search results before choosing what to open, instead of clicking the first link.",
      {ol:[
        "Note the site, organisation and author.",
        "Open a new tab; search the name (add `funding`, `who runs`, or `Wikipedia`).",
        "Scan the results; prefer independent, reputable sources about the source.",
        "Decide whether, and for what, you’ll trust it."
      ]},
      "The Digital Inquiry Group’s Civic Online Reasoning curriculum frames this with three questions: Who is behind the information? What is the evidence? What do other sources say?",
      "Lateral reading doesn’t mean distrusting everything. Often the check confirms that a source is reputable, and you read it with more confidence. The aim is calibrated trust: matching how much you rely on a source to what is known about it."
     ],
     pro:[
      "Lateral reading reverses traditional checklist approaches, which ask readers to inspect a page for signals such as currency, authority and professional appearance. Those signals are cheap to imitate. Reputation, by contrast, is built by what others say over time and is harder to fake. That’s why professionals check reputation first.",
      "Some practical refinements:",
      {list:[
        "**Search the name, not the address.** Searching the site’s own URL often returns the site itself.",
        "**Use Wikipedia for orientation**, then its references, especially for funding and controversies.",
        "**Look for the organisation’s purpose**: advocacy group, trade association, think tank, government agency, university, news outlet, company. Each can be useful; you just need to know which you’re reading.",
        "**Check the author separately** from the publication: a reputable outlet can publish a guest writer with an agenda.",
        "**Know when to stop.** Lateral reading should take a minute or two. If you can’t find anything about a source, that absence is itself informative for a claim that matters."
      ]},
      "Studies of classroom programmes based on these methods, including a 2022 randomised field study in US high-school classes, have reported significant improvements in students’ ability to judge the credibility of online sources. Like any habit, the skill improves with practice.",
      {tip:"A quick tell for advocacy and front groups: a neutral-sounding name (“Council”, “Institute”, “Alliance”) plus little independent coverage of who funds it."}
     ]
    },
    related:["sift-method","using-wikipedia","evaluating-sources","url-anatomy"],
    read:[{book:"wlsf", where:"Part IV “Read Laterally”, Chapters 16–19 (“What ‘Reading Laterally’ Means” to “Activity: Evaluate a Site”)"}],
    sources:[{t:"Stanford Graduate School of Education: Stanford scholars observe ‘experts’ to see how they evaluate the credibility of information online", url:"https://ed.stanford.edu/news/stanford-scholars-observe-experts-see-how-they-evaluate-credibility-information-online"},{t:"Digital Inquiry Group: Lateral Reading and the Nature of Expertise (Wineburg & McGrew)", url:"https://cor.inquirygroup.org/research/lateral-reading-and-the-nature-of-expertise"}], checked:"2026-11"},

   {id:"sift-method", title:"SIFT: four moves for checking", aka:["SIFT","Stop Investigate Find Trace","four moves"], tags:["fact-checking"],
    summary:"Mike Caulfield’s quick routine: Stop, Investigate the source, Find better coverage, Trace claims to the original.",
    levels:{
     starter:[
      "[[sift|SIFT]] is a four-step habit for checking things you see online, designed to take a minute or two:",
      {list:[
        "**S**top: pause before you read, react or share. Do you know this source?",
        "**I**nvestigate the source: who’s behind it? (Read laterally.)",
        "**F**ind better coverage: what do reliable sources say about the claim?",
        "**T**race to the original: where did the claim, quote, photo or video first appear, and was it reported accurately?"
      ]},
      "You don’t always need all four. Often one move settles it.",
      {key:"Pause, find out who’s behind it, see what better sources say, trace it upstream."},
      "Think of SIFT as the checking version of looking both ways before crossing a road: quick, almost automatic once it’s a habit, and enough to prevent most accidents. Each move takes seconds to a minute."
     ],
     builder:[
      "Mike Caulfield, a digital-literacy researcher, introduced SIFT in 2019, building on his 2017 open textbook *Web Literacy for Student Fact-Checkers* (whose earlier moves were: check for previous work, go upstream to the source, read laterally, circle back).",
      {table:[
        ["Move","Typical actions"],
        ["Stop","Notice emotion and urgency. Ask what you actually need to know. Also “stop” if you’re lost in a long search, and refocus."],
        ["Investigate","Search the source’s name in a new tab; check an encyclopedia entry, news coverage, credentials."],
        ["Find better coverage","Search the claim itself; look for reputable news, official bodies, expert consensus, fact-checks."],
        ["Trace","Follow links upstream; find the full quote, the original study, the first upload of a photo."]
      ]},
      {ex:"Claim: “A new law bans dogs from all parks from next month.”\nStop: surprising and emotional, so check.\nInvestigate: the post is from a page created last week.\nFind: no news coverage; the council’s website lists a proposal to require leads in two parks.\nTrace: the original is a council consultation document.\nVerdict: misleading; a limited proposal described as a total ban.", label:"Worked example (invented)"},
      "Each move is quick. The point is to spend your limited attention where it counts.",
      "Match the effort to the stakes. For a casual meme, Stop and a quick Find may be enough. For something you’ll cite, rely on or act on (a health decision, a donation, a big purchase), use all four moves."
     ],
     pro:[
      "SIFT deliberately emphasises **context over close reading**. Rather than evaluating a piece of content in isolation, it asks how it sits in the wider information environment: who produced it, what the consensus is, and where it came from. That matches how professional fact-checkers work, and it scales: you can apply it to a tweet, a video, a statistic or an AI answer.",
      "Some finer points from Caulfield’s writing and practice:",
      {list:[
        "**“Find better coverage” often beats “investigate”.** If the claim is significant, you may not care about this source at all; find the best source on the claim and read that instead.",
        "**Trace carefully with quotes.** Search a distinctive phrase in quotation marks; quotes drift in wording and attribution as they spread.",
        "**Know your purpose.** Checking whether to share a meme needs less than checking a source for a report.",
        "**Expect “partly true”.** Many claims mix accurate and misleading elements; your verdict can say so."
      ]},
      "Caulfield and Wineburg later expanded these ideas in their book *Verified* (2023). SIFT also pairs well with AI tools: treat a chatbot answer as one more source, and run S, F and T on its key claims.",
      {tip:"Caulfield’s original SIFT post and the textbook are openly licensed (CC BY 4.0), so teachers can adapt them freely with attribution."}
     ]
    },
    related:["lateral-reading","fact-checkers","image-verification","ai-chatbot-accuracy"],
    read:[{book:"wlsf", where:"Part I, Chapter 2 “Four Moves” and Part III, Chapter 7 “Go Upstream to Find the Source”"}],
    sources:[{t:"Mike Caulfield: SIFT (The Four Moves), Hapgood, 2019", url:"https://hapgood.us/2019/06/19/sift-the-four-moves/"},{t:"Caulfield: Web Literacy for Student Fact-Checkers (open textbook)", url:"https://pressbooks.pub/webliteracy/"}], checked:"2026-11"},

   {id:"fact-checkers", title:"Fact-checking organisations", aka:["fact checks","IFCN","International Fact-Checking Network"], tags:["fact-checking"],
    summary:"Who professional fact-checkers are, what the IFCN Code of Principles requires, and how to use their work without over-trusting it.",
    levels:{
     starter:[
      "A [[fact-check]] tests a specific public claim against evidence and explains its verdict, with sources. Many countries have professional fact-checking organisations, and some news agencies run fact-checking teams.",
      "To find one, search the claim’s key words plus `fact check`. If a reliable fact-checker has already looked into it, you’ve saved yourself the work. This is what Caulfield calls “looking for previous work”.",
      "Fact-checkers can make mistakes, and they can only check a small share of claims. Use them as strong evidence, read their sources, and remember: no fact-check doesn’t mean “true”.",
      {key:"A good fact-check shows its working, so you can check it too."},
      "Examples include Full Fact in the UK, Africa Check, and Chequeado in Argentina; many countries and languages have their own. Reading two fact-checkers on the same claim is a good habit."
     ],
     builder:[
      "The **International Fact-Checking Network (IFCN)**, based at the Poynter Institute, runs a Code of Principles (launched in 2016) for fact-checking organisations. Signatories commit to:",
      {list:[
        "Non-partisanship and fairness",
        "Transparency of sources",
        "Transparency of funding and organisation",
        "Transparency of methodology",
        "Open and honest corrections"
      ]},
      "Applicants are assessed by independent assessors with journalism experience in their region, and decisions are made by the IFCN’s advisory board. Signatories must apply for renewal every year (after five successful assessments, every other year), and can be removed if they break the code.",
      "Examples of fact-checking organisations include Full Fact (UK), Africa Check, Chequeado (Argentina) and teams at international news agencies. Check an organisation’s current status on the IFCN website rather than relying on any list, because status changes.",
      "Since 2025, Google no longer shows special highlighted fact-check boxes in its search results, so searching fact-checkers’ own sites, or adding `fact check` to your search, matters more.",
      "Reading a fact-check well: note exactly which claim was checked (wording matters), read the explanation rather than only the rating, and open at least one of the sources it cites. A fact-check that doesn’t show its sources deserves no more trust than any other unsupported claim. Fact-checks are also dated: a verdict can be updated when new evidence appears."
     ],
     pro:[
      "Fact-checking has strengths and real limits that professionals discuss openly:",
      {list:[
        "**Selection**: fact-checkers choose which claims to check. Transparent selection criteria (required by the IFCN code) let you judge whether coverage is balanced.",
        "**Verdict scales differ** between organisations (true/false, ratings, “missing context”). Read the explanation, not just the label.",
        "**Speed vs depth**: a fact-check can lag behind a viral claim by hours or days.",
        "**Reach**: corrections typically reach fewer people than the original claim.",
        "**Trust**: fact-checkers are criticised by people across the spectrum; the defence is transparency of sources and methods, which lets readers verify independently."
      ]},
      "The IFCN’s assessment process includes external review and an advisory board vote; applicants pay an application fee, with hardship waivers available. Signatory status signals commitment to the code; it doesn’t certify that every individual check is right.",
      "When two fact-checkers disagree, compare their sources and the exact wording of the claim each checked: they’re often checking slightly different versions.",
      {tip:"Fact-checks are excellent “previous work” for images: search the image’s description plus `fact check`, or reverse-search the image and look for fact-checking sites in the results."},
      "Platforms’ relationships with fact-checkers change. Some have paid fact-checkers to label or reduce the reach of false posts; others have moved towards notes written by users. Check a platform’s current policy rather than assuming a label (or its absence) means a post has been checked."
     ]
    },
    related:["sift-method","lateral-reading","image-verification"],
    read:[{book:"wlsf", where:"Part II “Look for Previous Work”, Chapters 4 “How to Use Previous Work” and 5 “Fact-checking Sites”"}],
    sources:[{t:"IFCN Code of Principles: application process", url:"https://ifcncodeofprinciples.poynter.org/process"},{t:"Full Fact: International Fact-Checking Network", url:"https://fullfact.org/about/international-fact-checking-network"},{t:"Poynter: Google removes ClaimReview fact-check snippets (2025)", url:"https://www.poynter.org/ifcn/2025/google-claimreview-fact-checks-snippets-removed/"}], checked:"2026-11"},

   {id:"using-wikipedia", title:"Using Wikipedia well", aka:["Wikipedia","encyclopedia","verifiability"], tags:["fact-checking","research"],
    summary:"How fact-checkers use Wikipedia: a fast starting point for who’s behind a source, with references to follow, and warning signs to watch.",
    levels:{
     starter:[
      "[[wikipedia|Wikipedia]] is a free online encyclopedia written and edited by volunteers. Anyone can edit it, which is why many people were told never to use it.",
      "Professional fact-checkers use it all the time, but as a **starting point**: a quick way to find out what an organisation is, who funds it, or whether it has been in the news. Then they follow the references at the bottom of the article to the original sources.",
      "Watch for warning signs: boxes at the top saying the article needs more citations, and “citation needed” tags in the text.",
      {key:"Wikipedia is a great place to start and a poor place to stop."},
      "Think of it as a map rather than the territory: it shows you where the evidence is, and you then go and look at the evidence itself."
     ],
     builder:[
      "Wikipedia’s core content policies help explain both its strengths and its limits:",
      {list:[
        "**Verifiability**: material should be attributable to reliable, published sources, cited so readers can check them.",
        "**No original research**: editors summarise published sources rather than adding their own findings.",
        "**Neutral point of view**: significant views are represented in proportion to their coverage in reliable sources."
      ]},
      "How to use it well:",
      {ol:[
        "Read the opening summary for orientation.",
        "Scan for warning banners and “citation needed” tags.",
        "Follow the references for any claim that matters; cite those sources, not Wikipedia, in serious work.",
        "On disputed topics, open the **Talk** page (editors’ discussion) and **View history** (recent changes)."
      ]},
      "OpenStax’s *Workplace Software and Skills* notes that using Wikipedia as a primary research source is generally frowned upon. That matches the advice here: it’s tertiary, a map to sources rather than a source of final authority.",
      "For lateral reading about an organisation, the most useful parts of an article are often the sections on history, funding, leadership and reception or controversies. A short article with few references, or one that reads like an advert, is itself a clue that little independent coverage exists. Wikipedia also exists in many languages; each edition is written separately, so coverage and quality differ between them.",
      "Remember that Wikipedia is a tertiary source: excellent for orientation, not a substitute for the evidence it cites."
     ],
     pro:[
      "Wikipedia’s reliability varies by article. Heavily watched articles on established topics are often accurate and quickly corrected; obscure articles, very recent events and topics with motivated editors (companies, public figures, contested histories) carry more risk. Edits can briefly introduce errors or vandalism before being reverted.",
      "Useful signals:",
      {list:[
        "**Reference quality**: are claims supported by reputable sources, or by press releases and the subject’s own site?",
        "**Edit history**: a burst of recent edits, or edit wars, suggests a contested topic.",
        "**Talk page**: shows disagreements, unresolved questions and past controversies.",
        "**Article assessment**: some articles are rated by editors (for example, “Good article” or “Featured article” badges) after review."
      ]},
      "For lateral reading, Wikipedia is especially useful for organisations: articles often have sections on funding, history, positions and controversies, each with citations you can check.",
      "Be aware of circular sourcing: a news article may have copied an unsourced Wikipedia claim, which Wikipedia then cites as its source. If several sources share identical wording, trace further upstream.",
      {tip:"Other language editions can be useful for local topics, and may cite local sources unavailable in English."},
      "Comparisons of Wikipedia with other reference works have reached different conclusions depending on the topic and method. The safest summary is that quality is uneven, so judge each article by its sourcing rather than by Wikipedia’s reputation in general."
     ]
    },
    related:["lateral-reading","evaluating-sources","sift-method"],
    read:[{book:"wlsf", where:"Part II, Chapter 6 “Wikipedia”"},{book:"wss", where:"Chapter 1, Section 1.3: “Conducting Business Research” (Wikipedia’s limits)"}],
    sources:[{t:"Caulfield: Web Literacy for Student Fact-Checkers (Chapter 6, Wikipedia)", url:"https://pressbooks.pub/webliteracy/"},{t:"OpenStax Workplace Software and Skills, 1.3 The Internet, Cloud Computing, and the Internet of Things", url:"https://openstax.org/books/workplace-software-skills/pages/1-3-the-internet-cloud-computing-and-the-internet-of-things"}], checked:"2026-11"},

   {id:"evaluating-sources", title:"Judging a source", aka:["credibility","primary and secondary sources","expertise","source evaluation"], tags:["research","fact-checking"],
    summary:"Primary, secondary and tertiary sources, and how to judge expertise, evidence and purpose.",
    levels:{
     starter:[
      "Three questions sort out most sources: **Who is behind it?** **What’s the evidence?** **What do other sources say?**",
      "It also helps to know how close a source is to the original:",
      {list:[
        "A [[primary-source|primary source]] is the original evidence: a study’s paper, a law’s text, a recording of a speech, a witness’s photo.",
        "A [[secondary-source|secondary source]] describes or analyses primary sources: a news report about a study, a review, a history book.",
        "A tertiary source summarises many others: encyclopedias, textbooks, guides."
      ]},
      "Use tertiary and secondary sources to understand a topic; go to the primary source to check a key claim.",
      {key:"Expertise is specific: an expert in one field isn’t automatically an expert in another."},
      "These checks take minutes, not hours, and they get faster with practice."
     ],
     builder:[
      "**Expertise.** Does the person’s training or work match this topic? Do other experts treat them as an authority? Are they speaking for an organisation with an interest in the answer?",
      "**Evidence.** Is any evidence offered? What kind: a personal story, a single study, a review of many studies, official statistics? Does it match the claim (a mouse study doesn’t show effects in people)?",
      "**Purpose.** Is the source trying to inform, persuade, sell or entertain? News, opinion, advocacy and advertising can all be useful, once you know which you’re reading.",
      "**Funding.** OpenStax’s *Workplace Software and Skills* suggests asking who the author is, who paid for the research, how current it is, and whether biases are visible. Funding doesn’t make work wrong, but it’s context.",
      {table:[
        ["Source","Strength","Watch for"],
        ["Official statistics agency","Large, methodical data","Definitions; what’s excluded"],
        ["Review of many studies","Weighs the whole evidence","Which studies were included"],
        ["Single new study","New evidence","Small samples; not yet replicated"],
        ["Advocacy group report","Clear argument","Selective evidence"],
        ["Company press release","Direct from the source","Promotional framing"]
      ]},
      "A practical routine: (1) Who is behind it? (2) What kind of source is it: primary, secondary or tertiary? (3) Does the author have relevant expertise? (4) What evidence is offered, and does it match the claim? (5) What do other reliable sources say? Five questions, a few minutes."
     ],
     pro:[
      "Professionals judge **claims**, not just sources. A generally reliable outlet can get a story wrong; a partisan source can report an accurate fact. So the question becomes: is this source reliable *for this particular claim*? A trade association may be authoritative on its industry’s sales figures and unreliable on the health effects of its products.",
      "Consensus matters. On questions where expert bodies broadly agree, a lone dissenter needs extraordinary evidence. But consensus can change with new evidence, and on genuinely open questions, honest sources say so. Signs of good-faith uncertainty: ranges rather than single numbers, stated limitations, corrections.",
      "Caulfield advises “choosing your experts first”: before looking at a debate, identify the recognised authorities (professional bodies, major research institutions, specialist reporters) so you can weigh the arguments against them.",
      {list:[
        "**Triangulate**: several *independent* sources agreeing is stronger than one. Check that they aren’t all repeating the same original.",
        "**Look for conflicts of interest** in disclosures, especially in health and product research.",
        "**Check dates**: guidance and data change. An accurate 2015 source may be outdated."
      ]},
      {tip:"When primary sources are technical, a careful secondary source written by a specialist journalist or a review by experts is often the best route to understanding. Then check one key point against the primary source."}
     ]
    },
    related:["lateral-reading","peer-review","news-opinion-sponsored","search-skills"],
    read:[{book:"wlsf", where:"Part IV, Chapters 23 “How to Think about Research”, 24 “Finding High Quality Secondary Sources” and 25 “Choosing Your Experts First”"},{book:"wss", where:"Chapter 1, Section 1.3: “Conducting Business Research”"}],
    sources:[{t:"OpenStax Workplace Software and Skills, 1.3 The Internet, Cloud Computing, and the Internet of Things", url:"https://openstax.org/books/workplace-software-skills/pages/1-3-the-internet-cloud-computing-and-the-internet-of-things"},{t:"Caulfield: Web Literacy for Student Fact-Checkers", url:"https://pressbooks.pub/webliteracy/"}], checked:"2026-11"},

   {id:"search-skills", title:"Search skills and operators", aka:["search operators","advanced search","site:","filetype:","quotation marks"], tags:["research","search"],
    summary:"Choosing good keywords and using operators (quotes, minus, site:, filetype:) that work in Google, Bing and DuckDuckGo today.",
    levels:{
     starter:[
      "A search engine matches your words to pages. Better words find better pages:",
      {list:[
        "Use the words an answer would contain.",
        "Be specific: names, places, dates, the kind of source you want.",
        "Phrase it neutrally: `coffee health effects evidence` rather than `why coffee is bad`."
      ]},
      "A few [[search-operator|search operators]] make searches precise:",
      {list:[
        "`\"exact phrase\"`: only pages with those words in that order.",
        "`-word`: leave out pages with that word.",
        "`site:who.int`: only pages from that site.",
        "`filetype:pdf`: only PDF files."
      ]},
      {key:"Ranking isn’t a truth score. Scan the results before you click."},
      "Search engines rank results using many signals, such as how well a page matches your words and how many other sites link to it. None of these measures truth, and adverts can appear at the top. Read the web addresses before you click."
     ],
     builder:[
      "What each engine documents on its own help pages (checked 2026):",
      {table:[
        ["Engine","Documented operators","Notes"],
        ["Google","Quotes, minus, `site:`, `filetype:`, `before:`, `after:`","No space after the colon. Date operators use the date a page was last updated."],
        ["Bing","Quotes, `NOT` or minus, `+`, `OR`, `site:`, `filetype:`, `intitle:` and more","`NOT` and `OR` must be capitals."],
        ["DuckDuckGo","Quotes, minus, `site:`, `filetype:`, `intitle:`, `inurl:`","Some operators aren’t applied strictly; related results may appear."]
      ]},
      "Older guides list `+` and `~` for Google; its current help page doesn’t, so don’t rely on them there.",
      "Combine operators: `\"food storage\" guidance site:who.int filetype:pdf -recipe`. Search engines also have menus for filtering by date, region or type (often under **Tools** or a filter button).",
      "Searching for quotes: put a distinctive part of the quote in quotation marks. If it never appears before a certain date, or only on quote sites without a source, be suspicious of the attribution.",
      "Keywords matter more than operators. Use the vocabulary experts use (`hypertension` as well as `high blood pressure`), add the name of the kind of organisation that would publish the answer, and change words rather than their order when results are poor. Neutral phrasing (`coffee health effects evidence`) avoids results that simply agree with a loaded question; Caulfield’s textbook calls this avoiding confirmation bias in searches."
     ],
     pro:[
      "Search results are personalised to a degree (language, location, sometimes history) and shift over time, so two people may see different results. For research you need to repeat, record the exact query, engine and date.",
      "Advanced moves:",
      {list:[
        "**Domain-wide searches**: `site:ac.uk` or `site:edu` for universities, `site:gov.uk` for UK government. These limit by domain ending; they don’t vouch for every page.",
        "**Excluding a site**: `-site:example.com` removes one site (documented by DuckDuckGo; also widely used in Google).",
        "**Finding original documents**: `filetype:pdf` plus an organisation’s domain often surfaces reports and data tables.",
        "**Specialised engines**: scholarly search engines and library catalogues for research articles; news archives for older reporting; official statistics sites for data."
      ]},
      "Search engines increasingly show AI-written summaries above the links. Treat them like any chatbot answer: a starting point whose claims need checking against the linked sources.",
      "Operators change without much notice. When one seems ignored, check the engine’s help page rather than assuming you typed it wrong, or try another engine.",
      {tip:"Search for the absence of evidence too: if a dramatic claim appears only on one site and nowhere reputable, that’s informative."},
      "Engines also differ in what they record about you: some personalise results using your account history, others say they don’t track searches. Unit 5 covers privacy settings. For sensitive searches, that difference may matter as much as result quality."
     ]
    },
    related:["evaluating-sources","lateral-reading","ai-chatbot-accuracy"],
    read:[{book:"wss", where:"Chapter 1, Section 1.3: “Using the Internet” and “Conducting Effective Searches”"},{book:"wlsf", where:"“Avoiding Confirmation Bias in Searches” (Chapter 42 in the online edition)"}],
    sources:[{t:"Google Search Help: Refine Google searches", url:"https://support.google.com/websearch/answer/2466433"},{t:"Microsoft Support: Advanced search options (Bing)", url:"https://support.microsoft.com/en-us/bing/advanced-search-options"},{t:"DuckDuckGo Help: Search syntax", url:"https://duckduckgo.com/duckduckgo-help-pages/results/syntax"}], checked:"2026-11"},

   {id:"peer-review", title:"Peer review and scientific publishing", aka:["peer-reviewed","preprints","retractions","predatory journals"], tags:["research","science"],
    summary:"How journals check research before publishing, what that does and doesn’t guarantee, and the traps: preprints, retractions and predatory journals.",
    levels:{
     starter:[
      "[[peer-review|Peer review]] is how most academic journals decide what to publish. Before a study appears, the journal’s editor sends it to other experts in the same field. They check the methods and reasoning and recommend publishing, revising or rejecting it.",
      "Think of it as a quality inspection, not a guarantee. Inspectors catch many problems, but not all, and a product that passes can still turn out to have flaws later.",
      "So “peer-reviewed” is a good sign. “One peer-reviewed study proves…” is still an overstatement: science becomes reliable when results are repeated by others.",
      {key:"Peer review is a filter for quality, not a stamp of truth."},
      "Two words worth knowing: a **preprint** is a paper shared before review, and a **retracted** paper has been withdrawn after serious problems were found."
     ],
     builder:[
      "According to the University of California Museum of Paleontology’s *Understanding Science* site, the process runs roughly: submission to a journal; the editor sends it to reviewers in the field; reviewers give feedback and a recommendation; authors revise and resubmit; only work meeting scientific standards is published. It’s competitive and slow, frequently taking more than a year from submission to publication.",
      "Peer-reviewed work, as that site says, “isn’t necessarily correct or conclusive”. It meets the standards of science, and then the real testing starts: other researchers build on it, challenge it and try to replicate it.",
      {table:[
        ["Term","Meaning","What it means for you"],
        ["Preprint","Posted publicly before peer review","Early and unchecked; treat as provisional"],
        ["Peer-reviewed article","Checked by experts before publication","A good sign; still one piece of evidence"],
        ["Review or meta-analysis","Combines many studies","Often the best summary of the evidence"],
        ["Retraction","Withdrawn after serious problems are found","Don’t rely on it, even if it still circulates"]
      ]},
      "How to recognise a peer-reviewed article: it appears in a scholarly journal, usually shows when it was received and accepted, has an abstract and a reference list, and the journal describes its review process on its website. Library databases and scholarly search engines often let you filter for peer-reviewed sources. For everyday decisions, systematic reviews and statements by expert bodies summarise many peer-reviewed studies at once."
     ],
     pro:[
      "Peer review has known weaknesses. Reviewers usually don’t have the raw data or rerun analyses, so fraud and subtle statistical errors can slip through. Reviewer quality varies. Positive, surprising results are more likely to be published than null results (publication bias), which can skew the overall literature. Replication efforts in several fields have found that some published findings don’t hold up.",
      "**Predatory journals** exploit the label. They charge publication fees while doing little or no real review, often use names similar to respected journals, and send mass email invitations. Caulfield’s textbook calls their methods “stupid journal tricks”. Checks: is the journal indexed in recognised databases? Do established researchers in the field publish there? What do independent sources say about the publisher?",
      "**Preprints** are legitimate and valuable, especially in fast-moving fields, but news coverage sometimes reports them as established findings. Look for the word “preprint” or the name of a preprint server, and check later whether a reviewed version appeared and what changed.",
      "**Retractions** don’t always reach everyone who read or cited the original. Journal pages normally show a retraction notice; searching the title with the word `retraction` is a quick check for an influential paper.",
      {tip:"For everyday decisions, prefer conclusions from expert bodies and systematic reviews over a single new study, however exciting the headline."}
     ]
    },
    related:["evaluating-sources","misleading-numbers","news-opinion-sponsored"],
    read:[{book:"wlsf", where:"Part IV, Chapters 20 “Stupid Journal Tricks” and 21 “Finding a Journal’s Impact Factor”"}],
    sources:[{t:"Understanding Science (UC Museum of Paleontology): Scrutinizing science: Peer review", url:"https://undsci.berkeley.edu/understanding-science-101/how-science-works/scrutinizing-science-peer-review/"}], checked:"2026-11"},

   {id:"news-opinion-sponsored", title:"News, opinion and sponsored content", aka:["native advertising","advertorial","editorial","press release","partner content"], tags:["media","fact-checking"],
    summary:"Telling news reports, analysis, opinion and paid content apart, even when they share a page and a design.",
    levels:{
     starter:[
      "One news website can contain several very different kinds of writing:",
      {list:[
        "**News reports** tell you what happened, with sources.",
        "**Analysis** explains why it happened or what it means.",
        "**Opinion** argues for a view (columns, editorials, comment pieces).",
        "[[sponsored-content|Sponsored content]] is advertising paid for by a company, made to look like an article."
      ]},
      "All can be useful, but they do different jobs. An opinion piece shows you an argument, not proof that something happened. Sponsored content wants to sell you something.",
      {key:"Find the label before you trust the content. It’s often small, near the headline."},
      "Labels to look for include “Opinion”, “Comment”, “Analysis”, “Sponsored”, “Partner content” and “Advertisement”. On social media, look for “Ad” or “Paid partnership”.",
      "Mixing them up is one of the easiest ways to be misled: an opinion can feel like a report if you miss the small label at the top."
     ],
     builder:[
      {table:[
        ["Type","Common labels"],
        ["News","News, a reporter’s byline, dateline, “reporting by”"],
        ["Analysis","Analysis, explainer, “what we know”, “fact check”"],
        ["Opinion","Opinion, comment, column, editorial, “view”, letters"],
        ["Sponsored","Sponsored, paid post, partner content, “in association with”, advertisement, promoted"]
      ]},
      "Other places to look: the section name in the address (`/opinion/`, `/sponsored/`), a different font or background colour, a disclosure line at the top or bottom, or the author being described as a “partner” or “contributor”.",
      "**Press releases** are an organisation’s own announcement. News sites sometimes reprint them with few changes. If several outlets share identical sentences, trace them upstream: you may find the press release.",
      "**Syndication** means the same article appears on many sites. Check the original publisher, which may be more or less reliable than the site you’re reading.",
      "A quick routine for any article: (1) find the label; (2) find the author and read laterally about them if they’re unfamiliar; (3) check whether claims are attributed to named sources; (4) look for links to primary documents; (5) ask what the piece wants from you. Reputable outlets publish their editorial standards and corrections policies, which explain how they keep news, opinion and advertising apart. Influencer posts can be adverts too; disclosure rules and enforcement differ between countries."
     ],
     pro:[
      "Native advertising works precisely because it borrows the trust readers give to editorial content. Labelling rules exist in many countries, but labels vary and can be subtle. On social media, influencer posts may carry “paid partnership” or “ad” tags, or none at all.",
      "Opinion is not the problem; confusion is. Strong news organisations separate news and opinion staff and label clearly. When opinion is presented in a news format, or a news report uses loaded language (“slammed”, “destroyed”), the line blurs.",
      "Practical tests:",
      {list:[
        "**Purpose**: what does this piece want me to do: understand, agree, or buy?",
        "**Sourcing**: does it name sources and link to evidence, or rely on assertion?",
        "**Balance**: for news, are relevant parties given a chance to respond?",
        "**Corrections**: does the outlet publish corrections openly? That’s a mark of a trustworthy news source."
      ]},
      {tip:"Caulfield’s textbook includes a short activity on spotting sponsored content; it’s a good way to train your eye."},
      "Ownership is useful context. Knowing who owns an outlet (a public broadcaster, a private company, a non-profit, a political organisation) helps you interpret its choices, though ownership alone doesn’t determine accuracy. Lateral reading about the outlet itself quickly tells you this. Outlets with named reporters, published standards and a visible corrections record have more to lose from getting things wrong."
     ]
    },
    related:["evaluating-sources","lateral-reading","peer-review"],
    read:[{book:"wlsf", where:"Part III, Chapters 8 “Identifying Sponsored Content”, 9 “Activity: Spot Sponsored Content” and 10 “Understanding Syndication”; Part IV, Chapters 26–27 on news sources"}],
    sources:[{t:"Caulfield: Web Literacy for Student Fact-Checkers", url:"https://pressbooks.pub/webliteracy/"}], checked:"2026-11"},

   {id:"image-verification", title:"Checking images and videos", aka:["reverse image search","Google Lens","TinEye","Bing Visual Search","false context","cheapfakes"], tags:["fact-checking","images"],
    summary:"Using reverse image search and context clues to find where and when an image or video first appeared.",
    levels:{
     starter:[
      "Most misleading pictures are real photos with a false caption: an old flood shared as today’s, a different city, a different event. A photo can show that a scene existed; on its own it can’t prove where, when or why.",
      "A [[reverse-image-search|reverse image search]] lets you search with a picture instead of words. It finds matching and similar images across the web. If a “breaking news” photo appears on sites from years ago, the caption is wrong.",
      "Tools include Google Lens (or Google Images’ **Search by image**), Bing Visual Search and TinEye. Try more than one.",
      {key:"Separate what the image shows from what the caption claims, then check the claims."},
      "For a video, take a screenshot of a clear, distinctive frame and search with that."
     ],
     builder:[
      {table:[
        ["Tool","How","Useful feature"],
        ["Google","**Search by image** on google.com; in Chrome right-click an image → **Search with Google Lens**; on phones, the Lens icon in the Google app","Broad coverage; pages using the image"],
        ["Bing Visual Search","Bing Images → camera icon","Different index; a second opinion"],
        ["TinEye","Upload or paste a link at tineye.com","Sort by **Oldest**, **Most changed**, **Biggest image**"]
      ]},
      "Method:",
      {ol:[
        "Write down what the caption claims (where, when, what, who).",
        "Search with two tools; for video, screenshot a clear frame.",
        "Find the earliest copy and its original caption; look for uncropped, larger versions.",
        "Check context clues: signs, languages, landmarks, weather, shadows.",
        "Look for independent coverage of the claimed event.",
        "Conclude: confirmed, false context, manipulated, or unverified."
      ]},
      "No matches doesn’t mean genuine: the image may be new, private or heavily cropped.",
      "What the results can tell you: if the earliest copy is older than the claimed event, the caption is wrong. If it first appeared on a stock-photo site, an artist’s portfolio or an AI art account, the image may be staged, illustrative or generated. If copies are cropped differently, look for the widest one, which may show context that was cut out. Keep notes with links and dates, so you can show your working if you correct someone."
     ],
     pro:[
      "Professionals combine several techniques:",
      {list:[
        "**Geolocation**: matching landmarks, terrain and street furniture with maps and street-level imagery.",
        "**Chronolocation**: estimating time from shadows, weather records, seasonal vegetation, or events visible in the scene.",
        "**Account forensics**: when the uploader’s account was created, what else it posts, whether it plausibly was there.",
        "**Metadata**: camera and date information in the original file can be a clue, but many platforms strip it and it can be edited."
      ]},
      "Search indexes differ, and coverage is uneven across countries and languages, so results from one tool are never complete. TinEye states that it does not save the images people search with; other services have their own policies, so avoid uploading private images.",
      "For video, sequences are often reused across events. Search several frames, especially distinctive ones, and check audio separately: audio can be added to unrelated footage.",
      "Caulfield’s textbook also suggests filtering search results by time and place to find the original, and treating viral content as something to trace upstream rather than judge on sight.",
      {tip:"Search the image description plus `fact check`: recycled hoax images are often already debunked."},
      "Web archives, such as the Internet Archive’s Wayback Machine, can show what a page looked like when an image was first posted, even if the page has since changed or been deleted. Caulfield’s textbook has a chapter on using it to check page changes."
     ]
    },
    related:["ai-generated-content","sift-method","fact-checkers","misinformation-types"],
    read:[{book:"wlsf", where:"Part III, Chapters 11–15 (“Tracking the Source of Viral Content” to “Activity: Trace Viral Photos Upstream”)"}],
    sources:[{t:"Google Search Help: Search with an image on Google", url:"https://support.google.com/websearch/answer/1325808"},{t:"Microsoft Support: Using Bing Visual Search", url:"https://support.microsoft.com/en-us/bing/using-bing-visual-search"},{t:"TinEye: How to use TinEye to search for an image", url:"https://blog.tineye.com/how-to-use-tineye-search/"}], checked:"2026-11"},

   {id:"ai-generated-content", title:"AI-generated images, video and audio", aka:["deepfakes","voice clones","content credentials","C2PA","watermarks","SynthID","synthetic media"], tags:["AI","images","fact-checking"],
    summary:"What deepfakes and voice clones are, why spotting them by eye or detector is unreliable, and what content credentials and watermarks can and can’t tell you.",
    levels:{
     starter:[
      "[[generative-ai|Generative AI]] tools can create realistic images, video, voices and text from a short description. A [[deepfake-video|deepfake]] uses AI to make a real person appear to say or do something they didn’t; a voice clone imitates someone’s voice.",
      "Old tips like “count the fingers” are less useful every year, because the tools keep improving. Online AI detectors also make many mistakes.",
      "What works better is the same as for any claim: find the original source, look for reliable coverage, and for calls or messages asking for money, **check with the person through a channel you already trust**.",
      {key:"Finding a glitch can show something is fake. Finding no glitch proves nothing."},
      "Some files carry Content Credentials, a signed record of how they were made. When present, they’re useful evidence; when absent, that tells you very little, because most files don’t have them."
     ],
     builder:[
      "**Detection is unreliable.** NIST’s 2024 review (*NIST AI 100-4*) found that synthetic-content detectors can have substantial error rates, especially on content from generators they weren’t trained on, or after compression and resizing, and that text detectors have wrongly flagged non-native English writing as AI-made.",
      "**Provenance** takes a different approach: record a file’s origin when it’s made. The Coalition for Content Provenance and Authenticity (C2PA) publishes an open standard for [[content-credentials|Content Credentials]]: a signed record of what made a file (camera, app or AI tool), when, and what edits followed. Some devices and services now support it, such as Google’s Pixel 10 camera (2025), Sony’s camera verification service for news photographers, some AI image generators, and Google Photos’ **How this was made** panel.",
      "**Watermarks** are hidden signals embedded in AI output, such as Google DeepMind’s SynthID.",
      "**Limits.** Most images have no credentials; screenshots and many uploads strip them; Google says credentials alone don’t establish whether media is real or fake. NIST found most current watermarking schemes vulnerable to removal, and some can be spoofed.",
      "A practical routine for a suspicious image or clip: trace it to the earliest source; check for credentials if your tools support them; look for independent coverage; treat detector scores as weak hints; and if it asks you to do something urgent (pay, share, panic), verify through a trusted channel first."
     ],
     pro:[
      "Threats include voice-clone fraud (family-emergency and executive-impersonation scams), fake endorsements in investment scams, non-consensual intimate imagery, and fabricated clips of public figures. A further effect is the **liar’s dividend**: when fakes are common, genuine recordings can be dismissed as fake.",
      "Content Credentials are cryptographically signed, so tampering with the record is detectable, but signing proves only who made a claim about the content, not that the scene was real. The ecosystem has had security problems: in 2025 one camera maker suspended its credentials feature after a vulnerability allowed unauthentic images to carry valid signatures. Credentials also depend on every app in the chain preserving them.",
      "NIST’s review notes that metadata can be stripped altogether, that the accuracy of signed claims is typically not verifiable even cryptographically, and that watermarks can sometimes be spoofed (faked). Its overall view is that provenance, watermarking and detection each help but none is sufficient alone.",
      "Practical approach:",
      {list:[
        "Treat credentials as **positive evidence when present**, and their absence as neutral.",
        "Use SIFT on the content’s claims, whatever the technology says.",
        "For personal requests, verify out of band: call back on a known number; some families and teams agree a code word."
      ]},
      {tip:"The US FTC’s advice for family-emergency calls: question the emergency and check with the person, or another relative, on a number you know."}
     ]
    },
    related:["image-verification","ai-chatbot-accuracy","social-engineering"],
    sources:[{t:"NIST AI 100-4: Reducing Risks Posed by Synthetic Content (2024)", url:"https://nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content"},{t:"Google Photos Help: How Google Photos helps you identify how photos were made", url:"https://support.google.com/photos/answer/16496549?hl=en"},{t:"FTC: Family emergency scams", url:"https://consumer.ftc.gov/scams/family-emergency-scams"}], checked:"2026-11"},

   {id:"ai-chatbot-accuracy", title:"How accurate are AI chatbots?", aka:["hallucination","confabulation","large language models","AI answers","AI overviews"], tags:["AI","fact-checking"],
    summary:"Why fluent AI answers can be wrong, what “hallucination” means, real examples, and a routine for checking AI answers.",
    levels:{
     starter:[
      "AI chatbots are built on [[large-language-model|large language models]]: programs trained on huge amounts of text to predict which word is likely to come next. That makes them fluent and often helpful.",
      "But fluent isn’t the same as checked. Chatbots sometimes produce confident, specific, false statements, including made-up quotes, statistics and references. This is called a [[hallucination]].",
      "Use them as a first draft or a brainstorming partner. For anything that matters, open the sources and check each key claim yourself. Asking the chatbot “are you sure?” is not a check.",
      {key:"Treat every fact, number, quote and reference from an AI tool as a claim to verify."},
      "The same applies to AI-written summaries shown at the top of some search results: read the links underneath to check them."
     ],
     builder:[
      "NIST’s *Generative AI Profile* (NIST AI 600-1, July 2024) calls the problem **confabulation**: “the production of confidently stated but erroneous or false content”, known colloquially as hallucinations or fabrications. It links it to how the models are trained, by predicting the next word.",
      "Two documented examples:",
      {list:[
        "**Invented case law (2023).** In the US case *Mata v. Avianca*, a federal judge in New York fined two lawyers and their firm $5,000 after they filed a brief citing non-existent cases generated by ChatGPT. When asked whether the cases were real, the chatbot had said they were.",
        "**News answers (2025).** A study coordinated by the European Broadcasting Union and led by the BBC, with 22 public broadcasters in 18 countries, assessed over 3,000 answers from four AI assistants: 45% had at least one significant issue, 31% serious sourcing problems and 20% major accuracy problems."
      ]},
      {ol:[
        "Ask for sources, then open them.",
        "Check references by searching exact titles in quotation marks or in a library catalogue.",
        "Check quotes, numbers, dates and names separately.",
        "Read laterally and find better coverage.",
        "Don’t paste private information into the tool."
      ]},
      "The safest uses are those where you can check the result yourself: explaining a concept you then read about, suggesting search terms, or summarising a document you have in front of you. The riskiest are questions whose answers you can’t easily verify."
     ],
     pro:[
      "Why do models confabulate? Training rewards producing plausible continuations of text, not stating uncertainty. When the model lacks reliable information, a plausible-sounding answer can still be its most likely output. Retrieval (letting the model search the web or documents) reduces but doesn’t eliminate errors: the model can misread, merge or misattribute what it retrieved, and the EBU/BBC study found sourcing to be the most common problem.",
      "Risk is higher for: precise citations and quotes; numbers and dates; niche topics with little training data; recent events beyond the training data; and questions that presuppose something false (“Why did X happen?” when it didn’t). Phrasing a question neutrally helps, as with search.",
      "AI summaries in search engines carry the same risks, compressed into a confident paragraph above the links. The links beneath are your route to checking.",
      "Responsible use in study and work:",
      {list:[
        "Follow your school’s or employer’s rules on AI use and disclosure.",
        "Keep the sources you actually checked; cite those, not the chatbot, for factual claims.",
        "For high-stakes topics (health, law, money), use AI to prepare questions for a qualified person, not to replace them."
      ]},
      {tip:"A fabricated reference often has a real-sounding journal and real authors who work in the field. Searching the exact title is the fastest test."}
     ]
    },
    related:["sift-method","search-skills","ai-generated-content"],
    sources:[{t:"NIST AI 600-1: Generative Artificial Intelligence Profile (2024)", url:"https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"},{t:"VRT: EBU/BBC study shows AI assistants misrepresent news content 45% of the time (2025)", url:"https://communication.vrt.be/largest-study-of-its-kind-shows-ai-assistants-misrepresent-news-content-45-of-the-time-regardless-of-language-or-territory"},{t:"LawSites: Court imposes sanctions on lawyers who filed bogus cases (Mata v. Avianca, 2023)", url:"https://www.lawnext.com/2023/06/court-imposes-sanctions-on-lawyers-who-filed-bogus-cases-after-relying-on-chatgpt-for-legal-research.html"}], checked:"2026-11"},

   {id:"misleading-numbers", title:"Numbers and charts that mislead", aka:["cherry-picking","percentage points","relative risk","absolute risk","truncated axis","misleading charts"], tags:["numbers","data","fact-checking"],
    summary:"Cherry-picking, percent vs percentage points, relative vs absolute risk, truncated axes and correlation claims: how true numbers give false impressions.",
    levels:{
     starter:[
      "Most misleading statistics use real numbers, chosen or shown in a way that gives the wrong impression. Ask:",
      {list:[
        "**Compared with what?** and **out of how many?**",
        "**Since when?** A chosen start date can make any trend look up or down. Picking only helpful data is [[cherry-picking]].",
        "**Percent or percentage points?** From 4% to 5% is 1 [[percentage-point|percentage point]], or a 25% increase.",
        "**Where does the chart’s axis start?** A bar chart that doesn’t start at zero (a [[truncated-axis|truncated axis]]) exaggerates differences."
      ]},
      {key:"A big relative change in a small number is still a small number."},
      "None of this needs advanced maths. It needs the habit of asking what a number is being compared with.",
      "Example: “Café sales up 50% since March!” sounds impressive, until you learn the café was closed for repairs for half of March."
     ],
     builder:[
      {h:"Relative vs absolute risk"},
      "If a risk goes from 1 in 10,000 to 2 in 10,000, the relative risk has doubled (“100% higher”), but the absolute increase is 1 extra case per 10,000 people (0.01 percentage points). Both are true; only the absolute figure shows how much it matters to an individual.",
      {h:"Charts"},
      "The UK Office for National Statistics’ chart guidance says bar charts should always start at zero, because readers compare bar lengths. Line charts can start above zero if needed to show a trend, with clearly labelled axes. Also watch for missing units, uneven time steps, dual axes, 3D effects and cumulative totals presented as growth.",
      {h:"Correlation claims"},
      "A [[correlation-claim|correlation claim]] says two things move together. The Australian Bureau of Statistics’ example: ice cream and sunscreen sales rise and fall together because both follow hot weather, not because one causes the other. Look for third factors, reversed direction and chance.",
      "A quick routine for any statistic: find the original source; check the definitions (what exactly was counted); note the period and starting point; turn relative changes into absolute ones; compare with a sensible baseline (the same month last year, a rate per person); and read a chart’s labels before its message.",
      "Correlation claims hide in everyday words: “linked to”, “associated with” and “tied to” usually describe a correlation, while “causes” and “prevents” claim more."
     ],
     pro:[
      "Further traps:",
      {list:[
        "**Base rate neglect**: a test that is “99% accurate” for a rare condition can still produce more false alarms than true cases.",
        "**Survivorship bias**: studying only successes (businesses still open, apps still popular) hides the failures.",
        "**Averages hiding spread**: a mean can be pulled by a few extreme values; a median may represent a typical case better.",
        "**Changing definitions**: a jump may reflect a new way of counting rather than a real change. Official statistics publish notes on methods; read them.",
        "**Per-capita vs totals**: larger places have larger totals; compare rates per person."
      ]},
      "Reading a chart professionally means reading its metadata first: title, units, axis ranges, data source, period, and any notes on method. Then ask what the chart doesn’t show.",
      "These ideas are covered in depth in Track 3 (Data Literacy); for causation in research, see {{correlation-causation}}.",
      {tip:"Rewrite a statistic in plain words: “Out of every 10,000 people, about 1 more would be affected.” If it no longer sounds dramatic, the original framing was doing the work."},
      "Also watch the denominator: “1,000 cases” means something very different in a town of 50,000 people and a country of 50 million. Rates per 100,000 people make fair comparisons between places of different sizes possible."
     ]
    },
    related:["correlation-causation","evaluating-sources","peer-review"],
    sources:[{t:"ONS Service Manual: Axes and gridlines (data visualisation)", url:"https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines"},{t:"Australian Bureau of Statistics: Correlation and causation", url:"https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/correlation-and-causation"}], checked:"2026-11"},

   {id:"sharing-responsibly", title:"Sharing responsibly and correcting kindly", aka:["pause before sharing","correcting misinformation","talking to family about misinformation"], tags:["misinformation","wellbeing"],
    summary:"Habits for the moment before you share, how to correct your own mistakes, and how to respond kindly when someone you know shares something false.",
    levels:{
     starter:[
      "Most false information spreads through ordinary people trying to help, warn or amuse others. The moment before you tap Share is where you can make a difference.",
      {list:[
        "**Pause**, especially if you feel a strong emotion or the post says “share before it’s deleted”.",
        "**If you can’t check it, don’t share it as true.** Say it’s unverified, or don’t share.",
        "**Share the best source**, not a screenshot.",
        "**If you got it wrong, say so**: delete or edit, and post a correction."
      ]},
      {key:"Correcting yourself openly isn’t embarrassing; it’s what trustworthy people and newsrooms do."},
      "When someone you know shares something false, a private, friendly message with a better source usually works better than a public correction.",
      "Small habits add up: if each person who passes something on checks first, false stories run out of road much sooner."
     ],
     builder:[
      "When a friend or relative shares something false, how you respond affects whether they listen. Public shaming tends to make people defensive. Approaches that tend to work better:",
      {list:[
        "**Go private** where you can: a direct message rather than a public reply.",
        "**Start from shared values**: “I saw this too and wanted to check it, because I care about this as well.”",
        "**Focus on the claim**, not their intelligence.",
        "**Offer a better source**, ideally one they already respect.",
        "**Ask genuine questions**: “Where did this come from? I couldn’t find it anywhere else.”",
        "**Keep it short.** One clear link beats ten."
      ]},
      "In group chats, a calm reply with a source can help others who were silently unsure, even if the original sharer doesn’t change their mind.",
      "Look after yourself too: you don’t have to correct everything. Muting a draining group or stepping away for a while is reasonable.",
      "If you correct someone in public, for example in a community group, keep it about the information: “This photo is from 2016, in another country; here’s the original.” Avoid repeating the false claim in big letters or reposting the false image. And when you share news yourself, include where it came from, so others can check it too."
     ],
     pro:[
      "Fact-checkers and educators have learned some lessons about corrections:",
      {list:[
        "**Lead with the accurate information**, not the myth, so the correct version is what sticks; mention the false claim once, clearly labelled.",
        "**Explain why the false version is wrong** (for example, “the photo is from 2016, in another country”). An explanation is easier to remember than a bare “false”.",
        "**Mind the format**: forwarding a false image with “FAKE” written above it can still spread the image. A link to a fact-check, or a description, may be better.",
        "**Respect identity**: people resist corrections that feel like attacks on their group. Neutral, specific, non-judgemental language helps."
      ]},
      "For communities and organisations (a club, a school, a workplace channel), a simple shared norm helps: share sources with claims, label opinions and rumours, and correct visibly when something was wrong. Moderators can pin reliable sources during fast-moving events.",
      {tip:"Model the behaviour: when you share news, include where it came from. People copy what they see others do."},
      "Research on corrections is broadly encouraging: corrections usually reduce belief in a false claim, and the feared “backfire effect” (a correction making belief stronger) appears to be uncommon. Effects can fade over time, though, so repeating accurate information and giving an alternative explanation of what really happened both help."
     ]
    },
    related:["why-misinformation-spreads","sift-method","fact-checkers"],
    read:[{book:"wlsf", where:"Part I, Chapter 3 “Building a Fact-Checking Habit by Checking Your Emotions”"}],
    sources:[{t:"MIT Sloan: Study: False news spreads faster than the truth", url:"https://mitsloan.mit.edu/ideas-made-to-matter/study-false-news-spreads-faster-truth"},{t:"Caulfield: SIFT (The Four Moves)", url:"https://hapgood.us/2019/06/19/sift-the-four-moves/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"misinformation", term:"Misinformation", def:"False or misleading information shared without intending harm, usually by someone who believes it.", codex:"misinformation-types"},
   {id:"disinformation", term:"Disinformation", def:"False information created or shared deliberately to deceive or cause harm.", codex:"misinformation-types"},
   {id:"malinformation", term:"Malinformation", def:"True information used to cause harm, such as publishing someone’s private address or a genuine private message to harass them.", codex:"misinformation-types"},
   {id:"satire", term:"Satire", def:"Humour that exaggerates or invents to make a point. Not meant to deceive, but it can fool people once shared without its original context.", codex:"misinformation-types"},
   {id:"clickbait", term:"Clickbait", def:"A headline or thumbnail designed to make you click, often by exaggerating or teasing what the content actually says.", codex:"misinformation-types"},
   {id:"false-context", term:"False context", def:"Genuine content (a real photo, video or quote) shared with the wrong date, place or story attached.", codex:"misinformation-types"},
   {id:"imposter-content", term:"Imposter content", def:"Content that pretends to come from a genuine source, for example using a real organisation’s name or logo.", codex:"misinformation-types"},
   {id:"recommendation-algorithm", term:"Recommendation algorithm", def:"The automatic rules a platform uses to choose and order what appears in your feed, often based on what people react to.", codex:"why-misinformation-spreads"},
   {id:"confirmation-bias", term:"Confirmation bias", def:"Everyone’s tendency to notice, believe and remember information that fits what they already think, and to check it less carefully.", codex:"why-misinformation-spreads"},
   {id:"filter-bubble", term:"Filter bubble", def:"The idea that personalisation by algorithms hides views different from yours. Research on news suggests it’s weaker than often claimed.", codex:"why-misinformation-spreads"},
   {id:"echo-chamber", term:"Echo chamber", def:"A space where people mostly hear views like their own repeated back to them, often because of their own choices of sources.", codex:"why-misinformation-spreads"},
   {id:"lateral-reading", term:"Lateral reading", def:"Checking an unfamiliar source by leaving it and searching what independent sources say about it, in new tabs.", codex:"lateral-reading"},
   {id:"click-restraint", term:"Click restraint", def:"Scanning a whole page of search results before choosing what to open, instead of clicking the first link.", codex:"lateral-reading"},
   {id:"sift", term:"SIFT", def:"Mike Caulfield’s four quick checking moves: Stop, Investigate the source, Find better coverage, Trace claims to the original.", codex:"sift-method"},
   {id:"fact-check", term:"Fact-check", def:"An article that tests a specific public claim against evidence, explains a verdict and shows its sources.", codex:"fact-checkers"},
   {id:"wikipedia", term:"Wikipedia", def:"A free online encyclopedia written by volunteers. Best used as a quick starting point whose cited sources you then follow.", codex:"using-wikipedia"},
   {id:"cheapfake", term:"Cheapfake", def:"Media made misleading with simple methods rather than AI: a wrong caption, cropping, or slowing down or speeding up a video.", codex:"image-verification"},
   {id:"reverse-image-search", term:"Reverse image search", def:"Searching with a picture instead of words, to find where else it appears online and when it first appeared.", codex:"image-verification"},
   {id:"generative-ai", term:"Generative AI", def:"AI tools that create new text, images, audio or video from a prompt, such as chatbots and image generators.", codex:"ai-generated-content"},
   {id:"deepfake-video", term:"Deepfake (video and images)", def:"Video, audio or images made or altered with AI to show a real person doing or saying something they didn’t.", codex:"ai-generated-content"},
   {id:"provenance", term:"Provenance", def:"The record of where something came from and what has happened to it since, like a history of ownership for a painting.", codex:"ai-generated-content"},
   {id:"content-credentials", term:"Content Credentials", def:"A digitally signed record, based on the C2PA standard, that can travel with a file and show what made it, when, and what edits followed.", codex:"ai-generated-content"},
   {id:"ai-watermark", term:"AI watermark", def:"A hidden signal embedded in AI-generated content to mark its origin. Useful when present, but often removable.", codex:"ai-generated-content"},
   {id:"search-operator", term:"Search operator", def:"A symbol or word that gives a search engine a precise instruction, such as quotation marks, a minus sign, `site:` or `filetype:`.", codex:"search-skills"},
   {id:"primary-source", term:"Primary source", def:"Original evidence: a study’s paper and data, a law’s text, a speech recording, a witness’s photo, an official statistics release.", codex:"evaluating-sources"},
   {id:"secondary-source", term:"Secondary source", def:"A source that describes, analyses or interprets primary sources, such as a news report about a study or a review article.", codex:"evaluating-sources"},
   {id:"peer-review", term:"Peer review", def:"Checking of research by other experts in the field before a journal publishes it. A quality filter, not a guarantee of truth.", codex:"peer-review"},
   {id:"preprint", term:"Preprint", def:"A research paper shared publicly before peer review. Early and potentially useful, but not yet checked.", codex:"peer-review"},
   {id:"opinion-piece", term:"Opinion piece", def:"Writing that argues for a view, such as a column, editorial or comment. Useful for arguments, not proof of events.", codex:"news-opinion-sponsored"},
   {id:"sponsored-content", term:"Sponsored content", def:"Advertising paid for by a company and designed to look like an article. Also called native advertising or partner content.", codex:"news-opinion-sponsored"},
   {id:"cherry-picking", term:"Cherry-picking", def:"Choosing only the data, dates or studies that support a point and leaving out the rest.", codex:"misleading-numbers"},
   {id:"percentage-point", term:"Percentage point", def:"The simple difference between two percentages. From 4% to 5% is 1 percentage point, which is a 25% increase.", codex:"misleading-numbers"},
   {id:"truncated-axis", term:"Truncated axis", def:"A chart axis that starts above zero. On bar charts it exaggerates differences.", codex:"misleading-numbers"},
   {id:"correlation-claim", term:"Correlation claim", def:"A claim that two things go together. On its own it doesn’t show that one causes the other.", codex:"misleading-numbers"},
   {id:"large-language-model", term:"Large language model", def:"The kind of AI behind chatbots: a program trained on huge amounts of text to predict likely next words, producing fluent answers.", codex:"ai-chatbot-accuracy"},
   {id:"hallucination", term:"Hallucination (AI)", def:"When an AI tool produces confident, fluent but false content, such as invented facts, quotes or references. NIST calls it confabulation.", codex:"ai-chatbot-accuracy"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u6-q01", lesson:"t1u6-l1", level:1, q:"What is the difference between misinformation and disinformation?", options:[
     {t:"Both are false; disinformation is created or shared on purpose to deceive or harm", ok:true, why:"The difference is intent. Misinformation is shared in good faith; disinformation is deliberate."},
     {t:"Misinformation is false; disinformation is true", why:"Both are false. True information used to harm is malinformation."},
     {t:"Disinformation only appears on social media", why:"Disinformation can appear anywhere: print, broadcast, messaging, websites."},
     {t:"There is no difference; they are two spellings of the same word", why:"Researchers use them for different things, based on intent."}
   ]},
   {id:"t1u6-q02", lesson:"t1u6-l1", level:2, q:"Someone posts a genuine screenshot of a coworker’s private medical message in a public group to embarrass them. Which category fits best?", options:[
     {t:"Malinformation", ok:true, why:"The information is true, but it’s shared to cause harm."},
     {t:"Misinformation", why:"Misinformation is false. This message is genuine."},
     {t:"Disinformation", why:"Disinformation is false. Here the problem isn’t falseness but harmful use of true information."},
     {t:"Satire", why:"Nothing here is a joke or exaggeration; it’s a real private message used to harm."}
   ]},
   {id:"t1u6-q03", lesson:"t1u6-l1", level:1, q:"Which of Wardle’s seven types describes a real photo shared with the wrong date and place?", options:[
     {t:"False context", ok:true, why:"Genuine content with false information about when, where or why."},
     {t:"Fabricated content", why:"Fabricated content is entirely made up. Here the photo is real."},
     {t:"Imposter content", why:"Imposter content pretends to come from a genuine source, such as a fake logo."},
     {t:"Satire", why:"Satire is humour. A mislabelled real photo isn’t a joke."}
   ]},
   {id:"t1u6-q04", lesson:"t1u6-l1", level:1, q:"In the 2018 MIT study of stories on Twitter, how did false stories compare with true ones?", options:[
     {t:"They were more likely to be reshared and spread faster", ok:true, why:"False stories were about 70% more likely to be reshared and reached 1,500 people about six times faster."},
     {t:"They spread more slowly because people distrusted them", why:"The study found the opposite."},
     {t:"They spread at the same speed as true stories", why:"The study found a clear difference in favour of false stories."},
     {t:"They spread only because bots shared them", why:"The researchers found bots spread true and false stories at similar rates; people drove the difference."}
   ]},
   {id:"t1u6-q05", lesson:"t1u6-l1", level:3, q:"Kenji sees a shocking post about his town and immediately wants to forward it to his family. What does this lesson suggest he do first?", options:[
     {t:"Pause, because strong emotion is the moment we check least carefully, and check it before sharing", ok:true, why:"Emotional, surprising content spreads fast. Pausing is one of the most effective counter-moves."},
     {t:"Forward it quickly in case it’s true and urgent", why:"Speed is how false content spreads. If it’s true and urgent, reliable sources will confirm it within minutes."},
     {t:"Share it only if it has thousands of shares", why:"Share counts measure attention, not accuracy."},
     {t:"Assume it’s false because it’s shocking", why:"Plenty of true news is shocking. The point is to check, not to assume either way."}
   ]},
   {id:"t1u6-q06", lesson:"t1u6-l1", level:1, q:"What is confirmation bias?", options:[
     {t:"The tendency to accept and remember information that fits what we already believe", ok:true, why:"It lowers our guard for agreeable claims, which is when misinformation slips through."},
     {t:"A platform rule that confirms posts are true", why:"No such rule exists. Confirmation bias is a feature of human thinking."},
     {t:"Only believing information confirmed by two sources", why:"That’s a checking habit, not a bias."},
     {t:"A bias that affects only people with strong political views", why:"Everyone has it, regardless of politics or education."}
   ]},
   {id:"t1u6-q07", lesson:"t1u6-l1", level:2, q:"According to the 2022 Reuters Institute review, what mostly drives people into partisan news echo chambers?", options:[
     {t:"Their own choices, especially among a small, highly engaged partisan minority", ok:true, why:"The review found self-selection mattered more than algorithms, and echo chambers were smaller than often assumed."},
     {t:"Search engine algorithms that hide other views from everyone", why:"Studies generally found algorithmic selection led to slightly more diverse news use."},
     {t:"Television news", why:"The review focused on online news; it didn’t identify television as the main driver."},
     {t:"Nothing: echo chambers don’t exist", why:"They exist; they’re just smaller than often claimed, and a minority are in them."}
   ]},
   {id:"t1u6-q08", lesson:"t1u6-l1", level:3, q:"Fatima’s aunt shared a false story about a local school closing. She genuinely believed it. What’s the most accurate and useful way for Fatima to think about it?", options:[
     {t:"Her aunt shared misinformation in good faith; focus on the claim and offer a better source", ok:true, why:"Judge the claim, not the person. Most misinformation is shared by people trying to help."},
     {t:"Her aunt is spreading disinformation and should be called out publicly", why:"Disinformation requires intent to deceive. Public shaming also tends to backfire."},
     {t:"It doesn’t matter, because the story is local", why:"Local misinformation can cause real worry and harm. A kind correction helps."},
     {t:"It’s malinformation, because it’s about a school", why:"Malinformation is true information used to harm. This story is false."}
   ]},
   {id:"t1u6-q09", lesson:"t1u6-l1", level:2, q:"A satirical article from a humour website is screenshotted without the site’s name and shared widely by people who believe it. What has happened?", options:[
     {t:"Satire lost its context and became misinformation as sincere people shared it", ok:true, why:"The same content changes category as it travels: the joke became a believed false claim."},
     {t:"The humour site committed disinformation", why:"Its readers understood it as a joke. The problem arose when the context was removed."},
     {t:"It’s still harmless satire, whatever people believe", why:"Once people believe and act on it, it functions as misinformation."},
     {t:"It became malinformation", why:"Malinformation is true. This story is false."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u6-q10", lesson:"t1u6-l2", level:1, q:"What is lateral reading?", options:[
     {t:"Leaving a page to see what other, independent sources say about it", ok:true, why:"Fact-checkers open new tabs to check a source’s reputation instead of studying it in isolation."},
     {t:"Reading a page carefully from top to bottom", why:"That’s vertical reading, which the Stanford study found easy to fool."},
     {t:"Reading only the headline and first paragraph", why:"That’s skimming. Lateral reading is about checking the source elsewhere."},
     {t:"Reading the comments under an article", why:"Comments aren’t independent, reliable sources about who’s behind a site."}
   ]},
   {id:"t1u6-q11", lesson:"t1u6-l2", level:2, q:"In the Stanford study comparing fact-checkers, historians and students, what did the fact-checkers do differently?", options:[
     {t:"They quickly left unfamiliar sites to see what other sources said, and reached better conclusions faster", ok:true, why:"That’s lateral reading. They didn’t judge sites by their own appearance or claims."},
     {t:"They read every page on the site before deciding", why:"That’s vertical reading, what the historians and students tended to do."},
     {t:"They trusted sites with `.org` addresses", why:"`.org` addresses misled other participants. Anyone can register one."},
     {t:"They clicked the first search result each time", why:"They showed click restraint: scanning results before choosing."}
   ]},
   {id:"t1u6-q12", lesson:"t1u6-l2", level:1, q:"What does the “F” in SIFT stand for?", options:[
     {t:"Find better coverage", ok:true, why:"Look for reliable reporting or expert consensus on the claim itself."},
     {t:"Follow the account", why:"Following an account doesn’t check anything."},
     {t:"Forward to a friend", why:"Sharing is what SIFT helps you pause before doing."},
     {t:"Filter by date", why:"Date filters can help when tracing, but they’re not one of the four moves."}
   ]},
   {id:"t1u6-q13", lesson:"t1u6-l2", level:3, q:"Ana sees a quote attributed to a famous scientist in a meme. Which SIFT move is most directly about checking whether the scientist really said it?", options:[
     {t:"Trace claims, quotes and media to the original context", ok:true, why:"Tracing the quote to a book, speech or interview shows whether it’s real and accurately quoted."},
     {t:"Stop", why:"Stopping is the right start, but it doesn’t check the quote."},
     {t:"Investigate the source", why:"Investigating the meme account tells you about the account, not whether the scientist said it."},
     {t:"Share it with a question mark", why:"That’s not a SIFT move, and it still spreads an unchecked quote."}
   ]},
   {id:"t1u6-q14", lesson:"t1u6-l2", level:2, q:"What does being a verified signatory of the IFCN Code of Principles signal about a fact-checking organisation?", options:[
     {t:"It has committed to standards such as non-partisanship and transparency of sources, and been assessed against them", ok:true, why:"Signatories are assessed by independent assessors and must renew regularly. It’s a useful signal, not a guarantee."},
     {t:"Every fact-check it publishes is correct", why:"No organisation is error-free. The code requires open corrections."},
     {t:"It is run by a government", why:"Many signatories are independent organisations or newsrooms. The code isn’t about government status."},
     {t:"It checks every viral claim", why:"Fact-checkers choose which claims to check and explain their selection."}
   ]},
   {id:"t1u6-q15", lesson:"t1u6-l2", level:3, q:"Hana searches for a claim and finds no fact-check about it. What should she conclude?", options:[
     {t:"Nothing yet; fact-checkers cover only a fraction of claims, so she should find better coverage herself", ok:true, why:"No fact-check isn’t evidence either way. Look for reliable reporting or official sources."},
     {t:"The claim must be true", why:"Fact-checkers can’t cover everything. Absence of a check proves nothing."},
     {t:"The claim must be false", why:"Equally unjustified. She needs evidence, not an absence."},
     {t:"She should ask a fact-checker and share it while she waits", why:"Sharing an unchecked claim is what to avoid."}
   ]},
   {id:"t1u6-q16", lesson:"t1u6-l2", level:2, q:"Which is the best way to use Wikipedia when checking an unfamiliar organisation?", options:[
     {t:"Read it for a quick overview, check for warning banners, and follow its references to original sources", ok:true, why:"Fact-checkers use it as a fast starting point and rely on its cited sources."},
     {t:"Cite it as the final authority in a report", why:"For serious work, cite the sources it points to."},
     {t:"Never use it, because anyone can edit it", why:"Used well, it’s one of the fastest ways to find out who’s behind a source."},
     {t:"Only read the Talk page", why:"The Talk page helps on disputed topics, but the article and references come first."}
   ]},
   {id:"t1u6-q17", lesson:"t1u6-l2", level:3, q:"Tomás searches an organisation’s name. The first result is an ad from the organisation; the second is its About page; the third is a news investigation into its funding. What does click restraint suggest?", options:[
     {t:"Scan all the results and open the independent news investigation first", ok:true, why:"Independent coverage about the source is what lateral reading needs. The ad and About page are the organisation describing itself."},
     {t:"Click the first result, because it ranks highest", why:"It’s an ad. Ranking isn’t a measure of reliability."},
     {t:"Read the About page, because it’s official", why:"It’s official self-description, which is exactly what can’t be relied on alone."},
     {t:"Give up, because the results disagree", why:"Different kinds of sources are expected; choose the independent one."}
   ]},
   {id:"t1u6-q18", lesson:"t1u6-l2", level:1, q:"What does a `.org` web address tell you about a website?", options:[
     {t:"Very little; anyone can register a `.org` domain", ok:true, why:"`.org` registration is open. It doesn’t mean non-profit or reliable."},
     {t:"That it’s a registered charity", why:"There’s no such requirement for `.org` domains."},
     {t:"That its information has been checked", why:"No one checks content before a domain is registered."},
     {t:"That it’s a government site", why:"Government sites use other endings in many countries (such as `.gov` or `.gov.uk`)."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u6-q19", lesson:"t1u6-l3", level:1, q:"What does a reverse image search do?", options:[
     {t:"Finds other places online where the same or similar image appears", ok:true, why:"You search with a picture instead of words, which can reveal where and when it first appeared."},
     {t:"Proves whether an image is AI-generated", why:"It can help find the origin, but it doesn’t detect AI on its own."},
     {t:"Shows the GPS location where every photo was taken", why:"Location data is usually stripped and isn’t what reverse search finds."},
     {t:"Flips the image so you can see hidden details", why:"“Reverse” refers to searching with an image, not mirroring it."}
   ]},
   {id:"t1u6-q20", lesson:"t1u6-l3", level:2, q:"A viral photo is captioned “Today’s protest in the city centre.” Reverse search shows the same photo on a news site from 2015, captioned as a concert crowd. What’s the verdict?", options:[
     {t:"False context: a genuine photo with a false caption", ok:true, why:"The earlier, credible copy shows the image is real but from a different time and event."},
     {t:"Fabricated content", why:"The photo is genuine; only the caption is false."},
     {t:"Accurate, because the photo is real", why:"The claim is about today’s event, which the photo doesn’t show."},
     {t:"Unknown; reverse search tells you nothing", why:"An older credible copy with a different caption is strong evidence."}
   ]},
   {id:"t1u6-q21", lesson:"t1u6-l3", level:2, q:"Which TinEye option helps most when you want to find the first known appearance of an image?", options:[
     {t:"Sort results by Oldest", ok:true, why:"TinEye can sort matches so the earliest known copy comes first."},
     {t:"Sort results by Biggest image", why:"Useful for finding higher-resolution copies, not the earliest."},
     {t:"Sort results by Most changed", why:"That shows heavily edited versions first."},
     {t:"Use the default Best match", why:"Best match ranks by visual similarity, not age."}
   ]},
   {id:"t1u6-q22", lesson:"t1u6-l3", level:2, q:"Why is “look for weird hands and garbled text” a weak test for AI-generated images today?", options:[
     {t:"Newer tools often get these details right, so finding no glitch proves nothing", ok:true, why:"Glitches can reveal AI, but their absence is common in modern AI images."},
     {t:"Real photos never have odd details", why:"Real photos often have odd details too, which makes glitch-hunting even less reliable."},
     {t:"AI images always have perfect hands", why:"Not always. The point is that glitches are no longer reliable either way."},
     {t:"It’s actually the best test available", why:"Tracing the source and finding better coverage are much stronger."}
   ]},
   {id:"t1u6-q23", lesson:"t1u6-l3", level:3, q:"Mei runs a viral image through an online AI detector, which says “95% human”. What should she conclude?", options:[
     {t:"Very little; detectors can have substantial error rates, so she should trace the source and look for coverage", ok:true, why:"NIST’s review found detectors unreliable, especially on newer tools and compressed images."},
     {t:"It’s definitely a real photo", why:"A detector score isn’t proof. It can be wrong in both directions."},
     {t:"It’s definitely AI, because detectors are biased toward “human”", why:"There’s no basis for reversing the result. It’s simply weak evidence."},
     {t:"She should try detectors until one agrees with her", why:"That’s confirmation bias in action."}
   ]},
   {id:"t1u6-q24", lesson:"t1u6-l3", level:1, q:"What are Content Credentials (C2PA)?", options:[
     {t:"A signed record that can travel with a file, showing what made it, when, and what edits followed", ok:true, why:"They’re a provenance standard from the Coalition for Content Provenance and Authenticity."},
     {t:"A government licence needed to post photos", why:"They’re a voluntary industry standard, not a licence."},
     {t:"A list of a photographer’s qualifications", why:"They describe the file’s origin and edits, not a person’s training."},
     {t:"A watermark that proves an image is true", why:"Credentials record origin; they don’t prove what a scene shows is true."}
   ]},
   {id:"t1u6-q25", lesson:"t1u6-l3", level:3, q:"Sione checks a dramatic photo and finds it has no Content Credentials. What does that tell him?", options:[
     {t:"Almost nothing; most images have none, and screenshots and uploads often strip them", ok:true, why:"Absence of credentials is normal. It means “unknown”, not “fake”."},
     {t:"It’s fake", why:"Most genuine photos have no credentials either."},
     {t:"It’s genuine", why:"Absence doesn’t confirm anything."},
     {t:"It was made with AI", why:"Many AI images also lack credentials. Absence can’t tell you either way."}
   ]},
   {id:"t1u6-q26", lesson:"t1u6-l3", level:3, q:"Lucía gets a video call from someone who looks and sounds like her brother, asking her to send money urgently and not tell anyone. What should she do?", options:[
     {t:"End the call and contact her brother, or another relative, on a number she already has", ok:true, why:"Faces and voices can be faked. Verifying through a known channel is the reliable check."},
     {t:"Send the money because she can see his face", why:"Real-time face and voice imitation is possible. Urgency and secrecy are warning signs."},
     {t:"Ask him to turn his head to prove he’s real", why:"Such tricks aren’t reliable tests. Use a channel the caller doesn’t control."},
     {t:"Run the call through a deepfake detector", why:"Detectors are unreliable. A call to a known number is better."}
   ]},
   {id:"t1u6-q27", lesson:"t1u6-l3", level:2, q:"What is the “liar’s dividend”?", options:[
     {t:"When fakes are common, people can dismiss genuine recordings as fake", ok:true, why:"The existence of deepfakes can be used to cast doubt on real evidence."},
     {t:"Money scammers make from voice clones", why:"That’s fraud proceeds, not the liar’s dividend."},
     {t:"A reward paid to people who report fakes", why:"No; it’s a term for how deepfakes can undermine trust in real evidence."},
     {t:"The profit social media companies make from misinformation", why:"That’s a different issue. The term refers to dismissing real evidence."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u6-q28", lesson:"t1u6-l4", level:1, q:"What does putting words in quotation marks do in Google, Bing and DuckDuckGo?", options:[
     {t:"Searches for that exact phrase", ok:true, why:"All three document quotation marks for exact-phrase searches."},
     {t:"Excludes those words", why:"That’s the minus sign (or NOT in Bing)."},
     {t:"Searches only news sites", why:"Quotation marks don’t limit the type of site."},
     {t:"Translates the phrase", why:"Quotation marks don’t translate anything."}
   ]},
   {id:"t1u6-q29", lesson:"t1u6-l4", level:2, q:"Priya wants PDF reports about recycling, only from the World Health Organization’s website `who.int`. Which search works?", options:[
     {t:"`recycling report site:who.int filetype:pdf`", ok:true, why:"`site:` limits to the domain and `filetype:` to PDFs, with no spaces after the colons."},
     {t:"`recycling report site: who.int filetype: pdf`", why:"Spaces after the colons stop the operators working in Google."},
     {t:"`recycling report -who.int -pdf`", why:"The minus sign *excludes* those words, the opposite of what she wants."},
     {t:"`\"recycling report who.int pdf\"`", why:"Quotation marks look for that exact phrase, which is unlikely to appear on any page."}
   ]},
   {id:"t1u6-q30", lesson:"t1u6-l4", level:2, q:"A news article says “a new study found…”. What is the primary source?", options:[
     {t:"The published study itself", ok:true, why:"The study is the original evidence; the article is a secondary source about it."},
     {t:"The news article", why:"The article describes the study, so it’s secondary."},
     {t:"An encyclopedia entry on the topic", why:"Encyclopedias are tertiary sources."},
     {t:"A social media post sharing the article", why:"That’s even further from the original."}
   ]},
   {id:"t1u6-q31", lesson:"t1u6-l4", level:1, q:"Which statement about peer review is accurate?", options:[
     {t:"Experts check research before publication, but peer-reviewed work can still be wrong", ok:true, why:"It’s a quality filter; later research tests and sometimes overturns findings."},
     {t:"It proves a study’s conclusions are true", why:"Peer-reviewed work isn’t necessarily correct or conclusive."},
     {t:"It means the study was repeated by another team", why:"Replication is separate and usually happens after publication."},
     {t:"Anyone can peer-review by leaving a comment", why:"Reviewers are experts chosen by the journal’s editor."}
   ]},
   {id:"t1u6-q32", lesson:"t1u6-l4", level:3, q:"A well-known actor posts a long video explaining that a common medicine is dangerous. How should Dmitri weigh it?", options:[
     {t:"Look for what medical regulators, health services and relevant researchers say; the actor’s fame isn’t medical expertise", ok:true, why:"Expertise is specific. Find relevant experts and better coverage."},
     {t:"Trust it, because the actor seems sincere", why:"Sincerity isn’t evidence. People can be sincere and wrong."},
     {t:"Dismiss it, because actors are always wrong about health", why:"It might be right or wrong; check the evidence rather than judging by profession."},
     {t:"Trust it if the video has many views", why:"Views measure attention, not accuracy."}
   ]},
   {id:"t1u6-q33", lesson:"t1u6-l4", level:2, q:"An article on a news site is labelled “Partner content” and praises a brand of mattress. What is it?", options:[
     {t:"Sponsored content: advertising designed to look like an article", ok:true, why:"“Partner content” is a common label for paid content."},
     {t:"An independent product review by the newsroom", why:"The label signals the advertiser paid for it."},
     {t:"An opinion column by a staff writer", why:"Opinion pieces are labelled as opinion or comment, not partner content."},
     {t:"A peer-reviewed study", why:"It isn’t research at all; it’s advertising."}
   ]},
   {id:"t1u6-q34", lesson:"t1u6-l4", level:3, q:"Kenji reads a headline: “Study proves chocolate improves memory.” The study was a preprint posted last week, in 30 people. What’s the most accurate summary?", options:[
     {t:"An early, small, not-yet-reviewed result; “proves” overstates it", ok:true, why:"A small preprint is a starting point. Peer review and replication are still to come."},
     {t:"Proven, because it’s a study", why:"Being a study doesn’t make a finding proven, especially an unreviewed one."},
     {t:"False, because preprints are not real research", why:"Preprints are legitimate early research; they just haven’t been reviewed."},
     {t:"Reliable, because 30 people is a large sample", why:"Thirty is small for drawing firm conclusions about memory."}
   ]},
   {id:"t1u6-q35", lesson:"t1u6-l4", level:1, q:"Which operator excludes a word from Google search results?", options:[
     {t:"A minus sign directly before the word, like `-car`", ok:true, why:"Google documents the minus sign for excluding words."},
     {t:"A plus sign, like `+car`", why:"Google’s help no longer lists `+` as an operator."},
     {t:"Quotation marks around the word", why:"Quotation marks require an exact phrase; they don’t exclude it."},
     {t:"`site:car`", why:"`site:` limits results to a website or domain."}
   ]},
   {id:"t1u6-q36", lesson:"t1u6-l4", level:2, q:"What’s the main difference between an opinion piece and a news report?", options:[
     {t:"An opinion piece argues for a view; a news report tells you what happened, with sources", ok:true, why:"Both are useful, for different jobs. An argument isn’t proof that something happened."},
     {t:"Opinion pieces are always false", why:"They can contain accurate facts and strong arguments; they just aren’t neutral reporting."},
     {t:"News reports never contain quotes", why:"News reports usually quote sources."},
     {t:"There’s no difference online", why:"Most news sites label opinion separately, though the labels can be small."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u6-q37", lesson:"t1u6-l5", level:2, q:"A savings rate rises from 2% to 3%. Which statement is correct?", options:[
     {t:"It rose by 1 percentage point, which is a 50% increase", ok:true, why:"3 − 2 = 1 percentage point; 1 ÷ 2 = 50% relative increase."},
     {t:"It rose by 1%, which is a 1 percentage point increase", why:"The relative increase is 50%, not 1%. “1%” confuses percent change with percentage points."},
     {t:"It rose by 50 percentage points", why:"Percentage points are the simple difference: 1."},
     {t:"It rose by 33%", why:"That divides by the new value (1 ÷ 3). Percent change divides by the starting value."}
   ]},
   {id:"t1u6-q38", lesson:"t1u6-l5", level:3, q:"A headline says a food “triples your risk” of a rare illness. The risk goes from 1 in 100,000 to 3 in 100,000. What’s the most useful way to describe it?", options:[
     {t:"About 2 extra cases per 100,000 people: a large relative increase in a very small risk", ok:true, why:"Absolute risk shows how much it matters: 3 − 1 = 2 per 100,000."},
     {t:"A 300% chance of getting ill", why:"That misreads relative risk as a probability. The actual chance is 3 in 100,000."},
     {t:"Nothing changed", why:"The risk did rise; it’s just still very small."},
     {t:"Two-thirds of people who eat it get ill", why:"Only 3 in 100,000 do."}
   ]},
   {id:"t1u6-q39", lesson:"t1u6-l5", level:1, q:"Why is a bar chart with an axis starting at 95 misleading for values of 96 and 98?", options:[
     {t:"We compare bar lengths, so a small difference looks huge when bars don’t start at zero", ok:true, why:"A truncated axis on a bar chart exaggerates differences. Bar charts should start at zero."},
     {t:"Charts must always show values above 100", why:"No such rule exists."},
     {t:"Bar charts can’t show decimals", why:"They can. The problem is the axis start."},
     {t:"It isn’t misleading, because the numbers are correct", why:"Correct numbers can still give a false visual impression."}
   ]},
   {id:"t1u6-q40", lesson:"t1u6-l5", level:2, q:"Ice cream sales and sunscreen sales rise and fall together. What best explains this?", options:[
     {t:"A third factor, hot sunny weather, drives both", ok:true, why:"The Australian Bureau of Statistics uses this example: correlation from a shared cause."},
     {t:"Eating ice cream makes people buy sunscreen", why:"No evidence of that; it confuses correlation with causation."},
     {t:"Sunscreen makes people want ice cream", why:"Reversing the direction doesn’t fix the problem."},
     {t:"It’s pure coincidence", why:"There’s a clear shared cause, the weather."}
   ]},
   {id:"t1u6-q41", lesson:"t1u6-l5", level:1, q:"How does a large language model (the technology behind AI chatbots) produce its answers?", options:[
     {t:"By predicting likely next words based on patterns learned from huge amounts of text", ok:true, why:"That’s why answers are fluent, and why fluent doesn’t mean checked."},
     {t:"By looking up each answer in a database of verified facts", why:"It doesn’t check a verified database by default; it generates text from learned patterns."},
     {t:"By asking human experts in real time", why:"Answers are generated automatically."},
     {t:"By copying the first search result word for word", why:"Some tools search the web, but answers are generated, not simply copied."}
   ]},
   {id:"t1u6-q42", lesson:"t1u6-l5", level:3, q:"Ana’s chatbot gives her a quote from a historian, with a book title and page number. What’s the best check?", options:[
     {t:"Search a distinctive part of the quote in quotation marks, and look up the book itself", ok:true, why:"Quotes and references can be invented with realistic details. Check outside the tool."},
     {t:"Ask the chatbot if the quote is genuine", why:"It may confidently confirm its own error, as in the 2023 court case."},
     {t:"Trust it because the page number is specific", why:"Specific details can be invented too."},
     {t:"Ask a second chatbot", why:"Another AI may repeat or invent errors. Check the actual source."}
   ]},
   {id:"t1u6-q43", lesson:"t1u6-l5", level:2, q:"In the 2025 study led by the BBC and coordinated by the European Broadcasting Union, what share of AI assistants’ news answers had at least one significant issue?", options:[
     {t:"About 45%", ok:true, why:"Journalists assessed over 3,000 answers; 45% had at least one significant issue."},
     {t:"About 5%", why:"The study found far more problems than that."},
     {t:"About 95%", why:"Many answers had no significant issue; the figure was 45%."},
     {t:"None; all answers were accurate", why:"The study found widespread sourcing and accuracy problems."}
   ]},
   {id:"t1u6-q44", lesson:"t1u6-l5", level:3, q:"Oluwaseun realises a post he shared yesterday was false. What’s the best response?", options:[
     {t:"Delete or edit it and post a short correction with a reliable source", ok:true, why:"Correcting openly limits the spread and models good practice."},
     {t:"Quietly delete it and say nothing", why:"Deleting helps, but people who saw it won’t learn it was false."},
     {t:"Leave it, because deleting looks bad", why:"The false post keeps spreading. Correcting builds trust."},
     {t:"Argue that it might still be true", why:"If he’s found it’s false, defending it spreads misinformation further."}
   ]},
   {id:"t1u6-q45", lesson:"t1u6-l5", level:2, q:"Which response to a relative’s false post is most likely to help?", options:[
     {t:"A private, friendly message focused on the claim, with a link to a reliable source", ok:true, why:"Private, respectful and specific responses avoid defensiveness and offer something to check."},
     {t:"A public reply calling the post stupid", why:"Public shaming tends to make people dig in."},
     {t:"Ten links with no explanation", why:"Overwhelming and impersonal; one clear source works better."},
     {t:"Ignoring it and complaining to others", why:"Doesn’t correct anything, and isn’t kind."}
   ]}
  ]
});
