/* Track 1 · Unit 1 · How computers work */
ICA.addUnit({
  id:"t1u1", track:"t1", n:1, title:"How computers work", icon:"🖥️",
  blurb:"What is actually inside the phone, laptop or tablet you use every day, how it stores and measures information, what the operating system does, and how to give your device first aid when something goes wrong.",
  goals:[
    "Describe any device as input, processing, storage and output, and tell hardware from software",
    "Explain what the CPU, RAM, storage and GPU each do, and read a real spec sheet with confidence",
    "Convert between bits, bytes, KB, MB, GB and TB, and between Mbps and MB/s, without the usual mistakes",
    "Explain what an operating system does and install apps from safe, official sources",
    "Give a misbehaving device sensible first aid and describe a problem clearly when you ask for help"
  ],
  read:[
    {book:"wss", where:"Chapter 1, “Technology in Everyday Life and Business”, Section 1.2 “Computer Hardware and Networks”", note:"A friendly overview of computer parts, operating systems and storage."},
    {book:"ics", where:"Chapter 5, “Hardware Realizations of Algorithms: Computer Systems Design”, Sections 5.1 “Computer Systems Organization” and 5.5 “Memory Hierarchy”", note:"A deeper, more technical look. Read it when you want the why behind the parts."},
    {book:"ics", where:"Chapter 6, “Infrastructure Abstraction Layer: Operating Systems”, Section 6.1 “What Is an Operating System?”"}
  ],
  lessons:[
  /* ================= LESSON 1 ================= */
  {
    id:"t1u1-l1", title:"What a computer is", minutes:45,
    goals:[
      "Describe any device using four jobs: input, processing, storage and output",
      "Tell hardware from software (and spot the firmware in between)",
      "Recognise the many kinds of computers around you, including servers",
      "Explain in one sentence what “the cloud” physically is"
    ],
    learn:[
      {h:"A machine that follows instructions", body:[
        {lead:"A computer is a machine that takes in information, follows a list of instructions to change it, keeps it, and gives you a result."},
        "Think of a cook working from a recipe. Ingredients come in. The cook follows the recipe step by step. Some things go into the fridge for later. A finished dish comes out. A [[computer]] does the same kind of work, except its ingredients are numbers, letters, pictures and sounds, and its recipe is a **program**: a precise list of instructions written by people.",
        "The precise version: a computer is an electronic device that accepts [[input]], **processes** it according to stored instructions, **stores** data and instructions, and produces [[output]]. Two things make it different from a calculator or a toaster. First, it is **programmable**: load different instructions and the same machine becomes a word processor, a video player or a map. Second, it works on **data** of any kind, because everything (text, photos, music, maps) is turned into numbers inside it. Lesson 3 shows how.",
        {key:"A computer = input → processing → output, with storage keeping things for later. Everything else in this unit is detail on those four jobs."}
      ]},
      {h:"The four jobs: input, processing, storage, output", body:[
        "Every computer, from a smartwatch to a data-centre [[server]], does the same four jobs. Learning to see them is the most useful habit in this whole unit, because when something goes wrong you can ask: “Which of the four jobs is failing?”",
        {table:[
          ["Job","What it means","Examples of parts"],
          ["**Input**","Information coming **into** the computer","Keyboard, mouse, touchscreen, microphone, camera, fingerprint reader, sensors (GPS, motion)"],
          ["**Processing**","Following instructions to work on the information","The [[cpu|processor (CPU)]], the [[gpu|graphics processor (GPU)]], with [[ram|RAM]] as their working space"],
          ["**Storage**","Keeping information for later, even when the power is off","[[ssd|SSD]], [[hdd|hard disk drive]], memory card, USB stick"],
          ["**Output**","Information going **out** to you or another device","Screen, speakers, headphones, printer, vibration motor"]
        ]},
        {fig:'<svg viewBox="0 0 340 250"><defs><marker id="t1u1-l1-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="9.4" y="12" width="170" height="54" rx="10" stroke-width="2"/><text x="94.4" y="35" text-anchor="middle">Input</text><text class="s" x="94.4" y="54" text-anchor="middle">keyboard, mic, camera</text><path class="d-ink" d="M94.4,67 L94.4,94" stroke-width="2" marker-end="url(#t1u1-l1-mk)"/><rect class="d-rose" x="9.4" y="98" width="170" height="54" rx="10" stroke-width="2"/><text x="94.4" y="121" text-anchor="middle">Processing</text><text class="s" x="94.4" y="140" text-anchor="middle">CPU follows the program</text><path class="d-ink" d="M94.4,153 L94.4,180" stroke-width="2" marker-end="url(#t1u1-l1-mk)"/><rect class="d-sage" x="9.4" y="184" width="170" height="54" rx="10" stroke-width="2"/><text x="94.4" y="207" text-anchor="middle">Output</text><text class="s" x="94.4" y="226" text-anchor="middle">screen, speaker, printer</text><rect class="d-gold" x="222.9" y="80" width="107.7" height="90" rx="10" stroke-width="2"/><text x="276.7" y="106" text-anchor="middle">Storage</text><text class="s" x="276.7" y="128" text-anchor="middle">keeps files</text><text class="s" x="276.7" y="144" text-anchor="middle">with the</text><text class="s" x="276.7" y="160" text-anchor="middle">power off</text><path class="d-ink" d="M181.3,114 L219.1,114" stroke-width="2" marker-end="url(#t1u1-l1-mk)"/><path class="d-ink" d="M221,136 L183.2,136" stroke-width="2" marker-end="url(#t1u1-l1-mk)"/><text class="s" x="201.2" y="106" text-anchor="middle">save</text><text class="s" x="201.2" y="154" text-anchor="middle">open</text></svg>', alt:"Diagram: Input flows down into Processing, and Processing flows down to Output. Beside Processing sits Storage: Processing saves to Storage and opens from Storage, shown by two arrows in opposite directions.", cap:"The four jobs. Processing sits in the middle: it takes input, saves to and opens from storage, and sends results to output."},
        {ex:"Amara takes a photo of a receipt for her small business.\n**Input:** the camera sensor captures light; her tap on the shutter button is input too.\n**Processing:** the phone’s processor turns the sensor readings into an image, sharpens it and shrinks it into a JPEG file.\n**Storage:** the photo is saved to the phone’s storage, so it is still there tomorrow.\n**Output:** the photo appears on the screen; later she sends it by email, which is output to another computer.", label:"Worked example"},
        "Some parts do two jobs. A **touchscreen** is both input (it senses your finger) and output (it shows the picture). A **network connection** is both: messages come in and go out. That is normal; the four jobs describe what is happening, not which box a part lives in."
      ]},
      {h:"Hardware and software", body:[
        "[[hardware|Hardware]] is every physical part you could, in principle, touch: the screen, the keyboard, the chips, the battery, the cables. [[software|Software]] is the instructions: programs and the data they use. You cannot touch software, but you can see its effects.",
        "A useful analogy is a piano and sheet music. The piano is hardware. The music is software. The same piano can play thousands of pieces, and a new piece of music does not need a new piano. That is why a phone can gain new features overnight through an update: the hardware stays the same, the software changes.",
        {table:[
          ["Hardware","Software"],
          ["Physical; you can touch it","Instructions and data; you can’t touch it"],
          ["Wears out, breaks, can be replaced","Can be copied, updated, deleted, reinstalled"],
          ["Examples: processor, screen, battery, mouse, charger","Examples: operating system, web browser, photo app, a game"],
          ["Upgrading usually costs money and a screwdriver","Upgrading is often a free download"]
        ]},
        "Between the two sits [[firmware]]: software that is stored inside a piece of hardware and controls it at the lowest level, such as the program that starts your computer before the operating system loads, or the software inside a printer or wireless router. You will meet firmware again in Lesson 4.",
        {warn:"A common mix-up: “My laptop is slow, so the hardware is old.” Often the cause is software: too many programs open, a stuck update, or something running in the background. Lesson 5 shows how to check before blaming (or replacing) the hardware."}
      ]},
      {h:"Many kinds of computers", body:[
        "When people say “computer” they often picture a desktop or laptop. In fact you probably use a dozen computers every day. Anything with a processor running a program counts.",
        {table:[
          ["Kind","Typical input","Typical output","Worth knowing"],
          ["Phone","Touchscreen, mic, cameras, GPS","Screen, speaker, vibration","A full computer in your pocket, often more powerful than older laptops"],
          ["Tablet","Touchscreen, stylus, keyboard cover","Screen, speakers","Between a phone and a laptop; runs phone-style apps"],
          ["Laptop / desktop","Keyboard, mouse or trackpad, webcam","Screen, speakers, printer","Best for long typing, big spreadsheets, many windows"],
          ["Smart TV, games console","Remote, controller, voice","Large screen, sound","Runs apps and gets software updates like a phone"],
          ["Smartwatch, fitness band","Touch, heart-rate and motion sensors","Small screen, vibration","Usually paired with a phone"],
          ["Car","Pedals, sensors, buttons, voice","Dashboard screen, engine control","Modern cars contain many small computers"],
          ["Wi-Fi router","Network traffic","Network traffic","A computer with no screen; has firmware that needs updates"],
          ["Server","Requests from other computers","Web pages, email, files","Serves other computers over a network, usually in a data centre"]
        ]},
        "Small computers built into other products (a washing machine, a thermostat, a car’s braking system) are called **embedded** computers. You rarely see them, but they follow the same four jobs. The practical lesson: anything that runs software can have bugs, needs updates, and can be a security risk. That is why Unit 3 talks about routers and smart devices, not just laptops."
      ]},
      {h:"Servers, data centres and what “the cloud” physically is", body:[
        "A [[server]] is a computer whose job is to serve other computers. When you open a website, your phone (the **client**) sends a request across the internet, and a server somewhere sends back the page. Servers usually have no screen or keyboard of their own. Thousands of them are stacked in racks inside large buildings called **data centres**, with powerful cooling, backup power and fast network links.",
        "That is all “[[cloud|the cloud]]” is: storage and processing on **other people’s computers**, run by a company, that you reach over the internet. When Lucía “saves to the cloud”, her photos are copied onto storage drives in servers in one or more data centres. They are real files on real hardware; she just doesn’t own or see that hardware.",
        {tip:"Cloud storage is useful (your files survive if your phone is lost) but it is not magic. It depends on your internet connection, your account, and the provider. Unit 2 covers cloud storage, syncing and backups properly."}
      ]},
      {h:"Why this model matters in real life", body:[
        "The four-jobs model is not just theory. It is the first question a good technician asks. Look at these everyday problems through it:",
        {list:[
          "**Kenji’s keyboard types nothing.** An input problem: check the cable or Bluetooth connection and the battery before anything else.",
          "**Priya’s phone says “Storage almost full” and can’t take photos.** A storage problem: the camera and processor are fine; there is simply no room to save.",
          "**Tomás’s laptop screen is black, but he hears the start-up sound.** The computer is processing; the output path (screen, brightness, display cable or settings) is the suspect.",
          "**Mei’s laptop freezes when she has a video call and twenty browser tabs open.** Processing and working memory are overloaded. Closing tabs usually helps more than deleting files."
        ]},
        "A few misconceptions to drop now:",
        {list:[
          "“The internet is inside my computer.” The internet is a network connecting computers; your device sends and receives data over it.",
          "“My files live inside the app.” Apps open and save files, but the files are kept in storage (on your device or on a server). Delete the app and the files may or may not survive, depending on where they were stored.",
          "“Phones aren’t real computers.” A modern phone has a processor, working memory, storage, an operating system and apps: every part this unit describes."
        ]},
        {key:"When something goes wrong, ask which job is failing: input, processing, storage or output. The answer tells you where to look first."}
      ]}
    ],
    try:[
      {id:"t1u1-l1-x1", type:"sort", q:"Sort each part by its **main** job.", buckets:["Input","Processing","Storage","Output"], items:[
        {t:"Microphone", b:0, why:"It turns your voice into data going into the computer."},
        {t:"Webcam", b:0, why:"It captures images and sends them in."},
        {t:"Processor (CPU)", b:1, why:"It carries out the program’s instructions on the data."},
        {t:"SSD", b:2, why:"It keeps files when the power is off, which is storage."},
        {t:"USB flash drive", b:2, why:"It keeps files you can carry to another computer; it doesn’t calculate or display anything."},
        {t:"Printer", b:3, why:"It puts results onto paper, which is output."},
        {t:"Headphones", b:3, why:"Sound comes out of the computer to you."}
      ], why:"Each part has a main job. Some parts (a touchscreen, a network connection) do two, but these seven each have one clear job."},
      {id:"t1u1-l1-x2", type:"sort", q:"Hardware or software?", buckets:["Hardware","Software"], items:[
        {t:"Web browser", b:1, why:"A program: instructions you install and update, with nothing to touch."},
        {t:"Charging cable", b:0, why:"A physical object."},
        {t:"Operating system", b:1, why:"The main program that runs the device. It is software even though it comes pre-installed."},
        {t:"Wi-Fi chip", b:0, why:"A physical part on the circuit board that sends and receives radio signals."},
        {t:"Spreadsheet app", b:1, why:"A program you open to work with tables of numbers."},
        {t:"Battery", b:0, why:"A physical part that stores electrical energy."},
        {t:"A downloaded game", b:1, why:"Instructions and data on your storage. You can delete and reinstall it."}
      ]},
      {id:"t1u1-l1-x3", type:"mcq", q:"Which of these are computers? Choose all that apply.", options:[
        {t:"A smartwatch", ok:true, why:"It has a processor, memory, storage and an operating system, and it runs apps."},
        {t:"A home Wi-Fi router", ok:true, why:"It runs firmware on a processor to direct network traffic. It has no screen, but it is a computer (and needs updates)."},
        {t:"A smart TV", ok:true, why:"It runs an operating system and apps, and it receives software updates."},
        {t:"A paper notebook", why:"It stores information, but it cannot process anything or follow instructions."},
        {t:"A wind-up mechanical clock", why:"Gears keep time, but there is no program and no data processing. It can’t be programmed to do anything else."}
      ], why:"A computer follows stored instructions to process data. Screens and keyboards are optional."},
      {id:"t1u1-l1-x4", type:"order", q:"Priya sends a voice message to her community group. Put what happens in order.", items:[
        {t:"She holds the record button and speaks into the microphone", why:"Input comes first: the microphone turns sound into a signal."},
        {t:"The processor turns the sound into digital data and compresses it", why:"Processing: the program converts and shrinks the recording."},
        {t:"The message is saved in her phone’s storage", why:"Storage: the file is kept so it can be sent and replayed."},
        {t:"The phone sends it over the network to a server", why:"Output to the network: the data leaves her phone."},
        {t:"A friend’s phone downloads it and plays it through the speaker", why:"Finally, output to a person, on another computer."}
      ]},
      {id:"t1u1-l1-x5", type:"mcq", q:"Lucía taps “Back up photos to the cloud”. Physically, where do her photos end up?", options:[
        {t:"On storage drives in servers, in data centres run by the service provider", ok:true, why:"The cloud is other organisations’ computers that you reach over the internet. Her photos are real files on real drives."},
        {t:"Floating in the internet itself, not on any particular machine", why:"Data always has to be stored on some physical hardware. The internet only carries data between computers."},
        {t:"In a satellite orbiting the Earth", why:"Satellites can carry internet signals in some places, but cloud storage lives in ground-based data centres."},
        {t:"Only on her phone, with a link to it online", why:"That would not protect her photos if the phone were lost. A cloud backup copies the files onto the provider’s servers."}
      ]},
      {id:"t1u1-l1-x6", type:"match", q:"Match each problem to the job that is most likely failing.", pairs:[
        ["Letters you type don’t appear anywhere","Input","Nothing is getting into the computer. Check the keyboard connection or battery first."],
        ["“Storage full: can’t save photo”","Storage","The camera and processor work; there is no room left to keep the file."],
        ["Screen stays black but you hear the start-up sound","Output","The computer is running (you hear it). The picture isn’t reaching you."],
        ["Everything freezes when many apps are open","Processing","The processor and working memory are overloaded by too much running at once."]
      ]}
    ],
    apply:{
      intro:"Look at your own device with the four-jobs model, and find out exactly what it is.",
      tasks:[
        {t:"Find the name, model and operating system of the device you’re using", how:{
          win:["Select **Start**, then **Settings**.","Go to **System → About**.","Under **Device specifications** note the device name; under **Windows specifications** note the **Edition** and **Version**."],
          mac:["Click the **Apple menu** (top-left corner).","Choose **About This Mac**.","Note the model name, the chip or processor, and the macOS name and version."],
          chromeos:["Select the time in the bottom-right corner, then the **Settings** gear.","Select **About ChromeOS** (bottom-left).","Note the ChromeOS version. The device model is usually printed on a sticker underneath, or shown in the **Diagnostics** app (search for it in the Launcher)."],
          phone:["**iPhone:** open **Settings → General → About**. Note the **Model Name** and **iOS Version**.","**Android:** open **Settings → About phone** (on tablets, **About tablet**). Note the model and the **Android version**. Some makers put the version under **Software information**."]
        }},
        {t:"Make a four-jobs map of that device", how:["On paper or in a note, write four headings: Input, Processing, Storage, Output.","List every part of your device you can find under each heading (include sensors, buttons and wireless connections).","Mark any part that does two jobs, such as a touchscreen."]},
        {t:"Count the computers in your day", how:["Over one day, jot down every device you use that runs software (phone, TV, car, card reader at a shop, ticket gate, router).","Next to each, note one input and one output."]}
      ],
      proof:"A short note with your device’s model and operating system version, and a four-jobs map listing at least two parts under each heading."
    },
    read:[
      {book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”: “What Is a Computer?” and “How Computers Work”"},
      {book:"ics", where:"Chapter 5, Section 5.1 “Computer Systems Organization”: “Computer Systems” and “Hardware Organization of Systems”"}
    ]
  },
  /* ================= LESSON 2 ================= */
  {
    id:"t1u1-l2", title:"Inside the machine", minutes:55,
    goals:[
      "Explain what the CPU, RAM, storage and GPU each do, in plain words",
      "Tell memory (RAM) from storage and use the words correctly",
      "Compare SSDs and hard disk drives",
      "Recognise common ports and wireless connections",
      "Read a real spec sheet and pick out what matters for everyday study and work"
    ],
    learn:[
      {h:"The processor (CPU): the cook", body:[
        {lead:"The [[cpu|central processing unit (CPU)]], or processor, is the part that actually carries out instructions."},
        "Back to the kitchen. The CPU is the cook. It reads one instruction at a time (“add these two numbers”, “copy this from here to there”, “if this is bigger, jump to that step”) and does it, astonishingly fast. Everything you see a computer do is built from billions of these tiny steps.",
        "Two numbers describe a processor on a spec sheet:",
        {list:[
          "**Cores.** A [[core]] is one complete cook inside the chip. A 4-core processor is like four cooks in one kitchen: they can work on different tasks at the same time, such as your video call, your browser and a background update.",
          "**Clock speed.** The [[clock-speed|clock speed]] is how many steps per second each core can take, measured in gigahertz (GHz). 1 GHz means one billion cycles per second. You will often see two numbers, such as “base 2.0 GHz, up to 4.5 GHz”: the chip speeds up for short bursts and slows down to save power and stay cool."
        ]},
        {warn:"You can’t compare processors by GHz alone. A newer design can do more work per cycle, so a newer 2.5 GHz chip can beat an older 3.5 GHz one. Compare model names and generations, or look up independent reviews, rather than trusting one number."},
        "In phones, tablets and many laptops, the CPU is part of a single chip that also contains the graphics processor and other parts. This is called a [[system-on-chip|system on a chip (SoC)]]. The idea is the same: there are still cores carrying out the instructions."
      ]},
      {h:"Memory (RAM) vs storage: the most common confusion", body:[
        "This is the mix-up that trips up almost everyone, including some shop assistants, so it is worth getting perfectly clear.",
        {list:[
          "[[ram|RAM]] (random-access memory) is the **countertop** where the cook works. Whatever you have open right now (apps, browser tabs, the document you are typing) sits in RAM so the CPU can reach it instantly. RAM is very fast but **volatile**: it empties when the power goes off.",
          "[[storage|Storage]] is the **pantry and fridge**. It keeps your files, apps and the operating system permanently, even with the power off. It is much bigger than RAM but slower."
        ]},
        {fig:'<svg viewBox="0 0 340 380"><defs><marker id="t1u1-l2-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-rose" x="18.9" y="14" width="170" height="60" rx="10" stroke-width="2"/><text x="103.9" y="40" text-anchor="middle">CPU</text><text class="s" x="103.9" y="60" text-anchor="middle">does the work</text><path class="d-ink" d="M85,76 L85,110" stroke-width="2" marker-end="url(#t1u1-l2-mk)"/><path class="d-ink" d="M122.8,110 L122.8,76" stroke-width="2" marker-end="url(#t1u1-l2-mk)"/><rect class="d-lup" x="18.9" y="114" width="170" height="76" rx="10" stroke-width="2"/><text x="103.9" y="138" text-anchor="middle">RAM</text><text class="s" x="103.9" y="157" text-anchor="middle">what’s open now</text><text class="s" x="103.9" y="175" text-anchor="middle">empties at power-off</text><path class="d-ink" d="M85,192 L85,226" stroke-width="2" marker-end="url(#t1u1-l2-mk)"/><path class="d-ink" d="M122.8,226 L122.8,192" stroke-width="2" marker-end="url(#t1u1-l2-mk)"/><text class="s" x="75.6" y="213" text-anchor="end">save</text><text class="s" x="132.2" y="213">open</text><rect class="d-gold" x="18.9" y="230" width="170" height="76" rx="10" stroke-width="2"/><text x="103.9" y="254" text-anchor="middle">Storage</text><text class="s" x="103.9" y="273" text-anchor="middle">SSD or HDD</text><text class="s" x="103.9" y="291" text-anchor="middle">keeps files, no power</text><path class="d-ink" d="M226.7,26 L226.7,294" stroke-width="2" marker-start="url(#t1u1-l2-mk)" marker-end="url(#t1u1-l2-mk)"/><text x="238" y="40">faster,</text><text x="238" y="58">smaller</text><text x="238" y="268">bigger,</text><text x="238" y="286">slower</text><rect class="d-panel" x="9.4" y="320" width="321.1" height="50" rx="8" stroke-width="1"/><text class="s" x="170" y="341" text-anchor="middle">Open a file: storage → RAM → CPU.</text><text class="s" x="170" y="359" text-anchor="middle">Save: RAM → storage.</text></svg>', alt:"Diagram: CPU, RAM and Storage stacked from top to bottom, with two-way arrows between CPU and RAM, and between RAM and Storage. Opening a file copies it from storage into RAM for the CPU; saving copies it from RAM back to storage. A side arrow shows that towards the CPU things are faster and smaller; towards storage they are bigger and slower, and storage keeps files without power.", cap:"When you open a file it is copied from storage into RAM, where the CPU works on it. Saving copies your changes back to storage."},
        {table:[
          ["","RAM (memory)","Storage"],
          ["Job","Holds what is open right now","Keeps files, apps and the operating system"],
          ["Power off","Empties","Keeps everything"],
          ["Speed","Very fast","Slower (SSDs are much faster than hard disks)"],
          ["Typical size","Usually a few to a few dozen GB","Often tens to thousands of GB"],
          ["Shortage feels like","Slowness when many things are open; apps reloading","“Storage full” messages; can’t save, install or update"],
          ["Phone box usually shows","Often not shown at all","The big number, such as 128 GB or 256 GB"]
        ]},
        {ex:"Tomás says: “My phone has 256 GB of memory.” His phone box says **256 GB**. That number is **storage**. His phone’s RAM is a much smaller number that the box may not even mention.\n\nHana’s laptop is slow with thirty tabs open. Deleting holiday videos (storage) won’t help much. Closing tabs and apps (freeing RAM) will.", label:"Worked example"},
        {key:"RAM is the workspace; storage is the cupboard. Not enough RAM makes a device slow; not enough storage stops it saving and updating."},
        "One honest complication: when RAM fills up, the operating system moves some of it into storage temporarily (called swap, paging or a page file). That keeps things working but slows them down, which is one reason a nearly-full drive can also make a computer sluggish."
      ]},
      {h:"Storage drives: SSD vs hard disk", body:[
        "There are two main kinds of storage drive.",
        {list:[
          "A [[hdd|hard disk drive (HDD)]] stores data magnetically on spinning metal platters, read by a tiny arm that moves across them, a little like a record player. Moving parts make it slower and more fragile, but it gives a lot of space for the price.",
          "A [[ssd|solid-state drive (SSD)]] stores data in **flash memory** chips with no moving parts, the same family of technology as USB sticks and phone storage. It is much faster, silent and better at surviving bumps."
        ]},
        {table:[
          ["","SSD","HDD"],
          ["How it stores data","Flash memory chips","Magnetic spinning platters"],
          ["Speed","Much faster: quicker start-up and app opening","Slower, especially with many small files"],
          ["Moving parts","None","Yes, so more sensitive to drops"],
          ["Noise","Silent","Can hum or click"],
          ["Cost per terabyte","Higher","Lower, popular for big backup drives"]
        ]},
        "Phones, tablets and many low-cost laptops use flash storage soldered onto the main board (you may see names like **eMMC** or **UFS** on spec sheets). It works like an SSD but usually can’t be upgraded later, so choose enough storage when you buy.",
        {tip:"For the drive your operating system runs from, an SSD makes the single biggest difference to how fast a computer feels in daily use. Hard disks are still sensible for large external backup drives."}
      ]},
      {h:"Graphics, the motherboard, power and cooling", body:[
        "The [[gpu|graphics processing unit (GPU)]] is a processor built for doing many simple calculations at once. It draws everything on your screen, plays video smoothly, and powers games, photo and video editing, and many AI tasks. Most laptops and phones have an **integrated** GPU built into the main chip, which is fine for everyday work and video. A **dedicated** (separate) GPU adds power for gaming, 3D design or video editing, at the cost of price, heat and battery life.",
        "The [[motherboard]] (main board, logic board) is the large circuit board that connects everything: processor, RAM, storage, ports, wireless chips. Think of it as the building’s wiring and corridors.",
        "**Power** comes from a battery (portable devices) or a power supply unit (desktops). **Cooling** matters because processors turn electricity into heat. Laptops use fans and heat pipes; phones and some thin laptops are cooled passively. When a chip gets too hot it slows itself down to protect itself, which you feel as sudden sluggishness.",
        {warn:"Keep vents clear: using a laptop on a bed or cushion can block air flow and make it slow down or overheat. A swollen battery, a burning smell or a device too hot to hold are reasons to stop using it and get help (Lesson 5)."}
      ]},
      {h:"Ports, cables and wireless connections", body:[
        "A [[port]] is a socket where you plug something in. A [[peripheral]] is any extra device you connect: a mouse, keyboard, printer, monitor, external drive, headset. Here are the ones you meet most often:",
        {table:[
          ["Connection","What it looks like","Typical use"],
          ["[[usb|USB-A]]","Flat rectangle, only fits one way up","Mice, keyboards, USB sticks, older chargers"],
          ["[[usb|USB-C]]","Small oval, fits either way up","Charging, data, monitors, docks, most new phones and laptops"],
          ["[[hdmi|HDMI]]","Wide, with slanted corners","Monitors, TVs, projectors"],
          ["Headphone jack","Small round hole","Wired headphones and microphones"],
          ["Ethernet","Like a wide phone plug with a clip","Wired network connection to a router"],
          ["[[bluetooth|Bluetooth]]","No plug: short-range radio","Wireless headphones, mice, keyboards, watches"],
          ["Wi-Fi","No plug: radio","Connecting to a wireless network and the internet"]
        ]},
        {warn:"**USB-C is a shape, not a promise.** The same oval plug can carry slow or fast data, small or large amounts of charging power, and sometimes a video signal to a monitor, but only if the port, the cable **and** the device all support that feature. If a monitor shows nothing over USB-C, the port or cable may simply not carry video. Look for small symbols next to the port, or check the maker’s spec sheet."},
        "Some USB-C ports are also labelled **Thunderbolt** (a lightning-bolt symbol). They use the same shape and add extra speed and features. A Thunderbolt port works with ordinary USB-C devices too."
      ]},
      {h:"Reading a real spec sheet", body:[
        "A [[spec-sheet|spec sheet]] (specifications) is the list of parts printed on a shop page or box. It looks intimidating, but you now know most of the words. Here is a made-up but typical example:",
        {ex:"Processor:  8-core, up to 4.4 GHz\nMemory:     16 GB RAM\nStorage:    512 GB SSD\nGraphics:   Integrated\nDisplay:    14-inch, 1920 × 1200\nPorts:      2 × USB-C (charging + display), 1 × USB-A, HDMI, headphone jack\nWireless:   Wi-Fi 6E, Bluetooth 5.3\nBattery:    up to 12 hours (maker’s claim)\nWeight:     1.4 kg\nOS:         Windows 11 Home", label:"A spec sheet", mono:true},
        "How to read it for everyday study and work (documents, browsing, video calls, spreadsheets):",
        {ol:[
          "**Check the operating system first.** It decides which apps you can run. If your course, workplace or favourite app needs a specific one, that settles it.",
          "**RAM:** more RAM lets you keep more open at once. If you use many browser tabs plus a video call, extra RAM is often what you notice most. Check the recommended (not minimum) requirements of the software you rely on.",
          "**Storage type and size:** prefer an SSD (or flash storage) to a hard disk for the main drive. Leave room for growth: the operating system and its updates take a large share, and phones and many laptops can’t be upgraded later.",
          "**Processor:** for everyday tasks almost any current processor is fine. Compare model generations, not just GHz.",
          "**Ports:** make sure you can plug in what you already own (monitor, USB stick, headset) without a bag of adapters.",
          "**Battery, screen, weight:** battery figures are the maker’s best case; real use is usually shorter. Read independent reviews.",
          "**Updates:** check how long the maker promises security updates. A cheap device that stops getting updates soon is a security risk (Unit 3)."
        ]},
        {key:"For everyday work the usual priorities are: the right operating system, enough RAM, an SSD with room to spare, and the ports you need. The processor’s GHz is rarely the deciding number."}
      ]}
    ],
    try:[
      {id:"t1u1-l2-x1", type:"mcq", q:"Tomás’s phone box says **8 GB RAM · 256 GB**. He tells a friend, “My phone has 256 GB of memory.” What is the 256 GB actually measuring?", options:[
        {t:"Storage: the space for photos, apps and files that stays when the phone is off", ok:true, why:"The big number on a phone box is storage. RAM is the 8 GB figure."},
        {t:"RAM: the working memory for open apps", why:"The RAM here is 8 GB. Storage is usually many times larger than RAM, which is a good clue."},
        {t:"The speed of the processor", why:"Processor speed is measured in GHz, not GB. GB measures an amount of data."},
        {t:"How much mobile data he can use each month", why:"That depends on his phone plan, not on the phone itself."}
      ], why:"In everyday speech people say “memory” for both, but on a spec sheet RAM and storage are different parts."},
      {id:"t1u1-l2-x2", type:"sort", q:"Does each statement describe RAM or storage?", buckets:["RAM","Storage"], items:[
        {t:"Empties when the power goes off", b:0, why:"RAM is volatile: it needs power to hold data."},
        {t:"Still has your photos after a restart", b:1, why:"Storage keeps data without power."},
        {t:"Holds the apps and tabs you have open right now", b:0, why:"Open work sits in RAM so the processor can reach it fast."},
        {t:"Where the operating system is installed", b:1, why:"The OS is kept on the storage drive and loaded into RAM when the device starts."},
        {t:"Running short makes the device slow when many things are open", b:0, why:"Too little RAM forces the system to juggle, which feels slow."},
        {t:"Running short gives “can’t install update” messages", b:1, why:"Updates need free space on the storage drive."}
      ]},
      {id:"t1u1-l2-x3", type:"match", q:"Match each part to the kitchen job it is most like.", pairs:[
        ["CPU","The cook who follows the recipe","The CPU carries out instructions, one tiny step at a time."],
        ["RAM","The countertop where today’s ingredients are laid out","RAM holds what is in use right now and is cleared at the end of the day."],
        ["SSD or hard disk","The pantry and fridge that keep food for later","Storage keeps things when the power (the cook) is gone."],
        ["Motherboard","The corridors and wiring that connect every room","It connects every part so they can pass data and power."],
        ["Fan and heat pipes","The kitchen’s ventilation","Cooling carries away heat so the processor doesn’t have to slow down."]
      ]},
      {id:"t1u1-l2-x4", type:"mcq", q:"Hana’s laptop crawls during video calls. Task Manager shows **Memory 95% used**, and Settings → Storage shows the drive is only **40% full**. What is most likely to help right away?", options:[
        {t:"Close browser tabs and apps she isn’t using during the call", ok:true, why:"Memory (RAM) is nearly full, so freeing RAM gives the call room to run."},
        {t:"Delete old photos to free up storage", why:"Storage is only 40% full, which is plenty of room. Deleting files frees storage, not RAM."},
        {t:"Buy a bigger external hard drive", why:"An external drive adds storage, which isn’t the bottleneck here."},
        {t:"Turn up the screen brightness", why:"Brightness is an output setting; it has nothing to do with memory pressure."}
      ], why:"Always look at which resource is full before deciding what to fix."},
      {id:"t1u1-l2-x5", type:"spot", q:"Oluwaseun is choosing a budget Windows 11 laptop for study. Tap the specs that are likely to make it frustrating for everyday work.", ask:"is a likely problem", mono:true, parts:[
        "Processor: ",{t:"4-core, up to 3.4 GHz", flag:false, why:"Plenty for documents, browsing and video calls."},
        "\nMemory: ",{t:"4 GB RAM", flag:true, why:"That is exactly Windows 11’s minimum. A browser with several tabs plus a video call will often feel slow."},
        "\nStorage: ",{t:"64 GB eMMC", flag:true, why:"That is exactly Windows 11’s minimum storage, and Microsoft notes updates may need more over time. Little room is left for files, and it usually can’t be upgraded."},
        "\nDisplay: ",{t:"14-inch, 1920 × 1080", flag:false, why:"A normal, sharp resolution for this size."},
        "\nPorts: ",{t:"USB-C, USB-A, HDMI", flag:false, why:"A useful mix: chargers, USB sticks and an external monitor all fit."},
        "\nWireless: ",{t:"Wi-Fi 6, Bluetooth 5", flag:false, why:"Current wireless standards; nothing to worry about."}
      ], why:"Meeting the bare minimum is not the same as being comfortable. RAM and storage at the minimum are the usual causes of a frustrating cheap laptop."},
      {id:"t1u1-l2-x6", type:"mcq", q:"Ana plugs her laptop into a monitor with a USB-C cable that charges her phone fine. The monitor says “No signal”. What is the most likely reason?", options:[
        {t:"The cable or the laptop’s port doesn’t carry a video signal, even though it fits", ok:true, why:"USB-C is a shape. Video over USB-C needs the port, the cable and the monitor to support it."},
        {t:"USB-C can never carry video", why:"Many USB-C ports do carry video; it depends on the port and the cable."},
        {t:"The laptop needs more RAM to use a monitor", why:"RAM has nothing to do with whether a signal reaches the monitor."},
        {t:"The monitor is broken, because the cable works with her phone", why:"A cable that charges a phone may carry only power and slow data. That says nothing about the monitor."}
      ]},
      {id:"t1u1-l2-x7", type:"sort", q:"SSD or hard disk drive (HDD)?", buckets:["SSD","HDD"], items:[
        {t:"Stores data on spinning magnetic platters", b:1, why:"That is how a hard disk works, with a moving read arm."},
        {t:"No moving parts", b:0, why:"An SSD uses flash memory chips."},
        {t:"Usually cheaper per terabyte, so popular for big backup drives", b:1, why:"Hard disks still give the most space for the money."},
        {t:"Makes a laptop start up and open apps much faster", b:0, why:"SSDs are many times faster than hard disks."},
        {t:"More easily damaged if dropped while running", b:1, why:"The moving arm and spinning platters are sensitive to knocks."},
        {t:"Same family of technology as a USB stick", b:0, why:"Both use flash memory."}
      ]}
    ],
    apply:{
      intro:"Find the real specs of the device you’re using, and practise reading a spec sheet.",
      tasks:[
        {t:"Find your processor, RAM and storage", how:{
          win:["Open **Settings → System → About**. Under **Device specifications**, note **Processor** and **Installed RAM**.","Open **Settings → System → Storage** and note the total size and how much is used.","Optional: press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]] to open Task Manager and look at the **Performance** tab for CPU, Memory and Disk."],
          mac:["Click the **Apple menu → About This Mac**. Note the **Chip** (or **Processor**) and **Memory**.","Open **Apple menu → System Settings → General → Storage** and note the total and the space available."],
          chromeos:["Open the **Diagnostics** app (press the Launcher key and type “Diagnostics”). It shows the CPU, memory (RAM) and battery.","For storage, open **Settings** and find **Storage management** (under **Device** on many versions; use the search box in Settings if you can’t see it)."],
          phone:["**iPhone:** **Settings → General → About** shows **Capacity** (storage) and **Available**. Apple doesn’t list RAM in Settings.","**Android:** **Settings → About phone** shows storage and, on many phones, RAM. Some makers put details under **Hardware information** or **Device information**. Storage is also at **Settings → Storage**."]
        }},
        {t:"Identify the ports on your device", how:["Look around the edges of your device and note each socket.","Name each one using the table in this lesson (USB-A, USB-C, HDMI, headphone, Ethernet, card reader).","Look for small symbols next to USB-C ports (a lightning bolt, a monitor icon, a charging icon) and note what they suggest."]},
        {t:"Read one real spec sheet", how:["Find the shop or maker page for a device you own or might buy.","Write down: operating system, RAM, storage type and size, processor model, ports.","Using the checklist in the last section, write one sentence on whether it suits your everyday work."]}
      ],
      proof:"A note listing your device’s processor, RAM, storage size, free storage and ports, plus one sentence judging a spec sheet against your own needs."
    },
    read:[
      {book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”: “Personal Computers and Devices” and “Information Processing, Storage, and Memory”"},
      {book:"ics", where:"Chapter 5, Section 5.5 “Memory Hierarchy”: “Memory and Storage” and “Storage Technologies”"}
    ]
  },
  /* ================= LESSON 3 ================= */
  {
    id:"t1u1-l3", title:"Bits, bytes and sizes", minutes:55,
    goals:[
      "Explain in plain words why computers use binary, and what a bit and a byte are",
      "Use KB, MB, GB and TB correctly, and know when 1,000 or 1,024 is meant",
      "Explain why a “512 GB” drive shows less space in your operating system",
      "Convert internet speeds between Mbps and MB/s",
      "Work out how many files fit and how long a download takes"
    ],
    learn:[
      {h:"Why computers count in twos", body:[
        {lead:"Inside a computer, every piece of information is stored as a long row of tiny switches that are either off or on."},
        "Electronics are very good at telling two states apart: current or no current, charged or not charged, magnetised one way or the other. So computers use [[binary]]: a number system with only two digits, **0** and **1**. One binary digit is called a [[bit]] (short for “binary digit”).",
        "One bit can only say two things: yes/no, on/off. But bits combine quickly. Two bits give four patterns (00, 01, 10, 11). Every extra bit doubles the number of patterns:",
        {table:[
          ["Number of bits","Different patterns","Enough to store…"],
          ["1","2","yes or no"],
          ["2","4","the four seasons"],
          ["4","16","one hexadecimal digit (0–9, A–F)"],
          ["8","256","one basic letter, digit or symbol"],
          ["24","about 16.7 million","one pixel’s colour (8 bits each for red, green, blue)"]
        ]},
        {ex:"In ordinary (decimal) numbers each place is worth ten times the one to its right: ones, tens, hundreds. In binary each place is worth **two** times the one to its right: 1, 2, 4, 8, 16…\n\nSo binary 0101 = (0 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = **5**.\nAnd binary 1101 = 8 + 4 + 0 + 1 = **13**.", label:"Worked example: reading binary"},
        "You will never need to do binary arithmetic for everyday computing. What matters is the idea: **everything is numbers**, and numbers are stored as bits. A letter, a pixel’s colour, a moment of sound: each is given a numeric code, and the code is stored in binary."
      ]},
      {h:"From bits to bytes", body:[
        "Bits are too small to be handy, so they are grouped in eights. Eight bits make one [[byte]]. One byte can hold 256 different patterns, enough for one basic letter, digit or punctuation mark in common text encodings.",
        {fig:'<svg viewBox="0 0 340 274"><defs><marker id="t1u1-l3-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text class="s" x="170" y="22" text-anchor="middle">8 bits = 1 byte</text><rect class="d-lup" x="49.1" y="32" width="30.2" height="40" stroke-width="2"/><text x="64.2" y="58" text-anchor="middle">0</text><rect class="d-rose" x="79.3" y="32" width="30.2" height="40" stroke-width="2"/><text x="94.4" y="58" text-anchor="middle">1</text><rect class="d-lup" x="109.6" y="32" width="30.2" height="40" stroke-width="2"/><text x="124.7" y="58" text-anchor="middle">0</text><rect class="d-lup" x="139.8" y="32" width="30.2" height="40" stroke-width="2"/><text x="154.9" y="58" text-anchor="middle">0</text><rect class="d-lup" x="170" y="32" width="30.2" height="40" stroke-width="2"/><text x="185.1" y="58" text-anchor="middle">0</text><rect class="d-lup" x="200.2" y="32" width="30.2" height="40" stroke-width="2"/><text x="215.3" y="58" text-anchor="middle">0</text><rect class="d-lup" x="230.4" y="32" width="30.2" height="40" stroke-width="2"/><text x="245.6" y="58" text-anchor="middle">0</text><rect class="d-rose" x="260.7" y="32" width="30.2" height="40" stroke-width="2"/><text x="275.8" y="58" text-anchor="middle">1</text><text class="s" x="64.2" y="88" text-anchor="middle">128</text><text class="s" x="94.4" y="88" text-anchor="middle">64</text><text class="s" x="124.7" y="88" text-anchor="middle">32</text><text class="s" x="154.9" y="88" text-anchor="middle">16</text><text class="s" x="185.1" y="88" text-anchor="middle">8</text><text class="s" x="215.3" y="88" text-anchor="middle">4</text><text class="s" x="245.6" y="88" text-anchor="middle">2</text><text class="s" x="275.8" y="88" text-anchor="middle">1</text><path class="d-ink" d="M170,98 L170,146" stroke-width="2" marker-end="url(#t1u1-l3-mk)"/><text class="s" x="181.3" y="126">64 + 1 = 65</text><rect class="d-gold" x="141.7" y="150" width="56.7" height="40" rx="8" stroke-width="2"/><text x="170" y="176" text-anchor="middle">65</text><path class="d-ink" d="M200.2,170 L236.1,170" stroke-width="2" marker-end="url(#t1u1-l3-mk)"/><rect class="d-sage" x="239.9" y="150" width="41.6" height="40" rx="8" stroke-width="2"/><text x="260.7" y="176" text-anchor="middle">A</text><text class="s" x="211.6" y="212" text-anchor="middle">code 65 means “A”</text><text class="s" x="170" y="242" text-anchor="middle">Each box is one bit. Each place is</text><text class="s" x="170" y="260" text-anchor="middle">worth twice the place to its right.</text></svg>', alt:"Diagram: eight boxes containing the bits 0 1 0 0 0 0 0 1, with place values 128, 64, 32, 16, 8, 4, 2, 1 below. The 64 and 1 places are on, so the byte equals 65, which is the text code for the capital letter A.", cap:"One byte. The bits 01000001 add up to 64 + 1 = 65, and in common text encodings code 65 means the capital letter A."},
        "Not everything fits in one byte. Letters from many of the world’s writing systems, and emoji, usually take 2 to 4 bytes each in the encoding the web uses (UTF-8). A photo takes millions of bytes, because it stores a colour for millions of pixels.",
        {warn:"Watch the letter case. A lowercase **b** means **bits**; an uppercase **B** means **bytes**. So **Mb** is megabits and **MB** is megabytes, eight times bigger. Many mistakes in this lesson come from that one letter."}
      ]},
      {h:"Kilo, mega, giga, tera", body:[
        "File sizes and drive sizes are counted in bytes, with prefixes for big numbers. In the international system of units (SI) these prefixes mean powers of **1,000**, just as a kilometre is 1,000 metres:",
        {table:[
          ["Unit","Symbol","Bytes (decimal, SI)","Roughly the size of…"],
          ["[[kilobyte|kilobyte]]","kB (often written KB)","1,000","a short plain-text email"],
          ["[[megabyte|megabyte]]","MB","1,000,000 (a million)","one phone photo is usually a few MB"],
          ["[[gigabyte|gigabyte]]","GB","1,000,000,000 (a billion)","an hour or so of video, depending on quality"],
          ["[[terabyte|terabyte]]","TB","1,000,000,000,000 (a trillion)","a large external drive"]
        ]},
        "Each step up is ×1,000. So 1 TB = 1,000 GB = 1,000,000 MB. These are the units drive makers print on the box, and the units Apple uses on current Macs, iPhones and iPads.",
        {tip:"Real file sizes vary a lot. A photo might be 2 MB or 12 MB depending on the camera and settings; a video’s size depends on resolution, length and compression. When you calculate, use the real size of your own files if you can (Apply task 2 shows how to find it)."}
      ]},
      {h:"Binary prefixes and the “missing” space", body:[
        "Here is the wrinkle. Because computers work in powers of two, programmers long used “kilobyte” to mean **1,024** bytes (2¹⁰), which is close to 1,000. The gap is small for a kilobyte but grows with each step: by the time you reach a terabyte it is nearly 10%.",
        "To end the confusion, in 1998 the International Electrotechnical Commission (IEC) created separate **binary prefixes**:",
        {table:[
          ["Binary unit","Symbol","Bytes","Compared with the decimal unit"],
          ["kibibyte","KiB","1,024","2.4% more than 1 kB"],
          ["mebibyte","MiB","1,048,576","4.9% more than 1 MB"],
          ["[[gibibyte]]","GiB","1,073,741,824","7.4% more than 1 GB"],
          ["tebibyte","TiB","1,099,511,627,776","10% more than 1 TB"]
        ]},
        "The trouble is that not every system uses the new names. **Windows** (File Explorer and Settings) calculates sizes in binary units but still labels them “KB”, “MB” and “GB”. **Current macOS, iOS and iPadOS** calculate in decimal, matching the box (Apple says much older versions, up to iOS 10 and OS X Leopard, used binary). Linux tools, Android and individual apps vary; some show “GiB” honestly.",
        {fig:'<svg viewBox="0 0 340 244"><text class="s" x="170" y="20" text-anchor="middle">The same drive, measured</text><text class="s" x="170" y="36" text-anchor="middle">with two different rulers</text><rect class="d-gold" x="9.4" y="46" width="321.1" height="36" rx="6" stroke-width="2"/><text x="170" y="69" text-anchor="middle">512,000,000,000 bytes</text><rect class="d-sage" x="9.4" y="94" width="321.1" height="66" rx="6" stroke-width="2"/><text x="170" y="114" text-anchor="middle">= 512 GB</text><text class="s" x="170" y="132" text-anchor="middle">÷ 1,000 ÷ 1,000 ÷ 1,000</text><text class="s" x="170" y="150" text-anchor="middle">the box, macOS and iOS show this</text><rect class="d-lup" x="9.4" y="170" width="321.1" height="66" rx="6" stroke-width="2"/><text x="170" y="190" text-anchor="middle">= 476.8 GiB</text><text class="s" x="170" y="208" text-anchor="middle">÷ 1,024 ÷ 1,024 ÷ 1,024</text><text class="s" x="170" y="226" text-anchor="middle">Windows shows this as “476 GB”</text></svg>', alt:"Diagram: one bar labelled 512,000,000,000 bytes. Below it, two equally long bars: one says equals 512 GB, dividing by 1,000 three times, as the box, macOS and iOS show it; the other says equals 476.8 GiB, dividing by 1,024 three times, which Windows shows as 476 GB.", cap:"Nothing is missing: the same number of bytes is divided by 1,000 three times or by 1,024 three times."},
        {ex:"A drive sold as **512 GB** holds 512 × 1,000,000,000 = 512,000,000,000 bytes.\nIn binary units: 512,000,000,000 ÷ 1,073,741,824 ≈ **476.8 GiB**.\nWindows shows this as about **476 GB**. A Mac would show about **512 GB**.\nOn top of that, the operating system, recovery tools and pre-installed apps use part of the drive, so the space **available** to you is smaller again.", label:"Worked example: the “missing” 35 GB"},
        {key:"Nobody stole your space. The box uses decimal GB; Windows uses binary units but calls them GB. The operating system then takes its own share."},
        "One more twist: RAM is always made in powers of two, so “16 GB of RAM” really means 16 GiB. You don’t need to do anything with that fact; just don’t be surprised by it."
      ]},
      {h:"Speeds: megabits vs megabytes", body:[
        "Internet and network speeds are measured in **bits per second**, not bytes. Your provider sells you, say, “100 [[mbps|Mbps]]” (megabits per second). But browsers, app stores and download managers usually show progress in **MB/s** (megabytes per second). Since one byte is eight bits:",
        {key:"MB/s = Mbps ÷ 8. A 100 Mbps connection moves at most about 12.5 MB/s."},
        {table:[
          ["Plan (Mbps)","Best case download (MB/s)","Time for a 1 GB file at best case"],
          ["10 Mbps","1.25 MB/s","about 13 minutes 20 seconds"],
          ["50 Mbps","6.25 MB/s","about 2 minutes 40 seconds"],
          ["100 Mbps","12.5 MB/s","80 seconds"],
          ["500 Mbps","62.5 MB/s","16 seconds"]
        ]},
        "Real downloads are usually slower than the best case. Wi-Fi signal, other people using the same connection, the server at the other end, and the small overhead of the network itself all take a share. “Up to” in an advertisement means exactly that.",
        "Also notice **upload** speed, the speed for sending. Many home plans have much slower upload than download, which matters for video calls and for backing up to the cloud."
      ]},
      {h:"Worked calculations you’ll actually use", body:[
        "Two everyday questions: “How many will fit?” and “How long will it take?” Use the same three steps every time.",
        {ol:[
          "**Put everything in the same unit** (usually MB). Use 1 GB = 1,000 MB unless the question says otherwise.",
          "**For speeds, convert bytes to bits** (×8) or bits to bytes (÷8) so both sides match.",
          "**Divide**, then sanity-check: is the answer a sensible size?"
        ]},
        {ex:"Sione has **64 GB** free on his phone. His photos average **4 MB** each.\n1. Same unit: 64 GB = 64 × 1,000 = 64,000 MB.\n2. No speed involved.\n3. 64,000 ÷ 4 = **16,000 photos** (roughly, since real photo sizes vary).", label:"Worked example: how many photos fit"},
        {ex:"Fatima downloads a **5 GB** course video pack on a **50 Mbps** connection.\n1. Same unit: 5 GB = 5,000 MB.\n2. Convert to bits: 5,000 MB × 8 = 40,000 megabits.\n3. Divide by the speed: 40,000 ÷ 50 = 800 seconds ≈ **13 minutes 20 seconds**, at best. Real life will be a bit slower.", label:"Worked example: how long a download takes"},
        "The common mistakes, so you can catch them:",
        {list:[
          "**Forgetting ×8.** Mixing Mbps with MB makes a download look eight times faster than it can be.",
          "**Mixing 1,000 and 1,024.** Pick one convention and stick to it. For drive sizes, speeds and photo counts, decimal (1,000) is the normal choice.",
          "**Forgetting to convert GB to MB.** Dividing 64 GB by 4 MB without converting gives 16, which is obviously not how many photos fit on a phone.",
          "**Answering in the wrong unit.** Seconds vs minutes: say which one, and convert if asked."
        ]}
      ]}
    ],
    try:[
      {id:"t1u1-l3-x1", type:"number", q:"Sione has **64 GB** free on his phone. His photos average **4 MB** each. Using decimal units (1 GB = 1,000 MB), about how many more photos fit?", answer:16000, tol:0, unit:"photos", why:"64 GB = 64 × 1,000 = 64,000 MB. Then 64,000 MB ÷ 4 MB = **16,000 photos**.", wrongs:[
        {v:16384, tol:0, why:"That uses 1 GB = 1,024 MB. The question asks for decimal units, so use 1,000."},
        {v:16, tol:0, why:"You divided 64 by 4 without converting GB to MB first. 64 GB is 64,000 MB."},
        {v:128000, tol:0, why:"You multiplied by 8. That converts bytes to bits, which only matters for speeds. Both sizes here are already in bytes."},
        {v:2000, tol:0, why:"You divided by 8. There is no bits-to-bytes step here: both sizes are in bytes."}
      ], hint2:"Convert 64 GB to MB first, then divide by the size of one photo."},
      {id:"t1u1-l3-x2", type:"number", q:"Kenji downloads a **3 GB** game update on a **100 Mbps** connection. At best, how many **minutes** will it take? (Use 1 GB = 1,000 MB.)", answer:4, tol:0.05, unit:"minutes", why:"3 GB = 3,000 MB. In bits: 3,000 × 8 = 24,000 megabits. 24,000 ÷ 100 Mbps = 240 seconds = **4 minutes**.", wrongs:[
        {v:0.5, tol:0.01, why:"That forgets the ×8. 3,000 MB ÷ 100 = 30 seconds treats megabits as megabytes. A byte is 8 bits, so it takes 8 times longer."},
        {v:240, tol:0, why:"240 is right, but in **seconds**. The question asks for minutes: 240 ÷ 60 = 4."},
        {v:30, tol:0, why:"That is 3,000 ÷ 100 in seconds, without the ×8. Convert megabytes to megabits first."}
      ]},
      {id:"t1u1-l3-x3", type:"number", q:"Dmitri buys a laptop with a **512 GB** SSD (as printed on the box, 512,000,000,000 bytes). Windows shows sizes in binary units (dividing by 1,024 three times) but labels them “GB”. About what total size will Windows show? Give one decimal place.", answer:476.8, tol:0.9, unit:"“GB”", why:"512,000,000,000 ÷ (1,024 × 1,024 × 1,024) = 512,000,000,000 ÷ 1,073,741,824 ≈ **476.8**. Windows shows about 476 GB. Nothing is missing: it is the same number of bytes on a different ruler.", wrongs:[
        {v:512, tol:0, why:"That’s the box figure in decimal GB. Windows divides by 1,024 at each step, so the number comes out smaller."},
        {v:500, tol:0.5, why:"You divided by 1.024 only once (512 × 1,000 ÷ 1,024). The bytes have to be divided by 1,024 three times: KiB, then MiB, then GiB."},
        {v:549.8, tol:1, why:"You multiplied by 1.074 instead of dividing. Binary units are bigger, so the same bytes make **fewer** of them."}
      ]},
      {id:"t1u1-l3-x4", type:"number", q:"Mei’s internet plan is **200 Mbps**. What is the fastest a download could possibly show, in **MB/s**?", answer:25, tol:0, unit:"MB/s", why:"Megabits to megabytes: divide by 8. 200 ÷ 8 = **25 MB/s**. Real downloads will usually be a little slower.", wrongs:[
        {v:200, tol:0, why:"Mbps and MB/s aren’t the same unit. There are 8 bits in a byte, so divide by 8."},
        {v:1600, tol:0, why:"You multiplied by 8. Going from bits to bytes gives a smaller number, because a byte is the bigger unit."}
      ]},
      {id:"t1u1-l3-x5", type:"mcq", q:"Ana pays for **50 Mbps** internet. While downloading a big file, her browser shows **6 MB/s**. What’s going on?", options:[
        {t:"Nothing is wrong: 50 Mbps ÷ 8 is about 6.25 MB/s, so she is getting nearly the full speed", ok:true, why:"Her provider measures in megabits; her browser measures in megabytes. 6 MB/s is almost exactly what 50 Mbps can deliver."},
        {t:"She’s getting only about an eighth of what she pays for", why:"That compares 6 megabytes with 50 megabits. Convert first: 6 MB/s × 8 = 48 Mbps, which is close to 50."},
        {t:"Her browser is showing the wrong number", why:"The browser is right; it just uses a different unit (MB/s) from the plan (Mbps)."},
        {t:"Her plan must really be 6 Mbps", why:"6 Mbps would give only about 0.75 MB/s. Her download is much faster than that."}
      ]},
      {id:"t1u1-l3-x6", type:"match", q:"Match each unit to what it means.", pairs:[
        ["bit","A single 0 or 1","The smallest unit of data: one binary digit."],
        ["byte","8 bits","Bits are grouped in eights to make a byte."],
        ["MB (megabyte, decimal)","1,000,000 bytes","Decimal SI prefixes go up by 1,000 at each step."],
        ["GiB (gibibyte)","1,073,741,824 bytes","A binary prefix: 1,024 × 1,024 × 1,024 bytes."],
        ["Mbps","Millions of bits per second","A speed, with a lowercase b for bits. Divide by 8 for MB/s."]
      ]},
      {id:"t1u1-l3-x7", type:"sort", q:"Does each size count in steps of **1,000** (decimal) or **1,024** (binary)?", buckets:["Steps of 1,000","Steps of 1,024"], items:[
        {t:"“1 TB” printed on an external drive’s box", b:0, why:"Drive makers use decimal SI units."},
        {t:"A size shown as “GiB”", b:1, why:"The “i” marks an IEC binary prefix."},
        {t:"A file size shown in macOS Finder", b:0, why:"Current macOS counts in decimal, matching the box."},
        {t:"A drive size shown in Windows File Explorer", b:1, why:"Windows calculates in binary units, even though it labels them “GB”."},
        {t:"“16 GB” of RAM", b:1, why:"RAM is built in powers of two, so 16 GB of RAM is really 16 GiB."},
        {t:"“MiB” in a Linux disk tool", b:1, why:"MiB is the binary mebibyte, 1,048,576 bytes."}
      ]}
    ],
    apply:{
      intro:"Put the numbers on your own device and your own connection.",
      tasks:[
        {t:"Compare your storage with the advertised size", how:["Find the storage size your device was sold with (the box, receipt or maker’s page).","Find the total your system reports (Lesson 2, Apply task 1).","If you use Windows, divide the advertised size in bytes by 1,073,741,824 and compare. On a Mac, iPhone or iPad, the numbers should be close already. Note the rest of the difference: that is the system’s own share."]},
        {t:"Find the real size of one of your photos", how:{
          win:["Open **File Explorer** and find a photo.","Right-click it and choose **Properties**. Note the **Size**."],
          mac:["Find a photo in **Finder**.","Select it and press [[kbd:Cmd]] + [[kbd:I]] (**Get Info**). Note the size."],
          chromeos:["Open the **Files** app and find a photo.","Switch to list view if needed; the **Size** column shows the file size."],
          phone:["**iPhone:** in **Photos**, open a photo and swipe up (or tap the **ⓘ** button). Recent iOS versions show the file size there; if yours doesn’t, save a copy to the **Files** app (**Share → Save to Files**), then touch and hold it and choose **Get Info**.","**Android:** in your gallery app, open a photo and look for **Details** or **Info** (often in the **⋮** menu). Names vary by maker."]
        }},
        {t:"Test your internet speed and convert it", how:["Run a speed test from your internet provider or a well-known service (search “internet speed test”; several, such as M-Lab’s or Ookla’s, are free).","Write down the download and upload speeds in Mbps.","Divide each by 8 to get MB/s, then work out how long a 2 GB file would take at your measured speed."]}
      ],
      proof:"A note with: your advertised vs reported storage (and why they differ), the size of one real photo and how many such photos would fit in your free space, and your measured speed in both Mbps and MB/s."
    },
    read:[
      {book:"ics", where:"Chapter 5, Section 5.3 “Machine-Level Information Representation”: “Integer Numbers Representation” and “Character Representation”"},
      {book:"ics", where:"Chapter 5, Section 5.1 “Computer Systems Organization”: “Data Storage Inside a Computer”"}
    ]
  },
  /* ================= LESSON 4 ================= */
  {
    id:"t1u1-l4", title:"Operating systems and apps", minutes:50,
    goals:[
      "Explain the main jobs of an operating system",
      "Name the main operating systems and the devices they run on",
      "Tell installed apps from web apps",
      "Install apps from safe, official sources and judge permission requests",
      "Explain drivers, firmware, and why a standard (non-administrator) account is safer for daily use"
    ],
    learn:[
      {h:"What an operating system does", body:[
        {lead:"The [[operating-system|operating system (OS)]] is the main program that runs the whole device and lets every other program share it safely."},
        "Picture a busy hotel. The guests are the apps. The rooms, lifts, kitchen and laundry are the hardware. The hotel manager is the operating system: the manager hands out rooms, decides who uses the lift next, keeps guests out of each other’s rooms, keeps the records, and calls the right technician when something breaks. Guests never rewire the building themselves; they ask the manager.",
        "In precise terms, the OS:",
        {list:[
          "**Manages hardware.** Apps don’t talk to the printer, camera or Wi-Fi chip directly. They ask the OS, and the OS uses [[driver|drivers]] to talk to each device.",
          "**Runs programs and shares out resources.** It decides which program gets the processor next (switching many times a second so everything seems to run at once) and how much [[ram|RAM]] each one gets.",
          "**Manages files.** It keeps track of where every file sits on the storage drive and offers folders, names and search.",
          "**Manages users.** It keeps each person’s files and settings separate and decides what each [[user-account|account]] is allowed to change.",
          "**Protects the system.** It enforces permissions, installs security updates, and stops one app from reading another app’s data.",
          "**Gives you an interface.** The desktop, home screen, windows, notifications and settings are all the OS."
        ]},
        {fig:'<svg viewBox="0 0 340 300"><rect class="d-sage" x="9.4" y="8" width="321.1" height="40" rx="8" stroke-width="2"/><text x="170" y="33" text-anchor="middle">Apps: browser, email, photos, games</text><rect class="d-rose" x="9.4" y="58" width="321.1" height="76" rx="8" stroke-width="2"/><text x="170" y="82" text-anchor="middle">Operating system</text><text class="s" x="170" y="102" text-anchor="middle">runs apps · shares CPU and RAM</text><text class="s" x="170" y="120" text-anchor="middle">files · users · security</text><rect class="d-lup" x="9.4" y="144" width="321.1" height="36" rx="8" stroke-width="2"/><text x="170" y="167" text-anchor="middle">Drivers (one per kind of device)</text><rect class="d-gold" x="9.4" y="190" width="321.1" height="36" rx="8" stroke-width="2"/><text x="170" y="213" text-anchor="middle">Firmware (built into the hardware)</text><rect class="d-panel" x="9.4" y="236" width="321.1" height="56" rx="8" stroke-width="2"/><text x="170" y="259" text-anchor="middle">Hardware: CPU, RAM, storage,</text><text x="170" y="278" text-anchor="middle">screen, Wi-Fi</text></svg>', alt:"Diagram of five stacked layers. From top: Apps; Operating system, which runs apps, shares CPU and RAM, and manages files, users and security; Drivers; Firmware built into the hardware; and Hardware at the bottom.", cap:"Layers: apps ask the operating system; the OS uses drivers and firmware to control the hardware. Each layer only talks to its neighbours."},
        {key:"Apps do your tasks; the operating system runs the device and keeps apps, users and hardware in order."}
      ]},
      {h:"The main operating systems", body:[
        "A handful of operating systems run almost every personal device. Apps are usually written for a particular OS, which is why “Is it available for my system?” is the first question when you choose software.",
        {table:[
          ["Operating system","Made by","Runs on","Worth knowing"],
          ["Windows","Microsoft","PCs and laptops from many makers","The most common desktop OS; huge range of software"],
          ["macOS","Apple","Mac computers only","Works closely with iPhone and iPad"],
          ["ChromeOS","Google","Chromebooks from many makers","Built around the Chrome browser and web apps; many models can also run Android and Linux apps"],
          ["Linux","An open-source community and companies","PCs, most web servers, many embedded devices","Free; comes in many versions (“distributions”) such as Ubuntu, Fedora and Linux Mint"],
          ["iOS / iPadOS","Apple","iPhone / iPad","Apps come from Apple’s App Store (with some regional exceptions)"],
          ["Android","Google, with phone makers","Phones and tablets from many makers","Each maker adds its own look and menus, so settings names vary"]
        ]},
        "Android is built on the Linux kernel (the core part of an OS), and macOS and iOS share a common core too. You don’t need those details day to day, but they explain why some ideas, such as app permissions, look similar across systems.",
        {tip:"Because Android phone makers customise their menus, instructions for “Android” may not match your phone word for word. The search box at the top of the Settings app is your best friend: type what you’re looking for (“storage”, “update”, “permission”)."}
      ]},
      {h:"Apps, programs and web apps", body:[
        "An [[app]] (application, program) is software that does a task for you: writing, editing photos, messaging, calculating. There are two main kinds:",
        {list:[
          "**Installed apps** are downloaded onto your device and run from its storage. They can work offline, use the device’s hardware fully, and usually feel fastest. They need installing, updating and space.",
          "[[web-app|Web apps]] run inside a web browser. You open a web address and the app loads from a server. Nothing to install, they work on any OS with a modern browser, and your work is often saved online automatically. They usually need an internet connection."
        ]},
        {table:[
          ["","Installed app","Web app"],
          ["Where it runs","On your device","In your browser, with much of the work on a server"],
          ["Installing","Yes, from a store or the maker’s site","No; just visit the address"],
          ["Updates","Installed by you or automatically","Happen on the server; you always get the latest"],
          ["Offline","Usually works","Often limited or not at all"],
          ["Uses device storage","Yes","Very little"]
        ]},
        "Many services offer both: an email service, an office suite or a video-call tool may have a website **and** an app. Some web apps can also be “installed” from the browser so they open in their own window; they are still web apps underneath."
      ]},
      {h:"Installing apps safely", body:[
        "Most harmful software arrives because someone was tricked into installing it. A few habits avoid almost all of that risk.",
        {ol:[
          "**Prefer the official [[app-store|app store]]** for your system: the Microsoft Store, Apple’s App Store (Mac, iPhone, iPad), or Google Play on Android and ChromeOS. Apps there are checked before listing and scanned afterwards. Checks aren’t perfect, so still look at the developer’s name, the number of downloads and recent reviews.",
          "**Otherwise use the developer’s official website.** Type the address yourself or follow a link from a source you trust. Watch out for search adverts and look-alike sites that offer “free downloads” of popular programs; Unit 3 shows how to read a web address.",
          "**Never install “cracked” paid software** or apps sent as files in chats or emails. They are a common way to spread [[malware]].",
          "**Read prompts before clicking.** If your system asks for permission or an administrator password during an install you didn’t start, say no.",
          "**Remove apps you no longer use.** Fewer apps means fewer things to update and fewer things that could go wrong."
        ]},
        "Your system helps too. On a Mac, **System Settings → Privacy & Security** controls whether apps can come from the App Store only, or also from developers identified by Apple. On Android, installing from outside Google Play requires you to grant an app the special “install unknown apps” permission, and Google Play Protect scans apps. Windows uses Microsoft Defender SmartScreen (and, on some newer installations, Smart App Control) to warn about unrecognised downloads. These warnings are worth taking seriously.",
        {h:"Permission prompts"},
        "Phones and modern computers ask before an app uses sensitive things: your location, camera, microphone, contacts, photos, files. Ask one question: **does this app need this to do its job?** A video-call app needs the camera and microphone. A calculator does not need your contacts. You can usually choose “Only while using the app” or allow access to selected photos only. Unit 3 covers [[app-permissions|app permissions]] in more depth."
      ]},
      {h:"Drivers and firmware", body:[
        "A [[driver]] is a small piece of software that lets the operating system talk to one particular piece of hardware: a printer, a graphics chip, a webcam. Think of it as an interpreter between the OS’s general language and the device’s own. Without the right driver, a device may not work at all or may lose features.",
        "The good news: modern systems find and install most drivers automatically, often through their normal update tools (Windows Update, for example, delivers many drivers). If you do need one, get it from the device maker’s official support site, never from a “driver updater” program advertised online.",
        "[[firmware|Firmware]] is software stored inside the hardware itself. Your computer’s start-up firmware (called **UEFI** or **BIOS** on PCs) runs before the operating system and gets everything ready to [[boot]]. Routers, printers, earbuds, smart TVs and even keyboards have firmware. Makers release firmware updates to fix bugs and security holes.",
        {warn:"During a firmware update, keep the device plugged in and don’t turn it off. Interrupting a firmware update can leave a device unable to start."}
      ]},
      {h:"User accounts and why to use a standard account", body:[
        "A [[user-account|user account]] is your identity on a device: your sign-in, your files, your settings. On shared computers each person should have their own account, so files stay private and one person’s changes don’t break another’s setup.",
        "On Windows and macOS, accounts come in two main types:",
        {table:[
          ["","Standard account","Administrator account"],
          ["Everyday use","Browse, email, write, use installed apps","Everything a standard account can do…"],
          ["System-wide changes","Must enter an administrator’s password","…plus install software for everyone, change security settings, manage other accounts"],
          ["If malware runs","Limited to what this account can change","Can change almost anything on the system"]
        ]},
        "Security agencies and Microsoft give the same advice: **use a standard account for day-to-day work**, and use an [[admin-account|administrator account]] only when you need to make a system change. Microsoft’s own guidance says it is safer to have fewer administrators and use standard accounts for day-to-day activities. The US Cybersecurity and Infrastructure Security Agency (CISA) and the Australian Signals Directorate give the same advice.",
        "Why it helps: anything that runs while you are signed in, including something malicious you clicked by accident, gets your account’s powers. On a standard account, a system-wide change triggers a prompt for an administrator password, which is a moment to stop and think. It is not a complete shield (malware can still reach your own files, which is why Unit 2 covers backups), but it limits the damage.",
        {warn:"Never change your **only** administrator account to standard: you could lock yourself out of system changes. Create a separate administrator account first, check you can sign in to it, then switch your daily account to standard. On a work or school device, your IT team manages this for you."},
        "Phones work a little differently. There is usually one owner, and apps are kept apart from each other by design, so the same idea shows up as app permissions instead."
      ]}
    ],
    try:[
      {id:"t1u1-l4-x1", type:"match", q:"Match each operating system to the devices it typically runs on.", pairs:[
        ["Windows","PCs and laptops from many different makers","Microsoft licenses Windows to many computer makers."],
        ["macOS","Mac computers only","Apple makes macOS for its own computers."],
        ["ChromeOS","Chromebooks","Google’s browser-centred OS runs on Chromebooks from several makers."],
        ["iOS","iPhone","Apple’s phone operating system."],
        ["Android","Phones and tablets from many makers","Google develops Android; makers customise it for their devices."],
        ["Linux","Most web servers, and PCs of people who install it","Linux is free and open source, and very common on servers."]
      ]},
      {id:"t1u1-l4-x2", type:"sort", q:"Is each task done by the **operating system** or by an **app**?", buckets:["Operating system","App"], items:[
        {t:"Decides which program gets the processor next", b:0, why:"Sharing out the processor is a core OS job."},
        {t:"Edits a photo’s colours", b:1, why:"That’s the task a photo-editing app exists for."},
        {t:"Talks to the printer through its driver", b:0, why:"Apps ask the OS to print; the OS uses the driver."},
        {t:"Keeps track of where each file is stored on the drive", b:0, why:"File management is an OS job."},
        {t:"Plays a podcast episode", b:1, why:"A podcast or audio app does that, using the OS to reach the speakers."},
        {t:"Checks your password when you sign in to the device", b:0, why:"Managing user accounts and sign-in is an OS job."},
        {t:"Calculates totals in a budget spreadsheet", b:1, why:"That’s the spreadsheet app’s job."}
      ]},
      {id:"t1u1-l4-x3", type:"mcq", q:"Oluwaseun wants a free PDF reader for his Windows laptop. Which is the safest way to get one?", options:[
        {t:"Install it from the Microsoft Store, or from the developer’s official website reached by typing its address", ok:true, why:"Official stores and official developer sites are the trustworthy sources. Typing the address avoids look-alike sites."},
        {t:"Click the first “Download Free PDF Reader” advert in the search results", why:"Search adverts are sometimes bought by look-alike sites that bundle unwanted or harmful software."},
        {t:"Install a file a stranger shared in a community group chat", why:"Files sent in chats can contain malware, and there’s no way to know where they came from."},
        {t:"Download a “cracked” copy of a paid PDF editor", why:"Cracked software is a very common way to spread malware, and it’s illegal in most places."}
      ]},
      {id:"t1u1-l4-x4", type:"mcq", q:"A new photo-editing app, which also lets you take new photos from inside the app, asks for several permissions. Which ones fit its job? Choose all that apply.", options:[
        {t:"Access to the photos you select", ok:true, why:"It needs your photos to edit them. Choosing selected photos only is even better."},
        {t:"Camera", ok:true, why:"The app offers to take new photos, so camera access fits its job. You could still refuse and edit existing photos only."},
        {t:"Your contacts", why:"Editing photos doesn’t need your address book. This is a red flag for data collection."},
        {t:"Your call history", why:"Nothing about photo editing needs to know who you phone."},
        {t:"Your precise location, all the time", why:"A photo editor has no need to track you continuously."}
      ], why:"For each request ask: does this app need it to do its job?"},
      {id:"t1u1-l4-x5", type:"order", q:"Put these steps for installing a new app safely in order.", items:[
        {t:"Decide what you need the app to do and check it supports your operating system", why:"Start with the need, so you don’t install something that won’t run."},
        {t:"Find it in the official app store or on the developer’s official site", why:"Choose a trustworthy source before downloading anything."},
        {t:"Check the developer name, recent reviews and the permissions it asks for", why:"Look-alike apps exist even in official stores."},
        {t:"Install it, answering any administrator prompt only because you started this install", why:"A prompt you expected is fine; an unexpected one is a warning."},
        {t:"Open it, review its permissions and turn on updates", why:"Adjust permissions to the minimum and keep it updated."}
      ]},
      {id:"t1u1-l4-x6", type:"mcq", q:"Dmitri uses an **administrator** account every day. He opens an email attachment that quietly tries to install software for all users. If he had been using a **standard** account, what would most likely happen?", options:[
        {t:"Windows would ask for an administrator password before that system-wide change, giving him a chance to stop it", ok:true, why:"Standard accounts can’t make system-wide changes without an administrator’s approval, so the hidden install becomes a visible prompt."},
        {t:"Nothing different: account type makes no difference to security", why:"Account type decides what programs running as you are allowed to change. That is exactly what limits malware."},
        {t:"The attachment couldn’t have opened at all", why:"Standard accounts can open files normally. The protection applies to system-wide changes."},
        {t:"He would be completely protected from all harm", why:"A standard account limits damage but isn’t a full shield. Malware could still reach his own files, which is why backups matter."}
      ]}
    ],
    apply:{
      intro:"Look at the operating system you use, check your account type, and review app permissions.",
      tasks:[
        {t:"Check your account type", how:{
          win:["Open **Settings → Accounts**. Your account type (for example **Administrator**) is shown under your name.","To see or change other accounts, go to **Settings → Accounts → Other users**. Select an account, then **Change account type**.","Don’t change your only administrator account to standard (see the warning in this lesson)."],
          mac:["Open **Apple menu → System Settings → Users & Groups**.","Each account shows **Admin** or **Standard** under its name."],
          chromeos:["Chromebooks don’t have administrator and standard accounts in the same way. The first account added is the **owner**, who controls some device settings. Open **Settings** and search for “owner” or “people” to see how accounts are managed on yours.","On a school or work Chromebook, an organisation manages the device."],
          phone:["Phones normally have a single owner. Instead of account types, check your app permissions (next task)."]
        }},
        {t:"Review app permissions", how:{
          win:["Open **Settings → Privacy & security**.","Under **App permissions**, select **Location**, **Camera** or **Microphone** and see which apps have access."],
          mac:["Open **System Settings → Privacy & Security**.","Select **Location Services**, **Camera** or **Microphone** and review the apps listed."],
          chromeos:["Open **Settings** and search for “permissions” or “privacy”. Review camera, microphone and location access.","Android apps on a Chromebook also have their own permissions: search Settings for “Manage Android preferences” or “Apps”."],
          phone:["**iPhone:** **Settings → Privacy & Security**, then choose **Location Services**, **Camera**, **Photos**, **Contacts** and so on.","**Android:** open **Settings** and search for “Permission manager” (on many phones it’s under **Security & privacy** or **Privacy**; names vary by maker)."]
        }},
        {t:"Tidy up your apps", how:["List the apps you haven’t opened in the last few months.","Uninstall the ones you don’t need (you can reinstall from the official store later).","For the ones you keep, make sure updates are switched on."]}
      ],
      proof:"A note with your operating system and version, your account type, one permission you changed (or confirmed was right) and why, and any apps you removed."
    },
    read:[
      {book:"ics", where:"Chapter 6, Section 6.1 “What Is an Operating System?”: “Hardware Management” and “Protected Sharing”"},
      {book:"wss", where:"Chapter 2, “Essentials of Software Applications for Business”, Section 2.1 “Software Basics”: “What Is Software?” and “Installing and Maintaining Software”"},
      {book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”: “Operating Systems”"}
    ]
  },
  /* ================= LESSON 5 ================= */
  {
    id:"t1u1-l5", title:"First aid for your device", minutes:50,
    goals:[
      "Explain why restarting fixes so many problems, and the difference between restart and shut down on Windows",
      "Check for updates and free up storage on your own devices",
      "See what is using your device’s processor, memory and battery",
      "Describe a problem clearly and search an error message well",
      "Recognise when to stop and ask for help"
    ],
    learn:[
      {h:"A calm first-aid mindset", body:[
        {lead:"Most device problems are minor, temporary and fixable by you in a few minutes, if you go step by step."},
        "First aid for people follows a routine: stay calm, make things safe, try the simple things, and know when to call a professional. Device first aid is the same. This lesson gives you the routine; Track 1 has a deeper troubleshooting unit later.",
        {ol:[
          "**Make it safe.** If there is smoke, a burning smell, liquid, a swollen battery or a hot, cracked device, stop now and skip to the last section.",
          "**Save and note.** Save any open work if you can. Note what you were doing and any exact message on screen (a photo of the screen with your phone is fine).",
          "**Try the simple fixes in order:** close and reopen the app, restart the device, check for updates, check free storage, see what is using resources.",
          "**Change one thing at a time,** and check after each change whether the problem is gone. Otherwise you won’t know what fixed it, or what made it worse.",
          "**Search or ask** with a clear description if the simple fixes don’t work."
        ]},
        {fig:'<svg viewBox="0 0 340 502"><defs><marker id="t1u1-l5-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-sage" x="9.4" y="8" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">1  Save work, note the message</text><path class="d-ink" d="M170,41 L170,58" stroke-width="2" marker-end="url(#t1u1-l5-mk)"/><rect class="d-lup" x="9.4" y="60" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="81" text-anchor="middle">2  Close and reopen the app</text><path class="d-ink" d="M170,93 L170,110" stroke-width="2" marker-end="url(#t1u1-l5-mk)"/><rect class="d-lup" x="9.4" y="112" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="133" text-anchor="middle">3  Restart the device</text><path class="d-ink" d="M170,145 L170,162" stroke-width="2" marker-end="url(#t1u1-l5-mk)"/><rect class="d-lup" x="9.4" y="164" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="185" text-anchor="middle">4  Check for updates</text><path class="d-ink" d="M170,197 L170,214" stroke-width="2" marker-end="url(#t1u1-l5-mk)"/><rect class="d-lup" x="9.4" y="216" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="237" text-anchor="middle">5  Check storage and resources</text><path class="d-ink" d="M170,249 L170,266" stroke-width="2" marker-end="url(#t1u1-l5-mk)"/><rect class="d-gold" x="9.4" y="268" width="321.1" height="32" rx="8" stroke-width="2"/><text x="170" y="289" text-anchor="middle">6  Search the exact error, or ask</text><text class="s" x="170" y="322" text-anchor="middle">Check after each step: fixed? Then stop.</text><rect class="d-rose" x="9.4" y="336" width="321.1" height="156" rx="10" stroke-width="2"/><text x="170" y="360" text-anchor="middle">Stop and get help</text><text class="s" x="170" y="378" text-anchor="middle">at any step</text><text class="s" x="37.8" y="402">• smoke or burning smell</text><text class="s" x="37.8" y="422">• swollen battery</text><text class="s" x="37.8" y="442">• liquid or physical damage</text><text class="s" x="37.8" y="462">• ransom or “pay to unlock”</text><text class="s" x="37.8" y="482">• data-loss warnings</text></svg>', alt:"Flowchart of six steps from top to bottom: save work and note the message; close and reopen the app; restart the device; check for updates; check storage and resources; search the exact error or ask. Below it a red box: stop and get help at any step if there is smoke or a burning smell, a swollen battery, liquid or physical damage, a ransom or pay-to-unlock message, or data-loss warnings.", cap:"The first-aid routine. Work down the steps, checking after each one; jump to the red box at any point if you see a danger sign."}
      ]},
      {h:"Restart: why it works, and restart vs shut down", body:[
        "“Have you tried turning it off and on again?” is a joke because it works so often. Here is why. While a device runs, small problems pile up: an app gets stuck in a loop, memory isn’t handed back properly, a driver gets confused, an update waits half-finished. A [[restart]] empties [[ram|RAM]], ends every running program, reloads the operating system and drivers from storage, and finishes pending updates. You start again from a clean, known state.",
        {h:"On Windows, Restart is not the same as Shut down"},
        "Windows has a feature called [[fast-startup|Fast Startup]], switched on by default on many PCs. With it on, **Shut down** closes your apps and signs you out, but saves the core of Windows (the kernel and drivers) to storage, much like hibernating, so the next start is quicker. That means some stuck states can survive a shut down. Microsoft’s documentation says that **Restart** always does a full boot cycle and that the Fast Startup setting doesn’t apply to Restart.",
        {key:"On Windows, choose **Restart** (not Shut down and power on) when you want a fresh start to fix a problem."},
        "Macs, Chromebooks and phones don’t have this split for everyday use: shutting down and turning on again also gives a full fresh start. Restart is simply more convenient.",
        {table:[
          ["Device","How to restart"],
          ["Windows","**Start → Power → Restart**"],
          ["Mac","**Apple menu → Restart**"],
          ["Chromebook","Select the time, then the **Power** button. Choose **Restart** if shown; otherwise **Shut down**, wait a few seconds, then press the power key"],
          ["iPhone","Press and hold the side button and either volume button until the slider appears, slide to power off, then hold the side button to turn on (or **Settings → General → Shut Down**). Older models with a Home button: hold the side or top button"],
          ["Android","Press and hold the power button (on some phones, power and volume up together, or use the power icon in Quick Settings), then tap **Restart**"]
        ]},
        {tip:"Restarting every few days, and whenever an update asks for it, prevents many problems before they start. Leaving a computer running for weeks without a restart can let small problems build up."}
      ]},
      {h:"Check for updates", body:[
        "Updates fix bugs, close security holes and sometimes add features. Many “weird” problems are already fixed in an update you haven’t installed. Unit 3 explains why [[software-update|software updates]] are one of the most important security habits.",
        {table:[
          ["Device","Where to check"],
          ["Windows","**Settings → Windows Update → Check for updates**"],
          ["Mac","**Apple menu → System Settings → General → Software Update**"],
          ["Chromebook","**Settings → About ChromeOS → Check for updates**"],
          ["iPhone / iPad","**Settings → General → Software Update**"],
          ["Android","Often **Settings → System → Software updates**; on some phones **Settings → Software update**. Use the Settings search if you can’t find it"]
        ]},
        "Updates usually need a restart to finish, and a decent battery charge or a power connection. Apps update separately, through the app store or their own settings.",
        {warn:"Updates need free storage. If an update keeps failing, check your storage next."}
      ]},
      {h:"Free up storage", body:[
        "When storage is nearly full, all sorts of things break: updates fail, the camera won’t save, apps crash, and the system slows down because it has nowhere to put temporary files. Aim to keep a comfortable amount free rather than running to the last few gigabytes.",
        {table:[
          ["Device","Where to see what is using storage"],
          ["Windows","**Settings → System → Storage** (try **Cleanup recommendations**, and **Storage Sense** to clean up automatically)"],
          ["Mac","**Apple menu → System Settings → General → Storage**"],
          ["Chromebook","**Settings → Device → Storage management** (search Settings for “storage” if your version differs)"],
          ["iPhone / iPad","**Settings → General → iPhone Storage** (or **iPad Storage**)"],
          ["Android","**Settings → Storage** (many phones also have a cleaning tool, often called **Free up space** or **Device care**)"]
        ]},
        "Usually safe to remove: apps you don’t use (you can reinstall them), old installers and files in your Downloads folder that you no longer need, duplicate or failed photos and videos, and items already in the Recycle Bin or Trash (empty it, or the space isn’t freed). Phones can also **offload** unused apps, removing the app but keeping its data.",
        {warn:"Never delete files from system folders (such as `C:\\Windows` or files you don’t recognise inside the system) to make room. Before deleting photos or videos, make sure they are backed up somewhere else: a [[backup]] is a second copy, and Unit 2 shows how to make one."}
      ]},
      {h:"See what’s using your device", body:[
        "When a device is slow, hot, noisy or draining its battery, look before you guess. Every system has a tool that shows what is running and how much of each resource it uses. On Windows it is called [[task-manager|Task Manager]].",
        {table:[
          ["Device","Tool and how to open it"],
          ["Windows","**Task Manager**: press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]]. **Processes** lists apps; **Performance** shows CPU, memory and disk"],
          ["Mac","**Activity Monitor**: press [[kbd:Cmd]] + [[kbd:Space]], type “Activity Monitor”. Tabs show CPU, Memory, Energy, Disk and Network"],
          ["Chromebook","**Task Manager**: press [[kbd:Shift]] + [[kbd:Esc]] (Google’s Chromebook help gives this shortcut), or use Chrome’s **⋮ menu → More tools → Task manager**"],
          ["iPhone","**Settings → Battery** shows which apps used the most battery; **Settings → General → iPhone Storage** shows space"],
          ["Android","**Settings → Battery** (then **Battery usage**) and **Settings → Storage**; names vary by maker"]
        ]},
        {ex:"Mei’s laptop fan is roaring. She opens Task Manager and clicks the **CPU** column to sort. A browser tab with a video ad is using most of the processor. She closes that tab and the fan calms down within a minute.\n\nIn another case, the **Memory** column is near 100% and nothing single is huge: she just has too much open. Closing a few apps fixes it.", label:"Worked example"},
        "If an app is frozen, end it from here: in Task Manager select it and choose **End task**; on a Mac press [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:Esc]] for **Force Quit**, or use Activity Monitor. Unsaved work in that app will be lost, so wait a minute first in case it recovers.",
        {warn:"Only end apps you recognise. Long lists of system processes are normal. Ending unknown system processes can make the device unstable, and a quick restart is the safer fix."}
      ]},
      {h:"Describe the problem and search the error", body:[
        "Whether you search online or ask someone, a clear description is half the fix. Helpers can’t see your screen, and “it’s broken” gives them nothing to work with. Include:",
        {list:[
          "**Device and system:** for example “Windows 11 laptop”, “iPhone with iOS 18”, “Samsung phone, Android 15”.",
          "**What you were doing,** what you expected, and what happened instead.",
          "**The exact error message or code,** copied word for word or as a screenshot.",
          "**When it started,** and anything that changed just before (an update, a new app, a drop).",
          "**What you have already tried,** such as “restarted twice, installed updates”."
        ]},
        {ex:"Windows 11 laptop. Since yesterday, Windows Update fails with error 0x80070070 when installing an update. I have restarted twice. Storage shows 2 GB free out of 64 GB. Nothing else changed.", label:"A clear problem description", mono:true},
        "Screenshots help. Windows: [[kbd:Win]] + [[kbd:Shift]] + [[kbd:S]]. Mac: [[kbd:Shift]] + [[kbd:Cmd]] + [[kbd:5]]. Chromebook: [[kbd:Ctrl]] + Show windows key. Most phones: the power or side button with a volume button.",
        "When you search an error:",
        {list:[
          "Search the **exact message or code** in quotation marks, plus your system: `\"0x80070070\" Windows 11 update`.",
          "Prefer **official support sites** (the maker of the device, OS or app) and recent answers that match your version.",
          "Remove personal details (names, email addresses, file names) before pasting a message anywhere public.",
          "Never download a “fix-it” or “driver updater” tool from a random result, and never call a phone number shown in a pop-up warning. Microsoft states that its error and warning messages never include a phone number, and that it doesn’t make unsolicited support calls."
        ]}
      ]},
      {h:"When to stop and ask for help", body:[
        "Knowing when to stop is a skill, not a failure. Stop and get help when:",
        {list:[
          "**There is a physical danger:** smoke, a burning smell, sparks, a swollen or bulging battery, a device too hot to hold, or liquid inside. Unplug it (if safe), don’t charge it, and contact the maker or an authorised repairer.",
          "**Your data is at risk:** clicking or grinding noises from a hard disk, warnings about drive failure, or files disappearing. Stop using the device so you don’t make recovery harder.",
          "**Something demands payment** to unlock your files or device, or you suspect someone has access to your accounts. Unit 3 covers what to do.",
          "**It is a work or school device.** Contact your IT team; they may have rules and tools you don’t, and changes you make could break their setup.",
          "**The simple fixes haven’t worked** and you are about to try something you don’t understand, such as editing system settings or resetting the device."
        ]},
        "Good places to get help: the official support site or support app of the maker, your organisation’s IT help desk, an authorised repair shop, or a knowledgeable person you trust who you contacted yourself. Give them your clear description and say what you’ve tried.",
        {key:"Simple, safe steps in order; one change at a time; a clear description; and stop as soon as there is danger or risk to your data."}
      ]}
    ],
    try:[
      {id:"t1u1-l5-x1", type:"order", q:"Amara’s accounting app has frozen. Put the first-aid steps in a sensible order.", items:[
        {t:"Wait a minute in case it recovers, and note any message on screen", why:"Apps sometimes catch up, and the message will help later."},
        {t:"Try to close the app normally", why:"The gentlest option first."},
        {t:"Force it to close (End task or Force Quit)", why:"If it won’t close normally, end it. Unsaved work in that app may be lost."},
        {t:"Restart the device", why:"If the problem comes back, a restart clears memory and reloads everything."},
        {t:"Check for updates to the app and the operating system", why:"A known bug may already be fixed."},
        {t:"Search the exact error message or contact the app’s support", why:"Once the simple fixes are done, look for specific help."}
      ]},
      {id:"t1u1-l5-x2", type:"mcq", q:"Fatima’s Windows laptop has a strange glitch. She chose **Shut down**, turned it on again, and the glitch is still there. A colleague says, “Choose **Restart** instead.” Why might that help?", options:[
        {t:"With Fast Startup on, Shut down saves the core of Windows to storage like hibernating; Restart does a full fresh boot", ok:true, why:"Microsoft documents that Fast Startup hibernates the kernel session at shut down and doesn’t apply to Restart. So a stuck state can survive shut down but not restart."},
        {t:"Restart is just a quicker way to do exactly the same thing", why:"On Windows with Fast Startup on, they really are different. That difference is the whole point."},
        {t:"Restart deletes temporary files and frees storage", why:"Restarting clears RAM, not storage. It doesn’t delete your files."},
        {t:"Restart reinstalls Windows from scratch", why:"Restart only reloads Windows from storage. Reinstalling is a much bigger step."}
      ]},
      {id:"t1u1-l5-x3", type:"sort", q:"Priya needs space on her laptop. Sort each item.", buckets:["Usually safe to remove","Don’t delete (or back up first)"], items:[
        {t:"Old installer files in Downloads", b:0, why:"Once the app is installed, its installer is usually no longer needed."},
        {t:"Items already in the Recycle Bin or Trash", b:0, why:"You already chose to delete them. Emptying the bin actually frees the space."},
        {t:"Apps she hasn’t used for a year", b:0, why:"They can be reinstalled from the official store later if needed."},
        {t:"The only copy of her family videos", b:1, why:"Back them up (for example to an external drive or cloud storage) before removing them from the laptop."},
        {t:"Unfamiliar files inside the Windows system folder", b:1, why:"System files keep Windows running. Deleting them can stop the computer from starting."},
        {t:"Duplicate copies of photos already backed up elsewhere", b:0, why:"If a safe copy exists elsewhere, extra duplicates only take space."}
      ]},
      {id:"t1u1-l5-x4", type:"match", q:"Match each symptom to the best first tool or action.", pairs:[
        ["Laptop fan roaring and everything slow","Open Task Manager or Activity Monitor and sort by CPU","See what is using the processor before guessing."],
        ["Phone battery empty by lunchtime","Check the Battery screen in Settings","It shows which apps used the most battery."],
        ["“Not enough space to install update”","Open Storage settings and free some space","Updates need free storage."],
        ["An error code appears on screen","Search the exact code in quotes with your system name","The exact code leads to specific, relevant answers."],
        ["A burning smell from the charger","Unplug it if safe, stop using it and get help","Physical danger: stop first-aid steps and get professional help."]
      ]},
      {id:"t1u1-l5-x5", type:"spot", q:"Kenji sends this message to his workplace help desk. Tap the parts that actually help someone diagnose the problem.", ask:"is a useful detail", parts:[
        {t:"Hi, my computer is broken.", flag:false, why:"Too vague: it doesn’t say what is wrong."},
        " ",{t:"It’s my Windows 11 laptop.", flag:true, why:"The device and operating system tell the helper which instructions apply."},
        " ",{t:"Windows Update fails with error 0x80070070.", flag:true, why:"The exact error code is the most useful detail of all."},
        " ",{t:"It started yesterday after I installed a printer app.", flag:true, why:"When it began and what changed just before are strong clues."},
        " ",{t:"It’s really annoying.", flag:false, why:"Understandable, but it doesn’t help anyone find the cause."},
        " ",{t:"I have already restarted twice.", flag:true, why:"Saying what you’ve tried saves the helper from repeating it."},
        " ",{t:"Please fix it ASAP!!", flag:false, why:"Urgency is fine to mention, but on its own it gives no information about the problem."}
      ], why:"Device and system, the exact message, when it started, and what you’ve tried: that is a description someone can act on."},
      {id:"t1u1-l5-x6", type:"mcq", q:"While browsing, Lucía sees a full-screen warning: “Your computer is infected! Call Microsoft Support now on this number.” What should she do?", options:[
        {t:"Not call. Close the browser tab or window (using Task Manager if it won’t close), then run her normal security scan if she’s worried", ok:true, why:"Microsoft says its error and warning messages never include a phone number. This is a tech support scam page, not a real infection report."},
        {t:"Call the number quickly before the infection spreads", why:"The number connects to scammers who try to get remote access or payment. Real Microsoft warnings don’t include phone numbers."},
        {t:"Download the cleaning tool the page offers", why:"Tools offered by scam pages are often malware themselves."},
        {t:"Turn off her antivirus so the page can fix the problem", why:"Never turn off protection because a web page tells you to. That is a classic scam instruction."}
      ]},
      {id:"t1u1-l5-x7", type:"mcq", q:"Tomás notices his phone’s back is bulging and the screen is lifting at one edge. What is the right first step?", options:[
        {t:"Stop using and charging it, and contact the maker or an authorised repairer", ok:true, why:"A swollen battery is a physical safety risk. It is not a first-aid job for you to fix."},
        {t:"Restart it to see if the problem goes away", why:"Restarting is for software problems. A swollen battery is physical damage and restarting won’t help."},
        {t:"Press the screen back into place", why:"Pressing on a swollen battery can damage it further and is dangerous."},
        {t:"Install the latest software update", why:"Updates fix software, not a physically damaged battery. And an update needs charging, which you should avoid."}
      ]}
    ],
    apply:{
      intro:"Practise the first-aid routine on a device that’s working, so it feels familiar when something does go wrong.",
      tasks:[
        {t:"Do a full restart and check for updates", how:{
          win:["Save your work, then choose **Start → Power → Restart** (not Shut down).","After signing in, open **Settings → Windows Update** and select **Check for updates**. Install any found, then restart if asked."],
          mac:["Choose **Apple menu → Restart**.","Then open **Apple menu → System Settings → General → Software Update** and install anything waiting."],
          chromeos:["Open **Settings → About ChromeOS** and select **Check for updates**.","If an update downloads, select **Restart** in the notification. Otherwise restart from the Power button in the quick settings."],
          phone:["**iPhone:** **Settings → General → Software Update**. Then restart (side button + a volume button, slide, then hold the side button).","**Android:** **Settings → System → Software updates** (or search Settings for “update”). Then hold the power button and choose **Restart**."]
        }},
        {t:"See what is using your device", how:{
          win:["Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]].","In **Processes**, select the **CPU** column heading to sort, then **Memory**. Note the top two apps for each.","Open the **Performance** tab and note how much memory is in use."],
          mac:["Press [[kbd:Cmd]] + [[kbd:Space]], type **Activity Monitor**, press Return.","Sort the **CPU** tab by **% CPU**, then look at the **Memory** tab. Note the top two apps for each."],
          chromeos:["Open Task Manager: press [[kbd:Shift]] + [[kbd:Esc]], or in Chrome choose **⋮ → More tools → Task manager**.","Sort by **CPU** and by **Memory footprint**. Note the top two for each."],
          phone:["**iPhone:** **Settings → Battery**: note the top two apps for battery use.","**Android:** **Settings → Battery → Battery usage** (names vary): note the top two apps."]
        }},
        {t:"Write your own problem-report template", how:["In a note, write the headings: Device and system · What I was doing · What I expected · What happened · Exact message · When it started · What I’ve tried.","Fill it in for any small problem you’ve had recently, or for an imaginary one.","Keep the note somewhere easy to find for next time."]}
      ],
      proof:"A note showing the date you last restarted and updated, the top apps using your processor, memory or battery, and a filled-in problem-report template."
    },
    read:[
      {book:"wss", where:"Chapter 2, Section 2.1 “Software Basics”: “Installing and Maintaining Software” (updates and getting help)"},
      {book:"ics", where:"Background reading: Chapter 6, Section 6.6 “Reliability and Security”"}
    ]
  }
  ],
  checkpoint:["t1u1-q02","t1u1-q07","t1u1-q11","t1u1-q14","t1u1-q17","t1u1-q20","t1u1-q23","t1u1-q26","t1u1-q30","t1u1-q34","t1u1-q38","t1u1-q43"],
  codex:[
    {id:"what-is-a-computer", title:"What a computer is", aka:["computer","input-process-output","IPO model"], tags:["hardware","basics"],
     summary:"A machine that takes input, processes it by following a program, stores it and produces output.",
     levels:{
       starter:[
         "A [[computer]] is a machine that follows instructions. You give it information (typing, tapping, speaking, taking a photo), it works on that information by following a program, it keeps things for later, and it shows or sends you a result.",
         "Think of a cook with a recipe. Ingredients come in, the cook follows the recipe, leftovers go in the fridge, and a dish comes out. A computer does the same four jobs: **input**, **processing**, **storage** and **output**.",
         "Computers are everywhere, not just on desks: phones, tablets, smart TVs, games consoles, watches, cars, Wi-Fi routers and the servers that run websites. If it runs software, it is a computer, and it can have bugs and need updates.",
         {key:"Input → processing → output, with storage keeping things for later."}
       ],
       builder:[
         "The four jobs are the most useful lens for understanding and fixing any device:",
         {table:[["Job","Parts that do it"],["Input","Keyboard, touchscreen, microphone, camera, sensors, network"],["Processing","CPU and GPU, using RAM as working space"],["Storage","SSD, hard disk, flash storage, memory cards"],["Output","Screen, speakers, printer, vibration, network"]]},
         "What makes a computer different from a fixed machine is that it is **programmable**. Load a different program and the same hardware becomes a word processor, a map, a music player or a game. And it works on any kind of **data**, because text, images and sound are all turned into numbers (see {{bits-bytes}}).",
         "Some parts do two jobs: a touchscreen is input and output; a network connection carries data both ways. That is fine. The model describes what is happening, not which box a part belongs in.",
         "When something goes wrong, ask which job is failing. Keyboard does nothing? Input. “Storage full”? Storage. Sound but black screen? Output. Freezing under load? Processing and memory. That question alone points you to the right first fix (see {{device-first-aid}}).",
         "Two more terms you will see: a [[server]] is a computer that serves others over a network, and a [[motherboard]] is the board that wires the parts together. Both fit the same model: a server does input (requests), processing, storage and output (responses), just at a much larger scale."
       ],
       pro:[
         "Most computers today follow the **stored-program** design usually credited to John von Neumann’s 1945 report: instructions and data both live in the same memory, and the processor repeatedly **fetches** an instruction, **decodes** it and **executes** it. Programs are therefore just data that can be loaded, replaced or updated, which is what makes software updates and app stores possible.",
         "Real systems blur the simple four-box picture in a few ways worth knowing:",
         {list:[
           "**Systems on a chip (SoCs)** in phones, tablets and many laptops combine CPU cores, GPU, memory controller and other processors on one chip, sometimes with RAM in the same package.",
           "**Embedded computers** inside appliances, cars and routers run fixed firmware with little or no user interface, yet they still process input and produce output, and still need security updates.",
           "**Client and server.** Much processing and storage now happens on servers in data centres. Your device is the client that sends requests and shows results. The “cloud” is this arrangement offered as a service.",
           "**Virtual machines** let one physical computer behave like several separate computers, each with its own operating system. Cloud providers rely on this heavily."
         ]},
         "For troubleshooting, professionals extend the four jobs with a fifth: **communication** (network). Many “the computer is broken” reports turn out to be a network problem between a perfectly working client and server."
       ]
     },
     related:["hardware-software","cpu","ram","storage-drives","operating-system"],
     read:[{book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”"},{book:"ics", where:"Chapter 5, Section 5.1 “Computer Systems Organization”"}],
     sources:[{t:"OpenStax Workplace Software and Skills, 1.2 Computer Hardware and Networks", url:"https://openstax.org/books/workplace-software-skills/pages/1-2-computer-hardware-and-networks"},{t:"OpenStax Introduction to Computer Science, 5.1 Computer Systems Organization", url:"https://openstax.org/books/introduction-computer-science/pages/5-1-computer-systems-organization"}],
     checked:"2026-10"},

    {id:"hardware-software", title:"Hardware and software", aka:["hardware","software","firmware"], tags:["basics"],
     summary:"Hardware is the physical parts; software is the instructions; firmware is software built into hardware.",
     levels:{
       starter:[
         "[[hardware|Hardware]] is everything physical: the screen, keyboard, chips, battery, cables. [[software|Software]] is the instructions that tell the hardware what to do: the operating system, apps, games.",
         "A piano and sheet music make a good picture. The piano is hardware; the music is software. One piano can play thousands of pieces, and new music doesn’t need a new piano. That’s why a phone can gain new features through an update: the hardware stays the same, the software changes.",
         "In between sits [[firmware]]: software stored inside a piece of hardware to control it, such as the start-up program of a computer or the software inside a router or printer.",
         {tip:"Before blaming old hardware for slowness, check the software side: too many apps open, a stuck update, or something running in the background."}
       ],
       builder:[
         {table:[["","Hardware","Software"],["Nature","Physical parts","Instructions and data"],["Failure","Wears out, breaks, overheats","Bugs, crashes, corrupted files, malware"],["Fix","Repair or replace","Restart, update, reinstall"],["Copying","Each copy must be manufactured","Copies cost almost nothing"]]},
         "Software comes in layers. **System software** (the operating system, drivers, firmware) runs the machine. **Application software** (apps) does tasks for you. Apps rely on the operating system, which relies on drivers and firmware to reach the hardware (see {{operating-system}}).",
         "Why the distinction matters in practice:",
         {list:[
           "Many problems that look like hardware faults are software: a restart or update fixes them (see {{device-first-aid}}).",
           "Some limits really are hardware: you can’t download more RAM or a bigger battery. Knowing which is which saves money.",
           "Hardware stops getting software support eventually. When a maker ends updates for a device, the hardware may still work but becomes a security risk."
         ]},
         "Updates show the split clearly. A **software update** changes the instructions: new features, bug fixes, security fixes. It can be undone or replaced. A **hardware upgrade** (more RAM, a bigger drive) changes the machine itself and is often impossible on phones and thin laptops, where parts are soldered in place. When a device feels old, ask first whether a software fix (restart, update, removing unneeded apps) is enough."
       ],
       pro:[
         "The line between hardware and software is a design choice. The same function can be built into a chip (fast, efficient, fixed) or written as software (flexible, updatable). Video decoding, encryption and AI acceleration have all moved partly into dedicated hardware over the years, while things like modems moved partly into software.",
         "**Firmware** deserves more attention than it usually gets. A PC’s UEFI firmware initialises hardware and starts the operating system; Secure Boot uses it to check that the boot software is signed by a trusted party. Storage drives, network cards, keyboards and batteries contain their own firmware. Because firmware runs before and beneath the operating system, flaws in it can be hard to detect and hard to remove, which is why makers ship firmware updates and why interrupting one can leave a device unable to start.",
         "**Microcode** is a further layer inside the CPU itself; processor makers occasionally patch it through firmware or OS updates to fix bugs and security issues.",
         "For support work, the practical rule is to rule out software first: it is cheaper and faster to test. Restart, update, try another account or a clean boot, and only then suspect the hardware. Built-in diagnostics (many PC makers ship them, and Chromebooks have a Diagnostics app) can test hardware directly."
       ]
     },
     related:["what-is-a-computer","operating-system","installing-apps"],
     read:[{book:"wss", where:"Chapter 2, Section 2.1 “Software Basics”"}],
     sources:[{t:"OpenStax Workplace Software and Skills, 2.1 Software Basics", url:"https://openstax.org/books/workplace-software-skills/pages/2-1-software-basics"},{t:"OpenStax Introduction to Computer Science, 6.1 What Is an Operating System?", url:"https://openstax.org/books/introduction-computer-science/pages/6-1-what-is-an-operating-system"}],
     checked:"2026-10"},

    {id:"cpu", title:"The processor (CPU)", aka:["CPU","processor","central processing unit","cores","clock speed"], tags:["hardware"],
     summary:"The chip that carries out a program’s instructions; described by its cores and clock speed.",
     levels:{
       starter:[
         "The [[cpu|CPU]] (central processing unit), or processor, is the part of a computer that actually carries out instructions. If a computer were a kitchen, the CPU would be the cook, working through the recipe one tiny step at a time, billions of times a second.",
         "Two words appear on spec sheets. A [[core]] is one complete cook inside the chip; four cores can work on four things at once. [[clock-speed|Clock speed]], in gigahertz (GHz), is how many steps per second each core can take; 1 GHz is a billion.",
         {warn:"Don’t compare processors by GHz alone. A newer chip at a lower GHz can be faster than an older one at a higher GHz, because it does more work in each step."},
         "For documents, browsing and video calls, almost any current processor is enough. More RAM or an SSD often makes a bigger difference."
       ],
       builder:[
         "The CPU repeats a simple cycle: **fetch** the next instruction from memory, **decode** what it means, **execute** it (add, compare, move data, jump to another step), and move on. Everything from scrolling to video calls is built from these simple steps.",
         {list:[
           "**Cores.** Each core runs its own stream of instructions. More cores help when many things run at once or when software splits work up (video export, big spreadsheets). Many current chips mix **performance cores** for heavy work with **efficiency cores** for light tasks, to save battery.",
           "**Clock speed.** Shown as a base and a boost (“up to 4.5 GHz”). Chips speed up for short bursts and slow down when hot or on battery.",
           "**Cache.** A small, very fast memory on the chip that holds data the cores are likely to need next."
         ]},
         "In phones, tablets and many laptops, the CPU is part of a **system on a chip (SoC)** with the GPU and other processors. To compare processors, use the full model name and generation, and look at independent reviews or benchmark results for the tasks you care about.",
         "A CPU that is constantly near 100% (see {{task-manager}}) usually means one program is busy or stuck, not that the processor is too slow."
       ],
       pro:[
         "Performance is roughly **instructions per cycle × cycles per second × number of cores that the work can use**. Clock frequency stopped rising quickly in the mid-2000s, when power and heat limits (the end of Dennard scaling) made faster clocks impractical. Designers turned instead to more cores, wider cores that do more per cycle, bigger caches and specialised units.",
         "Things professionals keep in mind:",
         {list:[
           "**Amdahl’s law:** the part of a task that can’t be split up limits how much extra cores help. Many everyday apps use only a few cores.",
           "**Thermal and power limits:** thin laptops may run the same chip slower than thicker ones because they can’t remove heat as fast. Sustained performance can differ a lot from short-burst figures.",
           "**Instruction set architecture:** most PCs use x86-64 (Intel, AMD); phones, tablets, Apple-silicon Macs and some newer Windows laptops use Arm. Software must be built for the architecture, or translated, which is why app compatibility can differ between otherwise similar laptops.",
           "**Heterogeneous computing:** GPUs and neural processing units (NPUs) take over specific kinds of work, so the CPU is no longer the only processor that matters."
         ]},
         "Practical diagnostics: sustained 100% CPU from one process usually points to a busy or stuck program rather than a weak processor, while high temperatures with low clock speeds point to cooling problems (dust in fans, blocked vents)."
       ]
     },
     related:["ram","gpu","reading-specs","task-manager"],
     read:[{book:"ics", where:"Chapter 5, Section 5.6 “Processor Architectures”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 5.1 Computer Systems Organization", url:"https://openstax.org/books/introduction-computer-science/pages/5-1-computer-systems-organization"},{t:"OpenStax Introduction to Computer Science, 5.6 Processor Architectures", url:"https://openstax.org/books/introduction-computer-science/pages/5-6-processor-architectures"}],
     checked:"2026-10"},

    {id:"ram", title:"Memory (RAM)", aka:["RAM","memory","random-access memory","working memory"], tags:["hardware"],
     summary:"Fast working memory that holds what is open right now and empties when the power goes off.",
     levels:{
       starter:[
         "[[ram|RAM]] (random-access memory) is a computer’s **working memory**. Whatever you have open right now (apps, browser tabs, the document you’re typing) is held in RAM so the processor can reach it instantly.",
         "Think of a countertop in a kitchen. The cook (the processor) works on the countertop, not inside the fridge. A bigger countertop lets you have more things out at once. When the kitchen closes (the power goes off) the countertop is cleared. RAM is the same: it **empties when the power goes off**. That is why you save your work: saving copies it to [[storage]].",
         {warn:"People often say “memory” when they mean storage. A phone’s “128 GB” is storage. RAM is usually a much smaller number."},
         "A quick test: if your device gets slow only when lots of things are open, and speeds up when you close some, RAM is the likely limit. If it complains it can’t save or update, storage is the limit."
       ],
       builder:[
         {table:[["","RAM","Storage"],["Holds","What is open now","Files, apps, operating system"],["Power off","Empties","Keeps everything"],["Speed","Very fast","Slower"],["Shortage symptom","Slow with many things open","Can’t save, install or update"]]},
         "When you open a file or app, it is copied from storage into RAM. The processor works on it there. When you save, the changes are written back to storage.",
         "If RAM fills up, the operating system moves less-used parts of memory out to storage (called **swap**, **paging** or a **page file**) and some systems compress memory. Things keep working, but more slowly, because storage is far slower than RAM. That is the main reason a device with too little RAM feels sluggish when you have many tabs and apps open.",
         "What to do when memory is the bottleneck (check with {{task-manager}}): close apps and tabs you aren’t using, restart to clear leftovers, and when buying, choose enough RAM, because in most phones and many laptops it is soldered on and can’t be upgraded.",
         "Phones manage RAM for you: when memory runs low, the system quietly closes apps in the background, which is why an app sometimes reloads when you switch back to it. On computers you are more in charge, so closing what you don’t need matters more."
       ],
       pro:[
         "Main memory in PCs and phones is **DRAM** (dynamic RAM), which stores each bit as a charge in a tiny capacitor that must be refreshed many times a second; that is why it is volatile. The CPU’s caches use faster, more expensive **SRAM**. Together with registers and storage they form the **memory hierarchy**: each level is bigger, slower and cheaper per byte than the one above, and caching exploits the fact that programs tend to reuse recently used data (locality).",
         {list:[
           "**Capacity is binary.** RAM is manufactured in powers of two, so “16 GB” of RAM is 16 GiB (see {{file-size-units}}).",
           "**Unified memory.** Many SoCs share one pool of RAM between CPU and GPU. Graphics then use part of the system RAM, which counts against what apps can use.",
           "**Memory pressure** is a better guide than “percentage used”. Modern operating systems deliberately fill spare RAM with cached data to speed things up, so high usage alone isn’t a problem. Heavy swapping and compression are the real signs of shortage (macOS Activity Monitor shows a Memory Pressure graph).",
           "**Memory leaks** are bugs where a program keeps claiming memory and never releases it. A restart (or restarting that app) clears them, which is one reason restarts help."
         ]}
       ]
     },
     related:["cpu","storage-drives","task-manager","file-size-units"],
     read:[{book:"ics", where:"Chapter 5, Section 5.5 “Memory Hierarchy”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 5.5 Memory Hierarchy", url:"https://openstax.org/books/introduction-computer-science/pages/5-5-memory-hierarchy"},{t:"OpenStax Introduction to Computer Science, 5.1 Computer Systems Organization", url:"https://openstax.org/books/introduction-computer-science/pages/5-1-computer-systems-organization"}],
     checked:"2026-10"},

    {id:"storage-drives", title:"Storage drives: SSD and HDD", aka:["storage","SSD","HDD","hard drive","flash storage","eMMC","UFS"], tags:["hardware","storage"],
     summary:"Where files, apps and the operating system are kept when the power is off: fast flash SSDs or larger, cheaper spinning hard disks.",
     levels:{
       starter:[
         "[[storage|Storage]] is where a device keeps things permanently: your files, photos, apps and the operating system itself. Unlike RAM, it **keeps everything when the power is off**. In the kitchen picture, storage is the pantry and fridge.",
         "There are two main kinds of drive. A [[hdd|hard disk drive (HDD)]] stores data on spinning magnetic platters, read by a moving arm. An [[ssd|SSD]] (solid-state drive) stores data on flash memory chips with no moving parts, like a big, fast USB stick.",
         "SSDs are much faster, silent and tougher. Hard disks give more space for the money, so they are still popular for big backup drives.",
         {tip:"An SSD as the main drive makes the biggest single difference to how quickly a computer starts and opens apps."}
       ],
       builder:[
         {table:[["","SSD / flash","HDD"],["Technology","Flash memory chips","Spinning magnetic platters"],["Speed","Much faster, especially for many small files","Slower; must move the arm to each spot"],["Durability","No moving parts; handles bumps well","Sensitive to drops while running"],["Noise","Silent","Can hum or click"],["Cost per TB","Higher","Lower"]]},
         "On spec sheets you may see:",
         {list:[
           "**NVMe SSD:** a fast SSD that connects over the high-speed PCIe interface; common in current laptops.",
           "**SATA SSD:** an older, slower connection, still far faster than a hard disk.",
           "**eMMC** and **UFS:** flash storage soldered to the board, used in phones, tablets and low-cost laptops. eMMC in particular is slower than a proper SSD.",
           "**rpm** (5,400 or 7,200): the spinning speed of a hard disk. Higher is faster."
         ]},
         "Capacity on the box uses decimal units (1 GB = 1,000,000,000 bytes). Your system may show less, partly because of units and partly because the operating system takes a share (see {{file-size-units}}). Keep a comfortable amount free: a nearly full drive stops updates and slows the system.",
         "External storage works the same way: USB sticks and memory cards are flash; big external drives may be SSDs or hard disks. Whatever the type, a drive can fail without warning, so important files need a second copy somewhere else (Unit 2 covers backups)."
       ],
       pro:[
         "Flash memory stores charge in cells that wear out after a limited number of write cycles. SSD controllers spread writes evenly (**wear levelling**), keep spare cells, and use the **TRIM** command from the operating system to learn which blocks are free. For normal personal use, modern SSDs typically outlast the rest of the device, but the wear is real, and makers state endurance as total terabytes written (TBW).",
         {list:[
           "**Failure modes differ.** Hard disks often give warning signs (clicking, grinding, slowdowns, SMART warnings). SSDs more often fail suddenly. Either way, the defence is a backup, not a better drive.",
           "**Deleting is not erasing.** On a hard disk, deleted data can often be recovered until overwritten. On SSDs, TRIM and encryption make recovery harder, but before selling or recycling a device use the operating system’s full reset or the maker’s secure-erase method, ideally with encryption already on.",
           "**Formatted capacity.** The file system, a recovery partition and spare areas use some raw capacity. Apple notes that formatting uses some storage space and that the operating system uses more.",
           "**Speed figures.** Sequential speeds (MB/s for big files) look impressive in adverts; random small-file performance matters more for how responsive a computer feels."
         ]},
         "Encryption (BitLocker or Device Encryption on Windows, FileVault on Mac, on by default on modern phones) protects a lost device’s data."
       ]
     },
     related:["ram","file-size-units","reading-specs","device-first-aid"],
     read:[{book:"ics", where:"Chapter 5, Section 5.5 “Memory Hierarchy”: “Storage Technologies”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 5.5 Memory Hierarchy", url:"https://openstax.org/books/introduction-computer-science/pages/5-5-memory-hierarchy"},{t:"Apple Support: How storage capacity is measured on Apple devices", url:"https://support.apple.com/102119"}],
     checked:"2026-10"},

    {id:"gpu", title:"Graphics processor (GPU)", aka:["GPU","graphics card","integrated graphics","dedicated graphics"], tags:["hardware"],
     summary:"A processor built to do many simple calculations at once: drawing the screen, video, games, editing and AI.",
     levels:{
       starter:[
         "The [[gpu|GPU]] (graphics processing unit) is a processor specialised in doing many simple calculations at the same time. Its first job was drawing pictures on the screen, which means working out the colour of millions of pixels many times a second.",
         "If the CPU is one very clever cook, the GPU is a huge team of kitchen helpers all chopping at once. Each helper is simpler, but together they finish repetitive work fast.",
         "Most phones and laptops have an **integrated** GPU built into the main chip. That is fine for everyday work, video calls and streaming. A **dedicated** GPU (a separate chip or graphics card) adds power for gaming, 3D design, video editing and some AI work, but costs more, uses more power and makes more heat."
       ],
       builder:[
         "What GPUs do in everyday devices:",
         {list:[
           "**Draw the interface:** windows, animations, scrolling and multiple monitors.",
           "**Video:** dedicated video engines decode and encode formats such as H.264, HEVC and AV1, so video plays smoothly without draining the battery. Whether a device supports a format in hardware affects battery life during streaming.",
           "**Games and 3D:** rendering scenes in real time.",
           "**Editing:** photo filters and video effects.",
           "**AI and science:** training and running neural networks, which consist of huge numbers of similar calculations."
         ]},
         {table:[["","Integrated GPU","Dedicated GPU"],["Where","Inside the main chip","Separate chip or card"],["Memory","Shares system RAM","Has its own fast video memory (VRAM)"],["Good for","Everyday work, video, light editing","Gaming, 3D, heavy video, AI"],["Downsides","Less power","Cost, heat, battery life"]]},
         "For everyday study and work, an integrated GPU is enough. If a course or job needs a particular design, video or AI program, check its stated graphics requirements before buying.",
         "A quick sign of which you have: Windows Task Manager’s **Performance** tab names the graphics processor (on Macs with Apple silicon the GPU is part of the chip shown in **About This Mac**; Intel-based Macs list **Graphics** separately). Many laptops with a dedicated GPU list both an integrated and a dedicated one.",
         "For most learners the GPU is something to notice, not something to shop for."
       ],
       pro:[
         "Architecturally, a GPU has thousands of simple arithmetic units organised to run the same instruction across many data items at once (often called SIMD or SIMT). That suits **data-parallel** work: pixels, vertices, matrix multiplication. It is poor at branching, sequential logic, which stays on the CPU. This is an example of **heterogeneous computing**, where different processors handle the work they are best at.",
         {list:[
           "**VRAM** capacity often limits what a dedicated GPU can do (texture-heavy games, large AI models) more than its raw speed.",
           "**Unified memory** SoCs let CPU and GPU share one pool, which avoids copying but means graphics use system RAM.",
           "**Drivers matter.** GPU drivers are large and updated often; outdated drivers are a common cause of display glitches and game crashes. Get them through the operating system’s updates or the GPU maker’s official site.",
           "**NPUs** (neural processing units) are now appearing beside GPUs to run AI features efficiently on battery."
         ]},
         "Laptops with both an integrated and a dedicated GPU switch between them to save power; when a program uses the wrong one, the operating system’s graphics settings let you choose per app.",
         "When comparing GPUs, model names and independent benchmarks for the specific games or programs you use are far more useful than headline figures such as core counts, which aren’t comparable between makers."
       ]
     },
     related:["cpu","ram","reading-specs"],
     read:[{book:"ics", where:"Chapter 5, Section 5.6 “Processor Architectures”: “Heterogeneous Processor Architectures”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 5.6 Processor Architectures", url:"https://openstax.org/books/introduction-computer-science/pages/5-6-processor-architectures"}],
     checked:"2026-10"},

    {id:"ports-peripherals", title:"Ports, cables and peripherals", aka:["ports","USB","USB-C","USB-A","HDMI","Bluetooth","peripherals","Thunderbolt"], tags:["hardware"],
     summary:"The sockets and wireless links that connect a computer to keyboards, screens, drives and more, and why USB-C needs care.",
     levels:{
       starter:[
         "A [[port]] is a socket on a device where you plug something in. A [[peripheral]] is any extra device you connect: a mouse, keyboard, monitor, printer, headset or external drive.",
         "The ones you’ll meet most: [[usb|USB-A]] (flat rectangle that only fits one way), [[usb|USB-C]] (small oval that fits either way, used for charging, data and screens), [[hdmi|HDMI]] (for monitors and TVs), a headphone jack, and sometimes Ethernet for wired internet. Wireless links do the same job without a plug: [[bluetooth|Bluetooth]] for headphones, mice and watches; Wi-Fi for networks.",
         {warn:"USB-C is a shape, not a promise. Two USB-C ports or cables can look identical but differ in charging power, data speed and whether they carry a picture to a monitor."},
         "Before buying a cable, charger or adapter, check what your device’s ports support. The maker’s spec sheet or support page usually has a port diagram."
       ],
       builder:[
         {table:[["Connection","Typical use","Watch for"],["USB-A","Mice, keyboards, USB sticks","Older but still common; slower versions exist"],["USB-C","Charging, data, monitors, docks","Features depend on port, cable and device"],["Thunderbolt (USB-C shape)","Fast docks, displays, external drives","Lightning-bolt symbol; also works with ordinary USB-C devices"],["HDMI","Monitors, TVs, projectors","Cable version matters for very high resolutions"],["Bluetooth","Headphones, keyboards, mice","Needs pairing; short range"],["Ethernet","Wired network","Often more stable than Wi-Fi"]]},
         "When a USB-C connection doesn’t do what you expect, check three things: does the **port** support it (look for symbols next to it or the maker’s spec sheet), does the **cable** support it (many cheap cables are charge-only or slow), and does the **device** support it. Microsoft’s USB-C troubleshooting advice says the cable must support the same USB-C features as the connected device, and display output depends on “Alternate Modes” supported by the PC and the connected device.",
         "Adapters and docks can add ports, but buy from reputable makers: a poor charger or cable can damage a device or be a fire risk.",
         "Wireless peripherals need a little care too. Bluetooth devices must be **paired** once; if one stops connecting, turn Bluetooth off and on, or remove the device from the list and pair it again. Wireless keyboards and mice also run on batteries, so a dead battery is the first thing to check when one stops working."
       ],
       pro:[
         "USB names are confusing because the **connector** (Type-A, Type-C) and the **protocol** (USB 2.0, USB 3.x, USB4, with speeds from 480 Mbit/s up to tens of Gbit/s) are separate. A USB-C port might carry only USB 2.0 data, or USB4 with display and high-power charging. **USB Power Delivery** negotiates voltage and current between charger and device, which is why a high-wattage laptop charger can safely charge a phone.",
         {list:[
           "**Alternate Modes** let a USB-C port carry DisplayPort (and some other) signals. Without them, a USB-C port can’t drive a monitor directly.",
           "**Thunderbolt 3, 4 and 5** use the USB-C connector and add guaranteed features (such as minimum speed and display support). Apple’s port guide shows Thunderbolt, USB 4 and USB-C ports sharing the same shape.",
           "**Cable markings** (speed and wattage logos) help; unmarked cables are often the most limited kind.",
           "**Bluetooth** versions and codecs affect audio quality, range and battery. Pairing creates a trusted link between two devices; forget and re-pair to fix many connection glitches.",
           "**Security:** unknown USB sticks can carry malware, and some charging-station attacks have been demonstrated. Use your own charger and cable where possible."
         ]},
         "Docking stations turn one USB-C or Thunderbolt connection into many ports (power, monitors, Ethernet, USB-A). Compatibility depends on the laptop’s port capabilities, so check the dock maker’s compatibility list."
       ]
     },
     related:["reading-specs","what-is-a-computer"],
     sources:[{t:"Apple Support: Identify the ports on your Mac", url:"https://support.apple.com/109523"},{t:"Microsoft Support: Fix USB-C problems in Windows", url:"https://support.microsoft.com/en-au/windows/fix-usb-c-problems-in-windows-f4e0e529-74f5-cdae-3194-43743f30eed2"}],
     checked:"2026-10"},

    {id:"bits-bytes", title:"Bits, bytes and binary", aka:["bit","byte","binary","base 2"], tags:["data","units"],
     summary:"Computers store everything as bits (0 or 1); eight bits make a byte.",
     levels:{
       starter:[
         "Inside a computer, every piece of information is stored as rows of tiny switches that are either off or on. We write them as **0** and **1**. One of these is a [[bit]] (binary digit). This two-digit number system is called [[binary]].",
         "One bit can only say yes or no, but bits add up fast: every extra bit doubles the number of patterns. Eight bits make a [[byte]], which has 256 possible patterns: enough for one basic letter, digit or symbol.",
         "Everything you see on a computer is numbers in disguise. A letter has a numeric code, each pixel’s colour is three numbers, and sound is a long list of numbers measuring the wave.",
         {warn:"Lowercase **b** = bits, uppercase **B** = bytes. Mb (megabits) and MB (megabytes) differ by a factor of 8."}
       ],
       builder:[
         "In decimal, each place is worth ten times the place to its right (1, 10, 100…). In binary, each place is worth twice as much: 1, 2, 4, 8, 16, 32, 64, 128.",
         {ex:"01000001 = 64 + 1 = 65. In common text encodings, 65 is the code for the capital letter A.\n1101 = 8 + 4 + 1 = 13.", label:"Reading binary", mono:true},
         {table:[["Bits","Patterns","Used for"],["1","2","on/off, yes/no"],["8 (1 byte)","256","one basic character"],["16","65,536","one sample of CD-quality sound"],["24","about 16.7 million","one pixel’s colour (8 bits each for red, green, blue)"]]},
         "Text uses a standard called **Unicode** to give every character in the world’s writing systems a number. The web mostly stores those numbers using **UTF-8**, where basic Latin letters take 1 byte and other characters and emoji take 2 to 4 bytes.",
         "Sizes are measured in bytes (kilobytes, megabytes…; see {{file-size-units}}); speeds in bits per second.",
         "Why this matters to you: it explains why file sizes grow with quality. A photo with more pixels, more colour depth or less compression needs more bytes; a longer or sharper video needs many more. Units of size and speed are all just ways of counting bits and bytes.",
         "Keep the lowercase-b and uppercase-B rule in mind and most unit mistakes disappear."
       ],
       pro:[
         "**n bits give 2ⁿ patterns.** That single rule explains a lot: 32-bit systems could address about 4 GiB of memory (2³²), IPv4 has about 4.3 billion addresses, and an 8-bit colour channel has 256 levels.",
         {list:[
           "**Hexadecimal** (base 16, digits 0–9 and A–F) is a compact way to write binary: one hex digit is exactly 4 bits, so a byte is two hex digits (01000001 = 0x41). You’ll see hex in error codes such as 0x80070070, colour codes like #FF8800, and MAC addresses.",
           "**Integers** are usually stored in two’s complement so the same circuits can add positive and negative numbers. **Real numbers** use floating point (IEEE 754), which is why some decimals, such as 0.1, can’t be stored exactly and spreadsheet results occasionally show tiny rounding errors.",
           "**Bits vs bytes in practice:** storage and memory are measured in bytes; network links and some audio and video bitrates in bits per second.",
           "**Compression** reduces the number of bits needed, losslessly (ZIP, PNG) or by discarding detail people barely notice (JPEG, MP3, most video)."
         ]},
         "Endianness, the order in which the bytes of a larger number are stored, is one more detail you will meet only in programming and file-format work.",
         "Checksums and hashes, used to verify downloads, are also just fixed-length strings of bits."
       ]
     },
     related:["file-size-units","what-is-a-computer"],
     read:[{book:"ics", where:"Chapter 5, Section 5.3 “Machine-Level Information Representation”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 5.3 Machine-Level Information Representation", url:"https://openstax.org/books/introduction-computer-science/pages/5-3-machine-level-information-representation"},{t:"NIST Reference on Constants, Units and Uncertainty: Prefixes for binary multiples", url:"https://www.physics.nist.gov/cgi-bin/cuu/Info/Units/binary.html"}],
     checked:"2026-10"},

    {id:"file-size-units", title:"File sizes and speeds: KB, MB, GB, GiB, Mbps", aka:["kilobyte","megabyte","gigabyte","terabyte","gibibyte","KiB","MiB","GiB","Mbps","MB/s"], tags:["data","units"],
     summary:"Decimal units (1,000) vs binary units (1,024), why drives look smaller, and how to convert Mbps to MB/s.",
     levels:{
       starter:[
         "File and drive sizes are measured in bytes, with prefixes for big numbers: a [[kilobyte]] (kB) is 1,000 bytes, a [[megabyte]] (MB) a million, a [[gigabyte]] (GB) a billion, a [[terabyte]] (TB) a trillion. Each step is ×1,000, just like metres and kilometres.",
         "Two traps catch almost everyone:",
         {list:[
           "**The “missing” space.** Windows measures in steps of 1,024 but still writes “GB”, so a 512 GB drive shows as about 476 GB. Nothing is missing; it’s a different ruler.",
           "**Bits vs bytes.** Internet speeds are sold in [[mbps|Mbps]] (megabits per second). Downloads show MB/s (megabytes). Divide Mbps by 8: 100 Mbps is at most 12.5 MB/s."
         ]},
         "Rule of thumb: **sizes** use bytes (B), **speeds** use bits (b). If the units don’t match, multiply or divide by 8 before comparing."
       ],
       builder:[
         {table:[["Decimal (SI)","Bytes","Binary (IEC)","Bytes"],["kB","1,000","KiB","1,024"],["MB","1,000,000","MiB","1,048,576"],["GB","1,000,000,000","GiB","1,073,741,824"],["TB","10¹²","TiB","1,099,511,627,776"]]},
         "Who uses which: drive makers and current Apple systems (macOS, iOS, iPadOS) use decimal. Windows calculates in binary units but labels them KB, MB and GB. Linux tools and apps vary; some show GiB explicitly. RAM is always made in binary sizes.",
         {ex:"How many 4 MB photos fit in 64 GB?  64 × 1,000 = 64,000 MB; 64,000 ÷ 4 = 16,000.\nHow long does 5 GB take at 50 Mbps?  5,000 MB × 8 = 40,000 Mb; 40,000 ÷ 50 = 800 s ≈ 13 min 20 s.\nWhat does Windows show for 512 GB?  512,000,000,000 ÷ 1,073,741,824 ≈ 476.8.", label:"Three calculations", mono:true},
         "Method: put both sides in the same unit, convert bits↔bytes (×8 or ÷8) for speeds, divide, then sanity-check. Real downloads are slower than the best case because of Wi-Fi, shared connections, servers and network overhead.",
         "A useful cross-check for speeds: Mbps ÷ 8 ≈ MB/s, so 100 Mbps ≈ 12.5 MB/s, 300 Mbps ≈ 37.5 MB/s and 1,000 Mbps (1 Gbps) ≈ 125 MB/s. If a calculation gives an answer far from these, look for a missing ×8 or a GB that wasn’t converted to MB.",
         "When in doubt, state which convention you used."
       ],
       pro:[
         "The IEC introduced the binary prefixes kibi, mebi, gibi and tebi in December 1998 (published in 1999), and they are now part of the international standard IEC 80000-13. The SI prefixes kilo, mega and giga strictly mean powers of ten. The gap grows with size: about 2.4% at kilo, 7.4% at giga, 10% at tera, which is why the confusion became noticeable as drives grew.",
         {list:[
           "**Apple** says older systems (iOS 10 and earlier, OS X Leopard and earlier) reported binary values; current ones report decimal, matching packaging.",
           "**Lowercase k** is the correct SI symbol (kB); “KB” is common but informal. Some writers use KB to mean 1,024 bytes, which is exactly the ambiguity the IEC prefixes fix.",
           "**Network speeds** use decimal prefixes: 1 Gbit/s = 1,000,000,000 bits per second. Protocol overhead (headers, encryption, retransmissions) means usable throughput is a few percent lower even on a perfect link, and Wi-Fi adds more.",
           "**Size on disk** can exceed a file’s size because file systems allocate space in blocks (often 4 KiB); compression and cloud placeholders can make it smaller.",
           "**Mixed units in one tool** happen: a download manager might show MiB/s while the provider quotes Mbps. When precision matters, check the documentation."
         ]},
         "Precision rarely matters day to day; consistency does."
       ]
     },
     related:["bits-bytes","storage-drives","reading-specs"],
     sources:[{t:"NIST Reference on Constants, Units and Uncertainty: Prefixes for binary multiples", url:"https://www.physics.nist.gov/cgi-bin/cuu/Info/Units/binary.html"},{t:"Apple Support: How storage capacity is measured on Apple devices", url:"https://support.apple.com/102119"}],
     checked:"2026-10"},

    {id:"operating-system", title:"Operating systems", aka:["OS","Windows","macOS","ChromeOS","Linux","iOS","iPadOS","Android","drivers","firmware"], tags:["software"],
     summary:"The main program that runs a device: it manages hardware, runs apps, keeps files and users in order, and protects the system.",
     levels:{
       starter:[
         "The [[operating-system|operating system (OS)]] is the main program on a device. It starts when you turn the device on and runs everything else. Picture a hotel manager: apps are the guests, the hardware is the building, and the manager hands out rooms, keeps guests apart, keeps the records and calls the technicians.",
         "The main ones are **Windows** (PCs from many makers), **macOS** (Macs), **ChromeOS** (Chromebooks), **Linux** (servers and some PCs), **iOS and iPadOS** (iPhone, iPad) and **Android** (phones and tablets from many makers).",
         "Apps are written for particular operating systems, so “Does it run on my system?” is the first question when choosing software.",
         "The OS also handles updates. Security fixes for the OS are among the most important updates you can install, which is why Lesson 5 and Unit 3 come back to them."
       ],
       builder:[
         "The operating system’s main jobs:",
         {list:[
           "**Hardware:** uses [[driver|drivers]] to talk to each device, so apps don’t need to know the details of every printer or camera.",
           "**Processes and memory:** switches the processor between programs many times a second and gives each its own protected share of RAM.",
           "**Files:** organises storage into files and folders, with names, permissions and search.",
           "**Users:** separate accounts, sign-in, and rights (see {{user-accounts}}).",
           "**Security:** permissions, app isolation, built-in protection and security updates.",
           "**Interface:** the desktop or home screen, windows, notifications and settings."
         ]},
         "Underneath sits [[firmware]], which starts the hardware and loads the OS (on PCs called UEFI or BIOS). The process of starting up is called [[boot|booting]].",
         "Each OS gets regular updates, and makers stop supporting old versions eventually. An unsupported OS no longer gets security fixes, so check how long your device will be supported.",
         "Day to day, you meet the OS when you change settings, manage files, install or remove apps, connect a new device, sign in, or install updates. If a problem appears in every app (no sound anywhere, no internet anywhere), suspect an OS setting, a driver or the hardware; if it appears in one app only, suspect that app.",
         "Learning where your OS keeps its main settings pays off quickly."
       ],
       pro:[
         "The core of an OS is the **kernel**, which runs with full hardware privileges. Apps run in a restricted **user mode** and must ask the kernel (through system calls) to open files, use the network or reach devices. This separation is what lets the OS stop one app from crashing or spying on another. Windows uses the NT kernel; macOS and iOS share Apple’s XNU kernel; Android and ChromeOS build on the Linux kernel.",
         {list:[
           "**Scheduling:** the kernel decides which thread runs on which core and for how long, balancing responsiveness, throughput and battery.",
           "**Virtual memory:** each process sees its own address space; the kernel maps it onto physical RAM and, when needed, onto storage (paging).",
           "**Drivers** often run with kernel privileges, so a faulty driver can crash the whole system. That is why driver updates come through vetted channels.",
           "**Sandboxing:** mobile systems (and increasingly desktop ones) confine each app to its own data and require explicit permission for sensors and personal data.",
           "**Boot chain:** firmware → boot loader → kernel → system services → sign-in. Secure Boot and similar mechanisms check each stage’s signature."
         ]},
         "Mobile operating systems are tightly controlled by their makers, which simplifies security but limits what you can change. Desktop operating systems allow more freedom, and more risk."
       ]
     },
     related:["hardware-software","installing-apps","user-accounts","task-manager"],
     read:[{book:"ics", where:"Chapter 6, Section 6.1 “What Is an Operating System?”"},{book:"wss", where:"Chapter 1, Section 1.2 “Computer Hardware and Networks”: “Operating Systems”"}],
     sources:[{t:"OpenStax Introduction to Computer Science, 6.1 What Is an Operating System?", url:"https://openstax.org/books/introduction-computer-science/pages/6-1-what-is-an-operating-system"},{t:"OpenStax Workplace Software and Skills, 1.2 Computer Hardware and Networks", url:"https://openstax.org/books/workplace-software-skills/pages/1-2-computer-hardware-and-networks"}],
     checked:"2026-10"},

    {id:"installing-apps", title:"Installing apps safely", aka:["app store","apps","web apps","downloads","sideloading"], tags:["software","security"],
     summary:"Get apps from official stores or developers’ official sites, read prompts and permissions, and remove what you don’t use.",
     levels:{
       starter:[
         "An [[app]] is a program that does a task for you. You can **install** apps onto your device, or use [[web-app|web apps]] that run in your browser with nothing to install.",
         "The safest places to get installed apps are your system’s official [[app-store|app store]] (the Microsoft Store, Apple’s App Store, Google Play) or the developer’s **official website**. Avoid “free download” adverts, look-alike sites, files sent in chats, and “cracked” paid software: these are common ways to spread [[malware]].",
         "When an app asks for permission to use your camera, location or contacts, ask: **does it need this to do its job?** If not, say no.",
         {tip:"Uninstall apps you no longer use. Fewer apps means fewer updates and fewer risks."},
         "If an app’s source is unclear, don’t install it: ask someone you trust or look for an alternative in the official store."
       ],
       builder:[
         {ol:[
           "**Check compatibility:** the app supports your OS and version.",
           "**Find the official source:** the store, or the developer’s site reached by typing its address.",
           "**Check the listing:** developer name, recent reviews, download count, permissions requested. Fake look-alike apps do appear even in official stores.",
           "**Install,** answering an administrator prompt only for an install you started.",
           "**Review permissions** after installing, choosing “while using the app” or “selected photos only” where offered, and keep updates on."
         ]},
         "Built-in protections help: macOS lets you choose in **System Settings → Privacy & Security** whether apps may come from the App Store only or also from developers identified by Apple, and Apple notarises apps it has checked for malicious software. Android requires you to grant a special “install unknown apps” permission before installing from outside Google Play, and Google Play Protect scans apps. Windows warns about unrecognised downloads with Microsoft Defender SmartScreen.",
         "Installed apps vs web apps: installed apps work offline and use the hardware fully; web apps need no installation, update themselves on the server and work across systems, but usually need a connection.",
         "Keep installed apps up to date: most stores update apps automatically, and many desktop apps have an update option in their settings or Help menu. An app that is no longer updated by its developer is a reason to look for a maintained alternative."
       ],
       pro:[
         "App stores add several layers: developer identity verification, automated and human review, code signing (so tampering is detectable), and the ability to remove a malicious app from sale and sometimes from devices. None is perfect; malicious apps occasionally pass review, often by adding harmful behaviour in a later update or by imitating a popular app.",
         {list:[
           "**Code signing** ties software to a developer certificate. Windows shows the verified publisher in its administrator prompt; an “Unknown publisher” is a reason to pause.",
           "**Sideloading** (installing outside the store) bypasses review. It has legitimate uses (open-source apps, workplace apps) but needs a trusted source; some regions now require platforms to allow alternative stores.",
           "**Package managers** (winget on Windows, Homebrew on macOS, apt or dnf on Linux) install from curated repositories and are common among professionals.",
           "**Permissions** are increasingly granular: one-time access, approximate location, selected photos, and automatic reset of permissions for unused apps (Google Play Protect does this on some Android versions).",
           "**Bundleware:** some free installers include extra offers. Choose “custom” install and untick extras, or prefer the store version."
         ]},
         "Unit 3 covers {{app-permissions}} and malware in depth.",
         "In workplaces, IT teams often restrict installs to an approved catalogue, which is the same principle applied at scale."
       ]
     },
     related:["operating-system","user-accounts","hardware-software"],
     sources:[{t:"Apple Support: Safely open apps on your Mac", url:"https://support.apple.com/en-us/102445"},{t:"Google Play Help: Use Google Play Protect to help keep your apps safe & your data private", url:"https://support.google.com/googleplay/answer/2812853"},{t:"OpenStax Workplace Software and Skills, 2.1 Software Basics", url:"https://openstax.org/books/workplace-software-skills/pages/2-1-software-basics"}],
     checked:"2026-10"},

    {id:"reading-specs", title:"Reading a spec sheet", aka:["specifications","specs","buying a laptop","choosing a device"], tags:["hardware","buying"],
     summary:"How to read the list of parts on a device listing and decide what matters for your own work.",
     levels:{
       starter:[
         "A [[spec-sheet|spec sheet]] lists a device’s parts: processor, memory, storage, screen, ports, battery, operating system. It looks technical, but a few lines matter most for everyday study and work:",
         {ol:["**Operating system:** does it run the apps you need?","**RAM:** more lets you keep more open at once.","**Storage:** an SSD, with room to spare.","**Ports:** can you plug in what you already own?"]},
         "The processor’s GHz is rarely the deciding number for everyday use. And “meets the minimum requirements” is not the same as comfortable.",
         "A worked approach: list what you will actually do (documents, video calls, photo editing), look up what those programs recommend, and only then compare listings. Read independent reviews for battery, screen and keyboard, which spec sheets describe poorly.",
         {tip:"Think about the next few years, not just today. RAM and storage that feel generous now will feel normal later, and many devices can’t be upgraded."}
       ],
       builder:[
         {ex:"Processor:  8-core, up to 4.4 GHz        → fine for everyday work\nMemory:     16 GB RAM                    → room for many tabs + video calls\nStorage:    512 GB NVMe SSD              → fast, space to grow\nGraphics:   Integrated                   → fine unless you game or edit video\nPorts:      2 × USB-C (charging + display), USB-A, HDMI\nBattery:    up to 12 h (maker’s claim)  → expect less in real use", label:"Annotated spec sheet", mono:true},
         "A checklist:",
         {list:[
           "**Requirements of your software:** look up the recommended (not minimum) requirements for the apps your course or job uses.",
           "**RAM and storage can’t always be upgraded.** In phones and many laptops they are soldered on, so buy enough now.",
           "**Minimums are minimums.** Microsoft lists 4 GB of RAM and 64 GB of storage as Windows 11 minimums and notes that updates may need more storage over time. A laptop that only just meets them will feel cramped.",
           "**Ports and adapters:** count what you need to plug in at once.",
           "**Support period:** check how long the maker promises operating system and security updates.",
           "**Independent reviews** for battery life, screen quality, keyboard and noise."
         ]},
         "For phones and tablets, the same logic applies: storage size (it can’t be added later on many models), how long the maker promises software updates, battery life in independent tests, and camera or screen quality if they matter to you. RAM is less visible but affects how many apps stay open in the background."
       ],
       pro:[
         "Spec sheets are written to sell, so read them critically:",
         {list:[
           "**“Up to” figures** (clock speed, battery life, internet speed) are best cases under ideal conditions.",
           "**Processor names** encode generation and class; compare like with like using independent benchmarks for the workloads you care about (office, browser, video export, compiling).",
           "**Storage type** matters as much as size: eMMC is much slower than NVMe SSD. Some listings say “SSD” for any flash storage.",
           "**RAM configuration:** dual-channel memory performs better than single-channel, especially with integrated graphics. Listings rarely say which.",
           "**Display:** resolution, brightness (nits), colour coverage and refresh rate affect comfort more than many processor upgrades.",
           "**Ports:** “USB-C” may or may not include display output or charging; look for Thunderbolt or DisplayPort symbols or detailed port tables.",
           "**Total cost:** add adapters, a case, extended warranty and software subscriptions."
         ]},
         "For organisations, standardising on a few models simplifies support, spare parts and security management. For individuals, the most common regret is too little RAM or storage, not too slow a processor.",
         "Second-hand and refurbished devices can be good value, but check the remaining update support period first and whether the battery has been replaced or tested.",
         "Return policies matter too: test a new device early and return it if it doesn’t suit you."
       ]
     },
     related:["cpu","ram","storage-drives","ports-peripherals","file-size-units"],
     sources:[{t:"Microsoft Learn: Windows 11 requirements", url:"https://learn.microsoft.com/windows/whats-new/windows-11-requirements"},{t:"Apple Support: Identify the ports on your Mac", url:"https://support.apple.com/109523"}],
     checked:"2026-10"},

    {id:"device-first-aid", title:"Device first aid", aka:["troubleshooting","restart","fast startup","updates","free up storage","error messages"], tags:["troubleshooting"],
     summary:"A safe routine for common problems: restart, update, free storage, check resources, describe the problem, and know when to stop.",
     levels:{
       starter:[
         "Most device problems are small and temporary. A calm routine fixes many of them:",
         {ol:["Save your work and note any message on screen.","Close and reopen the app.","[[restart|Restart]] the device.","Check for updates.","Check you have free storage.","See what is using the device ({{task-manager}}).","Search the exact error message, or ask for help."]},
         "Change one thing at a time and check whether it helped.",
         {warn:"Stop and get help straight away if there’s smoke, a burning smell, a swollen battery, liquid damage, or a message demanding payment to unlock your files."},
         "Most of these steps take less than five minutes, and none of them risks your files. Save anything risky (resets, repairs, deleting system files) for when you have a backup and proper guidance."
       ],
       builder:[
         "**Why restart works:** it empties RAM, ends stuck programs, reloads drivers and finishes pending updates, giving a clean start.",
         "**Windows Fast Startup:** with [[fast-startup|Fast Startup]] on (the default on many PCs), Shut down saves the Windows kernel session to storage like hibernation, so some stuck states survive. Microsoft states that Restart performs a full boot cycle and that Fast Startup doesn’t apply to it. On Windows, choose **Restart** to fix problems.",
         {table:[["Task","Windows","Mac"],["Restart","Start → Power → Restart","Apple menu → Restart"],["Updates","Settings → Windows Update","System Settings → General → Software Update"],["Storage","Settings → System → Storage","System Settings → General → Storage"],["Resources","Task Manager (Ctrl + Shift + Esc)","Activity Monitor"]]},
         "On Chromebooks: **Settings → About ChromeOS → Check for updates**; storage in **Storage management**. On phones: updates and storage are in Settings (iPhone: **General**; Android: varies by maker; use the Settings search).",
         "**Describe the problem:** device and system, what you did, what you expected, what happened, the exact message, when it started, what you’ve tried. Search the exact error in quotation marks with your system name, and prefer official support sites.",
         "**What to do with a frozen app:** wait a minute, then close it normally; if that fails, end it with Task Manager (Windows) or Force Quit (Mac: [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:Esc]]). Unsaved work in that app is lost, so give it a chance first."
       ],
       pro:[
         "Professional troubleshooting follows a cycle: identify the problem (and its scope), form a theory of probable cause, test it, plan and apply a fix, verify full functionality, and document what you found. The first-aid routine is the simple, safe end of that cycle.",
         {list:[
           "**Reproduce and isolate:** does it happen in another app, another account, another network, safe mode? Each answer halves the search space.",
           "**Logs and diagnostics:** Windows Event Viewer and Reliability Monitor, macOS Console, and Chromebook Diagnostics show what failed and when.",
           "**Full shutdown on Windows** without Fast Startup: Microsoft documents `shutdown /s /t 0` as a full shutdown, useful when you need a complete power-off rather than a restart.",
           "**Error codes:** hexadecimal codes such as 0x8007xxxx often wrap a standard Windows error number; searching the exact code with the product name finds the vendor’s documentation.",
           "**Scams:** Microsoft says its error and warning messages never include a phone number and that it doesn’t make unsolicited support calls. Never grant remote access to someone who contacted you first.",
           "**Data first:** before resets, repairs or drive replacements, confirm a working backup exists. A fix that loses data isn’t a fix."
         ]},
         "Know your escalation path in advance: who supports this device (the maker, a shop, a workplace IT team), where to find the warranty details, and where your backups are."
       ]
     },
     related:["task-manager","storage-drives","ram","operating-system"],
     sources:[{t:"Microsoft Learn: Fast Startup causes hibernation or shutdown to fail", url:"https://learn.microsoft.com/en-us/troubleshoot/windows-client/setup-upgrade-and-drivers/fast-startup-causes-system-hibernation-shutdown-fail"},{t:"Microsoft Support: Avoid tech support scams", url:"https://support.microsoft.com/en-US/security/avoid-tech-support-scams"},{t:"Chromebook Help: Fix hardware and system problems", url:"https://support.google.com/chromebook/answer/6309225"}],
     checked:"2026-10"},

    {id:"task-manager", title:"Task Manager and Activity Monitor", aka:["Task Manager","Activity Monitor","resource monitor","end task","force quit"], tags:["troubleshooting","software"],
     summary:"Built-in tools that show which apps are using the processor, memory, disk, network and battery, and let you close a frozen app.",
     levels:{
       starter:[
         "When a device is slow, hot, noisy or losing battery fast, look before you guess. Every system has a tool that shows what is running and how much it uses.",
         {table:[["Device","Tool"],["Windows","[[task-manager|Task Manager]]: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:Esc]]"],["Mac","Activity Monitor (search for it with [[kbd:Cmd]] + [[kbd:Space]])"],["Chromebook","Task Manager ([[kbd:Shift]] + [[kbd:Esc]], or Chrome’s **⋮ → More tools → Task manager**)"],["Phones","Settings → Battery, and the Storage screen"]]},
         "Sort by CPU or Memory to see the biggest users. If one app is frozen, you can end it from here (Windows: **End task**; Mac: **Force Quit**). Only end apps you recognise.",
         "Tip: on phones, the Battery screen is the most useful “what’s using my device” view. An app you rarely open that uses lots of battery deserves a closer look at its permissions and background activity."
       ],
       builder:[
         "What the columns mean:",
         {list:[
           "**CPU:** how much processor time each app uses. A single app stuck near the top for a long time is a likely culprit.",
           "**Memory:** how much RAM each app holds. If total memory is near full, close apps or tabs.",
           "**Disk:** how busy storage is. Constant 100% disk on a hard-disk PC explains a lot of slowness.",
           "**Network:** data sent and received; useful when the internet feels slow.",
           "**Energy / battery:** which apps cost the most battery."
         ]},
         "Windows Task Manager also has **Performance** (live graphs, including total RAM and how many cores) and **Startup apps** (programs that launch at sign-in; turning off unneeded ones speeds up start-up). On a Mac, Activity Monitor has CPU, Memory, Energy, Disk and Network tabs; the Memory tab’s **Memory Pressure** graph is a better guide than raw usage. On a Chromebook, the browser’s **⋮ → More tools → Task manager** shows tabs, extensions and apps.",
         {warn:"Long lists of system processes are normal. Ending unknown system processes can crash the device; restarting is the safer fix."},
         "Look for patterns rather than single snapshots: an app that is briefly busy is normal; one that stays at the top for many minutes while you aren’t using it is worth closing, updating or uninstalling."
       ],
       pro:[
         "A **process** is a running instance of a program; one app may run many processes (browsers give each tab or site its own for stability and security). Threads within a process run on the CPU’s cores.",
         {list:[
           "**CPU % semantics:** Windows shows a share of the whole processor; macOS Activity Monitor shows per-core percentages, so one process can exceed 100% on a multi-core Mac.",
           "**Memory figures** vary: working set, private bytes, compressed memory and cached files are all counted differently. High usage is normal because the OS caches aggressively; sustained swapping or memory pressure is the real signal.",
           "**Deeper tools:** Windows Resource Monitor and Performance Monitor, Reliability Monitor for crash history, and Microsoft’s Sysinternals Process Explorer; macOS `top` and Console; Linux `top`, `htop` and `free`.",
           "**Suspicious processes:** a name you don’t recognise using lots of CPU could be legitimate (indexing, updates, antivirus scans) or malicious. Look up the exact name and file location on official sources before acting, and run a security scan rather than deleting files by hand."
         ]},
         "Background activity after an update is normal. Operating systems often index files, optimise apps and scan for malware for a while after a big update, using noticeable CPU and disk until they finish."
       ]
     },
     related:["device-first-aid","ram","cpu","operating-system"],
     sources:[{t:"Apple Support: View information about Mac processes in Activity Monitor", url:"https://support.apple.com/guide/activity-monitor/view-information-about-processes-actmntr1001/mac"},{t:"Chromebook Help: Fix hardware and system problems", url:"https://support.google.com/chromebook/answer/6309225"}],
     checked:"2026-10"},

    {id:"user-accounts", title:"User accounts and administrator rights", aka:["standard account","administrator","admin","UAC","least privilege"], tags:["software","security"],
     summary:"Each person gets their own account; use a standard account for daily work and an administrator account only for system changes.",
     levels:{
       starter:[
         "A [[user-account|user account]] is your identity on a device: your sign-in, files and settings. On shared computers each person should have their own.",
         "Windows and macOS have two main types. A **standard** account can do everyday work. An [[admin-account|administrator]] account can also install software for everyone, change security settings and manage other accounts.",
         "Microsoft, the US agency CISA and the Australian Signals Directorate all advise using a **standard account for day-to-day work**. If something harmful runs while you’re signed in, it gets only a standard account’s limited powers, and system changes trigger a password prompt that gives you a chance to stop.",
         {warn:"Don’t switch your only administrator account to standard. Create a second administrator account first."},
         "Setting this up takes about ten minutes and is one of the simplest security improvements you can make."
       ],
       builder:[
         "Setting it up on Windows 11: open **Settings → Accounts → Other users**, add an account, then use **Change account type** to make it an Administrator. Sign in to it to confirm it works, then change your everyday account to Standard. On a Mac: **System Settings → Users & Groups**, where each account shows Admin or Standard.",
         "What changes in daily life:",
         {list:[
           "Most apps, browsing, email and documents work exactly the same.",
           "Installing software for all users, changing security settings or system files asks for an administrator name and password.",
           "An unexpected prompt becomes a warning sign: if you didn’t start an install or change, say no."
         ]},
         "A standard account is not a complete shield. Malware running as you can still reach your own files, so backups (Unit 2) and updates (Unit 3) are still essential.",
         "Chromebooks and phones work differently: Chromebooks have an owner account and no everyday admin rights; phones have one owner and isolate apps from each other, so the same principle appears as app permissions.",
         "Shared family computers benefit most: give each person a standard account of their own, and keep one administrator account (with a strong password) for the person who manages the machine.",
         "It costs nothing and changes very little day to day."
       ],
       pro:[
         "This is the **principle of least privilege**: every user and program should have only the rights it needs. It appears in security frameworks such as NIST SP 800-53 (access control) and in national guidance for home and business users.",
         {list:[
           "**User Account Control (UAC)** on Windows: even administrators run most programs with standard rights; elevation requires consent (for admins) or credentials (for standard users). Elevation prompts show the verified publisher when the program is signed.",
           "**Separate admin accounts** in organisations: IT staff use a normal account for email and browsing and a separate privileged account only for administration, because email and the web are the main ways attacks arrive.",
           "**Managed devices:** work and school devices are often enrolled in device management (such as Microsoft Intune or Google Admin), which controls who has administrator rights.",
           "**macOS and Linux** use `sudo` or an authorisation dialog to grant temporary administrator rights for one action."
         ]},
         "Account hygiene also means removing accounts that are no longer needed, giving each person their own sign-in instead of sharing one, and protecting administrator accounts with strong, unique passwords.",
         "Remember that rights apply to programs too: anything you run inherits your account’s permissions, which is the core reason this principle protects you."
       ]
     },
     related:["operating-system","installing-apps"],
     sources:[{t:"Microsoft Support: Manage user accounts in Windows", url:"https://support.microsoft.com/en-us/accounts-billing/manage/how-to-determine-your-user-account-type-in-windows"},{t:"CISA: Implement User Account Control to Protect Your Personal Computer", url:"https://cisa.gov/resources-tools/training/implement-user-account-control-protect-your-personal-computer"},{t:"Australian Cyber Security Centre: Managing user accounts", url:"https://www.cyber.gov.au/protect-yourself/securing-your-devices/how-secure-your-device/managing-user-accounts"}],
     checked:"2026-10"}
  ],
  terms:[
    {id:"computer", term:"computer", def:"A machine that takes **input**, **processes** it by following a program, **stores** it and produces **output**. Phones, tablets, smart TVs, routers and servers are all computers.", codex:"what-is-a-computer"},
    {id:"hardware", term:"hardware", def:"The physical parts of a computer that you could touch: chips, screen, keyboard, battery, cables.", codex:"hardware-software"},
    {id:"software", term:"software", def:"The instructions (programs) and data that tell hardware what to do, such as the operating system and apps.", codex:"hardware-software"},
    {id:"input", term:"input", def:"Information going **into** a computer, for example from a keyboard, touchscreen, microphone, camera or sensor.", codex:"what-is-a-computer"},
    {id:"output", term:"output", def:"Information coming **out** of a computer to you or another device, for example on a screen, through speakers or on a printer.", codex:"what-is-a-computer"},
    {id:"cpu", term:"CPU (processor)", def:"The central processing unit: the chip that carries out a program’s instructions, step by step, billions of times a second.", codex:"cpu"},
    {id:"core", term:"core", def:"One complete processing unit inside a CPU. A 4-core processor can work on four streams of instructions at once.", codex:"cpu"},
    {id:"clock-speed", term:"clock speed", def:"How many steps per second a processor core can take, in gigahertz (GHz). 1 GHz is one billion cycles per second. Not a reliable way to compare different processors on its own.", codex:"cpu"},
    {id:"system-on-chip", term:"system on a chip (SoC)", def:"A single chip that combines the CPU, graphics processor and other parts. Used in phones, tablets and many laptops.", codex:"cpu"},
    {id:"ram", term:"RAM (memory)", def:"Random-access memory: fast working memory that holds what is open right now. It empties when the power goes off.", codex:"ram"},
    {id:"storage", term:"storage", def:"Where a device keeps files, apps and the operating system permanently, even with the power off, such as an SSD or hard disk.", codex:"storage-drives"},
    {id:"ssd", term:"SSD", def:"Solid-state drive: storage that uses flash memory chips with no moving parts. Much faster and tougher than a hard disk.", codex:"storage-drives"},
    {id:"hdd", term:"HDD (hard disk drive)", def:"Storage that keeps data on spinning magnetic platters read by a moving arm. Slower than an SSD but cheaper per terabyte.", codex:"storage-drives"},
    {id:"gpu", term:"GPU", def:"Graphics processing unit: a processor that does many simple calculations at once, used for the display, video, games, editing and AI.", codex:"gpu"},
    {id:"motherboard", term:"motherboard", def:"The main circuit board that connects the processor, memory, storage, ports and other parts. Also called the main board or logic board.", codex:"what-is-a-computer"},
    {id:"port", term:"port", def:"A socket on a device where you plug in a cable, such as USB-C, USB-A or HDMI.", codex:"ports-peripherals"},
    {id:"peripheral", term:"peripheral", def:"An extra device you connect to a computer, such as a mouse, keyboard, monitor, printer or external drive.", codex:"ports-peripherals"},
    {id:"usb", term:"USB (USB-A, USB-C)", def:"Universal Serial Bus: the most common way to connect devices. USB-A is the flat rectangle; USB-C is the small reversible oval whose features (charging, data speed, video) vary by port and cable.", codex:"ports-peripherals"},
    {id:"hdmi", term:"HDMI", def:"A connection that carries picture and sound to monitors, TVs and projectors.", codex:"ports-peripherals"},
    {id:"bluetooth", term:"Bluetooth", def:"Short-range wireless connection for headphones, keyboards, mice, watches and similar devices. Devices must be paired first.", codex:"ports-peripherals"},
    {id:"binary", term:"binary", def:"A number system with only two digits, 0 and 1. Computers store all data in binary.", codex:"bits-bytes"},
    {id:"bit", term:"bit", def:"A binary digit: the smallest unit of data, either 0 or 1. Written with a lowercase **b** (as in Mbps).", codex:"bits-bytes"},
    {id:"byte", term:"byte", def:"A group of 8 bits, enough to store one basic letter or digit. Written with an uppercase **B** (as in MB).", codex:"bits-bytes"},
    {id:"kilobyte", term:"kilobyte (kB)", def:"1,000 bytes in decimal (SI) units. Some software uses “KB” for 1,024 bytes, which is properly called a kibibyte (KiB).", codex:"file-size-units"},
    {id:"megabyte", term:"megabyte (MB)", def:"1,000,000 bytes (a million) in decimal units. A phone photo is usually a few MB.", codex:"file-size-units"},
    {id:"gigabyte", term:"gigabyte (GB)", def:"1,000,000,000 bytes (a billion) in decimal units, as printed on drive boxes. Windows uses “GB” for the binary gibibyte.", codex:"file-size-units"},
    {id:"terabyte", term:"terabyte (TB)", def:"1,000,000,000,000 bytes (a trillion), or 1,000 GB, in decimal units.", codex:"file-size-units"},
    {id:"gibibyte", term:"gibibyte (GiB)", def:"A binary unit: 1,073,741,824 bytes (1,024 × 1,024 × 1,024), about 7.4% more than a gigabyte. Windows shows this amount but calls it “GB”.", codex:"file-size-units"},
    {id:"mbps", term:"Mbps (megabits per second)", def:"A speed: millions of **bits** per second, used for internet plans. Divide by 8 to get megabytes per second (MB/s).", codex:"file-size-units"},
    {id:"operating-system", term:"operating system (OS)", def:"The main program that runs a device: it manages hardware, runs apps, organises files and users, and keeps the system secure. Examples: Windows, macOS, ChromeOS, Linux, iOS, Android.", codex:"operating-system"},
    {id:"app", term:"app", def:"An application or program that does a task for you, such as writing, messaging or editing photos.", codex:"installing-apps"},
    {id:"web-app", term:"web app", def:"An app that runs inside a web browser, loaded from a server, with nothing to install.", codex:"installing-apps"},
    {id:"app-store", term:"app store", def:"An operating system’s official place to get apps, such as the Microsoft Store, Apple’s App Store or Google Play. Apps there are checked before listing.", codex:"installing-apps"},
    {id:"driver", term:"driver", def:"A small piece of software that lets the operating system control a particular piece of hardware, such as a printer or graphics chip.", codex:"operating-system"},
    {id:"firmware", term:"firmware", def:"Software stored inside a piece of hardware to control it at a low level, such as a computer’s start-up firmware (UEFI/BIOS) or a router’s software.", codex:"hardware-software"},
    {id:"boot", term:"boot (start up)", def:"The process of starting a computer: firmware checks the hardware, then loads the operating system from storage into memory.", codex:"operating-system"},
    {id:"user-account", term:"user account", def:"Your identity on a device: your sign-in, files and settings, plus the rights that decide what you can change.", codex:"user-accounts"},
    {id:"admin-account", term:"administrator account", def:"An account that can make system-wide changes, such as installing software for everyone or changing security settings. Best used only when needed.", codex:"user-accounts"},
    {id:"task-manager", term:"Task Manager", def:"The Windows tool (Ctrl + Shift + Esc) that shows what is running and how much processor, memory, disk and network each app uses. Macs have Activity Monitor; Chromebooks have their own Task Manager.", codex:"task-manager"},
    {id:"restart", term:"restart", def:"Turning a device off and on again in one step. It clears memory, ends stuck programs and reloads the operating system. On Windows it does a fuller reset than Shut down when Fast Startup is on.", codex:"device-first-aid"},
    {id:"fast-startup", term:"Fast Startup", def:"A Windows feature that, at Shut down, saves the core of Windows to storage (like hibernation) so the next start is quicker. Restart is not affected by it.", codex:"device-first-aid"},
    {id:"spec-sheet", term:"spec sheet", def:"A list of a device’s specifications: processor, RAM, storage, screen, ports, battery and operating system.", codex:"reading-specs"},
    {id:"server", term:"server", def:"A computer whose job is to provide services (web pages, email, files) to other computers over a network, usually in a data centre.", codex:"what-is-a-computer"}
  ],
  bank:[
    /* ---- Lesson 1 ---- */
    {id:"t1u1-q01", lesson:"t1u1-l1", level:1, q:"Which list gives the four jobs every computer does?", options:[
      {t:"Input, processing, storage, output", ok:true, why:"Information comes in, is worked on, is kept for later and goes out as a result."},
      {t:"Typing, clicking, saving, printing", why:"These are examples of a few jobs, not the general model. Printing is just one kind of output."},
      {t:"Hardware, software, internet, cloud", why:"These are categories of things, not the jobs a computer does."},
      {t:"Downloading, uploading, streaming, sharing", why:"These are network activities, which are only part of input and output."}
    ]},
    {id:"t1u1-q02", lesson:"t1u1-l1", level:2, q:"Kenji presses keys but no letters appear in any app. Which of the four jobs should he suspect first?", options:[
      {t:"Input", ok:true, why:"Nothing seems to be getting in. Check the keyboard connection, Bluetooth pairing or battery first."},
      {t:"Storage", why:"Storage keeps files for later; it isn’t involved in letters appearing as you type."},
      {t:"Output", why:"Other things still show on screen, so output works. The keystrokes aren’t arriving."},
      {t:"Processing", why:"If the processor were stuck, the whole device would usually freeze, not just the typing."}
    ]},
    {id:"t1u1-q03", lesson:"t1u1-l1", level:1, q:"Which of these is software?", options:[
      {t:"A web browser", ok:true, why:"A browser is a program: instructions you install and update."},
      {t:"A keyboard", why:"A keyboard is a physical device, so it is hardware."},
      {t:"A Wi-Fi chip", why:"A chip is a physical part on the circuit board: hardware."},
      {t:"A laptop charger", why:"A charger is a physical object: hardware."}
    ]},
    {id:"t1u1-q04", lesson:"t1u1-l1", level:1, q:"What is firmware?", options:[
      {t:"Software stored inside a piece of hardware that controls it at a low level", ok:true, why:"For example a computer’s start-up program or a router’s built-in software."},
      {t:"Any hardware that is fixed firmly inside the case", why:"Firmware is software, not a physical part."},
      {t:"Apps installed by a company on work computers", why:"Those are ordinary apps. Firmware lives inside the hardware itself."},
      {t:"A protective case for a laptop", why:"That’s an accessory, not software of any kind."}
    ]},
    {id:"t1u1-q05", lesson:"t1u1-l1", level:3, q:"Lucía says, “My photos are safe because they’re in the cloud, which isn’t a physical place.” What’s the most accurate reply?", options:[
      {t:"The cloud is real storage on servers in data centres run by a provider; your photos are files on their drives", ok:true, why:"“The cloud” means other organisations’ computers that you reach over the internet."},
      {t:"She’s right: cloud files exist only as internet signals", why:"Data always has to be stored on physical hardware somewhere."},
      {t:"The cloud means her photos are stored in satellites", why:"Cloud storage is in ground-based data centres, not satellites."},
      {t:"The cloud is a folder on her own phone with a special name", why:"A local folder wouldn’t survive losing the phone. Cloud storage copies files to the provider’s servers."}
    ]},
    {id:"t1u1-q06", lesson:"t1u1-l1", level:2, q:"Which device does **not** count as a computer?", options:[
      {t:"A mechanical wind-up alarm clock", ok:true, why:"It works with springs and gears; there is no program and no data processing."},
      {t:"A smart TV", why:"It runs an operating system and apps, so it is a computer."},
      {t:"A home Wi-Fi router", why:"It runs firmware on a processor to handle network traffic, so it is a computer."},
      {t:"A fitness watch", why:"It has a processor, memory, storage and software, so it is a computer."}
    ]},
    {id:"t1u1-q07", lesson:"t1u1-l1", level:3, q:"Tomás’s laptop screen stays black, but he hears the usual start-up sound and the keyboard lights up. Where should he look first?", options:[
      {t:"The output path: brightness, display settings, or the screen or its cable", ok:true, why:"The sounds and lights show the computer is running. The picture just isn’t reaching him."},
      {t:"The storage drive, because it might be full", why:"A full drive gives error messages; it doesn’t stop the screen from showing anything."},
      {t:"The keyboard, because input must be broken", why:"The keyboard lights up and isn’t related to a black screen."},
      {t:"Nowhere: the laptop is completely dead", why:"A dead laptop wouldn’t make start-up sounds. Something is running."}
    ]},
    {id:"t1u1-q08", lesson:"t1u1-l1", level:2, q:"A touchscreen does which of the four jobs?", options:[
      {t:"Input and output", ok:true, why:"It senses your touch (input) and displays the picture (output)."},
      {t:"Only input", why:"It also shows the picture, which is output."},
      {t:"Only output", why:"It also senses your finger, which is input."},
      {t:"Storage", why:"A touchscreen doesn’t keep files."}
    ]},
    {id:"t1u1-q09", lesson:"t1u1-l1", level:1, q:"What is a server?", options:[
      {t:"A computer that provides services, such as web pages or email, to other computers over a network", ok:true, why:"Your device is the client that asks; the server answers."},
      {t:"A cable that connects a laptop to the internet", why:"Cables carry data, but a server is a computer."},
      {t:"The person who fixes computers at work", why:"That person may manage servers, but a server is a machine."},
      {t:"A program that speeds up your browser", why:"That isn’t what the word means. A server is a computer that serves others."}
    ]},
    /* ---- Lesson 2 ---- */
    {id:"t1u1-q10", lesson:"t1u1-l2", level:1, q:"What happens to the contents of RAM when the power goes off?", options:[
      {t:"They are lost; RAM empties", ok:true, why:"RAM is volatile: it needs power to hold data. That’s why you save to storage."},
      {t:"They are moved to the cloud automatically", why:"Nothing is sent anywhere. Unsaved work in RAM is simply lost."},
      {t:"They stay until you delete them", why:"That describes storage, not RAM."},
      {t:"They are compressed and kept", why:"RAM can’t keep anything without power."}
    ]},
    {id:"t1u1-q11", lesson:"t1u1-l2", level:2, q:"A laptop listing says “8 GB RAM, 256 GB SSD”. How much storage does it have for files and apps?", options:[
      {t:"256 GB", ok:true, why:"The SSD is the storage. RAM is working memory, not space for files."},
      {t:"8 GB", why:"8 GB is the RAM, which holds what is open right now and empties at power-off."},
      {t:"264 GB", why:"RAM and storage do different jobs; you can’t add them together."},
      {t:"It depends on the processor speed", why:"Processor speed has nothing to do with storage capacity."}
    ]},
    {id:"t1u1-q12", lesson:"t1u1-l2", level:1, q:"What does the CPU do?", options:[
      {t:"Carries out the instructions of programs", ok:true, why:"It is the cook following the recipe."},
      {t:"Keeps your files when the power is off", why:"That’s the storage drive."},
      {t:"Connects the computer to Wi-Fi", why:"That’s the job of the wireless chip."},
      {t:"Supplies power to the other parts", why:"That’s the battery or power supply."}
    ]},
    {id:"t1u1-q13", lesson:"t1u1-l2", level:2, q:"Which upgrade usually makes the biggest difference to how fast an old laptop with a hard disk starts up and opens apps?", options:[
      {t:"Replacing the hard disk with an SSD", ok:true, why:"SSDs are many times faster than hard disks at loading the system and apps."},
      {t:"A bigger screen", why:"Screen size doesn’t affect loading speed."},
      {t:"A faster internet plan", why:"Starting up and opening installed apps happen on the device, not over the internet."},
      {t:"A larger hard disk of the same type", why:"More space on the same slow technology doesn’t make loading faster."}
    ]},
    {id:"t1u1-q14", lesson:"t1u1-l2", level:3, q:"Hana’s laptop slows to a crawl with twenty tabs and a video call open. Task Manager shows memory at 96% in use, and her storage settings show the drive is only 30% full. What will help most?", options:[
      {t:"Close tabs and apps she isn’t using", ok:true, why:"Memory (RAM) is full; freeing it gives the call room. Storage has plenty of space."},
      {t:"Delete large files to free storage", why:"Storage isn’t the problem: it is only 30% used."},
      {t:"Buy an external hard drive", why:"That adds storage, which isn’t the bottleneck."},
      {t:"Lower the screen brightness", why:"Brightness affects the battery, not memory."}
    ]},
    {id:"t1u1-q15", lesson:"t1u1-l2", level:2, q:"Why can’t you compare two processors by their GHz alone?", options:[
      {t:"Newer designs can do more work in each cycle, so a lower GHz chip can be faster", ok:true, why:"Clock speed is only one factor; work per cycle and number of cores matter too."},
      {t:"GHz measures storage, not speed", why:"GHz measures cycles per second. Storage is measured in bytes."},
      {t:"All processors have the same GHz", why:"Clock speeds vary widely between processors."},
      {t:"GHz only matters for phones", why:"Clock speed applies to processors in every kind of device."}
    ]},
    {id:"t1u1-q16", lesson:"t1u1-l2", level:3, q:"Ana’s USB-C cable charges her phone, but when she uses it to connect her laptop to a monitor, the monitor says “No signal”. What is the most likely explanation?", options:[
      {t:"The cable or the laptop’s USB-C port doesn’t support video, even though the plug fits", ok:true, why:"USB-C is a shape; video needs support from the port, the cable and the monitor."},
      {t:"The monitor must be broken", why:"A cable that charges a phone may carry only power and slow data. That says nothing about the monitor."},
      {t:"Her laptop needs more storage to show a picture", why:"Storage has nothing to do with sending a video signal."},
      {t:"USB-C can never carry a picture", why:"Many USB-C ports do carry video; this particular port or cable may not."}
    ]},
    {id:"t1u1-q17", lesson:"t1u1-l2", level:2, q:"What does a GPU mainly do?", options:[
      {t:"Many simple calculations at once, for the display, video, games, editing and AI", ok:true, why:"GPUs are built for massively parallel work like working out millions of pixels."},
      {t:"Stores photos and videos", why:"That’s storage. The GPU processes images; it doesn’t keep them."},
      {t:"Provides the Wi-Fi connection", why:"That’s the wireless chip."},
      {t:"Holds the apps you have open", why:"That’s the job of RAM, the working memory."}
    ]},
    {id:"t1u1-q18", lesson:"t1u1-l2", level:3, q:"Sione wants a laptop for study: documents, browsing with many tabs and weekly video calls. Which spec matters most to check?", options:[
      {t:"That it has enough RAM and an SSD with room to spare", ok:true, why:"For this kind of work, RAM and fast storage affect everyday comfort most."},
      {t:"That it has the highest GHz available", why:"GHz alone says little, and almost any current processor handles this workload."},
      {t:"That it has a dedicated graphics card", why:"Integrated graphics are fine for documents, browsing and video calls."},
      {t:"That it has the largest possible hard disk", why:"A big hard disk is slower than an SSD and isn’t what this workload needs."}
    ]},
    /* ---- Lesson 3 ---- */
    {id:"t1u1-q19", lesson:"t1u1-l3", level:1, q:"How many bits are in one byte?", options:[
      {t:"8", ok:true, why:"Eight bits make a byte."},
      {t:"2", why:"Two is the number of values one bit can have, not the bits in a byte."},
      {t:"10", why:"There is no 10-bit byte; it’s 8."},
      {t:"1,024", why:"1,024 is a binary multiple used for sizes like KiB, not the bits in a byte."}
    ]},
    {id:"t1u1-q20", lesson:"t1u1-l3", level:2, q:"An internet plan is 80 Mbps. What is the best-case download speed in MB/s?", options:[
      {t:"10 MB/s", ok:true, why:"Divide megabits by 8 to get megabytes: 80 ÷ 8 = 10."},
      {t:"80 MB/s", why:"Mbps (bits) and MB/s (bytes) aren’t the same unit; divide by 8."},
      {t:"640 MB/s", why:"That multiplies by 8. Bytes are bigger than bits, so the number gets smaller."},
      {t:"1 MB/s", why:"That divides by 80. The conversion factor is 8."}
    ]},
    {id:"t1u1-q21", lesson:"t1u1-l3", level:1, q:"In decimal (SI) units, 1 GB equals…", options:[
      {t:"1,000 MB", ok:true, why:"Decimal prefixes go up by 1,000 at each step."},
      {t:"1,024 MB", why:"That’s the binary relationship, 1 GiB = 1,024 MiB."},
      {t:"100 MB", why:"Ten times too small."},
      {t:"8 MB", why:"8 is the bits-per-byte factor, not a size prefix."}
    ]},
    {id:"t1u1-q22", lesson:"t1u1-l3", level:3, q:"Dmitri’s new Windows laptop has a “512 GB” SSD, but File Explorer shows about 476 GB in total. What explains most of the difference?", options:[
      {t:"Windows divides by 1,024 at each step but still labels the result “GB”", ok:true, why:"512,000,000,000 bytes ÷ 1,073,741,824 ≈ 476.8. It’s the same number of bytes on a different ruler."},
      {t:"The shop sold him a smaller drive than advertised", why:"The numbers match exactly once you convert units."},
      {t:"Windows has deleted 36 GB of his files", why:"Nothing has been deleted; the drive is new."},
      {t:"SSDs lose capacity as soon as they are switched on", why:"The difference is about units, not wear."}
    ]},
    {id:"t1u1-q23", lesson:"t1u1-l3", level:3, q:"Mei has 32 GB free. Her videos average 500 MB each. Using decimal units, how many more fit?", options:[
      {t:"64", ok:true, why:"32 GB = 32,000 MB; 32,000 ÷ 500 = 64."},
      {t:"0.064", why:"That divides 32 by 500 without converting GB to MB first. 32 GB is 32,000 MB, and 32,000 ÷ 500 = 64."},
      {t:"640", why:"That’s ten times too many; check the zeros: 32,000 ÷ 500 = 64."},
      {t:"65", why:"That uses 1 GB = 1,024 MB (32,768 ÷ 500 ≈ 65.5). The question asks for decimal units, so use 1,000."}
    ]},
    {id:"t1u1-q24", lesson:"t1u1-l3", level:2, q:"How long does a 2 GB download take at a steady 40 Mbps, at best? (1 GB = 1,000 MB)", options:[
      {t:"400 seconds (about 6 minutes 40 seconds)", ok:true, why:"2,000 MB × 8 = 16,000 megabits; 16,000 ÷ 40 = 400 seconds."},
      {t:"50 seconds", why:"That forgets the ×8 for bytes to bits: 2,000 ÷ 40 = 50."},
      {t:"3,200 seconds", why:"That multiplies by 8 twice, or by 64 overall. 16,000 ÷ 40 = 400."},
      {t:"6.25 seconds", why:"That divides by 8 instead of multiplying. Megabytes become more megabits, not fewer."}
    ]},
    {id:"t1u1-q25", lesson:"t1u1-l3", level:1, q:"What does the “i” in GiB or MiB tell you?", options:[
      {t:"It is a binary unit, counted in steps of 1,024", ok:true, why:"The IEC binary prefixes (kibi, mebi, gibi) were created to avoid confusion with decimal units."},
      {t:"It means “internet” and is used for speeds", why:"GiB measures data amounts, not speeds; the i marks a binary prefix."},
      {t:"It is a decimal unit, counted in steps of 1,000", why:"Decimal units have no i (kB, MB, GB)."},
      {t:"It is a typing mistake for GB", why:"GiB is an official unit defined by the IEC."}
    ]},
    {id:"t1u1-q26", lesson:"t1u1-l3", level:3, q:"Ana pays for 50 Mbps internet. Her browser shows a download at 6 MB/s. What should she conclude?", options:[
      {t:"She is getting nearly her full speed, because 50 Mbps ÷ 8 ≈ 6.25 MB/s", ok:true, why:"The plan is in bits and the browser in bytes. 6 MB/s is close to the maximum."},
      {t:"She is getting only about 12% of what she pays for", why:"That compares megabytes with megabits. 6 MB/s × 8 = 48 Mbps."},
      {t:"Her browser is broken", why:"It is showing a correct number in a different unit."},
      {t:"Her plan must really be 6 Mbps", why:"6 Mbps would be only 0.75 MB/s, far slower than she sees."}
    ]},
    {id:"t1u1-q27", lesson:"t1u1-l3", level:2, q:"Which number of patterns can 8 bits represent?", options:[
      {t:"256", ok:true, why:"Each bit doubles the patterns: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256."},
      {t:"8", why:"That’s the number of bits, not the number of patterns they can make."},
      {t:"16", why:"16 patterns need only 4 bits."},
      {t:"1,000", why:"Binary doubles with each bit; 1,000 isn’t a power of two."}
    ]},
    /* ---- Lesson 4 ---- */
    {id:"t1u1-q28", lesson:"t1u1-l4", level:1, q:"Which of these is a job of the operating system?", options:[
      {t:"Deciding which program gets the processor and how much memory each one uses", ok:true, why:"Sharing hardware between programs is a core OS job."},
      {t:"Writing your essay for you", why:"That’s what a writing app helps with; the OS runs the app."},
      {t:"Providing your internet connection", why:"Your internet provider and router do that; the OS just uses the connection."},
      {t:"Manufacturing the processor", why:"Chips are made by hardware companies; the OS is software."}
    ]},
    {id:"t1u1-q29", lesson:"t1u1-l4", level:1, q:"Which operating system runs on Chromebooks?", options:[
      {t:"ChromeOS", ok:true, why:"Google’s ChromeOS is built around the Chrome browser and web apps."},
      {t:"macOS", why:"macOS runs only on Apple’s Mac computers."},
      {t:"iOS", why:"iOS runs on iPhones."},
      {t:"Windows", why:"Windows runs on PCs; Chromebooks come with ChromeOS."}
    ]},
    {id:"t1u1-q30", lesson:"t1u1-l4", level:3, q:"Oluwaseun searches for a popular free video editor. The first result is an advert for “Free Video Editor Download” on a site he doesn’t recognise. What should he do?", options:[
      {t:"Skip the advert and get the app from the official store or the developer’s own website", ok:true, why:"Look-alike sites in search adverts sometimes bundle unwanted or harmful software."},
      {t:"Download from the advert, since adverts are checked by the search engine", why:"Checks on adverts aren’t perfect, and look-alike download sites do appear in them."},
      {t:"Ask a friend to send him the installer file in a chat", why:"A file passed around in chats has no trustworthy source."},
      {t:"Download it and turn off his antivirus if it complains", why:"Never turn off protection to install something; a warning is a reason to stop."}
    ]},
    {id:"t1u1-q31", lesson:"t1u1-l4", level:2, q:"A simple torch (flashlight) app asks for access to your contacts. What does that suggest?", options:[
      {t:"It wants data it doesn’t need for its job, so refuse or choose a different app", ok:true, why:"A torch app has no reason to read your contacts."},
      {t:"All apps need contacts access to work", why:"Most apps work fine without it; only apps that deal with contacts need it."},
      {t:"It needs contacts to switch on the light", why:"The light doesn’t depend on your address book at all."},
      {t:"It is a sign the app is from an official store", why:"Permission requests don’t show where an app came from."}
    ]},
    {id:"t1u1-q32", lesson:"t1u1-l4", level:1, q:"What is a driver?", options:[
      {t:"Software that lets the operating system control a particular piece of hardware", ok:true, why:"A driver translates between the OS and a device, such as a printer."},
      {t:"The person who sets up your computer", why:"In computing, a driver is software."},
      {t:"The main circuit board", why:"That’s the motherboard."},
      {t:"A type of storage drive", why:"Storage drives are hardware; drivers are software."}
    ]},
    {id:"t1u1-q33", lesson:"t1u1-l4", level:2, q:"Which is a key difference between a web app and an installed app?", options:[
      {t:"A web app runs in the browser with nothing to install; an installed app runs from your device’s storage", ok:true, why:"Web apps load from a server each time; installed apps live on your device."},
      {t:"Web apps always work without internet", why:"Web apps usually need a connection; installed apps more often work offline."},
      {t:"Installed apps never need updates", why:"Installed apps need updates; web apps are updated on the server."},
      {t:"Only phones can use web apps", why:"Any device with a modern browser can use web apps."}
    ]},
    {id:"t1u1-q34", lesson:"t1u1-l4", level:3, q:"Fatima uses an administrator account for everything. A friend suggests a standard account for daily work. What is the main benefit?", options:[
      {t:"Anything harmful that runs as her gets limited rights, and system changes need an admin password", ok:true, why:"Microsoft, CISA and the Australian Signals Directorate all recommend standard accounts for day-to-day use for this reason."},
      {t:"Her computer will run faster", why:"Account type doesn’t change speed."},
      {t:"She will never need to update anything", why:"Updates are still needed whatever the account type."},
      {t:"It makes malware impossible", why:"It limits damage but isn’t a complete shield; her own files can still be reached."}
    ]},
    {id:"t1u1-q35", lesson:"t1u1-l4", level:3, q:"Hana wants to make her everyday Windows account a standard account. It is currently the **only** administrator. What should she do first?", options:[
      {t:"Create a second administrator account and check she can sign in to it", ok:true, why:"Otherwise she could be left with no account able to make system changes."},
      {t:"Change her account to standard straight away", why:"With no other administrator, she couldn’t install software or change settings afterwards."},
      {t:"Delete her account and start again", why:"That would remove her files and settings unnecessarily."},
      {t:"Turn off all security prompts", why:"Prompts are part of the protection; turning them off defeats the purpose."}
    ]},
    {id:"t1u1-q36", lesson:"t1u1-l4", level:2, q:"Why should you keep a device plugged in during a firmware update?", options:[
      {t:"Interrupting a firmware update can leave the device unable to start", ok:true, why:"Firmware controls start-up; a half-written update can break it."},
      {t:"Firmware updates need extra internet speed", why:"Power, not internet speed, is the risk during installation."},
      {t:"Firmware updates delete your files unless plugged in", why:"Firmware updates don’t normally touch your files; the risk is the device itself."},
      {t:"The battery charges faster during updates", why:"That isn’t the reason. The point is avoiding an interrupted update."}
    ]},
    /* ---- Lesson 5 ---- */
    {id:"t1u1-q37", lesson:"t1u1-l5", level:1, q:"Why does restarting fix so many problems?", options:[
      {t:"It clears memory, ends stuck programs and reloads the system from a clean state", ok:true, why:"Small problems that build up while a device runs are wiped away."},
      {t:"It deletes temporary files from storage", why:"A restart clears RAM, not your stored files."},
      {t:"It reinstalls the operating system", why:"A restart only reloads the existing system; reinstalling is much bigger."},
      {t:"It speeds up your internet plan", why:"Your plan’s speed is set by your provider."}
    ]},
    {id:"t1u1-q38", lesson:"t1u1-l5", level:3, q:"Kenji’s Windows PC has a glitch that survives Shut down and power on. Why might Restart work where Shut down didn’t?", options:[
      {t:"With Fast Startup on, Shut down saves the Windows core to storage; Restart does a full fresh boot", ok:true, why:"Microsoft documents that Fast Startup doesn’t apply to Restart."},
      {t:"Restart is identical to Shut down, so it won’t help", why:"On Windows with Fast Startup on, they behave differently."},
      {t:"Restart frees storage space", why:"Restart clears memory, not storage."},
      {t:"Restart contacts Microsoft to repair the PC", why:"Restart works locally; nothing is sent for repair."}
    ]},
    {id:"t1u1-q39", lesson:"t1u1-l5", level:1, q:"On Windows, which keys open Task Manager directly?", options:[
      {t:"Ctrl + Shift + Esc", ok:true, why:"That shortcut opens Task Manager straight away."},
      {t:"Ctrl + C", why:"That copies the selected item."},
      {t:"Alt + F4", why:"That closes the current window."},
      {t:"Windows key + L", why:"That locks the computer."}
    ]},
    {id:"t1u1-q40", lesson:"t1u1-l5", level:2, q:"An update keeps failing with “not enough space”. What should you check first?", options:[
      {t:"Storage settings, to see what is using space and free some", ok:true, why:"Updates need free storage to download and install."},
      {t:"The screen brightness", why:"Brightness has nothing to do with update space."},
      {t:"The keyboard connection", why:"Input devices aren’t involved in storing updates."},
      {t:"How much RAM is in use", why:"The message is about storage space, not working memory."}
    ]},
    {id:"t1u1-q41", lesson:"t1u1-l5", level:3, q:"Priya needs space and finds a folder of system files she doesn’t recognise inside the Windows folder. What should she do?", options:[
      {t:"Leave them alone and use Storage settings to remove downloads, unused apps and emptied Recycle Bin items", ok:true, why:"System files keep Windows running; the built-in tools show safe things to remove."},
      {t:"Delete them, since she didn’t create them", why:"Deleting system files can stop Windows from starting."},
      {t:"Move them to a USB stick", why:"Windows still needs them in place; moving them can break the system."},
      {t:"Rename them so Windows ignores them", why:"Renaming system files can also break Windows."}
    ]},
    {id:"t1u1-q42", lesson:"t1u1-l5", level:2, q:"Which description gives a helper the most to work with?", options:[
      {t:"“Windows 11 laptop. Update fails with error 0x80070070 since yesterday. Restarted twice.”", ok:true, why:"It has the system, the exact error, when it started and what was tried."},
      {t:"“My computer is broken, please help.”", why:"It doesn’t say what is wrong, on what device, or what happened."},
      {t:"“It’s doing the thing again.”", why:"The helper can’t know what “the thing” is."},
      {t:"“Updates are annoying, can you fix it ASAP?”", why:"No device, no message, no detail to diagnose."}
    ]},
    {id:"t1u1-q43", lesson:"t1u1-l5", level:3, q:"A pop-up says: “Virus detected! Call Microsoft Support at this number now.” What should Amara do?", options:[
      {t:"Not call; close the tab or browser (with Task Manager if needed)", ok:true, why:"Microsoft says its error and warning messages never include a phone number. This is a tech support scam."},
      {t:"Call quickly to stop the virus spreading", why:"The number reaches scammers who try to get remote access or payment."},
      {t:"Download the repair tool the pop-up offers", why:"Tools from scam pages are often malware."},
      {t:"Give them remote access so they can check", why:"Never grant remote access to someone you didn’t contact yourself."}
    ]},
    {id:"t1u1-q44", lesson:"t1u1-l5", level:2, q:"Which situation means you should stop first aid and get professional help?", options:[
      {t:"The battery is swollen and the case is bulging", ok:true, why:"A swollen battery is a physical safety risk; stop using and charging the device."},
      {t:"An app froze once", why:"Close and reopen it, or restart: normal first aid."},
      {t:"An update is waiting to install", why:"Install it; that’s routine maintenance."},
      {t:"Storage is 80% full", why:"Tidying up storage is normal first aid."}
    ]},
    {id:"t1u1-q45", lesson:"t1u1-l5", level:1, q:"What is the Mac’s equivalent of Windows Task Manager?", options:[
      {t:"Activity Monitor", ok:true, why:"It shows CPU, memory, energy, disk and network use for each process."},
      {t:"Finder", why:"Finder is for browsing files."},
      {t:"System Settings", why:"System Settings changes preferences; it doesn’t list running processes."},
      {t:"Spotlight", why:"Spotlight searches; you can use it to open Activity Monitor, but it isn’t the monitor itself."}
    ]}
  ]
});
