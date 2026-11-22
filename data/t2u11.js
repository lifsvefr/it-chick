/* Track 2 · Unit 9 · Thinking in algorithms (Pass 24) */
ICA.addUnit({
  id:"t2u11",
  track:"t2",
  n:9,
  title:"Thinking in algorithms",
  icon:"🧩",
  blurb:"Plan before you code. Break a task into steps and write them as pseudocode or a flowchart. Search with linear and binary search. Sort by hand and with sorted(). Predict how fast code is with step counts, timing and Big-O. Write functions that call themselves, and simulations that roll thousands of dice.",
  goals:["Turn a real task into an algorithm by decomposition. Write it as pseudocode and as a flowchart. Trace it by hand with a trace table and edge cases", "Write linear and binary search in Python, count their checks, and explain why binary search needs sorted data", "Sort with selection sort and insertion sort by hand and in code, and use `sorted()`, `.sort()` and key functions with confidence", "Measure code with `time.perf_counter()`, count steps, and describe growth as O(1), O(log n), O(n), O(n log n) or O(n²), including hidden nested loops", "Write recursive functions with a base case. Follow the call stack. Choose between recursion and a loop. Estimate answers with random simulations"],
  read:[
    {book:"ics", where:"Chapter 2, Section 2.1 “Computational Thinking” (“Decomposition” and “Algorithm”); Chapter 3, “Data Structures and Algorithms”: Sections 3.2 “Algorithm Design and Discovery”, 3.3 “Formal Properties of Algorithms”, 3.4 “Algorithmic Paradigms” and 3.5 “Sample Algorithms by Problem” (“Searching” and “Sorting”)", note:"A university-level textbook: read for the big picture, and skip the parts on graphs and data structures you haven’t met."},
    {book:"thinkpy", where:"Chapter 5, “Conditionals and Recursion” (the recursion sections); Chapter 6, “Return Values” (recursion with return values); Chapter 7, “Iteration and Search”", note:"Each chapter is also a notebook you can run online."},
    {book:"missing", where:"Lecture “Debugging and Profiling”: the “Profiling” part", note:"For when you want to measure real programs; it goes well beyond this unit."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u11-l1",
   title:"From a task to steps",
   minutes:55,
   hook:{q:"Which of these recipe steps could a computer **not** follow exactly as written?", options:["Repeat 3 times: stir for 10 seconds", "If the water is boiling, lower the heat", "Add salt to taste", "Set a timer for 12 minutes"], answer:2, reveal:"“Add salt to taste” needs a person’s judgment: how much is that, and whose taste? A computer needs steps that are exact, leave nothing to guess and finish. The other three are already that precise: a count, a yes-or-no test and a fixed time. This lesson is about turning everyday tasks into steps that precise, which is what an algorithm is."},
   goals:["Say what an algorithm is, and what makes one good: a clear input and output, precise steps, an end, and correct results", "Break a real task into smaller steps (decomposition) until each step is something Python can do", "Write an algorithm as pseudocode and as a flowchart, using the standard flowchart shapes", "Trace an algorithm by hand with a trace table, and test it on edge cases such as an empty list or all-negative numbers"],
   learn:[
      {h:"What an algorithm is", body:[
          {lead:"An algorithm is a precise, step-by-step method for solving a problem. It is written so that anyone (or anything) following it gets the same result."},
          "You follow algorithms every day: a recipe, the steps to restart a router, the way you look up a word in a paper dictionary. In computing, an [[alg-algorithm|algorithm]] is the plan, and a program is that plan written in one particular language. The same algorithm can be written in Python, in JavaScript (Unit 4) or in plain English, and it’s still the same method.",
          "A good algorithm has four qualities:",
          {table:[
              ["Quality", "What it means", "Recipe example"],
              ["Clear input and output", "It says what it starts with and what it produces", "Ingredients in; a cake out"],
              ["Precise steps", "Every step means exactly one thing", "“Bake 25 minutes at 180 °C”, not “bake until done-ish”"],
              ["It finishes", "It always stops after a limited number of steps", "“Stir 20 times”, not “keep stirring”"],
              ["Correct", "It gives the right output for every allowed input, including the ones you did not try", "Works for one cake or four"]
            ]},
          "Why learn this? Because writing code is mostly *thinking* before typing. When a program goes wrong, the cause is often not a typo but a gap in the plan. It may be a vague step, or a case nobody thought of. This unit is about planning and judging methods. You learn how to describe them and how computers search and sort. You learn how to tell whether a method will be fast enough. You also learn how a function can call itself.",
          {key:"An algorithm is the method; a program is the method written in one language. Plan the method first."}
        ]},
      {h:"Decomposition: from a big task to small steps", body:[
          "Big tasks feel impossible until you split them. [[alg-decomposition|Decomposition]] means breaking a problem into smaller parts, then breaking those parts down again, until each piece is small enough to do directly. You already do this when you plan a trip: travel, somewhere to stay, what to pack.",
          "Here’s a real task. Oluwaseun keeps the accounts for a community choir. Every month he wants to remind the members who haven’t paid their fees. Broken down, it looks like this:",
          {fig:"<svg viewBox=\"0 0 340 484\"><defs><marker id=\"t2u11-l1-a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><path class=\"d-ink\" d=\"M24,54 L24,366\" stroke-width=\"1.5\"/><rect class=\"d-gold\" x=\"10\" y=\"8\" width=\"320\" height=\"46\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"20\" y=\"28\">Remind members who</text><text x=\"20\" y=\"44\">haven’t paid this month</text><rect class=\"d-panel\" x=\"50\" y=\"74\" width=\"280\" height=\"36\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"60\" y=\"97\">1. Get the list of members</text><path class=\"d-ink\" d=\"M24,92 L46,92\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-panel\" x=\"50\" y=\"120\" width=\"280\" height=\"36\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"60\" y=\"143\">2. Get this month’s payments</text><path class=\"d-ink\" d=\"M24,138 L46,138\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-lup\" x=\"50\" y=\"166\" width=\"280\" height=\"36\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"60\" y=\"189\">3. Find who is missing</text><path class=\"d-ink\" d=\"M24,184 L46,184\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-sage\" x=\"100\" y=\"212\" width=\"230\" height=\"30\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"110\" y=\"232\">For each member:</text><path class=\"d-ink\" d=\"M76,202 L76,227 L96,227\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-sage\" x=\"100\" y=\"252\" width=\"230\" height=\"46\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"110\" y=\"272\">Is the name in the</text><text x=\"110\" y=\"288\">payments list?</text><path class=\"d-ink\" d=\"M76,227 L76,275 L96,275\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-sage\" x=\"100\" y=\"308\" width=\"230\" height=\"30\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"110\" y=\"328\">If not, keep it</text><path class=\"d-ink\" d=\"M76,275 L76,323 L96,323\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-panel\" x=\"50\" y=\"348\" width=\"280\" height=\"36\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"60\" y=\"371\">4. Remind each one</text><path class=\"d-ink\" d=\"M24,366 L46,366\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><rect class=\"d-sage\" x=\"100\" y=\"394\" width=\"230\" height=\"46\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"110\" y=\"414\">print() a message</text><text x=\"110\" y=\"430\">(or an email later)</text><path class=\"d-ink\" d=\"M76,384 L76,417 L96,417\" stroke-width=\"1.5\" marker-end=\"url(#t2u11-l1-a)\"/><text class=\"s\" x=\"10\" y=\"458\">Stop when each box is one thing</text><text class=\"s\" x=\"10\" y=\"474\">Python can do: a list, a loop, an if.</text></svg>", alt:"A tree. The big task at the top is “Remind members who haven’t paid this month”. It splits into four steps: 1, get the list of members; 2, get this month’s payments; 3, find who is missing; 4, remind each one. Step 3 splits further into: for each member; is the name in the payments list; if not, keep it. Step 4 splits into: print() a message, or an email later. A note says to stop when each box is one thing Python can do: a list, a loop, an if.", cap:"Keep splitting until every box is one thing Python can do."},
          "Notice how the boxes at the bottom match Python you already know from {{py-lists|Unit 8}}. They are a list of members, a list of payments, a `for` loop, an `in` test and `print()`. That’s the sign you’ve decomposed far enough.",
          {code:"members = [\"Amara\", \"Kenji\", \"Lucía\", \"Priya\"]\npaid = [\"Kenji\", \"Priya\"]\n\nfor name in members:\n    if name not in paid:\n        print(name, \"has not paid\")", lang:"py", label:"Who hasn’t paid?", pylab:"pl-loop", cap:"Output: `Amara has not paid`, then `Lucía has not paid`. `not in` is True when the name is missing from the list."},
          {tip:"If you can’t see how to write a step in code, it isn’t small enough yet. Break it down again."}
        ]},
      {h:"Pseudocode: the plan in plain words", body:[
          "Before writing real code, it helps to write the steps in [[alg-pseudocode|pseudocode]]: a halfway language between English and code. No computer runs it, and it has no strict rules. It’s for people: you, a classmate, an exam marker. You write the logic without worrying about colons, brackets or exact function names.",
          "Here’s an algorithm to find the largest number in a list, in pseudocode:",
          {ex:"SET biggest TO the first number in the list\nFOR EACH number n IN the list\n    IF n > biggest THEN\n        SET biggest TO n\nRETURN biggest", label:"Pseudocode: find the largest", mono:true},
          "And the same algorithm in Python:",
          {code:"def largest(numbers):\n    biggest = numbers[0]\n    for n in numbers:\n        if n > biggest:\n            biggest = n\n    return biggest\n\nprint(largest([4, 9, 2, 9, 7]))\nprint(largest([-5, -2, -8]))", lang:"py", label:"largest.py", pylab:"pl-function", cap:"Output: `9`, then `-2`."},
          "Common pseudocode habits include these. Use capital keywords such as SET, IF, FOR EACH, REPEAT and RETURN. Use indentation to show which steps belong inside a loop or a decision. Write one action per line. Books and courses use slightly different words. This is normal. Each line just needs to mean one exact thing.",
          {tip:"If you study for the AP Computer Science Principles exam, its pseudocode writes `←` for “set” (as in `biggest ← n`) and numbers list positions **from 1**, not from 0 as Python does. The ideas are the same; only the notation differs."}
        ]},
      {h:"Flowcharts: the plan as a picture", body:[
          "A [[alg-flowchart|flowchart]] draws the same plan as shapes joined by arrows. It shows decisions and loops at a glance. The shapes have standard meanings:",
          {table:[
              ["Shape", "Means", "Example"],
              ["Rounded box", "Start or end", "“Start”, “End”"],
              ["Parallelogram (slanted box)", "Input or output", "“Get the list”, “Show biggest”"],
              ["Rectangle", "A step that does something", "“biggest = first number”"],
              ["Diamond", "A yes-or-no question; two arrows leave it", "“n > biggest?”"],
              ["Arrow", "What happens next", "Follow it to the next shape"]
            ]},
          {fig:"<svg viewBox=\"0 0 340 542\"><defs><marker id=\"t2u11-l1-b\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><rect class=\"d-gold\" x=\"70\" y=\"8\" width=\"100\" height=\"34\" rx=\"17\" stroke-width=\"1.5\"/><text x=\"120\" y=\"30\" text-anchor=\"middle\">Start</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,42 L120,62\"/><path class=\"d-lup\" d=\"M60,66 L195,66 L180,104 L45,104 Z\" stroke-width=\"1.5\"/><text x=\"120\" y=\"90\" text-anchor=\"middle\">Get the list</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,104 L120,124\"/><rect class=\"d-panel\" x=\"35\" y=\"128\" width=\"170\" height=\"40\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"120\" y=\"146\" text-anchor=\"middle\">biggest =</text><text x=\"120\" y=\"162\" text-anchor=\"middle\">first number</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,168 L120,190\"/><path class=\"d-gold\" d=\"M120,194 L200,236 L120,278 L40,236 Z\" stroke-width=\"1.5\"/><text x=\"120\" y=\"233\" text-anchor=\"middle\">Numbers</text><text x=\"120\" y=\"249\" text-anchor=\"middle\">left?</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,278 L120,306\"/><text class=\"s\" x=\"126\" y=\"296\">yes</text><rect class=\"d-panel\" x=\"45\" y=\"310\" width=\"150\" height=\"34\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"120\" y=\"332\" text-anchor=\"middle\">n = next number</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,344 L120,366\"/><path class=\"d-gold\" d=\"M120,370 L200,412 L120,454 L40,412 Z\" stroke-width=\"1.5\"/><text x=\"120\" y=\"417\" text-anchor=\"middle\">n &gt; biggest?</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M120,454 L120,482\"/><text class=\"s\" x=\"126\" y=\"472\">yes</text><rect class=\"d-sage\" x=\"55\" y=\"486\" width=\"130\" height=\"34\" rx=\"4\" stroke-width=\"1.5\"/><text x=\"120\" y=\"508\" text-anchor=\"middle\">biggest = n</text><path class=\"d-ink\" d=\"M55,503 L14,503 L14,236\" stroke-width=\"2\"/><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M14,236 L38,236\"/><path class=\"d-ink\" d=\"M40,412 L14,412\" stroke-width=\"2\"/><text class=\"s\" x=\"20\" y=\"406\">no</text><text class=\"s\" x=\"18\" y=\"452\">loop</text><text class=\"s\" x=\"18\" y=\"466\">back</text><path class=\"d-ink\" d=\"M200,236 L278,236\" stroke-width=\"2\"/><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M278,236 L278,306\"/><text class=\"s\" x=\"206\" y=\"230\">no</text><path class=\"d-lup\" d=\"M236,310 L332,310 L320,362 L224,362 Z\" stroke-width=\"1.5\"/><text x=\"278\" y=\"333\" text-anchor=\"middle\">Show</text><text x=\"278\" y=\"349\" text-anchor=\"middle\">biggest</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l1-b)\" d=\"M278,362 L278,386\"/><rect class=\"d-gold\" x=\"238\" y=\"390\" width=\"80\" height=\"34\" rx=\"17\" stroke-width=\"1.5\"/><text x=\"278\" y=\"412\" text-anchor=\"middle\">End</text></svg>", alt:"A flowchart. Start, then a parallelogram “Get the list”, then a rectangle “biggest = first number”, then a diamond “Numbers left?”. If yes: a rectangle “n = next number”, then a diamond “n > biggest?”. If yes: a rectangle “biggest = n”. Both that rectangle and the “no” arrow from “n > biggest?” lead back up to “Numbers left?”: this is the loop. If “Numbers left?” is no, a parallelogram “Show biggest”, then End.", cap:"The “find the largest” algorithm as a flowchart. The arrow going back up is the loop."},
          "Follow the arrows with the list `[4, 9, 2]`. The loop is the arrow that goes **back up**: after each number, the flowchart returns to “Numbers left?” until the answer is no. Every loop in code becomes an arrow pointing backwards, and every `if` becomes a diamond.",
          "Pseudocode or flowchart? Pseudocode is quicker to write and closer to real code. Flowcharts make branches easier to see, so they’re popular in school courses and for explaining processes to people who don’t read code. Draw them on paper or in any free diagram app."
        ]},
      {h:"Tracing by hand", body:[
          "To check an algorithm without a computer, **trace** it: follow the steps one at a time and write down every variable’s value as it changes. A [[alg-trace-table|trace table]] has one column per variable and one row per step. Here’s `largest([4, 9, 2, 9, 7])`:",
          {table:[
              ["Step", "n", "n > biggest?", "biggest"],
              ["Start", "–", "–", "4"],
              ["1", "4", "no", "4"],
              ["2", "9", "yes", "9"],
              ["3", "2", "no", "9"],
              ["4", "9", "no: 9 is not more than 9", "9"],
              ["5", "7", "no", "9"]
            ]},
          "The function returns 9. Look at step 4: the second 9 doesn’t replace the first, because `>` means *strictly* greater. Tracing shows details like that, which your eyes skip when you only read the code.",
          "Tracing is the skill most exam questions test (“what does this code print?”), and it’s how you find bugs in your head before you run anything. Go slowly: bugs hide in the steps you skip. Many people trace with a pencil and a sheet of paper next to the screen.",
          {lab:"pl-loop", t:"Practice: loop over a list and keep a running result"}
        ]},
      {h:"Testing the plan: edge cases", body:[
          "An algorithm must be correct for **every** allowed input, not only a friendly example. So test it on [[edge-case|edge cases]]: the smallest, emptiest or strangest inputs. For “find the largest”, try:",
          {list:["**All negative numbers**, `[-5, -2, -8]`. Our version gives -2: correct.", "**One number**, `[6]`. The loop runs once and returns 6.", "**Ties**, `[9, 9]`. It returns 9: fine.", "**An empty list**, `[]`. `numbers[0]` fails with `IndexError: list index out of range`. Decide what should happen (return `None`, or show a clear message) and write that into the plan."]},
          "Here’s a version many beginners write. It looks fine on the friendly example:",
          {code:"def largest(numbers):\n    biggest = 0          # the bug is here\n    for n in numbers:\n        if n > biggest:\n            biggest = n\n    return biggest\n\nprint(largest([4, 9, 2, 9, 7]))\nprint(largest([-5, -2, -8]))", lang:"py", label:"A plan with a hidden bug", cap:"Output: `9`, then **`0`**, a number that isn’t even in the second list."},
          "The bug is in the plan, not in the Python. Starting at 0 assumes that at least one number is bigger than 0. Starting with the first item assumes nothing. {{debugging-strategies|Unit 10}} shows how to hunt bugs like this, and {{testing-basics|Unit 11}} how to write tests that try edge cases automatically.",
          {warn:"Two tests that pass prove only that those two inputs work. Always add an empty input, a single item and the extremes (very large, negative, ties) before you trust an algorithm."}
        ]},
      {h:"Common misconceptions", body:[
          {list:["**“Algorithms are a computer thing.”** Any precise method is one: long division, a knitting pattern, a fire-drill plan. Computers just need them extra precise.", "**“If it works on my example, it’s correct.”** One example proves very little. Try the edge cases: empty, one item, negatives, ties, the biggest allowed size.", "**“Pseudocode must follow exact rules.”** It must be clear, not official. Use the conventions your course or team uses.", "**“Flowcharts are old-fashioned, so skip them.”** They’re still a common way to explain decisions to people who don’t read code, and drawing one often reveals a missing branch.", "**“Tracing is a waste of time when I can just run it.”** Running shows *what* happens; tracing shows *why*. You need both."]}
        ]}
    ],
   try:[
      {id:"t2u11-l1-x1", type:"sort", q:"Ana is writing steps for a program. Which instructions are precise enough for a computer to follow?", buckets:["Precise enough", "Too vague"], items:[
          {t:"Repeat 10 times: add 1 to `count`", b:0, why:"A fixed number of repeats and an exact action: nothing to guess."},
          {t:"Keep going until it looks finished", b:1, why:"“Looks finished” needs human judgment. Say what finished means, such as “until the list is empty”."},
          {t:"If the total is over 100, print “Too high”", b:0, why:"A yes-or-no test with an exact number and an exact action."},
          {t:"Choose a good name for the file", b:1, why:"“Good” isn’t defined. A precise version: “name it with today’s date, such as 2026-11-20.txt”."},
          {t:"Add up all the numbers in the list", b:0, why:"Exact and finite: there’s one right answer, and Python’s `sum()` does it."},
          {t:"Sort the photos sensibly", b:1, why:"Sensibly by what: date, name, size? A computer needs the rule spelled out."}
        ]},
      {id:"t2u11-l1-x2", type:"order", q:"Mei wants a program that lists which of her plants need water today. Put the decomposed steps in a sensible order.", items:[
          {t:"Store each plant with the date it was last watered and how many days it can go without", why:"First you need the data the rest of the steps work on."},
          {t:"For each plant, work out how many days have passed since that stored date", why:"A loop over the plants. It needs the stored dates, so it can only come after the first step."},
          {t:"If that’s more than the plant’s limit, add it to a “needs water” list", why:"The decision happens inside the loop, once per plant."},
          {t:"Print the “needs water” list", why:"Output comes last, once the loop has checked every plant."}
        ]},
      {id:"t2u11-l1-x3", type:"match", q:"Match each flowchart shape with what it means.", pairs:[
          ["Rounded box", "Start or end", "Every flowchart begins and ends with one."],
          ["Diamond", "A yes-or-no question", "Two arrows leave it, one for yes and one for no. In code, it’s an `if` or a loop condition."],
          ["Parallelogram", "Input or output", "Getting data in (like `input()`) or showing it (like `print()`)."],
          ["Rectangle", "A step that does something", "A calculation or an assignment, such as `biggest = n`."],
          ["An arrow pointing back up", "A loop", "The flow returns to an earlier step and repeats."]
        ]},
      {id:"t2u11-l1-x4", type:"number", q:"Trace this by hand. What does it print?\n\n`def count_over(values, limit):`\n`    count = 0`\n`    for v in values:`\n`        if v > limit:`\n`            count += 1`\n`    return count`\n\n`print(count_over([12, 30, 18, 30, 45], 18))`", answer:3, tol:0, unit:"", why:"Check each value against 18 with `>`: 12 no, 30 yes (1), 18 no (18 is not *more* than 18), 30 yes (2), 45 yes (3). It prints **3**.", wrongs:[
          {v:4, tol:0, why:"That counts 18 too, as if the test were `>=`. `>` means strictly greater, so 18 doesn’t count."},
          {v:5, tol:0, why:"That counts every value. Only values that pass the `if` add 1."},
          {v:2, tol:0, why:"The two 30s each count separately; the loop visits every item, repeats included. Did you skip one 30, or the 45?"}
        ]},
      {id:"t2u11-l1-x5", type:"spot", q:"Tomás wrote pseudocode to find the **cheapest** price in a list of prices (all above 0). Tap every line with a bug.", ask:"a bug", mono:true, parts:[
          {t:"SET cheapest TO 0", flag:true, why:"No price is below 0, so nothing ever replaces it and the answer is always 0. Start with the first price instead."},
          "\n",
          {t:"FOR EACH price p IN prices", flag:false, why:"Fine: the loop must look at every price."},
          "\n    ",
          {t:"IF p > cheapest THEN", flag:true, why:"This keeps the bigger price, so it finds the most expensive. For the cheapest, test `p < cheapest`."},
          "\n        ",
          {t:"SET cheapest TO p", flag:false, why:"Fine: when a cheaper price turns up, remember it."},
          "\n",
          {t:"RETURN cheapest", flag:false, why:"Fine: after the loop, hand back the answer. It’s outside the loop, so every price gets checked first."}
        ]},
      {id:"t2u11-l1-x6", type:"mcq", q:"Kenji wrote `average(numbers)`, which returns `sum(numbers) / len(numbers)`. He tested it with `[2, 4, 6]` and got 4.0. Which extra test is **most** likely to reveal a problem?", options:[
          {t:"An empty list, `[]`", ok:true, why:"Right. `len([])` is 0, so the function divides by zero and stops with `ZeroDivisionError`. The plan needs to say what an empty list should give."},
          {t:"`[10, 20, 30]`", why:"Another friendly list like the first. It will pass, and tell him almost nothing new."},
          {t:"`[2, 4, 6]` again, to be sure", why:"Running the same input again gives the same answer. Tests need *different* inputs, especially the edges."},
          {t:"A list of five different positive whole numbers", why:"Still a typical, friendly case. Edge cases are the empty, single, negative or extreme ones."}
        ]},
      {id:"t2u11-l1-x7", type:"mcq", q:"In a flowchart, the arrow from the last box leads back up to a diamond that asks “More rows?”. What does this become in Python?", options:[
          {t:"An `if` with no `else`", why:"An `if` runs its block at most once. An arrow that goes back to repeat a question is a loop."},
          {t:"A loop, such as `for row in rows:` or a `while` loop", ok:true, why:"Right. Going back to ask again is what loops do. The diamond is the loop’s condition: carry on while there are more rows."},
          {t:"The end of the program", why:"The end is a rounded box with no arrow leaving it. This arrow keeps the flow going."},
          {t:"An error, because arrows should only point down", why:"Arrows can point anywhere. Pointing back up is the standard way to draw repetition."}
        ]},
      {id:"t2u11-l1-x8", type:"explain", q:"A “find the largest number” function starts with `biggest = 0`, then checks each number. Explain why it gives the wrong answer for `[-5, -2, -8]`, how to fix the plan, and how testing could have caught it.", hint:"What does starting at 0 assume about the numbers?", model:"Starting at 0 assumes that at least one number in the list is bigger than 0. With `[-5, -2, -8]`, no number beats 0. So the function returns 0, which isn’t even in the list. The right answer is -2. The bug is in the plan, not the Python. The fix is to start with the first item, `biggest = numbers[0]`. This assumes nothing about the values. It also shows why an algorithm must be tested on edge cases, not just a friendly example. Test all negatives, a single item, ties, and an empty list. For an empty list, you must decide what should happen.", points:["Says starting at 0 assumes some number is bigger than 0", "Says the function returns 0 for all-negative lists", "Fixes it by starting with the first item", "Says to test edge cases such as negatives, one item or an empty list"]}
    ],
   apply:{intro:"Plan before you code. You need paper and a pencil (or any notes app) and the Python Lab or Python on a computer.", tasks:[
        {t:"Decompose a task from your own life", how:["Pick a small repetitive task you do: splitting a bill, checking which library books are due, planning a weekly shopping list.", "Write the big task at the top of a page. Split it into 3 to 5 steps. Split any step you can’t picture as code again.", "Stop when each step is something Python can do: a list, a loop, an `if`, a sum, a `print()`."], write:"Paste your decomposition as an indented outline."},
        {t:"Pseudocode, flowchart, Python", how:["Write pseudocode for **find the smallest number in a list**, starting from the first number (not 0).", "Draw it as a flowchart on paper with the five shapes from this lesson. Photograph it if you like.", "Turn it into a Python function `smallest(numbers)` in the Python Lab or on your computer, and print the result for `[7, 3, 9, 3]` and `[-1, -6, -2]`."], write:"Paste your pseudocode and your Python, with the two outputs."},
        {t:"Trace, then run", how:["Before running it, trace `smallest([8, 5, 9, 2, 6])` by hand in a trace table with columns n, n < smallest? and smallest.", "Now run it. Does Python agree with your table?", "Then run it with `[]`. Read the error, and decide what your function should do instead. Change it so an empty list returns `None`."], write:"Paste your trace table, the error you got for `[]`, and your fixed function."}
      ], proof:"A decomposed task of your own. A “smallest number” algorithm as pseudocode, flowchart and Python. A trace table that matches Python’s output. A version that copes with an empty list."},
   read:[
      {book:"ics", where:"Chapter 2, Section 2.1 “Computational Thinking”: the parts “Decomposition” and “Algorithm” (pseudocode and flowcharts)", note:"Written for computer science students, so it moves faster; the figures comparing pseudocode and a flowchart are worth a look."},
      {book:"ics", where:"Chapter 3, Section 3.2 “Algorithm Design and Discovery”: “Algorithmic Problem Solving” and “Modeling”"}
    ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u11-l2",
   title:"Searching: linear and binary search",
   minutes:60,
   hook:{q:"Hana thinks of a whole number from 1 to 100. You guess, and she says “higher” or “lower”. With the best strategy, how many guesses do you need at most?", options:["7", "10", "50", "100"], answer:0, reveal:"Seven is always enough. Guess the middle (50), and whatever she says, half the numbers are ruled out. Keep guessing the middle of what’s left: 100 possibilities shrink to 50, 25, 12, 6, 3, 1, so the seventh guess at the latest is right. This trick is called binary search, and it only works because the numbers are in order. This lesson compares it with the simple way: checking one at a time."},
   goals:["Write a linear search in Python and count how many checks it needs in the best and worst case", "Explain binary search, carry it out by hand, and write it with `low`, `high` and `mid`", "Work out the most checks binary search needs for a list of a given size, and say why doubling the list adds only one check", "Explain why binary search needs sorted data, and choose between linear search, binary search and a dictionary for a real task"],
   learn:[
      {h:"The search problem", body:[
          {lead:"Searching means answering “is it there, and where?” It’s one of the jobs computers do most."},
          "Your contacts app finds a name as you type. A spell checker looks up every word you write. A script that reads a spreadsheet (Unit 10) might need the row for one customer. Each one is a **search**: given a collection and a target, find the target’s position, or report that it isn’t there.",
          "Python can already do this for you. From Unit 8 you know `in`, which answers yes or no, and lists also have `.index()`, which gives a position:",
          {ex:">>> shelf = [\"maps\", \"poetry\", \"cooking\", \"history\"]\n>>> \"history\" in shelf\nTrue\n>>> shelf.index(\"history\")\n3\n>>> shelf.index(\"science\")\nTraceback (most recent call last):\n  ...\nValueError: list.index(x): x not in list", label:"Searching with in and .index()", mono:true},
          "If the item isn’t there, `.index()` stops with a `ValueError`. (The Python Lab runs Python 3.14 and shows the message above; older versions say `'science' is not in list`.)",
          "But how do they find it? There are two classic methods. The difference between them is one of the most important ideas in computing. For a big collection, one can be thousands of times faster than the other."
        ]},
      {h:"Linear search: one at a time", body:[
          "[[alg-linear-search|Linear search]] is what you’d do with a shuffled pile of letters. Look at the first, then the next, and so on. Stop when you find the one you want or run out. Here it is in Python:",
          {code:"def linear_search(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i\n    return None\n\nshelf = [\"maps\", \"poetry\", \"cooking\", \"history\", \"music\"]\nprint(linear_search(shelf, \"history\"))\nprint(linear_search(shelf, \"science\"))", lang:"py", label:"linear_search.py", pylab:"pl-loop", cap:"Output: `3`, then `None`."},
          {list:["`range(len(items))` gives the positions 0, 1, 2… so `i` is the position and `items[i]` is the item there.", "`return i` stops the function the moment the target turns up. There’s no point checking the rest.", "If the loop finishes without finding it, the function returns `None`, Python’s “nothing here” value (Unit 8). The code that calls it can test `if position is None:` to tell “not found” apart from position 0."]},
          "How much work is that? Count the **checks** (the `==` comparisons):",
          {table:[
              ["Case", "When it happens", "Checks for a list of n items"],
              ["Best case", "The target is first", "1"],
              ["Worst case", "The target is last, or not there at all", "n"],
              ["On average", "The target is somewhere in the list", "about n ÷ 2"]
            ]},
          "Usually we care about the [[alg-worst-case|worst case]], because it’s the promise: “it will never take more than this”. For linear search it’s n checks. A list twice as long can take twice as many. Python’s `in` and `.index()` work this way on lists.",
          {key:"Linear search works on any list, sorted or not, but it may have to look at every item."},
          {lab:"pl-find", t:"Practice: write a linear search in the Python Lab"}
        ]},
      {h:"Binary search: halve it every time", body:[
          "Now picture a paper dictionary. To find “otter”, you don’t start at “aardvark”. You open it near the middle, see “map”, and know “otter” is in the second half, so the whole first half is gone in one look. Then you do the same with the half that’s left.",
          "That’s [[alg-binary-search|binary search]]. It only works when the items are **sorted**, because that’s what lets one look rule out a whole half. The steps:",
          {ol:["Look at the middle item of the part that could still hold the target.", "If it’s the target, you’ve found it.", "If the target is bigger, it can only be in the right half: throw the left half away (middle included).", "If the target is smaller, throw the right half away.", "Repeat with the half that’s left. If nothing is left, the target isn’t there."]},
          {fig:"<svg viewBox=\"0 0 340 518\"><text x=\"10\" y=\"18\">Find 70 in 16 sorted numbers</text><text x=\"10\" y=\"44\">Check 1: low=0, high=15, mid=7</text><rect class=\"d-lup\" x=\"10\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"28\" y=\"72\" text-anchor=\"middle\">3</text><rect class=\"d-lup\" x=\"50\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"68\" y=\"72\" text-anchor=\"middle\">8</text><rect class=\"d-lup\" x=\"90\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"108\" y=\"72\" text-anchor=\"middle\">12</text><rect class=\"d-lup\" x=\"130\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"148\" y=\"72\" text-anchor=\"middle\">15</text><rect class=\"d-lup\" x=\"170\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"188\" y=\"72\" text-anchor=\"middle\">21</text><rect class=\"d-lup\" x=\"210\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"228\" y=\"72\" text-anchor=\"middle\">27</text><rect class=\"d-lup\" x=\"250\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"268\" y=\"72\" text-anchor=\"middle\">34</text><rect class=\"d-gold\" x=\"290\" y=\"54\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"2\"/><text x=\"308\" y=\"72\" text-anchor=\"middle\">40</text><rect class=\"d-lup\" x=\"10\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"28\" y=\"102\" text-anchor=\"middle\">46</text><rect class=\"d-lup\" x=\"50\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"68\" y=\"102\" text-anchor=\"middle\">52</text><rect class=\"d-lup\" x=\"90\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"108\" y=\"102\" text-anchor=\"middle\">58</text><rect class=\"d-lup\" x=\"130\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"148\" y=\"102\" text-anchor=\"middle\">63</text><rect class=\"d-lup\" x=\"170\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"188\" y=\"102\" text-anchor=\"middle\">70</text><rect class=\"d-lup\" x=\"210\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"228\" y=\"102\" text-anchor=\"middle\">77</text><rect class=\"d-lup\" x=\"250\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"268\" y=\"102\" text-anchor=\"middle\">85</text><rect class=\"d-lup\" x=\"290\" y=\"84\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"308\" y=\"102\" text-anchor=\"middle\">91</text><text class=\"s\" x=\"10\" y=\"130\">40 &lt; 70: drop the left half</text><text x=\"10\" y=\"160\">Check 2: low=8, high=15, mid=11</text><rect class=\"d-panel\" x=\"10\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"28\" y=\"188\" text-anchor=\"middle\">3</text><rect class=\"d-panel\" x=\"50\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"68\" y=\"188\" text-anchor=\"middle\">8</text><rect class=\"d-panel\" x=\"90\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"108\" y=\"188\" text-anchor=\"middle\">12</text><rect class=\"d-panel\" x=\"130\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"148\" y=\"188\" text-anchor=\"middle\">15</text><rect class=\"d-panel\" x=\"170\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"188\" y=\"188\" text-anchor=\"middle\">21</text><rect class=\"d-panel\" x=\"210\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"228\" y=\"188\" text-anchor=\"middle\">27</text><rect class=\"d-panel\" x=\"250\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"268\" y=\"188\" text-anchor=\"middle\">34</text><rect class=\"d-panel\" x=\"290\" y=\"170\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"308\" y=\"188\" text-anchor=\"middle\">40</text><rect class=\"d-lup\" x=\"10\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"28\" y=\"218\" text-anchor=\"middle\">46</text><rect class=\"d-lup\" x=\"50\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"68\" y=\"218\" text-anchor=\"middle\">52</text><rect class=\"d-lup\" x=\"90\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"108\" y=\"218\" text-anchor=\"middle\">58</text><rect class=\"d-gold\" x=\"130\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"2\"/><text x=\"148\" y=\"218\" text-anchor=\"middle\">63</text><rect class=\"d-lup\" x=\"170\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"188\" y=\"218\" text-anchor=\"middle\">70</text><rect class=\"d-lup\" x=\"210\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"228\" y=\"218\" text-anchor=\"middle\">77</text><rect class=\"d-lup\" x=\"250\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"268\" y=\"218\" text-anchor=\"middle\">85</text><rect class=\"d-lup\" x=\"290\" y=\"200\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"308\" y=\"218\" text-anchor=\"middle\">91</text><text class=\"s\" x=\"10\" y=\"246\">63 &lt; 70: drop the left half</text><text x=\"10\" y=\"276\">Check 3: low=12, high=15, mid=13</text><rect class=\"d-panel\" x=\"10\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"28\" y=\"304\" text-anchor=\"middle\">3</text><rect class=\"d-panel\" x=\"50\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"68\" y=\"304\" text-anchor=\"middle\">8</text><rect class=\"d-panel\" x=\"90\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"108\" y=\"304\" text-anchor=\"middle\">12</text><rect class=\"d-panel\" x=\"130\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"148\" y=\"304\" text-anchor=\"middle\">15</text><rect class=\"d-panel\" x=\"170\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"188\" y=\"304\" text-anchor=\"middle\">21</text><rect class=\"d-panel\" x=\"210\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"228\" y=\"304\" text-anchor=\"middle\">27</text><rect class=\"d-panel\" x=\"250\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"268\" y=\"304\" text-anchor=\"middle\">34</text><rect class=\"d-panel\" x=\"290\" y=\"286\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"308\" y=\"304\" text-anchor=\"middle\">40</text><rect class=\"d-panel\" x=\"10\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"28\" y=\"334\" text-anchor=\"middle\">46</text><rect class=\"d-panel\" x=\"50\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"68\" y=\"334\" text-anchor=\"middle\">52</text><rect class=\"d-panel\" x=\"90\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"108\" y=\"334\" text-anchor=\"middle\">58</text><rect class=\"d-panel\" x=\"130\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"148\" y=\"334\" text-anchor=\"middle\">63</text><rect class=\"d-lup\" x=\"170\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"188\" y=\"334\" text-anchor=\"middle\">70</text><rect class=\"d-gold\" x=\"210\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"2\"/><text x=\"228\" y=\"334\" text-anchor=\"middle\">77</text><rect class=\"d-lup\" x=\"250\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"268\" y=\"334\" text-anchor=\"middle\">85</text><rect class=\"d-lup\" x=\"290\" y=\"316\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text x=\"308\" y=\"334\" text-anchor=\"middle\">91</text><text class=\"s\" x=\"10\" y=\"362\">77 &gt; 70: drop the right half</text><text x=\"10\" y=\"392\">Check 4: low=12, high=12, mid=12</text><rect class=\"d-panel\" x=\"10\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"28\" y=\"420\" text-anchor=\"middle\">3</text><rect class=\"d-panel\" x=\"50\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"68\" y=\"420\" text-anchor=\"middle\">8</text><rect class=\"d-panel\" x=\"90\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"108\" y=\"420\" text-anchor=\"middle\">12</text><rect class=\"d-panel\" x=\"130\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"148\" y=\"420\" text-anchor=\"middle\">15</text><rect class=\"d-panel\" x=\"170\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"188\" y=\"420\" text-anchor=\"middle\">21</text><rect class=\"d-panel\" x=\"210\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"228\" y=\"420\" text-anchor=\"middle\">27</text><rect class=\"d-panel\" x=\"250\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"268\" y=\"420\" text-anchor=\"middle\">34</text><rect class=\"d-panel\" x=\"290\" y=\"402\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"308\" y=\"420\" text-anchor=\"middle\">40</text><rect class=\"d-panel\" x=\"10\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"28\" y=\"450\" text-anchor=\"middle\">46</text><rect class=\"d-panel\" x=\"50\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"68\" y=\"450\" text-anchor=\"middle\">52</text><rect class=\"d-panel\" x=\"90\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"108\" y=\"450\" text-anchor=\"middle\">58</text><rect class=\"d-panel\" x=\"130\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"148\" y=\"450\" text-anchor=\"middle\">63</text><rect class=\"d-sage\" x=\"170\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"2\"/><text x=\"188\" y=\"450\" text-anchor=\"middle\">70</text><rect class=\"d-panel\" x=\"210\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"228\" y=\"450\" text-anchor=\"middle\">77</text><rect class=\"d-panel\" x=\"250\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"268\" y=\"450\" text-anchor=\"middle\">85</text><rect class=\"d-panel\" x=\"290\" y=\"432\" width=\"36\" height=\"26\" rx=\"4\" stroke-width=\"1\"/><text class=\"s\" x=\"308\" y=\"450\" text-anchor=\"middle\">91</text><text class=\"s\" x=\"10\" y=\"478\">70 found: 4 checks</text><rect class=\"d-gold\" x=\"10\" y=\"496\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"2\"/><text class=\"s\" x=\"30\" y=\"508\">checked</text><rect class=\"d-lup\" x=\"100\" y=\"496\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1\"/><text class=\"s\" x=\"120\" y=\"508\">still possible</text><rect class=\"d-panel\" x=\"220\" y=\"496\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1\"/><text class=\"s\" x=\"240\" y=\"508\">ruled out</text></svg>", alt:"Four snapshots of a sorted list of 16 numbers: 3, 8, 12, 15, 21, 27, 34, 40, 46, 52, 58, 63, 70, 77, 85, 91, searching for 70. Check 1: low 0, high 15, mid 7; it checks 40, which is less than 70, so the left half is dropped. Check 2: low 8, high 15, mid 11; it checks 63, less than 70, so the left half is dropped again. Check 3: low 12, high 15, mid 13; it checks 77, more than 70, so the right half is dropped. Check 4: low 12, high 12, mid 12; it checks 70: found in 4 checks.", cap:"Searching for 70: each check rules out about half of what’s left."}
        ]},
      {h:"Binary search in Python", body:[
          "In code, binary search keeps two positions: `low` and `high`, the first and last positions that could still hold the target. The `print()` line is only there so you can watch it work:",
          {code:"def binary_search(items, target):\n    low = 0\n    high = len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        print(f\"low={low} high={high} mid={mid}\")\n        if items[mid] == target:\n            return mid\n        elif items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None\n\nages = [3, 8, 12, 15, 21, 27, 34, 40,\n        46, 52, 58, 63, 70, 77, 85, 91]\nprint(binary_search(ages, 70))", lang:"py", label:"binary_search.py", pylab:"pl-while", cap:"Output: `low=0 high=15 mid=7`, `low=8 high=15 mid=11`, `low=12 high=15 mid=13`, `low=12 high=12 mid=12`, then `12`, the position of 70. Exactly the four checks in the diagram."},
          {list:["`mid = (low + high) // 2` finds the middle position. `//` divides and drops any remainder (Unit 8), so `mid` is always a whole number.", "`low = mid + 1` throws away the left half **and** the middle, which has already been checked. `high = mid - 1` does the same on the other side.", "`while low <= high` keeps going while at least one position is left. When `low` passes `high`, nothing is left, and the function returns `None`."]},
          "Those `+ 1` and `- 1` matter. Write `low = mid` instead and, when two items are left, `mid` can land on the same position forever: the loop never ends. Write `while low < high` and the very last candidate is never checked. Binary search is short, but famously easy to get slightly wrong; trace it on a tiny list before you trust it.",
          {lab:"pl-while", t:"Practice: a while loop that stops at the right moment"},
          {lab:"pl-fix-offbyone", t:"Practice: find and fix an off-by-one bug"}
        ]},
      {h:"Counting the checks", body:[
          "Each check halves what’s left. So the question “how many checks at most?” becomes “how many times can I halve n before one item is left?”, plus one final check of that item.",
          {table:[
              ["Items (n)", "Linear search, worst", "Binary search, worst"],
              ["16", "16", "5"],
              ["100", "100", "7"],
              ["1,000", "1,000", "10"],
              ["1,000,000", "1,000,000", "20"],
              ["1,000,000,000", "1,000,000,000", "30"]
            ]},
          "Look at the right-hand column. **Doubling** the list adds just **one** check, because one extra halving undoes the doubling. Going from a thousand items to a million (a thousand times more) only doubles the work, from 10 checks to 20. Mathematicians call this growth [[alg-logarithm|logarithmic]]: the number of checks is about log₂ n, “how many times you can halve n”. Lesson 4 returns to it.",
          {ex:"1,000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1\nThat is 9 halvings, then 1 last check: 10 checks at most.", label:"Worked example: 1,000 sorted items", mono:true},
          "Unit 10 uses exactly this idea to find bugs. Check halfway through a long script. Then check halfway through the half that’s wrong, and so on ({{debugging-strategies|“narrow it down by halves”}}).",
          {lab:"pl-binary", t:"Practice: count the checks a binary search makes"}
        ]},
      {h:"Why sorted matters, and when linear search wins", body:[
          "Binary search on unsorted data doesn’t crash. It just gives wrong answers, which is worse:",
          {code:"print(binary_search([8, 3, 12, 1], 1))\nprint(binary_search(sorted([8, 3, 12, 1]), 1))", lang:"py", label:"Using binary_search from above, without the print line", cap:"Output: `None`, then `0`. In the unsorted list, 1 is really there, but the first check (3) sends the search the wrong way. Sorted, it’s found at position 0."},
          "So should you always sort, then binary search? Not necessarily. Sorting costs work too: more than one linear search (Lessons 3 and 4 show how much). The choice depends on the situation:",
          {table:[
              ["Situation", "Good choice", "Why"],
              ["Search once in an unsorted list", "Linear search (`in`)", "Sorting first costs more than one linear search"],
              ["Search many times in data that rarely changes", "Sort once, then binary search", "The sorting cost is shared by all the searches"],
              ["Data that is already sorted", "Binary search", "Free speed: no sorting needed"],
              ["Look things up by a key, such as a name", "A dictionary", "Python finds a key directly, without checking items one by one"],
              ["A short list (a few dozen items)", "Whatever is clearest", "Either way it takes far less than a millisecond"]
            ]},
          "Remember that fourth row. A {{py-dicts|dictionary}} doesn’t search through its keys at all: it works out where the key must be stored and looks there. That’s why `\"Mei\" in phone_numbers` stays fast however big the dictionary gets.",
          {tip:"You rarely need to write binary search yourself. Python’s standard library has a `bisect` module that does it on sorted lists, and it’s well tested. Writing your own once is still the best way to understand it."}
        ]},
      {h:"Common misconceptions", body:[
          {list:["**“Binary search works on any list.”** Only on sorted data. On unsorted data it gives wrong answers.", "**“Binary search is always better.”** For one search in unsorted data, linear search is cheaper than sorting first. For tiny lists, the difference doesn’t matter.", "**“A list twice as long takes binary search twice as long.”** It takes only one more check.", "**“Linear search means the program is badly written.”** `in` on a list is linear search, and it’s the right tool for small or unsorted lists.", "**“Not found should return -1.”** Some languages do that, but in Python `-1` is a real position (the last item), so `None` is safer. Python’s own `.index()` raises a ValueError instead."]}
        ]}
    ],
   try:[
      {id:"t2u11-l2-x1", type:"number", q:"A club’s list of 250 member names is in no particular order. Fatima uses linear search to look for a name that **isn’t** in the list. How many names does it check before it can say “not found”?", answer:250, tol:0, unit:"names", why:"To be sure a name isn’t there, linear search must check **every** item: all **250**. That’s its worst case.", wrongs:[
          {v:125, tol:0, why:"That’s the average for a name that *is* there. A missing name can only be ruled out by checking everything."},
          {v:8, tol:0, why:"That’s roughly what binary search would need, but the list isn’t sorted, so binary search can’t be used."},
          {v:249, tol:0, why:"Close, but the last name has to be checked too: it might be the one."}
        ]},
      {id:"t2u11-l2-x2", type:"sort", q:"Can binary search be used **directly** for each search, without sorting first?", buckets:["Yes: the data is sorted by what we search for", "No"], items:[
          {t:"Finding a word in a dictionary’s alphabetical word list", b:0, why:"Sorted alphabetically, and we search by the word itself."},
          {t:"Finding a score of 75 in a list of exam scores sorted from low to high", b:0, why:"Sorted by score, and we search for a score."},
          {t:"Finding a receipt for 12.50 in receipts stored in the order they arrived", b:1, why:"Arrival order isn’t sorted by amount, so one look can’t rule out half."},
          {t:"Finding who owns the number 555 0199 in contacts sorted by name", b:1, why:"The list is sorted by name, but we’re searching by phone number. Binary search needs the data sorted by the thing you’re looking for."},
          {t:"Finding a date in a list of dates sorted from oldest to newest", b:0, why:"Dates in order can be compared and halved just like numbers."},
          {t:"Finding a song in a shuffled playlist", b:1, why:"Shuffled means no order at all. Use linear search."}
        ]},
      {id:"t2u11-l2-x3", type:"order", q:"Put one round of binary search in order.", items:[
          {t:"Work out the middle position: `mid = (low + high) // 2`", why:"Every round starts by finding the middle of what’s left."},
          {t:"Compare the item at `mid` with the target", why:"One check decides what happens next."},
          {t:"If it’s equal, return `mid`", why:"Found: stop straight away."},
          {t:"Otherwise move `low` to `mid + 1` or `high` to `mid - 1`", why:"Throw away the half (and the middle) that can’t contain the target."},
          {t:"Repeat while `low <= high`; if they cross, return `None`", why:"When no positions are left, the target isn’t there."}
        ]},
      {id:"t2u11-l2-x4", type:"number", q:"A sorted list holds 500 product codes. What’s the **most** checks binary search can need to find a code, or to be sure it isn’t there?", answer:9, tol:0, unit:"checks", why:"Halve until one is left: 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1. That’s 8 halvings, then 1 final check: **9**. (Check: 2⁸ = 256 ≤ 500 < 512 = 2⁹.)", wrongs:[
          {v:8, tol:0, why:"That counts the halvings but not the last check of the one remaining item."},
          {v:250, tol:0, why:"That’s linear search’s average for a code that’s there. Binary search throws away half at every check."},
          {v:500, tol:0, why:"That’s linear search’s worst case. Binary search needs far fewer."},
          {v:10, tol:0, why:"That’s the answer for 1,000 items (or 512 to 1,023). 500 is under 512, so 9 is enough."}
        ]},
      {id:"t2u11-l2-x5", type:"spot", q:"Dmitri wrote this binary search. Tap every line with a bug.", ask:"a bug", mono:true, parts:[
          {t:"low = 0", flag:false, why:"Fine: the first position."},
          "\n",
          {t:"high = len(items) - 1", flag:false, why:"Fine: the last position is one less than the length."},
          "\n",
          {t:"while low < high:", flag:true, why:"When `low` and `high` meet, one candidate is still left, but this loop stops without checking it. Use `low <= high`."},
          "\n    ",
          {t:"mid = (low + high) // 2", flag:false, why:"Fine: the middle position, as a whole number."},
          "\n    ",
          {t:"if items[mid] == target: return mid", flag:false, why:"Fine: found it, so stop."},
          "\n    ",
          {t:"elif items[mid] < target: low = mid", flag:true, why:"The middle was already checked, so skip it: `low = mid + 1`. Without the + 1, `mid` can come out the same again and again, and the loop never ends."},
          "\n    ",
          {t:"else: high = mid - 1", flag:false, why:"Fine: drop the middle and everything to its right."}
        ]},
      {id:"t2u11-l2-x6", type:"mcq", q:"Using the 16 sorted ages from the lesson (3, 8, 12, 15, 21, 27, 34, 40, 46, 52, 58, 63, 70, 77, 85, 91), which numbers does binary search check, in order, when looking for **52**?", options:[
          {t:"40, 46, 52", why:"After 40 it doesn’t step to the next item: it jumps to the middle of what’s left (positions 8 to 15), which is 63."},
          {t:"40, 63, 52", ok:true, why:"Right. mid = 7 (40): too small, so low = 8. mid = 11 (63): too big, so high = 10. mid = 9 (52): found, in 3 checks."},
          {t:"46, 52", why:"The first check is always the middle of the whole list, position 7, which holds 40."},
          {t:"3, 8, 12, 15, 21, 27, 34, 40, 46, 52", why:"That’s linear search, which checks one item after another from the start."}
        ]},
      {id:"t2u11-l2-x7", type:"mcq", q:"Priya has an unsorted list of 40 parcel numbers and needs to check whether **one** number is in it, once. What’s the sensible approach?", options:[
          {t:"Use `in` (linear search) on the list as it is", ok:true, why:"Right. It’s one search on unsorted data. Sorting first would cost more work than the single linear search it saves, and 40 items take a moment either way."},
          {t:"Sort the list, then use binary search", why:"That pays off when you search the same data many times. For one search, sorting is the expensive part."},
          {t:"Use binary search on the list as it is", why:"Binary search on unsorted data can miss numbers that are there. It gives wrong answers without any error."},
          {t:"Write a faster search, because `in` is slow", why:"For 40 items, `in` finishes in far less than a millisecond. Clear code beats clever code here."}
        ]},
      {id:"t2u11-l2-x8", type:"explain", q:"Explain why binary search can find a name in a sorted list of a million names in about 20 checks. Linear search might need a million. Also explain why the list must be sorted.", hint:"How much does one look at the middle rule out? How many times can you halve a million?", model:"Linear search checks items one at a time, so in the worst case it looks at every one of the million names. Binary search looks at the middle item first. Because the list is sorted, that one comparison tells it which half the name must be in, so the other half is thrown away. Each check halves what is left, and a million can only be halved about 20 times before one item remains, so doubling the list adds just one check. On unsorted data, ruling out half is no longer safe, so binary search gives wrong answers.", points:["Says linear search may check every item (n checks)", "Says binary search checks the middle and rules out half", "Says each check halves what is left (about 20 halvings for a million)", "Says it relies on sorted data and gives wrong answers otherwise"]}
    ],
   apply:{intro:"Write both searches, count their checks, and see the difference grow. Everything works in the Python Lab or on a computer.", tasks:[
        {t:"Count the checks", how:["Copy `linear_search` and add a variable `checks` that goes up by 1 every time the `==` test runs. Print it before returning.", "Do the same for `binary_search` (without the extra print line from the lesson).", "Make a sorted list with `numbers = list(range(1, 1001))` and search both ways for 1, 500, 1000 and 1001."], write:"Make a small table: target, linear checks, binary checks. Which target is the worst case for each?"},
        {t:"Play the guessing game by hand", how:["Ask someone to think of a number from 1 to 100 (or write one down and hide it).", "Always guess the middle of what’s still possible, and write down each guess and each “higher” or “lower”.", "Repeat three times. Did you ever need more than 7 guesses?"], write:"Write down your guesses for one round, and how many it took."},
        {t:"Break it, then fix it", how:["In your `binary_search`, change `low = mid + 1` to `low = mid` and search a short sorted list for a number bigger than all of them. (Add a `print()` inside the loop so you can see it repeat; in the Python Lab a program still running after 4 seconds is stopped for you. On a computer, press [[kbd:Ctrl]] + [[kbd:C]] to stop it.)", "Put the `+ 1` back. Now run it on an **unsorted** list, such as `[8, 3, 12, 1]`, searching for 1.", "Sort the list first with `sorted()` and try again."], write:"What happened in each run, and why?"}
      ], proof:"Both searches written and run, with a table of how many checks each needed. A record of a guessing game that took 7 guesses or fewer. Notes on what a missing `+ 1` and an unsorted list do to binary search."},
   read:[
      {book:"ics", where:"Chapter 3, Section 3.5 “Sample Algorithms by Problem”: “Searching”, with “Sequential Search Algorithm” and “Binary Search Algorithm”", note:"The book calls linear search “sequential search”, a common other name for it."},
      {book:"ics", where:"Chapter 3, Section 3.2 “Algorithm Design and Discovery”: the “Industry Spotlight” box, “Search Algorithms”"},
      {book:"thinkpy", where:"Chapter 7, “Iteration and Search”", note:"Searching through words in a word list, with loops you already know."}
    ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u11-l3",
   title:"Sorting: by hand, in code and with sorted()",
   minutes:60,
   hook:{q:"What does `print(sorted([\"pear\", \"apple\", \"Banana\"]))` show?", options:["['apple', 'Banana', 'pear']", "['Banana', 'apple', 'pear']", "['pear', 'apple', 'Banana']", "An error: you can’t sort words with capitals"], answer:1, reveal:"`['Banana', 'apple', 'pear']`. Python compares text character by character using each character’s code number, and every capital letter A to Z comes before every lowercase a to z. So “Banana” sorts first. Adding `key=str.lower` fixes it. This lesson shows how sorting really works, by hand and in code, and how to tell `sorted()` exactly what order you mean."},
   goals:["Sort a short list by hand with selection sort and insertion sort, and write both in Python", "Count the comparisons each one makes, and say when insertion sort is quick", "Use `sorted()`, `.sort()` and `reverse=True` correctly, and predict how text and numbers stored as text are ordered", "Sort by anything you choose with a key function, such as `len`, `str.lower` or a function of your own, and explain what a stable sort keeps"],
   learn:[
      {h:"Why sorting matters", body:[
          {lead:"Sorted data is easier for people to read and much easier for programs to search."},
          "Lesson 2 showed that binary search needs sorted data. Sorting helps in other ways too. A leaderboard is just scores sorted from high to low. The median is the middle of a sorted list. Duplicates are easy to spot once they are next to each other.",
          "In Unit 8 you met Python’s `sorted()` and `.sort()`, which do the job in one line. So why sort by hand? Because sorting is the classic place to practice algorithmic thinking. There are many ways to do it. They’re easy to picture with playing cards. They behave very differently on big data. Computing courses around the world teach a few simple ones first, such as selection sort, insertion sort and [[alg-bubble-sort|bubble sort]]. The faster ones come later.",
          {tip:"Grab five playing cards, or five scraps of paper with numbers on, and do each sort with your hands as you read. It sticks far better than reading alone."}
        ]},
      {h:"Selection sort: pick the smallest", body:[
          "[[alg-selection-sort|Selection sort]] works like this: find the smallest item and swap it to the front. Then find the smallest of the rest and swap it into second place. Keep going until everything is in place.",
          {fig:"<svg viewBox=\"0 0 340 382\"><text x=\"10\" y=\"18\">Selection sort: pick the smallest, swap</text><text x=\"10\" y=\"53\">Start</text><rect class=\"d-panel\" x=\"82\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"52\" text-anchor=\"middle\">29</text><rect class=\"d-panel\" x=\"132\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"52\" text-anchor=\"middle\">10</text><rect class=\"d-panel\" x=\"182\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"52\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"52\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"52\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"82\">smallest is 10: swap it with 29</text><text x=\"10\" y=\"119\">Pass 1</text><rect class=\"d-sage\" x=\"82\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"118\" text-anchor=\"middle\">10</text><rect class=\"d-panel\" x=\"132\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"118\" text-anchor=\"middle\">29</text><rect class=\"d-panel\" x=\"182\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"118\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"118\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"118\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"148\">smallest of the rest is 13: swap with 29</text><text x=\"10\" y=\"185\">Pass 2</text><rect class=\"d-sage\" x=\"82\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"184\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"184\" text-anchor=\"middle\">13</text><rect class=\"d-panel\" x=\"182\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"184\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"184\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"184\" text-anchor=\"middle\">29</text><text class=\"s\" x=\"82\" y=\"214\">smallest of the rest is 14: already there</text><text x=\"10\" y=\"251\">Pass 3</text><rect class=\"d-sage\" x=\"82\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"250\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"250\" text-anchor=\"middle\">13</text><rect class=\"d-sage\" x=\"182\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"250\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"250\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"250\" text-anchor=\"middle\">29</text><text class=\"s\" x=\"82\" y=\"280\">smallest of the rest is 29: swap with 37</text><text x=\"10\" y=\"317\">Pass 4</text><rect class=\"d-sage\" x=\"82\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"316\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"316\" text-anchor=\"middle\">13</text><rect class=\"d-sage\" x=\"182\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"316\" text-anchor=\"middle\">14</text><rect class=\"d-sage\" x=\"232\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"316\" text-anchor=\"middle\">29</text><rect class=\"d-sage\" x=\"282\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"316\" text-anchor=\"middle\">37</text><text class=\"s\" x=\"82\" y=\"346\">the last one is in place too: done</text><rect class=\"d-sage\" x=\"10\" y=\"360\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1.5\"/><text class=\"s\" x=\"30\" y=\"372\">sorted part</text><rect class=\"d-panel\" x=\"138\" y=\"360\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1.5\"/><text class=\"s\" x=\"158\" y=\"372\">not sorted yet</text></svg>", alt:"Selection sort on 29, 10, 14, 37, 13. Start: the smallest is 10, so swap it with 29, giving 10, 29, 14, 37, 13. Pass 2: the smallest of the rest is 13, swapped with 29, giving 10, 13, 14, 37, 29. Pass 3: the smallest of the rest is 14, already in place. Pass 4: the smallest of the rest is 29, swapped with 37, giving 10, 13, 14, 29, 37. The sorted part on the left grows by one each pass.", cap:"Each pass moves one more item into its final place on the left."},
          "In Python:",
          {code:"def selection_sort(items):\n    n = len(items)\n    for i in range(n - 1):\n        smallest = i\n        for j in range(i + 1, n):\n            if items[j] < items[smallest]:\n                smallest = j\n        items[i], items[smallest] = items[smallest], items[i]\n\nscores = [29, 10, 14, 37, 13]\nselection_sort(scores)\nprint(scores)", lang:"py", label:"selection_sort.py", cap:"Output: `[10, 13, 14, 29, 37]`. The function changes the list itself, like `.sort()` does, so it doesn’t need to return anything."},
          {list:["The outer loop, `for i in range(n - 1)`, picks the place to fill: position 0, then 1, and so on. The last item needs no pass of its own: once everything else is in place, it is too.", "The inner loop looks through the rest of the list (`i + 1` to the end) and remembers the **position** of the smallest item so far.", "`items[i], items[smallest] = items[smallest], items[i]` swaps two items in one line. Python works out the whole right-hand side first (a {{py-lists|tuple}} of the two values), then puts them back in the opposite places. Without this trick you’d need a spare variable."]},
          "A loop inside a loop is called a [[alg-nested-loop|nested loop]]. Here, the inner loop runs once for every pass of the outer loop. Keep that in mind; Lesson 4 shows why it makes selection sort slow on long lists.",
          {lab:"pl-selection", t:"Practice: selection sort, printing each pass"}
        ]},
      {h:"Insertion sort: slide each one into place", body:[
          "[[alg-insertion-sort|Insertion sort]] is how many people sort a hand of cards. Keep the left part sorted. Take the next card, slide it left past every bigger card, and drop it into the gap.",
          {fig:"<svg viewBox=\"0 0 340 382\"><text x=\"10\" y=\"18\">Insertion sort: take the next, slide it in</text><text x=\"10\" y=\"53\">Start</text><rect class=\"d-sage\" x=\"82\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"52\" text-anchor=\"middle\">29</text><rect class=\"d-panel\" x=\"132\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"52\" text-anchor=\"middle\">10</text><rect class=\"d-panel\" x=\"182\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"52\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"52\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"30\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"52\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"82\">take 10: slide it left of 29</text><text x=\"10\" y=\"119\">Step 1</text><rect class=\"d-sage\" x=\"82\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"118\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"118\" text-anchor=\"middle\">29</text><rect class=\"d-panel\" x=\"182\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"118\" text-anchor=\"middle\">14</text><rect class=\"d-panel\" x=\"232\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"118\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"96\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"118\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"148\">take 14: slide it left of 29</text><text x=\"10\" y=\"185\">Step 2</text><rect class=\"d-sage\" x=\"82\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"184\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"184\" text-anchor=\"middle\">14</text><rect class=\"d-sage\" x=\"182\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"184\" text-anchor=\"middle\">29</text><rect class=\"d-panel\" x=\"232\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"184\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"162\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"184\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"214\">take 37: it stays where it is</text><text x=\"10\" y=\"251\">Step 3</text><rect class=\"d-sage\" x=\"82\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"250\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"250\" text-anchor=\"middle\">14</text><rect class=\"d-sage\" x=\"182\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"250\" text-anchor=\"middle\">29</text><rect class=\"d-sage\" x=\"232\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"250\" text-anchor=\"middle\">37</text><rect class=\"d-panel\" x=\"282\" y=\"228\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"250\" text-anchor=\"middle\">13</text><text class=\"s\" x=\"82\" y=\"280\">take 13: slide it past 37, 29, 14</text><text x=\"10\" y=\"317\">Step 4</text><rect class=\"d-sage\" x=\"82\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"104\" y=\"316\" text-anchor=\"middle\">10</text><rect class=\"d-sage\" x=\"132\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"154\" y=\"316\" text-anchor=\"middle\">13</text><rect class=\"d-sage\" x=\"182\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"204\" y=\"316\" text-anchor=\"middle\">14</text><rect class=\"d-sage\" x=\"232\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"254\" y=\"316\" text-anchor=\"middle\">29</text><rect class=\"d-sage\" x=\"282\" y=\"294\" width=\"44\" height=\"34\" rx=\"5\" stroke-width=\"1.5\"/><text x=\"304\" y=\"316\" text-anchor=\"middle\">37</text><text class=\"s\" x=\"82\" y=\"346\">every card is in place: done</text><rect class=\"d-sage\" x=\"10\" y=\"360\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1.5\"/><text class=\"s\" x=\"30\" y=\"372\">sorted so far</text><rect class=\"d-panel\" x=\"154\" y=\"360\" width=\"14\" height=\"14\" rx=\"2\" stroke-width=\"1.5\"/><text class=\"s\" x=\"174\" y=\"372\">still to insert</text></svg>", alt:"Insertion sort on 29, 10, 14, 37, 13. At the start only 29 counts as sorted. Step 1: take 10 and slide it left of 29: 10, 29. Step 2: take 14 and slide it left of 29: 10, 14, 29. Step 3: take 37; it stays where it is. Step 4: take 13 and slide it past 37, 29 and 14: 10, 13, 14, 29, 37. Done.", cap:"The sorted part on the left grows by one each step; each new item slides left until it fits."},
          {code:"def insertion_sort(items):\n    for i in range(1, len(items)):\n        current = items[i]\n        j = i - 1\n        while j >= 0 and items[j] > current:\n            items[j + 1] = items[j]   # slide right\n            j -= 1\n        items[j + 1] = current\n\nscores = [29, 10, 14, 37, 13]\ninsertion_sort(scores)\nprint(scores)", lang:"py", label:"insertion_sort.py", pylab:"pl-while", cap:"Output: `[10, 13, 14, 29, 37]`."},
          {list:["`current` is the item being inserted. `j` starts just to its left.", "The `while` loop slides bigger items one place right, making a gap, until it reaches a smaller item or the start of the list (`j >= 0`).", "`items[j + 1] = current` drops the item into the gap.", "The order of the test matters: `j >= 0` comes first, so when `j` reaches -1 Python stops before it looks at `items[-1]`, which would be the *last* item."]}
        ]},
      {h:"Comparing them: count the comparisons", body:[
          "A fair way to compare sorting algorithms is to count **comparisons** (the `<` or `>` tests between items). For the five scores above, selection sort makes 10 and insertion sort makes 8. For bigger lists, here are real counts from adding a counter to each function. The “random order” counts come from one run. They change a little with every shuffle:",
          {table:[
              ["Items", "Selection (any order)", "Insertion, random order", "Insertion, already sorted"],
              ["10", "45", "29", "9"],
              ["100", "4,950", "2,549", "99"],
              ["1,000", "499,500", "261,103", "999"]
            ]},
          "Three things stand out:",
          {list:["**Selection sort always does the same work**: for n items it compares 1 + 2 + … + (n − 1) pairs, which is n × (n − 1) ÷ 2. Ten times more items means about **a hundred** times more comparisons.", "**Insertion sort depends on the data.** On random data it does about half as many as selection sort, but it grows the same way: 10 times the items, about 100 times the work. On reversed data it’s as slow as selection sort.", "**Insertion sort is very quick on data that is already (nearly) sorted**: one comparison per item. Real sorting code uses this."]},
          "Both are fine for a few hundred items and far too slow for millions. Python’s built-in sort uses a cleverer algorithm called **Timsort**, which, as Python’s documentation says, takes advantage of any order already present in the data. Lesson 4 times them against each other.",
          {tip:"**Bubble sort**, the third classic, walks along the list swapping each neighboring pair that’s in the wrong order, and repeats until a whole pass makes no swaps. Big items “bubble” to the end. It’s easy to draw, which is why many school courses use it, but it does about as much work as selection sort."}
        ]},
      {h:"Sorting in Python: sorted() and .sort()", body:[
          "In real programs, use Python’s own sorting. A quick recap from {{py-lists|Unit 8}}:",
          {table:[
              ["You write", "What happens", "Gives back"],
              ["`sorted(scores)`", "Makes a **new** sorted list; `scores` is unchanged", "The new list"],
              ["`scores.sort()`", "Sorts `scores` **in place**", "`None`"],
              ["`sorted(scores, reverse=True)`", "Largest first (also works with `.sort()`)", "The new list"]
            ]},
          "The classic slip is `scores = scores.sort()`: `.sort()` returns `None`, so the list is thrown away.",
          "Text is sorted character by character, by each character’s code number. That gives two surprises:",
          {list:["**Capitals come first.** Every capital letter A to Z comes before every lowercase letter, so `\"Banana\"` comes before `\"apple\"`.", "**Numbers stored as text sort as text.** `sorted([\"10\", \"9\", \"100\"])` gives `['10', '100', '9']`, because the character “1” comes before “9”, just as “ant” comes before “bee”. Data read from files often arrives as text, so this catches people out (Unit 10’s CSV lesson converts values for exactly this reason)."]}
        ]},
      {h:"Sorting by what you choose: key functions", body:[
          "To sort by something other than the plain value, give `sorted()` a [[alg-key-function|key function]]: a function that takes one item and returns the value to sort it by. Python calls it once for each item and sorts by the results. You pass the function’s **name**, without brackets. `len` is the function you know; `str.lower` is the `.lower()` method from Unit 8, written with `str.` in front so it can be passed by name:",
          {code:"fruit = [\"pear\", \"apple\", \"Banana\"]\nprint(sorted(fruit))\nprint(sorted(fruit, key=str.lower))\nprint(sorted(fruit, key=len))", lang:"py", label:"Three keys", cap:"Output: `['Banana', 'apple', 'pear']`, then `['apple', 'Banana', 'pear']` (ignoring capitals), then `['pear', 'apple', 'Banana']` (shortest first: 4, 5 and 6 letters)."},
          "`key=int` fixes the text-numbers problem: `sorted([\"10\", \"9\", \"100\"], key=int)` gives `['9', '10', '100']`. You can also write your own key function. Here a list of {{py-dicts|dictionaries}} is sorted by page count:",
          {code:"books = [\n    {\"title\": \"Maps of Home\", \"pages\": 320},\n    {\"title\": \"Quick Soups\", \"pages\": 96},\n    {\"title\": \"Night Garden\", \"pages\": 210},\n]\n\ndef by_pages(book):\n    return book[\"pages\"]\n\nfor book in sorted(books, key=by_pages):\n    print(book[\"pages\"], book[\"title\"])", lang:"py", label:"Sorting records", pylab:"pl-function", cap:"Output: `96 Quick Soups`, `210 Night Garden`, `320 Maps of Home`."},
          "To sort a dictionary’s keys by their values, use the dictionary’s own `.get` as the key: it takes a key and returns its value.",
          {code:"counts = {\"tea\": 4, \"cake\": 9, \"jam\": 2}\nprint(sorted(counts, key=counts.get, reverse=True))", lang:"py", label:"Most popular first", cap:"Output: `['cake', 'tea', 'jam']`."},
          {h:"Stable sorting"},
          "Python’s sorting is [[alg-stable-sort|stable]]: items with equal keys keep the order they had before. Watch Tomás and Mei, who both ran 28 minutes:",
          {code:"runners = [(\"Hana\", 31), (\"Tomás\", 28),\n           (\"Sione\", 31), (\"Mei\", 28)]\n\ndef by_time(runner):\n    return runner[1]\n\nprint(sorted(runners, key=by_time))", lang:"py", label:"Ties keep their order", cap:"Output: `[('Tomás', 28), ('Mei', 28), ('Hana', 31), ('Sione', 31)]`. Tomás was before Mei in the original list, so he stays before her."},
          {tip:"You may see `key=lambda runner: runner[1]`. A `lambda` is a tiny function written in one line, with no name. It does exactly what `by_time` does; a named function is often easier to read."},
          {lab:"pl-sortkey", t:"Practice: sort records with a key function, keeping ties in order"}
        ]},
      {h:"Common misconceptions", body:[
          {list:["**“`sorted()` and `.sort()` are the same.”** `sorted()` returns a new list and leaves the old one alone; `.sort()` changes the list and returns `None`.", "**“Sorting text is alphabetical.”** It’s by character codes: capitals first, and digits compared one character at a time. Use `key=str.lower` or `key=int` to get the order people expect.", "**“`key=len()` with brackets.”** Pass the function itself, `key=len`. With brackets, Python tries to call `len` straight away, with nothing to measure, and stops with a TypeError.", "**“All sorting algorithms take the same time.”** Selection sort does the same work on any data; insertion sort is quick on nearly sorted data; Python’s built-in sort is much faster than both on big lists.", "**“I need to write my own sort.”** In real programs, use `sorted()` or `.sort()`. Writing your own is for learning how sorting works."]}
        ]}
    ],
   try:[
      {id:"t2u11-l3-x1", type:"order", q:"Selection sort runs on `[6, 9, 3, 8, 1]`. Put the list’s states in the order they appear (only passes that change the list are shown).", items:[
          {t:"[6, 9, 3, 8, 1]", why:"The starting list."},
          {t:"[1, 9, 3, 8, 6]", why:"Pass 1: the smallest item, 1, swaps with the item in position 0, which is 6."},
          {t:"[1, 3, 9, 8, 6]", why:"Pass 2: the smallest of the rest, 3, swaps with 9 in position 1."},
          {t:"[1, 3, 6, 8, 9]", why:"Pass 3: the smallest of the rest, 6, swaps with 9 in position 2. Pass 4 finds 8 already in place, so nothing changes."}
        ]},
      {id:"t2u11-l3-x2", type:"mcq", q:"Insertion sort runs on `[8, 5, 7, 1, 9]`. What does the list look like after the **first two** insertions (5, then 7)?", options:[
          {t:"[1, 5, 7, 8, 9]", why:"That’s the finished list. After two insertions, only the first three items are sorted among themselves; 1 and 9 haven’t been touched."},
          {t:"[5, 7, 8, 1, 9]", ok:true, why:"Right. 5 slides left of 8: [5, 8, 7, 1, 9]. Then 7 slides left of 8 but stops at 5: [5, 7, 8, 1, 9]."},
          {t:"[1, 5, 8, 7, 9]", why:"That looks like selection sort, which picks the smallest (1) first. Insertion sort takes items in order from the left."},
          {t:"[5, 8, 7, 1, 9]", why:"That’s after only one insertion. The second insertion moves 7 in front of 8."}
        ]},
      {id:"t2u11-l3-x3", type:"number", q:"How many comparisons does selection sort make on a list of **6** items, whatever order they start in?", answer:15, tol:0, unit:"comparisons", why:"Pass 1 compares the first item’s spot against the other 5, pass 2 against 4, then 3, 2 and 1: 5 + 4 + 3 + 2 + 1 = **15**. That’s n × (n − 1) ÷ 2 = 6 × 5 ÷ 2.", wrongs:[
          {v:36, tol:0, why:"That’s 6 × 6. Each pass compares only against the items not yet sorted, and that number shrinks by one each pass."},
          {v:30, tol:0, why:"That’s 6 × 5, which counts every pair twice. Each pair is compared at most once: divide by 2."},
          {v:6, tol:0, why:"That’s one comparison per item. Finding the smallest of the rest needs a comparison with each of the remaining items."},
          {v:21, tol:0, why:"That’s 6 + 5 + 4 + 3 + 2 + 1. The first pass compares against the other 5 items, not 6."}
        ]},
      {id:"t2u11-l3-x4", type:"match", q:"Match each call with the order it produces for `words`, a list of words with mixed capitals.", pairs:[
          ["`sorted(words, key=len)`", "Shortest word first", "`len` returns each word’s length, so lengths are compared."],
          ["`sorted(words, key=str.lower)`", "A to Z, ignoring capitals", "Each word is compared in lowercase; the words themselves keep their capitals."],
          ["`sorted(words)`", "Capitalized words first, then lowercase ones", "Plain sorting uses character codes, where A to Z come before a to z."],
          ["`sorted(words, reverse=True)`", "Plain order, backwards", "`reverse=True` flips the result: lowercase words from z down, then capitalized ones."]
        ]},
      {id:"t2u11-l3-x5", type:"mcq", q:"Lucía reads ticket numbers from a file as text: `nums = [\"12\", \"7\", \"110\"]`. What does `print(sorted(nums))` show?", options:[
          {t:"['7', '12', '110']", why:"That’s numeric order. These are strings, so they’re compared character by character. `key=int` would give this."},
          {t:"['110', '12', '7']", ok:true, why:"Right. As text, “1” comes before “7”; then “110” and “12” are compared by their second character, “1” before “2”."},
          {t:"['12', '110', '7']", why:"Both start with “1”, so the second characters decide: “1” (from 110) comes before “2” (from 12)."},
          {t:"An error, because you can’t sort numbers stored as text", why:"Strings sort without any error, just as text, which is why this bug is easy to miss."}
        ]},
      {id:"t2u11-l3-x6", type:"spot", q:"Sione’s selection sort scrambles some lists. Tap every line with a bug.", ask:"a bug", mono:true, parts:[
          {t:"for i in range(len(items) - 1):", flag:false, why:"Fine: one pass for each place except the last."},
          "\n    ",
          {t:"smallest = 0", flag:true, why:"It must start at `i`, the first unsorted position. Starting at 0 lets an already-sorted item win again."},
          "\n    ",
          {t:"for j in range(i + 1, len(items)):", flag:false, why:"Fine: look through the rest of the list."},
          "\n        ",
          {t:"if items[j] < items[smallest]:", flag:false, why:"Fine: is this one smaller than the smallest so far?"},
          "\n            ",
          {t:"smallest = j", flag:false, why:"Fine: remember its position."},
          "\n    ",
          {t:"items[i] = items[smallest]", flag:true, why:"This copies instead of swapping, so the item that was at `i` is lost and another appears twice. Swap: `items[i], items[smallest] = items[smallest], items[i]`."}
        ]},
      {id:"t2u11-l3-x7", type:"mcq", q:"`results = [(\"Ana\", 9.2), (\"Dmitri\", 8.7), (\"Priya\", 9.2)]` holds names and times in seconds. `by_time` is a key function that returns the time from each pair. What does `sorted(results, key=by_time)` give?", options:[
          {t:"[('Dmitri', 8.7), ('Priya', 9.2), ('Ana', 9.2)]", why:"Ana and Priya tie on 9.2. Python’s sort is stable, so they keep their original order: Ana first."},
          {t:"[('Ana', 9.2), ('Priya', 9.2), ('Dmitri', 8.7)]", why:"That’s slowest first. Without `reverse=True`, the smallest key (8.7) comes first."},
          {t:"[('Dmitri', 8.7), ('Ana', 9.2), ('Priya', 9.2)]", ok:true, why:"Right. Smallest time first. Ana and Priya tie, and a stable sort keeps them in their original order: Ana, then Priya."},
          {t:"It varies from run to run when times tie", why:"Python’s sort is guaranteed stable, so ties always come out in the same, original order."}
        ]},
      {id:"t2u11-l3-x8", type:"explain", q:"Explain why `sorted([\"10\", \"9\", \"100\"])` gives `['10', '100', '9']`, and how a key function fixes it.", size:"2–3 sentences", hint:"Are these numbers or text? How is text compared?", model:"The items are strings, and text is sorted character by character, by each character’s code. The first characters are 1, 9 and 1, and “1” comes before “9”. “10” comes before “100” because it is shorter. So the result is in text order, not number order. Passing `key=int` tells `sorted()` to call `int()` on each item and sort by those numbers. It keeps the original strings, giving `['9', '10', '100']`.", points:["Says the items are strings, so they sort as text", "Explains character-by-character comparison (“1” before “9”)", "Says `key=int` sorts by the numeric value", "Notes the original strings are kept in the result"]}
    ],
   apply:{intro:"Sort by hand, then by code, then the Python way. Works in the Python Lab or on a computer.", tasks:[
        {t:"Sort cards by hand", how:["Take 6 playing cards (or write 6 numbers on scraps of paper) and shuffle them.", "Sort them with **selection sort**: write down the row after each pass.", "Shuffle again and sort with **insertion sort**, writing the row after each step.", "Count how many times you compared two cards each time."], write:"Paste both sequences of rows and your two comparison counts."},
        {t:"Count comparisons in code", how:["Copy `selection_sort` and `insertion_sort` and add a `comparisons` counter to each; return it at the end.", "Run both on `list(range(20))` (already sorted), on `list(range(20, 0, -1))` (reversed), and on a shuffled copy (`import random`, then `random.shuffle(nums)`).", "Compare your counts with the table in the lesson."], write:"Paste a table of your six counts. Which algorithm likes sorted data?"},
        {t:"Sort real data the Python way", how:["Make a list of at least five dictionaries about something you know (books, recipes, plants, songs), each with a name and a number.", "Print them sorted by the number, smallest first, using a key function you write.", "Print them sorted by name ignoring capitals, then by the number with the largest first.", "Add two items with the same number and check that a stable sort keeps their order."], write:"Paste your code and the three outputs."}
      ], proof:"Hand-sorted cards with every pass written down. Comparison counts for both algorithms on sorted, reversed and shuffled lists. Your own records sorted three ways with key functions."},
   read:[
      {book:"thinkpy", where:"Chapter 9, “Lists”, and Chapter 11, “Tuples”", note:"Sorting lists, and the tuple assignment behind the one-line swap."},
      {book:"ics", where:"Chapter 3, Section 3.5 “Sample Algorithms by Problem”: “Sorting”", note:"Goes on to merge sort, quicksort and heapsort, the faster algorithms this lesson doesn’t cover."}
    ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u11-l4",
   title:"How fast is it? Counting steps and Big-O",
   minutes:55,
   hook:{q:"Ade’s selection sort takes about 1 second to sort 10,000 numbers. Roughly how long will it take for 20,000?", options:["About 1 second", "About 2 seconds", "About 4 seconds", "About 20 seconds"], answer:2, reveal:"About 4 seconds. Selection sort compares every item with every other item, roughly. So twice the items means about twice as many items, each doing twice as many comparisons: 2 × 2 = 4 times the work. That’s quadratic growth. This lesson shows how to measure speed by counting steps and with a stopwatch in code. It also shows how to predict speed from the code itself, using a shorthand called Big-O."},
   goals:["Measure how long code takes with `time.perf_counter()`, and explain why timings vary between runs and computers", "Count the steps an algorithm takes and see how the count grows when the input doubles", "Describe growth as constant, logarithmic, linear, n log n or quadratic, and write it in Big-O notation", "Spot the Big-O of simple code, including a hidden nested loop such as `in` on a list inside a loop. Fix it with a set or a dictionary"],
   learn:[
      {h:"Two ways to measure speed", body:[
          {lead:"There are two honest ways to ask “how fast is this?”: count the steps, or time it with a clock."},
          "**Counting steps** is what you did in Lessons 2 and 3: count the checks a search makes or the comparisons a sort makes. The count is the same on every computer, so it’s good for comparing algorithms and predicting what happens with more data.",
          "**Timing** means running the code and measuring how long it takes. That’s the real experience of the person waiting, but it depends on the computer, on whatever else is running, and even on the version of Python. Run the same code twice and you’ll get slightly different times.",
          "Professionals use both. Counting tells you how the work **grows**; timing tells you whether it’s fast **enough** on real data. Neither replaces the other."
        ]},
      {h:"Timing code with time.perf_counter()", body:[
          "The standard library’s `time` module has a stopwatch for exactly this: `time.perf_counter()`. It returns a number of seconds counted from some starting point. That starting point isn’t defined, so a single value means nothing: only the **difference** between two readings is useful.",
          {code:"import time\n\nnumbers = list(range(1_000_000))\n\nstart = time.perf_counter()\nfound = 999_999 in numbers\nelapsed = time.perf_counter() - start\nprint(found, f\"{elapsed:.5f} seconds\")", lang:"py", label:"How long does in take on a big list?", cap:"On one laptop, two runs printed `True 0.00799 seconds` and `True 0.00587 seconds`. Your numbers will differ."},
          {list:["`1_000_000` is just a million. Python lets you put underscores in long numbers to make them readable; they don’t change the value.", "Take a reading, run the code you’re interested in, take another reading, and subtract.", "Time **only** the part you care about. Here the list is built before the first reading, so building it isn’t counted."]},
          "Because timings wobble, run the code several times and compare the typical values, not one lucky or unlucky run. Python also has a `timeit` module that repeats a piece of code many times for you. The Python Lab runs Python inside your browser, which is usually slower than Python installed on a computer: compare timings from the same place.",
          {tip:"999,999 is the last item in that list, so `in` has to check all million items: linear search’s worst case. Try `0 in numbers` instead, and it finishes almost instantly."}
        ]},
      {h:"Watching growth: double the input", body:[
          "The best test of an algorithm’s speed is to **double** the input and see what happens to the time. Here is selection sort from Lesson 3 against Python’s `sorted()` on shuffled lists of numbers:",
          {code:"import random\nimport time\n\n# selection_sort from Lesson 3 goes here\n\nfor n in [1_000, 2_000, 4_000]:\n    data = list(range(n))\n    random.shuffle(data)\n    start = time.perf_counter()\n    selection_sort(data[:])\n    mine = time.perf_counter() - start\n    start = time.perf_counter()\n    sorted(data)\n    builtin = time.perf_counter() - start\n    print(f\"{n}: {mine:.3f} s and {builtin:.5f} s\")", lang:"py", label:"Doubling test", cap:"Paste the `selection_sort` function from Lesson 3 above the loop first. `random.shuffle(data)` mixes the list into a random order. `data[:]` is a slice of the whole list, which makes a copy, so both sorts start from the same unsorted data. Each line shows the time for selection sort, then for `sorted()`."},
          "One run on a laptop printed the times below. Yours will be different. Timings vary from run to run and computer to computer, and they are usually slower in the Python Lab. But the pattern should be the same:",
          {table:[["Items", "Selection sort", "`sorted()`"], ["1,000", "0.014 s", "0.00011 s"], ["2,000", "0.052 s", "0.00020 s"], ["4,000", "0.230 s", "0.00045 s"]]},
          "Each time the list doubles, selection sort takes about **four** times as long (about 0.014, then 0.052, then 0.230 seconds), just as its comparison count predicts. `sorted()` takes only about **twice** as long. At 4,000 items Python’s sort is already hundreds of times faster, and the gap keeps widening as the data grows.",
          {key:"Don’t ask only “how fast is it?” Ask “what happens when the data doubles?”"}
        ]},
      {h:"Big-O: naming the growth", body:[
          "Computer scientists describe how work grows with a shorthand called [[alg-big-o|Big-O notation]]. You write O(…) with a formula in n, the size of the input. It describes the **shape** of the growth, usually for the worst case. It ignores details that matter less and less as n gets big. O(n) means “grows in step with n”, whether each step takes 1 operation or 3.",
          {fig:"<svg viewBox=\"0 0 340 412\"><text x=\"10\" y=\"18\">Steps needed as the input grows</text><path class=\"d-ink\" d=\"M44,50 L44,296 L324,296\" stroke-width=\"1.5\"/><text class=\"s\" x=\"38\" y=\"300\" text-anchor=\"end\">0</text><text class=\"s\" x=\"38\" y=\"218\" text-anchor=\"end\">16</text><path class=\"d-soft\" d=\"M44,214 L324,214\" stroke-width=\"0.5\" stroke-dasharray=\"3 4\"/><text class=\"s\" x=\"38\" y=\"136\" text-anchor=\"end\">32</text><path class=\"d-soft\" d=\"M44,132 L324,132\" stroke-width=\"0.5\" stroke-dasharray=\"3 4\"/><text class=\"s\" x=\"38\" y=\"54\" text-anchor=\"end\">48</text><path class=\"d-soft\" d=\"M44,50 L324,50\" stroke-width=\"0.5\" stroke-dasharray=\"3 4\"/><text class=\"s\" x=\"44\" y=\"312\" text-anchor=\"middle\">0</text><text class=\"s\" x=\"114\" y=\"312\" text-anchor=\"middle\">4</text><text class=\"s\" x=\"184\" y=\"312\" text-anchor=\"middle\">8</text><text class=\"s\" x=\"254\" y=\"312\" text-anchor=\"middle\">12</text><text class=\"s\" x=\"324\" y=\"312\" text-anchor=\"middle\">16</text><text class=\"s\" x=\"184\" y=\"330\" text-anchor=\"middle\">n = number of items</text><text class=\"s\" x=\"50\" y=\"54\">steps</text><path class=\"d-rose\" d=\"M61.5,290.9 L65.9,288.0 L70.2,284.5 L74.6,280.3 L79.0,275.5 L83.4,270.1 L87.8,264.0 L92.1,257.2 L96.5,249.9 L100.9,241.9 L105.2,233.2 L109.6,223.9 L114.0,214.0 L118.4,203.4 L122.8,192.2 L127.1,180.4 L131.5,167.9 L135.9,154.7 L140.2,141.0 L144.6,126.6 L149.0,111.5 L153.4,95.8 L157.8,79.5 L162.1,62.5 L165.2,50.0\" stroke-width=\"2.5\" fill-opacity=\"0\"/><path class=\"d-gold\" d=\"M61.5,296.0 L65.9,293.9 L70.2,291.5 L74.6,288.8 L79.0,285.8 L83.4,282.5 L87.8,279.1 L92.1,275.4 L96.5,271.6 L100.9,267.7 L105.2,263.6 L109.6,259.4 L114.0,255.0 L118.4,250.5 L122.8,246.0 L127.1,241.3 L131.5,236.5 L135.9,231.6 L140.2,226.7 L144.6,221.6 L149.0,216.5 L153.4,211.3 L157.8,206.0 L162.1,200.7 L166.5,195.3 L170.9,189.8 L175.2,184.3 L179.6,178.7 L184.0,173.0 L188.4,167.3 L192.8,161.5 L197.1,155.7 L201.5,149.8 L205.9,143.9 L210.2,137.9 L214.6,131.8 L219.0,125.8 L223.4,119.6 L227.8,113.5 L232.1,107.2 L236.5,101.0 L240.9,94.7 L245.2,88.3 L249.6,81.9 L254.0,75.5 L258.4,69.1 L262.8,62.6 L267.1,56.0 L271.1,50.0\" stroke-width=\"2.5\" fill-opacity=\"0\" stroke-dasharray=\"7 4\"/><path class=\"d-lup\" d=\"M61.5,290.9 L65.9,289.6 L70.2,288.3 L74.6,287.0 L79.0,285.8 L83.4,284.5 L87.8,283.2 L92.1,281.9 L96.5,280.6 L100.9,279.3 L105.2,278.1 L109.6,276.8 L114.0,275.5 L118.4,274.2 L122.8,272.9 L127.1,271.7 L131.5,270.4 L135.9,269.1 L140.2,267.8 L144.6,266.5 L149.0,265.2 L153.4,264.0 L157.8,262.7 L162.1,261.4 L166.5,260.1 L170.9,258.8 L175.2,257.6 L179.6,256.3 L184.0,255.0 L188.4,253.7 L192.8,252.4 L197.1,251.2 L201.5,249.9 L205.9,248.6 L210.2,247.3 L214.6,246.0 L219.0,244.8 L223.4,243.5 L227.8,242.2 L232.1,240.9 L236.5,239.6 L240.9,238.3 L245.2,237.1 L249.6,235.8 L254.0,234.5 L258.4,233.2 L262.8,231.9 L267.1,230.7 L271.5,229.4 L275.9,228.1 L280.2,226.8 L284.6,225.5 L289.0,224.2 L293.4,223.0 L297.8,221.7 L302.1,220.4 L306.5,219.1 L310.9,217.8 L315.2,216.6 L319.6,215.3 L324.0,214.0\" stroke-width=\"2.5\" fill-opacity=\"0\"/><path class=\"d-sage\" d=\"M61.5,296.0 L65.9,294.4 L70.2,293.0 L74.6,291.9 L79.0,290.9 L83.4,290.0 L87.8,289.2 L92.1,288.5 L96.5,287.9 L100.9,287.3 L105.2,286.7 L109.6,286.2 L114.0,285.8 L118.4,285.3 L122.8,284.9 L127.1,284.5 L131.5,284.1 L135.9,283.7 L140.2,283.4 L144.6,283.1 L149.0,282.8 L153.4,282.5 L157.8,282.2 L162.1,281.9 L166.5,281.6 L170.9,281.4 L175.2,281.1 L179.6,280.9 L184.0,280.6 L188.4,280.4 L192.8,280.2 L197.1,280.0 L201.5,279.8 L205.9,279.6 L210.2,279.4 L214.6,279.2 L219.0,279.0 L223.4,278.8 L227.8,278.6 L232.1,278.4 L236.5,278.3 L240.9,278.1 L245.2,277.9 L249.6,277.8 L254.0,277.6 L258.4,277.5 L262.8,277.3 L267.1,277.2 L271.5,277.0 L275.9,276.9 L280.2,276.8 L284.6,276.6 L289.0,276.5 L293.4,276.4 L297.8,276.2 L302.1,276.1 L306.5,276.0 L310.9,275.9 L315.2,275.7 L319.6,275.6 L324.0,275.5\" stroke-width=\"2.5\" fill-opacity=\"0\" stroke-dasharray=\"2 3\"/><path class=\"d-ink\" d=\"M61.5,290.9 L65.9,290.9 L70.2,290.9 L74.6,290.9 L79.0,290.9 L83.4,290.9 L87.8,290.9 L92.1,290.9 L96.5,290.9 L100.9,290.9 L105.2,290.9 L109.6,290.9 L114.0,290.9 L118.4,290.9 L122.8,290.9 L127.1,290.9 L131.5,290.9 L135.9,290.9 L140.2,290.9 L144.6,290.9 L149.0,290.9 L153.4,290.9 L157.8,290.9 L162.1,290.9 L166.5,290.9 L170.9,290.9 L175.2,290.9 L179.6,290.9 L184.0,290.9 L188.4,290.9 L192.8,290.9 L197.1,290.9 L201.5,290.9 L205.9,290.9 L210.2,290.9 L214.6,290.9 L219.0,290.9 L223.4,290.9 L227.8,290.9 L232.1,290.9 L236.5,290.9 L240.9,290.9 L245.2,290.9 L249.6,290.9 L254.0,290.9 L258.4,290.9 L262.8,290.9 L267.1,290.9 L271.5,290.9 L275.9,290.9 L280.2,290.9 L284.6,290.9 L289.0,290.9 L293.4,290.9 L297.8,290.9 L302.1,290.9 L306.5,290.9 L310.9,290.9 L315.2,290.9 L319.6,290.9 L324.0,290.9\" stroke-width=\"2.5\" fill-opacity=\"0\"/><path class=\"d-rose\" d=\"M14,348 L44,348\" stroke-width=\"2.5\" fill-opacity=\"0\"/><text x=\"52\" y=\"352\">n² quadratic</text><path class=\"d-gold\" d=\"M180,348 L210,348\" stroke-width=\"2.5\" fill-opacity=\"0\" stroke-dasharray=\"7 4\"/><text x=\"218\" y=\"352\">n log n</text><path class=\"d-lup\" d=\"M14,370 L44,370\" stroke-width=\"2.5\" fill-opacity=\"0\"/><text x=\"52\" y=\"374\">n linear</text><path class=\"d-sage\" d=\"M180,370 L210,370\" stroke-width=\"2.5\" fill-opacity=\"0\" stroke-dasharray=\"2 3\"/><text x=\"218\" y=\"374\">log n</text><path class=\"d-ink\" d=\"M14,392 L44,392\" stroke-width=\"2.5\" fill-opacity=\"0\"/><text x=\"52\" y=\"396\">1 constant</text></svg>", alt:"A line chart of steps against n, the number of items, from 0 to 16. A flat line at 1 is constant. A dotted line, log n, rises very slowly to 4. A straight line, n, rises to 16. A dashed curve, n log n, rises faster and leaves the top of the chart (48) at about n = 13. The n² curve rises steepest and leaves the chart at about n = 7.", cap:"The common growth rates. The steeper the curve, the sooner more data hurts."},
          {table:[
              ["Big-O", "Name", "Doubling n…", "Examples"],
              ["O(1)", "Constant", "Same work", "`items[5]`, `len(items)`, a dictionary lookup"],
              ["O(log n)", "Logarithmic", "One more step", "Binary search"],
              ["O(n)", "Linear", "Twice the work", "Linear search, `sum()`, `max()`, one loop over the data"],
              ["O(n log n)", "n log n", "A bit over twice", "`sorted()` and `.sort()`"],
              ["O(n²)", "Quadratic", "Four times the work", "Selection and insertion sort; comparing every pair"]
            ]},
          "The differences explode as n grows. For a million items, O(log n) is about 20 steps, O(n) a million, O(n log n) about 20 million, and O(n²) a million million (10¹²). Even at a billion simple steps per second, 10¹² steps would take over 16 minutes, while 20 million takes a fraction of a second.",
          "Some problems are even worse. Trying every possible combination, for example every subset of n items, takes O(2ⁿ) steps. Each extra item **doubles** the work. AP Computer Science Principles is a course many schools use. It says that algorithms whose work grows like a power of n (n, n², n³ and so on) run in a **reasonable** amount of time. Ones that grow like 2ⁿ run in an **unreasonable** amount of time. Even for quite small n, they would take far too long. For such problems people often settle for a good-enough answer found by a rule of thumb (a **heuristic**)."
        ]},
      {h:"Reading Big-O from code", body:[
          "You can often see the growth just by looking at the loops:",
          {list:["**No loop over the data**, just a few operations: O(1).", "**One loop** over n items: O(n).", "**A loop inside a loop**, both over the same data: O(n²).", "**Halving** what’s left each time round: O(log n)."]},
          "The trap is that a single line can hide a loop. `x in some_list` is a linear search. Put it inside a `for` loop over another list of similar size and you have a nested loop in disguise: O(n²). Here are two ways to check a list for duplicates:",
          {code:"def has_duplicate_slow(items):\n    for i in range(len(items)):\n        for j in range(i + 1, len(items)):\n            if items[i] == items[j]:\n                return True\n    return False\n\ndef has_duplicate_fast(items):\n    seen = set()\n    for item in items:\n        if item in seen:\n            return True\n        seen.add(item)\n    return False", lang:"py", label:"Two duplicate checkers", cap:"Both give the same answers. The first compares every pair; the second remembers what it has seen in a set."},
          "A [[alg-set|set]] is a collection with no duplicates and no order, written `set()` when empty or `{\"tea\", \"jam\"}` with items. You add to it with `.add()`. Like a dictionary’s keys, Python finds an item in a set directly instead of checking one by one, so `item in seen` is O(1) on average. One run on a laptop, with lists that had no duplicates (the worst case), gave these times (yours will differ):",
          {table:[["Items", "Slow (nested loops)", "Fast (set)"], ["1,000", "0.013 s", "0.0001 s"], ["2,000", "0.049 s", "0.0002 s"], ["4,000", "0.212 s", "0.0002 s"]]},
          "The slow one quadruples each time; the fast one barely moves. Same answers, very different futures.",
          {tip:"When you see `if x in big_list:` inside a loop, ask: could `big_list` be a set or a dictionary instead? It’s one of the most common speed fixes in real Python code."},
          {lab:"pl-duplicates", t:"Practice: replace a nested loop with a set"}
        ]},
      {h:"When speed matters, and when it doesn’t", body:["For 50 items, almost anything is fast enough. Write the clearest code first; {{readable-code|Unit 11}} explains why readable code matters more than clever code. Then, if a program is too slow on **real** data, measure before you change anything: the slow part is often not where you’d guess. Professional tools called profilers measure where a program spends its time.", "When you do need speed, a better algorithm usually beats a faster computer. A computer twice as fast lets an O(n²) program handle only about 1.4 times as much data in the same time (because 1.4² ≈ 2). Switching to an O(n log n) or O(n) method can turn hours into seconds."]},
      {h:"Common misconceptions", body:[
          {list:["**“O(1) means one step.”** It means the work doesn’t grow with n. A dictionary lookup does several operations, but the same number for 10 items or 10 million.", "**“Big-O tells you the time in seconds.”** It tells you how the work grows. Two O(n) programs can differ in speed by 10 times; Big-O says both double when n doubles.", "**“A faster computer will fix a slow algorithm.”** For quadratic or worse, more data soon outruns any hardware.", "**“One timing is enough.”** Timings vary from run to run and machine to machine. Repeat, and compare like with like.", "**“Always optimize.”** Optimize when it matters, after measuring. For small data, clear code wins."]}
        ]}
    ],
   try:[
      {id:"t2u11-l4-x1", type:"mcq", q:"Mei times her function once and gets 0.8 seconds. She runs it again, unchanged, and gets 0.5 seconds. What’s the most likely explanation?", options:[
          {t:"Normal variation: other programs and the computer’s state affect each run, so she should time it several times", ok:true, why:"Right. Timings always wobble. Repeat the measurement and look at typical values before drawing conclusions."},
          {t:"Her code got faster because Python learned it", why:"The code and its algorithm are the same. Differences come from the conditions around the run, not from the program improving itself."},
          {t:"`perf_counter()` is broken, because it should give the same number every time", why:"It measures real elapsed time, which varies. That’s why only differences, repeated, are meaningful."},
          {t:"The second run must have skipped some of the work", why:"Nothing in the code changed, so it did the same work. Timing varies even when the work doesn’t."}
        ]},
      {id:"t2u11-l4-x2", type:"sort", q:"Sort each piece of code by how its work grows with n, the length of the lists.", buckets:["O(1) constant", "O(log n) logarithmic", "O(n) linear", "O(n²) quadratic"], items:[
          {t:"`first = prices[0]`", b:0, why:"Reading one position takes the same time however long the list is."},
          {t:"`phone[\"Mei\"]` in a dictionary", b:0, why:"Python finds a dictionary key directly, without checking the others."},
          {t:"Binary search in a sorted list", b:1, why:"Each check halves what’s left: doubling n adds one check."},
          {t:"`total = sum(prices)`", b:2, why:"Every item has to be added once."},
          {t:"`max(scores)`", b:2, why:"The largest could be anywhere, so every item is looked at once."},
          {t:"`for a in names:` with `for b in names:` inside it", b:3, why:"n passes of the outer loop, each doing n steps: n × n."},
          {t:"`for x in list_a:` with `if x in list_b:` inside (both length n)", b:3, why:"`in` on a list is a hidden loop, so this is a nested loop in disguise. Make `list_b` a set to get O(n)."}
        ]},
      {id:"t2u11-l4-x3", type:"number", q:"An O(n²) report takes 3 seconds for 5,000 rows. About how many seconds will it take for 10,000 rows?", answer:12, tol:1, unit:"seconds", why:"Twice the rows means 2² = 4 times the work for quadratic growth: 3 × 4 = **12** seconds.", wrongs:[
          {v:6, tol:0.5, why:"That’s linear growth (double the data, double the time). Quadratic work grows with the square: 4 times."},
          {v:9, tol:0.5, why:"That squares the time (3²). It’s the *size* ratio, 2, that gets squared: 2² = 4, and 3 × 4 = 12."},
          {v:3, tol:0.5, why:"Only O(1) work stays the same as the data grows."}
        ]},
      {id:"t2u11-l4-x4", type:"match", q:"Match each algorithm or operation with its usual Big-O.", pairs:[
          ["Linear search in a list", "O(n)", "In the worst case it checks every item."],
          ["Binary search in a sorted list", "O(log n)", "Halving each time: a million items need about 20 checks."],
          ["Selection sort", "O(n²)", "A nested loop: about n × n ÷ 2 comparisons on any data."],
          ["Looking up a key in a dictionary", "O(1)", "Python goes straight to where the key is stored."],
          ["Python’s `sorted()`", "O(n log n)", "Much better than n², a bit more than n."]
        ]},
      {id:"t2u11-l4-x5", type:"spot", q:"Kenji’s script finds which new sign-ups were already members. With 50,000 of each it takes ages. Tap the line that makes it slow.", ask:"the slow part", mono:true, parts:[
          {t:"old = load_members()   # a list", flag:false, why:"Loading the list happens once: O(n). Not the problem on its own."},
          "\n",
          {t:"common = []", flag:false, why:"Making an empty list takes no time worth measuring."},
          "\n",
          {t:"for email in new_signups:", flag:false, why:"One loop over the new sign-ups is O(n), fine by itself."},
          "\n    ",
          {t:"if email in old:", flag:true, why:"`in` on a list is a linear search, run once per sign-up: a hidden nested loop, O(n²). Make `old` a set first (`old = set(old)`), and each check becomes O(1)."},
          "\n        ",
          {t:"common.append(email)", flag:false, why:"Adding to the end of a list is quick: O(1) each time."}
        ]},
      {id:"t2u11-l4-x6", type:"mcq", q:"Which code measures how long `clean(rows)` takes, and only that?", options:[
          {t:"`start = time.perf_counter()`, then `clean(rows)`, then `print(time.perf_counter() - start)`", ok:true, why:"Right. Two readings around exactly the code being measured, and the difference between them."},
          {t:"`clean(rows)`, then `print(time.perf_counter())`", why:"One reading on its own means nothing: the starting point of `perf_counter()` isn’t defined. You need the difference between two readings."},
          {t:"`start = time.perf_counter()`, then load the file, then `clean(rows)`, then `print(time.perf_counter() - start)`", why:"This also times loading the file, so the result isn’t the time for `clean` alone."},
          {t:"`print(len(rows))` before and after `clean(rows)`", why:"That shows how many rows there are, not how long anything took."}
        ]},
      {id:"t2u11-l4-x7", type:"mcq", q:"Ana’s O(n²) program handles 10,000 records in an hour. She buys a computer that’s twice as fast. About how many records can it handle in an hour now?", options:[
          {t:"20,000", why:"That would be true for O(n). With quadratic work, twice the records means four times the work, which a computer twice as fast can’t do in the same time."},
          {t:"About 14,000", ok:true, why:"Right. Twice the speed allows twice the work, and for O(n²) twice the work means √2 ≈ 1.4 times the records. A better algorithm would help far more."},
          {t:"40,000", why:"That gets the relationship backwards. More records cost *more* than proportionally, so the gain is less than double, not more."},
          {t:"10,000: speed doesn’t matter for Big-O", why:"A faster computer does help; it just helps less than people expect. Big-O describes growth, not the speed of a particular machine."}
        ]},
      {id:"t2u11-l4-x8", type:"explain", q:"A program loops over 10,000 orders and, for each one, checks `if order_id in paid_list:`, where `paid_list` is a list of 10,000 IDs. Explain why this gets very slow as the data grows, and how a set fixes it.", hint:"What kind of search does `in` do on a list? What happens when it is inside a loop?", model:"`in` on a list is a linear search: it may check every item. Inside a loop over the orders, that is a nested loop in disguise. So the work is roughly n × n, which is O(n²). If you double the data, the time roughly quadruples. A set, like a dictionary’s keys, doesn’t search through its items. Python works out where an item must be stored and looks there. So each `in` takes about the same time however big the set is. Turn `paid_list` into a set once, before the loop. This makes the whole job about O(n).", points:["Says `in` on a list is a linear search", "Says inside a loop it becomes a hidden nested loop, O(n²)", "Says doubling the data roughly quadruples the time", "Says a set finds items directly, so converting once makes the job about O(n)"]}
    ],
   apply:{intro:"Measure real code and watch growth happen. On a phone, use the Python Lab with smaller sizes (it stops programs after 4 seconds); on a computer you can go bigger.", tasks:[
        {t:"Your first timing", how:["Copy the `perf_counter` example and run it three times. Write down the three times.", "Change the search to `0 in numbers` and run it again. Why is it so much faster?", "Make `numbers` a set with `numbers = set(range(1_000_000))` and time `999_999 in numbers`."], write:"Paste your times for the list (last item), the list (first item) and the set."},
        {t:"The doubling test", how:["Copy the doubling test with your `selection_sort` from Lesson 3.", "Run it for 500, 1,000 and 2,000 items (in the Python Lab), or 1,000, 2,000 and 4,000 (on a computer).", "Work out the ratio between each time and the one before it."], write:"Paste your table and the ratios. Do they come out near 4 for selection sort and near 2 for `sorted()`?"},
        {t:"Fix a hidden nested loop", how:["Copy both duplicate checkers and time each on `list(range(n))` for n = 1,000, 2,000 and 4,000.", "Then write a function that returns the items two lists have in common, first with `in` on a list, then with a set.", "Time both versions with lists of 5,000 numbers each."], write:"Paste your times and say which line made the slow version slow."}
      ], proof:"Timings of your own that show four things. A worst-case linear search. A set lookup. A doubling test with ratios near 4 for selection sort. A hidden nested loop made fast with a set."},
   read:[
      {book:"ics", where:"Chapter 3, Section 3.3 “Formal Properties of Algorithms”: “Time and Space Complexity” and “Big O Notation for Orders of Growth”", note:"Its “Arranging Invisible Icons in Quadratic Time” box is a real-life example of a quadratic slowdown."},
      {book:"missing", where:"Lecture “Debugging and Profiling”: the “Profiling” part, from “Timing” to “Benchmarking”", note:"Goes further than this lesson, into professional profiling tools."}
    ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u11-l5",
   title:"Recursion and simulation",
   minutes:65,
   hook:{q:"What happens when this runs?\n\n`def countdown(n):`\n`    print(n)`\n`    countdown(n - 1)`\n\n`countdown(3)`", options:["It prints 3, 2, 1, then stops", "It prints 3, 2, 1, 0, then stops", "It prints 3, 2, 1, 0, -1, -2… until Python stops it with an error", "An error straight away: a function can’t call itself"], answer:2, reveal:"It keeps counting into negative numbers until Python gives up with a `RecursionError`, after about a thousand calls. A function **can** call itself, but nothing here tells it when to stop. Add “if n is 0, stop” and it becomes a neat countdown. This lesson covers functions that call themselves (recursion), and then a different kind of algorithm: letting the computer roll dice thousands of times to estimate an answer (simulation)."},
   goals:["Explain recursion, and write a recursive function with a base case and a recursive case that moves toward it", "Trace a recursive call on the call stack, and explain what a `RecursionError` means and how to fix it", "Choose between recursion and a loop for a task, and know that Python limits how deep recursion can go", "Write a simulation with `random`, use a seed to repeat it, and estimate a probability or π with the Monte Carlo method"],
   learn:[
      {h:"A function that calls itself", body:[
          {lead:"Recursion means solving a problem by solving a smaller version of the same problem, until the problem is so small the answer is obvious."},
          "Picture a long line. You want to know your place, but you can only see the person in front. So you ask them, “What’s your place?” They don’t know either, so they ask the person in front of them, and so on, until the question reaches the first person, who says “1”. Each answer comes back down the line, plus one each time.",
          "That’s [[alg-recursion|recursion]]: a function that calls **itself** on a smaller problem. Here is a countdown that works:",
          {code:"def countdown(n):\n    if n == 0:\n        print(\"Lift-off!\")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(3)", lang:"py", label:"countdown.py", pylab:"pl-function", cap:"Output: `3`, `2`, `1`, `Lift-off!`"},
          "`countdown(3)` prints 3 and calls `countdown(2)`, which prints 2 and calls `countdown(1)`, and so on. When `n` reaches 0, the function prints “Lift-off!” and makes **no** further call. That’s what was missing from the version in the warm-up."
        ]},
      {h:"Base case and recursive case", body:[
          "Every working recursive function has two parts:",
          {table:[
              ["Part", "What it does", "In countdown"],
              ["[[alg-base-case|Base case]]", "Answers directly, with no further call: this is where it stops", "`if n == 0:` print “Lift-off!”"],
              ["Recursive case", "Calls the function again on a **smaller** problem, one step nearer the base case", "`countdown(n - 1)`"]
            ]},
          "A classic example is the **factorial**: 5! (“five factorial”) means 5 × 4 × 3 × 2 × 1 = 120. Notice that 5! = 5 × 4!, and 4! = 4 × 3!, and so on down to 1! = 1. That’s already a recursive definition:",
          {code:"def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))", lang:"py", label:"factorial.py", pylab:"pl-function", cap:"Output: `120`."},
          "Trace `factorial(3)`: it can’t answer yet, so it works out `3 * factorial(2)`. That needs `factorial(2)`, which needs `2 * factorial(1)`. `factorial(1)` is the base case and returns 1. Now the waiting calls can finish: `factorial(2)` returns 2 × 1 = 2, and `factorial(3)` returns 3 × 2 = 6.",
          {key:"Two questions for any recursive function: where does it stop (base case)? And does every call get closer to stopping?"}
        ]},
      {h:"The call stack", body:[
          "How does Python keep track of all those half-finished calls? With the [[alg-call-stack|call stack]]. Every time a function is called, Python puts a new “frame” on top of a stack, like a plate on a pile. The frame holds that call’s own variables: each call to `factorial` has its own `n`. When a call returns, its frame comes off the top and the call underneath carries on.",
          {fig:"<svg viewBox=\"0 0 340 370\"><defs><marker id=\"t2u11-l5-a\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0,0 L10,5 L0,10 z\"/></marker></defs><text x=\"10\" y=\"18\">factorial(3): calls wait on a stack</text><text class=\"s\" x=\"10\" y=\"40\">Calls go down</text><text class=\"s\" x=\"282\" y=\"40\" text-anchor=\"middle\">Answers go up</text><rect class=\"d-panel\" x=\"10\" y=\"50\" width=\"170\" height=\"64\" rx=\"7\" stroke-width=\"1.5\"/><text class=\"mono\" x=\"20\" y=\"70\">factorial(3)</text><text class=\"s\" x=\"20\" y=\"88\">3 * factorial(2)</text><text class=\"s\" x=\"20\" y=\"104\">waits…</text><rect class=\"d-gold\" x=\"234\" y=\"65\" width=\"96\" height=\"34\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"282\" y=\"87\" text-anchor=\"middle\">3 × 2 = 6</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l5-a)\" d=\"M50,114 L50,140\"/><text class=\"s\" x=\"58\" y=\"134\">calls</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l5-a)\" d=\"M282,161 L282,103\"/><rect class=\"d-panel\" x=\"30\" y=\"146\" width=\"170\" height=\"64\" rx=\"7\" stroke-width=\"1.5\"/><text class=\"mono\" x=\"40\" y=\"166\">factorial(2)</text><text class=\"s\" x=\"40\" y=\"184\">2 * factorial(1)</text><text class=\"s\" x=\"40\" y=\"200\">waits…</text><rect class=\"d-lup\" x=\"234\" y=\"161\" width=\"96\" height=\"34\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"282\" y=\"183\" text-anchor=\"middle\">2 × 1 = 2</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l5-a)\" d=\"M70,210 L70,236\"/><text class=\"s\" x=\"78\" y=\"230\">calls</text><path class=\"d-ink\" stroke-width=\"2\" marker-end=\"url(#t2u11-l5-a)\" d=\"M282,257 L282,199\"/><rect class=\"d-sage\" x=\"50\" y=\"242\" width=\"170\" height=\"64\" rx=\"7\" stroke-width=\"1.5\"/><text class=\"mono\" x=\"60\" y=\"262\">factorial(1)</text><text class=\"s\" x=\"60\" y=\"280\">base case:</text><text class=\"s\" x=\"60\" y=\"296\">no more calls</text><rect class=\"d-lup\" x=\"234\" y=\"257\" width=\"96\" height=\"34\" rx=\"7\" stroke-width=\"1.5\"/><text x=\"282\" y=\"279\" text-anchor=\"middle\">returns 1</text><text class=\"s\" x=\"10\" y=\"326\">Each call waits for the one below it.</text><text class=\"s\" x=\"10\" y=\"342\">The newest call finishes first, then</text><text class=\"s\" x=\"10\" y=\"358\">each answer is handed back up.</text></svg>", alt:"Three frames stacked going down, each slightly indented. factorial(3) works out 3 * factorial(2) and waits. factorial(2) works out 2 * factorial(1) and waits. factorial(1) is the base case and makes no more calls. On the right, answers go up. factorial(1) returns 1. factorial(2) returns 2 × 1 = 2. factorial(3) returns 3 × 2 = 6.", cap:"Calls pile up until the base case; then the answers are handed back, newest call first. The newest call is drawn lowest here, the way a traceback lists the most recent call last."},
          "You’ve already seen the stack: a {{py-errors-tracebacks|traceback}} (Unit 8) lists the calls that were on the stack when the error happened.",
          "The stack can’t grow for ever. Python stops runaway recursion with a `RecursionError` before it can crash. The warm-up’s countdown with no base case ends like this:",
          {ex:"  File \"countdown.py\", line 3, in countdown\n    countdown(n - 1)\n  [Previous line repeated 996 more times]\nRecursionError: maximum recursion depth exceeded", label:"The end of the traceback (the count and other details vary between Python versions)", mono:true},
          "Standard Python allows about 1,000 calls deep; after `import sys`, `print(sys.getrecursionlimit())` shows the limit on your system. A `RecursionError` almost always means a missing base case, or a recursive case that doesn’t get smaller. Fix the function. Raising the limit hides the bug, and Python’s documentation warns that a limit set too high can crash Python itself."
        ]},
      {h:"When recursion fits, and when a loop is better", body:[
          "Anything recursion does, a loop can do too, and often more simply:",
          {code:"def factorial(n):\n    result = 1\n    for k in range(2, n + 1):\n        result *= k\n    return result", lang:"py", label:"factorial with a loop", cap:"Same answers, no stack of waiting calls, and no limit of about 1,000."},
          "Recursion shines when the data itself has **things inside things**: lists inside lists, folders inside folders, a family tree of children and grandchildren. A loop handles one level; recursion handles any depth, because each inner part is just a smaller version of the whole:",
          {code:"def total(items):\n    result = 0\n    for item in items:\n        if type(item) == list:\n            result += total(item)\n        else:\n            result += item\n    return result\n\nprint(total([1, [2, 3], [4, [5, 6]]]))", lang:"py", label:"Totaling lists inside lists", cap:"Output: `21`. `type(item) == list` checks whether an item is itself a list; if so, `total` calls itself to add up that inner list."},
          {table:[
              ["Use a loop when…", "Recursion may be clearer when…"],
              ["You repeat a step a known number of times", "The data is nested to any depth"],
              ["You go through a flat list once", "The problem splits into smaller copies of itself"],
              ["The depth could reach thousands", "The depth stays small (dozens or hundreds)"]
            ]},
          "Binary search (Lesson 2) can be written recursively too: search the left half or the right half, which is a smaller binary search. Many faster sorting algorithms, such as merge sort and quicksort, are recursive in the same way. In everyday Python, though, loops are more common, and Unit 10’s `pathlib` already walks folders inside folders for you.",
          {lab:"pl-recursion", t:"Practice: total a list of lists with recursion"}
        ]},
      {h:"Simulation: let the computer roll the dice", body:[
          "A [[alg-simulation|simulation]] is a program that imitates a real process, often one involving chance. You can see what tends to happen without doing it for real thousands of times. You met the `random` module in {{py-modules|Unit 8}}. `random.randint(1, 6)` rolls a die (both 1 and 6 included). Roll it 6,000 times and count with a dictionary:",
          {code:"import random\n\nrandom.seed(7)\ncounts = {}\nfor roll in range(6000):\n    face = random.randint(1, 6)\n    counts[face] = counts.get(face, 0) + 1\n\nfor face in range(1, 7):\n    print(face, counts[face])", lang:"py", label:"dice.py", pylab:"pl-dict", cap:"Output: `1 1038`, `2 1020`, `3 1000`, `4 969`, `5 953`, `6 1020`."},
          "Each face comes up close to 1,000 times, as you’d expect from a fair die, but not exactly: that’s chance at work.",
          "`random.seed(7)` sets the starting point for the random numbers. Python’s random numbers are [[alg-pseudo-random|pseudo-random]]: a formula produces a sequence that looks random, and the [[alg-seed|seed]] decides where the sequence starts. Same seed, same “random” numbers, every run. That’s useful for testing and for sharing results. Remove the seed line and you get different numbers each time.",
          {warn:"Python’s documentation warns that the `random` module must not be used for security, such as passwords or secret links. Use the `secrets` module for that."}
        ]},
      {h:"Monte Carlo: estimate by trying many times", body:[
          "The [[alg-monte-carlo|Monte Carlo method]] estimates an answer by running a random experiment many times and counting the results. Question: if you roll a die 4 times, what’s the chance of at least one six?",
          {code:"import random\n\ndef at_least_one_six(rolls):\n    for _ in range(rolls):\n        if random.randint(1, 6) == 6:\n            return True\n    return False\n\nrandom.seed(3)\nfor trials in [100, 10_000, 1_000_000]:\n    wins = 0\n    for _ in range(trials):\n        if at_least_one_six(4):\n            wins += 1\n    print(trials, wins / trials)", lang:"py", label:"six.py", cap:"The `_` in `for _ in range(…)` is a name for a loop variable you don’t need. Output: `100 0.5`, then `10000 0.5185`, then `1000000 0.517757`. The million-trial run takes about a second on a typical computer (timings vary). In the Python Lab it’s usually slower, and the Lab stops any program after 4 seconds, so use smaller numbers if it’s stopped."},
          "Probability theory gives the exact answer: 1 − (5/6)⁴ ≈ 0.5177. With 100 trials the estimate was rough; with a million it matched to three decimal places. **More trials usually means a closer estimate**, though never a guaranteed exact one.",
          "Monte Carlo can even estimate π. Throw random dots into a square with sides of 1. The quarter circle inside it covers π ÷ 4 of the square, so the share of dots that land inside it, times 4, estimates π:",
          {fig:"<svg viewBox=\"0 0 340 330\"><text x=\"10\" y=\"18\">Throw random dots at a square</text><rect class=\"d-panel\" x=\"40\" y=\"40\" width=\"210\" height=\"210\" stroke-width=\"1.5\"/><path class=\"d-lup\" d=\"M40,250 L40,40 A210,210 0 0 1 250,250 Z\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"206.6\" cy=\"77.4\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"141.9\" cy=\"195.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"40.1\" cy=\"110.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"138.8\" cy=\"90.5\" r=\"3\"/><circle class=\"d-inkf\" cx=\"118.4\" cy=\"88.3\" r=\"3\"/><circle class=\"d-inkf\" cx=\"97.3\" cy=\"81.6\" r=\"3\"/><circle class=\"d-inkf\" cx=\"193.3\" cy=\"163.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"153.0\" cy=\"106.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"80.5\" cy=\"133.7\" r=\"3\"/><circle class=\"d-inkf\" cx=\"209.1\" cy=\"194.2\" r=\"3\"/><circle class=\"d-rose\" cx=\"208.7\" cy=\"106.0\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"217.3\" cy=\"179.5\" r=\"3\"/><circle class=\"d-inkf\" cx=\"59.6\" cy=\"81.9\" r=\"3\"/><circle class=\"d-inkf\" cx=\"209.0\" cy=\"156.5\" r=\"3\"/><circle class=\"d-inkf\" cx=\"59.7\" cy=\"208.6\" r=\"3\"/><circle class=\"d-inkf\" cx=\"173.3\" cy=\"188.9\" r=\"3\"/><circle class=\"d-rose\" cx=\"239.8\" cy=\"126.4\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"82.2\" cy=\"112.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"115.7\" cy=\"54.1\" r=\"3\"/><circle class=\"d-rose\" cx=\"231.0\" cy=\"141.9\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"175.4\" cy=\"103.4\" r=\"3\"/><circle class=\"d-rose\" cx=\"209.2\" cy=\"45.0\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"46.0\" cy=\"174.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"166.4\" cy=\"186.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"163.7\" cy=\"231.2\" r=\"3\"/><circle class=\"d-rose\" cx=\"224.8\" cy=\"139.7\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"64.5\" cy=\"110.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"105.6\" cy=\"208.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"141.6\" cy=\"221.0\" r=\"3\"/><circle class=\"d-inkf\" cx=\"84.1\" cy=\"68.2\" r=\"3\"/><circle class=\"d-inkf\" cx=\"186.6\" cy=\"247.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"203.4\" cy=\"246.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"109.9\" cy=\"60.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"170.3\" cy=\"185.7\" r=\"3\"/><circle class=\"d-inkf\" cx=\"119.3\" cy=\"168.3\" r=\"3\"/><circle class=\"d-rose\" cx=\"66.6\" cy=\"40.0\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"51.3\" cy=\"161.2\" r=\"3\"/><circle class=\"d-inkf\" cx=\"196.7\" cy=\"166.5\" r=\"3\"/><circle class=\"d-rose\" cx=\"246.0\" cy=\"198.5\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"245.6\" cy=\"62.6\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"180.7\" cy=\"63.2\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"133.9\" cy=\"75.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"207.2\" cy=\"141.5\" r=\"3\"/><circle class=\"d-inkf\" cx=\"138.9\" cy=\"101.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"125.9\" cy=\"232.0\" r=\"3\"/><circle class=\"d-inkf\" cx=\"196.8\" cy=\"194.2\" r=\"3\"/><circle class=\"d-inkf\" cx=\"142.4\" cy=\"85.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"76.1\" cy=\"245.4\" r=\"3\"/><circle class=\"d-inkf\" cx=\"65.9\" cy=\"126.2\" r=\"3\"/><circle class=\"d-inkf\" cx=\"115.8\" cy=\"196.2\" r=\"3\"/><circle class=\"d-rose\" cx=\"134.8\" cy=\"55.2\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"93.5\" cy=\"163.8\" r=\"3\"/><circle class=\"d-rose\" cx=\"224.7\" cy=\"121.4\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"96.3\" cy=\"150.3\" r=\"3\"/><circle class=\"d-inkf\" cx=\"140.5\" cy=\"220.1\" r=\"3\"/><circle class=\"d-inkf\" cx=\"119.3\" cy=\"185.8\" r=\"3\"/><circle class=\"d-inkf\" cx=\"209.0\" cy=\"182.1\" r=\"3\"/><circle class=\"d-rose\" cx=\"178.4\" cy=\"46.1\" r=\"3.5\" stroke-width=\"1.5\"/><circle class=\"d-inkf\" cx=\"233.8\" cy=\"171.0\" r=\"3\"/><circle class=\"d-inkf\" cx=\"166.6\" cy=\"182.8\" r=\"3\"/><text class=\"s\" x=\"30\" y=\"254\" text-anchor=\"middle\">0</text><text class=\"s\" x=\"250\" y=\"266\" text-anchor=\"middle\">1</text><text class=\"s\" x=\"30\" y=\"44\" text-anchor=\"middle\">1</text><circle class=\"d-inkf\" cx=\"266\" cy=\"70\" r=\"3\"/><text class=\"s\" x=\"274\" y=\"74\">inside</text><circle class=\"d-rose\" cx=\"266\" cy=\"94\" r=\"3.5\" stroke-width=\"1.5\"/><text class=\"s\" x=\"274\" y=\"98\">outside</text><text x=\"10\" y=\"282\">Quarter circle ÷ square = π ÷ 4</text><text x=\"10\" y=\"302\">so π ≈ 4 × (dots inside ÷ all dots)</text><text class=\"s\" x=\"10\" y=\"322\">Here: 47 of 60 inside, 4 × 47 ÷ 60 ≈ 3.13</text></svg>", alt:"A square with sides from 0 to 1, containing a quarter circle centered at the bottom-left corner. Sixty random dots: filled dots inside the quarter circle, hollow dots outside it in the top-right corner. Below: quarter circle divided by square equals π divided by 4, so π is roughly 4 times dots inside divided by all dots. Here 47 of 60 are inside: 4 × 47 ÷ 60 ≈ 3.13.", cap:"A point (x, y) is inside the quarter circle when x² + y² ≤ 1."},
          {code:"import random\n\ndef estimate_pi(trials):\n    inside = 0\n    for _ in range(trials):\n        x = random.random()\n        y = random.random()\n        if x * x + y * y <= 1:\n            inside += 1\n    return 4 * inside / trials\n\nrandom.seed(42)\nfor trials in [100, 10_000, 1_000_000]:\n    print(trials, estimate_pi(trials))", lang:"py", label:"pi.py", cap:"Output: `100 3.12`, `10000 3.1252`, `1000000 3.140828`."},
          "`random.random()` gives a decimal number from 0 up to (but not including) 1, so `x` and `y` together pick a random point in the square."
        ]},
      {h:"Models are simplifications", body:[
          "A simulation is only as good as its assumptions. The dice code assumes every face is equally likely. A real worn die might not be. A simulation of waiting lines at a café assumes how often customers arrive. Change the assumptions and the results change. So when you read a simulation’s result, ask what was assumed and what was left out. Simulations simplify the world on purpose, and the choices made can introduce bias.",
          "Simulations earn their place in two cases. One is when the real thing is too slow, expensive or dangerous to repeat (traffic, epidemics, weather). The other is when the math is too hard to solve exactly.",
          {h:"Common misconceptions"},
          {list:["**“A function can’t call itself.”** It can; it just needs a base case.", "**“Recursion is faster than a loop.”** Usually it isn’t, in Python. Choose it when it makes the code clearer.", "**“Fix a RecursionError by raising the limit.”** Fix the base case or make each call smaller.", "**“Random means unpredictable even with a seed.”** With the same seed, Python produces exactly the same sequence.", "**“A simulation gives the true answer.”** It gives an estimate, which gets closer with more trials, under its assumptions."]}
        ]}
    ],
   try:[
      {id:"t2u11-l5-x1", type:"mcq", q:"Which line is the **base case** in this function?\n\n`def power_of_two(n):`\n`    if n == 0:`\n`        return 1`\n`    return 2 * power_of_two(n - 1)`", options:[
          {t:"`if n == 0: return 1`", ok:true, why:"Right. It answers directly, with no further call, so every chain of calls stops there."},
          {t:"`return 2 * power_of_two(n - 1)`", why:"That’s the recursive case: it calls the function again on a smaller `n`."},
          {t:"`def power_of_two(n):`", why:"That line only names the function and its parameter. It doesn’t decide when to stop."},
          {t:"There isn’t one, so this will cause a RecursionError", why:"There is one: when `n` reaches 0 it returns 1. Each call subtracts 1, so it gets there from any whole number from 0 up."}
        ]},
      {id:"t2u11-l5-x2", type:"number", q:"What does this print?\n\n`def sum_to(n):`\n`    if n == 0:`\n`        return 0`\n`    return n + sum_to(n - 1)`\n\n`print(sum_to(4))`", answer:10, tol:0, unit:"", why:"`sum_to(4)` = 4 + `sum_to(3)` = 4 + 3 + `sum_to(2)` = 4 + 3 + 2 + 1 + `sum_to(0)`, and `sum_to(0)` is 0. Total: **10**.", wrongs:[
          {v:24, tol:0, why:"That’s 4 × 3 × 2 × 1, the factorial. This function adds with `+`."},
          {v:6, tol:0, why:"That leaves out the 4 from the first call: each call adds its own `n` before handing the rest on."},
          {v:4, tol:0, why:"The first call doesn’t just return `n`; it adds `n` to the result of the smaller call."}
        ]},
      {id:"t2u11-l5-x3", type:"order", q:"Put the events of `factorial(3)` in the order they happen.", items:[
          {t:"`factorial(3)` starts and needs `factorial(2)`, so it waits", why:"The first call can’t answer until it knows 2!."},
          {t:"`factorial(2)` starts and needs `factorial(1)`, so it waits", why:"A second frame goes on top of the stack."},
          {t:"`factorial(1)` hits the base case and returns 1", why:"The newest call is the first to finish."},
          {t:"`factorial(2)` returns 2 × 1 = 2", why:"With the answer from below, the waiting call can finish."},
          {t:"`factorial(3)` returns 3 × 2 = 6", why:"The first call to start is the last to finish."}
        ]},
      {id:"t2u11-l5-x4", type:"spot", q:"Hana’s recursive `total` should add up a flat list of numbers, and `total([])` should be 0. Tap every line with a bug.", ask:"a bug", mono:true, parts:[
          {t:"def total(items):", flag:false, why:"Fine: the function and its parameter."},
          "\n    ",
          {t:"if len(items) == 0:", flag:false, why:"Fine: an empty list is the right base case."},
          "\n        ",
          {t:"return 1", flag:true, why:"The total of no numbers is 0, not 1. With 1, every answer comes out one too big."},
          "\n    ",
          {t:"return items[0] + total(items)", flag:true, why:"The list never gets smaller, so it never reaches the base case: RecursionError. Pass the rest of the list, `items[1:]`."}
        ]},
      {id:"t2u11-l5-x5", type:"sort", q:"For each task, which is the more natural fit?", buckets:["A loop", "Recursion"], items:[
          {t:"Add up the numbers from 1 to 100", b:0, why:"A known number of simple repeats: `for` with `range()` (or just `sum(range(1, 101))`)."},
          {t:"Total numbers in lists inside lists inside lists, to any depth", b:1, why:"Each inner list is a smaller version of the same problem."},
          {t:"Ask for an age again until the answer is a valid number", b:0, why:"A `while` loop that repeats until the input is good."},
          {t:"List everyone in a family tree: each person’s children, their children, and so on", b:1, why:"Each person’s descendants form a smaller family tree."},
          {t:"Print each item in a shopping list", b:0, why:"A flat list, gone through once: a `for` loop."}
        ]},
      {id:"t2u11-l5-x6", type:"mcq", q:"Tomás runs a dice simulation twice. Both runs start with `random.seed(5)` and nothing else changes. What happens?", options:[
          {t:"Different results, because the numbers are random", why:"Without a seed, yes. With the same seed, the pseudo-random sequence starts at the same place."},
          {t:"Exactly the same results both times", ok:true, why:"Right. The seed fixes the starting point, so the same “random” numbers come out in the same order. That makes results repeatable."},
          {t:"An error, because a seed can only be used once", why:"You can set a seed as often as you like. Setting it again restarts the same sequence."},
          {t:"The same first number, then different ones", why:"The whole sequence repeats, not just the first number."}
        ]},
      {id:"t2u11-l5-x7", type:"number", q:"In a Monte Carlo run, 1,572 of 2,000 random points in the unit square land inside the quarter circle. What estimate of π does that give?", answer:3.144, tol:0.001, unit:"", why:"The share inside is 1,572 ÷ 2,000 = 0.786, which estimates π ÷ 4. So π ≈ 4 × 0.786 = **3.144**.", wrongs:[
          {v:0.786, tol:0.001, why:"That’s the share of points inside, which estimates π ÷ 4. Multiply by 4."},
          {v:1.572, tol:0.001, why:"That’s the share times 2. The quarter circle is π ÷ 4 of the square, so multiply the share by 4."}
        ]},
      {id:"t2u11-l5-x8", type:"mcq", q:"Fatima simulates a coin landing heads with 100 flips and gets 0.56. What’s the best next step?", options:[
          {t:"Report that the coin lands heads 56% of the time", why:"100 trials give a rough estimate; chance alone easily moves it a few percentage points either way."},
          {t:"Use `random.seed()` to make the answer exactly 0.5", why:"A seed makes results repeatable, not correct. It wouldn’t make the estimate any closer to the truth."},
          {t:"Run many more trials, such as 100,000, and see where the estimate settles", ok:true, why:"Right. More trials usually bring a Monte Carlo estimate closer to the true value, as the “at least one six” example showed."},
          {t:"Switch to recursion, which is more accurate", why:"Recursion is a way of structuring code; it doesn’t change how good the estimate is."}
        ]},
      {id:"t2u11-l5-x9", type:"explain", q:"Explain what a recursive function needs in order to stop, using factorial as an example, and what a `RecursionError` usually tells you.", hint:"Two questions: where does it stop, and does every call get closer to stopping?", model:"A recursive function solves a problem by calling itself on a smaller version of the same problem. It needs two things. One is a base case, a case small enough to answer directly with no further call. The other is a recursive case that calls itself on something closer to that base case. For factorial, `factorial(1)` returns 1, and `factorial(n)` returns `n * factorial(n - 1)`. So every call gets one step nearer to 1. Unfinished calls wait on the call stack. Suppose the base case is missing, or the calls don’t get smaller. Then the stack keeps growing until Python stops it with a `RecursionError`. So the fix is the base case, not a higher limit.", points:["Names a base case that answers without calling itself", "Names a recursive case that moves toward the base case", "Uses factorial correctly as the example", "Says a RecursionError usually means a missing base case or calls that don’t shrink"]}
    ],
   apply:{intro:"Write recursive functions, then run your own simulations. Everything works in the Python Lab (use smaller trial counts there) or on a computer.", tasks:[
        {t:"Recursion three ways", how:["Write `countdown(n)` and `factorial(n)` from the lesson and test them.", "Remove the base case from `countdown`, run it, and read the last line of the traceback. Put the base case back.", "Write a recursive `sum_list(numbers)` that returns 0 for an empty list and otherwise `numbers[0] + sum_list(numbers[1:])`. Test it on `[]`, `[5]` and `[1, 2, 3, 4]`.", "Write the same function with a loop. Which do you find clearer?"], write:"Paste your functions, the RecursionError line, and your outputs."},
        {t:"Two dice", how:["Simulate rolling two dice 36,000 times and count each total from 2 to 12 in a dictionary.", "Use `random.seed(1)` so you can repeat it.", "Which total is most common? Count how many of the 36 possible pairs of faces give that total, and compare."], write:"Paste your counts. Which total won, and does it match the pairs you counted?"},
        {t:"Your own Monte Carlo", how:["Run the π estimate for 100, 10,000 and 100,000 trials, without a seed, three times each.", "Write down how much the estimates jump around at each size.", "Then pick a question of your own (for example, the chance that two dice show the same number) and estimate it the same way."], write:"Paste your estimates and say how the spread changes as the number of trials grows."}
      ], proof:"Working recursive and loop versions of a function. The RecursionError you caused and fixed. A two-dice simulation with counts. Monte Carlo estimates that tighten as the trials grow."},
   read:[
      {book:"thinkpy", where:"Chapter 5, “Conditionals and Recursion” (the sections on recursion, stack diagrams and infinite recursion) and Chapter 6, “Return Values” (recursion with return values, the “leap of faith” and Fibonacci)"},
      {book:"ics", where:"Background reading: Chapter 3, Section 3.4 “Algorithmic Paradigms”: “Divide and Conquer Algorithms” and “Brute-Force Algorithms”", note:"Recursion behind binary search and merge sort, and why trying every possibility explodes."}
    ]
  }
  ],
  checkpoint:["t2u11-q02", "t2u11-q06", "t2u11-q09", "t2u11-q11", "t2u11-q13", "t2u11-q17", "t2u11-q21", "t2u11-q25", "t2u11-q30", "t2u11-q32", "t2u11-q39", "t2u11-q43"],
  cpBank:[
    {id:"t2u11-cp01", lesson:"t2u11-l1", level:1, q:"Ama is drawing a flowchart. Which shape should hold the step “Show the total on screen”?", options:[
        {t:"A diamond", why:"Diamonds hold yes-or-no questions. Showing a value isn’t a question."},
        {t:"A parallelogram", ok:true, why:"Showing a result is output, and parallelograms are for input and output."},
        {t:"A rounded box (oval)", why:"Rounded boxes mark only the start and the end."},
        {t:"An arrow", why:"Arrows join shapes and show what happens next; they don’t hold steps."}
      ]},
    {id:"t2u11-cp02", lesson:"t2u11-l2", level:2, q:"A train app keeps 2,000 station names in alphabetical order. At most, how many checks does binary search need to find one?", options:[
        {t:"10", why:"10 checks are enough for up to 1,023 items. 2,000 needs one more halving."},
        {t:"1,000", why:"That’s linear search’s average. Binary search halves what’s left each time."},
        {t:"11", ok:true, why:"2,000 halves to 1,000, 500, 250, 125, 62, 31, 15, 7, 3 and 1: ten halvings, then one last check."},
        {t:"2,000", why:"That’s linear search’s worst case, not binary search’s."}
      ]},
    {id:"t2u11-cp03", lesson:"t2u11-l3", level:2, q:"What does `sorted([\"kiwi\", \"Fig\", \"apple\"], key=len)` give?", options:[
        {t:"['Fig', 'apple', 'kiwi']", why:"That’s plain text order, with capitals first. `key=len` sorts by length instead."},
        {t:"['apple', 'Fig', 'kiwi']", why:"That ignores capitals, like `key=str.lower`. Here only the lengths matter."},
        {t:"['apple', 'kiwi', 'Fig']", why:"That’s longest first. Without `reverse=True`, the shortest comes first."},
        {t:"['Fig', 'kiwi', 'apple']", ok:true, why:"The key is each word’s length: 3, 4 and 5 letters, so shortest first."}
      ]},
    {id:"t2u11-cp04", lesson:"t2u11-l4", level:1, q:"Which operation takes about the same time however big the collection gets?", options:[
        {t:"Looking up a key in a dictionary", ok:true, why:"Python goes straight to where the key is stored, so the lookup is O(1)."},
        {t:"Checking `x in a_list`", why:"That’s a linear search: O(n). A longer list means more checks."},
        {t:"Finding the largest item with `max()`", why:"The largest could be anywhere, so every item is looked at: O(n)."},
        {t:"Sorting a list with `sorted()`", why:"Sorting is O(n log n): more data, more work."}
      ]},
    {id:"t2u11-cp05", lesson:"t2u11-l5", level:2, q:"What does this print?\n\n`def stars(n):`\n`    if n == 0:`\n`        return \"\"`\n`    return \"*\" + stars(n - 1)`\n\n`print(stars(3))`", options:[
        {t:"`*`", why:"Each call adds its own star to what the smaller call returns, so the stars add up."},
        {t:"Nothing at all", why:"Only `stars(0)` returns an empty string. The calls above it each add a star."},
        {t:"`***`", ok:true, why:"`stars(3)` is \"*\" + `stars(2)`, which is \"*\" + \"*\" + `stars(1)`… down to `stars(0)`, which is \"\". Three stars."},
        {t:"A RecursionError", why:"There’s a base case (`n == 0`), and each call subtracts 1, so it is reached."}
      ]},
    {id:"t2u11-cp06", lesson:"t2u11-l1", level:3, q:"Fatima’s pseudocode for “is the target in the list?” says: FOR EACH item IN list: IF item = target THEN RETURN “found” ELSE RETURN “not found”. What’s wrong?", options:[
        {t:"It should use binary search instead, because that is always faster than a loop", why:"Binary search needs sorted data, and the bug here is in the logic, not the method."},
        {t:"The IF should test `item > target`", why:"Equality is the right test for “is it there?”."},
        {t:"Pseudocode can’t contain RETURN", why:"RETURN is a normal pseudocode keyword."},
        {t:"It gives up after the first item; “not found” belongs after the loop", ok:true, why:"Trace it: if the first item doesn’t match, it returns “not found” straight away. Only after checking every item can it say that."}
      ]},
    {id:"t2u11-cp07", lesson:"t2u11-l2", level:3, q:"A word game checks every typed word against a fixed list of 40,000 allowed words, all day, for thousands of players. Which plan fits best?", options:[
        {t:"Sort the word list once, then binary search for each typed word", ok:true, why:"The sorting cost is paid once and shared by every search; each search then needs at most 16 checks. (A set of the allowed words would be another good choice.)"},
        {t:"Linear search through the whole unsorted list, every time a word is typed", why:"Up to 40,000 checks per word, thousands of times: far more work than sorting once."},
        {t:"Sort the list again before every single search", why:"Re-sorting a list that never changes wastes the work each time."},
        {t:"Binary search on the list as it arrived, unsorted", why:"Binary search on unsorted data can miss allowed words without any error."}
      ]},
    {id:"t2u11-cp08", lesson:"t2u11-l3", level:2, q:"Selection sort on 1,000 items makes about 500,000 comparisons. Roughly how many on 3,000 items?", options:[
        {t:"About 1,500,000 (3 times as many)", why:"That’s linear growth. Selection sort compares pairs, so it grows with the square of n."},
        {t:"About 4,500,000 (9 times as many)", ok:true, why:"It’s O(n²): three times the items means 3² = 9 times the comparisons."},
        {t:"About 3,000,000 (6 times as many)", why:"There’s no doubling rule here. Squaring the size ratio gives 9."},
        {t:"About 13,500,000 (27 times as many)", why:"That’s 3³, cubic growth. Selection sort is quadratic: 3²."}
      ]},
    {id:"t2u11-cp09", lesson:"t2u11-l4", level:3, q:"Dmitri’s code: `for name in guests:` then `if name in banned:` inside, with both `guests` and `banned` lists of n names. What’s its Big-O?", options:[
        {t:"O(n), because the code has only one `for` loop, so it goes through once", why:"`in` on a list is a hidden loop, so there are really two nested loops."},
        {t:"O(1), because `in` is a single operator", why:"One operator can still do lots of work. On a list, `in` checks items one by one."},
        {t:"O(n²), because `in` on a list searches it on every pass", ok:true, why:"n passes, each with a linear search of up to n names. Making `banned` a set would make it O(n)."},
        {t:"O(log n), because names can be sorted", why:"Nothing here halves the data; the lists are searched one item at a time."}
      ]},
    {id:"t2u11-cp10", lesson:"t2u11-l5", level:1, q:"Why might someone put `random.seed(10)` at the top of a simulation?", options:[
        {t:"To make the numbers more random", why:"A seed doesn’t make numbers more random; it makes them repeatable."},
        {t:"To make it safe for generating passwords", why:"The `random` module isn’t for security. The `secrets` module is."},
        {t:"To make the simulation run faster", why:"A seed has no effect on speed."},
        {t:"So that every run gives the same results", ok:true, why:"The seed fixes where the pseudo-random sequence starts, which helps testing and sharing."}
      ]},
    {id:"t2u11-cp11", lesson:"t2u11-l5", level:3, q:"Ana writes binary search recursively and runs it on 1,000,000 sorted items. Will it hit Python’s recursion limit of about 1,000 calls?", options:[
        {t:"Yes: recursion makes one call per item, so it will need a million calls", why:"Binary search doesn’t make one call per item. Each call halves the range."},
        {t:"Yes: recursion always hits the limit on big data", why:"Depth is what matters. Halving keeps the depth tiny."},
        {t:"No: each call halves the range, so it goes only about 20 calls deep", ok:true, why:"The depth is about log₂ of a million, around 20, far below the limit."},
        {t:"No: Python has no recursion limit", why:"It does, about 1,000 by default. This search just stays well under it."}
      ]},
    {id:"t2u11-cp12", lesson:"t2u11-l5", level:2, q:"What does `count_items([\"a\", \"b\", \"c\"])` return?\n\n`def count_items(items):`\n`    if items == []:`\n`        return 0`\n`    return 1 + count_items(items[1:])`", options:[
        {t:"2", why:"Every item adds 1 before the list shrinks, including the last one, “c”."},
        {t:"0", why:"Only the empty list returns 0. Each call before it adds 1."},
        {t:"4", why:"The empty list at the end adds nothing; it returns 0."},
        {t:"3", ok:true, why:"Each call adds 1 and passes on a list one item shorter: 1 + 1 + 1 + 0 = 3."}
      ]}
  ],
  codex:[
   {id:"algorithm-design", title:"Algorithms: decomposition, pseudocode, flowcharts and tracing", aka:["algorithm", "decomposition", "pseudocode", "flowchart", "trace table", "tracing", "edge cases", "computational thinking"], tags:["algorithms", "python", "problem solving"], summary:"An algorithm is a precise, finite method from input to output; plan it by decomposition, write it as pseudocode or a flowchart, and check it by tracing and edge cases.", levels:{starter:[
          "An **algorithm** is a precise, step-by-step method for solving a problem. A recipe is one; so is long division. A program is an algorithm written in a particular language, such as Python.",
          "Good algorithms have a clear input and output, steps that mean exactly one thing, an end, and the right answer for every allowed input.",
          "To make one, **decompose** the task: split it into smaller steps, and split those again, until each step is something simple like “add these numbers” or “if the list is empty, stop”.",
          "Then write it down. **Pseudocode** is the plan in structured plain words (SET, IF, FOR EACH, RETURN). A **flowchart** draws it: rounded boxes for start and end, rectangles for steps, diamonds for yes-or-no questions, parallelograms for input and output, and arrows to show what comes next.",
          {key:"Decompose, write the plan, trace it, test the edges: then code it."}
        ], builder:[
          {table:[
              ["Tool", "Best for", "Watch out for"],
              ["Decomposition", "Getting started on a big task", "Stopping too early: if a step can’t be coded, split it again"],
              ["Pseudocode", "Planning logic quickly, close to code", "Vague lines such as “process the data”"],
              ["Flowchart", "Showing decisions and loops to anyone", "Missing branches: every diamond needs a yes and a no arrow"],
              ["Trace table", "Checking what code really does", "Skipping steps in your head"]
            ]},
          "**Tracing** means following an algorithm by hand, writing each variable’s value as it changes, one row per step. It’s the skill behind every “what does this print?” question, and the fastest way to find a logic bug before running anything.",
          "**Edge cases** are the inputs where plans break: an empty list, a single item, all negative numbers, ties, the largest allowed size. A classic bug is starting a “largest so far” at 0, which fails when every number is negative; start with the first item instead.",
          "In a flowchart, a loop is an arrow that leads back up to an earlier decision; in code it becomes `for` or `while`. Each diamond becomes an `if` (or a loop condition).",
          "Pseudocode has no single standard. Courses define their own: for example, the AP Computer Science Principles exam uses `←` for assignment and numbers list positions from 1, where Python starts at 0."
        ], pro:["Computer scientists usually list an algorithm’s required properties as: **finiteness** (it terminates), **definiteness** (each step is unambiguous), defined **input** and **output**, and **effectiveness** (each step can actually be carried out). **Correctness** means it produces the right output for every valid input; showing that usually needs reasoning, not just tests.", "A useful reasoning tool is the **loop invariant**: a statement that is true before and after every pass of a loop. For “find the largest”, the invariant is “`biggest` is the largest of the items seen so far”. It’s true after the first item, each pass keeps it true, and when the loop ends it’s exactly the answer.", "Flowchart symbols were standardized in ISO 5807 (1985), which defines symbols for data, program and system flowcharts. Many teams now use UML activity diagrams or BPMN for processes, which grew from the same ideas; plain flowcharts remain common in teaching and in documenting business processes.", "Decomposition is one of four ideas often grouped as **computational thinking**, together with pattern recognition, abstraction (keeping only the details that matter) and algorithm design. OpenStax’s *Introduction to Computer Science* §2.1 covers all four.", "Tests and tracing complement each other: tests check many inputs quickly; tracing explains *why* one input fails. Unit 11’s `assert` and pytest tests are the automated form of the edge-case habit."]}, related:["searching-algorithms", "sorting-algorithms", "py-loops", "py-functions", "debugging-strategies", "testing-basics"], read:[{book:"ics", where:"Chapter 2, Section 2.1 “Computational Thinking”"}, {book:"ics", where:"Chapter 3, Section 3.2 “Algorithm Design and Discovery”"}], sources:[
        {t:"OpenStax, Introduction to Computer Science, 2.1 Computational Thinking", url:"https://openstax.org/books/introduction-computer-science/pages/2-1-computational-thinking"},
        {t:"ISO 5807:1985 Information processing: Documentation symbols and conventions for data, program and system flowcharts, program network charts and system resources charts", url:"https://www.iso.org/standard/11955.html"},
        {t:"College Board: AP Computer Science Principles course overview", url:"https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course"}
      ], checked:"2026-11"},

   {id:"searching-algorithms", title:"Searching: linear search and binary search", aka:["linear search", "sequential search", "binary search", "bisection", "bisect", "in", "index()"], tags:["algorithms", "python", "searching"], summary:"Linear search checks items one by one (O(n), any order); binary search halves a sorted range each step (O(log n)).", levels:{starter:[
          "Searching means finding where something is in a collection, or learning that it isn’t there.",
          "**Linear search** checks items one at a time from the start. It works on any list, sorted or not, but in the worst case (the item is last or missing) it checks every item.",
          "**Binary search** works like finding a word in a paper dictionary: look in the middle, decide which half the word must be in, and repeat with that half. It needs the data **sorted**, but it’s astonishingly quick: a million sorted items need at most 20 checks.",
          "Python’s `in` and `.index()` do linear search on lists. Dictionaries and sets find items directly, without searching one by one.",
          {key:"Unsorted or searched once: linear search. Sorted and searched often: binary search (or a dictionary)."}
        ], builder:[
          {code:"def binary_search(items, target):\n    low, high = 0, len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if items[mid] == target:\n            return mid\n        elif items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return None", lang:"py", label:"Binary search, returning None if not found"},
          {table:[["n items", "Linear, worst", "Binary, worst"], ["100", "100", "7"], ["1,000", "1,000", "10"], ["1,000,000", "1,000,000", "20"]]},
          "The worst-case number of binary search checks is the number of times you can halve n before one item is left, plus one: ⌊log₂ n⌋ + 1. Doubling n adds one check.",
          "Common bugs: `while low < high` (misses the last candidate), `low = mid` or `high = mid` (can loop for ever), and running it on unsorted data (wrong answers, no error). Return `None` for “not found” in Python; `-1` is a valid index there, meaning the last item."
        ], pro:["Linear search is O(n) and binary search O(log n) in the worst case. Binary search needs **random access** (jumping straight to position `mid`), which Python lists provide in O(1).", "Python’s standard library module `bisect` implements binary search on sorted lists. Its functions find an **insertion point**: `bisect_left(a, x)` returns the position where `x` would go to keep `a` sorted, before any equal items. To test membership, check `i < len(a) and a[i] == x`. `insort` inserts while keeping order; since Python 3.10 these functions accept a `key=` argument.", "Choosing a structure matters more than tuning a search. A `dict` or `set` uses hashing for average O(1) lookups, according to Python’s documentation on the time complexity of built-in types (which notes the worst case is O(n) if many keys collide). A sorted list plus binary search is useful when you also need order: ranges (“all dates in March”), nearest values, or ranking.", "The halving idea goes far beyond lists: “git bisect” finds the commit that introduced a bug, debugging by halves narrows down a faulty step (Unit 10), and numerical methods use bisection to solve equations. OpenStax’s *Introduction to Computer Science* §3.5 also covers hashing and graph traversal."]}, related:["algorithm-design", "sorting-algorithms", "algorithm-efficiency", "debugging-strategies", "py-dicts"], read:[{book:"ics", where:"Chapter 3, Section 3.5 “Sample Algorithms by Problem”: “Searching”"}, {book:"thinkpy", where:"Chapter 7, “Iteration and Search”"}], sources:[
        {t:"OpenStax, Introduction to Computer Science, 3.5 Sample Algorithms by Problem", url:"https://openstax.org/books/introduction-computer-science/pages/3-5-sample-algorithms-by-problem"},
        {t:"Python documentation: bisect, Array bisection algorithm", url:"https://docs.python.org/3/library/bisect.html"},
        {t:"Python documentation: Time complexity of operations on built-in types", url:"https://docs.python.org/3/builtins/time-complexity.html"}
      ], checked:"2026-11"},

   {id:"sorting-algorithms", title:"Sorting: selection, insertion and Python’s sorted()", aka:["selection sort", "insertion sort", "bubble sort", "sorted", "sort", "key function", "stable sort", "Timsort", "reverse=True"], tags:["algorithms", "python", "sorting"], summary:"Simple sorts like selection and insertion sort are O(n²); in real code use sorted() or .sort() with key= and reverse=, which are stable.", levels:{starter:[
          "Sorting puts items in order: smallest first, A to Z, newest first. Sorted data is easier to read and much faster to search.",
          "**Selection sort**: find the smallest item and swap it to the front; then the smallest of the rest into second place; and so on.",
          "**Insertion sort**: like sorting playing cards in your hand. Take the next card and slide it left until it is in the right place among the cards already sorted.",
          "**Bubble sort**: walk along the list swapping neighbors that are in the wrong order, and repeat until a pass makes no swaps.",
          "In real Python programs, use `sorted(items)` for a new sorted list, or `items.sort()` to sort a list in place.",
          {key:"Learn the simple sorts to understand sorting; use Python’s built-in sort to do it."}
        ], builder:[
          {table:[
              ["Call", "Result"],
              ["`sorted(words)`", "New list; capitals before lowercase (character codes)"],
              ["`sorted(words, key=str.lower)`", "A to Z ignoring capitals"],
              ["`sorted(nums_as_text, key=int)`", "Numeric order for numbers stored as text"],
              ["`sorted(words, key=len)`", "Shortest first"],
              ["`sorted(rows, key=by_price, reverse=True)`", "Most expensive first, with your own key function"],
              ["`sorted(d, key=d.get, reverse=True)`", "Dictionary keys, largest value first"]
            ]},
          "A **key function** takes one item and returns what to sort it by; pass its name without brackets. `items.sort()` returns `None`, so never write `items = items.sort()`.",
          "Selection sort always makes n(n − 1)/2 comparisons. Insertion sort makes about half that on random data, the same on reversed data, and only n − 1 on data that’s already sorted. Both are O(n²): ten times the data, about a hundred times the work.",
          "Python’s sort is **stable**: items with equal keys keep their original order. That lets you sort by several things in turn: sort by the less important key first, then by the more important one."
        ], pro:["Python’s documentation (“Sorting Techniques”) guarantees stability, says the key function is called exactly once per item, and notes that `reverse=True` keeps stability. It says the Timsort algorithm Python uses can take advantage of order already present in the data. Python’s page on the time complexity of built-in types lists `list.sort()` as O(n log n) in the worst case and O(n) comparisons for input that is already sorted or reverse-sorted.", "O(n log n) is the best possible worst case for any sort that works only by comparing items. Classic O(n log n) algorithms are merge sort and heapsort; quicksort is O(n log n) on average but O(n²) in its worst case. Insertion sort is still used inside fast hybrids, because it beats them on short or nearly sorted runs.", "Comparison keys: tuples compare item by item, so `key=lambda r: (r[\"year\"], r[\"name\"])` sorts by year, then name. For descending numbers inside an ascending sort you can negate a numeric key. `functools.cmp_to_key` adapts an old-style comparison function.", "Mixed types can’t be compared in Python 3: `sorted([3, \"2\"])` raises a TypeError. Text order is by Unicode code point, not dictionary order in any language; for language-aware ordering (accents, local alphabets) look at `locale.strxfrm` or a library such as PyICU."]}, related:["searching-algorithms", "algorithm-efficiency", "py-lists", "py-dicts", "py-functions"], read:[{book:"ics", where:"Chapter 3, Section 3.5 “Sample Algorithms by Problem”: “Sorting”"}, {book:"thinkpy", where:"Chapter 9, “Lists”"}], sources:[
        {t:"Python documentation: Sorting Techniques", url:"https://docs.python.org/3/howto/sorting.html"},
        {t:"Python documentation: Time complexity of operations on built-in types", url:"https://docs.python.org/3/builtins/time-complexity.html"},
        {t:"OpenStax, Introduction to Computer Science, 3.5 Sample Algorithms by Problem", url:"https://openstax.org/books/introduction-computer-science/pages/3-5-sample-algorithms-by-problem"}
      ], checked:"2026-11"},

   {id:"algorithm-efficiency", title:"How fast is it? Timing, step counts and Big-O", aka:["Big-O", "big O notation", "time complexity", "O(n)", "O(n²)", "O(log n)", "perf_counter", "timeit", "profiling", "set"], tags:["algorithms", "python", "performance"], summary:"Measure with time.perf_counter(), predict with step counts, and describe growth with Big-O: O(1), O(log n), O(n), O(n log n), O(n²).", levels:{starter:[
          "There are two ways to judge speed. **Time it**: run the code and measure how long it takes. **Count steps**: count the checks or comparisons it makes.",
          "The most useful question is “what happens when the data doubles?” Some work stays the same, some doubles, some quadruples.",
          "**Big-O** is the shorthand for that growth. O(1): constant. O(log n): grows very slowly (binary search). O(n): grows in step with the data (one loop). O(n²): a loop inside a loop; double the data, four times the work.",
          "For small data, almost anything is fast enough, so write clear code first. For big data, a better algorithm beats a faster computer.",
          {key:"Double the input and watch: that tells you more than any single timing."}
        ], builder:[
          {code:"import time\n\nstart = time.perf_counter()\nresult = do_the_work()        # the code to measure\nelapsed = time.perf_counter() - start\nprint(f\"{elapsed:.4f} seconds\")", lang:"py", label:"Timing a piece of code"},
          "Timings vary from run to run, so repeat them and compare typical values; the standard `timeit` module repeats code for you.",
          {table:[
              ["Big-O", "Doubling n", "Python examples"],
              ["O(1)", "Same", "`a[i]`, `len(a)`, `d[key]`, `x in a_set`"],
              ["O(log n)", "+1 step", "Binary search, `bisect`"],
              ["O(n)", "×2", "`x in a_list`, `sum`, `max`, one loop"],
              ["O(n log n)", "a bit over ×2", "`sorted()`, `.sort()`"],
              ["O(n²)", "×4", "Nested loops over the same data, selection sort"]
            ]},
          "Watch for **hidden loops**: `if x in some_list:` inside a loop is O(n²) overall. Turning `some_list` into a set (or a dictionary) makes each check O(1)."
        ], pro:["Formally, f(n) is O(g(n)) if f(n) ≤ c·g(n) for some constant c and all n beyond some point: an **upper bound** on growth that ignores constant factors and lower-order terms (3n² + 5n + 2 is O(n²)). Related notations are Ω (lower bound) and Θ (tight bound); everyday usage often says “O” when it means Θ. Analyses usually state the **worst case**, sometimes the average case or an **amortized** cost (`list.append` is amortized O(1)).", "Python’s documentation page “Time complexity of operations on built-in types” covers CPython: list indexing O(1), `x in list` O(n), `list.sort()` O(n log n); `dict` and `set` lookups O(1) on average, but O(n) in the worst case, when many keys hash to the same value.", "`time.perf_counter()` is a high-resolution clock whose reference point is undefined, so only differences are meaningful; `perf_counter_ns()` avoids float rounding. Wall-clock time includes waiting for other processes, which is why repeated runs, `timeit`, and profilers such as `cProfile` matter. MIT’s Missing Semester lecture “Debugging and Profiling” covers timing, profilers and benchmarking.", "Beyond polynomial growth lie exponential O(2ⁿ) and factorial O(n!) algorithms, such as brute-force search over subsets or orderings. AP Computer Science Principles says polynomial-time algorithms run in a “reasonable” amount of time and exponential or factorial ones in an “unreasonable” amount of time, and introduces heuristics for problems where finding the best solution is impractical."]}, related:["searching-algorithms", "sorting-algorithms", "recursion-basics", "readable-code"], read:[{book:"ics", where:"Chapter 3, Section 3.3 “Formal Properties of Algorithms”"}, {book:"missing", where:"Lecture “Debugging and Profiling”: “Profiling”"}], sources:[
        {t:"Python documentation: time.perf_counter()", url:"https://docs.python.org/3/library/time.html#time.perf_counter"},
        {t:"Python documentation: Time complexity of operations on built-in types", url:"https://docs.python.org/3/builtins/time-complexity.html"},
        {t:"OpenStax, Introduction to Computer Science, 3.3 Formal Properties of Algorithms", url:"https://openstax.org/books/introduction-computer-science/pages/3-3-formal-properties-of-algorithms"}
      ], checked:"2026-11"},

   {id:"recursion-basics", title:"Recursion: functions that call themselves", aka:["recursion", "recursive function", "base case", "recursive case", "call stack", "RecursionError", "factorial"], tags:["algorithms", "python", "functions"], summary:"A recursive function solves a smaller copy of its own problem; it needs a base case, and Python limits how deep the calls can go.", levels:{starter:[
          "**Recursion** is when a function calls itself to solve a smaller version of the same problem. Like asking the person in front of you in a line for their place, who asks the person in front of them, until the first person says “1”.",
          "Every recursive function needs a **base case**, a simple input it answers directly (such as 0, 1 or an empty list), and a **recursive case** that calls the function on a smaller input, getting closer to the base case each time.",
          "Without a base case, the calls never stop, and Python ends the program with a `RecursionError`.",
          "Recursion is natural for things inside things: lists inside lists, folders inside folders, family trees. For simple repetition, a loop is usually clearer.",
          {key:"Ask two questions: where does it stop, and does every call get closer to stopping?"}
        ], builder:[
          {code:"def factorial(n):\n    if n <= 1:          # base case\n        return 1\n    return n * factorial(n - 1)   # recursive case", lang:"py", label:"The classic example"},
          "Each call gets its own **frame** on the **call stack**, holding its own variables. `factorial(3)` waits for `factorial(2)`, which waits for `factorial(1)`. The base case returns first; the waiting calls then finish, newest first. A traceback lists the frames that were on the stack.",
          "Python limits the depth to stop runaway recursion; `sys.getrecursionlimit()` shows it (1,000 by default in standard Python). A `RecursionError` nearly always means a missing base case or a step that doesn’t shrink the problem. Fix the logic rather than raising the limit.",
          {table:[
              ["Prefer a loop", "Recursion can be clearer"],
              ["Counting, totals, flat lists", "Nested lists, trees, folders"],
              ["Depth could reach thousands", "Depth stays small, or halves each call"]
            ]}
        ], pro:["Python’s documentation describes the recursion limit as the maximum depth of the interpreter stack, there to stop infinite recursion from overflowing the C stack and crashing Python. `sys.setrecursionlimit()` can raise it, but the highest safe value depends on the platform and a too-high limit can crash the interpreter.", "CPython does **not** perform tail-call optimization, so even a recursive call in the last position uses a new frame. Deep linear recursion (one call per item) is therefore a poor fit for long data in Python; convert it to a loop, or use an explicit stack (a list you push to and pop from).", "Recursion that halves the problem stays shallow: recursive binary search on a million items is about 20 calls deep. Divide-and-conquer algorithms such as merge sort and quicksort follow this pattern.", "Naive recursion can repeat work enormously: computing Fibonacci numbers with `fib(n - 1) + fib(n - 2)` takes exponential time. **Memoization** (remembering results in a dictionary, or `functools.cache`) brings it down to linear. *Think Python* chapters 5, 6 and 10 develop these ideas.", "Proving a recursive function correct works like mathematical induction: show the base case is right, then show that if the smaller calls are right, the current call is too (Downey calls this the “leap of faith”)."]}, related:["py-functions", "py-errors-tracebacks", "searching-algorithms", "algorithm-efficiency"], read:[
        {book:"thinkpy", where:"Chapter 5, “Conditionals and Recursion”, and Chapter 6, “Return Values”"},
        {book:"ics", where:"Chapter 3, Section 3.4 “Algorithmic Paradigms”: “Divide and Conquer Algorithms”"}
      ], sources:[
        {t:"Python documentation: sys.getrecursionlimit() and sys.setrecursionlimit()", url:"https://docs.python.org/3/library/sys.html#sys.getrecursionlimit"},
        {t:"OpenStax, Introduction to Computer Science, 3.4 Algorithmic Paradigms", url:"https://openstax.org/books/introduction-computer-science/pages/3-4-algorithmic-paradigms"}
      ], checked:"2026-11"},

   {id:"simulation-random", title:"Simulation, randomness and Monte Carlo", aka:["simulation", "Monte Carlo", "random", "random.seed", "pseudo-random", "randint", "random.random", "secrets"], tags:["algorithms", "python", "probability"], summary:"Simulations imitate a process with pseudo-random numbers; Monte Carlo estimates answers from many random trials; seeds make runs repeatable.", levels:{starter:[
          "A **simulation** is a program that imitates something real, like dice, waiting lines or the spread of a rumor, so you can see what tends to happen without doing it thousands of times for real.",
          "Python’s `random` module supplies the chance: `random.randint(1, 6)` rolls a die (1 to 6, both included) and `random.random()` gives a decimal from 0 up to, but not including, 1.",
          "The **Monte Carlo method** estimates an answer by repeating a random experiment many times and counting. More trials usually give a closer estimate.",
          "A **seed** (`random.seed(7)`) makes the “random” numbers come out the same every run, which helps when testing or sharing results.",
          {key:"A simulation gives an estimate, based on assumptions. Check the assumptions."}
        ], builder:[
          {code:"import random\n\nrandom.seed(1)\ntrials = 100_000\nhits = 0\nfor _ in range(trials):\n    a = random.randint(1, 6)\n    b = random.randint(1, 6)\n    if a == b:\n        hits += 1\nprint(hits / trials)   # close to 1/6", lang:"py", label:"Chance that two dice match"},
          {table:[
              ["Function", "Gives"],
              ["`random.randint(a, b)`", "A whole number from a to b, both included"],
              ["`random.random()`", "A float, 0.0 ≤ x < 1.0"],
              ["`random.choice(seq)`", "One item from a non-empty sequence"],
              ["`random.shuffle(lst)`", "Shuffles a list in place"],
              ["`random.sample(seq, k)`", "k different items, as a new list"]
            ]},
          "Count results with a dictionary (`counts[x] = counts.get(x, 0) + 1`). Compare an estimate with an exact answer when one exists: at least one six in four rolls is 1 − (5/6)⁴ ≈ 0.518.",
          "Simulations simplify on purpose. A model of a café that assumes steady arrivals will miss the lunchtime rush. When reading any simulation’s result, ask what was assumed and what was left out."
        ], pro:["Python’s `random` module uses the Mersenne Twister generator. Its documentation states that these pseudo-random generators should not be used for security purposes; the `secrets` module (Python 3.6 and later) is the tool for passwords, tokens and secret links.", "Reusing a seed reproduces the same sequence from run to run, as long as multiple threads aren’t involved. The documentation notes that most of the module’s algorithms may change between Python versions, but `random()` with the same seed is guaranteed to give the same output.", "Monte Carlo error typically shrinks in proportion to 1/√N: to get one more correct decimal place you need about 100 times as many trials. That’s why the π estimate improves slowly, and why Monte Carlo suits problems with many dimensions where exact methods are impractical (risk models, physics, rendering).", "AP Computer Science Principles expects students to explain that simulations are abstractions that leave out details, can contain bias from their assumptions, and allow experiments that would be impractical in reality. Japan’s high-school subject Information I (情報Ⅰ) also asks students to build models and run simulations, and the teaching examples published by Japan’s education ministry include simulation with a probability model (確率モデル)."]}, related:["py-modules", "py-dicts", "recursion-basics", "algorithm-design"], read:[{book:"thinkpy", where:"Chapter 10, “Dictionaries” (counting with a dictionary)"}], sources:[
        {t:"Python documentation: random, Generate pseudo-random numbers", url:"https://docs.python.org/3/library/random.html"},
        {t:"Japan’s education ministry: 高等学校情報科 実践事例 (high-school informatics teaching examples)", url:"https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/mext_00097.html"},
        {t:"College Board: AP Computer Science Principles course overview", url:"https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course"}
      ], checked:"2026-11"}
  ],
  terms:[
   {id:"alg-algorithm", term:"Algorithm", def:"A precise, step-by-step method that turns an input into an output and always finishes. A program is an algorithm written in a particular language.", codex:"algorithm-design"},
   {id:"alg-decomposition", term:"Decomposition", def:"Breaking a big problem into smaller parts, and those into smaller parts again, until each piece is simple enough to do directly.", codex:"algorithm-design"},
   {id:"alg-pseudocode", term:"Pseudocode", def:"An algorithm written in structured plain words (SET, IF, FOR EACH, RETURN) for people to read. No computer runs it.", codex:"algorithm-design"},
   {id:"alg-flowchart", term:"Flowchart", def:"A diagram of an algorithm: rounded boxes for start and end, rectangles for steps, diamonds for yes-or-no questions, parallelograms for input and output, joined by arrows.", codex:"algorithm-design"},
   {id:"alg-trace-table", term:"Trace table", def:"A table for following code by hand, with one column per variable and one row per step, showing how each value changes.", codex:"algorithm-design"},
   {id:"alg-linear-search", term:"Linear search", def:"Searching by checking items one at a time from the start. Works on any list; in the worst case it checks every item. Also called sequential search.", codex:"searching-algorithms"},
   {id:"alg-binary-search", term:"Binary search", def:"Searching sorted data by checking the middle item and throwing away the half that can’t hold the target, again and again.", codex:"searching-algorithms"},
   {id:"alg-worst-case", term:"Worst case", def:"The input that makes an algorithm do the most work, such as a target that isn’t in the list. It shows the most the algorithm will ever need.", codex:"algorithm-efficiency"},
   {id:"alg-logarithm", term:"Logarithmic growth (log n)", def:"Growth like the number of times you can halve n: about 10 for a thousand, 20 for a million. Doubling n adds just one step.", codex:"algorithm-efficiency"},
   {id:"alg-selection-sort", term:"Selection sort", def:"A sort that repeatedly finds the smallest remaining item and swaps it into the next position. It always makes n(n − 1)/2 comparisons.", codex:"sorting-algorithms"},
   {id:"alg-insertion-sort", term:"Insertion sort", def:"A sort that takes each item in turn and slides it left into place among the items already sorted, like sorting cards in your hand. Very quick on nearly sorted data.", codex:"sorting-algorithms"},
   {id:"alg-bubble-sort", term:"Bubble sort", def:"A simple sort that swaps neighboring items that are out of order, pass after pass, until a pass makes no swaps. Easy to draw, but slow on big lists.", codex:"sorting-algorithms"},
   {id:"alg-nested-loop", term:"Nested loop", def:"A loop inside another loop. If both go over the same n items, the inner body runs about n × n times: O(n²).", codex:"algorithm-efficiency"},
   {id:"alg-key-function", term:"Key function", def:"A function passed to sorted() or .sort() with key=, which returns what each item should be sorted by, such as len or str.lower.", codex:"sorting-algorithms"},
   {id:"alg-stable-sort", term:"Stable sort", def:"A sort that keeps items with equal keys in their original order. Python’s sorted() and .sort() are stable.", codex:"sorting-algorithms"},
   {id:"alg-big-o", term:"Big-O notation", def:"A shorthand for how an algorithm’s work grows with the size of its input n, such as O(1), O(log n), O(n) or O(n²).", codex:"algorithm-efficiency"},
   {id:"alg-set", term:"Set (Python)", def:"A collection with no duplicates and no order, such as {\"tea\", \"jam\"}. Checking whether an item is in a set is fast, however big it is.", codex:"algorithm-efficiency"},
   {id:"alg-recursion", term:"Recursion", def:"Solving a problem by having a function call itself on a smaller version of the same problem, until it reaches a base case.", codex:"recursion-basics"},
   {id:"alg-base-case", term:"Base case", def:"The part of a recursive function that answers directly, without calling itself again. It’s where the chain of calls stops.", codex:"recursion-basics"},
   {id:"alg-call-stack", term:"Call stack", def:"Python’s record of the function calls in progress. Each call adds a frame with its own variables; the newest call finishes first.", codex:"recursion-basics"},
   {id:"alg-simulation", term:"Simulation", def:"A program that imitates a real process, often using random numbers, to see what tends to happen. Its results depend on its assumptions.", codex:"simulation-random"},
   {id:"alg-pseudo-random", term:"Pseudo-random numbers", def:"Numbers made by a formula that look random but come from a fixed sequence. Python’s random module makes them; they are not safe for passwords.", codex:"simulation-random"},
   {id:"alg-seed", term:"Seed (random)", def:"The starting value for a pseudo-random sequence. Using the same seed, such as random.seed(7), gives the same numbers every run.", codex:"simulation-random"},
   {id:"alg-monte-carlo", term:"Monte Carlo method", def:"Estimating an answer by running a random experiment many times and counting the results. More trials usually give a closer estimate.", codex:"simulation-random"}
  ],
  bank:[
   {id:"t2u11-q01", lesson:"t2u11-l1", level:1, q:"What is an algorithm?", options:[
        {t:"Precise steps from an input to an output, then stop", ok:true, why:"That’s the definition: clear input and output, precise steps, and an end. It can be written in English, pseudocode or any programming language."},
        {t:"Any program written in Python", why:"A program is an algorithm written in one particular language. The algorithm is the method itself, and it exists before any code."},
        {t:"A diagram made of boxes and arrows that shows a program", why:"That’s a flowchart, which is one way to *show* an algorithm, not the algorithm itself."},
        {t:"A secret formula that only computers can follow", why:"Recipes, long division and fire-drill plans are algorithms too. Nothing about them is secret or computer-only."}
      ]},
   {id:"t2u11-q02", lesson:"t2u11-l1", level:2, q:"Priya must write a program that makes a weekly attendance report for her running club, and it feels too big to start. What does **decomposition** suggest?", options:[
        {t:"Start typing code and fix things as they go wrong", why:"Without a plan, gaps in the logic turn into confusing bugs later. Planning first is quicker overall."},
        {t:"Look for a single Python function that does the whole job", why:"There’s rarely one function for a whole task. Splitting it up shows which ready-made tools fit which step."},
        {t:"Split it into smaller steps until each one is codeable", ok:true, why:"Right. For example: read the sign-ins, count each week, print a table. Keep breaking it down until every step is something Python can do: a list, a loop, an `if`, a `print()`."},
        {t:"Draw what the final report should look like, then stop", why:"Knowing the output helps, but it doesn’t say how to get there. Decomposition is about the steps."}
      ]},
   {id:"t2u11-q03", lesson:"t2u11-l1", level:1, q:"In a flowchart, which shape holds the question “Is the basket empty?”", options:[
        {t:"A rectangle", why:"Rectangles are for steps that do something, such as a calculation."},
        {t:"A parallelogram", why:"Parallelograms are for input and output."},
        {t:"A rounded box", why:"Rounded boxes mark the start and the end."},
        {t:"A diamond", ok:true, why:"Right. Yes-or-no questions go in diamonds, with one arrow leaving for “yes” and one for “no”."}
      ]},
   {id:"t2u11-q04", lesson:"t2u11-l1", level:1, q:"What is pseudocode for?", options:[
        {t:"Planning an algorithm’s logic in plain words, for people", ok:true, why:"Right. No computer runs it. It lets you plan and share the steps without worrying about colons, brackets or exact names."},
        {t:"A simpler language that computers run faster than Python", why:"No computer runs pseudocode at all. It’s a planning tool for people."},
        {t:"A list of the errors a program might show", why:"Errors appear in tracebacks. Pseudocode describes the steps of an algorithm."},
        {t:"Code that is hidden from the people using an app", why:"Pseudocode isn’t part of a running app. It’s written before, or alongside, the real code."}
      ]},
   {id:"t2u11-q05", lesson:"t2u11-l1", level:2, q:"Trace this. What does it print?\n\n`total = 0`\n`for n in [3, 5, 2]:`\n`    total = total + n * 2`\n`print(total)`", options:[
        {t:"10", why:"That adds the numbers but forgets the `* 2`. Each one is doubled before it’s added."},
        {t:"20", ok:true, why:"Right. total goes 0 → 6 → 16 → 20, adding 3 × 2, then 5 × 2, then 2 × 2."},
        {t:"4", why:"That’s only the last item doubled. `total` keeps a running sum across all three passes."},
        {t:"16", why:"That stops before the last item. The loop runs once for every item, including the 2."}
      ]},
   {id:"t2u11-q06", lesson:"t2u11-l1", level:3, q:"Kenji’s `largest(numbers)` starts with `biggest = 0`. It gives the right answer for `[3, 8, 5]`. Which test would reveal the bug?", options:[
        {t:"`[8, 8, 8]`", why:"Ties work: 8 > 0, so `biggest` becomes 8 and stays there. The answer is right."},
        {t:"`[0, 5, 2]`", why:"This gives 5, which is right. A 0 in the list doesn’t expose the bug."},
        {t:"`[-4, -9, -1]`", ok:true, why:"Right. No number is bigger than 0, so the function returns 0, which isn’t even in the list. The answer should be -1."},
        {t:"`[100, 2]`", why:"This gives 100, which is right. Any list with a positive number hides the bug."}
      ]},
   {id:"t2u11-q07", lesson:"t2u11-l1", level:3, q:"Lucía’s function passed three tests: `[4, 7]`, `[10, 2, 6]` and `[1, 1]`. Before she trusts it, what should she test next?", options:[
        {t:"Three more lists like the ones that already passed", why:"More of the same kind of input tells her little new. Bugs hide at the edges."},
        {t:"A very long list of similar positive numbers", why:"Length alone rarely reveals logic bugs. The strange inputs are the useful ones."},
        {t:"Nothing: three passing tests prove it works", why:"Tests only prove that those inputs work. A program must be right for every allowed input."},
        {t:"Edge cases: an empty list, one item, negatives", ok:true, why:"Right. Edge cases are where plans most often break, like dividing by zero on an empty list or starting a maximum at 0."}
      ]},
   {id:"t2u11-q08", lesson:"t2u11-l1", level:2, q:"Tomás fills in a table with one column per variable and one row per step of a loop, writing each value as it changes. What is he doing?", options:[
        {t:"Tracing the algorithm by hand", ok:true, why:"Right. A trace table follows the code step by step, showing exactly why it gives its answer."},
        {t:"Writing pseudocode", why:"Pseudocode describes the steps. A trace table records what happens when you follow them with real values."},
        {t:"Drawing a flowchart", why:"A flowchart shows the steps as shapes and arrows. This table shows variable values over time."},
        {t:"Decomposing the problem", why:"Decomposition splits a task into smaller parts. Tracing checks how existing steps behave."}
      ]},
   {id:"t2u11-q09", lesson:"t2u11-l1", level:3, q:"Amara’s flowchart for “ask for a PIN until it’s correct” has a diamond “PIN correct?”. Its “no” arrow leads to the End shape. What’s wrong?", options:[
        {t:"The question should be in a rectangle, not a diamond", why:"A yes-or-no question belongs in a diamond. The shape is right; the arrow isn’t."},
        {t:"A wrong PIN should loop back to “ask for PIN”, not end the program", ok:true, why:"Right. “Until it’s correct” means repeating. In a flowchart, repetition is an arrow leading back up to an earlier step."},
        {t:"Flowcharts can’t show repetition, so this needs pseudocode", why:"They can: an arrow pointing back to an earlier shape is exactly how a loop is drawn."},
        {t:"It needs a parallelogram at the start instead of a rounded box", why:"Start and end are rounded boxes. The problem is where the “no” arrow goes."}
      ]},
   {id:"t2u11-q10", lesson:"t2u11-l2", level:1, q:"What must be true of a list before binary search can be used on it?", options:[
        {t:"It must contain only numbers", why:"Text can be binary searched too, as long as it’s in order (think of a dictionary)."},
        {t:"Its length must be a power of 2, such as 16 or 1,024", why:"Any length works. The middle is found with `(low + high) // 2`, which handles odd sizes."},
        {t:"It must be sorted by the value being searched for", ok:true, why:"Right. Sorted order is what lets one check rule out a whole half."},
        {t:"It must have no repeated items", why:"Repeats don’t stop binary search from finding a match. Being sorted is what matters."}
      ]},
   {id:"t2u11-q11", lesson:"t2u11-l2", level:2, q:"An unsorted list holds 80 parcel codes, and the code Ana wants is the **last** one. How many codes does linear search check?", options:[
        {t:"40", why:"That’s about the average for a random position. The last item is the worst case."},
        {t:"7", why:"That’s about what binary search would need, but binary search only works on sorted data."},
        {t:"80", ok:true, why:"Right. Linear search checks one at a time from the start, so the last item is found on the 80th check."},
        {t:"1", why:"That’s the best case, when the target is first."}
      ]},
   {id:"t2u11-q12", lesson:"t2u11-l2", level:2, q:"About how many checks does binary search need, at most, in a sorted list of 1,000,000 items?", options:[
        {t:"20", ok:true, why:"Right. A million can be halved about 20 times before one item is left (2²⁰ is just over a million)."},
        {t:"1,000", why:"That would be far too many. Each check halves what’s left, so the count grows very slowly."},
        {t:"500,000", why:"That’s linear search’s average for an item that’s there. Binary search throws away half each time."},
        {t:"1,000,000", why:"That’s linear search’s worst case."}
      ]},
   {id:"t2u11-q13", lesson:"t2u11-l2", level:3, q:"Oluwaseun’s contacts are sorted by name. He has a phone number and wants to know whose it is. What should his program do?", options:[
        {t:"Binary search, because the contact list is already sorted, by name", why:"It’s sorted by name, not by number. Binary search needs the data sorted by the thing you’re looking for."},
        {t:"Check each contact’s number, or build a dictionary keyed by number", ok:true, why:"Right. The order by name is no help for numbers, so it’s linear search, or a dictionary if he’ll do this often."},
        {t:"Binary search on the names first, then on the numbers", why:"He doesn’t know the name; that’s what he’s trying to find out."},
        {t:"Sort by name again, then binary search", why:"It’s already sorted by name. That still isn’t the order of the phone numbers."}
      ]},
   {id:"t2u11-q14", lesson:"t2u11-l2", level:2, q:"Using the lesson’s `linear_search`, what does `linear_search([\"tea\", \"jam\"], \"milk\")` return?", options:[
        {t:"-1", why:"Some languages use -1 for “not found”, but this version returns `None`. In Python, -1 is a real position: the last item."},
        {t:"0", why:"0 is the position of the first item. Returning it would wrongly say “milk” is first."},
        {t:"A ValueError", why:"That’s what `.index()` does. This function finishes its loop and returns `None`."},
        {t:"`None`", ok:true, why:"Right. The loop finds no match, so the function reaches `return None` after the loop."}
      ]},
   {id:"t2u11-q15", lesson:"t2u11-l2", level:3, q:"A sorted list of 1,000 names needs at most 10 binary search checks. The list grows to 2,000 names. What’s the most it can need now?", options:[
        {t:"11", ok:true, why:"Right. Doubling adds one halving: the first check cuts 2,000 back down to about 1,000."},
        {t:"20", why:"That doubles the checks, as linear search would. Binary search grows far more slowly."},
        {t:"10", why:"One more halving is needed, because 2,000 is more than 1,023, the most 10 checks can handle."},
        {t:"2,000", why:"That’s linear search’s worst case."}
      ]},
   {id:"t2u11-q16", lesson:"t2u11-l2", level:2, q:"Dmitri writes `low = mid` instead of `low = mid + 1` in his binary search. What can happen?", options:[
        {t:"It still works, only a little more slowly than usual", why:"It doesn’t always work: `mid` can come out the same on every round."},
        {t:"It returns the wrong position", why:"The danger isn’t a wrong answer but no answer at all."},
        {t:"The loop may never end, because `low` stops moving", ok:true, why:"Right. With two items left, `mid` equals `low`; setting `low = mid` changes nothing, so the same check repeats for ever."},
        {t:"It crashes straight away with an IndexError", why:"`mid` stays inside the list, so there’s no IndexError. It just loops."}
      ]},
   {id:"t2u11-q17", lesson:"t2u11-l2", level:3, q:"A library app looks up books by ISBN thousands of times a day in a list of 50,000 ISBNs that changes once a month. Which plan makes sense?", options:[
        {t:"Linear search every time, because sorting is expensive", why:"Sorting once a month is cheap compared with thousands of slow searches a day."},
        {t:"Sort the list before every single search", why:"Sorting each time wastes far more work than it saves."},
        {t:"Binary search on the list as it arrives, unsorted", why:"Binary search on unsorted data gives wrong answers."},
        {t:"Keep it sorted (re-sort monthly) and use binary search", ok:true, why:"Right. The sorting cost is shared by thousands of fast searches. (A dictionary keyed by ISBN would also work well.)"}
      ]},
   {id:"t2u11-q18", lesson:"t2u11-l2", level:1, q:"Why does doubling a sorted list add only **one** check to binary search?", options:[
        {t:"Python remembers earlier searches", why:"Nothing is remembered between searches. It’s the halving that makes it cheap."},
        {t:"One extra halving brings the list back down to its old size", ok:true, why:"Right. The first check of a 2,000-item list leaves about 1,000, and from there it’s the same as before."},
        {t:"Binary search only ever looks at half the list", why:"It looks at a few items, chosen by repeated halving: about log₂ n of them."},
        {t:"It checks two items at every step", why:"It checks one item per step: the middle of what’s left."}
      ]},
   {id:"t2u11-q19", lesson:"t2u11-l3", level:1, q:"Which description is **selection sort**?", options:[
        {t:"Take the next item and slide it left into place among the sorted items", why:"That’s insertion sort."},
        {t:"Swap neighboring items that are out of order, and repeat until no swaps are needed", why:"That’s bubble sort."},
        {t:"Split the list in half, sort each half, and merge them", why:"That describes merge sort, a faster recursive sort."},
        {t:"Find the smallest remaining item and swap it into the next position", ok:true, why:"Right. Each pass selects the smallest of the unsorted part and moves it to the end of the sorted part."}
      ]},
   {id:"t2u11-q20", lesson:"t2u11-l3", level:2, q:"Insertion sort runs on `[4, 1, 3]`. What is the list after the **first** insertion?", options:[
        {t:"`[1, 4, 3]`", ok:true, why:"Right. The first item to insert is 1; it slides left past 4. 3 hasn’t been touched yet."},
        {t:"`[1, 3, 4]`", why:"That’s the finished list, after the second insertion."},
        {t:"`[4, 1, 3]`", why:"Something does move: 1 is smaller than 4, so it slides left."},
        {t:"`[3, 1, 4]`", why:"Insertion sort takes items from the left in order. Nothing swaps 4 and 3 here."}
      ]},
   {id:"t2u11-q21", lesson:"t2u11-l3", level:2, q:"Fatima writes `scores = scores.sort()` and then `print(scores)`. What is printed?", options:[
        {t:"The scores, sorted", why:"`.sort()` does sort the list, but it returns `None`, and that `None` is what gets stored in `scores`."},
        {t:"The scores, unsorted", why:"The list was sorted, then thrown away when `scores` was set to `None`."},
        {t:"`None`", ok:true, why:"Right. `.sort()` sorts in place and returns `None`. Write `scores.sort()` on its own line, or `scores = sorted(scores)`."},
        {t:"An error", why:"No error: assigning `None` is allowed. That’s what makes this slip easy to miss."}
      ]},
   {id:"t2u11-q22", lesson:"t2u11-l3", level:2, q:"What does `sorted([\"Zoe\", \"adam\", \"Bea\"])` give?", options:[
        {t:"`['adam', 'Bea', 'Zoe']`", why:"That’s the order people expect, which needs `key=str.lower`. Plain sorting puts capitals first."},
        {t:"`['Bea', 'Zoe', 'adam']`", ok:true, why:"Right. Every capital letter comes before every lowercase one, so “adam” sorts last."},
        {t:"`['Zoe', 'Bea', 'adam']`", why:"Among the capitalized names, B comes before Z."},
        {t:"`['adam', 'Zoe', 'Bea']`", why:"That’s not any sorted order. Capitals come first, then each group is in order."}
      ]},
   {id:"t2u11-q23", lesson:"t2u11-l3", level:3, q:"Mei’s list of 5,000 timestamps is already sorted, except for 3 new ones added at the end. Which of the two sorts from this lesson will do much less work?", options:[
        {t:"Selection sort, because it always does the same work", why:"Doing the same work on any input means it doesn’t benefit from the existing order: about 12.5 million comparisons here."},
        {t:"Insertion sort, since nearly every item is in place", ok:true, why:"Right. Insertion sort makes one comparison for each item already in place (about 5,000). It also makes at most about 5,000 more for each new item it slides left. That is around 20,000 at most, against about 12.5 million for selection sort."},
        {t:"Both do the same amount", why:"Selection sort ignores existing order; insertion sort takes advantage of it."},
        {t:"Neither: sorted data makes both slower", why:"Sorted data is insertion sort’s best case."}
      ]},
   {id:"t2u11-q24", lesson:"t2u11-l3", level:2, q:"`def by_price(item): return item[\"price\"]`. Which line sorts the list `menu` of dictionaries from cheapest to most expensive?", options:[
        {t:"`sorted(menu, key=by_price())`", why:"With brackets, Python calls `by_price` straight away, with no item, and stops with a TypeError. Pass the function itself."},
        {t:"`sorted(menu[\"price\"])`", why:"`menu` is a list, so it can’t be indexed with `\"price\"`: TypeError."},
        {t:"`sorted(menu, key=by_price)`", ok:true, why:"Right. Python calls `by_price` on each dictionary and sorts by the prices it returns."},
        {t:"`menu.sort(by_price)`", why:"`.sort()` only accepts `key` and `reverse` by name. It must be `menu.sort(key=by_price)`."}
      ]},
   {id:"t2u11-q25", lesson:"t2u11-l3", level:3, q:"Sione sorts a class list by name, then sorts that result by school year with a key function. Inside each year, what order are the names in?", options:[
        {t:"Random, because the second sort scrambles the names", why:"Python’s sort is stable, so nothing is scrambled."},
        {t:"Reverse alphabetical", why:"Nothing reverses them. They keep the order from the first sort."},
        {t:"The original order, from before the first sort", why:"The first sort did change the order. The second sort keeps that new order for ties."},
        {t:"Alphabetical: a stable sort keeps the earlier order", ok:true, why:"Right. Students in the same year tie on the key, so they stay in the name order from the first sort."}
      ]},
   {id:"t2u11-q26", lesson:"t2u11-l3", level:2, q:"How many comparisons does selection sort make on 10 items?", options:[
        {t:"10", why:"One per item isn’t enough to find the smallest of the rest each time."},
        {t:"100", why:"That’s 10 × 10. Each pair is compared once, and each pass looks only at the unsorted part."},
        {t:"45", ok:true, why:"Right. 9 + 8 + 7 + … + 1 = 45, which is 10 × 9 ÷ 2."},
        {t:"90", why:"That’s 10 × 9, which counts each pair twice."}
      ]},
   {id:"t2u11-q27", lesson:"t2u11-l3", level:3, q:"Tomás reads room numbers from a file and sorts them. His output starts `'10', '8', '9'`. What’s the cause, and the fix?", options:[
        {t:"They’re strings, compared character by character; sort with `key=int`", ok:true, why:"Right. As text, “1” comes before “8”. `key=int` sorts them as numbers while keeping the strings."},
        {t:"The list is backwards; add `reverse=True`", why:"Reversing would give 9, 8, 10: still wrong. The values are being compared as text."},
        {t:"The sort ran twice; sort only once", why:"Sorting twice gives the same result as sorting once."},
        {t:"`sorted()` is unreliable; use `.sort()` instead", why:"Both compare the same way. The problem is that the values are text."}
      ]},
   {id:"t2u11-q28", lesson:"t2u11-l4", level:1, q:"Why do you subtract two `time.perf_counter()` readings instead of using one?", options:[
        {t:"To convert the result from milliseconds into seconds for printing", why:"Both readings are already in seconds. Subtracting gives the time between them."},
        {t:"Because `perf_counter()` counts down, not up", why:"It counts up. The issue is that its starting point means nothing."},
        {t:"Its starting point is undefined; only differences mean anything", ok:true, why:"Right. Python’s documentation says exactly this: a single value can’t be interpreted; the difference measures elapsed time."},
        {t:"To leave out the time Python took to start up", why:"Subtracting simply measures the code between the two readings, wherever they are."}
      ]},
   {id:"t2u11-q29", lesson:"t2u11-l4", level:1, q:"What does it mean to say an algorithm is O(n)?", options:[
        {t:"It takes exactly n seconds, on any computer", why:"Big-O doesn’t give seconds. It describes how work grows with the size of the input."},
        {t:"It takes the same time whatever n is", why:"That’s O(1), constant."},
        {t:"Its work grows with the square of n", why:"That’s O(n²), quadratic."},
        {t:"Twice the data means about twice the work", ok:true, why:"Right. The work grows in step with n: linear growth, like a single loop over the data."}
      ]},
   {id:"t2u11-q30", lesson:"t2u11-l4", level:2, q:"An O(n) function takes 0.4 seconds for 1 million records. Roughly how long for 2 million?", options:[
        {t:"About 0.8 seconds", ok:true, why:"Right. Linear work doubles when the data doubles."},
        {t:"About 0.4 seconds", why:"Only O(1) work stays the same. This one goes through every record."},
        {t:"About 1.6 seconds", why:"That’s quadratic growth (4 times). Linear growth is 2 times."},
        {t:"About 0.5 seconds", why:"That’s close to logarithmic growth, which is much slower-growing than linear."}
      ]},
   {id:"t2u11-q31", lesson:"t2u11-l4", level:2, q:"What is the Big-O of this code, where `n` is the length of `people`?\n\n`for a in people:`\n`    for b in people:`\n`        if a != b:`\n`            print(a, \"meets\", b)`", options:[
        {t:"O(n)", why:"There are two loops, one inside the other: n passes, each of n steps."},
        {t:"O(log n)", why:"Nothing here halves the data."},
        {t:"O(n²)", ok:true, why:"Right. A loop over the people inside a loop over the people: n × n."},
        {t:"O(1)", why:"The work clearly grows with the number of people."}
      ]},
   {id:"t2u11-q32", lesson:"t2u11-l4", level:3, q:"Ana’s script checks 20,000 order IDs, one at a time, with `if order_id in refunded:`, where `refunded` is a list of 20,000 IDs. It takes minutes. What’s the best fix?", options:[
        {t:"Run the same script on a computer twice as fast", why:"That only halves the time. The real problem is O(n²) work."},
        {t:"Turn `refunded` into a set once, before the loop", ok:true, why:"Right. `in` on a list is a linear search inside a loop (O(n²)). A set makes each check O(1), so the whole job becomes O(n)."},
        {t:"Sort the orders first", why:"The slow part is searching `refunded`, which is still a list searched one item at a time."},
        {t:"Use a `while` loop instead of `for`", why:"The kind of loop doesn’t change how much searching each `in` does."}
      ]},
   {id:"t2u11-q33", lesson:"t2u11-l4", level:1, q:"Which of these is O(log n)?", options:[
        {t:"Linear search", why:"Linear search checks up to every item: O(n)."},
        {t:"Binary search", ok:true, why:"Right. Each check halves what’s left, so doubling n adds just one check."},
        {t:"Selection sort", why:"Selection sort compares about n × n ÷ 2 pairs: O(n²)."},
        {t:"`sum()` of a list", why:"Every item must be added: O(n)."}
      ]},
   {id:"t2u11-q34", lesson:"t2u11-l4", level:3, q:"On 1,000 items, algorithm A (O(n²)) takes 1 second and algorithm B (O(n log n)) takes 3 seconds. Which is likely faster on 1,000,000 items?", options:[
        {t:"A, because it was faster on 1,000 items", why:"Small tests can mislead. A’s work grows a million times; B’s grows only about 2,000 times."},
        {t:"They’ll take about the same time", why:"Their growth rates are completely different, so the gap widens hugely."},
        {t:"You can’t tell anything until you have run both on a million", why:"Big-O exists for exactly this prediction. Timing would confirm it, but the trend is clear."},
        {t:"B, because its work grows far more slowly as the data grows", ok:true, why:"Right. A: about 1 s × 1,000,000 ≈ 11 days. B: about 3 s × 2,000 ≈ 1.7 hours. Growth beats a head start."}
      ]},
   {id:"t2u11-q35", lesson:"t2u11-l4", level:2, q:"Why should you time code several times rather than once?", options:[
        {t:"Because Python gets faster each time you run it", why:"Python doesn’t steadily speed up your program. Runs differ because of the conditions around them."},
        {t:"Because `perf_counter()` is only accurate on the third try", why:"It’s accurate every time. The real elapsed time is what varies."},
        {t:"Because other programs and the computer’s state vary between runs", ok:true, why:"Right. Repeat and compare typical values; Python’s `timeit` module can do the repeating for you."},
        {t:"Because the first run always fails", why:"Nothing fails. One run just isn’t a reliable measurement."}
      ]},
   {id:"t2u11-q36", lesson:"t2u11-l4", level:3, q:"Hana’s sign-up checker has an O(n²) loop. The club has 120 members and it runs instantly. Should she rewrite it now?", options:[
        {t:"Not yet: it’s fast enough; measure again if the club grows", ok:true, why:"Right. Big-O matters as n grows. For small data, readable code is worth more than speed nobody notices."},
        {t:"Yes: O(n²) code must always be rewritten, whatever the data size", why:"There’s no such rule. Optimize when it matters, after measuring."},
        {t:"No: Big-O never matters in real programs", why:"It matters a lot for big data. It just doesn’t matter much here yet."},
        {t:"Yes, and she should buy a faster computer too", why:"Neither is needed while the program is already instant."}
      ]},
   {id:"t2u11-q37", lesson:"t2u11-l5", level:1, q:"In a recursive function, what is the **base case**?", options:[
        {t:"The first line of the function", why:"The base case is a condition and its answer, wherever it sits."},
        {t:"The case that answers directly, without another call", ok:true, why:"Right. It’s where the chain of calls stops. Without it, the calls never end."},
        {t:"The case that calls the function on a smaller problem", why:"That’s the recursive case."},
        {t:"The biggest input the function can handle", why:"It’s usually the *smallest* input, like 0, 1 or an empty list."}
      ]},
   {id:"t2u11-q38", lesson:"t2u11-l5", level:2, q:"Kenji’s recursive function stops with `RecursionError: maximum recursion depth exceeded`. What’s the most likely cause?", options:[
        {t:"His computer doesn’t have enough memory", why:"Python stops runaway recursion long before memory runs out. The limit is about 1,000 calls."},
        {t:"Recursion doesn’t work in saved scripts, only in the REPL", why:"Recursion works the same everywhere."},
        {t:"The function returns a value", why:"Returning a value is normal. The problem is calls that never stop."},
        {t:"A missing base case, or calls that don’t get closer to it", ok:true, why:"Right. Check where it stops, and that every call makes the problem smaller."}
      ]},
   {id:"t2u11-q39", lesson:"t2u11-l5", level:2, q:"What does this print?\n\n`def f(n):`\n`    if n == 1:`\n`        return 1`\n`    return n + f(n - 1)`\n\n`print(f(3))`", options:[
        {t:"3", why:"The first call adds 3 to the result of `f(2)`; it doesn’t stop at 3."},
        {t:"5", why:"That leaves out `f(1)`, which returns 1: 3 + 2 + 1."},
        {t:"6", ok:true, why:"Right. `f(3)` = 3 + `f(2)` = 3 + 2 + `f(1)` = 3 + 2 + 1 = 6."},
        {t:"A RecursionError", why:"There’s a base case (`n == 1`), and each call subtracts 1, so it’s reached."}
      ]},
   {id:"t2u11-q40", lesson:"t2u11-l5", level:3, q:"Priya wants to total a flat list of 100,000 sensor readings with a recursive function that adds the first reading to the total of the rest. What will happen?", options:[
        {t:"It will hit the recursion limit; use a loop or `sum()`", ok:true, why:"Right. One call per reading means 100,000 calls deep, far past the limit of about 1,000. A flat list is a job for a loop."},
        {t:"It will work, just more slowly than a loop", why:"It won’t get that far: Python stops it with a RecursionError."},
        {t:"It will work, because recursion has no limit in Python", why:"Python limits the depth, to about 1,000 calls by default."},
        {t:"It will work if she adds a second base case", why:"Another base case doesn’t reduce the depth. Each call still handles only one reading."}
      ]},
   {id:"t2u11-q41", lesson:"t2u11-l5", level:1, q:"What does `random.seed(42)` do?", options:[
        {t:"It makes the numbers truly random", why:"Python’s random numbers are pseudo-random either way. A seed makes them repeatable, not more random."},
        {t:"It limits the random numbers to whole numbers up to 42", why:"The seed is a starting point, not a limit."},
        {t:"Same seed, same numbers: it makes runs repeatable", ok:true, why:"Right. It fixes where the pseudo-random sequence starts, so the same numbers come out every run: useful for testing and sharing results."},
        {t:"It makes the numbers safe to use for passwords and PINs", why:"The `random` module isn’t for security at all; use the `secrets` module."}
      ]},
   {id:"t2u11-q42", lesson:"t2u11-l5", level:2, q:"Which values can `random.randint(1, 6)` return?", options:[
        {t:"1 to 5: the 6 is left out, as in `range()`", why:"Unlike `range()`, `randint` includes both ends."},
        {t:"Any whole number from 1 to 6, including both", ok:true, why:"Right. That’s why it works as a die roll."},
        {t:"Any decimal number between 1 and 6", why:"For decimals you’d use `random.random()` or `random.uniform()`. `randint` gives whole numbers."},
        {t:"0 to 6", why:"It starts at the first number given, 1."}
      ]},
   {id:"t2u11-q43", lesson:"t2u11-l5", level:3, q:"Lucía simulates an event whose true chance is 0.52. With 100 trials she gets 0.47. What’s the best explanation?", options:[
        {t:"Her code must be wrong, because a simulation should give 0.52", why:"Not necessarily. A simulation gives an estimate, and with few trials chance moves it around."},
        {t:"The seed was wrong", why:"Any seed gives a valid run. A different seed would give a different, equally rough, estimate."},
        {t:"100 trials is too few; more trials should settle nearer 0.52", ok:true, why:"Right. More trials usually means a closer estimate, as the dice and π examples showed."},
        {t:"Monte Carlo methods only work for estimating π", why:"They work for many questions, including probabilities like this one."}
      ]},
   {id:"t2u11-q44", lesson:"t2u11-l5", level:2, q:"While `factorial(4)` runs, which call **finishes first**?", options:[
        {t:"`factorial(4)`", why:"It starts first, and finishes last: it waits for every call below it."},
        {t:"`factorial(3)`", why:"It waits for `factorial(2)`, which waits for `factorial(1)`."},
        {t:"They all finish at the same time", why:"Each call finishes only when the call it’s waiting for has returned."},
        {t:"`factorial(1)`", ok:true, why:"Right. It’s the base case and the newest call (the top of the call stack), so it returns first; each waiting call then finishes in turn."}
      ]},
   {id:"t2u11-q45", lesson:"t2u11-l5", level:3, q:"A simulation of a café assumes customers arrive steadily, one every 2 minutes all day. It says one person behind the counter is always enough. What should you question first?", options:[
        {t:"The assumption of steady arrivals, since real cafés have rushes", ok:true, why:"Right. A simulation is only as good as its assumptions. With lunchtime rushes, the result could be very different."},
        {t:"The choice of seed", why:"A seed changes which random numbers appear, not the model’s basic assumptions."},
        {t:"Whether Python was the right language", why:"The language doesn’t matter. The model of the world does."},
        {t:"Nothing: a simulation’s result is the true answer for that café", why:"They give estimates under their assumptions, which is why the assumptions need checking."}
      ]}
  ]
});
