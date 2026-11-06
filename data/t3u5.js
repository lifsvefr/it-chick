/* Track 3 · Unit 5 · Describing data */
ICA.addUnit({
  id:"t3u5", track:"t3", n:5, title:"Describing data", icon:"📏",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"Look at a whole set of numbers at once: its shape, its centre and spread, where one value stands, how groups compare, and how two variables move together, without being fooled by a single summary.",
  goals:[
    "Read histograms and dot plots, and describe a distribution’s shape, centre, spread and unusual values",
    "Choose and calculate the right centre and spread (mean and SD, or median and IQR), by hand and in a spreadsheet",
    "Find percentiles and quartiles, explain why apps can give slightly different answers, and draw and read a boxplot",
    "Use z-scores to compare values on different scales, and compare groups fairly",
    "Describe a scatterplot, calculate and interpret Pearson’s r, and explain why correlation needs a plot and isn’t causation"
  ],
  read:[
    {book:"ostat", where:"Chapter 2, “Descriptive Statistics”, Sections 2.2–2.7", note:"Histograms, percentiles and quartiles, box plots, centre, skewness and spread, with many worked examples."},
    {book:"ostat", where:"Chapter 12, “Linear Regression and Correlation”, Sections 12.2 “Scatter Plots” and 12.3 “The Regression Equation”"},
    {book:"openintro", where:"Chapter 2, “Summarizing data”, Section 2.1 “Examining numerical data”", note:"A second, slightly more advanced telling, with real data sets."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u5-l1", title:"The shape of data", minutes:50,
   hook:{q:"Ten people are in a room. Nine earn 3,000 a month and one earns 63,000. The mean income is 9,000. How many of the ten earn less than the mean?", options:["None","5 (half of them)","9","All 10"], answer:2, reveal:"**Nine of the ten.** One very large value drags the mean far above what almost everyone earns. The median (3,000) describes the typical person here. A single number can’t show this; the **shape** of the data can. This lesson is about seeing that shape: dot plots, histograms, skew, peaks and outliers."},
   goals:[
     "Explain what a distribution is and draw a dot plot",
     "Read and build a histogram, and see how bin width changes it",
     "Describe shape: symmetric, skewed right or left, one or two peaks",
     "Predict how skew pulls the mean away from the median",
     "Describe the normal distribution and the 68–95–99.7 rule, and treat outliers carefully"
   ],
   learn:[
    {h:"What a distribution is", body:[
      {lead:"One number tells you about one person. A distribution is the crowd photo: every value at once, and how often each one turns up."},
      "When you collect one [[variable]] for many cases, such as the waiting time of every patient at a walk-in clinic one morning, you get a list of numbers. The [[distribution]] of that variable is the pattern those numbers make: **which values occur, and how often**.",
      "The simplest picture is a **dot plot**: a number line with one dot per case, stacked where values repeat. Here are 15 waiting times in minutes (invented data, used throughout this unit): 4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41.",
      {fig:'<svg viewBox="0 0 340 130"><text x="170" y="18" text-anchor="middle">Waiting times of 15 patients</text><circle class="d-lup" cx="46.7" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="60" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="66.7" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="73.3" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="73.3" cy="68" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="80" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="86.7" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="93.3" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="100" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="100" cy="68" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="113.3" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="120" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="140" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="166.7" cy="76" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="293.3" cy="76" r="3.3" stroke-width="1.5"/><path class="d-ink" d="M20 84 L320 84" stroke-width="1.5"/><path class="d-ink" d="M20 84 L20 89" stroke-width="1"/><text class="s" x="20" y="103" text-anchor="middle">0</text><path class="d-ink" d="M53.3 84 L53.3 89" stroke-width="1"/><path class="d-ink" d="M86.7 84 L86.7 89" stroke-width="1"/><text class="s" x="86.7" y="103" text-anchor="middle">10</text><path class="d-ink" d="M120 84 L120 89" stroke-width="1"/><path class="d-ink" d="M153.3 84 L153.3 89" stroke-width="1"/><text class="s" x="153.3" y="103" text-anchor="middle">20</text><path class="d-ink" d="M186.7 84 L186.7 89" stroke-width="1"/><path class="d-ink" d="M220 84 L220 89" stroke-width="1"/><text class="s" x="220" y="103" text-anchor="middle">30</text><path class="d-ink" d="M253.3 84 L253.3 89" stroke-width="1"/><path class="d-ink" d="M286.7 84 L286.7 89" stroke-width="1"/><text class="s" x="286.7" y="103" text-anchor="middle">40</text><path class="d-ink" d="M320 84 L320 89" stroke-width="1"/><text class="s" x="170" y="122" text-anchor="middle">minutes waited</text><path class="d-rose" d="M293.3 62 L293.3 44" stroke-width="1.5"/><text class="s" x="289.3" y="38" text-anchor="end">far from the rest</text></svg>', alt:"A dot plot of 15 waiting times on a line from 0 to 45 minutes. Fourteen dots cluster between 4 and 22 minutes, with small stacks at 8 and 12. One dot sits alone at 41 minutes, labelled far from the rest.", cap:"A dot plot shows every value. You can already see the cluster, the spread and one value far from the rest."},
      "Even this small picture answers questions a single average can’t: most people waited between about 5 and 20 minutes; nobody waited less than 4; one person waited much longer than anyone else. Statisticians describe a distribution with four things: its **shape**, its **centre**, its **spread**, and any **unusual values**. This lesson is about shape and unusual values; the next is about centre and spread.",
      {tip:"Always look at a picture of your data before you calculate anything. The calculations in this unit are summaries of the picture, and a summary can hide what matters."}
    ]},
    {h:"Histograms: counting in bins", body:[
      "Dot plots get crowded with more than a few dozen values. A **[[histogram-chart|histogram]]** groups values into equal-width intervals called **bins**, counts how many fall in each, and draws a bar for each count. The bars touch, because the number line is continuous.",
      "Here are the times 60 visitors spent at a museum exhibit (invented data), counted in bins 10 minutes wide:",
      {table:[["Minutes","Visitors","Running total"],["0 to under 10","16","16"],["10 to under 20","27","43"],["20 to under 30","11","54"],["30 to under 40","3","57"],["40 to under 50","1","58"],["50 to under 60","1","59"],["60 to under 70","1","60"]]},
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="16" text-anchor="middle">Time 60 visitors spent at an exhibit</text><rect class="d-lup" x="36" y="110.4" width="41.1" height="89.6" stroke-width="1.5"/><text class="s" x="56.5" y="104.4" text-anchor="middle">16</text><rect class="d-lup" x="77.1" y="48.8" width="41.2" height="151.2" stroke-width="1.5"/><text class="s" x="97.7" y="42.8" text-anchor="middle">27</text><rect class="d-lup" x="118.3" y="138.4" width="41.1" height="61.6" stroke-width="1.5"/><text class="s" x="138.8" y="132.4" text-anchor="middle">11</text><rect class="d-lup" x="159.4" y="183.2" width="41.2" height="16.8" stroke-width="1.5"/><text class="s" x="180" y="177.2" text-anchor="middle">3</text><rect class="d-lup" x="200.6" y="194.4" width="41.1" height="5.6" stroke-width="1.5"/><text class="s" x="221.2" y="188.4" text-anchor="middle">1</text><rect class="d-lup" x="241.7" y="194.4" width="41.2" height="5.6" stroke-width="1.5"/><text class="s" x="262.3" y="188.4" text-anchor="middle">1</text><rect class="d-lup" x="282.9" y="194.4" width="41.1" height="5.6" stroke-width="1.5"/><text class="s" x="303.4" y="188.4" text-anchor="middle">1</text><path class="d-ink" d="M36 200 L324 200" stroke-width="1.5"/><path class="d-ink" d="M36 200 L36 205" stroke-width="1"/><text class="s" x="36" y="219" text-anchor="middle">0</text><path class="d-ink" d="M77.1 200 L77.1 205" stroke-width="1"/><text class="s" x="77.1" y="219" text-anchor="middle">10</text><path class="d-ink" d="M118.3 200 L118.3 205" stroke-width="1"/><text class="s" x="118.3" y="219" text-anchor="middle">20</text><path class="d-ink" d="M159.4 200 L159.4 205" stroke-width="1"/><text class="s" x="159.4" y="219" text-anchor="middle">30</text><path class="d-ink" d="M200.6 200 L200.6 205" stroke-width="1"/><text class="s" x="200.6" y="219" text-anchor="middle">40</text><path class="d-ink" d="M241.7 200 L241.7 205" stroke-width="1"/><text class="s" x="241.7" y="219" text-anchor="middle">50</text><path class="d-ink" d="M282.9 200 L282.9 205" stroke-width="1"/><text class="s" x="282.9" y="219" text-anchor="middle">60</text><path class="d-ink" d="M324 200 L324 205" stroke-width="1"/><text class="s" x="324" y="219" text-anchor="middle">70</text><text class="s" x="170" y="238" text-anchor="middle">minutes (bins 10 wide)</text><path class="d-ink" d="M36 200 L36 40" stroke-width="1"/><text class="s" x="30" y="52" text-anchor="end">27</text><text class="s" x="30" y="204" text-anchor="end">0</text><text class="s" x="330" y="70" text-anchor="end">long tail</text><text class="s" x="330" y="86" text-anchor="end">to the right →</text></svg>', alt:"A histogram of 60 exhibit visit times with bins 10 minutes wide. Bar heights: 16 for 0 to 10 minutes, 27 for 10 to 20, 11 for 20 to 30, 3 for 30 to 40, then 1 each for 40 to 50, 50 to 60 and 60 to 70. The tallest bar is near the left and a long, low tail stretches to the right.", cap:"Most visits were short, with a long tail of a few long visits. This is a right-skewed distribution."},
      "Two details matter. First, every bin must have the same width, or the bars mislead. Second, decide which bin a boundary value belongs to and say so: here a visit of exactly 10 minutes counts in “10 to under 20”. Apps follow their own rule, so a histogram drawn by a spreadsheet may put a boundary value one bin over from what you expected.",
      "A table like this is a [[frequency-table|frequency table]] for numbers (see {{descriptive-statistics}}). In a spreadsheet you can build it with COUNTIFS, counting values “greater than or equal to” the bottom of each bin and “less than” the top.",
      {lab:"fl-countifnum", t:"Practise: count values with a comparison in COUNTIF"},
      {warn:"A histogram isn’t a bar chart. A bar chart compares separate categories (bus, car, bicycle), so its bars can be in any order with gaps between them. A histogram’s bars sit on a number line in a fixed order."}
    ]},
    {h:"Bin width changes the picture", body:[
      "The same data can look quite different with different [[bin-width|bin widths]]. Here are the same 60 visits with bins 5 minutes wide and 30 minutes wide:",
      {fig:'<svg viewBox="0 0 340 370"><text x="170" y="18" text-anchor="middle">Bins 5 minutes wide</text><rect class="d-gold" x="30" y="110" width="16.4" height="30" stroke-width="1.5"/><rect class="d-gold" x="46.4" y="74" width="16.5" height="66" stroke-width="1.5"/><rect class="d-gold" x="62.9" y="74" width="16.4" height="66" stroke-width="1.5"/><rect class="d-gold" x="79.3" y="44" width="16.5" height="96" stroke-width="1.5"/><rect class="d-gold" x="95.8" y="116" width="16.4" height="24" stroke-width="1.5"/><rect class="d-gold" x="112.2" y="98" width="16.5" height="42" stroke-width="1.5"/><rect class="d-gold" x="128.7" y="128" width="16.4" height="12" stroke-width="1.5"/><rect class="d-gold" x="145.1" y="134" width="16.5" height="6" stroke-width="1.5"/><rect class="d-gold" x="161.6" y="134" width="16.4" height="6" stroke-width="1.5"/><rect class="d-gold" x="210.9" y="134" width="16.4" height="6" stroke-width="1.5"/><rect class="d-gold" x="227.3" y="134" width="16.5" height="6" stroke-width="1.5"/><path class="d-ink" d="M30 140 L326 140" stroke-width="1.5"/><path class="d-ink" d="M30 140 L30 145" stroke-width="1"/><text class="s" x="30" y="159" text-anchor="middle">0</text><path class="d-ink" d="M62.9 140 L62.9 145" stroke-width="1"/><path class="d-ink" d="M95.8 140 L95.8 145" stroke-width="1"/><path class="d-ink" d="M128.7 140 L128.7 145" stroke-width="1"/><text class="s" x="128.7" y="159" text-anchor="middle">30</text><path class="d-ink" d="M161.6 140 L161.6 145" stroke-width="1"/><path class="d-ink" d="M194.4 140 L194.4 145" stroke-width="1"/><path class="d-ink" d="M227.3 140 L227.3 145" stroke-width="1"/><text class="s" x="227.3" y="159" text-anchor="middle">60</text><path class="d-ink" d="M260.2 140 L260.2 145" stroke-width="1"/><path class="d-ink" d="M293.1 140 L293.1 145" stroke-width="1"/><path class="d-ink" d="M326 140 L326 145" stroke-width="1"/><text class="s" x="326" y="159" text-anchor="middle">90</text><text x="170" y="198" text-anchor="middle">Bins 30 minutes wide</text><rect class="d-sage" x="30" y="225.5" width="98.7" height="94.5" stroke-width="1.5"/><text class="s" x="79.3" y="219.5" text-anchor="middle">54</text><rect class="d-sage" x="128.7" y="311.2" width="98.6" height="8.8" stroke-width="1.5"/><text class="s" x="178" y="305.2" text-anchor="middle">5</text><rect class="d-sage" x="227.3" y="318.2" width="98.7" height="1.8" stroke-width="1.5"/><text class="s" x="276.7" y="312.2" text-anchor="middle">1</text><path class="d-ink" d="M30 320 L326 320" stroke-width="1.5"/><path class="d-ink" d="M30 320 L30 325" stroke-width="1"/><text class="s" x="30" y="339" text-anchor="middle">0</text><path class="d-ink" d="M62.9 320 L62.9 325" stroke-width="1"/><path class="d-ink" d="M95.8 320 L95.8 325" stroke-width="1"/><path class="d-ink" d="M128.7 320 L128.7 325" stroke-width="1"/><text class="s" x="128.7" y="339" text-anchor="middle">30</text><path class="d-ink" d="M161.6 320 L161.6 325" stroke-width="1"/><path class="d-ink" d="M194.4 320 L194.4 325" stroke-width="1"/><path class="d-ink" d="M227.3 320 L227.3 325" stroke-width="1"/><text class="s" x="227.3" y="339" text-anchor="middle">60</text><path class="d-ink" d="M260.2 320 L260.2 325" stroke-width="1"/><path class="d-ink" d="M293.1 320 L293.1 325" stroke-width="1"/><path class="d-ink" d="M326 320 L326 325" stroke-width="1"/><text class="s" x="326" y="339" text-anchor="middle">90</text><text class="s" x="170" y="360" text-anchor="middle">minutes (same 60 visitors in both)</text></svg>', alt:"Two histograms of the same 60 visit times on a 0 to 90 minute axis. With bins 5 minutes wide there are many narrow bars, peaking at 15 to 20 minutes, with a gap and a few isolated bars beyond 40 minutes. With bins 30 minutes wide there are only three bars: 54, 5 and 1.", cap:"Narrow bins show detail and noise; wide bins hide the shape. Neither is “the” true picture."},
      "With 30-minute bins, almost everything lands in the first bar, and the long right tail disappears. With 5-minute bins you see more detail, including some bumps that are probably just chance with only 60 people. A width in between, like 10 minutes, usually tells the clearest story.",
      {list:[
        "Try two or three widths before you choose. If a feature appears with every width, it’s probably real.",
        "Use round, sensible boundaries (0, 10, 20…), not 3.7, 11.4…",
        "A common starting point is somewhere between about 5 and 20 bins, depending on how much data you have. That’s a rule of thumb, not a standard.",
        "When you publish a histogram, say what the bin width is."
      ]},
      {tip:"If someone shows you a histogram that makes a dramatic point, ask what it looks like with a different bin width. Choosing bins is one of the quiet ways a chart can mislead (Unit 4 of this track has more on honest charts: see {{misleading-charts}})."}
    ]},
    {h:"Describing shape", body:[
      "A few words cover most shapes you’ll meet:",
      {fig:'<svg viewBox="0 0 340 310"><rect class="d-lup" x="18" y="100" width="18" height="10" stroke-width="1.2"/><rect class="d-lup" x="36" y="80" width="18" height="30" stroke-width="1.2"/><rect class="d-lup" x="54" y="50" width="18" height="60" stroke-width="1.2"/><rect class="d-lup" x="72" y="20" width="18" height="90" stroke-width="1.2"/><rect class="d-lup" x="90" y="20" width="18" height="90" stroke-width="1.2"/><rect class="d-lup" x="108" y="50" width="18" height="60" stroke-width="1.2"/><rect class="d-lup" x="126" y="80" width="18" height="30" stroke-width="1.2"/><rect class="d-lup" x="144" y="100" width="18" height="10" stroke-width="1.2"/><path class="d-ink" d="M12 110 L168 110" stroke-width="1.5"/><text x="90" y="132" text-anchor="middle">Symmetric</text><rect class="d-gold" x="186" y="60" width="18" height="50" stroke-width="1.2"/><rect class="d-gold" x="204" y="20" width="18" height="90" stroke-width="1.2"/><rect class="d-gold" x="222" y="30" width="18" height="80" stroke-width="1.2"/><rect class="d-gold" x="240" y="50" width="18" height="60" stroke-width="1.2"/><rect class="d-gold" x="258" y="70" width="18" height="40" stroke-width="1.2"/><rect class="d-gold" x="276" y="90" width="18" height="20" stroke-width="1.2"/><rect class="d-gold" x="294" y="100" width="18" height="10" stroke-width="1.2"/><rect class="d-gold" x="312" y="100" width="18" height="10" stroke-width="1.2"/><path class="d-ink" d="M180 110 L336 110" stroke-width="1.5"/><text x="258" y="132" text-anchor="middle">Skewed right</text><rect class="d-sage" x="18" y="250" width="18" height="10" stroke-width="1.2"/><rect class="d-sage" x="36" y="250" width="18" height="10" stroke-width="1.2"/><rect class="d-sage" x="54" y="240" width="18" height="20" stroke-width="1.2"/><rect class="d-sage" x="72" y="220" width="18" height="40" stroke-width="1.2"/><rect class="d-sage" x="90" y="200" width="18" height="60" stroke-width="1.2"/><rect class="d-sage" x="108" y="180" width="18" height="80" stroke-width="1.2"/><rect class="d-sage" x="126" y="170" width="18" height="90" stroke-width="1.2"/><rect class="d-sage" x="144" y="210" width="18" height="50" stroke-width="1.2"/><path class="d-ink" d="M12 260 L168 260" stroke-width="1.5"/><text x="90" y="282" text-anchor="middle">Skewed left</text><rect class="d-rose" x="186" y="240" width="18" height="20" stroke-width="1.2"/><rect class="d-rose" x="204" y="190" width="18" height="70" stroke-width="1.2"/><rect class="d-rose" x="222" y="170" width="18" height="90" stroke-width="1.2"/><rect class="d-rose" x="240" y="230" width="18" height="30" stroke-width="1.2"/><rect class="d-rose" x="258" y="230" width="18" height="30" stroke-width="1.2"/><rect class="d-rose" x="276" y="180" width="18" height="80" stroke-width="1.2"/><rect class="d-rose" x="294" y="190" width="18" height="70" stroke-width="1.2"/><rect class="d-rose" x="312" y="240" width="18" height="20" stroke-width="1.2"/><path class="d-ink" d="M180 260 L336 260" stroke-width="1.5"/><text x="258" y="282" text-anchor="middle">Bimodal</text><text class="s" x="90" y="148" text-anchor="middle">mirror halves</text><text class="s" x="258" y="148" text-anchor="middle">tail to the right</text><text class="s" x="90" y="298" text-anchor="middle">tail to the left</text><text class="s" x="258" y="298" text-anchor="middle">two peaks</text></svg>', alt:"Four small histograms. Symmetric: bars rise to a peak in the middle and fall away evenly on both sides. Skewed right: the peak is on the left and a long tail stretches right. Skewed left: the peak is on the right and a long tail stretches left. Bimodal: two separate peaks with a dip between them.", cap:"The four shapes you’ll describe most often. Skew is named after the side with the long tail."},
      {list:[
        "**Symmetric**: the left and right halves are roughly mirror images. Heights of adults of one sex, or measurement errors from a well-made instrument, are often close to symmetric.",
        "**Skewed right** (positive [[skewness]]): a long tail stretches to the right. Very common for things that can’t go below zero but can be very large: incomes, house prices, waiting times, time spent on a web page, file sizes.",
        "**Skewed left** (negative skewness): a long tail stretches to the left. Scores on an easy test (most people score high, a few score low) or age at death in a country with long life expectancy.",
        "**Unimodal** or [[bimodal]]: one peak, or two. Two peaks often mean two groups mixed together, such as café customers by time of day (a breakfast rush and a lunch rush), or the heights of adults when men and women are combined."
      ]},
      "The name of the skew is the side the **tail** points to, not the side with the peak. A right-skewed distribution has its peak on the left. This trips up many people, so say “long tail to the right” if it helps.",
      {key:"Describe a distribution in one sentence with four parts: shape, centre, spread, unusual values. For example: “Visit times were skewed right, with a typical visit of about 15 minutes, most between 5 and 30 minutes, and three unusually long visits over 40 minutes.”"}
    ]},
    {h:"Shape and the mean–median gap", body:[
      "Shape tells you how the [[mean-stat|mean]] and [[median-stat|median]] will relate. The median only cares about the order of values; the mean uses their sizes, so it is pulled toward a long tail.",
      {table:[["Shape","Usual pattern","Example (OpenStax 2.6)"],["Symmetric","mean ≈ median","4 5 6 6 6 7 7 7 7 7 7 8 8 8 9 10: mean 7, median 7"],["Skewed left","mean < median","4 5 6 6 6 7 7 7 7 8: mean 6.3, median 6.5"],["Skewed right","mean > median","6 7 7 7 7 8 8 8 9 10: mean 7.7, median 7.5"]]},
      "That’s why the warm-up worked: the incomes are extremely right-skewed, the mean (9,000) sits far above the median (3,000), and nine of ten people earn less than the mean. Reports of “average” income, house prices or wealth usually use the median for exactly this reason (Unit 1 of this track, {{averages-misleading}}, covers how averages are misused).",
      "In the clinic data the mean is 13.1 minutes and the median 11, matching the right skew. In the museum data the mean is 17.2 and the median 15.5.",
      {warn:"“Mean above median means right skew” is a usual pattern, not a law. OpenStax notes that it can fail, especially with discrete data (whole-number counts). Use it as a clue, and confirm with a picture."}
    ]},
    {h:"The normal distribution: a useful ideal", body:[
      "One symmetric, single-peaked shape is so useful it has its own name: the [[normal-distribution|normal distribution]], the “bell curve”. It is a mathematical model, fully described by two numbers: its mean (the centre) and its [[standard-deviation|standard deviation]] (how wide the bell is).",
      "For data that are roughly normal, the **68–95–99.7 rule** (also called the empirical rule) gives a quick sense of spread:",
      {list:[
        "about **68%** of values lie within 1 standard deviation of the mean",
        "about **95%** lie within 2 standard deviations",
        "about **99.7%** lie within 3 standard deviations"
      ]},
      {ex:"Suppose exam scores are roughly normal with mean 65 and SD 10.\nWithin 1 SD: 55 to 75  → about 68% of students\nWithin 2 SD: 45 to 85  → about 95%\nWithin 3 SD: 35 to 95  → about 99.7%\nSo a score above 85 is unusual: only about 2.5% (half of the remaining 5%) score that high.", label:"Worked example", mono:true},
      "Many real measurements are roughly normal, and Unit 6 of this track explains why averages of samples tend to be normal even when the data aren’t (the sampling distribution). But plenty of data are not normal at all: the clinic and museum data are skewed, and the rule would give nonsense for them. Check the shape before you use it.",
      {tip:"The 68–95–99.7 percentages are approximate even for perfectly normal data (more precisely 68.3%, 95.4% and 99.7%). For data that are only roughly normal, treat them as a rough guide."}
    ]},
    {h:"Outliers: look before you leap", body:[
      "An [[outlier]] is a value that sits far from the rest of the distribution, like the 41-minute wait. Lesson 3 gives a standard rule for flagging one; for now, the important part is what to do next. An outlier can be:",
      {list:[
        "**A mistake**: a typing error (410 instead of 41), a unit mix-up (seconds recorded as minutes), a test entry. Fix it if you can confirm the right value; otherwise remove it and say so.",
        "**From a different group**: a patient who was waiting for a different service. It may belong in a separate analysis.",
        "**Real and important**: the person who really did wait 41 minutes may be exactly what the clinic needs to know about."
      ]},
      "Never delete outliers silently just because they spoil a neat result. Report what you found, what you did, and, if it matters, the results both with and without them. Summaries that resist outliers, like the median, help (Lesson 2).",
      {key:"An outlier is a question, not a verdict. Ask why it’s there before you decide what to do with it."}
    ]}
   ],
   try:[
    {id:"t3u5-l1-x1", type:"number", q:"Using the museum frequency table (16 visitors under 10 minutes, 27 from 10 to under 20, 11 from 20 to under 30, then 3, 1, 1, 1), how many of the 60 visitors stayed **less than 20 minutes**?", answer:43, tol:0, unit:"visitors", why:"Add the bins below 20 minutes: 16 (0 to under 10) + 27 (10 to under 20) = 43. That’s the running total at the end of the second row, and 43 ÷ 60 ≈ 72% of visitors.", wrongs:[
      {v:27, tol:0, why:"27 is just the 10 to under 20 bin. Visitors who stayed under 10 minutes also stayed less than 20, so add the 16 too."},
      {v:54, tol:0, why:"54 includes the 20 to under 30 bin, whose visitors stayed 20 minutes or more. Stop at the bin that ends at 20."},
      {v:16, tol:0, why:"16 is only the visitors under 10 minutes. Add the next bin as well."}
    ], hint2:"Add up the counts of every bin that ends at or before 20 minutes."},
    {id:"t3u5-l1-x2", type:"mcq", q:"Two charts show the same 60 visit times. One uses bins 5 minutes wide, the other bins 30 minutes wide. Which statement is right?", options:[
      {t:"Both are honest pictures of the same data; the wide bins hide the long right tail, and the narrow bins show more detail but also more chance bumps.", ok:true, why:"Bin width is a choice. Neither chart is false, but they emphasise different things, which is why you try several widths and report the one you use."},
      {t:"The 30-minute version is more accurate because it has fewer bars.", why:"Fewer bars means less detail, not more accuracy. Here it squashes 54 of 60 visitors into one bar and hides the shape."},
      {t:"The 5-minute version is always best because narrower bins mean more precision.", why:"With only 60 values, very narrow bins show random bumps that may not mean anything. More bins isn’t automatically better."},
      {t:"They can’t both be right, so one must contain an error.", why:"Both count the same values correctly. They differ only in how the number line is cut into bins."}
    ]},
    {id:"t3u5-l1-x3", type:"sort", q:"Which shape would you expect for each variable?", buckets:["Skewed right","Roughly symmetric","Skewed left"], items:[
      {t:"Monthly incomes of everyone in a city", b:0, why:"Incomes can’t go below zero but a few are very large, giving a long right tail."},
      {t:"How long phone calls to a help line last", b:0, why:"Most calls are short; a few go on for a very long time. Durations are typically right-skewed."},
      {t:"Heights of adult women in one country", b:1, why:"Heights of one sex are a classic example of a roughly symmetric, bell-shaped distribution."},
      {t:"Scores on a very easy quiz, out of 10", b:2, why:"Most people score near the top, and a few score low: a long tail to the left. The maximum of 10 stops a tail on the right."},
      {t:"Small measurement errors when many people weigh the same 1 kg bag on good scales", b:1, why:"Random measurement errors from a good instrument tend to be as likely too high as too low, so they’re roughly symmetric."},
      {t:"Number of years people in a country with long life expectancy live", b:2, why:"Most people live to old age, but some die young, giving a long tail toward low ages."}
    ]},
    {id:"t3u5-l1-x4", type:"mcq", q:"Fatima’s histogram of house prices in a town has its peak near the left and a long tail stretching to the right. Which is most likely?", options:[
      {t:"The mean price is higher than the median price.", ok:true, why:"In a right-skewed distribution, the few very expensive houses pull the mean up toward the tail, while the median stays with the typical house."},
      {t:"The median is higher than the mean.", why:"That’s the usual pattern for left skew. Here the tail is on the right, so it pulls the mean up, not down."},
      {t:"The mean and median must be exactly equal.", why:"They’re equal (or close) for symmetric distributions. A long tail on one side usually separates them."},
      {t:"The distribution is skewed left, because the peak is on the left.", why:"Skew is named after the tail, not the peak. A peak on the left with a tail to the right is skewed right."}
    ]},
    {id:"t3u5-l1-x5", type:"number", q:"Reaction times in a large study are roughly normal with mean 250 milliseconds and SD 30 milliseconds. About what **percentage** of people have reaction times between 190 and 310 milliseconds?", answer:95, tol:0.5, unit:"%", why:"190 is 250 − 60 and 310 is 250 + 60. That’s 2 standard deviations either side of the mean (60 ÷ 30 = 2), and the 68–95–99.7 rule says about 95% of values fall within 2 SD.", wrongs:[
      {v:68, tol:0.5, why:"68% is the share within **1** SD (220 to 280). Here the interval reaches 60 ms either side, which is 2 SD."},
      {v:99.7, tol:0.2, why:"99.7% is the share within **3** SD (160 to 340). This interval is 2 SD either side."},
      {v:47.5, tol:0.5, why:"47.5% is the share between the mean and 2 SD on one side only. The interval covers both sides."}
    ], hint2:"How many standard deviations is 60 milliseconds?"},
    {id:"t3u5-l1-x6", type:"mcq", q:"Kenji is analysing the times volunteers took to sort a box of donations. One entry says 410 minutes; every other entry is between 15 and 60. What should he do first?", options:[
      {t:"Check where the value came from: it may be a typing error for 41, or a real case that needs explaining.", ok:true, why:"An outlier is a question. If the original record shows 41, fix it and note the change; if 410 is real, keep it and report it."},
      {t:"Delete it, because outliers always distort the analysis.", why:"Deleting it without checking could throw away a real and important case, and deleting silently hides what you did."},
      {t:"Keep it and report only the mean, so every value counts.", why:"If 410 is a typo, the mean would be badly wrong. And with a possible outlier, the median is the safer summary."},
      {t:"Replace it with the mean of the other values.", why:"Inventing a value hides the problem. Fix it only if you can confirm the right value from the source."}
    ]}
   ],
   apply:{intro:"Use any spreadsheet app. On a phone, the Google Sheets app handles the formulas; charts are easier on a computer or tablet.", tasks:[
     {t:"Build a frequency table with COUNTIFS", app:{
       ms:["Type the heading `Minutes` in A1, then the 15 clinic waiting times in A2 to A16: 4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41.","In C1 type `From`, in D1 `To (under)`, in E1 `Count`. In C2:C6 type 0, 10, 20, 30, 40 and in D2:D6 type 10, 20, 30, 40, 50.","In E2 type `=COUNTIFS($A$2:$A$16,\">=\"&C2,$A$2:$A$16,\"<\"&D2)` and fill down to E6.","Check: the counts should be 6, 7, 1, 0, 1 and add up to 15 (`=SUM(E2:E6)`)."],
       google:["Type the heading `Minutes` in A1, then the 15 clinic waiting times in A2 to A16: 4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41.","In C1 type `From`, in D1 `To (under)`, in E1 `Count`. In C2:C6 type 0, 10, 20, 30, 40 and in D2:D6 type 10, 20, 30, 40, 50.","In E2 type `=COUNTIFS($A$2:$A$16,\">=\"&C2,$A$2:$A$16,\"<\"&D2)` and fill down to E6 (on a phone, copy E2 and paste it into E3:E6).","Check: the counts should be 6, 7, 1, 0, 1 and add up to 15."],
       libre:["Type the heading `Minutes` in A1, then the 15 clinic waiting times in A2 to A16: 4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41.","In C1 type `From`, in D1 `To (under)`, in E1 `Count`. In C2:C6 type 0, 10, 20, 30, 40 and in D2:D6 type 10, 20, 30, 40, 50.","In E2 type `=COUNTIFS($A$2:$A$16;\">=\"&C2;$A$2:$A$16;\"<\"&D2)` (LibreOffice accepts `;` between arguments everywhere, and `,` in many English set-ups) and fill down to E6.","Check: the counts should be 6, 7, 1, 0, 1 and add up to 15."],
       apple:["Type the heading `Minutes` in A1, then the 15 clinic waiting times in A2 to A16: 4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41.","In C1 type `From`, in D1 `To (under)`, in E1 `Count`. In C2:C6 type 0, 10, 20, 30, 40 and in D2:D6 type 10, 20, 30, 40, 50.","In E2 type `=COUNTIFS($A$2:$A$16,\">=\"&C2,$A$2:$A$16,\"<\"&D2)`. Numbers may show the references as names or keep the $ signs; either is fine. Fill down to E6.","Check: the counts should be 6, 7, 1, 0, 1 and add up to 15."]},
       appNote:"In countries that use a comma as the decimal mark, many apps use `;` between function arguments instead of `,`. If a formula is rejected, try semicolons. It’s a setting, not your mistake.",
       write:"My counts per bin… Do they add to 15?…"},
     {t:"Draw the histogram and describe its shape", app:{
       ms:["Select the data in A1:A16.","Desktop Excel (Microsoft 365, or Excel 2016 and later on Windows): **Insert → Insert Statistic Chart → Histogram**. Right-click the horizontal axis, choose **Format Axis**, and set **Bin width** to 10.","If your version has no Histogram chart, draw one from your table instead. Type `Bin` in B1 and the labels `0 to 10`, `10 to 20`, `20 to 30`, `30 to 40`, `40 to 50` in B2:B6 (words, so they stay text). Select B1:B6, hold Ctrl ([[kbd:Cmd]] on a Mac) and select E1:E6, then choose **Insert → Insert Column or Bar Chart → Clustered Column**. Right-click a bar, choose **Format Data Series**, and set **Gap Width** to 0 so the bars touch."],
       google:["Select A1:A16.","Choose **Insert → Chart**. In the Chart editor, under **Setup → Chart type**, pick **Histogram chart**.","Under **Customize → Histogram**, set **Bucket size** to 10.","On a phone, Insert (+) → Chart adds a chart, with fewer editing options; you can also sketch the histogram on paper from your table."],
       libre:["Type `Bin` in B1 and the labels `0 to 10`, `10 to 20`, `20 to 30`, `30 to 40`, `40 to 50` in B2:B6 (words, so they stay text). Select B1:B6, then hold Ctrl and select E1:E6.","Choose **Insert → Chart…**, pick **Column**, and click **Finish**.","Bars in a column chart have gaps; for a histogram look, double-click a bar, open **Options**, and set the spacing to 0."],
       apple:["Select your counts in E2:E6.","Tap or click **Chart** in the toolbar and choose a 2D column chart.","The labels under the bars may not show your bins; note on the chart (or on a paper sketch) that the five bars stand for 0 to 10, 10 to 20 and so on, and reduce the gap between columns in the chart’s format options if your version offers it."]},
       write:"Shape… Centre (roughly)… Spread… Unusual values…"},
     {t:"Find a real distribution and describe it in one sentence", how:["Pick a variable you can count from your own life or a public source: minutes of your daily commutes for two weeks, the prices in a shop’s online category, or the ages in a published table.","Make a dot plot or histogram (on paper is fine).","Write one sentence with all four parts: shape, centre, spread and unusual values."], write:"My variable… My sentence…"}
   ], proof:"A frequency table built with COUNTIFS (6, 7, 1, 0, 1 for the clinic data), a histogram or sketch, and a one-sentence description with shape, centre, spread and unusual values."},
   read:[
     {book:"ostat", where:"Chapter 2, Section 2.2 “Histograms, Frequency Polygons, and Time Series Graphs” and Section 2.6 “Skewness and the Mean, Median, and Mode”"},
     {book:"openintro", where:"Chapter 2, Section 2.1.3 “Histograms and shape”"},
     {book:"ostat", where:"Chapter 6, Section 6.1 “The Standard Normal Distribution”", note:"For the empirical (68–95–99.7) rule."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u5-l2", title:"Centre and spread", minutes:55,
   hook:{q:"Two small data sets both have a mean of 5. Set A is 1, 5, 9. Set B is 4, 5, 6. How many times bigger is set A’s standard deviation than set B’s?", options:["The same","2 times","4 times","16 times"], answer:2, reveal:"**4 times.** A’s values sit 4 away from the mean; B’s sit 1 away. The standard deviation is measured in the same units as the data, so four times the distance gives four times the SD (4 versus 1). The variance, its square, is 16 times bigger, which is one reason we report the SD instead. This lesson builds a feel for spread and shows when to use the SD and when the interquartile range."},
   goals:[
     "Choose between the mean, median and a trimmed mean for the centre",
     "Calculate and interpret the range, the standard deviation and the interquartile range",
     "Explain what makes the SD bigger or smaller, and what doesn’t change it",
     "Pick the right pair to report: mean with SD, or median with IQR",
     "Spot common misunderstandings about spread"
   ],
   learn:[
    {h:"Centre: one honest typical value", body:[
      {lead:"Summarising a distribution is like describing a city to a visitor: where the middle of town is, and how far it sprawls."},
      "The surveys unit (Research Skills, Unit 8) introduced the [[mean-stat|mean]], [[median-stat|median]] and [[mode-stat|mode]] (see {{descriptive-statistics}}). Here we use them with the shape from Lesson 1 in mind. For the clinic waiting times (4, 6, 7, 8, 8, 9, 10, 11, 12, 12, 14, 15, 18, 22, 41):",
      {list:[
        "**Mean** = 197 ÷ 15 = **13.1** minutes. It uses every value, so the 41 pulls it up.",
        "**Median** = the 8th of 15 sorted values = **11** minutes. It depends only on order.",
        "**Mode** = 8 and 12 (each appears twice). With continuous measurements, the mode is rarely useful."
      ]},
      {lab:"fl-average", t:"Practise: calculate an average with AVERAGE"},
      "A middle path is the **trimmed mean**: drop a set percentage of the smallest and largest values, then average the rest. Some sports judging drops the highest and lowest scores for the same reason. It’s less sensitive than the mean to extremes, but uses more information than the median.",
      "A summary that changes little when a few values are extreme is called a [[robust-statistic|robust statistic]]. The median is robust; the mean is not."
    ]},
    {h:"The range: quick but fragile", body:[
      "The simplest measure of spread is the [[range-stat|range]]: largest value minus smallest. For the clinic, 41 − 4 = **37** minutes.",
      {lab:"fl-minmax", t:"Practise: highest minus lowest with MAX and MIN"},
      "The range is easy to explain, but it depends on just two values, the two most extreme ones. Remove the 41-minute wait and the range falls from 37 to 18, less than half. It also tends to grow as you collect more data, simply because you have more chances to meet an extreme value. Report it alongside another measure, not on its own."
    ]},
    {h:"Standard deviation: the typical distance from the mean", body:[
      "The [[standard-deviation|standard deviation]] (SD) asks: how far do values typically sit from the mean? The surveys unit showed the steps (differences from the mean, square, add, divide by n − 1, square root). Here is the picture behind them.",
      {fig:'<svg viewBox="0 0 340 250"><text x="30" y="24">A: 1, 5, 9   mean 5</text><path class="d-soft" d="M170 34 L170 76" stroke-width="1.5" stroke-dasharray="4 3"/><path class="d-rose" d="M170 56 L58 56" stroke-width="2"/><text class="s" x="114" y="50" text-anchor="middle">−4</text><circle class="d-lup" cx="58" cy="70" r="6" stroke-width="1.5"/><circle class="d-lup" cx="170" cy="70" r="6" stroke-width="1.5"/><path class="d-rose" d="M170 56 L282 56" stroke-width="2"/><text class="s" x="226" y="50" text-anchor="middle">+4</text><circle class="d-lup" cx="282" cy="70" r="6" stroke-width="1.5"/><path class="d-ink" d="M30 80 L310 80" stroke-width="1.5"/><path class="d-ink" d="M30 80 L30 85" stroke-width="1"/><text class="s" x="30" y="99" text-anchor="middle">0</text><path class="d-ink" d="M58 80 L58 85" stroke-width="1"/><path class="d-ink" d="M86 80 L86 85" stroke-width="1"/><text class="s" x="86" y="99" text-anchor="middle">2</text><path class="d-ink" d="M114 80 L114 85" stroke-width="1"/><path class="d-ink" d="M142 80 L142 85" stroke-width="1"/><text class="s" x="142" y="99" text-anchor="middle">4</text><path class="d-ink" d="M170 80 L170 85" stroke-width="1"/><path class="d-ink" d="M198 80 L198 85" stroke-width="1"/><text class="s" x="198" y="99" text-anchor="middle">6</text><path class="d-ink" d="M226 80 L226 85" stroke-width="1"/><path class="d-ink" d="M254 80 L254 85" stroke-width="1"/><text class="s" x="254" y="99" text-anchor="middle">8</text><path class="d-ink" d="M282 80 L282 85" stroke-width="1"/><path class="d-ink" d="M310 80 L310 85" stroke-width="1"/><text class="s" x="310" y="99" text-anchor="middle">10</text><text x="330" y="24" text-anchor="end">SD = 4</text><text x="30" y="154">B: 4, 5, 6   mean 5</text><path class="d-soft" d="M170 164 L170 206" stroke-width="1.5" stroke-dasharray="4 3"/><path class="d-rose" d="M170 186 L142 186" stroke-width="2"/><text class="s" x="156" y="180" text-anchor="middle">−1</text><circle class="d-lup" cx="142" cy="200" r="6" stroke-width="1.5"/><circle class="d-lup" cx="170" cy="200" r="6" stroke-width="1.5"/><path class="d-rose" d="M170 186 L198 186" stroke-width="2"/><text class="s" x="184" y="180" text-anchor="middle">+1</text><circle class="d-lup" cx="198" cy="200" r="6" stroke-width="1.5"/><path class="d-ink" d="M30 210 L310 210" stroke-width="1.5"/><path class="d-ink" d="M30 210 L30 215" stroke-width="1"/><text class="s" x="30" y="229" text-anchor="middle">0</text><path class="d-ink" d="M58 210 L58 215" stroke-width="1"/><path class="d-ink" d="M86 210 L86 215" stroke-width="1"/><text class="s" x="86" y="229" text-anchor="middle">2</text><path class="d-ink" d="M114 210 L114 215" stroke-width="1"/><path class="d-ink" d="M142 210 L142 215" stroke-width="1"/><text class="s" x="142" y="229" text-anchor="middle">4</text><path class="d-ink" d="M170 210 L170 215" stroke-width="1"/><path class="d-ink" d="M198 210 L198 215" stroke-width="1"/><text class="s" x="198" y="229" text-anchor="middle">6</text><path class="d-ink" d="M226 210 L226 215" stroke-width="1"/><path class="d-ink" d="M254 210 L254 215" stroke-width="1"/><text class="s" x="254" y="229" text-anchor="middle">8</text><path class="d-ink" d="M282 210 L282 215" stroke-width="1"/><path class="d-ink" d="M310 210 L310 215" stroke-width="1"/><text class="s" x="310" y="229" text-anchor="middle">10</text><text x="330" y="154" text-anchor="end">SD = 1</text></svg>', alt:"Two dot plots on a 0 to 10 scale with a dashed line at the mean of 5. Set A has dots at 1, 5 and 9, with red lines showing deviations of minus 4 and plus 4; its SD is 4. Set B has dots at 4, 5 and 6, with deviations of minus 1 and plus 1; its SD is 1.", cap:"Same mean, different spread. The SD summarises the lengths of the red deviation lines."},
      {ex:"Set A: 1, 5, 9   mean 5\nDeviations: −4, 0, +4\nSquares: 16, 0, 16   sum 32\nDivide by n − 1 = 2: 16   (variance)\nSquare root: 4   (SD)\n\nSet B: 4, 5, 6 → deviations −1, 0, +1 → squares sum 2\n2 ÷ 2 = 1 → SD 1", label:"Worked example", mono:true},
      "Squaring makes every deviation positive (otherwise the plus and minus deviations would cancel to zero) and gives big deviations extra weight. Taking the square root at the end brings the answer back to the original units: the clinic SD is **9.0 minutes**, not “minutes squared”.",
      "As in the surveys unit, use the **sample** SD (divide by n − 1; STDEV.S in Excel, Google Sheets and LibreOffice Calc, STDEV in all of them and in Numbers) when your data are a sample from a bigger group, and the **population** SD (divide by n; STDEV.P) only when you have every member of the group you care about. For the clinic data the two are 9.03 and 8.72: close, and closer still for larger data sets.",
      "Some properties are worth knowing by heart:",
      {list:[
        "The SD is **0** only if every value is identical. It can never be negative.",
        "**Adding** the same amount to every value (everyone gets 5 bonus points) moves the mean but doesn’t change the SD: the values are just as spread out.",
        "**Multiplying** every value by the same number multiplies the SD by it: converting minutes to seconds multiplies the SD by 60.",
        "One extreme value can inflate the SD a lot, because its deviation is squared."
      ]}
    ]},
    {h:"The interquartile range: spread of the middle half", body:[
      "The [[interquartile-range|interquartile range]] (IQR) is the width of the middle 50% of the data: the third [[quartile]] (Q3, the value a quarter of the way down from the top) minus the first quartile (Q1, a quarter of the way up from the bottom). Lesson 3 shows how to find quartiles and why apps differ slightly. For the clinic data, by the textbook method, Q1 = 8 and Q3 = 15, so **IQR = 7 minutes**.",
      "Because it ignores the top and bottom quarters, the IQR is robust. Compare what happens when the 41-minute wait is removed:",
      {table:[["Summary","All 15 waits","Without the 41"],["Mean","13.1","11.1"],["Median","11","10.5"],["Range","37","18"],["Standard deviation","9.0","4.9"],["IQR (textbook method)","7","6"]]},
      "One value roughly halved the SD and the range, but barely moved the median and the IQR. Neither result is wrong: they answer different questions. The SD says “waits were very unpredictable, partly because of one long one”; the IQR says “the middle half of patients waited within a 7-minute band”."
    ]},
    {h:"Which pair to report", body:[
      "Centre and spread belong together, and the pairs that match are:",
      {table:[["Data look like…","Report","Why"],["Roughly symmetric, no strong outliers","Mean and SD","Uses all the information; the SD has a clear meaning (68–95–99.7 for roughly normal data)"],["Skewed, or with outliers","Median and IQR (or the quartiles)","Both are robust; they describe the typical case"],["Small data set","The values themselves, or a dot plot","With five numbers, a summary hides more than it saves"]]},
      {ex:"Clinic waits (n = 15): median 11 minutes (quartiles 8 and 15, so IQR 7); one patient waited 41 minutes.\nExam scores (invented; n = 120, roughly symmetric): mean 64.8 (SD 11.2).", label:"Worked example: honest reporting", mono:true},
      "Round sensibly. A mean of 13.1333 minutes claims precision your data don’t have; 13.1 or 13 is enough. Use the ROUND function if a result will be reused, rather than just hiding decimals with formatting.",
      {lab:"fl-round", t:"Practise: round a result with ROUND"},
      {tip:"When readers might not know your data are skewed, give both: “mean 13.1, median 11”. The gap itself tells them there’s a long tail."}
    ]},
    {h:"Common misunderstandings about spread", body:[
      {list:[
        "**“A bigger sample gives a smaller SD.”** No. The SD describes how varied the individuals are; collecting more people doesn’t make them more alike. What shrinks with more data is the uncertainty in the **mean**, the [[standard-error|standard error]] (see the Research Skills unit on reading papers, and Unit 6 of this track).",
        "**“The SD is the average distance from the mean.”** Close in spirit, but not exactly: it’s the square root of the average **squared** distance (with n − 1), which gives extra weight to big deviations. The plain average distance is a different, less used measure.",
        "**“Mean ± 2 SD always covers 95% of the data.”** Only for roughly normal data. For the volunteer hours in the surveys unit (2, 3, 3, 4, 5, 5, 5, 6, 30), the mean is 7 and the SD 8.7, so “mean − 1 SD” is −1.7 hours, which is impossible. When mean − 2 SD (or even mean − 1 SD) falls below a natural minimum like zero, that’s a strong hint the data are skewed and mean ± SD is the wrong summary.",
        "**“A large SD means bad data.”** Spread is often the most interesting finding: which patients wait longest, and why?"
      ]},
      {key:"Centre without spread is half a story. Pick the pair that suits the shape: mean and SD for symmetric data, median and IQR for skewed data or data with outliers."}
    ]}
   ],
   try:[
    {id:"t3u5-l2-x1", type:"number", q:"Daily rainfall (mm) at a weather station over a week: 0, 0, 2, 5, 0, 31, 4. What is the **range**?", answer:31, tol:0, unit:"mm", why:"Range = largest − smallest = 31 − 0 = 31 mm. Notice how one wet day sets the whole range.", wrongs:[
      {v:42, tol:0, why:"42 is the total rainfall for the week. The range is the largest value minus the smallest."},
      {v:6, tol:0.01, why:"6 is the mean (42 ÷ 7). The range measures spread, from the smallest to the largest value."},
      {v:2, tol:0, why:"2 is the median (the middle of 0, 0, 0, 2, 4, 5, 31). The range is 31 − 0."}
    ], hint2:"Find the largest and smallest values and subtract."},
    {id:"t3u5-l2-x2", type:"number", q:"Calculate the **sample** standard deviation of 2, 4, 6, 8, 10. (Give two decimal places.)", answer:3.16, tol:0.01, unit:"", why:"Mean = 30 ÷ 5 = 6. Deviations: −4, −2, 0, 2, 4. Squares: 16, 4, 0, 4, 16, sum 40. Divide by n − 1 = 4: variance 10. Square root: √10 ≈ 3.16.", wrongs:[
      {v:2.83, tol:0.01, why:"2.83 is √8: you divided 40 by n = 5, which gives the population SD. The sample SD divides by n − 1 = 4."},
      {v:10, tol:0.01, why:"10 is the variance. Take the square root to get back to the original units."},
      {v:2.4, tol:0.01, why:"2.4 is the average absolute deviation (4 + 2 + 0 + 2 + 4 = 12, ÷ 5). The SD squares the deviations first."},
      {v:6, tol:0.01, why:"6 is the mean. The SD measures how far values are from it."}
    ], hint2:"Mean, deviations, square them, add, ÷ (n − 1), square root."},
    {id:"t3u5-l2-x3", type:"sort", q:"Sione adds one very large value to a data set of 20 delivery times. Which summaries are likely to change **a lot**, and which **hardly at all**?", buckets:["Changes a lot","Hardly changes"], items:[
      {t:"Mean", b:0, why:"The mean uses the size of every value, so one huge value pulls it toward the tail."},
      {t:"Standard deviation", b:0, why:"The deviation of the new value is squared, so a single extreme value can inflate the SD dramatically."},
      {t:"Range", b:0, why:"The range is the largest minus the smallest, so a new maximum changes it directly."},
      {t:"Median", b:1, why:"The median depends only on the order. One extra value moves it at most half a step."},
      {t:"Interquartile range", b:1, why:"The IQR ignores the top and bottom quarters, so the new extreme value barely affects Q1 and Q3."}
    ]},
    {id:"t3u5-l2-x4", type:"mcq", q:"A teacher adds 5 bonus points to every student’s test score. What happens to the mean and the standard deviation?", options:[
      {t:"The mean goes up by 5; the SD stays the same.", ok:true, why:"Every value moves by the same amount, so the centre shifts by 5 but the distances between values, and from the mean, are unchanged."},
      {t:"Both go up by 5.", why:"The SD measures distances from the mean. Moving everything together doesn’t change those distances."},
      {t:"The mean stays the same; the SD goes up.", why:"Adding 5 to every score must raise the average by 5. And the spread doesn’t change."},
      {t:"The SD goes up by a factor of 5.", why:"That would happen if every score were multiplied by 5. Adding a constant doesn’t change spread."}
    ]},
    {id:"t3u5-l2-x5", type:"match", q:"Match each data set to the summary that describes it best.", pairs:[
      ["Household incomes in a region, strongly skewed right","Median and IQR","Skewed data: the median and IQR describe the typical household and aren’t dragged by the very rich."],
      ["Heights of 500 adult women, roughly symmetric","Mean and SD","Symmetric with no strong outliers: the mean and SD use all the information."],
      ["Four measurements from a pilot test","List the values","With so few values, show them all; a summary would hide more than it reveals."],
      ["Favourite type of library event (talks, films, crafts)","Mode and percentages","Unordered categories have no mean or SD; report the most common and the percentages."]
    ]},
    {id:"t3u5-l2-x6", type:"mcq", q:"A report says: “Volunteers gave a mean of 7 hours (SD 8.7).” Lucía notices that the mean minus one SD is negative. What does that tell her?", options:[
      {t:"The hours are probably strongly skewed right, so the median and IQR would describe them better.", ok:true, why:"Hours can’t be negative. An SD larger than the mean, for data with a floor of zero, signals a long right tail (here one person gave 30 hours)."},
      {t:"There must be a calculation error, because an SD can’t be bigger than the mean.", why:"An SD can be bigger than the mean. It just means the data are very spread out relative to their centre, often because of a long tail."},
      {t:"Some volunteers gave negative hours.", why:"Nobody can give negative hours. The negative number comes from applying a symmetric summary to skewed data."},
      {t:"The sample is too small for an SD.", why:"You can calculate an SD for any data set with 2 or more values. The issue is shape, not size."}
    ]}
   ],
   apply:{intro:"Calculate the summaries for the clinic data, then see what one value does. Use the sheet from Lesson 1 (waiting times in A2:A16).", tasks:[
     {t:"Calculate centre and spread", app:{
       ms:["In C9 to C14 type labels: Mean, Median, Range, SD (sample), SD (population), IQR.","In D9 `=AVERAGE(A2:A16)`; D10 `=MEDIAN(A2:A16)`; D11 `=MAX(A2:A16)-MIN(A2:A16)`; D12 `=STDEV.S(A2:A16)`; D13 `=STDEV.P(A2:A16)`; D14 `=QUARTILE.EXC(A2:A16,3)-QUARTILE.EXC(A2:A16,1)`.","Check: about 13.13, 11, 37, 9.03, 8.72 and 7."],
       google:["In C9 to C14 type labels: Mean, Median, Range, SD (sample), SD (population), IQR.","In D9 `=AVERAGE(A2:A16)`; D10 `=MEDIAN(A2:A16)`; D11 `=MAX(A2:A16)-MIN(A2:A16)`; D12 `=STDEV.S(A2:A16)`; D13 `=STDEV.P(A2:A16)`; D14 `=QUARTILE.EXC(A2:A16,3)-QUARTILE.EXC(A2:A16,1)`.","Check: about 13.13, 11, 37, 9.03, 8.72 and 7."],
       libre:["In C9 to C14 type labels: Mean, Median, Range, SD (sample), SD (population), IQR.","In D9 `=AVERAGE(A2:A16)`; D10 `=MEDIAN(A2:A16)`; D11 `=MAX(A2:A16)-MIN(A2:A16)`; D12 `=STDEV.S(A2:A16)`; D13 `=STDEV.P(A2:A16)`; D14 `=QUARTILE.EXC(A2:A16;3)-QUARTILE.EXC(A2:A16;1)`.","Check: about 13.13, 11, 37, 9.03, 8.72 and 7."],
       apple:["In C9 to C13 type labels: Mean, Median, Range, SD (sample), SD (population).","In D9 `=AVERAGE(A2:A16)`; D10 `=MEDIAN(A2:A16)`; D11 `=MAX(A2:A16)-MIN(A2:A16)`; D12 `=STDEV(A2:A16)`; D13 `=STDEVP(A2:A16)`.","Check: about 13.13, 11, 37, 9.03 and 8.72. (For the IQR, see Lesson 3: Numbers’ QUARTILE uses a slightly different method from the one used here.)"]},
       write:"Mean… Median… Range… SD… IQR…"},
     {t:"Remove the outlier and compare", how:["Copy the column of waits to a new column and delete the 41 (so the new column has 14 values).","Point copies of your formulas at the new column.","Note which summaries changed a lot and which barely moved. Compare with the table in the lesson (mean 11.1, median 10.5, range 18, SD 4.9). Your IQR formula will give 6.5 with QUARTILE.EXC (5.5 with QUARTILE.INC or Numbers’ QUARTILE) rather than the textbook 6: Lesson 3 explains why."], write:"Changed a lot… Barely changed… Which pair I’d report for this clinic, and why…"},
     {t:"Write two honest summary sentences", how:["One sentence for the clinic data using the median and IQR, mentioning the 41-minute wait.","One sentence for a symmetric data set of your choice (or the exam example in the lesson) using the mean and SD.","Round to a sensible number of decimal places."], write:"Clinic… Symmetric example…"}
   ], proof:"A sheet with the mean, median, range, SDs and IQR of the clinic data, a note on how removing the 41 changed each, and two honest summary sentences."},
   read:[
     {book:"ostat", where:"Chapter 2, Section 2.5 “Measures of the Center of the Data” and Section 2.7 “Measures of the Spread of the Data”"},
     {book:"openintro", where:"Chapter 2, Sections 2.1.4 “Variance and standard deviation” and 2.1.6 “Robust statistics”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u5-l3", title:"Percentiles, quartiles and boxplots", minutes:55,
   hook:{q:"On a growth chart, Mei’s child is at the 90th percentile for height. What does that mean?", options:["The child is taller than about 90% of children of the same age and sex in the chart’s reference group","The child has reached 90% of their expected adult height","The child is 90% likely to be tall as an adult","The child scored 90 out of 100 on a health check"], answer:0, reveal:"**Taller than about 90%** of the children the chart compares them with. A [[percentile]] tells you where a value stands within a group, not a percentage of anything else. This lesson shows how percentiles and quartiles are found (and why apps disagree slightly), and how five of them make a boxplot."},
   goals:[
     "Explain what a percentile and a quartile tell you, and what they don’t",
     "Find quartiles by hand with the textbook method",
     "Explain why QUARTILE.INC, QUARTILE.EXC and the textbook can give slightly different answers",
     "Give a five-number summary and flag outliers with the 1.5 × IQR rule",
     "Draw and read a boxplot, and say what it hides"
   ],
   learn:[
    {h:"Percentiles: where a value stands", body:[
      {lead:"A percentile is a position in the queue: line everyone up from smallest to largest and ask how far along a value is."},
      "The k-th [[percentile]] is a value with about k% of the data at or below it. If your test score is at the 75th percentile, about 75% of test-takers scored the same as you or lower. It does **not** mean you got 75% of the questions right; a score of 52% could be at the 90th percentile on a very hard test.",
      "Percentiles are useful because they work the same way for any scale: exam scores, children’s heights, waiting times, house prices. A [[percentile-rank|percentile rank]] answers the reverse question: given a value, what percentage of the group is at or below it?",
      "The three [[quartile|quartiles]] are the percentiles that cut the data into four quarters:",
      {list:[
        "**Q1** (first quartile) = 25th percentile",
        "**Q2** = 50th percentile = the median",
        "**Q3** (third quartile) = 75th percentile"
      ]},
      "The [[interquartile-range|interquartile range]] from Lesson 2 is Q3 − Q1: the width of the middle half."
    ]},
    {h:"Finding quartiles by hand", body:[
      "OpenStax *Introductory Statistics* (Section 2.3) uses a method that’s easy to do on paper: find the median, then find the median of each half.",
      {ex:"Clinic waits, sorted (n = 15):\n4 6 7 8 8 9 10 | 11 | 12 12 14 15 18 22 41\n\nMedian (8th value) = 11\nLower half (the 7 values below the median): 4 6 7 8 8 9 10\n   → Q1 = middle of these = 8\nUpper half (the 7 values above the median): 12 12 14 15 18 22 41\n   → Q3 = 15\nIQR = 15 − 8 = 7", label:"Worked example: an odd number of values", mono:true},
      "With an odd number of values, this method leaves the median itself out of both halves. With an even number, the data split cleanly:",
      {ex:"Eight test scores, sorted: 52 60 63 67 | 70 74 81 95\nMedian = (67 + 70) ÷ 2 = 68.5\nLower half: 52 60 63 67  → Q1 = (60 + 63) ÷ 2 = 61.5\nUpper half: 70 74 81 95  → Q3 = (74 + 81) ÷ 2 = 77.5\nIQR = 77.5 − 61.5 = 16", label:"Worked example: an even number of values", mono:true},
      {tip:"Sort first, every time. Most hand-calculation mistakes with medians and quartiles come from forgetting to sort."}
    ]},
    {h:"Why apps give slightly different answers", body:[
      "Type the eight test scores into a spreadsheet and you may get a different Q1. That’s not a bug. With a finite list of values, “the 25th percentile” often falls **between** two data values, and there is no single agreed rule for where exactly. The US National Institute of Standards and Technology (NIST) handbook says there is no standard, universally accepted way to do this, and a well-known 1996 comparison by Hyndman and Fan described nine methods used by software.",
      {table:[["Method","Q1","Q3"],["Textbook (median of each half)","61.5","77.5"],["QUARTILE.INC (and QUARTILE)","62.25","75.75"],["QUARTILE.EXC","60.75","79.25"]]},
      "The spreadsheet functions locate a **position** in the sorted list and interpolate (move proportionally) between neighbours:",
      {list:[
        "**QUARTILE.INC** and **PERCENTILE.INC** use position 1 + p × (n − 1). For Q1 of eight values: 1 + 0.25 × 7 = 2.75, so three quarters of the way from the 2nd value (60) to the 3rd (63): 60 + 0.75 × 3 = **62.25**. The older QUARTILE and PERCENTILE give the same results.",
        "**QUARTILE.EXC** and **PERCENTILE.EXC** use position p × (n + 1). For Q1: 0.25 × 9 = 2.25, so a quarter of the way from 60 to 63: **60.75**."
      ]},
      "Excel, Google Sheets and LibreOffice Calc all offer QUARTILE, QUARTILE.INC, QUARTILE.EXC, PERCENTILE, PERCENTILE.INC and PERCENTILE.EXC, and we checked that LibreOffice gives exactly the values in the table. Apple Numbers has QUARTILE and PERCENTILE; the example in Apple’s help matches the inclusive method. Statistics software has its own defaults again (R, for instance, offers all nine of Hyndman and Fan’s types).",
      "The .EXC versions refuse extreme percentiles in small data sets: PERCENTILE.EXC for the 90th percentile of eight values would need position 0.9 × 9 = 8.1, beyond the last value, so Excel returns #NUM! (LibreOffice shows Err:504).",
      {key:"Quartiles from different methods differ a little, mostly in small data sets, and the differences shrink as data grow. None is “wrong”. Pick one, say which, and use the same one when you compare groups."},
      {warn:"For the clinic data, QUARTILE.EXC happens to match the textbook (Q1 = 8, Q3 = 15) but QUARTILE.INC gives Q3 = 14.5. Don’t assume any two methods agree; check, or state the function you used."}
    ]},
    {h:"The five-number summary", body:[
      "The [[five-number-summary|five-number summary]] lists the minimum, Q1, median, Q3 and maximum. For the clinic waits it is:",
      {table:[["Part","Clinic waits (minutes)"],["Minimum","4"],["Q1","8"],["Median","11"],["Q3","15"],["Maximum","41"]]},
      "Read it like a story: a quarter of patients waited 8 minutes or less, half waited 11 or less, three quarters 15 or less, and the longest wait was 41. The gap from Q3 to the maximum (26 minutes) is far bigger than the gap from the minimum to Q1 (4 minutes): another sign of right skew."
    ]},
    {h:"Drawing a boxplot", body:[
      "A [[boxplot]] (box-and-whisker plot) draws the five-number summary, with one refinement made popular by the statistician John Tukey: values that are unusually far out are drawn as separate points. The usual rule uses **fences** 1.5 × IQR beyond the quartiles.",
      {ol:[
        "Draw a number line with an even scale.",
        "Draw a box from Q1 to Q3 and a line across it at the median.",
        "Work out the fences: lower = Q1 − 1.5 × IQR, upper = Q3 + 1.5 × IQR.",
        "Draw each whisker out to the most extreme data value that is still inside its fence.",
        "Mark any values beyond the fences as individual points: potential outliers."
      ]},
      {ex:"Clinic waits: Q1 = 8, Q3 = 15, IQR = 7\n1.5 × IQR = 10.5\nLower fence = 8 − 10.5 = −2.5   (no wait is below it)\nUpper fence = 15 + 10.5 = 25.5   (41 is above it)\nWhiskers: from 4 up to 8, and from 15 up to 22\n41 is drawn as a separate point", label:"Worked example", mono:true},
      {fig:'<svg viewBox="0 0 340 256"><text class="s" x="170" y="16" text-anchor="middle">The 15 waiting times</text><circle class="d-lup" cx="46.7" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="60" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="66.7" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="73.3" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="73.3" cy="38" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="80" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="86.7" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="93.3" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="100" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="100" cy="38" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="113.3" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="120" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="140" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="166.7" cy="46" r="3.3" stroke-width="1.5"/><circle class="d-lup" cx="293.3" cy="46" r="3.3" stroke-width="1.5"/><path class="d-ink" d="M46.7 122 L73.3 122" stroke-width="2"/><path class="d-ink" d="M120 122 L166.7 122" stroke-width="2"/><path class="d-ink" d="M46.7 113 L46.7 131" stroke-width="2"/><path class="d-ink" d="M166.7 113 L166.7 131" stroke-width="2"/><rect class="d-gold" x="73.3" y="104" width="46.7" height="36" stroke-width="2"/><path class="d-ink" d="M93.3 104 L93.3 140" stroke-width="3"/><circle class="d-rose" cx="293.3" cy="122" r="5" stroke-width="2"/><path class="d-soft" d="M190 70 L190 172" stroke-width="1.5" stroke-dasharray="4 3"/><text class="s" x="93.3" y="96" text-anchor="middle">median 11</text><text class="s" x="73.3" y="158" text-anchor="end">Q1 = 8</text><text class="s" x="120" y="158">Q3 = 15</text><text class="s" x="46.7" y="108" text-anchor="middle">4</text><text class="s" x="166.7" y="108" text-anchor="middle">22</text><text class="s" x="293.3" y="110" text-anchor="middle">41</text><text class="s" x="194" y="186">fence 25.5</text><text class="s" x="293.3" y="144" text-anchor="middle">outlier</text><path class="d-ink" d="M20 206 L320 206" stroke-width="1.5"/><path class="d-ink" d="M20 206 L20 211" stroke-width="1"/><text class="s" x="20" y="225" text-anchor="middle">0</text><path class="d-ink" d="M53.3 206 L53.3 211" stroke-width="1"/><path class="d-ink" d="M86.7 206 L86.7 211" stroke-width="1"/><text class="s" x="86.7" y="225" text-anchor="middle">10</text><path class="d-ink" d="M120 206 L120 211" stroke-width="1"/><path class="d-ink" d="M153.3 206 L153.3 211" stroke-width="1"/><text class="s" x="153.3" y="225" text-anchor="middle">20</text><path class="d-ink" d="M186.7 206 L186.7 211" stroke-width="1"/><path class="d-ink" d="M220 206 L220 211" stroke-width="1"/><text class="s" x="220" y="225" text-anchor="middle">30</text><path class="d-ink" d="M253.3 206 L253.3 211" stroke-width="1"/><path class="d-ink" d="M286.7 206 L286.7 211" stroke-width="1"/><text class="s" x="286.7" y="225" text-anchor="middle">40</text><path class="d-ink" d="M320 206 L320 211" stroke-width="1"/><text class="s" x="170" y="244" text-anchor="middle">minutes waited</text></svg>', alt:"A dot plot of the 15 waiting times above a boxplot on the same 0 to 45 minute scale. The box runs from Q1 = 8 to Q3 = 15 with a thick line at the median, 11. The left whisker reaches 4 and the right whisker reaches 22. A dashed vertical line marks the upper fence at 25.5, and the value 41 beyond it is drawn as a separate point labelled outlier.", cap:"The boxplot of the clinic waits, drawn under the dot plot so you can see which values make each part."},
      "NIST’s engineering statistics handbook calls values beyond these inner fences **mild outliers**, and values beyond 3 × IQR from the quartiles **extreme outliers**. OpenStax Section 2.4 also shows a simpler boxplot with whiskers running all the way to the minimum and maximum; you will meet both styles, so check which one a chart uses.",
      {tip:"Excel’s Box and Whisker chart (Microsoft 365 on Windows and Mac, Excel 2016 or later for Windows, Excel 2021 or later for Mac, and Excel on iPad and iPhone) has a **Quartile Calculation** setting with “Inclusive median” and “Exclusive median” options. Other apps may need you to draw the boxplot yourself from the five numbers, which is quick on paper."}
    ]},
    {h:"Reading boxplots, and what they hide", body:[
      "Boxplots are compact, which makes them excellent for comparing several groups side by side (Lesson 4). When you read one, look at:",
      {list:[
        "**The median line**: the centre.",
        "**The box length (IQR)**: the spread of the middle half.",
        "**Balance**: a longer upper whisker and box half suggest right skew; a longer lower part suggests left skew.",
        "**Points**: potential outliers, worth investigating (Lesson 1)."
      ]},
      "But a boxplot throws information away. It can’t show two peaks: a [[bimodal]] distribution and a flat one can have the same box. It doesn’t show how many values there are, so a boxplot of 6 values looks as solid as one of 6,000. Where possible, show the data points too (as in the figure above) or say n.",
      "And the 1.5 × IQR rule is a screening rule, not proof of anything. In large data sets from a perfectly normal distribution, about 0.7% of values land beyond the fences anyway, so a sample of 10,000 will flag around 70 “outliers” that are entirely ordinary.",
      {key:"A point beyond a fence is “worth a look”, not “wrong”. And a boxplot is a summary: when the data set is small, show the dots."}
    ]}
   ],
   try:[
    {id:"t3u5-l3-x1", type:"mcq", q:"Tomás’s exam result is reported as “68%, 85th percentile”. Which statement is correct?", options:[
      {t:"He answered 68% of the questions correctly, and about 85% of candidates scored the same as him or lower.", ok:true, why:"The percentage is his own mark; the percentile is his position in the group. On a hard exam, 68% can be a high-ranking score."},
      {t:"He answered 85% of the questions correctly.", why:"The percentile isn’t his mark. It’s the percentage of candidates at or below his score."},
      {t:"85% of candidates scored higher than him.", why:"That’s the wrong way round. At the 85th percentile, about 85% scored the same or lower, so only about 15% scored higher."},
      {t:"The two numbers contradict each other, so one is a mistake.", why:"They measure different things: his mark out of 100, and his rank within the group. Both can be true."}
    ]},
    {id:"t3u5-l3-x2", type:"number", q:"Using the textbook method (median of each half, leaving out the median when n is odd), find **Q1** for: 3, 5, 7, 8, 10, 12, 13, 15, 20.", answer:6, tol:0, unit:"", why:"There are 9 values, so the median is the 5th: 10. The lower half is the four values below it: 3, 5, 7, 8. Its middle is (5 + 7) ÷ 2 = 6. (Q3 is (13 + 15) ÷ 2 = 14, so the IQR is 8.)", wrongs:[
      {v:7, tol:0, why:"7 is what QUARTILE.INC gives (position 1 + 0.25 × 8 = 3, the 3rd value). It’s a valid method, but this question asks for the textbook method: the middle of the lower half 3, 5, 7, 8."},
      {v:5, tol:0, why:"5 is one of the two middle values of the lower half. With four values, average the middle two: (5 + 7) ÷ 2."},
      {v:10, tol:0, why:"10 is the median (Q2). Q1 is the middle of the lower half."},
      {v:14, tol:0, why:"14 is Q3, the middle of the upper half. Q1 comes from the lower half."}
    ], hint2:"Find the median first, then the middle of the values below it."},
    {id:"t3u5-l3-x3", type:"number", q:"For a set of delivery times, Q1 = 20 minutes and Q3 = 32 minutes. Using the 1.5 × IQR rule, what is the **upper fence**?", answer:50, tol:0, unit:"minutes", why:"IQR = 32 − 20 = 12. 1.5 × 12 = 18. Upper fence = Q3 + 18 = 50 minutes. Any delivery taking longer than 50 minutes would be drawn as a separate point.", wrongs:[
      {v:44, tol:0, why:"44 is Q3 + 1 × IQR. The rule uses 1.5 × IQR: 1.5 × 12 = 18."},
      {v:38, tol:0, why:"38 is Q1 + 1.5 × IQR. The upper fence starts from Q3, not Q1."},
      {v:18, tol:0, why:"18 is 1.5 × IQR. Add it to Q3 to get the fence."},
      {v:68, tol:0, why:"68 is Q3 + 3 × IQR, the “extreme outlier” fence in NIST’s terms. The usual boxplot fence uses 1.5 × IQR."}
    ], hint2:"IQR first, then multiply by 1.5, then add to Q3."},
    {id:"t3u5-l3-x4", type:"match", q:"Eight test scores: 52, 60, 63, 67, 70, 74, 81, 95. Match each method to the result it gives.", pairs:[
      ["Q1 by the textbook method (median of the lower half)","61.5","The lower half is 52, 60, 63, 67; its median is (60 + 63) ÷ 2."],
      ["QUARTILE.INC(scores, 1)","62.25","Position 1 + 0.25 × 7 = 2.75: three quarters of the way from 60 to 63."],
      ["QUARTILE.EXC(scores, 1)","60.75","Position 0.25 × 9 = 2.25: a quarter of the way from 60 to 63."],
      ["PERCENTILE.EXC(scores, 0.9)","An error (#NUM! in Excel)","Position 0.9 × 9 = 8.1 is beyond the 8th (last) value, so the exclusive method refuses."]
    ]},
    {id:"t3u5-l3-x5", type:"order", q:"Put these steps for working out a boxplot’s whiskers and outlier points in order. Each step needs the result of the one before.", items:[
      {t:"Sort the data", why:"Everything that follows (median, quartiles, extremes) depends on the order."},
      {t:"Find Q1 and Q3", why:"You need the sorted data to find the quartiles, and the quartiles to find the IQR."},
      {t:"Calculate the IQR (Q3 − Q1)", why:"The IQR needs both quartiles, and the fences need the IQR."},
      {t:"Work out the fences: Q1 − 1.5 × IQR and Q3 + 1.5 × IQR", why:"The fences need the IQR, and they decide how far the whiskers may reach."},
      {t:"Draw whiskers to the most extreme values inside the fences, and plot anything beyond them as points", why:"Last, because you can only tell which values are inside or beyond the fences once you know the fences."}
    ]},
    {id:"t3u5-l3-x6", type:"sort", q:"For the clinic data, Q1 = 8, Q3 = 15 and the fences are −2.5 and 25.5 minutes. If each of these new waits were added, would the boxplot draw it as a separate point? (Assume the quartiles don’t change.)", buckets:["Beyond a fence: drawn as a point","Inside the fences: within a whisker"], items:[
      {t:"26 minutes", b:0, why:"26 is above the upper fence of 25.5, so it would be drawn separately, though only just."},
      {t:"25 minutes", b:1, why:"25 is below 25.5, so the upper whisker would stretch to reach it."},
      {t:"1 minute", b:1, why:"The lower fence is −2.5, so any real waiting time of zero or more is inside it."},
      {t:"60 minutes", b:0, why:"Far beyond 25.5: a clear potential outlier."},
      {t:"19 minutes", b:1, why:"Well inside the fences; it sits between Q3 and the end of the whisker."}
    ]},
    {id:"t3u5-l3-x7", type:"mcq", q:"Ana compares two boxplots that look identical: same median, same box, same whiskers. What could still be very different about the two data sets?", options:[
      {t:"One could have two separate peaks while the other has one, and they could have very different numbers of values.", ok:true, why:"A boxplot shows only five numbers and the outliers. It hides the number of values and any bimodal shape, which is why showing the dots or n helps."},
      {t:"Their medians could be different.", why:"The median is drawn as the line inside the box, so identical boxplots have identical medians."},
      {t:"Their interquartile ranges could be different.", why:"The IQR is the length of the box. Identical boxes mean identical IQRs."},
      {t:"Nothing: identical boxplots always mean identical data.", why:"Many different data sets share the same five-number summary."}
    ]}
   ],
   apply:{intro:"Compare quartile methods on the eight test scores, then draw a boxplot by hand.", tasks:[
     {t:"See the quartile methods disagree", app:{
       ms:["On a new sheet (tab), so your clinic data stay safe, type 52, 60, 63, 67, 70, 74, 81, 95 into A2:A9.","In C2 `=QUARTILE.INC(A2:A9,1)`, C3 `=QUARTILE.EXC(A2:A9,1)`, C4 `=QUARTILE.INC(A2:A9,3)`, C5 `=QUARTILE.EXC(A2:A9,3)`.","Check: 62.25, 60.75, 75.75, 79.25.","Now try `=PERCENTILE.EXC(A2:A9,0.9)` and `=PERCENTILE.INC(A2:A9,0.9)`: the first gives #NUM!, the second 85.2."],
       google:["On a new sheet (tab), so your clinic data stay safe, type 52, 60, 63, 67, 70, 74, 81, 95 into A2:A9.","In C2 `=QUARTILE.INC(A2:A9,1)`, C3 `=QUARTILE.EXC(A2:A9,1)`, C4 `=QUARTILE.INC(A2:A9,3)`, C5 `=QUARTILE.EXC(A2:A9,3)`.","Check: 62.25, 60.75, 75.75, 79.25.","Now try `=PERCENTILE.EXC(A2:A9,0.9)` and `=PERCENTILE.INC(A2:A9,0.9)`: the first gives an error, the second 85.2."],
       libre:["On a new sheet (tab), so your clinic data stay safe, type 52, 60, 63, 67, 70, 74, 81, 95 into A2:A9.","In C2 `=QUARTILE.INC(A2:A9;1)`, C3 `=QUARTILE.EXC(A2:A9;1)`, C4 `=QUARTILE.INC(A2:A9;3)`, C5 `=QUARTILE.EXC(A2:A9;3)`.","Check: 62.25, 60.75, 75.75, 79.25.","Now try `=PERCENTILE.EXC(A2:A9;0.9)` and `=PERCENTILE.INC(A2:A9;0.9)`: the first shows Err:504, the second 85.2."],
       apple:["On a new sheet, so your clinic data stay safe, type 52, 60, 63, 67, 70, 74, 81, 95 into A2:A9.","In C2 `=QUARTILE(A2:A9,1)` and C3 `=QUARTILE(A2:A9,3)`.","Compare with the table in the lesson: Numbers’ QUARTILE should match the QUARTILE.INC row: 62.25 and 75.75 (the examples in Apple’s help follow the inclusive method).","Work out the textbook quartiles (61.5 and 77.5) by hand and note the difference."]},
       write:"My Q1 and Q3 by each method… How big are the differences compared with the IQR?…"},
     {t:"Draw a boxplot by hand", how:["Use the clinic five-number summary (4, 8, 11, 15, 41) or your own data from Lesson 1.","Draw an evenly scaled number line on paper, then the box, median line, fences, whiskers and any outlier points, following the steps in the lesson.","Label Q1, the median, Q3 and the fence values.","Optional, in desktop Excel: select the data and choose **Insert → Insert Statistic Chart → Box and Whisker**; compare its whiskers and points with your drawing, and try switching **Quartile Calculation** between inclusive and exclusive."], write:"My five numbers… My fences… Points beyond the fences…"},
     {t:"Find a percentile in the wild", how:["Find a published percentile: a growth chart, a test score report, an income distribution from a national statistics office, or a speed-test result (“faster than 80% of users”).","Write what the percentile means in one plain sentence, including who the comparison group is."], write:"Source… What it means… The comparison group…"}
   ], proof:"Quartiles of the eight scores by at least two methods with the differences noted, a hand-drawn labelled boxplot, and a plain-language explanation of one real percentile."},
   read:[
     {book:"ostat", where:"Chapter 2, Section 2.3 “Measures of the Location of the Data” and Section 2.4 “Box Plots”"},
     {book:"openintro", where:"Chapter 2, Section 2.1.5 “Box plots, quartiles, and the median”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u5-l4", title:"z-scores and comparing groups", minutes:50,
   hook:{q:"Amara scored 78 in chemistry, where the class mean was 70 with SD 8, and 85 in history, where the mean was 80 with SD 10. Compared with her classmates, in which subject did she do better?", options:["History, because 85 is higher than 78","Chemistry","Equally well in both","It can’t be compared, because the tests are different"], answer:1, reveal:"**Chemistry.** Her 78 is 8 points, exactly **1 standard deviation**, above the chemistry mean. Her 85 is 5 points, half a standard deviation, above the history mean. Measuring distance in standard deviations, a [[z-score]], lets you compare positions on different scales. This lesson shows how, and how to compare whole groups fairly."},
   goals:[
     "Calculate a z-score, interpret its sign and size, and convert back to the original units",
     "Compare values measured on different scales",
     "Explain the limits of z-scores for skewed data and for spotting outliers",
     "Compare two groups by centre, spread, shape and outliers, with side-by-side boxplots",
     "Describe a difference honestly, without overclaiming"
   ],
   learn:[
    {h:"Standing out: the z-score", body:[
      {lead:"A z-score converts “how far from average” into a common currency: standard deviations."},
      "The [[z-score]] of a value says how many standard deviations it lies above or below the mean:",
      {ex:"z = (value − mean) ÷ standard deviation\n\nChemistry: (78 − 70) ÷ 8 = 8 ÷ 8 = 1.0\nHistory:   (85 − 80) ÷ 10 = 5 ÷ 10 = 0.5", label:"The formula, with Amara’s scores", mono:true},
      {fig:'<svg viewBox="0 0 340 290"><text x="20" y="22">Chemistry: mean 70, SD 8</text><path class="d-ink" d="M35.6 52 L304.4 52" stroke-width="1.5"/><path class="d-ink" d="M58 52 L58 57" stroke-width="1"/><text class="s" x="58" y="71" text-anchor="middle">54</text><path class="d-ink" d="M114 52 L114 57" stroke-width="1"/><text class="s" x="114" y="71" text-anchor="middle">62</text><path class="d-ink" d="M170 52 L170 57" stroke-width="1"/><text class="s" x="170" y="71" text-anchor="middle">70</text><path class="d-ink" d="M226 52 L226 57" stroke-width="1"/><text class="s" x="226" y="71" text-anchor="middle">78</text><path class="d-ink" d="M282 52 L282 57" stroke-width="1"/><text class="s" x="282" y="71" text-anchor="middle">86</text><circle class="d-rose" cx="226" cy="52" r="6" stroke-width="2"/><text class="s" x="226" y="40" text-anchor="middle">78 (z = 1)</text><text x="20" y="114">History: mean 80, SD 10</text><path class="d-ink" d="M35.6 144 L304.4 144" stroke-width="1.5"/><path class="d-ink" d="M58 144 L58 149" stroke-width="1"/><text class="s" x="58" y="163" text-anchor="middle">60</text><path class="d-ink" d="M114 144 L114 149" stroke-width="1"/><text class="s" x="114" y="163" text-anchor="middle">70</text><path class="d-ink" d="M170 144 L170 149" stroke-width="1"/><text class="s" x="170" y="163" text-anchor="middle">80</text><path class="d-ink" d="M226 144 L226 149" stroke-width="1"/><text class="s" x="226" y="163" text-anchor="middle">90</text><path class="d-ink" d="M282 144 L282 149" stroke-width="1"/><text class="s" x="282" y="163" text-anchor="middle">100</text><circle class="d-lup" cx="198" cy="144" r="6" stroke-width="2"/><text class="s" x="198" y="132" text-anchor="middle">85 (z = 0.5)</text><text x="20" y="206">Both on one scale: z-scores</text><path class="d-ink" d="M35.6 236 L304.4 236" stroke-width="1.5"/><path class="d-ink" d="M58 236 L58 241" stroke-width="1"/><text class="s" x="58" y="255" text-anchor="middle">−2</text><path class="d-ink" d="M114 236 L114 241" stroke-width="1"/><text class="s" x="114" y="255" text-anchor="middle">−1</text><path class="d-ink" d="M170 236 L170 241" stroke-width="1"/><text class="s" x="170" y="255" text-anchor="middle">0</text><path class="d-ink" d="M226 236 L226 241" stroke-width="1"/><text class="s" x="226" y="255" text-anchor="middle">+1</text><path class="d-ink" d="M282 236 L282 241" stroke-width="1"/><text class="s" x="282" y="255" text-anchor="middle">+2</text><circle class="d-rose" cx="226" cy="236" r="6" stroke-width="2"/><circle class="d-lup" cx="198" cy="236" r="6" stroke-width="2"/><text class="s" x="226" y="224" text-anchor="middle">chem</text><text class="s" x="194" y="224" text-anchor="end">hist</text><text class="s" x="170" y="276" text-anchor="middle">standard deviations from the mean</text></svg>', alt:"Three aligned number lines. Chemistry, mean 70, SD 8, with ticks 54, 62, 70, 78, 86 and Amara’s 78 marked at z = 1. History, mean 80, SD 10, with ticks 60, 70, 80, 90, 100 and her 85 marked at z = 0.5. A third line in z-scores from −2 to +2 shows chemistry at +1 and history at +0.5.", cap:"Lining the scales up by standard deviations shows that the chemistry score stands further above its class."},
      {list:[
        "**The sign** says which side of the mean: positive above, negative below, zero exactly at the mean.",
        "**The size** says how far, in SDs. A z of 2 is twice as far from the mean as a z of 1.",
        "**No units.** Minutes divided by minutes, points by points: z-scores from completely different measurements can be compared."
      ]},
      "To go back from a z-score to the original units, reverse the formula: **value = mean + z × SD**. A height with z = −1.5, in a group with mean 165 cm and SD 7 cm, is 165 − 1.5 × 7 = 154.5 cm.",
      "In a spreadsheet, calculate the mean and SD once, then point every row at them with absolute references: `=(A2-$D$1)/$D$2`. Excel, Google Sheets, LibreOffice Calc and Numbers also have STANDARDIZE(value, mean, SD), which does the same thing.",
      {lab:"fl-abs", t:"Practise: lock a reference with $ so a formula can be filled down"}
    ]},
    {h:"Reading z-scores sensibly", body:[
      "For roughly [[normal-distribution|normal]] data, the 68–95–99.7 rule turns z-scores into a feel for how unusual a value is: about 95% of values have z between −2 and +2, and a z beyond ±3 is rare (about 3 in 1,000). That’s why tables and reports sometimes flag values with |z| above 2 or 3. Those cut-offs are conventions, not laws.",
      "For skewed data the same z means different things on the two sides. In the clinic data (mean 13.1, SD 9.0), the 41-minute wait has z = (41 − 13.1) ÷ 9.0 ≈ **3.1**, while the shortest wait, 4 minutes, has z ≈ **−1.0**. The long right tail allows large positive z-scores; the floor at zero makes large negative ones impossible. For skewed data, percentiles usually describe position better.",
      {tip:"Be consistent about which SD you use. A z-score built with the sample SD (STDEV.S) is very slightly smaller than one built with the population SD (STDEV.P). For comparisons it matters little, as long as every z-score uses the same one."}
    ]},
    {h:"Two outlier rules that can disagree", body:[
      "There are two common ways to flag outliers: the 1.5 × IQR fences from Lesson 3, or a z-score cut-off such as |z| > 3. They don’t always agree, and the z-score rule has a weakness called **masking**: an extreme value inflates the mean and SD that are used to judge it, which shrinks its own z-score.",
      "In small data sets this is severe. With 10 values, it is mathematically impossible for any value to have |z| above about 2.85 (using the sample SD), however extreme it is. So “flag |z| > 3” can never flag anything in a set of 10. The IQR rule doesn’t have this problem, because quartiles are robust.",
      {key:"Use z-scores to compare positions on different scales. To screen for outliers, prefer the IQR rule (or look at a plot), especially in small or skewed data sets."}
    ]},
    {h:"Comparing groups: centre, spread, shape, outliers", body:[
      "Comparing groups is where description becomes useful: are waits longer at one clinic, scores higher in one class, repairs slower in one district? Compare the same four features you use for a single distribution, on the **same scale**.",
      "A city recorded how many days it took to repair 12 reported streetlight faults in each of two districts (invented data):",
      {ex:"District A: 2 3 3 4 4 5 5 6 7 8 9 21\nDistrict B: 3 5 6 7 8 8 9 10 11 12 14 16", label:"The data", mono:true},
      {table:[["Summary","District A","District B"],["Median","5","8.5"],["Q1 to Q3 (IQR)","3.5 to 7.5 (4)","6.5 to 11.5 (5)"],["Mean","6.4","9.1"],["SD","5.1","3.8"],["Outliers (1.5 × IQR)","21 days","none"]]},
      {fig:'<svg viewBox="0 0 340 286"><text x="24" y="24">District A: median 5, IQR 4</text><path class="d-ink" d="M49 51 L67.8 51" stroke-width="2"/><path class="d-ink" d="M117.8 51 L136.5 51" stroke-width="2"/><path class="d-ink" d="M49 43 L49 59" stroke-width="2"/><path class="d-ink" d="M136.5 43 L136.5 59" stroke-width="2"/><rect class="d-lup" x="67.8" y="34" width="50" height="34" stroke-width="2"/><path class="d-ink" d="M86.5 34 L86.5 68" stroke-width="3"/><circle class="d-rose" cx="286.5" cy="51" r="5" stroke-width="2"/><text class="s" x="286.5" y="75" text-anchor="middle">21</text><text x="24" y="120">District B: median 8.5, IQR 5</text><path class="d-ink" d="M61.5 147 L105.2 147" stroke-width="2"/><path class="d-ink" d="M167.8 147 L224 147" stroke-width="2"/><path class="d-ink" d="M61.5 139 L61.5 155" stroke-width="2"/><path class="d-ink" d="M224 139 L224 155" stroke-width="2"/><rect class="d-sage" x="105.2" y="130" width="62.6" height="34" stroke-width="2"/><path class="d-ink" d="M130.2 130 L130.2 164" stroke-width="3"/><path class="d-ink" d="M24 236 L324 236" stroke-width="1.5"/><path class="d-ink" d="M24 236 L24 241" stroke-width="1"/><text class="s" x="24" y="255" text-anchor="middle">0</text><path class="d-ink" d="M49 236 L49 241" stroke-width="1"/><path class="d-ink" d="M74 236 L74 241" stroke-width="1"/><text class="s" x="74" y="255" text-anchor="middle">4</text><path class="d-ink" d="M99 236 L99 241" stroke-width="1"/><path class="d-ink" d="M124 236 L124 241" stroke-width="1"/><text class="s" x="124" y="255" text-anchor="middle">8</text><path class="d-ink" d="M149 236 L149 241" stroke-width="1"/><path class="d-ink" d="M174 236 L174 241" stroke-width="1"/><text class="s" x="174" y="255" text-anchor="middle">12</text><path class="d-ink" d="M199 236 L199 241" stroke-width="1"/><path class="d-ink" d="M224 236 L224 241" stroke-width="1"/><text class="s" x="224" y="255" text-anchor="middle">16</text><path class="d-ink" d="M249 236 L249 241" stroke-width="1"/><path class="d-ink" d="M274 236 L274 241" stroke-width="1"/><text class="s" x="274" y="255" text-anchor="middle">20</text><path class="d-ink" d="M299 236 L299 241" stroke-width="1"/><path class="d-ink" d="M324 236 L324 241" stroke-width="1"/><text class="s" x="324" y="255" text-anchor="middle">24</text><text class="s" x="170" y="274" text-anchor="middle">days to repair a reported streetlight</text></svg>', alt:"Two horizontal boxplots on the same scale of 0 to 24 days. District A: box from 3.5 to 7.5 with median 5, whiskers from 2 to 9, and a separate point at 21. District B: box from 6.5 to 11.5 with median 8.5, whiskers from 3 to 16, and no separate points. B’s box sits to the right of A’s.", cap:"Side-by-side boxplots on one scale. B’s typical repair takes longer; A has one very slow repair."},
      {list:[
        "**Centre**: the typical repair took longer in B (median 8.5 days versus 5).",
        "**Spread**: the middle halves are similarly wide (IQR 4 and 5). A’s SD looks larger only because of the one 21-day repair; without it, A’s SD would be 2.2.",
        "**Shape**: A is skewed right by its outlier; B is roughly symmetric.",
        "**Unusual values**: one repair in A took 21 days. Worth asking why: a missing part, or a fault reported in the wrong district?"
      ]},
      "Notice how the summary pairs from Lesson 2 matter here. Comparing means (6.4 versus 9.1) and SDs (5.1 versus 3.8) would suggest A is “more variable”, which is mostly one value talking. Medians and IQRs give the fairer picture for these data."
    ]},
    {h:"How big is the difference?", body:[
      "A difference matters more when it is large **compared with the spread within each group**. Here the medians differ by 3.5 days, which is close to a whole IQR, and B’s median (8.5) sits above A’s Q3 (7.5): most of B’s repairs took longer than three quarters of A’s. That’s a clear difference in these 24 repairs.",
      "Researchers often express this as an [[effect-size|effect size]], such as the difference in means divided by a typical SD (see Unit 3 of the Research Skills track). The idea is the same as a z-score: measure a difference in units of spread, so it can be judged and compared.",
      "But be careful what you claim:",
      {list:[
        "**Description isn’t inference.** With 12 repairs per district, chance alone could produce some difference. Whether this one is bigger than chance would explain is a question for Unit 6 (tests and confidence intervals).",
        "**Difference isn’t cause.** B might have more complex faults, fewer crews, or longer travel distances. Groups that differ in one way often differ in others; a hidden factor that drives both is a [[confounder]].",
        "**Fair comparisons** use the same units and time period, rates rather than raw counts when group sizes differ (see {{percentages-rates}} in Unit 1 of this track), and the same quartile method for every group."
      ]},
      {warn:"Comparisons between groups can even reverse when you split the data by a third variable, a pattern known as [[simpsons-paradox|Simpson’s paradox]] (Unit 1 of this track has a real example in {{averages-misleading}}). If groups differ in their make-up (more complex faults in one district, older patients at one clinic), compare like with like before drawing conclusions."}
    ]}
   ],
   try:[
    {id:"t3u5-l4-x1", type:"number", q:"A test has mean 50 and standard deviation 8. What is the z-score of a score of 62?", answer:1.5, tol:0.01, unit:"", why:"z = (62 − 50) ÷ 8 = 12 ÷ 8 = 1.5. The score is one and a half standard deviations above the mean.", wrongs:[
      {v:12, tol:0.01, why:"12 is the distance from the mean in points. Divide by the SD (8) to express it in standard deviations."},
      {v:-1.5, tol:0.01, why:"The score is above the mean, so the z-score is positive. Subtract the mean from the value, not the other way round."},
      {v:7.75, tol:0.01, why:"7.75 is 62 ÷ 8. Subtract the mean first: (62 − 50) ÷ 8."}
    ], hint2:"Subtract the mean, then divide by the SD."},
    {id:"t3u5-l4-x2", type:"mcq", q:"In Hana’s running club, 5 km times have mean 28 minutes and SD 2 minutes; she ran 24. In her swimming club, 400 m times have mean 9 minutes and SD 0.5 minutes; she swam 8.25. Lower times are better. In which did she do better relative to her club?", options:[
      {t:"Running: her z-score is −2, further below the mean than swimming’s −1.5.", ok:true, why:"Running: (24 − 28) ÷ 2 = −2. Swimming: (8.25 − 9) ÷ 0.5 = −1.5. For times, more negative means faster than typical, so running is the stronger result."},
      {t:"Swimming, because −1.5 is bigger than −2.", why:"For times, lower is better, so the more negative z-score (−2) is the better performance."},
      {t:"Equally well, because both times are faster than her club’s mean.", why:"Both are below the mean, but by different numbers of SDs: 2 for running and 1.5 for swimming. The z-scores show how far, not just which side."},
      {t:"They can’t be compared because the sports are different.", why:"That’s exactly what z-scores make possible: each result is measured against its own club’s mean and spread."}
    ]},
    {id:"t3u5-l4-x3", type:"number", q:"Heights in a group have mean 165 cm and SD 7 cm. What height has a z-score of −1.5?", answer:154.5, tol:0.05, unit:"cm", why:"value = mean + z × SD = 165 + (−1.5 × 7) = 165 − 10.5 = 154.5 cm.", wrongs:[
      {v:175.5, tol:0.05, why:"175.5 is 1.5 SDs **above** the mean. A negative z-score is below it."},
      {v:163.5, tol:0.05, why:"163.5 subtracts 1.5 cm, not 1.5 standard deviations. Multiply by the SD first: 1.5 × 7 = 10.5."},
      {v:10.5, tol:0.05, why:"10.5 cm is the distance from the mean. Subtract it from 165."}
    ], hint2:"value = mean + z × SD, and z is negative here."},
    {id:"t3u5-l4-x4", type:"mcq", q:"Dmitri has 10 measurements, one of which is clearly a wild error. He flags outliers using |z| > 3, and nothing is flagged. Why?", options:[
      {t:"The extreme value inflates the mean and SD, and with only 10 values no z-score can exceed about 2.85.", ok:true, why:"This is masking. With n = 10 and the sample SD, the largest possible |z| is (n − 1) ÷ √n ≈ 2.85, so a cut-off of 3 can never be reached. The IQR rule would catch it."},
      {t:"The value can’t be an outlier, because the z-score rule is exact.", why:"The z-score rule is only a convention, and in small samples it can miss obvious problems."},
      {t:"He should have used the population SD, which makes z-scores much bigger.", why:"The population SD makes z-scores only slightly bigger (with n = 10 the maximum rises to 3.0 exactly), so the problem remains."},
      {t:"z-scores only work for negative values.", why:"z-scores work on both sides of the mean; the issue is that the outlier shrinks its own z-score."}
    ]},
    {id:"t3u5-l4-x5", type:"sort", q:"From the streetlight repair data (A: median 5, IQR 4, one 21-day repair; B: median 8.5, IQR 5, no outliers; 12 repairs each), which statements are justified?", buckets:["Justified by the data","Not justified"], items:[
      {t:"The typical repair took longer in District B than in District A.", b:0, why:"B’s median (8.5 days) is well above A’s (5), and B’s median is even above A’s Q3."},
      {t:"The middle halves of the two districts are similarly spread out.", b:0, why:"IQRs of 4 and 5 days are similar."},
      {t:"District B’s crews are slower workers.", b:1, why:"The data show a difference, not its cause. Fault types, distances or staffing could explain it."},
      {t:"District A’s repairs are far more variable, because its SD is larger.", b:1, why:"A’s larger SD comes mostly from one 21-day repair. Its IQR is actually slightly smaller than B’s."},
      {t:"Every repair in B took longer than every repair in A.", b:1, why:"The ranges overlap a lot: A’s 21-day repair is the slowest of all, and B’s fastest took 3 days."},
      {t:"One repair in A was unusually slow and is worth investigating.", b:0, why:"21 days is beyond A’s upper fence (13.5), so it’s a potential outlier worth checking."}
    ]},
    {id:"t3u5-l4-x6", type:"match", q:"Match each part of a side-by-side boxplot to what it lets you compare.", pairs:[
      ["The median lines","Typical values (centre)","The line inside each box marks the median."],
      ["The box lengths","Spread of the middle half","Each box runs from Q1 to Q3, so its length is the IQR."],
      ["Points beyond the whiskers","Potential outliers","Values beyond the 1.5 × IQR fences are drawn individually."],
      ["Uneven whiskers and box halves","Skew","A longer upper part suggests right skew; a longer lower part, left skew."]
    ]}
   ],
   apply:{intro:"Calculate z-scores in a spreadsheet and compare two groups of your own. Use a new sheet (tab) so the Lesson 1 table isn’t overwritten.", tasks:[
     {t:"Add a z-score column", app:{
       ms:["On a new sheet, type the clinic waits in A2:A16 (copy them from Lesson 1). In D1 type `=AVERAGE(A2:A16)` and in D2 `=STDEV.S(A2:A16)`.","In B2 type `=(A2-$D$1)/$D$2` and fill down to B16. (Or `=STANDARDIZE(A2,$D$1,$D$2)`.)","Check: the 41 gets about 3.09 and the 4 about −1.01. The z-scores should average 0 (try `=AVERAGE(B2:B16)`; you may see a tiny number like 1E-16 from rounding)."],
       google:["On a new sheet, type the clinic waits in A2:A16 (copy them from Lesson 1). In D1 type `=AVERAGE(A2:A16)` and in D2 `=STDEV.S(A2:A16)`.","In B2 type `=(A2-$D$1)/$D$2` and fill down to B16. (Or `=STANDARDIZE(A2,$D$1,$D$2)`.)","Check: the 41 gets about 3.09 and the 4 about −1.01, and `=AVERAGE(B2:B16)` is 0 (or a tiny rounding leftover)."],
       libre:["On a new sheet, type the clinic waits in A2:A16 (copy them from Lesson 1). In D1 type `=AVERAGE(A2:A16)` and in D2 `=STDEV.S(A2:A16)`.","In B2 type `=(A2-$D$1)/$D$2` and fill down to B16. (Or `=STANDARDIZE(A2;$D$1;$D$2)`.)","Check: the 41 gets about 3.09 and the 4 about −1.01, and `=AVERAGE(B2:B16)` is 0 (or a tiny rounding leftover)."],
       apple:["On a new sheet, type the clinic waits in A2:A16 (copy them from Lesson 1). In D1 type `=AVERAGE(A2:A16)` and in D2 `=STDEV(A2:A16)`.","In B2 type `=(A2-$D$1)/$D$2` and fill down to B16. Numbers keeps the $ references fixed when you fill.","Check: the 41 gets about 3.09 and the 4 about −1.01."]},
       write:"Largest z… Smallest z… Does the 41 count as an outlier by |z| > 3? By the IQR rule?…"},
     {t:"Compare two groups of your own", how:["Collect one numeric variable for two groups you care about, at least 8 values each: two routes to work, two weeks of sleep, prices of the same item in two shops, two classes’ scores.","For each group, find the five-number summary (state the method or function you used), and sketch side-by-side boxplots on one scale.","Write three or four sentences comparing centre, spread, shape and outliers, and one sentence on what the data can’t tell you (cause, or whether it’s more than chance)."], write:"Group 1 summary… Group 2 summary… My comparison… What I can’t conclude…"}
   ], proof:"A z-score column for the clinic data with the extreme values checked, and a short written comparison of two groups with five-number summaries, a sketch, and an honest limitation."},
   read:[
     {book:"ostat", where:"Chapter 2, Section 2.7 “Measures of the Spread of the Data”", note:"Introduces z-scores as the number of standard deviations from the mean, with the GPA comparison example."},
     {book:"openintro", where:"Chapter 4, Section 4.1.2 “Standardizing with Z-scores” and Chapter 2, Section 2.2.6 “Comparing numerical data across groups”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u5-l5", title:"Scatterplots and correlation", minutes:55,
   hook:{q:"Four small data sets each have the same mean of x (9), the same mean of y (7.5), the same standard deviations, and the same correlation, r = 0.82. Do their scatterplots have to look alike?", options:["Yes: identical statistics mean identical plots","Roughly: they’ll be similar clouds of points","No: they can look completely different","That’s impossible: data sets with the same r must be the same data"], answer:2, reveal:"**No, they can look completely different.** The statistician Francis Anscombe built exactly these four data sets in 1973: one is a loose straight-line cloud, one a smooth curve, one a perfect line with one stray point, and one a vertical stack with a single far point. Same numbers, four different stories. This lesson shows what the correlation coefficient measures, and why you always plot first."},
   goals:[
     "Describe a scatterplot by direction, form, strength and unusual points",
     "Explain Pearson’s r as an average of z-score products, and calculate it for a small data set",
     "Interpret r’s sign and size, and say what it doesn’t measure",
     "Show how outliers and curves mislead r, using Anscombe’s quartet",
     "Explain why a correlation, however strong, doesn’t establish cause"
   ],
   learn:[
    {h:"Reading a scatterplot", body:[
      {lead:"A scatterplot is a map of pairs: each point is one case, placed by two measurements at once."},
      "When you measure two numeric variables on the same cases, such as hours of practice and test score for each learner, a **[[scatterplot]]** puts one variable on each axis. If one variable might help explain or predict the other, it usually goes on the horizontal (x) axis.",
      "Describe the [[scatter-pattern|pattern]] with four words:",
      {list:[
        "**Direction**: positive (up to the right: more practice, higher scores), negative (down to the right: older cars, lower prices), or neither.",
        "**Form**: roughly a straight line (linear), a curve, or clusters.",
        "**Strength**: how tightly the points follow the form. A tight band is strong; a fuzzy cloud is weak.",
        "**Unusual points**: cases far from the overall pattern."
      ]},
      "For example, plotting the age of second-hand cars against their price usually shows a negative, curved pattern: prices fall fastest in the first few years, then level off. A straight line would describe that only roughly."
    ]},
    {h:"Pearson’s r: one number for a straight-line pattern", body:[
      "The [[pearson-r|Pearson correlation coefficient]], r, measures the direction and strength of a **linear** relationship. (The sociology primer’s first unit introduced [[correlation]] as an idea; this is how it’s measured.) The cleanest way to see what it does uses z-scores from Lesson 4:",
      {ol:[
        "Turn every x into a z-score, and every y into a z-score.",
        "Multiply each case’s two z-scores together.",
        "Add the products and divide by n − 1."
      ]},
      "Why products? Look at the four regions around the two means. A point that is above average on both (top right) gives + × + = +; below average on both (bottom left) gives − × − = +. Points in the other two regions give negative products. If most points sit top right and bottom left, the products add up to a large positive number.",
      {fig:'<svg viewBox="0 0 340 282"><path class="d-ink" d="M56 230 L312 230" stroke-width="1.5"/><path class="d-ink" d="M56 230 L56 40" stroke-width="1.5"/><path class="d-ink" d="M77.3 230 L77.3 235" stroke-width="1"/><text class="s" x="77.3" y="249" text-anchor="middle">1</text><path class="d-ink" d="M120 230 L120 235" stroke-width="1"/><text class="s" x="120" y="249" text-anchor="middle">2</text><path class="d-ink" d="M162.7 230 L162.7 235" stroke-width="1"/><text class="s" x="162.7" y="249" text-anchor="middle">3</text><path class="d-ink" d="M205.3 230 L205.3 235" stroke-width="1"/><text class="s" x="205.3" y="249" text-anchor="middle">4</text><path class="d-ink" d="M248 230 L248 235" stroke-width="1"/><text class="s" x="248" y="249" text-anchor="middle">5</text><path class="d-ink" d="M290.7 230 L290.7 235" stroke-width="1"/><text class="s" x="290.7" y="249" text-anchor="middle">6</text><path class="d-ink" d="M51 216.4 L56 216.4" stroke-width="1"/><text class="s" x="48" y="220.4" text-anchor="end">50</text><path class="d-ink" d="M51 148.6 L56 148.6" stroke-width="1"/><text class="s" x="48" y="152.6" text-anchor="end">60</text><path class="d-ink" d="M51 80.7 L56 80.7" stroke-width="1"/><text class="s" x="48" y="84.7" text-anchor="end">70</text><path class="d-soft" d="M184 40 L184 230" stroke-width="1.5" stroke-dasharray="4 3"/><path class="d-soft" d="M56 133.9 L312 133.9" stroke-width="1.5" stroke-dasharray="4 3"/><text class="s" x="235.2" y="56" text-anchor="middle">+ × + = +</text><text class="s" x="124.3" y="222" text-anchor="middle">− × − = +</text><text class="s" x="115.7" y="56" text-anchor="middle">− × + = −</text><text class="s" x="260.8" y="222" text-anchor="middle">+ × − = −</text><circle class="d-rose" cx="77.3" cy="202.9" r="5.5" stroke-width="2"/><circle class="d-rose" cx="120" cy="162.1" r="5.5" stroke-width="2"/><circle class="d-rose" cx="162.7" cy="182.5" r="5.5" stroke-width="2"/><circle class="d-rose" cx="205.3" cy="107.9" r="5.5" stroke-width="2"/><circle class="d-rose" cx="248" cy="80.7" r="5.5" stroke-width="2"/><circle class="d-rose" cx="290.7" cy="67.1" r="5.5" stroke-width="2"/><text class="s" x="184" y="30" text-anchor="middle">mean x = 3.5</text><text class="s" x="312" y="127.9" text-anchor="end">mean y = 62.2</text><text class="s" x="190" y="272" text-anchor="middle">hours of practice per week</text><text class="s" x="8" y="30">score</text></svg>', alt:"A scatterplot of six learners: hours of practice per week from 1 to 6 on the x-axis and score from 50 to 75 on the y-axis. Dashed lines mark the mean of x at 3.5 and the mean of y at 62.2, dividing the plot into four regions labelled with the sign of the z-score product: top right plus times plus equals plus, bottom left minus times minus equals plus, top left and bottom right negative. Three points are in the bottom left and three in the top right.", cap:"Every point here lies in a region where the product of z-scores is positive, so r is positive."},
      {ex:"Hours (x):  1     2     3     4     5     6     mean 3.5, SD 1.87\nScore (y): 52    58    55    66    70    72     mean 62.2, SD 8.30\nz of x:  −1.34 −0.80 −0.27  0.27  0.80  1.34\nz of y:  −1.22 −0.50 −0.86  0.46  0.94  1.18\nproduct:  1.64  0.40  0.23  0.12  0.76  1.58   sum 4.73\nr = 4.73 ÷ (6 − 1) = 0.946", label:"Worked example (invented data)", mono:true},
      "Spreadsheets do this with CORREL (or PEARSON, which gives the same result) in Excel, Google Sheets and LibreOffice Calc: `=CORREL(A2:A7,B2:B7)` returns 0.946 here. Numbers has CORREL too. (OpenStax writes the same r with a different-looking formula built from sums of x, y, xy, x² and y²; they’re algebraically identical.)",
      {table:[["r","What it means"],["+1","All points exactly on a rising straight line"],["near +1","Strong positive linear pattern"],["near 0","No straight-line pattern (there may still be a curve)"],["near −1","Strong negative linear pattern"],["−1","All points exactly on a falling straight line"]]},
      {tip:"Words like “strong” or “moderate” for particular values of r are conventions that differ between fields and textbooks. Report the number and show the plot, rather than leaning on a label."}
    ]},
    {h:"What r does not tell you", body:[
      {list:[
        "**It only measures straight-line patterns.** Points on a perfect U-shaped curve can have r = 0, even though y is completely determined by x (left panel below).",
        "**It isn’t a percentage.** r = 0.6 doesn’t mean “60% related”. Its square, r², has a percentage-style meaning in regression (Unit 6 of this track), but r itself doesn’t.",
        "**It isn’t the slope.** r = 0.9 can come from a steep line or a shallow one. The slope of the best-fit line (the regression line) depends on units; r doesn’t, so changing minutes to hours or centimetres to inches leaves r unchanged.",
        "**It’s symmetric.** The correlation of x with y is the same as y with x. r alone says nothing about which variable affects which.",
        "**It depends on the range you look at.** Measure only a narrow slice of x (for example, only students who all practise 3 to 4 hours) and r usually shrinks, even if the relationship is just as real."
      ]}
    ]},
    {h:"Outliers can make or break r", body:[
      "Because r is built from z-scores, which use the mean and SD, a single unusual point can change it dramatically.",
      {fig:'<svg viewBox="0 0 340 212"><rect class="d-panel" x="6" y="12" width="156" height="150" stroke-width="1"/><circle class="d-lup" cx="23.7" cy="43.8" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="43.1" cy="102.8" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="62.6" cy="138.2" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="82" cy="150" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="101.4" cy="138.2" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="120.9" cy="102.8" r="4.5" stroke-width="1.5"/><circle class="d-lup" cx="140.3" cy="43.8" r="4.5" stroke-width="1.5"/><text x="84" y="182" text-anchor="middle">Strong curve</text><text class="s" x="84" y="200" text-anchor="middle">r = 0</text><rect class="d-panel" x="176" y="12" width="156" height="150" stroke-width="1"/><circle class="d-rose" cx="194" cy="82.5" r="4.5" stroke-width="1.5"/><circle class="d-rose" cx="214" cy="67.5" r="4.5" stroke-width="1.5"/><circle class="d-rose" cx="234" cy="75" r="4.5" stroke-width="1.5"/><circle class="d-rose" cx="254" cy="47.5" r="4.5" stroke-width="1.5"/><circle class="d-rose" cx="274" cy="37.5" r="4.5" stroke-width="1.5"/><circle class="d-rose" cx="294" cy="32.5" r="4.5" stroke-width="1.5"/><circle class="d-gold" cx="314" cy="137.5" r="5.5" stroke-width="2"/><text x="254" y="182" text-anchor="middle">One added point</text><text class="s" x="254" y="200" text-anchor="middle">r: 0.95 → −0.12</text></svg>', alt:"Two small scatterplots. Left: seven points forming a perfect U-shaped curve, labelled strong curve, r = 0. Right: the six practice and score points rising steadily, plus one extra point far to the right and far below the others; labelled one added point, r changes from 0.95 to −0.12.", cap:"Two ways r misleads: a strong curve with r = 0, and one point that flips the sign of r."},
      "In the right panel, adding one learner who practised 7 hours but scored 30 (perhaps they were ill on the test day, or the score was entered wrongly) changes r from **0.95 to −0.12**. The other six points haven’t changed at all.",
      "This works the other way too: a cloud with no pattern plus one far-away point can show a high r. So when you see a correlation, ask to see the scatterplot, and if one point dominates, report r with and without it, and say why it might be different."
    ]},
    {h:"Anscombe’s quartet: always plot", body:[
      "In 1973 Francis Anscombe published four small data sets (11 points each) to make this point unforgettable. Their summaries are almost identical:",
      {table:[["Statistic","All four sets"],["Mean of x","9"],["Variance of x","11"],["Mean of y","7.50"],["Variance of y","4.12 to 4.13"],["Correlation r","0.816 (to 3 decimals)"],["Best-fit line","y ≈ 3.00 + 0.500x"]]},
      {fig:'<svg viewBox="0 0 340 328"><rect class="d-panel" x="8" y="8" width="156" height="134" stroke-width="1"/><path class="d-soft" d="M24.2 107.8 L155.8 30.5" stroke-width="1.5"/><circle class="d-rose" cx="81.8" cy="73.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="65.3" cy="84.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="106.4" cy="78.1" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="73.6" cy="66.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="90" cy="70.8" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="114.7" cy="55.1" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="48.9" cy="81.3" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="32.4" cy="110.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="98.2" cy="46.5" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="57.1" cy="104.7" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="40.7" cy="96.4" r="3.5" stroke-width="1.5"/><text x="18" y="28">I</text><text class="s" x="86" y="160" text-anchor="middle">r = 0.82</text><rect class="d-panel" x="176" y="8" width="156" height="134" stroke-width="1"/><path class="d-soft" d="M192.2 107.8 L323.8 30.5" stroke-width="1.5"/><circle class="d-rose" cx="249.8" cy="63" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="72.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="274.4" cy="66.8" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="241.6" cy="66.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="258" cy="61.8" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="282.7" cy="73" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="216.9" cy="92.1" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="200.4" cy="121.4" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="266.2" cy="63.1" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="225.1" cy="81.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="208.7" cy="105.5" r="3.5" stroke-width="1.5"/><text x="186" y="28">II</text><text class="s" x="254" y="160" text-anchor="middle">r = 0.82</text><rect class="d-panel" x="8" y="168" width="156" height="134" stroke-width="1"/><path class="d-soft" d="M24.2 267.8 L155.8 190.5" stroke-width="1.5"/><circle class="d-rose" cx="81.8" cy="239.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="65.3" cy="245.9" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="106.4" cy="188.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="73.6" cy="242.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="90" cy="235.8" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="114.7" cy="225.9" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="48.9" cy="252.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="32.4" cy="259.2" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="98.2" cy="232.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="57.1" cy="249.3" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="40.7" cy="255.9" r="3.5" stroke-width="1.5"/><text x="18" y="188">III</text><text class="s" x="86" y="320" text-anchor="middle">r = 0.82</text><rect class="d-panel" x="176" y="168" width="156" height="134" stroke-width="1"/><path class="d-soft" d="M192.2 267.8 L323.8 190.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="247.7" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="255.7" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="236.8" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="225.9" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="229.5" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="243.3" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="260.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="323.8" cy="190.5" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="257.6" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="234.9" r="3.5" stroke-width="1.5"/><circle class="d-rose" cx="233.3" cy="244.7" r="3.5" stroke-width="1.5"/><text x="186" y="188">IV</text><text class="s" x="254" y="320" text-anchor="middle">r = 0.82</text></svg>', alt:"Four small scatterplots labelled I to IV, each with the same rising straight line drawn through it and labelled r = 0.82. I: a loose, roughly linear cloud. II: points following a smooth arch-shaped curve. III: ten points on an almost perfect straight line plus one point far above it. IV: ten points stacked vertically at the same x value, plus one point far to the right.", cap:"Anscombe’s quartet (data as distributed with R’s datasets package, from Anscombe 1973). The same r and the same line, four different stories."},
      {list:[
        "**I**: what r = 0.82 “should” look like: a linear trend with scatter.",
        "**II**: the points follow a smooth curve almost exactly. The relationship is very strong, but not straight, so a line is the wrong model.",
        "**III**: an almost perfect straight line (without its stray point, r is almost exactly 1) plus one outlier that pulls r down to 0.82.",
        "**IV**: x is 8 for ten of the eleven points. One far point creates the whole correlation; without it, r can’t even be calculated, because x wouldn’t vary."
      ]},
      {key:"Summary statistics are a description of a picture. Look at the picture first."}
    ]},
    {h:"Correlation is not causation", body:[
      "You may have met this idea in the sociology primer ({{correlation-causation}}): two variables can move together without one causing the other. With r in hand, three cautions become concrete:",
      {list:[
        "**A third variable** can drive both, producing a [[spurious-correlation|spurious correlation]]. Across a year, ice-cream sales and drownings both rise in hot weather.",
        "**The direction** may run the other way: a strong r between exercise and good health doesn’t tell you whether exercise improves health or healthy people exercise more.",
        "**Chance**: compare enough pairs of unrelated variables and some will show high r by luck, especially with few data points or many years of trending data."
      ]},
      "A strong r is a reason to investigate, not a conclusion. Establishing [[causation]] needs study design: experiments, or careful comparisons that rule out other explanations (see {{correlation-causation}}).",
      {tip:"Unit 6 of this track goes from r to the regression line, r² and residuals, and asks when a correlation is too large to be chance."}
    ]}
   ],
   try:[
    {id:"t3u5-l5-x1", type:"mcq", q:"Priya plots the age of 40 second-hand cars (x) against their price (y). The points fall steeply for the first few years and then level off, with little scatter around that curve. Which description fits best?", options:[
      {t:"Negative, curved and fairly strong.", ok:true, why:"Prices go down as age goes up (negative), the pattern bends (curved), and points stay close to it (strong)."},
      {t:"Positive and linear.", why:"A falling pattern is negative, and a pattern that levels off is curved, not a straight line."},
      {t:"No relationship, because it isn’t a straight line.", why:"A curve is still a relationship, here a strong one. Only a straight-line measure like r might understate it."},
      {t:"Negative and weak, because the points level off.", why:"Levelling off describes the form (curved). Strength is about how tightly points follow the pattern, and here they follow it closely."}
    ]},
    {id:"t3u5-l5-x2", type:"number", q:"For 5 cases, the products of the x and y z-scores add up to 3.6. What is Pearson’s r?", answer:0.9, tol:0.001, unit:"", why:"r = sum of z-score products ÷ (n − 1) = 3.6 ÷ 4 = 0.9: a strong positive linear relationship.", wrongs:[
      {v:0.72, tol:0.001, why:"0.72 divides by n = 5. With z-scores built from sample SDs, r divides by n − 1 = 4."},
      {v:3.6, tol:0.001, why:"3.6 is the sum of the products. Divide by n − 1. (Remember r can never be above 1.)"},
      {v:0.81, tol:0.001, why:"0.81 is r², the square of 0.9. The question asks for r itself."}
    ], hint2:"Divide the sum by one less than the number of cases."},
    {id:"t3u5-l5-x3", type:"sort", q:"Which of these can Pearson’s r tell you on its own?", buckets:["r tells you this","r doesn’t tell you this"], items:[
      {t:"Whether the linear trend is upward or downward", b:0, why:"The sign of r gives the direction of the linear trend."},
      {t:"How closely points follow a straight line", b:0, why:"The closer r is to +1 or −1, the more tightly points cluster around a line."},
      {t:"Whether x causes y", b:1, why:"Correlation alone can’t separate cause from a third variable, reverse direction or chance."},
      {t:"How steep the best-fit line is", b:1, why:"That’s the slope, which depends on units. Very different slopes can share the same r."},
      {t:"Whether there is a strong curved relationship", b:1, why:"A strong curve can have r near 0. Only a plot shows it."},
      {t:"Whether one outlier is driving the result", b:1, why:"r can’t show this; Anscombe’s set IV has r = 0.82 created by a single point."}
    ]},
    {id:"t3u5-l5-x4", type:"mcq", q:"Oluwaseun finds r = 0.02 between the daily outdoor temperature and an office building’s daily energy use over a year. He concludes the two are unrelated. What should he do before concluding that?", options:[
      {t:"Look at a scatterplot: a strong curved relationship (high energy use for heating on cold days and for cooling on hot days) can give r near 0.", ok:true, why:"r measures only straight-line patterns. A U-shape or other curve can be a strong relationship with r close to zero."},
      {t:"Nothing: r = 0.02 proves there is no relationship of any kind.", why:"It shows little straight-line relationship, not no relationship. Curves can hide behind r ≈ 0."},
      {t:"Square r to get the real strength.", why:"r² would be 0.0004, even smaller. It doesn’t reveal a curve either."},
      {t:"Swap the axes, which will give a different r.", why:"r is symmetric: swapping x and y gives exactly the same value."}
    ]},
    {id:"t3u5-l5-x5", type:"spot", q:"Kenji is checking a news article about a study of 300 towns. Tap each sentence that misreads the correlation.", ask:"misreads the correlation", parts:[
      {t:"“Towns with more cafés per resident had higher average incomes (r = 0.6).”", flag:false, why:"A fair description of a positive correlation, with r reported."},
      "\n",
      {t:"“So opening cafés makes towns richer.”", flag:true, why:"Correlation read as cause. Richer towns may attract more cafés (reverse direction), or a third factor such as tourism may drive both."},
      "\n",
      {t:"“With r = 0.6, café numbers explain 60% of the difference in incomes.”", flag:true, why:"r isn’t a percentage. Even r² = 0.36 would describe a statistical fit, not an explanation of cause."},
      "\n",
      {t:"“The researchers published a scatterplot, and no single town dominated the pattern.”", flag:false, why:"Good practice: the plot lets readers check for curves and outliers."},
      "\n",
      {t:"“Because r is positive, every town with more cafés is richer than every town with fewer.”", flag:true, why:"r = 0.6 describes a tendency with plenty of scatter. Many individual towns will go against the trend."}
    ]},
    {id:"t3u5-l5-x6", type:"match", q:"Match each data set in Anscombe’s quartet to what its scatterplot shows. (All four have r ≈ 0.82.)", pairs:[
      ["Set I","A loose straight-line cloud","Set I looks like a typical linear relationship with scatter."],
      ["Set II","A smooth curve","The points follow an arch, so a straight line is the wrong model."],
      ["Set III","A near-perfect line plus one outlier","Ten points almost exactly on a line; one stray point pulls r down."],
      ["Set IV","One far point creating the correlation","Ten points share the same x; the single far point produces the whole r."]
    ]}
   ],
   apply:{intro:"Make a scatterplot, calculate r, then watch one point change it. Use a computer or tablet for the chart if you can; the formulas work on a phone.", tasks:[
     {t:"Scatterplot and r for the practice data", app:{
       ms:["On a new sheet (tab), type `Hours` in A1 and `Score` in B1. In A2:A7 type 1, 2, 3, 4, 5, 6 and in B2:B7 type 52, 58, 55, 66, 70, 72.","In D2 type `=CORREL(A2:A7,B2:B7)`. You should see about 0.946.","Select A1:B7 and choose **Insert → Insert Scatter (X, Y) or Bubble Chart → Scatter**. Excel for the web also has scatter charts on its **Insert** tab, though the buttons are laid out differently."],
       google:["On a new sheet (tab), type `Hours` in A1 and `Score` in B1. In A2:A7 type 1, 2, 3, 4, 5, 6 and in B2:B7 type 52, 58, 55, 66, 70, 72.","In D2 type `=CORREL(A2:A7,B2:B7)`. You should see about 0.946.","Select A1:B7, choose **Insert → Chart**, and in the Chart editor set **Chart type** to **Scatter chart**."],
       libre:["On a new sheet (tab), type `Hours` in A1 and `Score` in B1. In A2:A7 type 1, 2, 3, 4, 5, 6 and in B2:B7 type 52, 58, 55, 66, 70, 72.","In D2 type `=CORREL(A2:A7;B2:B7)`. You should see about 0.946.","Select A1:B7, choose **Insert → Chart…**, pick **XY (Scatter)**, and click **Finish**."],
       apple:["On a new sheet, type `Hours` in A1 and `Score` in B1. In A2:A7 type 1, 2, 3, 4, 5, 6 and in B2:B7 type 52, 58, 55, 66, 70, 72.","In D2 type `=CORREL(A2:A7,B2:B7)`. You should see about 0.946.","Select A2:B7, click or tap **Chart** in the toolbar, and choose the 2D **Scatter** chart."]},
       write:"My r… What the plot looks like…"},
     {t:"Add one unusual point", how:["Add a seventh learner: 7 hours, score 30 (in row 8), and extend the CORREL range to row 8.","r should drop to about −0.12. Look at the chart: one point has flipped the sign.","Write a sentence you could put in a report that gives r with and without the point, and says why it matters."], write:"r with the point… r without… My report sentence…"},
     {t:"Optional: check Anscombe’s quartet yourself", how:["Type set I: x = 10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5 and y = 8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68.","Type set II with the same x and y = 9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74.","Calculate AVERAGE and CORREL for each and make a scatterplot of each. The numbers match; the pictures don’t."], write:"Set I: mean y… r… Set II: mean y… r… What the plots show…"}
   ], proof:"A scatterplot of the practice data with r ≈ 0.946, the changed r (≈ −0.12) after adding one point with a report sentence, and optionally your check of two of Anscombe’s data sets."},
   read:[
     {book:"ostat", where:"Chapter 12, Section 12.2 “Scatter Plots” and Section 12.3 “The Regression Equation” (the part on the correlation coefficient r)"},
     {book:"openintro", where:"Chapter 8, Section 8.1.4 “Describing linear relationships with correlation”, and Section 2.1.1 “Scatterplots for paired data”"}
   ]
  }
  ],
  checkpoint:["t3u5-q02","t3u5-q05","t3u5-q08","t3u5-q11","t3u5-q15","t3u5-q20","t3u5-q23","t3u5-q26","t3u5-q31","t3u5-q35","t3u5-q39","t3u5-q44"],
  codex:[
   {id:"distributions", title:"Distributions and their shapes", aka:["distribution","histogram","dot plot","skew","skewness","bimodal","normal distribution","bell curve","68–95–99.7 rule","empirical rule"], tags:["statistics","data","charts"],
    summary:"What a distribution is, how dot plots and histograms show it, the words for its shape, and the normal distribution with its 68–95–99.7 rule.",
    levels:{
     starter:[
      "A [[distribution]] is the pattern a set of values makes: which values occur, and how often. Think of it as the crowd photo rather than a single portrait.",
      "A **dot plot** puts one dot per value on a number line. A **[[histogram-chart|histogram]]** groups values into equal-width bins and draws a bar for each count, with the bars touching.",
      "Describe a distribution with four things: **shape**, **centre**, **spread** and **unusual values**. Common shapes: **symmetric** (mirror halves), **skewed right** (a long tail to the right, like incomes or waiting times), **skewed left** (a long tail to the left, like scores on an easy test), and [[bimodal]] (two peaks, often two groups mixed together).",
      {key:"Skew is named after the side of the long tail, not the side of the peak."}
     ],
     builder:[
      "**Bins.** Use equal widths with round boundaries and say which bin a boundary value goes in (for example, “10 to under 20”). Try more than one [[bin-width|bin width]]: wide bins hide shape, narrow ones show chance bumps. Somewhere between about 5 and 20 bins is a common starting point (a rule of thumb). In spreadsheets, COUNTIFS builds the counts; Excel (Insert → Insert Statistic Chart → Histogram) and Google Sheets (Insert → Chart → Histogram chart) draw histograms directly.",
      "**Shape and averages.** The mean is pulled toward a long tail; the median isn’t. So right skew usually gives mean > median, left skew mean < median, and symmetric data mean ≈ median. OpenStax Section 2.6 notes this is a usual pattern rather than a rule, especially for discrete data.",
      "**The normal distribution** is a symmetric, bell-shaped model described by its mean and standard deviation. For roughly normal data, about 68% of values lie within 1 SD of the mean, 95% within 2 and 99.7% within 3 (the empirical rule).",
      "**Outliers** may be errors, cases from a different group, or real and important. Investigate before you change anything, and report what you did.",
      "**Which picture?** A dot plot suits small data sets (up to a few dozen values) because it shows every value. A histogram suits larger ones. A boxplot is compact and best for comparing groups, but hides shape details such as two peaks. Many analysts look at more than one."
     ],
     pro:[
      "**Skewness as a number.** Software reports a skewness coefficient (based on cubed deviations from the mean); positive means right skew. Different programs use slightly different small-sample adjustments, and with small samples the value is unstable, so a plot is usually more informative.",
      "**The empirical rule’s exact values** for a normal distribution are 68.27%, 95.45% and 99.73%. Within ±1.96 SD is 95% (to three significant figures), which is where the 1.96 in confidence intervals comes from (Unit 6 of this track).",
      "**Checking normality.** A histogram with a bell shape is a start; a normal quantile plot (Q–Q plot), which should be roughly a straight line for normal data, is more sensitive. Many methods need only approximate normality, and sample means are close to normal for large samples even when the data aren’t (the central limit theorem).",
      "**Kernel density plots** smooth a histogram into a curve; they avoid bin edges but introduce a bandwidth choice that plays the same role as bin width.",
      "**Transformations.** Strongly right-skewed positive data (incomes, concentrations) often look roughly symmetric after taking logarithms, which can make summaries and models more sensible. OpenIntro Section 2.1.7 introduces this.",
      "**Unequal bins.** If bins must have different widths (for example, income bands published by a statistics office), bar heights should show density (count ÷ bin width), not raw counts; otherwise wide bins look misleadingly large. Equal widths avoid the problem."
     ]},
    related:["centre-spread","boxplots","descriptive-statistics","averages-misleading","chart-types"],
    read:[{book:"ostat", where:"Chapter 2, Sections 2.2 and 2.6"},{book:"openintro", where:"Chapter 2, Section 2.1.3 “Histograms and shape”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 2.2 Histograms, Frequency Polygons, and Time Series Graphs", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-2-histograms-frequency-polygons-and-time-series-graphs"},{t:"OpenStax Introductory Statistics 2e, 2.6 Skewness and the Mean, Median, and Mode", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-6-skewness-and-the-mean-median-and-mode"},{t:"OpenStax Introductory Statistics 2e, 6.1 The Standard Normal Distribution", url:"https://openstax.org/books/introductory-statistics-2e/pages/6-1-the-standard-normal-distribution"}], checked:"2026-11"},

   {id:"centre-spread", title:"Centre and spread", aka:["measures of centre","measures of spread","range","standard deviation","interquartile range","IQR","robust statistics","trimmed mean","variability"], tags:["statistics","data"],
    summary:"Choosing a typical value and a measure of spread that suit the data: mean with SD, or median with IQR, and why the range is fragile.",
    levels:{
     starter:[
      "Every summary of numbers needs two parts: a **centre** (a typical value) and a **spread** (how far values range around it).",
      {list:[
        "Centre: the [[mean-stat|mean]] or the [[median-stat|median]] (see {{descriptive-statistics}}).",
        "Spread: the [[range-stat|range]] (largest minus smallest), the [[standard-deviation|standard deviation]] (typical distance from the mean) or the [[interquartile-range|interquartile range]] (width of the middle half)."
      ]},
      "Example: 15 clinic waits (4 to 41 minutes) have mean 13.1 and median 11, range 37, SD 9.0 and IQR 7. Remove the one 41-minute wait and the range and SD roughly halve, while the median and IQR barely move.",
      {key:"Mean with SD for roughly symmetric data; median with IQR for skewed data or data with outliers."},
      "Why it matters: two classes can have the same average mark while one has everyone close together and the other has a huge gap between strong and struggling students. Centre alone can’t tell them apart."
     ],
     builder:[
      "**Robust or not.** A [[robust-statistic|robust statistic]] changes little when a few values are extreme. The median, quartiles and IQR are robust; the mean, SD and range are not. A trimmed mean (dropping a set percentage from each end) is in between.",
      "**SD in practice.** Sample SD divides by n − 1 (STDEV.S in Excel, Google Sheets and LibreOffice Calc; STDEV also works there and in Numbers); population SD divides by n (STDEV.P, or STDEVP). The SD is 0 only if all values are equal, is unchanged when you add a constant to every value, and is multiplied by k when every value is multiplied by k.",
      "**Warning signs.** If mean − SD falls below a natural floor such as zero, the data are probably strongly right-skewed and mean ± SD is a poor summary.",
      "**Range.** Easy but depends on two values and tends to grow with sample size. Use MAX − MIN, and report it with another measure.",
      "**Reporting.** “Median 11 minutes (quartiles 8 and 15; IQR 7), n = 15”. Many papers write this as “IQR 8–15”, giving the two quartiles rather than their difference. For symmetric data: “mean 64.8 (SD 11.2), n = 120”. Round to a precision the data support.",
      "**Show it too.** Summaries are best read next to a dot plot, histogram or boxplot, so readers can see the shape that justified your choice of summary."
     ],
     pro:[
      "**Variance** (the SD squared) adds up nicely for independent variables, which is why theory uses it, but it is in squared units; report the SD.",
      "**Other robust spreads.** The median absolute deviation (MAD), the median of |x − median|, is very resistant to outliers; multiplied by about 1.4826 it estimates the SD for normal data.",
      "**SD is not the standard error.** The SD describes individuals and does not shrink as n grows; the [[standard-error|standard error]] of the mean (SD ÷ √n) describes uncertainty in the mean and does.",
      "**Coefficient of variation** (SD ÷ mean) compares spread across variables with different units or scales, but only makes sense for data on a ratio scale with a true zero.",
      "**Precision.** A common rule of thumb is to report summary statistics to no more than one decimal place beyond the raw data. Excess digits suggest precision a sample can’t provide.",
      "**Trimmed means in software.** A 10% trimmed mean drops the lowest 10% and highest 10% of values. Spreadsheets with a TRIMMEAN function usually take the **total** fraction to remove (0.2 for 10% from each end), and round the number of values removed down to an even count, so check the help page for your app before comparing results.",
      "**Ordinal data.** For ratings such as 1 to 5, the median and quartiles are safer than the mean and SD, because the distances between categories aren’t known to be equal (see {{likert-scales}})."
     ]},
    related:["distributions","percentiles-quartiles","z-scores","descriptive-statistics","common-functions"],
    read:[{book:"ostat", where:"Chapter 2, Sections 2.5 and 2.7"},{book:"openintro", where:"Chapter 2, Sections 2.1.4 and 2.1.6"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 2.7 Measures of the Spread of the Data", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data"},{t:"OpenIntro Statistics 4e (source files)", url:"https://github.com/OpenIntroStat/openintro-statistics"}], checked:"2026-11"},

   {id:"percentiles-quartiles", title:"Percentiles and quartiles", aka:["percentile","quartile","Q1","Q3","percentile rank","QUARTILE.INC","QUARTILE.EXC","PERCENTILE.INC","PERCENTILE.EXC","quantile"], tags:["statistics","data","spreadsheets"],
    summary:"Where a value stands in a data set, how quartiles are found by hand and in apps, and why different methods give slightly different answers.",
    levels:{
     starter:[
      "The k-th [[percentile]] is a value with about k% of the data at or below it. The 90th percentile on a test means about 90% of test-takers scored the same or lower; it says nothing about the percentage of questions answered correctly.",
      "The [[quartile|quartiles]] split sorted data into four quarters: **Q1** (25th percentile), **Q2** (the median) and **Q3** (75th percentile). Q3 − Q1 is the [[interquartile-range|IQR]].",
      "By hand (the OpenStax method): sort, find the median, then Q1 is the median of the lower half and Q3 the median of the upper half, leaving the median out of both halves when the number of values is odd.",
      {tip:"Different apps and books calculate quartiles slightly differently. That’s expected; say which method you used."},
      "Percentiles are everywhere: growth charts for children, test reports, income statistics (“the top 10%”) and internet speed tests (“faster than 80% of users”). Always ask who the comparison group is."
     ],
     builder:[
      "**Spreadsheet functions.** Excel, Google Sheets and LibreOffice Calc have QUARTILE.INC and PERCENTILE.INC (same as the older QUARTILE and PERCENTILE), which use the sorted position 1 + p(n − 1), and QUARTILE.EXC and PERCENTILE.EXC, which use position p(n + 1). Both interpolate between neighbouring values. Apple Numbers has QUARTILE and PERCENTILE; its help example matches the inclusive method.",
      {ex:"Scores: 52 60 63 67 70 74 81 95  (n = 8)\nTextbook:      Q1 61.5   Q3 77.5\nQUARTILE.INC:  Q1 62.25  Q3 75.75\nQUARTILE.EXC:  Q1 60.75  Q3 79.25", label:"Same data, three answers", mono:true},
      "**Errors.** The .EXC functions return #NUM! (Err:504 in LibreOffice) when the position falls outside the data, for example the 90th percentile of 8 values (0.9 × 9 = 8.1). QUARTILE.EXC also rejects quart values 0 and 4.",
      "**Percentile rank** of a value: OpenStax uses (x + 0.5y) ÷ n × 100, where x counts values below it and y values equal to it. Spreadsheets offer PERCENTRANK functions (such as PERCENTRANK.INC), which use their own definitions, so results can differ slightly from the textbook formula.",
      "**Checking your app.** Type a small list such as 52, 60, 63, 67, 70, 74, 81, 95 and compare QUARTILE.INC and QUARTILE.EXC with the table above. If an app or a statistics package gives a third answer, it is using another of the standard methods."
     ],
     pro:[
      "**There is no single standard.** NIST’s e-Handbook (Section 7.2.6.2) states there is no universally accepted way to interpolate percentiles. Hyndman and Fan (1996, *The American Statistician*) described nine sample-quantile definitions (types 1 to 9). Excel’s .INC method is type 7, which is also R’s default; the .EXC method is type 6, the default in NIST’s e-Handbook (and its Dataplot software); Hyndman and Fan recommended type 8. Types 6 to 8 give similar results, differing mainly in small samples.",
      "**Textbook methods.** The median-of-halves method is close to Tukey’s hinges, but Tukey’s hinges **include** the median in both halves when n is odd, so they can differ. OpenStax also gives a percentile formula with position (k ÷ 100)(n + 1), averaging the two neighbours when the position isn’t a whole number (not proportional interpolation), so it can disagree slightly with PERCENTILE.EXC.",
      "**Why it matters.** Quartiles feed IQRs, boxplot fences and outlier flags. In small data sets a different method can move a fence enough to change whether a value is flagged. Use one method consistently and state it, especially when comparing groups or reproducing someone else’s results.",
      "**Large data.** With thousands of values, the methods differ by tiny amounts, often less than the precision of the measurements.",
      "**Grouped data.** When only a frequency table is available (counts per band), percentiles are estimated by interpolating within the band that contains them, which assumes values are spread evenly inside it."
     ]},
    related:["boxplots","centre-spread","distributions","common-functions"],
    read:[{book:"ostat", where:"Chapter 2, Section 2.3 “Measures of the Location of the Data”"},{book:"openintro", where:"Chapter 2, Section 2.1.5"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 2.3 Measures of the Location of the Data", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-3-measures-of-the-location-of-the-data"},{t:"NIST/SEMATECH e-Handbook of Statistical Methods, 7.2.6.2 Percentiles", url:"https://www.itl.nist.gov/div898/handbook/prc/section2/prc262.htm"},{t:"Microsoft Support: QUARTILE.EXC function", url:"https://support.microsoft.com/en-us/office/quartile-exc-function-5a355b7a-840b-4a01-b0f1-f538c2864cad"}], checked:"2026-11"},

   {id:"boxplots", title:"Boxplots and the 1.5 × IQR rule", aka:["box plot","box-and-whisker plot","five-number summary","whiskers","fences","Tukey","outlier rule","mild outlier","extreme outlier"], tags:["statistics","charts","data"],
    summary:"The five-number summary, how to draw a boxplot with fences and outliers, how to read one, and what it hides.",
    levels:{
     starter:[
      "A [[boxplot]] draws the [[five-number-summary|five-number summary]]: minimum, Q1, median, Q3 and maximum. The **box** runs from Q1 to Q3, with a line at the median; **whiskers** reach out toward the smallest and largest values.",
      "Most software also marks unusual values separately. Values more than 1.5 × IQR beyond the box are drawn as individual points: potential [[outlier|outliers]].",
      "Example: clinic waits with Q1 = 8, median 11 and Q3 = 15. The IQR is 7, so the fences are 8 − 10.5 = −2.5 and 15 + 10.5 = 25.5. The whiskers reach 4 and 22, and the 41-minute wait is drawn as a separate point.",
      {key:"Boxplots are excellent for comparing groups side by side on one scale."},
      "Read a boxplot from the middle out: the median line, then the box (the middle half), then the whiskers, then any points."
     ],
     builder:[
      "**Drawing one.** Sort; find Q1, median and Q3; compute the IQR and fences (Q1 − 1.5 × IQR, Q3 + 1.5 × IQR); draw the box and median; extend each whisker to the most extreme value **inside** its fence; plot values beyond the fences as points.",
      "**Two styles.** OpenStax Section 2.4 first draws whiskers to the minimum and maximum, then notes that many boxplots mark outliers with dots instead. Check which style a chart uses before reading its whiskers as the extremes.",
      "**Reading one.** Median line = centre; box length = IQR; uneven halves and whiskers suggest skew; points = values worth checking.",
      "**In apps.** Excel’s Box and Whisker chart (Insert → Insert Statistic Chart; Microsoft 365 and Excel 2016 or later on Windows, Excel 2021 or later on Mac, and Excel on iPad and iPhone) offers “Inclusive median” and “Exclusive median” quartile calculations. Elsewhere, draw it from the five numbers.",
      "**What it hides.** The number of values and any multiple peaks. Show the points or give n when data are few.",
      "**Orientation.** Boxplots can be drawn horizontally (easier to label on a phone) or vertically. Either is fine, as long as the axis is evenly scaled, labelled with units, and shared by every group being compared."
     ],
     pro:[
      "**Fences and names.** The NIST/SEMATECH e-Handbook (Section 7.1.6) calls points beyond the inner fences (1.5 × IQR) mild outliers and beyond the outer fences (3 × IQR) extreme outliers. The 1.5 × IQR convention comes from John Tukey’s exploratory data analysis work in the 1970s.",
      "**Flag rates.** For normally distributed data, the inner fences fall at about ±2.7 SD, so about 0.7% of values are flagged by chance. Large data sets therefore show many points that are perfectly ordinary; for skewed data the rate is higher on the long-tail side.",
      "**Quartile method matters.** The fences depend on Q1 and Q3, so the quartile method (see {{percentiles-quartiles}}) can decide whether a borderline value is drawn as a point in small samples.",
      "**Variants.** Notched boxplots add notches showing approximate uncertainty around the median; variable-width boxplots scale box width by sample size; violin plots and jittered dots (or a “raincloud” of points) show the full shape. Adjusted boxplots for skewed data exist in specialist software.",
      "**Honest use.** Label the axis and units, use one scale for all groups, and say what the whiskers represent.",
      "**Software differences.** Besides the quartile method, programs differ in whether whiskers reach the most extreme value inside the fence or the fence itself, and in whether means are marked (Excel can show a mean marker). The caption should say what is drawn."
     ]},
    related:["percentiles-quartiles","comparing-groups","distributions","chart-types"],
    read:[{book:"ostat", where:"Chapter 2, Section 2.4 “Box Plots”"},{book:"openintro", where:"Chapter 2, Section 2.1.5 “Box plots, quartiles, and the median”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 2.4 Box Plots", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-4-box-plots"},{t:"NIST/SEMATECH e-Handbook of Statistical Methods, 7.1.6 What are outliers in the data?", url:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm"},{t:"Microsoft Support: Create a box and whisker chart", url:"https://support.microsoft.com/en-us/office/create-a-box-and-whisker-chart-62f4219f-db4b-4754-aca8-4743f6190f0d"}], checked:"2026-11"},

   {id:"z-scores", title:"z-scores (standardised scores)", aka:["z-score","standard score","standardising","STANDARDIZE","standard deviations from the mean"], tags:["statistics","data"],
    summary:"Measuring how far a value is from the mean in standard deviations, to compare values on different scales, with the limits for skewed data and outlier screening.",
    levels:{
     starter:[
      "A [[z-score]] says how many standard deviations a value is above or below the mean: **z = (value − mean) ÷ SD**.",
      "Amara scored 78 in chemistry (mean 70, SD 8) and 85 in history (mean 80, SD 10). Her z-scores are 1.0 and 0.5, so her chemistry result stands further above its class, even though the raw mark is lower.",
      "Positive z is above the mean, negative below, zero at the mean. z-scores have no units, so results from different tests, sports or measurements can be compared.",
      {tip:"To go back to the original units: value = mean + z × SD."},
      "Everyday uses include comparing a child’s measurements with a reference group, comparing results from tests with different maximum marks, and spotting values that are unusually far from the rest."
     ],
     builder:[
      "**Spreadsheets.** Put the mean and SD in fixed cells and use absolute references: `=(A2-$D$1)/$D$2`, or STANDARDIZE(value, mean, SD) in Excel, Google Sheets, LibreOffice Calc and Numbers. Use the same SD (sample or population) for every z-score you compare.",
      "**Interpreting size.** For roughly [[normal-distribution|normal]] data, about 68% of z-scores lie between −1 and 1, 95% between −2 and 2 and 99.7% between −3 and 3. Flags such as |z| > 2 or |z| > 3 are conventions.",
      "**Skewed data.** z-scores are less meaningful: in right-skewed waiting times, a 41-minute wait has z ≈ 3.1 but the shortest wait only z ≈ −1.0. Percentiles describe position better for skewed data.",
      "**Lower can be better.** For times, a more negative z means faster than typical. Say which direction is good.",
      "**z-scores average to zero.** In any data set, the z-scores (using that data set’s own mean and SD) have mean 0 and SD 1. That makes a quick check of a spreadsheet column: if your z-scores don’t average to about 0, a reference probably slipped when you filled the formula down.",
      "**Compare like with like.** A z-score is relative to its group. A z of 1 in a class of beginners and a z of 1 in a class of experts are equally far above their own averages, but not equal performances in absolute terms."
     ],
     pro:[
      "**Masking.** An extreme value inflates the mean and SD used to judge it. With the sample SD, the largest possible |z| in a data set of n values is (n − 1) ÷ √n (Shiffler, 1988): about 1.79 for n = 5, 2.85 for n = 10, and just over 3 only from n = 11. So |z| > 3 can never flag anything in 10 or fewer values. Robust alternatives standardise with the median and MAD, or use IQR fences.",
      "**Standardising a variable** (converting every value to z) gives it mean 0 and SD 1 but does **not** change its shape: skewed data stay skewed. It is common before combining variables measured in different units, or in some statistical models.",
      "**Population versus sample.** Theory writes z = (x − μ) ÷ σ with population values; with data you use the sample mean and SD, as OpenStax Section 2.7 shows. For large n the difference is negligible.",
      "**Related scales.** IQ-style scores (mean 100, SD 15), T-scores (mean 50, SD 10) and many test scales are z-scores rescaled to avoid negatives and decimals.",
      "**From z to percentile.** Only for approximately normal data does a z-score convert to a percentile with a normal table (z = 1 is about the 84th percentile). For other shapes, use the actual percentile instead."
     ]},
    related:["centre-spread","comparing-groups","distributions","correlation-coefficient"],
    read:[{book:"ostat", where:"Chapter 2, Section 2.7, and Chapter 6, Section 6.1"},{book:"openintro", where:"Chapter 4, Section 4.1.2 “Standardizing with Z-scores”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 6.1 The Standard Normal Distribution", url:"https://openstax.org/books/introductory-statistics-2e/pages/6-1-the-standard-normal-distribution"},{t:"Google Docs Editors Help: Google Sheets function list (STANDARDIZE)", url:"https://support.google.com/docs/table/25273"}], checked:"2026-11"},

   {id:"comparing-groups", title:"Comparing groups", aka:["side-by-side boxplots","group comparison","difference in medians","effect size","Simpson’s paradox"], tags:["statistics","data","research"],
    summary:"Comparing distributions across groups by centre, spread, shape and outliers, judging a difference against the spread, and avoiding overclaiming.",
    levels:{
     starter:[
      "To compare groups (two clinics, two classes, two districts), compare the same four features you use for one distribution: **centre**, **spread**, **shape** and **unusual values**, on one shared scale.",
      "Side-by-side [[boxplot|boxplots]] make this quick. Example: streetlight repairs took a median of 5 days in District A and 8.5 days in District B, with similar IQRs (4 and 5 days), and one very slow 21-day repair in A.",
      "A difference matters more when it is large compared with the spread inside each group.",
      {key:"A difference between groups is a description, not an explanation. Ask what else differs between them."},
      "Always give the number of cases in each group. A difference between two groups of 6 is much less trustworthy than the same difference between two groups of 600."
     ],
     builder:[
      "**Use matching summaries.** If either group is skewed or has outliers, compare medians and IQRs. In the streetlight data, A’s SD (5.1) is bigger than B’s (3.8) only because of one value; without it, A’s SD is 2.2.",
      "**Judge size against spread.** Here the medians differ by 3.5 days, close to one IQR, and B’s median is above A’s Q3. An [[effect-size|effect size]] such as a standardised mean difference expresses this in SD units.",
      "**Be fair.** Same units, same time period, rates rather than counts when group sizes differ, and the same quartile method for every group. Give n for each group.",
      "**Don’t overclaim.** With small groups, chance alone produces differences; whether a difference is bigger than chance is an inference question (Unit 6). And groups often differ in other ways ([[confounder|confounders]]), so a difference doesn’t show cause.",
      "**Pictures.** Side-by-side boxplots on one axis are the standard. For small groups, add the individual points (jittered dot plots). OpenIntro also shows hollow histograms, outlines of each group’s histogram drawn over each other.",
      "**Write it up.** One sentence each for centre, spread and unusual values, with numbers, then one sentence on what the comparison can’t show.",
      "**Overlap matters.** Even when medians differ clearly, many individuals in the “slower” group may do better than many in the “faster” one. Saying how much the boxes overlap keeps a comparison honest."
     ],
     pro:[
      "**Standardised mean difference.** Cohen’s d divides the difference in means by a pooled SD. For the streetlight data, d ≈ (9.08 − 6.42) ÷ 4.45 ≈ 0.60, but the outlier distorts both the means and the pooled SD, so a median-based description is more trustworthy here. Rules of thumb for “small” or “large” d are context-dependent.",
      "**Overlap.** Many readers misjudge how much two groups overlap. Showing the individual points, or stating something like “B’s median exceeds 75% of A’s repairs”, makes overlap concrete.",
      "**[[simpsons-paradox|Simpson’s paradox]].** An overall comparison can reverse within every subgroup when the groups have different make-ups (for example, if one district has a much larger share of complex faults). Stratify by plausible third variables before interpreting a difference.",
      "**Many groups.** With many groups, order them by median, use one axis, and beware of drawing conclusions from the most extreme of many small groups, which are extreme partly by chance.",
      "**Inference.** Confidence intervals for a difference, t-tests, and rank-based tests (such as the Mann–Whitney test) come next; descriptive comparisons should always accompany them.",
      "**Paired data.** When the same people are measured twice (before and after), compare the differences within each person, not two separate groups; the pairing removes much of the person-to-person spread."
     ]},
    related:["boxplots","z-scores","centre-spread","crosstabs"],
    read:[{book:"openintro", where:"Chapter 2, Section 2.2.6 “Comparing numerical data across groups”"},{book:"ostat", where:"Chapter 2, Section 2.4 “Box Plots”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 2.4 Box Plots", url:"https://openstax.org/books/introductory-statistics-2e/pages/2-4-box-plots"},{t:"OpenIntro Statistics 4e (source files)", url:"https://github.com/OpenIntroStat/openintro-statistics"}], checked:"2026-11"},

   {id:"correlation-coefficient", title:"Pearson’s correlation coefficient", aka:["Pearson’s r","correlation coefficient","r","CORREL","PEARSON","scatterplot","Anscombe’s quartet","linear association"], tags:["statistics","data","research"],
    summary:"How r measures the direction and strength of a straight-line relationship, how to calculate and read it, and why it needs a scatterplot and doesn’t show cause.",
    levels:{
     starter:[
      "[[pearson-r|Pearson’s r]] is a number from −1 to +1 that measures how closely two variables follow a **straight line**. Positive r means one tends to rise as the other rises; negative r means one falls as the other rises; r near 0 means no straight-line pattern.",
      "Always look at the **scatterplot** too. A strong curve can have r near 0, and one unusual point can create or destroy a correlation.",
      "Anscombe’s quartet (1973) is four small data sets with the same means, SDs and r (0.82) but completely different scatterplots.",
      {key:"A [[correlation]] is not [[causation]]. See {{correlation-causation}}."},
      "Example: six learners’ weekly practice hours and test scores give r = 0.95, a strong positive straight-line pattern. Adding one learner who practised a lot but scored very low drops r to −0.12."
     ],
     builder:[
      "**Definition.** Convert x and y to z-scores, multiply each pair, add the products and divide by n − 1. Points above or below average on **both** variables push r up; points above on one and below on the other push it down.",
      {ex:"Hours 1–6, scores 52 58 55 66 70 72\nSum of z-score products = 4.73\nr = 4.73 ÷ 5 = 0.946", label:"Worked example", mono:true},
      "**In apps.** CORREL(range1, range2) or PEARSON(range1, range2) in Excel, Google Sheets and LibreOffice Calc; CORREL in Numbers.",
      "**r is not:** a percentage, the slope, or evidence of direction. It is unchanged by changes of units and by swapping x and y. It shrinks when you look at only a narrow range of x.",
      "**Outliers.** Report r with and without dominant points, and show the plot. In the worked example, adding one point (7 hours, score 30) changes r from 0.95 to −0.12.",
      "**Describing strength.** Different fields use different words for the same r, so give the number. In a careful report: “r = 0.62 (n = 48); the scatterplot shows a roughly linear pattern with no dominant points.”",
      "**Correlation and cause.** A strong r may come from a third variable, reverse causation or chance; see {{correlation-causation}}.",
      "**Check the plot for:** a curve (r understates it), clusters (two groups can create a correlation that doesn’t exist within either), and one or two points far from the rest."
     ],
     pro:[
      "**Anscombe’s values.** In all four sets: mean of x = 9, variance of x = 11, mean of y ≈ 7.50, variance of y ≈ 4.12–4.13, r ≈ 0.816, and least-squares line y ≈ 3.00 + 0.500x. The data ship with R as `datasets::anscombe` (from Anscombe, 1973, *The American Statistician* 27(1)).",
      "**r and regression.** The slope of the least-squares line is r × (SD of y ÷ SD of x), and r² is the share of the variance in y accounted for by the linear fit (simple linear regression, Unit 6 of this track).",
      "**Alternatives.** Spearman’s rank correlation (Pearson’s r computed on ranks) measures monotonic relationships and resists outliers; Kendall’s tau is another rank-based measure.",
      "**Ecological correlations.** Correlations between group averages (countries, towns) are usually much stronger than between individuals, and don’t describe individuals (the ecological fallacy).",
      "**Significance versus size.** With very large n, tiny r values become “statistically significant” (OpenStax Section 12.4 tests r); with small n, large r values can arise by chance. Report r with n and, ideally, a confidence interval.",
      "**Range restriction.** Studies that only include a narrow slice of people (for example, admitted students only) usually find weaker correlations than in the full population, which can make a useful predictor look useless."
     ]},
    related:["correlation-causation","z-scores","linear-regression","chart-types"],
    read:[{book:"ostat", where:"Chapter 12, Sections 12.2 “Scatter Plots” and 12.3 “The Regression Equation”"},{book:"openintro", where:"Chapter 8, Section 8.1.4 “Describing linear relationships with correlation”"}],
    sources:[{t:"OpenStax Introductory Statistics 2e, 12.3 The Regression Equation", url:"https://openstax.org/books/introductory-statistics-2e/pages/12-3-the-regression-equation"},{t:"R source: the anscombe data set (datasets package)", url:"https://github.com/wch/r-source/blob/trunk/src/library/datasets/data/anscombe.R"}], checked:"2026-11"}
  ],
  terms:[
   {id:"distribution", term:"Distribution", def:"The pattern a set of values makes: which values occur and how often. Shown with dot plots, histograms or boxplots.", codex:"distributions"},
   {id:"skewness", term:"Skewness", def:"Lack of symmetry in a distribution. Skewed right means a long tail toward high values; skewed left, a long tail toward low values.", codex:"distributions"},
   {id:"bimodal", term:"Bimodal", def:"Having two clear peaks. Often a sign that two different groups are mixed together in the data.", codex:"distributions"},
   {id:"bin-width", term:"Bin width", def:"The width of each interval a histogram counts values in. Changing it can make the same data look quite different.", codex:"distributions"},
   {id:"normal-distribution", term:"Normal distribution", def:"A symmetric, bell-shaped model described by its mean and standard deviation. About 68%, 95% and 99.7% of values lie within 1, 2 and 3 SDs of the mean.", codex:"distributions"},
   {id:"outlier", term:"Outlier", def:"A value far from the rest of the data. It may be an error, a case from a different group, or real and important, so investigate before acting.", codex:"boxplots"},
   {id:"range-stat", term:"Range", def:"The largest value minus the smallest. Easy to calculate, but depends entirely on the two most extreme values.", codex:"centre-spread"},
   {id:"robust-statistic", term:"Robust statistic", def:"A summary that changes little when a few values are extreme or wrong, such as the median or the interquartile range.", codex:"centre-spread"},
   {id:"interquartile-range", term:"Interquartile range (IQR)", def:"Q3 minus Q1: the width of the middle half of the data. A robust measure of spread.", codex:"centre-spread"},
   {id:"percentile", term:"Percentile", def:"A value with about a given percentage of the data at or below it. The 90th percentile has about 90% of values at or below it.", codex:"percentiles-quartiles"},
   {id:"percentile-rank", term:"Percentile rank", def:"For a given value, the percentage of the data at or below it. The reverse question to finding a percentile.", codex:"percentiles-quartiles"},
   {id:"quartile", term:"Quartile", def:"One of three values that split sorted data into quarters: Q1 (25th percentile), the median and Q3 (75th percentile). Methods differ slightly between apps.", codex:"percentiles-quartiles"},
   {id:"five-number-summary", term:"Five-number summary", def:"The minimum, Q1, median, Q3 and maximum of a data set: the numbers a boxplot draws.", codex:"boxplots"},
   {id:"boxplot", term:"Boxplot", def:"A chart of the five-number summary: a box from Q1 to Q3 with a median line, whiskers, and points for potential outliers beyond 1.5 × IQR.", codex:"boxplots"},
   {id:"z-score", term:"z-score", def:"How many standard deviations a value lies above (positive) or below (negative) the mean: (value − mean) ÷ SD.", codex:"z-scores"},
   {id:"pearson-r", term:"Pearson’s r", def:"The correlation coefficient: a number from −1 to +1 measuring the direction and strength of a straight-line relationship between two numeric variables.", codex:"correlation-coefficient"},
   {id:"scatter-pattern", term:"Scatterplot pattern", def:"How the points in a scatterplot are arranged, described by direction, form (straight or curved), strength and unusual points.", codex:"correlation-coefficient"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u5-q01", lesson:"t3u5-l1", level:1, q:"What does a histogram show?", options:[
     {t:"How many values fall into each of a series of equal-width intervals on a number line", ok:true, why:"A histogram counts values in bins and draws touching bars, so you see the shape of a numeric distribution."},
     {t:"How separate categories compare, with gaps between the bars", why:"That’s a bar chart. Histogram bars sit on a continuous number line in a fixed order."},
     {t:"How one variable changes over time", why:"That’s usually a line chart (a time series)."},
     {t:"How two numeric variables relate", why:"That’s a scatterplot."}
   ]},
   {id:"t3u5-q02", lesson:"t3u5-l1", level:1, q:"A distribution has its peak on the left and a long tail stretching to the right. What is it called?", options:[
     {t:"Skewed right", ok:true, why:"Skew is named after the long tail. A tail to the right means skewed right (positive skew)."},
     {t:"Skewed left", why:"The peak is on the left, but skew is named after the tail, which is on the right."},
     {t:"Symmetric", why:"A symmetric distribution has matching halves, not a long tail on one side."},
     {t:"Bimodal", why:"Bimodal means two peaks. This has one peak and a long tail."}
   ]},
   {id:"t3u5-q03", lesson:"t3u5-l1", level:2, q:"Which variable is most likely to be skewed right?", options:[
     {t:"The time customers spend on hold before a help line answers", ok:true, why:"Times can’t be negative, most waits are short, and a few are very long: a classic long right tail."},
     {t:"Scores on a very easy quiz", why:"Most people score near the maximum, with a few low scores: that’s a tail to the left."},
     {t:"Heights of adult men in one country", why:"Heights of one sex are roughly symmetric."},
     {t:"The last digit of randomly chosen phone numbers", why:"Each digit 0 to 9 is about equally likely, giving a flat (uniform) shape, not a skewed one."}
   ]},
   {id:"t3u5-q04", lesson:"t3u5-l1", level:2, q:"In a right-skewed distribution, which is usually true?", options:[
     {t:"The mean is greater than the median.", ok:true, why:"The long right tail pulls the mean up; the median depends only on order and stays nearer the bulk of the data. OpenStax notes this is usual, not guaranteed."},
     {t:"The median is greater than the mean.", why:"That’s the usual pattern for left skew."},
     {t:"The mean and median are always exactly equal.", why:"They’re roughly equal for symmetric data. Skew separates them."},
     {t:"The mode is always the largest of the three.", why:"In right-skewed data the mode is usually the smallest, sitting at the peak on the left."}
   ]},
   {id:"t3u5-q05", lesson:"t3u5-l1", level:3, q:"Lucía’s histogram of the ages of everyone attending a community festival shows two clear peaks, one around age 8 and one around age 38. What is the most likely explanation?", options:[
     {t:"The crowd is a mix of two groups, such as children and their parents.", ok:true, why:"Two peaks often mean two populations mixed together. Here children and the adults who bring them are a natural explanation, worth checking."},
     {t:"The ages must have been entered wrongly.", why:"Two peaks are a common, real pattern. They’re a clue about the groups present, not a sign of error."},
     {t:"The distribution is skewed right.", why:"Skew describes one peak with a long tail. Two separate peaks make it bimodal."},
     {t:"The mean age, about 23, describes a typical attendee well.", why:"With two peaks, very few people may be near the mean. Describe both groups instead."}
   ]},
   {id:"t3u5-q06", lesson:"t3u5-l1", level:2, q:"Exam scores are roughly normal with mean 60 and SD 12. About what percentage of students scored between 48 and 72?", options:[
     {t:"About 68%", ok:true, why:"48 and 72 are 1 SD below and above the mean (60 ± 12), and about 68% of roughly normal data lie within 1 SD."},
     {t:"About 95%", why:"95% is within 2 SD, here 36 to 84."},
     {t:"About 50%", why:"50% of values lie below the mean. The interval from 48 to 72 covers ±1 SD, about 68%."},
     {t:"About 99.7%", why:"99.7% is within 3 SD, here 24 to 96."}
   ]},
   {id:"t3u5-q07", lesson:"t3u5-l1", level:3, q:"Mei shows her manager a histogram of delivery times with bins one hour wide; almost every delivery falls in a single bar. Her manager wants to know whether some deliveries are much slower than others. What should Mei try?", options:[
     {t:"Narrower bins, such as 10 minutes, to reveal the shape and any long tail", ok:true, why:"Very wide bins squash the data into one bar and hide the shape. Trying narrower widths shows the detail the manager is asking about."},
     {t:"Even wider bins, so the chart looks simpler", why:"Wider bins hide even more. The question is about differences within the data."},
     {t:"Unequal bins, with narrow ones only where the slow deliveries are", why:"Unequal bin widths distort a histogram’s bar heights and can mislead. Keep widths equal."},
     {t:"A pie chart of the bins instead", why:"A pie chart loses the order of the number line. A histogram with a sensible bin width is the right tool."}
   ]},
   {id:"t3u5-q08", lesson:"t3u5-l1", level:3, q:"In a survey of household sizes, one entry is 47 people; every other entry is between 1 and 9. What is the best first step?", options:[
     {t:"Check the original response or source: it may be a typing error, or perhaps a shared residence that belongs in a separate category.", ok:true, why:"An outlier is a question. Checking tells you whether to correct it, analyse it separately, or keep it and report it."},
     {t:"Delete it without comment, because it would distort the mean.", why:"Silent deletion hides a decision from readers, and the value might be real."},
     {t:"Replace it with the median household size.", why:"Inventing a value hides the problem. Only correct it when you can confirm the right value."},
     {t:"Keep it and report only the mean.", why:"If it’s an error, the mean will be wrong; even if it’s real, the median would describe a typical household better."}
   ]},
   {id:"t3u5-q09", lesson:"t3u5-l1", level:1, q:"What does a dot plot show that a single average can’t?", options:[
     {t:"Every individual value, so you can see clusters, gaps, spread and unusual values", ok:true, why:"A dot plot keeps all the data, so the whole distribution is visible."},
     {t:"The exact mean, more accurately than a calculation", why:"A dot plot doesn’t calculate anything; the mean comes from a formula."},
     {t:"Which variable causes which", why:"A dot plot shows one variable’s distribution. It can’t show cause."},
     {t:"How values change over time", why:"Dot plots usually ignore order in time. A line chart shows change over time."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t3u5-q10", lesson:"t3u5-l2", level:1, q:"What is the range of 7, 3, 12, 9, 5?", options:[
     {t:"9", ok:true, why:"Largest minus smallest: 12 − 3 = 9."},
     {t:"12", why:"12 is the largest value. Subtract the smallest (3)."},
     {t:"7", why:"7 is the median. The range is 12 − 3."},
     {t:"36", why:"36 is the total. The range is the largest minus the smallest."}
   ]},
   {id:"t3u5-q11", lesson:"t3u5-l2", level:2, q:"Every value in a data set is converted from metres to centimetres (multiplied by 100). What happens to the standard deviation?", options:[
     {t:"It is multiplied by 100.", ok:true, why:"Multiplying every value by a constant multiplies every distance from the mean by it, so the SD scales by 100 too."},
     {t:"It stays the same.", why:"That happens when you add a constant. Multiplying stretches the distances between values."},
     {t:"It increases by 100.", why:"The SD is multiplied, not increased by a fixed amount."},
     {t:"It is multiplied by 10,000.", why:"That’s what happens to the variance (the square of the SD). The SD itself is multiplied by 100."}
   ]},
   {id:"t3u5-q12", lesson:"t3u5-l2", level:1, q:"Which pair of summaries is most robust to a few extreme values?", options:[
     {t:"Median and interquartile range", ok:true, why:"Both depend on the order of values, not their sizes, so extreme values barely affect them."},
     {t:"Mean and standard deviation", why:"Both use every value’s size, so one extreme value can move them a lot."},
     {t:"Mean and range", why:"Both are sensitive: the range depends entirely on the two most extreme values."},
     {t:"Range and standard deviation", why:"Both are strongly affected by extreme values."}
   ]},
   {id:"t3u5-q13", lesson:"t3u5-l2", level:2, q:"What is the sample standard deviation of 4, 4, 4, 4, 4?", options:[
     {t:"0", ok:true, why:"Every value equals the mean, so every deviation is 0 and the SD is 0. That’s the only way an SD can be 0."},
     {t:"4", why:"4 is the mean. The SD measures spread around it, and there is none."},
     {t:"1", why:"There is no spread at all, so the SD can’t be 1."},
     {t:"It can’t be calculated.", why:"It can: all deviations are 0, so the SD is 0. (It can’t be calculated for a single value.)"}
   ]},
   {id:"t3u5-q14", lesson:"t3u5-l2", level:3, q:"A housing report gives the mean house price in a city with its standard deviation. A few mansions sold that year for many times the typical price. What would describe a typical house better?", options:[
     {t:"The median price with the interquartile range", ok:true, why:"Prices are right-skewed and the mansions inflate the mean and SD. The median and IQR describe the typical house and the middle half of the market."},
     {t:"The mean with a larger number of decimal places", why:"More decimals don’t fix the problem: the mean is pulled up by the mansions."},
     {t:"The range", why:"The range would be set by the cheapest house and the most expensive mansion, which is even more affected by extremes."},
     {t:"The mode price", why:"With prices that are nearly all different, the mode is rarely meaningful."}
   ]},
   {id:"t3u5-q15", lesson:"t3u5-l2", level:3, q:"Kenji says: “Our survey had 50 people last year and 500 this year, so the standard deviation of ages should be much smaller this year.” Is he right?", options:[
     {t:"No. The SD describes how varied individuals are; it doesn’t shrink just because more people are measured. The standard error of the mean does shrink.", ok:true, why:"More data estimate the spread more precisely, but the population is just as varied. The uncertainty in the mean, SD ÷ √n, is what gets smaller."},
     {t:"Yes. The SD always falls as the sample size grows.", why:"That confuses the SD with the standard error. The SD of ages stays about the same if the people are similar."},
     {t:"Yes, because dividing by n − 1 makes a bigger difference with large samples.", why:"The n − 1 adjustment matters more for small samples, and it’s a small correction either way."},
     {t:"No, because the SD always grows with sample size.", why:"The SD doesn’t systematically grow either. (The range does tend to grow with more data.)"}
   ]},
   {id:"t3u5-q16", lesson:"t3u5-l2", level:2, q:"Ten people report the hours they spent on a hobby last week. The mean is 6 hours and the SD is 9 hours. What does this suggest?", options:[
     {t:"The data are probably strongly skewed right, with a few people giving many hours.", ok:true, why:"Hours can’t be negative, yet mean − SD is −3. An SD larger than the mean for data with a floor at zero is a sign of a long right tail."},
     {t:"There’s an error, because an SD can’t be bigger than the mean.", why:"It can. The SD measures spread, which can exceed the centre when values are very uneven."},
     {t:"Most people spent between −3 and 15 hours.", why:"Negative hours are impossible. Mean ± SD is the wrong summary for strongly skewed data."},
     {t:"The data are roughly normal.", why:"Normal data with mean 6 and SD 9 would include many negative values, which can’t happen here."}
   ]},
   {id:"t3u5-q17", lesson:"t3u5-l2", level:1, q:"When should you use the population standard deviation (dividing by n, STDEV.P) rather than the sample SD (dividing by n − 1, STDEV.S)?", options:[
     {t:"When your data include every member of the group you want to describe", ok:true, why:"If you have the whole population, there’s nothing to estimate, so you divide by n. For a sample used to describe a bigger group, divide by n − 1."},
     {t:"Whenever the data are skewed", why:"Skew affects which summary is suitable, not whether to divide by n or n − 1."},
     {t:"Whenever you have more than 30 values", why:"The choice depends on whether you have a sample or the whole population, not on a size cut-off."},
     {t:"Never: the population SD is always wrong.", why:"It’s correct when you really have the whole population, for example every employee of a small firm."}
   ]},
   {id:"t3u5-q18", lesson:"t3u5-l2", level:2, q:"Before one extreme value is removed, a data set has range 37 and IQR 7. After removing it, which pair of results is most plausible?", options:[
     {t:"Range 18, IQR 6", ok:true, why:"The range depends on the extreme value, so it drops sharply; the IQR depends on the middle half and barely moves. (These are the clinic figures.)"},
     {t:"Range 37, IQR 3", why:"Removing the most extreme value must change the range, and the IQR is robust, so it shouldn’t halve."},
     {t:"Range 36, IQR 18", why:"The IQR can’t jump like that when one extreme value is removed; and the range would fall by more than one."},
     {t:"Range and IQR both unchanged", why:"The range depends directly on the most extreme value, so it changes."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t3u5-q19", lesson:"t3u5-l3", level:1, q:"Which percentile is the same as the median?", options:[
     {t:"The 50th percentile", ok:true, why:"Half the data are at or below the median, so it’s the 50th percentile (and Q2)."},
     {t:"The 25th percentile", why:"That’s Q1, the first quartile."},
     {t:"The 75th percentile", why:"That’s Q3, the third quartile."},
     {t:"The 100th percentile", why:"That’s the maximum."}
   ]},
   {id:"t3u5-q20", lesson:"t3u5-l3", level:2, q:"Using the textbook method, what are Q1 and Q3 of 2, 4, 5, 7, 9, 11, 12, 15?", options:[
     {t:"Q1 = 4.5, Q3 = 11.5", ok:true, why:"8 values split into halves 2, 4, 5, 7 and 9, 11, 12, 15. Their medians are (4 + 5) ÷ 2 = 4.5 and (11 + 12) ÷ 2 = 11.5."},
     {t:"Q1 = 4, Q3 = 12", why:"Each half has four values, so its median is the average of the middle two: 4.5 and 11.5."},
     {t:"Q1 = 5, Q3 = 11", why:"These are single values from each half. Average the middle two of each half."},
     {t:"Q1 = 7, Q3 = 9", why:"7 and 9 are the middle two values of the whole set; their average, 8, is the median."}
   ]},
   {id:"t3u5-q21", lesson:"t3u5-l3", level:2, q:"Q1 = 12 and Q3 = 20. Which value would a 1.5 × IQR boxplot draw as a separate point?", options:[
     {t:"33", ok:true, why:"IQR = 8, 1.5 × 8 = 12, so the fences are 0 and 32. 33 is above the upper fence."},
     {t:"31", why:"31 is below the upper fence of 32, so the whisker would reach it."},
     {t:"1", why:"The lower fence is 12 − 12 = 0, so 1 is inside it."},
     {t:"28", why:"28 is well inside the fences (0 to 32)."}
   ]},
   {id:"t3u5-q22", lesson:"t3u5-l3", level:3, q:"Ana and Tomás calculate Q1 for the same 8 values. Ana uses QUARTILE.INC and gets 62.25; Tomás uses QUARTILE.EXC and gets 60.75. What should they conclude?", options:[
     {t:"Both are correct for their method; they should pick one method, state it, and use it consistently.", ok:true, why:"The .INC and .EXC functions place percentiles differently (positions 1 + p(n − 1) and p(n + 1)). Small data sets show the difference clearly."},
     {t:"One of them typed the data wrongly.", why:"Same data, different methods: the functions are designed to give different answers here."},
     {t:"QUARTILE.EXC is broken and should never be used.", why:"It’s a standard method (Hyndman and Fan’s type 6, the default in NIST’s statistics handbook). It just refuses percentiles too close to the ends of small data sets."},
     {t:"They should average the two and call that the true quartile.", why:"There’s no single “true” sample quartile. Averaging creates yet another method; better to state the one you used."}
   ]},
   {id:"t3u5-q23", lesson:"t3u5-l3", level:2, q:"In a boxplot that marks outliers, where does the upper whisker end?", options:[
     {t:"At the largest data value that is still inside the upper fence (Q3 + 1.5 × IQR)", ok:true, why:"The whisker reaches the most extreme value within the fence; values beyond it are drawn as points."},
     {t:"Exactly at the upper fence, Q3 + 1.5 × IQR", why:"The fence is usually not drawn. The whisker stops at an actual data value inside it."},
     {t:"Always at the maximum", why:"That’s true only for the simpler style without outlier points, or when no value is beyond the fence."},
     {t:"At the 90th percentile", why:"Some charts use other conventions, but the standard (Tukey-style) boxplot uses the fences."}
   ]},
   {id:"t3u5-q24", lesson:"t3u5-l3", level:3, q:"Fatima analyses 20,000 sensor readings that look roughly normal. Her boxplot flags about 140 points as outliers. What’s the most sensible interpretation?", options:[
     {t:"That’s about what the 1.5 × IQR rule flags by chance in large normal data (about 0.7%), so most are probably ordinary; investigate any that are far beyond the fences.", ok:true, why:"For normal data, the fences sit near ±2.7 SD and catch about 0.7% of values: 0.007 × 20,000 = 140."},
     {t:"All 140 are errors and should be deleted.", why:"The rule is a screen, not a verdict, and in large data it flags many genuine values."},
     {t:"The data can’t be normal, because normal data have no outliers.", why:"Normal data have tails; some values will always fall beyond the fences."},
     {t:"She should switch to a method that flags nothing.", why:"Hiding flags doesn’t help. Understanding what the flags mean does."}
   ]},
   {id:"t3u5-q25", lesson:"t3u5-l3", level:1, q:"Which five values make up the five-number summary?", options:[
     {t:"Minimum, Q1, median, Q3, maximum", ok:true, why:"These are the five values a boxplot is built from."},
     {t:"Mean, median, mode, range, SD", why:"These are different summaries of centre and spread, not the five-number summary."},
     {t:"Q1, Q2, Q3, IQR, mean", why:"The IQR and mean aren’t part of it; the minimum and maximum are."},
     {t:"The five most common values", why:"The five-number summary is about positions in sorted data, not frequency."}
   ]},
   {id:"t3u5-q26", lesson:"t3u5-l3", level:3, q:"Sione is told a reaction time is “at the 30th percentile” and that lower times are better. What does this mean?", options:[
     {t:"About 30% of people were as fast or faster, so this time is quicker than about 70% of the group.", ok:true, why:"At the 30th percentile, about 30% of times are at or below it. Since lower is better, about 70% were slower."},
     {t:"The time was 30% slower than average.", why:"A percentile is a position in the group, not a percentage difference from the mean."},
     {t:"The person was slower than about 70% of the group.", why:"Most of the group (about 70%) had higher, slower times."},
     {t:"It was 30 milliseconds.", why:"A percentile is a rank, not the measurement itself."}
   ]},
   {id:"t3u5-q27", lesson:"t3u5-l3", level:2, q:"PERCENTILE.EXC(range, 0.95) returns #NUM! for a list of 10 values. Why?", options:[
     {t:"The exclusive method needs position 0.95 × 11 = 10.45, which is beyond the last value.", ok:true, why:"PERCENTILE.EXC uses position p(n + 1). Positions outside 1 to n can’t be interpolated, so it returns an error."},
     {t:"The data must contain text.", why:"Text is ignored or causes other errors; the issue here is the position."},
     {t:"Percentiles above 90 can never be calculated.", why:"PERCENTILE.INC would return a value. The exclusive method just needs more data for extreme percentiles."},
     {t:"The percentile must be written as 95, not 0.95.", why:"The spreadsheet functions take a fraction from 0 to 1, so 0.95 is correct."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t3u5-q28", lesson:"t3u5-l4", level:1, q:"What does a z-score of −2 mean?", options:[
     {t:"The value is 2 standard deviations below the mean.", ok:true, why:"The sign gives the side (negative is below) and the size gives the distance in SDs."},
     {t:"The value is 2 units below the mean.", why:"z-scores measure distance in standard deviations, not in the original units."},
     {t:"The value is negative.", why:"The value can be positive; only its distance from the mean is negative."},
     {t:"The value is 2% below the mean.", why:"z-scores aren’t percentages."}
   ]},
   {id:"t3u5-q29", lesson:"t3u5-l4", level:2, q:"Times for a puzzle have mean 120 seconds and SD 15 seconds. What is the z-score of a time of 90 seconds?", options:[
     {t:"−2", ok:true, why:"(90 − 120) ÷ 15 = −30 ÷ 15 = −2. It’s 2 SDs below (faster than) the mean."},
     {t:"2", why:"90 is below the mean, so the z-score is negative."},
     {t:"−30", why:"−30 is the difference in seconds. Divide by the SD."},
     {t:"6", why:"6 is 90 ÷ 15. Subtract the mean first."}
   ]},
   {id:"t3u5-q30", lesson:"t3u5-l4", level:2, q:"Test A has mean 500 and SD 100; Test B has mean 25 and SD 5. Priya scored 650 on A and 33 on B. On which did she do better relative to other test-takers?", options:[
     {t:"Test B: z = 1.6, compared with z = 1.5 on Test A", ok:true, why:"A: (650 − 500) ÷ 100 = 1.5. B: (33 − 25) ÷ 5 = 1.6. Slightly higher on B."},
     {t:"Test A, because 650 is a much bigger number", why:"Raw scores on different scales can’t be compared directly."},
     {t:"Test A: z = 1.6, compared with z = 1.5 on Test B", why:"The calculations are swapped. A gives 150 ÷ 100 = 1.5 and B gives 8 ÷ 5 = 1.6."},
     {t:"Exactly equal on both", why:"The z-scores are close (1.5 and 1.6) but not equal."}
   ]},
   {id:"t3u5-q31", lesson:"t3u5-l4", level:3, q:"Dmitri flags outliers in a sample of 8 measurements by looking for |z| > 3, and finds none, though one value looks like a mistake. What’s the best advice?", options:[
     {t:"Use the 1.5 × IQR rule or a plot instead: in small samples an extreme value inflates the SD, and with 8 values no |z| can exceed about 2.5.", ok:true, why:"With the sample SD, the maximum possible |z| is (n − 1) ÷ √n = 7 ÷ √8 ≈ 2.47 for n = 8, so the rule can’t flag anything. Robust rules don’t have this problem."},
     {t:"Accept the result: if |z| < 3, the value is fine.", why:"The z-score rule can’t work here, so its silence proves nothing."},
     {t:"Lower the cut-off to |z| > 0.5 so more values are flagged.", why:"That would flag ordinary values too. A robust method is the better fix."},
     {t:"Use the population SD, which solves the problem.", why:"It raises the maximum only slightly (to √7 ≈ 2.65 for n = 8), so a cut-off of 3 still can’t be reached."}
   ]},
   {id:"t3u5-q32", lesson:"t3u5-l4", level:2, q:"Weights in a group have mean 70 kg and SD 12 kg. What weight has z = 0.5?", options:[
     {t:"76 kg", ok:true, why:"value = mean + z × SD = 70 + 0.5 × 12 = 76 kg."},
     {t:"70.5 kg", why:"That adds 0.5 kg, not half a standard deviation."},
     {t:"64 kg", why:"64 is half an SD below the mean; z = 0.5 is above it."},
     {t:"82 kg", why:"82 is one full SD above the mean (z = 1)."}
   ]},
   {id:"t3u5-q33", lesson:"t3u5-l4", level:3, q:"Two clinics report waiting times. Clinic North: median 12 minutes, IQR 6, mean 18, SD 20 (a few very long waits). Clinic South: median 15, IQR 7, mean 15.5, SD 5. Which comparison is fairest?", options:[
     {t:"Typical waits are shorter at North (median 12 versus 15), but North has some very long waits that South doesn’t.", ok:true, why:"North’s mean and SD are inflated by a long tail, so medians compare typical waits fairly, and the tail is worth reporting separately."},
     {t:"South is faster, because its mean is lower.", why:"North’s mean is pulled up by a few long waits. The typical (median) wait is shorter at North."},
     {t:"North is four times as variable, because its SD is four times larger.", why:"The SD is dominated by a few long waits. The IQRs (6 and 7) show the middle halves are similarly spread."},
     {t:"The clinics can’t be compared because they have different shapes.", why:"Different shapes are exactly why you compare medians and IQRs and describe the tail."}
   ]},
   {id:"t3u5-q34", lesson:"t3u5-l4", level:3, q:"A report finds that pupils at schools with breakfast clubs score higher, on average, than pupils at schools without. What’s the most careful conclusion from this comparison alone?", options:[
     {t:"The groups differ, but other differences between the schools (such as funding or the pupils’ backgrounds) could explain it.", ok:true, why:"A group comparison describes a difference; confounders could drive both breakfast clubs and scores. Showing cause needs a design that rules them out."},
     {t:"Breakfast clubs raise test scores.", why:"That’s a causal claim the comparison can’t support on its own."},
     {t:"Breakfast clubs make no difference.", why:"The data don’t show that either; they show a difference whose cause is unknown."},
     {t:"The difference must be due to chance.", why:"It might partly be chance, but that needs an inferential test; and chance isn’t the only alternative to cause."}
   ]},
   {id:"t3u5-q35", lesson:"t3u5-l4", level:2, q:"Why should you put side-by-side boxplots on the same scale?", options:[
     {t:"So that differences in position and length reflect real differences in the data, not different axes", ok:true, why:"Comparisons by eye only work when both groups are drawn against one shared axis."},
     {t:"Because boxplot software requires it", why:"Software can draw separate axes; the point is that separate axes make comparisons misleading."},
     {t:"So both boxes are the same size", why:"The boxes should differ if the data differ. A shared scale lets you see that."},
     {t:"To hide outliers", why:"A shared scale doesn’t hide anything; it makes differences visible and honest."}
   ]},
   {id:"t3u5-q36", lesson:"t3u5-l4", level:1, q:"In the formula `=(A2-$D$1)/$D$2`, filled down a column to calculate z-scores, why do D1 and D2 have $ signs?", options:[
     {t:"So every row keeps using the same mean (D1) and SD (D2) while A2 changes to A3, A4…", ok:true, why:"Absolute references stay fixed when a formula is filled down; the relative reference A2 moves to each new row."},
     {t:"To show that the values are in a currency", why:"In a formula, $ marks an absolute reference, not money."},
     {t:"To make the result positive", why:"$ has no effect on the sign of the result."},
     {t:"Because z-scores are always calculated in cell D", why:"The cells could be anywhere; the $ simply locks them."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t3u5-q37", lesson:"t3u5-l5", level:1, q:"What range of values can Pearson’s r take?", options:[
     {t:"From −1 to +1", ok:true, why:"r = ±1 means all points lie exactly on a straight line; 0 means no straight-line pattern."},
     {t:"From 0 to 1", why:"r can be negative, for relationships where one variable falls as the other rises."},
     {t:"From 0 to 100", why:"r isn’t a percentage."},
     {t:"Any number", why:"r is bounded: it can never be below −1 or above +1."}
   ]},
   {id:"t3u5-q38", lesson:"t3u5-l5", level:2, q:"For 6 cases, the sum of the products of the x and y z-scores is −4.0. What is r?", options:[
     {t:"−0.8", ok:true, why:"r = sum ÷ (n − 1) = −4.0 ÷ 5 = −0.8: a strong negative linear relationship."},
     {t:"−0.67", why:"That divides by n = 6. Divide by n − 1 = 5."},
     {t:"0.8", why:"The sum is negative, so r is negative."},
     {t:"−4.0", why:"That’s the sum. r can’t be below −1."}
   ]},
   {id:"t3u5-q39", lesson:"t3u5-l5", level:3, q:"Hana finds r = 0.05 between daily temperature and visitors to an outdoor pool across a whole year. Her scatterplot shows visitors rising steeply with temperature up to about 30 °C, then falling on the hottest days. What should she report?", options:[
     {t:"A strong curved relationship that r doesn’t capture, shown with the scatterplot", ok:true, why:"r measures only straight-line patterns. The plot shows a clear rise-then-fall curve, which is the real finding."},
     {t:"No relationship, because r is close to 0", why:"r near 0 means no straight-line pattern, not no relationship. The plot shows a strong curve."},
     {t:"A weak positive relationship", why:"That describes r, not the data. The relationship is strong but not linear."},
     {t:"That temperature causes visitor numbers", why:"Even with a clear pattern, a correlation or curve alone doesn’t establish cause (for example, school holidays fall in warm months)."}
   ]},
   {id:"t3u5-q40", lesson:"t3u5-l5", level:2, q:"Which change leaves r exactly the same?", options:[
     {t:"Converting x from kilograms to pounds", ok:true, why:"r has no units: changing units (multiplying by a positive constant, or adding one) doesn’t change it."},
     {t:"Adding one point far from the others", why:"A single unusual point can change r dramatically."},
     {t:"Keeping only cases with x between 3 and 4", why:"Restricting the range usually makes r smaller in size."},
     {t:"Replacing one value with a wrongly typed one", why:"Changing the data changes r, sometimes a lot."}
   ]},
   {id:"t3u5-q41", lesson:"t3u5-l5", level:1, q:"What is the main lesson of Anscombe’s quartet?", options:[
     {t:"Data sets with the same summary statistics, including r, can look completely different, so always plot the data.", ok:true, why:"Anscombe’s four sets share means, variances, r ≈ 0.82 and the same line, but their scatterplots tell four different stories."},
     {t:"r is always wrong.", why:"r is calculated correctly for all four. It just can’t describe curves, outliers or single dominant points."},
     {t:"Small data sets can’t have high correlations.", why:"The sets have only 11 points each and r ≈ 0.82."},
     {t:"Correlation proves causation when r is above 0.8.", why:"No value of r proves causation."}
   ]},
   {id:"t3u5-q42", lesson:"t3u5-l5", level:3, q:"Across 50 countries, a blog reports r = 0.7 between the number of public libraries per person and life expectancy. What’s the best response?", options:[
     {t:"It’s a correlation between country averages; national wealth could drive both, so it doesn’t show that libraries lengthen anyone’s life.", ok:true, why:"A third variable (national wealth) is a plausible cause of both, and correlations between group averages don’t describe individuals."},
     {t:"Using a library more will make you live longer.", why:"That turns a group-level correlation into an individual causal claim, which the data can’t support."},
     {t:"r = 0.7 means 70% of life expectancy is explained by libraries.", why:"r isn’t a percentage, and correlation isn’t explanation."},
     {t:"With 50 countries the correlation must be a coincidence.", why:"It might not be chance at all; a shared cause is a likelier explanation. Chance is only one possibility."}
   ]},
   {id:"t3u5-q43", lesson:"t3u5-l5", level:2, q:"Adding a single point to six well-behaved points changes r from 0.95 to −0.12. What should a report do?", options:[
     {t:"Show the scatterplot, report r with and without the point, and explain what is known about it.", ok:true, why:"Readers need to see that one case dominates. Checking whether it’s an error or a real case decides how to treat it."},
     {t:"Report only r = −0.12, because all data must be included.", why:"Including it silently hides that one point controls the result."},
     {t:"Report only r = 0.95 and delete the point without comment.", why:"Silent deletion hides a decision; the point might be real and important."},
     {t:"Average the two values of r.", why:"An average of 0.95 and −0.12 means nothing; it doesn’t describe either version of the data."}
   ]},
   {id:"t3u5-q44", lesson:"t3u5-l5", level:3, q:"In a study of 200 adults, people who walk more have lower blood pressure (r = −0.4). Tomás says this proves walking lowers blood pressure. What is the strongest objection?", options:[
     {t:"Other factors, such as age or overall health, could affect both, and people with health problems may walk less: the direction and cause are unclear.", ok:true, why:"A correlation can come from a third variable or reverse causation. Showing that walking lowers blood pressure needs an experiment or careful control of these factors."},
     {t:"A negative r means there is no relationship.", why:"Negative r means one variable tends to fall as the other rises: here a moderate relationship."},
     {t:"r = −0.4 is too small to mean anything.", why:"A moderate correlation in 200 people is worth attention; the problem is the causal claim, not the size."},
     {t:"r should be positive for a healthy relationship.", why:"The sign shows direction, not whether something is good or bad."}
   ]},
   {id:"t3u5-q45", lesson:"t3u5-l5", level:1, q:"When describing a scatterplot, what does “form” mean?", options:[
     {t:"Whether the pattern is roughly a straight line, a curve, or clusters", ok:true, why:"Form is the overall shape of the pattern; direction and strength are described separately."},
     {t:"Whether the trend goes up or down", why:"That’s direction."},
     {t:"How tightly the points follow the pattern", why:"That’s strength."},
     {t:"The colour and size of the dots", why:"That’s chart styling, not a property of the data."}
   ]}
  ]
});
