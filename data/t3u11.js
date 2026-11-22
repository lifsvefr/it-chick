/* Track 3 · Unit 6 · Chance and distributions */
ICA.addUnit({
  id:"t3u11", track:"t3", n:6, title:"Chance and distributions", icon:"🎯",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"Put numbers on uncertainty: what a probability means, how to combine chances with two-way tables, what to expect on average from a bet or a policy, and how the binomial and normal distributions turn chance into areas you can calculate. The groundwork for confidence intervals and tests in Unit 7.",
  goals:[
    "Explain probability as a long-run frequency, simulate chance in a spreadsheet or R, and spot the gambler’s fallacy",
    "Use the complement, addition and multiplication rules with two-way tables and trees, and check whether two events are independent",
    "Describe a random variable by its distribution, and calculate and interpret its expected value and standard deviation",
    "Recognise a binomial situation, simulate it, and calculate its probabilities with BINOM.DIST, dbinom and pbinom",
    "Find normal areas and percentiles with NORM.DIST, NORM.INV, pnorm and qnorm, and explain why sample means and counts tend to look normal"
  ],
  read:[
    {book:"ostat", where:"Chapter 3 “Probability Topics”, Chapter 4 “Discrete Random Variables” (Sections 4.1–4.3), Chapter 5 “Continuous Random Variables” (Section 5.1) and Chapter 6 “The Normal Distribution”", note:"Each lesson below points to the exact sections."},
    {book:"openintro", where:"Chapter 3 “Probability” (Sections 3.1, 3.2, 3.4 and 3.5) and Chapter 4 “Distributions of random variables” (Sections 4.1 and 4.3)", note:"A second telling with more formulas and real data sets."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u11-l1", title:"What a probability means", minutes:50,
   hook:{q:"A fair coin is flipped. Which is more likely: getting **70% or more heads in 10 flips**, or getting **70% or more heads in 1,000 flips**?", options:["In 10 flips","In 1,000 flips","Equally likely: it’s the same coin","Neither can happen with a fair coin"], answer:0, reveal:"**In 10 flips, by far.** Seven or more heads in 10 flips happens about 17% of the time (172 runs in 1,000). Seven hundred or more in 1,000 flips is so unlikely (less than 1 in 10³⁷) that it would never be seen. Small samples wobble a lot; large ones settle close to the true chance. This settling is the **law of large numbers**, and this lesson shows what it does, and doesn’t, promise."},
   goals:[
     "Write a probability as a fraction, decimal or percentage and place it on the 0-to-1 scale",
     "Find probabilities for equally likely outcomes by listing the sample space carefully",
     "Explain probability as a long-run relative frequency, and name three places real probabilities come from",
     "Simulate chance in a spreadsheet or R, and say what the law of large numbers promises",
     "Recognise the gambler’s fallacy and other common misreadings of chance"
   ],
   learn:[
    {h:"Putting a number on chance", body:[
      {lead:"Chance runs through all data: who happened to be in the sample, how a measurement wobbled, whether a parcel arrived late. Probability is the language for it."},
      "A [[probability]] is a number from 0 to 1 that says how likely something is. 0 means it can’t happen, 1 means it’s certain, and 0.5 is an even chance. The same probability can be written as a fraction (1/4), a decimal (0.25), a percentage (25%) or in words (“1 in 4”).",
      {fig:'<svg viewBox="0 0 340 284"><text x="170" y="18" text-anchor="middle">The probability scale</text><path class="d-ink" d="M70 236 L70 40" stroke-width="2"/><circle class="d-lup" cx="70" cy="40" r="5" stroke-width="2"/><text x="56" y="44" text-anchor="end">1</text><text x="88" y="39">A die shows a number</text><text class="s" x="88" y="54">from 1 to 6: certain</text><circle class="d-lup" cx="70" cy="72.7" r="5" stroke-width="2"/><text x="56" y="76.7" text-anchor="end">0.83</text><text x="88" y="71.7">A die does not show 6</text><text class="s" x="88" y="86.7">5 chances in 6</text><circle class="d-lup" cx="70" cy="138" r="5" stroke-width="2"/><text x="56" y="142" text-anchor="end">0.5</text><text x="88" y="137">A fair coin lands heads</text><text class="s" x="88" y="152">1 chance in 2</text><circle class="d-lup" cx="70" cy="203.3" r="5" stroke-width="2"/><text x="56" y="207.3" text-anchor="end">0.17</text><text x="88" y="202.3">A die shows 6</text><text class="s" x="88" y="217.3">1 chance in 6</text><circle class="d-lup" cx="70" cy="236" r="5" stroke-width="2"/><text x="56" y="240" text-anchor="end">0</text><text x="88" y="235">A die shows 7</text><text class="s" x="88" y="250">impossible</text><text class="s" x="170" y="276" text-anchor="middle">Probabilities run from 0 to 1 (0% to 100%)</text></svg>', alt:"A vertical scale from 0 at the bottom to 1 at the top. At 1: a die shows a number from 1 to 6, certain. At 0.83: a die does not show 6, 5 chances in 6. At 0.5: a fair coin lands heads, 1 chance in 2. At 0.17: a die shows 6, 1 chance in 6. At 0: a die shows 7, impossible.", cap:"Every probability sits somewhere between impossible (0) and certain (1)."},
      "A few words make the rest of the unit easier. A chance process, such as rolling a die, has **outcomes** (a 4). The list of all possible outcomes is the [[sample-space|sample space]]: 1, 2, 3, 4, 5, 6. An [[chance-event|event]] is any set of outcomes you care about, such as “an even number” (2, 4 or 6).",
      "When every outcome is **equally likely**, a probability is a simple count:",
      {ex:"P(event) = outcomes in the event\n           ÷ all possible outcomes\n\nA fair die shows an even number:\n  3 ÷ 6 = 0.5\nA fair die shows 5 or more:\n  2 ÷ 6 = 0.33\nYou hold 5 of 500 tickets; one\nis drawn at random:\n  5 ÷ 500 = 0.01", label:"Worked example", mono:true},
      "“P(…)” is short for “the probability of …”. You will see it in every textbook.",
      {warn:"**Odds are not probabilities.** “Odds of 3 to 1 against” means 3 losing chances for every 1 winning chance: the probability is 1 in 4 (0.25), not 1 in 3. Betting odds are also set so that the bookmaker keeps a margin, so they don’t convert exactly into fair probabilities."}
    ]},
    {h:"Listing outcomes carefully", body:[
      "The counting rule only works if the outcomes you count really are equally likely. That sounds obvious, and it is the most common trap in probability.",
      "Flip two fair coins. What is the chance of one head and one tail? A tempting answer lists three results (two heads, two tails, one of each) and says 1 in 3. But those three aren’t equally likely. List the outcomes coin by coin instead: **HH, HT, TH, TT**. These four are equally likely, and two of them (HT and TH) give one of each. So the probability is 2 ÷ 4 = **1/2**.",
      "The same care matters with two dice. There are 6 × 6 = 36 equally likely pairs, but the totals 2 to 12 are not equally likely:",
      {ex:"Total: 2 3 4 5 6 7 8 9 10 11 12\nWays:  1 2 3 4 5 6 5 4  3  2  1\n(36 ways in all)\n\nP(total 7)  = 6 ÷ 36 = 1/6 ≈ 0.167\nP(total 12) = 1 ÷ 36 ≈ 0.028", label:"Two dice", mono:true},
      "A total of 7 can happen six ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1); a total of 12 only one way (6+6). That table is already a [[probability-distribution|probability distribution]]: a list of possible values with their probabilities, adding to 1. Lesson 3 builds on it.",
      {key:"Before you count, make sure each outcome you count is equally likely. List outcomes one coin, die or person at a time."}
    ]},
    {h:"Probability as long-run frequency", body:[
      "Most real probabilities don’t come from equally likely outcomes. Nobody can list equally likely outcomes for “this parcel arrives late”. Instead you look at what happened many times before.",
      "If 6% of a delivery firm’s parcels arrived late last year, then 0.06 is a sensible estimate of the chance that a similar parcel arrives late. That 6% is a [[relative-frequency|relative frequency]]: a count divided by the number of cases. OpenStax puts the idea in one sentence: “The probability of any outcome is the long-term relative frequency of that outcome.”",
      {table:[["Where it comes from","How you get it","Example"],["Equally likely outcomes","Count outcomes","A fair die; a name drawn at random from a list"],["Long-run frequency in data","Count past cases","The share of flights that left on time last year"],["Judgement or a model","Weigh the evidence","A forecaster’s “70% chance of rain”"]]},
      "Judgement-based probabilities can still be checked against frequencies. A forecaster is **well calibrated** if, on all the days they say 70%, it rains on about 70% of them. So a single dry day after a 70% forecast doesn’t prove the forecast wrong: a 70% chance means it stays dry about 3 days in 10.",
      {tip:"When someone gives you a probability, ask where it came from: counting, past data, or judgement. Each can be good or bad, but they deserve different questions."}
    ]},
    {h:"Let the computer flip the coins", body:[
      "A [[chance-simulation|simulation]] uses random numbers to imitate a chance process many times and counts what happens. It lets you answer probability questions you can’t yet solve on paper, and it makes the long run visible.",
      "In a spreadsheet, `=RANDBETWEEN(0,1)` gives 0 or 1 with equal chance (call 1 “heads”). `=RAND()` gives a decimal from 0 up to (but not including) 1, so `=IF(RAND()<0.3,1,0)` gives 1 with probability 0.3: handy for chances that aren’t 50–50. Both work in Excel, Google Sheets, LibreOffice Calc and Numbers, and both recalculate (give new values) every time the sheet changes.",
      "In [[r-language|R]], the language Unit 8 of this track teaches ({{r-intro}}), the app’s **Data Lab** runs code like this in your browser. You don’t need to follow every symbol yet:",
      {code:'set.seed(2)\nflips <- sample(c("H", "T"), 1000, replace = TRUE)\nmean(flips[1:10] == "H")   # 0.5\nmean(flips[1:100] == "H")  # 0.49\nmean(flips == "H")         # 0.496', lang:"r", label:"R"},
      "`sample(…, 1000, replace = TRUE)` makes 1,000 flips. `flips == \"H\"` marks each flip TRUE or FALSE, and the `mean()` of TRUE/FALSE values is the share that are TRUE. `set.seed(2)` fixes the starting point of R’s random numbers: computers make **pseudo-random** numbers from a starting value called a [[random-seed|seed]], so the same seed gives the same “random” flips every time. That makes a simulation repeatable, which matters when someone wants to check your work.",
      {fig:'<svg viewBox="0 0 340 252"><text x="170" y="18" text-anchor="middle">Share of heads so far, in one run</text><text x="170" y="34" text-anchor="middle">of 1,000 simulated flips</text><path class="d-ink" d="M50 196 L322 196" stroke-width="1.5"/><path class="d-ink" d="M50 196 L50 40" stroke-width="1.5"/><text class="s" x="44" y="200" text-anchor="end">0%</text><text class="s" x="44" y="122" text-anchor="end">50%</text><text class="s" x="44" y="44" text-anchor="end">100%</text><path class="d-soft" d="M50 118 L322 118" stroke-width="1.5" stroke-dasharray="5 4"/><path class="d-ink" d="M50 196 L50 201" stroke-width="1"/><text class="s" x="50" y="215" text-anchor="middle">1</text><path class="d-ink" d="M140.7 196 L140.7 201" stroke-width="1"/><text class="s" x="140.7" y="215" text-anchor="middle">10</text><path class="d-ink" d="M231.3 196 L231.3 201" stroke-width="1"/><text class="s" x="231.3" y="215" text-anchor="middle">100</text><path class="d-ink" d="M322 196 L322 201" stroke-width="1"/><text class="s" x="322" y="215" text-anchor="middle">1,000</text><path class="d-ink" d="M50 40 L77.3 40 L93.3 92 L104.6 118 L113.4 133.6 L120.6 144 L126.6 129.1 L131.9 118 L136.5 109.3 L140.7 118 L144.4 110.9 L147.8 105 L151 112 L153.9 106.9 L156.6 102.4 L159.2 98.5 L161.6 104.2 L163.8 109.3 L165.9 113.9 L168 118 L169.9 114.3 L171.7 110.9 L173.5 107.8 L175.1 111.5 L176.7 108.6 L178.3 106 L179.8 109.3 L181.2 106.9 L182.6 109.9 L183.9 112.8 L185.2 110.4 L186.5 113.1 L187.7 110.9 L188.9 113.4 L190 115.8 L191.1 118 L192.2 115.9 L193.2 118 L194.3 120 L195.3 121.9 L196.2 119.9 L197.2 118 L198.1 116.2 L199 118 L199.9 116.3 L200.8 114.6 L201.6 116.3 L202.4 118 L203.2 119.6 L204 118 L204.8 119.5 L205.6 118 L206.3 119.5 L207.1 118 L207.8 116.6 L208.5 115.2 L209.2 116.6 L209.9 115.3 L210.6 114 L211.2 112.8 L211.9 111.6 L213.8 115.6 L214.4 114.4 L215.6 116.8 L217.3 118 L218.9 116.9 L220.5 118 L222.1 119 L223 120.9 L223.5 119.9 L224.9 120.7 L226.3 123.3 L226.7 122.4 L227.6 120.6 L228.9 121.3 L230.1 120.4 L231.3 119.6 L232.5 118.8 L233.3 118.7 L233.6 118 L234.7 118.7 L235.8 118 L236.1 117.3 L236.8 116 L237.9 116.7 L238.8 114.8 L239.8 115.5 L240.7 114.9 L241.4 116.2 L241.7 115.6 L242.6 117.4 L243.4 116.8 L243.7 116.3 L244.3 117.4 L245.1 116.9 L246 116.4 L246.8 114.8 L247.6 114.4 L248.1 114.4 L248.3 113.9 L249.1 113.5 L249.8 112.2 L250.1 111.7 L250.6 111.8 L251.3 112.4 L252 112.9 L252.7 114.4 L253.4 113.1 L253.8 112.3 L254 111.9 L254.7 113.3 L255.3 113.8 L255.6 114.2 L256 113.4 L256.6 113.9 L257.2 113.6 L257.8 114 L258.4 112.9 L258.8 113 L260.4 114.6 L261.8 116.2 L263.3 116.3 L264.6 116.3 L266 117 L267.3 118.3 L268.5 118.3 L269.7 118.9 L270.9 118.9 L272 118.8 L273.1 119.4 L274.2 117.7 L275.2 119.3 L276.3 120.7 L277.3 120.2 L278.2 121.1 L279.2 121 L280.1 121.8 L281 121.3 L281.9 120.4 L282.7 119.5 L283.6 119.5 L284.4 119.4 L285.2 118.6 L286 119 L286.8 117.8 L287.6 117.1 L288.3 117.8 L289 117.5 L289.8 117.5 L290.5 117.5 L291.2 117.5 L291.8 117.8 L292.5 118.2 L293.2 118.5 L293.8 119.4 L294.5 119.1 L295.1 119.1 L295.7 118.8 L296.3 119 L296.9 118.1 L297.5 118.1 L298.1 118.1 L298.7 117.6 L299.2 117.3 L299.8 117.9 L300.3 117.9 L300.9 117.6 L301.4 117.6 L302 117.1 L302.5 117.1 L303 117.9 L303.5 118.1 L304 118.6 L304.5 119.1 L305 118.6 L305.5 118.6 L305.9 118.4 L306.4 118.3 L306.9 118.3 L307.3 118.3 L307.8 118.8 L308.2 118.3 L308.7 118.1 L309.1 118.3 L309.6 117.9 L310 118.3 L310.4 118.5 L310.8 118.9 L311.2 118.5 L311.7 118.9 L312.1 118.9 L312.5 118.9 L312.9 118.9 L313.3 118.7 L313.7 118.9 L314 118.7 L314.4 118.7 L314.8 118.8 L315.2 118.8 L315.6 119.2 L315.9 119.4 L316.3 118.8 L316.7 118.8 L317 119.2 L317.4 119.1 L317.7 119.3 L318.1 119.5 L318.4 120 L318.8 119.4 L319.1 118.9 L319.4 118.9 L319.8 118.9 L320.1 118.9 L320.4 118.7 L320.8 118.6 L321.1 118.6 L321.4 118.6 L321.7 118.9 L322 118.6" fill="none" stroke-width="2"/><text class="s" x="85.3" y="45">2 flips: 100%</text><text class="s" x="122.6" y="160">6 flips: 33%</text><text class="s" x="322" y="140.6" text-anchor="end">1,000 flips: 49.6%</text><text class="s" x="186" y="236" text-anchor="middle">number of flips (log scale)</text></svg>', alt:"A line chart of the share of heads after each flip, for one simulated run of 1,000 flips, with the number of flips on a log scale from 1 to 1,000. The share starts at 100% after 2 flips, drops to 33% after 6 flips, swings between about 43% and 63% over the next 50 flips, then settles close to a dashed line at 50%, ending at 49.6% after 1,000 flips.", cap:"Early on, the share jumps around. As flips pile up, it settles near 50%. (The flips axis is a log scale, so the early wobble is visible.)"}
    ]},
    {h:"The law of large numbers", body:[
      "What the chart shows has a name. The [[law-of-large-numbers|law of large numbers]] says that as a chance process is repeated more and more times, the relative frequency of an outcome gets closer and closer to its probability. The statistician Karl Pearson once flipped a coin 24,000 times and got 12,012 heads: a share of 0.5005 (OpenStax, Section 4.2).",
      "How close is “close”? Here is what happens across many runs of a fair coin:",
      {table:[["Flips","Heads in about 95% of runs","As a share"],["10","2 to 8","20% to 80%"],["100","40 to 60","40% to 60%"],["1,000","469 to 531","46.9% to 53.1%"],["10,000","4,902 to 5,098","49.0% to 51.0%"]]},
      "(With only 10 flips no range covers exactly 95%; 2 to 8 heads covers about 98% of runs.)",
      "Two things happen at once, and the second surprises most people:",
      {list:[
        "**The share settles.** Each time the number of flips grows a hundredfold, the range of shares narrows about tenfold. That square-root pattern returns in Unit 7, where it becomes the [[standard-error|standard error]].",
        "**The count does not even out.** The gap between heads and exactly half *grows*: up to about 3 heads off with 10 flips, 10 with 100, 31 with 1,000, 98 with 10,000. Pearson ended 12 heads above half. The gap just becomes small compared with the number of flips."
      ]},
      {key:"The law of large numbers works by **swamping**, not by **correcting**. An early run of heads is never cancelled out; it is diluted by thousands of later flips."},
      "The law is about the long run only. It says nothing about the next flip, and nothing comforting about small samples: 10 flips giving 3 or 7 heads is completely ordinary."
    ]},
    {h:"The gambler’s fallacy and other traps", body:[
      "A roulette wheel shows black five times in a row, and a player bets on red because red is “due”. This is the [[gamblers-fallacy|gambler’s fallacy]]: the belief that past results of an independent chance process change the next one. OpenIntro uses exactly this example. The wheel has no memory. On a European-style wheel (37 pockets: 18 red, 18 black and one green zero), the chance of red is 18/37 on every spin, whatever came before.",
      "Streaks feel meaningful, but chance produces them all the time. In 100 flips of a fair coin, the chance of at least one run of **6 or more** identical results in a row is about 81%, and the longest run is most often 6 or 7. Studies that ask people to write down “random-looking” sequences find that they switch between heads and tails too often, so their runs come out too short (Falk and Konold, 1997). Real randomness is streakier than intuition expects.",
      "When can the past matter? Two cases:",
      {list:[
        "**When events aren’t independent.** Drawing tickets from a box without putting them back changes what is left (Lesson 2).",
        "**When the probability is unknown.** A coin that gives 90 heads in 100 flips is very probably not fair: with a fair coin that would happen with a probability of about 1.5 × 10⁻¹⁷. But the right conclusion is that heads is *more* likely in future, not that tails is due."
      ]},
      {table:[["Belief","What’s actually true"],["“After five blacks, red is due.”","Spins are independent: red stays 18/37."],["“A 1-in-10,000 event won’t happen here.”","Given enough chances, rare events happen somewhere every day ({{numbers-in-context}})."],["“It stayed dry, so the 70% forecast was wrong.”","One outcome can’t show that; many forecasts can."],["“A small sample will look like the population.”","Small samples vary a lot: 10 flips often give 3 or 7 heads."],["“Two coins: two heads, two tails or one of each, so 1/3 each.”","List equally likely outcomes: one of each is 1/2."]]}
    ]}
   ],
   try:[
    {id:"t3u11-l1-x1", type:"mcq", q:"A website says the odds of a particular horse winning are “4 to 1 against”. If those odds were fair, what probability would they mean?", options:[
      {t:"0.2 (1 chance in 5)", ok:true, why:"4 to 1 against means 4 losing chances for every 1 winning chance: 5 chances in all, 1 of them a win. 1 ÷ 5 = 0.2."},
      {t:"0.25 (1 chance in 4)", why:"That divides by 4, but 4 counts only the losing chances. Add the 1 winning chance: 1 in 5."},
      {t:"0.8 (4 chances in 5)", why:"That is the chance the horse **loses**. “Against” means the 4 is on the losing side."},
      {t:"4, because odds are already a probability", why:"A probability can’t be above 1. Odds compare losing to winning chances; you must convert them."}
    ]},
    {id:"t3u11-l1-x2", type:"number", q:"Two fair dice are rolled. What is the probability that the total is **7**? Give a decimal to three places.", answer:0.167, tol:0.002, unit:"", why:"There are 6 × 6 = 36 equally likely pairs. Six of them total 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1. So P = 6 ÷ 36 = 1/6 ≈ 0.167.", wrongs:[
      {v:0.091, tol:0.002, why:"0.091 is 1 ÷ 11, treating the 11 possible totals (2 to 12) as equally likely. They aren’t: 7 can happen six ways and 12 only one way."},
      {v:0.028, tol:0.002, why:"0.028 is 1 ÷ 36, the chance of one particular pair. A total of 7 comes from six different pairs."},
      {v:0.083, tol:0.002, why:"0.083 is 3 ÷ 36, counting 1+6, 2+5 and 3+4 but not 6+1, 5+2 and 4+3. With two dice, a 1 then a 6 is a different outcome from a 6 then a 1."}
    ], hint2:"List the pairs that make 7, counting (1, 6) and (6, 1) separately. How many pairs are there in all?"},
    {id:"t3u11-l1-x3", type:"sort", q:"Where does each probability most likely come from?", buckets:["Equally likely outcomes","Long-run frequency in data","Judgement or a model"], items:[
      {t:"The chance a fair die shows 6", b:0, why:"Six equally likely faces, one of which is a 6: 1/6 by counting."},
      {t:"The chance your name is drawn when 5 of 500 tickets are yours", b:0, why:"A random draw makes every ticket equally likely: 5 ÷ 500 = 0.01."},
      {t:"A delivery firm’s 6% chance that a parcel is late, from last year’s records", b:1, why:"It is a relative frequency: late parcels ÷ all parcels in the past."},
      {t:"The share of patients readmitted within 30 days last year, used to plan next year", b:1, why:"Again a count from past cases, used as an estimate of the chance."},
      {t:"A weather service’s “70% chance of rain” tomorrow", b:2, why:"Forecasts combine models and expert judgement. Their calibration can be checked against frequencies, but each one is a judgement about one day."},
      {t:"An investor’s view that a new business has a 1 in 5 chance of succeeding", b:2, why:"Nobody can count equally likely outcomes or repeat this exact business; it is a reasoned judgement."}
    ]},
    {id:"t3u11-l1-x4", type:"mcq", q:"Kenji flips a fair coin 20 times and gets 14 heads (70%). He plans to keep going until he has 2,000 flips. What is most likely?", options:[
      {t:"The share of heads will very likely end close to 50%.", ok:true, why:"Heads need not ever “catch up” to exactly half. The law of large numbers works by swamping: 1,980 more flips dilute the early lead. The count gap usually stays a few dozen either way; only the share settles."},
      {t:"The coin will produce extra tails to make up for the early heads.", why:"That is the gambler’s fallacy. Each flip is still 50–50; nothing pushes the coin back towards balance."},
      {t:"The share will stay near 70%, because the coin has shown it favours heads.", why:"14 of 20 is not unusual for a fair coin: 14 or more heads, or 14 or more tails, happens in about 12% of runs of 20 flips. It isn’t strong evidence of a bias."},
      {t:"He will end with exactly 1,000 heads.", why:"Exactly half is possible but unlikely: with 2,000 flips the chance of exactly 1,000 heads is under 2%."}
    ]},
    {id:"t3u11-l1-x5", type:"number", q:"Karl Pearson flipped a coin 24,000 times and got 12,012 heads. What was the relative frequency of heads, **as a percentage** to two decimal places?", answer:50.05, tol:0.005, unit:"%", why:"Relative frequency = 12,012 ÷ 24,000 = 0.5005 = 50.05%. Very close to 50%, even though there were 12 more heads than exactly half.", wrongs:[
      {v:12, tol:0.5, why:"12 is how many heads above half Pearson got (12,012 − 12,000). The question asks for the share."},
      {v:0.05, tol:0.005, why:"0.05 is how far the share is from 50%, in percentage points. The share itself is 50.05%."},
      {v:0.5005, tol:0.0001, why:"0.5005 is right as a decimal. As a percentage, multiply by 100: 50.05%."}
    ], hint2:"Divide heads by flips, then multiply by 100."},
    {id:"t3u11-l1-x6", type:"mcq", q:"A European-style roulette wheel (18 red, 18 black, 1 green zero) has just landed on red six times in a row. What is the probability that the next spin lands on black?", options:[
      {t:"18/37, the same as always", ok:true, why:"Spins are independent and the wheel has no memory. Black has 18 of the 37 pockets on every spin."},
      {t:"Higher than 18/37, because black is due", why:"That is the gambler’s fallacy. Past spins don’t change the wheel."},
      {t:"Lower than 18/37, because the wheel is on a red streak", why:"A streak of six is ordinary for a fair wheel. Treating it as a trend is the mirror image of the gambler’s fallacy."},
      {t:"Exactly 1/2, because it is red or black", why:"There are 37 equally likely pockets, and the green zero is neither red nor black: 18/37 ≈ 0.486."}
    ]},
    {id:"t3u11-l1-x7", type:"spot", q:"A local newsletter writes about luck. Tap each sentence that misreads probability.", ask:"misreads probability", parts:[
      {t:"No ticket bought in our town has won the jackpot for 15 years,", flag:false, why:"A statement about past draws. Nothing wrong with reporting it."},
      " ",
      {t:"so our town is now overdue for a big win.", flag:true, why:"The gambler’s fallacy. Each draw is independent; 15 years without a win doesn’t raise the chance in the next one."},
      " ",
      {t:"Every ticket has the same chance of the jackpot in every draw,", flag:false, why:"Correct for a fixed game: the chance per ticket doesn’t change from draw to draw."},
      " ",
      {t:"and across thousands of draws the share of winning tickets settles near that chance.", flag:false, why:"That is the law of large numbers, stated correctly."},
      " ",
      {t:"At the summer fair, a coin landed heads six times in a row, so it must have been rigged.", flag:true, why:"Six in a row has a probability of 1/64 for any given six flips, and in a long afternoon of flipping, runs that long are expected. One streak is weak evidence."},
      " ",
      {t:"If a coin ever gave 90 heads in 100 flips, that would be strong evidence it isn’t fair.", flag:false, why:"Correct. For a fair coin, 90 or more heads in 100 has a probability of about 1.5 × 10⁻¹⁷."}
    ]},
    {id:"t3u11-l1-x8", type:"explain", q:"A roulette wheel has landed on black five times in a row, and a friend says red is now “due” because things even out in the long run. Explain what’s wrong, using the law of large numbers.", model:"Each spin is independent: the wheel has no memory, so on a European wheel the chance of red is 18/37 on every spin, whatever came before. The law of large numbers says the **share** of reds settles near its probability over many spins, but it works by swamping, not correcting. An early run of blacks is never cancelled out; it is diluted by thousands of later spins. The count can even drift further from half while the share settles. That’s the gambler’s fallacy.", points:["Says spins are independent, so the chance of red doesn’t change", "States what the law of large numbers says about the long-run share", "Explains that it works by swamping, not correcting", "Names the gambler’s fallacy"]}
   ],
   apply:{intro:"Watch the law of large numbers happen. Task 1 works in any spreadsheet app, including Google Sheets on a phone; task 2 needs only a coin; task 3 uses the Data Lab in your browser.", tasks:[
     {t:"Simulate 200 coin flips and a running share", app:{
       ms:["In a new sheet, type `Flip (1 = heads)` in A1 and `Share so far` in B1.","In A2 type `=RANDBETWEEN(0,1)` and fill down to A201: 200 flips.","In B2 type `=AVERAGE($A$2:A2)` and fill down to B201. Each row now shows the share of heads so far. The `$` keeps the start of the range fixed while the end moves down.","Read B11 (after 10 flips), B101 (100) and B201 (200). Press [[kbd:F9]] a few times to recalculate and watch how much B11 jumps compared with B201.","Optional: select B2:B201 and choose **Insert → Insert Line or Area Chart → Line**."],
       google:["In a new sheet, type `Flip (1 = heads)` in A1 and `Share so far` in B1.","In A2 type `=RANDBETWEEN(0,1)` and fill down to A201: 200 flips. (On a phone, copy A2 and paste it into A3:A201.)","In B2 type `=AVERAGE($A$2:A2)` and fill down to B201. The `$` keeps the start of the range fixed while the end moves down.","Read B11 (after 10 flips), B101 (100) and B201 (200). Type anything in an empty cell to recalculate, and watch how much B11 jumps compared with B201.","Optional: select B2:B201 and choose **Insert → Chart**; the Chart editor usually suggests a line chart."],
       libre:["In a new sheet, type `Flip (1 = heads)` in A1 and `Share so far` in B1.","In A2 type `=RANDBETWEEN(0;1)` and fill down to A201: 200 flips.","In B2 type `=AVERAGE($A$2:A2)` and fill down to B201. The `$` keeps the start of the range fixed while the end moves down.","Read B11 (after 10 flips), B101 (100) and B201 (200). Press [[kbd:F9]] to recalculate and watch how much B11 jumps compared with B201.","Optional: select B2:B201 and choose **Insert → Chart…**, then **Line**."],
       apple:["In a new table, type `Flip (1 = heads)` in A1 and `Share so far` in B1.","In A2 type `=RANDBETWEEN(0,1)` and fill down to A201 (add rows to the table if needed).","In B2 type `=AVERAGE($A$2:A2)` and fill down to B201.","Read B11 (after 10 flips), B101 (100) and B201 (200). Edit any empty cell to recalculate, and watch how much B11 jumps compared with B201."]},
       appNote:"If a formula is rejected, try semicolons between arguments, `=RANDBETWEEN(0;1)`: apps set up for countries that use a decimal comma expect them.",
       write:"Share after 10 flips… after 100… after 200… Which one moves most when I recalculate?…"},
     {t:"Flip a real coin, and compare with your imagination", how:["Before touching a coin, write down 50 made-up flips (H or T) that look random to you.","Now flip a real coin 50 times and write down the results.","For each list, find the longest run of identical results in a row, and the share of heads.","Compare: which list has the longer runs? (In 50 real flips, a run of 4 or more turns up about 98% of the time, and a run of 5 or more about 82% of the time.)"], write:"Made-up: longest run… share of heads… Real: longest run… share of heads…"},
     {t:"Run the simulation in R in the Data Lab (optional, works on a phone)", how:["Open the **Data Lab** from the app menu and choose any R challenge, for example “Simulate a sampling distribution”.","Delete the code in the box and type the five lines from the section “Let the computer flip the coins”, then press **▶ Run** (not Check: this isn’t that challenge’s task).","You should see 0.5, 0.49 and 0.496. Change `set.seed(2)` to another number and run again: the early shares change a lot, the 1,000-flip share hardly at all.","Add the line `max(rle(flips[1:100])$lengths)` and run: it prints the longest run in the first 100 flips."], write:"With seed 2: … With my own seed: … Longest run in 100 flips: …"}
   ], proof:"A sheet with 200 simulated flips and a running share, notes on how much the share moved after 10, 100 and 200 flips, and the longest runs in your made-up and real coin lists."},
   read:[
     {book:"ostat", where:"Chapter 3, Section 3.1 “Terminology”", note:"Sample space, events, equally likely outcomes and the law of large numbers."},
     {book:"openintro", where:"Chapter 3, Section 3.1 “Defining probability” (3.1.1 “Introductory examples” and 3.1.2 “Probability”)", note:"Includes a die-rolling simulation of the law of large numbers."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u11-l2", title:"Combining chances: tables, rules and independence", minutes:60,
   hook:{q:"Two events **can’t happen together**: a booked appointment is either attended or missed, never both. Are two events like that independent of each other?", options:["Yes: if they never overlap, they can’t affect each other","No: if one happens, the other’s chance drops to zero","Only if they are equally likely","It depends on the sample size"], answer:1, reveal:"**No.** Independent means that knowing one event happened doesn’t change the chance of the other. If you know an appointment was attended, the chance it was missed drops to zero: one tells you everything about the other. “Can’t happen together” (mutually exclusive) and “independent” are different ideas, and mixing them up is one of the commonest probability errors. This lesson untangles them with two-way tables."},
   goals:[
     "Use the complement rule, including the “at least one” shortcut",
     "Read joint, marginal and conditional probabilities from a two-way table",
     "Apply the addition rule, and recognise mutually exclusive events",
     "Apply the multiplication rule with a tree, with and without replacement",
     "Check whether two events are independent, and explain why assuming independence wrongly can mislead badly"
   ],
   learn:[
    {h:"Not: the complement rule", body:[
      {lead:"Three small words, “not”, “or” and “and”, each come with a rule. Start with the easiest."},
      "The [[complement-event|complement]] of an event is everything else in the sample space: the complement of “a die shows 6” is “a die doesn’t show 6”. One or the other must happen, so their probabilities add to 1:",
      {ex:"P(not A) = 1 − P(A)\n\nP(not a 6) = 1 − 1/6 = 5/6 ≈ 0.833", label:"The complement rule", mono:true},
      "Its best use is the **“at least one”** question. What is the chance of at least one 6 in four rolls of a die? Counting every way to get one, two, three or four 6s is slow. The complement is a single case: **no 6 at all**. Each roll avoids a 6 with probability 5/6, and the rolls don’t affect each other, so (by the multiplication rule later in this lesson):",
      {ex:"P(no 6 in 4 rolls) = (5/6)⁴ = 0.482\nP(at least one 6)  = 1 − 0.482\n                   = 0.518", label:"Worked example", mono:true},
      "A simulation agrees. In R, `any(sample(1:6, 4, replace = TRUE) == 6)` rolls four dice and asks whether any shows a 6; repeating it 10,000 times with `set.seed(3)` gives a share of 0.5135, close to the exact 0.518.",
      {tip:"Whenever you see “at least one”, try 1 − P(none). It turns many cases into one."}
    ]},
    {h:"Two-way tables: counts first", body:[
      "Most real probability questions involve two things at once: a reminder and attendance, a vaccine and an infection, a format and a pass rate. A [[crosstab|two-way table]] (cross-tab) of counts is the clearest way to handle them. Here are 1,000 clinic appointments (invented data):",
      {table:[["","Attended","Missed","Total"],["Reminder sent","552","48","600"],["No reminder","340","60","400"],["Total","892","108","1,000"]]},
      "Pick one of these appointments at random, and every count becomes a probability. Three kinds matter:",
      {list:[
        "**[[joint-probability|Joint]]** (an inside cell): P(reminder **and** missed) = 48 ÷ 1,000 = 0.048.",
        "**[[marginal-probability|Marginal]]** (a total in the margin): P(missed) = 108 ÷ 1,000 = 0.108.",
        "**Conditional** (an inside cell ÷ its row or column total): P(missed **given** a reminder) = 48 ÷ 600 = 0.08."
      ]},
      {fig:'<svg viewBox="0 0 340 322"><text x="170" y="18" text-anchor="middle">1,000 appointments as one square</text><text x="114" y="48" text-anchor="middle">Reminder: 600</text><text x="254" y="48" text-anchor="middle">None: 400</text><rect class="d-sage" x="30" y="60" width="168" height="174.8" stroke-width="1.5"/><rect class="d-rose" x="30" y="234.8" width="168" height="15.2" stroke-width="1.5"/><rect class="d-sage" x="198" y="60" width="112" height="161.5" stroke-width="1.5"/><rect class="d-rose" x="198" y="221.5" width="112" height="28.5" stroke-width="1.5"/><text x="114" y="130" text-anchor="middle">552 attended</text><text class="s" x="114" y="147" text-anchor="middle">92% of 600</text><text x="254" y="130" text-anchor="middle">340 attended</text><text class="s" x="254" y="147" text-anchor="middle">85% of 400</text><text class="s" x="114" y="270" text-anchor="middle">48 missed (8%)</text><text class="s" x="254" y="270" text-anchor="middle">60 missed (15%)</text><text class="s" x="170" y="294" text-anchor="middle">Width = share with a reminder.</text><text class="s" x="170" y="310" text-anchor="middle">Pink height = share missed within each group.</text></svg>', alt:"A square divided into two columns: 60% of its width for the 600 appointments with a reminder, 40% for the 400 without. In the reminder column, 552 attended (92%) fill most of the height and a thin strip at the bottom shows 48 missed (8%). In the no-reminder column, 340 attended (85%) and a thicker strip shows 60 missed (15%).", cap:"Each area is a share of all 1,000 appointments. The missed strip is visibly thicker for appointments without a reminder."},
      "This counts-first approach is the same [[natural-frequency|natural-frequency]] method that Unit 1 of this track used for medical tests ({{base-rates}}). Counts keep the denominators visible, and wrong denominators cause most probability mistakes.",
      "From raw data, a spreadsheet builds each cell with COUNTIFS, for example `=COUNTIFS(B:B,\"yes\",C:C,\"missed\")`, which counts the rows where column B says yes **and** column C says missed.",
      {lab:"fl-countif", t:"Practise: count matching rows with COUNTIF"}
    ]},
    {h:"Or: the addition rule", body:[
      "In probability, “A **or** B” means A, B, or both. To find it, add the two probabilities and subtract the overlap, because the overlap was counted twice:",
      {ex:"P(A or B) = P(A) + P(B) − P(A and B)\n\nP(reminder or missed)\n  = 0.6 + 0.108 − 0.048 = 0.66\nCheck with counts:\n  552 + 48 + 60 = 660 of 1,000", label:"The addition rule", mono:true},
      "The 48 reminded-and-missed appointments are in both the reminder row and the missed column; without the subtraction they would be counted twice.",
      "Two events are [[mutually-exclusive|mutually exclusive]] (or disjoint) if they can’t happen together, like “attended” and “missed”. Then P(A and B) = 0 and the rule shrinks to a plain sum: P(attended or missed) = 0.892 + 0.108 = 1.",
      {warn:"Adding without subtracting the overlap is a common slip. A quick alarm: if your “or” probability comes out above 1, or larger than it could possibly be, you have counted an overlap twice. For example, the chance of at least one 6 in four rolls is not 4 × 1/6 = 0.67; it is 0.518, because rolls that contain two or more 6s were counted more than once."}
    ]},
    {h:"Given: conditional probability", body:[
      "You met [[conditional-probability|conditional probability]] in Unit 1: a probability within a group. The formula just writes down what the table does:",
      {ex:"P(A | B) = P(A and B) ÷ P(B)\n(read “|” as “given”)\n\nP(missed | reminder)\n  = 0.048 ÷ 0.6 = 0.08\nP(missed | no reminder)\n  = 0.060 ÷ 0.4 = 0.15\nP(reminder | missed)\n  = 0.048 ÷ 0.108 = 0.44", label:"Conditional probability", mono:true},
      "Look at the last two lines. Only 8% of reminded appointments were missed, yet 44% of missed appointments had a reminder. Both are true: swapping what you condition on changes the answer completely. Unit 1’s prosecutor’s fallacy ({{base-rates}}) is this swap in a courtroom.",
      "In R, `prop.table()` turns a table of counts into proportions: of the whole table, of each row (`1`) or of each column (`2`):",
      {code:'appts <- matrix(c(552, 48, 340, 60),\n  nrow = 2, byrow = TRUE,\n  dimnames = list(\n    reminder = c("yes", "no"),\n    result = c("attended", "missed")))\nprop.table(appts)     # joint\nprop.table(appts, 1)  # within each row\nprop.table(appts, 2)  # within each column', lang:"r", label:"R"},
      "The joint version shows 0.552, 0.048, 0.340 and 0.060. The row version shows 0.92 and 0.08 for reminded appointments and 0.85 and 0.15 for the others. The column version shows that 44% of missed appointments had a reminder."
    ]},
    {h:"And: the multiplication rule and trees", body:[
      "Turn the conditional formula round and you get the [[multiplication-rule|multiplication rule]] for “and”:",
      {ex:"P(A and B) = P(A) × P(B | A)\n\nP(reminder and missed)\n  = 0.6 × 0.08 = 0.048", label:"The multiplication rule", mono:true},
      "A [[tree-diagram|tree diagram]] shows this step by step: each branch carries a conditional probability, and you multiply along a path.",
      {fig:'<svg viewBox="0 0 340 300"><rect class="d-panel" x="105" y="10" width="130" height="34" rx="6" stroke-width="1.5"/><text x="170" y="32" text-anchor="middle">1,000 appointments</text><path class="d-ink" d="M150 44 L85 96 M190 44 L255 96" fill="none" stroke-width="2"/><text class="s" x="104" y="70" text-anchor="end">0.6</text><text class="s" x="236" y="70">0.4</text><rect class="d-panel" x="30" y="96" width="110" height="34" rx="6" stroke-width="1.5"/><text x="85" y="118" text-anchor="middle">600 reminder</text><rect class="d-panel" x="200" y="96" width="110" height="34" rx="6" stroke-width="1.5"/><text x="255" y="118" text-anchor="middle">400 none</text><path class="d-ink" d="M70 130 L45 186 M100 130 L125 186 M240 130 L215 186 M270 130 L295 186" fill="none" stroke-width="2"/><text class="s" x="52" y="160" text-anchor="end">0.92</text><text class="s" x="118" y="160">0.08</text><text class="s" x="222" y="160" text-anchor="end">0.85</text><text class="s" x="288" y="160">0.15</text><rect class="d-sage" x="9" y="186" width="72" height="44" rx="6" stroke-width="1.5"/><text x="45" y="205" text-anchor="middle">552</text><text class="s" x="45" y="222" text-anchor="middle">attended</text><rect class="d-rose" x="89" y="186" width="72" height="44" rx="6" stroke-width="1.5"/><text x="125" y="205" text-anchor="middle">48</text><text class="s" x="125" y="222" text-anchor="middle">missed</text><rect class="d-sage" x="179" y="186" width="72" height="44" rx="6" stroke-width="1.5"/><text x="215" y="205" text-anchor="middle">340</text><text class="s" x="215" y="222" text-anchor="middle">attended</text><rect class="d-rose" x="259" y="186" width="72" height="44" rx="6" stroke-width="1.5"/><text x="295" y="205" text-anchor="middle">60</text><text class="s" x="295" y="222" text-anchor="middle">missed</text><text x="170" y="256" text-anchor="middle">P(reminder and missed)</text><text class="s" x="170" y="274" text-anchor="middle">= 0.6 × 0.08 = 0.048, that is 48 in 1,000</text></svg>', alt:"A tree. 1,000 appointments split into 600 with a reminder (branch 0.6) and 400 without (branch 0.4). The 600 split into 552 attended (0.92) and 48 missed (0.08). The 400 split into 340 attended (0.85) and 60 missed (0.15). Below: P(reminder and missed) = 0.6 × 0.08 = 0.048, that is 48 in 1,000.", cap:"Multiply along a path to get an “and” probability; add the ends of paths to get an “or”."},
      "Trees shine when the second chance depends on the first. A box holds 10 raffle tickets, 3 of them winners. Draw two **without replacement** (the first isn’t put back):",
      {ex:"P(first wins) = 3/10\nP(second wins | first won) = 2/9\n  (2 winners left among 9)\nP(both win) = 3/10 × 2/9\n            = 6/90 ≈ 0.067\n\nWith replacement (put back):\n  3/10 × 3/10 = 0.09", label:"Worked example", mono:true},
      "Without replacement, the first draw changes the box, so the draws are not independent. With replacement, the box is the same each time."
    ]},
    {h:"Independence", body:[
      "Two events are [[independent-events|independent]] if knowing that one happened doesn’t change the probability of the other: P(A | B) = P(A). An equivalent test, easier with a table, is that the “and” probability equals the plain product: **P(A and B) = P(A) × P(B)**.",
      "Check the clinic: P(missed) = 0.108 overall, but P(missed | reminder) = 0.08. Knowing about the reminder changes the chance, so the events are **not** independent. Put another way: if they were independent, about 0.6 × 0.108 × 1,000 = **64.8** appointments would be reminded and missed; the table has 48.",
      "Is a gap like 48 versus 64.8 bigger than chance would produce? Unit 7 answers exactly that with the chi-square test ({{chi-square-tests}}), and those 64.8-style numbers are its [[expected-count|expected counts]].",
      {table:[["","Mutually exclusive","Independent"],["Meaning","Can’t happen together","One doesn’t change the other’s chance"],["Test","P(A and B) = 0","P(A and B) = P(A) × P(B)"],["Example","One roll shows 2; the same roll shows 5","Two separate coin flips both land heads"]]},
      "Two events with non-zero chances can’t be both: if they are mutually exclusive, knowing one happened makes the other impossible, which is about as dependent as events get.",
      {warn:"Dependence isn’t cause. Reminders may have been sent only to patients whose phone numbers were on file, who could differ in other ways. A hidden factor like that is a [[confounder]] (see {{averages-misleading}} for Simpson’s paradox)."}
    ]},
    {h:"When independence is assumed wrongly", body:[
      "Multiplying probabilities is only valid for independent events. Assuming independence that isn’t there can make a rare-looking event seem astronomically rare.",
      "The best-known case is a tragedy. In 1999 Sally Clark, a British mother, was convicted of murdering her two baby sons, who had died suddenly. An expert witness told the court that the chance of one sudden infant death in a family like hers was 1 in 8,543, and **squared** it to get about 1 in 73 million for two. The Royal Statistical Society later wrote (in a 2001 statement and a 2002 letter to the Lord Chancellor) that this was invalid: squaring assumes the two deaths were independent, and there are strong reasons, such as shared genetic and environmental factors, to think they were not. It also warned against reading 1 in 73 million as the chance that the deaths were accidents, which is the prosecutor’s fallacy. Her convictions were overturned on appeal in 2003, mainly because medical evidence had not been disclosed at the trial.",
      "Everyday versions are common too. Three backup copies that each fail 1 time in 10 would all fail together only 1 time in 1,000 **if** failures were independent. Keep all three in one building and a single fire breaks that assumption.",
      {key:"Multiply chances only when you have a real reason to think the events are independent. Shared causes, such as genes, environment, one building or one software bug, break independence."}
    ]}
   ],
   try:[
    {id:"t3u11-l2-x1", type:"number", q:"Amara enters a raffle at three separate events. At each she has a 1 in 20 chance of winning, independently. What is the probability that she wins **at least once**? Give a decimal to three places.", answer:0.143, tol:0.001, unit:"", why:"P(no win at one event) = 0.95. P(no win at all three) = 0.95³ = 0.857. So P(at least one win) = 1 − 0.857 = 0.143.", wrongs:[
      {v:0.15, tol:0.0005, why:"0.15 adds 0.05 three times. That counts the chance of winning twice or three times more than once; use 1 − P(no wins)."},
      {v:0.857, tol:0.001, why:"0.857 is the chance of winning **nothing**. Subtract it from 1."},
      {v:0.000125, tol:0.00001, why:"0.000125 is 0.05³, the chance of winning at **all three** events."}
    ], hint2:"Find the chance of no win at all, then use the complement."},
    {id:"t3u11-l2-x2", type:"number", q:"A college records 200 students’ results by course format (invented): online 80 students (60 passed, 20 failed); in person 120 students (96 passed, 24 failed). A student is picked at random. What is **P(online or failed)**?", answer:0.52, tol:0.001, unit:"", why:"P(online) = 80/200 = 0.40, P(failed) = 44/200 = 0.22, P(online and failed) = 20/200 = 0.10. So 0.40 + 0.22 − 0.10 = 0.52. Check with counts: 80 online students plus the 24 in-person students who failed = 104 of 200.", wrongs:[
      {v:0.62, tol:0.001, why:"0.62 adds 0.40 and 0.22 without subtracting the 20 students who are both online and failed, so they are counted twice."},
      {v:0.1, tol:0.001, why:"0.10 is the “and” probability. “Or” includes everyone who is online, failed, or both."},
      {v:0.4, tol:0.001, why:"0.40 is only P(online). Add the in-person students who failed as well."}
    ], hint2:"Use P(A) + P(B) − P(A and B), or count the students who are online, failed, or both."},
    {id:"t3u11-l2-x3", type:"number", q:"Same college table: online 80 (60 passed, 20 failed), in person 120 (96 passed, 24 failed). What is **P(failed | online)**?", answer:0.25, tol:0.001, unit:"", why:"Condition on online students: there are 80, and 20 of them failed. 20 ÷ 80 = 0.25.", wrongs:[
      {v:0.1, tol:0.001, why:"0.1 is 20 ÷ 200, the joint probability P(online and failed). “Given online” means divide by the 80 online students."},
      {v:0.455, tol:0.002, why:"0.455 is 20 ÷ 44, which is P(online | failed): the condition is the wrong way round."},
      {v:0.22, tol:0.001, why:"0.22 is 44 ÷ 200, the failure rate of all students. The question asks only about online students."}
    ], hint2:"Which group are you inside? Divide by that group’s total."},
    {id:"t3u11-l2-x4", type:"number", q:"A drawer holds 8 batteries, 3 of them flat. Mei takes two at random, without putting the first back. What is the probability that **both** are flat? Give a decimal to three places.", answer:0.107, tol:0.001, unit:"", why:"P(first flat) = 3/8. Then 2 flat batteries remain among 7, so P(second flat | first flat) = 2/7. Multiply: 3/8 × 2/7 = 6/56 ≈ 0.107.", wrongs:[
      {v:0.141, tol:0.001, why:"0.141 is 3/8 × 3/8, as if the first battery were put back. Without replacement, only 2 flat ones are left among 7."},
      {v:0.375, tol:0.001, why:"0.375 is 3/8, the chance that the first one is flat. Both must be flat."},
      {v:0.75, tol:0.001, why:"0.75 adds 3/8 twice. “Both” needs the multiplication rule."}
    ], hint2:"Multiply along the tree: P(first flat) × P(second flat | first flat)."},
    {id:"t3u11-l2-x5", type:"mcq", q:"A café looks at 200 orders (invented). 50 used oat milk, and 20 of those also included cake. Of the 150 orders without oat milk, 60 included cake. What can you say about “oat milk” and “cake”?", options:[
      {t:"They are independent in these data: 40% of orders include cake, with or without oat milk.", ok:true, why:"P(cake) = 80/200 = 0.4; P(cake | oat) = 20/50 = 0.4; P(cake | no oat) = 60/150 = 0.4. Knowing about the oat milk doesn’t change the chance of cake."},
      {t:"They are mutually exclusive, because most oat-milk orders had no cake.", why:"Mutually exclusive means they can’t happen together. Here 20 orders had both."},
      {t:"They are dependent, because 20 is not equal to 60.", why:"Raw counts come from groups of different sizes (50 and 150). Compare rates: 20/50 and 60/150 are both 0.4."},
      {t:"Oat milk makes people buy cake, because 20 oat-milk orders had cake.", why:"The rates are identical, so there is no link at all here, let alone a cause."}
    ]},
    {id:"t3u11-l2-x6", type:"sort", q:"Sort each pair of events.", buckets:["Mutually exclusive","Independent","Neither: can both happen, but are linked"], items:[
      {t:"A single die roll shows 2; the same roll shows 5", b:0, why:"One roll shows one face, so both can’t happen. P(both) = 0."},
      {t:"A randomly chosen adult is under 30; the same adult is over 60", b:0, why:"No one is in both age groups at once."},
      {t:"One coin flip lands heads; a second, separate flip lands heads", b:1, why:"Separate flips don’t affect each other: P(both) = 0.5 × 0.5 = 0.25."},
      {t:"A card from a standard 52-card pack is a heart; the same card is a king", b:1, why:"P(king) = 4/52 = 1/13, and among hearts P(king) = 1/13 too. Knowing it’s a heart doesn’t change the chance of a king."},
      {t:"Rain today; rain tomorrow in the same city", b:2, why:"Both can happen, and weather comes in spells, so rain today makes rain tomorrow more likely."},
      {t:"First ticket drawn is a winner; second ticket drawn (first not put back) is a winner", b:2, why:"Both can win, but without replacement the first draw changes what is left: 2/9 instead of 3/10."}
    ]},
    {id:"t3u11-l2-x7", type:"match", q:"Match each piece of notation to its meaning.", pairs:[
      ["P(A and B)","Both A and B happen","A joint probability: an inside cell of a two-way table ÷ the grand total."],
      ["P(A or B)","A happens, B happens, or both do","Use P(A) + P(B) − P(A and B)."],
      ["P(A | B)","A happens, among the cases where B happens","A conditional probability: B’s row or column is the new denominator."],
      ["P(not A)","A doesn’t happen","The complement: 1 − P(A)."]
    ]},
    {id:"t3u11-l2-x8", type:"explain", q:"Three backup copies of some files each fail 1 time in 10. Someone says the chance of losing all three is 1 in 1,000. Explain when that is right, and when it badly misleads.", model:"Multiplying 1/10 × 1/10 × 1/10 = 1/1,000 is only valid if the failures are independent, meaning one failing doesn’t change the chance of another. If all three copies are kept in one building, a single fire or flood can destroy them together. That shared cause breaks independence, so the real chance of losing everything can be far higher than 1 in 1,000. Keeping copies in separate places, on different systems, makes independence more believable. Multiply chances only when you have a real reason to think the events are independent.", points:["Says multiplying is valid only for independent events", "Gives a shared cause that breaks independence, such as one building", "Concludes the real risk can be much higher than 1 in 1,000", "Suggests making the copies more independent, such as separate places"]}
   ],
   apply:{intro:"Turn counts into probabilities in a spreadsheet, then draw a tree for something in your own life.", tasks:[
     {t:"From a two-way table to probabilities", how:["In any spreadsheet app, type the clinic table: B1 `Attended`, C1 `Missed`, D1 `Total`; A2 `Reminder`, B2 552, C2 48; A3 `None`, B3 340, C3 60.","Totals: in D2 type `=B2+C2` and in D3 `=B3+C3`; in A4 type `Total`, in B4 `=B2+B3`, in C4 `=C2+C3` and in D4 `=D2+D3`. You should see 600, 400, 892, 108 and 1,000.","In F1 type `=C4/D4` for P(missed) (0.108), in F2 `=C2/D2` for P(missed | reminder) (0.08), in F3 `=C3/D3` for P(missed | none) (0.15) and in F4 `=C2/C4` for P(reminder | missed) (0.444). Label each in column E.","In F5 type `=D2*C4/D4`: the number of reminded-and-missed appointments you would expect if the two were independent (64.8). Compare it with the 48 in C2.","Now change C2 to 90 and B2 to 510 (still 600 reminders). F2 and F3 should both show 0.15, and F5 should equal C2 (90): in this version, missing is independent of the reminder."], write:"F1… F2… F3… F4… Expected if independent… What changed when I edited the table…"},
     {t:"Draw a tree from your own records", how:["Choose a two-step situation you can count, for example: did it rain on your commute day (yes/no), then were you late (yes/no); or did a plant get fertiliser, then did it flower.","Use at least 20 past cases from a diary, a photo log or memory. Count each of the four paths.","Draw the tree with counts at the ends and conditional proportions on the branches.","Is “late” independent of “rain” in your data? Compare P(late | rain) with P(late | no rain), and say why a small sample might mislead you."], write:"My four counts… P(late | rain)… P(late | no rain)… Independent?…"},
     {t:"Check the table in R (optional, Data Lab)", how:["Open the Data Lab, choose any R challenge, clear the box and type the `appts` code from the section “Given: conditional probability”.","Add `print(appts)` and the three `prop.table()` lines, and press **▶ Run**.","Find P(missed | no reminder) in the output (0.15) and P(reminder | missed) (0.444)."], write:"Where each probability appeared in the output…"}
   ], proof:"A spreadsheet that turns the clinic table into joint, marginal and conditional probabilities and an expected count, plus a tree of your own with counts and an honest note on independence."},
   read:[
     {book:"ostat", where:"Chapter 3, Section 3.2 “Independent and Mutually Exclusive Events”, Section 3.3 “Two Basic Rules of Probability”, Section 3.4 “Contingency Tables” and Section 3.5 “Tree and Venn Diagrams”"},
     {book:"openintro", where:"Chapter 3, Sections 3.1.3–3.1.7 (disjoint events, the addition rule, complements and independence) and Section 3.2 “Conditional probability” (3.2.1–3.2.7, including 3.2.7 “Tree diagrams”)", note:"Its “Smallpox in Boston, 1721” example is a real two-way table worth working through."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u11-l3", title:"Random variables and expected value", minutes:55,
   hook:{q:"A charity raffle sells 1,000 tickets at 5 each, with one prize of 2,000. On average, what is one ticket worth to the buyer, after paying for it?", options:["+2: the prize is bigger than the price","0: a raffle is fair","−3","−5: you lose what you paid"], answer:2, reveal:"**−3.** Each ticket has a 1 in 1,000 chance of 2,000, which is worth 2,000 ÷ 1,000 = 2 on average. Take away the 5 it cost, and a ticket is worth −3 on average. That long-run average is the **expected value**. (The charity keeps the other 3,000, which is the point of a charity raffle.) This lesson shows how to calculate expected values, and why the average isn’t the whole story."},
   goals:[
     "Tell discrete from continuous random variables, and write a probability distribution as a table",
     "Calculate an expected value and interpret it as a long-run average",
     "Use expected value to judge games, lotteries and insurance, including the house edge",
     "Calculate the standard deviation of a random variable and explain why spread matters for decisions",
     "Explain why totals over many repeats are predictable when single outcomes are not"
   ],
   learn:[
    {h:"Random variables: numbers that come from chance", body:[
      {lead:"Lessons 1 and 2 asked whether events happen. Often the question is “how many?” or “how much?”"},
      "A [[random-variable|random variable]] is a number whose value depends on chance: the number of heads in 10 flips, the number of customers in the next hour, the minutes a delivery takes, the money you win or lose on a bet. Textbooks name it with a capital letter, such as X, and its possible values with small letters, such as x.",
      {list:[
        "A [[discrete-variable|discrete]] random variable has separate values you can list, usually counts: 0, 1, 2, 3…",
        "A [[continuous-variable|continuous]] random variable can take any value in a range, such as a time or a weight. Lesson 5 handles those."
      ]},
      "A discrete random variable is described by its [[probability-distribution|probability distribution]]: every possible value with its probability. Each probability is between 0 and 1, and together they add to exactly 1.",
      "A small bakery has recorded how many custom cakes are ordered per day over the past 200 days (invented data), and uses the shares as probabilities:",
      {table:[["Cakes ordered (x)","Probability P(x)"],["0","0.10"],["1","0.25"],["2","0.35"],["3","0.20"],["4","0.10"],["Total","1.00"]]},
      {fig:'<svg viewBox="0 0 340 262"><text x="170" y="18" text-anchor="middle">Custom cakes ordered in a day</text><path class="d-ink" d="M16 196 L324 196" stroke-width="1.5"/><rect class="d-lup" x="30" y="156" width="48" height="40" stroke-width="1.5"/><text class="s" x="54" y="150" text-anchor="middle">0.10</text><text x="54" y="214" text-anchor="middle">0</text><rect class="d-lup" x="90" y="96" width="48" height="100" stroke-width="1.5"/><text class="s" x="114" y="90" text-anchor="middle">0.25</text><text x="114" y="214" text-anchor="middle">1</text><rect class="d-lup" x="150" y="56" width="48" height="140" stroke-width="1.5"/><text class="s" x="174" y="50" text-anchor="middle">0.35</text><text x="174" y="214" text-anchor="middle">2</text><rect class="d-lup" x="210" y="116" width="48" height="80" stroke-width="1.5"/><text class="s" x="234" y="110" text-anchor="middle">0.20</text><text x="234" y="214" text-anchor="middle">3</text><rect class="d-lup" x="270" y="156" width="48" height="40" stroke-width="1.5"/><text class="s" x="294" y="150" text-anchor="middle">0.10</text><text x="294" y="214" text-anchor="middle">4</text><path class="d-gold" d="M171 220 L160 240 L182 240 Z" stroke-width="2"/><text class="s" x="189" y="236">balance point:</text><text class="s" x="189" y="252">expected value 1.95</text><text class="s" x="54" y="236" text-anchor="middle">number of</text><text class="s" x="54" y="252" text-anchor="middle">cakes</text></svg>', alt:"A bar chart of the cake distribution: 0 cakes 0.10, 1 cake 0.25, 2 cakes 0.35, 3 cakes 0.20, 4 cakes 0.10. A small triangle under the axis at 1.95 marks the balance point, labelled expected value 1.95.", cap:"The expected value is where the chart would balance if the bars were weights on a ruler."}
    ]},
    {h:"Expected value: the long-run average", body:[
      "The [[expected-value|expected value]] of a random variable, written E(X) or μ (mu), is the average value you would get over a very long run of repeats. To calculate it, multiply each value by its probability and add:",
      {ex:"E(X) = Σ x × P(x)   (Σ = “add up”)\n\n0 × 0.10 = 0.00\n1 × 0.25 = 0.25\n2 × 0.35 = 0.70\n3 × 0.20 = 0.60\n4 × 0.10 = 0.40\n           ────\nE(X)     = 1.95 cakes per day", label:"Worked example", mono:true},
      "Why does that work? Over 100 typical days you’d expect about 10 days with 0 cakes, 25 with 1, 35 with 2, 20 with 3 and 10 with 4. That is (0 + 25 + 70 + 60 + 40) = 195 cakes in 100 days: 1.95 a day. An expected value is a [[weighted-mean|weighted mean]] of the possible values, with probabilities as the weights, and the law of large numbers (Lesson 1) says the real average settles near it.",
      {list:[
        "**It isn’t the most likely value.** The most likely day has 2 cakes.",
        "**It needn’t be a possible value.** No day has 1.95 cakes. It is an average, like “1.8 children per family”.",
        "**It is the balance point** of the distribution, as the figure shows."
      ]},
      "In a spreadsheet, with values in A2:A6 and probabilities in B2:B6, `=SUMPRODUCT(A2:A6,B2:B6)` multiplies each pair and adds them: 1.95. SUMPRODUCT works in Excel, Google Sheets, LibreOffice Calc and Numbers. In R:",
      {code:'x <- c(0, 1, 2, 3, 4)\np <- c(0.10, 0.25, 0.35, 0.20, 0.10)\nsum(p)        # 1, a good check\nmu <- sum(x * p)\nmu            # 1.95', lang:"r", label:"R"}
    ]},
    {h:"Fair games and the house edge", body:[
      "When the random variable is money won or lost, its expected value says what a bet is worth on average. A game is **fair** if its expected value is 0.",
      "Take a European-style roulette wheel: 37 pockets, of which 18 are red. A bet of 1 on red wins 1 if red comes up and loses the 1 otherwise:",
      {ex:"Bet 1 on red:\nE(gain) = (+1) × 18/37 + (−1) × 19/37\n        = −1/37 ≈ −0.027\n\nBet 1 on one number (pays 35 to 1):\nE(gain) = (+35) × 1/37 + (−1) × 36/37\n        = −1/37 ≈ −0.027", label:"Worked example", mono:true},
      "Both bets lose about 2.7% of the stake on average. That built-in negative expected value is the [[house-edge|house edge]]. American-style wheels add a second green pocket (38 in all), which nearly doubles it to 2/38 ≈ 5.3%.",
      "Lotteries work the same way. Here is an **invented**, simplified lottery: pick 6 numbers from 49; a ticket costs 2; matching all 6 wins 5,000,000 and matching exactly 3 wins 10. There are 13,983,816 equally likely sets of 6 numbers.",
      {ex:"Jackpot: 5,000,000 × 1/13,983,816\n           ≈ 0.3576\nThree:     10 × 0.01765 ≈ 0.1765\nPrizes on average       ≈ 0.5341\nE(gain) = 0.5341 − 2    ≈ −1.47\n          per ticket", label:"An invented lottery", mono:true},
      "Real lotteries have more prize levels and jackpots that change, but the pattern is typical: on average, a large share of the ticket price isn’t paid back. That doesn’t make playing irrational for everyone: people buy entertainment and hope. Expected value tells you the price of that hope."
    ]},
    {h:"Spread: the standard deviation of a random variable", body:[
      "Two bets with the same expected value can feel completely different. A bet on red wins or loses 1, almost an even chance. A bet on a single number almost always loses 1 but occasionally wins 35. Expected value can’t tell them apart; spread can.",
      "The [[standard-deviation|standard deviation]] (SD) of a random variable, written σ (sigma), measures the typical distance of its values from the expected value. Square each gap from μ, weight it by its probability, add, and take the square root:",
      {ex:"σ = √( Σ (x − μ)² × P(x) )\n\nCakes (μ = 1.95):\nx  (x − μ)²   × P(x)\n0  3.8025  × 0.10 = 0.380250\n1  0.9025  × 0.25 = 0.225625\n2  0.0025  × 0.35 = 0.000875\n3  1.1025  × 0.20 = 0.220500\n4  4.2025  × 0.10 = 0.420250\n                   ─────────\n              sum = 1.247500\nσ = √1.2475 ≈ 1.12 cakes", label:"Worked example", mono:true},
      "In R, `sqrt(sum((x - mu)^2 * p))` gives 1.116915. For the two roulette bets the SDs are about **1.00** (red) and **5.84** (single number): same average loss, very different rides.",
      {tip:"This is the same idea as the SD of data in Unit 5 ({{centre-spread}}), with probabilities in place of counts. The bakery would plan for 1.95 cakes on average, but with an SD of 1.12 it should be ready for 0 to 4."}
    ]},
    {h:"Insurance: paying for less spread", body:[
      "Insurance turns expected value round. Suppose (invented figures) phone insurance costs 60 a year, and there is a 5% chance in a year that the phone needs a 600 repair.",
      {table:[["Choice","Expected cost","Spread (SD)","Worst case"],["No insurance","0.05 × 600 = 30","about 131","600"],["Insurance","60 for sure","0","60"]]},
      "On average, insurance costs more (60 against 30). The insurer expects to keep the 30 difference per policy, which pays for running costs and profit. So why buy it? Because it removes the spread. If a sudden 600 bill would be hard to pay, swapping it for a certain 60 can be a sensible choice, even though it loses money on average. If you could easily cover 600, going without and saving the difference may suit you better.",
      {key:"Expected value tells you what happens on average over many repeats. When you only get one try, and a bad outcome would really hurt, the spread matters too."}
    ]},
    {h:"Many repeats: why casinos and insurers are confident", body:[
      "One bet is unpredictable. Thousands are not. When many independent bets are added up, the **expected values add** and the **standard deviation grows only with the square root** of the number of bets. Here is a player who bets 1 on red, again and again:",
      {table:[["Bets","Expected total","SD of total","Chance the player is ahead"],["100","−2.7","10.0","36%"],["1,000","−27","31.6","19%"],["10,000","−270","100","0.3%"]]},
      "Over 100 bets the expected loss is small next to the spread, so a third of players come out ahead. Over 10,000, the expected loss (270) is almost three SDs below zero, and almost nobody is ahead. For the casino, which takes millions of bets, the result is close to certain. Insurers rely on the same arithmetic across many independent policies.",
      {code:'set.seed(4)\nspins <- sample(c(1, -1), 10000, replace = TRUE,\n                prob = c(18, 19) / 37)\nmean(spins)   # -0.0276, close to -1/37\nsum(spins)    # -276, close to the expected -270', lang:"r", label:"R: 10,000 bets on red"},
      "That square-root growth is the same pattern you saw for coin flips in Lesson 1, and Unit 7 builds on it: the average of n independent values has an SD of σ ÷ √n, called the [[standard-error|standard error]] ({{sampling-distributions}})."
    ]}
   ],
   try:[
    {id:"t3u11-l3-x1", type:"number", q:"Over a long season, a football team’s goals per match have this distribution (invented): 0 goals 0.25, 1 goal 0.35, 2 goals 0.25, 3 goals 0.15. What is the expected number of goals per match?", answer:1.3, tol:0.001, unit:"goals", why:"E(X) = 0 × 0.25 + 1 × 0.35 + 2 × 0.25 + 3 × 0.15 = 0 + 0.35 + 0.50 + 0.45 = 1.30 goals per match.", wrongs:[
      {v:1.5, tol:0.001, why:"1.5 is the plain average of the values 0, 1, 2 and 3. They aren’t equally likely, so weight each by its probability."},
      {v:1, tol:0.001, why:"1 is the most likely number of goals (0.35). The expected value is the long-run average, which here is a little higher."},
      {v:0.25, tol:0.001, why:"0.25 is the average of the four probabilities. Multiply each value by its probability, then add."}
    ], hint2:"Multiply each number of goals by its probability, then add the four results."},
    {id:"t3u11-l3-x2", type:"mcq", q:"The team’s expected number of goals per match is 1.3. What does that mean?", options:[
      {t:"Over many matches, the team averages about 1.3 goals per match.", ok:true, why:"An expected value is a long-run average. Over 40 matches you would expect about 52 goals, with every single match ending 0, 1, 2 or 3."},
      {t:"The team will probably score 1.3 goals in its next match.", why:"No match can end with 1.3 goals. The expected value describes many matches, not one."},
      {t:"1.3 goals is the most common result.", why:"The most common result is 1 goal. The expected value is a weighted average, not the mode."},
      {t:"The team scores at least 1.3 goals in exactly half its matches.", why:"That would describe a median. Here the team scores 2 or more in 40% of matches."}
    ]},
    {id:"t3u11-l3-x3", type:"number", q:"At a school fair, you pay 1 to roll a die. If it shows 6 you receive 4 (and nothing otherwise). What is your expected **gain** per game, after paying? Give a decimal to two places.", answer:-0.33, tol:0.005, unit:"", why:"You receive 4 with probability 1/6, so you get back 4 ÷ 6 ≈ 0.67 on average. Subtract the 1 you paid: 0.67 − 1 = −0.33 per game.", wrongs:[
      {v:0.67, tol:0.005, why:"0.67 is what you get back on average. The question asks for the gain after paying the 1."},
      {v:3, tol:0.005, why:"3 is your gain when you win (4 − 1). You win only 1 time in 6."},
      {v:-1, tol:0.005, why:"−1 is what you lose on a game with no 6. Average over both outcomes."}
    ], hint2:"Average amount received = 4 × 1/6. Then subtract the cost."},
    {id:"t3u11-l3-x4", type:"sort", q:"Sort each bet by its expected value for **you**.", buckets:["Positive for you","Zero (fair)","Negative for you"], items:[
      {t:"A friend pays you 3 if a die shows 1 or 2; you pay 1 otherwise", b:0, why:"3 × 2/6 − 1 × 4/6 = 1 − 0.67 = +0.33 per game."},
      {t:"Pay 2 to roll a die; receive 12 if it shows 6", b:1, why:"You get back 12 × 1/6 = 2 on average, exactly the price. Expected gain 0."},
      {t:"Pay 1 to flip a fair coin; receive 2 on heads", b:1, why:"2 × 1/2 = 1 back on average, the same as the price."},
      {t:"Bet 1 on red at European-style roulette", b:2, why:"18/37 − 19/37 = −1/37 ≈ −0.027: the house edge."},
      {t:"Pay 5 for one of 1,000 raffle tickets with a single 2,000 prize", b:2, why:"2,000 ÷ 1,000 − 5 = −3 per ticket."},
      {t:"Receive 5 if a die shows 6, pay 0.50 otherwise", b:0, why:"5 × 1/6 − 0.50 × 5/6 = 0.83 − 0.42 = +0.42 per game."}
    ]},
    {id:"t3u11-l3-x5", type:"number", q:"A bet pays **+9** with probability 0.1 and **−1** with probability 0.9. Its expected value is 0. What is its standard deviation?", answer:3, tol:0.01, unit:"", why:"μ = 0. Squared gaps: (9 − 0)² = 81 and (−1 − 0)² = 1. Weighted: 81 × 0.1 + 1 × 0.9 = 8.1 + 0.9 = 9. σ = √9 = 3.", wrongs:[
      {v:9, tol:0.01, why:"9 is the variance (the weighted sum of squared gaps). Take the square root to get back to the original units: 3."},
      {v:0, tol:0.01, why:"An expected value of 0 doesn’t mean no spread. The outcomes are +9 and −1, far from 0."},
      {v:5, tol:0.01, why:"5 is the plain average of the two distances (9 and 1). Square them, weight by probability, add, then take the square root."}
    ], hint2:"σ = √( Σ (x − μ)² × P(x) ), with μ = 0."},
    {id:"t3u11-l3-x6", type:"mcq", q:"Lucía can buy a 2-year warranty on a washing machine for 90. She estimates a 10% chance of a 500 repair in that time (and no other repairs). Which statement is right?", options:[
      {t:"The warranty costs 40 more than expected repairs, on average.", ok:true, why:"0.1 × 500 = 50 < 90. She pays 40 on average to remove a 10% chance of a 500 bill: a trade of average cost for less spread. It is worth it mainly if a 500 bill would be hard for her to pay."},
      {t:"It is a good deal, because 500 is much more than 90.", why:"The 500 happens only 10% of the time. Weighted by its probability, it is worth 50, less than the 90 price."},
      {t:"Expected value proves she should never buy warranties.", why:"Expected value shows the average cost, not whether reducing risk is worth it to her. Spread and her ability to pay matter too."},
      {t:"The warranty is fair, because the seller takes on all the risk.", why:"Fair would mean an expected value of 0 for her. The price (90) is above the expected repair cost (50)."}
    ]},
    {id:"t3u11-l3-x7", type:"mcq", q:"A casino’s roulette tables take about a million 1-unit bets on red in a month. Each bet has expected value −1/37 for the player. Why is the casino’s monthly result so predictable, when each player’s is not?", options:[
      {t:"Expected values add, while the SD of the total grows only with the square root of the number of bets.", ok:true, why:"A million bets: expected total for players about −27,000, SD about 1,000. The edge dominates the chance wobble."},
      {t:"The wheel corrects itself, so wins and losses even out over the month.", why:"Nothing corrects itself; that’s the gambler’s fallacy. Random wobble is swamped, not cancelled."},
      {t:"Players lose more often as the month goes on.", why:"The chance of red is 18/37 on every spin, early or late."},
      {t:"With a million bets the house edge becomes larger.", why:"The edge per bet stays 1/37. What changes is how small the wobble is compared with the total."}
    ]},
    {id:"t3u11-l3-x8", type:"explain", q:"Phone insurance costs 60 a year. Without it, there’s a 5% chance in a year of needing a 600 repair. Explain why buying the insurance can be sensible even though it costs more on average.", model:"Without insurance the expected cost is 0.05 × 600 = **30**, half the 60 premium, so on average insurance loses money; the insurer keeps the difference. But expected value describes the average over many repeats. You get one year, and the outcome is either 0 or 600: a large spread (an SD of about 131) with a painful worst case. Insurance swaps that spread for a certain 60. If a sudden 600 bill would really hurt, paying for less spread is reasonable; if you could easily cover it, going without may suit you better.", points:["Calculates the expected cost without insurance (30)", "Says insurance costs more on average", "Explains that the spread or worst case matters when you get one try", "Says the choice depends on whether you could afford the bad outcome"]}
   ],
   apply:{intro:"Build an expected value and SD calculator in a spreadsheet, then simulate a casino’s month.", tasks:[
     {t:"Expected value and SD in a spreadsheet", app:{
       ms:["Type `Cakes` in A1 and `P` in B1. Enter 0 to 4 in A2:A6 and 0.10, 0.25, 0.35, 0.20, 0.10 in B2:B6. In B7 type `=SUM(B2:B6)` to check they add to 1.","In E1 type `=SUMPRODUCT(A2:A6,B2:B6)`. You should see 1.95.","In C1 type `Gap² × P`, and in C2 `=(A2-$E$1)^2*B2`; fill down to C6.","In E2 type `=SQRT(SUM(C2:C6))`. You should see about 1.117.","Now imagine a festival week: change the probabilities to 0.05, 0.15, 0.30, 0.30, 0.20 (still adding to 1). What happens to the expected value and SD?"],
       google:["Type `Cakes` in A1 and `P` in B1. Enter 0 to 4 in A2:A6 and 0.10, 0.25, 0.35, 0.20, 0.10 in B2:B6. In B7 type `=SUM(B2:B6)` to check they add to 1.","In E1 type `=SUMPRODUCT(A2:A6,B2:B6)`. You should see 1.95.","In C1 type `Gap² × P`, and in C2 `=(A2-$E$1)^2*B2`; fill down to C6.","In E2 type `=SQRT(SUM(C2:C6))`. You should see about 1.117.","Now imagine a festival week: change the probabilities to 0.05, 0.15, 0.30, 0.30, 0.20 (still adding to 1). What happens to the expected value and SD?"],
       libre:["Type `Cakes` in A1 and `P` in B1. Enter 0 to 4 in A2:A6 and 0.10, 0.25, 0.35, 0.20, 0.10 in B2:B6. In B7 type `=SUM(B2:B6)` to check they add to 1.","In E1 type `=SUMPRODUCT(A2:A6;B2:B6)`. You should see 1.95.","In C1 type `Gap² × P`, and in C2 `=(A2-$E$1)^2*B2`; fill down to C6.","In E2 type `=SQRT(SUM(C2:C6))`. You should see about 1.117.","Now imagine a festival week: change the probabilities to 0.05, 0.15, 0.30, 0.30, 0.20 (still adding to 1). What happens to the expected value and SD?"],
       apple:["Type `Cakes` in A1 and `P` in B1. Enter 0 to 4 in A2:A6 and 0.10, 0.25, 0.35, 0.20, 0.10 in B2:B6. In B7 type `=SUM(B2:B6)` to check they add to 1.","In E1 type `=SUMPRODUCT(A2:A6,B2:B6)`. You should see 1.95.","In C1 type `Gap² × P`, and in C2 `=(A2-$E$1)^2*B2`; fill down to C6. Numbers keeps `$E$1` fixed when you fill.","In E2 type `=SQRT(SUM(C2:C6))`. You should see about 1.117.","Now imagine a festival week: change the probabilities to 0.05, 0.15, 0.30, 0.30, 0.20 (still adding to 1). What happens to the expected value and SD?"]},
       write:"E(X) = … SD = … Festival week: E(X) = … SD = …"},
     {t:"Simulate 1,000 bets on red", how:["On a new sheet, type `=IF(RAND()<18/37,1,-1)` in A2 and fill down to A1001: 1,000 bets of 1 on red (use `;` instead of `,` if your app asks for it).","In C1 type `=SUM(A2:A1001)`: the player’s total. The expected total is −27, with an SD of about 32.","Recalculate 10 times (F9, or edit an empty cell) and write down each total. How many of your 10 players ended ahead?","Compare with the table in the lesson: about 19% of players are ahead after 1,000 bets."], write:"My 10 totals… Number ahead…"},
     {t:"Find the expected value of something real", how:["Find a real raffle, prize draw or competition whose rules list the prizes and the number of tickets or entries (charity raffles and community draws often publish them). Or use a warranty or insurance quote you have been offered.","Calculate the expected value per ticket, or the expected repair cost against the price, using your best estimate of the probabilities.","Write two sentences: what the expected value says, and what it leaves out (spread, how much a loss would hurt, enjoyment)."], write:"Prizes and chances… Expected value… What it leaves out…"}
   ], proof:"A spreadsheet that calculates E(X) = 1.95 and SD ≈ 1.12 for the cake distribution (and your festival version), ten simulated totals of 1,000 roulette bets, and an expected value worked out for a real raffle, draw or warranty."},
   read:[
     {book:"ostat", where:"Chapter 4, Section 4.1 “Probability Distribution Function (PDF) for a Discrete Random Variable” and Section 4.2 “Mean or Expected Value and Standard Deviation”", note:"Section 4.2 has several worked games and an expected-value table method."},
     {book:"openintro", where:"Chapter 3, Section 3.4 “Random variables” (3.4.1 “Expectation” and 3.4.2 “Variability in random variables”)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u11-l4", title:"The binomial distribution", minutes:60,
   hook:{q:"A quiz has 10 multiple-choice questions, each with 4 options. Someone guesses every answer at random. Which number of right answers is **most likely**?", options:["0","2","2.5","5"], answer:1, reveal:"**2.** It happens about 28% of the time (0.282), more often than any other number. 2.5 is the **average** number right (10 × 0.25), but nobody gets half a question right. And 5 or more right happens only about 8% of the time. Counts like this follow the **binomial distribution**, which this lesson builds first by simulation, then by formula."},
   goals:[
     "Check whether a situation fits the binomial model, using the four BINS conditions",
     "Simulate a binomial count and compare the results with exact probabilities",
     "Calculate binomial probabilities with the formula, BINOM.DIST, dbinom and pbinom, including “at least” and “between”",
     "Use np and √(np(1 − p)) for the centre and spread, and describe the shape",
     "Use a binomial probability to judge whether a claim fits the data"
   ],
   learn:[
    {h:"Counting successes: the binomial setting", body:[
      {lead:"Many questions count how often something happens in a fixed number of tries: right answers when guessing, seeds that sprout, customers who buy, parcels that arrive late."},
      "Each single try with two possible outcomes is a [[bernoulli-trial|Bernoulli trial]]. Call the outcome you are counting a **success** and the other a **failure**, even when the “success” is something bad, like a faulty part. The number of successes X in n trials follows a [[binomial-distribution|binomial distribution]] when four conditions hold. A memory aid is **BINS**:",
      {ol:[
        "**Binary**: each trial is a success or a failure.",
        "**Independent**: trials don’t affect each other.",
        "**Number** of trials, n, is fixed in advance.",
        "**Same** probability of success, p, on every trial."
      ]},
      "OpenStax writes this as X ~ B(n, p): “X has a binomial distribution with n trials and success probability p”. Guessing 10 four-option questions gives X ~ B(10, 0.25).",
      {table:[["Situation","Binomial?","Why"],["Right answers when guessing 10 four-option questions","Yes","n = 10, p = 0.25, guesses independent"],["Seeds that sprout out of 20 planted","Roughly","If each seed has the same chance and they don’t affect each other"],["Rolling a die until the first 6","No","n isn’t fixed: you count rolls, not successes"],["Women among 4 people picked from a group of 6 women and 4 men","No","Picking without replacement from a small group changes p each time"],["Total minutes of 10 phone calls","No","Not a count of successes"]]},
      {tip:"Sampling without replacement from a **large** population is close enough to independent: picking 50 people from a city of a million barely changes the chances for the next pick. OpenIntro’s rule of thumb is a sample of under 10% of the population."}
    ]},
    {h:"Simulate first", body:[
      "Before any formula, let the computer guess. Each simulated quiz takes 10 guesses, each right with probability 0.25, and counts the right answers. Repeat 10,000 times:",
      {code:'set.seed(1)\nright <- replicate(10000,\n  sum(sample(c(1, 0), 10, replace = TRUE,\n             prob = c(0.25, 0.75))))\ntable(right) / 10000\nmean(right)   # 2.5081', lang:"r", label:"R"},
      "In a spreadsheet, put `=IF(RAND()<0.25,1,0)` in ten cells of a row, add them with SUM, and fill the row down a few hundred times; then count how often each total appears with COUNTIF.",
      {table:[["Right answers","Simulated share (10,000 quizzes)","Exact probability"],["0","0.0498","0.0563"],["1","0.1943","0.1877"],["2","0.2804","0.2816"],["3","0.2517","0.2503"],["4","0.1436","0.1460"],["5","0.0613","0.0584"],["6","0.0158","0.0162"],["7 or more","0.0031","0.0035"]]},
      "The simulation lands within about one percentage point of the exact values, and its average (2.51) is close to 2.5. More runs would bring it closer still: the law of large numbers again. The exact column comes from the formula in the next section."
    ]},
    {h:"The formula: count the paths", body:[
      "Start small: three guesses, each right (R) with probability 0.25 and wrong (W) with probability 0.75. What is the chance of exactly 2 right?",
      {fig:'<svg viewBox="0 0 340 312"><text x="170" y="18" text-anchor="middle">Three guesses, each right with p = 0.25</text><text class="s" x="300" y="52" text-anchor="middle">R = right</text><text class="s" x="300" y="68" text-anchor="middle">W = wrong</text><circle class="d-panel" cx="170" cy="40" r="6" stroke-width="1.5"/><path class="d-ink" d="M170 46 L90 92" stroke-width="1.5"/><circle class="d-sage" cx="90" cy="100" r="9" stroke-width="1.5"/><text class="s" x="90" y="104" text-anchor="middle">R</text><path class="d-ink" d="M170 46 L250 92" stroke-width="1.5"/><circle class="d-panel" cx="250" cy="100" r="9" stroke-width="1.5"/><text class="s" x="250" y="104" text-anchor="middle">W</text><path class="d-ink" d="M90 106 L50 152" stroke-width="1.5"/><circle class="d-sage" cx="50" cy="160" r="9" stroke-width="1.5"/><text class="s" x="50" y="164" text-anchor="middle">R</text><path class="d-ink" d="M90 106 L130 152" stroke-width="1.5"/><circle class="d-panel" cx="130" cy="160" r="9" stroke-width="1.5"/><text class="s" x="130" y="164" text-anchor="middle">W</text><path class="d-ink" d="M250 106 L210 152" stroke-width="1.5"/><circle class="d-sage" cx="210" cy="160" r="9" stroke-width="1.5"/><text class="s" x="210" y="164" text-anchor="middle">R</text><path class="d-ink" d="M250 106 L290 152" stroke-width="1.5"/><circle class="d-panel" cx="290" cy="160" r="9" stroke-width="1.5"/><text class="s" x="290" y="164" text-anchor="middle">W</text><path class="d-ink" d="M50 166 L30 212" stroke-width="1.5"/><path class="d-ink" d="M50 166 L70 212" stroke-width="1.5"/><path class="d-ink" d="M130 166 L110 212" stroke-width="1.5"/><path class="d-ink" d="M130 166 L150 212" stroke-width="1.5"/><path class="d-ink" d="M210 166 L190 212" stroke-width="1.5"/><path class="d-ink" d="M210 166 L230 212" stroke-width="1.5"/><path class="d-ink" d="M290 166 L270 212" stroke-width="1.5"/><path class="d-ink" d="M290 166 L310 212" stroke-width="1.5"/><rect class="d-panel" x="12" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="30" y="225" text-anchor="middle">RRR</text><text x="30" y="250" text-anchor="middle">3</text><rect class="d-rose" x="52" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="70" y="225" text-anchor="middle">RRW</text><text x="70" y="250" text-anchor="middle">2</text><rect class="d-rose" x="92" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="110" y="225" text-anchor="middle">RWR</text><text x="110" y="250" text-anchor="middle">2</text><rect class="d-panel" x="132" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="150" y="225" text-anchor="middle">RWW</text><text x="150" y="250" text-anchor="middle">1</text><rect class="d-rose" x="172" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="190" y="225" text-anchor="middle">WRR</text><text x="190" y="250" text-anchor="middle">2</text><rect class="d-panel" x="212" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="230" y="225" text-anchor="middle">WRW</text><text x="230" y="250" text-anchor="middle">1</text><rect class="d-panel" x="252" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="270" y="225" text-anchor="middle">WWR</text><text x="270" y="250" text-anchor="middle">1</text><rect class="d-panel" x="292" y="210" width="36" height="22" rx="4" stroke-width="1.5"/><text class="s" x="310" y="225" text-anchor="middle">WWW</text><text x="310" y="250" text-anchor="middle">0</text><text class="s" x="10" y="268">number right</text><text class="s" x="170" y="288" text-anchor="middle">Exactly 2 right: 3 paths, each 0.25 × 0.25 × 0.75</text><text x="170" y="304" text-anchor="middle">3 × 0.046875 = 0.140625</text></svg>', alt:"A tree with three levels of branches, R for right and W for wrong, ending in eight paths: RRR, RRW, RWR, RWW, WRR, WRW, WWR, WWW, with the number right under each (3, 2, 2, 1, 2, 1, 1, 0). The three paths with exactly 2 right (RRW, RWR, WRR) are highlighted. Below: each has probability 0.25 × 0.25 × 0.75, and 3 × 0.046875 = 0.140625.", cap:"Every path with 2 right has the same probability. Count the paths, then multiply."},
      "Each path with exactly 2 right has probability 0.25 × 0.25 × 0.75 = 0.046875, because the guesses are independent (multiply along the path). There are 3 such paths, so P(X = 2) = 3 × 0.046875 = 0.140625.",
      "The general recipe does the same thing for any n and k:",
      {ex:"P(X = k) = C(n, k) × pᵏ × (1 − p)ⁿ⁻ᵏ\n\nC(n, k): the number of paths\n  with k successes\npᵏ × (1 − p)ⁿ⁻ᵏ: the probability\n  of each such path\n\nGuessing, n = 10, k = 2:\nC(10, 2) = 45\n0.25² = 0.0625    0.75⁸ = 0.1001\nP(X = 2) = 45 × 0.0625 × 0.1001\n         = 0.2816", label:"The binomial formula", mono:true},
      "The [[binomial-coefficient|binomial coefficient]] C(n, k), read “n choose k”, counts the ways to choose which k of the n trials are successes. Spreadsheets calculate it with `=COMBIN(10,2)` and R with `choose(10, 2)`; both give 45.",
      {fig:'<svg viewBox="0 0 340 262"><text x="170" y="18" text-anchor="middle">Right answers when guessing 10 questions</text><text class="s" x="170" y="34" text-anchor="middle">(4 options each: p = 0.25)</text><path class="d-ink" d="M16 200 L326 200" stroke-width="1.5"/><rect class="d-lup" x="24" y="171.8" width="24" height="28.2" stroke-width="1.2"/><text class="s" x="36" y="217" text-anchor="middle">0</text><text class="s" x="36" y="165.8" text-anchor="middle">.056</text><rect class="d-lup" x="52.4" y="106.1" width="24" height="93.9" stroke-width="1.2"/><text class="s" x="64.4" y="217" text-anchor="middle">1</text><text class="s" x="64.4" y="100.1" text-anchor="middle">.188</text><rect class="d-lup" x="80.8" y="59.2" width="24" height="140.8" stroke-width="1.2"/><text class="s" x="92.8" y="217" text-anchor="middle">2</text><text class="s" x="92.8" y="53.2" text-anchor="middle">.282</text><rect class="d-lup" x="109.2" y="74.9" width="24" height="125.1" stroke-width="1.2"/><text class="s" x="121.2" y="217" text-anchor="middle">3</text><text class="s" x="121.2" y="68.9" text-anchor="middle">.250</text><rect class="d-lup" x="137.6" y="127" width="24" height="73" stroke-width="1.2"/><text class="s" x="149.6" y="217" text-anchor="middle">4</text><text class="s" x="149.6" y="121" text-anchor="middle">.146</text><rect class="d-rose" x="166" y="170.8" width="24" height="29.2" stroke-width="1.2"/><text class="s" x="178" y="217" text-anchor="middle">5</text><rect class="d-rose" x="194.4" y="191.9" width="24" height="8.1" stroke-width="1.2"/><text class="s" x="206.4" y="217" text-anchor="middle">6</text><rect class="d-rose" x="222.8" y="198.5" width="24" height="1.5" stroke-width="1.2"/><text class="s" x="234.8" y="217" text-anchor="middle">7</text><rect class="d-rose" x="251.2" y="199.8" width="24" height="0.6" stroke-width="1.2"/><text class="s" x="263.2" y="217" text-anchor="middle">8</text><rect class="d-rose" x="279.6" y="200" width="24" height="0.6" stroke-width="1.2"/><text class="s" x="291.6" y="217" text-anchor="middle">9</text><rect class="d-rose" x="308" y="200" width="24" height="0.6" stroke-width="1.2"/><text class="s" x="320" y="217" text-anchor="middle">10</text><text class="s" x="250" y="128" text-anchor="middle">5 or more right:</text><text class="s" x="250" y="144" text-anchor="middle">0.078 in total</text><path class="d-ink" d="M250 150 L232 176" stroke-width="1"/><text class="s" x="170" y="240" text-anchor="middle">number of right answers (k)</text></svg>', alt:"A bar chart of the number of right answers when guessing 10 questions with p = 0.25. Bar heights: 0 right 0.056, 1 right 0.188, 2 right 0.282, 3 right 0.250, 4 right 0.146, then small bars for 5 to 10. The bars for 5 or more are shaded differently and labelled 0.078 in total.", cap:"The whole binomial distribution B(10, 0.25). It is skewed right: most guessers get 1 to 4 right."}
    ]},
    {h:"BINOM.DIST, dbinom and pbinom", body:[
      "Nobody does this by hand for long. Spreadsheets and R give exact answers. The key word is [[cumulative-probability|cumulative]]: a cumulative probability adds up everything **up to and including** k, that is, P(X ≤ k).",
      {ex:"Exactly 2                → 0.2816\n=BINOM.DIST(2,10,0.25,FALSE)\ndbinom(2, 10, 0.25)\n\nAt most 4 (0 to 4)       → 0.9219\n=BINOM.DIST(4,10,0.25,TRUE)\npbinom(4, 10, 0.25)\n\nAt least 5 (5 to 10)     → 0.0781\n=1-BINOM.DIST(4,10,0.25,TRUE)\npbinom(4, 10, 0.25,\n       lower.tail = FALSE)\n\nFrom 2 to 4              → 0.6778\n=BINOM.DIST(4,10,0.25,TRUE)\n -BINOM.DIST(1,10,0.25,TRUE)\n (type it as one formula)\npbinom(4, 10, 0.25) -\n  pbinom(1, 10, 0.25)", label:"Spreadsheet and R, for X ~ B(10, 0.25)", mono:true},
      "The arguments are in the same order in both: number of successes, number of trials, probability. FALSE (or `dbinom`) gives “exactly”; TRUE (or `pbinom`) gives “at most”.",
      {warn:"**The off-by-one trap.** “At least 5” is everything except 0 to 4, so it is 1 − P(X ≤ **4**). Writing 1 − P(X ≤ 5) gives P(6 or more) = 0.0197 instead of 0.0781. In R, `lower.tail = FALSE` gives P(X > q), strictly greater, so “at least 5” also uses q = 4. Say the question in words (“5, 6, … or 10”) before you type."},
      {list:[
        "**Excel** (2010 and later), **Google Sheets** and **LibreOffice Calc** all have BINOM.DIST with these four arguments. The older name BINOMDIST works in all three too.",
        "**Numbers** has only BINOMDIST: `=BINOMDIST(2,10,0.25,FALSE)`.",
        "Excel requires the fourth argument; Google Sheets lets you leave it out and then assumes FALSE. Always type it, so the formula means the same everywhere.",
        "Excel (2013 and later) and Google Sheets also have BINOM.DIST.RANGE for “between” questions; LibreOffice Calc has a similar function called B, and Numbers has neither. The subtraction above works in every app."
      ]},
      {code:'dbinom(2, size = 10, prob = 0.25)        # 0.2815676\npbinom(4, 10, 0.25)                      # 0.9218731\npbinom(4, 10, 0.25, lower.tail = FALSE)  # 0.07812691\nround(dbinom(0:10, 10, 0.25), 4)         # the whole table\nbarplot(dbinom(0:10, 10, 0.25), names.arg = 0:10)', lang:"r", label:"R"},
      {lab:"dl-r-binom", t:"Practise: binomial chances with dbinom and pbinom in the Data Lab"}
    ]},
    {h:"Centre, spread and shape", body:[
      "A binomial count has a simple mean and standard deviation (OpenStax Section 4.3):",
      {ex:"Mean  μ = n × p\nSD    σ = √( n × p × (1 − p) )\n\nGuessing, n = 10, p = 0.25:\nμ = 2.5 right answers\nσ = √(10 × 0.25 × 0.75)\n  = √1.875 ≈ 1.37", label:"Mean and SD", mono:true},
      "These match the expected value and SD from Lesson 3; for the binomial they just come out neatly.",
      {list:[
        "**Shape.** With p = 0.5 the distribution is symmetric. With p far from 0.5 and small n, it is skewed towards the long side (guessing is skewed right).",
        "**Large n.** As n grows, the bars form a bell shape. A common check is the **success–failure condition**: np ≥ 10 and n(1 − p) ≥ 10. For n = 100 and p = 0.25, np = 25 and n(1 − p) = 75, so the distribution (mean 25, SD 4.33) looks close to normal. Lesson 5 uses this.",
        "**Shares instead of counts.** Divide by n: the share of successes has mean p and SD √(p(1 − p) ÷ n). For 100 guesses that is 0.25 with SD 0.043. Unit 7 calls this the standard error of a proportion, and it is the basis of a poll’s [[margin-of-error|margin of error]]."
      ]}
    ]},
    {h:"Does the claim fit? A first taste of testing", body:[
      "A seed packet claims that 90% of its seeds sprout. Ana plants 20 and only 14 sprout. Bad luck, or a false claim?",
      "Ask: **if the claim were true**, how often would 14 or fewer sprout? If each seed sprouts independently with p = 0.9, then X ~ B(20, 0.9), with mean 18 and SD 1.34:",
      {ex:"P(X ≤ 14) = 0.0113\n=BINOM.DIST(14,20,0.9,TRUE)\npbinom(14, 20, 0.9)\n\nAbout 1 packet in 90 would do this\nbadly if the claim were true.", label:"Worked example", mono:true},
      "That is surprising enough to doubt the claim, or at least one of the BINS conditions: old seeds, cold soil or a waterlogged tray could lower p, and seeds sharing one tray aren’t fully independent. Compare a result of 17 sprouts: P(X ≤ 17) = 0.323, which happens about a third of the time and is no evidence at all.",
      "This reasoning, “how often would a result this extreme happen if the claim were true?”, is the logic of a hypothesis test, and the 0.0113 is a [[p-value|p-value]]. Unit 7 develops it ({{hypothesis-tests}}), and Research Skills Unit 3 shows how papers report it ({{reading-results}}).",
      {key:"A small probability under the claim is evidence against the claim, not proof. Check the conditions before blaming the claim."}
    ]}
   ],
   try:[
    {id:"t3u11-l4-x1", type:"sort", q:"Does each count fit the binomial model (fixed n, two outcomes, independent trials, same p)?", buckets:["Binomial","Not binomial"], items:[
      {t:"Number of heads in 12 flips of a fair coin", b:0, why:"n = 12 fixed, heads or tails, independent flips, p = 0.5 each time."},
      {t:"Number of 6s in 30 rolls of a die", b:0, why:"n = 30, “6” or “not 6”, independent rolls, p = 1/6 every roll."},
      {t:"How many of 50 randomly chosen adults in a city of a million support a proposal", b:0, why:"50 is a tiny share of a million, so picks are close to independent with nearly the same p: binomial is a good model."},
      {t:"Number of rolls needed to get the first 6", b:1, why:"The number of trials isn’t fixed; this counts rolls until a success (a geometric distribution)."},
      {t:"Number of red cards among 5 cards dealt from one 52-card pack", b:1, why:"Cards aren’t put back, so after each red card the chance of red changes (26/52, then 25/51…)."},
      {t:"Total minutes of 10 phone calls", b:1, why:"A total of times isn’t a count of successes in yes/no trials."}
    ]},
    {id:"t3u11-l4-x2", type:"number", q:"A courier’s parcels are each late with probability 0.1, independently. In a round of 12 parcels, what is the probability that **exactly 2** are late? Give a decimal to three places.", answer:0.230, tol:0.001, unit:"", why:"P(X = 2) = C(12, 2) × 0.1² × 0.9¹⁰ = 66 × 0.01 × 0.3487 = 0.230. In a spreadsheet: `=BINOM.DIST(2,12,0.1,FALSE)`; in R: `dbinom(2, 12, 0.1)`.", wrongs:[
      {v:0.0035, tol:0.0002, why:"0.0035 is 0.1² × 0.9¹⁰, the probability of one particular order (say, the first two late). There are C(12, 2) = 66 such orders."},
      {v:0.889, tol:0.001, why:"0.889 is P(X ≤ 2), the cumulative probability (TRUE). “Exactly 2” needs FALSE, or dbinom."},
      {v:0.341, tol:0.001, why:"0.341 is P(X ≥ 2), at least 2 late. The question asks for exactly 2."}
    ], hint2:"C(12, 2) = 66. Multiply by 0.1² and by 0.9¹⁰."},
    {id:"t3u11-l4-x3", type:"mcq", q:"Same courier: 12 parcels, each late with probability 0.1. Which formula gives the probability that **at least 3** are late?", options:[
      {t:"=1-BINOM.DIST(2,12,0.1,TRUE)", ok:true, why:"“At least 3” is everything except 0, 1 and 2, so subtract P(X ≤ 2) from 1. The answer is 0.111."},
      {t:"=1-BINOM.DIST(3,12,0.1,TRUE)", why:"That subtracts P(X ≤ 3), so it gives P(4 or more) = 0.026. The off-by-one trap."},
      {t:"=BINOM.DIST(3,12,0.1,FALSE)", why:"FALSE gives exactly 3 late (0.085), not 3 or more."},
      {t:"=BINOM.DIST(3,12,0.1,TRUE)", why:"TRUE gives P(X ≤ 3), at most 3 (0.974): the opposite end."}
    ]},
    {id:"t3u11-l4-x4", type:"number", q:"In a taste test, 8 people each choose between two drinks that are actually identical, so each picks drink A with probability 0.5, independently. What is the probability that **6 or more** pick drink A? Give a decimal to three places.", answer:0.145, tol:0.001, unit:"", why:"P(X ≥ 6) = P(6) + P(7) + P(8) = (28 + 8 + 1) ÷ 256 = 37 ÷ 256 ≈ 0.145. In a spreadsheet: `=1-BINOM.DIST(5,8,0.5,TRUE)`; in R: `pbinom(5, 8, 0.5, lower.tail = FALSE)`.", wrongs:[
      {v:0.109, tol:0.001, why:"0.109 is P(X = 6) only. “6 or more” also includes 7 and 8."},
      {v:0.035, tol:0.001, why:"0.035 is P(X ≥ 7). That is the off-by-one trap: subtract P(X ≤ 5), not P(X ≤ 6)."},
      {v:0.855, tol:0.001, why:"0.855 is P(X ≤ 5), the complement. Subtract it from 1."}
    ], hint2:"1 − P(X ≤ 5), with n = 8 and p = 0.5."},
    {id:"t3u11-l4-x5", type:"match", q:"Match each R call (for 10 trials with p = 0.2) to what it calculates.", pairs:[
      ["dbinom(3, 10, 0.2)","P(exactly 3 successes)","The d functions give the probability of one exact value."],
      ["pbinom(3, 10, 0.2)","P(3 or fewer successes)","The p functions are cumulative: everything up to and including 3."],
      ["pbinom(3, 10, 0.2, lower.tail = FALSE)","P(4 or more successes)","lower.tail = FALSE gives P(X > 3), which for counts means 4 or more."],
      ["choose(10, 3)","The number of ways to pick which 3 of the 10 trials succeed","The binomial coefficient: 120 here."]
    ]},
    {id:"t3u11-l4-x6", type:"number", q:"A help line takes 400 calls a week. Each call, independently, has a 0.15 chance of being a complaint. What is the **standard deviation** of the weekly number of complaints? Give one decimal place.", answer:7.1, tol:0.05, unit:"complaints", why:"σ = √(n × p × (1 − p)) = √(400 × 0.15 × 0.85) = √51 ≈ 7.1. The mean is 400 × 0.15 = 60, so most weeks have roughly 46 to 74 complaints.", wrongs:[
      {v:60, tol:0.05, why:"60 is the mean, n × p. The question asks for the SD."},
      {v:51, tol:0.05, why:"51 is the variance, n × p × (1 − p). Take its square root."},
      {v:0.0179, tol:0.0005, why:"0.0179 is the SD of the **share** of complaints, √(p(1 − p) ÷ n). For the count, use √(np(1 − p))."}
    ], hint2:"σ = √(n × p × (1 − p))."},
    {id:"t3u11-l4-x7", type:"mcq", q:"A shop’s website claims that 30% of visitors buy something. In a random sample of 50 visitors, only 5 bought. If the claim were true, P(X ≤ 5) = `pbinom(5, 50, 0.3)` = 0.0007. What is the best conclusion?", options:[
      {t:"The data cast serious doubt on the 30% claim.", ok:true, why:"A result this low would be very rare if 30% were true (for visitors like these). Under the claim, the expected count is 15 with SD 3.2; 5 or fewer happens about 7 times in 10,000. That is strong evidence against 30%, though not proof."},
      {t:"The claim is proved false, because 5 is less than 15.", why:"Any count can occur by chance. A small probability is evidence against the claim, not proof."},
      {t:"The claim is probably true, because 0.0007 is very small.", why:"The small probability is the chance of data this low **if the claim were true**. Small means the claim fits the data badly."},
      {t:"Nothing can be said from a sample of 50.", why:"50 visitors is plenty to see that 5 buyers is far below what a 30% rate would usually give."}
    ]},
    {id:"t3u11-l4-x8", type:"explain", q:"A courier claims that 95% of its parcels arrive on time. Of 40 parcels you sent, 34 arrived on time. Explain how a binomial probability helps you judge the claim, and why the result isn’t proof.", hint:"Assume the claim is true. How often would 34 or fewer happen?", model:"Assume the claim is true and ask how often a result this bad would happen. If each parcel is on time independently with p = 0.95, the number on time out of 40 is binomial, B(40, 0.95), with mean 38. The chance of **34 or fewer** is `pbinom(34, 40, 0.95)` ≈ 0.014, about 1 time in 70. That’s surprising enough to doubt the claim. But it’s evidence, not proof: a rare result can still happen, and the conditions may fail, for example if parcels on one delayed van aren’t independent.", points:["Assumes the claim is true and models the count as binomial (n = 40, p = 0.95)", "Calculates the chance of 34 or fewer (not exactly 34), about 0.014", "Says a small probability is evidence against the claim", "Says it isn’t proof, and the independence (BINS) conditions should be checked"]}
   ],
   apply:{intro:"Build a binomial table and chart, check it against a simulation, then try a claim of your own.", tasks:[
     {t:"A binomial table and chart", app:{
       ms:["Type `k` in A1 and the numbers 0 to 10 in A2:A12.","In B1 type `P(X = k)` and in B2 `=BINOM.DIST(A2,10,0.25,FALSE)`; fill down to B12. B4 (k = 2) should show 0.2816.","In C1 type `P(X ≤ k)` and in C2 `=BINOM.DIST(A2,10,0.25,TRUE)`; fill down. C6 (k = 4) should show 0.9219.","Check that `=SUM(B2:B12)` gives 1. Then select B1:B12 and choose **Insert → Insert Column or Bar Chart** to draw the distribution.","Change 0.25 to 0.5 in every formula (or put p in a cell such as E1 and use `$E$1`). How does the shape change?"],
       google:["Type `k` in A1 and the numbers 0 to 10 in A2:A12.","In B1 type `P(X = k)` and in B2 `=BINOM.DIST(A2,10,0.25,FALSE)`; fill down to B12. B4 (k = 2) should show 0.2816.","In C1 type `P(X ≤ k)` and in C2 `=BINOM.DIST(A2,10,0.25,TRUE)`; fill down. C6 (k = 4) should show 0.9219.","Check that `=SUM(B2:B12)` gives 1. Then select B1:B12 and choose **Insert → Chart**, with **Column chart** as the type.","Change 0.25 to 0.5 (best: put p in E1 and use `$E$1` in the formulas). How does the shape change?"],
       libre:["Type `k` in A1 and the numbers 0 to 10 in A2:A12.","In B1 type `P(X = k)` and in B2 `=BINOM.DIST(A2;10;0.25;0)`; fill down to B12 (0 means FALSE). B4 (k = 2) should show 0.2816.","In C1 type `P(X ≤ k)` and in C2 `=BINOM.DIST(A2;10;0.25;1)`; fill down. C6 (k = 4) should show 0.9219.","Check that `=SUM(B2:B12)` gives 1. Then select B1:B12 and choose **Insert → Chart…**, **Column**.","Change 0.25 to 0.5 (best: put p in E1 and use `$E$1`). How does the shape change?"],
       apple:["Type `k` in A1 and the numbers 0 to 10 in A2:A12.","In B1 type `P(X = k)` and in B2 `=BINOMDIST(A2,10,0.25,FALSE)`; fill down to B12. Numbers uses the older name BINOMDIST. B4 (k = 2) should show 0.2816.","In C1 type `P(X ≤ k)` and in C2 `=BINOMDIST(A2,10,0.25,TRUE)`; fill down. C6 (k = 4) should show 0.9219.","Check that `=SUM(B2:B12)` gives 1. Then select B2:B12 and choose **Chart** → a 2D column chart.","Change 0.25 to 0.5 in the formulas. How does the shape change?"]},
       appNote:"Numbers has no BINOM.DIST; its BINOMDIST takes the same four arguments.",
       write:"P(X = 2)… P(X ≤ 4)… P(X ≥ 5) = 1 − … Shape with p = 0.5…"},
     {t:"Check the formula with a simulation", how:["On a new sheet, type `=IF(RAND()<0.25,1,0)` in A2 and copy it across to J2: ten guesses.","In K2 type `=SUM(A2:J2)`: right answers on one quiz. Select A2:K2 and fill down to row 501: 500 quizzes.","In M2 type `=COUNTIF(K2:K501,2)/500`: the share of quizzes with exactly 2 right. Compare it with 0.2816.","Recalculate a few times. How far does the share wander from 0.2816 with 500 quizzes?"], write:"My simulated shares… How close to 0.2816…"},
     {t:"Run binomial calculations in R (optional, Data Lab)", how:["Open the Data Lab, choose any R challenge, clear the box and type the five lines from the section “BINOM.DIST, dbinom and pbinom”. Press **▶ Run**.","Now the seed packet: run `pbinom(14, 20, 0.9)` (0.0113) and `pbinom(17, 20, 0.9)` (0.323).","Make up your own claim, for example “80% of my bus journeys are on time”, and count your last 15 journeys. How surprising is your count if the claim were true?"], write:"My claim… n… successes… P(this many or fewer)…"}
   ], proof:"A table of P(X = k) and P(X ≤ k) for B(10, 0.25) with a chart, simulated shares compared with 0.2816, and one binomial check of a claim from your own life."},
   read:[
     {book:"ostat", where:"Chapter 4, Section 4.3 “Binomial Distribution”", note:"Uses calculator functions binompdf and binomcdf, which match BINOM.DIST with FALSE and TRUE."},
     {book:"openintro", where:"Chapter 4, Section 4.2.1 “Bernoulli distribution” and Section 4.3 “Binomial distribution” (4.3.1 “The binomial distribution” and 4.3.2 “Normal approximation to the binomial distribution”)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u11-l5", title:"The normal distribution and areas", minutes:60,
   hook:{q:"A machine fills bags of rice. Their weights are roughly normal, with mean 1,010 g and standard deviation 6 g. The label says 1,000 g. About what share of bags weigh **less than the label**?", options:["About 0.5%","About 5%","About 16%","About 32%"], answer:1, reveal:"**About 5% (4.8%).** 1,000 g is 10 g below the mean: 10 ÷ 6 ≈ 1.67 standard deviations. For a normal distribution, about 4.8% of values lie more than 1.67 SDs below the mean. The 68–95–99.7 rule can only bracket this (somewhere between 2.5% and 16%). This lesson shows how to find the exact area with NORM.DIST or pnorm."},
   goals:[
     "Explain why probabilities for a continuous variable are areas under a density curve",
     "Use z-scores and the standard normal distribution to find areas",
     "Find left, right and between areas with NORM.DIST and pnorm, and percentiles with NORM.INV and qnorm",
     "Decide when a normal model is reasonable, and when it isn’t",
     "Explain why counts and sample means tend to look normal, and connect this to standard errors in Unit 7"
   ],
   learn:[
    {h:"From bars to curves: continuous variables", body:[
      {lead:"Lessons 3 and 4 had separate values you could list, each with a bar. Weights, times and heights can take any value in a range, so they need a different picture."},
      "For a [[continuous-variable|continuous]] variable, the chance of one exact value, such as a bag weighing exactly 1,000.000… g, is 0. What has a probability is a **range**: “under 1,000 g”, “between 1,000 and 1,020 g”.",
      "Imagine a histogram of millions of bag weights, with bins narrower and narrower, scaled so that the total area of the bars is 1. Its outline becomes a smooth [[density-curve|density curve]]. OpenStax states the rule in three words: for continuous distributions, **probability = area**.",
      {list:[
        "The total area under the curve is 1.",
        "P(a < X < b) is the area under the curve between a and b.",
        "Because a single point has no area, P(X < 1,000) and P(X ≤ 1,000) are the same. (For counts in Lesson 4, “<” and “≤” differ; here they don’t.)",
        "The **height** of the curve is not a probability. It only says where values are densest."
      ]}
    ]},
    {h:"The normal curve and z", body:[
      "The [[normal-distribution|normal distribution]] from Unit 5 ({{distributions}}) is the most used density curve. It is fully described by its mean μ and standard deviation σ, and textbooks write X ~ N(μ, σ).",
      "Every normal curve has the same shape, just shifted and stretched. A [[z-score|z-score]] ({{z-scores}}) undoes the shift and stretch: z = (x − μ) ÷ σ turns any normal variable into the [[standard-normal|standard normal]], with mean 0 and SD 1. So an area depends only on z. For the rice, z = (1,000 − 1,010) ÷ 6 = −1.67.",
      {fig:'<svg viewBox="0 0 340 266"><text x="170" y="18" text-anchor="middle">Bag weights: mean 1,010 g, SD 6 g</text><path class="d-rose" d="M22 180 L22 179.5 L23.2 179.4 L24.5 179.4 L25.7 179.3 L26.9 179.3 L28.2 179.2 L29.4 179.1 L30.6 179.1 L31.9 179 L33.1 178.9 L34.3 178.8 L35.6 178.7 L36.8 178.6 L38 178.4 L39.3 178.3 L40.5 178.2 L41.7 178 L43 177.8 L44.2 177.7 L45.4 177.5 L46.7 177.3 L47.9 177 L49.1 176.8 L50.4 176.6 L51.6 176.3 L52.8 176 L54.1 175.7 L55.3 175.4 L56.5 175 L57.8 174.7 L59 174.3 L60.2 173.9 L61.5 173.4 L62.7 173 L63.9 172.5 L65.2 172 L66.4 171.5 L67.6 170.9 L68.9 170.3 L70.1 169.7 L71.3 169 L72.6 168.3 L73.8 167.6 L75 166.8 L76.3 166 L77.5 165.2 L78.7 164.3 L80 163.4 L81.2 162.4 L82.4 161.4 L83.7 160.4 L84.9 159.3 L86.1 158.2 L87.4 157 L88.6 155.8 L89.8 154.5 L91.1 153.2 L92.3 151.9 L93.5 150.5 L94.8 149.1 L96 147.6 L96 180 Z" stroke-width="1"/><path class="d-ink" d="M22 179.5 L24.5 179.4 L26.9 179.3 L29.4 179.1 L31.9 179 L34.3 178.8 L36.8 178.6 L39.3 178.3 L41.7 178 L44.2 177.7 L46.7 177.3 L49.1 176.8 L51.6 176.3 L54.1 175.7 L56.5 175 L59 174.3 L61.5 173.4 L63.9 172.5 L66.4 171.5 L68.9 170.3 L71.3 169 L73.8 167.6 L76.3 166 L78.7 164.3 L81.2 162.4 L83.7 160.4 L86.1 158.2 L88.6 155.8 L91.1 153.2 L93.5 150.5 L96 147.6 L98.5 144.5 L100.9 141.2 L103.4 137.8 L105.9 134.2 L108.3 130.4 L110.8 126.6 L113.3 122.5 L115.7 118.4 L118.2 114.2 L120.7 109.9 L123.1 105.5 L125.6 101.2 L128.1 96.8 L130.5 92.4 L133 88.1 L135.5 83.9 L137.9 79.8 L140.4 75.9 L142.9 72.1 L145.3 68.6 L147.8 65.3 L150.3 62.2 L152.7 59.5 L155.2 57 L157.7 54.9 L160.1 53.2 L162.6 51.8 L165.1 50.8 L167.5 50.2 L170 50 L172.5 50.2 L174.9 50.8 L177.4 51.8 L179.9 53.2 L182.3 54.9 L184.8 57 L187.3 59.5 L189.7 62.2 L192.2 65.3 L194.7 68.6 L197.1 72.1 L199.6 75.9 L202.1 79.8 L204.5 83.9 L207 88.1 L209.5 92.4 L211.9 96.8 L214.4 101.2 L216.9 105.5 L219.3 109.9 L221.8 114.2 L224.3 118.4 L226.7 122.5 L229.2 126.6 L231.7 130.4 L234.1 134.2 L236.6 137.8 L239.1 141.2 L241.5 144.5 L244 147.6 L246.5 150.5 L248.9 153.2 L251.4 155.8 L253.9 158.2 L256.3 160.4 L258.8 162.4 L261.3 164.3 L263.7 166 L266.2 167.6 L268.7 169 L271.1 170.3 L273.6 171.5 L276.1 172.5 L278.5 173.4 L281 174.3 L283.5 175 L285.9 175.7 L288.4 176.3 L290.9 176.8 L293.3 177.3 L295.8 177.7 L298.3 178 L300.7 178.3 L303.2 178.6 L305.7 178.8 L308.1 179 L310.6 179.1 L313.1 179.3 L315.5 179.4 L318 179.5" fill="none" stroke-width="2"/><path class="d-ink" d="M22 180 L318 180" stroke-width="1.5"/><path class="d-ink" d="M36.8 180 L36.8 185" stroke-width="1"/><text class="s" x="36.8" y="199" text-anchor="middle">992</text><path class="d-ink" d="M81.2 180 L81.2 185" stroke-width="1"/><text class="s" x="81.2" y="199" text-anchor="middle">998</text><path class="d-ink" d="M125.6 180 L125.6 185" stroke-width="1"/><text class="s" x="125.6" y="199" text-anchor="middle">1,004</text><path class="d-ink" d="M170 180 L170 185" stroke-width="1"/><text class="s" x="170" y="199" text-anchor="middle">1,010</text><path class="d-ink" d="M214.4 180 L214.4 185" stroke-width="1"/><text class="s" x="214.4" y="199" text-anchor="middle">1,016</text><path class="d-ink" d="M258.8 180 L258.8 185" stroke-width="1"/><text class="s" x="258.8" y="199" text-anchor="middle">1,022</text><path class="d-ink" d="M303.2 180 L303.2 185" stroke-width="1"/><text class="s" x="303.2" y="199" text-anchor="middle">1,028</text><text class="s" x="36.8" y="218" text-anchor="middle">−3</text><text class="s" x="81.2" y="218" text-anchor="middle">−2</text><text class="s" x="125.6" y="218" text-anchor="middle">−1</text><text class="s" x="170" y="218" text-anchor="middle">0</text><text class="s" x="214.4" y="218" text-anchor="middle">+1</text><text class="s" x="258.8" y="218" text-anchor="middle">+2</text><text class="s" x="303.2" y="218" text-anchor="middle">+3</text><path class="d-rose" d="M96 180 L96 50" stroke-width="1.5" stroke-dasharray="4 3"/><text class="s" x="92" y="46" text-anchor="middle">label: 1,000 g</text><text class="s" x="36.8" y="118" text-anchor="middle">4.8% of</text><text class="s" x="36.8" y="134" text-anchor="middle">bags</text><path class="d-ink" d="M44.2 140 L73.8 170" stroke-width="1"/><text x="170" y="242" text-anchor="middle">Area to the left of 1,000 g (z = −1.67): 0.048</text><text class="s" x="170" y="260" text-anchor="middle">grams; z-scores below</text></svg>', alt:"A normal curve of bag weights centred on 1,010 g, with an axis marked 992, 998, 1,004, 1,010, 1,016, 1,022 and 1,028 grams and, below each, z-scores from −3 to +3. A dashed line marks the 1,000 g label, and the small area to its left is shaded and labelled 4.8% of bags. Caption line: area to the left of 1,000 g (z = −1.67) is 0.048.", cap:"The share of bags under the label is the shaded area: 0.048."},
      "Before computers, people looked areas up in printed tables of the standard normal (OpenStax has one in an appendix). A few values are worth recognising:",
      {table:[["z","Area to the left","What it gives you"],["−2","0.0228","2.3% lie more than 2 SDs below"],["−1","0.1587","15.9% lie more than 1 SD below"],["0","0.5000","Half lie below the mean"],["1","0.8413","68.3% lie within 1 SD (0.8413 − 0.1587)"],["1.645","0.9500","5% lie above"],["1.96","0.9750","95% lie within 1.96 SDs"],["2","0.9772","95.4% lie within 2 SDs"]]},
      "The 68–95–99.7 rule you met in Unit 5 is just these areas rounded, for z = 1, 2 and 3 (the last is 0.9987, which leaves 99.7% within 3 SDs)."
    ]},
    {h:"Areas in a spreadsheet: NORM.DIST and NORM.INV", body:[
      "Spreadsheets do the z-score and the table lookup in one step. `NORM.DIST(x, mean, SD, TRUE)` gives the area to the **left** of x. Every other area is built from it:",
      {fig:'<svg viewBox="0 0 340 360"><text x="20" y="22">Left of a value</text><path class="d-gold" d="M40 86 L40 85.9 L42 85.8 L44 85.8 L46 85.8 L48 85.7 L50 85.7 L52 85.6 L54 85.6 L56 85.5 L58.1 85.4 L60.1 85.3 L62.1 85.1 L64.1 85 L66.1 84.8 L68.1 84.7 L70.1 84.4 L72.1 84.2 L74.1 83.9 L76.1 83.6 L78.1 83.3 L80.1 82.9 L82.1 82.5 L84.1 82 L86.1 81.5 L88.1 80.9 L90.1 80.3 L92.1 79.6 L94.2 78.8 L96.2 78 L98.2 77.1 L100.2 76.1 L102.2 75.1 L104.2 73.9 L106.2 72.7 L108.2 71.5 L110.2 70.1 L112.2 68.7 L114.2 67.2 L116.2 65.7 L118.2 64 L120.2 62.4 L122.2 60.6 L124.2 58.8 L126.2 57 L128.3 55.2 L130.3 53.3 L132.3 51.4 L134.3 49.5 L136.3 47.6 L138.3 45.7 L140.3 43.9 L140.3 86 Z" stroke-width="1"/><path class="d-ink" d="M40 85.9 L42.6 85.8 L45.2 85.8 L47.8 85.7 L50.4 85.7 L53 85.6 L55.6 85.5 L58.2 85.4 L60.8 85.2 L63.4 85.1 L66 84.8 L68.6 84.6 L71.2 84.3 L73.8 84 L76.4 83.6 L79 83.1 L81.6 82.6 L84.2 82 L86.8 81.3 L89.4 80.5 L92 79.6 L94.6 78.6 L97.2 77.5 L99.8 76.3 L102.4 74.9 L105 73.5 L107.6 71.9 L110.2 70.1 L112.8 68.3 L115.4 66.3 L118 64.2 L120.6 62 L123.2 59.8 L125.8 57.4 L128.4 55 L131 52.6 L133.6 50.1 L136.2 47.7 L138.8 45.2 L141.4 42.9 L144 40.6 L146.6 38.4 L149.2 36.4 L151.8 34.6 L154.4 32.9 L157 31.4 L159.6 30.2 L162.2 29.3 L164.8 28.6 L167.4 28.1 L170 28 L172.6 28.1 L175.2 28.6 L177.8 29.3 L180.4 30.2 L183 31.4 L185.6 32.9 L188.2 34.6 L190.8 36.4 L193.4 38.4 L196 40.6 L198.6 42.9 L201.2 45.2 L203.8 47.7 L206.4 50.1 L209 52.6 L211.6 55 L214.2 57.4 L216.8 59.8 L219.4 62 L222 64.2 L224.6 66.3 L227.2 68.3 L229.8 70.1 L232.4 71.9 L235 73.5 L237.6 74.9 L240.2 76.3 L242.8 77.5 L245.4 78.6 L248 79.6 L250.6 80.5 L253.2 81.3 L255.8 82 L258.4 82.6 L261 83.1 L263.6 83.6 L266.2 84 L268.8 84.3 L271.4 84.6 L274 84.8 L276.6 85.1 L279.2 85.2 L281.8 85.4 L284.4 85.5 L287 85.6 L289.6 85.7 L292.2 85.7 L294.8 85.8 L297.4 85.8 L300 85.9" fill="none" stroke-width="2"/><path class="d-ink" d="M40 86 L300 86" stroke-width="1.5"/><text class="s" x="170" y="106" text-anchor="middle">=NORM.DIST(x, mean, SD, TRUE)</text><text x="20" y="140">Right of a value</text><path class="d-gold" d="M199.7 204 L199.7 161.9 L201.7 163.7 L203.7 165.6 L205.7 167.5 L207.7 169.4 L209.7 171.3 L211.7 173.2 L213.8 175 L215.8 176.8 L217.8 178.6 L219.8 180.4 L221.8 182 L223.8 183.7 L225.8 185.2 L227.8 186.7 L229.8 188.1 L231.8 189.5 L233.8 190.7 L235.8 191.9 L237.8 193.1 L239.8 194.1 L241.8 195.1 L243.8 196 L245.8 196.8 L247.9 197.6 L249.9 198.3 L251.9 198.9 L253.9 199.5 L255.9 200 L257.9 200.5 L259.9 200.9 L261.9 201.3 L263.9 201.6 L265.9 201.9 L267.9 202.2 L269.9 202.4 L271.9 202.7 L273.9 202.8 L275.9 203 L277.9 203.1 L279.9 203.3 L281.9 203.4 L284 203.5 L286 203.6 L288 203.6 L290 203.7 L292 203.7 L294 203.8 L296 203.8 L298 203.8 L300 203.9 L300 204 Z" stroke-width="1"/><path class="d-ink" d="M40 203.9 L42.6 203.8 L45.2 203.8 L47.8 203.7 L50.4 203.7 L53 203.6 L55.6 203.5 L58.2 203.4 L60.8 203.2 L63.4 203.1 L66 202.8 L68.6 202.6 L71.2 202.3 L73.8 202 L76.4 201.6 L79 201.1 L81.6 200.6 L84.2 200 L86.8 199.3 L89.4 198.5 L92 197.6 L94.6 196.6 L97.2 195.5 L99.8 194.3 L102.4 192.9 L105 191.5 L107.6 189.9 L110.2 188.1 L112.8 186.3 L115.4 184.3 L118 182.2 L120.6 180 L123.2 177.8 L125.8 175.4 L128.4 173 L131 170.6 L133.6 168.1 L136.2 165.7 L138.8 163.2 L141.4 160.9 L144 158.6 L146.6 156.4 L149.2 154.4 L151.8 152.6 L154.4 150.9 L157 149.4 L159.6 148.2 L162.2 147.3 L164.8 146.6 L167.4 146.1 L170 146 L172.6 146.1 L175.2 146.6 L177.8 147.3 L180.4 148.2 L183 149.4 L185.6 150.9 L188.2 152.6 L190.8 154.4 L193.4 156.4 L196 158.6 L198.6 160.9 L201.2 163.2 L203.8 165.7 L206.4 168.1 L209 170.6 L211.6 173 L214.2 175.4 L216.8 177.8 L219.4 180 L222 182.2 L224.6 184.3 L227.2 186.3 L229.8 188.1 L232.4 189.9 L235 191.5 L237.6 192.9 L240.2 194.3 L242.8 195.5 L245.4 196.6 L248 197.6 L250.6 198.5 L253.2 199.3 L255.8 200 L258.4 200.6 L261 201.1 L263.6 201.6 L266.2 202 L268.8 202.3 L271.4 202.6 L274 202.8 L276.6 203.1 L279.2 203.2 L281.8 203.4 L284.4 203.5 L287 203.6 L289.6 203.7 L292.2 203.7 L294.8 203.8 L297.4 203.8 L300 203.9" fill="none" stroke-width="2"/><path class="d-ink" d="M40 204 L300 204" stroke-width="1.5"/><text class="s" x="170" y="224" text-anchor="middle">=1-NORM.DIST(x, mean, SD, TRUE)</text><text x="20" y="258">Between two values</text><path class="d-gold" d="M147.7 322 L147.7 273.6 L149.1 272.5 L150.4 271.5 L151.7 270.6 L153.1 269.7 L154.4 268.9 L155.7 268.1 L157.1 267.4 L158.4 266.8 L159.7 266.2 L161.1 265.6 L162.4 265.2 L163.8 264.8 L165.1 264.5 L166.4 264.3 L167.8 264.1 L169.1 264 L170.4 264 L171.8 264.1 L173.1 264.2 L174.5 264.4 L175.8 264.7 L177.1 265.1 L178.5 265.5 L179.8 266 L181.1 266.6 L182.5 267.2 L183.8 267.9 L185.2 268.6 L186.5 269.4 L187.8 270.3 L189.2 271.2 L190.5 272.2 L191.8 273.2 L193.2 274.3 L194.5 275.4 L195.9 276.5 L197.2 277.6 L198.5 278.8 L199.9 280 L201.2 281.2 L202.5 282.5 L203.9 283.7 L205.2 285 L206.5 286.3 L207.9 287.5 L209.2 288.8 L210.6 290 L211.9 291.3 L213.2 292.5 L214.6 293.8 L214.6 322 Z" stroke-width="1"/><path class="d-ink" d="M40 321.9 L42.6 321.8 L45.2 321.8 L47.8 321.7 L50.4 321.7 L53 321.6 L55.6 321.5 L58.2 321.4 L60.8 321.2 L63.4 321.1 L66 320.8 L68.6 320.6 L71.2 320.3 L73.8 320 L76.4 319.6 L79 319.1 L81.6 318.6 L84.2 318 L86.8 317.3 L89.4 316.5 L92 315.6 L94.6 314.6 L97.2 313.5 L99.8 312.3 L102.4 310.9 L105 309.5 L107.6 307.9 L110.2 306.1 L112.8 304.3 L115.4 302.3 L118 300.2 L120.6 298 L123.2 295.8 L125.8 293.4 L128.4 291 L131 288.6 L133.6 286.1 L136.2 283.7 L138.8 281.2 L141.4 278.9 L144 276.6 L146.6 274.4 L149.2 272.4 L151.8 270.6 L154.4 268.9 L157 267.4 L159.6 266.2 L162.2 265.3 L164.8 264.6 L167.4 264.1 L170 264 L172.6 264.1 L175.2 264.6 L177.8 265.3 L180.4 266.2 L183 267.4 L185.6 268.9 L188.2 270.6 L190.8 272.4 L193.4 274.4 L196 276.6 L198.6 278.9 L201.2 281.2 L203.8 283.7 L206.4 286.1 L209 288.6 L211.6 291 L214.2 293.4 L216.8 295.8 L219.4 298 L222 300.2 L224.6 302.3 L227.2 304.3 L229.8 306.1 L232.4 307.9 L235 309.5 L237.6 310.9 L240.2 312.3 L242.8 313.5 L245.4 314.6 L248 315.6 L250.6 316.5 L253.2 317.3 L255.8 318 L258.4 318.6 L261 319.1 L263.6 319.6 L266.2 320 L268.8 320.3 L271.4 320.6 L274 320.8 L276.6 321.1 L279.2 321.2 L281.8 321.4 L284.4 321.5 L287 321.6 L289.6 321.7 L292.2 321.7 L294.8 321.8 L297.4 321.8 L300 321.9" fill="none" stroke-width="2"/><path class="d-ink" d="M40 322 L300 322" stroke-width="1.5"/><text class="s" x="170" y="342" text-anchor="middle">=NORM.DIST(b,…)-NORM.DIST(a,…)</text></svg>', alt:"Three small normal curves stacked vertically. Left of a value: the area left of a point is shaded, with the formula =NORM.DIST(x, mean, SD, TRUE). Right of a value: the area right of a point is shaded, with =1-NORM.DIST(x, mean, SD, TRUE). Between two values: the area between two points is shaded, with =NORM.DIST(b,…)-NORM.DIST(a,…).", cap:"One function, three kinds of area: left, right (1 minus left) and between (a difference of two lefts)."},
      {ex:"Under 1,000 g              → 0.0478\n=NORM.DIST(1000,1010,6,TRUE)\n\nOver 1,020 g               → 0.0478\n=1-NORM.DIST(1020,1010,6,TRUE)\n\nBetween 1,000 and 1,020 g  → 0.9044\n=NORM.DIST(1020,1010,6,TRUE)\n -NORM.DIST(1000,1010,6,TRUE)\n (type it as one formula)\n\nThe reverse: the weight with 99%\nof bags below it          → 1023.96\n=NORM.INV(0.99,1010,6)", label:"Rice bags, mean 1,010 g, SD 6 g", mono:true},
      "NORM.INV goes the other way: you give it an area to the left, and it gives the value. About 99% of bags weigh less than 1,024 g.",
      {warn:"**TRUE, not FALSE.** `=NORM.DIST(1000,1010,6,FALSE)` returns 0.0166: the **height** of the curve at 1,000 g, not a probability. For areas, the last argument must be TRUE."},
      {list:[
        "**Excel** (2010 and later), **Google Sheets** and **LibreOffice Calc** have NORM.DIST and NORM.INV. The older names NORMDIST and NORMINV work in all three.",
        "**Numbers** has only the older names: `=NORMDIST(1000,1010,6,TRUE)` and `=NORMINV(0.99,1010,6)`.",
        "For the standard normal, Excel’s NORM.S.DIST needs two arguments (z, TRUE), but Google Sheets’ function list shows it with just one. `=NORM.DIST(z,0,1,TRUE)` works the same everywhere."
      ]}
    ]},
    {h:"In R: pnorm and qnorm", body:[
      "R’s names follow the same pattern as the binomial ones in Lesson 4: `p` for a cumulative probability, `q` for the reverse (a quantile, R’s word for a percentile).",
      {code:'pnorm(1000, mean = 1010, sd = 6)          # 0.04779035\npnorm(1020, 1010, 6) - pnorm(1000, 1010, 6) # 0.9044193\npnorm(1020, 1010, 6, lower.tail = FALSE)  # 0.04779035\nqnorm(0.99, mean = 1010, sd = 6)          # 1023.958\npnorm(1.96)                               # 0.9750021\nqnorm(0.975)                              # 1.959964', lang:"r", label:"R"},
      "Without a mean and SD, `pnorm` and `qnorm` use the standard normal (mean 0, SD 1). The last line explains a number you will meet constantly in Unit 7: the 1.96 in a 95% confidence interval is simply the z with 97.5% of the area below it, leaving 2.5% in each tail.",
      {lab:"dl-r-pnorm", t:"Practise: normal areas with pnorm and qnorm in the Data Lab"}
    ]},
    {h:"Working backwards: setting a target", body:[
      "Percentiles let you set targets. Suppose the rice company wants **no more than 1%** of bags under 1,000 g. With an SD of 6 g, where should the machine’s mean be?",
      {ex:"1,000 g must be the 1st percentile.\nz for the 1st percentile = −2.326\n  =NORM.INV(0.01,0,1)  or\n  qnorm(0.01)\n\nmean = 1,000 + 2.326 × 6\n     = 1,013.96 ≈ 1,014 g\n\nWith a steadier machine (SD 4 g):\nmean = 1,000 + 2.326 × 4\n     = 1,009.3 g", label:"Worked example", mono:true},
      "This is a real trade-off: a higher mean gives away more rice in every bag; a steadier machine costs money but lets the mean come down. The same calculation sets pass marks for the top 10% of scores, safety margins for loads, or stock levels that run out on no more than 1 day in 20.",
      {tip:"For “top 10%” use the 90th percentile: `=NORM.INV(0.9,mean,SD)`. NORM.INV always works with the area to the **left**."}
    ]},
    {h:"When is a normal model reasonable?", body:[
      "A normal model is a tool, not a fact about the world. Look at the data first (a histogram, or the normal quantile plot described in {{distributions}}).",
      {table:[["Often roughly normal","Usually not normal"],["Repeated measurement errors on a good instrument","Waiting times and durations"],["Many physical measurements in one group, such as adult heights","Incomes, house prices, wealth"],["Sums and averages of many independent values","Counts of rare events, near zero"]]},
      "One warning sign is a model that predicts impossible values. The clinic waiting times in Unit 5 had mean 13.1 and SD 9.0 minutes. A normal model would put `pnorm(0, 13.1, 9.0)` = 7.3% of waits **below zero minutes**, which is nonsense: the data are skewed right, and the model doesn’t fit.",
      "Real data often have more extreme values than a normal curve predicts, so normal areas far out in the tails (beyond about 3 SDs) deserve extra caution."
    ]},
    {h:"Why counts and averages look normal: the bridge to Unit 7", body:[
      "Look back at Lesson 4. A binomial count is a **sum** of many 0s and 1s, one per trial. When n is large enough (np ≥ 10 and n(1 − p) ≥ 10), its bars trace out a normal curve with mean np and SD √(np(1 − p)):",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="18" text-anchor="middle">Heads in 100 fair flips: bars = exact,</text><text x="170" y="34" text-anchor="middle">curve = normal, mean 50, SD 5</text><rect class="d-lup" x="27.6" y="188.6" width="7.4" height="1.4" stroke-width="1"/><rect class="d-lup" x="36.8" y="187.5" width="7.4" height="2.5" stroke-width="1"/><rect class="d-lup" x="46" y="185.6" width="7.4" height="4.4" stroke-width="1"/><rect class="d-lup" x="55.3" y="182.7" width="7.4" height="7.3" stroke-width="1"/><rect class="d-lup" x="64.5" y="178.4" width="7.4" height="11.6" stroke-width="1"/><rect class="d-lup" x="73.8" y="172.3" width="7.4" height="17.7" stroke-width="1"/><rect class="d-lup" x="83" y="164.1" width="7.4" height="25.9" stroke-width="1"/><rect class="d-lup" x="92.3" y="153.6" width="7.4" height="36.4" stroke-width="1"/><rect class="d-lup" x="101.5" y="140.9" width="7.4" height="49.1" stroke-width="1"/><rect class="d-lup" x="110.8" y="126.4" width="7.4" height="63.6" stroke-width="1"/><rect class="d-lup" x="120" y="110.8" width="7.4" height="79.2" stroke-width="1"/><rect class="d-lup" x="129.3" y="95.3" width="7.4" height="94.7" stroke-width="1"/><rect class="d-lup" x="138.6" y="81.2" width="7.4" height="108.8" stroke-width="1"/><rect class="d-lup" x="147.8" y="69.9" width="7.4" height="120.1" stroke-width="1"/><rect class="d-lup" x="157.1" y="62.5" width="7.4" height="127.5" stroke-width="1"/><rect class="d-lup" x="166.3" y="60" width="7.4" height="130" stroke-width="1"/><rect class="d-lup" x="175.6" y="62.5" width="7.4" height="127.5" stroke-width="1"/><rect class="d-lup" x="184.8" y="69.9" width="7.4" height="120.1" stroke-width="1"/><rect class="d-lup" x="194.1" y="81.2" width="7.4" height="108.8" stroke-width="1"/><rect class="d-lup" x="203.3" y="95.3" width="7.4" height="94.7" stroke-width="1"/><rect class="d-lup" x="212.6" y="110.8" width="7.4" height="79.2" stroke-width="1"/><rect class="d-lup" x="221.8" y="126.4" width="7.4" height="63.6" stroke-width="1"/><rect class="d-lup" x="231.1" y="140.9" width="7.4" height="49.1" stroke-width="1"/><rect class="d-lup" x="240.3" y="153.6" width="7.4" height="36.4" stroke-width="1"/><rect class="d-lup" x="249.6" y="164.1" width="7.4" height="25.9" stroke-width="1"/><rect class="d-lup" x="258.8" y="172.3" width="7.4" height="17.7" stroke-width="1"/><rect class="d-lup" x="268.1" y="178.4" width="7.4" height="11.6" stroke-width="1"/><rect class="d-lup" x="277.3" y="182.7" width="7.4" height="7.3" stroke-width="1"/><rect class="d-lup" x="286.6" y="185.6" width="7.4" height="4.4" stroke-width="1"/><rect class="d-lup" x="295.8" y="187.5" width="7.4" height="2.5" stroke-width="1"/><rect class="d-lup" x="305.1" y="188.6" width="7.4" height="1.4" stroke-width="1"/><path class="d-ink" d="M22 189.2 L24.5 189.1 L26.9 188.9 L29.4 188.7 L31.9 188.5 L34.3 188.2 L36.8 187.9 L39.3 187.6 L41.7 187.2 L44.2 186.8 L46.7 186.3 L49.1 185.7 L51.6 185.1 L54.1 184.4 L56.5 183.6 L59 182.7 L61.5 181.7 L63.9 180.6 L66.4 179.4 L68.9 178.1 L71.3 176.6 L73.8 175 L76.3 173.3 L78.7 171.4 L81.2 169.4 L83.7 167.2 L86.1 164.8 L88.6 162.3 L91.1 159.6 L93.5 156.8 L96 153.8 L98.5 150.6 L100.9 147.3 L103.4 143.8 L105.9 140.2 L108.3 136.4 L110.8 132.6 L113.3 128.6 L115.7 124.5 L118.2 120.4 L120.7 116.2 L123.1 112 L125.6 107.8 L128.1 103.6 L130.5 99.4 L133 95.4 L135.5 91.4 L137.9 87.5 L140.4 83.8 L142.9 80.3 L145.3 77 L147.8 73.9 L150.3 71 L152.7 68.4 L155.2 66.2 L157.7 64.2 L160.1 62.6 L162.6 61.3 L165.1 60.4 L167.5 59.9 L170 59.7 L172.5 59.9 L174.9 60.4 L177.4 61.3 L179.9 62.6 L182.3 64.2 L184.8 66.2 L187.3 68.4 L189.7 71 L192.2 73.9 L194.7 77 L197.1 80.3 L199.6 83.8 L202.1 87.5 L204.5 91.4 L207 95.4 L209.5 99.4 L211.9 103.6 L214.4 107.8 L216.9 112 L219.3 116.2 L221.8 120.4 L224.3 124.5 L226.7 128.6 L229.2 132.6 L231.7 136.4 L234.1 140.2 L236.6 143.8 L239.1 147.3 L241.5 150.6 L244 153.8 L246.5 156.8 L248.9 159.6 L251.4 162.3 L253.9 164.8 L256.3 167.2 L258.8 169.4 L261.3 171.4 L263.7 173.3 L266.2 175 L268.7 176.6 L271.1 178.1 L273.6 179.4 L276.1 180.6 L278.5 181.7 L281 182.7 L283.5 183.6 L285.9 184.4 L288.4 185.1 L290.9 185.7 L293.3 186.3 L295.8 186.8 L298.3 187.2 L300.7 187.6 L303.2 187.9 L305.7 188.2 L308.1 188.5 L310.6 188.7 L313.1 188.9 L315.5 189.1 L318 189.2" fill="none" stroke-width="2"/><path class="d-ink" d="M22 190 L318 190" stroke-width="1.5"/><path class="d-ink" d="M31.2 190 L31.2 195" stroke-width="1"/><text class="s" x="31.2" y="209" text-anchor="middle">35</text><path class="d-ink" d="M77.5 190 L77.5 195" stroke-width="1"/><text class="s" x="77.5" y="209" text-anchor="middle">40</text><path class="d-ink" d="M123.8 190 L123.8 195" stroke-width="1"/><text class="s" x="123.8" y="209" text-anchor="middle">45</text><path class="d-ink" d="M170 190 L170 195" stroke-width="1"/><text class="s" x="170" y="209" text-anchor="middle">50</text><path class="d-ink" d="M216.2 190 L216.2 195" stroke-width="1"/><text class="s" x="216.2" y="209" text-anchor="middle">55</text><path class="d-ink" d="M262.5 190 L262.5 195" stroke-width="1"/><text class="s" x="262.5" y="209" text-anchor="middle">60</text><path class="d-ink" d="M308.8 190 L308.8 195" stroke-width="1"/><text class="s" x="308.8" y="209" text-anchor="middle">65</text><text class="s" x="170" y="230" text-anchor="middle">number of heads</text></svg>', alt:"Bars showing the exact binomial probabilities for 35 to 65 heads in 100 fair flips, forming a symmetric bell peaking at 50. A smooth normal curve with mean 50 and SD 5 is drawn over the bars and follows their tops closely.", cap:"For 100 flips, the normal curve (mean 50, SD 5) almost exactly traces the binomial bars."},
      "So P(60 or more heads in 100 flips) is close to the normal area above 59.5 (halfway between 59 and 60, because each bar is 1 wide): `pnorm(59.5, 50, 5, lower.tail = FALSE)` gives 0.0287, against the exact binomial 0.0284.",
      "The same happens to **averages**. The average of n independent values has the same mean μ, a smaller SD of σ ÷ √n (the square-root rule from Lessons 1 and 3), and a shape that gets closer to normal as n grows, even when single values aren’t normal.",
      {ex:"Single bags: mean 1,010, SD 6 g\nAverage of 25 bags: mean 1,010,\n  SD 6 ÷ √25 = 1.2 g\n\nP(one bag < 1,008 g)\n  = pnorm(1008, 1010, 6) = 0.37\nP(average of 25 < 1,008 g)\n  = pnorm(1008, 1010, 1.2) = 0.048\n\nSimulated: 10,000 averages of 25\nbags had SD 1.19, and 4.8% were\nunder 1,008 g.", label:"Worked example", mono:true},
      "A shortfall of 2 g is ordinary for one bag but rare for an average of 25. That is why a sample average can pin down a population mean, and it is the whole idea behind Unit 7: Lesson 1 there builds this by simulation and names it the [[central-limit|central limit theorem]] ({{central-limit-theorem}}); Lesson 2 turns “95% of averages land within 1.96 [[standard-error|standard errors]]” into a [[confidence-interval|confidence interval]] ({{standard-error-ci}}).",
      {lab:"dl-r-sim", t:"Practise: simulate averages in the Data Lab (a preview of Unit 7)"},
      {key:"Areas under the normal curve answer questions about single values when the data are normal, and about counts and averages almost always, once samples are large enough."}
    ]}
   ],
   try:[
    {id:"t3u11-l5-x1", type:"number", q:"A phone’s battery life is roughly normal with mean 20 hours and SD 1.5 hours. What is the probability that a phone lasts **less than 18 hours**? Give a decimal to three places.", answer:0.091, tol:0.001, unit:"", why:"z = (18 − 20) ÷ 1.5 = −1.33. The area to the left is `=NORM.DIST(18,20,1.5,TRUE)` = `pnorm(18, 20, 1.5)` = 0.091, about 9 phones in 100.", wrongs:[
      {v:0.909, tol:0.001, why:"0.909 is the area to the **right** of 18 hours, the share lasting longer. “Less than” is the left area."},
      {v:-1.33, tol:0.01, why:"−1.33 is the z-score. Turn it into an area with NORM.DIST(…, TRUE) or pnorm."},
      {v:0.159, tol:0.001, why:"0.159 is the area below z = −1. Here z is −1.33, a little further out, so the area is smaller."}
    ], hint2:"Area to the left of 18: NORM.DIST(18, 20, 1.5, TRUE)."},
    {id:"t3u11-l5-x2", type:"number", q:"Exam scores are roughly normal with mean 65 and SD 10. What share of students score **between 50 and 80**? Give a decimal to three places.", answer:0.866, tol:0.001, unit:"", why:"Between = left of 80 minus left of 50: `=NORM.DIST(80,65,10,TRUE)-NORM.DIST(50,65,10,TRUE)` = 0.9332 − 0.0668 = 0.866. Both scores are 1.5 SDs from the mean.", wrongs:[
      {v:0.933, tol:0.001, why:"0.933 is the area to the left of 80 only. Subtract the area to the left of 50."},
      {v:0.067, tol:0.001, why:"0.067 is the area above 80 (or below 50). The question asks for the middle."},
      {v:0.95, tol:0.001, why:"95% is the rule for ±2 SDs. 50 and 80 are only ±1.5 SDs from 65."}
    ], hint2:"Find the left area at 80 and at 50, then subtract."},
    {id:"t3u11-l5-x3", type:"mcq", q:"Kaito, a first-year information engineering student, types `=NORM.DIST(1000,1010,6,FALSE)` to find the share of rice bags under 1,000 g and gets 0.0166. What went wrong?", options:[
      {t:"FALSE gives the height of the curve at 1,000 g, not an area; with TRUE he would get 0.0478.", ok:true, why:"The last argument chooses between the density (FALSE) and the cumulative probability (TRUE). Areas need TRUE."},
      {t:"Nothing: 1.66% of bags are under 1,000 g.", why:"0.0166 is a density, not a share. The share under 1,000 g is 4.78%."},
      {t:"He should have typed the z-score, −1.67, instead of 1,000.", why:"NORM.DIST takes the original value with the mean and SD; it works out z itself. With z you would also need mean 0 and SD 1."},
      {t:"NORM.DIST only works for the standard normal.", why:"NORM.DIST takes any mean and SD. (NORM.S.DIST is the standard-normal version.)"}
    ]},
    {id:"t3u11-l5-x4", type:"number", q:"Exam scores are roughly normal with mean 65 and SD 10. A scholarship goes to the **top 10%**. What is the lowest score that qualifies? Give one decimal place.", answer:77.8, tol:0.06, unit:"points", why:"The top 10% starts at the 90th percentile: `=NORM.INV(0.9,65,10)` = `qnorm(0.9, 65, 10)` = 77.8 (z = 1.28).", wrongs:[
      {v:52.2, tol:0.06, why:"52.2 is the 10th percentile, the cut-off for the **bottom** 10%. NORM.INV works with the area to the left, so use 0.9."},
      {v:1.28, tol:0.01, why:"1.28 is the z-score. Convert back: 65 + 1.28 × 10 = 77.8."},
      {v:75, tol:0.06, why:"75 is 1 SD above the mean, which leaves about 16% above it, not 10%."}
    ], hint2:"NORM.INV(0.9, 65, 10): 90% lie below the cut-off."},
    {id:"t3u11-l5-x5", type:"match", q:"Match each R call (for a normal variable with mean m and SD s) to what it gives.", pairs:[
      ["pnorm(x, m, s)","The area to the left of x","p is for cumulative probability: P(X ≤ x)."],
      ["pnorm(x, m, s, lower.tail = FALSE)","The area to the right of x","Same as 1 − pnorm(x, m, s)."],
      ["qnorm(0.9, m, s)","The value with 90% of the area below it","q is for quantile: the reverse of pnorm."],
      ["dnorm(x, m, s)","The height of the curve at x","d is for density, like FALSE in NORM.DIST. It is not a probability."]
    ]},
    {id:"t3u11-l5-x6", type:"sort", q:"Would a normal model be a reasonable description?", buckets:["Reasonable","Not reasonable"], items:[
      {t:"Heights of adult women in one country", b:0, why:"A classic roughly normal, symmetric measurement within one group."},
      {t:"Errors when the same object is weighed many times on a good scale", b:0, why:"Random measurement errors tend to be symmetric and bell-shaped."},
      {t:"The average of 50 rolls of a die, repeated many times", b:0, why:"Averages of many independent values are close to normal, even though one roll is flat."},
      {t:"Household incomes in a city", b:1, why:"Strongly skewed right with a long tail; a normal model would badly misdescribe the top and could predict negative incomes."},
      {t:"Minutes waited at a walk-in clinic", b:1, why:"Skewed right with a floor at zero; Unit 5’s clinic data would give 7% negative waits under a normal model."},
      {t:"Number of heads in 4 coin flips", b:1, why:"Only five possible values (0 to 4), and np = 2 is far below 10. Use the binomial directly."}
    ]},
    {id:"t3u11-l5-x7", type:"mcq", q:"Single bags of rice have mean 1,010 g and SD 6 g, independently. What is the standard deviation of the **average** weight of 9 bags?", options:[
      {t:"2 g", ok:true, why:"SD of an average = σ ÷ √n = 6 ÷ √9 = 6 ÷ 3 = 2 g. Averages vary less than single values."},
      {t:"6 g, the same as one bag", why:"Averaging lets high and low bags partly cancel, so the average varies less than one bag."},
      {t:"0.67 g", why:"That is 6 ÷ 9. The SD shrinks with the **square root** of n, not with n."},
      {t:"18 g", why:"That is 6 × √9, which describes the SD of the **total** weight of 9 bags, not their average."}
    ]},
    {id:"t3u11-l5-x8", type:"explain", q:"Cereal boxes are filled with weights that are normally distributed, mean 505 g and SD 4 g. Explain why the chance that a box weighs exactly 500 g is 0, and how you would find the chance that a box weighs under 500 g.", model:"Weight is continuous, so probabilities are areas under the density curve, and a single exact value has no width and therefore no area. What has a probability is a range, such as “under 500 g”. Convert it to a z-score: (500 − 505) ÷ 4 = −1.25. The area to the left of z = −1.25 under the standard normal curve is about **0.106**, so roughly 11% of boxes weigh under 500 g. `=NORM.DIST(500,505,4,TRUE)` or `pnorm(500, 505, 4)` does it in one step.", points:["Says probability equals area for a continuous variable", "Explains that one exact value has zero area", "Calculates the z-score (−1.25)", "Finds the area to the left, about 0.106, with a table, NORM.DIST(…, TRUE) or pnorm"]}
   ],
   apply:{intro:"Use normal areas to answer a quality-control question in a spreadsheet, test the 68–95 rule on real data, and simulate averages.", tasks:[
     {t:"Rice bags in a spreadsheet", app:{
       ms:["Type `Mean` in A1 and 1010 in B1; `SD` in A2 and 6 in B2.","In B4 type `=NORM.DIST(1000,B1,B2,TRUE)` (share under 1,000 g: 0.0478).","In B5 type `=NORM.DIST(1020,B1,B2,TRUE)-NORM.DIST(1000,B1,B2,TRUE)` (share between 1,000 and 1,020 g: 0.9044).","In B6 type `=NORM.INV(0.99,B1,B2)` (99th percentile: 1023.96).","In B7 type `=1000-NORM.INV(0.01,0,1)*B2`: the mean needed for only 1% under 1,000 g (1013.96). Change B2 to 4 and watch B7 fall to about 1009.3."],
       google:["Type `Mean` in A1 and 1010 in B1; `SD` in A2 and 6 in B2.","In B4 type `=NORM.DIST(1000,B1,B2,TRUE)` (share under 1,000 g: 0.0478).","In B5 type `=NORM.DIST(1020,B1,B2,TRUE)-NORM.DIST(1000,B1,B2,TRUE)` (share between 1,000 and 1,020 g: 0.9044).","In B6 type `=NORM.INV(0.99,B1,B2)` (99th percentile: 1023.96).","In B7 type `=1000-NORM.INV(0.01,0,1)*B2`: the mean needed for only 1% under 1,000 g (1013.96). Change B2 to 4 and watch B7 fall to about 1009.3."],
       libre:["Type `Mean` in A1 and 1010 in B1; `SD` in A2 and 6 in B2.","In B4 type `=NORM.DIST(1000;B1;B2;1)` (share under 1,000 g: 0.0478; 1 means TRUE).","In B5 type `=NORM.DIST(1020;B1;B2;1)-NORM.DIST(1000;B1;B2;1)` (share between 1,000 and 1,020 g: 0.9044).","In B6 type `=NORM.INV(0.99;B1;B2)` (99th percentile: 1023.96).","In B7 type `=1000-NORM.INV(0.01;0;1)*B2`: the mean needed for only 1% under 1,000 g (1013.96). Change B2 to 4 and watch B7 fall to about 1009.3."],
       apple:["Type `Mean` in A1 and 1010 in B1; `SD` in A2 and 6 in B2.","In B4 type `=NORMDIST(1000,B1,B2,TRUE)` (share under 1,000 g: 0.0478). Numbers uses the older names NORMDIST and NORMINV.","In B5 type `=NORMDIST(1020,B1,B2,TRUE)-NORMDIST(1000,B1,B2,TRUE)` (share between 1,000 and 1,020 g: 0.9044).","In B6 type `=NORMINV(0.99,B1,B2)` (99th percentile: 1023.96).","In B7 type `=1000-NORMINV(0.01,0,1)*B2`: the mean needed for only 1% under 1,000 g (1013.96). Change B2 to 4 and watch B7 fall to about 1009.3."]},
       appNote:"Numbers has no NORM.DIST or NORM.INV; NORMDIST and NORMINV take the same arguments.",
       write:"Under 1,000 g… Between 1,000 and 1,020 g… 99th percentile… Mean needed with SD 6… with SD 4…"},
     {t:"Test the 68–95 rule on real data", how:["Collect at least 30 values of one measurement: daily step counts, the weights of 30 apples or eggs, your commute times, or a column from an open data set.","In a spreadsheet, find the mean (AVERAGE) and SD (STDEV.S, or STDEV in Numbers).","Count the values within 1 SD of the mean with `=COUNTIFS(A2:A31,\">=\"&(m-s),A2:A31,\"<=\"&(m+s))`, putting your mean and SD (or the cells that hold them) in place of m and s. Do the same for 2 SDs.","Compare the shares with 68% and 95%. If they are far off, draw a histogram: is the shape skewed?"], write:"My variable… mean… SD… within 1 SD: …% within 2 SD: …% Is a normal model reasonable?…"},
     {t:"Simulate averages in R (optional, Data Lab)", how:["Open the Data Lab, choose any R challenge and clear the box. Type these six lines, one per line: `set.seed(6)` · `bags <- matrix(rnorm(25 * 10000, mean = 1010, sd = 6), ncol = 25)` · `means <- rowMeans(bags)` · `sd(means)` · `mean(means < 1008)` · `hist(means)`","Press **▶ Run**. You should see about 1.19 and 0.048, and a narrow bell centred on 1,010.","Change 25 to 4 (in both places). The SD of the averages should be close to 6 ÷ √4 = 3."], write:"SD of averages of 25… of 4… What the histogram looked like…"}
   ], proof:"A spreadsheet with normal areas, a percentile and a target mean for the rice bags; a check of the 68–95 rule on 30 real values with a verdict on the normal model; and (optionally) simulated averages whose SD matches σ ÷ √n."},
   read:[
     {book:"ostat", where:"Chapter 5, Section 5.1 “Continuous Probability Functions”; Chapter 6, Section 6.1 “The Standard Normal Distribution” and Section 6.2 “Using the Normal Distribution”", note:"OpenStax uses calculator functions normalcdf and invNorm, which match NORM.DIST(…, TRUE) and NORM.INV."},
     {book:"openintro", where:"Chapter 4, Section 4.1 “Normal distribution” (4.1.3 “Finding tail areas” and 4.1.4 “Normal probability examples”) and Section 4.3.2 “Normal approximation to the binomial distribution”"},
     {book:"openintro", where:"Chapter 3, Section 3.5 “Continuous distributions”", note:"Background reading: from histograms to density curves."}
   ]
  }
  ],
  checkpoint:["t3u11-q02","t3u11-q06","t3u11-q09","t3u11-q11","t3u11-q15","t3u11-q18","t3u11-q21","t3u11-q24","t3u11-q29","t3u11-q32","t3u11-q38","t3u11-q44"],
  cpBank:[
   {id:"t3u11-cp01", lesson:"t3u11-l1", level:1, q:"A game says each loot box has a 0.04 chance of holding a rare item. Players open 2,500 boxes in all. About how many rare items should turn up?", options:[
     {t:"About 4", why:"0.04 is a share of all boxes, not a count. Multiply it by the number of boxes: 2,500 × 0.04."},
     {t:"About 1,000", why:"That uses 0.4 instead of 0.04. 0.04 is 4 in 100, so 2,500 × 0.04 = 100."},
     {t:"About 100", ok:true, why:"Over many boxes the share settles near the probability, so expect about 2,500 × 0.04 = 100, give or take some chance wobble."},
     {t:"About 40", why:"40 would be 4 in every 250 boxes. 0.04 means 4 in every 100, which is 100 in 2,500."}]},
   {id:"t3u11-cp02", lesson:"t3u11-l1", level:2, q:"Ana has rolled a fair die 5 times without a 6. Her friend says her chance of at least one 6 in the next two rolls must now be higher than usual. What is that chance?", options:[
     {t:"About 0.31, the same as for any two rolls", ok:true, why:"The die has no memory. P(at least one 6) = 1 − (5/6)² = 1 − 0.694 = 0.306, whatever happened before."},
     {t:"Higher than 0.31, because a 6 is now due", why:"That is the gambler’s fallacy. Five rolls without a 6 don’t change the next roll."},
     {t:"Exactly 1/3, because 1/6 + 1/6 = 1/3", why:"Adding counts “6 on both rolls” twice. Use the complement: 1 − (5/6)² ≈ 0.306."},
     {t:"Lower than 0.31, because this die avoids 6", why:"Five rolls without a 6 happen about 40% of the time with a fair die, so they are no real evidence of bias."}]},
   {id:"t3u11-cp03", lesson:"t3u11-l2", level:1, q:"A library’s records for 250 borrowers (invented): 100 are students, and 60 of those students borrowed e-books. In all, 90 borrowers borrowed e-books. Which fraction is **P(e-book | student)**?", options:[
     {t:"60 ÷ 250", why:"That is the joint probability P(student and e-book). “Given student” makes the 100 students the denominator."},
     {t:"60 ÷ 90", why:"That is P(student | e-book): of the e-book borrowers, the share who are students. The condition is reversed."},
     {t:"100 ÷ 250", why:"That is P(student), a marginal probability. It ignores e-books altogether."},
     {t:"60 ÷ 100", ok:true, why:"“Given student” means look only at the 100 students. 60 of them borrowed e-books: 0.6."}]},
   {id:"t3u11-cp04", lesson:"t3u11-l2", level:2, q:"Over a year of commutes, P(the bus is late) = 0.2, P(it rains) = 0.3, and P(late and rain) = 0.06. What do these numbers say?", options:[
     {t:"Late buses and rain look independent: 0.2 × 0.3 = 0.06", ok:true, why:"For independent events P(A and B) = P(A) × P(B), and here it does: 0.06. Equivalently, P(late | rain) = 0.06 ÷ 0.3 = 0.2, the same as overall."},
     {t:"They are mutually exclusive, because 0.06 is small", why:"Mutually exclusive means P(A and B) = 0. Here both happen together 6% of the time."},
     {t:"They are dependent, because both can happen on the same day", why:"Events that can happen together can still be independent. The test is whether P(A and B) equals P(A) × P(B)."},
     {t:"Nothing can be said without the raw counts", why:"The three probabilities are enough for the independence test: compare 0.06 with 0.2 × 0.3."}]},
   {id:"t3u11-cp05", lesson:"t3u11-l3", level:2, q:"A café gives a free drink worth 4 to one customer in 8, chosen at random. On average, how much does this cost the café per customer?", options:[
     {t:"0.125", why:"0.125 is the probability of winning (1 in 8). Multiply it by the value of the prize."},
     {t:"0.50", ok:true, why:"Expected cost = 4 × 1/8 = 0.50 per customer. Over 800 customers, about 100 free drinks, costing about 400."},
     {t:"4", why:"4 is the cost when a customer wins, which happens only 1 time in 8."},
     {t:"3.50", why:"3.50 is 4 − 0.50. The expected cost is 4 × 1/8 = 0.50."}]},
   {id:"t3u11-cp06", lesson:"t3u11-l3", level:3, q:"A fair-ground game costs 2. A wheel has 10 equal sectors; landing on the 1 gold sector pays 15. The owner says, “Over 500 games today I’m almost certain to come out ahead.” Is that right?", options:[
     {t:"No: each game is a gamble, so 500 games are too", why:"Single games are unpredictable, but totals of many games are much steadier. That is why the owner can be confident."},
     {t:"Yes, because players lose 9 games out of 10", why:"Losing often isn’t enough: if the prize were 25, the owner would lose on average. What matters is the expected value."},
     {t:"Yes: +0.50 a game to the owner, and the expected 250 is about 2.5 SDs above zero", ok:true, why:"Players get 15 × 0.1 = 1.50 back for 2, so the owner expects +0.50 a game, 250 over 500. The SD of the total is about 4.5 × √500 ≈ 100, and the owner ends behind only about 1% of the time."},
     {t:"No: one lucky player could wipe out the whole day", why:"One win costs the owner 13 net. It would take 67 or more wins in 500 games (expected 50) to put the owner behind."}]},
   {id:"t3u11-cp07", lesson:"t3u11-l4", level:1, q:"Which count fits the binomial model?", options:[
     {t:"How many eggs you check until you find a cracked one", why:"The number of trials isn’t fixed; you stop at the first success. That is a geometric situation."},
     {t:"How many of the 12 eggs in a box are cracked, when each egg cracks with chance 0.03, independently", ok:true, why:"Fixed n = 12, cracked or not, independent, same p = 0.03 for each egg: all four BINS conditions hold."},
     {t:"The total weight of the 12 eggs in a box", why:"A total weight isn’t a count of successes in yes/no trials."},
     {t:"How many cracked eggs you get taking 4 from a box of 6 that holds 2 cracked", why:"Taking eggs without putting them back from such a small box changes the chance each time."}]},
   {id:"t3u11-cp08", lesson:"t3u11-l4", level:2, q:"Tomás guesses all 6 questions on a true/false quiz. What is the probability that he gets **at least 5** right?", options:[
     {t:"About 0.094", why:"That is P(exactly 5) = 6/64. “At least 5” also includes all 6 right (1/64)."},
     {t:"About 0.016", why:"That is P(all 6 right) = 1/64 only."},
     {t:"About 0.109", ok:true, why:"P(5) + P(6) = 6/64 + 1/64 = 7/64 ≈ 0.109. In a spreadsheet: =1-BINOM.DIST(4,6,0.5,TRUE)."},
     {t:"About 0.891", why:"That is P(4 or fewer), the complement. Subtract it from 1."}]},
   {id:"t3u11-cp09", lesson:"t3u11-l4", level:3, q:"A poll asks 400 randomly chosen voters. If support were really 50%, the number in favour would have mean 200 and SD 10. The poll finds 230 in favour. How surprising is that if support is 50%?", options:[
     {t:"Ordinary: polls of 400 are often 30 people off", why:"30 is 3 SDs. With these numbers, typical misses are within about ±20 (2 SDs)."},
     {t:"Very surprising: 230 is 3 SDs above 200, about 1 or 2 polls in 1,000", ok:true, why:"The count is close to normal (np = 200 ≥ 10). The area beyond 3 SDs is about 0.0013–0.0016, so 50% support fits the poll badly."},
     {t:"A bit unusual: about 5% of polls would show this", why:"5% outside corresponds to about 2 SDs either side. 230 is 3 SDs above the mean, much rarer."},
     {t:"Impossible, so support cannot be 50%", why:"Rare isn’t impossible. A small probability is evidence against 50%, not proof."}]},
   {id:"t3u11-cp10", lesson:"t3u11-l5", level:2, q:"Trips on a train line take a roughly normal time, mean 42 minutes and SD 4. Which formula gives the share of trips that take **more than 50 minutes**?", options:[
     {t:"=NORM.DIST(50,42,4,TRUE)", why:"That is the area to the **left** of 50: trips of 50 minutes or less (0.977)."},
     {t:"=NORM.DIST(50,42,4,FALSE)", why:"FALSE gives the height of the curve at 50, not an area."},
     {t:"=NORM.INV(0.5,42,4)", why:"NORM.INV returns a value, not a share: here the median, 42 minutes."},
     {t:"=1-NORM.DIST(50,42,4,TRUE)", ok:true, why:"The right-hand area is 1 minus the left: 1 − 0.977 = 0.023, about 2 trips in 100 (50 is 2 SDs above the mean)."}]},
   {id:"t3u11-cp11", lesson:"t3u11-l5", level:3, q:"Adults’ weights have SD 15 kg (invented). For 12 people chosen independently, what is the SD of their **total** weight, the number a lift engineer cares about?", options:[
     {t:"About 4.3 kg", why:"That is 15 ÷ √12, the SD of their **average** weight. For a total, the SD grows with √n."},
     {t:"180 kg", why:"That is 15 × 12. Spreads don’t simply add: high and low weights partly cancel."},
     {t:"About 52 kg", ok:true, why:"For a sum of n independent values, the SD is σ × √n = 15 × √12 ≈ 52 kg, as with totals of many bets."},
     {t:"15 kg, the same as for one person", why:"A total of 12 varies more than one person’s weight, just not 12 times more."}]},
   {id:"t3u11-cp12", lesson:"t3u11-l5", level:3, q:"Mei checks a normal model on 200 measurements: 68% lie within 1 SD of the mean and 95% within 2 SDs, but 2% lie beyond 3 SDs. What does this suggest?", options:[
     {t:"The model fits perfectly, because the 68% and 95% match", why:"A normal curve puts only about 0.3% beyond 3 SDs. 2% is several times that, so the tails don’t fit."},
     {t:"The middle fits, but the tails are heavier than normal", ok:true, why:"About 0.3% should lie beyond 3 SDs; 2% is far more than chance would usually give in 200 values. Normal areas would understate extreme values."},
     {t:"The data must contain errors, which should be deleted", why:"Extreme values can be real. Unit 5’s advice holds: investigate before removing anything."},
     {t:"Nothing: with 200 values, any share beyond 3 SDs is fine", why:"With 200 values a normal model expects about 0.5 of a value beyond 3 SDs; 4 values (2%) is a real mismatch."}]}
  ],
  codex:[
   {id:"probability-meaning", title:"What a probability means", aka:["probability","chance","likelihood","law of large numbers","relative frequency","gambler’s fallacy","sample space","odds"], tags:["statistics","probability"],
    summary:"Probability as a number from 0 to 1, where probabilities come from (counting, long-run data, judgement), the law of large numbers, and the gambler’s fallacy.",
    levels:{
     starter:[
      "A [[probability]] is a number from 0 to 1 that says how likely something is: 0 is impossible, 1 is certain, 0.5 is an even chance. You can write it as a fraction (1/4), a decimal (0.25), a percentage (25%) or “1 in 4”.",
      "When outcomes are equally likely, count: a fair die shows an even number with probability 3 ÷ 6 = 0.5. Most real probabilities come instead from **long-run frequency**: if 6% of a firm’s parcels were late last year, 0.06 is a sensible estimate for the next parcel.",
      "The [[law-of-large-numbers|law of large numbers]] says that over many repeats, the share of times something happens settles close to its probability. But it says nothing about the next try. Believing a result is “due” after a run of the opposite (red after five blacks) is the [[gamblers-fallacy|gambler’s fallacy]]: a fair coin or wheel has no memory.",
      {key:"Probability describes the long run. Single results, and small samples, can be far from it."}
     ],
     builder:[
      "**Vocabulary.** A chance process has outcomes; the [[sample-space|sample space]] lists them all; an [[chance-event|event]] is a set of outcomes. With equally likely outcomes, P(event) = outcomes in the event ÷ outcomes in the sample space.",
      "**List outcomes carefully.** Two coins give HH, HT, TH, TT, so one of each has probability 1/2, not 1/3. Two dice have 36 equally likely pairs; a total of 7 has 6 of them (1/6), a total of 12 only one (1/36).",
      "**Three sources of probabilities**: counting equally likely outcomes, [[relative-frequency|relative frequencies]] from past data, and judgement or models (such as forecasts). Judgements can be checked by **calibration**: on all the days a forecaster says 70%, it should rain on about 70%.",
      "**What the law of large numbers promises.** For a fair coin, about 95% of runs of 100 flips give 40% to 60% heads; runs of 10,000 give 49% to 51%. The share narrows roughly with the square root of the number of tries. But the **count** gap from exactly half tends to grow (about ±10 heads at 100 flips, ±98 at 10,000). Early luck is diluted, not corrected.",
      "**Odds are not probabilities.** Odds of 3 to 1 against mean 1 winning chance in 4, a probability of 0.25. Betting odds also include the bookmaker’s margin.",
      {tip:"Streaks are normal: in 100 fair flips, a run of 6 or more identical results turns up about 81% of the time."}
     ],
     pro:[
      "**Interpretations.** The frequency view defines probability as a long-run relative frequency (OpenStax: “the long-term relative frequency of that outcome”). The Bayesian, or subjective, view treats probability as a degree of belief that is updated with evidence; it handles one-off events (an election, a new business) where no long run exists. The same rules of probability apply to both.",
      "**Precise statement.** OpenIntro states the law of large numbers as: the proportion p̂ₙ of occurrences of an outcome converges to its probability p as n grows. The weak law says that for any margin, the chance that p̂ₙ is further than that margin from p goes to 0. It does not say convergence is fast, and it requires independent trials with the same p.",
      "**Rate of convergence.** The SD of p̂ₙ is √(p(1 − p) ÷ n), so precision improves with √n: four times the data halves the typical error. This is the standard error of a proportion used in Unit 7.",
      "**When the past is informative.** For independent trials with a known p, history is irrelevant to the next trial. When p is unknown, a long run of one outcome is evidence about p, which points towards more of the same, not less. When trials are dependent (drawing without replacement, contagious events, weather), history matters through the dependence.",
      "**Hot hand.** Whether success streaks in sport reflect real changes in p has been debated since a 1985 study of basketball shooting (Gilovich, Vallone and Tversky) called the “hot hand” an illusion. Miller and Sanjurjo (2018) showed that the usual way of measuring streaks in a finite sequence is subtly biased, which weakened that conclusion, and the debate continues. The general lesson stands: judge streaks against what chance alone produces, and expect chance to produce many. People asked to invent random sequences switch outcomes too often and make runs too short (Falk and Konold, 1997)."
     ]},
    related:["probability-rules","simulating-chance","random-variables-ev","base-rates","numbers-in-context"],
    read:[{book:"ostat", where:"Chapter 3, Section 3.1 “Terminology”"},{book:"openintro", where:"Chapter 3, Section 3.1 “Defining probability”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 3.1 Terminology", url:"https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology"},{t:"OpenStax Introductory Statistics 2e, 4.2 Mean or Expected Value and Standard Deviation (law of large numbers, Pearson’s 24,000 tosses)", url:"https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation"},{t:"Falk and Konold (1997), “Making sense of randomness: implicit encoding as a basis for judgment”, Psychological Review 104(2)", url:"https://srri.umass.edu/sites/srri/files/FalkKonold1997/index.pdf"}], checked:"2026-11"},

   {id:"probability-rules", title:"Probability rules and two-way tables", aka:["complement rule","addition rule","multiplication rule","joint probability","marginal probability","contingency table","two-way table","mutually exclusive","disjoint events","at least one"], tags:["statistics","probability"],
    summary:"The complement, addition and multiplication rules, and how a two-way table of counts gives joint, marginal and conditional probabilities.",
    levels:{
     starter:[
      "Three words, three rules:",
      {list:[
        "**Not**: P(not A) = 1 − P(A). The chance a die doesn’t show 6 is 5/6.",
        "**Or**: P(A or B) = P(A) + P(B) − P(A and B). Subtract the overlap, which would otherwise be counted twice.",
        "**And**: P(A and B) = P(A) × P(B | A): the chance of A, times the chance of B once A has happened."
      ]},
      "A [[crosstab|two-way table]] of counts makes all three easy to see. If 48 of 1,000 appointments had a reminder and were still missed, P(reminder and missed) = 0.048. If 600 had reminders, P(missed | reminder) = 48 ÷ 600 = 0.08.",
      "Why it matters: almost every statistic comparing two groups (vaccinated or not, online or in person, reminded or not) is a conditional probability, and comparing two of them is how you see whether the groups differ.",
      {key:"Start from counts whenever you can. Most probability mistakes are wrong denominators."}
     ],
     builder:[
      "**Kinds of probability in a table.** A [[joint-probability|joint]] probability is an inside cell ÷ the grand total. A [[marginal-probability|marginal]] probability is a row or column total ÷ the grand total. A conditional probability is an inside cell ÷ its row or column total.",
      "**The complement and “at least one”.** P(at least one) = 1 − P(none). For four rolls of a die, 1 − (5/6)⁴ = 0.518. Adding 1/6 four times (0.67) is wrong, because rolls with two or more 6s are counted more than once.",
      "**Mutually exclusive events** ([[mutually-exclusive|disjoint]]) can’t happen together, so P(A and B) = 0 and P(A or B) = P(A) + P(B). “Attended” and “missed” are mutually exclusive; “reminder” and “missed” are not.",
      "**The [[multiplication-rule|multiplication rule]] with trees.** Each branch carries a conditional probability; multiply along a path. Without replacement, the second branch changes: 3 winning tickets in 10, two drawn, P(both win) = 3/10 × 2/9 ≈ 0.067 (0.09 with replacement).",
      "**In a spreadsheet**, COUNTIFS builds each cell from raw data; divide by the right total. **In R**, `prop.table(tab)` gives joint proportions, `prop.table(tab, 1)` row proportions and `prop.table(tab, 2)` column proportions.",
      "**Quick checks.** Every probability lies between 0 and 1; an event and its complement add to 1; an “or” probability can’t be smaller than either part, and an “and” probability can’t be larger than either part. These checks catch most slips."
     ],
     pro:[
      "**General addition rule for three events**: P(A or B or C) = P(A) + P(B) + P(C) − P(A and B) − P(A and C) − P(B and C) + P(A and B and C) (inclusion–exclusion). In practice a table or a Venn diagram of counts is less error-prone.",
      "**Law of total probability.** If B and not-B split the sample space, P(A) = P(A | B)P(B) + P(A | not B)P(not B). In the clinic example, 0.08 × 0.6 + 0.15 × 0.4 = 0.108. This is the sum of the “A” leaves of a tree, and the denominator in Bayes’ theorem.",
      "**Bayes’ theorem** reverses a condition: P(B | A) = P(A | B)P(B) ÷ P(A). With counts it is simply “the A-and-B cell ÷ the A total”, which is why natural frequencies ({{base-rates}}) make it intuitive.",
      "**Sampling designs.** Probabilities read from a table describe the cases in the table. They estimate population probabilities only if the cases were sampled at random; a convenience sample can give a perfectly calculated but unrepresentative table.",
      "**From tables to tests.** Comparing observed cells with the counts expected under independence (row total × column total ÷ grand total) is the basis of the chi-square test ({{chi-square-tests}}).",
      "**Odds.** Many research papers report odds, p ÷ (1 − p), rather than probabilities, and compare groups with odds ratios. For rare outcomes odds and probabilities are close; for common ones they differ a lot (a probability of 0.5 is odds of 1), so check which one is reported."
     ]},
    related:["conditional-independence","probability-meaning","crosstabs","base-rates","chi-square-tests"],
    read:[{book:"ostat", where:"Chapter 3, Sections 3.3 “Two Basic Rules of Probability” and 3.4 “Contingency Tables”"},{book:"openintro", where:"Chapter 3, Section 3.2.1 “Exploring probabilities with a contingency table” and 3.2.2 “Marginal and joint probabilities”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 3.3 Two Basic Rules of Probability", url:"https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability"},{t:"OpenStax Introductory Statistics 2e, 3.4 Contingency Tables", url:"https://openstax.org/books/introductory-statistics-2e/pages/3-4-contingency-tables"}], checked:"2026-11"},

   {id:"conditional-independence", title:"Conditional probability and independence", aka:["independence","independent events","conditional probability","dependent events","tree diagram","Sally Clark case","multiplying probabilities"], tags:["statistics","probability"],
    summary:"What “given” changes, how to test whether two events are independent, how independence differs from mutual exclusivity, and what goes wrong when it is assumed.",
    levels:{
     starter:[
      "A conditional probability, P(A | B), is the chance of A **among** the cases where B happens. The “|” is read “given”.",
      "Two events are [[independent-events|independent]] when knowing that one happened doesn’t change the chance of the other. Two separate coin flips are independent; rain today and rain tomorrow usually are not.",
      "Independent is **not** the same as “can’t happen together”. Events that can’t happen together (mutually exclusive) are strongly dependent: if one happens, the other becomes impossible.",
      "Only for independent events can you multiply plain probabilities: P(A and B) = P(A) × P(B). Assume independence wrongly and you can make something look far rarer than it is.",
      {key:"Before multiplying chances, ask: could one event make the other more likely, or could both share a cause?"}
     ],
     builder:[
      "**Testing independence.** Any one of these shows it (OpenStax 3.2): P(A | B) = P(A); P(B | A) = P(B); P(A and B) = P(A) × P(B). With a table, compare conditional rates across rows: in a café, cake was bought with 40% of oat-milk orders and 40% of others, so in those data cake and oat milk are independent.",
      "**Expected counts.** If A and B were independent, the A-and-B cell would hold about P(A) × P(B) × total cases. In the clinic example, 0.6 × 0.108 × 1,000 = 64.8 reminded-and-missed appointments were expected; 48 were seen. Unit 7’s chi-square test asks whether such a gap is bigger than chance.",
      "**Reversing the condition.** P(missed | reminder) = 0.08 but P(reminder | missed) = 0.44. Confusing the two is the prosecutor’s fallacy (see {{base-rates}}).",
      "**A [[tree-diagram|tree diagram]]** puts conditional probabilities on branches. Multiply along a path for “and”; add the ends of several paths for “or”.",
      "**Dependence isn’t cause.** Two events can be linked because a third factor drives both (a [[confounder]]).",
      "**Independence in a process versus in data.** Coin flips are independent by design. In real data, two variables are rarely exactly independent; the useful questions are whether the dependence is big enough to matter, and whether it is bigger than chance alone would produce (a test answers the second)."
     ],
     pro:[
      "**The Sally Clark case.** In 1999 a British mother, Sally Clark, was convicted of murdering her two baby sons. An expert witness estimated the chance of one sudden infant death in a family like hers as 1 in 8,543 and squared it to give about 1 in 73 million for two. In a 2002 letter to the Lord Chancellor (following a 2001 statement), the Royal Statistical Society said the calculation was valid only if such deaths arose independently within families, which had not been justified and was very likely false because of shared genetic or environmental factors. It also warned that treating 1 in 73 million as the chance the deaths were accidental is the prosecutor’s fallacy: what matters is the relative likelihood of the deaths under each explanation. Her convictions were overturned on appeal in 2003, mainly because medical evidence had not been disclosed.",
      "**Common-cause failures.** Engineers and risk analysts treat “independent” safeguards with suspicion: backups in one building, two checks that share a blind spot, or software copies with the same bug can fail together. Real systems are designed for diversity (different places, methods or teams) so that the independence assumption is closer to true.",
      "**Conditional independence.** Two variables can be dependent overall but independent within groups, or the reverse. This is the probability side of Simpson’s paradox ({{averages-misleading}})."
     ]},
    related:["probability-rules","base-rates","chi-square-tests","averages-misleading"],
    read:[{book:"ostat", where:"Chapter 3, Section 3.2 “Independent and Mutually Exclusive Events” and Section 3.5 “Tree and Venn Diagrams”"},{book:"openintro", where:"Chapter 3, Section 3.2.3 “Defining conditional probability”, 3.2.6 “Independence considerations in conditional probability” and 3.2.7 “Tree diagrams”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 3.2 Independent and Mutually Exclusive Events", url:"https://openstax.org/books/introductory-statistics-2e/pages/3-2-independent-and-mutually-exclusive-events"},{t:"Royal Statistical Society: letter from the President to the Lord Chancellor regarding the use of statistical evidence in court cases (23 January 2002)", url:"https://www.rss.org.uk/RSS/media/File-library/Membership/Sections/2020/Sally-Clark-RSS-letter-2002.pdf"},{t:"Court of Appeal judgment, R v Clark [2003] EWCA Crim 1020 (11 April 2003)", url:"https://caselaw.nationalarchives.gov.uk/ewca/crim/2003/1020"}], checked:"2026-11"},

   {id:"random-variables-ev", title:"Random variables and expected value", aka:["random variable","expected value","expectation","mean of a random variable","probability distribution","house edge","fair game","standard deviation of a random variable","insurance"], tags:["statistics","probability","money"],
    summary:"Random variables and their distributions, expected value as a long-run average, the house edge, and why spread matters as well as the average.",
    levels:{
     starter:[
      "A [[random-variable|random variable]] is a number that depends on chance: goals in a match, customers in an hour, money won on a bet. Its [[probability-distribution|probability distribution]] lists every possible value with its probability; the probabilities add to 1.",
      "The [[expected-value|expected value]] is the long-run average: multiply each value by its probability and add. If a bakery sells 0 to 4 custom cakes a day with probabilities 0.10, 0.25, 0.35, 0.20 and 0.10, the expected value is 1.95 cakes a day. No single day has 1.95 cakes; it is an average over many days.",
      "For bets, a negative expected value means you lose on average. A bet of 1 on red at European-style roulette is worth −1/37 ≈ −0.027: the [[house-edge|house edge]].",
      {key:"Expected value is the average over many repeats. It doesn’t tell you what happens once, or how widely results swing."}
     ],
     builder:[
      "**Formulas.** E(X) = μ = Σ x × P(x). SD σ = √(Σ (x − μ)² × P(x)). For the cakes, μ = 1.95 and σ ≈ 1.12. In a spreadsheet, `=SUMPRODUCT(values,probabilities)` gives μ; a helper column of `(x − μ)² × P(x)` and SQRT(SUM(…)) gives σ. In R: `sum(x * p)` and `sqrt(sum((x - mu)^2 * p))`.",
      "**Discrete and continuous.** [[discrete-variable|Discrete]] variables have listable values (counts); [[continuous-variable|continuous]] ones take any value in a range, and their probabilities are areas under a curve ({{normal-calculations}}).",
      "**Same average, different risk.** Red and a single number at roulette both have expected value −1/37, but SDs of about 1.00 and 5.84.",
      "**Insurance** usually has a negative expected value for the buyer (premium above expected claims), because the insurer must cover costs and profit. Buying it trades a worse average for less spread, which can be sensible when a loss would be hard to absorb.",
      "**Lotteries** typically pay back well under the ticket price on average; expected value tells you the price of the hope and entertainment.",
      "**Check the distribution first.** Every probability must be between 0 and 1 and together they must add to 1; if not, a value is missing or a probability is wrong. A quick sketch of the bars shows roughly where the balance point should be, which catches arithmetic slips."
     ],
     pro:[
      "**Linearity.** E(aX + b) = aE(X) + b, and E(X + Y) = E(X) + E(Y) always, even for dependent variables. Variances add only for independent variables: Var(X + Y) = Var(X) + Var(Y). Hence the total of n independent copies has mean nμ and SD σ√n, and their average has SD σ ÷ √n, the [[standard-error|standard error]] ({{sampling-distributions}}).",
      "**Why casinos and insurers are confident.** For 10,000 bets of 1 on red, the expected total is −270 and the SD is about 100, so the player is ahead only about 0.3% of the time. For one bet, the outcome is close to a coin toss.",
      "**Limits of expected value.** People reasonably weigh losses more than gains and care about ruin (a loss you can’t recover from); decision theory handles this with utility, and finance with risk measures. Very rare, very large outcomes can dominate an expected value while almost never being seen in data, so estimates of their probabilities deserve scrutiny.",
      "**Variance shortcut.** Var(X) = E(X²) − μ². It is algebraically equal to the definition but can lose precision in floating-point arithmetic when μ is large compared with σ.",
      "**Decisions.** Comparing options by expected cost (overbooking seats, stocking food that spoils, staffing a help line) is routine in operations research, usually alongside the chance of very bad outcomes rather than instead of it."
     ]},
    related:["probability-meaning","binomial-model","normal-calculations","sampling-distributions","centre-spread"],
    read:[{book:"ostat", where:"Chapter 4, Section 4.2 “Mean or Expected Value and Standard Deviation”"},{book:"openintro", where:"Chapter 3, Section 3.4 “Random variables”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 4.2 Mean or Expected Value and Standard Deviation", url:"https://openstax.org/books/introductory-statistics-2e/pages/4-2-mean-or-expected-value-and-standard-deviation"},{t:"OpenIntro Statistics, 4th edition", url:"https://www.openintro.org/book/os/"}], checked:"2026-11"},

   {id:"binomial-model", title:"The binomial distribution", aka:["binomial","BINOM.DIST","BINOMDIST","dbinom","pbinom","rbinom","Bernoulli trial","n choose k","COMBIN","success–failure condition"], tags:["statistics","probability","spreadsheets","R"],
    summary:"When a count of successes is binomial (BINS), the formula, BINOM.DIST and R’s dbinom/pbinom, mean np and SD √(np(1 − p)), and using it to judge a claim.",
    levels:{
     starter:[
      "Many questions count successes in a fixed number of tries: right answers when guessing, seeds that sprout, parcels that arrive late. If four conditions hold, the count follows a [[binomial-distribution|binomial distribution]]. Remember **BINS**: **B**inary outcomes, **I**ndependent trials, a fixed **N**umber of trials, the **S**ame probability each time.",
      "Guessing 10 questions with 4 options each: X ~ B(10, 0.25). The most likely result is 2 right (probability 0.28); the average is 2.5; 5 or more right happens only about 8% of the time.",
      "Spreadsheets give these directly: `=BINOM.DIST(2,10,0.25,FALSE)` for exactly 2, and `=BINOM.DIST(4,10,0.25,TRUE)` for at most 4.",
      "Why it matters: binomial counts sit behind polls (how many say yes), quality checks (how many parts are faulty) and online experiments (how many click), and their spread is the starting point for a poll’s margin of error.",
      {key:"FALSE means “exactly”; TRUE means “this many or fewer”."}
     ],
     builder:[
      "**Formula.** P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ. C(n, k), the [[binomial-coefficient|binomial coefficient]], counts the ways to place k successes among n trials: `=COMBIN(n,k)`, or `choose(n, k)` in R.",
      "**Functions.** Exactly k: `=BINOM.DIST(k,n,p,FALSE)` or `dbinom(k, n, p)`. At most k: `=BINOM.DIST(k,n,p,TRUE)` or `pbinom(k, n, p)`. At least k: `=1-BINOM.DIST(k-1,n,p,TRUE)` or `pbinom(k - 1, n, p, lower.tail = FALSE)`. Between a and b: subtract two [[cumulative-probability|cumulative]] values.",
      "**App differences.** BINOM.DIST is in Excel (2010 and later), Google Sheets and LibreOffice Calc; the older BINOMDIST works in all three and is the only version in Numbers. Excel requires the fourth argument; Google Sheets treats it as optional (default FALSE). BINOM.DIST.RANGE exists in Excel (2013 and later) and Google Sheets; LibreOffice Calc has a similar function, B, and Numbers has neither. LibreOffice may need `;` between arguments.",
      "**Centre and spread.** Mean np, SD √(np(1 − p)). The share X ÷ n has mean p and SD √(p(1 − p) ÷ n).",
      "**Shape.** Skewed when p is near 0 or 1 and n is small; close to normal when np ≥ 10 and n(1 − p) ≥ 10 (the success–failure condition).",
      "**Checking BINS in practice.** Ask whether trials could influence each other (people in one household, seeds in one tray) and whether p could differ between trials (old and new seeds). If so, the binomial is only a rough guide.",
      {warn:"“At least 5” is 1 − P(X ≤ 4), not 1 − P(X ≤ 5)."}
     ],
     pro:[
      "**Simulation.** `rbinom(10000, size = 10, prob = 0.25)` draws 10,000 binomial counts directly; building them from `sample()` makes the 0/1 trials visible. Simulation is the safest check of a formula you are unsure of.",
      "**Without replacement.** Sampling from a small population gives the hypergeometric distribution; the binomial is a good approximation when the sample is under about 10% of the population.",
      "**Normal approximation.** For large n, P(X ≥ k) ≈ the normal area above k − 0.5 (a continuity correction). With n = 100 and p = 0.5, P(X ≥ 60) is 0.0284 exactly and 0.0287 by the approximation. Software makes exact binomial calculation easy, so the approximation matters mainly for understanding.",
      "**Tests.** The probability of a result at least as extreme as the one observed, under a claimed p, is a one-sided p-value: 14 or fewer sprouts in 20 under p = 0.9 has P = 0.0113. R’s `binom.test()` does exact two-sided versions; Unit 7 builds the general logic ({{hypothesis-tests}}).",
      "**Overdispersion.** Real counts often vary more than the binomial predicts because p differs between trials (some seeds are older) or trials cluster. The binomial SD is then too small, and so are the standard errors built on it.",
      "**Quantiles.** `qbinom(0.95, n, p)` gives the smallest count with at least 95% of the probability at or below it, useful for stock levels or alert thresholds. Excel’s BINOM.INV and the older CRITBINOM (also in Numbers) answer the same question."
     ]},
    related:["random-variables-ev","normal-calculations","simulating-chance","hypothesis-tests"],
    read:[{book:"ostat", where:"Chapter 4, Section 4.3 “Binomial Distribution”"},{book:"openintro", where:"Chapter 4, Section 4.3 “Binomial distribution”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 4.3 Binomial Distribution", url:"https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution"},{t:"Microsoft Support: BINOM.DIST function", url:"https://support.microsoft.com/en-US/excel/functions/binom-dist-function"},{t:"R documentation: The Binomial Distribution (dbinom, pbinom, qbinom, rbinom)", url:"https://stat.ethz.ch/R-manual/R-devel/library/stats/html/Binomial.html"}], checked:"2026-11"},

   {id:"normal-calculations", title:"Normal distribution calculations", aka:["normal areas","NORM.DIST","NORMDIST","NORM.INV","NORMINV","pnorm","qnorm","standard normal","z table","normal approximation","density curve"], tags:["statistics","probability","spreadsheets","R"],
    summary:"Probabilities for continuous variables as areas, the standard normal and z, NORM.DIST/NORM.INV and pnorm/qnorm, checking whether a normal model fits, and why averages look normal.",
    levels:{
     starter:[
      "For a measurement like a weight or a time, probabilities are **areas under a curve** (a [[density-curve|density curve]]); the total area is 1. The chance of one exact value is 0, so only ranges have probabilities.",
      "For a [[normal-distribution|normal]] curve with mean μ and SD σ, the area depends only on the [[z-score|z-score]], z = (x − μ) ÷ σ. Rice bags with mean 1,010 g and SD 6 g: 1,000 g has z = −1.67, and 4.8% of bags weigh less.",
      "In a spreadsheet, `=NORM.DIST(1000,1010,6,TRUE)` gives that area to the left (0.0478). In R, `pnorm(1000, 1010, 6)` does the same.",
      "Why it matters: normal areas answer quality questions (what share of products is out of specification), set cut-offs (the top 10% of scores) and, above all, describe how sample averages vary, which is the basis of confidence intervals and tests.",
      {key:"Left area: NORM.DIST(…, TRUE). Right area: 1 minus that. Between: subtract two left areas."}
     ],
     builder:[
      "**The reverse question.** `=NORM.INV(p, mean, SD)` or `qnorm(p, mean, SD)` gives the value with an area p to its left: `=NORM.INV(0.99,1010,6)` = 1,023.96 g. For a “top 10%” cut-off use p = 0.9.",
      "**The [[standard-normal|standard normal]]** has mean 0 and SD 1. Useful values: P(Z < 1.645) = 0.95, P(Z < 1.96) = 0.975, so 95% lies within ±1.96. That 1.96 is the multiplier in 95% confidence intervals ({{standard-error-ci}}).",
      "**App differences.** NORM.DIST and NORM.INV are in Excel (2010 and later), Google Sheets and LibreOffice Calc; NORMDIST and NORMINV work in all three and are the only versions in Numbers. Excel’s NORM.S.DIST needs (z, TRUE), while Google Sheets’ function list shows it with one argument, so `=NORM.DIST(z,0,1,TRUE)` is the portable choice.",
      {warn:"With FALSE, NORM.DIST returns the curve’s height (density), not a probability. `dnorm` in R is the same."},
      "**Setting targets.** To have at most 1% of bags under 1,000 g with SD 6 g, set the mean to 1,000 + 2.326 × 6 ≈ 1,014 g.",
      "**Right and between in R.** `pnorm(x, m, s, lower.tail = FALSE)` gives the right-hand area (more precise than 1 − pnorm far out in the tail), and `pnorm(b, m, s) - pnorm(a, m, s)` the area between a and b."
     ],
     pro:[
      "**Checking fit.** Compare the shares within 1, 2 and 3 SDs with 68.3%, 95.4% and 99.7%; better, draw a normal quantile (Q–Q) plot, which is straight for normal data. Skewed data (waiting times, incomes) and heavy-tailed data (many financial returns) fit badly; a normal model that predicts impossible values, such as negative waiting times, is a clear warning.",
      "**Tails are where models break.** Even data that look normal in the middle often have more extreme values than the normal curve predicts. Probabilities computed far out in the tail (beyond about 3 SDs) are especially sensitive to the model.",
      "**Sums and averages.** The average of n independent values has SD σ ÷ √n and, by the central limit theorem, is close to normal for large enough n even when single values aren’t ({{central-limit-theorem}}). Normal data give exactly normal averages for any n.",
      "**Normal approximation to the binomial.** With np and n(1 − p) both at least 10, a binomial count is close to N(np, √(np(1 − p))); use k − 0.5 or k + 0.5 as the cut-off for counts.",
      "**Precision.** Spreadsheet and R functions compute these areas to many more digits than printed tables, and also handle extreme tails that tables omit.",
      "**Inverse limits.** NORM.INV and qnorm need a probability strictly between 0 and 1. Spreadsheets return an error for 0 or 1, and R returns -Inf or Inf, because the normal curve’s tails go on for ever."
     ]},
    related:["distributions","z-scores","binomial-model","central-limit-theorem","standard-error-ci"],
    read:[{book:"ostat", where:"Chapter 6, Sections 6.1 “The Standard Normal Distribution” and 6.2 “Using the Normal Distribution”"},{book:"openintro", where:"Chapter 4, Section 4.1 “Normal distribution”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 6.2 Using the Normal Distribution", url:"https://openstax.org/books/introductory-statistics-2e/pages/6-2-using-the-normal-distribution"},{t:"Microsoft Support: NORM.DIST function", url:"https://support.microsoft.com/en-US/Excel/functions/norm-dist-function"},{t:"R documentation: The Normal Distribution (dnorm, pnorm, qnorm, rnorm)", url:"https://search.r-project.org/R/refmans/stats/html/Normal.html"}], checked:"2026-11"},

   {id:"simulating-chance", title:"Simulating chance in spreadsheets and R", aka:["simulation","Monte Carlo","RAND","RANDBETWEEN","sample()","replicate()","set.seed","random seed","pseudo-random numbers"], tags:["statistics","probability","spreadsheets","R"],
    summary:"Using random numbers to imitate chance processes: RAND and RANDBETWEEN in spreadsheets, sample, replicate and set.seed in R, and how to read simulation results.",
    levels:{
     starter:[
      "A [[chance-simulation|simulation]] imitates a chance process with random numbers, repeats it many times and counts what happens. It answers probability questions without formulas and lets you watch the law of large numbers at work.",
      "In a spreadsheet: `=RANDBETWEEN(0,1)` flips a coin (1 = heads); `=RANDBETWEEN(1,6)` rolls a die; `=IF(RAND()<0.3,1,0)` gives 1 with probability 0.3. These recalculate whenever the sheet changes.",
      "In R, `sample(c(\"H\", \"T\"), 100, replace = TRUE)` flips 100 coins, and `replicate(1000, …)` repeats any experiment 1,000 times.",
      "Why it matters: simulation lets you check a formula, explore questions with no simple formula, and see how much results vary by chance alone, which is the central idea of statistical inference.",
      {key:"More repeats give more precise answers, but a simulation is only as good as the process it imitates."}
     ],
     builder:[
      "**Pseudo-random numbers.** Computers generate numbers that look random from a starting value, the [[random-seed|seed]]. In R, `set.seed(2)` before a simulation makes it repeatable: anyone running the same code gets the same numbers. Spreadsheet RAND has no simple seed, so record results you want to keep (copy and paste as values).",
      "**A simulation recipe.** (1) Model one trial (a flip, a roll, a guess with p = 0.25). (2) Model one repetition of the whole experiment (10 guesses, then count). (3) Repeat it many times. (4) Summarise: shares, averages, a histogram.",
      "**Useful R pieces.** `sample(x, n, replace = TRUE, prob = …)` draws with given probabilities; `mean(v == \"H\")` is the share of TRUE values; `table(v) / length(v)` gives the share of each value; `rle(v)$lengths` gives the lengths of runs; `rbinom()` and `rnorm()` draw binomial and normal values directly.",
      "**How precise?** A simulated share from N repeats has an SD of about √(p(1 − p) ÷ N): with 10,000 repeats and p near 0.3, about ±0.005. That is why simulated binomial shares in this unit land within about one percentage point of the exact values.",
      "**Spreadsheets recalculate.** Every edit redraws RAND and RANDBETWEEN values, so totals change under your eyes. To keep one set of results, copy the cells and paste them as values only (Paste special; the exact menu name differs slightly between apps)."
     ],
     pro:[
      "**Monte Carlo methods** use simulation for problems with no tidy formula: complicated risks, queues, and many modern statistical methods (bootstrap intervals, permutation tests, Bayesian computation). Unit 7’s shuffling test is one.",
      "**Generators.** R’s default generator is the Mersenne Twister; since R 3.6.0 `sample()` uses a “Rejection” method by default, so very old code can give different results with the same seed. Spreadsheet apps use their own generators and don’t promise reproducibility across apps or versions.",
      "**Checking a simulation.** Compare it with a case you can solve exactly (a fair coin, B(10, 0.25)) before trusting it on a hard one; run it with more repeats and confirm the answer settles; and vary the seed to see the chance wobble.",
      "**Garbage in.** A simulation that assumes independence, a fixed p or a normal shape inherits every weakness of those assumptions. Simulations are honest about chance variation but say nothing about whether the model matches the world.",
      "**How many repeats?** Rare events need many. To estimate a 1-in-1,000 chance to within about ±10% of its value, 95% of the time, you need roughly 400,000 repeats, because the standard error √(p(1 − p) ÷ N) must be about 5% of p."
     ]},
    related:["probability-meaning","binomial-model","sampling-distributions","r-intro"],
    read:[{book:"openintro", where:"Chapter 3, Section 3.1.2 “Probability” (simulating die rolls)"},{book:"ostat", where:"Chapter 3, Section 3.1 “Terminology”", note:"Background reading on the law of large numbers that simulations demonstrate."}],
    sources:[{t:"Google Docs Editors Help: Google Sheets function list (RAND, RANDBETWEEN)", url:"https://support.google.com/docs/table/25273"},{t:"R documentation: The Binomial Distribution (rbinom)", url:"https://stat.ethz.ch/R-manual/R-devel/library/stats/html/Binomial.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"probability", term:"Probability", def:"A number from 0 (impossible) to 1 (certain) that says how likely an event is. It can be written as a fraction, a decimal or a percentage.", codex:"probability-meaning"},
   {id:"sample-space", term:"Sample space", def:"The list of all possible outcomes of a chance process, such as 1 to 6 for one roll of a die.", codex:"probability-meaning"},
   {id:"chance-event", term:"Event (in probability)", def:"A set of outcomes you are interested in, such as “an even number” when a die is rolled.", codex:"probability-meaning"},
   {id:"relative-frequency", term:"Relative frequency", def:"How often something happened as a share of all cases: a count divided by the total. Over many repeats it estimates a probability.", codex:"probability-meaning"},
   {id:"law-of-large-numbers", term:"Law of large numbers", def:"As a chance process is repeated more and more times, the share of times an outcome happens gets closer to its probability. Early luck is diluted, not cancelled.", codex:"probability-meaning"},
   {id:"gamblers-fallacy", term:"Gambler’s fallacy", def:"The mistaken belief that past results of an independent chance process change the next one, such as thinking red is “due” after a run of blacks.", codex:"probability-meaning"},
   {id:"chance-simulation", term:"Simulation (of chance)", def:"Using random numbers on a computer to imitate a chance process many times, then counting what happens.", codex:"simulating-chance"},
   {id:"random-seed", term:"Random seed", def:"The starting value for a computer’s pseudo-random numbers. Setting it, for example with set.seed() in R, makes a simulation give the same results every time.", codex:"simulating-chance"},
   {id:"complement-event", term:"Complement", def:"Everything in the sample space except a given event: “not A”. P(not A) = 1 − P(A).", codex:"probability-rules"},
   {id:"addition-rule", term:"Addition rule", def:"P(A or B) = P(A) + P(B) − P(A and B). The overlap is subtracted so it isn’t counted twice.", codex:"probability-rules"},
   {id:"mutually-exclusive", term:"Mutually exclusive (disjoint)", def:"Describes events that can’t happen together, such as one roll of a die showing 2 and showing 5. For them, P(A and B) = 0.", codex:"probability-rules"},
   {id:"multiplication-rule", term:"Multiplication rule", def:"P(A and B) = P(A) × P(B | A). For independent events it becomes P(A) × P(B).", codex:"probability-rules"},
   {id:"joint-probability", term:"Joint probability", def:"The probability that two things both happen. In a two-way table: an inside cell divided by the grand total.", codex:"probability-rules"},
   {id:"marginal-probability", term:"Marginal probability", def:"The probability of one thing on its own, ignoring the other variable. In a two-way table: a row or column total divided by the grand total.", codex:"probability-rules"},
   {id:"tree-diagram", term:"Tree diagram", def:"A diagram of branching outcomes with a probability on each branch. Multiply along a path for “and”; add the ends of paths for “or”.", codex:"conditional-independence"},
   {id:"independent-events", term:"Independent events", def:"Events where knowing that one happened doesn’t change the probability of the other: P(A | B) = P(A), or equivalently P(A and B) = P(A) × P(B).", codex:"conditional-independence"},
   {id:"random-variable", term:"Random variable", def:"A number whose value depends on chance, such as the number of heads in 10 flips or the minutes a delivery takes.", codex:"random-variables-ev"},
   {id:"discrete-variable", term:"Discrete random variable", def:"A random variable with separate values you can list, usually counts such as 0, 1, 2, 3.", codex:"random-variables-ev"},
   {id:"continuous-variable", term:"Continuous random variable", def:"A random variable that can take any value in a range, such as a weight or a time. Its probabilities are areas under a curve.", codex:"normal-calculations"},
   {id:"probability-distribution", term:"Probability distribution", def:"Every possible value of a random variable together with its probability. The probabilities are between 0 and 1 and add up to 1.", codex:"random-variables-ev"},
   {id:"expected-value", term:"Expected value", def:"The long-run average of a random variable: each value times its probability, all added up. Written E(X) or μ.", codex:"random-variables-ev"},
   {id:"house-edge", term:"House edge", def:"The average share of each bet that a casino or lottery keeps: the player’s negative expected value, such as 1/37 (about 2.7%) on a bet on red at European-style roulette.", codex:"random-variables-ev"},
   {id:"bernoulli-trial", term:"Bernoulli trial", def:"A single chance trial with exactly two outcomes, called success and failure, such as one coin flip or one guessed question.", codex:"binomial-model"},
   {id:"binomial-distribution", term:"Binomial distribution", def:"The distribution of the number of successes in n independent trials, each with the same success probability p. Written B(n, p); mean np, SD √(np(1 − p)).", codex:"binomial-model"},
   {id:"binomial-coefficient", term:"Binomial coefficient", def:"C(n, k), read “n choose k”: the number of ways to choose which k of n trials are successes. COMBIN in spreadsheets, choose() in R.", codex:"binomial-model"},
   {id:"cumulative-probability", term:"Cumulative probability", def:"The probability of a value or anything below it, P(X ≤ x). It is the TRUE option of BINOM.DIST and NORM.DIST, and the p functions in R (pbinom, pnorm).", codex:"binomial-model"},
   {id:"density-curve", term:"Density curve", def:"A smooth curve for a continuous variable with a total area of 1. The area over a range is the probability of a value in that range.", codex:"normal-calculations"},
   {id:"standard-normal", term:"Standard normal distribution", def:"The normal distribution with mean 0 and SD 1. Any normal value converts to it with a z-score.", codex:"normal-calculations"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u11-q01", lesson:"t3u11-l1", level:1, q:"Which of these **cannot** be a probability?", options:[
     {t:"1.2", ok:true, why:"Probabilities run from 0 to 1. A value above 1 would mean “more than certain”, which is impossible."},
     {t:"0", why:"0 is a valid probability: the event is impossible, like a die showing 7."},
     {t:"0.999", why:"0.999 is a valid probability: very likely, but not certain."},
     {t:"1/3", why:"1/3 ≈ 0.333 lies between 0 and 1, so it is a valid probability."}
   ]},
   {id:"t3u11-q02", lesson:"t3u11-l1", level:1, q:"What does the law of large numbers say?", options:[
     {t:"As a process repeats, an outcome’s share gets closer to its probability.", ok:true, why:"That is the law: the share of times an outcome happens (its relative frequency) settles near the probability in the long run (OpenStax 3.1)."},
     {t:"After many repeats, the number of heads and tails becomes exactly equal.", why:"The count gap from exactly half usually grows; only the share settles. Pearson ended with 12 more heads than half."},
     {t:"After a run of one outcome, the opposite outcome becomes more likely so things balance out.", why:"That is the gambler’s fallacy. Independent trials have no memory."},
     {t:"Small samples show the same proportions as the whole population.", why:"Small samples vary a lot. The law is about large numbers of repeats."}
   ]},
   {id:"t3u11-q03", lesson:"t3u11-l1", level:2, q:"A spinner has 8 equal sectors: 3 blue, 4 yellow and 1 red. What is the probability that it does **not** land on yellow?", options:[
     {t:"0.5", ok:true, why:"Not yellow means blue or red: 3 + 1 = 4 of the 8 equal sectors. 4 ÷ 8 = 0.5."},
     {t:"0.375", why:"0.375 is 3 ÷ 8, blue only. Red is also “not yellow”."},
     {t:"0.67", why:"That treats the three colours as the outcomes (2 of 3 aren’t yellow). The colours don’t have equal-sized sectors; count the 8 sectors."},
     {t:"0.125", why:"0.125 is 1 ÷ 8, red only."}
   ]},
   {id:"t3u11-q04", lesson:"t3u11-l1", level:2, q:"Three fair coins are flipped. What is the probability of **exactly two heads**?", options:[
     {t:"3/8", ok:true, why:"There are 8 equally likely outcomes (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT). Three have exactly two heads: 3/8."},
     {t:"1/4", why:"That treats 0, 1, 2 and 3 heads as equally likely. They aren’t: 1 or 2 heads can happen in three ways each, 0 or 3 heads in only one."},
     {t:"1/3", why:"There is no list of three equally likely outcomes here. List the 8 outcomes coin by coin."},
     {t:"1/8", why:"1/8 is the chance of one particular sequence, such as HHT. Three sequences give exactly two heads."}
   ]},
   {id:"t3u11-q05", lesson:"t3u11-l1", level:3, q:"Over two years, a weather service said “80% chance of rain” on 50 days. It rained on 22 of them. What does this suggest?", options:[
     {t:"On those days the forecasts were badly calibrated: it rained 44% of the time, far below 80%.", ok:true, why:"A well-calibrated 80% forecast should see rain on about 40 of 50 days. 22 of 50 (44%) suggests the service was overconfident on those days."},
     {t:"Nothing: a probability can never be checked.", why:"A single forecast can’t be checked, but many forecasts at the same level can be compared with how often it rained."},
     {t:"The forecasts were right whenever it rained and wrong whenever it didn’t.", why:"An 80% forecast expects dry days 20% of the time. Judge the share over many days, not each day."},
     {t:"The forecasts were good, because it rained on many of the days.", why:"Rain on 44% of days is a long way from the 80% promised."}
   ]},
   {id:"t3u11-q06", lesson:"t3u11-l1", level:2, q:"Fatima always chooses the lottery numbers that have come up least often in past draws, because she thinks they are “due”. What is the problem?", options:[
     {t:"Each draw is independent, so past draws don’t change which numbers come up next.", ok:true, why:"This is the gambler’s fallacy. In a fair draw every combination has the same chance every time."},
     {t:"She should choose the numbers that have come up most often, because they are “hot”.", why:"That is the same mistake in reverse. A fair draw has no hot or cold numbers."},
     {t:"Rare numbers are less likely, because they have shown they come up less.", why:"Small differences in past counts are normal chance variation in a fair draw, not evidence that some numbers are less likely."},
     {t:"There is no problem; the law of large numbers makes rare numbers catch up.", why:"The law of large numbers works by diluting early differences over many draws, not by making lagging numbers more likely."}
   ]},
   {id:"t3u11-q07", lesson:"t3u11-l1", level:2, q:"Sione simulates 20 coin flips and gets 65% heads. Then he simulates 2,000 flips and gets 50.8%. Which statement is right?", options:[
     {t:"The 2,000-flip result is the more reliable estimate; short runs wobble much more.", ok:true, why:"By the law of large numbers, the share from many flips is usually close to the true probability, while 20 flips often give anywhere from 30% to 70%."},
     {t:"The coin must have changed between the two simulations.", why:"Both results are typical of a fair coin. 13 heads in 20 is common."},
     {t:"The two results cancel out, so the true answer is their average, 57.9%.", why:"Averaging the shares gives the small run far too much weight. Combined, there are 1,029 heads in 2,020 flips: about 50.9%."},
     {t:"Simulations can’t tell you anything about real coins.", why:"A simulation of a fair coin shows exactly how much a fair coin’s results wobble, which is what helps us judge real results."}
   ]},
   {id:"t3u11-q08", lesson:"t3u11-l1", level:1, q:"Why might an R simulation start with `set.seed(42)`?", options:[
     {t:"So the same “random” numbers come out every time it runs", ok:true, why:"This makes the results repeatable. Computers make pseudo-random numbers from a starting value. Fixing the seed lets anyone reproduce and check the results."},
     {t:"To make the results more accurate", why:"The seed doesn’t change accuracy; more repeats do. It only fixes which random numbers are used."},
     {t:"To make the numbers truly random instead of pseudo-random", why:"The opposite: a seed makes the sequence predictable and repeatable."},
     {t:"Because 42 gives the most even results", why:"Any number works as a seed. 42 is just a popular choice."}
   ]},
   {id:"t3u11-q09", lesson:"t3u11-l1", level:3, q:"A fair coin is flipped 10,000 times. Which result is most plausible?", options:[
     {t:"Somewhere between about 4,900 and 5,100 heads", ok:true, why:"About 95% of runs of 10,000 fair flips give between 4,902 and 5,098 heads: within about 1 percentage point of 50%."},
     {t:"Exactly 5,000 heads, by the law of large numbers", why:"Exactly 5,000 is possible but has a probability of under 1%. The law makes the share close to 50%, not the count exactly half."},
     {t:"Between 4,995 and 5,005 heads, because the gap from half almost disappears", why:"The count gap usually grows with more flips (typically dozens here). Only the share gets closer to 50%."},
     {t:"Any number from 4,000 to 6,000 is about equally likely", why:"Results near 5,000 are far more likely than results near 4,000 or 6,000; 4,000 heads would be almost impossible."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t3u11-q10", lesson:"t3u11-l2", level:1, q:"In a two-way table of counts, how do you find a **marginal** probability?", options:[
     {t:"Divide a row or column total by the grand total.", ok:true, why:"A marginal probability is about one variable on its own, so it uses a total from the margin of the table."},
     {t:"Divide an inside cell by the grand total.", why:"That gives a joint probability: both things happening."},
     {t:"Divide an inside cell by its row total.", why:"That gives a conditional probability: within that row’s group."},
     {t:"Add up all the inside cells.", why:"That gives the grand total, a count, not a probability."}
   ]},
   {id:"t3u11-q11", lesson:"t3u11-l2", level:2, q:"A survey of 400 adults (invented): of 200 under 40, 50 cycle to work; of 200 aged 40 or over, 30 cycle. What is **P(cycles | under 40)**?", options:[
     {t:"0.25", ok:true, why:"Look only at the 200 people under 40: 50 of them cycle. 50 ÷ 200 = 0.25."},
     {t:"0.125", why:"0.125 is 50 ÷ 400, the joint probability P(under 40 and cycles)."},
     {t:"0.625", why:"0.625 is 50 ÷ 80, P(under 40 | cycles): the condition is reversed."},
     {t:"0.2", why:"0.2 is 80 ÷ 400, the share of everyone who cycles. The question is about people under 40 only."}
   ]},
   {id:"t3u11-q12", lesson:"t3u11-l2", level:2, q:"Same survey: 200 under 40 (50 cycle) and 200 aged 40 or over (30 cycle). One person is picked at random. What is **P(under 40 or cycles)**?", options:[
     {t:"0.575", ok:true, why:"0.5 + 0.2 − 0.125 = 0.575. With counts: the 200 under 40 plus the 30 older cyclists = 230 of 400."},
     {t:"0.7", why:"0.7 adds 0.5 and 0.2 without subtracting the 50 people who are both under 40 and cyclists."},
     {t:"0.125", why:"0.125 is the “and” probability. “Or” includes anyone in either group."},
     {t:"0.5", why:"0.5 is P(under 40). The older cyclists also count."}
   ]},
   {id:"t3u11-q13", lesson:"t3u11-l2", level:3, q:"Same survey: 25% of people under 40 cycle, 15% of people 40 or over cycle, and 20% cycle overall. Are “cycling” and “age group” independent?", options:[
     {t:"No: the chance of cycling changes with age group (25% against 15%).", ok:true, why:"Independence would need P(cycles | under 40) = P(cycles) = 0.2. It is 0.25, so knowing the age group changes the chance."},
     {t:"Yes, because both age groups have 200 people.", why:"Equal group sizes say nothing about independence. Compare the rates of cycling in each group."},
     {t:"No, because they are mutually exclusive.", why:"They aren’t mutually exclusive: 50 people are both under 40 and cyclists."},
     {t:"Yes, because the overall rate (20%) is between 15% and 25%.", why:"The overall rate is always a weighted average of the group rates. Independence needs the group rates to be equal."}
   ]},
   {id:"t3u11-q14", lesson:"t3u11-l2", level:1, q:"Which pair of events is **mutually exclusive**?", options:[
     {t:"A random month has 31 days; the same month has 30 days", ok:true, why:"A month can’t have both 31 and 30 days, so the events can’t happen together."},
     {t:"Two different people each roll a 6", why:"Both can happen. These events are independent, not mutually exclusive."},
     {t:"A customer buys bread; the same customer also buys some milk", why:"A customer can buy both, so they aren’t mutually exclusive."},
     {t:"It rains today; it rains tomorrow", why:"Both days can be rainy."}
   ]},
   {id:"t3u11-q15", lesson:"t3u11-l2", level:2, q:"A phone’s face unlock fails 5% of the time, independently each try. What is the probability of **at least one failure** in 10 tries?", options:[
     {t:"About 0.40", ok:true, why:"P(no failures) = 0.95¹⁰ ≈ 0.599, so P(at least one) = 1 − 0.599 ≈ 0.401."},
     {t:"0.50", why:"0.50 adds 0.05 ten times. That counts tries with two or more failures more than once; use 1 − P(none)."},
     {t:"About 0.60", why:"0.60 is the chance of **no** failures. Subtract it from 1."},
     {t:"0.05", why:"0.05 is the chance of failing on one particular try. Over ten tries, at least one failure is much more likely."}
   ]},
   {id:"t3u11-q16", lesson:"t3u11-l2", level:2, q:"A box holds 12 eggs, and 5 are cracked. Two eggs are taken at random, without putting the first back. What is the probability that **both** are cracked?", options:[
     {t:"About 0.15", ok:true, why:"5/12 × 4/11 = 20/132 ≈ 0.152. After one cracked egg is taken, 4 cracked remain among 11."},
     {t:"About 0.17", why:"0.17 is 5/12 × 5/12, as if the first egg were put back."},
     {t:"About 0.42", why:"0.42 is 5/12, the chance for the first egg only."},
     {t:"About 0.83", why:"0.83 adds 5/12 twice. “Both” needs the multiplication rule."}
   ]},
   {id:"t3u11-q17", lesson:"t3u11-l2", level:3, q:"A post says: “Most people hurt in serious car crashes were wearing seat belts, so seat belts don’t help.” What is the main error?", options:[
     {t:"It uses P(belt | hurt) when the question needs P(hurt | belt) compared with P(hurt | no belt).", ok:true, why:"If most people wear belts, most crash victims will too. Whether belts help depends on the injury rate among belted versus unbelted people."},
     {t:"It should have used the addition rule.", why:"The problem is which conditional probability is being used, not the rule for “or”."},
     {t:"Seat belts and injuries are mutually exclusive.", why:"Belted people can be hurt; the events can happen together."},
     {t:"There is no error if the numbers are accurate.", why:"Accurate numbers answer the wrong question. Swapping the condition is the same mistake as the prosecutor’s fallacy."}
   ]},
   {id:"t3u11-q18", lesson:"t3u11-l2", level:3, q:"A report says each of a bridge’s two support cables has a 1 in 1,000 chance of failing in a storm, so both failing has a 1 in a million chance. What is the main concern?", options:[
     {t:"Failures may share causes, so they aren’t independent.", ok:true, why:"The same storm, corrosion or a design flaw could hit both, so the real chance could be much higher. Multiplying is valid only for independent events. Shared causes make joint failure far more likely than the product suggests."},
     {t:"The probabilities should have been added: 2 in 1,000.", why:"Adding gives the chance that at least one fails (roughly), not that both fail."},
     {t:"1 in a million is too small to be a probability.", why:"Any number from 0 to 1 is a valid probability, however small."},
     {t:"The cables are mutually exclusive, so both can’t fail.", why:"Both cables can fail in the same storm; that is exactly the worry."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t3u11-q19", lesson:"t3u11-l3", level:1, q:"Which is a **discrete** random variable?", options:[
     {t:"The number of emails you receive in the next hour", ok:true, why:"A count with separate values (0, 1, 2…) is discrete."},
     {t:"The time until your next email arrives", why:"Time can take any value in a range, so it is continuous."},
     {t:"The weight of a randomly chosen apple", why:"Weight is a measurement on a continuous scale."},
     {t:"Tomorrow’s highest temperature", why:"Temperature is measured on a continuous scale, even if it is rounded when reported."}
   ]},
   {id:"t3u11-q20", lesson:"t3u11-l3", level:2, q:"A table claims to show a probability distribution: x = 0, 1, 2 with P(x) = 0.5, 0.3, 0.3. What is wrong?", options:[
     {t:"The probabilities add to 1.1, not exactly 1.", ok:true, why:"Every possible value is listed, so their probabilities must total 1. One of them is too large."},
     {t:"Two values can’t have the same probability.", why:"Equal probabilities are fine (a fair die has six)."},
     {t:"A probability distribution can’t include 0 as a value.", why:"0 is a perfectly good value, for example zero customers."},
     {t:"Nothing is wrong; probabilities can add to more than 1.", why:"For a complete list of possible values, the total must be exactly 1."}
   ]},
   {id:"t3u11-q21", lesson:"t3u11-l3", level:2, q:"A small theatre sells x late tickets per day with these probabilities: 0: 0.1, 1: 0.3, 2: 0.4, 3: 0.2. What is the expected number of late tickets per day?", options:[
     {t:"1.7", ok:true, why:"0 × 0.1 + 1 × 0.3 + 2 × 0.4 + 3 × 0.2 = 0 + 0.3 + 0.8 + 0.6 = 1.7."},
     {t:"1.5", why:"1.5 is the plain average of 0, 1, 2 and 3. Weight each value by its probability."},
     {t:"2", why:"2 is the most likely value (0.4), not the long-run average."},
     {t:"0.25", why:"0.25 is the average of the probabilities, which always comes out as 1 ÷ (number of values)."}
   ]},
   {id:"t3u11-q22", lesson:"t3u11-l3", level:2, q:"You pay 3 to draw one card from a box of 10. One card wins 20; the others win nothing. What is your expected gain per game?", options:[
     {t:"−1", ok:true, why:"Expected winnings: 20 × 1/10 = 2. Subtract the 3 you paid: 2 − 3 = −1."},
     {t:"+17", why:"17 is your gain when you win (20 − 3). That happens only 1 time in 10."},
     {t:"+2", why:"2 is the average amount you get back. Subtract the cost."},
     {t:"−3", why:"−3 is your result when you lose. Average over both outcomes."}
   ]},
   {id:"t3u11-q23", lesson:"t3u11-l3", level:2, q:"A bet of 1 wins 2 (plus your stake back) with probability 0.25, and otherwise loses the 1. What is its expected value?", options:[
     {t:"−0.25", ok:true, why:"(+2) × 0.25 + (−1) × 0.75 = 0.50 − 0.75 = −0.25 per bet."},
     {t:"+0.50", why:"That counts only the winning side. Include the 75% of bets that lose 1."},
     {t:"−0.75", why:"That counts only the losing side. Add the expected winnings of 0.50."},
     {t:"0, because the prize is twice the stake", why:"A prize of twice the stake would be fair only if you won 1 time in 3. Here you win 1 time in 4."}
   ]},
   {id:"t3u11-q24", lesson:"t3u11-l3", level:3, q:"Dmitri’s bike is worth 800. He estimates a 4% chance it is stolen this year. Theft insurance costs 50 a year. Which statement is right?", options:[
     {t:"On average insurance costs him 18 more than it pays back.", ok:true, why:"Expected loss = 0.04 × 800 = 32. He is paying to avoid a small chance of losing 800. Paying 50 for certain costs 18 more on average, in exchange for removing a 4% chance of a big loss."},
     {t:"Insurance is a good deal, because 800 is much more than 50.", why:"The 800 is lost only 4% of the time, so the expected loss is 32, less than the premium."},
     {t:"Insurance is fair, because the insurer takes the risk.", why:"A fair price would equal the expected loss (32). 50 is above it, which pays the insurer’s costs and profit."},
     {t:"Expected value proves he should not insure.", why:"Expected value shows the average cost. Whether reducing risk is worth 18 a year depends on how much an 800 loss would hurt him."}
   ]},
   {id:"t3u11-q25", lesson:"t3u11-l3", level:2, q:"Bet A wins 10 or loses 10, each with probability 0.5. Bet B wins 1 or loses 1, each with probability 0.5. Which statement is right?", options:[
     {t:"Both have expected value 0, but A is much riskier.", ok:true, why:"Each outcome is 10 (or 1) from the mean of 0, so A’s SD is 10 against B’s 1. Same average, very different spread."},
     {t:"A has the higher expected value, because it can win 10.", why:"A can also lose 10, equally often, so its expected value is 0, the same as B’s."},
     {t:"They are the same bet, because both are 50–50.", why:"The chances are the same, but the amounts differ, so the spreads differ."},
     {t:"B is riskier, because small bets are played more often.", why:"Risk here is the spread of one bet’s outcome. A’s outcomes are ten times as far from the average."}
   ]},
   {id:"t3u11-q26", lesson:"t3u11-l3", level:3, q:"An insurer sells 10,000 independent policies. Each has an expected claim of 30 and an SD of 130. What can it expect for total claims?", options:[
     {t:"Very likely between about 274,000 and 326,000", ok:true, why:"Expected total = 10,000 × 30 = 300,000. SD of the total = 130 × √10,000 = 13,000, so about 95% of years fall within 300,000 ± 26,000."},
     {t:"Exactly 300,000", why:"300,000 is the expected total, but chance still moves it by thousands each year."},
     {t:"As unpredictable as a single policy, anywhere from 0 to millions", why:"Independent policies average out: the SD of the total grows only with √n, so the total is relatively steady."},
     {t:"Between 0 and 1,600,000, because the SD of the total is 1,300,000", why:"130 × 10,000 adds the SDs. For independent policies, variances add, so the SD of the total is 130 × √10,000 = 13,000."}
   ]},
   {id:"t3u11-q27", lesson:"t3u11-l3", level:1, q:"Which statement about an expected value is true?", options:[
     {t:"It is a long-run average and may not be a value that can actually happen.", ok:true, why:"An expected 1.95 cakes a day is an average; no single day has 1.95 cakes."},
     {t:"It is the most likely single outcome.", why:"That is the mode. The expected value is a weighted average, which can differ from the mode."},
     {t:"It is what will happen next time.", why:"It describes many repeats, not the next one."},
     {t:"It is always one of the listed values.", why:"Averages often fall between possible values."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t3u11-q28", lesson:"t3u11-l4", level:2, q:"Which situation breaks a binomial condition?", options:[
     {t:"Picking 5 names without replacement from a class of 12 and counting the left-handed ones", ok:true, why:"From such a small class, each pick changes the chances for the next, so trials aren’t independent with the same p."},
     {t:"Counting heads in 20 flips of a fair coin", why:"Fixed n, two outcomes, independent flips, p = 0.5 every time: binomial."},
     {t:"Counting how many of 15 independent free throws go in, for a player with a steady 70% rate", why:"If each throw is independent with p = 0.7, this fits the binomial."},
     {t:"Counting 6s in 60 rolls of a fair die", why:"n = 60, “6 or not”, independent rolls, p = 1/6: binomial."}
   ]},
   {id:"t3u11-q29", lesson:"t3u11-l4", level:2, q:"A fair coin is flipped 5 times. What is the probability of **exactly 3 heads**?", options:[
     {t:"0.3125", ok:true, why:"C(5, 3) × 0.5³ × 0.5² = 10 × 1/32 = 10/32 = 0.3125. In a spreadsheet: =BINOM.DIST(3,5,0.5,FALSE)."},
     {t:"0.125", why:"0.125 is 0.5³, the chance of three heads in three particular flips. You need exactly 3 of 5, in any order, with the other two tails."},
     {t:"0.5", why:"Exactly 3 heads isn’t a 50–50 event; 0, 1, 2, 4 and 5 heads are also possible."},
     {t:"0.03125", why:"0.03125 is 1/32, the chance of one particular sequence, such as HHHTT. There are 10 such sequences."}
   ]},
   {id:"t3u11-q30", lesson:"t3u11-l4", level:1, q:"What does `=BINOM.DIST(3,20,0.1,TRUE)` calculate?", options:[
     {t:"The probability of at most 3 successes in 20 trials, each with probability 0.1", ok:true, why:"TRUE makes it cumulative: 0, 1, 2 or 3 successes."},
     {t:"The probability of exactly 3 successes in 20 trials", why:"Exactly 3 needs FALSE as the last argument."},
     {t:"The probability of at least 3 successes", why:"At least 3 is 1 − BINOM.DIST(2,20,0.1,TRUE)."},
     {t:"The expected number of successes", why:"The expected number is n × p = 20 × 0.1 = 2; BINOM.DIST gives probabilities."}
   ]},
   {id:"t3u11-q31", lesson:"t3u11-l4", level:2, q:"A count X follows B(50, 0.2). What are its mean and standard deviation?", options:[
     {t:"Mean 10, SD about 2.83", ok:true, why:"Mean = np = 50 × 0.2 = 10. SD = √(np(1 − p)) = √(50 × 0.2 × 0.8) = √8 ≈ 2.83."},
     {t:"Mean 10, SD 8", why:"8 is the variance, np(1 − p). Take the square root for the SD."},
     {t:"Mean 0.2, SD 0.4", why:"Those describe a single trial (a 0 or 1), not the count over 50 trials."},
     {t:"Mean 10, SD about 3.16", why:"3.16 is √10, which leaves out the factor (1 − p) = 0.8."}
   ]},
   {id:"t3u11-q32", lesson:"t3u11-l4", level:3, q:"Hana plants 10 seeds that each sprout with probability 0.7. To find P(at least 8 sprout), she types `=1-BINOM.DIST(8,10,0.7,TRUE)` and gets 0.149. What should she have done?", options:[
     {t:"Use `=1-BINOM.DIST(7,10,0.7,TRUE)`, which gives 0.383", ok:true, why:"“At least 8” is 8, 9 or 10, so subtract P(X ≤ 7). Her formula subtracted P(X ≤ 8), which leaves only 9 or 10."},
     {t:"Nothing: 0.149 is the right answer", why:"0.149 is P(9 or 10). It leaves out exactly 8, which is the most likely single result above 7."},
     {t:"Use `=BINOM.DIST(8,10,0.7,FALSE)`", why:"That gives exactly 8 (0.233), not 8 or more."},
     {t:"Use `=BINOM.DIST(8,10,0.7,TRUE)`", why:"That gives at most 8 (0.851), the wrong end of the distribution."}
   ]},
   {id:"t3u11-q33", lesson:"t3u11-l4", level:2, q:"Which binomial distribution will look most like a symmetric bell?", options:[
     {t:"n = 100, p = 0.4", ok:true, why:"np = 40 and n(1 − p) = 60 are both well above 10, so the bars form a near-normal bell."},
     {t:"n = 10, p = 0.05", why:"np = 0.5: most of the probability is at 0, giving a strongly right-skewed shape."},
     {t:"n = 20, p = 0.95", why:"n(1 − p) = 1: the probability piles up near 20, strongly skewed left."},
     {t:"n = 5, p = 0.5", why:"It is symmetric but has only six bars; np = 2.5 is too small for a smooth bell."}
   ]},
   {id:"t3u11-q34", lesson:"t3u11-l4", level:3, q:"A supplier claims 2% of its parts are faulty. In a random sample of 100 parts, 6 are faulty. If the claim were true, P(6 or more faulty) ≈ 0.015. What is the best conclusion?", options:[
     {t:"It is fairly strong evidence that the fault rate is above 2%.", ok:true, why:"Under the claim, the expected count is 2 with SD 1.4; 6 or more happens only about 1.5% of the time. That is evidence against 2%, not proof. (It could also mean the sample doesn’t match the claim’s conditions.)"},
     {t:"The claim is proved false.", why:"Unlikely results do happen. A small probability is evidence, not proof."},
     {t:"The claim is supported, because 0.015 is close to 0.02.", why:"0.015 isn’t a fault rate; it is the chance of this many faults if the claim were true. Being small counts against the claim."},
     {t:"Nothing can be concluded, because 6 is a small number of faults.", why:"6 faults out of 100 is three times the claimed rate, and the binomial says how surprising that is."}
   ]},
   {id:"t3u11-q35", lesson:"t3u11-l4", level:1, q:"Which R call gives the probability of **exactly 4** successes in 10 trials with p = 0.3?", options:[
     {t:"dbinom(4, 10, 0.3)", ok:true, why:"d functions give the probability of one exact value: about 0.200 here."},
     {t:"pbinom(4, 10, 0.3)", why:"pbinom is cumulative: it gives P(X ≤ 4), about 0.850."},
     {t:"dbinom(0.3, 10, 4)", why:"The arguments are in the wrong order: successes first, then trials, then probability."},
     {t:"choose(10, 4)", why:"choose gives the number of ways to pick 4 of 10 (210), not a probability."}
   ]},
   {id:"t3u11-q36", lesson:"t3u11-l4", level:3, q:"Lucía surveys 30 people about something that about 10% of people do. She plans to treat the count of “yes” answers as normal. Is that reasonable?", options:[
     {t:"No: np = 3 is well below 10, so the count is skewed; use the binomial directly.", ok:true, why:"The success–failure condition needs np ≥ 10 and n(1 − p) ≥ 10. With an expected 3 yeses, the distribution is lopsided and a normal curve would mislead."},
     {t:"Yes: any count with 30 or more people is normal.", why:"There is no magic 30 for counts. What matters is the expected numbers of successes and failures."},
     {t:"Yes, as long as the people are chosen at random.", why:"Random sampling makes the binomial apply, but the binomial still isn’t bell-shaped when np is small."},
     {t:"No, because counts can never be close to normal.", why:"Counts with large np and n(1 − p) are very close to normal (Lesson 5 shows 100 coin flips)."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t3u11-q37", lesson:"t3u11-l5", level:1, q:"For a continuous random variable such as a weight, what is the probability of one exact value, say exactly 72.000… kg?", options:[
     {t:"0", ok:true, why:"Probability is area under the density curve, and a single point has no width, so its area is 0. Only ranges have probabilities."},
     {t:"The height of the density curve at 72", why:"The height is a density, not a probability."},
     {t:"1 divided by the number of possible weights", why:"A continuous variable has infinitely many possible values, so this doesn’t work."},
     {t:"It depends on how common 72 kg is", why:"However common values near 72 kg are, one exact value still has zero area."}
   ]},
   {id:"t3u11-q38", lesson:"t3u11-l5", level:2, q:"Commute times are roughly normal with mean 30 minutes and SD 5. About what share of commutes take **more than 40 minutes**?", options:[
     {t:"About 2.3%", ok:true, why:"40 is 2 SDs above the mean (z = 2). The area to the right is 1 − 0.9772 = 0.0228: `=1-NORM.DIST(40,30,5,TRUE)`."},
     {t:"About 97.7%", why:"That is the share taking **less** than 40 minutes."},
     {t:"About 5%", why:"About 5% lie more than 2 SDs away on **both** sides together. Only half of that is above 40."},
     {t:"About 16%", why:"About 16% lie more than 1 SD above the mean (35 minutes). 40 is 2 SDs above."}
   ]},
   {id:"t3u11-q39", lesson:"t3u11-l5", level:2, q:"Scores are normal with mean 100 and SD 15. Which formula gives the share **between 90 and 110**?", options:[
     {t:"=NORM.DIST(110,100,15,TRUE)-NORM.DIST(90,100,15,TRUE)", ok:true, why:"Left area at 110 minus left area at 90 leaves the area between them: about 0.495."},
     {t:"=NORM.DIST(110,100,15,TRUE)+NORM.DIST(90,100,15,TRUE)", why:"Adding the two left areas counts everything below 90 twice. Subtract instead."},
     {t:"=NORM.DIST(110,100,15,FALSE)-NORM.DIST(90,100,15,FALSE)", why:"FALSE gives curve heights, not areas. By symmetry this one is exactly 0."},
     {t:"=1-NORM.DIST(110,100,15,TRUE)", why:"That is the share **above** 110."}
   ]},
   {id:"t3u11-q40", lesson:"t3u11-l5", level:2, q:"In an invented population, newborn weights are normal with mean 3.4 kg and SD 0.5 kg. Below what weight are the lightest 5%?", options:[
     {t:"About 2.58 kg", ok:true, why:"`=NORM.INV(0.05,3.4,0.5)`: z = −1.645, so 3.4 − 1.645 × 0.5 ≈ 2.58 kg."},
     {t:"About 2.42 kg", why:"That uses z = −1.96, which leaves 2.5% below, not 5%."},
     {t:"2.9 kg", why:"That is 1 SD below the mean, which leaves about 16% below."},
     {t:"About 4.22 kg", why:"That is the 95th percentile: the heaviest 5% are above it."}
   ]},
   {id:"t3u11-q41", lesson:"t3u11-l5", level:1, q:"In R, `qnorm(0.975)` returns 1.96. What does that number mean?", options:[
     {t:"97.5% of the standard normal lies below z = 1.96", ok:true, why:"That leaves 2.5% in each tail beyond ±1.96. qnorm gives the value with the stated area to its left. ±1.96 holds the middle 95%, which is why 1.96 appears in 95% confidence intervals."},
     {t:"There is a 1.96% chance of a value above 0.975", why:"The input 0.975 is an area and the output 1.96 is a z-value, not a percentage."},
     {t:"The standard normal curve’s height at 0.975 is 1.96", why:"That would be dnorm. A standard normal curve is never taller than about 0.4."},
     {t:"97.5% of values lie within 1.96 SDs of the mean", why:"95% lie within ±1.96 SDs; 97.5% lie below +1.96."}
   ]},
   {id:"t3u11-q42", lesson:"t3u11-l5", level:3, q:"A report models house prices in a town as normal, with mean 300,000 and SD 200,000, and concludes that about 7% of houses cost less than zero. What does this show?", options:[
     {t:"The normal model doesn’t fit these prices.", ok:true, why:"Prices are skewed right and can’t be negative. A model that predicts impossible values is a warning sign. House prices usually have a long right tail; a normal curve misdescribes them."},
     {t:"About 7% of houses must be given away for free.", why:"The 7% is an artefact of a poor model, not a fact about the houses."},
     {t:"The SD must have been calculated wrongly.", why:"The SD may be right; the problem is the bell shape assumed around it."},
     {t:"Nothing: normal models are always approximately right.", why:"Normal models suit roughly symmetric data. Strongly skewed data need a different approach."}
   ]},
   {id:"t3u11-q43", lesson:"t3u11-l5", level:2, q:"A coffee machine pours cups with mean 250 ml and SD 8 ml, independently. What is the SD of the **average** volume of 16 cups?", options:[
     {t:"2 ml", ok:true, why:"σ ÷ √n = 8 ÷ √16 = 8 ÷ 4 = 2 ml."},
     {t:"8 ml", why:"That is the SD of one cup. Averages vary less."},
     {t:"0.5 ml", why:"That is 8 ÷ 16. The SD shrinks with the square root of n."},
     {t:"32 ml", why:"That is 8 × √16, the SD of the **total** of 16 cups."}
   ]},
   {id:"t3u11-q44", lesson:"t3u11-l5", level:3, q:"Same machine: one cup under 246 ml happens about 31% of the time. A health inspector measures 16 cups and finds an **average** under 246 ml. How unusual is that if the machine is working as described?", options:[
     {t:"Unusual: about 2% of the time, because the average has SD 2 ml and 246 is 2 SDs below 250", ok:true, why:"For the average, z = (246 − 250) ÷ 2 = −2, and `pnorm(246, 250, 2)` ≈ 0.023. Short cups are common; a short average of 16 is not."},
     {t:"Common: about 31% of the time, the same as for one cup", why:"The average of 16 cups varies far less than one cup (SD 2 ml rather than 8)."},
     {t:"Impossible, because the mean is 250 ml", why:"It is possible, just rare. Averages still vary around 250."},
     {t:"About 50%, because an average is as likely to be below 250 as above", why:"That is true for “below 250”, but 246 is 2 SDs below for the average."}
   ]},
   {id:"t3u11-q45", lesson:"t3u11-l5", level:2, q:"A website gets 1,000 visitors, and each independently buys with probability 0.1. For a normal approximation to the number of buyers, which mean and SD should you use?", options:[
     {t:"Mean 100, SD about 9.5", ok:true, why:"np = 100 and √(np(1 − p)) = √(1,000 × 0.1 × 0.9) = √90 ≈ 9.49. Both np and n(1 − p) exceed 10, so the approximation is reasonable."},
     {t:"Mean 100, SD 10", why:"10 is √100 = √(np), which leaves out (1 − p). The correct SD is √90 ≈ 9.49."},
     {t:"Mean 100, SD 90", why:"90 is the variance, np(1 − p). Take the square root."},
     {t:"Mean 0.1, SD 0.3", why:"Those describe a single visitor (buy = 1, not = 0), not the count of 1,000."}
   ]}
  ]
});
