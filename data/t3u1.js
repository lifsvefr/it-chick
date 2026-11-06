/* Data Literacy · Unit 1 · Reading numbers critically */
ICA.addUnit({
  id:"t3u1", track:"t3", n:1, title:"Reading numbers critically", icon:"🔢",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"The questions that turn a number in a headline, a report or a spreadsheet into something you can judge: percent of what, compared with what, out of how many, which average, how big in real terms, how sure, and who is missing.",
  goals:[
    "Tell percentages from percentage points, work out percent changes correctly, and turn counts into fair rates per person",
    "Translate relative changes and relative risks into absolute numbers, including the number needed to treat",
    "Spot averages that mislead: skewed data, averages of averages and Simpson’s paradox",
    "Work out what a positive test result really means using base rates and natural frequencies",
    "Put numbers in context: orders of magnitude, money adjusted for inflation, uncertainty in official estimates and survivorship bias"
  ],
  read:[
    {book:"ostat", where:"Chapter 2, Section 2.5 “Measures of the Center of the Data” and Section 2.6 “Skewness and the Mean, Median, and Mode”; Chapter 3, Section 3.4 “Contingency Tables” and Section 3.5 “Tree and Venn Diagrams”"},
    {book:"openintro", where:"Chapter 3, Section 3.2 “Conditional probability” (subsections “Tree diagrams” and “Bayes’ Theorem”)", note:"Uses probability notation; Lesson 4 teaches the same reasoning with natural frequencies first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u1-l1", title:"Percentages, percentage points and rates", minutes:50,
   hook:{q:"A shop raises a price by 50%, then a month later cuts the new price by 50%. Compared with where it started, the price is now…", options:["Back where it started","25% lower than at the start","25% higher than at the start","50% lower than at the start"], answer:1, reveal:"**25% lower.** Start at 100: up 50% is 150. Half of 150 is 75. The cut was 50% of a *bigger* number, so it took off more than the rise added. Every percentage is a percentage *of something*, and this lesson is about keeping track of what that something is."},
   goals:[
     "Say what a percentage is a percentage of, and find the denominator in any claim",
     "Tell a percentage-point change from a percent change, and calculate each",
     "Chain and reverse percentage changes correctly",
     "Turn counts into rates per 1,000 or per 100,000 people, and choose a fair denominator",
     "Combine percentages from groups of different sizes without averaging them"
   ],
   learn:[
    {h:"Every percentage has a “what”", body:[
      {lead:"“Per cent” means “per hundred”. A percentage is a fraction written as if the bottom number were 100."},
      "If 8 of the 20 people at a community meeting volunteered, that’s 8 ÷ 20 = 0.40, which is **40%**. The number you divide by, here 20, is the [[denominator]]. Every percentage has one, even when nobody says what it is.",
      "Think of a percentage as a slice of a pie. “40%” tells you the slice’s share, not the size of the pie. Forty per cent of 20 people is 8 people; forty per cent of 2 million is 800,000. So the first question to ask about any percentage is: **percent of what?**",
      {list:[
        "“30% of users prefer the new design.” 30% of all users, or of the 50 who answered a pop-up survey?",
        "“Sales up 200%!” Up from what? From 1 sale to 3 is up 200%.",
        "“Only 12% of the budget goes on staff.” Which budget, for which year?"
      ]},
      {tip:"Whenever you can, find the count behind a percentage: “40% (8 of 20 people)”. Writing both is a good habit in your own reports too."}
    ]},
    {h:"Percentage points and percent change", body:[
      "The Digital Foundations unit “Spotting misinformation” introduced the [[percentage-point|percentage point]] (see {{misleading-numbers}}). Here is the full method, because the two ideas get confused even by professionals.",
      "When something that is already a percentage changes, there are two honest ways to describe the change.",
      {list:[
        "The **[[absolute-change|absolute change]]**, measured in **percentage points**: new − old. An unemployment rate going from 4% to 5% rises by **1 percentage point**.",
        "The **[[relative-change|relative change]]**, measured in **percent**: (new − old) ÷ old. From 4% to 5% is (5 − 4) ÷ 4 = 0.25, a rise of **25%**."
      ]},
      {ex:"Turnout at a local election was 60%. A report says turnout “fell 10%”. Which does it mean?\n\nIf 10 percentage points: 60% − 10 = 50%.\nIf 10 percent: 60% × (1 − 0.10) = 54%.\n\nThe two readings differ by 4 points, which might be thousands of voters. Always check which one is meant.", label:"Worked example: an ambiguous “fell 10%” (invented figures)"},
      "Relative change isn’t symmetric. From 4% to 5% is a 25% rise, but from 5% back to 4% is (4 − 5) ÷ 5 = a **20%** fall. Same gap of 1 point, different denominators.",
      {key:"Points for the gap between two percentages; percent for the change relative to where you started. If a source just says “up 3%” about something that is itself a percentage, ask which it means."}
    ]},
    {h:"Chaining and reversing changes", body:[
      "Percentage changes **multiply**; they don’t add. To apply a change, multiply by (1 + change): a 10% rise multiplies by 1.10, a 15% fall by 0.85.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">Up 50%, then down 50%</text><line class="d-soft" x1="20" y1="140" x2="322" y2="140" stroke-width="1.5" stroke-dasharray="5 4"/><text class="s" x="322" y="132" text-anchor="end">start level</text><rect class="d-lup" x="30" y="140" width="80" height="140" stroke-width="2"/><rect class="d-gold" x="130" y="70" width="80" height="210" stroke-width="2"/><rect class="d-rose" x="230" y="175" width="80" height="105" stroke-width="2"/><text x="70" y="160" text-anchor="middle">100</text><text x="170" y="62" text-anchor="middle">150</text><text x="270" y="167" text-anchor="middle">75</text><line class="d-ink" x1="20" y1="280" x2="322" y2="280" stroke-width="2"/><text class="s" x="70" y="298" text-anchor="middle">Start</text><text class="s" x="170" y="298" text-anchor="middle">+50% of 100</text><text class="s" x="270" y="298" text-anchor="middle">−50% of 150</text><text class="s" x="170" y="316" text-anchor="middle">= +50</text><text class="s" x="270" y="316" text-anchor="middle">= −75</text></svg>', alt:"Three bars. Start at 100. After a 50% rise the bar is 150. After a 50% fall from 150 the bar is 75, below a dashed line marking the starting level of 100.", cap:"The fall is 50% of a bigger number, so it removes more than the rise added: 100 × 1.5 × 0.5 = 75."},
      {list:[
        "**Up 10% three years running** is 1.10 × 1.10 × 1.10 = 1.331, a total rise of **33.1%**, not 30%.",
        "**Up 20%, then down 20%** is 1.20 × 0.80 = 0.96: you end **4% below** where you started.",
        "**Reversing a discount.** A coat costs 80 after a 20% discount. The original price was 80 ÷ 0.80 = **100**, not 80 × 1.20 = 96. Divide by the multiplier to go back."
      ]},
      {ex:"A price shown as 120 includes a 20% sales tax added to a pre-tax price of 100.\n\nTax amount: 120 − 100 = 20.\nAs a share of the pre-tax price: 20 ÷ 100 = 20%.\nAs a share of the price you pay: 20 ÷ 120 ≈ 16.7%.\n\nBoth are true. They have different denominators.", label:"Worked example: tax as a share of what? (invented figures)"},
      {lab:"fl-pct", t:"Practise: take a percentage off a price with a formula"}
    ]},
    {h:"Counts need denominators: rates", body:[
      "A raw count can’t tell you how common something is. A city will have more burglaries, births and bus users than a village simply because more people live there.",
      "A **[[rate-per|rate]]** divides the count by the size of the group, then multiplies to a convenient size: per 1,000 people, per 100,000 people, per million journeys. A rate per person is called **[[per-capita|per capita]]** (Latin for “by heads”).",
      {table:[["Place (invented)","Cases","Population","Rate per 100,000"],["Hillside","120","40,000","300"],["Riverton","900","600,000","150"]]},
      "Riverton has **7.5 times** as many cases (900 ÷ 120), but Hillside’s **rate** is **twice** as high: 120 ÷ 40,000 × 100,000 = 300, against 900 ÷ 600,000 × 100,000 = 150. A person in Hillside is more likely to be affected.",
      {ex:"In a spreadsheet, with cases in B2 and population in C2:\n=B2/C2*100000\nFill it down for every place. Check one row by hand.", label:"Rate per 100,000 in a spreadsheet", mono:true},
      "Rates are also written as “1 in X”. 250 per 100,000 is the same as 1 in 400 (100,000 ÷ 250 = 400), or 0.25%. To convert “1 in X” into a rate per 100,000, divide 100,000 by X. Pick one format and use it for every figure you compare: readers find “1 in 400 against 1 in 250” much harder to compare than “250 against 400 per 100,000”, because in the “1 in X” form a bigger X means a *smaller* risk.",
      "Rates with small populations jump around. If a village of 2,000 people has 3 cases one year and 6 the next, its rate “doubles” from 150 to 300 per 100,000, but that could easily be chance. Small denominators make noisy rates."
    ]},
    {h:"Choosing a fair denominator", body:[
      "The denominator is a choice, and different choices answer different questions.",
      {list:[
        "**Road safety**: deaths per person, per vehicle, per kilometre travelled or per journey can rank the same types of transport in different orders, because people travel very different distances by each.",
        "**Spending**: total spending or spending per person? Per person is fairer when comparing countries or towns of different sizes.",
        "**Health**: a town with many older residents will have more deaths per 1,000 people even if its care is excellent. Comparing [[crude-rate|crude rates]] across places with different age structures can mislead, which is why statisticians also publish **age-standardised** rates."
      ]},
      {warn:"A rate measured in one period or group can’t be compared with one measured in another unless the denominators match: per 1,000 versus per 100,000, per year versus per month, all residents versus adults only."}
    ]},
    {h:"Percentages that don’t add up", body:[
      "Percentages from groups of **different sizes** can’t simply be averaged. Go back to the counts.",
      {ex:"Two classes did a test. Class A: 9 of 10 passed (90%). Class B: 20 of 40 passed (50%).\n\nWrong: (90% + 50%) ÷ 2 = 70%.\nRight: (9 + 20) ÷ (10 + 40) = 29 ÷ 50 = 58%.\n\nClass B has four times as many students, so it should count four times as much.", label:"Worked example: combining groups (invented figures)"},
      "Some percentages are not meant to add up to 100 at all:",
      {list:[
        "**Choose-all-that-apply questions.** If people could tick several reasons, the shares can add up to 160%.",
        "**Rounding.** Three equal groups each round to 33%, totalling 99%. That’s honest rounding, not an error.",
        "**Different bases.** “40% of women and 30% of men” can’t be combined into 70% of anything."
      ]},
      {lab:"fl-share", t:"Practise: each item’s share of a total, with the total locked"},
      {key:"When in doubt, rebuild the counts: how many, out of how many. Percentages are summaries of counts, and the counts never mislead you about the denominator."}
    ]}
   ],
   try:[
    {id:"t3u1-l1-x1", type:"mcq", q:"A survey finds that 45% of people who answered prefer evening classes. Which piece of information do you most need before you can judge this claim?", options:[
      {t:"Who answered and how many: the denominator", ok:true, why:"Right. 45% of 20 volunteers who saw a poster is very different from 45% of 2,000 randomly chosen residents. The percentage only means something once you know what it is a percentage of."},
      {t:"Whether 45% is rounded", why:"Rounding changes the figure by less than one point. It matters far less than knowing who the 45% are 45% of."},
      {t:"Whether the result is written as 45% or 0.45", why:"These are the same number written two ways. The format doesn’t affect whether the claim is meaningful."},
      {t:"Nothing: 45% is close to half, so the claim is clear", why:"A percentage without its denominator can describe 9 people or 900,000. Being close to half doesn’t tell you who was asked."}
    ]},
    {id:"t3u1-l1-x2", type:"number", q:"A country’s youth unemployment rate falls from 8% to 6%. By what **percent** did the rate fall? (Give a positive number.)", answer:25, tol:0.1, unit:"%", why:"Relative change = (new − old) ÷ old = (6 − 8) ÷ 8 = −0.25, a fall of 25%. The gap itself is 2 percentage points; the percent change compares that gap with the starting value of 8.", wrongs:[
      {v:2, tol:0.1, why:"2 is the change in **percentage points** (8 − 6). The question asks for the percent change, which divides the 2-point fall by the starting rate of 8."},
      {v:33.3, tol:0.5, why:"You divided by the new value (2 ÷ 6). Percent change always divides by the **starting** value: 2 ÷ 8."},
      {v:75, tol:0.1, why:"6 is 75% *of* 8, so the rate is now three-quarters of what it was. The **fall** is the other quarter: 25%."}
    ]},
    {id:"t3u1-l1-x3", type:"mcq", q:"Kenji’s rent rose 10% last year and another 10% this year. Altogether it rose by…", options:[
      {t:"21%", ok:true, why:"Correct. 1.10 × 1.10 = 1.21. The second rise is 10% of the already higher rent, so it adds a little more than the first. A rent of 1,000 becomes 1,100, then 1,210."},
      {t:"20%", why:"Adding 10 + 10 ignores that the second rise is taken on a bigger number. Changes multiply: 1.10 × 1.10 = 1.21."},
      {t:"11%", why:"That would mean the second rise added only 1% of the original rent. The second rise is 10% of the new, higher rent, so two 10% rises compound to 21%."},
      {t:"100%", why:"Ten times ten is a mix-up of the numbers. Multiply the multipliers, 1.10 × 1.10, not the percentages."}
    ]},
    {id:"t3u1-l1-x4", type:"number", q:"A region recorded 1,250 cases of an illness in a year and has 500,000 residents. What is its rate **per 100,000** residents?", answer:250, tol:0, unit:"per 100,000", why:"1,250 ÷ 500,000 = 0.0025 cases per person. Multiply by 100,000: 0.0025 × 100,000 = 250 per 100,000.", wrongs:[
      {v:2.5, tol:0, why:"2.5 is the rate **per 1,000** (0.0025 × 1,000). Multiply by 100,000 instead."},
      {v:0.0025, tol:0, why:"That’s the rate per **person**. To get a rate per 100,000, multiply by 100,000."},
      {v:400, tol:0, why:"You divided the population by the cases (500,000 ÷ 1,250 = 400), which means “1 case per 400 people”. That’s a valid way to say it, but the rate per 100,000 is cases ÷ population × 100,000 = 250."}
    ]},
    {id:"t3u1-l1-x5", type:"spot", q:"A local newsletter writes about a youth club. Tap the phrases that could mislead a reader.", ask:"could mislead", parts:[
      "“",{t:"Membership is up 100%", flag:true, why:"Up from what? The rest of the article says it went from 4 members to 8. A 100% rise in a tiny group sounds dramatic; give the counts."}," this year, and ",{t:"attendance fell 10%", flag:true, why:"Ambiguous. If attendance is a percentage (say 70% of members came), does it mean 10 percentage points (to 60%) or 10 percent (to 63%)? Say which."}," as some members moved away. ",{t:"Membership went from 4 to 8", flag:false, why:"This gives the actual counts, which is exactly what a reader needs to judge the 100%."},". The club’s ",{t:"rate of 2 members per 1,000 young people", flag:false, why:"A rate with a stated denominator is a fair way to compare with other towns."}," is ",{t:"higher than the city’s, which has 900 members", flag:true, why:"This compares a rate with a raw count. To compare fairly, you need the city’s rate per 1,000 young people too."},".”"
    ]},
    {id:"t3u1-l1-x6", type:"number", q:"Two branches of a library ran a reading challenge. Branch A: 30 of 40 children finished (75%). Branch B: 12 of 60 children finished (20%). What percentage of **all** the children finished?", answer:42, tol:0.1, unit:"%", why:"Rebuild the counts: (30 + 12) ÷ (40 + 60) = 42 ÷ 100 = 42%. Branch B is bigger, so it pulls the overall figure towards its 20%.", wrongs:[
      {v:47.5, tol:0.1, why:"That’s the average of 75% and 20%. Averaging percentages treats the two branches as equal in size, but Branch B has 60 children and Branch A only 40."},
      {v:95, tol:0.1, why:"You added the two percentages. Percentages from different groups can’t be added; combine the counts instead."}
    ]}
   ],
   apply:{intro:"Use a spreadsheet app (any of the four works, including Google Sheets on a phone) and the news you normally read.", tasks:[
     {t:"Turn counts into rates", app:{all:[
       "Make a sheet with headers in row 1: `Place`, `Cases`, `Population`, `Rate per 100k`.",
       "Enter these invented rows: Hillside 120, 40000; Riverton 900, 600000; Lakeview 45, 9000; Port Amara 2600, 1300000.",
       "In D2 type `=B2/C2*100000` and fill it down to D5 (drag the fill handle on a computer; on a phone, copy D2 and paste into D3:D5).",
       "Check: Hillside 300, Riverton 150, Lakeview 500, Port Amara 200. Which place has the most cases, and which has the highest rate?"
     ]}, write:"Which place has the most cases? Which has the highest rate? Why are they different?"},
     {t:"Percent change and percentage points", app:{all:[
       "In a new area, type a rate for two years, as percentages: `4%` in F2 and `5%` in G2.",
       "In H2 type `=G2-F2` and format it as a number: that’s the change in percentage points (0.01, which means 1 point). Multiply by 100 if you want it to show 1.",
       "In I2 type `=(G2-F2)/F2` and format it as a percentage: 25%.",
       "Now swap the years (5% then 4%) and see that the percent change becomes −20%, while the points change is −1."
     ]}},
     {t:"Find a percentage in the wild", how:["Find one news story, report or advert that uses a percentage.","Write down: percent of what (the denominator)? Is it a percentage-point change or a percent change? Are the counts given?","If the counts aren’t given, try to find them in the original source, or write down what you would need to know."], write:"The claim, its denominator, and what was missing."}
   ], proof:"A sheet with correct rates for the four places and both kinds of change, and notes on one real percentage you checked."},
   read:[
     {book:"ostat", where:"Chapter 1, Section 1.3 “Frequency, Frequency Tables, and Levels of Measurement” (relative frequency)", note:"Background reading: relative frequency is the textbook name for a share of the total."},
     {book:"openintro", where:"Chapter 2, Section 2.2 “Considering categorical data” (subsection “Row and column proportions”)", note:"Shows how the same table gives different percentages depending on the denominator you choose."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u1-l2", title:"Absolute and relative change, and risk", minutes:50,
   hook:{q:"A headline says a new pill “cuts the risk of a heart attack by 50%”. If 1,000 people like you took it for five years, how many fewer would have a heart attack?", options:["500","50","5","You can’t tell from the headline"], answer:3, reveal:"**You can’t tell.** “Cuts by 50%” is a relative change: it halves whatever the risk was. If 100 in 1,000 would have had a heart attack, that’s 50 fewer. If 10 in 1,000 would have, it’s 5 fewer. This lesson shows how to find the starting number and turn any relative claim into one you can weigh."},
   goals:[
     "Describe any change both as an absolute and as a relative change, and say when each is the useful one",
     "Express a risk as a natural frequency, with its group and time period",
     "Calculate the absolute risk difference, relative risk reduction, risk ratio and number needed to treat from two groups",
     "Explain why the same relative effect can mean very different absolute benefits",
     "Translate “times as likely” and “% more likely” correctly, and spot mismatched framing"
   ],
   learn:[
    {h:"Two ways to describe any change", body:[
      {lead:"Any change can be described in two ways: by how much it moved, or by how much it moved compared with where it started."},
      {ex:"A bus fare rises from 2.00 to 2.50. A taxi fare rises from 20 to 21.\n\nAbsolute change: bus +0.50, taxi +1.00. The taxi rose more.\nRelative change: bus 0.50 ÷ 2.00 = +25%, taxi 1 ÷ 20 = +5%. The bus rose more.", label:"Worked example: which rose more? (invented figures)"},
      "Both answers are correct. They answer different questions.",
      {list:[
        "The **[[absolute-change|absolute change]]** (new − old) is in real units: money, people, cases. It tells you the practical impact: how much more you will pay each trip.",
        "The **[[relative-change|relative change]]** ((new − old) ÷ old) is a proportion. It lets you compare things of very different sizes: the bus fare went up proportionally five times as much as the taxi fare."
      ]},
      "A claim that gives only one of the two leaves out half the picture. A relative change alone hides how big the effect is; an absolute change alone hides how big it is *compared with the starting point*."
    ]},
    {h:"Risk is a count out of a group, over a time", body:[
      "In everyday speech “risk” means danger. In statistics, a **risk** is simply a proportion: how many people in a group had an outcome during a stated period.",
      "The clearest way to say a risk is as a **[[natural-frequency|natural frequency]]**: a count out of a round number of people. “20 in every 1,000 people over five years” is the same as 2%, but much easier to picture: imagine a crowd of 1,000 and count off 20.",
      {list:[
        "**Which group?** Adults over 60, all residents, people who already had the condition?",
        "**Over what time?** A risk of 2% per year and 2% over a lifetime are very different.",
        "**Of what outcome?** Getting a disease, being diagnosed with it, or dying of it?"
      ]},
      {tip:"If a risk is stated without a time period, it can’t be compared with anything. “Your risk is 5%” needs “over the next ten years” or similar."}
    ]},
    {h:"Four numbers from one comparison", body:[
      "Suppose an invented five-year trial follows 1,000 people who took a medicine and 1,000 similar people who didn’t. In the untreated group, 20 had a stroke. In the treated group, 15 did. From those two counts you can work out every figure a headline might use.",
      {table:[["Measure","How to work it out","Result"],["Absolute risk difference","20 − 15 per 1,000","5 per 1,000 (0.5 percentage points)"],["Risk ratio","15 ÷ 20","0.75"],["Relative risk reduction","5 ÷ 20","25%"],["Number needed to treat","1,000 ÷ 5","200"]]},
      "The **[[risk-ratio|risk ratio]]** compares the two risks as a fraction: 0.75 means the treated group’s risk was three-quarters of the untreated group’s. One minus it gives the **relative risk reduction**, 25%. The **absolute risk difference** is the plain gap, here 5 people per 1,000 (Research Skills covers absolute and relative risk in papers: see [[absolute-risk]]).",
      "The **[[number-needed-to-treat|number needed to treat]]** (NNT) turns the absolute difference around: how many people need to take the medicine for one of them to avoid a stroke? If 5 in 1,000 benefit, 1,000 ÷ 5 = **200** people take it for five years for one stroke to be prevented. The other 199 took it without that benefit (some of them would never have had a stroke anyway, and some had one despite it).",
      {ex:"Relative change in a spreadsheet, with the old value in B2 and the new in C2:\n=(C2-B2)/B2\nThe brackets matter: without them, the app divides C2 by B2 first.", label:"Relative change formula", mono:true},
      {lab:"fl-order", t:"Practise: use brackets so the subtraction happens before the division"}
    ]},
    {h:"Same relative effect, different benefit", body:[
      "A relative effect often stays roughly similar across groups, while the absolute benefit depends on how high the risk was to begin with. Suppose (invented again) the same medicine is given to people at much higher risk: 200 in 1,000 would have a stroke without it.",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="20" text-anchor="middle">Both groups: risk cut by 25%</text><text x="10" y="52">Lower-risk group (per 1,000)</text><text class="s" x="10" y="80">Untreated</text><rect class="d-rose" x="88" y="68" width="19" height="16" stroke-width="1.5"/><text class="s" x="113" y="80">20</text><text class="s" x="10" y="106">Treated</text><rect class="d-sage" x="88" y="94" width="14.25" height="16" stroke-width="1.5"/><text class="s" x="108" y="106">15</text><text x="10" y="134">5 fewer per 1,000 · NNT 200</text><line class="d-soft" x1="10" y1="152" x2="330" y2="152" stroke-width="1"/><text x="10" y="180">Higher-risk group (per 1,000)</text><text class="s" x="10" y="208">Untreated</text><rect class="d-rose" x="88" y="196" width="190" height="16" stroke-width="1.5"/><text class="s" x="284" y="208">200</text><text class="s" x="10" y="234">Treated</text><rect class="d-sage" x="88" y="222" width="142.5" height="16" stroke-width="1.5"/><text class="s" x="236" y="234">150</text><text x="10" y="264">50 fewer per 1,000 · NNT 20</text></svg>', alt:"Two pairs of bars drawn to the same scale. Lower-risk group: 20 untreated and 15 treated per 1,000, so 5 fewer and a number needed to treat of 200. Higher-risk group: 200 untreated and 150 treated per 1,000, so 50 fewer and a number needed to treat of 20.", cap:"The same 25% relative reduction prevents ten times as many strokes in the higher-risk group (invented figures)."},
      "Now 150 in 1,000 treated people have a stroke. The relative risk reduction is still 50 ÷ 200 = **25%**, but the absolute difference is **50 per 1,000** and the NNT is **20**. For the higher-risk group the medicine is ten times as useful in practice.",
      {key:"A relative risk tells you how strong an effect is. Only the absolute risk tells you how much it matters to a person, and for that you need the starting risk of people like them."}
    ]},
    {h:"Reading a health headline", body:[
      "In 2015 the International Agency for Research on Cancer (IARC), part of the World Health Organization, reported that each 50-gram portion of processed meat eaten daily increases the risk of colorectal (bowel) cancer by about **18%**. That is a relative figure. IARC’s own question-and-answer sheet says these risks are small but could be important for public health, because many people worldwide eat meat.",
      {ex:"Suppose, for illustration only, that 50 in 1,000 people in some group would develop bowel cancer during their lifetime. (Real lifetime risks differ between countries, sexes and generations; this number is not a statistic.)\n\n18% more: 50 × 1.18 = 59 in 1,000.\nAbsolute difference: 9 more people per 1,000 who ate an extra 50 g every day.\n\nThe relative figure (18%) is what IARC measured. The absolute figure depends on the baseline you start from, so it changes from group to group.", label:"Worked example: from relative to absolute (illustrative baseline)"},
      "Watch the wording of ratios, too.",
      {list:[
        "“**3 times as likely**” means the risk ratio is 3: from 1 in 1,000 to 3 in 1,000. As a percentage, that’s **200% more**, not 300% more.",
        "“**50% more likely**” means 1.5 times as likely: 10 in 1,000 becomes 15 in 1,000.",
        "“**Halves the risk**” is a 50% relative reduction, whatever the starting risk."
      ]},
      {warn:"Be wary of **mismatched framing**: benefits given as relative figures (“cuts risk by 25%”) and harms as absolute ones (“side effects in 1 in 100”). The benefit sounds big and the harm small, even if, in counts of people, the harm is larger. Put both in the same form, ideally natural frequencies, before you compare them."}
    ]},
    {h:"Beyond health: relative claims everywhere", body:[
      "The same two lenses apply to crime, money, the environment and business.",
      {list:[
        "“**Burglaries halved!**” From 2 to 1 in a small village is a 50% fall and one fewer burglary. Ask for the counts.",
        "“**Profits up 400%**” could mean from 1,000 to 5,000. A large relative change in a small number is still a small number.",
        "“**Only a 0.5% rise**” in a national budget can be billions in absolute terms. A small relative change in a huge number can be a big number."
      ]},
      {tip:"Research papers sometimes report **odds ratios** rather than risk ratios. Odds compare people with an outcome to people without it (20 with, 980 without). When an outcome is rare the two ratios are close; when it is common, an odds ratio is further from 1 than the risk ratio: risks of 40% and 20% give a risk ratio of 2 but an odds ratio of about 2.67. Don’t read an odds ratio as “times as likely”."}
    ]}
   ],
   try:[
    {id:"t3u1-l2-x1", type:"mcq", q:"A city’s population rises from 2,000,000 to 2,040,000. A village grows from 500 to 600. Which statement is correct?", options:[
      {t:"The city grew more in absolute terms (40,000 people) but the village grew more in relative terms (20% against 2%)", ok:true, why:"Right. 2,040,000 − 2,000,000 = 40,000, and 40,000 ÷ 2,000,000 = 2%. The village added 100 people, and 100 ÷ 500 = 20%. Each lens gives a different winner."},
      {t:"The village grew more in every sense, because 20% is bigger than 2%", why:"20% is the bigger relative change, but the village added only 100 people against the city’s 40,000. In absolute terms, the city grew far more."},
      {t:"The city grew more in every sense, because 40,000 is bigger than 100", why:"40,000 is the bigger absolute change, but compared with its size the city grew only 2%, while the village grew 20%."},
      {t:"They can’t be compared, because they are different sizes", why:"They can be compared: that’s exactly what relative change is for. You just need to say which kind of comparison you are making."}
    ]},
    {id:"t3u1-l2-x2", type:"number", q:"In an invented trial, 8 in every 1,000 people given a dummy pill had a fracture over three years, against 6 in every 1,000 given a real medicine. What is the **number needed to treat** for three years to prevent one fracture?", answer:500, tol:0, unit:"people", why:"The absolute difference is 8 − 6 = 2 per 1,000. NNT = 1,000 ÷ 2 = 500. Five hundred people take the medicine for three years for one of them to avoid a fracture.", wrongs:[
      {v:25, tol:0, why:"25 is the relative risk reduction as a percentage (2 ÷ 8 = 25%). The NNT comes from the **absolute** difference: 1,000 ÷ 2."},
      {v:4, tol:0, why:"That’s 1 ÷ 0.25, using the relative reduction. The NNT uses the absolute difference, 2 in 1,000, so 1,000 ÷ 2 = 500."},
      {v:2, tol:0, why:"2 is the absolute difference per 1,000 people. NNT is its reciprocal: 1,000 ÷ 2 = 500."}
    ]},
    {id:"t3u1-l2-x3", type:"match", q:"Using the same trial (8 in 1,000 untreated, 6 in 1,000 treated), match each measure to its value.", pairs:[
      ["Absolute risk difference","0.2 percentage points","2 in 1,000 is 0.2% of people: 0.8% − 0.6% = 0.2 percentage points."],
      ["Risk ratio","0.75","6 ÷ 8 = 0.75: the treated group’s risk is three-quarters of the untreated group’s."],
      ["Relative risk reduction","25%","2 ÷ 8 = 0.25, or 1 − 0.75. The risk fell by a quarter of its starting size."],
      ["Number needed to treat","500","1,000 ÷ 2 = 500 people treated for one fracture prevented."]
    ]},
    {id:"t3u1-l2-x4", type:"sort", q:"Sort each claim: does it give an absolute or a relative figure?", buckets:["Absolute","Relative"], items:[
      {t:"“Cuts the risk of flu by 40%”", b:1, why:"A percentage of the starting risk, so it’s relative. Without the starting risk you can’t tell how many people are protected."},
      {t:"“3 fewer cases for every 1,000 people vaccinated”", b:0, why:"A plain difference in counts per 1,000: absolute."},
      {t:"“Twice as likely to be late”", b:1, why:"A ratio of two risks (a risk ratio of 2): relative."},
      {t:"“Prices rose by 12 cents a litre”", b:0, why:"A difference in real units (cents): absolute."},
      {t:"“Unemployment rose 1.5 percentage points”", b:0, why:"Percentage points are the plain gap between two percentages: absolute."},
      {t:"“Unemployment rose 30%”", b:1, why:"30% of the starting rate: relative. From 5% to 6.5% is +1.5 points and +30%."}
    ]},
    {id:"t3u1-l2-x5", type:"mcq", q:"A study reports that a habit makes a condition “three times as likely”. Without the habit, 2 in 10,000 people develop the condition each year. Which description is accurate?", options:[
      {t:"With the habit, 6 in 10,000 a year: 4 more cases per 10,000, a 200% increase", ok:true, why:"Correct. A risk ratio of 3 triples 2 to 6. The absolute increase is 6 − 2 = 4 per 10,000, and as a relative change (6 − 2) ÷ 2 = 200%."},
      {t:"With the habit, 6 in 10,000 a year: a 300% increase", why:"“Three times as likely” is 3 times the risk, which is 200% *more*. A 300% increase would mean four times the risk (2 to 8)."},
      {t:"With the habit, 3 in 10,000 a year", why:"That adds one rather than multiplying by three. Three times 2 in 10,000 is 6 in 10,000."},
      {t:"Three in every ten people with the habit get the condition", why:"“Three times as likely” multiplies the existing risk (2 in 10,000). It doesn’t turn into 3 in 10."}
    ]},
    {id:"t3u1-l2-x6", type:"mcq", q:"An advert for a supplement says: “Reduces the risk of a cold by 50%! Side effects in only 2% of users.” What is the main problem with comparing these two figures?", options:[
      {t:"The benefit is relative and the harm is absolute, so they can’t be compared until both are in the same form", ok:true, why:"Right. If 4 in 100 people would get a cold in the period and the supplement makes it 2 in 100, the benefit is 2 in 100, the same as the 2 in 100 who get side effects. Put both as natural frequencies before weighing them."},
      {t:"There is no problem: 50% is much bigger than 2%", why:"That compares a relative change with an absolute risk. The 50% might mean only a small number of colds prevented."},
      {t:"The side-effect figure must be wrong, because side effects can’t be a percentage", why:"Side effects can be described as a percentage of users. The problem is the mismatch in framing, not the use of percentages."},
      {t:"The cold figure should be given in percentage points instead of percent", why:"Points would help only if we knew the starting risk. The core problem is that one figure is relative and the other absolute."}
    ]}
   ],
   apply:{intro:"Practise turning relative claims into counts of people.", tasks:[
     {t:"Build a risk calculator", app:{all:[
       "Headers in row 1: `Group`, `Risk untreated (per 1,000)`, `Risk treated (per 1,000)`, `Absolute difference`, `Relative reduction`, `NNT`.",
       "Row 2: `Lower risk`, 20, 15. Row 3: `Higher risk`, 200, 150.",
       "D2: `=B2-C2`. E2: `=(B2-C2)/B2`, formatted as a percentage. F2: `=1000/D2`.",
       "Fill D2:F2 down to row 3. Check: 5, 25%, 200 and 50, 25%, 20."
     ]}, write:"What stays the same between the two rows, and what changes?"},
     {t:"Rewrite a headline", how:["Find a news story that reports a risk as “cuts”, “raises”, “doubles” or “% more likely”.","Find the starting risk in the story, its source or the study it is based on. If you can’t find it, note that.","Rewrite the claim as natural frequencies: “Out of 1,000 people like this, about X would … without it and Y with it, over Z years.”"], write:"The original claim and your rewritten version."}
   ], proof:"A small calculator with both groups correct, and one headline rewritten as natural frequencies (or a note of what information was missing)."},
   read:[
     {book:"openintro", where:"Chapter 1, Section 1.1 “Case study: using stents to prevent strokes”", note:"A real trial reported as proportions in each group: practise working out the absolute difference yourself."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u1-l3", title:"Averages that mislead", minutes:50,
   hook:{q:"A small firm has 10 staff. Nine earn 30,000 a year and the owner earns 300,000. What is the mean (the usual “average”) salary?", options:["30,000","57,000","165,000","33,000"], answer:1, reveal:"**57,000.** The total is 9 × 30,000 + 300,000 = 570,000, and 570,000 ÷ 10 = 57,000. Nine of the ten people earn barely half the “average salary”. One big value pulled the mean up; the median, 30,000, describes the typical person. This lesson is about choosing, and questioning, the right average."},
   goals:[
     "Say which average a claim uses and whether it fits the question",
     "Explain why skewed data pull the mean away from the median, and what that means for “the average person”",
     "Combine group averages correctly with a weighted mean",
     "Recognise Simpson’s paradox and composition effects, and explain them with a confounding factor",
     "Ask for the spread as well as the average"
   ],
   learn:[
    {h:"Which “average”?", body:[
      {lead:"“Average” is a family name, not a single measure. Three members do most of the work."},
      {list:[
        "The **[[mean-stat|mean]]**: add the values, divide by how many there are.",
        "The **[[median-stat|median]]**: the middle value when they are sorted.",
        "The **[[mode-stat|mode]]**: the most common value."
      ]},
      "Research Skills explains how to calculate these from survey data (see {{descriptive-statistics}}). This lesson is about how they **mislead**. When a headline says “the average family” or “the average price”, it often doesn’t say which average it used. Official statistics usually do say, and they often publish more than one, because the choice changes the answer."
    ]},
    {h:"Skew pulls the mean", body:[
      "When most values are modest and a few are very large, the data are **[[skewness|skewed]]** (Unit 5 covers this fully: see {{distributions}}). Incomes, house prices, wealth, city sizes and social media followers are all like this. The few large values drag the mean towards them; the median barely moves.",
      {fig:'<svg viewBox="0 0 340 200"><text x="170" y="18" text-anchor="middle">15 household incomes (invented)</text><line class="d-rose" x1="79.7" y1="72" x2="79.7" y2="150" stroke-width="2" stroke-dasharray="4 3"/><line class="d-sage" x1="59.6" y1="32" x2="59.6" y2="150" stroke-width="2"/><text class="s" x="64" y="42">median 33</text><text class="s" x="84" y="66">mean 49.7</text><circle class="d-lup" cx="41.6" cy="142" r="5" stroke-width="1.5"/><circle class="d-lup" cx="45.2" cy="131" r="5" stroke-width="1.5"/><circle class="d-lup" cx="48.8" cy="120" r="5" stroke-width="1.5"/><circle class="d-lup" cx="51.2" cy="109" r="5" stroke-width="1.5"/><circle class="d-lup" cx="52.4" cy="142" r="5" stroke-width="1.5"/><circle class="d-lup" cx="54.8" cy="98" r="5" stroke-width="1.5"/><circle class="d-lup" cx="57.2" cy="131" r="5" stroke-width="1.5"/><circle class="d-lup" cx="59.6" cy="120" r="5" stroke-width="1.5"/><circle class="d-lup" cx="62.0" cy="109" r="5" stroke-width="1.5"/><circle class="d-lup" cx="65.6" cy="142" r="5" stroke-width="1.5"/><circle class="d-lup" cx="70.4" cy="131" r="5" stroke-width="1.5"/><circle class="d-lup" cx="76.4" cy="142" r="5" stroke-width="1.5"/><circle class="d-lup" cx="86.0" cy="131" r="5" stroke-width="1.5"/><circle class="d-lup" cx="116.0" cy="142" r="5" stroke-width="1.5"/><circle class="d-lup" cx="308.0" cy="142" r="5" stroke-width="1.5"/><line class="d-ink" x1="20" y1="150" x2="322" y2="150" stroke-width="2"/><line class="d-ink" x1="20" y1="150" x2="20" y2="155" stroke-width="1.5"/><text class="s" x="20" y="170" text-anchor="middle">0</text><line class="d-ink" x1="80" y1="150" x2="80" y2="155" stroke-width="1.5"/><text class="s" x="80" y="170" text-anchor="middle">50</text><line class="d-ink" x1="140" y1="150" x2="140" y2="155" stroke-width="1.5"/><text class="s" x="140" y="170" text-anchor="middle">100</text><line class="d-ink" x1="200" y1="150" x2="200" y2="155" stroke-width="1.5"/><text class="s" x="200" y="170" text-anchor="middle">150</text><line class="d-ink" x1="260" y1="150" x2="260" y2="155" stroke-width="1.5"/><text class="s" x="260" y="170" text-anchor="middle">200</text><line class="d-ink" x1="320" y1="150" x2="320" y2="155" stroke-width="1.5"/><text class="s" x="320" y="170" text-anchor="middle">250</text><text class="s" x="304" y="126" text-anchor="end">one very high income</text><text class="s" x="170" y="190" text-anchor="middle">income, thousands per year</text></svg>', alt:"A dot plot of 15 invented household incomes in thousands. Fourteen dots cluster between 18 and 80; one dot sits far to the right at 240. A solid line marks the median at 33 and a dashed line marks the mean at 49.7, to the right of most dots.", cap:"One very high income pulls the mean to 49.7 thousand. The median stays at 33 thousand. Twelve of the 15 households earn less than the mean."},
      "So most households in this group earn **less than the average** (the mean). That isn’t a contradiction: it’s what skew does. A famous light-hearted version: almost everyone has more than the average number of legs, because a few people with fewer than two pull the mean just below 2.",
      "A mean can also be a value that nobody has. If 10 families have 18 children between them, the mean is 1.8 children per family, though every family has a whole number. That’s fine for planning school places (it gives the total), but it isn’t a description of any real family.",
      {key:"For “typical” questions about skewed things (incomes, house prices, waiting times), the median is usually the fairer summary. When a claim uses the mean, ask what the median is."}
    ]},
    {h:"When the mean is the right choice", body:[
      "The mean isn’t the villain. It is the right average whenever you care about **totals**, because mean × count = total.",
      {list:[
        "A village planning water supplies needs the **mean** use per household: 400 households × mean use gives the total the reservoir must supply. The median can’t do that.",
        "A business forecasting next year’s takings needs mean sales per customer, big spenders included.",
        "A person asking “what will a home like mine cost?” is better served by the **median**, or better still by the range of prices of similar homes."
      ]},
      "The honest approach is to give both when they differ a lot, and to say which one you used.",
      {lab:"fl-average", t:"Practise: an average with AVERAGE (and why dividing by the wrong count goes wrong)"}
    ]},
    {h:"An average hides the spread", body:[
      "Two invented places have the same mean monthly temperature over a year: **15 °C**.",
      {table:[["Place (invented)","Mean","Coldest month","Warmest month"],["Coastal town","15 °C","11 °C","20 °C"],["Inland town","15 °C","1 °C","30 °C"]]},
      "Pack the same clothes for both and you’ll be wrong in one of them for most of the year. An average describes the centre, never the whole story. Ask also for the spread: the range (lowest to highest), or the [[interquartile-range|interquartile range]] (the spread of the middle half of the values), which Unit 5 teaches.",
      "The same goes for averages about people. “On average, the training raised scores by 4 points” could mean everyone gained about 4 points, or that a few people gained 20 and most gained nothing. Both give the same mean. When a decision depends on what will happen to *you*, ask how much results varied from person to person, not only what the average was."
    ]},
    {h:"Averages of averages", body:[
      "Averaging two averages from groups of different sizes gives the wrong answer, just as with percentages in Lesson 1. Weight each group’s average by its size: a **[[weighted-mean|weighted mean]]**.",
      {ex:"Clinic A: 400 patients, mean wait 10 minutes. Clinic B: 100 patients, mean wait 30 minutes.\n\nWrong: (10 + 30) ÷ 2 = 20 minutes.\nRight: (400 × 10 + 100 × 30) ÷ (400 + 100) = 7,000 ÷ 500 = 14 minutes.\n\nMost patients were at the quicker clinic, so the overall mean is closer to 10.", label:"Worked example: a weighted mean (invented figures)"},
      "The same applies to **averaging rates and percentages**. The overall rate for two towns is total events ÷ total population, not the average of the two towns’ rates. And for growth over time, averaging the percentage changes misleads too: a price that rises 50% one year and falls 50% the next has an average change of 0%, but it ends 25% lower (Lesson 1). Statisticians use a different average, the geometric mean, for growth rates; the Codex entry {{averages-misleading}} explains it.",
      {ex:"With group sizes in B2:B3 and group means in C2:C3:\n=SUMPRODUCT(B2:B3,C2:C3)/SUM(B2:B3)\nSUMPRODUCT multiplies each pair and adds the results. It works in Excel, Google Sheets, LibreOffice Calc and Numbers.", label:"Weighted mean in a spreadsheet", mono:true}
    ]},
    {h:"Simpson’s paradox", body:[
      "Sometimes a comparison points one way in every subgroup and the opposite way when the groups are combined. This is **[[simpsons-paradox|Simpson’s paradox]]**. A real example comes from a 1986 study in the *British Medical Journal* (Charig and colleagues) comparing two treatments for kidney stones.",
      {table:[["Stones","Open surgery","Keyhole surgery (PCNL)"],["Small","81 of 87 (93%)","234 of 270 (87%)"],["Large","192 of 263 (73%)","55 of 80 (69%)"],["All","273 of 350 (78%)","289 of 350 (83%)"]]},
      "Open surgery had the higher success rate for small stones **and** for large stones, yet the lower rate overall. How? Large stones are harder to treat, and most of the open-surgery patients had large stones (263 of 350), while most keyhole patients had small ones (270 of 350). Open surgery was handed the harder cases, which dragged its overall rate down.",
      "Stone size here is a [[confounder]]: it affected both which treatment people got and how likely success was. When a confounder like that exists, the within-group comparison is usually the fairer one. But splitting data isn’t always right: which comparison answers your question depends on how the factors cause each other, so experts think about the cause before they decide.",
      {warn:"Whenever groups are combined (regions, years, hospitals, schools), ask whether they differ in a way that also affects the outcome. A combined average can reverse what is true in every part."}
    ]},
    {h:"When the group changes, not the people", body:[
      "An average can move because **who is in the group** changed, even if nothing happened to anyone in it. Statisticians call this a **composition effect**.",
      {ex:"A firm has 10 staff: 6 earn 25,000 and 4 earn 50,000. Mean pay: 35,000.\n\nThree of the lower-paid staff leave. Now 3 earn 25,000 and 4 earn 50,000.\nMean pay: (75,000 + 200,000) ÷ 7 ≈ 39,286, up about 12%.\n\nNobody got a pay rise. The average went up because lower-paid people left.", label:"Worked example: a rise with no raises (invented figures)"},
      "Composition effects appear in school results (which pupils sat the exam?), hospital outcomes (which patients were admitted?) and average earnings in a recession (who lost their jobs?). When an average changes, ask: **did the values change, or did the group change?**"
    ]}
   ],
   try:[
    {id:"t3u1-l3-x1", type:"mcq", q:"The asking prices of nine homes on a street (in thousands) are 150, 160, 170, 175, 180, 190, 200, 210 and 1,500. An estate agent’s leaflet says “average price on this street: 326 thousand”. What is the best response?", options:[
      {t:"That’s the mean, pulled up by one mansion; the median, 180 thousand, describes a typical home here much better", ok:true, why:"Right. The mean is 2,935 ÷ 9 ≈ 326, but eight of the nine homes cost 210 thousand or less. The middle value of the sorted list is 180."},
      {t:"The leaflet must have made an arithmetic error", why:"The arithmetic is correct: the nine prices add up to 2,935, and 2,935 ÷ 9 ≈ 326. The issue is the choice of average, not the sum."},
      {t:"Use the mode instead, because it is always the fairest average", why:"Here every price is different, so there is no single mode. The median is the useful summary for typical prices."},
      {t:"Remove the 1,500 price because it must be a mistake", why:"A very high value isn’t automatically an error; mansions exist. Keep it and choose a summary that isn’t dragged by it, or report both."}
    ]},
    {id:"t3u1-l3-x2", type:"number", q:"A school has two classes. Class A has 25 pupils with a mean score of 72. Class B has 15 pupils with a mean score of 80. What is the mean score of **all 40 pupils**?", answer:75, tol:0.01, unit:"points", why:"Weight by size: (25 × 72 + 15 × 80) ÷ 40 = (1,800 + 1,200) ÷ 40 = 3,000 ÷ 40 = 75.", wrongs:[
      {v:76, tol:0.01, why:"76 is the simple average of 72 and 80. It treats both classes as equal in size, but Class A has 25 pupils and Class B only 15."},
      {v:152, tol:0.01, why:"You added the two means. Means from groups can’t be added; multiply each by its group size, add, and divide by the total number of pupils."}
    ]},
    {id:"t3u1-l3-x3", type:"match", q:"Match each question to the summary that answers it best.", pairs:[
      ["What does a typical home in this town cost?","The median price","House prices are skewed by a few expensive homes; the median shows the middle of the market."],
      ["How much water will the whole village use?","The mean use per household","Mean × number of households = total, which is what the supply must meet."],
      ["Which shoe size should a shop stock most of?","The mode","The most common size is the one most customers need."],
      ["Do the pupils’ scores vary a lot?","The range or interquartile range","These describe spread, which no average shows."]
    ]},
    {id:"t3u1-l3-x4", type:"mcq", q:"In an invented study, Hospital X has a lower survival rate than Hospital Y overall, but a higher survival rate both for patients admitted in a mild condition and for patients admitted in a severe condition. What is the most likely explanation?", options:[
      {t:"Hospital X treats a much larger share of severe patients, who are less likely to survive anywhere", ok:true, why:"That is Simpson’s paradox. Severity affects both which hospital patients go to and their chances, so the combined rate mostly reflects the mix of patients. Within each severity group, X does better."},
      {t:"The figures must contain an error, because this is mathematically impossible", why:"It is entirely possible, as the kidney stone study shows. It can happen whenever the two hospitals treat very different mixes of patients, and the mix also affects survival."},
      {t:"Hospital Y is better, because the overall figure is the one that counts", why:"The overall figure mixes in a difference in patients. For someone with a given condition, the within-group comparison shows X doing better."},
      {t:"The two hospitals must have exactly the same quality of care", why:"The within-group rates differ, with X higher in both. Nothing here suggests equal quality."}
    ]},
    {id:"t3u1-l3-x5", type:"mcq", q:"A report says “average earnings at the company rose 8% this year” in a year when the company laid off many of its lowest-paid workers. What should you ask first?", options:[
      {t:"Did people’s pay rise, or did the average rise because lower-paid workers left?", ok:true, why:"Right. Removing lower values from a group raises its mean even if nobody’s pay changes: a composition effect. Ask for the change in pay for people who stayed."},
      {t:"Was the 8% calculated with the correct formula?", why:"The arithmetic may be perfect. The issue is that the group itself changed, so the average compares different sets of people."},
      {t:"Is the median also up 8%?", why:"The median is useful, but it can shift from a composition change too. The key question is whether individual pay changed."},
      {t:"Nothing: an 8% rise in average earnings is clearly good news for staff", why:"Not necessarily. If the rise comes from lower-paid staff leaving, the people still there may have had no rise at all, and the people who left lost their jobs."}
    ]},
    {id:"t3u1-l3-x6", type:"sort", q:"Sort each data set: is its mean likely to be well above its median (skewed to the right), or close to its median (roughly symmetric)?", buckets:["Mean well above median","Mean close to median"], items:[
      {t:"Annual incomes of everyone in a country", b:0, why:"A small number of very high incomes stretch the right-hand tail, pulling the mean above the median."},
      {t:"Heights of adult women in one country", b:1, why:"Heights cluster around the middle with roughly equal tails on both sides, so mean and median are close."},
      {t:"Number of followers of social media accounts", b:0, why:"Most accounts have few followers; a handful have millions. Extreme right skew."},
      {t:"Times to wait for a doctor’s appointment", b:0, why:"Waiting times can’t go below zero but can be very long, so a long right tail pulls the mean up."},
      {t:"Scores on a well-designed test where most people score in the middle", b:1, why:"If scores spread fairly evenly either side of the middle, mean and median nearly coincide."}
    ]}
   ],
   apply:{intro:"Use a spreadsheet to see the difference between averages with your own eyes.", tasks:[
     {t:"Mean against median", app:{all:[
       "In A1 type `Value`, then type the nine house prices from the first exercise in A2:A10: 150, 160, 170, 175, 180, 190, 200, 210, 1500.",
       "In C1 type `=AVERAGE(A2:A10)` and in C2 type `=MEDIAN(A2:A10)`. You should see about 326.1 and 180.",
       "Change 1500 to 15000. Watch how far the mean moves and how the median doesn’t move at all.",
       "Change it back, then delete the 1500. Which average changed more?"
     ]}, write:"How much did each average move when you changed the largest value?"},
     {t:"A weighted mean", app:{all:[
       "In E1:G1 type `Clinic`, `Patients`, `Mean wait`. Row 2: `A`, 400, 10. Row 3: `B`, 100, 30.",
       "In G5 type `=SUMPRODUCT(F2:F3,G2:G3)/SUM(F2:F3)`. You should get 14.",
       "In G6 type `=AVERAGE(G2:G3)`. You get 20, the unweighted (wrong) answer.",
       "Change Clinic B’s patients to 400. Now both give 20. Why?"
     ]}},
     {t:"Find an average in the news", how:["Find a story that uses “average” (pay, price, rent, time, age).","Find out which average it is (the original source usually says). If it’s a mean, look for the median too.","Note whether the group being averaged changed over time."], write:"The claim, which average it used, and what the other average was (if you found it)."}
   ], proof:"A sheet showing mean and median reacting differently to one extreme value, a correct weighted mean, and notes on one real average."},
   read:[
     {book:"ostat", where:"Chapter 2, Section 2.5 “Measures of the Center of the Data” and Section 2.6 “Skewness and the Mean, Median, and Mode”"},
     {book:"openintro", where:"Chapter 2, Section 2.1 “Examining numerical data” (subsection “Robust statistics”)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u1-l4", title:"Base rates and false positives", minutes:55,
   hook:{q:"A condition affects 1 in 1,000 people. A test finds 99% of people who have it, and wrongly flags 1% of people who don’t. Someone picked at random tests positive. Roughly what is the chance they have the condition?", options:["About 99%","About 90%","About 50%","About 9%"], answer:3, reveal:"**About 9%.** Picture 100,000 people. 100 have the condition, and 99 of them test positive. The other 99,900 don’t, but 1% of them, 999 people, test positive too. So 99 of the 1,098 positives really have it: about 9%. Most people guess far higher, and so do many professionals. This lesson shows the counting method that makes it clear."},
   goals:[
     "Explain conditional probability in plain words, and why the chance of A given B differs from the chance of B given A",
     "Name the four outcomes of a test and define sensitivity, specificity and the false positive rate",
     "Work out what a positive or negative result means using natural frequencies",
     "Explain how the base rate changes the meaning of the same test",
     "Apply the same reasoning to fraud alerts, detectors and forensic matches, and recognise the prosecutor’s fallacy"
   ],
   learn:[
    {h:"“Of whom?”: conditional probability", body:[
      {lead:"Many probability mistakes come from swapping two questions that sound alike."},
      "Most professional basketball players are tall. But most tall people are not professional basketball players. “The chance someone is tall, **given** they play professionally” is high. “The chance someone plays professionally, **given** they are tall” is tiny. The words are the same; the group you start from is different.",
      "A probability that applies only within a group is a **[[conditional-probability|conditional probability]]**. Its denominator is that group, not everyone. Words that signal one: *given*, *among*, *of those who*, *if*.",
      {key:"Before trusting a probability, ask “out of whom?” The chance of A among Bs and the chance of B among As can be wildly different."}
    ]},
    {h:"The four outcomes of a test", body:[
      "Any yes/no test (a medical test, a spam filter, a fraud alarm, a smoke detector) can be right or wrong in two ways each.",
      {table:[["","Test says yes","Test says no"],["Really yes","True positive","**False negative** (missed)"],["Really no","**False positive** (false alarm)","True negative"]]},
      "A **[[false-positive|false positive]]** is a false alarm. A **[[false-negative|false negative]]** is a miss. Three numbers describe the test and the group it’s used in.",
      {list:[
        "**[[test-sensitivity|Sensitivity]]**: of the people who really have the condition, the share the test catches. 90% sensitivity misses 10 in 100 of them.",
        "**[[test-specificity|Specificity]]**: of the people who don’t have it, the share the test correctly clears. 95% specificity means a **false positive rate** of 5%: 5 in 100 of them get a false alarm.",
        "The **[[base-rate|base rate]]**, or **[[prevalence]]**: how common the condition is in the group being tested, before any test."
      ]},
      "Sensitivity and specificity are conditional probabilities: each starts from people whose true status is known. But a person with a result wants the reverse: **given my positive result, how likely is it that I have it?** That is the **[[predictive-value|positive predictive value]]**, and it depends heavily on the base rate."
    ]},
    {h:"Counting it out: natural frequencies", body:[
      "Researchers such as Gerd Gigerenzer and Ulrich Hoffrage (1995) found that people reason far better about tests when the information is given as **natural frequencies** (counts of people) rather than percentages and probabilities. Here is the method, with an invented test: base rate 1%, sensitivity 90%, false positive rate 5%.",
      {fig:'<svg viewBox="0 0 340 362"><rect class="d-panel" x="95" y="8" width="150" height="46" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">10,000 people</text><text class="s" x="170" y="46" text-anchor="middle">all tested</text><path class="d-ink" d="M150 54 L90 88 M190 54 L250 88" fill="none" stroke-width="2"/><rect class="d-rose" x="30" y="88" width="120" height="46" rx="8" stroke-width="2"/><text x="90" y="108" text-anchor="middle">100</text><text class="s" x="90" y="125" text-anchor="middle">have it (1%)</text><rect class="d-lup" x="190" y="88" width="120" height="46" rx="8" stroke-width="2"/><text x="250" y="108" text-anchor="middle">9,900</text><text class="s" x="250" y="125" text-anchor="middle">don’t (99%)</text><path class="d-ink" d="M75 134 L45 184 M105 134 L130 184 M235 134 L210 184 M265 134 L295 184" fill="none" stroke-width="2"/><text class="s" x="48" y="164" text-anchor="end">90%</text><text class="s" x="126" y="164">10%</text><text class="s" x="214" y="164" text-anchor="end">5%</text><text class="s" x="292" y="164">95%</text><rect class="d-gold" x="7" y="184" width="76" height="46" rx="8" stroke-width="2"/><text x="45" y="204" text-anchor="middle">90</text><text class="s" x="45" y="221" text-anchor="middle">positive</text><rect class="d-panel" x="92" y="184" width="76" height="46" rx="8" stroke-width="2"/><text x="130" y="204" text-anchor="middle">10</text><text class="s" x="130" y="221" text-anchor="middle">negative</text><rect class="d-gold" x="172" y="184" width="76" height="46" rx="8" stroke-width="2"/><text x="210" y="204" text-anchor="middle">495</text><text class="s" x="210" y="221" text-anchor="middle">positive</text><rect class="d-panel" x="257" y="184" width="76" height="46" rx="8" stroke-width="2"/><text x="295" y="204" text-anchor="middle">9,405</text><text class="s" x="295" y="221" text-anchor="middle">negative</text><path class="d-ink" d="M45 230 L110 262 M210 230 L200 262" fill="none" stroke-width="1.5" stroke-dasharray="4 3"/><rect class="d-gold" x="30" y="262" width="280" height="92" rx="8" stroke-width="2"/><text x="170" y="286" text-anchor="middle">Positives: 90 + 495 = 585</text><text x="170" y="310" text-anchor="middle">Really have it: 90 of 585</text><text x="170" y="334" text-anchor="middle">90 ÷ 585 ≈ 15%</text></svg>', alt:"A tree. 10,000 people split into 100 who have the condition and 9,900 who don’t. The 100 split into 90 positive (90%) and 10 negative (10%). The 9,900 split into 495 positive (5%) and 9,405 negative (95%). The two positive groups combine: 585 positives, of whom 90 really have it, about 15%.", cap:"Natural frequencies: count people, not probabilities. Only about 15% of positives are true positives (invented test)."},
      {ol:[
        "Start with a round number of people: **10,000**.",
        "Apply the base rate: 1% have the condition (**100**); **9,900** don’t.",
        "Apply sensitivity to the 100: 90% test positive (**90**); **10** are missed.",
        "Apply the false positive rate to the 9,900: 5% test positive (**495**); **9,405** are cleared.",
        "Count all positives: 90 + 495 = **585**. Of those, 90 have the condition: 90 ÷ 585 ≈ **15.4%**."
      ]},
      "So a positive result from this test, used on people with no particular reason to suspect the condition, is right only about 1 time in 6 or 7 (90 of 585). The test isn’t bad: it catches 90% of cases. There are simply far more healthy people for false alarms to happen to.",
      "A **negative** result is very reassuring here: 9,405 of the 9,415 negatives (99.9%) really don’t have it. Only 10 are missed, out of 9,415 negatives."
    ]},
    {h:"The base rate changes everything", body:[
      "Use the **same** test (sensitivity 90%, false positive rate 5%) in three different groups of 100,000 people.",
      {table:[["Base rate","True positives","False positives","Positives who have it"],["0.1%","90","4,995","about 1.8%"],["1%","900","4,950","about 15%"],["20%","18,000","4,000","about 82%"]]},
      "In a group where the condition is rare, most positives are false alarms. In a group where it’s common (for example, people already showing symptoms), a positive is usually right. The test didn’t change; the base rate did.",
      {list:[
        "This is why a positive **screening** result in people without symptoms is usually followed by a more accurate **diagnostic** test before anyone is diagnosed.",
        "It is why testing everyone for a rare problem can create many false alarms, with real costs: worry, more tests, sometimes treatment that wasn’t needed.",
        "And it is why a single positive result means different things for different people, depending on their risk before the test."
      ]},
      "The base rate also changes what a **negative** means. In the 20% group, 7,800 of 10,000 people test negative (7,600 true negatives and 200 missed cases). So about 1 negative in 39 is a missed case, far less reassuring than the 1 in 940 in the 1% group (10 missed among 9,415 negatives). For someone at high risk, a negative result from a test that misses 10% of cases may need a repeat or a different test.",
      {warn:"Ignoring the base rate (“the test is 95% accurate, so a positive means a 95% chance”) is called **base-rate neglect**. It is one of the most common reasoning errors, and it isn’t a matter of intelligence: the percentage format hides the crowd of false alarms."}
    ]},
    {h:"Far beyond medicine", body:[
      "The same counting works for any detector. All examples here are invented.",
      {list:[
        "**Fraud alerts.** A bank checks 50,000 card payments; 1 in 500 (**100**) are fraud. Its system catches 90% (**90**) and flags 2% of genuine payments (**998** of 49,900). Of 1,088 alerts, only 90 are fraud: about 8%. This is one reason banks often ask you to confirm a flagged payment rather than simply blocking your card.",
        "**Spam filters.** If 30 in 100 emails are spam (3,000 of 10,000), a filter that catches 98% (**2,940**) and wrongly flags 1% of real emails (**70** of 7,000) is right about 98% of the time when it flags something: 2,940 of 3,010. When the thing is common, flags are usually right.",
        "**AI-writing or plagiarism detectors.** If a detector wrongly flags 1% of honest essays, a teacher who runs 1,000 honest essays through it can expect about **10** false accusations. A flag is a reason to look closer and talk to the writer, never proof on its own."
      ]}
    ]},
    {h:"The prosecutor’s fallacy", body:[
      "Courts face the same trap. Suppose a forensic test finds that a suspect matches a sample from a crime scene, and an expert says a random innocent person would match by chance only **1 time in 100,000**.",
      "It is tempting to conclude “so the chance this person is innocent is 1 in 100,000”. That swaps the two conditional probabilities: the chance of a **match, given innocence** is not the chance of **innocence, given a match**. This error is called the **prosecutor’s fallacy**.",
      {ex:"Suppose 2,000,000 people could have committed the crime.\n\nInnocent people who would match by chance: about 2,000,000 ÷ 100,000 = 20.\nSo, besides the culprit, about 20 innocent people match.\n\nIf the match were the only evidence, the suspect would be one of about 21 people who match, not “1 in 100,000 likely to be innocent”.", label:"Worked example: what a match means (invented figures)"},
      "Other evidence (where the person was, motive, witnesses) changes the picture, which is exactly the point: a match narrows the group; it doesn’t settle the question alone. Real cases also have to consider lab errors and close relatives, which can make a misleading match more likely than the headline figure suggests.",
      {tip:"For any “1 in a million” claim, ask: out of how many people or events? If each of the world’s 8 billion people faced a one-in-a-million chance once a day, it would come up for about 8,000 people every day."}
    ]}
   ],
   try:[
    {id:"t3u1-l4-x1", type:"mcq", q:"A news story says: “70% of people in hospital with the illness were unvaccinated.” Which conclusion follows from this figure alone?", options:[
      {t:"None about the vaccine’s effect yet: you also need to know what share of the whole population was unvaccinated", ok:true, why:"Right. The 70% is “unvaccinated, given in hospital”. To judge the vaccine, compare the chance of hospital among vaccinated and unvaccinated people. If only 10% of people were unvaccinated, 70% of patients being unvaccinated points to a big effect; if 90% were, it would mean the vaccinated were more at risk. The base rate decides."},
      {t:"An unvaccinated person has a 70% chance of going to hospital", why:"That swaps the conditional probability. 70% describes people already in hospital, not the chance that an unvaccinated person ends up there, which is far smaller."},
      {t:"The vaccine prevents 70% of hospital stays", why:"A share of patients isn’t an effectiveness figure. You would need hospital rates in both vaccinated and unvaccinated groups."},
      {t:"Vaccinated people make up 30% of the population", why:"The 30% describes patients, not the population. The population share could be quite different."}
    ]},
    {id:"t3u1-l4-x2", type:"sort", q:"A smoke alarm is either right or wrong. Sort each event into the right outcome.", buckets:["True positive","False positive","False negative","True negative"], items:[
      {t:"The alarm sounds while toast burns and the kitchen fills with smoke", b:0, why:"There really is smoke and the alarm sounded: a true positive (even if annoying)."},
      {t:"The alarm sounds because steam from a shower drifted under it", b:1, why:"No smoke, but the alarm went off: a false alarm, which is a false positive."},
      {t:"A fire starts in the room and the alarm stays silent because its battery is flat", b:2, why:"There was smoke but the alarm missed it: a false negative, the dangerous kind of error here."},
      {t:"A quiet night, no smoke, no alarm", b:3, why:"Nothing happened and the alarm correctly stayed silent: a true negative."},
      {t:"A spam filter puts a real message from your doctor into the spam folder", b:1, why:"The filter said “spam” about a real email: a false positive for the spam test."},
      {t:"A spam filter lets a scam email into your inbox", b:2, why:"It was spam, but the filter said “not spam”: a false negative."}
    ]},
    {id:"t3u1-l4-x3", type:"number", q:"A screening test is used on 1,000 people. 2% have the condition. The test catches 95% of people who have it and wrongly flags 10% of people who don’t. **How many people test positive in total?**", answer:117, tol:0, unit:"people", why:"Have it: 2% of 1,000 = 20; 95% of 20 = 19 true positives. Don’t have it: 980; 10% of 980 = 98 false positives. Total positives: 19 + 98 = 117.", wrongs:[
      {v:19, tol:0, why:"19 is the true positives only. Add the false positives: 10% of the 980 people without the condition, which is 98."},
      {v:98, tol:0, why:"98 is the false positives only. Add the 19 true positives (95% of the 20 who have it)."},
      {v:119, tol:0, why:"You took 10% of all 1,000 (100) instead of 10% of the 980 who don’t have it. False positives can only come from people without the condition: 98, plus 19 true positives = 117."},
      {v:118, tol:0, why:"You counted all 20 people with the condition as positives. The test catches 95% of them, so 19 test positive: 19 + 98 = 117."}
    ]},
    {id:"t3u1-l4-x4", type:"number", q:"Same test and group as before (19 true positives, 98 false positives). If someone in this group tests positive, what is the chance they have the condition? Give a percentage to one decimal place.", answer:16.2, tol:0.15, unit:"%", hint2:"Divide the true positives by all positives.", why:"19 ÷ 117 ≈ 0.162, so about 16.2%. Roughly 1 positive in 6 is a real case: the false positives from the large healthy group outnumber the true positives five to one.", wrongs:[
      {v:95, tol:0.5, why:"95% is the sensitivity: the chance of a positive **given** the condition. The question asks the reverse: the chance of the condition **given** a positive, 19 ÷ 117."},
      {v:19.4, tol:0.15, why:"You divided 19 by 98 (the false positives). Divide by all positives: 19 + 98 = 117."},
      {v:90, tol:0.5, why:"90% is the specificity (the share of healthy people correctly cleared). It doesn’t tell you what a positive means without the base rate."}
    ]},
    {id:"t3u1-l4-x5", type:"mcq", q:"Fatima’s bank texts her about a “suspicious payment”. The bank’s system flags about 2% of genuine payments, and fraud is rare. What is the most sensible reading of the alert?", options:[
      {t:"It could well be a false alarm; check the payment through the bank’s app or official number, then confirm or report it", ok:true, why:"Right. When fraud is rare, most alerts are false positives, but some are real, so it’s worth checking. Using the bank’s app or the number on her card (not a link or number in the message) also protects her from scam texts pretending to be the bank."},
      {t:"It is almost certainly fraud, because the system is very accurate", why:"Accurate at what? With rare fraud, even a 2% false alarm rate on genuine payments produces many more false alerts than real ones."},
      {t:"It can be ignored, because most alerts are false alarms", why:"Most may be false, but a real fraud is costly. The alert is a reason to check, not to panic or ignore."},
      {t:"She should reply to the text with her card details so the bank can check", why:"Never send card details by text. Contact the bank through a route you already trust."}
    ]},
    {id:"t3u1-l4-x6", type:"mcq", q:"An expert tells a jury: “The chance that an innocent person would match this sample is 1 in 50,000.” A juror concludes: “So there’s only a 1 in 50,000 chance the defendant is innocent.” What is wrong with the juror’s reasoning?", options:[
      {t:"It swaps “match given innocent” for “innocent given match”; in a large population, several innocent people would match too", ok:true, why:"Right: the prosecutor’s fallacy. In a city of 1,000,000 possible suspects, about 20 innocent people would match by chance. The match alone puts the defendant in a group of about 21, not near certainty."},
      {t:"Nothing: the two statements mean the same thing", why:"They have different denominators. One is about innocent people; the other is about people who match."},
      {t:"The chance should be 1 in 25,000, because there are two possibilities", why:"Two possible outcomes don’t make them equally likely. The real issue is swapping the conditional probability."},
      {t:"Forensic matches are never meaningful evidence", why:"They can be strong evidence, especially combined with other evidence. The problem is how the number is read."}
    ]}
   ],
   apply:{intro:"Build a calculator that counts people through a test, then use it to explore.", tasks:[
     {t:"A natural-frequency calculator", app:{all:[
       "In A1:A4 type the labels `People`, `Base rate`, `Sensitivity`, `False positive rate`. In B1:B4 type `10000`, `1%`, `90%`, `5%`.",
       "In A6:A10 type `Have it`, `True positives`, `Don’t have it`, `False positives`, `Chance a positive is real`.",
       "B6: `=B1*B2`. B7: `=B6*B3`. B8: `=B1-B6`. B9: `=B8*B4`. B10: `=B7/(B7+B9)`, formatted as a percentage.",
       "Check: 100, 90, 9900, 495 and about 15.4%. Now change the base rate to 20%, then to 0.1%, and watch B10."
     ]}, write:"What does the chance a positive is real become at 20% and at 0.1%?"},
     {t:"Explain it to someone", how:["Pick one example from the lesson (a medical test, a fraud alert or a detector).","Explain to a friend or family member, using a crowd of 1,000 or 10,000 people, why a positive result can be wrong more often than right.","Notice which part they found surprising."], write:"How did you explain it, and what surprised them?"}
   ], proof:"A working calculator that gives about 15.4% for the lesson’s example and shows how the result changes with the base rate."},
   read:[
     {book:"ostat", where:"Chapter 3, Section 3.1 “Terminology” (conditional probability), Section 3.4 “Contingency Tables” and Section 3.5 “Tree and Venn Diagrams”"},
     {book:"openintro", where:"Chapter 3, Section 3.2 “Conditional probability” (subsections “Tree diagrams” and “Bayes’ Theorem”)", note:"Its mammogram example uses the same reasoning with probabilities instead of counts."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u1-l5", title:"Numbers in context: size, money, uncertainty and who’s missing", minutes:55,
   hook:{q:"How long is a million seconds? And a billion seconds?", options:["About 12 days, and about 32 years","About 12 days, and about 120 days","About 1 year, and about 10 years","About 3 hours, and about 1 month"], answer:0, reveal:"**About 12 days, and about 32 years.** A million seconds is 1,000,000 ÷ 86,400 seconds a day ≈ 11.6 days. A billion is a thousand times more: about 31.7 years. In headlines “million” and “billion” sound like neighbours, but they are as far apart as a fortnight and a lifetime’s career. This lesson is about getting a feel for size, and the other context a number needs."},
   goals:[
     "Read millions, billions and trillions as orders of magnitude, including where words differ between languages",
     "Make big numbers meaningful: per person, per day, and as a share of a total",
     "Convert money between years with a price index, and tell nominal from real changes",
     "Read uncertainty in official estimates and polls, including revisions",
     "Recognise survivorship bias, and use a checklist of questions for any number"
   ],
   learn:[
    {h:"Orders of magnitude", body:[
      {lead:"An [[order-of-magnitude|order of magnitude]] is a factor of ten. Getting the order of magnitude right matters more than any decimal place."},
      "Thousand, million, billion and trillion are each **a thousand times** the one before: three orders of magnitude apart.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Counting seconds</text><rect class="d-sage" x="40" y="30" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="51" text-anchor="middle">1 thousand seconds</text><text class="s" x="170" y="69" text-anchor="middle">about 17 minutes</text><rect class="d-lup" x="40" y="110" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="131" text-anchor="middle">1 million seconds</text><text class="s" x="170" y="149" text-anchor="middle">about 11.6 days</text><rect class="d-gold" x="40" y="190" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="211" text-anchor="middle">1 billion seconds</text><text class="s" x="170" y="229" text-anchor="middle">about 31.7 years</text><rect class="d-rose" x="40" y="270" width="260" height="50" rx="8" stroke-width="2"/><text x="170" y="291" text-anchor="middle">1 trillion seconds</text><text class="s" x="170" y="309" text-anchor="middle">about 31,700 years</text><text class="s" x="178" y="99">× 1,000</text><text class="s" x="178" y="179">× 1,000</text><text class="s" x="178" y="259">× 1,000</text><path class="d-ink" d="M170 80 L170 108 M170 160 L170 188 M170 240 L170 268" stroke-width="2" fill="none"/></svg>', alt:"Four stacked boxes, each a thousand times the one above: 1 thousand seconds is about 17 minutes; 1 million seconds about 11.6 days; 1 billion seconds about 31.7 years; 1 trillion seconds about 31,700 years.", cap:"Each step is a thousand times bigger (years of 365.25 days)."},
      "Scientists write very large numbers in **scientific notation**: 3,200,000,000 is 3.2 × 10⁹. Spreadsheets write it as `3.2E+09` (or `3.20E+09`) when a cell is formatted as scientific, or when a number is too long for its cell.",
      {warn:"Words for big numbers differ between languages. In English today a **billion** almost always means a thousand million (10⁹). But in Spanish *billón*, German *Billion* and French *billion* mean a **million million** (10¹²); the word for 10⁹ is *mil millones* (Spanish) or *Milliarde* / *milliard* (German, French). Mistranslating one makes a figure a thousand times too big."}
    ]},
    {h:"Make big numbers human-sized", body:[
      "A headline figure in millions or billions means little on its own. Three quick conversions help.",
      {list:[
        "**Per person**: divide by the population.",
        "**Per day or per year**: divide by the time period.",
        "**As a share of a total**: divide by the whole budget, market or population."
      ]},
      {ex:"A country of 25 million people spends 500 million a year on a programme. Total government spending is 100 billion.\n\nPer person: 500,000,000 ÷ 25,000,000 = 20 a year, or about 0.05 a day.\nShare of spending: 500,000,000 ÷ 100,000,000,000 = 0.005 = 0.5%.\n\n“Half a billion” sounds huge; “20 each a year, half a per cent of the budget” lets readers judge it.", label:"Worked example: a big number made human-sized (invented figures)"},
      "One real anchor helps a lot: the United Nations marked the world’s population passing **8 billion** on 15 November 2022. So 1 billion of anything shared across the world is about one-eighth each: a billion dollars is about 12.5 cents per person.",
      {tip:"Do a quick sanity check on any big figure: does it imply something impossible per person? A claim that “each resident uses 2,000 litres of water a day for drinking” fails at once."}
    ]},
    {h:"Nominal and real money", body:[
      "Money changes value. Prices in most countries rise over time (**[[inflation]]**), so the same amount buys less. A **nominal** amount is the number of currency units at the time. A **real** amount has been adjusted for inflation so different years can be compared ([[nominal-vs-real]]).",
      "Statistics offices measure inflation with a **[[price-index|price index]]**, such as a consumer price index (CPI), which tracks the cost of a typical basket of goods and services. The US Bureau of Labor Statistics, for example, describes the CPI as used to find the purchasing power of the consumer’s dollar.",
      {ex:"An invented price index is 100 in 2015 and 135 in 2025: prices rose 35%.\n\nDana earned 30,000 in 2015 and 40,000 in 2025.\nNominal rise: (40,000 − 30,000) ÷ 30,000 ≈ 33.3%.\nIn 2015 money, 2025 pay is 40,000 × 100 ÷ 135 ≈ 29,630.\n\nIn real terms Dana’s pay buys about 1.2% less than in 2015, despite the 10,000 rise. Equivalently, 30,000 in 2015 is worth 30,000 × 135 ÷ 100 = 40,500 in 2025 money.", label:"Worked example: a real pay cut (invented index)"},
      {ex:"Amount in B2 from the year with index C2; index for the target year in C3:\n=B2*C3/C2", label:"Convert money between years", mono:true},
      "This is why “record” figures (the highest-earning film, the biggest budget, the most expensive house) often aren’t records in real terms. With inflation, nominal records are broken almost automatically.",
      {tip:"Official indexes describe an average basket. Your own costs may rise faster or slower, depending on what you spend money on and where you live."}
    ]},
    {h:"Estimates come with uncertainty", body:[
      "Many official numbers are **estimates** from samples, so they come with uncertainty, and they get **revised** as more data arrive. The US monthly jobs report is a well-documented example (US Bureau of Labor Statistics, technical note to *The Employment Situation*, checked November 2026).",
      {list:[
        "The payroll figure comes from a monthly survey of about 119,000 businesses and government agencies (about 622,000 worksites).",
        "BLS says the 90% confidence interval for the monthly change in jobs is **on the order of plus or minus 122,000**.",
        "Its own example: if jobs rise by 50,000, the interval runs from **−72,000 to +172,000**. Because that includes values below zero, “we could not say with confidence that nonfarm employment had, in fact, increased that month.” A rise of 250,000 would be clearly above zero.",
        "The two previous months are routinely revised, and the figures are adjusted once a year to fuller counts."
      ]},
      "Polls work the same way. If a party goes from 41% to 43% in two polls, each with a [[margin-of-error|margin of error]] of about 3 points, the change may be nothing but sampling noise. The uncertainty of a *change* between two separate polls is larger than the margin of either poll alone. Research Skills explains what a [[confidence-interval|confidence interval]] does and doesn’t mean.",
      {key:"A good estimate comes with a range. If a news story gives only the central figure, and the change is small, ask whether it is bigger than the uncertainty, and whether the figure might be revised."}
    ]},
    {h:"Survivorship bias: who isn’t in the data?", body:[
      "**[[survivorship-bias|Survivorship bias]]** happens when you study only the things that made it through some filter and forget the ones that didn’t. The survivors look special, but you can’t see the failures that looked just like them.",
      {fig:'<svg viewBox="0 0 340 280"><rect class="d-panel" x="70" y="10" width="200" height="46" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">100 planes fly out</text><text class="s" x="170" y="48" text-anchor="middle">(invented numbers)</text><path class="d-ink" d="M130 56 L90 96 M210 56 L250 96" fill="none" stroke-width="2"/><rect class="d-sage" x="10" y="96" width="155" height="76" rx="8" stroke-width="2"/><text x="87" y="118" text-anchor="middle">70 return</text><text class="s" x="87" y="138" text-anchor="middle">you can inspect</text><text class="s" x="87" y="155" text-anchor="middle">their damage</text><rect class="d-rose" x="175" y="96" width="155" height="76" rx="8" stroke-width="2" stroke-dasharray="6 4"/><text x="252" y="118" text-anchor="middle">30 lost</text><text class="s" x="252" y="138" text-anchor="middle">their damage is</text><text class="s" x="252" y="155" text-anchor="middle">never seen</text><rect class="d-gold" x="10" y="194" width="320" height="76" rx="8" stroke-width="2"/><text x="170" y="216" text-anchor="middle">Holes on returning planes show</text><text x="170" y="236" text-anchor="middle">where a plane can be hit and survive.</text><text class="s" x="170" y="257" text-anchor="middle">Few holes in a spot may mean hits there were fatal.</text></svg>', alt:"100 planes fly out. 70 return and can be inspected; 30 are lost and their damage is never seen. The holes on returning planes show where a plane can be hit and survive; few holes in a spot may mean hits there were fatal.", cap:"Only the survivors are in the data (invented numbers)."},
      "The classic story comes from the Second World War. The statistician Abraham Wald, working with the Statistical Research Group at Columbia University, developed methods for estimating how vulnerable aircraft were from the damage on planes that came back. The popular retelling simplifies his mathematics, but the insight is real: damage on survivors shows where planes **can** be hit; the missing planes hold the answer to where they **can’t**.",
      {list:[
        "**Success stories.** Studying successful founders who dropped out of university ignores the many dropouts whose businesses failed.",
        "**“They built things better back then.”** Old buildings and objects we see today are the ones sturdy enough to survive; the shoddy ones are long gone.",
        "**Investment funds.** Funds that do badly are often closed or merged, so averaging only the funds still open makes the industry look better than investors actually did.",
        "**Reviews and testimonials.** People who quit a course or a diet rarely write about it."
      ]},
      "Survivorship bias is one kind of **selection bias**: the data were filtered by the very outcome you’re studying."
    ]},
    {h:"A checklist for any number", body:[
      "Everything in this unit comes down to a handful of questions you can ask of any number, in a headline, a report, a spreadsheet or your own work.",
      {ol:[
        "**Of what?** What is the denominator, and who was counted?",
        "**Compared with what?** Last year, another place, a control group, the whole population?",
        "**Absolute and relative?** Points or percent? How many people, not just what share?",
        "**Which average,** and how spread out are the values?",
        "**What’s the base rate?** How common was this before the test, the alert or the claim?",
        "**How big, really?** Per person, per day, as a share of the total; adjusted for inflation?",
        "**How sure?** Is there a range or a margin of error? Will it be revised?",
        "**Who’s missing?** Who dropped out, closed down or was never asked?"
      ]},
      {key:"You don’t need advanced maths to read numbers critically. You need the habit of asking what each number is a number *of*, and what it is being compared with."}
    ]}
   ],
   try:[
    {id:"t3u1-l5-x1", type:"number", q:"A government plans to spend 1.2 trillion over ten years. The country has 60 million people. How much is that **per person, over the ten years**?", answer:20000, tol:0, unit:"per person", why:"1.2 trillion = 1,200,000,000,000. Divide by 60,000,000: 1,200,000,000,000 ÷ 60,000,000 = 20,000 per person over ten years, which is 2,000 per person per year.", wrongs:[
      {v:2000, tol:0, why:"2,000 is per person **per year**. The question asks for the whole ten years: 20,000."},
      {v:20, tol:0, why:"That would be 1.2 **billion** ÷ 60 million. A trillion is a thousand billion, so the answer is 1,000 times larger: 20,000."},
      {v:20000000, tol:0, why:"That would need 1.2 quadrillion, a thousand times more. Check the zeros: 1.2 trillion is 1.2 × 10¹² and 60 million is 6 × 10⁷. 10¹² ÷ 10⁷ = 10⁵, and 1.2 ÷ 6 = 0.2, so the answer is 0.2 × 10⁵ = 20,000."}
    ]},
    {id:"t3u1-l5-x2", type:"mcq", q:"Lucía is translating a Spanish news report that says a project will cost “2 billones de euros”. What should the English say?", options:[
      {t:"2 trillion euros", ok:true, why:"Right. In Spanish, un billón is a million million (10¹²), which is an English trillion. An English billion is mil millones in Spanish."},
      {t:"2 billion euros", why:"That’s the classic false friend. Spanish billón means 10¹², a thousand times more than an English billion (10⁹)."},
      {t:"2 million euros", why:"Far too small: billón means a million million."},
      {t:"200 million euros", why:"No reading of billón gives this. Spanish billón is 10¹², an English trillion."}
    ]},
    {id:"t3u1-l5-x3", type:"number", q:"Rent on a flat was 800 a month in 2018 and 950 in 2025. An invented price index was 110 in 2018 and 140 in 2025. What was the 2018 rent worth **in 2025 money**? (Round to the nearest whole number.)", answer:1018, tol:1, unit:"per month", hint2:"Multiply by the later index and divide by the earlier one.", why:"800 × 140 ÷ 110 ≈ 1,018.18, so about 1,018 a month in 2025 money. The actual 2025 rent, 950, is lower than that: in real terms the rent fell, even though it rose by 150 in nominal terms.", wrongs:[
      {v:629, tol:1, why:"You divided by the later index and multiplied by the earlier one (800 × 110 ÷ 140). To bring an old amount forward, multiply by the newer index and divide by the older one."},
      {v:950, tol:1, why:"950 is the actual 2025 rent. The question asks what 800 in 2018 would be worth in 2025 prices: 800 × 140 ÷ 110."},
      {v:830, tol:1, why:"You added the 30-point index difference to the rent. Indexes work by ratio: multiply by 140 ÷ 110."}
    ]},
    {id:"t3u1-l5-x4", type:"mcq", q:"The US jobs report says employment rose by 60,000 last month. BLS says the 90% confidence interval for a monthly change is about ±122,000. Which statement is best?", options:[
      {t:"We can’t be confident jobs rose at all: the interval runs from about −62,000 to +182,000, and the figure may be revised", ok:true, why:"Right. 60,000 − 122,000 = −62,000 and 60,000 + 122,000 = 182,000. Because the range includes values below zero, the survey can’t show with confidence that employment increased. The figure will also be revised in the next two monthly reports."},
      {t:"Exactly 60,000 more people have jobs than a month ago", why:"60,000 is an estimate from a survey of employers. The real change could be quite different, and BLS revises it as more responses arrive."},
      {t:"Employment fell, because the margin is bigger than the rise", why:"The interval includes falls, but also rises up to about 182,000. The data can’t tell us the direction confidently, which is different from showing a fall."},
      {t:"The survey is unreliable and should be ignored", why:"A survey of about 119,000 employers gives useful estimates; it just can’t pin down small monthly changes. Larger changes, and trends over several months, are much clearer."}
    ]},
    {id:"t3u1-l5-x5", type:"sort", q:"Which of these are likely to suffer from survivorship bias?", buckets:["Survivorship bias likely","Survivorship bias unlikely"], items:[
      {t:"Studying the habits of companies still trading after 30 years to find the “secrets of success”", b:0, why:"Companies with the same habits that went bust aren’t in the sample, so you can’t tell whether the habits made any difference."},
      {t:"Judging a fitness programme by the before-and-after photos of people who finished it", b:0, why:"People who dropped out, perhaps because it didn’t work for them, are missing."},
      {t:"Following up everyone who enrolled in a course, including those who left, to see how it went", b:1, why:"Including everyone who started, dropouts too, is exactly how to avoid survivorship bias."},
      {t:"Average past returns of the investment funds that are still open today", b:0, why:"Funds that did badly were often closed or merged and have dropped out of the list, so the average looks better than investors’ experience."},
      {t:"Concluding that old songs were better because the old songs you still hear are great", b:0, why:"The forgettable songs from the past have been forgotten; today’s forgettable ones are still on the radio."},
      {t:"A health study that randomly samples residents from the population register", b:1, why:"A random sample from a full list includes people whatever their outcome, so nobody is filtered out by success or failure (though non-response is still worth checking)."}
    ]},
    {id:"t3u1-l5-x6", type:"match", q:"Match each claim to the most useful first question.", pairs:[
      ["“Record box-office takings for this year’s top film”","Is that adjusted for inflation?","Box-office totals are usually nominal. With rising prices, nominal records are broken easily."],
      ["“Jobs up 40,000 last month”","Is that bigger than the uncertainty, and will it be revised?","Monthly survey estimates have wide intervals and are revised as more data arrive."],
      ["“Every graduate we surveyed says the course changed their life”","Who dropped out or wasn’t asked?","Only satisfied survivors may have been surveyed."],
      ["“The scheme will cost 300 million”","How much is that per person, and out of what total?","A big number needs a denominator: per person, per year, or as a share of the budget."]
    ]}
   ],
   apply:{intro:"Put real numbers in context, using sources from your own country or region.", tasks:[
     {t:"Adjust a price for inflation", app:{all:[
       "Search for your country’s official consumer price index (CPI) from its national statistics office or central bank. Many publish an online inflation calculator too.",
       "Pick something you remember the price of from some years ago (a bus fare, a coffee, a rent). In a sheet, put the old price in B2, the old year’s index in C2 and this year’s index in C3.",
       "In B3 type `=B2*C3/C2`. That is the old price in today’s money.",
       "Compare it with today’s actual price. Did the price rise faster or slower than inflation?"
     ]}, write:"The item, the old price, its value in today’s money, today’s price, and your conclusion."},
     {t:"Make a big number human-sized", how:["Find a big number in the news: a budget, a fine, a company’s profit, a number of people.","Divide it by the right population and time period to get a per-person, per-year figure. Use the official population figure from your statistics office.","If you can, also express it as a share of a relevant total (the whole budget, the whole market)."], write:"The number, your per-person figure, and whether it changed how big it felt."},
     {t:"Hunt for a missing group", how:["Find a claim based on success stories: a testimonial, a “habits of successful people” article, a review page.","Ask: who might be missing from this evidence? What would the claim look like if they were included?"]}
   ], proof:"One price converted with a real index, one big number turned into a per-person figure, and notes on one claim where someone might be missing from the data."},
   read:[
     {book:"openintro", where:"Chapter 1, Section 1.3 “Sampling principles and strategies” (subsections “Anecdotal evidence” and “Sampling from a population”)", note:"Background reading on why data from people who happen to be easy to find, or who survived some filter, can mislead."},
     {book:"ostat", where:"Chapter 1, Section 1.2 “Data, Sampling, and Variation in Data and Sampling”", note:"Background reading on samples and how estimates vary from sample to sample."}
   ]
  }
  ],
  checkpoint:["t3u1-q02","t3u1-q06","t3u1-q11","t3u1-q15","t3u1-q20","t3u1-q24","t3u1-q29","t3u1-q32","t3u1-q34","t3u1-q38","t3u1-q41","t3u1-q44"],
  codex:[
   {id:"percentages-rates", title:"Percentages, percentage points and rates", aka:["percent change","percentage points","rate per 100,000","per capita","denominator"], tags:["numbers","data literacy","statistics"],
    summary:"What a percentage is a percentage of, points versus percent, chained changes, and fair rates per person.",
    levels:{
     starter:[
      "A percentage is a share out of 100. “40% of the group” means 40 out of every 100 people in it. The key word is *of*: every percentage is a percentage **of something**, called the [[denominator]]. Forty per cent of 20 people is 8; forty per cent of 2 million is 800,000.",
      "When a percentage changes, there are two ways to say how much. From 4% to 5% is a rise of **1 [[percentage-point|percentage point]]** (the simple gap) or a rise of **25%** (the gap compared with the starting 4%). Both are true. A good report says which it means.",
      "Counts on their own don’t show how common something is: a big city always has more of everything than a village. A **rate** divides the count by the population: “300 cases per 100,000 people”. A rate per person is called **per capita**.",
      {key:"Ask “percent of what?” and “out of how many?” before trusting any percentage or count."}
     ],
     builder:[
      "**Points and percent.** For two percentages, the [[absolute-change|absolute change]] is new − old, in percentage points. The [[relative-change|relative change]] is (new − old) ÷ old, in percent. Relative change isn’t symmetric: 4% → 5% is +25%, but 5% → 4% is −20%.",
      "**Chaining.** Changes multiply. A 10% rise multiplies by 1.10, a 15% fall by 0.85. Three 10% rises give 1.10³ = 1.331 (+33.1%). Up 20% then down 20% gives 1.20 × 0.80 = 0.96 (−4%). To undo a change, divide by its multiplier: a price of 80 after a 20% discount was 80 ÷ 0.80 = 100.",
      "**Rates.** Rate = count ÷ population × a convenient base (1,000, 100,000). In a spreadsheet: `=B2/C2*100000`. “1 in X” is the same idea upside down: 1 in 400 = 0.25% = 250 per 100,000. In “1 in X” form a bigger X is a smaller risk, so convert everything to one format before comparing. Rates from small populations are noisy: a village going from 3 to 6 cases “doubles” its rate without anything changing.",
      "**Combining groups.** Never average percentages from groups of different sizes. Rebuild the counts: 9 of 10 and 20 of 40 together are 29 of 50 = 58%, not the 70% you get by averaging 90% and 50%.",
      "**Not adding to 100%** is often fine: choose-all-that-apply questions, rounding (three groups of 33%), or shares with different bases.",
      {lab:"fl-share", t:"Practise: shares of a total in a spreadsheet"}
     ],
     pro:[
      "**Rates, proportions and ratios.** In epidemiology a *proportion* is a part of a whole (prevalence: the share of people with a condition at a point in time); a *rate* strictly has time in its denominator (incidence: new cases per 1,000 person-years); a *ratio* compares two separate quantities (doctors per 1,000 residents). Everyday usage blurs these, but in papers the difference matters.",
      "**Basis points.** Finance often uses basis points for small changes in rates: 1 basis point = 0.01 percentage points, so “a 25 basis-point rise” is 0.25 points (for example, 4.00% to 4.25%).",
      "**Age standardisation.** Places with older populations have more deaths per 1,000 people even with excellent care. Statistics offices therefore publish age-standardised rates, which apply each place’s age-specific rates to a common standard population, so that differences in age structure don’t drive the comparison. Compare crude with crude and standardised with standardised, never one with the other.",
      "**Averaging growth.** Average percentage changes over several periods with the geometric mean, not the arithmetic mean. +50% then −50% has an arithmetic average of 0% but a real result of −25% overall, which is √(1.5 × 0.5) − 1 ≈ −13.4% per period.",
      "**Doubling time.** At steady growth of r% per period, doubling takes about 70 ÷ r periods (the “rule of 70”). At 7% a year: 70 ÷ 7 = 10 years; the exact value is ln 2 ÷ ln 1.07 ≈ 10.2 years.",
      "**Choosing the denominator is a choice of question.** Deaths per journey, per kilometre and per hour of travel answer different questions about transport safety, and can rank modes differently. State the one you used and why."
     ]},
    related:["misleading-numbers","absolute-relative-risk","averages-misleading","numbers-in-context"],
    read:[{book:"ostat", where:"Chapter 1, Section 1.3 “Frequency, Frequency Tables, and Levels of Measurement”"}],
    sources:[{t:"OpenStax, Introductory Statistics 2e", url:"https://openstax.org/details/books/introductory-statistics-2e"},{t:"US Bureau of Labor Statistics: Consumer Price Index Frequently Asked Questions (how to calculate percent changes)", url:"https://www.bls.gov/cpi/questions-and-answers.htm"}], checked:"2026-11"},

   {id:"absolute-relative-risk", title:"Absolute and relative risk", aka:["relative risk","risk ratio","number needed to treat","NNT","relative risk reduction","odds ratio"], tags:["numbers","health","statistics","data literacy"],
    summary:"Turning “cuts risk by 25%” into how many people out of 1,000 it actually helps (or harms).",
    levels:{
     starter:[
      "A **risk** is how many people in a group have something happen over a period: “20 in every 1,000 people over five years”.",
      "A **relative** change compares the new risk with the old one: “cuts the risk by 25%”, “twice as likely”. An **absolute** change is the plain difference in people: “5 fewer in every 1,000”.",
      "Relative figures sound bigger and are common in headlines and adverts. But a 50% cut in a tiny risk is still a tiny difference: from 2 in 10,000 to 1 in 10,000 is one person in ten thousand.",
      "To judge any claim about risk, you need the **starting risk** of people like you. Then you can turn it into counts: “Out of 1,000 people like me, about X would have this without it, and Y with it.” Research Skills covers the same idea in papers (see [[absolute-risk]]).",
      {key:"Relative risk tells you how strong an effect is. Absolute risk tells you how much it matters."}
     ],
     builder:[
      "From two groups (risk without, risk with), you can derive every common measure. Invented example: 20 per 1,000 untreated, 15 per 1,000 treated, over five years.",
      {table:[["Measure","Formula","Example"],["Absolute risk difference","without − with","5 per 1,000 (0.5 points)"],["Risk ratio","with ÷ without","0.75"],["Relative risk reduction","difference ÷ without","25%"],["Number needed to treat","1 ÷ absolute difference","200"]]},
      "The same relative effect in a group at higher risk gives a much bigger absolute benefit: 200 → 150 per 1,000 is still 25% relative, but 50 fewer per 1,000 and an NNT of 20.",
      "For harms, the same logic gives the **number needed to harm**: if side effects go from 1 in 100 to 3 in 100, that’s 2 extra per 100, so about 1 in 50 people treated has a side effect because of the treatment.",
      "Ratio wording: “3 times as likely” is a 200% increase. “50% more likely” is 1.5 times as likely. Watch for **mismatched framing**, with benefits in relative terms and harms in absolute terms; convert both to natural frequencies before comparing.",
      "Real example: the International Agency for Research on Cancer (2015) reported that each 50 g of processed meat eaten daily increases colorectal cancer risk by about 18%, a relative figure; its Q&A says these risks are small but could be important for public health because many people worldwide eat meat."
     ],
     pro:[
      "**Odds ratios.** Many studies (especially case-control studies and logistic regression) report odds ratios. Odds = with outcome ÷ without outcome. For rare outcomes the odds ratio approximates the risk ratio: risks of 2% and 1% give a risk ratio of 2 and an odds ratio of about 2.02. For common outcomes they diverge: 40% against 20% gives a risk ratio of 2 but an odds ratio of about 2.67. Reading an odds ratio as “times as likely” overstates the effect when the outcome is common.",
      "**Hazard ratios** (from survival analysis) compare instantaneous event rates over time; they are not risk ratios either, though for modest effects and short follow-up they are often similar.",
      "**Confidence intervals** apply to each measure. A relative risk reduction of 25% (95% CI −5% to 45%) is compatible with no effect. The NNT’s interval is awkward when the risk difference’s interval crosses zero, because 1 ÷ a number near zero is huge; good reports then give the absolute difference with its interval instead.",
      "**Baseline risk is the key input** for personal decisions and it varies by age, sex, history and setting. Trials often report relative effects because those tend to be more stable across groups; the absolute benefit for an individual then comes from applying the relative effect to that person’s own baseline.",
      "**Time window.** An NNT of 200 over five years is not the same as 200 over one year. Always state the period. Relative effects can also change with follow-up length.",
      "**Communicating risk.** The US Food and Drug Administration’s *Communicating Risks and Benefits: An Evidence-Based User’s Guide* (edited by Baruch Fischhoff, Noel Brewer and Julie Downs) gathers the research behind good practice in presenting numbers to the public. A practical habit drawn from that body of work: give the absolute risk in each group, over a stated time, with the same denominator for benefits and harms."
     ]},
    related:["percentages-rates","base-rates","misleading-numbers","reading-results"],
    read:[{book:"openintro", where:"Chapter 1, Section 1.1 “Case study: using stents to prevent strokes”"}],
    sources:[{t:"IARC Monographs evaluate consumption of red meat and processed meat: Q&A (2015)", url:"https://www.iarc.who.int/wp-content/uploads/2018/07/Monographs-QA_Vol114.pdf"},{t:"US FDA: Communicating Risks and Benefits: An Evidence-Based User’s Guide", url:"https://www.fda.gov/about-fda/reports/communicating-risks-and-benefits-evidence-based-users-guide"}], checked:"2026-11"},

   {id:"averages-misleading", title:"Averages that mislead", aka:["mean vs median","weighted mean","Simpson’s paradox","composition effect"], tags:["statistics","data literacy","numbers"],
    summary:"Skew, averages of averages, Simpson’s paradox and changing groups: how a correct average can give a false picture.",
    levels:{
     starter:[
      "“Average” usually means the **[[mean-stat|mean]]** (add up, divide by how many), but it can also mean the **[[median-stat|median]]** (the middle value) or the **[[mode-stat|mode]]** (the most common).",
      "They can be very different. If nine people earn 30,000 and one earns 300,000, the mean is 57,000 but the median is 30,000. One large value pulls the mean up; the median shows the typical person.",
      "So when you see “the average price” or “the average income”, ask **which average**. For incomes, house prices and waiting times, the median usually describes a typical case better. For totals, like how much water a whole village will use, the mean is the right one.",
      "An average also hides the **spread**: two towns can have the same average temperature and completely different weather.",
      {key:"Ask which average, and ask how spread out the values are."}
     ],
     builder:[
      "**Skew.** In right-skewed data (incomes, wealth, house prices, followers) the mean is above the median, and most values are below the mean. That isn’t a paradox; it’s the shape of the data. See {{descriptive-statistics}} for how to calculate each average.",
      "**Weighted means.** To combine group averages, weight each by its group size: `=SUMPRODUCT(sizes,means)/SUM(sizes)`. Clinic A (400 patients, 10 minutes) and Clinic B (100 patients, 30 minutes) average 14 minutes overall, not 20.",
      "**[[simpsons-paradox|Simpson’s paradox]].** A real example: a 1986 *British Medical Journal* study of kidney stone treatments (Charig and colleagues). Open surgery succeeded in 93% of small-stone cases and 73% of large-stone cases; keyhole surgery in 87% and 69%. Yet overall, keyhole looked better (83% against 78%), because open surgery was given far more of the hard, large-stone cases. Stone size was a [[confounder]].",
      "**A mean nobody has.** 18 children in 10 families is a mean of 1.8, a value no family has; useful for totals, not as a description of a family. **Rates of different-sized groups** combine as total events ÷ total population, never as an unweighted average of the rates.",
      "**Composition effects.** An average changes when the group changes. If lower-paid staff leave, mean pay rises without anyone getting a raise. Ask whether the values changed or the membership did.",
      {lab:"fl-average", t:"Practise: AVERAGE in a spreadsheet"}
     ],
     pro:[
      "**Which comparison is right in Simpson’s paradox?** It depends on the causal structure, not on arithmetic. If the splitting variable causes both the treatment choice and the outcome (stone size), compare within groups. If it is itself caused by the treatment (say, a side effect that then affects survival), splitting by it can introduce bias. Thinking in terms of causal diagrams is the standard way to decide.",
      "**Robust summaries.** The median and [[interquartile-range|interquartile range]] are [[robust-statistic|robust]]: a few extreme values barely move them. A trimmed mean (dropping, say, the top and bottom 5% before averaging) is a compromise used in some official statistics. Report the choice.",
      "**Geometric means** are the right average for growth factors and ratios. Average annual growth from +50% and −50% is √(1.5 × 0.5) − 1 ≈ −13.4% a year, not 0%.",
      "**Ecological fallacy.** An average for a group doesn’t describe its members. Regions with higher average incomes may vote a certain way without richer individuals voting that way.",
      "**Means of rates need weights too.** Averaging the rates of a small and a large town as if equal gives each person in the small town far more weight. Population-weighted means, or the overall rate (total events ÷ total population), avoid this.",
      "**Distributions matter.** Unit 5 of this track covers distributions, boxplots and spread ({{distributions}}, {{centre-spread}}, {{boxplots}}); the habit to build here is never to accept a single centre without asking for its spread and shape."
     ]},
    related:["percentages-rates","descriptive-statistics","numbers-in-context","centre-spread"],
    read:[{book:"ostat", where:"Chapter 2, Section 2.6 “Skewness and the Mean, Median, and Mode”"},{book:"openintro", where:"Chapter 2, Section 2.1 “Examining numerical data” (subsection “Robust statistics”)"}],
    sources:[{t:"Charig CR et al. (1986), Comparison of treatment of renal calculi by open surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy, BMJ 292:879–882", url:"https://doi.org/10.1136/bmj.292.6524.879"},{t:"OpenIntro Statistics, 4th edition", url:"https://www.openintro.org/book/os/"}], checked:"2026-11"},

   {id:"base-rates", title:"Base rates, false positives and natural frequencies", aka:["base rate neglect","false positive","sensitivity and specificity","positive predictive value","prosecutor’s fallacy","Bayes’ theorem"], tags:["statistics","probability","health","data literacy"],
    summary:"Why a positive result from a good test can still usually be wrong, and how counting people makes it clear.",
    levels:{
     starter:[
      "Tests make two kinds of mistake. A **[[false-positive|false positive]]** is a false alarm (the test says yes, but the answer is no). A **[[false-negative|false negative]]** is a miss.",
      "How often a positive result is right depends not only on the test but on how common the thing is in the group tested: the **[[base-rate|base rate]]**.",
      "Picture 10,000 people. 1% (100) have a condition. A test catches 90 of them. Of the 9,900 who don’t have it, the test wrongly flags 5%: 495 people. So 585 test positive, and only 90 of them have the condition: about 15%.",
      "The test is good. There are just far more healthy people for false alarms to happen to. When something is rare, most alarms are false.",
      {key:"To understand a test result, count people: start with 10,000, split by the base rate, then by the test."}
     ],
     builder:[
      "**Vocabulary.** [[test-sensitivity|Sensitivity]] = true positives ÷ everyone with the condition. [[test-specificity|Specificity]] = true negatives ÷ everyone without it; the false positive rate is 1 − specificity. [[predictive-value|Positive predictive value]] (PPV) = true positives ÷ all positives. Negative predictive value = true negatives ÷ all negatives.",
      "**Natural frequencies** (counts out of a round number) make these calculations transparent; Gigerenzer and Hoffrage (1995) showed that people solve such problems far more often when they are given as frequencies than as probabilities.",
      {table:[["Base rate (same test)","True positives","False positives","PPV"],["0.1% of 100,000","90","4,995","about 1.8%"],["1% of 100,000","900","4,950","about 15%"],["20% of 100,000","18,000","4,000","about 82%"]]},
      "**Accuracy is not one number.** A claim that a test is “95% accurate” usually hides two figures (sensitivity and specificity), and neither tells you the chance that a positive is right until you add the base rate.",
      "**Where it matters.** Screening people without symptoms (positives are followed by diagnostic tests), fraud and security alerts, AI-text and plagiarism detectors, spam filters (where spam is common, flags are usually right), and forensic evidence.",
      "**Negatives.** When the base rate is high, a negative is less reassuring. With the same test at a 20% base rate, 200 of 7,800 negatives (about 1 in 39) are missed cases; at 1%, it’s 10 of 9,415 (about 1 in 940).",
      "**The prosecutor’s fallacy** swaps “the chance of a match if innocent” (say 1 in 100,000) for “the chance of innocence given a match”. Among 2,000,000 possible suspects, about 20 innocent people would match."
     ],
     pro:[
      "**Bayes’ theorem** in probability form: P(condition | positive) = P(positive | condition) × P(condition) ÷ P(positive). With natural frequencies it is just “true positives ÷ all positives”.",
      "**Odds form.** Posterior odds = prior odds × likelihood ratio. The positive likelihood ratio is sensitivity ÷ false positive rate: 0.90 ÷ 0.05 = 18. Prior odds at a 1% base rate are 1 : 99. Posterior odds = 18 : 99 ≈ 0.18, which is a probability of 0.18 ÷ 1.18 ≈ 15.4%, matching the tree.",
      "**Repeat testing.** After a positive, the base rate for a second test is the PPV of the first. With 40,000 people, a 1% base rate, 90% sensitivity and a 5% false positive rate: 360 true and 1,980 false positives. If those 2,340 are retested and errors are independent, 324 true and 99 false positives remain: PPV ≈ 76.6%. Real errors are often **not** independent (the same feature fools the test twice), so a different kind of confirmatory test is usually used.",
      "**Spectrum effects.** Sensitivity and specificity measured in clinical studies may not hold in other populations (milder cases, other equipment), so the numbers themselves have uncertainty.",
      "**Thresholds.** Many tests produce a score, and the cut-off trades sensitivity against specificity. Lowering the threshold catches more true cases and raises false alarms. The right balance depends on the cost of each kind of error.",
      "OpenIntro Statistics works a mammogram example in probability notation; comparing it with a natural-frequency tree is good practice."
     ]},
    related:["absolute-relative-risk","estimates-uncertainty-news","percentages-rates"],
    read:[{book:"openintro", where:"Chapter 3, Section 3.2 “Conditional probability” (subsections “Tree diagrams” and “Bayes’ Theorem”)"},{book:"ostat", where:"Chapter 3, Section 3.5 “Tree and Venn Diagrams”"}],
    sources:[{t:"OpenIntro Statistics, 4th edition", url:"https://www.openintro.org/book/os/"},{t:"OpenStax, Introductory Statistics 2e", url:"https://openstax.org/details/books/introductory-statistics-2e"}], checked:"2026-11"},

   {id:"numbers-in-context", title:"Numbers in context: magnitude, real money and who’s missing", aka:["orders of magnitude","per capita","nominal vs real","inflation adjustment","survivorship bias","billion"], tags:["numbers","data literacy","economics"],
    summary:"Making big numbers meaningful, adjusting money for inflation, and noticing who has been filtered out of the data.",
    levels:{
     starter:[
      "Million, billion and trillion are each a thousand times the one before. A million seconds is about 11.6 days; a billion seconds is about 31.7 years.",
      "Big numbers become meaningful when you divide them: **per person**, **per year**, or as a **share of a total**. 500 million a year in a country of 25 million people is 20 per person per year.",
      "Money also needs context. Prices usually rise over time (**[[inflation]]**), so 100 today buys less than 100 did ten years ago. Comparing money across years needs a **real** (inflation-adjusted) figure, not just the **nominal** one.",
      "Finally, ask **who’s missing**. If you only look at success stories, you miss the failures that looked just the same. That is **[[survivorship-bias|survivorship bias]]**.",
      {key:"Divide big numbers by people and time, adjust money for inflation, and ask who isn’t in the data."}
     ],
     builder:[
      "**Language.** In English, a billion means 10⁹ (a thousand million). In Spanish (*billón*), German (*Billion*) and French (*billion*) the same-looking word means 10¹²; 10⁹ is *mil millones*, *Milliarde* or *milliard*.",
      "**Per person, per day.** 500 million a year in a country of 25 million is 20 per person per year, about 0.05 per day; as a share of a 100 billion budget it is 0.5%. Dividing by time as well as people often makes a figure feel very different.",
      "**Anchors.** The UN marked world population passing 8 billion on 15 November 2022. Your national statistics office publishes your country’s population; use it for per-person figures.",
      "**Real money.** A [[price-index|price index]] such as a consumer price index tracks the cost of a typical basket. To express an amount from year A in year B money: amount × index(B) ÷ index(A). In a spreadsheet: `=B2*C3/C2`. With an index of 100 in 2015 and 135 in 2025, 30,000 in 2015 is 40,500 in 2025 money.",
      "**Records.** Nominal records (box office, budgets, prices) are broken routinely under inflation. Ask for the real figure.",
      "**Survivorship bias** examples: studying only companies still trading, investment funds still open, buildings still standing, testimonials from people who finished a programme. The aircraft story from the Second World War (Abraham Wald’s work for the Statistical Research Group at Columbia University) is the classic, often simplified, illustration."
     ],
     pro:[
      "**Which index?** Consumer price indexes measure household prices; a GDP deflator covers the whole economy; specialised indexes exist for housing, wages and construction. Use the one that matches the thing being adjusted, and state the base year.",
      "**Real interest and growth rates.** The exact real rate is (1 + nominal) ÷ (1 + inflation) − 1. At 5% nominal and 3% inflation: 1.05 ÷ 1.03 − 1 ≈ 1.94%; the common shortcut (5 − 3 = 2%) is close when rates are small.",
      "**Comparing countries.** Converting at market exchange rates ignores that prices differ between countries. Purchasing power parity (PPP) conversions adjust for this and are used by international organisations to compare living standards.",
      "**Orders of magnitude for checking.** A Fermi estimate (rough reasoning with round numbers) catches impossible claims quickly: if a figure implies each resident drinks 2,000 litres a day, something is wrong by about three orders of magnitude.",
      "**Survivorship bias is a selection bias.** In research it shows up as attrition (people dropping out of a study for reasons linked to the outcome). Randomised trials guard against it with intention-to-treat analysis, which analyses everyone as randomised, including those who stopped. In finance, fund databases that drop closed funds overstate average returns.",
      "**False precision.** An estimate written as 1,203,457 suggests accuracy to the last person. If it is really an estimate, round it and give its uncertainty."
     ]},
    related:["percentages-rates","estimates-uncertainty-news","averages-misleading"],
    sources:[{t:"United Nations: Day of Eight Billion", url:"https://www.un.org/en/dayof8billion"},{t:"US Bureau of Labor Statistics: Consumer Price Index Frequently Asked Questions", url:"https://www.bls.gov/cpi/questions-and-answers.htm"}], checked:"2026-11"},

   {id:"estimates-uncertainty-news", title:"Estimates and uncertainty in the news", aka:["margin of error","revisions","confidence interval in news","jobs report"], tags:["statistics","news","data literacy"],
    summary:"Reading survey-based official figures and polls with their ranges and revisions, so small changes aren’t mistaken for news.",
    levels:{
     starter:[
      "Many numbers in the news are **estimates**: they come from a sample, not a count of everyone. Unemployment, jobs, inflation, crime surveys and opinion polls are usually estimates.",
      "Estimates come with **uncertainty**: a range around the figure where the true value probably lies. Polls describe it as a [[margin-of-error|margin of error]].",
      "If a party moves from 41% to 43% in two polls with a margin of about 3 points each, that change could be just chance. If monthly jobs rise by 50,000 but the uncertainty is about 122,000 either way, we can’t even be sure jobs rose.",
      "Official figures are also **revised** as more data come in. The first number you hear is often not the last.",
      {key:"A small change in an estimate is news only if it’s bigger than the uncertainty, and it may still be revised."}
     ],
     builder:[
      "**A real example.** The US Bureau of Labor Statistics’ technical note to *The Employment Situation* (checked November 2026) explains that its establishment survey covers about 119,000 businesses and government agencies (about 622,000 worksites), and that the 90% confidence interval for the monthly change in total nonfarm employment is **on the order of ±122,000**. A reported rise of 50,000 has an interval of −72,000 to +172,000, so BLS says one could not say with confidence that employment increased. A rise of 250,000 would be clearly positive.",
      "The same note says the previous two months are routinely revised, and the estimates are adjusted once a year to fuller payroll counts (a benchmark revision). For the household survey it gives, at an unemployment rate of about 6%, an interval of about ±0.3 percentage points for the monthly change in the unemployment rate.",
      "**Polls.** The margin of error covers only chance in who was sampled. It doesn’t cover people who refused, questions that were poorly worded, or groups that weren’t on the list. The uncertainty of a change between two polls is larger than either poll’s margin.",
      "**Language.** “Up to 3,000” gives only the top of a range. “At least” gives the bottom. Look for the full range and the central estimate. Research Skills explains [[confidence-interval|confidence intervals]] in detail."
     ],
     pro:[
      "**Sampling and non-sampling error.** Confidence intervals and margins of error quantify sampling error under a model. Non-sampling errors (coverage, non-response, measurement, processing) are often larger and are not included. Statistics offices describe them in quality or methodology notes.",
      "**The 90% level.** BLS uses 90% intervals (about ±1.6 standard errors) for these releases, while many polls and papers use 95% (about ±1.96 standard errors). Check the level before comparing ranges.",
      "**Changes between independent estimates.** If two independent estimates each have standard error s, their difference has standard error √2 × s, about 1.41 times as large. For overlapping samples (the same households interviewed in consecutive months), the correlation between estimates usually makes the change more precise than that, which is why offices publish the interval for the change directly.",
      "**Seasonal adjustment.** Many monthly series are seasonally adjusted so that regular patterns (holiday hiring, harvests) don’t look like news; seasonal factors are re-estimated and can revise past months.",
      "**Significance notes.** Some statistics offices say in their releases whether a change is statistically significant, or mark which changes are. Look for that note before treating a small move as real.",
      "**Trends over single months.** Because single-month changes are noisy, analysts often look at three-month averages or at changes over a year.",
      "**Projections and models** usually come as scenarios or ranges. Reporting only the most extreme scenario, or only the central one, misleads in different directions."
     ]},
    related:["numbers-in-context","base-rates","reading-results","survey-sampling"],
    sources:[{t:"US Bureau of Labor Statistics: The Employment Situation, Technical Note", url:"https://www.bls.gov/news.release/empsit.tn.htm"}], checked:"2026-11"}
  ],
  terms:[
   {id:"rate-per", term:"Rate (per 1,000 or per 100,000)", def:"A count divided by the size of the group, scaled to a convenient size: cases ÷ population × 100,000 gives cases per 100,000 people.", codex:"percentages-rates"},
   {id:"per-capita", term:"Per capita", def:"Per person (Latin, “by heads”): a total divided by the number of people, such as spending per capita.", codex:"percentages-rates"},
   {id:"relative-change", term:"Relative change", def:"The change compared with the starting value: (new − old) ÷ old, usually given as a percentage. From 4 to 5 is a 25% relative rise.", codex:"percentages-rates"},
   {id:"absolute-change", term:"Absolute change", def:"The plain difference, new − old, in the original units: people, money, or percentage points for a change between two percentages.", codex:"percentages-rates"},
   {id:"denominator", term:"Denominator", def:"The number you divide by: the bottom of a fraction. In “8 of 20 people”, 20 is the denominator. Every percentage and rate has one.", codex:"percentages-rates"},
   {id:"base-rate", term:"Base rate", def:"How common something is in a group before any test or new evidence, such as 1 in 100 people having a condition.", codex:"base-rates"},
   {id:"false-positive", term:"False positive", def:"A false alarm: the test says yes, but the true answer is no.", codex:"base-rates"},
   {id:"false-negative", term:"False negative", def:"A miss: the test says no, but the true answer is yes.", codex:"base-rates"},
   {id:"conditional-probability", term:"Conditional probability", def:"The chance of something within a particular group or situation (“given B”). The chance of A given B is usually different from the chance of B given A.", codex:"base-rates"},
   {id:"test-sensitivity", term:"Sensitivity (of a test)", def:"Of the people who really have the condition, the share the test correctly flags. A 90% sensitive test misses 10 in 100 of them.", codex:"base-rates"},
   {id:"test-specificity", term:"Specificity (of a test)", def:"Of the people who don’t have the condition, the share the test correctly clears. 1 − specificity is the false positive rate.", codex:"base-rates"},
   {id:"predictive-value", term:"Positive predictive value", def:"Of everyone who tests positive, the share who really have the condition. It depends strongly on the base rate.", codex:"base-rates"},
   {id:"prevalence", term:"Prevalence", def:"The share of a group who have a condition at a given time. Used as the base rate when thinking about tests.", codex:"base-rates"},
   {id:"natural-frequency", term:"Natural frequency", def:"A risk or probability given as a count out of a round number of people, such as “15 in every 1,000”, which is easier to reason with than a percentage.", codex:"base-rates"},
   {id:"risk-ratio", term:"Risk ratio", def:"One group’s risk divided by another’s. 15 in 1,000 against 20 in 1,000 is a risk ratio of 0.75; 1 means no difference. Also called relative risk.", codex:"absolute-relative-risk"},
   {id:"number-needed-to-treat", term:"Number needed to treat (NNT)", def:"How many people need a treatment, over a stated time, for one of them to benefit: 1 ÷ the absolute risk difference.", codex:"absolute-relative-risk"},
   {id:"weighted-mean", term:"Weighted mean", def:"An average in which each value counts according to its weight, such as group size: the right way to combine averages from groups of different sizes.", codex:"averages-misleading"},
   {id:"simpsons-paradox", term:"Simpson’s paradox", def:"When a comparison goes one way in every subgroup but the other way when the groups are combined, usually because the groups being compared have very different mixes of a factor that also affects the outcome.", codex:"averages-misleading"},
   {id:"order-of-magnitude", term:"Order of magnitude", def:"A factor of ten. 3,000 and 30,000 differ by one order of magnitude; a million and a billion by three.", codex:"numbers-in-context"},
   {id:"nominal-vs-real", term:"Nominal and real values", def:"A nominal amount is money as it was at the time; a real amount is adjusted for inflation so different years can be compared fairly.", codex:"numbers-in-context"},
   {id:"inflation", term:"Inflation", def:"A general rise in prices over time, so the same amount of money buys less. Usually measured as the yearly percentage change in a price index.", codex:"numbers-in-context"},
   {id:"price-index", term:"Price index", def:"A number tracking the cost of a fixed basket of goods and services over time, relative to a base year (often set to 100). A consumer price index (CPI) is the usual example.", codex:"numbers-in-context"},
   {id:"survivorship-bias", term:"Survivorship bias", def:"Drawing conclusions only from the cases that made it through some filter (survived, succeeded, stayed open), ignoring the ones that didn’t.", codex:"numbers-in-context"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u1-q01", lesson:"t3u1-l1", level:1, q:"A share rises from 30% to 33%. Which description is correct?", options:[
     {t:"A rise of 3 percentage points, which is a 10% rise", ok:true, why:"33 − 30 = 3 points, and 3 ÷ 30 = 0.10, so 10% relative to the start. Both descriptions are true."},
     {t:"A rise of 3%", why:"It rose 3 percentage points. As a percent change it rose 3 ÷ 30 = 10%. “3%” mixes the two up."},
     {t:"A rise of 10 percentage points", why:"The gap between 30% and 33% is 3 points. 10 is the percent change, not the points change."},
     {t:"A rise of 33%", why:"33% is the new level, not the change."}
   ]},
   {id:"t3u1-q02", lesson:"t3u1-l1", level:2, q:"Amara reads that a savings rate rose from 2% to 3%, “a 50% rise”. Is the headline right?", options:[
     {t:"Yes: it rose by 1 percentage point, which is 50% of the starting rate of 2%", ok:true, why:"(3 − 2) ÷ 2 = 0.5, a 50% relative rise. It would be clearer to say “up 1 point, from 2% to 3%”."},
     {t:"No: it rose by 1%", why:"It rose by 1 percentage point. As a percent change, it rose 50%."},
     {t:"No: it rose by 33%", why:"33% comes from dividing by the new value (1 ÷ 3). Percent change divides by the starting value: 1 ÷ 2 = 50%."},
     {t:"No: it rose by 150%", why:"3% is 150% *of* 2%, but the *rise* is 50%."}
   ]},
   {id:"t3u1-q03", lesson:"t3u1-l1", level:1, q:"In “12 of the club’s 48 members voted yes (25%)”, what is the denominator?", options:[
     {t:"48, the number of members", ok:true, why:"The denominator is what you divide by: 12 ÷ 48 = 0.25."},
     {t:"12, the number who voted yes", why:"12 is the part (the numerator). The whole it is divided by is 48."},
     {t:"25, the percentage", why:"25% is the result of the division, not the denominator."},
     {t:"100, because it’s a percentage", why:"Percentages are scaled to 100, but the real denominator of this claim is the 48 members."}
   ]},
   {id:"t3u1-q04", lesson:"t3u1-l1", level:2, q:"A ticket price rises 25%, then the new price is cut by 20%. Compared with the original price, it is now…", options:[
     {t:"The same as the original price", ok:true, why:"1.25 × 0.80 = 1.00. A 20% cut of the higher price takes off exactly the 25% that was added."},
     {t:"5% higher", why:"Subtracting 20 from 25 assumes changes add. They multiply: 1.25 × 0.80 = 1.00."},
     {t:"5% lower", why:"The changes multiply to exactly 1.00, so the price is back where it started."},
     {t:"45% lower", why:"Adding the two changes as if both were falls doesn’t match the situation. Multiply: 1.25 × 0.80 = 1.00."}
   ]},
   {id:"t3u1-q05", lesson:"t3u1-l1", level:3, q:"Town A (population 6,000) had 30 burglaries last year. City B (population 200,000) had 600. A resident of which place was more likely to be burgled?", options:[
     {t:"Town A: 500 per 100,000 residents, against City B’s 300", ok:true, why:"30 ÷ 6,000 × 100,000 = 500; 600 ÷ 200,000 × 100,000 = 300. The rate, not the count, tells you the chance for a resident (assuming one burglary per victim)."},
     {t:"City B, because it had 20 times as many burglaries", why:"City B is over 33 times bigger, so more burglaries are expected. Compare rates, not counts."},
     {t:"They are equally likely, because both are small percentages", why:"Small percentages can still differ: 0.5% against 0.3% of residents."},
     {t:"It can’t be compared, because the populations are different", why:"Different populations are exactly what rates fix. Divide each count by its population."}
   ]},
   {id:"t3u1-q06", lesson:"t3u1-l1", level:3, q:"A community group’s survey report says 60% of members want more events and 55% want lower fees. A member writes in: “That adds up to 115%, so the survey is wrong.” What is the most likely explanation?", options:[
     {t:"Members could choose more than one option, so the shares can add up to more than 100%", ok:true, why:"With choose-all-that-apply questions, each percentage is out of all members separately, and one person can be counted in both."},
     {t:"The survey must have counted some members twice by mistake", why:"That’s possible but unnecessary as an explanation. Choose-all-that-apply questions add to more than 100% when everything is correct."},
     {t:"The figures were rounded badly", why:"Rounding can shift a total by a point or two, not by 15 points."},
     {t:"Percentages in a report must always add up to 100%", why:"Only shares of a single whole, where each person is in exactly one category, must add to 100%."}
   ]},
   {id:"t3u1-q07", lesson:"t3u1-l1", level:2, q:"After a 25% discount, a pair of shoes costs 60. What was the original price?", options:[
     {t:"80", ok:true, why:"The sale price is 75% of the original, so original = 60 ÷ 0.75 = 80. Check: 25% of 80 is 20, and 80 − 20 = 60."},
     {t:"75", why:"60 × 1.25 adds 25% of the *sale* price, but the discount was 25% of the *original*. Divide by 0.75 instead."},
     {t:"85", why:"Adding 25 to 60 treats the percentage as an amount of money."},
     {t:"45", why:"That takes another 25% off. To undo a discount, divide by the multiplier (0.75)."}
   ]},
   {id:"t3u1-q08", lesson:"t3u1-l1", level:3, q:"Priya combines results from two sites. Site 1: 45 of 50 people improved (90%). Site 2: 30 of 150 improved (20%). What share of all participants improved?", options:[
     {t:"37.5%", ok:true, why:"(45 + 30) ÷ (50 + 150) = 75 ÷ 200 = 37.5%. Site 2 is three times bigger, so it pulls the overall figure towards 20%."},
     {t:"55%", why:"That’s the average of 90% and 20%, which treats both sites as the same size."},
     {t:"110%", why:"Percentages from different groups can’t be added. Combine the counts."},
     {t:"20%", why:"That’s Site 2 alone. Site 1’s 45 improvers also count."}
   ]},
   {id:"t3u1-q09", lesson:"t3u1-l1", level:1, q:"What does “per capita” mean?", options:[
     {t:"Per person", ok:true, why:"From Latin for “by heads”: a total divided by the number of people."},
     {t:"Per capital city", why:"It has nothing to do with capital cities; “capita” means heads."},
     {t:"Per 100 people", why:"That would be a percentage. Per capita means per single person."},
     {t:"In total", why:"Per capita is the opposite: a total divided among people."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t3u1-q10", lesson:"t3u1-l2", level:1, q:"What is an absolute risk difference?", options:[
     {t:"The plain gap between two risks, such as 20 in 1,000 minus 15 in 1,000 = 5 in 1,000", ok:true, why:"It tells you how many people per 1,000 (or per 100) are affected by the difference."},
     {t:"The risk in one group divided by the risk in another", why:"That’s the risk ratio, a relative measure."},
     {t:"The percentage by which the risk fell", why:"That’s the relative risk reduction, the gap divided by the starting risk."},
     {t:"A risk that is certain to happen", why:"“Absolute” here means a plain difference, not certainty."}
   ]},
   {id:"t3u1-q11", lesson:"t3u1-l2", level:2, q:"Mei reads that a treatment “halves the risk” of a condition. In people like her, 4 in 1,000 would get it over ten years without treatment. How many fewer people per 1,000 would get it with treatment?", options:[
     {t:"2 fewer per 1,000", ok:true, why:"Half of 4 is 2, so the risk goes from 4 to 2 in 1,000: an absolute difference of 2 per 1,000 (an NNT of 500 over ten years)."},
     {t:"500 fewer per 1,000", why:"500 is the number needed to treat, not the number of cases prevented. Only 4 in 1,000 would get the condition in the first place."},
     {t:"50 fewer per 1,000", why:"“Halves” is a relative change of 50%. Applied to 4 in 1,000, it means 2 fewer."},
     {t:"4 fewer per 1,000", why:"That would mean the treatment prevents every case. Halving 4 leaves 2."}
   ]},
   {id:"t3u1-q12", lesson:"t3u1-l2", level:2, q:"Over two years, 30 in 1,000 untreated people and 20 in 1,000 treated people had a fall. What is the number needed to treat for two years to prevent one fall?", options:[
     {t:"100", ok:true, why:"The absolute difference is 10 per 1,000, so 1,000 ÷ 10 = 100."},
     {t:"33", why:"10 ÷ 30 = a 33% relative reduction. NNT uses the absolute difference: 1,000 ÷ 10."},
     {t:"10", why:"10 is the absolute difference per 1,000. Its reciprocal, 1,000 ÷ 10, gives the NNT."},
     {t:"50", why:"1,000 ÷ 20 uses the treated group’s risk instead of the difference between the groups."}
   ]},
   {id:"t3u1-q13", lesson:"t3u1-l2", level:1, q:"“Twice as likely” means the same as…", options:[
     {t:"A risk ratio of 2, which is a 100% increase", ok:true, why:"Twice the risk is the risk plus 100% of itself: from 5 in 1,000 to 10 in 1,000, for example."},
     {t:"A 200% increase", why:"A 200% increase is three times the risk. Twice as likely is 100% more."},
     {t:"A 2 percentage point increase", why:"Doubling 5 in 1,000 (0.5%) to 10 in 1,000 (1%) is only 0.5 points. A ratio doesn’t tell you the points."},
     {t:"A 50% chance", why:"“Twice as likely” multiplies an existing risk; it doesn’t set the risk to 50%."}
   ]},
   {id:"t3u1-q14", lesson:"t3u1-l2", level:3, q:"Drug A cuts the risk of a rare condition by 50% (from 2 to 1 in 1,000). Drug B cuts the risk of a common condition by 20% (from 100 to 80 in 1,000). Which prevents more cases per 1,000 people treated?", options:[
     {t:"Drug B: 20 fewer cases per 1,000, against Drug A’s 1", ok:true, why:"The absolute differences are 100 − 80 = 20 and 2 − 1 = 1. Drug B has the smaller relative effect but the bigger absolute benefit, because its condition is far more common."},
     {t:"Drug A, because 50% is more than 20%", why:"50% of a tiny risk is still tiny: one case per 1,000. Compare absolute differences."},
     {t:"They are the same, because both cut the risk", why:"They cut it by very different amounts in absolute terms: 1 against 20 per 1,000."},
     {t:"It can’t be worked out without the risk ratios", why:"You have everything you need: subtract the treated risk from the untreated risk for each drug."}
   ]},
   {id:"t3u1-q15", lesson:"t3u1-l2", level:3, q:"A leaflet for a medicine says: “Reduces hip fractures by 40%. Serious side effects in 1 in 200 users.” Before Dmitri can weigh the benefit against the harm, what does he most need?", options:[
     {t:"His starting risk of a hip fracture over the same period, to turn 40% into a number per 200 (or per 1,000) people", ok:true, why:"The benefit is relative and the harm absolute. With a baseline of, say, 10 in 1,000, a 40% cut prevents 4 per 1,000, while side effects affect 5 per 1,000 (1 in 200). The baseline decides which is bigger."},
     {t:"Nothing more: 40% is clearly bigger than 1 in 200", why:"That compares a relative change with an absolute risk. Put both in the same form first."},
     {t:"The side-effect rate as a relative figure too", why:"Converting the harm to relative terms would keep them comparable but still hide how many people are affected. The missing piece is the baseline fracture risk."},
     {t:"The price of the medicine", why:"Cost matters for decisions, but it doesn’t fix the mismatched framing of the benefit and harm."}
   ]},
   {id:"t3u1-q16", lesson:"t3u1-l2", level:2, q:"A headline says cases of an infection “rose 300%” in a town, from 5 cases. How many cases are there now?", options:[
     {t:"20", ok:true, why:"A 300% rise adds three times the starting value: 5 + 15 = 20, which is four times the original."},
     {t:"15", why:"15 is the increase (300% of 5). Add it to the starting 5."},
     {t:"305", why:"300% is a percentage of the starting value, not 300 extra cases."},
     {t:"8", why:"That adds 3, as if 300% meant 3 cases. 300% of 5 is 15."}
   ]},
   {id:"t3u1-q17", lesson:"t3u1-l2", level:1, q:"What is the main drawback of reporting **only** a relative change in risk?", options:[
     {t:"It hides how many people are actually affected, which depends on the starting risk", ok:true, why:"A 50% cut could mean 500 fewer cases per 1,000 or 1 fewer per 10,000. Without the baseline, you can’t tell."},
     {t:"Relative changes are always calculated wrongly", why:"They can be calculated perfectly. The problem is what they leave out."},
     {t:"Relative changes can’t be compared between studies", why:"They are often easier to compare between studies. The drawback is for judging practical impact."},
     {t:"Relative changes are only used for money", why:"They are used for risks, prices, populations and more."}
   ]},
   {id:"t3u1-q18", lesson:"t3u1-l2", level:3, q:"A study of a common outcome reports an odds ratio of 3. A journalist writes that the exposure makes the outcome “three times as likely”. Why might this overstate it?", options:[
     {t:"For common outcomes an odds ratio is further from 1 than the risk ratio; risks of 50% and 25%, for example, give an odds ratio of 3 but a risk ratio of 2", ok:true, why:"Odds are with ÷ without: 50% gives odds of 1, 25% gives odds of 1/3, and 1 ÷ (1/3) = 3. The risk is only twice as high. The two ratios are close only for rare outcomes."},
     {t:"Odds ratios are always smaller than risk ratios", why:"For a harmful exposure, the odds ratio is further from 1, so it is larger than the risk ratio, not smaller."},
     {t:"An odds ratio of 3 means 3 extra cases per 100 people", why:"An odds ratio is relative; it doesn’t give extra cases directly."},
     {t:"There’s no difference; “odds” and “risk” are the same thing", why:"Odds compare people with the outcome to people without it; risk compares them to everyone. They differ, especially when the outcome is common."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t3u1-q19", lesson:"t3u1-l3", level:1, q:"Why is the median often preferred to the mean for describing typical incomes?", options:[
     {t:"A few very high incomes pull the mean up, while the median stays at the middle person", ok:true, why:"Incomes are right-skewed. The median is little affected by extreme values, so it describes the typical case better."},
     {t:"The median is always larger than the mean", why:"For incomes the median is usually smaller than the mean, because the high values pull the mean up."},
     {t:"The mean can’t be calculated for money", why:"It can. It just gives a misleading picture of a typical person when the data are skewed."},
     {t:"The median includes everyone’s income and the mean doesn’t", why:"Both use everyone’s data. The mean adds every value; the median finds the middle one."}
   ]},
   {id:"t3u1-q20", lesson:"t3u1-l3", level:2, q:"Seven patients waited 2, 3, 3, 4, 5, 6 and 40 days for an appointment. Which figure best describes a typical wait?", options:[
     {t:"The median, 4 days", ok:true, why:"Sorted, the middle (4th) value is 4. The mean, 63 ÷ 7 = 9 days, is pulled up by one 40-day wait and is longer than six of the seven waits."},
     {t:"The mean, 9 days", why:"The mean is correct arithmetic but describes almost nobody: six of seven people waited 6 days or less."},
     {t:"The mode, 40 days", why:"The mode is the most common value, which here is 3 (it appears twice), not 40."},
     {t:"The total, 63 days", why:"The total doesn’t describe a typical patient’s wait."}
   ]},
   {id:"t3u1-q21", lesson:"t3u1-l3", level:1, q:"In data skewed to the right (a long tail of high values), how do the mean and median usually compare?", options:[
     {t:"The mean is higher than the median", ok:true, why:"The high values in the tail pull the mean towards them; the median stays near the middle of the bulk."},
     {t:"The median is higher than the mean", why:"That is usual for left-skewed data, with a long tail of low values."},
     {t:"They are always equal", why:"They are close only for roughly symmetric data."},
     {t:"It is impossible to say anything in general", why:"Right skew has a typical, though not universal, signature: mean above median."}
   ]},
   {id:"t3u1-q22", lesson:"t3u1-l3", level:2, q:"A library has two branches. Branch 1: 300 visitors with a mean visit of 20 minutes. Branch 2: 100 visitors with a mean of 40 minutes. What is the mean visit length across all 400 visitors?", options:[
     {t:"25 minutes", ok:true, why:"(300 × 20 + 100 × 40) ÷ 400 = (6,000 + 4,000) ÷ 400 = 25."},
     {t:"30 minutes", why:"That’s the unweighted average of 20 and 40, which treats both branches as equal in size."},
     {t:"60 minutes", why:"Means can’t be added; weight each by its number of visitors."},
     {t:"20 minutes", why:"That’s Branch 1 alone. Branch 2’s longer visits pull the overall mean up to 25."}
   ]},
   {id:"t3u1-q23", lesson:"t3u1-l3", level:3, q:"In the 1986 kidney stone study, open surgery had a higher success rate than keyhole surgery for small stones and for large stones, but a lower rate overall. Why?", options:[
     {t:"Open surgery was used for many more of the large, harder-to-treat stones, which pulled its overall rate down", ok:true, why:"263 of its 350 patients had large stones, against 80 of 350 keyhole patients. Stone size affected both which treatment was chosen and the chance of success: a confounder."},
     {t:"The study made an arithmetic mistake", why:"The figures are consistent: 81 + 192 = 273 of 350 and 234 + 55 = 289 of 350. This is Simpson’s paradox, not an error."},
     {t:"Keyhole surgery was better for every type of stone", why:"Within each stone size, open surgery had the higher success rate."},
     {t:"The two groups had different numbers of patients", why:"Both groups had 350 patients. The issue is how each group’s patients were split between small and large stones."}
   ]},
   {id:"t3u1-q24", lesson:"t3u1-l3", level:3, q:"A school’s average exam score rose this year. Ana learns that the school encouraged pupils expected to do badly not to sit the exam. What is the best conclusion?", options:[
     {t:"The rise may be a composition effect: the group sitting the exam changed, so the average can rise without anyone doing better", ok:true, why:"Removing lower scorers raises the mean on its own. To judge teaching, you’d compare pupils like-for-like, or include everyone who would normally have sat it."},
     {t:"The teaching must have improved, because the average rose", why:"The average rose, but the group being averaged changed. That alone can explain the rise."},
     {t:"The average must have been calculated wrongly", why:"The arithmetic may be fine. The problem is which pupils were included."},
     {t:"Averages are meaningless and should never be used for schools", why:"Averages are useful when the groups compared are similar. Here, they aren’t."}
   ]},
   {id:"t3u1-q25", lesson:"t3u1-l3", level:2, q:"A festival organiser wants to estimate the total amount of food needed for 5,000 visitors. Which summary of past visitors’ food purchases should she use?", options:[
     {t:"The mean amount per visitor, because mean × number of visitors = total", ok:true, why:"For totals, the mean is the right average: it includes the big eaters, who really do need food."},
     {t:"The median, because it isn’t affected by extremes", why:"The median ignores how much the big eaters buy, so median × 5,000 would underestimate the total if purchases are right-skewed."},
     {t:"The mode, because it’s the most common amount", why:"The most common purchase doesn’t tell you the total."},
     {t:"The largest purchase, to be safe", why:"Largest × 5,000 would hugely overestimate. The mean gives the expected total."}
   ]},
   {id:"t3u1-q26", lesson:"t3u1-l3", level:1, q:"Two towns both have an average yearly temperature of 15 °C. What does this tell you about their weather?", options:[
     {t:"Only the centre: one town could stay mild all year while the other has cold winters and hot summers", ok:true, why:"An average says nothing about spread. You need the range or another measure of spread to compare."},
     {t:"Their weather is the same", why:"Same average, possibly very different spread: 11 to 20 °C in one town and 1 to 30 °C in another."},
     {t:"Both towns have mild weather all year", why:"A 15 °C average can come from extreme seasons that average out."},
     {t:"Their coldest months are the same", why:"The average doesn’t tell you the coldest or warmest month."}
   ]},
   {id:"t3u1-q27", lesson:"t3u1-l3", level:3, q:"Hana is house-hunting with a budget of 250,000. A website says the average home price in a neighbourhood is 400,000, so she rules it out. What should she check first?", options:[
     {t:"The median and the range of prices for homes like the one she wants, since a few expensive homes can make the mean high", ok:true, why:"House prices are right-skewed. Many homes may cost far less than the mean. The median and the prices of similar homes answer her real question."},
     {t:"Nothing: if the average is 400,000, nothing costs 250,000", why:"An average doesn’t tell you the lowest prices. Many homes could be well below it."},
     {t:"Whether the average includes homes for rent", why:"Possibly useful, but the bigger issue is that the mean may be pulled up by a few expensive homes."},
     {t:"The mode, because it is always the most reliable average", why:"With prices that are all different there may be no useful mode. The median and similar homes matter more."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t3u1-q28", lesson:"t3u1-l4", level:1, q:"What is a false positive?", options:[
     {t:"A test says “yes”, but the true answer is “no”", ok:true, why:"A false alarm: for example, a healthy person whose test says they have a condition."},
     {t:"A test says “no”, but the true answer is “yes”", why:"That’s a false negative, a miss."},
     {t:"A test result that is good news", why:"“Positive” here means the test detected something, not that the news is good."},
     {t:"A test that has been checked twice", why:"Repeat testing is a way to reduce false positives, not their definition."}
   ]},
   {id:"t3u1-q29", lesson:"t3u1-l4", level:2, q:"10,000 people are tested. 2% have a condition. The test catches 80% of cases and wrongly flags 10% of people without it. How many **false positives** are there?", options:[
     {t:"980", ok:true, why:"9,800 people don’t have the condition, and 10% of 9,800 = 980. (There are also 160 true positives, so only 160 of 1,140 positives, about 14%, are real.)"},
     {t:"1,000", why:"That’s 10% of all 10,000. False positives can only come from the 9,800 who don’t have the condition."},
     {t:"160", why:"160 is the number of true positives (80% of 200)."},
     {t:"40", why:"40 is the number of false negatives: the 20% of the 200 cases that the test misses."}
   ]},
   {id:"t3u1-q30", lesson:"t3u1-l4", level:1, q:"A test’s sensitivity is 90%. What does that mean?", options:[
     {t:"Of people who have the condition, 90% test positive", ok:true, why:"Sensitivity is about people who really have it: the share the test catches."},
     {t:"Of people who test positive, 90% have the condition", why:"That’s the positive predictive value, which depends on the base rate as well as the test."},
     {t:"Of people without the condition, 90% test negative", why:"That’s specificity."},
     {t:"The test is right 90% of the time for everyone", why:"Sensitivity describes only people with the condition; accuracy for others is a separate figure."}
   ]},
   {id:"t3u1-q31", lesson:"t3u1-l4", level:2, q:"The same test is used in two groups: one where a condition is rare and one where it is common. In which group is a positive result more likely to be correct?", options:[
     {t:"The group where the condition is common", ok:true, why:"With more real cases, true positives make up a larger share of all positives. With a 20% base rate the lesson’s test is right about 82% of the time; at 1%, about 15%."},
     {t:"The group where it is rare", why:"When it’s rare, false alarms from the large healthy group outnumber true positives."},
     {t:"It’s the same in both, because the test is the same", why:"Sensitivity and specificity are the same, but the meaning of a positive depends on the base rate."},
     {t:"It can’t be known without testing everyone twice", why:"A natural-frequency calculation with the base rate gives the answer."}
   ]},
   {id:"t3u1-q32", lesson:"t3u1-l4", level:3, q:"Oluwaseun, who has no symptoms, gets a positive result from a screening test described as “95% accurate” for a condition that is rare in people like him. What is the most sensible interpretation?", options:[
     {t:"The result needs a follow-up test: with a rare condition, many positives are false alarms, whatever the accuracy figure", ok:true, why:"When the base rate is low, false positives from the large healthy group can outnumber true positives. That’s why positive screening results lead to diagnostic tests."},
     {t:"There is a 95% chance he has the condition", why:"That confuses the test’s accuracy with the chance a positive is right. The base rate matters."},
     {t:"The result is meaningless and can be ignored", why:"A positive does raise the chance he has it. It just doesn’t settle it."},
     {t:"There is a 5% chance he has the condition", why:"5% is the error rate, not the chance he has it. You need the base rate to work that out."}
   ]},
   {id:"t3u1-q33", lesson:"t3u1-l4", level:3, q:"A partial fingerprint would match a random innocent person 1 time in 10,000. About 500,000 people could have been at the scene. If the match were the only evidence, roughly how many innocent people would also be expected to match?", options:[
     {t:"About 50", ok:true, why:"500,000 ÷ 10,000 = 50. So the suspect would be one of about 51 matching people, which is why the match alone doesn’t prove guilt."},
     {t:"About 1", why:"That assumes the 1 in 10,000 applies to the whole case. It applies to each innocent person, and there are 500,000 of them."},
     {t:"None, because the chance is so small", why:"A small chance repeated across many people adds up."},
     {t:"About 10,000", why:"10,000 is the size of the odds, not the number of matches. Divide the population by 10,000."}
   ]},
   {id:"t3u1-q34", lesson:"t3u1-l4", level:3, q:"A university runs 2,000 honestly written essays through a detector that wrongly flags 0.5% of honest work. How many false accusations should staff expect, and what follows?", options:[
     {t:"About 10, so a flag should prompt a conversation and other evidence, not a penalty on its own", ok:true, why:"0.5% of 2,000 = 10. Even a detector that is usually right produces false flags at scale."},
     {t:"None, because 0.5% is negligible", why:"Small rates times large numbers give real people: about 10 here."},
     {t:"About 100", why:"0.5% of 2,000 is 10, not 100 (that would be 5%)."},
     {t:"It can’t be estimated without knowing how many essays were written with AI", why:"For **honest** essays, the false positive rate alone gives the number of false flags. You’d need the AI share only to work out what share of all flags are false."}
   ]},
   {id:"t3u1-q35", lesson:"t3u1-l4", level:2, q:"A report says most car crashes happen within 10 km of home. Someone concludes that long trips are safer. What’s wrong with this?", options:[
     {t:"Most driving happens near home, so most crashes would happen there even if every kilometre were equally risky", ok:true, why:"The base rate of driving near home is high. To compare safety, you need crashes per kilometre (or per hour) driven in each setting."},
     {t:"Nothing: if most crashes are near home, home is more dangerous", why:"That ignores how much driving happens near home. Raw counts follow exposure."},
     {t:"The report must be wrong, because crashes are random", why:"The report may be accurate. The problem is the conclusion drawn from it."},
     {t:"Long trips involve faster roads, so the report is irrelevant", why:"Road type may matter, but the main flaw is ignoring exposure: how much driving happens where."}
   ]},
   {id:"t3u1-q36", lesson:"t3u1-l4", level:1, q:"Which of these is a natural frequency?", options:[
     {t:"“15 in every 1,000 people”", ok:true, why:"A count out of a round number of people: easy to picture and to combine with other counts."},
     {t:"“A probability of 0.015”", why:"Same value, but as a probability. Natural frequencies are counts of people."},
     {t:"“1.5%”", why:"A percentage. Natural frequencies are counts out of a round number."},
     {t:"“A risk ratio of 1.5”", why:"A ratio compares two risks; it isn’t a count of people."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t3u1-q37", lesson:"t3u1-l5", level:1, q:"In English today, a billion is…", options:[
     {t:"A thousand million (10⁹)", ok:true, why:"1,000,000,000. A trillion is a thousand billion (10¹²)."},
     {t:"A million million (10¹²)", why:"That’s an English trillion, and the meaning of Spanish billón or German Billion."},
     {t:"A hundred million (10⁸)", why:"Too small by a factor of ten."},
     {t:"Ten million (10⁷)", why:"Too small by a factor of a hundred."}
   ]},
   {id:"t3u1-q38", lesson:"t3u1-l5", level:2, q:"A country of 40 million people announces a 2 billion programme for one year. How much is that per person?", options:[
     {t:"50", ok:true, why:"2,000,000,000 ÷ 40,000,000 = 50 per person for the year."},
     {t:"5", why:"Check the zeros: 2 billion has nine zeros, 40 million has seven. (2 × 10⁹) ÷ (4 × 10⁷) = 50."},
     {t:"500", why:"Too large by ten times. 2,000,000,000 ÷ 40,000,000 = 50."},
     {t:"50,000", why:"That would need 2 trillion. 2 billion ÷ 40 million is 50."}
   ]},
   {id:"t3u1-q39", lesson:"t3u1-l5", level:2, q:"A price index was 120 in one year and 150 now. What is 1,000 from that year worth in today’s money?", options:[
     {t:"1,250", ok:true, why:"1,000 × 150 ÷ 120 = 1,250. Prices rose by a quarter, so you need 1,250 today to buy what 1,000 bought then."},
     {t:"800", why:"That divides by the new index and multiplies by the old one (1,000 × 120 ÷ 150), which converts in the wrong direction."},
     {t:"1,030", why:"Adding the 30-point difference treats index points as money. Use the ratio 150 ÷ 120."},
     {t:"1,500", why:"That multiplies by 1.5 (150 ÷ 100), assuming the old index was 100. It was 120."}
   ]},
   {id:"t3u1-q40", lesson:"t3u1-l5", level:1, q:"What is the difference between a nominal and a real amount of money?", options:[
     {t:"Nominal is the amount as it was at the time; real is adjusted for inflation so different years can be compared", ok:true, why:"Real amounts are expressed in the money of one chosen year, using a price index."},
     {t:"Nominal is cash; real is money in a bank", why:"Both terms can apply to any money. The difference is inflation adjustment."},
     {t:"Nominal is an estimate; real is an exact count", why:"Both can be exact or estimated. Real means inflation-adjusted."},
     {t:"Real is the amount after tax", why:"After-tax amounts are “net”. Real means adjusted for price changes."}
   ]},
   {id:"t3u1-q41", lesson:"t3u1-l5", level:3, q:"Kenji sees a headline: “Support for the plan jumps from 38% to 40%.” Each poll had a margin of error of about ±3 points. What is the fairest summary?", options:[
     {t:"Support is roughly unchanged: a 2-point move is well within the polls’ uncertainty", ok:true, why:"Each poll could be about 3 points off by chance alone, and the uncertainty of a change between two polls is even larger. A 2-point change can easily be noise."},
     {t:"Support has definitely risen by 2 points", why:"The change is smaller than either poll’s margin of error, so chance can explain it."},
     {t:"Support has risen by 5%", why:"2 ÷ 38 ≈ 5% relative, but the bigger point is that the change may not be real at all."},
     {t:"The polls are useless and should be ignored", why:"They give useful ranges. They just can’t detect a change this small."}
   ]},
   {id:"t3u1-q42", lesson:"t3u1-l5", level:2, q:"The US monthly jobs estimate has a 90% confidence interval of about ±122,000 for the monthly change. One month it reports a rise of 300,000. What can you say?", options:[
     {t:"Jobs very likely rose: the interval, about 178,000 to 422,000, is entirely above zero", ok:true, why:"300,000 − 122,000 = 178,000 and 300,000 + 122,000 = 422,000. The exact size is uncertain and may be revised, but a rise is clear."},
     {t:"Exactly 300,000 jobs were added", why:"300,000 is the central estimate; the true change could be anywhere in a wide range, and it will be revised."},
     {t:"Nothing, because all survey estimates are unreliable", why:"A change this large is well outside the uncertainty. The survey can’t pin the exact number, but it can show the direction."},
     {t:"Jobs could have fallen", why:"The whole interval is above zero, so a fall is very unlikely on this evidence."}
   ]},
   {id:"t3u1-q43", lesson:"t3u1-l5", level:3, q:"Tomás reads: “90% of the restaurants on this street have been open more than ten years, so restaurants here rarely fail.” What’s the flaw?", options:[
     {t:"Survivorship bias: restaurants that failed have closed and aren’t on the street to be counted", ok:true, why:"Only survivors are visible. To know the failure rate, you’d count all restaurants that opened there, including those that closed."},
     {t:"90% is too high to be believable", why:"The figure may be accurate. The problem is what it’s used to conclude."},
     {t:"Ten years is too short a period", why:"Any period has the same problem: failed restaurants are missing from the count."},
     {t:"There is no flaw; long-lasting restaurants show the street is a safe bet", why:"The street could see many openings fail within a year; those wouldn’t be in today’s count."}
   ]},
   {id:"t3u1-q44", lesson:"t3u1-l5", level:3, q:"Sione earned 25,000 when a price index was 80. Now he earns 35,000 and the index is 120. How has his pay changed in real terms?", options:[
     {t:"It fell: 25,000 then is worth 37,500 in today’s money, so 35,000 buys about 6.7% less", ok:true, why:"25,000 × 120 ÷ 80 = 37,500. (35,000 − 37,500) ÷ 37,500 ≈ −6.7%. A 40% nominal rise didn’t keep up with 50% inflation."},
     {t:"It rose by 40%", why:"That’s the nominal rise (10,000 ÷ 25,000). Prices rose 50% (120 ÷ 80), so in real terms his pay fell."},
     {t:"It rose by 10,000", why:"That’s the nominal difference. Adjusting for inflation shows a real fall."},
     {t:"It stayed the same in real terms", why:"His pay would need to be 37,500 to keep the same buying power."}
   ]},
   {id:"t3u1-q45", lesson:"t3u1-l5", level:2, q:"A German report says a project costs “3 Milliarden Euro”. How should it be translated into English?", options:[
     {t:"3 billion euros", ok:true, why:"German Milliarde means 10⁹, an English billion."},
     {t:"3 million euros", why:"Milliarde is a thousand million, not a million (Million in German)."},
     {t:"3 trillion euros", why:"That would be German Billionen (10¹²)."},
     {t:"300 million euros", why:"No reading of Milliarde gives this; it’s 10⁹."}
   ]}
  ]
});
