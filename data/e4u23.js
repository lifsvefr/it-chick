/* International Studies · Unit 14 · Economics for international affairs */
ICA.addUnit({
  id:"e4u23", track:"e4", n:14, title:"Economics for international affairs", icon:"📈",
  blurb:"The economics toolkit that graduate programmes in international affairs assume, built from zero with no equations. Learn how markets set prices, and what taxes, subsidies and price controls do. See how GDP, growth, inflation and jobs are measured, and why PPP and market exchange rates tell different stories. Then work out who gains and loses from trade and tariffs. Read the balance of payments and exchange rates, with the Asian crisis of 1997–98 as a case. Finally, read IMF and World Bank data like an analyst, with a dated comparison of two real economies.",
  goals:[
    "Use supply, demand and elasticity to predict what happens to prices and quantities when conditions change, and when governments tax, subsidise or cap prices",
    "Explain how GDP is measured, convert nominal figures into real ones, and read inflation and unemployment rates correctly",
    "Choose between market exchange rates and purchasing power parity for a comparison, and say why the answer changes the ranking of economies",
    "Explain the gains from trade and the losers inside each country, and work out what a tariff or quota does to prices, imports, revenue and efficiency",
    "Read a balance of payments, explain what moves exchange rates, compare fixed and floating regimes, and trace the economics of the 1997–98 Asian crisis",
    "Find, check and compare IMF and World Bank figures (levels, growth rates, per person, real and nominal) and write a dated, careful paragraph about two economies"
  ],
  read:[
    {book:"osecon", where:"Chapters 3 “Demand and Supply” and 5 “Elasticity”", note:"The micro foundations of Lesson 1, with many more worked examples. Its examples are mostly from the United States."},
    {book:"osecon", where:"Chapters 19 “The Macroeconomic Perspective”, 21 “Unemployment” and 22 “Inflation”", note:"National accounts, unemployment and inflation for Lessons 2 and 5."},
    {book:"osecon", where:"Chapters 23 “The International Trade and Capital Flows”, 29 “Exchange Rates and International Capital Flows”, 33 “International Trade” and 34 “Globalization and Protectionism”", note:"The open-economy chapters behind Lessons 3 and 4. Unit 16 cites them again for the politics."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u23-l1", title:"Markets and prices: supply, demand and what governments do", minutes:60,
   hook:{q:"Many governments keep fuel prices below what fuel costs to supply. According to the IMF, how much did these **explicit** fossil-fuel subsidies cost worldwide in 2022?", options:["About 13 billion dollars","About 130 billion dollars","About 1.3 trillion dollars","About 13 trillion dollars"], answer:2, reveal:"**About 1.3 trillion dollars**, after more than doubling, according to the IMF’s 2023 update. Counting unpriced pollution as well, the IMF’s wider measure reached about 7 trillion dollars, or 7.1% of world GDP. Holding a price down is one of the most common things governments do, and one of the most debated. This lesson gives you the tools to see what it does: supply, demand and elasticity."},
   goals:[
     "Explain demand, supply and market equilibrium with a worked example",
     "Tell a shift of a curve from a movement along it, and predict the effect of a shock in four steps",
     "Use price elasticity to explain why some prices swing wildly and who bears a tax",
     "Predict what taxes, subsidies, price ceilings and price floors do, and who gains and loses",
     "Describe how mainstream and heterodox economists differ about markets, with named works"
   ],
   learn:[
    {h:"Why prices matter in world politics", body:[
      {lead:"A drought in a rice-growing region. A war that closes a shipping lane. A government that caps the price of bread. Each one moves prices, and prices move politics."},
      "Graduate programmes in international affairs expect you to follow arguments that start from a price. Why did a fuel subsidy reform bring people into the streets? Why does an export ban in one country raise food bills in another? Why do sanctions on an oil exporter change petrol prices on the other side of the world? This lesson builds the tool behind all of these: a model of how buyers and sellers meet in a market.",
      "A [[market-economics|market]] is any arrangement in which buyers and sellers trade a good or service, from a village fish market to the global oil market. The Austrian economist Friedrich Hayek argued in “The Use of Knowledge in Society” (1945) that prices act as signals. A rising price tells millions of people, who never meet, that something has become scarcer. They should use it carefully or produce more of it. Economists of many schools accept the signalling idea. They disagree about how well markets work without help, which we come back to at the end.",
      {key:"A price is a signal of scarcity. When something stops a price from moving, the scarcity does not disappear; it shows up somewhere else."}
    ]},
    {h:"Demand, supply and equilibrium", body:[
      "**[[demand-economics|Demand]]** is how much buyers want to buy at each possible price, holding everything else constant (economists say [[ceteris-paribus|*ceteris paribus*]]). The **law of demand** says that, other things equal, people buy less of a good when its price rises. **[[supply-economics|Supply]]** is how much sellers want to sell at each price; at higher prices producing more becomes worthwhile, so the quantity supplied rises.",
      {table:[
        ["Price of rice (per kg)","Buyers want (tonnes)","Sellers offer (tonnes)","Result"],
        ["0.80","140","60","Shortage of 80"],
        ["1.00","120","80","Shortage of 40"],
        ["1.20","100","100","Equilibrium"],
        ["1.40","80","120","Surplus of 40"],
        ["1.60","60","140","Surplus of 80"]
      ]},
      "In this invented weekly rice market, only one price clears the market: at 1.20 a kilogram, buyers want exactly what sellers offer. That is the [[market-equilibrium|equilibrium]]. Below it there is a [[shortage|shortage]]: queues form and sellers find they can charge more. Above it there is a [[market-surplus|surplus]]: unsold rice piles up and sellers cut prices. Either way the price is pushed towards 1.20.",
      {fig:'<svg viewBox="0 0 340 384"><path class="d-ink" d="M50 20 V290 H326" fill="none" stroke-width="2"/><path class="d-rose" d="M70 50 L300 260" fill="none" stroke-width="3"/><path class="d-sage" d="M70 260 L300 50" fill="none" stroke-width="3"/><path class="d-soft" d="M50 155 H185" fill="none" stroke-width="1.5" stroke-dasharray="4 4"/><path class="d-ink" d="M50 210 H322" fill="none" stroke-width="2" stroke-dasharray="7 4"/><circle class="d-inkf" cx="185" cy="155" r="5"/><text x="180" y="138">E</text><text x="56" y="16">Price</text><text x="326" y="310" text-anchor="end">Quantity</text><text x="306" y="272">D</text><text x="306" y="50">S</text><text class="s" x="8" y="160">1.20</text><text class="s" x="8" y="215">1.00</text><text class="s" x="262" y="204">Ceiling</text><path class="d-ink" d="M125 226 V234 H245 V226" fill="none" stroke-width="1.5"/><text class="s" x="185" y="252" text-anchor="middle">Shortage: 40 t</text><text class="s" x="10" y="334">E: equilibrium, 1.20 a kg and 100 tonnes.</text><text class="s" x="10" y="352">At a ceiling of 1.00, buyers want 120 t</text><text class="s" x="10" y="370">but sellers offer only 80 t.</text></svg>', alt:"A supply and demand graph. Price is on the vertical axis and quantity on the horizontal axis. The demand line D slopes down from top left to bottom right; the supply line S slopes up from bottom left to top right. They cross at point E, the equilibrium, at a price of 1.20. A dashed horizontal line marks a price ceiling at 1.00, below E. At that price the demand line is far to the right of the supply line; a bracket between them is labelled shortage of 40 tonnes.", cap:"The rice market from the table. A ceiling below the equilibrium price creates a shortage, because buyers want more and sellers offer less."}
    ]},
    {h:"Shifts and movements: four steps", body:[
      "The most common beginner’s mistake is to confuse a **movement along** a curve with a **shift of** the curve. A change in the good’s own price moves you along the demand curve. A change in anything else that affects buyers (income, tastes, the price of a substitute, population, expectations) shifts the whole curve. The same goes for supply: costs, technology, weather, the number of sellers and taxes shift it.",
      "OpenStax’s *Principles of Economics* teaches a four-step method that works on any news story. (1) Draw the market before the event. (2) Decide whether the event shifts demand, supply or both. (3) Decide which way. (4) Compare the new equilibrium with the old.",
      {table:[
        ["Event","What shifts","New price","New quantity"],
        ["Drought cuts the rice harvest","Supply, to the left","Up","Down"],
        ["Incomes rise and people buy more meat","Demand for meat, to the right","Up","Up"],
        ["A new solar panel technology cuts costs","Supply, to the right","Down","Up"],
        ["A rumour that coffee causes illness","Demand, to the left","Down","Down"]
      ]},
      {warn:"“Higher prices reduce demand” is sloppy. Higher prices reduce the **quantity demanded**, a movement along the curve. “Demand fell” means the whole curve moved, for a reason other than the price."}
    ]},
    {h:"Elasticity: how strongly people respond", body:[
      "Supply and demand tell you the direction of a change; [[price-elasticity-of-demand|elasticity]] tells you its size. The price elasticity of demand compares the percentage change in quantity with the percentage change in price. If a 10% rise in bus fares cuts rides by 3%, the elasticity is 3 ÷ 10 = 0.3 (economists usually drop the minus sign). Below 1, demand is **inelastic**: people keep buying. Above 1, it is **elastic**: they switch or go without.",
      "Demand is inelastic for necessities with few substitutes, such as staple food, fuel and medicines, especially in the short run. It is elastic for luxuries and for goods with close substitutes, such as one brand of soft drink. Supply has an elasticity too: oil fields, harvests and factories can’t expand overnight, so supply is often inelastic in the short run.",
      "This explains a pattern you will meet again and again in international affairs. When both demand and supply are inelastic, a small shock produces a **large** price swing. A modest cut in world oil output, or a few export bans on wheat, can send prices up by far more than the quantity lost. It also explains why a seller facing inelastic demand earns **more** revenue when the price rises. In the bus example, a 10% fare rise with only 3% fewer riders brings in more money.",
      {ex:"A city raises its bus fare from 1.00 to 1.20, a 20% rise. Daily rides fall from 50,000 to 47,000, a 6% fall. Elasticity = 6 ÷ 20 = **0.3**, inelastic. Fare revenue rises from 50,000 to 47,000 × 1.20 = **56,400** a day.", label:"Worked example (invented figures)"}
    ]},
    {h:"Taxes and subsidies: who really pays?", body:[
      "A tax on a good drives a wedge between what buyers pay and what sellers keep. Who bears the burden, the [[tax-incidence|tax incidence]], does not depend on who hands the money to the government. It depends on elasticities: **the side of the market that is less able to walk away pays more**.",
      {ex:"Before a tax, fuel sells at 1.00 a litre and 100 million litres are sold. The government adds a tax of 0.30 a litre. Buyers, who have few alternatives, now pay 1.24; sellers keep 0.94. Buyers bear 0.24 of the 0.30 (80%) and sellers 0.06 (20%). Sales fall to 90.4 million litres, and the tax raises 0.30 × 90.4 = 27.1 million.", label:"Worked example: tax incidence (invented figures)"},
      "The trades that no longer happen are a loss to both sides that nobody collects as revenue: economists call it the [[deadweight-loss|deadweight loss]]. In the example, the 9.6 million litres no longer sold were worth more to buyers than they cost to produce.",
      "A [[subsidy-economics|subsidy]] is a tax in reverse: the government pays part of the price, so buyers pay less, sellers receive more and more is traded. Subsidies can serve real goals, such as cheap food for the poor or support for new clean-energy industries. Their costs are budgetary: money not spent on schools or clinics. They are also distributive. The IMF notes that fuel subsidies benefit rich households more than poor ones, because the rich use more fuel. That is why removing a subsidy is so politically hard, and why governments that do it often pair it with cash transfers to poorer households."
    ]},
    {h:"Price ceilings and floors", body:[
      "Governments sometimes set prices directly. A [[price-ceiling|price ceiling]] is a legal maximum, such as a cap on rents, bread or fuel. If it is set below the equilibrium, it creates a shortage, as in the diagram above. At 1.00 a kilogram, buyers want 120 tonnes but sellers offer 80. Shortages are rationed in other ways: queues, connections, black markets, falling quality.",
      "A [[price-floor|price floor]] is a legal minimum, such as a guaranteed price for farmers or a minimum wage. Set above the equilibrium, it creates a surplus. Think of unsold grain that the state must buy and store, as with Europe’s farm price supports in past decades. In the simplest model of a minimum wage, the surplus is workers who want jobs but can’t find them.",
      "The simple model is a starting point, not the last word. David Card and Alan Krueger studied fast-food restaurants in New Jersey and Pennsylvania (*American Economic Review*, 1994). They found no fall in employment after a minimum-wage rise. Card shared the 2021 economics Nobel prize partly for such work. One explanation they discussed: employers with power to set wages (economists call this monopsony) do not behave as in the textbook diagram. Not everyone agreed. David Neumark and William Wascher (*American Economic Review*, 2000) re-examined the case with payroll records and found job losses, and the debate continues. Rent control shows the other side of the caution. Rebecca Diamond, Tim McQuade and Franklin Qian (*American Economic Review*, 2019) studied San Francisco’s expansion of rent control. It helped sitting tenants stay, but landlords cut the supply of rental housing. Evidence, not the diagram alone, decides each case."
    ]},
    {h:"Markets and their critics", body:[
      "Most economists teach that competitive markets use resources efficiently, and that interventions should target a specific problem. Economists themselves name cases of [[market-failure|market failure]]. These include [[externality|externalities]] such as pollution (Unit 17), [[public-good|public goods]] that markets under-supply, firms with market power, and missing information. Seminars also meet older and wider critiques:",
      {table:[
        ["View","Claim about markets","Names to know"],
        ["Mainstream (neoclassical)","Prices coordinate well; fix specific failures","Most textbooks, e.g. OpenStax"],
        ["Austrian","Prices carry knowledge no planner has","Hayek 1945"],
        ["Keynesian","Whole economies can get stuck with idle workers","Keynes, *General Theory* (1936)"],
        ["Institutional and Polanyian","Markets are built by states and embedded in society","Polanyi, *The Great Transformation* (1944)"],
        ["Behavioural","People don’t always choose as the model assumes","Kahneman; Thaler (Nobel 2017)"]
      ]},
      "Karl Polanyi’s idea of the [[double-movement|double movement]], society pushing back against unregulated markets, returns in Unit 16 on political economy. In a seminar, use supply and demand as a tool for predicting effects. When you judge whether an intervention is wise, say which school’s assumptions you rely on.",
      {terms:["market-economics","demand-economics","supply-economics","ceteris-paribus","market-equilibrium","shortage","market-surplus","price-elasticity-of-demand","tax-incidence","deadweight-loss","subsidy-economics","price-ceiling","price-floor","market-failure","public-good"]}
    ]}
   ],
   try:[
    {id:"e4u23-l1-x1", type:"number", q:"Use the rice table in the lesson. The government sets a **price ceiling of 0.80** a kilogram. How many tonnes is the shortage?", answer:80, tol:0, unit:"tonnes", why:"At 0.80, buyers want 140 tonnes and sellers offer 60. The shortage is 140 − 60 = 80 tonnes. A lower ceiling makes the shortage bigger, because it raises the quantity demanded and cuts the quantity supplied at the same time.", wrongs:[
      {v:40, tol:0, why:"40 tonnes is the shortage at a ceiling of 1.00. At 0.80 the gap is wider."},
      {v:60, tol:0, why:"60 tonnes is what sellers offer at 0.80, not the gap between buyers and sellers."},
      {v:140, tol:0, why:"140 tonnes is what buyers want at 0.80. Subtract what sellers offer."}
    ]},
    {id:"e4u23-l1-x2", type:"sort", q:"Each event hits one market. Does it shift **demand** or **supply** in that market?", buckets:["Shifts demand","Shifts supply"], items:[
      {t:"Floods destroy part of the wheat harvest (market: wheat)", b:1, why:"Weather changes how much sellers can offer at each price."},
      {t:"Incomes rise in a large country that eats more meat as it gets richer (market: meat)", b:0, why:"Income changes how much buyers want at each price."},
      {t:"A cheaper way to make batteries is invented (market: batteries)", b:1, why:"Lower production costs let sellers offer more at each price."},
      {t:"The price of tea rises (market: coffee, a substitute)", b:0, why:"A dearer substitute makes buyers want more coffee at every coffee price."},
      {t:"A new tax is charged to every seller per litre of fuel (market: fuel)", b:1, why:"A tax on sellers raises their cost of supplying each litre, shifting supply."},
      {t:"Tourists stop visiting after a travel warning (market: hotel rooms)", b:0, why:"Fewer would-be buyers shift demand for rooms to the left."}
    ]},
    {id:"e4u23-l1-x3", type:"mcq", q:"A country’s newspapers write: “Higher bread prices reduced demand for bread.” What is the most precise correction?", options:[
      {t:"Higher prices reduced the **quantity demanded**, not demand", ok:true, why:"Right: a movement along the demand curve, not a shift of it. The good’s own price moves you along the curve. “Demand fell” would mean the curve itself moved for some other reason, such as lower incomes."},
      {t:"Higher prices increased demand, because people expect prices to rise further", why:"Expectations can shift demand, but nothing in the sentence suggests that, and it contradicts the law of demand as stated."},
      {t:"Prices cannot affect demand at all; only incomes can", why:"Prices do affect how much people buy. The point is the vocabulary: a price change moves you along the curve."},
      {t:"The sentence is correct as written", why:"It mixes up a movement along the curve with a shift of the curve, the most common mistake in reading markets."}
    ]},
    {id:"e4u23-l1-x4", type:"number", q:"Invented figures: a government raises the price of subsidised cooking gas by 25%. Households cut their use by 5%. What is the **price elasticity of demand**? (Ignore the minus sign.)", answer:0.2, tol:0.005, unit:"", why:"Elasticity = percentage change in quantity ÷ percentage change in price = 5 ÷ 25 = **0.2**. Demand is very inelastic: households keep cooking, so the price rise mostly raises their spending rather than cutting their use.", wrongs:[
      {v:5, tol:0, why:"You divided the price change by the quantity change (25 ÷ 5). Put the quantity change on top."},
      {v:20, tol:0, why:"20 is the difference between the two percentages, not their ratio."},
      {v:0.05, tol:0.001, why:"0.05 is the 5% change in quantity written as a decimal. Divide it by the 25% change in price."}
    ]},
    {id:"e4u23-l1-x5", type:"mcq", q:"Two goods face the same new tax per unit. In both markets, sellers find it hard to change output quickly. For good A, buyers have many close substitutes; for good B, they have almost none. Who bears most of each tax?", options:[
      {t:"Sellers bear most of the tax on A; buyers bear most of the tax on B", ok:true, why:"Right. The side that can walk away more easily pays less. A’s buyers can switch, so sellers absorb the tax; B’s buyers can’t, so the price they pay rises by most of the tax."},
      {t:"Whoever pays the money to the government bears it in both cases", why:"Who hands over the money doesn’t decide the burden. Incidence depends on how easily each side can respond."},
      {t:"Buyers bear most of both taxes, because taxes are always passed on", why:"Taxes are passed on fully only when buyers can’t respond at all. With good substitutes, buyers switch instead."},
      {t:"The burden is always split 50–50", why:"An even split happens only when both sides respond equally, which is a special case."}
    ]},
    {id:"e4u23-l1-x6", type:"match", q:"Match each policy with its most likely side effect in the simple supply-and-demand model.", pairs:[
      ["A rent cap set below the market rent","A shortage of rental housing","Buyers want more, sellers offer less at the capped price."],
      ["A guaranteed grain price set above the market price","A surplus that the state must buy or store","Farmers grow more and buyers buy less at the floor."],
      ["A per-unit tax on fuel","Higher prices paid, lower prices kept, fewer litres sold","The tax drives a wedge between buyers and sellers."],
      ["A per-unit subsidy on fertiliser","Lower prices paid, more fertiliser used, a budget cost","The subsidy is a tax in reverse."]
    ]},
    {id:"e4u23-l1-x7", type:"spot", q:"A student’s summary of the debates. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"Hayek argued in 1945 that prices pass on information that no single planner could gather.", flag:false, why:"Correct: that is the argument of “The Use of Knowledge in Society”."},
      " ",
      {t:"Card and Krueger’s 1994 study found that a minimum-wage rise caused large job losses in fast food.", flag:true, why:"Wrong. They found no fall in employment, which is why the study became famous."},
      " ",
      {t:"Polanyi argued that markets are embedded in society and provoke a protective counter-movement.", flag:false, why:"Correct: the double movement, in *The Great Transformation* (1944)."},
      " ",
      {t:"Because prices are signals, economists of all schools agree that governments should never set prices.", flag:true, why:"Wrong. Economists accept the signalling idea but disagree, by school and by case, about when interventions help."},
      " ",
      {t:"Externalities such as pollution are an example of market failure.", flag:false, why:"Correct: the price leaves out a cost that falls on others."}
    ]}
   ],
   apply:{
    intro:"Use the four-step method and the vocabulary on real prices. You need only a browser and a notebook.",
    tasks:[
     {t:"Read a price story", how:[
       "Find a recent news story about a price that changed sharply anywhere in the world: food, fuel, rent, a currency or a mineral.",
       "Apply the four steps: what was the market before, what shifted (demand, supply or both), which way, and what happened to price and quantity.",
       "Say whether demand or supply looks elastic or inelastic here, and why."
     ], write:"Story and date… Market… What shifted and which way… Effect on price and quantity… Elastic or inelastic, and why…"},
     {t:"Who bears it?", how:[
       "Pick one tax, subsidy or price control in a country you know. Examples: a fuel subsidy, a sugar tax, a rent cap or a minimum crop price.",
       "Using the lesson’s ideas, say who gains, who loses and whether there is a shortage, a surplus or a budget cost.",
       "Note one piece of evidence you would need before judging whether the policy works."
     ], write:"Policy and country… Who gains… Who loses… Shortage, surplus or cost… Evidence I would need…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Should a government with many poor households keep fuel prices below cost? Weigh the IMF’s view against the political case for subsidies.",
       "2. Does the Card and Krueger study show that the simple supply-and-demand model is wrong, or only that it needs the right assumptions?",
       "3. Is “the market” a natural thing that governments interfere with, or something that states create? Use Hayek and Polanyi."
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"A news story analysed in four steps, one policy with its winners and losers, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 3 “Demand and Supply”, sections 3.1 “Demand, Supply, and Equilibrium in Markets for Goods and Services” to 3.4 “Price Ceilings and Price Floors”", note:"The model step by step, including the four-step process and rent control."},
    {book:"osecon", where:"Chapter 5 “Elasticity”, sections 5.1 “Price Elasticity of Demand and Price Elasticity of Supply” and 5.3 “Elasticity and Pricing”", note:"Section 5.3 includes tax incidence. The book uses the midpoint method for percentage changes."},
    {book:"osecon", where:"Chapter 3, section 3.5 “Demand, Supply, and Efficiency”", note:"Consumer and producer surplus and why price controls create a deadweight loss; Lesson 3 uses these ideas for tariffs."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u23-l2", title:"Measuring an economy: GDP, growth, inflation and jobs", minutes:60,
   hook:{q:"Which was the largest economy in the world in 2021?", options:["The United States, by every measure","China, by every measure","It depends on how you convert other currencies into dollars","Japan"], answer:2, reveal:"**It depends on the yardstick.** Converted at market exchange rates, the US economy (about 23.6 trillion dollars) was larger than China’s (about 18.2 trillion). Converted at purchasing power parity, which adjusts for lower prices in China, China’s was larger. It was about 28.8 trillion, or 18.9% of world output, against 15.5% for the United States (World Bank, International Comparison Program 2021). This lesson explains how economies are measured and which yardstick fits which question."},
   goals:[
     "Explain what GDP counts, using value added, and why the production, expenditure and income approaches give the same total",
     "Convert nominal figures to real ones and calculate a growth rate",
     "Explain how inflation is measured with a price index, and why central banks care",
     "Read unemployment and participation rates correctly, including in economies with large informal sectors",
     "Choose between market exchange rates and PPP for a comparison, and say what GDP misses"
   ],
   learn:[
    {h:"What national accounts measure", body:[
      {lead:"When a minister says “the economy grew by 4% last year”, a whole system of statistics stands behind that sentence. Graduate seminars, IMF reports and news stories all assume you can read it."},
      "That system is the [[national-accounts|national accounts]], set out in an international manual, the [[system-of-national-accounts|System of National Accounts]] (SNA). The first version appeared in 1953. The current one, the **2025 SNA**, was adopted by the UN Statistical Commission on 5 March 2025. Countries are expected to bring it in over the following years. Its headline number is [[gdp|gross domestic product]] (GDP). GDP is the market value of all **final** goods and services produced within a country in a period, usually a year or a quarter.",
      "“Final” matters. Wheat that becomes flour that becomes bread is counted once, as bread. Statisticians do this by adding up each producer’s [[value-added|value added]]: what it sells minus what it bought from other producers.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u23-l2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="20" y="10" width="300" height="54" rx="8" stroke-width="2"/><text x="34" y="33">Farmer sells wheat: 30</text><text class="s" x="34" y="53">bought nothing · value added 30</text><path class="d-ink" d="M170 66 V86" stroke-width="2" marker-end="url(#e4u23-l2-a)"/><rect class="d-gold" x="20" y="90" width="300" height="54" rx="8" stroke-width="2"/><text x="34" y="113">Miller sells flour: 50</text><text class="s" x="34" y="133">bought wheat 30 · value added 20</text><path class="d-ink" d="M170 146 V166" stroke-width="2" marker-end="url(#e4u23-l2-a)"/><rect class="d-lup" x="20" y="170" width="300" height="54" rx="8" stroke-width="2"/><text x="34" y="193">Baker sells bread: 90</text><text class="s" x="34" y="213">bought flour 50 · value added 40</text><rect class="d-panel" x="20" y="240" width="300" height="80" rx="8" stroke-width="2"/><text x="170" y="264" text-anchor="middle">GDP = 30 + 20 + 40 = 90</text><text class="s" x="170" y="286" text-anchor="middle">= the value of the final bread</text><text class="s" x="170" y="306" text-anchor="middle">Adding all sales (170) double-counts</text></svg>', alt:"Three boxes linked by downward arrows. The farmer sells wheat for 30, having bought nothing, so value added is 30. The miller buys the wheat for 30 and sells flour for 50, adding 20. The baker buys the flour for 50 and sells bread for 90, adding 40. A summary box says GDP equals 30 plus 20 plus 40, which is 90, the value of the final bread; adding all sales, 170, would double-count.", cap:"Value added along a chain (invented figures). GDP counts each stage’s contribution once."}
    ]},
    {h:"Three ways to count, one total", body:[
      "GDP can be measured three ways, and in principle they give the same answer, because every sale is someone’s spending and someone’s income:",
      {list:[
        "**Production**: add up value added in every industry (farming, manufacturing, services).",
        "**Expenditure**: add up spending on final goods and services: household **consumption**, business **investment** (machines, buildings, stocks), **government** purchases, and **exports minus imports** ([[net-exports|net exports]]).",
        "**Income**: add up wages, profits, rents and taxes on production, less subsidies."
      ]},
      {table:[
        ["Spending in “Nalua”","Amount"],
        ["Household consumption","600"],
        ["Investment","200"],
        ["Government purchases","150"],
        ["Exports","300"],
        ["Imports (subtracted)","−250"],
        ["**GDP**","**1,000**"]
      ]},
      "Imports are subtracted not because they are bad. They were produced elsewhere, and they are already counted inside the other spending items. A tariff that cuts imports does not automatically raise GDP; Lesson 3 explains why.",
      "Two neighbours of GDP appear in development reports. [[gni|Gross national income]] (GNI) adds income that residents earn abroad and subtracts income paid to non-residents. It matters for countries with many workers or investors overseas. The World Bank uses GNI per person for its income groups (Unit 15). **GDP per person** ([[per-capita|per capita]]) divides by population and is the usual first measure of living standards."
    ]},
    {h:"Nominal and real: taking out inflation", body:[
      "GDP measured at the prices of the day is [[nominal-gdp|nominal GDP]]. It can rise just because prices rose. [[real-gdp|Real GDP]] values output at the prices of a fixed base year, so it moves only when the quantity of goods and services changes (see [[nominal-vs-real]]). The ratio of the two is the [[gdp-deflator|GDP deflator]], a broad price index.",
      {ex:"Nominal GDP rises from 1,000 to 1,100: up 10%. Over the same year prices rose 6%. Real GDP = 1,100 ÷ 1.06 = 1,037.7, so real growth is **about 3.8%**. The quick approximation, 10% − 6% = 4%, works for small numbers but drifts when inflation is high.", label:"Worked example: nominal to real (invented figures)"},
      "**Economic growth** in news and IMF reports almost always means the percentage change in real GDP. A **recession** is a broad fall in activity. A common rule of thumb is two quarters in a row of falling real GDP, though some official bodies use wider evidence. The rise and fall of activity around its trend is the **business cycle**.",
      {warn:"Always ask: nominal or real? Total or per person? Local currency or dollars? A country can post high nominal growth in its own currency, a fall in dollars and modest real growth, all in the same year. Lesson 5 shows a real case."}
    ]},
    {h:"Inflation: measuring the cost of living", body:[
      "[[inflation|Inflation]] is a general rise in prices. Statistical offices measure it with a [[consumer-price-index|consumer price index]] (CPI). The CPI tracks the cost of a fixed basket of goods and services that typical households buy, compared with a base period (see [[price-index]]). If the basket cost 200 last year and 214 this year, inflation is 14 ÷ 200 = **7%**.",
      "Prices falling across the board is [[deflation|deflation]]. It can trap an economy if people delay spending. Japan’s long experience with falling or flat prices (Unit 4) is the classic case. At the other extreme is [[hyperinflation|hyperinflation]]. Following Phillip Cagan (1956), it is often defined as prices rising more than 50% a month, as in Germany in 1923 or Zimbabwe in 2008. Money then stops doing its job.",
      "Why does inflation matter for international affairs? It erodes wages and savings, hits people on fixed incomes, and has toppled governments. Most central banks today aim for low, stable inflation. Many follow [[inflation-targeting|inflation targeting]], which New Zealand pioneered in 1990. The bank announces a numerical target and adjusts interest rates to meet it. Raising interest rates cools spending and usually strengthens the currency (Lesson 4).",
      {tip:"A CPI basket reflects average spending. Poorer households spend more of their budget on food and fuel. So when food prices jump, their own inflation rate can be far higher than the headline figure."}
    ]},
    {h:"Unemployment and the labour market", body:[
      "Under the International Labour Organization’s standard definition, a person is **unemployed** if they are of working age, without work, available to work and actively looking. The [[labour-force|labour force]] is the employed plus the unemployed. The [[unemployment-rate|unemployment rate]] is the unemployed as a share of the labour force, not of the whole population.",
      {ex:"Of 1,000 working-age adults, 570 have jobs, 30 are looking for work and 400 are neither (students, carers, retirees, people who have given up). Labour force = 570 + 30 = 600. Unemployment rate = 30 ÷ 600 = **5%**. Participation rate = 600 ÷ 1,000 = **60%**.", label:"Worked example (invented figures)"},
      "The rate can mislead in two directions. In many low-income economies measured unemployment is low, because few people can afford to have no work at all. They take whatever informal work exists (see [[informal-economy]]), often part-time or poorly paid. And people who give up looking drop out of the labour force, which **lowers** the unemployment rate. So analysts read it alongside the [[labour-force-participation-rate|participation rate]] and measures of underemployment."
    ]},
    {h:"Comparing countries: market rates or PPP?", body:[
      "To compare GDP across countries you must put it in one currency. The obvious method uses the [[market-exchange-rate|market exchange rate]]. But prices of haircuts, rent and street food are much lower in poorer countries, so a dollar converted at market rates buys far more there. [[purchasing-power-parity|Purchasing power parity]] (PPP) rates correct for this. They come from the World Bank’s [[international-comparison-program|International Comparison Program]] (ICP), which priced comparable goods in 176 economies for 2021.",
      {fig:'<svg viewBox="0 0 340 262"><text x="10" y="20">GDP in 2021 (trillion dollars)</text><text class="s" x="10" y="48">At market exchange rates</text><rect class="d-lup" x="10" y="56" width="236" height="26" rx="4" stroke-width="1.5"/><text x="18" y="74">United States 23.6</text><rect class="d-gold" x="10" y="88" width="182" height="26" rx="4" stroke-width="1.5"/><text x="18" y="106">China 18.2</text><text class="s" x="10" y="142">At purchasing power parity</text><rect class="d-gold" x="10" y="150" width="288" height="26" rx="4" stroke-width="1.5"/><text x="18" y="168">China 28.8</text><rect class="d-lup" x="10" y="182" width="236" height="26" rx="4" stroke-width="1.5"/><text x="18" y="200">United States 23.6</text><text class="s" x="10" y="232">The US figure is the same in both:</text><text class="s" x="10" y="250">the US dollar is the yardstick.</text></svg>', alt:"Two pairs of horizontal bars. At market exchange rates, the United States bar is 23.6 trillion dollars and the China bar 18.2 trillion. At purchasing power parity, China’s bar is longer, 28.8 trillion, and the United States stays at 23.6 trillion. A note says the US figure is the same in both because the US dollar is the yardstick.", cap:"One year, two rankings. Sources: World Bank ICP 2021 (PPP) and World Development Indicators, July 2026 update (market rates)."},
      "The ICP found the world economy was 152.4 trillion dollars in PPP terms in 2021, with China 18.9%, the United States 15.5% and India 7.2%. The rule of thumb: use **PPP to compare living standards** and the volume of output. Use **market exchange rates** for anything paid across borders, such as debts, oil or arms purchases, or contributions to an international budget. Both are legitimate; the mistake is not saying which one you used.",
      {tip:"*The Economist*’s Big Mac index compares the price of one burger around the world. It is a light-hearted version of the same idea. If a burger costs much less in dollars in one country, that country’s currency buys more at home than its exchange rate suggests."}
    ]},
    {h:"What the numbers miss", body:[
      "GDP measures market output. It leaves out most unpaid care and household work, as Marilyn Waring’s *If Women Counted* (1988) argued. It counts rebuilding after a disaster as a gain. It says nothing about inequality or the loss of forests and fish. Unit 15 takes up these debates and the “beyond GDP” agenda in depth (see {{beyond-gdp}}). For this unit, the practical lesson is narrower: GDP answers the question “how much was produced and sold?” well, and other questions badly. Lesson 5 adds a second caution: the numbers themselves are estimates, revised and sometimes rebased.",
      {terms:["national-accounts","system-of-national-accounts","value-added","net-exports","nominal-gdp","real-gdp","gdp-deflator","consumer-price-index","deflation","hyperinflation","inflation-targeting","labour-force","unemployment-rate","labour-force-participation-rate","market-exchange-rate","international-comparison-program"]}
    ]}
   ],
   try:[
    {id:"e4u23-l2-x1", type:"number", q:"Invented figures: a cotton farm sells cotton for 20 to a spinner. The spinner sells yarn for 45 to a clothing maker, who sells shirts to shoppers for 100. What do these activities add to **GDP**?", answer:100, tol:0, unit:"", why:"Value added: farm 20, spinner 45 − 20 = 25, clothing maker 100 − 45 = 55. Total 20 + 25 + 55 = **100**, the value of the final shirts.", wrongs:[
      {v:165, tol:0, why:"165 adds up every sale (20 + 45 + 100), counting the cotton and yarn twice."},
      {v:55, tol:0, why:"55 is only the clothing maker’s value added. Add the earlier stages too."},
      {v:80, tol:0, why:"80 leaves out the farm’s 20. The farm’s value added counts too."}
    ]},
    {id:"e4u23-l2-x2", type:"sort", q:"In the expenditure approach, where does each item go?", buckets:["Consumption","Investment","Government purchases","Net exports"], items:[
      {t:"A family buys groceries", b:0, why:"Household spending on goods and services."},
      {t:"A firm buys new machines for its factory", b:1, why:"Spending on capital goods is investment."},
      {t:"The state pays teachers’ salaries", b:2, why:"Government purchases of services, here teaching."},
      {t:"A foreign tourist pays for hotel nights", b:3, why:"Selling services to non-residents is an export."},
      {t:"A domestic factory sells tractors to a buyer abroad", b:3, why:"Sales to non-residents are exports, the positive part of net exports."},
      {t:"A construction company builds a new office block", b:1, why:"New buildings are investment."}
    ]},
    {id:"e4u23-l2-x3", type:"number", q:"Invented figures: nominal GDP grows by 15% in a year in which the GDP deflator rises by 10%. What is **real** growth, to one decimal place?", answer:4.5, tol:0.1, unit:"%", why:"Real growth = 1.15 ÷ 1.10 − 1 = 0.0455, about **4.5%**. The shortcut 15 − 10 = 5% overstates it slightly; the gap grows as inflation rises.", wrongs:[
      {v:5, tol:0.05, why:"5% is the subtraction shortcut. Divide instead: 1.15 ÷ 1.10."},
      {v:25, tol:0.1, why:"You added inflation instead of removing it."},
      {v:1.5, tol:0.1, why:"1.5 is 15 ÷ 10, a ratio of the two rates, not real growth."}
    ]},
    {id:"e4u23-l2-x4", type:"mcq", q:"Country K’s unemployment rate falls from 8% to 6% in a year in which almost no new jobs were created. What is the most likely explanation?", options:[
      {t:"Discouraged job-seekers stopped looking and left the labour force", ok:true, why:"Right. People who stop looking are no longer counted as unemployed, so the rate falls even though no one found work. Check the participation rate."},
      {t:"The country’s GDP must have risen sharply", why:"Without new jobs, nothing in the scenario points to strong growth."},
      {t:"The unemployment rate is measured as a share of the whole population, which grew", why:"It is a share of the labour force, not of the whole population."},
      {t:"Inflation fell, which lowers unemployment automatically", why:"Inflation and unemployment are measured separately; a fall in one does not mechanically change the other."}
    ]},
    {id:"e4u23-l2-x5", type:"match", q:"Match each question with the better measure.", pairs:[
      ["Which country’s people can buy more goods and services at home?","GDP per person at PPP","PPP adjusts for local prices."],
      ["How large a contribution can a country pay into an international budget in dollars?","GDP at market exchange rates","Payments abroad are made at market rates."],
      ["Did the volume of output grow last year?","Real GDP growth","Real figures remove price changes."],
      ["How fast is the cost of a typical household basket rising?","Consumer price index inflation","The CPI tracks a fixed basket."],
      ["How much income do residents earn, including from abroad?","Gross national income","GNI adds income from abroad and subtracts income paid out."]
    ]},
    {id:"e4u23-l2-x6", type:"spot", q:"A briefing note on a lower-middle-income country. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"Its GDP at PPP is well above its GDP at market exchange rates, because local prices are low.", flag:false, why:"Correct: in poorer countries PPP-based GDP is usually well above market-rate GDP."},
      " ",
      {t:"Its unemployment rate of 4% proves that almost everyone who wants a good job has one.", flag:true, why:"Wrong. Low measured unemployment often reflects informal work and underemployment, not good jobs for all."},
      " ",
      {t:"Nominal GDP rose 18% last year, so living standards rose by 18%.", flag:true, why:"Wrong. Nominal growth includes inflation and says nothing about population growth. Use real GDP per person."},
      " ",
      {t:"GDP leaves out most unpaid care work done in households.", flag:false, why:"Correct: unpaid household work is mostly outside GDP."},
      " ",
      {t:"Its imports are subtracted in the expenditure approach because they were produced abroad.", flag:false, why:"Correct: they are already inside consumption and investment, so they are taken out to count only domestic output."}
    ]},
    {id:"e4u23-l2-x7", type:"mcq", q:"A think-tank ranks countries by their share of world GDP to argue about who should pay for a global climate fund in dollars. Which measure suits that argument best, and why?", options:[
      {t:"Market exchange rates, as payments are made in dollars", ok:true, why:"Right: contributions are paid in dollars bought at market rates, and for money that crosses borders, market rates are the relevant conversion. PPP would overstate what poorer countries can pay in dollars."},
      {t:"PPP, because it is always more accurate", why:"PPP is better for comparing living standards, not for payments made abroad. Neither is “always” better."},
      {t:"Nominal GDP in each country’s own currency, with no conversion", why:"Figures in different currencies can’t be ranked against each other."},
      {t:"The consumer price index", why:"The CPI measures inflation, not the size of an economy."}
    ]}
   ],
   apply:{
    intro:"Meet the numbers at their source. Everything here is free.",
    tasks:[
     {t:"Read a GDP release", how:[
       "Find the latest GDP release from the national statistics office of a country you choose (search “[country] statistics office GDP release”).",
       "Note the period, whether the headline growth figure is real or nominal, quarterly or yearly, and which parts of spending or which industries grew fastest.",
       "Note one thing the release says will be revised later."
     ], write:"Country, office and date… Headline figure (real or nominal, period)… Fastest-growing parts… What will be revised…"},
     {t:"Two yardsticks", how:[
       "In the World Bank’s World Development Indicators (data.worldbank.org), look up GDP per person for two countries. Find it in current US dollars and in PPP dollars (search for “GDP per capita, PPP”).",
       "Note the year and both values for each country, and how much bigger the PPP figure is.",
       "Write which yardstick you would use for a paragraph on living standards and which for a paragraph on debt repayment, and why."
     ], write:"Countries and year… Current US$… PPP… Ratio… Yardstick for living standards… for debt… Why…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Should the size of a country’s economy be measured at market exchange rates or at PPP when discussing its power in world politics?",
       "2. Do low measured unemployment rates in many low-income countries describe a success or hide a problem?",
       "3. Is GDP a good enough measure for a finance ministry, even if it is a poor measure of well-being?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one real GDP release, a two-yardstick comparison with years, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 19 “The Macroeconomic Perspective”, sections 19.1 “Measuring the Size of the Economy: Gross Domestic Product” to 19.4 “Comparing GDP among Countries”", note:"GDP, nominal and real values, growth over time and cross-country comparison, with worked tables."},
    {book:"osecon", where:"Chapter 21 “Unemployment”, section 21.1 “How Economists Define and Compute Unemployment Rate”, and Chapter 22 “Inflation”, sections 22.1 “Tracking Inflation” and 22.2 “How to Measure Changes in the Cost of Living”", note:"The definitions and the arithmetic. The book’s data are for the United States; the ILO definition used here is the international one."},
    {book:"osecon", where:"Chapter 19, section 19.5 “How Well GDP Measures the Well-Being of Society”", note:"Background for Unit 15’s debates about going beyond GDP."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u23-l3", title:"Trade: who gains, who loses, and what tariffs do", minutes:60,
   hook:{q:"A country puts a 20% tariff on imported bicycles. Who hands the tariff money to that country’s customs service?", options:["The government of the exporting country","The foreign factory that made the bicycles","The importing firm in the country that set the tariff","Nobody: a tariff is a ban, not a payment"], answer:2, reveal:"**The importer**, a firm or person in the country that set the tariff, pays it at the border. Who bears the cost in the end is a different question: the tax incidence question from Lesson 1. The cost can be passed on to buyers as higher prices. It can be squeezed out of the foreign seller as a lower price, or absorbed in profits. This lesson works out what tariffs and quotas really do, after a look at why countries trade at all."},
   goals:[
     "Explain comparative advantage through opportunity cost, and the main theories of why countries trade",
     "Use consumer and producer surplus to show the national gains from trade and the concentrated losses",
     "Work out the effects of a tariff on price, imports, domestic output, revenue and deadweight loss",
     "Compare tariffs with quotas, subsidies, standards and export restrictions",
     "Explain why value chains change trade policy, and set out the mainstream and heterodox views on trade"
   ],
   learn:[
    {h:"Why countries trade: opportunity cost", body:[
      {lead:"The primer showed that two countries can both gain from trade even when one is better at making everything (see {{global-trade}}). Here is the reasoning behind that surprising claim, so that later units can build on it."},
      "Every choice has an [[opportunity-cost|opportunity cost]]: what you give up to make it. A country’s [[production-possibilities-frontier|production possibilities frontier]] shows the combinations of goods it could make with all its resources. Moving along it means giving up some of one good to get more of another.",
      {table:[
        ["One worker-day makes…","Rice","or Bicycles","Cost of 1 bicycle"],
        ["Selu","4 sacks","2 bicycles","2 sacks"],
        ["Varn","1 sack","1 bicycle","1 sack"]
      ]},
      "In this invented example Selu is better at both goods: an [[absolute-advantage|absolute advantage]]. But a bicycle costs Varn only one sack of rice in lost output, against two sacks in Selu. So Varn has the [[comparative-advantage|comparative advantage]] in bicycles and Selu in rice. Suppose each specialises in its low-cost good, and they trade at a price between one and two sacks per bicycle. Then both can consume more than they could make alone. David Ricardo set out the idea in 1817. Unit 16 works through a full numerical version, with output before and after.",
      "Why do opportunity costs differ? The **Heckscher–Ohlin** model (Eli Heckscher, 1919; Bertil Ohlin, 1933) says countries export goods that use their abundant factors intensively. Labour-abundant countries export labour-intensive goods such as garments. Capital-rich or land-rich countries export machinery or grain. Paul Krugman’s “new trade theory” (Nobel 2008) adds that much trade is between similar countries in similar goods. Economies of scale and consumers’ taste for variety drive it."
    ]},
    {h:"Winners and losers inside a country", body:[
      "Supply and demand show who gains. [[consumer-surplus|Consumer surplus]] is the difference between what buyers would have been willing to pay and what they actually pay. [[producer-surplus|Producer surplus]] is the difference between the price sellers receive and the lowest price they would have accepted. Together they measure the gains from a market.",
      "When a country opens to cheaper imports, its domestic price falls to the [[world-price|world price]]. Buyers gain consumer surplus; domestic producers of that good lose producer surplus. In the standard model buyers’ gains are larger than producers’ losses, so the country as a whole gains. That is the mainstream case for trade.",
      "But the gains are spread thinly over millions of buyers, while the losses fall heavily on particular workers, firms and towns. The [[stolper-samuelson|Stolper–Samuelson]] theorem predicts that trade lowers the returns of a country’s scarce factor. Studies of the [[china-shock|“China shock”]] found lasting job losses in exposed regions (Unit 16). Economists usually answer with the **compensation principle**: winners could compensate losers and still be better off. Whether governments actually do so, through retraining, regional aid or [[trade-adjustment-assistance|trade adjustment assistance]], is a political question, and often they don’t.",
      {key:"Trade usually raises a country’s total income, and it usually creates losers. Both claims are true; seminar arguments go wrong when they deny either one."}
    ]},
    {h:"What a tariff does", body:[
      "A [[tariff|tariff]] is a tax on imports. For a country too small to affect the world price, a tariff raises the domestic price by the amount of the tariff. Follow the effects with invented figures for bicycles:",
      {table:[
        ["","Free trade","With a 20 tariff"],
        ["Price in the country","100","120"],
        ["Bought by residents","500","400"],
        ["Made at home","100","160"],
        ["Imports","400","240"]
      ]},
      {fig:'<svg viewBox="0 0 340 424"><path class="d-ink" d="M50 14 V290 H326" fill="none" stroke-width="2"/><polygon class="d-sage" points="50,180 130,180 100,220 50,220" stroke-width="1"/><polygon class="d-rose" points="100,220 130,180 130,220" stroke-width="1"/><rect class="d-gold" x="130" y="180" width="120" height="40" stroke-width="1"/><polygon class="d-rose" points="250,180 250,220 300,220" stroke-width="1"/><path class="d-ink" d="M50 20 L326 241" fill="none" stroke-width="2.5"/><path class="d-ink" d="M50 287 L250 20" fill="none" stroke-width="2.5"/><path class="d-soft" d="M50 220 H326 M50 180 H326" fill="none" stroke-width="1.5" stroke-dasharray="5 4"/><text x="74" y="206">a</text><text x="118" y="214">b</text><text x="186" y="206">c</text><text x="262" y="214">d</text><text x="56" y="12">Price</text><text x="326" y="308" text-anchor="end">Quantity</text><text x="312" y="262">D</text><text x="256" y="24">S</text><text class="s" x="12" y="185">120</text><text class="s" x="12" y="225">100</text><text class="s" x="10" y="332">Dashed lines: world price 100, and 120</text><text class="s" x="10" y="348">with a tariff of 20.</text><text class="s" x="10" y="368">a: gain to home producers (2,600)</text><text class="s" x="10" y="384">c: tariff revenue (4,800)</text><text class="s" x="10" y="400">b and d: deadweight loss (600 + 1,000)</text><text class="s" x="10" y="416">Buyers lose a + b + c + d (9,000)</text></svg>', alt:"A supply and demand graph for bicycles in a small country. A demand line D slopes down and a supply line S slopes up. Two dashed horizontal lines mark the world price of 100 and the tariff-inclusive price of 120. Between the two lines are four shaded areas: a, on the left between the price axis and the supply line, is the gain to home producers; b, a small triangle next to the supply line, and d, a triangle next to the demand line, are deadweight losses; c, the rectangle between them, is tariff revenue. Buyers lose all four areas.", cap:"The effects of a tariff (invented figures). Buyers’ loss is larger than producers’ gain plus revenue; the difference is the deadweight loss."},
      "Buyers lose 9,000 in consumer surplus. Domestic bicycle makers gain 2,600 (area a), and the government collects 20 on each of 240 imported bicycles, 4,800 (area c). The rest, 1,600, is lost to everyone. Area b is the waste of making bicycles at home that cost more than imports. Area d is the purchases that no longer happen. That is the [[deadweight-loss|deadweight loss]] of the tariff.",
      "Two refinements matter in practice. A **large** country can push the world price down by buying less, so foreign sellers pay part of its tariff. Economists call the tariff that best exploits this an [[optimal-tariff|optimal tariff]], and note that it invites retaliation. Also, the revenue and protection go to a few groups, while the cost is spread across all buyers. That helps explain why tariffs survive politically (Unit 16)."
    ]},
    {h:"Quotas, subsidies and other barriers", body:[
      "An [[import-quota|import quota]] limits the quantity of imports instead of taxing them. With a quota the domestic price also rises. But the gap between the domestic and world price goes to whoever holds the right to import: the [[quota-rent|quota rent]]. If licences are handed out free, or if the exporter agrees to “voluntary” limits, those rents go to traders or foreign firms instead of the treasury. OpenStax’s chapter on protectionism traces the costs of US sugar quotas to buyers.",
      {list:[
        "**Subsidies** to domestic producers raise their output without raising the price buyers pay, but cost the budget; export subsidies are restricted by WTO rules.",
        "**[[non-tariff-measure|Non-tariff measures]]** include product standards, food-safety rules, licensing and customs procedures. Many protect health or the environment; some are protection in disguise. Telling them apart is a frequent subject of trade disputes.",
        "**[[export-restriction|Export restrictions]]** keep goods at home to hold domestic prices down. India’s ban on exports of non-basmati white rice, from July 2023 until it was lifted in late 2024, is an example. Demand for staple food is inelastic. So such restrictions by large exporters can push world prices up sharply for importing countries."
      ]},
      {tip:"A tariff raises revenue; a quota with free licences gives that money away. That is one reason why economists who accept some protection still usually prefer tariffs to quotas."},
      {ex:"**Task:** use the bicycle market from the tariff section (world price 100). Instead of a tariff of 20, the government allows only 240 imported bicycles a year. Who gains and who loses?\n1. First I find the new **domestic price**, because a quota works through price too. With only 240 imports, the price rises until home buyers want exactly 240 more bicycles than home makers supply. From the tariff table, that happens at **120**: residents buy 400, home makers sell 160, imports are 240.\n2. Next I note what is **the same** as under the tariff. Buyers still lose 9,000 in consumer surplus; home makers still gain 2,600; the deadweight loss is still 1,600.\n3. Then I find **what is different**: the gap between the domestic price (120) and the world price (100) on each imported bicycle. 20 × 240 = **4,800**. Under the tariff this was government revenue. Under a quota it is the [[quota-rent|quota rent]], and it goes to whoever holds the import licences.\n4. Then I compare three ways of handing out licences.\n• Auctioned by the government: the treasury gets about 4,800, as with a tariff.\n• Given free to local importers: they keep 4,800.\n• A “voluntary” export restraint run by the exporting country: foreign firms keep 4,800, so the importing country loses 1,600 + 4,800 = **6,400** in all.\n**Result:** a short table of the three cases, and one sentence: “A quota that produces the same price as a tariff has the same effects on buyers and home makers, but the 4,800 that a tariff would raise goes to licence holders, and under a voluntary export restraint it leaves the country.”\n**Common mistake:** assuming a quota “costs nothing” because no tax is collected. Buyers pay the same higher price; the only question is who receives the difference.", label:"Worked example: a quota instead of a tariff (invented figures)"}
    ]},
    {h:"Trade in value chains", body:[
      "Much of today’s trade is in parts and tasks, not finished goods. A phone or a car crosses many borders as components before it is sold. The World Bank’s *World Development Report 2020* estimates that global value chains account for almost half of world trade (see {{global-value-chains}}).",
      "This changes how to read trade numbers and policies. Gross exports count the full value of a good each time it crosses a border. So a country that assembles imported parts can show large exports while adding little value. Measures of [[trade-in-value-added|trade in value added]], such as the OECD–WTO TiVA database, trace where value is actually created. And a tariff on imported inputs is a tax on one’s own exporters, who now pay more for parts. Unit 16 takes up who captures the value and the politics of “de-risking”.",
      {ex:"**Task:** a factory in the fictional country of Selu assembles phones from imported parts. Parts cost 80 at world prices; the finished phone sells for 100 on the world market. Selu puts a 10% tariff on imported parts. What happens to the factory?\n1. First I find the factory’s **value added**, because that is what pays its workers and owners: 100 − 80 = **20** per phone.\n2. Next I apply the tariff to the parts: 80 × 1.10 = **88**. The phone still sells for 100, because Selu’s factory is too small to change the world price.\n3. Then I recompute value added: 100 − 88 = **12**. It falls from 20 to 12, a cut of **40%**, although the tariff is only 10%. The tariff on inputs works like a heavy tax on assembly.\n4. Then I compare with the opposite policy: a 10% tariff on finished phones, parts duty-free. For phones sold at home, the price rises to 110, and value added rises from 20 to 30, a gain of **50%**. Economists call this kind of calculation the **effective rate of protection**: protection measured on value added, not on the product’s price.\n5. Finally I connect it to the trade data. Selu’s gross exports count 100 per phone, but only 20 is created in Selu. [[trade-in-value-added|Trade in value added]] measures would record 20.\n**Result:** “A 10% tariff on imported parts cuts the assembler’s value added by 40%, because the tariff falls on 80% of its costs while its selling price cannot rise. In value chains, protecting inputs can mean penalising exporters.”\n**Common mistake:** judging a tariff by its headline rate. In value chains, the same rate can mean a large tax on one industry and large protection for another.", label:"Worked example: when a tariff hits your own exporters (invented figures)"}
    ]},
    {h:"Schools of thought on trade", body:[
      "The case for trade is one of the strongest results in mainstream economics, but its policy conclusions are contested. Present each view with its names:",
      {table:[
        ["School","Core claim","Names to know"],
        ["Mainstream (Ricardian and neoclassical)","Trade raises national income; help losers directly rather than block trade","Ricardo 1817; Heckscher–Ohlin; Krugman"],
        ["Developmentalist","New industries need temporary protection to catch up","Hamilton 1791; List 1841; Chang, *Kicking Away the Ladder* (2002)"],
        ["Structuralist","Commodity exporters face falling terms of trade","Prebisch and Singer (1950; Unit 15)"],
        ["Critics of hyperglobalisation","Deep integration can clash with democracy and social bargains","Rodrik, *The Globalization Paradox* (2011)"]
      ]},
      "Many mainstream economists accept the developmentalist [[infant-industry-argument|infant-industry argument]] in principle. The dispute is over whether governments can pick the right industries and remove protection later. Ha-Joon Chang argues that today’s rich countries, from Britain to the United States, protected their industries while developing. Now, he says, they “kick away the ladder” by urging free trade on others. Critics reply that protection also produced many failures, and that East Asia’s successes relied on export competition (Unit 15 covers the developmental state debate).",
      {terms:["production-possibilities-frontier","consumer-surplus","producer-surplus","world-price","trade-adjustment-assistance","optimal-tariff","import-quota","quota-rent","non-tariff-measure","export-restriction","trade-in-value-added","infant-industry-argument"]}
    ]}
   ],
   try:[
    {id:"e4u23-l3-x1", type:"number", q:"Invented figures: in Country P one worker-day makes 6 tonnes of tea or 3 radios. In Country Q it makes 2 tonnes of tea or 2 radios. What is **P’s opportunity cost of one radio**, in tonnes of tea?", answer:2, tol:0, unit:"tonnes of tea", why:"In P, a day spent on 3 radios gives up 6 tonnes of tea, so 1 radio costs 6 ÷ 3 = **2 tonnes**. In Q a radio costs 2 ÷ 2 = 1 tonne. So Q has the comparative advantage in radios and P in tea, even though P is better at both.", wrongs:[
      {v:0.5, tol:0.01, why:"0.5 is P’s cost of a tonne of tea in radios (3 ÷ 6). The question asks for the cost of a radio in tea."},
      {v:1, tol:0, why:"1 tonne is Q’s opportunity cost of a radio, not P’s."},
      {v:3, tol:0, why:"3 is how many radios P makes in a day, not what one radio costs."}
    ]},
    {id:"e4u23-l3-x2", type:"mcq", q:"In the lesson’s bicycle example, the tariff is removed and the domestic price falls back to the world price. Which statement fits the standard model?", options:[
      {t:"Buyers gain more than producers lose, so the country gains overall", ok:true, why:"Right, though bicycle makers are worse off. Consumer surplus rises by more than producer surplus falls; the gains are spread out and the losses concentrated."},
      {t:"Everyone in the country gains, including bicycle makers", why:"Domestic producers lose producer surplus when the price falls. Trade creates losers."},
      {t:"The country loses, because it imports more", why:"In the model imports are not a loss: buyers get bicycles more cheaply than they can be made at home."},
      {t:"Nothing changes for buyers, because foreign firms keep the difference", why:"For a small country the domestic price falls to the world price, so buyers pay less."}
    ]},
    {id:"e4u23-l3-x3", type:"sort", q:"After the 20 tariff on bicycles in the lesson, is each effect a **gain**, a **loss** or **revenue**?", buckets:["Gain to a group","Loss","Government revenue"], items:[
      {t:"Domestic bicycle makers sell 160 instead of 100, at 120 each", b:0, why:"Producers gain producer surplus (area a, 2,600)."},
      {t:"Residents pay 120 instead of 100 and buy 400 instead of 500", b:1, why:"Buyers lose consumer surplus (9,000 in all)."},
      {t:"20 collected on each of 240 imported bicycles", b:2, why:"Tariff revenue (area c, 4,800)."},
      {t:"Bicycles made at home that cost more than imports", b:1, why:"Area b, part of the deadweight loss."},
      {t:"100 bicycles that are no longer bought at all", b:1, why:"Area d, the other part of the deadweight loss."}
    ]},
    {id:"e4u23-l3-x4", type:"number", q:"Invented figures: world price 100. At 100, residents buy 400 tablets and local firms make 100. At 130 they buy 280 and local firms make 160. A quota allows only **120** imports, so the domestic price rises to 130. Licences are given free to importers. How large is the **quota rent**?", answer:3600, tol:0, unit:"", why:"Each licensed tablet is bought abroad at 100 and sold at home at 130, a gain of 30. Quota rent = 30 × 120 = **3,600**, kept by the licence holders. A tariff of 30 would have given the same price and sent 3,600 to the treasury instead.", wrongs:[
      {v:9000, tol:0, why:"9,000 is 30 × 300, using imports under free trade (400 − 100). Under the quota only 120 come in."},
      {v:30, tol:0, why:"30 is the gap per tablet. Multiply by the 120 tablets imported."},
      {v:15600, tol:0, why:"15,600 is 130 × 120, the full value of imports at the home price, not the rent."}
    ]},
    {id:"e4u23-l3-x5", type:"match", q:"Match each trade measure with its description.", pairs:[
      ["Tariff","A tax on imports, collected at the border","Raises the home price and earns revenue."],
      ["Import quota","A limit on the quantity that may be imported","The price gap becomes a quota rent."],
      ["Export restriction","Keeping a good at home to hold its domestic price down","Can raise world prices for importing countries."],
      ["Non-tariff measure","A standard, licence or procedure that affects trade","May protect health or be hidden protection."],
      ["Production subsidy","A payment to home producers that does not raise the price buyers pay","It costs the budget instead."]
    ]},
    {id:"e4u23-l3-x6", type:"mcq", q:"A country assembles laptops from imported parts and exports them. It raises tariffs on imported parts “to protect national industry”. What is the most likely first effect on its laptop exporters?", options:[
      {t:"Their costs rise, so they become less competitive abroad", ok:true, why:"Right. In a value chain, a tariff on inputs is a tax on one’s own exporters."},
      {t:"Their exports rise, because tariffs always help domestic firms", why:"Tariffs protect firms that compete with imports, not firms that use imports as inputs."},
      {t:"Nothing changes, because tariffs are paid by foreign suppliers", why:"Importers pay tariffs at the border; much of the cost usually reaches the buyers of the parts."},
      {t:"The country’s gross exports fall, but its value added rises automatically", why:"Nothing makes value added rise automatically; higher input costs usually cut both."}
    ]},
    {id:"e4u23-l3-x7", type:"sort", q:"Which school of thought does each claim belong to?", buckets:["Mainstream","Developmentalist","Critics of hyperglobalisation"], items:[
      {t:"Help displaced workers directly instead of blocking imports", b:0, why:"The compensation principle, the mainstream answer to trade’s losers."},
      {t:"Rich countries protected their own industries, then urged free trade on others", b:1, why:"Chang’s “kicking away the ladder” argument."},
      {t:"Deep integration can conflict with democratic choices and national social bargains", b:2, why:"Rodrik’s globalisation paradox."},
      {t:"New industries may need temporary protection before they can compete", b:1, why:"The infant-industry argument of Hamilton and List."},
      {t:"Comparative advantage means both countries can gain even if one is better at everything", b:0, why:"Ricardo’s result, the core of the mainstream case."}
    ]}
   ],
   apply:{
    intro:"Look up real trade measures and trace their effects. All the tools here are free.",
    tasks:[
     {t:"Find a real tariff", how:[
       "Open the WTO’s Tariff & Trade Data portal (ttd.wto.org) or the World Bank’s WITS site (wits.worldbank.org).",
       "Choose a country and one product (rice, cars, clothing, solar panels) and note the applied tariff and the year of the data.",
       "Using the lesson, say who in that country gains and who loses from this tariff, and roughly how."
     ], write:"Country, product and year… Tariff… Who gains… Who loses… What else I would want to know…"},
     {t:"An export restriction", how:[
       "Find a news report about one country restricting exports of a food, fertiliser or mineral.",
       "Note why the government said it acted, and what happened to prices at home and abroad.",
       "Explain the effect with supply, demand and elasticity."
     ], write:"Country, good and date… Stated reason… Prices at home… Prices abroad… My explanation…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. If trade raises national income but creates concentrated losers, what do governments owe the losers?",
       "2. Is Chang right that free-trade advice “kicks away the ladder” for developing countries?",
       "3. Are tariffs on imported inputs ever a sensible industrial policy in a world of value chains?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"One real tariff with its winners and losers, one export restriction explained with supply and demand, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 33 “International Trade”, sections 33.1 “Absolute and Comparative Advantage”, 33.3 “Intra-Industry Trade between Similar Economies” and 33.4 “The Benefits of Reducing Barriers to International Trade”", note:"Comparative advantage, trade between similar economies and the gains from lower barriers."},
    {book:"osecon", where:"Chapter 34 “Globalization and Protectionism”, sections 34.1 “Protectionism: An Indirect Subsidy from Consumers to Producers” and 34.3 “Arguments in Support of Restricting Imports”", note:"The supply-and-demand analysis of protection (including the sugar quota case) and the arguments for restricting imports."},
    {book:"wdr2020", where:"Overview", note:"The World Bank’s account of global value chains. Read it as one institution’s view."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u23-l4", title:"Money across borders: the balance of payments and exchange rates", minutes:65,
   hook:{q:"Every international transaction is recorded twice in a country’s balance of payments, once as a credit and once as a debit. So what do all its accounts add up to?", options:["The trade deficit","Zero, apart from statistical errors and omissions","The country’s GDP","The central bank’s reserves"], answer:1, reveal:"**Zero**, in principle. Suppose a country buys more from abroad than it sells: a current account deficit. It must pay for the difference by borrowing from foreigners or selling them assets. That shows up on the financial account. In practice the data never balance exactly, so statisticians add a line called net errors and omissions. This is the key to reading deficits calmly. A deficit is not money that vanished. It is a choice about borrowing that may be sensible or dangerous."},
   goals:[
     "Read a balance of payments and explain why its accounts sum to zero",
     "Use the saving–investment identity to explain current account deficits and surpluses",
     "Explain what an exchange rate is, quote changes correctly and list what moves exchange rates",
     "Compare floating, managed, pegged and shared-currency regimes, and explain how reserves defend a peg",
     "Trace the economics of the 1997–98 Asian crisis and the debates about it"
   ],
   learn:[
    {h:"The balance of payments", body:[
      {lead:"A country’s [[balance-of-payments|balance of payments]] (BoP) is its accounts with the rest of the world for a period. It records everything it sells, buys, earns, gives and borrows across borders."},
      "The IMF sets the international standard. The sixth edition of its manual (BPM6, 2009) is being replaced by a seventh, **BPM7**. It was released in March 2025 alongside the 2025 SNA. The recommended time for countries to bring in both is 2029–2030. The basic structure stays the same:",
      {fig:'<svg viewBox="0 0 340 372"><rect class="d-lup" x="10" y="10" width="320" height="112" rx="8" stroke-width="2"/><text x="22" y="34">Current account</text><text class="s" x="22" y="56">Goods and services (trade balance)</text><text class="s" x="22" y="76">Primary income: wages, interest,</text><text class="s" x="22" y="92">dividends and profits</text><text class="s" x="22" y="112">Secondary income: remittances, aid</text><rect class="d-soft" x="10" y="134" width="320" height="56" rx="8" stroke-width="2"/><text x="22" y="158">Capital account</text><text class="s" x="22" y="178">Usually small: e.g. debt forgiveness</text><rect class="d-gold" x="10" y="202" width="320" height="94" rx="8" stroke-width="2"/><text x="22" y="226">Financial account</text><text class="s" x="22" y="248">Direct investment · portfolio investment</text><text class="s" x="22" y="266">Other investment (loans, deposits)</text><text class="s" x="22" y="284">Reserve assets of the central bank</text><rect class="d-panel" x="10" y="308" width="320" height="56" rx="8" stroke-width="2"/><text class="s" x="170" y="330" text-anchor="middle">Current + capital = financial account</text><text class="s" x="170" y="350" text-anchor="middle">(net lending), plus errors and omissions</text></svg>', alt:"Three stacked boxes. The current account contains goods and services, which make up the trade balance; primary income, such as wages, interest, dividends and profits; and secondary income, such as remittances and aid. The capital account is usually small, for example debt forgiveness. The financial account contains direct investment, portfolio investment, other investment such as loans and deposits, and the central bank’s reserve assets. A bottom box says the current plus capital account equals the financial account, or net lending, plus errors and omissions.", cap:"The structure of the balance of payments under the IMF’s manual."},
      "The [[current-account|current account]] records three things. First, trade in goods and services (the [[trade-balance|trade balance]]). Second, [[primary-income|primary income]], such as interest and profits paid to foreign owners. Third, **secondary income**: transfers such as [[remittances|remittances]] and aid. For countries such as Nepal, Tajikistan or Tonga, remittances are a large part of national income. The [[financial-account|financial account]] records the purchase and sale of assets. These include [[foreign-direct-investment|foreign direct investment]] (FDI): a lasting stake in a firm, usually 10% or more of the voting power. They also include shares and bonds (portfolio investment), loans and deposits, and changes in the central bank’s reserves.",
      {ex:"“Karavia” exports goods worth 120 and imports 150 (−30). It sells services worth 40 and buys 30 (+10). It pays 10 more in interest and profits abroad than it receives (−10). It receives 20 in remittances (+20). Its current account is −30 + 10 − 10 + 20 = **−10**. To pay for this, it must take in a net 10 on the financial account. For instance, foreigners build a factory worth 15, while residents buy 5 of foreign bonds.", label:"Worked example (invented figures)"}
    ]},
    {h:"Deficits, surpluses and the saving–investment identity", body:[
      "Is a current account deficit bad? Not in itself. A useful identity, the [[saving-investment-identity|saving–investment identity]], says that a country’s current account balance equals its national saving minus its domestic investment. Say a country invests 26% of GDP but saves only 22%. It must borrow the other 4% from abroad, so it runs a current account deficit of about 4% of GDP.",
      "So the question is **what the borrowing pays for**. Borrowing to build ports and factories that will raise future exports can be sensible; many fast-growing economies ran deficits. Borrowing to fund consumption, a property bubble or a government that can’t raise taxes is riskier, especially if the debt is short-term and in foreign currency. Surpluses aren’t simply “good” either: a large surplus means a country saves more than it invests at home and lends the rest abroad. Germany, China and Japan have been criticised for large surpluses, and the United States for large deficits; economists disagree about how much this matters.",
      {warn:"A bilateral trade deficit with one partner tells you little. Overall balances reflect saving and investment across the whole economy, not unfair dealing by any single partner."}
    ]},
    {h:"Exchange rates: the price of a currency", body:[
      "An [[exchange-rate|exchange rate]] is the price of one currency in terms of another. Most are quoted as units of local currency per US dollar. If the rate moves from 25 to 50 baht per dollar, the baht has **depreciated**: it buys fewer dollars. The dollar has **appreciated** against the baht ([[currency-depreciation|depreciation]] and [[currency-appreciation|appreciation]]).",
      {ex:"An imported medicine costs 10 dollars. At 25 baht per dollar it costs 250 baht; at 50 baht per dollar, **500 baht**. The baht’s value fell from 0.04 to 0.02 dollars, a 50% depreciation. Seen from the other side, the dollar gained 100% against the baht. Both are correct; always say which currency you are describing.", label:"Worked example: reading a currency move"},
      "Exchange rates are set, for floating currencies, by supply and demand in the foreign-exchange market (Lesson 1’s tools again). Foreigners demand a currency to buy its exports and assets; residents supply it when they buy imports and foreign assets. What shifts those curves?",
      {table:[
        ["Force","Effect on the currency","Time frame"],
        ["Higher interest rates at home","Attracts investors: tends to appreciate","Days to months"],
        ["Higher inflation than partners","Erodes purchasing power: tends to depreciate","Years"],
        ["Fall in the price of a main export","Less foreign demand: tends to depreciate","Months"],
        ["Political or financial risk","Investors leave: tends to depreciate","Can be sudden"]
      ]},
      "Over long periods, currencies tend to move towards what relative inflation rates imply, a version of PPP. In the short run, capital flows and expectations dominate. Economists distinguish the nominal rate from the [[real-exchange-rate|real exchange rate]], which adjusts for price levels and measures competitiveness. A depreciation makes exports cheaper abroad and imports dearer at home. It can boost exporters, but it also raises inflation and the burden of debts owed in foreign currency (see [[original-sin-debt]])."
    ]},
    {h:"Fixed, floating and in between", body:[
      "Governments choose an exchange-rate regime. The IMF classifies every member’s regime each year in its *Annual Report on Exchange Arrangements and Exchange Restrictions*. The range runs from free floats to giving up a national currency altogether:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u23-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><path class="d-ink" d="M24 18 V310" stroke-width="2" marker-end="url(#e4u23-l4-a)"/><text class="s" x="34" y="16">More flexibility</text><rect class="d-sage" x="40" y="26" width="290" height="50" rx="6" stroke-width="1.5"/><text x="50" y="46">Free float</text><text class="s" x="50" y="66">Market sets the rate: e.g. Japan</text><rect class="d-lup" x="40" y="84" width="290" height="50" rx="6" stroke-width="1.5"/><text x="50" y="104">Managed float</text><text class="s" x="50" y="124">Floats, with frequent intervention</text><rect class="d-gold" x="40" y="142" width="290" height="50" rx="6" stroke-width="1.5"/><text x="50" y="162">Soft peg or crawl</text><text class="s" x="50" y="182">Held near a target that can change</text><rect class="d-rose" x="40" y="200" width="290" height="50" rx="6" stroke-width="1.5"/><text x="50" y="220">Hard peg: currency board</text><text class="s" x="50" y="240">Fixed by law: e.g. Hong Kong, 1983</text><rect class="d-panel" x="40" y="258" width="290" height="50" rx="6" stroke-width="1.5"/><text x="50" y="278">No national currency</text><text class="s" x="50" y="298">Ecuador uses the dollar; euro area</text><text class="s" x="34" y="326">More fixity</text></svg>', alt:"A vertical spectrum with an arrow from more flexibility at the top to more fixity at the bottom. Five boxes: free float, where the market sets the rate, for example Japan; managed float, which floats with frequent intervention; soft peg or crawl, held near a target that can change; hard peg or currency board, fixed by law, for example Hong Kong since 1983; and no national currency, as in Ecuador, which uses the US dollar, or the euro area.", cap:"The spectrum of exchange-rate regimes, following OpenStax’s “spectrum of exchange rate policies”."},
      "Each choice trades off something. A [[fixed-exchange-rate|fixed rate]] gives traders certainty and can anchor inflation. But if capital moves freely, the central bank must give up its own interest-rate policy. This is the [[impossible-trinity|impossible trinity]], which Unit 16 develops. A float absorbs shocks but can be volatile. Milton Friedman’s “The Case for Flexible Exchange Rates” (1953) is the classic argument for floating. Guillermo Calvo and Carmen Reinhart’s “Fear of Floating” (2002) showed that many countries that say they float in fact intervene heavily. Foreign-currency debts are often the reason.",
      "To hold a peg, a central bank needs [[foreign-exchange-reserves|foreign-exchange reserves]]. When people sell its currency, it [[foreign-exchange-intervention|intervenes]] by buying its own currency with dollars. It may also raise interest rates. Markets may come to believe the reserves will run out. Then a [[speculative-attack|speculative attack]] can become self-fulfilling: everyone sells before the devaluation, which makes the devaluation happen."
    ]},
    {h:"Case: the Asian crisis of 1997–98", body:[
      "Unit 2 read the 1997–98 crisis through rival IR theories, and Unit 16 compares it with other crises. Here are the economic mechanics. In the early 1990s Thailand, Indonesia, Korea and their neighbours grew fast. They kept their currencies pegged or tightly managed against the dollar. Banks and firms borrowed heavily abroad to fund property and investment. Much of it was **short-term and in dollars**, and much of it was unhedged. Thailand ran a large current account deficit.",
      {ol:[
        "**Mid-1997**: speculative attacks on the baht. Thailand’s reserves ran low, and on 2 July it let the baht float. It fell sharply.",
        "**Contagion**: investors pulled money from economies with similar weaknesses: Indonesia, Malaysia, the Philippines and Korea (see [[financial-contagion]] and [[sudden-stop]]). By early October the rupiah had lost about 30% of its value.",
        "**Rescues**: IMF-supported packages for Thailand (approved 20 August 1997; about 17.2 billion dollars in all) and Indonesia (5 November 1997). Korea’s followed on 4 December 1997: about 58 billion dollars in all, about 21 billion of it from the IMF.",
        "**Balance sheets**: as currencies fell, dollar debts swelled in local currency; firms and banks failed. In 1998 Indonesia’s GDP fell by about 14% and Korea’s by about 7%, by the IMF’s figures.",
        "**Adjustment**: imports collapsed and current accounts swung into surplus within a year. Afterwards, the region built large reserves and the Chiang Mai swap network (Unit 13)."
      ]},
      "The debate is still alive. The IMF later judged that its programmes’ first fiscal targets had been “too tight”. In November 1997 sixteen Indonesian banks were closed with no clear guarantee for depositors. The IMF accepted that this uncertainty helped speed up bank runs. Joseph Stiglitz (*Globalization and Its Discontents*, 2002) argued that high interest rates and austerity deepened the slump. Steven Radelet and Jeffrey Sachs (1998) called it a financial panic that better crisis management could have stopped. Others stressed **moral hazard** (see [[moral-hazard]]): lenders and borrowers had expected to be rescued. Defenders of the IMF argued that high interest rates were needed to stop currencies falling further. Malaysia’s capital controls of September 1998 remain a test case for both sides (Unit 16).",
      {terms:["balance-of-payments","current-account","trade-balance","primary-income","financial-account","foreign-direct-investment","saving-investment-identity","exchange-rate","currency-depreciation","currency-appreciation","real-exchange-rate","fixed-exchange-rate","foreign-exchange-reserves","foreign-exchange-intervention","speculative-attack"]}
    ]}
   ],
   try:[
    {id:"e4u23-l4-x1", type:"number", q:"Invented figures for “Morea”: goods exports 200, goods imports 260, services exports 50, services imports 30, net primary income −15, remittances received 35. What is its **current account balance**?", answer:-20, tol:0, unit:"", why:"Goods −60, services +20, primary income −15, secondary income +35: −60 + 20 − 15 + 35 = **−20**. Morea must take in a net 20 on its financial account, by borrowing or selling assets.", wrongs:[
      {v:-60, tol:0, why:"−60 is only the goods balance. The current account also includes services and both kinds of income."},
      {v:-40, tol:0, why:"−40 is the goods and services balance (the trade balance). Add primary and secondary income."},
      {v:-90, tol:0, why:"You subtracted the remittances instead of adding them. Remittances received are a credit."}
    ]},
    {id:"e4u23-l4-x2", type:"sort", q:"Which account of the balance of payments records each transaction?", buckets:["Current account","Financial account"], items:[
      {t:"A nurse working abroad sends money home to her family", b:0, why:"A remittance is secondary income, in the current account."},
      {t:"A foreign carmaker builds a factory in the country", b:1, why:"Foreign direct investment, in the financial account."},
      {t:"A foreign pension fund buys government bonds", b:1, why:"Portfolio investment, in the financial account."},
      {t:"The country pays interest on its foreign loans", b:0, why:"Interest is primary income, in the current account."},
      {t:"Tourists from abroad pay for hotels and tours", b:0, why:"An export of services, in the current account."},
      {t:"The central bank sells dollars from its reserves", b:1, why:"Changes in reserve assets are in the financial account."}
    ]},
    {id:"e4u23-l4-x3", type:"number", q:"Invented figures: the “kora” moves from 40 to 50 kora per US dollar. By what **percentage did the kora depreciate** against the dollar?", answer:20, tol:0.2, unit:"%", why:"One kora was worth 1 ÷ 40 = 0.025 dollars and is now worth 1 ÷ 50 = 0.020. The fall is 0.005 ÷ 0.025 = **20%**. The dollar, meanwhile, rose 25% against the kora (from 40 to 50 kora).", wrongs:[
      {v:25, tol:0.2, why:"25% is how much the dollar appreciated (10 ÷ 40). The kora’s own value fell by 20%."},
      {v:10, tol:0, why:"10 is the change in kora per dollar, not a percentage."},
      {v:80, tol:0, why:"80% is the kora’s new value as a share of its old value (40 ÷ 50). The fall is 100% − 80%."}
    ]},
    {id:"e4u23-l4-x4", type:"mcq", q:"A country invests 30% of its GDP and saves 25%. What does the saving–investment identity tell you?", options:[
      {t:"It runs a current account deficit of about 5% of GDP, financed by borrowing from abroad or selling assets", ok:true, why:"Right. Investment above national saving must be financed from abroad, which is the current account deficit."},
      {t:"It runs a current account surplus of 5%, because it invests so much", why:"Investing more than you save means borrowing from abroad, which is a deficit."},
      {t:"Its trade must be balanced, because saving and investment are domestic matters", why:"The identity links domestic saving and investment directly to the current account."},
      {t:"It proves that the country’s trade partners are behaving unfairly", why:"The identity is about saving and investment at home; it says nothing about partners’ conduct."}
    ]},
    {id:"e4u23-l4-x5", type:"order", q:"Put the steps of a speculative attack on a pegged currency in a typical order.", items:[
      {t:"Markets start to doubt that the central bank has enough reserves", why:"Doubts come first: a large deficit, short-term foreign debt or falling reserves."},
      {t:"Investors and firms sell the currency before it can be devalued", why:"If a devaluation is expected, selling now avoids a loss."},
      {t:"The central bank sells reserves and raises interest rates to defend the peg", why:"Intervention and higher rates try to stop the selling."},
      {t:"Reserves run low and the peg is abandoned", why:"The selling uses up reserves, which makes devaluation happen: the attack fulfils itself."},
      {t:"The currency falls and foreign-currency debts swell in local terms", why:"The balance-sheet damage that turns a currency crisis into a wider crisis."}
    ]},
    {id:"e4u23-l4-x6", type:"match", q:"Match each regime with an example from the lesson.", pairs:[
      ["Free float","Japan’s yen","The market sets the rate."],
      ["Currency board","The Hong Kong dollar since 1983","Fixed by law and backed by reserves."],
      ["Dollarisation","Ecuador’s use of the US dollar","The country uses another country’s currency instead of its own."],
      ["Monetary union","The euro area","Members share one currency and one central bank."]
    ]},
    {id:"e4u23-l4-x7", type:"spot", q:"A student’s account of the Asian crisis. Tap each sentence that **gets it wrong**.", ask:"gets it wrong", parts:[
      {t:"Before 1997 many banks and firms in the region had borrowed short-term in dollars.", flag:false, why:"Correct, and much of that borrowing was unhedged."},
      " ",
      {t:"Thailand floated the baht on 2 July 1997, and it fell sharply.", flag:false, why:"Correct."},
      " ",
      {t:"As local currencies fell, dollar debts became smaller in local currency, easing the crisis.", flag:true, why:"Wrong. A falling currency makes dollar debts larger in local currency. That balance-sheet effect deepened the crisis."},
      " ",
      {t:"The IMF later accepted that its programmes’ initial fiscal targets had been too tight.", flag:false, why:"Correct: the IMF said so in its own review."},
      " ",
      {t:"Current account deficits in the crisis countries grew larger in 1998.", flag:true, why:"Wrong. Imports collapsed and current accounts swung into surplus."}
    ]}
   ],
   apply:{
    intro:"Read real external accounts and exchange-rate decisions. Everything here is free.",
    tasks:[
     {t:"Read a balance of payments", how:[
       "Find the latest balance of payments release from the central bank or statistics office of a country you choose.",
       "Note the period and the current account balance, its main parts (goods, services, primary and secondary income) and the largest items on the financial account.",
       "Write two sentences on what is financing any deficit (or where any surplus is going) and whether that looks safe."
     ], write:"Country, source and period… Current account and its parts… Main financial account items… Is it safe, and why…"},
     {t:"One currency, one year", how:[
       "Pick one currency and look up its rate against the US dollar a year ago and today, on the central bank’s website.",
       "Work out the percentage change in both directions, as in the kora exercise.",
       "Find one reason given in the news or by the central bank, and say which force in the lesson’s table it is."
     ], write:"Currency and dates… Rates… Change in the currency’s value… Change in the dollar’s value… Reason and which force…"},
     {t:"Seminar questions", how:[
       "Choose one and write 150–250 words with a position and a counter-argument.",
       "1. Was the 1997–98 Asian crisis mainly the result of weak domestic policies or of a financial panic? Use Stiglitz, Radelet and Sachs, and the IMF’s own review.",
       "2. Should a small, open developing economy fix its exchange rate or let it float?",
       "3. Are large current account surpluses a problem for the world economy, or only for the countries that run deficits?"
     ], write:"My question… My position… Evidence… Counter-argument…"}
    ],
    proof:"Notes on one real balance of payments release, a currency’s change worked out in both directions, and a seminar paragraph with a counter-argument."
   },
   read:[
    {book:"osecon", where:"Chapter 23 “The International Trade and Capital Flows”, sections 23.1 “Measuring Trade Balances”, 23.3 “Trade Balances and Flows of Financial Capital” and 23.4 “The National Saving and Investment Identity”", note:"The current account and the saving–investment identity, with worked problems."},
    {book:"osecon", where:"Chapter 29 “Exchange Rates and International Capital Flows”, sections 29.1 “How the Foreign Exchange Market Works” to 29.4 “Exchange Rate Policies”", note:"Supply and demand for currencies, the effects of exchange rates and the spectrum of regimes."},
    {book:"osecon", where:"Chapter 23, section 23.5 “The Pros and Cons of Trade Deficits and Surpluses”", note:"Why deficits are neither good nor bad in themselves."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u23-l5", title:"Reading the numbers like an analyst", minutes:60,
   hook:{q:"In October 2026 the IMF projected that Bangladesh’s GDP per person would pass India’s in 2026, measured at market exchange rates. Measured at purchasing power parity, which country did it project to be ahead?", options:["Bangladesh, by a wide margin","India","Neither: the two figures were identical","The IMF does not publish PPP figures"], answer:1, reveal:"**India.** News reports of the IMF’s October 2026 *World Economic Outlook* gave these projections for 2026. At market rates: about 2,890 dollars per person for Bangladesh and 2,750 for India. At PPP: about 10,900 and 13,000 international dollars. Neither figure is “the truth”: they answer different questions. This lesson shows how to find, check and compare such numbers. It ends with a worked comparison of the two economies."},
   goals:[
     "Find the IMF’s World Economic Outlook and the World Bank’s World Development Indicators, and explain why their figures can differ",
     "Use growth rates, compound annual growth, percentage points and per-person figures correctly",
     "Choose the right kind of dollars (current, constant, PPP) for a question",
     "Handle fiscal years, projections, revisions and rebasing",
     "Write a dated, careful comparison of two economies from published figures"
   ],
   learn:[
    {h:"Where the numbers come from", body:[
      {lead:"Almost every economic figure you quote in a seminar starts with a national statistics office or central bank. An international organisation then collects it, checks it and sometimes adjusts it."},
      "Two databases cover most needs:",
      {list:[
        "The IMF’s **[[world-economic-outlook|World Economic Outlook]]** (WEO) database is updated twice a year, in April and October, with the report of the same name. It covers GDP, inflation, unemployment, the current account and public finances from 1980. It adds **projections** for about five years ahead. The October 2026 edition was published on 13 October 2026.",
        "The World Bank’s **[[world-development-indicators|World Development Indicators]]** (WDI) hold about 1,600 indicators for 217 economies, from GDP to school enrolment and emissions (see {{political-economic-datasets}}). WDI reports past values, not projections.",
        "For one country in depth, read the IMF’s [[article-iv-consultation|Article IV]] report, the regular check-up the Fund carries out with each member, usually every year. It contains tables, projections and the staff’s view of risks."
      ]},
      "The same indicator can differ between sources, for three reasons. Figures are revised as better data arrive, so each release is a [[data-vintage|vintage]]. Databases convert currencies at slightly different rates and handle fiscal years differently. And countries now and then [[gdp-rebasing|rebase]] their accounts, updating the base year and adding new industries. In April 2014 Nigeria moved its base year from 1990 to 2010. Its measured GDP for 2013 rose by about 89%, with no change in what anyone produced. Morten Jerven’s *Poor Numbers* (2013) shows how thin the statistical foundations are in many African countries. Users should always ask how a number was made.",
      {key:"Before you use a number, know its source, its vintage, its unit and its year. Before you compare two numbers, make sure all four match."}
    ]},
    {h:"The analyst’s arithmetic", body:[
      "A few tools cover most of what seminars and briefing papers need:",
      {table:[
        ["Tool","What it does","Example"],
        ["Growth rate","Change ÷ starting value","From 200 to 214 is 7%"],
        ["Percentage points","The difference between two rates","Inflation from 4% to 6% is up 2 points, or 50%"],
        ["Per person","Total ÷ population","GDP ÷ people"],
        ["Index number","Each value ÷ base value × 100","Base year = 100"],
        ["Compound annual growth","The steady yearly rate that links two values","See below"]
      ]},
      "Growth compounds. If real GDP per person rises by 26.9% over six years, the average annual rate is **not** 26.9 ÷ 6 = 4.5%. The [[compound-annual-growth-rate|compound annual growth rate]] (CAGR) is the rate that, applied six times, gives a total rise of 26.9%: about **4.0%** a year. The difference grows with time and with the rate.",
      "The [[rule-of-70|rule of 70]] is a quick check. Divide 70 by an annual growth rate to get the number of years it takes to double. At 2% a year, income doubles in about 35 years; at 7%, in about 10. This explains why a few points of growth, kept up for decades, separate the East Asian economies from slower growers (Unit 15).",
      {ex:"**Task:** a headline says: “Norland’s economy grew 50% in ten years: Norlanders are 50% richer.” Real GDP rose from 400 billion to 600 billion; the population rose from 50 million to 60 million. Check the claim.\n1. First I check whether the figures are **real**, because nominal growth includes inflation. Here they are in constant prices, so the 50% is real growth of the whole economy.\n2. Next I find the **compound annual growth rate**: the rate that, applied ten times, turns 400 into 600. (600 ÷ 400) to the power 1/10 = 1.0414, so about **4.1% a year**, not 50 ÷ 10 = 5%.\n3. Then I put it **per person**, because the headline is about Norlanders, not the economy. GDP per person went from 400 ÷ 50 = 8,000 to 600 ÷ 60 = 10,000 per person: a rise of **25%**, or about **2.3% a year**.\n4. Then I use the [[rule-of-70|rule of 70]] as a sanity check. At 2.3% a year, income per person doubles in about 70 ÷ 2.3 ≈ **30 years**. At 4.1%, total GDP would double in about 17 years.\n5. Finally I ask what the average hides. A 25% rise in GDP per person says nothing about how the gains were shared.\n**Result:** “Norland’s real GDP grew by 50% over the decade (about 4.1% a year), but its population grew by 20%, so real GDP per person rose by 25% (about 2.3% a year). Whether typical Norlanders are 25% better off depends on how the gains were distributed.”\n**Common mistake:** dividing total growth by the number of years. Growth compounds, so simple division overstates the annual rate, and the gap grows with time.", label:"Worked example: checking a growth headline (invented figures)"},
      {tip:"When growth rates swing a lot, a chart on a [[log-scale|logarithmic scale]] shows equal growth rates as equal slopes. Many long-run GDP charts use one."}
    ]},
    {h:"Which dollars? Matching the measure to the question", body:[
      "WDI and the WEO each publish GDP in several kinds of dollars. Choosing the right one is half of a good comparison:",
      {table:[
        ["Measure","Use it for","Watch out"],
        ["[[current-prices|Current US dollars]] (market rates)","Size in world markets; debts, imports, contributions","Moves with exchange rates and inflation"],
        ["[[constant-prices|Constant US dollars]] (e.g. 2015 prices)","Real growth over time","Not for comparing living standards between countries"],
        ["Current PPP dollars","Living standards in one year","PPP rates are estimates, revised with each ICP round"],
        ["Constant PPP dollars (e.g. 2021)","Living standards across countries and years","Best for long comparisons; still an estimate"]
      ]},
      "PPP figures are in [[international-dollar|international dollars]]: a unit that buys in each country what one US dollar buys in the United States. For the poverty line and long-run comparisons the World Bank now uses 2021 PPPs from the International Comparison Program (Lesson 2; see [[international-poverty-line]])."
    ]},
    {h:"Years, projections and revisions", body:[
      "Many countries measure their accounts over a [[fiscal-year|fiscal year]] rather than a calendar year. The IMF’s statistical appendix notes that Bangladesh’s national accounts run from July to June and India’s from April to March. Databases label these years in their own ways. That is one reason why IMF and World Bank figures for the same “year” rarely match exactly.",
      "WEO figures for the current and future years are [[economic-projection|projections]], not data. For example, the October 2026 WEO projected India’s growth (on its fiscal-year basis) at 7.0% for both 2026 and 2027, as widely reported. Projections are revised in every edition, so always quote the edition. Write “the IMF projected in October 2026…”, never “India will grow by 7%”.",
      {warn:"Never mix vintages in one table. A 2025 figure from the April edition and a 2026 figure from the October edition can show a change that is really a revision."}
    ]},
    {h:"Worked comparison: Bangladesh and India", body:[
      "Bangladesh (about 174 million people in 2024) and India are neighbours. Their sizes are very different, but their income levels are similar. Here is what the World Bank’s WDI (July 2026 update) shows for GDP per person:",
      {table:[
        ["Year","Bangladesh (current US$)","India (current US$)"],
        ["2019","2,130","2,041"],
        ["2023","2,551","2,434"],
        ["2024","2,593","2,592"],
        ["2025","2,597","2,702"]
      ]},
      {fig:'<svg viewBox="0 0 340 470"><text x="10" y="18">GDP per person, current US$</text><path class="d-soft" d="M60 168 H320 M60 104 H320 M60 40 H320" fill="none" stroke-width="1"/><path class="d-ink" d="M60 40 V200 H320" fill="none" stroke-width="1.5"/><text class="s" x="8" y="172">2,000</text><text class="s" x="8" y="108">2,400</text><text class="s" x="8" y="44">2,800</text><path class="d-rose" d="M60 147.2 L103.3 128.2 M103.3 128.2 L146.7 90.7 M146.7 90.7 L190 53.4 M190 53.4 L233.3 79.8 M233.3 79.8 L276.7 73.1 M276.7 73.1 L320 72.4" fill="none" stroke-width="3"/><path class="d-lup" d="M60 161.4 L103.3 182.9 M103.3 182.9 L146.7 129.7 M146.7 129.7 L190 123.2 M190 123.2 L233.3 98.5 M233.3 98.5 L276.7 73.3 M276.7 73.3 L320 55.6" fill="none" stroke-width="3" stroke-dasharray="7 4"/><text class="s" x="60" y="218" text-anchor="middle">2019</text><text class="s" x="190" y="218" text-anchor="middle">2022</text><text class="s" x="318" y="218" text-anchor="middle">2025</text><text x="10" y="248">Real GDP per person, 2019 = 100</text><path class="d-soft" d="M60 366.7 H320 M60 333.3 H320 M60 300 H320 M60 266.7 H320" fill="none" stroke-width="1"/><path class="d-ink" d="M60 260 V400 H320" fill="none" stroke-width="1.5"/><text class="s" x="22" y="371">100</text><text class="s" x="22" y="338">110</text><text class="s" x="22" y="304">120</text><text class="s" x="22" y="271">130</text><path class="d-rose" d="M60 366.7 L103.3 358 M103.3 358 L146.7 337.3 M146.7 337.3 L190 315.5 M190 315.5 L233.3 298.2 M233.3 298.2 L276.7 286.3 M276.7 286.3 L320 277.1" fill="none" stroke-width="3"/><path class="d-lup" d="M60 366.7 L103.3 389 M103.3 389 L146.7 361.6 M146.7 361.6 L190 338.7 M190 338.7 L233.3 316.1 M233.3 316.1 L276.7 292.5 M276.7 292.5 L320 265.5" fill="none" stroke-width="3" stroke-dasharray="7 4"/><text class="s" x="60" y="418" text-anchor="middle">2019</text><text class="s" x="190" y="418" text-anchor="middle">2022</text><text class="s" x="318" y="418" text-anchor="middle">2025</text><path class="d-rose" d="M14 440 H44" fill="none" stroke-width="3"/><text class="s" x="50" y="444">Bangladesh</text><path class="d-lup" d="M150 440 H180" fill="none" stroke-width="3" stroke-dasharray="7 4"/><text class="s" x="186" y="444">India (dashed)</text><text class="s" x="10" y="464">Source: World Bank WDI, July 2026 update</text></svg>', alt:"Two line charts, each with a solid line for Bangladesh and a dashed line for India, from 2019 to 2025. The upper chart shows GDP per person in current US dollars: Bangladesh rises from about 2,130 to a peak of about 2,720 in 2022, dips in 2023 and ends near 2,600; India falls in 2020, then rises steadily from about 1,900 to about 2,700 in 2025, overtaking Bangladesh in 2025. The lower chart shows real GDP per person as an index with 2019 equal to 100: Bangladesh rises smoothly to about 127; India drops to about 93 in 2020 and then climbs faster, to about 130 in 2025.", cap:"Dollar values and real growth tell different stories. Computed from World Bank WDI series (current and constant 2015 US dollars)."},
      "Read it like an analyst. In **real** terms (constant 2015 prices), GDP per person rose 26.9% in Bangladesh between 2019 and 2025: about 4.0% a year. In India it rose 30.3%, about 4.5% a year, despite India’s deeper fall in 2020. In **current dollars** the story is bumpier. In 2023 Bangladesh’s dollar figure fell by 6.1%, although real output per person grew by 4.5%. The taka lost value against the dollar, so the same output was worth fewer dollars. By 2024 the two countries were level at about 2,590 dollars. In 2025 India moved ahead.",
      "As reported in the press, the IMF’s October 2026 projections put Bangladesh back ahead at market rates in 2026 (about 2,890 against 2,750 dollars). At PPP, India stays about a fifth ahead (about 13,000 against 10,900 international dollars). So the headline “Bangladesh overtakes India” is true for one measure, in one vintage, for a projected year. It is mostly about exchange rates. A careful sentence names the measure, the source and the date."
    ]},
    {h:"Writing it up", body:[
      {ex:"“The World Bank’s World Development Indicators (July 2026 update) give GDP per person in 2025 at market exchange rates. It was about 2,600 US dollars in Bangladesh and 2,700 in India. Real GDP per person grew faster in India between 2019 and 2025 (about 4.5% a year against 4.0%). The IMF’s October 2026 projections suggest Bangladesh will edge ahead at market rates in 2026. At purchasing power parity, India remains about a fifth ahead. Both averages hide wide inequality within each country.”", label:"A model paragraph"},
      "A checklist for any number you put in a paper or brief:",
      {ol:[
        "**Source and vintage**: which database, which edition or update?",
        "**Unit**: local currency, current dollars, constant dollars or PPP? Total or per person?",
        "**Year**: calendar or fiscal? Data or projection?",
        "**Comparison**: same source, vintage and unit for every country and year?",
        "**Meaning**: what the number does not show, such as distribution, informal work or data quality."
      ]},
      "Unit 15 uses these tools for poverty and inequality data, Unit 16 for trade, debt and reserves, and Unit 18 for the SDG indicators. For hands-on practice, see the Data Literacy track’s units “Describing data” and “R for wrangling and charts”. They show how to load and plot series like these yourself.",
      {terms:["world-economic-outlook","world-development-indicators","article-iv-consultation","data-vintage","gdp-rebasing","compound-annual-growth-rate","rule-of-70","current-prices","constant-prices","international-dollar","fiscal-year","economic-projection"]}
    ]}
   ],
   try:[
    {id:"e4u23-l5-x1", type:"number", q:"Invented figures: a country’s real GDP per person rises from 1,000 to 1,500 over 10 years. What is the **compound annual growth rate**, to one decimal place?", answer:4.1, tol:0.1, unit:"%", why:"Total rise 1.5 times. The yearly rate r must satisfy: (1 + r) multiplied by itself 10 times = 1.5. So r = 1.5 to the power 1/10, minus 1 ≈ 0.0414: about **4.1%** a year. Simple division (50% ÷ 10 = 5%) overstates it because growth compounds.", wrongs:[
      {v:5, tol:0.05, why:"5% is 50% ÷ 10, which ignores compounding. Each year’s growth builds on a larger base."},
      {v:50, tol:0.5, why:"50% is the total rise over ten years, not the yearly rate."},
      {v:15, tol:0.5, why:"15 is 1,500 ÷ 100; it is not a growth rate."}
    ]},
    {id:"e4u23-l5-x2", type:"mcq", q:"An article says: “Inflation in Country R jumped by 3% this year, from 6% to 9%.” What is the precise way to say it?", options:[
      {t:"Inflation rose by 3 percentage points", ok:true, why:"Right: a rise of 3 percentage points, which is a 50% increase in the rate. The gap between two rates is in percentage points; 3 is half of 6."},
      {t:"Prices rose by 3% this year", why:"Prices rose by 9% this year. The 3 refers to the change in the inflation rate."},
      {t:"Inflation rose by 50 percentage points", why:"The rate went from 6% to 9%, a 3-point rise. The 50% describes the proportional change."},
      {t:"The sentence is already precise", why:"“Jumped by 3%” confuses a rise of 3 percentage points with a 3% rise in the rate."}
    ]},
    {id:"e4u23-l5-x3", type:"match", q:"Match each analysis with the best kind of figure.", pairs:[
      ["How fast has the volume of output per person grown since 2015?","Constant prices (real) per person","Real figures remove inflation."],
      ["How large is the economy relative to its foreign debt in dollars?","GDP in current US dollars","Debt is paid at market exchange rates."],
      ["Who has the higher living standard this year?","GDP per person in PPP dollars","PPP adjusts for local price levels."],
      ["What will growth be next year?","An IMF WEO projection, with its edition","Future years are projections, not data."]
    ]},
    {id:"e4u23-l5-x4", type:"sort", q:"Is each statement a **projection** or **past data**, as of November 2026?", buckets:["Projection","Past data"], items:[
      {t:"The IMF’s October 2026 figure for India’s growth in 2027", b:0, why:"A future year: a projection that will be revised."},
      {t:"WDI’s figure for Bangladesh’s GDP per person in 2024", b:1, why:"WDI reports past values (which can still be revised)."},
      {t:"The IMF’s October 2026 figure for Bangladesh’s GDP per person in 2026", b:0, why:"The year was not over when the WEO was published, so this is a projection."},
      {t:"WDI’s figure for India’s real GDP per person in 2020", b:1, why:"A past year, reported from national accounts."}
    ]},
    {id:"e4u23-l5-x5", type:"mcq", q:"In the worked comparison, Bangladesh’s GDP per person in current dollars fell by 6.1% in 2023 while real GDP per person rose by 4.5%. What best explains the gap?", options:[
      {t:"The taka lost value against the dollar", ok:true, why:"Right: the same output was worth fewer dollars. Current-dollar figures convert at the market exchange rate, so a depreciation lowers them even when output grows."},
      {t:"Bangladesh’s output fell in 2023", why:"Real output per person rose by 4.5%. It was the dollar value that fell."},
      {t:"Population fell sharply in 2023", why:"Both figures are per person, so a population change would affect both, not just one."},
      {t:"The World Bank made an arithmetic error", why:"Nothing suggests an error; the gap is exactly what a currency fall produces."}
    ]},
    {id:"e4u23-l5-x6", type:"spot", q:"A draft policy brief. Tap each sentence that **needs fixing**.", ask:"needs fixing", parts:[
      {t:"India will grow by 7.0% in 2027.", flag:true, why:"This is an IMF projection, not a fact. Write “the IMF projected in October 2026 that…”."},
      " ",
      {t:"According to the World Bank’s WDI (July 2026 update), India’s GDP per person in 2025 was about 2,700 US dollars at market exchange rates.", flag:false, why:"Fine: source, vintage, unit and year are all given."},
      " ",
      {t:"Bangladesh’s 2026 GDP per person from the October WEO is compared with India’s 2026 figure from the April WEO.", flag:true, why:"Mixed vintages. Use the same edition for both countries."},
      " ",
      {t:"At PPP, both countries’ figures are several times their market-rate figures, because many goods and services cost less there than in the United States.", flag:false, why:"Fine: PPP adjusts for local price levels, and both countries’ prices are well below US prices."},
      " ",
      {t:"Because Bangladesh is projected to edge ahead at market rates, the typical Bangladeshi household is now richer than the typical Indian household.", flag:true, why:"An average at market rates says nothing about the typical household or about purchasing power; at PPP India is ahead."}
    ]},
    {id:"e4u23-l5-x7", type:"number", q:"Use the rule of 70. If a country’s real GDP per person grows steadily at **3.5%** a year, about how many years does it take to double?", answer:20, tol:0.5, unit:"years", why:"70 ÷ 3.5 = **20 years**. The exact figure at 3.5% is a little over 20, so the rule of thumb is close.", wrongs:[
      {v:35, tol:0.5, why:"35 years is the doubling time at 2%. Divide 70 by 3.5."},
      {v:28.6, tol:0.5, why:"You divided 100 by 3.5. The rule uses 70, because growth compounds."},
      {v:245, tol:1, why:"You multiplied 70 by 3.5 instead of dividing."}
    ]}
   ],
   apply:{
    intro:"Build your own dated comparison from the original sources. Everything here is free and needs no account.",
    tasks:[
     {t:"Two economies, one table", how:[
       "Choose two economies you are interested in. Open the World Bank’s DataBank (databank.worldbank.org) and choose World Development Indicators.",
       "Select four series for the last six years: GDP per capita (current US$), GDP per capita, PPP (constant 2021 international $), GDP growth (annual %) and inflation.",
       "Download or copy the table and note the date of the update.",
       "Calculate each country’s compound annual growth of real GDP per person over the period."
     ], write:"Countries, years and update date… Values… Compound annual growth… What surprised me…"},
     {t:"Check a projection", how:[
       "Open the IMF’s World Economic Outlook database (data.imf.org, “World Economic Outlook”).",
       "Find the latest projections for one of your countries: real GDP growth and inflation for this year and next.",
       "Note the edition. If you can, find the same figures in the previous edition and note how they changed."
     ], write:"Country and edition… Projections… Previous edition… Change and possible reasons…"},
     {t:"Write the paragraph", how:[
       "Using the lesson’s model and checklist, write a 120–180 word paragraph comparing your two economies.",
       "Name the source, vintage, unit and year of every number, and add one sentence on what the numbers do not show."
     ], write:"My paragraph…"}
    ],
    proof:"A dated table for two economies with compound growth rates, a WEO projection with its edition, and a careful written comparison."
   },
   read:[
    {book:"osecon", where:"Chapter 19 “The Macroeconomic Perspective”, sections 19.2 “Adjusting Nominal Values to Real Values”, 19.3 “Tracking Real GDP over Time” and 19.4 “Comparing GDP among Countries”", note:"Real values, growth over time and cross-country conversion, with practice problems."},
    {book:"osecon", where:"Chapter 20 “Economic Growth”, section 20.2 “Labor Productivity and Economic Growth”", note:"Its part “The Power of Sustained Economic Growth” shows how compound growth works, and why small growth rates sustained for decades make a large difference."},
    {book:"osecon", where:"Chapter 32 “Macroeconomic Policy Around the World”, section 32.1 “The Diversity of Countries and Economies across the World”", note:"Background for comparing economies of very different sizes and incomes."}
   ]
  }
  ],
  checkpoint:["e4u23-q02","e4u23-q05","e4u23-q06","e4u23-q11","e4u23-q15","e4u23-q17","e4u23-q20","e4u23-q23","e4u23-q29","e4u23-q34","e4u23-q41","e4u23-q43"],
  cpBank:[
   {id:"e4u23-cp01", lesson:"e4u23-l1", level:1, q:"A new deep-water port halves the cost of shipping bananas from a growing region to its main market. In that market, what shifts?", options:[
     {t:"Demand for bananas shifts left", why:"Shipping costs affect sellers, not how many bananas buyers want at each price."},
     {t:"Supply of bananas shifts right", ok:true, why:"Yes. Lower costs let sellers offer more at every price, so price tends to fall and quantity to rise."},
     {t:"Supply of bananas shifts left", why:"A cost cut makes supplying cheaper, which shifts supply to the right, not the left."},
     {t:"Nothing shifts; the market moves along its curves", why:"A change in costs is a change in conditions, which shifts the supply curve itself."}]},
   {id:"e4u23-cp02", lesson:"e4u23-l1", level:2, q:"The only ferry to an island raises fares by 10%. Islanders have no other way to reach the mainland, and trips fall by just 2%. What happens to the ferry’s fare revenue?", options:[
     {t:"It falls, because fewer people travel", why:"Fewer trips, but each pays 10% more; with demand this inelastic, revenue rises."},
     {t:"It stays the same, because price and quantity changes always cancel", why:"They cancel only when elasticity is exactly 1. Here it is 0.2."},
     {t:"It rises by roughly 8%", ok:true, why:"Yes. Elasticity is 2 ÷ 10 = 0.2. Revenue is about 1.10 × 0.98 = 1.078 times the old level."},
     {t:"It doubles, because islanders must pay any price", why:"Islanders still cut trips a little, and nothing suggests revenue doubles from a 10% rise."}]},
   {id:"e4u23-cp03", lesson:"e4u23-l2", level:2, q:"In a mineral-rich country, most mines are foreign-owned and send their profits abroad. How will its GNI compare with its GDP?", options:[
     {t:"GNI will be higher, because the mines produce a lot", why:"Production counts in GDP; the profits paid abroad are then subtracted to get GNI."},
     {t:"They will be equal, because the mines and all their output are inside the country", why:"Location puts the output in GDP, but GNI depends on who receives the income."},
     {t:"GNI cannot be calculated for such a country", why:"GNI is published for almost every country; it simply adjusts for income flows."},
     {t:"GNI will be lower, as profits paid abroad are subtracted", ok:true, why:"Yes. GNI adds income residents earn abroad and subtracts income sent to non-residents."}]},
   {id:"e4u23-cp04", lesson:"e4u23-l2", level:3, q:"Invented figures: a country’s nominal GDP rises by 12% in a year, prices rise by 8%, and population grows by 2%. Roughly how much did real GDP **per person** grow?", options:[
     {t:"About 12.0%", why:"That is nominal growth of the total, before removing inflation or dividing by population."},
     {t:"About 4.0%", why:"That removes inflation but forgets that there are 2% more people to share the output."},
     {t:"About 1.7%", ok:true, why:"Yes. 1.12 ÷ 1.08 ÷ 1.02 is about 1.017, so real output per person grew by about 1.7%."},
     {t:"About 6.0%", why:"6% adds population growth instead of dividing by it."}]},
   {id:"e4u23-cp05", lesson:"e4u23-l3", level:2, q:"A very large importer of a commodity puts a tariff on it. World sellers have few other buyers, so the world price falls. Who pays part of the tariff?", options:[
     {t:"Foreign sellers, who now receive a lower price", ok:true, why:"Yes. A large buyer can push the world price down, shifting part of the burden abroad. This is the optimal-tariff idea, and it invites retaliation."},
     {t:"Only the importer’s own consumers, as always", why:"For a small country that is true; a large buyer can shift part of the cost to foreign sellers."},
     {t:"Nobody, because the tariff revenue cancels the cost", why:"Revenue is a transfer, not a cancellation; someone still pays it."},
     {t:"The WTO, which reimburses tariffs", why:"The WTO does not pay or reimburse tariffs."}]},
   {id:"e4u23-cp06", lesson:"e4u23-l3", level:3, q:"A country with no domestic producers puts a 15% tariff on an imported medicine that patients cannot do without. Combining Lessons 1 and 3, what follows?", options:[
     {t:"Domestic producers gain a lot, as in the bicycle example", why:"There are no domestic producers, so nobody at home gains producer surplus."},
     {t:"Patients bear most of the cost; the tariff raises revenue but protects no industry", ok:true, why:"Yes. With inelastic demand, buyers absorb most of the tariff, and with no local producers it works as a tax, not protection."},
     {t:"Imports fall sharply, so revenue is close to zero", why:"With inelastic demand, imports fall only a little, so the tariff raises revenue."},
     {t:"Foreign makers bear all of it, because patients must keep buying the medicine whatever it costs", why:"Patients’ inability to do without is exactly why the burden falls mostly on them."}]},
   {id:"e4u23-cp07", lesson:"e4u23-l4", level:1, q:"A foreign company buys 40% of the voting shares of a local airline and joins its board. How is this recorded?", options:[
     {t:"As an export of services in the current account", why:"No service is sold; ownership of an asset changes hands."},
     {t:"As secondary income, like a remittance", why:"Secondary income covers transfers such as remittances and aid, not purchases of shares."},
     {t:"As direct investment in the financial account", ok:true, why:"Yes. A lasting stake of 10% or more of voting power is direct investment."},
     {t:"It is not recorded because it is a private deal", why:"Private cross-border transactions are what the balance of payments records."}]},
   {id:"e4u23-cp08", lesson:"e4u23-l4", level:2, q:"A country imports most of its fuel and much of its food. Its currency falls 30% against the dollar. What is the likely effect on its consumer price index?", options:[
     {t:"It falls, because exports become cheaper", why:"Cheaper exports help foreign buyers; at home, imported goods become dearer."},
     {t:"It rises, as imported fuel and food cost more in local currency", ok:true, why:"Yes. A depreciation raises import prices, which feed into the CPI basket, hitting poorer households hardest."},
     {t:"It stays the same, because the CPI basket counts only goods made inside the country", why:"The CPI basket includes imported goods households buy, such as fuel and food."},
     {t:"It cannot change, because the CPI is fixed in a base year", why:"The basket is fixed, but its cost is measured every period, so the index moves."}]},
   {id:"e4u23-cp09", lesson:"e4u23-l4", level:3, q:"A small country pegs its currency to the dollar and allows capital to move freely. It falls into recession and wants to cut interest rates. What is its dilemma?", options:[
     {t:"None; a peg lets it set any interest rate it likes", why:"With free capital flows, rates below those abroad push money out and put pressure on the peg."},
     {t:"It must first ask the IMF to change the peg", why:"Members choose their own regimes; the IMF does not set pegs."},
     {t:"Cutting rates would make its currency appreciate", why:"Lower rates usually push a currency down, not up."},
     {t:"Lower rates would push capital out and drain reserves, so it must choose between the peg and the rate cut", ok:true, why:"Yes. This is the impossible trinity: with a fixed rate and free capital, it cannot also run its own monetary policy."}]},
   {id:"e4u23-cp10", lesson:"e4u23-l5", level:1, q:"Amara needs the IMF’s growth projection for next year for twenty countries, from one consistent source. Where should she look first?", options:[
     {t:"The World Development Indicators", why:"WDI reports past values, not IMF projections."},
     {t:"The International Comparison Program", why:"The ICP produces price comparisons (PPPs), not growth projections."},
     {t:"The World Economic Outlook database, noting the edition", ok:true, why:"Yes. The WEO gives projections for all members, updated in April and October."},
     {t:"Each country’s latest consumer price index release from its statistics office", why:"CPI releases report inflation, not growth projections, and are not one consistent source."}]},
   {id:"e4u23-cp11", lesson:"e4u23-l5", level:2, q:"Kiri wants to compare what a typical monthly pension buys in two countries for a social-policy essay. Which conversion fits best?", options:[
     {t:"Purchasing power parity, because it adjusts for local prices", ok:true, why:"Yes. The question is what the pension buys at home, which is what PPP measures."},
     {t:"Market exchange rates, because a pension is an amount of money like any other", why:"Market rates suit payments across borders; what a pension buys locally depends on local prices."},
     {t:"Constant 2015 US dollars at market rates", why:"Constant dollars remove inflation over time but do not adjust for price differences between countries."},
     {t:"No conversion; compare the local amounts directly", why:"Amounts in different currencies cannot be compared without converting them."}]},
   {id:"e4u23-cp12", lesson:"e4u23-l5", level:3, q:"A report divides a country’s external debt, owed in dollars, by its GDP at PPP, and concludes that the debt burden is small. What is the main problem?", options:[
     {t:"Nothing; PPP is always the more accurate measure", why:"PPP suits living standards; it is not more accurate for every question."},
     {t:"Debt should be compared with exports, never with GDP", why:"Debt-to-exports is a useful ratio too, but debt-to-GDP is standard; the problem is the conversion."},
     {t:"Dollar debt is repaid at market rates, so dividing by PPP-based GDP understates the burden", ok:true, why:"Yes. For a lower-income country PPP-based GDP is much larger than market-rate GDP, so the ratio looks far smaller than the real burden."},
     {t:"The report should have used real GDP growth instead", why:"Growth rates matter for debt dynamics, but the error here is the mismatch between dollar debt and PPP GDP."}]}
  ],
  codex:[
   {id:"supply-and-demand", title:"Supply and demand", aka:["demand and supply","market equilibrium","law of demand","law of supply","shortage","surplus"], tags:["economics","markets"],
    summary:"How buyers and sellers together set prices and quantities, and how to predict what a shock does to a market.",
    levels:{
     starter:[
      "A market is wherever buyers and sellers trade: a fish market, a rental market, the world oil market. **Demand** is how much buyers want at each price; **supply** is how much sellers offer at each price.",
      "Picture a village market at the end of the day. If the price of tomatoes is too high, tomatoes are left over and sellers cut the price. If it is too low, they sell out early and could have charged more. The price that leaves neither queues nor leftovers is the **equilibrium**.",
      "People buy less when a price rises (the law of demand) and sellers offer more (the law of supply). A shortage pushes prices up; a surplus pushes them down.",
      {key:"Prices move until the quantity buyers want matches the quantity sellers offer."}
     ],
     builder:[
      "**Movements versus shifts.** A change in the good’s own price moves you along a curve. Anything else shifts the curve. For demand: incomes, tastes, prices of substitutes and complements, population and expectations. For supply: costs, technology, weather, the number of sellers, taxes and subsidies.",
      "**The four-step method** (OpenStax): draw the market; decide which curve an event shifts; decide the direction; compare the new equilibrium with the old.",
      {table:[
        ["Shift","Price","Quantity"],
        ["Demand rises","Up","Up"],
        ["Demand falls","Down","Down"],
        ["Supply rises","Down","Up"],
        ["Supply falls","Up","Down"]
      ]},
      "When both curves shift at once, one of the two outcomes (price or quantity) becomes uncertain. You need the sizes of the shifts to say which way it goes.",
      "In international affairs the same tools explain food price spikes after poor harvests and the effect of sanctions on an oil exporter. They also explain currency markets (Lesson 4 of Unit 14)."
     ],
     pro:[
      "**What the model assumes.** The textbook model describes a competitive market: many buyers and sellers, a standard product, good information and no single participant able to set the price. Where firms have market power (monopoly), where buyers have power over sellers (monopsony, as in some labour markets), or where information is lopsided, outcomes differ.",
      "**Ceteris paribus.** Each curve holds everything else constant. In real data, many things change at once, so economists use statistical methods to separate demand from supply effects. Simply plotting prices against quantities over time does not trace out either curve.",
      "**Markets as institutions.** Hayek (1945) stressed prices as a way of using knowledge no one holds in full. Polanyi (1944) stressed that markets are built and regulated by states, laws and norms. Both views are useful: the first for predicting how prices respond, the second for asking who designed the market and for whom.",
      "**Seminar use.** State your shock, the curve it shifts and your assumption about elasticities. If your conclusion depends on the market being competitive, say so."
     ]
    },
    related:["elasticity","price-interventions","gains-from-trade"],
    read:[{book:"osecon", where:"Chapter 3 “Demand and Supply”, sections 3.1–3.3"}],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"},{t:"OpenStax Principles of Economics source repository (chapter and section titles)", url:"https://github.com/openstax/osbooks-principles-economics-bundle"}],
    checked:"2026-11"},
   {id:"elasticity", title:"Elasticity", aka:["price elasticity of demand","price elasticity of supply","elastic","inelastic"], tags:["economics","markets"],
    summary:"How strongly buyers and sellers respond to a price change, and why it decides price swings, revenue and who bears a tax.",
    levels:{
     starter:[
      "Elasticity measures how much people respond when a price changes. If bus fares rise 10% and rides fall 3%, riders responded only a little: demand is **inelastic**. If a soft drink’s price rises 10% and sales fall 25% because people switch brands, demand is **elastic**.",
      "Think of a rubber band. An elastic band stretches a lot when you pull it; an inelastic one hardly moves. Necessities with no substitutes (staple food, fuel, medicine) are inelastic; things with close substitutes are elastic.",
      {key:"Elasticity = percentage change in quantity ÷ percentage change in price. Below 1 is inelastic; above 1 is elastic."}
     ],
     builder:[
      "**Why it matters.** (1) **Price swings**: when both demand and supply are inelastic, small shocks cause large price changes, as in oil and grain markets. (2) **Revenue**: with inelastic demand, a price rise raises sellers’ revenue; with elastic demand it lowers it. (3) **Tax incidence**: the side that responds less bears more of a tax.",
      {table:[
        ["Elasticity","Price up 10% → revenue","Example"],
        ["0.3 (inelastic)","Rises","Bus fares, fuel"],
        ["1 (unit)","Unchanged","Special case"],
        ["2 (elastic)","Falls","One brand among many"]
      ]},
      "**Time matters.** Demand and supply are usually more elastic in the long run: people buy smaller cars, farmers plant other crops, new oil fields open. So short-run price spikes often fade.",
      "Supply has its own elasticity. Harvests and mines can’t expand quickly, so supply of many commodities is inelastic in the short run."
     ],
     pro:[
      "**Measurement.** OpenStax computes percentage changes with the **midpoint method**: it divides each change by the average of the old and new values. Then the answer is the same whether the price rises or falls. Simple percentage changes from the starting point, used in this unit’s exercises, give slightly different numbers for large changes.",
      "**Other elasticities.** The income elasticity of demand shows how purchases change as incomes rise; for example, food’s share of spending falls as countries grow richer. The cross-price elasticity shows whether goods are substitutes or complements.",
      "**In policy.** Fuel and staple-food subsidies are expensive partly because demand is inelastic: cutting them raises prices sharply before people adjust, which is why reforms are politically risky. Commodity exporters’ revenues swing widely, because world demand and supply for their exports are inelastic in the short run. This is one reason structuralists worried about dependence on primary exports (Unit 15)."
     ]
    },
    related:["supply-and-demand","price-interventions"],
    read:[{book:"osecon", where:"Chapter 5 “Elasticity”, sections 5.1 and 5.3"}],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"price-interventions", title:"Taxes, subsidies and price controls", aka:["price ceiling","price floor","tax incidence","deadweight loss","fuel subsidies","rent control","minimum wage"], tags:["economics","policy"],
    summary:"What governments do to prices, who gains and loses, and what the evidence on ceilings, floors and subsidies shows.",
    levels:{
     starter:[
      "Governments change prices in four main ways. A **tax** raises the price buyers pay and lowers what sellers keep. A **subsidy** does the opposite. A **price ceiling** is a legal maximum, such as a rent cap. A **price floor** is a legal minimum, such as a guaranteed crop price or a minimum wage.",
      "Imagine capping the price of bread below what it costs bakers to make enough. Shoppers want more, bakers make less, and the shelves empty. The shortage is the price that was not allowed to show itself.",
      {key:"Holding a price down does not remove scarcity; it moves it into queues, shortages or the budget."}
     ],
     builder:[
      "**Tax incidence.** Who bears a tax depends on elasticities, not on who pays it to the government. In Unit 14’s example, a 0.30 tax on fuel raised the buyers’ price from 1.00 to 1.24 and cut sellers’ price to 0.94: buyers bore 80%.",
      "**Deadweight loss.** Taxes and controls stop some trades that would have benefited both sides. The value of those lost trades is the deadweight loss: a cost to the economy that nobody collects.",
      "**Ceilings** below equilibrium cause shortages and rationing by queue, connections or black markets. **Floors** above equilibrium cause surpluses: unsold produce, or in the simple labour-market model, unemployment.",
      "**Subsidies at scale.** The IMF estimated explicit fossil-fuel subsidies at about 1.3 trillion dollars in 2022, and 7 trillion (7.1% of world GDP) including unpriced environmental costs. It notes that fuel subsidies benefit richer households more than poorer ones."
     ],
     pro:[
      "**Evidence tests the model.** Card and Krueger (*American Economic Review*, 1994) found no fall in fast-food jobs after New Jersey’s minimum-wage rise. One explanation is monopsony, where employers set wages. Neumark and Wascher (*American Economic Review*, 2000) re-examined the case with payroll data and found job losses. Diamond, McQuade and Qian (*American Economic Review*, 2019) found San Francisco’s rent-control expansion helped sitting tenants stay but reduced rental supply. Both are now standard seminar references for “it depends”.",
      "**Political economy.** Subsidies are easy to start and hard to stop because their benefits are visible and their costs spread out. Reforms are often paired with targeted cash transfers or phased in, and debated as matters of fairness and state legitimacy as much as efficiency.",
      "**Second-best cases.** Where a market already has a failure (pollution, market power), a tax or control can improve outcomes. A carbon tax is designed to correct an externality, not to raise prices for their own sake (Unit 17)."
     ]
    },
    related:["supply-and-demand","elasticity","tariffs-and-quotas"],
    read:[{book:"osecon", where:"Chapter 3, sections 3.4 “Price Ceilings and Price Floors” and 3.5 “Demand, Supply, and Efficiency”; Chapter 5, section 5.3"}],
    sources:[{t:"IMF Blog: Fossil Fuel Subsidies Surged to Record $7 Trillion (24 August 2023)", url:"https://www.imf.org/en/blogs/articles/2023/08/24/fossil-fuel-subsidies-surged-to-record-7-trillion"},{t:"IMF Working Paper 2023/169: IMF Fossil Fuel Subsidies Data, 2023 Update", url:"https://www.imf.org/en/publications/wp/issues/2023/08/22/imf-fossil-fuel-subsidies-data-2023-update-537281"}],
    checked:"2026-11"},
   {id:"national-accounts-gdp", title:"National accounts and GDP", aka:["GDP","gross domestic product","System of National Accounts","SNA","2025 SNA","value added","nominal and real GDP","GDP deflator"], tags:["economics","measurement"],
    summary:"How GDP is defined and measured, how nominal figures become real ones, and the international manual behind it.",
    levels:{
     starter:[
      "GDP is the market value of all final goods and services produced in a country in a period. It is the most quoted number in economics.",
      "Picture bread. The farmer’s wheat, the miller’s flour and the baker’s loaf are counted once, as the loaf. Statisticians add each producer’s **value added**: what it sells minus what it bought.",
      "GDP can be counted three ways, and they should agree. Count production, or spending (consumption, investment, government purchases and net exports), or income (wages, profits, rents and taxes).",
      {key:"Ask of any GDP number: nominal or real, total or per person, which currency, which year?"}
     ],
     builder:[
      "**Nominal and real.** Nominal GDP uses current prices; real GDP uses the prices of a base year, so it moves only with quantities. The GDP deflator (nominal ÷ real) is a broad price index. Real growth ≈ nominal growth minus inflation for small numbers; divide for precision (1.10 ÷ 1.06 − 1 = 3.8%).",
      "**GDP and GNI.** GNI adds income residents receive from abroad and subtracts income paid to non-residents. It is lower than GDP where foreign owners take profits home and higher where residents earn a lot abroad.",
      "**The manual.** National accounts follow the UN **System of National Accounts**. The first SNA appeared in 1953. The UN Statistical Commission adopted the 2025 SNA on 5 March 2025. It was released together with the IMF’s new balance of payments manual (BPM7), and countries are asked to bring both in by 2029–2030.",
      "**Recession** is a broad fall in activity; two consecutive quarters of falling real GDP is a common rule of thumb, not a universal official definition."
     ],
     pro:[
      "**Hard cases.** Services, housing (owners are imputed a rent), the informal economy, financial services and digital products are hard to measure; statisticians use surveys, tax data and models. Updates to the SNA try to keep up, for example with digitalisation.",
      "**Base years and rebasing.** Real series are tied to a base year whose price structure ages. Rebasing to a newer year, and adding new industries, can change the level of GDP sharply (Lesson 5 of Unit 14).",
      "**Critiques.** GDP leaves out unpaid household work (Waring, 1988), inequality and environmental depletion. Unit 15 covers the beyond-GDP debate; national accountants also build satellite accounts for the environment and for unpaid work alongside the core SNA."
     ]
    },
    related:["beyond-gdp","ppp-vs-market-rates","growth-arithmetic","inflation-and-unemployment"],
    read:[{book:"osecon", where:"Chapter 19 “The Macroeconomic Perspective”, sections 19.1–19.3"}],
    sources:[{t:"IMF Press Release 25/072: IMF and the Statistical Community Release New Global Standards for Macroeconomic Statistics (20 March 2025)", url:"https://www.imf.org/en/News/Articles/2025/03/20/pr25072-imf-and-statistical-community-release-new-global-standards-for-macroeconomic-stats"},{t:"UN Statistics Division: 2025 System of National Accounts", url:"https://unstats.un.org/unsd/nationalaccount/sna2025.asp"}],
    checked:"2026-11"},
   {id:"inflation-and-unemployment", title:"Inflation and unemployment", aka:["consumer price index","CPI","deflation","hyperinflation","inflation targeting","unemployment rate","labour force","participation rate","ILO definition"], tags:["economics","measurement"],
    summary:"How inflation and unemployment are measured, what the figures hide, and why governments and central banks watch them.",
    levels:{
     starter:[
      "**Inflation** is a general rise in prices. Statistics offices price a fixed basket of what households buy; the percentage rise in its cost over a year is the inflation rate.",
      "**Unemployment** counts people who have no work but are available and looking. The unemployment rate is their share of the **labour force** (the employed plus the unemployed), not of the whole population.",
      "Both numbers shape politics. High inflation erodes wages and savings; high unemployment wastes lives and skills. Governments have fallen over each.",
      {key:"Inflation: change in the cost of a basket ÷ its starting cost. Unemployment rate: unemployed ÷ labour force."}
     ],
     builder:[
      "**Inflation’s extremes.** Deflation (falling prices) can trap an economy as people delay spending; Japan lived with flat or falling prices for long periods (Unit 4). Hyperinflation, often defined after Phillip Cagan (1956) as more than 50% a month, destroys money’s usefulness, as in Germany in 1923 and Zimbabwe in 2008.",
      "**Central banks.** Many target low, stable inflation. New Zealand pioneered formal inflation targeting in 1990; many central banks now announce a target and adjust interest rates to meet it.",
      "**The ILO definition.** The 19th International Conference of Labour Statisticians (2013) set the current standard. The unemployed are working-age people without a job who looked for work in a recent period and were available to start. The labour force is everyone of working age who supplies labour: the employed and the unemployed.",
      "**Reading them together.** The **participation rate** (labour force ÷ working-age population) shows whether a falling unemployment rate reflects new jobs or people giving up."
     ],
     pro:[
      "**What the CPI misses.** A national basket reflects average spending; poorer households spend more on food and fuel, so their inflation can differ from the headline. Baskets are updated with a lag, and quality change is hard to price.",
      "**Unemployment in low-income economies.** Where there is little social protection, few people can afford to have no work at all. So measured unemployment is low, while informal work and underemployment are high. The ILO’s wider measures of labour underutilisation, and data on informal employment, matter more than the headline rate in such cases.",
      "**Debates.** Economists disagree about three things: the short-run trade-off between inflation and unemployment, the costs of moderate inflation, and how central banks should weigh jobs against prices. Name the school (Keynesian, monetarist, newer approaches) when a seminar argument depends on it."
     ]
    },
    related:["national-accounts-gdp","growth-arithmetic"],
    read:[{book:"osecon", where:"Chapter 21, section 21.1, and Chapter 22, sections 22.1–22.2"}],
    sources:[{t:"ILOSTAT: Statistics on work, employment and labour underutilization (19th ICLS resolution, 2013)", url:"https://ilostat.ilo.org/methods/concepts-and-definitions/description-work-statistics-icls19"},{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"ppp-vs-market-rates", title:"PPP and market exchange rates", aka:["purchasing power parity","International Comparison Program","ICP","international dollars","price level index","Big Mac index"], tags:["economics","measurement","development"],
    summary:"Two ways of converting GDP into one currency, why they rank economies differently, and when to use each.",
    levels:{
     starter:[
      "To compare economies you must convert their GDP into one currency. Using **market exchange rates** is simple. But a dollar buys much more of many goods and services in a poorer country, where haircuts, rent and food cost less.",
      "**Purchasing power parity** (PPP) rates correct for those price differences. They are estimated by the World Bank’s International Comparison Program (ICP), which compares prices of similar goods across countries.",
      "The choice matters. In 2021 the US economy was larger than China’s at market exchange rates, but China’s was larger at PPP.",
      {key:"PPP for living standards and volumes; market rates for anything paid across borders."}
     ],
     builder:[
      {table:[
        ["2021","Market exchange rates","PPP"],
        ["China","About 18.2 trillion dollars","28.8 trillion (18.9% of world)"],
        ["United States","About 23.6 trillion","23.6 trillion (15.5%)"],
        ["India","Not shown here","11.0 trillion (7.2%)"]
      ]},
      "The ICP 2021 round covered 176 economies and put world GDP at 152.4 trillion dollars in PPP terms. Because price levels are higher in high-income countries, exchange-rate comparisons overstate their size relative to lower-income economies, as the World Bank notes. Low-income economies made up barely 1% of global GDP even at PPP.",
      "US figures are the same in both columns because the US dollar is the reference currency.",
      "**Use PPP** for living standards, poverty lines (the World Bank’s $3.00 line is in 2021 PPP dollars) and the volume of output. **Use market rates** for debts, trade, aid budgets, arms purchases and contributions to international bodies."
     ],
     pro:[
      "**Estimates, not facts.** PPPs come from large price surveys, are revised with each ICP round, and are extrapolated between rounds. Comparing goods of similar quality across very different economies is hard; services and housing are especially tricky.",
      "**Power debates.** IR scholars disagree about which measure better captures power. PPP shows the resources a state can command at home (soldiers’ pay, construction); market rates show what it can buy abroad (technology, influence). Many analysts report both.",
      "**The Big Mac index.** *The Economist*’s index compares one standard product’s price across countries. It illustrates the logic of PPP but is not a substitute for the ICP."
     ]
    },
    related:["national-accounts-gdp","imf-world-bank-data","exchange-rates"],
    read:[{book:"osecon", where:"Chapter 19, section 19.4 “Comparing GDP among Countries”"}],
    sources:[{t:"World Bank press release: Global Purchasing Power Parities Data Released for 2021 (30 May 2024)", url:"https://www.worldbank.org/en/news/press-release/2024/05/30/global-purchasing-power-parities-data-released-for-2021"},{t:"World Bank ICP 2021: Size of economies", url:"https://www.worldbank.org/en/programs/icp/brief/ICP2021_DataViz_1"},{t:"FRED: Gross Domestic Product for China (World Bank WDI series, current US dollars)", url:"https://fred.stlouisfed.org/data/MKTGDPCNA646NWDB"}],
    checked:"2026-11"},
   {id:"gains-from-trade", title:"Gains from trade", aka:["comparative advantage","opportunity cost","Heckscher–Ohlin","production possibilities frontier","consumer surplus","producer surplus","compensation principle"], tags:["economics","trade"],
    summary:"Why specialisation and trade raise total income, which theories explain trade patterns, and who loses inside each country.",
    levels:{
     starter:[
      "Trade lets each country do more of what it does at relatively low cost and buy the rest. Even a country that is better at making everything gains by specialising where its advantage is greatest. That is **comparative advantage**, set out by David Ricardo in 1817.",
      "A household analogy: one partner may be faster at both cooking and accounts. But if each does what they are relatively best at, the household gets more done.",
      "But trade has losers too. Cheaper imports help buyers and hurt the firms and workers who competed with them.",
      {key:"Trade usually raises total income and usually creates concentrated losers."}
     ],
     builder:[
      "**Opportunity cost** decides comparative advantage. In Selu one worker-day makes 4 sacks of rice or 2 bicycles, so a bicycle costs 2 sacks. In Varn a day makes 1 sack or 1 bicycle, so a bicycle costs 1 sack. Varn should make bicycles and Selu rice. Unit 16 works through output before and after.",
      {table:[
        ["Theory","Explains","Names"],
        ["Ricardian","Trade from differences in productivity","Ricardo, 1817"],
        ["Heckscher–Ohlin","Trade from differences in factor endowments","Heckscher, 1919; Ohlin, 1933"],
        ["New trade theory","Trade between similar countries in similar goods","Krugman (Nobel 2008)"]
      ]},
      "**Winners and losers.** Opening to imports raises consumer surplus by more than it lowers producer surplus, so the country gains. Stolper–Samuelson predicts losses for the scarce factor; the “China shock” studies found long-lasting regional job losses."
     ],
     pro:[
      "**Compensation.** The compensation principle says winners could compensate losers and still gain. Whether they do is political. Trade adjustment assistance, regional policy and social insurance vary widely between countries. Many scholars link weak compensation to the backlash against globalisation.",
      "**Dynamic gains and costs.** Trade can spread technology and raise productivity, but also lock countries into low-value activities. These dynamic effects are harder to measure and are where the schools of thought disagree most (see the trade schools entry).",
      "**Seminar use.** Separate the efficiency claim (total income rises) from the distribution claim (who gains) and the policy claim (what governments should do). Most real disagreement is about the last two."
     ]
    },
    related:["global-trade","tariffs-and-quotas","trade-schools-of-thought","supply-and-demand"],
    read:[{book:"osecon", where:"Chapter 33 “International Trade”, sections 33.1–33.4"}],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"tariffs-and-quotas", title:"Tariffs, quotas and other trade barriers", aka:["tariff","import quota","quota rent","non-tariff measures","export restrictions","optimal tariff","trade in value added"], tags:["economics","trade","policy"],
    summary:"What tariffs, quotas, subsidies, standards and export bans do to prices, trade, revenue and efficiency.",
    levels:{
     starter:[
      "A **tariff** is a tax on imports, paid at the border by the importer. A **quota** limits how much can be imported. Both raise the price inside the country.",
      "Who wins? Domestic producers who compete with imports, and the government (from tariff revenue). Who loses? Buyers, and firms that use imported inputs. Some trades simply stop happening, which is a loss to everyone.",
      {key:"A tariff helps the protected producers, costs buyers more than it helps anyone, and loses some value altogether."}
     ],
     builder:[
      "**Worked numbers (Unit 14, Lesson 3).** A 20 tariff on bicycles in a small country raised the price from 100 to 120. Buyers lost 9,000; home producers gained 2,600; revenue was 4,800; the deadweight loss was 1,600.",
      "**Quotas** create the same price rise without revenue unless licences are auctioned; the price gap becomes a **quota rent** for licence holders or foreign exporters.",
      "**Other measures.** Production subsidies cost the budget instead of raising prices. Non-tariff measures (standards, licensing, procedures) may protect health or hide protection. Export restrictions lower prices at home and raise them abroad. An example is India’s ban on non-basmati white rice exports, from July 2023 until late 2024.",
      "**Large countries** can push down world prices, shifting part of a tariff onto foreign sellers (the optimal-tariff argument), but invite retaliation."
     ],
     pro:[
      "**Value chains.** Where trade is in parts, a tariff on inputs taxes domestic exporters. Gross trade figures can mislead; trade in value added (OECD–WTO TiVA) traces where value is created. The World Bank’s *World Development Report 2020* estimates that global value chains account for almost half of world trade.",
      "**Evidence on incidence.** Studies of the US tariffs of 2018–19 found that most of the cost was passed on to US buyers. Unit 16 covers these studies and the tariff shifts of 2025–2026.",
      "**Political economy.** Benefits are concentrated and visible, costs spread and hidden, which helps explain why protection persists. Unit 16 treats the WTO rules and the politics."
     ]
    },
    related:["gains-from-trade","price-interventions","tariff-politics-2025-2026","global-value-chains"],
    read:[{book:"osecon", where:"Chapter 34 “Globalization and Protectionism”, section 34.1"}],
    sources:[{t:"World Bank: World Development Report 2020, Trading for Development in the Age of Global Value Chains", url:"https://www.worldbank.org/en/publication/wdr2020"},{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"},{t:"IFPRI blog: India lifts export restrictions on rice (2024)", url:"https://www.ifpri.org/blog/india-lifts-export-restrictions-on-rice/"}],
    checked:"2026-11"},
   {id:"trade-schools-of-thought", title:"Schools of thought on trade", aka:["free trade debate","infant-industry argument","developmentalism","structuralism","hyperglobalisation","Kicking Away the Ladder"], tags:["economics","trade","theory"],
    summary:"The mainstream case for trade and the developmentalist, structuralist and critical replies, with the works to cite.",
    levels:{
     starter:[
      "Most economists agree that trade raises total income. They disagree about how fast to open, whether to protect new industries, and how to treat those who lose.",
      "Think of a young athlete. Some coaches say: compete against the best from the start. Others say: train sheltered first, then compete. Trade debates often have the same shape.",
      {key:"Agree on the efficiency case; argue about timing, sequencing and compensation."}
     ],
     builder:[
      {table:[
        ["School","Claim","Works"],
        ["Mainstream","Trade raises income; help losers directly","Ricardo 1817; Krugman"],
        ["Developmentalist","Temporary protection helps new industries catch up","Hamilton 1791; List 1841; Chang 2002"],
        ["Structuralist","Commodity exporters face falling terms of trade","Prebisch and Singer, 1950"],
        ["Critics of hyperglobalisation","Deep integration can clash with democracy","Rodrik 2011"]
      ]},
      "Alexander Hamilton’s *Report on Manufactures* (1791) and Friedrich List’s *The National System of Political Economy* (1841) argued for protecting young industries. Ha-Joon Chang’s *Kicking Away the Ladder* (2002) argued that today’s rich countries protected their industries while developing. Dani Rodrik’s *The Globalization Paradox* (2011) argued that countries cannot have deep economic integration, full national sovereignty and democracy all at once."
     ],
     pro:[
      "**Where they meet.** Many mainstream economists accept the infant-industry argument in principle; the dispute is about whether governments can pick industries well and withdraw support on time. East Asia’s record is read both ways: as proof of industrial policy, and as proof of export discipline (Unit 15’s developmental state debate).",
      "**Marxist and dependency views** see trade as structured by unequal power between core and periphery (Unit 15 and Unit 2). Feminist economists ask how trade reshapes paid and unpaid work.",
      "**Seminar use.** Attribute each claim to its school, cite evidence for the specific case, and avoid presenting any school’s policy view as “what economics says”."
     ]
    },
    related:["gains-from-trade","ipe-schools","developmental-state-debate","dependency-debates"],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022), Chapter 34", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"balance-of-payments", title:"The balance of payments", aka:["BoP","current account","financial account","capital account","BPM6","BPM7","saving–investment identity","remittances"], tags:["economics","international finance"],
    summary:"A country’s accounts with the rest of the world, why they sum to zero, and how to read deficits and surpluses.",
    levels:{
     starter:[
      "The balance of payments records everything a country sells, buys, earns, gives and borrows across borders. Its **current account** covers trade in goods and services, income (interest, profits, wages) and transfers such as remittances. Its **financial account** covers buying and selling assets: factories, shares, bonds, loans and reserves.",
      "Think of a household. If it spends more than it earns, it must borrow or sell something. A country with a current account deficit does the same, through its financial account.",
      {key:"Current account + capital account = financial account (net lending), plus errors and omissions."}
     ],
     builder:[
      "**Parts.** The current account holds the trade balance (goods and services), primary income (wages, interest, dividends, profits) and secondary income (remittances, aid). The capital account is small, for example debt forgiveness. The financial account holds direct, portfolio and other investment, and reserve assets. Direct investment is usually a stake of 10% or more of voting power.",
      "**Saving and investment.** The current account equals national saving minus domestic investment. Investing 26% of GDP while saving 22% means a deficit of about 4%.",
      "**Standards.** The IMF’s manual sets the rules. BPM6 dates from 2009; BPM7 was released in March 2025 alongside the 2025 SNA, with implementation recommended for 2029–2030.",
      "**Reading deficits.** Ask what the borrowing pays for, in which currency, and for how long."
     ],
     pro:[
      "**Stocks and flows.** The BoP records flows in a period; the international investment position records the stock of foreign assets and liabilities at a date. Large liabilities in short-term foreign currency debt are the classic vulnerability (Unit 16, “original sin”).",
      "**Global imbalances.** Persistent surpluses (often discussed for China, Germany and Japan) and deficits (often the United States) are debated. Some see them as savings choices; others see distortions or risks to stability. Bilateral balances are a poor guide to either.",
      "**Data quirks.** World exports and imports should balance but don’t; errors and omissions can be large, and reporting of services and income flows is weaker than for goods."
     ]
    },
    related:["exchange-rates","asian-financial-crisis","international-monetary-system"],
    read:[{book:"osecon", where:"Chapter 23 “The International Trade and Capital Flows”, sections 23.1, 23.3–23.5"}],
    sources:[{t:"IMF Press Release 25/072: new global standards for macroeconomic statistics (BPM7 and 2025 SNA), 20 March 2025", url:"https://www.imf.org/en/News/Articles/2025/03/20/pr25072-imf-and-statistical-community-release-new-global-standards-for-macroeconomic-stats"},{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"exchange-rates", title:"Exchange rates and what moves them", aka:["appreciation","depreciation","devaluation","real exchange rate","foreign-exchange market"], tags:["economics","international finance"],
    summary:"What an exchange rate is, how to quote changes correctly, what moves currencies, and who gains and loses from a move.",
    levels:{
     starter:[
      "An exchange rate is the price of one currency in another. Most are quoted as local currency per US dollar. If a rate moves from 25 to 50 per dollar, the local currency has **depreciated** (it buys fewer dollars) and the dollar has **appreciated**.",
      "A falling currency is like a sale on everything the country exports and a price rise on everything it imports.",
      {key:"Always say which currency you are describing: a 50% fall in one is a 100% rise in the other."}
     ],
     builder:[
      "**What moves floating rates.** Supply and demand in the foreign-exchange market: foreigners buy a currency to pay for exports and assets; residents sell it to buy imports and foreign assets. Higher interest rates and lower risk attract inflows (appreciation); higher inflation, falling export prices and political risk push the other way.",
      "**Long run and short run.** Over long periods currencies tend towards what relative inflation implies (relative PPP); in the short run capital flows and expectations dominate, and rates can overshoot.",
      "**Real exchange rate.** The nominal rate adjusted for price levels; it measures competitiveness.",
      "**Effects.** Depreciation helps exporters and import-competing firms, raises import prices and inflation, and swells debts in foreign currency."
     ],
     pro:[
      "**Pass-through.** How much of a depreciation reaches consumer prices depends on invoicing (much trade is priced in dollars), market structure and credibility of monetary policy.",
      "**Balance-sheet effects.** Where firms and governments owe in foreign currency, depreciation can be contractionary despite helping exports, which is why many countries “fear floating” (Calvo and Reinhart, 2002).",
      "**Devaluation and revaluation** refer to deliberate changes in a fixed rate; depreciation and appreciation to market moves. Seminar writing should keep them apart."
     ]
    },
    related:["exchange-rate-regimes","balance-of-payments","ppp-vs-market-rates"],
    read:[{book:"osecon", where:"Chapter 29 “Exchange Rates and International Capital Flows”, sections 29.1–29.3"}],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022)", url:"https://openstax.org/details/books/principles-economics-3e"}],
    checked:"2026-11"},
   {id:"exchange-rate-regimes", title:"Exchange-rate regimes and reserves", aka:["fixed exchange rate","peg","currency board","managed float","dollarisation","monetary union","foreign-exchange reserves","intervention","speculative attack","AREAER"], tags:["economics","international finance"],
    summary:"The spectrum from free floats to shared currencies, the trade-offs of each, and how reserves and attacks work.",
    levels:{
     starter:[
      "Countries choose how their currency is managed. At one end the market sets the rate (a **float**). Near the other end, the rate is fixed by law: a **currency board**, as in Hong Kong since 1983. At the very end, a country has no currency of its own. Ecuador uses the US dollar, and euro area members share one currency.",
      "A fixed rate is like a promise. It reassures traders, but if people stop believing it, they all try to cash out at once.",
      {key:"Fixing a rate buys certainty and costs flexibility; floating does the reverse."}
     ],
     builder:[
      "**The spectrum.** Free float; managed float; soft peg or crawl; hard peg (currency board); no national currency (dollarisation or monetary union). The IMF classifies every member each year in its *Annual Report on Exchange Arrangements and Exchange Restrictions* (AREAER).",
      "**Defending a peg.** The central bank buys its own currency with reserves and may raise interest rates. If markets expect reserves to run out, a **speculative attack** can become self-fulfilling.",
      "**The trilemma.** With free capital flows, a fixed rate means giving up independent monetary policy (Unit 16, the impossible trinity).",
      "**Arguments.** Friedman’s “The Case for Flexible Exchange Rates” (1953) is the classic case for floating; Calvo and Reinhart’s “Fear of Floating” (2002) showed many floaters intervene heavily."
     ],
     pro:[
      "**Why hold reserves?** As insurance against sudden stops, to smooth volatility and, for some, to keep a currency competitive. After 1997–98 many Asian economies built large reserves; critics note the cost of holding low-yield assets and the global imbalances this can feed.",
      "**De jure versus de facto.** Declared regimes often differ from behaviour, which is why researchers built de facto classifications; the IMF now classifies on observed behaviour.",
      "**Monetary unions.** Sharing a currency removes exchange-rate risk among members, but it also removes a shock absorber. The euro area crisis of 2010–12 (Unit 16) showed the need for common crisis tools."
     ]
    },
    related:["exchange-rates","international-monetary-system","asian-financial-crisis"],
    read:[{book:"osecon", where:"Chapter 29, section 29.4 “Exchange Rate Policies”"}],
    sources:[{t:"OpenStax, Principles of Economics 3e (2022), section 29.4", url:"https://openstax.org/details/books/principles-economics-3e"},{t:"IMF: Recovery from the Asian Crisis and the Role of the IMF (Issues Brief, June 2000)", url:"https://www.imf.org/external/np/exr/ib/2000/062300.HTM"}],
    checked:"2026-11"},
   {id:"asian-financial-crisis", title:"The Asian financial crisis, 1997–98: the economics", aka:["Asian crisis","baht crisis","IMF crisis (Korea)","1997 crisis"], tags:["economics","international finance","Asia","history"],
    summary:"The economic mechanics of the 1997–98 crisis in Thailand, Indonesia and Korea, the IMF programmes, and the debates about them.",
    levels:{
     starter:[
      "In 1997 fast-growing economies in East and Southeast Asia were hit by a sudden flight of money. It began in Thailand, which let its currency, the baht, float on 2 July 1997 after its reserves ran low. The baht fell sharply, and panic spread to Indonesia, Malaysia, the Philippines and South Korea.",
      "Picture a bank run on whole countries: lenders who had lent short-term in dollars all asked for their money back at once.",
      {key:"Pegged currencies plus short-term dollar debt turned a currency fall into a banking and economic collapse."}
     ],
     builder:[
      "**Vulnerabilities.** Currencies were pegged or tightly managed against the dollar. Banks and firms had borrowed heavily in foreign currency, short-term and unhedged. Financial supervision was weak. Thailand also had a large current account deficit.",
      {table:[
        ["Country","IMF-supported package","1998 output"],
        ["Thailand","Approved 20 August 1997; total about 17.2 billion dollars","Sharp fall"],
        ["Indonesia","Stand-by arrangement signed 5 November 1997","About −14%"],
        ["Korea","Approved 4 December 1997; total about 58 billion dollars","About −7%"]
      ]},
      "As currencies fell, dollar debts ballooned in local currency, firms and banks failed, and imports collapsed, so current accounts swung into surplus. The rupiah had lost about 30% of its value by early October 1997."
     ],
     pro:[
      "**The IMF’s own verdict** (June 2000) made three points. In hindsight, the first fiscal targets were too tight. The depth of the recessions was not foreseen. And after 16 Indonesian banks closed in November 1997, uncertainty about deposit guarantees helped speed up bank runs.",
      "**Critics and defenders.** Stiglitz (*Globalization and Its Discontents*, 2002) blamed high interest rates, austerity and opening capital accounts too early. Radelet and Sachs (1998) called it a financial panic. Others stressed moral hazard among lenders. Defenders argued that higher rates were needed to stop currencies collapsing further. Malaysia’s capital controls (September 1998) remain contested.",
      "**Legacy.** The crisis led to reserve building, the Chiang Mai Initiative (2000; Unit 13) and a lasting regional suspicion of IMF conditions. Unit 2 reads it through rival theories, and Unit 16 compares it with other crises."
     ]
    },
    related:["financial-crises-ipe","exchange-rate-regimes","balance-of-payments"],
    sources:[{t:"IMF: Recovery from the Asian Crisis and the Role of the IMF (Issues Brief, June 2000)", url:"https://www.imf.org/external/np/exr/ib/2000/062300.HTM"}],
    checked:"2026-11"},
   {id:"imf-world-bank-data", title:"IMF and World Bank data: WEO, WDI and Article IV", aka:["World Economic Outlook","WEO database","World Development Indicators","WDI","Article IV","DataBank","data vintage","rebasing","fiscal year"], tags:["data","economics","methods"],
    summary:"Where to find international economic figures, how the main databases differ, and the traps of vintages, fiscal years and rebasing.",
    levels:{
     starter:[
      "Most economic numbers start with national statistics offices and central banks. The IMF and World Bank collect them into databases that let you compare countries.",
      "The IMF’s **World Economic Outlook** (WEO) database is updated in April and October and includes projections. The World Bank’s **World Development Indicators** (WDI) cover about 1,600 indicators for 217 economies, mostly past values.",
      {key:"Note the source, the edition and the date of every figure you use."}
     ],
     builder:[
      {table:[
        ["Source","Best for","Note"],
        ["IMF WEO","GDP, inflation, current account, debt; projections","Twice a year; October 2026 edition published 13 October 2026"],
        ["World Bank WDI","Long series on economy, society, environment","Free, CC BY 4.0; DataBank and API"],
        ["IMF Article IV reports","One country in depth, with staff views","Usually yearly"]
      ]},
      "**Why sources differ.** Different vintages, exchange-rate conversions, fiscal-year conventions (the IMF notes that Bangladesh’s national accounts run July–June and India’s April–March) and treatment of rebased series.",
      "**Rebasing** updates the base year and coverage and can change GDP levels sharply. Nigeria’s 2014 rebasing (base year 1990 to 2010) raised measured GDP for 2013 by about 89%, according to the UN Economic Commission for Africa."
     ],
     pro:[
      "**Data quality.** Morten Jerven’s *Poor Numbers* (2013) argues that statistics in many African countries rest on thin foundations, and that users should treat growth rankings with care. Similar concerns apply wherever informal activity is large or surveys are rare.",
      "**Projections.** WEO projections are revised in every edition and have known biases; cite them as “the IMF projected in [month year]”.",
      "**Worked case.** News reports of the October 2026 WEO said it projected Bangladesh’s 2026 GDP per person slightly above India’s at market rates. The figures were about 2,890 against 2,750 dollars. At PPP it was well below: about 10,900 against 13,000. WDI’s July 2026 update shows the two level at about 2,590 dollars in 2024, with India ahead in 2025."
     ]
    },
    related:["political-economic-datasets","growth-arithmetic","ppp-vs-market-rates"],
    sources:[{t:"IMF Data: World Economic Outlook database (October 2026 edition)", url:"https://data.imf.org/datasets/WEO"},{t:"IMF: World Economic Outlook, October 2026, Statistical Appendix", url:"https://www.imf.org/-/media/files/publications/weo/2026/october/english/statsappendix.pdf"},{t:"Al Jazeera: Bangladesh per capita GDP forecast to outstrip India’s (25 October 2026)", url:"https://www.aljazeera.com/news/2026/10/25/bangladesh-per-capita-gdp-forecast-to-outstrip-indias-what-does-it-mean"},{t:"UN Economic Commission for Africa: Nigeria’s new GDP a sign of progress (17 April 2014)", url:"https://archive.uneca.org/node/59"}],
    checked:"2026-11"},
   {id:"growth-arithmetic", title:"Growth arithmetic for analysts", aka:["compound annual growth rate","CAGR","rule of 70","percentage points","index numbers","current and constant prices","international dollars"], tags:["data","economics","methods"],
    summary:"The small set of calculations behind most economic comparisons: growth rates, compounding, doubling times and the right kind of dollars.",
    levels:{
     starter:[
      "A growth rate is the change divided by the starting value. Growth **compounds**: each year’s growth builds on a bigger base, like interest on savings.",
      "The **rule of 70** gives a quick doubling time: 70 divided by the growth rate. At 2% a year income doubles in about 35 years; at 7% in about 10.",
      "The gap between two rates is in **percentage points**: inflation rising from 4% to 6% is up 2 points, a 50% rise in the rate.",
      {key:"Compound, don’t divide; say “points” for differences between rates."}
     ],
     builder:[
      "**Compound annual growth rate (CAGR).** The steady yearly rate linking two values: (end ÷ start) to the power 1/years, minus 1. Bangladesh’s real GDP per person rose 26.9% from 2019 to 2025 (WDI). That is a CAGR of about 4.0%, not 26.9 ÷ 6 = 4.5%.",
      {table:[
        ["Measure","Use"],
        ["Current US dollars","Size in world markets, debts"],
        ["Constant prices","Real growth over time"],
        ["Current PPP dollars","Living standards in one year"],
        ["Constant PPP dollars (2021)","Living standards across countries and years"]
      ]},
      "**Index numbers** rescale a series so the base year equals 100, making growth paths easy to compare."
     ],
     pro:[
      "**Real per person.** Combine adjustments by dividing. Take nominal growth of 12%, inflation of 8% and population growth of 2%. Real growth per person is 1.12 ÷ 1.08 ÷ 1.02 − 1 ≈ 1.7%.",
      "**Logarithmic charts** show equal growth rates as equal slopes and are standard for long-run GDP.",
      "**Traps.** Watch for base effects: a rebound after a slump looks large. Watch the end points: start a series in a crisis year and growth looks fast. And never mix nominal and real figures, or different vintages."
     ]
    },
    related:["imf-world-bank-data","national-accounts-gdp","percentages-rates"],
    read:[{book:"osecon", where:"Chapter 19, sections 19.2–19.3; Chapter 20, section 20.2"}],
    sources:[{t:"World Bank WDI: GDP per capita (constant 2015 US$), indicator NY.GDP.PCAP.KD", url:"https://data.worldbank.org/indicator/NY.GDP.PCAP.KD"},{t:"FRED copy of the WDI constant-price series for Bangladesh (July 2026 update)", url:"https://fred.stlouisfed.org/data/NYGDPPCAPKDBGD"},{t:"FRED copy of the WDI constant-price series for India (July 2026 update)", url:"https://fred.stlouisfed.org/data/NYGDPPCAPKDIND"},{t:"FRED copy of the WDI current-dollar series for Bangladesh (July 2026 update)", url:"https://fred.stlouisfed.org/data/PCAGDPBDA646NWDB"},{t:"FRED copy of the WDI current-dollar series for India (July 2026 update)", url:"https://fred.stlouisfed.org/data/PCAGDPINA646NWDB"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"market-economics", term:"Market", def:"Any arrangement in which buyers and sellers trade a good or service, from a village fish market to the world oil market.", codex:"supply-and-demand"},
   {id:"demand-economics", term:"Demand", def:"How much buyers want to buy at each possible price, other things equal. By the law of demand, people buy less when the price rises.", codex:"supply-and-demand"},
   {id:"supply-economics", term:"Supply", def:"How much sellers want to sell at each possible price, other things equal. Higher prices usually bring out more supply.", codex:"supply-and-demand"},
   {id:"ceteris-paribus", term:"Ceteris paribus", def:"Latin for “other things being equal”: the assumption that only the factor being studied changes.", codex:"supply-and-demand"},
   {id:"market-equilibrium", term:"Market equilibrium", def:"The price and quantity at which the amount buyers want equals the amount sellers offer, so there is no pressure for the price to change.", codex:"supply-and-demand"},
   {id:"shortage", term:"Shortage (excess demand)", def:"A situation in which buyers want more than sellers offer at the current price, usually because the price is below equilibrium.", codex:"supply-and-demand"},
   {id:"market-surplus", term:"Surplus (excess supply)", def:"A situation in which sellers offer more than buyers want at the current price, usually because the price is above equilibrium. Not to be confused with a trade or budget surplus.", codex:"supply-and-demand"},
   {id:"price-elasticity-of-demand", term:"Price elasticity of demand", def:"The percentage change in quantity demanded divided by the percentage change in price. Below 1 is inelastic; above 1 is elastic.", codex:"elasticity"},
   {id:"tax-incidence", term:"Tax incidence", def:"Who actually bears the burden of a tax. It depends on how easily buyers and sellers can respond, not on who pays the money to the government.", codex:"price-interventions"},
   {id:"deadweight-loss", term:"Deadweight loss", def:"The value of trades that no longer happen because of a tax, tariff or price control: a loss to the economy that nobody collects.", codex:"price-interventions"},
   {id:"subsidy-economics", term:"Subsidy", def:"A payment by the government that lowers the price buyers pay or raises what sellers receive; a tax in reverse.", codex:"price-interventions"},
   {id:"price-ceiling", term:"Price ceiling", def:"A legal maximum price, such as a rent cap. Set below equilibrium, it creates a shortage.", codex:"price-interventions"},
   {id:"price-floor", term:"Price floor", def:"A legal minimum price, such as a guaranteed crop price or a minimum wage. Set above equilibrium, it creates a surplus in the simple model.", codex:"price-interventions"},
   {id:"market-failure", term:"Market failure", def:"A situation in which a market left to itself does not use resources efficiently, for example because of pollution, public goods, market power or missing information.", codex:"price-interventions"},
   {id:"public-good", term:"Public good", def:"A good that people cannot easily be stopped from using and that one person’s use does not use up, such as street lighting or national defence; markets tend to under-supply it.", codex:"price-interventions"},
   {id:"national-accounts", term:"National accounts", def:"The system of statistics that measures a country’s production, income and spending, including GDP.", codex:"national-accounts-gdp"},
   {id:"system-of-national-accounts", term:"System of National Accounts (SNA)", def:"The UN’s international manual for national accounts. The 2025 SNA was adopted by the UN Statistical Commission on 5 March 2025.", codex:"national-accounts-gdp"},
   {id:"value-added", term:"Value added", def:"What a producer sells minus what it bought from other producers; GDP is the sum of value added across the economy.", codex:"national-accounts-gdp"},
   {id:"net-exports", term:"Net exports", def:"Exports minus imports: the part of the expenditure approach to GDP that reflects trade with the rest of the world.", codex:"national-accounts-gdp"},
   {id:"nominal-gdp", term:"Nominal GDP", def:"GDP measured at the prices of the time, so it rises with inflation as well as with output.", codex:"national-accounts-gdp"},
   {id:"real-gdp", term:"Real GDP", def:"GDP measured at the prices of a fixed base year, so it changes only when the quantity of goods and services changes.", codex:"national-accounts-gdp"},
   {id:"gdp-deflator", term:"GDP deflator", def:"Nominal GDP divided by real GDP: a broad index of the prices of everything produced in the economy.", codex:"national-accounts-gdp"},
   {id:"consumer-price-index", term:"Consumer price index (CPI)", def:"An index of the cost of a fixed basket of goods and services bought by typical households; its percentage change is the usual measure of inflation.", codex:"inflation-and-unemployment"},
   {id:"deflation", term:"Deflation", def:"A general fall in prices, which can lead people to delay spending and make debts harder to repay.", codex:"inflation-and-unemployment"},
   {id:"hyperinflation", term:"Hyperinflation", def:"Extremely rapid inflation, often defined (after Cagan, 1956) as prices rising more than 50% a month.", codex:"inflation-and-unemployment"},
   {id:"inflation-targeting", term:"Inflation targeting", def:"A monetary policy framework in which the central bank announces a numerical inflation target and sets interest rates to meet it; New Zealand pioneered it in 1990.", codex:"inflation-and-unemployment"},
   {id:"labour-force", term:"Labour force", def:"All working-age people who are employed or unemployed (without work, available and looking). People neither working nor looking are outside it.", codex:"inflation-and-unemployment"},
   {id:"unemployment-rate", term:"Unemployment rate", def:"The unemployed as a percentage of the labour force, using the ILO definition: without work, available and actively looking.", codex:"inflation-and-unemployment"},
   {id:"labour-force-participation-rate", term:"Labour force participation rate", def:"The labour force as a percentage of the working-age population.", codex:"inflation-and-unemployment"},
   {id:"market-exchange-rate", term:"Market exchange rate", def:"The rate at which one currency trades for another in currency markets; used to convert GDP for anything paid across borders.", codex:"ppp-vs-market-rates"},
   {id:"international-comparison-program", term:"International Comparison Program (ICP)", def:"The World Bank-led programme that compares prices across countries to estimate purchasing power parities; its 2021 round covered 176 economies.", codex:"ppp-vs-market-rates"},
   {id:"production-possibilities-frontier", term:"Production possibilities frontier", def:"The combinations of goods an economy could make with all its resources; moving along it shows the opportunity cost of one good in terms of another.", codex:"gains-from-trade"},
   {id:"consumer-surplus", term:"Consumer surplus", def:"The difference between what buyers would have been willing to pay and what they actually pay, added up over all buyers.", codex:"gains-from-trade"},
   {id:"producer-surplus", term:"Producer surplus", def:"The difference between the price sellers receive and the lowest price they would have accepted, added up over all sellers.", codex:"gains-from-trade"},
   {id:"world-price", term:"World price", def:"The price of a good on world markets. A small country can buy or sell as much as it likes at this price without changing it.", codex:"tariffs-and-quotas"},
   {id:"trade-adjustment-assistance", term:"Trade adjustment assistance", def:"Government help, such as retraining, wage support or regional aid, for workers and firms hurt by import competition.", codex:"gains-from-trade"},
   {id:"optimal-tariff", term:"Optimal tariff", def:"The tariff that best exploits a large country’s power to push down the world price of its imports; it invites retaliation.", codex:"tariffs-and-quotas"},
   {id:"import-quota", term:"Import quota", def:"A limit on the quantity of a good that may be imported.", codex:"tariffs-and-quotas"},
   {id:"quota-rent", term:"Quota rent", def:"The gain to whoever holds the right to import under a quota: the gap between the higher domestic price and the world price, times the quantity imported.", codex:"tariffs-and-quotas"},
   {id:"non-tariff-measure", term:"Non-tariff measure", def:"A rule other than a tariff that affects trade, such as a product standard, food-safety rule, licence or customs procedure.", codex:"tariffs-and-quotas"},
   {id:"export-restriction", term:"Export restriction", def:"A ban, quota or tax on exports, often used to hold domestic prices down; it can raise prices abroad.", codex:"tariffs-and-quotas"},
   {id:"trade-in-value-added", term:"Trade in value added", def:"Trade measured by where value is actually created along a value chain, rather than by the full value of goods each time they cross a border.", codex:"tariffs-and-quotas"},
   {id:"infant-industry-argument", term:"Infant-industry argument", def:"The case, made by Hamilton (1791) and List (1841), for temporary protection of new industries until they can compete.", codex:"trade-schools-of-thought"},
   {id:"balance-of-payments", term:"Balance of payments", def:"A country’s accounts with the rest of the world for a period: the current, capital and financial accounts, which in principle sum to zero.", codex:"balance-of-payments"},
   {id:"current-account", term:"Current account", def:"The part of the balance of payments that records trade in goods and services, primary income and secondary income such as remittances.", codex:"balance-of-payments"},
   {id:"trade-balance", term:"Trade balance", def:"Exports minus imports of goods and services. A negative balance is a trade deficit.", codex:"balance-of-payments"},
   {id:"primary-income", term:"Primary income", def:"Cross-border income from work and investment: wages, interest, dividends and profits. Part of the current account.", codex:"balance-of-payments"},
   {id:"financial-account", term:"Financial account", def:"The part of the balance of payments that records purchases and sales of financial assets: direct and portfolio investment, loans and deposits, and reserves.", codex:"balance-of-payments"},
   {id:"foreign-direct-investment", term:"Foreign direct investment (FDI)", def:"Investment that gives a lasting interest in a firm abroad, usually defined as 10% or more of its voting power.", codex:"balance-of-payments"},
   {id:"saving-investment-identity", term:"Saving–investment identity", def:"The accounting rule that a country’s current account balance equals its national saving minus its domestic investment.", codex:"balance-of-payments"},
   {id:"exchange-rate", term:"Exchange rate", def:"The price of one currency in terms of another, usually quoted as units of local currency per US dollar.", codex:"exchange-rates"},
   {id:"currency-depreciation", term:"Depreciation (of a currency)", def:"A fall in a currency’s value against another in the market, so it buys fewer units of foreign currency. A deliberate cut in a fixed rate is called devaluation.", codex:"exchange-rates"},
   {id:"currency-appreciation", term:"Appreciation (of a currency)", def:"A rise in a currency’s value against another in the market, so it buys more units of foreign currency.", codex:"exchange-rates"},
   {id:"real-exchange-rate", term:"Real exchange rate", def:"The exchange rate adjusted for differences in price levels; a measure of a country’s price competitiveness.", codex:"exchange-rates"},
   {id:"fixed-exchange-rate", term:"Fixed exchange rate", def:"A regime in which the government or central bank holds its currency at a set rate against another currency or a basket.", codex:"exchange-rate-regimes"},
   {id:"foreign-exchange-reserves", term:"Foreign-exchange reserves", def:"Foreign currencies and other liquid assets held by a central bank, used to intervene in currency markets and as insurance in a crisis.", codex:"exchange-rate-regimes"},
   {id:"foreign-exchange-intervention", term:"Foreign-exchange intervention", def:"A central bank buying or selling currencies to influence its exchange rate, for example selling dollars from its reserves to support its own currency.", codex:"exchange-rate-regimes"},
   {id:"speculative-attack", term:"Speculative attack", def:"Heavy selling of a pegged currency by investors who expect a devaluation; it can drain reserves and force the devaluation it expects.", codex:"exchange-rate-regimes"},
   {id:"world-economic-outlook", term:"World Economic Outlook (WEO)", def:"The IMF’s twice-yearly report and database (April and October) of macroeconomic data and projections for its members.", codex:"imf-world-bank-data"},
   {id:"world-development-indicators", term:"World Development Indicators (WDI)", def:"The World Bank’s free database of about 1,600 indicators for 217 economies, covering the economy, society and the environment.", codex:"imf-world-bank-data"},
   {id:"article-iv-consultation", term:"Article IV consultation", def:"The IMF’s regular, usually yearly, review of a member’s economy and policies, published as a country report.", codex:"imf-world-bank-data"},
   {id:"data-vintage", term:"Data vintage", def:"A particular release of a dataset. Figures are revised between vintages, so the edition or update date should always be cited.", codex:"imf-world-bank-data"},
   {id:"gdp-rebasing", term:"Rebasing (of GDP)", def:"Updating the base year and coverage of the national accounts; it can change the measured level of GDP sharply without any change in output.", codex:"imf-world-bank-data"},
   {id:"fiscal-year", term:"Fiscal year", def:"A twelve-month accounting period that may differ from the calendar year, such as April–March in India or July–June in Bangladesh.", codex:"imf-world-bank-data"},
   {id:"economic-projection", term:"Projection", def:"An estimate for a current or future period based on assumptions, such as the IMF’s WEO figures for coming years; it is revised in later editions.", codex:"imf-world-bank-data"},
   {id:"compound-annual-growth-rate", term:"Compound annual growth rate (CAGR)", def:"The steady yearly growth rate that would take a value from its start to its end over a period, allowing for compounding.", codex:"growth-arithmetic"},
   {id:"rule-of-70", term:"Rule of 70", def:"A quick way to estimate doubling time: divide 70 by the annual growth rate in percent.", codex:"growth-arithmetic"},
   {id:"current-prices", term:"Current prices", def:"Values measured at the prices of each year, without adjusting for inflation (nominal values).", codex:"growth-arithmetic"},
   {id:"constant-prices", term:"Constant prices", def:"Values measured at the prices of a fixed base year, so that changes reflect quantities rather than prices (real values).", codex:"growth-arithmetic"},
   {id:"international-dollar", term:"International dollar", def:"The unit of PPP figures: an amount that buys in a given country what one US dollar buys in the United States.", codex:"ppp-vs-market-rates"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u23-q01", lesson:"e4u23-l1", level:1, q:"What is a market **equilibrium**?", options:[
     {t:"The price at which the government says goods must be sold", why:"That would be a price control. Equilibrium comes from buyers and sellers, not a decree."},
     {t:"The price at which the quantity buyers want equals the quantity sellers offer", ok:true, why:"Right. At that price there is neither a shortage nor a surplus, so there is no pressure for the price to change."},
     {t:"The highest price any buyer is willing to pay", why:"Many buyers would pay more than the equilibrium price; the gap is their consumer surplus."},
     {t:"The price at which sellers make the largest profit", why:"Equilibrium is where quantities match, not where profit is largest."}]},
   {id:"e4u23-q02", lesson:"e4u23-l1", level:2, q:"A disease kills many pigs in a large pork-producing country. Using the four-step method, what happens in the pork market?", options:[
     {t:"Demand shifts left; price falls and quantity falls", why:"The disease affects producers, not how much buyers want at each price."},
     {t:"Supply shifts right; price falls and quantity rises", why:"Fewer pigs means less supply, a shift to the left."},
     {t:"Nothing shifts; only the price changes", why:"A change in conditions of production shifts the supply curve."},
     {t:"Supply shifts left; price rises and quantity falls", ok:true, why:"Right. Sellers can offer less at every price, so the new equilibrium has a higher price and a lower quantity."}]},
   {id:"e4u23-q03", lesson:"e4u23-l1", level:1, q:"Demand for a good is **inelastic** when…", options:[
     {t:"the quantity bought changes by a smaller percentage than the price", ok:true, why:"Right. An elasticity below 1 means buyers respond only weakly to price, as with staple food or fuel in the short run."},
     {t:"the quantity bought does not change at all, whatever the price", why:"That is the extreme case of perfectly inelastic demand; inelastic demand usually still responds a little."},
     {t:"the good has many close substitutes", why:"Many substitutes make demand elastic, not inelastic."},
     {t:"the price cannot change because the government fixes it", why:"Elasticity is about how buyers respond to price changes, not whether prices are fixed."}]},
   {id:"e4u23-q04", lesson:"e4u23-l1", level:2, q:"World oil output falls by 2% and the oil price rises by about 20%. What best explains such a large price rise?", options:[
     {t:"Oil companies always raise prices by ten times any cut in output", why:"There is no such rule; the size of the rise depends on elasticities."},
     {t:"Demand for oil is elastic, so buyers switch quickly", why:"If buyers switched quickly, the price would rise only a little."},
     {t:"Demand and supply are both inelastic in the short run", ok:true, why:"Right. When buyers can’t easily cut back and new output can’t appear fast, a small shortfall needs a big price change to balance the market."},
     {t:"Price controls held the price down before the cut", why:"Nothing in the scenario mentions controls; the swing follows from low elasticities."}]},
   {id:"e4u23-q05", lesson:"e4u23-l1", level:2, q:"A government puts a tax on cigarettes. Smokers keep buying almost as much as before. Who bears most of the tax?", options:[
     {t:"Cigarette sellers, because they pay the tax to the government", why:"Who pays the government does not decide the burden; elasticity does."},
     {t:"Smokers, because their demand is inelastic", ok:true, why:"Right. Buyers who can’t or won’t cut back absorb most of the tax as a higher price."},
     {t:"Nobody, because the tax money comes back as public spending", why:"Spending the revenue doesn’t change who bears the tax in the market."},
     {t:"Tobacco farmers in other countries, always", why:"Foreign growers may bear some of the burden if they can’t sell elsewhere, but with inelastic demand most falls on smokers."}]},
   {id:"e4u23-q06", lesson:"e4u23-l1", level:3, q:"Ana reads that a country capped the price of cooking oil below the market price. Within weeks shops ran out and an informal market appeared. What is the best analysis?", options:[
     {t:"The cap created a shortage, which showed up as queues and informal sales", ok:true, why:"Right. At the low price buyers wanted more and sellers offered less. A binding ceiling below equilibrium creates a shortage, and the scarcity shows up as queues and black-market prices."},
     {t:"Sellers were simply greedy; the cap had no effect on how much they could offer", why:"The cap lowered the reward for supplying, so sellers offered less; this is the model’s prediction, not just a matter of character."},
     {t:"The cap must have been set above the market price", why:"A ceiling above the market price would not bind and would cause no shortage."},
     {t:"Demand for cooking oil must have collapsed", why:"Shops running out points to more demand than supply at the capped price, not less."}]},
   {id:"e4u23-q07", lesson:"e4u23-l1", level:1, q:"What is a **deadweight loss**?", options:[
     {t:"The revenue a government collects from a tax on a good", why:"Revenue is a transfer to the government; the deadweight loss is what nobody collects."},
     {t:"The fall in a firm’s profits when its costs rise after a tax", why:"That is a loss to one firm, not the economy-wide loss from trades that no longer happen."},
     {t:"The value of trades lost because of a tax or price control", ok:true, why:"Right: trades that no longer happen are lost to everyone. Buyers would have valued those units above their cost, but the wedge stopped them being traded."},
     {t:"The cost of storing unsold goods", why:"Storage costs can follow a price floor, but the deadweight loss is a broader idea."}]},
   {id:"e4u23-q08", lesson:"e4u23-l1", level:3, q:"Oluwaseun argues that a minimum-wage rise must always cut jobs, “because the supply-and-demand diagram says so”. What is the strongest reply from this lesson?", options:[
     {t:"The diagram says the opposite: price floors always raise employment for everyone", why:"In the simple model a floor above equilibrium reduces the quantity of labour hired."},
     {t:"Card and Krueger found no job losses after one rise, so the model can fail", ok:true, why:"Right. Card and Krueger (1994) found no fall in fast-food jobs after a rise. Evidence tests the model; where employers have power over wages, the textbook prediction can fail. Other studies, such as Neumark and Wascher (2000), found job losses, so the effect is an empirical question."},
     {t:"Minimum wages are not price floors, so the model doesn’t apply", why:"A minimum wage is a price floor in the labour market; the question is whether the model’s assumptions fit."},
     {t:"Economists agree that minimum wages never affect jobs", why:"They don’t agree; effects depend on the size of the rise and the labour market."}]},
   {id:"e4u23-q09", lesson:"e4u23-l1", level:2, q:"Which statement would Karl Polanyi most likely make?", options:[
     {t:"Prices carry information no planner could gather", why:"That is Hayek’s argument."},
     {t:"People often choose in ways the standard model doesn’t predict", why:"That is the behavioural economists’ argument."},
     {t:"Whole economies can get stuck with idle workers unless demand is supported", why:"That is Keynes’s argument."},
     {t:"Markets are embedded in society and provoke counter-movements", ok:true, why:"Right: markets are created and embedded in society, and their spread provokes protective counter-movements. This is the double movement, in *The Great Transformation* (1944)."}]},
   /* ---- Lesson 2 ---- */
   {id:"e4u23-q10", lesson:"e4u23-l2", level:1, q:"Why does GDP count only **final** goods and services?", options:[
     {t:"So that inputs are not counted twice", ok:true, why:"Right: inputs such as flour would otherwise be counted again inside the bread. Counting every sale would count the same value several times; value added avoids this."},
     {t:"Because intermediate goods are always imported", why:"Many inputs are made at home; the rule is about double counting, not origin."},
     {t:"Because only consumers’ purchases matter", why:"Investment, government purchases and exports are final uses too."},
     {t:"Because intermediate goods are not sold for money", why:"They are sold, between firms; that is exactly why counting them would double-count."}]},
   {id:"e4u23-q11", lesson:"e4u23-l2", level:2, q:"Invented figures: consumption 500, investment 150, government purchases 120, exports 200, imports 230. What is GDP?", options:[
     {t:"970", why:"970 adds exports but forgets to subtract imports."},
     {t:"1,200", why:"1,200 adds imports instead of subtracting them."},
     {t:"740", ok:true, why:"Right. 500 + 150 + 120 + (200 − 230) = 740."},
     {t:"770", why:"770 leaves out net exports entirely; here they are −30."}]},
   {id:"e4u23-q12", lesson:"e4u23-l2", level:2, q:"Country M’s nominal GDP grew by 30% last year while prices rose by 25%. What happened to real GDP?", options:[
     {t:"It grew by about 30%", why:"That is nominal growth; most of it was inflation."},
     {t:"It grew by about 4%", ok:true, why:"Right. 1.30 ÷ 1.25 − 1 = 0.04. With high inflation the subtraction shortcut (5%) overstates it."},
     {t:"It grew by about 55%", why:"You added inflation instead of removing it."},
     {t:"It fell by about 5%", why:"Nominal growth exceeded inflation, so real GDP rose."}]},
   {id:"e4u23-q13", lesson:"e4u23-l2", level:1, q:"How is the **unemployment rate** calculated under the ILO definition?", options:[
     {t:"People without a job as a share of the whole population", why:"Children, retirees and people not looking are not counted as unemployed."},
     {t:"People receiving unemployment benefits as a share of all workers", why:"Benefit rules vary by country; the ILO measure comes from surveys of who is looking and available."},
     {t:"People without a job as a share of all working-age adults", why:"The denominator is the labour force, not all working-age adults."},
     {t:"Jobless people looking for work, as a share of the labour force", ok:true, why:"Right: people without work who are available and looking. The labour force is the employed plus the unemployed."}]},
   {id:"e4u23-q14", lesson:"e4u23-l2", level:2, q:"Invented figures: a basket of goods cost 400 last year and 430 this year. What is the inflation rate?", options:[
     {t:"7.5%", ok:true, why:"Right. 30 ÷ 400 = 0.075."},
     {t:"30%", why:"30 is the change in cost, not a percentage."},
     {t:"7.0%", why:"7.0% is 30 ÷ 430, using the new cost as the base."},
     {t:"107.5%", why:"107.5 is this year’s index if last year is 100; inflation is the change, 7.5%."}]},
   {id:"e4u23-q15", lesson:"e4u23-l2", level:3, q:"Priya compares two countries. At market exchange rates A’s GDP per person is three times B’s; at PPP it is only 1.5 times. What does this tell her?", options:[
     {t:"The PPP figures must contain an error, because the two measures should agree", why:"A narrowing gap at PPP is normal when price levels differ."},
     {t:"B’s currency is overvalued at market rates", why:"The pattern suggests B’s money buys more at home than its market rate implies, the opposite."},
     {t:"Prices in B are much lower than in A", ok:true, why:"Right. A dollar converted at market rates buys more in B. PPP corrects for B’s lower price level, so the gap in purchasing power is smaller than the gap at market rates."},
     {t:"A grew faster than B last year, which changed the gap", why:"These are levels in one year; they say nothing about growth."}]},
   {id:"e4u23-q16", lesson:"e4u23-l2", level:1, q:"According to the World Bank’s International Comparison Program, which economy was the largest in 2021 at PPP?", options:[
     {t:"The United States, with 15.5% of world GDP", why:"The United States was second at PPP, though larger at market exchange rates."},
     {t:"China, with 18.9% of world GDP", ok:true, why:"Right: about 28.8 trillion dollars in PPP terms."},
     {t:"India, with 7.2% of world GDP", why:"India was third at PPP."},
     {t:"The European Union as a single country", why:"The ICP ranks economies, and the EU is not one country; China ranked first."}]},
   {id:"e4u23-q17", lesson:"e4u23-l2", level:3, q:"A minister says: “Our unemployment rate is only 3%, lower than in many rich countries. So our labour market is healthier.” Hana, a policy adviser, is unsure. What is the best question to ask next?", options:[
     {t:"What is the GDP deflator, and how fast did it rise?", why:"The deflator measures prices, not labour-market health."},
     {t:"How many work informally, and what is the participation rate?", ok:true, why:"Right. In many economies low measured unemployment hides informal work and underemployment, and people who stop looking drop out of the count."},
     {t:"Is the rate measured in PPP dollars or at market rates?", why:"Unemployment rates are percentages of the labour force, not money."},
     {t:"How large is the current account deficit, as a share of GDP?", why:"That concerns external accounts, not whether the labour market is healthy."}]},
   {id:"e4u23-q18", lesson:"e4u23-l2", level:2, q:"Which of these is **not** counted in GDP?", options:[
     {t:"A hospital’s paid nursing services", why:"Paid services are counted."},
     {t:"New houses built this year", why:"New construction is investment, counted in GDP."},
     {t:"Unpaid care of a parent by a family member at home", ok:true, why:"Right. Most unpaid household work is outside GDP, the gap Waring’s *If Women Counted* (1988) highlighted."},
     {t:"Exports of software to foreign firms", why:"Exports are part of GDP (net of imports)."}]},
   /* ---- Lesson 3 ---- */
   {id:"e4u23-q19", lesson:"e4u23-l3", level:1, q:"A country has a **comparative advantage** in a good when…", options:[
     {t:"it can make more of the good than any other country", why:"That is absolute advantage."},
     {t:"its opportunity cost is lower than its partner’s", ok:true, why:"Right: its opportunity cost of making the good is lower than its trading partner’s. Trade based on comparative advantage can benefit both partners."},
     {t:"it exports more of the good than it imports", why:"Trade flows can reflect comparative advantage, but the definition is about opportunity cost."},
     {t:"its government subsidises the good", why:"Subsidies can make a good cheap, but comparative advantage is about real costs of production."}]},
   {id:"e4u23-q20", lesson:"e4u23-l3", level:2, q:"Mei says: “Country X is better than Country Y at making both cloth and computers. So X can’t gain from trading with Y.” What is the correction?", options:[
     {t:"She is right; trade only helps when each country is better at one good", why:"Ricardo showed the opposite: what matters is relative cost, not absolute ability."},
     {t:"X should stop making both goods", why:"Specialising means making more of one good, not stopping production altogether."},
     {t:"Y will refuse to trade, because it is worse at both", why:"Y also gains by specialising where its opportunity cost is lower."},
     {t:"X can still gain by specialising where its advantage is greatest", ok:true, why:"Right. X should make the good where its advantage is greatest and import the other. Opportunity costs differ, so both can gain at a price between them."}]},
   {id:"e4u23-q21", lesson:"e4u23-l3", level:1, q:"The Heckscher–Ohlin model predicts that a labour-abundant country will export…", options:[
     {t:"goods that use a lot of labour, such as garments", ok:true, why:"Right. Countries export goods that use their abundant factors intensively."},
     {t:"goods that use a lot of capital, such as aircraft", why:"That is what a capital-abundant country would export."},
     {t:"only raw materials", why:"The model is about factor intensity, not raw versus processed goods."},
     {t:"the same goods it imports", why:"Intra-industry trade is explained by Krugman’s new trade theory, not Heckscher–Ohlin."}]},
   {id:"e4u23-q22", lesson:"e4u23-l3", level:2, q:"In the standard model of a small country, what happens when it **removes** a tariff on shoes?", options:[
     {t:"Domestic shoemakers gain and buyers lose", why:"The reverse: the price falls, so buyers gain and shoemakers lose."},
     {t:"Buyers gain more than producers and the treasury lose", ok:true, why:"Right, so the country gains overall. The deadweight loss of the tariff disappears; the losers are concentrated among shoemakers."},
     {t:"Nobody gains, because the money just moves abroad to foreign firms", why:"Buyers pay less for shoes; the national gain is the deadweight loss recovered."},
     {t:"The world price of shoes rises", why:"A small country can’t move the world price."}]},
   {id:"e4u23-q23", lesson:"e4u23-l3", level:3, q:"Tomás compares a 25% tariff on imported cars with a quota that produces the same rise in car prices. Licences for the quota are given free to a few importers. What is the main difference?", options:[
     {t:"The quota raises car prices more than the tariff does", why:"By assumption both raise prices by the same amount."},
     {t:"The tariff protects domestic carmakers; the quota does not", why:"Both raise the domestic price, so both protect domestic carmakers."},
     {t:"The tariff earns revenue for the state; the quota gives that gap to licence holders", ok:true, why:"Right. With free licences the treasury gives the money away as a quota rent."},
     {t:"The quota has no deadweight loss, because no tax is collected", why:"Both create deadweight losses, because both raise the price and cut trade."}]},
   {id:"e4u23-q24", lesson:"e4u23-l3", level:2, q:"A large rice exporter bans exports. What is the most likely effect on importing countries?", options:[
     {t:"Lower world rice prices, because more rice stays in the market", why:"Rice that stays at home is removed from the world market, so world supply falls."},
     {t:"No effect, because demand for rice is elastic", why:"Demand for staple food is inelastic, which makes the price effect larger, not smaller."},
     {t:"Higher world rice prices, sharply so because demand for staples is inelastic", ok:true, why:"Right. Less supply on the world market and inelastic demand mean a big price rise for importers."},
     {t:"Higher prices only inside the exporting country", why:"An export ban usually lowers prices at home and raises them abroad."}]},
   {id:"e4u23-q25", lesson:"e4u23-l3", level:3, q:"A government plans tariffs on imported steel to protect its steel mills. Its car and machinery makers buy much of that steel. What should an analyst point out?", options:[
     {t:"The tariff helps everyone in the steel value chain", why:"It helps steel mills but raises costs for firms that use steel."},
     {t:"Steel-using industries face higher costs and may lose more", ok:true, why:"Right: higher costs for steel users may cost more jobs and exports than the mills gain. In value chains a tariff on an input is a tax on the industries that use it; studies weigh both effects."},
     {t:"The tariff will be paid entirely by foreign steelmakers, not buyers", why:"Importers pay the tariff, and much of the cost usually reaches domestic buyers."},
     {t:"Tariffs on inputs have no effect on exports", why:"Higher input costs make exports less competitive."}]},
   {id:"e4u23-q26", lesson:"e4u23-l3", level:1, q:"Which work argues that rich countries protected their own industries while developing, then urged free trade on others?", options:[
     {t:"Rodrik, *The Globalization Paradox* (2011)", why:"Rodrik argues that hyperglobalisation clashes with democracy and national sovereignty."},
     {t:"Ricardo, *On the Principles of Political Economy and Taxation* (1817)", why:"Ricardo set out comparative advantage, the core of the case for trade."},
     {t:"Waring, *If Women Counted* (1988)", why:"Waring wrote about unpaid work left out of national accounts."},
     {t:"Chang, *Kicking Away the Ladder* (2002)", ok:true, why:"Right. Chang’s title names the argument."}]},
   {id:"e4u23-q27", lesson:"e4u23-l3", level:2, q:"Opening to trade raises a country’s total income but closes factories in two regions. What is the **compensation principle**?", options:[
     {t:"Winners gain enough that they could compensate the losers", ok:true, why:"Right: the winners could compensate the losers and still be better off. Whether governments actually compensate losers, for example through retraining or regional aid, is a political choice."},
     {t:"A WTO rule that exporters must pay importers’ losses", why:"No such WTO rule exists."},
     {t:"The rule that tariffs must be removed when losers are compensated", why:"The principle is about whether gains exceed losses, not a rule about tariffs."},
     {t:"The claim that nobody loses from trade", why:"The principle starts from the fact that some do lose."}]},
   /* ---- Lesson 4 ---- */
   {id:"e4u23-q28", lesson:"e4u23-l4", level:1, q:"Where are remittances from workers abroad recorded in the balance of payments?", options:[
     {t:"In the financial account, as direct investment", why:"Direct investment is a lasting stake in a firm; remittances are transfers."},
     {t:"In the current account, as secondary income", ok:true, why:"Right. Transfers such as remittances and aid are secondary income."},
     {t:"In the capital account, as debt forgiveness", why:"The capital account covers items such as debt forgiveness; remittances are current transfers."},
     {t:"They are not recorded, because they are private", why:"Private transactions across borders are exactly what the BoP records."}]},
   {id:"e4u23-q29", lesson:"e4u23-l4", level:2, q:"Country T has a current account deficit of 6% of GDP. What must be true, apart from errors and omissions?", options:[
     {t:"Its exports must have fallen since last year", why:"A deficit can arise from strong imports, high investment or income payments, not only falling exports."},
     {t:"Its central bank must be printing money to pay for imports", why:"Nothing in the BoP identity requires that."},
     {t:"It is borrowing abroad or selling assets, net, worth about 6% of GDP", ok:true, why:"Right. The financial account mirrors the current account: the country borrows from foreigners or sells them assets."},
     {t:"It must have a trade surplus with every partner", why:"The overall deficit means the opposite on balance; bilateral balances can vary."}]},
   {id:"e4u23-q30", lesson:"e4u23-l4", level:2, q:"The rupiah moves from 15,000 to 16,500 per US dollar. Which statement is correct?", options:[
     {t:"The rupiah appreciated by 10%", why:"More rupiah per dollar means the rupiah buys fewer dollars: it depreciated."},
     {t:"The dollar depreciated against the rupiah", why:"The dollar now buys more rupiah, so it appreciated."},
     {t:"Nothing changed in value, only the way the rate is quoted", why:"The rate itself moved; the currencies’ values changed relative to each other."},
     {t:"The dollar rose 10%; the rupiah fell about 9%", ok:true, why:"Right: the dollar appreciated by 10% and the rupiah depreciated by about 9%. 1,500 ÷ 15,000 = 10% for the dollar; the rupiah’s dollar value fell from 1/15,000 to 1/16,500, about 9.1%."}]},
   {id:"e4u23-q31", lesson:"e4u23-l4", level:1, q:"Which force would usually make a floating currency **appreciate**?", options:[
     {t:"Higher inflation than in partner countries", why:"Higher inflation erodes purchasing power and tends to weaken a currency."},
     {t:"A sharp fall in the price of the country’s main export", why:"Less foreign demand for the currency tends to weaken it."},
     {t:"A rise in interest rates at home relative to abroad", ok:true, why:"Right. Higher returns attract investors, who must buy the currency."},
     {t:"Investors’ fear of a political crisis", why:"Fear usually makes investors sell the currency."}]},
   {id:"e4u23-q32", lesson:"e4u23-l4", level:2, q:"Kenji says: “Our currency fell 20%. That is bad for everyone.” Which reply is most accurate?", options:[
     {t:"It helps exporters, hurts importers and raises foreign-currency debts", ok:true, why:"Right: it also raises the burden of any debts owed in foreign currency. Who gains and who loses depends on what people sell, buy and owe."},
     {t:"It helps everyone in the country, because exports become cheaper for foreign buyers", why:"Importers and foreign-currency borrowers lose."},
     {t:"It affects only foreign tourists", why:"It affects import prices, inflation, exporters and debtors at home."},
     {t:"It has no effect on prices at home", why:"Imported goods become dearer in local currency, which pushes up inflation."}]},
   {id:"e4u23-q33", lesson:"e4u23-l4", level:1, q:"How does a central bank defend a pegged exchange rate when people are selling its currency?", options:[
     {t:"It sells its own currency and buys dollars", why:"That would push its currency down further."},
     {t:"It buys its own currency with reserves", ok:true, why:"Right: it buys its own currency with foreign-exchange reserves, and may raise interest rates. Higher rates make holding the currency more attractive."},
     {t:"It cuts interest rates to encourage borrowing", why:"Lower rates would make the currency less attractive."},
     {t:"It asks the IMF to set a new rate", why:"The IMF lends and advises, but it does not set members’ exchange rates."}]},
   {id:"e4u23-q34", lesson:"e4u23-l4", level:3, q:"Fatima studies a country in the mid-1990s. It has a fixed exchange rate and a current account deficit of 8% of GDP. Its banks borrow short-term in dollars to lend for property. Which risk should she highlight?", options:[
     {t:"Deflation caused by households saving too much", why:"The country is saving too little relative to investment, not too much."},
     {t:"A trade war with its neighbours over its exports", why:"Nothing in the profile points to trade disputes."},
     {t:"A speculative attack, then dollar debts swelling as the currency falls", ok:true, why:"Right. This is close to Thailand’s position before July 1997: short-term foreign-currency debt plus a peg and a large deficit."},
     {t:"A lasting rise in the currency’s value as capital flows in", why:"Large deficits funded by short-term debt usually lead to pressure for a fall, not a rise."}]},
   {id:"e4u23-q35", lesson:"e4u23-l4", level:2, q:"Which statement about the 1997–98 Asian crisis is supported by the IMF’s own later review?", options:[
     {t:"The crisis was caused only by speculators, not by any weakness in the countries", why:"The IMF pointed to domestic weaknesses such as unhedged short-term foreign borrowing."},
     {t:"The IMF’s programmes were flawless", why:"The IMF said its advice “was not flawless”."},
     {t:"Capital controls were the IMF’s main recommendation", why:"Malaysia imposed controls outside an IMF programme."},
     {t:"The programmes’ initial fiscal targets were, in hindsight, too tight", ok:true, why:"Right. The IMF accepted that fiscal easing should have come earlier."}]},
   {id:"e4u23-q36", lesson:"e4u23-l4", level:3, q:"Dmitri argues: “Country S’s large current account surplus proves it is economically stronger than Country D, which runs a deficit.” What is the best critique?", options:[
     {t:"A surplus shows S saves more than it invests, not that it is stronger", ok:true, why:"Right: D may be borrowing to finance productive investment. By the saving–investment identity, balances reflect saving and investment choices, not strength as such."},
     {t:"Surpluses are always a sign of weakness", why:"Neither surpluses nor deficits are good or bad in themselves."},
     {t:"Current accounts can’t be compared between countries of different sizes", why:"They can, usually as a share of GDP."},
     {t:"D’s deficit must mean S is cheating in trade", why:"Overall balances reflect saving and investment, not any partner’s conduct."}]},
   /* ---- Lesson 5 ---- */
   {id:"e4u23-q37", lesson:"e4u23-l5", level:1, q:"How often is the IMF’s World Economic Outlook database updated?", options:[
     {t:"Every month", why:"The WEO is a twice-yearly product; other IMF data are monthly."},
     {t:"Twice a year, in April and October", ok:true, why:"Right, with the report of the same name."},
     {t:"Once every five years", why:"That is closer to the cycle of ICP price rounds."},
     {t:"Only when a country asks for a loan", why:"The WEO covers all members on a fixed schedule."}]},
   {id:"e4u23-q38", lesson:"e4u23-l5", level:2, q:"Real GDP per person grows from 2,000 to 2,600 over 6 years. Which is the best statement of its average annual growth?", options:[
     {t:"5% a year (30% ÷ 6)", why:"Simple division ignores compounding and overstates the rate."},
     {t:"30% a year", why:"30% is the total rise over six years."},
     {t:"About 4.5% a year", ok:true, why:"Right, compounded: 1.3 to the power 1/6 is about 1.045."},
     {t:"About 1.3% a year", why:"1.3 is the ratio of the two values, not a growth rate."}]},
   {id:"e4u23-q39", lesson:"e4u23-l5", level:2, q:"Sione wants to show how much real output per person grew in one country between 2015 and 2025. Which series should he use?", options:[
     {t:"GDP per person in current US dollars", why:"Current dollars mix real growth with inflation and exchange-rate moves."},
     {t:"GDP per person at constant prices (real)", ok:true, why:"Right. Constant-price series remove price changes."},
     {t:"The consumer price index", why:"The CPI tracks prices, not output."},
     {t:"Total GDP in current local currency", why:"Nominal totals include inflation and population growth."}]},
   {id:"e4u23-q40", lesson:"e4u23-l5", level:1, q:"What is a **data vintage**?", options:[
     {t:"A dataset covering years that are more than a decade old", why:"Vintage refers to the release, not the age of the years covered."},
     {t:"A projection for future years", why:"Projections are part of a release, but vintage means the release itself."},
     {t:"One release of a dataset, which may later be revised", ok:true, why:"Right. Always note the edition or update date."},
     {t:"Data from before the Second World War", why:"Vintage in statistics means a release, not a historical period."}]},
   {id:"e4u23-q41", lesson:"e4u23-l5", level:3, q:"Lucía’s table takes a country’s 2025 GDP from the April 2026 WEO and its 2026 GDP from the October 2026 WEO. It calls the difference “growth in 2026”. What is wrong?", options:[
     {t:"Nothing is wrong, because both figures come from the IMF", why:"Same institution, different vintages; the gap may be partly a revision."},
     {t:"She mixed vintages; part of the “growth” may be a revision", ok:true, why:"Right. The 2025 figure may have been revised between April and October. Take both years from the same edition."},
     {t:"The WEO reports only growth rates, not GDP levels", why:"It reports both; GDP levels are a core WEO series."},
     {t:"She should have used PPP instead of market rates", why:"The unit matters, but the main error is mixing editions."}]},
   {id:"e4u23-q42", lesson:"e4u23-l5", level:2, q:"In 2023 Bangladesh’s GDP per person in current dollars fell, while real GDP per person rose. Which conclusion is correct?", options:[
     {t:"Bangladesh’s economy shrank in 2023", why:"Real output per person rose; only its dollar value fell."},
     {t:"The fall was caused by unusually fast population growth in 2023", why:"Both series are per person, so population can’t explain the gap between them."},
     {t:"The taka strengthened against the dollar", why:"A stronger taka would have raised the dollar value."},
     {t:"The taka depreciated, so output was worth fewer dollars", ok:true, why:"Right: the fall in dollar terms mostly reflects the taka’s depreciation, not lower output. Converting the same output at a weaker exchange rate gives fewer dollars."}]},
   {id:"e4u23-q43", lesson:"e4u23-l5", level:3, q:"A headline says: “Bangladesh is now richer than India.” Using the lesson’s figures, what is the most careful judgement?", options:[
     {t:"True for one measure and edition; India leads at PPP", ok:true, why:"Right: true only for one measure, one edition and a projected year. It holds for IMF market-rate projections for 2026, but India is about a fifth ahead at PPP. Name the measure, the source, the vintage and the year, and note that averages say nothing about typical households."},
     {t:"True by every measure and in every source", why:"At PPP India is ahead; at market rates the two have swapped places more than once."},
     {t:"False by every measure and in every source", why:"At market rates, in the IMF’s October 2026 projections, Bangladesh edges ahead in 2026."},
     {t:"Impossible to judge, because the two countries use different currencies", why:"Market rates and PPP exist precisely to make such comparisons."}]},
   {id:"e4u23-q44", lesson:"e4u23-l5", level:1, q:"Using the rule of 70, how long does it take an income growing at 5% a year to double?", options:[
     {t:"About 7 years", why:"That would need 10% a year."},
     {t:"About 14 years", ok:true, why:"Right. 70 ÷ 5 = 14."},
     {t:"About 20 years", why:"That is the doubling time at 3.5%."},
     {t:"About 35 years", why:"That is the doubling time at 2%."}]},
   {id:"e4u23-q45", lesson:"e4u23-l5", level:2, q:"A country rebases its national accounts and its measured GDP jumps by 40% overnight. What should an analyst conclude?", options:[
     {t:"The economy grew by 40% that year", why:"Rebasing changes the measurement, not what was produced."},
     {t:"The old figures were invented", why:"Rebasing updates the base year and coverage; the old figures were based on older information."},
     {t:"The statistics were updated; compare growth only within the new series", ok:true, why:"Right: the measured size of the economy changed because the statistics were updated. Ratios to GDP (debt, tax, aid) also change, so use the rebased series consistently."},
     {t:"The country’s currency appreciated by 40% against the US dollar overnight", why:"Rebasing is about national accounts, not the exchange rate."}]}
  ]
});
