/* Track 3 · Unit 4 · Charts that tell the truth */
ICA.addUnit({
  id:"t3u4", track:"t3", n:4, title:"Charts that tell the truth", icon:"📈",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"How to choose a chart for the question, set axes and scales honestly (log scales included), use colour that everyone can read, spot and fix misleading charts, show uncertainty, and add titles, notes and alt text so a chart can be understood on its own.",
  goals:[
    "Choose a chart for the question, knowing why position and length are read more accurately than angle, area or colour",
    "Decide when an axis must start at zero, read and make log-scale charts, and avoid dual-axis traps",
    "Use colour for a clear purpose, with palettes and contrast that work for people with colour-vision deficiency",
    "Spot and fix misleading chart choices, and show uncertainty with clearly labelled error bars, ranges and frequency pictures",
    "Write statement titles, annotations, source notes and alt text, and choose a free tool that fits the job"
  ],
  read:[
    {book:"wilke", where:"Part I, Chapters 2–16 (“Visualizing data: Mapping data onto aesthetics” to “Visualizing uncertainty”) and Part II, Chapters 17–26 (“The principle of proportional ink” to “Don’t go 3D”)", note:"The main textbook for this unit. Each lesson names the exact chapters. The online edition has no code in it, so it reads well on a phone."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u4-l1", title:"Choosing a chart for the question", minutes:55,
   hook:{q:"Which do people judge most accurately: two bar lengths, two pie-slice angles, or two circle areas?", options:["The areas of two circles","The angles of two pie slices","The lengths of two bars that start from the same line","All three are judged equally well"], answer:2, reveal:"**Lengths (and positions) along a shared scale.** In William Cleveland and Robert McGill’s classic 1984 study, which combined their own experiments with earlier perception research, positions and lengths were judged most accurately, angles less well, and areas and shading worst. Later experiments broadly agree. That’s why the chart you pick matters: this lesson shows how to match the chart to the question, and when a pie chart is actually the right choice."},
   goals:[
     "Describe a chart as data mapped onto visual features, and say which features people read most accurately",
     "Choose between bars, dot plots, histograms, pies, stacked bars, scatterplots, line charts and small multiples for a stated question",
     "Decide when a pie chart works and when bars work better",
     "Try more than one bin width before trusting a histogram"
   ],
   learn:[
    {h:"A chart is a set of encodings", body:[
      {lead:"Every chart turns numbers into something you can see: a position, a length, an angle, an area or a colour. Choosing a chart means choosing which of those to use."},
      "Track 1’s spreadsheet unit gave a quick table for matching questions to charts ({{choosing-charts}}). This lesson explains why those matches work, so you can still choose well when the table runs out.",
      "This unit follows Claus Wilke’s free textbook, Fundamentals of Data Visualization. Wilke describes every chart as a set of **aesthetic mappings**: each variable in the data is mapped onto a visual feature. In a bar chart, the category is mapped to position along one axis and the amount to the bar’s length. In a scatterplot, two amounts are mapped to the horizontal and vertical positions of each dot.",
      "Variables come in kinds, and the kind limits which features make sense:",
      {list:[
        "**Quantitative**: numbers you can do arithmetic with, such as minutes, kilograms or euros.",
        "**Categorical**: groups with no order, such as towns, species or political parties.",
        "**Ordered categories**: groups with a natural order, such as small/medium/large, age bands or months."
      ]},
      "A shade going from light to dark suggests order, so it suits quantities and ordered categories. A set of clearly different hues suggests “different, but no order”, so it suits unordered groups.",
      {fig:'<svg viewBox="0 0 340 408"><text x="170" y="18" text-anchor="middle">The same two values, 4 and 5, encoded</text><text x="170" y="34" text-anchor="middle">five ways. Which pairs are easy to compare?</text><text x="10" y="58">1. Position on a shared scale</text><path class="d-ink" d="M40,82 L300,82" stroke-width="1.5"/><path class="d-ink" d="M40,82 L40,87" stroke-width="1"/><text class="s" x="40" y="100" text-anchor="middle">0</text><path class="d-ink" d="M83.3,82 L83.3,87" stroke-width="1"/><text class="s" x="83.3" y="100" text-anchor="middle">1</text><path class="d-ink" d="M126.7,82 L126.7,87" stroke-width="1"/><text class="s" x="126.7" y="100" text-anchor="middle">2</text><path class="d-ink" d="M170,82 L170,87" stroke-width="1"/><text class="s" x="170" y="100" text-anchor="middle">3</text><path class="d-ink" d="M213.3,82 L213.3,87" stroke-width="1"/><text class="s" x="213.3" y="100" text-anchor="middle">4</text><path class="d-ink" d="M256.7,82 L256.7,87" stroke-width="1"/><text class="s" x="256.7" y="100" text-anchor="middle">5</text><path class="d-ink" d="M300,82 L300,87" stroke-width="1"/><text class="s" x="300" y="100" text-anchor="middle">6</text><circle class="d-rose" cx="213.3" cy="72" r="7" stroke-width="2"/><circle class="d-lup" cx="256.7" cy="72" r="7" stroke-width="2"/><text x="10" y="128">2. Length (bars from zero)</text><rect class="d-rose" x="40" y="138" width="173.3" height="14" stroke-width="1.5"/><rect class="d-lup" x="40" y="158" width="216.7" height="14" stroke-width="1.5"/><text x="10" y="196">3. Angle (one pie)</text><path class="d-rose" d="M90,244 L90,206 A38,38 0 0 1 103,279.7 Z" stroke-width="2"/><path class="d-lup" d="M90,244 L103,279.7 A38,38 0 1 1 90,206 Z" stroke-width="2"/><text x="190" y="196">4. Area</text><rect class="d-rose" x="180" y="215.4" width="62.6" height="62.6" stroke-width="1.5"/><rect class="d-lup" x="252.6" y="208" width="70" height="70" stroke-width="1.5"/><text x="10" y="306">5. Shade (lightness)</text><path class="d-inkf" d="M40,316 h120 v26 h-120 Z" fill-opacity="0.4"/><path class="d-inkf" d="M180,316 h120 v26 h-120 Z" fill-opacity="0.5"/><text class="s" x="170" y="368" text-anchor="middle">Positions and lengths are judged most</text><text class="s" x="170" y="383" text-anchor="middle">accurately; areas and shades least.</text><text class="s" x="170" y="398" text-anchor="middle">Rows 1–4: rose = 4, purple = 5. Row 5: left = 4.</text></svg>', alt:"The values 4 and 5 shown five ways. 1: two dots on a shared axis from 0 to 6, at 4 and 5. 2: two bars from zero, 4 and 5 units long. 3: a pie split into slices of 160 and 200 degrees. 4: two squares whose areas are in the ratio 4 to 5. 5: two grey boxes at 40% and 50% strength, the left one standing for 4. In rows 1 to 4, rose stands for 4 and purple for 5. The note says positions and lengths are judged most accurately, areas and shades least.", cap:"The same comparison, 4 against 5, is easy to see in rows 1 and 2 and hard in rows 4 and 5."},
      "Our eyes don’t read every feature equally well. In Cleveland and McGill’s ranking (built from their experiments and earlier perception research), positions along a shared scale were judged most accurately, followed by lengths and angles; areas and shading came last. Wilke makes the same point: human perception judges distances better than areas.",
      {key:"Put the comparison that matters most on a shared position scale: bar ends, or dots along one axis."}
    ]},
    {h:"Amounts: bars, dot plots and heatmaps", body:[
      "When the question is “how much does each category have?”, the default is a [[bar-chart|bar chart]]. Wilke’s chapter on amounts adds three habits:",
      {list:[
        "**Sort unordered categories by value.** Alphabetical order makes a jagged skyline; sorted bars show the ranking instantly.",
        "**Keep natural orders.** Months, age bands and survey scales (disagree → agree) already have an order. Sorting them by value would scramble it.",
        "**Turn bars sideways for long labels.** Horizontal bars let names like “Community health centre” sit on one line instead of tilting."
      ]},
      "With two groupings at once, such as sales by product and by year, use **grouped bars** (side by side) to compare within each group, or **stacked bars** when the totals matter. In a stack only the bottom segment sits on the shared baseline; the others float at different heights, so they’re hard to compare. That’s the position-versus-length idea again.",
      "Bars must start at zero (Lesson 2 explains why). When every value is large and the values are close together, bars all look the same. Wilke’s example is life expectancy in the Americas, between 60 and 81 years. A [[dot-plot|dot plot]] places one dot per category on a shared axis, and that axis can start near the data.",
      "For a big grid of values, such as internet use in 20 countries over 23 years, a **heatmap** colours each cell. You lose precise values, but broad patterns jump out."
    ]},
    {h:"Distributions: histograms and their bins", body:[
      "A [[histogram-chart|histogram]] answers “how are the values spread out?”: where most of them sit, whether there are two humps, how long the tail is. It splits the number line into equal **bins** and draws a bar showing how many values fall in each. The bars touch, because the bins sit side by side on a continuous scale.",
      "The picture depends on the [[bin-width|bin width]], and the app chooses one for you. Wilke’s advice is blunt: always explore several bin widths. Too narrow and the histogram turns spiky; too wide and real features vanish.",
      {fig:'<svg viewBox="0 0 340 462"><text x="170" y="18" text-anchor="middle">Waiting times for 40 patients (invented)</text><text x="170" y="44" text-anchor="middle">5-minute bins</text><path class="d-soft" d="M48,194 L324,194" stroke-width="1"/><text class="s" x="42" y="198" text-anchor="end">0</text><path class="d-soft" d="M48,148 L324,148" stroke-width="1"/><text class="s" x="42" y="152" text-anchor="end">5</text><path class="d-soft" d="M48,102 L324,102" stroke-width="1"/><text class="s" x="42" y="106" text-anchor="end">10</text><path class="d-soft" d="M48,56 L324,56" stroke-width="1"/><text class="s" x="42" y="60" text-anchor="end">15</text><rect class="d-lup" x="48" y="166.4" width="23" height="27.6" stroke-width="1.5"/><rect class="d-lup" x="71" y="65.2" width="23" height="128.8" stroke-width="1.5"/><rect class="d-lup" x="94" y="148" width="23" height="46" stroke-width="1.5"/><rect class="d-lup" x="140" y="184.8" width="23" height="9.2" stroke-width="1.5"/><rect class="d-lup" x="163" y="148" width="23" height="46" stroke-width="1.5"/><rect class="d-lup" x="186" y="129.6" width="23" height="64.4" stroke-width="1.5"/><rect class="d-lup" x="209" y="166.4" width="23" height="27.6" stroke-width="1.5"/><rect class="d-lup" x="232" y="175.6" width="23" height="18.4" stroke-width="1.5"/><path class="d-ink" d="M48,52 L48,194 L324,194" fill="none" stroke-width="1.5"/><text class="s" x="48" y="209" text-anchor="middle">0</text><text class="s" x="94" y="209" text-anchor="middle">10</text><text class="s" x="140" y="209" text-anchor="middle">20</text><text class="s" x="186" y="209" text-anchor="middle">30</text><text class="s" x="232" y="209" text-anchor="middle">40</text><text class="s" x="278" y="209" text-anchor="middle">50</text><text class="s" x="324" y="209" text-anchor="middle">60</text><text x="170" y="246" text-anchor="middle">30-minute bins</text><path class="d-soft" d="M48,396 L324,396" stroke-width="1"/><text class="s" x="42" y="400" text-anchor="end">0</text><path class="d-soft" d="M48,327 L324,327" stroke-width="1"/><text class="s" x="42" y="331" text-anchor="end">15</text><path class="d-soft" d="M48,258 L324,258" stroke-width="1"/><text class="s" x="42" y="262" text-anchor="end">30</text><rect class="d-lup" x="48" y="267.2" width="138" height="128.8" stroke-width="1.5"/><rect class="d-lup" x="186" y="340.8" width="138" height="55.2" stroke-width="1.5"/><path class="d-ink" d="M48,254 L48,396 L324,396" fill="none" stroke-width="1.5"/><text class="s" x="48" y="411" text-anchor="middle">0</text><text class="s" x="94" y="411" text-anchor="middle">10</text><text class="s" x="140" y="411" text-anchor="middle">20</text><text class="s" x="186" y="411" text-anchor="middle">30</text><text class="s" x="232" y="411" text-anchor="middle">40</text><text class="s" x="278" y="411" text-anchor="middle">50</text><text class="s" x="324" y="411" text-anchor="middle">60</text><text class="s" x="186" y="430" text-anchor="middle">Minutes waited (count of patients up the side)</text><text class="s" x="170" y="452" text-anchor="middle">Narrow bins show two groups; wide bins hide them.</text></svg>', alt:"Two histograms of the same 40 invented waiting times. With 5-minute bins the counts are 3, 14, 5, 0, 1, 5, 7, 3 and 2 for the bins from 0–5 to 40–45 minutes, showing one group waiting 5 to 15 minutes and another waiting 25 to 45. With 30-minute bins there are only two bars, 28 and 12, and the two groups disappear.", cap:"Same 40 values, two bin widths, two different stories."},
      {ex:"Waiting times in minutes for 40 patients (invented): 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 11, 12, 13, 24, 26, 27, 28, 29, 29, 30, 31, 31, 32, 33, 33, 34, 35, 36, 38, 41, 44.\n\n5-minute bins (0–5, 5–10, … 40–45): 3, 14, 5, 0, 1, 5, 7, 3, 2. Two clusters: one group (22 people) waits under 15 minutes, mostly 5–15, and a second group (18 people) waits about 25–45 minutes.\n30-minute bins (0–30, 30–60): 28 and 12. The two groups merge into “most people wait under half an hour”.\n\nHere a value on a boundary, such as 5, counts in the bin above. Apps differ on this, so check yours.", label:"Worked example: one dataset, two histograms"},
      "The narrow bins raise a useful question (are booked patients and walk-ins treated differently?) that the wide bins hide. The chart can’t say why there are two groups; it tells you to go and ask.",
      "Unit 5 goes further ({{distributions}}), with [[boxplot|boxplots]] and other ways to compare [[distribution|distributions]]."
    ]},
    {h:"Proportions: when a pie works", body:[
      "A [[pie-chart|pie chart]] shows parts of one whole as slices. Many chart experts dismiss pies. Wilke takes a more careful view: no single chart for proportions is always best, and his comparison looks like this:",
      {table:[
        ["Good at…","Pie","Stacked bars","Side-by-side bars"],
        ["Showing parts of one whole","Yes","Yes","No"],
        ["Comparing the parts with each other","No","No","Yes"],
        ["Showing simple fractions (½, ⅓, ¼)","Yes","No","No"],
        ["A whole split into many parts","No","No","Yes"],
        ["Many wholes, or a time series","No","Yes","No"]
      ]},
      "His example is a parliament where two smaller parties together held a narrow majority. The pie shows “these two slices make more than half” at a glance; bars hide it.",
      {fig:'<svg viewBox="0 0 340 448"><text x="170" y="20" text-anchor="middle">A 30-seat council as a pie</text><path class="d-rose" d="M170,120 L170,38 A82,82 0 0 1 187,200.2 Z" stroke-width="2"/><text x="217.3" y="113" text-anchor="middle">A</text><text class="s" x="217.3" y="128" text-anchor="middle">14</text><path class="d-lup" d="M170,120 L187,200.2 A82,82 0 0 1 109.1,65.1 Z" stroke-width="2"/><text x="128.8" y="141.8" text-anchor="middle">B</text><text class="s" x="128.8" y="156.8" text-anchor="middle">12</text><path class="d-gold" d="M170,120 L109.1,65.1 A82,82 0 0 1 170,38 Z" stroke-width="2"/><text x="149.3" y="71.6" text-anchor="middle">C</text><text class="s" x="149.3" y="86.6" text-anchor="middle">4</text><path class="d-ink" d="M170,30 L170,212" stroke-width="1.5" stroke-dasharray="5 4"/><text class="s" x="170" y="228" text-anchor="middle">Dashed line = half (15 seats). B + C = 16:</text><text class="s" x="170" y="243" text-anchor="middle">together they pass it; A (14) does not.</text><text x="170" y="276" text-anchor="middle">The same seats as sorted bars</text><text x="72" y="307" text-anchor="end">Party A</text><rect class="d-rose" x="80" y="292" width="224" height="20" stroke-width="1.5"/><text x="298" y="307" text-anchor="end">14</text><text x="72" y="337" text-anchor="end">Party B</text><rect class="d-lup" x="80" y="322" width="192" height="20" stroke-width="1.5"/><text x="266" y="337" text-anchor="end">12</text><text x="72" y="367" text-anchor="end">Party C</text><rect class="d-gold" x="80" y="352" width="64" height="20" stroke-width="1.5"/><text x="150" y="367">4</text><path class="d-ink" d="M80,288 L80,384" stroke-width="1.5"/><path class="d-ink" d="M320,286 L320,384" stroke-width="1.5" stroke-dasharray="5 4"/><text class="s" x="320" y="400" text-anchor="middle">15</text><text class="s" x="80" y="400" text-anchor="middle">0</text><text class="s" x="170" y="422" text-anchor="middle">Bars make A vs B easy to compare.</text><text class="s" x="170" y="437" text-anchor="middle">The pie makes “more than half” easy.</text></svg>', alt:"A pie chart of a 30-seat council: Party A 14 seats, Party B 12, Party C 4. A dashed line marks half the pie; B and C together pass it, A alone does not. Below, the same seats as sorted horizontal bars of 14, 12 and 4, with a dashed line at 15.", cap:"Each chart answers a different question well."},
      "Guidance for official statistics is stricter. The UK Government Analysis Function recommends pies only when there are five categories or fewer (elsewhere on the same page it suggests value labels only for pies of four categories or fewer). It notes that pies are hard to read when magnified, and advises labelling the slices themselves instead of using a key.",
      {warn:"Never use 3D pies. Tilting the pie makes the slices nearest you look bigger than they are (Wilke, Chapter 26). And a pie only works when the parts really add up to one whole: “tick all that apply” survey answers don’t."},
      {lab:"fl-share", t:"Practise: work out each part’s share of a whole, the numbers behind a pie"}
    ]},
    {h:"Relationships and change: scatterplots, lines, small multiples", body:[
      "A [[scatterplot]] shows two quantitative variables, one dot per record: tree height against trunk width, hours studied against score. Look for direction, clusters and dots far from the rest ([[outlier|outliers]]). When dots pile on top of each other, Wilke suggests partial transparency or a little random jitter so the crowded areas show. Unit 5 measures the strength of such patterns with [[pearson-r|Pearson’s r]].",
      "A [[line-chart|line chart]] puts time (or another ordered quantity) along the bottom. Joining points with a line says “values in between exist and change smoothly”, so only join points whose order means something. A line through unordered categories, such as towns in alphabetical order, invents a trend.",
      "When you have many groups, one tangled chart with eight lines is hard to read. [[small-multiples|Small multiples]] repeat the same small chart once per group, in a grid. Wilke’s two rules: give every panel the same axes, and arrange the panels in a meaningful order (by size, by time, by region).",
      {tip:"More than about five lines? Try small multiples, or colour one line and make the rest grey (Lesson 3)."}
    ]},
    {h:"A question-first workflow", body:[
      {ol:[
        "Write the question as a sentence: “Did meals served change after the move in June?”",
        "List the variables and their kinds (quantitative, categorical, ordered).",
        "Name the family: amounts, distribution, proportions, relationship, or change over time.",
        "Sketch two candidate charts, even on paper.",
        "Make both, then ask: what would a busy reader conclude in five seconds?",
        "Keep the one that answers the question, then fix its axes, colour and labels (Lessons 2–5)."
      ]},
      {ex:"Sione runs a community kitchen. Question: “Did the number of meals served change after we moved to the new hall in June?”\n\nVariables: month (ordered, time), meals served (quantitative), before/after the move (two periods).\nFamily: change over time.\nCandidates: (a) a line chart of meals per month with a marked line at June; (b) two bars, the average before and after.\nVerdict: the line chart shows the jump and also the usual summer dip, so readers can see whether the change is bigger than normal. The two bars hide both.", label:"Worked example: choosing between two candidates"},
      "Spreadsheet apps offer “recommended” charts. Treat them as a starting point: the app sees the shape of your table, not your question.",
      "Wilke’s storytelling chapter adds a warning: never assume your audience can rapidly process complex visual displays. One clear point per chart beats one chart that shows everything."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Pie charts are always wrong.”** They work for a few parts of one whole, especially to show simple fractions or a majority. They fail with many slices or near-equal slices.",
        "**“More data in one chart is more informative.”** Past a point, readers can’t decode it. Split into small multiples or several charts.",
        "**“3D looks more professional.”** It distorts lengths, angles and areas. Flat charts are read more accurately.",
        "**“Any points can be joined with a line.”** Only when the horizontal axis has a meaningful order, such as time.",
        "**“The app’s default bins are fine.”** They’re a guess. Try several widths and report the one you use."
      ]}
    ]}
   ],
   try:[
    {id:"t3u4-l1-x1", type:"mcq", q:"Mei wants readers to compare the recycling rates of 12 towns as precisely as possible. Which encoding should she use?", options:[
      {t:"A dot for each town along one shared axis, sorted by rate", ok:true, why:"Position along a shared scale is the most accurately judged encoding, and sorting makes the ranking obvious."},
      {t:"A circle for each town, sized by its rate", why:"People judge areas much less accurately than positions, so small differences between towns would be hard to see."},
      {t:"A map with each town shaded from light to dark", why:"Shading is among the least accurately judged encodings. It shows broad patterns, not precise comparisons."},
      {t:"A pie chart with 12 slices", why:"Rates aren’t parts of one whole, and 12 slices are hard to compare by angle."}
    ]},
    {id:"t3u4-l1-x2", type:"match", q:"Match each question with the chart that answers it best.", pairs:[
      ["Which of 15 clubs raised the most money?","Bars sorted by amount","Amounts for unordered categories: sorting shows the ranking."],
      ["Life expectancy in 25 countries, all between 60 and 81 years","Dot plot on an axis starting near 60","Bars from zero would all look alike; dots encode only position, so the axis can start near the data."],
      ["How are 300 delivery times spread out?","Histogram, checked with several bin widths","A distribution of one quantitative variable."],
      ["How did each energy source’s share change over 20 years?","Stacked bars, one per year","Many wholes in a time series is what stacked bars do well."],
      ["Do taller trees have wider trunks?","Scatterplot","Two quantitative variables, one dot per tree."],
      ["Monthly rainfall in eight cities","Small multiples with shared axes","Eight lines on one chart tangle. One panel per city, same axes, is easier to read."]
    ]},
    {id:"t3u4-l1-x3", type:"number", q:"In the 30-seat council pie, Party A has 14 seats. How many degrees of the circle should its slice take?", answer:168, tol:0.5, unit:"degrees", why:"A slice’s angle is its share of 360°: 14 ÷ 30 = 0.4667, and 0.4667 × 360° = **168°**. That’s just under half the circle (180°), which is exactly what the pie makes easy to see.", wrongs:[
      {v:46.7, tol:0.2, why:"46.7 is A’s share as a percentage (14 ÷ 30 × 100). Multiply the share by 360° instead of 100."},
      {v:140, tol:0.5, why:"That treats each seat as 10°. With 30 seats, each seat is 360 ÷ 30 = 12°, so 14 seats is 168°."},
      {v:0.4667, tol:0.01, why:"That’s the share as a fraction. Multiply by 360° to get the angle."}
    ]},
    {id:"t3u4-l1-x4", type:"sort", q:"For each dataset, would a pie chart work well, or would bars be better?", buckets:["A pie works well","Use bars instead"], items:[
      {t:"A club vote: 75% yes, 25% no", b:0, why:"Two parts of one whole, and a simple fraction (three quarters) that a pie shows instantly."},
      {t:"Seats of three parties, where two together hold a majority", b:0, why:"Wilke’s own case for a pie: “these slices make more than half” is visible at a glance."},
      {t:"Market shares of 11 phone brands", b:1, why:"Too many slices to compare by angle. Sorted bars show the ranking clearly."},
      {t:"Five departments’ budget shares this year and last year", b:1, why:"Comparing two wholes slice by slice is hard. Side-by-side or stacked bars on a shared axis work better."},
      {t:"Five nearly equal shares: 21%, 20%, 20%, 20%, 19%", b:1, why:"Near-equal angles are almost impossible to rank. Bars (or simply a table) show the small differences."},
      {t:"“Tick all that apply” answers that add up to 180%", b:1, why:"A pie needs parts of one whole that add to 100%. These answers overlap, so they aren’t slices of anything."}
    ]},
    {id:"t3u4-l1-x5", type:"mcq", q:"Kenji’s histogram of 200 exam scores, made with his app’s default bins, shows one smooth hump. Before writing “the scores have a single peak”, what should he do?", options:[
      {t:"Redraw it with several narrower and wider bin widths and see whether the shape holds", ok:true, why:"Wilke’s rule: always explore multiple bin widths. Wide default bins can merge two groups into one hump."},
      {t:"Sort the bars from tallest to shortest", why:"A histogram’s bars follow the number line. Sorting them destroys the distribution."},
      {t:"Switch to a pie chart of the score bands", why:"A pie hides the order of the bands, which is the whole point of a distribution."},
      {t:"Nothing: the app’s default bin width is calculated, so it’s correct", why:"Defaults come from a general rule of thumb, not from knowing your data. They can hide features."}
    ]},
    {id:"t3u4-l1-x6", type:"spot", q:"Lucía drafted this plan for the charts in her neighbourhood report. Tap each choice that will make a chart harder to read honestly.", ask:"makes it harder to read", parts:[
      "Chart 1: ", {t:"a bar chart of library loans in 9 neighbourhoods", flag:false, why:"Amounts for categories: a bar chart is a sound choice."},
      ", with ", {t:"the bars in alphabetical order", flag:true, why:"Neighbourhoods have no natural order, so sort by value; alphabetical order hides the ranking."},
      ", ", {t:"the value axis starting at 0", flag:false, why:"Correct: bars must start at zero."},
      " and ", {t:"a 3D effect with perspective", flag:true, why:"3D makes bars look shorter or longer than they are. Keep it flat."},
      ". Chart 2: ", {t:"a line joining the neighbourhoods from left to right", flag:true, why:"Neighbourhoods aren’t ordered, so a line invents a trend between them."},
      ". Chart 3: ", {t:"a histogram of loan lengths with 7-day bins, also checked with 3-day bins", flag:false, why:"Good practice: trying more than one bin width."},
      "."
    ]},
    {id:"t3u4-l1-x7", type:"order", q:"Put the question-first workflow in order.", items:[
      {t:"Write the question as a sentence", why:"Everything else depends on knowing what the chart must answer."},
      {t:"List the variables and their kinds", why:"Quantitative, categorical or ordered variables limit which encodings make sense."},
      {t:"Name the chart family (amounts, distribution, proportions, relationship, change)", why:"The family narrows the choice to a few chart types."},
      {t:"Sketch and make two candidates", why:"Comparing two real options beats trusting the first idea or the app’s suggestion."},
      {t:"Ask what a busy reader would conclude in five seconds, and keep the better one", why:"The test of a chart is whether it answers the question quickly and honestly."},
      {t:"Fix the axes, colour and labels", why:"Polish comes last, once the chart type is right."}
    ]}
   ],
   apply:{intro:"Make the charts yourself. Any free option works: Excel for the web with a free Microsoft account, Google Sheets with a free Google account (also fine on a phone, though the phone app has fewer chart settings), LibreOffice Calc, or Numbers on an Apple device.", tasks:[
     {t:"Chart the same data as a pie and as sorted bars", app:{
       ms:["In a blank workbook type `Party` in A1 and `Seats` in B1, then A, B and C in A2:A4 with 14, 12 and 4 in B2:B4.","Select A1:B4 and choose **Insert → Insert Pie or Doughnut Chart → Pie** (under 2-D Pie).","Select A1:B4 again and choose **Insert → Insert Column or Bar Chart → Clustered Bar**.","Compare the two: which shows that B and C together pass half? Which shows that A is only slightly ahead of B?"],
       google:["In a blank spreadsheet type `Party` and `Seats` in A1:B1, then A, B and C with 14, 12 and 4 below.","Select A1:B4 and choose **Insert → Chart**. In the **Chart editor**, on the **Setup** tab, set **Chart type** to **Pie chart**.","Select the data again, insert a second chart and set its type to **Bar chart**.","Compare the two: which shows that B and C together pass half? Which shows that A is only slightly ahead of B?"],
       libre:["In a new spreadsheet type `Party` and `Seats` in A1:B1, then A, B and C with 14, 12 and 4 below.","Select A1:B4, choose **Insert → Chart**, pick **Pie** in the chart wizard and click **Finish**.","Click a cell outside the chart, select the data again and insert a second chart of type **Bar**.","Compare the two: which shows that B and C together pass half? Which shows that A is only slightly ahead of B?"],
       apple:["In a new spreadsheet, type `Party` and `Seats` in the header row, then A, B and C with 14, 12 and 4 below.","Select those cells, click **Chart** in the toolbar, choose the **2D** tab and click a pie chart.","Select the cells again and add a **2D** bar chart the same way.","Compare the two: which shows that B and C together pass half? Which shows that A is only slightly ahead of B?"]
     }, write:"Which chart answers which question better?"},
     {t:"Build a histogram by hand and try three bin widths", app:{
       all:["Type the 40 waiting times from the worked example into A2:A41, with the heading `Minutes` in A1.","In C1 type `Bin start`, then 0, 5, 10 … up to 55 in C2:C13.","In D2 type `=COUNTIFS(A$2:A$41,\">=\"&C2,A$2:A$41,\"<\"&C2+5)` and fill it down to D13. (If your app uses semicolons between arguments, type semicolons instead of the commas.)","Check that D2:D13 adds up to 40, then make a column chart of C1:D13. (If your app draws the bin starts as a second set of bars, set C2:C13 as the axis or category labels in the chart settings, or delete the heading in C1 and make the chart again.)","Now try 10-minute bins (starts 0, 10 … 50 and `+10` in the formula) and 30-minute bins (starts 0 and 30, `+30`). Which width shows the two groups best?"]
     }, write:"What did each bin width show or hide?"},
     {t:"Name the question behind five real charts", how:["Find five charts in news articles, reports or your workplace.","For each, write the question it answers in one sentence and the chart family it belongs to.","Note one chart where a different type would answer the question better, and which type you’d use."], write:"Five questions, and one chart you’d redesign."}
   ], proof:"A pie and a sorted bar chart of the same data with a note on which works better for which question; a hand-built histogram tried at three bin widths; and five real charts with the question each answers."},
   read:[
     {book:"wilke", where:"Chapter 2, “Visualizing data: Mapping data onto aesthetics”, and Chapter 5, “Directory of visualizations”", note:"The idea of aesthetic mappings, then a one-page visual menu of chart types."},
     {book:"wilke", where:"Chapter 6, “Visualizing amounts”; Chapter 7, “Visualizing distributions: Histograms and density plots”; Chapter 10, “Visualizing proportions” (Section 10.1 “A case for pie charts”)"},
     {book:"wilke", where:"Chapter 21, “Multi-panel figures” (Section 21.1 “Small multiples”), and Chapter 29, “Telling a story and making a point” (Section 29.2 “Make a figure for the generals”)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u4-l2", title:"Axes, baselines and scales", minutes:60,
   hook:{q:"A chart’s vertical axis is labelled 10, 100, 1,000, 10,000, with equal gaps between the labels. A line rises straight up across it. What are the numbers doing?", options:["Going up by the same amount each step","Being multiplied by the same factor each step","Rising and then levelling off","Nothing: an axis with uneven numbers must be a mistake"], answer:1, reveal:"**They’re being multiplied by the same factor each step.** That axis is a log scale: each equal step multiplies by 10. On it, steady percentage growth looks like a straight line. This lesson covers when log scales help, and the older question behind every axis: when does it have to start at zero?"},
   goals:[
     "State the principle of proportional ink and use it to decide when an axis must start at zero",
     "Choose a sensible range for line charts and dot plots, and say when zero still matters",
     "Read and make log-scale charts, and know what they can’t show",
     "Avoid dual-axis traps by indexing to 100 or splitting into panels"
   ],
   learn:[
    {h:"The principle of proportional ink", body:[
      {lead:"Bars must start at zero. You met that rule in Track 1; here is the principle behind it, which also tells you when the rule doesn’t apply."},
      "Wilke borrows a principle from Carl Bergstrom and Jevin West, the **[[proportional-ink|principle of proportional ink]]**: the sizes of shaded areas in a visualization need to be proportional to the data values they represent.",
      "A bar shows its value twice: by where it ends and by how long it is. If the bars start at 50,000 instead of 0, each bar’s end is still in the right place, but its length now shows “how far above 50,000”, an arbitrary number. Length is what our eyes read, so the chart says two different things at once.",
      "That’s why a [[truncated-axis|truncated]] bar chart misleads ({{misleading-numbers}}). The same logic covers every shaded shape: an **area chart** (a line with the space below it filled in) and stacked areas also need a zero [[baseline]].",
      {ex:"A café sold 9,800 in February and 10,150 in March.\n\nBars from 9,700: February’s bar is 100 units tall, March’s 450, so March looks 4.5 times bigger.\nBars from 0: 9,800 and 10,150 look almost equal, which is honest: the rise is 350, or 350 ÷ 9,800 ≈ 3.6%.\nIf the change is the story, chart the change: one bar of +350, starting at zero.", label:"Worked example: when the change is the point"},
      "Proportional ink doesn’t stop you showing small changes. Show the change itself. Wilke charts the change in median income between two years as bars starting at zero, going down for decreases. Every bar is honest, because what it measures is the change.",
      {key:"If the ink has an area, its size must match the value. Bars and filled areas start at zero."}
    ]},
    {h:"When zero hides the story: dot plots", body:[
      "Sometimes the differences are the point, and bars from zero bury them. In Wilke’s life-expectancy example the bars are long and nearly identical, so the eye drifts to the middle of the bars instead of their ends.",
      "A [[dot-plot|dot plot]] encodes each value by position only. No length claims to be the value, so the axis can start near the data.",
      {fig:'<svg viewBox="0 0 340 402"><text x="170" y="18" text-anchor="middle">Buses on time, % (invented)</text><text class="s" x="170" y="40" text-anchor="middle">Bars from 0: the differences vanish</text><text class="s" x="72" y="65" text-anchor="end">Route A</text><rect class="d-lup" x="78" y="52" width="223.2" height="15" stroke-width="1.2"/><text class="s" x="72" y="87" text-anchor="end">Route B</text><rect class="d-lup" x="78" y="74" width="218.4" height="15" stroke-width="1.2"/><text class="s" x="72" y="109" text-anchor="end">Route C</text><rect class="d-lup" x="78" y="96" width="211.2" height="15" stroke-width="1.2"/><text class="s" x="72" y="131" text-anchor="end">Route D</text><rect class="d-lup" x="78" y="118" width="206.4" height="15" stroke-width="1.2"/><text class="s" x="72" y="153" text-anchor="end">Route E</text><rect class="d-lup" x="78" y="140" width="201.6" height="15" stroke-width="1.2"/><text class="s" x="72" y="175" text-anchor="end">Route F</text><rect class="d-lup" x="78" y="162" width="194.4" height="15" stroke-width="1.2"/><path class="d-ink" d="M78,48 L78,186 L318,186" fill="none" stroke-width="1.5"/><text class="s" x="78" y="201" text-anchor="middle">0</text><text class="s" x="198" y="201" text-anchor="middle">50</text><text class="s" x="318" y="201" text-anchor="middle">100</text><text class="s" x="170" y="230" text-anchor="middle">Dots on 80–95: the ranking is clear</text><path class="d-soft" d="M78,238 L78,374" stroke-width="1"/><path class="d-soft" d="M158,238 L158,374" stroke-width="1"/><path class="d-soft" d="M238,238 L238,374" stroke-width="1"/><path class="d-soft" d="M318,238 L318,374" stroke-width="1"/><text class="s" x="72" y="255" text-anchor="end">Route A</text><circle class="d-lup" cx="286" cy="251" r="6" stroke-width="2"/><text class="s" x="296" y="255">93</text><text class="s" x="72" y="277" text-anchor="end">Route B</text><circle class="d-lup" cx="254" cy="273" r="6" stroke-width="2"/><text class="s" x="264" y="277">91</text><text class="s" x="72" y="299" text-anchor="end">Route C</text><circle class="d-lup" cx="206" cy="295" r="6" stroke-width="2"/><text class="s" x="216" y="299">88</text><text class="s" x="72" y="321" text-anchor="end">Route D</text><circle class="d-lup" cx="174" cy="317" r="6" stroke-width="2"/><text class="s" x="184" y="321">86</text><text class="s" x="72" y="343" text-anchor="end">Route E</text><circle class="d-lup" cx="142" cy="339" r="6" stroke-width="2"/><text class="s" x="132" y="343" text-anchor="end">84</text><text class="s" x="72" y="365" text-anchor="end">Route F</text><circle class="d-lup" cx="94" cy="361" r="6" stroke-width="2"/><text class="s" x="104" y="365">81</text><path class="d-ink" d="M78,376 L318,376" stroke-width="1.5"/><text class="s" x="78" y="391" text-anchor="middle">80</text><text class="s" x="158" y="391" text-anchor="middle">85</text><text class="s" x="238" y="391" text-anchor="middle">90</text><text class="s" x="318" y="391" text-anchor="middle">95</text></svg>', alt:"Two charts of the share of buses on time on six invented routes: A 93%, B 91%, C 88%, D 86%, E 84%, F 81%. In the top chart, bars from 0 to 100 look almost the same length. In the bottom chart, dots on an axis from 80 to 95 spread out and the ranking is clear.", cap:"Same six numbers. The dot plot’s axis starts at 80 and says so."},
      {list:[
        "**Sort the categories by value**, as with bars.",
        "**Label the axis start clearly.** Readers should see at a glance that it starts at 80, not 0.",
        "**Don’t sneak the bars back.** A thick stick drawn from the axis to each dot brings length back as a claim about the value. If you draw sticks, start them at zero."
      ]}
    ]},
    {h:"Line charts: does the axis need zero?", body:[
      "Not necessarily. A [[line-chart|line chart]] shows values by position and change by slope; no length or area claims to be the value. So its axis may start near the data, and often should, so that changes that matter are visible.",
      {fig:'<svg viewBox="0 0 340 452"><text x="170" y="18" text-anchor="middle">One person’s temperature over a day</text><text class="s" x="170" y="34" text-anchor="middle">(invented readings every 2 hours)</text><text class="s" x="186" y="60" text-anchor="middle">Axis from 0 °C: looks flat</text><path class="d-soft" d="M50,200 L322,200" stroke-width="1"/><text class="s" x="44" y="204" text-anchor="end">0</text><path class="d-soft" d="M50,136 L322,136" stroke-width="1"/><text class="s" x="44" y="140" text-anchor="end">20</text><path class="d-soft" d="M50,72 L322,72" stroke-width="1"/><text class="s" x="44" y="76" text-anchor="end">40</text><path class="d-rose" d="M50,82.9 L72.7,83.2 L95.3,82.9 L118,81.9 L140.7,80.3 L163.3,78.1 L186,77.1 L208.7,77.8 L231.3,79 L254,80.6 L276.7,81.6 L299.3,82.2 L322,82.6" fill-opacity="0" stroke-width="2.5"/><path class="d-ink" d="M50,68 L50,200 L322,200" fill="none" stroke-width="1.5"/><text class="s" x="50" y="219" text-anchor="middle">00:00</text><text class="s" x="118" y="219" text-anchor="middle">06:00</text><text class="s" x="186" y="219" text-anchor="middle">12:00</text><text class="s" x="254" y="219" text-anchor="middle">18:00</text><text class="s" x="322" y="219" text-anchor="middle">24:00</text><text class="s" x="186" y="246" text-anchor="middle">Axis from 36 °C: the fever shows</text><path class="d-soft" d="M50,386 L322,386" stroke-width="1"/><text class="s" x="44" y="390" text-anchor="end">36</text><path class="d-soft" d="M50,343.3 L322,343.3" stroke-width="1"/><text class="s" x="44" y="347.3" text-anchor="end">37</text><path class="d-soft" d="M50,300.7 L322,300.7" stroke-width="1"/><text class="s" x="44" y="304.7" text-anchor="end">38</text><path class="d-soft" d="M50,258 L322,258" stroke-width="1"/><text class="s" x="44" y="262" text-anchor="end">39</text><path class="d-rose" d="M50,360.4 L72.7,364.7 L95.3,360.4 L118,347.6 L140.7,326.3 L163.3,296.4 L186,283.6 L208.7,292.1 L231.3,309.2 L254,330.5 L276.7,343.3 L299.3,351.9 L322,356.1" fill-opacity="0" stroke-width="2.5"/><path class="d-ink" d="M50,254 L50,386 L322,386" fill="none" stroke-width="1.5"/><text class="s" x="50" y="405" text-anchor="middle">00:00</text><text class="s" x="118" y="405" text-anchor="middle">06:00</text><text class="s" x="186" y="405" text-anchor="middle">12:00</text><text class="s" x="254" y="405" text-anchor="middle">18:00</text><text class="s" x="322" y="405" text-anchor="middle">24:00</text><path class="d-ink" d="M50,300.7 L322,300.7" stroke-width="1" stroke-dasharray="5 4"/><text class="s" x="320" y="295" text-anchor="end">38 °C: fever</text><text class="s" x="170" y="426" text-anchor="middle">Same readings. 0 °C means nothing for a body,</text><text class="s" x="170" y="441" text-anchor="middle">so a line chart may start near the data.</text></svg>', alt:"Two line charts of one person’s invented temperature every two hours. Readings start at 36.6 °C, rise to 38.4 °C at noon and fall back to 36.7 °C at midnight. On an axis from 0 to 40 °C the line looks flat. On an axis from 36 to 39 °C, with a dashed line at 38 °C, the fever is obvious.", cap:"Starting at zero would hide the part that matters."},
      "This works because 0 °C means nothing for a human body: no one’s temperature is near it. A zero-based axis would squash a fever into a flat line.",
      "Zooming in has a cost, though. The chart no longer shows how big the change is compared with the whole. Decide by the question:",
      {table:[
        ["The reader’s question","Axis choice"],
        ["How did it change, and when?","Start near the data; label the range clearly"],
        ["How big is the change compared with the total?","Include zero, or chart the percentage change"],
        ["Is this small wobble important?","Add context: a longer period, a target line or the usual range"]
      ]},
      "Wilke’s share-price example shows the danger. A price that fell by about $15 looked like a collapse, because the axis started at $110 and the area under the line was shaded. The shading turned the line into an area that broke proportional ink. Drop the fill, use a wider range, or chart the fall from the high point as its own quantity.",
      "The UK Government Analysis Function’s chart guidance agrees: don’t break the axis on bar charts, but breaking a line chart’s y-axis is acceptable when necessary.",
      {tip:"Whatever range you choose, say it: “Note: the axis starts at 36 °C.” Honest zooming is labelled zooming."}
    ]},
    {h:"Log scales: equal steps mean multiplying", body:[
      "On an ordinary **linear** axis, each step adds the same amount: 0, 1,000, 2,000, 3,000. On a [[log-scale|logarithmic (log) scale]], each step multiplies by the same factor: 1, 10, 100, 1,000, or 50, 100, 200, 400.",
      {fig:'<svg viewBox="0 0 340 458"><text x="170" y="18" text-anchor="middle">Members of an online group (invented):</text><text x="170" y="34" text-anchor="middle">doubling every month</text><text class="s" x="190" y="60" text-anchor="middle">Linear scale</text><path class="d-soft" d="M58,200 L322,200" stroke-width="1"/><text class="s" x="52" y="204" text-anchor="end">0</text><path class="d-soft" d="M58,160 L322,160" stroke-width="1"/><text class="s" x="52" y="164" text-anchor="end">1,000</text><path class="d-soft" d="M58,120 L322,120" stroke-width="1"/><text class="s" x="52" y="124" text-anchor="end">2,000</text><path class="d-soft" d="M58,80 L322,80" stroke-width="1"/><text class="s" x="52" y="84" text-anchor="end">3,000</text><path class="d-lup" d="M58,198 L102,196 L146,192 L190,184 L234,168 L278,136 L322,72" fill-opacity="0" stroke-width="2.5"/><circle class="d-lup" cx="58" cy="198" r="3.5" stroke-width="2"/><circle class="d-lup" cx="102" cy="196" r="3.5" stroke-width="2"/><circle class="d-lup" cx="146" cy="192" r="3.5" stroke-width="2"/><circle class="d-lup" cx="190" cy="184" r="3.5" stroke-width="2"/><circle class="d-lup" cx="234" cy="168" r="3.5" stroke-width="2"/><circle class="d-lup" cx="278" cy="136" r="3.5" stroke-width="2"/><circle class="d-lup" cx="322" cy="72" r="3.5" stroke-width="2"/><path class="d-ink" d="M58,68 L58,200 L322,200" fill="none" stroke-width="1.5"/><text class="s" x="58" y="219" text-anchor="middle">Jan</text><text class="s" x="102" y="219" text-anchor="middle">Feb</text><text class="s" x="146" y="219" text-anchor="middle">Mar</text><text class="s" x="190" y="219" text-anchor="middle">Apr</text><text class="s" x="234" y="219" text-anchor="middle">May</text><text class="s" x="278" y="219" text-anchor="middle">Jun</text><text class="s" x="322" y="219" text-anchor="middle">Jul</text><text class="s" x="190" y="248" text-anchor="middle">Log scale: each gridline is ×2</text><path class="d-soft" d="M58,408 L322,408" stroke-width="1"/><text class="s" x="52" y="412" text-anchor="end">50</text><path class="d-soft" d="M58,383.3 L322,383.3" stroke-width="1"/><text class="s" x="52" y="387.3" text-anchor="end">100</text><path class="d-soft" d="M58,358.7 L322,358.7" stroke-width="1"/><text class="s" x="52" y="362.7" text-anchor="end">200</text><path class="d-soft" d="M58,334 L322,334" stroke-width="1"/><text class="s" x="52" y="338" text-anchor="end">400</text><path class="d-soft" d="M58,309.3 L322,309.3" stroke-width="1"/><text class="s" x="52" y="313.3" text-anchor="end">800</text><path class="d-soft" d="M58,284.7 L322,284.7" stroke-width="1"/><text class="s" x="52" y="288.7" text-anchor="end">1,600</text><path class="d-soft" d="M58,260 L322,260" stroke-width="1"/><text class="s" x="52" y="264" text-anchor="end">3,200</text><path class="d-lup" d="M58,408 L102,383.3 L146,358.7 L190,334 L234,309.3 L278,284.7 L322,260" fill-opacity="0" stroke-width="2.5"/><circle class="d-lup" cx="58" cy="408" r="3.5" stroke-width="2"/><circle class="d-lup" cx="102" cy="383.3" r="3.5" stroke-width="2"/><circle class="d-lup" cx="146" cy="358.7" r="3.5" stroke-width="2"/><circle class="d-lup" cx="190" cy="334" r="3.5" stroke-width="2"/><circle class="d-lup" cx="234" cy="309.3" r="3.5" stroke-width="2"/><circle class="d-lup" cx="278" cy="284.7" r="3.5" stroke-width="2"/><circle class="d-lup" cx="322" cy="260" r="3.5" stroke-width="2"/><path class="d-ink" d="M58,256 L58,408 L322,408" fill="none" stroke-width="1.5"/><text class="s" x="58" y="427" text-anchor="middle">Jan</text><text class="s" x="102" y="427" text-anchor="middle">Feb</text><text class="s" x="146" y="427" text-anchor="middle">Mar</text><text class="s" x="190" y="427" text-anchor="middle">Apr</text><text class="s" x="234" y="427" text-anchor="middle">May</text><text class="s" x="278" y="427" text-anchor="middle">Jun</text><text class="s" x="322" y="427" text-anchor="middle">Jul</text><text class="s" x="170" y="448" text-anchor="middle">Steady doubling looks like a straight line.</text></svg>', alt:"Two line charts of invented online-group membership doubling every month: 50, 100, 200, 400, 800, 1,600 and 3,200 from January to July. On a linear axis from 0 to 3,000 the line hugs the bottom and then shoots up. On a log axis with gridlines at each doubling, the same values form a straight line.", cap:"Growth by the same percentage each month: a curve on a linear scale, a straight line on a log scale."},
      "Wilke gives two main reasons to use one:",
      {list:[
        "**The numbers span several [[order-of-magnitude|orders of magnitude]].** Texas county populations ran from 82 to over 4 million in the 2010 census; on a linear axis every small county is squashed at the bottom.",
        "**The question is about ratios or growth rates.** On a log scale, doubling is always the same distance, wherever it starts. Steady percentage growth becomes a straight line, so you can see when growth speeds up or slows down."
      ]},
      {ex:"Gridlines at 10, 100, 1,000 and 10,000 are equally spaced, say 3 cm apart.\n\n100 to 10,000 is two steps of ×10, so 6 cm.\nThe point halfway between 10 and 100 is not 55 but about 31.6, because 10 × 3.16 × 3.16 ≈ 100 (Wilke uses this example).\nA ratio of 2 (twice) and a ratio of 0.5 (half) sit the same distance either side of 1.", label:"Worked example: reading positions on a log axis"},
      {list:[
        "**No zero, no negatives.** Zero would sit infinitely far down a log axis, so it can’t be plotted; Excel’s help notes a log scale can’t be used for zero or negative values. Wilke mentions a square-root scale as one option when zeros matter.",
        "**Label the values, not the logs.** Write 100, 1,000, 10,000 and name the variable (“Members”), not “log(members)”. If you plot numbers that have already been logged, say which base.",
        "**Tell readers.** A reader who doesn’t notice the scale can badly misjudge the growth. Put “log scale” in the subtitle and point out what one step means.",
        "**Bars on a log scale show ratios, so they start at 1, not 0.** For amounts on a log axis, Wilke prefers dots."
      ]}
    ]},
    {h:"Same scales, fair shapes", body:[
      "Charts that will be compared need the same axes. Wilke shows nine small charts of university degree subjects, each with its own y-axis: every subject seemed equally popular and equally changeable. On a shared axis, some subjects turned out to be many times more popular than others.",
      "His advice for [[small-multiples|small multiples]]: use the same axis ranges in every panel. If you truly can’t, say so in the caption (“Note that the y-axis scales differ”). Watch out, because spreadsheets choose each chart’s axis automatically.",
      "Shape matters too. Stretch a line chart wide and flat and every trend looks gentle; squash it tall and narrow and the same trend looks steep. When both axes use the same units (this year’s temperature against last year’s), Wilke recommends equal spacing on both. Otherwise, pick a shape that neither flattens nor exaggerates the change, and keep it the same for charts that will be compared."
    ]},
    {h:"Two y axes, two stories", body:[
      "A [[dual-axis|dual-axis chart]] puts two series with different units on one chart: one read from the left axis, one from the right. It looks efficient, but the designer picks both ranges freely. By choosing them, any two lines can be made to rise together, cross or drift apart, whatever the data. Readers then see meaning in where lines cross, and that meaning comes from the axis settings.",
      {fig:'<svg viewBox="0 0 340 460"><text x="170" y="18" text-anchor="middle">A bakery: loaves sold and website visits</text><text class="s" x="170" y="34" text-anchor="middle">per week (invented)</text><text class="s" x="170" y="60" text-anchor="middle">Two y axes: they seem to grow together</text><path class="d-soft" d="M50,210 L290,210" stroke-width="1"/><text class="s" x="44" y="214" text-anchor="end">395</text><text class="s" x="296" y="214">900</text><path class="d-soft" d="M50,150 L290,150" stroke-width="1"/><text class="s" x="44" y="154" text-anchor="end">420</text><text class="s" x="296" y="154">2,000</text><path class="d-soft" d="M50,90 L290,90" stroke-width="1"/><text class="s" x="44" y="94" text-anchor="end">445</text><text class="s" x="296" y="94">3,100</text><path class="d-rose" d="M50,198 L84.3,186 L118.6,169.2 L152.9,154.8 L187.1,140.4 L221.4,126 L255.7,111.6 L290,102" fill-opacity="0" stroke-width="2.5"/><path class="d-lup" d="M50,204.5 L84.3,190.9 L118.6,177.3 L152.9,160.9 L187.1,144.5 L221.4,128.2 L255.7,111.8 L290,95.5" fill-opacity="0" stroke-width="2.5" stroke-dasharray="7 4"/><path class="d-ink" d="M50,86 L50,210 L290,210 L290,86" fill="none" stroke-width="1.5"/><text class="s" x="50" y="78" text-anchor="middle">loaves</text><text class="s" x="290" y="78" text-anchor="middle">visits</text><text class="s" x="50" y="230" text-anchor="middle">Week 1</text><text class="s" x="290" y="230" text-anchor="middle">Week 8</text><text class="s" x="120" y="108">solid: loaves</text><text class="s" x="120" y="123">dashed: visits</text><text class="s" x="170" y="270" text-anchor="middle">Both indexed to 100 in week 1</text><path class="d-soft" d="M50,399.5 L262,399.5" stroke-width="1"/><text class="s" x="44" y="403.5" text-anchor="end">100</text><path class="d-soft" d="M50,347 L262,347" stroke-width="1"/><text class="s" x="44" y="351" text-anchor="end">200</text><path class="d-soft" d="M50,294.5 L262,294.5" stroke-width="1"/><text class="s" x="44" y="298.5" text-anchor="end">300</text><path class="d-rose" d="M50,399.5 L80.3,398.9 L110.6,397.9 L140.9,397.1 L171.1,396.4 L201.4,395.6 L231.7,394.8 L262,394.2" fill-opacity="0" stroke-width="2.5"/><path class="d-lup" d="M50,399.5 L80.3,386.4 L110.6,373.2 L140.9,357.5 L171.1,341.8 L201.4,326 L231.7,310.2 L262,294.5" fill-opacity="0" stroke-width="2.5" stroke-dasharray="7 4"/><path class="d-ink" d="M50,280 L50,410 L262,410" fill="none" stroke-width="1.5"/><text class="s" x="268" y="298.5">visits 300</text><text class="s" x="268" y="398.2">loaves 110</text><text class="s" x="50" y="426" text-anchor="middle">Week 1</text><text class="s" x="262" y="426" text-anchor="middle">Week 8</text><text class="s" x="170" y="450" text-anchor="middle">Visits tripled (+200%); loaves rose 10%.</text></svg>', alt:"Invented weekly figures for a bakery over 8 weeks: loaves sold rise from 400 to 440, website visits from 1,000 to 3,000. In the top chart, a left axis from 395 to 445 and a right axis from 900 to 3,100 make the two lines look parallel. In the bottom chart both are indexed to 100 in week 1: visits reach 300 and loaves 110.", cap:"The dual axes suggest the two grew alike. Indexing shows visits tripled while loaves rose 10%."},
      "The UK Government Analysis Function does not recommend dual-axis charts because they are easily misinterpreted, and suggests giving each dataset its own y-axis. Better options:",
      {list:[
        "**Index both series to 100** at a shared start: an [[index-number|index]] = value ÷ starting value × 100. Both now show change relative to the start, on one honest axis.",
        "**Two charts, one above the other**, with the time axes lined up and each y-axis clearly labelled.",
        "**One against the other**: a scatterplot (or one that joins the points in time order) when the question is how the two relate."
      ]},
      {ex:"Visits: 3,000 ÷ 1,000 × 100 = 300, so up 200%.\nLoaves: 440 ÷ 400 × 100 = 110, so up 10%.\n\nIn a spreadsheet, with the weekly values in B2:B9: `=B2/B$2*100` in C2, filled down. The `$` keeps every row dividing by week 1.", label:"Worked example: indexing to 100"},
      {lab:"fl-abs", t:"Practise: a formula that divides every row by one fixed cell, as an index does"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Every axis must start at zero.”** Only when length or area shows the value: bars and filled areas. Lines and dots may start near the data, clearly labelled.",
        "**“Starting a line chart above zero is cheating.”** It’s often the honest choice. The dishonest moves are hiding the range or hand-picking it to create drama.",
        "**“A log scale exaggerates.”** It answers a different question (ratios instead of differences). Label it and explain it.",
        "**“Two y axes let me compare two things fairly.”** Where the lines sit and cross is set by the axis ranges you choose.",
        "**“The app’s automatic axis is neutral.”** Apps choose ranges from the data. Check the axis every time."
      ]}
    ]}
   ],
   try:[
    {id:"t3u4-l2-x1", type:"mcq", q:"A newspaper’s bar chart of median income in five districts starts its value axis at 50,000. One district’s bar looks a fifth the height of another’s, although their incomes are 55,000 and 75,000. Why is the chart misleading?", options:[
      {t:"The bars show the amount above 50,000 (5,000 vs 25,000), so their lengths aren’t proportional to the incomes", ok:true, why:"That breaks proportional ink. The real ratio is 55,000 ÷ 75,000 ≈ 0.73, not 0.2."},
      {t:"Median income should never be shown in a bar chart", why:"Bars suit amounts like median income. The problem is where the bars start."},
      {t:"The bars should be sorted alphabetically", why:"Sorting by value is better, and sorting has nothing to do with the false impression here."},
      {t:"Nothing: the ends of the bars are in the right places", why:"The ends are right, but readers judge length. Length here says “one fifth”, which is false."}
    ]},
    {id:"t3u4-l2-x2", type:"sort", q:"Does each chart need its value axis to start at zero, or is zero optional?", buckets:["Needs a zero baseline","Zero is optional"], items:[
      {t:"Bar chart of tonnes recycled in six towns", b:0, why:"Bars show value by length, so they start at zero."},
      {t:"Area chart of a savings balance over time", b:0, why:"The filled area claims to be the value, so it must start at zero."},
      {t:"Stacked bars of each department’s share of a budget", b:0, why:"Each segment’s length is its share; a non-zero start would distort them."},
      {t:"Line chart of a child’s height from age 2 to 10", b:1, why:"A line shows value by position. Zero height is far from the data and not meaningful here."},
      {t:"Dot plot of exam averages between 62 and 78", b:1, why:"Dots encode position only, so the axis can start near 60, labelled."},
      {t:"Scatterplot of rainfall against crop yield", b:1, why:"Both axes are positions; choose ranges that show the data, and label them."}
    ]},
    {id:"t3u4-l2-x3", type:"number", q:"On a log axis, the gridlines 10, 100, 1,000 and 10,000 are equally spaced, 3 cm apart. How far above 100 is 10,000?", answer:6, tol:0, unit:"cm", why:"From 100 to 10,000 is 100 × 10 × 10: two steps of ×10. Each step is 3 cm, so 2 × 3 = **6 cm**.", wrongs:[
      {v:2, tol:0, why:"2 is the number of ×10 steps. Multiply by 3 cm per step."},
      {v:3, tol:0, why:"3 cm is one step (100 to 1,000). 10,000 is one more step up."},
      {v:297, tol:1, why:"That treats the axis as linear (9,900 more, scaled by 3 cm per 100). On a log axis, distance depends on the ratio, not the difference."}
    ]},
    {id:"t3u4-l2-x4", type:"number", q:"Website visits went from 1,000 in week 1 to 3,000 in week 8. Indexed to 100 in week 1, what is the week 8 index?", answer:300, tol:0, unit:"", why:"Index = value ÷ starting value × 100 = 3,000 ÷ 1,000 × 100 = **300**, meaning three times the week 1 level (a 200% rise).", wrongs:[
      {v:200, tol:0, why:"200 is the percentage increase. The index includes the starting 100: 100 + 200 = 300."},
      {v:3, tol:0, why:"3 is the ratio. Multiply by 100 to put it on the index scale."},
      {v:33.3, tol:0.1, why:"That divides the wrong way round (1,000 ÷ 3,000). Divide the later value by the starting value."}
    ]},
    {id:"t3u4-l2-x5", type:"mcq", q:"Dmitri’s chart shows website visits on the left axis and sales in euros on the right. The two lines cross in March, and his slide says “Visits overtook sales in March”. What’s wrong?", options:[
      {t:"The crossing point depends on the two axis ranges he chose; with other ranges the lines would cross elsewhere or not at all", ok:true, why:"Visits and euros have different units, so “overtook” has no meaning. Index both to 100 or use two aligned charts."},
      {t:"Nothing, as long as both axes start at zero", why:"Even with both axes from zero, the right axis’s maximum is a free choice that moves the line up or down."},
      {t:"He should have used a pie chart", why:"A pie shows parts of a whole, not two series over time."},
      {t:"Lines can only cross on a log scale", why:"Lines can cross on any scale. The problem is that this crossing is an artefact of the axis settings."}
    ]},
    {id:"t3u4-l2-x6", type:"match", q:"Match each chart problem with its fix.", pairs:[
      ["Bars of on-time rates between 81% and 93% all look the same","A dot plot with a labelled axis from 80","Dots encode position only, so the axis can start near the data."],
      ["Populations from 500 to 9 million squash every small town flat","A log scale, labelled as such","Values spanning orders of magnitude suit a log axis."],
      ["Two series in different units on left and right axes","Index both to 100, or use two aligned charts","Removes the arbitrary alignment of two axes."],
      ["Six panels each with their own automatic y-axis","Give all panels the same axis range","Shared axes make panels comparable."],
      ["A share-price line with the area below shaded from 110","Remove the fill, or show the change from the high point","Shading claims the area is the value; without a zero baseline it isn’t."]
    ]},
    {id:"t3u4-l2-x7", type:"mcq", q:"Hana counts complaints per month at her community centre: some months have 0. She wants a log scale because a few months had over 200. What should she know first?", options:[
      {t:"Zero can’t be placed on a log scale, so those months would disappear or cause an error", ok:true, why:"Zero lies infinitely far down a log axis. She could keep a linear axis, try a square-root scale (which allows 0), or show zero months separately and say so."},
      {t:"Log scales only work for money", why:"They work for any positive quantity, especially when values span orders of magnitude."},
      {t:"She must start the log axis at zero", why:"A log axis can’t include zero at all; it typically starts at a positive value like 1."},
      {t:"Nothing: apps convert zeros automatically", why:"Excel’s help says a log scale can’t be used for zero or negative values. Apps may drop such points or warn you."}
    ]}
   ],
   apply:{intro:"Use the bus-route numbers from this lesson (Route A–F: 93, 91, 88, 86, 84, 81) or data of your own.", tasks:[
     {t:"Set the axis start yourself, then put it back to zero", app:{
       ms:["Type the routes and percentages in A1:B7 (headers `Route` and `On time %`) and insert a **Clustered Bar** chart.","Right-click the value axis and choose **Format Axis**. Under **Axis Options**, find **Bounds** and type 80 in **Minimum**.","Notice how much bigger the differences look. Then set **Minimum** back to 0 (or click **Reset**).","For a version that may honestly start at 80, make a dot plot: change the chart type to **Line with Markers**, then in **Format Data Series → Fill & Line** set the line to **No line**, so only the dots remain. Set the minimum to 80 and add an axis title saying where it starts. (Steps are for desktop Excel; Excel for the web has fewer axis options.)"],
       google:["Type the routes and percentages in A1:B7 and choose **Insert → Chart**, then **Bar chart**.","Double-click the chart. In the **Chart editor**, open **Customize → Vertical axis** (for a bar chart the value axis may be listed as the horizontal axis) and type 80 in **Min**.","Notice how much bigger the differences look. Then set **Min** back to 0.","For a version that may honestly start at 80, make a dot plot: change the chart type to **Line chart**, then in **Customize → Series** set **Line thickness** to 0px and choose a **Point size**. Set **Min** to 80 and add an axis title saying where it starts."],
       libre:["Type the routes and percentages in A1:B7 and insert a **Bar** chart.","Double-click the chart to edit it, right-click the value axis and choose **Format Axis**.","On the **Scale** tab, untick **Automatic** next to **Minimum** and type 80. Notice how the differences grow.","Set the minimum back to 0 (or tick **Automatic** again). For a version that may honestly start at 80, change the chart type to **Line → Points Only** (a dot plot), set the minimum to 80 and add an axis title saying so."],
       apple:["Type the routes and percentages in a table and add a **2D** bar chart.","With the chart selected, open the **Format** sidebar, click **Axis**, then the **Value** button.","In the **Axis Scale** section, type 80 as the minimum. Notice how the differences grow.","Set the minimum back to 0."]
     }, write:"How many times longer did Route A’s bar look than Route F’s with the axis at 80? With it at 0?"},
     {t:"Switch a chart to a log scale", app:{
       ms:["Type `Month` and `Members` in A1:B1, then Jan to Jul with 50, 100, 200, 400, 800, 1600, 3200, and insert a line chart.","Right-click the vertical axis, choose **Format Axis**, and tick **Logarithmic scale** under **Axis Options**.","The curve becomes a straight line. Add “(log scale)” to the axis title."],
       google:["Type the months and member counts in A1:B8 and insert a **Line chart**.","In the **Chart editor**, open **Customize → Vertical axis** and tick **Log scale**.","The curve becomes a straight line. Add “(log scale)” to the axis title under **Chart & axis titles**."],
       libre:["Type the months and member counts in A1:B8 and insert a **Line** chart.","Double-click the chart, right-click the y-axis and choose **Format Axis**.","On the **Scale** tab, tick **Logarithmic scale** and click **OK**. Add “(log scale)” to the axis title."],
       apple:["Type the months and member counts and add a **2D** line chart.","Open the **Format** sidebar, click **Axis**, then **Value**.","In **Axis Scale**, choose **Logarithmic** from the scale pop-up menu (it shows **Linear** by default; if your version doesn’t offer it, read along with another app’s steps). Add “(log scale)” to the axis name."]
     }},
     {t:"Index two series to 100", app:{
       all:["Type weeks 1–8 in A2:A9, loaves (400, 405, 412, 418, 424, 430, 436, 440) in B2:B9 and visits (1000, 1250, 1500, 1800, 2100, 2400, 2700, 3000) in C2:C9, with headings in row 1.","In D2 type `=B2/B$2*100` and in E2 `=C2/C$2*100`, then fill both down to row 9.","Check D9 shows 110 and E9 shows 300.","Make one line chart of A1:A9 with D1:E9 (headings `Loaves index` and `Visits index`), with one y-axis. Compare it with a dual-axis version if your app makes one."]
     }}
   ], proof:"A bar chart you deliberately truncated and then fixed, a log-scale line chart with its scale labelled, and an indexed chart showing visits at 300 and loaves at 110."},
   read:[
     {book:"wilke", where:"Chapter 17, “The principle of proportional ink” (Sections 17.1 “Visualizations along linear axes” and 17.2 “Visualizations along logarithmic axes”)"},
     {book:"wilke", where:"Chapter 3, “Coordinate systems and axes”, Section 3.2 “Nonlinear axes”", note:"Log and square-root scales, with the 1, 3.16, 10, 31.6, 100 example."},
     {book:"wilke", where:"Chapter 6, “Visualizing amounts”, Section 6.3 “Dot plots and heatmaps”, and Chapter 21, Section 21.1 “Small multiples”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u4-l3", title:"Colour that everyone can read", minutes:55,
   hook:{q:"Roughly how common is colour-vision deficiency (often called colour blindness)?", options:["About 1 person in 10,000","About 8% of men and 0.5% of women","Almost unknown outside a few families","About half of all adults"], answer:1, reveal:"**About 8% of men and 0.5% of women**, the figures both Wilke’s textbook and the UK Government Analysis Function give. They come mainly from studies of people with Northern European ancestry; almost all other populations studied have lower rates. In a room of 50 men and 50 women at those rates, you’d expect about four people with colour-vision deficiency. Most of them see colours, but confuse certain pairs, often red and green. This lesson shows how to choose colours that work for them, and for everyone reading in greyscale or on a dim phone screen."},
   goals:[
     "Match a palette type (qualitative, sequential, diverging, highlight) to what the colour has to show",
     "Avoid the common colour pitfalls: too many colours, rainbow scales and loud fills",
     "Design for colour-vision deficiency with safe palettes, redundant coding and simulator checks",
     "Check chart colours against WCAG contrast ratios"
   ],
   learn:[
    {h:"Colour has three jobs", body:[
      {lead:"Before you pick colours, decide what the colour is for. Wilke names three jobs, and each needs a different kind of [[colour-palette|palette]]."},
      {list:[
        "**To distinguish** groups that have no order (countries, species, teams): a [[qualitative-palette|qualitative palette]] of clearly different hues, none of which stands out or suggests an order.",
        "**To represent values** (income, temperature, density): a [[sequential-palette|sequential palette]] from light to dark, or a [[diverging-palette|diverging palette]] when values run in two directions from a meaningful midpoint.",
        "**To highlight**: one strong accent colour against muted greys."
      ]},
      {fig:'<svg viewBox="0 0 340 348"><text x="10" y="22">Qualitative: groups with no order</text><path class="d-rose" d="M40,48 h54" stroke-width="22"/><path class="d-lup" d="M106,48 h54" stroke-width="22"/><path class="d-gold" d="M172,48 h54" stroke-width="22"/><path class="d-sage" d="M238,48 h54" stroke-width="22"/><text class="s" x="67" y="78" text-anchor="middle">North</text><text class="s" x="133" y="78" text-anchor="middle">South</text><text class="s" x="199" y="78" text-anchor="middle">East</text><text class="s" x="265" y="78" text-anchor="middle">West</text><text x="10" y="108">Sequential: low to high, faint to strong</text><path class="d-lup" d="M40,134 h40" stroke-width="22" stroke-opacity="0.15"/><path class="d-lup" d="M85,134 h40" stroke-width="22" stroke-opacity="0.32"/><path class="d-lup" d="M130,134 h40" stroke-width="22" stroke-opacity="0.5"/><path class="d-lup" d="M175,134 h40" stroke-width="22" stroke-opacity="0.7"/><path class="d-lup" d="M220,134 h40" stroke-width="22" stroke-opacity="0.88"/><path class="d-lup" d="M265,134 h40" stroke-width="22" stroke-opacity="1.0"/><text class="s" x="40" y="164">fewest</text><text class="s" x="310" y="164" text-anchor="end">most</text><text x="10" y="194">Diverging: two directions from a midpoint</text><path class="d-rose" d="M30,220 h37" stroke-width="22" stroke-opacity="1.0"/><path class="d-rose" d="M71,220 h37" stroke-width="22" stroke-opacity="0.6"/><path class="d-rose" d="M112,220 h37" stroke-width="22" stroke-opacity="0.25"/><path class="d-soft" d="M153,220 h37" stroke-width="22" stroke-opacity="0.25"/><path class="d-lup" d="M194,220 h37" stroke-width="22" stroke-opacity="0.25"/><path class="d-lup" d="M235,220 h37" stroke-width="22" stroke-opacity="0.6"/><path class="d-lup" d="M276,220 h37" stroke-width="22" stroke-opacity="1.0"/><text class="s" x="30" y="250">well below</text><text class="s" x="170" y="250" text-anchor="middle">midpoint</text><text class="s" x="318" y="250" text-anchor="end">well above</text><text x="10" y="280">Highlight: grey for context, one accent</text><path class="d-soft" d="M40,306 h40" stroke-width="22" stroke-opacity="0.35"/><path class="d-soft" d="M85,306 h40" stroke-width="22" stroke-opacity="0.35"/><path class="d-soft" d="M130,306 h40" stroke-width="22" stroke-opacity="0.35"/><path class="d-rose" d="M175,306 h40" stroke-width="22"/><path class="d-soft" d="M220,306 h40" stroke-width="22" stroke-opacity="0.35"/><path class="d-soft" d="M265,306 h40" stroke-width="22" stroke-opacity="0.35"/><text class="s" x="197" y="336" text-anchor="middle">the one that matters</text></svg>', alt:"Four rows of colour swatches. Qualitative: four different hues labelled North, South, East and West. Sequential: six steps of one purple from faint to strong, labelled fewest to most. Diverging: strong rose fading to a faint neutral midpoint, then faint to strong purple, labelled well below, midpoint, well above. Highlight: five grey swatches and one rose one, labelled the one that matters.", cap:"Four palette types for four jobs."},
      "Highlighting is the most underused job. If your story is about one line among twenty, colour that line and make the rest grey. Wilke’s tip: the background colours must be genuinely dull, or they compete with the accent."
    ]},
    {h:"Sequential and diverging scales", body:[
      "A sequential scale has to show two things: which values are bigger, and roughly how far apart they are. So its lightness should change steadily from one end to the other. On a white page, low values are usually light and high values dark; on a dark background the convention often flips, as the figure above does in dark mode. Single-hue scales (light to dark blue) work, and so do multi-hue scales that follow a natural progression, such as dark purple through green to light yellow.",
      "That last example describes **viridis**, a widely used scale designed to be perceptually even, readable for people with common colour-vision deficiencies, and still in order when printed in greyscale. A five-step version (as the Python library matplotlib gives it; R’s version differs by a digit or two) is `#440154`, `#3B528B`, `#21918C`, `#5EC962`, `#FDE725` ([[hex-color|hex codes]]).",
      "A diverging scale is two sequential scales joined at a light midpoint. Use one only when the midpoint means something: zero change, 50% (a majority), a target or a national average. Both sides should darken at the same rate, or one direction will look more extreme than the other.",
      {ex:"Fatima maps the change in bus passengers since last year, by district: from −12% to +18%.\n\nDiverging scale, centred on 0%, darkening equally each way, so that −12% and +12% look equally strong.\n\nIf she mapped passengers per 1,000 residents instead, a sequential scale fits: there’s no meaningful middle, just fewer to more.", label:"Worked example: sequential or diverging?"},
      "Maps that colour regions by value are called **choropleth** maps. They should usually show rates, such as passengers [[per-capita|per person]], rather than totals; Lesson 4 explains why."
    ]},
    {h:"Three colour pitfalls", body:[
      {list:[
        "**Too many colours.** Wilke’s rule of thumb: qualitative colours work best for about three to five categories; at eight to ten or more, matching colours to a legend becomes a chore, so label the data directly instead. The UK Government Analysis Function goes further and recommends at most four categories in a basic chart.",
        "**Rainbow scales.** A rainbow runs through every hue, so its lightness goes up and down: medium, light, very dark, then medium again. Readers see sharp boundaries where the data change smoothly, and miss real changes elsewhere. Its two ends are both reddish, too. Use a scale whose lightness changes steadily.",
        "**Loud, saturated fills.** Large areas of intense colour are tiring to look at and pull the eye away from the data. Save strong colours for small marks and highlights."
      ]},
      {tip:"A quick test for any sequential scale: view it in greyscale. If the greys don’t run steadily from light to dark, the scale will mislead."}
    ]},
    {h:"Designing for colour-vision deficiency", body:[
      "People with colour-vision deficiency still see colours; they confuse particular pairs. The most common types (deuteranomaly and protanomaly) make reds and greens hard to tell apart. A rarer type (tritanomaly) affects blues, so blue–green pairs can look alike. Wilke’s advice by palette type:",
      {list:[
        "**Sequential** scales that run from dark to light usually stay readable.",
        "**Diverging** red–green scales fail for the most common types. Use pairs such as blue–orange, or the pink-to-green ColorBrewer scale PiYG, which Wilke shows staying distinguishable.",
        "**Qualitative** palettes are hardest. Wilke uses the Okabe–Ito palette, designed to stay [[colourblind-safe|colour-blind safe]]:"
      ]},
      {table:[
        ["Okabe–Ito colour","Hex code","Contrast on white"],
        ["Orange","`#E69F00`","2.25:1"],
        ["Sky blue","`#56B4E9`","2.31:1"],
        ["Bluish green","`#009E73`","3.42:1"],
        ["Yellow","`#F0E442`","1.32:1"],
        ["Blue","`#0072B2`","5.19:1"],
        ["Vermilion","`#D55E00`","3.87:1"],
        ["Reddish purple","`#CC79A7`","3.06:1"],
        ["Black","`#000000`","21:1"]
      ]},
      {warn:"A safe palette isn’t a guarantee. Wilke stresses that small dots and thin lines are much harder to tell apart than big areas, and recommends testing every figure in a colour-vision simulator."},
      "Simulators are free. Chrome’s developer tools have a **Rendering** tab with **Emulate vision deficiencies** (protanopia, deuteranopia, tritanopia, achromatopsia and more), which works on any web page. Datawrapper runs an automatic colour-blind check on its palettes. A low-tech test works everywhere: switch your screen to greyscale or print in black and white. If the chart still works, colour isn’t carrying it alone."
    ]},
    {h:"Contrast: can the marks be seen at all?", body:[
      "Colour-blind safety is about telling colours apart from each other. **Contrast** is about telling marks apart from the background ([[contrast]]). WCAG 2.2, the web accessibility standard, sets the numbers:",
      {list:[
        "**Text**, including axis labels and annotations: at least 4.5:1, or 3:1 for large text (success criterion 1.4.3).",
        "**Graphical objects needed to understand the content**, such as lines, bars and pie slices: at least 3:1 against adjacent colours (1.4.11).",
        "**Use of colour**: colour must not be the only visual way information is shown (1.4.1)."
      ]},
      "Look back at the contrast column above. On white, Okabe–Ito yellow (1.32:1), orange (2.25:1) and sky blue (2.31:1) fall below 3:1. On a near-black background (`#121212`) the picture flips: yellow reaches about 14:1, but blue drops to about 3.6:1 and black disappears. Colour-blind safe and high contrast are two different tests, and a chart needs to pass both.",
      "W3C’s explanation of criterion 1.4.11 gives practical fixes. Lines in a line chart need 3:1 against the background but not against each other. Neighbouring pie slices need 3:1 against each other, or a contrasting border, or visible labels and values that carry the same information. Thin lines look fainter than their colour suggests, so avoid very thin ones. A heat map whose colour gradient is the measurement counts as “essential” and is exempt, though a data table still helps.",
      {tip:"Wilke’s trick: use two shades of each colour, a light one for filled areas and a darker one for lines, outlines and text. Check any pair of hex codes with a free contrast checker such as WebAIM’s."}
    ]},
    {h:"Redundant coding and direct labels", body:[
      "The surest fix is to stop colour carrying the meaning alone. Wilke calls this **redundant coding**: show the same information in two ways.",
      {fig:'<svg viewBox="0 0 340 310"><text x="170" y="18" text-anchor="middle">Weekend visitors (thousands, invented)</text><path class="d-soft" d="M40,230 L250,230" stroke-width="1"/><text class="s" x="34" y="234" text-anchor="end">0</text><path class="d-soft" d="M40,182.5 L250,182.5" stroke-width="1"/><text class="s" x="34" y="186.5" text-anchor="end">2</text><path class="d-soft" d="M40,135 L250,135" stroke-width="1"/><text class="s" x="34" y="139" text-anchor="end">4</text><path class="d-soft" d="M40,87.5 L250,87.5" stroke-width="1"/><text class="s" x="34" y="91.5" text-anchor="end">6</text><path class="d-soft" d="M40,40 L250,40" stroke-width="1"/><text class="s" x="34" y="44" text-anchor="end">8</text><path class="d-rose" d="M40,106.5 L82,97 L124,85.1 L166,68.5 L208,54.2 L250,42.4" fill-opacity="0" stroke-width="2.5"/><circle class="d-rose" cx="40" cy="106.5" r="5" stroke-width="2"/><circle class="d-rose" cx="82" cy="97" r="5" stroke-width="2"/><circle class="d-rose" cx="124" cy="85.1" r="5" stroke-width="2"/><circle class="d-rose" cx="166" cy="68.5" r="5" stroke-width="2"/><circle class="d-rose" cx="208" cy="54.2" r="5" stroke-width="2"/><circle class="d-rose" cx="250" cy="42.4" r="5" stroke-width="2"/><text x="260" y="46.4">Riverside</text><path class="d-lup" d="M40,132.6 L82,127.9 L124,130.2 L166,120.8 L208,116 L250,108.9" fill-opacity="0" stroke-width="2.5" stroke-dasharray="7 4"/><rect class="d-lup" x="35.5" y="128.1" width="9" height="9" stroke-width="2"/><rect class="d-lup" x="77.5" y="123.4" width="9" height="9" stroke-width="2"/><rect class="d-lup" x="119.5" y="125.8" width="9" height="9" stroke-width="2"/><rect class="d-lup" x="161.5" y="116.3" width="9" height="9" stroke-width="2"/><rect class="d-lup" x="203.5" y="111.5" width="9" height="9" stroke-width="2"/><rect class="d-lup" x="245.5" y="104.4" width="9" height="9" stroke-width="2"/><text x="260" y="112.9">Hilltop</text><path class="d-gold" d="M40,158.8 L82,163.5 L124,161.1 L166,168.2 L208,173 L250,177.8" fill-opacity="0" stroke-width="2.5" stroke-dasharray="2 4"/><path class="d-gold" d="M40,152.8 L45.5,162.8 L34.5,162.8 Z" stroke-width="2"/><path class="d-gold" d="M82,157.5 L87.5,167.5 L76.5,167.5 Z" stroke-width="2"/><path class="d-gold" d="M124,155.1 L129.5,165.1 L118.5,165.1 Z" stroke-width="2"/><path class="d-gold" d="M166,162.2 L171.5,172.2 L160.5,172.2 Z" stroke-width="2"/><path class="d-gold" d="M208,167 L213.5,177 L202.5,177 Z" stroke-width="2"/><path class="d-gold" d="M250,171.8 L255.5,181.8 L244.5,181.8 Z" stroke-width="2"/><text x="260" y="181.8">Old Mill</text><path class="d-ink" d="M40,36 L40,230 L250,230" fill="none" stroke-width="1.5"/><text class="s" x="40" y="246" text-anchor="middle">Mar</text><text class="s" x="82" y="246" text-anchor="middle">Apr</text><text class="s" x="124" y="246" text-anchor="middle">May</text><text class="s" x="166" y="246" text-anchor="middle">Jun</text><text class="s" x="208" y="246" text-anchor="middle">Jul</text><text class="s" x="250" y="246" text-anchor="middle">Aug</text><text class="s" x="170" y="270" text-anchor="middle">Names sit at the line ends, and each line</text><text class="s" x="170" y="285" text-anchor="middle">has its own marker and dash pattern, so</text><text class="s" x="170" y="300" text-anchor="middle">nobody needs to match colours to a legend.</text></svg>', alt:"Line chart of invented weekend visitors, in thousands, at three parks from March to August. Riverside rises from 5.2 to 7.9, Hilltop from 4.1 to 5.1, and Old Mill falls from 3.0 to 2.2. Each line has its own marker shape (circle, square, triangle) and dash style, and its name is written at its right-hand end instead of in a legend.", cap:"Readable in colour, in greyscale and for colour-blind readers."},
      {list:[
        "**Shapes and line styles**: circles, squares and triangles for points; solid, dashed and dotted lines, used sparingly because dashes add visual noise.",
        "**[[direct-label|Direct labels]]**: names at the ends of lines and values on bars, so nobody has to match colours to a legend. Wilke: whenever possible, design figures that don’t need a legend.",
        "**Legend order that matches the data.** If the lines run top to bottom as Riverside, Hilltop, Old Mill, list them in that order. Software usually sorts legends alphabetically."
      ]},
      "Colour meanings vary by culture and context, too. Red often signals danger or loss, but on mainland China’s stock markets red marks prices going up. Say what each colour means in a label or legend instead of relying on convention.",
      {key:"Design so the chart works in greyscale. Then colour is a bonus, not a requirement."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A colour-blind-safe palette makes my chart accessible.”** It helps with one test. You still need enough contrast, labels and a text alternative.",
        "**“More colours show more information.”** Past about five categories, colours slow readers down. Label directly or group categories.",
        "**“Rainbow scales show more detail.”** They show false detail: jumps in lightness that aren’t in the data.",
        "**“Red against green is the clearest contrast.”** For people with the most common colour-vision deficiencies, it’s one of the worst.",
        "**“Colour-blind people see in black and white.”** Most see colours but confuse some pairs. Complete absence of colour vision is rare."
      ]}
    ]}
   ],
   try:[
    {id:"t3u4-l3-x1", type:"sort", q:"Which kind of palette fits each dataset?", buckets:["Qualitative","Sequential","Diverging"], items:[
      {t:"Six bus companies’ punctuality on one chart", b:0, why:"Companies are unordered groups: distinct hues, none standing out."},
      {t:"Average rent per square metre in each district", b:1, why:"One quantity from low to high, with no meaningful middle: light to dark."},
      {t:"Change in rent since last year, from −8% to +15%", b:2, why:"Values run in two directions from a meaningful midpoint, 0%."},
      {t:"Percentage voting yes in each area, where 50% decides the result", b:2, why:"50% is a meaningful midpoint (majority yes or no), so a diverging scale centred on 50% fits."},
      {t:"Number of street trees per kilometre of road", b:1, why:"Fewer to more, no midpoint: sequential."},
      {t:"Three bird species in a scatterplot", b:0, why:"Species are unordered categories."}
    ]},
    {id:"t3u4-l3-x2", type:"mcq", q:"Amara uses the Okabe–Ito palette for a line chart on a white background. One series is drawn as a thin yellow `#F0E442` line. A colleague says it’s hard to see. Why, if the palette is colour-blind safe?", options:[
      {t:"Colour-blind safety is about telling colours apart; the yellow’s contrast with white is only about 1.3:1, far below the 3:1 WCAG asks for graphics", ok:true, why:"Two separate tests. Use a darker colour for thin lines on white, or thicken the line and add a darker outline or direct label."},
      {t:"The Okabe–Ito palette isn’t really colour-blind safe", why:"It was designed for exactly that and stays distinguishable for common types. The problem is contrast with the background."},
      {t:"Yellow lines are banned by WCAG", why:"No colour is banned. WCAG sets contrast ratios, and this yellow on white doesn’t meet 3:1."},
      {t:"Thin lines always pass contrast checks", why:"The opposite: thin lines look fainter than their colour suggests, so they need more contrast, not less."}
    ]},
    {id:"t3u4-l3-x3", type:"number", q:"Using the figures of about 8% of men and 0.5% of women, roughly how many people in a group of 1,000 men and 1,000 women would have some colour-vision deficiency?", answer:85, tol:1, unit:"people", why:"Men: 8% of 1,000 = 80. Women: 0.5% of 1,000 = 5. Total **85** people, about 4% of the 2,000.", wrongs:[
      {v:80, tol:0, why:"That’s only the men. Add 0.5% of the 1,000 women: 5 more."},
      {v:170, tol:1, why:"That applies 8.5% to all 2,000 people. The two percentages apply to different groups of 1,000."},
      {v:160, tol:0, why:"That applies the men’s 8% to everyone. Women’s rate is much lower, 0.5%."}
    ]},
    {id:"t3u4-l3-x4", type:"mcq", q:"Tomás’s map of change in library visits uses red for falls, green for rises and white for no change. What’s the best improvement?", options:[
      {t:"Switch to a colour-blind-friendly diverging pair, such as orange to blue, keep the light midpoint at 0%, and check it in a simulator", ok:true, why:"Red–green is indistinguishable for the most common colour-vision deficiencies. A safer pair with balanced darkening keeps the diverging meaning."},
      {t:"Use a rainbow scale so every value gets its own colour", why:"Rainbow scales have uneven lightness and no clear midpoint, and they still contain red and green."},
      {t:"Make the reds and greens brighter", why:"Brightness doesn’t solve red–green confusion; the hues still look alike to many readers."},
      {t:"Switch to a sequential scale from light to dark green", why:"That loses the two directions. Falls and rises would look like low and high on one scale."}
    ]},
    {id:"t3u4-l3-x5", type:"spot", q:"Ana’s chart brief for a report. Tap each colour choice that will cause problems.", ask:"will cause problems", parts:[
      "Line chart of ", {t:"12 regions, each in its own colour, with a legend", flag:true, why:"Far beyond the 3–5 categories colour handles well. Highlight the regions that matter, grey the rest, and label directly."},
      "; ", {t:"the legend in alphabetical order", flag:true, why:"Match the legend to the order of the lines, or better, label the lines directly."},
      ". Bar chart of rainfall: ", {t:"every region in light grey except the two discussed", flag:false, why:"Good: a highlight palette that focuses attention."},
      ". Map of average temperature: ", {t:"a rainbow scale", flag:true, why:"Uneven lightness creates false boundaries. Use a perceptually even sequential scale such as viridis."},
      ". Annotations: ", {t:"pale yellow text on white", flag:true, why:"Text needs at least 4.5:1 contrast; pale yellow on white is far below."},
      "; ", {t:"dark grey text, `#595959` on white (7:1)", flag:false, why:"Comfortably above the 4.5:1 text minimum."},
      "."
    ]},
    {id:"t3u4-l3-x6", type:"match", q:"Match each colour problem with the best fix.", pairs:[
      ["Readers keep looking back and forth between lines and legend","Label each line at its end","Direct labels remove the matching task."],
      ["The chart is unreadable when printed in black and white","Add marker shapes or line styles","Redundant coding carries the meaning without colour."],
      ["Light orange bars barely show on white","Add a darker outline, or use a darker shade","Bars need 3:1 against adjacent colours; an outline provides it."],
      ["Two neighbouring pie slices look alike","Add contrasting borders and label each slice","W3C’s suggested fixes for adjacent slices: borders, or labels and values."],
      ["A map of change since last year uses one colour from light to dark","Use a diverging scale centred on 0%","Changes run in two directions from a meaningful midpoint."]
    ]},
    {id:"t3u4-l3-x7", type:"mcq", q:"Priya’s bar chart of 20 towns colours each bar by which of five regions it’s in. In Chrome’s Emulate vision deficiencies setting, with deuteranopia selected, two of the five region colours look the same. What should she do?", options:[
      {t:"Change one of the two colours (an Okabe–Ito pair often works) and also label the regions directly, then check again", ok:true, why:"Fix the clash and add a second channel, so the chart works even if a colour pair is confused."},
      {t:"Ignore it: deuteranopia is too rare to matter", why:"Red–green types are the most common colour-vision deficiencies, affecting several percent of readers."},
      {t:"Make all 20 bars the same colour", why:"That removes the clash but also removes the regions, which are what the colours were there to show."},
      {t:"Add a note asking colour-blind readers to use a simulator", why:"The designer should fix the chart; readers shouldn’t need special tools."}
    ]}
   ],
   apply:{intro:"Recolour a chart, then test it. Use any chart from Lessons 1–2, or the three-park data: Riverside 5.2, 5.6, 6.1, 6.8, 7.4, 7.9; Hilltop 4.1, 4.3, 4.2, 4.6, 4.8, 5.1; Old Mill 3.0, 2.8, 2.9, 2.6, 2.4, 2.2 (March to August).", tasks:[
     {t:"Recolour a chart with Okabe–Ito hex codes", app:{
       ms:["Click one line or set of bars so the whole series is selected, right-click it and choose **Format Data Series**.","Under **Fill & Line**, open the **Color** menu for the line (or fill) and choose **More Colors**.","On the **Custom** tab, type a hex code such as `0072B2` in the **Hex** box and click **OK**. Repeat with `D55E00` and `009E73` for the other series.","Delete the legend and add a text box or data label with each series’ name next to it. (Steps are for desktop Excel; Excel for the web offers fewer colour options.)"],
       google:["Double-click the chart and open **Customize → Series**.","Choose a series from the drop-down list, open **Line color** (or **Fill color**) and click **Custom**.","Type a hex code such as `#0072B2` and click **OK**. Repeat with `#D55E00` and `#009E73` for the others.","Under **Legend**, set the position to **None** if every series can be labelled directly (for example with **Data labels** on the last point)."],
       libre:["Double-click the chart to edit it, then double-click one series to open **Data Series**.","On the **Line** tab (or **Area** tab for bars), choose **Color**, then **Custom Color…**, and type a hex code such as `0072B2` in the **Hex** field.","Repeat with `D55E00` and `009E73` for the other series.","Remove the legend (**Insert → Legend**, untick **Display legend**) and label the series with text instead."],
       apple:["Click one bar or line to select that series, then open the **Format** sidebar and click **Style**.","Click the colour well next to the fill or stroke, then open the colour window and choose the **Color Sliders** pane with **RGB Sliders**.","Type `0072B2` in the **Hex Color #** box. Repeat with `D55E00` and `009E73`.","Turn off the legend in the **Chart** tab and label each series with a text box instead."]
     }},
     {t:"Test the chart for colour-vision deficiency and greyscale", how:{
       win:["Put your chart on a web page or open it as an image in Chrome (drag the image file into a Chrome tab).","Press [[kbd:F12]] to open developer tools, then [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:P]], type `rendering` and choose **Show Rendering**.","In **Emulate vision deficiencies**, try **Protanopia**, **Deuteranopia**, **Tritanopia** and **Achromatopsia**.","Greyscale for the whole screen: **Settings → Accessibility → Color filters**, turn on **Color filters** and pick **Grayscale**."],
       mac:["Open the chart image in Chrome (drag it into a tab).","Press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]] to open developer tools, then [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:P]], type `rendering` and choose **Show Rendering**.","In **Emulate vision deficiencies**, try each option.","Greyscale for the whole screen: **System Settings → Accessibility → Display → Color filters**, choose **Grayscale**."],
       chromeos:["Open the chart image in Chrome.","Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]] for developer tools, then [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:P]], type `rendering` and choose **Show Rendering**.","In **Emulate vision deficiencies**, try each option.","Greyscale for the whole screen: **Settings → Accessibility → Display and magnification**, turn on **Color correction** and choose the greyscale option (names can vary between ChromeOS versions)."],
       phone:["Phones don’t have Chrome’s developer tools, but greyscale works.","iPhone: **Settings → Accessibility → Display & Text Size → Color Filters**, turn on **Color Filters** and choose **Grayscale**.","Android: on many phones, **Settings → Accessibility → Colour and motion → Colour correction → Greyscale** (names and places vary by maker).","Look at your chart, then turn the filter off again."]
     }, write:"Which series became hard to tell apart, and what did you change?"},
     {t:"Check the contrast of your chart colours", how:["Open a free contrast checker such as [WebAIM’s Contrast Checker](https://webaim.org/resources/contrastchecker/).","Enter each line or bar colour as the foreground and your background colour (white is `#FFFFFF`).","Graphics need at least 3:1; text at least 4.5:1. Note which colours fail.","For each failing colour, choose a darker shade or add a dark outline, and check again."]}
   ], proof:"A chart recoloured with chosen hex codes and direct labels, a note on what the simulator or greyscale test showed, and a list of contrast ratios for your colours."},
   read:[
     {book:"wilke", where:"Chapter 4, “Color scales” (Sections 4.1–4.3: colour to distinguish, to represent data values, to highlight)"},
     {book:"wilke", where:"Chapter 19, “Common pitfalls of color use”, especially Section 19.3 “Not designing for color-vision deficiency”", note:"Includes the Okabe–Ito palette table with hex codes."},
     {book:"wilke", where:"Chapter 20, “Redundant coding” (Sections 20.1 “Designing legends with redundant coding” and 20.2 “Designing figures without legends”)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u4-l4", title:"Misleading charts and honest uncertainty", minutes:60,
   hook:{q:"A designer shows a value that doubled by doubling the width of a circle. How many times bigger is the new circle’s area?", options:["Twice as big","About 1.4 times as big","Four times as big","Exactly the same, if the numbers are labelled"], answer:2, reveal:"**Four times as big.** Area grows with the square of the width: 2 × 2 = 4. We read circles by their area (though not very precisely), so the doubling is drawn as four times the ink. The honest circle is only about 1.41 times wider. This lesson collects tricks like this one, and then turns to a quieter way charts mislead: by hiding how uncertain their numbers are."},
   goals:[
     "Spot area, 3D, time-window, cumulative, totals-versus-rates and scale tricks, and fix each one",
     "Explain why leaving out uncertainty can mislead",
     "Read and label error bars correctly: standard deviation, standard error, confidence interval",
     "Choose uncertainty displays for expert and general audiences"
   ],
   learn:[
    {h:"A field guide to chart tricks", body:[
      {lead:"Most misleading charts don’t get the numbers wrong. They make choices about how the numbers are drawn."},
      "Track 1’s Unit 6 showed the classic tricks ({{misleading-numbers}}). Here is a fuller field guide, each with its fix:",
      {table:[
        ["Trick","What it does","Honest fix"],
        ["Bar axis not at zero","Exaggerates differences","Start at 0, or use dots"],
        ["Circles or icons scaled by width","Doubling looks like ×4","Scale the area, or use bars"],
        ["3D and perspective","Front parts look bigger","Flat 2D"],
        ["Hand-picked start or end date","A blip becomes “the trend”","Show the full period, or explain"],
        ["Cumulative totals","Always rise, hiding slowdowns","Show each period’s value"],
        ["Totals on a map","Big populations dominate","Map rates per person"],
        ["Different scales in side-by-side panels","Small changes look as big as large ones","Shared axes"],
        ["Two y axes","Any lines can be made to cross","Index to 100, or split (Lesson 2)"],
        ["No uncertainty shown","Estimates look exact","Error bars, ranges, words"]
      ]},
      "Unit 1 of this track covers the number side ([[per-capita|per-person rates]], [[cherry-picking]]). This lesson takes the chart-specific tricks, then uncertainty."
    ]},
    {h:"Areas and 3D: when our eyes do the maths wrong", body:[
      "Circles, squares and icons are read by their area, and area grows with the square of the width. Double a circle’s radius and its area is four times bigger, so a value that doubled is drawn twice as big as it should be.",
      {fig:'<svg viewBox="0 0 340 254"><text x="170" y="18" text-anchor="middle">Showing 10 and 20 with circles</text><circle class="d-sage" cx="52" cy="120" r="30" stroke-width="2"/><circle class="d-sage" cx="160" cy="120" r="42.4" stroke-width="2"/><circle class="d-rose" cx="270" cy="120" r="60" stroke-width="2"/><text x="52" y="124" text-anchor="middle">10</text><text x="160" y="124" text-anchor="middle">20</text><text x="270" y="124" text-anchor="middle">20?</text><text class="s" x="52" y="210" text-anchor="middle">r = 30</text><text class="s" x="160" y="210" text-anchor="middle">r = 42 (×1.41)</text><text class="s" x="270" y="210" text-anchor="middle">r = 60 (×2)</text><text class="s" x="160" y="228" text-anchor="middle">Area ×2: honest</text><text class="s" x="270" y="228" text-anchor="middle">Area ×4: drawn</text><text class="s" x="270" y="243" text-anchor="middle">four times as big</text></svg>', alt:"Three circles. A green circle of radius 30 labelled 10. A green circle of radius 42, 1.41 times wider, labelled 20 and marked area times 2, honest. A rose circle of radius 60, twice as wide, labelled 20 with a question mark and marked area times 4, drawn four times as big.", cap:"To double the area, multiply the radius by √2 ≈ 1.41, not by 2."},
      {ex:"To show 10 and 20 honestly, the area must double, so the radius grows by √2 ≈ 1.41: from 30 to 42.4 units.\nTo show a value three times bigger, multiply the radius by √3 ≈ 1.73.\nIn general: new radius = old radius × √(new value ÷ old value).", label:"Worked example: sizing circles"},
      "Many chart tools scale bubbles by area automatically, but some offer a radius option, and a picture resized by hand is easy to get wrong. Even honest areas are harder to compare than lengths (Lesson 1), so for precise comparisons use bars or dots; keep bubbles for adding a third variable to a scatterplot.",
      "3D is worse. Wilke tilts a pie of 25% and 75% in 3D: the slice nearer the viewer looks bigger than it is. In a 3D bar chart of Titanic passengers, the bars stand away from the gridlines at the back and look shorter than they are: 322 first-class passengers looked like fewer than 300. His conclusion: avoid decorative 3D entirely. 3D can make sense for genuinely three-dimensional data that viewers can rotate (interactively or as an animation), or for showing real 3D objects such as the relief of a mountainous island."
    ]},
    {h:"Choices that change the story", body:[
      {list:[
        "**Time windows.** Start a chart in a crisis year and any recovery looks dramatic; end it at a peak and a fall disappears. Ask why it starts and ends where it does, and whether a longer series exists. Honest charts show the full available range, or say why not.",
        "**Cumulative charts.** A running total of positive numbers can only rise, so it always looks like growth, even when each month’s figure is shrinking. Show the monthly values, or both.",
        "**Totals on maps.** A map of total burglaries mostly shows where people live. Colour by a rate, such as burglaries per 1,000 homes, and say so.",
        "**Bins and colour classes.** Histograms (Lesson 1) and choropleth maps group values; moving the breaks can create or hide patterns. Try a few, and report what you used.",
        "**Smoothing.** A smoothed trend line is a summary, not the data. Wilke warns that the same data can be smoothed in many different ways, so show the points too."
      ]},
      {ex:"New choir members per month: 40, 30, 20, 10.\nRunning total: 40, 70, 90, 100.\n\nThe cumulative line still climbs every month, while sign-ups have fallen by three quarters (from 40 to 10).", label:"Worked example: a running total hides a slowdown"},
      {key:"For every chart, ask: what choice did the maker take, and would another reasonable choice change the message?"}
    ]},
    {h:"Uncertainty: the missing ingredient", body:[
      "Wilke opens his uncertainty chapter with a warning: when we see a point drawn in one place, we read it as exact. Yet nearly every number from a sample, survey, model or measurement has uncertainty.",
      "A survey of 1,000 people estimates something about millions. The [[standard-error|standard error]] says how much such an estimate typically varies from one sample to another, and a [[confidence-interval|confidence interval]] gives a range of values compatible with the data (Track 4, Unit 3). For polls, the [[margin-of-error|margin of error]] is usually half the width of a 95% interval (Track 4, Unit 8).",
      "Leaving uncertainty out can mislead as surely as a truncated axis. Two poll results of 48% and 51% look like a clear lead, until you learn each has a margin of error of about 3 [[percentage-point|percentage points]]. Unit 1 of this track showed how to read such numbers in the news ({{estimates-uncertainty-news}}); here the question is how to draw them."
    ]},
    {h:"Error bars: always say what they show", body:[
      "An [[error-bar|error bar]] is a line through an estimate that shows a range. The trouble is that bars that look the same can mean very different things.",
      {fig:'<svg viewBox="0 0 340 324"><text x="170" y="18" text-anchor="middle">Hours of sleep, 25 people (invented)</text><circle class="d-softf" cx="58.8" cy="50" r="3.2"/><circle class="d-softf" cx="58.8" cy="43" r="3.2"/><circle class="d-softf" cx="64.6" cy="50" r="3.2"/><circle class="d-softf" cx="116.4" cy="50" r="3.2"/><circle class="d-softf" cx="116.4" cy="43" r="3.2"/><circle class="d-softf" cx="133.7" cy="50" r="3.2"/><circle class="d-softf" cx="145.2" cy="50" r="3.2"/><circle class="d-softf" cx="156.7" cy="50" r="3.2"/><circle class="d-softf" cx="162.5" cy="50" r="3.2"/><circle class="d-softf" cx="162.5" cy="43" r="3.2"/><circle class="d-softf" cx="162.5" cy="36" r="3.2"/><circle class="d-softf" cx="179.8" cy="50" r="3.2"/><circle class="d-softf" cx="191.3" cy="50" r="3.2"/><circle class="d-softf" cx="197" cy="50" r="3.2"/><circle class="d-softf" cx="202.8" cy="50" r="3.2"/><circle class="d-softf" cx="202.8" cy="43" r="3.2"/><circle class="d-softf" cx="208.6" cy="50" r="3.2"/><circle class="d-softf" cx="208.6" cy="43" r="3.2"/><circle class="d-softf" cx="214.3" cy="50" r="3.2"/><circle class="d-softf" cx="214.3" cy="43" r="3.2"/><circle class="d-softf" cx="214.3" cy="36" r="3.2"/><circle class="d-softf" cx="220.1" cy="50" r="3.2"/><circle class="d-softf" cx="243.1" cy="50" r="3.2"/><circle class="d-softf" cx="254.6" cy="50" r="3.2"/><circle class="d-softf" cx="260.4" cy="50" r="3.2"/><text class="s" x="170" y="70" text-anchor="middle">Each dot is one person</text><text class="s" x="30" y="100">Mean ± 1 SD (spread of people)</text><path class="d-rose" d="M116.6,116 L231.4,116 M116.6,110 L116.6,122 M231.4,110 L231.4,122" stroke-width="2.5" fill-opacity="0"/><circle class="d-inkf" cx="174" cy="116" r="4"/><text class="s" x="239.4" y="120">6.0–8.0</text><text class="s" x="30" y="150">Mean ± 1 SE (precision of the mean)</text><path class="d-lup" d="M162.5,166 L185.5,166 M162.5,160 L162.5,172 M185.5,160 L185.5,172" stroke-width="2.5" fill-opacity="0"/><circle class="d-inkf" cx="174" cy="166" r="4"/><text class="s" x="193.5" y="170">6.8–7.2</text><text class="s" x="30" y="200">95% confidence interval for the mean</text><path class="d-sage" d="M150.3,216 L197.7,216 M150.3,210 L150.3,222 M197.7,210 L197.7,222" stroke-width="2.5" fill-opacity="0"/><circle class="d-inkf" cx="174" cy="216" r="4"/><text class="s" x="205.7" y="220">6.6–7.4</text><path class="d-ink" d="M30,244 L318,244" stroke-width="1.5"/><path class="d-ink" d="M58.8,244 L58.8,249" stroke-width="1"/><text class="s" x="58.8" y="262" text-anchor="middle">5</text><path class="d-ink" d="M116.4,244 L116.4,249" stroke-width="1"/><text class="s" x="116.4" y="262" text-anchor="middle">6</text><path class="d-ink" d="M174,244 L174,249" stroke-width="1"/><text class="s" x="174" y="262" text-anchor="middle">7</text><path class="d-ink" d="M231.6,244 L231.6,249" stroke-width="1"/><text class="s" x="231.6" y="262" text-anchor="middle">8</text><path class="d-ink" d="M289.2,244 L289.2,249" stroke-width="1"/><text class="s" x="289.2" y="262" text-anchor="middle">9</text><text class="s" x="170" y="278" text-anchor="middle">Hours</text><text class="s" x="170" y="298" text-anchor="middle">Same data, three very different bars.</text><text class="s" x="170" y="313" text-anchor="middle">Always say which one you drew.</text></svg>', alt:"A strip of 25 dots showing invented hours of sleep from 5.0 to 8.5, mean 7.0. Below, three error bars around the mean: mean plus or minus one standard deviation runs from 6.0 to 8.0; mean plus or minus one standard error runs from 6.8 to 7.2; the 95% confidence interval for the mean runs from 6.6 to 7.4.", cap:"Three error bars from the same data."},
      {ex:"25 people’s sleep: mean 7.0 hours, sample standard deviation (SD) 1.0 hour.\n\nMean ± 1 SD: 6.0 to 8.0 hours. This describes people: most individuals sleep somewhere in this range.\nStandard error (SE) = SD ÷ √n = 1.0 ÷ √25 = 1.0 ÷ 5 = 0.2. Mean ± 1 SE: 6.8 to 7.2.\n95% confidence interval ≈ mean ± 2 SE: about 6.6 to 7.4. (More precisely ± 2.06 SE for a sample of 25, using the t distribution.)\n\nSame data: the SD bar is five times as long as the SE bar.", label:"Worked example: three bars from one sample"},
      "Wilke’s rule: whenever you use error bars, say what they represent and at what confidence level, in the legend or caption. “Error bars show 95% confidence intervals” takes one line.",
      "SD bars ([[standard-deviation]]) describe how spread out the individuals are. SE bars and confidence intervals describe how precisely the mean is known. Bigger samples shrink the SE and the interval, because of the √n, but not the SD.",
      {warn:"Spreadsheet error-bar options can surprise you. In Excel and LibreOffice Calc, the built-in standard deviation and standard error options are calculated from the plotted values themselves (Excel’s help gives the formulas, which use the values of the series in the chart), not from the raw data behind each bar, so every bar gets the same amount. LibreOffice’s help adds that its standard-deviation bars are centred on the series mean, not on each value. For real uncertainty, calculate each margin yourself and use a custom value or cell range."}
    ]},
    {h:"Overlap, bands and pictures of chance", body:[
      "A common rule of thumb says “if the error bars overlap, the difference isn’t real”. Wilke calls such rules unreliable and says to avoid them. The right check is an interval for the difference itself.",
      {ex:"Group A: mean 10, SE 1. Group B: mean 13, SE 1 (two independent groups).\n95% intervals (± 1.96 SE): A from 8.0 to 12.0, B from 11.0 to 15.0. They overlap, from 11.0 to 12.0.\n\nThe difference, 3, has its own SE: √(1² + 1²) ≈ 1.41. Its 95% interval is 3 ± 1.96 × 1.41, about 0.2 to 5.8, which doesn’t include 0.\n\nOverlapping intervals, yet a clear difference.", label:"Worked example: overlap isn’t the test"},
      "For trend lines, a [[confidence-band|confidence band]] shades the range of lines compatible with the data. It’s wider towards the ends, because the slope is less certain there.",
      "Experts read error bars quickly, but many readers take them as hard limits (“the true value can’t be outside”). Wilke calls this a deterministic construal error. For general audiences, try:",
      {list:[
        "**[[frequency-framing|Frequency framing]]**: show a chance as counts, such as 13 filled squares out of 100 for a 13% chance.",
        "**Graded error bars**: several confidence levels at once, darker for the narrower ones, so the range reads as “more and less likely”, not as a wall.",
        "**Words with the numbers**: “between 6.6 and 7.4 hours, most likely around 7”.",
        "**Animated outcomes online**: hypothetical outcome plots show one equally likely result after another."
      ]},
      {fig:'<svg viewBox="0 0 340 324"><text x="170" y="18" text-anchor="middle">A 13% chance, as 13 squares out of 100</text><rect class="d-soft" x="46.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="71.5" y="34" width="22" height="22" rx="3"/><rect class="d-soft" x="96.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="246.5" y="34" width="22" height="22" rx="3"/><rect class="d-soft" x="271.5" y="34" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="46.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="71.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="196.5" y="59" width="22" height="22" rx="3"/><rect class="d-soft" x="221.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="59" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="46.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="71.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="84" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="46.5" y="109" width="22" height="22" rx="3"/><rect class="d-soft" x="71.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="121.5" y="109" width="22" height="22" rx="3"/><rect class="d-soft" x="146.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="109" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="46.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="71.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="221.5" y="134" width="22" height="22" rx="3"/><rect class="d-soft" x="246.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="134" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="46.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="71.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="159" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="46.5" y="184" width="22" height="22" rx="3"/><rect class="d-soft" x="71.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="184" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="271.5" y="184" width="22" height="22" rx="3"/><rect class="d-inkf" x="46.5" y="209" width="22" height="22" rx="3"/><rect class="d-soft" x="71.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="146.5" y="209" width="22" height="22" rx="3"/><rect class="d-inkf" x="171.5" y="209" width="22" height="22" rx="3"/><rect class="d-soft" x="196.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="221.5" y="209" width="22" height="22" rx="3"/><rect class="d-soft" x="246.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="209" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-inkf" x="46.5" y="234" width="22" height="22" rx="3"/><rect class="d-soft" x="71.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="234" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="46.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="71.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="96.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="121.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="146.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="171.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="196.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="221.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="246.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><rect class="d-soft" x="271.5" y="259" width="22" height="22" rx="3" stroke-width="1.5"/><text class="s" x="170" y="298" text-anchor="middle">Pick a square with your eyes shut: a filled</text><text class="s" x="170" y="313" text-anchor="middle">one is unlikely, but clearly possible.</text></svg>', alt:"A grid of 100 squares, 10 by 10, with 13 filled squares scattered among 87 empty outlined ones, showing a 13% chance.", cap:"A 13% chance as 13 squares in 100: unlikely, but clearly possible."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“If error bars overlap, there’s no difference.”** Overlap is a poor test. Check the interval for the difference.",
        "**“Error bars show the lowest and highest values.”** They usually show an SD, an SE or a confidence interval, and the label should say which.",
        "**“SD and SE are interchangeable.”** SD describes individuals; SE describes the precision of the mean. The SD bar is √n times longer.",
        "**“Showing uncertainty makes a chart look weak.”** It tells readers how much weight the numbers can bear. That’s strength, not weakness.",
        "**“A bigger sample shrinks the spread of the data.”** It shrinks the SE and the confidence interval, not the SD."
      ]}
    ]}
   ],
   try:[
    {id:"t3u4-l4-x1", type:"number", q:"A bubble chart shows a town of 10,000 people as a circle of radius 20 mm. To draw a town of 30,000 honestly (area proportional to population), by what factor should the radius grow? (Two decimal places.)", answer:1.73, tol:0.01, unit:"times", why:"Area must be 3 times bigger, and area grows with the radius squared, so the radius grows by √3 ≈ **1.73** (to about 34.6 mm).", wrongs:[
      {v:3, tol:0, why:"Tripling the radius makes the area 3 × 3 = 9 times bigger, so the town would look nine times the size."},
      {v:9, tol:0, why:"9 is what the area would grow by if the radius tripled. The area should grow by 3."},
      {v:1.5, tol:0.01, why:"1.5 is half of 3. The factor is the square root of 3, about 1.73."}
    ]},
    {id:"t3u4-l4-x2", type:"spot", q:"A social-media post shares this chart. Tap each feature that misleads.", ask:"misleads", parts:[
      {t:"“Membership is booming!”", flag:false, why:"A headline can be fine; whether it’s true depends on the chart."},
      " A line of ", {t:"total members since 2020 (a running total)", flag:true, why:"A running total can only rise. Monthly new members might be falling."},
      ", drawn in ", {t:"3D, as a thick ribbon", flag:true, why:"Perspective distorts heights. Flat 2D is read more accurately."},
      ", covering ", {t:"every month from 2020 to now", flag:false, why:"Showing the full period is good practice."},
      ", with ", {t:"the source and date in a note below", flag:false, why:"Good practice."},
      ", and ", {t:"no y-axis labels", flag:true, why:"Without axis labels, readers can’t tell what scale or units are shown."},
      "."
    ]},
    {id:"t3u4-l4-x3", type:"mcq", q:"A map shades each region by the total number of bicycle thefts last year. The biggest city is darkest. What’s the most important change?", options:[
      {t:"Shade by thefts per 1,000 residents (or per 1,000 bikes), and say so in the subtitle", ok:true, why:"Totals mostly show where people live. A rate makes regions of different sizes comparable."},
      {t:"Use a rainbow scale so more detail shows", why:"Rainbow scales add false boundaries, and the totals would still mislead."},
      {t:"Make the map 3D so big regions stand out", why:"3D distorts, and big regions already dominate. The fix is the measure, not the look."},
      {t:"Remove the legend to make the map cleaner", why:"Readers need the legend (or labels) to know what the shades mean."}
    ]},
    {id:"t3u4-l4-x4", type:"number", q:"A sample of 36 people has a mean of 50 minutes and a standard deviation of 12 minutes. Using the rule of thumb “95% confidence interval ≈ mean ± 2 SE”, what is the lower end of the interval?", answer:46, tol:0.2, unit:"minutes", why:"SE = SD ÷ √n = 12 ÷ √36 = 12 ÷ 6 = 2. The interval is 50 ± 2 × 2 = 50 ± 4, so the lower end is **46**. (With 1.96 instead of 2 it’s 46.08; with the t value for 35 degrees of freedom, about 45.9.)", wrongs:[
      {v:38, tol:0.2, why:"That subtracts one SD (12). The interval for a mean uses the SE, which is SD ÷ √n."},
      {v:48, tol:0.2, why:"That’s mean − 1 SE. A 95% interval reaches about 2 SE each way."},
      {v:26, tol:0.2, why:"That’s mean − 2 SD, which describes individuals, not the precision of the mean."}
    ]},
    {id:"t3u4-l4-x5", type:"mcq", q:"Kenji compares two independent groups. Their 95% confidence intervals overlap slightly. He writes “no difference between the groups”. What’s the best response?", options:[
      {t:"Overlap doesn’t settle it; calculate a confidence interval for the difference and see whether it includes 0", ok:true, why:"As the worked example shows, intervals can overlap while the interval for the difference excludes 0. Wilke advises against overlap rules."},
      {t:"He’s right: overlapping intervals always mean no difference", why:"Not always. Two intervals each of ± 1.96 SE can overlap even when the difference is statistically clear."},
      {t:"He should switch to SD bars, which overlap less", why:"SD bars are longer, not shorter, and they answer a different question."},
      {t:"He should remove the error bars so the difference is clearer", why:"Hiding uncertainty makes the chart less honest, not clearer."}
    ]},
    {id:"t3u4-l4-x6", type:"match", q:"Match each situation with the most suitable way to show uncertainty.", pairs:[
      ["A scientific paper comparing six group means","Error bars labelled “95% confidence intervals”","Experts read them quickly; the label says what they are."],
      ["A public leaflet saying how likely a side effect is","100 icons with the affected number shaded","Frequency framing makes a probability concrete."],
      ["A trend line through 40 points","A shaded confidence band around the line","Shows the range of compatible lines, wider at the ends."],
      ["A news story on a poll lead of 3 points","The range in words: “between 0 and 6 points”","Plain words stop readers treating an estimate as exact."],
      ["A dashboard describing how much individual customers spend","Bars or a boxplot of the spread of individuals","The question is about individuals, not the precision of a mean."]
    ]},
    {id:"t3u4-l4-x7", type:"mcq", q:"Oluwaseun’s bar chart of average test scores by class has error bars, but the caption says nothing about them. What should the caption add?", options:[
      {t:"What the bars show (SD, SE or a confidence interval, and which level) and how many students are in each class", ok:true, why:"Wilke’s rule: always say what error bars represent. The sample size helps readers judge SE-based bars."},
      {t:"Nothing: all error bars mean the same thing", why:"The same data can give bars of very different lengths depending on whether they show SD, SE or an interval."},
      {t:"The minimum and maximum scores", why:"Error bars rarely show minimum and maximum; if they did, the caption would still need to say so."},
      {t:"An apology for the uncertainty", why:"Uncertainty is normal. Explaining it is enough."}
    ]}
   ],
   apply:{intro:"Put the field guide to work on real charts, then show uncertainty in one of your own.", tasks:[
     {t:"Audit a published chart with the field guide", how:["Find a chart in the news, a report or social media that makes a strong claim.","Go through the field-guide table: axis start, areas or icons, 3D, time window, running totals, totals or rates, shared scales, two y axes, uncertainty.","For each problem you find, write the fix in one line.","If you can find the original data, sketch or make the fixed version."], write:"The chart, the problems you found and your fixes."},
     {t:"Add error bars that show your own margins", app:{
       ms:["Make a small table: groups in A2:A4, means in B2:B4, and the margin you calculated for each (for example 2 × SE) in C2:C4. Insert a column chart of A1:B4.","Click the chart, click the **Chart Elements** button (+), point to **Error Bars** and choose **More Options**. (On a Mac: **Chart Design → Add Chart Element → Error Bars → More Error Bars Options**.)","In **Format Error Bars**, under **Error Amount**, choose **Custom**, click **Specify Value** and select C2:C4 for both the positive and negative error values.","Add a caption or text box: “Error bars show approximate 95% confidence intervals (± 2 SE).”"],
       google:["Make the same small table and insert a **Column chart** of the groups and means.","In the **Chart editor**, open **Customize → Series** and tick **Error bars**.","Choose **Constant** as the type and type the margin, if it’s the same for every bar (as with a poll’s margin of error). For margins that differ by bar, use desktop Excel or LibreOffice Calc, which can read them from cells.","Add a subtitle saying what the error bars show."],
       libre:["Make the same small table and insert a **Column** chart of A1:B4.","Double-click the chart to edit it and choose **Insert → Y Error Bars**.","Choose **Cell Range**, click the shrink button next to **Positive (+)** and select C2:C4; tick **Same value for both**. Click **OK**.","Add a subtitle (**Insert → Titles**) saying what the error bars show."],
       apple:["Make the same small table and add a **2D** column chart.","Select the chart, open the **Format** sidebar and click **Series**.","Open **Error Bars**, choose a type from the pop-up menu, then choose how the values are calculated (for example **Fixed Value**) and type the margin.","Add a caption saying what the error bars show."]
     }},
     {t:"Say one uncertain number three ways", how:["Pick an estimate with a margin, from a poll, a weather forecast or your own data.","Write it as a range in words (“between … and …, most likely around …”).","Draw it as a frequency picture: shade the matching number of squares in a 10 × 10 grid on paper or in a spreadsheet.","Write the caption you would put under a chart with error bars."], write:"Your three versions."}
   ], proof:"An audited chart with fixes, a chart with custom error bars and a caption saying what they show, and one estimate expressed in words, as a frequency picture and as a caption."},
   read:[
     {book:"wilke", where:"Chapter 17, “The principle of proportional ink”, Section 17.3 “Direct area visualizations”, and Chapter 26, “Don’t go 3D”"},
     {book:"wilke", where:"Chapter 16, “Visualizing uncertainty” (Sections 16.1 “Framing probabilities as frequencies”, 16.2 “Visualizing the uncertainty of point estimates” and 16.3 “Visualizing the uncertainty of curve fits”)", note:"The chapter’s comparison of frequentist and Bayesian intervals goes beyond this lesson; Unit 6 covers confidence intervals properly."},
     {book:"wilke", where:"Chapter 14, “Visualizing trends”, Section 14.1 “Smoothing”, and Chapter 21, Section 21.1 “Small multiples”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u4-l5", title:"Titles, notes, accessibility and tools", minutes:60,
   hook:{q:"Which title helps a busy reader most?", options:["Figure 3","Library visits","Chart showing library visits by month in 2025","Visits bounced back after the summer closure and ended the year at a high"], answer:3, reveal:"**The last one.** It says the point, so a reader knows what to look for before they study the lines. Wilke says a figure’s title should convey what the figure is about and the point it makes, and UK government guidance recommends a “statement” title plus a subtitle saying what, where and when. This lesson covers titles, notes, alt text and the tools that make all of it easier."},
   goals:[
     "Write a statement title and a subtitle that says what, where and when",
     "Annotate a chart so readers notice the one thing that matters",
     "Write alt text for a chart and provide the data as a table",
     "Choose a free tool for the job, knowing its free-plan limits and privacy trade-offs"
   ],
   learn:[
    {h:"Titles that say the point", body:[
      {lead:"Readers look at the title first. Make it tell them what to see."},
      "Wilke: every figure needs a title, and its job is to convey what the figure is about and the point it makes. It doesn’t have to be a full sentence, but short sentences that make a clear assertion work well, such as “The most developed countries are the least corrupt”. Don’t begin with “This figure shows…”.",
      "The UK Government Analysis Function recommends **two titles**: a main title that states the point, and a statistical subtitle that says what the data is, the geography and the time period. It also advises putting titles in the text of the page or document rather than only inside the chart image, so screen readers and search tools can use them.",
      {ex:"Weak: “Library visits”\nBetter: “Library visits per month, 2025”\nBest, as two titles:\n  Visits bounced back after the summer closure and ended the year at a high\n  Library visits per month, thousands, 2025", label:"Worked example: from label to statement"},
      "Wilke adds a layout rule: a figure has one title. Either it’s built into the chart, or it’s the first line of the caption underneath, but not both.",
      {warn:"A statement title must be true of the chart. If two things rose together, write “Ice-cream sales and sunburn cases rose together”, not “Ice cream causes sunburn” ([[correlation-claim]]). If the change is small or uncertain, the title should say so."}
    ]},
    {h:"Annotation: point at what matters", body:[
      "An [[annotation-chart|annotation]] is text or a mark added to a chart to explain it: a label on a key value, a shaded period, a reference line for a target or an average, a short note beside an unusual point.",
      {fig:'<svg viewBox="0 0 340 318"><text x="10" y="20">Visits bounced back after the summer</text><text x="10" y="37">closure and ended the year at a high</text><text class="s" x="10" y="56">Library visits per month, thousands, 2025</text><path class="d-soft" d="M36,250 L290,250" stroke-width="1"/><text class="s" x="30" y="254" text-anchor="end">0</text><path class="d-soft" d="M36,207.5 L290,207.5" stroke-width="1"/><text class="s" x="30" y="211.5" text-anchor="end">2</text><path class="d-soft" d="M36,165 L290,165" stroke-width="1"/><text class="s" x="30" y="169" text-anchor="end">4</text><path class="d-soft" d="M36,122.5 L290,122.5" stroke-width="1"/><text class="s" x="30" y="126.5" text-anchor="end">6</text><path class="d-soft" d="M36,80 L290,80" stroke-width="1"/><text class="s" x="30" y="84" text-anchor="end">8</text><rect class="d-gold" x="145.5" y="74" width="35.1" height="176" stroke-width="0" fill-opacity="0.8"/><text class="s" x="163" y="88" text-anchor="middle">Closed</text><text class="s" x="163" y="102" text-anchor="middle">for</text><text class="s" x="163" y="116" text-anchor="middle">repairs</text><path class="d-lup" d="M36,160.8 L59.1,156.5 L82.2,152.2 L105.3,154.4 L128.4,148 L151.5,188.4 L174.5,216 L197.6,145.9 L220.7,135.2 L243.8,131 L266.9,126.8 L290,120.4" fill-opacity="0" stroke-width="2.5"/><circle class="d-lup" cx="290" cy="120.4" r="5" stroke-width="2.5"/><text x="299" y="124.4">6.1</text><path class="d-ink" d="M36,250 L296,250" stroke-width="1.5"/><text class="s" x="36" y="266" text-anchor="middle">J</text><text class="s" x="59.1" y="266" text-anchor="middle">F</text><text class="s" x="82.2" y="266" text-anchor="middle">M</text><text class="s" x="105.3" y="266" text-anchor="middle">A</text><text class="s" x="128.4" y="266" text-anchor="middle">M</text><text class="s" x="151.5" y="266" text-anchor="middle">J</text><text class="s" x="174.5" y="266" text-anchor="middle">J</text><text class="s" x="197.6" y="266" text-anchor="middle">A</text><text class="s" x="220.7" y="266" text-anchor="middle">S</text><text class="s" x="243.8" y="266" text-anchor="middle">O</text><text class="s" x="266.9" y="266" text-anchor="middle">N</text><text class="s" x="290" y="266" text-anchor="middle">D</text><text class="s" x="10" y="292">Source: invented data for this lesson.</text><text class="s" x="10" y="307">The library was shut from 9 June to 20 July.</text></svg>', alt:"Annotated line chart. Title: Visits bounced back after the summer closure and ended the year at a high. Subtitle: Library visits per month, thousands, 2025. Invented values from January to December: 4.2, 4.4, 4.6, 4.5, 4.8, 2.9, 1.6, 4.9, 5.4, 5.6, 5.8 and 6.1. June and July are shaded and labelled Closed for repairs. The December point is labelled 6.1. A note gives the source and the closure dates, 9 June to 20 July.", cap:"A statement title, a subtitle, one shaded annotation, one labelled point and a source note."},
      {list:[
        "**Annotate one to three things**, not everything. Every extra note competes with the others.",
        "**Put the note next to what it explains**, with a short line if needed, so the eye doesn’t travel.",
        "**Label reference lines**: “Target: 90%”, “National average”.",
        "**Keep annotations as accurate as the data.** A shaded “closed” period needs the real dates."
      ]},
      "Wilke’s storytelling chapter adds two ideas. Make a figure for the busiest reader you have, one that shows its point immediately (his section is called “Make a figure for the generals”, after the busy army generals who read his project reports). And when a figure is complex, build up to it: show a simple version first, then add layers."
    ]},
    {h:"Labels, legends, notes and tables", body:[
      {fig:'<svg viewBox="0 0 340 368"><rect class="d-lup" x="10" y="14" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="32">Statement title</text><text class="s" x="22" y="48">says the point</text><rect class="d-lup" x="10" y="64" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="82">Subtitle</text><text class="s" x="22" y="98">what, where, when, units</text><rect class="d-sage" x="10" y="114" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="132">Chart</text><text class="s" x="22" y="148">axes labelled, bars from 0</text><rect class="d-sage" x="10" y="164" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="182">Labels on the data</text><text class="s" x="22" y="198">instead of a legend</text><rect class="d-gold" x="10" y="214" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="232">Annotation</text><text class="s" x="22" y="248">the one thing to notice</text><rect class="d-rose" x="10" y="264" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="282">Source note</text><text class="s" x="22" y="298">who collected it, and when</text><rect class="d-rose" x="10" y="314" width="320" height="42" rx="8" stroke-width="1.5"/><text x="22" y="332">Alt text + data table</text><text class="s" x="22" y="348">for people who can’t see it</text></svg>', alt:"A checklist of seven parts of an accessible chart, top to bottom: statement title (says the point); subtitle (what, where, when, units); the chart (axes labelled, bars from 0); labels on the data (instead of a legend); annotation (the one thing to notice); source note (who collected it, and when); alt text and data table (for people who can’t see it).", cap:"The parts of a chart that can stand on its own."},
      {list:[
        "**Axis titles with units**: “Body mass (g)”, “Visits (thousands)”. Wilke notes some axes explain themselves (country names, years) and don’t need a title; with numbers, give the units.",
        "**Number formats**: thousands separators, the same number of decimal places throughout, a % sign where needed.",
        "**[[direct-label|Direct labels]]** instead of a legend wherever possible (Lesson 3).",
        "**A source note**: who produced the data, when, and a link. Say “invented”, “estimate” or “provisional” where true.",
        "**Method notes**: what was counted, breaks in the series, partial periods."
      ]},
      "Sometimes a table beats a chart, especially when readers need exact values. Wilke’s table rules: no vertical lines; no lines between data rows (light shading of alternate rows is fine); text left-aligned; numbers right-aligned with the same number of decimal places; table captions above the table (figure captions go below)."
    ]},
    {h:"Accessible charts: alt text and data tables", body:[
      "Some readers can’t see your chart: they use a screen reader, or the image doesn’t load. Track 1 covered [[alt-text|alt text]] for images ({{alt-text}}); charts need a little more.",
      {list:[
        "**Short alt text**: the chart type, what it shows, and the main message, in one to three sentences.",
        "**The detail somewhere else**: a data table next to the chart, a downloadable file, or a longer description in the text. The UK guidance says a text alternative can be a written description or a table in an accessible format, and that if you expect sighted readers to read values from the chart, you should give a table.",
        "**Never put the only copy of the title or key numbers inside the image.** Text in an image can’t be resized, searched or read aloud.",
        "**Readable text**: Wilke’s top lesson is that axis labels are usually too small, because nearly all software has poor defaults. Look at your chart at the size readers will see it, on a phone too.",
        "**Colour and contrast**: Lesson 3’s rules, including never using colour as the only clue."
      ]},
      {ex:"Line chart of library visits per month in 2025, in thousands. Visits rose from 4.2 in January to 4.8 in May, fell to 2.9 in June and 1.6 in July while the library was closed for repairs, then recovered to 4.9 in August and climbed to a year high of 6.1 in December.", label:"Worked example: alt text for the annotated chart"},
      {tip:"For interactive charts, check they work with a keyboard. Datawrapper, for example, says its published charts, maps and tables can be navigated with [[kbd:Tab]], [[kbd:Shift]] + [[kbd:Tab]] and [[kbd:Enter]]."}
    ]},
    {h:"Making charts in a spreadsheet", body:[
      "Spreadsheets (Excel, Google Sheets, LibreOffice Calc, Numbers) make bar, line, scatter and pie charts in seconds from a tidy table ([[tidy-data]]; Unit 2’s {{tidy-data-principles}}) and update them when the data change. The settings this unit needs are all there, though names differ:",
      {table:[
        ["Setting","Where to look"],
        ["Axis start and end","The value axis’s format options: minimum and maximum"],
        ["Log scale","The same axis options: a logarithmic or log-scale box"],
        ["Error bars","Chart elements or series options; use custom values"],
        ["Colours","Each series’ fill or line colour; type a hex code"],
        ["Titles and axis titles","Chart elements, or the chart editor’s titles section"],
        ["Alt text","The chart’s right-click or ⋮ menu"]
      ]},
      "What spreadsheets do less well: small multiples (you build each panel and must set the axes to match by hand), direct labels on lines (often manual), and keeping a consistent style across many charts.",
      "On a phone, the spreadsheet apps can create and view charts, but some settings are only in the computer versions. If you can’t find an option on your phone, the Apply tasks work in a browser on a computer, or you can read along."
    ]},
    {h:"Free tools beyond the spreadsheet", body:[
      "Several free, browser-based tools make clean charts with less effort. Plans change often, so check the current terms before relying on one. This summary was checked in November 2026.",
      {table:[
        ["Tool","Free option","Watch out for"],
        ["Datawrapper","Free plan: charts, maps and tables without limits; alt-text field, automatic colour-blind check, optional “Get the data” link","Free charts show “Created with Datawrapper”; PNG is the only export on the free plan"],
        ["Flourish","Free plan: unlimited projects and the full template library; strong on interactive and animated charts","Anything you publish on the free plan is public, with Flourish attribution"],
        ["RAWGraphs","Free and open source; runs in your browser and doesn’t send your data to a server; vector (SVG) output","Fewer reading aids built in; finishing touches may need a drawing app"],
        ["R (ggplot2) or Python","Free, and reproducible: the chart is rebuilt from code","Takes learning; Units 7–8 teach R"]
      ]},
      "Wilke’s chapter on software makes points that outlast any product. Prefer tools that make figures **reproducible**, so you can rebuild them when the data change. Separate exploring (quick, rough charts for yourself) from presenting (polished charts for others). And his summary: the best visualization software is the one that lets you make the figures you need.",
      {warn:"Uploading data to an online tool shares it with that company. Don’t upload personal or confidential data unless you’re allowed to. A spreadsheet on your own device, or a tool like RAWGraphs that works only in the browser, is safer for sensitive data."}
    ]},
    {h:"A final checklist", body:[
      {ol:[
        "**Question → chart**: the type fits the question (Lesson 1).",
        "**Axes**: bars and areas from zero; other ranges labelled; log scales named; no dual axes (Lesson 2).",
        "**Colour**: a clear job, few categories, colour-blind safe, enough contrast, not the only clue (Lesson 3).",
        "**No tricks**: areas, 3D, time window, totals versus rates, shared scales (Lesson 4).",
        "**Uncertainty** shown where it exists, and labelled (Lesson 4).",
        "**Words**: statement title, subtitle with what, where and when, one to three annotations, units, source (this lesson).",
        "**Access**: alt text, a data table, readable text at phone size (this lesson)."
      ]},
      {list:[
        "**“The chart speaks for itself.”** It speaks much more clearly with a title that says the point.",
        "**“Alt text should describe every bar.”** Give the message and key numbers; put full detail in a table.",
        "**“A free plan is free forever.”** Terms and limits change; check before you build a workflow on one.",
        "**“More annotation is more helpful.”** One to three well-placed notes beat a crowded chart."
      ]}
    ]}
   ],
   try:[
    {id:"t3u4-l5-x1", type:"mcq", q:"Sione’s chart shows that, of five food banks, the one in Eastgate handed out the most parcels every month of 2025. Which main title is best?", options:[
      {t:"Eastgate handed out the most parcels every month in 2025", ok:true, why:"A statement title: it says the point, and the chart supports it. The subtitle can then give “Parcels per month, five food banks, 2025”."},
      {t:"Food bank parcels", why:"A label, not a point. Readers must work out the message themselves."},
      {t:"This chart shows parcels handed out by five food banks", why:"Wilke advises against starting with “This figure shows”: it describes the chart instead of saying what it shows."},
      {t:"Eastgate’s food bank is the best run", why:"The chart shows parcels handed out, not how well a food bank is run. A statement title must be supported by the data."}
    ]},
    {id:"t3u4-l5-x2", type:"sort", q:"Where does each piece of text belong?", buckets:["Main title","Subtitle","Note under the chart"], items:[
      {t:"Rents rose fastest in the northern districts", b:0, why:"States the point: that’s the main title."},
      {t:"Median monthly rent, euros, by district, 2020–2025", b:1, why:"What, where, when and units: the statistical subtitle."},
      {t:"Source: city housing survey, published March 2026", b:2, why:"Source details go in a note below the chart."},
      {t:"2021 excludes one district because of a survey error", b:2, why:"A method note: important, but not the headline."},
      {t:"Weekend visitors, thousands, three parks, March–August", b:1, why:"Describes the data, units, place and period."},
      {t:"Weekend visits to Riverside rose by about half between March and August", b:0, why:"A clear assertion the data support: 5.2 to 7.9 thousand is a rise of about 52%."}
    ]},
    {id:"t3u4-l5-x3", type:"spot", q:"Lucía wrote this alt text for a bar chart of 2025 book loans at five branches. Tap each part that should be changed.", ask:"should be changed", parts:[
      {t:"Image of a chart.", flag:true, why:"Screen readers already announce an image. Start with what kind of chart and what it shows."},
      " ", {t:"Bar chart of book loans at five library branches in 2025.", flag:false, why:"Good: chart type, subject and period."},
      " ", {t:"Central lent the most, 12,400, about twice as many as the next branch, Harbour (6,100).", flag:false, why:"Good: the main message with key numbers."},
      " ", {t:"The bars are purple and the background is cream.", flag:true, why:"Colours don’t help a reader understand the data unless they carry meaning."},
      " ", {t:"See the chart for the other numbers.", flag:true, why:"The reader can’t see the chart. Point to a data table instead: “Full figures are in the table below.”"}
    ]},
    {id:"t3u4-l5-x4", type:"order", q:"Put these steps for making an accessible chart for a report in a sensible order.", items:[
      {t:"Write the question and choose the chart type", why:"The chart has to answer the right question first."},
      {t:"Make the chart, with axes and colours set honestly", why:"Baselines, scales and colour come next."},
      {t:"Add the statement title, subtitle, direct labels, annotations and source note", why:"Once the chart is right, the words say the point and guide the eye to it. Put the titles in the document text, where screen readers and search can use them."},
      {t:"Check it at phone size, in greyscale and with a contrast checker, and fix what fails", why:"Test what readers will actually see while you can still change the chart."},
      {t:"Once the chart is final, write the alt text and add the data table", why:"Written last, so they describe exactly what the finished chart shows and says."}
    ]},
    {id:"t3u4-l5-x5", type:"match", q:"Match each situation with the tool that fits best.", pairs:[
      ["A staff survey with names and comments that must stay private","A spreadsheet on your own device","The data never leave your computer."],
      ["A quick, clean chart for a public web page, with a colour-blind check","Datawrapper (free plan)","Free charts are published with an attribution; it checks palettes for colour-blind readers."],
      ["An animated chart for a public presentation","Flourish (free plan)","Strong on interactive and animated templates; free projects are public when published."],
      ["An unusual chart type, exported as SVG for a designer","RAWGraphs","Runs in the browser, keeps data local and exports vector graphics."],
      ["Forty charts that must be rebuilt every month when new data arrive","R with ggplot2, or Python","Code rebuilds every chart reproducibly."]
    ]},
    {id:"t3u4-l5-x6", type:"mcq", q:"Hana’s chart shows that towns with more cycle lanes also have fewer car journeys per person. Her draft title is “Cycle lanes cut car use”. What’s the problem?", options:[
      {t:"The chart shows the two go together, not that one causes the other; a title like “Towns with more cycle lanes have fewer car journeys” is supported", ok:true, why:"A statement title must match what the data show. A causal claim needs evidence beyond a correlation, such as a before-and-after study."},
      {t:"Titles should never contain a claim", why:"Statement titles are recommended. The claim just has to be one the chart supports."},
      {t:"The title is too short", why:"Short is good. The issue is that it claims cause."},
      {t:"It should start with “This chart shows”", why:"Wilke advises against that opening."}
    ]},
    {id:"t3u4-l5-x7", type:"mcq", q:"Dmitri is putting a small table of exact values under his chart. Which layout follows Wilke’s table rules?", options:[
      {t:"No vertical lines, numbers right-aligned with the same decimal places, text left-aligned, caption above the table", ok:true, why:"These are Wilke’s rules: fewer lines, aligned numbers, and table captions above (figure captions go below)."},
      {t:"A grid of lines around every cell, everything centred", why:"Lines between every cell add clutter, and centred numbers are hard to compare digit by digit."},
      {t:"Numbers left-aligned so they line up with the text", why:"Right-aligned numbers with equal decimals let place values line up."},
      {t:"Caption below the table, as for figures", why:"Tables are read top to bottom like text, so their captions go above."}
    ]}
   ],
   apply:{intro:"Finish one chart properly: titles, notes and alt text. Use a chart from earlier lessons, or the library data: J–D 2025 visits (thousands) 4.2, 4.4, 4.6, 4.5, 4.8, 2.9, 1.6, 4.9, 5.4, 5.6, 5.8, 6.1.", tasks:[
     {t:"Give the chart a statement title, a subtitle and axis titles", app:{
       ms:["Click the chart, click the **Chart Elements** button (+) and tick **Chart Title** and **Axis Titles**. (On a Mac or in Excel for the web, use **Chart Design → Add Chart Element**, or the **Chart** tab.)","Click the title and type your statement title. Excel has no separate subtitle box, so put the subtitle on a second line or in the document text above the chart.","Click each axis title and type what it shows with units, such as “Visits (thousands)”.","Type the source note in the document under the chart, or in a text box."],
       google:["Double-click the chart and open **Customize → Chart & axis titles**.","Choose **Chart title** from the drop-down and type your statement title; then choose **Chart subtitle** and type the subtitle.","Choose **Vertical axis title** and type what it shows with units.","Type the source note in a cell under the chart, or in the document you paste it into."],
       libre:["Double-click the chart to edit it and choose **Insert → Titles**.","Type your statement title in **Title** and the subtitle in **Subtitle**.","Type the axis titles in **Y axis** (and **X axis** if needed), then click **OK**.","Type the source note in a cell under the chart."],
       apple:["Select the chart, open the **Format** sidebar and click **Chart**. Tick **Title**, then double-click the title on the chart and type your statement title.","Click **Axis**, choose **Value** and tick **Axis Name**; double-click the name on the chart and type it with units.","Put the subtitle and source note in text boxes above and below the chart, or in the document."]
     }},
     {t:"Write alt text and attach it to the chart", app:{
       ms:["Write the alt text first, using the worked example as a model: chart type, what it shows, the main message, key numbers.","Right-click the chart’s border and choose **View Alt Text** (some versions say **Edit Alt Text**).","Type or paste your description in the box. Leave **Mark as decorative** unticked."],
       google:["Write the alt text first: chart type, what it shows, the main message, key numbers.","Click the chart, open its ⋮ menu (top right of the chart) and choose **Alt text**.","Type the description and click **OK**."],
       libre:["Write the alt text first: chart type, what it shows, the main message, key numbers.","Click the chart once so it’s selected but not in edit mode, then choose **Format → Alt Text**. (In older versions this is called **Description**, on the right-click menu.)","Type a short version in **Text** and the fuller description in **Alt Text** (older versions call these **Title** and **Description**), then click **OK**."]
     }, appNote:"We couldn’t confirm a chart-description field in Numbers for this unit. Put the alt text in the document next to the chart, or add it in the app you export the chart into (for example a Pages or Keynote image description).", write:"Your alt text"},
     {t:"Try a free chart tool (optional)", how:["Open Datawrapper, Flourish or RAWGraphs in a browser on a computer (they work best on larger screens; on a phone, read along instead).","Paste a small table of non-sensitive data, choose a chart type and add a statement title, subtitle, source note and alt text where the tool offers fields for them.","Look for the tool’s colour-blind or accessibility checks, and its export or publish options. Before publishing, check what the free plan makes public.","Compare the result with your spreadsheet chart: what was easier, and what was missing?"], write:"Which tool would you use next time, and why?"}
   ], proof:"One chart with a statement title, a subtitle, labelled axes, a source note and attached alt text, and (optionally) the same chart made in a free online tool."},
   read:[
     {book:"wilke", where:"Chapter 22, “Titles, captions, and tables”, and Chapter 24, “Use larger axis labels”"},
     {book:"wilke", where:"Chapter 29, “Telling a story and making a point” (Sections 29.2 “Make a figure for the generals” and 29.3 “Build up towards complex figures”)"},
     {book:"wilke", where:"Chapter 28, “Choosing the right visualization software”", note:"Wilke discusses principles rather than particular products, so the chapter (reproducibility, separating exploration from presentation, separating content from design) applies to whichever tool you pick."}
   ]
  }
  ],
  checkpoint:["t3u4-q02","t3u4-q05","t3u4-q08","t3u4-q10","t3u4-q13","t3u4-q16","t3u4-q19","t3u4-q22","t3u4-q27","t3u4-q30","t3u4-q35","t3u4-q38"],
  codex:[
   {id:"chart-types", title:"Choosing a chart type", aka:["chart directory","bar chart","dot plot","histogram","pie chart","stacked bars","scatterplot","line chart","small multiples","heatmap"], tags:["charts","data","visualization"],
    summary:"Match the chart to the question (amounts, distribution, proportions, relationship, change over time), favouring positions and lengths, which people judge most accurately.",
    levels:{
     starter:[
      "A chart turns numbers into things you can see: positions, lengths, angles, areas, colours. People judge **positions and lengths** most accurately, and **areas and shades** least, so the comparison that matters most should usually be shown by bar ends or dots along one axis.",
      "Start with the question, then pick the family:",
      {list:["**How much in each category?** Bars, sorted by value (or a dot plot when values are close together and far from zero).","**How are values spread?** A histogram; try several bin widths.","**Parts of one whole?** A pie for a few parts or a simple fraction; bars to compare the parts.","**Do two measures go together?** A scatterplot.","**How did it change over time?** A line chart; small multiples for many groups."]},
      "Track 1’s quick version of this table is in {{choosing-charts}}."
     ],
     builder:[
      "Wilke’s textbook describes every chart as **aesthetic mappings**: each variable is mapped to a visual feature (position, length, colour, shape). The kind of variable matters. Quantitative values suit positions and lengths; unordered categories suit distinct hues; ordered categories suit light-to-dark shades.",
      "Habits for amounts: sort unordered categories by value; keep natural orders (months, age bands); use horizontal bars for long labels; prefer grouped bars to compare within groups, stacked bars when totals matter (only the bottom segment sits on the baseline). For many values, a heatmap shows broad patterns.",
      "For distributions, the bin width changes the picture: too narrow is spiky, too wide hides features. Always try several.",
      "For proportions, Wilke’s comparison: pies show parts of one whole and simple fractions well, and look fine for very small datasets; side-by-side bars are best for comparing parts or many parts; stacked bars suit many wholes or time series. UK government guidance limits pies to five categories or fewer (and value labels to pies of four or fewer).",
      "Two checks before you settle: does the chart answer the question in a sentence a reader could repeat, and would a different family (say, a dot plot instead of bars, or small multiples instead of one crowded chart) answer it faster? If a simple table answers it better, use the table.",
      "For change, only join points with a line when the horizontal axis is ordered (time, dose, age). With many groups, use [[small-multiples|small multiples]] with shared axes, arranged in a meaningful order."
     ],
     pro:[
      "The perception ranking comes from Cleveland and McGill’s 1984 paper in the Journal of the American Statistical Association, which combined their experiments with earlier perception research: position along a common scale was judged best, then position on non-aligned scales, then length, direction and angle, then area, then volume and curvature, then shading and colour saturation. Later studies, such as Heer and Bostock’s 2010 online replication, have broadly confirmed the order, though the gaps depend on the task and differ between people.",
      "Two practical consequences. First, stacked bars and stacked areas compare well only for the bottom layer; if a middle layer matters, move it to the bottom or split into panels. Second, encodings by area (bubbles, treemaps, pies) are fine for “roughly how big” but poor for ranking near-equal values.",
      "Wilke’s Chapter 5 (“Directory of visualizations”) is a one-page visual menu by data type: amounts, distributions, proportions, x–y relationships, geospatial data and uncertainty. His storytelling chapter adds design rules for sequences of figures: build up towards complex figures, and use a different type of visualization for each distinct analysis, so readers don’t confuse one chart with another.",
      "Overlapping points in scatterplots need care: Wilke’s Chapter 18 suggests partial transparency, jittering, 2D histograms or contour lines when hundreds of points pile up.",
      "Defaults are not neutral: spreadsheet “recommended charts” are based on the table’s shape, histogram bin rules are generic, and legends are usually sorted alphabetically. A professional workflow writes the question first, tries two candidates, and checks each against “what would a busy reader conclude in five seconds?”"
     ]
    },
    related:["axes-baselines","colour-in-charts","misleading-charts","choosing-charts","distributions"],
    read:[{book:"wilke", where:"Chapter 5, “Directory of visualizations”; Chapters 6, 7 and 10"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 5 Directory of visualizations", url:"https://clauswilke.com/dataviz/directory-of-visualizations.html"},
     {t:"Wilke, Fundamentals of Data Visualization: 10 Visualizing proportions", url:"https://clauswilke.com/dataviz/visualizing-proportions.html"},
     {t:"Government Analysis Function: Data visualisation: charts", url:"https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/"}
    ], checked:"2026-11"},
   {id:"axes-baselines", title:"Axes and baselines", aka:["proportional ink","zero baseline","truncated axis","does a line chart need zero","dual axes","index to 100"], tags:["charts","axes","honesty"],
    summary:"Bars and filled areas start at zero (proportional ink); lines and dots may start near the data if clearly labelled; avoid dual axes by indexing or splitting.",
    levels:{
     starter:[
      "A bar shows its value by its **length**, so bars must start at zero. If they start higher, a small difference looks huge (Track 1: [[truncated-axis|truncated axis]]).",
      "Lines and dots are different: they show values by **position**, so their axis may start near the data, as long as the axis is clearly labelled. A body temperature chart from 36 °C shows a fever that a chart from 0 °C would flatten.",
      {key:"Length or area? Start at zero. Position only? Choose a range that fits the question, and say what it is."},
      "Charts meant to be compared side by side should use the same axis range; otherwise a small change can look as big as a large one.",
      "Two y axes on one chart (one left, one right) let the designer make any two lines look connected. Index both to 100 instead, or draw two charts."
     ],
     builder:[
      "The rule behind it is the **[[proportional-ink|principle of proportional ink]]** (Bergstrom and West, used by Wilke): the sizes of shaded areas must be proportional to the values they represent. That covers bars, area charts and stacked areas. To show a small change honestly, chart the change itself, as bars from zero.",
      "For line charts, decide by the reader’s question: “how did it change, and when?” suits a range near the data; “how big is the change compared with the total?” needs zero or a percentage-change chart. Don’t shade under a line whose axis doesn’t start at zero; the shading turns it into an area.",
      "For dot plots, the axis can start near the data, which is often why you choose dots over bars.",
      "Charts that will be compared need the same axes; in [[small-multiples|small multiples]], unequal axes make every panel look equally changeable. If unavoidable, say so in the caption.",
      "Ask the question behind the chart. “How did it change, and when?” suits a zoomed range. “How big is the change compared with the total?” needs zero, or a chart of the percentage change. Either way, label the axis start so nobody has to guess.",
      "[[dual-axis|Dual axes]]: UK government guidance doesn’t recommend them because they are easily misinterpreted. Alternatives: an [[index-number|index]] (value ÷ starting value × 100), two aligned panels, or a scatterplot of one against the other."
     ],
     pro:[
      "On a log scale, the natural midpoint is 1, not 0. Wilke’s rule: bars on a linear scale represent amounts and start at 0; bars on a log scale represent ratios and start at 1. For amounts on a log axis, use dots, because a log axis has no zero and a bar’s length would depend on an arbitrary start.",
      "Aspect ratio changes perceived slopes. Where both axes share units (this year versus last year), Wilke recommends equal grid spacing on x and y; otherwise choose a shape that doesn’t flatten or exaggerate the change, and keep it constant across charts that will be compared.",
      "Axis breaks: UK guidance says not to break the axis on bar charts, but a broken y-axis on a line chart is acceptable when necessary; make the break obvious.",
      "Dual axes are sometimes defended for two series with a known physical link (for example temperature in °C and °F, which convert exactly). That is really one variable with two labels, and it’s safe because the two scales are fixed by a formula, not chosen. For unrelated units, the relative scaling is a free choice, so any visual correlation can be manufactured.",
      "Automatic axes in spreadsheets choose ranges from the data. Desktop Excel, Google Sheets, LibreOffice Calc and Numbers all let you set the minimum and maximum by hand; check them before publishing."
     ]
    },
    related:["log-scales","misleading-charts","chart-types","misleading-numbers"],
    read:[{book:"wilke", where:"Chapter 17, “The principle of proportional ink”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 17 The principle of proportional ink", url:"https://clauswilke.com/dataviz/proportional-ink.html"},
     {t:"Government Analysis Function: Data visualisation: charts", url:"https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/"}
    ], checked:"2026-11"},
   {id:"log-scales", title:"Log scales", aka:["logarithmic scale","log axis","orders of magnitude","exponential growth chart"], tags:["charts","axes","numbers"],
    summary:"On a log scale each equal step multiplies by the same factor, so ratios and steady growth rates are easy to read; it can’t show zero or negative values.",
    levels:{
     starter:[
      "On an ordinary axis each step **adds** the same amount (0, 10, 20, 30). On a [[log-scale|log scale]] each step **multiplies** by the same amount (1, 10, 100, 1,000, or 50, 100, 200, 400).",
      "Use one when numbers range from tiny to huge (towns of 500 and cities of 9 million), or when the question is about growth rates. Something that doubles every month makes a curve that shoots upwards on an ordinary axis, but a straight line on a log axis.",
      "Reading tip: on a log axis, equal distances mean equal ratios. The gap from 100 to 200 is the same as from 1,000 to 2,000, because both are “twice as much”.",
      {warn:"A log scale can’t show zero or negative numbers. And readers may not notice the scale, so say “log scale” in the subtitle."}
     ],
     builder:[
      "Reading positions: if 10, 100 and 1,000 are 3 cm apart, 100 to 10,000 is 6 cm (two steps of ×10). The point halfway between 10 and 100 is about 31.6, not 55, because 3.16 × 3.16 ≈ 10. A ratio of 2 and a ratio of 0.5 sit the same distance either side of 1.",
      "Wilke’s reasons to use a log scale: data spanning several orders of magnitude, and ratios (which should generally be shown on a log scale, so that ×2 and ÷2 look symmetric). Steady percentage growth becomes a straight line, so changes in the growth rate show up as bends.",
      "Label the axis with the original values (100, 1,000) and the variable name, not “log(x)”. If you plot numbers that were already log-transformed, state the base (10 or e).",
      "Log scales are common for virus case counts, earthquake energy, sound levels, prices over long periods and city sizes. In each case the interesting question is “how many times bigger?” rather than “how much more?”.",
      "Spreadsheets: desktop Excel’s **Format Axis → Logarithmic scale** (its help notes it can’t be used for zero or negative values); Google Sheets’ **Customize → Vertical axis → Log scale**; LibreOffice Calc’s **Format Axis → Scale → Logarithmic scale**; Numbers’ **Axis → Value → Axis Scale**, set to Logarithmic."
     ],
     pro:[
      "Zero lies infinitely far down a log axis (log 0 = −∞), so zeros are dropped or cause errors. Options: keep a linear axis; use a square-root scale, which allows 0 but has no simple step rule and awkward tick positions (Wilke discusses both drawbacks); or show zero values separately and say so. Adding a constant before logging (log(x + 1)) is common in analysis but must be stated, because it changes the meaning of the axis.",
      "Bars on a log axis represent ratios and should start at 1, growing up for values above 1 and down below 1. For amounts, dots are better.",
      "Communication risk: readers unused to log scales can misjudge growth badly, especially comparing absolute differences (the gap between 1,000 and 2,000 looks the same as between 10,000 and 20,000). Countermeasures: label “log scale” in the subtitle; mark one doubling or ×10 step; consider showing a linear version alongside; or chart the growth rate itself.",
      "Choosing a base: base 10 (1, 10, 100) is easiest for orders of magnitude; base 2 (×2 gridlines) makes doubling times readable. The data and the line are identical either way; only the gridlines and labels change.",
      "Gridlines: use round multiples (1, 10, 100) or a fixed factor (×2) and keep them evenly spaced; mixing intermediate ticks such as 2 and 5 within each decade is fine if they are labelled."
     ]
    },
    related:["axes-baselines","chart-types"],
    read:[{book:"wilke", where:"Chapter 3, “Coordinate systems and axes”, Section 3.2 “Nonlinear axes”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 3 Coordinate systems and axes", url:"https://clauswilke.com/dataviz/coordinate-systems-axes.html"},
     {t:"Microsoft Support: Change the scale of the vertical (value) axis in a chart", url:"https://support.microsoft.com/en-US/Office/change-the-scale-of-the-vertical-value-axis-in-a-chart"}
    ], checked:"2026-11"},
   {id:"colour-in-charts", title:"Colour in charts", aka:["color in charts","colour palette","colour blindness","colour-vision deficiency","Okabe-Ito","viridis","contrast for charts","redundant coding"], tags:["charts","colour","accessibility"],
    summary:"Give colour one job (distinguish, represent values, highlight), use few colours, design for colour-vision deficiency, meet WCAG contrast, and never let colour carry meaning alone.",
    levels:{
     starter:[
      "Colour in a chart should have a job. **Distinguishing** unordered groups needs clearly different hues. **Showing values** needs light-to-dark shades (or two directions from a meaningful midpoint). **Highlighting** needs one strong colour against greys.",
      "About 8% of men and 0.5% of women of Northern European ancestry have some colour-vision deficiency (rates are lower in most other populations), most often confusing red and green. So avoid red-versus-green, use a [[colourblind-safe|colour-blind-safe]] palette such as Okabe–Ito, and add labels or shapes so colour isn’t the only clue.",
      "Use few colours: about three to five groups at most. With more, colour one or two groups that matter, make the rest grey, and write names next to the data instead of in a legend.",
      "Text and thin lines also need enough contrast against the background. Pale yellow or light orange on white is hard to see, even when the palette is colour-blind safe.",
      {tip:"Test: view your chart in greyscale. If it still works, colour is a bonus rather than a requirement."}
     ],
     builder:[
      "Palette types (Wilke, Chapter 4): [[qualitative-palette|qualitative]] for unordered groups; [[sequential-palette|sequential]] for low-to-high values, with lightness changing steadily; [[diverging-palette|diverging]] for two directions from a meaningful midpoint (0, 50%, a target), balanced on both sides; accent palettes for highlighting.",
      "Pitfalls (Chapter 19): too many colours (best with three to five categories; at eight to ten or more, label directly; UK guidance recommends at most four in basic charts); rainbow scales, whose lightness rises and falls and creates false boundaries; and large, saturated fills.",
      "Okabe–Ito hex codes: orange `#E69F00`, sky blue `#56B4E9`, bluish green `#009E73`, yellow `#F0E442`, blue `#0072B2`, vermilion `#D55E00`, reddish purple `#CC79A7`, black `#000000`. Viridis (five steps): `#440154`, `#3B528B`, `#21918C`, `#5EC962`, `#FDE725`.",
      "Diverging scales need balance: both arms should darken at the same rate, so that −10% and +10% look equally strong, and the light midpoint must sit on the meaningful value. Sequential scales should be checked in greyscale: the greys must run steadily.",
      "Highlighting works best when the context colours are genuinely muted; Wilke shows that colourful backgrounds compete with the accent and suggests simply removing colour from everything except the highlighted data.",
      "Redundant coding (Chapter 20): marker shapes, line styles, direct labels, and legend order matching the data order. Test in a simulator: Chrome developer tools’ Rendering tab has **Emulate vision deficiencies**; Datawrapper checks palettes automatically."
     ],
     pro:[
      "WCAG 2.2: text needs 4.5:1 contrast (3:1 for large text, criterion 1.4.3); graphical objects needed to understand the content need 3:1 against adjacent colours (1.4.11); colour must not be the only visual means of conveying information (1.4.1). W3C’s explanation of 1.4.11: line-chart lines need 3:1 against the background but not against each other; adjacent pie slices need 3:1 against each other, or a contrasting border, or labels and values carrying the same information; heat maps whose gradient is the measurement are exempt as “essential”.",
      "Colour-blind safe and high contrast are separate tests. Okabe–Ito contrast on white (computed with the WCAG formula): yellow 1.32:1, orange 2.25:1, sky blue 2.31:1, reddish purple 3.06:1, bluish green 3.42:1, vermilion 3.87:1, blue 5.19:1. On `#121212` the order largely flips (yellow about 14:1, blue about 3.6:1). Use light tints for fills and darker shades of the same hue for lines, outlines and text (Wilke’s two-shade approach), or add borders.",
      "Thin lines and small points need more contrast and more distinct hues than large areas (Wilke cites Stone and colleagues, 2014). The UK Government Analysis Function publishes a tested categorical palette and recommends sequential palettes of a single hue or closely related hues.",
      "Meaning varies by context: red for losses in many financial displays, but red for rising prices on mainland China’s stock markets. Always label what colours mean."
     ]
    },
    related:["chart-types","annotation-charts","css-colors","alt-text"],
    read:[{book:"wilke", where:"Chapter 4, “Color scales”; Chapter 19, “Common pitfalls of color use”; Chapter 20, “Redundant coding”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 19 Common pitfalls of color use", url:"https://clauswilke.com/dataviz/color-pitfalls.html"},
     {t:"Government Analysis Function: Data visualisation: colours", url:"https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/"},
     {t:"W3C: Understanding Success Criterion 1.4.11 Non-text Contrast", url:"https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"},
     {t:"MedlinePlus Genetics (US National Library of Medicine): Color vision deficiency", url:"https://medlineplus.gov/genetics/condition/color-vision-deficiency/"}
    ], checked:"2026-11"},
   {id:"misleading-charts", title:"Misleading charts and how to fix them", aka:["chart tricks","bubble charts","3D charts","cumulative charts","choropleth totals","cherry-picked dates"], tags:["charts","honesty","fact-checking"],
    summary:"Most misleading charts use true numbers drawn badly: truncated bars, areas scaled by width, 3D, hand-picked windows, running totals, totals on maps, unequal panel scales, dual axes and hidden uncertainty.",
    levels:{
     starter:[
      "A chart can mislead even when every number is right. Look for:",
      {list:["Bars that don’t start at zero.","Circles or pictures made twice as wide for a value that doubled (their area is four times bigger).","3D effects.","A start or end date chosen to make a point.","A running total, which can only go up.","A map of totals, which mostly shows where people live.","Two y axes.","No sign of uncertainty."]},
      "None of these needs a false number. Each one uses a real number drawn in a way that gives the wrong impression, which is why they are so common and so persuasive.",
      "A quick defence: before reading a chart’s message, read its labels (title, axes, units, start values, time period, source), then ask what the maker chose and whether another reasonable choice would change the story.",
      "Track 1’s {{misleading-numbers}} covers the number side; this entry covers the drawing side."
     ],
     builder:[
      "Fixes, trick by trick: bars from zero, or dots; scale circles by area (radius × √(ratio)), or use bars; flat 2D; the full available period, or a stated reason; per-period values instead of (or beside) running totals; rates per person or per household on maps ([[per-capita]]); shared axes across panels; an index or two panels instead of dual axes; error bars, ranges or words for uncertainty.",
      "Worked numbers: to show 30,000 against 10,000 with circles, multiply the radius by √3 ≈ 1.73, not 3 (which would make the area 9 times bigger). A running total of 40, 30, 20, 10 new members (40, 70, 90, 100) keeps climbing while sign-ups fall by three quarters.",
      "For a bar chart that seems to show a big gap, check the axis start and work out the real ratio: 52 against 48 is only about 8% bigger, however tall the bars look.",
      "Two more to watch: unequal time steps spaced evenly (2010, 2015, 2016, 2017 drawn at equal intervals squashes the long gap) and cropped or stretched aspect ratios that make slopes look gentle or steep. For time windows, ask whether a longer series exists; for maps, ask what the denominator is.",
      "Wilke’s 3D examples: a tilted pie makes the front slice look larger; 3D Titanic bars looked like fewer than 300 first-class passengers when there were 322."
     ],
     pro:[
      "A systematic audit: (1) what does each mark’s size or position claim? (proportional ink); (2) what range, window, bins and baseline were chosen, and what would a different reasonable choice show? (3) totals or rates, and per what? (4) are compared panels on the same scale? (5) is uncertainty shown and labelled? (6) does the title claim more than the data show, especially cause from correlation?",
      "Area encodings are intrinsically less accurate than lengths even when correctly scaled, so readers underestimate large differences in bubble charts. Some designers compensate perceptually (“apparent magnitude” scaling); Wilke and most guidance prefer exact area scaling plus labels.",
      "Smoothing and binning are analysis choices. Wilke: the same dataset can be smoothed in many different ways, so show the raw points with any trend line. For choropleths, class breaks (equal intervals, quantiles, natural breaks) can change the map’s story; report the method.",
      "When you find a problem in someone else’s chart, the fix is usually a redraw, not a lecture: the same data with a zero baseline, a rate instead of a total, a shared axis or a labelled interval makes the point more persuasively than criticism.",
      "Legitimate truncation exists for lines and dots; legitimate dual-labelled axes exist for exact unit conversions. The test is always whether the visual impression matches the quantity the reader is meant to judge."
     ]
    },
    related:["axes-baselines","showing-uncertainty","misleading-numbers","chart-types"],
    read:[{book:"wilke", where:"Chapter 17, “The principle of proportional ink”, and Chapter 26, “Don’t go 3D”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 26 Don’t go 3D", url:"https://clauswilke.com/dataviz/no-3d.html"},
     {t:"Wilke, Fundamentals of Data Visualization: 17 The principle of proportional ink", url:"https://clauswilke.com/dataviz/proportional-ink.html"},
     {t:"Government Analysis Function: Data visualisation: charts", url:"https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/"}
    ], checked:"2026-11"},
   {id:"showing-uncertainty", title:"Showing uncertainty in charts", aka:["error bars","confidence intervals in charts","standard error bars","confidence band","frequency framing","margin of error chart"], tags:["charts","statistics","uncertainty"],
    summary:"Show uncertainty where it exists, label exactly what error bars represent, don’t judge differences by overlap, and use frequency pictures or words for general audiences.",
    levels:{
     starter:[
      "Most numbers from surveys, samples and measurements are estimates. A dot drawn in one spot looks exact, so a chart should show how uncertain it is.",
      "An [[error-bar|error bar]] is a line through an estimate showing a range. Always say what it shows: the spread of individuals (standard deviation), the precision of the average (standard error), or a 95% confidence interval. These can differ a lot: for 25 people with a standard deviation of 1 hour, the standard error is only 0.2 hours.",
      "Overlapping error bars don’t prove there’s no difference, and gaps between them don’t tell you how big a difference is. The careful check is an interval for the difference itself.",
      "For the public, plain pictures work well: 13 filled squares out of 100 for a 13% chance."
     ],
     builder:[
      "SE = SD ÷ √n; a 95% [[confidence-interval|confidence interval]] for a mean is about mean ± 2 SE (more precisely ± 1.96 SE for large samples, a little more for small ones via the t distribution). SD describes individuals; SE and intervals describe the mean’s precision and shrink as samples grow.",
      "Wilke’s rule: whenever you use error bars, specify what quantity and confidence level they represent. Graded error bars (several levels at once) reduce the “hard limit” reading he calls deterministic construal error.",
      "Don’t judge differences by overlap. Two independent means of 10 and 13, each with SE 1, have overlapping 95% intervals (8.0–12.0 and 11.0–15.0), yet the difference’s interval, 3 ± 1.96 × √2 ≈ 0.2 to 5.8, excludes 0.",
      "Displays for lay audiences, in Wilke’s Chapter 16: frequency framing (waffle grids of outcomes), quantile dotplots (a distribution drawn as a small number of dots), graded error bars, and animated hypothetical outcome plots.",
      "Labelling in practice: “Error bars show 95% confidence intervals; n = 25 per group.” If you show SD bars, say “± 1 standard deviation (spread of individuals)”. For polls, give the margin of error and the sample size in the note.",
      "For trend lines, a [[confidence-band|confidence band]] shows compatible lines; it widens towards the ends. For lay readers: [[frequency-framing|frequency framing]], quantile dotplots, ranges in words, or animated hypothetical outcome plots online."
     ],
     pro:[
      "Spreadsheet caveat: in Excel and LibreOffice Calc, the built-in standard-deviation and standard-error error-bar options are computed from the plotted values (Excel’s help shows formulas over the data values of the chart’s series), not from each bar’s underlying data, so each bar gets the same amount; LibreOffice’s help notes its SD bars are centred on the series mean. Compute margins yourself and use Excel’s **Custom → Specify Value** or LibreOffice’s **Cell Range**. Google Sheets offers constant, percentage and standard-deviation types; Numbers offers fixed values, percentages and other calculations.",
      "Choosing what to show: SD bars for “how variable are individuals?”; SE or CI bars for “how precisely is the mean known?”; intervals for differences when the question is a comparison (Wilke shows contrasts against a reference group). Always report n.",
      "Wilke also contrasts frequentist confidence intervals with Bayesian credible intervals; the interpretation differs, but in practice both are drawn with the same display types. Unit 6 of this track covers confidence intervals and their interpretation (see also Track 4, Unit 3).",
      "Overlap rules: for two independent groups with equal SEs, 95% intervals that don’t overlap do indicate a difference significant at the 5% level (in fact p is then below about 0.006), but intervals can overlap by a fair amount and the difference still be clear, so overlap is a poor test. Calculate the interval for the difference, as Wilke recommends.",
      "Hypothetical outcome plots must show outcomes representative of the true distribution; Wilke checked that his chocolate-rating example showed the Canadian bar winning close to its true 53% of the time. Smooth morphing between outcomes may make probabilities harder to judge than quick switches or fades."
     ]
    },
    related:["misleading-charts","reading-results","survey-sampling","chart-types"],
    read:[{book:"wilke", where:"Chapter 16, “Visualizing uncertainty”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 16 Visualizing uncertainty", url:"https://clauswilke.com/dataviz/visualizing-uncertainty.html"},
     {t:"LibreOffice Help source: X/Y Error Bars", url:"https://github.com/LibreOffice/help/blob/master/source/text/schart/01/04050000.xhp"}
    ], checked:"2026-11"},
   {id:"annotation-charts", title:"Titles, annotation and accessible charts", aka:["statement title","chart subtitle","annotation","source note","chart alt text","data table","axis labels"], tags:["charts","writing","accessibility"],
    summary:"A chart that stands on its own has a statement title, a what-where-when subtitle, a few annotations, labelled axes with units, a source note, alt text and a data table.",
    levels:{
     starter:[
      "Give every chart a title that **says the point** (“Visits bounced back after the summer closure”) and a subtitle that says **what, where and when** (“Library visits per month, thousands, 2025”).",
      "Add one to three [[annotation-chart|annotations]]: a label on the key value, a shaded period, a target line. Label axes with units, and add a source note.",
      "Ask a friend to look at the chart for five seconds and tell you what it says. If they can’t, the title or annotation needs work.",
      "Keep notes short and put them next to what they explain. Say where the data came from and when, and mark invented or provisional figures as such.",
      "For people who can’t see the chart, write [[alt-text|alt text]] (chart type, what it shows, the main message) and give the numbers in a table."
     ],
     builder:[
      "Wilke (Chapter 22): every figure needs a title conveying what it’s about and the point it makes; a figure has one title, either in the chart or first in the caption; don’t start with “This figure shows”. Axis and legend titles state the variable and, for numbers, the units; self-explanatory labels (countries, years) may skip a title.",
      "UK Government Analysis Function: give charts two titles (a main statement title and a statistical subtitle covering the data, geography and period); put titles in the page or document body rather than only in the image; provide a text alternative as a description or accessible table; if sighted readers are expected to read values, provide a table.",
      "Alt text model: “Line chart of library visits per month in 2025, in thousands. Visits rose from 4.2 in January to 4.8 in May, fell to 1.6 in July during a closure, and climbed to a year high of 6.1 in December.”",
      "Source notes should name the organisation, the dataset or report and the date, and link to it where possible. Method notes cover breaks in the series, changed definitions and partial periods.",
      "Annotation habits: one to three notes per chart; label reference lines (“Target: 90%”); shade periods with real dates; keep annotations as accurate and sourced as the data.",
      "App fields: Excel **View Alt Text**, Google Sheets chart menu → **Alt text**, LibreOffice **Format → Alt Text**."
     ],
     pro:[
      "Statement titles must be defensible: no causal verbs for correlational data, hedges where estimates are uncertain, and consistency with the subtitle’s period and geography. In reports with many charts, Wilke recommends varying chart types between distinct analyses and building up complex figures in steps.",
      "Table rules (Wilke): no vertical lines; no horizontal lines between data rows (a rule under the header or a frame is fine; alternate shading if needed); left-align text, right-align numbers with constant decimals; centre single-character columns; align headers with their data; captions above tables.",
      "Text size: Wilke’s Chapter 24 says axis labels are usually too small because nearly all software defaults are poor, and advises checking scaled-down versions. For the web, text in charts must meet WCAG 1.4.3 contrast; text in images can’t reflow or be read aloud, so keep titles and key numbers in the HTML or document.",
      "For readers on phones, check the chart at about 360 pixels wide: long category names may need horizontal bars or shorter labels, and legends often fall off the edge, which is another reason to label directly.",
      "Complex charts benefit from a long description (in the text, or linked), structured like a short paragraph: overview, trend, notable points, then where to find the data. Interactive charts should be keyboard accessible and expose values to screen readers; check the tool’s documentation."
     ]
    },
    related:["colour-in-charts","chart-tools","alt-text","document-accessibility"],
    read:[{book:"wilke", where:"Chapter 22, “Titles, captions, and tables”, and Chapter 24, “Use larger axis labels”"}],
    sources:[
     {t:"Wilke, Fundamentals of Data Visualization: 22 Titles, captions, and tables", url:"https://clauswilke.com/dataviz/figure-titles-captions.html"},
     {t:"Government Analysis Function: Data visualisation: charts", url:"https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/"}
    ], checked:"2026-11"},
   {id:"chart-tools", title:"Tools for making charts", aka:["Datawrapper","Flourish","RAWGraphs","chart software","free chart tools"], tags:["charts","tools","software"],
    summary:"Spreadsheets cover most charts; free online tools such as Datawrapper, Flourish and RAWGraphs add polish, accessibility checks or unusual chart types, each with free-plan limits and privacy trade-offs.",
    levels:{
     starter:[
      "Most charts in this unit can be made in a spreadsheet: Excel, Google Sheets, LibreOffice Calc or Numbers. Free online tools can make cleaner, interactive charts quickly:",
      {list:["**Datawrapper**: tidy charts, maps and tables, with an alt-text field and a colour-blind check.","**Flourish**: interactive and animated charts.","**RAWGraphs**: unusual chart types; your data stay in your browser."]},
      "Free tools are run by companies and projects whose plans change, so treat any summary (including this one) as a snapshot, and check the current terms before you rely on a tool for work.",
      "Which to choose? For a quick chart from data you already have, a spreadsheet. For a polished chart on a public web page, Datawrapper or Flourish. For a chart type spreadsheets lack, or data that must stay private, RAWGraphs. For charts you’ll rebuild often, code (R or Python).",
      {warn:"Free plans change, and some make published charts public. Don’t upload private data without permission."}
     ],
     builder:[
      "Free plans as checked in November 2026 (they change; check before relying on them):",
      {list:[
        "**Datawrapper Free**: create, publish, embed and export PNGs without limits; free charts carry “Created with Datawrapper”; PDF and SVG export need a paid plan. Accessibility features include alternative text, an automatic colour-blind check, an optional “Get the data” CSV link, and keyboard navigation of published charts.",
        "**Flourish Free**: unlimited projects and the full template library; public publishing and embedding with attribution; unpublished projects stay private.",
        "**RAWGraphs**: free and open source; data are processed only in the browser (“no server-side operations or storages”); output is vector (SVG) for editing in drawing apps."
      ]},
      "Before you rely on any free plan, check: what becomes public when you publish; whether you can export the chart (and in what format); whether the data can be downloaded by viewers; what attribution is added; and whether charts stay online if you stop using the service. Datawrapper’s pricing page says published charts stay online even if a paid plan is cancelled.",
      "Whichever tool you use, the principles of this unit still apply: the tool won’t choose your baseline, palette or title for you.",
      "Spreadsheet strengths: quick, linked to the data, available offline. Weaknesses: small multiples and direct labels are manual."
     ],
     pro:[
      "Wilke’s Chapter 28 frames tool choice around reproducibility and repeatability (can you regenerate the figure when the data change?), the split between exploration and presentation, and separating content from design (themes or styles applied consistently). Code-based tools (R’s ggplot2, Python’s plotting libraries) score best on reproducibility; Units 7–8 teach R.",
      "For organisations: check data-protection rules before uploading to a hosted service; prefer local or browser-only processing for personal data; record the tool, version and settings with published charts; and keep the data and code (or the tool’s project file) with the chart.",
      "Exports matter for reuse: vector formats (SVG, PDF) stay sharp at any size and can be edited in drawing apps; bitmaps (PNG) are fine for screens. Wilke’s Chapter 27 explains the difference. Check which formats each tool’s free plan allows; Datawrapper’s free plan, for instance, exports PNG only.",
      "Exploration versus presentation: for exploring, speed matters more than polish, so use whatever lets you try many views quickly. For presentation, consistency and accuracy matter: apply one style to every chart in a report, set axes deliberately, and keep a record of how each chart was made so it can be checked or updated.",
      "Accessibility varies by tool: check whether published charts expose an alternative text, a data table or download, keyboard access and sufficient contrast. A tool’s colour-blind check helps but doesn’t replace the WCAG contrast checks in {{colour-in-charts}}."
     ]
    },
    related:["annotation-charts","colour-in-charts","chart-types"],
    read:[{book:"wilke", where:"Chapter 28, “Choosing the right visualization software”"}],
    sources:[
     {t:"Datawrapper: Pricing", url:"https://www.datawrapper.de/pricing"},
     {t:"Flourish: Pricing", url:"https://flourish.studio/pricing/"},
     {t:"RAWGraphs app on GitHub", url:"https://github.com/rawgraphs/rawgraphs-app"}
    ], checked:"2026-11"}
  ],
  terms:[
   {id:"bar-chart", term:"Bar chart", def:"A chart that shows amounts as bars whose lengths are proportional to the values, so the bars start at zero.", codex:"chart-types"},
   {id:"line-chart", term:"Line chart", def:"A chart that joins values in order, usually through time, so position shows the value and slope shows the change.", codex:"chart-types"},
   {id:"scatterplot", term:"Scatterplot", def:"A chart of two quantitative variables with one dot per record, used to see whether they go together.", codex:"chart-types"},
   {id:"histogram-chart", term:"Histogram", def:"A chart of how values are spread: the number line is split into equal bins and each bar counts the values in one bin.", codex:"chart-types"},
   {id:"small-multiples", term:"Small multiples", def:"The same small chart repeated for each group in a grid, with shared axes, instead of one crowded chart.", codex:"chart-types"},
   {id:"dot-plot", term:"Dot plot", def:"A chart that shows each value as a dot along a shared axis. Because only position counts, the axis may start near the data.", codex:"chart-types"},
   {id:"pie-chart", term:"Pie chart", def:"A circle split into slices that show parts of one whole. Best with a few parts or to show simple fractions such as a half.", codex:"chart-types"},
   {id:"baseline", term:"Baseline", def:"The starting line a chart’s bars or areas grow from. For bars and filled areas on a linear scale it must be zero.", codex:"axes-baselines"},
   {id:"proportional-ink", term:"Principle of proportional ink", def:"The sizes of shaded areas in a chart must be proportional to the values they represent (Bergstrom and West, used by Wilke).", codex:"axes-baselines"},
   {id:"dual-axis", term:"Dual-axis chart", def:"A chart with two y axes, one on each side, for series in different units. The alignment of the lines is arbitrary, so it often misleads.", codex:"axes-baselines"},
   {id:"index-number", term:"Index (to 100)", def:"A series rescaled so its starting value is 100: value ÷ starting value × 100. An index of 150 means 50% above the start.", codex:"axes-baselines"},
   {id:"log-scale", term:"Log scale", def:"An axis where each equal step multiplies by the same factor (1, 10, 100…). It shows ratios and growth rates; it can’t show zero.", codex:"log-scales"},
   {id:"colour-palette", term:"Colour palette", def:"The set of colours a chart uses, chosen for a job: telling groups apart, showing values, or highlighting.", codex:"colour-in-charts"},
   {id:"qualitative-palette", term:"Qualitative palette", def:"Distinct colours of similar strength for groups with no order, such as countries or species.", codex:"colour-in-charts"},
   {id:"sequential-palette", term:"Sequential palette", def:"Colours running steadily from light to dark (or dark to light) to show values from low to high.", codex:"colour-in-charts"},
   {id:"diverging-palette", term:"Diverging palette", def:"Two sequential palettes joined at a light midpoint, for values that run in two directions from a meaningful middle such as 0.", codex:"colour-in-charts"},
   {id:"colourblind-safe", term:"Colour-blind safe", def:"Chosen so that people with common colour-vision deficiencies can still tell the colours apart, as with the Okabe–Ito palette.", codex:"colour-in-charts"},
   {id:"direct-label", term:"Direct label", def:"A label placed right next to the data it names, such as a name at the end of a line, instead of in a separate legend.", codex:"colour-in-charts"},
   {id:"error-bar", term:"Error bar", def:"A line through an estimate showing a range, such as a standard deviation, a standard error or a confidence interval. Always say which.", codex:"showing-uncertainty"},
   {id:"confidence-band", term:"Confidence band", def:"A shaded band around a fitted trend line showing the range of lines compatible with the data; usually wider at the ends.", codex:"showing-uncertainty"},
   {id:"frequency-framing", term:"Frequency framing", def:"Showing a probability as counts of outcomes, such as 13 filled squares out of 100 for a 13% chance.", codex:"showing-uncertainty"},
   {id:"annotation-chart", term:"Annotation (in a chart)", def:"Text or a mark added to a chart to explain it: a labelled value, a shaded period, a reference line or a short note.", codex:"annotation-charts"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u4-q01", lesson:"t3u4-l1", level:1, q:"According to classic perception experiments, which comparison do people make most accurately?", options:[
     {t:"Positions along a shared scale", ok:true, why:"Cleveland and McGill found position on a common scale was judged best, ahead of length, angle, area and shading."},
     {t:"Areas of circles", why:"Areas were among the least accurately judged features."},
     {t:"Angles of pie slices", why:"Angles were judged less accurately than positions and lengths."},
     {t:"Shades of one colour", why:"Shading and colour saturation came last in the ranking."}
   ]},
   {id:"t3u4-q02", lesson:"t3u4-l1", level:2, q:"A bar chart shows donations to 10 charities. Which order makes it easiest to read?", options:[
     {t:"Sorted from largest to smallest donation", ok:true, why:"Charities have no natural order, so sorting by value shows the ranking instantly (Wilke’s advice for unordered categories)."},
     {t:"Alphabetical by charity name", why:"Alphabetical order makes a jagged skyline that hides the ranking."},
     {t:"In the order the data were typed in", why:"Entry order is arbitrary and tells the reader nothing."},
     {t:"Random, so no charity seems favoured", why:"Sorting by value isn’t favouritism; it’s what makes comparison easy."}
   ]},
   {id:"t3u4-q03", lesson:"t3u4-l1", level:2, q:"Months of rainfall are shown as bars. Should the bars be sorted from wettest to driest?", options:[
     {t:"No: months have a natural order, so keep them January to December", ok:true, why:"Ordered categories keep their order; sorting by value would scramble the seasonal pattern."},
     {t:"Yes: bars should always be sorted by value", why:"Only unordered categories should be sorted by value."},
     {t:"Yes, and use a pie chart as well", why:"Months of rainfall aren’t parts of a meaningful whole, and sorting is still wrong."},
     {t:"No: put them in alphabetical order", why:"Alphabetical order breaks the calendar order that matters."}
   ]},
   {id:"t3u4-q04", lesson:"t3u4-l1", level:1, q:"What is the main risk of using only your app’s default bin width for a histogram?", options:[
     {t:"It may hide or invent features, such as merging two groups into one hump", ok:true, why:"Wilke: always explore several bin widths; too wide hides features, too narrow makes noise look like features."},
     {t:"Histograms can’t be made with default settings", why:"They can; the defaults just aren’t guaranteed to suit your data."},
     {t:"The bars won’t start at zero", why:"Histogram bars count values from zero regardless of bin width."},
     {t:"There is no risk: defaults are calculated from the data", why:"Default rules are generic. They don’t know what features matter in your data."}
   ]},
   {id:"t3u4-q05", lesson:"t3u4-l1", level:3, q:"Ana’s team survey asked “Which of these tools do you use? (tick all that apply)”. The answers add up to 230%. A colleague suggests a pie chart. What should Ana say?", options:[
     {t:"A pie needs parts of one whole adding to 100%; these answers overlap, so use bars of the percentage choosing each tool", ok:true, why:"Each person could pick several tools, so the percentages aren’t slices of anything."},
     {t:"Fine, as long as there are five tools or fewer", why:"The number of slices isn’t the problem; the data aren’t parts of a whole."},
     {t:"Rescale the percentages so they add to 100%", why:"That would change the meaning: each figure is the share of people using a tool, not a share of all ticks."},
     {t:"Use a 3D pie so the slices fit", why:"3D distorts, and the data still aren’t parts of one whole."}
   ]},
   {id:"t3u4-q06", lesson:"t3u4-l1", level:2, q:"In which situation does Wilke argue that a pie chart is the best choice?", options:[
     {t:"Showing that two smaller parties together hold just over half of a parliament’s seats", ok:true, why:"Pies make simple fractions such as “more than half” visible at a glance."},
     {t:"Comparing the market shares of 15 companies", why:"Too many slices; side-by-side bars work better for many parts."},
     {t:"Showing how shares changed every year for 20 years", why:"Many sets of proportions or a time series suit stacked bars."},
     {t:"Comparing five nearly equal shares precisely", why:"Near-equal angles are hard to rank; bars are clearer."}
   ]},
   {id:"t3u4-q07", lesson:"t3u4-l1", level:3, q:"Kenji draws a line chart with towns along the bottom in alphabetical order and average rent up the side. Why is the line misleading?", options:[
     {t:"Joining points suggests a continuous order; alphabetical towns have none, so the line invents a trend", ok:true, why:"Lines suit ordered x values such as time. For towns, use sorted bars or dots."},
     {t:"Rent should be shown with a pie chart", why:"Rents aren’t parts of a whole."},
     {t:"The y-axis must start at zero for any line chart", why:"Line charts don’t need zero; the problem is joining unordered categories."},
     {t:"Lines can only show one town", why:"Lines can show many series; the problem is what the x axis represents."}
   ]},
   {id:"t3u4-q08", lesson:"t3u4-l1", level:3, q:"Mei has monthly visitor numbers for eight museums. Her single line chart with eight colours is a tangle. What is the best alternative?", options:[
     {t:"Small multiples: one small line chart per museum with the same axes, in a meaningful order", ok:true, why:"Small multiples untangle many series; shared axes keep them comparable (Wilke, Chapter 21)."},
     {t:"Give each panel its own automatic y-axis so every line fills its box", why:"Different scales make every museum look equally busy and changeable."},
     {t:"A pie chart for each month", why:"Twelve pies of eight slices would be even harder to compare."},
     {t:"Make the chart 3D so the lines separate", why:"3D adds distortion without separating the information."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t3u4-q09", lesson:"t3u4-l2", level:1, q:"What does the principle of proportional ink say?", options:[
     {t:"The sizes of shaded areas must be proportional to the values they represent", ok:true, why:"That’s Bergstrom and West’s principle as Wilke states it, and the reason bars start at zero."},
     {t:"Every chart should use as little ink as possible", why:"That’s a different idea (minimal decoration), not proportional ink."},
     {t:"Each colour should cover the same area", why:"The principle is about areas matching values, not equal colour areas."},
     {t:"Axes should be drawn in proportion to the page", why:"It concerns shaded marks, not page layout."}
   ]},
   {id:"t3u4-q10", lesson:"t3u4-l2", level:2, q:"Which chart may honestly use a value axis that starts well above zero?", options:[
     {t:"A line chart of a city’s average temperature in °C over a year", ok:true, why:"Lines show value by position, and 0 °C has no special meaning for this question; label the range."},
     {t:"A bar chart of tonnes of waste collected per district", why:"Bars show value by length, so they need a zero baseline."},
     {t:"An area chart of total savings", why:"The filled area claims to be the value, so it must start at zero."},
     {t:"A stacked bar of budget shares", why:"Segment lengths are the shares; a non-zero start distorts them."}
   ]},
   {id:"t3u4-q11", lesson:"t3u4-l2", level:2, q:"On a log axis, 1, 10, 100 and 1,000 are equally spaced. Which value lies halfway between 10 and 100?", options:[
     {t:"About 31.6", ok:true, why:"Halfway on a log scale means multiplying by the same factor twice: 10 × 3.16 × 3.16 ≈ 100, so the midpoint is 10 × 3.16 ≈ 31.6."},
     {t:"55", why:"55 is halfway on a linear scale (the average of 10 and 100)."},
     {t:"50", why:"50 is close to the linear midpoint, not the log one."},
     {t:"20", why:"20 is only ×2 above 10; the midpoint is about ×3.16."}
   ]},
   {id:"t3u4-q12", lesson:"t3u4-l2", level:1, q:"Which of these can’t be shown on a log scale?", options:[
     {t:"A value of zero", ok:true, why:"Zero lies infinitely far down a log axis; Excel’s help notes a log scale can’t be used for zero or negative values."},
     {t:"A value of 0.5", why:"Values between 0 and 1 are fine; they sit below 1."},
     {t:"A value of 1,000,000", why:"Very large values are exactly what log scales handle well."},
     {t:"A value of 1", why:"1 is the natural midpoint of a log scale."}
   ]},
   {id:"t3u4-q13", lesson:"t3u4-l2", level:3, q:"Tomás’s chart has café visits on the left axis and rainfall in mm on the right. The lines move almost together, and his caption says rain brings customers. What would make the chart more honest?", options:[
     {t:"Show the two in separate, aligned panels (or a scatterplot), and don’t claim cause from the pattern", ok:true, why:"Dual-axis alignment is set by the chosen ranges, and moving together isn’t proof of cause."},
     {t:"Start both axes at zero and keep the caption", why:"Even from zero, the right axis’s maximum is a free choice, and the causal claim is still unsupported."},
     {t:"Use a log scale for both axes", why:"Log scales don’t remove the arbitrary alignment of two axes."},
     {t:"Make the rainfall line thicker", why:"Line thickness doesn’t change the underlying problem."}
   ]},
   {id:"t3u4-q14", lesson:"t3u4-l2", level:2, q:"Loaves sold went from 400 to 440. What is the index for 440 if the start is set to 100?", options:[
     {t:"110", ok:true, why:"440 ÷ 400 × 100 = 110, a 10% rise."},
     {t:"40", why:"40 is the increase in loaves, not the index."},
     {t:"10", why:"10 is the percentage rise; the index adds it to the starting 100."},
     {t:"1.1", why:"That’s the ratio; multiply by 100 for the index."}
   ]},
   {id:"t3u4-q15", lesson:"t3u4-l2", level:3, q:"Fatima shows nine small charts, one per region, each with its own automatic y-axis. A reader concludes every region grew by a similar amount. What went wrong?", options:[
     {t:"Different axis ranges made small and large changes fill each panel equally; shared axes would show the real differences", ok:true, why:"Wilke’s advice: use the same axis ranges in small multiples, or warn readers in the caption."},
     {t:"She should have used nine pie charts", why:"Pies don’t show change over time well, and the axis problem would remain in other forms."},
     {t:"Small multiples are always misleading", why:"They’re very useful, with shared axes."},
     {t:"The panels should have been in alphabetical order", why:"Order matters, but the misleading impression comes from the unequal axes."}
   ]},
   {id:"t3u4-q16", lesson:"t3u4-l2", level:3, q:"Priya’s dot plot of ten countries’ life expectancy uses an axis from 70 to 85 years. A colleague says “axes must start at zero”. Who is right?", options:[
     {t:"Priya, if the axis is labelled: dots show values by position, not length, so zero isn’t required", ok:true, why:"Proportional ink applies to lengths and areas. Dot plots exist partly so the axis can start near the data."},
     {t:"The colleague: every axis must include zero", why:"Only bars and filled areas need zero."},
     {t:"Neither: she should use a pie chart", why:"Life expectancies aren’t parts of a whole."},
     {t:"The colleague, unless she switches to 3D", why:"3D would add distortion, and it isn’t needed."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t3u4-q17", lesson:"t3u4-l3", level:1, q:"What kind of palette suits a map of change in population since the last census, where some areas grew and some shrank?", options:[
     {t:"A diverging palette centred on 0% change", ok:true, why:"Values run in two directions from a meaningful midpoint."},
     {t:"A qualitative palette of unrelated hues", why:"Qualitative palettes are for unordered groups; they can’t show more or less."},
     {t:"A rainbow palette", why:"Rainbows have uneven lightness and no clear midpoint."},
     {t:"A single colour for every area", why:"That would hide the data altogether."}
   ]},
   {id:"t3u4-q18", lesson:"t3u4-l3", level:1, q:"About what share of people have some form of colour-vision deficiency, according to Wilke and UK government guidance?", options:[
     {t:"About 8% of men and 0.5% of women", ok:true, why:"Both sources give these figures, which come mainly from people of Northern European ancestry (most other populations have lower rates); red–green types are the most common."},
     {t:"About 50% of everyone", why:"Far too high."},
     {t:"About 0.01% of people", why:"Far too low; it’s several percent of men."},
     {t:"Only people over 70", why:"Most colour-vision deficiency is inherited and present from birth."}
   ]},
   {id:"t3u4-q19", lesson:"t3u4-l3", level:2, q:"Why does Wilke recommend against rainbow colour scales for continuous data?", options:[
     {t:"Their lightness rises and falls unevenly, creating false boundaries and hiding real changes", ok:true, why:"A good sequential scale changes lightness steadily so differences in colour match differences in value."},
     {t:"They use too few colours", why:"They use many; the problem is how lightness changes across them."},
     {t:"They can’t be printed", why:"They can be printed; in greyscale they just make no sense."},
     {t:"Rainbow colours are not allowed by WCAG", why:"WCAG doesn’t ban colours; it sets contrast and use-of-colour rules."}
   ]},
   {id:"t3u4-q20", lesson:"t3u4-l3", level:2, q:"Under WCAG 2.2, what contrast should the lines in a line chart have against the background?", options:[
     {t:"At least 3:1", ok:true, why:"Criterion 1.4.11 asks for 3:1 for graphical objects needed to understand the content; W3C notes lines need it against the background but not against each other."},
     {t:"At least 4.5:1", why:"4.5:1 is the minimum for normal-size text (1.4.3), including axis labels."},
     {t:"At least 21:1", why:"21:1 is the maximum possible (black on white), not a requirement."},
     {t:"No requirement applies to charts", why:"Non-text contrast (1.4.11) covers graphics such as chart lines and bars."}
   ]},
   {id:"t3u4-q21", lesson:"t3u4-l3", level:3, q:"Oluwaseun’s scatterplot shows three species using colour only. In greyscale the species can’t be told apart. What’s the most effective fix?", options:[
     {t:"Give each species its own marker shape and label the groups directly", ok:true, why:"Redundant coding (Wilke, Chapter 20) keeps the meaning without colour."},
     {t:"Use brighter versions of the same colours", why:"Brightness alone may not survive greyscale or colour-vision deficiency."},
     {t:"Add more colours", why:"More colours make matching harder, not easier."},
     {t:"Remove the legend", why:"Without a replacement such as direct labels, readers lose the key entirely."}
   ]},
   {id:"t3u4-q22", lesson:"t3u4-l3", level:3, q:"Lucía uses Okabe–Ito colours for thin lines on a white background and is told the chart fails contrast checks. Which statement is correct?", options:[
     {t:"Colour-blind-safe colours can still have low contrast: yellow, orange and sky blue are all below 3:1 on white", ok:true, why:"Telling colours apart and seeing marks against the background are separate tests (1.32:1, 2.25:1 and 2.31:1 on white)."},
     {t:"Okabe–Ito colours always pass contrast checks", why:"Several fall below 3:1 on white; blue and black pass."},
     {t:"Contrast doesn’t apply to lines", why:"WCAG 1.4.11 applies to lines needed to understand the chart."},
     {t:"Thin lines need less contrast than thick ones", why:"Thin lines look fainter, so they need at least as much contrast."}
   ]},
   {id:"t3u4-q23", lesson:"t3u4-l3", level:2, q:"Software listed the legend for four lines alphabetically, but the lines run top to bottom in a different order. What does Wilke recommend?", options:[
     {t:"Reorder the legend to match the order of the lines, or replace it with direct labels", ok:true, why:"Matching the visual order (or removing the legend) cuts the effort of matching colours to names."},
     {t:"Keep alphabetical order because it’s standard", why:"Software uses it by default, but it fights the visual order readers see."},
     {t:"Add more colours to the legend", why:"More colours don’t solve the matching problem."},
     {t:"Move the legend inside the plot area", why:"Position isn’t the issue; order is."}
   ]},
   {id:"t3u4-q24", lesson:"t3u4-l3", level:3, q:"A pie chart has two neighbouring slices in light blue and light green that are hard to tell apart. Which fix follows W3C’s guidance on non-text contrast?", options:[
     {t:"Add a contrasting border between slices, or label each slice with its name and value", ok:true, why:"W3C’s examples: borders give the needed contrast, and visible labels and values carry the same information."},
     {t:"Make the pie 3D so the slices separate", why:"3D distorts slice sizes and doesn’t fix the contrast."},
     {t:"Use a rainbow of seven colours instead", why:"More colours create more neighbouring pairs to confuse."},
     {t:"Nothing: pie charts are exempt", why:"Only presentations where the colour itself is essential, such as some heat maps, count as exempt."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t3u4-q25", lesson:"t3u4-l4", level:2, q:"A chart shows one country’s exports as a circle and another’s, twice as big, as a circle with twice the radius. How much bigger is the second circle’s area, the thing readers judge?", options:[
     {t:"Four times bigger, because area grows with the square of the radius", ok:true, why:"2 × 2 = 4. For an honest doubling, the radius should grow by √2 ≈ 1.41."},
     {t:"Exactly twice as big", why:"Twice the radius gives 2 × 2 = 4 times the area."},
     {t:"About 1.41 times bigger", why:"That’s the radius factor for an honest doubling, not what this chart did."},
     {t:"Eight times bigger", why:"That would be volume (a sphere), not a flat circle."}
   ]},
   {id:"t3u4-q26", lesson:"t3u4-l4", level:1, q:"Why can a cumulative (running total) chart mislead?", options:[
     {t:"With positive values it can only rise, so it looks like growth even when each period’s figure is falling", ok:true, why:"New members of 40, 30, 20, 10 give a running total of 40, 70, 90, 100, still rising."},
     {t:"It always starts at zero", why:"Starting at zero is normal; the problem is what a running total hides."},
     {t:"It uses too many colours", why:"Colour isn’t the issue."},
     {t:"It can’t show time", why:"It does show time; it just hides changes in the rate."}
   ]},
   {id:"t3u4-q27", lesson:"t3u4-l4", level:3, q:"A council map shades districts by the total number of library members. The largest district is darkest and the headline says it has “the most engaged readers”. What’s the flaw?", options:[
     {t:"Totals mostly reflect population; members per 1,000 residents would show engagement", ok:true, why:"Mapping totals mainly shows where people live. Rates make districts comparable."},
     {t:"Library members can’t be mapped", why:"They can; the issue is totals versus rates."},
     {t:"The map needs a 3D effect", why:"3D would distort further."},
     {t:"The darkest colour should be red", why:"The colour choice doesn’t fix the wrong measure."}
   ]},
   {id:"t3u4-q28", lesson:"t3u4-l4", level:2, q:"For 25 people, the standard deviation of sleep is 1.0 hour. What is the standard error of the mean?", options:[
     {t:"0.2 hours", ok:true, why:"SE = SD ÷ √n = 1.0 ÷ √25 = 1.0 ÷ 5 = 0.2."},
     {t:"1.0 hour", why:"That’s the SD itself; the SE divides by √n."},
     {t:"0.04 hours", why:"That divides by n (25) instead of √n (5)."},
     {t:"5 hours", why:"That multiplies by √n instead of dividing."}
   ]},
   {id:"t3u4-q29", lesson:"t3u4-l4", level:1, q:"According to Wilke, what must you always do when a chart has error bars?", options:[
     {t:"Say what they represent (for example 95% confidence intervals or ± 1 SD)", ok:true, why:"The same data give very different bars depending on what they show."},
     {t:"Make them the same colour as the bars", why:"Colour is a design choice; the label is the requirement."},
     {t:"Add caps to the ends", why:"Caps are a matter of taste, Wilke says."},
     {t:"Draw them only above the bar", why:"Error bars usually extend both ways; what matters is the label."}
   ]},
   {id:"t3u4-q30", lesson:"t3u4-l4", level:3, q:"Two independent groups have means of 10 and 13, each with a standard error of 1. Their 95% intervals overlap. What does the 95% interval for the difference show?", options:[
     {t:"About 0.2 to 5.8, which excludes 0, so the data suggest a real difference despite the overlap", ok:true, why:"The difference’s SE is √(1² + 1²) ≈ 1.41, and 3 ± 1.96 × 1.41 ≈ 0.2 to 5.8."},
     {t:"Exactly 0, because the intervals overlap", why:"Overlap doesn’t make the difference zero; the estimated difference is 3."},
     {t:"From −1 to 7, which includes 0", why:"That uses the wrong standard error; √2 × 1 ≈ 1.41, giving about 0.2 to 5.8."},
     {t:"It can’t be calculated from this information", why:"For independent groups, the SE of the difference is √(SE₁² + SE₂²)."}
   ]},
   {id:"t3u4-q31", lesson:"t3u4-l4", level:2, q:"A forecast says there’s a 10% chance of a flood this year. Which display is most likely to give the public an accurate feel for it?", options:[
     {t:"A grid of 100 squares with 10 shaded, scattered at random", ok:true, why:"Frequency framing makes a probability concrete: unlikely, but clearly possible (Wilke, Section 16.1)."},
     {t:"A single bar reaching 10%", why:"Wilke notes a probability drawn as a bar or dot doesn’t help most people grasp what it means."},
     {t:"The number 0.1 in large type", why:"A bare decimal is the least intuitive form for most readers."},
     {t:"A 3D pie with a thin slice", why:"3D distorts slice sizes."}
   ]},
   {id:"t3u4-q32", lesson:"t3u4-l4", level:3, q:"Dmitri adds “standard error” error bars to his bar chart using his spreadsheet’s built-in button. Every bar gets the same size bar, though his groups have different sample sizes. Why?", options:[
     {t:"The built-in option calculates from the plotted values in the series, not each group’s raw data; he should calculate each margin and enter custom values", ok:true, why:"In Excel and LibreOffice Calc the built-in SD and SE options use the series’ plotted values. Custom values or a cell range fix it."},
     {t:"Standard errors are always equal for every group", why:"They depend on each group’s SD and sample size."},
     {t:"Error bars only work on line charts", why:"Error bars work on bar charts too."},
     {t:"His groups must all have the same mean", why:"The equal bars come from how the button calculates, not from the means."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t3u4-q33", lesson:"t3u4-l5", level:1, q:"What should a chart’s statistical subtitle contain, according to UK government guidance?", options:[
     {t:"What the data are, the geography and the time period", ok:true, why:"The main title states the point; the subtitle says what, where and when."},
     {t:"The author’s name and job title", why:"Authorship belongs elsewhere."},
     {t:"A repeat of the main title in different words", why:"The subtitle adds information; it doesn’t repeat the title."},
     {t:"The colours used for each series", why:"Colours are explained by labels or a legend, not the subtitle."}
   ]},
   {id:"t3u4-q34", lesson:"t3u4-l5", level:2, q:"Which is the best alt text for a bar chart of five branches’ loans?", options:[
     {t:"Bar chart of 2025 book loans at five branches. Central lent most (12,400), about twice Harbour (6,100); full figures are in the table below.", ok:true, why:"Chart type, subject, period, main message, key numbers and a pointer to the table."},
     {t:"Chart", why:"Says nothing about the content or message."},
     {t:"Image of purple bars on a cream background", why:"Describes the look, not the data."},
     {t:"See chart above", why:"The reader can’t see it; that’s why alt text exists."}
   ]},
   {id:"t3u4-q35", lesson:"t3u4-l5", level:3, q:"Amara’s chart shows that schools with breakfast clubs had higher average attendance. Her title is “Breakfast clubs raise attendance”. What’s the best revision?", options:[
     {t:"“Schools with breakfast clubs had higher attendance”, unless a study design shows cause", ok:true, why:"A statement title must match the evidence; a comparison like this shows association, not cause."},
     {t:"“Breakfast clubs definitely raise attendance”", why:"Stronger wording makes the unsupported causal claim worse."},
     {t:"“Figure 2”", why:"A label tells readers nothing; a supported statement is better."},
     {t:"“This chart shows attendance”", why:"Wilke advises against “This figure shows…” titles."}
   ]},
   {id:"t3u4-q36", lesson:"t3u4-l5", level:2, q:"Why does UK guidance suggest putting chart titles in the page or document text rather than only inside the chart image?", options:[
     {t:"Text in the page can be read by screen readers, resized and searched; text inside an image can’t", ok:true, why:"Keeping titles and key numbers as real text makes them accessible."},
     {t:"Images can’t contain text", why:"They can; it just isn’t accessible."},
     {t:"Titles inside images break the chart’s colours", why:"Colour isn’t the reason."},
     {t:"It makes the image file smaller", why:"File size isn’t the reason given."}
   ]},
   {id:"t3u4-q37", lesson:"t3u4-l5", level:1, q:"According to Wilke’s table rules, how should a column of numbers be aligned?", options:[
     {t:"Right-aligned, with the same number of decimal places", ok:true, why:"Place values line up, making numbers easy to compare."},
     {t:"Centred", why:"Centred numbers don’t line up by place value."},
     {t:"Left-aligned like text", why:"Left alignment is for text columns."},
     {t:"Alternating left and right for variety", why:"Consistency is the point."}
   ]},
   {id:"t3u4-q38", lesson:"t3u4-l5", level:3, q:"Fatima must chart a staff survey containing names and free-text comments. Which approach best protects the data?", options:[
     {t:"Make the chart in a spreadsheet on her own device (or a browser-only tool such as RAWGraphs), using only the summary figures", ok:true, why:"The personal data never leave her computer, and only aggregates appear in the chart."},
     {t:"Upload the full file to a free online tool and publish the chart", why:"That shares personal data with a company, and some free plans make published work public."},
     {t:"Paste the names into the chart’s source note", why:"That publishes personal data."},
     {t:"Email the file to a friend with a chart tool", why:"That shares personal data without need or permission."}
   ]},
   {id:"t3u4-q39", lesson:"t3u4-l5", level:2, q:"What did checking the free plans in November 2026 show about Flourish’s free plan?", options:[
     {t:"Projects you publish are public, with Flourish attribution; unpublished projects stay private", ok:true, why:"That’s the free plan as described on Flourish’s pricing page when checked. Plans change, so check again before relying on it."},
     {t:"Everything is private, even when published", why:"Published free-plan projects are public."},
     {t:"It only allows one project", why:"The pricing page listed unlimited projects."},
     {t:"It requires installing software", why:"Flourish runs in the browser."}
   ]},
   {id:"t3u4-q40", lesson:"t3u4-l5", level:2, q:"How many annotations does this unit suggest for a typical chart?", options:[
     {t:"One to three, each next to what it explains", ok:true, why:"A few well-placed notes guide the eye; many compete with each other."},
     {t:"One for every data point", why:"That crowds the chart and hides the point."},
     {t:"None: annotations are biased", why:"Accurate annotations help readers; they’re part of honest communication."},
     {t:"At least ten, so nothing is missed", why:"Too many notes overwhelm the reader."}
   ]}
  ]
});
